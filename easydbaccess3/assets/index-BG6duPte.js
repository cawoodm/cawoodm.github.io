(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Gd="modulepreload",Wd=function(e){return"/easydbaccess3/"+e},Ma={},ct=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){let a=function(f){return Promise.all(f.map(g=>Promise.resolve(g).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),u=c?.nonce||c?.getAttribute("nonce");i=a(n.map(f=>{if(f=Wd(f),f in Ma)return;Ma[f]=!0;const g=f.endsWith(".css"),b=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${b}`))return;const y=document.createElement("link");if(y.rel=g?"stylesheet":Gd,g||(y.as="script"),y.crossOrigin="",y.href=f,u&&y.setAttribute("nonce",u),document.head.appendChild(y),g)return new Promise((v,C)=>{y.addEventListener("load",v),y.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${f}`)))})}))}function s(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return i.then(a=>{for(const c of a||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hi=globalThis,mo=hi.ShadowRoot&&(hi.ShadyCSS===void 0||hi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,go=Symbol(),ja=new WeakMap;let yc=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==go)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(mo&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=ja.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&ja.set(n,t))}return t}toString(){return this.cssText}};const Yd=e=>new yc(typeof e=="string"?e:e+"",void 0,go),$e=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,s)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new yc(n,e,go)},Xd=(e,t)=>{if(mo)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=hi.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},Na=mo?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Yd(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Jd,defineProperty:Qd,getOwnPropertyDescriptor:Zd,getOwnPropertyNames:eh,getOwnPropertySymbols:th,getPrototypeOf:nh}=Object,Oi=globalThis,za=Oi.trustedTypes,rh=za?za.emptyScript:"",ih=Oi.reactiveElementPolyfillSupport,hr=(e,t)=>e,bi={toAttribute(e,t){switch(t){case Boolean:e=e?rh:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},bo=(e,t)=>!Jd(e,t),Ua={attribute:!0,type:String,converter:bi,reflect:!1,useDefault:!1,hasChanged:bo};Symbol.metadata??=Symbol("metadata"),Oi.litPropertyMetadata??=new WeakMap;let Tn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Ua){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&Qd(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:s}=Zd(this.prototype,t)??{get(){return this[n]},set(a){this[n]=a}};return{get:i,set(a){const c=i?.call(this);s?.call(this,a),this.requestUpdate(t,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ua}static _$Ei(){if(this.hasOwnProperty(hr("elementProperties")))return;const t=nh(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(hr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(hr("properties"))){const n=this.properties,r=[...eh(n),...th(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(Na(i))}else t!==void 0&&n.push(Na(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xd(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:bi).toAttribute(n,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,n){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:bi;this._$Em=i;const c=a.fromAttribute(n,s.type);this[i]=c??this._$Ej?.get(i)??c,this._$Em=null}}requestUpdate(t,n,r,i=!1,s){if(t!==void 0){const a=this.constructor;if(i===!1&&(s=this[t]),r??=a.getPropertyOptions(t),!((r.hasChanged??bo)(s,n)||r.useDefault&&r.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:i,wrapped:s},a){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??n??this[t]),s!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,s]of r){const{wrapped:a}=s,c=this[i];a!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,s,c)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};Tn.elementStyles=[],Tn.shadowRootOptions={mode:"open"},Tn[hr("elementProperties")]=new Map,Tn[hr("finalized")]=new Map,ih?.({ReactiveElement:Tn}),(Oi.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wo=globalThis,Fa=e=>e,wi=wo.trustedTypes,Ba=wi?wi.createPolicy("lit-html",{createHTML:e=>e}):void 0,vc="$lit$",Gt=`lit$${Math.random().toFixed(9).slice(2)}$`,xc="?"+Gt,sh=`<${xc}>`,pn=document,pr=()=>pn.createComment(""),mr=e=>e===null||typeof e!="object"&&typeof e!="function",yo=Array.isArray,oh=e=>yo(e)||typeof e?.[Symbol.iterator]=="function",zs=`[ 	
\f\r]`,sr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ha=/-->/g,qa=/>/g,cn=RegExp(`>|${zs}(?:([^\\s"'>=/]+)(${zs}*=${zs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ka=/'/g,Va=/"/g,$c=/^(?:script|style|textarea|title)$/i,ah=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),$=ah(1),mn=Symbol.for("lit-noChange"),re=Symbol.for("lit-nothing"),Ga=new WeakMap,fn=pn.createTreeWalker(pn,129);function kc(e,t){if(!yo(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ba!==void 0?Ba.createHTML(t):t}const lh=(e,t)=>{const n=e.length-1,r=[];let i,s=t===2?"<svg>":t===3?"<math>":"",a=sr;for(let c=0;c<n;c++){const u=e[c];let f,g,b=-1,y=0;for(;y<u.length&&(a.lastIndex=y,g=a.exec(u),g!==null);)y=a.lastIndex,a===sr?g[1]==="!--"?a=Ha:g[1]!==void 0?a=qa:g[2]!==void 0?($c.test(g[2])&&(i=RegExp("</"+g[2],"g")),a=cn):g[3]!==void 0&&(a=cn):a===cn?g[0]===">"?(a=i??sr,b=-1):g[1]===void 0?b=-2:(b=a.lastIndex-g[2].length,f=g[1],a=g[3]===void 0?cn:g[3]==='"'?Va:Ka):a===Va||a===Ka?a=cn:a===Ha||a===qa?a=sr:(a=cn,i=void 0);const v=a===cn&&e[c+1].startsWith("/>")?" ":"";s+=a===sr?u+sh:b>=0?(r.push(f),u.slice(0,b)+vc+u.slice(b)+Gt+v):u+Gt+(b===-2?c:v)}return[kc(e,s+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class gr{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let s=0,a=0;const c=t.length-1,u=this.parts,[f,g]=lh(t,n);if(this.el=gr.createElement(f,r),fn.currentNode=this.el.content,n===2||n===3){const b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(i=fn.nextNode())!==null&&u.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const b of i.getAttributeNames())if(b.endsWith(vc)){const y=g[a++],v=i.getAttribute(b).split(Gt),C=/([.?@])?(.*)/.exec(y);u.push({type:1,index:s,name:C[2],strings:v,ctor:C[1]==="."?uh:C[1]==="?"?dh:C[1]==="@"?hh:Di}),i.removeAttribute(b)}else b.startsWith(Gt)&&(u.push({type:6,index:s}),i.removeAttribute(b));if($c.test(i.tagName)){const b=i.textContent.split(Gt),y=b.length-1;if(y>0){i.textContent=wi?wi.emptyScript:"";for(let v=0;v<y;v++)i.append(b[v],pr()),fn.nextNode(),u.push({type:2,index:++s});i.append(b[y],pr())}}}else if(i.nodeType===8)if(i.data===xc)u.push({type:2,index:s});else{let b=-1;for(;(b=i.data.indexOf(Gt,b+1))!==-1;)u.push({type:7,index:s}),b+=Gt.length-1}s++}}static createElement(t,n){const r=pn.createElement("template");return r.innerHTML=t,r}}function Rn(e,t,n=e,r){if(t===mn)return t;let i=r!==void 0?n._$Co?.[r]:n._$Cl;const s=mr(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=i:n._$Cl=i),i!==void 0&&(t=Rn(e,i._$AS(e,t.values),i,r)),t}class ch{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=(t?.creationScope??pn).importNode(n,!0);fn.currentNode=i;let s=fn.nextNode(),a=0,c=0,u=r[0];for(;u!==void 0;){if(a===u.index){let f;u.type===2?f=new kr(s,s.nextSibling,this,t):u.type===1?f=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(f=new fh(s,this,t)),this._$AV.push(f),u=r[++c]}a!==u?.index&&(s=fn.nextNode(),a++)}return fn.currentNode=pn,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class kr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=re,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Rn(this,t,n),mr(t)?t===re||t==null||t===""?(this._$AH!==re&&this._$AR(),this._$AH=re):t!==this._$AH&&t!==mn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):oh(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==re&&mr(this._$AH)?this._$AA.nextSibling.data=t:this.T(pn.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=gr.createElement(kc(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(n);else{const s=new ch(i,this),a=s.u(this.options);s.p(n),this.T(a),this._$AH=s}}_$AC(t){let n=Ga.get(t.strings);return n===void 0&&Ga.set(t.strings,n=new gr(t)),n}k(t){yo(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of t)i===n.length?n.push(r=new kr(this.O(pr()),this.O(pr()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const r=Fa(t).nextSibling;Fa(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Di{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,s){this.type=1,this._$AH=re,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=re}_$AI(t,n=this,r,i){const s=this.strings;let a=!1;if(s===void 0)t=Rn(this,t,n,0),a=!mr(t)||t!==this._$AH&&t!==mn,a&&(this._$AH=t);else{const c=t;let u,f;for(t=s[0],u=0;u<s.length-1;u++)f=Rn(this,c[r+u],n,u),f===mn&&(f=this._$AH[u]),a||=!mr(f)||f!==this._$AH[u],f===re?t=re:t!==re&&(t+=(f??"")+s[u+1]),this._$AH[u]=f}a&&!i&&this.j(t)}j(t){t===re?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class uh extends Di{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===re?void 0:t}}class dh extends Di{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==re)}}class hh extends Di{constructor(t,n,r,i,s){super(t,n,r,i,s),this.type=5}_$AI(t,n=this){if((t=Rn(this,t,n,0)??re)===mn)return;const r=this._$AH,i=t===re&&r!==re||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==re&&(r===re||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class fh{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Rn(this,t)}}const ph=wo.litHtmlPolyfillSupport;ph?.(gr,kr),(wo.litHtmlVersions??=[]).push("3.3.3");const mh=(e,t,n)=>{const r=n?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const s=n?.renderBefore??null;r._$litPart$=i=new kr(t.insertBefore(pr(),s),s,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vo=globalThis;let ve=class extends Tn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=mh(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return mn}};ve._$litElement$=!0,ve.finalized=!0,vo.litElementHydrateSupport?.({LitElement:ve});const gh=vo.litElementPolyfillSupport;gh?.({LitElement:ve});(vo.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bh={attribute:!0,type:String,converter:bi,reflect:!1,hasChanged:bo},wh=(e=bh,t,n)=>{const{kind:r,metadata:i}=n;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(n.name,e),r==="accessor"){const{name:a}=n;return{set(c){const u=t.get.call(this);t.set.call(this,c),this.requestUpdate(a,u,e,!0,c)},init(c){return c!==void 0&&this.C(a,void 0,e,c),c}}}if(r==="setter"){const{name:a}=n;return function(c){const u=this[a];t.call(this,c),this.requestUpdate(a,u,e,!0,c)}}throw Error("Unsupported decorator location: "+r)};function dt(e){return(t,n)=>typeof n=="object"?wh(e,t,n):((r,i,s)=>{const a=i.hasOwnProperty(s);return i.constructor.createProperty(s,r),a?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(e){return dt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yh=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Dt(e,t){return(n,r,i)=>{const s=a=>a.renderRoot?.querySelector(e)??null;return yh(n,r,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vh={CHILD:2},_c=e=>(...t)=>({_$litDirective$:e,values:t});class xh{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class yi extends xh{constructor(t){if(super(t),this.it=re,t.type!==vh.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===re||t==null)return this._t=void 0,this.it=t;if(t===mn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}yi.directiveName="unsafeHTML",yi.resultType=1;const An=_c(yi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Js extends yi{}Js.directiveName="unsafeSVG",Js.resultType=2;const xo=_c(Js);var $h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fi={exports:{}},_h=fi.exports,Wa;function Ch(){return Wa||(Wa=1,(function(e,t){(function(n,r){e.exports=r()})(_h,function(){var n=function(o,l){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,h){d.__proto__=h}||function(d,h){for(var p in h)Object.prototype.hasOwnProperty.call(h,p)&&(d[p]=h[p])})(o,l)},r=function(){return(r=Object.assign||function(o){for(var l,d=1,h=arguments.length;d<h;d++)for(var p in l=arguments[d])Object.prototype.hasOwnProperty.call(l,p)&&(o[p]=l[p]);return o}).apply(this,arguments)};function i(o,l,d){for(var h,p=0,m=l.length;p<m;p++)!h&&p in l||((h=h||Array.prototype.slice.call(l,0,p))[p]=l[p]);return o.concat(h||Array.prototype.slice.call(l))}var s=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:$h,a=Object.keys,c=Array.isArray;function u(o,l){return typeof l!="object"||a(l).forEach(function(d){o[d]=l[d]}),o}typeof Promise>"u"||s.Promise||(s.Promise=Promise);var f=Object.getPrototypeOf,g={}.hasOwnProperty;function b(o,l){return g.call(o,l)}function y(o,l){typeof l=="function"&&(l=l(f(o))),(typeof Reflect>"u"?a:Reflect.ownKeys)(l).forEach(function(d){C(o,d,l[d])})}var v=Object.defineProperty;function C(o,l,d,h){v(o,l,u(d&&b(d,"get")&&typeof d.get=="function"?{get:d.get,set:d.set,configurable:!0}:{value:d,configurable:!0,writable:!0},h))}function _(o){return{from:function(l){return o.prototype=Object.create(l.prototype),C(o.prototype,"constructor",o),{extend:y.bind(null,o.prototype)}}}}var O=Object.getOwnPropertyDescriptor,M=[].slice;function L(o,l,d){return M.call(o,l,d)}function F(o,l){return l(o)}function V(o){if(!o)throw new Error("Assertion Failed")}function W(o){s.setImmediate?setImmediate(o):setTimeout(o,0)}function G(o,l){if(typeof l=="string"&&b(o,l))return o[l];if(!l)return o;if(typeof l!="string"){for(var d=[],h=0,p=l.length;h<p;++h){var m=G(o,l[h]);d.push(m)}return d}var w=l.indexOf(".");if(w!==-1){var x=o[l.substr(0,w)];return x==null?void 0:G(x,l.substr(w+1))}}function H(o,l,d){if(o&&l!==void 0&&!("isFrozen"in Object&&Object.isFrozen(o)))if(typeof l!="string"&&"length"in l){V(typeof d!="string"&&"length"in d);for(var h=0,p=l.length;h<p;++h)H(o,l[h],d[h])}else{var m,w,x=l.indexOf(".");x!==-1?(m=l.substr(0,x),(w=l.substr(x+1))===""?d===void 0?c(o)&&!isNaN(parseInt(m))?o.splice(m,1):delete o[m]:o[m]=d:H(x=!(x=o[m])||!b(o,m)?o[m]={}:x,w,d)):d===void 0?c(o)&&!isNaN(parseInt(l))?o.splice(l,1):delete o[l]:o[l]=d}}function Y(o){var l,d={};for(l in o)b(o,l)&&(d[l]=o[l]);return d}var ie=[].concat;function se(o){return ie.apply([],o)}var Lt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(se([8,16,32,64].map(function(o){return["Int","Uint","Float"].map(function(l){return l+o+"Array"})}))).filter(function(o){return s[o]}),q=new Set(Lt.map(function(o){return s[o]})),K=null;function ce(o){return K=new WeakMap,o=(function l(d){if(!d||typeof d!="object")return d;var h=K.get(d);if(h)return h;if(c(d)){h=[],K.set(d,h);for(var p=0,m=d.length;p<m;++p)h.push(l(d[p]))}else if(q.has(d.constructor))h=d;else{var w,x=f(d);for(w in h=x===Object.prototype?{}:Object.create(x),K.set(d,h),d)b(d,w)&&(h[w]=l(d[w]))}return h})(o),K=null,o}var pe={}.toString;function Te(o){return pe.call(o).slice(8,-1)}var Ne=typeof Symbol<"u"?Symbol.iterator:"@@iterator",gt=typeof Ne=="symbol"?function(o){var l;return o!=null&&(l=o[Ne])&&l.apply(o)}:function(){return null};function de(o,l){return l=o.indexOf(l),0<=l&&o.splice(l,1),0<=l}var Pe={};function Ae(o){var l,d,h,p;if(arguments.length===1){if(c(o))return o.slice();if(this===Pe&&typeof o=="string")return[o];if(p=gt(o)){for(d=[];!(h=p.next()).done;)d.push(h.value);return d}if(o==null)return[o];if(typeof(l=o.length)!="number")return[o];for(d=new Array(l);l--;)d[l]=o[l];return d}for(l=arguments.length,d=new Array(l);l--;)d[l]=arguments[l];return d}var et=typeof Symbol<"u"?function(o){return o[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Gn=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],bt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Gn),ye={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function He(o,l){this.name=o,this.message=l}function ts(o,l){return o+". Errors: "+Object.keys(l).map(function(d){return l[d].toString()}).filter(function(d,h,p){return p.indexOf(d)===h}).join(`
`)}function yn(o,l,d,h){this.failures=l,this.failedKeys=h,this.successCount=d,this.message=ts(o,l)}function vn(o,l){this.name="BulkError",this.failures=Object.keys(l).map(function(d){return l[d]}),this.failuresByPos=l,this.message=ts(o,this.failures)}_(He).from(Error).extend({toString:function(){return this.name+": "+this.message}}),_(yn).from(He),_(vn).from(He);var ns=bt.reduce(function(o,l){return o[l]=l+"Error",o},{}),gd=He,ue=bt.reduce(function(o,l){var d=l+"Error";function h(p,m){this.name=d,p?typeof p=="string"?(this.message="".concat(p).concat(m?`
 `+m:""),this.inner=m||null):typeof p=="object"&&(this.message="".concat(p.name," ").concat(p.message),this.inner=p):(this.message=ye[l]||d,this.inner=null)}return _(h).from(gd),o[l]=h,o},{});ue.Syntax=SyntaxError,ue.Type=TypeError,ue.Range=RangeError;var na=Gn.reduce(function(o,l){return o[l+"Error"]=ue[l],o},{}),Ar=bt.reduce(function(o,l){return["Syntax","Type","Range"].indexOf(l)===-1&&(o[l+"Error"]=ue[l]),o},{});function xe(){}function Kn(o){return o}function bd(o,l){return o==null||o===Kn?l:function(d){return l(o(d))}}function Qt(o,l){return function(){o.apply(this,arguments),l.apply(this,arguments)}}function wd(o,l){return o===xe?l:function(){var d=o.apply(this,arguments);d!==void 0&&(arguments[0]=d);var h=this.onsuccess,p=this.onerror;this.onsuccess=null,this.onerror=null;var m=l.apply(this,arguments);return h&&(this.onsuccess=this.onsuccess?Qt(h,this.onsuccess):h),p&&(this.onerror=this.onerror?Qt(p,this.onerror):p),m!==void 0?m:d}}function yd(o,l){return o===xe?l:function(){o.apply(this,arguments);var d=this.onsuccess,h=this.onerror;this.onsuccess=this.onerror=null,l.apply(this,arguments),d&&(this.onsuccess=this.onsuccess?Qt(d,this.onsuccess):d),h&&(this.onerror=this.onerror?Qt(h,this.onerror):h)}}function vd(o,l){return o===xe?l:function(d){var h=o.apply(this,arguments);u(d,h);var p=this.onsuccess,m=this.onerror;return this.onsuccess=null,this.onerror=null,d=l.apply(this,arguments),p&&(this.onsuccess=this.onsuccess?Qt(p,this.onsuccess):p),m&&(this.onerror=this.onerror?Qt(m,this.onerror):m),h===void 0?d===void 0?void 0:d:u(h,d)}}function xd(o,l){return o===xe?l:function(){return l.apply(this,arguments)!==!1&&o.apply(this,arguments)}}function rs(o,l){return o===xe?l:function(){var d=o.apply(this,arguments);if(d&&typeof d.then=="function"){for(var h=this,p=arguments.length,m=new Array(p);p--;)m[p]=arguments[p];return d.then(function(){return l.apply(h,m)})}return l.apply(this,arguments)}}Ar.ModifyError=yn,Ar.DexieError=He,Ar.BulkError=vn;var St=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function ra(o){St=o}var Vn={},ia=100,Lt=typeof Promise>"u"?[]:(function(){var o=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[o,f(o),o];var l=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[l,f(l),o]})(),Gn=Lt[0],bt=Lt[1],Lt=Lt[2],bt=bt&&bt.then,Zt=Gn&&Gn.constructor,is=!!Lt,Wn=function(o,l){Yn.push([o,l]),Rr&&(queueMicrotask(kd),Rr=!1)},ss=!0,Rr=!0,en=[],Or=[],os=Kn,zt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:xe,pgp:!1,env:{},finalize:xe},le=zt,Yn=[],tn=0,Dr=[];function ne(o){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var l=this._PSD=le;if(typeof o!="function"){if(o!==Vn)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&ls(this,this._value))}this._state=null,this._value=null,++l.ref,(function d(h,p){try{p(function(m){if(h._state===null){if(m===h)throw new TypeError("A promise cannot be resolved with itself.");var w=h._lib&&xn();m&&typeof m.then=="function"?d(h,function(x,S){m instanceof ne?m._then(x,S):m.then(x,S)}):(h._state=!0,h._value=m,oa(h)),w&&$n()}},ls.bind(null,h))}catch(m){ls(h,m)}})(this,o)}var as={get:function(){var o=le,l=jr;function d(h,p){var m=this,w=!o.global&&(o!==le||l!==jr),x=w&&!Ft(),S=new ne(function(T,R){cs(m,new sa(la(h,o,w,x),la(p,o,w,x),T,R,o))});return this._consoleTask&&(S._consoleTask=this._consoleTask),S}return d.prototype=Vn,d},set:function(o){C(this,"then",o&&o.prototype===Vn?as:{get:function(){return o},set:as.set})}};function sa(o,l,d,h,p){this.onFulfilled=typeof o=="function"?o:null,this.onRejected=typeof l=="function"?l:null,this.resolve=d,this.reject=h,this.psd=p}function ls(o,l){var d,h;Or.push(l),o._state===null&&(d=o._lib&&xn(),l=os(l),o._state=!1,o._value=l,h=o,en.some(function(p){return p._value===h._value})||en.push(h),oa(o),d&&$n())}function oa(o){var l=o._listeners;o._listeners=[];for(var d=0,h=l.length;d<h;++d)cs(o,l[d]);var p=o._PSD;--p.ref||p.finalize(),tn===0&&(++tn,Wn(function(){--tn==0&&us()},[]))}function cs(o,l){if(o._state!==null){var d=o._state?l.onFulfilled:l.onRejected;if(d===null)return(o._state?l.resolve:l.reject)(o._value);++l.psd.ref,++tn,Wn($d,[d,o,l])}else o._listeners.push(l)}function $d(o,l,d){try{var h,p=l._value;!l._state&&Or.length&&(Or=[]),h=St&&l._consoleTask?l._consoleTask.run(function(){return o(p)}):o(p),l._state||Or.indexOf(p)!==-1||(function(m){for(var w=en.length;w;)if(en[--w]._value===m._value)return en.splice(w,1)})(l),d.resolve(h)}catch(m){d.reject(m)}finally{--tn==0&&us(),--d.psd.ref||d.psd.finalize()}}function kd(){nn(zt,function(){xn()&&$n()})}function xn(){var o=ss;return Rr=ss=!1,o}function $n(){var o,l,d;do for(;0<Yn.length;)for(o=Yn,Yn=[],d=o.length,l=0;l<d;++l){var h=o[l];h[0].apply(null,h[1])}while(0<Yn.length);Rr=ss=!0}function us(){var o=en;en=[],o.forEach(function(h){h._PSD.onunhandled.call(null,h._value,h)});for(var l=Dr.slice(0),d=l.length;d;)l[--d]()}function Pr(o){return new ne(Vn,!1,o)}function Se(o,l){var d=le;return function(){var h=xn(),p=le;try{return Bt(d,!0),o.apply(this,arguments)}catch(m){l&&l(m)}finally{Bt(p,!1),h&&$n()}}}y(ne.prototype,{then:as,_then:function(o,l){cs(this,new sa(null,null,o,l,le))},catch:function(o){if(arguments.length===1)return this.then(null,o);var l=o,d=arguments[1];return typeof l=="function"?this.then(null,function(h){return(h instanceof l?d:Pr)(h)}):this.then(null,function(h){return(h&&h.name===l?d:Pr)(h)})},finally:function(o){return this.then(function(l){return ne.resolve(o()).then(function(){return l})},function(l){return ne.resolve(o()).then(function(){return Pr(l)})})},timeout:function(o,l){var d=this;return o<1/0?new ne(function(h,p){var m=setTimeout(function(){return p(new ue.Timeout(l))},o);d.then(h,p).finally(clearTimeout.bind(null,m))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&C(ne.prototype,Symbol.toStringTag,"Dexie.Promise"),zt.env=aa(),y(ne,{all:function(){var o=Ae.apply(null,arguments).map(Nr);return new ne(function(l,d){o.length===0&&l([]);var h=o.length;o.forEach(function(p,m){return ne.resolve(p).then(function(w){o[m]=w,--h||l(o)},d)})})},resolve:function(o){return o instanceof ne?o:o&&typeof o.then=="function"?new ne(function(l,d){o.then(l,d)}):new ne(Vn,!0,o)},reject:Pr,race:function(){var o=Ae.apply(null,arguments).map(Nr);return new ne(function(l,d){o.map(function(h){return ne.resolve(h).then(l,d)})})},PSD:{get:function(){return le},set:function(o){return le=o}},totalEchoes:{get:function(){return jr}},newPSD:Ut,usePSD:nn,scheduler:{get:function(){return Wn},set:function(o){Wn=o}},rejectionMapper:{get:function(){return os},set:function(o){os=o}},follow:function(o,l){return new ne(function(d,h){return Ut(function(p,m){var w=le;w.unhandleds=[],w.onunhandled=m,w.finalize=Qt(function(){var x,S=this;x=function(){S.unhandleds.length===0?p():m(S.unhandleds[0])},Dr.push(function T(){x(),Dr.splice(Dr.indexOf(T),1)}),++tn,Wn(function(){--tn==0&&us()},[])},w.finalize),o()},l,d,h)})}}),Zt&&(Zt.allSettled&&C(ne,"allSettled",function(){var o=Ae.apply(null,arguments).map(Nr);return new ne(function(l){o.length===0&&l([]);var d=o.length,h=new Array(d);o.forEach(function(p,m){return ne.resolve(p).then(function(w){return h[m]={status:"fulfilled",value:w}},function(w){return h[m]={status:"rejected",reason:w}}).then(function(){return--d||l(h)})})})}),Zt.any&&typeof AggregateError<"u"&&C(ne,"any",function(){var o=Ae.apply(null,arguments).map(Nr);return new ne(function(l,d){o.length===0&&d(new AggregateError([]));var h=o.length,p=new Array(h);o.forEach(function(m,w){return ne.resolve(m).then(function(x){return l(x)},function(x){p[w]=x,--h||d(new AggregateError(p))})})})}),Zt.withResolvers&&(ne.withResolvers=Zt.withResolvers));var Le={awaits:0,echoes:0,id:0},_d=0,Lr=[],Mr=0,jr=0,Cd=0;function Ut(o,l,d,h){var p=le,m=Object.create(p);return m.parent=p,m.ref=0,m.global=!1,m.id=++Cd,zt.env,m.env=is?{Promise:ne,PromiseProp:{value:ne,configurable:!0,writable:!0},all:ne.all,race:ne.race,allSettled:ne.allSettled,any:ne.any,resolve:ne.resolve,reject:ne.reject}:{},l&&u(m,l),++p.ref,m.finalize=function(){--this.parent.ref||this.parent.finalize()},h=nn(m,o,d,h),m.ref===0&&m.finalize(),h}function kn(){return Le.id||(Le.id=++_d),++Le.awaits,Le.echoes+=ia,Le.id}function Ft(){return!!Le.awaits&&(--Le.awaits==0&&(Le.id=0),Le.echoes=Le.awaits*ia,!0)}function Nr(o){return Le.echoes&&o&&o.constructor===Zt?(kn(),o.then(function(l){return Ft(),l},function(l){return Ft(),Re(l)})):o}function Sd(){var o=Lr[Lr.length-1];Lr.pop(),Bt(o,!1)}function Bt(o,l){var d,h=le;(l?!Le.echoes||Mr++&&o===le:!Mr||--Mr&&o===le)||queueMicrotask(l?function(p){++jr,Le.echoes&&--Le.echoes!=0||(Le.echoes=Le.awaits=Le.id=0),Lr.push(le),Bt(p,!0)}.bind(null,o):Sd),o!==le&&(le=o,h===zt&&(zt.env=aa()),is&&(d=zt.env.Promise,l=o.env,(h.global||o.global)&&(Object.defineProperty(s,"Promise",l.PromiseProp),d.all=l.all,d.race=l.race,d.resolve=l.resolve,d.reject=l.reject,l.allSettled&&(d.allSettled=l.allSettled),l.any&&(d.any=l.any))))}function aa(){var o=s.Promise;return is?{Promise:o,PromiseProp:Object.getOwnPropertyDescriptor(s,"Promise"),all:o.all,race:o.race,allSettled:o.allSettled,any:o.any,resolve:o.resolve,reject:o.reject}:{}}function nn(o,l,d,h,p){var m=le;try{return Bt(o,!0),l(d,h,p)}finally{Bt(m,!1)}}function la(o,l,d,h){return typeof o!="function"?o:function(){var p=le;d&&kn(),Bt(l,!0);try{return o.apply(this,arguments)}finally{Bt(p,!1),h&&queueMicrotask(Ft)}}}function ds(o){Promise===Zt&&Le.echoes===0?Mr===0?o():enqueueNativeMicroTask(o):setTimeout(o,0)}(""+bt).indexOf("[native code]")===-1&&(kn=Ft=xe);var Re=ne.reject,rn="￿",Pt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ca="String expected.",_n=[],zr="__dbnames",hs="readonly",fs="readwrite";function sn(o,l){return o?l?function(){return o.apply(this,arguments)&&l.apply(this,arguments)}:o:l}var ua={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Ur(o){return typeof o!="string"||/\./.test(o)?function(l){return l}:function(l){return l[o]===void 0&&o in l&&delete(l=ce(l))[o],l}}function da(){throw ue.Type()}function be(o,l){try{var d=ha(o),h=ha(l);if(d!==h)return d==="Array"?1:h==="Array"?-1:d==="binary"?1:h==="binary"?-1:d==="string"?1:h==="string"?-1:d==="Date"?1:h!=="Date"?NaN:-1;switch(d){case"number":case"Date":case"string":return l<o?1:o<l?-1:0;case"binary":return(function(p,m){for(var w=p.length,x=m.length,S=w<x?w:x,T=0;T<S;++T)if(p[T]!==m[T])return p[T]<m[T]?-1:1;return w===x?0:w<x?-1:1})(fa(o),fa(l));case"Array":return(function(p,m){for(var w=p.length,x=m.length,S=w<x?w:x,T=0;T<S;++T){var R=be(p[T],m[T]);if(R!==0)return R}return w===x?0:w<x?-1:1})(o,l)}}catch{}return NaN}function ha(o){var l=typeof o;return l!="object"?l:ArrayBuffer.isView(o)?"binary":(o=Te(o),o==="ArrayBuffer"?"binary":o)}function fa(o){return o instanceof Uint8Array?o:ArrayBuffer.isView(o)?new Uint8Array(o.buffer,o.byteOffset,o.byteLength):new Uint8Array(o)}var pa=(ke.prototype._trans=function(o,l,d){var h=this._tx||le.trans,p=this.name,m=St&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(o==="readonly"?"read":"write"," ").concat(this.name));function w(T,R,k){if(!k.schema[p])throw new ue.NotFound("Table "+p+" not part of transaction");return l(k.idbtrans,k)}var x=xn();try{var S=h&&h.db._novip===this.db._novip?h===le.trans?h._promise(o,w,d):Ut(function(){return h._promise(o,w,d)},{trans:h,transless:le.transless||le}):(function T(R,k,P,E){if(R.idbdb&&(R._state.openComplete||le.letThrough||R._vip)){var A=R._createTransaction(k,P,R._dbSchema);try{A.create(),R._state.PR1398_maxLoop=3}catch(D){return D.name===ns.InvalidState&&R.isOpen()&&0<--R._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),R.close({disableAutoOpen:!1}),R.open().then(function(){return T(R,k,P,E)})):Re(D)}return A._promise(k,function(D,I){return Ut(function(){return le.trans=A,E(D,I,A)})}).then(function(D){if(k==="readwrite")try{A.idbtrans.commit()}catch{}return k==="readonly"?D:A._completion.then(function(){return D})})}if(R._state.openComplete)return Re(new ue.DatabaseClosed(R._state.dbOpenError));if(!R._state.isBeingOpened){if(!R._state.autoOpen)return Re(new ue.DatabaseClosed);R.open().catch(xe)}return R._state.dbReadyPromise.then(function(){return T(R,k,P,E)})})(this.db,o,[this.name],w);return m&&(S._consoleTask=m,S=S.catch(function(T){return console.trace(T),Re(T)})),S}finally{x&&$n()}},ke.prototype.get=function(o,l){var d=this;return o&&o.constructor===Object?this.where(o).first(l):o==null?Re(new ue.Type("Invalid argument to Table.get()")):this._trans("readonly",function(h){return d.core.get({trans:h,key:o}).then(function(p){return d.hook.reading.fire(p)})}).then(l)},ke.prototype.where=function(o){if(typeof o=="string")return new this.db.WhereClause(this,o);if(c(o))return new this.db.WhereClause(this,"[".concat(o.join("+"),"]"));var l=a(o);if(l.length===1)return this.where(l[0]).equals(o[l[0]]);var d=this.schema.indexes.concat(this.schema.primKey).filter(function(x){if(x.compound&&l.every(function(T){return 0<=x.keyPath.indexOf(T)})){for(var S=0;S<l.length;++S)if(l.indexOf(x.keyPath[S])===-1)return!1;return!0}return!1}).sort(function(x,S){return x.keyPath.length-S.keyPath.length})[0];if(d&&this.db._maxKey!==rn){var m=d.keyPath.slice(0,l.length);return this.where(m).equals(m.map(function(S){return o[S]}))}!d&&St&&console.warn("The query ".concat(JSON.stringify(o)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(l.join("+"),"]"));var h=this.schema.idxByName;function p(x,S){return be(x,S)===0}var w=l.reduce(function(k,S){var T=k[0],R=k[1],k=h[S],P=o[S];return[T||k,T||!k?sn(R,k&&k.multi?function(E){return E=G(E,S),c(E)&&E.some(function(A){return p(P,A)})}:function(E){return p(P,G(E,S))}):R]},[null,null]),m=w[0],w=w[1];return m?this.where(m.name).equals(o[m.keyPath]).filter(w):d?this.filter(w):this.where(l).equals("")},ke.prototype.filter=function(o){return this.toCollection().and(o)},ke.prototype.count=function(o){return this.toCollection().count(o)},ke.prototype.offset=function(o){return this.toCollection().offset(o)},ke.prototype.limit=function(o){return this.toCollection().limit(o)},ke.prototype.each=function(o){return this.toCollection().each(o)},ke.prototype.toArray=function(o){return this.toCollection().toArray(o)},ke.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},ke.prototype.orderBy=function(o){return new this.db.Collection(new this.db.WhereClause(this,c(o)?"[".concat(o.join("+"),"]"):o))},ke.prototype.reverse=function(){return this.toCollection().reverse()},ke.prototype.mapToClass=function(o){var l,d=this.db,h=this.name;function p(){return l!==null&&l.apply(this,arguments)||this}(this.schema.mappedClass=o).prototype instanceof da&&((function(S,T){if(typeof T!="function"&&T!==null)throw new TypeError("Class extends value "+String(T)+" is not a constructor or null");function R(){this.constructor=S}n(S,T),S.prototype=T===null?Object.create(T):(R.prototype=T.prototype,new R)})(p,l=o),Object.defineProperty(p.prototype,"db",{get:function(){return d},enumerable:!1,configurable:!0}),p.prototype.table=function(){return h},o=p);for(var m=new Set,w=o.prototype;w;w=f(w))Object.getOwnPropertyNames(w).forEach(function(S){return m.add(S)});function x(S){if(!S)return S;var T,R=Object.create(o.prototype);for(T in S)if(!m.has(T))try{R[T]=S[T]}catch{}return R}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=x,this.hook("reading",x),o},ke.prototype.defineClass=function(){return this.mapToClass(function(o){u(this,o)})},ke.prototype.add=function(o,l){var d=this,h=this.schema.primKey,p=h.auto,m=h.keyPath,w=o;return m&&p&&(w=Ur(m)(o)),this._trans("readwrite",function(x){return d.core.mutate({trans:x,type:"add",keys:l!=null?[l]:null,values:[w]})}).then(function(x){return x.numFailures?ne.reject(x.failures[0]):x.lastResult}).then(function(x){if(m)try{H(o,m,x)}catch{}return x})},ke.prototype.update=function(o,l){return typeof o!="object"||c(o)?this.where(":id").equals(o).modify(l):(o=G(o,this.schema.primKey.keyPath),o===void 0?Re(new ue.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(o).modify(l))},ke.prototype.put=function(o,l){var d=this,h=this.schema.primKey,p=h.auto,m=h.keyPath,w=o;return m&&p&&(w=Ur(m)(o)),this._trans("readwrite",function(x){return d.core.mutate({trans:x,type:"put",values:[w],keys:l!=null?[l]:null})}).then(function(x){return x.numFailures?ne.reject(x.failures[0]):x.lastResult}).then(function(x){if(m)try{H(o,m,x)}catch{}return x})},ke.prototype.delete=function(o){var l=this;return this._trans("readwrite",function(d){return l.core.mutate({trans:d,type:"delete",keys:[o]})}).then(function(d){return d.numFailures?ne.reject(d.failures[0]):void 0})},ke.prototype.clear=function(){var o=this;return this._trans("readwrite",function(l){return o.core.mutate({trans:l,type:"deleteRange",range:ua})}).then(function(l){return l.numFailures?ne.reject(l.failures[0]):void 0})},ke.prototype.bulkGet=function(o){var l=this;return this._trans("readonly",function(d){return l.core.getMany({keys:o,trans:d}).then(function(h){return h.map(function(p){return l.hook.reading.fire(p)})})})},ke.prototype.bulkAdd=function(o,l,d){var h=this,p=Array.isArray(l)?l:void 0,m=(d=d||(p?void 0:l))?d.allKeys:void 0;return this._trans("readwrite",function(w){var T=h.schema.primKey,x=T.auto,T=T.keyPath;if(T&&p)throw new ue.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(p&&p.length!==o.length)throw new ue.InvalidArgument("Arguments objects and keys must have the same length");var S=o.length,T=T&&x?o.map(Ur(T)):o;return h.core.mutate({trans:w,type:"add",keys:p,values:T,wantResults:m}).then(function(A){var k=A.numFailures,P=A.results,E=A.lastResult,A=A.failures;if(k===0)return m?P:E;throw new vn("".concat(h.name,".bulkAdd(): ").concat(k," of ").concat(S," operations failed"),A)})})},ke.prototype.bulkPut=function(o,l,d){var h=this,p=Array.isArray(l)?l:void 0,m=(d=d||(p?void 0:l))?d.allKeys:void 0;return this._trans("readwrite",function(w){var T=h.schema.primKey,x=T.auto,T=T.keyPath;if(T&&p)throw new ue.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(p&&p.length!==o.length)throw new ue.InvalidArgument("Arguments objects and keys must have the same length");var S=o.length,T=T&&x?o.map(Ur(T)):o;return h.core.mutate({trans:w,type:"put",keys:p,values:T,wantResults:m}).then(function(A){var k=A.numFailures,P=A.results,E=A.lastResult,A=A.failures;if(k===0)return m?P:E;throw new vn("".concat(h.name,".bulkPut(): ").concat(k," of ").concat(S," operations failed"),A)})})},ke.prototype.bulkUpdate=function(o){var l=this,d=this.core,h=o.map(function(w){return w.key}),p=o.map(function(w){return w.changes}),m=[];return this._trans("readwrite",function(w){return d.getMany({trans:w,keys:h,cache:"clone"}).then(function(x){var S=[],T=[];o.forEach(function(k,P){var E=k.key,A=k.changes,D=x[P];if(D){for(var I=0,j=Object.keys(A);I<j.length;I++){var N=j[I],z=A[N];if(N===l.schema.primKey.keyPath){if(be(z,E)!==0)throw new ue.Constraint("Cannot update primary key in bulkUpdate()")}else H(D,N,z)}m.push(P),S.push(E),T.push(D)}});var R=S.length;return d.mutate({trans:w,type:"put",keys:S,values:T,updates:{keys:h,changeSpecs:p}}).then(function(k){var P=k.numFailures,E=k.failures;if(P===0)return R;for(var A=0,D=Object.keys(E);A<D.length;A++){var I,j=D[A],N=m[Number(j)];N!=null&&(I=E[j],delete E[j],E[N]=I)}throw new vn("".concat(l.name,".bulkUpdate(): ").concat(P," of ").concat(R," operations failed"),E)})})})},ke.prototype.bulkDelete=function(o){var l=this,d=o.length;return this._trans("readwrite",function(h){return l.core.mutate({trans:h,type:"delete",keys:o})}).then(function(w){var p=w.numFailures,m=w.lastResult,w=w.failures;if(p===0)return m;throw new vn("".concat(l.name,".bulkDelete(): ").concat(p," of ").concat(d," operations failed"),w)})},ke);function ke(){}function Xn(o){function l(w,x){if(x){for(var S=arguments.length,T=new Array(S-1);--S;)T[S-1]=arguments[S];return d[w].subscribe.apply(null,T),o}if(typeof w=="string")return d[w]}var d={};l.addEventType=m;for(var h=1,p=arguments.length;h<p;++h)m(arguments[h]);return l;function m(w,x,S){if(typeof w!="object"){var T;x=x||xd;var R={subscribers:[],fire:S=S||xe,subscribe:function(k){R.subscribers.indexOf(k)===-1&&(R.subscribers.push(k),R.fire=x(R.fire,k))},unsubscribe:function(k){R.subscribers=R.subscribers.filter(function(P){return P!==k}),R.fire=R.subscribers.reduce(x,S)}};return d[w]=l[w]=R}a(T=w).forEach(function(k){var P=T[k];if(c(P))m(k,T[k][0],T[k][1]);else{if(P!=="asap")throw new ue.InvalidArgument("Invalid event config");var E=m(k,Kn,function(){for(var A=arguments.length,D=new Array(A);A--;)D[A]=arguments[A];E.subscribers.forEach(function(I){W(function(){I.apply(null,D)})})})}})}}function Jn(o,l){return _(l).from({prototype:o}),l}function Cn(o,l){return!(o.filter||o.algorithm||o.or)&&(l?o.justLimit:!o.replayFilter)}function ps(o,l){o.filter=sn(o.filter,l)}function ms(o,l,d){var h=o.replayFilter;o.replayFilter=h?function(){return sn(h(),l())}:l,o.justLimit=d&&!h}function Fr(o,l){if(o.isPrimKey)return l.primaryKey;var d=l.getIndexByKeyPath(o.index);if(!d)throw new ue.Schema("KeyPath "+o.index+" on object store "+l.name+" is not indexed");return d}function ma(o,l,d){var h=Fr(o,l.schema);return l.openCursor({trans:d,values:!o.keysOnly,reverse:o.dir==="prev",unique:!!o.unique,query:{index:h,range:o.range}})}function Br(o,l,d,h){var p=o.replayFilter?sn(o.filter,o.replayFilter()):o.filter;if(o.or){var m={},w=function(x,S,T){var R,k;p&&!p(S,T,function(P){return S.stop(P)},function(P){return S.fail(P)})||((k=""+(R=S.primaryKey))=="[object ArrayBuffer]"&&(k=""+new Uint8Array(R)),b(m,k)||(m[k]=!0,l(x,S,T)))};return Promise.all([o.or._iterate(w,d),ga(ma(o,h,d),o.algorithm,w,!o.keysOnly&&o.valueMapper)])}return ga(ma(o,h,d),sn(o.algorithm,p),l,!o.keysOnly&&o.valueMapper)}function ga(o,l,d,h){var p=Se(h?function(m,w,x){return d(h(m),w,x)}:d);return o.then(function(m){if(m)return m.start(function(){var w=function(){return m.continue()};l&&!l(m,function(x){return w=x},function(x){m.stop(x),w=xe},function(x){m.fail(x),w=xe})||p(m.value,m,function(x){return w=x}),w()})})}var Lt=Symbol(),Qn=(ba.prototype.execute=function(o){if(this.add!==void 0){var l=this.add;if(c(l))return i(i([],c(o)?o:[],!0),l).sort();if(typeof l=="number")return(Number(o)||0)+l;if(typeof l=="bigint")try{return BigInt(o)+l}catch{return BigInt(0)+l}throw new TypeError("Invalid term ".concat(l))}if(this.remove!==void 0){var d=this.remove;if(c(d))return c(o)?o.filter(function(h){return!d.includes(h)}).sort():[];if(typeof d=="number")return Number(o)-d;if(typeof d=="bigint")try{return BigInt(o)-d}catch{return BigInt(0)-d}throw new TypeError("Invalid subtrahend ".concat(d))}return l=(l=this.replacePrefix)===null||l===void 0?void 0:l[0],l&&typeof o=="string"&&o.startsWith(l)?this.replacePrefix[1]+o.substring(l.length):o},ba);function ba(o){Object.assign(this,o)}var Ed=(we.prototype._read=function(o,l){var d=this._ctx;return d.error?d.table._trans(null,Re.bind(null,d.error)):d.table._trans("readonly",o).then(l)},we.prototype._write=function(o){var l=this._ctx;return l.error?l.table._trans(null,Re.bind(null,l.error)):l.table._trans("readwrite",o,"locked")},we.prototype._addAlgorithm=function(o){var l=this._ctx;l.algorithm=sn(l.algorithm,o)},we.prototype._iterate=function(o,l){return Br(this._ctx,o,l,this._ctx.table.core)},we.prototype.clone=function(o){var l=Object.create(this.constructor.prototype),d=Object.create(this._ctx);return o&&u(d,o),l._ctx=d,l},we.prototype.raw=function(){return this._ctx.valueMapper=null,this},we.prototype.each=function(o){var l=this._ctx;return this._read(function(d){return Br(l,o,d,l.table.core)})},we.prototype.count=function(o){var l=this;return this._read(function(d){var h=l._ctx,p=h.table.core;if(Cn(h,!0))return p.count({trans:d,query:{index:Fr(h,p.schema),range:h.range}}).then(function(w){return Math.min(w,h.limit)});var m=0;return Br(h,function(){return++m,!1},d,p).then(function(){return m})}).then(o)},we.prototype.sortBy=function(o,l){var d=o.split(".").reverse(),h=d[0],p=d.length-1;function m(S,T){return T?m(S[d[T]],T-1):S[h]}var w=this._ctx.dir==="next"?1:-1;function x(S,T){return be(m(S,p),m(T,p))*w}return this.toArray(function(S){return S.sort(x)}).then(l)},we.prototype.toArray=function(o){var l=this;return this._read(function(d){var h=l._ctx;if(h.dir==="next"&&Cn(h,!0)&&0<h.limit){var p=h.valueMapper,m=Fr(h,h.table.core.schema);return h.table.core.query({trans:d,limit:h.limit,values:!0,query:{index:m,range:h.range}}).then(function(x){return x=x.result,p?x.map(p):x})}var w=[];return Br(h,function(x){return w.push(x)},d,h.table.core).then(function(){return w})},o)},we.prototype.offset=function(o){var l=this._ctx;return o<=0||(l.offset+=o,Cn(l)?ms(l,function(){var d=o;return function(h,p){return d===0||(d===1?--d:p(function(){h.advance(d),d=0}),!1)}}):ms(l,function(){var d=o;return function(){return--d<0}})),this},we.prototype.limit=function(o){return this._ctx.limit=Math.min(this._ctx.limit,o),ms(this._ctx,function(){var l=o;return function(d,h,p){return--l<=0&&h(p),0<=l}},!0),this},we.prototype.until=function(o,l){return ps(this._ctx,function(d,h,p){return!o(d.value)||(h(p),l)}),this},we.prototype.first=function(o){return this.limit(1).toArray(function(l){return l[0]}).then(o)},we.prototype.last=function(o){return this.reverse().first(o)},we.prototype.filter=function(o){var l;return ps(this._ctx,function(d){return o(d.value)}),(l=this._ctx).isMatch=sn(l.isMatch,o),this},we.prototype.and=function(o){return this.filter(o)},we.prototype.or=function(o){return new this.db.WhereClause(this._ctx.table,o,this)},we.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},we.prototype.desc=function(){return this.reverse()},we.prototype.eachKey=function(o){var l=this._ctx;return l.keysOnly=!l.isMatch,this.each(function(d,h){o(h.key,h)})},we.prototype.eachUniqueKey=function(o){return this._ctx.unique="unique",this.eachKey(o)},we.prototype.eachPrimaryKey=function(o){var l=this._ctx;return l.keysOnly=!l.isMatch,this.each(function(d,h){o(h.primaryKey,h)})},we.prototype.keys=function(o){var l=this._ctx;l.keysOnly=!l.isMatch;var d=[];return this.each(function(h,p){d.push(p.key)}).then(function(){return d}).then(o)},we.prototype.primaryKeys=function(o){var l=this._ctx;if(l.dir==="next"&&Cn(l,!0)&&0<l.limit)return this._read(function(h){var p=Fr(l,l.table.core.schema);return l.table.core.query({trans:h,values:!1,limit:l.limit,query:{index:p,range:l.range}})}).then(function(h){return h.result}).then(o);l.keysOnly=!l.isMatch;var d=[];return this.each(function(h,p){d.push(p.primaryKey)}).then(function(){return d}).then(o)},we.prototype.uniqueKeys=function(o){return this._ctx.unique="unique",this.keys(o)},we.prototype.firstKey=function(o){return this.limit(1).keys(function(l){return l[0]}).then(o)},we.prototype.lastKey=function(o){return this.reverse().firstKey(o)},we.prototype.distinct=function(){var o=this._ctx,o=o.index&&o.table.schema.idxByName[o.index];if(!o||!o.multi)return this;var l={};return ps(this._ctx,function(p){var h=p.primaryKey.toString(),p=b(l,h);return l[h]=!0,!p}),this},we.prototype.modify=function(o){var l=this,d=this._ctx;return this._write(function(h){var p,m,w;w=typeof o=="function"?o:(p=a(o),m=p.length,function(I){for(var j=!1,N=0;N<m;++N){var z=p[N],B=o[z],X=G(I,z);B instanceof Qn?(H(I,z,B.execute(X)),j=!0):X!==B&&(H(I,z,B),j=!0)}return j});var x=d.table.core,k=x.schema.primaryKey,S=k.outbound,T=k.extractKey,R=200,k=l.db._options.modifyChunkSize;k&&(R=typeof k=="object"?k[x.name]||k["*"]||200:k);function P(I,z){var N=z.failures,z=z.numFailures;A+=I-z;for(var B=0,X=a(N);B<X.length;B++){var ee=X[B];E.push(N[ee])}}var E=[],A=0,D=[];return l.clone().primaryKeys().then(function(I){function j(z){var B=Math.min(R,I.length-z);return x.getMany({trans:h,keys:I.slice(z,z+B),cache:"immutable"}).then(function(X){for(var ee=[],J=[],Q=S?[]:null,te=[],Z=0;Z<B;++Z){var oe=X[Z],fe={value:ce(oe),primKey:I[z+Z]};w.call(fe,fe.value,fe)!==!1&&(fe.value==null?te.push(I[z+Z]):S||be(T(oe),T(fe.value))===0?(J.push(fe.value),S&&Q.push(I[z+Z])):(te.push(I[z+Z]),ee.push(fe.value)))}return Promise.resolve(0<ee.length&&x.mutate({trans:h,type:"add",values:ee}).then(function(me){for(var ge in me.failures)te.splice(parseInt(ge),1);P(ee.length,me)})).then(function(){return(0<J.length||N&&typeof o=="object")&&x.mutate({trans:h,type:"put",keys:Q,values:J,criteria:N,changeSpec:typeof o!="function"&&o,isAdditionalChunk:0<z}).then(function(me){return P(J.length,me)})}).then(function(){return(0<te.length||N&&o===gs)&&x.mutate({trans:h,type:"delete",keys:te,criteria:N,isAdditionalChunk:0<z}).then(function(me){return P(te.length,me)})}).then(function(){return I.length>z+B&&j(z+R)})})}var N=Cn(d)&&d.limit===1/0&&(typeof o!="function"||o===gs)&&{index:d.index,range:d.range};return j(0).then(function(){if(0<E.length)throw new yn("Error modifying one or more objects",E,A,D);return I.length})})})},we.prototype.delete=function(){var o=this._ctx,l=o.range;return Cn(o)&&(o.isPrimKey||l.type===3)?this._write(function(d){var h=o.table.core.schema.primaryKey,p=l;return o.table.core.count({trans:d,query:{index:h,range:p}}).then(function(m){return o.table.core.mutate({trans:d,type:"deleteRange",range:p}).then(function(w){var x=w.failures;if(w.lastResult,w.results,w=w.numFailures,w)throw new yn("Could not delete some values",Object.keys(x).map(function(S){return x[S]}),m-w);return m-w})})}):this.modify(gs)},we);function we(){}var gs=function(o,l){return l.value=null};function Td(o,l){return o<l?-1:o===l?0:1}function Id(o,l){return l<o?-1:o===l?0:1}function tt(o,l,d){return o=o instanceof ya?new o.Collection(o):o,o._ctx.error=new(d||TypeError)(l),o}function Sn(o){return new o.Collection(o,function(){return wa("")}).limit(0)}function Hr(o,l,d,h){var p,m,w,x,S,T,R,k=d.length;if(!d.every(function(A){return typeof A=="string"}))return tt(o,ca);function P(A){p=A==="next"?function(I){return I.toUpperCase()}:function(I){return I.toLowerCase()},m=A==="next"?function(I){return I.toLowerCase()}:function(I){return I.toUpperCase()},w=A==="next"?Td:Id;var D=d.map(function(I){return{lower:m(I),upper:p(I)}}).sort(function(I,j){return w(I.lower,j.lower)});x=D.map(function(I){return I.upper}),S=D.map(function(I){return I.lower}),R=(T=A)==="next"?"":h}P("next"),o=new o.Collection(o,function(){return Ht(x[0],S[k-1]+h)}),o._ondirectionchange=function(A){P(A)};var E=0;return o._addAlgorithm(function(A,D,I){var j=A.key;if(typeof j!="string")return!1;var N=m(j);if(l(N,S,E))return!0;for(var z=null,B=E;B<k;++B){var X=(function(ee,J,Q,te,Z,oe){for(var fe=Math.min(ee.length,te.length),me=-1,ge=0;ge<fe;++ge){var nt=J[ge];if(nt!==te[ge])return Z(ee[ge],Q[ge])<0?ee.substr(0,ge)+Q[ge]+Q.substr(ge+1):Z(ee[ge],te[ge])<0?ee.substr(0,ge)+te[ge]+Q.substr(ge+1):0<=me?ee.substr(0,me)+J[me]+Q.substr(me+1):null;Z(ee[ge],nt)<0&&(me=ge)}return fe<te.length&&oe==="next"?ee+Q.substr(ee.length):fe<ee.length&&oe==="prev"?ee.substr(0,Q.length):me<0?null:ee.substr(0,me)+te[me]+Q.substr(me+1)})(j,N,x[B],S[B],w,T);X===null&&z===null?E=B+1:(z===null||0<w(z,X))&&(z=X)}return D(z!==null?function(){A.continue(z+R)}:I),!1}),o}function Ht(o,l,d,h){return{type:2,lower:o,upper:l,lowerOpen:d,upperOpen:h}}function wa(o){return{type:1,lower:o,upper:o}}var ya=(Object.defineProperty(Me.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),Me.prototype.between=function(o,l,d,h){d=d!==!1,h=h===!0;try{return 0<this._cmp(o,l)||this._cmp(o,l)===0&&(d||h)&&(!d||!h)?Sn(this):new this.Collection(this,function(){return Ht(o,l,!d,!h)})}catch{return tt(this,Pt)}},Me.prototype.equals=function(o){return o==null?tt(this,Pt):new this.Collection(this,function(){return wa(o)})},Me.prototype.above=function(o){return o==null?tt(this,Pt):new this.Collection(this,function(){return Ht(o,void 0,!0)})},Me.prototype.aboveOrEqual=function(o){return o==null?tt(this,Pt):new this.Collection(this,function(){return Ht(o,void 0,!1)})},Me.prototype.below=function(o){return o==null?tt(this,Pt):new this.Collection(this,function(){return Ht(void 0,o,!1,!0)})},Me.prototype.belowOrEqual=function(o){return o==null?tt(this,Pt):new this.Collection(this,function(){return Ht(void 0,o)})},Me.prototype.startsWith=function(o){return typeof o!="string"?tt(this,ca):this.between(o,o+rn,!0,!0)},Me.prototype.startsWithIgnoreCase=function(o){return o===""?this.startsWith(o):Hr(this,function(l,d){return l.indexOf(d[0])===0},[o],rn)},Me.prototype.equalsIgnoreCase=function(o){return Hr(this,function(l,d){return l===d[0]},[o],"")},Me.prototype.anyOfIgnoreCase=function(){var o=Ae.apply(Pe,arguments);return o.length===0?Sn(this):Hr(this,function(l,d){return d.indexOf(l)!==-1},o,"")},Me.prototype.startsWithAnyOfIgnoreCase=function(){var o=Ae.apply(Pe,arguments);return o.length===0?Sn(this):Hr(this,function(l,d){return d.some(function(h){return l.indexOf(h)===0})},o,rn)},Me.prototype.anyOf=function(){var o=this,l=Ae.apply(Pe,arguments),d=this._cmp;try{l.sort(d)}catch{return tt(this,Pt)}if(l.length===0)return Sn(this);var h=new this.Collection(this,function(){return Ht(l[0],l[l.length-1])});h._ondirectionchange=function(m){d=m==="next"?o._ascending:o._descending,l.sort(d)};var p=0;return h._addAlgorithm(function(m,w,x){for(var S=m.key;0<d(S,l[p]);)if(++p===l.length)return w(x),!1;return d(S,l[p])===0||(w(function(){m.continue(l[p])}),!1)}),h},Me.prototype.notEqual=function(o){return this.inAnyRange([[-1/0,o],[o,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},Me.prototype.noneOf=function(){var o=Ae.apply(Pe,arguments);if(o.length===0)return new this.Collection(this);try{o.sort(this._ascending)}catch{return tt(this,Pt)}var l=o.reduce(function(d,h){return d?d.concat([[d[d.length-1][1],h]]):[[-1/0,h]]},null);return l.push([o[o.length-1],this.db._maxKey]),this.inAnyRange(l,{includeLowers:!1,includeUppers:!1})},Me.prototype.inAnyRange=function(j,l){var d=this,h=this._cmp,p=this._ascending,m=this._descending,w=this._min,x=this._max;if(j.length===0)return Sn(this);if(!j.every(function(N){return N[0]!==void 0&&N[1]!==void 0&&p(N[0],N[1])<=0}))return tt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ue.InvalidArgument);var S=!l||l.includeLowers!==!1,T=l&&l.includeUppers===!0,R,k=p;function P(N,z){return k(N[0],z[0])}try{(R=j.reduce(function(N,z){for(var B=0,X=N.length;B<X;++B){var ee=N[B];if(h(z[0],ee[1])<0&&0<h(z[1],ee[0])){ee[0]=w(ee[0],z[0]),ee[1]=x(ee[1],z[1]);break}}return B===X&&N.push(z),N},[])).sort(P)}catch{return tt(this,Pt)}var E=0,A=T?function(N){return 0<p(N,R[E][1])}:function(N){return 0<=p(N,R[E][1])},D=S?function(N){return 0<m(N,R[E][0])}:function(N){return 0<=m(N,R[E][0])},I=A,j=new this.Collection(this,function(){return Ht(R[0][0],R[R.length-1][1],!S,!T)});return j._ondirectionchange=function(N){k=N==="next"?(I=A,p):(I=D,m),R.sort(P)},j._addAlgorithm(function(N,z,B){for(var X,ee=N.key;I(ee);)if(++E===R.length)return z(B),!1;return!A(X=ee)&&!D(X)||(d._cmp(ee,R[E][1])===0||d._cmp(ee,R[E][0])===0||z(function(){k===p?N.continue(R[E][0]):N.continue(R[E][1])}),!1)}),j},Me.prototype.startsWithAnyOf=function(){var o=Ae.apply(Pe,arguments);return o.every(function(l){return typeof l=="string"})?o.length===0?Sn(this):this.inAnyRange(o.map(function(l){return[l,l+rn]})):tt(this,"startsWithAnyOf() only works with strings")},Me);function Me(){}function Et(o){return Se(function(l){return Zn(l),o(l.target.error),!1})}function Zn(o){o.stopPropagation&&o.stopPropagation(),o.preventDefault&&o.preventDefault()}var er="storagemutated",bs="x-storagemutated-1",qt=Xn(null,er),Ad=(Tt.prototype._lock=function(){return V(!le.global),++this._reculock,this._reculock!==1||le.global||(le.lockOwnerFor=this),this},Tt.prototype._unlock=function(){if(V(!le.global),--this._reculock==0)for(le.global||(le.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var o=this._blockedFuncs.shift();try{nn(o[1],o[0])}catch{}}return this},Tt.prototype._locked=function(){return this._reculock&&le.lockOwnerFor!==this},Tt.prototype.create=function(o){var l=this;if(!this.mode)return this;var d=this.db.idbdb,h=this.db._state.dbOpenError;if(V(!this.idbtrans),!o&&!d)switch(h&&h.name){case"DatabaseClosedError":throw new ue.DatabaseClosed(h);case"MissingAPIError":throw new ue.MissingAPI(h.message,h);default:throw new ue.OpenFailed(h)}if(!this.active)throw new ue.TransactionInactive;return V(this._completion._state===null),(o=this.idbtrans=o||(this.db.core||d).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Se(function(p){Zn(p),l._reject(o.error)}),o.onabort=Se(function(p){Zn(p),l.active&&l._reject(new ue.Abort(o.error)),l.active=!1,l.on("abort").fire(p)}),o.oncomplete=Se(function(){l.active=!1,l._resolve(),"mutatedParts"in o&&qt.storagemutated.fire(o.mutatedParts)}),this},Tt.prototype._promise=function(o,l,d){var h=this;if(o==="readwrite"&&this.mode!=="readwrite")return Re(new ue.ReadOnly("Transaction is readonly"));if(!this.active)return Re(new ue.TransactionInactive);if(this._locked())return new ne(function(m,w){h._blockedFuncs.push([function(){h._promise(o,l,d).then(m,w)},le])});if(d)return Ut(function(){var m=new ne(function(w,x){h._lock();var S=l(w,x,h);S&&S.then&&S.then(w,x)});return m.finally(function(){return h._unlock()}),m._lib=!0,m});var p=new ne(function(m,w){var x=l(m,w,h);x&&x.then&&x.then(m,w)});return p._lib=!0,p},Tt.prototype._root=function(){return this.parent?this.parent._root():this},Tt.prototype.waitFor=function(o){var l,d=this._root(),h=ne.resolve(o);d._waitingFor?d._waitingFor=d._waitingFor.then(function(){return h}):(d._waitingFor=h,d._waitingQueue=[],l=d.idbtrans.objectStore(d.storeNames[0]),(function m(){for(++d._spinCount;d._waitingQueue.length;)d._waitingQueue.shift()();d._waitingFor&&(l.get(-1/0).onsuccess=m)})());var p=d._waitingFor;return new ne(function(m,w){h.then(function(x){return d._waitingQueue.push(Se(m.bind(null,x)))},function(x){return d._waitingQueue.push(Se(w.bind(null,x)))}).finally(function(){d._waitingFor===p&&(d._waitingFor=null)})})},Tt.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ue.Abort))},Tt.prototype.table=function(o){var l=this._memoizedTables||(this._memoizedTables={});if(b(l,o))return l[o];var d=this.schema[o];if(!d)throw new ue.NotFound("Table "+o+" not part of transaction");return d=new this.db.Table(o,d,this),d.core=this.db.core.table(o),l[o]=d},Tt);function Tt(){}function ws(o,l,d,h,p,m,w){return{name:o,keyPath:l,unique:d,multi:h,auto:p,compound:m,src:(d&&!w?"&":"")+(h?"*":"")+(p?"++":"")+va(l)}}function va(o){return typeof o=="string"?o:o?"["+[].join.call(o,"+")+"]":""}function ys(o,l,d){return{name:o,primKey:l,indexes:d,mappedClass:null,idxByName:(h=function(p){return[p.name,p]},d.reduce(function(p,m,w){return w=h(m,w),w&&(p[w[0]]=w[1]),p},{}))};var h}var tr=function(o){try{return o.only([[]]),tr=function(){return[[]]},[[]]}catch{return tr=function(){return rn},rn}};function vs(o){return o==null?function(){}:typeof o=="string"?(l=o).split(".").length===1?function(d){return d[l]}:function(d){return G(d,l)}:function(d){return G(d,o)};var l}function xa(o){return[].slice.call(o)}var Rd=0;function nr(o){return o==null?":id":typeof o=="string"?o:"[".concat(o.join("+"),"]")}function Od(o,l,S){function h(I){if(I.type===3)return null;if(I.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var E=I.lower,A=I.upper,D=I.lowerOpen,I=I.upperOpen;return E===void 0?A===void 0?null:l.upperBound(A,!!I):A===void 0?l.lowerBound(E,!!D):l.bound(E,A,!!D,!!I)}function p(P){var E,A=P.name;return{name:A,schema:P,mutate:function(D){var I=D.trans,j=D.type,N=D.keys,z=D.values,B=D.range;return new Promise(function(X,ee){X=Se(X);var J=I.objectStore(A),Q=J.keyPath==null,te=j==="put"||j==="add";if(!te&&j!=="delete"&&j!=="deleteRange")throw new Error("Invalid operation type: "+j);var Z,oe=(N||z||{length:1}).length;if(N&&z&&N.length!==z.length)throw new Error("Given keys array must have same length as given values array.");if(oe===0)return X({numFailures:0,failures:{},results:[],lastResult:void 0});function fe(We){++nt,Zn(We)}var me=[],ge=[],nt=0;if(j==="deleteRange"){if(B.type===4)return X({numFailures:nt,failures:ge,results:[],lastResult:void 0});B.type===3?me.push(Z=J.clear()):me.push(Z=J.delete(h(B)))}else{var Q=te?Q?[z,N]:[z,null]:[N,null],he=Q[0],Ke=Q[1];if(te)for(var Ve=0;Ve<oe;++Ve)me.push(Z=Ke&&Ke[Ve]!==void 0?J[j](he[Ve],Ke[Ve]):J[j](he[Ve])),Z.onerror=fe;else for(Ve=0;Ve<oe;++Ve)me.push(Z=J[j](he[Ve])),Z.onerror=fe}function ni(We){We=We.target.result,me.forEach(function(ln,Ns){return ln.error!=null&&(ge[Ns]=ln.error)}),X({numFailures:nt,failures:ge,results:j==="delete"?N:me.map(function(ln){return ln.result}),lastResult:We})}Z.onerror=function(We){fe(We),ni(We)},Z.onsuccess=ni})},getMany:function(D){var I=D.trans,j=D.keys;return new Promise(function(N,z){N=Se(N);for(var B,X=I.objectStore(A),ee=j.length,J=new Array(ee),Q=0,te=0,Z=function(me){me=me.target,J[me._pos]=me.result,++te===Q&&N(J)},oe=Et(z),fe=0;fe<ee;++fe)j[fe]!=null&&((B=X.get(j[fe]))._pos=fe,B.onsuccess=Z,B.onerror=oe,++Q);Q===0&&N(J)})},get:function(D){var I=D.trans,j=D.key;return new Promise(function(N,z){N=Se(N);var B=I.objectStore(A).get(j);B.onsuccess=function(X){return N(X.target.result)},B.onerror=Et(z)})},query:(E=T,function(D){return new Promise(function(I,j){I=Se(I);var N,z,B,Q=D.trans,X=D.values,ee=D.limit,Z=D.query,J=ee===1/0?void 0:ee,te=Z.index,Z=Z.range,Q=Q.objectStore(A),te=te.isPrimaryKey?Q:Q.index(te.name),Z=h(Z);if(ee===0)return I({result:[]});E?((J=X?te.getAll(Z,J):te.getAllKeys(Z,J)).onsuccess=function(oe){return I({result:oe.target.result})},J.onerror=Et(j)):(N=0,z=!X&&"openKeyCursor"in te?te.openKeyCursor(Z):te.openCursor(Z),B=[],z.onsuccess=function(oe){var fe=z.result;return fe?(B.push(X?fe.value:fe.primaryKey),++N===ee?I({result:B}):void fe.continue()):I({result:B})},z.onerror=Et(j))})}),openCursor:function(D){var I=D.trans,j=D.values,N=D.query,z=D.reverse,B=D.unique;return new Promise(function(X,ee){X=Se(X);var te=N.index,J=N.range,Q=I.objectStore(A),Q=te.isPrimaryKey?Q:Q.index(te.name),te=z?B?"prevunique":"prev":B?"nextunique":"next",Z=!j&&"openKeyCursor"in Q?Q.openKeyCursor(h(J),te):Q.openCursor(h(J),te);Z.onerror=Et(ee),Z.onsuccess=Se(function(oe){var fe,me,ge,nt,he=Z.result;he?(he.___id=++Rd,he.done=!1,fe=he.continue.bind(he),me=(me=he.continuePrimaryKey)&&me.bind(he),ge=he.advance.bind(he),nt=function(){throw new Error("Cursor not stopped")},he.trans=I,he.stop=he.continue=he.continuePrimaryKey=he.advance=function(){throw new Error("Cursor not started")},he.fail=Se(ee),he.next=function(){var Ke=this,Ve=1;return this.start(function(){return Ve--?Ke.continue():Ke.stop()}).then(function(){return Ke})},he.start=function(Ke){function Ve(){if(Z.result)try{Ke()}catch(We){he.fail(We)}else he.done=!0,he.start=function(){throw new Error("Cursor behind last entry")},he.stop()}var ni=new Promise(function(We,ln){We=Se(We),Z.onerror=Et(ln),he.fail=ln,he.stop=function(Ns){he.stop=he.continue=he.continuePrimaryKey=he.advance=nt,We(Ns)}});return Z.onsuccess=Se(function(We){Z.onsuccess=Ve,Ve()}),he.continue=fe,he.continuePrimaryKey=me,he.advance=ge,Ve(),ni},X(he)):X(null)},ee)})},count:function(D){var I=D.query,j=D.trans,N=I.index,z=I.range;return new Promise(function(B,X){var ee=j.objectStore(A),J=N.isPrimaryKey?ee:ee.index(N.name),ee=h(z),J=ee?J.count(ee):J.count();J.onsuccess=Se(function(Q){return B(Q.target.result)}),J.onerror=Et(X)})}}}var m,w,x,R=(w=S,x=xa((m=o).objectStoreNames),{schema:{name:m.name,tables:x.map(function(P){return w.objectStore(P)}).map(function(P){var E=P.keyPath,I=P.autoIncrement,A=c(E),D={},I={name:P.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:E==null,compound:A,keyPath:E,autoIncrement:I,unique:!0,extractKey:vs(E)},indexes:xa(P.indexNames).map(function(j){return P.index(j)}).map(function(B){var N=B.name,z=B.unique,X=B.multiEntry,B=B.keyPath,X={name:N,compound:c(B),keyPath:B,unique:z,multiEntry:X,extractKey:vs(B)};return D[nr(B)]=X}),getIndexByKeyPath:function(j){return D[nr(j)]}};return D[":id"]=I.primaryKey,E!=null&&(D[nr(E)]=I.primaryKey),I})},hasGetAll:0<x.length&&"getAll"in w.objectStore(x[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),S=R.schema,T=R.hasGetAll,R=S.tables.map(p),k={};return R.forEach(function(P){return k[P.name]=P}),{stack:"dbcore",transaction:o.transaction.bind(o),table:function(P){if(!k[P])throw new Error("Table '".concat(P,"' not found"));return k[P]},MIN_KEY:-1/0,MAX_KEY:tr(l),schema:S}}function Dd(o,l,d,h){var p=d.IDBKeyRange;return d.indexedDB,{dbcore:(h=Od(l,p,h),o.dbcore.reduce(function(m,w){return w=w.create,r(r({},m),w(m))},h))}}function qr(o,h){var d=h.db,h=Dd(o._middlewares,d,o._deps,h);o.core=h.dbcore,o.tables.forEach(function(p){var m=p.name;o.core.schema.tables.some(function(w){return w.name===m})&&(p.core=o.core.table(m),o[m]instanceof o.Table&&(o[m].core=p.core))})}function Kr(o,l,d,h){d.forEach(function(p){var m=h[p];l.forEach(function(w){var x=(function S(T,R){return O(T,R)||(T=f(T))&&S(T,R)})(w,p);(!x||"value"in x&&x.value===void 0)&&(w===o.Transaction.prototype||w instanceof o.Transaction?C(w,p,{get:function(){return this.table(p)},set:function(S){v(this,p,{value:S,writable:!0,configurable:!0,enumerable:!0})}}):w[p]=new o.Table(p,m))})})}function xs(o,l){l.forEach(function(d){for(var h in d)d[h]instanceof o.Table&&delete d[h]})}function Pd(o,l){return o._cfg.version-l._cfg.version}function Ld(o,l,d,h){var p=o._dbSchema;d.objectStoreNames.contains("$meta")&&!p.$meta&&(p.$meta=ys("$meta",ka("")[0],[]),o._storeNames.push("$meta"));var m=o._createTransaction("readwrite",o._storeNames,p);m.create(d),m._completion.catch(h);var w=m._reject.bind(m),x=le.transless||le;Ut(function(){return le.trans=m,le.transless=x,l!==0?(qr(o,d),T=l,((S=m).storeNames.includes("$meta")?S.table("$meta").get("version").then(function(R){return R??T}):ne.resolve(T)).then(function(R){return P=R,E=m,A=d,D=[],R=(k=o)._versions,I=k._dbSchema=Gr(0,k.idbdb,A),(R=R.filter(function(j){return j._cfg.version>=P})).length!==0?(R.forEach(function(j){D.push(function(){var N=I,z=j._cfg.dbschema;Wr(k,N,A),Wr(k,z,A),I=k._dbSchema=z;var B=$s(N,z);B.add.forEach(function(te){ks(A,te[0],te[1].primKey,te[1].indexes)}),B.change.forEach(function(te){if(te.recreate)throw new ue.Upgrade("Not yet support for changing primary key");var Z=A.objectStore(te.name);te.add.forEach(function(oe){return Vr(Z,oe)}),te.change.forEach(function(oe){Z.deleteIndex(oe.name),Vr(Z,oe)}),te.del.forEach(function(oe){return Z.deleteIndex(oe)})});var X=j._cfg.contentUpgrade;if(X&&j._cfg.version>P){qr(k,A),E._memoizedTables={};var ee=Y(z);B.del.forEach(function(te){ee[te]=N[te]}),xs(k,[k.Transaction.prototype]),Kr(k,[k.Transaction.prototype],a(ee),ee),E.schema=ee;var J,Q=et(X);return Q&&kn(),B=ne.follow(function(){var te;(J=X(E))&&Q&&(te=Ft.bind(null,null),J.then(te,te))}),J&&typeof J.then=="function"?ne.resolve(J):B.then(function(){return J})}}),D.push(function(N){var z,B,X=j._cfg.dbschema;z=X,B=N,[].slice.call(B.db.objectStoreNames).forEach(function(ee){return z[ee]==null&&B.db.deleteObjectStore(ee)}),xs(k,[k.Transaction.prototype]),Kr(k,[k.Transaction.prototype],k._storeNames,k._dbSchema),E.schema=k._dbSchema}),D.push(function(N){k.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(k.idbdb.version/10)===j._cfg.version?(k.idbdb.deleteObjectStore("$meta"),delete k._dbSchema.$meta,k._storeNames=k._storeNames.filter(function(z){return z!=="$meta"})):N.objectStore("$meta").put(j._cfg.version,"version"))})}),(function j(){return D.length?ne.resolve(D.shift()(E.idbtrans)).then(j):ne.resolve()})().then(function(){$a(I,A)})):ne.resolve();var k,P,E,A,D,I}).catch(w)):(a(p).forEach(function(R){ks(d,R,p[R].primKey,p[R].indexes)}),qr(o,d),void ne.follow(function(){return o.on.populate.fire(m)}).catch(w));var S,T})}function Md(o,l){$a(o._dbSchema,l),l.db.version%10!=0||l.objectStoreNames.contains("$meta")||l.db.createObjectStore("$meta").add(Math.ceil(l.db.version/10-1),"version");var d=Gr(0,o.idbdb,l);Wr(o,o._dbSchema,l);for(var h=0,p=$s(d,o._dbSchema).change;h<p.length;h++){var m=(function(w){if(w.change.length||w.recreate)return console.warn("Unable to patch indexes of table ".concat(w.name," because it has changes on the type of index or primary key.")),{value:void 0};var x=l.objectStore(w.name);w.add.forEach(function(S){St&&console.debug("Dexie upgrade patch: Creating missing index ".concat(w.name,".").concat(S.src)),Vr(x,S)})})(p[h]);if(typeof m=="object")return m.value}}function $s(o,l){var d,h={del:[],add:[],change:[]};for(d in o)l[d]||h.del.push(d);for(d in l){var p=o[d],m=l[d];if(p){var w={name:d,def:m,recreate:!1,del:[],add:[],change:[]};if(""+(p.primKey.keyPath||"")!=""+(m.primKey.keyPath||"")||p.primKey.auto!==m.primKey.auto)w.recreate=!0,h.change.push(w);else{var x=p.idxByName,S=m.idxByName,T=void 0;for(T in x)S[T]||w.del.push(T);for(T in S){var R=x[T],k=S[T];R?R.src!==k.src&&w.change.push(k):w.add.push(k)}(0<w.del.length||0<w.add.length||0<w.change.length)&&h.change.push(w)}}else h.add.push([d,m])}return h}function ks(o,l,d,h){var p=o.db.createObjectStore(l,d.keyPath?{keyPath:d.keyPath,autoIncrement:d.auto}:{autoIncrement:d.auto});return h.forEach(function(m){return Vr(p,m)}),p}function $a(o,l){a(o).forEach(function(d){l.db.objectStoreNames.contains(d)||(St&&console.debug("Dexie: Creating missing table",d),ks(l,d,o[d].primKey,o[d].indexes))})}function Vr(o,l){o.createIndex(l.name,l.keyPath,{unique:l.unique,multiEntry:l.multi})}function Gr(o,l,d){var h={};return L(l.objectStoreNames,0).forEach(function(p){for(var m=d.objectStore(p),w=ws(va(T=m.keyPath),T||"",!0,!1,!!m.autoIncrement,T&&typeof T!="string",!0),x=[],S=0;S<m.indexNames.length;++S){var R=m.index(m.indexNames[S]),T=R.keyPath,R=ws(R.name,T,!!R.unique,!!R.multiEntry,!1,T&&typeof T!="string",!1);x.push(R)}h[p]=ys(p,w,x)}),h}function Wr(o,l,d){for(var h=d.db.objectStoreNames,p=0;p<h.length;++p){var m=h[p],w=d.objectStore(m);o._hasGetAll="getAll"in w;for(var x=0;x<w.indexNames.length;++x){var S=w.indexNames[x],T=w.index(S).keyPath,R=typeof T=="string"?T:"["+L(T).join("+")+"]";!l[m]||(T=l[m].idxByName[R])&&(T.name=S,delete l[m].idxByName[R],l[m].idxByName[S]=T)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&s.WorkerGlobalScope&&s instanceof s.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(o._hasGetAll=!1)}function ka(o){return o.split(",").map(function(l,d){var h=(l=l.trim()).replace(/([&*]|\+\+)/g,""),p=/^\[/.test(h)?h.match(/^\[(.*)\]$/)[1].split("+"):h;return ws(h,p||null,/\&/.test(l),/\*/.test(l),/\+\+/.test(l),c(p),d===0)})}var jd=(Yr.prototype._parseStoresSpec=function(o,l){a(o).forEach(function(d){if(o[d]!==null){var h=ka(o[d]),p=h.shift();if(p.unique=!0,p.multi)throw new ue.Schema("Primary key cannot be multi-valued");h.forEach(function(m){if(m.auto)throw new ue.Schema("Only primary key can be marked as autoIncrement (++)");if(!m.keyPath)throw new ue.Schema("Index must have a name and cannot be an empty string")}),l[d]=ys(d,p,h)}})},Yr.prototype.stores=function(d){var l=this.db;this._cfg.storesSource=this._cfg.storesSource?u(this._cfg.storesSource,d):d;var d=l._versions,h={},p={};return d.forEach(function(m){u(h,m._cfg.storesSource),p=m._cfg.dbschema={},m._parseStoresSpec(h,p)}),l._dbSchema=p,xs(l,[l._allTables,l,l.Transaction.prototype]),Kr(l,[l._allTables,l,l.Transaction.prototype,this._cfg.tables],a(p),p),l._storeNames=a(p),this},Yr.prototype.upgrade=function(o){return this._cfg.contentUpgrade=rs(this._cfg.contentUpgrade||xe,o),this},Yr);function Yr(){}function _s(o,l){var d=o._dbNamesDB;return d||(d=o._dbNamesDB=new Mt(zr,{addons:[],indexedDB:o,IDBKeyRange:l})).version(1).stores({dbnames:"name"}),d.table("dbnames")}function Cs(o){return o&&typeof o.databases=="function"}function Ss(o){return Ut(function(){return le.letThrough=!0,o()})}function Es(o){return!("from"in o)}var qe=function(o,l){if(!this){var d=new qe;return o&&"d"in o&&u(d,o),d}u(this,arguments.length?{d:1,from:o,to:1<arguments.length?l:o}:{d:0})};function rr(o,l,d){var h=be(l,d);if(!isNaN(h)){if(0<h)throw RangeError();if(Es(o))return u(o,{from:l,to:d,d:1});var p=o.l,h=o.r;if(be(d,o.from)<0)return p?rr(p,l,d):o.l={from:l,to:d,d:1,l:null,r:null},Ca(o);if(0<be(l,o.to))return h?rr(h,l,d):o.r={from:l,to:d,d:1,l:null,r:null},Ca(o);be(l,o.from)<0&&(o.from=l,o.l=null,o.d=h?h.d+1:1),0<be(d,o.to)&&(o.to=d,o.r=null,o.d=o.l?o.l.d+1:1),d=!o.r,p&&!o.l&&ir(o,p),h&&d&&ir(o,h)}}function ir(o,l){Es(l)||(function d(h,S){var m=S.from,w=S.to,x=S.l,S=S.r;rr(h,m,w),x&&d(h,x),S&&d(h,S)})(o,l)}function _a(o,l){var d=Xr(l),h=d.next();if(h.done)return!1;for(var p=h.value,m=Xr(o),w=m.next(p.from),x=w.value;!h.done&&!w.done;){if(be(x.from,p.to)<=0&&0<=be(x.to,p.from))return!0;be(p.from,x.from)<0?p=(h=d.next(x.from)).value:x=(w=m.next(p.from)).value}return!1}function Xr(o){var l=Es(o)?null:{s:0,n:o};return{next:function(d){for(var h=0<arguments.length;l;)switch(l.s){case 0:if(l.s=1,h)for(;l.n.l&&be(d,l.n.from)<0;)l={up:l,n:l.n.l,s:1};else for(;l.n.l;)l={up:l,n:l.n.l,s:1};case 1:if(l.s=2,!h||be(d,l.n.to)<=0)return{value:l.n,done:!1};case 2:if(l.n.r){l.s=3,l={up:l,n:l.n.r,s:0};continue}case 3:l=l.up}return{done:!0}}}}function Ca(o){var l,d,h=(((l=o.r)===null||l===void 0?void 0:l.d)||0)-(((d=o.l)===null||d===void 0?void 0:d.d)||0),p=1<h?"r":h<-1?"l":"";p&&(l=p=="r"?"l":"r",d=r({},o),h=o[p],o.from=h.from,o.to=h.to,o[p]=h[p],d[p]=h[l],(o[l]=d).d=Sa(d)),o.d=Sa(o)}function Sa(d){var l=d.r,d=d.l;return(l?d?Math.max(l.d,d.d):l.d:d?d.d:0)+1}function Jr(o,l){return a(l).forEach(function(d){o[d]?ir(o[d],l[d]):o[d]=(function h(p){var m,w,x={};for(m in p)b(p,m)&&(w=p[m],x[m]=!w||typeof w!="object"||q.has(w.constructor)?w:h(w));return x})(l[d])}),o}function Ts(o,l){return o.all||l.all||Object.keys(o).some(function(d){return l[d]&&_a(l[d],o[d])})}y(qe.prototype,((bt={add:function(o){return ir(this,o),this},addKey:function(o){return rr(this,o,o),this},addKeys:function(o){var l=this;return o.forEach(function(d){return rr(l,d,d)}),this},hasKey:function(o){var l=Xr(this).next(o).value;return l&&be(l.from,o)<=0&&0<=be(l.to,o)}})[Ne]=function(){return Xr(this)},bt));var on={},Is={},As=!1;function Qr(o){Jr(Is,o),As||(As=!0,setTimeout(function(){As=!1,Rs(Is,!(Is={}))},0))}function Rs(o,l){l===void 0&&(l=!1);var d=new Set;if(o.all)for(var h=0,p=Object.values(on);h<p.length;h++)Ea(w=p[h],o,d,l);else for(var m in o){var w,x=/^idb\:\/\/(.*)\/(.*)\//.exec(m);x&&(m=x[1],x=x[2],(w=on["idb://".concat(m,"/").concat(x)])&&Ea(w,o,d,l))}d.forEach(function(S){return S()})}function Ea(o,l,d,h){for(var p=[],m=0,w=Object.entries(o.queries.query);m<w.length;m++){for(var x=w[m],S=x[0],T=[],R=0,k=x[1];R<k.length;R++){var P=k[R];Ts(l,P.obsSet)?P.subscribers.forEach(function(I){return d.add(I)}):h&&T.push(P)}h&&p.push([S,T])}if(h)for(var E=0,A=p;E<A.length;E++){var D=A[E],S=D[0],T=D[1];o.queries.query[S]=T}}function Nd(o){var l=o._state,d=o._deps.indexedDB;if(l.isBeingOpened||o.idbdb)return l.dbReadyPromise.then(function(){return l.dbOpenError?Re(l.dbOpenError):o});l.isBeingOpened=!0,l.dbOpenError=null,l.openComplete=!1;var h=l.openCanceller,p=Math.round(10*o.verno),m=!1;function w(){if(l.openCanceller!==h)throw new ue.DatabaseClosed("db.open() was cancelled")}function x(){return new ne(function(P,E){if(w(),!d)throw new ue.MissingAPI;var A=o.name,D=l.autoSchema||!p?d.open(A):d.open(A,p);if(!D)throw new ue.MissingAPI;D.onerror=Et(E),D.onblocked=Se(o._fireOnBlocked),D.onupgradeneeded=Se(function(I){var j;R=D.transaction,l.autoSchema&&!o._options.allowEmptyDB?(D.onerror=Zn,R.abort(),D.result.close(),(j=d.deleteDatabase(A)).onsuccess=j.onerror=Se(function(){E(new ue.NoSuchDatabase("Database ".concat(A," doesnt exist")))})):(R.onerror=Et(E),I=I.oldVersion>Math.pow(2,62)?0:I.oldVersion,k=I<1,o.idbdb=D.result,m&&Md(o,R),Ld(o,I/10,R,E))},E),D.onsuccess=Se(function(){R=null;var I,j,N,z,B,X=o.idbdb=D.result,ee=L(X.objectStoreNames);if(0<ee.length)try{var J=X.transaction((z=ee).length===1?z[0]:z,"readonly");if(l.autoSchema)j=X,N=J,(I=o).verno=j.version/10,N=I._dbSchema=Gr(0,j,N),I._storeNames=L(j.objectStoreNames,0),Kr(I,[I._allTables],a(N),N);else if(Wr(o,o._dbSchema,J),((B=$s(Gr(0,(B=o).idbdb,J),B._dbSchema)).add.length||B.change.some(function(Q){return Q.add.length||Q.change.length}))&&!m)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),X.close(),p=X.version+1,m=!0,P(x());qr(o,J)}catch{}_n.push(o),X.onversionchange=Se(function(Q){l.vcFired=!0,o.on("versionchange").fire(Q)}),X.onclose=Se(function(Q){o.on("close").fire(Q)}),k&&(B=o._deps,J=A,X=B.indexedDB,B=B.IDBKeyRange,Cs(X)||J===zr||_s(X,B).put({name:J}).catch(xe)),P()},E)}).catch(function(P){switch(P?.name){case"UnknownError":if(0<l.PR1398_maxLoop)return l.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),x();break;case"VersionError":if(0<p)return p=0,x()}return ne.reject(P)})}var S,T=l.dbReadyResolve,R=null,k=!1;return ne.race([h,(typeof navigator>"u"?ne.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(P){function E(){return indexedDB.databases().finally(P)}S=setInterval(E,100),E()}).finally(function(){return clearInterval(S)}):Promise.resolve()).then(x)]).then(function(){return w(),l.onReadyBeingFired=[],ne.resolve(Ss(function(){return o.on.ready.fire(o.vip)})).then(function P(){if(0<l.onReadyBeingFired.length){var E=l.onReadyBeingFired.reduce(rs,xe);return l.onReadyBeingFired=[],ne.resolve(Ss(function(){return E(o.vip)})).then(P)}})}).finally(function(){l.openCanceller===h&&(l.onReadyBeingFired=null,l.isBeingOpened=!1)}).catch(function(P){l.dbOpenError=P;try{R&&R.abort()}catch{}return h===l.openCanceller&&o._close(),Re(P)}).finally(function(){l.openComplete=!0,T()}).then(function(){var P;return k&&(P={},o.tables.forEach(function(E){E.schema.indexes.forEach(function(A){A.name&&(P["idb://".concat(o.name,"/").concat(E.name,"/").concat(A.name)]=new qe(-1/0,[[[]]]))}),P["idb://".concat(o.name,"/").concat(E.name,"/")]=P["idb://".concat(o.name,"/").concat(E.name,"/:dels")]=new qe(-1/0,[[[]]])}),qt(er).fire(P),Rs(P,!0)),o})}function Os(o){function l(m){return o.next(m)}var d=p(l),h=p(function(m){return o.throw(m)});function p(m){return function(S){var x=m(S),S=x.value;return x.done?S:S&&typeof S.then=="function"?S.then(d,h):c(S)?Promise.all(S).then(d,h):d(S)}}return p(l)()}function Zr(o,l,d){for(var h=c(o)?o.slice():[o],p=0;p<d;++p)h.push(l);return h}var zd={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(o){return r(r({},o),{table:function(l){var d=o.table(l),h=d.schema,p={},m=[];function w(k,P,E){var A=nr(k),D=p[A]=p[A]||[],I=k==null?0:typeof k=="string"?1:k.length,j=0<P,j=r(r({},E),{name:j?"".concat(A,"(virtual-from:").concat(E.name,")"):E.name,lowLevelIndex:E,isVirtual:j,keyTail:P,keyLength:I,extractKey:vs(k),unique:!j&&E.unique});return D.push(j),j.isPrimaryKey||m.push(j),1<I&&w(I===2?k[0]:k.slice(0,I-1),P+1,E),D.sort(function(N,z){return N.keyTail-z.keyTail}),j}l=w(h.primaryKey.keyPath,0,h.primaryKey),p[":id"]=[l];for(var x=0,S=h.indexes;x<S.length;x++){var T=S[x];w(T.keyPath,0,T)}function R(k){var P,E=k.query.index;return E.isVirtual?r(r({},k),{query:{index:E.lowLevelIndex,range:(P=k.query.range,E=E.keyTail,{type:P.type===1?2:P.type,lower:Zr(P.lower,P.lowerOpen?o.MAX_KEY:o.MIN_KEY,E),lowerOpen:!0,upper:Zr(P.upper,P.upperOpen?o.MIN_KEY:o.MAX_KEY,E),upperOpen:!0})}}):k}return r(r({},d),{schema:r(r({},h),{primaryKey:l,indexes:m,getIndexByKeyPath:function(k){return(k=p[nr(k)])&&k[0]}}),count:function(k){return d.count(R(k))},query:function(k){return d.query(R(k))},openCursor:function(k){var P=k.query.index,E=P.keyTail,A=P.isVirtual,D=P.keyLength;return A?d.openCursor(R(k)).then(function(j){return j&&I(j)}):d.openCursor(k);function I(j){return Object.create(j,{continue:{value:function(N){N!=null?j.continue(Zr(N,k.reverse?o.MAX_KEY:o.MIN_KEY,E)):k.unique?j.continue(j.key.slice(0,D).concat(k.reverse?o.MIN_KEY:o.MAX_KEY,E)):j.continue()}},continuePrimaryKey:{value:function(N,z){j.continuePrimaryKey(Zr(N,o.MAX_KEY,E),z)}},primaryKey:{get:function(){return j.primaryKey}},key:{get:function(){var N=j.key;return D===1?N[0]:N.slice(0,D)}},value:{get:function(){return j.value}}})}}})}})}};function Ds(o,l,d,h){return d=d||{},h=h||"",a(o).forEach(function(p){var m,w,x;b(l,p)?(m=o[p],w=l[p],typeof m=="object"&&typeof w=="object"&&m&&w?(x=Te(m))!==Te(w)?d[h+p]=l[p]:x==="Object"?Ds(m,w,d,h+p+"."):m!==w&&(d[h+p]=l[p]):m!==w&&(d[h+p]=l[p])):d[h+p]=void 0}),a(l).forEach(function(p){b(o,p)||(d[h+p]=l[p])}),d}function Ps(o,l){return l.type==="delete"?l.keys:l.keys||l.values.map(o.extractKey)}var Ud={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(o){return r(r({},o),{table:function(l){var d=o.table(l),h=d.schema.primaryKey;return r(r({},d),{mutate:function(p){var m=le.trans,w=m.table(l).hook,x=w.deleting,S=w.creating,T=w.updating;switch(p.type){case"add":if(S.fire===xe)break;return m._promise("readwrite",function(){return R(p)},!0);case"put":if(S.fire===xe&&T.fire===xe)break;return m._promise("readwrite",function(){return R(p)},!0);case"delete":if(x.fire===xe)break;return m._promise("readwrite",function(){return R(p)},!0);case"deleteRange":if(x.fire===xe)break;return m._promise("readwrite",function(){return(function k(P,E,A){return d.query({trans:P,values:!1,query:{index:h,range:E},limit:A}).then(function(D){var I=D.result;return R({type:"delete",keys:I,trans:P}).then(function(j){return 0<j.numFailures?Promise.reject(j.failures[0]):I.length<A?{failures:[],numFailures:0,lastResult:void 0}:k(P,r(r({},E),{lower:I[I.length-1],lowerOpen:!0}),A)})})})(p.trans,p.range,1e4)},!0)}return d.mutate(p);function R(k){var P,E,A,D=le.trans,I=k.keys||Ps(h,k);if(!I)throw new Error("Keys missing");return(k=k.type==="add"||k.type==="put"?r(r({},k),{keys:I}):r({},k)).type!=="delete"&&(k.values=i([],k.values)),k.keys&&(k.keys=i([],k.keys)),P=d,A=I,((E=k).type==="add"?Promise.resolve([]):P.getMany({trans:E.trans,keys:A,cache:"immutable"})).then(function(j){var N=I.map(function(z,B){var X,ee,J,Q=j[B],te={onerror:null,onsuccess:null};return k.type==="delete"?x.fire.call(te,z,Q,D):k.type==="add"||Q===void 0?(X=S.fire.call(te,z,k.values[B],D),z==null&&X!=null&&(k.keys[B]=z=X,h.outbound||H(k.values[B],h.keyPath,z))):(X=Ds(Q,k.values[B]),(ee=T.fire.call(te,X,z,Q,D))&&(J=k.values[B],Object.keys(ee).forEach(function(Z){b(J,Z)?J[Z]=ee[Z]:H(J,Z,ee[Z])}))),te});return d.mutate(k).then(function(z){for(var B=z.failures,X=z.results,ee=z.numFailures,z=z.lastResult,J=0;J<I.length;++J){var Q=(X||I)[J],te=N[J];Q==null?te.onerror&&te.onerror(B[J]):te.onsuccess&&te.onsuccess(k.type==="put"&&j[J]?k.values[J]:Q)}return{failures:B,results:X,numFailures:ee,lastResult:z}}).catch(function(z){return N.forEach(function(B){return B.onerror&&B.onerror(z)}),Promise.reject(z)})})}}})}})}};function Ta(o,l,d){try{if(!l||l.keys.length<o.length)return null;for(var h=[],p=0,m=0;p<l.keys.length&&m<o.length;++p)be(l.keys[p],o[m])===0&&(h.push(d?ce(l.values[p]):l.values[p]),++m);return h.length===o.length?h:null}catch{return null}}var Fd={stack:"dbcore",level:-1,create:function(o){return{table:function(l){var d=o.table(l);return r(r({},d),{getMany:function(h){if(!h.cache)return d.getMany(h);var p=Ta(h.keys,h.trans._cache,h.cache==="clone");return p?ne.resolve(p):d.getMany(h).then(function(m){return h.trans._cache={keys:h.keys,values:h.cache==="clone"?ce(m):m},m})},mutate:function(h){return h.type!=="add"&&(h.trans._cache=null),d.mutate(h)}})}}}};function Ia(o,l){return o.trans.mode==="readonly"&&!!o.subscr&&!o.trans.explicit&&o.trans.db._options.cache!=="disabled"&&!l.schema.primaryKey.outbound}function Aa(o,l){switch(o){case"query":return l.values&&!l.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Bd={stack:"dbcore",level:0,name:"Observability",create:function(o){var l=o.schema.name,d=new qe(o.MIN_KEY,o.MAX_KEY);return r(r({},o),{transaction:function(h,p,m){if(le.subscr&&p!=="readonly")throw new ue.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(le.querier));return o.transaction(h,p,m)},table:function(h){var p=o.table(h),m=p.schema,w=m.primaryKey,k=m.indexes,x=w.extractKey,S=w.outbound,T=w.autoIncrement&&k.filter(function(E){return E.compound&&E.keyPath.includes(w.keyPath)}),R=r(r({},p),{mutate:function(E){function A(Z){return Z="idb://".concat(l,"/").concat(h,"/").concat(Z),z[Z]||(z[Z]=new qe)}var D,I,j,N=E.trans,z=E.mutatedParts||(E.mutatedParts={}),B=A(""),X=A(":dels"),ee=E.type,te=E.type==="deleteRange"?[E.range]:E.type==="delete"?[E.keys]:E.values.length<50?[Ps(w,E).filter(function(Z){return Z}),E.values]:[],J=te[0],Q=te[1],te=E.trans._cache;return c(J)?(B.addKeys(J),(te=ee==="delete"||J.length===Q.length?Ta(J,te):null)||X.addKeys(J),(te||Q)&&(D=A,I=te,j=Q,m.indexes.forEach(function(Z){var oe=D(Z.name||"");function fe(ge){return ge!=null?Z.extractKey(ge):null}function me(ge){return Z.multiEntry&&c(ge)?ge.forEach(function(nt){return oe.addKey(nt)}):oe.addKey(ge)}(I||j).forEach(function(ge,Ke){var he=I&&fe(I[Ke]),Ke=j&&fe(j[Ke]);be(he,Ke)!==0&&(he!=null&&me(he),Ke!=null&&me(Ke))})}))):J?(Q={from:(Q=J.lower)!==null&&Q!==void 0?Q:o.MIN_KEY,to:(Q=J.upper)!==null&&Q!==void 0?Q:o.MAX_KEY},X.add(Q),B.add(Q)):(B.add(d),X.add(d),m.indexes.forEach(function(Z){return A(Z.name).add(d)})),p.mutate(E).then(function(Z){return!J||E.type!=="add"&&E.type!=="put"||(B.addKeys(Z.results),T&&T.forEach(function(oe){for(var fe=E.values.map(function(he){return oe.extractKey(he)}),me=oe.keyPath.findIndex(function(he){return he===w.keyPath}),ge=0,nt=Z.results.length;ge<nt;++ge)fe[ge][me]=Z.results[ge];A(oe.name).addKeys(fe)})),N.mutatedParts=Jr(N.mutatedParts||{},z),Z})}}),k=function(A){var D=A.query,A=D.index,D=D.range;return[A,new qe((A=D.lower)!==null&&A!==void 0?A:o.MIN_KEY,(D=D.upper)!==null&&D!==void 0?D:o.MAX_KEY)]},P={get:function(E){return[w,new qe(E.key)]},getMany:function(E){return[w,new qe().addKeys(E.keys)]},count:k,query:k,openCursor:k};return a(P).forEach(function(E){R[E]=function(A){var D=le.subscr,I=!!D,j=Ia(le,p)&&Aa(E,A)?A.obsSet={}:D;if(I){var N=function(Q){return Q="idb://".concat(l,"/").concat(h,"/").concat(Q),j[Q]||(j[Q]=new qe)},z=N(""),B=N(":dels"),D=P[E](A),I=D[0],D=D[1];if((E==="query"&&I.isPrimaryKey&&!A.values?B:N(I.name||"")).add(D),!I.isPrimaryKey){if(E!=="count"){var X=E==="query"&&S&&A.values&&p.query(r(r({},A),{values:!1}));return p[E].apply(this,arguments).then(function(Q){if(E==="query"){if(S&&A.values)return X.then(function(fe){return fe=fe.result,z.addKeys(fe),Q});var te=A.values?Q.result.map(x):Q.result;(A.values?z:B).addKeys(te)}else if(E==="openCursor"){var Z=Q,oe=A.values;return Z&&Object.create(Z,{key:{get:function(){return B.addKey(Z.primaryKey),Z.key}},primaryKey:{get:function(){var fe=Z.primaryKey;return B.addKey(fe),fe}},value:{get:function(){return oe&&z.addKey(Z.primaryKey),Z.value}}})}return Q})}B.add(d)}}return p[E].apply(this,arguments)}}),R}})}};function Ra(o,l,d){if(d.numFailures===0)return l;if(l.type==="deleteRange")return null;var h=l.keys?l.keys.length:"values"in l&&l.values?l.values.length:1;return d.numFailures===h?null:(l=r({},l),c(l.keys)&&(l.keys=l.keys.filter(function(p,m){return!(m in d.failures)})),"values"in l&&c(l.values)&&(l.values=l.values.filter(function(p,m){return!(m in d.failures)})),l)}function Ls(o,l){return d=o,((h=l).lower===void 0||(h.lowerOpen?0<be(d,h.lower):0<=be(d,h.lower)))&&(o=o,(l=l).upper===void 0||(l.upperOpen?be(o,l.upper)<0:be(o,l.upper)<=0));var d,h}function Oa(o,l,P,h,p,m){if(!P||P.length===0)return o;var w=l.query.index,x=w.multiEntry,S=l.query.range,T=h.schema.primaryKey.extractKey,R=w.extractKey,k=(w.lowLevelIndex||w).extractKey,P=P.reduce(function(E,A){var D=E,I=[];if(A.type==="add"||A.type==="put")for(var j=new qe,N=A.values.length-1;0<=N;--N){var z,B=A.values[N],X=T(B);j.hasKey(X)||(z=R(B),(x&&c(z)?z.some(function(Z){return Ls(Z,S)}):Ls(z,S))&&(j.addKey(X),I.push(B)))}switch(A.type){case"add":var ee=new qe().addKeys(l.values?E.map(function(oe){return T(oe)}):E),D=E.concat(l.values?I.filter(function(oe){return oe=T(oe),!ee.hasKey(oe)&&(ee.addKey(oe),!0)}):I.map(function(oe){return T(oe)}).filter(function(oe){return!ee.hasKey(oe)&&(ee.addKey(oe),!0)}));break;case"put":var J=new qe().addKeys(A.values.map(function(oe){return T(oe)}));D=E.filter(function(oe){return!J.hasKey(l.values?T(oe):oe)}).concat(l.values?I:I.map(function(oe){return T(oe)}));break;case"delete":var Q=new qe().addKeys(A.keys);D=E.filter(function(oe){return!Q.hasKey(l.values?T(oe):oe)});break;case"deleteRange":var te=A.range;D=E.filter(function(oe){return!Ls(T(oe),te)})}return D},o);return P===o?o:(P.sort(function(E,A){return be(k(E),k(A))||be(T(E),T(A))}),l.limit&&l.limit<1/0&&(P.length>l.limit?P.length=l.limit:o.length===l.limit&&P.length<l.limit&&(p.dirty=!0)),m?Object.freeze(P):P)}function Da(o,l){return be(o.lower,l.lower)===0&&be(o.upper,l.upper)===0&&!!o.lowerOpen==!!l.lowerOpen&&!!o.upperOpen==!!l.upperOpen}function Hd(o,l){return(function(d,h,p,m){if(d===void 0)return h!==void 0?-1:0;if(h===void 0)return 1;if((h=be(d,h))===0){if(p&&m)return 0;if(p)return 1;if(m)return-1}return h})(o.lower,l.lower,o.lowerOpen,l.lowerOpen)<=0&&0<=(function(d,h,p,m){if(d===void 0)return h!==void 0?1:0;if(h===void 0)return-1;if((h=be(d,h))===0){if(p&&m)return 0;if(p)return-1;if(m)return 1}return h})(o.upper,l.upper,o.upperOpen,l.upperOpen)}function qd(o,l,d,h){o.subscribers.add(d),h.addEventListener("abort",function(){var p,m;o.subscribers.delete(d),o.subscribers.size===0&&(p=o,m=l,setTimeout(function(){p.subscribers.size===0&&de(m,p)},3e3))})}var Kd={stack:"dbcore",level:0,name:"Cache",create:function(o){var l=o.schema.name;return r(r({},o),{transaction:function(d,h,p){var m,w,x=o.transaction(d,h,p);return h==="readwrite"&&(w=(m=new AbortController).signal,p=function(S){return function(){if(m.abort(),h==="readwrite"){for(var T=new Set,R=0,k=d;R<k.length;R++){var P=k[R],E=on["idb://".concat(l,"/").concat(P)];if(E){var A=o.table(P),D=E.optimisticOps.filter(function(oe){return oe.trans===x});if(x._explicit&&S&&x.mutatedParts)for(var I=0,j=Object.values(E.queries.query);I<j.length;I++)for(var N=0,z=(ee=j[I]).slice();N<z.length;N++)Ts((J=z[N]).obsSet,x.mutatedParts)&&(de(ee,J),J.subscribers.forEach(function(oe){return T.add(oe)}));else if(0<D.length){E.optimisticOps=E.optimisticOps.filter(function(oe){return oe.trans!==x});for(var B=0,X=Object.values(E.queries.query);B<X.length;B++)for(var ee,J,Q,te=0,Z=(ee=X[B]).slice();te<Z.length;te++)(J=Z[te]).res!=null&&x.mutatedParts&&(S&&!J.dirty?(Q=Object.isFrozen(J.res),Q=Oa(J.res,J.req,D,A,J,Q),J.dirty?(de(ee,J),J.subscribers.forEach(function(oe){return T.add(oe)})):Q!==J.res&&(J.res=Q,J.promise=ne.resolve({result:Q}))):(J.dirty&&de(ee,J),J.subscribers.forEach(function(oe){return T.add(oe)})))}}}T.forEach(function(oe){return oe()})}}},x.addEventListener("abort",p(!1),{signal:w}),x.addEventListener("error",p(!1),{signal:w}),x.addEventListener("complete",p(!0),{signal:w})),x},table:function(d){var h=o.table(d),p=h.schema.primaryKey;return r(r({},h),{mutate:function(m){var w=le.trans;if(p.outbound||w.db._options.cache==="disabled"||w.explicit||w.idbtrans.mode!=="readwrite")return h.mutate(m);var x=on["idb://".concat(l,"/").concat(d)];return x?(w=h.mutate(m),m.type!=="add"&&m.type!=="put"||!(50<=m.values.length||Ps(p,m).some(function(S){return S==null}))?(x.optimisticOps.push(m),m.mutatedParts&&Qr(m.mutatedParts),w.then(function(S){0<S.numFailures&&(de(x.optimisticOps,m),(S=Ra(0,m,S))&&x.optimisticOps.push(S),m.mutatedParts&&Qr(m.mutatedParts))}),w.catch(function(){de(x.optimisticOps,m),m.mutatedParts&&Qr(m.mutatedParts)})):w.then(function(S){var T=Ra(0,r(r({},m),{values:m.values.map(function(R,k){var P;return S.failures[k]?R:(R=(P=p.keyPath)!==null&&P!==void 0&&P.includes(".")?ce(R):r({},R),H(R,p.keyPath,S.results[k]),R)})}),S);x.optimisticOps.push(T),queueMicrotask(function(){return m.mutatedParts&&Qr(m.mutatedParts)})}),w):h.mutate(m)},query:function(m){if(!Ia(le,h)||!Aa("query",m))return h.query(m);var w=((T=le.trans)===null||T===void 0?void 0:T.db._options.cache)==="immutable",k=le,x=k.requery,S=k.signal,T=(function(A,D,I,j){var N=on["idb://".concat(A,"/").concat(D)];if(!N)return[];if(!(D=N.queries[I]))return[null,!1,N,null];var z=D[(j.query?j.query.index.name:null)||""];if(!z)return[null,!1,N,null];switch(I){case"query":var B=z.find(function(X){return X.req.limit===j.limit&&X.req.values===j.values&&Da(X.req.query.range,j.query.range)});return B?[B,!0,N,z]:[z.find(function(X){return("limit"in X.req?X.req.limit:1/0)>=j.limit&&(!j.values||X.req.values)&&Hd(X.req.query.range,j.query.range)}),!1,N,z];case"count":return B=z.find(function(X){return Da(X.req.query.range,j.query.range)}),[B,!!B,N,z]}})(l,d,"query",m),R=T[0],k=T[1],P=T[2],E=T[3];return R&&k?R.obsSet=m.obsSet:(k=h.query(m).then(function(A){var D=A.result;if(R&&(R.res=D),w){for(var I=0,j=D.length;I<j;++I)Object.freeze(D[I]);Object.freeze(D)}else A.result=ce(D);return A}).catch(function(A){return E&&R&&de(E,R),Promise.reject(A)}),R={obsSet:m.obsSet,promise:k,subscribers:new Set,type:"query",req:m,dirty:!1},E?E.push(R):(E=[R],(P=P||(on["idb://".concat(l,"/").concat(d)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[m.query.index.name||""]=E)),qd(R,E,x,S),R.promise.then(function(A){return{result:Oa(A.result,m,P?.optimisticOps,h,R,w)}})}})}})}};function ei(o,l){return new Proxy(o,{get:function(d,h,p){return h==="db"?l:Reflect.get(d,h,p)}})}var Mt=(Oe.prototype.version=function(o){if(isNaN(o)||o<.1)throw new ue.Type("Given version is not a positive number");if(o=Math.round(10*o)/10,this.idbdb||this._state.isBeingOpened)throw new ue.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,o);var l=this._versions,d=l.filter(function(h){return h._cfg.version===o})[0];return d||(d=new this.Version(o),l.push(d),l.sort(Pd),d.stores({}),this._state.autoSchema=!1,d)},Oe.prototype._whenReady=function(o){var l=this;return this.idbdb&&(this._state.openComplete||le.letThrough||this._vip)?o():new ne(function(d,h){if(l._state.openComplete)return h(new ue.DatabaseClosed(l._state.dbOpenError));if(!l._state.isBeingOpened){if(!l._state.autoOpen)return void h(new ue.DatabaseClosed);l.open().catch(xe)}l._state.dbReadyPromise.then(d,h)}).then(o)},Oe.prototype.use=function(o){var l=o.stack,d=o.create,h=o.level,p=o.name;return p&&this.unuse({stack:l,name:p}),o=this._middlewares[l]||(this._middlewares[l]=[]),o.push({stack:l,create:d,level:h??10,name:p}),o.sort(function(m,w){return m.level-w.level}),this},Oe.prototype.unuse=function(o){var l=o.stack,d=o.name,h=o.create;return l&&this._middlewares[l]&&(this._middlewares[l]=this._middlewares[l].filter(function(p){return h?p.create!==h:!!d&&p.name!==d})),this},Oe.prototype.open=function(){var o=this;return nn(zt,function(){return Nd(o)})},Oe.prototype._close=function(){var o=this._state,l=_n.indexOf(this);if(0<=l&&_n.splice(l,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}o.isBeingOpened||(o.dbReadyPromise=new ne(function(d){o.dbReadyResolve=d}),o.openCanceller=new ne(function(d,h){o.cancelOpen=h}))},Oe.prototype.close=function(d){var l=(d===void 0?{disableAutoOpen:!0}:d).disableAutoOpen,d=this._state;l?(d.isBeingOpened&&d.cancelOpen(new ue.DatabaseClosed),this._close(),d.autoOpen=!1,d.dbOpenError=new ue.DatabaseClosed):(this._close(),d.autoOpen=this._options.autoOpen||d.isBeingOpened,d.openComplete=!1,d.dbOpenError=null)},Oe.prototype.delete=function(o){var l=this;o===void 0&&(o={disableAutoOpen:!0});var d=0<arguments.length&&typeof arguments[0]!="object",h=this._state;return new ne(function(p,m){function w(){l.close(o);var x=l._deps.indexedDB.deleteDatabase(l.name);x.onsuccess=Se(function(){var S,T,R;S=l._deps,T=l.name,R=S.indexedDB,S=S.IDBKeyRange,Cs(R)||T===zr||_s(R,S).delete(T).catch(xe),p()}),x.onerror=Et(m),x.onblocked=l._fireOnBlocked}if(d)throw new ue.InvalidArgument("Invalid closeOptions argument to db.delete()");h.isBeingOpened?h.dbReadyPromise.then(w):w()})},Oe.prototype.backendDB=function(){return this.idbdb},Oe.prototype.isOpen=function(){return this.idbdb!==null},Oe.prototype.hasBeenClosed=function(){var o=this._state.dbOpenError;return o&&o.name==="DatabaseClosed"},Oe.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Oe.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Oe.prototype,"tables",{get:function(){var o=this;return a(this._allTables).map(function(l){return o._allTables[l]})},enumerable:!1,configurable:!0}),Oe.prototype.transaction=function(){var o=function(l,d,h){var p=arguments.length;if(p<2)throw new ue.InvalidArgument("Too few arguments");for(var m=new Array(p-1);--p;)m[p-1]=arguments[p];return h=m.pop(),[l,se(m),h]}.apply(this,arguments);return this._transaction.apply(this,o)},Oe.prototype._transaction=function(o,l,d){var h=this,p=le.trans;p&&p.db===this&&o.indexOf("!")===-1||(p=null);var m,w,x=o.indexOf("?")!==-1;o=o.replace("!","").replace("?","");try{if(w=l.map(function(T){if(T=T instanceof h.Table?T.name:T,typeof T!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return T}),o=="r"||o===hs)m=hs;else{if(o!="rw"&&o!=fs)throw new ue.InvalidArgument("Invalid transaction mode: "+o);m=fs}if(p){if(p.mode===hs&&m===fs){if(!x)throw new ue.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");p=null}p&&w.forEach(function(T){if(p&&p.storeNames.indexOf(T)===-1){if(!x)throw new ue.SubTransaction("Table "+T+" not included in parent transaction.");p=null}}),x&&p&&!p.active&&(p=null)}}catch(T){return p?p._promise(null,function(R,k){k(T)}):Re(T)}var S=function T(R,k,P,E,A){return ne.resolve().then(function(){var D=le.transless||le,I=R._createTransaction(k,P,R._dbSchema,E);if(I.explicit=!0,D={trans:I,transless:D},E)I.idbtrans=E.idbtrans;else try{I.create(),I.idbtrans._explicit=!0,R._state.PR1398_maxLoop=3}catch(z){return z.name===ns.InvalidState&&R.isOpen()&&0<--R._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),R.close({disableAutoOpen:!1}),R.open().then(function(){return T(R,k,P,null,A)})):Re(z)}var j,N=et(A);return N&&kn(),D=ne.follow(function(){var z;(j=A.call(I,I))&&(N?(z=Ft.bind(null,null),j.then(z,z)):typeof j.next=="function"&&typeof j.throw=="function"&&(j=Os(j)))},D),(j&&typeof j.then=="function"?ne.resolve(j).then(function(z){return I.active?z:Re(new ue.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):D.then(function(){return j})).then(function(z){return E&&I._resolve(),I._completion.then(function(){return z})}).catch(function(z){return I._reject(z),Re(z)})})}.bind(null,this,m,w,p,d);return p?p._promise(m,S,"lock"):le.trans?nn(le.transless,function(){return h._whenReady(S)}):this._whenReady(S)},Oe.prototype.table=function(o){if(!b(this._allTables,o))throw new ue.InvalidTable("Table ".concat(o," does not exist"));return this._allTables[o]},Oe);function Oe(o,l){var d=this;this._middlewares={},this.verno=0;var h=Oe.dependencies;this._options=l=r({addons:Oe.addons,autoOpen:!0,indexedDB:h.indexedDB,IDBKeyRange:h.IDBKeyRange,cache:"cloned"},l),this._deps={indexedDB:l.indexedDB,IDBKeyRange:l.IDBKeyRange},h=l.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var p,m,w,x,S,T={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:xe,dbReadyPromise:null,cancelOpen:xe,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:l.autoOpen};T.dbReadyPromise=new ne(function(k){T.dbReadyResolve=k}),T.openCanceller=new ne(function(k,P){T.cancelOpen=P}),this._state=T,this.name=o,this.on=Xn(this,"populate","blocked","versionchange","close",{ready:[rs,xe]}),this.on.ready.subscribe=F(this.on.ready.subscribe,function(k){return function(P,E){Oe.vip(function(){var A,D=d._state;D.openComplete?(D.dbOpenError||ne.resolve().then(P),E&&k(P)):D.onReadyBeingFired?(D.onReadyBeingFired.push(P),E&&k(P)):(k(P),A=d,E||k(function I(){A.on.ready.unsubscribe(P),A.on.ready.unsubscribe(I)}))})}}),this.Collection=(p=this,Jn(Ed.prototype,function(j,I){this.db=p;var E=ua,A=null;if(I)try{E=I()}catch(N){A=N}var D=j._ctx,I=D.table,j=I.hook.reading.fire;this._ctx={table:I,index:D.index,isPrimKey:!D.index||I.schema.primKey.keyPath&&D.index===I.schema.primKey.name,range:E,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:A,or:D.or,valueMapper:j!==Kn?j:null}})),this.Table=(m=this,Jn(pa.prototype,function(k,P,E){this.db=m,this._tx=E,this.name=k,this.schema=P,this.hook=m._allTables[k]?m._allTables[k].hook:Xn(null,{creating:[wd,xe],reading:[bd,Kn],updating:[vd,xe],deleting:[yd,xe]})})),this.Transaction=(w=this,Jn(Ad.prototype,function(k,P,E,A,D){var I=this;this.db=w,this.mode=k,this.storeNames=P,this.schema=E,this.chromeTransactionDurability=A,this.idbtrans=null,this.on=Xn(this,"complete","error","abort"),this.parent=D||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new ne(function(j,N){I._resolve=j,I._reject=N}),this._completion.then(function(){I.active=!1,I.on.complete.fire()},function(j){var N=I.active;return I.active=!1,I.on.error.fire(j),I.parent?I.parent._reject(j):N&&I.idbtrans&&I.idbtrans.abort(),Re(j)})})),this.Version=(x=this,Jn(jd.prototype,function(k){this.db=x,this._cfg={version:k,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(S=this,Jn(ya.prototype,function(k,P,E){if(this.db=S,this._ctx={table:k,index:P===":id"?null:P,or:E},this._cmp=this._ascending=be,this._descending=function(A,D){return be(D,A)},this._max=function(A,D){return 0<be(A,D)?A:D},this._min=function(A,D){return be(A,D)<0?A:D},this._IDBKeyRange=S._deps.IDBKeyRange,!this._IDBKeyRange)throw new ue.MissingAPI})),this.on("versionchange",function(k){0<k.newVersion?console.warn("Another connection wants to upgrade database '".concat(d.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(d.name,"'. Closing db now to resume the delete request.")),d.close({disableAutoOpen:!1})}),this.on("blocked",function(k){!k.newVersion||k.newVersion<k.oldVersion?console.warn("Dexie.delete('".concat(d.name,"') was blocked")):console.warn("Upgrade '".concat(d.name,"' blocked by other connection holding version ").concat(k.oldVersion/10))}),this._maxKey=tr(l.IDBKeyRange),this._createTransaction=function(k,P,E,A){return new d.Transaction(k,P,E,d._options.chromeTransactionDurability,A)},this._fireOnBlocked=function(k){d.on("blocked").fire(k),_n.filter(function(P){return P.name===d.name&&P!==d&&!P._state.vcFired}).map(function(P){return P.on("versionchange").fire(k)})},this.use(Fd),this.use(Kd),this.use(Bd),this.use(zd),this.use(Ud);var R=new Proxy(this,{get:function(k,P,E){if(P==="_vip")return!0;if(P==="table")return function(D){return ei(d.table(D),R)};var A=Reflect.get(k,P,E);return A instanceof pa?ei(A,R):P==="tables"?A.map(function(D){return ei(D,R)}):P==="_createTransaction"?function(){return ei(A.apply(this,arguments),R)}:A}});this.vip=R,h.forEach(function(k){return k(d)})}var ti,bt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Vd=(Ms.prototype.subscribe=function(o,l,d){return this._subscribe(o&&typeof o!="function"?o:{next:o,error:l,complete:d})},Ms.prototype[bt]=function(){return this},Ms);function Ms(o){this._subscribe=o}try{ti={indexedDB:s.indexedDB||s.mozIndexedDB||s.webkitIndexedDB||s.msIndexedDB,IDBKeyRange:s.IDBKeyRange||s.webkitIDBKeyRange}}catch{ti={indexedDB:null,IDBKeyRange:null}}function Pa(o){var l,d=!1,h=new Vd(function(p){var m=et(o),w,x=!1,S={},T={},R={get closed(){return x},unsubscribe:function(){x||(x=!0,w&&w.abort(),k&&qt.storagemutated.unsubscribe(E))}};p.start&&p.start(R);var k=!1,P=function(){return ds(A)},E=function(D){Jr(S,D),Ts(T,S)&&P()},A=function(){var D,I,j;!x&&ti.indexedDB&&(S={},D={},w&&w.abort(),w=new AbortController,j=(function(N){var z=xn();try{m&&kn();var B=Ut(o,N);return B=m?B.finally(Ft):B}finally{z&&$n()}})(I={subscr:D,signal:w.signal,requery:P,querier:o,trans:null}),Promise.resolve(j).then(function(N){d=!0,l=N,x||I.signal.aborted||(S={},(function(z){for(var B in z)if(b(z,B))return;return 1})(T=D)||k||(qt(er,E),k=!0),ds(function(){return!x&&p.next&&p.next(N)}))},function(N){d=!1,["DatabaseClosedError","AbortError"].includes(N?.name)||x||ds(function(){x||p.error&&p.error(N)})}))};return setTimeout(P,0),R});return h.hasValue=function(){return d},h.getValue=function(){return l},h}var an=Mt;function js(o){var l=Kt;try{Kt=!0,qt.storagemutated.fire(o),Rs(o,!0)}finally{Kt=l}}y(an,r(r({},Ar),{delete:function(o){return new an(o,{addons:[]}).delete()},exists:function(o){return new an(o,{addons:[]}).open().then(function(l){return l.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(o){try{return l=an.dependencies,d=l.indexedDB,l=l.IDBKeyRange,(Cs(d)?Promise.resolve(d.databases()).then(function(h){return h.map(function(p){return p.name}).filter(function(p){return p!==zr})}):_s(d,l).toCollection().primaryKeys()).then(o)}catch{return Re(new ue.MissingAPI)}var l,d},defineClass:function(){return function(o){u(this,o)}},ignoreTransaction:function(o){return le.trans?nn(le.transless,o):o()},vip:Ss,async:function(o){return function(){try{var l=Os(o.apply(this,arguments));return l&&typeof l.then=="function"?l:ne.resolve(l)}catch(d){return Re(d)}}},spawn:function(o,l,d){try{var h=Os(o.apply(d,l||[]));return h&&typeof h.then=="function"?h:ne.resolve(h)}catch(p){return Re(p)}},currentTransaction:{get:function(){return le.trans||null}},waitFor:function(o,l){return l=ne.resolve(typeof o=="function"?an.ignoreTransaction(o):o).timeout(l||6e4),le.trans?le.trans.waitFor(l):l},Promise:ne,debug:{get:function(){return St},set:function(o){ra(o)}},derive:_,extend:u,props:y,override:F,Events:Xn,on:qt,liveQuery:Pa,extendObservabilitySet:Jr,getByKeyPath:G,setByKeyPath:H,delByKeyPath:function(o,l){typeof l=="string"?H(o,l,void 0):"length"in l&&[].map.call(l,function(d){H(o,d,void 0)})},shallowClone:Y,deepClone:ce,getObjectDiff:Ds,cmp:be,asap:W,minKey:-1/0,addons:[],connections:_n,errnames:ns,dependencies:ti,cache:on,semVer:"4.0.10",version:"4.0.10".split(".").map(function(o){return parseInt(o)}).reduce(function(o,l,d){return o+l/Math.pow(10,2*d)})})),an.maxKey=tr(an.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(qt(er,function(o){Kt||(o=new CustomEvent(bs,{detail:o}),Kt=!0,dispatchEvent(o),Kt=!1)}),addEventListener(bs,function(o){o=o.detail,Kt||js(o)}));var En,Kt=!1,La=function(){};return typeof BroadcastChannel<"u"&&((La=function(){(En=new BroadcastChannel(bs)).onmessage=function(o){return o.data&&js(o.data)}})(),typeof En.unref=="function"&&En.unref(),qt(er,function(o){Kt||En.postMessage(o)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(o){if(!Mt.disableBfCache&&o.persisted){St&&console.debug("Dexie: handling persisted pagehide"),En?.close();for(var l=0,d=_n;l<d.length;l++)d[l].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(o){!Mt.disableBfCache&&o.persisted&&(St&&console.debug("Dexie: handling persisted pageshow"),La(),js({all:new qe(-1/0,[[]])}))})),ne.rejectionMapper=function(o,l){return!o||o instanceof He||o instanceof TypeError||o instanceof SyntaxError||!o.name||!na[o.name]?o:(l=new na[o.name](l||o.message,o),"stack"in o&&C(l,"stack",{get:function(){return this.inner.stack}}),l)},ra(St),r(Mt,Object.freeze({__proto__:null,Dexie:Mt,liveQuery:Pa,Entity:da,cmp:be,PropModSymbol:Lt,PropModification:Qn,replacePrefix:function(o,l){return new Qn({replacePrefix:[o,l]})},add:function(o){return new Qn({add:o})},remove:function(o){return new Qn({remove:o})},default:Mt,RangeSet:qe,mergeRanges:ir,rangesOverlap:_a}),{default:Mt}),Mt})})(fi)),fi.exports}var Sh=Ch();const Qs=kh(Sh),Ya=Symbol.for("Dexie"),vi=globalThis[Ya]||(globalThis[Ya]=Qs);if(Qs.semVer!==vi.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Qs.semVer} and ${vi.semVer}`);const{liveQuery:$o,mergeRanges:Kv,rangesOverlap:Vv,RangeSet:Gv,cmp:Wv,Entity:Yv,PropModSymbol:Xv,PropModification:Jv,replacePrefix:Qv,add:Zv,remove:e0}=vi,Eh="easydb";function hn(e,t){return`${e}::${t}`}let ri=null;function Cc(){if(ri)return ri;const e=new vi(Eh);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.version(3).stores({settings:"key, workspaceId, name"}).upgrade(async t=>{const n=t.table("settings"),i=(await n.toArray()).filter(c=>c.workspaceId==null);if(i.length===0)return;const s=(await t.table("workspaces").toArray()).map(c=>c.id),a=s.length>0?s:["default"];for(const c of i){for(const u of a)await n.put({key:hn(u,c.key),workspaceId:u,name:c.key,value:c.value});await n.delete(c.key)}}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>Th()),ri={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},ri}function Th(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function or(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const n=Object.entries(t);return e.filter(r=>ko(r,n)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,n){if(await e.update(t,n)===0)throw new Error(`patch: no doc with id=${t}`);const i=await e.get(t);if(!i)throw new Error(`patch: doc id=${t} vanished after update`);return i},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const r=$o(()=>e.toArray()).subscribe({next:i=>t(i)});return()=>r.unsubscribe()}}}function Ih(e,t){return{async find(n){const r=e.where("tableId").equals(t);if(!n||Object.keys(n).length===0)return r.toArray();const i=Object.entries(n);return r.filter(s=>ko(s,i)).toArray()},async findOne(n){const r=await e.get(n);return r&&r.tableId===t?r:null},async insert(n){const r={...n,tableId:t};return await e.add(r),r},async bulkInsert(n){if(n.length===0)return[];const r=n.map(i=>({...i,tableId:t}));return await e.bulkAdd(r),r},async upsert(n){const r={...n,tableId:t};return await e.put(r),r},async patch(n,r){if(await e.update(n,r)===0)throw new Error(`row patch: no row ${n}`);const s=await e.get(n);if(!s)throw new Error(`row patch: row ${n} vanished after update`);return s},async remove(n){await e.delete(n)},async bulkRemove(n){n.length!==0&&await e.bulkDelete(n)},subscribe(n){const i=$o(()=>e.where("tableId").equals(t).toArray()).subscribe({next:s=>n(s)});return()=>i.unsubscribe()}}}function Ah(e,t){const n=i=>({...i,workspaceId:t(),key:hn(t(),i.name),name:i.name,value:i.value}),r=()=>e.where("workspaceId").equals(t());return{async find(i){const s=await r().toArray();if(!i||Object.keys(i).length===0)return s;const a=Object.entries(i);return s.filter(c=>ko(c,a))},async findOne(i){return await e.get(hn(t(),i))??null},async insert(i){const s=n(i);return await e.add(s),s},async bulkInsert(i){if(i.length===0)return[];const s=i.map(a=>n(a));return await e.bulkAdd(s),s},async upsert(i){const s=n(i);return await e.put(s),s},async patch(i,s){const a=hn(t(),i);if(await e.update(a,s)===0)throw new Error(`setting patch: no setting ${i}`);const u=await e.get(a);if(!u)throw new Error(`setting patch: ${i} vanished after update`);return u},async remove(i){await e.delete(hn(t(),i))},async bulkRemove(i){i.length!==0&&await e.bulkDelete(i.map(s=>hn(t(),s)))},subscribe(i){const a=$o(()=>r().toArray()).subscribe({next:c=>i(c)});return()=>a.unsubscribe()}}}function ko(e,t){for(const[n,r]of t)if(e[n]!==r)return!1;return!0}function Rh(e,t){return{workspaces:or(e.workspaces),tables:or(e.tables),settings:Ah(e.settings,t),plugins:or(e.plugins),viewTemplates:or(e.viewTemplates),viewInstances:or(e.viewInstances),rows:n=>Ih(e.rows,n)}}function Oh(e){const{base:t,providers:n,tableById:r,ctx:i}=e,s=new Map;return{...t,rows(a){const c=r(a),u=c?.source;if(u){const f=n.get(u.type);if(f){const g=JSON.stringify(u),b=s.get(a);if(b&&b.key===g)return b.coll;const y=f.create(c,i);return s.set(a,{key:g,coll:y}),y}}return s.delete(a),t.rows(a)}}}function Dh(){const e=new Map;return{on(t,n){let r=e.get(t);return r||(r=new Set,e.set(t,r)),r.add(n),()=>{r.delete(n)}},emit(t,n){const r=e.get(t);if(r)for(const i of r)try{i(n)}catch(s){console.error(`[event:${String(t)}] listener threw`,s)}}}}const ht=$e`
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
`;function ft(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const n=t.querySelector("form");n&&(e.preventDefault(),n.requestSubmit())}const Xa=new WeakSet;function pt(e,t){if(Xa.has(t))return;Xa.add(t);let n=0,r=0,i=0,s=0,a=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",u=>{if(u.target.closest("button, input, textarea, select, a, label"))return;a=!0,n=u.clientX,r=u.clientY;const g=e.getBoundingClientRect();i=g.left,s=g.top,t.setPointerCapture(u.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",u=>{if(!a)return;const f=u.clientX-n,g=u.clientY-r,b=-e.offsetWidth+80,y=window.innerWidth-80,v=0,C=window.innerHeight-40,_=Math.max(b,Math.min(y,i+f)),O=Math.max(v,Math.min(C,s+g));e.style.position="fixed",e.style.left=`${_}px`,e.style.top=`${O}px`,e.style.margin="0"});const c=u=>{if(a){a=!1;try{t.releasePointerCapture(u.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c)}var Ph=Object.defineProperty,Lh=Object.getOwnPropertyDescriptor,Sc=(e,t,n,r)=>{for(var i=r>1?void 0:r?Lh(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Ph(t,n,i),i};let yt=class extends ve{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitChoice=e=>{if(e.preventDefault(),this.current?.kind!=="choice")return;const t=this.current.options[0];t!==void 0&&this.closeAndResolve(t)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),yt.instance=this}disconnectedCallback(){super.disconnectedCallback(),yt.instance===this&&(yt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&pt(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(n=>{this.current={kind:"alert",title:t,message:e,resolve:n}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",n="Input"){return this.enqueue(r=>{this.current={kind:"prompt",title:n,message:e,value:t,resolve:r}})}choice(e,t,n="Choose"){return this.enqueue(r=>{this.current={kind:"choice",title:n,message:e,options:t,resolve:r}})}enqueue(e){return new Promise(t=>{const n=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(n):n()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const n=this.queue.shift();n&&n()}))}render(){const e=this.current;return $`
      <dialog @cancel=${this.onCancel} @keydown=${ft}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):re}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return $`
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
        `;case"prompt":return $`
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
        `;case"choice":return $`
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
              ${e.message?$`<p class="message">${e.message}</p>`:re}
              <div class="choices">
                ${e.options.map((t,n)=>n===0?$`<button type="submit" class="choice primary" autofocus>${t}</button>`:$`<button
                        type="button"
                        class="choice"
                        @click=${()=>this.closeAndResolve(t)}
                      >
                        ${t}
                      </button>`)}
              </div>
            </div>
          </form>
        `}}};yt.instance=null;yt.styles=[ht,$e`
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
    `];Sc([U()],yt.prototype,"current",2);yt=Sc([Ce("host-dialogs")],yt);const mt=$e`
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
`;var Mh=Object.defineProperty,jh=Object.getOwnPropertyDescriptor,Ec=(e,t,n,r)=>{for(var i=r>1?void 0:r?jh(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Mh(t,n,i),i};let jt=class extends ve{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),jt.instance=this}disconnectedCallback(){super.disconnectedCallback(),jt.instance===this&&(jt.instance=null)}show(e,t){const n={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,n];const r=t?.durationMs??(n.kind==="error"||n.kind==="warning"?7e3:4e3);n.timer=window.setTimeout(()=>this.dismiss(n.id),r)}dismiss(e){const t=this.toasts.find(n=>n.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(n=>n.id!==e)}render(){return $`
      ${this.toasts.map(e=>$`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${zh(e.kind)}</span>
            <span class="body">
              ${e.title?$`<strong>${e.title}</strong>`:""}${Nh(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};jt.instance=null;jt.styles=[mt,$e`
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
    `];Ec([U()],jt.prototype,"toasts",2);jt=Ec([Ce("toast-host")],jt);function Nh(e){const t=/(https?:\/\/[^\s)]+)/g,n=[];let r=0,i;for(;(i=t.exec(e))!==null;)i.index>r&&n.push(e.slice(r,i.index)),n.push({url:i[0]}),r=i.index+i[0].length;return r<e.length&&n.push(e.slice(r)),n.length===0?e:n.map(s=>typeof s=="string"?s:$`<a href=${s.url} target="_blank" rel="noopener noreferrer">${s.url}</a>`)}function zh(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function Uh(){return{headerButtons:[],footerButtons:[],tableButtons:[],columnEditorActions:[],importers:[],connectors:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map,settings:new Map,commands:[]}}function It(e,t){return e.push(t),()=>{const n=e.indexOf(t);n>=0&&e.splice(n,1)}}function Us(e,t,n){return e.set(t,n),()=>{e.get(t)===n&&e.delete(t)}}function Fh(e){return{registerHeaderButton:t=>It(e.headerButtons,t),registerFooterButton:t=>It(e.footerButtons,t),registerTableButton:t=>It(e.tableButtons,t),registerColumnEditorAction:t=>It(e.columnEditorActions,t),registerImporter:t=>It(e.importers,t),registerConnector:t=>It(e.connectors,t),registerExporter:t=>It(e.exporters,t),registerUrlSource:t=>It(e.urlSources,t),registerDropHandler:t=>It(e.dropHandlers,t),registerCellRenderer:(t,n)=>Us(e.cellRenderers,t,n),registerRowRenderer:(t,n)=>Us(e.rowRenderers,t,n),registerTableRenderer:(t,n)=>Us(e.tableRenderers,t,n),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},openSettings:()=>{document.dispatchEvent(new CustomEvent("easydb:open-settings"))},registerCommand:t=>It(e.commands,t),openCommandPalette:()=>{document.dispatchEvent(new CustomEvent("easydb:open-command-palette"))},registerSettings:(t,n,r)=>(e.settings.set(t,{name:n,fields:r}),()=>{e.settings.get(t)?.name===n&&e.settings.delete(t)}),dialogs:Bh}}const Bh={async alert(e,t){const n=yt.instance;if(n)return n.alert(e,t);window.alert(e)},async confirm(e,t){const n=yt.instance;return n?n.confirm(e,t):window.confirm(e)},async prompt(e,t,n){const r=yt.instance;return r?r.prompt(e,t,n):window.prompt(e,t)??null},async choice(e,t,n){const r=yt.instance;if(r)return r.choice(e,t,n);const i=window.prompt(`${e}

Options: ${t.join(", ")}`);return i&&t.includes(i)?i:null},toast(e,t){const n=jt.instance;n?n.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}},_o="/easydbaccess/settings.json",Tc="/easydbaccess/secrets.txt";function _r(e){try{return globalThis.localStorage??null}catch{return null}}function Pi(e){const t=_r();if(!t)return{};const n=t.getItem(_o);if(!n)return{};try{const r=JSON.parse(n);return r&&typeof r=="object"?r:{}}catch{return{}}}function Co(e,t){return Pi()[e]}function Hh(e,t,n){const r=_r();if(!r)return;const i=Pi();i[e]=t,r.setItem(_o,JSON.stringify(i))}function qh(e,t){const n=_r();if(!n)return;const r=Pi();e in r&&(delete r[e],n.setItem(_o,JSON.stringify(r)))}function Zs(e,t){return e in Pi()}function Li(e){return _r()?.getItem(Tc)??""}function Ic(e,t){_r()?.setItem(Tc,e)}function br(e){const t={};for(const n of e.split(/\r?\n/)){const r=n.trim();if(!r||r.startsWith("#"))continue;const i=r.indexOf(":");if(i<0)continue;const s=r.slice(0,i).trim(),a=r.slice(i+1).trim();s&&(t[s]=a)}return t}function Ac(e,t){return e.replace(/\$\{secret:([^}]+)\}/g,(n,r)=>{const i=t[r.trim()];return i===void 0?n:i})}function Kh(e){const t=Fh(e.registries),n=e.registries.rowSources,r=a=>(n.set(a.type,a),()=>{n.get(a.type)===a&&n.delete(a.type)}),i=Gh(e.store,e.registries),s={open(a){return console.warn("[host] windows.open is stubbed until Phase 5",a.id),{id:a.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:s,registerRowSource:r,settings:i,backend:{fetch:async(a,c)=>{const u=await Vh(e.store),f=c?.body instanceof ArrayBuffer;if(!u||f)return globalThis.fetch(a,c);const g={url:a};return c?.method&&(g.method=c.method),c?.headers&&(g.headers=c.headers),typeof c?.body=="string"&&(g.body=c.body),globalThis.fetch(`${u}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)})},async saveFile(a,c,u){const f=typeof c=="string"?new Blob([c],{type:u??"application/octet-stream"}):c,g=URL.createObjectURL(f),b=document.createElement("a");b.href=g,b.download=a,b.rel="noopener",document.body.appendChild(b),b.click(),b.remove(),setTimeout(()=>URL.revokeObjectURL(g),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function Vh(e){const t="server-sync:url";let n=Zs(t)?Co(t):void 0;return n===void 0&&(n=(await e.settings.findOne(t))?.value),typeof n!="string"||n.length===0?null:Ac(n,br(Li())).replace(/\/+$/,"")}function Gh(e,t){const n=(s,a)=>`${s}:${a}`,r=(s,a)=>t.settings.get(s)?.fields.find(c=>c.key===a),i=s=>typeof s=="string"?Ac(s,br(Li())):s;return{async get(s,a){const c=n(s,a);let u;if(Zs(c))u=Co(c);else{const f=await e.settings.findOne(c);u=f?f.value:r(s,a)?.default}return i(u)},async set(s,a,c,u){const f=n(s,a);(u??r(s,a)?.scope??"workspace")==="user"?(Hh(f,c),await e.settings.remove(f).catch(()=>{})):(await e.settings.upsert({name:f,value:c}),qh(f))},async placement(s,a){const c=n(s,a);return Zs(c)?"user":await e.settings.findOne(c)?"workspace":null}}}function Ja(e,t){return e.has(t)?e.get(t)!=="0":!1}function Wh(){if(typeof location>"u")return"off";const e=new URLSearchParams(location.search);return Ja(e,"safemode")?"all-optional":Ja(e,"safemode1")?"url-plugins":"off"}const wt=Wh();function So(e){let t;try{t=new URL(e)}catch{return e}const n=t.hostname.toLowerCase();if(n==="github.com"||n==="www.github.com"){const r=t.pathname.split("/").filter(Boolean);if(r.length>=5&&(r[2]==="blob"||r[2]==="raw")){const i=r[0],s=r[1];let a=r.slice(3);return a.length>=3&&a[0]==="refs"&&(a[1]==="heads"||a[1]==="tags")&&(a=a.slice(2)),`https://raw.githubusercontent.com/${[i,s,...a].join("/")}`}}return e}function Rc(e){if(e.length>1024)return!1;const t=e.split(`
`);return t[0]?.startsWith("version https://git-lfs.github.com/spec/v1")===!0&&t.some(n=>n.startsWith("oid "))&&t.some(n=>n.startsWith("size "))}function Oc(e){const t=So(e);let n;try{n=new URL(t)}catch{return null}if(n.hostname.toLowerCase()!=="raw.githubusercontent.com")return null;const r=n.pathname.replace(/^\/+/,"");return r.split("/").filter(Boolean).length<4?null:`https://media.githubusercontent.com/media/${r}`}async function Dc(e,t){const n=Number(e.headers?.get?.("content-length")),r=e.body?.getReader?.();if(r&&Number.isFinite(n)&&n>0){const i=[];let s=0;for(;;){const{done:u,value:f}=await r.read();if(u)break;f&&(i.push(f),s+=f.length,t?.(Math.min(1,s/n)))}const a=new Uint8Array(s);let c=0;for(const u of i)a.set(u,c),c+=u.length;return new TextDecoder().decode(a)}return await e.text()}const Yh=50*1024*1024;function Qa(e){try{return new URL(e).host}catch{return e}}function Mn(e){try{const n=new URL(e).pathname.split("/").filter(Boolean).pop();return n&&n.length>0?n:"sample.db.json"}catch{return"sample.db.json"}}async function Xh(e){try{return(await e.text()).replace(/\s+/g," ").trim().slice(0,300)}catch{return""}}function Za(e){const t=e/1048576;return`${Number.isInteger(t)?t:t.toFixed(1)} MB`}async function Jh(e,t,n={}){const r=So(t),i=n.slowMs??2e3;let s=setTimeout(()=>{s=void 0,n.onSlow?.()},i);const a=()=>{s!==void 0&&(clearTimeout(s),s=void 0)},c=n.maxBytes===null?null:n.maxBytes??Yh,u=async f=>{let g;try{g=await e.backend.fetch(f)}catch(y){throw new Error(`Could not reach ${Qa(f)} — no response. The server may be down, blocking cross-origin (CORS) requests, or the transfer may have failed (e.g. a very large file). [${y.message}]`)}if(!g.ok){const y=await Xh(g);throw new Error(`HTTP ${g.status} ${g.statusText||""}`.trim()+(y?` — ${y}`:""))}const b=Number(g.headers.get("content-length"));if(c!==null&&Number.isFinite(b)&&b>c)throw g.body?.cancel().catch(()=>{}),new Error(`Response is ${Za(b)}, over the ${Za(c)} browser import limit. Set a row limit, import it as a Reference instead of a Copy, take a smaller extract, or connect to a server/Datasette for large datasets.`);try{return await Dc(g,n.onProgress)}catch(y){throw new Error(`Failed reading the response body from ${Qa(f)}: ${y.message}`)}};try{const f=await u(r);if(Rc(f)){const g=Oc(r);if(g)return await u(g)}return f}finally{a()}}async function Mi(e,t,n,r={}){const{TopProgress:i}=await ct(async()=>{const{TopProgress:a}=await import("./top-progress-DIXM0wQC.js");return{TopProgress:a}},[]),s={handle:null};try{return await Jh(e,t,{onSlow:()=>{s.handle=i.begin(n)},onProgress:a=>s.handle?.fraction(a),...r.maxBytes!==void 0?{maxBytes:r.maxBytes}:{}})}finally{s.handle?.done()}}function Ee(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function Ge(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function eo(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}const Qh={id:"csv-import",name:"CSV Import",type:"importer",version:"0.1.0",description:"Drag-and-drop CSV or TSV files to create typed tables.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-import.ts"};function Zh(e){e.ui.registerImporter(nf),ct(()=>import("./csv-import-options-BulzGdv8.js"),[]),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const r=mf(t).filter(gf);if(r.length===0)return!1;t.preventDefault();const i=r.length===1?`"${r[0].name}"`:`${r.length} files`,s=await e.ui.dialogs.choice(`Import ${i} straight away, or review the columns first (rename, hide, fix duplicate names)?`,[tf,el],"Import CSV");if(!s)return!0;const a=s===el?async c=>{const{editColumnNames:u}=await ct(async()=>{const{editColumnNames:f}=await Promise.resolve().then(()=>ew);return{editColumnNames:f}},void 0);return u(c)}:void 0;for(const c of r)await rf(e,c,a);return!0})}function to(e){return e.kind==="file"&&e.file?e.file.name:e.kind==="url"&&e.url?Mn(e.url):"pasted"}function ef(e){return Io(to(e))||"imported"}const tf="Import directly",el="Edit columns first",nf={id:"csv",label:"CSV / TSV",icon:"table_view",order:10,accept:[".csv",".tsv",".tab","text/csv","text/tab-separated-values"],panel:"csv-import-options",samples:[{label:"Air quality — 2016 readings (CSV)",url:"https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv"}],supports:{url:!0,file:!0,text:!0,reference:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??e.text??"";return/\.(csv|tsv|tab)$/i.test(t)?.95:e.file?.type==="text/csv"?.9:e.kind==="text"?.2:0},async list(e,t){return[{name:ef(t),rowCount:null,handle:t}]},async*read(e,t){const n=t.handle;let r;n.kind==="file"&&n.file?r=e.maxRows!=null?await Mc(n.file,e.maxRows):await n.file.text():n.kind==="url"&&n.url?r=await e.fetchText(n.url,`Reading ${to(n)}…`):r=n.text??"";const s=(typeof e.panel.separator=="string"?e.panel.separator:void 0)??Ao(to(n)),a={...e.maxRows!=null?{maxRows:e.maxRows}:{},...s?{separator:s}:{}},c=e.targetColumns;if(c&&c.length>0){yield{rows:Eo(r,a).rows.map(b=>{const y={};for(let v=0;v<c.length;v++){const C=c[v];y[C.field]=To(b[v]??"",C.type)}return y})};return}const u=jn(r,a);yield{columns:u.columns,rows:u.rows}},reference(e,t){const n=t.handle;if(n.kind!=="url"||!n.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");return{type:"url",config:{url:n.url,format:"csv"}}}};async function rf(e,t,n){await Pc(e,await t.text(),t.name,n?{editColumns:n}:void 0)}async function Pc(e,t,n,r={}){const i=e.workspaceId();if(!i)throw new Error("csv-import: no active workspace");const s=Io(n||"imported")||"imported",a=r.separator??Ao(n),c=(await e.store.tables.find()).find(y=>y.workspaceId===i&&y.name===s);let u,f;if(c){const y=await e.ui.dialogs.choice(`A table named "${s}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!y)return;y==="Append rows"?(f="append",u=c.id):y==="Overwrite rows"?(f="overwrite",u=c.id):(f="new",u=Ee())}else f="new",u=Ee();e.events.emit("import:before",{source:"csv",tableId:u});let g;if(f==="new"){const y=jn(t,{maxRows:r.maxRows,separator:a});let v=y.columns,C=y.rows;if(r.editColumns){const O=await r.editColumns(v);if(O===null)return;C=bf(C,v,O),v=O}r.maxRows!=null&&(C=C.slice(0,r.maxRows));const _=c?`${s} (${Date.now().toString(36)})`:s;await e.store.tables.insert({id:u,workspaceId:i,name:_,code:eo(_),columns:v,view:"table",...r.origin?{origin:r.origin}:{},updatedAt:Date.now()}),g=C.map(O=>({id:Ee(),tableId:u,data:O,updatedAt:Date.now()}))}else{const y=c.columns,v=Eo(t,{maxRows:r.maxRows,separator:a});if(g=(r.maxRows!=null?v.rows.slice(0,r.maxRows):v.rows).map(_=>{const O={};for(let M=0;M<y.length;M++){const L=y[M];O[L.field]=To(_[M]??"",L.type)}return{id:Ee(),tableId:u,data:O,updatedAt:Date.now()}}),f==="overwrite"){const _=e.store.rows(u),O=await _.find();await _.bulkRemove(O.map(M=>M.id))}}await e.store.rows(u).bulkInsert(g),e.events.emit("import:after",{source:"csv",tableId:u,rowCount:g.length})}function Eo(e,t={}){const n=e.replace(/﻿/,""),r=t.separator??jc(n),i=Nc(n,r,Lc(t.maxRows));if(i.length===0)return{header:[],rows:[]};const s=i[0],a=i.slice(1).filter(c=>!(c.length===1&&c[0]===""));return{header:s,rows:a}}function Lc(e){return e!=null?e+1:void 0}async function Mc(e,t){const r=new TextDecoder,i=t+1;let s="",a=0,c=!1,u=0;for(;u<e.size;){const f=new Uint8Array(await e.slice(u,u+1048576).arrayBuffer());u+=1048576;const g=r.decode(f,{stream:!0});for(let b=0;b<g.length;b++){const y=g[b];if(y==='"')c=!c;else if(y===`
`&&!c&&(a+=1,a>=i))return s+g.slice(0,b+1)}s+=g}return s}function jn(e,t={}){const n=e.replace(/﻿/,""),r=t.separator??jc(n),i=Nc(n,r,Lc(t.maxRows));if(i.length===0)return{columns:[],rows:[]};const s=i[0],a=i.slice(1).filter(v=>!(v.length===1&&v[0]==="")),c=s.map((v,C)=>af(v,C)),u=Fc(c.map(v=>v.field)),f=a.map(v=>{const C={};for(let _=0;_<u.length;_++)C[u[_]]=v[_]??"";return C}),g=c.map((v,C)=>v.type?v.type:lf(f.map(_=>_[u[C]]??"").filter(_=>_.length>0))),b=c.map((v,C)=>{const _=g[C]??"string",O={field:u[C],label:v.label,type:_},M=of(_),L=v.renderer??M;return L&&(O.renderer=L),v.default!==void 0&&(O.default=v.default),v.max!=null&&(O.max=v.max),v.unique&&(O.unique=!0),v.notnull&&(O.notnull=!0),v.hidden&&(O.hidden=!0),O}),y=f.map(v=>{const C={};for(let _=0;_<u.length;_++){const O=u[_],M=g[_]??"string";C[O]=To(v[O]??"",M)}return C});return{columns:b,rows:y}}const sf=new Set(["string","number","boolean","date","datetime"]),tl={color:"color",image:"image"};function of(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function af(e,t){const n=e.trim();if(!n.includes(":"))return{field:eo(n||`col_${t+1}`),label:n||`Column ${t+1}`};const r=n.split(":"),i=eo(r[0]||`col_${t+1}`),s=(r[1]??r[0]??"").trim()||i,a={field:i,label:s},c=(r[2]??"").trim();c&&(sf.has(c)?a.type=c:tl[c]&&(a.type="string",a.renderer=tl[c]));const u=(r[3]??"").trim();u&&(a.default=u);const f=(r[4]??"").trim();if(f){const b=Number(f);Number.isFinite(b)&&b>0&&(a.max=b)}const g=(r[5]??"").toLowerCase();return g.includes("u")&&(a.unique=!0),g.includes("n")&&(a.notnull=!0),g.includes("h")&&(a.hidden=!0),a}function jc(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),n={",":0,";":0,"	":0};for(const s of t)s in n&&(n[s]+=1);let r=",",i=-1;for(const s of[",",";","	"])(n[s]??0)>i&&(r=s,i=n[s]??0);return r}function Nc(e,t,n){const r=[];let i=[],s="",a=!1;for(let c=0;c<e.length;c++){const u=e[c];if(a)u==='"'?e[c+1]==='"'?(s+='"',c++):a=!1:s+=u;else if(u==='"')a=!0;else if(u===t)i.push(s),s="";else if(u===`
`||u==="\r"){if(u==="\r"&&e[c+1]===`
`&&c++,i.push(s),r.push(i),i=[],s="",n!=null&&r.length>=n)return r}else s+=u}return(s.length>0||i.length>0)&&(i.push(s),r.push(i)),r}function lf(e){return e.length===0?"string":e.every(uf)?"boolean":e.every(df)?"number":e.every(ff)?"datetime":e.every(hf)?"date":"string"}const cf=/^(true|false|yes|no|0|1)$/i;function uf(e){return cf.test(e.trim())}function df(e){const t=e.trim();if(t==="")return!1;const n=Number(t);return Number.isFinite(n)}function hf(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function ff(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function To(e,t){const n=e.trim();switch(t){case"number":{if(n==="")return null;const r=Number(n);return Number.isFinite(r)?r:n}case"boolean":return n===""?null:/^(true|yes|1)$/i.test(n);case"date":return zc(n);case"datetime":return pf(n);default:return e}}function zc(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){const r=parseInt(t[1],10),i=parseInt(t[2],10),s=t[3];let a=parseInt(s,10);s.length===2&&(a+=2e3);let c,u;return r>12?(c=r,u=i):i>12?(u=r,c=i):(c=r,u=i),`${a.toString().padStart(4,"0")}-${u.toString().padStart(2,"0")}-${c.toString().padStart(2,"0")}`}const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toISOString().slice(0,10)}function pf(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),n=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(n)return`${n[1]}T${n[2].padStart(5,"0")}`;const r=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(r)return`${zc(`${r[1]}/${r[2]}/${r[3]}`)}T${r[4].padStart(5,"0")}`;const i=new Date(e);if(!Number.isNaN(i.getTime())){const s=i.toISOString();return`${s.slice(0,10)}T${s.slice(11,16)}`}return e}function mf(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const n=[];for(const r of Array.from(t.items))if(r.kind==="file"){const i=r.getAsFile();i&&n.push(i)}return n}return[]}const Uc=/\.(csv|tsv|tab)$/i;function Io(e){return e.replace(Uc,"")}function Ao(e){return/\.(tsv|tab)$/i.test(e)?"	":void 0}function gf(e){return!!(Uc.test(e.name)||e.type==="text/csv"||e.type==="application/csv"||e.type==="text/tab-separated-values")}function Fc(e){const t=new Map,n=new Set,r=[];for(const i of e){let s=i,a=t.get(i)??0;for(;n.has(s);)a+=1,s=`${i}_${a+1}`;t.set(i,a),n.add(s),r.push(s)}return r}function bf(e,t,n){return e.map(r=>{const i={};for(let s=0;s<t.length;s++)i[n[s].field]=r[t[s].field];return i})}const wf=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:Fc,importCsvText:Pc,init:Zh,meta:Qh,parseCsv:jn,parseCsvRaw:Eo,readCsvHead:Mc,separatorForName:Ao,stripDelimitedExt:Io},Symbol.toStringTag,{value:"Module"})),yf={id:"csv-export",name:"CSV Export",type:"exporter",version:"0.1.0",description:"CSV serializer for the per-table export menu (see dump-export.ts) and the importer/exporter registry.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-export.ts"},vf={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return Ro(e,t)}};function xf(e){e.ui.registerExporter(vf)}function Ro(e,t){const n=e.columns.map(s=>s.field),r=e.columns.map(s=>nl(s.label??s.field)),i=t.map(s=>n.map(a=>nl($f(s.data[a]))).join(","));return[r.join(","),...i].join(`\r
`)}function $f(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function nl(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const kf=Object.freeze(Object.defineProperty({__proto__:null,init:xf,meta:yf,serializeCsv:Ro},Symbol.toStringTag,{value:"Module"}));var _f=Object.defineProperty,Cf=Object.getOwnPropertyDescriptor,Nn=(e,t,n,r)=>{for(var i=r>1?void 0:r?Cf(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&_f(t,n,i),i};function xi(e,t={}){return(it.instance??Sf()).open(e,t)}function Sf(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function Ef(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let it=class extends ve{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((n,r)=>n?r:-1).filter(n=>n>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),it.instance=this}disconnectedCallback(){super.disconnectedCallback(),it.instance===this&&(it.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pt(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(n=>!n.hidden),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return $`
      <dialog @cancel=${this.onCancel} @keydown=${ft}>
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
            ${this.message?$`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            <ul class="tables">
              ${this.items.map((t,n)=>$`
                  <li>
                    <input
                      type="checkbox"
                      id=${`tsel-${n}`}
                      .checked=${this.selected[n]??!1}
                      @change=${()=>this.toggle(n)}
                    />
                    <label for=${`tsel-${n}`}>
                      <span class="name">${t.name}</span>
                      ${t.hidden?$`<span class="tag-hidden">hidden</span>`:""}
                      <span class="size">${Ef(t.size)}</span>
                      ${t.detail?$`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};it.instance=null;it.styles=[ht,$e`
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
    `];Nn([U()],it.prototype,"items",2);Nn([U()],it.prototype,"selected",2);Nn([U()],it.prototype,"heading",2);Nn([U()],it.prototype,"message",2);Nn([U()],it.prototype,"confirmLabel",2);it=Nn([Ce("table-select-dialog")],it);function Oo(e,t){return e.every((n,r)=>n.field===t[r]?.field)?null:n=>{const r={};for(let i=0;i<e.length;i++)r[t[i].field]=n[e[i].field];return r}}function rl(e,t){if(t.length===0)return null;const n=new Set(t.map(i=>i.from)),r={};for(const i of Object.keys(e))n.has(i)||(r[i]=e[i]);for(const{from:i,to:s}of t)Object.prototype.hasOwnProperty.call(e,i)&&(r[s]=e[i]);return r}function ji(e,t,n=[]){const r=new Set(e.map(c=>c.field)),i=new Set(n),s=[...e],a=[];for(const c of t)r.has(c.field)||i.has(c.field)||(s.push(c),a.push(c.field),r.add(c.field));return{columns:s,newFields:a}}function Bc(e,t){const n=new Set([...e].map(i=>i.toLowerCase())),r=t.trim()||"imported";if(!n.has(r.toLowerCase()))return r;for(let i=2;;i++){const s=`${r}-${i}`;if(!n.has(s.toLowerCase()))return s}}async function Hc(e,t){return(await e.store.tables.find()).filter(n=>n.workspaceId===t).map(n=>n.name)}async function Tf(e,t,n,r){const{workspaceId:i,importerId:s,target:a,maxRows:c}=r;let u,f,g,b=!1,y=0,v,C=null;const _=M=>e.store.rows(M),O=async M=>{if(b)return!0;if(a.kind==="new"){let L=M.columns??[];if(r.editColumns){const V=await r.editColumns(L);if(V===null)return!1;C=Oo(L,V),L=V}u=Ee(),f=Bc(await Hc(e,i),t);const F={id:u,workspaceId:i,name:f,code:Ge(f),columns:L,view:"table",...r.origin?{origin:r.origin}:{},updatedAt:Date.now()};await e.store.tables.insert(F),g=!0}else{const L=await e.store.tables.findOne(a.tableId);if(!L)throw new Error("The table to import into no longer exists.");if(u=L.id,f=L.name,g=!1,a.kind==="overwrite"){const F=await _(u).find();await _(u).bulkRemove(F.map(V=>V.id))}if(M.columns?.length){const F=ji(L.columns,M.columns,L.deletedColumns??[]);F.newFields.length>0&&await e.store.tables.patch(u,{columns:F.columns,updatedAt:Date.now()})}}return e.events.emit("import:before",{source:s,tableId:u}),b=!0,!0};for await(const M of n){if(c!=null&&y>=c)break;if(!await O(M))return null;M.totalCount!=null&&(v=M.totalCount);let L=M.rows;if(c!=null&&y+L.length>c&&(L=L.slice(0,c-y)),L.length===0)continue;C&&(L=L.map(C));const F=Date.now(),V=L.map(W=>({id:Ee(),tableId:u,data:W,updatedAt:F}));await _(u).bulkInsert(V),y+=V.length,r.onProgress?.(y,v)}return!b&&!await O({})?null:(e.events.emit("import:after",{source:s,tableId:u,rowCount:y}),{tableId:u,tableName:f,rowCount:y,created:g})}function il(e,t,n={}){const r=t.mode==="reference"||t.maxRows!=null;return{api:e,fetchText:(i,s)=>Mi(e,i,s??"Reading…",r?{maxBytes:null}:{}),panel:t.panel??{},...t.cursor!==void 0?{cursor:t.cursor}:{},...t.maxRows!==void 0?{maxRows:t.maxRows}:{},...n}}async function If(e,t){if(t.length<=1)return t;const n=await xi(t.map(r=>({name:r.name,size:r.rowCount,...r.detail!==void 0?{detail:r.detail}:{},...r.hidden!==void 0?{hidden:r.hidden}:{}})),{title:`Import from ${e.label}`,message:`This source offers ${t.length} tables. Choose which to import.`,confirmLabel:"Import"});return n?n.map(r=>t[r]):null}async function Af(e,t,n,r,i){if(!t.reference)throw new Error(`${t.label} cannot be referenced — import a copy instead.`);const s=t.reference(n,r);let a=[];for await(const f of t.read(n,r)){a=f.columns??[];break}if(a.length===0)throw new Error("No columns found in the referenced data.");const c=Bc(await Hc(e,i),r.name),u=Ee();return await e.store.tables.insert({id:u,workspaceId:i,name:c,code:Ge(c),columns:a,view:"table",source:s,readonly:!0,updatedAt:Date.now()}),{tableId:u,tableName:c,rowCount:0,created:!0}}async function qc(e,t,n,r){const i=e.workspaceId();if(!i)throw new Error("No active workspace.");const s=il(e,r),a=await t.list(s,n);if(a.length===0)throw new Error("No tables found at that source.");const c=await If(t,a);if(c===null)return{landed:[],failed:[],cancelled:!0};const u=[],f=[];for(const g of c)try{if(r.mode==="reference"){u.push(await Af(e,t,s,g,i));continue}const b=r.target;let y;b.kind!=="new"&&(y=(await e.store.tables.findOne(b.tableId))?.columns);const v=il(e,r,{...y?{targetColumns:y}:{}}),C=t.read(v,g),_=r.origin??(n.kind==="url"&&n.url?{type:t.id,url:n.url}:void 0),O=await Tf(e,g.name,C,{workspaceId:i,importerId:t.id,target:b,..._?{origin:_}:{},...r.editColumns?{editColumns:r.editColumns}:{},...r.maxRows!==void 0?{maxRows:r.maxRows}:{}});if(O===null)return{landed:u,failed:f,cancelled:!0};u.push(O)}catch(b){f.push({name:g.name,error:b?.message??String(b)})}return{landed:u,failed:f,cancelled:!1}}async function Kc(e,t,n){const r=new Map;if(n.length===0)return r;const i=(await e.find()).filter(c=>c.workspaceId===t),s=new Map(i.map(c=>[c.name,c])),a=new Map(i.map(c=>[c.id,c]));for(const c of n){if(!Rf(c))continue;const u=s.get(c.name)??a.get(c.id),f=u?.id??c.id;u&&r.set(c.id,u.id);const g=u?u.builtin:c.builtin,b={...c,id:f,workspaceId:t};g===void 0?delete b.builtin:b.builtin=g,await e.upsert(b),s.set(b.name,b),a.set(b.id,b)}return r}function Rf(e){if(typeof e!="object"||e===null)return!1;const t=e;return typeof t.id=="string"&&typeof t.name=="string"}const Of={id:"json-import",name:"JSON Import",type:"importer",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"/><path d="M16 3a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/json-import.ts"};function Df(e){e.ui.registerImporter(Vc),e.ui.registerDropHandler(async t=>{const r=Bf(t).filter(Hf);if(r.length===0)return!1;t.preventDefault();for(const i of r)await Lf(e,i);return!0})}function Do(e){return je(e)?no(e)||Array.isArray(e.tables)?!0:Wc(e):!1}function Pf(e){return e.kind==="file"&&e.file?Fs(e.file.name):e.kind==="url"&&e.url?Fs(Mn(e.url)):Fs(e.name??"imported")}const Vc={id:"json",label:"JSON (array of objects or a dump)",icon:"data_object",order:20,accept:[".json",".db.json","application/json"],samples:[{label:"Northwind — sample database (JSON dump)",url:"https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json"}],supports:{url:!0,file:!0,text:!0,reference:!0,multiTable:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??"";if(/\.db\.json$/i.test(t))return 1;if(/\.json$/i.test(t))return .95;if(e.file?.type==="application/json")return .9;const n=(e.text??"").trimStart();return n.startsWith("{")||n.startsWith("[")?.3:0},async list(e,t){let n;t.kind==="file"&&t.file?n=await t.file.text():t.kind==="url"&&t.url?n=await e.fetchText(t.url,`Reading ${Mn(t.url)}…`):n=t.text??"";const r=Pf(t);let i;try{i=JSON.parse(n)}catch(a){throw new Error(`Invalid JSON in ${r}: ${a.message}`)}const s=Ni(i,r);return s.map(a=>({name:a.name,rowCount:a.rows.length,handle:{table:a,input:t,single:s.length===1}}))},async*read(e,t){const{table:n}=t.handle;yield{columns:n.columns,rows:n.rows}},reference(e,t){const{input:n,single:r}=t.handle;if(n.kind!=="url"||!n.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");if(!r)throw new Error("That URL holds several tables, so a reference would be ambiguous. Import a copy instead.");return{type:"url",config:{url:n.url,format:"json"}}}};function Fs(e){return e.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported"}async function Lf(e,t){const n=await t.text();let r;try{r=JSON.parse(n)}catch(a){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${t.name}: ${a.message}`)});return}if(Do(r)){await Po(e,n,t.name);return}const i=await qc(e,Vc,{kind:"text",text:n,name:t.name},{mode:"copy",target:{kind:"new"}}),s=i.landed.reduce((a,c)=>a+c.rowCount,0);i.landed.length>0&&e.ui.dialogs.toast(`Imported ${t.name} (${s.toLocaleString()} rows).`,{kind:"success",title:"Import"})}async function Po(e,t,n,r={}){const i=e.workspaceId();if(!i)throw new Error("json-import: no active workspace");let s;try{s=JSON.parse(t)}catch(O){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${n}: ${O.message}`)});return}const a=n.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",c=Ni(s,a);if(c.length===0)return;let u=c;if(c.length>1){const O=await xi(c.map(M=>({name:M.name,size:M.rows.length})),{title:"Import tables",message:`"${n}" contains ${c.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!O)return;u=O.map(M=>c[M])}const f=(await e.store.tables.find()).filter(O=>O.workspaceId===i),g=new Set(u.map(O=>O.name)),b=f.filter(O=>g.has(O.name));let y;if(b.length===0&&u.length===1)y="append-new";else{const O=b.length>0?[`Overwrite matching (${b.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],M=await e.ui.dialogs.choice(`Importing ${u.length} table${u.length===1?"":"s"} from "${n}".${b.length>0?`

${b.length} table${b.length===1?"":"s"} share a name with existing data.`:""}`,O,"JSON import");if(!M)return;M.startsWith("Overwrite matching")?y="overwrite-matching":M==="Replace entire workspace"?y="replace-workspace":y="append-new"}const v=2e3,C=u.reduce((O,M)=>O+(M.source?0:Math.min(M.rows.length,r.maxRows??1/0)),0);let _=null;if(C>=v){const{TopProgress:O}=await ct(async()=>{const{TopProgress:M}=await import("./top-progress-DIXM0wQC.js");return{TopProgress:M}},[]);_=O.begin(`Importing ${n}…`)}try{if(y==="replace-workspace")for(const F of f){const V=e.store.rows(F.id),W=await V.find();await V.bulkRemove(W.map(G=>G.id)),await e.store.tables.remove(F.id)}const O=new Map(f.map(F=>[F.name,F])),M=new Map;let L=0;for(const F of u){const V=F.source,W=F.origin??(!V&&r.originUrl?{type:"json",url:r.originUrl}:void 0);let G;const H=y==="overwrite-matching"?O.get(F.name):void 0;let Y=F.columns,ie=F.rows;if(r.editColumns&&!H&&!V){const q=await r.editColumns(Y,F.name);if(q===null)continue;ie=Ff(ie,Y,q),Y=q}if(H){if(G=H.id,!H.source){const q=e.store.rows(G),K=await q.find();await q.bulkRemove(K.map(ce=>ce.id))}await e.store.tables.patch(G,{columns:Y,...F.title?{title:F.title}:{},...F.windowGeometry?{windowGeometry:F.windowGeometry}:{},...F.sortColumn?{sortColumn:F.sortColumn,sortAsc:F.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},...F.filters?{filters:F.filters}:{},...F.labelColumn?{labelColumn:F.labelColumn}:{},...F.info?{info:F.info}:{},...F.deletedColumns?{deletedColumns:F.deletedColumns}:{},...F.readonly?{readonly:!0}:{},source:V??void 0,origin:W??void 0,updatedAt:Date.now()})}else G=Ee(),e.events.emit("import:before",{source:"json",tableId:G}),await e.store.tables.insert({id:G,workspaceId:i,name:F.name,code:Ge(F.name),columns:Y,view:"table",...F.title?{title:F.title}:{},...F.windowGeometry?{windowGeometry:F.windowGeometry}:{},...F.sortColumn?{sortColumn:F.sortColumn,sortAsc:F.sortAsc??!0}:{},...F.filters?{filters:F.filters}:{},...F.labelColumn?{labelColumn:F.labelColumn}:{},...F.info?{info:F.info}:{},...F.deletedColumns?{deletedColumns:F.deletedColumns}:{},...F.readonly?{readonly:!0}:{},...V?{source:V}:{},...W?{origin:W}:{},updatedAt:Date.now()});M.set(F.name,G);let se=0;if(!V){const q=e.store.rows(G),ce=(r.maxRows!=null?ie.slice(0,r.maxRows):ie).map(pe=>({id:Ee(),tableId:G,data:pe,updatedAt:Date.now()}));await q.bulkInsert(ce),se=ce.length,L+=se,_?.fraction(C>0?L/C:1)}e.events.emit("import:after",{source:"json",tableId:G,rowCount:se})}await Mf(e,s,i,M,y==="replace-workspace")}finally{_?.done()}document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function Mf(e,t,n,r,i){if(!je(t))return;const s=t,a=Array.isArray(s.viewTemplates)?s.viewTemplates:[],c=Array.isArray(s.viewInstances)?s.viewInstances:[];if(a.length===0&&c.length===0)return;if(i){const f=(await e.store.viewInstances.find()).filter(g=>g.workspaceId===n);await e.store.viewInstances.bulkRemove(f.map(g=>g.id))}const u=await Kc(e.store.viewTemplates,n,a);for(const f of c){if(!je(f)||typeof f.id!="string")continue;const g=(f.tableName?r.get(f.tableName):void 0)??f.tableId;if(!g)continue;const b=u.get(f.templateId)??f.templateId;await e.store.viewInstances.upsert({...f,workspaceId:n,tableId:g,templateId:b})}}function Ni(e,t){if(je(e)&&no(e))return sl(e);if(je(e)&&Array.isArray(e.tables)){const n=e,r=[];for(const i of n.tables){if(Gc(i)){r.push(ol(i));continue}je(i)&&no(i)&&r.push(...sl(i))}return r}if(Wc(e))return[ol(e)];if(Array.isArray(e)){const n=e.filter(je);return n.length===0?[]:[{name:t,...al(n)}]}return je(e)?[{name:t,...al([e])}]:[]}function no(e){for(const[t,n]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!je(n))continue;const r=n;if(Array.isArray(r.dataArray)&&Array.isArray(r.columns))return!0}return!1}function sl(e){const t=[];for(const[n,r]of Object.entries(e)){if(!/\.table\.json$/.test(n)||!je(r))continue;const i=r;if(!Array.isArray(i.dataArray)||!Array.isArray(i.columns))continue;const s=n.replace(/\.table\.json$/,""),a=i.columns.map(g=>jf(g)),c=a.map(g=>g.field),u=i.dataArray.filter(g=>Array.isArray(g)).map(g=>{const b={};for(let y=0;y<c.length;y++)b[c[y]]=g[y];return b}),f={name:s,columns:a,rows:u};if(i.elementRect&&typeof i.elementRect.x=="number"&&typeof i.elementRect.y=="number"){const g=i.elementRect;f.windowGeometry={x:g.x,y:g.y,w:g.width??600,h:g.height??400,z:g.zIndex??100,minimized:!!g.minimized,maximized:!!g.maximized}}typeof i.sortColumn=="number"&&i.sortColumn>=0&&i.sortColumn<c.length&&(f.sortColumn=c[i.sortColumn],f.sortAsc=(i.sortDirection??"asc")!=="desc"),t.push(f)}return t}function jf(e){const t=String(e.field??"col"),n=String(e.name??t),r=typeof e.type=="string"?e.type:"string",i={field:t,label:n,type:r};return e.isUnique&&(i.unique=!0),e.isNotNull&&(i.notnull=!0),i}function Gc(e){return je(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function Wc(e){return Gc(e)&&Array.isArray(e.rows)}function ol(e){const t=e,n=je(t.windowGeometry)?t.windowGeometry:void 0,r=typeof t.sortColumn=="string"?t.sortColumn:void 0,i=typeof t.sortAsc=="boolean"?t.sortAsc:void 0,s=typeof t.title=="string"?t.title:void 0,a=je(t.filters)?t.filters:void 0,c=typeof t.labelColumn=="string"?t.labelColumn:void 0,u=je(t.info)?t.info:void 0,f=Array.isArray(t.deletedColumns)?t.deletedColumns.filter(v=>typeof v=="string"):void 0,g=t.readonly===!0?!0:void 0,b=je(t.source)&&typeof t.source.type=="string"?t.source:void 0,y=je(t.origin)&&typeof t.origin.type=="string"&&typeof t.origin.url=="string"?t.origin:void 0;return{name:String(e.name),columns:e.columns.map(Nf),rows:Array.isArray(e.rows)?e.rows.filter(je):[],...s?{title:s}:{},...n?{windowGeometry:n}:{},...r?{sortColumn:r,sortAsc:i??!0}:{},...a?{filters:a}:{},...c?{labelColumn:c}:{},...u?{info:u}:{},...f?{deletedColumns:f}:{},...g?{readonly:g}:{},...b?{source:b}:{},...y?{origin:y}:{}}}function Nf(e){if(!je(e))return{field:"col",label:"Col",type:"string"};const t=e,n=String(t.field??"col");let r=typeof t.type=="string"?t.type:"string",i=typeof t.renderer=="string"?t.renderer:void 0;(r==="color"||r==="image")&&(i=i??r,r="string");const s={field:n,label:String(t.label??n),type:r};return i&&(s.renderer=i),typeof t.script=="string"&&(s.script=t.script),t.readonly===!0&&(s.readonly=!0),s}function al(e){const t=new Set;for(const i of e)for(const s of Object.keys(i))t.add(s);return{columns:Array.from(t).map(i=>({field:i,label:i,type:zf(e.map(s=>s[i]))})),rows:e}}function zf(e){const t=e.filter(n=>n!=null&&n!=="");return t.length===0?"string":t.every(n=>typeof n=="boolean")?"boolean":t.every(n=>typeof n=="number"&&Number.isFinite(n))?"number":t.every(n=>typeof n=="string"&&Uf(n))?"date":"string"}function Uf(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}([T ]\d{1,2}:\d{2}(:\d{2})?)?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}([T ]\d{1,2}:\d{2})?$/.test(t))}function Ff(e,t,n){const r=Oo(t,n);return r?e.map(r):e}function je(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Bf(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const n=[];for(const r of Array.from(t.items))if(r.kind==="file"){const i=r.getAsFile();i&&n.push(i)}return n}return[]}function Hf(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}const qf=Object.freeze(Object.defineProperty({__proto__:null,init:Df,isWorkspaceDump:Do,meta:Of,parsedToTables:Ni,restoreWorkspaceDump:Po},Symbol.toStringTag,{value:"Module"}));var Kf=Object.defineProperty,Vf=Object.getOwnPropertyDescriptor,Lo=(e,t,n,r)=>{for(var i=r>1?void 0:r?Vf(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Kf(t,n,i),i};let ii=null;function Gf(){return ii||(ii=document.createElement("anchored-menu"),document.body.appendChild(ii)),ii}let gn=class extends ve{constructor(){super(...arguments),this.items=[],this.shown=!1,this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.finish(null)},this.onKey=e=>{e.key==="Escape"&&(e.preventDefault(),this.finish(null))}}static open(e,t){return Gf().openMenu(e,t)}connectedCallback(){super.connectedCallback(),this.setAttribute("hidden","")}openMenu(e,t){return this.items=t,this.style.left=`${Math.round(e.left)}px`,this.style.top=`${Math.round(e.bottom+4)}px`,this.removeAttribute("hidden"),this.shown=!0,this.updateComplete.then(()=>{const n=this.shadowRoot?.querySelector(".menu");if(!n)return;const r=n.getBoundingClientRect();r.bottom>window.innerHeight&&(this.style.top=`${Math.round(e.top-r.height-4)}px`)}),new Promise(n=>{this.resolveFn=n,setTimeout(()=>{document.addEventListener("mousedown",this.onOutside,!0),document.addEventListener("keydown",this.onKey,!0)},0)})}finish(e){this.setAttribute("hidden",""),this.shown=!1,document.removeEventListener("mousedown",this.onOutside,!0),document.removeEventListener("keydown",this.onKey,!0);const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}render(){return this.shown?$`
      <div class="menu" role="menu">
        ${this.items.map(e=>$`
            <button
              role="menuitem"
              class=${e.danger?"danger":""}
              @click=${()=>this.finish(e.id)}
            >
              ${e.icon?$`<span class="mi">${e.icon}</span>`:""}
              <span>${e.label}</span>
            </button>
          `)}
      </div>
    `:$``}};gn.styles=[mt,$e`
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
    `];Lo([U()],gn.prototype,"items",2);Lo([U()],gn.prototype,"shown",2);gn=Lo([Ce("anchored-menu")],gn);const wr=Object.freeze(Object.defineProperty({__proto__:null,get AnchoredMenu(){return gn}},Symbol.toStringTag,{value:"Module"})),ro='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Wf={id:"connect-menu",name:"Connect",type:"ui",version:"0.1.0",description:"Header Connect button listing every registered live-backend connector. Chrome only — it knows no backend.",author:"Marc Cawood",icon:ro,repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/connect-menu.ts"};function Yf(e){e.ui.registerHeaderButton({id:"connect-menu:open",label:"Connect",icon:ro,tooltip:"Connect a live table on a remote backend (rows are never stored locally)",onClick:(t,n)=>ll(t,n?.anchor)}),e.ui.registerCommand({id:"connect-menu:open",title:"Connect a live table…",group:"Data",icon:ro,keywords:["datasette","live","remote","backend"],run:t=>ll(t)})}async function Xf(){const{registries:e}=await ae();return[...e.connectors].sort((t,n)=>(t.order??Number.MAX_SAFE_INTEGER)-(n.order??Number.MAX_SAFE_INTEGER))}async function ll(e,t){const n=await Xf();if(n.length===0){await e.ui.dialogs.alert("No backends are installed to connect to. Install a connector plugin from the Plugin Manager first.","Connect");return}let r=n[0];if(n.length>1){const i=t?.getBoundingClientRect(),s=i?await gn.open(i,n.map(a=>({id:a.id,label:a.label,icon:a.icon}))):await e.ui.dialogs.choice("Which backend do you want to connect to?",n.map(a=>a.label),"Connect");if(!s)return;r=i?n.find(a=>a.id===s):n.find(a=>a.label===s)}if(r)try{await r.connect(e)}catch(i){await e.ui.dialogs.alert(i?.message??String(i),`Connect ${r.label} failed`)}}const Jf=Object.freeze(Object.defineProperty({__proto__:null,init:Yf,meta:Wf},Symbol.toStringTag,{value:"Module"}));function cl(e,t){return JSON.stringify(t.map(n=>e[n]))}function Qf(e,t){return t.every(n=>e[n]!==null&&e[n]!==void 0)}function Yc(e){const{oldRows:t,freshRows:n,pks:r,userAddedFields:i,deletedRemoteFields:s=[]}=e,a=new Set(s),c=b=>{const y={...b};for(const v of a)delete y[v];return y};if(!(r.length>0&&n.every(b=>Qf(b,r))))return{data:n.map(c),merged:!1};const f=new Map;for(const b of t){const y=cl(b.data,r);f.has(y)||f.set(y,b)}return{data:n.map(b=>{const y=c(b),v=cl(b,r),C=f.get(v);if(C)for(const _ of i)Object.prototype.hasOwnProperty.call(C.data,_)&&(y[_]=C.data[_]);return y}),merged:!0}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xc=Symbol.for(""),Zf=e=>{if(e?.r===Xc)return e?._$litStatic$},ul=e=>({_$litStatic$:e,r:Xc}),dl=new Map,ep=e=>(t,...n)=>{const r=n.length;let i,s;const a=[],c=[];let u,f=0,g=!1;for(;f<r;){for(u=t[f];f<r&&(s=n[f],(i=Zf(s))!==void 0);)u+=i+t[++f],g=!0;f!==r&&c.push(s),a.push(u),f++}if(f===r&&a.push(t[r]),g){const b=a.join("$$lit$$");(t=dl.get(b))===void 0&&(a.raw=a,dl.set(b,t=a)),n=c}return e(t,...n)},hl=ep($);function fl(e){return e==null||String(e).trim()===""}function Cr(e){const t=[];let n="",r=!1,i=!1,s=!1,a=!1,c=!1,u=!1,f=!0;const g=()=>{const b=s?n:n.trim();if(r||a){const y={term:b,negate:a};c&&(y.prefix=!0),u&&(y.exact=!0),t.push(y)}n="",r=!1,i=!1,s=!1,a=!1,c=!1,u=!1,f=!0};for(let b=0;b<e.length;b++){const y=e[b];if(y==='"'){if(i&&e[b+1]==='"'){n+='"',r=!0,b++;continue}i=!i,s=!0,r=!0,f=!1;continue}if(y===","&&!i){g();continue}if(y==="!"&&!i&&f&&!a&&!c&&!u){a=!0;continue}if(y==="="&&!i&&f&&!c&&!u){u=!0;continue}if(y==="^"&&!i&&f&&!c&&!u){c=!0;continue}f&&!i&&/\s/.test(y)||(f=!1),n+=y,/\s/.test(y)||(r=!0)}return g(),t}function tp(e){return e.includes(",")||e.includes('"')||e!==e.trim()||e===""||e.startsWith("!")||e.startsWith("^")||e.startsWith("=")}function yr(e){return e.map(t=>{const n=t.term===""&&t.negate?"":tp(t.term)?`"${t.term.replace(/"/g,'""')}"`:t.term,r=t.exact?"=":t.prefix?"^":"";return(t.negate?"!":"")+r+n}).join(",")}function pl(e,t){const n=t.term;if(n.trim()===""||!t.prefix&&!t.exact&&n.toUpperCase()==="NULL")return fl(e);const r=String(e??"").toLowerCase(),i=n.toLowerCase();return t.exact?r===i:t.prefix?r.startsWith(i):r.includes(i)}function $i(e,t){const n=Cr(t);if(n.length===0)return!0;for(const i of n)if(i.negate&&pl(e,i))return!1;const r=n.filter(i=>!i.negate);return r.length===0?!0:r.some(i=>pl(e,i))}var np=Object.defineProperty,rp=Object.getOwnPropertyDescriptor,zn=(e,t,n,r)=>{for(var i=r>1?void 0:r?rp(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&np(t,n,i),i};function Bs(e){return yr([{...e,negate:!1}])}let st=class extends ve{constructor(){super(...arguments),this.values=[],this.blanks=0,this.current="",this.search="",this.states=new Map,this.resolveFn=null,this.onChange=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,n,r=0,i){return this.values=t,this.blanks=r,this.onChange=i??null,this.states=new Map(Cr(n??"").map(s=>[Bs(s),{state:s.negate?"not":"on",token:s}])),this.current=n??"",this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(s=>{this.resolveFn=s,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}cycle(e){const t={term:e,negate:!1},n=Bs(t),r=new Map(this.states),i=r.get(n);i===void 0?r.set(n,{state:"on",token:t}):i.state==="on"?r.set(n,{state:"not",token:i.token}):r.delete(n),this.states=r;const s=[...r.values()].map(a=>({...a.token,negate:a.state==="not"}));this.current=yr(s),this.onChange?.(this.current)}close(e){this.onChange=null,document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),st.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),st.instance===this&&(st.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(a=>a.value.toLowerCase().includes(e)),n=this.blanks>0&&"(blanks)".includes(e),r=a=>this.states.get(Bs({term:a,negate:!1}))?.state,i=a=>$`
      <span class=${`cb${a?` ${a}`:""}`}
        >${a==="on"?"✓":a==="not"?"✕":""}</span
      >
    `,s=a=>a==="on"?"Included — click to exclude":a==="not"?"Excluded — click to clear":"Click to include → exclude → off";return $`
      <header>
        <span class="mi sm">search</span>
        <input
          type="text"
          autofocus
          placeholder="Filter values…"
          .value=${this.search}
          @input=${a=>this.search=a.target.value}
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
      ${t.length===0&&!n?$`<div class="empty">No matching values.</div>`:$`<ul>
            ${n?$`
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
            ${t.slice(0,500).map(a=>{const c=r(a.value);return $`
                <li title=${s(c)} @click=${()=>this.cycle(a.value)}>
                  <span class="left">
                    ${i(c)}
                    <span class="label">${a.value}</span>
                  </span>
                  <span class="count">${a.count}</span>
                </li>
              `})}
          </ul>`}
      ${this.values.length>500?$`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      <div class="actions">
        <button
          class="text"
          @click=${()=>{this.states=new Map,this.close({clear:!0})}}
        >
          Clear filter
        </button>
        <span style="color:#6b7280">${t.length} value${t.length===1?"":"s"}</span>
      </div>
    `}};st.instance=null;st.styles=[mt,$e`
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
    `];zn([dt({type:Array})],st.prototype,"values",2);zn([dt({type:Number})],st.prototype,"blanks",2);zn([dt({type:String})],st.prototype,"current",2);zn([U()],st.prototype,"search",2);zn([U()],st.prototype,"states",2);st=zn([Ce("filter-popover")],st);var ip=Object.defineProperty,sp=Object.getOwnPropertyDescriptor,Ct=(e,t,n,r)=>{for(var i=r>1?void 0:r?sp(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&ip(t,n,i),i};let ut=class extends ve{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const n=t[this.highlightIdx];n!==void 0?(e.preventDefault(),this.onPick(n)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const n=[];for(const r of this.options)if(r.toLowerCase().includes(t)&&(n.push(r),n.length>=500))break;return n}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=this.open&&e.length>0,n=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return $`
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
        ${this.value?$`<button
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
      ${t?$`<ul
            class="dropdown"
            style=${n}
            @mousedown=${r=>r.preventDefault()}
          >
            ${e.map((r,i)=>$`
                <li
                  class=${i===this.highlightIdx?"highlighted":""}
                  @mousedown=${s=>s.preventDefault()}
                  @click=${()=>this.onPick(r)}
                >
                  ${r}
                </li>
              `)}
          </ul>`:re}
    `}};ut.styles=$e`
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
  `;Ct([dt({type:String})],ut.prototype,"value",2);Ct([dt({type:Array})],ut.prototype,"options",2);Ct([dt({type:String})],ut.prototype,"placeholder",2);Ct([U()],ut.prototype,"open",2);Ct([U()],ut.prototype,"highlightIdx",2);Ct([U()],ut.prototype,"dropTop",2);Ct([U()],ut.prototype,"dropLeft",2);Ct([U()],ut.prototype,"dropMinWidth",2);Ct([U()],ut.prototype,"editing",2);Ct([Dt("input")],ut.prototype,"inputEl",2);ut=Ct([Ce("filter-combobox")],ut);function op(e){const t=e.trim(),n=t.split(/\s+/).filter(Boolean);if(!n.some(c=>c==="AND"||c==="OR"))return{kind:"plain",phrase:t.toLowerCase(),words:n.map(c=>c.toLowerCase())};const i=[];let s=[];for(const c of n)c==="OR"?(i.push(s),s=[]):c==="AND"||s.push(c.toLowerCase());i.push(s);const a=i.filter(c=>c.length>0);return a.length===0?{kind:"plain",phrase:t.toLowerCase(),words:[]}:{kind:"boolean",groups:a}}function ap(e,t,n){const r=op(t);if(r.kind==="boolean")return e.filter(u=>r.groups.some(f=>f.every(g=>n(u,g))));const{phrase:i,words:s}=r;if(s.length<=1)return i===""?e:e.filter(u=>n(u,i));const a=e.filter(u=>n(u,i));if(a.length>0)return a;const c=e.filter(u=>s.every(f=>n(u,f)));return c.length>0?c:e.filter(u=>s.some(f=>n(u,f)))}const lp=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function ki(e,t,n){const r=new Map;for(const c of n)r.set(c.field.toLowerCase(),c.field),c.label&&r.set(c.label.toLowerCase(),c.field);const i=[...r.keys()].filter(Boolean).sort((c,u)=>u.length-c.length);let s=t;return i.length>0&&(s=s.replace(new RegExp(`(^|\\s)(${i.map(lp).join("|")}):\\s+`,"gi"),"$1$2:")),ap(e,s,(c,u)=>{const f=u.indexOf(":");if(f>0){const g=r.get(u.slice(0,f));if(g)return $i(c.data[g],u.slice(f+1))}return Object.values(c.data).some(g=>g!=null&&String(g).toLowerCase().includes(u))})}const ml=new Map;function cp(e){const t=ml.get(e);if(t)return t;const n=new Function("row",`${e}
return render(row);`);return ml.set(e,n),n}function Mo(e,t){if(!e||!e.trim())return{ok:!1,label:"no script",message:""};let n;try{n=cp(e)}catch(r){return{ok:!1,label:"compile error",message:gl(r)}}try{return{ok:!0,value:n(t)}}catch(r){return{ok:!1,label:"runtime error",message:gl(r)}}}function gl(e){return e instanceof Error?e.message:String(e)}const _i="easydb:visible-count";function Jc(e,t,n){e&&document.dispatchEvent(new CustomEvent(_i,{detail:{key:e,count:t,total:n}}))}function Qc(e,t){return e<0||t<0?"":e===t?` (${t})`:` (${e}/${t})`}const Zc="#dc2626",eu="cell-invalid",up=`border-color:${Zc};background:#fef2f2`;function jo(e,t){e.classList.add(eu),e.style.border=`1px solid ${Zc}`,e.style.background="#fef2f2",t&&(e.title=t)}function dp(e,t){if(e==null||typeof e=="string"&&e.trim()==="")return"empty";switch(t){case"boolean":return tu(e)==="invalid"?"invalid":"ok";case"number":return Number.isFinite(typeof e=="number"?e:Number(e))?"ok":"invalid";case"date":case"datetime":return Number.isNaN(Date.parse(String(e)))?"invalid":"ok";default:return"ok"}}const hp=/^\s*(true|1)\s*$/i,fp=/^\s*(false|0)\s*$/i;function tu(e){return e===!0||e===1?"true":e===!1||e===0?"false":e==null?"empty":typeof e=="string"?e.trim()===""?"empty":hp.test(e)?"true":fp.test(e)?"false":"invalid":"invalid"}var pp=Object.defineProperty,mp=Object.getOwnPropertyDescriptor,De=(e,t,n,r)=>{for(var i=r>1?void 0:r?mp(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&pp(t,n,i),i};const gp=200,bp=10,Hs=32;let Ie=class extends ve{constructor(){super(...arguments),this.tableId="",this.viewInstanceId="",this.columns=[],this.rows=[],this.sortSpecs=[],this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.viewInst=null,this.tableColumns=[],this.tableReadonly=!1,this.renderedCount=0,this.lastEmittedCount=-1,this.lastEmittedTotal=-1,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;(t.tableId===this.tableId||this.viewMode&&t.tableId===this.viewInstanceId)&&(this.localQuery=t.query??"")},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}get viewMode(){return!!this.viewInstanceId}get readOnlyView(){return this.viewMode&&!!this.viewInst?.readonly}get readOnly(){return this.readOnlyView||this.tableReadonly}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),this.resizing=null}async updated(e){(e.has("tableId")||e.has("viewInstanceId"))&&this.tableId&&(this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.emitCount()}emitCount(){const e=this.viewMode?this.viewInstanceId:this.tableId;if(!e)return;const t=this.renderedCount,n=this.rows.length;t===this.lastEmittedCount&&n===this.lastEmittedTotal||(this.lastEmittedCount=t,this.lastEmittedTotal=n,Jc(e,t,n))}async bind(){if(!this.tableId)return;const e=await ae(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.viewMode?(this.tableColumns=t.columns,this.viewInst=await e.store.viewInstances.findOne(this.viewInstanceId)??null,this.applyView(),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(i=>{const s=i.find(a=>a.id===this.tableId);s&&(this.tableColumns=s.columns,this.applyView())}),this.viewSubUnsub?.(),this.viewSubUnsub=e.store.viewInstances.subscribe(i=>{const s=i.find(a=>a.id===this.viewInstanceId);s&&(this.viewInst=s,this.applyView())})):(this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(i=>{const s=i.find(a=>a.id===this.tableId);s&&this.applyTable(s)})),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const n=e.store.rows(this.tableId);this.unsubscribe=n.subscribe(i=>this.rows=i);const r=window.setTimeout(()=>this.loading=!0,gp);try{this.rows=await n.find()}catch(i){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${i?.message??String(i)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(r),this.loading=!1}}applyTable(e){this.resizing==null&&(this.columns=e.columns),this.tableReadonly=!!e.readonly,this.sortSpecs=yl(e),this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}applyView(){const e=this.viewInst;if(!e)return;const t=new Map(this.tableColumns.map(r=>[r.field,r])),n=e.columnWidths??{};this.columns=e.visibleColumns.map(r=>t.get(r)).filter(r=>!!r).map(r=>{const i=n[r.field];return typeof i=="number"?{...r,width:i}:r}),this.sortSpecs=yl(e),this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}async setCell(e,t,n){const r=await ae();await this.commitCell(r,e,t,n)}async commitCell(e,t,n,r){const i=this.columns.find(s=>s.field===n);if(i){const s=vp(i,r,this.rows,t.id);if(s){await e.api.ui.dialogs.alert(s,`Cannot save ${i.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[n]:r},updatedAt:Date.now()})}catch(s){await e.api.ui.dialogs.alert(s?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}cancelCellEdit(e,t){if(e.key!=="Escape")return;e.stopPropagation();const n=e.target;typeof t=="boolean"?n.checked=t:n.value=t,n.blur()}renderInvalidCell(e,t,n,r){const i=String(n);return $`<input
      type="text"
      class=${eu}
      style=${up}
      title=${r}
      .value=${i}
      @keydown=${s=>this.cancelCellEdit(s,i)}
      @change=${s=>this.setCell(e,t.field,s.target.value)}
    />`}renderReadonlyCell(e,t){return e.type==="boolean"?$`<input type="checkbox" .checked=${t===!0||t==="true"||t===1||t==="1"} disabled />`:t==null||t===""?$``:e.type==="date"?$`${si(t)}`:e.type==="datetime"?$`${oi(t).replace("T"," ")}`:$`${String(t)}`}renderScriptedCell(e,t){const n=Mo(t.script,e.data);if(!n.ok)return $`<span class="script-err" title=${n.message}>⚠ ${n.label}</span>`;const r=t.renderer?this.cellRenderers?.get(t.renderer):void 0;if(!r)return $`${n.value==null?"":String(n.value)}`;const i=ul(r);return hl`<${i}
      .value=${n.value??""}
      .rawValue=${e.data[t.field]??""}
      .column=${t}
      .row=${e.data}
      .readonly=${!0}
      @change=${this.readOnly?void 0:s=>this.setCell(e,t.field,s.detail.value)}
    ></${i}>`}renderCell(e,t){const n=e.data[t.field];if(t.script?.trim())return this.renderScriptedCell(e,t);const r=this.readOnly||t.readonly===!0,i=t.renderer,s=i?this.cellRenderers?.get(i):void 0;if(s){const a=ul(s);return hl`<${a}
        .value=${n??""}
        .column=${t}
        .row=${e.data}
        .readonly=${r}
        @change=${r?void 0:c=>this.setCell(e,t.field,c.detail.value)}
      ></${a}>`}if(r)return this.renderReadonlyCell(t,n);switch(t.type){case"date":return wl(n,si(n))?this.renderInvalidCell(e,t,n,`Not a valid date: "${String(n)}"`):$`<input
          type="date"
          .value=${si(n)}
          @keydown=${a=>this.cancelCellEdit(a,si(n))}
          @change=${a=>this.setCell(e,t.field,a.target.value||null)}
        />`;case"datetime":return wl(n,oi(n))?this.renderInvalidCell(e,t,n,`Not a valid datetime: "${String(n)}"`):$`<input
          type="datetime-local"
          .value=${oi(n)}
          @keydown=${a=>this.cancelCellEdit(a,oi(n))}
          @change=${a=>this.setCell(e,t.field,a.target.value||null)}
        />`;case"number":{const a=n==null||n==="";return!a&&Number.isNaN(Number(n))?this.renderInvalidCell(e,t,n,`Not a valid number: "${String(n)}"`):$`<input
          type="number"
          .value=${a?"":String(n)}
          @keydown=${c=>this.cancelCellEdit(c,a?"":String(n))}
          @change=${c=>{const u=c.target.value;this.setCell(e,t.field,u===""?null:Number(u))}}
        />`}default:return $`<input
          type="text"
          .value=${String(n??"")}
          @keydown=${a=>this.cancelCellEdit(a,String(n??""))}
          @change=${a=>this.setCell(e,t.field,a.target.value)}
        />`}}async deleteRow(e){const t=await ae();try{await t.store.rows(this.tableId).remove(e)}catch(n){await t.api.ui.dialogs.alert(n?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e,t=!1){const n=this.sortSpecs.find(s=>s.field===e),r=this.sortSpecs.length===1&&this.sortSpecs[0]?.field===e;if(!t&&!r){this.sortSpecs=[{field:e,asc:!0}],await this.persistSort(this.sortSpecs);return}const i=t?this.sortSpecs.filter(s=>s.field!==e):[];n?n.asc&&i.push({field:e,asc:!1}):i.push({field:e,asc:!0}),this.sortSpecs=i,await this.persistSort(i)}async persistSort(e){const t=e[0],n={sortBy:e.length>0?e:void 0,sortColumn:t?.field,sortAsc:t?t.asc:void 0,updatedAt:Date.now()},r=await ae();this.viewMode?await r.store.viewInstances.patch(this.viewInstanceId,n):await r.store.tables.patch(this.tableId,n)}filteredRows(){const e=new Set(this.columns.filter(a=>a.filterable===!1).map(a=>a.field)),t=Object.entries(this.filters).filter(([a,c])=>c&&c.trim().length>0&&!e.has(a)),n=this.globalQuery.trim(),r=this.localQuery.trim();if(t.length===0&&n.length===0&&r.length===0)return this.rows;let i=this.rows;t.length>0&&(i=i.filter(a=>t.every(([c,u])=>$i(a.data[c],u))));const s=this.columns.filter(a=>a.filterable!==!1);return r&&(i=ki(i,r,s)),n&&(i=ki(i,n,s)),i}sortedRows(){const e=this.filteredRows();if(this.sortSpecs.length===0)return e;const t=this.sortSpecs.map(r=>({field:r.field,factor:r.asc?1:-1,type:this.columns.find(i=>i.field===r.field)?.type??"string"})),n=[...e];return n.sort((r,i)=>{for(const s of t){const a=xp(r.data[s.field],i.data[s.field],s.type,s.factor);if(a!==0)return a}return 0}),n}async openFilterPicker(e,t){e.stopPropagation();const n=e.currentTarget,r=st.instance;if(!r)return;const i=new Map;let s=0;for(const u of this.rowsFacetedFor(t)){const f=u.data[t];if(f==null||String(f).trim()===""){s++;continue}const g=String(f);i.set(g,(i.get(g)??0)+1)}let a=[...i.entries()].map(([u,f])=>({value:u,count:f})).sort((u,f)=>f.count-u.count||u.value.localeCompare(f.value));this.columns.find(u=>u.field===t)?.type==="boolean"&&(a=[...["true","false"].map(f=>({value:f,count:i.get(f)??0})),...a.filter(f=>f.value!=="true"&&f.value!=="false")]);const c=await r.open(n.getBoundingClientRect(),a,this.filters[t]??"",s,u=>this.onFilterInput(t,u));c!==null&&(typeof c=="object"&&"clear"in c?this.onFilterInput(t,""):typeof c=="string"&&this.onFilterInput(t,c))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>{this.filterSaveTimer=null,this.saveFilters()},250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=new Set(this.columns.filter(r=>r.filterable===!1).map(r=>r.field)),n=Object.entries(this.filters).filter(([r,i])=>i&&i.trim().length>0&&r!==e&&!t.has(r));return n.length===0?this.rows:this.rows.filter(r=>n.every(([i,s])=>$i(r.data[i],s)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const n=50,r=500;for(const i of this.visibleColumns){let s=!0;for(const c of t){const u=c.data[i.field];if(u==null)continue;if((typeof u=="string"?u:String(u)).length>=n){s=!1;break}}if(!s)continue;const a=new Set;for(const c of this.rowsFacetedFor(i.field)){const u=c.data[i.field];if(u==null||u==="")continue;const f=typeof u=="string"?u:String(u);if(!(f.length>=n)&&(a.add(f),a.size>=r))break}e.set(i.field,[...a].sort())}return e}freezeColumnWidths(){const e=this.renderRoot.querySelector("thead tr");if(!e)return;const t=Array.from(e.querySelectorAll(":scope > th")),n=this.visibleColumns,r=new Map;n.forEach((i,s)=>{if(i.width!=null)return;const a=t[s];a&&r.set(i.field,Math.round(a.getBoundingClientRect().width))}),r.size!==0&&(this.columns=this.columns.map(i=>r.has(i.field)?{...i,width:r.get(i.field)}:i))}onResizeStart(e,t,n){e.preventDefault(),e.stopPropagation();const r=n.offsetWidth;this.freezeColumnWidths(),this.resizing={field:t,startX:e.clientX,startW:r};const i=a=>{if(!this.resizing)return;const c=a.clientX-this.resizing.startX,u=Math.max(bp,this.resizing.startW+c);this.columns=this.columns.map(f=>f.field===this.resizing.field?{...f,width:u}:f)},s=async()=>{window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",s);const a=this.resizing?.field;if(this.resizing=null,!a)return;const c=await ae();if(this.viewMode){const u={...this.viewInst?.columnWidths??{}};for(const f of this.columns)typeof f.width=="number"&&(u[f.field]=f.width);await c.store.viewInstances.patch(this.viewInstanceId,{columnWidths:u,updatedAt:Date.now()})}else await c.store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",i),window.addEventListener("pointerup",s),window.addEventListener("pointercancel",s)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,n){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const r=n.getBoundingClientRect(),i=e.clientX<r.left+r.width/2;this.dropTargetField=t,this.dropEdge=i?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const n=this.dragSourceField,r=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!n||n===t||!r)return;const i=[...this.columns],s=i.findIndex(f=>f.field===n);if(s<0)return;const[a]=i.splice(s,1);let c=i.findIndex(f=>f.field===t);if(c<0){i.splice(s,0,a);return}r==="after"&&(c+=1),i.splice(c,0,a);const u=await ae();this.viewMode?await u.store.viewInstances.patch(this.viewInstanceId,{visibleColumns:i.map(f=>f.field),updatedAt:Date.now()}):await u.store.tables.patch(this.tableId,{columns:i,updatedAt:Date.now()})}async saveFilters(){const e=await ae(),t={};for(const[r,i]of Object.entries(this.filters))i&&i.trim().length>0&&(t[r]=i);if(this.viewMode){await e.store.viewInstances.patch(this.viewInstanceId,{filters:t,updatedAt:Date.now()});return}const n=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:n,updatedAt:Date.now()})}tableSizingStyle(e){return e.length===0||!e.every(n=>typeof n.width=="number")?null:`table-layout: fixed; width: ${e.reduce((n,r)=>n+(r.width??0),0)+Hs}px; min-width: 0`}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,n=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,r=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),i=Math.min(e.length,r+n);return{slice:e.slice(r,i),topPad:r*t,bottomPad:(e.length-i)*t}}render(){const e=this.sortedRows();this.renderedCount=e.length;const t=this.visibleColumns,{slice:n,topPad:r,bottomPad:i}=this.virtualSlice(e),s=this.computeFilterSuggestions(),a=this.externalLoading?this.externalProgress:null;return $`
      ${this.loading||this.externalLoading?$`<div
            class="load-bar"
            role="progressbar"
            aria-label="Loading rows"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow=${a!=null?Math.round(a*100):re}
          >
            <div
              class="load-bar-fill ${a!=null?"determinate":""}"
              style=${a!=null?`width:${Math.max(2,Math.round(a*100))}%`:re}
            ></div>
          </div>`:re}
      <table style=${this.tableSizingStyle(t)??re}>
        <colgroup>
          ${t.map(c=>$`<col style=${c.width!=null?`width: ${c.width}px`:""} />`)}
          <col style="width:${Hs}px" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(c=>{const u=c.sortable!==!1,f=c.filterable!==!1,g=this.sortSpecs.findIndex(V=>V.field===c.field),b=g>=0?this.sortSpecs[g]:void 0,y=b?b.asc?"asc":"desc":null,v=u?y==="asc"?"▲":y==="desc"?"▼":"⇅":"",C=this.sortSpecs.length>1&&g>=0?String(g+1):"",_=`t-${c.type}`,O=this.dragSourceField===c.field,M=this.dropTargetField===c.field,L=M&&this.dropEdge==="before"?" drop-before":M&&this.dropEdge==="after"?" drop-after":"",F=(c.description?`${c.description}
`:"")+(c.units?`Units: ${c.units}
`:"")+`${c.field} — ${u?"click to sort, shift-click to add a sort level, ":"not sortable · "}drag to reorder`+(f?"":" · not filterable");return $`
                <th
                  class=${`${_}${y?" sorted":""}${O?" drag-source":""}${L}${u?"":" no-sort"}`}
                  title=${F}
                  @click=${V=>u&&this.toggleSort(c.field,V.shiftKey)}
                  @dragover=${V=>this.onColDragOver(V,c.field,V.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(c.field)}
                  @drop=${V=>this.onColDrop(V,c.field)}
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
                      @dragstart=${V=>this.onColDragStart(V,c.field)}
                      @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                      >drag_indicator</span
                    ><span class="col-label"
                      >${c.label}${c.units?$`<span class="col-units"> (${c.units})</span>`:""}</span
                    ><span class="sort-icon" aria-hidden="true"
                      >${v}${C?$`<span class="sort-rank">${C}</span>`:re}</span
                    >
                    ${f?$`<button
                          class=${`funnel${this.filters[c.field]?" active":""}`}
                          title="Filter by value"
                          aria-label=${`Filter ${c.label||c.field}`}
                          @click=${V=>this.openFilterPicker(V,c.field)}
                        >
                          <span class="mi sm" aria-hidden="true">filter_list</span>
                        </button>`:""}
                  </div>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${V=>V.stopPropagation()}
                    @pointerdown=${V=>this.onResizeStart(V,c.field,V.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:${Hs}px"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(c=>{if(c.filterable===!1)return $`<th></th>`;const u=s.get(c.field)??[];return $`
                <th>
                  <filter-combobox
                    .value=${this.filters[c.field]??""}
                    .options=${u}
                    placeholder="filter…"
                    title="Filter: text = contains, ^text = starts with, !text = does not contain, NULL = empty, !NULL = has a value. Comma-separate for several values (a,b = a OR b; !a,!b excludes both); quote a value containing a comma."
                    @filter-change=${f=>this.onFilterInput(c.field,f.detail.value)}
                  ></filter-combobox>
                </th>
              `})}
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${r>0?$`<tr class="spacer" style=${`height:${r}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${n.map(c=>$`
              <tr>
                ${t.map(u=>$`<td
                      class=${`t-${u.type}${u.renderer?` r-${u.renderer}`:""}${yp(c,u)}`}
                      title=${wp(c,u)}
                    >
                      ${this.renderCell(c,u)}
                    </td>`)}
                <td>
                  ${this.readOnly?re:$`<button
                        class="danger"
                        title="Delete row"
                        @click=${()=>this.deleteRow(c.id)}
                      >
                        <span class="mi sm">delete</span>
                      </button>`}
                </td>
              </tr>
            `)}
          ${i>0?$`<tr class="spacer" style=${`height:${i}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
        </tbody>
      </table>
    `}};Ie.styles=[mt,$e`
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
    `];De([dt({type:String})],Ie.prototype,"tableId",2);De([dt({type:String})],Ie.prototype,"viewInstanceId",2);De([U()],Ie.prototype,"columns",2);De([U()],Ie.prototype,"rows",2);De([U()],Ie.prototype,"sortSpecs",2);De([U()],Ie.prototype,"filters",2);De([U()],Ie.prototype,"globalQuery",2);De([U()],Ie.prototype,"localQuery",2);De([U()],Ie.prototype,"dragSourceField",2);De([U()],Ie.prototype,"dropTargetField",2);De([U()],Ie.prototype,"dropEdge",2);De([U()],Ie.prototype,"resizing",2);De([U()],Ie.prototype,"cellRenderers",2);De([U()],Ie.prototype,"scrollY",2);De([U()],Ie.prototype,"viewportHeight",2);De([U()],Ie.prototype,"loading",2);De([U()],Ie.prototype,"externalLoading",2);De([U()],Ie.prototype,"externalProgress",2);De([U()],Ie.prototype,"tableReadonly",2);Ie=De([Ce("data-table")],Ie);const bl=500;function wp(e,t){if(t.script)return"";const n=e.data[t.field];if(n==null)return"";const r=typeof n=="string"?n:String(n);return r.trim()===""?"":r.length>bl?`${r.slice(0,bl)}…`:r}function yp(e,t){if(t.script)return"";const n=dp(e.data[t.field],t.type);return n==="empty"?" is-null":n==="invalid"?" is-invalid":""}function vp(e,t,n,r){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&n.find(s=>s.id!==r&&s.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function si(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const n=new Date(t);return Number.isNaN(n.getTime())?"":n.toISOString().slice(0,10)}function oi(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const n=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(n)return`${n[1]}T${n[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const r=new Date(t);if(Number.isNaN(r.getTime()))return"";const i=r.toISOString();return`${i.slice(0,10)}T${i.slice(11,16)}`}function wl(e,t){return e==null||typeof e=="string"&&e.trim()===""?!1:t===""}function xp(e,t,n,r){const i=c=>c==null?0:c===""?1:2,s=i(e),a=i(t);return s!==2||a!==2?(s-a)*r:$p(e,t,n)*r}function yl(e){return e.sortBy?.length?e.sortBy.map(t=>({field:t.field,asc:t.asc!==!1})):e.sortColumn?[{field:e.sortColumn,asc:e.sortAsc!==!1}]:[]}function $p(e,t,n){switch(n){case"number":{const r=Number(e),i=Number(t);return Number.isNaN(r)||Number.isNaN(i)?String(e).localeCompare(String(t)):r-i}case"boolean":return(e?1:0)-(t?1:0);case"date":{const r=new Date(String(e)).getTime(),i=new Date(String(t)).getTime();return Number.isNaN(r)||Number.isNaN(i)?String(e).localeCompare(String(t)):r-i}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function At(e,t,n){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:n}}))}const kp=new Set(["rowid"]);function No(e){return kp.has(e.trim().toLowerCase())}class ot extends Error{constructor(t,n){const r=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(r),this.name="DatasetteError",this.status=n??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function Ot(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const n=t.pathname.split("/").filter(Boolean),r={};for(const[c,u]of t.searchParams)r[c]=u;let i,s=null,a=null;if(n.length>=2){a=decodeURIComponent(n[n.length-1]),s=decodeURIComponent(n[n.length-2]);const c=n.slice(0,n.length-2).join("/");i=t.origin+(c?"/"+c:"")}else n.length===1&&(s=decodeURIComponent(n[0])),i=t.origin;return{base:i,db:s,table:a,query:r}}function On(e,t={}){const n=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[r,i]of Object.entries({...e.query,...t}))i!=null&&n.searchParams.set(r,String(i));return n.toString()}function _p(e,t){const n={};for(const[r,i]of Object.entries(e.query))r.startsWith("_")||(n[r]=i);return On({...e,query:n},{_next:t})}function vl(e,t){try{const n=new URL(t),r=new URL(e,n);return r.hostname.toLowerCase()!==n.hostname.toLowerCase()?null:(r.protocol=n.protocol,r.port=n.port,r.toString())}catch{return null}}function Cp(e){const t=e?.next_url??null,n=e?.next,r=n!=null&&n!==!1?String(n):null,i=Array.isArray(e?.rows)?e.rows:[],s=Array.isArray(e?.columns)?e.columns:null;return{rows:i.map(c=>Array.isArray(c)&&s?Object.fromEntries(s.map((u,f)=>[u,c[f]])):c),nextUrl:t,nextToken:r,hasMore:t!=null||r!=null,truncated:e?.truncated===!0}}function Sp(e,t=""){const n=String(e||"").toUpperCase();return n.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":n.includes("REAL")||n.includes("FLOA")||n.includes("DOUB")||n.includes("NUM")||n.includes("DEC")?"number":n.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function xl(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],n=Array.isArray(e?.columns)?e.columns.slice():[],r={},i=e?.column_details;if(Array.isArray(i))for(const c of i)r[c.column??c.name]=c;else i&&typeof i=="object"&&Object.assign(r,i);for(const c of n)c in r||(r[c]={});const a=(n.length?n:Object.keys(r)).map(c=>{const u=r[c]||{},f=u.is_pk===!0||u.is_pk===1||t.includes(c),g={field:c,label:nu(c),type:Sp(u.sqlite_type??u.type,c)};return(u.notnull===!0||u.notnull===1||f)&&(g.notnull=!0),f&&(g.unique=!0),(u.hidden===!0||u.hidden===1||No(c))&&(g.hidden=!0),u.default!=null&&u.default!==""&&(g.default=u.default),g});if(t.length===0){const c=a.filter(u=>u.unique).map(u=>u.field);c.length&&t.push(...c)}return{columns:a,pks:t}}function nu(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function zi(e){const t=[],n=new Set;for(const r of e)for(const i of Object.keys(r))n.has(i)||(n.add(i),t.push(i));return t.map(r=>{const i={field:r,label:nu(r),type:Ep(e.map(s=>s[r]))};return No(r)&&(i.hidden=!0),i})}function Ep(e){const t=e.filter(n=>n!=null&&n!=="");return t.length===0?"string":t.every(n=>typeof n=="boolean")?"boolean":t.every(n=>typeof n=="number"&&Number.isFinite(n))?"number":t.every(n=>typeof n=="string"&&Tp(n))?"datetime":"string"}function Tp(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function Ip(e){const t=new TextEncoder().encode(String(e));let n="";for(const r of t){const i=String.fromCharCode(r);/[A-Za-z0-9_-]/.test(i)?n+=i:n+="~"+r.toString(16).toUpperCase().padStart(2,"0")}return n}function Ap(e,t){return!t||t.length===0?null:t.map(n=>Ip(e[n])).join(",")}function Rp(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],n=[];for(const r of t){if(typeof r=="string"){n.push(r);continue}if(r&&typeof r=="object"&&typeof r.name=="string"){if(r.name==="_memory")continue;n.push(typeof r.route=="string"&&r.route?r.route:r.name)}}return n}function Op(e,t){const n=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],r=[];for(const i of n){if(typeof i=="string"){r.push({db:t,table:i,count:null,hidden:!1,pks:[]});continue}i&&typeof i=="object"&&typeof i.name=="string"&&r.push({db:t,table:i.name,count:typeof i.count=="number"?i.count:null,hidden:i.hidden===!0,pks:Array.isArray(i.primary_keys)?i.primary_keys:[]})}return r}async function Yt(e,t){let n;try{n=await e(t)}catch(i){const s=i?.message||"network error";throw new ot({error:`Couldn't reach ${t} (${s}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(n&&n.ok===!1){let i=null;try{i=await n.json()}catch{}throw new ot(i&&typeof i=="object"?i:{error:`HTTP ${n.status} for ${t}`},n.status)}const r=await n.json();if(r&&r.ok===!1)throw new ot(r,n.status);return r}async function ru(e,t){return Rp(await Yt(e,`${t}/-/databases.json`))}async function $l(e,t,n){return Op(await Yt(e,`${t}/${encodeURIComponent(n)}.json`),n)}async function Ui(e,t){const n=On(t,{_extra:"column_details"}),r=await Yt(e,n);let{columns:i,pks:s}=xl(r),a=!!r&&r.column_details!=null,c=r?.count??null,u=r?.count_truncated===!0,f=r;if(i.length===0){const g=On(t,{_extra:"columns"}),b=await Yt(e,g);({columns:i,pks:s}=xl(b)),a=!!b&&b.column_details!=null,c=b?.count??c,u=b?.count_truncated===!0||u,f=b}return{columns:i,pks:s,count:c,countTruncated:u,typed:a,raw:f}}async function io(e,t){if(!t.db||!t.table)throw new Error("probeSingleTable: URL must name a database and a table");const n=await Ui(e,t);return{db:t.db,table:t.table,count:n.count,hidden:!1,pks:n.pks}}function Dp(e,t,n){const r=e&&typeof e=="object"?e:{},i=t&&n&&r.databases?.[t]?.tables?.[n]||t&&n&&r.databases?.[t]?.tables?.[n.toLowerCase()]||{},s=t&&r.databases?.[t]||{},a=C=>i[C]??s[C]??r[C],c={columns:{},units:{}};typeof i.sort=="string"&&(c.sort=i.sort),typeof i.sort_desc=="string"&&(c.sortDesc=i.sort_desc),typeof i.size=="number"&&(c.size=i.size),Array.isArray(i.sortable_columns)&&(c.sortableColumns=i.sortable_columns.slice()),typeof i.label_column=="string"&&(c.labelColumn=i.label_column),i.hidden===!0&&(c.hidden=!0),typeof i.description=="string"&&(c.description=i.description),typeof i.description_html=="string"&&(c.descriptionHtml=i.description_html);const u=a("source"),f=a("source_url"),g=a("license"),b=a("license_url"),y=a("about"),v=a("about_url");if(typeof u=="string"&&(c.source=u),typeof f=="string"&&(c.sourceUrl=f),typeof g=="string"&&(c.license=g),typeof b=="string"&&(c.licenseUrl=b),typeof y=="string"&&(c.about=y),typeof v=="string"&&(c.aboutUrl=v),i.columns&&typeof i.columns=="object")for(const[C,_]of Object.entries(i.columns))typeof _=="string"&&(c.columns[C]=_);if(i.units&&typeof i.units=="object")for(const[C,_]of Object.entries(i.units))typeof _=="string"&&(c.units[C]=_);return c}const kl=new Map;async function Pp(e,t){let n=kl.get(t);return n||(n=Yt(e,`${t}/-/metadata.json`).catch(()=>({})),kl.set(t,n)),n}async function zo(e,t){const n=await Pp(e,t.base);return Dp(n,t.db,t.table)}function Lp(e){const t={};return e.description!=null&&(t.description=e.description),e.descriptionHtml!=null&&(t.descriptionHtml=e.descriptionHtml),e.source!=null&&(t.source=e.source),e.sourceUrl!=null&&(t.sourceUrl=e.sourceUrl),e.license!=null&&(t.license=e.license),e.licenseUrl!=null&&(t.licenseUrl=e.licenseUrl),e.about!=null&&(t.about=e.about),e.aboutUrl!=null&&(t.aboutUrl=e.aboutUrl),Object.keys(t).length>0?t:void 0}function Uo(e,t){const n=e.sortableColumns!=null?new Set(e.sortableColumns):null,r=t.map(c=>{const u=e.columns[c.field],f=e.units[c.field],g=n?n.has(c.field):void 0;return u==null&&f==null&&g===void 0?c:{...c,...u!=null?{description:u}:{},...f!=null?{units:f}:{},...g!==void 0?{sortable:g}:{}}}),i=new Set(t.map(c=>c.field)),s={};e.sort&&i.has(e.sort)?(s.sortColumn=e.sort,s.sortAsc=!0):e.sortDesc&&i.has(e.sortDesc)&&(s.sortColumn=e.sortDesc,s.sortAsc=!1);const a=Lp(e);return a&&(s.info=a),e.labelColumn&&i.has(e.labelColumn)&&(s.labelColumn=e.labelColumn),{columns:r,patch:s}}function Fo(e,t){if(t.length===0)return e;const n=new Map(zi(t).map(r=>[r.field,r.type]));return e.map(r=>{if(r.type!=="string")return r;const i=n.get(r.field);return i&&i!=="string"?{...r,type:i}:r})}async function Sr(e,t,n={}){const r=n.maxRows??1e4,s={_size:n.pageSize??1e3,...n.extraParams||{}},a=On(t,s);let c=n.startUrl?vl(n.startUrl,a)??n.startUrl:a;const u=[];let f=!1,g=!1,b=0,y,v;for(;c;){let C;try{C=await Yt(e,c)}catch(L){if(u.length===0&&!n.startUrl)throw L;y=L instanceof ot&&L.status?`stopped after ${u.length} rows: HTTP ${L.status}`:`stopped after ${u.length} rows: ${L?.message??String(L)}`,g=!0,v=c;break}const _=Cp(C);u.push(..._.rows),f=f||_.truncated,b+=1,n.onProgress?.(u.length);const M=(_.nextUrl!=null?vl(_.nextUrl,c):null)??(_.nextToken!=null?_p(t,_.nextToken):null);M&&u.length<r&&_.rows.length>0?c=M:(g=M!=null&&_.rows.length>0,g&&(v=M??void 0),c=null)}return{rows:u,truncated:f,hasMore:g,pages:b,error:y,nextUrl:v}}function Mp(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function iu(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function su(e,t,n){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${n}`}async function Fi(e,t,n,r){let i;try{i=await e(t,{method:"POST",headers:Mp(r),body:JSON.stringify(n)})}catch(a){throw new ot({error:`Couldn't reach ${t} (${a?.message||"network error"}).`},0)}if(i&&i.ok===!1){let a=null;try{a=await i.json()}catch{}throw new ot(a&&typeof a=="object"?a:{error:`HTTP ${i.status} for ${t}`},i.status)}const s=await i.json();if(s&&s.ok===!1)throw new ot(s,i.status);return s}async function _l(e,t,n,r={}){const i=await Fi(e,iu(t,"insert"),{rows:n,return:!0},r.token);return Array.isArray(i?.rows)?i.rows:[]}async function jp(e,t,n,r,i={}){const s=await Fi(e,su(t,n,"update"),{update:r,return:!0},i.token);return s&&typeof s.row=="object"&&s.row?s.row:Array.isArray(s?.rows)&&s.rows[0]?s.rows[0]:null}async function Cl(e,t,n,r={}){await Fi(e,su(t,n,"delete"),{},r.token)}async function Np(e,t,n,r={}){const i=await Fi(e,iu(t,"upsert"),{rows:n,return:!0},r.token);return Array.isArray(i?.rows)?i.rows:[]}async function zp(e,t){const n=On(t,{_extra:"primary_keys"}),r=await Yt(e,n);return Array.isArray(r?.primary_keys)?r.primary_keys:[]}async function ou(e,t){try{const n=await Yt(e,On(t,{_extra:"count"}));return{count:typeof n?.count=="number"?n.count:null,truncated:n?.count_truncated===!0}}catch{return{count:null,truncated:!1}}}async function au(e,t,n={}){const r=n.token?{headers:{Authorization:`Bearer ${n.token}`}}:void 0;try{const i=await e(`${t}/-/versions.json`,r);if(i&&i.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${i.status}`};const s=await i.json(),a=s?.datasette?.version??s?.version??null;let c=null;try{c=(await(await e(`${t}/-/actor.json`,r)).json())?.actor??null}catch{}return{reachable:!0,version:a,actor:c,writable:!!(n.token&&c)}}catch(i){return{reachable:!1,version:null,actor:null,writable:!1,error:i?.message||"unreachable"}}}function Dn(e,t){return t?(n,r)=>{const i=(r??{}).headers??{};return e(n,{...r??{},headers:{...i,Authorization:`Bearer ${t}`}})}:e}const Ci=e=>e.replace(/^https?:\/\//,""),ur="datasette",lu=1e4,cu=1e3,Bo=1e4,uu=60;function du(e){e.ui.registerSettings(ur,"Datasette",[{key:"maxImportRows",label:"Max import rows per table",type:"number",default:lu,scope:"workspace",description:"Max rows imported per table. 0 = unlimited."},{key:"pageSize",label:"Page size",type:"number",default:cu,scope:"workspace",description:"Rows requested per page hop while paging a table (the instance clamps this to its own max_returned_rows)."},{key:"connectMaxRows",label:"Connected table row cap",type:"number",default:Bo,scope:"workspace",description:"Row cap for a single live connected table."},{key:"retryWaitSeconds",label:"Rate-limit retry wait (seconds)",type:"number",default:uu,scope:"workspace",description:"Wait before resuming an import paused by the instance's rate limiting."}])}function ai(e,t,n){const r=typeof e=="number"?e:Number(e);return Number.isFinite(r)&&r>=n?Math.floor(r):t}async function Bi(e){const[t,n,r,i]=await Promise.all([e.settings.get(ur,"maxImportRows"),e.settings.get(ur,"pageSize"),e.settings.get(ur,"connectMaxRows"),e.settings.get(ur,"retryWaitSeconds")]);return{maxImportRows:ai(t,lu,0),pageSize:ai(n,cu,1),connectMaxRows:ai(r,Bo,1),retryWaitSeconds:ai(i,uu,1)}}function Hi(e){return e===0?Number.MAX_SAFE_INTEGER:e}function Up(e,t,n){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(n)}`}function Ho(e,t,n,r){const i={...e.info??{}};return!i.source&&!i.sourceUrl&&(i.source=`${Ci(t)}/${n}/${r}`,i.sourceUrl=Up(t,n,r)),{...e,info:i}}function hu(e,t){if(!e.has(t))return t;for(let n=2;;n++){const r=`${t} (${n})`;if(!e.has(r))return r}}async function qo(e,t,n,r={}){if(t.db&&t.table)return[await io(e,t)];const i=[];if(t.db){if(i.push(...await $l(e,t.base,t.db)),r.skipPicker)return i.filter(c=>!c.hidden)}else{const c=await ru(e,t.base);if(c.length===0)return[];let u=c;if(c.length>1){const f=await xi(c.map(g=>({name:g,size:null})),{title:`${n} from Datasette`,message:`Choose databases on ${Ci(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!f)return null;u=f.map(g=>c[g])}for(const f of u)try{i.push(...await $l(e,t.base,f))}catch{}}if(i.length===0)return[];const s=new Set(i.map(c=>c.db)).size>1,a=await xi(i.map(c=>({name:s?`${c.db}/${c.table}`:c.table,size:c.count,detail:s?void 0:c.db,hidden:c.hidden})),{title:`${n} from Datasette`,message:`Choose tables to ${n.toLowerCase()} from ${Ci(t.base)}.`,confirmLabel:n});return a?a.map(c=>i[c]):null}const Fp=e=>new Promise(t=>setTimeout(t,e));function Bp(e){const t=globalThis.__eda_resumeDelayMs;return typeof t=="number"&&t>=0?t:e*1e3}function Ko(e,t,n,r){if(!(!e||!t))return{nextUrl:t,loadedRows:n,...r!=null?{totalCount:r}:{}}}const Hp={id:"datasette-import",name:"Datasette Import",type:"importer",version:"0.3.0",description:"Import snapshot tables from any online Datasette instance, database, or single table by URL",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-import.ts"},qp="https://latest.datasette.io/fixtures/facetable";function Kp(e){du(e),e.ui.registerTableButton({id:"datasette:refresh-snapshot",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this snapshot from the Datasette table it came from",visible:t=>t.origin?.type==="datasette"&&t.source?.type!=="datasette",onClick:(t,{tableId:n})=>Jp(t,n)}),e.ui.registerTableButton({id:"datasette:resume",label:"Resume import",icon:"sync_problem",tooltip:"Import was interrupted — click to resume from where it stopped",danger:!0,visible:t=>t.origin?.type==="datasette"&&t.importResume!=null,onClick:(t,{tableId:n})=>Zp(t,n)}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:n}){const r=n||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${qp}`,"","Import from Datasette");r&&await Sl(t,r)}}),e.ui.registerDropHandler(async(t,n)=>{const r=t.dataTransfer?.getData("text/plain")||"";return Vp(r)?(t.preventDefault(),await Sl(n,r),!0):!1})}async function Sl(e,t){try{await Vo(e,t)}catch(n){let r;n instanceof ot?r=n.status?`Datasette error (${n.status}): ${n.message}`:n.message:r=`Could not import: ${n?.message??n}`,await e.ui.dialogs.alert(r,"Datasette import failed")}}function Vp(e){try{const t=Ot(e);return!!(t.db&&t.table)}catch{return!1}}async function Vo(e,t,n={}){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const i=await Bi(e),s=Ot(t),c=await qo(M=>e.backend.fetch(M),s,"Import",{skipPicker:n.skipTablePicker});if(c===null)return;if(c.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const u=[];let f=0;for(const M of c){const L={base:s.base,db:M.db,table:M.table,query:{}},F=await Gp(e,r,L);if(F.skipped){f+=1;continue}u.push({tableId:F.tableId,ref:L,overwrite:F.overwrite,knownCount:M.count})}let g=0,b=0;const y=[],v=[],C=[];for(const M of u)try{const L=await Wp(e,M.tableId,M.ref,M.overwrite,M.knownCount,n,i);g+=1,b+=L.rowCount,L.error?v.push(`${M.ref.db}/${M.ref.table} (${L.error})`):(L.hasMore||L.truncated)&&y.push(`${M.ref.db}/${M.ref.table}`)}catch(L){C.push(`${M.ref.db}/${M.ref.table}: ${L?.message??String(L)}`)}const _=Hi(i.maxImportRows),O=n.maxRows!=null?Math.min(n.maxRows,_):_;Xp(e,{imported:g,skipped:f,totalRows:b,capped:y,cap:O,partial:v,failed:C,requested:c.length})}async function Gp(e,t,n){const r=`${n.db}/${n.table}`,i={type:"datasette",url:`${n.base}/${encodeURIComponent(n.db)}/${encodeURIComponent(n.table)}`},s=(await e.store.tables.find()).filter(f=>f.workspaceId===t),a=s.find(f=>f.name.toLowerCase()===r.toLowerCase());let c=r;if(a){const f=await e.ui.dialogs.choice(`A table named "${r}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!f||f==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(f==="Overwrite")return await e.store.tables.patch(a.id,{origin:i,updatedAt:Date.now()}),{tableId:a.id,overwrite:!0};c=hu(new Set(s.map(g=>g.name)),r)}const u=Ee();return await e.store.tables.insert({id:u,workspaceId:t,name:c,code:Ge(`${n.db}-${n.table}`),columns:[],view:"table",origin:i,updatedAt:Date.now()}),{tableId:u,overwrite:!1}}async function Wp(e,t,n,r,i,s,a){const c=`${n.db}/${n.table}`,u=b=>e.backend.fetch(b),f=Hi(a.maxImportRows),g=s.maxRows!=null?Math.min(s.maxRows,f):f;At(t,!0);try{let b=[],y=i,v=!1,C=!1,_=[];try{const ye=await Ui(u,n);b=ye.columns,y==null&&(y=ye.count,v=ye.countTruncated),C=ye.typed,_=ye.pks??[]}catch{}if(y==null){const ye=await ou(u,n);y=ye.count,v=ye.truncated}const O=y&&y>0&&(!v||g<=y)?Math.min(y,g):0,M=[];let L=!1,F=!1,V=0,W,G,H;for(;;){const ye=await Sr(u,n,{maxRows:Math.max(0,g-M.length),pageSize:a.pageSize,...H?{startUrl:H}:{},onProgress:yn=>{O>0&&At(t,!0,Math.min(1,(M.length+yn)/O))}});if(M.push(...ye.rows),L=L||ye.truncated,V+=ye.pages,F=ye.hasMore,W=ye.error,G=ye.nextUrl,!ye.error||!ye.nextUrl||M.length>=g)break;const He=`${a.retryWaitSeconds}s`;if(await e.ui.dialogs.choice(`Import of "${c}" paused after ${M.length.toLocaleString()} rows (${ye.error}). Datasette may be rate-limiting a large import. Wait ${He} and resume from where it stopped, or cancel and keep the rows imported so far (you can resume later from the table's footer)?`,[`Resume in ${He}`,"Cancel"],"Import paused — rate limited?")!==`Resume in ${He}`)break;At(t,!0),e.ui.dialogs.toast(`Resuming "${c}" in ${He}…`,{kind:"info",title:"Import paused"}),await Fp(Bp(a.retryWaitSeconds)),H=ye.nextUrl,W=void 0,G=void 0}let ie=b.length===0?zi(M):C?b:Fo(b,M),se={};try{const ye=await zo(u,n),He=Uo(ye,ie);ie=He.columns,se=He.patch}catch{}se=Ho(se,n.base,n.db,n.table);const q=await e.store.tables.findOne(t),K=q?.columns??[],ce=K.length===0;let{columns:pe}=ji(K,ie,q?.deletedColumns),Te=M;if(s.editColumns&&ce){const ye=await s.editColumns(pe,c);if(ye===null)return{name:c,rowCount:0,hasMore:!1,truncated:!1,pages:V,count:y,error:W};Te=Yp(Te,pe,ye),pe=ye}const Ne=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t});const gt=Ko(W,G,M.length,y),de=_.length>0&&q?.origin?{origin:{...q.origin,pks:_}}:{},Pe=ce?{columns:pe,...se,...de,importResume:gt,updatedAt:Ne}:{columns:pe,...se.info?{info:se.info}:{},...de,importResume:gt,updatedAt:Ne};await e.store.tables.patch(t,Pe);const Ae=e.store.rows(t);if(r){const ye=await Ae.find();await Ae.bulkRemove(ye.map(He=>He.id))}const et=Te.map(ye=>({id:Ee(),tableId:t,data:ye,updatedAt:Ne}));return await Ae.bulkInsert(et),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:et.length}),{name:c,rowCount:et.length,hasMore:F,truncated:L,pages:V,count:y,error:W}}finally{At(t,!1)}}function Yp(e,t,n){const r=Oo(t,n);return r?e.map(r):e}function Xp(e,t){const n=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,r=`${t.imported} table${t.imported===1?"":"s"}`,i=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${r} (${n});${i} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.partial.length>0){e.ui.dialogs.toast(`Imported ${r} (${n}).${i} ${t.partial.length} loaded partially (stopped early — the server may have rate-limited us): ${t.partial.join(", ")}. Use Refresh to fetch the rest.`,{kind:"warning",title:"Datasette import"});return}if(t.capped.length>0){const s=t.cap<Number.MAX_SAFE_INTEGER?` at ${t.cap.toLocaleString()}`:"";e.ui.dialogs.toast(`Imported ${r} (${n}).${i} ${t.capped.length} capped${s} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${r} (${n}) from Datasette.${i}`,{kind:"success",title:"Datasette import"})}async function Jp(e,t){const n=await e.store.tables.findOne(t);if(!(!n?.origin?.url||n.origin.type!=="datasette"))try{const r=await Bi(e);await Qp(e,n,r)}catch(r){const i=r instanceof ot?r.message:r?.message??String(r);e.ui.dialogs.toast(`Refresh failed: ${i}`,{kind:"error",title:"Refresh"})}}async function Qp(e,t,n){const r=Ot(t.origin.url),i=g=>e.backend.fetch(g),s=Hi(n.maxImportRows);At(t.id,!0);let a,c=[];try{let g=[],b=null,y=!1,v=!1;try{const de=await Ui(i,r);g=de.columns,b=de.count,y=de.countTruncated,v=de.typed}catch{}if(b==null){const de=await ou(i,r);b=de.count,y=de.truncated}const C=b&&b>0&&(!y||s<=b)?Math.min(b,s):0,{rows:_,hasMore:O,truncated:M,error:L,nextUrl:F}=await Sr(i,r,{maxRows:s,pageSize:n.pageSize,onProgress:de=>{C>0&&At(t.id,!0,Math.min(1,de/C))}});let V=g.length===0?zi(_):v?g:Fo(g,_),W={};try{const de=await zo(i,r),Pe=Uo(de,V);V=Pe.columns,W=Pe.patch}catch{}W=Ho(W,r.base,r.db,r.table);const G=t.columns.length===0,H=ji(t.columns,V,t.deletedColumns);c=H.newFields;const Y=Date.now(),ie=Ko(L,F,_.length,b),se=G?{columns:H.columns,...W,importResume:ie,updatedAt:Y}:{columns:H.columns,...W.info?{info:W.info}:{},importResume:ie,updatedAt:Y};await e.store.tables.patch(t.id,se);const q=t.origin?.pks??[],K=new Set(V.map(de=>de.field)),ce=t.columns.map(de=>de.field).filter(de=>!K.has(de)&&!q.includes(de)),pe=(t.deletedColumns??[]).filter(de=>K.has(de)),Te=e.store.rows(t.id),Ne=await Te.find(),{data:gt}=Yc({oldRows:Ne.map(de=>({data:de.data})),freshRows:_,pks:q,userAddedFields:ce,deletedRemoteFields:pe});await Te.bulkRemove(Ne.map(de=>de.id)),await Te.bulkInsert(gt.map(de=>({id:Ee(),tableId:t.id,data:de,updatedAt:Y}))),a={rowCount:gt.length,hasMore:O,truncated:M,error:L}}finally{At(t.id,!1)}const u=[];if(a.error)u.push(`partial (${a.error})`);else if(a.hasMore||a.truncated){const g=s<Number.MAX_SAFE_INTEGER?` at ${s.toLocaleString()}`:"";u.push(`capped${g}`)}c.length>0&&u.push(`${c.length} new column${c.length===1?"":"s"}`);const f=u.length?` — ${u.join(", ")}`:"";e.ui.dialogs.toast(`Refreshed ${a.rowCount} rows from ${r.db}/${r.table}${f}.`,{kind:a.error||a.hasMore||a.truncated||c.length>0?"warning":"success",title:"Refresh"}),c.length>0&&em(t.id,r,c)}async function Zp(e,t){const n=await e.store.tables.findOne(t),r=n?.importResume;if(!n||!n.origin?.url||!r)return;const i=await Bi(e),s=Hi(i.maxImportRows),a=Ot(n.origin.url),c=C=>e.backend.fetch(C),u=r.loadedRows,f=r.totalCount??null,g=f&&f>0?Math.min(f,s):0;At(t,!0,g>0?Math.min(1,u/g):void 0);let b=0,y;try{const C=await Sr(c,a,{startUrl:r.nextUrl,maxRows:Math.max(0,s-u),pageSize:i.pageSize,onProgress:M=>{g>0&&At(t,!0,Math.min(1,(u+M)/g))}});b=C.rows.length;const _=Date.now();await e.store.rows(t).bulkInsert(C.rows.map(M=>({id:Ee(),tableId:t,data:M,updatedAt:_}))),y={error:C.error,nextUrl:C.nextUrl};const O=Ko(C.error,C.nextUrl,u+b,f);await e.store.tables.patch(t,{importResume:O,updatedAt:_})}catch(C){const _=C instanceof ot?C.message:C?.message??String(C);e.ui.dialogs.toast(`Couldn't resume ${a.db}/${a.table}: ${_}. Try again later.`,{kind:"error",title:"Resume import"});return}finally{At(t,!1)}const v=u+b;y.error?e.ui.dialogs.toast(`Resumed ${a.db}/${a.table}: +${b} rows (${v} total) — interrupted again (${y.error}). Resume to continue.`,{kind:"warning",title:"Resume import"}):e.ui.dialogs.toast(`Finished ${a.db}/${a.table}: +${b} rows (${v} total).`,{kind:"success",title:"Resume import"})}function em(e,t,n){const r=n.join(", "),i=n.length!==1,s=`Refreshing ${t.db}/${t.table} revealed ${n.length} new column${i?"s":""}: ${r}. Review, reorder or hide ${i?"them":"it"} here.`;document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:e,notice:s}}))}const tm=Object.freeze(Object.defineProperty({__proto__:null,importDatasette:Vo,init:Kp,meta:Hp},Symbol.toStringTag,{value:"Module"}));var nm=Object.defineProperty,rm=Object.getOwnPropertyDescriptor,Er=(e,t,n,r)=>{for(var i=r>1?void 0:r?rm(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&nm(t,n,i),i};const im="https://latest.datasette.io/ephemeral";let vt=class extends ve{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=async e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const n=this.token.trim();if(this.onConnect){this.status="Checking…",this.statusKind="busy";try{await this.onConnect(t,n)}catch(r){this.status=r?.message??String(r),this.statusKind="err";return}}this.finish({url:t,token:n})}}connectedCallback(){super.connectedCallback(),vt.instance=this}disconnectedCallback(){super.disconnectedCallback(),vt.instance===this&&(vt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pt(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,this.onConnect=e.onConnect,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return $`
      <dialog @cancel=${this.onCancel} @keydown=${ft}>
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
                placeholder="e.g. ${im}"
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
    `}};vt.instance=null;vt.styles=[ht,$e`
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
    `];Er([U()],vt.prototype,"url",2);Er([U()],vt.prototype,"token",2);Er([U()],vt.prototype,"status",2);Er([U()],vt.prototype,"statusKind",2);vt=Er([Ce("datasette-connect-dialog")],vt);class sm extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function fu(e){return`datasette:token:${e}`}function om(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}function am(e,t,n){const r=e.source,i=r?.config??{},s={base:i.base,db:i.db,table:i.table,query:{}},a=Array.isArray(i.pks)&&i.pks.length>0?i.pks:["rowid"],c=r?.writable===!0,u=i.maxRows;let f=null;function g(){return u!=null?Promise.resolve(u):(f||(f=n?Bi(n).then(H=>H.connectMaxRows):Promise.resolve(Bo)),f)}const b=i.pollIntervalMs??0,y=(H,Y)=>t.backend.fetch(H,Y);async function v(){const Y=(await t.settings.findOne(fu(i.base)))?.value;return typeof Y=="string"&&Y.length>0?Y:void 0}const C=async(H,Y)=>Dn(y,await v())(H,Y);function _(H){return{id:Ap(H,a)??Ee(),tableId:e.id,data:H,updatedAt:Date.now()}}function O(H){if(!c)throw new sm(H)}function M(H){const Y={};for(const[ie,se]of Object.entries(H))a.includes(ie)||(Y[ie]=se);return Y}const L=new Set;let F=[],V=!1,W=null;function G(){return W||(W=(async()=>{try{const{rows:H}=await Sr(C,s,{maxRows:await g()});F=H.map(_),V=!0;for(const Y of L)Y(F);return F}finally{W=null}})(),W)}return{async find(H){const Y=V?F:await G();return!H||Object.keys(H).length===0?Y:Y.filter(ie=>om(ie,H))},async findOne(H){return(V?F:await G()).find(ie=>ie.id===H)??null},async insert(H){O("insert");const[Y]=await _l(C,s,[H.data]),ie=_(Y??H.data);return t.events.emit("row:created",{tableId:e.id,row:ie}),G(),ie},async bulkInsert(H){if(H.length===0)return[];O("insert");const Y=await _l(C,s,H.map(se=>se.data)),ie=(Y.length?Y:H.map(se=>se.data)).map(_);return G(),ie},async upsert(H){O("upsert");const[Y]=await Np(C,s,[H.data]),ie=_(Y??H.data);return G(),ie},async patch(H,Y){O("update");const ie=Y.data,se=M(ie??{}),q=await jp(C,s,H,se),K=_(q??{...ie??{}});return t.events.emit("row:updated",{tableId:e.id,row:K,prev:K}),G(),K},async remove(H){O("delete"),await Cl(C,s,H),t.events.emit("row:deleted",{tableId:e.id,rowId:H}),G()},async bulkRemove(H){if(H.length!==0){O("delete");for(const Y of H)await Cl(C,s,Y);G()}},subscribe(H){L.add(H),V?H(F):G();let Y=null;return b>0&&(Y=setInterval(()=>void G(),b)),()=>{L.delete(H),Y&&clearInterval(Y)}},async refresh(){await G()}}}const lm='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',cm={id:"datasette-connect",name:"Datasette Connect",type:"source",version:"0.3.0",description:"Connect a live, editable table on any Datasette instance — rows are never stored locally",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-connect.ts"};function um(e){du(e),e.ui.registerConnector({id:"datasette",label:"Datasette",icon:lm,order:10,description:"A live, editable table on any Datasette instance",connect:t=>hm(t)}),e.ui.registerTableButton({id:"datasette:refresh-live",label:"Refresh",icon:"refresh",tooltip:"Re-read this live table from its Datasette instance",visible:t=>t.source?.type==="datasette",onClick:(t,{tableId:n})=>dm(t,n)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:(t,n)=>am(t,n,e)})}async function dm(e,t){if((await e.store.tables.findOne(t))?.source?.type==="datasette")try{const r=e.store.rows(t);typeof r.refresh=="function"&&await r.refresh();const i=await r.find();e.ui.dialogs.toast(`Reloaded ${i.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}catch(r){const i=r instanceof ot?r.message:r?.message??String(r);e.ui.dialogs.toast(`Refresh failed: ${i}`,{kind:"error",title:"Refresh"})}}async function hm(e){const t=vt.instance??fm(),n=(i,s)=>e.backend.fetch(i,s),r=await t.open({initialUrl:"https://datasette.io",async onTest(i,s){const a=Ot(i),c=await au(n,a.base,{token:s||void 0});if(a.db&&a.table){await io(Dn(n,s||void 0),a);const f=c.version?` (Datasette ${c.version})`:"";return c.writable?`Reachable${f} — table found, signed in, read-write.`:`Reachable${f} — table found, read-only (no token / not authenticated).`}if(!c.reachable)return`Unreachable: ${c.error??"no response"}`;const u=c.version?` (Datasette ${c.version})`:"";return c.writable?`Reachable${u} — signed in, read-write.`:`Reachable${u} — read-only (no token / not authenticated).`},async onConnect(i,s){const a=Ot(i);a.db&&a.table&&await io(Dn(n,s||void 0),a)}});if(r)try{await pu(e,r.url,r.token)}catch(i){const s=i instanceof ot?i.message:i?.message??String(i);await e.ui.dialogs.alert(s,"Connect Datasette failed")}}function fm(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function pu(e,t,n){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const i=Ot(t),s=(b,y)=>e.backend.fetch(b,y),a=Dn(s,n||void 0),c=await au(s,i.base,{token:n||void 0});n&&await e.store.settings.upsert({name:fu(i.base),value:n});let u;try{u=await qo(a,i,"Connect")}catch(b){const y=b instanceof ot?b.message:b?.message??String(b);throw new Error(`Couldn't read tables from ${Ci(i.base)}: ${y}`)}if(u===null)return;if(u.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const f=[];for(const b of u){const y=await pm(e,r,i.base,b,c.writable,n);y!==null&&f.push({tableId:y,c:b})}if(f.length===0)return;const g=c.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${f.length} live table${f.length===1?"":"s"} from Datasette (${g}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:b,c:y}of f)mm(e,b,i.base,y,n)}async function pm(e,t,n,r,i,s){const a=(await e.store.tables.find()).filter(y=>y.workspaceId===t);let c=`${r.db}/${r.table}`,u=a.find(y=>{const v=y.source?.config;return y.source?.type==="datasette"&&v?.base===n&&v?.db===r.db&&v?.table===r.table});if(!u){const y=a.find(v=>v.name.toLowerCase()===c.toLowerCase());if(y){const v=await e.ui.dialogs.choice(`A table named "${c}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Connect — table already exists");if(!v||v==="Skip")return null;v==="Overwrite"?u=y:c=hu(new Set(a.map(C=>C.name)),c)}}let f=r.pks??[];if(f.length===0){const y=Dn((v,C)=>e.backend.fetch(v,C),s||void 0);try{f=await zp(y,{base:n,db:r.db,table:r.table,query:{}})}catch{f=[]}}const g=u?.id??Ee(),b={...u??{},id:g,workspaceId:t,name:c,code:Ge(`${r.db}-${r.table}`),columns:u?.columns??[],view:u?.view??"table",source:{type:"datasette",writable:i,config:{base:n,db:r.db,table:r.table,pks:f}},updatedAt:Date.now()};return u?await e.store.tables.upsert(b):await e.store.tables.insert(b),g}async function mm(e,t,n,r,i){const s={base:n,db:r.db,table:r.table,query:{}},a=Dn((c,u)=>e.backend.fetch(c,u),i||void 0);try{let c=[],u=!1;try{const _=await Ui(a,s);c=_.columns,u=_.typed}catch{}const{rows:f}=await Sr(a,s,{maxRows:50,pageSize:50}),g=c.length===0?zi(f):u?c:Fo(c,f);if(g.length===0)return;const b=await e.store.tables.findOne(t);if(!b)return;const y=b.source?.config?.pks??[];let v=g.map(_=>y.includes(_.field)?{..._,unique:!0,notnull:!0}:_),C={};try{const _=await zo(a,s),O=Uo(_,v);v=O.columns,C=O.patch}catch{}C=Ho(C,s.base,r.db,r.table),await e.store.tables.patch(t,{columns:v,...C,updatedAt:Date.now()})}catch{}}const gm=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:pu,init:um,meta:cm},Symbol.toStringTag,{value:"Module"})),bm={id:"url-source",name:"URL Reference",type:"source",version:"0.1.0",description:'Backs a table with a live read-only fetch of a plain CSV or JSON URL — a "reference" table whose rows are never persisted locally.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/url-source.ts"};function wm(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"url",create:mu}),e.ui.registerTableButton({id:"url-source:refresh",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this reference from its source URL",visible:t=>t.source?.type==="url",onClick:async(t,{tableId:n})=>{try{const r=t.store.rows(n);typeof r.refresh=="function"&&await r.refresh(),t.ui.dialogs.toast("Reference refreshed.",{kind:"success",title:"Refresh"})}catch(r){t.ui.dialogs.toast(`Refresh failed: ${r.message}`,{kind:"error",title:"Refresh"})}}})}class dn extends Error{constructor(t){super(`This is a reference (read-only) table — ${t} is not permitted. Import a copy to edit.`),this.name="ReadOnlyReferenceError"}}function ym(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}const El=5e4;function vm(e){return e.ok===!0&&Array.isArray(e.rows)}function xm(e,t){if(typeof e!="object"||e===null||Array.isArray(e))return null;const n=e;let r;try{r=new URL(t)}catch{return null}for(const i of["next_url","nextUrl","next"]){const s=n[i];if(typeof s!="string")continue;const a=s.trim();if(a!==""){if(/^(https?:\/\/|[/?])/i.test(a))try{const c=new URL(a,t);if(c.origin!==r.origin)continue;return c.toString()}catch{continue}if(i==="next"&&vm(n))return`${r.origin}${r.pathname}?_next=${encodeURIComponent(a)}`}}return null}function $m(e){const t=n=>typeof n=="object"&&n!==null&&!Array.isArray(n);if(Array.isArray(e))return e.filter(t);if(t(e)){for(const n of["rows","records","data"]){const r=e[n];if(Array.isArray(r))return r.filter(t)}for(const n of Object.values(e))if(Array.isArray(n))return n.filter(t)}return[]}function mu(e,t){const n=e.source?.config??{},r=typeof n.url=="string"?n.url:"",i=n.format==="json"?"json":"csv",s=new Set;let a=[],c=!1,u=null;function f(C){return C.map((_,O)=>({id:`url:${O}`,tableId:e.id,data:_,updatedAt:0}))}async function g(C){let _;try{_=await t.backend.fetch(C)}catch(O){throw new Error(`Could not reach ${r}: ${O?.message??String(O)}`)}if(!_.ok)throw new Error(`Could not load ${r}: HTTP ${_.status} ${_.statusText}`);try{return await Dc(_)}catch(O){throw new Error(`Could not read response from ${r}: ${O?.message??String(O)}`)}}async function b(C){const _=So(C);let O=await g(_);if(Rc(O)){const M=Oc(_);M&&(O=await g(M))}try{if(i==="json"){const M=JSON.parse(O);return{records:$m(M),nextUrl:xm(M,_)}}return{records:jn(O).rows,nextUrl:null}}catch(M){throw new Error(`Could not parse ${i.toUpperCase()} from ${r}: ${M?.message??String(M)}`)}}async function y(){if(!r)throw new Error("This reference table has no URL configured.");const C=[];let _=r;const O=new Set;for(;_&&C.length<El&&!O.has(_);){O.add(_);const M=await b(_);C.push(...M.records),_=M.records.length>0?M.nextUrl:null}return C.slice(0,El)}function v(){return u||(u=(async()=>{try{const C=await y();a=f(C),c=!0;for(const _ of s)_(a);return a}finally{u=null}})(),u)}return{async find(C){const _=c?a:await v();return!C||Object.keys(C).length===0?_:_.filter(O=>ym(O,C))},async findOne(C){return(c?a:await v()).find(O=>O.id===C)??null},async insert(){throw new dn("insert")},async bulkInsert(){throw new dn("insert")},async upsert(){throw new dn("upsert")},async patch(){throw new dn("update")},async remove(){throw new dn("delete")},async bulkRemove(){throw new dn("delete")},subscribe(C){return s.add(C),c?C(a):v(),()=>{s.delete(C)}},async refresh(){c=!1,a=[],await v()}}}const km=Object.freeze(Object.defineProperty({__proto__:null,ReadOnlyReferenceError:dn,createUrlCollection:mu,init:wm,meta:bm},Symbol.toStringTag,{value:"Module"}));function ze(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),`"${t||"_"}"`}function Tl(e){return`'${e.replace(/'/g,"''")}'`}function Il(e,t){const n=e.columns.find(r=>r.field===t);return n?n.from.kind==="script"?{expr:null,computed:!0}:{expr:`${ze(n.from.alias)}.${ze(n.from.field)}`,computed:!1}:null}function _m(e,t){const n=e.sources[0];if(!n)return`-- projection has no source table; nothing to select.
`;const r=t.limitStyle??"limit",i=e.limit!=null&&e.limit>0?Math.floor(e.limit):null,s=[];for(const v of e.columns)v.from.kind==="source"?s.push(`  ${ze(v.from.alias)}.${ze(v.from.field)} AS ${ze(v.field)}`):s.push(`  NULL AS ${ze(v.field)} -- computed in-app by a script; no SQL equivalent`);s.length===0&&s.push("  *");const c=[`SELECT${i!=null&&r==="top"?` TOP ${i}`:""}`,s.join(`,
`)],u=t.tableNames[n.alias]??n.tableName;c.push(`FROM ${ze(u)} AS ${ze(n.alias)}`);for(const v of e.sources.slice(1)){const C=t.tableNames[v.alias]??v.tableName;if(!v.join){c.push(`CROSS JOIN ${ze(C)} AS ${ze(v.alias)}`);continue}const _=v.join.type==="inner"?"INNER JOIN":"LEFT JOIN",O=v.join.on.map(M=>`${ze(v.alias)}.${ze(M.field)} = ${ze(M.eqAlias)}.${ze(M.eqField)}`).join(" AND ");c.push(`${_} ${ze(C)} AS ${ze(v.alias)} ON ${O||"1 = 1"}`)}const f=[],g=[];for(const[v,C]of Object.entries(e.filters??{})){if(!C)continue;const _=Il(e,v);if(_){if(_.computed){g.push(`-- filter on ${ze(v)} (${Tl(C)}) applies to a computed column; enforced in-app only`);continue}f.push(`LOWER(${_.expr}) LIKE ${Tl(`%${C.toLowerCase()}%`)}`)}}f.length>0&&c.push(`WHERE ${f.join(`
  AND `)}`);const b=(t.orderBy??[]).map(v=>{const C=Il(e,v.field);return!C||C.computed?null:`${C.expr} ${v.asc?"ASC":"DESC"}`}).filter(v=>v!==null);b.length>0&&c.push(`ORDER BY ${b.join(", ")}`);const y=i==null?"":r==="limit"?`
LIMIT ${i}`:r==="fetch"?`
FETCH FIRST ${i} ROWS ONLY`:"";return`${c.join(`
`)}${y};
${g.length>0?`${g.join(`
`)}
`:""}`}const Cm={id:"sql-export",name:"SQL Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-export.ts"};function Sm(){}async function gu(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const n=(await e.store.tables.find()).filter(i=>i.workspaceId===t),r=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${n.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const i of n){const s=await e.store.rows(i.id).find();r.push(yu(i,s),"")}return r.push("COMMIT;",""),r.join(`
`)}function bu(e,t){const n=wu(e);return n||["-- easyDBAccess table export",`-- table:    ${e.name}`,`-- exported: ${new Date().toISOString()}`,"","BEGIN;","",yu(e,t),"","COMMIT;",""].join(`
`)}function wu(e){if(e.source?.type!=="projection")return null;const t=e.source.config;if(!t||!Array.isArray(t.sources))return null;const n={};for(const s of t.sources)n[s.alias]=Si(s.tableName);const r=t.sources.length>0&&e.sortBy&&e.sortBy.length>0?e.sortBy:e.sortColumn?[{field:e.sortColumn,asc:e.sortAsc??!0}]:void 0,i=_m(t,{tableNames:n,limitStyle:"limit",...r?{orderBy:r}:{}});return["-- easyDBAccess projection export",`-- projection: ${e.name}`,`-- exported:   ${new Date().toISOString()}`,"--","-- A projection is a derived (virtual) table: this is the query behind it,","-- reading the source tables by name.","-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';","-- before executing. For SQL Server / HANA, replace the trailing LIMIT n","-- with SELECT TOP n.","",i].join(`
`)}function yu(e,t){const n=Si(e.code||e.name||`table_${e.id}`),r=['  "__id" TEXT PRIMARY KEY',...e.columns.map(s=>`  ${Em(s)}`)],i=[`DROP TABLE IF EXISTS "${n}";`,`CREATE TABLE "${n}" (`,r.join(`,
`),");"];if(t.length>0){const a=["__id",...e.columns.map(c=>c.field)].map(c=>`"${Si(c)}"`).join(", ");for(const c of t){const u=[Al(c.id),...e.columns.map(f=>Al(c.data[f.field],f.type))];i.push(`INSERT INTO "${n}" (${a}) VALUES (${u.join(", ")});`)}}return i.join(`
`)}function Em(e){const t=[`"${Si(e.field)}"`,Tm(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function Tm(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function Al(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const n=Im(e);return n===null?"NULL":li(n)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?li(e.toISOString()):li(typeof e=="string"?e:JSON.stringify(e))}function Im(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?Rl(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const n=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(n)return`${n[1]}${n[2]}${n[3]}`;const r=new Date(t);return Number.isFinite(r.getTime())?Rl(r):null}return null}function Rl(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),n=String(e.getUTCMonth()+1).padStart(2,"0"),r=String(e.getUTCDate()).padStart(2,"0");return`${t}${n}${r}`}function li(e){return`'${e.replace(/'/g,"''")}'`}function Si(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const Am=Object.freeze(Object.defineProperty({__proto__:null,init:Sm,meta:Cm,projectionSelectFor:wu,serializeTableAsSql:bu,serializeWorkspaceAsSql:gu},Symbol.toStringTag,{value:"Module"})),vu=/\$((?:input|filter)[.:])?([A-Za-z_][A-Za-z0-9_]*)/g;function Ol(...e){const t=new Set;for(const n of e)if(n)for(const r of n.matchAll(vu))t.add(r[2]);return[...t]}const Go=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),In=e=>Go(e).replace(/"/g,"&quot;").replace(/'/g,"&#39;");function Rm(e){return typeof e=="boolean"?e:typeof e=="number"?e!==0:typeof e=="string"?["true","1","yes","y","t","on"].includes(e.trim().toLowerCase()):!1}function Om(e,t,n,r,i){const s=r?.type??"string",a=Go(r?.label||e),c=`class="eda-input" data-eda-row="${In(n)}" data-eda-field="${In(e)}" data-eda-type="${In(s)}"`,u=i?" disabled":"";let f;if(s==="boolean")f=`<input type="checkbox" ${c}${Rm(t)?" checked":""}${u} />`;else{const g=s==="number"?"number":"text",b=t==null?"":In(String(t));f=`<input type="${g}" ${c} value="${b}"${u} />`}return`<label class="eda-input-field" title="${a}">${f}<span class="eda-input-label">${a}</span></label>`}function Dm(e,t){if(t==null||t==="")return"";const n=String(t),r=In(e),i=In(n);return`<button type="button" class="eda-filter-pill" data-eda-filter-field="${r}" data-eda-filter-value="${i}" title="Filter by ${r}: ${i}">${Go(n)}</button>`}function Pm(e,t,n,r={}){return e.replace(vu,(i,s,a)=>{const c=n[a];if(!c)return"";const u=t.data[c];if(!s)return u==null?"":String(u);if(s.startsWith("filter"))return Dm(c,u);const f=r.columns?.get(c),g=r.readonly===!0||!!f?.script?.trim();return Om(c,u,t.id,f,g)})}function Dl(e){return e==null||e===""}function Lm(e,t){let n=null;for(const r of t){if(!r.script?.trim())continue;const i=Mo(r.script,e.data);n??={...e.data},n[r.field]=i.ok?i.value:`⚠ ${i.label}`}return n?{...e,data:n}:e}function Mm(e,t){return t.some(n=>n.script?.trim())?e.map(n=>Lm(n,t)):e}function Pl(e,t){const n=Object.entries(t).filter(([,r])=>r!=null&&String(r).trim()!=="");return n.length===0?e:e.filter(r=>n.every(([i,s])=>$i(r.data[i],s)))}function xu(e,t){return e.exact===!0&&!e.negate&&e.term.toLowerCase()===t.toLowerCase()}function jm(e,t){const n=Cr(e??"");return n.some(r=>xu(r,t))||n.push({term:t,negate:!1,exact:!0}),yr(n)}function Nm(e,t){const n=Cr(e??"").filter(r=>!xu(r,t));return yr(n)}function zm(e,t,n=!0){if(!t)return e;const r=n?1:-1;return[...e].sort((i,s)=>{const a=i.data[t],c=s.data[t],u=Dl(a),f=Dl(c);if(u||f)return u===f?0:u?1:-1;const g=Number(a),b=Number(c);return!Number.isNaN(g)&&!Number.isNaN(b)?(g-b)*r:String(a).localeCompare(String(c),void 0,{numeric:!0,sensitivity:"base"})*r})}function $u(e,t){const n=Pl(e,t.filters??{}),r=Pl(n,t.pillFilters??{});return zm(r,t.sortColumn,t.sortAsc??!0)}function Um(e){return!!e&&e.trim().length>0}function Fm(e,t){return t==="raw"||t==="structure"?e.columns:e.columns.filter(n=>n.hidden!==!0)}function Bm(e,t){return t==="raw"||t==="structure"?e:{...e,columns:Fm(e,t)}}function Hm(e,t,n){return n==="structure"?[]:n==="raw"?t:$u(t,{filters:e.filters??{},sortColumn:e.sortColumn,sortAsc:e.sortAsc})}function Wo(e,t){const n=e.columns.map(i=>i.field),r=e.source!=null;return{name:e.name,title:e.title,columns:e.columns,view:e.view,windowGeometry:e.windowGeometry,sortColumn:e.sortColumn,sortAsc:e.sortAsc,filters:e.filters,labelColumn:e.labelColumn,deletedColumns:e.deletedColumns,info:e.info,source:e.source,origin:e.origin,rows:r?[]:t.map(i=>{const s={};for(const a of n)s[a]=i.data[a];return s})}}const qm={id:"dump-export",name:"Dump Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file, and — per table — CSV/JSON/SQL with a Raw vs. Visible vs. Structure Only choice.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/dump-export.ts"};function Km(e){e.ui.registerFooterButton({id:"export:menu",label:"Export",icon:"download",tooltip:"Export the current workspace (JSON or SQL)",onClick:async(t,n)=>{const r=t.workspaceId();if(!r)return;const{AnchoredMenu:i}=await ct(async()=>{const{AnchoredMenu:c}=await Promise.resolve().then(()=>wr);return{AnchoredMenu:c}},void 0),s=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),a=await i.open(s,[{id:"json",label:"JSON dump (.db.json)",icon:"data_object"},{id:"sql",label:"SQL script (.sql)",icon:"storage"}]);if(a)try{if(a==="json"){const c=await qi(t);await t.backend.saveFile(`workspace-${r}.db.json`,c,"application/json")}else if(a==="sql"){const c=await gu(t);await t.backend.saveFile(`workspace-${r}.sql`,c,"application/sql")}}catch(c){t.ui.dialogs.toast(`Export failed: ${c.message}`,{kind:"error",title:"Export"})}}}),e.ui.registerTableButton({id:"table-export:menu",label:"Export",icon:"file_download",tooltip:"Export this table as CSV, JSON, or SQL",onClick:async(t,n)=>{const{AnchoredMenu:r}=await ct(async()=>{const{AnchoredMenu:f}=await Promise.resolve().then(()=>wr);return{AnchoredMenu:f}},void 0),i=n.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"csv",label:"CSV (.csv)",icon:"table_chart"},{id:"json",label:"JSON (.table.json)",icon:"data_object"},{id:"sql",label:"SQL (.sql)",icon:"storage"}]);if(!s)return;const a=await t.store.tables.findOne(n.tableId);if(!a)return;const c=await t.ui.dialogs.choice(`Export "${a.name}" as ${s.toUpperCase()} — which rows/columns?`,["Visible Data","Raw Data","Structure Only"],"Export table");if(!c)return;const u=c==="Visible Data"?"visible":c==="Raw Data"?"raw":"structure";try{const f=await t.store.rows(a.id).find(),g=Bm(a,u),b=Hm(a,f,u),y=Ge(a.code||a.name||"table"),v=u!=="structure"&&a.source!=null&&f.length===0;if(s==="csv")v&&t.ui.dialogs.toast(`"${a.name}" is a live table with no local rows — exporting column definitions only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${y}.csv`,Ro(g,b),"text/csv");else if(s==="json"){const C=JSON.stringify(Wo(g,b),null,2);await t.backend.saveFile(`${y}.table.json`,C,"application/json")}else s==="sql"&&(v&&t.ui.dialogs.toast(`"${a.name}" is a live table with no local rows — exporting the CREATE TABLE only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${y}.sql`,bu(g,b),"application/sql"))}catch(f){t.ui.dialogs.toast(`Export failed: ${f.message}`,{kind:"error",title:"Export"})}}})}async function qi(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const n=(await e.store.tables.find()).filter(a=>a.workspaceId===t),r=(await e.store.viewTemplates.find()).filter(a=>a.workspaceId===t),i=(await e.store.viewInstances.find()).filter(a=>a.workspaceId===t),s={workspaceId:t,exportedAt:Date.now(),tables:[],viewTemplates:r,viewInstances:i};for(const a of n){const c=await e.store.rows(a.id).find();s.tables.push({name:a.name,columns:a.columns,rows:c.map(u=>u.data),...a.title?{title:a.title}:{},...a.windowGeometry?{windowGeometry:a.windowGeometry}:{},...a.sortColumn?{sortColumn:a.sortColumn,sortAsc:a.sortAsc??!0}:{},...a.filters?{filters:a.filters}:{},...a.labelColumn?{labelColumn:a.labelColumn}:{},...a.info?{info:a.info}:{},...a.deletedColumns?{deletedColumns:a.deletedColumns}:{},...a.readonly?{readonly:!0}:{},...a.source?{source:a.source}:{},...a.origin?{origin:a.origin}:{}})}return JSON.stringify(s,null,2)}const Vm=Object.freeze(Object.defineProperty({__proto__:null,init:Km,meta:qm,serializeWorkspace:qi},Symbol.toStringTag,{value:"Module"})),Gm={id:"gist-sync",name:"Gist Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/gist-sync.ts"},Wm="gist:",Ll='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>';function Ym(e){e.ui.registerSettings("gist-sync","Gist Sync",[{key:"user",label:"GitHub user",type:"string",scope:"workspace",description:"GitHub username that owns the gist."},{key:"gist_id",label:"Gist ID",type:"string",scope:"workspace",description:"Leave empty to create a new gist on the first Push."},{key:"gist_token",label:"GitHub token (PAT)",type:"secret",scope:"user",description:'Personal access token with the "gist" scope. Stored on this device only (not synced).',help:'A classic token with the single "gist" scope is enough — nothing else is needed and nothing else should be granted. Give it an expiry you are happy with; the sync stops working when it lapses and you paste a new one here. Keep the value in the secrets store (General tab) and reference it, so it is never written into a synced setting.',helpUrl:"https://github.com/settings/tokens/new?scopes=gist&description=easyDBAccess",helpLinkLabel:"Create a token on GitHub"}]),e.ui.registerFooterButton({id:"gist-sync:menu",label:"Gist",icon:Ll,tooltip:"Gist sync — push, pull, share…",onClick:async(t,n)=>{const{AnchoredMenu:r}=await ct(async()=>{const{AnchoredMenu:a}=await Promise.resolve().then(()=>wr);return{AnchoredMenu:a}},void 0),i=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"push",label:"Push",icon:"cloud_upload"},{id:"pull",label:"Pull",icon:"cloud_download"},{id:"share",label:"Share",icon:"share"},{id:"view",label:"View gist",icon:"open_in_new"}]);if(s)try{if(s==="push"||s==="pull"){const a=await r.open(i,[{id:"all",label:"Everything",icon:"sync"},{id:"data",label:"Data only (tables + rows)",icon:"table_rows"},{id:"settings",label:"Settings only (views + settings)",icon:"tune"}]);if(!a)return;const c=a;s==="push"?await tg(t,c):await _u(t,c)}else s==="share"?await Zm(t):s==="view"&&await eg(t)}catch(a){t.ui.dialogs.toast(`Gist ${s} failed: ${a.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerTableButton({id:"gist-sync:table",label:"Gist",icon:Ll,tooltip:"Gist sync for this table — push, pull, view file",onClick:async(t,n)=>{const{AnchoredMenu:r}=await ct(async()=>{const{AnchoredMenu:a}=await Promise.resolve().then(()=>wr);return{AnchoredMenu:a}},void 0),i=n.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"push",label:"Push this table",icon:"cloud_upload"},{id:"pull",label:"Pull this table",icon:"cloud_download"},{id:"view",label:"View gist file",icon:"open_in_new"}]);if(s)try{s==="push"?await ng(t,n.tableId):s==="pull"?await rg(t,n.tableId):s==="view"&&await ig(t,n.tableId)}catch(a){t.ui.dialogs.toast(`Gist ${s} failed: ${a.message}`,{kind:"error",title:"Gist sync"})}}})}async function Xm(e){const t=new URLSearchParams(location.hash.replace(/^#/,"")).get("gist");if(!t)return;history.replaceState(null,"",location.pathname+location.search);let n;try{n=atob(t)}catch{return}const r=Jm(n);if(!r){await e.ui.dialogs.alert("The shared gist link is invalid.","Gist sync");return}await e.ui.dialogs.confirm(`Load shared workspace from gist ${r.gistId||"(new)"} (owner: ${r.user})?

This pulls its tables into the current workspace.`,"Gist sync")&&(await Yo(e,r),await _u(e))}async function ku(e){const t=e.workspaceId();return`${Wm}${t??"default"}`}async function Tr(e){const[t,n,r]=await Promise.all([e.settings.get("gist-sync","user"),e.settings.get("gist-sync","gist_id"),e.settings.get("gist-sync","gist_token")]);if(t&&r)return{user:t,gistId:n??"",token:r};const s=(await e.store.settings.findOne(await ku(e)))?.value;if(s?.user&&s?.token){const a={user:s.user,gistId:s.gistId??"",token:s.token};return await Yo(e,a),a}return null}async function Yo(e,t){await e.settings.set("gist-sync","user",t.user),await e.settings.set("gist-sync","gist_id",t.gistId),await e.settings.set("gist-sync","gist_token",t.token),await e.store.settings.upsert({name:await ku(e),value:t})}function Jm(e){const t={};for(const n of e.split(";")){const r=n.indexOf("=");if(r<0)continue;const i=n.slice(0,r).trim(),s=n.slice(r+1).trim();i&&(t[i]=s)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function Xo(e){const t=await Tr(e);return t||(e.ui.dialogs.toast("Add your GitHub user and token in Settings → Gist Sync, then try again.",{kind:"warning",title:"Gist sync"}),e.ui.openSettings(),null)}function Qm(e){return`user=${e.user};gist_id=${e.gistId};gist_token=${e.token}`}async function Zm(e){const t=await Tr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("Configure a gist and Push first — there is nothing to share yet.","Gist sync");return}const r=`${location.origin+location.pathname}#gist=${encodeURIComponent(btoa(Qm(t)))}`,{GistShareDialog:i}=await ct(async()=>{const{GistShareDialog:s}=await import("./gist-share-dialog-BBeoUz-x.js");return{GistShareDialog:s}},[]);await i.open(r)}async function eg(e){const t=await Tr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist configured yet — Push first.","Gist sync");return}window.open(`https://gist.github.com/${t.user}/${t.gistId}`,"_blank","noopener")}async function tg(e,t="all"){const n=await Xo(e);if(!n)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=t!=="settings",s=t!=="data",a=(await e.store.tables.find()).filter(_=>_.workspaceId===r);if(i&&a.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const c=1e8,u=1e7,f={},g=[],b=[];if(i)for(const _ of a){const O=_.source!=null?[]:await e.store.rows(_.id).find(),M=JSON.stringify(Wo(_,O),null,2),L=`${_.name} (${(M.length/1e6).toFixed(2)} MB)`;M.length>c?g.push(L):M.length>u&&b.push(L),f[`${Ge(_.name)}.table.json`]={content:M}}if(g.length>0||b.length>0){const _=[];if(g.length>0&&_.push(`Over Gist's 100 MB per-file limit — GitHub will REJECT these:
${g.join(`
`)}`),b.length>0&&_.push(`Large (over 10 MB) — Gist sync will be slow and less reliable:
${b.join(`
`)}`),!await e.ui.dialogs.confirm(`${_.join(`

`)}

To reduce size: remove unnecessary columns, limit the number of rows, or mark the table no-persist/no-sync.

Push anyway?`,"Gist size warning"))return}if(s){const _=(await e.store.viewTemplates.find()).filter(L=>L.workspaceId===r),O=(await e.store.viewInstances.find()).filter(L=>L.workspaceId===r),M=(await e.store.settings.find()).map(L=>({name:L.name,value:L.value}));f["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1",viewTemplates:_,viewInstances:O,settings:M},null,2)}}let y;if(n.gistId){const _=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:f,description:`easyDBAccess workspace: ${r}`})});if(!_.ok)throw new Error(await vr(_));y=await _.json()}else{const _=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:f})});if(!_.ok)throw new Error(await vr(_));y=await _.json(),n.gistId=y.id,await Yo(e,n)}const v=y.html_url??`https://gist.github.com/${n.user}/${y.id}`,C=t==="settings"?"settings":t==="data"?`${a.length} table${a.length===1?"":"s"} (data only)`:`${a.length} table${a.length===1?"":"s"}`;e.ui.dialogs.toast(`Pushed ${C}.  ${v}`,{kind:"success",title:"Gist sync"})}async function _u(e,t="all"){const n=t!=="settings",r=t!=="data",i=await Xo(e);if(!i||!i.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const s=e.workspaceId();if(!s)throw new Error("no active workspace");const a=await fetch(`https://api.github.com/gists/${i.gistId}`,{headers:{Authorization:`Bearer ${i.token}`,Accept:"application/vnd.github+json"}});if(!a.ok)throw new Error(await vr(a));const c=await a.json(),u=Object.entries(c.files).filter(([L])=>L.endsWith(".table.json")&&!L.startsWith("_easydb"));if(n&&u.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const f=(await e.store.tables.find()).filter(L=>L.workspaceId===s),g=new Map(f.map(L=>[L.name.toLowerCase(),L]));let b=0;const y=[],v=new Map;if(n){const{TopProgress:L}=await ct(async()=>{const{TopProgress:V}=await import("./top-progress-DIXM0wQC.js");return{TopProgress:V}},[]),F=L.begin("Pulling from gist…");try{for(const[V,[W,G]]of u.entries())try{const H=await Ei(G),Y=JSON.parse(H);if(!Y.name||!Array.isArray(Y.columns))throw new Error("unexpected file shape (missing name/columns)");let ie;const se=g.get(Y.name.toLowerCase());if(se){if(ie=await e.store.tables.patch(se.id,{title:Y.title,columns:Y.columns,...so(Y),updatedAt:Date.now()}),ie.source==null){const q=e.store.rows(se.id),K=await q.find();await q.bulkRemove(K.map(ce=>ce.id))}}else ie=await e.store.tables.insert({id:Ee(),workspaceId:s,name:Y.name,title:Y.title,code:Ge(Y.name),columns:Y.columns,view:Y.view??"table",...so(Y),updatedAt:Date.now()});if(ie.source==null){const q=(Y.rows??[]).map(K=>({id:Ee(),tableId:ie.id,data:K,updatedAt:Date.now()}));await e.store.rows(ie.id).bulkInsert(q)}v.set(Y.name,ie.id),b++}catch(H){y.push({file:W,error:H.message})}finally{F.fraction((V+1)/u.length)}}finally{F.done()}}let C=0,_="",O=null;const M=r?c.files["_easydb.workspace.json"]:void 0;if(M)try{const L=await Ei(M),F=JSON.parse(L),V=F.viewTemplates??[],W=F.viewInstances??[],G=F.settings??[];O=new Set(W.map(Y=>Y.id));const H=await Kc(e.store.viewTemplates,s,V);for(const Y of W){let ie;if(Y.tableName&&(ie=v.get(Y.tableName)??g.get(Y.tableName)?.id),ie??=Y.tableId,!ie)continue;const se=H.get(Y.templateId)??Y.templateId;await e.store.viewInstances.upsert({...Y,workspaceId:s,tableId:ie,templateId:se}),C++}for(const Y of G)await e.store.settings.upsert(Y)}catch(L){_=`Workspace metadata import failed: ${L.message}`}if(y.length>0){const L=y.map(F=>`• ${F.file}: ${F.error}`).join(`
`);e.ui.dialogs.toast(`Pulled ${b} of ${u.length} tables. ${y.length} failed:
${L}${_?`
${_}`:""}`,{kind:"warning",title:"Gist sync"})}else{const L=C>0?` (+${C} views)`:"",F=t==="settings"?`Pulled settings${L}.`:`Pulled ${b} table${b===1?"":"s"}.${L}`;e.ui.dialogs.toast(F,{kind:"success",title:"Gist sync"}),_&&e.ui.dialogs.toast(_,{kind:"warning",title:"Gist sync"})}y.length===0&&await Cu(e,s,{tableNames:n?new Set([...v.keys()].map(L=>L.toLowerCase())):null,viewInstanceIds:O}),document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}function Ml(e,t=8){const n=e.slice(0,t).map(i=>`• ${i}`),r=e.length-n.length;return[...n,...r>0?[`• …and ${r} more`]:[]].join(`
`)}async function Cu(e,t,n){const r=n.tableNames?(await e.store.tables.find()).filter(u=>u.workspaceId===t&&!n.tableNames.has(u.name.toLowerCase())):[],i=n.viewInstanceIds?(await e.store.viewInstances.find()).filter(u=>u.workspaceId===t&&!n.viewInstanceIds.has(u.id)):[];if(r.length===0&&i.length===0)return;const s=[];if(r.length>0&&s.push(`${r.length} table${r.length===1?"":"s"}:
`+Ml(r.map(u=>u.name))),i.length>0&&s.push(`${i.length} view${i.length===1?"":"s"}:
`+Ml(i.map(u=>u.name))),!await e.ui.dialogs.confirm(`The gist does not have these local objects:

${s.join(`

`)}

Delete them, so this workspace matches the gist? A table goes with its rows. Keep them if this is local work you have not pushed yet.`,"Delete objects missing from the pull?"))return;for(const u of i)await e.store.viewInstances.remove(u.id);const{deleteTable:c}=await ct(async()=>{const{deleteTable:u}=await Promise.resolve().then(()=>xb);return{deleteTable:u}},void 0);for(const u of r)await c(u.id);e.ui.dialogs.toast(`Deleted ${r.length} table${r.length===1?"":"s"} and ${i.length} view${i.length===1?"":"s"}.`,{kind:"success",title:"Gist sync"})}async function ng(e,t){const n=await Xo(e);if(!n)return;if(!n.gistId){await e.ui.dialogs.alert("No gist yet — use the main Gist button to Push the whole workspace first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const i=r.source!=null?[]:await e.store.rows(t).find(),s=JSON.stringify(Wo(r,i),null,2),a={[`${Ge(r.name)}.table.json`]:{content:s}},c=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:a})});if(!c.ok)throw new Error(await vr(c));e.ui.dialogs.toast(`Pushed "${r.name}" to gist.`,{kind:"success",title:"Gist sync"})}async function rg(e,t){const n=await Tr(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const i=`${Ge(r.name)}.table.json`,s=await fetch(`https://api.github.com/gists/${n.gistId}`,{headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json"}});if(!s.ok)throw new Error(await vr(s));const c=(await s.json()).files[i];if(!c){await e.ui.dialogs.alert(`No file "${i}" in the gist for this table.`,"Gist sync");return}const u=await Ei(c),f=JSON.parse(u);if(!f.name||!Array.isArray(f.columns))throw new Error("unexpected file shape (missing name/columns)");if((await e.store.tables.patch(t,{title:f.title,columns:f.columns,...so(f),updatedAt:Date.now()})).source==null){const b=e.store.rows(t),y=await b.find();await b.bulkRemove(y.map(C=>C.id));const v=(f.rows??[]).map(C=>({id:Ee(),tableId:t,data:C,updatedAt:Date.now()}));await b.bulkInsert(v)}e.ui.dialogs.toast(`Pulled "${r.name}" from gist.`,{kind:"success",title:"Gist sync"})}async function ig(e,t){const n=await Tr(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const i=`file-${Ge(r.name)}-table-json`;window.open(`https://gist.github.com/${n.user}/${n.gistId}#${i}`,"_blank","noopener")}function so(e){const t={};return e.view!==void 0&&(t.view=e.view),e.windowGeometry&&(t.windowGeometry=e.windowGeometry),e.sortColumn!==void 0&&(t.sortColumn=e.sortColumn),e.sortAsc!==void 0&&(t.sortAsc=e.sortAsc),e.filters!==void 0&&(t.filters=e.filters),e.labelColumn!==void 0&&(t.labelColumn=e.labelColumn),e.deletedColumns!==void 0&&(t.deletedColumns=e.deletedColumns),e.info!==void 0&&(t.info=e.info),e.source!==void 0&&(t.source=e.source),e.origin!==void 0&&(t.origin=e.origin),t}async function Ei(e,t=n=>fetch(n)){if(!e.truncated)return e.content;if(!e.raw_url)throw new Error("GitHub truncated this file but returned no raw_url");const n=await t(e.raw_url);if(!n.ok)throw new Error(`raw fetch failed: ${n.status} ${n.statusText}`);return n.text()}async function vr(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const sg=Object.freeze(Object.defineProperty({__proto__:null,fetchGistFileContent:Ei,init:Ym,load:Xm,meta:Gm,offerPrune:Cu},Symbol.toStringTag,{value:"Module"})),Su="server-sync:url";function Eu(e){return`server-sync:etag:${e}`}async function Tu(e){const n=(await e.store.settings.findOne(Su))?.value;return typeof n!="string"||n.length===0?null:n.replace(/\/+$/,"")}async function og(e,t){await e.store.settings.upsert({name:Su,value:t.replace(/\/+$/,"")})}async function Iu(e,t){const r=(await e.store.settings.findOne(Eu(t)))?.value;return typeof r=="string"?r:null}async function bn(e,t,n){await e.store.settings.upsert({name:Eu(t),value:n})}function Ki(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function jl(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function Au(e,t,n){const r=Ni(n,t),i=(await e.store.tables.find()).filter(a=>a.workspaceId===t);for(const a of i){const c=e.store.rows(a.id),u=await c.find();await c.bulkRemove(u.map(f=>f.id)),await e.store.tables.remove(a.id)}let s=0;for(const a of r){const c=Ee(),u=await e.store.tables.insert({id:c,workspaceId:t,name:a.name,code:Ge(a.name),columns:a.columns,view:"table",...a.windowGeometry?{windowGeometry:a.windowGeometry}:{},...a.sortColumn?{sortColumn:a.sortColumn,sortAsc:a.sortAsc??!0}:{},updatedAt:Date.now()}),f=a.rows.map(g=>({id:Ee(),tableId:u.id,data:g,updatedAt:Date.now()}));await e.store.rows(u.id).bulkInsert(f),s++}return s}const ag={id:"server-sync",name:"Server Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/server-sync.ts"};function lg(e){e.ui.registerSettings("server-sync","Server Sync",[{key:"url",label:"Server URL",type:"string",scope:"workspace",description:"Base URL of the sync server, e.g. http://localhost:3000"}]),e.ui.registerFooterButton({id:"server-sync:menu",label:"Sync",icon:"cloud_sync",tooltip:"Server sync — push or pull this workspace",onClick:async(t,n)=>{const{AnchoredMenu:r}=await ct(async()=>{const{AnchoredMenu:a}=await Promise.resolve().then(()=>wr);return{AnchoredMenu:a}},void 0),i=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"push",label:"Push (↑)",icon:"cloud_upload"},{id:"pull",label:"Pull (↓)",icon:"cloud_download"}]);if(s)try{s==="push"?await cg(t):s==="pull"&&await ug(t)}catch(a){t.ui.dialogs.toast(`${s==="push"?"Push":"Pull"} failed: ${a.message}`,{kind:"error",title:"Server sync"})}}})}async function cg(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const n=await Ru(e);if(!n)return;const r=await qi(e),i=await Iu(e,t),s={"Content-Type":"application/json"};i&&(s["If-Match"]=`"${i}"`);let a=await fetch(`${n}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:s,body:r});if(a.status===412){const u=await a.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){u.currentEtag&&await bn(e,t,u.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}a=await fetch(`${n}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:r})}if(!a.ok)throw new Error(await Ou(a));const c=Ki(a.headers.get("ETag"));c&&await bn(e,t,c),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${n}.`,{kind:"success",title:"Server sync"})}async function ug(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const n=await Ru(e);if(!n||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const i=await fetch(`${n}/sync/${encodeURIComponent(t)}`);if(i.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!i.ok)throw new Error(await Ou(i));const s=Ki(i.headers.get("ETag")),a=await i.json(),c=await Au(e,t,a);s&&await bn(e,t,s),e.ui.dialogs.toast(`Pulled ${c} table${c===1?"":"s"} from ${n}.`,{kind:"success",title:"Server sync"})}async function Ru(e){const t=await Tu(e);if(t)return t;const n=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!n)return null;try{new URL(n)}catch{return await e.ui.dialogs.alert(`"${n}" is not a valid URL.`,"Server sync"),null}return await og(e,n),n.replace(/\/+$/,"")}async function Ou(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const dg=Object.freeze(Object.defineProperty({__proto__:null,init:lg,meta:ag},Symbol.toStringTag,{value:"Module"})),hg={id:"new-table",name:"New Table",type:"ui",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/new-table-button.ts"};function fg(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const pg=Object.freeze(Object.defineProperty({__proto__:null,init:fg,meta:hg},Symbol.toStringTag,{value:"Module"}));function Vi(e,t="Edit"){const n=document.createElement("button");return n.type="button",n.title=t,n.textContent="✎",n.className="cell-pencil",n.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",n.addEventListener("mouseenter",()=>n.style.color="#374151"),n.addEventListener("mouseleave",()=>n.style.color="#9ca3af"),n.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),e()}),n}function Gi(e,t){const n=document.createElement("span");return n.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%",e.style.flex="1 1 auto",e.style.minWidth="0",e.style.overflow="hidden",n.append(e,t),n}function Wi(e){const t=document.createElement("input");t.type="text",t.value=e.value,t.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0;text-overflow:ellipsis";const n=()=>{e.isLive(t)&&e.onCommit(t.value)};return t.addEventListener("keydown",r=>{r.key==="Enter"?(r.preventDefault(),n()):r.key==="Escape"&&(r.preventDefault(),e.onCancel())}),t.addEventListener("blur",n),setTimeout(()=>{t.focus(),t.select()},0),t}const mg={id:"cell-date",name:"Cell Date",type:"cell-renderer",version:"0.1.0",description:"Renderer for date columns: a native `<input type=date>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"date\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-date.ts"};function gg(e){customElements.get("cell-date")||customElements.define("cell-date",bg),e.ui.registerCellRenderer("date","cell-date")}class bg extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=Wi({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(n),this._editor=n;return}if(wg(this._value)){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",jo(n,`Not a valid date: "${String(this._value)}"`),this.append(this._readonly?n:Gi(n,this.pencil()));return}if(this._readonly){this.textContent=oo(this._value);return}const t=document.createElement("input");t.type="date",t.value=oo(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return Vi(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function oo(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const n=new Date(t);return Number.isNaN(n.getTime())?"":n.toISOString().slice(0,10)}function wg(e){return e==null||typeof e=="string"&&e.trim()===""?!1:oo(e)===""}const yg=Object.freeze(Object.defineProperty({__proto__:null,init:gg,meta:mg},Symbol.toStringTag,{value:"Module"})),vg={id:"cell-datetime",name:"Cell Datetime",type:"cell-renderer",version:"0.1.0",description:"Renderer for datetime columns: a native `<input type=datetime-local>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"datetime\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-datetime.ts"};function xg(e){customElements.get("cell-datetime")||customElements.define("cell-datetime",$g),e.ui.registerCellRenderer("datetime","cell-datetime")}class $g extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=Wi({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(n),this._editor=n;return}if(kg(this._value)){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",jo(n,`Not a valid datetime: "${String(this._value)}"`),this.append(this._readonly?n:Gi(n,this.pencil()));return}if(this._readonly){this.textContent=ao(this._value).replace("T"," ");return}const t=document.createElement("input");t.type="datetime-local",t.value=ao(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return Vi(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function ao(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const n=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(n)return`${n[1]}T${n[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const r=new Date(t);if(Number.isNaN(r.getTime()))return"";const i=r.toISOString();return`${i.slice(0,10)}T${i.slice(11,16)}`}function kg(e){return e==null||typeof e=="string"&&e.trim()===""?!1:ao(e)===""}const _g=Object.freeze(Object.defineProperty({__proto__:null,init:xg,meta:vg},Symbol.toStringTag,{value:"Module"})),Cg={id:"cell-boolean",name:"Cell Boolean",type:"cell-renderer",version:"0.1.0",description:`Renderer for boolean columns: a checkbox for true/false, a grayed-out unchecked box for an empty cell (clickable to set true), and red-bordered raw text with a pencil for a stored value that is none of those. Apply by setting a column's renderer to "boolean".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="8 12 11 15 16 9"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-boolean.ts"};function Sg(e){customElements.get("cell-boolean")||customElements.define("cell-boolean",Eg),e.ui.registerCellRenderer("boolean","cell-boolean")}class Eg extends HTMLElement{constructor(){super(...arguments),this._value=!1,this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const i=Wi({value:this._value==null?"":String(this._value),onCommit:s=>this.commit(s),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:s=>this._editor===s});this.append(i),this._editor=i;return}const t=tu(this._value);if(t==="invalid"){const i=document.createElement("span");i.textContent=String(this._value),i.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",jo(i,`Not a valid boolean: "${String(this._value)}"`),this.append(this._readonly?i:Gi(i,this.pencil()));return}const n=document.createElement("input");n.type="checkbox",n.checked=t==="true";let r="transform:translateY(1px)";t==="empty"&&(r+=";opacity:0.45",n.title="Empty — no value stored. Click to set true."),this._readonly?n.disabled=!0:(r+=";cursor:pointer",n.addEventListener("change",()=>this.commit(n.checked))),n.style.cssText=r,this.append(n)}pencil(){return Vi(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Tg=Object.freeze(Object.defineProperty({__proto__:null,init:Sg,meta:Cg},Symbol.toStringTag,{value:"Module"})),Ig={id:"cell-color",name:"Cell Color",type:"cell-renderer",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2h2.3c2 0 3.6-1.6 3.6-3.6C20.7 6 16.9 3 12 3z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="11" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-color.ts"};function Ag(e){customElements.get("cell-color")||customElements.define("cell-color",Rg),e.ui.registerCellRenderer("color","cell-color")}class Rg extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,n,r){this.value=r}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const n=document.createElement("input");n.type="color",n.value=t,n.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",n.addEventListener("change",()=>this.commit(n.value)),this.append(n)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Og=Object.freeze(Object.defineProperty({__proto__:null,init:Ag,meta:Ig},Symbol.toStringTag,{value:"Module"})),Dg={id:"cell-image",name:"Cell Image",type:"cell-renderer",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-image.ts"};function Pg(e){customElements.get("cell-image")||customElements.define("cell-image",Lg),e.ui.registerCellRenderer("image","cell-image")}class Lg extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t??"",this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this.style.display="block",this.style.minWidth="0",this.style.overflow="hidden",this._editing){const r=document.createElement("span");r.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const i=Wi({value:this._value,onCommit:a=>this.commit(a),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:a=>this._editor===a}),s=document.createElement("button");s.type="button",s.textContent="upload",s.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",s.addEventListener("mousedown",a=>a.preventDefault()),s.addEventListener("click",()=>this.pickFile()),r.append(i,s),this.append(r),this._editor=i;return}const t=document.createElement("span");if(t.style.cssText="display:flex;align-items:center;gap:0.4rem;min-width:0",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const r=document.createElement("img");r.src=this._value,r.alt="",r.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(r)}else{const r=document.createElement("span");if(r.style.color="#9ca3af",r.textContent="no image",t.append(r),!this._readonly){const i=document.createElement("button");i.type="button",i.textContent="upload",i.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",i.addEventListener("click",()=>this.pickFile()),t.append(i)}}this.append(this._readonly?t:Gi(t,this.pencil()))}pencil(){return Vi(()=>{this._editing=!0,this.render()},"Edit the image URL")}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const n=t.files?.[0];if(!n)return;const r=new FileReader;r.onload=()=>this.commit(String(r.result)),r.readAsDataURL(n)}),t.click()}commit(t){const n=t!==this._value;this._value=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Mg=Object.freeze(Object.defineProperty({__proto__:null,init:Pg,meta:Dg},Symbol.toStringTag,{value:"Module"})),Du=200,Pu=100;function jg(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<Du||e.h<Pu?null:{...e}}function Ti(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}function Ng(e,t,n,r){const i=r>0?r:1;return{...e,x:e.x+t/i,y:e.y+n/i}}function zg(e,t,n,r,i,s,a){const c=i>0?i:1,u=n/c,f=r/c;let{x:g,y:b,w:y,h:v}=e;return t.includes("e")&&(y=Math.max(s,e.w+u)),t.includes("s")&&(v=Math.max(a,e.h+f)),t.includes("w")&&(y=Math.max(s,e.w-u),g=e.x+(e.w-y)),t.includes("n")&&(v=Math.max(a,e.h-f),b=e.y+(e.h-v)),{x:g,y:b,w:y,h:v}}function Ug(e){return e?.minimized?{status:"minimized",restoreStatus:e.maximized?"maximized":"normalized"}:e?.maximized?{status:"maximized",restoreStatus:"normalized"}:{status:"normalized",restoreStatus:"normalized"}}function Nl(e,t){if(e.status==="closed")return e;switch(t){case"close":return{...e,status:"closed"};case"minimize":return e.status==="minimized"?e:{status:"minimized",restoreStatus:e.status==="maximized"?"maximized":"normalized"};case"maximize":return{status:"maximized",restoreStatus:"normalized"};case"smallify":return e.status!=="normalized"?e:{...e,status:"smallified"};case"normalize":return e.status==="minimized"?{status:e.restoreStatus,restoreStatus:"normalized"}:{status:"normalized",restoreStatus:"normalized"}}}function Fg(e){return{minimized:e.status==="minimized",maximized:e.status==="maximized"||e.status==="minimized"&&e.restoreStatus==="maximized"}}const Bg="input, textarea, select, button, a, .jsPanel-controlbar";function zl(e){for(const t of e.composedPath())if(t instanceof HTMLElement&&t.matches(Bg))return!0;return!1}const Hg={smallify:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 15 12 9 18 15"/></svg>',minimize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="19" x2="19" y2="19"/></svg>',maximize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="5" width="14" height="14" rx="1"/></svg>',normalize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="4" width="12" height="12" rx="1"/><rect x="4" y="8" width="12" height="12" rx="1"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>'};let qs=100;function Ul(){let e=qs;for(const t of document.querySelectorAll(".jsPanel")){const n=Number(t.style.zIndex);Number.isFinite(n)&&n>e&&(e=n)}return qs=e+1,qs}function qg(e){const t=Number(e.style.zIndex);for(const n of document.querySelectorAll(".jsPanel"))if(n!==e&&Number(n.style.zIndex)>t)return!1;return!0}const lo=new Set;function Kg(){return[...lo].sort((e,t)=>Number(t.style.zIndex)-Number(e.style.zIndex))}function un(e,t,n){const r=document.createElement("button");return r.type="button",r.className=`jsPanel-btn jsPanel-btn-${e}`,r.title=t,r.setAttribute("aria-label",t),r.innerHTML=Hg[e]??"",r.addEventListener("click",i=>{i.stopPropagation(),n()}),r}function Ii(e){const t=document.createElement("div");t.className="jsPanel",t.id=e.id,t.style.setProperty("--eda-panel-color",e.color??"#01579b");const n=document.createElement("div");n.className="jsPanel-hdr";const r=document.createElement("div");r.className="jsPanel-headerbar";const i=document.createElement("div");i.className="jsPanel-headerlogo",i.innerHTML=e.logo??"";const s=document.createElement("div");s.className="jsPanel-titlebar",s.tabIndex=-1,s.style.outline="none",s.addEventListener("pointerdown",()=>s.focus());const a=document.createElement("span");a.className="jsPanel-title",a.textContent=e.title,s.append(a);const c=document.createElement("div");c.className="jsPanel-controlbar",c.append(un("smallify","Collapse",()=>ie("smallify")),un("minimize","Minimize",()=>ie("minimize")),un("maximize","Maximize",()=>t.maximize()),un("normalize","Restore",()=>ie("normalize")),un("close","Close",()=>t.close())),r.append(i,s,c),n.append(r);const u=document.createElement("div");u.className="jsPanel-content",u.append(e.content);const f=document.createElement("div");f.className="jsPanel-ftr",e.footerToolbar&&(f.classList.add("active"),f.append(e.footerToolbar)),t.append(n,u,f);for(const q of["n","s","e","w","ne","nw","se","sw"]){const K=document.createElement("div");K.className="eda-resize",K.dataset.edge=q,t.append(K)}if(t.style.zIndex=String(Ul()),e.container.append(t),e.panelSize)t.style.width=`${e.panelSize.w}px`,t.style.height=`${e.panelSize.h}px`;else{const q=e.contentSize??{w:720,h:360};t.style.width=`${q.w}px`,t.style.height=`${q.h+n.offsetHeight+f.offsetHeight}px`}const g=e.position??"center",b=t.offsetWidth,y=e.container.clientWidth;g==="center"?(t.style.left=`${Math.max(0,(y-b)/2)}px`,t.style.top=`${Math.max(0,(e.container.clientHeight-t.offsetHeight)/2)}px`):"centerTopOffset"in g?(t.style.left=`${Math.max(0,(y-b)/2)}px`,t.style.top=`${g.centerTopOffset}px`):(t.style.left=`${g.x}px`,t.style.top=`${g.y}px`);let v=Ug(e.boot),C=L(),_=null,O=null,M=null;function L(){return{x:t.offsetLeft,y:t.offsetTop,w:t.offsetWidth,h:t.offsetHeight}}function F(q){t.style.left=`${q.x}px`,t.style.top=`${q.y}px`,t.style.width=`${q.w}px`,t.style.height=`${q.h}px`}function V(){const q=e.viewport?.getState()??{x:0,y:0,scale:1};t.style.left="0px",t.style.top="0px",t.style.width=`${e.container.clientWidth}px`,t.style.height=`${e.container.clientHeight}px`,t.style.transformOrigin="0 0",t.style.transform=`translate(${-q.x/q.scale}px, ${-q.y/q.scale}px) scale(${1/q.scale})`}function W(){V(),O??=e.viewport?.subscribe(V)??null,!M&&typeof ResizeObserver<"u"&&(M=new ResizeObserver(V),M.observe(e.container))}function G(){O?.(),O=null,M?.disconnect(),M=null,t.style.transform="",t.style.transformOrigin=""}function H(){const q=document.createElement("div");q.className="jsPanel-replacement",q.id=`${e.id}-min`,q.style.setProperty("--eda-panel-color",e.color??"#01579b");const K=document.createElement("div");K.className="jsPanel-headerlogo",K.innerHTML=i.innerHTML;const ce=document.createElement("span");return ce.className="jsPanel-title",ce.textContent=a.textContent,q.append(K,ce,un("normalize","Restore",()=>{ie("normalize"),t.front()}),un("close","Close",()=>t.close())),q.addEventListener("click",pe=>{pe.target.closest("button")||(ie("normalize"),t.front())}),q}function Y(q){switch(q==="maximized"&&v.status!=="maximized"&&G(),q==="minimized"&&v.status!=="minimized"&&(_?.remove(),_=null,t.style.display=""),v.status){case"minimized":{q==="normalized"?C=L():q==="smallified"&&(C={...C,x:t.offsetLeft,y:t.offsetTop}),t.style.display="none";const K=e.minimizeTo?document.querySelector(e.minimizeTo):null;_=H(),(K??e.container).append(_);break}case"maximized":q==="normalized"?C=L():q==="smallified"&&(C={...C,x:t.offsetLeft,y:t.offsetTop}),W();break;case"smallified":C=L(),t.style.height=`${n.offsetHeight}px`;break;case"normalized":q==="smallified"&&(C={...C,x:t.offsetLeft,y:t.offsetTop}),F(C);break}t.dataset.status=v.status}function ie(q){const K=v;v=Nl(v,q),v.status!==K.status&&(Y(K.status),e.onstatuschange?.(t))}Object.defineProperty(t,"status",{get:()=>v.status}),t.minimize=()=>ie("minimize"),t.maximize=(q,K)=>{ie("maximize"),K!==!0&&t.front()},t.normalize=()=>ie("normalize"),t.smallify=()=>ie("smallify"),t.front=(q,K)=>{t.style.zIndex=String(Ul()),K!==!1&&e.onfronted?.()},t.close=()=>{v.status!=="closed"&&(v=Nl(v,"close"),_?.remove(),G(),lo.delete(t),t.remove(),e.onclosed?.())},t.setHeaderTitle=q=>{a.textContent=q;const K=_?.querySelector(".jsPanel-title");K&&(K.textContent=q)},t.setHeaderLogo=q=>{i.innerHTML=q;const K=_?.querySelector(".jsPanel-headerlogo");K&&(K.innerHTML=q)},t.persistFlags=()=>Fg(v),lo.add(t),t.addEventListener("pointerdown",()=>{qg(t)||t.front()},!0);const se=q=>{q.addEventListener("pointerdown",K=>{if(K.button!==0||zl(K)||v.status==="maximized"||v.status==="minimized")return;const ce=L(),pe=e.viewport?.getState().scale??1,Te=K.clientX,Ne=K.clientY;let gt=!1;const de=Ae=>{gt=!0;const et=Ng(ce,Ae.clientX-Te,Ae.clientY-Ne,pe);t.style.left=`${et.x}px`,t.style.top=`${et.y}px`},Pe=()=>{q.removeEventListener("pointermove",de),q.removeEventListener("pointerup",Pe),q.removeEventListener("pointercancel",Pe),gt&&e.onmoved?.()};q.setPointerCapture(K.pointerId),q.addEventListener("pointermove",de),q.addEventListener("pointerup",Pe),q.addEventListener("pointercancel",Pe)})};se(s),se(i),se(f);for(const q of t.querySelectorAll(".eda-resize"))q.addEventListener("pointerdown",K=>{if(K.button!==0||v.status!=="normalized")return;const ce=q.dataset.edge,pe=L(),Te=e.viewport?.getState().scale??1,Ne=K.clientX,gt=K.clientY;let de=!1;const Pe=et=>{de=!0,F(zg(pe,ce,et.clientX-Ne,et.clientY-gt,Te,Du,Pu))},Ae=()=>{q.removeEventListener("pointermove",Pe),q.removeEventListener("pointerup",Ae),q.removeEventListener("pointercancel",Ae),de&&e.onresized?.()};q.setPointerCapture(K.pointerId),q.addEventListener("pointermove",Pe),q.addEventListener("pointerup",Ae),q.addEventListener("pointercancel",Ae)});return n.addEventListener("dblclick",q=>{zl(q)||(v.status==="maximized"?ie("normalize"):t.maximize())}),v.status!=="normalized"?Y("normalized"):t.dataset.status="normalized",t}function pi(e){return e.source?e.source.type==="url"?"referenced":"connected":e.origin?"imported":"normal"}function Fl(e){return!!(e.source||e.origin)}const dr='viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15" role="img"',Bl={normal:`<svg ${dr} aria-label="Local table"><title>Local table</title><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,imported:`<svg ${dr} aria-label="Imported table (snapshot)"><title>Imported table (snapshot)</title><rect x="3" y="11" width="18" height="10" rx="1"/><line x1="7" y1="15" x2="7" y2="17"/><line x1="12" y1="15" x2="12" y2="17"/><line x1="17" y1="15" x2="17" y2="17"/><path d="M12 2v7"/><polyline points="8 6 12 9 16 6"/></svg>`,referenced:`<svg ${dr} aria-label="Referenced table (read-only)"><title>Referenced table (read-only)</title><path d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1"/><path d="M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1"/></svg>`,connected:`<svg ${dr} aria-label="Connected table (live)"><title>Connected table (live)</title><line x1="9" y1="2" x2="9" y2="7"/><line x1="15" y1="2" x2="15" y2="7"/><rect x="6" y="7" width="12" height="7" rx="2"/><path d="M9 14v3a3 3 0 0 0 6 0v-3"/></svg>`},Vg=`<svg ${dr} aria-label="View"><title>View</title><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;var Gg=Object.defineProperty,Wg=Object.getOwnPropertyDescriptor,Yi=(e,t,n,r)=>{for(var i=r>1?void 0:r?Wg(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Gg(t,n,i),i};function Yg(e,t,n){(kt.instance??Jg()).show(e,t,n)}function Xg(e){if(!e)return null;const t=pi(e);if(t==="connected"||t==="referenced"){const n=e.source?.type??"remote",r=e.source?.writable?"Edits you make are written back to the source.":"It is read-only — edits are not saved back to the source.";return{label:`Connected (live ${n})`,note:`This table is connected to a live ${n} backend: its rows are fetched from the source on demand and are not stored locally. ${r} Closing its window just disconnects the view — the source data is untouched.`}}return t==="imported"?{label:"Imported (snapshot)",note:"This table is a local snapshot imported once from its origin. The rows live in this browser, so edits stay local; use Refresh to re-fetch the latest data from the origin.",...e.origin?{url:e.origin.url}:{}}:{label:"Local",note:"This table was created in the app and is stored locally in your browser."}}function Jg(){const e=document.createElement("table-info-dialog");return document.body.appendChild(e),e}let kt=class extends ve{constructor(){super(...arguments),this.name="",this.info=null,this.provenance=null,this.dialogEl=null,this.close=()=>this.dialogEl?.close(),this.onSubmit=e=>{e.preventDefault(),this.close()}}connectedCallback(){super.connectedCallback(),kt.instance=this}disconnectedCallback(){super.disconnectedCallback(),kt.instance===this&&(kt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pt(this.dialogEl,e)}show(e,t,n){this.name=e,this.info=t,this.provenance=n??null,this.updateComplete.then(()=>this.dialogEl?.showModal())}row(e,t,n){if(!t&&!n)return re;const r=n?$`<a href=${n} target="_blank" rel="noopener noreferrer">${t||n}</a>`:$`${t}`;return $`<dt>${e}</dt>
      <dd>${r}</dd>`}render(){const e=this.info,t=!!(e?.source||e?.sourceUrl||e?.license||e?.licenseUrl||e?.about||e?.aboutUrl),n=Xg(this.provenance);return $`
      <dialog @cancel=${this.close} @keydown=${ft}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>×</button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>${this.name}</h2>
            <div class="header-actions">
              <button type="submit" class="ghost">Close</button>
            </div>
          </div>
          <div class="dialog-body">
            ${n?$`<div class="kind">
                  <span class="kind-label">${n.label}</span>
                  <p class="kind-note">${n.note}</p>
                  ${n.url?$`<div class="kind-origin">
                        <a href=${n.url} target="_blank" rel="noopener noreferrer"
                          >${n.url}</a
                        >
                      </div>`:re}
                </div>`:re}
            ${e?.descriptionHtml?$`<div class="desc">${An(e.descriptionHtml)}</div>`:e?.description?$`<div class="desc">${e.description}</div>`:re}
            ${t?$`<dl>
                  ${this.row("Source",e?.source,e?.sourceUrl)}
                  ${this.row("License",e?.license,e?.licenseUrl)}
                  ${this.row("About",e?.about,e?.aboutUrl)}
                </dl>`:re}
            ${!e?.description&&!e?.descriptionHtml&&!t&&!n?$`<p class="empty">No additional information.</p>`:re}
          </div>
        </form>
      </dialog>
    `}};kt.instance=null;kt.styles=[ht,$e`
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
    `];Yi([U()],kt.prototype,"name",2);Yi([U()],kt.prototype,"info",2);Yi([U()],kt.prototype,"provenance",2);kt=Yi([Ce("table-info-dialog")],kt);const Qg=.25,Zg=4;function eb(e){return Math.min(Zg,Math.max(Qg,e))}function Hl(e,t,n){return{x:e.x+t,y:e.y+n,scale:e.scale}}const ar={x:0,y:0,scale:1};function ql(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function tb(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function nb(e,t){let n={...ar};t.style.transformOrigin="0 0";const r=new Set,i=()=>{t.style.transform=`translate(${n.x}px, ${n.y}px) scale(${n.scale})`;for(const K of r)K({...n})};let s="none",a={...ar},c=0,u=0,f=0,g=0,b=0,y=0;const v=(K,ce)=>{const pe=e.getBoundingClientRect();return{x:K-pe.left,y:ce-pe.top}},C=K=>{if(K.touches.length===2){s="pinch",a={...n};const[ce,pe]=[K.touches[0],K.touches[1]];f=ql(ce,pe)||1;const Te=v((ce.clientX+pe.clientX)/2,(ce.clientY+pe.clientY)/2);g=(Te.x-n.x)/n.scale,b=(Te.y-n.y)/n.scale,K.preventDefault();return}if(K.touches.length===1&&!tb(K.target)){const ce=K.timeStamp;if(ce-y<300){n={...ar},i(),y=0,s="none",K.preventDefault();return}y=ce,s="pan",a={...n},c=K.touches[0].clientX,u=K.touches[0].clientY}else s="none"},_=K=>{if(s==="pan"&&K.touches.length===1){const ce=K.touches[0];n=Hl(a,ce.clientX-c,ce.clientY-u),i(),K.preventDefault()}else if(s==="pinch"&&K.touches.length>=2){const[ce,pe]=[K.touches[0],K.touches[1]],Te=eb(a.scale*(ql(ce,pe)/f)),Ne=v((ce.clientX+pe.clientX)/2,(ce.clientY+pe.clientY)/2);n={x:Ne.x-g*Te,y:Ne.y-b*Te,scale:Te},i(),K.preventDefault()}},O=K=>{K.touches.length===0?s="none":K.touches.length===1&&s==="pinch"&&(s="pan",a={...n},c=K.touches[0].clientX,u=K.touches[0].clientY)};let M=!1,L={...ar},F=0,V=0,W=!1;const G=(K,ce)=>{const pe=e.getBoundingClientRect();return K>=pe.left&&K<=pe.right&&ce>=pe.top&&ce<=pe.bottom},H=K=>{if(!M)return;const ce=K.clientX-F,pe=K.clientY-V;!W&&Math.hypot(ce,pe)<4||(W=!0,document.body.style.cursor="grabbing",n=Hl(L,ce,pe),i(),K.preventDefault())},Y=()=>{M&&(M=!1,document.body.style.cursor="",window.removeEventListener("mousemove",H,!0),window.removeEventListener("mouseup",ie,!0))};function ie(){Y()}const se=K=>{K.button===2&&G(K.clientX,K.clientY)&&(M=!0,W=!1,L={...n},F=K.clientX,V=K.clientY,window.addEventListener("mousemove",H,!0),window.addEventListener("mouseup",ie,!0))},q=K=>{W&&(K.preventDefault(),W=!1)};return e.addEventListener("touchstart",C,{passive:!1}),e.addEventListener("touchmove",_,{passive:!1}),e.addEventListener("touchend",O),e.addEventListener("touchcancel",O),window.addEventListener("mousedown",se,!0),window.addEventListener("contextmenu",q,!0),{snapshot:()=>({...n}),reset:()=>{n={...ar},i()},restore:K=>{n={...K},i()},subscribe:K=>(r.add(K),()=>r.delete(K)),dispose:()=>{e.removeEventListener("touchstart",C),e.removeEventListener("touchmove",_),e.removeEventListener("touchend",O),e.removeEventListener("touchcancel",O),window.removeEventListener("mousedown",se,!0),window.removeEventListener("contextmenu",q,!0),Y()}}}const ci=new Map;function Xi(e,t){const r=(ci.get(e)??Promise.resolve()).then(t,t);return ci.set(e,r),r.finally(()=>{ci.get(e)===r&&ci.delete(e)}),r}let Ks=0;function Lu(){return Ks=Math.max(Date.now(),Ks+1),Ks}const Ji=new Map;function Mu(e,t){Ji.set(e,t)}function Qi(e){Ji.delete(e)}function rb(e){return Ji.has(e)}function ib(e){try{Ji.get(e)?.()}catch{}}const Pn=(()=>{const e=new URLSearchParams(location.search).get("minimize");return e===null?!1:!/^(0|false|no)$/i.test(e)})();function sb(e){return e.filter(t=>!t.minimized).slice().sort((t,n)=>(t.z??-1/0)-(n.z??-1/0)).map(t=>t.id)}let Kl=!1;async function ob(){Kl||(Kl=!0,document.addEventListener("easydb:restack-windows",()=>void Vl())),await Vl()}async function Vl(){if(Pn)return;const e=await ae();for(let t=0;t<=12;t++){const[n,r]=await Promise.all([e.store.tables.find(),e.store.viewInstances.find()]),i=[...n.filter(a=>a.workspaceId===e.workspaceId&&!a.windowGeometry?.closed).map(a=>({id:a.id,z:a.windowGeometry?.z,minimized:a.windowGeometry?.minimized===!0})),...r.filter(a=>a.workspaceId===e.workspaceId&&a.open).map(a=>({id:a.id,z:a.windowGeometry?.z,minimized:a.windowGeometry?.minimized===!0}))],s=sb(i);if(t<12&&!s.every(a=>rb(a))){await new Promise(a=>setTimeout(a,80));continue}for(const a of s)ib(a);return}}var ab=Object.defineProperty,lb=Object.getOwnPropertyDescriptor,Ir=(e,t,n,r)=>{for(var i=r>1?void 0:r?lb(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&ab(t,n,i),i};let wn=class extends ve{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return $`<button
        class="icon ${e?"active":""}"
        title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"}
        @click=${this.openSearch}
      >
        <span class="mi sm">search</span>
      </button>`}return $`<input
      type="search"
      placeholder="search…"
      .value=${this.query}
      @input=${this.onInput}
      @blur=${this.onBlur}
    />`}};wn.styles=[mt,$e`
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
    `];Ir([dt({type:String})],wn.prototype,"tableId",2);Ir([U()],wn.prototype,"query",2);Ir([U()],wn.prototype,"open",2);Ir([Dt("input")],wn.prototype,"inputEl",2);wn=Ir([Ce("panel-search")],wn);var cb=Object.defineProperty,ub=Object.getOwnPropertyDescriptor,Un=(e,t,n,r)=>{for(var i=r>1?void 0:r?ub(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&cb(t,n,i),i};let Xt=class extends ve{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.rowsActive=!1,this.runTableButton=async(e,t)=>{const n=t?.currentTarget??void 0,r=await ae();try{await Promise.resolve(e.onClick(r.api,{tableId:this.tableId,anchor:n}))}catch(i){console.error(`[table-button:${e.id}]`,i)}}}async connectedCallback(){super.connectedCallback();const e=await ae();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(n=>n.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await ae();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await ae(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const n={};for(const r of t.columns)n[r.field]=db(r);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:n,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}render(){return $`
      ${this.table?.readonly?re:$`<button title="Add a blank row" aria-label="Add row" @click=${this.addRow}>
            <span class="mi sm">add</span>
          </button>`}
      <button title="Edit columns" aria-label="Columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span>
      </button>
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>$`<button
              class=${e.danger?"danger":""}
              title=${e.tooltip??e.label}
              aria-label=${e.label}
              @click=${t=>this.runTableButton(e,t)}
            >
              ${e.icon?e.icon.trimStart().startsWith("<svg")?$`<span class="icon-svg">${xo(e.icon)}</span>`:$`<span class="mi sm">${e.icon}</span>`:$`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};Xt.styles=[mt,$e`
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
    `];Un([dt({type:String})],Xt.prototype,"tableId",2);Un([dt({type:Boolean})],Xt.prototype,"active",2);Un([U()],Xt.prototype,"rowCount",2);Un([U()],Xt.prototype,"tableButtons",2);Un([U()],Xt.prototype,"table",2);Xt=Un([Ce("panel-footer")],Xt);function db(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function Vs(e){return e.title?.trim()?e.title.trim():e.name}function hb(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function fb(e){const t=document.querySelector("app-shell")?.shadowRoot,n=t?.querySelector("header"),r=t?.querySelector("footer");n&&(e.style.top=`${n.offsetHeight}px`),r&&(e.style.bottom=`${r.offsetHeight}px`)}const Wt=new Map,ju=new Set;let Gl=!1,Nu=null;function Ai(){return Nu}function xr(){return{getState:()=>Ai()?.snapshot()??{x:0,y:0,scale:1},subscribe:e=>Ai()?.subscribe(e)??(()=>{})}}async function zu(){const e=await ae();await Promise.all([...Wt.keys()].map(t=>mi(t,e)))}function Uu(e){const t=Wt.get(e);return t?(t.status==="minimized"&&t.normalize(),t.front(),!0):(pb(e),!0)}async function pb(e){const t=await ae(),n=await t.store.tables.findOne(e);n?.windowGeometry?.closed&&await t.store.tables.patch(e,{windowGeometry:{...n.windowGeometry,closed:!1},updatedAt:Date.now()})}async function Fu(e){const t=await ae();await vb(e,t)}async function Bu(){if(Gl)return;Gl=!0;const e=await ae(),t=document.getElementById("easydb-panels"),n=document.getElementById("easydb-panels-viewport");if(t&&n){Nu=nb(t,n);const i=()=>fb(t);i(),window.addEventListener("resize",i);const s=document.querySelector("app-shell")?.shadowRoot,a=s?.querySelector("header"),c=s?.querySelector("footer");if(typeof ResizeObserver<"u"&&(a||c)){const u=new ResizeObserver(i);a&&u.observe(a),c&&u.observe(c)}}const r=(await e.store.tables.find()).filter(i=>i.workspaceId===e.workspaceId);r.sort(Ti);for(const i of r)i.windowGeometry?.closed||Wl(i,e);e.store.tables.subscribe(i=>{const s=i.filter(u=>u.workspaceId===e.workspaceId),a=new Map(s.map(u=>[u.id,u]));for(const[u,f]of Wt){const g=a.get(u);if(!g||g.windowGeometry?.closed){Wt.delete(u),Qi(u),ju.add(u);try{f.status!=="closed"&&f.close()}catch{}}}const c=s.filter(u=>!Wt.has(u.id)&&!u.windowGeometry?.closed).sort(Ti);for(const u of c)Wl(u,e)}),ob()}const Hu=720,qu=360;function Wl(e,t){const n=`panel-${Ku(e.id)}`,r=hb(),i=jg(e.windowGeometry),s=Pn||i?.minimized===!0,a=()=>{const se=document.createElement("data-table");return se.tableId=e.id,se.style.height="100%",se},c=s?document.createElement("div"):a();let u=s?null:c,f=Vs(e),g=-1,b=-1;const y=()=>{F.setHeaderTitle(f+Qc(g,b))},v=se=>{const q=se.detail;q.key===e.id&&(g=q.count,b=q.total,y())};document.addEventListener(_i,v);const C=()=>{M.active=!1,u?.remove(),u=null},_=()=>{if(u)return;const se=document.getElementById(n)?.querySelector(".jsPanel-content");if(!se)return;se.replaceChildren();const q=a();se.appendChild(q),u=q,M.active=!0},O=document.createElement("panel-search");O.tableId=e.id;const M=document.createElement("panel-footer");M.tableId=e.id,M.active=!s;const L=async()=>{if(document.removeEventListener(_i,v),Wt.delete(e.id),Qi(e.id),ju.delete(e.id))return;const se=await t.store.tables.findOne(e.id);if(!se)return;const q=se.windowGeometry??{x:60,y:60,w:720,h:360,z:1,minimized:!1,maximized:!1};await t.store.tables.patch(e.id,{windowGeometry:{...q,closed:!0},updatedAt:Date.now()})},F=Ii({id:n,container:r,title:f,logo:Bl[pi(e)],color:"#01579b",content:c,footerToolbar:M,...i?{panelSize:{w:i.w,h:i.h},position:{x:i.x,y:i.y}}:{contentSize:{w:Hu,h:qu},position:gb()},minimizeTo:"#easydb-minimized-dock",viewport:xr(),boot:{minimized:s,maximized:!Pn&&i?.maximized===!0},onmoved:()=>void mi(e.id,t),onresized:()=>void mi(e.id,t),onfronted:()=>void wb(e.id,t),onstatuschange:se=>{se.status==="minimized"?C():(se.status==="normalized"||se.status==="maximized")&&_(),mi(e.id,t)},onclosed:()=>void L()});Wt.set(e.id,F),Mu(e.id,()=>F.front(void 0,!1));const V=document.getElementById(n),W=V?.querySelector(".jsPanel-controlbar");W&&W.prepend(O),Fl(e)&&V?.classList.add("eda-refreshable");let G=null;const H=document.createElement("button");H.type="button",H.title="Table info",H.setAttribute("aria-label","Table info"),H.className="eda-info-btn",H.textContent="ⓘ",H.style.cssText="display:none;background:none;border:0;color:inherit;cursor:pointer;font-size:1rem;line-height:1;padding:0 0.3rem;",H.addEventListener("click",se=>{se.stopPropagation(),G&&Yg(f,G.info??{},{source:G.source,origin:G.origin})}),W?.prepend(H);const Y=se=>{G=se??null;const q=!!(se?.info||se?.source||se?.origin);H.style.display=q?"inline-flex":"none"};Y(e);let ie=pi(e);t.store.tables.subscribe(se=>{const q=se.find(ce=>ce.id===e.id);if(!q)return;Y(q),Vs(q)!==f&&(f=Vs(q),y());const K=pi(q);K!==ie&&(ie=K,F.setHeaderLogo(Bl[K]),V?.classList.toggle("eda-refreshable",Fl(q)))})}let mb=0;function gb(){const e=mb++;return{x:40+e%8*30,y:80+e%8*30}}function mi(e,t){return Xi(`table:${e}`,()=>bb(e,t))}async function bb(e,t){const n=document.getElementById(`panel-${Ku(e)}`);if(!n)return;const r=Wt.get(e),i=r?.status??"normalized",s=r?.persistFlags()??{minimized:!1,maximized:!1};try{const c=(await t.store.tables.findOne(e))?.windowGeometry,u=Pn?c?.minimized??!1:s.minimized,f=Pn?c?.maximized??!1:s.maximized;let g=n.offsetLeft,b=n.offsetTop,y=n.offsetWidth,v=n.offsetHeight;(i==="minimized"||i==="maximized")&&(c?(g=c.x,b=c.y,y=c.w,v=c.h):(g=0,b=0,y=Hu,v=qu)),g<=-9e3&&(g=c?.x??40);const _={x:g,y:b,w:y,h:v,z:c?.z??0,minimized:u,maximized:f};await t.store.tables.patch(e,{windowGeometry:_,updatedAt:Date.now()})}catch{}}function wb(e,t){return Xi(`table:${e}`,()=>yb(e,t))}async function yb(e,t){try{const n=await t.store.tables.findOne(e);if(!n)return;const r=n.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...r,z:Lu()},updatedAt:Date.now()})}catch{}}async function vb(e,t){if(!(await t.store.tables.findOne(e))?.source){const r=t.store.rows(e),i=await r.find();await r.bulkRemove(i.map(s=>s.id))}await t.store.tables.remove(e)}function Ku(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}const xb=Object.freeze(Object.defineProperty({__proto__:null,FORCE_MINIMIZED:Pn,currentPanZoom:Ai,deleteTable:Fu,focusTableWindow:Uu,initWindowManager:Bu,persistTablePanelGeometry:zu,shellViewport:xr},Symbol.toStringTag,{value:"Module"})),$b=/<\/?[a-z][a-z0-9]*(\s[^<>]*)?\/?>|&[a-z][a-z0-9]*;|&#\d+;|&#x[0-9a-f]+;/i;function Vu(e){return $b.test(e)}function kb(e){return e.replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"').replace(/&apos;|&#39;/gi,"'").replace(/&nbsp;/gi," ").replace(/&#x([0-9a-f]+);/gi,(t,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&#(\d+);/g,(t,n)=>String.fromCodePoint(Number(n))).replace(/&amp;/gi,"&")}function _b(e){if(typeof document<"u"){const t=document.createElement("div");return t.innerHTML=e,t.textContent??""}return kb(e.replace(/<[^>]*>/g,""))}function Cb(e){return(Vu(e)?_b(e):e).replace(/\s+/g," ").trim()}const Sb={id:"html-preview",name:"HTML Preview",type:"cell-renderer",version:"0.3.0",description:`Shows a cell's HTML as a plain-text preview (first N characters); click to edit the raw HTML in a dialog, or use the popup icon to view the full rendered HTML in a window. Apply by setting a column's renderer to "html-preview". For direct in-cell rendering use the "html" renderer instead.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-preview.ts"};let co=30;async function Yl(e){const t=await e.settings.get("html-preview","maxChars");typeof t=="number"&&Number.isFinite(t)&&t>0&&(co=Math.floor(t))}function Eb(e){customElements.get("html-preview-cell")||customElements.define("html-preview-cell",Tb),e.ui.registerCellRenderer("html-preview","html-preview-cell"),e.ui.registerSettings("html-preview","HTML Preview",[{key:"maxChars",label:"Max characters shown",type:"number",default:30,scope:"workspace",description:"HTML-preview cells show the first N characters of the text; use the popup icon on the right to open the full rendered HTML in a window. Applies to cells rendered after the change (reload to refresh all)."}]),Yl(e),e.events.on("app:ready",()=>void Yl(e))}function Xl(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}let Jl=0;class Tb extends HTMLElement{constructor(){super(...arguments),this._value="",this._label="HTML"}set value(t){const n=t??"";this._value!==n&&(this._value=n,this.render())}get value(){return this._value}set column(t){this._label=t?.label??"HTML"}connectedCallback(){this.render()}render(){if(this.innerHTML="",!this._value){const a=document.createElement("span");a.style.cssText="color:#9ca3af;cursor:text",a.textContent="empty",a.title="Click to edit the HTML",a.addEventListener("click",()=>this.openEditor()),this.append(a);return}const t=document.createElement("span");t.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%";const n=document.createElement("span"),r=Cb(this._value);n.textContent=r.length>co?r.slice(0,co)+"…":r,n.title="Click to edit the HTML",n.style.cssText="flex:0 1 auto;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:text",n.addEventListener("click",a=>{a.stopPropagation(),this.openEditor()});const i=document.createElement("span");i.style.cssText="flex:1 1 auto";const s=document.createElement("button");s.type="button",s.title="Open the HTML in a window",s.setAttribute("aria-label","Open the HTML in a window"),s.innerHTML='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3h7v7"/><path d="M21 3l-9 9"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/></svg>',s.style.cssText="flex:none;display:inline-flex;align-items:center;justify-content:center;padding:1px;background:none;border:0;color:#9ca3af;cursor:pointer;line-height:0",s.addEventListener("mouseenter",()=>s.style.color="#4b5563"),s.addEventListener("mouseleave",()=>s.style.color="#9ca3af"),s.addEventListener("click",a=>{a.stopPropagation(),this.openWindow()}),t.append(n,i,s),this.append(t)}openWindow(){const t=document.createElement("div");if(t.style.cssText="padding:0.75rem;overflow:auto;height:100%;box-sizing:border-box",Vu(this._value))t.innerHTML=this._value;else{const n=document.createElement("pre");n.style.cssText="white-space:pre-wrap;word-break:break-word;margin:0;font-family:ui-monospace, monospace;",n.textContent=this._value,t.append(n)}Ii({id:`easydb-html-popup-${++Jl}`,container:Xl(),title:this._label,color:"#7c3aed",content:t,contentSize:{w:520,h:400},position:{centerTopOffset:60},minimizeTo:"#easydb-minimized-dock",viewport:xr()})}openEditor(){const t=document.createElement("div");t.style.cssText="display:flex;flex-direction:column;gap:0.5rem;height:100%;box-sizing:border-box;padding:0.5rem";const n=document.createElement("textarea");n.value=this._value,n.style.cssText="flex:1 1 auto;width:100%;box-sizing:border-box;resize:none;font-family:monospace;font-size:0.85rem";const r=document.createElement("div");r.style.cssText="display:flex;justify-content:flex-end;gap:0.5rem;flex:none";const i=document.createElement("button");i.type="button",i.textContent="Cancel",i.style.cssText="padding:0.3rem 0.8rem;cursor:pointer";const s=document.createElement("button");s.type="button",s.textContent="Save",s.style.cssText="padding:0.3rem 0.8rem;cursor:pointer;background:#7c3aed;color:#fff;border:0;border-radius:0.25rem",r.append(i,s),t.append(n,r);const a=Ii({id:`easydb-html-edit-${++Jl}`,container:Xl(),title:`Edit ${this._label}`,color:"#7c3aed",content:t,contentSize:{w:520,h:400},position:"center",minimizeTo:"#easydb-minimized-dock",viewport:xr()});i.addEventListener("click",()=>a.close()),s.addEventListener("click",()=>{this._value=n.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:n.value},bubbles:!0,composed:!0})),a.close(),this.render()}),n.addEventListener("keydown",c=>{c.key==="Enter"&&(c.ctrlKey||c.metaKey)?(c.preventDefault(),s.click()):c.key==="Escape"&&(c.preventDefault(),a.close())}),setTimeout(()=>n.focus(),0)}}const Ib=Object.freeze(Object.defineProperty({__proto__:null,init:Eb,meta:Sb},Symbol.toStringTag,{value:"Module"})),Ab={id:"html-render",name:"HTML",type:"cell-renderer",version:"0.1.0",description:`Renders a cell's value directly as HTML (unescaped, in full, no popup). Apply by setting a column's renderer to "html". For a truncated preview use "html-preview".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-render.ts"};function Rb(e){customElements.get("html-render-cell")||customElements.define("html-render-cell",Ob),e.ui.registerCellRenderer("html","html-render-cell")}class Ob extends HTMLElement{constructor(){super(...arguments),this._value="",this.editing=!1}set value(t){const n=t??"";this._value!==n&&(this._value=n,this.editing||this.render())}get value(){return this._value}connectedCallback(){this.editing||this.render()}render(){this.innerHTML="";const t=document.createElement("span");t.style.cssText="display:inline-block;min-width:1ch;cursor:text",t.title="Click to edit",this._value?t.innerHTML=this._value:(t.style.color="#9ca3af",t.textContent="empty"),t.addEventListener("click",()=>this.beginEdit()),this.append(t)}beginEdit(){this.editing=!0,this.innerHTML="";const t=document.createElement("input");t.type="text",t.value=this._value,t.style.cssText="width:100%;box-sizing:border-box";let n=!1;const r=()=>{n||(n=!0,this.editing=!1,this._value=t.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:t.value},bubbles:!0,composed:!0})),this.render())};t.addEventListener("blur",r),t.addEventListener("keydown",i=>{i.key==="Enter"?(i.preventDefault(),t.blur()):i.key==="Escape"&&(i.preventDefault(),n=!0,this.editing=!1,this.render())}),this.append(t),t.focus(),t.select()}}const Db=Object.freeze(Object.defineProperty({__proto__:null,init:Rb,meta:Ab},Symbol.toStringTag,{value:"Module"})),Pb={id:"cell-link",name:"Cell Link",type:"cell-renderer",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-link.ts"};function Lb(e){customElements.get("cell-link")||customElements.define("cell-link",Mb),e.ui.registerCellRenderer("link","cell-link")}class Mb extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1,this._editor=null,this._raw=null}set value(t){const n=t==null?"":String(t);this._value!==n&&(this._value=n,this._editing=!1,this.render())}get value(){return this._value}set rawValue(t){const n=t==null?"":String(t);this._raw!==n&&(this._raw=n,this._editing&&this.render())}get rawValue(){return this._raw??this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="",this._editor=null;const t=this._value,n=this._editing?null:jb(t),r=!this._editing&&!n?Nb(t):null,i=!this._editing&&!n&&!r?zb(t):null;if(n||r||i){const s=document.createElement("span");s.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const a=document.createElement("a");a.href=n?t:r?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,n&&(a.target="_blank",a.rel="noopener noreferrer"),a.textContent=t,a.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",a.title=n?`Open ${t}`:r?`Email ${t}`:`Call ${t}`;const c=document.createElement("button");c.type="button",c.title="Edit",c.textContent="✎",c.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",c.addEventListener("click",u=>{u.preventDefault(),u.stopPropagation(),this._editing=!0,this.render()}),s.append(a,c),this.append(s)}else{const s=document.createElement("input");s.type="text",s.value=this.rawValue,s.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",s.addEventListener("change",()=>{this._editor===s&&this.commit(s.value)}),s.addEventListener("keydown",a=>{a.key==="Enter"?(a.preventDefault(),this.commit(s.value)):a.key==="Escape"&&(this._editor=null,this._editing=!1,this.render())}),s.addEventListener("blur",()=>{this._editor===s&&this.commit(s.value)}),this.append(s),this._editor=s,this._editing&&setTimeout(()=>{s.focus(),s.select()},0)}}commit(t){const n=t!==this.rawValue;this._raw===null?this._value=t:this._raw=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function jb(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function Nb(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function zb(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const n=t.replace(/\D/g,"");if(n.length<7||n.length>15)return null;const r=/[ ()\-.]/.test(t),i=t.startsWith("+");return!r&&!i&&n.length<10?null:t}const Ub=Object.freeze(Object.defineProperty({__proto__:null,init:Lb,meta:Pb},Symbol.toStringTag,{value:"Module"})),fr={id:"auto-renderer",name:"Auto Renderer",type:"cell-renderer",version:"0.1.0",description:"After any import, gives columns a renderer based on their values: link for URLs, image for image URLs, html-preview for markup or long text.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 3 8 6.5 4.5 8 8 9.5 9.5 13 11 9.5 14.5 8 11 6.5 9.5 3z"/><path d="M17.5 12 16.75 14 15 14.75 16.75 15.5 17.5 17.5 18.25 15.5 20 14.75 18.25 14 17.5 12z"/><path d="M4 17h9"/><path d="M4 21h6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-renderer.ts"},Fb=120,Gu=50,Bb=/\.(png|jpe?g|gif|webp|svg|avif|bmp|ico)(\?|#|$)/i,Hb=/<[a-z][a-z0-9-]*(\s[^<>]*)?\/?>/i;function Wu(e){return/^https?:\/\/\S+$/i.test(e)}function qb(e){return/^data:image\//i.test(e)?!0:Wu(e)&&Bb.test(e)}function Yu(e,t){if(e!=="string")return;const n=[];for(const i of t){if(i==null)continue;const s=typeof i=="string"?i.trim():String(i).trim();s&&n.push(s)}if(n.length===0)return;if(n.every(qb))return"image";if(n.every(Wu))return"link";if(n.some(i=>Hb.test(i))||n.reduce((i,s)=>i+s.length,0)/n.length>Fb)return"html-preview"}function Jo(e,t){return t.length===0?[...e]:e.map(n=>{if(n.renderer)return n;const r=Yu(n.type,t.map(i=>i[n.field]));return r?{...n,renderer:r}:n})}function Kb(e){e.events.on("import:after",({tableId:t})=>{Vb(e,t)}),e.ui.registerColumnEditorAction({id:"auto-renderer:guess",label:"Guess renderers",icon:"auto_fix_high",tooltip:"Pick a renderer for each column from what its values look like",async run(t,{columns:n,tableId:r}){if(!r)return t.ui.dialogs.toast("Guessing needs rows to look at — import or add data first.",{kind:"info",title:fr.name}),null;const i=(await t.store.rows(r).find()).slice(0,Gu);if(i.length===0)return t.ui.dialogs.toast("This table has no rows to learn from yet.",{kind:"info",title:fr.name}),null;const s=n.map(({renderer:u,...f})=>f),a=Jo(s,i.map(u=>u.data)),c=a.filter((u,f)=>u.renderer!==n[f]?.renderer).length;return t.ui.dialogs.toast(c===0?"No renderer fits these values — columns left as they are.":`Set ${c} renderer${c===1?"":"s"}. Press Save to keep them.`,{kind:c===0?"info":"success",title:fr.name}),a}})}async function Vb(e,t){try{const n=await e.store.tables.findOne(t);if(!n||n.columns.length===0||n.columns.every(s=>s.renderer))return;const r=(await e.store.rows(t).find()).slice(0,Gu);if(r.length===0)return;const i=Jo(n.columns,r.map(s=>s.data));if(i.every((s,a)=>s.renderer===n.columns[a]?.renderer))return;await e.store.tables.upsert({...n,columns:i,updatedAt:Date.now()})}catch(n){e.events.emit("plugin:error",{url:fr.id,phase:"runtime",error:n})}}const Gb=Object.freeze(Object.defineProperty({__proto__:null,inferRenderer:Yu,init:Kb,meta:fr,withInferredRenderers:Jo},Symbol.toStringTag,{value:"Module"})),Wb={id:"delete-table",name:"Delete Table",type:"ui",version:"0.1.0",description:"Adds a trash button to each table window that permanently deletes the table and its rows (with confirmation).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/delete-table.ts"};function Yb(e){e.ui.registerTableButton({id:"delete-table:delete",label:"Delete",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="#7f1d1d" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',tooltip:"Delete this table permanently",onClick:async(t,n)=>{const r=await t.store.tables.findOne(n.tableId);!r||!await t.ui.dialogs.confirm(r.source?`Delete the live table "${r.name}"? Its data stays on the server — only the local connection is removed.`:`Permanently delete table "${r.name}" and all its rows? This can't be undone.`,"Delete table")||(await Fu(n.tableId),t.ui.dialogs.toast(`Deleted "${r.name}".`,{kind:"success",title:"Delete table"}))}})}const Xb=Object.freeze(Object.defineProperty({__proto__:null,init:Yb,meta:Wb},Symbol.toStringTag,{value:"Module"}));var Jb=Object.defineProperty,Qb=Object.getOwnPropertyDescriptor,Qo=(e,t,n,r)=>{for(var i=r>1?void 0:r?Qb(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Jb(t,n,i),i};function Xu(e,t){return(_t.instance??Zb()).open(e,t)}function Zb(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let _t=class extends ve{constructor(){super(...arguments),this.rows=[],this.subject="",this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((n,r)=>{const i=this.rows[r],s=i.field.trim(),a=i.label.trim()||s;return{...n,field:s,label:a,hidden:i.hidden}});this.finish(t)},this.toggleAllHidden=()=>{const e=this.rows.length>0&&this.rows.every(t=>t.hidden);this.rows=this.rows.map(t=>({...t,hidden:!e}))}}connectedCallback(){super.connectedCallback(),_t.instance=this}disconnectedCallback(){super.disconnectedCallback(),_t.instance===this&&(_t.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pt(this.dialogEl,e)}open(e,t){return this.source=e,this.subject=t??"",this.rows=e.map(n=>({field:n.field,label:n.label,hidden:!!n.hidden})),new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((n,r)=>{const i=n.field.trim().toLowerCase();if(i===""){e.add(r);return}(t.get(i)??t.set(i,[]).get(i)).push(r)});for(const n of t.values())if(n.length>1)for(const r of n)e.add(r);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,n){this.rows=this.rows.map((r,i)=>i===e?{...r,[t]:n}:r)}setHidden(e,t){this.rows=this.rows.map((n,r)=>r===e?{...n,hidden:t}:n)}render(){const e=this.invalidIndices(),t=e.size;return $`
      <dialog @cancel=${this.onCancel} @keydown=${ft}>
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
              ${this.rows.map((n,r)=>$`
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
    `}};_t.instance=null;_t.styles=[ht,$e`
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
    `];Qo([U()],_t.prototype,"rows",2);Qo([U()],_t.prototype,"subject",2);_t=Qo([Ce("column-names-dialog")],_t);const ew=Object.freeze(Object.defineProperty({__proto__:null,get ColumnNamesDialog(){return _t},editColumnNames:Xu},Symbol.toStringTag,{value:"Module"}));async function tw(e,t,n){const r=t.origin?.url;if(!r)throw new Error(`"${t.name}" has no source URL to reload from.`);const i={api:e,fetchText:(W,G)=>Mi(e,W,G??`Reading ${t.name}…`,{maxBytes:null}),panel:{}},s=await n.list(i,{kind:"url",url:r});if(s.length===0)throw new Error(`Nothing to read at ${r} any more.`);const a=s.find(W=>W.name===t.name)??(s.length===1?s[0]:void 0);if(!a)throw new Error(`"${t.name}" is no longer one of the tables at ${r}.`);let c=[];const u=[];for await(const W of n.read(i,a))W.columns?.length&&(c=W.columns),u.push(...W.rows);const{columns:f,newFields:g}=ji(t.columns,c,t.deletedColumns??[]),b=t.origin?.pks??[],y=new Set(c.map(W=>W.field)),v=t.columns.map(W=>W.field).filter(W=>!y.has(W)&&!b.includes(W)),C=(t.deletedColumns??[]).filter(W=>y.has(W)),_=e.store.rows(t.id),O=await _.find(),{data:M,merged:L}=Yc({oldRows:O.map(W=>({data:W.data})),freshRows:u,pks:b,userAddedFields:v,deletedRemoteFields:C}),F=Date.now();f.length>0&&await e.store.tables.patch(t.id,{columns:f,updatedAt:F}),await _.bulkRemove(O.map(W=>W.id));const V=M.map(W=>({id:Ee(),tableId:t.id,data:W,updatedAt:F}));return await _.bulkInsert(V),{rowCount:V.length,newFields:g,merged:L}}var nw=Object.defineProperty,rw=Object.getOwnPropertyDescriptor,Be=(e,t,n,r)=>{for(var i=r>1?void 0:r?rw(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&nw(t,n,i),i};const iw="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",sw="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",ow='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',Ql=[{label:"Northwind — sample database (JSON dump)",url:iw,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:sw,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],aw={id:"import-data",name:"Import Data",type:"importer",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/import-data.ts"};function lw(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:ow,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>uw(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:n})=>cw(t,n)})}async function cw(e,t){const n=await e.store.tables.findOne(t);if(n?.origin?.url)try{const r=await Ju(n.origin.type);if(!r)throw new Error(`No importer is installed that can read a "${n.origin.type}" source.`);const i=await tw(e,n,r),s=[];i.newFields.length>0&&s.push(`${i.newFields.length} new column${i.newFields.length===1?"":"s"}`),!i.merged&&i.rowCount>0&&s.push("rows replaced (no primary key to match on)"),e.ui.dialogs.toast(`Refreshed "${n.name}" (${i.rowCount.toLocaleString()} rows)${s.length?` — ${s.join(", ")}`:""}.`,{kind:i.newFields.length>0?"warning":"success",title:"Refresh"})}catch(r){e.ui.dialogs.toast(`Couldn't refresh "${n.name}": ${r.message}`,{kind:"error",title:"Refresh"})}}async function uw(e,t="auto"){const r=await(_e.instance??bw()).open({presetKind:t,async listDatabases(_){const O=Ot(_);return ru(M=>e.backend.fetch(M),O.base)},async listTables(){const _=e.workspaceId();return(await e.store.tables.find()).filter(O=>O.workspaceId===_&&!O.source).map(O=>({id:O.id,name:O.name})).sort((O,M)=>O.name.localeCompare(M.name))}});if(!r)return;const{url:i,file:s,kind:a,dbChosen:c,editColumns:u,maxRows:f,mode:g,panel:b,target:y}=r,v=s?.name??i,C=u?(_,O)=>Xu(_,O):void 0;typeof b.separator=="string"&&b.separator;try{const _=await Ju(a);if(_){const O=a==="json"?await dw(e,i,s,f,g):null;if(O?.isDump&&await e.ui.dialogs.confirm(`"${v}" is a workspace dump, not a plain table. Restore it — tables, window layout, views and filters? Choose Cancel to import only its tables as data.`,"Restore workspace")){await Po(e,O.text,v,{maxRows:f,editColumns:C,...s?{}:{originUrl:i}});return}const M=s?s.name:Mn(i),L=O?{kind:"text",text:O.text,name:M}:s?{kind:"file",file:s}:{kind:"url",url:i},F=await qc(e,_,L,{mode:g,target:y,maxRows:f,panel:b,...O&&!s?{origin:{type:_.id,url:i}}:{},...C?{editColumns:V=>C(V)}:{}});_.ownToasts||hw(e,F,v);return}if(g==="reference"&&!s){a==="datasette"?await gw(e,i):await Qu(e,i,a);return}await Vo(e,i,{skipTablePicker:c,maxRows:f,editColumns:C})}catch(_){e.ui.dialogs.toast(`Could not import ${v}: ${_.message}`,{kind:"error",title:"Import"})}}async function dw(e,t,n,r,i){if(i==="reference")return null;const s=n?await n.text():await Mi(e,t,`Reading ${Mn(t)}…`,r!=null?{maxBytes:null}:{});try{return{text:s,isDump:Do(JSON.parse(s))}}catch{return{text:s,isDump:!1}}}async function Ju(e){const{registries:t}=await ae();return t.importers.find(n=>n.id===e&&n.supports?.kernel===!0)}function hw(e,t,n){if(t.cancelled&&t.landed.length===0)return;const r=t.landed.reduce((a,c)=>a+c.rowCount,0),i=t.landed.length===1?`"${t.landed[0].tableName}"`:`${t.landed.length} tables from ${n}`;if(t.landed.length>0){const a=t.failed.length>0?` — ${t.failed.length} failed`:"";e.ui.dialogs.toast(`Imported ${i} (${r.toLocaleString()} rows)${a}.`,{kind:t.failed.length>0?"warning":"success",title:"Import"});return}const s=t.failed.map(a=>`${a.name}: ${a.error}`).join("; ");e.ui.dialogs.toast(`Could not import ${n}${s?` — ${s}`:""}.`,{kind:"error",title:"Import"})}function fw(e){const t=JSON.parse(e),n=r=>Array.isArray(r)&&r.every(i=>i!=null&&typeof i=="object"&&!Array.isArray(i));if(n(t))return t;if(t&&typeof t=="object"){const r=t;for(const i of["rows","records","data"])if(n(r[i]))return r[i];for(const i of Object.values(r))if(n(i))return i}return[]}function pw(e){const t=fw(e).slice(0,50),n=i=>typeof i=="number"?"number":typeof i=="boolean"?"boolean":"string",r=new Map;for(const i of t)for(const[s,a]of Object.entries(i))!r.has(s)&&a!=null?r.set(s,n(a)):r.has(s)||r.set(s,"string");return[...r.entries()].map(([i,s])=>({field:i,label:i,type:s}))}function mw(e,t,n){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(n)}.json?_size=max`}async function gw(e,t){const n=Ot(t),i=await qo(c=>e.backend.fetch(c),n,"Reference");if(i===null)return;if(i.length===0)throw new Error("No tables found to reference at that URL.");let s=0;const a=[];for(const c of i)try{await Qu(e,mw(n.base,c.db,c.table),"json",{nameHint:`${c.db}/${c.table}`,silent:!0}),s++}catch(u){a.push(`${c.table}: ${u.message}`)}e.ui.dialogs.toast(`Referenced ${s} table${s===1?"":"s"}${a.length?` — ${a.length} failed`:""}.`,{kind:a.length?"warning":"success",title:"Reference"})}async function Qu(e,t,n,r={}){const i=e.workspaceId();if(!i)throw new Error("No active workspace.");const s=r.nameHint??Mn(t),a=await Mi(e,t,`Reading ${s}…`,{maxBytes:null}),c=n==="csv"?jn(a).columns:pw(a);if(c.length===0)throw new Error("No columns found in the referenced data.");const u=new Set((await e.store.tables.find()).filter(b=>b.workspaceId===i).map(b=>b.name.toLowerCase()));let f=s;for(let b=2;u.has(f.toLowerCase());b++)f=`${s}-${b}`;const g={id:Ee(),workspaceId:i,name:f,code:Ge(f),columns:c,view:"table",source:{type:"url",config:{url:t,format:n}},readonly:!0,updatedAt:Date.now()};await e.store.tables.insert(g),r.silent||e.ui.dialogs.toast(`Referenced ${f} — live, read-only.`,{kind:"success",title:"Reference"})}function bw(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function ww(e){try{const t=new URL(e),n=t.hostname.toLowerCase(),r=[...t.searchParams.keys()].some(s=>s.startsWith("_")),i=n.includes("datasette")||r;return!r&&/\.(csv|tsv|tab)$/i.test(t.pathname)?"csv":!r&&/\.json$/i.test(t.pathname)?"json":i?"datasette":"json"}catch{return"json"}}function Zl(e,t){if(t!=="datasette"||!e)return!1;try{const n=Ot(e);return!n.db&&!n.table}catch{return!1}}function yw(e){return/\.(csv|tsv|tab)$/i.test(e)?"csv":"json"}let _e=class extends ve{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.targetKind="new",this.targetTableId="",this.tables=[],this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.panelEl=null,this.mountedPanel="",this.panelGeneration=0,this.formats=[],this.acceptAttr=".txt",this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t&&!this.file)return;const n=this.resolvedKind,r=this.maxRows,i=this.editColumns&&this.mode==="copy",s=this.panelValue(),a=this.supportsTarget?this.target:{kind:"new"},c=this.file?"copy":this.mode;if(this.file){this.finish({url:"",file:this.file,kind:n,editColumns:i,maxRows:r,mode:c,panel:s,target:a});return}const u=n==="datasette"&&!!this.selectedDb&&Zl(t,n),f=u?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:f,kind:n,dbChosen:u,editColumns:i,maxRows:r,mode:c,panel:s,target:a})}}get supportsTarget(){return this.formats.find(e=>e.id===this.resolvedKind)?.kernel===!0}get target(){return this.mode==="reference"||this.targetKind==="new"||!this.targetTableId?{kind:"new"}:{kind:this.targetKind,tableId:this.targetTableId}}get resolvedKind(){return this.kind!=="auto"?this.kind:this.file?yw(this.file.name):ww(this.url.trim())}get maxRows(){const e=Math.floor(Number(this.maxRowsInput));return Number.isFinite(e)&&e>0?e:void 0}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),_e.instance=this}disconnectedCallback(){super.disconnectedCallback(),_e.instance===this&&(_e.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pt(this.dialogEl,e)}updated(){const e=this.shadowRoot?.querySelector(".panel-slot");if(!e){this.panelEl=null,this.mountedPanel="";return}const t=this.activePanelTag,n=t?`${t}#${this.panelGeneration}`:"";if(n===this.mountedPanel||(e.replaceChildren(),this.panelEl=null,this.mountedPanel=n,!t))return;const r=document.createElement(t);r.addEventListener("change",()=>this.requestUpdate()),e.appendChild(r),this.panelEl=r}get activePanelTag(){return this.formats.find(e=>e.id===this.resolvedKind)?.panel}get activeLabel(){return this.formats.find(e=>e.id===this.resolvedKind)?.label??this.resolvedKind}panelValue(){const e=this.panelEl?.value;return e&&typeof e=="object"?e:{}}async loadFormats(){const{registries:e}=await ae(),t=[...e.importers].sort((i,s)=>(i.order??Number.MAX_SAFE_INTEGER)-(s.order??Number.MAX_SAFE_INTEGER)).map(i=>({id:i.id,label:i.label,panel:i.panel,kernel:i.supports?.kernel})),n=t.some(i=>i.id==="datasette")?t:[...t,{id:"datasette",label:"Datasette (table or instance)"}];this.formats=n;const r=new Set([".txt"]);for(const i of e.importers)for(const s of i.accept??[])r.add(s);this.acceptAttr=[...r].join(",")}open(e){this.targetKind="new",this.targetTableId="",this.tables=[],e?.listTables?.().then(n=>{this.tables=n}),this.url="",this.kind=e?.presetKind??"auto",this.presetIdx=-1,this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.panelGeneration+=1,this.resetDbList(),this.listDatabases=e?.listDatabases??null;const t=this.loadFormats();return new Promise(n=>{this.resolveFn=n,t.then(()=>this.updateComplete).then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const n=Ql[t];n&&(this.url=n.url,this.kind=n.kind)}onFileChange(e){const n=e.target.files?.[0]??null;this.file=n,n&&(this.url="",this.presetIdx=-1,this.resetDbList())}renderDbPicker(){return!this.listDatabases||!Zl(this.url.trim(),this.resolvedKind)?re:$`
      <label>
        Database
        <div class="row db-row">
          <select
            .value=${this.selectedDb}
            ?disabled=${!this.dbList||this.dbList.length===0}
            @change=${e=>{this.selectedDb=e.target.value}}
          >
            ${this.dbList?$`
                  <option value="" ?selected=${this.selectedDb===""}>
                    — all databases (choose tables next) —
                  </option>
                  ${this.dbList.map(e=>$`<option value=${e} ?selected=${e===this.selectedDb}>${e}</option>`)}
                `:$`<option value="">— not loaded —</option>`}
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
      ${this.dbError?$`<p class="hint error">${this.dbError}</p>`:re}
    `}renderTarget(){if(!this.supportsTarget||this.mode==="reference")return re;const e=this.targetKind!=="new";return $`
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
          ${e?$`<select
                data-testid="import-target-table"
                .value=${this.targetTableId}
                @change=${t=>{this.targetTableId=t.target.value}}
              >
                ${this.tables.length===0?$`<option value="">— no tables yet —</option>`:this.tables.map(t=>$`<option value=${t.id} ?selected=${t.id===this.targetTableId}>
                          ${t.name}
                        </option>`)}
              </select>`:re}
        </div>
      </label>
      ${e?$`<p class="hint">
            The table keeps its own columns. Values map onto them the way the format requires — a
            CSV by column position, so its header names need not match.
          </p>`:re}
    `}renderPluginBlock(){const e=this.renderDbPicker();return!!!this.activePanelTag&&e===re?re:$`
      <fieldset class="block">
        <legend>${this.activeLabel} options</legend>
        <div class="panel-slot"></div>
        ${e}
      </fieldset>
    `}render(){return $`
      <dialog @cancel=${this.onCancel} @keydown=${ft}>
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
                ${this.formats.map(e=>$`<option value=${e.id} ?selected=${this.kind===e.id}>${e.label}</option>`)}
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
                  ${Ql.map((e,t)=>$`<option value=${String(t)} ?selected=${t===this.presetIdx}>
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
              ${this.file?$`<p class="hint">
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
              ${this.file?$`<p class="hint">Uploaded files can only be imported as a Copy.</p>`:re}
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
              ${this.mode==="reference"?$`<p class="hint">
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
    `}};_e.instance=null;_e.styles=[ht,$e`
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
    `];Be([U()],_e.prototype,"url",2);Be([U()],_e.prototype,"kind",2);Be([U()],_e.prototype,"presetIdx",2);Be([U()],_e.prototype,"dbList",2);Be([U()],_e.prototype,"dbLoading",2);Be([U()],_e.prototype,"dbError",2);Be([U()],_e.prototype,"selectedDb",2);Be([U()],_e.prototype,"editColumns",2);Be([U()],_e.prototype,"file",2);Be([U()],_e.prototype,"maxRowsInput",2);Be([U()],_e.prototype,"mode",2);Be([U()],_e.prototype,"targetKind",2);Be([U()],_e.prototype,"targetTableId",2);Be([U()],_e.prototype,"tables",2);Be([U()],_e.prototype,"formats",2);Be([U()],_e.prototype,"acceptAttr",2);_e=Be([Ce("import-dialog")],_e);const vw=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return _e},init:lw,meta:aw},Symbol.toStringTag,{value:"Module"})),xw={id:"auto-sync",name:"Auto Sync",type:"sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-sync.ts"},$w=6e4;let ec=null,uo=!1;const Gs=new Map;function kw(e){ec===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(ec=setInterval(()=>{Zu(e)},$w)))}async function Zu(e){if(uo)return;const t=e.workspaceId();if(!t)return;const n=await Tu(e);if(n)try{await _w(e,n,t)}catch(r){console.warn("[auto-sync]",r)}}async function _w(e,t,n){const r=await qi(e),i=await Iu(e,n),s=await fetch(`${t}/sync/${encodeURIComponent(n)}`);if(s.status===404){await tc(e,t,n,r,null);return}if(!s.ok)return;const a=Ki(s.headers.get("ETag")),c=await s.text();if(jl(r)===jl(c)){a&&a!==i&&await bn(e,n,a);return}if(a&&a===i){await tc(e,t,n,r,i);return}if(!(a&&Gs.get(n)===a)){uo=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${n}". Pull and replace your local copy?`,"auto-sync")){const f=JSON.parse(c),g=await Au(e,n,f);a&&await bn(e,n,a),Gs.delete(n),e.ui.dialogs.toast(`Pulled ${g} table${g===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else a&&Gs.set(n,a)}finally{uo=!1}}}async function tc(e,t,n,r,i){const s={"Content-Type":"application/json"};i&&(s["If-Match"]=`"${i}"`);const a=await fetch(`${t}/sync/${encodeURIComponent(n)}`,{method:"PUT",headers:s,body:r});if(a.ok){const c=Ki(a.headers.get("ETag"));c&&await bn(e,n,c);return}if(a.status===412){const c=await a.json().catch(()=>({}));c.currentEtag&&await bn(e,n,c.currentEtag)}}const ed=Object.freeze(Object.defineProperty({__proto__:null,load:kw,meta:xw,tick:Zu},Symbol.toStringTag,{value:"Module"}));var Cw=Object.defineProperty,Sw=Object.getOwnPropertyDescriptor,Fn=(e,t,n,r)=>{for(var i=r>1?void 0:r?Sw(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Cw(t,n,i),i};function ho(e,t){(at.instance??Ew()).open(e,t)}function Ew(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function Ws(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let at=class extends ve{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.mode==="template"?this.saveTemplate():this.mode==="instance"?this.saveInstance():this.close()}}connectedCallback(){super.connectedCallback(),at.instance=this}disconnectedCallback(){super.disconnectedCallback(),at.instance===this&&(at.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pt(this.dialogEl,e)}async open(e,t){if(this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),t?.editTemplateId){const n=this.templates.find(r=>r.id===t.editTemplateId);n&&this.editTemplate(n)}else if(t?.editInstanceId){const n=this.instances.find(r=>r.id===t.editInstanceId);n&&await this.editInstance(n)}await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await ae(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(n=>n.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((n,r)=>n.name.localeCompare(r.name))}async openInstance(e){await(await ae()).store.viewInstances.patch(e,{open:!0,updatedAt:Date.now()}),this.close()}async editInstance(e){const n=await(await ae()).store.viewTemplates.findOne(e.templateId),r=n?Ol(n.headerHtml,n.rowHtml,n.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:n?.name??"template",name:e.name,tokens:r,mapping:{...e.mapping},limit:e.limit??0,readonly:e.readonly??!1},this.mode="instance"}async deleteInstance(e){await(await ae()).store.viewInstances.remove(e),await this.refresh()}async copyInstance(e){const t=await ae(),n=this.columns.filter(i=>!i.hidden).map(i=>i.field),r={...e,id:Ws(),name:`${e.name} copy`,visibleColumns:n,open:!1,windowGeometry:void 0,updatedAt:Date.now()};await t.store.viewInstances.insert(r),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async deleteTemplate(e){const t=await ae();await t.api.ui.dialogs.confirm(e.builtin?`Delete the built-in template "${e.name}"? It will not be seeded again in this workspace. Views already created from it keep working.`:`Delete the template "${e.name}"? Views already created from it keep working.`,e.builtin?"Delete built-in template":"Delete template")&&(await t.store.viewTemplates.remove(e.id),document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh())}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await ae(),n=this.templates.find(r=>r.id!==e.id&&r.name.trim().toLowerCase()===e.name.trim().toLowerCase());if(n){await t.api.ui.dialogs.alert(`A template called “${n.name}” already exists. Pick another name.`,"Duplicate template name");return}if(e.id){const r=this.templates.find(i=>i.id===e.id)?.builtin;await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,...r?{builtin:!1}:{},updatedAt:Date.now()})}else await t.store.viewTemplates.insert({id:Ws(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()});document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh(),this.mode="list"}useTemplate(e){const t=Ol(e.headerHtml,e.rowHtml,e.footerHtml),n={};for(const r of t)n[r]=this.autoMap(r);this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:n,limit:0,readonly:!1},this.mode="instance"}firstColumn(e){const t=this.columns.find(e);return t?t.field:""}autoMap(e){const t=e.toLowerCase(),n=this.columns.find(b=>b.field.toLowerCase()===t||(b.label??"").toLowerCase()===t);if(n)return n.field;const r=/^check(\d+)$/i.exec(e);if(r){const b=Number(r[1])-1;return this.columns.filter(v=>v.type==="boolean")[b]?.field??""}if(["done","complete","completed","checked","check","read","active","enabled","starred","flag","ok"].includes(t))return this.firstColumn(b=>b.type==="boolean");const s=this.table?.labelColumn;if(s&&(t==="title"||t==="name"||t==="label"))return s;if(["date","datetime","time","created","updated","modified","timestamp","day","when"].includes(t))return this.firstColumn(b=>b.type==="date"||b.type==="datetime");const c=["url","link","href","website","homepage","uri","site","web"];if(c.includes(t)){const b=this.firstColumn(y=>y.renderer==="link");return b||this.firstColumn(y=>{const v=y.field.toLowerCase(),C=(y.label??"").toLowerCase();return c.some(_=>v.includes(_)||C.includes(_))})}const u=b=>y=>{const v=y.field.toLowerCase(),C=(y.label??"").toLowerCase();return b.some(_=>v.includes(_)||C.includes(_))},f=["image","img","photo","picture","pic","thumbnail","thumb","avatar","cover","poster","logo","icon"];if(f.includes(t)){const b=this.firstColumn(v=>v.renderer==="image");if(b)return b;const y=this.firstColumn(u(f));return y||this.firstColumn(u(["url","src","href","link"]))}if(["email","mail","e-mail"].includes(t))return this.firstColumn(u(["mail"]));if(["phone","tel","telephone","mobile","cell","cellphone"].includes(t))return this.firstColumn(u(["phone","tel","mobile","cell"]));const g=["description","desc","notes","note","body","text","summary","about","comment","comments","details","detail","remarks"];if(g.includes(t)){const b=this.firstColumn(_=>{if(_.type!=="string")return!1;const O=_.field.toLowerCase(),M=(_.label??"").toLowerCase();return g.some(L=>O.includes(L)||M.includes(L))});if(b)return b;const y=this.columns.filter(_=>_.type==="string"),v=y[0];if(!v)return"";let C=v;for(const _ of y)(_.max??0)>(C.max??0)&&(C=_);return C.field}return""}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await ae();if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},limit:e.limit>0?e.limit:void 0,readonly:e.readonly,updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.mode="list";return}const n=this.columns.filter(i=>!i.hidden).map(i=>i.field),r={id:Ws(),workspaceId:t.workspaceId,tableId:this.tableId,tableName:this.table.name,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:n,mapping:{...e.mapping},updatedAt:Date.now(),...e.limit>0?{limit:e.limit}:{},...e.readonly?{readonly:!0}:{}};await t.store.viewInstances.insert(r),await this.openInstance(r.id)}renderList(){return $`
      <div class="section">
        <h3>Views of “${this.table?.name??""}”</h3>
        <ul class="list">
          ${this.instances.map(e=>$`<li>
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
          ${this.templates.map(e=>$`<li>
                <span class="name">${e.name}</span>
                ${e.builtin?$`<span class="badge">built-in</span>`:re}
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
    `}renderTemplate(){const e=this.tDraft,t=n=>r=>{this.tDraft={...e,[n]:r.target.value}};return $`
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
    `}renderInstance(){const e=this.iDraft;return $`
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
        ${e.tokens.length===0?$`<p class="hint">
              This template has no <code>$TOKEN</code> placeholders — it will show the read-only
              table with your current sort, filter and visible columns.
            </p>`:e.tokens.map(t=>$`<div class="map-row">
                  <code>$${t}</code>
                  <select
                    @change=${n=>this.iDraft={...e,mapping:{...e.mapping,[t]:n.target.value}}}
                  >
                    <option value="" ?selected=${!e.mapping[t]}>— none —</option>
                    ${this.columns.map(n=>$`<option value=${n.field} ?selected=${e.mapping[t]===n.field}>
                          ${n.label||n.field}
                        </option>`)}
                  </select>
                </div>`)}
      </div>
      <p class="hint">
        ${e.id?$`Editing name and column mapping. The snapshotted sort, filters and visible columns
            are kept.`:$`The view snapshots this table's current sort, filters and visible columns.`}
      </p>
    `}render(){const e=this.mode==="template"?this.tDraft?.id?"Edit template":"New template":this.mode==="instance"?`${this.iDraft?.id?"Edit":"New"} view — ${this.iDraft?.templateName??""}`:"Views",t=this.mode==="template"?$`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
              Back
            </button>
            <button type="submit" class="primary">Save</button>`:this.mode==="instance"?$`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
                Back
              </button>
              <button type="submit" class="primary">
                ${this.iDraft?.id?"Save":"Create view"}
              </button>`:$`<button type="submit" class="ghost">Close</button>`;return $`
      <dialog @cancel=${this.close} @keydown=${ft}>
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
    `}};at.instance=null;at.styles=[ht,$e`
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
    `];Fn([U()],at.prototype,"mode",2);Fn([U()],at.prototype,"instances",2);Fn([U()],at.prototype,"templates",2);Fn([U()],at.prototype,"tDraft",2);Fn([U()],at.prototype,"iDraft",2);at=Fn([Ce("views-dialog")],at);const Tw={id:"views",name:"Views",type:"ui",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/views.ts"},Iw="grid_view",Aw={slug:"rss",name:"RSS Feed",header:'<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>','<div style="display:flex;gap:16px;margin-top:8px;">$input.CHECK1$input.CHECK2</div>',"</div>"].join(""),footer:"</div>"},Rw={slug:"todo-list",name:"Todo List",header:'<div style="display:flex;flex-direction:column;gap:6px;padding:12px;max-width:720px;margin:0 auto;">',row:['<div style="display:flex;align-items:center;gap:10px;border:1px solid #e5e7eb;border-radius:8px;padding:8px 12px;background:#ffffff;">',"$input.DONE",'<span style="flex:1;font-weight:500;color:#111827;">$TITLE</span>','<span style="color:#6b7280;font-size:0.8rem;white-space:nowrap;">$DUE</span>',"</div>"].join(""),footer:"</div>"},Ow={slug:"gallery",name:"Gallery",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;padding:12px;">',row:['<figure style="margin:0;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$LINK" target="_blank" rel="noopener noreferrer" style="display:block;text-decoration:none;color:inherit;">','<img src="$IMAGE" alt="$TITLE" loading="lazy" style="width:100%;height:150px;object-fit:cover;display:block;background:#f3f4f6;" />','<figcaption style="padding:6px 8px;font-size:0.85rem;color:#374151;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">$TITLE</figcaption>',"</a>","</figure>"].join(""),footer:"</div>"},Dw={slug:"contact-cards",name:"Contact Cards",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:10px;padding:12px 14px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<div style="font-weight:600;color:#111827;font-size:0.95rem;">$NAME</div>','<a href="mailto:$EMAIL" style="color:#2563eb;text-decoration:none;font-size:0.85rem;word-break:break-all;">$EMAIL</a>','<div style="color:#6b7280;font-size:0.85rem;margin-top:2px;">$PHONE</div>',"</div>"].join(""),footer:"</div>"},Pw=[Aw,Rw,Ow,Dw];function Lw(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:Iw,tooltip:"Views -- display this table through a template",onClick:(t,{tableId:n})=>ho(n)})}async function Mw(e){await Nw(e)}function jw(e){let t=5381;const n=`${e.header} ${e.row} ${e.footer}`;for(let r=0;r<n.length;r++)t=(t<<5)+t+n.charCodeAt(r)|0;return(t>>>0).toString(36)}async function Nw(e){const t=e.workspaceId();if(!t)return;const n=await e.store.viewTemplates.find({workspaceId:t});for(const r of Pw)await zw(e,t,r,n)}async function zw(e,t,n,r){const i=`views:seeded:${n.slug}:${t}`,s=`views:sig:${n.slug}:${t}`,a=jw(n),c=r.find(f=>f.builtin&&f.name===n.name);if(c){(await e.store.settings.findOne(s))?.value!==a&&(await e.store.viewTemplates.patch(c.id,{headerHtml:n.header,rowHtml:n.row,footerHtml:n.footer,updatedAt:Date.now()}),await e.store.settings.upsert({name:s,value:a})),await e.store.settings.upsert({name:i,value:!0});return}(await e.store.settings.findOne(i))?.value||(await e.store.viewTemplates.insert({id:Uw(),workspaceId:t,name:n.name,headerHtml:n.header,rowHtml:n.row,footerHtml:n.footer,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({name:i,value:!0}),await e.store.settings.upsert({name:s,value:a}))}function Uw(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Fw=Object.freeze(Object.defineProperty({__proto__:null,init:Lw,load:Mw,meta:Tw},Symbol.toStringTag,{value:"Module"})),Bw={id:"settings",name:"Settings",type:"ui",fixed:!0,version:"0.1.0",description:"Header gear button that opens the tabbed Settings dialog; imports dropped secrets.txt.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/settings.ts"};function Hw(e){e.ui.registerHeaderButton({id:"settings:open",label:"Settings",icon:"settings",tooltip:"Workspace and plugin settings",variant:"secondary",onClick:()=>e.ui.openSettings()}),e.ui.registerDropHandler(async(t,n)=>{const i=Array.from(t.dataTransfer?.files??[]).find(c=>c.name.toLowerCase()==="secrets.txt");if(!i)return!1;const s=await i.text(),a=Object.keys(br(s)).length;return Li().trim().length>0&&!await n.ui.dialogs.confirm(`Replace your current secrets with ${a} secret${a===1?"":"s"} from "${i.name}"?`,"Import secrets")||(Ic(s),n.ui.dialogs.toast(`Imported ${a} secret${a===1?"":"s"}.`,{kind:"success",title:"Secrets"})),!0})}const qw=Object.freeze(Object.defineProperty({__proto__:null,init:Hw,meta:Bw},Symbol.toStringTag,{value:"Module"}));function Kw(e,t){const n=e.sources[0];if(!n)return[];let i=(t[n.alias]??[]).map(u=>({[n.alias]:u}));for(let u=1;u<e.sources.length;u++){const f=e.sources[u];if(!f)continue;const g=t[f.alias]??[],b=f.join,y=[];for(const v of i){const C=b?g.filter(_=>b.on.every(O=>Gw(_.data[O.field],v[O.eqAlias]?.data[O.eqField]))):[];if(C.length>0)for(const _ of C)y.push({...v,[f.alias]:_});else b?.type==="left"&&y.push({...v,[f.alias]:void 0})}i=y}const s=[],a=new Map,c=e.limit!=null&&e.limit>0?e.limit:1/0;for(const u of i){if(s.length>=c)break;const f=u[n.alias];if(!f)continue;const g=Vw(e.columns,u);if(!Ww(g,e.filters))continue;const b=a.get(f.id)??0;a.set(f.id,b+1),s.push({id:`${f.id}#${b}`,tableId:"",data:g,updatedAt:Yw(u)})}return s}function Vw(e,t){const n={};for(const r of e){if(r.from.kind!=="source")continue;const i=t[r.from.alias]?.data[r.from.field];n[r.field]=i===void 0?null:i}for(const r of e)if(r.from.kind==="script"){const i=Mo(r.from.script,n);n[r.field]=i.ok?i.value:void 0}return n}function Gw(e,t){return e==null||t==null?!1:e===t?!0:typeof e!="object"&&typeof t!="object"?String(e)===String(t):!1}function Ww(e,t){if(!t)return!0;for(const[n,r]of Object.entries(t)){if(!r)continue;const i=e[n];if(!(i==null?"":String(i)).toLowerCase().includes(r.toLowerCase()))return!1}return!0}function Yw(e){let t=0;for(const n of Object.values(e))n&&n.updatedAt>t&&(t=n.updatedAt);return t}function Zi(e){const t=e.sources[0]?.alias,n=new Set;if(!t)return n;for(const r of e.columns)r.from.kind==="source"&&r.from.alias===t&&n.add(r.field);return n}function Xw(e,t,n=[],r=[]){const i=Zi(e),s=new Map(n.map(g=>[g.field,g])),a=new Set(r),c=new Map;for(const g of e.columns)!a.has(g.field)&&!c.has(g.field)&&c.set(g.field,g);const u=[];for(const g of n)c.has(g.field)&&!u.includes(g.field)&&u.push(g.field);for(const g of c.keys())u.includes(g)||u.push(g);const f=[];for(const g of u){const b=c.get(g);if(!b)continue;const y=s.get(b.field);let v;if(y)v={...y};else if(b.from.kind==="source"){const C=b.from,_=(t[C.alias]??[]).find(O=>O.field===C.field);v=_?{..._,field:b.field}:{field:b.field,label:b.label??b.field,type:b.type??"string"},No(C.field)&&(v.hidden=!0)}else v={field:b.field,label:b.label??b.field,type:b.type??"string"},v.script=b.from.script;i.has(b.field)?delete v.readonly:v.readonly=!0,f.push(v)}return f}function Jw(e){const t=e.sources[0]?.alias,n=new Map;if(!t)return n;for(const r of e.columns)r.from.kind==="source"&&r.from.alias===t&&!n.has(r.from.field)&&n.set(r.from.field,r.field);return n}function Qw(e,t){const n=Jw(e),r={},i=t.sortBy&&t.sortBy.length>0?t.sortBy:t.sortColumn?[{field:t.sortColumn,asc:t.sortAsc??!0}]:[],s=[];for(const a of i){const c=n.get(a.field);c&&s.push({field:c,asc:a.asc})}if(s.length>0){r.sortBy=s;const a=s[0];a&&(r.sortColumn=a.field,r.sortAsc=a.asc)}if(t.filters){const a={};for(const[c,u]of Object.entries(t.filters)){const f=n.get(c);f&&u&&(a[f]=u)}Object.keys(a).length>0&&(r.filters=a)}return r}function Zw(e,t,n){if(e.tableId){const r=t.get(e.tableId);if(r&&r.name===e.tableName)return r}return n.get(e.tableName)}function ey(e,t){const n=new Map(t.map(s=>[s.id,s])),r=new Map;for(const s of t)r.has(s.name)||r.set(s.name,s);const i=(s,a)=>{if(a.has(s))return!0;const c=n.get(s);if(c?.source?.type!=="projection")return!1;const u=c.source.config;if(!u||!Array.isArray(u.sources))return!1;const f=new Set(a).add(s);for(const g of u.sources){const b=Zw(g,n,r);if(b&&i(b.id,f))return!0}return!1};return i(e,new Set)}const lr=e=>e.toLowerCase().replace(/[^a-z0-9]/g,""),Ys=e=>e.endsWith("s")&&e.length>1?e.slice(0,-1):e,nc=e=>e==="id"||e.endsWith("id");function ty(e,t){const n=lr(e.field),r=lr(t.field);if(!n||!r)return 0;const i=lr(e.table)===lr(t.table);if(n===r)return i||n==="id"?0:n.endsWith("id")?9:7;const s=(c,u,f)=>{if(c!=="id"||!f.endsWith("id")||f.length<=2)return 0;const g=f.slice(0,-2),b=lr(u);return g===b||g===Ys(b)||Ys(g)===Ys(b)?9:5},a=Math.max(s(n,e.table,r),s(r,t.table,n));return a>0?a:e.isPk&&nc(r)||t.isPk&&nc(n)?6:0}function ny(e,t,n=[]){const r=new Set(n.map(a=>`${a.alias}\0${a.field}`)),i=new Set(e.pks??[]),s=a=>{let c=null,u=0;for(const f of t){const g=new Set(f.pks??[]);for(const b of e.fields)for(const y of f.fields){if(a&&r.has(`${f.alias}\0${y}`))continue;const v=ty({table:e.tableName,field:b,isPk:i.has(b)},{table:f.tableName,field:y,isPk:g.has(y)});v>u&&(u=v,c={thisField:b,otherAlias:f.alias,otherField:y})}}return c};return s(!0)??s(!1)}function ry(e,t,n){if(!Zi(e).has(n))return null;const r=e.columns.find(a=>a.field===n);if(!r||r.from.kind!=="source")return null;const i=t.lastIndexOf("#");return{baseRowId:i>=0?t.slice(0,i):t,field:r.from.field}}class Vt extends Error{constructor(t="this cell is derived"){super(`Projection is read-only — ${t}. Edit a base-table column, or import a copy.`),this.name="ProjectionReadOnlyError"}}function iy(e){const t=e;return!t||!Array.isArray(t.sources)||!Array.isArray(t.columns)?{version:1,sources:[],columns:[]}:t}function sy(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}function oy(e,t){const n=iy(t.source?.config),r=new Set;let i=[],s=!1,a=null;const c=new Map;let u=null,f=!1;function g(L){const F=new Map;for(const W of L)F.has(W.name)||F.set(W.name,W);const V=new Map;for(const W of n.sources){let G;if(W.tableId){const H=L.find(Y=>Y.id===W.tableId);H&&H.name===W.tableName&&(G=H)}G??=F.get(W.tableName),G&&V.set(W.alias,G.id)}return V}async function b(){return g(await e.tables.find({workspaceId:t.workspaceId}))}async function y(){const L=await e.tables.find({workspaceId:t.workspaceId});if(ey(t.id,L))return[];const F=g(L),V={};for(const W of n.sources){const G=F.get(W.alias);if(!G)return[];V[W.alias]=await e.rows(G).find()}return Kw(n,V).map(W=>({...W,tableId:t.id}))}async function v(){const L=await y();return i=L,s=!0,L}function C(){return a||(a=(async()=>{try{return await v()}finally{a=null}})(),a)}async function _(){const L=await b(),F=new Set(L.values());for(const[V,W]of c)F.has(V)||(W(),c.delete(V));for(const V of F)c.has(V)||c.set(V,e.rows(V).subscribe(O))}function O(){f||(f=!0,queueMicrotask(async()=>{f=!1,await _();const L=s?await v():await C();for(const F of r)F(L)}))}async function M(L,F){const V=Zi(n),W={};let G=null;for(const[K,ce]of Object.entries(F)){if(!V.has(K))continue;const pe=ry(n,L,K);pe&&(G=pe.baseRowId,W[pe.field]=ce)}if(!G||Object.keys(W).length===0)throw new Vt;const H=await b(),Y=n.sources[0]?.alias,ie=Y?H.get(Y):void 0;if(!ie)throw new Vt("the base table is not available");const se=e.rows(ie),q=await se.findOne(G);if(!q)throw new Vt("the underlying row no longer exists");return await se.patch(G,{data:{...q.data,...W},updatedAt:Date.now()}),{id:L,tableId:t.id,data:F,updatedAt:Date.now()}}return{async find(L){const F=s?i:await C();return!L||Object.keys(L).length===0?F:F.filter(V=>sy(V,L))},async findOne(L){return(s?i:await C()).find(V=>V.id===L)??null},async insert(){throw new Vt("rows are derived from other tables")},async bulkInsert(){throw new Vt("rows are derived from other tables")},async upsert(L){return M(L.id,L.data)},async patch(L,F){if(!F.data)throw new Vt("a cell edit must carry row data");return M(L,F.data)},async remove(){throw new Vt("rows are derived from other tables")},async bulkRemove(){throw new Vt("rows are derived from other tables")},subscribe(L){return r.add(L),u||(u=e.tables.subscribe(O)),s?L(i):O(),()=>{if(r.delete(L),r.size===0){u?.(),u=null;for(const F of c.values())F();c.clear(),s=!1}}},async refresh(){await _();const L=await v();for(const F of r)F(L)}}}function ay(e,t){const n=e.trim().toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")||"col";let r=n,i=2;for(;t.has(r);)r=`${n}_${i++}`;return t.add(r),r}function ly(e){for(let t=0;;t++){const n=String.fromCharCode(97+t%26)+(t>=26?String(Math.floor(t/26)):"");if(!e.some(r=>r.alias===n))return n}}function cy(e,t,n){const r=t.sources.map(c=>{const u=n.find(y=>y.name===c.tableName)??n.find(y=>y.id===c.tableId),f={alias:c.alias,tableId:u?.id??c.tableId??"",tableName:c.tableName,columns:u?.columns??[]},g=c.join?.on??[],b=g[0];return c.join&&b&&(f.join={type:c.join.type,thisField:b.field,otherAlias:b.eqAlias,otherField:b.eqField},g.length>1&&(f.extraOn=g.slice(1))),f}),i=t.columns.map(c=>{const u={include:!0,outField:c.field,label:c.label??c.field};return c.from.kind==="source"?{...u,alias:c.from.alias,field:c.from.field,computed:!1}:{...u,script:c.from.script,computed:!0}}),s=[],a=new Set;r.forEach((c,u)=>{const f=r.slice(0,u).filter(g=>g.tableName===c.tableName).length;for(const g of c.columns){const b=i.filter(y=>!y.computed&&y.alias===c.alias&&y.field===g.field&&!a.has(y));if(b.length>0)for(const y of b)a.add(y),s.push(y);else s.push({include:!1,alias:c.alias,field:g.field,computed:!1,label:f>0?`${g.label} (${c.alias})`:g.label})}});for(const c of i)!c.computed&&!a.has(c)&&s.push(c);for(const c of i)c.computed&&s.push(c);return{name:e,sources:r,columns:s,...t.limit?{limit:t.limit}:{},original:t}}function uy(e,t){const n=ly(e.sources),r=e.sources.length===0,i=e.sources.filter(c=>c.tableName===t.name).length;let s;if(!r){const c=e.sources.flatMap(f=>f.join?[{alias:f.join.otherAlias,field:f.join.otherField},...(f.extraOn??[]).map(g=>({alias:g.eqAlias,field:g.eqField}))]:[]),u=ny({tableName:t.name,fields:t.columns.map(f=>f.field),pks:t.columns.filter(f=>f.unique).map(f=>f.field)},e.sources.map(f=>({alias:f.alias,tableName:f.tableName,fields:f.columns.map(g=>g.field),pks:f.columns.filter(g=>g.unique).map(g=>g.field)})),c);s={type:"left",thisField:u?.thisField??t.columns[0]?.field??"",otherAlias:u?.otherAlias??e.sources[0]?.alias??"",otherField:u?.otherField??""}}const a={alias:n,tableId:t.id,tableName:t.name,columns:t.columns,...s?{join:s}:{}};return{...e,sources:[...e.sources,a],columns:[...e.columns,...t.columns.map(c=>({include:!0,alias:n,field:c.field,computed:!1,label:i>0?`${c.label} (${n})`:c.label}))]}}function dy(e,t){const n=new Set([t]);for(let r=!0;r;){r=!1;for(const i of e.sources){if(n.has(i.alias)||!i.join)continue;[i.join.otherAlias,...(i.extraOn??[]).map(a=>a.eqAlias)].some(a=>n.has(a))&&(n.add(i.alias),r=!0)}}return{...e,sources:e.sources.filter(r=>!n.has(r.alias)),columns:e.columns.filter(r=>r.computed||!r.alias||!n.has(r.alias))}}function hy(e){return{...e,columns:[...e.columns,{include:!0,computed:!0,label:"computed",script:`function render(row) {
  return "";
}`}]}}function fy(e){const t=e.name.trim();if(!t)return{ok:!1,error:"Give the projection a name."};if(e.sources.length===0)return{ok:!1,error:"Add at least one source table."};const n=e.columns.filter(u=>u.include);if(n.length===0)return{ok:!1,error:"Select at least one column."};for(let u=0;u<e.sources.length;u++){const f=e.sources[u];if(!f?.join)continue;if(!f.join.thisField||!f.join.otherField)return{ok:!1,error:`Set both join keys for "${f.tableName}".`};const g=new Set(e.sources.slice(0,u).map(y=>y.alias));if([f.join.otherAlias,...(f.extraOn??[]).map(y=>y.eqAlias)].some(y=>!g.has(y)))return{ok:!1,error:`The join for "${f.tableName}" refers to a table that is no longer part of this projection.`}}const r=new Set(e.sources.map(u=>u.alias)),i=new Set,s=[];for(const u of n){let f;if(u.outField&&!i.has(u.outField)?(f=u.outField,i.add(f)):f=ay(u.computed?"computed":u.field??"col",i),u.computed){s.push({field:f,from:{kind:"script",script:u.script??""}});continue}const g=u.alias,b=u.field;if(!g||!b||!r.has(g))return{ok:!1,error:`Column "${u.label??u.field}" belongs to a table that is no longer part of this projection.`};s.push({field:f,from:{kind:"source",alias:g,field:b}})}const a=e.sources.map(u=>{const f={alias:u.alias,tableName:u.tableName};return u.tableId&&(f.tableId=u.tableId),u.join&&(f.join={type:u.join.type,on:[{field:u.join.thisField,eqAlias:u.join.otherAlias,eqField:u.join.otherField},...u.extraOn??[]]}),f}),c={...e.original??{},version:1,sources:a,columns:s};return e.limit!=null&&e.limit>0?c.limit=Math.floor(e.limit):delete c.limit,{ok:!0,name:t,spec:c}}var py=Object.defineProperty,my=Object.getOwnPropertyDescriptor,Bn=(e,t,n,r)=>{for(var i=r>1?void 0:r?my(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&py(t,n,i),i};let lt=class extends ve{constructor(){super(...arguments),this.name="",this.limit="",this.sources=[],this.columns=[],this.error="",this.candidates=[],this.editing=!1,this.originalSpec=null,this.dialogEl=null,this.submit=async e=>{e.preventDefault(),this.error="";const t=this.buildSpec();if(!(!t||!this.onSave)){try{await this.onSave(t.name,t.spec)}catch(n){this.error=n?.message??String(n);return}this.dialogEl?.close()}}}connectedCallback(){super.connectedCallback(),lt.instance=this}disconnectedCallback(){super.disconnectedCallback(),lt.instance===this&&(lt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pt(this.dialogEl,e)}open(e){this.candidates=e.candidates,this.onSave=e.onSave,this.error="",this.editing=!!e.initial,this.originalSpec=null,this.name="",this.limit="",this.sources=[],this.columns=[],e.initial?this.loadFrom(e.initial.name,e.initial.spec):e.base&&(this.name=`${e.base.name} view`,this.addCandidateAsSource(e.base)),this.updateComplete.then(()=>this.dialogEl?.showModal())}modelOf(){const e=Number(this.limit);return{name:this.name,sources:this.sources,columns:this.columns,...this.limit.trim()!==""&&Number.isFinite(e)&&e>0?{limit:Math.floor(e)}:{},...this.originalSpec?{original:this.originalSpec}:{}}}applyModel(e){this.name=e.name,this.sources=e.sources,this.columns=e.columns,this.limit=e.limit!=null&&e.limit>0?String(e.limit):""}loadFrom(e,t){this.originalSpec=t,this.applyModel(cy(e,t,this.candidates))}addSource(e){const t=this.candidates.find(n=>n.id===e);t&&this.addCandidateAsSource(t)}addCandidateAsSource(e){this.applyModel(uy(this.modelOf(),e))}removeSource(e){this.applyModel(dy(this.modelOf(),e))}addComputed(){this.applyModel(hy(this.modelOf()))}patchSource(e,t){this.sources=this.sources.map(n=>n.alias===e&&n.join?{...n,join:{...n.join,...t}}:n)}buildSpec(){const e=fy(this.modelOf());return e.ok?{name:e.name,spec:e.spec}:(this.error=e.error,null)}aliasesBefore(e){const t=this.sources.findIndex(n=>n.alias===e);return this.sources.slice(0,t)}render(){const e=this.sources[0];return $`
      <dialog @cancel=${()=>this.dialogEl?.close()} @keydown=${ft}>
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
                  ${this.candidates.map(t=>$`<option value=${t.id}>${t.name}</option>`)}
                </select>
                <button
                  type="button"
                  class="ghost sm"
                  @click=${()=>{const t=this.shadowRoot?.getElementById("add-src");t?.value&&this.addSource(t.value)}}
                >
                  ${e?"+ Join table":"+ Base table"}
                </button>
                ${e?$`<span class="hint">A table may be joined more than once.</span>`:re}
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
    `}renderSource(e,t){return $`
      <div class="src">
        <div class="src-head">
          <span class="badge ${t?"base":""}">${t?"Base":"Join"}</span>
          <span class="name">${e.tableName}</span>
          <code class="alias" title="Alias used by the join keys below">${e.alias}</code>
          <span class="spacer"></span>
          ${t?re:$`<button type="button" class="icon-btn" title="Remove this join" aria-label="Remove ${e.tableName}" @click=${()=>this.removeSource(e.alias)}>×</button>`}
        </div>
        ${e.join?$`<div class="join-grid">
              <select .value=${e.join.type} @change=${n=>this.patchSource(e.alias,{type:n.target.value})}>
                <option value="left">LEFT JOIN</option>
                <option value="inner">INNER JOIN</option>
              </select>
              <span class="kw">ON</span>
              <select .value=${e.join.thisField} @change=${n=>this.patchSource(e.alias,{thisField:n.target.value})}>
                ${e.columns.map(n=>$`<option value=${n.field} ?selected=${n.field===e.join?.thisField}>${e.alias}.${n.field}</option>`)}
              </select>
              <span class="kw">=</span>
              <select
                .value=${`${e.join.otherAlias}.${e.join.otherField}`}
                @change=${n=>{const[r,i]=n.target.value.split(".");this.patchSource(e.alias,{otherAlias:r??"",otherField:i??""})}}
              >
                ${this.aliasesBefore(e.alias).flatMap(n=>n.columns.map(r=>$`<option value=${`${n.alias}.${r.field}`} ?selected=${n.alias===e.join?.otherAlias&&r.field===e.join?.otherField}>${n.alias}.${r.field}</option>`))}
              </select>
            </div>`:""}
      </div>
    `}renderSourceColumns(e){const t=this.columns.map((r,i)=>({c:r,i})).filter(({c:r})=>!r.computed&&r.alias===e.alias);if(t.length===0)return re;const n=t.every(({c:r})=>r.include);return $`
      <div class="col-group">
        <div class="group-head">
          <code class="alias">${e.alias}</code>
          <span class="group-name">${e.tableName}</span>
          <button
            type="button"
            class="link-btn"
            @click=${()=>{const r=!n,i=new Set(t.map(({i:s})=>s));this.columns=this.columns.map((s,a)=>i.has(a)?{...s,include:r}:s)}}
          >
            ${n?"none":"all"}
          </button>
        </div>
        <div class="ticks">
          ${t.map(({c:r,i})=>$`
              <label class="tick ${r.include?"":"off"}" title=${`${r.alias}.${r.field}`}>
                <input type="checkbox" .checked=${r.include} @change=${s=>this.setColumn(i,{include:s.target.checked})} />
                <span class="tick-name">${r.field}</span>
              </label>
            `)}
        </div>
      </div>
    `}renderComputedColumns(){const e=this.columns.map((t,n)=>({c:t,i:n})).filter(({c:t})=>t.computed);return $`
      <div class="col-group">
        <div class="group-head">
          <span class="chip">computed</span>
          <button type="button" class="link-btn" @click=${()=>this.addComputed()}>+ add</button>
        </div>
        ${e.length===0?$`<span class="hint">None. A computed column derives its value from the row.</span>`:e.map(({c:t,i:n})=>$`
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
    `}setColumn(e,t){this.columns=this.columns.map((n,r)=>r===e?{...n,...t}:n)}};lt.instance=null;lt.styles=[ht,$e`
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
    `];Bn([U()],lt.prototype,"name",2);Bn([U()],lt.prototype,"limit",2);Bn([U()],lt.prototype,"sources",2);Bn([U()],lt.prototype,"columns",2);Bn([U()],lt.prototype,"error",2);lt=Bn([Ce("projection-dialog")],lt);const gy={id:"projection",name:"Projection (virtual tables)",type:"source",version:"0.1.0",description:'Virtual tables ("Projections") whose rows are derived live from other tables — database views and JOINs that look and act like tables.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h7v10H4z"/><path d="M13 7h7v10h-7z"/><path d="M11 12h2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/projection.ts"};function by(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"projection",create:t=>oy(e.store,t)}),e.ui.registerTableButton({id:"projection:new",label:"New Projection",icon:"add_box",tooltip:"Create a virtual table using THIS table as the base (view / JOIN)",onClick:(t,{tableId:n})=>void rc(t,{baseTableId:n})}),e.ui.registerTableButton({id:"projection:edit",label:"Edit Join",icon:"call_merge",tooltip:"Edit this projection’s sources, joins and which columns it includes",visible:t=>t.source?.type==="projection",onClick:(t,{tableId:n})=>void rc(t,{editTableId:n})})}async function wy(e,t,n,r,i){const s=await e.store.tables.find({workspaceId:t}),a=new Map;for(const u of s)a.has(u.name)||a.set(u.name,u);const c={};for(const u of n.sources){const f=u.tableId?s.find(g=>g.id===u.tableId&&g.name===u.tableName):void 0;c[u.alias]=(f??a.get(u.tableName))?.columns??[]}return Xw(n,c,r,i)}async function rc(e,t){const n=e.workspaceId();if(!n)return;const r=await e.store.tables.find({workspaceId:n}),i=c=>({id:c.id,name:c.name,columns:c.columns}),s=lt.instance??yy();if(t.editTableId){const c=r.find(u=>u.id===t.editTableId)??null;if(!c||c.source?.type!=="projection")return;s.open({candidates:r.filter(u=>u.id!==c.id).map(i),initial:{name:c.name,spec:c.source.config},onSave:ic(e,n,c)});return}const a=r.find(c=>c.id===t.baseTableId);a&&s.open({base:i(a),candidates:r.map(i),onSave:ic(e,n,null,a)})}function ic(e,t,n,r){return async(i,s)=>{const a=await wy(e,t,s,n?.columns??[],n?.deletedColumns??[]),c=Zi(s).size===0,u={type:"projection",config:s};n?await e.store.tables.patch(n.id,{name:i,columns:a,source:u,readonly:c,updatedAt:Date.now()}):await e.store.tables.insert({id:Ee(),workspaceId:t,name:i,code:Ge(i),columns:a,view:"table",source:u,readonly:c,...r?Qw(s,r):{},updatedAt:Date.now()})}}function yy(){const e=document.createElement("projection-dialog");return document.body.appendChild(e),e}const vy=Object.freeze(Object.defineProperty({__proto__:null,init:by,meta:gy},Symbol.toStringTag,{value:"Module"})),xy={id:"command-palette-button",name:"Command Palette Button",type:"ui",version:"0.1.0",description:"Header “>” button that opens the command palette (also Ctrl/⌘K).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 6 15 12 9 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/command-palette-button.ts"};function $y(e){e.ui.registerHeaderButton({id:"command-palette:open",label:"Commands",icon:"chevron_right",tooltip:"Open the command palette (Ctrl/⌘K)",onClick:()=>e.ui.openCommandPalette()})}const ky=Object.freeze(Object.defineProperty({__proto__:null,init:$y,meta:xy},Symbol.toStringTag,{value:"Module"})),_y=[qw,pg,wf,qf,Jf,tm,gm,km,kf,Vm,Am,sg,dg,yg,_g,Tg,Og,Mg,Ib,Db,Ub,Gb,Xb,vw,ed,Fw,vy,ky];function Cy(e){if(!e.meta)throw new Error("Built-in plugin is missing meta");return e.meta}const td=_y.map(e=>{const t=Cy(e);return{id:t.id,meta:t,module:e}}),Sy=td;function fo(e){return`builtin:${e}`}async function Ey(e){const t=[];for(const n of td)if(!await Ty(e,n)){t.push(n);try{await n.module.init?.(e)}catch(r){e.events.emit("plugin:error",{url:n.id,phase:"init",error:r})}}return async()=>{for(const n of t)try{await n.module.load?.(e)}catch(r){e.events.emit("plugin:error",{url:n.id,phase:"load",error:r})}}}async function Ty(e,t){return t.meta.fixed?!1:wt==="all-optional"?!0:(await e.store.plugins.findOne(fo(t.id)))?.enabled===!1}var Iy=Object.defineProperty,Ay=Object.getOwnPropertyDescriptor,xt=(e,t,n,r)=>{for(var i=r>1?void 0:r?Ay(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Iy(t,n,i),i};let Qe=class extends ve{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.tableColumns=[],this.rows=[],this.showColsMenu=!1,this.allRows=[],this.searchQuery="",this.globalQuery="",this.onSearch=e=>{const t=e.detail;t.tableId===this.viewInstanceId&&(this.searchQuery=t.query??"",this.recompute())},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??"",this.recompute()},this.onInputChange=async e=>{const t=e.target;if(!(t instanceof HTMLInputElement)||!t.classList.contains("eda-input")||!this.instance||this.instance.readonly===!0)return;const n=t.getAttribute("data-eda-row"),r=t.getAttribute("data-eda-field"),i=t.getAttribute("data-eda-type")??"string";if(!n||!r)return;const s=this.allRows.find(u=>u.id===n);if(!s)return;let a;if(i==="boolean")a=t.checked;else if(i==="number"){const u=Number(t.value);a=t.value.trim()===""?null:Number.isNaN(u)?t.value:u}else a=t.value;await(await ae()).store.rows(this.instance.tableId).patch(n,{data:{...s.data,[r]:a},updatedAt:Date.now()})},this.onPillClick=async e=>{const t=e.target;if(!(t instanceof HTMLElement)||!t.classList.contains("eda-filter-pill")||!this.instance)return;const n=t.getAttribute("data-eda-filter-field"),r=t.getAttribute("data-eda-filter-value");if(!n||r==null)return;const i=jm(this.instance.pillFilters?.[n],r),s={...this.instance.pillFilters??{},[n]:i};await(await ae()).store.viewInstances.patch(this.instance.id,{pillFilters:s,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:s},this.recompute()}}get templateOn(){return this.instance?.templateEnabled!==!1}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:table-search",this.onSearch),document.addEventListener("easydb:global-search",this.onGlobalSearch),await this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:table-search",this.onSearch),document.removeEventListener("easydb:global-search",this.onGlobalSearch),this.rowsUnsub?.(),this.instUnsub?.()}async updated(e){e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}async reload(){this.rowsUnsub?.(),this.loaded=!1,await this.load()}async load(){if(!this.viewInstanceId)return;this.rowsUnsub?.(),this.instUnsub?.();const e=await ae(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const n=await e.store.tables.findOne(t.tableId);this.tableColumns=n?.columns??[],n&&t.tableName!==n.name&&e.store.viewInstances.patch(t.id,{tableName:n.name});const r=new Map(this.tableColumns.map(s=>[s.field,s]));this.columns=t.visibleColumns.map(s=>r.get(s)??{field:s,label:s,type:"string"}),this.instUnsub=e.store.viewInstances.subscribe(s=>{const a=s.find(c=>c.id===this.viewInstanceId);if(a){if(a.tableId!==this.instance?.tableId){this.instance=a,this.reload();return}this.instance=a,this.recompute()}});const i=e.store.rows(t.tableId);this.rowsUnsub=i.subscribe(s=>{this.allRows=s,this.recompute()}),this.allRows=await i.find(),this.recompute(),this.loaded=!0}recompute(){if(!this.instance)return;const e=Mm(this.allRows,this.tableColumns),t=$u(e,this.instance);let n=t;const r=this.searchQuery.trim(),i=this.globalQuery.trim();r&&(n=ki(n,r,this.tableColumns)),i&&(n=ki(n,i,this.tableColumns));const s=this.instance.limit??0;s>0&&n.length>s&&(n=n.slice(0,s)),this.rows=n,this.templateOn&&Jc(this.viewInstanceId,n.length,t.length)}async removePill(e,t){if(!this.instance)return;const n=Nm(this.instance.pillFilters?.[e],t),r={...this.instance.pillFilters??{}};n===""?delete r[e]:r[e]=n,await(await ae()).store.viewInstances.patch(this.instance.id,{pillFilters:r,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:r},this.recompute()}async setSortColumn(e){if(!this.instance)return;await(await ae()).store.viewInstances.patch(this.instance.id,{sortColumn:e||void 0,updatedAt:Date.now()}),this.instance={...this.instance,sortColumn:e||void 0},this.recompute()}async toggleSortDir(){if(!this.instance?.sortColumn)return;const e=!(this.instance.sortAsc??!0);await(await ae()).store.viewInstances.patch(this.instance.id,{sortAsc:e,updatedAt:Date.now()}),this.instance={...this.instance,sortAsc:e},this.recompute()}async toggleTemplate(){if(!this.instance)return;const e=!this.templateOn;await(await ae()).store.viewInstances.patch(this.instance.id,{templateEnabled:e,updatedAt:Date.now()}),this.instance={...this.instance,templateEnabled:e},this.showColsMenu=!1}editTemplate(){!this.instance||!this.template||ho(this.instance.tableId,{editTemplateId:this.template.id})}editView(){this.instance&&ho(this.instance.tableId,{editInstanceId:this.instance.id})}async deleteView(){if(!this.instance)return;const e=await ae();await e.api.ui.dialogs.confirm(`Delete the view "${this.instance.name}"? The table and its rows stay.`,"Delete view")&&await e.store.viewInstances.remove(this.instance.id)}async toggleColumn(e){if(!this.instance)return;const t=this.instance.visibleColumns,r=t.includes(e)?t.filter(s=>s!==e):[...t,e];if(r.length===0)return;await(await ae()).store.viewInstances.patch(this.instance.id,{visibleColumns:r,updatedAt:Date.now()}),this.instance={...this.instance,visibleColumns:r}}renderTable(){return this.rows.length===0?$`<div class="vw-empty">No rows.</div>`:$`
      <table class="vw-table">
        <thead>
          <tr>
            ${this.columns.map(e=>$`<th>${e.label||e.field}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map(e=>$`<tr>
                ${this.columns.map(t=>{const n=e.data[t.field],r=n==null?"":String(n);return $`<td title=${r}>${r}</td>`})}
              </tr>`)}
        </tbody>
      </table>
    `}renderTemplated(){const e=this.template;if(!e)return $`<div class="vw-empty">This view's template is missing.</div>`;if(Um(e.rowHtml)){const t=this.instance?.mapping??{},n=new Map(this.tableColumns.map(a=>[a.field,a])),r=this.instance?.readonly===!0,i=this.rows.map(a=>Pm(e.rowHtml,a,t,{columns:n,readonly:r})).join(""),s=(e.headerHtml??"")+i+(e.footerHtml??"");return $`<div class="vw-root">${An(s)}</div>`}return $`<div class="vw-root">
      ${e.headerHtml?.trim()?$`<div class="vw-html">${An(e.headerHtml)}</div>`:re}
      ${this.renderTable()}
      ${e.footerHtml?.trim()?$`<div class="vw-html">${An(e.footerHtml)}</div>`:re}
    </div>`}renderSortBar(){if(!this.instance)return re;const e=this.tableColumns.filter(r=>r.sortable!==!1),t=this.instance.sortColumn??"",n=this.instance.sortAsc??!0;return $`<div class="vw-sortbar">
      <span class="mi" title="Sort">sort</span>
      <select
        aria-label="Sort by"
        @change=${r=>void this.setSortColumn(r.target.value)}
      >
        <option value="" ?selected=${!t}>— unsorted —</option>
        ${e.map(r=>$`<option value=${r.field} ?selected=${t===r.field}>${r.label||r.field}</option>`)}
      </select>
      <button
        aria-label="Toggle sort direction"
        title=${n?"Ascending (click for descending)":"Descending (click for ascending)"}
        ?disabled=${!t}
        @click=${()=>void this.toggleSortDir()}
      >
        <span class="mi">${n?"arrow_upward":"arrow_downward"}</span>
      </button>
    </div>`}renderPillBar(){const e=this.instance?.pillFilters;if(!e)return re;const t=[];for(const[n,r]of Object.entries(e))if(r)for(const i of Cr(r))i.term&&t.push({field:n,value:i.term});return t.length===0?re:$`<div class="vw-pillbar">
      ${t.map(n=>$`<span class="eda-pill-chip">
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
    </div>`}renderFooter(){if(!this.instance)return re;const e=this.templateOn,t=new Set(this.instance.visibleColumns);return $`<div class="vw-footer">
      ${!e&&this.showColsMenu?$`<div class="cols-menu">
            ${this.tableColumns.map(n=>$`<label
                  ><input
                    type="checkbox"
                    .checked=${t.has(n.field)}
                    @change=${()=>void this.toggleColumn(n.field)}
                  />${n.label||n.field}</label
                >`)}
          </div>`:re}
      ${e?re:$`<button
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
      ${this.template?$`<button
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
    </div>`}render(){if(!this.loaded)return $`<div class="vw-body scroll"><div class="vw-loading">Loading…</div></div>`;if(this.error)return $`<div class="vw-body scroll"><div class="vw-empty">${this.error}</div></div>`;const e=this.templateOn,t=e?$`<div class="vw-body scroll" @change=${this.onInputChange} @click=${this.onPillClick}>
          ${this.renderTemplated()}
        </div>`:$`<div class="vw-body grid">
          <data-table
            .tableId=${this.instance?.tableId??""}
            .viewInstanceId=${this.viewInstanceId}
          ></data-table>
        </div>`;return $`${e?this.renderSortBar():re}${this.renderPillBar()}${t}${this.renderFooter()}`}};Qe.styles=[mt,$e`
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
    `];xt([dt({type:String})],Qe.prototype,"viewInstanceId",2);xt([U()],Qe.prototype,"loaded",2);xt([U()],Qe.prototype,"error",2);xt([U()],Qe.prototype,"instance",2);xt([U()],Qe.prototype,"template",2);xt([U()],Qe.prototype,"columns",2);xt([U()],Qe.prototype,"tableColumns",2);xt([U()],Qe.prototype,"rows",2);xt([U()],Qe.prototype,"showColsMenu",2);xt([U()],Qe.prototype,"searchQuery",2);xt([U()],Qe.prototype,"globalQuery",2);Qe=xt([Ce("view-window")],Qe);const rt=new Map;async function Ry(){await Promise.all([...rt.keys()].map(e=>gi(e)))}function Oy(e){const t=rt.get(e);if(!t)return!1;const n=t.panel;return n.status==="minimized"&&n.normalize(),n.front(),!0}let sc=!1;function po(e){e.panel.setHeaderTitle(e.name+Qc(e.count,e.total))}function Dy(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function Py(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function nd(e){return`view-panel-${Py(e)}`}async function Ly(){if(sc)return;sc=!0;const e=await ae(),t=r=>r.filter(i=>i.workspaceId===e.workspaceId&&i.open),n=t(await e.store.viewInstances.find()).sort(Ti);for(const r of n)oc(r,e);e.store.viewInstances.subscribe(r=>{const i=new Map(t(r).map(a=>[a.id,a]));for(const a of[...rt.keys()])i.has(a)||jy(a);const s=[...i.values()].filter(a=>!rt.has(a.id)).sort(Ti);for(const a of s)oc(a,e)}),e.store.tables.subscribe(r=>void My(e,r)),document.addEventListener(_i,r=>{const i=r.detail,s=rt.get(i.key);s&&s.el&&(s.count=i.count,s.total=i.total,po(s))}),document.addEventListener("easydb:reload-view",r=>{const i=r.detail?.instanceId;if(!i)return;const s=rt.get(i);s&&(async()=>{const a=await e.store.viewInstances.findOne(i);a&&(s.name=a.name,po(s)),s.el?.reload()})()}),document.addEventListener("easydb:reload-views",()=>{for(const{el:r}of rt.values())r?.reload()})}async function My(e,t){const n=t.filter(a=>a.workspaceId===e.workspaceId),r=new Set(n.map(a=>a.id)),i=new Map;for(const a of n)i.has(a.name)||i.set(a.name,a);const s=await e.store.viewInstances.find();for(const a of s){if(a.workspaceId!==e.workspaceId||r.has(a.tableId)||!a.tableName)continue;const c=i.get(a.tableName);c&&await e.store.viewInstances.patch(a.id,{tableId:c.id,updatedAt:Date.now()})}}function oc(e,t){if(rt.has(e.id))return;const n=nd(e.id),r=e.windowGeometry,i=r?.minimized===!0,s=()=>{const v=document.createElement("view-window");return v.viewInstanceId=e.id,v.style.height="100%",v},a=i?document.createElement("div"):s();let c;const u=()=>{c&&(c.el?.remove(),c.el=null,c.count=-1,c.total=-1,po(c))},f=()=>{if(!c||c.el)return;const v=document.getElementById(n)?.querySelector(".jsPanel-content");if(!v)return;v.replaceChildren();const C=s();v.appendChild(C),c.el=C},g=Ii({id:n,container:Dy(),title:e.name,logo:Vg,color:"#0891b2",content:a,...r?{panelSize:{w:r.w,h:r.h},position:{x:r.x,y:r.y}}:{contentSize:{w:480,h:520},position:{centerTopOffset:60}},minimizeTo:"#easydb-minimized-dock",viewport:xr(),boot:{minimized:r?.minimized===!0,maximized:r?.maximized===!0},onmoved:()=>void gi(e.id),onresized:()=>void gi(e.id),onfronted:()=>void Ny(e.id,t),onstatuschange:v=>{v.status==="minimized"?u():(v.status==="normalized"||v.status==="maximized")&&f(),gi(e.id)},onclosed:()=>{rt.delete(e.id),Qi(e.id),t.store.viewInstances.patch(e.id,{open:!1,updatedAt:Date.now()}).catch(()=>{})}});c={panel:g,el:i?null:a,name:e.name,count:-1,total:-1},rt.set(e.id,c),Mu(e.id,()=>g.front(void 0,!1));const b=document.getElementById(n),y=document.createElement("panel-search");y.tableId=e.id,b?.querySelector(".jsPanel-controlbar")?.prepend(y)}function jy(e){const t=rt.get(e);if(t){rt.delete(e),Qi(e);try{t.panel.status!=="closed"&&t.panel.close()}catch{}}}function Ny(e,t){return Xi(`view:${e}`,()=>zy(e,t))}async function zy(e,t){try{const n=await t.store.viewInstances.findOne(e);if(!n)return;const r=n.windowGeometry??{x:0,y:0,w:480,h:520,z:0,minimized:!1,maximized:!1};await t.store.viewInstances.patch(e,{windowGeometry:{...r,z:Lu()},updatedAt:Date.now()})}catch{}}function gi(e){return Xi(`view:${e}`,()=>Uy(e))}async function Uy(e){const t=document.getElementById(nd(e)),n=rt.get(e);if(!t||!n)return;const{minimized:r,maximized:i}=n.panel.persistFlags();try{const s=await ae(),a=(await s.store.viewInstances.findOne(e))?.windowGeometry;let c=t.offsetLeft,u=t.offsetTop,f=t.offsetWidth,g=t.offsetHeight;(r||i)&&a&&(c=a.x,u=a.y,f=a.w,g=a.h),c<=-9e3&&(c=a?.x??40);const b={x:c,y:u,w:f,h:g,z:a?.z??0,minimized:r,maximized:i};await s.store.viewInstances.patch(e,{windowGeometry:b,updatedAt:Date.now()})}catch{}}function rd(e){return e.filter(t=>t.status!=="minimized")}function Fy(e,t,n){if(e<=0)return[];const r=Math.ceil(Math.sqrt(e)),i=Math.ceil(e/r),s=(t.w-n*(r+1))/r,a=(t.h-n*(i+1))/i;return Array.from({length:e},(c,u)=>{const f=u%r,g=Math.floor(u/r);return{x:t.x+n+f*(s+n),y:t.y+n+g*(a+n),w:s,h:a}})}function Hn(){return Kg()}function By(){for(const e of Hn())e.close?.()}function Hy(){for(const e of Hn())e.minimize?.()}function qy(){for(const e of Hn())e.normalize?.()}function Ky(){for(const e of Hn())e.maximize?.()}function id(){const e=document.getElementById("easydb-panels"),t=e?.clientWidth??window.innerWidth,n=e?.clientHeight??window.innerHeight,r=Ai()?.snapshot(),i=r?.scale&&r.scale>0?r.scale:1,s=r?.x??0,a=r?.y??0;return{x:-s/i,y:-a/i,w:t/i,h:n/i}}function sd(e,t,n,r,i){e.style.left=`${Math.round(t)}px`,e.style.top=`${Math.round(n)}px`,e.style.width=`${Math.round(r)}px`,e.style.height=`${Math.round(i)}px`}function Vy(){const e=rd(Hn()).reverse();if(e.length===0)return;const t=id(),n=32,r=Math.min(680,Math.max(320,t.w*.6)),i=Math.min(480,Math.max(240,t.h*.6));e.forEach((s,a)=>{s.normalize?.(),sd(s,t.x+24+a*n,t.y+24+a*n,r,i)}),od()}function od(){zu(),Ry()}function Gy(){const e=rd(Hn()).reverse();if(e.length===0)return;const n=Fy(e.length,id(),8);e.forEach((r,i)=>{r.normalize?.();const s=n[i];s&&sd(r,s.x,s.y,s.w,s.h)}),od()}function Wy(e){const t=[{id:"windows:minimize-all",title:"Minimize all windows",icon:"remove",run:Hy},{id:"windows:restore-all",title:"Restore all windows",icon:"crop_square",run:qy},{id:"windows:maximize-all",title:"Maximize all windows",icon:"fullscreen",run:Ky},{id:"windows:cascade",title:"Cascade windows",icon:"view_agenda",run:Vy},{id:"windows:tile",title:"Tile windows",icon:"grid_view",run:Gy},{id:"windows:close-all",title:"Close all windows",icon:"close",run:By}];for(const i of t)e.ui.registerCommand({id:i.id,title:i.title,group:"Windows",icon:i.icon,run:i.run});const n="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md",r="https://github.com/cawoodm/easydbaccess/tree/main/docs";e.ui.registerCommand({id:"app:search",title:"Search all tables",group:"App",icon:"search",keywords:["find","global search","filter"],run:()=>{document.dispatchEvent(new CustomEvent("easydb:focus-search"))}}),e.ui.registerCommand({id:"app:plugins",title:"Plugins",group:"App",icon:"extension",keywords:["plugin manager","install","extensions"],run:i=>i.ui.openPluginManager()}),e.ui.registerCommand({id:"app:changelog",title:"Changelog",group:"App",icon:"history",keywords:["releases","version","whats new"],run:()=>{window.open(n,"_blank","noopener")}}),e.ui.registerCommand({id:"app:docs",title:"Documentation",group:"App",icon:"menu_book",keywords:["docs","help","guide","manual"],run:()=>{window.open(r,"_blank","noopener")}})}async function Yy(e){if(wt==="url-plugins"||wt==="all-optional")return async()=>{};const t=e.workspaceId();if(!t)return async()=>{};const r=(await e.store.workspaces.findOne(t))?.pluginUrls??[],i=[];for(const s of r)try{const a=await e.store.plugins.findOne(s);if(a&&a.enabled===!1)continue;let c=a?.cachedBody??"";if(c)Xy(e,s,c);else{try{c=await ad(s)}catch(g){await e.store.plugins.upsert({url:s,enabled:a?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${g.message}`}),e.events.emit("plugin:error",{url:s,phase:"fetch",error:g});continue}await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),cachedBody:c})}const u=new Blob([c],{type:"text/javascript"}),f=URL.createObjectURL(u);try{const g=await import(f);await g.init?.(e),i.push({url:s,mod:g})}finally{setTimeout(()=>URL.revokeObjectURL(f),5e3)}}catch(a){await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),lastError:`init: ${a.message}`}),e.events.emit("plugin:error",{url:s,phase:"init",error:a})}return async()=>{for(const{url:s,mod:a}of i)try{await a.load?.(e)}catch(c){await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),lastError:`load: ${c.message}`}),e.events.emit("plugin:error",{url:s,phase:"load",error:c})}}}async function ad(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const n=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(n))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return n}function Xy(e,t,n){return(async()=>{try{const r=await ad(t);if(r===n)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:r})}catch{}})()}let Xs=null;function ae(){return Xs||(Xs=Jy()),Xs}async function Jy(){const e=await Cc();let t="";const n=Rh(e,()=>t),r=Dh(),i=Uh(),s=new Map;n.tables.subscribe(O=>{s.clear();for(const M of O)s.set(M.id,M)});const a={...n.tables,insert:O=>(s.set(O.id,O),n.tables.insert(O)),upsert:O=>(s.set(O.id,O),n.tables.upsert(O))};let c=null;const u={get backend(){if(!c)throw new Error("[host] row-source ctx used before app init completed");return c.backend},events:r,settings:n.settings,workspaceId:()=>y},f=Oh({base:{...n,tables:a},providers:i.rowSources,tableById:O=>s.get(O),ctx:u}),g=Qy(),b=await f.workspaces.find();let y;if(g){const O=cd(g),M=b.find(L=>L.id===O||L.name===g);M?y=M.id:y=(await f.workspaces.insert({id:O,name:g,createdAt:Date.now(),pluginUrls:[]})).id}else{const O=Zy(),M=O?b.find(L=>L.id===O):void 0;M?y=M.id:b.length>0?y=b[0].id:y=(await f.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}t=y,ev(y);const v=Kh({store:f,events:r,registries:i,workspaceId:()=>y});c=v,Wy(v),r.on("import:after",({source:O,tableId:M,rowCount:L})=>{O!=="datasette"&&v.store.tables.findOne(M).then(F=>{v.ui.dialogs.toast(`Imported ${L} row${L===1?"":"s"} into "${F?.name??M}".`,{kind:"success",title:O.toUpperCase()+" import"})})}),r.on("plugin:error",({url:O,phase:M,error:L})=>{v.ui.dialogs.toast(`[${M}] ${L?.message??String(L)}`,{kind:"error",title:`Plugin: ${O}`})});const C=await Ey(v),_=await Yy(v);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:y}),await C(),await _(),wt==="all-optional"?v.ui.dialogs.toast("Safe mode is ON: only fixed built-ins (Settings, core rendering) loaded. All other built-in plugins and URL-installed plugins are disabled for this session only — nothing was changed. Disable the culprit below, then reload without ?safemode.",{kind:"warning",title:"Safe mode"}):wt==="url-plugins"&&v.ui.dialogs.toast("Safe mode (URL plugins) is ON: URL-installed plugins were not loaded this session. Built-in plugins are unaffected. Reload without ?safemode1 to restore them.",{kind:"warning",title:"Safe mode"}),wt!=="off"&&v.ui.openPluginManager()}),globalThis.api=v,{store:f,events:r,workspaceId:y,registries:i,api:v}}function Qy(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const ld="eda:lastWorkspaceId";function Zy(){try{return globalThis.localStorage?.getItem(ld)??null}catch{return null}}function ev(e){try{globalThis.localStorage?.setItem(ld,e)}catch{}}function cd(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var tv=Object.defineProperty,nv=Object.getOwnPropertyDescriptor,es=(e,t,n,r)=>{for(var i=r>1?void 0:r?nv(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&tv(t,n,i),i};let Ln=class extends ve{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pt(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let n;try{n=jn(this.text)}catch(a){this.errorMsg=`Couldn't parse the CSV: ${a.message}`;return}if(n.columns.length===0||n.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const r=await ae(),i=crypto.randomUUID();await r.store.tables.insert({id:i,workspaceId:r.workspaceId,name:t,code:Ge(t),columns:n.columns,view:"table",updatedAt:Date.now()});const s=n.rows.map(a=>({id:crypto.randomUUID(),tableId:i,data:a,updatedAt:Date.now()}));await r.store.rows(i).bulkInsert(s),r.api.ui.dialogs.toast(`Imported ${n.rows.length} row${n.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return $`
      <dialog @cancel=${this.close} @keydown=${ft}>
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
            ${this.errorMsg?$`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};Ln.styles=[ht,$e`
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
    `];es([U()],Ln.prototype,"name",2);es([U()],Ln.prototype,"text",2);es([U()],Ln.prototype,"errorMsg",2);Ln=es([Ce("csv-paste-dialog")],Ln);const Zo=new Set;let ac=!1;function rv(){return Zo.size>0}function iv(e){Zo.add(e),ov()}function sv(e){Zo.delete(e)}function ud(e,t){const n=()=>{t.open&&iv(e)};t.addEventListener("input",n),t.addEventListener("change",n),t.addEventListener("close",()=>sv(e))}function ov(){ac||(ac=!0,window.addEventListener("beforeunload",e=>{rv()&&(e.preventDefault(),e.returnValue="")}))}var av=Object.defineProperty,lv=Object.getOwnPropertyDescriptor,ea=(e,t,n,r)=>{for(var i=r>1?void 0:r?lv(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&av(t,n,i),i};const cv=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return the value this column should display.
  return row.name ?? '';
}
`;let Rt=class extends ve{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),Rt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Rt.instance===this&&(Rt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pt(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:cv,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(n=>{this.resolver=n})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return $`
      <dialog @cancel=${this.onCancel} @keydown=${ft}>
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
            <textarea
              spellcheck="false"
              autofocus
              .value=${this.text}
              @input=${e=>this.text=e.target.value}
            ></textarea>
          </div>
        </form>
      </dialog>
    `}};Rt.instance=null;Rt.styles=[ht,$e`
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
    `];ea([U()],Rt.prototype,"text",2);ea([U()],Rt.prototype,"columnLabel",2);Rt=ea([Ce("script-editor-dialog")],Rt);function lc(e){const t={...e.orig??{},field:e.field.trim(),label:e.label.trim()||e.field.trim(),type:e.type};return e.renderer?t.renderer=e.renderer:delete t.renderer,e.script?t.script=e.script:delete t.script,e.max!=null&&e.max>0?t.max=e.max:delete t.max,e.unique?t.unique=!0:delete t.unique,e.notnull?t.notnull=!0:delete t.notnull,e.hidden?t.hidden=!0:delete t.hidden,e.sortable===!1?t.sortable=!1:delete t.sortable,e.filterable===!1?t.filterable=!1:delete t.filterable,t}var uv=Object.defineProperty,dv=Object.getOwnPropertyDescriptor,Ye=(e,t,n,r)=>{for(var i=r>1?void 0:r?dv(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&uv(t,n,i),i};const hv=["string","number","boolean","date","datetime"];let Ue=class extends ve{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.tableReadonly=!1,this.columns=[],this.errorMsg="",this.noticeMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.columnActions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pt(this.dialogEl,e),this.dialogEl&&ud("columns-editor",this.dialogEl)}async open(e,t){this.errorMsg="",this.noticeMsg=t?.notice??"";const n=await ae();if(this.rendererOptions=[...n.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.columnActions=[...n.registries.columnEditorActions],this.rendererSubUnsub=n.events.on("app:ready",()=>{this.rendererOptions=[...n.registries.cellRenderers.keys()].sort(),this.columnActions=[...n.registries.columnEditorActions]}),e){const r=await ae(),i=await r.store.tables.findOne(e);if(!i)return;this.mode="edit",this.editTableId=e,this.name=i.name,this.tableTitle=i.title??"",this.tableReadonly=!!i.readonly,this.columns=i.columns.map(a=>({field:a.field,label:a.label,type:a.type,renderer:a.renderer,script:a.script,max:a.max,unique:a.unique,notnull:a.notnull,hidden:a.hidden,sortable:a.sortable,filterable:a.filterable,origField:a.field,orig:a}));const s=await r.store.rows(e).find();this.previewRows=s.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.tableReadonly=!1,this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,n)=>n!==e)}moveColumn(e,t){const n=e+t;if(n<0||n>=this.columns.length)return;const r=[...this.columns],[i]=r.splice(e,1);r.splice(n,0,i),this.columns=r}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,n){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const r=n.getBoundingClientRect(),i=e.clientY<r.top+r.height/2;this.dropTargetIdx=t,this.dropEdge=i?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const n=this.dragSrcIdx,r=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,n===null||n===t||!r)return;const i=[...this.columns],[s]=i.splice(n,1);let a=t+(n<t?-1:0);r==="after"&&(a+=1),i.splice(a,0,s),this.columns=i}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((n,r)=>r===e?{...n,...t}:n)}async runColumnAction(e){this.errorMsg="";const t=await ae();try{const n=await e.run(t.api,{columns:this.columns.map(i=>lc(i)),...this.editTableId?{tableId:this.editTableId}:{}});if(!n)return;const r=new Map(n.map(i=>[i.field,i]));this.columns=this.columns.map(i=>{const s=r.get(i.field);return s?{...i,label:s.label??i.label,type:s.type??i.type,renderer:s.renderer,script:s.script}:i})}catch(n){this.errorMsg=`${e.label} failed: ${n.message}`}}async editScript(e){const t=Rt.instance;if(!t)return;const n=this.columns[e];if(!n)return;const r=await t.open(n.script??"",n.label||n.field);r!==null&&this.patchColumn(e,{script:r.trim()?r:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}const n=await ae(),r=(await n.store.tables.find()).filter(f=>f.workspaceId===n.workspaceId),i=t.toLowerCase(),s=r.find(f=>f.name.toLowerCase()===i&&f.id!==this.editTableId);if(s){this.errorMsg=`A table named "${s.name}" already exists — names must be unique.`;return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const a=new Set;for(const f of this.columns){const g=f.field.trim();if(!g){this.errorMsg="Column field names cannot be empty.";return}if(a.has(g)){this.errorMsg=`Duplicate column field: ${g}`;return}a.add(g)}const c=this.tableTitle.trim(),u=this.columns.map(lc);if(this.mode==="edit"&&this.editTableId){const f=this.editTableId,g=await n.store.tables.findOne(f),b=new Map((g?.columns??[]).map(G=>[G.field,G])),y=u.filter(G=>{const H=b.get(G.field);return G.unique&&!H?.unique||G.notnull&&!H?.notnull||G.max&&G.max>0&&G.max!==H?.max});if(y.length>0){const G=await n.store.rows(f).find(),H=mv(y,G);if(H.length>0){this.errorMsg=`Cannot save: ${H.length} existing ${H.length===1?"row violates":"rows violate"} the new constraints.
${H.slice(0,5).join(`
`)}${H.length>5?`
…and ${H.length-5} more.`:""}`;return}}const v=new Set(this.columns.map(G=>G.origField).filter(G=>!!G)),C=new Set(u.map(G=>G.field)),_=(g?.columns??[]).map(G=>G.field).filter(G=>!v.has(G)),O=g?.deletedColumns??[],M=[...new Set([...O,..._])].filter(G=>!C.has(G)),L={name:t,title:c,columns:u,readonly:this.tableReadonly,updatedAt:Date.now()};(M.length>0||O.length>0)&&(L.deletedColumns=M);const F=g?.name;await n.store.tables.patch(f,L);const V=_.filter(G=>!C.has(G)),W=this.fieldRenames();if(!g?.source&&(V.length>0||W.length>0)){const G=await n.store.rows(f).find();for(const H of G){let Y=!1,ie={...H.data};const se=rl(ie,W);se&&(ie=se,Y=!0);for(const q of V)q in ie&&(delete ie[q],Y=!0);Y&&await n.store.rows(f).patch(H.id,{data:ie,updatedAt:Date.now()})}}if(F!==void 0&&F!==t){const G=(await n.store.viewInstances.find()).filter(H=>H.tableId===f);for(const H of G)H.tableName!==t&&await n.store.viewInstances.patch(H.id,{tableName:t,updatedAt:Date.now()})}}else await n.store.tables.insert({id:Ee(),workspaceId:n.workspaceId,name:t,title:c,code:Ge(t),columns:u,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return $`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=this.fieldRenames(),t=e.length>0?this.previewRows.map(i=>({...i,data:rl(i.data,e)??i.data})):this.previewRows,n=new Map;for(const i of this.columns){if(!i.unique)continue;const s=new Set,a=new Set;for(const c of t){const u=c.data[i.field];u==null||u===""||(s.has(u)&&a.add(u),s.add(u))}n.set(i.field,a)}const r=this.columns.filter(i=>!i.hidden);return $`
      <div class="preview">
        <h3>
          Live preview — first ${this.previewRows.length}
          row${this.previewRows.length===1?"":"s"}
        </h3>
        <table>
          <thead>
            <tr>
              ${r.map(i=>$`<th title=${i.field}>${i.label||i.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${t.map(i=>$`
                <tr>
                  ${r.map(s=>{const a=i.data[s.field],c=pv(s,a,n.get(s.field));return $`<td class=${c?"violation":""} title=${c??""}>
                      ${fv(a)}
                    </td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}fieldRenames(){return this.mode!=="edit"?[]:this.columns.filter(e=>e.origField&&e.origField!==e.field.trim()).map(e=>({from:e.origField,to:e.field.trim()}))}renameDetected(){return this.fieldRenames().length>0}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return $`
      <dialog @cancel=${this.close} @keydown=${ft}>
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
            ${this.noticeMsg?$`<div class="notice">${this.noticeMsg}</div>`:""}
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
              ${this.columns.map((n,r)=>{const i=this.dragSrcIdx===r,s=this.dropTargetIdx===r,a=s&&this.dropEdge==="before"?" drop-before":s&&this.dropEdge==="after"?" drop-after":"";return $`
                  <div
                    class=${`col-row${i?" drag-source":""}${a}`}
                    @dragover=${c=>this.onRowDragOver(c,r,c.currentTarget)}
                    @dragleave=${()=>this.onRowDragLeave(r)}
                    @drop=${c=>this.onRowDrop(c,r)}
                  >
                    <span
                      class="drag-handle"
                      title="Drag to reorder"
                      draggable="true"
                      @dragstart=${c=>this.onRowDragStart(c,r)}
                      @dragend=${()=>this.onRowDragEnd()}
                    >
                      <span class="mi sm">drag_indicator</span>
                    </span>
                    <input
                      type="text"
                      .value=${n.field}
                      @input=${c=>this.patchColumn(r,{field:c.target.value})}
                    />
                    <input
                      type="text"
                      .value=${n.label}
                      @input=${c=>this.patchColumn(r,{label:c.target.value})}
                    />
                    <select
                      .value=${n.type}
                      @change=${c=>this.patchColumn(r,{type:c.target.value})}
                    >
                      ${hv.map(c=>$`<option value=${c} ?selected=${c===n.type}>${c}</option>`)}
                    </select>
                    <select
                      title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                      .value=${n.renderer??""}
                      @change=${c=>{const u=c.target.value;this.patchColumn(r,{renderer:u||void 0})}}
                    >
                      <option value="" ?selected=${!n.renderer}>— none —</option>
                      ${this.rendererOptions.map(c=>$`<option value=${c} ?selected=${c===n.renderer}>${c}</option>`)}
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
                      @input=${c=>{const u=c.target.value;this.patchColumn(r,{max:u===""?void 0:Number(u)})}}
                    />
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Unique"
                        .checked=${!!n.unique}
                        @change=${c=>this.patchColumn(r,{unique:c.target.checked})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Not null"
                        .checked=${!!n.notnull}
                        @change=${c=>this.patchColumn(r,{notnull:c.target.checked})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Visible — uncheck to hide the column without losing its data"
                        .checked=${!n.hidden}
                        @change=${c=>this.patchColumn(r,{hidden:!c.target.checked})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Sortable — uncheck to disable sorting on this column"
                        .checked=${n.sortable!==!1}
                        @change=${c=>this.patchColumn(r,{sortable:c.target.checked?void 0:!1})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Filterable — uncheck to disable filtering and search on this column"
                        .checked=${n.filterable!==!1}
                        @change=${c=>this.patchColumn(r,{filterable:c.target.checked?void 0:!1})}
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
            ${this.columnActions.map(n=>$`<button
                type="button"
                class="add"
                title=${n.tooltip??n.label}
                @click=${()=>void this.runColumnAction(n)}
              >
                ${n.label}
              </button>`)}

            ${this.renameDetected()?$`<div class="hint">
                  Existing rows are re-keyed on save, so renamed fields keep their data.
                </div>`:""}
            ${this.errorMsg?$`<div class="error">${this.errorMsg}</div>`:""}
            ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};Ue.styles=[mt,ht,$e`
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
    `];Ye([U()],Ue.prototype,"mode",2);Ye([U()],Ue.prototype,"editTableId",2);Ye([U()],Ue.prototype,"name",2);Ye([U()],Ue.prototype,"tableTitle",2);Ye([U()],Ue.prototype,"tableReadonly",2);Ye([U()],Ue.prototype,"columns",2);Ye([U()],Ue.prototype,"errorMsg",2);Ye([U()],Ue.prototype,"noticeMsg",2);Ye([U()],Ue.prototype,"dragSrcIdx",2);Ye([U()],Ue.prototype,"dropTargetIdx",2);Ye([U()],Ue.prototype,"dropEdge",2);Ye([U()],Ue.prototype,"previewRows",2);Ye([U()],Ue.prototype,"rendererOptions",2);Ye([U()],Ue.prototype,"columnActions",2);Ue=Ye([Ce("new-table-dialog")],Ue);function fv(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function pv(e,t,n){const r=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&r)return`${e.label}: empty`;if(r)return null;if(e.type==="number"&&typeof t!="number"){const i=Number(t);if(!Number.isFinite(i))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!r){const i=new Date(String(t));if(Number.isNaN(i.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&n?.has(t)?`${e.label}: duplicate`:null}function mv(e,t){const n=[];for(const r of e)if(r.notnull&&t.forEach((i,s)=>{const a=i.data[r.field];(a==null||typeof a=="string"&&a.trim()==="")&&n.push(`Row ${s+1}: ${r.label} is empty.`)}),r.max!=null&&r.max>0&&t.forEach((i,s)=>{const a=i.data[r.field];typeof a=="string"&&a.length>r.max?n.push(`Row ${s+1}: ${r.label} length ${a.length} > max ${r.max}.`):typeof a=="number"&&a>r.max&&n.push(`Row ${s+1}: ${r.label} value ${a} > max ${r.max}.`)}),r.unique){const i=new Map;t.forEach((s,a)=>{const c=s.data[r.field];c==null||c===""||(i.has(c)?n.push(`Row ${a+1}: ${r.label} duplicates row ${i.get(c)+1} ("${String(c)}").`):i.set(c,a))})}return n}var gv=Object.defineProperty,bv=Object.getOwnPropertyDescriptor,Xe=(e,t,n,r)=>{for(var i=r>1?void 0:r?bv(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&gv(t,n,i),i};const wv='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',yv=$`<span class="mi sm">extension</span>`,cc="plugin:catalogUrls";function ui(){return new URL("/easydbaccess3/plugins/catalog.json",location.origin).toString()}const vv=[["installed","Installed"],["built-in","Built-in"],["fixed","Fixed"]],dd=[["importer","Importer"],["exporter","Exporter"],["cell-renderer","Cell renderer"],["sync","Sync"],["source","Source"],["ui","UI"]],xv=new Map(dd),$v={off:"Filter by status — click: only enabled → only disabled → off",on:"Showing only enabled plugins — click to show only disabled",not:"Showing only disabled plugins — click to clear"};let Fe=class extends ve{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.catalogUrls=[ui()],this.activeCatalogUrl=ui(),this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pt(this.dialogEl,e)}async open(){const e=await ae(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const n=await e.store.plugins.find();this.records=new Map(n.map(s=>[s.url,s]));const r=await e.store.settings.findOne(cc),i=Array.isArray(r?.value)?r.value.filter(s=>typeof s=="string"):[];this.catalogUrls=i.length>0?i:[ui()],this.activeCatalogUrl=this.catalogUrls[0]??ui(),this.addUrl="",this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(this.activeCatalogUrl),this.refreshServerRegistry()}async refreshCatalog(e){try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json(),r=Array.isArray(n.plugins)?n.plugins:[];this.catalog=r.map(i=>({...i,absUrl:new URL(i.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const n=(await(await ae()).store.settings.findOne("server-sync:url"))?.value;if(typeof n!="string"||n.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const i=`${n.replace(/\/+$/,"")}/plugins/registry`;try{const s=await fetch(i,{cache:"no-store"});if(!s.ok)throw new Error(`HTTP ${s.status}`);const a=await s.json(),c=Array.isArray(a.plugins)?a.plugins:[];this.serverCatalog=c.map(u=>({...u,absUrl:new URL(u.url,i).toString()})),this.serverCatalogError=null}catch(s){this.serverCatalog=[],this.serverCatalogError=s.message}}async reloadCatalogSource(){const e=this.activeCatalogUrl.trim();e&&(this.catalogUrls.includes(e)||(this.catalogUrls=[...this.catalogUrls,e],await(await ae()).store.settings.upsert({name:cc,value:this.catalogUrls})),await this.refreshCatalog(e))}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await ae()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const n=await ae();await n.store.workspaces.patch(n.workspaceId,{pluginUrls:this.urls}),await n.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const n=await ae(),r=this.records.get(e);await n.store.plugins.upsert({...r??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...r,url:e,enabled:t,lastFetched:r?.lastFetched??0}))}async removePlugin(e){const t=await ae();this.urls=this.urls.filter(n=>n!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const n=await ae(),r=fo(e),i=this.records.get(r);await n.store.plugins.upsert({...i??{url:r,lastFetched:0},url:r,enabled:t,lastFetched:i?.lastFetched??0}),this.records=new Map(this.records.set(r,{...i,url:r,enabled:t,lastFetched:i?.lastFetched??0}))}async onRowToggle(e,t){if(e.categories.has("built-in"))await this.toggleBuiltin(e.id,t);else if(e.url)await this.toggleEnabled(e.url,t);else return;(await ae()).api.ui.dialogs.toast("Reload to apply this change.",{kind:"info",title:"Plugin updated"})}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await ae();try{const n=await fetch(e.absUrl,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status} ${n.statusText}`);const r=await n.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:r});const i=new Blob([r],{type:"text/javascript"}),s=URL.createObjectURL(i);try{const c=await import(s);await c.init?.(t.api),await c.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(s),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const a=await t.store.plugins.find();this.records=new Map(a.map(c=>[c.url,c])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(n){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${n.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${n.message}`,{kind:"error",title:"Plugin error"})}finally{const n=new Set(this.installing);n.delete(e.absUrl),this.installing=n}}renderTri(e,t,n,r="",i){const s=i?i[t??"off"]:t==="on"?`Showing only ${e} plugins — click to exclude`:t==="not"?`Hiding ${e} plugins — click to clear`:`Filter by ${e} — click: show only → exclude → off`;return $`
      <button
        type="button"
        class=${`tri${r?` ${r}`:""}${t?` ${t}`:""}`}
        title=${s}
        aria-pressed=${t!==void 0}
        @click=${n}
      >
        <span class="tri-mark">${t==="on"?"✓":t==="not"?"≠":""}</span>${e}
      </button>
    `}cycleState(e,t){const n=e.get(t),r=new Map(e);return n===void 0?r.set(t,"on"):n==="on"?r.set(t,"not"):r.delete(t),r}cycleFilter(e){this.filterStates=this.cycleState(this.filterStates,e)}cycleTypeFilter(e){this.typeFilters=this.cycleState(this.typeFilters,e)}cycleStatusFilter(){this.statusFilter=this.statusFilter===void 0?"on":this.statusFilter==="on"?"not":void 0}buildRows(){const e=new Map,t=new Map;for(const{id:n,meta:r}of Sy){const i=r.fixed?!0:this.records.get(fo(n))?.enabled!==!1,s=!r.fixed&&wt==="all-optional",a=r.fixed?["built-in","fixed","installed"]:["built-in","installed"];e.set(`builtin:${n}`,{id:n,name:r.name,...r.type?{type:r.type}:{},...r.description?{meta:r.description}:{meta:"Built-in plugin"},...r.author?{author:r.author}:{},...r.icon?{icon:r.icon}:{},...r.repo?{repo:r.repo}:{},categories:new Set(a),enabled:i,status:i&&!s?"enabled":"disabled",fixed:!!r.fixed,...s?{skipped:!0}:{}})}for(const n of[...this.catalog,...this.serverCatalog]){const r=this.urls.includes(n.absUrl),i=this.records.get(n.absUrl),s=r?["available","installed"]:["available"],a=e.get(n.id),c=i?.enabled!==!1,u=r&&wt!=="off";e.set(n.id,{id:n.id,name:n.name,url:n.absUrl,...n.type?{type:n.type}:{},...n.icon?{icon:n.icon}:{},...n.repo?{repo:n.repo}:{},...n.author?{author:n.author}:{},meta:n.description??n.absUrl,categories:a?new Set([...a.categories,...s]):new Set(s),enabled:c,...r?{status:c&&!u?"enabled":"disabled"}:{},...u?{skipped:!0}:{},installing:this.installing.has(n.absUrl)}),t.set(n.absUrl,n.id)}for(const n of this.urls){const r=t.get(n);if(r){e.get(r).categories.add("installed");continue}const i=this.records.get(n),s=i?.lastFetched?new Date(i.lastFetched).toLocaleString():"never",a=i?.enabled!==!1;e.set(`url:${n}`,{id:n,name:n,urlOnly:!0,url:n,meta:i?.lastError??`Last fetched: ${s}`,metaIsError:!!i?.lastError,categories:new Set(["installed"]),enabled:a,status:a&&wt==="off"?"enabled":"disabled",...wt!=="off"?{skipped:!0}:{}})}return[...e.values()]}get filteredRows(){const e=this.buildRows(),t=this.search.trim().toLowerCase(),n=[],r=[];for(const[u,f]of this.filterStates)(f==="on"?n:r).push(u);const i=[],s=[];for(const[u,f]of this.typeFilters)(f==="on"?i:s).push(u);const a=this.statusFilter==="on"?"enabled":this.statusFilter==="not"?"disabled":void 0,c=e.filter(u=>!(n.length&&!n.some(f=>u.categories.has(f))||r.some(f=>u.categories.has(f))||i.length&&!(u.type&&i.includes(u.type))||u.type&&s.includes(u.type)||a&&u.status!==a));return t?c.filter(u=>[u.id,u.name,u.type,u.meta,u.author].some(f=>f?.toLowerCase().includes(t))):c}renderRow(e){const t=e.categories.has("built-in")||e.categories.has("installed"),n=!!e.url&&e.categories.has("installed"),r=!!e.url&&!e.categories.has("installed");return $`
      <div
        class=${`row${e.categories.has("built-in")?" builtin":""}${e.metaIsError?" error":""}${e.skipped?" skipped":""}`}
      >
        <span class="row-icon">${e.icon?An(e.icon):yv}</span>
        <div class="row-main">
          <div class=${`row-title${e.urlOnly?" mono":""}`}>
            ${e.name}${e.id!==e.name?$`<span class="row-id">${e.id}</span>`:""}${e.type?$`<span class="row-type" title="Plugin type"
                  >${xv.get(e.type)??e.type}</span
                >`:""}${e.skipped?$`<span
                  class="row-skipped"
                  title="Safe mode kept this plugin from loading this session — your saved setting is unchanged"
                  >skipped</span
                >`:""}
          </div>
          ${e.meta?$`<div class=${`meta${e.metaIsError?" err":""}`}>${e.meta}</div>`:""}
        </div>
        <div class="row-author">${e.author??""}</div>
        ${e.repo?$`<a
              class="row-repo"
              href=${e.repo}
              target="_blank"
              rel="noopener noreferrer"
              title="View source on GitHub"
              >${An(wv)}</a
            >`:$`<span></span>`}
        ${e.fixed?$`<span class="mi sm lock-icon" title="Always on — cannot be disabled">lock</span>`:t?$`<label
                class="switch"
                title=${e.skipped?"Your saved setting — safe mode is what stopped this plugin loading now":"Enable / disable"}
              >
                <input
                  type="checkbox"
                  .checked=${e.enabled}
                  @change=${i=>this.onRowToggle(e,i.target.checked)}
                />
                <span class="slider"></span>
              </label>`:$`<span></span>`}
        ${r?$`<button
              type="button"
              class="install"
              ?disabled=${e.installing}
              @click=${()=>this.installFromCatalog({absUrl:e.url,name:e.name})}
            >
              <span class="mi sm">${e.installing?"hourglass_empty":"download"}</span>
              ${e.installing?"Installing…":"Install"}
            </button>`:n?$`<button
                type="button"
                class="uninstall"
                @click=${()=>this.removePlugin(e.url)}
              >
                <span class="mi sm">delete</span> Uninstall
              </button>`:$`<span></span>`}
      </div>
    `}render(){const e=this.filteredRows;return $`
      <dialog @cancel=${this.close} @keydown=${ft}>
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
            ${wt!=="off"?$`<p class="safemode">
                  <strong>Safe mode is on.</strong>
                  ${wt==="all-optional"?$`<code>?safemode</code> skipped every URL plugin and every optional
                        built-in for this session.`:$`<code>?safemode1</code> skipped every URL plugin for this session.`}
                  Plugins marked <span class="row-skipped">skipped</span> are not running. The
                  toggles below still show — and change — your saved settings, which safe mode never
                  touches. Reload without the flag to run them again.
                </p>`:""}

            <div class="filters">
              <div class="chips">
                ${vv.map(([t,n])=>this.renderTri(n,this.filterStates.get(t),()=>this.cycleFilter(t)))}
                ${this.renderTri("Enabled",this.statusFilter,()=>this.cycleStatusFilter(),"status",$v)}
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
              ${dd.map(([t,n])=>this.renderTri(n,this.typeFilters.get(t),()=>this.cycleTypeFilter(t)))}
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
                ${this.catalogUrls.map(t=>$`<option value=${t}></option>`)}
              </datalist>
              <button type="button" class="ghost" @click=${this.reloadCatalogSource}>
                <span class="mi sm">refresh</span> Reload
              </button>
            </div>
            ${this.catalogError?$`<div class="meta err">Catalog unavailable: ${this.catalogError}</div>`:""}
            ${this.serverCatalogError?$`<div class="meta err">
                  Server registry unavailable: ${this.serverCatalogError}
                </div>`:""}

            <div class="plugin-list">
              ${e.length===0?$`<p class="hint">No plugins match the current filters/search.</p>`:""}
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
    `}};Fe.styles=[mt,ht,$e`
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
    `];Xe([U()],Fe.prototype,"urls",2);Xe([U()],Fe.prototype,"records",2);Xe([U()],Fe.prototype,"addUrl",2);Xe([U()],Fe.prototype,"catalog",2);Xe([U()],Fe.prototype,"catalogError",2);Xe([U()],Fe.prototype,"serverCatalog",2);Xe([U()],Fe.prototype,"serverCatalogError",2);Xe([U()],Fe.prototype,"installing",2);Xe([U()],Fe.prototype,"catalogUrls",2);Xe([U()],Fe.prototype,"activeCatalogUrl",2);Xe([U()],Fe.prototype,"search",2);Xe([U()],Fe.prototype,"filterStates",2);Xe([U()],Fe.prototype,"typeFilters",2);Xe([U()],Fe.prototype,"statusFilter",2);Fe=Xe([Ce("plugin-manager-dialog")],Fe);var kv=Object.defineProperty,_v=Object.getOwnPropertyDescriptor,Nt=(e,t,n,r)=>{for(var i=r>1?void 0:r?_v(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&kv(t,n,i),i};const cr="__general__";let Je=class extends ve{constructor(){super(...arguments),this.tabs=[],this.active=cr,this.values={},this.placements={},this.secretsText="",this.workspaceTitle="",this.secretError="",this.openHelp="",this.dialogEl=null,this.attemptClose=e=>{const t=this.invalidSecrets();if(t.length>0){e?.preventDefault();const r=t[0];this.active=r.tab.id,this.secretError=`“${r.field.label}” must be empty or a \${secret:name} reference. Move the value into the secrets store (General tab) and reference it, so the raw secret is never saved or synced.`;return}const n=this.danglingSecrets();if(n.length>0){e?.preventDefault();const r=n[0];this.active=r.tab.id;const i=r.names.map(s=>`“${s}”`).join(", ");this.secretError=`“${r.field.label}” references ${i}, which the secrets store does not have. Add it in the General tab or correct the name — an unknown reference is passed on as the literal \${secret:name} text.`;return}this.secretError="",this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.attemptClose()}}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pt(this.dialogEl,e),this.dialogEl&&ud("settings",this.dialogEl)}async open(){const e=await ae(),t=[...e.registries.settings];this.tabs=t.map(([s,a])=>({id:s,name:a.name,fields:a.fields}));const n=await e.store.workspaces.findOne(e.workspaceId);this.workspaceTitle=n?.title??"";const r={},i={};for(const s of this.tabs)for(const a of s.fields){const c=`${s.id}:${a.key}`,u=await e.api.settings.placement(s.id,a.key);u==="user"?(r[c]=Co(c),i[c]="user"):u==="workspace"?(r[c]=(await e.store.settings.findOne(c))?.value,i[c]="workspace"):(r[c]=a.default,i[c]=a.scope??"workspace")}this.values=r,this.placements=i,this.secretsText=Li(),this.active=cr,await this.updateComplete,this.dialogEl?.showModal()}static rawSecret(e){return typeof e=="string"&&e!==""&&!e.includes("${secret:")}invalidSecrets(){const e=[];for(const t of this.tabs)for(const n of t.fields)n.type==="secret"&&Je.rawSecret(this.values[`${t.id}:${n.key}`])&&e.push({tab:t,field:n});return e}static secretRefs(e){return typeof e!="string"?[]:[...e.matchAll(/\$\{secret:([^}]*)\}/g)].map(t=>(t[1]??"").trim())}missingRefs(e){const t=new Set(Object.keys(br(this.secretsText)));return Je.secretRefs(e).filter(n=>!t.has(n))}danglingSecrets(){const e=[];for(const t of this.tabs)for(const n of t.fields){const r=this.missingRefs(this.values[`${t.id}:${n.key}`]);r.length>0&&e.push({tab:t,field:n,names:r})}return e}async setValue(e,t,n){const r=`${e.id}:${t.key}`;this.values={...this.values,[r]:n},this.clearSecretErrorIfFixed(),await(await ae()).api.settings.set(e.id,t.key,n,this.placements[r])}async toggleScope(e,t,n){const r=`${e.id}:${t.key}`,i=n?"user":"workspace";this.placements={...this.placements,[r]:i},await(await ae()).api.settings.set(e.id,t.key,this.values[r],i)}clearSecretErrorIfFixed(){this.secretError&&this.invalidSecrets().length===0&&this.danglingSecrets().length===0&&(this.secretError="")}onSecretsInput(e){this.secretsText=e.target.value,Ic(this.secretsText),this.clearSecretErrorIfFixed()}downloadSecrets(){const e=new Blob([this.secretsText],{type:"text/plain;charset=utf-8"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download="secrets.txt",n.click(),URL.revokeObjectURL(t)}async setWorkspaceTitle(e){this.workspaceTitle=e;const t=await ae();await t.store.workspaces.patch(t.workspaceId,{title:e.trim()||void 0})}renderControl(e,t){const n=`${e.id}:${t.key}`,r=this.values[n];switch(t.type){case"text":return $`<textarea
          .value=${String(r??"")}
          @change=${i=>this.setValue(e,t,i.target.value)}
        ></textarea>`;case"number":return $`<input
          type="number"
          .value=${r==null?"":String(r)}
          @change=${i=>{const s=i.target.value;this.setValue(e,t,s===""?void 0:Number(s))}}
        />`;case"boolean":return $`<label class="scope"
          ><input
            type="checkbox"
            .checked=${!!r}
            @change=${i=>this.setValue(e,t,i.target.checked)}
          />
          enabled</label
        >`;case"date":return $`<input
          type="date"
          .value=${String(r??"")}
          @change=${i=>this.setValue(e,t,i.target.value)}
        />`;case"secret":return this.renderSecretControl(e,t,r);case"option":return $`<div class="radios">
          ${(t.options??[]).map(i=>$`<label
              ><input
                type="radio"
                name=${n}
                .checked=${r===i}
                @change=${()=>this.setValue(e,t,i)}
              />${i}</label
            >`)}
        </div>`;case"selection":{const i=Array.isArray(r)?r:[];return $`<div class="checks">
          ${(t.options??[]).map(s=>$`<label
              ><input
                type="checkbox"
                .checked=${i.includes(s)}
                @change=${a=>{const u=a.target.checked?[...i,s]:i.filter(f=>f!==s);this.setValue(e,t,u)}}
              />${s}</label
            >`)}
        </div>`}case"string":default:return $`<input
          type="text"
          .value=${String(r??"")}
          @change=${i=>this.setValue(e,t,i.target.value)}
        />`}}renderSecretControl(e,t,n){const r=Object.keys(br(this.secretsText)),i=Je.rawSecret(n)||this.missingRefs(n).length>0;return $`<div class="secret-row">
      <input
        type="text"
        class=${i?"invalid":""}
        placeholder="value or \${secret:name}"
        .value=${String(n??"")}
        @change=${s=>this.setValue(e,t,s.target.value)}
      />
      ${r.length>0?$`<select
            title="Insert a secret reference"
            @change=${s=>{const a=s.target.value;a&&this.setValue(e,t,`\${secret:${a}}`),s.target.value=""}}
          >
            <option value="">🔑 secret…</option>
            ${r.map(s=>$`<option value=${s}>${s}</option>`)}
          </select>`:re}
    </div>`}renderField(e,t){const n=`${e.id}:${t.key}`,r=!!(t.help||t.helpUrl),i=this.openHelp===n;return $`<div class="field">
      <div class="field-head">
        <label>${t.label}</label>
        ${r?$`<button
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
      ${r&&i?$`<div class="help-panel">
            ${t.help?$`<p>${t.help}</p>`:re}
            ${t.helpUrl?$`<a href=${t.helpUrl} target="_blank" rel="noopener noreferrer"
                  >${t.helpLinkLabel||Cv(t.helpUrl)}</a
                >`:re}
          </div>`:re}
      ${this.renderControl(e,t)}
      ${t.description?$`<p class="desc">${t.description}</p>`:re}
    </div>`}renderGeneral(){return $`
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
    `}renderPanel(){if(this.active===cr)return this.renderGeneral();const e=this.tabs.find(t=>t.id===this.active);return e?$`
      <h3>${e.name}</h3>
      ${e.fields.length===0?$`<p class="empty">This plugin registered no settings.</p>`:e.fields.map(t=>this.renderField(e,t))}
    `:re}render(){return $`
      <dialog @cancel=${this.attemptClose} @keydown=${ft}>
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
          ${this.secretError?$`<div class="secret-error" role="alert">${this.secretError}</div>`:re}
          <div class="dialog-body">
            <div class="layout">
              <nav class="tabs">
                <button
                  type="button"
                  class=${this.active===cr?"active":""}
                  @click=${()=>this.active=cr}
                >
                  General
                </button>
                ${this.tabs.map(e=>$`<button
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
    `}};Je.styles=[mt,ht,$e`
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
    `];Nt([U()],Je.prototype,"tabs",2);Nt([U()],Je.prototype,"active",2);Nt([U()],Je.prototype,"values",2);Nt([U()],Je.prototype,"placements",2);Nt([U()],Je.prototype,"secretsText",2);Nt([U()],Je.prototype,"workspaceTitle",2);Nt([U()],Je.prototype,"secretError",2);Nt([U()],Je.prototype,"openHelp",2);Je=Nt([Ce("settings-dialog")],Je);function Cv(e){try{return new URL(e).host}catch{return e}}const hd=5,uc="palette:recent",fd="Recent";function Sv(e,t,n=hd){return[t,...e.filter(r=>r!==t)].slice(0,n)}function Ev(e){return Array.isArray(e)?e.filter(t=>typeof t=="string").slice(0,hd):[]}function Tv(e,t){if(t.length===0)return e;const n=new Map(e.map(s=>[s.id,s])),r=[];for(const s of t){const a=n.get(s);a&&r.push({...a,group:fd})}if(r.length===0)return e;const i=new Set(r.map(s=>s.id));return[...r,...e.filter(s=>!i.has(s.id))]}var Iv=Object.defineProperty,Av=Object.getOwnPropertyDescriptor,qn=(e,t,n,r)=>{for(var i=r>1?void 0:r?Av(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Iv(t,n,i),i};const Rv={[fd]:-1,Windows:0,Actions:1,App:2,Tables:3,Views:4};function dc(e){return Rv[e]??3}function Ov(e){return e?e.trimStart().startsWith("<svg")?$`<span class="cmd-svg">${xo(e)}</span>`:$`<span class="mi sm">${e}</span>`:$`<span class="mi sm">chevron_right</span>`}let Jt=class extends ve{constructor(){super(...arguments),this.search="",this.items=[],this.selected=0,this.api=null,this.recentIds=[],this.onDialogClick=e=>{if(e.detail===0||!this.dialogEl)return;const t=this.dialogEl.getBoundingClientRect();e.clientX>=t.left&&e.clientX<=t.right&&e.clientY>=t.top&&e.clientY<=t.bottom||this.close()}}async open(){const e=await ae();this.api=e.api,this.recentIds=Ev((await e.api.store.settings.findOne(uc))?.value),this.items=await this.buildItems(),this.search="",this.selected=0,await this.updateComplete,this.dialogEl&&!this.dialogEl.open&&this.dialogEl.showModal(),this.inputEl?.focus()}async buildItems(){const e=await ae(),t=e.api,n=[];for(const s of e.registries.commands)n.push({id:s.id,title:s.title,group:s.group??"Commands",...s.icon?{icon:s.icon}:{},haystack:[s.title,s.group,...s.keywords??[]].join(" ").toLowerCase(),run:()=>s.run(t)});for(const s of[...e.registries.headerButtons,...e.registries.footerButtons])n.push({id:`button:${s.id}`,title:s.label,group:"Actions",...s.icon?{icon:s.icon}:{},haystack:`${s.label} ${s.tooltip??""}`.toLowerCase(),run:()=>s.onClick(t)});const r=await t.store.tables.find({workspaceId:e.workspaceId});r.sort((s,a)=>s.name.localeCompare(a.name));for(const s of r)n.push({id:`goto:${s.id}`,title:`Go to: ${s.name}`,group:"Tables",icon:"table_chart",haystack:`${s.name} go to table`.toLowerCase(),run:()=>{Uu(s.id)}});const i=await t.store.viewInstances.find({workspaceId:e.workspaceId});i.sort((s,a)=>s.name.localeCompare(a.name));for(const s of i)n.push({id:`goto-view:${s.id}`,title:`Go to view: ${s.name}`,group:"Views",icon:"view_quilt",haystack:`${s.name} go to view`.toLowerCase(),run:async()=>{await t.store.viewInstances.patch(s.id,{open:!0,updatedAt:Date.now()}),Oy(s.id)}});return Tv(n,this.recentIds).map((s,a)=>({it:s,i:a})).sort((s,a)=>dc(s.it.group)-dc(a.it.group)||s.i-a.i).map(({it:s})=>s)}get filtered(){const e=this.search.trim().toLowerCase();return e?this.items.filter(t=>t.haystack.includes(e)):this.items}close(){this.dialogEl?.close()}onInput(e){this.search=e.target.value,this.selected=0}onKeydown(e){const t=this.filtered;if(e.key==="ArrowDown")e.preventDefault(),this.selected=t.length?(this.selected+1)%t.length:0;else if(e.key==="ArrowUp")e.preventDefault(),this.selected=t.length?(this.selected-1+t.length)%t.length:0;else if(e.key==="Enter"){e.preventDefault();const n=t[this.selected];n&&this.execute(n)}}async execute(e){this.close(),this.remember(e.id);try{await e.run()}catch(t){console.error(`[command:${e.id}]`,t)}}async remember(e){this.recentIds=Sv(this.recentIds,e);try{await this.api?.store.settings.upsert({name:uc,value:this.recentIds})}catch(t){console.warn("[command-palette] could not save recent commands",t)}}render(){const e=this.filtered;let t="";return $`
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
          ${e.length===0?$`<div class="empty">No matching commands.</div>`:e.map((n,r)=>{const i=n.group!==t?(t=n.group,n.group):null;return $`
                  ${i?$`<div class="group-head">${i}</div>`:""}
                  <div
                    class=${`item${r===this.selected?" sel":""}`}
                    @mousemove=${()=>this.selected=r}
                    @click=${()=>this.execute(n)}
                  >
                    ${Ov(n.icon)}
                    <span class="title">${n.title}</span>
                  </div>
                `})}
        </div>
      </dialog>
    `}};Jt.styles=[mt,$e`
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
    `];qn([U()],Jt.prototype,"search",2);qn([U()],Jt.prototype,"items",2);qn([U()],Jt.prototype,"selected",2);qn([Dt("dialog")],Jt.prototype,"dialogEl",2);qn([Dt("input")],Jt.prototype,"inputEl",2);Jt=qn([Ce("command-palette-dialog")],Jt);var Dv=Object.defineProperty,Pv=Object.getOwnPropertyDescriptor,pd=(e,t,n,r)=>{for(var i=r>1?void 0:r?Pv(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Dv(t,n,i),i};let Ri=class extends ve{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await ae();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(n=>this.tables=n.filter(r=>r.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(n=>n.workspaceId===this.workspaceId),await Bu(),await Ly()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?$``:$`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on the
      page, or click <strong>+ New Table</strong> above.
    </div>`}};Ri.styles=$e`
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
  `;pd([U()],Ri.prototype,"tables",2);Ri=pd([Ce("table-list")],Ri);function di(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function Lv(e,t){const{from:n,to:r,name:i,mode:s}=t,a=await e.workspaces.get(n);if(await e.workspaces.put({id:r,name:i,createdAt:Date.now(),pluginUrls:s==="empty"?[]:[...a?.pluginUrls??[]]}),s==="empty")return r;if(s==="all"){const u=await e.tables.where("workspaceId").equals(n).toArray(),f=new Map;for(const v of u){const C=di();f.set(v.id,C),await e.tables.put({...v,id:C,workspaceId:r,updatedAt:Date.now()})}for(const[v,C]of f){const _=await e.rows.where("tableId").equals(v).toArray();_.length>0&&await e.rows.bulkPut(_.map(O=>({...O,id:di(),tableId:C})))}const g=await e.viewTemplates.where("workspaceId").equals(n).toArray(),b=new Map;for(const v of g){const C=di();b.set(v.id,C),await e.viewTemplates.put({...v,id:C,workspaceId:r})}const y=await e.viewInstances.where("workspaceId").equals(n).toArray();for(const v of y){const C=f.get(v.tableId);C&&await e.viewInstances.put({...v,id:di(),workspaceId:r,tableId:C,templateId:b.get(v.templateId)??v.templateId})}}const c=await e.settings.where("workspaceId").equals(n).toArray();for(const u of c)await e.settings.put({...u,key:hn(r,u.name),workspaceId:r,name:u.name});return r}var Mv=Object.defineProperty,jv=Object.getOwnPropertyDescriptor,ta=(e,t,n,r)=>{for(var i=r>1?void 0:r?jv(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Mv(t,n,i),i};const hc="Clone everything (tables, views, settings)",fc="Clone settings only (no data)",Nv="Empty workspace";let $r=class extends ve{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await ae();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(i=>i.id===e);if(!t)return;const n=new URLSearchParams(location.search);n.set("space",t.name);const r=`${location.pathname}?${n.toString()}${location.hash}`;location.assign(r)}async addWorkspace(){const e=await ae(),t=await e.api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const n=await e.api.ui.dialogs.choice(`What should "${t.trim()}" start with?`,[hc,fc,Nv],"New workspace");if(!n)return;const r=n===hc?"all":n===fc?"settings":"empty",i=cd(t.trim());await Lv(Cc(),{from:e.workspaceId,to:i,name:t.trim(),mode:r});const s=new URLSearchParams(location.search);s.set("space",t.trim()),location.assign(`${location.pathname}?${s.toString()}${location.hash}`)}render(){return $`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>$`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};$r.styles=[mt,$e`
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
    `];ta([U()],$r.prototype,"workspaces",2);ta([U()],$r.prototype,"current",2);$r=ta([Ce("workspace-selector")],$r);var pc=Object.freeze,md=Object.defineProperty,zv=Object.getOwnPropertyDescriptor,$t=(e,t,n,r)=>{for(var i=r>1?void 0:r?zv(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&md(t,n,i),i},Uv=(e,t)=>pc(md(e,"raw",{value:pc(e.slice())})),mc;function gc(e){return e?e.trimStart().startsWith("<svg")?$`<span class="icon-svg" aria-hidden="true">${xo(e)}</span>`:$`<span class="mi sm" aria-hidden="true">${e}</span>`:""}let Ze=class extends ve{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.workspaceTitle="",this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId,{notice:t.detail.notice})},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onOpenSettings=()=>{this.settingsDialog?.open()},this.onOpenCommandPalette=()=>{this.commandPaletteDialog?.open()},this.onGlobalKeydown=e=>{(e.ctrlKey||e.metaKey)&&!e.altKey&&(e.key==="k"||e.key==="K")&&(e.preventDefault(),this.commandPaletteDialog?.open())},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{wc(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!wc(e))return;e.preventDefault();const t=await ae(),n=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:n,event:e});for(const r of[...t.registries.dropHandlers])try{if(await r(e,t.api))return}catch(i){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:i})}},this.runSlot=(e,t)=>{if(!this.api)return;const n=t?.currentTarget??void 0;Promise.resolve(e.onClick(this.api,{anchor:n})).catch(r=>{console.error(`[footer-button:${e.id}]`,r)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.addEventListener("easydb:open-settings",this.onOpenSettings),document.addEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.addEventListener("easydb:focus-search",this.openSearch),document.addEventListener("keydown",this.onGlobalKeydown),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.removeEventListener("easydb:open-settings",this.onOpenSettings),document.removeEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.removeEventListener("easydb:focus-search",this.openSearch),document.removeEventListener("keydown",this.onGlobalKeydown),this.workspaceUnsub?.()}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await ae();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e)),this.workspaceUnsub=e.store.workspaces.subscribe(t=>{const n=t.find(r=>r.id===e.workspaceId);this.workspaceTitle=n?.title?.trim()??"",Fv(this.workspaceTitle)})}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){if(e.variant==="secondary")return $`
        <button class="icon-btn" title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
          ${gc(e.icon)}
        </button>
      `;const n=t==="header"||e.variant==="primary"?"primary":"slot";return $`
      <button class=${n} title=${e.tooltip??e.label} @click=${r=>this.runSlot(e,r)}>
        ${gc(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return $(mc||(mc=Uv([`
      <header>
        <strong
          >`,`
          <a
            class="version-link"
            href="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md"
            target="_blank"
            rel="noopener"
            title="View the changelog on GitHub"
            ><span class="version">v0.0.257</span></a
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
    `])),this.workspaceTitle||"easyDBAccess",this.headerButtons.filter(e=>e.variant!=="secondary").map(e=>this.renderSlotButton(e,"header")),this.searchOpen?$`<span class="search-wrap">
              <input
                class="search"
                type="search"
                placeholder="search all tables…"
                .value=${this.searchQuery}
                @input=${this.onSearchInput}
                @blur=${this.closeSearchOnBlur}
              />
              ${this.searchQuery.length>0?$`<button
                    class="search-clear"
                    title="Clear search"
                    aria-label="Clear search"
                    @mousedown=${this.clearSearch}
                  >
                    ×
                  </button>`:""}
            </span>`:$`<button
              class="icon-btn ${this.searchQuery.trim().length>0?"active":""}"
              title=${this.searchQuery.trim().length>0?`Filtering all tables: ${this.searchQuery}`:"Search across all tables in this workspace"}
              aria-label="Search"
              @click=${this.openSearch}
            >
              <span class="mi" aria-hidden="true">search</span>
            </button>`,()=>this.api?.ui.openPluginManager(),this.headerButtons.filter(e=>e.variant==="secondary").map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};Ze.styles=[mt,$e`
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
    `];$t([Dt("new-table-dialog")],Ze.prototype,"dialog",2);$t([Dt("csv-paste-dialog")],Ze.prototype,"csvPasteDialog",2);$t([Dt("plugin-manager-dialog")],Ze.prototype,"pluginManagerDialog",2);$t([Dt("settings-dialog")],Ze.prototype,"settingsDialog",2);$t([Dt("command-palette-dialog")],Ze.prototype,"commandPaletteDialog",2);$t([Dt("input.search")],Ze.prototype,"searchInput",2);$t([U()],Ze.prototype,"footerButtons",2);$t([U()],Ze.prototype,"headerButtons",2);$t([U()],Ze.prototype,"searchQuery",2);$t([U()],Ze.prototype,"searchOpen",2);$t([U()],Ze.prototype,"workspaceTitle",2);Ze=$t([Ce("app-shell")],Ze);const bc=document.title;function Fv(e){const t=e.trim();document.title=t?`${t} — ${bc}`:bc}function wc(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([ae(),ct(()=>Promise.resolve().then(()=>ed),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});export{re as A,$e as a,$ as b,ft as c,ht as d,ve as i,pt as m,U as r,Ce as t};
//# sourceMappingURL=index-BG6duPte.js.map
