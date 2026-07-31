(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Bd="modulepreload",Hd=function(e){return"/easydbaccess3/"+e},ja={},at=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){let a=function(p){return Promise.all(p.map(g=>Promise.resolve(g).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),d=c?.nonce||c?.getAttribute("nonce");i=a(n.map(p=>{if(p=Hd(p),p in ja)return;ja[p]=!0;const g=p.endsWith(".css"),b=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${b}`))return;const y=document.createElement("link");if(y.rel=g?"stylesheet":Bd,g||(y.as="script"),y.crossOrigin="",y.href=p,d&&y.setAttribute("nonce",d),document.head.appendChild(y),g)return new Promise((C,x)=>{y.addEventListener("load",C),y.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${p}`)))})}))}function s(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return i.then(a=>{for(const c of a||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ui=globalThis,bo=ui.ShadowRoot&&(ui.ShadyCSS===void 0||ui.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wo=Symbol(),za=new WeakMap;let mc=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==wo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(bo&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=za.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&za.set(n,t))}return t}toString(){return this.cssText}};const qd=e=>new mc(typeof e=="string"?e:e+"",void 0,wo),$e=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,s)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new mc(n,e,wo)},Kd=(e,t)=>{if(bo)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=ui.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},Na=bo?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return qd(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Vd,defineProperty:Gd,getOwnPropertyDescriptor:Wd,getOwnPropertyNames:Yd,getOwnPropertySymbols:Xd,getPrototypeOf:Jd}=Object,Ii=globalThis,Ua=Ii.trustedTypes,Qd=Ua?Ua.emptyScript:"",Zd=Ii.reactiveElementPolyfillSupport,cr=(e,t)=>e,mi={toAttribute(e,t){switch(t){case Boolean:e=e?Qd:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},yo=(e,t)=>!Vd(e,t),Fa={attribute:!0,type:String,converter:mi,reflect:!1,useDefault:!1,hasChanged:yo};Symbol.metadata??=Symbol("metadata"),Ii.litPropertyMetadata??=new WeakMap;let En=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Fa){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&Gd(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:s}=Wd(this.prototype,t)??{get(){return this[n]},set(a){this[n]=a}};return{get:i,set(a){const c=i?.call(this);s?.call(this,a),this.requestUpdate(t,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Fa}static _$Ei(){if(this.hasOwnProperty(cr("elementProperties")))return;const t=Jd(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(cr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(cr("properties"))){const n=this.properties,r=[...Yd(n),...Xd(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(Na(i))}else t!==void 0&&n.push(Na(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Kd(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:mi).toAttribute(n,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,n){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:mi;this._$Em=i;const c=a.fromAttribute(n,s.type);this[i]=c??this._$Ej?.get(i)??c,this._$Em=null}}requestUpdate(t,n,r,i=!1,s){if(t!==void 0){const a=this.constructor;if(i===!1&&(s=this[t]),r??=a.getPropertyOptions(t),!((r.hasChanged??yo)(s,n)||r.useDefault&&r.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:i,wrapped:s},a){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??n??this[t]),s!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,s]of r){const{wrapped:a}=s,c=this[i];a!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,s,c)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};En.elementStyles=[],En.shadowRootOptions={mode:"open"},En[cr("elementProperties")]=new Map,En[cr("finalized")]=new Map,Zd?.({ReactiveElement:En}),(Ii.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vo=globalThis,Ba=e=>e,gi=vo.trustedTypes,Ha=gi?gi.createPolicy("lit-html",{createHTML:e=>e}):void 0,gc="$lit$",Vt=`lit$${Math.random().toFixed(9).slice(2)}$`,bc="?"+Vt,eh=`<${bc}>`,fn=document,dr=()=>fn.createComment(""),hr=e=>e===null||typeof e!="object"&&typeof e!="function",xo=Array.isArray,th=e=>xo(e)||typeof e?.[Symbol.iterator]=="function",Ms=`[ 	
\f\r]`,rr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qa=/-->/g,Ka=/>/g,ln=RegExp(`>|${Ms}(?:([^\\s"'>=/]+)(${Ms}*=${Ms}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Va=/'/g,Ga=/"/g,wc=/^(?:script|style|textarea|title)$/i,nh=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),$=nh(1),pn=Symbol.for("lit-noChange"),se=Symbol.for("lit-nothing"),Wa=new WeakMap,hn=fn.createTreeWalker(fn,129);function yc(e,t){if(!xo(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ha!==void 0?Ha.createHTML(t):t}const rh=(e,t)=>{const n=e.length-1,r=[];let i,s=t===2?"<svg>":t===3?"<math>":"",a=rr;for(let c=0;c<n;c++){const d=e[c];let p,g,b=-1,y=0;for(;y<d.length&&(a.lastIndex=y,g=a.exec(d),g!==null);)y=a.lastIndex,a===rr?g[1]==="!--"?a=qa:g[1]!==void 0?a=Ka:g[2]!==void 0?(wc.test(g[2])&&(i=RegExp("</"+g[2],"g")),a=ln):g[3]!==void 0&&(a=ln):a===ln?g[0]===">"?(a=i??rr,b=-1):g[1]===void 0?b=-2:(b=a.lastIndex-g[2].length,p=g[1],a=g[3]===void 0?ln:g[3]==='"'?Ga:Va):a===Ga||a===Va?a=ln:a===qa||a===Ka?a=rr:(a=ln,i=void 0);const C=a===ln&&e[c+1].startsWith("/>")?" ":"";s+=a===rr?d+eh:b>=0?(r.push(p),d.slice(0,b)+gc+d.slice(b)+Vt+C):d+Vt+(b===-2?c:C)}return[yc(e,s+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class fr{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let s=0,a=0;const c=t.length-1,d=this.parts,[p,g]=rh(t,n);if(this.el=fr.createElement(p,r),hn.currentNode=this.el.content,n===2||n===3){const b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(i=hn.nextNode())!==null&&d.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const b of i.getAttributeNames())if(b.endsWith(gc)){const y=g[a++],C=i.getAttribute(b).split(Vt),x=/([.?@])?(.*)/.exec(y);d.push({type:1,index:s,name:x[2],strings:C,ctor:x[1]==="."?sh:x[1]==="?"?oh:x[1]==="@"?ah:Ai}),i.removeAttribute(b)}else b.startsWith(Vt)&&(d.push({type:6,index:s}),i.removeAttribute(b));if(wc.test(i.tagName)){const b=i.textContent.split(Vt),y=b.length-1;if(y>0){i.textContent=gi?gi.emptyScript:"";for(let C=0;C<y;C++)i.append(b[C],dr()),hn.nextNode(),d.push({type:2,index:++s});i.append(b[y],dr())}}}else if(i.nodeType===8)if(i.data===bc)d.push({type:2,index:s});else{let b=-1;for(;(b=i.data.indexOf(Vt,b+1))!==-1;)d.push({type:7,index:s}),b+=Vt.length-1}s++}}static createElement(t,n){const r=fn.createElement("template");return r.innerHTML=t,r}}function An(e,t,n=e,r){if(t===pn)return t;let i=r!==void 0?n._$Co?.[r]:n._$Cl;const s=hr(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=i:n._$Cl=i),i!==void 0&&(t=An(e,i._$AS(e,t.values),i,r)),t}class ih{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=(t?.creationScope??fn).importNode(n,!0);hn.currentNode=i;let s=hn.nextNode(),a=0,c=0,d=r[0];for(;d!==void 0;){if(a===d.index){let p;d.type===2?p=new vr(s,s.nextSibling,this,t):d.type===1?p=new d.ctor(s,d.name,d.strings,this,t):d.type===6&&(p=new lh(s,this,t)),this._$AV.push(p),d=r[++c]}a!==d?.index&&(s=hn.nextNode(),a++)}return hn.currentNode=fn,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class vr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=se,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=An(this,t,n),hr(t)?t===se||t==null||t===""?(this._$AH!==se&&this._$AR(),this._$AH=se):t!==this._$AH&&t!==pn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):th(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==se&&hr(this._$AH)?this._$AA.nextSibling.data=t:this.T(fn.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=fr.createElement(yc(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(n);else{const s=new ih(i,this),a=s.u(this.options);s.p(n),this.T(a),this._$AH=s}}_$AC(t){let n=Wa.get(t.strings);return n===void 0&&Wa.set(t.strings,n=new fr(t)),n}k(t){xo(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of t)i===n.length?n.push(r=new vr(this.O(dr()),this.O(dr()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const r=Ba(t).nextSibling;Ba(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Ai{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,s){this.type=1,this._$AH=se,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=se}_$AI(t,n=this,r,i){const s=this.strings;let a=!1;if(s===void 0)t=An(this,t,n,0),a=!hr(t)||t!==this._$AH&&t!==pn,a&&(this._$AH=t);else{const c=t;let d,p;for(t=s[0],d=0;d<s.length-1;d++)p=An(this,c[r+d],n,d),p===pn&&(p=this._$AH[d]),a||=!hr(p)||p!==this._$AH[d],p===se?t=se:t!==se&&(t+=(p??"")+s[d+1]),this._$AH[d]=p}a&&!i&&this.j(t)}j(t){t===se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class sh extends Ai{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===se?void 0:t}}class oh extends Ai{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==se)}}class ah extends Ai{constructor(t,n,r,i,s){super(t,n,r,i,s),this.type=5}_$AI(t,n=this){if((t=An(this,t,n,0)??se)===pn)return;const r=this._$AH,i=t===se&&r!==se||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==se&&(r===se||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class lh{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){An(this,t)}}const ch=vo.litHtmlPolyfillSupport;ch?.(fr,vr),(vo.litHtmlVersions??=[]).push("3.3.3");const uh=(e,t,n)=>{const r=n?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const s=n?.renderBefore??null;r._$litPart$=i=new vr(t.insertBefore(dr(),s),s,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $o=globalThis;let ve=class extends En{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=uh(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return pn}};ve._$litElement$=!0,ve.finalized=!0,$o.litElementHydrateSupport?.({LitElement:ve});const dh=$o.litElementPolyfillSupport;dh?.({LitElement:ve});($o.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hh={attribute:!0,type:String,converter:mi,reflect:!1,hasChanged:yo},fh=(e=hh,t,n)=>{const{kind:r,metadata:i}=n;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(n.name,e),r==="accessor"){const{name:a}=n;return{set(c){const d=t.get.call(this);t.set.call(this,c),this.requestUpdate(a,d,e,!0,c)},init(c){return c!==void 0&&this.C(a,void 0,e,c),c}}}if(r==="setter"){const{name:a}=n;return function(c){const d=this[a];t.call(this,c),this.requestUpdate(a,d,e,!0,c)}}throw Error("Unsupported decorator location: "+r)};function ct(e){return(t,n)=>typeof n=="object"?fh(e,t,n):((r,i,s)=>{const a=i.hasOwnProperty(s);return i.constructor.createProperty(s,r),a?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function N(e){return ct({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ph=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ot(e,t){return(n,r,i)=>{const s=a=>a.renderRoot?.querySelector(e)??null;return ph(n,r,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mh={CHILD:2},vc=e=>(...t)=>({_$litDirective$:e,values:t});class gh{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class bi extends gh{constructor(t){if(super(t),this.it=se,t.type!==mh.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===se||t==null)return this._t=void 0,this.it=t;if(t===pn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}bi.directiveName="unsafeHTML",bi.resultType=1;const In=vc(bi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Qs extends bi{}Qs.directiveName="unsafeSVG",Qs.resultType=2;const ko=vc(Qs);var bh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var di={exports:{}},yh=di.exports,Ya;function vh(){return Ya||(Ya=1,(function(e,t){(function(n,r){e.exports=r()})(yh,function(){var n=function(o,l){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,h){u.__proto__=h}||function(u,h){for(var f in h)Object.prototype.hasOwnProperty.call(h,f)&&(u[f]=h[f])})(o,l)},r=function(){return(r=Object.assign||function(o){for(var l,u=1,h=arguments.length;u<h;u++)for(var f in l=arguments[u])Object.prototype.hasOwnProperty.call(l,f)&&(o[f]=l[f]);return o}).apply(this,arguments)};function i(o,l,u){for(var h,f=0,m=l.length;f<m;f++)!h&&f in l||((h=h||Array.prototype.slice.call(l,0,f))[f]=l[f]);return o.concat(h||Array.prototype.slice.call(l))}var s=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:bh,a=Object.keys,c=Array.isArray;function d(o,l){return typeof l!="object"||a(l).forEach(function(u){o[u]=l[u]}),o}typeof Promise>"u"||s.Promise||(s.Promise=Promise);var p=Object.getPrototypeOf,g={}.hasOwnProperty;function b(o,l){return g.call(o,l)}function y(o,l){typeof l=="function"&&(l=l(p(o))),(typeof Reflect>"u"?a:Reflect.ownKeys)(l).forEach(function(u){x(o,u,l[u])})}var C=Object.defineProperty;function x(o,l,u,h){C(o,l,d(u&&b(u,"get")&&typeof u.get=="function"?{get:u.get,set:u.set,configurable:!0}:{value:u,configurable:!0,writable:!0},h))}function k(o){return{from:function(l){return o.prototype=Object.create(l.prototype),x(o.prototype,"constructor",o),{extend:y.bind(null,o.prototype)}}}}var I=Object.getOwnPropertyDescriptor,L=[].slice;function U(o,l,u){return L.call(o,l,u)}function B(o,l){return l(o)}function Y(o){if(!o)throw new Error("Assertion Failed")}function te(o){s.setImmediate?setImmediate(o):setTimeout(o,0)}function W(o,l){if(typeof l=="string"&&b(o,l))return o[l];if(!l)return o;if(typeof l!="string"){for(var u=[],h=0,f=l.length;h<f;++h){var m=W(o,l[h]);u.push(m)}return u}var w=l.indexOf(".");if(w!==-1){var v=o[l.substr(0,w)];return v==null?void 0:W(v,l.substr(w+1))}}function H(o,l,u){if(o&&l!==void 0&&!("isFrozen"in Object&&Object.isFrozen(o)))if(typeof l!="string"&&"length"in l){Y(typeof u!="string"&&"length"in u);for(var h=0,f=l.length;h<f;++h)H(o,l[h],u[h])}else{var m,w,v=l.indexOf(".");v!==-1?(m=l.substr(0,v),(w=l.substr(v+1))===""?u===void 0?c(o)&&!isNaN(parseInt(m))?o.splice(m,1):delete o[m]:o[m]=u:H(v=!(v=o[m])||!b(o,m)?o[m]={}:v,w,u)):u===void 0?c(o)&&!isNaN(parseInt(l))?o.splice(l,1):delete o[l]:o[l]=u}}function X(o){var l,u={};for(l in o)b(o,l)&&(u[l]=o[l]);return u}var ie=[].concat;function re(o){return ie.apply([],o)}var Pt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(re([8,16,32,64].map(function(o){return["Int","Uint","Float"].map(function(l){return l+o+"Array"})}))).filter(function(o){return s[o]}),q=new Set(Pt.map(function(o){return s[o]})),K=null;function ue(o){return K=new WeakMap,o=(function l(u){if(!u||typeof u!="object")return u;var h=K.get(u);if(h)return h;if(c(u)){h=[],K.set(u,h);for(var f=0,m=u.length;f<m;++f)h.push(l(u[f]))}else if(q.has(u.constructor))h=u;else{var w,v=p(u);for(w in h=v===Object.prototype?{}:Object.create(v),K.set(u,h),u)b(u,w)&&(h[w]=l(u[w]))}return h})(o),K=null,o}var ge={}.toString;function Te(o){return ge.call(o).slice(8,-1)}var ze=typeof Symbol<"u"?Symbol.iterator:"@@iterator",pt=typeof ze=="symbol"?function(o){var l;return o!=null&&(l=o[ze])&&l.apply(o)}:function(){return null};function de(o,l){return l=o.indexOf(l),0<=l&&o.splice(l,1),0<=l}var Pe={};function Ae(o){var l,u,h,f;if(arguments.length===1){if(c(o))return o.slice();if(this===Pe&&typeof o=="string")return[o];if(f=pt(o)){for(u=[];!(h=f.next()).done;)u.push(h.value);return u}if(o==null)return[o];if(typeof(l=o.length)!="number")return[o];for(u=new Array(l);l--;)u[l]=o[l];return u}for(l=arguments.length,u=new Array(l);l--;)u[l]=arguments[l];return u}var Ze=typeof Symbol<"u"?function(o){return o[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Kn=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],mt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Kn),ye={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Be(o,l){this.name=o,this.message=l}function Qi(o,l){return o+". Errors: "+Object.keys(l).map(function(u){return l[u].toString()}).filter(function(u,h,f){return f.indexOf(u)===h}).join(`
`)}function wn(o,l,u,h){this.failures=l,this.failedKeys=h,this.successCount=u,this.message=Qi(o,l)}function yn(o,l){this.name="BulkError",this.failures=Object.keys(l).map(function(u){return l[u]}),this.failuresByPos=l,this.message=Qi(o,this.failures)}k(Be).from(Error).extend({toString:function(){return this.name+": "+this.message}}),k(wn).from(Be),k(yn).from(Be);var Zi=mt.reduce(function(o,l){return o[l]=l+"Error",o},{}),dd=Be,ce=mt.reduce(function(o,l){var u=l+"Error";function h(f,m){this.name=u,f?typeof f=="string"?(this.message="".concat(f).concat(m?`
 `+m:""),this.inner=m||null):typeof f=="object"&&(this.message="".concat(f.name," ").concat(f.message),this.inner=f):(this.message=ye[l]||u,this.inner=null)}return k(h).from(dd),o[l]=h,o},{});ce.Syntax=SyntaxError,ce.Type=TypeError,ce.Range=RangeError;var ra=Kn.reduce(function(o,l){return o[l+"Error"]=ce[l],o},{}),Tr=mt.reduce(function(o,l){return["Syntax","Type","Range"].indexOf(l)===-1&&(o[l+"Error"]=ce[l]),o},{});function xe(){}function Hn(o){return o}function hd(o,l){return o==null||o===Hn?l:function(u){return l(o(u))}}function Jt(o,l){return function(){o.apply(this,arguments),l.apply(this,arguments)}}function fd(o,l){return o===xe?l:function(){var u=o.apply(this,arguments);u!==void 0&&(arguments[0]=u);var h=this.onsuccess,f=this.onerror;this.onsuccess=null,this.onerror=null;var m=l.apply(this,arguments);return h&&(this.onsuccess=this.onsuccess?Jt(h,this.onsuccess):h),f&&(this.onerror=this.onerror?Jt(f,this.onerror):f),m!==void 0?m:u}}function pd(o,l){return o===xe?l:function(){o.apply(this,arguments);var u=this.onsuccess,h=this.onerror;this.onsuccess=this.onerror=null,l.apply(this,arguments),u&&(this.onsuccess=this.onsuccess?Jt(u,this.onsuccess):u),h&&(this.onerror=this.onerror?Jt(h,this.onerror):h)}}function md(o,l){return o===xe?l:function(u){var h=o.apply(this,arguments);d(u,h);var f=this.onsuccess,m=this.onerror;return this.onsuccess=null,this.onerror=null,u=l.apply(this,arguments),f&&(this.onsuccess=this.onsuccess?Jt(f,this.onsuccess):f),m&&(this.onerror=this.onerror?Jt(m,this.onerror):m),h===void 0?u===void 0?void 0:u:d(h,u)}}function gd(o,l){return o===xe?l:function(){return l.apply(this,arguments)!==!1&&o.apply(this,arguments)}}function es(o,l){return o===xe?l:function(){var u=o.apply(this,arguments);if(u&&typeof u.then=="function"){for(var h=this,f=arguments.length,m=new Array(f);f--;)m[f]=arguments[f];return u.then(function(){return l.apply(h,m)})}return l.apply(this,arguments)}}Tr.ModifyError=wn,Tr.DexieError=Be,Tr.BulkError=yn;var Ct=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function ia(o){Ct=o}var qn={},sa=100,Pt=typeof Promise>"u"?[]:(function(){var o=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[o,p(o),o];var l=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[l,p(l),o]})(),Kn=Pt[0],mt=Pt[1],Pt=Pt[2],mt=mt&&mt.then,Qt=Kn&&Kn.constructor,ts=!!Pt,Vn=function(o,l){Gn.push([o,l]),Ir&&(queueMicrotask(wd),Ir=!1)},ns=!0,Ir=!0,Zt=[],Ar=[],rs=Hn,zt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:xe,pgp:!1,env:{},finalize:xe},le=zt,Gn=[],en=0,Rr=[];function ne(o){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var l=this._PSD=le;if(typeof o!="function"){if(o!==qn)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&ss(this,this._value))}this._state=null,this._value=null,++l.ref,(function u(h,f){try{f(function(m){if(h._state===null){if(m===h)throw new TypeError("A promise cannot be resolved with itself.");var w=h._lib&&vn();m&&typeof m.then=="function"?u(h,function(v,S){m instanceof ne?m._then(v,S):m.then(v,S)}):(h._state=!0,h._value=m,aa(h)),w&&xn()}},ss.bind(null,h))}catch(m){ss(h,m)}})(this,o)}var is={get:function(){var o=le,l=Lr;function u(h,f){var m=this,w=!o.global&&(o!==le||l!==Lr),v=w&&!Ut(),S=new ne(function(T,O){os(m,new oa(ca(h,o,w,v),ca(f,o,w,v),T,O,o))});return this._consoleTask&&(S._consoleTask=this._consoleTask),S}return u.prototype=qn,u},set:function(o){x(this,"then",o&&o.prototype===qn?is:{get:function(){return o},set:is.set})}};function oa(o,l,u,h,f){this.onFulfilled=typeof o=="function"?o:null,this.onRejected=typeof l=="function"?l:null,this.resolve=u,this.reject=h,this.psd=f}function ss(o,l){var u,h;Ar.push(l),o._state===null&&(u=o._lib&&vn(),l=rs(l),o._state=!1,o._value=l,h=o,Zt.some(function(f){return f._value===h._value})||Zt.push(h),aa(o),u&&xn())}function aa(o){var l=o._listeners;o._listeners=[];for(var u=0,h=l.length;u<h;++u)os(o,l[u]);var f=o._PSD;--f.ref||f.finalize(),en===0&&(++en,Vn(function(){--en==0&&as()},[]))}function os(o,l){if(o._state!==null){var u=o._state?l.onFulfilled:l.onRejected;if(u===null)return(o._state?l.resolve:l.reject)(o._value);++l.psd.ref,++en,Vn(bd,[u,o,l])}else o._listeners.push(l)}function bd(o,l,u){try{var h,f=l._value;!l._state&&Ar.length&&(Ar=[]),h=Ct&&l._consoleTask?l._consoleTask.run(function(){return o(f)}):o(f),l._state||Ar.indexOf(f)!==-1||(function(m){for(var w=Zt.length;w;)if(Zt[--w]._value===m._value)return Zt.splice(w,1)})(l),u.resolve(h)}catch(m){u.reject(m)}finally{--en==0&&as(),--u.psd.ref||u.psd.finalize()}}function wd(){tn(zt,function(){vn()&&xn()})}function vn(){var o=ns;return Ir=ns=!1,o}function xn(){var o,l,u;do for(;0<Gn.length;)for(o=Gn,Gn=[],u=o.length,l=0;l<u;++l){var h=o[l];h[0].apply(null,h[1])}while(0<Gn.length);Ir=ns=!0}function as(){var o=Zt;Zt=[],o.forEach(function(h){h._PSD.onunhandled.call(null,h._value,h)});for(var l=Rr.slice(0),u=l.length;u;)l[--u]()}function Or(o){return new ne(qn,!1,o)}function Se(o,l){var u=le;return function(){var h=vn(),f=le;try{return Ft(u,!0),o.apply(this,arguments)}catch(m){l&&l(m)}finally{Ft(f,!1),h&&xn()}}}y(ne.prototype,{then:is,_then:function(o,l){os(this,new oa(null,null,o,l,le))},catch:function(o){if(arguments.length===1)return this.then(null,o);var l=o,u=arguments[1];return typeof l=="function"?this.then(null,function(h){return(h instanceof l?u:Or)(h)}):this.then(null,function(h){return(h&&h.name===l?u:Or)(h)})},finally:function(o){return this.then(function(l){return ne.resolve(o()).then(function(){return l})},function(l){return ne.resolve(o()).then(function(){return Or(l)})})},timeout:function(o,l){var u=this;return o<1/0?new ne(function(h,f){var m=setTimeout(function(){return f(new ce.Timeout(l))},o);u.then(h,f).finally(clearTimeout.bind(null,m))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&x(ne.prototype,Symbol.toStringTag,"Dexie.Promise"),zt.env=la(),y(ne,{all:function(){var o=Ae.apply(null,arguments).map(Mr);return new ne(function(l,u){o.length===0&&l([]);var h=o.length;o.forEach(function(f,m){return ne.resolve(f).then(function(w){o[m]=w,--h||l(o)},u)})})},resolve:function(o){return o instanceof ne?o:o&&typeof o.then=="function"?new ne(function(l,u){o.then(l,u)}):new ne(qn,!0,o)},reject:Or,race:function(){var o=Ae.apply(null,arguments).map(Mr);return new ne(function(l,u){o.map(function(h){return ne.resolve(h).then(l,u)})})},PSD:{get:function(){return le},set:function(o){return le=o}},totalEchoes:{get:function(){return Lr}},newPSD:Nt,usePSD:tn,scheduler:{get:function(){return Vn},set:function(o){Vn=o}},rejectionMapper:{get:function(){return rs},set:function(o){rs=o}},follow:function(o,l){return new ne(function(u,h){return Nt(function(f,m){var w=le;w.unhandleds=[],w.onunhandled=m,w.finalize=Jt(function(){var v,S=this;v=function(){S.unhandleds.length===0?f():m(S.unhandleds[0])},Rr.push(function T(){v(),Rr.splice(Rr.indexOf(T),1)}),++en,Vn(function(){--en==0&&as()},[])},w.finalize),o()},l,u,h)})}}),Qt&&(Qt.allSettled&&x(ne,"allSettled",function(){var o=Ae.apply(null,arguments).map(Mr);return new ne(function(l){o.length===0&&l([]);var u=o.length,h=new Array(u);o.forEach(function(f,m){return ne.resolve(f).then(function(w){return h[m]={status:"fulfilled",value:w}},function(w){return h[m]={status:"rejected",reason:w}}).then(function(){return--u||l(h)})})})}),Qt.any&&typeof AggregateError<"u"&&x(ne,"any",function(){var o=Ae.apply(null,arguments).map(Mr);return new ne(function(l,u){o.length===0&&u(new AggregateError([]));var h=o.length,f=new Array(h);o.forEach(function(m,w){return ne.resolve(m).then(function(v){return l(v)},function(v){f[w]=v,--h||u(new AggregateError(f))})})})}),Qt.withResolvers&&(ne.withResolvers=Qt.withResolvers));var Le={awaits:0,echoes:0,id:0},yd=0,Dr=[],Pr=0,Lr=0,vd=0;function Nt(o,l,u,h){var f=le,m=Object.create(f);return m.parent=f,m.ref=0,m.global=!1,m.id=++vd,zt.env,m.env=ts?{Promise:ne,PromiseProp:{value:ne,configurable:!0,writable:!0},all:ne.all,race:ne.race,allSettled:ne.allSettled,any:ne.any,resolve:ne.resolve,reject:ne.reject}:{},l&&d(m,l),++f.ref,m.finalize=function(){--this.parent.ref||this.parent.finalize()},h=tn(m,o,u,h),m.ref===0&&m.finalize(),h}function $n(){return Le.id||(Le.id=++yd),++Le.awaits,Le.echoes+=sa,Le.id}function Ut(){return!!Le.awaits&&(--Le.awaits==0&&(Le.id=0),Le.echoes=Le.awaits*sa,!0)}function Mr(o){return Le.echoes&&o&&o.constructor===Qt?($n(),o.then(function(l){return Ut(),l},function(l){return Ut(),Re(l)})):o}function xd(){var o=Dr[Dr.length-1];Dr.pop(),Ft(o,!1)}function Ft(o,l){var u,h=le;(l?!Le.echoes||Pr++&&o===le:!Pr||--Pr&&o===le)||queueMicrotask(l?function(f){++Lr,Le.echoes&&--Le.echoes!=0||(Le.echoes=Le.awaits=Le.id=0),Dr.push(le),Ft(f,!0)}.bind(null,o):xd),o!==le&&(le=o,h===zt&&(zt.env=la()),ts&&(u=zt.env.Promise,l=o.env,(h.global||o.global)&&(Object.defineProperty(s,"Promise",l.PromiseProp),u.all=l.all,u.race=l.race,u.resolve=l.resolve,u.reject=l.reject,l.allSettled&&(u.allSettled=l.allSettled),l.any&&(u.any=l.any))))}function la(){var o=s.Promise;return ts?{Promise:o,PromiseProp:Object.getOwnPropertyDescriptor(s,"Promise"),all:o.all,race:o.race,allSettled:o.allSettled,any:o.any,resolve:o.resolve,reject:o.reject}:{}}function tn(o,l,u,h,f){var m=le;try{return Ft(o,!0),l(u,h,f)}finally{Ft(m,!1)}}function ca(o,l,u,h){return typeof o!="function"?o:function(){var f=le;u&&$n(),Ft(l,!0);try{return o.apply(this,arguments)}finally{Ft(f,!1),h&&queueMicrotask(Ut)}}}function ls(o){Promise===Qt&&Le.echoes===0?Pr===0?o():enqueueNativeMicroTask(o):setTimeout(o,0)}(""+mt).indexOf("[native code]")===-1&&($n=Ut=xe);var Re=ne.reject,nn="￿",Dt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ua="String expected.",kn=[],jr="__dbnames",cs="readonly",us="readwrite";function rn(o,l){return o?l?function(){return o.apply(this,arguments)&&l.apply(this,arguments)}:o:l}var da={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function zr(o){return typeof o!="string"||/\./.test(o)?function(l){return l}:function(l){return l[o]===void 0&&o in l&&delete(l=ue(l))[o],l}}function ha(){throw ce.Type()}function be(o,l){try{var u=fa(o),h=fa(l);if(u!==h)return u==="Array"?1:h==="Array"?-1:u==="binary"?1:h==="binary"?-1:u==="string"?1:h==="string"?-1:u==="Date"?1:h!=="Date"?NaN:-1;switch(u){case"number":case"Date":case"string":return l<o?1:o<l?-1:0;case"binary":return(function(f,m){for(var w=f.length,v=m.length,S=w<v?w:v,T=0;T<S;++T)if(f[T]!==m[T])return f[T]<m[T]?-1:1;return w===v?0:w<v?-1:1})(pa(o),pa(l));case"Array":return(function(f,m){for(var w=f.length,v=m.length,S=w<v?w:v,T=0;T<S;++T){var O=be(f[T],m[T]);if(O!==0)return O}return w===v?0:w<v?-1:1})(o,l)}}catch{}return NaN}function fa(o){var l=typeof o;return l!="object"?l:ArrayBuffer.isView(o)?"binary":(o=Te(o),o==="ArrayBuffer"?"binary":o)}function pa(o){return o instanceof Uint8Array?o:ArrayBuffer.isView(o)?new Uint8Array(o.buffer,o.byteOffset,o.byteLength):new Uint8Array(o)}var ma=(ke.prototype._trans=function(o,l,u){var h=this._tx||le.trans,f=this.name,m=Ct&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(o==="readonly"?"read":"write"," ").concat(this.name));function w(T,O,_){if(!_.schema[f])throw new ce.NotFound("Table "+f+" not part of transaction");return l(_.idbtrans,_)}var v=vn();try{var S=h&&h.db._novip===this.db._novip?h===le.trans?h._promise(o,w,u):Nt(function(){return h._promise(o,w,u)},{trans:h,transless:le.transless||le}):(function T(O,_,P,E){if(O.idbdb&&(O._state.openComplete||le.letThrough||O._vip)){var R=O._createTransaction(_,P,O._dbSchema);try{R.create(),O._state.PR1398_maxLoop=3}catch(D){return D.name===Zi.InvalidState&&O.isOpen()&&0<--O._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),O.close({disableAutoOpen:!1}),O.open().then(function(){return T(O,_,P,E)})):Re(D)}return R._promise(_,function(D,A){return Nt(function(){return le.trans=R,E(D,A,R)})}).then(function(D){if(_==="readwrite")try{R.idbtrans.commit()}catch{}return _==="readonly"?D:R._completion.then(function(){return D})})}if(O._state.openComplete)return Re(new ce.DatabaseClosed(O._state.dbOpenError));if(!O._state.isBeingOpened){if(!O._state.autoOpen)return Re(new ce.DatabaseClosed);O.open().catch(xe)}return O._state.dbReadyPromise.then(function(){return T(O,_,P,E)})})(this.db,o,[this.name],w);return m&&(S._consoleTask=m,S=S.catch(function(T){return console.trace(T),Re(T)})),S}finally{v&&xn()}},ke.prototype.get=function(o,l){var u=this;return o&&o.constructor===Object?this.where(o).first(l):o==null?Re(new ce.Type("Invalid argument to Table.get()")):this._trans("readonly",function(h){return u.core.get({trans:h,key:o}).then(function(f){return u.hook.reading.fire(f)})}).then(l)},ke.prototype.where=function(o){if(typeof o=="string")return new this.db.WhereClause(this,o);if(c(o))return new this.db.WhereClause(this,"[".concat(o.join("+"),"]"));var l=a(o);if(l.length===1)return this.where(l[0]).equals(o[l[0]]);var u=this.schema.indexes.concat(this.schema.primKey).filter(function(v){if(v.compound&&l.every(function(T){return 0<=v.keyPath.indexOf(T)})){for(var S=0;S<l.length;++S)if(l.indexOf(v.keyPath[S])===-1)return!1;return!0}return!1}).sort(function(v,S){return v.keyPath.length-S.keyPath.length})[0];if(u&&this.db._maxKey!==nn){var m=u.keyPath.slice(0,l.length);return this.where(m).equals(m.map(function(S){return o[S]}))}!u&&Ct&&console.warn("The query ".concat(JSON.stringify(o)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(l.join("+"),"]"));var h=this.schema.idxByName;function f(v,S){return be(v,S)===0}var w=l.reduce(function(_,S){var T=_[0],O=_[1],_=h[S],P=o[S];return[T||_,T||!_?rn(O,_&&_.multi?function(E){return E=W(E,S),c(E)&&E.some(function(R){return f(P,R)})}:function(E){return f(P,W(E,S))}):O]},[null,null]),m=w[0],w=w[1];return m?this.where(m.name).equals(o[m.keyPath]).filter(w):u?this.filter(w):this.where(l).equals("")},ke.prototype.filter=function(o){return this.toCollection().and(o)},ke.prototype.count=function(o){return this.toCollection().count(o)},ke.prototype.offset=function(o){return this.toCollection().offset(o)},ke.prototype.limit=function(o){return this.toCollection().limit(o)},ke.prototype.each=function(o){return this.toCollection().each(o)},ke.prototype.toArray=function(o){return this.toCollection().toArray(o)},ke.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},ke.prototype.orderBy=function(o){return new this.db.Collection(new this.db.WhereClause(this,c(o)?"[".concat(o.join("+"),"]"):o))},ke.prototype.reverse=function(){return this.toCollection().reverse()},ke.prototype.mapToClass=function(o){var l,u=this.db,h=this.name;function f(){return l!==null&&l.apply(this,arguments)||this}(this.schema.mappedClass=o).prototype instanceof ha&&((function(S,T){if(typeof T!="function"&&T!==null)throw new TypeError("Class extends value "+String(T)+" is not a constructor or null");function O(){this.constructor=S}n(S,T),S.prototype=T===null?Object.create(T):(O.prototype=T.prototype,new O)})(f,l=o),Object.defineProperty(f.prototype,"db",{get:function(){return u},enumerable:!1,configurable:!0}),f.prototype.table=function(){return h},o=f);for(var m=new Set,w=o.prototype;w;w=p(w))Object.getOwnPropertyNames(w).forEach(function(S){return m.add(S)});function v(S){if(!S)return S;var T,O=Object.create(o.prototype);for(T in S)if(!m.has(T))try{O[T]=S[T]}catch{}return O}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=v,this.hook("reading",v),o},ke.prototype.defineClass=function(){return this.mapToClass(function(o){d(this,o)})},ke.prototype.add=function(o,l){var u=this,h=this.schema.primKey,f=h.auto,m=h.keyPath,w=o;return m&&f&&(w=zr(m)(o)),this._trans("readwrite",function(v){return u.core.mutate({trans:v,type:"add",keys:l!=null?[l]:null,values:[w]})}).then(function(v){return v.numFailures?ne.reject(v.failures[0]):v.lastResult}).then(function(v){if(m)try{H(o,m,v)}catch{}return v})},ke.prototype.update=function(o,l){return typeof o!="object"||c(o)?this.where(":id").equals(o).modify(l):(o=W(o,this.schema.primKey.keyPath),o===void 0?Re(new ce.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(o).modify(l))},ke.prototype.put=function(o,l){var u=this,h=this.schema.primKey,f=h.auto,m=h.keyPath,w=o;return m&&f&&(w=zr(m)(o)),this._trans("readwrite",function(v){return u.core.mutate({trans:v,type:"put",values:[w],keys:l!=null?[l]:null})}).then(function(v){return v.numFailures?ne.reject(v.failures[0]):v.lastResult}).then(function(v){if(m)try{H(o,m,v)}catch{}return v})},ke.prototype.delete=function(o){var l=this;return this._trans("readwrite",function(u){return l.core.mutate({trans:u,type:"delete",keys:[o]})}).then(function(u){return u.numFailures?ne.reject(u.failures[0]):void 0})},ke.prototype.clear=function(){var o=this;return this._trans("readwrite",function(l){return o.core.mutate({trans:l,type:"deleteRange",range:da})}).then(function(l){return l.numFailures?ne.reject(l.failures[0]):void 0})},ke.prototype.bulkGet=function(o){var l=this;return this._trans("readonly",function(u){return l.core.getMany({keys:o,trans:u}).then(function(h){return h.map(function(f){return l.hook.reading.fire(f)})})})},ke.prototype.bulkAdd=function(o,l,u){var h=this,f=Array.isArray(l)?l:void 0,m=(u=u||(f?void 0:l))?u.allKeys:void 0;return this._trans("readwrite",function(w){var T=h.schema.primKey,v=T.auto,T=T.keyPath;if(T&&f)throw new ce.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(f&&f.length!==o.length)throw new ce.InvalidArgument("Arguments objects and keys must have the same length");var S=o.length,T=T&&v?o.map(zr(T)):o;return h.core.mutate({trans:w,type:"add",keys:f,values:T,wantResults:m}).then(function(R){var _=R.numFailures,P=R.results,E=R.lastResult,R=R.failures;if(_===0)return m?P:E;throw new yn("".concat(h.name,".bulkAdd(): ").concat(_," of ").concat(S," operations failed"),R)})})},ke.prototype.bulkPut=function(o,l,u){var h=this,f=Array.isArray(l)?l:void 0,m=(u=u||(f?void 0:l))?u.allKeys:void 0;return this._trans("readwrite",function(w){var T=h.schema.primKey,v=T.auto,T=T.keyPath;if(T&&f)throw new ce.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(f&&f.length!==o.length)throw new ce.InvalidArgument("Arguments objects and keys must have the same length");var S=o.length,T=T&&v?o.map(zr(T)):o;return h.core.mutate({trans:w,type:"put",keys:f,values:T,wantResults:m}).then(function(R){var _=R.numFailures,P=R.results,E=R.lastResult,R=R.failures;if(_===0)return m?P:E;throw new yn("".concat(h.name,".bulkPut(): ").concat(_," of ").concat(S," operations failed"),R)})})},ke.prototype.bulkUpdate=function(o){var l=this,u=this.core,h=o.map(function(w){return w.key}),f=o.map(function(w){return w.changes}),m=[];return this._trans("readwrite",function(w){return u.getMany({trans:w,keys:h,cache:"clone"}).then(function(v){var S=[],T=[];o.forEach(function(_,P){var E=_.key,R=_.changes,D=v[P];if(D){for(var A=0,M=Object.keys(R);A<M.length;A++){var j=M[A],z=R[j];if(j===l.schema.primKey.keyPath){if(be(z,E)!==0)throw new ce.Constraint("Cannot update primary key in bulkUpdate()")}else H(D,j,z)}m.push(P),S.push(E),T.push(D)}});var O=S.length;return u.mutate({trans:w,type:"put",keys:S,values:T,updates:{keys:h,changeSpecs:f}}).then(function(_){var P=_.numFailures,E=_.failures;if(P===0)return O;for(var R=0,D=Object.keys(E);R<D.length;R++){var A,M=D[R],j=m[Number(M)];j!=null&&(A=E[M],delete E[M],E[j]=A)}throw new yn("".concat(l.name,".bulkUpdate(): ").concat(P," of ").concat(O," operations failed"),E)})})})},ke.prototype.bulkDelete=function(o){var l=this,u=o.length;return this._trans("readwrite",function(h){return l.core.mutate({trans:h,type:"delete",keys:o})}).then(function(w){var f=w.numFailures,m=w.lastResult,w=w.failures;if(f===0)return m;throw new yn("".concat(l.name,".bulkDelete(): ").concat(f," of ").concat(u," operations failed"),w)})},ke);function ke(){}function Wn(o){function l(w,v){if(v){for(var S=arguments.length,T=new Array(S-1);--S;)T[S-1]=arguments[S];return u[w].subscribe.apply(null,T),o}if(typeof w=="string")return u[w]}var u={};l.addEventType=m;for(var h=1,f=arguments.length;h<f;++h)m(arguments[h]);return l;function m(w,v,S){if(typeof w!="object"){var T;v=v||gd;var O={subscribers:[],fire:S=S||xe,subscribe:function(_){O.subscribers.indexOf(_)===-1&&(O.subscribers.push(_),O.fire=v(O.fire,_))},unsubscribe:function(_){O.subscribers=O.subscribers.filter(function(P){return P!==_}),O.fire=O.subscribers.reduce(v,S)}};return u[w]=l[w]=O}a(T=w).forEach(function(_){var P=T[_];if(c(P))m(_,T[_][0],T[_][1]);else{if(P!=="asap")throw new ce.InvalidArgument("Invalid event config");var E=m(_,Hn,function(){for(var R=arguments.length,D=new Array(R);R--;)D[R]=arguments[R];E.subscribers.forEach(function(A){te(function(){A.apply(null,D)})})})}})}}function Yn(o,l){return k(l).from({prototype:o}),l}function _n(o,l){return!(o.filter||o.algorithm||o.or)&&(l?o.justLimit:!o.replayFilter)}function ds(o,l){o.filter=rn(o.filter,l)}function hs(o,l,u){var h=o.replayFilter;o.replayFilter=h?function(){return rn(h(),l())}:l,o.justLimit=u&&!h}function Nr(o,l){if(o.isPrimKey)return l.primaryKey;var u=l.getIndexByKeyPath(o.index);if(!u)throw new ce.Schema("KeyPath "+o.index+" on object store "+l.name+" is not indexed");return u}function ga(o,l,u){var h=Nr(o,l.schema);return l.openCursor({trans:u,values:!o.keysOnly,reverse:o.dir==="prev",unique:!!o.unique,query:{index:h,range:o.range}})}function Ur(o,l,u,h){var f=o.replayFilter?rn(o.filter,o.replayFilter()):o.filter;if(o.or){var m={},w=function(v,S,T){var O,_;f&&!f(S,T,function(P){return S.stop(P)},function(P){return S.fail(P)})||((_=""+(O=S.primaryKey))=="[object ArrayBuffer]"&&(_=""+new Uint8Array(O)),b(m,_)||(m[_]=!0,l(v,S,T)))};return Promise.all([o.or._iterate(w,u),ba(ga(o,h,u),o.algorithm,w,!o.keysOnly&&o.valueMapper)])}return ba(ga(o,h,u),rn(o.algorithm,f),l,!o.keysOnly&&o.valueMapper)}function ba(o,l,u,h){var f=Se(h?function(m,w,v){return u(h(m),w,v)}:u);return o.then(function(m){if(m)return m.start(function(){var w=function(){return m.continue()};l&&!l(m,function(v){return w=v},function(v){m.stop(v),w=xe},function(v){m.fail(v),w=xe})||f(m.value,m,function(v){return w=v}),w()})})}var Pt=Symbol(),Xn=(wa.prototype.execute=function(o){if(this.add!==void 0){var l=this.add;if(c(l))return i(i([],c(o)?o:[],!0),l).sort();if(typeof l=="number")return(Number(o)||0)+l;if(typeof l=="bigint")try{return BigInt(o)+l}catch{return BigInt(0)+l}throw new TypeError("Invalid term ".concat(l))}if(this.remove!==void 0){var u=this.remove;if(c(u))return c(o)?o.filter(function(h){return!u.includes(h)}).sort():[];if(typeof u=="number")return Number(o)-u;if(typeof u=="bigint")try{return BigInt(o)-u}catch{return BigInt(0)-u}throw new TypeError("Invalid subtrahend ".concat(u))}return l=(l=this.replacePrefix)===null||l===void 0?void 0:l[0],l&&typeof o=="string"&&o.startsWith(l)?this.replacePrefix[1]+o.substring(l.length):o},wa);function wa(o){Object.assign(this,o)}var $d=(we.prototype._read=function(o,l){var u=this._ctx;return u.error?u.table._trans(null,Re.bind(null,u.error)):u.table._trans("readonly",o).then(l)},we.prototype._write=function(o){var l=this._ctx;return l.error?l.table._trans(null,Re.bind(null,l.error)):l.table._trans("readwrite",o,"locked")},we.prototype._addAlgorithm=function(o){var l=this._ctx;l.algorithm=rn(l.algorithm,o)},we.prototype._iterate=function(o,l){return Ur(this._ctx,o,l,this._ctx.table.core)},we.prototype.clone=function(o){var l=Object.create(this.constructor.prototype),u=Object.create(this._ctx);return o&&d(u,o),l._ctx=u,l},we.prototype.raw=function(){return this._ctx.valueMapper=null,this},we.prototype.each=function(o){var l=this._ctx;return this._read(function(u){return Ur(l,o,u,l.table.core)})},we.prototype.count=function(o){var l=this;return this._read(function(u){var h=l._ctx,f=h.table.core;if(_n(h,!0))return f.count({trans:u,query:{index:Nr(h,f.schema),range:h.range}}).then(function(w){return Math.min(w,h.limit)});var m=0;return Ur(h,function(){return++m,!1},u,f).then(function(){return m})}).then(o)},we.prototype.sortBy=function(o,l){var u=o.split(".").reverse(),h=u[0],f=u.length-1;function m(S,T){return T?m(S[u[T]],T-1):S[h]}var w=this._ctx.dir==="next"?1:-1;function v(S,T){return be(m(S,f),m(T,f))*w}return this.toArray(function(S){return S.sort(v)}).then(l)},we.prototype.toArray=function(o){var l=this;return this._read(function(u){var h=l._ctx;if(h.dir==="next"&&_n(h,!0)&&0<h.limit){var f=h.valueMapper,m=Nr(h,h.table.core.schema);return h.table.core.query({trans:u,limit:h.limit,values:!0,query:{index:m,range:h.range}}).then(function(v){return v=v.result,f?v.map(f):v})}var w=[];return Ur(h,function(v){return w.push(v)},u,h.table.core).then(function(){return w})},o)},we.prototype.offset=function(o){var l=this._ctx;return o<=0||(l.offset+=o,_n(l)?hs(l,function(){var u=o;return function(h,f){return u===0||(u===1?--u:f(function(){h.advance(u),u=0}),!1)}}):hs(l,function(){var u=o;return function(){return--u<0}})),this},we.prototype.limit=function(o){return this._ctx.limit=Math.min(this._ctx.limit,o),hs(this._ctx,function(){var l=o;return function(u,h,f){return--l<=0&&h(f),0<=l}},!0),this},we.prototype.until=function(o,l){return ds(this._ctx,function(u,h,f){return!o(u.value)||(h(f),l)}),this},we.prototype.first=function(o){return this.limit(1).toArray(function(l){return l[0]}).then(o)},we.prototype.last=function(o){return this.reverse().first(o)},we.prototype.filter=function(o){var l;return ds(this._ctx,function(u){return o(u.value)}),(l=this._ctx).isMatch=rn(l.isMatch,o),this},we.prototype.and=function(o){return this.filter(o)},we.prototype.or=function(o){return new this.db.WhereClause(this._ctx.table,o,this)},we.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},we.prototype.desc=function(){return this.reverse()},we.prototype.eachKey=function(o){var l=this._ctx;return l.keysOnly=!l.isMatch,this.each(function(u,h){o(h.key,h)})},we.prototype.eachUniqueKey=function(o){return this._ctx.unique="unique",this.eachKey(o)},we.prototype.eachPrimaryKey=function(o){var l=this._ctx;return l.keysOnly=!l.isMatch,this.each(function(u,h){o(h.primaryKey,h)})},we.prototype.keys=function(o){var l=this._ctx;l.keysOnly=!l.isMatch;var u=[];return this.each(function(h,f){u.push(f.key)}).then(function(){return u}).then(o)},we.prototype.primaryKeys=function(o){var l=this._ctx;if(l.dir==="next"&&_n(l,!0)&&0<l.limit)return this._read(function(h){var f=Nr(l,l.table.core.schema);return l.table.core.query({trans:h,values:!1,limit:l.limit,query:{index:f,range:l.range}})}).then(function(h){return h.result}).then(o);l.keysOnly=!l.isMatch;var u=[];return this.each(function(h,f){u.push(f.primaryKey)}).then(function(){return u}).then(o)},we.prototype.uniqueKeys=function(o){return this._ctx.unique="unique",this.keys(o)},we.prototype.firstKey=function(o){return this.limit(1).keys(function(l){return l[0]}).then(o)},we.prototype.lastKey=function(o){return this.reverse().firstKey(o)},we.prototype.distinct=function(){var o=this._ctx,o=o.index&&o.table.schema.idxByName[o.index];if(!o||!o.multi)return this;var l={};return ds(this._ctx,function(f){var h=f.primaryKey.toString(),f=b(l,h);return l[h]=!0,!f}),this},we.prototype.modify=function(o){var l=this,u=this._ctx;return this._write(function(h){var f,m,w;w=typeof o=="function"?o:(f=a(o),m=f.length,function(A){for(var M=!1,j=0;j<m;++j){var z=f[j],F=o[z],V=W(A,z);F instanceof Xn?(H(A,z,F.execute(V)),M=!0):V!==F&&(H(A,z,F),M=!0)}return M});var v=u.table.core,_=v.schema.primaryKey,S=_.outbound,T=_.extractKey,O=200,_=l.db._options.modifyChunkSize;_&&(O=typeof _=="object"?_[v.name]||_["*"]||200:_);function P(A,z){var j=z.failures,z=z.numFailures;R+=A-z;for(var F=0,V=a(j);F<V.length;F++){var Z=V[F];E.push(j[Z])}}var E=[],R=0,D=[];return l.clone().primaryKeys().then(function(A){function M(z){var F=Math.min(O,A.length-z);return v.getMany({trans:h,keys:A.slice(z,z+F),cache:"immutable"}).then(function(V){for(var Z=[],G=[],J=S?[]:null,ee=[],Q=0;Q<F;++Q){var oe=V[Q],fe={value:ue(oe),primKey:A[z+Q]};w.call(fe,fe.value,fe)!==!1&&(fe.value==null?ee.push(A[z+Q]):S||be(T(oe),T(fe.value))===0?(G.push(fe.value),S&&J.push(A[z+Q])):(ee.push(A[z+Q]),Z.push(fe.value)))}return Promise.resolve(0<Z.length&&v.mutate({trans:h,type:"add",values:Z}).then(function(pe){for(var me in pe.failures)ee.splice(parseInt(me),1);P(Z.length,pe)})).then(function(){return(0<G.length||j&&typeof o=="object")&&v.mutate({trans:h,type:"put",keys:J,values:G,criteria:j,changeSpec:typeof o!="function"&&o,isAdditionalChunk:0<z}).then(function(pe){return P(G.length,pe)})}).then(function(){return(0<ee.length||j&&o===fs)&&v.mutate({trans:h,type:"delete",keys:ee,criteria:j,isAdditionalChunk:0<z}).then(function(pe){return P(ee.length,pe)})}).then(function(){return A.length>z+F&&M(z+O)})})}var j=_n(u)&&u.limit===1/0&&(typeof o!="function"||o===fs)&&{index:u.index,range:u.range};return M(0).then(function(){if(0<E.length)throw new wn("Error modifying one or more objects",E,R,D);return A.length})})})},we.prototype.delete=function(){var o=this._ctx,l=o.range;return _n(o)&&(o.isPrimKey||l.type===3)?this._write(function(u){var h=o.table.core.schema.primaryKey,f=l;return o.table.core.count({trans:u,query:{index:h,range:f}}).then(function(m){return o.table.core.mutate({trans:u,type:"deleteRange",range:f}).then(function(w){var v=w.failures;if(w.lastResult,w.results,w=w.numFailures,w)throw new wn("Could not delete some values",Object.keys(v).map(function(S){return v[S]}),m-w);return m-w})})}):this.modify(fs)},we);function we(){}var fs=function(o,l){return l.value=null};function kd(o,l){return o<l?-1:o===l?0:1}function _d(o,l){return l<o?-1:o===l?0:1}function et(o,l,u){return o=o instanceof va?new o.Collection(o):o,o._ctx.error=new(u||TypeError)(l),o}function Cn(o){return new o.Collection(o,function(){return ya("")}).limit(0)}function Fr(o,l,u,h){var f,m,w,v,S,T,O,_=u.length;if(!u.every(function(R){return typeof R=="string"}))return et(o,ua);function P(R){f=R==="next"?function(A){return A.toUpperCase()}:function(A){return A.toLowerCase()},m=R==="next"?function(A){return A.toLowerCase()}:function(A){return A.toUpperCase()},w=R==="next"?kd:_d;var D=u.map(function(A){return{lower:m(A),upper:f(A)}}).sort(function(A,M){return w(A.lower,M.lower)});v=D.map(function(A){return A.upper}),S=D.map(function(A){return A.lower}),O=(T=R)==="next"?"":h}P("next"),o=new o.Collection(o,function(){return Bt(v[0],S[_-1]+h)}),o._ondirectionchange=function(R){P(R)};var E=0;return o._addAlgorithm(function(R,D,A){var M=R.key;if(typeof M!="string")return!1;var j=m(M);if(l(j,S,E))return!0;for(var z=null,F=E;F<_;++F){var V=(function(Z,G,J,ee,Q,oe){for(var fe=Math.min(Z.length,ee.length),pe=-1,me=0;me<fe;++me){var tt=G[me];if(tt!==ee[me])return Q(Z[me],J[me])<0?Z.substr(0,me)+J[me]+J.substr(me+1):Q(Z[me],ee[me])<0?Z.substr(0,me)+ee[me]+J.substr(me+1):0<=pe?Z.substr(0,pe)+G[pe]+J.substr(pe+1):null;Q(Z[me],tt)<0&&(pe=me)}return fe<ee.length&&oe==="next"?Z+J.substr(Z.length):fe<Z.length&&oe==="prev"?Z.substr(0,J.length):pe<0?null:Z.substr(0,pe)+ee[pe]+J.substr(pe+1)})(M,j,v[F],S[F],w,T);V===null&&z===null?E=F+1:(z===null||0<w(z,V))&&(z=V)}return D(z!==null?function(){R.continue(z+O)}:A),!1}),o}function Bt(o,l,u,h){return{type:2,lower:o,upper:l,lowerOpen:u,upperOpen:h}}function ya(o){return{type:1,lower:o,upper:o}}var va=(Object.defineProperty(Me.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),Me.prototype.between=function(o,l,u,h){u=u!==!1,h=h===!0;try{return 0<this._cmp(o,l)||this._cmp(o,l)===0&&(u||h)&&(!u||!h)?Cn(this):new this.Collection(this,function(){return Bt(o,l,!u,!h)})}catch{return et(this,Dt)}},Me.prototype.equals=function(o){return o==null?et(this,Dt):new this.Collection(this,function(){return ya(o)})},Me.prototype.above=function(o){return o==null?et(this,Dt):new this.Collection(this,function(){return Bt(o,void 0,!0)})},Me.prototype.aboveOrEqual=function(o){return o==null?et(this,Dt):new this.Collection(this,function(){return Bt(o,void 0,!1)})},Me.prototype.below=function(o){return o==null?et(this,Dt):new this.Collection(this,function(){return Bt(void 0,o,!1,!0)})},Me.prototype.belowOrEqual=function(o){return o==null?et(this,Dt):new this.Collection(this,function(){return Bt(void 0,o)})},Me.prototype.startsWith=function(o){return typeof o!="string"?et(this,ua):this.between(o,o+nn,!0,!0)},Me.prototype.startsWithIgnoreCase=function(o){return o===""?this.startsWith(o):Fr(this,function(l,u){return l.indexOf(u[0])===0},[o],nn)},Me.prototype.equalsIgnoreCase=function(o){return Fr(this,function(l,u){return l===u[0]},[o],"")},Me.prototype.anyOfIgnoreCase=function(){var o=Ae.apply(Pe,arguments);return o.length===0?Cn(this):Fr(this,function(l,u){return u.indexOf(l)!==-1},o,"")},Me.prototype.startsWithAnyOfIgnoreCase=function(){var o=Ae.apply(Pe,arguments);return o.length===0?Cn(this):Fr(this,function(l,u){return u.some(function(h){return l.indexOf(h)===0})},o,nn)},Me.prototype.anyOf=function(){var o=this,l=Ae.apply(Pe,arguments),u=this._cmp;try{l.sort(u)}catch{return et(this,Dt)}if(l.length===0)return Cn(this);var h=new this.Collection(this,function(){return Bt(l[0],l[l.length-1])});h._ondirectionchange=function(m){u=m==="next"?o._ascending:o._descending,l.sort(u)};var f=0;return h._addAlgorithm(function(m,w,v){for(var S=m.key;0<u(S,l[f]);)if(++f===l.length)return w(v),!1;return u(S,l[f])===0||(w(function(){m.continue(l[f])}),!1)}),h},Me.prototype.notEqual=function(o){return this.inAnyRange([[-1/0,o],[o,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},Me.prototype.noneOf=function(){var o=Ae.apply(Pe,arguments);if(o.length===0)return new this.Collection(this);try{o.sort(this._ascending)}catch{return et(this,Dt)}var l=o.reduce(function(u,h){return u?u.concat([[u[u.length-1][1],h]]):[[-1/0,h]]},null);return l.push([o[o.length-1],this.db._maxKey]),this.inAnyRange(l,{includeLowers:!1,includeUppers:!1})},Me.prototype.inAnyRange=function(M,l){var u=this,h=this._cmp,f=this._ascending,m=this._descending,w=this._min,v=this._max;if(M.length===0)return Cn(this);if(!M.every(function(j){return j[0]!==void 0&&j[1]!==void 0&&f(j[0],j[1])<=0}))return et(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ce.InvalidArgument);var S=!l||l.includeLowers!==!1,T=l&&l.includeUppers===!0,O,_=f;function P(j,z){return _(j[0],z[0])}try{(O=M.reduce(function(j,z){for(var F=0,V=j.length;F<V;++F){var Z=j[F];if(h(z[0],Z[1])<0&&0<h(z[1],Z[0])){Z[0]=w(Z[0],z[0]),Z[1]=v(Z[1],z[1]);break}}return F===V&&j.push(z),j},[])).sort(P)}catch{return et(this,Dt)}var E=0,R=T?function(j){return 0<f(j,O[E][1])}:function(j){return 0<=f(j,O[E][1])},D=S?function(j){return 0<m(j,O[E][0])}:function(j){return 0<=m(j,O[E][0])},A=R,M=new this.Collection(this,function(){return Bt(O[0][0],O[O.length-1][1],!S,!T)});return M._ondirectionchange=function(j){_=j==="next"?(A=R,f):(A=D,m),O.sort(P)},M._addAlgorithm(function(j,z,F){for(var V,Z=j.key;A(Z);)if(++E===O.length)return z(F),!1;return!R(V=Z)&&!D(V)||(u._cmp(Z,O[E][1])===0||u._cmp(Z,O[E][0])===0||z(function(){_===f?j.continue(O[E][0]):j.continue(O[E][1])}),!1)}),M},Me.prototype.startsWithAnyOf=function(){var o=Ae.apply(Pe,arguments);return o.every(function(l){return typeof l=="string"})?o.length===0?Cn(this):this.inAnyRange(o.map(function(l){return[l,l+nn]})):et(this,"startsWithAnyOf() only works with strings")},Me);function Me(){}function St(o){return Se(function(l){return Jn(l),o(l.target.error),!1})}function Jn(o){o.stopPropagation&&o.stopPropagation(),o.preventDefault&&o.preventDefault()}var Qn="storagemutated",ps="x-storagemutated-1",Ht=Wn(null,Qn),Cd=(Et.prototype._lock=function(){return Y(!le.global),++this._reculock,this._reculock!==1||le.global||(le.lockOwnerFor=this),this},Et.prototype._unlock=function(){if(Y(!le.global),--this._reculock==0)for(le.global||(le.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var o=this._blockedFuncs.shift();try{tn(o[1],o[0])}catch{}}return this},Et.prototype._locked=function(){return this._reculock&&le.lockOwnerFor!==this},Et.prototype.create=function(o){var l=this;if(!this.mode)return this;var u=this.db.idbdb,h=this.db._state.dbOpenError;if(Y(!this.idbtrans),!o&&!u)switch(h&&h.name){case"DatabaseClosedError":throw new ce.DatabaseClosed(h);case"MissingAPIError":throw new ce.MissingAPI(h.message,h);default:throw new ce.OpenFailed(h)}if(!this.active)throw new ce.TransactionInactive;return Y(this._completion._state===null),(o=this.idbtrans=o||(this.db.core||u).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Se(function(f){Jn(f),l._reject(o.error)}),o.onabort=Se(function(f){Jn(f),l.active&&l._reject(new ce.Abort(o.error)),l.active=!1,l.on("abort").fire(f)}),o.oncomplete=Se(function(){l.active=!1,l._resolve(),"mutatedParts"in o&&Ht.storagemutated.fire(o.mutatedParts)}),this},Et.prototype._promise=function(o,l,u){var h=this;if(o==="readwrite"&&this.mode!=="readwrite")return Re(new ce.ReadOnly("Transaction is readonly"));if(!this.active)return Re(new ce.TransactionInactive);if(this._locked())return new ne(function(m,w){h._blockedFuncs.push([function(){h._promise(o,l,u).then(m,w)},le])});if(u)return Nt(function(){var m=new ne(function(w,v){h._lock();var S=l(w,v,h);S&&S.then&&S.then(w,v)});return m.finally(function(){return h._unlock()}),m._lib=!0,m});var f=new ne(function(m,w){var v=l(m,w,h);v&&v.then&&v.then(m,w)});return f._lib=!0,f},Et.prototype._root=function(){return this.parent?this.parent._root():this},Et.prototype.waitFor=function(o){var l,u=this._root(),h=ne.resolve(o);u._waitingFor?u._waitingFor=u._waitingFor.then(function(){return h}):(u._waitingFor=h,u._waitingQueue=[],l=u.idbtrans.objectStore(u.storeNames[0]),(function m(){for(++u._spinCount;u._waitingQueue.length;)u._waitingQueue.shift()();u._waitingFor&&(l.get(-1/0).onsuccess=m)})());var f=u._waitingFor;return new ne(function(m,w){h.then(function(v){return u._waitingQueue.push(Se(m.bind(null,v)))},function(v){return u._waitingQueue.push(Se(w.bind(null,v)))}).finally(function(){u._waitingFor===f&&(u._waitingFor=null)})})},Et.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ce.Abort))},Et.prototype.table=function(o){var l=this._memoizedTables||(this._memoizedTables={});if(b(l,o))return l[o];var u=this.schema[o];if(!u)throw new ce.NotFound("Table "+o+" not part of transaction");return u=new this.db.Table(o,u,this),u.core=this.db.core.table(o),l[o]=u},Et);function Et(){}function ms(o,l,u,h,f,m,w){return{name:o,keyPath:l,unique:u,multi:h,auto:f,compound:m,src:(u&&!w?"&":"")+(h?"*":"")+(f?"++":"")+xa(l)}}function xa(o){return typeof o=="string"?o:o?"["+[].join.call(o,"+")+"]":""}function gs(o,l,u){return{name:o,primKey:l,indexes:u,mappedClass:null,idxByName:(h=function(f){return[f.name,f]},u.reduce(function(f,m,w){return w=h(m,w),w&&(f[w[0]]=w[1]),f},{}))};var h}var Zn=function(o){try{return o.only([[]]),Zn=function(){return[[]]},[[]]}catch{return Zn=function(){return nn},nn}};function bs(o){return o==null?function(){}:typeof o=="string"?(l=o).split(".").length===1?function(u){return u[l]}:function(u){return W(u,l)}:function(u){return W(u,o)};var l}function $a(o){return[].slice.call(o)}var Sd=0;function er(o){return o==null?":id":typeof o=="string"?o:"[".concat(o.join("+"),"]")}function Ed(o,l,S){function h(A){if(A.type===3)return null;if(A.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var E=A.lower,R=A.upper,D=A.lowerOpen,A=A.upperOpen;return E===void 0?R===void 0?null:l.upperBound(R,!!A):R===void 0?l.lowerBound(E,!!D):l.bound(E,R,!!D,!!A)}function f(P){var E,R=P.name;return{name:R,schema:P,mutate:function(D){var A=D.trans,M=D.type,j=D.keys,z=D.values,F=D.range;return new Promise(function(V,Z){V=Se(V);var G=A.objectStore(R),J=G.keyPath==null,ee=M==="put"||M==="add";if(!ee&&M!=="delete"&&M!=="deleteRange")throw new Error("Invalid operation type: "+M);var Q,oe=(j||z||{length:1}).length;if(j&&z&&j.length!==z.length)throw new Error("Given keys array must have same length as given values array.");if(oe===0)return V({numFailures:0,failures:{},results:[],lastResult:void 0});function fe(Ge){++tt,Jn(Ge)}var pe=[],me=[],tt=0;if(M==="deleteRange"){if(F.type===4)return V({numFailures:tt,failures:me,results:[],lastResult:void 0});F.type===3?pe.push(Q=G.clear()):pe.push(Q=G.delete(h(F)))}else{var J=ee?J?[z,j]:[z,null]:[j,null],he=J[0],qe=J[1];if(ee)for(var Ke=0;Ke<oe;++Ke)pe.push(Q=qe&&qe[Ke]!==void 0?G[M](he[Ke],qe[Ke]):G[M](he[Ke])),Q.onerror=fe;else for(Ke=0;Ke<oe;++Ke)pe.push(Q=G[M](he[Ke])),Q.onerror=fe}function ei(Ge){Ge=Ge.target.result,pe.forEach(function(an,Ls){return an.error!=null&&(me[Ls]=an.error)}),V({numFailures:tt,failures:me,results:M==="delete"?j:pe.map(function(an){return an.result}),lastResult:Ge})}Q.onerror=function(Ge){fe(Ge),ei(Ge)},Q.onsuccess=ei})},getMany:function(D){var A=D.trans,M=D.keys;return new Promise(function(j,z){j=Se(j);for(var F,V=A.objectStore(R),Z=M.length,G=new Array(Z),J=0,ee=0,Q=function(pe){pe=pe.target,G[pe._pos]=pe.result,++ee===J&&j(G)},oe=St(z),fe=0;fe<Z;++fe)M[fe]!=null&&((F=V.get(M[fe]))._pos=fe,F.onsuccess=Q,F.onerror=oe,++J);J===0&&j(G)})},get:function(D){var A=D.trans,M=D.key;return new Promise(function(j,z){j=Se(j);var F=A.objectStore(R).get(M);F.onsuccess=function(V){return j(V.target.result)},F.onerror=St(z)})},query:(E=T,function(D){return new Promise(function(A,M){A=Se(A);var j,z,F,J=D.trans,V=D.values,Z=D.limit,Q=D.query,G=Z===1/0?void 0:Z,ee=Q.index,Q=Q.range,J=J.objectStore(R),ee=ee.isPrimaryKey?J:J.index(ee.name),Q=h(Q);if(Z===0)return A({result:[]});E?((G=V?ee.getAll(Q,G):ee.getAllKeys(Q,G)).onsuccess=function(oe){return A({result:oe.target.result})},G.onerror=St(M)):(j=0,z=!V&&"openKeyCursor"in ee?ee.openKeyCursor(Q):ee.openCursor(Q),F=[],z.onsuccess=function(oe){var fe=z.result;return fe?(F.push(V?fe.value:fe.primaryKey),++j===Z?A({result:F}):void fe.continue()):A({result:F})},z.onerror=St(M))})}),openCursor:function(D){var A=D.trans,M=D.values,j=D.query,z=D.reverse,F=D.unique;return new Promise(function(V,Z){V=Se(V);var ee=j.index,G=j.range,J=A.objectStore(R),J=ee.isPrimaryKey?J:J.index(ee.name),ee=z?F?"prevunique":"prev":F?"nextunique":"next",Q=!M&&"openKeyCursor"in J?J.openKeyCursor(h(G),ee):J.openCursor(h(G),ee);Q.onerror=St(Z),Q.onsuccess=Se(function(oe){var fe,pe,me,tt,he=Q.result;he?(he.___id=++Sd,he.done=!1,fe=he.continue.bind(he),pe=(pe=he.continuePrimaryKey)&&pe.bind(he),me=he.advance.bind(he),tt=function(){throw new Error("Cursor not stopped")},he.trans=A,he.stop=he.continue=he.continuePrimaryKey=he.advance=function(){throw new Error("Cursor not started")},he.fail=Se(Z),he.next=function(){var qe=this,Ke=1;return this.start(function(){return Ke--?qe.continue():qe.stop()}).then(function(){return qe})},he.start=function(qe){function Ke(){if(Q.result)try{qe()}catch(Ge){he.fail(Ge)}else he.done=!0,he.start=function(){throw new Error("Cursor behind last entry")},he.stop()}var ei=new Promise(function(Ge,an){Ge=Se(Ge),Q.onerror=St(an),he.fail=an,he.stop=function(Ls){he.stop=he.continue=he.continuePrimaryKey=he.advance=tt,Ge(Ls)}});return Q.onsuccess=Se(function(Ge){Q.onsuccess=Ke,Ke()}),he.continue=fe,he.continuePrimaryKey=pe,he.advance=me,Ke(),ei},V(he)):V(null)},Z)})},count:function(D){var A=D.query,M=D.trans,j=A.index,z=A.range;return new Promise(function(F,V){var Z=M.objectStore(R),G=j.isPrimaryKey?Z:Z.index(j.name),Z=h(z),G=Z?G.count(Z):G.count();G.onsuccess=Se(function(J){return F(J.target.result)}),G.onerror=St(V)})}}}var m,w,v,O=(w=S,v=$a((m=o).objectStoreNames),{schema:{name:m.name,tables:v.map(function(P){return w.objectStore(P)}).map(function(P){var E=P.keyPath,A=P.autoIncrement,R=c(E),D={},A={name:P.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:E==null,compound:R,keyPath:E,autoIncrement:A,unique:!0,extractKey:bs(E)},indexes:$a(P.indexNames).map(function(M){return P.index(M)}).map(function(F){var j=F.name,z=F.unique,V=F.multiEntry,F=F.keyPath,V={name:j,compound:c(F),keyPath:F,unique:z,multiEntry:V,extractKey:bs(F)};return D[er(F)]=V}),getIndexByKeyPath:function(M){return D[er(M)]}};return D[":id"]=A.primaryKey,E!=null&&(D[er(E)]=A.primaryKey),A})},hasGetAll:0<v.length&&"getAll"in w.objectStore(v[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),S=O.schema,T=O.hasGetAll,O=S.tables.map(f),_={};return O.forEach(function(P){return _[P.name]=P}),{stack:"dbcore",transaction:o.transaction.bind(o),table:function(P){if(!_[P])throw new Error("Table '".concat(P,"' not found"));return _[P]},MIN_KEY:-1/0,MAX_KEY:Zn(l),schema:S}}function Td(o,l,u,h){var f=u.IDBKeyRange;return u.indexedDB,{dbcore:(h=Ed(l,f,h),o.dbcore.reduce(function(m,w){return w=w.create,r(r({},m),w(m))},h))}}function Br(o,h){var u=h.db,h=Td(o._middlewares,u,o._deps,h);o.core=h.dbcore,o.tables.forEach(function(f){var m=f.name;o.core.schema.tables.some(function(w){return w.name===m})&&(f.core=o.core.table(m),o[m]instanceof o.Table&&(o[m].core=f.core))})}function Hr(o,l,u,h){u.forEach(function(f){var m=h[f];l.forEach(function(w){var v=(function S(T,O){return I(T,O)||(T=p(T))&&S(T,O)})(w,f);(!v||"value"in v&&v.value===void 0)&&(w===o.Transaction.prototype||w instanceof o.Transaction?x(w,f,{get:function(){return this.table(f)},set:function(S){C(this,f,{value:S,writable:!0,configurable:!0,enumerable:!0})}}):w[f]=new o.Table(f,m))})})}function ws(o,l){l.forEach(function(u){for(var h in u)u[h]instanceof o.Table&&delete u[h]})}function Id(o,l){return o._cfg.version-l._cfg.version}function Ad(o,l,u,h){var f=o._dbSchema;u.objectStoreNames.contains("$meta")&&!f.$meta&&(f.$meta=gs("$meta",_a("")[0],[]),o._storeNames.push("$meta"));var m=o._createTransaction("readwrite",o._storeNames,f);m.create(u),m._completion.catch(h);var w=m._reject.bind(m),v=le.transless||le;Nt(function(){return le.trans=m,le.transless=v,l!==0?(Br(o,u),T=l,((S=m).storeNames.includes("$meta")?S.table("$meta").get("version").then(function(O){return O??T}):ne.resolve(T)).then(function(O){return P=O,E=m,R=u,D=[],O=(_=o)._versions,A=_._dbSchema=Kr(0,_.idbdb,R),(O=O.filter(function(M){return M._cfg.version>=P})).length!==0?(O.forEach(function(M){D.push(function(){var j=A,z=M._cfg.dbschema;Vr(_,j,R),Vr(_,z,R),A=_._dbSchema=z;var F=ys(j,z);F.add.forEach(function(ee){vs(R,ee[0],ee[1].primKey,ee[1].indexes)}),F.change.forEach(function(ee){if(ee.recreate)throw new ce.Upgrade("Not yet support for changing primary key");var Q=R.objectStore(ee.name);ee.add.forEach(function(oe){return qr(Q,oe)}),ee.change.forEach(function(oe){Q.deleteIndex(oe.name),qr(Q,oe)}),ee.del.forEach(function(oe){return Q.deleteIndex(oe)})});var V=M._cfg.contentUpgrade;if(V&&M._cfg.version>P){Br(_,R),E._memoizedTables={};var Z=X(z);F.del.forEach(function(ee){Z[ee]=j[ee]}),ws(_,[_.Transaction.prototype]),Hr(_,[_.Transaction.prototype],a(Z),Z),E.schema=Z;var G,J=Ze(V);return J&&$n(),F=ne.follow(function(){var ee;(G=V(E))&&J&&(ee=Ut.bind(null,null),G.then(ee,ee))}),G&&typeof G.then=="function"?ne.resolve(G):F.then(function(){return G})}}),D.push(function(j){var z,F,V=M._cfg.dbschema;z=V,F=j,[].slice.call(F.db.objectStoreNames).forEach(function(Z){return z[Z]==null&&F.db.deleteObjectStore(Z)}),ws(_,[_.Transaction.prototype]),Hr(_,[_.Transaction.prototype],_._storeNames,_._dbSchema),E.schema=_._dbSchema}),D.push(function(j){_.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(_.idbdb.version/10)===M._cfg.version?(_.idbdb.deleteObjectStore("$meta"),delete _._dbSchema.$meta,_._storeNames=_._storeNames.filter(function(z){return z!=="$meta"})):j.objectStore("$meta").put(M._cfg.version,"version"))})}),(function M(){return D.length?ne.resolve(D.shift()(E.idbtrans)).then(M):ne.resolve()})().then(function(){ka(A,R)})):ne.resolve();var _,P,E,R,D,A}).catch(w)):(a(f).forEach(function(O){vs(u,O,f[O].primKey,f[O].indexes)}),Br(o,u),void ne.follow(function(){return o.on.populate.fire(m)}).catch(w));var S,T})}function Rd(o,l){ka(o._dbSchema,l),l.db.version%10!=0||l.objectStoreNames.contains("$meta")||l.db.createObjectStore("$meta").add(Math.ceil(l.db.version/10-1),"version");var u=Kr(0,o.idbdb,l);Vr(o,o._dbSchema,l);for(var h=0,f=ys(u,o._dbSchema).change;h<f.length;h++){var m=(function(w){if(w.change.length||w.recreate)return console.warn("Unable to patch indexes of table ".concat(w.name," because it has changes on the type of index or primary key.")),{value:void 0};var v=l.objectStore(w.name);w.add.forEach(function(S){Ct&&console.debug("Dexie upgrade patch: Creating missing index ".concat(w.name,".").concat(S.src)),qr(v,S)})})(f[h]);if(typeof m=="object")return m.value}}function ys(o,l){var u,h={del:[],add:[],change:[]};for(u in o)l[u]||h.del.push(u);for(u in l){var f=o[u],m=l[u];if(f){var w={name:u,def:m,recreate:!1,del:[],add:[],change:[]};if(""+(f.primKey.keyPath||"")!=""+(m.primKey.keyPath||"")||f.primKey.auto!==m.primKey.auto)w.recreate=!0,h.change.push(w);else{var v=f.idxByName,S=m.idxByName,T=void 0;for(T in v)S[T]||w.del.push(T);for(T in S){var O=v[T],_=S[T];O?O.src!==_.src&&w.change.push(_):w.add.push(_)}(0<w.del.length||0<w.add.length||0<w.change.length)&&h.change.push(w)}}else h.add.push([u,m])}return h}function vs(o,l,u,h){var f=o.db.createObjectStore(l,u.keyPath?{keyPath:u.keyPath,autoIncrement:u.auto}:{autoIncrement:u.auto});return h.forEach(function(m){return qr(f,m)}),f}function ka(o,l){a(o).forEach(function(u){l.db.objectStoreNames.contains(u)||(Ct&&console.debug("Dexie: Creating missing table",u),vs(l,u,o[u].primKey,o[u].indexes))})}function qr(o,l){o.createIndex(l.name,l.keyPath,{unique:l.unique,multiEntry:l.multi})}function Kr(o,l,u){var h={};return U(l.objectStoreNames,0).forEach(function(f){for(var m=u.objectStore(f),w=ms(xa(T=m.keyPath),T||"",!0,!1,!!m.autoIncrement,T&&typeof T!="string",!0),v=[],S=0;S<m.indexNames.length;++S){var O=m.index(m.indexNames[S]),T=O.keyPath,O=ms(O.name,T,!!O.unique,!!O.multiEntry,!1,T&&typeof T!="string",!1);v.push(O)}h[f]=gs(f,w,v)}),h}function Vr(o,l,u){for(var h=u.db.objectStoreNames,f=0;f<h.length;++f){var m=h[f],w=u.objectStore(m);o._hasGetAll="getAll"in w;for(var v=0;v<w.indexNames.length;++v){var S=w.indexNames[v],T=w.index(S).keyPath,O=typeof T=="string"?T:"["+U(T).join("+")+"]";!l[m]||(T=l[m].idxByName[O])&&(T.name=S,delete l[m].idxByName[O],l[m].idxByName[S]=T)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&s.WorkerGlobalScope&&s instanceof s.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(o._hasGetAll=!1)}function _a(o){return o.split(",").map(function(l,u){var h=(l=l.trim()).replace(/([&*]|\+\+)/g,""),f=/^\[/.test(h)?h.match(/^\[(.*)\]$/)[1].split("+"):h;return ms(h,f||null,/\&/.test(l),/\*/.test(l),/\+\+/.test(l),c(f),u===0)})}var Od=(Gr.prototype._parseStoresSpec=function(o,l){a(o).forEach(function(u){if(o[u]!==null){var h=_a(o[u]),f=h.shift();if(f.unique=!0,f.multi)throw new ce.Schema("Primary key cannot be multi-valued");h.forEach(function(m){if(m.auto)throw new ce.Schema("Only primary key can be marked as autoIncrement (++)");if(!m.keyPath)throw new ce.Schema("Index must have a name and cannot be an empty string")}),l[u]=gs(u,f,h)}})},Gr.prototype.stores=function(u){var l=this.db;this._cfg.storesSource=this._cfg.storesSource?d(this._cfg.storesSource,u):u;var u=l._versions,h={},f={};return u.forEach(function(m){d(h,m._cfg.storesSource),f=m._cfg.dbschema={},m._parseStoresSpec(h,f)}),l._dbSchema=f,ws(l,[l._allTables,l,l.Transaction.prototype]),Hr(l,[l._allTables,l,l.Transaction.prototype,this._cfg.tables],a(f),f),l._storeNames=a(f),this},Gr.prototype.upgrade=function(o){return this._cfg.contentUpgrade=es(this._cfg.contentUpgrade||xe,o),this},Gr);function Gr(){}function xs(o,l){var u=o._dbNamesDB;return u||(u=o._dbNamesDB=new Lt(jr,{addons:[],indexedDB:o,IDBKeyRange:l})).version(1).stores({dbnames:"name"}),u.table("dbnames")}function $s(o){return o&&typeof o.databases=="function"}function ks(o){return Nt(function(){return le.letThrough=!0,o()})}function _s(o){return!("from"in o)}var He=function(o,l){if(!this){var u=new He;return o&&"d"in o&&d(u,o),u}d(this,arguments.length?{d:1,from:o,to:1<arguments.length?l:o}:{d:0})};function tr(o,l,u){var h=be(l,u);if(!isNaN(h)){if(0<h)throw RangeError();if(_s(o))return d(o,{from:l,to:u,d:1});var f=o.l,h=o.r;if(be(u,o.from)<0)return f?tr(f,l,u):o.l={from:l,to:u,d:1,l:null,r:null},Sa(o);if(0<be(l,o.to))return h?tr(h,l,u):o.r={from:l,to:u,d:1,l:null,r:null},Sa(o);be(l,o.from)<0&&(o.from=l,o.l=null,o.d=h?h.d+1:1),0<be(u,o.to)&&(o.to=u,o.r=null,o.d=o.l?o.l.d+1:1),u=!o.r,f&&!o.l&&nr(o,f),h&&u&&nr(o,h)}}function nr(o,l){_s(l)||(function u(h,S){var m=S.from,w=S.to,v=S.l,S=S.r;tr(h,m,w),v&&u(h,v),S&&u(h,S)})(o,l)}function Ca(o,l){var u=Wr(l),h=u.next();if(h.done)return!1;for(var f=h.value,m=Wr(o),w=m.next(f.from),v=w.value;!h.done&&!w.done;){if(be(v.from,f.to)<=0&&0<=be(v.to,f.from))return!0;be(f.from,v.from)<0?f=(h=u.next(v.from)).value:v=(w=m.next(f.from)).value}return!1}function Wr(o){var l=_s(o)?null:{s:0,n:o};return{next:function(u){for(var h=0<arguments.length;l;)switch(l.s){case 0:if(l.s=1,h)for(;l.n.l&&be(u,l.n.from)<0;)l={up:l,n:l.n.l,s:1};else for(;l.n.l;)l={up:l,n:l.n.l,s:1};case 1:if(l.s=2,!h||be(u,l.n.to)<=0)return{value:l.n,done:!1};case 2:if(l.n.r){l.s=3,l={up:l,n:l.n.r,s:0};continue}case 3:l=l.up}return{done:!0}}}}function Sa(o){var l,u,h=(((l=o.r)===null||l===void 0?void 0:l.d)||0)-(((u=o.l)===null||u===void 0?void 0:u.d)||0),f=1<h?"r":h<-1?"l":"";f&&(l=f=="r"?"l":"r",u=r({},o),h=o[f],o.from=h.from,o.to=h.to,o[f]=h[f],u[f]=h[l],(o[l]=u).d=Ea(u)),o.d=Ea(o)}function Ea(u){var l=u.r,u=u.l;return(l?u?Math.max(l.d,u.d):l.d:u?u.d:0)+1}function Yr(o,l){return a(l).forEach(function(u){o[u]?nr(o[u],l[u]):o[u]=(function h(f){var m,w,v={};for(m in f)b(f,m)&&(w=f[m],v[m]=!w||typeof w!="object"||q.has(w.constructor)?w:h(w));return v})(l[u])}),o}function Cs(o,l){return o.all||l.all||Object.keys(o).some(function(u){return l[u]&&Ca(l[u],o[u])})}y(He.prototype,((mt={add:function(o){return nr(this,o),this},addKey:function(o){return tr(this,o,o),this},addKeys:function(o){var l=this;return o.forEach(function(u){return tr(l,u,u)}),this},hasKey:function(o){var l=Wr(this).next(o).value;return l&&be(l.from,o)<=0&&0<=be(l.to,o)}})[ze]=function(){return Wr(this)},mt));var sn={},Ss={},Es=!1;function Xr(o){Yr(Ss,o),Es||(Es=!0,setTimeout(function(){Es=!1,Ts(Ss,!(Ss={}))},0))}function Ts(o,l){l===void 0&&(l=!1);var u=new Set;if(o.all)for(var h=0,f=Object.values(sn);h<f.length;h++)Ta(w=f[h],o,u,l);else for(var m in o){var w,v=/^idb\:\/\/(.*)\/(.*)\//.exec(m);v&&(m=v[1],v=v[2],(w=sn["idb://".concat(m,"/").concat(v)])&&Ta(w,o,u,l))}u.forEach(function(S){return S()})}function Ta(o,l,u,h){for(var f=[],m=0,w=Object.entries(o.queries.query);m<w.length;m++){for(var v=w[m],S=v[0],T=[],O=0,_=v[1];O<_.length;O++){var P=_[O];Cs(l,P.obsSet)?P.subscribers.forEach(function(A){return u.add(A)}):h&&T.push(P)}h&&f.push([S,T])}if(h)for(var E=0,R=f;E<R.length;E++){var D=R[E],S=D[0],T=D[1];o.queries.query[S]=T}}function Dd(o){var l=o._state,u=o._deps.indexedDB;if(l.isBeingOpened||o.idbdb)return l.dbReadyPromise.then(function(){return l.dbOpenError?Re(l.dbOpenError):o});l.isBeingOpened=!0,l.dbOpenError=null,l.openComplete=!1;var h=l.openCanceller,f=Math.round(10*o.verno),m=!1;function w(){if(l.openCanceller!==h)throw new ce.DatabaseClosed("db.open() was cancelled")}function v(){return new ne(function(P,E){if(w(),!u)throw new ce.MissingAPI;var R=o.name,D=l.autoSchema||!f?u.open(R):u.open(R,f);if(!D)throw new ce.MissingAPI;D.onerror=St(E),D.onblocked=Se(o._fireOnBlocked),D.onupgradeneeded=Se(function(A){var M;O=D.transaction,l.autoSchema&&!o._options.allowEmptyDB?(D.onerror=Jn,O.abort(),D.result.close(),(M=u.deleteDatabase(R)).onsuccess=M.onerror=Se(function(){E(new ce.NoSuchDatabase("Database ".concat(R," doesnt exist")))})):(O.onerror=St(E),A=A.oldVersion>Math.pow(2,62)?0:A.oldVersion,_=A<1,o.idbdb=D.result,m&&Rd(o,O),Ad(o,A/10,O,E))},E),D.onsuccess=Se(function(){O=null;var A,M,j,z,F,V=o.idbdb=D.result,Z=U(V.objectStoreNames);if(0<Z.length)try{var G=V.transaction((z=Z).length===1?z[0]:z,"readonly");if(l.autoSchema)M=V,j=G,(A=o).verno=M.version/10,j=A._dbSchema=Kr(0,M,j),A._storeNames=U(M.objectStoreNames,0),Hr(A,[A._allTables],a(j),j);else if(Vr(o,o._dbSchema,G),((F=ys(Kr(0,(F=o).idbdb,G),F._dbSchema)).add.length||F.change.some(function(J){return J.add.length||J.change.length}))&&!m)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),V.close(),f=V.version+1,m=!0,P(v());Br(o,G)}catch{}kn.push(o),V.onversionchange=Se(function(J){l.vcFired=!0,o.on("versionchange").fire(J)}),V.onclose=Se(function(J){o.on("close").fire(J)}),_&&(F=o._deps,G=R,V=F.indexedDB,F=F.IDBKeyRange,$s(V)||G===jr||xs(V,F).put({name:G}).catch(xe)),P()},E)}).catch(function(P){switch(P?.name){case"UnknownError":if(0<l.PR1398_maxLoop)return l.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),v();break;case"VersionError":if(0<f)return f=0,v()}return ne.reject(P)})}var S,T=l.dbReadyResolve,O=null,_=!1;return ne.race([h,(typeof navigator>"u"?ne.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(P){function E(){return indexedDB.databases().finally(P)}S=setInterval(E,100),E()}).finally(function(){return clearInterval(S)}):Promise.resolve()).then(v)]).then(function(){return w(),l.onReadyBeingFired=[],ne.resolve(ks(function(){return o.on.ready.fire(o.vip)})).then(function P(){if(0<l.onReadyBeingFired.length){var E=l.onReadyBeingFired.reduce(es,xe);return l.onReadyBeingFired=[],ne.resolve(ks(function(){return E(o.vip)})).then(P)}})}).finally(function(){l.openCanceller===h&&(l.onReadyBeingFired=null,l.isBeingOpened=!1)}).catch(function(P){l.dbOpenError=P;try{O&&O.abort()}catch{}return h===l.openCanceller&&o._close(),Re(P)}).finally(function(){l.openComplete=!0,T()}).then(function(){var P;return _&&(P={},o.tables.forEach(function(E){E.schema.indexes.forEach(function(R){R.name&&(P["idb://".concat(o.name,"/").concat(E.name,"/").concat(R.name)]=new He(-1/0,[[[]]]))}),P["idb://".concat(o.name,"/").concat(E.name,"/")]=P["idb://".concat(o.name,"/").concat(E.name,"/:dels")]=new He(-1/0,[[[]]])}),Ht(Qn).fire(P),Ts(P,!0)),o})}function Is(o){function l(m){return o.next(m)}var u=f(l),h=f(function(m){return o.throw(m)});function f(m){return function(S){var v=m(S),S=v.value;return v.done?S:S&&typeof S.then=="function"?S.then(u,h):c(S)?Promise.all(S).then(u,h):u(S)}}return f(l)()}function Jr(o,l,u){for(var h=c(o)?o.slice():[o],f=0;f<u;++f)h.push(l);return h}var Pd={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(o){return r(r({},o),{table:function(l){var u=o.table(l),h=u.schema,f={},m=[];function w(_,P,E){var R=er(_),D=f[R]=f[R]||[],A=_==null?0:typeof _=="string"?1:_.length,M=0<P,M=r(r({},E),{name:M?"".concat(R,"(virtual-from:").concat(E.name,")"):E.name,lowLevelIndex:E,isVirtual:M,keyTail:P,keyLength:A,extractKey:bs(_),unique:!M&&E.unique});return D.push(M),M.isPrimaryKey||m.push(M),1<A&&w(A===2?_[0]:_.slice(0,A-1),P+1,E),D.sort(function(j,z){return j.keyTail-z.keyTail}),M}l=w(h.primaryKey.keyPath,0,h.primaryKey),f[":id"]=[l];for(var v=0,S=h.indexes;v<S.length;v++){var T=S[v];w(T.keyPath,0,T)}function O(_){var P,E=_.query.index;return E.isVirtual?r(r({},_),{query:{index:E.lowLevelIndex,range:(P=_.query.range,E=E.keyTail,{type:P.type===1?2:P.type,lower:Jr(P.lower,P.lowerOpen?o.MAX_KEY:o.MIN_KEY,E),lowerOpen:!0,upper:Jr(P.upper,P.upperOpen?o.MIN_KEY:o.MAX_KEY,E),upperOpen:!0})}}):_}return r(r({},u),{schema:r(r({},h),{primaryKey:l,indexes:m,getIndexByKeyPath:function(_){return(_=f[er(_)])&&_[0]}}),count:function(_){return u.count(O(_))},query:function(_){return u.query(O(_))},openCursor:function(_){var P=_.query.index,E=P.keyTail,R=P.isVirtual,D=P.keyLength;return R?u.openCursor(O(_)).then(function(M){return M&&A(M)}):u.openCursor(_);function A(M){return Object.create(M,{continue:{value:function(j){j!=null?M.continue(Jr(j,_.reverse?o.MAX_KEY:o.MIN_KEY,E)):_.unique?M.continue(M.key.slice(0,D).concat(_.reverse?o.MIN_KEY:o.MAX_KEY,E)):M.continue()}},continuePrimaryKey:{value:function(j,z){M.continuePrimaryKey(Jr(j,o.MAX_KEY,E),z)}},primaryKey:{get:function(){return M.primaryKey}},key:{get:function(){var j=M.key;return D===1?j[0]:j.slice(0,D)}},value:{get:function(){return M.value}}})}}})}})}};function As(o,l,u,h){return u=u||{},h=h||"",a(o).forEach(function(f){var m,w,v;b(l,f)?(m=o[f],w=l[f],typeof m=="object"&&typeof w=="object"&&m&&w?(v=Te(m))!==Te(w)?u[h+f]=l[f]:v==="Object"?As(m,w,u,h+f+"."):m!==w&&(u[h+f]=l[f]):m!==w&&(u[h+f]=l[f])):u[h+f]=void 0}),a(l).forEach(function(f){b(o,f)||(u[h+f]=l[f])}),u}function Rs(o,l){return l.type==="delete"?l.keys:l.keys||l.values.map(o.extractKey)}var Ld={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(o){return r(r({},o),{table:function(l){var u=o.table(l),h=u.schema.primaryKey;return r(r({},u),{mutate:function(f){var m=le.trans,w=m.table(l).hook,v=w.deleting,S=w.creating,T=w.updating;switch(f.type){case"add":if(S.fire===xe)break;return m._promise("readwrite",function(){return O(f)},!0);case"put":if(S.fire===xe&&T.fire===xe)break;return m._promise("readwrite",function(){return O(f)},!0);case"delete":if(v.fire===xe)break;return m._promise("readwrite",function(){return O(f)},!0);case"deleteRange":if(v.fire===xe)break;return m._promise("readwrite",function(){return(function _(P,E,R){return u.query({trans:P,values:!1,query:{index:h,range:E},limit:R}).then(function(D){var A=D.result;return O({type:"delete",keys:A,trans:P}).then(function(M){return 0<M.numFailures?Promise.reject(M.failures[0]):A.length<R?{failures:[],numFailures:0,lastResult:void 0}:_(P,r(r({},E),{lower:A[A.length-1],lowerOpen:!0}),R)})})})(f.trans,f.range,1e4)},!0)}return u.mutate(f);function O(_){var P,E,R,D=le.trans,A=_.keys||Rs(h,_);if(!A)throw new Error("Keys missing");return(_=_.type==="add"||_.type==="put"?r(r({},_),{keys:A}):r({},_)).type!=="delete"&&(_.values=i([],_.values)),_.keys&&(_.keys=i([],_.keys)),P=u,R=A,((E=_).type==="add"?Promise.resolve([]):P.getMany({trans:E.trans,keys:R,cache:"immutable"})).then(function(M){var j=A.map(function(z,F){var V,Z,G,J=M[F],ee={onerror:null,onsuccess:null};return _.type==="delete"?v.fire.call(ee,z,J,D):_.type==="add"||J===void 0?(V=S.fire.call(ee,z,_.values[F],D),z==null&&V!=null&&(_.keys[F]=z=V,h.outbound||H(_.values[F],h.keyPath,z))):(V=As(J,_.values[F]),(Z=T.fire.call(ee,V,z,J,D))&&(G=_.values[F],Object.keys(Z).forEach(function(Q){b(G,Q)?G[Q]=Z[Q]:H(G,Q,Z[Q])}))),ee});return u.mutate(_).then(function(z){for(var F=z.failures,V=z.results,Z=z.numFailures,z=z.lastResult,G=0;G<A.length;++G){var J=(V||A)[G],ee=j[G];J==null?ee.onerror&&ee.onerror(F[G]):ee.onsuccess&&ee.onsuccess(_.type==="put"&&M[G]?_.values[G]:J)}return{failures:F,results:V,numFailures:Z,lastResult:z}}).catch(function(z){return j.forEach(function(F){return F.onerror&&F.onerror(z)}),Promise.reject(z)})})}}})}})}};function Ia(o,l,u){try{if(!l||l.keys.length<o.length)return null;for(var h=[],f=0,m=0;f<l.keys.length&&m<o.length;++f)be(l.keys[f],o[m])===0&&(h.push(u?ue(l.values[f]):l.values[f]),++m);return h.length===o.length?h:null}catch{return null}}var Md={stack:"dbcore",level:-1,create:function(o){return{table:function(l){var u=o.table(l);return r(r({},u),{getMany:function(h){if(!h.cache)return u.getMany(h);var f=Ia(h.keys,h.trans._cache,h.cache==="clone");return f?ne.resolve(f):u.getMany(h).then(function(m){return h.trans._cache={keys:h.keys,values:h.cache==="clone"?ue(m):m},m})},mutate:function(h){return h.type!=="add"&&(h.trans._cache=null),u.mutate(h)}})}}}};function Aa(o,l){return o.trans.mode==="readonly"&&!!o.subscr&&!o.trans.explicit&&o.trans.db._options.cache!=="disabled"&&!l.schema.primaryKey.outbound}function Ra(o,l){switch(o){case"query":return l.values&&!l.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var jd={stack:"dbcore",level:0,name:"Observability",create:function(o){var l=o.schema.name,u=new He(o.MIN_KEY,o.MAX_KEY);return r(r({},o),{transaction:function(h,f,m){if(le.subscr&&f!=="readonly")throw new ce.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(le.querier));return o.transaction(h,f,m)},table:function(h){var f=o.table(h),m=f.schema,w=m.primaryKey,_=m.indexes,v=w.extractKey,S=w.outbound,T=w.autoIncrement&&_.filter(function(E){return E.compound&&E.keyPath.includes(w.keyPath)}),O=r(r({},f),{mutate:function(E){function R(Q){return Q="idb://".concat(l,"/").concat(h,"/").concat(Q),z[Q]||(z[Q]=new He)}var D,A,M,j=E.trans,z=E.mutatedParts||(E.mutatedParts={}),F=R(""),V=R(":dels"),Z=E.type,ee=E.type==="deleteRange"?[E.range]:E.type==="delete"?[E.keys]:E.values.length<50?[Rs(w,E).filter(function(Q){return Q}),E.values]:[],G=ee[0],J=ee[1],ee=E.trans._cache;return c(G)?(F.addKeys(G),(ee=Z==="delete"||G.length===J.length?Ia(G,ee):null)||V.addKeys(G),(ee||J)&&(D=R,A=ee,M=J,m.indexes.forEach(function(Q){var oe=D(Q.name||"");function fe(me){return me!=null?Q.extractKey(me):null}function pe(me){return Q.multiEntry&&c(me)?me.forEach(function(tt){return oe.addKey(tt)}):oe.addKey(me)}(A||M).forEach(function(me,qe){var he=A&&fe(A[qe]),qe=M&&fe(M[qe]);be(he,qe)!==0&&(he!=null&&pe(he),qe!=null&&pe(qe))})}))):G?(J={from:(J=G.lower)!==null&&J!==void 0?J:o.MIN_KEY,to:(J=G.upper)!==null&&J!==void 0?J:o.MAX_KEY},V.add(J),F.add(J)):(F.add(u),V.add(u),m.indexes.forEach(function(Q){return R(Q.name).add(u)})),f.mutate(E).then(function(Q){return!G||E.type!=="add"&&E.type!=="put"||(F.addKeys(Q.results),T&&T.forEach(function(oe){for(var fe=E.values.map(function(he){return oe.extractKey(he)}),pe=oe.keyPath.findIndex(function(he){return he===w.keyPath}),me=0,tt=Q.results.length;me<tt;++me)fe[me][pe]=Q.results[me];R(oe.name).addKeys(fe)})),j.mutatedParts=Yr(j.mutatedParts||{},z),Q})}}),_=function(R){var D=R.query,R=D.index,D=D.range;return[R,new He((R=D.lower)!==null&&R!==void 0?R:o.MIN_KEY,(D=D.upper)!==null&&D!==void 0?D:o.MAX_KEY)]},P={get:function(E){return[w,new He(E.key)]},getMany:function(E){return[w,new He().addKeys(E.keys)]},count:_,query:_,openCursor:_};return a(P).forEach(function(E){O[E]=function(R){var D=le.subscr,A=!!D,M=Aa(le,f)&&Ra(E,R)?R.obsSet={}:D;if(A){var j=function(J){return J="idb://".concat(l,"/").concat(h,"/").concat(J),M[J]||(M[J]=new He)},z=j(""),F=j(":dels"),D=P[E](R),A=D[0],D=D[1];if((E==="query"&&A.isPrimaryKey&&!R.values?F:j(A.name||"")).add(D),!A.isPrimaryKey){if(E!=="count"){var V=E==="query"&&S&&R.values&&f.query(r(r({},R),{values:!1}));return f[E].apply(this,arguments).then(function(J){if(E==="query"){if(S&&R.values)return V.then(function(fe){return fe=fe.result,z.addKeys(fe),J});var ee=R.values?J.result.map(v):J.result;(R.values?z:F).addKeys(ee)}else if(E==="openCursor"){var Q=J,oe=R.values;return Q&&Object.create(Q,{key:{get:function(){return F.addKey(Q.primaryKey),Q.key}},primaryKey:{get:function(){var fe=Q.primaryKey;return F.addKey(fe),fe}},value:{get:function(){return oe&&z.addKey(Q.primaryKey),Q.value}}})}return J})}F.add(u)}}return f[E].apply(this,arguments)}}),O}})}};function Oa(o,l,u){if(u.numFailures===0)return l;if(l.type==="deleteRange")return null;var h=l.keys?l.keys.length:"values"in l&&l.values?l.values.length:1;return u.numFailures===h?null:(l=r({},l),c(l.keys)&&(l.keys=l.keys.filter(function(f,m){return!(m in u.failures)})),"values"in l&&c(l.values)&&(l.values=l.values.filter(function(f,m){return!(m in u.failures)})),l)}function Os(o,l){return u=o,((h=l).lower===void 0||(h.lowerOpen?0<be(u,h.lower):0<=be(u,h.lower)))&&(o=o,(l=l).upper===void 0||(l.upperOpen?be(o,l.upper)<0:be(o,l.upper)<=0));var u,h}function Da(o,l,P,h,f,m){if(!P||P.length===0)return o;var w=l.query.index,v=w.multiEntry,S=l.query.range,T=h.schema.primaryKey.extractKey,O=w.extractKey,_=(w.lowLevelIndex||w).extractKey,P=P.reduce(function(E,R){var D=E,A=[];if(R.type==="add"||R.type==="put")for(var M=new He,j=R.values.length-1;0<=j;--j){var z,F=R.values[j],V=T(F);M.hasKey(V)||(z=O(F),(v&&c(z)?z.some(function(Q){return Os(Q,S)}):Os(z,S))&&(M.addKey(V),A.push(F)))}switch(R.type){case"add":var Z=new He().addKeys(l.values?E.map(function(oe){return T(oe)}):E),D=E.concat(l.values?A.filter(function(oe){return oe=T(oe),!Z.hasKey(oe)&&(Z.addKey(oe),!0)}):A.map(function(oe){return T(oe)}).filter(function(oe){return!Z.hasKey(oe)&&(Z.addKey(oe),!0)}));break;case"put":var G=new He().addKeys(R.values.map(function(oe){return T(oe)}));D=E.filter(function(oe){return!G.hasKey(l.values?T(oe):oe)}).concat(l.values?A:A.map(function(oe){return T(oe)}));break;case"delete":var J=new He().addKeys(R.keys);D=E.filter(function(oe){return!J.hasKey(l.values?T(oe):oe)});break;case"deleteRange":var ee=R.range;D=E.filter(function(oe){return!Os(T(oe),ee)})}return D},o);return P===o?o:(P.sort(function(E,R){return be(_(E),_(R))||be(T(E),T(R))}),l.limit&&l.limit<1/0&&(P.length>l.limit?P.length=l.limit:o.length===l.limit&&P.length<l.limit&&(f.dirty=!0)),m?Object.freeze(P):P)}function Pa(o,l){return be(o.lower,l.lower)===0&&be(o.upper,l.upper)===0&&!!o.lowerOpen==!!l.lowerOpen&&!!o.upperOpen==!!l.upperOpen}function zd(o,l){return(function(u,h,f,m){if(u===void 0)return h!==void 0?-1:0;if(h===void 0)return 1;if((h=be(u,h))===0){if(f&&m)return 0;if(f)return 1;if(m)return-1}return h})(o.lower,l.lower,o.lowerOpen,l.lowerOpen)<=0&&0<=(function(u,h,f,m){if(u===void 0)return h!==void 0?1:0;if(h===void 0)return-1;if((h=be(u,h))===0){if(f&&m)return 0;if(f)return-1;if(m)return 1}return h})(o.upper,l.upper,o.upperOpen,l.upperOpen)}function Nd(o,l,u,h){o.subscribers.add(u),h.addEventListener("abort",function(){var f,m;o.subscribers.delete(u),o.subscribers.size===0&&(f=o,m=l,setTimeout(function(){f.subscribers.size===0&&de(m,f)},3e3))})}var Ud={stack:"dbcore",level:0,name:"Cache",create:function(o){var l=o.schema.name;return r(r({},o),{transaction:function(u,h,f){var m,w,v=o.transaction(u,h,f);return h==="readwrite"&&(w=(m=new AbortController).signal,f=function(S){return function(){if(m.abort(),h==="readwrite"){for(var T=new Set,O=0,_=u;O<_.length;O++){var P=_[O],E=sn["idb://".concat(l,"/").concat(P)];if(E){var R=o.table(P),D=E.optimisticOps.filter(function(oe){return oe.trans===v});if(v._explicit&&S&&v.mutatedParts)for(var A=0,M=Object.values(E.queries.query);A<M.length;A++)for(var j=0,z=(Z=M[A]).slice();j<z.length;j++)Cs((G=z[j]).obsSet,v.mutatedParts)&&(de(Z,G),G.subscribers.forEach(function(oe){return T.add(oe)}));else if(0<D.length){E.optimisticOps=E.optimisticOps.filter(function(oe){return oe.trans!==v});for(var F=0,V=Object.values(E.queries.query);F<V.length;F++)for(var Z,G,J,ee=0,Q=(Z=V[F]).slice();ee<Q.length;ee++)(G=Q[ee]).res!=null&&v.mutatedParts&&(S&&!G.dirty?(J=Object.isFrozen(G.res),J=Da(G.res,G.req,D,R,G,J),G.dirty?(de(Z,G),G.subscribers.forEach(function(oe){return T.add(oe)})):J!==G.res&&(G.res=J,G.promise=ne.resolve({result:J}))):(G.dirty&&de(Z,G),G.subscribers.forEach(function(oe){return T.add(oe)})))}}}T.forEach(function(oe){return oe()})}}},v.addEventListener("abort",f(!1),{signal:w}),v.addEventListener("error",f(!1),{signal:w}),v.addEventListener("complete",f(!0),{signal:w})),v},table:function(u){var h=o.table(u),f=h.schema.primaryKey;return r(r({},h),{mutate:function(m){var w=le.trans;if(f.outbound||w.db._options.cache==="disabled"||w.explicit||w.idbtrans.mode!=="readwrite")return h.mutate(m);var v=sn["idb://".concat(l,"/").concat(u)];return v?(w=h.mutate(m),m.type!=="add"&&m.type!=="put"||!(50<=m.values.length||Rs(f,m).some(function(S){return S==null}))?(v.optimisticOps.push(m),m.mutatedParts&&Xr(m.mutatedParts),w.then(function(S){0<S.numFailures&&(de(v.optimisticOps,m),(S=Oa(0,m,S))&&v.optimisticOps.push(S),m.mutatedParts&&Xr(m.mutatedParts))}),w.catch(function(){de(v.optimisticOps,m),m.mutatedParts&&Xr(m.mutatedParts)})):w.then(function(S){var T=Oa(0,r(r({},m),{values:m.values.map(function(O,_){var P;return S.failures[_]?O:(O=(P=f.keyPath)!==null&&P!==void 0&&P.includes(".")?ue(O):r({},O),H(O,f.keyPath,S.results[_]),O)})}),S);v.optimisticOps.push(T),queueMicrotask(function(){return m.mutatedParts&&Xr(m.mutatedParts)})}),w):h.mutate(m)},query:function(m){if(!Aa(le,h)||!Ra("query",m))return h.query(m);var w=((T=le.trans)===null||T===void 0?void 0:T.db._options.cache)==="immutable",_=le,v=_.requery,S=_.signal,T=(function(R,D,A,M){var j=sn["idb://".concat(R,"/").concat(D)];if(!j)return[];if(!(D=j.queries[A]))return[null,!1,j,null];var z=D[(M.query?M.query.index.name:null)||""];if(!z)return[null,!1,j,null];switch(A){case"query":var F=z.find(function(V){return V.req.limit===M.limit&&V.req.values===M.values&&Pa(V.req.query.range,M.query.range)});return F?[F,!0,j,z]:[z.find(function(V){return("limit"in V.req?V.req.limit:1/0)>=M.limit&&(!M.values||V.req.values)&&zd(V.req.query.range,M.query.range)}),!1,j,z];case"count":return F=z.find(function(V){return Pa(V.req.query.range,M.query.range)}),[F,!!F,j,z]}})(l,u,"query",m),O=T[0],_=T[1],P=T[2],E=T[3];return O&&_?O.obsSet=m.obsSet:(_=h.query(m).then(function(R){var D=R.result;if(O&&(O.res=D),w){for(var A=0,M=D.length;A<M;++A)Object.freeze(D[A]);Object.freeze(D)}else R.result=ue(D);return R}).catch(function(R){return E&&O&&de(E,O),Promise.reject(R)}),O={obsSet:m.obsSet,promise:_,subscribers:new Set,type:"query",req:m,dirty:!1},E?E.push(O):(E=[O],(P=P||(sn["idb://".concat(l,"/").concat(u)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[m.query.index.name||""]=E)),Nd(O,E,v,S),O.promise.then(function(R){return{result:Da(R.result,m,P?.optimisticOps,h,O,w)}})}})}})}};function Qr(o,l){return new Proxy(o,{get:function(u,h,f){return h==="db"?l:Reflect.get(u,h,f)}})}var Lt=(Oe.prototype.version=function(o){if(isNaN(o)||o<.1)throw new ce.Type("Given version is not a positive number");if(o=Math.round(10*o)/10,this.idbdb||this._state.isBeingOpened)throw new ce.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,o);var l=this._versions,u=l.filter(function(h){return h._cfg.version===o})[0];return u||(u=new this.Version(o),l.push(u),l.sort(Id),u.stores({}),this._state.autoSchema=!1,u)},Oe.prototype._whenReady=function(o){var l=this;return this.idbdb&&(this._state.openComplete||le.letThrough||this._vip)?o():new ne(function(u,h){if(l._state.openComplete)return h(new ce.DatabaseClosed(l._state.dbOpenError));if(!l._state.isBeingOpened){if(!l._state.autoOpen)return void h(new ce.DatabaseClosed);l.open().catch(xe)}l._state.dbReadyPromise.then(u,h)}).then(o)},Oe.prototype.use=function(o){var l=o.stack,u=o.create,h=o.level,f=o.name;return f&&this.unuse({stack:l,name:f}),o=this._middlewares[l]||(this._middlewares[l]=[]),o.push({stack:l,create:u,level:h??10,name:f}),o.sort(function(m,w){return m.level-w.level}),this},Oe.prototype.unuse=function(o){var l=o.stack,u=o.name,h=o.create;return l&&this._middlewares[l]&&(this._middlewares[l]=this._middlewares[l].filter(function(f){return h?f.create!==h:!!u&&f.name!==u})),this},Oe.prototype.open=function(){var o=this;return tn(zt,function(){return Dd(o)})},Oe.prototype._close=function(){var o=this._state,l=kn.indexOf(this);if(0<=l&&kn.splice(l,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}o.isBeingOpened||(o.dbReadyPromise=new ne(function(u){o.dbReadyResolve=u}),o.openCanceller=new ne(function(u,h){o.cancelOpen=h}))},Oe.prototype.close=function(u){var l=(u===void 0?{disableAutoOpen:!0}:u).disableAutoOpen,u=this._state;l?(u.isBeingOpened&&u.cancelOpen(new ce.DatabaseClosed),this._close(),u.autoOpen=!1,u.dbOpenError=new ce.DatabaseClosed):(this._close(),u.autoOpen=this._options.autoOpen||u.isBeingOpened,u.openComplete=!1,u.dbOpenError=null)},Oe.prototype.delete=function(o){var l=this;o===void 0&&(o={disableAutoOpen:!0});var u=0<arguments.length&&typeof arguments[0]!="object",h=this._state;return new ne(function(f,m){function w(){l.close(o);var v=l._deps.indexedDB.deleteDatabase(l.name);v.onsuccess=Se(function(){var S,T,O;S=l._deps,T=l.name,O=S.indexedDB,S=S.IDBKeyRange,$s(O)||T===jr||xs(O,S).delete(T).catch(xe),f()}),v.onerror=St(m),v.onblocked=l._fireOnBlocked}if(u)throw new ce.InvalidArgument("Invalid closeOptions argument to db.delete()");h.isBeingOpened?h.dbReadyPromise.then(w):w()})},Oe.prototype.backendDB=function(){return this.idbdb},Oe.prototype.isOpen=function(){return this.idbdb!==null},Oe.prototype.hasBeenClosed=function(){var o=this._state.dbOpenError;return o&&o.name==="DatabaseClosed"},Oe.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Oe.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Oe.prototype,"tables",{get:function(){var o=this;return a(this._allTables).map(function(l){return o._allTables[l]})},enumerable:!1,configurable:!0}),Oe.prototype.transaction=function(){var o=function(l,u,h){var f=arguments.length;if(f<2)throw new ce.InvalidArgument("Too few arguments");for(var m=new Array(f-1);--f;)m[f-1]=arguments[f];return h=m.pop(),[l,re(m),h]}.apply(this,arguments);return this._transaction.apply(this,o)},Oe.prototype._transaction=function(o,l,u){var h=this,f=le.trans;f&&f.db===this&&o.indexOf("!")===-1||(f=null);var m,w,v=o.indexOf("?")!==-1;o=o.replace("!","").replace("?","");try{if(w=l.map(function(T){if(T=T instanceof h.Table?T.name:T,typeof T!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return T}),o=="r"||o===cs)m=cs;else{if(o!="rw"&&o!=us)throw new ce.InvalidArgument("Invalid transaction mode: "+o);m=us}if(f){if(f.mode===cs&&m===us){if(!v)throw new ce.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");f=null}f&&w.forEach(function(T){if(f&&f.storeNames.indexOf(T)===-1){if(!v)throw new ce.SubTransaction("Table "+T+" not included in parent transaction.");f=null}}),v&&f&&!f.active&&(f=null)}}catch(T){return f?f._promise(null,function(O,_){_(T)}):Re(T)}var S=function T(O,_,P,E,R){return ne.resolve().then(function(){var D=le.transless||le,A=O._createTransaction(_,P,O._dbSchema,E);if(A.explicit=!0,D={trans:A,transless:D},E)A.idbtrans=E.idbtrans;else try{A.create(),A.idbtrans._explicit=!0,O._state.PR1398_maxLoop=3}catch(z){return z.name===Zi.InvalidState&&O.isOpen()&&0<--O._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),O.close({disableAutoOpen:!1}),O.open().then(function(){return T(O,_,P,null,R)})):Re(z)}var M,j=Ze(R);return j&&$n(),D=ne.follow(function(){var z;(M=R.call(A,A))&&(j?(z=Ut.bind(null,null),M.then(z,z)):typeof M.next=="function"&&typeof M.throw=="function"&&(M=Is(M)))},D),(M&&typeof M.then=="function"?ne.resolve(M).then(function(z){return A.active?z:Re(new ce.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):D.then(function(){return M})).then(function(z){return E&&A._resolve(),A._completion.then(function(){return z})}).catch(function(z){return A._reject(z),Re(z)})})}.bind(null,this,m,w,f,u);return f?f._promise(m,S,"lock"):le.trans?tn(le.transless,function(){return h._whenReady(S)}):this._whenReady(S)},Oe.prototype.table=function(o){if(!b(this._allTables,o))throw new ce.InvalidTable("Table ".concat(o," does not exist"));return this._allTables[o]},Oe);function Oe(o,l){var u=this;this._middlewares={},this.verno=0;var h=Oe.dependencies;this._options=l=r({addons:Oe.addons,autoOpen:!0,indexedDB:h.indexedDB,IDBKeyRange:h.IDBKeyRange,cache:"cloned"},l),this._deps={indexedDB:l.indexedDB,IDBKeyRange:l.IDBKeyRange},h=l.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var f,m,w,v,S,T={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:xe,dbReadyPromise:null,cancelOpen:xe,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:l.autoOpen};T.dbReadyPromise=new ne(function(_){T.dbReadyResolve=_}),T.openCanceller=new ne(function(_,P){T.cancelOpen=P}),this._state=T,this.name=o,this.on=Wn(this,"populate","blocked","versionchange","close",{ready:[es,xe]}),this.on.ready.subscribe=B(this.on.ready.subscribe,function(_){return function(P,E){Oe.vip(function(){var R,D=u._state;D.openComplete?(D.dbOpenError||ne.resolve().then(P),E&&_(P)):D.onReadyBeingFired?(D.onReadyBeingFired.push(P),E&&_(P)):(_(P),R=u,E||_(function A(){R.on.ready.unsubscribe(P),R.on.ready.unsubscribe(A)}))})}}),this.Collection=(f=this,Yn($d.prototype,function(M,A){this.db=f;var E=da,R=null;if(A)try{E=A()}catch(j){R=j}var D=M._ctx,A=D.table,M=A.hook.reading.fire;this._ctx={table:A,index:D.index,isPrimKey:!D.index||A.schema.primKey.keyPath&&D.index===A.schema.primKey.name,range:E,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:R,or:D.or,valueMapper:M!==Hn?M:null}})),this.Table=(m=this,Yn(ma.prototype,function(_,P,E){this.db=m,this._tx=E,this.name=_,this.schema=P,this.hook=m._allTables[_]?m._allTables[_].hook:Wn(null,{creating:[fd,xe],reading:[hd,Hn],updating:[md,xe],deleting:[pd,xe]})})),this.Transaction=(w=this,Yn(Cd.prototype,function(_,P,E,R,D){var A=this;this.db=w,this.mode=_,this.storeNames=P,this.schema=E,this.chromeTransactionDurability=R,this.idbtrans=null,this.on=Wn(this,"complete","error","abort"),this.parent=D||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new ne(function(M,j){A._resolve=M,A._reject=j}),this._completion.then(function(){A.active=!1,A.on.complete.fire()},function(M){var j=A.active;return A.active=!1,A.on.error.fire(M),A.parent?A.parent._reject(M):j&&A.idbtrans&&A.idbtrans.abort(),Re(M)})})),this.Version=(v=this,Yn(Od.prototype,function(_){this.db=v,this._cfg={version:_,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(S=this,Yn(va.prototype,function(_,P,E){if(this.db=S,this._ctx={table:_,index:P===":id"?null:P,or:E},this._cmp=this._ascending=be,this._descending=function(R,D){return be(D,R)},this._max=function(R,D){return 0<be(R,D)?R:D},this._min=function(R,D){return be(R,D)<0?R:D},this._IDBKeyRange=S._deps.IDBKeyRange,!this._IDBKeyRange)throw new ce.MissingAPI})),this.on("versionchange",function(_){0<_.newVersion?console.warn("Another connection wants to upgrade database '".concat(u.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(u.name,"'. Closing db now to resume the delete request.")),u.close({disableAutoOpen:!1})}),this.on("blocked",function(_){!_.newVersion||_.newVersion<_.oldVersion?console.warn("Dexie.delete('".concat(u.name,"') was blocked")):console.warn("Upgrade '".concat(u.name,"' blocked by other connection holding version ").concat(_.oldVersion/10))}),this._maxKey=Zn(l.IDBKeyRange),this._createTransaction=function(_,P,E,R){return new u.Transaction(_,P,E,u._options.chromeTransactionDurability,R)},this._fireOnBlocked=function(_){u.on("blocked").fire(_),kn.filter(function(P){return P.name===u.name&&P!==u&&!P._state.vcFired}).map(function(P){return P.on("versionchange").fire(_)})},this.use(Md),this.use(Ud),this.use(jd),this.use(Pd),this.use(Ld);var O=new Proxy(this,{get:function(_,P,E){if(P==="_vip")return!0;if(P==="table")return function(D){return Qr(u.table(D),O)};var R=Reflect.get(_,P,E);return R instanceof ma?Qr(R,O):P==="tables"?R.map(function(D){return Qr(D,O)}):P==="_createTransaction"?function(){return Qr(R.apply(this,arguments),O)}:R}});this.vip=O,h.forEach(function(_){return _(u)})}var Zr,mt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Fd=(Ds.prototype.subscribe=function(o,l,u){return this._subscribe(o&&typeof o!="function"?o:{next:o,error:l,complete:u})},Ds.prototype[mt]=function(){return this},Ds);function Ds(o){this._subscribe=o}try{Zr={indexedDB:s.indexedDB||s.mozIndexedDB||s.webkitIndexedDB||s.msIndexedDB,IDBKeyRange:s.IDBKeyRange||s.webkitIDBKeyRange}}catch{Zr={indexedDB:null,IDBKeyRange:null}}function La(o){var l,u=!1,h=new Fd(function(f){var m=Ze(o),w,v=!1,S={},T={},O={get closed(){return v},unsubscribe:function(){v||(v=!0,w&&w.abort(),_&&Ht.storagemutated.unsubscribe(E))}};f.start&&f.start(O);var _=!1,P=function(){return ls(R)},E=function(D){Yr(S,D),Cs(T,S)&&P()},R=function(){var D,A,M;!v&&Zr.indexedDB&&(S={},D={},w&&w.abort(),w=new AbortController,M=(function(j){var z=vn();try{m&&$n();var F=Nt(o,j);return F=m?F.finally(Ut):F}finally{z&&xn()}})(A={subscr:D,signal:w.signal,requery:P,querier:o,trans:null}),Promise.resolve(M).then(function(j){u=!0,l=j,v||A.signal.aborted||(S={},(function(z){for(var F in z)if(b(z,F))return;return 1})(T=D)||_||(Ht(Qn,E),_=!0),ls(function(){return!v&&f.next&&f.next(j)}))},function(j){u=!1,["DatabaseClosedError","AbortError"].includes(j?.name)||v||ls(function(){v||f.error&&f.error(j)})}))};return setTimeout(P,0),O});return h.hasValue=function(){return u},h.getValue=function(){return l},h}var on=Lt;function Ps(o){var l=qt;try{qt=!0,Ht.storagemutated.fire(o),Ts(o,!0)}finally{qt=l}}y(on,r(r({},Tr),{delete:function(o){return new on(o,{addons:[]}).delete()},exists:function(o){return new on(o,{addons:[]}).open().then(function(l){return l.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(o){try{return l=on.dependencies,u=l.indexedDB,l=l.IDBKeyRange,($s(u)?Promise.resolve(u.databases()).then(function(h){return h.map(function(f){return f.name}).filter(function(f){return f!==jr})}):xs(u,l).toCollection().primaryKeys()).then(o)}catch{return Re(new ce.MissingAPI)}var l,u},defineClass:function(){return function(o){d(this,o)}},ignoreTransaction:function(o){return le.trans?tn(le.transless,o):o()},vip:ks,async:function(o){return function(){try{var l=Is(o.apply(this,arguments));return l&&typeof l.then=="function"?l:ne.resolve(l)}catch(u){return Re(u)}}},spawn:function(o,l,u){try{var h=Is(o.apply(u,l||[]));return h&&typeof h.then=="function"?h:ne.resolve(h)}catch(f){return Re(f)}},currentTransaction:{get:function(){return le.trans||null}},waitFor:function(o,l){return l=ne.resolve(typeof o=="function"?on.ignoreTransaction(o):o).timeout(l||6e4),le.trans?le.trans.waitFor(l):l},Promise:ne,debug:{get:function(){return Ct},set:function(o){ia(o)}},derive:k,extend:d,props:y,override:B,Events:Wn,on:Ht,liveQuery:La,extendObservabilitySet:Yr,getByKeyPath:W,setByKeyPath:H,delByKeyPath:function(o,l){typeof l=="string"?H(o,l,void 0):"length"in l&&[].map.call(l,function(u){H(o,u,void 0)})},shallowClone:X,deepClone:ue,getObjectDiff:As,cmp:be,asap:te,minKey:-1/0,addons:[],connections:kn,errnames:Zi,dependencies:Zr,cache:sn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(o){return parseInt(o)}).reduce(function(o,l,u){return o+l/Math.pow(10,2*u)})})),on.maxKey=Zn(on.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Ht(Qn,function(o){qt||(o=new CustomEvent(ps,{detail:o}),qt=!0,dispatchEvent(o),qt=!1)}),addEventListener(ps,function(o){o=o.detail,qt||Ps(o)}));var Sn,qt=!1,Ma=function(){};return typeof BroadcastChannel<"u"&&((Ma=function(){(Sn=new BroadcastChannel(ps)).onmessage=function(o){return o.data&&Ps(o.data)}})(),typeof Sn.unref=="function"&&Sn.unref(),Ht(Qn,function(o){qt||Sn.postMessage(o)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(o){if(!Lt.disableBfCache&&o.persisted){Ct&&console.debug("Dexie: handling persisted pagehide"),Sn?.close();for(var l=0,u=kn;l<u.length;l++)u[l].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(o){!Lt.disableBfCache&&o.persisted&&(Ct&&console.debug("Dexie: handling persisted pageshow"),Ma(),Ps({all:new He(-1/0,[[]])}))})),ne.rejectionMapper=function(o,l){return!o||o instanceof Be||o instanceof TypeError||o instanceof SyntaxError||!o.name||!ra[o.name]?o:(l=new ra[o.name](l||o.message,o),"stack"in o&&x(l,"stack",{get:function(){return this.inner.stack}}),l)},ia(Ct),r(Lt,Object.freeze({__proto__:null,Dexie:Lt,liveQuery:La,Entity:ha,cmp:be,PropModSymbol:Pt,PropModification:Xn,replacePrefix:function(o,l){return new Xn({replacePrefix:[o,l]})},add:function(o){return new Xn({add:o})},remove:function(o){return new Xn({remove:o})},default:Lt,RangeSet:He,mergeRanges:nr,rangesOverlap:Ca}),{default:Lt}),Lt})})(di)),di.exports}var xh=vh();const Zs=wh(xh),Xa=Symbol.for("Dexie"),wi=globalThis[Xa]||(globalThis[Xa]=Zs);if(Zs.semVer!==wi.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Zs.semVer} and ${wi.semVer}`);const{liveQuery:_o,mergeRanges:_v,rangesOverlap:Cv,RangeSet:Sv,cmp:Ev,Entity:Tv,PropModSymbol:Iv,PropModification:Av,replacePrefix:Rv,add:Ov,remove:Dv}=wi,$h="easydb";function dn(e,t){return`${e}::${t}`}let ti=null;function xc(){if(ti)return ti;const e=new wi($h);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.version(3).stores({settings:"key, workspaceId, name"}).upgrade(async t=>{const n=t.table("settings"),i=(await n.toArray()).filter(c=>c.workspaceId==null);if(i.length===0)return;const s=(await t.table("workspaces").toArray()).map(c=>c.id),a=s.length>0?s:["default"];for(const c of i){for(const d of a)await n.put({key:dn(d,c.key),workspaceId:d,name:c.key,value:c.value});await n.delete(c.key)}}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>kh()),ti={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},ti}function kh(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function ir(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const n=Object.entries(t);return e.filter(r=>Co(r,n)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,n){if(await e.update(t,n)===0)throw new Error(`patch: no doc with id=${t}`);const i=await e.get(t);if(!i)throw new Error(`patch: doc id=${t} vanished after update`);return i},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const r=_o(()=>e.toArray()).subscribe({next:i=>t(i)});return()=>r.unsubscribe()}}}function _h(e,t){return{async find(n){const r=e.where("tableId").equals(t);if(!n||Object.keys(n).length===0)return r.toArray();const i=Object.entries(n);return r.filter(s=>Co(s,i)).toArray()},async findOne(n){const r=await e.get(n);return r&&r.tableId===t?r:null},async insert(n){const r={...n,tableId:t};return await e.add(r),r},async bulkInsert(n){if(n.length===0)return[];const r=n.map(i=>({...i,tableId:t}));return await e.bulkAdd(r),r},async upsert(n){const r={...n,tableId:t};return await e.put(r),r},async patch(n,r){if(await e.update(n,r)===0)throw new Error(`row patch: no row ${n}`);const s=await e.get(n);if(!s)throw new Error(`row patch: row ${n} vanished after update`);return s},async remove(n){await e.delete(n)},async bulkRemove(n){n.length!==0&&await e.bulkDelete(n)},subscribe(n){const i=_o(()=>e.where("tableId").equals(t).toArray()).subscribe({next:s=>n(s)});return()=>i.unsubscribe()}}}function Ch(e,t){const n=i=>({...i,workspaceId:t(),key:dn(t(),i.name),name:i.name,value:i.value}),r=()=>e.where("workspaceId").equals(t());return{async find(i){const s=await r().toArray();if(!i||Object.keys(i).length===0)return s;const a=Object.entries(i);return s.filter(c=>Co(c,a))},async findOne(i){return await e.get(dn(t(),i))??null},async insert(i){const s=n(i);return await e.add(s),s},async bulkInsert(i){if(i.length===0)return[];const s=i.map(a=>n(a));return await e.bulkAdd(s),s},async upsert(i){const s=n(i);return await e.put(s),s},async patch(i,s){const a=dn(t(),i);if(await e.update(a,s)===0)throw new Error(`setting patch: no setting ${i}`);const d=await e.get(a);if(!d)throw new Error(`setting patch: ${i} vanished after update`);return d},async remove(i){await e.delete(dn(t(),i))},async bulkRemove(i){i.length!==0&&await e.bulkDelete(i.map(s=>dn(t(),s)))},subscribe(i){const a=_o(()=>r().toArray()).subscribe({next:c=>i(c)});return()=>a.unsubscribe()}}}function Co(e,t){for(const[n,r]of t)if(e[n]!==r)return!1;return!0}function Sh(e,t){return{workspaces:ir(e.workspaces),tables:ir(e.tables),settings:Ch(e.settings,t),plugins:ir(e.plugins),viewTemplates:ir(e.viewTemplates),viewInstances:ir(e.viewInstances),rows:n=>_h(e.rows,n)}}function Eh(e){const{base:t,providers:n,tableById:r,ctx:i}=e,s=new Map;return{...t,rows(a){const c=r(a),d=c?.source;if(d){const p=n.get(d.type);if(p){const g=JSON.stringify(d),b=s.get(a);if(b&&b.key===g)return b.coll;const y=p.create(c,i);return s.set(a,{key:g,coll:y}),y}}return s.delete(a),t.rows(a)}}}function Th(){const e=new Map;return{on(t,n){let r=e.get(t);return r||(r=new Set,e.set(t,r)),r.add(n),()=>{r.delete(n)}},emit(t,n){const r=e.get(t);if(r)for(const i of r)try{i(n)}catch(s){console.error(`[event:${String(t)}] listener threw`,s)}}}}const ut=$e`
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
`;function dt(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const n=t.querySelector("form");n&&(e.preventDefault(),n.requestSubmit())}const Ja=new WeakSet;function ht(e,t){if(Ja.has(t))return;Ja.add(t);let n=0,r=0,i=0,s=0,a=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",d=>{if(d.target.closest("button, input, textarea, select, a, label"))return;a=!0,n=d.clientX,r=d.clientY;const g=e.getBoundingClientRect();i=g.left,s=g.top,t.setPointerCapture(d.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",d=>{if(!a)return;const p=d.clientX-n,g=d.clientY-r,b=-e.offsetWidth+80,y=window.innerWidth-80,C=0,x=window.innerHeight-40,k=Math.max(b,Math.min(y,i+p)),I=Math.max(C,Math.min(x,s+g));e.style.position="fixed",e.style.left=`${k}px`,e.style.top=`${I}px`,e.style.margin="0"});const c=d=>{if(a){a=!1;try{t.releasePointerCapture(d.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c)}var Ih=Object.defineProperty,Ah=Object.getOwnPropertyDescriptor,$c=(e,t,n,r)=>{for(var i=r>1?void 0:r?Ah(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Ih(t,n,i),i};let bt=class extends ve{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitChoice=e=>{if(e.preventDefault(),this.current?.kind!=="choice")return;const t=this.current.options[0];t!==void 0&&this.closeAndResolve(t)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),bt.instance=this}disconnectedCallback(){super.disconnectedCallback(),bt.instance===this&&(bt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&ht(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(n=>{this.current={kind:"alert",title:t,message:e,resolve:n}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",n="Input"){return this.enqueue(r=>{this.current={kind:"prompt",title:n,message:e,value:t,resolve:r}})}choice(e,t,n="Choose"){return this.enqueue(r=>{this.current={kind:"choice",title:n,message:e,options:t,resolve:r}})}enqueue(e){return new Promise(t=>{const n=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(n):n()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const n=this.queue.shift();n&&n()}))}render(){const e=this.current;return $`
      <dialog @cancel=${this.onCancel} @keydown=${dt}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):se}
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
              ${e.message?$`<p class="message">${e.message}</p>`:se}
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
        `}}};bt.instance=null;bt.styles=[ut,$e`
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
    `];$c([N()],bt.prototype,"current",2);bt=$c([Ce("host-dialogs")],bt);const ft=$e`
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
`;var Rh=Object.defineProperty,Oh=Object.getOwnPropertyDescriptor,kc=(e,t,n,r)=>{for(var i=r>1?void 0:r?Oh(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Rh(t,n,i),i};let Mt=class extends ve{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),Mt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Mt.instance===this&&(Mt.instance=null)}show(e,t){const n={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,n];const r=t?.durationMs??(n.kind==="error"||n.kind==="warning"?7e3:4e3);n.timer=window.setTimeout(()=>this.dismiss(n.id),r)}dismiss(e){const t=this.toasts.find(n=>n.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(n=>n.id!==e)}render(){return $`
      ${this.toasts.map(e=>$`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${Ph(e.kind)}</span>
            <span class="body">
              ${e.title?$`<strong>${e.title}</strong>`:""}${Dh(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};Mt.instance=null;Mt.styles=[ft,$e`
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
    `];kc([N()],Mt.prototype,"toasts",2);Mt=kc([Ce("toast-host")],Mt);function Dh(e){const t=/(https?:\/\/[^\s)]+)/g,n=[];let r=0,i;for(;(i=t.exec(e))!==null;)i.index>r&&n.push(e.slice(r,i.index)),n.push({url:i[0]}),r=i.index+i[0].length;return r<e.length&&n.push(e.slice(r)),n.length===0?e:n.map(s=>typeof s=="string"?s:$`<a href=${s.url} target="_blank" rel="noopener noreferrer">${s.url}</a>`)}function Ph(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function Lh(){return{headerButtons:[],footerButtons:[],tableButtons:[],columnEditorActions:[],importers:[],connectors:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map,settings:new Map,commands:[]}}function Tt(e,t){return e.push(t),()=>{const n=e.indexOf(t);n>=0&&e.splice(n,1)}}function js(e,t,n){return e.set(t,n),()=>{e.get(t)===n&&e.delete(t)}}function Mh(e){return{registerHeaderButton:t=>Tt(e.headerButtons,t),registerFooterButton:t=>Tt(e.footerButtons,t),registerTableButton:t=>Tt(e.tableButtons,t),registerColumnEditorAction:t=>Tt(e.columnEditorActions,t),registerImporter:t=>Tt(e.importers,t),registerConnector:t=>Tt(e.connectors,t),registerExporter:t=>Tt(e.exporters,t),registerUrlSource:t=>Tt(e.urlSources,t),registerDropHandler:t=>Tt(e.dropHandlers,t),registerCellRenderer:(t,n)=>js(e.cellRenderers,t,n),registerRowRenderer:(t,n)=>js(e.rowRenderers,t,n),registerTableRenderer:(t,n)=>js(e.tableRenderers,t,n),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},openSettings:()=>{document.dispatchEvent(new CustomEvent("easydb:open-settings"))},registerCommand:t=>Tt(e.commands,t),openCommandPalette:()=>{document.dispatchEvent(new CustomEvent("easydb:open-command-palette"))},registerSettings:(t,n,r)=>(e.settings.set(t,{name:n,fields:r}),()=>{e.settings.get(t)?.name===n&&e.settings.delete(t)}),dialogs:jh}}const jh={async alert(e,t){const n=bt.instance;if(n)return n.alert(e,t);window.alert(e)},async confirm(e,t){const n=bt.instance;return n?n.confirm(e,t):window.confirm(e)},async prompt(e,t,n){const r=bt.instance;return r?r.prompt(e,t,n):window.prompt(e,t)??null},async choice(e,t,n){const r=bt.instance;if(r)return r.choice(e,t,n);const i=window.prompt(`${e}

Options: ${t.join(", ")}`);return i&&t.includes(i)?i:null},toast(e,t){const n=Mt.instance;n?n.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}},So="/easydbaccess/settings.json",_c="/easydbaccess/secrets.txt";function xr(e){try{return globalThis.localStorage??null}catch{return null}}function Ri(e){const t=xr();if(!t)return{};const n=t.getItem(So);if(!n)return{};try{const r=JSON.parse(n);return r&&typeof r=="object"?r:{}}catch{return{}}}function Eo(e,t){return Ri()[e]}function zh(e,t,n){const r=xr();if(!r)return;const i=Ri();i[e]=t,r.setItem(So,JSON.stringify(i))}function Nh(e,t){const n=xr();if(!n)return;const r=Ri();e in r&&(delete r[e],n.setItem(So,JSON.stringify(r)))}function eo(e,t){return e in Ri()}function Oi(e){return xr()?.getItem(_c)??""}function Cc(e,t){xr()?.setItem(_c,e)}function pr(e){const t={};for(const n of e.split(/\r?\n/)){const r=n.trim();if(!r||r.startsWith("#"))continue;const i=r.indexOf(":");if(i<0)continue;const s=r.slice(0,i).trim(),a=r.slice(i+1).trim();s&&(t[s]=a)}return t}function Sc(e,t){return e.replace(/\$\{secret:([^}]+)\}/g,(n,r)=>{const i=t[r.trim()];return i===void 0?n:i})}function Uh(e){const t=Mh(e.registries),n=e.registries.rowSources,r=a=>(n.set(a.type,a),()=>{n.get(a.type)===a&&n.delete(a.type)}),i=Bh(e.store,e.registries),s={open(a){return console.warn("[host] windows.open is stubbed until Phase 5",a.id),{id:a.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:s,registerRowSource:r,settings:i,backend:{fetch:async(a,c)=>{const d=await Fh(e.store),p=c?.body instanceof ArrayBuffer;if(!d||p)return globalThis.fetch(a,c);const g={url:a};return c?.method&&(g.method=c.method),c?.headers&&(g.headers=c.headers),typeof c?.body=="string"&&(g.body=c.body),globalThis.fetch(`${d}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)})},async saveFile(a,c,d){const p=typeof c=="string"?new Blob([c],{type:d??"application/octet-stream"}):c,g=URL.createObjectURL(p),b=document.createElement("a");b.href=g,b.download=a,b.rel="noopener",document.body.appendChild(b),b.click(),b.remove(),setTimeout(()=>URL.revokeObjectURL(g),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function Fh(e){const t="server-sync:url";let n=eo(t)?Eo(t):void 0;return n===void 0&&(n=(await e.settings.findOne(t))?.value),typeof n!="string"||n.length===0?null:Sc(n,pr(Oi())).replace(/\/+$/,"")}function Bh(e,t){const n=(s,a)=>`${s}:${a}`,r=(s,a)=>t.settings.get(s)?.fields.find(c=>c.key===a),i=s=>typeof s=="string"?Sc(s,pr(Oi())):s;return{async get(s,a){const c=n(s,a);let d;if(eo(c))d=Eo(c);else{const p=await e.settings.findOne(c);d=p?p.value:r(s,a)?.default}return i(d)},async set(s,a,c,d){const p=n(s,a);(d??r(s,a)?.scope??"workspace")==="user"?(zh(p,c),await e.settings.remove(p).catch(()=>{})):(await e.settings.upsert({name:p,value:c}),Nh(p))},async placement(s,a){const c=n(s,a);return eo(c)?"user":await e.settings.findOne(c)?"workspace":null}}}function Qa(e,t){return e.has(t)?e.get(t)!=="0":!1}function Hh(){if(typeof location>"u")return"off";const e=new URLSearchParams(location.search);return Qa(e,"safemode")?"all-optional":Qa(e,"safemode1")?"url-plugins":"off"}const gt=Hh();function To(e){let t;try{t=new URL(e)}catch{return e}const n=t.hostname.toLowerCase();if(n==="github.com"||n==="www.github.com"){const r=t.pathname.split("/").filter(Boolean);if(r.length>=5&&(r[2]==="blob"||r[2]==="raw")){const i=r[0],s=r[1];let a=r.slice(3);return a.length>=3&&a[0]==="refs"&&(a[1]==="heads"||a[1]==="tags")&&(a=a.slice(2)),`https://raw.githubusercontent.com/${[i,s,...a].join("/")}`}}return e}function Ec(e){if(e.length>1024)return!1;const t=e.split(`
`);return t[0]?.startsWith("version https://git-lfs.github.com/spec/v1")===!0&&t.some(n=>n.startsWith("oid "))&&t.some(n=>n.startsWith("size "))}function Tc(e){const t=To(e);let n;try{n=new URL(t)}catch{return null}if(n.hostname.toLowerCase()!=="raw.githubusercontent.com")return null;const r=n.pathname.replace(/^\/+/,"");return r.split("/").filter(Boolean).length<4?null:`https://media.githubusercontent.com/media/${r}`}async function Ic(e,t){const n=Number(e.headers?.get?.("content-length")),r=e.body?.getReader?.();if(r&&Number.isFinite(n)&&n>0){const i=[];let s=0;for(;;){const{done:d,value:p}=await r.read();if(d)break;p&&(i.push(p),s+=p.length,t?.(Math.min(1,s/n)))}const a=new Uint8Array(s);let c=0;for(const d of i)a.set(d,c),c+=d.length;return new TextDecoder().decode(a)}return await e.text()}const qh=50*1024*1024;function Za(e){try{return new URL(e).host}catch{return e}}function Ln(e){try{const n=new URL(e).pathname.split("/").filter(Boolean).pop();return n&&n.length>0?n:"sample.db.json"}catch{return"sample.db.json"}}async function Kh(e){try{return(await e.text()).replace(/\s+/g," ").trim().slice(0,300)}catch{return""}}function el(e){const t=e/1048576;return`${Number.isInteger(t)?t:t.toFixed(1)} MB`}async function Vh(e,t,n={}){const r=To(t),i=n.slowMs??2e3;let s=setTimeout(()=>{s=void 0,n.onSlow?.()},i);const a=()=>{s!==void 0&&(clearTimeout(s),s=void 0)},c=n.maxBytes===null?null:n.maxBytes??qh,d=async p=>{let g;try{g=await e.backend.fetch(p)}catch(y){throw new Error(`Could not reach ${Za(p)} — no response. The server may be down, blocking cross-origin (CORS) requests, or the transfer may have failed (e.g. a very large file). [${y.message}]`)}if(!g.ok){const y=await Kh(g);throw new Error(`HTTP ${g.status} ${g.statusText||""}`.trim()+(y?` — ${y}`:""))}const b=Number(g.headers.get("content-length"));if(c!==null&&Number.isFinite(b)&&b>c)throw g.body?.cancel().catch(()=>{}),new Error(`Response is ${el(b)}, over the ${el(c)} browser import limit. Set a row limit, import it as a Reference instead of a Copy, take a smaller extract, or connect to a server/Datasette for large datasets.`);try{return await Ic(g,n.onProgress)}catch(y){throw new Error(`Failed reading the response body from ${Za(p)}: ${y.message}`)}};try{const p=await d(r);if(Ec(p)){const g=Tc(r);if(g)return await d(g)}return p}finally{a()}}async function Di(e,t,n,r={}){const{TopProgress:i}=await at(async()=>{const{TopProgress:a}=await import("./top-progress-CiAVYzRN.js");return{TopProgress:a}},[]),s={handle:null};try{return await Vh(e,t,{onSlow:()=>{s.handle=i.begin(n)},onProgress:a=>s.handle?.fraction(a),...r.maxBytes!==void 0?{maxBytes:r.maxBytes}:{}})}finally{s.handle?.done()}}function Ee(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function Ve(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function to(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}const Gh={id:"csv-import",name:"CSV Import",type:"importer",version:"0.1.0",description:"Drag-and-drop CSV or TSV files to create typed tables.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-import.ts"};function Wh(e){e.ui.registerImporter(Jh),at(()=>import("./csv-import-options-2mqtjUVV.js"),[]),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const r=uf(t).filter(df);if(r.length===0)return!1;t.preventDefault();const i=r.length===1?`"${r[0].name}"`:`${r.length} files`,s=await e.ui.dialogs.choice(`Import ${i} straight away, or review the columns first (rename, hide, fix duplicate names)?`,[Xh,tl],"Import CSV");if(!s)return!0;const a=s===tl?async c=>{const{editColumnNames:d}=await at(async()=>{const{editColumnNames:p}=await Promise.resolve().then(()=>Vb);return{editColumnNames:p}},void 0);return d(c)}:void 0;for(const c of r)await Qh(e,c,a);return!0})}function no(e){return e.kind==="file"&&e.file?e.file.name:e.kind==="url"&&e.url?Ln(e.url):"pasted"}function Yh(e){return Ro(no(e))||"imported"}const Xh="Import directly",tl="Edit columns first",Jh={id:"csv",label:"CSV / TSV",icon:"table_view",order:10,accept:[".csv",".tsv",".tab","text/csv","text/tab-separated-values"],panel:"csv-import-options",samples:[{label:"Air quality — 2016 readings (CSV)",url:"https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv"}],supports:{url:!0,file:!0,text:!0,reference:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??e.text??"";return/\.(csv|tsv|tab)$/i.test(t)?.95:e.file?.type==="text/csv"?.9:e.kind==="text"?.2:0},async list(e,t){return[{name:Yh(t),rowCount:null,handle:t}]},async*read(e,t){const n=t.handle;let r;n.kind==="file"&&n.file?r=e.maxRows!=null?await Oc(n.file,e.maxRows):await n.file.text():n.kind==="url"&&n.url?r=await e.fetchText(n.url,`Reading ${no(n)}…`):r=n.text??"";const s=(typeof e.panel.separator=="string"?e.panel.separator:void 0)??Oo(no(n)),a={...e.maxRows!=null?{maxRows:e.maxRows}:{},...s?{separator:s}:{}},c=e.targetColumns;if(c&&c.length>0){yield{rows:Io(r,a).rows.map(b=>{const y={};for(let C=0;C<c.length;C++){const x=c[C];y[x.field]=Ao(b[C]??"",x.type)}return y})};return}const d=Mn(r,a);yield{columns:d.columns,rows:d.rows}},reference(e,t){const n=t.handle;if(n.kind!=="url"||!n.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");return{type:"url",config:{url:n.url,format:"csv"}}}};async function Qh(e,t,n){await Ac(e,await t.text(),t.name,n?{editColumns:n}:void 0)}async function Ac(e,t,n,r={}){const i=e.workspaceId();if(!i)throw new Error("csv-import: no active workspace");const s=Ro(n||"imported")||"imported",a=r.separator??Oo(n),c=(await e.store.tables.find()).find(y=>y.workspaceId===i&&y.name===s);let d,p;if(c){const y=await e.ui.dialogs.choice(`A table named "${s}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!y)return;y==="Append rows"?(p="append",d=c.id):y==="Overwrite rows"?(p="overwrite",d=c.id):(p="new",d=Ee())}else p="new",d=Ee();e.events.emit("import:before",{source:"csv",tableId:d});let g;if(p==="new"){const y=Mn(t,{maxRows:r.maxRows,separator:a});let C=y.columns,x=y.rows;if(r.editColumns){const I=await r.editColumns(C);if(I===null)return;x=hf(x,C,I),C=I}r.maxRows!=null&&(x=x.slice(0,r.maxRows));const k=c?`${s} (${Date.now().toString(36)})`:s;await e.store.tables.insert({id:d,workspaceId:i,name:k,code:to(k),columns:C,view:"table",...r.origin?{origin:r.origin}:{},updatedAt:Date.now()}),g=x.map(I=>({id:Ee(),tableId:d,data:I,updatedAt:Date.now()}))}else{const y=c.columns,C=Io(t,{maxRows:r.maxRows,separator:a});if(g=(r.maxRows!=null?C.rows.slice(0,r.maxRows):C.rows).map(k=>{const I={};for(let L=0;L<y.length;L++){const U=y[L];I[U.field]=Ao(k[L]??"",U.type)}return{id:Ee(),tableId:d,data:I,updatedAt:Date.now()}}),p==="overwrite"){const k=e.store.rows(d),I=await k.find();await k.bulkRemove(I.map(L=>L.id))}}await e.store.rows(d).bulkInsert(g),e.events.emit("import:after",{source:"csv",tableId:d,rowCount:g.length})}function Io(e,t={}){const n=e.replace(/﻿/,""),r=t.separator??Dc(n),i=Pc(n,r,Rc(t.maxRows));if(i.length===0)return{header:[],rows:[]};const s=i[0],a=i.slice(1).filter(c=>!(c.length===1&&c[0]===""));return{header:s,rows:a}}function Rc(e){return e!=null?e+1:void 0}async function Oc(e,t){const r=new TextDecoder,i=t+1;let s="",a=0,c=!1,d=0;for(;d<e.size;){const p=new Uint8Array(await e.slice(d,d+1048576).arrayBuffer());d+=1048576;const g=r.decode(p,{stream:!0});for(let b=0;b<g.length;b++){const y=g[b];if(y==='"')c=!c;else if(y===`
`&&!c&&(a+=1,a>=i))return s+g.slice(0,b+1)}s+=g}return s}function Mn(e,t={}){const n=e.replace(/﻿/,""),r=t.separator??Dc(n),i=Pc(n,r,Rc(t.maxRows));if(i.length===0)return{columns:[],rows:[]};const s=i[0],a=i.slice(1).filter(C=>!(C.length===1&&C[0]==="")),c=s.map((C,x)=>tf(C,x)),d=jc(c.map(C=>C.field)),p=a.map(C=>{const x={};for(let k=0;k<d.length;k++)x[d[k]]=C[k]??"";return x}),g=c.map((C,x)=>C.type?C.type:nf(p.map(k=>k[d[x]]??"").filter(k=>k.length>0))),b=c.map((C,x)=>{const k=g[x]??"string",I={field:d[x],label:C.label,type:k},L=ef(k),U=C.renderer??L;return U&&(I.renderer=U),C.default!==void 0&&(I.default=C.default),C.max!=null&&(I.max=C.max),C.unique&&(I.unique=!0),C.notnull&&(I.notnull=!0),C.hidden&&(I.hidden=!0),I}),y=p.map(C=>{const x={};for(let k=0;k<d.length;k++){const I=d[k],L=g[k]??"string";x[I]=Ao(C[I]??"",L)}return x});return{columns:b,rows:y}}const Zh=new Set(["string","number","boolean","date","datetime"]),nl={color:"color",image:"image"};function ef(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function tf(e,t){const n=e.trim();if(!n.includes(":"))return{field:to(n||`col_${t+1}`),label:n||`Column ${t+1}`};const r=n.split(":"),i=to(r[0]||`col_${t+1}`),s=(r[1]??r[0]??"").trim()||i,a={field:i,label:s},c=(r[2]??"").trim();c&&(Zh.has(c)?a.type=c:nl[c]&&(a.type="string",a.renderer=nl[c]));const d=(r[3]??"").trim();d&&(a.default=d);const p=(r[4]??"").trim();if(p){const b=Number(p);Number.isFinite(b)&&b>0&&(a.max=b)}const g=(r[5]??"").toLowerCase();return g.includes("u")&&(a.unique=!0),g.includes("n")&&(a.notnull=!0),g.includes("h")&&(a.hidden=!0),a}function Dc(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),n={",":0,";":0,"	":0};for(const s of t)s in n&&(n[s]+=1);let r=",",i=-1;for(const s of[",",";","	"])(n[s]??0)>i&&(r=s,i=n[s]??0);return r}function Pc(e,t,n){const r=[];let i=[],s="",a=!1;for(let c=0;c<e.length;c++){const d=e[c];if(a)d==='"'?e[c+1]==='"'?(s+='"',c++):a=!1:s+=d;else if(d==='"')a=!0;else if(d===t)i.push(s),s="";else if(d===`
`||d==="\r"){if(d==="\r"&&e[c+1]===`
`&&c++,i.push(s),r.push(i),i=[],s="",n!=null&&r.length>=n)return r}else s+=d}return(s.length>0||i.length>0)&&(i.push(s),r.push(i)),r}function nf(e){return e.length===0?"string":e.every(sf)?"boolean":e.every(of)?"number":e.every(lf)?"datetime":e.every(af)?"date":"string"}const rf=/^(true|false|yes|no|0|1)$/i;function sf(e){return rf.test(e.trim())}function of(e){const t=e.trim();if(t==="")return!1;const n=Number(t);return Number.isFinite(n)}function af(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function lf(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function Ao(e,t){const n=e.trim();switch(t){case"number":{if(n==="")return null;const r=Number(n);return Number.isFinite(r)?r:n}case"boolean":return n===""?null:/^(true|yes|1)$/i.test(n);case"date":return Lc(n);case"datetime":return cf(n);default:return e}}function Lc(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){const r=parseInt(t[1],10),i=parseInt(t[2],10),s=t[3];let a=parseInt(s,10);s.length===2&&(a+=2e3);let c,d;return r>12?(c=r,d=i):i>12?(d=r,c=i):(c=r,d=i),`${a.toString().padStart(4,"0")}-${d.toString().padStart(2,"0")}-${c.toString().padStart(2,"0")}`}const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toISOString().slice(0,10)}function cf(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),n=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(n)return`${n[1]}T${n[2].padStart(5,"0")}`;const r=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(r)return`${Lc(`${r[1]}/${r[2]}/${r[3]}`)}T${r[4].padStart(5,"0")}`;const i=new Date(e);if(!Number.isNaN(i.getTime())){const s=i.toISOString();return`${s.slice(0,10)}T${s.slice(11,16)}`}return e}function uf(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const n=[];for(const r of Array.from(t.items))if(r.kind==="file"){const i=r.getAsFile();i&&n.push(i)}return n}return[]}const Mc=/\.(csv|tsv|tab)$/i;function Ro(e){return e.replace(Mc,"")}function Oo(e){return/\.(tsv|tab)$/i.test(e)?"	":void 0}function df(e){return!!(Mc.test(e.name)||e.type==="text/csv"||e.type==="application/csv"||e.type==="text/tab-separated-values")}function jc(e){const t=new Map,n=new Set,r=[];for(const i of e){let s=i,a=t.get(i)??0;for(;n.has(s);)a+=1,s=`${i}_${a+1}`;t.set(i,a),n.add(s),r.push(s)}return r}function hf(e,t,n){return e.map(r=>{const i={};for(let s=0;s<t.length;s++)i[n[s].field]=r[t[s].field];return i})}const ff=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:jc,importCsvText:Ac,init:Wh,meta:Gh,parseCsv:Mn,parseCsvRaw:Io,readCsvHead:Oc,separatorForName:Oo,stripDelimitedExt:Ro},Symbol.toStringTag,{value:"Module"})),pf={id:"csv-export",name:"CSV Export",type:"exporter",version:"0.1.0",description:"CSV serializer for the per-table export menu (see dump-export.ts) and the importer/exporter registry.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-export.ts"},mf={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return Do(e,t)}};function gf(e){e.ui.registerExporter(mf)}function Do(e,t){const n=e.columns.map(s=>s.field),r=e.columns.map(s=>rl(s.label??s.field)),i=t.map(s=>n.map(a=>rl(bf(s.data[a]))).join(","));return[r.join(","),...i].join(`\r
`)}function bf(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function rl(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const wf=Object.freeze(Object.defineProperty({__proto__:null,init:gf,meta:pf,serializeCsv:Do},Symbol.toStringTag,{value:"Module"}));var yf=Object.defineProperty,vf=Object.getOwnPropertyDescriptor,jn=(e,t,n,r)=>{for(var i=r>1?void 0:r?vf(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&yf(t,n,i),i};function yi(e,t={}){return(rt.instance??xf()).open(e,t)}function xf(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function $f(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let rt=class extends ve{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((n,r)=>n?r:-1).filter(n=>n>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),rt.instance=this}disconnectedCallback(){super.disconnectedCallback(),rt.instance===this&&(rt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&ht(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(n=>!n.hidden),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return $`
      <dialog @cancel=${this.onCancel} @keydown=${dt}>
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
                      <span class="size">${$f(t.size)}</span>
                      ${t.detail?$`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};rt.instance=null;rt.styles=[ut,$e`
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
    `];jn([N()],rt.prototype,"items",2);jn([N()],rt.prototype,"selected",2);jn([N()],rt.prototype,"heading",2);jn([N()],rt.prototype,"message",2);jn([N()],rt.prototype,"confirmLabel",2);rt=jn([Ce("table-select-dialog")],rt);function Po(e,t){return e.every((n,r)=>n.field===t[r]?.field)?null:n=>{const r={};for(let i=0;i<e.length;i++)r[t[i].field]=n[e[i].field];return r}}function il(e,t){if(t.length===0)return null;const n=new Set(t.map(i=>i.from)),r={};for(const i of Object.keys(e))n.has(i)||(r[i]=e[i]);for(const{from:i,to:s}of t)Object.prototype.hasOwnProperty.call(e,i)&&(r[s]=e[i]);return r}function Pi(e,t,n=[]){const r=new Set(e.map(c=>c.field)),i=new Set(n),s=[...e],a=[];for(const c of t)r.has(c.field)||i.has(c.field)||(s.push(c),a.push(c.field),r.add(c.field));return{columns:s,newFields:a}}function zc(e,t){const n=new Set([...e].map(i=>i.toLowerCase())),r=t.trim()||"imported";if(!n.has(r.toLowerCase()))return r;for(let i=2;;i++){const s=`${r}-${i}`;if(!n.has(s.toLowerCase()))return s}}async function Nc(e,t){return(await e.store.tables.find()).filter(n=>n.workspaceId===t).map(n=>n.name)}async function kf(e,t,n,r){const{workspaceId:i,importerId:s,target:a,maxRows:c}=r;let d,p,g,b=!1,y=0,C,x=null;const k=L=>e.store.rows(L),I=async L=>{if(b)return!0;if(a.kind==="new"){let U=L.columns??[];if(r.editColumns){const Y=await r.editColumns(U);if(Y===null)return!1;x=Po(U,Y),U=Y}d=Ee(),p=zc(await Nc(e,i),t);const B={id:d,workspaceId:i,name:p,code:Ve(p),columns:U,view:"table",...r.origin?{origin:r.origin}:{},updatedAt:Date.now()};await e.store.tables.insert(B),g=!0}else{const U=await e.store.tables.findOne(a.tableId);if(!U)throw new Error("The table to import into no longer exists.");if(d=U.id,p=U.name,g=!1,a.kind==="overwrite"){const B=await k(d).find();await k(d).bulkRemove(B.map(Y=>Y.id))}if(L.columns?.length){const B=Pi(U.columns,L.columns,U.deletedColumns??[]);B.newFields.length>0&&await e.store.tables.patch(d,{columns:B.columns,updatedAt:Date.now()})}}return e.events.emit("import:before",{source:s,tableId:d}),b=!0,!0};for await(const L of n){if(c!=null&&y>=c)break;if(!await I(L))return null;L.totalCount!=null&&(C=L.totalCount);let U=L.rows;if(c!=null&&y+U.length>c&&(U=U.slice(0,c-y)),U.length===0)continue;x&&(U=U.map(x));const B=Date.now(),Y=U.map(te=>({id:Ee(),tableId:d,data:te,updatedAt:B}));await k(d).bulkInsert(Y),y+=Y.length,r.onProgress?.(y,C)}return!b&&!await I({})?null:(e.events.emit("import:after",{source:s,tableId:d,rowCount:y}),{tableId:d,tableName:p,rowCount:y,created:g})}function sl(e,t,n={}){const r=t.mode==="reference"||t.maxRows!=null;return{api:e,fetchText:(i,s)=>Di(e,i,s??"Reading…",r?{maxBytes:null}:{}),panel:t.panel??{},...t.cursor!==void 0?{cursor:t.cursor}:{},...t.maxRows!==void 0?{maxRows:t.maxRows}:{},...n}}async function _f(e,t){if(t.length<=1)return t;const n=await yi(t.map(r=>({name:r.name,size:r.rowCount,...r.detail!==void 0?{detail:r.detail}:{},...r.hidden!==void 0?{hidden:r.hidden}:{}})),{title:`Import from ${e.label}`,message:`This source offers ${t.length} tables. Choose which to import.`,confirmLabel:"Import"});return n?n.map(r=>t[r]):null}async function Cf(e,t,n,r,i){if(!t.reference)throw new Error(`${t.label} cannot be referenced — import a copy instead.`);const s=t.reference(n,r);let a=[];for await(const p of t.read(n,r)){a=p.columns??[];break}if(a.length===0)throw new Error("No columns found in the referenced data.");const c=zc(await Nc(e,i),r.name),d=Ee();return await e.store.tables.insert({id:d,workspaceId:i,name:c,code:Ve(c),columns:a,view:"table",source:s,readonly:!0,updatedAt:Date.now()}),{tableId:d,tableName:c,rowCount:0,created:!0}}async function Uc(e,t,n,r){const i=e.workspaceId();if(!i)throw new Error("No active workspace.");const s=sl(e,r),a=await t.list(s,n);if(a.length===0)throw new Error("No tables found at that source.");const c=await _f(t,a);if(c===null)return{landed:[],failed:[],cancelled:!0};const d=[],p=[];for(const g of c)try{if(r.mode==="reference"){d.push(await Cf(e,t,s,g,i));continue}const b=r.target;let y;b.kind!=="new"&&(y=(await e.store.tables.findOne(b.tableId))?.columns);const C=sl(e,r,{...y?{targetColumns:y}:{}}),x=t.read(C,g),k=r.origin??(n.kind==="url"&&n.url?{type:t.id,url:n.url}:void 0),I=await kf(e,g.name,x,{workspaceId:i,importerId:t.id,target:b,...k?{origin:k}:{},...r.editColumns?{editColumns:r.editColumns}:{},...r.maxRows!==void 0?{maxRows:r.maxRows}:{}});if(I===null)return{landed:d,failed:p,cancelled:!0};d.push(I)}catch(b){p.push({name:g.name,error:b?.message??String(b)})}return{landed:d,failed:p,cancelled:!1}}async function Fc(e,t,n){const r=new Map;if(n.length===0)return r;const i=(await e.find()).filter(c=>c.workspaceId===t),s=new Map(i.map(c=>[c.name,c])),a=new Map(i.map(c=>[c.id,c]));for(const c of n){if(!Sf(c))continue;const d=s.get(c.name)??a.get(c.id),p=d?.id??c.id;d&&r.set(c.id,d.id);const g=d?d.builtin:c.builtin,b={...c,id:p,workspaceId:t};g===void 0?delete b.builtin:b.builtin=g,await e.upsert(b),s.set(b.name,b),a.set(b.id,b)}return r}function Sf(e){if(typeof e!="object"||e===null)return!1;const t=e;return typeof t.id=="string"&&typeof t.name=="string"}const Ef={id:"json-import",name:"JSON Import",type:"importer",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"/><path d="M16 3a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/json-import.ts"};function Tf(e){e.ui.registerImporter(Bc),e.ui.registerDropHandler(async t=>{const r=jf(t).filter(zf);if(r.length===0)return!1;t.preventDefault();for(const i of r)await Af(e,i);return!0})}function Lo(e){return je(e)?ro(e)||Array.isArray(e.tables)?!0:qc(e):!1}function If(e){return e.kind==="file"&&e.file?zs(e.file.name):e.kind==="url"&&e.url?zs(Ln(e.url)):zs(e.name??"imported")}const Bc={id:"json",label:"JSON (array of objects or a dump)",icon:"data_object",order:20,accept:[".json",".db.json","application/json"],samples:[{label:"Northwind — sample database (JSON dump)",url:"https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json"}],supports:{url:!0,file:!0,text:!0,reference:!0,multiTable:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??"";if(/\.db\.json$/i.test(t))return 1;if(/\.json$/i.test(t))return .95;if(e.file?.type==="application/json")return .9;const n=(e.text??"").trimStart();return n.startsWith("{")||n.startsWith("[")?.3:0},async list(e,t){let n;t.kind==="file"&&t.file?n=await t.file.text():t.kind==="url"&&t.url?n=await e.fetchText(t.url,`Reading ${Ln(t.url)}…`):n=t.text??"";const r=If(t);let i;try{i=JSON.parse(n)}catch(a){throw new Error(`Invalid JSON in ${r}: ${a.message}`)}const s=Li(i,r);return s.map(a=>({name:a.name,rowCount:a.rows.length,handle:{table:a,input:t,single:s.length===1}}))},async*read(e,t){const{table:n}=t.handle;yield{columns:n.columns,rows:n.rows}},reference(e,t){const{input:n,single:r}=t.handle;if(n.kind!=="url"||!n.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");if(!r)throw new Error("That URL holds several tables, so a reference would be ambiguous. Import a copy instead.");return{type:"url",config:{url:n.url,format:"json"}}}};function zs(e){return e.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported"}async function Af(e,t){const n=await t.text();let r;try{r=JSON.parse(n)}catch(a){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${t.name}: ${a.message}`)});return}if(Lo(r)){await Mo(e,n,t.name);return}const i=await Uc(e,Bc,{kind:"text",text:n,name:t.name},{mode:"copy",target:{kind:"new"}}),s=i.landed.reduce((a,c)=>a+c.rowCount,0);i.landed.length>0&&e.ui.dialogs.toast(`Imported ${t.name} (${s.toLocaleString()} rows).`,{kind:"success",title:"Import"})}async function Mo(e,t,n,r={}){const i=e.workspaceId();if(!i)throw new Error("json-import: no active workspace");let s;try{s=JSON.parse(t)}catch(I){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${n}: ${I.message}`)});return}const a=n.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",c=Li(s,a);if(c.length===0)return;let d=c;if(c.length>1){const I=await yi(c.map(L=>({name:L.name,size:L.rows.length})),{title:"Import tables",message:`"${n}" contains ${c.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!I)return;d=I.map(L=>c[L])}const p=(await e.store.tables.find()).filter(I=>I.workspaceId===i),g=new Set(d.map(I=>I.name)),b=p.filter(I=>g.has(I.name));let y;if(b.length===0&&d.length===1)y="append-new";else{const I=b.length>0?[`Overwrite matching (${b.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],L=await e.ui.dialogs.choice(`Importing ${d.length} table${d.length===1?"":"s"} from "${n}".${b.length>0?`

${b.length} table${b.length===1?"":"s"} share a name with existing data.`:""}`,I,"JSON import");if(!L)return;L.startsWith("Overwrite matching")?y="overwrite-matching":L==="Replace entire workspace"?y="replace-workspace":y="append-new"}const C=2e3,x=d.reduce((I,L)=>I+(L.source?0:Math.min(L.rows.length,r.maxRows??1/0)),0);let k=null;if(x>=C){const{TopProgress:I}=await at(async()=>{const{TopProgress:L}=await import("./top-progress-CiAVYzRN.js");return{TopProgress:L}},[]);k=I.begin(`Importing ${n}…`)}try{if(y==="replace-workspace")for(const B of p){const Y=e.store.rows(B.id),te=await Y.find();await Y.bulkRemove(te.map(W=>W.id)),await e.store.tables.remove(B.id)}const I=new Map(p.map(B=>[B.name,B])),L=new Map;let U=0;for(const B of d){const Y=B.source,te=B.origin??(!Y&&r.originUrl?{type:"json",url:r.originUrl}:void 0);let W;const H=y==="overwrite-matching"?I.get(B.name):void 0;let X=B.columns,ie=B.rows;if(r.editColumns&&!H&&!Y){const q=await r.editColumns(X,B.name);if(q===null)continue;ie=Mf(ie,X,q),X=q}if(H){if(W=H.id,!H.source){const q=e.store.rows(W),K=await q.find();await q.bulkRemove(K.map(ue=>ue.id))}await e.store.tables.patch(W,{columns:X,...B.title?{title:B.title}:{},...B.windowGeometry?{windowGeometry:B.windowGeometry}:{},...B.sortColumn?{sortColumn:B.sortColumn,sortAsc:B.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},...B.filters?{filters:B.filters}:{},...B.labelColumn?{labelColumn:B.labelColumn}:{},...B.info?{info:B.info}:{},...B.deletedColumns?{deletedColumns:B.deletedColumns}:{},...B.readonly?{readonly:!0}:{},source:Y??void 0,origin:te??void 0,updatedAt:Date.now()})}else W=Ee(),e.events.emit("import:before",{source:"json",tableId:W}),await e.store.tables.insert({id:W,workspaceId:i,name:B.name,code:Ve(B.name),columns:X,view:"table",...B.title?{title:B.title}:{},...B.windowGeometry?{windowGeometry:B.windowGeometry}:{},...B.sortColumn?{sortColumn:B.sortColumn,sortAsc:B.sortAsc??!0}:{},...B.filters?{filters:B.filters}:{},...B.labelColumn?{labelColumn:B.labelColumn}:{},...B.info?{info:B.info}:{},...B.deletedColumns?{deletedColumns:B.deletedColumns}:{},...B.readonly?{readonly:!0}:{},...Y?{source:Y}:{},...te?{origin:te}:{},updatedAt:Date.now()});L.set(B.name,W);let re=0;if(!Y){const q=e.store.rows(W),ue=(r.maxRows!=null?ie.slice(0,r.maxRows):ie).map(ge=>({id:Ee(),tableId:W,data:ge,updatedAt:Date.now()}));await q.bulkInsert(ue),re=ue.length,U+=re,k?.fraction(x>0?U/x:1)}e.events.emit("import:after",{source:"json",tableId:W,rowCount:re})}await Rf(e,s,i,L,y==="replace-workspace")}finally{k?.done()}document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function Rf(e,t,n,r,i){if(!je(t))return;const s=t,a=Array.isArray(s.viewTemplates)?s.viewTemplates:[],c=Array.isArray(s.viewInstances)?s.viewInstances:[];if(a.length===0&&c.length===0)return;if(i){const p=(await e.store.viewInstances.find()).filter(g=>g.workspaceId===n);await e.store.viewInstances.bulkRemove(p.map(g=>g.id))}const d=await Fc(e.store.viewTemplates,n,a);for(const p of c){if(!je(p)||typeof p.id!="string")continue;const g=(p.tableName?r.get(p.tableName):void 0)??p.tableId;if(!g)continue;const b=d.get(p.templateId)??p.templateId;await e.store.viewInstances.upsert({...p,workspaceId:n,tableId:g,templateId:b})}}function Li(e,t){if(je(e)&&ro(e))return ol(e);if(je(e)&&Array.isArray(e.tables)){const n=e,r=[];for(const i of n.tables){if(Hc(i)){r.push(al(i));continue}je(i)&&ro(i)&&r.push(...ol(i))}return r}if(qc(e))return[al(e)];if(Array.isArray(e)){const n=e.filter(je);return n.length===0?[]:[{name:t,...ll(n)}]}return je(e)?[{name:t,...ll([e])}]:[]}function ro(e){for(const[t,n]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!je(n))continue;const r=n;if(Array.isArray(r.dataArray)&&Array.isArray(r.columns))return!0}return!1}function ol(e){const t=[];for(const[n,r]of Object.entries(e)){if(!/\.table\.json$/.test(n)||!je(r))continue;const i=r;if(!Array.isArray(i.dataArray)||!Array.isArray(i.columns))continue;const s=n.replace(/\.table\.json$/,""),a=i.columns.map(g=>Of(g)),c=a.map(g=>g.field),d=i.dataArray.filter(g=>Array.isArray(g)).map(g=>{const b={};for(let y=0;y<c.length;y++)b[c[y]]=g[y];return b}),p={name:s,columns:a,rows:d};if(i.elementRect&&typeof i.elementRect.x=="number"&&typeof i.elementRect.y=="number"){const g=i.elementRect;p.windowGeometry={x:g.x,y:g.y,w:g.width??600,h:g.height??400,z:g.zIndex??100,minimized:!!g.minimized,maximized:!!g.maximized}}typeof i.sortColumn=="number"&&i.sortColumn>=0&&i.sortColumn<c.length&&(p.sortColumn=c[i.sortColumn],p.sortAsc=(i.sortDirection??"asc")!=="desc"),t.push(p)}return t}function Of(e){const t=String(e.field??"col"),n=String(e.name??t),r=typeof e.type=="string"?e.type:"string",i={field:t,label:n,type:r};return e.isUnique&&(i.unique=!0),e.isNotNull&&(i.notnull=!0),i}function Hc(e){return je(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function qc(e){return Hc(e)&&Array.isArray(e.rows)}function al(e){const t=e,n=je(t.windowGeometry)?t.windowGeometry:void 0,r=typeof t.sortColumn=="string"?t.sortColumn:void 0,i=typeof t.sortAsc=="boolean"?t.sortAsc:void 0,s=typeof t.title=="string"?t.title:void 0,a=je(t.filters)?t.filters:void 0,c=typeof t.labelColumn=="string"?t.labelColumn:void 0,d=je(t.info)?t.info:void 0,p=Array.isArray(t.deletedColumns)?t.deletedColumns.filter(C=>typeof C=="string"):void 0,g=t.readonly===!0?!0:void 0,b=je(t.source)&&typeof t.source.type=="string"?t.source:void 0,y=je(t.origin)&&typeof t.origin.type=="string"&&typeof t.origin.url=="string"?t.origin:void 0;return{name:String(e.name),columns:e.columns.map(Df),rows:Array.isArray(e.rows)?e.rows.filter(je):[],...s?{title:s}:{},...n?{windowGeometry:n}:{},...r?{sortColumn:r,sortAsc:i??!0}:{},...a?{filters:a}:{},...c?{labelColumn:c}:{},...d?{info:d}:{},...p?{deletedColumns:p}:{},...g?{readonly:g}:{},...b?{source:b}:{},...y?{origin:y}:{}}}function Df(e){if(!je(e))return{field:"col",label:"Col",type:"string"};const t=e,n=String(t.field??"col");let r=typeof t.type=="string"?t.type:"string",i=typeof t.renderer=="string"?t.renderer:void 0;(r==="color"||r==="image")&&(i=i??r,r="string");const s={field:n,label:String(t.label??n),type:r};return i&&(s.renderer=i),typeof t.script=="string"&&(s.script=t.script),t.readonly===!0&&(s.readonly=!0),s}function ll(e){const t=new Set;for(const i of e)for(const s of Object.keys(i))t.add(s);return{columns:Array.from(t).map(i=>({field:i,label:i,type:Pf(e.map(s=>s[i]))})),rows:e}}function Pf(e){const t=e.filter(n=>n!=null&&n!=="");return t.length===0?"string":t.every(n=>typeof n=="boolean")?"boolean":t.every(n=>typeof n=="number"&&Number.isFinite(n))?"number":t.every(n=>typeof n=="string"&&Lf(n))?"date":"string"}function Lf(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}([T ]\d{1,2}:\d{2}(:\d{2})?)?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}([T ]\d{1,2}:\d{2})?$/.test(t))}function Mf(e,t,n){const r=Po(t,n);return r?e.map(r):e}function je(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function jf(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const n=[];for(const r of Array.from(t.items))if(r.kind==="file"){const i=r.getAsFile();i&&n.push(i)}return n}return[]}function zf(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}const Nf=Object.freeze(Object.defineProperty({__proto__:null,init:Tf,isWorkspaceDump:Lo,meta:Ef,parsedToTables:Li,restoreWorkspaceDump:Mo},Symbol.toStringTag,{value:"Module"}));var Uf=Object.defineProperty,Ff=Object.getOwnPropertyDescriptor,jo=(e,t,n,r)=>{for(var i=r>1?void 0:r?Ff(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Uf(t,n,i),i};let ni=null;function Bf(){return ni||(ni=document.createElement("anchored-menu"),document.body.appendChild(ni)),ni}let mn=class extends ve{constructor(){super(...arguments),this.items=[],this.shown=!1,this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.finish(null)},this.onKey=e=>{e.key==="Escape"&&(e.preventDefault(),this.finish(null))}}static open(e,t){return Bf().openMenu(e,t)}connectedCallback(){super.connectedCallback(),this.setAttribute("hidden","")}openMenu(e,t){return this.items=t,this.style.left=`${Math.round(e.left)}px`,this.style.top=`${Math.round(e.bottom+4)}px`,this.removeAttribute("hidden"),this.shown=!0,this.updateComplete.then(()=>{const n=this.shadowRoot?.querySelector(".menu");if(!n)return;const r=n.getBoundingClientRect();r.bottom>window.innerHeight&&(this.style.top=`${Math.round(e.top-r.height-4)}px`)}),new Promise(n=>{this.resolveFn=n,setTimeout(()=>{document.addEventListener("mousedown",this.onOutside,!0),document.addEventListener("keydown",this.onKey,!0)},0)})}finish(e){this.setAttribute("hidden",""),this.shown=!1,document.removeEventListener("mousedown",this.onOutside,!0),document.removeEventListener("keydown",this.onKey,!0);const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}render(){return this.shown?$`
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
    `:$``}};mn.styles=[ft,$e`
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
    `];jo([N()],mn.prototype,"items",2);jo([N()],mn.prototype,"shown",2);mn=jo([Ce("anchored-menu")],mn);const mr=Object.freeze(Object.defineProperty({__proto__:null,get AnchoredMenu(){return mn}},Symbol.toStringTag,{value:"Module"})),io='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Hf={id:"connect-menu",name:"Connect",type:"ui",version:"0.1.0",description:"Header Connect button listing every registered live-backend connector. Chrome only — it knows no backend.",author:"Marc Cawood",icon:io,repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/connect-menu.ts"};function qf(e){e.ui.registerHeaderButton({id:"connect-menu:open",label:"Connect",icon:io,tooltip:"Connect a live table on a remote backend (rows are never stored locally)",onClick:(t,n)=>cl(t,n?.anchor)}),e.ui.registerCommand({id:"connect-menu:open",title:"Connect a live table…",group:"Data",icon:io,keywords:["datasette","live","remote","backend"],run:t=>cl(t)})}async function Kf(){const{registries:e}=await ae();return[...e.connectors].sort((t,n)=>(t.order??Number.MAX_SAFE_INTEGER)-(n.order??Number.MAX_SAFE_INTEGER))}async function cl(e,t){const n=await Kf();if(n.length===0){await e.ui.dialogs.alert("No backends are installed to connect to. Install a connector plugin from the Plugin Manager first.","Connect");return}let r=n[0];if(n.length>1){const i=t?.getBoundingClientRect(),s=i?await mn.open(i,n.map(a=>({id:a.id,label:a.label,icon:a.icon}))):await e.ui.dialogs.choice("Which backend do you want to connect to?",n.map(a=>a.label),"Connect");if(!s)return;r=i?n.find(a=>a.id===s):n.find(a=>a.label===s)}if(r)try{await r.connect(e)}catch(i){await e.ui.dialogs.alert(i?.message??String(i),`Connect ${r.label} failed`)}}const Vf=Object.freeze(Object.defineProperty({__proto__:null,init:qf,meta:Hf},Symbol.toStringTag,{value:"Module"}));function ul(e,t){return JSON.stringify(t.map(n=>e[n]))}function Gf(e,t){return t.every(n=>e[n]!==null&&e[n]!==void 0)}function Kc(e){const{oldRows:t,freshRows:n,pks:r,userAddedFields:i,deletedRemoteFields:s=[]}=e,a=new Set(s),c=b=>{const y={...b};for(const C of a)delete y[C];return y};if(!(r.length>0&&n.every(b=>Gf(b,r))))return{data:n.map(c),merged:!1};const p=new Map;for(const b of t){const y=ul(b.data,r);p.has(y)||p.set(y,b)}return{data:n.map(b=>{const y=c(b),C=ul(b,r),x=p.get(C);if(x)for(const k of i)Object.prototype.hasOwnProperty.call(x.data,k)&&(y[k]=x.data[k]);return y}),merged:!0}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vc=Symbol.for(""),Wf=e=>{if(e?.r===Vc)return e?._$litStatic$},dl=e=>({_$litStatic$:e,r:Vc}),hl=new Map,Yf=e=>(t,...n)=>{const r=n.length;let i,s;const a=[],c=[];let d,p=0,g=!1;for(;p<r;){for(d=t[p];p<r&&(s=n[p],(i=Wf(s))!==void 0);)d+=i+t[++p],g=!0;p!==r&&c.push(s),a.push(d),p++}if(p===r&&a.push(t[r]),g){const b=a.join("$$lit$$");(t=hl.get(b))===void 0&&(a.raw=a,hl.set(b,t=a)),n=c}return e(t,...n)},fl=Yf($);function pl(e){return e==null||String(e).trim()===""}function $r(e){const t=[];let n="",r=!1,i=!1,s=!1,a=!1,c=!1,d=!1,p=!0;const g=()=>{const b=s?n:n.trim();if(r||a){const y={term:b,negate:a};c&&(y.prefix=!0),d&&(y.exact=!0),t.push(y)}n="",r=!1,i=!1,s=!1,a=!1,c=!1,d=!1,p=!0};for(let b=0;b<e.length;b++){const y=e[b];if(y==='"'){if(i&&e[b+1]==='"'){n+='"',r=!0,b++;continue}i=!i,s=!0,r=!0,p=!1;continue}if(y===","&&!i){g();continue}if(y==="!"&&!i&&p&&!a&&!c&&!d){a=!0;continue}if(y==="="&&!i&&p&&!c&&!d){d=!0;continue}if(y==="^"&&!i&&p&&!c&&!d){c=!0;continue}p&&!i&&/\s/.test(y)||(p=!1),n+=y,/\s/.test(y)||(r=!0)}return g(),t}function Xf(e){return e.includes(",")||e.includes('"')||e!==e.trim()||e===""||e.startsWith("!")||e.startsWith("^")||e.startsWith("=")}function gr(e){return e.map(t=>{const n=t.term===""&&t.negate?"":Xf(t.term)?`"${t.term.replace(/"/g,'""')}"`:t.term,r=t.exact?"=":t.prefix?"^":"";return(t.negate?"!":"")+r+n}).join(",")}function ml(e,t){const n=t.term;if(n.trim()===""||!t.prefix&&!t.exact&&n.toUpperCase()==="NULL")return pl(e);const r=String(e??"").toLowerCase(),i=n.toLowerCase();return t.exact?r===i:t.prefix?r.startsWith(i):r.includes(i)}function vi(e,t){const n=$r(t);if(n.length===0)return!0;for(const i of n)if(i.negate&&ml(e,i))return!1;const r=n.filter(i=>!i.negate);return r.length===0?!0:r.some(i=>ml(e,i))}var Jf=Object.defineProperty,Qf=Object.getOwnPropertyDescriptor,zn=(e,t,n,r)=>{for(var i=r>1?void 0:r?Qf(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Jf(t,n,i),i};function Ns(e){return gr([{...e,negate:!1}])}let it=class extends ve{constructor(){super(...arguments),this.values=[],this.blanks=0,this.current="",this.search="",this.states=new Map,this.resolveFn=null,this.onChange=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,n,r=0,i){return this.values=t,this.blanks=r,this.onChange=i??null,this.states=new Map($r(n??"").map(s=>[Ns(s),{state:s.negate?"not":"on",token:s}])),this.current=n??"",this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(s=>{this.resolveFn=s,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}cycle(e){const t={term:e,negate:!1},n=Ns(t),r=new Map(this.states),i=r.get(n);i===void 0?r.set(n,{state:"on",token:t}):i.state==="on"?r.set(n,{state:"not",token:i.token}):r.delete(n),this.states=r;const s=[...r.values()].map(a=>({...a.token,negate:a.state==="not"}));this.current=gr(s),this.onChange?.(this.current)}close(e){this.onChange=null,document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),it.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),it.instance===this&&(it.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(a=>a.value.toLowerCase().includes(e)),n=this.blanks>0&&"(blanks)".includes(e),r=a=>this.states.get(Ns({term:a,negate:!1}))?.state,i=a=>$`
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
    `}};it.instance=null;it.styles=[ft,$e`
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
    `];zn([ct({type:Array})],it.prototype,"values",2);zn([ct({type:Number})],it.prototype,"blanks",2);zn([ct({type:String})],it.prototype,"current",2);zn([N()],it.prototype,"search",2);zn([N()],it.prototype,"states",2);it=zn([Ce("filter-popover")],it);var Zf=Object.defineProperty,ep=Object.getOwnPropertyDescriptor,_t=(e,t,n,r)=>{for(var i=r>1?void 0:r?ep(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Zf(t,n,i),i};let lt=class extends ve{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const n=t[this.highlightIdx];n!==void 0?(e.preventDefault(),this.onPick(n)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const n=[];for(const r of this.options)if(r.toLowerCase().includes(t)&&(n.push(r),n.length>=500))break;return n}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=this.open&&e.length>0,n=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return $`
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
            </button>`:se}
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
          </ul>`:se}
    `}};lt.styles=$e`
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
  `;_t([ct({type:String})],lt.prototype,"value",2);_t([ct({type:Array})],lt.prototype,"options",2);_t([ct({type:String})],lt.prototype,"placeholder",2);_t([N()],lt.prototype,"open",2);_t([N()],lt.prototype,"highlightIdx",2);_t([N()],lt.prototype,"dropTop",2);_t([N()],lt.prototype,"dropLeft",2);_t([N()],lt.prototype,"dropMinWidth",2);_t([N()],lt.prototype,"editing",2);_t([Ot("input")],lt.prototype,"inputEl",2);lt=_t([Ce("filter-combobox")],lt);function tp(e){const t=e.trim(),n=t.split(/\s+/).filter(Boolean);if(!n.some(c=>c==="AND"||c==="OR"))return{kind:"plain",phrase:t.toLowerCase(),words:n.map(c=>c.toLowerCase())};const i=[];let s=[];for(const c of n)c==="OR"?(i.push(s),s=[]):c==="AND"||s.push(c.toLowerCase());i.push(s);const a=i.filter(c=>c.length>0);return a.length===0?{kind:"plain",phrase:t.toLowerCase(),words:[]}:{kind:"boolean",groups:a}}function np(e,t,n){const r=tp(t);if(r.kind==="boolean")return e.filter(d=>r.groups.some(p=>p.every(g=>n(d,g))));const{phrase:i,words:s}=r;if(s.length<=1)return i===""?e:e.filter(d=>n(d,i));const a=e.filter(d=>n(d,i));if(a.length>0)return a;const c=e.filter(d=>s.every(p=>n(d,p)));return c.length>0?c:e.filter(d=>s.some(p=>n(d,p)))}const rp=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function xi(e,t,n){const r=new Map;for(const c of n)r.set(c.field.toLowerCase(),c.field),c.label&&r.set(c.label.toLowerCase(),c.field);const i=[...r.keys()].filter(Boolean).sort((c,d)=>d.length-c.length);let s=t;return i.length>0&&(s=s.replace(new RegExp(`(^|\\s)(${i.map(rp).join("|")}):\\s+`,"gi"),"$1$2:")),np(e,s,(c,d)=>{const p=d.indexOf(":");if(p>0){const g=r.get(d.slice(0,p));if(g)return vi(c.data[g],d.slice(p+1))}return Object.values(c.data).some(g=>g!=null&&String(g).toLowerCase().includes(d))})}const gl=new Map;function ip(e){const t=gl.get(e);if(t)return t;const n=new Function("row",`${e}
return render(row);`);return gl.set(e,n),n}function zo(e,t){if(!e||!e.trim())return{ok:!1,label:"no script",message:""};let n;try{n=ip(e)}catch(r){return{ok:!1,label:"compile error",message:bl(r)}}try{return{ok:!0,value:n(t)}}catch(r){return{ok:!1,label:"runtime error",message:bl(r)}}}function bl(e){return e instanceof Error?e.message:String(e)}const $i="easydb:visible-count";function Gc(e,t,n){e&&document.dispatchEvent(new CustomEvent($i,{detail:{key:e,count:t,total:n}}))}function Wc(e,t){return e<0||t<0?"":e===t?` (${t})`:` (${e}/${t})`}const Yc="#dc2626",Xc="cell-invalid",sp=`border-color:${Yc};background:#fef2f2`;function No(e,t){e.classList.add(Xc),e.style.border=`1px solid ${Yc}`,e.style.background="#fef2f2",t&&(e.title=t)}function op(e,t){if(e==null||typeof e=="string"&&e.trim()==="")return"empty";switch(t){case"boolean":return Jc(e)==="invalid"?"invalid":"ok";case"number":return Number.isFinite(typeof e=="number"?e:Number(e))?"ok":"invalid";case"date":case"datetime":return Number.isNaN(Date.parse(String(e)))?"invalid":"ok";default:return"ok"}}const ap=/^\s*(true|1)\s*$/i,lp=/^\s*(false|0)\s*$/i;function Jc(e){return e===!0||e===1?"true":e===!1||e===0?"false":e==null?"empty":typeof e=="string"?e.trim()===""?"empty":ap.test(e)?"true":lp.test(e)?"false":"invalid":"invalid"}var cp=Object.defineProperty,up=Object.getOwnPropertyDescriptor,De=(e,t,n,r)=>{for(var i=r>1?void 0:r?up(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&cp(t,n,i),i};const dp=200,hp=10,Us=32;let Ie=class extends ve{constructor(){super(...arguments),this.tableId="",this.viewInstanceId="",this.columns=[],this.rows=[],this.sortSpecs=[],this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.viewInst=null,this.tableColumns=[],this.tableReadonly=!1,this.renderedCount=0,this.lastEmittedCount=-1,this.lastEmittedTotal=-1,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;(t.tableId===this.tableId||this.viewMode&&t.tableId===this.viewInstanceId)&&(this.localQuery=t.query??"")},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}get viewMode(){return!!this.viewInstanceId}get readOnlyView(){return this.viewMode&&!!this.viewInst?.readonly}get readOnly(){return this.readOnlyView||this.tableReadonly}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),this.resizing=null}async updated(e){(e.has("tableId")||e.has("viewInstanceId"))&&this.tableId&&(this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.emitCount()}emitCount(){const e=this.viewMode?this.viewInstanceId:this.tableId;if(!e)return;const t=this.renderedCount,n=this.rows.length;t===this.lastEmittedCount&&n===this.lastEmittedTotal||(this.lastEmittedCount=t,this.lastEmittedTotal=n,Gc(e,t,n))}async bind(){if(!this.tableId)return;const e=await ae(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.viewMode?(this.tableColumns=t.columns,this.viewInst=await e.store.viewInstances.findOne(this.viewInstanceId)??null,this.applyView(),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(i=>{const s=i.find(a=>a.id===this.tableId);s&&(this.tableColumns=s.columns,this.applyView())}),this.viewSubUnsub?.(),this.viewSubUnsub=e.store.viewInstances.subscribe(i=>{const s=i.find(a=>a.id===this.viewInstanceId);s&&(this.viewInst=s,this.applyView())})):(this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(i=>{const s=i.find(a=>a.id===this.tableId);s&&this.applyTable(s)})),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const n=e.store.rows(this.tableId);this.unsubscribe=n.subscribe(i=>this.rows=i);const r=window.setTimeout(()=>this.loading=!0,dp);try{this.rows=await n.find()}catch(i){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${i?.message??String(i)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(r),this.loading=!1}}applyTable(e){this.resizing==null&&(this.columns=e.columns),this.tableReadonly=!!e.readonly,this.sortSpecs=vl(e),this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}applyView(){const e=this.viewInst;if(!e)return;const t=new Map(this.tableColumns.map(r=>[r.field,r])),n=e.columnWidths??{};this.columns=e.visibleColumns.map(r=>t.get(r)).filter(r=>!!r).map(r=>{const i=n[r.field];return typeof i=="number"?{...r,width:i}:r}),this.sortSpecs=vl(e),this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}async setCell(e,t,n){const r=await ae();await this.commitCell(r,e,t,n)}async commitCell(e,t,n,r){const i=this.columns.find(s=>s.field===n);if(i){const s=mp(i,r,this.rows,t.id);if(s){await e.api.ui.dialogs.alert(s,`Cannot save ${i.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[n]:r},updatedAt:Date.now()})}catch(s){await e.api.ui.dialogs.alert(s?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}cancelCellEdit(e,t){if(e.key!=="Escape")return;e.stopPropagation();const n=e.target;typeof t=="boolean"?n.checked=t:n.value=t,n.blur()}renderInvalidCell(e,t,n,r){const i=String(n);return $`<input
      type="text"
      class=${Xc}
      style=${sp}
      title=${r}
      .value=${i}
      @keydown=${s=>this.cancelCellEdit(s,i)}
      @change=${s=>this.setCell(e,t.field,s.target.value)}
    />`}renderReadonlyCell(e,t){return e.type==="boolean"?$`<input type="checkbox" .checked=${t===!0||t==="true"||t===1||t==="1"} disabled />`:t==null||t===""?$``:e.type==="date"?$`${ri(t)}`:e.type==="datetime"?$`${ii(t).replace("T"," ")}`:$`${String(t)}`}renderScriptedCell(e,t){const n=zo(t.script,e.data);if(!n.ok)return $`<span class="script-err" title=${n.message}>⚠ ${n.label}</span>`;const r=t.renderer?this.cellRenderers?.get(t.renderer):void 0;if(!r)return $`${n.value==null?"":String(n.value)}`;const i=dl(r);return fl`<${i}
      .value=${n.value??""}
      .rawValue=${e.data[t.field]??""}
      .column=${t}
      .row=${e.data}
      .readonly=${!0}
      @change=${this.readOnly?void 0:s=>this.setCell(e,t.field,s.detail.value)}
    ></${i}>`}renderCell(e,t){const n=e.data[t.field];if(t.script?.trim())return this.renderScriptedCell(e,t);const r=this.readOnly||t.readonly===!0,i=t.renderer,s=i?this.cellRenderers?.get(i):void 0;if(s){const a=dl(s);return fl`<${a}
        .value=${n??""}
        .column=${t}
        .row=${e.data}
        .readonly=${r}
        @change=${r?void 0:c=>this.setCell(e,t.field,c.detail.value)}
      ></${a}>`}if(r)return this.renderReadonlyCell(t,n);switch(t.type){case"date":return yl(n,ri(n))?this.renderInvalidCell(e,t,n,`Not a valid date: "${String(n)}"`):$`<input
          type="date"
          .value=${ri(n)}
          @keydown=${a=>this.cancelCellEdit(a,ri(n))}
          @change=${a=>this.setCell(e,t.field,a.target.value||null)}
        />`;case"datetime":return yl(n,ii(n))?this.renderInvalidCell(e,t,n,`Not a valid datetime: "${String(n)}"`):$`<input
          type="datetime-local"
          .value=${ii(n)}
          @keydown=${a=>this.cancelCellEdit(a,ii(n))}
          @change=${a=>this.setCell(e,t.field,a.target.value||null)}
        />`;case"number":{const a=n==null||n==="";return!a&&Number.isNaN(Number(n))?this.renderInvalidCell(e,t,n,`Not a valid number: "${String(n)}"`):$`<input
          type="number"
          .value=${a?"":String(n)}
          @keydown=${c=>this.cancelCellEdit(c,a?"":String(n))}
          @change=${c=>{const d=c.target.value;this.setCell(e,t.field,d===""?null:Number(d))}}
        />`}default:return $`<input
          type="text"
          .value=${String(n??"")}
          @keydown=${a=>this.cancelCellEdit(a,String(n??""))}
          @change=${a=>this.setCell(e,t.field,a.target.value)}
        />`}}async deleteRow(e){const t=await ae();try{await t.store.rows(this.tableId).remove(e)}catch(n){await t.api.ui.dialogs.alert(n?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e,t=!1){const n=this.sortSpecs.find(s=>s.field===e),r=this.sortSpecs.length===1&&this.sortSpecs[0]?.field===e;if(!t&&!r){this.sortSpecs=[{field:e,asc:!0}],await this.persistSort(this.sortSpecs);return}const i=t?this.sortSpecs.filter(s=>s.field!==e):[];n?n.asc&&i.push({field:e,asc:!1}):i.push({field:e,asc:!0}),this.sortSpecs=i,await this.persistSort(i)}async persistSort(e){const t=e[0],n={sortBy:e.length>0?e:void 0,sortColumn:t?.field,sortAsc:t?t.asc:void 0,updatedAt:Date.now()},r=await ae();this.viewMode?await r.store.viewInstances.patch(this.viewInstanceId,n):await r.store.tables.patch(this.tableId,n)}filteredRows(){const e=new Set(this.columns.filter(a=>a.filterable===!1).map(a=>a.field)),t=Object.entries(this.filters).filter(([a,c])=>c&&c.trim().length>0&&!e.has(a)),n=this.globalQuery.trim(),r=this.localQuery.trim();if(t.length===0&&n.length===0&&r.length===0)return this.rows;let i=this.rows;t.length>0&&(i=i.filter(a=>t.every(([c,d])=>vi(a.data[c],d))));const s=this.columns.filter(a=>a.filterable!==!1);return r&&(i=xi(i,r,s)),n&&(i=xi(i,n,s)),i}sortedRows(){const e=this.filteredRows();if(this.sortSpecs.length===0)return e;const t=this.sortSpecs.map(r=>({field:r.field,factor:r.asc?1:-1,type:this.columns.find(i=>i.field===r.field)?.type??"string"})),n=[...e];return n.sort((r,i)=>{for(const s of t){const a=gp(r.data[s.field],i.data[s.field],s.type,s.factor);if(a!==0)return a}return 0}),n}async openFilterPicker(e,t){e.stopPropagation();const n=e.currentTarget,r=it.instance;if(!r)return;const i=new Map;let s=0;for(const d of this.rowsFacetedFor(t)){const p=d.data[t];if(p==null||String(p).trim()===""){s++;continue}const g=String(p);i.set(g,(i.get(g)??0)+1)}let a=[...i.entries()].map(([d,p])=>({value:d,count:p})).sort((d,p)=>p.count-d.count||d.value.localeCompare(p.value));this.columns.find(d=>d.field===t)?.type==="boolean"&&(a=[...["true","false"].map(p=>({value:p,count:i.get(p)??0})),...a.filter(p=>p.value!=="true"&&p.value!=="false")]);const c=await r.open(n.getBoundingClientRect(),a,this.filters[t]??"",s,d=>this.onFilterInput(t,d));c!==null&&(typeof c=="object"&&"clear"in c?this.onFilterInput(t,""):typeof c=="string"&&this.onFilterInput(t,c))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>{this.filterSaveTimer=null,this.saveFilters()},250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=new Set(this.columns.filter(r=>r.filterable===!1).map(r=>r.field)),n=Object.entries(this.filters).filter(([r,i])=>i&&i.trim().length>0&&r!==e&&!t.has(r));return n.length===0?this.rows:this.rows.filter(r=>n.every(([i,s])=>vi(r.data[i],s)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const n=50,r=500;for(const i of this.visibleColumns){let s=!0;for(const c of t){const d=c.data[i.field];if(d==null)continue;if((typeof d=="string"?d:String(d)).length>=n){s=!1;break}}if(!s)continue;const a=new Set;for(const c of this.rowsFacetedFor(i.field)){const d=c.data[i.field];if(d==null||d==="")continue;const p=typeof d=="string"?d:String(d);if(!(p.length>=n)&&(a.add(p),a.size>=r))break}e.set(i.field,[...a].sort())}return e}freezeColumnWidths(){const e=this.renderRoot.querySelector("thead tr");if(!e)return;const t=Array.from(e.querySelectorAll(":scope > th")),n=this.visibleColumns,r=new Map;n.forEach((i,s)=>{if(i.width!=null)return;const a=t[s];a&&r.set(i.field,Math.round(a.getBoundingClientRect().width))}),r.size!==0&&(this.columns=this.columns.map(i=>r.has(i.field)?{...i,width:r.get(i.field)}:i))}onResizeStart(e,t,n){e.preventDefault(),e.stopPropagation();const r=n.offsetWidth;this.freezeColumnWidths(),this.resizing={field:t,startX:e.clientX,startW:r};const i=a=>{if(!this.resizing)return;const c=a.clientX-this.resizing.startX,d=Math.max(hp,this.resizing.startW+c);this.columns=this.columns.map(p=>p.field===this.resizing.field?{...p,width:d}:p)},s=async()=>{window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",s);const a=this.resizing?.field;if(this.resizing=null,!a)return;const c=await ae();if(this.viewMode){const d={...this.viewInst?.columnWidths??{}};for(const p of this.columns)typeof p.width=="number"&&(d[p.field]=p.width);await c.store.viewInstances.patch(this.viewInstanceId,{columnWidths:d,updatedAt:Date.now()})}else await c.store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",i),window.addEventListener("pointerup",s),window.addEventListener("pointercancel",s)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,n){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const r=n.getBoundingClientRect(),i=e.clientX<r.left+r.width/2;this.dropTargetField=t,this.dropEdge=i?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const n=this.dragSourceField,r=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!n||n===t||!r)return;const i=[...this.columns],s=i.findIndex(p=>p.field===n);if(s<0)return;const[a]=i.splice(s,1);let c=i.findIndex(p=>p.field===t);if(c<0){i.splice(s,0,a);return}r==="after"&&(c+=1),i.splice(c,0,a);const d=await ae();this.viewMode?await d.store.viewInstances.patch(this.viewInstanceId,{visibleColumns:i.map(p=>p.field),updatedAt:Date.now()}):await d.store.tables.patch(this.tableId,{columns:i,updatedAt:Date.now()})}async saveFilters(){const e=await ae(),t={};for(const[r,i]of Object.entries(this.filters))i&&i.trim().length>0&&(t[r]=i);if(this.viewMode){await e.store.viewInstances.patch(this.viewInstanceId,{filters:t,updatedAt:Date.now()});return}const n=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:n,updatedAt:Date.now()})}tableSizingStyle(e){return e.length===0||!e.every(n=>typeof n.width=="number")?null:`table-layout: fixed; width: ${e.reduce((n,r)=>n+(r.width??0),0)+Us}px; min-width: 0`}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,n=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,r=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),i=Math.min(e.length,r+n);return{slice:e.slice(r,i),topPad:r*t,bottomPad:(e.length-i)*t}}render(){const e=this.sortedRows();this.renderedCount=e.length;const t=this.visibleColumns,{slice:n,topPad:r,bottomPad:i}=this.virtualSlice(e),s=this.computeFilterSuggestions(),a=this.externalLoading?this.externalProgress:null;return $`
      ${this.loading||this.externalLoading?$`<div
            class="load-bar"
            role="progressbar"
            aria-label="Loading rows"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow=${a!=null?Math.round(a*100):se}
          >
            <div
              class="load-bar-fill ${a!=null?"determinate":""}"
              style=${a!=null?`width:${Math.max(2,Math.round(a*100))}%`:se}
            ></div>
          </div>`:se}
      <table style=${this.tableSizingStyle(t)??se}>
        <colgroup>
          ${t.map(c=>$`<col style=${c.width!=null?`width: ${c.width}px`:""} />`)}
          <col style="width:${Us}px" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(c=>{const d=c.sortable!==!1,p=c.filterable!==!1,g=this.sortSpecs.findIndex(Y=>Y.field===c.field),b=g>=0?this.sortSpecs[g]:void 0,y=b?b.asc?"asc":"desc":null,C=d?y==="asc"?"▲":y==="desc"?"▼":"⇅":"",x=this.sortSpecs.length>1&&g>=0?String(g+1):"",k=`t-${c.type}`,I=this.dragSourceField===c.field,L=this.dropTargetField===c.field,U=L&&this.dropEdge==="before"?" drop-before":L&&this.dropEdge==="after"?" drop-after":"",B=(c.description?`${c.description}
`:"")+(c.units?`Units: ${c.units}
`:"")+`${c.field} — ${d?"click to sort, shift-click to add a sort level, ":"not sortable · "}drag to reorder`+(p?"":" · not filterable");return $`
                <th
                  class=${`${k}${y?" sorted":""}${I?" drag-source":""}${U}${d?"":" no-sort"}`}
                  title=${B}
                  @click=${Y=>d&&this.toggleSort(c.field,Y.shiftKey)}
                  @dragover=${Y=>this.onColDragOver(Y,c.field,Y.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(c.field)}
                  @drop=${Y=>this.onColDrop(Y,c.field)}
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
                      @click=${Y=>Y.stopPropagation()}
                      @dragstart=${Y=>this.onColDragStart(Y,c.field)}
                      @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                      >drag_indicator</span
                    ><span class="col-label"
                      >${c.label}${c.units?$`<span class="col-units"> (${c.units})</span>`:""}</span
                    ><span class="sort-icon" aria-hidden="true"
                      >${C}${x?$`<span class="sort-rank">${x}</span>`:se}</span
                    >
                    ${p?$`<button
                          class=${`funnel${this.filters[c.field]?" active":""}`}
                          title="Filter by value"
                          aria-label=${`Filter ${c.label||c.field}`}
                          @click=${Y=>this.openFilterPicker(Y,c.field)}
                        >
                          <span class="mi sm" aria-hidden="true">filter_list</span>
                        </button>`:""}
                  </div>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${Y=>Y.stopPropagation()}
                    @pointerdown=${Y=>this.onResizeStart(Y,c.field,Y.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:${Us}px"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(c=>{if(c.filterable===!1)return $`<th></th>`;const d=s.get(c.field)??[];return $`
                <th>
                  <filter-combobox
                    .value=${this.filters[c.field]??""}
                    .options=${d}
                    placeholder="filter…"
                    title="Filter: text = contains, ^text = starts with, !text = does not contain, NULL = empty, !NULL = has a value. Comma-separate for several values (a,b = a OR b; !a,!b excludes both); quote a value containing a comma."
                    @filter-change=${p=>this.onFilterInput(c.field,p.detail.value)}
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
                ${t.map(d=>$`<td
                      class=${`t-${d.type}${d.renderer?` r-${d.renderer}`:""}${pp(c,d)}`}
                      title=${fp(c,d)}
                    >
                      ${this.renderCell(c,d)}
                    </td>`)}
                <td>
                  ${this.readOnly?se:$`<button
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
    `}};Ie.styles=[ft,$e`
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
    `];De([ct({type:String})],Ie.prototype,"tableId",2);De([ct({type:String})],Ie.prototype,"viewInstanceId",2);De([N()],Ie.prototype,"columns",2);De([N()],Ie.prototype,"rows",2);De([N()],Ie.prototype,"sortSpecs",2);De([N()],Ie.prototype,"filters",2);De([N()],Ie.prototype,"globalQuery",2);De([N()],Ie.prototype,"localQuery",2);De([N()],Ie.prototype,"dragSourceField",2);De([N()],Ie.prototype,"dropTargetField",2);De([N()],Ie.prototype,"dropEdge",2);De([N()],Ie.prototype,"resizing",2);De([N()],Ie.prototype,"cellRenderers",2);De([N()],Ie.prototype,"scrollY",2);De([N()],Ie.prototype,"viewportHeight",2);De([N()],Ie.prototype,"loading",2);De([N()],Ie.prototype,"externalLoading",2);De([N()],Ie.prototype,"externalProgress",2);De([N()],Ie.prototype,"tableReadonly",2);Ie=De([Ce("data-table")],Ie);const wl=500;function fp(e,t){if(t.script)return"";const n=e.data[t.field];if(n==null)return"";const r=typeof n=="string"?n:String(n);return r.trim()===""?"":r.length>wl?`${r.slice(0,wl)}…`:r}function pp(e,t){if(t.script)return"";const n=op(e.data[t.field],t.type);return n==="empty"?" is-null":n==="invalid"?" is-invalid":""}function mp(e,t,n,r){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&n.find(s=>s.id!==r&&s.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function ri(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const n=new Date(t);return Number.isNaN(n.getTime())?"":n.toISOString().slice(0,10)}function ii(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const n=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(n)return`${n[1]}T${n[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const r=new Date(t);if(Number.isNaN(r.getTime()))return"";const i=r.toISOString();return`${i.slice(0,10)}T${i.slice(11,16)}`}function yl(e,t){return e==null||typeof e=="string"&&e.trim()===""?!1:t===""}function gp(e,t,n,r){const i=c=>c==null?0:c===""?1:2,s=i(e),a=i(t);return s!==2||a!==2?(s-a)*r:bp(e,t,n)*r}function vl(e){return e.sortBy?.length?e.sortBy.map(t=>({field:t.field,asc:t.asc!==!1})):e.sortColumn?[{field:e.sortColumn,asc:e.sortAsc!==!1}]:[]}function bp(e,t,n){switch(n){case"number":{const r=Number(e),i=Number(t);return Number.isNaN(r)||Number.isNaN(i)?String(e).localeCompare(String(t)):r-i}case"boolean":return(e?1:0)-(t?1:0);case"date":{const r=new Date(String(e)).getTime(),i=new Date(String(t)).getTime();return Number.isNaN(r)||Number.isNaN(i)?String(e).localeCompare(String(t)):r-i}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function It(e,t,n){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:n}}))}class st extends Error{constructor(t,n){const r=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(r),this.name="DatasetteError",this.status=n??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function Rt(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const n=t.pathname.split("/").filter(Boolean),r={};for(const[c,d]of t.searchParams)r[c]=d;let i,s=null,a=null;if(n.length>=2){a=decodeURIComponent(n[n.length-1]),s=decodeURIComponent(n[n.length-2]);const c=n.slice(0,n.length-2).join("/");i=t.origin+(c?"/"+c:"")}else n.length===1&&(s=decodeURIComponent(n[0])),i=t.origin;return{base:i,db:s,table:a,query:r}}function Rn(e,t={}){const n=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[r,i]of Object.entries({...e.query,...t}))i!=null&&n.searchParams.set(r,String(i));return n.toString()}function wp(e){const t=e?.next_url??null,n=e?.next,r=n!=null&&n!==!1?String(n):null,i=Array.isArray(e?.rows)?e.rows:[],s=Array.isArray(e?.columns)?e.columns:null;return{rows:i.map(c=>Array.isArray(c)&&s?Object.fromEntries(s.map((d,p)=>[d,c[p]])):c),nextUrl:t,nextToken:r,hasMore:t!=null||r!=null,truncated:e?.truncated===!0}}function yp(e,t=""){const n=String(e||"").toUpperCase();return n.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":n.includes("REAL")||n.includes("FLOA")||n.includes("DOUB")||n.includes("NUM")||n.includes("DEC")?"number":n.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function xl(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],n=Array.isArray(e?.columns)?e.columns.slice():[],r={},i=e?.column_details;if(Array.isArray(i))for(const c of i)r[c.column??c.name]=c;else i&&typeof i=="object"&&Object.assign(r,i);for(const c of n)c in r||(r[c]={});const a=(n.length?n:Object.keys(r)).map(c=>{const d=r[c]||{},p=d.is_pk===!0||d.is_pk===1||t.includes(c),g={field:c,label:Qc(c),type:yp(d.sqlite_type??d.type,c)};return(d.notnull===!0||d.notnull===1||p)&&(g.notnull=!0),p&&(g.unique=!0),(d.hidden===!0||d.hidden===1)&&(g.hidden=!0),d.default!=null&&d.default!==""&&(g.default=d.default),g});if(t.length===0){const c=a.filter(d=>d.unique).map(d=>d.field);c.length&&t.push(...c)}return{columns:a,pks:t}}function Qc(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function Mi(e){const t=[],n=new Set;for(const r of e)for(const i of Object.keys(r))n.has(i)||(n.add(i),t.push(i));return t.map(r=>({field:r,label:Qc(r),type:vp(e.map(i=>i[r]))}))}function vp(e){const t=e.filter(n=>n!=null&&n!=="");return t.length===0?"string":t.every(n=>typeof n=="boolean")?"boolean":t.every(n=>typeof n=="number"&&Number.isFinite(n))?"number":t.every(n=>typeof n=="string"&&xp(n))?"datetime":"string"}function xp(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function $p(e){const t=new TextEncoder().encode(String(e));let n="";for(const r of t){const i=String.fromCharCode(r);/[A-Za-z0-9_-]/.test(i)?n+=i:n+="~"+r.toString(16).toUpperCase().padStart(2,"0")}return n}function kp(e,t){return!t||t.length===0?null:t.map(n=>$p(e[n])).join(",")}function _p(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],n=[];for(const r of t){if(typeof r=="string"){n.push(r);continue}if(r&&typeof r=="object"&&typeof r.name=="string"){if(r.name==="_memory")continue;n.push(typeof r.route=="string"&&r.route?r.route:r.name)}}return n}function Cp(e,t){const n=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],r=[];for(const i of n){if(typeof i=="string"){r.push({db:t,table:i,count:null,hidden:!1,pks:[]});continue}i&&typeof i=="object"&&typeof i.name=="string"&&r.push({db:t,table:i.name,count:typeof i.count=="number"?i.count:null,hidden:i.hidden===!0,pks:Array.isArray(i.primary_keys)?i.primary_keys:[]})}return r}async function Wt(e,t){let n;try{n=await e(t)}catch(i){const s=i?.message||"network error";throw new st({error:`Couldn't reach ${t} (${s}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(n&&n.ok===!1){let i=null;try{i=await n.json()}catch{}throw new st(i&&typeof i=="object"?i:{error:`HTTP ${n.status} for ${t}`},n.status)}const r=await n.json();if(r&&r.ok===!1)throw new st(r,n.status);return r}async function Zc(e,t){return _p(await Wt(e,`${t}/-/databases.json`))}async function $l(e,t,n){return Cp(await Wt(e,`${t}/${encodeURIComponent(n)}.json`),n)}async function ji(e,t){const n=Rn(t,{_extra:"column_details"}),r=await Wt(e,n);let{columns:i,pks:s}=xl(r),a=!!r&&r.column_details!=null,c=r?.count??null,d=r?.count_truncated===!0,p=r;if(i.length===0){const g=Rn(t,{_extra:"columns"}),b=await Wt(e,g);({columns:i,pks:s}=xl(b)),a=!!b&&b.column_details!=null,c=b?.count??c,d=b?.count_truncated===!0||d,p=b}return{columns:i,pks:s,count:c,countTruncated:d,typed:a,raw:p}}async function so(e,t){if(!t.db||!t.table)throw new Error("probeSingleTable: URL must name a database and a table");const n=await ji(e,t);return{db:t.db,table:t.table,count:n.count,hidden:!1,pks:n.pks}}function Sp(e,t,n){const r=e&&typeof e=="object"?e:{},i=t&&n&&r.databases?.[t]?.tables?.[n]||t&&n&&r.databases?.[t]?.tables?.[n.toLowerCase()]||{},s=t&&r.databases?.[t]||{},a=x=>i[x]??s[x]??r[x],c={columns:{},units:{}};typeof i.sort=="string"&&(c.sort=i.sort),typeof i.sort_desc=="string"&&(c.sortDesc=i.sort_desc),typeof i.size=="number"&&(c.size=i.size),Array.isArray(i.sortable_columns)&&(c.sortableColumns=i.sortable_columns.slice()),typeof i.label_column=="string"&&(c.labelColumn=i.label_column),i.hidden===!0&&(c.hidden=!0),typeof i.description=="string"&&(c.description=i.description),typeof i.description_html=="string"&&(c.descriptionHtml=i.description_html);const d=a("source"),p=a("source_url"),g=a("license"),b=a("license_url"),y=a("about"),C=a("about_url");if(typeof d=="string"&&(c.source=d),typeof p=="string"&&(c.sourceUrl=p),typeof g=="string"&&(c.license=g),typeof b=="string"&&(c.licenseUrl=b),typeof y=="string"&&(c.about=y),typeof C=="string"&&(c.aboutUrl=C),i.columns&&typeof i.columns=="object")for(const[x,k]of Object.entries(i.columns))typeof k=="string"&&(c.columns[x]=k);if(i.units&&typeof i.units=="object")for(const[x,k]of Object.entries(i.units))typeof k=="string"&&(c.units[x]=k);return c}const kl=new Map;async function Ep(e,t){let n=kl.get(t);return n||(n=Wt(e,`${t}/-/metadata.json`).catch(()=>({})),kl.set(t,n)),n}async function Uo(e,t){const n=await Ep(e,t.base);return Sp(n,t.db,t.table)}function Tp(e){const t={};return e.description!=null&&(t.description=e.description),e.descriptionHtml!=null&&(t.descriptionHtml=e.descriptionHtml),e.source!=null&&(t.source=e.source),e.sourceUrl!=null&&(t.sourceUrl=e.sourceUrl),e.license!=null&&(t.license=e.license),e.licenseUrl!=null&&(t.licenseUrl=e.licenseUrl),e.about!=null&&(t.about=e.about),e.aboutUrl!=null&&(t.aboutUrl=e.aboutUrl),Object.keys(t).length>0?t:void 0}function Fo(e,t){const n=e.sortableColumns!=null?new Set(e.sortableColumns):null,r=t.map(c=>{const d=e.columns[c.field],p=e.units[c.field],g=n?n.has(c.field):void 0;return d==null&&p==null&&g===void 0?c:{...c,...d!=null?{description:d}:{},...p!=null?{units:p}:{},...g!==void 0?{sortable:g}:{}}}),i=new Set(t.map(c=>c.field)),s={};e.sort&&i.has(e.sort)?(s.sortColumn=e.sort,s.sortAsc=!0):e.sortDesc&&i.has(e.sortDesc)&&(s.sortColumn=e.sortDesc,s.sortAsc=!1);const a=Tp(e);return a&&(s.info=a),e.labelColumn&&i.has(e.labelColumn)&&(s.labelColumn=e.labelColumn),{columns:r,patch:s}}function Bo(e,t){if(t.length===0)return e;const n=new Map(Mi(t).map(r=>[r.field,r.type]));return e.map(r=>{if(r.type!=="string")return r;const i=n.get(r.field);return i&&i!=="string"?{...r,type:i}:r})}async function kr(e,t,n={}){const r=n.maxRows??1e4,s={_size:n.pageSize??1e3,...n.extraParams||{}};let a=n.startUrl??Rn(t,s);const c=[];let d=!1,p=!1,g=0,b,y;for(;a;){let C;try{C=await Wt(e,a)}catch(I){if(c.length===0&&!n.startUrl)throw I;b=I instanceof st&&I.status?`stopped after ${c.length} rows: HTTP ${I.status}`:`stopped after ${c.length} rows: ${I?.message??String(I)}`,p=!0,y=a;break}const x=wp(C);c.push(...x.rows),d=d||x.truncated,g+=1,n.onProgress?.(c.length);const k=x.nextUrl!=null?x.nextUrl:x.nextToken!=null?Rn(t,{_next:x.nextToken}):null;k&&c.length<r&&x.rows.length>0?a=k:(p=k!=null&&x.rows.length>0,p&&(y=k??void 0),a=null)}return{rows:c,truncated:d,hasMore:p,pages:g,error:b,nextUrl:y}}function Ip(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function eu(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function tu(e,t,n){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${n}`}async function zi(e,t,n,r){let i;try{i=await e(t,{method:"POST",headers:Ip(r),body:JSON.stringify(n)})}catch(a){throw new st({error:`Couldn't reach ${t} (${a?.message||"network error"}).`},0)}if(i&&i.ok===!1){let a=null;try{a=await i.json()}catch{}throw new st(a&&typeof a=="object"?a:{error:`HTTP ${i.status} for ${t}`},i.status)}const s=await i.json();if(s&&s.ok===!1)throw new st(s,i.status);return s}async function _l(e,t,n,r={}){const i=await zi(e,eu(t,"insert"),{rows:n,return:!0},r.token);return Array.isArray(i?.rows)?i.rows:[]}async function Ap(e,t,n,r,i={}){const s=await zi(e,tu(t,n,"update"),{update:r,return:!0},i.token);return s&&typeof s.row=="object"&&s.row?s.row:Array.isArray(s?.rows)&&s.rows[0]?s.rows[0]:null}async function Cl(e,t,n,r={}){await zi(e,tu(t,n,"delete"),{},r.token)}async function Rp(e,t,n,r={}){const i=await zi(e,eu(t,"upsert"),{rows:n,return:!0},r.token);return Array.isArray(i?.rows)?i.rows:[]}async function Op(e,t){const n=Rn(t,{_extra:"primary_keys"}),r=await Wt(e,n);return Array.isArray(r?.primary_keys)?r.primary_keys:[]}async function nu(e,t){try{const n=await Wt(e,Rn(t,{_extra:"count"}));return{count:typeof n?.count=="number"?n.count:null,truncated:n?.count_truncated===!0}}catch{return{count:null,truncated:!1}}}async function ru(e,t,n={}){const r=n.token?{headers:{Authorization:`Bearer ${n.token}`}}:void 0;try{const i=await e(`${t}/-/versions.json`,r);if(i&&i.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${i.status}`};const s=await i.json(),a=s?.datasette?.version??s?.version??null;let c=null;try{c=(await(await e(`${t}/-/actor.json`,r)).json())?.actor??null}catch{}return{reachable:!0,version:a,actor:c,writable:!!(n.token&&c)}}catch(i){return{reachable:!1,version:null,actor:null,writable:!1,error:i?.message||"unreachable"}}}function On(e,t){return t?(n,r)=>{const i=(r??{}).headers??{};return e(n,{...r??{},headers:{...i,Authorization:`Bearer ${t}`}})}:e}const ki=e=>e.replace(/^https?:\/\//,""),ar="datasette",iu=1e4,su=1e3,Ho=1e4,ou=60;function au(e){e.ui.registerSettings(ar,"Datasette",[{key:"maxImportRows",label:"Max import rows per table",type:"number",default:iu,scope:"workspace",description:"Max rows imported per table. 0 = unlimited."},{key:"pageSize",label:"Page size",type:"number",default:su,scope:"workspace",description:"Rows requested per page hop while paging a table (the instance clamps this to its own max_returned_rows)."},{key:"connectMaxRows",label:"Connected table row cap",type:"number",default:Ho,scope:"workspace",description:"Row cap for a single live connected table."},{key:"retryWaitSeconds",label:"Rate-limit retry wait (seconds)",type:"number",default:ou,scope:"workspace",description:"Wait before resuming an import paused by the instance's rate limiting."}])}function si(e,t,n){const r=typeof e=="number"?e:Number(e);return Number.isFinite(r)&&r>=n?Math.floor(r):t}async function Ni(e){const[t,n,r,i]=await Promise.all([e.settings.get(ar,"maxImportRows"),e.settings.get(ar,"pageSize"),e.settings.get(ar,"connectMaxRows"),e.settings.get(ar,"retryWaitSeconds")]);return{maxImportRows:si(t,iu,0),pageSize:si(n,su,1),connectMaxRows:si(r,Ho,1),retryWaitSeconds:si(i,ou,1)}}function Ui(e){return e===0?Number.MAX_SAFE_INTEGER:e}function Dp(e,t,n){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(n)}`}function qo(e,t,n,r){const i={...e.info??{}};return!i.source&&!i.sourceUrl&&(i.source=`${ki(t)}/${n}/${r}`,i.sourceUrl=Dp(t,n,r)),{...e,info:i}}function lu(e,t){if(!e.has(t))return t;for(let n=2;;n++){const r=`${t} (${n})`;if(!e.has(r))return r}}async function Ko(e,t,n,r={}){if(t.db&&t.table)return[await so(e,t)];const i=[];if(t.db){if(i.push(...await $l(e,t.base,t.db)),r.skipPicker)return i.filter(c=>!c.hidden)}else{const c=await Zc(e,t.base);if(c.length===0)return[];let d=c;if(c.length>1){const p=await yi(c.map(g=>({name:g,size:null})),{title:`${n} from Datasette`,message:`Choose databases on ${ki(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!p)return null;d=p.map(g=>c[g])}for(const p of d)try{i.push(...await $l(e,t.base,p))}catch{}}if(i.length===0)return[];const s=new Set(i.map(c=>c.db)).size>1,a=await yi(i.map(c=>({name:s?`${c.db}/${c.table}`:c.table,size:c.count,detail:s?void 0:c.db,hidden:c.hidden})),{title:`${n} from Datasette`,message:`Choose tables to ${n.toLowerCase()} from ${ki(t.base)}.`,confirmLabel:n});return a?a.map(c=>i[c]):null}const Pp=e=>new Promise(t=>setTimeout(t,e));function Lp(e){const t=globalThis.__eda_resumeDelayMs;return typeof t=="number"&&t>=0?t:e*1e3}function Vo(e,t,n,r){if(!(!e||!t))return{nextUrl:t,loadedRows:n,...r!=null?{totalCount:r}:{}}}const Mp={id:"datasette-import",name:"Datasette Import",type:"importer",version:"0.3.0",description:"Import snapshot tables from any online Datasette instance, database, or single table by URL",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-import.ts"},jp="https://latest.datasette.io/fixtures/facetable";function zp(e){au(e),e.ui.registerTableButton({id:"datasette:refresh-snapshot",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this snapshot from the Datasette table it came from",visible:t=>t.origin?.type==="datasette"&&t.source?.type!=="datasette",onClick:(t,{tableId:n})=>qp(t,n)}),e.ui.registerTableButton({id:"datasette:resume",label:"Resume import",icon:"sync_problem",tooltip:"Import was interrupted — click to resume from where it stopped",danger:!0,visible:t=>t.origin?.type==="datasette"&&t.importResume!=null,onClick:(t,{tableId:n})=>Vp(t,n)}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:n}){const r=n||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${jp}`,"","Import from Datasette");r&&await Sl(t,r)}}),e.ui.registerDropHandler(async(t,n)=>{const r=t.dataTransfer?.getData("text/plain")||"";return Np(r)?(t.preventDefault(),await Sl(n,r),!0):!1})}async function Sl(e,t){try{await Go(e,t)}catch(n){let r;n instanceof st?r=n.status?`Datasette error (${n.status}): ${n.message}`:n.message:r=`Could not import: ${n?.message??n}`,await e.ui.dialogs.alert(r,"Datasette import failed")}}function Np(e){try{const t=Rt(e);return!!(t.db&&t.table)}catch{return!1}}async function Go(e,t,n={}){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const i=await Ni(e),s=Rt(t),c=await Ko(L=>e.backend.fetch(L),s,"Import",{skipPicker:n.skipTablePicker});if(c===null)return;if(c.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const d=[];let p=0;for(const L of c){const U={base:s.base,db:L.db,table:L.table,query:{}},B=await Up(e,r,U);if(B.skipped){p+=1;continue}d.push({tableId:B.tableId,ref:U,overwrite:B.overwrite,knownCount:L.count})}let g=0,b=0;const y=[],C=[],x=[];for(const L of d)try{const U=await Fp(e,L.tableId,L.ref,L.overwrite,L.knownCount,n,i);g+=1,b+=U.rowCount,U.error?C.push(`${L.ref.db}/${L.ref.table} (${U.error})`):(U.hasMore||U.truncated)&&y.push(`${L.ref.db}/${L.ref.table}`)}catch(U){x.push(`${L.ref.db}/${L.ref.table}: ${U?.message??String(U)}`)}const k=Ui(i.maxImportRows),I=n.maxRows!=null?Math.min(n.maxRows,k):k;Hp(e,{imported:g,skipped:p,totalRows:b,capped:y,cap:I,partial:C,failed:x,requested:c.length})}async function Up(e,t,n){const r=`${n.db}/${n.table}`,i={type:"datasette",url:`${n.base}/${encodeURIComponent(n.db)}/${encodeURIComponent(n.table)}`},s=(await e.store.tables.find()).filter(p=>p.workspaceId===t),a=s.find(p=>p.name.toLowerCase()===r.toLowerCase());let c=r;if(a){const p=await e.ui.dialogs.choice(`A table named "${r}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!p||p==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(p==="Overwrite")return await e.store.tables.patch(a.id,{origin:i,updatedAt:Date.now()}),{tableId:a.id,overwrite:!0};c=lu(new Set(s.map(g=>g.name)),r)}const d=Ee();return await e.store.tables.insert({id:d,workspaceId:t,name:c,code:Ve(`${n.db}-${n.table}`),columns:[],view:"table",origin:i,updatedAt:Date.now()}),{tableId:d,overwrite:!1}}async function Fp(e,t,n,r,i,s,a){const c=`${n.db}/${n.table}`,d=b=>e.backend.fetch(b),p=Ui(a.maxImportRows),g=s.maxRows!=null?Math.min(s.maxRows,p):p;It(t,!0);try{let b=[],y=i,C=!1,x=!1,k=[];try{const ye=await ji(d,n);b=ye.columns,y==null&&(y=ye.count,C=ye.countTruncated),x=ye.typed,k=ye.pks??[]}catch{}if(y==null){const ye=await nu(d,n);y=ye.count,C=ye.truncated}const I=y&&y>0&&(!C||g<=y)?Math.min(y,g):0,L=[];let U=!1,B=!1,Y=0,te,W,H;for(;;){const ye=await kr(d,n,{maxRows:Math.max(0,g-L.length),pageSize:a.pageSize,...H?{startUrl:H}:{},onProgress:wn=>{I>0&&It(t,!0,Math.min(1,(L.length+wn)/I))}});if(L.push(...ye.rows),U=U||ye.truncated,Y+=ye.pages,B=ye.hasMore,te=ye.error,W=ye.nextUrl,!ye.error||!ye.nextUrl||L.length>=g)break;const Be=`${a.retryWaitSeconds}s`;if(await e.ui.dialogs.choice(`Import of "${c}" paused after ${L.length.toLocaleString()} rows (${ye.error}). Datasette may be rate-limiting a large import. Wait ${Be} and resume from where it stopped, or cancel and keep the rows imported so far (you can resume later from the table's footer)?`,[`Resume in ${Be}`,"Cancel"],"Import paused — rate limited?")!==`Resume in ${Be}`)break;It(t,!0),e.ui.dialogs.toast(`Resuming "${c}" in ${Be}…`,{kind:"info",title:"Import paused"}),await Pp(Lp(a.retryWaitSeconds)),H=ye.nextUrl,te=void 0,W=void 0}let ie=b.length===0?Mi(L):x?b:Bo(b,L),re={};try{const ye=await Uo(d,n),Be=Fo(ye,ie);ie=Be.columns,re=Be.patch}catch{}re=qo(re,n.base,n.db,n.table);const q=await e.store.tables.findOne(t),K=q?.columns??[],ue=K.length===0;let{columns:ge}=Pi(K,ie,q?.deletedColumns),Te=L;if(s.editColumns&&ue){const ye=await s.editColumns(ge,c);if(ye===null)return{name:c,rowCount:0,hasMore:!1,truncated:!1,pages:Y,count:y,error:te};Te=Bp(Te,ge,ye),ge=ye}const ze=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t});const pt=Vo(te,W,L.length,y),de=k.length>0&&q?.origin?{origin:{...q.origin,pks:k}}:{},Pe=ue?{columns:ge,...re,...de,importResume:pt,updatedAt:ze}:{columns:ge,...re.info?{info:re.info}:{},...de,importResume:pt,updatedAt:ze};await e.store.tables.patch(t,Pe);const Ae=e.store.rows(t);if(r){const ye=await Ae.find();await Ae.bulkRemove(ye.map(Be=>Be.id))}const Ze=Te.map(ye=>({id:Ee(),tableId:t,data:ye,updatedAt:ze}));return await Ae.bulkInsert(Ze),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:Ze.length}),{name:c,rowCount:Ze.length,hasMore:B,truncated:U,pages:Y,count:y,error:te}}finally{It(t,!1)}}function Bp(e,t,n){const r=Po(t,n);return r?e.map(r):e}function Hp(e,t){const n=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,r=`${t.imported} table${t.imported===1?"":"s"}`,i=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${r} (${n});${i} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.partial.length>0){e.ui.dialogs.toast(`Imported ${r} (${n}).${i} ${t.partial.length} loaded partially (stopped early — the server may have rate-limited us): ${t.partial.join(", ")}. Use Refresh to fetch the rest.`,{kind:"warning",title:"Datasette import"});return}if(t.capped.length>0){const s=t.cap<Number.MAX_SAFE_INTEGER?` at ${t.cap.toLocaleString()}`:"";e.ui.dialogs.toast(`Imported ${r} (${n}).${i} ${t.capped.length} capped${s} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${r} (${n}) from Datasette.${i}`,{kind:"success",title:"Datasette import"})}async function qp(e,t){const n=await e.store.tables.findOne(t);if(!(!n?.origin?.url||n.origin.type!=="datasette"))try{const r=await Ni(e);await Kp(e,n,r)}catch(r){const i=r instanceof st?r.message:r?.message??String(r);e.ui.dialogs.toast(`Refresh failed: ${i}`,{kind:"error",title:"Refresh"})}}async function Kp(e,t,n){const r=Rt(t.origin.url),i=g=>e.backend.fetch(g),s=Ui(n.maxImportRows);It(t.id,!0);let a,c=[];try{let g=[],b=null,y=!1,C=!1;try{const de=await ji(i,r);g=de.columns,b=de.count,y=de.countTruncated,C=de.typed}catch{}if(b==null){const de=await nu(i,r);b=de.count,y=de.truncated}const x=b&&b>0&&(!y||s<=b)?Math.min(b,s):0,{rows:k,hasMore:I,truncated:L,error:U,nextUrl:B}=await kr(i,r,{maxRows:s,pageSize:n.pageSize,onProgress:de=>{x>0&&It(t.id,!0,Math.min(1,de/x))}});let Y=g.length===0?Mi(k):C?g:Bo(g,k),te={};try{const de=await Uo(i,r),Pe=Fo(de,Y);Y=Pe.columns,te=Pe.patch}catch{}te=qo(te,r.base,r.db,r.table);const W=t.columns.length===0,H=Pi(t.columns,Y,t.deletedColumns);c=H.newFields;const X=Date.now(),ie=Vo(U,B,k.length,b),re=W?{columns:H.columns,...te,importResume:ie,updatedAt:X}:{columns:H.columns,...te.info?{info:te.info}:{},importResume:ie,updatedAt:X};await e.store.tables.patch(t.id,re);const q=t.origin?.pks??[],K=new Set(Y.map(de=>de.field)),ue=t.columns.map(de=>de.field).filter(de=>!K.has(de)&&!q.includes(de)),ge=(t.deletedColumns??[]).filter(de=>K.has(de)),Te=e.store.rows(t.id),ze=await Te.find(),{data:pt}=Kc({oldRows:ze.map(de=>({data:de.data})),freshRows:k,pks:q,userAddedFields:ue,deletedRemoteFields:ge});await Te.bulkRemove(ze.map(de=>de.id)),await Te.bulkInsert(pt.map(de=>({id:Ee(),tableId:t.id,data:de,updatedAt:X}))),a={rowCount:pt.length,hasMore:I,truncated:L,error:U}}finally{It(t.id,!1)}const d=[];if(a.error)d.push(`partial (${a.error})`);else if(a.hasMore||a.truncated){const g=s<Number.MAX_SAFE_INTEGER?` at ${s.toLocaleString()}`:"";d.push(`capped${g}`)}c.length>0&&d.push(`${c.length} new column${c.length===1?"":"s"}`);const p=d.length?` — ${d.join(", ")}`:"";e.ui.dialogs.toast(`Refreshed ${a.rowCount} rows from ${r.db}/${r.table}${p}.`,{kind:a.error||a.hasMore||a.truncated||c.length>0?"warning":"success",title:"Refresh"}),c.length>0&&Gp(t.id,r,c)}async function Vp(e,t){const n=await e.store.tables.findOne(t),r=n?.importResume;if(!n||!n.origin?.url||!r)return;const i=await Ni(e),s=Ui(i.maxImportRows),a=Rt(n.origin.url),c=x=>e.backend.fetch(x),d=r.loadedRows,p=r.totalCount??null,g=p&&p>0?Math.min(p,s):0;It(t,!0,g>0?Math.min(1,d/g):void 0);let b=0,y;try{const x=await kr(c,a,{startUrl:r.nextUrl,maxRows:Math.max(0,s-d),pageSize:i.pageSize,onProgress:L=>{g>0&&It(t,!0,Math.min(1,(d+L)/g))}});b=x.rows.length;const k=Date.now();await e.store.rows(t).bulkInsert(x.rows.map(L=>({id:Ee(),tableId:t,data:L,updatedAt:k}))),y={error:x.error,nextUrl:x.nextUrl};const I=Vo(x.error,x.nextUrl,d+b,p);await e.store.tables.patch(t,{importResume:I,updatedAt:k})}catch(x){const k=x instanceof st?x.message:x?.message??String(x);e.ui.dialogs.toast(`Couldn't resume ${a.db}/${a.table}: ${k}. Try again later.`,{kind:"error",title:"Resume import"});return}finally{It(t,!1)}const C=d+b;y.error?e.ui.dialogs.toast(`Resumed ${a.db}/${a.table}: +${b} rows (${C} total) — interrupted again (${y.error}). Resume to continue.`,{kind:"warning",title:"Resume import"}):e.ui.dialogs.toast(`Finished ${a.db}/${a.table}: +${b} rows (${C} total).`,{kind:"success",title:"Resume import"})}function Gp(e,t,n){const r=n.join(", "),i=n.length!==1,s=`Refreshing ${t.db}/${t.table} revealed ${n.length} new column${i?"s":""}: ${r}. Review, reorder or hide ${i?"them":"it"} here.`;document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:e,notice:s}}))}const Wp=Object.freeze(Object.defineProperty({__proto__:null,importDatasette:Go,init:zp,meta:Mp},Symbol.toStringTag,{value:"Module"}));var Yp=Object.defineProperty,Xp=Object.getOwnPropertyDescriptor,_r=(e,t,n,r)=>{for(var i=r>1?void 0:r?Xp(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Yp(t,n,i),i};const Jp="https://latest.datasette.io/ephemeral";let wt=class extends ve{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=async e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const n=this.token.trim();if(this.onConnect){this.status="Checking…",this.statusKind="busy";try{await this.onConnect(t,n)}catch(r){this.status=r?.message??String(r),this.statusKind="err";return}}this.finish({url:t,token:n})}}connectedCallback(){super.connectedCallback(),wt.instance=this}disconnectedCallback(){super.disconnectedCallback(),wt.instance===this&&(wt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&ht(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,this.onConnect=e.onConnect,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return $`
      <dialog @cancel=${this.onCancel} @keydown=${dt}>
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
                placeholder="e.g. ${Jp}"
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
    `}};wt.instance=null;wt.styles=[ut,$e`
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
    `];_r([N()],wt.prototype,"url",2);_r([N()],wt.prototype,"token",2);_r([N()],wt.prototype,"status",2);_r([N()],wt.prototype,"statusKind",2);wt=_r([Ce("datasette-connect-dialog")],wt);class Qp extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function cu(e){return`datasette:token:${e}`}function Zp(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}function em(e,t,n){const r=e.source,i=r?.config??{},s={base:i.base,db:i.db,table:i.table,query:{}},a=Array.isArray(i.pks)&&i.pks.length>0?i.pks:["rowid"],c=r?.writable===!0,d=i.maxRows;let p=null;function g(){return d!=null?Promise.resolve(d):(p||(p=n?Ni(n).then(H=>H.connectMaxRows):Promise.resolve(Ho)),p)}const b=i.pollIntervalMs??0,y=(H,X)=>t.backend.fetch(H,X);async function C(){const X=(await t.settings.findOne(cu(i.base)))?.value;return typeof X=="string"&&X.length>0?X:void 0}const x=async(H,X)=>On(y,await C())(H,X);function k(H){return{id:kp(H,a)??Ee(),tableId:e.id,data:H,updatedAt:Date.now()}}function I(H){if(!c)throw new Qp(H)}function L(H){const X={};for(const[ie,re]of Object.entries(H))a.includes(ie)||(X[ie]=re);return X}const U=new Set;let B=[],Y=!1,te=null;function W(){return te||(te=(async()=>{try{const{rows:H}=await kr(x,s,{maxRows:await g()});B=H.map(k),Y=!0;for(const X of U)X(B);return B}finally{te=null}})(),te)}return{async find(H){const X=Y?B:await W();return!H||Object.keys(H).length===0?X:X.filter(ie=>Zp(ie,H))},async findOne(H){return(Y?B:await W()).find(ie=>ie.id===H)??null},async insert(H){I("insert");const[X]=await _l(x,s,[H.data]),ie=k(X??H.data);return t.events.emit("row:created",{tableId:e.id,row:ie}),W(),ie},async bulkInsert(H){if(H.length===0)return[];I("insert");const X=await _l(x,s,H.map(re=>re.data)),ie=(X.length?X:H.map(re=>re.data)).map(k);return W(),ie},async upsert(H){I("upsert");const[X]=await Rp(x,s,[H.data]),ie=k(X??H.data);return W(),ie},async patch(H,X){I("update");const ie=X.data,re=L(ie??{}),q=await Ap(x,s,H,re),K=k(q??{...ie??{}});return t.events.emit("row:updated",{tableId:e.id,row:K,prev:K}),W(),K},async remove(H){I("delete"),await Cl(x,s,H),t.events.emit("row:deleted",{tableId:e.id,rowId:H}),W()},async bulkRemove(H){if(H.length!==0){I("delete");for(const X of H)await Cl(x,s,X);W()}},subscribe(H){U.add(H),Y?H(B):W();let X=null;return b>0&&(X=setInterval(()=>void W(),b)),()=>{U.delete(H),X&&clearInterval(X)}},async refresh(){await W()}}}const tm='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',nm={id:"datasette-connect",name:"Datasette Connect",type:"source",version:"0.3.0",description:"Connect a live, editable table on any Datasette instance — rows are never stored locally",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-connect.ts"};function rm(e){au(e),e.ui.registerConnector({id:"datasette",label:"Datasette",icon:tm,order:10,description:"A live, editable table on any Datasette instance",connect:t=>sm(t)}),e.ui.registerTableButton({id:"datasette:refresh-live",label:"Refresh",icon:"refresh",tooltip:"Re-read this live table from its Datasette instance",visible:t=>t.source?.type==="datasette",onClick:(t,{tableId:n})=>im(t,n)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:(t,n)=>em(t,n,e)})}async function im(e,t){if((await e.store.tables.findOne(t))?.source?.type==="datasette")try{const r=e.store.rows(t);typeof r.refresh=="function"&&await r.refresh();const i=await r.find();e.ui.dialogs.toast(`Reloaded ${i.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}catch(r){const i=r instanceof st?r.message:r?.message??String(r);e.ui.dialogs.toast(`Refresh failed: ${i}`,{kind:"error",title:"Refresh"})}}async function sm(e){const t=wt.instance??om(),n=(i,s)=>e.backend.fetch(i,s),r=await t.open({initialUrl:"https://datasette.io",async onTest(i,s){const a=Rt(i),c=await ru(n,a.base,{token:s||void 0});if(a.db&&a.table){await so(On(n,s||void 0),a);const p=c.version?` (Datasette ${c.version})`:"";return c.writable?`Reachable${p} — table found, signed in, read-write.`:`Reachable${p} — table found, read-only (no token / not authenticated).`}if(!c.reachable)return`Unreachable: ${c.error??"no response"}`;const d=c.version?` (Datasette ${c.version})`:"";return c.writable?`Reachable${d} — signed in, read-write.`:`Reachable${d} — read-only (no token / not authenticated).`},async onConnect(i,s){const a=Rt(i);a.db&&a.table&&await so(On(n,s||void 0),a)}});if(r)try{await uu(e,r.url,r.token)}catch(i){const s=i instanceof st?i.message:i?.message??String(i);await e.ui.dialogs.alert(s,"Connect Datasette failed")}}function om(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function uu(e,t,n){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const i=Rt(t),s=(b,y)=>e.backend.fetch(b,y),a=On(s,n||void 0),c=await ru(s,i.base,{token:n||void 0});n&&await e.store.settings.upsert({name:cu(i.base),value:n});let d;try{d=await Ko(a,i,"Connect")}catch(b){const y=b instanceof st?b.message:b?.message??String(b);throw new Error(`Couldn't read tables from ${ki(i.base)}: ${y}`)}if(d===null)return;if(d.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const p=[];for(const b of d){const y=await am(e,r,i.base,b,c.writable,n);y!==null&&p.push({tableId:y,c:b})}if(p.length===0)return;const g=c.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${p.length} live table${p.length===1?"":"s"} from Datasette (${g}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:b,c:y}of p)lm(e,b,i.base,y,n)}async function am(e,t,n,r,i,s){const a=(await e.store.tables.find()).filter(y=>y.workspaceId===t);let c=`${r.db}/${r.table}`,d=a.find(y=>{const C=y.source?.config;return y.source?.type==="datasette"&&C?.base===n&&C?.db===r.db&&C?.table===r.table});if(!d){const y=a.find(C=>C.name.toLowerCase()===c.toLowerCase());if(y){const C=await e.ui.dialogs.choice(`A table named "${c}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Connect — table already exists");if(!C||C==="Skip")return null;C==="Overwrite"?d=y:c=lu(new Set(a.map(x=>x.name)),c)}}let p=r.pks??[];if(p.length===0){const y=On((C,x)=>e.backend.fetch(C,x),s||void 0);try{p=await Op(y,{base:n,db:r.db,table:r.table,query:{}})}catch{p=[]}}const g=d?.id??Ee(),b={...d??{},id:g,workspaceId:t,name:c,code:Ve(`${r.db}-${r.table}`),columns:d?.columns??[],view:d?.view??"table",source:{type:"datasette",writable:i,config:{base:n,db:r.db,table:r.table,pks:p}},updatedAt:Date.now()};return d?await e.store.tables.upsert(b):await e.store.tables.insert(b),g}async function lm(e,t,n,r,i){const s={base:n,db:r.db,table:r.table,query:{}},a=On((c,d)=>e.backend.fetch(c,d),i||void 0);try{let c=[],d=!1;try{const k=await ji(a,s);c=k.columns,d=k.typed}catch{}const{rows:p}=await kr(a,s,{maxRows:50,pageSize:50}),g=c.length===0?Mi(p):d?c:Bo(c,p);if(g.length===0)return;const b=await e.store.tables.findOne(t);if(!b)return;const y=b.source?.config?.pks??[];let C=g.map(k=>y.includes(k.field)?{...k,unique:!0,notnull:!0}:k),x={};try{const k=await Uo(a,s),I=Fo(k,C);C=I.columns,x=I.patch}catch{}x=qo(x,s.base,r.db,r.table),await e.store.tables.patch(t,{columns:C,...x,updatedAt:Date.now()})}catch{}}const cm=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:uu,init:rm,meta:nm},Symbol.toStringTag,{value:"Module"})),um={id:"url-source",name:"URL Reference",type:"source",version:"0.1.0",description:'Backs a table with a live read-only fetch of a plain CSV or JSON URL — a "reference" table whose rows are never persisted locally.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/url-source.ts"};function dm(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"url",create:du}),e.ui.registerTableButton({id:"url-source:refresh",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this reference from its source URL",visible:t=>t.source?.type==="url",onClick:async(t,{tableId:n})=>{try{const r=t.store.rows(n);typeof r.refresh=="function"&&await r.refresh(),t.ui.dialogs.toast("Reference refreshed.",{kind:"success",title:"Refresh"})}catch(r){t.ui.dialogs.toast(`Refresh failed: ${r.message}`,{kind:"error",title:"Refresh"})}}})}class un extends Error{constructor(t){super(`This is a reference (read-only) table — ${t} is not permitted. Import a copy to edit.`),this.name="ReadOnlyReferenceError"}}function hm(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}const El=5e4;function fm(e){return e.ok===!0&&Array.isArray(e.rows)}function pm(e,t){if(typeof e!="object"||e===null||Array.isArray(e))return null;const n=e;let r;try{r=new URL(t)}catch{return null}for(const i of["next_url","nextUrl","next"]){const s=n[i];if(typeof s!="string")continue;const a=s.trim();if(a!==""){if(/^(https?:\/\/|[/?])/i.test(a))try{const c=new URL(a,t);if(c.origin!==r.origin)continue;return c.toString()}catch{continue}if(i==="next"&&fm(n))return`${r.origin}${r.pathname}?_next=${encodeURIComponent(a)}`}}return null}function mm(e){const t=n=>typeof n=="object"&&n!==null&&!Array.isArray(n);if(Array.isArray(e))return e.filter(t);if(t(e)){for(const n of["rows","records","data"]){const r=e[n];if(Array.isArray(r))return r.filter(t)}for(const n of Object.values(e))if(Array.isArray(n))return n.filter(t)}return[]}function du(e,t){const n=e.source?.config??{},r=typeof n.url=="string"?n.url:"",i=n.format==="json"?"json":"csv",s=new Set;let a=[],c=!1,d=null;function p(x){return x.map((k,I)=>({id:`url:${I}`,tableId:e.id,data:k,updatedAt:0}))}async function g(x){let k;try{k=await t.backend.fetch(x)}catch(I){throw new Error(`Could not reach ${r}: ${I?.message??String(I)}`)}if(!k.ok)throw new Error(`Could not load ${r}: HTTP ${k.status} ${k.statusText}`);try{return await Ic(k)}catch(I){throw new Error(`Could not read response from ${r}: ${I?.message??String(I)}`)}}async function b(x){const k=To(x);let I=await g(k);if(Ec(I)){const L=Tc(k);L&&(I=await g(L))}try{if(i==="json"){const L=JSON.parse(I);return{records:mm(L),nextUrl:pm(L,k)}}return{records:Mn(I).rows,nextUrl:null}}catch(L){throw new Error(`Could not parse ${i.toUpperCase()} from ${r}: ${L?.message??String(L)}`)}}async function y(){if(!r)throw new Error("This reference table has no URL configured.");const x=[];let k=r;const I=new Set;for(;k&&x.length<El&&!I.has(k);){I.add(k);const L=await b(k);x.push(...L.records),k=L.records.length>0?L.nextUrl:null}return x.slice(0,El)}function C(){return d||(d=(async()=>{try{const x=await y();a=p(x),c=!0;for(const k of s)k(a);return a}finally{d=null}})(),d)}return{async find(x){const k=c?a:await C();return!x||Object.keys(x).length===0?k:k.filter(I=>hm(I,x))},async findOne(x){return(c?a:await C()).find(I=>I.id===x)??null},async insert(){throw new un("insert")},async bulkInsert(){throw new un("insert")},async upsert(){throw new un("upsert")},async patch(){throw new un("update")},async remove(){throw new un("delete")},async bulkRemove(){throw new un("delete")},subscribe(x){return s.add(x),c?x(a):C(),()=>{s.delete(x)}},async refresh(){c=!1,a=[],await C()}}}const gm=Object.freeze(Object.defineProperty({__proto__:null,ReadOnlyReferenceError:un,createUrlCollection:du,init:dm,meta:um},Symbol.toStringTag,{value:"Module"})),bm={id:"sql-export",name:"SQL Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-export.ts"};function wm(){}async function hu(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const n=(await e.store.tables.find()).filter(i=>i.workspaceId===t),r=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${n.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const i of n){const s=await e.store.rows(i.id).find();r.push(pu(i,s),"")}return r.push("COMMIT;",""),r.join(`
`)}function fu(e,t){return["-- easyDBAccess table export",`-- table:    ${e.name}`,`-- exported: ${new Date().toISOString()}`,"","BEGIN;","",pu(e,t),"","COMMIT;",""].join(`
`)}function pu(e,t){const n=oo(e.code||e.name||`table_${e.id}`),r=['  "__id" TEXT PRIMARY KEY',...e.columns.map(s=>`  ${ym(s)}`)],i=[`DROP TABLE IF EXISTS "${n}";`,`CREATE TABLE "${n}" (`,r.join(`,
`),");"];if(t.length>0){const a=["__id",...e.columns.map(c=>c.field)].map(c=>`"${oo(c)}"`).join(", ");for(const c of t){const d=[Tl(c.id),...e.columns.map(p=>Tl(c.data[p.field],p.type))];i.push(`INSERT INTO "${n}" (${a}) VALUES (${d.join(", ")});`)}}return i.join(`
`)}function ym(e){const t=[`"${oo(e.field)}"`,vm(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function vm(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function Tl(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const n=xm(e);return n===null?"NULL":oi(n)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?oi(e.toISOString()):oi(typeof e=="string"?e:JSON.stringify(e))}function xm(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?Il(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const n=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(n)return`${n[1]}${n[2]}${n[3]}`;const r=new Date(t);return Number.isFinite(r.getTime())?Il(r):null}return null}function Il(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),n=String(e.getUTCMonth()+1).padStart(2,"0"),r=String(e.getUTCDate()).padStart(2,"0");return`${t}${n}${r}`}function oi(e){return`'${e.replace(/'/g,"''")}'`}function oo(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const $m=Object.freeze(Object.defineProperty({__proto__:null,init:wm,meta:bm,serializeTableAsSql:fu,serializeWorkspaceAsSql:hu},Symbol.toStringTag,{value:"Module"})),mu=/\$((?:input|filter)[.:])?([A-Za-z_][A-Za-z0-9_]*)/g;function Al(...e){const t=new Set;for(const n of e)if(n)for(const r of n.matchAll(mu))t.add(r[2]);return[...t]}const Wo=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Tn=e=>Wo(e).replace(/"/g,"&quot;").replace(/'/g,"&#39;");function km(e){return typeof e=="boolean"?e:typeof e=="number"?e!==0:typeof e=="string"?["true","1","yes","y","t","on"].includes(e.trim().toLowerCase()):!1}function _m(e,t,n,r,i){const s=r?.type??"string",a=Wo(r?.label||e),c=`class="eda-input" data-eda-row="${Tn(n)}" data-eda-field="${Tn(e)}" data-eda-type="${Tn(s)}"`,d=i?" disabled":"";let p;if(s==="boolean")p=`<input type="checkbox" ${c}${km(t)?" checked":""}${d} />`;else{const g=s==="number"?"number":"text",b=t==null?"":Tn(String(t));p=`<input type="${g}" ${c} value="${b}"${d} />`}return`<label class="eda-input-field" title="${a}">${p}<span class="eda-input-label">${a}</span></label>`}function Cm(e,t){if(t==null||t==="")return"";const n=String(t),r=Tn(e),i=Tn(n);return`<button type="button" class="eda-filter-pill" data-eda-filter-field="${r}" data-eda-filter-value="${i}" title="Filter by ${r}: ${i}">${Wo(n)}</button>`}function Sm(e,t,n,r={}){return e.replace(mu,(i,s,a)=>{const c=n[a];if(!c)return"";const d=t.data[c];if(!s)return d==null?"":String(d);if(s.startsWith("filter"))return Cm(c,d);const p=r.columns?.get(c),g=r.readonly===!0||!!p?.script?.trim();return _m(c,d,t.id,p,g)})}function Rl(e){return e==null||e===""}function Em(e,t){let n=null;for(const r of t){if(!r.script?.trim())continue;const i=zo(r.script,e.data);n??={...e.data},n[r.field]=i.ok?i.value:`⚠ ${i.label}`}return n?{...e,data:n}:e}function Tm(e,t){return t.some(n=>n.script?.trim())?e.map(n=>Em(n,t)):e}function Ol(e,t){const n=Object.entries(t).filter(([,r])=>r!=null&&String(r).trim()!=="");return n.length===0?e:e.filter(r=>n.every(([i,s])=>vi(r.data[i],s)))}function gu(e,t){return e.exact===!0&&!e.negate&&e.term.toLowerCase()===t.toLowerCase()}function Im(e,t){const n=$r(e??"");return n.some(r=>gu(r,t))||n.push({term:t,negate:!1,exact:!0}),gr(n)}function Am(e,t){const n=$r(e??"").filter(r=>!gu(r,t));return gr(n)}function Rm(e,t,n=!0){if(!t)return e;const r=n?1:-1;return[...e].sort((i,s)=>{const a=i.data[t],c=s.data[t],d=Rl(a),p=Rl(c);if(d||p)return d===p?0:d?1:-1;const g=Number(a),b=Number(c);return!Number.isNaN(g)&&!Number.isNaN(b)?(g-b)*r:String(a).localeCompare(String(c),void 0,{numeric:!0,sensitivity:"base"})*r})}function bu(e,t){const n=Ol(e,t.filters??{}),r=Ol(n,t.pillFilters??{});return Rm(r,t.sortColumn,t.sortAsc??!0)}function Om(e){return!!e&&e.trim().length>0}function Dm(e,t){return t==="raw"||t==="structure"?e.columns:e.columns.filter(n=>n.hidden!==!0)}function Pm(e,t){return t==="raw"||t==="structure"?e:{...e,columns:Dm(e,t)}}function Lm(e,t,n){return n==="structure"?[]:n==="raw"?t:bu(t,{filters:e.filters??{},sortColumn:e.sortColumn,sortAsc:e.sortAsc})}function Yo(e,t){const n=e.columns.map(i=>i.field),r=e.source!=null;return{name:e.name,title:e.title,columns:e.columns,view:e.view,windowGeometry:e.windowGeometry,sortColumn:e.sortColumn,sortAsc:e.sortAsc,filters:e.filters,labelColumn:e.labelColumn,deletedColumns:e.deletedColumns,info:e.info,source:e.source,origin:e.origin,rows:r?[]:t.map(i=>{const s={};for(const a of n)s[a]=i.data[a];return s})}}const Mm={id:"dump-export",name:"Dump Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file, and — per table — CSV/JSON/SQL with a Raw vs. Visible vs. Structure Only choice.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/dump-export.ts"};function jm(e){e.ui.registerFooterButton({id:"export:menu",label:"Export",icon:"download",tooltip:"Export the current workspace (JSON or SQL)",onClick:async(t,n)=>{const r=t.workspaceId();if(!r)return;const{AnchoredMenu:i}=await at(async()=>{const{AnchoredMenu:c}=await Promise.resolve().then(()=>mr);return{AnchoredMenu:c}},void 0),s=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),a=await i.open(s,[{id:"json",label:"JSON dump (.db.json)",icon:"data_object"},{id:"sql",label:"SQL script (.sql)",icon:"storage"}]);if(a)try{if(a==="json"){const c=await Fi(t);await t.backend.saveFile(`workspace-${r}.db.json`,c,"application/json")}else if(a==="sql"){const c=await hu(t);await t.backend.saveFile(`workspace-${r}.sql`,c,"application/sql")}}catch(c){t.ui.dialogs.toast(`Export failed: ${c.message}`,{kind:"error",title:"Export"})}}}),e.ui.registerTableButton({id:"table-export:menu",label:"Export",icon:"file_download",tooltip:"Export this table as CSV, JSON, or SQL",onClick:async(t,n)=>{const{AnchoredMenu:r}=await at(async()=>{const{AnchoredMenu:p}=await Promise.resolve().then(()=>mr);return{AnchoredMenu:p}},void 0),i=n.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"csv",label:"CSV (.csv)",icon:"table_chart"},{id:"json",label:"JSON (.table.json)",icon:"data_object"},{id:"sql",label:"SQL (.sql)",icon:"storage"}]);if(!s)return;const a=await t.store.tables.findOne(n.tableId);if(!a)return;const c=await t.ui.dialogs.choice(`Export "${a.name}" as ${s.toUpperCase()} — which rows/columns?`,["Visible Data","Raw Data","Structure Only"],"Export table");if(!c)return;const d=c==="Visible Data"?"visible":c==="Raw Data"?"raw":"structure";try{const p=await t.store.rows(a.id).find(),g=Pm(a,d),b=Lm(a,p,d),y=Ve(a.code||a.name||"table"),C=d!=="structure"&&a.source!=null&&p.length===0;if(s==="csv")C&&t.ui.dialogs.toast(`"${a.name}" is a live table with no local rows — exporting column definitions only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${y}.csv`,Do(g,b),"text/csv");else if(s==="json"){const x=JSON.stringify(Yo(g,b),null,2);await t.backend.saveFile(`${y}.table.json`,x,"application/json")}else s==="sql"&&(C&&t.ui.dialogs.toast(`"${a.name}" is a live table with no local rows — exporting the CREATE TABLE only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${y}.sql`,fu(g,b),"application/sql"))}catch(p){t.ui.dialogs.toast(`Export failed: ${p.message}`,{kind:"error",title:"Export"})}}})}async function Fi(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const n=(await e.store.tables.find()).filter(a=>a.workspaceId===t),r=(await e.store.viewTemplates.find()).filter(a=>a.workspaceId===t),i=(await e.store.viewInstances.find()).filter(a=>a.workspaceId===t),s={workspaceId:t,exportedAt:Date.now(),tables:[],viewTemplates:r,viewInstances:i};for(const a of n){const c=await e.store.rows(a.id).find();s.tables.push({name:a.name,columns:a.columns,rows:c.map(d=>d.data),...a.title?{title:a.title}:{},...a.windowGeometry?{windowGeometry:a.windowGeometry}:{},...a.sortColumn?{sortColumn:a.sortColumn,sortAsc:a.sortAsc??!0}:{},...a.filters?{filters:a.filters}:{},...a.labelColumn?{labelColumn:a.labelColumn}:{},...a.info?{info:a.info}:{},...a.deletedColumns?{deletedColumns:a.deletedColumns}:{},...a.readonly?{readonly:!0}:{},...a.source?{source:a.source}:{},...a.origin?{origin:a.origin}:{}})}return JSON.stringify(s,null,2)}const zm=Object.freeze(Object.defineProperty({__proto__:null,init:jm,meta:Mm,serializeWorkspace:Fi},Symbol.toStringTag,{value:"Module"})),Nm={id:"gist-sync",name:"Gist Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/gist-sync.ts"},Um="gist:",Dl='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>';function Fm(e){e.ui.registerSettings("gist-sync","Gist Sync",[{key:"user",label:"GitHub user",type:"string",scope:"workspace",description:"GitHub username that owns the gist."},{key:"gist_id",label:"Gist ID",type:"string",scope:"workspace",description:"Leave empty to create a new gist on the first Push."},{key:"gist_token",label:"GitHub token (PAT)",type:"secret",scope:"user",description:'Personal access token with the "gist" scope. Stored on this device only (not synced).',help:'A classic token with the single "gist" scope is enough — nothing else is needed and nothing else should be granted. Give it an expiry you are happy with; the sync stops working when it lapses and you paste a new one here. Keep the value in the secrets store (General tab) and reference it, so it is never written into a synced setting.',helpUrl:"https://github.com/settings/tokens/new?scopes=gist&description=easyDBAccess",helpLinkLabel:"Create a token on GitHub"}]),e.ui.registerFooterButton({id:"gist-sync:menu",label:"Gist",icon:Dl,tooltip:"Gist sync — push, pull, share…",onClick:async(t,n)=>{const{AnchoredMenu:r}=await at(async()=>{const{AnchoredMenu:a}=await Promise.resolve().then(()=>mr);return{AnchoredMenu:a}},void 0),i=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"push",label:"Push",icon:"cloud_upload"},{id:"pull",label:"Pull",icon:"cloud_download"},{id:"share",label:"Share",icon:"share"},{id:"view",label:"View gist",icon:"open_in_new"}]);if(s)try{if(s==="push"||s==="pull"){const a=await r.open(i,[{id:"all",label:"Everything",icon:"sync"},{id:"data",label:"Data only (tables + rows)",icon:"table_rows"},{id:"settings",label:"Settings only (views + settings)",icon:"tune"}]);if(!a)return;const c=a;s==="push"?await Gm(t,c):await yu(t,c)}else s==="share"?await Km(t):s==="view"&&await Vm(t)}catch(a){t.ui.dialogs.toast(`Gist ${s} failed: ${a.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerTableButton({id:"gist-sync:table",label:"Gist",icon:Dl,tooltip:"Gist sync for this table — push, pull, view file",onClick:async(t,n)=>{const{AnchoredMenu:r}=await at(async()=>{const{AnchoredMenu:a}=await Promise.resolve().then(()=>mr);return{AnchoredMenu:a}},void 0),i=n.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"push",label:"Push this table",icon:"cloud_upload"},{id:"pull",label:"Pull this table",icon:"cloud_download"},{id:"view",label:"View gist file",icon:"open_in_new"}]);if(s)try{s==="push"?await Wm(t,n.tableId):s==="pull"?await Ym(t,n.tableId):s==="view"&&await Xm(t,n.tableId)}catch(a){t.ui.dialogs.toast(`Gist ${s} failed: ${a.message}`,{kind:"error",title:"Gist sync"})}}})}async function Bm(e){const t=new URLSearchParams(location.hash.replace(/^#/,"")).get("gist");if(!t)return;history.replaceState(null,"",location.pathname+location.search);let n;try{n=atob(t)}catch{return}const r=Hm(n);if(!r){await e.ui.dialogs.alert("The shared gist link is invalid.","Gist sync");return}await e.ui.dialogs.confirm(`Load shared workspace from gist ${r.gistId||"(new)"} (owner: ${r.user})?

This pulls its tables into the current workspace.`,"Gist sync")&&(await Xo(e,r),await yu(e))}async function wu(e){const t=e.workspaceId();return`${Um}${t??"default"}`}async function Cr(e){const[t,n,r]=await Promise.all([e.settings.get("gist-sync","user"),e.settings.get("gist-sync","gist_id"),e.settings.get("gist-sync","gist_token")]);if(t&&r)return{user:t,gistId:n??"",token:r};const s=(await e.store.settings.findOne(await wu(e)))?.value;if(s?.user&&s?.token){const a={user:s.user,gistId:s.gistId??"",token:s.token};return await Xo(e,a),a}return null}async function Xo(e,t){await e.settings.set("gist-sync","user",t.user),await e.settings.set("gist-sync","gist_id",t.gistId),await e.settings.set("gist-sync","gist_token",t.token),await e.store.settings.upsert({name:await wu(e),value:t})}function Hm(e){const t={};for(const n of e.split(";")){const r=n.indexOf("=");if(r<0)continue;const i=n.slice(0,r).trim(),s=n.slice(r+1).trim();i&&(t[i]=s)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function Jo(e){const t=await Cr(e);return t||(e.ui.dialogs.toast("Add your GitHub user and token in Settings → Gist Sync, then try again.",{kind:"warning",title:"Gist sync"}),e.ui.openSettings(),null)}function qm(e){return`user=${e.user};gist_id=${e.gistId};gist_token=${e.token}`}async function Km(e){const t=await Cr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("Configure a gist and Push first — there is nothing to share yet.","Gist sync");return}const r=`${location.origin+location.pathname}#gist=${encodeURIComponent(btoa(qm(t)))}`,{GistShareDialog:i}=await at(async()=>{const{GistShareDialog:s}=await import("./gist-share-dialog-DIeQUEJG.js");return{GistShareDialog:s}},[]);await i.open(r)}async function Vm(e){const t=await Cr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist configured yet — Push first.","Gist sync");return}window.open(`https://gist.github.com/${t.user}/${t.gistId}`,"_blank","noopener")}async function Gm(e,t="all"){const n=await Jo(e);if(!n)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=t!=="settings",s=t!=="data",a=(await e.store.tables.find()).filter(k=>k.workspaceId===r);if(i&&a.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const c=1e8,d=1e7,p={},g=[],b=[];if(i)for(const k of a){const I=k.source!=null?[]:await e.store.rows(k.id).find(),L=JSON.stringify(Yo(k,I),null,2),U=`${k.name} (${(L.length/1e6).toFixed(2)} MB)`;L.length>c?g.push(U):L.length>d&&b.push(U),p[`${Ve(k.name)}.table.json`]={content:L}}if(g.length>0||b.length>0){const k=[];if(g.length>0&&k.push(`Over Gist's 100 MB per-file limit — GitHub will REJECT these:
${g.join(`
`)}`),b.length>0&&k.push(`Large (over 10 MB) — Gist sync will be slow and less reliable:
${b.join(`
`)}`),!await e.ui.dialogs.confirm(`${k.join(`

`)}

To reduce size: remove unnecessary columns, limit the number of rows, or mark the table no-persist/no-sync.

Push anyway?`,"Gist size warning"))return}if(s){const k=(await e.store.viewTemplates.find()).filter(U=>U.workspaceId===r),I=(await e.store.viewInstances.find()).filter(U=>U.workspaceId===r),L=(await e.store.settings.find()).map(U=>({name:U.name,value:U.value}));p["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1",viewTemplates:k,viewInstances:I,settings:L},null,2)}}let y;if(n.gistId){const k=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:p,description:`easyDBAccess workspace: ${r}`})});if(!k.ok)throw new Error(await br(k));y=await k.json()}else{const k=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:p})});if(!k.ok)throw new Error(await br(k));y=await k.json(),n.gistId=y.id,await Xo(e,n)}const C=y.html_url??`https://gist.github.com/${n.user}/${y.id}`,x=t==="settings"?"settings":t==="data"?`${a.length} table${a.length===1?"":"s"} (data only)`:`${a.length} table${a.length===1?"":"s"}`;e.ui.dialogs.toast(`Pushed ${x}.  ${C}`,{kind:"success",title:"Gist sync"})}async function yu(e,t="all"){const n=t!=="settings",r=t!=="data",i=await Jo(e);if(!i||!i.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const s=e.workspaceId();if(!s)throw new Error("no active workspace");const a=await fetch(`https://api.github.com/gists/${i.gistId}`,{headers:{Authorization:`Bearer ${i.token}`,Accept:"application/vnd.github+json"}});if(!a.ok)throw new Error(await br(a));const c=await a.json(),d=Object.entries(c.files).filter(([U])=>U.endsWith(".table.json")&&!U.startsWith("_easydb"));if(n&&d.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const p=(await e.store.tables.find()).filter(U=>U.workspaceId===s),g=new Map(p.map(U=>[U.name.toLowerCase(),U]));let b=0;const y=[],C=new Map;if(n){const{TopProgress:U}=await at(async()=>{const{TopProgress:Y}=await import("./top-progress-CiAVYzRN.js");return{TopProgress:Y}},[]),B=U.begin("Pulling from gist…");try{for(const[Y,[te,W]]of d.entries())try{const H=await _i(W),X=JSON.parse(H);if(!X.name||!Array.isArray(X.columns))throw new Error("unexpected file shape (missing name/columns)");let ie;const re=g.get(X.name.toLowerCase());if(re){if(ie=await e.store.tables.patch(re.id,{title:X.title,columns:X.columns,...ao(X),updatedAt:Date.now()}),ie.source==null){const q=e.store.rows(re.id),K=await q.find();await q.bulkRemove(K.map(ue=>ue.id))}}else ie=await e.store.tables.insert({id:Ee(),workspaceId:s,name:X.name,title:X.title,code:Ve(X.name),columns:X.columns,view:X.view??"table",...ao(X),updatedAt:Date.now()});if(ie.source==null){const q=(X.rows??[]).map(K=>({id:Ee(),tableId:ie.id,data:K,updatedAt:Date.now()}));await e.store.rows(ie.id).bulkInsert(q)}C.set(X.name,ie.id),b++}catch(H){y.push({file:te,error:H.message})}finally{B.fraction((Y+1)/d.length)}}finally{B.done()}}let x=0,k="",I=null;const L=r?c.files["_easydb.workspace.json"]:void 0;if(L)try{const U=await _i(L),B=JSON.parse(U),Y=B.viewTemplates??[],te=B.viewInstances??[],W=B.settings??[];I=new Set(te.map(X=>X.id));const H=await Fc(e.store.viewTemplates,s,Y);for(const X of te){let ie;if(X.tableName&&(ie=C.get(X.tableName)??g.get(X.tableName)?.id),ie??=X.tableId,!ie)continue;const re=H.get(X.templateId)??X.templateId;await e.store.viewInstances.upsert({...X,workspaceId:s,tableId:ie,templateId:re}),x++}for(const X of W)await e.store.settings.upsert(X)}catch(U){k=`Workspace metadata import failed: ${U.message}`}if(y.length>0){const U=y.map(B=>`• ${B.file}: ${B.error}`).join(`
`);e.ui.dialogs.toast(`Pulled ${b} of ${d.length} tables. ${y.length} failed:
${U}${k?`
${k}`:""}`,{kind:"warning",title:"Gist sync"})}else{const U=x>0?` (+${x} views)`:"",B=t==="settings"?`Pulled settings${U}.`:`Pulled ${b} table${b===1?"":"s"}.${U}`;e.ui.dialogs.toast(B,{kind:"success",title:"Gist sync"}),k&&e.ui.dialogs.toast(k,{kind:"warning",title:"Gist sync"})}y.length===0&&await vu(e,s,{tableNames:n?new Set([...C.keys()].map(U=>U.toLowerCase())):null,viewInstanceIds:I}),document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}function Pl(e,t=8){const n=e.slice(0,t).map(i=>`• ${i}`),r=e.length-n.length;return[...n,...r>0?[`• …and ${r} more`]:[]].join(`
`)}async function vu(e,t,n){const r=n.tableNames?(await e.store.tables.find()).filter(d=>d.workspaceId===t&&!n.tableNames.has(d.name.toLowerCase())):[],i=n.viewInstanceIds?(await e.store.viewInstances.find()).filter(d=>d.workspaceId===t&&!n.viewInstanceIds.has(d.id)):[];if(r.length===0&&i.length===0)return;const s=[];if(r.length>0&&s.push(`${r.length} table${r.length===1?"":"s"}:
`+Pl(r.map(d=>d.name))),i.length>0&&s.push(`${i.length} view${i.length===1?"":"s"}:
`+Pl(i.map(d=>d.name))),!await e.ui.dialogs.confirm(`The gist does not have these local objects:

${s.join(`

`)}

Delete them, so this workspace matches the gist? A table goes with its rows. Keep them if this is local work you have not pushed yet.`,"Delete objects missing from the pull?"))return;for(const d of i)await e.store.viewInstances.remove(d.id);const{deleteTable:c}=await at(async()=>{const{deleteTable:d}=await Promise.resolve().then(()=>fb);return{deleteTable:d}},void 0);for(const d of r)await c(d.id);e.ui.dialogs.toast(`Deleted ${r.length} table${r.length===1?"":"s"} and ${i.length} view${i.length===1?"":"s"}.`,{kind:"success",title:"Gist sync"})}async function Wm(e,t){const n=await Jo(e);if(!n)return;if(!n.gistId){await e.ui.dialogs.alert("No gist yet — use the main Gist button to Push the whole workspace first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const i=r.source!=null?[]:await e.store.rows(t).find(),s=JSON.stringify(Yo(r,i),null,2),a={[`${Ve(r.name)}.table.json`]:{content:s}},c=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:a})});if(!c.ok)throw new Error(await br(c));e.ui.dialogs.toast(`Pushed "${r.name}" to gist.`,{kind:"success",title:"Gist sync"})}async function Ym(e,t){const n=await Cr(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const i=`${Ve(r.name)}.table.json`,s=await fetch(`https://api.github.com/gists/${n.gistId}`,{headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json"}});if(!s.ok)throw new Error(await br(s));const c=(await s.json()).files[i];if(!c){await e.ui.dialogs.alert(`No file "${i}" in the gist for this table.`,"Gist sync");return}const d=await _i(c),p=JSON.parse(d);if(!p.name||!Array.isArray(p.columns))throw new Error("unexpected file shape (missing name/columns)");if((await e.store.tables.patch(t,{title:p.title,columns:p.columns,...ao(p),updatedAt:Date.now()})).source==null){const b=e.store.rows(t),y=await b.find();await b.bulkRemove(y.map(x=>x.id));const C=(p.rows??[]).map(x=>({id:Ee(),tableId:t,data:x,updatedAt:Date.now()}));await b.bulkInsert(C)}e.ui.dialogs.toast(`Pulled "${r.name}" from gist.`,{kind:"success",title:"Gist sync"})}async function Xm(e,t){const n=await Cr(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const i=`file-${Ve(r.name)}-table-json`;window.open(`https://gist.github.com/${n.user}/${n.gistId}#${i}`,"_blank","noopener")}function ao(e){const t={};return e.view!==void 0&&(t.view=e.view),e.windowGeometry&&(t.windowGeometry=e.windowGeometry),e.sortColumn!==void 0&&(t.sortColumn=e.sortColumn),e.sortAsc!==void 0&&(t.sortAsc=e.sortAsc),e.filters!==void 0&&(t.filters=e.filters),e.labelColumn!==void 0&&(t.labelColumn=e.labelColumn),e.deletedColumns!==void 0&&(t.deletedColumns=e.deletedColumns),e.info!==void 0&&(t.info=e.info),e.source!==void 0&&(t.source=e.source),e.origin!==void 0&&(t.origin=e.origin),t}async function _i(e,t=n=>fetch(n)){if(!e.truncated)return e.content;if(!e.raw_url)throw new Error("GitHub truncated this file but returned no raw_url");const n=await t(e.raw_url);if(!n.ok)throw new Error(`raw fetch failed: ${n.status} ${n.statusText}`);return n.text()}async function br(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Jm=Object.freeze(Object.defineProperty({__proto__:null,fetchGistFileContent:_i,init:Fm,load:Bm,meta:Nm,offerPrune:vu},Symbol.toStringTag,{value:"Module"})),xu="server-sync:url";function $u(e){return`server-sync:etag:${e}`}async function ku(e){const n=(await e.store.settings.findOne(xu))?.value;return typeof n!="string"||n.length===0?null:n.replace(/\/+$/,"")}async function Qm(e,t){await e.store.settings.upsert({name:xu,value:t.replace(/\/+$/,"")})}async function _u(e,t){const r=(await e.store.settings.findOne($u(t)))?.value;return typeof r=="string"?r:null}async function gn(e,t,n){await e.store.settings.upsert({name:$u(t),value:n})}function Bi(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function Ll(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function Cu(e,t,n){const r=Li(n,t),i=(await e.store.tables.find()).filter(a=>a.workspaceId===t);for(const a of i){const c=e.store.rows(a.id),d=await c.find();await c.bulkRemove(d.map(p=>p.id)),await e.store.tables.remove(a.id)}let s=0;for(const a of r){const c=Ee(),d=await e.store.tables.insert({id:c,workspaceId:t,name:a.name,code:Ve(a.name),columns:a.columns,view:"table",...a.windowGeometry?{windowGeometry:a.windowGeometry}:{},...a.sortColumn?{sortColumn:a.sortColumn,sortAsc:a.sortAsc??!0}:{},updatedAt:Date.now()}),p=a.rows.map(g=>({id:Ee(),tableId:d.id,data:g,updatedAt:Date.now()}));await e.store.rows(d.id).bulkInsert(p),s++}return s}const Zm={id:"server-sync",name:"Server Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/server-sync.ts"};function eg(e){e.ui.registerSettings("server-sync","Server Sync",[{key:"url",label:"Server URL",type:"string",scope:"workspace",description:"Base URL of the sync server, e.g. http://localhost:3000"}]),e.ui.registerFooterButton({id:"server-sync:menu",label:"Sync",icon:"cloud_sync",tooltip:"Server sync — push or pull this workspace",onClick:async(t,n)=>{const{AnchoredMenu:r}=await at(async()=>{const{AnchoredMenu:a}=await Promise.resolve().then(()=>mr);return{AnchoredMenu:a}},void 0),i=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"push",label:"Push (↑)",icon:"cloud_upload"},{id:"pull",label:"Pull (↓)",icon:"cloud_download"}]);if(s)try{s==="push"?await tg(t):s==="pull"&&await ng(t)}catch(a){t.ui.dialogs.toast(`${s==="push"?"Push":"Pull"} failed: ${a.message}`,{kind:"error",title:"Server sync"})}}})}async function tg(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const n=await Su(e);if(!n)return;const r=await Fi(e),i=await _u(e,t),s={"Content-Type":"application/json"};i&&(s["If-Match"]=`"${i}"`);let a=await fetch(`${n}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:s,body:r});if(a.status===412){const d=await a.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){d.currentEtag&&await gn(e,t,d.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}a=await fetch(`${n}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:r})}if(!a.ok)throw new Error(await Eu(a));const c=Bi(a.headers.get("ETag"));c&&await gn(e,t,c),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${n}.`,{kind:"success",title:"Server sync"})}async function ng(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const n=await Su(e);if(!n||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const i=await fetch(`${n}/sync/${encodeURIComponent(t)}`);if(i.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!i.ok)throw new Error(await Eu(i));const s=Bi(i.headers.get("ETag")),a=await i.json(),c=await Cu(e,t,a);s&&await gn(e,t,s),e.ui.dialogs.toast(`Pulled ${c} table${c===1?"":"s"} from ${n}.`,{kind:"success",title:"Server sync"})}async function Su(e){const t=await ku(e);if(t)return t;const n=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!n)return null;try{new URL(n)}catch{return await e.ui.dialogs.alert(`"${n}" is not a valid URL.`,"Server sync"),null}return await Qm(e,n),n.replace(/\/+$/,"")}async function Eu(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const rg=Object.freeze(Object.defineProperty({__proto__:null,init:eg,meta:Zm},Symbol.toStringTag,{value:"Module"})),ig={id:"new-table",name:"New Table",type:"ui",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/new-table-button.ts"};function sg(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const og=Object.freeze(Object.defineProperty({__proto__:null,init:sg,meta:ig},Symbol.toStringTag,{value:"Module"}));function Hi(e,t="Edit"){const n=document.createElement("button");return n.type="button",n.title=t,n.textContent="✎",n.className="cell-pencil",n.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",n.addEventListener("mouseenter",()=>n.style.color="#374151"),n.addEventListener("mouseleave",()=>n.style.color="#9ca3af"),n.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),e()}),n}function qi(e,t){const n=document.createElement("span");return n.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%",e.style.flex="1 1 auto",e.style.minWidth="0",e.style.overflow="hidden",n.append(e,t),n}function Ki(e){const t=document.createElement("input");t.type="text",t.value=e.value,t.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0;text-overflow:ellipsis";const n=()=>{e.isLive(t)&&e.onCommit(t.value)};return t.addEventListener("keydown",r=>{r.key==="Enter"?(r.preventDefault(),n()):r.key==="Escape"&&(r.preventDefault(),e.onCancel())}),t.addEventListener("blur",n),setTimeout(()=>{t.focus(),t.select()},0),t}const ag={id:"cell-date",name:"Cell Date",type:"cell-renderer",version:"0.1.0",description:"Renderer for date columns: a native `<input type=date>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"date\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-date.ts"};function lg(e){customElements.get("cell-date")||customElements.define("cell-date",cg),e.ui.registerCellRenderer("date","cell-date")}class cg extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=Ki({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(n),this._editor=n;return}if(ug(this._value)){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",No(n,`Not a valid date: "${String(this._value)}"`),this.append(this._readonly?n:qi(n,this.pencil()));return}if(this._readonly){this.textContent=lo(this._value);return}const t=document.createElement("input");t.type="date",t.value=lo(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return Hi(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function lo(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const n=new Date(t);return Number.isNaN(n.getTime())?"":n.toISOString().slice(0,10)}function ug(e){return e==null||typeof e=="string"&&e.trim()===""?!1:lo(e)===""}const dg=Object.freeze(Object.defineProperty({__proto__:null,init:lg,meta:ag},Symbol.toStringTag,{value:"Module"})),hg={id:"cell-datetime",name:"Cell Datetime",type:"cell-renderer",version:"0.1.0",description:"Renderer for datetime columns: a native `<input type=datetime-local>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"datetime\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-datetime.ts"};function fg(e){customElements.get("cell-datetime")||customElements.define("cell-datetime",pg),e.ui.registerCellRenderer("datetime","cell-datetime")}class pg extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=Ki({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(n),this._editor=n;return}if(mg(this._value)){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",No(n,`Not a valid datetime: "${String(this._value)}"`),this.append(this._readonly?n:qi(n,this.pencil()));return}if(this._readonly){this.textContent=co(this._value).replace("T"," ");return}const t=document.createElement("input");t.type="datetime-local",t.value=co(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return Hi(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function co(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const n=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(n)return`${n[1]}T${n[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const r=new Date(t);if(Number.isNaN(r.getTime()))return"";const i=r.toISOString();return`${i.slice(0,10)}T${i.slice(11,16)}`}function mg(e){return e==null||typeof e=="string"&&e.trim()===""?!1:co(e)===""}const gg=Object.freeze(Object.defineProperty({__proto__:null,init:fg,meta:hg},Symbol.toStringTag,{value:"Module"})),bg={id:"cell-boolean",name:"Cell Boolean",type:"cell-renderer",version:"0.1.0",description:`Renderer for boolean columns: a checkbox for true/false, a grayed-out unchecked box for an empty cell (clickable to set true), and red-bordered raw text with a pencil for a stored value that is none of those. Apply by setting a column's renderer to "boolean".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="8 12 11 15 16 9"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-boolean.ts"};function wg(e){customElements.get("cell-boolean")||customElements.define("cell-boolean",yg),e.ui.registerCellRenderer("boolean","cell-boolean")}class yg extends HTMLElement{constructor(){super(...arguments),this._value=!1,this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const i=Ki({value:this._value==null?"":String(this._value),onCommit:s=>this.commit(s),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:s=>this._editor===s});this.append(i),this._editor=i;return}const t=Jc(this._value);if(t==="invalid"){const i=document.createElement("span");i.textContent=String(this._value),i.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",No(i,`Not a valid boolean: "${String(this._value)}"`),this.append(this._readonly?i:qi(i,this.pencil()));return}const n=document.createElement("input");n.type="checkbox",n.checked=t==="true";let r="transform:translateY(1px)";t==="empty"&&(r+=";opacity:0.45",n.title="Empty — no value stored. Click to set true."),this._readonly?n.disabled=!0:(r+=";cursor:pointer",n.addEventListener("change",()=>this.commit(n.checked))),n.style.cssText=r,this.append(n)}pencil(){return Hi(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const vg=Object.freeze(Object.defineProperty({__proto__:null,init:wg,meta:bg},Symbol.toStringTag,{value:"Module"})),xg={id:"cell-color",name:"Cell Color",type:"cell-renderer",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2h2.3c2 0 3.6-1.6 3.6-3.6C20.7 6 16.9 3 12 3z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="11" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-color.ts"};function $g(e){customElements.get("cell-color")||customElements.define("cell-color",kg),e.ui.registerCellRenderer("color","cell-color")}class kg extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,n,r){this.value=r}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const n=document.createElement("input");n.type="color",n.value=t,n.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",n.addEventListener("change",()=>this.commit(n.value)),this.append(n)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const _g=Object.freeze(Object.defineProperty({__proto__:null,init:$g,meta:xg},Symbol.toStringTag,{value:"Module"})),Cg={id:"cell-image",name:"Cell Image",type:"cell-renderer",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-image.ts"};function Sg(e){customElements.get("cell-image")||customElements.define("cell-image",Eg),e.ui.registerCellRenderer("image","cell-image")}class Eg extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t??"",this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this.style.display="block",this.style.minWidth="0",this.style.overflow="hidden",this._editing){const r=document.createElement("span");r.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const i=Ki({value:this._value,onCommit:a=>this.commit(a),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:a=>this._editor===a}),s=document.createElement("button");s.type="button",s.textContent="upload",s.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",s.addEventListener("mousedown",a=>a.preventDefault()),s.addEventListener("click",()=>this.pickFile()),r.append(i,s),this.append(r),this._editor=i;return}const t=document.createElement("span");if(t.style.cssText="display:flex;align-items:center;gap:0.4rem;min-width:0",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const r=document.createElement("img");r.src=this._value,r.alt="",r.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(r)}else{const r=document.createElement("span");if(r.style.color="#9ca3af",r.textContent="no image",t.append(r),!this._readonly){const i=document.createElement("button");i.type="button",i.textContent="upload",i.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",i.addEventListener("click",()=>this.pickFile()),t.append(i)}}this.append(this._readonly?t:qi(t,this.pencil()))}pencil(){return Hi(()=>{this._editing=!0,this.render()},"Edit the image URL")}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const n=t.files?.[0];if(!n)return;const r=new FileReader;r.onload=()=>this.commit(String(r.result)),r.readAsDataURL(n)}),t.click()}commit(t){const n=t!==this._value;this._value=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Tg=Object.freeze(Object.defineProperty({__proto__:null,init:Sg,meta:Cg},Symbol.toStringTag,{value:"Module"})),Tu=200,Iu=100;function Ig(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<Tu||e.h<Iu?null:{...e}}function Ci(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}function Ag(e,t,n,r){const i=r>0?r:1;return{...e,x:e.x+t/i,y:e.y+n/i}}function Rg(e,t,n,r,i,s,a){const c=i>0?i:1,d=n/c,p=r/c;let{x:g,y:b,w:y,h:C}=e;return t.includes("e")&&(y=Math.max(s,e.w+d)),t.includes("s")&&(C=Math.max(a,e.h+p)),t.includes("w")&&(y=Math.max(s,e.w-d),g=e.x+(e.w-y)),t.includes("n")&&(C=Math.max(a,e.h-p),b=e.y+(e.h-C)),{x:g,y:b,w:y,h:C}}function Og(e){return e?.minimized?{status:"minimized",restoreStatus:e.maximized?"maximized":"normalized"}:e?.maximized?{status:"maximized",restoreStatus:"normalized"}:{status:"normalized",restoreStatus:"normalized"}}function Ml(e,t){if(e.status==="closed")return e;switch(t){case"close":return{...e,status:"closed"};case"minimize":return e.status==="minimized"?e:{status:"minimized",restoreStatus:e.status==="maximized"?"maximized":"normalized"};case"maximize":return{status:"maximized",restoreStatus:"normalized"};case"smallify":return e.status!=="normalized"?e:{...e,status:"smallified"};case"normalize":return e.status==="minimized"?{status:e.restoreStatus,restoreStatus:"normalized"}:{status:"normalized",restoreStatus:"normalized"}}}function Dg(e){return{minimized:e.status==="minimized",maximized:e.status==="maximized"||e.status==="minimized"&&e.restoreStatus==="maximized"}}const Pg="input, textarea, select, button, a, .jsPanel-controlbar";function jl(e){for(const t of e.composedPath())if(t instanceof HTMLElement&&t.matches(Pg))return!0;return!1}const Lg={smallify:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 15 12 9 18 15"/></svg>',minimize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="19" x2="19" y2="19"/></svg>',maximize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="5" width="14" height="14" rx="1"/></svg>',normalize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="4" width="12" height="12" rx="1"/><rect x="4" y="8" width="12" height="12" rx="1"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>'};let Fs=100;function zl(){let e=Fs;for(const t of document.querySelectorAll(".jsPanel")){const n=Number(t.style.zIndex);Number.isFinite(n)&&n>e&&(e=n)}return Fs=e+1,Fs}function Mg(e){const t=Number(e.style.zIndex);for(const n of document.querySelectorAll(".jsPanel"))if(n!==e&&Number(n.style.zIndex)>t)return!1;return!0}const uo=new Set;function jg(){return[...uo].sort((e,t)=>Number(t.style.zIndex)-Number(e.style.zIndex))}function cn(e,t,n){const r=document.createElement("button");return r.type="button",r.className=`jsPanel-btn jsPanel-btn-${e}`,r.title=t,r.setAttribute("aria-label",t),r.innerHTML=Lg[e]??"",r.addEventListener("click",i=>{i.stopPropagation(),n()}),r}function Si(e){const t=document.createElement("div");t.className="jsPanel",t.id=e.id,t.style.setProperty("--eda-panel-color",e.color??"#01579b");const n=document.createElement("div");n.className="jsPanel-hdr";const r=document.createElement("div");r.className="jsPanel-headerbar";const i=document.createElement("div");i.className="jsPanel-headerlogo",i.innerHTML=e.logo??"";const s=document.createElement("div");s.className="jsPanel-titlebar",s.tabIndex=-1,s.style.outline="none",s.addEventListener("pointerdown",()=>s.focus());const a=document.createElement("span");a.className="jsPanel-title",a.textContent=e.title,s.append(a);const c=document.createElement("div");c.className="jsPanel-controlbar",c.append(cn("smallify","Collapse",()=>ie("smallify")),cn("minimize","Minimize",()=>ie("minimize")),cn("maximize","Maximize",()=>t.maximize()),cn("normalize","Restore",()=>ie("normalize")),cn("close","Close",()=>t.close())),r.append(i,s,c),n.append(r);const d=document.createElement("div");d.className="jsPanel-content",d.append(e.content);const p=document.createElement("div");p.className="jsPanel-ftr",e.footerToolbar&&(p.classList.add("active"),p.append(e.footerToolbar)),t.append(n,d,p);for(const q of["n","s","e","w","ne","nw","se","sw"]){const K=document.createElement("div");K.className="eda-resize",K.dataset.edge=q,t.append(K)}if(t.style.zIndex=String(zl()),e.container.append(t),e.panelSize)t.style.width=`${e.panelSize.w}px`,t.style.height=`${e.panelSize.h}px`;else{const q=e.contentSize??{w:720,h:360};t.style.width=`${q.w}px`,t.style.height=`${q.h+n.offsetHeight+p.offsetHeight}px`}const g=e.position??"center",b=t.offsetWidth,y=e.container.clientWidth;g==="center"?(t.style.left=`${Math.max(0,(y-b)/2)}px`,t.style.top=`${Math.max(0,(e.container.clientHeight-t.offsetHeight)/2)}px`):"centerTopOffset"in g?(t.style.left=`${Math.max(0,(y-b)/2)}px`,t.style.top=`${g.centerTopOffset}px`):(t.style.left=`${g.x}px`,t.style.top=`${g.y}px`);let C=Og(e.boot),x=U(),k=null,I=null,L=null;function U(){return{x:t.offsetLeft,y:t.offsetTop,w:t.offsetWidth,h:t.offsetHeight}}function B(q){t.style.left=`${q.x}px`,t.style.top=`${q.y}px`,t.style.width=`${q.w}px`,t.style.height=`${q.h}px`}function Y(){const q=e.viewport?.getState()??{x:0,y:0,scale:1};t.style.left="0px",t.style.top="0px",t.style.width=`${e.container.clientWidth}px`,t.style.height=`${e.container.clientHeight}px`,t.style.transformOrigin="0 0",t.style.transform=`translate(${-q.x/q.scale}px, ${-q.y/q.scale}px) scale(${1/q.scale})`}function te(){Y(),I??=e.viewport?.subscribe(Y)??null,!L&&typeof ResizeObserver<"u"&&(L=new ResizeObserver(Y),L.observe(e.container))}function W(){I?.(),I=null,L?.disconnect(),L=null,t.style.transform="",t.style.transformOrigin=""}function H(){const q=document.createElement("div");q.className="jsPanel-replacement",q.id=`${e.id}-min`,q.style.setProperty("--eda-panel-color",e.color??"#01579b");const K=document.createElement("div");K.className="jsPanel-headerlogo",K.innerHTML=i.innerHTML;const ue=document.createElement("span");return ue.className="jsPanel-title",ue.textContent=a.textContent,q.append(K,ue,cn("normalize","Restore",()=>{ie("normalize"),t.front()}),cn("close","Close",()=>t.close())),q.addEventListener("click",ge=>{ge.target.closest("button")||(ie("normalize"),t.front())}),q}function X(q){switch(q==="maximized"&&C.status!=="maximized"&&W(),q==="minimized"&&C.status!=="minimized"&&(k?.remove(),k=null,t.style.display=""),C.status){case"minimized":{q==="normalized"?x=U():q==="smallified"&&(x={...x,x:t.offsetLeft,y:t.offsetTop}),t.style.display="none";const K=e.minimizeTo?document.querySelector(e.minimizeTo):null;k=H(),(K??e.container).append(k);break}case"maximized":q==="normalized"?x=U():q==="smallified"&&(x={...x,x:t.offsetLeft,y:t.offsetTop}),te();break;case"smallified":x=U(),t.style.height=`${n.offsetHeight}px`;break;case"normalized":q==="smallified"&&(x={...x,x:t.offsetLeft,y:t.offsetTop}),B(x);break}t.dataset.status=C.status}function ie(q){const K=C;C=Ml(C,q),C.status!==K.status&&(X(K.status),e.onstatuschange?.(t))}Object.defineProperty(t,"status",{get:()=>C.status}),t.minimize=()=>ie("minimize"),t.maximize=(q,K)=>{ie("maximize"),K!==!0&&t.front()},t.normalize=()=>ie("normalize"),t.smallify=()=>ie("smallify"),t.front=(q,K)=>{t.style.zIndex=String(zl()),K!==!1&&e.onfronted?.()},t.close=()=>{C.status!=="closed"&&(C=Ml(C,"close"),k?.remove(),W(),uo.delete(t),t.remove(),e.onclosed?.())},t.setHeaderTitle=q=>{a.textContent=q;const K=k?.querySelector(".jsPanel-title");K&&(K.textContent=q)},t.setHeaderLogo=q=>{i.innerHTML=q;const K=k?.querySelector(".jsPanel-headerlogo");K&&(K.innerHTML=q)},t.persistFlags=()=>Dg(C),uo.add(t),t.addEventListener("pointerdown",()=>{Mg(t)||t.front()},!0);const re=q=>{q.addEventListener("pointerdown",K=>{if(K.button!==0||jl(K)||C.status==="maximized"||C.status==="minimized")return;const ue=U(),ge=e.viewport?.getState().scale??1,Te=K.clientX,ze=K.clientY;let pt=!1;const de=Ae=>{pt=!0;const Ze=Ag(ue,Ae.clientX-Te,Ae.clientY-ze,ge);t.style.left=`${Ze.x}px`,t.style.top=`${Ze.y}px`},Pe=()=>{q.removeEventListener("pointermove",de),q.removeEventListener("pointerup",Pe),q.removeEventListener("pointercancel",Pe),pt&&e.onmoved?.()};q.setPointerCapture(K.pointerId),q.addEventListener("pointermove",de),q.addEventListener("pointerup",Pe),q.addEventListener("pointercancel",Pe)})};re(s),re(i),re(p);for(const q of t.querySelectorAll(".eda-resize"))q.addEventListener("pointerdown",K=>{if(K.button!==0||C.status!=="normalized")return;const ue=q.dataset.edge,ge=U(),Te=e.viewport?.getState().scale??1,ze=K.clientX,pt=K.clientY;let de=!1;const Pe=Ze=>{de=!0,B(Rg(ge,ue,Ze.clientX-ze,Ze.clientY-pt,Te,Tu,Iu))},Ae=()=>{q.removeEventListener("pointermove",Pe),q.removeEventListener("pointerup",Ae),q.removeEventListener("pointercancel",Ae),de&&e.onresized?.()};q.setPointerCapture(K.pointerId),q.addEventListener("pointermove",Pe),q.addEventListener("pointerup",Ae),q.addEventListener("pointercancel",Ae)});return n.addEventListener("dblclick",q=>{jl(q)||(C.status==="maximized"?ie("normalize"):t.maximize())}),C.status!=="normalized"?X("normalized"):t.dataset.status="normalized",t}function hi(e){return e.source?e.source.type==="url"?"referenced":"connected":e.origin?"imported":"normal"}function Nl(e){return!!(e.source||e.origin)}const lr='viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15" role="img"',Ul={normal:`<svg ${lr} aria-label="Local table"><title>Local table</title><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,imported:`<svg ${lr} aria-label="Imported table (snapshot)"><title>Imported table (snapshot)</title><rect x="3" y="11" width="18" height="10" rx="1"/><line x1="7" y1="15" x2="7" y2="17"/><line x1="12" y1="15" x2="12" y2="17"/><line x1="17" y1="15" x2="17" y2="17"/><path d="M12 2v7"/><polyline points="8 6 12 9 16 6"/></svg>`,referenced:`<svg ${lr} aria-label="Referenced table (read-only)"><title>Referenced table (read-only)</title><path d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1"/><path d="M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1"/></svg>`,connected:`<svg ${lr} aria-label="Connected table (live)"><title>Connected table (live)</title><line x1="9" y1="2" x2="9" y2="7"/><line x1="15" y1="2" x2="15" y2="7"/><rect x="6" y="7" width="12" height="7" rx="2"/><path d="M9 14v3a3 3 0 0 0 6 0v-3"/></svg>`},zg=`<svg ${lr} aria-label="View"><title>View</title><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;var Ng=Object.defineProperty,Ug=Object.getOwnPropertyDescriptor,Vi=(e,t,n,r)=>{for(var i=r>1?void 0:r?Ug(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Ng(t,n,i),i};function Fg(e,t,n){($t.instance??Hg()).show(e,t,n)}function Bg(e){if(!e)return null;const t=hi(e);if(t==="connected"||t==="referenced"){const n=e.source?.type??"remote",r=e.source?.writable?"Edits you make are written back to the source.":"It is read-only — edits are not saved back to the source.";return{label:`Connected (live ${n})`,note:`This table is connected to a live ${n} backend: its rows are fetched from the source on demand and are not stored locally. ${r} Closing its window just disconnects the view — the source data is untouched.`}}return t==="imported"?{label:"Imported (snapshot)",note:"This table is a local snapshot imported once from its origin. The rows live in this browser, so edits stay local; use Refresh to re-fetch the latest data from the origin.",...e.origin?{url:e.origin.url}:{}}:{label:"Local",note:"This table was created in the app and is stored locally in your browser."}}function Hg(){const e=document.createElement("table-info-dialog");return document.body.appendChild(e),e}let $t=class extends ve{constructor(){super(...arguments),this.name="",this.info=null,this.provenance=null,this.dialogEl=null,this.close=()=>this.dialogEl?.close(),this.onSubmit=e=>{e.preventDefault(),this.close()}}connectedCallback(){super.connectedCallback(),$t.instance=this}disconnectedCallback(){super.disconnectedCallback(),$t.instance===this&&($t.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&ht(this.dialogEl,e)}show(e,t,n){this.name=e,this.info=t,this.provenance=n??null,this.updateComplete.then(()=>this.dialogEl?.showModal())}row(e,t,n){if(!t&&!n)return se;const r=n?$`<a href=${n} target="_blank" rel="noopener noreferrer">${t||n}</a>`:$`${t}`;return $`<dt>${e}</dt>
      <dd>${r}</dd>`}render(){const e=this.info,t=!!(e?.source||e?.sourceUrl||e?.license||e?.licenseUrl||e?.about||e?.aboutUrl),n=Bg(this.provenance);return $`
      <dialog @cancel=${this.close} @keydown=${dt}>
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
                      </div>`:se}
                </div>`:se}
            ${e?.descriptionHtml?$`<div class="desc">${In(e.descriptionHtml)}</div>`:e?.description?$`<div class="desc">${e.description}</div>`:se}
            ${t?$`<dl>
                  ${this.row("Source",e?.source,e?.sourceUrl)}
                  ${this.row("License",e?.license,e?.licenseUrl)}
                  ${this.row("About",e?.about,e?.aboutUrl)}
                </dl>`:se}
            ${!e?.description&&!e?.descriptionHtml&&!t&&!n?$`<p class="empty">No additional information.</p>`:se}
          </div>
        </form>
      </dialog>
    `}};$t.instance=null;$t.styles=[ut,$e`
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
    `];Vi([N()],$t.prototype,"name",2);Vi([N()],$t.prototype,"info",2);Vi([N()],$t.prototype,"provenance",2);$t=Vi([Ce("table-info-dialog")],$t);const qg=.25,Kg=4;function Vg(e){return Math.min(Kg,Math.max(qg,e))}function Fl(e,t,n){return{x:e.x+t,y:e.y+n,scale:e.scale}}const sr={x:0,y:0,scale:1};function Bl(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Gg(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function Wg(e,t){let n={...sr};t.style.transformOrigin="0 0";const r=new Set,i=()=>{t.style.transform=`translate(${n.x}px, ${n.y}px) scale(${n.scale})`;for(const K of r)K({...n})};let s="none",a={...sr},c=0,d=0,p=0,g=0,b=0,y=0;const C=(K,ue)=>{const ge=e.getBoundingClientRect();return{x:K-ge.left,y:ue-ge.top}},x=K=>{if(K.touches.length===2){s="pinch",a={...n};const[ue,ge]=[K.touches[0],K.touches[1]];p=Bl(ue,ge)||1;const Te=C((ue.clientX+ge.clientX)/2,(ue.clientY+ge.clientY)/2);g=(Te.x-n.x)/n.scale,b=(Te.y-n.y)/n.scale,K.preventDefault();return}if(K.touches.length===1&&!Gg(K.target)){const ue=K.timeStamp;if(ue-y<300){n={...sr},i(),y=0,s="none",K.preventDefault();return}y=ue,s="pan",a={...n},c=K.touches[0].clientX,d=K.touches[0].clientY}else s="none"},k=K=>{if(s==="pan"&&K.touches.length===1){const ue=K.touches[0];n=Fl(a,ue.clientX-c,ue.clientY-d),i(),K.preventDefault()}else if(s==="pinch"&&K.touches.length>=2){const[ue,ge]=[K.touches[0],K.touches[1]],Te=Vg(a.scale*(Bl(ue,ge)/p)),ze=C((ue.clientX+ge.clientX)/2,(ue.clientY+ge.clientY)/2);n={x:ze.x-g*Te,y:ze.y-b*Te,scale:Te},i(),K.preventDefault()}},I=K=>{K.touches.length===0?s="none":K.touches.length===1&&s==="pinch"&&(s="pan",a={...n},c=K.touches[0].clientX,d=K.touches[0].clientY)};let L=!1,U={...sr},B=0,Y=0,te=!1;const W=(K,ue)=>{const ge=e.getBoundingClientRect();return K>=ge.left&&K<=ge.right&&ue>=ge.top&&ue<=ge.bottom},H=K=>{if(!L)return;const ue=K.clientX-B,ge=K.clientY-Y;!te&&Math.hypot(ue,ge)<4||(te=!0,document.body.style.cursor="grabbing",n=Fl(U,ue,ge),i(),K.preventDefault())},X=()=>{L&&(L=!1,document.body.style.cursor="",window.removeEventListener("mousemove",H,!0),window.removeEventListener("mouseup",ie,!0))};function ie(){X()}const re=K=>{K.button===2&&W(K.clientX,K.clientY)&&(L=!0,te=!1,U={...n},B=K.clientX,Y=K.clientY,window.addEventListener("mousemove",H,!0),window.addEventListener("mouseup",ie,!0))},q=K=>{te&&(K.preventDefault(),te=!1)};return e.addEventListener("touchstart",x,{passive:!1}),e.addEventListener("touchmove",k,{passive:!1}),e.addEventListener("touchend",I),e.addEventListener("touchcancel",I),window.addEventListener("mousedown",re,!0),window.addEventListener("contextmenu",q,!0),{snapshot:()=>({...n}),reset:()=>{n={...sr},i()},restore:K=>{n={...K},i()},subscribe:K=>(r.add(K),()=>r.delete(K)),dispose:()=>{e.removeEventListener("touchstart",x),e.removeEventListener("touchmove",k),e.removeEventListener("touchend",I),e.removeEventListener("touchcancel",I),window.removeEventListener("mousedown",re,!0),window.removeEventListener("contextmenu",q,!0),X()}}}const ai=new Map;function Gi(e,t){const r=(ai.get(e)??Promise.resolve()).then(t,t);return ai.set(e,r),r.finally(()=>{ai.get(e)===r&&ai.delete(e)}),r}let Bs=0;function Au(){return Bs=Math.max(Date.now(),Bs+1),Bs}const Wi=new Map;function Ru(e,t){Wi.set(e,t)}function Yi(e){Wi.delete(e)}function Yg(e){return Wi.has(e)}function Xg(e){try{Wi.get(e)?.()}catch{}}const Dn=(()=>{const e=new URLSearchParams(location.search).get("minimize");return e===null?!1:!/^(0|false|no)$/i.test(e)})();function Jg(e){return e.filter(t=>!t.minimized).slice().sort((t,n)=>(t.z??-1/0)-(n.z??-1/0)).map(t=>t.id)}let Hl=!1;async function Qg(){Hl||(Hl=!0,document.addEventListener("easydb:restack-windows",()=>void ql())),await ql()}async function ql(){if(Dn)return;const e=await ae();for(let t=0;t<=12;t++){const[n,r]=await Promise.all([e.store.tables.find(),e.store.viewInstances.find()]),i=[...n.filter(a=>a.workspaceId===e.workspaceId&&!a.windowGeometry?.closed).map(a=>({id:a.id,z:a.windowGeometry?.z,minimized:a.windowGeometry?.minimized===!0})),...r.filter(a=>a.workspaceId===e.workspaceId&&a.open).map(a=>({id:a.id,z:a.windowGeometry?.z,minimized:a.windowGeometry?.minimized===!0}))],s=Jg(i);if(t<12&&!s.every(a=>Yg(a))){await new Promise(a=>setTimeout(a,80));continue}for(const a of s)Xg(a);return}}var Zg=Object.defineProperty,eb=Object.getOwnPropertyDescriptor,Sr=(e,t,n,r)=>{for(var i=r>1?void 0:r?eb(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Zg(t,n,i),i};let bn=class extends ve{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return $`<button
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
    />`}};bn.styles=[ft,$e`
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
    `];Sr([ct({type:String})],bn.prototype,"tableId",2);Sr([N()],bn.prototype,"query",2);Sr([N()],bn.prototype,"open",2);Sr([Ot("input")],bn.prototype,"inputEl",2);bn=Sr([Ce("panel-search")],bn);var tb=Object.defineProperty,nb=Object.getOwnPropertyDescriptor,Nn=(e,t,n,r)=>{for(var i=r>1?void 0:r?nb(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&tb(t,n,i),i};let Yt=class extends ve{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.rowsActive=!1,this.runTableButton=async(e,t)=>{const n=t?.currentTarget??void 0,r=await ae();try{await Promise.resolve(e.onClick(r.api,{tableId:this.tableId,anchor:n}))}catch(i){console.error(`[table-button:${e.id}]`,i)}}}async connectedCallback(){super.connectedCallback();const e=await ae();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(n=>n.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await ae();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await ae(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const n={};for(const r of t.columns)n[r.field]=rb(r);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:n,updatedAt:Date.now()})}editColumns(){const e=this.table?.source?.type==="projection"?"easydb:edit-projection":"easydb:edit-columns";document.dispatchEvent(new CustomEvent(e,{detail:{tableId:this.tableId}}))}render(){return $`
      ${this.table?.readonly?se:$`<button title="Add a blank row" aria-label="Add row" @click=${this.addRow}>
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
              ${e.icon?e.icon.trimStart().startsWith("<svg")?$`<span class="icon-svg">${ko(e.icon)}</span>`:$`<span class="mi sm">${e.icon}</span>`:$`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};Yt.styles=[ft,$e`
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
    `];Nn([ct({type:String})],Yt.prototype,"tableId",2);Nn([ct({type:Boolean})],Yt.prototype,"active",2);Nn([N()],Yt.prototype,"rowCount",2);Nn([N()],Yt.prototype,"tableButtons",2);Nn([N()],Yt.prototype,"table",2);Yt=Nn([Ce("panel-footer")],Yt);function rb(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function Hs(e){return e.title?.trim()?e.title.trim():e.name}function ib(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function sb(e){const t=document.querySelector("app-shell")?.shadowRoot,n=t?.querySelector("header"),r=t?.querySelector("footer");n&&(e.style.top=`${n.offsetHeight}px`),r&&(e.style.bottom=`${r.offsetHeight}px`)}const Gt=new Map,Ou=new Set;let Kl=!1,Du=null;function Ei(){return Du}function wr(){return{getState:()=>Ei()?.snapshot()??{x:0,y:0,scale:1},subscribe:e=>Ei()?.subscribe(e)??(()=>{})}}async function Pu(){const e=await ae();await Promise.all([...Gt.keys()].map(t=>fi(t,e)))}function Lu(e){const t=Gt.get(e);return t?(t.status==="minimized"&&t.normalize(),t.front(),!0):(ob(e),!0)}async function ob(e){const t=await ae(),n=await t.store.tables.findOne(e);n?.windowGeometry?.closed&&await t.store.tables.patch(e,{windowGeometry:{...n.windowGeometry,closed:!1},updatedAt:Date.now()})}async function Mu(e){const t=await ae();await hb(e,t)}async function ju(){if(Kl)return;Kl=!0;const e=await ae(),t=document.getElementById("easydb-panels"),n=document.getElementById("easydb-panels-viewport");if(t&&n){Du=Wg(t,n);const i=()=>sb(t);i(),window.addEventListener("resize",i);const s=document.querySelector("app-shell")?.shadowRoot,a=s?.querySelector("header"),c=s?.querySelector("footer");if(typeof ResizeObserver<"u"&&(a||c)){const d=new ResizeObserver(i);a&&d.observe(a),c&&d.observe(c)}}const r=(await e.store.tables.find()).filter(i=>i.workspaceId===e.workspaceId);r.sort(Ci);for(const i of r)i.windowGeometry?.closed||Vl(i,e);e.store.tables.subscribe(i=>{const s=i.filter(d=>d.workspaceId===e.workspaceId),a=new Map(s.map(d=>[d.id,d]));for(const[d,p]of Gt){const g=a.get(d);if(!g||g.windowGeometry?.closed){Gt.delete(d),Yi(d),Ou.add(d);try{p.status!=="closed"&&p.close()}catch{}}}const c=s.filter(d=>!Gt.has(d.id)&&!d.windowGeometry?.closed).sort(Ci);for(const d of c)Vl(d,e)}),Qg()}const zu=720,Nu=360;function Vl(e,t){const n=`panel-${Uu(e.id)}`,r=ib(),i=Ig(e.windowGeometry),s=Dn||i?.minimized===!0,a=()=>{const re=document.createElement("data-table");return re.tableId=e.id,re.style.height="100%",re},c=s?document.createElement("div"):a();let d=s?null:c,p=Hs(e),g=-1,b=-1;const y=()=>{B.setHeaderTitle(p+Wc(g,b))},C=re=>{const q=re.detail;q.key===e.id&&(g=q.count,b=q.total,y())};document.addEventListener($i,C);const x=()=>{L.active=!1,d?.remove(),d=null},k=()=>{if(d)return;const re=document.getElementById(n)?.querySelector(".jsPanel-content");if(!re)return;re.replaceChildren();const q=a();re.appendChild(q),d=q,L.active=!0},I=document.createElement("panel-search");I.tableId=e.id;const L=document.createElement("panel-footer");L.tableId=e.id,L.active=!s;const U=async()=>{if(document.removeEventListener($i,C),Gt.delete(e.id),Yi(e.id),Ou.delete(e.id))return;const re=await t.store.tables.findOne(e.id);if(!re)return;const q=re.windowGeometry??{x:60,y:60,w:720,h:360,z:1,minimized:!1,maximized:!1};await t.store.tables.patch(e.id,{windowGeometry:{...q,closed:!0},updatedAt:Date.now()})},B=Si({id:n,container:r,title:p,logo:Ul[hi(e)],color:"#01579b",content:c,footerToolbar:L,...i?{panelSize:{w:i.w,h:i.h},position:{x:i.x,y:i.y}}:{contentSize:{w:zu,h:Nu},position:lb()},minimizeTo:"#easydb-minimized-dock",viewport:wr(),boot:{minimized:s,maximized:!Dn&&i?.maximized===!0},onmoved:()=>void fi(e.id,t),onresized:()=>void fi(e.id,t),onfronted:()=>void ub(e.id,t),onstatuschange:re=>{re.status==="minimized"?x():(re.status==="normalized"||re.status==="maximized")&&k(),fi(e.id,t)},onclosed:()=>void U()});Gt.set(e.id,B),Ru(e.id,()=>B.front(void 0,!1));const Y=document.getElementById(n),te=Y?.querySelector(".jsPanel-controlbar");te&&te.prepend(I),Nl(e)&&Y?.classList.add("eda-refreshable");let W=null;const H=document.createElement("button");H.type="button",H.title="Table info",H.setAttribute("aria-label","Table info"),H.className="eda-info-btn",H.textContent="ⓘ",H.style.cssText="display:none;background:none;border:0;color:inherit;cursor:pointer;font-size:1rem;line-height:1;padding:0 0.3rem;",H.addEventListener("click",re=>{re.stopPropagation(),W&&Fg(p,W.info??{},{source:W.source,origin:W.origin})}),te?.prepend(H);const X=re=>{W=re??null;const q=!!(re?.info||re?.source||re?.origin);H.style.display=q?"inline-flex":"none"};X(e);let ie=hi(e);t.store.tables.subscribe(re=>{const q=re.find(ue=>ue.id===e.id);if(!q)return;X(q),Hs(q)!==p&&(p=Hs(q),y());const K=hi(q);K!==ie&&(ie=K,B.setHeaderLogo(Ul[K]),Y?.classList.toggle("eda-refreshable",Nl(q)))})}let ab=0;function lb(){const e=ab++;return{x:40+e%8*30,y:80+e%8*30}}function fi(e,t){return Gi(`table:${e}`,()=>cb(e,t))}async function cb(e,t){const n=document.getElementById(`panel-${Uu(e)}`);if(!n)return;const r=Gt.get(e),i=r?.status??"normalized",s=r?.persistFlags()??{minimized:!1,maximized:!1};try{const c=(await t.store.tables.findOne(e))?.windowGeometry,d=Dn?c?.minimized??!1:s.minimized,p=Dn?c?.maximized??!1:s.maximized;let g=n.offsetLeft,b=n.offsetTop,y=n.offsetWidth,C=n.offsetHeight;(i==="minimized"||i==="maximized")&&(c?(g=c.x,b=c.y,y=c.w,C=c.h):(g=0,b=0,y=zu,C=Nu)),g<=-9e3&&(g=c?.x??40);const k={x:g,y:b,w:y,h:C,z:c?.z??0,minimized:d,maximized:p};await t.store.tables.patch(e,{windowGeometry:k,updatedAt:Date.now()})}catch{}}function ub(e,t){return Gi(`table:${e}`,()=>db(e,t))}async function db(e,t){try{const n=await t.store.tables.findOne(e);if(!n)return;const r=n.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...r,z:Au()},updatedAt:Date.now()})}catch{}}async function hb(e,t){if(!(await t.store.tables.findOne(e))?.source){const r=t.store.rows(e),i=await r.find();await r.bulkRemove(i.map(s=>s.id))}await t.store.tables.remove(e)}function Uu(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}const fb=Object.freeze(Object.defineProperty({__proto__:null,FORCE_MINIMIZED:Dn,currentPanZoom:Ei,deleteTable:Mu,focusTableWindow:Lu,initWindowManager:ju,persistTablePanelGeometry:Pu,shellViewport:wr},Symbol.toStringTag,{value:"Module"})),pb=/<\/?[a-z][a-z0-9]*(\s[^<>]*)?\/?>|&[a-z][a-z0-9]*;|&#\d+;|&#x[0-9a-f]+;/i;function Fu(e){return pb.test(e)}function mb(e){return e.replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"').replace(/&apos;|&#39;/gi,"'").replace(/&nbsp;/gi," ").replace(/&#x([0-9a-f]+);/gi,(t,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&#(\d+);/g,(t,n)=>String.fromCodePoint(Number(n))).replace(/&amp;/gi,"&")}function gb(e){if(typeof document<"u"){const t=document.createElement("div");return t.innerHTML=e,t.textContent??""}return mb(e.replace(/<[^>]*>/g,""))}function bb(e){return(Fu(e)?gb(e):e).replace(/\s+/g," ").trim()}const wb={id:"html-preview",name:"HTML Preview",type:"cell-renderer",version:"0.3.0",description:`Shows a cell's HTML as a plain-text preview (first N characters); click to edit the raw HTML in a dialog, or use the popup icon to view the full rendered HTML in a window. Apply by setting a column's renderer to "html-preview". For direct in-cell rendering use the "html" renderer instead.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-preview.ts"};let ho=30;async function Gl(e){const t=await e.settings.get("html-preview","maxChars");typeof t=="number"&&Number.isFinite(t)&&t>0&&(ho=Math.floor(t))}function yb(e){customElements.get("html-preview-cell")||customElements.define("html-preview-cell",vb),e.ui.registerCellRenderer("html-preview","html-preview-cell"),e.ui.registerSettings("html-preview","HTML Preview",[{key:"maxChars",label:"Max characters shown",type:"number",default:30,scope:"workspace",description:"HTML-preview cells show the first N characters of the text; use the popup icon on the right to open the full rendered HTML in a window. Applies to cells rendered after the change (reload to refresh all)."}]),Gl(e),e.events.on("app:ready",()=>void Gl(e))}function Wl(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}let Yl=0;class vb extends HTMLElement{constructor(){super(...arguments),this._value="",this._label="HTML"}set value(t){const n=t??"";this._value!==n&&(this._value=n,this.render())}get value(){return this._value}set column(t){this._label=t?.label??"HTML"}connectedCallback(){this.render()}render(){if(this.innerHTML="",!this._value){const a=document.createElement("span");a.style.cssText="color:#9ca3af;cursor:text",a.textContent="empty",a.title="Click to edit the HTML",a.addEventListener("click",()=>this.openEditor()),this.append(a);return}const t=document.createElement("span");t.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%";const n=document.createElement("span"),r=bb(this._value);n.textContent=r.length>ho?r.slice(0,ho)+"…":r,n.title="Click to edit the HTML",n.style.cssText="flex:0 1 auto;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:text",n.addEventListener("click",a=>{a.stopPropagation(),this.openEditor()});const i=document.createElement("span");i.style.cssText="flex:1 1 auto";const s=document.createElement("button");s.type="button",s.title="Open the HTML in a window",s.setAttribute("aria-label","Open the HTML in a window"),s.innerHTML='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3h7v7"/><path d="M21 3l-9 9"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/></svg>',s.style.cssText="flex:none;display:inline-flex;align-items:center;justify-content:center;padding:1px;background:none;border:0;color:#9ca3af;cursor:pointer;line-height:0",s.addEventListener("mouseenter",()=>s.style.color="#4b5563"),s.addEventListener("mouseleave",()=>s.style.color="#9ca3af"),s.addEventListener("click",a=>{a.stopPropagation(),this.openWindow()}),t.append(n,i,s),this.append(t)}openWindow(){const t=document.createElement("div");if(t.style.cssText="padding:0.75rem;overflow:auto;height:100%;box-sizing:border-box",Fu(this._value))t.innerHTML=this._value;else{const n=document.createElement("pre");n.style.cssText="white-space:pre-wrap;word-break:break-word;margin:0;font-family:ui-monospace, monospace;",n.textContent=this._value,t.append(n)}Si({id:`easydb-html-popup-${++Yl}`,container:Wl(),title:this._label,color:"#7c3aed",content:t,contentSize:{w:520,h:400},position:{centerTopOffset:60},minimizeTo:"#easydb-minimized-dock",viewport:wr()})}openEditor(){const t=document.createElement("div");t.style.cssText="display:flex;flex-direction:column;gap:0.5rem;height:100%;box-sizing:border-box;padding:0.5rem";const n=document.createElement("textarea");n.value=this._value,n.style.cssText="flex:1 1 auto;width:100%;box-sizing:border-box;resize:none;font-family:monospace;font-size:0.85rem";const r=document.createElement("div");r.style.cssText="display:flex;justify-content:flex-end;gap:0.5rem;flex:none";const i=document.createElement("button");i.type="button",i.textContent="Cancel",i.style.cssText="padding:0.3rem 0.8rem;cursor:pointer";const s=document.createElement("button");s.type="button",s.textContent="Save",s.style.cssText="padding:0.3rem 0.8rem;cursor:pointer;background:#7c3aed;color:#fff;border:0;border-radius:0.25rem",r.append(i,s),t.append(n,r);const a=Si({id:`easydb-html-edit-${++Yl}`,container:Wl(),title:`Edit ${this._label}`,color:"#7c3aed",content:t,contentSize:{w:520,h:400},position:"center",minimizeTo:"#easydb-minimized-dock",viewport:wr()});i.addEventListener("click",()=>a.close()),s.addEventListener("click",()=>{this._value=n.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:n.value},bubbles:!0,composed:!0})),a.close(),this.render()}),n.addEventListener("keydown",c=>{c.key==="Enter"&&(c.ctrlKey||c.metaKey)?(c.preventDefault(),s.click()):c.key==="Escape"&&(c.preventDefault(),a.close())}),setTimeout(()=>n.focus(),0)}}const xb=Object.freeze(Object.defineProperty({__proto__:null,init:yb,meta:wb},Symbol.toStringTag,{value:"Module"})),$b={id:"html-render",name:"HTML",type:"cell-renderer",version:"0.1.0",description:`Renders a cell's value directly as HTML (unescaped, in full, no popup). Apply by setting a column's renderer to "html". For a truncated preview use "html-preview".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-render.ts"};function kb(e){customElements.get("html-render-cell")||customElements.define("html-render-cell",_b),e.ui.registerCellRenderer("html","html-render-cell")}class _b extends HTMLElement{constructor(){super(...arguments),this._value="",this.editing=!1}set value(t){const n=t??"";this._value!==n&&(this._value=n,this.editing||this.render())}get value(){return this._value}connectedCallback(){this.editing||this.render()}render(){this.innerHTML="";const t=document.createElement("span");t.style.cssText="display:inline-block;min-width:1ch;cursor:text",t.title="Click to edit",this._value?t.innerHTML=this._value:(t.style.color="#9ca3af",t.textContent="empty"),t.addEventListener("click",()=>this.beginEdit()),this.append(t)}beginEdit(){this.editing=!0,this.innerHTML="";const t=document.createElement("input");t.type="text",t.value=this._value,t.style.cssText="width:100%;box-sizing:border-box";let n=!1;const r=()=>{n||(n=!0,this.editing=!1,this._value=t.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:t.value},bubbles:!0,composed:!0})),this.render())};t.addEventListener("blur",r),t.addEventListener("keydown",i=>{i.key==="Enter"?(i.preventDefault(),t.blur()):i.key==="Escape"&&(i.preventDefault(),n=!0,this.editing=!1,this.render())}),this.append(t),t.focus(),t.select()}}const Cb=Object.freeze(Object.defineProperty({__proto__:null,init:kb,meta:$b},Symbol.toStringTag,{value:"Module"})),Sb={id:"cell-link",name:"Cell Link",type:"cell-renderer",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-link.ts"};function Eb(e){customElements.get("cell-link")||customElements.define("cell-link",Tb),e.ui.registerCellRenderer("link","cell-link")}class Tb extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1,this._editor=null,this._raw=null}set value(t){const n=t==null?"":String(t);this._value!==n&&(this._value=n,this._editing=!1,this.render())}get value(){return this._value}set rawValue(t){const n=t==null?"":String(t);this._raw!==n&&(this._raw=n,this._editing&&this.render())}get rawValue(){return this._raw??this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="",this._editor=null;const t=this._value,n=this._editing?null:Ib(t),r=!this._editing&&!n?Ab(t):null,i=!this._editing&&!n&&!r?Rb(t):null;if(n||r||i){const s=document.createElement("span");s.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const a=document.createElement("a");a.href=n?t:r?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,n&&(a.target="_blank",a.rel="noopener noreferrer"),a.textContent=t,a.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",a.title=n?`Open ${t}`:r?`Email ${t}`:`Call ${t}`;const c=document.createElement("button");c.type="button",c.title="Edit",c.textContent="✎",c.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",c.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation(),this._editing=!0,this.render()}),s.append(a,c),this.append(s)}else{const s=document.createElement("input");s.type="text",s.value=this.rawValue,s.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",s.addEventListener("change",()=>{this._editor===s&&this.commit(s.value)}),s.addEventListener("keydown",a=>{a.key==="Enter"?(a.preventDefault(),this.commit(s.value)):a.key==="Escape"&&(this._editor=null,this._editing=!1,this.render())}),s.addEventListener("blur",()=>{this._editor===s&&this.commit(s.value)}),this.append(s),this._editor=s,this._editing&&setTimeout(()=>{s.focus(),s.select()},0)}}commit(t){const n=t!==this.rawValue;this._raw===null?this._value=t:this._raw=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Ib(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function Ab(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function Rb(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const n=t.replace(/\D/g,"");if(n.length<7||n.length>15)return null;const r=/[ ()\-.]/.test(t),i=t.startsWith("+");return!r&&!i&&n.length<10?null:t}const Ob=Object.freeze(Object.defineProperty({__proto__:null,init:Eb,meta:Sb},Symbol.toStringTag,{value:"Module"})),ur={id:"auto-renderer",name:"Auto Renderer",type:"cell-renderer",version:"0.1.0",description:"After any import, gives columns a renderer based on their values: link for URLs, image for image URLs, html-preview for markup or long text.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 3 8 6.5 4.5 8 8 9.5 9.5 13 11 9.5 14.5 8 11 6.5 9.5 3z"/><path d="M17.5 12 16.75 14 15 14.75 16.75 15.5 17.5 17.5 18.25 15.5 20 14.75 18.25 14 17.5 12z"/><path d="M4 17h9"/><path d="M4 21h6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-renderer.ts"},Db=120,Bu=50,Pb=/\.(png|jpe?g|gif|webp|svg|avif|bmp|ico)(\?|#|$)/i,Lb=/<[a-z][a-z0-9-]*(\s[^<>]*)?\/?>/i;function Hu(e){return/^https?:\/\/\S+$/i.test(e)}function Mb(e){return/^data:image\//i.test(e)?!0:Hu(e)&&Pb.test(e)}function qu(e,t){if(e!=="string")return;const n=[];for(const i of t){if(i==null)continue;const s=typeof i=="string"?i.trim():String(i).trim();s&&n.push(s)}if(n.length===0)return;if(n.every(Mb))return"image";if(n.every(Hu))return"link";if(n.some(i=>Lb.test(i))||n.reduce((i,s)=>i+s.length,0)/n.length>Db)return"html-preview"}function Qo(e,t){return t.length===0?[...e]:e.map(n=>{if(n.renderer)return n;const r=qu(n.type,t.map(i=>i[n.field]));return r?{...n,renderer:r}:n})}function jb(e){e.events.on("import:after",({tableId:t})=>{zb(e,t)}),e.ui.registerColumnEditorAction({id:"auto-renderer:guess",label:"Guess renderers",icon:"auto_fix_high",tooltip:"Pick a renderer for each column from what its values look like",async run(t,{columns:n,tableId:r}){if(!r)return t.ui.dialogs.toast("Guessing needs rows to look at — import or add data first.",{kind:"info",title:ur.name}),null;const i=(await t.store.rows(r).find()).slice(0,Bu);if(i.length===0)return t.ui.dialogs.toast("This table has no rows to learn from yet.",{kind:"info",title:ur.name}),null;const s=n.map(({renderer:d,...p})=>p),a=Qo(s,i.map(d=>d.data)),c=a.filter((d,p)=>d.renderer!==n[p]?.renderer).length;return t.ui.dialogs.toast(c===0?"No renderer fits these values — columns left as they are.":`Set ${c} renderer${c===1?"":"s"}. Press Save to keep them.`,{kind:c===0?"info":"success",title:ur.name}),a}})}async function zb(e,t){try{const n=await e.store.tables.findOne(t);if(!n||n.columns.length===0||n.columns.every(s=>s.renderer))return;const r=(await e.store.rows(t).find()).slice(0,Bu);if(r.length===0)return;const i=Qo(n.columns,r.map(s=>s.data));if(i.every((s,a)=>s.renderer===n.columns[a]?.renderer))return;await e.store.tables.upsert({...n,columns:i,updatedAt:Date.now()})}catch(n){e.events.emit("plugin:error",{url:ur.id,phase:"runtime",error:n})}}const Nb=Object.freeze(Object.defineProperty({__proto__:null,inferRenderer:qu,init:jb,meta:ur,withInferredRenderers:Qo},Symbol.toStringTag,{value:"Module"})),Ub={id:"delete-table",name:"Delete Table",type:"ui",version:"0.1.0",description:"Adds a trash button to each table window that permanently deletes the table and its rows (with confirmation).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/delete-table.ts"};function Fb(e){e.ui.registerTableButton({id:"delete-table:delete",label:"Delete",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="#7f1d1d" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',tooltip:"Delete this table permanently",onClick:async(t,n)=>{const r=await t.store.tables.findOne(n.tableId);!r||!await t.ui.dialogs.confirm(r.source?`Delete the live table "${r.name}"? Its data stays on the server — only the local connection is removed.`:`Permanently delete table "${r.name}" and all its rows? This can't be undone.`,"Delete table")||(await Mu(n.tableId),t.ui.dialogs.toast(`Deleted "${r.name}".`,{kind:"success",title:"Delete table"}))}})}const Bb=Object.freeze(Object.defineProperty({__proto__:null,init:Fb,meta:Ub},Symbol.toStringTag,{value:"Module"}));var Hb=Object.defineProperty,qb=Object.getOwnPropertyDescriptor,Zo=(e,t,n,r)=>{for(var i=r>1?void 0:r?qb(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Hb(t,n,i),i};function Ku(e,t){return(kt.instance??Kb()).open(e,t)}function Kb(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let kt=class extends ve{constructor(){super(...arguments),this.rows=[],this.subject="",this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((n,r)=>{const i=this.rows[r],s=i.field.trim(),a=i.label.trim()||s;return{...n,field:s,label:a,hidden:i.hidden}});this.finish(t)},this.toggleAllHidden=()=>{const e=this.rows.length>0&&this.rows.every(t=>t.hidden);this.rows=this.rows.map(t=>({...t,hidden:!e}))}}connectedCallback(){super.connectedCallback(),kt.instance=this}disconnectedCallback(){super.disconnectedCallback(),kt.instance===this&&(kt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&ht(this.dialogEl,e)}open(e,t){return this.source=e,this.subject=t??"",this.rows=e.map(n=>({field:n.field,label:n.label,hidden:!!n.hidden})),new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((n,r)=>{const i=n.field.trim().toLowerCase();if(i===""){e.add(r);return}(t.get(i)??t.set(i,[]).get(i)).push(r)});for(const n of t.values())if(n.length>1)for(const r of n)e.add(r);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,n){this.rows=this.rows.map((r,i)=>i===e?{...r,[t]:n}:r)}setHidden(e,t){this.rows=this.rows.map((n,r)=>r===e?{...n,hidden:t}:n)}render(){const e=this.invalidIndices(),t=e.size;return $`
      <dialog @cancel=${this.onCancel} @keydown=${dt}>
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
              ${t>0?`Fix ${t} column name${t===1?"":"s"} — names must be unique and non-empty.`:se}
            </p>
          </div>
        </form>
      </dialog>
    `}};kt.instance=null;kt.styles=[ut,$e`
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
    `];Zo([N()],kt.prototype,"rows",2);Zo([N()],kt.prototype,"subject",2);kt=Zo([Ce("column-names-dialog")],kt);const Vb=Object.freeze(Object.defineProperty({__proto__:null,get ColumnNamesDialog(){return kt},editColumnNames:Ku},Symbol.toStringTag,{value:"Module"}));async function Gb(e,t,n){const r=t.origin?.url;if(!r)throw new Error(`"${t.name}" has no source URL to reload from.`);const i={api:e,fetchText:(te,W)=>Di(e,te,W??`Reading ${t.name}…`,{maxBytes:null}),panel:{}},s=await n.list(i,{kind:"url",url:r});if(s.length===0)throw new Error(`Nothing to read at ${r} any more.`);const a=s.find(te=>te.name===t.name)??(s.length===1?s[0]:void 0);if(!a)throw new Error(`"${t.name}" is no longer one of the tables at ${r}.`);let c=[];const d=[];for await(const te of n.read(i,a))te.columns?.length&&(c=te.columns),d.push(...te.rows);const{columns:p,newFields:g}=Pi(t.columns,c,t.deletedColumns??[]),b=t.origin?.pks??[],y=new Set(c.map(te=>te.field)),C=t.columns.map(te=>te.field).filter(te=>!y.has(te)&&!b.includes(te)),x=(t.deletedColumns??[]).filter(te=>y.has(te)),k=e.store.rows(t.id),I=await k.find(),{data:L,merged:U}=Kc({oldRows:I.map(te=>({data:te.data})),freshRows:d,pks:b,userAddedFields:C,deletedRemoteFields:x}),B=Date.now();p.length>0&&await e.store.tables.patch(t.id,{columns:p,updatedAt:B}),await k.bulkRemove(I.map(te=>te.id));const Y=L.map(te=>({id:Ee(),tableId:t.id,data:te,updatedAt:B}));return await k.bulkInsert(Y),{rowCount:Y.length,newFields:g,merged:U}}var Wb=Object.defineProperty,Yb=Object.getOwnPropertyDescriptor,Fe=(e,t,n,r)=>{for(var i=r>1?void 0:r?Yb(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Wb(t,n,i),i};const Xb="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",Jb="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",Qb='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',Xl=[{label:"Northwind — sample database (JSON dump)",url:Xb,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:Jb,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],Zb={id:"import-data",name:"Import Data",type:"importer",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/import-data.ts"};function ew(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:Qb,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>nw(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:n})=>tw(t,n)})}async function tw(e,t){const n=await e.store.tables.findOne(t);if(n?.origin?.url)try{const r=await Vu(n.origin.type);if(!r)throw new Error(`No importer is installed that can read a "${n.origin.type}" source.`);const i=await Gb(e,n,r),s=[];i.newFields.length>0&&s.push(`${i.newFields.length} new column${i.newFields.length===1?"":"s"}`),!i.merged&&i.rowCount>0&&s.push("rows replaced (no primary key to match on)"),e.ui.dialogs.toast(`Refreshed "${n.name}" (${i.rowCount.toLocaleString()} rows)${s.length?` — ${s.join(", ")}`:""}.`,{kind:i.newFields.length>0?"warning":"success",title:"Refresh"})}catch(r){e.ui.dialogs.toast(`Couldn't refresh "${n.name}": ${r.message}`,{kind:"error",title:"Refresh"})}}async function nw(e,t="auto"){const r=await(_e.instance??cw()).open({presetKind:t,async listDatabases(k){const I=Rt(k);return Zc(L=>e.backend.fetch(L),I.base)},async listTables(){const k=e.workspaceId();return(await e.store.tables.find()).filter(I=>I.workspaceId===k&&!I.source).map(I=>({id:I.id,name:I.name})).sort((I,L)=>I.name.localeCompare(L.name))}});if(!r)return;const{url:i,file:s,kind:a,dbChosen:c,editColumns:d,maxRows:p,mode:g,panel:b,target:y}=r,C=s?.name??i,x=d?(k,I)=>Ku(k,I):void 0;typeof b.separator=="string"&&b.separator;try{const k=await Vu(a);if(k){const I=a==="json"?await rw(e,i,s,p,g):null;if(I?.isDump&&await e.ui.dialogs.confirm(`"${C}" is a workspace dump, not a plain table. Restore it — tables, window layout, views and filters? Choose Cancel to import only its tables as data.`,"Restore workspace")){await Mo(e,I.text,C,{maxRows:p,editColumns:x,...s?{}:{originUrl:i}});return}const L=s?s.name:Ln(i),U=I?{kind:"text",text:I.text,name:L}:s?{kind:"file",file:s}:{kind:"url",url:i},B=await Uc(e,k,U,{mode:g,target:y,maxRows:p,panel:b,...I&&!s?{origin:{type:k.id,url:i}}:{},...x?{editColumns:Y=>x(Y)}:{}});k.ownToasts||iw(e,B,C);return}if(g==="reference"&&!s){a==="datasette"?await lw(e,i):await Gu(e,i,a);return}await Go(e,i,{skipTablePicker:c,maxRows:p,editColumns:x})}catch(k){e.ui.dialogs.toast(`Could not import ${C}: ${k.message}`,{kind:"error",title:"Import"})}}async function rw(e,t,n,r,i){if(i==="reference")return null;const s=n?await n.text():await Di(e,t,`Reading ${Ln(t)}…`,r!=null?{maxBytes:null}:{});try{return{text:s,isDump:Lo(JSON.parse(s))}}catch{return{text:s,isDump:!1}}}async function Vu(e){const{registries:t}=await ae();return t.importers.find(n=>n.id===e&&n.supports?.kernel===!0)}function iw(e,t,n){if(t.cancelled&&t.landed.length===0)return;const r=t.landed.reduce((a,c)=>a+c.rowCount,0),i=t.landed.length===1?`"${t.landed[0].tableName}"`:`${t.landed.length} tables from ${n}`;if(t.landed.length>0){const a=t.failed.length>0?` — ${t.failed.length} failed`:"";e.ui.dialogs.toast(`Imported ${i} (${r.toLocaleString()} rows)${a}.`,{kind:t.failed.length>0?"warning":"success",title:"Import"});return}const s=t.failed.map(a=>`${a.name}: ${a.error}`).join("; ");e.ui.dialogs.toast(`Could not import ${n}${s?` — ${s}`:""}.`,{kind:"error",title:"Import"})}function sw(e){const t=JSON.parse(e),n=r=>Array.isArray(r)&&r.every(i=>i!=null&&typeof i=="object"&&!Array.isArray(i));if(n(t))return t;if(t&&typeof t=="object"){const r=t;for(const i of["rows","records","data"])if(n(r[i]))return r[i];for(const i of Object.values(r))if(n(i))return i}return[]}function ow(e){const t=sw(e).slice(0,50),n=i=>typeof i=="number"?"number":typeof i=="boolean"?"boolean":"string",r=new Map;for(const i of t)for(const[s,a]of Object.entries(i))!r.has(s)&&a!=null?r.set(s,n(a)):r.has(s)||r.set(s,"string");return[...r.entries()].map(([i,s])=>({field:i,label:i,type:s}))}function aw(e,t,n){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(n)}.json?_size=max`}async function lw(e,t){const n=Rt(t),i=await Ko(c=>e.backend.fetch(c),n,"Reference");if(i===null)return;if(i.length===0)throw new Error("No tables found to reference at that URL.");let s=0;const a=[];for(const c of i)try{await Gu(e,aw(n.base,c.db,c.table),"json",{nameHint:`${c.db}/${c.table}`,silent:!0}),s++}catch(d){a.push(`${c.table}: ${d.message}`)}e.ui.dialogs.toast(`Referenced ${s} table${s===1?"":"s"}${a.length?` — ${a.length} failed`:""}.`,{kind:a.length?"warning":"success",title:"Reference"})}async function Gu(e,t,n,r={}){const i=e.workspaceId();if(!i)throw new Error("No active workspace.");const s=r.nameHint??Ln(t),a=await Di(e,t,`Reading ${s}…`,{maxBytes:null}),c=n==="csv"?Mn(a).columns:ow(a);if(c.length===0)throw new Error("No columns found in the referenced data.");const d=new Set((await e.store.tables.find()).filter(b=>b.workspaceId===i).map(b=>b.name.toLowerCase()));let p=s;for(let b=2;d.has(p.toLowerCase());b++)p=`${s}-${b}`;const g={id:Ee(),workspaceId:i,name:p,code:Ve(p),columns:c,view:"table",source:{type:"url",config:{url:t,format:n}},readonly:!0,updatedAt:Date.now()};await e.store.tables.insert(g),r.silent||e.ui.dialogs.toast(`Referenced ${p} — live, read-only.`,{kind:"success",title:"Reference"})}function cw(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function uw(e){try{const t=new URL(e),n=t.hostname.toLowerCase(),r=[...t.searchParams.keys()].some(s=>s.startsWith("_")),i=n.includes("datasette")||r;return!r&&/\.(csv|tsv|tab)$/i.test(t.pathname)?"csv":!r&&/\.json$/i.test(t.pathname)?"json":i?"datasette":"json"}catch{return"json"}}function Jl(e,t){if(t!=="datasette"||!e)return!1;try{const n=Rt(e);return!n.db&&!n.table}catch{return!1}}function dw(e){return/\.(csv|tsv|tab)$/i.test(e)?"csv":"json"}let _e=class extends ve{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.targetKind="new",this.targetTableId="",this.tables=[],this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.panelEl=null,this.mountedPanel="",this.panelGeneration=0,this.formats=[],this.acceptAttr=".txt",this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t&&!this.file)return;const n=this.resolvedKind,r=this.maxRows,i=this.editColumns&&this.mode==="copy",s=this.panelValue(),a=this.supportsTarget?this.target:{kind:"new"},c=this.file?"copy":this.mode;if(this.file){this.finish({url:"",file:this.file,kind:n,editColumns:i,maxRows:r,mode:c,panel:s,target:a});return}const d=n==="datasette"&&!!this.selectedDb&&Jl(t,n),p=d?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:p,kind:n,dbChosen:d,editColumns:i,maxRows:r,mode:c,panel:s,target:a})}}get supportsTarget(){return this.formats.find(e=>e.id===this.resolvedKind)?.kernel===!0}get target(){return this.mode==="reference"||this.targetKind==="new"||!this.targetTableId?{kind:"new"}:{kind:this.targetKind,tableId:this.targetTableId}}get resolvedKind(){return this.kind!=="auto"?this.kind:this.file?dw(this.file.name):uw(this.url.trim())}get maxRows(){const e=Math.floor(Number(this.maxRowsInput));return Number.isFinite(e)&&e>0?e:void 0}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),_e.instance=this}disconnectedCallback(){super.disconnectedCallback(),_e.instance===this&&(_e.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&ht(this.dialogEl,e)}updated(){const e=this.shadowRoot?.querySelector(".panel-slot");if(!e){this.panelEl=null,this.mountedPanel="";return}const t=this.activePanelTag,n=t?`${t}#${this.panelGeneration}`:"";if(n===this.mountedPanel||(e.replaceChildren(),this.panelEl=null,this.mountedPanel=n,!t))return;const r=document.createElement(t);r.addEventListener("change",()=>this.requestUpdate()),e.appendChild(r),this.panelEl=r}get activePanelTag(){return this.formats.find(e=>e.id===this.resolvedKind)?.panel}get activeLabel(){return this.formats.find(e=>e.id===this.resolvedKind)?.label??this.resolvedKind}panelValue(){const e=this.panelEl?.value;return e&&typeof e=="object"?e:{}}async loadFormats(){const{registries:e}=await ae(),t=[...e.importers].sort((i,s)=>(i.order??Number.MAX_SAFE_INTEGER)-(s.order??Number.MAX_SAFE_INTEGER)).map(i=>({id:i.id,label:i.label,panel:i.panel,kernel:i.supports?.kernel})),n=t.some(i=>i.id==="datasette")?t:[...t,{id:"datasette",label:"Datasette (table or instance)"}];this.formats=n;const r=new Set([".txt"]);for(const i of e.importers)for(const s of i.accept??[])r.add(s);this.acceptAttr=[...r].join(",")}open(e){this.targetKind="new",this.targetTableId="",this.tables=[],e?.listTables?.().then(n=>{this.tables=n}),this.url="",this.kind=e?.presetKind??"auto",this.presetIdx=-1,this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.panelGeneration+=1,this.resetDbList(),this.listDatabases=e?.listDatabases??null;const t=this.loadFormats();return new Promise(n=>{this.resolveFn=n,t.then(()=>this.updateComplete).then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const n=Xl[t];n&&(this.url=n.url,this.kind=n.kind)}onFileChange(e){const n=e.target.files?.[0]??null;this.file=n,n&&(this.url="",this.presetIdx=-1,this.resetDbList())}renderDbPicker(){return!this.listDatabases||!Jl(this.url.trim(),this.resolvedKind)?se:$`
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
      ${this.dbError?$`<p class="hint error">${this.dbError}</p>`:se}
    `}renderTarget(){if(!this.supportsTarget||this.mode==="reference")return se;const e=this.targetKind!=="new";return $`
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
              </select>`:se}
        </div>
      </label>
      ${e?$`<p class="hint">
            The table keeps its own columns. Values map onto them the way the format requires — a
            CSV by column position, so its header names need not match.
          </p>`:se}
    `}renderPluginBlock(){const e=this.renderDbPicker();return!!!this.activePanelTag&&e===se?se:$`
      <fieldset class="block">
        <legend>${this.activeLabel} options</legend>
        <div class="panel-slot"></div>
        ${e}
      </fieldset>
    `}render(){return $`
      <dialog @cancel=${this.onCancel} @keydown=${dt}>
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
                  ${Xl.map((e,t)=>$`<option value=${String(t)} ?selected=${t===this.presetIdx}>
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
              ${this.file?$`<p class="hint">Uploaded files can only be imported as a Copy.</p>`:se}
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
    `}};_e.instance=null;_e.styles=[ut,$e`
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
    `];Fe([N()],_e.prototype,"url",2);Fe([N()],_e.prototype,"kind",2);Fe([N()],_e.prototype,"presetIdx",2);Fe([N()],_e.prototype,"dbList",2);Fe([N()],_e.prototype,"dbLoading",2);Fe([N()],_e.prototype,"dbError",2);Fe([N()],_e.prototype,"selectedDb",2);Fe([N()],_e.prototype,"editColumns",2);Fe([N()],_e.prototype,"file",2);Fe([N()],_e.prototype,"maxRowsInput",2);Fe([N()],_e.prototype,"mode",2);Fe([N()],_e.prototype,"targetKind",2);Fe([N()],_e.prototype,"targetTableId",2);Fe([N()],_e.prototype,"tables",2);Fe([N()],_e.prototype,"formats",2);Fe([N()],_e.prototype,"acceptAttr",2);_e=Fe([Ce("import-dialog")],_e);const hw=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return _e},init:ew,meta:Zb},Symbol.toStringTag,{value:"Module"})),fw={id:"auto-sync",name:"Auto Sync",type:"sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-sync.ts"},pw=6e4;let Ql=null,fo=!1;const qs=new Map;function mw(e){Ql===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(Ql=setInterval(()=>{Wu(e)},pw)))}async function Wu(e){if(fo)return;const t=e.workspaceId();if(!t)return;const n=await ku(e);if(n)try{await gw(e,n,t)}catch(r){console.warn("[auto-sync]",r)}}async function gw(e,t,n){const r=await Fi(e),i=await _u(e,n),s=await fetch(`${t}/sync/${encodeURIComponent(n)}`);if(s.status===404){await Zl(e,t,n,r,null);return}if(!s.ok)return;const a=Bi(s.headers.get("ETag")),c=await s.text();if(Ll(r)===Ll(c)){a&&a!==i&&await gn(e,n,a);return}if(a&&a===i){await Zl(e,t,n,r,i);return}if(!(a&&qs.get(n)===a)){fo=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${n}". Pull and replace your local copy?`,"auto-sync")){const p=JSON.parse(c),g=await Cu(e,n,p);a&&await gn(e,n,a),qs.delete(n),e.ui.dialogs.toast(`Pulled ${g} table${g===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else a&&qs.set(n,a)}finally{fo=!1}}}async function Zl(e,t,n,r,i){const s={"Content-Type":"application/json"};i&&(s["If-Match"]=`"${i}"`);const a=await fetch(`${t}/sync/${encodeURIComponent(n)}`,{method:"PUT",headers:s,body:r});if(a.ok){const c=Bi(a.headers.get("ETag"));c&&await gn(e,n,c);return}if(a.status===412){const c=await a.json().catch(()=>({}));c.currentEtag&&await gn(e,n,c.currentEtag)}}const Yu=Object.freeze(Object.defineProperty({__proto__:null,load:mw,meta:fw,tick:Wu},Symbol.toStringTag,{value:"Module"}));var bw=Object.defineProperty,ww=Object.getOwnPropertyDescriptor,Un=(e,t,n,r)=>{for(var i=r>1?void 0:r?ww(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&bw(t,n,i),i};function po(e,t){(ot.instance??yw()).open(e,t)}function yw(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function Ks(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let ot=class extends ve{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.mode==="template"?this.saveTemplate():this.mode==="instance"?this.saveInstance():this.close()}}connectedCallback(){super.connectedCallback(),ot.instance=this}disconnectedCallback(){super.disconnectedCallback(),ot.instance===this&&(ot.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&ht(this.dialogEl,e)}async open(e,t){if(this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),t?.editTemplateId){const n=this.templates.find(r=>r.id===t.editTemplateId);n&&this.editTemplate(n)}else if(t?.editInstanceId){const n=this.instances.find(r=>r.id===t.editInstanceId);n&&await this.editInstance(n)}await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await ae(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(n=>n.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((n,r)=>n.name.localeCompare(r.name))}async openInstance(e){await(await ae()).store.viewInstances.patch(e,{open:!0,updatedAt:Date.now()}),this.close()}async editInstance(e){const n=await(await ae()).store.viewTemplates.findOne(e.templateId),r=n?Al(n.headerHtml,n.rowHtml,n.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:n?.name??"template",name:e.name,tokens:r,mapping:{...e.mapping},limit:e.limit??0,readonly:e.readonly??!1},this.mode="instance"}async deleteInstance(e){await(await ae()).store.viewInstances.remove(e),await this.refresh()}async copyInstance(e){const t=await ae(),n=this.columns.filter(i=>!i.hidden).map(i=>i.field),r={...e,id:Ks(),name:`${e.name} copy`,visibleColumns:n,open:!1,windowGeometry:void 0,updatedAt:Date.now()};await t.store.viewInstances.insert(r),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async deleteTemplate(e){const t=await ae();await t.api.ui.dialogs.confirm(e.builtin?`Delete the built-in template "${e.name}"? It will not be seeded again in this workspace. Views already created from it keep working.`:`Delete the template "${e.name}"? Views already created from it keep working.`,e.builtin?"Delete built-in template":"Delete template")&&(await t.store.viewTemplates.remove(e.id),document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh())}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await ae(),n=this.templates.find(r=>r.id!==e.id&&r.name.trim().toLowerCase()===e.name.trim().toLowerCase());if(n){await t.api.ui.dialogs.alert(`A template called “${n.name}” already exists. Pick another name.`,"Duplicate template name");return}if(e.id){const r=this.templates.find(i=>i.id===e.id)?.builtin;await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,...r?{builtin:!1}:{},updatedAt:Date.now()})}else await t.store.viewTemplates.insert({id:Ks(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()});document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh(),this.mode="list"}useTemplate(e){const t=Al(e.headerHtml,e.rowHtml,e.footerHtml),n={};for(const r of t)n[r]=this.autoMap(r);this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:n,limit:0,readonly:!1},this.mode="instance"}firstColumn(e){const t=this.columns.find(e);return t?t.field:""}autoMap(e){const t=e.toLowerCase(),n=this.columns.find(b=>b.field.toLowerCase()===t||(b.label??"").toLowerCase()===t);if(n)return n.field;const r=/^check(\d+)$/i.exec(e);if(r){const b=Number(r[1])-1;return this.columns.filter(C=>C.type==="boolean")[b]?.field??""}if(["done","complete","completed","checked","check","read","active","enabled","starred","flag","ok"].includes(t))return this.firstColumn(b=>b.type==="boolean");const s=this.table?.labelColumn;if(s&&(t==="title"||t==="name"||t==="label"))return s;if(["date","datetime","time","created","updated","modified","timestamp","day","when"].includes(t))return this.firstColumn(b=>b.type==="date"||b.type==="datetime");const c=["url","link","href","website","homepage","uri","site","web"];if(c.includes(t)){const b=this.firstColumn(y=>y.renderer==="link");return b||this.firstColumn(y=>{const C=y.field.toLowerCase(),x=(y.label??"").toLowerCase();return c.some(k=>C.includes(k)||x.includes(k))})}const d=b=>y=>{const C=y.field.toLowerCase(),x=(y.label??"").toLowerCase();return b.some(k=>C.includes(k)||x.includes(k))},p=["image","img","photo","picture","pic","thumbnail","thumb","avatar","cover","poster","logo","icon"];if(p.includes(t)){const b=this.firstColumn(C=>C.renderer==="image");if(b)return b;const y=this.firstColumn(d(p));return y||this.firstColumn(d(["url","src","href","link"]))}if(["email","mail","e-mail"].includes(t))return this.firstColumn(d(["mail"]));if(["phone","tel","telephone","mobile","cell","cellphone"].includes(t))return this.firstColumn(d(["phone","tel","mobile","cell"]));const g=["description","desc","notes","note","body","text","summary","about","comment","comments","details","detail","remarks"];if(g.includes(t)){const b=this.firstColumn(k=>{if(k.type!=="string")return!1;const I=k.field.toLowerCase(),L=(k.label??"").toLowerCase();return g.some(U=>I.includes(U)||L.includes(U))});if(b)return b;const y=this.columns.filter(k=>k.type==="string"),C=y[0];if(!C)return"";let x=C;for(const k of y)(k.max??0)>(x.max??0)&&(x=k);return x.field}return""}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await ae();if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},limit:e.limit>0?e.limit:void 0,readonly:e.readonly,updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.mode="list";return}const n=this.columns.filter(i=>!i.hidden).map(i=>i.field),r={id:Ks(),workspaceId:t.workspaceId,tableId:this.tableId,tableName:this.table.name,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:n,mapping:{...e.mapping},updatedAt:Date.now(),...e.limit>0?{limit:e.limit}:{},...e.readonly?{readonly:!0}:{}};await t.store.viewInstances.insert(r),await this.openInstance(r.id)}renderList(){return $`
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
                ${e.builtin?$`<span class="badge">built-in</span>`:se}
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
      <dialog @cancel=${this.close} @keydown=${dt}>
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
    `}};ot.instance=null;ot.styles=[ut,$e`
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
    `];Un([N()],ot.prototype,"mode",2);Un([N()],ot.prototype,"instances",2);Un([N()],ot.prototype,"templates",2);Un([N()],ot.prototype,"tDraft",2);Un([N()],ot.prototype,"iDraft",2);ot=Un([Ce("views-dialog")],ot);const vw={id:"views",name:"Views",type:"ui",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/views.ts"},xw="grid_view",$w={slug:"rss",name:"RSS Feed",header:'<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>','<div style="display:flex;gap:16px;margin-top:8px;">$input.CHECK1$input.CHECK2</div>',"</div>"].join(""),footer:"</div>"},kw={slug:"todo-list",name:"Todo List",header:'<div style="display:flex;flex-direction:column;gap:6px;padding:12px;max-width:720px;margin:0 auto;">',row:['<div style="display:flex;align-items:center;gap:10px;border:1px solid #e5e7eb;border-radius:8px;padding:8px 12px;background:#ffffff;">',"$input.DONE",'<span style="flex:1;font-weight:500;color:#111827;">$TITLE</span>','<span style="color:#6b7280;font-size:0.8rem;white-space:nowrap;">$DUE</span>',"</div>"].join(""),footer:"</div>"},_w={slug:"gallery",name:"Gallery",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;padding:12px;">',row:['<figure style="margin:0;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$LINK" target="_blank" rel="noopener noreferrer" style="display:block;text-decoration:none;color:inherit;">','<img src="$IMAGE" alt="$TITLE" loading="lazy" style="width:100%;height:150px;object-fit:cover;display:block;background:#f3f4f6;" />','<figcaption style="padding:6px 8px;font-size:0.85rem;color:#374151;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">$TITLE</figcaption>',"</a>","</figure>"].join(""),footer:"</div>"},Cw={slug:"contact-cards",name:"Contact Cards",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:10px;padding:12px 14px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<div style="font-weight:600;color:#111827;font-size:0.95rem;">$NAME</div>','<a href="mailto:$EMAIL" style="color:#2563eb;text-decoration:none;font-size:0.85rem;word-break:break-all;">$EMAIL</a>','<div style="color:#6b7280;font-size:0.85rem;margin-top:2px;">$PHONE</div>',"</div>"].join(""),footer:"</div>"},Sw=[$w,kw,_w,Cw];function Ew(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:xw,tooltip:"Views -- display this table through a template",onClick:(t,{tableId:n})=>po(n)})}async function Tw(e){await Aw(e)}function Iw(e){let t=5381;const n=`${e.header} ${e.row} ${e.footer}`;for(let r=0;r<n.length;r++)t=(t<<5)+t+n.charCodeAt(r)|0;return(t>>>0).toString(36)}async function Aw(e){const t=e.workspaceId();if(!t)return;const n=await e.store.viewTemplates.find({workspaceId:t});for(const r of Sw)await Rw(e,t,r,n)}async function Rw(e,t,n,r){const i=`views:seeded:${n.slug}:${t}`,s=`views:sig:${n.slug}:${t}`,a=Iw(n),c=r.find(p=>p.builtin&&p.name===n.name);if(c){(await e.store.settings.findOne(s))?.value!==a&&(await e.store.viewTemplates.patch(c.id,{headerHtml:n.header,rowHtml:n.row,footerHtml:n.footer,updatedAt:Date.now()}),await e.store.settings.upsert({name:s,value:a})),await e.store.settings.upsert({name:i,value:!0});return}(await e.store.settings.findOne(i))?.value||(await e.store.viewTemplates.insert({id:Ow(),workspaceId:t,name:n.name,headerHtml:n.header,rowHtml:n.row,footerHtml:n.footer,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({name:i,value:!0}),await e.store.settings.upsert({name:s,value:a}))}function Ow(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Dw=Object.freeze(Object.defineProperty({__proto__:null,init:Ew,load:Tw,meta:vw},Symbol.toStringTag,{value:"Module"})),Pw={id:"settings",name:"Settings",type:"ui",fixed:!0,version:"0.1.0",description:"Header gear button that opens the tabbed Settings dialog; imports dropped secrets.txt.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/settings.ts"};function Lw(e){e.ui.registerHeaderButton({id:"settings:open",label:"Settings",icon:"settings",tooltip:"Workspace and plugin settings",variant:"secondary",onClick:()=>e.ui.openSettings()}),e.ui.registerDropHandler(async(t,n)=>{const i=Array.from(t.dataTransfer?.files??[]).find(c=>c.name.toLowerCase()==="secrets.txt");if(!i)return!1;const s=await i.text(),a=Object.keys(pr(s)).length;return Oi().trim().length>0&&!await n.ui.dialogs.confirm(`Replace your current secrets with ${a} secret${a===1?"":"s"} from "${i.name}"?`,"Import secrets")||(Cc(s),n.ui.dialogs.toast(`Imported ${a} secret${a===1?"":"s"}.`,{kind:"success",title:"Secrets"})),!0})}const Mw=Object.freeze(Object.defineProperty({__proto__:null,init:Lw,meta:Pw},Symbol.toStringTag,{value:"Module"}));function jw(e,t){const n=e.sources[0];if(!n)return[];let i=(t[n.alias]??[]).map(c=>({[n.alias]:c}));for(let c=1;c<e.sources.length;c++){const d=e.sources[c];if(!d)continue;const p=t[d.alias]??[],g=d.join,b=[];for(const y of i){const C=g?p.filter(x=>g.on.every(k=>Nw(x.data[k.field],y[k.eqAlias]?.data[k.eqField]))):[];if(C.length>0)for(const x of C)b.push({...y,[d.alias]:x});else g?.type==="left"&&b.push({...y,[d.alias]:void 0})}i=b}const s=[],a=new Map;for(const c of i){const d=c[n.alias];if(!d)continue;const p=zw(e.columns,c);if(!Uw(p,e.filters))continue;const g=a.get(d.id)??0;a.set(d.id,g+1),s.push({id:`${d.id}#${g}`,tableId:"",data:p,updatedAt:Fw(c)})}return s}function zw(e,t){const n={};for(const r of e)r.from.kind==="source"&&(n[r.field]=t[r.from.alias]?.data[r.from.field]);for(const r of e)if(r.from.kind==="script"){const i=zo(r.from.script,n);n[r.field]=i.ok?i.value:void 0}return n}function Nw(e,t){return e==null||t==null?!1:e===t?!0:typeof e!="object"&&typeof t!="object"?String(e)===String(t):!1}function Uw(e,t){if(!t)return!0;for(const[n,r]of Object.entries(t)){if(!r)continue;const i=e[n];if(!(i==null?"":String(i)).toLowerCase().includes(r.toLowerCase()))return!1}return!0}function Fw(e){let t=0;for(const n of Object.values(e))n&&n.updatedAt>t&&(t=n.updatedAt);return t}function Xi(e){const t=e.sources[0]?.alias,n=new Set;if(!t)return n;for(const r of e.columns)r.from.kind==="source"&&r.from.alias===t&&n.add(r.field);return n}const Vs=e=>e.toLowerCase().replace(/[^a-z0-9]/g,""),Gs=e=>e.endsWith("s")&&e.length>1?e.slice(0,-1):e;function Bw(e,t,n,r){const i=Vs(e),s=Vs(n);if(!i||!s)return 0;if(i===s)return i==="id"?0:i.endsWith("id")?9:7;const a=(c,d,p)=>{if(c!=="id"||!p.endsWith("id")||p.length<=2)return 0;const g=p.slice(0,-2),b=Vs(d);return g===b||g===Gs(b)||Gs(g)===Gs(b)?9:5};return Math.max(a(i,t,s),a(s,r,i))}function Hw(e,t){let n=null,r=0;for(const i of t)for(const s of e.fields)for(const a of i.fields){const c=Bw(s,e.tableName,a,i.tableName);c>r&&(r=c,n={thisField:s,otherAlias:i.alias,otherField:a})}return n}function qw(e,t,n){if(!Xi(e).has(n))return null;const r=e.columns.find(a=>a.field===n);if(!r||r.from.kind!=="source")return null;const i=t.lastIndexOf("#");return{baseRowId:i>=0?t.slice(0,i):t,field:r.from.field}}class Kt extends Error{constructor(t="this cell is derived"){super(`Projection is read-only — ${t}. Edit a base-table column, or import a copy.`),this.name="ProjectionReadOnlyError"}}const Ws=new Set,Kw=8;let Ys=0;function Vw(e){const t=e;return!t||!Array.isArray(t.sources)||!Array.isArray(t.columns)?{version:1,sources:[],columns:[]}:t}function Gw(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}function Ww(e,t){const n=Vw(t.source?.config),r=new Set;let i=[],s=!1;const a=new Map;let c=null,d=!1;async function p(){const x=await e.tables.find({workspaceId:t.workspaceId}),k=new Map;for(const L of x)k.has(L.name)||k.set(L.name,L);const I=new Map;for(const L of n.sources){let U;if(L.tableId){const B=x.find(Y=>Y.id===L.tableId);B&&B.name===L.tableName&&(U=B)}U??=k.get(L.tableName),U&&I.set(L.alias,U.id)}return I}async function g(){if(Ws.has(t.id)||Ys>=Kw)return[];Ws.add(t.id),Ys++;try{const x=await p(),k={};for(const I of n.sources){const L=x.get(I.alias);if(!L)return[];k[I.alias]=await e.rows(L).find()}return jw(n,k).map(I=>({...I,tableId:t.id}))}finally{Ws.delete(t.id),Ys--}}async function b(){const x=await p(),k=new Set(x.values());for(const[I,L]of a)k.has(I)||(L(),a.delete(I));for(const I of k)a.has(I)||a.set(I,e.rows(I).subscribe(y))}function y(){d||(d=!0,queueMicrotask(async()=>{d=!1,await b(),i=await g(),s=!0;for(const x of r)x(i)}))}async function C(x,k){const I=Xi(n),L={};let U=null;for(const[X,ie]of Object.entries(k)){if(!I.has(X))continue;const re=qw(n,x,X);re&&(U=re.baseRowId,L[re.field]=ie)}if(!U||Object.keys(L).length===0)throw new Kt;const B=await p(),Y=n.sources[0]?.alias,te=Y?B.get(Y):void 0;if(!te)throw new Kt("the base table is not available");const W=e.rows(te),H=await W.findOne(U);if(!H)throw new Kt("the underlying row no longer exists");return await W.patch(U,{data:{...H.data,...L},updatedAt:Date.now()}),{id:x,tableId:t.id,data:k,updatedAt:Date.now()}}return{async find(x){const k=(s||(i=await g(),s=!0),i);return!x||Object.keys(x).length===0?k:k.filter(I=>Gw(I,x))},async findOne(x){return(s?i:await g()).find(I=>I.id===x)??null},async insert(){throw new Kt("rows are derived from other tables")},async bulkInsert(){throw new Kt("rows are derived from other tables")},async upsert(x){return C(x.id,x.data)},async patch(x,k){if(!k.data)throw new Kt("a cell edit must carry row data");return C(x,k.data)},async remove(){throw new Kt("rows are derived from other tables")},async bulkRemove(){throw new Kt("rows are derived from other tables")},subscribe(x){return r.add(x),c||(c=e.tables.subscribe(y)),s?x(i):y(),()=>{if(r.delete(x),r.size===0){c?.(),c=null;for(const k of a.values())k();a.clear(),s=!1}}},async refresh(){await b(),i=await g(),s=!0;for(const x of r)x(i)}}}var Yw=Object.defineProperty,Xw=Object.getOwnPropertyDescriptor,Er=(e,t,n,r)=>{for(var i=r>1?void 0:r?Xw(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Yw(t,n,i),i};let yt=class extends ve{constructor(){super(...arguments),this.name="",this.sources=[],this.columns=[],this.error="",this.candidates=[],this.editing=!1,this.dialogEl=null,this.submit=async e=>{e.preventDefault(),this.error="";const t=this.buildSpec();if(!(!t||!this.onSave)){try{await this.onSave(t.name,t.spec)}catch(n){this.error=n?.message??String(n);return}this.dialogEl?.close()}}}connectedCallback(){super.connectedCallback(),yt.instance=this}disconnectedCallback(){super.disconnectedCallback(),yt.instance===this&&(yt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&ht(this.dialogEl,e)}open(e){this.candidates=e.candidates,this.onSave=e.onSave,this.error="",this.editing=!!e.initial,this.name="",this.sources=[],this.columns=[],e.initial?this.loadFrom(e.initial.name,e.initial.spec):e.base&&(this.name=`${e.base.name} view`,this.addCandidateAsSource(e.base)),this.updateComplete.then(()=>this.dialogEl?.showModal())}loadFrom(e,t){this.name=e,this.sources=t.sources.map(n=>{const r=this.candidates.find(s=>s.name===n.tableName)??this.candidates.find(s=>s.id===n.tableId),i=n.join?.on[0];return{alias:n.alias,tableId:r?.id??n.tableId??"",tableName:n.tableName,columns:r?.columns??[],...n.join&&i?{join:{type:n.join.type,thisField:i.field,otherAlias:i.eqAlias,otherField:i.eqField}}:{}}}),this.columns=t.columns.map(n=>n.from.kind==="source"?{include:!0,label:n.label,type:n.type,alias:n.from.alias,field:n.from.field,computed:!1}:{include:!0,label:n.label,type:n.type,script:n.from.script,computed:!0})}nextAlias(){for(let e=0;;e++){const t=String.fromCharCode(97+e%26)+(e>=26?String(Math.floor(e/26)):"");if(!this.sources.some(n=>n.alias===t))return t}}addSource(e){const t=this.candidates.find(n=>n.id===e);t&&this.addCandidateAsSource(t)}addCandidateAsSource(e){const t=this.nextAlias(),n=this.sources.length===0;let r;if(!n){const s=Hw({tableName:e.name,fields:e.columns.map(a=>a.field)},this.sources.map(a=>({alias:a.alias,tableName:a.tableName,fields:a.columns.map(c=>c.field)})));r={type:"left",thisField:s?.thisField??e.columns[0]?.field??"",otherAlias:s?.otherAlias??this.sources[0]?.alias??"",otherField:s?.otherField??""}}const i={alias:t,tableId:e.id,tableName:e.name,columns:e.columns,...r?{join:r}:{}};this.sources=[...this.sources,i],this.columns=[...this.columns,...e.columns.map(s=>({include:!0,label:s.label,type:s.type,alias:t,field:s.field,computed:!1}))]}removeSource(e){this.sources=this.sources.filter(t=>t.alias!==e),this.columns=this.columns.filter(t=>t.computed||t.alias!==e)}addComputed(){this.columns=[...this.columns,{include:!0,label:"computed",type:"string",script:`function render(row) {
  return "";
}`,computed:!0}]}patchSource(e,t){this.sources=this.sources.map(n=>n.alias===e&&n.join?{...n,join:{...n.join,...t}}:n)}buildSpec(){const e=this.name.trim();if(!e)return this.fail("Give the projection a name.");if(this.sources.length===0)return this.fail("Add at least one source table.");const t=this.columns.filter(s=>s.include);if(t.length===0)return this.fail("Select at least one column.");for(const s of this.sources)if(s.join&&(!s.join.thisField||!s.join.otherField))return this.fail(`Set both join keys for "${s.tableName}".`);const n=new Set,r=t.map(s=>{const a=Jw(s.label,n);return s.computed?{field:a,label:s.label.trim()||a,type:s.type,from:{kind:"script",script:s.script??""}}:{field:a,label:s.label.trim()||a,type:s.type,from:{kind:"source",alias:s.alias,field:s.field}}}),i={version:1,sources:this.sources.map(s=>({alias:s.alias,tableName:s.tableName,tableId:s.tableId,...s.join?{join:{type:s.join.type,on:[{field:s.join.thisField,eqAlias:s.join.otherAlias,eqField:s.join.otherField}]}}:{}})),columns:r};return{name:e,spec:i}}fail(e){return this.error=e,null}aliasesBefore(e){const t=this.sources.findIndex(n=>n.alias===e);return this.sources.slice(0,t)}render(){const e=this.sources[0];return $`
      <dialog @cancel=${()=>this.dialogEl?.close()} @keydown=${dt}>
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
            <label class="row">
              Name
              <input .value=${this.name} @input=${t=>this.name=t.target.value} />
            </label>

            <h3>Sources</h3>
            ${this.sources.map((t,n)=>this.renderSource(t,n===0))}
            <div class="row">
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
            </div>

            <h3>Columns</h3>
            <div class="cols">
              ${this.columns.map((t,n)=>this.renderColumn(t,n))}
            </div>
            <div class="row">
              <button type="button" class="ghost sm" @click=${()=>this.addComputed()}>+ Computed column</button>
            </div>

            <div class="err">${this.error}</div>
          </div>
        </form>
      </dialog>
    `}renderSource(e,t){return $`
      <div class="src">
        <div class="row">
          <strong>${e.tableName}</strong>
          <span class="muted">${t?"(base)":""} alias “${e.alias}”</span>
          ${t?"":$`<button type="button" class="ghost sm" @click=${()=>this.removeSource(e.alias)}>Remove</button>`}
        </div>
        ${e.join?$`<div class="row">
              <select
                .value=${e.join.type}
                @change=${n=>this.patchSource(e.alias,{type:n.target.value})}
              >
                <option value="left">LEFT JOIN</option>
                <option value="inner">INNER JOIN</option>
              </select>
              on
              <select
                .value=${e.join.thisField}
                @change=${n=>this.patchSource(e.alias,{thisField:n.target.value})}
              >
                ${e.columns.map(n=>$`<option value=${n.field} ?selected=${n.field===e.join?.thisField}>${e.alias}.${n.field}</option>`)}
              </select>
              =
              <select
                .value=${`${e.join.otherAlias}.${e.join.otherField}`}
                @change=${n=>{const[r,i]=n.target.value.split(".");this.patchSource(e.alias,{otherAlias:r??"",otherField:i??""})}}
              >
                ${this.aliasesBefore(e.alias).flatMap(n=>n.columns.map(r=>$`<option
                        value=${`${n.alias}.${r.field}`}
                        ?selected=${n.alias===e.join?.otherAlias&&r.field===e.join?.otherField}
                      >
                        ${n.alias}.${r.field}
                      </option>`))}
              </select>
            </div>`:""}
      </div>
    `}renderColumn(e,t){const n=r=>{this.columns=this.columns.map((i,s)=>s===t?{...i,...r}:i)};return $`
      <input type="checkbox" .checked=${e.include} @change=${r=>n({include:r.target.checked})} />
      ${e.computed?$`<div class="row" style="flex-direction:column;align-items:stretch;gap:0.25rem;">
            <div class="row">
              <input .value=${e.label} @input=${r=>n({label:r.target.value})} />
              <span class="muted">computed</span>
            </div>
            <textarea .value=${e.script??""} @input=${r=>n({script:r.target.value})}></textarea>
          </div>`:$`<div class="row">
            <span class="muted">${e.alias}.${e.field} →</span>
            <input .value=${e.label} @input=${r=>n({label:r.target.value})} />
          </div>`}
      <span></span>
    `}};yt.instance=null;yt.styles=[ut,$e`
      dialog {
        min-width: 560px;
        max-width: 760px;
      }
      .dialog-body {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      h3 {
        margin: 0.2rem 0 0;
        font-size: 0.9rem;
        color: #374151;
      }
      input,
      select,
      textarea {
        font: inherit;
        padding: 0.35rem 0.45rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        background: white;
      }
      .row {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex-wrap: wrap;
      }
      .src {
        border: 1px solid #e5e7eb;
        border-radius: 0.4rem;
        padding: 0.6rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      .cols {
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 0.35rem 0.5rem;
        align-items: center;
      }
      .muted {
        color: #6b7280;
        font-size: 0.78rem;
      }
      .err {
        color: #b91c1c;
        font-size: 0.82rem;
        min-height: 1.1em;
      }
      button.ghost.sm {
        padding: 0.2rem 0.5rem;
        font-size: 0.8rem;
      }
      textarea {
        width: 100%;
        min-height: 3.5rem;
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 0.78rem;
      }
    `];Er([N()],yt.prototype,"name",2);Er([N()],yt.prototype,"sources",2);Er([N()],yt.prototype,"columns",2);Er([N()],yt.prototype,"error",2);yt=Er([Ce("projection-dialog")],yt);function Jw(e,t){const n=e.trim().toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")||"col";let r=n,i=2;for(;t.has(r);)r=`${n}_${i++}`;return t.add(r),r}const Qw={id:"projection",name:"Projection (virtual tables)",type:"source",version:"0.1.0",description:'Virtual tables ("Projections") whose rows are derived live from other tables — database views and JOINs that look and act like tables.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h7v10H4z"/><path d="M13 7h7v10h-7z"/><path d="M11 12h2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/projection.ts"};function Zw(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"projection",create:t=>Ww(e.store,t)}),e.ui.registerTableButton({id:"projection:new",label:"New Projection",icon:"add_box",tooltip:"Create a virtual table using THIS table as the base (view / JOIN)",onClick:(t,{tableId:n})=>void Xs(t,{baseTableId:n})}),e.ui.registerTableButton({id:"projection:edit",label:"Edit Projection",icon:"table_view",tooltip:"Edit this projection’s sources and columns",visible:t=>t.source?.type==="projection",onClick:(t,{tableId:n})=>void Xs(t,{editTableId:n})}),document.addEventListener("easydb:edit-projection",t=>{const n=t.detail?.tableId;n&&Xs(e,{editTableId:n})})}function ey(e){const t=Xi(e);return e.columns.map(n=>{const r={field:n.field,label:n.label,type:n.type};return n.from.kind==="script"&&(r.script=n.from.script),t.has(n.field)||(r.readonly=!0),r})}async function Xs(e,t){const n=e.workspaceId();if(!n)return;const r=await e.store.tables.find({workspaceId:n}),i=c=>({id:c.id,name:c.name,columns:c.columns}),s=yt.instance??ty();if(t.editTableId){const c=r.find(d=>d.id===t.editTableId)??null;if(!c||c.source?.type!=="projection")return;s.open({candidates:r.filter(d=>d.id!==c.id).map(i),initial:{name:c.name,spec:c.source.config},onSave:ec(e,n,c)});return}const a=r.find(c=>c.id===t.baseTableId);a&&s.open({base:i(a),candidates:r.filter(c=>c.id!==a.id).map(i),onSave:ec(e,n,null)})}function ec(e,t,n){return async(r,i)=>{const s=ey(i),a=Xi(i).size===0,c={type:"projection",config:i};n?await e.store.tables.patch(n.id,{name:r,columns:s,source:c,readonly:a,updatedAt:Date.now()}):await e.store.tables.insert({id:Ee(),workspaceId:t,name:r,code:Ve(r),columns:s,view:"table",source:c,readonly:a,updatedAt:Date.now()})}}function ty(){const e=document.createElement("projection-dialog");return document.body.appendChild(e),e}const ny=Object.freeze(Object.defineProperty({__proto__:null,init:Zw,meta:Qw},Symbol.toStringTag,{value:"Module"})),ry=[Mw,og,ff,Nf,Vf,Wp,cm,gm,wf,zm,$m,Jm,rg,dg,gg,vg,_g,Tg,xb,Cb,Ob,Nb,Bb,hw,Yu,Dw,ny];function iy(e){if(!e.meta)throw new Error("Built-in plugin is missing meta");return e.meta}const Xu=ry.map(e=>{const t=iy(e);return{id:t.id,meta:t,module:e}}),sy=Xu;function mo(e){return`builtin:${e}`}async function oy(e){const t=[];for(const n of Xu)if(!await ay(e,n)){t.push(n);try{await n.module.init?.(e)}catch(r){e.events.emit("plugin:error",{url:n.id,phase:"init",error:r})}}return async()=>{for(const n of t)try{await n.module.load?.(e)}catch(r){e.events.emit("plugin:error",{url:n.id,phase:"load",error:r})}}}async function ay(e,t){return t.meta.fixed?!1:gt==="all-optional"?!0:(await e.store.plugins.findOne(mo(t.id)))?.enabled===!1}var ly=Object.defineProperty,cy=Object.getOwnPropertyDescriptor,vt=(e,t,n,r)=>{for(var i=r>1?void 0:r?cy(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&ly(t,n,i),i};let Je=class extends ve{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.tableColumns=[],this.rows=[],this.showColsMenu=!1,this.allRows=[],this.searchQuery="",this.globalQuery="",this.onSearch=e=>{const t=e.detail;t.tableId===this.viewInstanceId&&(this.searchQuery=t.query??"",this.recompute())},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??"",this.recompute()},this.onInputChange=async e=>{const t=e.target;if(!(t instanceof HTMLInputElement)||!t.classList.contains("eda-input")||!this.instance||this.instance.readonly===!0)return;const n=t.getAttribute("data-eda-row"),r=t.getAttribute("data-eda-field"),i=t.getAttribute("data-eda-type")??"string";if(!n||!r)return;const s=this.allRows.find(d=>d.id===n);if(!s)return;let a;if(i==="boolean")a=t.checked;else if(i==="number"){const d=Number(t.value);a=t.value.trim()===""?null:Number.isNaN(d)?t.value:d}else a=t.value;await(await ae()).store.rows(this.instance.tableId).patch(n,{data:{...s.data,[r]:a},updatedAt:Date.now()})},this.onPillClick=async e=>{const t=e.target;if(!(t instanceof HTMLElement)||!t.classList.contains("eda-filter-pill")||!this.instance)return;const n=t.getAttribute("data-eda-filter-field"),r=t.getAttribute("data-eda-filter-value");if(!n||r==null)return;const i=Im(this.instance.pillFilters?.[n],r),s={...this.instance.pillFilters??{},[n]:i};await(await ae()).store.viewInstances.patch(this.instance.id,{pillFilters:s,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:s},this.recompute()}}get templateOn(){return this.instance?.templateEnabled!==!1}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:table-search",this.onSearch),document.addEventListener("easydb:global-search",this.onGlobalSearch),await this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:table-search",this.onSearch),document.removeEventListener("easydb:global-search",this.onGlobalSearch),this.rowsUnsub?.(),this.instUnsub?.()}async updated(e){e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}async reload(){this.rowsUnsub?.(),this.loaded=!1,await this.load()}async load(){if(!this.viewInstanceId)return;this.rowsUnsub?.(),this.instUnsub?.();const e=await ae(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const n=await e.store.tables.findOne(t.tableId);this.tableColumns=n?.columns??[],n&&t.tableName!==n.name&&e.store.viewInstances.patch(t.id,{tableName:n.name});const r=new Map(this.tableColumns.map(s=>[s.field,s]));this.columns=t.visibleColumns.map(s=>r.get(s)??{field:s,label:s,type:"string"}),this.instUnsub=e.store.viewInstances.subscribe(s=>{const a=s.find(c=>c.id===this.viewInstanceId);if(a){if(a.tableId!==this.instance?.tableId){this.instance=a,this.reload();return}this.instance=a,this.recompute()}});const i=e.store.rows(t.tableId);this.rowsUnsub=i.subscribe(s=>{this.allRows=s,this.recompute()}),this.allRows=await i.find(),this.recompute(),this.loaded=!0}recompute(){if(!this.instance)return;const e=Tm(this.allRows,this.tableColumns),t=bu(e,this.instance);let n=t;const r=this.searchQuery.trim(),i=this.globalQuery.trim();r&&(n=xi(n,r,this.tableColumns)),i&&(n=xi(n,i,this.tableColumns));const s=this.instance.limit??0;s>0&&n.length>s&&(n=n.slice(0,s)),this.rows=n,this.templateOn&&Gc(this.viewInstanceId,n.length,t.length)}async removePill(e,t){if(!this.instance)return;const n=Am(this.instance.pillFilters?.[e],t),r={...this.instance.pillFilters??{}};n===""?delete r[e]:r[e]=n,await(await ae()).store.viewInstances.patch(this.instance.id,{pillFilters:r,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:r},this.recompute()}async setSortColumn(e){if(!this.instance)return;await(await ae()).store.viewInstances.patch(this.instance.id,{sortColumn:e||void 0,updatedAt:Date.now()}),this.instance={...this.instance,sortColumn:e||void 0},this.recompute()}async toggleSortDir(){if(!this.instance?.sortColumn)return;const e=!(this.instance.sortAsc??!0);await(await ae()).store.viewInstances.patch(this.instance.id,{sortAsc:e,updatedAt:Date.now()}),this.instance={...this.instance,sortAsc:e},this.recompute()}async toggleTemplate(){if(!this.instance)return;const e=!this.templateOn;await(await ae()).store.viewInstances.patch(this.instance.id,{templateEnabled:e,updatedAt:Date.now()}),this.instance={...this.instance,templateEnabled:e},this.showColsMenu=!1}editTemplate(){!this.instance||!this.template||po(this.instance.tableId,{editTemplateId:this.template.id})}editView(){this.instance&&po(this.instance.tableId,{editInstanceId:this.instance.id})}async deleteView(){if(!this.instance)return;const e=await ae();await e.api.ui.dialogs.confirm(`Delete the view "${this.instance.name}"? The table and its rows stay.`,"Delete view")&&await e.store.viewInstances.remove(this.instance.id)}async toggleColumn(e){if(!this.instance)return;const t=this.instance.visibleColumns,r=t.includes(e)?t.filter(s=>s!==e):[...t,e];if(r.length===0)return;await(await ae()).store.viewInstances.patch(this.instance.id,{visibleColumns:r,updatedAt:Date.now()}),this.instance={...this.instance,visibleColumns:r}}renderTable(){return this.rows.length===0?$`<div class="vw-empty">No rows.</div>`:$`
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
    `}renderTemplated(){const e=this.template;if(!e)return $`<div class="vw-empty">This view's template is missing.</div>`;if(Om(e.rowHtml)){const t=this.instance?.mapping??{},n=new Map(this.tableColumns.map(a=>[a.field,a])),r=this.instance?.readonly===!0,i=this.rows.map(a=>Sm(e.rowHtml,a,t,{columns:n,readonly:r})).join(""),s=(e.headerHtml??"")+i+(e.footerHtml??"");return $`<div class="vw-root">${In(s)}</div>`}return $`<div class="vw-root">
      ${e.headerHtml?.trim()?$`<div class="vw-html">${In(e.headerHtml)}</div>`:se}
      ${this.renderTable()}
      ${e.footerHtml?.trim()?$`<div class="vw-html">${In(e.footerHtml)}</div>`:se}
    </div>`}renderSortBar(){if(!this.instance)return se;const e=this.tableColumns.filter(r=>r.sortable!==!1),t=this.instance.sortColumn??"",n=this.instance.sortAsc??!0;return $`<div class="vw-sortbar">
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
    </div>`}renderPillBar(){const e=this.instance?.pillFilters;if(!e)return se;const t=[];for(const[n,r]of Object.entries(e))if(r)for(const i of $r(r))i.term&&t.push({field:n,value:i.term});return t.length===0?se:$`<div class="vw-pillbar">
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
    </div>`}renderFooter(){if(!this.instance)return se;const e=this.templateOn,t=new Set(this.instance.visibleColumns);return $`<div class="vw-footer">
      ${!e&&this.showColsMenu?$`<div class="cols-menu">
            ${this.tableColumns.map(n=>$`<label
                  ><input
                    type="checkbox"
                    .checked=${t.has(n.field)}
                    @change=${()=>void this.toggleColumn(n.field)}
                  />${n.label||n.field}</label
                >`)}
          </div>`:se}
      ${e?se:$`<button
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
    </div>`}render(){if(!this.loaded)return $`<div class="vw-body scroll"><div class="vw-loading">Loading…</div></div>`;if(this.error)return $`<div class="vw-body scroll"><div class="vw-empty">${this.error}</div></div>`;const e=this.templateOn,t=e?$`<div class="vw-body scroll" @change=${this.onInputChange} @click=${this.onPillClick}>
          ${this.renderTemplated()}
        </div>`:$`<div class="vw-body grid">
          <data-table
            .tableId=${this.instance?.tableId??""}
            .viewInstanceId=${this.viewInstanceId}
          ></data-table>
        </div>`;return $`${e?this.renderSortBar():se}${this.renderPillBar()}${t}${this.renderFooter()}`}};Je.styles=[ft,$e`
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
    `];vt([ct({type:String})],Je.prototype,"viewInstanceId",2);vt([N()],Je.prototype,"loaded",2);vt([N()],Je.prototype,"error",2);vt([N()],Je.prototype,"instance",2);vt([N()],Je.prototype,"template",2);vt([N()],Je.prototype,"columns",2);vt([N()],Je.prototype,"tableColumns",2);vt([N()],Je.prototype,"rows",2);vt([N()],Je.prototype,"showColsMenu",2);vt([N()],Je.prototype,"searchQuery",2);vt([N()],Je.prototype,"globalQuery",2);Je=vt([Ce("view-window")],Je);const nt=new Map;async function uy(){await Promise.all([...nt.keys()].map(e=>pi(e)))}function dy(e){const t=nt.get(e);if(!t)return!1;const n=t.panel;return n.status==="minimized"&&n.normalize(),n.front(),!0}let tc=!1;function go(e){e.panel.setHeaderTitle(e.name+Wc(e.count,e.total))}function hy(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function fy(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function Ju(e){return`view-panel-${fy(e)}`}async function py(){if(tc)return;tc=!0;const e=await ae(),t=r=>r.filter(i=>i.workspaceId===e.workspaceId&&i.open),n=t(await e.store.viewInstances.find()).sort(Ci);for(const r of n)nc(r,e);e.store.viewInstances.subscribe(r=>{const i=new Map(t(r).map(a=>[a.id,a]));for(const a of[...nt.keys()])i.has(a)||gy(a);const s=[...i.values()].filter(a=>!nt.has(a.id)).sort(Ci);for(const a of s)nc(a,e)}),e.store.tables.subscribe(r=>void my(e,r)),document.addEventListener($i,r=>{const i=r.detail,s=nt.get(i.key);s&&s.el&&(s.count=i.count,s.total=i.total,go(s))}),document.addEventListener("easydb:reload-view",r=>{const i=r.detail?.instanceId;if(!i)return;const s=nt.get(i);s&&(async()=>{const a=await e.store.viewInstances.findOne(i);a&&(s.name=a.name,go(s)),s.el?.reload()})()}),document.addEventListener("easydb:reload-views",()=>{for(const{el:r}of nt.values())r?.reload()})}async function my(e,t){const n=t.filter(a=>a.workspaceId===e.workspaceId),r=new Set(n.map(a=>a.id)),i=new Map;for(const a of n)i.has(a.name)||i.set(a.name,a);const s=await e.store.viewInstances.find();for(const a of s){if(a.workspaceId!==e.workspaceId||r.has(a.tableId)||!a.tableName)continue;const c=i.get(a.tableName);c&&await e.store.viewInstances.patch(a.id,{tableId:c.id,updatedAt:Date.now()})}}function nc(e,t){if(nt.has(e.id))return;const n=Ju(e.id),r=e.windowGeometry,i=r?.minimized===!0,s=()=>{const C=document.createElement("view-window");return C.viewInstanceId=e.id,C.style.height="100%",C},a=i?document.createElement("div"):s();let c;const d=()=>{c&&(c.el?.remove(),c.el=null,c.count=-1,c.total=-1,go(c))},p=()=>{if(!c||c.el)return;const C=document.getElementById(n)?.querySelector(".jsPanel-content");if(!C)return;C.replaceChildren();const x=s();C.appendChild(x),c.el=x},g=Si({id:n,container:hy(),title:e.name,logo:zg,color:"#0891b2",content:a,...r?{panelSize:{w:r.w,h:r.h},position:{x:r.x,y:r.y}}:{contentSize:{w:480,h:520},position:{centerTopOffset:60}},minimizeTo:"#easydb-minimized-dock",viewport:wr(),boot:{minimized:r?.minimized===!0,maximized:r?.maximized===!0},onmoved:()=>void pi(e.id),onresized:()=>void pi(e.id),onfronted:()=>void by(e.id,t),onstatuschange:C=>{C.status==="minimized"?d():(C.status==="normalized"||C.status==="maximized")&&p(),pi(e.id)},onclosed:()=>{nt.delete(e.id),Yi(e.id),t.store.viewInstances.patch(e.id,{open:!1,updatedAt:Date.now()}).catch(()=>{})}});c={panel:g,el:i?null:a,name:e.name,count:-1,total:-1},nt.set(e.id,c),Ru(e.id,()=>g.front(void 0,!1));const b=document.getElementById(n),y=document.createElement("panel-search");y.tableId=e.id,b?.querySelector(".jsPanel-controlbar")?.prepend(y)}function gy(e){const t=nt.get(e);if(t){nt.delete(e),Yi(e);try{t.panel.status!=="closed"&&t.panel.close()}catch{}}}function by(e,t){return Gi(`view:${e}`,()=>wy(e,t))}async function wy(e,t){try{const n=await t.store.viewInstances.findOne(e);if(!n)return;const r=n.windowGeometry??{x:0,y:0,w:480,h:520,z:0,minimized:!1,maximized:!1};await t.store.viewInstances.patch(e,{windowGeometry:{...r,z:Au()},updatedAt:Date.now()})}catch{}}function pi(e){return Gi(`view:${e}`,()=>yy(e))}async function yy(e){const t=document.getElementById(Ju(e)),n=nt.get(e);if(!t||!n)return;const{minimized:r,maximized:i}=n.panel.persistFlags();try{const s=await ae(),a=(await s.store.viewInstances.findOne(e))?.windowGeometry;let c=t.offsetLeft,d=t.offsetTop,p=t.offsetWidth,g=t.offsetHeight;(r||i)&&a&&(c=a.x,d=a.y,p=a.w,g=a.h),c<=-9e3&&(c=a?.x??40);const b={x:c,y:d,w:p,h:g,z:a?.z??0,minimized:r,maximized:i};await s.store.viewInstances.patch(e,{windowGeometry:b,updatedAt:Date.now()})}catch{}}function Qu(e){return e.filter(t=>t.status!=="minimized")}function vy(e,t,n){if(e<=0)return[];const r=Math.ceil(Math.sqrt(e)),i=Math.ceil(e/r),s=(t.w-n*(r+1))/r,a=(t.h-n*(i+1))/i;return Array.from({length:e},(c,d)=>{const p=d%r,g=Math.floor(d/r);return{x:t.x+n+p*(s+n),y:t.y+n+g*(a+n),w:s,h:a}})}function Fn(){return jg()}function xy(){for(const e of Fn())e.close?.()}function $y(){for(const e of Fn())e.minimize?.()}function ky(){for(const e of Fn())e.normalize?.()}function _y(){for(const e of Fn())e.maximize?.()}function Zu(){const e=document.getElementById("easydb-panels"),t=e?.clientWidth??window.innerWidth,n=e?.clientHeight??window.innerHeight,r=Ei()?.snapshot(),i=r?.scale&&r.scale>0?r.scale:1,s=r?.x??0,a=r?.y??0;return{x:-s/i,y:-a/i,w:t/i,h:n/i}}function ed(e,t,n,r,i){e.style.left=`${Math.round(t)}px`,e.style.top=`${Math.round(n)}px`,e.style.width=`${Math.round(r)}px`,e.style.height=`${Math.round(i)}px`}function Cy(){const e=Qu(Fn()).reverse();if(e.length===0)return;const t=Zu(),n=32,r=Math.min(680,Math.max(320,t.w*.6)),i=Math.min(480,Math.max(240,t.h*.6));e.forEach((s,a)=>{s.normalize?.(),ed(s,t.x+24+a*n,t.y+24+a*n,r,i)}),td()}function td(){Pu(),uy()}function Sy(){const e=Qu(Fn()).reverse();if(e.length===0)return;const n=vy(e.length,Zu(),8);e.forEach((r,i)=>{r.normalize?.();const s=n[i];s&&ed(r,s.x,s.y,s.w,s.h)}),td()}function Ey(e){const t=[{id:"windows:minimize-all",title:"Minimize all windows",icon:"remove",run:$y},{id:"windows:restore-all",title:"Restore all windows",icon:"crop_square",run:ky},{id:"windows:maximize-all",title:"Maximize all windows",icon:"fullscreen",run:_y},{id:"windows:cascade",title:"Cascade windows",icon:"view_agenda",run:Cy},{id:"windows:tile",title:"Tile windows",icon:"grid_view",run:Sy},{id:"windows:close-all",title:"Close all windows",icon:"close",run:xy}];for(const i of t)e.ui.registerCommand({id:i.id,title:i.title,group:"Windows",icon:i.icon,run:i.run});const n="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md",r="https://github.com/cawoodm/easydbaccess/tree/main/docs";e.ui.registerCommand({id:"app:search",title:"Search all tables",group:"App",icon:"search",keywords:["find","global search","filter"],run:()=>{document.dispatchEvent(new CustomEvent("easydb:focus-search"))}}),e.ui.registerCommand({id:"app:plugins",title:"Plugins",group:"App",icon:"extension",keywords:["plugin manager","install","extensions"],run:i=>i.ui.openPluginManager()}),e.ui.registerCommand({id:"app:changelog",title:"Changelog",group:"App",icon:"history",keywords:["releases","version","whats new"],run:()=>{window.open(n,"_blank","noopener")}}),e.ui.registerCommand({id:"app:docs",title:"Documentation",group:"App",icon:"menu_book",keywords:["docs","help","guide","manual"],run:()=>{window.open(r,"_blank","noopener")}})}async function Ty(e){if(gt==="url-plugins"||gt==="all-optional")return async()=>{};const t=e.workspaceId();if(!t)return async()=>{};const r=(await e.store.workspaces.findOne(t))?.pluginUrls??[],i=[];for(const s of r)try{const a=await e.store.plugins.findOne(s);if(a&&a.enabled===!1)continue;let c=a?.cachedBody??"";if(c)Iy(e,s,c);else{try{c=await nd(s)}catch(g){await e.store.plugins.upsert({url:s,enabled:a?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${g.message}`}),e.events.emit("plugin:error",{url:s,phase:"fetch",error:g});continue}await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),cachedBody:c})}const d=new Blob([c],{type:"text/javascript"}),p=URL.createObjectURL(d);try{const g=await import(p);await g.init?.(e),i.push({url:s,mod:g})}finally{setTimeout(()=>URL.revokeObjectURL(p),5e3)}}catch(a){await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),lastError:`init: ${a.message}`}),e.events.emit("plugin:error",{url:s,phase:"init",error:a})}return async()=>{for(const{url:s,mod:a}of i)try{await a.load?.(e)}catch(c){await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),lastError:`load: ${c.message}`}),e.events.emit("plugin:error",{url:s,phase:"load",error:c})}}}async function nd(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const n=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(n))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return n}function Iy(e,t,n){return(async()=>{try{const r=await nd(t);if(r===n)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:r})}catch{}})()}let Js=null;function ae(){return Js||(Js=Ay()),Js}async function Ay(){const e=await xc();let t="";const n=Sh(e,()=>t),r=Th(),i=Lh(),s=new Map;n.tables.subscribe(I=>{s.clear();for(const L of I)s.set(L.id,L)});const a={...n.tables,insert:I=>(s.set(I.id,I),n.tables.insert(I)),upsert:I=>(s.set(I.id,I),n.tables.upsert(I))};let c=null;const d={get backend(){if(!c)throw new Error("[host] row-source ctx used before app init completed");return c.backend},events:r,settings:n.settings,workspaceId:()=>y},p=Eh({base:{...n,tables:a},providers:i.rowSources,tableById:I=>s.get(I),ctx:d}),g=Ry(),b=await p.workspaces.find();let y;if(g){const I=id(g),L=b.find(U=>U.id===I||U.name===g);L?y=L.id:y=(await p.workspaces.insert({id:I,name:g,createdAt:Date.now(),pluginUrls:[]})).id}else{const I=Oy(),L=I?b.find(U=>U.id===I):void 0;L?y=L.id:b.length>0?y=b[0].id:y=(await p.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}t=y,Dy(y);const C=Uh({store:p,events:r,registries:i,workspaceId:()=>y});c=C,Ey(C),r.on("import:after",({source:I,tableId:L,rowCount:U})=>{I!=="datasette"&&C.store.tables.findOne(L).then(B=>{C.ui.dialogs.toast(`Imported ${U} row${U===1?"":"s"} into "${B?.name??L}".`,{kind:"success",title:I.toUpperCase()+" import"})})}),r.on("plugin:error",({url:I,phase:L,error:U})=>{C.ui.dialogs.toast(`[${L}] ${U?.message??String(U)}`,{kind:"error",title:`Plugin: ${I}`})});const x=await oy(C),k=await Ty(C);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:y}),await x(),await k(),gt==="all-optional"?C.ui.dialogs.toast("Safe mode is ON: only fixed built-ins (Settings, core rendering) loaded. All other built-in plugins and URL-installed plugins are disabled for this session only — nothing was changed. Disable the culprit below, then reload without ?safemode.",{kind:"warning",title:"Safe mode"}):gt==="url-plugins"&&C.ui.dialogs.toast("Safe mode (URL plugins) is ON: URL-installed plugins were not loaded this session. Built-in plugins are unaffected. Reload without ?safemode1 to restore them.",{kind:"warning",title:"Safe mode"}),gt!=="off"&&C.ui.openPluginManager()}),globalThis.api=C,{store:p,events:r,workspaceId:y,registries:i,api:C}}function Ry(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const rd="eda:lastWorkspaceId";function Oy(){try{return globalThis.localStorage?.getItem(rd)??null}catch{return null}}function Dy(e){try{globalThis.localStorage?.setItem(rd,e)}catch{}}function id(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var Py=Object.defineProperty,Ly=Object.getOwnPropertyDescriptor,Ji=(e,t,n,r)=>{for(var i=r>1?void 0:r?Ly(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Py(t,n,i),i};let Pn=class extends ve{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&ht(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let n;try{n=Mn(this.text)}catch(a){this.errorMsg=`Couldn't parse the CSV: ${a.message}`;return}if(n.columns.length===0||n.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const r=await ae(),i=crypto.randomUUID();await r.store.tables.insert({id:i,workspaceId:r.workspaceId,name:t,code:Ve(t),columns:n.columns,view:"table",updatedAt:Date.now()});const s=n.rows.map(a=>({id:crypto.randomUUID(),tableId:i,data:a,updatedAt:Date.now()}));await r.store.rows(i).bulkInsert(s),r.api.ui.dialogs.toast(`Imported ${n.rows.length} row${n.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return $`
      <dialog @cancel=${this.close} @keydown=${dt}>
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
    `}};Pn.styles=[ut,$e`
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
    `];Ji([N()],Pn.prototype,"name",2);Ji([N()],Pn.prototype,"text",2);Ji([N()],Pn.prototype,"errorMsg",2);Pn=Ji([Ce("csv-paste-dialog")],Pn);const ea=new Set;let rc=!1;function My(){return ea.size>0}function jy(e){ea.add(e),Ny()}function zy(e){ea.delete(e)}function sd(e,t){const n=()=>{t.open&&jy(e)};t.addEventListener("input",n),t.addEventListener("change",n),t.addEventListener("close",()=>zy(e))}function Ny(){rc||(rc=!0,window.addEventListener("beforeunload",e=>{My()&&(e.preventDefault(),e.returnValue="")}))}var Uy=Object.defineProperty,Fy=Object.getOwnPropertyDescriptor,ta=(e,t,n,r)=>{for(var i=r>1?void 0:r?Fy(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Uy(t,n,i),i};const By=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return the value this column should display.
  return row.name ?? '';
}
`;let At=class extends ve{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),At.instance=this}disconnectedCallback(){super.disconnectedCallback(),At.instance===this&&(At.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&ht(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:By,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(n=>{this.resolver=n})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return $`
      <dialog @cancel=${this.onCancel} @keydown=${dt}>
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
    `}};At.instance=null;At.styles=[ut,$e`
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
    `];ta([N()],At.prototype,"text",2);ta([N()],At.prototype,"columnLabel",2);At=ta([Ce("script-editor-dialog")],At);function ic(e){const t={...e.orig??{},field:e.field.trim(),label:e.label.trim()||e.field.trim(),type:e.type};return e.renderer?t.renderer=e.renderer:delete t.renderer,e.script?t.script=e.script:delete t.script,e.max!=null&&e.max>0?t.max=e.max:delete t.max,e.unique?t.unique=!0:delete t.unique,e.notnull?t.notnull=!0:delete t.notnull,e.hidden?t.hidden=!0:delete t.hidden,e.sortable===!1?t.sortable=!1:delete t.sortable,e.filterable===!1?t.filterable=!1:delete t.filterable,t}var Hy=Object.defineProperty,qy=Object.getOwnPropertyDescriptor,We=(e,t,n,r)=>{for(var i=r>1?void 0:r?qy(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Hy(t,n,i),i};const Ky=["string","number","boolean","date","datetime"];let Ne=class extends ve{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.tableReadonly=!1,this.columns=[],this.errorMsg="",this.noticeMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.columnActions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&ht(this.dialogEl,e),this.dialogEl&&sd("columns-editor",this.dialogEl)}async open(e,t){this.errorMsg="",this.noticeMsg=t?.notice??"";const n=await ae();if(this.rendererOptions=[...n.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.columnActions=[...n.registries.columnEditorActions],this.rendererSubUnsub=n.events.on("app:ready",()=>{this.rendererOptions=[...n.registries.cellRenderers.keys()].sort(),this.columnActions=[...n.registries.columnEditorActions]}),e){const r=await ae(),i=await r.store.tables.findOne(e);if(!i)return;this.mode="edit",this.editTableId=e,this.name=i.name,this.tableTitle=i.title??"",this.tableReadonly=!!i.readonly,this.columns=i.columns.map(a=>({field:a.field,label:a.label,type:a.type,renderer:a.renderer,script:a.script,max:a.max,unique:a.unique,notnull:a.notnull,hidden:a.hidden,sortable:a.sortable,filterable:a.filterable,origField:a.field,orig:a}));const s=await r.store.rows(e).find();this.previewRows=s.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.tableReadonly=!1,this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,n)=>n!==e)}moveColumn(e,t){const n=e+t;if(n<0||n>=this.columns.length)return;const r=[...this.columns],[i]=r.splice(e,1);r.splice(n,0,i),this.columns=r}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,n){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const r=n.getBoundingClientRect(),i=e.clientY<r.top+r.height/2;this.dropTargetIdx=t,this.dropEdge=i?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const n=this.dragSrcIdx,r=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,n===null||n===t||!r)return;const i=[...this.columns],[s]=i.splice(n,1);let a=t+(n<t?-1:0);r==="after"&&(a+=1),i.splice(a,0,s),this.columns=i}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((n,r)=>r===e?{...n,...t}:n)}async runColumnAction(e){this.errorMsg="";const t=await ae();try{const n=await e.run(t.api,{columns:this.columns.map(i=>ic(i)),...this.editTableId?{tableId:this.editTableId}:{}});if(!n)return;const r=new Map(n.map(i=>[i.field,i]));this.columns=this.columns.map(i=>{const s=r.get(i.field);return s?{...i,label:s.label??i.label,type:s.type??i.type,renderer:s.renderer,script:s.script}:i})}catch(n){this.errorMsg=`${e.label} failed: ${n.message}`}}async editScript(e){const t=At.instance;if(!t)return;const n=this.columns[e];if(!n)return;const r=await t.open(n.script??"",n.label||n.field);r!==null&&this.patchColumn(e,{script:r.trim()?r:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}const n=await ae(),r=(await n.store.tables.find()).filter(p=>p.workspaceId===n.workspaceId),i=t.toLowerCase(),s=r.find(p=>p.name.toLowerCase()===i&&p.id!==this.editTableId);if(s){this.errorMsg=`A table named "${s.name}" already exists — names must be unique.`;return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const a=new Set;for(const p of this.columns){const g=p.field.trim();if(!g){this.errorMsg="Column field names cannot be empty.";return}if(a.has(g)){this.errorMsg=`Duplicate column field: ${g}`;return}a.add(g)}const c=this.tableTitle.trim(),d=this.columns.map(ic);if(this.mode==="edit"&&this.editTableId){const p=this.editTableId,g=await n.store.tables.findOne(p),b=new Map((g?.columns??[]).map(W=>[W.field,W])),y=d.filter(W=>{const H=b.get(W.field);return W.unique&&!H?.unique||W.notnull&&!H?.notnull||W.max&&W.max>0&&W.max!==H?.max});if(y.length>0){const W=await n.store.rows(p).find(),H=Wy(y,W);if(H.length>0){this.errorMsg=`Cannot save: ${H.length} existing ${H.length===1?"row violates":"rows violate"} the new constraints.
${H.slice(0,5).join(`
`)}${H.length>5?`
…and ${H.length-5} more.`:""}`;return}}const C=new Set(this.columns.map(W=>W.origField).filter(W=>!!W)),x=new Set(d.map(W=>W.field)),k=(g?.columns??[]).map(W=>W.field).filter(W=>!C.has(W)),I=g?.deletedColumns??[],L=[...new Set([...I,...k])].filter(W=>!x.has(W)),U={name:t,title:c,columns:d,readonly:this.tableReadonly,updatedAt:Date.now()};(L.length>0||I.length>0)&&(U.deletedColumns=L);const B=g?.name;await n.store.tables.patch(p,U);const Y=k.filter(W=>!x.has(W)),te=this.fieldRenames();if(Y.length>0||te.length>0){const W=await n.store.rows(p).find();for(const H of W){let X=!1,ie={...H.data};const re=il(ie,te);re&&(ie=re,X=!0);for(const q of Y)q in ie&&(delete ie[q],X=!0);X&&await n.store.rows(p).patch(H.id,{data:ie,updatedAt:Date.now()})}}if(B!==void 0&&B!==t){const W=(await n.store.viewInstances.find()).filter(H=>H.tableId===p);for(const H of W)H.tableName!==t&&await n.store.viewInstances.patch(H.id,{tableName:t,updatedAt:Date.now()})}}else await n.store.tables.insert({id:Ee(),workspaceId:n.workspaceId,name:t,title:c,code:Ve(t),columns:d,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return $`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=this.fieldRenames(),t=e.length>0?this.previewRows.map(i=>({...i,data:il(i.data,e)??i.data})):this.previewRows,n=new Map;for(const i of this.columns){if(!i.unique)continue;const s=new Set,a=new Set;for(const c of t){const d=c.data[i.field];d==null||d===""||(s.has(d)&&a.add(d),s.add(d))}n.set(i.field,a)}const r=this.columns.filter(i=>!i.hidden);return $`
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
                  ${r.map(s=>{const a=i.data[s.field],c=Gy(s,a,n.get(s.field));return $`<td class=${c?"violation":""} title=${c??""}>
                      ${Vy(a)}
                    </td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}fieldRenames(){return this.mode!=="edit"?[]:this.columns.filter(e=>e.origField&&e.origField!==e.field.trim()).map(e=>({from:e.origField,to:e.field.trim()}))}renameDetected(){return this.fieldRenames().length>0}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return $`
      <dialog @cancel=${this.close} @keydown=${dt}>
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
                      ${Ky.map(c=>$`<option value=${c} ?selected=${c===n.type}>${c}</option>`)}
                    </select>
                    <select
                      title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                      .value=${n.renderer??""}
                      @change=${c=>{const d=c.target.value;this.patchColumn(r,{renderer:d||void 0})}}
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
                      @input=${c=>{const d=c.target.value;this.patchColumn(r,{max:d===""?void 0:Number(d)})}}
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
    `}};Ne.styles=[ft,ut,$e`
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
    `];We([N()],Ne.prototype,"mode",2);We([N()],Ne.prototype,"editTableId",2);We([N()],Ne.prototype,"name",2);We([N()],Ne.prototype,"tableTitle",2);We([N()],Ne.prototype,"tableReadonly",2);We([N()],Ne.prototype,"columns",2);We([N()],Ne.prototype,"errorMsg",2);We([N()],Ne.prototype,"noticeMsg",2);We([N()],Ne.prototype,"dragSrcIdx",2);We([N()],Ne.prototype,"dropTargetIdx",2);We([N()],Ne.prototype,"dropEdge",2);We([N()],Ne.prototype,"previewRows",2);We([N()],Ne.prototype,"rendererOptions",2);We([N()],Ne.prototype,"columnActions",2);Ne=We([Ce("new-table-dialog")],Ne);function Vy(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function Gy(e,t,n){const r=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&r)return`${e.label}: empty`;if(r)return null;if(e.type==="number"&&typeof t!="number"){const i=Number(t);if(!Number.isFinite(i))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!r){const i=new Date(String(t));if(Number.isNaN(i.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&n?.has(t)?`${e.label}: duplicate`:null}function Wy(e,t){const n=[];for(const r of e)if(r.notnull&&t.forEach((i,s)=>{const a=i.data[r.field];(a==null||typeof a=="string"&&a.trim()==="")&&n.push(`Row ${s+1}: ${r.label} is empty.`)}),r.max!=null&&r.max>0&&t.forEach((i,s)=>{const a=i.data[r.field];typeof a=="string"&&a.length>r.max?n.push(`Row ${s+1}: ${r.label} length ${a.length} > max ${r.max}.`):typeof a=="number"&&a>r.max&&n.push(`Row ${s+1}: ${r.label} value ${a} > max ${r.max}.`)}),r.unique){const i=new Map;t.forEach((s,a)=>{const c=s.data[r.field];c==null||c===""||(i.has(c)?n.push(`Row ${a+1}: ${r.label} duplicates row ${i.get(c)+1} ("${String(c)}").`):i.set(c,a))})}return n}var Yy=Object.defineProperty,Xy=Object.getOwnPropertyDescriptor,Ye=(e,t,n,r)=>{for(var i=r>1?void 0:r?Xy(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&Yy(t,n,i),i};const Jy='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',Qy=$`<span class="mi sm">extension</span>`,sc="plugin:catalogUrls";function li(){return new URL("/easydbaccess3/plugins/catalog.json",location.origin).toString()}const Zy=[["installed","Installed"],["built-in","Built-in"],["fixed","Fixed"]],od=[["importer","Importer"],["exporter","Exporter"],["cell-renderer","Cell renderer"],["sync","Sync"],["source","Source"],["ui","UI"]],ev=new Map(od),tv={off:"Filter by status — click: only enabled → only disabled → off",on:"Showing only enabled plugins — click to show only disabled",not:"Showing only disabled plugins — click to clear"};let Ue=class extends ve{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.catalogUrls=[li()],this.activeCatalogUrl=li(),this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&ht(this.dialogEl,e)}async open(){const e=await ae(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const n=await e.store.plugins.find();this.records=new Map(n.map(s=>[s.url,s]));const r=await e.store.settings.findOne(sc),i=Array.isArray(r?.value)?r.value.filter(s=>typeof s=="string"):[];this.catalogUrls=i.length>0?i:[li()],this.activeCatalogUrl=this.catalogUrls[0]??li(),this.addUrl="",this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(this.activeCatalogUrl),this.refreshServerRegistry()}async refreshCatalog(e){try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json(),r=Array.isArray(n.plugins)?n.plugins:[];this.catalog=r.map(i=>({...i,absUrl:new URL(i.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const n=(await(await ae()).store.settings.findOne("server-sync:url"))?.value;if(typeof n!="string"||n.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const i=`${n.replace(/\/+$/,"")}/plugins/registry`;try{const s=await fetch(i,{cache:"no-store"});if(!s.ok)throw new Error(`HTTP ${s.status}`);const a=await s.json(),c=Array.isArray(a.plugins)?a.plugins:[];this.serverCatalog=c.map(d=>({...d,absUrl:new URL(d.url,i).toString()})),this.serverCatalogError=null}catch(s){this.serverCatalog=[],this.serverCatalogError=s.message}}async reloadCatalogSource(){const e=this.activeCatalogUrl.trim();e&&(this.catalogUrls.includes(e)||(this.catalogUrls=[...this.catalogUrls,e],await(await ae()).store.settings.upsert({name:sc,value:this.catalogUrls})),await this.refreshCatalog(e))}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await ae()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const n=await ae();await n.store.workspaces.patch(n.workspaceId,{pluginUrls:this.urls}),await n.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const n=await ae(),r=this.records.get(e);await n.store.plugins.upsert({...r??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...r,url:e,enabled:t,lastFetched:r?.lastFetched??0}))}async removePlugin(e){const t=await ae();this.urls=this.urls.filter(n=>n!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const n=await ae(),r=mo(e),i=this.records.get(r);await n.store.plugins.upsert({...i??{url:r,lastFetched:0},url:r,enabled:t,lastFetched:i?.lastFetched??0}),this.records=new Map(this.records.set(r,{...i,url:r,enabled:t,lastFetched:i?.lastFetched??0}))}async onRowToggle(e,t){if(e.categories.has("built-in"))await this.toggleBuiltin(e.id,t);else if(e.url)await this.toggleEnabled(e.url,t);else return;(await ae()).api.ui.dialogs.toast("Reload to apply this change.",{kind:"info",title:"Plugin updated"})}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await ae();try{const n=await fetch(e.absUrl,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status} ${n.statusText}`);const r=await n.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:r});const i=new Blob([r],{type:"text/javascript"}),s=URL.createObjectURL(i);try{const c=await import(s);await c.init?.(t.api),await c.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(s),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const a=await t.store.plugins.find();this.records=new Map(a.map(c=>[c.url,c])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(n){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${n.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${n.message}`,{kind:"error",title:"Plugin error"})}finally{const n=new Set(this.installing);n.delete(e.absUrl),this.installing=n}}renderTri(e,t,n,r="",i){const s=i?i[t??"off"]:t==="on"?`Showing only ${e} plugins — click to exclude`:t==="not"?`Hiding ${e} plugins — click to clear`:`Filter by ${e} — click: show only → exclude → off`;return $`
      <button
        type="button"
        class=${`tri${r?` ${r}`:""}${t?` ${t}`:""}`}
        title=${s}
        aria-pressed=${t!==void 0}
        @click=${n}
      >
        <span class="tri-mark">${t==="on"?"✓":t==="not"?"≠":""}</span>${e}
      </button>
    `}cycleState(e,t){const n=e.get(t),r=new Map(e);return n===void 0?r.set(t,"on"):n==="on"?r.set(t,"not"):r.delete(t),r}cycleFilter(e){this.filterStates=this.cycleState(this.filterStates,e)}cycleTypeFilter(e){this.typeFilters=this.cycleState(this.typeFilters,e)}cycleStatusFilter(){this.statusFilter=this.statusFilter===void 0?"on":this.statusFilter==="on"?"not":void 0}buildRows(){const e=new Map,t=new Map;for(const{id:n,meta:r}of sy){const i=r.fixed?!0:this.records.get(mo(n))?.enabled!==!1,s=!r.fixed&&gt==="all-optional",a=r.fixed?["built-in","fixed","installed"]:["built-in","installed"];e.set(`builtin:${n}`,{id:n,name:r.name,...r.type?{type:r.type}:{},...r.description?{meta:r.description}:{meta:"Built-in plugin"},...r.author?{author:r.author}:{},...r.icon?{icon:r.icon}:{},...r.repo?{repo:r.repo}:{},categories:new Set(a),enabled:i,status:i&&!s?"enabled":"disabled",fixed:!!r.fixed,...s?{skipped:!0}:{}})}for(const n of[...this.catalog,...this.serverCatalog]){const r=this.urls.includes(n.absUrl),i=this.records.get(n.absUrl),s=r?["available","installed"]:["available"],a=e.get(n.id),c=i?.enabled!==!1,d=r&&gt!=="off";e.set(n.id,{id:n.id,name:n.name,url:n.absUrl,...n.type?{type:n.type}:{},...n.icon?{icon:n.icon}:{},...n.repo?{repo:n.repo}:{},...n.author?{author:n.author}:{},meta:n.description??n.absUrl,categories:a?new Set([...a.categories,...s]):new Set(s),enabled:c,...r?{status:c&&!d?"enabled":"disabled"}:{},...d?{skipped:!0}:{},installing:this.installing.has(n.absUrl)}),t.set(n.absUrl,n.id)}for(const n of this.urls){const r=t.get(n);if(r){e.get(r).categories.add("installed");continue}const i=this.records.get(n),s=i?.lastFetched?new Date(i.lastFetched).toLocaleString():"never",a=i?.enabled!==!1;e.set(`url:${n}`,{id:n,name:n,urlOnly:!0,url:n,meta:i?.lastError??`Last fetched: ${s}`,metaIsError:!!i?.lastError,categories:new Set(["installed"]),enabled:a,status:a&&gt==="off"?"enabled":"disabled",...gt!=="off"?{skipped:!0}:{}})}return[...e.values()]}get filteredRows(){const e=this.buildRows(),t=this.search.trim().toLowerCase(),n=[],r=[];for(const[d,p]of this.filterStates)(p==="on"?n:r).push(d);const i=[],s=[];for(const[d,p]of this.typeFilters)(p==="on"?i:s).push(d);const a=this.statusFilter==="on"?"enabled":this.statusFilter==="not"?"disabled":void 0,c=e.filter(d=>!(n.length&&!n.some(p=>d.categories.has(p))||r.some(p=>d.categories.has(p))||i.length&&!(d.type&&i.includes(d.type))||d.type&&s.includes(d.type)||a&&d.status!==a));return t?c.filter(d=>[d.id,d.name,d.type,d.meta,d.author].some(p=>p?.toLowerCase().includes(t))):c}renderRow(e){const t=e.categories.has("built-in")||e.categories.has("installed"),n=!!e.url&&e.categories.has("installed"),r=!!e.url&&!e.categories.has("installed");return $`
      <div
        class=${`row${e.categories.has("built-in")?" builtin":""}${e.metaIsError?" error":""}${e.skipped?" skipped":""}`}
      >
        <span class="row-icon">${e.icon?In(e.icon):Qy}</span>
        <div class="row-main">
          <div class=${`row-title${e.urlOnly?" mono":""}`}>
            ${e.name}${e.id!==e.name?$`<span class="row-id">${e.id}</span>`:""}${e.type?$`<span class="row-type" title="Plugin type"
                  >${ev.get(e.type)??e.type}</span
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
              >${In(Jy)}</a
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
      <dialog @cancel=${this.close} @keydown=${dt}>
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
            ${gt!=="off"?$`<p class="safemode">
                  <strong>Safe mode is on.</strong>
                  ${gt==="all-optional"?$`<code>?safemode</code> skipped every URL plugin and every optional
                        built-in for this session.`:$`<code>?safemode1</code> skipped every URL plugin for this session.`}
                  Plugins marked <span class="row-skipped">skipped</span> are not running. The
                  toggles below still show — and change — your saved settings, which safe mode never
                  touches. Reload without the flag to run them again.
                </p>`:""}

            <div class="filters">
              <div class="chips">
                ${Zy.map(([t,n])=>this.renderTri(n,this.filterStates.get(t),()=>this.cycleFilter(t)))}
                ${this.renderTri("Enabled",this.statusFilter,()=>this.cycleStatusFilter(),"status",tv)}
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
              ${od.map(([t,n])=>this.renderTri(n,this.typeFilters.get(t),()=>this.cycleTypeFilter(t)))}
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
    `}};Ue.styles=[ft,ut,$e`
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
    `];Ye([N()],Ue.prototype,"urls",2);Ye([N()],Ue.prototype,"records",2);Ye([N()],Ue.prototype,"addUrl",2);Ye([N()],Ue.prototype,"catalog",2);Ye([N()],Ue.prototype,"catalogError",2);Ye([N()],Ue.prototype,"serverCatalog",2);Ye([N()],Ue.prototype,"serverCatalogError",2);Ye([N()],Ue.prototype,"installing",2);Ye([N()],Ue.prototype,"catalogUrls",2);Ye([N()],Ue.prototype,"activeCatalogUrl",2);Ye([N()],Ue.prototype,"search",2);Ye([N()],Ue.prototype,"filterStates",2);Ye([N()],Ue.prototype,"typeFilters",2);Ye([N()],Ue.prototype,"statusFilter",2);Ue=Ye([Ce("plugin-manager-dialog")],Ue);var nv=Object.defineProperty,rv=Object.getOwnPropertyDescriptor,jt=(e,t,n,r)=>{for(var i=r>1?void 0:r?rv(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&nv(t,n,i),i};const or="__general__";let Xe=class extends ve{constructor(){super(...arguments),this.tabs=[],this.active=or,this.values={},this.placements={},this.secretsText="",this.workspaceTitle="",this.secretError="",this.openHelp="",this.dialogEl=null,this.attemptClose=e=>{const t=this.invalidSecrets();if(t.length>0){e?.preventDefault();const r=t[0];this.active=r.tab.id,this.secretError=`“${r.field.label}” must be empty or a \${secret:name} reference. Move the value into the secrets store (General tab) and reference it, so the raw secret is never saved or synced.`;return}const n=this.danglingSecrets();if(n.length>0){e?.preventDefault();const r=n[0];this.active=r.tab.id;const i=r.names.map(s=>`“${s}”`).join(", ");this.secretError=`“${r.field.label}” references ${i}, which the secrets store does not have. Add it in the General tab or correct the name — an unknown reference is passed on as the literal \${secret:name} text.`;return}this.secretError="",this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.attemptClose()}}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&ht(this.dialogEl,e),this.dialogEl&&sd("settings",this.dialogEl)}async open(){const e=await ae(),t=[...e.registries.settings];this.tabs=t.map(([s,a])=>({id:s,name:a.name,fields:a.fields}));const n=await e.store.workspaces.findOne(e.workspaceId);this.workspaceTitle=n?.title??"";const r={},i={};for(const s of this.tabs)for(const a of s.fields){const c=`${s.id}:${a.key}`,d=await e.api.settings.placement(s.id,a.key);d==="user"?(r[c]=Eo(c),i[c]="user"):d==="workspace"?(r[c]=(await e.store.settings.findOne(c))?.value,i[c]="workspace"):(r[c]=a.default,i[c]=a.scope??"workspace")}this.values=r,this.placements=i,this.secretsText=Oi(),this.active=or,await this.updateComplete,this.dialogEl?.showModal()}static rawSecret(e){return typeof e=="string"&&e!==""&&!e.includes("${secret:")}invalidSecrets(){const e=[];for(const t of this.tabs)for(const n of t.fields)n.type==="secret"&&Xe.rawSecret(this.values[`${t.id}:${n.key}`])&&e.push({tab:t,field:n});return e}static secretRefs(e){return typeof e!="string"?[]:[...e.matchAll(/\$\{secret:([^}]*)\}/g)].map(t=>(t[1]??"").trim())}missingRefs(e){const t=new Set(Object.keys(pr(this.secretsText)));return Xe.secretRefs(e).filter(n=>!t.has(n))}danglingSecrets(){const e=[];for(const t of this.tabs)for(const n of t.fields){const r=this.missingRefs(this.values[`${t.id}:${n.key}`]);r.length>0&&e.push({tab:t,field:n,names:r})}return e}async setValue(e,t,n){const r=`${e.id}:${t.key}`;this.values={...this.values,[r]:n},this.clearSecretErrorIfFixed(),await(await ae()).api.settings.set(e.id,t.key,n,this.placements[r])}async toggleScope(e,t,n){const r=`${e.id}:${t.key}`,i=n?"user":"workspace";this.placements={...this.placements,[r]:i},await(await ae()).api.settings.set(e.id,t.key,this.values[r],i)}clearSecretErrorIfFixed(){this.secretError&&this.invalidSecrets().length===0&&this.danglingSecrets().length===0&&(this.secretError="")}onSecretsInput(e){this.secretsText=e.target.value,Cc(this.secretsText),this.clearSecretErrorIfFixed()}downloadSecrets(){const e=new Blob([this.secretsText],{type:"text/plain;charset=utf-8"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download="secrets.txt",n.click(),URL.revokeObjectURL(t)}async setWorkspaceTitle(e){this.workspaceTitle=e;const t=await ae();await t.store.workspaces.patch(t.workspaceId,{title:e.trim()||void 0})}renderControl(e,t){const n=`${e.id}:${t.key}`,r=this.values[n];switch(t.type){case"text":return $`<textarea
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
                @change=${a=>{const d=a.target.checked?[...i,s]:i.filter(p=>p!==s);this.setValue(e,t,d)}}
              />${s}</label
            >`)}
        </div>`}case"string":default:return $`<input
          type="text"
          .value=${String(r??"")}
          @change=${i=>this.setValue(e,t,i.target.value)}
        />`}}renderSecretControl(e,t,n){const r=Object.keys(pr(this.secretsText)),i=Xe.rawSecret(n)||this.missingRefs(n).length>0;return $`<div class="secret-row">
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
          </select>`:se}
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
            </button>`:se}
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
            ${t.help?$`<p>${t.help}</p>`:se}
            ${t.helpUrl?$`<a href=${t.helpUrl} target="_blank" rel="noopener noreferrer"
                  >${t.helpLinkLabel||iv(t.helpUrl)}</a
                >`:se}
          </div>`:se}
      ${this.renderControl(e,t)}
      ${t.description?$`<p class="desc">${t.description}</p>`:se}
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
    `}renderPanel(){if(this.active===or)return this.renderGeneral();const e=this.tabs.find(t=>t.id===this.active);return e?$`
      <h3>${e.name}</h3>
      ${e.fields.length===0?$`<p class="empty">This plugin registered no settings.</p>`:e.fields.map(t=>this.renderField(e,t))}
    `:se}render(){return $`
      <dialog @cancel=${this.attemptClose} @keydown=${dt}>
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
          ${this.secretError?$`<div class="secret-error" role="alert">${this.secretError}</div>`:se}
          <div class="dialog-body">
            <div class="layout">
              <nav class="tabs">
                <button
                  type="button"
                  class=${this.active===or?"active":""}
                  @click=${()=>this.active=or}
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
    `}};Xe.styles=[ft,ut,$e`
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
    `];jt([N()],Xe.prototype,"tabs",2);jt([N()],Xe.prototype,"active",2);jt([N()],Xe.prototype,"values",2);jt([N()],Xe.prototype,"placements",2);jt([N()],Xe.prototype,"secretsText",2);jt([N()],Xe.prototype,"workspaceTitle",2);jt([N()],Xe.prototype,"secretError",2);jt([N()],Xe.prototype,"openHelp",2);Xe=jt([Ce("settings-dialog")],Xe);function iv(e){try{return new URL(e).host}catch{return e}}const ad=5,oc="palette:recent",ld="Recent";function sv(e,t,n=ad){return[t,...e.filter(r=>r!==t)].slice(0,n)}function ov(e){return Array.isArray(e)?e.filter(t=>typeof t=="string").slice(0,ad):[]}function av(e,t){if(t.length===0)return e;const n=new Map(e.map(s=>[s.id,s])),r=[];for(const s of t){const a=n.get(s);a&&r.push({...a,group:ld})}if(r.length===0)return e;const i=new Set(r.map(s=>s.id));return[...r,...e.filter(s=>!i.has(s.id))]}var lv=Object.defineProperty,cv=Object.getOwnPropertyDescriptor,Bn=(e,t,n,r)=>{for(var i=r>1?void 0:r?cv(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&lv(t,n,i),i};const uv={[ld]:-1,Windows:0,Actions:1,App:2,Tables:3,Views:4};function ac(e){return uv[e]??3}function dv(e){return e?e.trimStart().startsWith("<svg")?$`<span class="cmd-svg">${ko(e)}</span>`:$`<span class="mi sm">${e}</span>`:$`<span class="mi sm">chevron_right</span>`}let Xt=class extends ve{constructor(){super(...arguments),this.search="",this.items=[],this.selected=0,this.api=null,this.recentIds=[],this.onDialogClick=e=>{if(e.detail===0||!this.dialogEl)return;const t=this.dialogEl.getBoundingClientRect();e.clientX>=t.left&&e.clientX<=t.right&&e.clientY>=t.top&&e.clientY<=t.bottom||this.close()}}async open(){const e=await ae();this.api=e.api,this.recentIds=ov((await e.api.store.settings.findOne(oc))?.value),this.items=await this.buildItems(),this.search="",this.selected=0,await this.updateComplete,this.dialogEl&&!this.dialogEl.open&&this.dialogEl.showModal(),this.inputEl?.focus()}async buildItems(){const e=await ae(),t=e.api,n=[];for(const s of e.registries.commands)n.push({id:s.id,title:s.title,group:s.group??"Commands",...s.icon?{icon:s.icon}:{},haystack:[s.title,s.group,...s.keywords??[]].join(" ").toLowerCase(),run:()=>s.run(t)});for(const s of[...e.registries.headerButtons,...e.registries.footerButtons])n.push({id:`button:${s.id}`,title:s.label,group:"Actions",...s.icon?{icon:s.icon}:{},haystack:`${s.label} ${s.tooltip??""}`.toLowerCase(),run:()=>s.onClick(t)});const r=await t.store.tables.find({workspaceId:e.workspaceId});r.sort((s,a)=>s.name.localeCompare(a.name));for(const s of r)n.push({id:`goto:${s.id}`,title:`Go to: ${s.name}`,group:"Tables",icon:"table_chart",haystack:`${s.name} go to table`.toLowerCase(),run:()=>{Lu(s.id)}});const i=await t.store.viewInstances.find({workspaceId:e.workspaceId});i.sort((s,a)=>s.name.localeCompare(a.name));for(const s of i)n.push({id:`goto-view:${s.id}`,title:`Go to view: ${s.name}`,group:"Views",icon:"view_quilt",haystack:`${s.name} go to view`.toLowerCase(),run:async()=>{await t.store.viewInstances.patch(s.id,{open:!0,updatedAt:Date.now()}),dy(s.id)}});return av(n,this.recentIds).map((s,a)=>({it:s,i:a})).sort((s,a)=>ac(s.it.group)-ac(a.it.group)||s.i-a.i).map(({it:s})=>s)}get filtered(){const e=this.search.trim().toLowerCase();return e?this.items.filter(t=>t.haystack.includes(e)):this.items}close(){this.dialogEl?.close()}onInput(e){this.search=e.target.value,this.selected=0}onKeydown(e){const t=this.filtered;if(e.key==="ArrowDown")e.preventDefault(),this.selected=t.length?(this.selected+1)%t.length:0;else if(e.key==="ArrowUp")e.preventDefault(),this.selected=t.length?(this.selected-1+t.length)%t.length:0;else if(e.key==="Enter"){e.preventDefault();const n=t[this.selected];n&&this.execute(n)}}async execute(e){this.close(),this.remember(e.id);try{await e.run()}catch(t){console.error(`[command:${e.id}]`,t)}}async remember(e){this.recentIds=sv(this.recentIds,e);try{await this.api?.store.settings.upsert({name:oc,value:this.recentIds})}catch(t){console.warn("[command-palette] could not save recent commands",t)}}render(){const e=this.filtered;let t="";return $`
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
                    ${dv(n.icon)}
                    <span class="title">${n.title}</span>
                  </div>
                `})}
        </div>
      </dialog>
    `}};Xt.styles=[ft,$e`
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
    `];Bn([N()],Xt.prototype,"search",2);Bn([N()],Xt.prototype,"items",2);Bn([N()],Xt.prototype,"selected",2);Bn([Ot("dialog")],Xt.prototype,"dialogEl",2);Bn([Ot("input")],Xt.prototype,"inputEl",2);Xt=Bn([Ce("command-palette-dialog")],Xt);var hv=Object.defineProperty,fv=Object.getOwnPropertyDescriptor,cd=(e,t,n,r)=>{for(var i=r>1?void 0:r?fv(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&hv(t,n,i),i};let Ti=class extends ve{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await ae();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(n=>this.tables=n.filter(r=>r.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(n=>n.workspaceId===this.workspaceId),await ju(),await py()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?$``:$`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on the
      page, or click <strong>+ New Table</strong> above.
    </div>`}};Ti.styles=$e`
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
  `;cd([N()],Ti.prototype,"tables",2);Ti=cd([Ce("table-list")],Ti);function ci(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function pv(e,t){const{from:n,to:r,name:i,mode:s}=t,a=await e.workspaces.get(n);if(await e.workspaces.put({id:r,name:i,createdAt:Date.now(),pluginUrls:s==="empty"?[]:[...a?.pluginUrls??[]]}),s==="empty")return r;if(s==="all"){const d=await e.tables.where("workspaceId").equals(n).toArray(),p=new Map;for(const C of d){const x=ci();p.set(C.id,x),await e.tables.put({...C,id:x,workspaceId:r,updatedAt:Date.now()})}for(const[C,x]of p){const k=await e.rows.where("tableId").equals(C).toArray();k.length>0&&await e.rows.bulkPut(k.map(I=>({...I,id:ci(),tableId:x})))}const g=await e.viewTemplates.where("workspaceId").equals(n).toArray(),b=new Map;for(const C of g){const x=ci();b.set(C.id,x),await e.viewTemplates.put({...C,id:x,workspaceId:r})}const y=await e.viewInstances.where("workspaceId").equals(n).toArray();for(const C of y){const x=p.get(C.tableId);x&&await e.viewInstances.put({...C,id:ci(),workspaceId:r,tableId:x,templateId:b.get(C.templateId)??C.templateId})}}const c=await e.settings.where("workspaceId").equals(n).toArray();for(const d of c)await e.settings.put({...d,key:dn(r,d.name),workspaceId:r,name:d.name});return r}var mv=Object.defineProperty,gv=Object.getOwnPropertyDescriptor,na=(e,t,n,r)=>{for(var i=r>1?void 0:r?gv(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&mv(t,n,i),i};const lc="Clone everything (tables, views, settings)",cc="Clone settings only (no data)",bv="Empty workspace";let yr=class extends ve{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await ae();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(i=>i.id===e);if(!t)return;const n=new URLSearchParams(location.search);n.set("space",t.name);const r=`${location.pathname}?${n.toString()}${location.hash}`;location.assign(r)}async addWorkspace(){const e=await ae(),t=await e.api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const n=await e.api.ui.dialogs.choice(`What should "${t.trim()}" start with?`,[lc,cc,bv],"New workspace");if(!n)return;const r=n===lc?"all":n===cc?"settings":"empty",i=id(t.trim());await pv(xc(),{from:e.workspaceId,to:i,name:t.trim(),mode:r});const s=new URLSearchParams(location.search);s.set("space",t.trim()),location.assign(`${location.pathname}?${s.toString()}${location.hash}`)}render(){return $`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>$`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};yr.styles=[ft,$e`
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
    `];na([N()],yr.prototype,"workspaces",2);na([N()],yr.prototype,"current",2);yr=na([Ce("workspace-selector")],yr);var uc=Object.freeze,ud=Object.defineProperty,wv=Object.getOwnPropertyDescriptor,xt=(e,t,n,r)=>{for(var i=r>1?void 0:r?wv(t,n):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&ud(t,n,i),i},yv=(e,t)=>uc(ud(e,"raw",{value:uc(e.slice())})),dc;function hc(e){return e?e.trimStart().startsWith("<svg")?$`<span class="icon-svg" aria-hidden="true">${ko(e)}</span>`:$`<span class="mi sm" aria-hidden="true">${e}</span>`:""}let Qe=class extends ve{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.workspaceTitle="",this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId,{notice:t.detail.notice})},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onOpenSettings=()=>{this.settingsDialog?.open()},this.onOpenCommandPalette=()=>{this.commandPaletteDialog?.open()},this.onGlobalKeydown=e=>{(e.ctrlKey||e.metaKey)&&!e.altKey&&(e.key==="k"||e.key==="K")&&(e.preventDefault(),this.commandPaletteDialog?.open())},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{pc(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!pc(e))return;e.preventDefault();const t=await ae(),n=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:n,event:e});for(const r of[...t.registries.dropHandlers])try{if(await r(e,t.api))return}catch(i){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:i})}},this.runSlot=(e,t)=>{if(!this.api)return;const n=t?.currentTarget??void 0;Promise.resolve(e.onClick(this.api,{anchor:n})).catch(r=>{console.error(`[footer-button:${e.id}]`,r)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.addEventListener("easydb:open-settings",this.onOpenSettings),document.addEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.addEventListener("easydb:focus-search",this.openSearch),document.addEventListener("keydown",this.onGlobalKeydown),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.removeEventListener("easydb:open-settings",this.onOpenSettings),document.removeEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.removeEventListener("easydb:focus-search",this.openSearch),document.removeEventListener("keydown",this.onGlobalKeydown),this.workspaceUnsub?.()}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await ae();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e)),this.workspaceUnsub=e.store.workspaces.subscribe(t=>{const n=t.find(r=>r.id===e.workspaceId);this.workspaceTitle=n?.title?.trim()??"",vv(this.workspaceTitle)})}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){if(e.variant==="secondary")return $`
        <button class="icon-btn" title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
          ${hc(e.icon)}
        </button>
      `;const n=t==="header"||e.variant==="primary"?"primary":"slot";return $`
      <button class=${n} title=${e.tooltip??e.label} @click=${r=>this.runSlot(e,r)}>
        ${hc(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return $(dc||(dc=yv([`
      <header>
        <strong
          >`,`
          <a
            class="version-link"
            href="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md"
            target="_blank"
            rel="noopener"
            title="View the changelog on GitHub"
            ><span class="version">v0.0.246</span></a
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
            </button>`,()=>this.api?.ui.openPluginManager(),this.headerButtons.filter(e=>e.variant==="secondary").map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};Qe.styles=[ft,$e`
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
    `];xt([Ot("new-table-dialog")],Qe.prototype,"dialog",2);xt([Ot("csv-paste-dialog")],Qe.prototype,"csvPasteDialog",2);xt([Ot("plugin-manager-dialog")],Qe.prototype,"pluginManagerDialog",2);xt([Ot("settings-dialog")],Qe.prototype,"settingsDialog",2);xt([Ot("command-palette-dialog")],Qe.prototype,"commandPaletteDialog",2);xt([Ot("input.search")],Qe.prototype,"searchInput",2);xt([N()],Qe.prototype,"footerButtons",2);xt([N()],Qe.prototype,"headerButtons",2);xt([N()],Qe.prototype,"searchQuery",2);xt([N()],Qe.prototype,"searchOpen",2);xt([N()],Qe.prototype,"workspaceTitle",2);Qe=xt([Ce("app-shell")],Qe);const fc=document.title;function vv(e){const t=e.trim();document.title=t?`${t} — ${fc}`:fc}function pc(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([ae(),at(()=>Promise.resolve().then(()=>Yu),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});export{se as A,$e as a,$ as b,dt as c,ut as d,ve as i,ht as m,N as r,Ce as t};
//# sourceMappingURL=index-MiPJvw5P.js.map
