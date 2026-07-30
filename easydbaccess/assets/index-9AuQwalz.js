(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();const uu="modulepreload",hu=function(e){return"/easydbaccess/"+e},Ia={},Zt=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){let a=function(p){return Promise.all(p.map(w=>Promise.resolve(w).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),u=c?.nonce||c?.getAttribute("nonce");n=a(r.map(p=>{if(p=hu(p),p in Ia)return;Ia[p]=!0;const w=p.endsWith(".css"),b=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${b}`))return;const $=document.createElement("link");if($.rel=w?"stylesheet":uu,w||($.as="script"),$.crossOrigin="",$.href=p,u&&$.setAttribute("nonce",u),document.head.appendChild($),w)return new Promise((_,T)=>{$.addEventListener("load",_),$.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${p}`)))})}))}function s(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return n.then(a=>{for(const c of a||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _i=globalThis,bo=_i.ShadowRoot&&(_i.ShadyCSS===void 0||_i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,yo=Symbol(),Ra=new WeakMap;let Xl=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==yo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(bo&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=Ra.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ra.set(r,t))}return t}toString(){return this.cssText}};const fu=e=>new Xl(typeof e=="string"?e:e+"",void 0,yo),Ve=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,s)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[s+1],e[0]);return new Xl(r,e,yo)},pu=(e,t)=>{if(bo)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),n=_i.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)}},Pa=bo?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return fu(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:mu,defineProperty:gu,getOwnPropertyDescriptor:bu,getOwnPropertyNames:yu,getOwnPropertySymbols:wu,getPrototypeOf:vu}=Object,Ki=globalThis,Da=Ki.trustedTypes,xu=Da?Da.emptyScript:"",$u=Ki.reactiveElementPolyfillSupport,Dr=(e,t)=>e,Pi={toAttribute(e,t){switch(t){case Boolean:e=e?xu:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},wo=(e,t)=>!mu(e,t),Oa={attribute:!0,type:String,converter:Pi,reflect:!1,useDefault:!1,hasChanged:wo};Symbol.metadata??=Symbol("metadata"),Ki.litPropertyMetadata??=new WeakMap;let ir=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Oa){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,r);n!==void 0&&gu(this.prototype,t,n)}}static getPropertyDescriptor(t,r,i){const{get:n,set:s}=bu(this.prototype,t)??{get(){return this[r]},set(a){this[r]=a}};return{get:n,set(a){const c=n?.call(this);s?.call(this,a),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Oa}static _$Ei(){if(this.hasOwnProperty(Dr("elementProperties")))return;const t=vu(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Dr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Dr("properties"))){const r=this.properties,i=[...yu(r),...wu(r)];for(const n of i)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)r.unshift(Pa(n))}else t!==void 0&&r.push(Pa(t));return r}static _$Eu(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pu(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$ET(t,r){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const s=(i.converter?.toAttribute!==void 0?i.converter:Pi).toAttribute(r,i.type);this._$Em=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,r){const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const s=i.getPropertyOptions(n),a=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Pi;this._$Em=n;const c=a.fromAttribute(r,s.type);this[n]=c??this._$Ej?.get(n)??c,this._$Em=null}}requestUpdate(t,r,i,n=!1,s){if(t!==void 0){const a=this.constructor;if(n===!1&&(s=this[t]),i??=a.getPropertyOptions(t),!((i.hasChanged??wo)(s,r)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:i,reflect:n,wrapped:s},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??r??this[t]),s!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,s]of i){const{wrapped:a}=s,c=this[n];a!==!0||this._$AL.has(n)||c===void 0||this.C(n,void 0,s,c)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(r)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};ir.elementStyles=[],ir.shadowRootOptions={mode:"open"},ir[Dr("elementProperties")]=new Map,ir[Dr("finalized")]=new Map,$u?.({ReactiveElement:ir}),(Ki.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vo=globalThis,ja=e=>e,Di=vo.trustedTypes,za=Di?Di.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ql="$lit$",Pn=`lit$${Math.random().toFixed(9).slice(2)}$`,Jl="?"+Pn,ku=`<${Jl}>`,Gn=document,jr=()=>Gn.createComment(""),zr=e=>e===null||typeof e!="object"&&typeof e!="function",xo=Array.isArray,Cu=e=>xo(e)||typeof e?.[Symbol.iterator]=="function",Us=`[ 	
\f\r]`,_r=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,La=/-->/g,Fa=/>/g,qn=RegExp(`>|${Us}(?:([^\\s"'>=/]+)(${Us}*=${Us}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ma=/'/g,Ba=/"/g,Zl=/^(?:script|style|textarea|title)$/i,Eu=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),S=Eu(1),Yn=Symbol.for("lit-noChange"),me=Symbol.for("lit-nothing"),Na=new WeakMap,Vn=Gn.createTreeWalker(Gn,129);function ec(e,t){if(!xo(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return za!==void 0?za.createHTML(t):t}const Su=(e,t)=>{const r=e.length-1,i=[];let n,s=t===2?"<svg>":t===3?"<math>":"",a=_r;for(let c=0;c<r;c++){const u=e[c];let p,w,b=-1,$=0;for(;$<u.length&&(a.lastIndex=$,w=a.exec(u),w!==null);)$=a.lastIndex,a===_r?w[1]==="!--"?a=La:w[1]!==void 0?a=Fa:w[2]!==void 0?(Zl.test(w[2])&&(n=RegExp("</"+w[2],"g")),a=qn):w[3]!==void 0&&(a=qn):a===qn?w[0]===">"?(a=n??_r,b=-1):w[1]===void 0?b=-2:(b=a.lastIndex-w[2].length,p=w[1],a=w[3]===void 0?qn:w[3]==='"'?Ba:Ma):a===Ba||a===Ma?a=qn:a===La||a===Fa?a=_r:(a=qn,n=void 0);const _=a===qn&&e[c+1].startsWith("/>")?" ":"";s+=a===_r?u+ku:b>=0?(i.push(p),u.slice(0,b)+Ql+u.slice(b)+Pn+_):u+Pn+(b===-2?c:_)}return[ec(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class Lr{constructor({strings:t,_$litType$:r},i){let n;this.parts=[];let s=0,a=0;const c=t.length-1,u=this.parts,[p,w]=Su(t,r);if(this.el=Lr.createElement(p,i),Vn.currentNode=this.el.content,r===2||r===3){const b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(n=Vn.nextNode())!==null&&u.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const b of n.getAttributeNames())if(b.endsWith(Ql)){const $=w[a++],_=n.getAttribute(b).split(Pn),T=/([.?@])?(.*)/.exec($);u.push({type:1,index:s,name:T[2],strings:_,ctor:T[1]==="."?Tu:T[1]==="?"?Au:T[1]==="@"?Iu:Vi}),n.removeAttribute(b)}else b.startsWith(Pn)&&(u.push({type:6,index:s}),n.removeAttribute(b));if(Zl.test(n.tagName)){const b=n.textContent.split(Pn),$=b.length-1;if($>0){n.textContent=Di?Di.emptyScript:"";for(let _=0;_<$;_++)n.append(b[_],jr()),Vn.nextNode(),u.push({type:2,index:++s});n.append(b[$],jr())}}}else if(n.nodeType===8)if(n.data===Jl)u.push({type:2,index:s});else{let b=-1;for(;(b=n.data.indexOf(Pn,b+1))!==-1;)u.push({type:7,index:s}),b+=Pn.length-1}s++}}static createElement(t,r){const i=Gn.createElement("template");return i.innerHTML=t,i}}function or(e,t,r=e,i){if(t===Yn)return t;let n=i!==void 0?r._$Co?.[i]:r._$Cl;const s=zr(t)?void 0:t._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),s===void 0?n=void 0:(n=new s(e),n._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=n:r._$Cl=n),n!==void 0&&(t=or(e,n._$AS(e,t.values),n,i)),t}class _u{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:i}=this._$AD,n=(t?.creationScope??Gn).importNode(r,!0);Vn.currentNode=n;let s=Vn.nextNode(),a=0,c=0,u=i[0];for(;u!==void 0;){if(a===u.index){let p;u.type===2?p=new Hr(s,s.nextSibling,this,t):u.type===1?p=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(p=new Ru(s,this,t)),this._$AV.push(p),u=i[++c]}a!==u?.index&&(s=Vn.nextNode(),a++)}return Vn.currentNode=Gn,n}p(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class Hr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,n){this.type=2,this._$AH=me,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=or(this,t,r),zr(t)?t===me||t==null||t===""?(this._$AH!==me&&this._$AR(),this._$AH=me):t!==this._$AH&&t!==Yn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Cu(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==me&&zr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Gn.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Lr.createElement(ec(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(r);else{const s=new _u(n,this),a=s.u(this.options);s.p(r),this.T(a),this._$AH=s}}_$AC(t){let r=Na.get(t.strings);return r===void 0&&Na.set(t.strings,r=new Lr(t)),r}k(t){xo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const s of t)n===r.length?r.push(i=new Hr(this.O(jr()),this.O(jr()),this,this.options)):i=r[n],i._$AI(s),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const i=ja(t).nextSibling;ja(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Vi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,n,s){this.type=1,this._$AH=me,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=me}_$AI(t,r=this,i,n){const s=this.strings;let a=!1;if(s===void 0)t=or(this,t,r,0),a=!zr(t)||t!==this._$AH&&t!==Yn,a&&(this._$AH=t);else{const c=t;let u,p;for(t=s[0],u=0;u<s.length-1;u++)p=or(this,c[i+u],r,u),p===Yn&&(p=this._$AH[u]),a||=!zr(p)||p!==this._$AH[u],p===me?t=me:t!==me&&(t+=(p??"")+s[u+1]),this._$AH[u]=p}a&&!n&&this.j(t)}j(t){t===me?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Tu extends Vi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===me?void 0:t}}class Au extends Vi{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==me)}}class Iu extends Vi{constructor(t,r,i,n,s){super(t,r,i,n,s),this.type=5}_$AI(t,r=this){if((t=or(this,t,r,0)??me)===Yn)return;const i=this._$AH,n=t===me&&i!==me||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==me&&(i===me||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Ru{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){or(this,t)}}const Pu=vo.litHtmlPolyfillSupport;Pu?.(Lr,Hr),(vo.litHtmlVersions??=[]).push("3.3.3");const Du=(e,t,r)=>{const i=r?.renderBefore??t;let n=i._$litPart$;if(n===void 0){const s=r?.renderBefore??null;i._$litPart$=n=new Hr(t.insertBefore(jr(),s),s,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $o=globalThis;let qe=class extends ir{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Du(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Yn}};qe._$litElement$=!0,qe.finalized=!0,$o.litElementHydrateSupport?.({LitElement:qe});const Ou=$o.litElementPolyfillSupport;Ou?.({LitElement:qe});($o.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ju={attribute:!0,type:String,converter:Pi,reflect:!1,hasChanged:wo},zu=(e=ju,t,r)=>{const{kind:i,metadata:n}=r;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),i==="accessor"){const{name:a}=r;return{set(c){const u=t.get.call(this);t.set.call(this,c),this.requestUpdate(a,u,e,!0,c)},init(c){return c!==void 0&&this.C(a,void 0,e,c),c}}}if(i==="setter"){const{name:a}=r;return function(c){const u=this[a];t.call(this,c),this.requestUpdate(a,u,e,!0,c)}}throw Error("Unsupported decorator location: "+i)};function Kt(e){return(t,r)=>typeof r=="object"?zu(e,t,r):((i,n,s)=>{const a=n.hasOwnProperty(s);return n.constructor.createProperty(s,i),a?Object.getOwnPropertyDescriptor(n,s):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function K(e){return Kt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lu=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bn(e,t){return(r,i,n)=>{const s=a=>a.renderRoot?.querySelector(e)??null;return Lu(r,i,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fu={CHILD:2},tc=e=>(...t)=>({_$litDirective$:e,values:t});class Mu{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Oi extends Mu{constructor(t){if(super(t),this.it=me,t.type!==Fu.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===me||t==null)return this._t=void 0,this.it=t;if(t===Yn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Oi.directiveName="unsafeHTML",Oi.resultType=1;const sr=tc(Oi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Zs extends Oi{}Zs.directiveName="unsafeSVG",Zs.resultType=2;const ko=tc(Zs);var Bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Nu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ti={exports:{}},Uu=Ti.exports,Ua;function Hu(){return Ua||(Ua=1,(function(e,t){(function(r,i){e.exports=i()})(Uu,function(){var r=function(o,l){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,h){d.__proto__=h}||function(d,h){for(var f in h)Object.prototype.hasOwnProperty.call(h,f)&&(d[f]=h[f])})(o,l)},i=function(){return(i=Object.assign||function(o){for(var l,d=1,h=arguments.length;d<h;d++)for(var f in l=arguments[d])Object.prototype.hasOwnProperty.call(l,f)&&(o[f]=l[f]);return o}).apply(this,arguments)};function n(o,l,d){for(var h,f=0,g=l.length;f<g;f++)!h&&f in l||((h=h||Array.prototype.slice.call(l,0,f))[f]=l[f]);return o.concat(h||Array.prototype.slice.call(l))}var s=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Bu,a=Object.keys,c=Array.isArray;function u(o,l){return typeof l!="object"||a(l).forEach(function(d){o[d]=l[d]}),o}typeof Promise>"u"||s.Promise||(s.Promise=Promise);var p=Object.getPrototypeOf,w={}.hasOwnProperty;function b(o,l){return w.call(o,l)}function $(o,l){typeof l=="function"&&(l=l(p(o))),(typeof Reflect>"u"?a:Reflect.ownKeys)(l).forEach(function(d){T(o,d,l[d])})}var _=Object.defineProperty;function T(o,l,d,h){_(o,l,u(d&&b(d,"get")&&typeof d.get=="function"?{get:d.get,set:d.set,configurable:!0}:{value:d,configurable:!0,writable:!0},h))}function A(o){return{from:function(l){return o.prototype=Object.create(l.prototype),T(o.prototype,"constructor",o),{extend:$.bind(null,o.prototype)}}}}var B=Object.getOwnPropertyDescriptor,U=[].slice;function V(o,l,d){return U.call(o,l,d)}function X(o,l){return l(o)}function le(o){if(!o)throw new Error("Assertion Failed")}function re(o){s.setImmediate?setImmediate(o):setTimeout(o,0)}function ee(o,l){if(typeof l=="string"&&b(o,l))return o[l];if(!l)return o;if(typeof l!="string"){for(var d=[],h=0,f=l.length;h<f;++h){var g=ee(o,l[h]);d.push(g)}return d}var v=l.indexOf(".");if(v!==-1){var C=o[l.substr(0,v)];return C==null?void 0:ee(C,l.substr(v+1))}}function Y(o,l,d){if(o&&l!==void 0&&!("isFrozen"in Object&&Object.isFrozen(o)))if(typeof l!="string"&&"length"in l){le(typeof d!="string"&&"length"in d);for(var h=0,f=l.length;h<f;++h)Y(o,l[h],d[h])}else{var g,v,C=l.indexOf(".");C!==-1?(g=l.substr(0,C),(v=l.substr(C+1))===""?d===void 0?c(o)&&!isNaN(parseInt(g))?o.splice(g,1):delete o[g]:o[g]=d:Y(C=!(C=o[g])||!b(o,g)?o[g]={}:C,v,d)):d===void 0?c(o)&&!isNaN(parseInt(l))?o.splice(l,1):delete o[l]:o[l]=d}}function te(o){var l,d={};for(l in o)b(o,l)&&(d[l]=o[l]);return d}var ye=[].concat;function xe(o){return ye.apply([],o)}var vn="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(xe([8,16,32,64].map(function(o){return["Int","Uint","Float"].map(function(l){return l+o+"Array"})}))).filter(function(o){return s[o]}),m=new Set(vn.map(function(o){return s[o]})),x=null;function P(o){return x=new WeakMap,o=(function l(d){if(!d||typeof d!="object")return d;var h=x.get(d);if(h)return h;if(c(d)){h=[],x.set(d,h);for(var f=0,g=d.length;f<g;++f)h.push(l(d[f]))}else if(m.has(d.constructor))h=d;else{var v,C=p(d);for(v in h=C===Object.prototype?{}:Object.create(C),x.set(d,h),d)b(d,v)&&(h[v]=l(d[v]))}return h})(o),x=null,o}var y={}.toString;function k(o){return y.call(o).slice(8,-1)}var he=typeof Symbol<"u"?Symbol.iterator:"@@iterator",ge=typeof he=="symbol"?function(o){var l;return o!=null&&(l=o[he])&&l.apply(o)}:function(){return null};function H(o,l){return l=o.indexOf(l),0<=l&&o.splice(l,1),0<=l}var Q={};function Ue(o){var l,d,h,f;if(arguments.length===1){if(c(o))return o.slice();if(this===Q&&typeof o=="string")return[o];if(f=ge(o)){for(d=[];!(h=f.next()).done;)d.push(h.value);return d}if(o==null)return[o];if(typeof(l=o.length)!="number")return[o];for(d=new Array(l);l--;)d[l]=o[l];return d}for(l=arguments.length,d=new Array(l);l--;)d[l]=arguments[l];return d}var Ze=typeof Symbol<"u"?function(o){return o[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Pe=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Yt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Pe),Ee={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Re(o,l){this.name=o,this.message=l}function Be(o,l){return o+". Errors: "+Object.keys(l).map(function(d){return l[d].toString()}).filter(function(d,h,f){return f.indexOf(d)===h}).join(`
`)}function _e(o,l,d,h){this.failures=l,this.failedKeys=h,this.successCount=d,this.message=Be(o,l)}function ze(o,l){this.name="BulkError",this.failures=Object.keys(l).map(function(d){return l[d]}),this.failuresByPos=l,this.message=Be(o,this.failures)}A(Re).from(Error).extend({toString:function(){return this.name+": "+this.message}}),A(_e).from(Re),A(ze).from(Re);var et=Yt.reduce(function(o,l){return o[l]=l+"Error",o},{}),Oe=Re,ce=Yt.reduce(function(o,l){var d=l+"Error";function h(f,g){this.name=d,f?typeof f=="string"?(this.message="".concat(f).concat(g?`
 `+g:""),this.inner=g||null):typeof f=="object"&&(this.message="".concat(f.name," ").concat(f.message),this.inner=f):(this.message=Ee[l]||d,this.inner=null)}return A(h).from(Oe),o[l]=h,o},{});ce.Syntax=SyntaxError,ce.Type=TypeError,ce.Range=RangeError;var tt=Pe.reduce(function(o,l){return o[l+"Error"]=ce[l],o},{}),He=Yt.reduce(function(o,l){return["Syntax","Type","Range"].indexOf(l)===-1&&(o[l+"Error"]=ce[l]),o},{});function ve(){}function Se(o){return o}function Ot(o,l){return o==null||o===Se?l:function(d){return l(o(d))}}function be(o,l){return function(){o.apply(this,arguments),l.apply(this,arguments)}}function nt(o,l){return o===ve?l:function(){var d=o.apply(this,arguments);d!==void 0&&(arguments[0]=d);var h=this.onsuccess,f=this.onerror;this.onsuccess=null,this.onerror=null;var g=l.apply(this,arguments);return h&&(this.onsuccess=this.onsuccess?be(h,this.onsuccess):h),f&&(this.onerror=this.onerror?be(f,this.onerror):f),g!==void 0?g:d}}function Cn(o,l){return o===ve?l:function(){o.apply(this,arguments);var d=this.onsuccess,h=this.onerror;this.onsuccess=this.onerror=null,l.apply(this,arguments),d&&(this.onsuccess=this.onsuccess?be(d,this.onsuccess):d),h&&(this.onerror=this.onerror?be(h,this.onerror):h)}}function on(o,l){return o===ve?l:function(d){var h=o.apply(this,arguments);u(d,h);var f=this.onsuccess,g=this.onerror;return this.onsuccess=null,this.onerror=null,d=l.apply(this,arguments),f&&(this.onsuccess=this.onsuccess?be(f,this.onsuccess):f),g&&(this.onerror=this.onerror?be(g,this.onerror):g),h===void 0?d===void 0?void 0:d:u(h,d)}}function st(o,l){return o===ve?l:function(){return l.apply(this,arguments)!==!1&&o.apply(this,arguments)}}function jt(o,l){return o===ve?l:function(){var d=o.apply(this,arguments);if(d&&typeof d.then=="function"){for(var h=this,f=arguments.length,g=new Array(f);f--;)g[f]=arguments[f];return d.then(function(){return l.apply(h,g)})}return l.apply(this,arguments)}}He.ModifyError=_e,He.DexieError=Re,He.BulkError=ze;var Me=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ge(o){Me=o}var St={},at=100,vn=typeof Promise>"u"?[]:(function(){var o=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[o,p(o),o];var l=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[l,p(l),o]})(),Pe=vn[0],Yt=vn[1],vn=vn[2],Yt=Yt&&Yt.then,Ie=Pe&&Pe.constructor,zt=!!vn,Ye=function(o,l){ct.push([o,l]),ft&&(queueMicrotask($e),ft=!1)},$t=!0,ft=!0,lt=[],We=[],we=Se,rt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:ve,pgp:!1,env:{},finalize:ve},ie=rt,ct=[],bt=0,Rt=[];function se(o){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var l=this._PSD=ie;if(typeof o!="function"){if(o!==St)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&pt(this,this._value))}this._state=null,this._value=null,++l.ref,(function d(h,f){try{f(function(g){if(h._state===null){if(g===h)throw new TypeError("A promise cannot be resolved with itself.");var v=h._lib&&Ne();g&&typeof g.then=="function"?d(h,function(C,I){g instanceof se?g._then(C,I):g.then(C,I)}):(h._state=!0,h._value=g,En(h)),v&&Xe()}},pt.bind(null,h))}catch(g){pt(h,g)}})(this,o)}var dn={get:function(){var o=ie,l=Qr;function d(h,f){var g=this,v=!o.global&&(o!==ie||l!==Qr),C=v&&!_n(),I=new se(function(D,z){ue(g,new yn(na(h,o,v,C),na(f,o,v,C),D,z,o))});return this._consoleTask&&(I._consoleTask=this._consoleTask),I}return d.prototype=St,d},set:function(o){T(this,"then",o&&o.prototype===St?dn:{get:function(){return o},set:dn.set})}};function yn(o,l,d,h,f){this.onFulfilled=typeof o=="function"?o:null,this.onRejected=typeof l=="function"?l:null,this.resolve=d,this.reject=h,this.psd=f}function pt(o,l){var d,h;We.push(l),o._state===null&&(d=o._lib&&Ne(),l=we(l),o._state=!1,o._value=l,h=o,lt.some(function(f){return f._value===h._value})||lt.push(h),En(o),d&&Xe())}function En(o){var l=o._listeners;o._listeners=[];for(var d=0,h=l.length;d<h;++d)ue(o,l[d]);var f=o._PSD;--f.ref||f.finalize(),bt===0&&(++bt,Ye(function(){--bt==0&&Le()},[]))}function ue(o,l){if(o._state!==null){var d=o._state?l.onFulfilled:l.onRejected;if(d===null)return(o._state?l.resolve:l.reject)(o._value);++l.psd.ref,++bt,Ye(je,[d,o,l])}else o._listeners.push(l)}function je(o,l,d){try{var h,f=l._value;!l._state&&We.length&&(We=[]),h=Me&&l._consoleTask?l._consoleTask.run(function(){return o(f)}):o(f),l._state||We.indexOf(f)!==-1||(function(g){for(var v=lt.length;v;)if(lt[--v]._value===g._value)return lt.splice(v,1)})(l),d.resolve(h)}catch(g){d.reject(g)}finally{--bt==0&&Le(),--d.psd.ref||d.psd.finalize()}}function $e(){Fn(rt,function(){Ne()&&Xe()})}function Ne(){var o=$t;return ft=$t=!1,o}function Xe(){var o,l,d;do for(;0<ct.length;)for(o=ct,ct=[],d=o.length,l=0;l<d;++l){var h=o[l];h[0].apply(null,h[1])}while(0<ct.length);ft=$t=!0}function Le(){var o=lt;lt=[],o.forEach(function(h){h._PSD.onunhandled.call(null,h._value,h)});for(var l=Rt.slice(0),d=l.length;d;)l[--d]()}function an(o){return new se(St,!1,o)}function Ke(o,l){var d=ie;return function(){var h=Ne(),f=ie;try{return Tn(d,!0),o.apply(this,arguments)}catch(g){l&&l(g)}finally{Tn(f,!1),h&&Xe()}}}$(se.prototype,{then:dn,_then:function(o,l){ue(this,new yn(null,null,o,l,ie))},catch:function(o){if(arguments.length===1)return this.then(null,o);var l=o,d=arguments[1];return typeof l=="function"?this.then(null,function(h){return(h instanceof l?d:an)(h)}):this.then(null,function(h){return(h&&h.name===l?d:an)(h)})},finally:function(o){return this.then(function(l){return se.resolve(o()).then(function(){return l})},function(l){return se.resolve(o()).then(function(){return an(l)})})},timeout:function(o,l){var d=this;return o<1/0?new se(function(h,f){var g=setTimeout(function(){return f(new ce.Timeout(l))},o);d.then(h,f).finally(clearTimeout.bind(null,g))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&T(se.prototype,Symbol.toStringTag,"Dexie.Promise"),rt.env=ta(),$(se,{all:function(){var o=Ue.apply(null,arguments).map(Jr);return new se(function(l,d){o.length===0&&l([]);var h=o.length;o.forEach(function(f,g){return se.resolve(f).then(function(v){o[g]=v,--h||l(o)},d)})})},resolve:function(o){return o instanceof se?o:o&&typeof o.then=="function"?new se(function(l,d){o.then(l,d)}):new se(St,!0,o)},reject:an,race:function(){var o=Ue.apply(null,arguments).map(Jr);return new se(function(l,d){o.map(function(h){return se.resolve(h).then(l,d)})})},PSD:{get:function(){return ie},set:function(o){return ie=o}},totalEchoes:{get:function(){return Qr}},newPSD:Sn,usePSD:Fn,scheduler:{get:function(){return Ye},set:function(o){Ye=o}},rejectionMapper:{get:function(){return we},set:function(o){we=o}},follow:function(o,l){return new se(function(d,h){return Sn(function(f,g){var v=ie;v.unhandleds=[],v.onunhandled=g,v.finalize=be(function(){var C,I=this;C=function(){I.unhandleds.length===0?f():g(I.unhandleds[0])},Rt.push(function D(){C(),Rt.splice(Rt.indexOf(D),1)}),++bt,Ye(function(){--bt==0&&Le()},[])},v.finalize),o()},l,d,h)})}}),Ie&&(Ie.allSettled&&T(se,"allSettled",function(){var o=Ue.apply(null,arguments).map(Jr);return new se(function(l){o.length===0&&l([]);var d=o.length,h=new Array(d);o.forEach(function(f,g){return se.resolve(f).then(function(v){return h[g]={status:"fulfilled",value:v}},function(v){return h[g]={status:"rejected",reason:v}}).then(function(){return--d||l(h)})})})}),Ie.any&&typeof AggregateError<"u"&&T(se,"any",function(){var o=Ue.apply(null,arguments).map(Jr);return new se(function(l,d){o.length===0&&d(new AggregateError([]));var h=o.length,f=new Array(h);o.forEach(function(g,v){return se.resolve(g).then(function(C){return l(C)},function(C){f[v]=C,--h||d(new AggregateError(f))})})})}),Ie.withResolvers&&(se.withResolvers=Ie.withResolvers));var yt={awaits:0,echoes:0,id:0},Ud=0,Yr=[],Xr=0,Qr=0,Hd=0;function Sn(o,l,d,h){var f=ie,g=Object.create(f);return g.parent=f,g.ref=0,g.global=!1,g.id=++Hd,rt.env,g.env=zt?{Promise:se,PromiseProp:{value:se,configurable:!0,writable:!0},all:se.all,race:se.race,allSettled:se.allSettled,any:se.any,resolve:se.resolve,reject:se.reject}:{},l&&u(g,l),++f.ref,g.finalize=function(){--this.parent.ref||this.parent.finalize()},h=Fn(g,o,d,h),g.ref===0&&g.finalize(),h}function Zn(){return yt.id||(yt.id=++Ud),++yt.awaits,yt.echoes+=at,yt.id}function _n(){return!!yt.awaits&&(--yt.awaits==0&&(yt.id=0),yt.echoes=yt.awaits*at,!0)}function Jr(o){return yt.echoes&&o&&o.constructor===Ie?(Zn(),o.then(function(l){return _n(),l},function(l){return _n(),dt(l)})):o}function qd(){var o=Yr[Yr.length-1];Yr.pop(),Tn(o,!1)}function Tn(o,l){var d,h=ie;(l?!yt.echoes||Xr++&&o===ie:!Xr||--Xr&&o===ie)||queueMicrotask(l?function(f){++Qr,yt.echoes&&--yt.echoes!=0||(yt.echoes=yt.awaits=yt.id=0),Yr.push(ie),Tn(f,!0)}.bind(null,o):qd),o!==ie&&(ie=o,h===rt&&(rt.env=ta()),zt&&(d=rt.env.Promise,l=o.env,(h.global||o.global)&&(Object.defineProperty(s,"Promise",l.PromiseProp),d.all=l.all,d.race=l.race,d.resolve=l.resolve,d.reject=l.reject,l.allSettled&&(d.allSettled=l.allSettled),l.any&&(d.any=l.any))))}function ta(){var o=s.Promise;return zt?{Promise:o,PromiseProp:Object.getOwnPropertyDescriptor(s,"Promise"),all:o.all,race:o.race,allSettled:o.allSettled,any:o.any,resolve:o.resolve,reject:o.reject}:{}}function Fn(o,l,d,h,f){var g=ie;try{return Tn(o,!0),l(d,h,f)}finally{Tn(g,!1)}}function na(o,l,d,h){return typeof o!="function"?o:function(){var f=ie;d&&Zn(),Tn(l,!0);try{return o.apply(this,arguments)}finally{Tn(f,!1),h&&queueMicrotask(_n)}}}function ps(o){Promise===Ie&&yt.echoes===0?Xr===0?o():enqueueNativeMicroTask(o):setTimeout(o,0)}(""+Yt).indexOf("[native code]")===-1&&(Zn=_n=ve);var dt=se.reject,Mn="￿",wn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ra="String expected.",er=[],Zr="__dbnames",ms="readonly",gs="readwrite";function Bn(o,l){return o?l?function(){return o.apply(this,arguments)&&l.apply(this,arguments)}:o:l}var ia={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function ei(o){return typeof o!="string"||/\./.test(o)?function(l){return l}:function(l){return l[o]===void 0&&o in l&&delete(l=P(l))[o],l}}function sa(){throw ce.Type()}function De(o,l){try{var d=oa(o),h=oa(l);if(d!==h)return d==="Array"?1:h==="Array"?-1:d==="binary"?1:h==="binary"?-1:d==="string"?1:h==="string"?-1:d==="Date"?1:h!=="Date"?NaN:-1;switch(d){case"number":case"Date":case"string":return l<o?1:o<l?-1:0;case"binary":return(function(f,g){for(var v=f.length,C=g.length,I=v<C?v:C,D=0;D<I;++D)if(f[D]!==g[D])return f[D]<g[D]?-1:1;return v===C?0:v<C?-1:1})(aa(o),aa(l));case"Array":return(function(f,g){for(var v=f.length,C=g.length,I=v<C?v:C,D=0;D<I;++D){var z=De(f[D],g[D]);if(z!==0)return z}return v===C?0:v<C?-1:1})(o,l)}}catch{}return NaN}function oa(o){var l=typeof o;return l!="object"?l:ArrayBuffer.isView(o)?"binary":(o=k(o),o==="ArrayBuffer"?"binary":o)}function aa(o){return o instanceof Uint8Array?o:ArrayBuffer.isView(o)?new Uint8Array(o.buffer,o.byteOffset,o.byteLength):new Uint8Array(o)}var la=(Qe.prototype._trans=function(o,l,d){var h=this._tx||ie.trans,f=this.name,g=Me&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(o==="readonly"?"read":"write"," ").concat(this.name));function v(D,z,E){if(!E.schema[f])throw new ce.NotFound("Table "+f+" not part of transaction");return l(E.idbtrans,E)}var C=Ne();try{var I=h&&h.db._novip===this.db._novip?h===ie.trans?h._promise(o,v,d):Sn(function(){return h._promise(o,v,d)},{trans:h,transless:ie.transless||ie}):(function D(z,E,F,R){if(z.idbdb&&(z._state.openComplete||ie.letThrough||z._vip)){var j=z._createTransaction(E,F,z._dbSchema);try{j.create(),z._state.PR1398_maxLoop=3}catch(L){return L.name===et.InvalidState&&z.isOpen()&&0<--z._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),z.close({disableAutoOpen:!1}),z.open().then(function(){return D(z,E,F,R)})):dt(L)}return j._promise(E,function(L,O){return Sn(function(){return ie.trans=j,R(L,O,j)})}).then(function(L){if(E==="readwrite")try{j.idbtrans.commit()}catch{}return E==="readonly"?L:j._completion.then(function(){return L})})}if(z._state.openComplete)return dt(new ce.DatabaseClosed(z._state.dbOpenError));if(!z._state.isBeingOpened){if(!z._state.autoOpen)return dt(new ce.DatabaseClosed);z.open().catch(ve)}return z._state.dbReadyPromise.then(function(){return D(z,E,F,R)})})(this.db,o,[this.name],v);return g&&(I._consoleTask=g,I=I.catch(function(D){return console.trace(D),dt(D)})),I}finally{C&&Xe()}},Qe.prototype.get=function(o,l){var d=this;return o&&o.constructor===Object?this.where(o).first(l):o==null?dt(new ce.Type("Invalid argument to Table.get()")):this._trans("readonly",function(h){return d.core.get({trans:h,key:o}).then(function(f){return d.hook.reading.fire(f)})}).then(l)},Qe.prototype.where=function(o){if(typeof o=="string")return new this.db.WhereClause(this,o);if(c(o))return new this.db.WhereClause(this,"[".concat(o.join("+"),"]"));var l=a(o);if(l.length===1)return this.where(l[0]).equals(o[l[0]]);var d=this.schema.indexes.concat(this.schema.primKey).filter(function(C){if(C.compound&&l.every(function(D){return 0<=C.keyPath.indexOf(D)})){for(var I=0;I<l.length;++I)if(l.indexOf(C.keyPath[I])===-1)return!1;return!0}return!1}).sort(function(C,I){return C.keyPath.length-I.keyPath.length})[0];if(d&&this.db._maxKey!==Mn){var g=d.keyPath.slice(0,l.length);return this.where(g).equals(g.map(function(I){return o[I]}))}!d&&Me&&console.warn("The query ".concat(JSON.stringify(o)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(l.join("+"),"]"));var h=this.schema.idxByName;function f(C,I){return De(C,I)===0}var v=l.reduce(function(E,I){var D=E[0],z=E[1],E=h[I],F=o[I];return[D||E,D||!E?Bn(z,E&&E.multi?function(R){return R=ee(R,I),c(R)&&R.some(function(j){return f(F,j)})}:function(R){return f(F,ee(R,I))}):z]},[null,null]),g=v[0],v=v[1];return g?this.where(g.name).equals(o[g.keyPath]).filter(v):d?this.filter(v):this.where(l).equals("")},Qe.prototype.filter=function(o){return this.toCollection().and(o)},Qe.prototype.count=function(o){return this.toCollection().count(o)},Qe.prototype.offset=function(o){return this.toCollection().offset(o)},Qe.prototype.limit=function(o){return this.toCollection().limit(o)},Qe.prototype.each=function(o){return this.toCollection().each(o)},Qe.prototype.toArray=function(o){return this.toCollection().toArray(o)},Qe.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Qe.prototype.orderBy=function(o){return new this.db.Collection(new this.db.WhereClause(this,c(o)?"[".concat(o.join("+"),"]"):o))},Qe.prototype.reverse=function(){return this.toCollection().reverse()},Qe.prototype.mapToClass=function(o){var l,d=this.db,h=this.name;function f(){return l!==null&&l.apply(this,arguments)||this}(this.schema.mappedClass=o).prototype instanceof sa&&((function(I,D){if(typeof D!="function"&&D!==null)throw new TypeError("Class extends value "+String(D)+" is not a constructor or null");function z(){this.constructor=I}r(I,D),I.prototype=D===null?Object.create(D):(z.prototype=D.prototype,new z)})(f,l=o),Object.defineProperty(f.prototype,"db",{get:function(){return d},enumerable:!1,configurable:!0}),f.prototype.table=function(){return h},o=f);for(var g=new Set,v=o.prototype;v;v=p(v))Object.getOwnPropertyNames(v).forEach(function(I){return g.add(I)});function C(I){if(!I)return I;var D,z=Object.create(o.prototype);for(D in I)if(!g.has(D))try{z[D]=I[D]}catch{}return z}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=C,this.hook("reading",C),o},Qe.prototype.defineClass=function(){return this.mapToClass(function(o){u(this,o)})},Qe.prototype.add=function(o,l){var d=this,h=this.schema.primKey,f=h.auto,g=h.keyPath,v=o;return g&&f&&(v=ei(g)(o)),this._trans("readwrite",function(C){return d.core.mutate({trans:C,type:"add",keys:l!=null?[l]:null,values:[v]})}).then(function(C){return C.numFailures?se.reject(C.failures[0]):C.lastResult}).then(function(C){if(g)try{Y(o,g,C)}catch{}return C})},Qe.prototype.update=function(o,l){return typeof o!="object"||c(o)?this.where(":id").equals(o).modify(l):(o=ee(o,this.schema.primKey.keyPath),o===void 0?dt(new ce.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(o).modify(l))},Qe.prototype.put=function(o,l){var d=this,h=this.schema.primKey,f=h.auto,g=h.keyPath,v=o;return g&&f&&(v=ei(g)(o)),this._trans("readwrite",function(C){return d.core.mutate({trans:C,type:"put",values:[v],keys:l!=null?[l]:null})}).then(function(C){return C.numFailures?se.reject(C.failures[0]):C.lastResult}).then(function(C){if(g)try{Y(o,g,C)}catch{}return C})},Qe.prototype.delete=function(o){var l=this;return this._trans("readwrite",function(d){return l.core.mutate({trans:d,type:"delete",keys:[o]})}).then(function(d){return d.numFailures?se.reject(d.failures[0]):void 0})},Qe.prototype.clear=function(){var o=this;return this._trans("readwrite",function(l){return o.core.mutate({trans:l,type:"deleteRange",range:ia})}).then(function(l){return l.numFailures?se.reject(l.failures[0]):void 0})},Qe.prototype.bulkGet=function(o){var l=this;return this._trans("readonly",function(d){return l.core.getMany({keys:o,trans:d}).then(function(h){return h.map(function(f){return l.hook.reading.fire(f)})})})},Qe.prototype.bulkAdd=function(o,l,d){var h=this,f=Array.isArray(l)?l:void 0,g=(d=d||(f?void 0:l))?d.allKeys:void 0;return this._trans("readwrite",function(v){var D=h.schema.primKey,C=D.auto,D=D.keyPath;if(D&&f)throw new ce.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(f&&f.length!==o.length)throw new ce.InvalidArgument("Arguments objects and keys must have the same length");var I=o.length,D=D&&C?o.map(ei(D)):o;return h.core.mutate({trans:v,type:"add",keys:f,values:D,wantResults:g}).then(function(j){var E=j.numFailures,F=j.results,R=j.lastResult,j=j.failures;if(E===0)return g?F:R;throw new ze("".concat(h.name,".bulkAdd(): ").concat(E," of ").concat(I," operations failed"),j)})})},Qe.prototype.bulkPut=function(o,l,d){var h=this,f=Array.isArray(l)?l:void 0,g=(d=d||(f?void 0:l))?d.allKeys:void 0;return this._trans("readwrite",function(v){var D=h.schema.primKey,C=D.auto,D=D.keyPath;if(D&&f)throw new ce.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(f&&f.length!==o.length)throw new ce.InvalidArgument("Arguments objects and keys must have the same length");var I=o.length,D=D&&C?o.map(ei(D)):o;return h.core.mutate({trans:v,type:"put",keys:f,values:D,wantResults:g}).then(function(j){var E=j.numFailures,F=j.results,R=j.lastResult,j=j.failures;if(E===0)return g?F:R;throw new ze("".concat(h.name,".bulkPut(): ").concat(E," of ").concat(I," operations failed"),j)})})},Qe.prototype.bulkUpdate=function(o){var l=this,d=this.core,h=o.map(function(v){return v.key}),f=o.map(function(v){return v.changes}),g=[];return this._trans("readwrite",function(v){return d.getMany({trans:v,keys:h,cache:"clone"}).then(function(C){var I=[],D=[];o.forEach(function(E,F){var R=E.key,j=E.changes,L=C[F];if(L){for(var O=0,N=Object.keys(j);O<N.length;O++){var q=N[O],W=j[q];if(q===l.schema.primKey.keyPath){if(De(W,R)!==0)throw new ce.Constraint("Cannot update primary key in bulkUpdate()")}else Y(L,q,W)}g.push(F),I.push(R),D.push(L)}});var z=I.length;return d.mutate({trans:v,type:"put",keys:I,values:D,updates:{keys:h,changeSpecs:f}}).then(function(E){var F=E.numFailures,R=E.failures;if(F===0)return z;for(var j=0,L=Object.keys(R);j<L.length;j++){var O,N=L[j],q=g[Number(N)];q!=null&&(O=R[N],delete R[N],R[q]=O)}throw new ze("".concat(l.name,".bulkUpdate(): ").concat(F," of ").concat(z," operations failed"),R)})})})},Qe.prototype.bulkDelete=function(o){var l=this,d=o.length;return this._trans("readwrite",function(h){return l.core.mutate({trans:h,type:"delete",keys:o})}).then(function(v){var f=v.numFailures,g=v.lastResult,v=v.failures;if(f===0)return g;throw new ze("".concat(l.name,".bulkDelete(): ").concat(f," of ").concat(d," operations failed"),v)})},Qe);function Qe(){}function yr(o){function l(v,C){if(C){for(var I=arguments.length,D=new Array(I-1);--I;)D[I-1]=arguments[I];return d[v].subscribe.apply(null,D),o}if(typeof v=="string")return d[v]}var d={};l.addEventType=g;for(var h=1,f=arguments.length;h<f;++h)g(arguments[h]);return l;function g(v,C,I){if(typeof v!="object"){var D;C=C||st;var z={subscribers:[],fire:I=I||ve,subscribe:function(E){z.subscribers.indexOf(E)===-1&&(z.subscribers.push(E),z.fire=C(z.fire,E))},unsubscribe:function(E){z.subscribers=z.subscribers.filter(function(F){return F!==E}),z.fire=z.subscribers.reduce(C,I)}};return d[v]=l[v]=z}a(D=v).forEach(function(E){var F=D[E];if(c(F))g(E,D[E][0],D[E][1]);else{if(F!=="asap")throw new ce.InvalidArgument("Invalid event config");var R=g(E,Se,function(){for(var j=arguments.length,L=new Array(j);j--;)L[j]=arguments[j];R.subscribers.forEach(function(O){re(function(){O.apply(null,L)})})})}})}}function wr(o,l){return A(l).from({prototype:o}),l}function tr(o,l){return!(o.filter||o.algorithm||o.or)&&(l?o.justLimit:!o.replayFilter)}function bs(o,l){o.filter=Bn(o.filter,l)}function ys(o,l,d){var h=o.replayFilter;o.replayFilter=h?function(){return Bn(h(),l())}:l,o.justLimit=d&&!h}function ti(o,l){if(o.isPrimKey)return l.primaryKey;var d=l.getIndexByKeyPath(o.index);if(!d)throw new ce.Schema("KeyPath "+o.index+" on object store "+l.name+" is not indexed");return d}function ca(o,l,d){var h=ti(o,l.schema);return l.openCursor({trans:d,values:!o.keysOnly,reverse:o.dir==="prev",unique:!!o.unique,query:{index:h,range:o.range}})}function ni(o,l,d,h){var f=o.replayFilter?Bn(o.filter,o.replayFilter()):o.filter;if(o.or){var g={},v=function(C,I,D){var z,E;f&&!f(I,D,function(F){return I.stop(F)},function(F){return I.fail(F)})||((E=""+(z=I.primaryKey))=="[object ArrayBuffer]"&&(E=""+new Uint8Array(z)),b(g,E)||(g[E]=!0,l(C,I,D)))};return Promise.all([o.or._iterate(v,d),da(ca(o,h,d),o.algorithm,v,!o.keysOnly&&o.valueMapper)])}return da(ca(o,h,d),Bn(o.algorithm,f),l,!o.keysOnly&&o.valueMapper)}function da(o,l,d,h){var f=Ke(h?function(g,v,C){return d(h(g),v,C)}:d);return o.then(function(g){if(g)return g.start(function(){var v=function(){return g.continue()};l&&!l(g,function(C){return v=C},function(C){g.stop(C),v=ve},function(C){g.fail(C),v=ve})||f(g.value,g,function(C){return v=C}),v()})})}var vn=Symbol(),vr=(ua.prototype.execute=function(o){if(this.add!==void 0){var l=this.add;if(c(l))return n(n([],c(o)?o:[],!0),l).sort();if(typeof l=="number")return(Number(o)||0)+l;if(typeof l=="bigint")try{return BigInt(o)+l}catch{return BigInt(0)+l}throw new TypeError("Invalid term ".concat(l))}if(this.remove!==void 0){var d=this.remove;if(c(d))return c(o)?o.filter(function(h){return!d.includes(h)}).sort():[];if(typeof d=="number")return Number(o)-d;if(typeof d=="bigint")try{return BigInt(o)-d}catch{return BigInt(0)-d}throw new TypeError("Invalid subtrahend ".concat(d))}return l=(l=this.replacePrefix)===null||l===void 0?void 0:l[0],l&&typeof o=="string"&&o.startsWith(l)?this.replacePrefix[1]+o.substring(l.length):o},ua);function ua(o){Object.assign(this,o)}var Wd=(Fe.prototype._read=function(o,l){var d=this._ctx;return d.error?d.table._trans(null,dt.bind(null,d.error)):d.table._trans("readonly",o).then(l)},Fe.prototype._write=function(o){var l=this._ctx;return l.error?l.table._trans(null,dt.bind(null,l.error)):l.table._trans("readwrite",o,"locked")},Fe.prototype._addAlgorithm=function(o){var l=this._ctx;l.algorithm=Bn(l.algorithm,o)},Fe.prototype._iterate=function(o,l){return ni(this._ctx,o,l,this._ctx.table.core)},Fe.prototype.clone=function(o){var l=Object.create(this.constructor.prototype),d=Object.create(this._ctx);return o&&u(d,o),l._ctx=d,l},Fe.prototype.raw=function(){return this._ctx.valueMapper=null,this},Fe.prototype.each=function(o){var l=this._ctx;return this._read(function(d){return ni(l,o,d,l.table.core)})},Fe.prototype.count=function(o){var l=this;return this._read(function(d){var h=l._ctx,f=h.table.core;if(tr(h,!0))return f.count({trans:d,query:{index:ti(h,f.schema),range:h.range}}).then(function(v){return Math.min(v,h.limit)});var g=0;return ni(h,function(){return++g,!1},d,f).then(function(){return g})}).then(o)},Fe.prototype.sortBy=function(o,l){var d=o.split(".").reverse(),h=d[0],f=d.length-1;function g(I,D){return D?g(I[d[D]],D-1):I[h]}var v=this._ctx.dir==="next"?1:-1;function C(I,D){return De(g(I,f),g(D,f))*v}return this.toArray(function(I){return I.sort(C)}).then(l)},Fe.prototype.toArray=function(o){var l=this;return this._read(function(d){var h=l._ctx;if(h.dir==="next"&&tr(h,!0)&&0<h.limit){var f=h.valueMapper,g=ti(h,h.table.core.schema);return h.table.core.query({trans:d,limit:h.limit,values:!0,query:{index:g,range:h.range}}).then(function(C){return C=C.result,f?C.map(f):C})}var v=[];return ni(h,function(C){return v.push(C)},d,h.table.core).then(function(){return v})},o)},Fe.prototype.offset=function(o){var l=this._ctx;return o<=0||(l.offset+=o,tr(l)?ys(l,function(){var d=o;return function(h,f){return d===0||(d===1?--d:f(function(){h.advance(d),d=0}),!1)}}):ys(l,function(){var d=o;return function(){return--d<0}})),this},Fe.prototype.limit=function(o){return this._ctx.limit=Math.min(this._ctx.limit,o),ys(this._ctx,function(){var l=o;return function(d,h,f){return--l<=0&&h(f),0<=l}},!0),this},Fe.prototype.until=function(o,l){return bs(this._ctx,function(d,h,f){return!o(d.value)||(h(f),l)}),this},Fe.prototype.first=function(o){return this.limit(1).toArray(function(l){return l[0]}).then(o)},Fe.prototype.last=function(o){return this.reverse().first(o)},Fe.prototype.filter=function(o){var l;return bs(this._ctx,function(d){return o(d.value)}),(l=this._ctx).isMatch=Bn(l.isMatch,o),this},Fe.prototype.and=function(o){return this.filter(o)},Fe.prototype.or=function(o){return new this.db.WhereClause(this._ctx.table,o,this)},Fe.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Fe.prototype.desc=function(){return this.reverse()},Fe.prototype.eachKey=function(o){var l=this._ctx;return l.keysOnly=!l.isMatch,this.each(function(d,h){o(h.key,h)})},Fe.prototype.eachUniqueKey=function(o){return this._ctx.unique="unique",this.eachKey(o)},Fe.prototype.eachPrimaryKey=function(o){var l=this._ctx;return l.keysOnly=!l.isMatch,this.each(function(d,h){o(h.primaryKey,h)})},Fe.prototype.keys=function(o){var l=this._ctx;l.keysOnly=!l.isMatch;var d=[];return this.each(function(h,f){d.push(f.key)}).then(function(){return d}).then(o)},Fe.prototype.primaryKeys=function(o){var l=this._ctx;if(l.dir==="next"&&tr(l,!0)&&0<l.limit)return this._read(function(h){var f=ti(l,l.table.core.schema);return l.table.core.query({trans:h,values:!1,limit:l.limit,query:{index:f,range:l.range}})}).then(function(h){return h.result}).then(o);l.keysOnly=!l.isMatch;var d=[];return this.each(function(h,f){d.push(f.primaryKey)}).then(function(){return d}).then(o)},Fe.prototype.uniqueKeys=function(o){return this._ctx.unique="unique",this.keys(o)},Fe.prototype.firstKey=function(o){return this.limit(1).keys(function(l){return l[0]}).then(o)},Fe.prototype.lastKey=function(o){return this.reverse().firstKey(o)},Fe.prototype.distinct=function(){var o=this._ctx,o=o.index&&o.table.schema.idxByName[o.index];if(!o||!o.multi)return this;var l={};return bs(this._ctx,function(f){var h=f.primaryKey.toString(),f=b(l,h);return l[h]=!0,!f}),this},Fe.prototype.modify=function(o){var l=this,d=this._ctx;return this._write(function(h){var f,g,v;v=typeof o=="function"?o:(f=a(o),g=f.length,function(O){for(var N=!1,q=0;q<g;++q){var W=f[q],G=o[W],J=ee(O,W);G instanceof vr?(Y(O,W,G.execute(J)),N=!0):J!==G&&(Y(O,W,G),N=!0)}return N});var C=d.table.core,E=C.schema.primaryKey,I=E.outbound,D=E.extractKey,z=200,E=l.db._options.modifyChunkSize;E&&(z=typeof E=="object"?E[C.name]||E["*"]||200:E);function F(O,W){var q=W.failures,W=W.numFailures;j+=O-W;for(var G=0,J=a(q);G<J.length;G++){var ae=J[G];R.push(q[ae])}}var R=[],j=0,L=[];return l.clone().primaryKeys().then(function(O){function N(W){var G=Math.min(z,O.length-W);return C.getMany({trans:h,keys:O.slice(W,W+G),cache:"immutable"}).then(function(J){for(var ae=[],Z=[],ne=I?[]:null,de=[],oe=0;oe<G;++oe){var fe=J[oe],Ce={value:P(fe),primKey:O[W+oe]};v.call(Ce,Ce.value,Ce)!==!1&&(Ce.value==null?de.push(O[W+oe]):I||De(D(fe),D(Ce.value))===0?(Z.push(Ce.value),I&&ne.push(O[W+oe])):(de.push(O[W+oe]),ae.push(Ce.value)))}return Promise.resolve(0<ae.length&&C.mutate({trans:h,type:"add",values:ae}).then(function(Te){for(var Ae in Te.failures)de.splice(parseInt(Ae),1);F(ae.length,Te)})).then(function(){return(0<Z.length||q&&typeof o=="object")&&C.mutate({trans:h,type:"put",keys:ne,values:Z,criteria:q,changeSpec:typeof o!="function"&&o,isAdditionalChunk:0<W}).then(function(Te){return F(Z.length,Te)})}).then(function(){return(0<de.length||q&&o===ws)&&C.mutate({trans:h,type:"delete",keys:de,criteria:q,isAdditionalChunk:0<W}).then(function(Te){return F(de.length,Te)})}).then(function(){return O.length>W+G&&N(W+z)})})}var q=tr(d)&&d.limit===1/0&&(typeof o!="function"||o===ws)&&{index:d.index,range:d.range};return N(0).then(function(){if(0<R.length)throw new _e("Error modifying one or more objects",R,j,L);return O.length})})})},Fe.prototype.delete=function(){var o=this._ctx,l=o.range;return tr(o)&&(o.isPrimKey||l.type===3)?this._write(function(d){var h=o.table.core.schema.primaryKey,f=l;return o.table.core.count({trans:d,query:{index:h,range:f}}).then(function(g){return o.table.core.mutate({trans:d,type:"deleteRange",range:f}).then(function(v){var C=v.failures;if(v.lastResult,v.results,v=v.numFailures,v)throw new _e("Could not delete some values",Object.keys(C).map(function(I){return C[I]}),g-v);return g-v})})}):this.modify(ws)},Fe);function Fe(){}var ws=function(o,l){return l.value=null};function Kd(o,l){return o<l?-1:o===l?0:1}function Vd(o,l){return l<o?-1:o===l?0:1}function Lt(o,l,d){return o=o instanceof fa?new o.Collection(o):o,o._ctx.error=new(d||TypeError)(l),o}function nr(o){return new o.Collection(o,function(){return ha("")}).limit(0)}function ri(o,l,d,h){var f,g,v,C,I,D,z,E=d.length;if(!d.every(function(j){return typeof j=="string"}))return Lt(o,ra);function F(j){f=j==="next"?function(O){return O.toUpperCase()}:function(O){return O.toLowerCase()},g=j==="next"?function(O){return O.toLowerCase()}:function(O){return O.toUpperCase()},v=j==="next"?Kd:Vd;var L=d.map(function(O){return{lower:g(O),upper:f(O)}}).sort(function(O,N){return v(O.lower,N.lower)});C=L.map(function(O){return O.upper}),I=L.map(function(O){return O.lower}),z=(D=j)==="next"?"":h}F("next"),o=new o.Collection(o,function(){return An(C[0],I[E-1]+h)}),o._ondirectionchange=function(j){F(j)};var R=0;return o._addAlgorithm(function(j,L,O){var N=j.key;if(typeof N!="string")return!1;var q=g(N);if(l(q,I,R))return!0;for(var W=null,G=R;G<E;++G){var J=(function(ae,Z,ne,de,oe,fe){for(var Ce=Math.min(ae.length,de.length),Te=-1,Ae=0;Ae<Ce;++Ae){var Ft=Z[Ae];if(Ft!==de[Ae])return oe(ae[Ae],ne[Ae])<0?ae.substr(0,Ae)+ne[Ae]+ne.substr(Ae+1):oe(ae[Ae],de[Ae])<0?ae.substr(0,Ae)+de[Ae]+ne.substr(Ae+1):0<=Te?ae.substr(0,Te)+Z[Te]+ne.substr(Te+1):null;oe(ae[Ae],Ft)<0&&(Te=Ae)}return Ce<de.length&&fe==="next"?ae+ne.substr(ae.length):Ce<ae.length&&fe==="prev"?ae.substr(0,ne.length):Te<0?null:ae.substr(0,Te)+de[Te]+ne.substr(Te+1)})(N,q,C[G],I[G],v,D);J===null&&W===null?R=G+1:(W===null||0<v(W,J))&&(W=J)}return L(W!==null?function(){j.continue(W+z)}:O),!1}),o}function An(o,l,d,h){return{type:2,lower:o,upper:l,lowerOpen:d,upperOpen:h}}function ha(o){return{type:1,lower:o,upper:o}}var fa=(Object.defineProperty(wt.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),wt.prototype.between=function(o,l,d,h){d=d!==!1,h=h===!0;try{return 0<this._cmp(o,l)||this._cmp(o,l)===0&&(d||h)&&(!d||!h)?nr(this):new this.Collection(this,function(){return An(o,l,!d,!h)})}catch{return Lt(this,wn)}},wt.prototype.equals=function(o){return o==null?Lt(this,wn):new this.Collection(this,function(){return ha(o)})},wt.prototype.above=function(o){return o==null?Lt(this,wn):new this.Collection(this,function(){return An(o,void 0,!0)})},wt.prototype.aboveOrEqual=function(o){return o==null?Lt(this,wn):new this.Collection(this,function(){return An(o,void 0,!1)})},wt.prototype.below=function(o){return o==null?Lt(this,wn):new this.Collection(this,function(){return An(void 0,o,!1,!0)})},wt.prototype.belowOrEqual=function(o){return o==null?Lt(this,wn):new this.Collection(this,function(){return An(void 0,o)})},wt.prototype.startsWith=function(o){return typeof o!="string"?Lt(this,ra):this.between(o,o+Mn,!0,!0)},wt.prototype.startsWithIgnoreCase=function(o){return o===""?this.startsWith(o):ri(this,function(l,d){return l.indexOf(d[0])===0},[o],Mn)},wt.prototype.equalsIgnoreCase=function(o){return ri(this,function(l,d){return l===d[0]},[o],"")},wt.prototype.anyOfIgnoreCase=function(){var o=Ue.apply(Q,arguments);return o.length===0?nr(this):ri(this,function(l,d){return d.indexOf(l)!==-1},o,"")},wt.prototype.startsWithAnyOfIgnoreCase=function(){var o=Ue.apply(Q,arguments);return o.length===0?nr(this):ri(this,function(l,d){return d.some(function(h){return l.indexOf(h)===0})},o,Mn)},wt.prototype.anyOf=function(){var o=this,l=Ue.apply(Q,arguments),d=this._cmp;try{l.sort(d)}catch{return Lt(this,wn)}if(l.length===0)return nr(this);var h=new this.Collection(this,function(){return An(l[0],l[l.length-1])});h._ondirectionchange=function(g){d=g==="next"?o._ascending:o._descending,l.sort(d)};var f=0;return h._addAlgorithm(function(g,v,C){for(var I=g.key;0<d(I,l[f]);)if(++f===l.length)return v(C),!1;return d(I,l[f])===0||(v(function(){g.continue(l[f])}),!1)}),h},wt.prototype.notEqual=function(o){return this.inAnyRange([[-1/0,o],[o,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},wt.prototype.noneOf=function(){var o=Ue.apply(Q,arguments);if(o.length===0)return new this.Collection(this);try{o.sort(this._ascending)}catch{return Lt(this,wn)}var l=o.reduce(function(d,h){return d?d.concat([[d[d.length-1][1],h]]):[[-1/0,h]]},null);return l.push([o[o.length-1],this.db._maxKey]),this.inAnyRange(l,{includeLowers:!1,includeUppers:!1})},wt.prototype.inAnyRange=function(N,l){var d=this,h=this._cmp,f=this._ascending,g=this._descending,v=this._min,C=this._max;if(N.length===0)return nr(this);if(!N.every(function(q){return q[0]!==void 0&&q[1]!==void 0&&f(q[0],q[1])<=0}))return Lt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ce.InvalidArgument);var I=!l||l.includeLowers!==!1,D=l&&l.includeUppers===!0,z,E=f;function F(q,W){return E(q[0],W[0])}try{(z=N.reduce(function(q,W){for(var G=0,J=q.length;G<J;++G){var ae=q[G];if(h(W[0],ae[1])<0&&0<h(W[1],ae[0])){ae[0]=v(ae[0],W[0]),ae[1]=C(ae[1],W[1]);break}}return G===J&&q.push(W),q},[])).sort(F)}catch{return Lt(this,wn)}var R=0,j=D?function(q){return 0<f(q,z[R][1])}:function(q){return 0<=f(q,z[R][1])},L=I?function(q){return 0<g(q,z[R][0])}:function(q){return 0<=g(q,z[R][0])},O=j,N=new this.Collection(this,function(){return An(z[0][0],z[z.length-1][1],!I,!D)});return N._ondirectionchange=function(q){E=q==="next"?(O=j,f):(O=L,g),z.sort(F)},N._addAlgorithm(function(q,W,G){for(var J,ae=q.key;O(ae);)if(++R===z.length)return W(G),!1;return!j(J=ae)&&!L(J)||(d._cmp(ae,z[R][1])===0||d._cmp(ae,z[R][0])===0||W(function(){E===f?q.continue(z[R][0]):q.continue(z[R][1])}),!1)}),N},wt.prototype.startsWithAnyOf=function(){var o=Ue.apply(Q,arguments);return o.every(function(l){return typeof l=="string"})?o.length===0?nr(this):this.inAnyRange(o.map(function(l){return[l,l+Mn]})):Lt(this,"startsWithAnyOf() only works with strings")},wt);function wt(){}function un(o){return Ke(function(l){return xr(l),o(l.target.error),!1})}function xr(o){o.stopPropagation&&o.stopPropagation(),o.preventDefault&&o.preventDefault()}var $r="storagemutated",vs="x-storagemutated-1",In=yr(null,$r),Gd=(hn.prototype._lock=function(){return le(!ie.global),++this._reculock,this._reculock!==1||ie.global||(ie.lockOwnerFor=this),this},hn.prototype._unlock=function(){if(le(!ie.global),--this._reculock==0)for(ie.global||(ie.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var o=this._blockedFuncs.shift();try{Fn(o[1],o[0])}catch{}}return this},hn.prototype._locked=function(){return this._reculock&&ie.lockOwnerFor!==this},hn.prototype.create=function(o){var l=this;if(!this.mode)return this;var d=this.db.idbdb,h=this.db._state.dbOpenError;if(le(!this.idbtrans),!o&&!d)switch(h&&h.name){case"DatabaseClosedError":throw new ce.DatabaseClosed(h);case"MissingAPIError":throw new ce.MissingAPI(h.message,h);default:throw new ce.OpenFailed(h)}if(!this.active)throw new ce.TransactionInactive;return le(this._completion._state===null),(o=this.idbtrans=o||(this.db.core||d).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Ke(function(f){xr(f),l._reject(o.error)}),o.onabort=Ke(function(f){xr(f),l.active&&l._reject(new ce.Abort(o.error)),l.active=!1,l.on("abort").fire(f)}),o.oncomplete=Ke(function(){l.active=!1,l._resolve(),"mutatedParts"in o&&In.storagemutated.fire(o.mutatedParts)}),this},hn.prototype._promise=function(o,l,d){var h=this;if(o==="readwrite"&&this.mode!=="readwrite")return dt(new ce.ReadOnly("Transaction is readonly"));if(!this.active)return dt(new ce.TransactionInactive);if(this._locked())return new se(function(g,v){h._blockedFuncs.push([function(){h._promise(o,l,d).then(g,v)},ie])});if(d)return Sn(function(){var g=new se(function(v,C){h._lock();var I=l(v,C,h);I&&I.then&&I.then(v,C)});return g.finally(function(){return h._unlock()}),g._lib=!0,g});var f=new se(function(g,v){var C=l(g,v,h);C&&C.then&&C.then(g,v)});return f._lib=!0,f},hn.prototype._root=function(){return this.parent?this.parent._root():this},hn.prototype.waitFor=function(o){var l,d=this._root(),h=se.resolve(o);d._waitingFor?d._waitingFor=d._waitingFor.then(function(){return h}):(d._waitingFor=h,d._waitingQueue=[],l=d.idbtrans.objectStore(d.storeNames[0]),(function g(){for(++d._spinCount;d._waitingQueue.length;)d._waitingQueue.shift()();d._waitingFor&&(l.get(-1/0).onsuccess=g)})());var f=d._waitingFor;return new se(function(g,v){h.then(function(C){return d._waitingQueue.push(Ke(g.bind(null,C)))},function(C){return d._waitingQueue.push(Ke(v.bind(null,C)))}).finally(function(){d._waitingFor===f&&(d._waitingFor=null)})})},hn.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ce.Abort))},hn.prototype.table=function(o){var l=this._memoizedTables||(this._memoizedTables={});if(b(l,o))return l[o];var d=this.schema[o];if(!d)throw new ce.NotFound("Table "+o+" not part of transaction");return d=new this.db.Table(o,d,this),d.core=this.db.core.table(o),l[o]=d},hn);function hn(){}function xs(o,l,d,h,f,g,v){return{name:o,keyPath:l,unique:d,multi:h,auto:f,compound:g,src:(d&&!v?"&":"")+(h?"*":"")+(f?"++":"")+pa(l)}}function pa(o){return typeof o=="string"?o:o?"["+[].join.call(o,"+")+"]":""}function $s(o,l,d){return{name:o,primKey:l,indexes:d,mappedClass:null,idxByName:(h=function(f){return[f.name,f]},d.reduce(function(f,g,v){return v=h(g,v),v&&(f[v[0]]=v[1]),f},{}))};var h}var kr=function(o){try{return o.only([[]]),kr=function(){return[[]]},[[]]}catch{return kr=function(){return Mn},Mn}};function ks(o){return o==null?function(){}:typeof o=="string"?(l=o).split(".").length===1?function(d){return d[l]}:function(d){return ee(d,l)}:function(d){return ee(d,o)};var l}function ma(o){return[].slice.call(o)}var Yd=0;function Cr(o){return o==null?":id":typeof o=="string"?o:"[".concat(o.join("+"),"]")}function Xd(o,l,I){function h(O){if(O.type===3)return null;if(O.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var R=O.lower,j=O.upper,L=O.lowerOpen,O=O.upperOpen;return R===void 0?j===void 0?null:l.upperBound(j,!!O):j===void 0?l.lowerBound(R,!!L):l.bound(R,j,!!L,!!O)}function f(F){var R,j=F.name;return{name:j,schema:F,mutate:function(L){var O=L.trans,N=L.type,q=L.keys,W=L.values,G=L.range;return new Promise(function(J,ae){J=Ke(J);var Z=O.objectStore(j),ne=Z.keyPath==null,de=N==="put"||N==="add";if(!de&&N!=="delete"&&N!=="deleteRange")throw new Error("Invalid operation type: "+N);var oe,fe=(q||W||{length:1}).length;if(q&&W&&q.length!==W.length)throw new Error("Given keys array must have same length as given values array.");if(fe===0)return J({numFailures:0,failures:{},results:[],lastResult:void 0});function Ce(_t){++Ft,xr(_t)}var Te=[],Ae=[],Ft=0;if(N==="deleteRange"){if(G.type===4)return J({numFailures:Ft,failures:Ae,results:[],lastResult:void 0});G.type===3?Te.push(oe=Z.clear()):Te.push(oe=Z.delete(h(G)))}else{var ne=de?ne?[W,q]:[W,null]:[q,null],ke=ne[0],Ct=ne[1];if(de)for(var Et=0;Et<fe;++Et)Te.push(oe=Ct&&Ct[Et]!==void 0?Z[N](ke[Et],Ct[Et]):Z[N](ke[Et])),oe.onerror=Ce;else for(Et=0;Et<fe;++Et)Te.push(oe=Z[N](ke[Et])),oe.onerror=Ce}function gi(_t){_t=_t.target.result,Te.forEach(function(Hn,Ns){return Hn.error!=null&&(Ae[Ns]=Hn.error)}),J({numFailures:Ft,failures:Ae,results:N==="delete"?q:Te.map(function(Hn){return Hn.result}),lastResult:_t})}oe.onerror=function(_t){Ce(_t),gi(_t)},oe.onsuccess=gi})},getMany:function(L){var O=L.trans,N=L.keys;return new Promise(function(q,W){q=Ke(q);for(var G,J=O.objectStore(j),ae=N.length,Z=new Array(ae),ne=0,de=0,oe=function(Te){Te=Te.target,Z[Te._pos]=Te.result,++de===ne&&q(Z)},fe=un(W),Ce=0;Ce<ae;++Ce)N[Ce]!=null&&((G=J.get(N[Ce]))._pos=Ce,G.onsuccess=oe,G.onerror=fe,++ne);ne===0&&q(Z)})},get:function(L){var O=L.trans,N=L.key;return new Promise(function(q,W){q=Ke(q);var G=O.objectStore(j).get(N);G.onsuccess=function(J){return q(J.target.result)},G.onerror=un(W)})},query:(R=D,function(L){return new Promise(function(O,N){O=Ke(O);var q,W,G,ne=L.trans,J=L.values,ae=L.limit,oe=L.query,Z=ae===1/0?void 0:ae,de=oe.index,oe=oe.range,ne=ne.objectStore(j),de=de.isPrimaryKey?ne:ne.index(de.name),oe=h(oe);if(ae===0)return O({result:[]});R?((Z=J?de.getAll(oe,Z):de.getAllKeys(oe,Z)).onsuccess=function(fe){return O({result:fe.target.result})},Z.onerror=un(N)):(q=0,W=!J&&"openKeyCursor"in de?de.openKeyCursor(oe):de.openCursor(oe),G=[],W.onsuccess=function(fe){var Ce=W.result;return Ce?(G.push(J?Ce.value:Ce.primaryKey),++q===ae?O({result:G}):void Ce.continue()):O({result:G})},W.onerror=un(N))})}),openCursor:function(L){var O=L.trans,N=L.values,q=L.query,W=L.reverse,G=L.unique;return new Promise(function(J,ae){J=Ke(J);var de=q.index,Z=q.range,ne=O.objectStore(j),ne=de.isPrimaryKey?ne:ne.index(de.name),de=W?G?"prevunique":"prev":G?"nextunique":"next",oe=!N&&"openKeyCursor"in ne?ne.openKeyCursor(h(Z),de):ne.openCursor(h(Z),de);oe.onerror=un(ae),oe.onsuccess=Ke(function(fe){var Ce,Te,Ae,Ft,ke=oe.result;ke?(ke.___id=++Yd,ke.done=!1,Ce=ke.continue.bind(ke),Te=(Te=ke.continuePrimaryKey)&&Te.bind(ke),Ae=ke.advance.bind(ke),Ft=function(){throw new Error("Cursor not stopped")},ke.trans=O,ke.stop=ke.continue=ke.continuePrimaryKey=ke.advance=function(){throw new Error("Cursor not started")},ke.fail=Ke(ae),ke.next=function(){var Ct=this,Et=1;return this.start(function(){return Et--?Ct.continue():Ct.stop()}).then(function(){return Ct})},ke.start=function(Ct){function Et(){if(oe.result)try{Ct()}catch(_t){ke.fail(_t)}else ke.done=!0,ke.start=function(){throw new Error("Cursor behind last entry")},ke.stop()}var gi=new Promise(function(_t,Hn){_t=Ke(_t),oe.onerror=un(Hn),ke.fail=Hn,ke.stop=function(Ns){ke.stop=ke.continue=ke.continuePrimaryKey=ke.advance=Ft,_t(Ns)}});return oe.onsuccess=Ke(function(_t){oe.onsuccess=Et,Et()}),ke.continue=Ce,ke.continuePrimaryKey=Te,ke.advance=Ae,Et(),gi},J(ke)):J(null)},ae)})},count:function(L){var O=L.query,N=L.trans,q=O.index,W=O.range;return new Promise(function(G,J){var ae=N.objectStore(j),Z=q.isPrimaryKey?ae:ae.index(q.name),ae=h(W),Z=ae?Z.count(ae):Z.count();Z.onsuccess=Ke(function(ne){return G(ne.target.result)}),Z.onerror=un(J)})}}}var g,v,C,z=(v=I,C=ma((g=o).objectStoreNames),{schema:{name:g.name,tables:C.map(function(F){return v.objectStore(F)}).map(function(F){var R=F.keyPath,O=F.autoIncrement,j=c(R),L={},O={name:F.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:R==null,compound:j,keyPath:R,autoIncrement:O,unique:!0,extractKey:ks(R)},indexes:ma(F.indexNames).map(function(N){return F.index(N)}).map(function(G){var q=G.name,W=G.unique,J=G.multiEntry,G=G.keyPath,J={name:q,compound:c(G),keyPath:G,unique:W,multiEntry:J,extractKey:ks(G)};return L[Cr(G)]=J}),getIndexByKeyPath:function(N){return L[Cr(N)]}};return L[":id"]=O.primaryKey,R!=null&&(L[Cr(R)]=O.primaryKey),O})},hasGetAll:0<C.length&&"getAll"in v.objectStore(C[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),I=z.schema,D=z.hasGetAll,z=I.tables.map(f),E={};return z.forEach(function(F){return E[F.name]=F}),{stack:"dbcore",transaction:o.transaction.bind(o),table:function(F){if(!E[F])throw new Error("Table '".concat(F,"' not found"));return E[F]},MIN_KEY:-1/0,MAX_KEY:kr(l),schema:I}}function Qd(o,l,d,h){var f=d.IDBKeyRange;return d.indexedDB,{dbcore:(h=Xd(l,f,h),o.dbcore.reduce(function(g,v){return v=v.create,i(i({},g),v(g))},h))}}function ii(o,h){var d=h.db,h=Qd(o._middlewares,d,o._deps,h);o.core=h.dbcore,o.tables.forEach(function(f){var g=f.name;o.core.schema.tables.some(function(v){return v.name===g})&&(f.core=o.core.table(g),o[g]instanceof o.Table&&(o[g].core=f.core))})}function si(o,l,d,h){d.forEach(function(f){var g=h[f];l.forEach(function(v){var C=(function I(D,z){return B(D,z)||(D=p(D))&&I(D,z)})(v,f);(!C||"value"in C&&C.value===void 0)&&(v===o.Transaction.prototype||v instanceof o.Transaction?T(v,f,{get:function(){return this.table(f)},set:function(I){_(this,f,{value:I,writable:!0,configurable:!0,enumerable:!0})}}):v[f]=new o.Table(f,g))})})}function Cs(o,l){l.forEach(function(d){for(var h in d)d[h]instanceof o.Table&&delete d[h]})}function Jd(o,l){return o._cfg.version-l._cfg.version}function Zd(o,l,d,h){var f=o._dbSchema;d.objectStoreNames.contains("$meta")&&!f.$meta&&(f.$meta=$s("$meta",ba("")[0],[]),o._storeNames.push("$meta"));var g=o._createTransaction("readwrite",o._storeNames,f);g.create(d),g._completion.catch(h);var v=g._reject.bind(g),C=ie.transless||ie;Sn(function(){return ie.trans=g,ie.transless=C,l!==0?(ii(o,d),D=l,((I=g).storeNames.includes("$meta")?I.table("$meta").get("version").then(function(z){return z??D}):se.resolve(D)).then(function(z){return F=z,R=g,j=d,L=[],z=(E=o)._versions,O=E._dbSchema=ai(0,E.idbdb,j),(z=z.filter(function(N){return N._cfg.version>=F})).length!==0?(z.forEach(function(N){L.push(function(){var q=O,W=N._cfg.dbschema;li(E,q,j),li(E,W,j),O=E._dbSchema=W;var G=Es(q,W);G.add.forEach(function(de){Ss(j,de[0],de[1].primKey,de[1].indexes)}),G.change.forEach(function(de){if(de.recreate)throw new ce.Upgrade("Not yet support for changing primary key");var oe=j.objectStore(de.name);de.add.forEach(function(fe){return oi(oe,fe)}),de.change.forEach(function(fe){oe.deleteIndex(fe.name),oi(oe,fe)}),de.del.forEach(function(fe){return oe.deleteIndex(fe)})});var J=N._cfg.contentUpgrade;if(J&&N._cfg.version>F){ii(E,j),R._memoizedTables={};var ae=te(W);G.del.forEach(function(de){ae[de]=q[de]}),Cs(E,[E.Transaction.prototype]),si(E,[E.Transaction.prototype],a(ae),ae),R.schema=ae;var Z,ne=Ze(J);return ne&&Zn(),G=se.follow(function(){var de;(Z=J(R))&&ne&&(de=_n.bind(null,null),Z.then(de,de))}),Z&&typeof Z.then=="function"?se.resolve(Z):G.then(function(){return Z})}}),L.push(function(q){var W,G,J=N._cfg.dbschema;W=J,G=q,[].slice.call(G.db.objectStoreNames).forEach(function(ae){return W[ae]==null&&G.db.deleteObjectStore(ae)}),Cs(E,[E.Transaction.prototype]),si(E,[E.Transaction.prototype],E._storeNames,E._dbSchema),R.schema=E._dbSchema}),L.push(function(q){E.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(E.idbdb.version/10)===N._cfg.version?(E.idbdb.deleteObjectStore("$meta"),delete E._dbSchema.$meta,E._storeNames=E._storeNames.filter(function(W){return W!=="$meta"})):q.objectStore("$meta").put(N._cfg.version,"version"))})}),(function N(){return L.length?se.resolve(L.shift()(R.idbtrans)).then(N):se.resolve()})().then(function(){ga(O,j)})):se.resolve();var E,F,R,j,L,O}).catch(v)):(a(f).forEach(function(z){Ss(d,z,f[z].primKey,f[z].indexes)}),ii(o,d),void se.follow(function(){return o.on.populate.fire(g)}).catch(v));var I,D})}function eu(o,l){ga(o._dbSchema,l),l.db.version%10!=0||l.objectStoreNames.contains("$meta")||l.db.createObjectStore("$meta").add(Math.ceil(l.db.version/10-1),"version");var d=ai(0,o.idbdb,l);li(o,o._dbSchema,l);for(var h=0,f=Es(d,o._dbSchema).change;h<f.length;h++){var g=(function(v){if(v.change.length||v.recreate)return console.warn("Unable to patch indexes of table ".concat(v.name," because it has changes on the type of index or primary key.")),{value:void 0};var C=l.objectStore(v.name);v.add.forEach(function(I){Me&&console.debug("Dexie upgrade patch: Creating missing index ".concat(v.name,".").concat(I.src)),oi(C,I)})})(f[h]);if(typeof g=="object")return g.value}}function Es(o,l){var d,h={del:[],add:[],change:[]};for(d in o)l[d]||h.del.push(d);for(d in l){var f=o[d],g=l[d];if(f){var v={name:d,def:g,recreate:!1,del:[],add:[],change:[]};if(""+(f.primKey.keyPath||"")!=""+(g.primKey.keyPath||"")||f.primKey.auto!==g.primKey.auto)v.recreate=!0,h.change.push(v);else{var C=f.idxByName,I=g.idxByName,D=void 0;for(D in C)I[D]||v.del.push(D);for(D in I){var z=C[D],E=I[D];z?z.src!==E.src&&v.change.push(E):v.add.push(E)}(0<v.del.length||0<v.add.length||0<v.change.length)&&h.change.push(v)}}else h.add.push([d,g])}return h}function Ss(o,l,d,h){var f=o.db.createObjectStore(l,d.keyPath?{keyPath:d.keyPath,autoIncrement:d.auto}:{autoIncrement:d.auto});return h.forEach(function(g){return oi(f,g)}),f}function ga(o,l){a(o).forEach(function(d){l.db.objectStoreNames.contains(d)||(Me&&console.debug("Dexie: Creating missing table",d),Ss(l,d,o[d].primKey,o[d].indexes))})}function oi(o,l){o.createIndex(l.name,l.keyPath,{unique:l.unique,multiEntry:l.multi})}function ai(o,l,d){var h={};return V(l.objectStoreNames,0).forEach(function(f){for(var g=d.objectStore(f),v=xs(pa(D=g.keyPath),D||"",!0,!1,!!g.autoIncrement,D&&typeof D!="string",!0),C=[],I=0;I<g.indexNames.length;++I){var z=g.index(g.indexNames[I]),D=z.keyPath,z=xs(z.name,D,!!z.unique,!!z.multiEntry,!1,D&&typeof D!="string",!1);C.push(z)}h[f]=$s(f,v,C)}),h}function li(o,l,d){for(var h=d.db.objectStoreNames,f=0;f<h.length;++f){var g=h[f],v=d.objectStore(g);o._hasGetAll="getAll"in v;for(var C=0;C<v.indexNames.length;++C){var I=v.indexNames[C],D=v.index(I).keyPath,z=typeof D=="string"?D:"["+V(D).join("+")+"]";!l[g]||(D=l[g].idxByName[z])&&(D.name=I,delete l[g].idxByName[z],l[g].idxByName[I]=D)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&s.WorkerGlobalScope&&s instanceof s.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(o._hasGetAll=!1)}function ba(o){return o.split(",").map(function(l,d){var h=(l=l.trim()).replace(/([&*]|\+\+)/g,""),f=/^\[/.test(h)?h.match(/^\[(.*)\]$/)[1].split("+"):h;return xs(h,f||null,/\&/.test(l),/\*/.test(l),/\+\+/.test(l),c(f),d===0)})}var tu=(ci.prototype._parseStoresSpec=function(o,l){a(o).forEach(function(d){if(o[d]!==null){var h=ba(o[d]),f=h.shift();if(f.unique=!0,f.multi)throw new ce.Schema("Primary key cannot be multi-valued");h.forEach(function(g){if(g.auto)throw new ce.Schema("Only primary key can be marked as autoIncrement (++)");if(!g.keyPath)throw new ce.Schema("Index must have a name and cannot be an empty string")}),l[d]=$s(d,f,h)}})},ci.prototype.stores=function(d){var l=this.db;this._cfg.storesSource=this._cfg.storesSource?u(this._cfg.storesSource,d):d;var d=l._versions,h={},f={};return d.forEach(function(g){u(h,g._cfg.storesSource),f=g._cfg.dbschema={},g._parseStoresSpec(h,f)}),l._dbSchema=f,Cs(l,[l._allTables,l,l.Transaction.prototype]),si(l,[l._allTables,l,l.Transaction.prototype,this._cfg.tables],a(f),f),l._storeNames=a(f),this},ci.prototype.upgrade=function(o){return this._cfg.contentUpgrade=jt(this._cfg.contentUpgrade||ve,o),this},ci);function ci(){}function _s(o,l){var d=o._dbNamesDB;return d||(d=o._dbNamesDB=new xn(Zr,{addons:[],indexedDB:o,IDBKeyRange:l})).version(1).stores({dbnames:"name"}),d.table("dbnames")}function Ts(o){return o&&typeof o.databases=="function"}function As(o){return Sn(function(){return ie.letThrough=!0,o()})}function Is(o){return!("from"in o)}var kt=function(o,l){if(!this){var d=new kt;return o&&"d"in o&&u(d,o),d}u(this,arguments.length?{d:1,from:o,to:1<arguments.length?l:o}:{d:0})};function Er(o,l,d){var h=De(l,d);if(!isNaN(h)){if(0<h)throw RangeError();if(Is(o))return u(o,{from:l,to:d,d:1});var f=o.l,h=o.r;if(De(d,o.from)<0)return f?Er(f,l,d):o.l={from:l,to:d,d:1,l:null,r:null},wa(o);if(0<De(l,o.to))return h?Er(h,l,d):o.r={from:l,to:d,d:1,l:null,r:null},wa(o);De(l,o.from)<0&&(o.from=l,o.l=null,o.d=h?h.d+1:1),0<De(d,o.to)&&(o.to=d,o.r=null,o.d=o.l?o.l.d+1:1),d=!o.r,f&&!o.l&&Sr(o,f),h&&d&&Sr(o,h)}}function Sr(o,l){Is(l)||(function d(h,I){var g=I.from,v=I.to,C=I.l,I=I.r;Er(h,g,v),C&&d(h,C),I&&d(h,I)})(o,l)}function ya(o,l){var d=di(l),h=d.next();if(h.done)return!1;for(var f=h.value,g=di(o),v=g.next(f.from),C=v.value;!h.done&&!v.done;){if(De(C.from,f.to)<=0&&0<=De(C.to,f.from))return!0;De(f.from,C.from)<0?f=(h=d.next(C.from)).value:C=(v=g.next(f.from)).value}return!1}function di(o){var l=Is(o)?null:{s:0,n:o};return{next:function(d){for(var h=0<arguments.length;l;)switch(l.s){case 0:if(l.s=1,h)for(;l.n.l&&De(d,l.n.from)<0;)l={up:l,n:l.n.l,s:1};else for(;l.n.l;)l={up:l,n:l.n.l,s:1};case 1:if(l.s=2,!h||De(d,l.n.to)<=0)return{value:l.n,done:!1};case 2:if(l.n.r){l.s=3,l={up:l,n:l.n.r,s:0};continue}case 3:l=l.up}return{done:!0}}}}function wa(o){var l,d,h=(((l=o.r)===null||l===void 0?void 0:l.d)||0)-(((d=o.l)===null||d===void 0?void 0:d.d)||0),f=1<h?"r":h<-1?"l":"";f&&(l=f=="r"?"l":"r",d=i({},o),h=o[f],o.from=h.from,o.to=h.to,o[f]=h[f],d[f]=h[l],(o[l]=d).d=va(d)),o.d=va(o)}function va(d){var l=d.r,d=d.l;return(l?d?Math.max(l.d,d.d):l.d:d?d.d:0)+1}function ui(o,l){return a(l).forEach(function(d){o[d]?Sr(o[d],l[d]):o[d]=(function h(f){var g,v,C={};for(g in f)b(f,g)&&(v=f[g],C[g]=!v||typeof v!="object"||m.has(v.constructor)?v:h(v));return C})(l[d])}),o}function Rs(o,l){return o.all||l.all||Object.keys(o).some(function(d){return l[d]&&ya(l[d],o[d])})}$(kt.prototype,((Yt={add:function(o){return Sr(this,o),this},addKey:function(o){return Er(this,o,o),this},addKeys:function(o){var l=this;return o.forEach(function(d){return Er(l,d,d)}),this},hasKey:function(o){var l=di(this).next(o).value;return l&&De(l.from,o)<=0&&0<=De(l.to,o)}})[he]=function(){return di(this)},Yt));var Nn={},Ps={},Ds=!1;function hi(o){ui(Ps,o),Ds||(Ds=!0,setTimeout(function(){Ds=!1,Os(Ps,!(Ps={}))},0))}function Os(o,l){l===void 0&&(l=!1);var d=new Set;if(o.all)for(var h=0,f=Object.values(Nn);h<f.length;h++)xa(v=f[h],o,d,l);else for(var g in o){var v,C=/^idb\:\/\/(.*)\/(.*)\//.exec(g);C&&(g=C[1],C=C[2],(v=Nn["idb://".concat(g,"/").concat(C)])&&xa(v,o,d,l))}d.forEach(function(I){return I()})}function xa(o,l,d,h){for(var f=[],g=0,v=Object.entries(o.queries.query);g<v.length;g++){for(var C=v[g],I=C[0],D=[],z=0,E=C[1];z<E.length;z++){var F=E[z];Rs(l,F.obsSet)?F.subscribers.forEach(function(O){return d.add(O)}):h&&D.push(F)}h&&f.push([I,D])}if(h)for(var R=0,j=f;R<j.length;R++){var L=j[R],I=L[0],D=L[1];o.queries.query[I]=D}}function nu(o){var l=o._state,d=o._deps.indexedDB;if(l.isBeingOpened||o.idbdb)return l.dbReadyPromise.then(function(){return l.dbOpenError?dt(l.dbOpenError):o});l.isBeingOpened=!0,l.dbOpenError=null,l.openComplete=!1;var h=l.openCanceller,f=Math.round(10*o.verno),g=!1;function v(){if(l.openCanceller!==h)throw new ce.DatabaseClosed("db.open() was cancelled")}function C(){return new se(function(F,R){if(v(),!d)throw new ce.MissingAPI;var j=o.name,L=l.autoSchema||!f?d.open(j):d.open(j,f);if(!L)throw new ce.MissingAPI;L.onerror=un(R),L.onblocked=Ke(o._fireOnBlocked),L.onupgradeneeded=Ke(function(O){var N;z=L.transaction,l.autoSchema&&!o._options.allowEmptyDB?(L.onerror=xr,z.abort(),L.result.close(),(N=d.deleteDatabase(j)).onsuccess=N.onerror=Ke(function(){R(new ce.NoSuchDatabase("Database ".concat(j," doesnt exist")))})):(z.onerror=un(R),O=O.oldVersion>Math.pow(2,62)?0:O.oldVersion,E=O<1,o.idbdb=L.result,g&&eu(o,z),Zd(o,O/10,z,R))},R),L.onsuccess=Ke(function(){z=null;var O,N,q,W,G,J=o.idbdb=L.result,ae=V(J.objectStoreNames);if(0<ae.length)try{var Z=J.transaction((W=ae).length===1?W[0]:W,"readonly");if(l.autoSchema)N=J,q=Z,(O=o).verno=N.version/10,q=O._dbSchema=ai(0,N,q),O._storeNames=V(N.objectStoreNames,0),si(O,[O._allTables],a(q),q);else if(li(o,o._dbSchema,Z),((G=Es(ai(0,(G=o).idbdb,Z),G._dbSchema)).add.length||G.change.some(function(ne){return ne.add.length||ne.change.length}))&&!g)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),J.close(),f=J.version+1,g=!0,F(C());ii(o,Z)}catch{}er.push(o),J.onversionchange=Ke(function(ne){l.vcFired=!0,o.on("versionchange").fire(ne)}),J.onclose=Ke(function(ne){o.on("close").fire(ne)}),E&&(G=o._deps,Z=j,J=G.indexedDB,G=G.IDBKeyRange,Ts(J)||Z===Zr||_s(J,G).put({name:Z}).catch(ve)),F()},R)}).catch(function(F){switch(F?.name){case"UnknownError":if(0<l.PR1398_maxLoop)return l.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),C();break;case"VersionError":if(0<f)return f=0,C()}return se.reject(F)})}var I,D=l.dbReadyResolve,z=null,E=!1;return se.race([h,(typeof navigator>"u"?se.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(F){function R(){return indexedDB.databases().finally(F)}I=setInterval(R,100),R()}).finally(function(){return clearInterval(I)}):Promise.resolve()).then(C)]).then(function(){return v(),l.onReadyBeingFired=[],se.resolve(As(function(){return o.on.ready.fire(o.vip)})).then(function F(){if(0<l.onReadyBeingFired.length){var R=l.onReadyBeingFired.reduce(jt,ve);return l.onReadyBeingFired=[],se.resolve(As(function(){return R(o.vip)})).then(F)}})}).finally(function(){l.openCanceller===h&&(l.onReadyBeingFired=null,l.isBeingOpened=!1)}).catch(function(F){l.dbOpenError=F;try{z&&z.abort()}catch{}return h===l.openCanceller&&o._close(),dt(F)}).finally(function(){l.openComplete=!0,D()}).then(function(){var F;return E&&(F={},o.tables.forEach(function(R){R.schema.indexes.forEach(function(j){j.name&&(F["idb://".concat(o.name,"/").concat(R.name,"/").concat(j.name)]=new kt(-1/0,[[[]]]))}),F["idb://".concat(o.name,"/").concat(R.name,"/")]=F["idb://".concat(o.name,"/").concat(R.name,"/:dels")]=new kt(-1/0,[[[]]])}),In($r).fire(F),Os(F,!0)),o})}function js(o){function l(g){return o.next(g)}var d=f(l),h=f(function(g){return o.throw(g)});function f(g){return function(I){var C=g(I),I=C.value;return C.done?I:I&&typeof I.then=="function"?I.then(d,h):c(I)?Promise.all(I).then(d,h):d(I)}}return f(l)()}function fi(o,l,d){for(var h=c(o)?o.slice():[o],f=0;f<d;++f)h.push(l);return h}var ru={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(o){return i(i({},o),{table:function(l){var d=o.table(l),h=d.schema,f={},g=[];function v(E,F,R){var j=Cr(E),L=f[j]=f[j]||[],O=E==null?0:typeof E=="string"?1:E.length,N=0<F,N=i(i({},R),{name:N?"".concat(j,"(virtual-from:").concat(R.name,")"):R.name,lowLevelIndex:R,isVirtual:N,keyTail:F,keyLength:O,extractKey:ks(E),unique:!N&&R.unique});return L.push(N),N.isPrimaryKey||g.push(N),1<O&&v(O===2?E[0]:E.slice(0,O-1),F+1,R),L.sort(function(q,W){return q.keyTail-W.keyTail}),N}l=v(h.primaryKey.keyPath,0,h.primaryKey),f[":id"]=[l];for(var C=0,I=h.indexes;C<I.length;C++){var D=I[C];v(D.keyPath,0,D)}function z(E){var F,R=E.query.index;return R.isVirtual?i(i({},E),{query:{index:R.lowLevelIndex,range:(F=E.query.range,R=R.keyTail,{type:F.type===1?2:F.type,lower:fi(F.lower,F.lowerOpen?o.MAX_KEY:o.MIN_KEY,R),lowerOpen:!0,upper:fi(F.upper,F.upperOpen?o.MIN_KEY:o.MAX_KEY,R),upperOpen:!0})}}):E}return i(i({},d),{schema:i(i({},h),{primaryKey:l,indexes:g,getIndexByKeyPath:function(E){return(E=f[Cr(E)])&&E[0]}}),count:function(E){return d.count(z(E))},query:function(E){return d.query(z(E))},openCursor:function(E){var F=E.query.index,R=F.keyTail,j=F.isVirtual,L=F.keyLength;return j?d.openCursor(z(E)).then(function(N){return N&&O(N)}):d.openCursor(E);function O(N){return Object.create(N,{continue:{value:function(q){q!=null?N.continue(fi(q,E.reverse?o.MAX_KEY:o.MIN_KEY,R)):E.unique?N.continue(N.key.slice(0,L).concat(E.reverse?o.MIN_KEY:o.MAX_KEY,R)):N.continue()}},continuePrimaryKey:{value:function(q,W){N.continuePrimaryKey(fi(q,o.MAX_KEY,R),W)}},primaryKey:{get:function(){return N.primaryKey}},key:{get:function(){var q=N.key;return L===1?q[0]:q.slice(0,L)}},value:{get:function(){return N.value}}})}}})}})}};function zs(o,l,d,h){return d=d||{},h=h||"",a(o).forEach(function(f){var g,v,C;b(l,f)?(g=o[f],v=l[f],typeof g=="object"&&typeof v=="object"&&g&&v?(C=k(g))!==k(v)?d[h+f]=l[f]:C==="Object"?zs(g,v,d,h+f+"."):g!==v&&(d[h+f]=l[f]):g!==v&&(d[h+f]=l[f])):d[h+f]=void 0}),a(l).forEach(function(f){b(o,f)||(d[h+f]=l[f])}),d}function Ls(o,l){return l.type==="delete"?l.keys:l.keys||l.values.map(o.extractKey)}var iu={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(o){return i(i({},o),{table:function(l){var d=o.table(l),h=d.schema.primaryKey;return i(i({},d),{mutate:function(f){var g=ie.trans,v=g.table(l).hook,C=v.deleting,I=v.creating,D=v.updating;switch(f.type){case"add":if(I.fire===ve)break;return g._promise("readwrite",function(){return z(f)},!0);case"put":if(I.fire===ve&&D.fire===ve)break;return g._promise("readwrite",function(){return z(f)},!0);case"delete":if(C.fire===ve)break;return g._promise("readwrite",function(){return z(f)},!0);case"deleteRange":if(C.fire===ve)break;return g._promise("readwrite",function(){return(function E(F,R,j){return d.query({trans:F,values:!1,query:{index:h,range:R},limit:j}).then(function(L){var O=L.result;return z({type:"delete",keys:O,trans:F}).then(function(N){return 0<N.numFailures?Promise.reject(N.failures[0]):O.length<j?{failures:[],numFailures:0,lastResult:void 0}:E(F,i(i({},R),{lower:O[O.length-1],lowerOpen:!0}),j)})})})(f.trans,f.range,1e4)},!0)}return d.mutate(f);function z(E){var F,R,j,L=ie.trans,O=E.keys||Ls(h,E);if(!O)throw new Error("Keys missing");return(E=E.type==="add"||E.type==="put"?i(i({},E),{keys:O}):i({},E)).type!=="delete"&&(E.values=n([],E.values)),E.keys&&(E.keys=n([],E.keys)),F=d,j=O,((R=E).type==="add"?Promise.resolve([]):F.getMany({trans:R.trans,keys:j,cache:"immutable"})).then(function(N){var q=O.map(function(W,G){var J,ae,Z,ne=N[G],de={onerror:null,onsuccess:null};return E.type==="delete"?C.fire.call(de,W,ne,L):E.type==="add"||ne===void 0?(J=I.fire.call(de,W,E.values[G],L),W==null&&J!=null&&(E.keys[G]=W=J,h.outbound||Y(E.values[G],h.keyPath,W))):(J=zs(ne,E.values[G]),(ae=D.fire.call(de,J,W,ne,L))&&(Z=E.values[G],Object.keys(ae).forEach(function(oe){b(Z,oe)?Z[oe]=ae[oe]:Y(Z,oe,ae[oe])}))),de});return d.mutate(E).then(function(W){for(var G=W.failures,J=W.results,ae=W.numFailures,W=W.lastResult,Z=0;Z<O.length;++Z){var ne=(J||O)[Z],de=q[Z];ne==null?de.onerror&&de.onerror(G[Z]):de.onsuccess&&de.onsuccess(E.type==="put"&&N[Z]?E.values[Z]:ne)}return{failures:G,results:J,numFailures:ae,lastResult:W}}).catch(function(W){return q.forEach(function(G){return G.onerror&&G.onerror(W)}),Promise.reject(W)})})}}})}})}};function $a(o,l,d){try{if(!l||l.keys.length<o.length)return null;for(var h=[],f=0,g=0;f<l.keys.length&&g<o.length;++f)De(l.keys[f],o[g])===0&&(h.push(d?P(l.values[f]):l.values[f]),++g);return h.length===o.length?h:null}catch{return null}}var su={stack:"dbcore",level:-1,create:function(o){return{table:function(l){var d=o.table(l);return i(i({},d),{getMany:function(h){if(!h.cache)return d.getMany(h);var f=$a(h.keys,h.trans._cache,h.cache==="clone");return f?se.resolve(f):d.getMany(h).then(function(g){return h.trans._cache={keys:h.keys,values:h.cache==="clone"?P(g):g},g})},mutate:function(h){return h.type!=="add"&&(h.trans._cache=null),d.mutate(h)}})}}}};function ka(o,l){return o.trans.mode==="readonly"&&!!o.subscr&&!o.trans.explicit&&o.trans.db._options.cache!=="disabled"&&!l.schema.primaryKey.outbound}function Ca(o,l){switch(o){case"query":return l.values&&!l.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var ou={stack:"dbcore",level:0,name:"Observability",create:function(o){var l=o.schema.name,d=new kt(o.MIN_KEY,o.MAX_KEY);return i(i({},o),{transaction:function(h,f,g){if(ie.subscr&&f!=="readonly")throw new ce.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ie.querier));return o.transaction(h,f,g)},table:function(h){var f=o.table(h),g=f.schema,v=g.primaryKey,E=g.indexes,C=v.extractKey,I=v.outbound,D=v.autoIncrement&&E.filter(function(R){return R.compound&&R.keyPath.includes(v.keyPath)}),z=i(i({},f),{mutate:function(R){function j(oe){return oe="idb://".concat(l,"/").concat(h,"/").concat(oe),W[oe]||(W[oe]=new kt)}var L,O,N,q=R.trans,W=R.mutatedParts||(R.mutatedParts={}),G=j(""),J=j(":dels"),ae=R.type,de=R.type==="deleteRange"?[R.range]:R.type==="delete"?[R.keys]:R.values.length<50?[Ls(v,R).filter(function(oe){return oe}),R.values]:[],Z=de[0],ne=de[1],de=R.trans._cache;return c(Z)?(G.addKeys(Z),(de=ae==="delete"||Z.length===ne.length?$a(Z,de):null)||J.addKeys(Z),(de||ne)&&(L=j,O=de,N=ne,g.indexes.forEach(function(oe){var fe=L(oe.name||"");function Ce(Ae){return Ae!=null?oe.extractKey(Ae):null}function Te(Ae){return oe.multiEntry&&c(Ae)?Ae.forEach(function(Ft){return fe.addKey(Ft)}):fe.addKey(Ae)}(O||N).forEach(function(Ae,Ct){var ke=O&&Ce(O[Ct]),Ct=N&&Ce(N[Ct]);De(ke,Ct)!==0&&(ke!=null&&Te(ke),Ct!=null&&Te(Ct))})}))):Z?(ne={from:(ne=Z.lower)!==null&&ne!==void 0?ne:o.MIN_KEY,to:(ne=Z.upper)!==null&&ne!==void 0?ne:o.MAX_KEY},J.add(ne),G.add(ne)):(G.add(d),J.add(d),g.indexes.forEach(function(oe){return j(oe.name).add(d)})),f.mutate(R).then(function(oe){return!Z||R.type!=="add"&&R.type!=="put"||(G.addKeys(oe.results),D&&D.forEach(function(fe){for(var Ce=R.values.map(function(ke){return fe.extractKey(ke)}),Te=fe.keyPath.findIndex(function(ke){return ke===v.keyPath}),Ae=0,Ft=oe.results.length;Ae<Ft;++Ae)Ce[Ae][Te]=oe.results[Ae];j(fe.name).addKeys(Ce)})),q.mutatedParts=ui(q.mutatedParts||{},W),oe})}}),E=function(j){var L=j.query,j=L.index,L=L.range;return[j,new kt((j=L.lower)!==null&&j!==void 0?j:o.MIN_KEY,(L=L.upper)!==null&&L!==void 0?L:o.MAX_KEY)]},F={get:function(R){return[v,new kt(R.key)]},getMany:function(R){return[v,new kt().addKeys(R.keys)]},count:E,query:E,openCursor:E};return a(F).forEach(function(R){z[R]=function(j){var L=ie.subscr,O=!!L,N=ka(ie,f)&&Ca(R,j)?j.obsSet={}:L;if(O){var q=function(ne){return ne="idb://".concat(l,"/").concat(h,"/").concat(ne),N[ne]||(N[ne]=new kt)},W=q(""),G=q(":dels"),L=F[R](j),O=L[0],L=L[1];if((R==="query"&&O.isPrimaryKey&&!j.values?G:q(O.name||"")).add(L),!O.isPrimaryKey){if(R!=="count"){var J=R==="query"&&I&&j.values&&f.query(i(i({},j),{values:!1}));return f[R].apply(this,arguments).then(function(ne){if(R==="query"){if(I&&j.values)return J.then(function(Ce){return Ce=Ce.result,W.addKeys(Ce),ne});var de=j.values?ne.result.map(C):ne.result;(j.values?W:G).addKeys(de)}else if(R==="openCursor"){var oe=ne,fe=j.values;return oe&&Object.create(oe,{key:{get:function(){return G.addKey(oe.primaryKey),oe.key}},primaryKey:{get:function(){var Ce=oe.primaryKey;return G.addKey(Ce),Ce}},value:{get:function(){return fe&&W.addKey(oe.primaryKey),oe.value}}})}return ne})}G.add(d)}}return f[R].apply(this,arguments)}}),z}})}};function Ea(o,l,d){if(d.numFailures===0)return l;if(l.type==="deleteRange")return null;var h=l.keys?l.keys.length:"values"in l&&l.values?l.values.length:1;return d.numFailures===h?null:(l=i({},l),c(l.keys)&&(l.keys=l.keys.filter(function(f,g){return!(g in d.failures)})),"values"in l&&c(l.values)&&(l.values=l.values.filter(function(f,g){return!(g in d.failures)})),l)}function Fs(o,l){return d=o,((h=l).lower===void 0||(h.lowerOpen?0<De(d,h.lower):0<=De(d,h.lower)))&&(o=o,(l=l).upper===void 0||(l.upperOpen?De(o,l.upper)<0:De(o,l.upper)<=0));var d,h}function Sa(o,l,F,h,f,g){if(!F||F.length===0)return o;var v=l.query.index,C=v.multiEntry,I=l.query.range,D=h.schema.primaryKey.extractKey,z=v.extractKey,E=(v.lowLevelIndex||v).extractKey,F=F.reduce(function(R,j){var L=R,O=[];if(j.type==="add"||j.type==="put")for(var N=new kt,q=j.values.length-1;0<=q;--q){var W,G=j.values[q],J=D(G);N.hasKey(J)||(W=z(G),(C&&c(W)?W.some(function(oe){return Fs(oe,I)}):Fs(W,I))&&(N.addKey(J),O.push(G)))}switch(j.type){case"add":var ae=new kt().addKeys(l.values?R.map(function(fe){return D(fe)}):R),L=R.concat(l.values?O.filter(function(fe){return fe=D(fe),!ae.hasKey(fe)&&(ae.addKey(fe),!0)}):O.map(function(fe){return D(fe)}).filter(function(fe){return!ae.hasKey(fe)&&(ae.addKey(fe),!0)}));break;case"put":var Z=new kt().addKeys(j.values.map(function(fe){return D(fe)}));L=R.filter(function(fe){return!Z.hasKey(l.values?D(fe):fe)}).concat(l.values?O:O.map(function(fe){return D(fe)}));break;case"delete":var ne=new kt().addKeys(j.keys);L=R.filter(function(fe){return!ne.hasKey(l.values?D(fe):fe)});break;case"deleteRange":var de=j.range;L=R.filter(function(fe){return!Fs(D(fe),de)})}return L},o);return F===o?o:(F.sort(function(R,j){return De(E(R),E(j))||De(D(R),D(j))}),l.limit&&l.limit<1/0&&(F.length>l.limit?F.length=l.limit:o.length===l.limit&&F.length<l.limit&&(f.dirty=!0)),g?Object.freeze(F):F)}function _a(o,l){return De(o.lower,l.lower)===0&&De(o.upper,l.upper)===0&&!!o.lowerOpen==!!l.lowerOpen&&!!o.upperOpen==!!l.upperOpen}function au(o,l){return(function(d,h,f,g){if(d===void 0)return h!==void 0?-1:0;if(h===void 0)return 1;if((h=De(d,h))===0){if(f&&g)return 0;if(f)return 1;if(g)return-1}return h})(o.lower,l.lower,o.lowerOpen,l.lowerOpen)<=0&&0<=(function(d,h,f,g){if(d===void 0)return h!==void 0?1:0;if(h===void 0)return-1;if((h=De(d,h))===0){if(f&&g)return 0;if(f)return-1;if(g)return 1}return h})(o.upper,l.upper,o.upperOpen,l.upperOpen)}function lu(o,l,d,h){o.subscribers.add(d),h.addEventListener("abort",function(){var f,g;o.subscribers.delete(d),o.subscribers.size===0&&(f=o,g=l,setTimeout(function(){f.subscribers.size===0&&H(g,f)},3e3))})}var cu={stack:"dbcore",level:0,name:"Cache",create:function(o){var l=o.schema.name;return i(i({},o),{transaction:function(d,h,f){var g,v,C=o.transaction(d,h,f);return h==="readwrite"&&(v=(g=new AbortController).signal,f=function(I){return function(){if(g.abort(),h==="readwrite"){for(var D=new Set,z=0,E=d;z<E.length;z++){var F=E[z],R=Nn["idb://".concat(l,"/").concat(F)];if(R){var j=o.table(F),L=R.optimisticOps.filter(function(fe){return fe.trans===C});if(C._explicit&&I&&C.mutatedParts)for(var O=0,N=Object.values(R.queries.query);O<N.length;O++)for(var q=0,W=(ae=N[O]).slice();q<W.length;q++)Rs((Z=W[q]).obsSet,C.mutatedParts)&&(H(ae,Z),Z.subscribers.forEach(function(fe){return D.add(fe)}));else if(0<L.length){R.optimisticOps=R.optimisticOps.filter(function(fe){return fe.trans!==C});for(var G=0,J=Object.values(R.queries.query);G<J.length;G++)for(var ae,Z,ne,de=0,oe=(ae=J[G]).slice();de<oe.length;de++)(Z=oe[de]).res!=null&&C.mutatedParts&&(I&&!Z.dirty?(ne=Object.isFrozen(Z.res),ne=Sa(Z.res,Z.req,L,j,Z,ne),Z.dirty?(H(ae,Z),Z.subscribers.forEach(function(fe){return D.add(fe)})):ne!==Z.res&&(Z.res=ne,Z.promise=se.resolve({result:ne}))):(Z.dirty&&H(ae,Z),Z.subscribers.forEach(function(fe){return D.add(fe)})))}}}D.forEach(function(fe){return fe()})}}},C.addEventListener("abort",f(!1),{signal:v}),C.addEventListener("error",f(!1),{signal:v}),C.addEventListener("complete",f(!0),{signal:v})),C},table:function(d){var h=o.table(d),f=h.schema.primaryKey;return i(i({},h),{mutate:function(g){var v=ie.trans;if(f.outbound||v.db._options.cache==="disabled"||v.explicit||v.idbtrans.mode!=="readwrite")return h.mutate(g);var C=Nn["idb://".concat(l,"/").concat(d)];return C?(v=h.mutate(g),g.type!=="add"&&g.type!=="put"||!(50<=g.values.length||Ls(f,g).some(function(I){return I==null}))?(C.optimisticOps.push(g),g.mutatedParts&&hi(g.mutatedParts),v.then(function(I){0<I.numFailures&&(H(C.optimisticOps,g),(I=Ea(0,g,I))&&C.optimisticOps.push(I),g.mutatedParts&&hi(g.mutatedParts))}),v.catch(function(){H(C.optimisticOps,g),g.mutatedParts&&hi(g.mutatedParts)})):v.then(function(I){var D=Ea(0,i(i({},g),{values:g.values.map(function(z,E){var F;return I.failures[E]?z:(z=(F=f.keyPath)!==null&&F!==void 0&&F.includes(".")?P(z):i({},z),Y(z,f.keyPath,I.results[E]),z)})}),I);C.optimisticOps.push(D),queueMicrotask(function(){return g.mutatedParts&&hi(g.mutatedParts)})}),v):h.mutate(g)},query:function(g){if(!ka(ie,h)||!Ca("query",g))return h.query(g);var v=((D=ie.trans)===null||D===void 0?void 0:D.db._options.cache)==="immutable",E=ie,C=E.requery,I=E.signal,D=(function(j,L,O,N){var q=Nn["idb://".concat(j,"/").concat(L)];if(!q)return[];if(!(L=q.queries[O]))return[null,!1,q,null];var W=L[(N.query?N.query.index.name:null)||""];if(!W)return[null,!1,q,null];switch(O){case"query":var G=W.find(function(J){return J.req.limit===N.limit&&J.req.values===N.values&&_a(J.req.query.range,N.query.range)});return G?[G,!0,q,W]:[W.find(function(J){return("limit"in J.req?J.req.limit:1/0)>=N.limit&&(!N.values||J.req.values)&&au(J.req.query.range,N.query.range)}),!1,q,W];case"count":return G=W.find(function(J){return _a(J.req.query.range,N.query.range)}),[G,!!G,q,W]}})(l,d,"query",g),z=D[0],E=D[1],F=D[2],R=D[3];return z&&E?z.obsSet=g.obsSet:(E=h.query(g).then(function(j){var L=j.result;if(z&&(z.res=L),v){for(var O=0,N=L.length;O<N;++O)Object.freeze(L[O]);Object.freeze(L)}else j.result=P(L);return j}).catch(function(j){return R&&z&&H(R,z),Promise.reject(j)}),z={obsSet:g.obsSet,promise:E,subscribers:new Set,type:"query",req:g,dirty:!1},R?R.push(z):(R=[z],(F=F||(Nn["idb://".concat(l,"/").concat(d)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[g.query.index.name||""]=R)),lu(z,R,C,I),z.promise.then(function(j){return{result:Sa(j.result,g,F?.optimisticOps,h,z,v)}})}})}})}};function pi(o,l){return new Proxy(o,{get:function(d,h,f){return h==="db"?l:Reflect.get(d,h,f)}})}var xn=(ut.prototype.version=function(o){if(isNaN(o)||o<.1)throw new ce.Type("Given version is not a positive number");if(o=Math.round(10*o)/10,this.idbdb||this._state.isBeingOpened)throw new ce.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,o);var l=this._versions,d=l.filter(function(h){return h._cfg.version===o})[0];return d||(d=new this.Version(o),l.push(d),l.sort(Jd),d.stores({}),this._state.autoSchema=!1,d)},ut.prototype._whenReady=function(o){var l=this;return this.idbdb&&(this._state.openComplete||ie.letThrough||this._vip)?o():new se(function(d,h){if(l._state.openComplete)return h(new ce.DatabaseClosed(l._state.dbOpenError));if(!l._state.isBeingOpened){if(!l._state.autoOpen)return void h(new ce.DatabaseClosed);l.open().catch(ve)}l._state.dbReadyPromise.then(d,h)}).then(o)},ut.prototype.use=function(o){var l=o.stack,d=o.create,h=o.level,f=o.name;return f&&this.unuse({stack:l,name:f}),o=this._middlewares[l]||(this._middlewares[l]=[]),o.push({stack:l,create:d,level:h??10,name:f}),o.sort(function(g,v){return g.level-v.level}),this},ut.prototype.unuse=function(o){var l=o.stack,d=o.name,h=o.create;return l&&this._middlewares[l]&&(this._middlewares[l]=this._middlewares[l].filter(function(f){return h?f.create!==h:!!d&&f.name!==d})),this},ut.prototype.open=function(){var o=this;return Fn(rt,function(){return nu(o)})},ut.prototype._close=function(){var o=this._state,l=er.indexOf(this);if(0<=l&&er.splice(l,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}o.isBeingOpened||(o.dbReadyPromise=new se(function(d){o.dbReadyResolve=d}),o.openCanceller=new se(function(d,h){o.cancelOpen=h}))},ut.prototype.close=function(d){var l=(d===void 0?{disableAutoOpen:!0}:d).disableAutoOpen,d=this._state;l?(d.isBeingOpened&&d.cancelOpen(new ce.DatabaseClosed),this._close(),d.autoOpen=!1,d.dbOpenError=new ce.DatabaseClosed):(this._close(),d.autoOpen=this._options.autoOpen||d.isBeingOpened,d.openComplete=!1,d.dbOpenError=null)},ut.prototype.delete=function(o){var l=this;o===void 0&&(o={disableAutoOpen:!0});var d=0<arguments.length&&typeof arguments[0]!="object",h=this._state;return new se(function(f,g){function v(){l.close(o);var C=l._deps.indexedDB.deleteDatabase(l.name);C.onsuccess=Ke(function(){var I,D,z;I=l._deps,D=l.name,z=I.indexedDB,I=I.IDBKeyRange,Ts(z)||D===Zr||_s(z,I).delete(D).catch(ve),f()}),C.onerror=un(g),C.onblocked=l._fireOnBlocked}if(d)throw new ce.InvalidArgument("Invalid closeOptions argument to db.delete()");h.isBeingOpened?h.dbReadyPromise.then(v):v()})},ut.prototype.backendDB=function(){return this.idbdb},ut.prototype.isOpen=function(){return this.idbdb!==null},ut.prototype.hasBeenClosed=function(){var o=this._state.dbOpenError;return o&&o.name==="DatabaseClosed"},ut.prototype.hasFailed=function(){return this._state.dbOpenError!==null},ut.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(ut.prototype,"tables",{get:function(){var o=this;return a(this._allTables).map(function(l){return o._allTables[l]})},enumerable:!1,configurable:!0}),ut.prototype.transaction=function(){var o=function(l,d,h){var f=arguments.length;if(f<2)throw new ce.InvalidArgument("Too few arguments");for(var g=new Array(f-1);--f;)g[f-1]=arguments[f];return h=g.pop(),[l,xe(g),h]}.apply(this,arguments);return this._transaction.apply(this,o)},ut.prototype._transaction=function(o,l,d){var h=this,f=ie.trans;f&&f.db===this&&o.indexOf("!")===-1||(f=null);var g,v,C=o.indexOf("?")!==-1;o=o.replace("!","").replace("?","");try{if(v=l.map(function(D){if(D=D instanceof h.Table?D.name:D,typeof D!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return D}),o=="r"||o===ms)g=ms;else{if(o!="rw"&&o!=gs)throw new ce.InvalidArgument("Invalid transaction mode: "+o);g=gs}if(f){if(f.mode===ms&&g===gs){if(!C)throw new ce.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");f=null}f&&v.forEach(function(D){if(f&&f.storeNames.indexOf(D)===-1){if(!C)throw new ce.SubTransaction("Table "+D+" not included in parent transaction.");f=null}}),C&&f&&!f.active&&(f=null)}}catch(D){return f?f._promise(null,function(z,E){E(D)}):dt(D)}var I=function D(z,E,F,R,j){return se.resolve().then(function(){var L=ie.transless||ie,O=z._createTransaction(E,F,z._dbSchema,R);if(O.explicit=!0,L={trans:O,transless:L},R)O.idbtrans=R.idbtrans;else try{O.create(),O.idbtrans._explicit=!0,z._state.PR1398_maxLoop=3}catch(W){return W.name===et.InvalidState&&z.isOpen()&&0<--z._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),z.close({disableAutoOpen:!1}),z.open().then(function(){return D(z,E,F,null,j)})):dt(W)}var N,q=Ze(j);return q&&Zn(),L=se.follow(function(){var W;(N=j.call(O,O))&&(q?(W=_n.bind(null,null),N.then(W,W)):typeof N.next=="function"&&typeof N.throw=="function"&&(N=js(N)))},L),(N&&typeof N.then=="function"?se.resolve(N).then(function(W){return O.active?W:dt(new ce.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):L.then(function(){return N})).then(function(W){return R&&O._resolve(),O._completion.then(function(){return W})}).catch(function(W){return O._reject(W),dt(W)})})}.bind(null,this,g,v,f,d);return f?f._promise(g,I,"lock"):ie.trans?Fn(ie.transless,function(){return h._whenReady(I)}):this._whenReady(I)},ut.prototype.table=function(o){if(!b(this._allTables,o))throw new ce.InvalidTable("Table ".concat(o," does not exist"));return this._allTables[o]},ut);function ut(o,l){var d=this;this._middlewares={},this.verno=0;var h=ut.dependencies;this._options=l=i({addons:ut.addons,autoOpen:!0,indexedDB:h.indexedDB,IDBKeyRange:h.IDBKeyRange,cache:"cloned"},l),this._deps={indexedDB:l.indexedDB,IDBKeyRange:l.IDBKeyRange},h=l.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var f,g,v,C,I,D={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ve,dbReadyPromise:null,cancelOpen:ve,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:l.autoOpen};D.dbReadyPromise=new se(function(E){D.dbReadyResolve=E}),D.openCanceller=new se(function(E,F){D.cancelOpen=F}),this._state=D,this.name=o,this.on=yr(this,"populate","blocked","versionchange","close",{ready:[jt,ve]}),this.on.ready.subscribe=X(this.on.ready.subscribe,function(E){return function(F,R){ut.vip(function(){var j,L=d._state;L.openComplete?(L.dbOpenError||se.resolve().then(F),R&&E(F)):L.onReadyBeingFired?(L.onReadyBeingFired.push(F),R&&E(F)):(E(F),j=d,R||E(function O(){j.on.ready.unsubscribe(F),j.on.ready.unsubscribe(O)}))})}}),this.Collection=(f=this,wr(Wd.prototype,function(N,O){this.db=f;var R=ia,j=null;if(O)try{R=O()}catch(q){j=q}var L=N._ctx,O=L.table,N=O.hook.reading.fire;this._ctx={table:O,index:L.index,isPrimKey:!L.index||O.schema.primKey.keyPath&&L.index===O.schema.primKey.name,range:R,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:j,or:L.or,valueMapper:N!==Se?N:null}})),this.Table=(g=this,wr(la.prototype,function(E,F,R){this.db=g,this._tx=R,this.name=E,this.schema=F,this.hook=g._allTables[E]?g._allTables[E].hook:yr(null,{creating:[nt,ve],reading:[Ot,Se],updating:[on,ve],deleting:[Cn,ve]})})),this.Transaction=(v=this,wr(Gd.prototype,function(E,F,R,j,L){var O=this;this.db=v,this.mode=E,this.storeNames=F,this.schema=R,this.chromeTransactionDurability=j,this.idbtrans=null,this.on=yr(this,"complete","error","abort"),this.parent=L||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new se(function(N,q){O._resolve=N,O._reject=q}),this._completion.then(function(){O.active=!1,O.on.complete.fire()},function(N){var q=O.active;return O.active=!1,O.on.error.fire(N),O.parent?O.parent._reject(N):q&&O.idbtrans&&O.idbtrans.abort(),dt(N)})})),this.Version=(C=this,wr(tu.prototype,function(E){this.db=C,this._cfg={version:E,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(I=this,wr(fa.prototype,function(E,F,R){if(this.db=I,this._ctx={table:E,index:F===":id"?null:F,or:R},this._cmp=this._ascending=De,this._descending=function(j,L){return De(L,j)},this._max=function(j,L){return 0<De(j,L)?j:L},this._min=function(j,L){return De(j,L)<0?j:L},this._IDBKeyRange=I._deps.IDBKeyRange,!this._IDBKeyRange)throw new ce.MissingAPI})),this.on("versionchange",function(E){0<E.newVersion?console.warn("Another connection wants to upgrade database '".concat(d.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(d.name,"'. Closing db now to resume the delete request.")),d.close({disableAutoOpen:!1})}),this.on("blocked",function(E){!E.newVersion||E.newVersion<E.oldVersion?console.warn("Dexie.delete('".concat(d.name,"') was blocked")):console.warn("Upgrade '".concat(d.name,"' blocked by other connection holding version ").concat(E.oldVersion/10))}),this._maxKey=kr(l.IDBKeyRange),this._createTransaction=function(E,F,R,j){return new d.Transaction(E,F,R,d._options.chromeTransactionDurability,j)},this._fireOnBlocked=function(E){d.on("blocked").fire(E),er.filter(function(F){return F.name===d.name&&F!==d&&!F._state.vcFired}).map(function(F){return F.on("versionchange").fire(E)})},this.use(su),this.use(cu),this.use(ou),this.use(ru),this.use(iu);var z=new Proxy(this,{get:function(E,F,R){if(F==="_vip")return!0;if(F==="table")return function(L){return pi(d.table(L),z)};var j=Reflect.get(E,F,R);return j instanceof la?pi(j,z):F==="tables"?j.map(function(L){return pi(L,z)}):F==="_createTransaction"?function(){return pi(j.apply(this,arguments),z)}:j}});this.vip=z,h.forEach(function(E){return E(d)})}var mi,Yt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",du=(Ms.prototype.subscribe=function(o,l,d){return this._subscribe(o&&typeof o!="function"?o:{next:o,error:l,complete:d})},Ms.prototype[Yt]=function(){return this},Ms);function Ms(o){this._subscribe=o}try{mi={indexedDB:s.indexedDB||s.mozIndexedDB||s.webkitIndexedDB||s.msIndexedDB,IDBKeyRange:s.IDBKeyRange||s.webkitIDBKeyRange}}catch{mi={indexedDB:null,IDBKeyRange:null}}function Ta(o){var l,d=!1,h=new du(function(f){var g=Ze(o),v,C=!1,I={},D={},z={get closed(){return C},unsubscribe:function(){C||(C=!0,v&&v.abort(),E&&In.storagemutated.unsubscribe(R))}};f.start&&f.start(z);var E=!1,F=function(){return ps(j)},R=function(L){ui(I,L),Rs(D,I)&&F()},j=function(){var L,O,N;!C&&mi.indexedDB&&(I={},L={},v&&v.abort(),v=new AbortController,N=(function(q){var W=Ne();try{g&&Zn();var G=Sn(o,q);return G=g?G.finally(_n):G}finally{W&&Xe()}})(O={subscr:L,signal:v.signal,requery:F,querier:o,trans:null}),Promise.resolve(N).then(function(q){d=!0,l=q,C||O.signal.aborted||(I={},(function(W){for(var G in W)if(b(W,G))return;return 1})(D=L)||E||(In($r,R),E=!0),ps(function(){return!C&&f.next&&f.next(q)}))},function(q){d=!1,["DatabaseClosedError","AbortError"].includes(q?.name)||C||ps(function(){C||f.error&&f.error(q)})}))};return setTimeout(F,0),z});return h.hasValue=function(){return d},h.getValue=function(){return l},h}var Un=xn;function Bs(o){var l=Rn;try{Rn=!0,In.storagemutated.fire(o),Os(o,!0)}finally{Rn=l}}$(Un,i(i({},He),{delete:function(o){return new Un(o,{addons:[]}).delete()},exists:function(o){return new Un(o,{addons:[]}).open().then(function(l){return l.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(o){try{return l=Un.dependencies,d=l.indexedDB,l=l.IDBKeyRange,(Ts(d)?Promise.resolve(d.databases()).then(function(h){return h.map(function(f){return f.name}).filter(function(f){return f!==Zr})}):_s(d,l).toCollection().primaryKeys()).then(o)}catch{return dt(new ce.MissingAPI)}var l,d},defineClass:function(){return function(o){u(this,o)}},ignoreTransaction:function(o){return ie.trans?Fn(ie.transless,o):o()},vip:As,async:function(o){return function(){try{var l=js(o.apply(this,arguments));return l&&typeof l.then=="function"?l:se.resolve(l)}catch(d){return dt(d)}}},spawn:function(o,l,d){try{var h=js(o.apply(d,l||[]));return h&&typeof h.then=="function"?h:se.resolve(h)}catch(f){return dt(f)}},currentTransaction:{get:function(){return ie.trans||null}},waitFor:function(o,l){return l=se.resolve(typeof o=="function"?Un.ignoreTransaction(o):o).timeout(l||6e4),ie.trans?ie.trans.waitFor(l):l},Promise:se,debug:{get:function(){return Me},set:function(o){Ge(o)}},derive:A,extend:u,props:$,override:X,Events:yr,on:In,liveQuery:Ta,extendObservabilitySet:ui,getByKeyPath:ee,setByKeyPath:Y,delByKeyPath:function(o,l){typeof l=="string"?Y(o,l,void 0):"length"in l&&[].map.call(l,function(d){Y(o,d,void 0)})},shallowClone:te,deepClone:P,getObjectDiff:zs,cmp:De,asap:re,minKey:-1/0,addons:[],connections:er,errnames:et,dependencies:mi,cache:Nn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(o){return parseInt(o)}).reduce(function(o,l,d){return o+l/Math.pow(10,2*d)})})),Un.maxKey=kr(Un.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(In($r,function(o){Rn||(o=new CustomEvent(vs,{detail:o}),Rn=!0,dispatchEvent(o),Rn=!1)}),addEventListener(vs,function(o){o=o.detail,Rn||Bs(o)}));var rr,Rn=!1,Aa=function(){};return typeof BroadcastChannel<"u"&&((Aa=function(){(rr=new BroadcastChannel(vs)).onmessage=function(o){return o.data&&Bs(o.data)}})(),typeof rr.unref=="function"&&rr.unref(),In($r,function(o){Rn||rr.postMessage(o)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(o){if(!xn.disableBfCache&&o.persisted){Me&&console.debug("Dexie: handling persisted pagehide"),rr?.close();for(var l=0,d=er;l<d.length;l++)d[l].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(o){!xn.disableBfCache&&o.persisted&&(Me&&console.debug("Dexie: handling persisted pageshow"),Aa(),Bs({all:new kt(-1/0,[[]])}))})),se.rejectionMapper=function(o,l){return!o||o instanceof Re||o instanceof TypeError||o instanceof SyntaxError||!o.name||!tt[o.name]?o:(l=new tt[o.name](l||o.message,o),"stack"in o&&T(l,"stack",{get:function(){return this.inner.stack}}),l)},Ge(Me),i(xn,Object.freeze({__proto__:null,Dexie:xn,liveQuery:Ta,Entity:sa,cmp:De,PropModSymbol:vn,PropModification:vr,replacePrefix:function(o,l){return new vr({replacePrefix:[o,l]})},add:function(o){return new vr({add:o})},remove:function(o){return new vr({remove:o})},default:xn,RangeSet:kt,mergeRanges:Sr,rangesOverlap:ya}),{default:xn}),xn})})(Ti)),Ti.exports}var qu=Hu();const eo=Nu(qu),Ha=Symbol.for("Dexie"),ji=globalThis[Ha]||(globalThis[Ha]=eo);if(eo.semVer!==ji.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${eo.semVer} and ${ji.semVer}`);const{liveQuery:Co,mergeRanges:bw,rangesOverlap:yw,RangeSet:ww,cmp:vw,Entity:xw,PropModSymbol:$w,PropModification:kw,replacePrefix:Cw,add:Ew,remove:Sw}=ji,Wu="easydb";function Kn(e,t){return`${e}::${t}`}let bi=null;function nc(){if(bi)return bi;const e=new ji(Wu);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.version(3).stores({settings:"key, workspaceId, name"}).upgrade(async t=>{const r=t.table("settings"),n=(await r.toArray()).filter(c=>c.workspaceId==null);if(n.length===0)return;const s=(await t.table("workspaces").toArray()).map(c=>c.id),a=s.length>0?s:["default"];for(const c of n){for(const u of a)await r.put({key:Kn(u,c.key),workspaceId:u,name:c.key,value:c.value});await r.delete(c.key)}}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>Ku()),bi={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},bi}function Ku(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function Tr(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const r=Object.entries(t);return e.filter(i=>Eo(i,r)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,r){if(await e.update(t,r)===0)throw new Error(`patch: no doc with id=${t}`);const n=await e.get(t);if(!n)throw new Error(`patch: doc id=${t} vanished after update`);return n},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const i=Co(()=>e.toArray()).subscribe({next:n=>t(n)});return()=>i.unsubscribe()}}}function Vu(e,t){return{async find(r){const i=e.where("tableId").equals(t);if(!r||Object.keys(r).length===0)return i.toArray();const n=Object.entries(r);return i.filter(s=>Eo(s,n)).toArray()},async findOne(r){const i=await e.get(r);return i&&i.tableId===t?i:null},async insert(r){const i={...r,tableId:t};return await e.add(i),i},async bulkInsert(r){if(r.length===0)return[];const i=r.map(n=>({...n,tableId:t}));return await e.bulkAdd(i),i},async upsert(r){const i={...r,tableId:t};return await e.put(i),i},async patch(r,i){if(await e.update(r,i)===0)throw new Error(`row patch: no row ${r}`);const s=await e.get(r);if(!s)throw new Error(`row patch: row ${r} vanished after update`);return s},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},subscribe(r){const n=Co(()=>e.where("tableId").equals(t).toArray()).subscribe({next:s=>r(s)});return()=>n.unsubscribe()}}}function Gu(e,t){const r=n=>({...n,workspaceId:t(),key:Kn(t(),n.name),name:n.name,value:n.value}),i=()=>e.where("workspaceId").equals(t());return{async find(n){const s=await i().toArray();if(!n||Object.keys(n).length===0)return s;const a=Object.entries(n);return s.filter(c=>Eo(c,a))},async findOne(n){return await e.get(Kn(t(),n))??null},async insert(n){const s=r(n);return await e.add(s),s},async bulkInsert(n){if(n.length===0)return[];const s=n.map(a=>r(a));return await e.bulkAdd(s),s},async upsert(n){const s=r(n);return await e.put(s),s},async patch(n,s){const a=Kn(t(),n);if(await e.update(a,s)===0)throw new Error(`setting patch: no setting ${n}`);const u=await e.get(a);if(!u)throw new Error(`setting patch: ${n} vanished after update`);return u},async remove(n){await e.delete(Kn(t(),n))},async bulkRemove(n){n.length!==0&&await e.bulkDelete(n.map(s=>Kn(t(),s)))},subscribe(n){const a=Co(()=>i().toArray()).subscribe({next:c=>n(c)});return()=>a.unsubscribe()}}}function Eo(e,t){for(const[r,i]of t)if(e[r]!==i)return!1;return!0}function Yu(e,t){return{workspaces:Tr(e.workspaces),tables:Tr(e.tables),settings:Gu(e.settings,t),plugins:Tr(e.plugins),viewTemplates:Tr(e.viewTemplates),viewInstances:Tr(e.viewInstances),rows:r=>Vu(e.rows,r)}}function Xu(e){const{base:t,providers:r,tableById:i,ctx:n}=e,s=new Map;return{...t,rows(a){const c=i(a),u=c?.source;if(u){const p=r.get(u.type);if(p){const w=JSON.stringify(u),b=s.get(a);if(b&&b.key===w)return b.coll;const $=p.create(c,n);return s.set(a,{key:w,coll:$}),$}}return s.delete(a),t.rows(a)}}}function Qu(){const e=new Map;return{on(t,r){let i=e.get(t);return i||(i=new Set,e.set(t,i)),i.add(r),()=>{i.delete(r)}},emit(t,r){const i=e.get(t);if(i)for(const n of i)try{n(r)}catch(s){console.error(`[event:${String(t)}] listener threw`,s)}}}}const en=Ve`
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
`;function tn(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const r=t.querySelector("form");r&&(e.preventDefault(),r.requestSubmit())}const qa=new WeakSet;function nn(e,t){if(qa.has(t))return;qa.add(t);let r=0,i=0,n=0,s=0,a=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",u=>{if(u.target.closest("button, input, textarea, select, a, label"))return;a=!0,r=u.clientX,i=u.clientY;const w=e.getBoundingClientRect();n=w.left,s=w.top,t.setPointerCapture(u.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",u=>{if(!a)return;const p=u.clientX-r,w=u.clientY-i,b=-e.offsetWidth+80,$=window.innerWidth-80,_=0,T=window.innerHeight-40,A=Math.max(b,Math.min($,n+p)),B=Math.max(_,Math.min(T,s+w));e.style.position="fixed",e.style.left=`${A}px`,e.style.top=`${B}px`,e.style.margin="0"});const c=u=>{if(a){a=!1;try{t.releasePointerCapture(u.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c)}var Ju=Object.defineProperty,Zu=Object.getOwnPropertyDescriptor,rc=(e,t,r,i)=>{for(var n=i>1?void 0:i?Zu(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Ju(t,r,n),n};let Qt=class extends qe{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitChoice=e=>{if(e.preventDefault(),this.current?.kind!=="choice")return;const t=this.current.options[0];t!==void 0&&this.closeAndResolve(t)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),Qt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Qt.instance===this&&(Qt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&nn(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:t,message:e,resolve:r}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",r="Input"){return this.enqueue(i=>{this.current={kind:"prompt",title:r,message:e,value:t,resolve:i}})}choice(e,t,r="Choose"){return this.enqueue(i=>{this.current={kind:"choice",title:r,message:e,options:t,resolve:i}})}enqueue(e){return new Promise(t=>{const r=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const r=this.queue.shift();r&&r()}))}render(){const e=this.current;return S`
      <dialog @cancel=${this.onCancel} @keydown=${tn}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):me}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return S`
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
        `;case"prompt":return S`
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
        `;case"choice":return S`
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
              ${e.message?S`<p class="message">${e.message}</p>`:me}
              <div class="choices">
                ${e.options.map((t,r)=>r===0?S`<button type="submit" class="choice primary" autofocus>${t}</button>`:S`<button
                        type="button"
                        class="choice"
                        @click=${()=>this.closeAndResolve(t)}
                      >
                        ${t}
                      </button>`)}
              </div>
            </div>
          </form>
        `}}};Qt.instance=null;Qt.styles=[en,Ve`
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
    `];rc([K()],Qt.prototype,"current",2);Qt=rc([it("host-dialogs")],Qt);const Vt=Ve`
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
`;var eh=Object.defineProperty,th=Object.getOwnPropertyDescriptor,ic=(e,t,r,i)=>{for(var n=i>1?void 0:i?th(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&eh(t,r,n),n};let kn=class extends qe{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),kn.instance=this}disconnectedCallback(){super.disconnectedCallback(),kn.instance===this&&(kn.instance=null)}show(e,t){const r={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,r];const i=t?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),i)}dismiss(e){const t=this.toasts.find(r=>r.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(r=>r.id!==e)}render(){return S`
      ${this.toasts.map(e=>S`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${rh(e.kind)}</span>
            <span class="body">
              ${e.title?S`<strong>${e.title}</strong>`:""}${nh(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};kn.instance=null;kn.styles=[Vt,Ve`
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
    `];ic([K()],kn.prototype,"toasts",2);kn=ic([it("toast-host")],kn);function nh(e){const t=/(https?:\/\/[^\s)]+)/g,r=[];let i=0,n;for(;(n=t.exec(e))!==null;)n.index>i&&r.push(e.slice(i,n.index)),r.push({url:n[0]}),i=n.index+n[0].length;return i<e.length&&r.push(e.slice(i)),r.length===0?e:r.map(s=>typeof s=="string"?s:S`<a href=${s.url} target="_blank" rel="noopener noreferrer">${s.url}</a>`)}function rh(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function ih(){return{headerButtons:[],footerButtons:[],tableButtons:[],importers:[],connectors:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map,settings:new Map,commands:[]}}function $n(e,t){return e.push(t),()=>{const r=e.indexOf(t);r>=0&&e.splice(r,1)}}function Hs(e,t,r){return e.set(t,r),()=>{e.get(t)===r&&e.delete(t)}}function sh(e){return{registerHeaderButton:t=>$n(e.headerButtons,t),registerFooterButton:t=>$n(e.footerButtons,t),registerTableButton:t=>$n(e.tableButtons,t),registerImporter:t=>$n(e.importers,t),registerConnector:t=>$n(e.connectors,t),registerExporter:t=>$n(e.exporters,t),registerUrlSource:t=>$n(e.urlSources,t),registerDropHandler:t=>$n(e.dropHandlers,t),registerCellRenderer:(t,r)=>Hs(e.cellRenderers,t,r),registerRowRenderer:(t,r)=>Hs(e.rowRenderers,t,r),registerTableRenderer:(t,r)=>Hs(e.tableRenderers,t,r),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},openSettings:()=>{document.dispatchEvent(new CustomEvent("easydb:open-settings"))},registerCommand:t=>$n(e.commands,t),openCommandPalette:()=>{document.dispatchEvent(new CustomEvent("easydb:open-command-palette"))},registerSettings:(t,r,i)=>(e.settings.set(t,{name:r,fields:i}),()=>{e.settings.get(t)?.name===r&&e.settings.delete(t)}),dialogs:oh}}const oh={async alert(e,t){const r=Qt.instance;if(r)return r.alert(e,t);window.alert(e)},async confirm(e,t){const r=Qt.instance;return r?r.confirm(e,t):window.confirm(e)},async prompt(e,t,r){const i=Qt.instance;return i?i.prompt(e,t,r):window.prompt(e,t)??null},async choice(e,t,r){const i=Qt.instance;if(i)return i.choice(e,t,r);const n=window.prompt(`${e}

Options: ${t.join(", ")}`);return n&&t.includes(n)?n:null},toast(e,t){const r=kn.instance;r?r.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}},So="/easydbaccess/settings.json",sc="/easydbaccess/secrets.txt";function qr(e){try{return globalThis.localStorage??null}catch{return null}}function Gi(e){const t=qr();if(!t)return{};const r=t.getItem(So);if(!r)return{};try{const i=JSON.parse(r);return i&&typeof i=="object"?i:{}}catch{return{}}}function _o(e,t){return Gi()[e]}function ah(e,t,r){const i=qr();if(!i)return;const n=Gi();n[e]=t,i.setItem(So,JSON.stringify(n))}function lh(e,t){const r=qr();if(!r)return;const i=Gi();e in i&&(delete i[e],r.setItem(So,JSON.stringify(i)))}function to(e,t){return e in Gi()}function Yi(e){return qr()?.getItem(sc)??""}function oc(e,t){qr()?.setItem(sc,e)}function Fr(e){const t={};for(const r of e.split(/\r?\n/)){const i=r.trim();if(!i||i.startsWith("#"))continue;const n=i.indexOf(":");if(n<0)continue;const s=i.slice(0,n).trim(),a=i.slice(n+1).trim();s&&(t[s]=a)}return t}function ac(e,t){return e.replace(/\$\{secret:([^}]+)\}/g,(r,i)=>{const n=t[i.trim()];return n===void 0?r:n})}function ch(e){const t=sh(e.registries),r=e.registries.rowSources,i=a=>(r.set(a.type,a),()=>{r.get(a.type)===a&&r.delete(a.type)}),n=uh(e.store,e.registries),s={open(a){return console.warn("[host] windows.open is stubbed until Phase 5",a.id),{id:a.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:s,registerRowSource:i,settings:n,backend:{fetch:async(a,c)=>{const u=await dh(e.store),p=c?.body instanceof ArrayBuffer;if(!u||p)return globalThis.fetch(a,c);const w={url:a};return c?.method&&(w.method=c.method),c?.headers&&(w.headers=c.headers),typeof c?.body=="string"&&(w.body=c.body),globalThis.fetch(`${u}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)})},async saveFile(a,c,u){const p=typeof c=="string"?new Blob([c],{type:u??"application/octet-stream"}):c,w=URL.createObjectURL(p),b=document.createElement("a");b.href=w,b.download=a,b.rel="noopener",document.body.appendChild(b),b.click(),b.remove(),setTimeout(()=>URL.revokeObjectURL(w),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function dh(e){const t="server-sync:url";let r=to(t)?_o(t):void 0;return r===void 0&&(r=(await e.settings.findOne(t))?.value),typeof r!="string"||r.length===0?null:ac(r,Fr(Yi())).replace(/\/+$/,"")}function uh(e,t){const r=(s,a)=>`${s}:${a}`,i=(s,a)=>t.settings.get(s)?.fields.find(c=>c.key===a),n=s=>typeof s=="string"?ac(s,Fr(Yi())):s;return{async get(s,a){const c=r(s,a);let u;if(to(c))u=_o(c);else{const p=await e.settings.findOne(c);u=p?p.value:i(s,a)?.default}return n(u)},async set(s,a,c,u){const p=r(s,a);(u??i(s,a)?.scope??"workspace")==="user"?(ah(p,c),await e.settings.remove(p).catch(()=>{})):(await e.settings.upsert({name:p,value:c}),lh(p))},async placement(s,a){const c=r(s,a);return to(c)?"user":await e.settings.findOne(c)?"workspace":null}}}function Wa(e,t){return e.has(t)?e.get(t)!=="0":!1}function hh(){if(typeof location>"u")return"off";const e=new URLSearchParams(location.search);return Wa(e,"safemode")?"all-optional":Wa(e,"safemode1")?"url-plugins":"off"}const Xt=hh();function To(e){let t;try{t=new URL(e)}catch{return e}const r=t.hostname.toLowerCase();if(r==="github.com"||r==="www.github.com"){const i=t.pathname.split("/").filter(Boolean);if(i.length>=5&&(i[2]==="blob"||i[2]==="raw")){const n=i[0],s=i[1];let a=i.slice(3);return a.length>=3&&a[0]==="refs"&&(a[1]==="heads"||a[1]==="tags")&&(a=a.slice(2)),`https://raw.githubusercontent.com/${[n,s,...a].join("/")}`}}return e}function lc(e){if(e.length>1024)return!1;const t=e.split(`
`);return t[0]?.startsWith("version https://git-lfs.github.com/spec/v1")===!0&&t.some(r=>r.startsWith("oid "))&&t.some(r=>r.startsWith("size "))}function cc(e){const t=To(e);let r;try{r=new URL(t)}catch{return null}if(r.hostname.toLowerCase()!=="raw.githubusercontent.com")return null;const i=r.pathname.replace(/^\/+/,"");return i.split("/").filter(Boolean).length<4?null:`https://media.githubusercontent.com/media/${i}`}async function dc(e,t){const r=Number(e.headers?.get?.("content-length")),i=e.body?.getReader?.();if(i&&Number.isFinite(r)&&r>0){const n=[];let s=0;for(;;){const{done:u,value:p}=await i.read();if(u)break;p&&(n.push(p),s+=p.length,t?.(Math.min(1,s/r)))}const a=new Uint8Array(s);let c=0;for(const u of n)a.set(u,c),c+=u.length;return new TextDecoder().decode(a)}return await e.text()}const fh=50*1024*1024;function Ka(e){try{return new URL(e).host}catch{return e}}function dr(e){try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();return r&&r.length>0?r:"sample.db.json"}catch{return"sample.db.json"}}async function ph(e){try{return(await e.text()).replace(/\s+/g," ").trim().slice(0,300)}catch{return""}}function Va(e){const t=e/1048576;return`${Number.isInteger(t)?t:t.toFixed(1)} MB`}async function mh(e,t,r={}){const i=To(t),n=r.slowMs??2e3;let s=setTimeout(()=>{s=void 0,r.onSlow?.()},n);const a=()=>{s!==void 0&&(clearTimeout(s),s=void 0)},c=r.maxBytes===null?null:r.maxBytes??fh,u=async p=>{let w;try{w=await e.backend.fetch(p)}catch($){throw new Error(`Could not reach ${Ka(p)} — no response. The server may be down, blocking cross-origin (CORS) requests, or the transfer may have failed (e.g. a very large file). [${$.message}]`)}if(!w.ok){const $=await ph(w);throw new Error(`HTTP ${w.status} ${w.statusText||""}`.trim()+($?` — ${$}`:""))}const b=Number(w.headers.get("content-length"));if(c!==null&&Number.isFinite(b)&&b>c)throw w.body?.cancel().catch(()=>{}),new Error(`Response is ${Va(b)}, over the ${Va(c)} browser import limit. Set a row limit, import it as a Reference instead of a Copy, take a smaller extract, or connect to a server/Datasette for large datasets.`);try{return await dc(w,r.onProgress)}catch($){throw new Error(`Failed reading the response body from ${Ka(p)}: ${$.message}`)}};try{const p=await u(i);if(lc(p)){const w=cc(i);if(w)return await u(w)}return p}finally{a()}}async function Xi(e,t,r,i={}){const{TopProgress:n}=await Zt(async()=>{const{TopProgress:a}=await import("./top-progress-D6ZAyEz8.js");return{TopProgress:a}},[]),s={handle:null};try{return await mh(e,t,{onSlow:()=>{s.handle=n.begin(r)},onProgress:a=>s.handle?.fraction(a),...i.maxBytes!==void 0?{maxBytes:i.maxBytes}:{}})}finally{s.handle?.done()}}function ot(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function At(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function no(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}const gh={id:"csv-import",name:"CSV Import",type:"importer",version:"0.1.0",description:"Drag-and-drop CSV or TSV files to create typed tables.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-import.ts"};function bh(e){e.ui.registerImporter(wh),Zt(()=>import("./csv-import-options-DhUqMIl2.js"),[]),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const i=Rh(t).filter(Ph);if(i.length===0)return!1;t.preventDefault();for(const n of i)await vh(e,n);return!0})}function ro(e){return e.kind==="file"&&e.file?e.file.name:e.kind==="url"&&e.url?dr(e.url):"pasted"}function yh(e){return Ro(ro(e))||"imported"}const wh={id:"csv",label:"CSV / TSV",icon:"table_view",order:10,accept:[".csv",".tsv",".tab","text/csv","text/tab-separated-values"],panel:"csv-import-options",samples:[{label:"Air quality — 2016 readings (CSV)",url:"https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv"}],supports:{url:!0,file:!0,text:!0,reference:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??e.text??"";return/\.(csv|tsv|tab)$/i.test(t)?.95:e.file?.type==="text/csv"?.9:e.kind==="text"?.2:0},async list(e,t){return[{name:yh(t),rowCount:null,handle:t}]},async*read(e,t){const r=t.handle;let i;r.kind==="file"&&r.file?i=e.maxRows!=null?await fc(r.file,e.maxRows):await r.file.text():r.kind==="url"&&r.url?i=await e.fetchText(r.url,`Reading ${ro(r)}…`):i=r.text??"";const s=(typeof e.panel.separator=="string"?e.panel.separator:void 0)??Po(ro(r)),a={...e.maxRows!=null?{maxRows:e.maxRows}:{},...s?{separator:s}:{}},c=e.targetColumns;if(c&&c.length>0){yield{rows:Ao(i,a).rows.map(b=>{const $={};for(let _=0;_<c.length;_++){const T=c[_];$[T.field]=Io(b[_]??"",T.type)}return $})};return}const u=ur(i,a);yield{columns:u.columns,rows:u.rows}},reference(e,t){const r=t.handle;if(r.kind!=="url"||!r.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");return{type:"url",config:{url:r.url,format:"csv"}}}};async function vh(e,t){await uc(e,await t.text(),t.name)}async function uc(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("csv-import: no active workspace");const s=Ro(r||"imported")||"imported",a=i.separator??Po(r),c=(await e.store.tables.find()).find($=>$.workspaceId===n&&$.name===s);let u,p;if(c){const $=await e.ui.dialogs.choice(`A table named "${s}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!$)return;$==="Append rows"?(p="append",u=c.id):$==="Overwrite rows"?(p="overwrite",u=c.id):(p="new",u=ot())}else p="new",u=ot();e.events.emit("import:before",{source:"csv",tableId:u});let w;if(p==="new"){const $=ur(t,{maxRows:i.maxRows,separator:a});let _=$.columns,T=$.rows;if(i.editColumns){const B=await i.editColumns(_);if(B===null)return;T=Dh(T,_,B),_=B}i.maxRows!=null&&(T=T.slice(0,i.maxRows));const A=c?`${s} (${Date.now().toString(36)})`:s;await e.store.tables.insert({id:u,workspaceId:n,name:A,code:no(A),columns:_,view:"table",...i.origin?{origin:i.origin}:{},updatedAt:Date.now()}),w=T.map(B=>({id:ot(),tableId:u,data:B,updatedAt:Date.now()}))}else{const $=c.columns,_=Ao(t,{maxRows:i.maxRows,separator:a});if(w=(i.maxRows!=null?_.rows.slice(0,i.maxRows):_.rows).map(A=>{const B={};for(let U=0;U<$.length;U++){const V=$[U];B[V.field]=Io(A[U]??"",V.type)}return{id:ot(),tableId:u,data:B,updatedAt:Date.now()}}),p==="overwrite"){const A=e.store.rows(u),B=await A.find();await A.bulkRemove(B.map(U=>U.id))}}await e.store.rows(u).bulkInsert(w),e.events.emit("import:after",{source:"csv",tableId:u,rowCount:w.length})}function Ao(e,t={}){const r=e.replace(/﻿/,""),i=t.separator??pc(r),n=mc(r,i,hc(t.maxRows));if(n.length===0)return{header:[],rows:[]};const s=n[0],a=n.slice(1).filter(c=>!(c.length===1&&c[0]===""));return{header:s,rows:a}}function hc(e){return e!=null?e+1:void 0}async function fc(e,t){const i=new TextDecoder,n=t+1;let s="",a=0,c=!1,u=0;for(;u<e.size;){const p=new Uint8Array(await e.slice(u,u+1048576).arrayBuffer());u+=1048576;const w=i.decode(p,{stream:!0});for(let b=0;b<w.length;b++){const $=w[b];if($==='"')c=!c;else if($===`
`&&!c&&(a+=1,a>=n))return s+w.slice(0,b+1)}s+=w}return s}function ur(e,t={}){const r=e.replace(/﻿/,""),i=t.separator??pc(r),n=mc(r,i,hc(t.maxRows));if(n.length===0)return{columns:[],rows:[]};const s=n[0],a=n.slice(1).filter(_=>!(_.length===1&&_[0]==="")),c=s.map((_,T)=>kh(_,T)),u=yc(c.map(_=>_.field)),p=a.map(_=>{const T={};for(let A=0;A<u.length;A++)T[u[A]]=_[A]??"";return T}),w=c.map((_,T)=>_.type?_.type:Ch(p.map(A=>A[u[T]]??"").filter(A=>A.length>0))),b=c.map((_,T)=>{const A=w[T]??"string",B={field:u[T],label:_.label,type:A},U=$h(A),V=_.renderer??U;return V&&(B.renderer=V),_.default!==void 0&&(B.default=_.default),_.max!=null&&(B.max=_.max),_.unique&&(B.unique=!0),_.notnull&&(B.notnull=!0),_.hidden&&(B.hidden=!0),B}),$=p.map(_=>{const T={};for(let A=0;A<u.length;A++){const B=u[A],U=w[A]??"string";T[B]=Io(_[B]??"",U)}return T});return{columns:b,rows:$}}const xh=new Set(["string","number","boolean","date","datetime"]),Ga={color:"color",image:"image"};function $h(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function kh(e,t){const r=e.trim();if(!r.includes(":"))return{field:no(r||`col_${t+1}`),label:r||`Column ${t+1}`};const i=r.split(":"),n=no(i[0]||`col_${t+1}`),s=(i[1]??i[0]??"").trim()||n,a={field:n,label:s},c=(i[2]??"").trim();c&&(xh.has(c)?a.type=c:Ga[c]&&(a.type="string",a.renderer=Ga[c]));const u=(i[3]??"").trim();u&&(a.default=u);const p=(i[4]??"").trim();if(p){const b=Number(p);Number.isFinite(b)&&b>0&&(a.max=b)}const w=(i[5]??"").toLowerCase();return w.includes("u")&&(a.unique=!0),w.includes("n")&&(a.notnull=!0),w.includes("h")&&(a.hidden=!0),a}function pc(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),r={",":0,";":0,"	":0};for(const s of t)s in r&&(r[s]+=1);let i=",",n=-1;for(const s of[",",";","	"])(r[s]??0)>n&&(i=s,n=r[s]??0);return i}function mc(e,t,r){const i=[];let n=[],s="",a=!1;for(let c=0;c<e.length;c++){const u=e[c];if(a)u==='"'?e[c+1]==='"'?(s+='"',c++):a=!1:s+=u;else if(u==='"')a=!0;else if(u===t)n.push(s),s="";else if(u===`
`||u==="\r"){if(u==="\r"&&e[c+1]===`
`&&c++,n.push(s),i.push(n),n=[],s="",r!=null&&i.length>=r)return i}else s+=u}return(s.length>0||n.length>0)&&(n.push(s),i.push(n)),i}function Ch(e){return e.length===0?"string":e.every(Sh)?"boolean":e.every(_h)?"number":e.every(Ah)?"datetime":e.every(Th)?"date":"string"}const Eh=/^(true|false|yes|no|0|1)$/i;function Sh(e){return Eh.test(e.trim())}function _h(e){const t=e.trim();if(t==="")return!1;const r=Number(t);return Number.isFinite(r)}function Th(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function Ah(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function Io(e,t){const r=e.trim();switch(t){case"number":{if(r==="")return null;const i=Number(r);return Number.isFinite(i)?i:r}case"boolean":return r===""?null:/^(true|yes|1)$/i.test(r);case"date":return gc(r);case"datetime":return Ih(r);default:return e}}function gc(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){const i=parseInt(t[1],10),n=parseInt(t[2],10),s=t[3];let a=parseInt(s,10);s.length===2&&(a+=2e3);let c,u;return i>12?(c=i,u=n):n>12?(u=i,c=n):(c=i,u=n),`${a.toString().padStart(4,"0")}-${u.toString().padStart(2,"0")}-${c.toString().padStart(2,"0")}`}const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toISOString().slice(0,10)}function Ih(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),r=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(r)return`${r[1]}T${r[2].padStart(5,"0")}`;const i=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(i)return`${gc(`${i[1]}/${i[2]}/${i[3]}`)}T${i[4].padStart(5,"0")}`;const n=new Date(e);if(!Number.isNaN(n.getTime())){const s=n.toISOString();return`${s.slice(0,10)}T${s.slice(11,16)}`}return e}function Rh(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}const bc=/\.(csv|tsv|tab)$/i;function Ro(e){return e.replace(bc,"")}function Po(e){return/\.(tsv|tab)$/i.test(e)?"	":void 0}function Ph(e){return!!(bc.test(e.name)||e.type==="text/csv"||e.type==="application/csv"||e.type==="text/tab-separated-values")}function yc(e){const t=new Map,r=new Set,i=[];for(const n of e){let s=n,a=t.get(n)??0;for(;r.has(s);)a+=1,s=`${n}_${a+1}`;t.set(n,a),r.add(s),i.push(s)}return i}function Dh(e,t,r){return e.map(i=>{const n={};for(let s=0;s<t.length;s++)n[r[s].field]=i[t[s].field];return n})}const Oh=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:yc,importCsvText:uc,init:bh,meta:gh,parseCsv:ur,parseCsvRaw:Ao,readCsvHead:fc,separatorForName:Po,stripDelimitedExt:Ro},Symbol.toStringTag,{value:"Module"})),jh={id:"csv-export",name:"CSV Export",type:"exporter",version:"0.1.0",description:"CSV serializer for the per-table export menu (see dump-export.ts) and the importer/exporter registry.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-export.ts"},zh={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return Do(e,t)}};function Lh(e){e.ui.registerExporter(zh)}function Do(e,t){const r=e.columns.map(s=>s.field),i=e.columns.map(s=>Ya(s.label??s.field)),n=t.map(s=>r.map(a=>Ya(Fh(s.data[a]))).join(","));return[i.join(","),...n].join(`\r
`)}function Fh(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function Ya(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const Mh=Object.freeze(Object.defineProperty({__proto__:null,init:Lh,meta:jh,serializeCsv:Do},Symbol.toStringTag,{value:"Module"}));var Bh=Object.defineProperty,Nh=Object.getOwnPropertyDescriptor,hr=(e,t,r,i)=>{for(var n=i>1?void 0:i?Nh(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Bh(t,r,n),n};function zi(e,t={}){return(Bt.instance??Uh()).open(e,t)}function Uh(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function Hh(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let Bt=class extends qe{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((r,i)=>r?i:-1).filter(r=>r>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),Bt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Bt.instance===this&&(Bt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&nn(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(r=>!r.hidden),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(r=>{this.resolveFn=r,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return S`
      <dialog @cancel=${this.onCancel} @keydown=${tn}>
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
            ${this.message?S`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            <ul class="tables">
              ${this.items.map((t,r)=>S`
                  <li>
                    <input
                      type="checkbox"
                      id=${`tsel-${r}`}
                      .checked=${this.selected[r]??!1}
                      @change=${()=>this.toggle(r)}
                    />
                    <label for=${`tsel-${r}`}>
                      <span class="name">${t.name}</span>
                      ${t.hidden?S`<span class="tag-hidden">hidden</span>`:""}
                      <span class="size">${Hh(t.size)}</span>
                      ${t.detail?S`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};Bt.instance=null;Bt.styles=[en,Ve`
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
    `];hr([K()],Bt.prototype,"items",2);hr([K()],Bt.prototype,"selected",2);hr([K()],Bt.prototype,"heading",2);hr([K()],Bt.prototype,"message",2);hr([K()],Bt.prototype,"confirmLabel",2);Bt=hr([it("table-select-dialog")],Bt);function Oo(e,t){return e.every((r,i)=>r.field===t[i]?.field)?null:r=>{const i={};for(let n=0;n<e.length;n++)i[t[n].field]=r[e[n].field];return i}}function Xa(e,t){if(t.length===0)return null;const r=new Set(t.map(n=>n.from)),i={};for(const n of Object.keys(e))r.has(n)||(i[n]=e[n]);for(const{from:n,to:s}of t)Object.prototype.hasOwnProperty.call(e,n)&&(i[s]=e[n]);return i}function Qi(e,t,r=[]){const i=new Set(e.map(c=>c.field)),n=new Set(r),s=[...e],a=[];for(const c of t)i.has(c.field)||n.has(c.field)||(s.push(c),a.push(c.field),i.add(c.field));return{columns:s,newFields:a}}function wc(e,t){const r=new Set([...e].map(n=>n.toLowerCase())),i=t.trim()||"imported";if(!r.has(i.toLowerCase()))return i;for(let n=2;;n++){const s=`${i}-${n}`;if(!r.has(s.toLowerCase()))return s}}async function vc(e,t){return(await e.store.tables.find()).filter(r=>r.workspaceId===t).map(r=>r.name)}async function qh(e,t,r,i){const{workspaceId:n,importerId:s,target:a,maxRows:c}=i;let u,p,w,b=!1,$=0,_,T=null;const A=U=>e.store.rows(U),B=async U=>{if(b)return!0;if(a.kind==="new"){let V=U.columns??[];if(i.editColumns){const le=await i.editColumns(V);if(le===null)return!1;T=Oo(V,le),V=le}u=ot(),p=wc(await vc(e,n),t);const X={id:u,workspaceId:n,name:p,code:At(p),columns:V,view:"table",...i.origin?{origin:i.origin}:{},updatedAt:Date.now()};await e.store.tables.insert(X),w=!0}else{const V=await e.store.tables.findOne(a.tableId);if(!V)throw new Error("The table to import into no longer exists.");if(u=V.id,p=V.name,w=!1,a.kind==="overwrite"){const X=await A(u).find();await A(u).bulkRemove(X.map(le=>le.id))}if(U.columns?.length){const X=Qi(V.columns,U.columns,V.deletedColumns??[]);X.newFields.length>0&&await e.store.tables.patch(u,{columns:X.columns,updatedAt:Date.now()})}}return e.events.emit("import:before",{source:s,tableId:u}),b=!0,!0};for await(const U of r){if(c!=null&&$>=c)break;if(!await B(U))return null;U.totalCount!=null&&(_=U.totalCount);let V=U.rows;if(c!=null&&$+V.length>c&&(V=V.slice(0,c-$)),V.length===0)continue;T&&(V=V.map(T));const X=Date.now(),le=V.map(re=>({id:ot(),tableId:u,data:re,updatedAt:X}));await A(u).bulkInsert(le),$+=le.length,i.onProgress?.($,_)}return!b&&!await B({})?null:(e.events.emit("import:after",{source:s,tableId:u,rowCount:$}),{tableId:u,tableName:p,rowCount:$,created:w})}function Qa(e,t,r={}){const i=t.mode==="reference"||t.maxRows!=null;return{api:e,fetchText:(n,s)=>Xi(e,n,s??"Reading…",i?{maxBytes:null}:{}),panel:t.panel??{},...t.cursor!==void 0?{cursor:t.cursor}:{},...t.maxRows!==void 0?{maxRows:t.maxRows}:{},...r}}async function Wh(e,t){if(t.length<=1)return t;const r=await zi(t.map(i=>({name:i.name,size:i.rowCount,...i.detail!==void 0?{detail:i.detail}:{},...i.hidden!==void 0?{hidden:i.hidden}:{}})),{title:`Import from ${e.label}`,message:`This source offers ${t.length} tables. Choose which to import.`,confirmLabel:"Import"});return r?r.map(i=>t[i]):null}async function Kh(e,t,r,i,n){if(!t.reference)throw new Error(`${t.label} cannot be referenced — import a copy instead.`);const s=t.reference(r,i);let a=[];for await(const p of t.read(r,i)){a=p.columns??[];break}if(a.length===0)throw new Error("No columns found in the referenced data.");const c=wc(await vc(e,n),i.name),u=ot();return await e.store.tables.insert({id:u,workspaceId:n,name:c,code:At(c),columns:a,view:"table",source:s,updatedAt:Date.now()}),{tableId:u,tableName:c,rowCount:0,created:!0}}async function xc(e,t,r,i){const n=e.workspaceId();if(!n)throw new Error("No active workspace.");const s=Qa(e,i),a=await t.list(s,r);if(a.length===0)throw new Error("No tables found at that source.");const c=await Wh(t,a);if(c===null)return{landed:[],failed:[],cancelled:!0};const u=[],p=[];for(const w of c)try{if(i.mode==="reference"){u.push(await Kh(e,t,s,w,n));continue}const b=i.target;let $;b.kind!=="new"&&($=(await e.store.tables.findOne(b.tableId))?.columns);const _=Qa(e,i,{...$?{targetColumns:$}:{}}),T=t.read(_,w),A=i.origin??(r.kind==="url"&&r.url?{type:t.id,url:r.url}:void 0),B=await qh(e,w.name,T,{workspaceId:n,importerId:t.id,target:b,...A?{origin:A}:{},...i.editColumns?{editColumns:i.editColumns}:{},...i.maxRows!==void 0?{maxRows:i.maxRows}:{}});if(B===null)return{landed:u,failed:p,cancelled:!0};u.push(B)}catch(b){p.push({name:w.name,error:b?.message??String(b)})}return{landed:u,failed:p,cancelled:!1}}const Vh={id:"json-import",name:"JSON Import",type:"importer",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"/><path d="M16 3a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/json-import.ts"};function Gh(e){e.ui.registerImporter($c),e.ui.registerDropHandler(async t=>{const i=sf(t).filter(of);if(i.length===0)return!1;t.preventDefault();for(const n of i)await Xh(e,n);return!0})}function jo(e){return mt(e)?io(e)?!0:Array.isArray(e.tables):!1}function Yh(e){return e.kind==="file"&&e.file?qs(e.file.name):e.kind==="url"&&e.url?qs(dr(e.url)):qs(e.name??"imported")}const $c={id:"json",label:"JSON (array of objects or a dump)",icon:"data_object",order:20,accept:[".json",".db.json","application/json"],samples:[{label:"Northwind — sample database (JSON dump)",url:"https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json"}],supports:{url:!0,file:!0,text:!0,reference:!0,multiTable:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??"";if(/\.db\.json$/i.test(t))return 1;if(/\.json$/i.test(t))return .95;if(e.file?.type==="application/json")return .9;const r=(e.text??"").trimStart();return r.startsWith("{")||r.startsWith("[")?.3:0},async list(e,t){let r;t.kind==="file"&&t.file?r=await t.file.text():t.kind==="url"&&t.url?r=await e.fetchText(t.url,`Reading ${dr(t.url)}…`):r=t.text??"";const i=Yh(t);let n;try{n=JSON.parse(r)}catch(a){throw new Error(`Invalid JSON in ${i}: ${a.message}`)}const s=Ji(n,i);return s.map(a=>({name:a.name,rowCount:a.rows.length,handle:{table:a,input:t,single:s.length===1}}))},async*read(e,t){const{table:r}=t.handle;yield{columns:r.columns,rows:r.rows}},reference(e,t){const{input:r,single:i}=t.handle;if(r.kind!=="url"||!r.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");if(!i)throw new Error("That URL holds several tables, so a reference would be ambiguous. Import a copy instead.");return{type:"url",config:{url:r.url,format:"json"}}}};function qs(e){return e.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported"}async function Xh(e,t){const r=await t.text();let i;try{i=JSON.parse(r)}catch(a){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${t.name}: ${a.message}`)});return}if(jo(i)){await zo(e,r,t.name);return}const n=await xc(e,$c,{kind:"text",text:r,name:t.name},{mode:"copy",target:{kind:"new"}}),s=n.landed.reduce((a,c)=>a+c.rowCount,0);n.landed.length>0&&e.ui.dialogs.toast(`Imported ${t.name} (${s.toLocaleString()} rows).`,{kind:"success",title:"Import"})}async function zo(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("json-import: no active workspace");let s;try{s=JSON.parse(t)}catch(B){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${r}: ${B.message}`)});return}const a=r.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",c=Ji(s,a);if(c.length===0)return;let u=c;if(c.length>1){const B=await zi(c.map(U=>({name:U.name,size:U.rows.length})),{title:"Import tables",message:`"${r}" contains ${c.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!B)return;u=B.map(U=>c[U])}const p=(await e.store.tables.find()).filter(B=>B.workspaceId===n),w=new Set(u.map(B=>B.name)),b=p.filter(B=>w.has(B.name));let $;if(b.length===0&&u.length===1)$="append-new";else{const B=b.length>0?[`Overwrite matching (${b.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],U=await e.ui.dialogs.choice(`Importing ${u.length} table${u.length===1?"":"s"} from "${r}".${b.length>0?`

${b.length} table${b.length===1?"":"s"} share a name with existing data.`:""}`,B,"JSON import");if(!U)return;U.startsWith("Overwrite matching")?$="overwrite-matching":U==="Replace entire workspace"?$="replace-workspace":$="append-new"}const _=2e3,T=u.reduce((B,U)=>B+(U.source?0:Math.min(U.rows.length,i.maxRows??1/0)),0);let A=null;if(T>=_){const{TopProgress:B}=await Zt(async()=>{const{TopProgress:U}=await import("./top-progress-D6ZAyEz8.js");return{TopProgress:U}},[]);A=B.begin(`Importing ${r}…`)}try{if($==="replace-workspace")for(const X of p){const le=e.store.rows(X.id),re=await le.find();await le.bulkRemove(re.map(ee=>ee.id)),await e.store.tables.remove(X.id)}const B=new Map(p.map(X=>[X.name,X])),U=new Map;let V=0;for(const X of u){const le=X.source,re=X.origin??(!le&&i.originUrl?{type:"json",url:i.originUrl}:void 0);let ee;const Y=$==="overwrite-matching"?B.get(X.name):void 0;let te=X.columns,ye=X.rows;if(i.editColumns&&!Y&&!le){const m=await i.editColumns(te,X.name);if(m===null)continue;ye=rf(ye,te,m),te=m}if(Y){if(ee=Y.id,!Y.source){const m=e.store.rows(ee),x=await m.find();await m.bulkRemove(x.map(P=>P.id))}await e.store.tables.patch(ee,{columns:te,...X.title?{title:X.title}:{},...X.windowGeometry?{windowGeometry:X.windowGeometry}:{},...X.sortColumn?{sortColumn:X.sortColumn,sortAsc:X.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},...X.filters?{filters:X.filters}:{},...X.labelColumn?{labelColumn:X.labelColumn}:{},...X.info?{info:X.info}:{},...X.deletedColumns?{deletedColumns:X.deletedColumns}:{},source:le??void 0,origin:re??void 0,updatedAt:Date.now()})}else ee=ot(),e.events.emit("import:before",{source:"json",tableId:ee}),await e.store.tables.insert({id:ee,workspaceId:n,name:X.name,code:At(X.name),columns:te,view:"table",...X.title?{title:X.title}:{},...X.windowGeometry?{windowGeometry:X.windowGeometry}:{},...X.sortColumn?{sortColumn:X.sortColumn,sortAsc:X.sortAsc??!0}:{},...X.filters?{filters:X.filters}:{},...X.labelColumn?{labelColumn:X.labelColumn}:{},...X.info?{info:X.info}:{},...X.deletedColumns?{deletedColumns:X.deletedColumns}:{},...le?{source:le}:{},...re?{origin:re}:{},updatedAt:Date.now()});U.set(X.name,ee);let xe=0;if(!le){const m=e.store.rows(ee),P=(i.maxRows!=null?ye.slice(0,i.maxRows):ye).map(y=>({id:ot(),tableId:ee,data:y,updatedAt:Date.now()}));await m.bulkInsert(P),xe=P.length,V+=xe,A?.fraction(T>0?V/T:1)}e.events.emit("import:after",{source:"json",tableId:ee,rowCount:xe})}await Qh(e,s,n,U,$==="replace-workspace")}finally{A?.done()}document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function Qh(e,t,r,i,n){if(!mt(t))return;const s=t,a=Array.isArray(s.viewTemplates)?s.viewTemplates:[],c=Array.isArray(s.viewInstances)?s.viewInstances:[];if(!(a.length===0&&c.length===0)){if(n){const u=(await e.store.viewInstances.find()).filter(p=>p.workspaceId===r);await e.store.viewInstances.bulkRemove(u.map(p=>p.id))}for(const u of a)!mt(u)||typeof u.id!="string"||await e.store.viewTemplates.upsert({...u,workspaceId:r});for(const u of c){if(!mt(u)||typeof u.id!="string")continue;const p=(u.tableName?i.get(u.tableName):void 0)??u.tableId;p&&await e.store.viewInstances.upsert({...u,workspaceId:r,tableId:p})}}}function Ji(e,t){if(mt(e)&&io(e))return Ja(e);if(mt(e)&&Array.isArray(e.tables)){const r=e,i=[];for(const n of r.tables){if(Zh(n)){const s=n,a=mt(s.windowGeometry)?s.windowGeometry:void 0,c=typeof s.sortColumn=="string"?s.sortColumn:void 0,u=typeof s.sortAsc=="boolean"?s.sortAsc:void 0,p=typeof s.title=="string"?s.title:void 0,w=mt(s.filters)?s.filters:void 0,b=typeof s.labelColumn=="string"?s.labelColumn:void 0,$=mt(s.info)?s.info:void 0,_=Array.isArray(s.deletedColumns)?s.deletedColumns.filter(B=>typeof B=="string"):void 0,T=mt(s.source)&&typeof s.source.type=="string"?s.source:void 0,A=mt(s.origin)&&typeof s.origin.type=="string"&&typeof s.origin.url=="string"?s.origin:void 0;i.push({name:String(n.name),columns:n.columns.map(ef),rows:Array.isArray(n.rows)?n.rows.filter(mt):[],...p?{title:p}:{},...a?{windowGeometry:a}:{},...c?{sortColumn:c,sortAsc:u??!0}:{},...w?{filters:w}:{},...b?{labelColumn:b}:{},...$?{info:$}:{},..._?{deletedColumns:_}:{},...T?{source:T}:{},...A?{origin:A}:{}});continue}mt(n)&&io(n)&&i.push(...Ja(n))}return i}if(Array.isArray(e)){const r=e.filter(mt);return r.length===0?[]:[{name:t,...Za(r)}]}return mt(e)?[{name:t,...Za([e])}]:[]}function io(e){for(const[t,r]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!mt(r))continue;const i=r;if(Array.isArray(i.dataArray)&&Array.isArray(i.columns))return!0}return!1}function Ja(e){const t=[];for(const[r,i]of Object.entries(e)){if(!/\.table\.json$/.test(r)||!mt(i))continue;const n=i;if(!Array.isArray(n.dataArray)||!Array.isArray(n.columns))continue;const s=r.replace(/\.table\.json$/,""),a=n.columns.map(w=>Jh(w)),c=a.map(w=>w.field),u=n.dataArray.filter(w=>Array.isArray(w)).map(w=>{const b={};for(let $=0;$<c.length;$++)b[c[$]]=w[$];return b}),p={name:s,columns:a,rows:u};if(n.elementRect&&typeof n.elementRect.x=="number"&&typeof n.elementRect.y=="number"){const w=n.elementRect;p.windowGeometry={x:w.x,y:w.y,w:w.width??600,h:w.height??400,z:w.zIndex??100,minimized:!!w.minimized,maximized:!!w.maximized}}typeof n.sortColumn=="number"&&n.sortColumn>=0&&n.sortColumn<c.length&&(p.sortColumn=c[n.sortColumn],p.sortAsc=(n.sortDirection??"asc")!=="desc"),t.push(p)}return t}function Jh(e){const t=String(e.field??"col"),r=String(e.name??t),i=typeof e.type=="string"?e.type:"string",n={field:t,label:r,type:i};return e.isUnique&&(n.unique=!0),e.isNotNull&&(n.notnull=!0),n}function Zh(e){return mt(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function ef(e){if(!mt(e))return{field:"col",label:"Col",type:"string"};const t=e,r=String(t.field??"col");let i=typeof t.type=="string"?t.type:"string",n=typeof t.renderer=="string"?t.renderer:void 0;(i==="color"||i==="image")&&(n=n??i,i="string");const s={field:r,label:String(t.label??r),type:i};return n&&(s.renderer=n),typeof t.script=="string"&&(s.script=t.script),s}function Za(e){const t=new Set;for(const n of e)for(const s of Object.keys(n))t.add(s);return{columns:Array.from(t).map(n=>({field:n,label:n,type:tf(e.map(s=>s[n]))})),rows:e}}function tf(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&nf(r))?"date":"string"}function nf(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}([T ]\d{1,2}:\d{2}(:\d{2})?)?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}([T ]\d{1,2}:\d{2})?$/.test(t))}function rf(e,t,r){const i=Oo(t,r);return i?e.map(i):e}function mt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function sf(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function of(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}const af=Object.freeze(Object.defineProperty({__proto__:null,init:Gh,isWorkspaceDump:jo,meta:Vh,parsedToTables:Ji,restoreWorkspaceDump:zo},Symbol.toStringTag,{value:"Module"}));var lf=Object.defineProperty,cf=Object.getOwnPropertyDescriptor,Lo=(e,t,r,i)=>{for(var n=i>1?void 0:i?cf(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&lf(t,r,n),n};let yi=null;function df(){return yi||(yi=document.createElement("anchored-menu"),document.body.appendChild(yi)),yi}let Xn=class extends qe{constructor(){super(...arguments),this.items=[],this.shown=!1,this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.finish(null)},this.onKey=e=>{e.key==="Escape"&&(e.preventDefault(),this.finish(null))}}static open(e,t){return df().openMenu(e,t)}connectedCallback(){super.connectedCallback(),this.setAttribute("hidden","")}openMenu(e,t){return this.items=t,this.style.left=`${Math.round(e.left)}px`,this.style.top=`${Math.round(e.bottom+4)}px`,this.removeAttribute("hidden"),this.shown=!0,this.updateComplete.then(()=>{const r=this.shadowRoot?.querySelector(".menu");if(!r)return;const i=r.getBoundingClientRect();i.bottom>window.innerHeight&&(this.style.top=`${Math.round(e.top-i.height-4)}px`)}),new Promise(r=>{this.resolveFn=r,setTimeout(()=>{document.addEventListener("mousedown",this.onOutside,!0),document.addEventListener("keydown",this.onKey,!0)},0)})}finish(e){this.setAttribute("hidden",""),this.shown=!1,document.removeEventListener("mousedown",this.onOutside,!0),document.removeEventListener("keydown",this.onKey,!0);const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}render(){return this.shown?S`
      <div class="menu" role="menu">
        ${this.items.map(e=>S`
            <button
              role="menuitem"
              class=${e.danger?"danger":""}
              @click=${()=>this.finish(e.id)}
            >
              ${e.icon?S`<span class="mi">${e.icon}</span>`:""}
              <span>${e.label}</span>
            </button>
          `)}
      </div>
    `:S``}};Xn.styles=[Vt,Ve`
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
    `];Lo([K()],Xn.prototype,"items",2);Lo([K()],Xn.prototype,"shown",2);Xn=Lo([it("anchored-menu")],Xn);const Mr=Object.freeze(Object.defineProperty({__proto__:null,get AnchoredMenu(){return Xn}},Symbol.toStringTag,{value:"Module"})),so='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',uf={id:"connect-menu",name:"Connect",type:"ui",version:"0.1.0",description:"Header Connect button listing every registered live-backend connector. Chrome only — it knows no backend.",author:"Marc Cawood",icon:so,repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/connect-menu.ts"};function hf(e){e.ui.registerHeaderButton({id:"connect-menu:open",label:"Connect",icon:so,tooltip:"Connect a live table on a remote backend (rows are never stored locally)",onClick:(t,r)=>el(t,r?.anchor)}),e.ui.registerCommand({id:"connect-menu:open",title:"Connect a live table…",group:"Data",icon:so,keywords:["datasette","live","remote","backend"],run:t=>el(t)})}async function ff(){const{registries:e}=await pe();return[...e.connectors].sort((t,r)=>(t.order??Number.MAX_SAFE_INTEGER)-(r.order??Number.MAX_SAFE_INTEGER))}async function el(e,t){const r=await ff();if(r.length===0){await e.ui.dialogs.alert("No backends are installed to connect to. Install a connector plugin from the Plugin Manager first.","Connect");return}let i=r[0];if(r.length>1){const n=t?.getBoundingClientRect(),s=n?await Xn.open(n,r.map(a=>({id:a.id,label:a.label,icon:a.icon}))):await e.ui.dialogs.choice("Which backend do you want to connect to?",r.map(a=>a.label),"Connect");if(!s)return;i=n?r.find(a=>a.id===s):r.find(a=>a.label===s)}if(i)try{await i.connect(e)}catch(n){await e.ui.dialogs.alert(n?.message??String(n),`Connect ${i.label} failed`)}}const pf=Object.freeze(Object.defineProperty({__proto__:null,init:hf,meta:uf},Symbol.toStringTag,{value:"Module"}));function tl(e,t){return JSON.stringify(t.map(r=>e[r]))}function mf(e,t){return t.every(r=>e[r]!==null&&e[r]!==void 0)}function kc(e){const{oldRows:t,freshRows:r,pks:i,userAddedFields:n,deletedRemoteFields:s=[]}=e,a=new Set(s),c=b=>{const $={...b};for(const _ of a)delete $[_];return $};if(!(i.length>0&&r.every(b=>mf(b,i))))return{data:r.map(c),merged:!1};const p=new Map;for(const b of t){const $=tl(b.data,i);p.has($)||p.set($,b)}return{data:r.map(b=>{const $=c(b),_=tl(b,i),T=p.get(_);if(T)for(const A of n)Object.prototype.hasOwnProperty.call(T.data,A)&&($[A]=T.data[A]);return $}),merged:!0}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cc=Symbol.for(""),gf=e=>{if(e?.r===Cc)return e?._$litStatic$},nl=e=>({_$litStatic$:e,r:Cc}),rl=new Map,bf=e=>(t,...r)=>{const i=r.length;let n,s;const a=[],c=[];let u,p=0,w=!1;for(;p<i;){for(u=t[p];p<i&&(s=r[p],(n=gf(s))!==void 0);)u+=n+t[++p],w=!0;p!==i&&c.push(s),a.push(u),p++}if(p===i&&a.push(t[i]),w){const b=a.join("$$lit$$");(t=rl.get(b))===void 0&&(a.raw=a,rl.set(b,t=a)),r=c}return e(t,...r)},il=bf(S);function sl(e){return e==null||String(e).trim()===""}function Ec(e){const t=[];let r="",i=!1,n=!1,s=!1,a=!1,c=!1,u=!0;const p=()=>{const w=s?r:r.trim();(i||a)&&t.push(c?{term:w,negate:a,prefix:c}:{term:w,negate:a}),r="",i=!1,n=!1,s=!1,a=!1,c=!1,u=!0};for(let w=0;w<e.length;w++){const b=e[w];if(b==='"'){if(n&&e[w+1]==='"'){r+='"',i=!0,w++;continue}n=!n,s=!0,i=!0,u=!1;continue}if(b===","&&!n){p();continue}if(b==="!"&&!n&&u&&!a&&!c){a=!0;continue}if(b==="^"&&!n&&u&&!c){c=!0;continue}u&&!n&&/\s/.test(b)||(u=!1),r+=b,/\s/.test(b)||(i=!0)}return p(),t}function yf(e){return e.includes(",")||e.includes('"')||e!==e.trim()||e===""||e.startsWith("!")||e.startsWith("^")}function Sc(e){return e.map(t=>{const r=t.term===""&&t.negate?"":yf(t.term)?`"${t.term.replace(/"/g,'""')}"`:t.term;return(t.negate?"!":"")+(t.prefix?"^":"")+r}).join(",")}function ol(e,t){const r=t.term;if(r.trim()===""||!t.prefix&&r.toUpperCase()==="NULL")return sl(e);const i=String(e??"").toLowerCase(),n=r.toLowerCase();return t.prefix?i.startsWith(n):i.includes(n)}function Li(e,t){const r=Ec(t);if(r.length===0)return!0;for(const n of r)if(n.negate&&ol(e,n))return!1;const i=r.filter(n=>!n.negate);return i.length===0?!0:i.some(n=>ol(e,n))}var wf=Object.defineProperty,vf=Object.getOwnPropertyDescriptor,fr=(e,t,r,i)=>{for(var n=i>1?void 0:i?vf(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&wf(t,r,n),n};function Ws(e){return Sc([{...e,negate:!1}])}let Nt=class extends qe{constructor(){super(...arguments),this.values=[],this.blanks=0,this.current="",this.search="",this.states=new Map,this.resolveFn=null,this.onChange=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,r,i=0,n){return this.values=t,this.blanks=i,this.onChange=n??null,this.states=new Map(Ec(r??"").map(s=>[Ws(s),{state:s.negate?"not":"on",token:s}])),this.current=r??"",this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(s=>{this.resolveFn=s,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}cycle(e){const t={term:e,negate:!1},r=Ws(t),i=new Map(this.states),n=i.get(r);n===void 0?i.set(r,{state:"on",token:t}):n.state==="on"?i.set(r,{state:"not",token:n.token}):i.delete(r),this.states=i;const s=[...i.values()].map(a=>({...a.token,negate:a.state==="not"}));this.current=Sc(s),this.onChange?.(this.current)}close(e){this.onChange=null,document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),Nt.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),Nt.instance===this&&(Nt.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(a=>a.value.toLowerCase().includes(e)),r=this.blanks>0&&"(blanks)".includes(e),i=a=>this.states.get(Ws({term:a,negate:!1}))?.state,n=a=>S`
      <span class=${`cb${a?` ${a}`:""}`}
        >${a==="on"?"✓":a==="not"?"✕":""}</span
      >
    `,s=a=>a==="on"?"Included — click to exclude":a==="not"?"Excluded — click to clear":"Click to include → exclude → off";return S`
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
      ${t.length===0&&!r?S`<div class="empty">No matching values.</div>`:S`<ul>
            ${r?S`
                  <li
                    class="blanks"
                    title=${s(i("NULL"))}
                    @click=${()=>this.cycle("NULL")}
                  >
                    <span class="left">
                      ${n(i("NULL"))}
                      <span class="label"><em>(Blanks)</em></span>
                    </span>
                    <span class="count">${this.blanks}</span>
                  </li>
                `:""}
            ${t.slice(0,500).map(a=>{const c=i(a.value);return S`
                <li title=${s(c)} @click=${()=>this.cycle(a.value)}>
                  <span class="left">
                    ${n(c)}
                    <span class="label">${a.value}</span>
                  </span>
                  <span class="count">${a.count}</span>
                </li>
              `})}
          </ul>`}
      ${this.values.length>500?S`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      <div class="actions">
        <button
          class="text"
          @click=${()=>{this.states=new Map,this.close({clear:!0})}}
        >
          Clear filter
        </button>
        <span style="color:#6b7280">${t.length} value${t.length===1?"":"s"}</span>
      </div>
    `}};Nt.instance=null;Nt.styles=[Vt,Ve`
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
    `];fr([Kt({type:Array})],Nt.prototype,"values",2);fr([Kt({type:Number})],Nt.prototype,"blanks",2);fr([Kt({type:String})],Nt.prototype,"current",2);fr([K()],Nt.prototype,"search",2);fr([K()],Nt.prototype,"states",2);Nt=fr([it("filter-popover")],Nt);var xf=Object.defineProperty,$f=Object.getOwnPropertyDescriptor,cn=(e,t,r,i)=>{for(var n=i>1?void 0:i?$f(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&xf(t,r,n),n};let Wt=class extends qe{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const r=t[this.highlightIdx];r!==void 0?(e.preventDefault(),this.onPick(r)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const r=[];for(const i of this.options)if(i.toLowerCase().includes(t)&&(r.push(i),r.length>=500))break;return r}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=this.open&&e.length>0,r=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return S`
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
        ${this.value?S`<button
              type="button"
              class="clear"
              title="Clear filter"
              tabindex="-1"
              @mousedown=${i=>i.preventDefault()}
              @click=${this.onClear}
            >
              ×
            </button>`:me}
      </div>
      ${t?S`<ul
            class="dropdown"
            style=${r}
            @mousedown=${i=>i.preventDefault()}
          >
            ${e.map((i,n)=>S`
                <li
                  class=${n===this.highlightIdx?"highlighted":""}
                  @mousedown=${s=>s.preventDefault()}
                  @click=${()=>this.onPick(i)}
                >
                  ${i}
                </li>
              `)}
          </ul>`:me}
    `}};Wt.styles=Ve`
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
  `;cn([Kt({type:String})],Wt.prototype,"value",2);cn([Kt({type:Array})],Wt.prototype,"options",2);cn([Kt({type:String})],Wt.prototype,"placeholder",2);cn([K()],Wt.prototype,"open",2);cn([K()],Wt.prototype,"highlightIdx",2);cn([K()],Wt.prototype,"dropTop",2);cn([K()],Wt.prototype,"dropLeft",2);cn([K()],Wt.prototype,"dropMinWidth",2);cn([K()],Wt.prototype,"editing",2);cn([bn("input")],Wt.prototype,"inputEl",2);Wt=cn([it("filter-combobox")],Wt);function kf(e){const t=e.trim(),r=t.split(/\s+/).filter(Boolean);if(!r.some(c=>c==="AND"||c==="OR"))return{kind:"plain",phrase:t.toLowerCase(),words:r.map(c=>c.toLowerCase())};const n=[];let s=[];for(const c of r)c==="OR"?(n.push(s),s=[]):c==="AND"||s.push(c.toLowerCase());n.push(s);const a=n.filter(c=>c.length>0);return a.length===0?{kind:"plain",phrase:t.toLowerCase(),words:[]}:{kind:"boolean",groups:a}}function Cf(e,t,r){const i=kf(t);if(i.kind==="boolean")return e.filter(u=>i.groups.some(p=>p.every(w=>r(u,w))));const{phrase:n,words:s}=i;if(s.length<=1)return n===""?e:e.filter(u=>r(u,n));const a=e.filter(u=>r(u,n));if(a.length>0)return a;const c=e.filter(u=>s.every(p=>r(u,p)));return c.length>0?c:e.filter(u=>s.some(p=>r(u,p)))}const Ef=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function Fi(e,t,r){const i=new Map;for(const c of r)i.set(c.field.toLowerCase(),c.field),c.label&&i.set(c.label.toLowerCase(),c.field);const n=[...i.keys()].filter(Boolean).sort((c,u)=>u.length-c.length);let s=t;return n.length>0&&(s=s.replace(new RegExp(`(^|\\s)(${n.map(Ef).join("|")}):\\s+`,"gi"),"$1$2:")),Cf(e,s,(c,u)=>{const p=u.indexOf(":");if(p>0){const w=i.get(u.slice(0,p));if(w)return Li(c.data[w],u.slice(p+1))}return Object.values(c.data).some(w=>w!=null&&String(w).toLowerCase().includes(u))})}const al=new Map;function Sf(e){const t=al.get(e);if(t)return t;const r=new Function("row",`${e}
return render(row);`);return al.set(e,r),r}function _f(e,t){if(!e||!e.trim())return{ok:!1,label:"no script",message:""};let r;try{r=Sf(e)}catch(i){return{ok:!1,label:"compile error",message:ll(i)}}try{return{ok:!0,value:r(t)}}catch(i){return{ok:!1,label:"runtime error",message:ll(i)}}}function ll(e){return e instanceof Error?e.message:String(e)}const Mi="easydb:visible-count";function _c(e,t,r){e&&document.dispatchEvent(new CustomEvent(Mi,{detail:{key:e,count:t,total:r}}))}function Tc(e,t){return e<0||t<0?"":e===t?` (${t})`:` (${e}/${t})`}const Ac="#dc2626",Ic="cell-invalid",Tf=`border-color:${Ac};background:#fef2f2`;function Fo(e,t){e.classList.add(Ic),e.style.border=`1px solid ${Ac}`,e.style.background="#fef2f2",t&&(e.title=t)}function Af(e,t){if(e==null||typeof e=="string"&&e.trim()==="")return"empty";switch(t){case"boolean":return Rc(e)==="invalid"?"invalid":"ok";case"number":return Number.isFinite(typeof e=="number"?e:Number(e))?"ok":"invalid";case"date":case"datetime":return Number.isNaN(Date.parse(String(e)))?"invalid":"ok";default:return"ok"}}const If=/^\s*(true|1)\s*$/i,Rf=/^\s*(false|0)\s*$/i;function Rc(e){return e===!0||e===1?"true":e===!1||e===0?"false":e==null?"empty":typeof e=="string"?e.trim()===""?"empty":If.test(e)?"true":Rf.test(e)?"false":"invalid":"invalid"}var Pf=Object.defineProperty,Df=Object.getOwnPropertyDescriptor,gt=(e,t,r,i)=>{for(var n=i>1?void 0:i?Df(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Pf(t,r,n),n};const Of=200,jf=10,Ks=32;let ht=class extends qe{constructor(){super(...arguments),this.tableId="",this.viewInstanceId="",this.columns=[],this.rows=[],this.sortSpecs=[],this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.viewInst=null,this.tableColumns=[],this.renderedCount=0,this.lastEmittedCount=-1,this.lastEmittedTotal=-1,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;(t.tableId===this.tableId||this.viewMode&&t.tableId===this.viewInstanceId)&&(this.localQuery=t.query??"")},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}get viewMode(){return!!this.viewInstanceId}get readOnlyView(){return this.viewMode&&!!this.viewInst?.readonly}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.()}async updated(e){(e.has("tableId")||e.has("viewInstanceId"))&&this.tableId&&(this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.emitCount()}emitCount(){const e=this.viewMode?this.viewInstanceId:this.tableId;if(!e)return;const t=this.renderedCount,r=this.rows.length;t===this.lastEmittedCount&&r===this.lastEmittedTotal||(this.lastEmittedCount=t,this.lastEmittedTotal=r,_c(e,t,r))}async bind(){if(!this.tableId)return;const e=await pe(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.viewMode?(this.tableColumns=t.columns,this.viewInst=await e.store.viewInstances.findOne(this.viewInstanceId)??null,this.applyView(),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const s=n.find(a=>a.id===this.tableId);s&&(this.tableColumns=s.columns,this.applyView())}),this.viewSubUnsub?.(),this.viewSubUnsub=e.store.viewInstances.subscribe(n=>{const s=n.find(a=>a.id===this.viewInstanceId);s&&(this.viewInst=s,this.applyView())})):(this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const s=n.find(a=>a.id===this.tableId);s&&this.applyTable(s)})),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const r=e.store.rows(this.tableId);this.unsubscribe=r.subscribe(n=>this.rows=n);const i=window.setTimeout(()=>this.loading=!0,Of);try{this.rows=await r.find()}catch(n){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${n?.message??String(n)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(i),this.loading=!1}}applyTable(e){this.columns=e.columns,this.sortSpecs=ul(e),this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}applyView(){const e=this.viewInst;if(!e)return;const t=new Map(this.tableColumns.map(i=>[i.field,i])),r=e.columnWidths??{};this.columns=e.visibleColumns.map(i=>t.get(i)).filter(i=>!!i).map(i=>{const n=r[i.field];return typeof n=="number"?{...i,width:n}:i}),this.sortSpecs=ul(e),this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}async setCell(e,t,r){const i=await pe();await this.commitCell(i,e,t,r)}async commitCell(e,t,r,i){const n=this.columns.find(s=>s.field===r);if(n){const s=Ff(n,i,this.rows,t.id);if(s){await e.api.ui.dialogs.alert(s,`Cannot save ${n.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[r]:i},updatedAt:Date.now()})}catch(s){await e.api.ui.dialogs.alert(s?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}cancelCellEdit(e,t){if(e.key!=="Escape")return;e.stopPropagation();const r=e.target;typeof t=="boolean"?r.checked=t:r.value=t,r.blur()}renderInvalidCell(e,t,r,i){const n=String(r);return S`<input
      type="text"
      class=${Ic}
      style=${Tf}
      title=${i}
      .value=${n}
      @keydown=${s=>this.cancelCellEdit(s,n)}
      @change=${s=>this.setCell(e,t.field,s.target.value)}
    />`}renderReadonlyCell(e,t){return e.type==="boolean"?S`<input type="checkbox" .checked=${t===!0||t==="true"||t===1||t==="1"} disabled />`:t==null||t===""?S``:e.type==="date"?S`${wi(t)}`:e.type==="datetime"?S`${vi(t).replace("T"," ")}`:S`${String(t)}`}renderScriptedCell(e,t){const r=_f(t.script,e.data);if(!r.ok)return S`<span class="script-err" title=${r.message}>⚠ ${r.label}</span>`;const i=t.renderer?this.cellRenderers?.get(t.renderer):void 0;if(!i)return S`${r.value==null?"":String(r.value)}`;const n=nl(i);return il`<${n}
      .value=${r.value??""}
      .column=${t}
      .row=${e.data}
      .readonly=${!0}
    ></${n}>`}renderCell(e,t){const r=e.data[t.field];if(t.script?.trim())return this.renderScriptedCell(e,t);const i=t.renderer,n=i?this.cellRenderers?.get(i):void 0;if(n){const s=nl(n);return il`<${s}
        .value=${r??""}
        .column=${t}
        .row=${e.data}
        .readonly=${this.readOnlyView}
        @change=${a=>this.setCell(e,t.field,a.detail.value)}
      ></${s}>`}if(this.readOnlyView)return this.renderReadonlyCell(t,r);switch(t.type){case"date":return dl(r,wi(r))?this.renderInvalidCell(e,t,r,`Not a valid date: "${String(r)}"`):S`<input
          type="date"
          .value=${wi(r)}
          @keydown=${s=>this.cancelCellEdit(s,wi(r))}
          @change=${s=>this.setCell(e,t.field,s.target.value||null)}
        />`;case"datetime":return dl(r,vi(r))?this.renderInvalidCell(e,t,r,`Not a valid datetime: "${String(r)}"`):S`<input
          type="datetime-local"
          .value=${vi(r)}
          @keydown=${s=>this.cancelCellEdit(s,vi(r))}
          @change=${s=>this.setCell(e,t.field,s.target.value||null)}
        />`;case"number":{const s=r==null||r==="";return!s&&Number.isNaN(Number(r))?this.renderInvalidCell(e,t,r,`Not a valid number: "${String(r)}"`):S`<input
          type="number"
          .value=${s?"":String(r)}
          @keydown=${a=>this.cancelCellEdit(a,s?"":String(r))}
          @change=${a=>{const c=a.target.value;this.setCell(e,t.field,c===""?null:Number(c))}}
        />`}default:return S`<input
          type="text"
          .value=${String(r??"")}
          @keydown=${s=>this.cancelCellEdit(s,String(r??""))}
          @change=${s=>this.setCell(e,t.field,s.target.value)}
        />`}}async deleteRow(e){const t=await pe();try{await t.store.rows(this.tableId).remove(e)}catch(r){await t.api.ui.dialogs.alert(r?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e,t=!1){const r=this.sortSpecs.find(s=>s.field===e),i=this.sortSpecs.length===1&&this.sortSpecs[0]?.field===e;if(!t&&!i){this.sortSpecs=[{field:e,asc:!0}],await this.persistSort(this.sortSpecs);return}const n=t?this.sortSpecs.filter(s=>s.field!==e):[];r?r.asc&&n.push({field:e,asc:!1}):n.push({field:e,asc:!0}),this.sortSpecs=n,await this.persistSort(n)}async persistSort(e){const t=e[0],r={sortBy:e.length>0?e:void 0,sortColumn:t?.field,sortAsc:t?t.asc:void 0,updatedAt:Date.now()},i=await pe();this.viewMode?await i.store.viewInstances.patch(this.viewInstanceId,r):await i.store.tables.patch(this.tableId,r)}filteredRows(){const e=new Set(this.columns.filter(a=>a.filterable===!1).map(a=>a.field)),t=Object.entries(this.filters).filter(([a,c])=>c&&c.trim().length>0&&!e.has(a)),r=this.globalQuery.trim(),i=this.localQuery.trim();if(t.length===0&&r.length===0&&i.length===0)return this.rows;let n=this.rows;t.length>0&&(n=n.filter(a=>t.every(([c,u])=>Li(a.data[c],u))));const s=this.columns.filter(a=>a.filterable!==!1);return i&&(n=Fi(n,i,s)),r&&(n=Fi(n,r,s)),n}sortedRows(){const e=this.filteredRows();if(this.sortSpecs.length===0)return e;const t=this.sortSpecs.map(i=>({field:i.field,factor:i.asc?1:-1,type:this.columns.find(n=>n.field===i.field)?.type??"string"})),r=[...e];return r.sort((i,n)=>{for(const s of t){const a=Mf(i.data[s.field],n.data[s.field],s.type,s.factor);if(a!==0)return a}return 0}),r}async openFilterPicker(e,t){e.stopPropagation();const r=e.currentTarget,i=Nt.instance;if(!i)return;const n=new Map;let s=0;for(const u of this.rowsFacetedFor(t)){const p=u.data[t];if(p==null||String(p).trim()===""){s++;continue}const w=String(p);n.set(w,(n.get(w)??0)+1)}let a=[...n.entries()].map(([u,p])=>({value:u,count:p})).sort((u,p)=>p.count-u.count||u.value.localeCompare(p.value));this.columns.find(u=>u.field===t)?.type==="boolean"&&(a=[...["true","false"].map(p=>({value:p,count:n.get(p)??0})),...a.filter(p=>p.value!=="true"&&p.value!=="false")]);const c=await i.open(r.getBoundingClientRect(),a,this.filters[t]??"",s,u=>this.onFilterInput(t,u));c!==null&&(typeof c=="object"&&"clear"in c?this.onFilterInput(t,""):typeof c=="string"&&this.onFilterInput(t,c))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>{this.filterSaveTimer=null,this.saveFilters()},250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=new Set(this.columns.filter(i=>i.filterable===!1).map(i=>i.field)),r=Object.entries(this.filters).filter(([i,n])=>n&&n.trim().length>0&&i!==e&&!t.has(i));return r.length===0?this.rows:this.rows.filter(i=>r.every(([n,s])=>Li(i.data[n],s)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const r=50,i=500;for(const n of this.visibleColumns){let s=!0;for(const c of t){const u=c.data[n.field];if(u==null)continue;if((typeof u=="string"?u:String(u)).length>=r){s=!1;break}}if(!s)continue;const a=new Set;for(const c of this.rowsFacetedFor(n.field)){const u=c.data[n.field];if(u==null||u==="")continue;const p=typeof u=="string"?u:String(u);if(!(p.length>=r)&&(a.add(p),a.size>=i))break}e.set(n.field,[...a].sort())}return e}freezeColumnWidths(){const e=this.renderRoot.querySelector("thead tr");if(!e)return;const t=Array.from(e.querySelectorAll(":scope > th")),r=this.visibleColumns,i=new Map;r.forEach((n,s)=>{if(n.width!=null)return;const a=t[s];a&&i.set(n.field,Math.round(a.getBoundingClientRect().width))}),i.size!==0&&(this.columns=this.columns.map(n=>i.has(n.field)?{...n,width:i.get(n.field)}:n))}onResizeStart(e,t,r){e.preventDefault(),e.stopPropagation();const i=r.offsetWidth;this.freezeColumnWidths(),this.resizing={field:t,startX:e.clientX,startW:i};const n=a=>{if(!this.resizing)return;const c=a.clientX-this.resizing.startX,u=Math.max(jf,this.resizing.startW+c);this.columns=this.columns.map(p=>p.field===this.resizing.field?{...p,width:u}:p)},s=async()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",s);const a=this.resizing?.field;if(this.resizing=null,!a)return;const c=await pe();if(this.viewMode){const u={...this.viewInst?.columnWidths??{}};for(const p of this.columns)typeof p.width=="number"&&(u[p.field]=p.width);await c.store.viewInstances.patch(this.viewInstanceId,{columnWidths:u,updatedAt:Date.now()})}else await c.store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",n),window.addEventListener("pointerup",s)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,r){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientX<i.left+i.width/2;this.dropTargetField=t,this.dropEdge=n?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const r=this.dragSourceField,i=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!r||r===t||!i)return;const n=[...this.columns],s=n.findIndex(p=>p.field===r);if(s<0)return;const[a]=n.splice(s,1);let c=n.findIndex(p=>p.field===t);if(c<0){n.splice(s,0,a);return}i==="after"&&(c+=1),n.splice(c,0,a);const u=await pe();this.viewMode?await u.store.viewInstances.patch(this.viewInstanceId,{visibleColumns:n.map(p=>p.field),updatedAt:Date.now()}):await u.store.tables.patch(this.tableId,{columns:n,updatedAt:Date.now()})}async saveFilters(){const e=await pe(),t={};for(const[i,n]of Object.entries(this.filters))n&&n.trim().length>0&&(t[i]=n);if(this.viewMode){await e.store.viewInstances.patch(this.viewInstanceId,{filters:t,updatedAt:Date.now()});return}const r=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:r,updatedAt:Date.now()})}tableSizingStyle(e){return e.length===0||!e.every(r=>typeof r.width=="number")?null:`table-layout: fixed; width: ${e.reduce((r,i)=>r+(i.width??0),0)+Ks}px; min-width: 0`}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,r=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,i=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),n=Math.min(e.length,i+r);return{slice:e.slice(i,n),topPad:i*t,bottomPad:(e.length-n)*t}}render(){const e=this.sortedRows();this.renderedCount=e.length;const t=this.visibleColumns,{slice:r,topPad:i,bottomPad:n}=this.virtualSlice(e),s=this.computeFilterSuggestions(),a=this.externalLoading?this.externalProgress:null;return S`
      ${this.loading||this.externalLoading?S`<div
            class="load-bar"
            role="progressbar"
            aria-label="Loading rows"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow=${a!=null?Math.round(a*100):me}
          >
            <div
              class="load-bar-fill ${a!=null?"determinate":""}"
              style=${a!=null?`width:${Math.max(2,Math.round(a*100))}%`:me}
            ></div>
          </div>`:me}
      <table style=${this.tableSizingStyle(t)??me}>
        <colgroup>
          ${t.map(c=>S`<col style=${c.width!=null?`width: ${c.width}px`:""} />`)}
          <col style="width:${Ks}px" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(c=>{const u=c.sortable!==!1,p=c.filterable!==!1,w=this.sortSpecs.findIndex(le=>le.field===c.field),b=w>=0?this.sortSpecs[w]:void 0,$=b?b.asc?"asc":"desc":null,_=u?$==="asc"?"▲":$==="desc"?"▼":"⇅":"",T=this.sortSpecs.length>1&&w>=0?String(w+1):"",A=`t-${c.type}`,B=this.dragSourceField===c.field,U=this.dropTargetField===c.field,V=U&&this.dropEdge==="before"?" drop-before":U&&this.dropEdge==="after"?" drop-after":"",X=(c.description?`${c.description}
`:"")+(c.units?`Units: ${c.units}
`:"")+`${c.field} — ${u?"click to sort, shift-click to add a sort level, ":"not sortable · "}drag to reorder`+(p?"":" · not filterable");return S`
                <th
                  class=${`${A}${$?" sorted":""}${B?" drag-source":""}${V}${u?"":" no-sort"}`}
                  title=${X}
                  @click=${le=>u&&this.toggleSort(c.field,le.shiftKey)}
                  @dragover=${le=>this.onColDragOver(le,c.field,le.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(c.field)}
                  @drop=${le=>this.onColDrop(le,c.field)}
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
                      @click=${le=>le.stopPropagation()}
                      @dragstart=${le=>this.onColDragStart(le,c.field)}
                      @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                      >drag_indicator</span
                    ><span class="col-label"
                      >${c.label}${c.units?S`<span class="col-units"> (${c.units})</span>`:""}</span
                    ><span class="sort-icon" aria-hidden="true"
                      >${_}${T?S`<span class="sort-rank">${T}</span>`:me}</span
                    >
                    ${p?S`<button
                          class=${`funnel${this.filters[c.field]?" active":""}`}
                          title="Filter by value"
                          aria-label=${`Filter ${c.label||c.field}`}
                          @click=${le=>this.openFilterPicker(le,c.field)}
                        >
                          <span class="mi sm" aria-hidden="true">filter_list</span>
                        </button>`:""}
                  </div>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${le=>le.stopPropagation()}
                    @pointerdown=${le=>this.onResizeStart(le,c.field,le.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:${Ks}px"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(c=>{if(c.filterable===!1)return S`<th></th>`;const u=s.get(c.field)??[];return S`
                <th>
                  <filter-combobox
                    .value=${this.filters[c.field]??""}
                    .options=${u}
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
          ${i>0?S`<tr class="spacer" style=${`height:${i}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${r.map(c=>S`
              <tr>
                ${t.map(u=>S`<td
                      class=${`t-${u.type}${u.renderer?` r-${u.renderer}`:""}${Lf(c,u)}`}
                      title=${zf(c,u)}
                    >
                      ${this.renderCell(c,u)}
                    </td>`)}
                <td>
                  <button class="danger" title="Delete row" @click=${()=>this.deleteRow(c.id)}>
                    <span class="mi sm">delete</span>
                  </button>
                </td>
              </tr>
            `)}
          ${n>0?S`<tr class="spacer" style=${`height:${n}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
        </tbody>
      </table>
    `}};ht.styles=[Vt,Ve`
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
    `];gt([Kt({type:String})],ht.prototype,"tableId",2);gt([Kt({type:String})],ht.prototype,"viewInstanceId",2);gt([K()],ht.prototype,"columns",2);gt([K()],ht.prototype,"rows",2);gt([K()],ht.prototype,"sortSpecs",2);gt([K()],ht.prototype,"filters",2);gt([K()],ht.prototype,"globalQuery",2);gt([K()],ht.prototype,"localQuery",2);gt([K()],ht.prototype,"dragSourceField",2);gt([K()],ht.prototype,"dropTargetField",2);gt([K()],ht.prototype,"dropEdge",2);gt([K()],ht.prototype,"resizing",2);gt([K()],ht.prototype,"cellRenderers",2);gt([K()],ht.prototype,"scrollY",2);gt([K()],ht.prototype,"viewportHeight",2);gt([K()],ht.prototype,"loading",2);gt([K()],ht.prototype,"externalLoading",2);gt([K()],ht.prototype,"externalProgress",2);ht=gt([it("data-table")],ht);const cl=500;function zf(e,t){if(t.script)return"";const r=e.data[t.field];if(r==null)return"";const i=typeof r=="string"?r:String(r);return i.trim()===""?"":i.length>cl?`${i.slice(0,cl)}…`:i}function Lf(e,t){if(t.script)return"";const r=Af(e.data[t.field],t.type);return r==="empty"?" is-null":r==="invalid"?" is-invalid":""}function Ff(e,t,r,i){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&r.find(s=>s.id!==i&&s.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function wi(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function vi(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}function dl(e,t){return e==null||typeof e=="string"&&e.trim()===""?!1:t===""}function Mf(e,t,r,i){const n=c=>c==null?0:c===""?1:2,s=n(e),a=n(t);return s!==2||a!==2?(s-a)*i:Bf(e,t,r)*i}function ul(e){return e.sortBy?.length?e.sortBy.map(t=>({field:t.field,asc:t.asc!==!1})):e.sortColumn?[{field:e.sortColumn,asc:e.sortAsc!==!1}]:[]}function Bf(e,t,r){switch(r){case"number":{const i=Number(e),n=Number(t);return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}case"boolean":return(e?1:0)-(t?1:0);case"date":{const i=new Date(String(e)).getTime(),n=new Date(String(t)).getTime();return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function fn(e,t,r){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:r}}))}class Ut extends Error{constructor(t,r){const i=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(i),this.name="DatasetteError",this.status=r??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function gn(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const r=t.pathname.split("/").filter(Boolean),i={};for(const[c,u]of t.searchParams)i[c]=u;let n,s=null,a=null;if(r.length>=2){a=decodeURIComponent(r[r.length-1]),s=decodeURIComponent(r[r.length-2]);const c=r.slice(0,r.length-2).join("/");n=t.origin+(c?"/"+c:"")}else r.length===1&&(s=decodeURIComponent(r[0])),n=t.origin;return{base:n,db:s,table:a,query:i}}function ar(e,t={}){const r=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[i,n]of Object.entries({...e.query,...t}))n!=null&&r.searchParams.set(i,String(n));return r.toString()}function Nf(e){const t=e?.next_url??null,r=e?.next,i=r!=null&&r!==!1?String(r):null,n=Array.isArray(e?.rows)?e.rows:[],s=Array.isArray(e?.columns)?e.columns:null;return{rows:n.map(c=>Array.isArray(c)&&s?Object.fromEntries(s.map((u,p)=>[u,c[p]])):c),nextUrl:t,nextToken:i,hasMore:t!=null||i!=null,truncated:e?.truncated===!0}}function Uf(e,t=""){const r=String(e||"").toUpperCase();return r.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":r.includes("REAL")||r.includes("FLOA")||r.includes("DOUB")||r.includes("NUM")||r.includes("DEC")?"number":r.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function hl(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],r=Array.isArray(e?.columns)?e.columns.slice():[],i={},n=e?.column_details;if(Array.isArray(n))for(const c of n)i[c.column??c.name]=c;else n&&typeof n=="object"&&Object.assign(i,n);for(const c of r)c in i||(i[c]={});const a=(r.length?r:Object.keys(i)).map(c=>{const u=i[c]||{},p=u.is_pk===!0||u.is_pk===1||t.includes(c),w={field:c,label:Pc(c),type:Uf(u.sqlite_type??u.type,c)};return(u.notnull===!0||u.notnull===1||p)&&(w.notnull=!0),p&&(w.unique=!0),(u.hidden===!0||u.hidden===1)&&(w.hidden=!0),u.default!=null&&u.default!==""&&(w.default=u.default),w});if(t.length===0){const c=a.filter(u=>u.unique).map(u=>u.field);c.length&&t.push(...c)}return{columns:a,pks:t}}function Pc(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function Zi(e){const t=[],r=new Set;for(const i of e)for(const n of Object.keys(i))r.has(n)||(r.add(n),t.push(n));return t.map(i=>({field:i,label:Pc(i),type:Hf(e.map(n=>n[i]))}))}function Hf(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&qf(r))?"datetime":"string"}function qf(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function Wf(e){const t=new TextEncoder().encode(String(e));let r="";for(const i of t){const n=String.fromCharCode(i);/[A-Za-z0-9_-]/.test(n)?r+=n:r+="~"+i.toString(16).toUpperCase().padStart(2,"0")}return r}function Kf(e,t){return!t||t.length===0?null:t.map(r=>Wf(e[r])).join(",")}function Vf(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],r=[];for(const i of t){if(typeof i=="string"){r.push(i);continue}if(i&&typeof i=="object"&&typeof i.name=="string"){if(i.name==="_memory")continue;r.push(typeof i.route=="string"&&i.route?i.route:i.name)}}return r}function Gf(e,t){const r=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],i=[];for(const n of r){if(typeof n=="string"){i.push({db:t,table:n,count:null,hidden:!1,pks:[]});continue}n&&typeof n=="object"&&typeof n.name=="string"&&i.push({db:t,table:n.name,count:typeof n.count=="number"?n.count:null,hidden:n.hidden===!0,pks:Array.isArray(n.primary_keys)?n.primary_keys:[]})}return i}async function On(e,t){let r;try{r=await e(t)}catch(n){const s=n?.message||"network error";throw new Ut({error:`Couldn't reach ${t} (${s}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(r&&r.ok===!1){let n=null;try{n=await r.json()}catch{}throw new Ut(n&&typeof n=="object"?n:{error:`HTTP ${r.status} for ${t}`},r.status)}const i=await r.json();if(i&&i.ok===!1)throw new Ut(i,r.status);return i}async function Mo(e,t){return Vf(await On(e,`${t}/-/databases.json`))}async function Bi(e,t,r){return Gf(await On(e,`${t}/${encodeURIComponent(r)}.json`),r)}async function es(e,t){const r=ar(t,{_extra:"column_details"}),i=await On(e,r);let{columns:n,pks:s}=hl(i),a=!!i&&i.column_details!=null,c=i?.count??null,u=i?.count_truncated===!0,p=i;if(n.length===0){const w=ar(t,{_extra:"columns"}),b=await On(e,w);({columns:n,pks:s}=hl(b)),a=!!b&&b.column_details!=null,c=b?.count??c,u=b?.count_truncated===!0||u,p=b}return{columns:n,pks:s,count:c,countTruncated:u,typed:a,raw:p}}async function oo(e,t){if(!t.db||!t.table)throw new Error("probeSingleTable: URL must name a database and a table");const r=await es(e,t);return{db:t.db,table:t.table,count:r.count,hidden:!1,pks:r.pks}}function Yf(e,t,r){const i=e&&typeof e=="object"?e:{},n=t&&r&&i.databases?.[t]?.tables?.[r]||t&&r&&i.databases?.[t]?.tables?.[r.toLowerCase()]||{},s=t&&i.databases?.[t]||{},a=T=>n[T]??s[T]??i[T],c={columns:{},units:{}};typeof n.sort=="string"&&(c.sort=n.sort),typeof n.sort_desc=="string"&&(c.sortDesc=n.sort_desc),typeof n.size=="number"&&(c.size=n.size),Array.isArray(n.sortable_columns)&&(c.sortableColumns=n.sortable_columns.slice()),typeof n.label_column=="string"&&(c.labelColumn=n.label_column),n.hidden===!0&&(c.hidden=!0),typeof n.description=="string"&&(c.description=n.description),typeof n.description_html=="string"&&(c.descriptionHtml=n.description_html);const u=a("source"),p=a("source_url"),w=a("license"),b=a("license_url"),$=a("about"),_=a("about_url");if(typeof u=="string"&&(c.source=u),typeof p=="string"&&(c.sourceUrl=p),typeof w=="string"&&(c.license=w),typeof b=="string"&&(c.licenseUrl=b),typeof $=="string"&&(c.about=$),typeof _=="string"&&(c.aboutUrl=_),n.columns&&typeof n.columns=="object")for(const[T,A]of Object.entries(n.columns))typeof A=="string"&&(c.columns[T]=A);if(n.units&&typeof n.units=="object")for(const[T,A]of Object.entries(n.units))typeof A=="string"&&(c.units[T]=A);return c}const fl=new Map;async function Xf(e,t){let r=fl.get(t);return r||(r=On(e,`${t}/-/metadata.json`).catch(()=>({})),fl.set(t,r)),r}async function Bo(e,t){const r=await Xf(e,t.base);return Yf(r,t.db,t.table)}function Qf(e){const t={};return e.description!=null&&(t.description=e.description),e.descriptionHtml!=null&&(t.descriptionHtml=e.descriptionHtml),e.source!=null&&(t.source=e.source),e.sourceUrl!=null&&(t.sourceUrl=e.sourceUrl),e.license!=null&&(t.license=e.license),e.licenseUrl!=null&&(t.licenseUrl=e.licenseUrl),e.about!=null&&(t.about=e.about),e.aboutUrl!=null&&(t.aboutUrl=e.aboutUrl),Object.keys(t).length>0?t:void 0}function No(e,t){const r=e.sortableColumns!=null?new Set(e.sortableColumns):null,i=t.map(c=>{const u=e.columns[c.field],p=e.units[c.field],w=r?r.has(c.field):void 0;return u==null&&p==null&&w===void 0?c:{...c,...u!=null?{description:u}:{},...p!=null?{units:p}:{},...w!==void 0?{sortable:w}:{}}}),n=new Set(t.map(c=>c.field)),s={};e.sort&&n.has(e.sort)?(s.sortColumn=e.sort,s.sortAsc=!0):e.sortDesc&&n.has(e.sortDesc)&&(s.sortColumn=e.sortDesc,s.sortAsc=!1);const a=Qf(e);return a&&(s.info=a),e.labelColumn&&n.has(e.labelColumn)&&(s.labelColumn=e.labelColumn),{columns:i,patch:s}}function Uo(e,t){if(t.length===0)return e;const r=new Map(Zi(t).map(i=>[i.field,i.type]));return e.map(i=>{if(i.type!=="string")return i;const n=r.get(i.field);return n&&n!=="string"?{...i,type:n}:i})}async function Wr(e,t,r={}){const i=r.maxRows??1e4,s={_size:r.pageSize??1e3,...r.extraParams||{}};let a=r.startUrl??ar(t,s);const c=[];let u=!1,p=!1,w=0,b,$;for(;a;){let _;try{_=await On(e,a)}catch(B){if(c.length===0&&!r.startUrl)throw B;b=B instanceof Ut&&B.status?`stopped after ${c.length} rows: HTTP ${B.status}`:`stopped after ${c.length} rows: ${B?.message??String(B)}`,p=!0,$=a;break}const T=Nf(_);c.push(...T.rows),u=u||T.truncated,w+=1,r.onProgress?.(c.length);const A=T.nextUrl!=null?T.nextUrl:T.nextToken!=null?ar(t,{_next:T.nextToken}):null;A&&c.length<i&&T.rows.length>0?a=A:(p=A!=null&&T.rows.length>0,p&&($=A??void 0),a=null)}return{rows:c,truncated:u,hasMore:p,pages:w,error:b,nextUrl:$}}function Jf(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function Dc(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function Oc(e,t,r){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${r}`}async function ts(e,t,r,i){let n;try{n=await e(t,{method:"POST",headers:Jf(i),body:JSON.stringify(r)})}catch(a){throw new Ut({error:`Couldn't reach ${t} (${a?.message||"network error"}).`},0)}if(n&&n.ok===!1){let a=null;try{a=await n.json()}catch{}throw new Ut(a&&typeof a=="object"?a:{error:`HTTP ${n.status} for ${t}`},n.status)}const s=await n.json();if(s&&s.ok===!1)throw new Ut(s,n.status);return s}async function pl(e,t,r,i={}){const n=await ts(e,Dc(t,"insert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function Zf(e,t,r,i,n={}){const s=await ts(e,Oc(t,r,"update"),{update:i,return:!0},n.token);return s&&typeof s.row=="object"&&s.row?s.row:Array.isArray(s?.rows)&&s.rows[0]?s.rows[0]:null}async function ml(e,t,r,i={}){await ts(e,Oc(t,r,"delete"),{},i.token)}async function ep(e,t,r,i={}){const n=await ts(e,Dc(t,"upsert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function tp(e,t){const r=ar(t,{_extra:"primary_keys"}),i=await On(e,r);return Array.isArray(i?.primary_keys)?i.primary_keys:[]}async function jc(e,t){try{const r=await On(e,ar(t,{_extra:"count"}));return{count:typeof r?.count=="number"?r.count:null,truncated:r?.count_truncated===!0}}catch{return{count:null,truncated:!1}}}async function zc(e,t,r={}){const i=r.token?{headers:{Authorization:`Bearer ${r.token}`}}:void 0;try{const n=await e(`${t}/-/versions.json`,i);if(n&&n.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${n.status}`};const s=await n.json(),a=s?.datasette?.version??s?.version??null;let c=null;try{c=(await(await e(`${t}/-/actor.json`,i)).json())?.actor??null}catch{}return{reachable:!0,version:a,actor:c,writable:!!(r.token&&c)}}catch(n){return{reachable:!1,version:null,actor:null,writable:!1,error:n?.message||"unreachable"}}}function lr(e,t){return t?(r,i)=>{const n=(i??{}).headers??{};return e(r,{...i??{},headers:{...n,Authorization:`Bearer ${t}`}})}:e}const Ni=e=>e.replace(/^https?:\/\//,""),Rr="datasette",Lc=1e4,Fc=1e3,Ho=1e4,Mc=60;function Bc(e){e.ui.registerSettings(Rr,"Datasette",[{key:"maxImportRows",label:"Max import rows per table",type:"number",default:Lc,scope:"workspace",description:"Max rows imported per table. 0 = unlimited."},{key:"pageSize",label:"Page size",type:"number",default:Fc,scope:"workspace",description:"Rows requested per page hop while paging a table (the instance clamps this to its own max_returned_rows)."},{key:"connectMaxRows",label:"Connected table row cap",type:"number",default:Ho,scope:"workspace",description:"Row cap for a single live connected table."},{key:"retryWaitSeconds",label:"Rate-limit retry wait (seconds)",type:"number",default:Mc,scope:"workspace",description:"Wait before resuming an import paused by the instance's rate limiting."}])}function xi(e,t,r){const i=typeof e=="number"?e:Number(e);return Number.isFinite(i)&&i>=r?Math.floor(i):t}async function ns(e){const[t,r,i,n]=await Promise.all([e.settings.get(Rr,"maxImportRows"),e.settings.get(Rr,"pageSize"),e.settings.get(Rr,"connectMaxRows"),e.settings.get(Rr,"retryWaitSeconds")]);return{maxImportRows:xi(t,Lc,0),pageSize:xi(r,Fc,1),connectMaxRows:xi(i,Ho,1),retryWaitSeconds:xi(n,Mc,1)}}function rs(e){return e===0?Number.MAX_SAFE_INTEGER:e}function np(e,t,r){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(r)}`}function qo(e,t,r,i){const n={...e.info??{}};return!n.source&&!n.sourceUrl&&(n.source=`${Ni(t)}/${r}/${i}`,n.sourceUrl=np(t,r,i)),{...e,info:n}}function Nc(e,t){if(!e.has(t))return t;for(let r=2;;r++){const i=`${t} (${r})`;if(!e.has(i))return i}}async function Uc(e,t,r,i={}){if(t.db&&t.table)return[await oo(e,t)];const n=[];if(t.db){if(n.push(...await Bi(e,t.base,t.db)),i.skipPicker)return n.filter(c=>!c.hidden)}else{const c=await Mo(e,t.base);if(c.length===0)return[];let u=c;if(c.length>1){const p=await zi(c.map(w=>({name:w,size:null})),{title:`${r} from Datasette`,message:`Choose databases on ${Ni(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!p)return null;u=p.map(w=>c[w])}for(const p of u)try{n.push(...await Bi(e,t.base,p))}catch{}}if(n.length===0)return[];const s=new Set(n.map(c=>c.db)).size>1,a=await zi(n.map(c=>({name:s?`${c.db}/${c.table}`:c.table,size:c.count,detail:s?void 0:c.db,hidden:c.hidden})),{title:`${r} from Datasette`,message:`Choose tables to ${r.toLowerCase()} from ${Ni(t.base)}.`,confirmLabel:r});return a?a.map(c=>n[c]):null}const rp=e=>new Promise(t=>setTimeout(t,e));function ip(e){const t=globalThis.__eda_resumeDelayMs;return typeof t=="number"&&t>=0?t:e*1e3}function Wo(e,t,r,i){if(!(!e||!t))return{nextUrl:t,loadedRows:r,...i!=null?{totalCount:i}:{}}}const sp={id:"datasette-import",name:"Datasette Import",type:"importer",version:"0.3.0",description:"Import snapshot tables from any online Datasette instance, database, or single table by URL",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-import.ts"},op="https://latest.datasette.io/fixtures/facetable";function ap(e){Bc(e),e.ui.registerTableButton({id:"datasette:refresh-snapshot",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this snapshot from the Datasette table it came from",visible:t=>t.origin?.type==="datasette"&&t.source?.type!=="datasette",onClick:(t,{tableId:r})=>fp(t,r)}),e.ui.registerTableButton({id:"datasette:resume",label:"Resume import",icon:"sync_problem",tooltip:"Import was interrupted — click to resume from where it stopped",danger:!0,visible:t=>t.origin?.type==="datasette"&&t.importResume!=null,onClick:(t,{tableId:r})=>mp(t,r)}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:r}){const i=r||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${op}`,"","Import from Datasette");i&&await gl(t,i)}}),e.ui.registerDropHandler(async(t,r)=>{const i=t.dataTransfer?.getData("text/plain")||"";return lp(i)?(t.preventDefault(),await gl(r,i),!0):!1})}async function gl(e,t){try{await Ko(e,t)}catch(r){let i;r instanceof Ut?i=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:i=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(i,"Datasette import failed")}}function lp(e){try{const t=gn(e);return!!(t.db&&t.table)}catch{return!1}}async function Ko(e,t,r={}){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=await ns(e),s=gn(t),c=await Uc(U=>e.backend.fetch(U),s,"Import",{skipPicker:r.skipTablePicker});if(c===null)return;if(c.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const u=[];let p=0;for(const U of c){const V={base:s.base,db:U.db,table:U.table,query:{}},X=await cp(e,i,V);if(X.skipped){p+=1;continue}u.push({tableId:X.tableId,ref:V,overwrite:X.overwrite,knownCount:U.count})}let w=0,b=0;const $=[],_=[],T=[];for(const U of u)try{const V=await dp(e,U.tableId,U.ref,U.overwrite,U.knownCount,r,n);w+=1,b+=V.rowCount,V.error?_.push(`${U.ref.db}/${U.ref.table} (${V.error})`):(V.hasMore||V.truncated)&&$.push(`${U.ref.db}/${U.ref.table}`)}catch(V){T.push(`${U.ref.db}/${U.ref.table}: ${V?.message??String(V)}`)}const A=rs(n.maxImportRows),B=r.maxRows!=null?Math.min(r.maxRows,A):A;hp(e,{imported:w,skipped:p,totalRows:b,capped:$,cap:B,partial:_,failed:T,requested:c.length})}async function cp(e,t,r){const i=`${r.db}/${r.table}`,n={type:"datasette",url:`${r.base}/${encodeURIComponent(r.db)}/${encodeURIComponent(r.table)}`},s=(await e.store.tables.find()).filter(p=>p.workspaceId===t),a=s.find(p=>p.name.toLowerCase()===i.toLowerCase());let c=i;if(a){const p=await e.ui.dialogs.choice(`A table named "${i}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!p||p==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(p==="Overwrite")return await e.store.tables.patch(a.id,{origin:n,updatedAt:Date.now()}),{tableId:a.id,overwrite:!0};c=Nc(new Set(s.map(w=>w.name)),i)}const u=ot();return await e.store.tables.insert({id:u,workspaceId:t,name:c,code:At(`${r.db}-${r.table}`),columns:[],view:"table",origin:n,updatedAt:Date.now()}),{tableId:u,overwrite:!1}}async function dp(e,t,r,i,n,s,a){const c=`${r.db}/${r.table}`,u=b=>e.backend.fetch(b),p=rs(a.maxImportRows),w=s.maxRows!=null?Math.min(s.maxRows,p):p;fn(t,!0);try{let b=[],$=n,_=!1,T=!1,A=[];try{const Ee=await es(u,r);b=Ee.columns,$==null&&($=Ee.count,_=Ee.countTruncated),T=Ee.typed,A=Ee.pks??[]}catch{}if($==null){const Ee=await jc(u,r);$=Ee.count,_=Ee.truncated}const B=$&&$>0&&(!_||w<=$)?Math.min($,w):0,U=[];let V=!1,X=!1,le=0,re,ee,Y;for(;;){const Ee=await Wr(u,r,{maxRows:Math.max(0,w-U.length),pageSize:a.pageSize,...Y?{startUrl:Y}:{},onProgress:_e=>{B>0&&fn(t,!0,Math.min(1,(U.length+_e)/B))}});if(U.push(...Ee.rows),V=V||Ee.truncated,le+=Ee.pages,X=Ee.hasMore,re=Ee.error,ee=Ee.nextUrl,!Ee.error||!Ee.nextUrl||U.length>=w)break;const Re=`${a.retryWaitSeconds}s`;if(await e.ui.dialogs.choice(`Import of "${c}" paused after ${U.length.toLocaleString()} rows (${Ee.error}). Datasette may be rate-limiting a large import. Wait ${Re} and resume from where it stopped, or cancel and keep the rows imported so far (you can resume later from the table's footer)?`,[`Resume in ${Re}`,"Cancel"],"Import paused — rate limited?")!==`Resume in ${Re}`)break;fn(t,!0),e.ui.dialogs.toast(`Resuming "${c}" in ${Re}…`,{kind:"info",title:"Import paused"}),await rp(ip(a.retryWaitSeconds)),Y=Ee.nextUrl,re=void 0,ee=void 0}let ye=b.length===0?Zi(U):T?b:Uo(b,U),xe={};try{const Ee=await Bo(u,r),Re=No(Ee,ye);ye=Re.columns,xe=Re.patch}catch{}xe=qo(xe,r.base,r.db,r.table);const m=await e.store.tables.findOne(t),x=m?.columns??[],P=x.length===0;let{columns:y}=Qi(x,ye,m?.deletedColumns),k=U;if(s.editColumns&&P){const Ee=await s.editColumns(y,c);if(Ee===null)return{name:c,rowCount:0,hasMore:!1,truncated:!1,pages:le,count:$,error:re};k=up(k,y,Ee),y=Ee}const he=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t});const ge=Wo(re,ee,U.length,$),H=A.length>0&&m?.origin?{origin:{...m.origin,pks:A}}:{},Q=P?{columns:y,...xe,...H,importResume:ge,updatedAt:he}:{columns:y,...xe.info?{info:xe.info}:{},...H,importResume:ge,updatedAt:he};await e.store.tables.patch(t,Q);const Ue=e.store.rows(t);if(i){const Ee=await Ue.find();await Ue.bulkRemove(Ee.map(Re=>Re.id))}const Ze=k.map(Ee=>({id:ot(),tableId:t,data:Ee,updatedAt:he}));return await Ue.bulkInsert(Ze),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:Ze.length}),{name:c,rowCount:Ze.length,hasMore:X,truncated:V,pages:le,count:$,error:re}}finally{fn(t,!1)}}function up(e,t,r){const i=Oo(t,r);return i?e.map(i):e}function hp(e,t){const r=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,i=`${t.imported} table${t.imported===1?"":"s"}`,n=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${i} (${r});${n} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.partial.length>0){e.ui.dialogs.toast(`Imported ${i} (${r}).${n} ${t.partial.length} loaded partially (stopped early — the server may have rate-limited us): ${t.partial.join(", ")}. Use Refresh to fetch the rest.`,{kind:"warning",title:"Datasette import"});return}if(t.capped.length>0){const s=t.cap<Number.MAX_SAFE_INTEGER?` at ${t.cap.toLocaleString()}`:"";e.ui.dialogs.toast(`Imported ${i} (${r}).${n} ${t.capped.length} capped${s} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${i} (${r}) from Datasette.${n}`,{kind:"success",title:"Datasette import"})}async function fp(e,t){const r=await e.store.tables.findOne(t);if(!(!r?.origin?.url||r.origin.type!=="datasette"))try{const i=await ns(e);await pp(e,r,i)}catch(i){const n=i instanceof Ut?i.message:i?.message??String(i);e.ui.dialogs.toast(`Refresh failed: ${n}`,{kind:"error",title:"Refresh"})}}async function pp(e,t,r){const i=gn(t.origin.url),n=w=>e.backend.fetch(w),s=rs(r.maxImportRows);fn(t.id,!0);let a,c=[];try{let w=[],b=null,$=!1,_=!1;try{const H=await es(n,i);w=H.columns,b=H.count,$=H.countTruncated,_=H.typed}catch{}if(b==null){const H=await jc(n,i);b=H.count,$=H.truncated}const T=b&&b>0&&(!$||s<=b)?Math.min(b,s):0,{rows:A,hasMore:B,truncated:U,error:V,nextUrl:X}=await Wr(n,i,{maxRows:s,pageSize:r.pageSize,onProgress:H=>{T>0&&fn(t.id,!0,Math.min(1,H/T))}});let le=w.length===0?Zi(A):_?w:Uo(w,A),re={};try{const H=await Bo(n,i),Q=No(H,le);le=Q.columns,re=Q.patch}catch{}re=qo(re,i.base,i.db,i.table);const ee=t.columns.length===0,Y=Qi(t.columns,le,t.deletedColumns);c=Y.newFields;const te=Date.now(),ye=Wo(V,X,A.length,b),xe=ee?{columns:Y.columns,...re,importResume:ye,updatedAt:te}:{columns:Y.columns,...re.info?{info:re.info}:{},importResume:ye,updatedAt:te};await e.store.tables.patch(t.id,xe);const m=t.origin?.pks??[],x=new Set(le.map(H=>H.field)),P=t.columns.map(H=>H.field).filter(H=>!x.has(H)&&!m.includes(H)),y=(t.deletedColumns??[]).filter(H=>x.has(H)),k=e.store.rows(t.id),he=await k.find(),{data:ge}=kc({oldRows:he.map(H=>({data:H.data})),freshRows:A,pks:m,userAddedFields:P,deletedRemoteFields:y});await k.bulkRemove(he.map(H=>H.id)),await k.bulkInsert(ge.map(H=>({id:ot(),tableId:t.id,data:H,updatedAt:te}))),a={rowCount:ge.length,hasMore:B,truncated:U,error:V}}finally{fn(t.id,!1)}const u=[];if(a.error)u.push(`partial (${a.error})`);else if(a.hasMore||a.truncated){const w=s<Number.MAX_SAFE_INTEGER?` at ${s.toLocaleString()}`:"";u.push(`capped${w}`)}c.length>0&&u.push(`${c.length} new column${c.length===1?"":"s"}`);const p=u.length?` — ${u.join(", ")}`:"";e.ui.dialogs.toast(`Refreshed ${a.rowCount} rows from ${i.db}/${i.table}${p}.`,{kind:a.error||a.hasMore||a.truncated||c.length>0?"warning":"success",title:"Refresh"}),c.length>0&&gp(t.id,i,c)}async function mp(e,t){const r=await e.store.tables.findOne(t),i=r?.importResume;if(!r||!r.origin?.url||!i)return;const n=await ns(e),s=rs(n.maxImportRows),a=gn(r.origin.url),c=T=>e.backend.fetch(T),u=i.loadedRows,p=i.totalCount??null,w=p&&p>0?Math.min(p,s):0;fn(t,!0,w>0?Math.min(1,u/w):void 0);let b=0,$;try{const T=await Wr(c,a,{startUrl:i.nextUrl,maxRows:Math.max(0,s-u),pageSize:n.pageSize,onProgress:U=>{w>0&&fn(t,!0,Math.min(1,(u+U)/w))}});b=T.rows.length;const A=Date.now();await e.store.rows(t).bulkInsert(T.rows.map(U=>({id:ot(),tableId:t,data:U,updatedAt:A}))),$={error:T.error,nextUrl:T.nextUrl};const B=Wo(T.error,T.nextUrl,u+b,p);await e.store.tables.patch(t,{importResume:B,updatedAt:A})}catch(T){const A=T instanceof Ut?T.message:T?.message??String(T);e.ui.dialogs.toast(`Couldn't resume ${a.db}/${a.table}: ${A}. Try again later.`,{kind:"error",title:"Resume import"});return}finally{fn(t,!1)}const _=u+b;$.error?e.ui.dialogs.toast(`Resumed ${a.db}/${a.table}: +${b} rows (${_} total) — interrupted again (${$.error}). Resume to continue.`,{kind:"warning",title:"Resume import"}):e.ui.dialogs.toast(`Finished ${a.db}/${a.table}: +${b} rows (${_} total).`,{kind:"success",title:"Resume import"})}function gp(e,t,r){const i=r.join(", "),n=r.length!==1,s=`Refreshing ${t.db}/${t.table} revealed ${r.length} new column${n?"s":""}: ${i}. Review, reorder or hide ${n?"them":"it"} here.`;document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:e,notice:s}}))}const bp=Object.freeze(Object.defineProperty({__proto__:null,importDatasette:Ko,init:ap,meta:sp},Symbol.toStringTag,{value:"Module"}));var yp=Object.defineProperty,wp=Object.getOwnPropertyDescriptor,Kr=(e,t,r,i)=>{for(var n=i>1?void 0:i?wp(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&yp(t,r,n),n};const vp="https://latest.datasette.io/ephemeral";let Jt=class extends qe{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=async e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const r=this.token.trim();if(this.onConnect){this.status="Checking…",this.statusKind="busy";try{await this.onConnect(t,r)}catch(i){this.status=i?.message??String(i),this.statusKind="err";return}}this.finish({url:t,token:r})}}connectedCallback(){super.connectedCallback(),Jt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Jt.instance===this&&(Jt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&nn(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,this.onConnect=e.onConnect,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return S`
      <dialog @cancel=${this.onCancel} @keydown=${tn}>
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
                placeholder="e.g. ${vp}"
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
    `}};Jt.instance=null;Jt.styles=[en,Ve`
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
    `];Kr([K()],Jt.prototype,"url",2);Kr([K()],Jt.prototype,"token",2);Kr([K()],Jt.prototype,"status",2);Kr([K()],Jt.prototype,"statusKind",2);Jt=Kr([it("datasette-connect-dialog")],Jt);class xp extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function Hc(e){return`datasette:token:${e}`}function $p(e,t){for(const[r,i]of Object.entries(t))if(r!=="data"&&e[r]!==i)return!1;return!0}function kp(e,t,r){const i=e.source,n=i?.config??{},s={base:n.base,db:n.db,table:n.table,query:{}},a=Array.isArray(n.pks)&&n.pks.length>0?n.pks:["rowid"],c=i?.writable===!0,u=n.maxRows;let p=null;function w(){return u!=null?Promise.resolve(u):(p||(p=r?ns(r).then(Y=>Y.connectMaxRows):Promise.resolve(Ho)),p)}const b=n.pollIntervalMs??0,$=(Y,te)=>t.backend.fetch(Y,te);async function _(){const te=(await t.settings.findOne(Hc(n.base)))?.value;return typeof te=="string"&&te.length>0?te:void 0}const T=async(Y,te)=>lr($,await _())(Y,te);function A(Y){return{id:Kf(Y,a)??ot(),tableId:e.id,data:Y,updatedAt:Date.now()}}function B(Y){if(!c)throw new xp(Y)}function U(Y){const te={};for(const[ye,xe]of Object.entries(Y))a.includes(ye)||(te[ye]=xe);return te}const V=new Set;let X=[],le=!1,re=null;function ee(){return re||(re=(async()=>{try{const{rows:Y}=await Wr(T,s,{maxRows:await w()});X=Y.map(A),le=!0;for(const te of V)te(X);return X}finally{re=null}})(),re)}return{async find(Y){const te=le?X:await ee();return!Y||Object.keys(Y).length===0?te:te.filter(ye=>$p(ye,Y))},async findOne(Y){return(le?X:await ee()).find(ye=>ye.id===Y)??null},async insert(Y){B("insert");const[te]=await pl(T,s,[Y.data]),ye=A(te??Y.data);return t.events.emit("row:created",{tableId:e.id,row:ye}),ee(),ye},async bulkInsert(Y){if(Y.length===0)return[];B("insert");const te=await pl(T,s,Y.map(xe=>xe.data)),ye=(te.length?te:Y.map(xe=>xe.data)).map(A);return ee(),ye},async upsert(Y){B("upsert");const[te]=await ep(T,s,[Y.data]),ye=A(te??Y.data);return ee(),ye},async patch(Y,te){B("update");const ye=te.data,xe=U(ye??{}),m=await Zf(T,s,Y,xe),x=A(m??{...ye??{}});return t.events.emit("row:updated",{tableId:e.id,row:x,prev:x}),ee(),x},async remove(Y){B("delete"),await ml(T,s,Y),t.events.emit("row:deleted",{tableId:e.id,rowId:Y}),ee()},async bulkRemove(Y){if(Y.length!==0){B("delete");for(const te of Y)await ml(T,s,te);ee()}},subscribe(Y){V.add(Y),le?Y(X):ee();let te=null;return b>0&&(te=setInterval(()=>void ee(),b)),()=>{V.delete(Y),te&&clearInterval(te)}},async refresh(){await ee()}}}const Cp='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Ep={id:"datasette-connect",name:"Datasette Connect",type:"source",version:"0.3.0",description:"Connect a live, editable table on any Datasette instance — rows are never stored locally",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-connect.ts"};function Sp(e){Bc(e),e.ui.registerConnector({id:"datasette",label:"Datasette",icon:Cp,order:10,description:"A live, editable table on any Datasette instance",connect:t=>Tp(t)}),e.ui.registerTableButton({id:"datasette:refresh-live",label:"Refresh",icon:"refresh",tooltip:"Re-read this live table from its Datasette instance",visible:t=>t.source?.type==="datasette",onClick:(t,{tableId:r})=>_p(t,r)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:(t,r)=>kp(t,r,e)})}async function _p(e,t){if((await e.store.tables.findOne(t))?.source?.type==="datasette")try{const i=e.store.rows(t);typeof i.refresh=="function"&&await i.refresh();const n=await i.find();e.ui.dialogs.toast(`Reloaded ${n.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}catch(i){const n=i instanceof Ut?i.message:i?.message??String(i);e.ui.dialogs.toast(`Refresh failed: ${n}`,{kind:"error",title:"Refresh"})}}async function Tp(e){const t=Jt.instance??Ap(),r=(n,s)=>e.backend.fetch(n,s),i=await t.open({initialUrl:"https://datasette.io",async onTest(n,s){const a=gn(n),c=await zc(r,a.base,{token:s||void 0});if(a.db&&a.table){await oo(lr(r,s||void 0),a);const p=c.version?` (Datasette ${c.version})`:"";return c.writable?`Reachable${p} — table found, signed in, read-write.`:`Reachable${p} — table found, read-only (no token / not authenticated).`}if(!c.reachable)return`Unreachable: ${c.error??"no response"}`;const u=c.version?` (Datasette ${c.version})`:"";return c.writable?`Reachable${u} — signed in, read-write.`:`Reachable${u} — read-only (no token / not authenticated).`},async onConnect(n,s){const a=gn(n);a.db&&a.table&&await oo(lr(r,s||void 0),a)}});if(i)try{await qc(e,i.url,i.token)}catch(n){const s=n instanceof Ut?n.message:n?.message??String(n);await e.ui.dialogs.alert(s,"Connect Datasette failed")}}function Ap(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function qc(e,t,r){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=gn(t),s=(b,$)=>e.backend.fetch(b,$),a=lr(s,r||void 0),c=await zc(s,n.base,{token:r||void 0});r&&await e.store.settings.upsert({name:Hc(n.base),value:r});let u;try{u=await Uc(a,n,"Connect")}catch(b){const $=b instanceof Ut?b.message:b?.message??String(b);throw new Error(`Couldn't read tables from ${Ni(n.base)}: ${$}`)}if(u===null)return;if(u.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const p=[];for(const b of u){const $=await Ip(e,i,n.base,b,c.writable,r);$!==null&&p.push({tableId:$,c:b})}if(p.length===0)return;const w=c.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${p.length} live table${p.length===1?"":"s"} from Datasette (${w}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:b,c:$}of p)Rp(e,b,n.base,$,r)}async function Ip(e,t,r,i,n,s){const a=(await e.store.tables.find()).filter($=>$.workspaceId===t);let c=`${i.db}/${i.table}`,u=a.find($=>{const _=$.source?.config;return $.source?.type==="datasette"&&_?.base===r&&_?.db===i.db&&_?.table===i.table});if(!u){const $=a.find(_=>_.name.toLowerCase()===c.toLowerCase());if($){const _=await e.ui.dialogs.choice(`A table named "${c}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Connect — table already exists");if(!_||_==="Skip")return null;_==="Overwrite"?u=$:c=Nc(new Set(a.map(T=>T.name)),c)}}let p=i.pks??[];if(p.length===0){const $=lr((_,T)=>e.backend.fetch(_,T),s||void 0);try{p=await tp($,{base:r,db:i.db,table:i.table,query:{}})}catch{p=[]}}const w=u?.id??ot(),b={...u??{},id:w,workspaceId:t,name:c,code:At(`${i.db}-${i.table}`),columns:u?.columns??[],view:u?.view??"table",source:{type:"datasette",writable:n,config:{base:r,db:i.db,table:i.table,pks:p}},updatedAt:Date.now()};return u?await e.store.tables.upsert(b):await e.store.tables.insert(b),w}async function Rp(e,t,r,i,n){const s={base:r,db:i.db,table:i.table,query:{}},a=lr((c,u)=>e.backend.fetch(c,u),n||void 0);try{let c=[],u=!1;try{const A=await es(a,s);c=A.columns,u=A.typed}catch{}const{rows:p}=await Wr(a,s,{maxRows:50,pageSize:50}),w=c.length===0?Zi(p):u?c:Uo(c,p);if(w.length===0)return;const b=await e.store.tables.findOne(t);if(!b)return;const $=b.source?.config?.pks??[];let _=w.map(A=>$.includes(A.field)?{...A,unique:!0,notnull:!0}:A),T={};try{const A=await Bo(a,s),B=No(A,_);_=B.columns,T=B.patch}catch{}T=qo(T,s.base,i.db,i.table),await e.store.tables.patch(t,{columns:_,...T,updatedAt:Date.now()})}catch{}}const Pp=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:qc,init:Sp,meta:Ep},Symbol.toStringTag,{value:"Module"})),Dp={id:"url-source",name:"URL Reference",type:"source",version:"0.1.0",description:'Backs a table with a live read-only fetch of a plain CSV or JSON URL — a "reference" table whose rows are never persisted locally.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/url-source.ts"};function Op(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"url",create:Wc}),e.ui.registerTableButton({id:"url-source:refresh",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this reference from its source URL",visible:t=>t.source?.type==="url",onClick:async(t,{tableId:r})=>{try{const i=t.store.rows(r);typeof i.refresh=="function"&&await i.refresh(),t.ui.dialogs.toast("Reference refreshed.",{kind:"success",title:"Refresh"})}catch(i){t.ui.dialogs.toast(`Refresh failed: ${i.message}`,{kind:"error",title:"Refresh"})}}})}class Wn extends Error{constructor(t){super(`This is a reference (read-only) table — ${t} is not permitted. Import a copy to edit.`),this.name="ReadOnlyReferenceError"}}function jp(e,t){for(const[r,i]of Object.entries(t))if(r!=="data"&&e[r]!==i)return!1;return!0}function zp(e){const t=r=>typeof r=="object"&&r!==null&&!Array.isArray(r);if(Array.isArray(e))return e.filter(t);if(t(e)){for(const r of["rows","records","data"]){const i=e[r];if(Array.isArray(i))return i.filter(t)}for(const r of Object.values(e))if(Array.isArray(r))return r.filter(t)}return[]}function Wc(e,t){const r=e.source?.config??{},i=typeof r.url=="string"?r.url:"",n=r.format==="json"?"json":"csv",s=new Set;let a=[],c=!1,u=null;function p(_){return _.map((T,A)=>({id:`url:${A}`,tableId:e.id,data:T,updatedAt:0}))}async function w(_){let T;try{T=await t.backend.fetch(_)}catch(A){throw new Error(`Could not reach ${i}: ${A?.message??String(A)}`)}if(!T.ok)throw new Error(`Could not load ${i}: HTTP ${T.status} ${T.statusText}`);try{return await dc(T)}catch(A){throw new Error(`Could not read response from ${i}: ${A?.message??String(A)}`)}}async function b(){if(!i)throw new Error("This reference table has no URL configured.");const _=To(i);let T=await w(_);if(lc(T)){const A=cc(_);A&&(T=await w(A))}try{return n==="json"?zp(JSON.parse(T)):ur(T).rows}catch(A){throw new Error(`Could not parse ${n.toUpperCase()} from ${i}: ${A?.message??String(A)}`)}}function $(){return u||(u=(async()=>{try{const _=await b();a=p(_),c=!0;for(const T of s)T(a);return a}finally{u=null}})(),u)}return{async find(_){const T=c?a:await $();return!_||Object.keys(_).length===0?T:T.filter(A=>jp(A,_))},async findOne(_){return(c?a:await $()).find(A=>A.id===_)??null},async insert(){throw new Wn("insert")},async bulkInsert(){throw new Wn("insert")},async upsert(){throw new Wn("upsert")},async patch(){throw new Wn("update")},async remove(){throw new Wn("delete")},async bulkRemove(){throw new Wn("delete")},subscribe(_){return s.add(_),c?_(a):$(),()=>{s.delete(_)}},async refresh(){c=!1,a=[],await $()}}}const Lp=Object.freeze(Object.defineProperty({__proto__:null,ReadOnlyReferenceError:Wn,createUrlCollection:Wc,init:Op,meta:Dp},Symbol.toStringTag,{value:"Module"})),Fp={id:"sql-export",name:"SQL Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-export.ts"};function Mp(){}async function Kc(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),i=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const n of r){const s=await e.store.rows(n.id).find();i.push(Gc(n,s),"")}return i.push("COMMIT;",""),i.join(`
`)}function Vc(e,t){return["-- easyDBAccess table export",`-- table:    ${e.name}`,`-- exported: ${new Date().toISOString()}`,"","BEGIN;","",Gc(e,t),"","COMMIT;",""].join(`
`)}function Gc(e,t){const r=ao(e.code||e.name||`table_${e.id}`),i=['  "__id" TEXT PRIMARY KEY',...e.columns.map(s=>`  ${Bp(s)}`)],n=[`DROP TABLE IF EXISTS "${r}";`,`CREATE TABLE "${r}" (`,i.join(`,
`),");"];if(t.length>0){const a=["__id",...e.columns.map(c=>c.field)].map(c=>`"${ao(c)}"`).join(", ");for(const c of t){const u=[bl(c.id),...e.columns.map(p=>bl(c.data[p.field],p.type))];n.push(`INSERT INTO "${r}" (${a}) VALUES (${u.join(", ")});`)}}return n.join(`
`)}function Bp(e){const t=[`"${ao(e.field)}"`,Np(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function Np(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function bl(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const r=Up(e);return r===null?"NULL":$i(r)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?$i(e.toISOString()):$i(typeof e=="string"?e:JSON.stringify(e))}function Up(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?yl(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(r)return`${r[1]}${r[2]}${r[3]}`;const i=new Date(t);return Number.isFinite(i.getTime())?yl(i):null}return null}function yl(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),r=String(e.getUTCMonth()+1).padStart(2,"0"),i=String(e.getUTCDate()).padStart(2,"0");return`${t}${r}${i}`}function $i(e){return`'${e.replace(/'/g,"''")}'`}function ao(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const Hp=Object.freeze(Object.defineProperty({__proto__:null,init:Mp,meta:Fp,serializeTableAsSql:Vc,serializeWorkspaceAsSql:Kc},Symbol.toStringTag,{value:"Module"})),Yc=/\$(input[.:])?([A-Za-z_][A-Za-z0-9_]*)/g;function wl(...e){const t=new Set;for(const r of e)if(r)for(const i of r.matchAll(Yc))t.add(i[2]);return[...t]}const Xc=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),ki=e=>Xc(e).replace(/"/g,"&quot;").replace(/'/g,"&#39;");function qp(e){return typeof e=="boolean"?e:typeof e=="number"?e!==0:typeof e=="string"?["true","1","yes","y","t","on"].includes(e.trim().toLowerCase()):!1}function Wp(e,t,r,i,n){const s=i?.type??"string",a=Xc(i?.label||e),c=`class="eda-input" data-eda-row="${ki(r)}" data-eda-field="${ki(e)}" data-eda-type="${ki(s)}"`,u=n?" disabled":"";let p;if(s==="boolean")p=`<input type="checkbox" ${c}${qp(t)?" checked":""}${u} />`;else{const w=s==="number"?"number":"text",b=t==null?"":ki(String(t));p=`<input type="${w}" ${c} value="${b}"${u} />`}return`<label class="eda-input-field" title="${a}">${p}<span class="eda-input-label">${a}</span></label>`}function Kp(e,t,r,i={}){return e.replace(Yc,(n,s,a)=>{const c=r[a];if(!c)return"";const u=t.data[c];return s?Wp(c,u,t.id,i.columns?.get(c),i.readonly===!0):u==null?"":String(u)})}function vl(e){return e==null||e===""}function Vp(e,t){const r=Object.entries(t).filter(([,i])=>i!=null&&String(i).trim()!=="");return r.length===0?e:e.filter(i=>r.every(([n,s])=>Li(i.data[n],s)))}function Gp(e,t,r=!0){if(!t)return e;const i=r?1:-1;return[...e].sort((n,s)=>{const a=n.data[t],c=s.data[t],u=vl(a),p=vl(c);if(u||p)return u===p?0:u?1:-1;const w=Number(a),b=Number(c);return!Number.isNaN(w)&&!Number.isNaN(b)?(w-b)*i:String(a).localeCompare(String(c),void 0,{numeric:!0,sensitivity:"base"})*i})}function Qc(e,t){return Gp(Vp(e,t.filters??{}),t.sortColumn,t.sortAsc??!0)}function Yp(e){return!!e&&e.trim().length>0}function Xp(e,t){return t==="raw"||t==="structure"?e.columns:e.columns.filter(r=>r.hidden!==!0)}function Qp(e,t){return t==="raw"||t==="structure"?e:{...e,columns:Xp(e,t)}}function Jp(e,t,r){return r==="structure"?[]:r==="raw"?t:Qc(t,{filters:e.filters??{},sortColumn:e.sortColumn,sortAsc:e.sortAsc})}function Vo(e,t){const r=e.columns.map(n=>n.field),i=e.source!=null;return{name:e.name,title:e.title,columns:e.columns,view:e.view,windowGeometry:e.windowGeometry,sortColumn:e.sortColumn,sortAsc:e.sortAsc,filters:e.filters,labelColumn:e.labelColumn,deletedColumns:e.deletedColumns,info:e.info,source:e.source,origin:e.origin,rows:i?[]:t.map(n=>{const s={};for(const a of r)s[a]=n.data[a];return s})}}const Zp={id:"dump-export",name:"Dump Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file, and — per table — CSV/JSON/SQL with a Raw vs. Visible vs. Structure Only choice.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/dump-export.ts"};function em(e){e.ui.registerFooterButton({id:"export:menu",label:"Export",icon:"download",tooltip:"Export the current workspace (JSON or SQL)",onClick:async(t,r)=>{const i=t.workspaceId();if(!i)return;const{AnchoredMenu:n}=await Zt(async()=>{const{AnchoredMenu:c}=await Promise.resolve().then(()=>Mr);return{AnchoredMenu:c}},void 0),s=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),a=await n.open(s,[{id:"json",label:"JSON dump (.db.json)",icon:"data_object"},{id:"sql",label:"SQL script (.sql)",icon:"storage"}]);if(a)try{if(a==="json"){const c=await is(t);await t.backend.saveFile(`workspace-${i}.db.json`,c,"application/json")}else if(a==="sql"){const c=await Kc(t);await t.backend.saveFile(`workspace-${i}.sql`,c,"application/sql")}}catch(c){t.ui.dialogs.toast(`Export failed: ${c.message}`,{kind:"error",title:"Export"})}}}),e.ui.registerTableButton({id:"table-export:menu",label:"Export",icon:"file_download",tooltip:"Export this table as CSV, JSON, or SQL",onClick:async(t,r)=>{const{AnchoredMenu:i}=await Zt(async()=>{const{AnchoredMenu:p}=await Promise.resolve().then(()=>Mr);return{AnchoredMenu:p}},void 0),n=r.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await i.open(n,[{id:"csv",label:"CSV (.csv)",icon:"table_chart"},{id:"json",label:"JSON (.table.json)",icon:"data_object"},{id:"sql",label:"SQL (.sql)",icon:"storage"}]);if(!s)return;const a=await t.store.tables.findOne(r.tableId);if(!a)return;const c=await t.ui.dialogs.choice(`Export "${a.name}" as ${s.toUpperCase()} — which rows/columns?`,["Visible Data","Raw Data","Structure Only"],"Export table");if(!c)return;const u=c==="Visible Data"?"visible":c==="Raw Data"?"raw":"structure";try{const p=await t.store.rows(a.id).find(),w=Qp(a,u),b=Jp(a,p,u),$=At(a.code||a.name||"table"),_=u!=="structure"&&a.source!=null&&p.length===0;if(s==="csv")_&&t.ui.dialogs.toast(`"${a.name}" is a live table with no local rows — exporting column definitions only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${$}.csv`,Do(w,b),"text/csv");else if(s==="json"){const T=JSON.stringify(Vo(w,b),null,2);await t.backend.saveFile(`${$}.table.json`,T,"application/json")}else s==="sql"&&(_&&t.ui.dialogs.toast(`"${a.name}" is a live table with no local rows — exporting the CREATE TABLE only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${$}.sql`,Vc(w,b),"application/sql"))}catch(p){t.ui.dialogs.toast(`Export failed: ${p.message}`,{kind:"error",title:"Export"})}}})}async function is(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const r=(await e.store.tables.find()).filter(a=>a.workspaceId===t),i=(await e.store.viewTemplates.find()).filter(a=>a.workspaceId===t),n=(await e.store.viewInstances.find()).filter(a=>a.workspaceId===t),s={workspaceId:t,exportedAt:Date.now(),tables:[],viewTemplates:i,viewInstances:n};for(const a of r){const c=await e.store.rows(a.id).find();s.tables.push({name:a.name,columns:a.columns,rows:c.map(u=>u.data),...a.title?{title:a.title}:{},...a.windowGeometry?{windowGeometry:a.windowGeometry}:{},...a.sortColumn?{sortColumn:a.sortColumn,sortAsc:a.sortAsc??!0}:{},...a.filters?{filters:a.filters}:{},...a.labelColumn?{labelColumn:a.labelColumn}:{},...a.info?{info:a.info}:{},...a.deletedColumns?{deletedColumns:a.deletedColumns}:{},...a.source?{source:a.source}:{},...a.origin?{origin:a.origin}:{}})}return JSON.stringify(s,null,2)}const tm=Object.freeze(Object.defineProperty({__proto__:null,init:em,meta:Zp,serializeWorkspace:is},Symbol.toStringTag,{value:"Module"})),nm={id:"gist-sync",name:"Gist Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/gist-sync.ts"},rm="gist:",xl='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>';function im(e){e.ui.registerSettings("gist-sync","Gist Sync",[{key:"user",label:"GitHub user",type:"string",scope:"workspace",description:"GitHub username that owns the gist."},{key:"gist_id",label:"Gist ID",type:"string",scope:"workspace",description:"Leave empty to create a new gist on the first Push."},{key:"gist_token",label:"GitHub token (PAT)",type:"secret",scope:"user",description:'Personal access token with the "gist" scope. Stored on this device only (not synced).'}]),e.ui.registerFooterButton({id:"gist-sync:menu",label:"Gist",icon:xl,tooltip:"Gist sync — push, pull, share…",onClick:async(t,r)=>{const{AnchoredMenu:i}=await Zt(async()=>{const{AnchoredMenu:a}=await Promise.resolve().then(()=>Mr);return{AnchoredMenu:a}},void 0),n=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await i.open(n,[{id:"push",label:"Push",icon:"cloud_upload"},{id:"pull",label:"Pull",icon:"cloud_download"},{id:"share",label:"Share",icon:"share"},{id:"view",label:"View gist",icon:"open_in_new"}]);if(s)try{if(s==="push"||s==="pull"){const a=await i.open(n,[{id:"all",label:"Everything",icon:"sync"},{id:"data",label:"Data only (tables + rows)",icon:"table_rows"},{id:"settings",label:"Settings only (views + settings)",icon:"tune"}]);if(!a)return;const c=a;s==="push"?await dm(t,c):await Zc(t,c)}else s==="share"?await lm(t):s==="view"&&await cm(t)}catch(a){t.ui.dialogs.toast(`Gist ${s} failed: ${a.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerTableButton({id:"gist-sync:table",label:"Gist",icon:xl,tooltip:"Gist sync for this table — push, pull, view file",onClick:async(t,r)=>{const{AnchoredMenu:i}=await Zt(async()=>{const{AnchoredMenu:a}=await Promise.resolve().then(()=>Mr);return{AnchoredMenu:a}},void 0),n=r.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await i.open(n,[{id:"push",label:"Push this table",icon:"cloud_upload"},{id:"pull",label:"Pull this table",icon:"cloud_download"},{id:"view",label:"View gist file",icon:"open_in_new"}]);if(s)try{s==="push"?await um(t,r.tableId):s==="pull"?await hm(t,r.tableId):s==="view"&&await fm(t,r.tableId)}catch(a){t.ui.dialogs.toast(`Gist ${s} failed: ${a.message}`,{kind:"error",title:"Gist sync"})}}})}async function sm(e){const t=new URLSearchParams(location.hash.replace(/^#/,"")).get("gist");if(!t)return;history.replaceState(null,"",location.pathname+location.search);let r;try{r=atob(t)}catch{return}const i=om(r);if(!i){await e.ui.dialogs.alert("The shared gist link is invalid.","Gist sync");return}await e.ui.dialogs.confirm(`Load shared workspace from gist ${i.gistId||"(new)"} (owner: ${i.user})?

This pulls its tables into the current workspace.`,"Gist sync")&&(await Go(e,i),await Zc(e))}async function Jc(e){const t=e.workspaceId();return`${rm}${t??"default"}`}async function Vr(e){const[t,r,i]=await Promise.all([e.settings.get("gist-sync","user"),e.settings.get("gist-sync","gist_id"),e.settings.get("gist-sync","gist_token")]);if(t&&i)return{user:t,gistId:r??"",token:i};const s=(await e.store.settings.findOne(await Jc(e)))?.value;if(s?.user&&s?.token){const a={user:s.user,gistId:s.gistId??"",token:s.token};return await Go(e,a),a}return null}async function Go(e,t){await e.settings.set("gist-sync","user",t.user),await e.settings.set("gist-sync","gist_id",t.gistId),await e.settings.set("gist-sync","gist_token",t.token),await e.store.settings.upsert({name:await Jc(e),value:t})}function om(e){const t={};for(const r of e.split(";")){const i=r.indexOf("=");if(i<0)continue;const n=r.slice(0,i).trim(),s=r.slice(i+1).trim();n&&(t[n]=s)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function Yo(e){const t=await Vr(e);return t||(e.ui.dialogs.toast("Add your GitHub user and token in Settings → Gist Sync, then try again.",{kind:"warning",title:"Gist sync"}),e.ui.openSettings(),null)}function am(e){return`user=${e.user};gist_id=${e.gistId};gist_token=${e.token}`}async function lm(e){const t=await Vr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("Configure a gist and Push first — there is nothing to share yet.","Gist sync");return}const i=`${location.origin+location.pathname}#gist=${encodeURIComponent(btoa(am(t)))}`,{GistShareDialog:n}=await Zt(async()=>{const{GistShareDialog:s}=await import("./gist-share-dialog-BMrGuJ7M.js");return{GistShareDialog:s}},[]);await n.open(i)}async function cm(e){const t=await Vr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist configured yet — Push first.","Gist sync");return}window.open(`https://gist.github.com/${t.user}/${t.gistId}`,"_blank","noopener")}async function dm(e,t="all"){const r=await Yo(e);if(!r)return;const i=e.workspaceId();if(!i)throw new Error("no active workspace");const n=t!=="settings",s=t!=="data",a=(await e.store.tables.find()).filter(A=>A.workspaceId===i);if(n&&a.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const c=1e8,u=1e7,p={},w=[],b=[];if(n)for(const A of a){const B=A.source!=null?[]:await e.store.rows(A.id).find(),U=JSON.stringify(Vo(A,B),null,2),V=`${A.name} (${(U.length/1e6).toFixed(2)} MB)`;U.length>c?w.push(V):U.length>u&&b.push(V),p[`${At(A.name)}.table.json`]={content:U}}if(w.length>0||b.length>0){const A=[];if(w.length>0&&A.push(`Over Gist's 100 MB per-file limit — GitHub will REJECT these:
${w.join(`
`)}`),b.length>0&&A.push(`Large (over 10 MB) — Gist sync will be slow and less reliable:
${b.join(`
`)}`),!await e.ui.dialogs.confirm(`${A.join(`

`)}

To reduce size: remove unnecessary columns, limit the number of rows, or mark the table no-persist/no-sync.

Push anyway?`,"Gist size warning"))return}if(s){const A=(await e.store.viewTemplates.find()).filter(V=>V.workspaceId===i),B=(await e.store.viewInstances.find()).filter(V=>V.workspaceId===i),U=(await e.store.settings.find()).map(V=>({name:V.name,value:V.value}));p["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:i,exportedAt:Date.now(),kind:"easydb-workspace-v1",viewTemplates:A,viewInstances:B,settings:U},null,2)}}let $;if(r.gistId){const A=await fetch(`https://api.github.com/gists/${r.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:p,description:`easyDBAccess workspace: ${i}`})});if(!A.ok)throw new Error(await Br(A));$=await A.json()}else{const A=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${i}`,files:p})});if(!A.ok)throw new Error(await Br(A));$=await A.json(),r.gistId=$.id,await Go(e,r)}const _=$.html_url??`https://gist.github.com/${r.user}/${$.id}`,T=t==="settings"?"settings":t==="data"?`${a.length} table${a.length===1?"":"s"} (data only)`:`${a.length} table${a.length===1?"":"s"}`;e.ui.dialogs.toast(`Pushed ${T}.  ${_}`,{kind:"success",title:"Gist sync"})}async function Zc(e,t="all"){const r=t!=="settings",i=t!=="data",n=await Yo(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const s=e.workspaceId();if(!s)throw new Error("no active workspace");const a=await fetch(`https://api.github.com/gists/${n.gistId}`,{headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json"}});if(!a.ok)throw new Error(await Br(a));const c=await a.json(),u=Object.entries(c.files).filter(([V])=>V.endsWith(".table.json")&&!V.startsWith("_easydb"));if(r&&u.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const p=(await e.store.tables.find()).filter(V=>V.workspaceId===s),w=new Map(p.map(V=>[V.name.toLowerCase(),V]));let b=0;const $=[],_=new Map;if(r){const{TopProgress:V}=await Zt(async()=>{const{TopProgress:le}=await import("./top-progress-D6ZAyEz8.js");return{TopProgress:le}},[]),X=V.begin("Pulling from gist…");try{for(const[le,[re,ee]]of u.entries())try{const Y=await Ui(ee),te=JSON.parse(Y);if(!te.name||!Array.isArray(te.columns))throw new Error("unexpected file shape (missing name/columns)");let ye;const xe=w.get(te.name.toLowerCase());if(xe){if(ye=await e.store.tables.patch(xe.id,{title:te.title,columns:te.columns,...lo(te),updatedAt:Date.now()}),ye.source==null){const m=e.store.rows(xe.id),x=await m.find();await m.bulkRemove(x.map(P=>P.id))}}else ye=await e.store.tables.insert({id:ot(),workspaceId:s,name:te.name,title:te.title,code:At(te.name),columns:te.columns,view:te.view??"table",...lo(te),updatedAt:Date.now()});if(ye.source==null){const m=(te.rows??[]).map(x=>({id:ot(),tableId:ye.id,data:x,updatedAt:Date.now()}));await e.store.rows(ye.id).bulkInsert(m)}_.set(te.name,ye.id),b++}catch(Y){$.push({file:re,error:Y.message})}finally{X.fraction((le+1)/u.length)}}finally{X.done()}}let T=0,A="",B=null;const U=i?c.files["_easydb.workspace.json"]:void 0;if(U)try{const V=await Ui(U),X=JSON.parse(V),le=X.viewTemplates??[],re=X.viewInstances??[],ee=X.settings??[];B=new Set(re.map(Y=>Y.id));for(const Y of le)await e.store.viewTemplates.upsert({...Y,workspaceId:s});for(const Y of re){let te;Y.tableName&&(te=_.get(Y.tableName)??w.get(Y.tableName)?.id),te??=Y.tableId,te&&(await e.store.viewInstances.upsert({...Y,workspaceId:s,tableId:te}),T++)}for(const Y of ee)await e.store.settings.upsert(Y)}catch(V){A=`Workspace metadata import failed: ${V.message}`}if($.length>0){const V=$.map(X=>`• ${X.file}: ${X.error}`).join(`
`);e.ui.dialogs.toast(`Pulled ${b} of ${u.length} tables. ${$.length} failed:
${V}${A?`
${A}`:""}`,{kind:"warning",title:"Gist sync"})}else{const V=T>0?` (+${T} views)`:"",X=t==="settings"?`Pulled settings${V}.`:`Pulled ${b} table${b===1?"":"s"}.${V}`;e.ui.dialogs.toast(X,{kind:"success",title:"Gist sync"}),A&&e.ui.dialogs.toast(A,{kind:"warning",title:"Gist sync"})}$.length===0&&await ed(e,s,{tableNames:r?new Set([..._.keys()].map(V=>V.toLowerCase())):null,viewInstanceIds:B}),document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}function $l(e,t=8){const r=e.slice(0,t).map(n=>`• ${n}`),i=e.length-r.length;return[...r,...i>0?[`• …and ${i} more`]:[]].join(`
`)}async function ed(e,t,r){const i=r.tableNames?(await e.store.tables.find()).filter(u=>u.workspaceId===t&&!r.tableNames.has(u.name.toLowerCase())):[],n=r.viewInstanceIds?(await e.store.viewInstances.find()).filter(u=>u.workspaceId===t&&!r.viewInstanceIds.has(u.id)):[];if(i.length===0&&n.length===0)return;const s=[];if(i.length>0&&s.push(`${i.length} table${i.length===1?"":"s"}:
`+$l(i.map(u=>u.name))),n.length>0&&s.push(`${n.length} view${n.length===1?"":"s"}:
`+$l(n.map(u=>u.name))),!await e.ui.dialogs.confirm(`The gist does not have these local objects:

${s.join(`

`)}

Delete them, so this workspace matches the gist? A table goes with its rows. Keep them if this is local work you have not pushed yet.`,"Delete objects missing from the pull?"))return;for(const u of n)await e.store.viewInstances.remove(u.id);const{deleteTable:c}=await Zt(async()=>{const{deleteTable:u}=await Promise.resolve().then(()=>sb);return{deleteTable:u}},void 0);for(const u of i)await c(u.id);e.ui.dialogs.toast(`Deleted ${i.length} table${i.length===1?"":"s"} and ${n.length} view${n.length===1?"":"s"}.`,{kind:"success",title:"Gist sync"})}async function um(e,t){const r=await Yo(e);if(!r)return;if(!r.gistId){await e.ui.dialogs.alert("No gist yet — use the main Gist button to Push the whole workspace first.","Gist sync");return}const i=await e.store.tables.findOne(t);if(!i)return;const n=i.source!=null?[]:await e.store.rows(t).find(),s=JSON.stringify(Vo(i,n),null,2),a={[`${At(i.name)}.table.json`]:{content:s}},c=await fetch(`https://api.github.com/gists/${r.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:a})});if(!c.ok)throw new Error(await Br(c));e.ui.dialogs.toast(`Pushed "${i.name}" to gist.`,{kind:"success",title:"Gist sync"})}async function hm(e,t){const r=await Vr(e);if(!r||!r.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const i=await e.store.tables.findOne(t);if(!i)return;const n=`${At(i.name)}.table.json`,s=await fetch(`https://api.github.com/gists/${r.gistId}`,{headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json"}});if(!s.ok)throw new Error(await Br(s));const c=(await s.json()).files[n];if(!c){await e.ui.dialogs.alert(`No file "${n}" in the gist for this table.`,"Gist sync");return}const u=await Ui(c),p=JSON.parse(u);if(!p.name||!Array.isArray(p.columns))throw new Error("unexpected file shape (missing name/columns)");if((await e.store.tables.patch(t,{title:p.title,columns:p.columns,...lo(p),updatedAt:Date.now()})).source==null){const b=e.store.rows(t),$=await b.find();await b.bulkRemove($.map(T=>T.id));const _=(p.rows??[]).map(T=>({id:ot(),tableId:t,data:T,updatedAt:Date.now()}));await b.bulkInsert(_)}e.ui.dialogs.toast(`Pulled "${i.name}" from gist.`,{kind:"success",title:"Gist sync"})}async function fm(e,t){const r=await Vr(e);if(!r||!r.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const i=await e.store.tables.findOne(t);if(!i)return;const n=`file-${At(i.name)}-table-json`;window.open(`https://gist.github.com/${r.user}/${r.gistId}#${n}`,"_blank","noopener")}function lo(e){const t={};return e.view!==void 0&&(t.view=e.view),e.windowGeometry&&(t.windowGeometry=e.windowGeometry),e.sortColumn!==void 0&&(t.sortColumn=e.sortColumn),e.sortAsc!==void 0&&(t.sortAsc=e.sortAsc),e.filters!==void 0&&(t.filters=e.filters),e.labelColumn!==void 0&&(t.labelColumn=e.labelColumn),e.deletedColumns!==void 0&&(t.deletedColumns=e.deletedColumns),e.info!==void 0&&(t.info=e.info),e.source!==void 0&&(t.source=e.source),e.origin!==void 0&&(t.origin=e.origin),t}async function Ui(e,t=r=>fetch(r)){if(!e.truncated)return e.content;if(!e.raw_url)throw new Error("GitHub truncated this file but returned no raw_url");const r=await t(e.raw_url);if(!r.ok)throw new Error(`raw fetch failed: ${r.status} ${r.statusText}`);return r.text()}async function Br(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const pm=Object.freeze(Object.defineProperty({__proto__:null,fetchGistFileContent:Ui,init:im,load:sm,meta:nm,offerPrune:ed},Symbol.toStringTag,{value:"Module"})),td="server-sync:url";function nd(e){return`server-sync:etag:${e}`}async function rd(e){const r=(await e.store.settings.findOne(td))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}async function mm(e,t){await e.store.settings.upsert({name:td,value:t.replace(/\/+$/,"")})}async function id(e,t){const i=(await e.store.settings.findOne(nd(t)))?.value;return typeof i=="string"?i:null}async function Qn(e,t,r){await e.store.settings.upsert({name:nd(t),value:r})}function ss(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function kl(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function sd(e,t,r){const i=Ji(r,t),n=(await e.store.tables.find()).filter(a=>a.workspaceId===t);for(const a of n){const c=e.store.rows(a.id),u=await c.find();await c.bulkRemove(u.map(p=>p.id)),await e.store.tables.remove(a.id)}let s=0;for(const a of i){const c=ot(),u=await e.store.tables.insert({id:c,workspaceId:t,name:a.name,code:At(a.name),columns:a.columns,view:"table",...a.windowGeometry?{windowGeometry:a.windowGeometry}:{},...a.sortColumn?{sortColumn:a.sortColumn,sortAsc:a.sortAsc??!0}:{},updatedAt:Date.now()}),p=a.rows.map(w=>({id:ot(),tableId:u.id,data:w,updatedAt:Date.now()}));await e.store.rows(u.id).bulkInsert(p),s++}return s}const gm={id:"server-sync",name:"Server Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/server-sync.ts"};function bm(e){e.ui.registerSettings("server-sync","Server Sync",[{key:"url",label:"Server URL",type:"string",scope:"workspace",description:"Base URL of the sync server, e.g. http://localhost:3000"}]),e.ui.registerFooterButton({id:"server-sync:menu",label:"Sync",icon:"cloud_sync",tooltip:"Server sync — push or pull this workspace",onClick:async(t,r)=>{const{AnchoredMenu:i}=await Zt(async()=>{const{AnchoredMenu:a}=await Promise.resolve().then(()=>Mr);return{AnchoredMenu:a}},void 0),n=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await i.open(n,[{id:"push",label:"Push (↑)",icon:"cloud_upload"},{id:"pull",label:"Pull (↓)",icon:"cloud_download"}]);if(s)try{s==="push"?await ym(t):s==="pull"&&await wm(t)}catch(a){t.ui.dialogs.toast(`${s==="push"?"Push":"Pull"} failed: ${a.message}`,{kind:"error",title:"Server sync"})}}})}async function ym(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await od(e);if(!r)return;const i=await is(e),n=await id(e,t),s={"Content-Type":"application/json"};n&&(s["If-Match"]=`"${n}"`);let a=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:s,body:i});if(a.status===412){const u=await a.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){u.currentEtag&&await Qn(e,t,u.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}a=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:i})}if(!a.ok)throw new Error(await ad(a));const c=ss(a.headers.get("ETag"));c&&await Qn(e,t,c),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${r}.`,{kind:"success",title:"Server sync"})}async function wm(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await od(e);if(!r||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const n=await fetch(`${r}/sync/${encodeURIComponent(t)}`);if(n.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!n.ok)throw new Error(await ad(n));const s=ss(n.headers.get("ETag")),a=await n.json(),c=await sd(e,t,a);s&&await Qn(e,t,s),e.ui.dialogs.toast(`Pulled ${c} table${c===1?"":"s"} from ${r}.`,{kind:"success",title:"Server sync"})}async function od(e){const t=await rd(e);if(t)return t;const r=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!r)return null;try{new URL(r)}catch{return await e.ui.dialogs.alert(`"${r}" is not a valid URL.`,"Server sync"),null}return await mm(e,r),r.replace(/\/+$/,"")}async function ad(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const vm=Object.freeze(Object.defineProperty({__proto__:null,init:bm,meta:gm},Symbol.toStringTag,{value:"Module"})),xm={id:"new-table",name:"New Table",type:"ui",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/new-table-button.ts"};function $m(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const km=Object.freeze(Object.defineProperty({__proto__:null,init:$m,meta:xm},Symbol.toStringTag,{value:"Module"}));function os(e,t="Edit"){const r=document.createElement("button");return r.type="button",r.title=t,r.textContent="✎",r.className="cell-pencil",r.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",r.addEventListener("mouseenter",()=>r.style.color="#374151"),r.addEventListener("mouseleave",()=>r.style.color="#9ca3af"),r.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),e()}),r}function as(e,t){const r=document.createElement("span");return r.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%",e.style.flex="1 1 auto",e.style.minWidth="0",e.style.overflow="hidden",r.append(e,t),r}function ls(e){const t=document.createElement("input");t.type="text",t.value=e.value,t.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0;text-overflow:ellipsis";const r=()=>{e.isLive(t)&&e.onCommit(t.value)};return t.addEventListener("keydown",i=>{i.key==="Enter"?(i.preventDefault(),r()):i.key==="Escape"&&(i.preventDefault(),e.onCancel())}),t.addEventListener("blur",r),setTimeout(()=>{t.focus(),t.select()},0),t}const Cm={id:"cell-date",name:"Cell Date",type:"cell-renderer",version:"0.1.0",description:"Renderer for date columns: a native `<input type=date>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"date\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-date.ts"};function Em(e){customElements.get("cell-date")||customElements.define("cell-date",Sm),e.ui.registerCellRenderer("date","cell-date")}class Sm extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const r=!!t;this._readonly!==r&&(this._readonly=r,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const r=ls({value:this._value==null?"":String(this._value),onCommit:i=>this.commit(i||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:i=>this._editor===i});this.append(r),this._editor=r;return}if(_m(this._value)){const r=document.createElement("span");r.textContent=String(this._value),r.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",Fo(r,`Not a valid date: "${String(this._value)}"`),this.append(this._readonly?r:as(r,this.pencil()));return}if(this._readonly){this.textContent=co(this._value);return}const t=document.createElement("input");t.type="date",t.value=co(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return os(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function co(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function _m(e){return e==null||typeof e=="string"&&e.trim()===""?!1:co(e)===""}const Tm=Object.freeze(Object.defineProperty({__proto__:null,init:Em,meta:Cm},Symbol.toStringTag,{value:"Module"})),Am={id:"cell-datetime",name:"Cell Datetime",type:"cell-renderer",version:"0.1.0",description:"Renderer for datetime columns: a native `<input type=datetime-local>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"datetime\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-datetime.ts"};function Im(e){customElements.get("cell-datetime")||customElements.define("cell-datetime",Rm),e.ui.registerCellRenderer("datetime","cell-datetime")}class Rm extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const r=!!t;this._readonly!==r&&(this._readonly=r,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const r=ls({value:this._value==null?"":String(this._value),onCommit:i=>this.commit(i||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:i=>this._editor===i});this.append(r),this._editor=r;return}if(Pm(this._value)){const r=document.createElement("span");r.textContent=String(this._value),r.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",Fo(r,`Not a valid datetime: "${String(this._value)}"`),this.append(this._readonly?r:as(r,this.pencil()));return}if(this._readonly){this.textContent=uo(this._value).replace("T"," ");return}const t=document.createElement("input");t.type="datetime-local",t.value=uo(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return os(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function uo(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}function Pm(e){return e==null||typeof e=="string"&&e.trim()===""?!1:uo(e)===""}const Dm=Object.freeze(Object.defineProperty({__proto__:null,init:Im,meta:Am},Symbol.toStringTag,{value:"Module"})),Om={id:"cell-boolean",name:"Cell Boolean",type:"cell-renderer",version:"0.1.0",description:`Renderer for boolean columns: a checkbox for true/false, a grayed-out unchecked box for an empty cell (clickable to set true), and red-bordered raw text with a pencil for a stored value that is none of those. Apply by setting a column's renderer to "boolean".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="8 12 11 15 16 9"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-boolean.ts"};function jm(e){customElements.get("cell-boolean")||customElements.define("cell-boolean",zm),e.ui.registerCellRenderer("boolean","cell-boolean")}class zm extends HTMLElement{constructor(){super(...arguments),this._value=!1,this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const r=!!t;this._readonly!==r&&(this._readonly=r,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=ls({value:this._value==null?"":String(this._value),onCommit:s=>this.commit(s),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:s=>this._editor===s});this.append(n),this._editor=n;return}const t=Rc(this._value);if(t==="invalid"){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",Fo(n,`Not a valid boolean: "${String(this._value)}"`),this.append(this._readonly?n:as(n,this.pencil()));return}const r=document.createElement("input");r.type="checkbox",r.checked=t==="true";let i="transform:translateY(1px)";t==="empty"&&(i+=";opacity:0.45",r.title="Empty — no value stored. Click to set true."),this._readonly?r.disabled=!0:(i+=";cursor:pointer",r.addEventListener("change",()=>this.commit(r.checked))),r.style.cssText=i,this.append(r)}pencil(){return os(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Lm=Object.freeze(Object.defineProperty({__proto__:null,init:jm,meta:Om},Symbol.toStringTag,{value:"Module"})),Fm={id:"cell-color",name:"Cell Color",type:"cell-renderer",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2h2.3c2 0 3.6-1.6 3.6-3.6C20.7 6 16.9 3 12 3z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="11" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-color.ts"};function Mm(e){customElements.get("cell-color")||customElements.define("cell-color",Bm),e.ui.registerCellRenderer("color","cell-color")}class Bm extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,r,i){this.value=i}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const r=document.createElement("input");r.type="color",r.value=t,r.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",r.addEventListener("change",()=>this.commit(r.value)),this.append(r)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Nm=Object.freeze(Object.defineProperty({__proto__:null,init:Mm,meta:Fm},Symbol.toStringTag,{value:"Module"})),Um={id:"cell-image",name:"Cell Image",type:"cell-renderer",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-image.ts"};function Hm(e){customElements.get("cell-image")||customElements.define("cell-image",qm),e.ui.registerCellRenderer("image","cell-image")}class qm extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t??"",this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const r=!!t;this._readonly!==r&&(this._readonly=r,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this.style.display="block",this.style.minWidth="0",this.style.overflow="hidden",this._editing){const i=document.createElement("span");i.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const n=ls({value:this._value,onCommit:a=>this.commit(a),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:a=>this._editor===a}),s=document.createElement("button");s.type="button",s.textContent="upload",s.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",s.addEventListener("mousedown",a=>a.preventDefault()),s.addEventListener("click",()=>this.pickFile()),i.append(n,s),this.append(i),this._editor=n;return}const t=document.createElement("span");if(t.style.cssText="display:flex;align-items:center;gap:0.4rem;min-width:0",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const i=document.createElement("img");i.src=this._value,i.alt="",i.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(i)}else{const i=document.createElement("span");if(i.style.color="#9ca3af",i.textContent="no image",t.append(i),!this._readonly){const n=document.createElement("button");n.type="button",n.textContent="upload",n.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",n.addEventListener("click",()=>this.pickFile()),t.append(n)}}this.append(this._readonly?t:as(t,this.pencil()))}pencil(){return os(()=>{this._editing=!0,this.render()},"Edit the image URL")}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const r=t.files?.[0];if(!r)return;const i=new FileReader;i.onload=()=>this.commit(String(i.result)),i.readAsDataURL(r)}),t.click()}commit(t){const r=t!==this._value;this._value=t,this._editing=!1,this.render(),r&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Wm=Object.freeze(Object.defineProperty({__proto__:null,init:Hm,meta:Um},Symbol.toStringTag,{value:"Module"}));/**
 * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu
 * @version v4.16.1
 * @homepage https://jspanel.de/
 * @license MIT
 * @author Stefan Sträßer - info@jspanel.de
 * @author of dialog extension: Michael Daumling - michael@terrapinlogo.com
 * @github https://github.com/Flyer53/jsPanel4.git
 */let M={version:"4.16.1",date:"2022-11-03 09:18",ajaxAlwaysCallbacks:[],autopositionSpacing:4,closeOnEscape:(()=>{document.addEventListener("keydown",e=>{(e.key==="Escape"||e.code==="Escape"||e.key==="Esc")&&M.getPanels(t=>t.classList.contains("jsPanel")).some(t=>t.options.closeOnEscape?typeof t.options.closeOnEscape=="function"?t.options.closeOnEscape.call(t,t):(t.close(null,!0),!0):!1)},!1)})(),defaults:{boxShadow:3,container:"window",contentSize:{width:"400px",height:"200px"},dragit:{cursor:"move",handles:".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",opacity:.8,disableOnMaximized:!0},header:!0,headerTitle:"jsPanel",headerControls:{size:"md"},iconfont:void 0,maximizedMargin:0,minimizeTo:"default",paneltype:"standard",position:{my:"center",at:"center"},resizeit:{handles:"n, e, s, w, ne, se, sw, nw",minWidth:128,minHeight:38},theme:"default"},defaultAutocloseConfig:{time:"8s",progressbar:!0},defaultSnapConfig:{sensitivity:70,trigger:"panel",active:"both"},extensions:{},globalCallbacks:!1,icons:{close:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>',maximize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>',normalize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>',minimize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>',smallify:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>'},idCounter:0,isIE:document.documentMode||!1,pointerdown:"onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],pointermove:"onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],pointerup:"onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"],polyfills:(()=>{Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e==null)throw new TypeError("Cannot convert first argument to object");let t=Object(e);for(let r=1;r<arguments.length;r++){let i=arguments[r];if(i==null)continue;i=Object(i);let n=Object.keys(Object(i));for(let s=0,a=n.length;s<a;s++){let c=n[s],u=Object.getOwnPropertyDescriptor(i,c);u!==void 0&&u.enumerable&&(t[c]=i[c])}}return t}}),Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),r=t.length,i=new Array(r);r--;)i[r]=[t[r],e[t[r]]];return i}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(let r=0;r<this.length;r++)e.call(t,this[r],r,this)}),(function(e){e.forEach(function(t){t.append=t.append||function(){let r=Array.prototype.slice.call(arguments),i=document.createDocumentFragment();r.forEach(function(n){let s=n instanceof Node;i.appendChild(s?n:document.createTextNode(String(n)))}),this.appendChild(i)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){let t=(this.document||this.ownerDocument).querySelectorAll(e),r,i=this;do for(r=t.length;--r>=0&&t.item(r)!==i;);while(r<0&&(i=i.parentElement));return i}),(function(){if(typeof window.CustomEvent=="function")return!1;function e(t,r){r=r||{bubbles:!1,cancelable:!1,detail:void 0};let i=document.createEvent("CustomEvent");return i.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),i}e.prototype=window.Event.prototype,window.CustomEvent=e})(),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(t===void 0||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var r=t>0?t|0:0;return this.substring(r,r+e.length)===e}}),String.prototype.includes||(String.prototype.includes=function(e,t){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return t===void 0&&(t=0),this.indexOf(e,t)!==-1}),String.prototype.repeat||(String.prototype.repeat=function(e){if(this==null)throw new TypeError("can't convert "+this+" to object");var t=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),t.length==0||e==0)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,r-t.length),t}),Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw new TypeError('"this" is null or not defined');let r=Object(this),i=r.length>>>0;if(i===0)return!1;let n=t|0,s=Math.max(n>=0?n:i-Math.abs(n),0);function a(c,u){return c===u||typeof c=="number"&&typeof u=="number"&&isNaN(c)&&isNaN(u)}for(;s<i;){if(a(r[s],e))return!0;s++}return!1}})})(),ziBase:100,colorFilledLight:.81,colorFilledDark:.08,colorFilled:0,colorBrightnessThreshold:.55,colorNames:{default:"b0bec5",secondary:"b0bec5",primary:"01579b",info:"039be5",success:"2e7d32",warning:"f57f17",danger:"dd2c00",light:"e0e0e0",dark:"263238",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",grey50:"fafafa",grey100:"f5f5f5",grey200:"eeeeee",grey300:"e0e0e0",grey400:"bdbdbd",grey500:"9e9e9e",grey600:"757575",grey700:"616161",grey800:"424242",grey900:"212121",gray50:"fafafa",gray100:"f5f5f5",gray200:"eeeeee",gray300:"e0e0e0",gray400:"bdbdbd",gray500:"9e9e9e",gray600:"757575",gray700:"616161",gray800:"424242",gray900:"212121",bluegrey50:"eceff1",bluegrey100:"CFD8DC",bluegrey200:"B0BEC5",bluegrey300:"90A4AE",bluegrey400:"78909C",bluegrey500:"607D8B",bluegrey600:"546E7A",bluegrey700:"455A64",bluegrey800:"37474F",bluegrey900:"263238",bluegray50:"eceff1",bluegray100:"CFD8DC",bluegray200:"B0BEC5",bluegray300:"90A4AE",bluegray400:"78909C",bluegray500:"607D8B",bluegray600:"546E7A",bluegray700:"455A64",bluegray800:"37474F",bluegray900:"263238",red50:"FFEBEE",red100:"FFCDD2",red200:"EF9A9A",red300:"E57373",red400:"EF5350",red500:"F44336",red600:"E53935",red700:"D32F2F",red800:"C62828",red900:"B71C1C",reda100:"FF8A80",reda200:"FF5252",reda400:"FF1744",reda700:"D50000",pink50:"FCE4EC",pink100:"F8BBD0",pink200:"F48FB1",pink300:"F06292",pink400:"EC407A",pink500:"E91E63",pink600:"D81B60",pink700:"C2185B",pink800:"AD1457",pink900:"880E4F",pinka100:"FF80AB",pinka200:"FF4081",pinka400:"F50057",pinka700:"C51162",purple50:"F3E5F5",purple100:"E1BEE7",purple200:"CE93D8",purple300:"BA68C8",purple400:"AB47BC",purple500:"9C27B0",purple600:"8E24AA",purple700:"7B1FA2",purple800:"6A1B9A",purple900:"4A148C",purplea100:"EA80FC",purplea200:"E040FB",purplea400:"D500F9",purplea700:"AA00FF",deeppurple50:"EDE7F6",deeppurple100:"D1C4E9",deeppurple200:"B39DDB",deeppurple300:"9575CD",deeppurple400:"7E57C2",deeppurple500:"673AB7",deeppurple600:"5E35B1",deeppurple700:"512DA8",deeppurple800:"4527A0",deeppurple900:"311B92",deeppurplea100:"B388FF",deeppurplea200:"7C4DFF",deeppurplea400:"651FFF",deeppurplea700:"6200EA",indigo50:"E8EAF6",indigo100:"C5CAE9",indigo200:"9FA8DA",indigo300:"7986CB",indigo400:"5C6BC0",indigo500:"3F51B5",indigo600:"3949AB",indigo700:"303F9F",indigo800:"283593",indigo900:"1A237E",indigoa100:"8C9EFF",indigoa200:"536DFE",indigoa400:"3D5AFE",indigoa700:"304FFE",blue50:"E3F2FD",blue100:"BBDEFB",blue200:"90CAF9",blue300:"64B5F6",blue400:"42A5F5",blue500:"2196F3",blue600:"1E88E5",blue700:"1976D2",blue800:"1565C0",blue900:"0D47A1",bluea100:"82B1FF",bluea200:"448AFF",bluea400:"2979FF",bluea700:"2962FF",lightblue50:"E1F5FE",lightblue100:"B3E5FC",lightblue200:"81D4FA",lightblue300:"4FC3F7",lightblue400:"29B6F6",lightblue500:"03A9F4",lightblue600:"039BE5",lightblue700:"0288D1",lightblue800:"0277BD",lightblue900:"01579B",lightbluea100:"80D8FF",lightbluea200:"40C4FF",lightbluea400:"00B0FF",lightbluea700:"0091EA",cyan50:"E0F7FA",cyan100:"B2EBF2",cyan200:"80DEEA",cyan300:"4DD0E1",cyan400:"26C6DA",cyan500:"00BCD4",cyan600:"00ACC1",cyan700:"0097A7",cyan800:"00838F",cyan900:"006064",cyana100:"84FFFF",cyana200:"18FFFF",cyana400:"00E5FF",cyana700:"00B8D4",teal50:"E0F2F1",teal100:"B2DFDB",teal200:"80CBC4",teal300:"4DB6AC",teal400:"26A69A",teal500:"009688",teal600:"00897B",teal700:"00796B",teal800:"00695C",teal900:"004D40",teala100:"A7FFEB",teala200:"64FFDA",teala400:"1DE9B6",teala700:"00BFA5",green50:"E8F5E9",green100:"C8E6C9",green200:"A5D6A7",green300:"81C784",green400:"66BB6A",green500:"4CAF50",green600:"43A047",green700:"388E3C",green800:"2E7D32",green900:"1B5E20",greena100:"B9F6CA",greena200:"69F0AE",greena400:"00E676",greena700:"00C853",lightgreen50:"F1F8E9",lightgreen100:"DCEDC8",lightgreen200:"C5E1A5",lightgreen300:"AED581",lightgreen400:"9CCC65",lightgreen500:"8BC34A",lightgreen600:"7CB342",lightgreen700:"689F38",lightgreen800:"558B2F",lightgreen900:"33691E",lightgreena100:"CCFF90",lightgreena200:"B2FF59",lightgreena400:"76FF03",lightgreena700:"64DD17",lime50:"F9FBE7",lime100:"F0F4C3",lime200:"E6EE9C",lime300:"DCE775",lime400:"D4E157",lime500:"CDDC39",lime600:"C0CA33",lime700:"AFB42B",lime800:"9E9D24",lime900:"827717",limea100:"F4FF81",limea200:"EEFF41",limea400:"C6FF00",limea700:"AEEA00",yellow50:"FFFDE7",yellow100:"FFF9C4",yellow200:"FFF59D",yellow300:"FFF176",yellow400:"FFEE58",yellow500:"FFEB3B",yellow600:"FDD835",yellow700:"FBC02D",yellow800:"F9A825",yellow900:"F57F17",yellowa100:"FFFF8D",yellowa200:"FFFF00",yellowa400:"FFEA00",yellowa700:"FFD600",amber50:"FFF8E1",amber100:"FFECB3",amber200:"FFE082",amber300:"FFD54F",amber400:"FFCA28",amber500:"FFC107",amber600:"FFB300",amber700:"FFA000",amber800:"FF8F00",amber900:"FF6F00",ambera100:"FFE57F",ambera200:"FFD740",ambera400:"FFC400",ambera700:"FFAB00",orange50:"FFF3E0",orange100:"FFE0B2",orange200:"FFCC80",orange300:"FFB74D",orange400:"FFA726",orange500:"FF9800",orange600:"FB8C00",orange700:"F57C00",orange800:"EF6C00",orange900:"E65100",orangea100:"FFD180",orangea200:"FFAB40",orangea400:"FF9100",orangea700:"FF6D00",deeporange50:"FBE9E7",deeporange100:"FFCCBC",deeporange200:"FFAB91",deeporange300:"FF8A65",deeporange400:"FF7043",deeporange500:"FF5722",deeporange600:"F4511E",deeporange700:"E64A19",deeporange800:"D84315",deeporange900:"BF360C",deeporangea100:"FF9E80",deeporangea200:"FF6E40",deeporangea400:"FF3D00",deeporangea700:"DD2C00",brown50:"EFEBE9",brown100:"D7CCC8",brown200:"BCAAA4",brown300:"A1887F",brown400:"8D6E63",brown500:"795548",brown600:"6D4C41",brown700:"5D4037",brown800:"4E342E",brown900:"3E2723","mdb-default":"2BBBAD","mdb-default-dark":"00695c","mdb-primary":"4285F4","mdb-primary-dark":"0d47a1","mdb-secondary":"aa66cc","mdb-secondary-dark":"9933CC","mdb-danger":"ff4444","mdb-danger-dark":"CC0000","mdb-warning":"ffbb33","mdb-warning-dark":"FF8800","mdb-success":"00C851","mdb-success-dark":"007E33","mdb-info":"33b5e5","mdb-info-dark":"0099CC","mdb-elegant":"2E2E2E","mdb-elegant-dark":"212121","mdb-stylish":"4B515D","mdb-stylish-dark":"3E4551","mdb-unique":"3F729B","mdb-unique-dark":"1C2331","mdb-special":"37474F","mdb-special-dark":"263238"},errorReporting:1,modifier:!1,helper:(()=>{document.addEventListener("keydown",e=>M.modifier=e),document.addEventListener("keyup",()=>M.modifier=!1)})(),usePointerEvents(e=!0){e?(this.pointerdown="onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"]):(this.pointerdown="ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="ontouchend"in window?["touchend","mouseup"]:["mouseup"])},pOcontainer(e){if(e==="window")return document.body;if(typeof e=="string"){let t=document.querySelectorAll(e);return t.length&&t.length>0?t:!1}else{if(e.nodeType===1)return e;if(e.length)return e[0]}return!1},pOcontainment(e){let t=e;if(typeof e=="function"&&(t=e()),typeof t=="number")return[t,t,t,t];if(Array.isArray(t)){if(t.length===1)return[t[0],t[0],t[0],t[0]];if(t.length===2)return t.concat(t);t.length===3&&(t[3]=t[1])}return t},pOsize(e,t){let r=t||this.defaults.contentSize;const i=e.parentElement;if(typeof r=="string"){const n=r.trim().split(" ");r={},r.width=n[0],n.length===2?r.height=n[1]:r.height=n[0]}else r.width&&!r.height?r.height=r.width:r.height&&!r.width&&(r.width=r.height);if(String(r.width).match(/^[\d.]+$/gi))r.width+="px";else if(typeof r.width=="string"&&r.width.endsWith("%"))if(i===document.body)r.width=window.innerWidth*(parseFloat(r.width)/100)+"px";else{const n=window.getComputedStyle(i),s=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth);r.width=(parseFloat(n.width)-s)*(parseFloat(r.width)/100)+"px"}else typeof r.width=="function"&&(r.width=r.width.call(e,e),(typeof r.width=="number"||typeof r.width=="string"&&r.width.match(/^[\d.]+$/gi))&&(r.width+="px"));if(String(r.height).match(/^[\d.]+$/gi))r.height+="px";else if(typeof r.height=="string"&&r.height.endsWith("%"))if(i===document.body)r.height=window.innerHeight*(parseFloat(r.height)/100)+"px";else{const n=window.getComputedStyle(i),s=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth);r.height=(parseFloat(n.height)-s)*(parseFloat(r.height)/100)+"px"}else typeof r.height=="function"&&(r.height=r.height.call(e,e),(typeof r.height=="number"||typeof r.height=="string"&&r.height.match(/^[\d.]+$/gi))&&(r.height+="px"));return r},pOborder(e){let t=[],r=e.trim().replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," ").split(" ");return r.forEach((i,n)=>{(i.startsWith("--")||i.startsWith("var"))&&(r[n]=M.getCssVariableValue(i))}),r.forEach(i=>{M.colorNames[i]?t[2]="#"+M.colorNames[i]:i.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/)?t[1]=i:i.match(/(thin|medium|thick)|(\d*\.?\d*(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vmax|vmin|vb|vi|px|cm|mm|Q|in|pc|pt))/)?t[0]=i:t[2]=i}),t[0]||(t[0]="medium"),t[1]||(t[1]="solid"),t[2]||(t[2]=""),t},pOheaderControls(e){if(typeof e=="string"){let t={},r=e.toLowerCase(),i=r.match(/xl|lg|md|sm|xs/),n=r.match(/closeonly|none/);return i&&(t.size=i[0]),n&&(t=Object.assign({},t,{maximize:"remove",normalize:"remove",minimize:"remove",smallify:"remove"}),n[0]==="none"&&(t.close="remove")),Object.assign({},this.defaults.headerControls,t)}else return Object.assign({},this.defaults.headerControls,e)},pOtheme(e){e=e.trim();let t,r="";if(e.match(/^(rgb|hsl|var)/)){let i=e.indexOf(")");t=e.slice(0,i+1).replace(/\s+/g,""),t.startsWith("var")&&(t=M.getCssVariableValue(t)),r=e.slice(i+1,e.length).trim()}else if(e.match(/^(#|\w|--)/)){let i=e.indexOf(" ");i>0?(t=e.slice(0,i+1).replace(/\s+/g,""),r=e.slice(i+1,e.length).trim()):t=e,t.startsWith("--")&&(t=M.getCssVariableValue(t))}if(t.match(/^([\da-f]{3}|[\da-f]{6})$/gi)&&(t="#"+t),r.startsWith("fillcolor")){let i=r.indexOf(" ");r=r.slice(i+1,r.length).trim().replace(/\s+/g,""),r.match(/^([\da-f]{3}|[\da-f]{6})$/gi)?r="#"+r:M.colorNames[r]?r="#"+M.colorNames[r]:r.match(/^(--|var)/)?r=M.getCssVariableValue(r):r="#fff"}return{color:t,colors:!1,filling:r}},color(e){let t=e.toLowerCase(),r,i,n,s,a,c,u,p,w,b={};const $=/^#?([\da-f]{3}|[\da-f]{6})$/gi,_=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,T=/^hsla?\((\d{1,3}),(\d{1,3}%),(\d{1,3}%),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,A=this.colorNames;return A[t]&&(t=A[t]),t.match($)!==null?(t=t.replace("#",""),t.length%2===1?(r=t.slice(0,1).repeat(2),i=t.slice(1,2).repeat(2),n=t.slice(2,3).repeat(2),b.rgb={r:parseInt(r,16),g:parseInt(i,16),b:parseInt(n,16)},b.hex=`#${r}${i}${n}`):(b.rgb={r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)},b.hex=`#${t}`),w=this.rgbToHsl(b.rgb.r,b.rgb.g,b.rgb.b),b.hsl=w,b.rgb.css=`rgb(${b.rgb.r},${b.rgb.g},${b.rgb.b})`):t.match(_)?(u=_.exec(t),b.rgb={css:t,r:u[1],g:u[2],b:u[3]},b.hex=this.rgbToHex(u[1],u[2],u[3]),w=this.rgbToHsl(u[1],u[2],u[3]),b.hsl=w):t.match(T)?(u=T.exec(t),s=u[1]/360,a=u[2].slice(0,u[2].length-1)/100,c=u[3].slice(0,u[3].length-1)/100,p=this.hslToRgb(s,a,c),b.rgb={css:`rgb(${p[0]},${p[1]},${p[2]})`,r:p[0],g:p[1],b:p[2]},b.hex=this.rgbToHex(b.rgb.r,b.rgb.g,b.rgb.b),b.hsl={css:`hsl(${u[1]},${u[2]},${u[3]})`,h:u[1],s:u[2],l:u[3]}):(b.hex="#f5f5f5",b.rgb={css:"rgb(245,245,245)",r:245,g:245,b:245},b.hsl={css:"hsl(0,0%,96%)",h:0,s:"0%",l:"96%"}),b},calcColors(e){const t=this.colorBrightnessThreshold,r=this.color(e),i=this.lighten(e,this.colorFilledLight),n=this.darken(e,this.colorFilled),s=this.perceivedBrightness(e)<=t?"#ffffff":"#000000",a=this.perceivedBrightness(i)<=t?"#ffffff":"#000000",c=this.perceivedBrightness(n)<=t?"#ffffff":"#000000",u=this.lighten(e,this.colorFilledDark),p=this.perceivedBrightness(u)<=t?"#ffffff":"#000000";return[r.hsl.css,i,n,s,a,c,u,p]},darken(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i-i*t)+"%";return`hsl(${r.h},${r.s},${n})`},lighten(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i+(100-i)*t)+"%";return`hsl(${r.h},${r.s},${n})`},hslToRgb(e,t,r){let i,n,s;if(t===0)i=n=s=r;else{let a=(p,w,b)=>(b<0&&(b+=1),b>1&&(b-=1),b<.16666666666666666?p+(w-p)*6*b:b<.5?w:b<.6666666666666666?p+(w-p)*(.6666666666666666-b)*6:p),c=r<.5?r*(1+t):r+t-r*t,u=2*r-c;i=a(u,c,e+1/3),n=a(u,c,e),s=a(u,c,e-1/3)}return[Math.round(i*255),Math.round(n*255),Math.round(s*255)]},rgbToHsl(e,t,r){e/=255,t/=255,r/=255;let i=Math.max(e,t,r),n=Math.min(e,t,r),s,a,c=(i+n)/2;if(i===n)s=a=0;else{let u=i-n;switch(a=c>.5?u/(2-i-n):u/(i+n),i){case e:s=(t-r)/u+(t<r?6:0);break;case t:s=(r-e)/u+2;break;case r:s=(e-t)/u+4;break}s/=6}return s=Math.round(s*360),a=Math.round(a*100)+"%",c=Math.round(c*100)+"%",{css:"hsl("+s+","+a+","+c+")",h:s,s:a,l:c}},rgbToHex(e,t,r){let i=Number(e).toString(16),n=Number(t).toString(16),s=Number(r).toString(16);return i.length===1&&(i=`0${i}`),n.length===1&&(n=`0${n}`),s.length===1&&(s=`0${s}`),`#${i}${n}${s}`},perceivedBrightness(e){const t=this.color(e).rgb;return t.r/255*.2126+t.g/255*.7152+t.b/255*.0722},pOposition(e){let t={},r=e.trim().split(/\s+/),i=r.filter(a=>a.match(/^(down|right|up|left)$/i));i.length&&(t.autoposition=i[0],r.splice(r.indexOf(i[0]),1));let n=r.filter(a=>a.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i));n.length?(t.my=n[0],t.at=n[1]||n[0],r.splice(r.indexOf(n[0]),1),n[1]&&r.splice(r.indexOf(n[1]),1)):(t.my="center",t.at="center");let s=r.filter(a=>a.match(/^[+-]?\d*\.?\d+[a-z%]*$/i));return s.length&&(t.offsetX=s[0].match(/^[+-]?\d*\.?\d+$/i)?`${s[0]}px`:s[0],s[1]?t.offsetY=s[1].match(/^[+-]?\d*\.?\d+$/i)?`${s[1]}px`:s[1]:t.offsetY=t.offsetX,r.splice(r.indexOf(s[0]),1),s[1]&&r.splice(r.indexOf(s[1]),1)),r.length&&(t.of=r.join(" ")),t},position(e,t){if(!t)return e.style.opacity=1,e;typeof t=="string"?t=Object.assign({},this.defaults.position,this.pOposition(t)):t=Object.assign({},this.defaults.position,t),["my","at","of"].forEach(A=>{typeof t[A]=="function"&&(t[A]=t[A].call(e,e))}),e.options.container==="window"&&(e.style.position="fixed"),typeof e=="string"?e=document.querySelector(e):Object.getPrototypeOf(e).jquery&&(e=e[0]);const r=e.options.container==="window"?"window":e.parentElement,i=e.getBoundingClientRect(),n=e.parentElement.getBoundingClientRect(),s=r==="window"?{left:0,top:0,width:document.documentElement.clientWidth,height:window.innerHeight}:{width:n.width,height:n.height,left:n.left,top:n.top},a=r==="window"?{x:1,y:1}:{x:s.width/r.offsetWidth,y:s.height/r.offsetHeight},c=r==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:window.getComputedStyle(r);s.width-=(parseFloat(c.borderLeftWidth)+parseFloat(c.borderRightWidth))*a.x,s.height-=(parseFloat(c.borderTopWidth)+parseFloat(c.borderBottomWidth))*a.y;let u;t.of?typeof t.of=="string"?u=t.of==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:document.querySelector(t.of).getBoundingClientRect():Object.getPrototypeOf(t.of).jquery?u=t.of[0].getBoundingClientRect():u=t.of.getBoundingClientRect():u=s;let p=this.getScrollbarWidth(document.body),w=this.getScrollbarWidth(e.parentElement),b="0px";t.my.startsWith("left-")?t.at.startsWith("left-")?t.of?b=u.left-s.left-parseFloat(c.borderLeftWidth)+"px":b="0px":t.at.startsWith("center")?t.of?b=u.left-s.left-parseFloat(c.borderLeftWidth)+u.width/2+"px":b=s.width/2+"px":t.at.startsWith("right-")&&(t.of?b=u.left-s.left-parseFloat(c.borderLeftWidth)+u.width+"px":b=s.width+"px"):t.my.startsWith("center")?t.at.startsWith("left-")?t.of?b=u.left-s.left-parseFloat(c.borderLeftWidth)-i.width/2+"px":b=-i.width/2+"px":t.at.startsWith("center")?t.of?b=u.left-s.left-parseFloat(c.borderLeftWidth)-(i.width-u.width)/2+"px":b=s.width/2-i.width/2+"px":t.at.startsWith("right-")&&(t.of?b=u.left-s.left-parseFloat(c.borderLeftWidth)+(u.width-i.width/2)+"px":b=s.width-i.width/2+"px"):t.my.startsWith("right-")&&(t.at.startsWith("left-")?t.of?b=u.left-s.left-parseFloat(c.borderLeftWidth)-i.width+"px":b=-i.width+"px":t.at.startsWith("center")?t.of?b=u.left-s.left-parseFloat(c.borderLeftWidth)-i.width+u.width/2+"px":b=s.width/2-i.width+"px":t.at.startsWith("right-")&&(t.of?b=u.left-s.left-parseFloat(c.borderLeftWidth)+u.width-i.width+"px":b=s.width-i.width+"px",r!=="window"&&(b=parseFloat(b)-w.y+"px")));let $="0px";t.my.endsWith("-top")?t.at.endsWith("-top")?t.of?$=u.top-s.top-parseFloat(c.borderTopWidth)+"px":$="0px":t.at.endsWith("center")?t.of?$=u.top-s.top-parseFloat(c.borderTopWidth)+u.height/2+"px":$=s.height/2+"px":t.at.endsWith("-bottom")&&(t.of?$=u.top-s.top-parseFloat(c.borderTopWidth)+u.height+"px":$=s.height+"px"):t.my.endsWith("center")?t.at.endsWith("-top")?t.of?$=u.top-s.top-parseFloat(c.borderTopWidth)-i.height/2+"px":$=-i.height/2+"px":t.at.endsWith("center")?t.of?$=u.top-s.top-parseFloat(c.borderTopWidth)-i.height/2+u.height/2+"px":$=s.height/2-i.height/2+"px":t.at.endsWith("-bottom")&&(t.of?$=u.top-s.top-parseFloat(c.borderTopWidth)-i.height/2+u.height+"px":$=s.height-i.height/2+"px"):t.my.endsWith("-bottom")&&(t.at.endsWith("-top")?t.of?$=u.top-s.top-parseFloat(c.borderTopWidth)-i.height+"px":$=-i.height+"px":t.at.endsWith("center")?t.of?$=u.top-s.top-parseFloat(c.borderTopWidth)-i.height+u.height/2+"px":$=s.height/2-i.height+"px":t.at.endsWith("-bottom")&&(t.of?$=u.top-s.top-parseFloat(c.borderTopWidth)-i.height+u.height+"px":$=s.height-i.height+"px",r!=="window"?$=parseFloat($)-w.x+"px":$=parseFloat($)-p.x+"px")),e.style.left=a.x===1?b:parseFloat(b)/a.x+"px",e.style.top=a.y===1?$:parseFloat($)/a.y+"px";let _=getComputedStyle(e),T={left:_.left,top:_.top};return t.autoposition&&t.my===t.at&&["left-top","center-top","right-top","left-bottom","center-bottom","right-bottom"].indexOf(t.my)>=0&&(T=this.applyPositionAutopos(e,T,t)),(t.offsetX||t.offsetY)&&(T=this.applyPositionOffset(e,T,t)),(t.minLeft||t.minTop||t.maxLeft||t.maxTop)&&(T=this.applyPositionMinMax(e,T,t)),t.modify&&(T=this.applyPositionModify(e,T,t)),typeof e.options.opacity=="number"?e.style.opacity=e.options.opacity:e.style.opacity=1,e},applyPositionAutopos(e,t,r){const i=`${r.my}-${r.autoposition.toLowerCase()}`;e.classList.add(i);const n=Array.prototype.slice.call(document.querySelectorAll(`.${i}`)),s=n.indexOf(e);if(n.length>1){switch(r.autoposition){case"down":n.forEach((a,c)=>{c>0&&c<=s&&(t.top=parseFloat(t.top)+n[--c].getBoundingClientRect().height+M.autopositionSpacing+"px")});break;case"up":n.forEach((a,c)=>{c>0&&c<=s&&(t.top=parseFloat(t.top)-n[--c].getBoundingClientRect().height-M.autopositionSpacing+"px")});break;case"right":n.forEach((a,c)=>{c>0&&c<=s&&(t.left=parseFloat(t.left)+n[--c].getBoundingClientRect().width+M.autopositionSpacing+"px")});break;case"left":n.forEach((a,c)=>{c>0&&c<=s&&(t.left=parseFloat(t.left)-n[--c].getBoundingClientRect().width-M.autopositionSpacing+"px")});break}e.style.left=t.left,e.style.top=t.top}return{left:t.left,top:t.top}},applyPositionOffset(e,t,r){["offsetX","offsetY"].forEach(n=>{r[n]?(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),isNaN(r[n])===!1&&(r[n]=`${r[n]}px`)):r[n]="0px"}),e.style.left=`calc(${e.style.left} + ${r.offsetX})`,e.style.top=`calc(${e.style.top} + ${r.offsetY})`;const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionMinMax(e,t,r){if(["minLeft","minTop","maxLeft","maxTop"].forEach(n=>{r[n]&&(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),(Number.isInteger(r[n])||r[n].match(/^\d+$/))&&(r[n]=`${r[n]}px`))}),r.minLeft){e.style.left=r.minLeft;let n=getComputedStyle(e).left;parseFloat(n)<parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.minTop){e.style.top=r.minTop;let n=getComputedStyle(e).top;parseFloat(n)<parseFloat(t.top)?e.style.top=t.top:t.top=n}if(r.maxLeft){e.style.left=r.maxLeft;let n=getComputedStyle(e).left;parseFloat(n)>parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.maxTop){e.style.top=r.maxTop;let n=getComputedStyle(e).top;parseFloat(n)>parseFloat(t.top)?e.style.top=t.top:t.top=n}const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionModify(e,t,r){if(r.modify&&typeof r.modify=="function"){const n=r.modify.call(t,t,r);e.style.left=Number.isInteger(n.left)||n.left.match(/^\d+$/)?`${n.left}px`:n.left,e.style.top=Number.isInteger(n.top)||n.top.match(/^\d+$/)?`${n.top}px`:n.top}const i=getComputedStyle(e);return{left:i.left,top:i.top}},autopositionRemaining(e){let t,r=e.options.container;["left-top-down","left-top-right","center-top-down","right-top-down","right-top-left","left-bottom-up","left-bottom-right","center-bottom-up","right-bottom-up","right-bottom-left"].forEach(i=>{e.classList.contains(i)&&(t=i)}),t&&(r==="window"?document.body:typeof r=="string"?document.querySelector(r):r).querySelectorAll(`.${t}`).forEach(n=>n.reposition())},getThemeDetails(e){const t=this.pOtheme(e);if(t.color.startsWith("bootstrap-")){let r=t.color.indexOf("-"),i=document.createElement("button");i.className="btn btn"+t.color.slice(r),document.body.appendChild(i),t.color=getComputedStyle(i).backgroundColor.replace(/\s+/gi,""),document.body.removeChild(i),i=void 0}return t.colors=this.calcColors(t.color),t},clearTheme(e,t){return e.content.classList.remove("jsPanel-content-filled","jsPanel-content-filledlight"),e.header.classList.remove("jsPanel-hdr-light"),e.header.classList.remove("jsPanel-hdr-dark"),e.style.backgroundColor="",this.setStyles(e.headertoolbar,{boxShadow:"",width:"",marginLeft:"",borderTopColor:"transparent"}),this.setStyles(e.content,{background:"",borderTopColor:"transparent"}),e.header.style.background="",Array.prototype.slice.call(e.controlbar.querySelectorAll(".jsPanel-icon")).concat([e.headerlogo,e.headertitle,e.headertoolbar,e.content]).forEach(r=>r.style.color=""),t&&t.call(e,e),e},applyColorTheme(e,t){if(e.style.backgroundColor=t.colors[0],e.header.style.backgroundColor=t.colors[0],e.header.style.color=t.colors[3],[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(r=>e.querySelector(r).style.color=t.colors[3]),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(r=>r.style.color=t.colors[3]),typeof e.options.theme=="string"&&t.filling==="filled"&&(e.content.style.borderTop=t.colors[3]==="#000000"?"1px solid rgba(0,0,0,0.15)":"1px solid rgba(255,255,255,0.15)"),t.colors[3]==="#000000"?e.header.classList.add("jsPanel-hdr-light"):e.header.classList.add("jsPanel-hdr-dark"),t.filling)switch(t.filling){case"filled":this.setStyles(e.content,{backgroundColor:t.colors[2],color:t.colors[3]});break;case"filledlight":e.content.style.backgroundColor=t.colors[1];break;case"filleddark":this.setStyles(e.content,{backgroundColor:t.colors[6],color:t.colors[7]});break;default:e.content.style.backgroundColor=t.filling,e.content.style.color=this.perceivedBrightness(t.filling)<=this.colorBrightnessThreshold?"#fff":"#000"}return e},applyCustomTheme(e,t){let r={bgPanel:"#ffffff",bgContent:"#ffffff",bgFooter:"#f5f5f5",colorHeader:"#000000",colorContent:"#000000",colorFooter:"#000000",border:void 0,borderRadius:void 0},i=typeof t=="object"?Object.assign(r,t):r,n=i.bgPanel,s=i.bgContent,a=i.colorHeader,c=i.colorContent,u=i.bgFooter,p=i.colorFooter;return this.colorNames[n]?e.style.background="#"+this.colorNames[n]:e.style.background=this.getCssVariableValue(n),this.colorNames[a]&&(a="#"+this.colorNames[a]),[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach($=>e.querySelector($).style.color=this.getCssVariableValue(a)),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach($=>$.style.color=this.getCssVariableValue(a)),this.colorNames[s]?e.content.style.background="#"+this.colorNames[s]:e.content.style.background=this.getCssVariableValue(s),this.colorNames[c]?e.content.style.color="#"+this.colorNames[c]:e.content.style.color=this.getCssVariableValue(c),this.perceivedBrightness(a)>this.colorBrightnessThreshold?e.header.classList.add("jsPanel-hdr-dark"):e.header.classList.add("jsPanel-hdr-light"),this.perceivedBrightness(c)>this.colorBrightnessThreshold?e.content.style.borderTop="1px solid rgba(255,255,255,0.15)":e.content.style.borderTop="1px solid rgba(0,0,0,0.15)",this.colorNames[u]?e.footer.style.background="#"+this.colorNames[u]:e.footer.style.background=this.getCssVariableValue(u),this.colorNames[p]?e.footer.style.color="#"+this.colorNames[p]:e.footer.style.color=this.getCssVariableValue(p),i.border&&e.setBorder(i.border),i.borderRadius&&(e.options.borderRadius=void 0,e.setBorderRadius(i.borderRadius)),e},getCssVariableValue(e){if(e.startsWith("--"))return getComputedStyle(document.documentElement).getPropertyValue(e).replace(/\s+/g,"");if(e.startsWith("var")){let t=e.slice(e.indexOf("(")+1,e.indexOf(")"));return getComputedStyle(document.documentElement).getPropertyValue(t).replace(/\s+/g,"")}return e},getScrollbarWidth(e=document.body){if(e===document.body)return{y:window.innerWidth-document.documentElement.clientWidth,x:window.innerHeight-document.documentElement.clientHeight};{let t=getComputedStyle(e);return{y:e.offsetWidth-e.clientWidth-parseFloat(t.borderRightWidth)-parseFloat(t.borderLeftWidth),x:e.offsetHeight-e.clientHeight-parseFloat(t.borderBottomWidth)-parseFloat(t.borderTopWidth)}}},remClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.remove(r)),e},setClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.add(r)),e},setStyles(e,t){for(const[r,i]of Object.entries(t))e.style[r]=typeof i=="string"?M.getCssVariableValue(i):i;return e},setStyle(e,t){return this.setStyles.call(e,e,t)},strToHtml(e){return document.createRange().createContextualFragment(e)},toggleClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.contains(r)?e.classList.remove(r):e.classList.add(r)),e},emptyNode(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e},addScript(e,t="application/javascript",r){if(!document.querySelector(`script[src="${e}"]`)){const i=document.createElement("script");i.src=e,i.type=t,document.head.appendChild(i),r&&(i.onload=r)}},ajax(e,t){let r,i,n=new XMLHttpRequest;const s={method:"GET",async:!0,user:"",pwd:"",done:function(){if(t){let a=M.strToHtml(this.responseText);r.urlSelector&&(a=a.querySelector(r.urlSelector)),t.contentRemove(),t.content.append(a)}},autoresize:!0,autoreposition:!0};if(t&&typeof e=="string")r=Object.assign({},s,{url:e});else if(typeof e=="object"&&e.url)r=Object.assign({},s,e),r.url=e.url,r.async===!1&&(r.timeout=0,r.withCredentials&&(r.withCredentials=void 0),r.responseType&&(r.responseType=void 0));else{this.errorReporting&&M.errorpanel("XMLHttpRequest seems to miss the <mark>url</mark> parameter!");return}i=r.url.trim().split(/\s+/),r.url=encodeURI(i[0]),i.length>1&&(i.shift(),r.urlSelector=i.join(" ")),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?t?r.done.call(n,n,t):r.done.call(n,n):r.fail&&(t?r.fail.call(n,n,t):r.fail.call(n,n)),r.always&&(t?r.always.call(n,n,t):r.always.call(n,n)),t&&(r.autoresize||r.autoreposition)&&M.ajaxAutoresizeAutoreposition(t,r),M.ajaxAlwaysCallbacks.length&&M.ajaxAlwaysCallbacks.forEach(a=>{t?a.call(n,n,t):a.call(n,n)}))},n.open(r.method,r.url,r.async,r.user,r.pwd),n.timeout=r.timeout||0,r.withCredentials&&(n.withCredentials=r.withCredentials),r.responseType&&(n.responseType=r.responseType),r.beforeSend&&(t?r.beforeSend.call(n,n,t):r.beforeSend.call(n,n)),r.data?n.send(r.data):n.send(null)},fetch(e,t){let r;const i={bodyMethod:"text",autoresize:!0,autoreposition:!0,done:function(s,a){if(a){let c=M.strToHtml(s);a.contentRemove(),a.content.append(c)}}};if(t&&typeof e=="string")r=Object.assign({},i,{resource:encodeURI(e)});else if(typeof e=="object"&&e.resource)r=Object.assign({},i,e),r.resource=encodeURI(e.resource);else{this.errorReporting&&M.errorpanel("Fetch Request seems to miss the <mark>resource</mark> parameter!");return}const n=r.fetchInit||{};r.beforeSend&&(t?r.beforeSend.call(e,e,t):r.beforeSend.call(e,e)),fetch(r.resource,n).then(s=>{if(s.ok)return s[r.bodyMethod]()}).then(s=>{t?r.done.call(s,s,t):r.done.call(s,s),t&&(r.autoresize||r.autoreposition)&&M.ajaxAutoresizeAutoreposition(t,r)})},ajaxAutoresizeAutoreposition(e,t){const r=e.options.contentSize;if(typeof r=="string"&&r.match(/auto/i)){const i=r.split(" "),n=Object.assign({},{width:i[0],height:i[1]});t.autoresize&&e.resize(n),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}else if(typeof r=="object"&&(r.width==="auto"||r.height==="auto")){const i=Object.assign({},r);t.autoresize&&e.resize(i),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}},createPanelTemplate(e=!0){const t=document.createElement("div");return t.className="jsPanel",t.style.left="0",t.style.top="0",e&&["close","maximize","normalize","minimize","smallify"].forEach(r=>{t.setAttribute(`data-btn${r}`,"enabled")}),t.innerHTML=`<div class="jsPanel-hdr">
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
                            </div>`,e},createSnapArea(e,t,r){const i=document.createElement("div"),n=e.parentElement;i.className=`jsPanel-snap-area jsPanel-snap-area-${t}`,t==="lt"||t==="rt"||t==="rb"||t==="lb"?(i.style.width=r+"px",i.style.height=r+"px"):t==="ct"||t==="cb"?i.style.height=r+"px":(t==="lc"||t==="rc")&&(i.style.width=r+"px"),n!==document.body&&(i.style.position="absolute"),document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${t}`)||e.parentElement.appendChild(i)},removeSnapAreas(){document.querySelectorAll(".jsPanel-snap-area").forEach(e=>e.parentElement.removeChild(e))},extend(e){if(Object.prototype.toString.call(e)==="[object Object]")for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this.extensions[t]=e[t])},getPanels(e=function(){return this.classList.contains("jsPanel-standard")}){return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(t=>e.call(t,t)).sort((t,r)=>r.style.zIndex-t.style.zIndex)},processCallbacks(e,t,r="some",i,n){if(typeof t=="function"&&(t=[t]),r)return t[r](s=>s.call(e,e,i,n));t.forEach(s=>s.call(e,e,i,n))},resetZi(){this.zi=((e=M.ziBase)=>{let t=e;return{next:()=>t++}})(),Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((e,t)=>e.style.zIndex-t.style.zIndex).forEach(e=>e.style.zIndex=M.zi.next())},errorpanel(e){this.create({paneltype:"error",dragit:!1,resizeit:!1,theme:{bgPanel:"white",bgContent:"white",colorHeader:"rebeccapurple",colorContent:"#333333",border:"2px solid rebeccapurple"},borderRadius:".33rem",headerControls:"closeonly xs",headerTitle:"&#9888; jsPanel Error",contentSize:{width:"50%",height:"auto"},position:"center-top 0 5 down",animateIn:"jsPanelFadeIn",content:`<div class="jsPanel-error-content-separator"></div><p>${e}</p>`})},create(e={},t){M.zi||(M.zi=((m=M.ziBase)=>{let x=m;return{next:()=>x++}})()),e.config?(e=Object.assign({},this.defaults,e.config,e),delete e.config):e=Object.assign({},this.defaults,e),e.id?typeof e.id=="function"&&(e.id=e.id()):e.id=`jsPanel-${M.idCounter+=1}`;const r=document.getElementById(e.id);if(r!==null){if(r.classList.contains("jsPanel")&&r.front(),this.errorReporting){let m=`&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${e.id}</mark> already exists in the document.`;M.errorpanel(m)}return!1}let i=this.pOcontainer(e.container);if(typeof i=="object"&&i.length&&i.length>0&&(i=i[0]),!i)return this.errorReporting&&M.errorpanel("&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist"),!1;["onbeforeclose","onbeforemaximize","onbeforeminimize","onbeforenormalize","onbeforesmallify","onbeforeunsmallify","onclosed","onfronted","onmaximized","onminimized","onnormalized","onsmallified","onstatuschange","onunsmallified"].forEach(m=>{e[m]?typeof e[m]=="function"&&(e[m]=[e[m]]):e[m]=[]});const n=e.template||this.createPanelTemplate();n.options=e,n.closetimer=void 0,n.status="initialized",n.currentData={},n.header=n.querySelector(".jsPanel-hdr"),n.headerbar=n.header.querySelector(".jsPanel-headerbar"),n.titlebar=n.header.querySelector(".jsPanel-titlebar"),n.headerlogo=n.headerbar.querySelector(".jsPanel-headerlogo"),n.headertitle=n.headerbar.querySelector(".jsPanel-title"),n.controlbar=n.headerbar.querySelector(".jsPanel-controlbar"),n.headertoolbar=n.header.querySelector(".jsPanel-hdr-toolbar"),n.content=n.querySelector(".jsPanel-content"),n.footer=n.querySelector(".jsPanel-ftr"),n.snappableTo=!1,n.snapped=!1,n.droppableTo=!1,n.progressbar=n.autocloseProgressbar=n.querySelector(".jsPanel-progressbar");const s=new CustomEvent("jspanelloaded",{detail:e.id,cancelable:!0}),a=new CustomEvent("jspanelstatuschange",{detail:e.id,cancelable:!0}),c=new CustomEvent("jspanelbeforenormalize",{detail:e.id,cancelable:!0}),u=new CustomEvent("jspanelnormalized",{detail:e.id,cancelable:!0}),p=new CustomEvent("jspanelbeforemaximize",{detail:e.id,cancelable:!0}),w=new CustomEvent("jspanelmaximized",{detail:e.id,cancelable:!0}),b=new CustomEvent("jspanelbeforeminimize",{detail:e.id,cancelable:!0}),$=new CustomEvent("jspanelminimized",{detail:e.id,cancelable:!0}),_=new CustomEvent("jspanelbeforesmallify",{detail:e.id,cancelable:!0}),T=new CustomEvent("jspanelsmallified",{detail:e.id,cancelable:!0}),A=new CustomEvent("jspanelsmallifiedmax",{detail:e.id,cancelable:!0}),B=new CustomEvent("jspanelbeforeunsmallify",{detail:e.id,cancelable:!0}),U=new CustomEvent("jspanelfronted",{detail:e.id,cancelable:!0}),V=new CustomEvent("jspanelbeforeclose",{detail:e.id,cancelable:!0}),X=new CustomEvent("jspanelclosed",{detail:e.id,cancelable:!0}),le=new CustomEvent("jspanelcloseduser",{detail:e.id,cancelable:!0});[s,a,c,u,p,w,b,$,_,T,A,B,U,V].forEach(m=>m.panel=n);const re=n.querySelector(".jsPanel-btn-close"),ee=n.querySelector(".jsPanel-btn-maximize"),Y=n.querySelector(".jsPanel-btn-normalize"),te=n.querySelector(".jsPanel-btn-smallify"),ye=n.querySelector(".jsPanel-btn-minimize");re&&M.pointerup.forEach(m=>{re.addEventListener(m,x=>{if(x.preventDefault(),x.button&&x.button>0)return!1;n.close(null,!0)})}),ee&&M.pointerup.forEach(m=>{ee.addEventListener(m,x=>{if(x.preventDefault(),x.button&&x.button>0)return!1;n.maximize()})}),Y&&M.pointerup.forEach(m=>{Y.addEventListener(m,x=>{if(x.preventDefault(),x.button&&x.button>0)return!1;n.normalize()})}),te&&M.pointerup.forEach(m=>{te.addEventListener(m,x=>{if(x.preventDefault(),x.button&&x.button>0)return!1;n.status==="normalized"||n.status==="maximized"?n.smallify():(n.status==="smallified"||n.status==="smallifiedmax")&&n.unsmallify()})}),ye&&M.pointerup.forEach(m=>{ye.addEventListener(m,x=>{if(x.preventDefault(),x.button&&x.button>0)return!1;n.minimize()})});let xe=M.extensions;for(let m in xe)Object.prototype.hasOwnProperty.call(xe,m)&&(n[m]=xe[m]);if(n.setBorder=m=>{let x=M.pOborder(m);return x[2].length||(x[2]=n.style.backgroundColor),x=x.join(" "),n.style.border=x,n.options.border=x,n},n.setBorderRadius=m=>{typeof m=="string"&&(m.startsWith("--")||m.startsWith("var"))&&(m=m.replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," "),m=M.getCssVariableValue(m)),typeof m=="number"&&(m+="px"),n.style.borderRadius=m;const x=getComputedStyle(n);return n.options.header?(n.header.style.borderTopLeftRadius=x.borderTopLeftRadius,n.header.style.borderTopRightRadius=x.borderTopRightRadius):(n.content.style.borderTopLeftRadius=x.borderTopLeftRadius,n.content.style.borderTopRightRadius=x.borderTopRightRadius),n.options.footerToolbar?(n.footer.style.borderBottomRightRadius=x.borderBottomRightRadius,n.footer.style.borderBottomLeftRadius=x.borderBottomLeftRadius):(n.content.style.borderBottomRightRadius=x.borderBottomRightRadius,n.content.style.borderBottomLeftRadius=x.borderBottomLeftRadius),n},n.setTheme=(m=e.theme,x)=>{let P;if(n.status==="minimized"&&(P=!0,n.normalize()),M.clearTheme(n),typeof m=="object")e.border=void 0,M.applyCustomTheme(n,m);else if(typeof m=="string"){m==="none"&&(m="white");let y=M.getThemeDetails(m);M.applyColorTheme(n,y)}return P&&n.minimize(),x&&x.call(n,n),n},n.remove=(m,x,P)=>{n.parentElement.removeChild(n),document.getElementById(m)?P&&P.call(n,m,n):(n.removeMinimizedReplacement(),n.status="closed",x&&document.dispatchEvent(le),document.dispatchEvent(X),n.options.onclosed&&M.processCallbacks(n,n.options.onclosed,"every",x),M.autopositionRemaining(n),P&&P.call(m,m)),window.removeEventListener("resize",n.windowResizeHandler),document.removeEventListener("jspanelresize",n.parentResizeHandler)},n.close=(m,x)=>{if(n.parentElement){if(n.closetimer&&window.clearInterval(n.closetimer),document.dispatchEvent(V),n.statusBefore=n.status,n.options.onbeforeclose&&n.options.onbeforeclose.length>0&&!M.processCallbacks(n,n.options.onbeforeclose,"some",n.status,x))return n;n.options.animateOut?(n.options.animateIn&&M.remClass(n,n.options.animateIn),M.setClass(n,n.options.animateOut),n.addEventListener("animationend",P=>{P.stopPropagation(),n.remove(n.id,x,m)})):n.remove(n.id,x,m)}},n.maximize=(m,x)=>{if(n.statusBefore=n.status,e.onbeforemaximize&&e.onbeforemaximize.length>0&&!M.processCallbacks(n,e.onbeforemaximize,"some",n.statusBefore))return n;document.dispatchEvent(p);const P=n.parentElement,y=M.pOcontainment(e.maximizedMargin);return P===document.body?(n.style.width=document.documentElement.clientWidth-y[1]-y[3]+"px",n.style.height=document.documentElement.clientHeight-y[0]-y[2]+"px",n.style.left=y[3]+"px",n.style.top=y[0]+"px"):(n.style.width=P.clientWidth-y[1]-y[3]+"px",n.style.height=P.clientHeight-y[0]-y[2]+"px",n.style.left=y[3]+"px",n.style.top=y[0]+"px"),te.style.transform="unset",n.removeMinimizedReplacement(),n.status="maximized",n.setControls([".jsPanel-btn-maximize"]),x||n.front(),document.dispatchEvent(w),document.dispatchEvent(a),e.onstatuschange&&M.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),m&&m.call(n,n,n.statusBefore),e.onmaximized&&M.processCallbacks(n,e.onmaximized,"every",n.statusBefore),n},n.minimize=m=>{if(n.status==="minimized"||(n.statusBefore=n.status,e.onbeforeminimize&&e.onbeforeminimize.length>0&&!M.processCallbacks(n,e.onbeforeminimize,"some",n.statusBefore)))return n;if(document.dispatchEvent(b),!document.getElementById("jsPanel-replacement-container")){const x=document.createElement("div");x.id="jsPanel-replacement-container",document.body.append(x)}if(n.style.left="-9999px",n.status="minimized",document.dispatchEvent($),document.dispatchEvent(a),e.onstatuschange&&M.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),e.minimizeTo){let x=n.createMinimizedReplacement(),P,y,k;switch(e.minimizeTo){case"default":document.getElementById("jsPanel-replacement-container").append(x);break;case"parentpanel":y=n.closest(".jsPanel-content").parentElement,k=y.querySelectorAll(".jsPanel-minimized-box"),P=k[k.length-1],P.append(x);break;case"parent":y=n.parentElement,P=y.querySelector(".jsPanel-minimized-container"),P||(P=document.createElement("div"),P.className="jsPanel-minimized-container",y.append(P)),P.append(x);break;default:document.querySelector(e.minimizeTo).append(x)}}return m&&m.call(n,n,n.statusBefore),e.onminimized&&M.processCallbacks(n,e.onminimized,"every",n.statusBefore),n},n.normalize=m=>(n.status==="normalized"||(n.statusBefore=n.status,e.onbeforenormalize&&e.onbeforenormalize.length>0&&!M.processCallbacks(n,e.onbeforenormalize,"some",n.statusBefore))||(document.dispatchEvent(c),n.style.width=n.currentData.width,n.style.height=n.currentData.height,n.snapped?n.snap(n.snapped,!0):(n.style.left=n.currentData.left,n.style.top=n.currentData.top),te.style.transform="unset",n.removeMinimizedReplacement(),n.status="normalized",n.setControls([".jsPanel-btn-normalize"]),n.front(),document.dispatchEvent(u),document.dispatchEvent(a),e.onstatuschange&&M.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),m&&m.call(n,n,n.statusBefore),e.onnormalized&&M.processCallbacks(n,e.onnormalized,"every",n.statusBefore)),n),n.smallify=m=>{if(n.status==="smallified"||n.status==="smallifiedmax"||(n.statusBefore=n.status,e.onbeforesmallify&&e.onbeforesmallify.length>0&&!M.processCallbacks(n,e.onbeforesmallify,"some",n.statusBefore)))return n;document.dispatchEvent(_),n.style.overflow="hidden";const x=window.getComputedStyle(n),P=parseFloat(window.getComputedStyle(n.headerbar).height);n.style.height=parseFloat(x.borderTopWidth)+parseFloat(x.borderBottomWidth)+P+"px",te.style.transform="rotate(180deg)",n.status==="normalized"?(n.setControls([".jsPanel-btn-normalize"]),n.status="smallified",document.dispatchEvent(T),document.dispatchEvent(a),e.onstatuschange&&M.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="maximized"&&(n.setControls([".jsPanel-btn-maximize"]),n.status="smallifiedmax",document.dispatchEvent(A),document.dispatchEvent(a),e.onstatuschange&&M.processCallbacks(n,e.onstatuschange,"every",n.statusBefore));const y=n.querySelectorAll(".jsPanel-minimized-box");return y[y.length-1].style.display="none",m&&m.call(n,n,n.statusBefore),e.onsmallified&&M.processCallbacks(n,e.onsmallified,"every",n.statusBefore),n},n.unsmallify=m=>{if(n.statusBefore=n.status,n.status==="smallified"||n.status==="smallifiedmax"){if(e.onbeforeunsmallify&&e.onbeforeunsmallify.length>0&&!M.processCallbacks(n,e.onbeforeunsmallify,"some",n.statusBefore))return n;document.dispatchEvent(B),n.style.overflow="visible",n.front(),n.status==="smallified"?(n.style.height=n.currentData.height,n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(u),document.dispatchEvent(a),e.onstatuschange&&M.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="smallifiedmax"?n.maximize():n.status==="minimized"&&n.normalize(),te.style.transform="rotate(0deg)";const x=n.querySelectorAll(".jsPanel-minimized-box");x[x.length-1].style.display="flex",m&&m.call(n,n,n.statusBefore),e.onunsmallified&&M.processCallbacks(n,e.onunsmallified,"every",n.statusBefore)}return n},n.front=(m,x=!0)=>{if(n.status==="minimized")n.statusBefore==="maximized"?n.maximize():n.normalize();else{const P=Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(y=>y.style.zIndex);Math.max(...P)>n.style.zIndex&&(n.style.zIndex=M.zi.next()),M.resetZi()}return document.dispatchEvent(U),m&&m.call(n,n),e.onfronted&&x&&M.processCallbacks(n,e.onfronted,"every",n.status),n},n.snap=(m,x=!1)=>{if(x||(n.currentData.beforeSnap={width:n.currentData.width,height:n.currentData.height}),m&&typeof m=="function"&&!x)m.call(n,n,n.snappableTo);else if(m!==!1){let P=[0,0];if(n.options.dragit.snap.containment&&n.options.dragit.containment){const y=M.pOcontainment(n.options.dragit.containment),k=n.snappableTo;k.startsWith("left")?P[0]=y[3]:k.startsWith("right")&&(P[0]=-y[1]),k.endsWith("top")?P[1]=y[0]:k.endsWith("bottom")&&(P[1]=-y[2])}n.reposition(`${n.snappableTo} ${P[0]} ${P[1]}`)}x||(n.snapped=n.snappableTo)},n.move=(m,x)=>{let P=n.overlaps(m,"paddingbox"),y=n.parentElement;return m.appendChild(n),n.options.container=m,n.style.left=P.left+"px",n.style.top=P.top+"px",n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors(),x&&x.call(n,n,m,y),n},n.closeChildpanels=m=>(n.getChildpanels().forEach(x=>x.close()),m&&m.call(n,n),n),n.getChildpanels=m=>{const x=n.content.querySelectorAll(".jsPanel");return m&&x.forEach((P,y,k)=>{m.call(P,P,y,k)}),x},n.isChildpanel=m=>{const x=n.closest(".jsPanel-content"),P=x?x.parentElement:null;return m&&m.call(n,n,P),x?P:!1},n.contentRemove=m=>(M.emptyNode(n.content),m&&m.call(n,n),n),n.createMinimizedReplacement=()=>{const m=M.createMinimizedTemplate(),x=window.getComputedStyle(n.headertitle).color,P=window.getComputedStyle(n),y=e.iconfont,k=m.querySelector(".jsPanel-controlbar");return n.options.header!=="auto-show-hide"?M.setStyles(m,{backgroundColor:P.backgroundColor,backgroundPositionX:P.backgroundPositionX,backgroundPositionY:P.backgroundPositionY,backgroundRepeat:P.backgroundRepeat,backgroundAttachment:P.backgroundAttachment,backgroundImage:P.backgroundImage,backgroundSize:P.backgroundSize,backgroundOrigin:P.backgroundOrigin,backgroundClip:P.backgroundClip}):m.style.backgroundColor=window.getComputedStyle(n.header).backgroundColor,m.id=n.id+"-min",m.querySelector(".jsPanel-headerbar").replaceChild(n.headerlogo.cloneNode(!0),m.querySelector(".jsPanel-headerlogo")),m.querySelector(".jsPanel-titlebar").replaceChild(n.headertitle.cloneNode(!0),m.querySelector(".jsPanel-title")),m.querySelector(".jsPanel-titlebar").setAttribute("title",n.headertitle.textContent),m.querySelector(".jsPanel-title").style.color=x,k.style.color=x,k.querySelectorAll("button").forEach(he=>he.style.color=x),["jsPanel-hdr-dark","jsPanel-hdr-light"].forEach(he=>{n.header.classList.contains(he)&&m.querySelector(".jsPanel-hdr").classList.add(he)}),n.setIconfont(y,m),n.dataset.btnnormalize==="enabled"?M.pointerup.forEach(he=>{m.querySelector(".jsPanel-btn-normalize").addEventListener(he,ge=>{if(ge.preventDefault(),ge.button&&ge.button>0)return!1;n.normalize()})}):k.querySelector(".jsPanel-btn-normalize").style.display="none",n.dataset.btnmaximize==="enabled"?M.pointerup.forEach(he=>{m.querySelector(".jsPanel-btn-maximize").addEventListener(he,ge=>{if(ge.preventDefault(),ge.button&&ge.button>0)return!1;n.maximize()})}):k.querySelector(".jsPanel-btn-maximize").style.display="none",n.dataset.btnclose==="enabled"?M.pointerup.forEach(he=>{m.querySelector(".jsPanel-btn-close").addEventListener(he,ge=>{if(ge.preventDefault(),ge.button&&ge.button>0)return!1;n.close(null,!0)})}):k.querySelector(".jsPanel-btn-close").style.display="none",m},n.removeMinimizedReplacement=()=>{const m=document.getElementById(`${n.id}-min`);m&&m.parentElement.removeChild(m)},n.drag=(m={})=>{let x,P,y;const k=new CustomEvent("jspaneldragstart",{detail:n.id}),he=new CustomEvent("jspaneldrag",{detail:n.id}),ge=new CustomEvent("jspaneldragstop",{detail:n.id});[k,he,ge].forEach(Re=>Re.panel=n);const H=Re=>{let Be=Re.split("-");return Be.forEach((_e,ze)=>{Be[ze]=_e.charAt(0).toUpperCase()+_e.slice(1)}),"snap"+Be.join("")};function Q(Re){Re.relatedTarget===null&&M.pointermove.forEach(Be=>{document.removeEventListener(Be,P,!1),n.style.opacity=1})}let Ue=m.handles||M.defaults.dragit.handles,Ze=m.cursor||M.defaults.dragit.cursor;function Ee(Re){if(M.pointermove.forEach(Be=>document.removeEventListener(Be,P)),M.removeSnapAreas(),x){if(n.style.opacity=1,x=void 0,y.snap){switch(n.snappableTo){case"left-top":n.snap(y.snap.snapLeftTop);break;case"center-top":n.snap(y.snap.snapCenterTop);break;case"right-top":n.snap(y.snap.snapRightTop);break;case"right-center":n.snap(y.snap.snapRightCenter);break;case"right-bottom":n.snap(y.snap.snapRightBottom);break;case"center-bottom":n.snap(y.snap.snapCenterBottom);break;case"left-bottom":n.snap(y.snap.snapLeftBottom);break;case"left-center":n.snap(y.snap.snapLeftCenter);break}y.snap.callback&&n.snappableTo&&typeof y.snap.callback=="function"&&(y.snap.callback.call(n,n),y.snap.repositionOnSnap&&y.snap[H(n.snappableTo)]!==!1&&n.repositionOnSnap(n.snappableTo)),n.snappableTo&&y.snap.repositionOnSnap&&y.snap[H(n.snappableTo)]&&n.repositionOnSnap(n.snappableTo)}if(n.droppableTo&&n.droppableTo){let Be=n.parentElement;n.move(n.droppableTo),y.drop.callback&&y.drop.callback.call(n,n,n.droppableTo,Be)}if(document.dispatchEvent(ge),y.stop.length){let Be=window.getComputedStyle(n),_e={left:parseFloat(Be.left),top:parseFloat(Be.top),width:parseFloat(Be.width),height:parseFloat(Be.height)};M.processCallbacks(n,y.stop,!1,_e,Re)}n.saveCurrentPosition(),n.calcSizeFactors()}n.controlbar.style.pointerEvents="inherit",n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Be=>Be.style.pointerEvents="auto"),document.removeEventListener(Re,Ee)}return n.querySelectorAll(Ue).forEach(Re=>{Re.style.touchAction="none",Re.style.cursor=Ze,M.pointerdown.forEach(Be=>{Re.addEventListener(Be,_e=>{if(_e.button&&_e.button>0||(y=Object.assign({},M.defaults.dragit,m),y.disableOnMaximized&&n.status==="maximized"))return!1;if((y.containment||y.containment===0)&&(y.containment=M.pOcontainment(y.containment)),y.grid&&Array.isArray(y.grid)&&y.grid.length===1&&(y.grid[1]=y.grid[0]),y.snap&&(typeof y.snap=="object"?y.snap=Object.assign({},M.defaultSnapConfig,y.snap):y.snap=M.defaultSnapConfig),_e.target.closest(".jsPanel-ftr-btn"))return;n.controlbar.style.pointerEvents="none",n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(st=>st.style.pointerEvents="none");let ze=window.getComputedStyle(n),et=parseFloat(ze.left),Oe=parseFloat(ze.top),ce=parseFloat(ze.width),tt=parseFloat(ze.height),He=_e.touches?_e.touches[0].clientX:_e.clientX,ve=_e.touches?_e.touches[0].clientY:_e.clientY,Se=n.parentElement,Ot=Se.getBoundingClientRect(),be=window.getComputedStyle(Se),nt=n.getScaleFactor(),Cn=0,on=M.getScrollbarWidth(Se);P=st=>{if(st.preventDefault(),!x){if(document.dispatchEvent(k),n.style.opacity=y.opacity,n.snapped&&y.snap.resizeToPreSnap&&n.currentData.beforeSnap){n.resize(n.currentData.beforeSnap.width+" "+n.currentData.beforeSnap.height),n.setControls([".jsPanel-btn-normalize"]);let ue=n.getBoundingClientRect(),je=He-(ue.left+ue.width),$e=ue.width/2;je>-$e&&(Cn=je+$e)}if(n.front(),n.snapped=!1,n.status==="maximized"&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized"),y.drop&&y.drop.dropZones){let ue=y.drop.dropZones.map($e=>M.pOcontainer($e)),je=[];ue.forEach(function($e){$e.length?$e.forEach(function(Ne){je.push(Ne)}):je.push($e)}),je=je.filter(function($e,Ne,Xe){return Xe.indexOf($e)===Ne}),y.drop.dropZones=je}y.start.length&&M.processCallbacks(n,y.start,!1,{left:et,top:Oe,width:ce,height:tt},st)}x=1;let jt,Me,Ge,St,at,Pe,Ie,zt,Ye,$t,ft=st.touches?st.touches[0].clientX:st.clientX,lt=st.touches?st.touches[0].clientY:st.clientY,We=window.getComputedStyle(n),we;if(Se===document.body){let ue=n.getBoundingClientRect();Ye=window.innerWidth-parseInt(be.borderLeftWidth,10)-parseInt(be.borderRightWidth,10)-(ue.left+ue.width),$t=window.innerHeight-parseInt(be.borderTopWidth,10)-parseInt(be.borderBottomWidth,10)-(ue.top+ue.height)}else Ye=parseInt(be.width,10)-parseInt(be.borderLeftWidth,10)-parseInt(be.borderRightWidth,10)-(parseInt(We.left,10)+parseInt(We.width,10)),$t=parseInt(be.height,10)-parseInt(be.borderTopWidth,10)-parseInt(be.borderBottomWidth,10)-(parseInt(We.top,10)+parseInt(We.height,10));jt=parseFloat(We.left),Ge=parseFloat(We.top),at=Ye,Ie=$t,y.snap&&(y.snap.trigger==="panel"?(Me=jt**2,St=Ge**2,Pe=at**2,zt=Ie**2):y.snap.trigger==="pointer"&&(n.options.container==="window"?(jt=ft,Ge=lt,at=window.innerWidth-ft,Ie=window.innerHeight-lt,Me=ft**2,St=Ge**2,Pe=at**2,zt=Ie**2):(we=n.overlaps(Se,"paddingbox",st),jt=we.pointer.left,Ge=we.pointer.top,at=we.pointer.right,Ie=we.pointer.bottom,Me=we.pointer.left**2,St=we.pointer.top**2,Pe=we.pointer.right**2,zt=we.pointer.bottom**2)));let rt=Math.sqrt(Me+St),ie=Math.sqrt(Me+zt),ct=Math.sqrt(Pe+St),bt=Math.sqrt(Pe+zt),Rt=Math.abs(jt-at)/2,se=Math.abs(Ge-Ie)/2,dn=Math.sqrt(Me+se**2),yn=Math.sqrt(St+Rt**2),pt=Math.sqrt(Pe+se**2),En=Math.sqrt(zt+Rt**2);if(window.getSelection().removeAllRanges(),document.dispatchEvent(he),(!y.axis||y.axis==="x")&&(n.style.left=et+(ft-He)/nt.x+Cn+"px"),(!y.axis||y.axis==="y")&&(n.style.top=Oe+(lt-ve)/nt.y+"px"),y.grid){let ue=y.grid,je=y.axis,$e=ue[0]*Math.round((et+(ft-He))/ue[0]),Ne=ue[1]*Math.round((Oe+(lt-ve))/ue[1]);(!je||je==="x")&&(n.style.left=`${$e}px`),(!je||je==="y")&&(n.style.top=`${Ne}px`)}if(y.containment||y.containment===0){let ue=y.containment,je,$e;if(n.options.container==="window")je=window.innerWidth-parseFloat(We.width)-ue[1]-on.y,$e=window.innerHeight-parseFloat(We.height)-ue[2]-on.x;else{let Ne=parseFloat(be.borderLeftWidth)+parseFloat(be.borderRightWidth),Xe=parseFloat(be.borderTopWidth)+parseFloat(be.borderBottomWidth);je=Ot.width/nt.x-parseFloat(We.width)-ue[1]-Ne-on.y,$e=Ot.height/nt.y-parseFloat(We.height)-ue[2]-Xe-on.x}parseFloat(n.style.left)<=ue[3]&&(n.style.left=ue[3]+"px"),parseFloat(n.style.top)<=ue[0]&&(n.style.top=ue[0]+"px"),parseFloat(n.style.left)>=je&&(n.style.left=je+"px"),parseFloat(n.style.top)>=$e&&(n.style.top=$e+"px")}if(y.drag.length){let ue={left:jt,top:Ge,right:at,bottom:Ie,width:parseFloat(We.width),height:parseFloat(We.height)};M.processCallbacks(n,y.drag,!1,ue,st)}if(y.snap){let ue=y.snap.sensitivity,je=Se===document.body?window.innerWidth/8:Ot.width/8,$e=Se===document.body?window.innerHeight/8:Ot.height/8;n.snappableTo=!1,M.removeSnapAreas(),rt<ue?y.snap.snapLeftTop!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="left-top",M.createSnapArea(n,"lt",ue)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(we.pointer.left>0&&we.pointer.top>0?(n.snappableTo="left-top",M.createSnapArea(n,"lt",ue)):(n.snappableTo=!1,M.removeSnapAreas()))):ie<ue?y.snap.snapLeftBottom!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="left-bottom",M.createSnapArea(n,"lb",ue)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(we.pointer.left>0&&we.pointer.bottom>0?(n.snappableTo="left-bottom",M.createSnapArea(n,"lb",ue)):(n.snappableTo=!1,M.removeSnapAreas()))):ct<ue?y.snap.snapRightTop!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="right-top",M.createSnapArea(n,"rt",ue)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(we.pointer.right>0&&we.pointer.top>0?(n.snappableTo="right-top",M.createSnapArea(n,"rt",ue)):(n.snappableTo=!1,M.removeSnapAreas()))):bt<ue?y.snap.snapRightBottom!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="right-bottom",M.createSnapArea(n,"rb",ue)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(we.pointer.right>0&&we.pointer.bottom>0?(n.snappableTo="right-bottom",M.createSnapArea(n,"rb",ue)):(n.snappableTo=!1,M.removeSnapAreas()))):Ge<ue&&yn<je?y.snap.snapCenterTop!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="center-top",M.createSnapArea(n,"ct",ue)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(we.pointer.top>0?(n.snappableTo="center-top",M.createSnapArea(n,"ct",ue)):(n.snappableTo=!1,M.removeSnapAreas()))):jt<ue&&dn<$e?y.snap.snapLeftCenter!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="left-center",M.createSnapArea(n,"lc",ue)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(we.pointer.left>0?(n.snappableTo="left-center",M.createSnapArea(n,"lc",ue)):(n.snappableTo=!1,M.removeSnapAreas()))):at<ue&&pt<$e?y.snap.snapRightCenter!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="right-center",M.createSnapArea(n,"rc",ue)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(we.pointer.right>0?(n.snappableTo="right-center",M.createSnapArea(n,"rc",ue)):(n.snappableTo=!1,M.removeSnapAreas()))):Ie<ue&&En<je&&y.snap.snapCenterBottom!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="center-bottom",M.createSnapArea(n,"cb",ue)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(we.pointer.bottom>0?(n.snappableTo="center-bottom",M.createSnapArea(n,"cb",ue)):(n.snappableTo=!1,M.removeSnapAreas())))}if(y.drop&&y.drop.dropZones){let ue=M.isIE?"msElementsFromPoint":"elementsFromPoint",je=document[ue](st.clientX,st.clientY);Array.isArray(je)||(je=Array.prototype.slice.call(je)),y.drop.dropZones.forEach($e=>{je.includes($e)&&(n.droppableTo=$e)}),je.includes(n.droppableTo)||(n.droppableTo=!1)}},M.pointermove.forEach(st=>document.addEventListener(st,P)),window.addEventListener("mouseout",Q,!1)})}),M.pointerup.forEach(Be=>{document.addEventListener(Be,Ee),window.removeEventListener("mouseout",Q)}),m.disable&&(Re.style.pointerEvents="none")}),n},n.dragit=m=>{const x=Object.assign({},M.defaults.dragit,e.dragit),P=n.querySelectorAll(x.handles);return m==="disable"?P.forEach(y=>y.style.pointerEvents="none"):P.forEach(y=>y.style.pointerEvents="auto"),n},n.sizeit=(m={})=>{const x=new CustomEvent("jspanelresizestart",{detail:n.id}),P=new CustomEvent("jspanelresize",{detail:n.id}),y=new CustomEvent("jspanelresizestop",{detail:n.id});[x,P,y].forEach(_e=>_e.panel=n);let k={},he,ge,H,Q,Ue,Ze;k.handles=m.handles||M.defaults.resizeit.handles,k.handles.split(",").forEach(_e=>{const ze=document.createElement("DIV");ze.className=`jsPanel-resizeit-handle jsPanel-resizeit-${_e.trim()}`,n.append(ze)});let Ee=m.aspectRatio?m.aspectRatio:!1;function Re(_e){_e.relatedTarget===null&&M.pointermove.forEach(ze=>document.removeEventListener(ze,he,!1))}function Be(_e){if(M.pointermove.forEach(ze=>document.removeEventListener(ze,he,!1)),_e.target.classList&&_e.target.classList.contains("jsPanel-resizeit-handle")){let ze,et,Oe=_e.target.className;if(Oe.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)&&(ze=!0),Oe.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)&&(et=!0),k.grid&&Array.isArray(k.grid)){k.grid.length===1&&(k.grid[1]=k.grid[0]);const ce=parseFloat(n.style.width),tt=parseFloat(n.style.height),He=ce%k.grid[0],ve=tt%k.grid[1],Se=parseFloat(n.style.left),Ot=parseFloat(n.style.top),be=Se%k.grid[0],nt=Ot%k.grid[1];He<k.grid[0]/2?n.style.width=ce-He+"px":n.style.width=ce+(k.grid[0]-He)+"px",ve<k.grid[1]/2?n.style.height=tt-ve+"px":n.style.height=tt+(k.grid[1]-ve)+"px",ze&&(be<k.grid[0]/2?n.style.left=Se-be+"px":n.style.left=Se+(k.grid[0]-be)+"px"),et&&(nt<k.grid[1]/2?n.style.top=Ot-nt+"px":n.style.top=Ot+(k.grid[1]-nt)+"px")}}if(ge){n.content.style.pointerEvents="inherit",ge=void 0,n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors();let ze=n.controlbar.querySelector(".jsPanel-btn-smallify"),et=n.getBoundingClientRect();if(ze&&et.height>Ze+5&&(ze.style.transform="rotate(0deg)"),document.dispatchEvent(y),k.stop.length){let Oe=window.getComputedStyle(n),ce={left:parseFloat(Oe.left),top:parseFloat(Oe.top),width:parseFloat(Oe.width),height:parseFloat(Oe.height)};M.processCallbacks(n,k.stop,!1,ce,_e)}}n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(ze=>ze.style.pointerEvents="auto"),k.aspectRatio=Ee,document.removeEventListener(_e,Be)}return n.querySelectorAll(".jsPanel-resizeit-handle").forEach(_e=>{_e.style.touchAction="none",M.pointerdown.forEach(ze=>{_e.addEventListener(ze,et=>{if(et.preventDefault(),et.stopPropagation(),et.button&&et.button>0)return!1;let Oe=1;if(k=Object.assign({},M.defaults.resizeit,m),(k.containment||k.containment===0)&&(k.containment=M.pOcontainment(k.containment)),k.aspectRatio&&k.aspectRatio===!0&&(k.aspectRatio="panel"),M.modifier){let $e=M.modifier;$e.altKey?k.aspectRatio="content":$e.ctrlKey?k.aspectRatio="panel":$e.shiftKey&&(k.aspectRatio=!1,Oe=2)}let ce=typeof k.maxWidth=="function"?k.maxWidth():k.maxWidth||1e4,tt=typeof k.maxHeight=="function"?k.maxHeight():k.maxHeight||1e4,He=typeof k.minWidth=="function"?k.minWidth():k.minWidth,ve=typeof k.minHeight=="function"?k.minHeight():k.minHeight;n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach($e=>$e.style.pointerEvents="none");const Se=n.parentElement,Ot=Se.tagName.toLowerCase(),be=n.getBoundingClientRect(),nt=Se.getBoundingClientRect(),Cn=window.getComputedStyle(Se,null),on=parseInt(Cn.borderLeftWidth,10),st=parseInt(Cn.borderTopWidth,10),jt=Cn.getPropertyValue("position"),Me=et.clientX||et.clientX===0||et.touches[0].clientX,Ge=et.clientY||et.clientY===0||et.touches[0].clientY,St=Me/Ge,at=et.target.classList,Pe=n.getScaleFactor(),Ie=be.width/be.height,zt=n.content.getBoundingClientRect(),Ye=zt.width/zt.height,$t=n.header.getBoundingClientRect().height,ft=n.footer.getBoundingClientRect().height||0;let lt=be.left,We=be.top,we=1e4,rt=1e4,ie=1e4,ct=1e4;Ue=be.width,Ze=be.height,Ot!=="body"&&(lt=be.left-nt.left+Se.scrollLeft,We=be.top-nt.top+Se.scrollTop),Ot==="body"&&k.containment?(we=document.documentElement.clientWidth-be.left,ie=document.documentElement.clientHeight-be.top,rt=be.width+be.left,ct=be.height+be.top):k.containment&&(jt==="static"?(we=nt.width-be.left+on,ie=nt.height+nt.top-be.top+st,rt=be.width+(be.left-nt.left)-on,ct=be.height+(be.top-nt.top)-st):(we=Se.clientWidth-(be.left-nt.left)/Pe.x+on,ie=Se.clientHeight-(be.top-nt.top)/Pe.y+st,rt=(be.width+be.left-nt.left)/Pe.x-on,ct=n.clientHeight+(be.top-nt.top)/Pe.y-st)),k.containment&&(rt-=k.containment[3],ct-=k.containment[0],we-=k.containment[1],ie-=k.containment[2]);const bt=window.getComputedStyle(n),Rt=parseFloat(bt.width)-be.width,se=parseFloat(bt.height)-be.height;let dn=parseFloat(bt.left)-be.left,yn=parseFloat(bt.top)-be.top;Se!==document.body&&(dn+=nt.left,yn+=nt.top);let pt=parseInt(bt.borderTopWidth,10),En=parseInt(bt.borderRightWidth,10),ue=parseInt(bt.borderBottomWidth,10),je=parseInt(bt.borderLeftWidth,10);he=$e=>{$e.preventDefault(),ge||(document.dispatchEvent(x),k.start.length&&M.processCallbacks(n,k.start,!1,{width:Ue,height:Ze,left:lt,top:We},$e),n.front(),n.status==="maximized"&&(n.status="normalized",n.controlbar.querySelector(".jsPanel-btn-maximize")&&n.setControlStatus("maximize","show"),n.controlbar.querySelector(".jsPanel-btn-normalize")&&n.setControlStatus("normalize","hide")),be.height>Ze+5&&(n.status="normalized",n.setControls([".jsPanel-btn-normalize"]))),ge=1,document.dispatchEvent(P);let Ne=$e.touches?$e.touches[0].clientX:$e.clientX,Xe=$e.touches?$e.touches[0].clientY:$e.clientY,Le;at.contains("jsPanel-resizeit-e")?(H=Ue+(Ne-Me)*Oe/Pe.x+Rt,H>=we&&(H=we),H>=ce&&(H=ce),H<=He&&(H=He),n.style.width=H+"px",Oe===2&&(n.style.left=lt-(Ne-Me)+"px"),k.aspectRatio==="content"?(n.style.height=(H-En-je)/Ye+$t+ft+pt+ue+"px",k.containment&&(Le=n.overlaps(Se),Le.bottom<=k.containment[2]&&(n.style.height=ie+"px",n.style.width=ie*Ye+"px"))):k.aspectRatio==="panel"&&(n.style.height=H/Ie+"px",k.containment&&(Le=n.overlaps(Se),Le.bottom<=k.containment[2]&&(n.style.height=ie+"px",n.style.width=ie*Ie+"px")))):at.contains("jsPanel-resizeit-s")?(Q=Ze+(Xe-Ge)*Oe/Pe.y+se,Q>=ie&&(Q=ie),Q>=tt&&(Q=tt),Q<=ve&&(Q=ve),n.style.height=Q+"px",Oe===2&&(n.style.top=We-(Xe-Ge)+"px"),k.aspectRatio==="content"?(n.style.width=(Q-$t-ft-pt-ue)*Ye+pt+ue+"px",k.containment&&(Le=n.overlaps(Se),Le.right<=k.containment[1]&&(n.style.width=we+"px",n.style.height=we/Ye+"px"))):k.aspectRatio==="panel"&&(n.style.width=Q*Ie+"px",k.containment&&(Le=n.overlaps(Se),Le.right<=k.containment[1]&&(n.style.width=we+"px",n.style.height=we/Ie+"px")))):at.contains("jsPanel-resizeit-w")?(H=Ue+(Me-Ne)*Oe/Pe.x+Rt,H<=ce&&H>=He&&H<=rt&&(n.style.left=lt+(Ne-Me)/Pe.x+dn+"px"),H>=rt&&(H=rt),H>=ce&&(H=ce),H<=He&&(H=He),n.style.width=H+"px",k.aspectRatio==="content"?(n.style.height=(H-En-je)/Ye+$t+ft+pt+ue+"px",k.containment&&(Le=n.overlaps(Se),Le.bottom<=k.containment[2]&&(n.style.height=ie+"px",n.style.width=ie*Ye+"px"))):k.aspectRatio==="panel"&&(n.style.height=H/Ie+"px",k.containment&&(Le=n.overlaps(Se),Le.bottom<=k.containment[2]&&(n.style.height=ie+"px",n.style.width=ie*Ie+"px")))):at.contains("jsPanel-resizeit-n")?(Q=Ze+(Ge-Xe)*Oe/Pe.y+se,Q<=tt&&Q>=ve&&Q<=ct&&(n.style.top=We+(Xe-Ge)/Pe.y+yn+"px"),Q>=ct&&(Q=ct),Q>=tt&&(Q=tt),Q<=ve&&(Q=ve),n.style.height=Q+"px",k.aspectRatio==="content"?(n.style.width=(Q-$t-ft-pt-ue)*Ye+pt+ue+"px",k.containment&&(Le=n.overlaps(Se),Le.right<=k.containment[1]&&(n.style.width=we+"px",n.style.height=we/Ye+"px"))):k.aspectRatio==="panel"&&(n.style.width=Q*Ie+"px",k.containment&&(Le=n.overlaps(Se),Le.right<=k.containment[1]&&(n.style.width=we+"px",n.style.height=we/Ie+"px")))):at.contains("jsPanel-resizeit-se")?(H=Ue+(Ne-Me)*Oe/Pe.x+Rt,H>=we&&(H=we),H>=ce&&(H=ce),H<=He&&(H=He),n.style.width=H+"px",Oe===2&&(n.style.left=lt-(Ne-Me)+"px"),k.aspectRatio&&(n.style.height=H/Ie+"px"),Q=Ze+(Xe-Ge)*Oe/Pe.y+se,Q>=ie&&(Q=ie),Q>=tt&&(Q=tt),Q<=ve&&(Q=ve),n.style.height=Q+"px",Oe===2&&(n.style.top=We-(Xe-Ge)+"px"),k.aspectRatio==="content"?(n.style.width=(Q-$t-ft-pt-ue)*Ye+pt+ue+"px",k.containment&&(Le=n.overlaps(Se),Le.right<=k.containment[1]&&(n.style.width=we+"px",n.style.height=we/Ye+"px"))):k.aspectRatio==="panel"&&(n.style.width=Q*Ie+"px",k.containment&&(Le=n.overlaps(Se),Le.right<=k.containment[1]&&(n.style.width=we+"px",n.style.height=we/Ie+"px")))):at.contains("jsPanel-resizeit-sw")?(Q=Ze+(Xe-Ge)*Oe/Pe.y+se,Q>=ie&&(Q=ie),Q>=tt&&(Q=tt),Q<=ve&&(Q=ve),n.style.height=Q+"px",Oe===2&&(n.style.top=We-(Xe-Ge)+"px"),k.aspectRatio&&(n.style.width=Q*Ie+"px"),H=Ue+(Me-Ne)*Oe/Pe.x+Rt,H<=ce&&H>=He&&H<=rt&&(n.style.left=lt+(Ne-Me)/Pe.x+dn+"px"),H>=rt&&(H=rt),H>=ce&&(H=ce),H<=He&&(H=He),n.style.width=H+"px",k.aspectRatio==="content"?(n.style.height=(H-En-je)/Ye+$t+ft+pt+ue+"px",k.containment&&(Le=n.overlaps(Se),Le.bottom<=k.containment[2]&&(n.style.height=ie+"px",n.style.width=ie*Ye+"px"))):k.aspectRatio==="panel"&&(n.style.height=H/Ie+"px",k.containment&&(Le=n.overlaps(Se),Le.bottom<=k.containment[2]&&(n.style.height=ie+"px",n.style.width=ie*Ie+"px")))):at.contains("jsPanel-resizeit-ne")?(H=Ue+(Ne-Me)*Oe/Pe.x+Rt,H>=we&&(H=we),H>=ce&&(H=ce),H<=He&&(H=He),n.style.width=H+"px",Oe===2&&(n.style.left=lt-(Ne-Me)+"px"),k.aspectRatio&&(n.style.height=H/Ie+"px"),Q=Ze+(Ge-Xe)*Oe/Pe.y+se,Q<=tt&&Q>=ve&&Q<=ct&&(n.style.top=We+(Xe-Ge)/Pe.y+yn+"px"),Q>=ct&&(Q=ct),Q>=tt&&(Q=tt),Q<=ve&&(Q=ve),n.style.height=Q+"px",k.aspectRatio==="content"?(n.style.width=(Q-$t-ft-pt-ue)*Ye+pt+ue+"px",k.containment&&(Le=n.overlaps(Se),Le.right<=k.containment[1]&&(n.style.width=we+"px",n.style.height=we/Ye+"px"))):k.aspectRatio==="panel"&&(n.style.width=Q*Ie+"px",k.containment&&(Le=n.overlaps(Se),Le.right<=k.containment[1]&&(n.style.width=we+"px",n.style.height=we/Ie+"px")))):at.contains("jsPanel-resizeit-nw")&&(k.aspectRatio&&at.contains("jsPanel-resizeit-nw")&&(Ne=Xe*St,Xe=Ne/St),H=Ue+(Me-Ne)*Oe/Pe.x+Rt,H<=ce&&H>=He&&H<=rt&&(n.style.left=lt+(Ne-Me)/Pe.x+dn+"px"),H>=rt&&(H=rt),H>=ce&&(H=ce),H<=He&&(H=He),n.style.width=H+"px",k.aspectRatio&&(n.style.height=H/Ie+"px"),Q=Ze+(Ge-Xe)*Oe/Pe.y+se,Q<=tt&&Q>=ve&&Q<=ct&&(n.style.top=We+(Xe-Ge)/Pe.y+yn+"px"),Q>=ct&&(Q=ct),Q>=tt&&(Q=tt),Q<=ve&&(Q=ve),n.style.height=Q+"px",k.aspectRatio==="content"?n.style.width=(Q-$t-ft-pt-ue)*Ye+pt+ue+"px":k.aspectRatio==="panel"&&(n.style.width=Q*Ie+"px")),window.getSelection().removeAllRanges();const an=window.getComputedStyle(n),Ke={left:parseFloat(an.left),top:parseFloat(an.top),right:parseFloat(an.right),bottom:parseFloat(an.bottom),width:parseFloat(an.width),height:parseFloat(an.height)};k.resize.length&&M.processCallbacks(n,k.resize,!1,Ke,$e)},M.pointermove.forEach($e=>document.addEventListener($e,he,!1)),window.addEventListener("mouseout",Re,!1)})}),M.pointerup.forEach(function(ze){document.addEventListener(ze,Be),window.removeEventListener("mouseout",Re)}),m.disable&&(_e.style.pointerEvents="none")}),n},n.resizeit=m=>{const x=n.querySelectorAll(".jsPanel-resizeit-handle");return m==="disable"?x.forEach(P=>P.style.pointerEvents="none"):x.forEach(P=>P.style.pointerEvents="auto"),n},n.getScaleFactor=()=>{const m=n.getBoundingClientRect();return{x:m.width/n.offsetWidth,y:m.height/n.offsetHeight}},n.calcSizeFactors=()=>{const m=window.getComputedStyle(n);if(e.container==="window")n.hf=parseFloat(m.left)/(window.innerWidth-parseFloat(m.width)),n.vf=parseFloat(m.top)/(window.innerHeight-parseFloat(m.height));else if(n.parentElement){let x=n.parentElement.getBoundingClientRect();n.hf=parseFloat(m.left)/(x.width-parseFloat(m.width)),n.vf=parseFloat(m.top)/(x.height-parseFloat(m.height))}},n.saveCurrentDimensions=()=>{const m=window.getComputedStyle(n);n.currentData.width=m.width,n.currentData.height=m.height},n.saveCurrentPosition=()=>{const m=window.getComputedStyle(n);n.currentData.left=m.left,n.currentData.top=m.top},n.reposition=(...m)=>{let x=e.position,P=!0,y;return m.forEach(k=>{typeof k=="string"||typeof k=="object"?x=k:typeof k=="boolean"?P=k:typeof k=="function"&&(y=k)}),M.position(n,x),n.slaves&&n.slaves.size>0&&n.slaves.forEach(k=>k.reposition()),P&&n.saveCurrentPosition(),y&&y.call(n,n),n},n.repositionOnSnap=m=>{let x="0",P="0",y=M.pOcontainment(e.dragit.containment);if(e.dragit.snap.containment)switch(m){case"left-top":x=y[3],P=y[0];break;case"right-top":x=-y[1],P=y[0];break;case"right-bottom":x=-y[1],P=-y[2];break;case"left-bottom":x=y[3],P=-y[2];break;case"center-top":x=y[3]/2-y[1]/2,P=y[0];break;case"center-bottom":x=y[3]/2-y[1]/2,P=-y[2];break;case"left-center":x=y[3],P=y[0]/2-y[2]/2;break;case"right-center":x=-y[1],P=y[0]/2-y[2]/2;break}M.position(n,m),M.setStyles(n,{left:`calc(${n.style.left} + ${x}px)`,top:`calc(${n.style.top} + ${P}px)`})},n.overlaps=(m,x,P)=>{let y=n.getBoundingClientRect(),k=getComputedStyle(n.parentElement),he=n.getScaleFactor(),ge={top:0,right:0,bottom:0,left:0},H,Q=0,Ue=0,Ze=0,Ee=0;n.options.container!=="window"&&x==="paddingbox"&&(ge.top=parseInt(k.borderTopWidth,10)*he.y,ge.right=parseInt(k.borderRightWidth,10)*he.x,ge.bottom=parseInt(k.borderBottomWidth,10)*he.y,ge.left=parseInt(k.borderLeftWidth,10)*he.x),typeof m=="string"?m==="window"?H={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}:m==="parent"?H=n.parentElement.getBoundingClientRect():H=document.querySelector(m).getBoundingClientRect():H=m.getBoundingClientRect(),P&&(Q=P.touches?P.touches[0].clientX:P.clientX,Ue=P.touches?P.touches[0].clientY:P.clientY,Ze=Q-H.left,Ee=Ue-H.top);let Re=y.left<H.right&&y.right>H.left,Be=y.top<H.bottom&&y.bottom>H.top;return{overlaps:Re&&Be,top:y.top-H.top-ge.top,right:H.right-y.right-ge.right,bottom:H.bottom-y.bottom-ge.bottom,left:y.left-H.left-ge.left,parentBorderWidth:ge,panelRect:y,referenceRect:H,pointer:{clientX:Q,clientY:Ue,left:Ze-ge.left,top:Ee-ge.top,right:H.width-Ze-ge.right,bottom:H.height-Ee-ge.bottom}}},n.setSize=()=>{if(e.panelSize){const m=M.pOsize(n,e.panelSize);n.style.width=m.width,n.style.height=m.height}else if(e.contentSize){const m=M.pOsize(n,e.contentSize);n.content.style.width=m.width,n.content.style.height=m.height,n.style.width=m.width,n.content.style.width="100%"}return n},n.resize=(...m)=>{let x=window.getComputedStyle(n),P={width:x.width,height:x.height},y=!0,k;m.forEach(H=>{typeof H=="string"?P=H:typeof H=="object"?P=Object.assign(P,H):typeof H=="boolean"?y=H:typeof H=="function"&&(k=H)});let he=M.pOsize(n,P);n.style.width=he.width,n.style.height=he.height,n.slaves&&n.slaves.size>0&&n.slaves.forEach(H=>H.reposition()),y&&n.saveCurrentDimensions(),n.status="normalized";let ge=n.controlbar.querySelector(".jsPanel-btn-smallify");return ge&&(ge.style.transform="rotate(0deg)"),k&&k.call(n,n),n.calcSizeFactors(),n},n.windowResizeHandler=m=>{if(m.target===window){let x=n.status,P=e.onwindowresize,y,k;if(x==="maximized"&&P)n.maximize(!1,!0);else if(n.snapped&&x!=="minimized")n.snap(n.snapped,!0);else if(x==="normalized"||x==="smallified"||x==="maximized"){let he=typeof P;he==="boolean"?(y=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=y<=0?0:y+"px",k=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=k<=0?0:k+"px"):he==="function"?P.call(n,m,n):he==="object"&&(P.preset===!0&&(y=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=y<=0?0:y+"px",k=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=k<=0?0:k+"px"),P.callback.call(n,m,n))}else x==="smallifiedmax"&&P&&n.maximize(!1,!0).smallify();n.slaves&&n.slaves.size>0&&n.slaves.forEach(he=>he.reposition())}},n.setControls=(m,x)=>(n.header.querySelectorAll(".jsPanel-btn").forEach(P=>{const y=P.className.split("-"),k=y[y.length-1];n.getAttribute(`data-btn${k}`)!=="hidden"&&(P.style.display="block")}),m.forEach(P=>{const y=n.controlbar.querySelector(P);y&&(y.style.display="none")}),x&&x.call(n,n),n),n.setControlStatus=(m,x="enable",P)=>{const y=n.controlbar.querySelector(`.jsPanel-btn-${m}`);switch(x){case"disable":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"disabled"),y.style.pointerEvents="none",y.style.opacity=.4,y.style.cursor="default");break;case"hide":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"hidden"),y.style.display="none");break;case"show":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"enabled"),y.style.display="block",y.style.pointerEvents="auto",y.style.opacity=1,y.style.cursor="pointer");break;case"enable":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.getAttribute(`data-btn${m}`)==="hidden"&&(y.style.display="block"),n.setAttribute(`data-btn${m}`,"enabled"),y.style.pointerEvents="auto",y.style.opacity=1,y.style.cursor="pointer");break;case"remove":n.controlbar.removeChild(y),n.setAttribute(`data-btn${m}`,"removed");break}return P&&P.call(n,n),n},n.setControlSize=m=>{const x=m.toLowerCase();n.controlbar.querySelectorAll(".jsPanel-btn").forEach(y=>{["jsPanel-btn-xl","jsPanel-btn-lg","jsPanel-btn-md","jsPanel-btn-sm","jsPanel-btn-xs"].forEach(k=>y.classList.remove(k)),y.classList.add(`jsPanel-btn-${x}`)}),x==="xl"?n.titlebar.style.fontSize="1.5rem":x==="lg"?n.titlebar.style.fontSize="1.25rem":x==="md"?n.titlebar.style.fontSize="1.05rem":x==="sm"?n.titlebar.style.fontSize=".9rem":x==="xs"&&(n.titlebar.style.fontSize=".8rem")},n.setHeaderControls=m=>{if(n.options.headerControls.add){let k=n.options.headerControls.add;Array.isArray(k)||(k=[k]),k.forEach(he=>n.addControl(he))}let x=[];n.controlbar.querySelectorAll(".jsPanel-btn").forEach(k=>{let he=k.className.match(/jsPanel-btn-[a-z\d]{3,}/i),ge=he[0].substring(12);x.push(ge)});const y=M.pOheaderControls(e.headerControls);return e.headerControls=y,x.forEach(k=>{y[k]&&n.setControlStatus(k,y[k])}),n.setControlSize(y.size),m&&m.call(n,n),n},n.setHeaderLogo=(m,x)=>{let P=[n.headerlogo],y=document.querySelector("#"+n.id+"-min");return y&&P.push(y.querySelector(".jsPanel-headerlogo")),typeof m=="string"?m.startsWith("<")?P.forEach(k=>k.innerHTML=m):P.forEach(k=>{M.emptyNode(k);let he=document.createElement("img");he.src=m,k.append(he)}):P.forEach(k=>{M.emptyNode(k),k.append(m)}),n.headerlogo.childNodes.forEach(k=>{k.nodeName&&k.nodeName==="IMG"&&k.setAttribute("draggable","false")}),x&&x.call(n,n),n},n.setHeaderRemove=m=>(n.removeChild(n.header),n.content.classList.add("jsPanel-content-noheader"),["close","maximize","normalize","minimize","smallify"].forEach(x=>n.setAttribute(`data-btn${x}`,"removed")),m&&m.call(n,n),n),n.setHeaderTitle=(m,x)=>{let P=[n.headertitle],y=document.querySelector("#"+n.id+"-min");return y&&P.push(y.querySelector(".jsPanel-title")),typeof m=="string"?P.forEach(k=>k.innerHTML=m):typeof m=="function"?P.forEach(k=>{M.emptyNode(k),k.innerHTML=m()}):P.forEach(k=>{M.emptyNode(k),k.append(m)}),x&&x.call(n,n),n},n.setIconfont=(m,x=n,P)=>{if(m){let y,k;if(m==="fa"||m==="far"||m==="fal"||m==="fas"||m==="fad")y=[`${m} fa-window-close`,`${m} fa-window-maximize`,`${m} fa-window-restore`,`${m} fa-window-minimize`,`${m} fa-chevron-up`];else if(m==="material-icons")y=[m,m,m,m,m,m],k=["close","fullscreen","fullscreen_exit","call_received","expand_less"];else if(Array.isArray(m))y=[`custom-control-icon ${m[4]}`,`custom-control-icon ${m[3]}`,`custom-control-icon ${m[2]}`,`custom-control-icon ${m[1]}`,`custom-control-icon ${m[0]}`];else if(m==="bootstrap"||m==="glyphicon")y=["glyphicon glyphicon-remove","glyphicon glyphicon-fullscreen","glyphicon glyphicon-resize-full","glyphicon glyphicon-minus","glyphicon glyphicon-chevron-up"];else return x;x.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(he=>M.emptyNode(he).innerHTML="<span></span>"),Array.prototype.slice.call(x.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((he,ge)=>{he.className=y[ge],m==="material-icons"&&(he.textContent=k[ge])})}return P&&P.call(x,x),x},n.addToolbar=(m,x,P)=>{if(m==="header"?m=n.headertoolbar:m==="footer"&&(m=n.footer),typeof x=="string")m.innerHTML=x;else if(Array.isArray(x))x.forEach(y=>{typeof y=="string"?m.innerHTML+=y:m.append(y)});else if(typeof x=="function"){let y=x.call(n,n);typeof y=="string"?m.innerHTML=y:m.append(y)}else m.append(x);return m.classList.add("active"),P&&P.call(n,n),n},n.addCloseControl=()=>{let m=document.createElement("button"),x=n.content.style.color;return m.classList.add("jsPanel-addCloseCtrl"),m.innerHTML=M.icons.close,m.style.color=x,n.options.rtl&&m.classList.add("rtl"),n.appendChild(m),M.pointerup.forEach(P=>{m.addEventListener(P,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.close(null,!0)})}),M.pointerdown.forEach(P=>{m.addEventListener(P,y=>y.preventDefault())}),n},n.addControl=m=>{if(!m.html)return n;m.position||(m.position=1);const x=n.controlbar.querySelectorAll(".jsPanel-btn").length;let P=document.createElement("button");P.innerHTML=m.html,P.className=`jsPanel-btn jsPanel-btn-${m.name} jsPanel-btn-${e.headerControls.size}`,P.style.color=n.header.style.color,m.position>x?n.controlbar.append(P):n.controlbar.insertBefore(P,n.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${m.position})`));const y=m.ariaLabel||m.name;return y&&P.setAttribute("aria-label",y),M.pointerup.forEach(k=>{P.addEventListener(k,he=>{if(he.preventDefault(),he.button&&he.button>0)return!1;m.handler.call(n,n,P)})}),m.afterInsert&&m.afterInsert.call(P,P),n},n.setRtl=()=>{[n.header,n.content,n.footer].forEach(m=>{m.dir="rtl",e.rtl.lang&&(m.lang=e.rtl.lang)})},n.id=e.id,n.classList.add("jsPanel-"+e.paneltype),e.paneltype==="standard"&&(n.style.zIndex=this.zi.next()),i.append(n),n.front(!1,!1),n.setTheme(e.theme),e.boxShadow&&n.classList.add(`jsPanel-depth-${e.boxShadow}`),e.header){if(e.headerLogo&&n.setHeaderLogo(e.headerLogo),n.setIconfont(e.iconfont),n.setHeaderTitle(e.headerTitle),n.setHeaderControls(),M.isIE){let m=[n.headerbar,n.controlbar];switch(n.options.headerControls.size){case"md":m.forEach(x=>{x.style.height="34px"});break;case"xs":m.forEach(x=>{x.style.height="26px"});break;case"sm":m.forEach(x=>{x.style.height="30px"});break;case"lg":m.forEach(x=>{x.style.height="38px"});break;case"xl":m.forEach(x=>{x.style.height="42px"});break}}if(e.header==="auto-show-hide"){let m="jsPanel-depth-"+e.boxShadow;n.header.style.opacity=0,n.style.backgroundColor="transparent",this.remClass(n,m),this.setClass(n.content,m),n.header.addEventListener("mouseenter",()=>{n.header.style.opacity=1,M.setClass(n,m),M.remClass(n.content,m)}),n.header.addEventListener("mouseleave",()=>{n.header.style.opacity=0,M.remClass(n,m),M.setClass(n.content,m)})}}else n.setHeaderRemove(),e.addCloseControl&&n.addCloseControl();if(e.headerToolbar&&n.addToolbar(n.headertoolbar,e.headerToolbar),e.footerToolbar&&n.addToolbar(n.footer,e.footerToolbar),e.border&&n.setBorder(e.border),e.borderRadius&&n.setBorderRadius(e.borderRadius),e.css)for(const[m,x]of Object.entries(e.css))if(m==="panel")n.className+=` ${x}`;else{let P=n.querySelector(`.jsPanel-${m}`);P&&(P.className+=` ${x}`)}if(e.content&&(typeof e.content=="function"?e.content.call(n,n):typeof e.content=="string"?n.content.innerHTML=e.content:n.content.append(e.content)),e.contentAjax&&this.ajax(e.contentAjax,n),e.contentFetch&&this.fetch(e.contentFetch,n),e.contentOverflow){const m=e.contentOverflow.split(" ");m.length===1?n.content.style.overflow=m[0]:m.length===2&&(n.content.style.overflowX=m[0],n.content.style.overflowY=m[1])}if(e.autoclose){typeof e.autoclose=="number"?e.autoclose={time:e.autoclose+"ms"}:typeof e.autoclose=="string"&&(e.autoclose={time:e.autoclose});let m=Object.assign({},M.defaultAutocloseConfig,e.autoclose);m.time&&typeof m.time=="number"&&(m.time+="ms");let x=n.progressbar.querySelector("div");x.addEventListener("animationend",P=>{P.stopPropagation(),n.progressbar.classList.remove("active"),n.close()}),m.progressbar&&(n.progressbar.classList.add("active"),m.background?M.colorNames[m.background]?n.progressbar.style.background="#"+M.colorNames[m.background]:n.progressbar.style.background=m.background:n.progressbar.classList.add("success-bg")),x.style.animation=`${m.time} progressbar`}if(e.rtl&&n.setRtl(),n.setSize(),n.status="normalized",e.position?this.position(n,e.position):n.style.opacity=1,document.dispatchEvent(u),n.calcSizeFactors(),e.animateIn&&(n.addEventListener("animationend",()=>{this.remClass(n,e.animateIn)}),this.setClass(n,e.animateIn)),e.syncMargins){let m=this.pOcontainment(e.maximizedMargin);e.dragit&&(e.dragit.containment=m,e.dragit.snap===!0?(e.dragit.snap=M.defaultSnapConfig,e.dragit.snap.containment=!0):e.dragit.snap&&(e.dragit.snap.containment=!0)),e.resizeit&&(e.resizeit.containment=m)}if(e.dragit?(["start","drag","stop"].forEach(m=>{e.dragit[m]?typeof e.dragit[m]=="function"&&(e.dragit[m]=[e.dragit[m]]):e.dragit[m]=[]}),n.drag(e.dragit),n.addEventListener("jspaneldragstop",m=>{m.panel===n&&n.calcSizeFactors()},!1)):n.titlebar.style.cursor="default",e.resizeit){["start","resize","stop"].forEach(x=>{e.resizeit[x]?typeof e.resizeit[x]=="function"&&(e.resizeit[x]=[e.resizeit[x]]):e.resizeit[x]=[]}),n.sizeit(e.resizeit);let m;n.addEventListener("jspanelresizestart",x=>{x.panel===n&&(m=n.status)},!1),n.addEventListener("jspanelresizestop",x=>{x.panel===n&&(m==="smallified"||m==="smallifiedmax"||m==="maximized")&&parseFloat(n.style.height)>parseFloat(window.getComputedStyle(n.header).height)&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(u),document.dispatchEvent(a),e.onstatuschange&&M.processCallbacks(n,e.onstatuschange,"every"),n.calcSizeFactors())},!1)}if(n.saveCurrentDimensions(),n.saveCurrentPosition(),e.setStatus&&(e.setStatus==="smallifiedmax"?n.maximize().smallify():e.setStatus==="smallified"?n.smallify():n[e.setStatus.slice(0,-1)]()),this.pointerdown.forEach(m=>{n.addEventListener(m,x=>{!x.target.closest(".jsPanel-btn-close")&&!x.target.closest(".jsPanel-btn-minimize")&&e.paneltype==="standard"&&n.front()},!1)}),e.onwindowresize&&n.options.container==="window"&&window.addEventListener("resize",n.windowResizeHandler,!1),e.onparentresize){let m=e.onparentresize,x=typeof m,P=n.isChildpanel();if(P){const y=P.content;let k=[];n.parentResizeHandler=he=>{if(he.panel===P){k[0]=y.offsetWidth,k[1]=y.offsetHeight;let ge=n.status,H,Q;ge==="maximized"&&m?n.maximize():n.snapped&&ge!=="minimized"?n.snap(n.snapped,!0):ge==="normalized"||ge==="smallified"||ge==="maximized"?x==="function"?m.call(n,n,{width:k[0],height:k[1]}):x==="object"&&m.preset===!0?(H=(k[0]-n.offsetWidth)*n.hf,n.style.left=H<=0?0:H+"px",Q=(k[1]-n.offsetHeight)*n.vf,n.style.top=Q<=0?0:Q+"px",m.callback.call(n,n,{width:k[0],height:k[1]})):x==="boolean"&&(H=(k[0]-n.offsetWidth)*n.hf,n.style.left=H<=0?0:H+"px",Q=(k[1]-n.offsetHeight)*n.vf,n.style.top=Q<=0?0:Q+"px"):ge==="smallifiedmax"&&m&&n.maximize().smallify()}},document.addEventListener("jspanelresize",n.parentResizeHandler,!1)}}return this.globalCallbacks&&(Array.isArray(this.globalCallbacks)?this.globalCallbacks.forEach(m=>m.call(n,n)):this.globalCallbacks.call(n,n)),e.callback&&(Array.isArray(e.callback)?e.callback.forEach(m=>m.call(n,n)):e.callback.call(n,n)),t&&(Array.isArray(t)?t.forEach(m=>m.call(n,n)):t.call(n,n)),document.dispatchEvent(s),n}};const Km=/<\/?[a-z][a-z0-9]*(\s[^<>]*)?\/?>|&[a-z][a-z0-9]*;|&#\d+;|&#x[0-9a-f]+;/i;function ld(e){return Km.test(e)}function Vm(e){return e.replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"').replace(/&apos;|&#39;/gi,"'").replace(/&nbsp;/gi," ").replace(/&#x([0-9a-f]+);/gi,(t,r)=>String.fromCodePoint(parseInt(r,16))).replace(/&#(\d+);/g,(t,r)=>String.fromCodePoint(Number(r))).replace(/&amp;/gi,"&")}function Gm(e){if(typeof document<"u"){const t=document.createElement("div");return t.innerHTML=e,t.textContent??""}return Vm(e.replace(/<[^>]*>/g,""))}function Ym(e){return(ld(e)?Gm(e):e).replace(/\s+/g," ").trim()}const Xm={id:"html-preview",name:"HTML Preview",type:"cell-renderer",version:"0.3.0",description:`Shows a cell's HTML as a plain-text preview (first N characters); click to edit the raw HTML in a dialog, or use the popup icon to view the full rendered HTML in a window. Apply by setting a column's renderer to "html-preview". For direct in-cell rendering use the "html" renderer instead.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-preview.ts"};let ho=30;async function Cl(e){const t=await e.settings.get("html-preview","maxChars");typeof t=="number"&&Number.isFinite(t)&&t>0&&(ho=Math.floor(t))}function Qm(e){customElements.get("html-preview-cell")||customElements.define("html-preview-cell",Jm),e.ui.registerCellRenderer("html-preview","html-preview-cell"),e.ui.registerSettings("html-preview","HTML Preview",[{key:"maxChars",label:"Max characters shown",type:"number",default:30,scope:"workspace",description:"HTML-preview cells show the first N characters of the text; use the popup icon on the right to open the full rendered HTML in a window. Applies to cells rendered after the change (reload to refresh all)."}]),Cl(e),e.events.on("app:ready",()=>void Cl(e))}function El(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}let Sl=0;class Jm extends HTMLElement{constructor(){super(...arguments),this._value="",this._label="HTML"}set value(t){const r=t??"";this._value!==r&&(this._value=r,this.render())}get value(){return this._value}set column(t){this._label=t?.label??"HTML"}connectedCallback(){this.render()}render(){if(this.innerHTML="",!this._value){const a=document.createElement("span");a.style.cssText="color:#9ca3af;cursor:text",a.textContent="empty",a.title="Click to edit the HTML",a.addEventListener("click",()=>this.openEditor()),this.append(a);return}const t=document.createElement("span");t.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%";const r=document.createElement("span"),i=Ym(this._value);r.textContent=i.length>ho?i.slice(0,ho)+"…":i,r.title="Click to edit the HTML",r.style.cssText="flex:0 1 auto;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:text",r.addEventListener("click",a=>{a.stopPropagation(),this.openEditor()});const n=document.createElement("span");n.style.cssText="flex:1 1 auto";const s=document.createElement("button");s.type="button",s.title="Open the HTML in a window",s.setAttribute("aria-label","Open the HTML in a window"),s.innerHTML='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3h7v7"/><path d="M21 3l-9 9"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/></svg>',s.style.cssText="flex:none;display:inline-flex;align-items:center;justify-content:center;padding:1px;background:none;border:0;color:#9ca3af;cursor:pointer;line-height:0",s.addEventListener("mouseenter",()=>s.style.color="#4b5563"),s.addEventListener("mouseleave",()=>s.style.color="#9ca3af"),s.addEventListener("click",a=>{a.stopPropagation(),this.openWindow()}),t.append(r,n,s),this.append(t)}openWindow(){const t=document.createElement("div");if(t.style.cssText="padding:0.75rem;overflow:auto;height:100%;box-sizing:border-box",ld(this._value))t.innerHTML=this._value;else{const r=document.createElement("pre");r.style.cssText="white-space:pre-wrap;word-break:break-word;margin:0;font-family:ui-monospace, monospace;",r.textContent=this._value,t.append(r)}M.create({id:`easydb-html-popup-${++Sl}`,container:El(),headerTitle:this._label,theme:"#7c3aed",content:t,contentSize:"520 400",position:"center-top 0 60",minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1},resizeit:{containment:!1}})}openEditor(){const t=document.createElement("div");t.style.cssText="display:flex;flex-direction:column;gap:0.5rem;height:100%;box-sizing:border-box;padding:0.5rem";const r=document.createElement("textarea");r.value=this._value,r.style.cssText="flex:1 1 auto;width:100%;box-sizing:border-box;resize:none;font-family:monospace;font-size:0.85rem";const i=document.createElement("div");i.style.cssText="display:flex;justify-content:flex-end;gap:0.5rem;flex:none";const n=document.createElement("button");n.type="button",n.textContent="Cancel",n.style.cssText="padding:0.3rem 0.8rem;cursor:pointer";const s=document.createElement("button");s.type="button",s.textContent="Save",s.style.cssText="padding:0.3rem 0.8rem;cursor:pointer;background:#7c3aed;color:#fff;border:0;border-radius:0.25rem",i.append(n,s),t.append(r,i);const a=M.create({id:`easydb-html-edit-${++Sl}`,container:El(),headerTitle:`Edit ${this._label}`,theme:"#7c3aed",content:t,contentSize:"520 400",position:"center",minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1},resizeit:{containment:!1}});n.addEventListener("click",()=>a.close()),s.addEventListener("click",()=>{this._value=r.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:r.value},bubbles:!0,composed:!0})),a.close(),this.render()}),r.addEventListener("keydown",c=>{c.key==="Enter"&&(c.ctrlKey||c.metaKey)?(c.preventDefault(),s.click()):c.key==="Escape"&&(c.preventDefault(),a.close())}),setTimeout(()=>r.focus(),0)}}const Zm=Object.freeze(Object.defineProperty({__proto__:null,init:Qm,meta:Xm},Symbol.toStringTag,{value:"Module"})),eg={id:"html-render",name:"HTML",type:"cell-renderer",version:"0.1.0",description:`Renders a cell's value directly as HTML (unescaped, in full, no popup). Apply by setting a column's renderer to "html". For a truncated preview use "html-preview".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-render.ts"};function tg(e){customElements.get("html-render-cell")||customElements.define("html-render-cell",ng),e.ui.registerCellRenderer("html","html-render-cell")}class ng extends HTMLElement{constructor(){super(...arguments),this._value="",this.editing=!1}set value(t){const r=t??"";this._value!==r&&(this._value=r,this.editing||this.render())}get value(){return this._value}connectedCallback(){this.editing||this.render()}render(){this.innerHTML="";const t=document.createElement("span");t.style.cssText="display:inline-block;min-width:1ch;cursor:text",t.title="Click to edit",this._value?t.innerHTML=this._value:(t.style.color="#9ca3af",t.textContent="empty"),t.addEventListener("click",()=>this.beginEdit()),this.append(t)}beginEdit(){this.editing=!0,this.innerHTML="";const t=document.createElement("input");t.type="text",t.value=this._value,t.style.cssText="width:100%;box-sizing:border-box";let r=!1;const i=()=>{r||(r=!0,this.editing=!1,this._value=t.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:t.value},bubbles:!0,composed:!0})),this.render())};t.addEventListener("blur",i),t.addEventListener("keydown",n=>{n.key==="Enter"?(n.preventDefault(),t.blur()):n.key==="Escape"&&(n.preventDefault(),r=!0,this.editing=!1,this.render())}),this.append(t),t.focus(),t.select()}}const rg=Object.freeze(Object.defineProperty({__proto__:null,init:tg,meta:eg},Symbol.toStringTag,{value:"Module"})),ig={id:"cell-link",name:"Cell Link",type:"cell-renderer",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-link.ts"};function sg(e){customElements.get("cell-link")||customElements.define("cell-link",og),e.ui.registerCellRenderer("link","cell-link")}class og extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1,this._editor=null}set value(t){const r=t==null?"":String(t);this._value!==r&&(this._value=r,this._editing=!1,this.render())}get value(){return this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="",this._editor=null;const t=this._value,r=this._editing?null:ag(t),i=!this._editing&&!r?lg(t):null,n=!this._editing&&!r&&!i?cg(t):null;if(r||i||n){const s=document.createElement("span");s.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const a=document.createElement("a");a.href=r?t:i?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,r&&(a.target="_blank",a.rel="noopener noreferrer"),a.textContent=t,a.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",a.title=r?`Open ${t}`:i?`Email ${t}`:`Call ${t}`;const c=document.createElement("button");c.type="button",c.title="Edit",c.textContent="✎",c.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",c.addEventListener("click",u=>{u.preventDefault(),u.stopPropagation(),this._editing=!0,this.render()}),s.append(a,c),this.append(s)}else{const s=document.createElement("input");s.type="text",s.value=t,s.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",s.addEventListener("change",()=>{this._editor===s&&this.commit(s.value)}),s.addEventListener("keydown",a=>{a.key==="Enter"?(a.preventDefault(),this.commit(s.value)):a.key==="Escape"&&(this._editor=null,this._editing=!1,this.render())}),s.addEventListener("blur",()=>{this._editor===s&&this.commit(s.value)}),this.append(s),this._editor=s,this._editing&&setTimeout(()=>{s.focus(),s.select()},0)}}commit(t){const r=t!==this._value;this._value=t,this._editing=!1,this.render(),r&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function ag(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function lg(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function cg(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const r=t.replace(/\D/g,"");if(r.length<7||r.length>15)return null;const i=/[ ()\-.]/.test(t),n=t.startsWith("+");return!i&&!n&&r.length<10?null:t}const dg=Object.freeze(Object.defineProperty({__proto__:null,init:sg,meta:ig},Symbol.toStringTag,{value:"Module"})),cd={id:"auto-renderer",name:"Auto Renderer",type:"cell-renderer",version:"0.1.0",description:"After any import, gives columns a renderer based on their values: link for URLs, image for image URLs, html-preview for markup or long text.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 3 8 6.5 4.5 8 8 9.5 9.5 13 11 9.5 14.5 8 11 6.5 9.5 3z"/><path d="M17.5 12 16.75 14 15 14.75 16.75 15.5 17.5 17.5 18.25 15.5 20 14.75 18.25 14 17.5 12z"/><path d="M4 17h9"/><path d="M4 21h6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-renderer.ts"},ug=120,hg=50,fg=/\.(png|jpe?g|gif|webp|svg|avif|bmp|ico)(\?|#|$)/i,pg=/<[a-z][a-z0-9-]*(\s[^<>]*)?\/?>/i;function dd(e){return/^https?:\/\/\S+$/i.test(e)}function mg(e){return/^data:image\//i.test(e)?!0:dd(e)&&fg.test(e)}function ud(e,t){if(e!=="string")return;const r=[];for(const n of t){if(n==null)continue;const s=typeof n=="string"?n.trim():String(n).trim();s&&r.push(s)}if(r.length===0)return;if(r.every(mg))return"image";if(r.every(dd))return"link";if(r.some(n=>pg.test(n))||r.reduce((n,s)=>n+s.length,0)/r.length>ug)return"html-preview"}function hd(e,t){return t.length===0?[...e]:e.map(r=>{if(r.renderer)return r;const i=ud(r.type,t.map(n=>n[r.field]));return i?{...r,renderer:i}:r})}function gg(e){e.events.on("import:after",({tableId:t})=>{bg(e,t)})}async function bg(e,t){try{const r=await e.store.tables.findOne(t);if(!r||r.columns.length===0||r.columns.every(s=>s.renderer))return;const i=(await e.store.rows(t).find()).slice(0,hg);if(i.length===0)return;const n=hd(r.columns,i.map(s=>s.data));if(n.every((s,a)=>s.renderer===r.columns[a]?.renderer))return;await e.store.tables.upsert({...r,columns:n,updatedAt:Date.now()})}catch(r){e.events.emit("plugin:error",{url:cd.id,phase:"runtime",error:r})}}const yg=Object.freeze(Object.defineProperty({__proto__:null,inferRenderer:ud,init:gg,meta:cd,withInferredRenderers:hd},Symbol.toStringTag,{value:"Module"}));function Ai(e){return e.source?e.source.type==="url"?"referenced":"connected":e.origin?"imported":"normal"}function _l(e){return!!(e.source||e.origin)}const Pr='viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15" role="img"',Tl={normal:`<svg ${Pr} aria-label="Local table"><title>Local table</title><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,imported:`<svg ${Pr} aria-label="Imported table (snapshot)"><title>Imported table (snapshot)</title><rect x="3" y="11" width="18" height="10" rx="1"/><line x1="7" y1="15" x2="7" y2="17"/><line x1="12" y1="15" x2="12" y2="17"/><line x1="17" y1="15" x2="17" y2="17"/><path d="M12 2v7"/><polyline points="8 6 12 9 16 6"/></svg>`,referenced:`<svg ${Pr} aria-label="Referenced table (read-only)"><title>Referenced table (read-only)</title><path d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1"/><path d="M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1"/></svg>`,connected:`<svg ${Pr} aria-label="Connected table (live)"><title>Connected table (live)</title><line x1="9" y1="2" x2="9" y2="7"/><line x1="15" y1="2" x2="15" y2="7"/><rect x="6" y="7" width="12" height="7" rx="2"/><path d="M9 14v3a3 3 0 0 0 6 0v-3"/></svg>`},wg=`<svg ${Pr} aria-label="View"><title>View</title><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;var vg=Object.defineProperty,xg=Object.getOwnPropertyDescriptor,cs=(e,t,r,i)=>{for(var n=i>1?void 0:i?xg(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&vg(t,r,n),n};function $g(e,t,r){(ln.instance??Cg()).show(e,t,r)}function kg(e){if(!e)return null;const t=Ai(e);if(t==="connected"||t==="referenced"){const r=e.source?.type??"remote",i=e.source?.writable?"Edits you make are written back to the source.":"It is read-only — edits are not saved back to the source.";return{label:`Connected (live ${r})`,note:`This table is connected to a live ${r} backend: its rows are fetched from the source on demand and are not stored locally. ${i} Closing its window just disconnects the view — the source data is untouched.`}}return t==="imported"?{label:"Imported (snapshot)",note:"This table is a local snapshot imported once from its origin. The rows live in this browser, so edits stay local; use Refresh to re-fetch the latest data from the origin.",...e.origin?{url:e.origin.url}:{}}:{label:"Local",note:"This table was created in the app and is stored locally in your browser."}}function Cg(){const e=document.createElement("table-info-dialog");return document.body.appendChild(e),e}let ln=class extends qe{constructor(){super(...arguments),this.name="",this.info=null,this.provenance=null,this.dialogEl=null,this.close=()=>this.dialogEl?.close(),this.onSubmit=e=>{e.preventDefault(),this.close()}}connectedCallback(){super.connectedCallback(),ln.instance=this}disconnectedCallback(){super.disconnectedCallback(),ln.instance===this&&(ln.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&nn(this.dialogEl,e)}show(e,t,r){this.name=e,this.info=t,this.provenance=r??null,this.updateComplete.then(()=>this.dialogEl?.showModal())}row(e,t,r){if(!t&&!r)return me;const i=r?S`<a href=${r} target="_blank" rel="noopener noreferrer">${t||r}</a>`:S`${t}`;return S`<dt>${e}</dt>
      <dd>${i}</dd>`}render(){const e=this.info,t=!!(e?.source||e?.sourceUrl||e?.license||e?.licenseUrl||e?.about||e?.aboutUrl),r=kg(this.provenance);return S`
      <dialog @cancel=${this.close} @keydown=${tn}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>×</button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>${this.name}</h2>
            <div class="header-actions">
              <button type="submit" class="ghost">Close</button>
            </div>
          </div>
          <div class="dialog-body">
            ${r?S`<div class="kind">
                  <span class="kind-label">${r.label}</span>
                  <p class="kind-note">${r.note}</p>
                  ${r.url?S`<div class="kind-origin">
                        <a href=${r.url} target="_blank" rel="noopener noreferrer"
                          >${r.url}</a
                        >
                      </div>`:me}
                </div>`:me}
            ${e?.descriptionHtml?S`<div class="desc">${sr(e.descriptionHtml)}</div>`:e?.description?S`<div class="desc">${e.description}</div>`:me}
            ${t?S`<dl>
                  ${this.row("Source",e?.source,e?.sourceUrl)}
                  ${this.row("License",e?.license,e?.licenseUrl)}
                  ${this.row("About",e?.about,e?.aboutUrl)}
                </dl>`:me}
            ${!e?.description&&!e?.descriptionHtml&&!t&&!r?S`<p class="empty">No additional information.</p>`:me}
          </div>
        </form>
      </dialog>
    `}};ln.instance=null;ln.styles=[en,Ve`
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
    `];cs([K()],ln.prototype,"name",2);cs([K()],ln.prototype,"info",2);cs([K()],ln.prototype,"provenance",2);ln=cs([it("table-info-dialog")],ln);const Eg=.25,Sg=4;function _g(e){return Math.min(Sg,Math.max(Eg,e))}function Al(e,t,r){return{x:e.x+t,y:e.y+r,scale:e.scale}}const Ar={x:0,y:0,scale:1};function Il(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Tg(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function Ag(e,t){let r={...Ar};t.style.transformOrigin="0 0";const i=new Set,n=()=>{t.style.transform=`translate(${r.x}px, ${r.y}px) scale(${r.scale})`;for(const x of i)x({...r})};let s="none",a={...Ar},c=0,u=0,p=0,w=0,b=0,$=0;const _=(x,P)=>{const y=e.getBoundingClientRect();return{x:x-y.left,y:P-y.top}},T=x=>{if(x.touches.length===2){s="pinch",a={...r};const[P,y]=[x.touches[0],x.touches[1]];p=Il(P,y)||1;const k=_((P.clientX+y.clientX)/2,(P.clientY+y.clientY)/2);w=(k.x-r.x)/r.scale,b=(k.y-r.y)/r.scale,x.preventDefault();return}if(x.touches.length===1&&!Tg(x.target)){const P=x.timeStamp;if(P-$<300){r={...Ar},n(),$=0,s="none",x.preventDefault();return}$=P,s="pan",a={...r},c=x.touches[0].clientX,u=x.touches[0].clientY}else s="none"},A=x=>{if(s==="pan"&&x.touches.length===1){const P=x.touches[0];r=Al(a,P.clientX-c,P.clientY-u),n(),x.preventDefault()}else if(s==="pinch"&&x.touches.length>=2){const[P,y]=[x.touches[0],x.touches[1]],k=_g(a.scale*(Il(P,y)/p)),he=_((P.clientX+y.clientX)/2,(P.clientY+y.clientY)/2);r={x:he.x-w*k,y:he.y-b*k,scale:k},n(),x.preventDefault()}},B=x=>{x.touches.length===0?s="none":x.touches.length===1&&s==="pinch"&&(s="pan",a={...r},c=x.touches[0].clientX,u=x.touches[0].clientY)};let U=!1,V={...Ar},X=0,le=0,re=!1;const ee=(x,P)=>{const y=e.getBoundingClientRect();return x>=y.left&&x<=y.right&&P>=y.top&&P<=y.bottom},Y=x=>{if(!U)return;const P=x.clientX-X,y=x.clientY-le;!re&&Math.hypot(P,y)<4||(re=!0,document.body.style.cursor="grabbing",r=Al(V,P,y),n(),x.preventDefault())},te=()=>{U&&(U=!1,document.body.style.cursor="",window.removeEventListener("mousemove",Y,!0),window.removeEventListener("mouseup",ye,!0))};function ye(){te()}const xe=x=>{x.button===2&&ee(x.clientX,x.clientY)&&(U=!0,re=!1,V={...r},X=x.clientX,le=x.clientY,window.addEventListener("mousemove",Y,!0),window.addEventListener("mouseup",ye,!0))},m=x=>{re&&(x.preventDefault(),re=!1)};return e.addEventListener("touchstart",T,{passive:!1}),e.addEventListener("touchmove",A,{passive:!1}),e.addEventListener("touchend",B),e.addEventListener("touchcancel",B),window.addEventListener("mousedown",xe,!0),window.addEventListener("contextmenu",m,!0),{snapshot:()=>({...r}),reset:()=>{r={...Ar},n()},restore:x=>{r={...x},n()},subscribe:x=>(i.add(x),()=>i.delete(x)),dispose:()=>{e.removeEventListener("touchstart",T),e.removeEventListener("touchmove",A),e.removeEventListener("touchend",B),e.removeEventListener("touchcancel",B),window.removeEventListener("mousedown",xe,!0),window.removeEventListener("contextmenu",m,!0),te()}}}function fd(e,t){let r=null;const i=n=>{const s=document.getElementById(e);s&&(s.style.transformOrigin="0 0",s.style.transform=`translate(${-n.x/n.scale}px, ${-n.y/n.scale}px) scale(${1/n.scale})`)};return{enter(){const n=t();r||!n||(i(n.snapshot()),r=n.subscribe(i))},exit(){r?.(),r=null;const n=document.getElementById(e);n&&(n.style.transform="",n.style.transformOrigin="")}}}const Hi=new Map,Or=new Set;function pd(e,t){const r=Hi.get(e);if(Hi.set(e,t.status),t.status==="minimized"){r==="maximized"&&Or.add(e);return}if(t.status==="maximized"){Or.delete(e);return}t.status==="normalized"&&Or.delete(e)&&queueMicrotask(()=>t.maximize?.())}function md(e){Or.add(e),Hi.set(e,"minimized")}function gd(e){Hi.delete(e),Or.delete(e)}const Ci=new Map;function ds(e,t){const i=(Ci.get(e)??Promise.resolve()).then(t,t);return Ci.set(e,i),i.finally(()=>{Ci.get(e)===i&&Ci.delete(e)}),i}function Ig(){for(const e of document.querySelectorAll(".jsPanel"))e.status==="maximized"&&e.maximize?.(void 0,!0)}function Rg(e){let t=0;const r=()=>{t||(t=requestAnimationFrame(()=>{t=0,Ig()}))},i=typeof ResizeObserver<"u"?new ResizeObserver(r):null;return i?.observe(e),window.addEventListener("resize",r),()=>{t&&cancelAnimationFrame(t),t=0,i?.disconnect(),window.removeEventListener("resize",r)}}const Pg="input, textarea, select, button, a, .jsPanel-controlbar",Dg=".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",Vs=new WeakMap;function bd(e){const t=e.status==="maximized";for(const r of e.querySelectorAll(Dg))Vs.has(r)||Vs.set(r,r.style.cursor||"move"),r.style.cursor=t?"pointer":Vs.get(r)??"move"}function Og(){for(const e of document.querySelectorAll(".jsPanel"))bd(e)}function jg(){const e=r=>{let i=null;for(const s of r.composedPath())if(s instanceof HTMLElement){if(s.matches(Pg))return;if(s.classList.contains("jsPanel-titlebar")){i=s;break}}if(!i)return;const n=i.closest(".jsPanel");n&&(n.status==="maximized"||n.status==="minimized"?n.normalize?.():n.maximize?.())},t=r=>{const i=r.detail,n=typeof i=="string"?document.getElementById(i):null;n?bd(n):Og()};return document.addEventListener("dblclick",e,!0),document.addEventListener("jspanelstatuschange",t),document.addEventListener("jspanelloaded",t),()=>{document.removeEventListener("dblclick",e,!0),document.removeEventListener("jspanelstatuschange",t),document.removeEventListener("jspanelloaded",t)}}const zg=200,Lg=100;function Fg(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<zg||e.h<Lg?null:{...e}}function qi(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}let Gs=0;function yd(){return Gs=Math.max(Date.now(),Gs+1),Gs}const us=new Map;function wd(e,t){us.set(e,t)}function hs(e){us.delete(e)}function Mg(e){return us.has(e)}function Bg(e){try{us.get(e)?.()}catch{}}const Nr=(()=>{const e=new URLSearchParams(location.search).get("minimize");return e===null?!1:!/^(0|false|no)$/i.test(e)})();function Ng(e){return e.filter(t=>!t.minimized).slice().sort((t,r)=>(t.z??-1/0)-(r.z??-1/0)).map(t=>t.id)}let Rl=!1;async function Ug(){Rl||(Rl=!0,document.addEventListener("easydb:restack-windows",()=>void Pl())),await Pl()}async function Pl(){if(Nr)return;const e=await pe();for(let t=0;t<=12;t++){const[r,i]=await Promise.all([e.store.tables.find(),e.store.viewInstances.find()]),n=[...r.filter(a=>a.workspaceId===e.workspaceId&&!a.windowGeometry?.closed).map(a=>({id:a.id,z:a.windowGeometry?.z,minimized:a.windowGeometry?.minimized===!0})),...i.filter(a=>a.workspaceId===e.workspaceId&&a.open).map(a=>({id:a.id,z:a.windowGeometry?.z,minimized:a.windowGeometry?.minimized===!0}))],s=Ng(n);if(t<12&&!s.every(a=>Mg(a))){await new Promise(a=>setTimeout(a,80));continue}for(const a of s)Bg(a);return}}var Hg=Object.defineProperty,qg=Object.getOwnPropertyDescriptor,Gr=(e,t,r,i)=>{for(var n=i>1?void 0:i?qg(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Hg(t,r,n),n};let Jn=class extends qe{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return S`<button
        class="icon ${e?"active":""}"
        title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"}
        @click=${this.openSearch}
      >
        <span class="mi sm">search</span>
      </button>`}return S`<input
      type="search"
      placeholder="search…"
      .value=${this.query}
      @input=${this.onInput}
      @blur=${this.onBlur}
    />`}};Jn.styles=[Vt,Ve`
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
    `];Gr([Kt({type:String})],Jn.prototype,"tableId",2);Gr([K()],Jn.prototype,"query",2);Gr([K()],Jn.prototype,"open",2);Gr([bn("input")],Jn.prototype,"inputEl",2);Jn=Gr([it("panel-search")],Jn);var Wg=Object.defineProperty,Kg=Object.getOwnPropertyDescriptor,pr=(e,t,r,i)=>{for(var n=i>1?void 0:i?Kg(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Wg(t,r,n),n};let jn=class extends qe{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.rowsActive=!1,this.runTableButton=async(e,t)=>{const r=t?.currentTarget??void 0,i=await pe();try{await Promise.resolve(e.onClick(i.api,{tableId:this.tableId,anchor:r}))}catch(n){console.error(`[table-button:${e.id}]`,n)}}}async connectedCallback(){super.connectedCallback();const e=await pe();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(r=>r.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await pe();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await pe(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const r={};for(const i of t.columns)r[i.field]=Vg(i);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:r,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}render(){return S`
      <button title="Add a blank row" aria-label="Add row" @click=${this.addRow}>
        <span class="mi sm">add</span>
      </button>
      <button title="Edit columns" aria-label="Columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span>
      </button>
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>S`<button
              class=${e.danger?"danger":""}
              title=${e.tooltip??e.label}
              aria-label=${e.label}
              @click=${t=>this.runTableButton(e,t)}
            >
              ${e.icon?e.icon.trimStart().startsWith("<svg")?S`<span class="icon-svg">${ko(e.icon)}</span>`:S`<span class="mi sm">${e.icon}</span>`:S`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};jn.styles=[Vt,Ve`
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
    `];pr([Kt({type:String})],jn.prototype,"tableId",2);pr([Kt({type:Boolean})],jn.prototype,"active",2);pr([K()],jn.prototype,"rowCount",2);pr([K()],jn.prototype,"tableButtons",2);pr([K()],jn.prototype,"table",2);jn=pr([it("panel-footer")],jn);function Vg(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function Ys(e){return e.title?.trim()?e.title.trim():e.name}function Gg(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function Yg(e){const t=document.querySelector("app-shell")?.shadowRoot,r=t?.querySelector("header"),i=t?.querySelector("footer");r&&(e.style.top=`${r.offsetHeight}px`),i&&(e.style.bottom=`${i.offsetHeight}px`)}const Dn=new Map,vd=new Set;let Dl=!1,Xo=null;function Qo(){return Xo}async function xd(){const e=await pe();await Promise.all([...Dn.keys()].map(t=>Ii(t,e)))}function $d(e){const t=Dn.get(e);return t?(t.status==="minimized"&&t.normalize?.(),t.front?.(),!0):(Xg(e),!0)}async function Xg(e){const t=await pe(),r=await t.store.tables.findOne(e);r?.windowGeometry?.closed&&await t.store.tables.patch(e,{windowGeometry:{...r.windowGeometry,closed:!1},updatedAt:Date.now()})}async function kd(e){const t=await pe();await ib(e,t)}async function Cd(){if(Dl)return;Dl=!0;const e=await pe(),t=document.getElementById("easydb-panels"),r=document.getElementById("easydb-panels-viewport");if(t&&r){Xo=Ag(t,r);const n=()=>Yg(t);n(),window.addEventListener("resize",n);const s=document.querySelector("app-shell")?.shadowRoot,a=s?.querySelector("header"),c=s?.querySelector("footer");if(typeof ResizeObserver<"u"&&(a||c)){const u=new ResizeObserver(n);a&&u.observe(a),c&&u.observe(c)}Rg(r)}jg();const i=(await e.store.tables.find()).filter(n=>n.workspaceId===e.workspaceId);i.sort(qi);for(const n of i)n.windowGeometry?.closed||Ol(n,e);e.store.tables.subscribe(n=>{const s=n.filter(u=>u.workspaceId===e.workspaceId),a=new Map(s.map(u=>[u.id,u]));for(const[u,p]of Dn){const w=a.get(u);if(!w||w.windowGeometry?.closed){Dn.delete(u),hs(u),vd.add(u);try{p.status!=="closed"&&p.close()}catch{}}}const c=s.filter(u=>!Dn.has(u.id)&&!u.windowGeometry?.closed).sort(qi);for(const u of c)Ol(u,e)}),Ug()}const Qg=720,Jg=360;function Ol(e,t){const r=`panel-${Ed(e.id)}`,i=Gg(),n=Fg(e.windowGeometry),s=Nr||n?.minimized===!0,a=()=>{const y=document.createElement("data-table");return y.tableId=e.id,y.style.height="100%",y},c=s?document.createElement("div"):a();let u=s?null:c,p=Ys(e),w=-1,b=-1;const $=()=>{typeof re.setHeaderTitle=="function"&&re.setHeaderTitle(p+Tc(w,b))},_=y=>{const k=y.detail;k.key===e.id&&(w=k.count,b=k.total,$())};document.addEventListener(Mi,_);const T=()=>{U.active=!1,u?.remove(),u=null},A=()=>{if(u)return;const y=document.getElementById(r)?.querySelector(".jsPanel-content");if(!y)return;y.replaceChildren();const k=a();y.appendChild(k),u=k,U.active=!0},B=document.createElement("panel-search");B.tableId=e.id;const U=document.createElement("panel-footer");U.tableId=e.id,U.active=!s;const V=fd(r,()=>Xo),X=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:eb(),le=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:`${Qg} ${Jg}`},re=M.create({id:r,container:i,headerTitle:p,headerLogo:Tl[Ai(e)],footerToolbar:U,theme:"primary",content:c,...le,position:X,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>Ii(e.id,t)},resizeit:{containment:!1,stop:()=>Ii(e.id,t)},onfronted:()=>nb(e.id,t),onclosed:async()=>{if(Dn.delete(e.id),hs(e.id),gd(`table:${e.id}`),vd.delete(e.id))return;const y=await t.store.tables.findOne(e.id);if(!y)return;const k=y.windowGeometry??{x:60,y:60,w:720,h:360,z:1,minimized:!1,maximized:!1};await t.store.tables.patch(e.id,{windowGeometry:{...k,closed:!0},updatedAt:Date.now()})},onstatuschange:y=>{y.status==="minimized"?T():(y.status==="normalized"||y.status==="maximized")&&A(),y.status==="maximized"?V.enter():V.exit(),pd(`table:${e.id}`,y),Ii(e.id,t)}});Dn.set(e.id,re),wd(e.id,()=>re.front?.(void 0,!1));const ee=document.getElementById(r),Y=ee?.querySelector(".jsPanel-controlbar");Y&&Y.prepend(B),_l(e)&&ee?.classList.add("eda-refreshable");const te=ee?.querySelector(".jsPanel-titlebar");te&&(te.tabIndex=-1,te.style.outline="none",te.addEventListener("pointerdown",()=>te.focus()));let ye=null;const xe=document.createElement("button");xe.type="button",xe.title="Table info",xe.setAttribute("aria-label","Table info"),xe.className="eda-info-btn",xe.textContent="ⓘ",xe.style.cssText="display:none;background:none;border:0;color:inherit;cursor:pointer;font-size:1rem;line-height:1;padding:0 0.3rem;",xe.addEventListener("click",y=>{y.stopPropagation(),ye&&$g(p,ye.info??{},{source:ye.source,origin:ye.origin})}),Y?.prepend(xe);const m=y=>{ye=y??null;const k=!!(y?.info||y?.source||y?.origin);xe.style.display=k?"inline-flex":"none"};m(e),s&&typeof re.minimize=="function"?(n?.maximized&&md(`table:${e.id}`),queueMicrotask(()=>re.minimize?.())):n?.maximized&&typeof re.maximize=="function"&&queueMicrotask(()=>re.maximize?.());let x=Ai(e);t.store.tables.subscribe(y=>{const k=y.find(ge=>ge.id===e.id);if(!k)return;m(k),Ys(k)!==p&&(p=Ys(k),$());const he=Ai(k);he!==x&&(x=he,typeof re.setHeaderLogo=="function"&&re.setHeaderLogo(Tl[he]),ee?.classList.toggle("eda-refreshable",_l(k)))});const P=re.close.bind(re);re.close=()=>(document.removeEventListener(Mi,_),P())}let Zg=0;function eb(){const e=Zg++;return{my:"left-top",at:"left-top",offsetX:40+e%8*30,offsetY:80+e%8*30}}function Ii(e,t){return ds(`table:${e}`,()=>tb(e,t))}async function tb(e,t){const r=document.getElementById(`panel-${Ed(e)}`);if(!r)return;const i=Dn.get(e)?.status??"normalized";try{const s=(await t.store.tables.findOne(e))?.windowGeometry,a=Nr?s?.minimized??!1:i==="minimized",u=Nr||i==="minimized"?s?.maximized??!1:i==="maximized";let p=r.offsetLeft,w=r.offsetTop,b=r.offsetWidth,$=r.offsetHeight;const _=i==="minimized"||i==="maximized";if(_&&!s)return;_&&s&&(p=s.x,w=s.y,b=s.w,$=s.h),p<=-9e3&&(p=s?.x??40);const T={x:p,y:w,w:b,h:$,z:s?.z??0,minimized:a,maximized:u};await t.store.tables.patch(e,{windowGeometry:T,updatedAt:Date.now()})}catch{}}function nb(e,t){return ds(`table:${e}`,()=>rb(e,t))}async function rb(e,t){try{const r=await t.store.tables.findOne(e);if(!r)return;const i=r.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...i,z:yd()},updatedAt:Date.now()})}catch{}}async function ib(e,t){if(!(await t.store.tables.findOne(e))?.source){const i=t.store.rows(e),n=await i.find();await i.bulkRemove(n.map(s=>s.id))}await t.store.tables.remove(e)}function Ed(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}const sb=Object.freeze(Object.defineProperty({__proto__:null,FORCE_MINIMIZED:Nr,currentPanZoom:Qo,deleteTable:kd,focusTableWindow:$d,initWindowManager:Cd,persistTablePanelGeometry:xd},Symbol.toStringTag,{value:"Module"})),ob={id:"delete-table",name:"Delete Table",type:"ui",version:"0.1.0",description:"Adds a trash button to each table window that permanently deletes the table and its rows (with confirmation).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/delete-table.ts"};function ab(e){e.ui.registerTableButton({id:"delete-table:delete",label:"Delete",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="#7f1d1d" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',tooltip:"Delete this table permanently",onClick:async(t,r)=>{const i=await t.store.tables.findOne(r.tableId);!i||!await t.ui.dialogs.confirm(i.source?`Delete the live table "${i.name}"? Its data stays on the server — only the local connection is removed.`:`Permanently delete table "${i.name}" and all its rows? This can't be undone.`,"Delete table")||(await kd(r.tableId),t.ui.dialogs.toast(`Deleted "${i.name}".`,{kind:"success",title:"Delete table"}))}})}const lb=Object.freeze(Object.defineProperty({__proto__:null,init:ab,meta:ob},Symbol.toStringTag,{value:"Module"}));var cb=Object.defineProperty,db=Object.getOwnPropertyDescriptor,Jo=(e,t,r,i)=>{for(var n=i>1?void 0:i?db(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&cb(t,r,n),n};function ub(e,t){return(pn.instance??hb()).open(e,t)}function hb(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let pn=class extends qe{constructor(){super(...arguments),this.rows=[],this.subject="",this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((r,i)=>{const n=this.rows[i],s=n.field.trim(),a=n.label.trim()||s;return{...r,field:s,label:a,hidden:n.hidden}});this.finish(t)},this.toggleAllHidden=()=>{const e=this.rows.length>0&&this.rows.every(t=>t.hidden);this.rows=this.rows.map(t=>({...t,hidden:!e}))}}connectedCallback(){super.connectedCallback(),pn.instance=this}disconnectedCallback(){super.disconnectedCallback(),pn.instance===this&&(pn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&nn(this.dialogEl,e)}open(e,t){return this.source=e,this.subject=t??"",this.rows=e.map(r=>({field:r.field,label:r.label,hidden:!!r.hidden})),new Promise(r=>{this.resolveFn=r,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((r,i)=>{const n=r.field.trim().toLowerCase();if(n===""){e.add(i);return}(t.get(n)??t.set(n,[]).get(n)).push(i)});for(const r of t.values())if(r.length>1)for(const i of r)e.add(i);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,r){this.rows=this.rows.map((i,n)=>n===e?{...i,[t]:r}:i)}setHidden(e,t){this.rows=this.rows.map((r,i)=>i===e?{...r,hidden:t}:r)}render(){const e=this.invalidIndices(),t=e.size;return S`
      <dialog @cancel=${this.onCancel} @keydown=${tn}>
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
                @keydown=${r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),this.toggleAllHidden())}}
              >
                Hide
              </div>
              ${this.rows.map((r,i)=>S`
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
    `}};pn.instance=null;pn.styles=[en,Ve`
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
    `];Jo([K()],pn.prototype,"rows",2);Jo([K()],pn.prototype,"subject",2);pn=Jo([it("column-names-dialog")],pn);async function fb(e,t,r){const i=t.origin?.url;if(!i)throw new Error(`"${t.name}" has no source URL to reload from.`);const n={api:e,fetchText:(re,ee)=>Xi(e,re,ee??`Reading ${t.name}…`,{maxBytes:null}),panel:{}},s=await r.list(n,{kind:"url",url:i});if(s.length===0)throw new Error(`Nothing to read at ${i} any more.`);const a=s.find(re=>re.name===t.name)??(s.length===1?s[0]:void 0);if(!a)throw new Error(`"${t.name}" is no longer one of the tables at ${i}.`);let c=[];const u=[];for await(const re of r.read(n,a))re.columns?.length&&(c=re.columns),u.push(...re.rows);const{columns:p,newFields:w}=Qi(t.columns,c,t.deletedColumns??[]),b=t.origin?.pks??[],$=new Set(c.map(re=>re.field)),_=t.columns.map(re=>re.field).filter(re=>!$.has(re)&&!b.includes(re)),T=(t.deletedColumns??[]).filter(re=>$.has(re)),A=e.store.rows(t.id),B=await A.find(),{data:U,merged:V}=kc({oldRows:B.map(re=>({data:re.data})),freshRows:u,pks:b,userAddedFields:_,deletedRemoteFields:T}),X=Date.now();p.length>0&&await e.store.tables.patch(t.id,{columns:p,updatedAt:X}),await A.bulkRemove(B.map(re=>re.id));const le=U.map(re=>({id:ot(),tableId:t.id,data:re,updatedAt:X}));return await A.bulkInsert(le),{rowCount:le.length,newFields:w,merged:V}}var pb=Object.defineProperty,mb=Object.getOwnPropertyDescriptor,xt=(e,t,r,i)=>{for(var n=i>1?void 0:i?mb(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&pb(t,r,n),n};const gb="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",bb="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",yb='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',jl=[{label:"Northwind — sample database (JSON dump)",url:gb,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:bb,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],wb={id:"import-data",name:"Import Data",type:"importer",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/import-data.ts"};function vb(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:yb,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>$b(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:r})=>xb(t,r)})}async function xb(e,t){const r=await e.store.tables.findOne(t);if(r?.origin?.url)try{const i=await Sd(r.origin.type);if(!i)throw new Error(`No importer is installed that can read a "${r.origin.type}" source.`);const n=await fb(e,r,i),s=[];n.newFields.length>0&&s.push(`${n.newFields.length} new column${n.newFields.length===1?"":"s"}`),!n.merged&&n.rowCount>0&&s.push("rows replaced (no primary key to match on)"),e.ui.dialogs.toast(`Refreshed "${r.name}" (${n.rowCount.toLocaleString()} rows)${s.length?` — ${s.join(", ")}`:""}.`,{kind:n.newFields.length>0?"warning":"success",title:"Refresh"})}catch(i){e.ui.dialogs.toast(`Couldn't refresh "${r.name}": ${i.message}`,{kind:"error",title:"Refresh"})}}async function $b(e,t="auto"){const i=await(Je.instance??Ab()).open({presetKind:t,async listDatabases(A){const B=gn(A);return Mo(U=>e.backend.fetch(U),B.base)},async listTables(){const A=e.workspaceId();return(await e.store.tables.find()).filter(B=>B.workspaceId===A&&!B.source).map(B=>({id:B.id,name:B.name})).sort((B,U)=>B.name.localeCompare(U.name))}});if(!i)return;const{url:n,file:s,kind:a,dbChosen:c,editColumns:u,maxRows:p,mode:w,panel:b,target:$}=i,_=s?.name??n,T=u?(A,B)=>ub(A,B):void 0;typeof b.separator=="string"&&b.separator;try{const A=await Sd(a);if(A){const B=a==="json"?await kb(e,n,s,p,w):null;if(B?.isDump&&await e.ui.dialogs.confirm(`"${_}" is a workspace dump, not a plain table. Restore it — tables, window layout, views and filters? Choose Cancel to import only its tables as data.`,"Restore workspace")){await zo(e,B.text,_,{maxRows:p,editColumns:T,...s?{}:{originUrl:n}});return}const U=s?s.name:dr(n),V=B?{kind:"text",text:B.text,name:U}:s?{kind:"file",file:s}:{kind:"url",url:n},X=await xc(e,A,V,{mode:w,target:$,maxRows:p,panel:b,...B&&!s?{origin:{type:A.id,url:n}}:{},...T?{editColumns:le=>T(le)}:{}});A.ownToasts||Cb(e,X,_);return}if(w==="reference"&&!s){a==="datasette"?await Tb(e,n):await _d(e,n,a);return}await Ko(e,n,{skipTablePicker:c,maxRows:p,editColumns:T})}catch(A){e.ui.dialogs.toast(`Could not import ${_}: ${A.message}`,{kind:"error",title:"Import"})}}async function kb(e,t,r,i,n){if(n==="reference")return null;const s=r?await r.text():await Xi(e,t,`Reading ${dr(t)}…`,i!=null?{maxBytes:null}:{});try{return{text:s,isDump:jo(JSON.parse(s))}}catch{return{text:s,isDump:!1}}}async function Sd(e){const{registries:t}=await pe();return t.importers.find(r=>r.id===e&&r.supports?.kernel===!0)}function Cb(e,t,r){if(t.cancelled&&t.landed.length===0)return;const i=t.landed.reduce((a,c)=>a+c.rowCount,0),n=t.landed.length===1?`"${t.landed[0].tableName}"`:`${t.landed.length} tables from ${r}`;if(t.landed.length>0){const a=t.failed.length>0?` — ${t.failed.length} failed`:"";e.ui.dialogs.toast(`Imported ${n} (${i.toLocaleString()} rows)${a}.`,{kind:t.failed.length>0?"warning":"success",title:"Import"});return}const s=t.failed.map(a=>`${a.name}: ${a.error}`).join("; ");e.ui.dialogs.toast(`Could not import ${r}${s?` — ${s}`:""}.`,{kind:"error",title:"Import"})}function Eb(e){const t=JSON.parse(e),r=i=>Array.isArray(i)&&i.every(n=>n!=null&&typeof n=="object"&&!Array.isArray(n));if(r(t))return t;if(t&&typeof t=="object"){const i=t;for(const n of["rows","records","data"])if(r(i[n]))return i[n];for(const n of Object.values(i))if(r(n))return n}return[]}function Sb(e){const t=Eb(e).slice(0,50),r=n=>typeof n=="number"?"number":typeof n=="boolean"?"boolean":"string",i=new Map;for(const n of t)for(const[s,a]of Object.entries(n))!i.has(s)&&a!=null?i.set(s,r(a)):i.has(s)||i.set(s,"string");return[...i.entries()].map(([n,s])=>({field:n,label:n,type:s}))}function _b(e,t,r){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(r)}.json?_size=max`}async function Tb(e,t){const r=gn(t),i=c=>e.backend.fetch(c),n=[];if(r.db&&r.table)n.push({db:r.db,table:r.table});else if(r.db)for(const c of await Bi(i,r.base,r.db))c.hidden||n.push({db:c.db,table:c.table});else for(const c of await Mo(i,r.base))for(const u of await Bi(i,r.base,c))u.hidden||n.push({db:u.db,table:u.table});if(n.length===0)throw new Error("No tables found to reference at that URL.");let s=0;const a=[];for(const c of n)try{await _d(e,_b(r.base,c.db,c.table),"json",{nameHint:`${c.db}/${c.table}`,silent:!0}),s++}catch(u){a.push(`${c.table}: ${u.message}`)}e.ui.dialogs.toast(`Referenced ${s} table${s===1?"":"s"}${a.length?` — ${a.length} failed`:""}.`,{kind:a.length?"warning":"success",title:"Reference"})}async function _d(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("No active workspace.");const s=i.nameHint??dr(t),a=await Xi(e,t,`Reading ${s}…`,{maxBytes:null}),c=r==="csv"?ur(a).columns:Sb(a);if(c.length===0)throw new Error("No columns found in the referenced data.");const u=new Set((await e.store.tables.find()).filter(b=>b.workspaceId===n).map(b=>b.name.toLowerCase()));let p=s;for(let b=2;u.has(p.toLowerCase());b++)p=`${s}-${b}`;const w={id:ot(),workspaceId:n,name:p,code:At(p),columns:c,view:"table",source:{type:"url",config:{url:t,format:r}},updatedAt:Date.now()};await e.store.tables.insert(w),i.silent||e.ui.dialogs.toast(`Referenced ${p} — live, read-only.`,{kind:"success",title:"Reference"})}function Ab(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function Ib(e){try{const t=new URL(e),r=t.hostname.toLowerCase(),i=[...t.searchParams.keys()].some(s=>s.startsWith("_")),n=r.includes("datasette")||i;return!i&&/\.(csv|tsv|tab)$/i.test(t.pathname)?"csv":!i&&/\.json$/i.test(t.pathname)?"json":n?"datasette":"json"}catch{return"json"}}function zl(e,t){if(t!=="datasette"||!e)return!1;try{const r=gn(e);return!r.db&&!r.table}catch{return!1}}function Rb(e){return/\.(csv|tsv|tab)$/i.test(e)?"csv":"json"}let Je=class extends qe{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.targetKind="new",this.targetTableId="",this.tables=[],this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.panelEl=null,this.mountedPanel="",this.panelGeneration=0,this.formats=[],this.acceptAttr=".txt",this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t&&!this.file)return;const r=this.resolvedKind,i=this.maxRows,n=this.editColumns&&this.mode==="copy",s=this.panelValue(),a=this.supportsTarget?this.target:{kind:"new"},c=this.file?"copy":this.mode;if(this.file){this.finish({url:"",file:this.file,kind:r,editColumns:n,maxRows:i,mode:c,panel:s,target:a});return}const u=r==="datasette"&&!!this.selectedDb&&zl(t,r),p=u?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:p,kind:r,dbChosen:u,editColumns:n,maxRows:i,mode:c,panel:s,target:a})}}get supportsTarget(){return this.formats.find(e=>e.id===this.resolvedKind)?.kernel===!0}get target(){return this.mode==="reference"||this.targetKind==="new"||!this.targetTableId?{kind:"new"}:{kind:this.targetKind,tableId:this.targetTableId}}get resolvedKind(){return this.kind!=="auto"?this.kind:this.file?Rb(this.file.name):Ib(this.url.trim())}get maxRows(){const e=Math.floor(Number(this.maxRowsInput));return Number.isFinite(e)&&e>0?e:void 0}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),Je.instance=this}disconnectedCallback(){super.disconnectedCallback(),Je.instance===this&&(Je.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&nn(this.dialogEl,e)}updated(){const e=this.shadowRoot?.querySelector(".panel-slot");if(!e){this.panelEl=null,this.mountedPanel="";return}const t=this.activePanelTag,r=t?`${t}#${this.panelGeneration}`:"";if(r===this.mountedPanel||(e.replaceChildren(),this.panelEl=null,this.mountedPanel=r,!t))return;const i=document.createElement(t);i.addEventListener("change",()=>this.requestUpdate()),e.appendChild(i),this.panelEl=i}get activePanelTag(){return this.formats.find(e=>e.id===this.resolvedKind)?.panel}get activeLabel(){return this.formats.find(e=>e.id===this.resolvedKind)?.label??this.resolvedKind}panelValue(){const e=this.panelEl?.value;return e&&typeof e=="object"?e:{}}async loadFormats(){const{registries:e}=await pe(),t=[...e.importers].sort((n,s)=>(n.order??Number.MAX_SAFE_INTEGER)-(s.order??Number.MAX_SAFE_INTEGER)).map(n=>({id:n.id,label:n.label,panel:n.panel,kernel:n.supports?.kernel})),r=t.some(n=>n.id==="datasette")?t:[...t,{id:"datasette",label:"Datasette (table or instance)"}];this.formats=r;const i=new Set([".txt"]);for(const n of e.importers)for(const s of n.accept??[])i.add(s);this.acceptAttr=[...i].join(",")}open(e){this.targetKind="new",this.targetTableId="",this.tables=[],e?.listTables?.().then(r=>{this.tables=r}),this.url="",this.kind=e?.presetKind??"auto",this.presetIdx=-1,this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.panelGeneration+=1,this.resetDbList(),this.listDatabases=e?.listDatabases??null;const t=this.loadFormats();return new Promise(r=>{this.resolveFn=r,t.then(()=>this.updateComplete).then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const r=jl[t];r&&(this.url=r.url,this.kind=r.kind)}onFileChange(e){const r=e.target.files?.[0]??null;this.file=r,r&&(this.url="",this.presetIdx=-1,this.resetDbList())}renderDbPicker(){return!this.listDatabases||!zl(this.url.trim(),this.resolvedKind)?me:S`
      <label>
        Database
        <div class="row db-row">
          <select
            .value=${this.selectedDb}
            ?disabled=${!this.dbList||this.dbList.length===0}
            @change=${e=>{this.selectedDb=e.target.value}}
          >
            ${this.dbList?S`
                  <option value="" ?selected=${this.selectedDb===""}>
                    — all databases (choose tables next) —
                  </option>
                  ${this.dbList.map(e=>S`<option value=${e} ?selected=${e===this.selectedDb}>${e}</option>`)}
                `:S`<option value="">— not loaded —</option>`}
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
      ${this.dbError?S`<p class="hint error">${this.dbError}</p>`:me}
    `}renderTarget(){if(!this.supportsTarget||this.mode==="reference")return me;const e=this.targetKind!=="new";return S`
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
          ${e?S`<select
                data-testid="import-target-table"
                .value=${this.targetTableId}
                @change=${t=>{this.targetTableId=t.target.value}}
              >
                ${this.tables.length===0?S`<option value="">— no tables yet —</option>`:this.tables.map(t=>S`<option value=${t.id} ?selected=${t.id===this.targetTableId}>
                          ${t.name}
                        </option>`)}
              </select>`:me}
        </div>
      </label>
      ${e?S`<p class="hint">
            The table keeps its own columns. Values map onto them the way the format requires — a
            CSV by column position, so its header names need not match.
          </p>`:me}
    `}renderPluginBlock(){const e=this.renderDbPicker();return!!!this.activePanelTag&&e===me?me:S`
      <fieldset class="block">
        <legend>${this.activeLabel} options</legend>
        <div class="panel-slot"></div>
        ${e}
      </fieldset>
    `}render(){return S`
      <dialog @cancel=${this.onCancel} @keydown=${tn}>
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
                ${this.formats.map(e=>S`<option value=${e.id} ?selected=${this.kind===e.id}>${e.label}</option>`)}
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
                  ${jl.map((e,t)=>S`<option value=${String(t)} ?selected=${t===this.presetIdx}>
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
              ${this.file?S`<p class="hint">
                    Importing <strong>${this.file.name}</strong> as
                    ${this.resolvedKind.toUpperCase()}.
                  </p>`:me}

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
              ${this.file?S`<p class="hint">Uploaded files can only be imported as a Copy.</p>`:me}
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
              ${this.mode==="reference"?S`<p class="hint">
                    A Reference keeps the source's own schema, so there is nothing to edit.
                  </p>`:me}

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
      ${me}
    `}};Je.instance=null;Je.styles=[en,Ve`
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
    `];xt([K()],Je.prototype,"url",2);xt([K()],Je.prototype,"kind",2);xt([K()],Je.prototype,"presetIdx",2);xt([K()],Je.prototype,"dbList",2);xt([K()],Je.prototype,"dbLoading",2);xt([K()],Je.prototype,"dbError",2);xt([K()],Je.prototype,"selectedDb",2);xt([K()],Je.prototype,"editColumns",2);xt([K()],Je.prototype,"file",2);xt([K()],Je.prototype,"maxRowsInput",2);xt([K()],Je.prototype,"mode",2);xt([K()],Je.prototype,"targetKind",2);xt([K()],Je.prototype,"targetTableId",2);xt([K()],Je.prototype,"tables",2);xt([K()],Je.prototype,"formats",2);xt([K()],Je.prototype,"acceptAttr",2);Je=xt([it("import-dialog")],Je);const Pb=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return Je},init:vb,meta:wb},Symbol.toStringTag,{value:"Module"})),Db={id:"auto-sync",name:"Auto Sync",type:"sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-sync.ts"},Ob=6e4;let Ll=null,fo=!1;const Xs=new Map;function jb(e){Ll===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(Ll=setInterval(()=>{Td(e)},Ob)))}async function Td(e){if(fo)return;const t=e.workspaceId();if(!t)return;const r=await rd(e);if(r)try{await zb(e,r,t)}catch(i){console.warn("[auto-sync]",i)}}async function zb(e,t,r){const i=await is(e),n=await id(e,r),s=await fetch(`${t}/sync/${encodeURIComponent(r)}`);if(s.status===404){await Fl(e,t,r,i,null);return}if(!s.ok)return;const a=ss(s.headers.get("ETag")),c=await s.text();if(kl(i)===kl(c)){a&&a!==n&&await Qn(e,r,a);return}if(a&&a===n){await Fl(e,t,r,i,n);return}if(!(a&&Xs.get(r)===a)){fo=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${r}". Pull and replace your local copy?`,"auto-sync")){const p=JSON.parse(c),w=await sd(e,r,p);a&&await Qn(e,r,a),Xs.delete(r),e.ui.dialogs.toast(`Pulled ${w} table${w===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else a&&Xs.set(r,a)}finally{fo=!1}}}async function Fl(e,t,r,i,n){const s={"Content-Type":"application/json"};n&&(s["If-Match"]=`"${n}"`);const a=await fetch(`${t}/sync/${encodeURIComponent(r)}`,{method:"PUT",headers:s,body:i});if(a.ok){const c=ss(a.headers.get("ETag"));c&&await Qn(e,r,c);return}if(a.status===412){const c=await a.json().catch(()=>({}));c.currentEtag&&await Qn(e,r,c.currentEtag)}}const Ad=Object.freeze(Object.defineProperty({__proto__:null,load:jb,meta:Db,tick:Td},Symbol.toStringTag,{value:"Module"}));var Lb=Object.defineProperty,Fb=Object.getOwnPropertyDescriptor,mr=(e,t,r,i)=>{for(var n=i>1?void 0:i?Fb(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Lb(t,r,n),n};function po(e,t){(Ht.instance??Mb()).open(e,t)}function Mb(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function Qs(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let Ht=class extends qe{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.mode==="template"?this.saveTemplate():this.mode==="instance"?this.saveInstance():this.close()}}connectedCallback(){super.connectedCallback(),Ht.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ht.instance===this&&(Ht.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&nn(this.dialogEl,e)}async open(e,t){if(this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),t?.editTemplateId){const r=this.templates.find(i=>i.id===t.editTemplateId);r&&this.editTemplate(r)}else if(t?.editInstanceId){const r=this.instances.find(i=>i.id===t.editInstanceId);r&&await this.editInstance(r)}await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await pe(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(r=>r.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((r,i)=>r.name.localeCompare(i.name))}async openInstance(e){await(await pe()).store.viewInstances.patch(e,{open:!0,updatedAt:Date.now()}),this.close()}async editInstance(e){const r=await(await pe()).store.viewTemplates.findOne(e.templateId),i=r?wl(r.headerHtml,r.rowHtml,r.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:r?.name??"template",name:e.name,tokens:i,mapping:{...e.mapping},limit:e.limit??0,readonly:e.readonly??!1},this.mode="instance"}async deleteInstance(e){await(await pe()).store.viewInstances.remove(e),await this.refresh()}async copyInstance(e){const t=await pe(),r=this.columns.filter(n=>!n.hidden).map(n=>n.field),i={...e,id:Qs(),name:`${e.name} copy`,visibleColumns:r,open:!1,windowGeometry:void 0,updatedAt:Date.now()};await t.store.viewInstances.insert(i),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async deleteTemplate(e){const t=await pe();if(e.builtin){await t.api.ui.dialogs.alert(`"${e.name}" is a built-in template and cannot be deleted. Use Copy to make your own version.`,"Built-in template");return}await t.api.ui.dialogs.confirm(`Delete the template "${e.name}"? Views already created from it keep working.`,"Delete template")&&(await t.store.viewTemplates.remove(e.id),document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh())}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await pe(),r=this.templates.find(i=>i.id!==e.id&&i.name.trim().toLowerCase()===e.name.trim().toLowerCase());if(r){await t.api.ui.dialogs.alert(`A template called “${r.name}” already exists. Pick another name.`,"Duplicate template name");return}if(e.id){const i=this.templates.find(n=>n.id===e.id)?.builtin;await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,...i?{builtin:!1}:{},updatedAt:Date.now()})}else await t.store.viewTemplates.insert({id:Qs(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()});document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh(),this.mode="list"}useTemplate(e){const t=wl(e.headerHtml,e.rowHtml,e.footerHtml),r={};for(const i of t)r[i]=this.autoMap(i);this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:r,limit:0,readonly:!1},this.mode="instance"}firstColumn(e){const t=this.columns.find(e);return t?t.field:""}autoMap(e){const t=e.toLowerCase(),r=this.columns.find(b=>b.field.toLowerCase()===t||(b.label??"").toLowerCase()===t);if(r)return r.field;const i=/^check(\d+)$/i.exec(e);if(i){const b=Number(i[1])-1;return this.columns.filter(_=>_.type==="boolean")[b]?.field??""}if(["done","complete","completed","checked","check","read","active","enabled","starred","flag","ok"].includes(t))return this.firstColumn(b=>b.type==="boolean");const s=this.table?.labelColumn;if(s&&(t==="title"||t==="name"||t==="label"))return s;if(["date","datetime","time","created","updated","modified","timestamp","day","when"].includes(t))return this.firstColumn(b=>b.type==="date"||b.type==="datetime");const c=["url","link","href","website","homepage","uri","site","web"];if(c.includes(t)){const b=this.firstColumn($=>$.renderer==="link");return b||this.firstColumn($=>{const _=$.field.toLowerCase(),T=($.label??"").toLowerCase();return c.some(A=>_.includes(A)||T.includes(A))})}const u=b=>$=>{const _=$.field.toLowerCase(),T=($.label??"").toLowerCase();return b.some(A=>_.includes(A)||T.includes(A))},p=["image","img","photo","picture","pic","thumbnail","thumb","avatar","cover","poster","logo","icon"];if(p.includes(t)){const b=this.firstColumn(_=>_.renderer==="image");if(b)return b;const $=this.firstColumn(u(p));return $||this.firstColumn(u(["url","src","href","link"]))}if(["email","mail","e-mail"].includes(t))return this.firstColumn(u(["mail"]));if(["phone","tel","telephone","mobile","cell","cellphone"].includes(t))return this.firstColumn(u(["phone","tel","mobile","cell"]));const w=["description","desc","notes","note","body","text","summary","about","comment","comments","details","detail","remarks"];if(w.includes(t)){const b=this.firstColumn(A=>{if(A.type!=="string")return!1;const B=A.field.toLowerCase(),U=(A.label??"").toLowerCase();return w.some(V=>B.includes(V)||U.includes(V))});if(b)return b;const $=this.columns.filter(A=>A.type==="string"),_=$[0];if(!_)return"";let T=_;for(const A of $)(A.max??0)>(T.max??0)&&(T=A);return T.field}return""}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await pe();if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},limit:e.limit>0?e.limit:void 0,readonly:e.readonly,updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.mode="list";return}const r=this.columns.filter(n=>!n.hidden).map(n=>n.field),i={id:Qs(),workspaceId:t.workspaceId,tableId:this.tableId,tableName:this.table.name,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:r,mapping:{...e.mapping},updatedAt:Date.now(),...e.limit>0?{limit:e.limit}:{},...e.readonly?{readonly:!0}:{}};await t.store.viewInstances.insert(i),await this.openInstance(i.id)}renderList(){return S`
      <div class="section">
        <h3>Views of “${this.table?.name??""}”</h3>
        <ul class="list">
          ${this.instances.map(e=>S`<li>
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
          ${this.templates.map(e=>S`<li>
                <span class="name">${e.name}</span>
                ${e.builtin?S`<span class="badge">built-in</span>`:me}
                <button type="button" class="mini" @click=${()=>this.useTemplate(e)}>Use</button>
                <button type="button" class="mini" @click=${()=>this.editTemplate(e)}>
                  Edit
                </button>
                <button type="button" class="mini" @click=${()=>this.copyTemplate(e)}>
                  Copy
                </button>
                ${e.builtin?me:S`<button
                      type="button"
                      class="mini danger"
                      title="Delete this template"
                      @click=${()=>void this.deleteTemplate(e)}
                    >
                      Delete
                    </button>`}
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
    `}renderTemplate(){const e=this.tDraft,t=r=>i=>{this.tDraft={...e,[r]:i.target.value}};return S`
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
    `}renderInstance(){const e=this.iDraft;return S`
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
        ${e.tokens.length===0?S`<p class="hint">
              This template has no <code>$TOKEN</code> placeholders — it will show the read-only
              table with your current sort, filter and visible columns.
            </p>`:e.tokens.map(t=>S`<div class="map-row">
                  <code>$${t}</code>
                  <select
                    @change=${r=>this.iDraft={...e,mapping:{...e.mapping,[t]:r.target.value}}}
                  >
                    <option value="" ?selected=${!e.mapping[t]}>— none —</option>
                    ${this.columns.map(r=>S`<option value=${r.field} ?selected=${e.mapping[t]===r.field}>
                          ${r.label||r.field}
                        </option>`)}
                  </select>
                </div>`)}
      </div>
      <p class="hint">
        ${e.id?S`Editing name and column mapping. The snapshotted sort, filters and visible columns
            are kept.`:S`The view snapshots this table's current sort, filters and visible columns.`}
      </p>
    `}render(){const e=this.mode==="template"?this.tDraft?.id?"Edit template":"New template":this.mode==="instance"?`${this.iDraft?.id?"Edit":"New"} view — ${this.iDraft?.templateName??""}`:"Views",t=this.mode==="template"?S`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
              Back
            </button>
            <button type="submit" class="primary">Save</button>`:this.mode==="instance"?S`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
                Back
              </button>
              <button type="submit" class="primary">
                ${this.iDraft?.id?"Save":"Create view"}
              </button>`:S`<button type="submit" class="ghost">Close</button>`;return S`
      <dialog @cancel=${this.close} @keydown=${tn}>
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
    `}};Ht.instance=null;Ht.styles=[en,Ve`
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
    `];mr([K()],Ht.prototype,"mode",2);mr([K()],Ht.prototype,"instances",2);mr([K()],Ht.prototype,"templates",2);mr([K()],Ht.prototype,"tDraft",2);mr([K()],Ht.prototype,"iDraft",2);Ht=mr([it("views-dialog")],Ht);const Bb={id:"views",name:"Views",type:"ui",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/views.ts"},Nb="grid_view",Ub={slug:"rss",name:"RSS Feed",header:'<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>','<div style="display:flex;gap:16px;margin-top:8px;">$input.CHECK1$input.CHECK2</div>',"</div>"].join(""),footer:"</div>"},Hb={slug:"todo-list",name:"Todo List",header:'<div style="display:flex;flex-direction:column;gap:6px;padding:12px;max-width:720px;margin:0 auto;">',row:['<div style="display:flex;align-items:center;gap:10px;border:1px solid #e5e7eb;border-radius:8px;padding:8px 12px;background:#ffffff;">',"$input.DONE",'<span style="flex:1;font-weight:500;color:#111827;">$TITLE</span>','<span style="color:#6b7280;font-size:0.8rem;white-space:nowrap;">$DUE</span>',"</div>"].join(""),footer:"</div>"},qb={slug:"gallery",name:"Gallery",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;padding:12px;">',row:['<figure style="margin:0;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<img src="$IMAGE" alt="$TITLE" loading="lazy" style="width:100%;height:150px;object-fit:cover;display:block;background:#f3f4f6;" />','<figcaption style="padding:6px 8px;font-size:0.85rem;color:#374151;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">$TITLE</figcaption>',"</figure>"].join(""),footer:"</div>"},Wb={slug:"contact-cards",name:"Contact Cards",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:10px;padding:12px 14px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<div style="font-weight:600;color:#111827;font-size:0.95rem;">$NAME</div>','<a href="mailto:$EMAIL" style="color:#2563eb;text-decoration:none;font-size:0.85rem;word-break:break-all;">$EMAIL</a>','<div style="color:#6b7280;font-size:0.85rem;margin-top:2px;">$PHONE</div>',"</div>"].join(""),footer:"</div>"},Kb=[Ub,Hb,qb,Wb];function Vb(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:Nb,tooltip:"Views -- display this table through a template",onClick:(t,{tableId:r})=>po(r)})}async function Gb(e){await Xb(e)}function Yb(e){let t=5381;const r=`${e.header} ${e.row} ${e.footer}`;for(let i=0;i<r.length;i++)t=(t<<5)+t+r.charCodeAt(i)|0;return(t>>>0).toString(36)}async function Xb(e){const t=e.workspaceId();if(!t)return;const r=await e.store.viewTemplates.find({workspaceId:t});for(const i of Kb)await Qb(e,t,i,r)}async function Qb(e,t,r,i){const n=`views:seeded:${r.slug}:${t}`,s=`views:sig:${r.slug}:${t}`,a=Yb(r),c=i.find(p=>p.builtin&&p.name===r.name);if(c){(await e.store.settings.findOne(s))?.value!==a&&(await e.store.viewTemplates.patch(c.id,{headerHtml:r.header,rowHtml:r.row,footerHtml:r.footer,updatedAt:Date.now()}),await e.store.settings.upsert({name:s,value:a})),await e.store.settings.upsert({name:n,value:!0});return}(await e.store.settings.findOne(n))?.value||(await e.store.viewTemplates.insert({id:Jb(),workspaceId:t,name:r.name,headerHtml:r.header,rowHtml:r.row,footerHtml:r.footer,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({name:n,value:!0}),await e.store.settings.upsert({name:s,value:a}))}function Jb(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Zb=Object.freeze(Object.defineProperty({__proto__:null,init:Vb,load:Gb,meta:Bb},Symbol.toStringTag,{value:"Module"})),ey={id:"settings",name:"Settings",type:"ui",fixed:!0,version:"0.1.0",description:"Header gear button that opens the tabbed Settings dialog; imports dropped secrets.txt.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/settings.ts"};function ty(e){e.ui.registerHeaderButton({id:"settings:open",label:"Settings",icon:"settings",tooltip:"Workspace and plugin settings",variant:"secondary",onClick:()=>e.ui.openSettings()}),e.ui.registerDropHandler(async(t,r)=>{const n=Array.from(t.dataTransfer?.files??[]).find(c=>c.name.toLowerCase()==="secrets.txt");if(!n)return!1;const s=await n.text(),a=Object.keys(Fr(s)).length;return Yi().trim().length>0&&!await r.ui.dialogs.confirm(`Replace your current secrets with ${a} secret${a===1?"":"s"} from "${n.name}"?`,"Import secrets")||(oc(s),r.ui.dialogs.toast(`Imported ${a} secret${a===1?"":"s"}.`,{kind:"success",title:"Secrets"})),!0})}const ny=Object.freeze(Object.defineProperty({__proto__:null,init:ty,meta:ey},Symbol.toStringTag,{value:"Module"})),ry=[ny,km,Oh,af,pf,bp,Pp,Lp,Mh,tm,Hp,pm,vm,Tm,Dm,Lm,Nm,Wm,Zm,rg,dg,yg,lb,Pb,Ad,Zb];function iy(e){if(!e.meta)throw new Error("Built-in plugin is missing meta");return e.meta}const Id=ry.map(e=>{const t=iy(e);return{id:t.id,meta:t,module:e}}),sy=Id;function mo(e){return`builtin:${e}`}async function oy(e){const t=[];for(const r of Id)if(!await ay(e,r)){t.push(r);try{await r.module.init?.(e)}catch(i){e.events.emit("plugin:error",{url:r.id,phase:"init",error:i})}}return async()=>{for(const r of t)try{await r.module.load?.(e)}catch(i){e.events.emit("plugin:error",{url:r.id,phase:"load",error:i})}}}async function ay(e,t){return t.meta.fixed?!1:Xt==="all-optional"?!0:(await e.store.plugins.findOne(mo(t.id)))?.enabled===!1}var ly=Object.defineProperty,cy=Object.getOwnPropertyDescriptor,rn=(e,t,r,i)=>{for(var n=i>1?void 0:i?cy(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&ly(t,r,n),n};let Pt=class extends qe{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.tableColumns=[],this.rows=[],this.showColsMenu=!1,this.allRows=[],this.searchQuery="",this.globalQuery="",this.onSearch=e=>{const t=e.detail;t.tableId===this.viewInstanceId&&(this.searchQuery=t.query??"",this.recompute())},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??"",this.recompute()},this.onInputChange=async e=>{const t=e.target;if(!(t instanceof HTMLInputElement)||!t.classList.contains("eda-input")||!this.instance||this.instance.readonly===!0)return;const r=t.getAttribute("data-eda-row"),i=t.getAttribute("data-eda-field"),n=t.getAttribute("data-eda-type")??"string";if(!r||!i)return;const s=this.allRows.find(u=>u.id===r);if(!s)return;let a;if(n==="boolean")a=t.checked;else if(n==="number"){const u=Number(t.value);a=t.value.trim()===""?null:Number.isNaN(u)?t.value:u}else a=t.value;await(await pe()).store.rows(this.instance.tableId).patch(r,{data:{...s.data,[i]:a},updatedAt:Date.now()})}}get templateOn(){return this.instance?.templateEnabled!==!1}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:table-search",this.onSearch),document.addEventListener("easydb:global-search",this.onGlobalSearch),await this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:table-search",this.onSearch),document.removeEventListener("easydb:global-search",this.onGlobalSearch),this.rowsUnsub?.(),this.instUnsub?.()}async updated(e){e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}async reload(){this.rowsUnsub?.(),this.loaded=!1,await this.load()}async load(){if(!this.viewInstanceId)return;this.rowsUnsub?.(),this.instUnsub?.();const e=await pe(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const r=await e.store.tables.findOne(t.tableId);this.tableColumns=r?.columns??[],r&&t.tableName!==r.name&&e.store.viewInstances.patch(t.id,{tableName:r.name});const i=new Map(this.tableColumns.map(s=>[s.field,s]));this.columns=t.visibleColumns.map(s=>i.get(s)??{field:s,label:s,type:"string"}),this.instUnsub=e.store.viewInstances.subscribe(s=>{const a=s.find(c=>c.id===this.viewInstanceId);if(a){if(a.tableId!==this.instance?.tableId){this.instance=a,this.reload();return}this.instance=a,this.recompute()}});const n=e.store.rows(t.tableId);this.rowsUnsub=n.subscribe(s=>{this.allRows=s,this.recompute()}),this.allRows=await n.find(),this.recompute(),this.loaded=!0}recompute(){if(!this.instance)return;let e=Qc(this.allRows,this.instance);const t=this.searchQuery.trim(),r=this.globalQuery.trim();t&&(e=Fi(e,t,this.tableColumns)),r&&(e=Fi(e,r,this.tableColumns));const i=this.instance.limit??0;i>0&&e.length>i&&(e=e.slice(0,i)),this.rows=e,this.templateOn&&_c(this.viewInstanceId,e.length,this.allRows.length)}async setSortColumn(e){if(!this.instance)return;await(await pe()).store.viewInstances.patch(this.instance.id,{sortColumn:e||void 0,updatedAt:Date.now()}),this.instance={...this.instance,sortColumn:e||void 0},this.recompute()}async toggleSortDir(){if(!this.instance?.sortColumn)return;const e=!(this.instance.sortAsc??!0);await(await pe()).store.viewInstances.patch(this.instance.id,{sortAsc:e,updatedAt:Date.now()}),this.instance={...this.instance,sortAsc:e},this.recompute()}async toggleTemplate(){if(!this.instance)return;const e=!this.templateOn;await(await pe()).store.viewInstances.patch(this.instance.id,{templateEnabled:e,updatedAt:Date.now()}),this.instance={...this.instance,templateEnabled:e},this.showColsMenu=!1}editTemplate(){!this.instance||!this.template||po(this.instance.tableId,{editTemplateId:this.template.id})}editView(){this.instance&&po(this.instance.tableId,{editInstanceId:this.instance.id})}async deleteView(){if(!this.instance)return;const e=await pe();await e.api.ui.dialogs.confirm(`Delete the view "${this.instance.name}"? The table and its rows stay.`,"Delete view")&&await e.store.viewInstances.remove(this.instance.id)}async toggleColumn(e){if(!this.instance)return;const t=this.instance.visibleColumns,i=t.includes(e)?t.filter(s=>s!==e):[...t,e];if(i.length===0)return;await(await pe()).store.viewInstances.patch(this.instance.id,{visibleColumns:i,updatedAt:Date.now()}),this.instance={...this.instance,visibleColumns:i}}renderTable(){return this.rows.length===0?S`<div class="vw-empty">No rows.</div>`:S`
      <table class="vw-table">
        <thead>
          <tr>
            ${this.columns.map(e=>S`<th>${e.label||e.field}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map(e=>S`<tr>
                ${this.columns.map(t=>{const r=e.data[t.field],i=r==null?"":String(r);return S`<td title=${i}>${i}</td>`})}
              </tr>`)}
        </tbody>
      </table>
    `}renderTemplated(){const e=this.template;if(!e)return S`<div class="vw-empty">This view's template is missing.</div>`;if(Yp(e.rowHtml)){const t=this.instance?.mapping??{},r=new Map(this.tableColumns.map(a=>[a.field,a])),i=this.instance?.readonly===!0,n=this.rows.map(a=>Kp(e.rowHtml,a,t,{columns:r,readonly:i})).join(""),s=(e.headerHtml??"")+n+(e.footerHtml??"");return S`<div class="vw-root">${sr(s)}</div>`}return S`<div class="vw-root">
      ${e.headerHtml?.trim()?S`<div class="vw-html">${sr(e.headerHtml)}</div>`:me}
      ${this.renderTable()}
      ${e.footerHtml?.trim()?S`<div class="vw-html">${sr(e.footerHtml)}</div>`:me}
    </div>`}renderSortBar(){if(!this.instance)return me;const e=this.tableColumns.filter(i=>i.sortable!==!1),t=this.instance.sortColumn??"",r=this.instance.sortAsc??!0;return S`<div class="vw-sortbar">
      <span class="mi" title="Sort">sort</span>
      <select
        aria-label="Sort by"
        @change=${i=>void this.setSortColumn(i.target.value)}
      >
        <option value="" ?selected=${!t}>— unsorted —</option>
        ${e.map(i=>S`<option value=${i.field} ?selected=${t===i.field}>${i.label||i.field}</option>`)}
      </select>
      <button
        aria-label="Toggle sort direction"
        title=${r?"Ascending (click for descending)":"Descending (click for ascending)"}
        ?disabled=${!t}
        @click=${()=>void this.toggleSortDir()}
      >
        <span class="mi">${r?"arrow_upward":"arrow_downward"}</span>
      </button>
    </div>`}renderFooter(){if(!this.instance)return me;const e=this.templateOn,t=new Set(this.instance.visibleColumns);return S`<div class="vw-footer">
      ${!e&&this.showColsMenu?S`<div class="cols-menu">
            ${this.tableColumns.map(r=>S`<label
                  ><input
                    type="checkbox"
                    .checked=${t.has(r.field)}
                    @change=${()=>void this.toggleColumn(r.field)}
                  />${r.label||r.field}</label
                >`)}
          </div>`:me}
      ${e?me:S`<button
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
      ${this.template?S`<button
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
      <button
        class="danger"
        aria-label="Delete view"
        title="Delete this view (the table stays)"
        @click=${()=>void this.deleteView()}
      >
        <span class="mi">delete</span>
      </button>
    </div>`}render(){if(!this.loaded)return S`<div class="vw-body scroll"><div class="vw-loading">Loading…</div></div>`;if(this.error)return S`<div class="vw-body scroll"><div class="vw-empty">${this.error}</div></div>`;const e=this.templateOn,t=e?S`<div class="vw-body scroll" @change=${this.onInputChange}>
          ${this.renderTemplated()}
        </div>`:S`<div class="vw-body grid">
          <data-table
            .tableId=${this.instance?.tableId??""}
            .viewInstanceId=${this.viewInstanceId}
          ></data-table>
        </div>`;return S`${e?this.renderSortBar():me}${t}${this.renderFooter()}`}};Pt.styles=[Vt,Ve`
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
    `];rn([Kt({type:String})],Pt.prototype,"viewInstanceId",2);rn([K()],Pt.prototype,"loaded",2);rn([K()],Pt.prototype,"error",2);rn([K()],Pt.prototype,"instance",2);rn([K()],Pt.prototype,"template",2);rn([K()],Pt.prototype,"columns",2);rn([K()],Pt.prototype,"tableColumns",2);rn([K()],Pt.prototype,"rows",2);rn([K()],Pt.prototype,"showColsMenu",2);rn([K()],Pt.prototype,"searchQuery",2);rn([K()],Pt.prototype,"globalQuery",2);Pt=rn([it("view-window")],Pt);const Mt=new Map;async function dy(){await Promise.all([...Mt.keys()].map(e=>Ri(e)))}function uy(e){const t=Mt.get(e);if(!t)return!1;const r=t.panel;return r.status==="minimized"&&r.normalize?.(),r.front?.(),!0}let Ml=!1;function go(e){e.panel.setHeaderTitle?.(e.name+Tc(e.count,e.total))}function hy(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function fy(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function Rd(e){return`view-panel-${fy(e)}`}async function py(){if(Ml)return;Ml=!0;const e=await pe(),t=i=>i.filter(n=>n.workspaceId===e.workspaceId&&n.open),r=t(await e.store.viewInstances.find()).sort(qi);for(const i of r)Bl(i,e);e.store.viewInstances.subscribe(i=>{const n=new Map(t(i).map(a=>[a.id,a]));for(const a of[...Mt.keys()])n.has(a)||gy(a);const s=[...n.values()].filter(a=>!Mt.has(a.id)).sort(qi);for(const a of s)Bl(a,e)}),e.store.tables.subscribe(i=>void my(e,i)),document.addEventListener(Mi,i=>{const n=i.detail,s=Mt.get(n.key);s&&s.el&&(s.count=n.count,s.total=n.total,go(s))}),document.addEventListener("easydb:reload-view",i=>{const n=i.detail?.instanceId;if(!n)return;const s=Mt.get(n);s&&(async()=>{const a=await e.store.viewInstances.findOne(n);a&&(s.name=a.name,go(s)),s.el?.reload()})()}),document.addEventListener("easydb:reload-views",()=>{for(const{el:i}of Mt.values())i?.reload()})}async function my(e,t){const r=t.filter(a=>a.workspaceId===e.workspaceId),i=new Set(r.map(a=>a.id)),n=new Map;for(const a of r)n.has(a.name)||n.set(a.name,a);const s=await e.store.viewInstances.find();for(const a of s){if(a.workspaceId!==e.workspaceId||i.has(a.tableId)||!a.tableName)continue;const c=n.get(a.tableName);c&&await e.store.viewInstances.patch(a.id,{tableId:c.id,updatedAt:Date.now()})}}function Bl(e,t){if(Mt.has(e.id))return;const r=Rd(e.id),i=e.windowGeometry,n=i?.minimized===!0,s=()=>{const U=document.createElement("view-window");return U.viewInstanceId=e.id,U.style.height="100%",U},a=n?document.createElement("div"):s();let c;const u=()=>{c&&(c.el?.remove(),c.el=null,c.count=-1,c.total=-1,go(c))},p=()=>{if(!c||c.el)return;const U=document.getElementById(r)?.querySelector(".jsPanel-content");if(!U)return;U.replaceChildren();const V=s();U.appendChild(V),c.el=V},w=i?{panelSize:`${i.w} ${i.h}`}:{contentSize:"480 520"},b=i?{my:"left-top",at:"left-top",offsetX:i.x,offsetY:i.y}:{my:"center-top",at:"center-top",offsetY:60},$=fd(r,Qo),_=M.create({id:r,container:hy(),headerTitle:e.name,headerLogo:wg,theme:"#0891b2",content:a,...w,position:b,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>void Ri(e.id)},resizeit:{containment:!1,stop:()=>void Ri(e.id)},onfronted:()=>void by(e.id,t),onstatuschange:U=>{U.status==="maximized"?$.enter():$.exit(),U.status==="minimized"?u():(U.status==="normalized"||U.status==="maximized")&&p(),pd(`view:${e.id}`,U),Ri(e.id)},onclosed:()=>{Mt.delete(e.id),hs(e.id),$.exit(),gd(`view:${e.id}`),t.store.viewInstances.patch(e.id,{open:!1,updatedAt:Date.now()}).catch(()=>{})}});c={panel:_,el:n?null:a,name:e.name,count:-1,total:-1},Mt.set(e.id,c),wd(e.id,()=>_.front?.(void 0,!1));const T=document.getElementById(r),A=document.createElement("panel-search");A.tableId=e.id,T?.querySelector(".jsPanel-controlbar")?.prepend(A);const B=T?.querySelector(".jsPanel-titlebar");B&&(B.tabIndex=-1,B.style.outline="none",B.addEventListener("pointerdown",()=>B.focus())),i?.minimized?(i.maximized&&md(`view:${e.id}`),queueMicrotask(()=>_.minimize?.())):i?.maximized&&queueMicrotask(()=>_.maximize?.())}function gy(e){const t=Mt.get(e);if(t){Mt.delete(e),hs(e);try{t.panel.status!=="closed"&&t.panel.close()}catch{}}}function by(e,t){return ds(`view:${e}`,()=>yy(e,t))}async function yy(e,t){try{const r=await t.store.viewInstances.findOne(e);if(!r)return;const i=r.windowGeometry??{x:0,y:0,w:480,h:520,z:0,minimized:!1,maximized:!1};await t.store.viewInstances.patch(e,{windowGeometry:{...i,z:yd()},updatedAt:Date.now()})}catch{}}function Ri(e){return ds(`view:${e}`,()=>wy(e))}async function wy(e){const t=document.getElementById(Rd(e)),r=Mt.get(e);if(!t||!r)return;const i=r.panel.status,n=i==="minimized";try{const s=await pe(),a=(await s.store.viewInstances.findOne(e))?.windowGeometry,c=n?a?.maximized??!1:i==="maximized";let u=t.offsetLeft,p=t.offsetTop,w=t.offsetWidth,b=t.offsetHeight;(n||c)&&a&&(u=a.x,p=a.y,w=a.w,b=a.h),u<=-9e3&&(u=a?.x??40);const $={x:u,y:p,w,h:b,z:a?.z??0,minimized:n,maximized:c};await s.store.viewInstances.patch(e,{windowGeometry:$,updatedAt:Date.now()})}catch{}}function Pd(e){return e.filter(t=>t.status!=="minimized")}function vy(e,t,r){if(e<=0)return[];const i=Math.ceil(Math.sqrt(e)),n=Math.ceil(e/i),s=(t.w-r*(i+1))/i,a=(t.h-r*(n+1))/n;return Array.from({length:e},(c,u)=>{const p=u%i,w=Math.floor(u/i);return{x:t.x+r+p*(s+r),y:t.y+r+w*(a+r),w:s,h:a}})}function gr(){const e=M.getPanels;return typeof e!="function"?[]:Array.from(e.call(M)??[])}function xy(){for(const e of gr())e.close?.()}function $y(){for(const e of gr())e.minimize?.()}function ky(){for(const e of gr())e.normalize?.()}function Cy(){for(const e of gr())e.maximize?.()}function Dd(){const e=document.getElementById("easydb-panels"),t=e?.clientWidth??window.innerWidth,r=e?.clientHeight??window.innerHeight,i=Qo()?.snapshot(),n=i?.scale&&i.scale>0?i.scale:1,s=i?.x??0,a=i?.y??0;return{x:-s/n,y:-a/n,w:t/n,h:r/n}}function Od(e,t,r,i,n){e.style.left=`${Math.round(t)}px`,e.style.top=`${Math.round(r)}px`,e.style.width=`${Math.round(i)}px`,e.style.height=`${Math.round(n)}px`}function Ey(){const e=Pd(gr()).reverse();if(e.length===0)return;const t=Dd(),r=32,i=Math.min(680,Math.max(320,t.w*.6)),n=Math.min(480,Math.max(240,t.h*.6));e.forEach((s,a)=>{s.normalize?.(),Od(s,t.x+24+a*r,t.y+24+a*r,i,n)}),jd()}function jd(){xd(),dy()}function Sy(){const e=Pd(gr()).reverse();if(e.length===0)return;const r=vy(e.length,Dd(),8);e.forEach((i,n)=>{i.normalize?.();const s=r[n];s&&Od(i,s.x,s.y,s.w,s.h)}),jd()}function _y(e){const t=[{id:"windows:minimize-all",title:"Minimize all windows",icon:"remove",run:$y},{id:"windows:restore-all",title:"Restore all windows",icon:"crop_square",run:ky},{id:"windows:maximize-all",title:"Maximize all windows",icon:"fullscreen",run:Cy},{id:"windows:cascade",title:"Cascade windows",icon:"view_agenda",run:Ey},{id:"windows:tile",title:"Tile windows",icon:"grid_view",run:Sy},{id:"windows:close-all",title:"Close all windows",icon:"close",run:xy}];for(const n of t)e.ui.registerCommand({id:n.id,title:n.title,group:"Windows",icon:n.icon,run:n.run});const r="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md",i="https://github.com/cawoodm/easydbaccess/tree/main/docs";e.ui.registerCommand({id:"app:search",title:"Search all tables",group:"App",icon:"search",keywords:["find","global search","filter"],run:()=>{document.dispatchEvent(new CustomEvent("easydb:focus-search"))}}),e.ui.registerCommand({id:"app:plugins",title:"Plugins",group:"App",icon:"extension",keywords:["plugin manager","install","extensions"],run:n=>n.ui.openPluginManager()}),e.ui.registerCommand({id:"app:changelog",title:"Changelog",group:"App",icon:"history",keywords:["releases","version","whats new"],run:()=>{window.open(r,"_blank","noopener")}}),e.ui.registerCommand({id:"app:docs",title:"Documentation",group:"App",icon:"menu_book",keywords:["docs","help","guide","manual"],run:()=>{window.open(i,"_blank","noopener")}})}async function Ty(e){if(Xt==="url-plugins"||Xt==="all-optional")return async()=>{};const t=e.workspaceId();if(!t)return async()=>{};const i=(await e.store.workspaces.findOne(t))?.pluginUrls??[],n=[];for(const s of i)try{const a=await e.store.plugins.findOne(s);if(a&&a.enabled===!1)continue;let c=a?.cachedBody??"";if(c)Ay(e,s,c);else{try{c=await zd(s)}catch(w){await e.store.plugins.upsert({url:s,enabled:a?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${w.message}`}),e.events.emit("plugin:error",{url:s,phase:"fetch",error:w});continue}await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),cachedBody:c})}const u=new Blob([c],{type:"text/javascript"}),p=URL.createObjectURL(u);try{const w=await import(p);await w.init?.(e),n.push({url:s,mod:w})}finally{setTimeout(()=>URL.revokeObjectURL(p),5e3)}}catch(a){await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),lastError:`init: ${a.message}`}),e.events.emit("plugin:error",{url:s,phase:"init",error:a})}return async()=>{for(const{url:s,mod:a}of n)try{await a.load?.(e)}catch(c){await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),lastError:`load: ${c.message}`}),e.events.emit("plugin:error",{url:s,phase:"load",error:c})}}}async function zd(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const r=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(r))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return r}function Ay(e,t,r){return(async()=>{try{const i=await zd(t);if(i===r)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:i})}catch{}})()}let Js=null;function pe(){return Js||(Js=Iy()),Js}async function Iy(){const e=await nc();let t="";const r=Yu(e,()=>t),i=Qu(),n=ih(),s=new Map;r.tables.subscribe(B=>{s.clear();for(const U of B)s.set(U.id,U)});const a={...r.tables,insert:B=>(s.set(B.id,B),r.tables.insert(B)),upsert:B=>(s.set(B.id,B),r.tables.upsert(B))};let c=null;const u={get backend(){if(!c)throw new Error("[host] row-source ctx used before app init completed");return c.backend},events:i,settings:r.settings,workspaceId:()=>$},p=Xu({base:{...r,tables:a},providers:n.rowSources,tableById:B=>s.get(B),ctx:u}),w=Ry(),b=await p.workspaces.find();let $;if(w){const B=Fd(w),U=b.find(V=>V.id===B||V.name===w);U?$=U.id:$=(await p.workspaces.insert({id:B,name:w,createdAt:Date.now(),pluginUrls:[]})).id}else{const B=Py(),U=B?b.find(V=>V.id===B):void 0;U?$=U.id:b.length>0?$=b[0].id:$=(await p.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}t=$,Dy($);const _=ch({store:p,events:i,registries:n,workspaceId:()=>$});c=_,_y(_),i.on("import:after",({source:B,tableId:U,rowCount:V})=>{B!=="datasette"&&_.store.tables.findOne(U).then(X=>{_.ui.dialogs.toast(`Imported ${V} row${V===1?"":"s"} into "${X?.name??U}".`,{kind:"success",title:B.toUpperCase()+" import"})})}),i.on("plugin:error",({url:B,phase:U,error:V})=>{_.ui.dialogs.toast(`[${U}] ${V?.message??String(V)}`,{kind:"error",title:`Plugin: ${B}`})});const T=await oy(_),A=await Ty(_);return queueMicrotask(async()=>{i.emit("app:ready",{workspaceId:$}),await T(),await A(),Xt==="all-optional"?_.ui.dialogs.toast("Safe mode is ON: only fixed built-ins (Settings, core rendering) loaded. All other built-in plugins and URL-installed plugins are disabled for this session only — nothing was changed. Disable the culprit below, then reload without ?safemode.",{kind:"warning",title:"Safe mode"}):Xt==="url-plugins"&&_.ui.dialogs.toast("Safe mode (URL plugins) is ON: URL-installed plugins were not loaded this session. Built-in plugins are unaffected. Reload without ?safemode1 to restore them.",{kind:"warning",title:"Safe mode"}),Xt!=="off"&&_.ui.openPluginManager()}),globalThis.api=_,{store:p,events:i,workspaceId:$,registries:n,api:_}}function Ry(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const Ld="eda:lastWorkspaceId";function Py(){try{return globalThis.localStorage?.getItem(Ld)??null}catch{return null}}function Dy(e){try{globalThis.localStorage?.setItem(Ld,e)}catch{}}function Fd(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var Oy=Object.defineProperty,jy=Object.getOwnPropertyDescriptor,fs=(e,t,r,i)=>{for(var n=i>1?void 0:i?jy(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Oy(t,r,n),n};let cr=class extends qe{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&nn(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let r;try{r=ur(this.text)}catch(a){this.errorMsg=`Couldn't parse the CSV: ${a.message}`;return}if(r.columns.length===0||r.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const i=await pe(),n=crypto.randomUUID();await i.store.tables.insert({id:n,workspaceId:i.workspaceId,name:t,code:At(t),columns:r.columns,view:"table",updatedAt:Date.now()});const s=r.rows.map(a=>({id:crypto.randomUUID(),tableId:n,data:a,updatedAt:Date.now()}));await i.store.rows(n).bulkInsert(s),i.api.ui.dialogs.toast(`Imported ${r.rows.length} row${r.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return S`
      <dialog @cancel=${this.close} @keydown=${tn}>
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
            ${this.errorMsg?S`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};cr.styles=[en,Ve`
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
    `];fs([K()],cr.prototype,"name",2);fs([K()],cr.prototype,"text",2);fs([K()],cr.prototype,"errorMsg",2);cr=fs([it("csv-paste-dialog")],cr);var zy=Object.defineProperty,Ly=Object.getOwnPropertyDescriptor,Zo=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ly(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&zy(t,r,n),n};const Fy=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return the value this column should display.
  return row.name ?? '';
}
`;let mn=class extends qe{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),mn.instance=this}disconnectedCallback(){super.disconnectedCallback(),mn.instance===this&&(mn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&nn(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:Fy,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(r=>{this.resolver=r})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return S`
      <dialog @cancel=${this.onCancel} @keydown=${tn}>
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
    `}};mn.instance=null;mn.styles=[en,Ve`
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
    `];Zo([K()],mn.prototype,"text",2);Zo([K()],mn.prototype,"columnLabel",2);mn=Zo([it("script-editor-dialog")],mn);function My(e){const t={...e.orig??{},field:e.field.trim(),label:e.label.trim()||e.field.trim(),type:e.type};return e.renderer?t.renderer=e.renderer:delete t.renderer,e.script?t.script=e.script:delete t.script,e.max!=null&&e.max>0?t.max=e.max:delete t.max,e.unique?t.unique=!0:delete t.unique,e.notnull?t.notnull=!0:delete t.notnull,e.hidden?t.hidden=!0:delete t.hidden,e.sortable===!1?t.sortable=!1:delete t.sortable,e.filterable===!1?t.filterable=!1:delete t.filterable,t}var By=Object.defineProperty,Ny=Object.getOwnPropertyDescriptor,Gt=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ny(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&By(t,r,n),n};const Uy=["string","number","boolean","date","datetime"];let Tt=class extends qe{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.columns=[],this.errorMsg="",this.noticeMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&nn(this.dialogEl,e)}async open(e,t){this.errorMsg="",this.noticeMsg=t?.notice??"";const r=await pe();if(this.rendererOptions=[...r.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.rendererSubUnsub=r.events.on("app:ready",()=>{this.rendererOptions=[...r.registries.cellRenderers.keys()].sort()}),e){const i=await pe(),n=await i.store.tables.findOne(e);if(!n)return;this.mode="edit",this.editTableId=e,this.name=n.name,this.tableTitle=n.title??"",this.columns=n.columns.map(a=>({field:a.field,label:a.label,type:a.type,renderer:a.renderer,script:a.script,max:a.max,unique:a.unique,notnull:a.notnull,hidden:a.hidden,sortable:a.sortable,filterable:a.filterable,origField:a.field,orig:a}));const s=await i.store.rows(e).find();this.previewRows=s.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,r)=>r!==e)}moveColumn(e,t){const r=e+t;if(r<0||r>=this.columns.length)return;const i=[...this.columns],[n]=i.splice(e,1);i.splice(r,0,n),this.columns=i}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,r){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientY<i.top+i.height/2;this.dropTargetIdx=t,this.dropEdge=n?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const r=this.dragSrcIdx,i=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,r===null||r===t||!i)return;const n=[...this.columns],[s]=n.splice(r,1);let a=t+(r<t?-1:0);i==="after"&&(a+=1),n.splice(a,0,s),this.columns=n}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((r,i)=>i===e?{...r,...t}:r)}async editScript(e){const t=mn.instance;if(!t)return;const r=this.columns[e];if(!r)return;const i=await t.open(r.script??"",r.label||r.field);i!==null&&this.patchColumn(e,{script:i.trim()?i:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}const r=await pe(),i=(await r.store.tables.find()).filter(p=>p.workspaceId===r.workspaceId),n=t.toLowerCase(),s=i.find(p=>p.name.toLowerCase()===n&&p.id!==this.editTableId);if(s){this.errorMsg=`A table named "${s.name}" already exists — names must be unique.`;return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const a=new Set;for(const p of this.columns){const w=p.field.trim();if(!w){this.errorMsg="Column field names cannot be empty.";return}if(a.has(w)){this.errorMsg=`Duplicate column field: ${w}`;return}a.add(w)}const c=this.tableTitle.trim(),u=this.columns.map(My);if(this.mode==="edit"&&this.editTableId){const p=this.editTableId,w=await r.store.tables.findOne(p),b=new Map((w?.columns??[]).map(ee=>[ee.field,ee])),$=u.filter(ee=>{const Y=b.get(ee.field);return ee.unique&&!Y?.unique||ee.notnull&&!Y?.notnull||ee.max&&ee.max>0&&ee.max!==Y?.max});if($.length>0){const ee=await r.store.rows(p).find(),Y=Wy($,ee);if(Y.length>0){this.errorMsg=`Cannot save: ${Y.length} existing ${Y.length===1?"row violates":"rows violate"} the new constraints.
${Y.slice(0,5).join(`
`)}${Y.length>5?`
…and ${Y.length-5} more.`:""}`;return}}const _=new Set(this.columns.map(ee=>ee.origField).filter(ee=>!!ee)),T=new Set(u.map(ee=>ee.field)),A=(w?.columns??[]).map(ee=>ee.field).filter(ee=>!_.has(ee)),B=w?.deletedColumns??[],U=[...new Set([...B,...A])].filter(ee=>!T.has(ee)),V={name:t,title:c,columns:u,updatedAt:Date.now()};(U.length>0||B.length>0)&&(V.deletedColumns=U);const X=w?.name;await r.store.tables.patch(p,V);const le=A.filter(ee=>!T.has(ee)),re=this.fieldRenames();if(le.length>0||re.length>0){const ee=await r.store.rows(p).find();for(const Y of ee){let te=!1,ye={...Y.data};const xe=Xa(ye,re);xe&&(ye=xe,te=!0);for(const m of le)m in ye&&(delete ye[m],te=!0);te&&await r.store.rows(p).patch(Y.id,{data:ye,updatedAt:Date.now()})}}if(X!==void 0&&X!==t){const ee=(await r.store.viewInstances.find()).filter(Y=>Y.tableId===p);for(const Y of ee)Y.tableName!==t&&await r.store.viewInstances.patch(Y.id,{tableName:t,updatedAt:Date.now()})}}else await r.store.tables.insert({id:ot(),workspaceId:r.workspaceId,name:t,title:c,code:At(t),columns:u,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return S`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=this.fieldRenames(),t=e.length>0?this.previewRows.map(n=>({...n,data:Xa(n.data,e)??n.data})):this.previewRows,r=new Map;for(const n of this.columns){if(!n.unique)continue;const s=new Set,a=new Set;for(const c of t){const u=c.data[n.field];u==null||u===""||(s.has(u)&&a.add(u),s.add(u))}r.set(n.field,a)}const i=this.columns.filter(n=>!n.hidden);return S`
      <div class="preview">
        <h3>
          Live preview — first ${this.previewRows.length}
          row${this.previewRows.length===1?"":"s"}
        </h3>
        <table>
          <thead>
            <tr>
              ${i.map(n=>S`<th title=${n.field}>${n.label||n.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${t.map(n=>S`
                <tr>
                  ${i.map(s=>{const a=n.data[s.field],c=qy(s,a,r.get(s.field));return S`<td class=${c?"violation":""} title=${c??""}>
                      ${Hy(a)}
                    </td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}fieldRenames(){return this.mode!=="edit"?[]:this.columns.filter(e=>e.origField&&e.origField!==e.field.trim()).map(e=>({from:e.origField,to:e.field.trim()}))}renameDetected(){return this.fieldRenames().length>0}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return S`
      <dialog @cancel=${this.close} @keydown=${tn}>
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
            ${this.noticeMsg?S`<div class="notice">${this.noticeMsg}</div>`:""}
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
                <span class="flag-label" title="Sortable">⇅</span>
                <span class="flag-label" title="Filterable (includes search)">⚲</span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              ${this.columns.map((r,i)=>{const n=this.dragSrcIdx===i,s=this.dropTargetIdx===i,a=s&&this.dropEdge==="before"?" drop-before":s&&this.dropEdge==="after"?" drop-after":"";return S`
                  <div
                    class=${`col-row${n?" drag-source":""}${a}`}
                    @dragover=${c=>this.onRowDragOver(c,i,c.currentTarget)}
                    @dragleave=${()=>this.onRowDragLeave(i)}
                    @drop=${c=>this.onRowDrop(c,i)}
                  >
                    <span
                      class="drag-handle"
                      title="Drag to reorder"
                      draggable="true"
                      @dragstart=${c=>this.onRowDragStart(c,i)}
                      @dragend=${()=>this.onRowDragEnd()}
                    >
                      <span class="mi sm">drag_indicator</span>
                    </span>
                    <input
                      type="text"
                      .value=${r.field}
                      @input=${c=>this.patchColumn(i,{field:c.target.value})}
                    />
                    <input
                      type="text"
                      .value=${r.label}
                      @input=${c=>this.patchColumn(i,{label:c.target.value})}
                    />
                    <select
                      .value=${r.type}
                      @change=${c=>this.patchColumn(i,{type:c.target.value})}
                    >
                      ${Uy.map(c=>S`<option value=${c} ?selected=${c===r.type}>${c}</option>`)}
                    </select>
                    <select
                      title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                      .value=${r.renderer??""}
                      @change=${c=>{const u=c.target.value;this.patchColumn(i,{renderer:u||void 0})}}
                    >
                      <option value="" ?selected=${!r.renderer}>— none —</option>
                      ${this.rendererOptions.map(c=>S`<option value=${c} ?selected=${c===r.renderer}>${c}</option>`)}
                    </select>
                    <button
                      type="button"
                      class=${`icon-btn${r.script?.trim()?" has-script":""}`}
                      title=${r.script?.trim()?"Edit the script — its render(row) output is what this column displays":"Add a script: render(row) computes what this column displays"}
                      @click=${()=>this.editScript(i)}
                    >
                      <span class="mi sm">edit</span>
                    </button>
                    <input
                      type="number"
                      min="0"
                      placeholder="—"
                      title="Max length (strings) or max value (numbers)"
                      .value=${r.max==null?"":String(r.max)}
                      @input=${c=>{const u=c.target.value;this.patchColumn(i,{max:u===""?void 0:Number(u)})}}
                    />
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Unique"
                        .checked=${!!r.unique}
                        @change=${c=>this.patchColumn(i,{unique:c.target.checked})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Not null"
                        .checked=${!!r.notnull}
                        @change=${c=>this.patchColumn(i,{notnull:c.target.checked})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Visible — uncheck to hide the column without losing its data"
                        .checked=${!r.hidden}
                        @change=${c=>this.patchColumn(i,{hidden:!c.target.checked})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Sortable — uncheck to disable sorting on this column"
                        .checked=${r.sortable!==!1}
                        @change=${c=>this.patchColumn(i,{sortable:c.target.checked?void 0:!1})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Filterable — uncheck to disable filtering and search on this column"
                        .checked=${r.filterable!==!1}
                        @change=${c=>this.patchColumn(i,{filterable:c.target.checked?void 0:!1})}
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

            ${this.renameDetected()?S`<div class="hint">
                  Existing rows are re-keyed on save, so renamed fields keep their data.
                </div>`:""}
            ${this.errorMsg?S`<div class="error">${this.errorMsg}</div>`:""}
            ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};Tt.styles=[Vt,en,Ve`
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
    `];Gt([K()],Tt.prototype,"mode",2);Gt([K()],Tt.prototype,"editTableId",2);Gt([K()],Tt.prototype,"name",2);Gt([K()],Tt.prototype,"tableTitle",2);Gt([K()],Tt.prototype,"columns",2);Gt([K()],Tt.prototype,"errorMsg",2);Gt([K()],Tt.prototype,"noticeMsg",2);Gt([K()],Tt.prototype,"dragSrcIdx",2);Gt([K()],Tt.prototype,"dropTargetIdx",2);Gt([K()],Tt.prototype,"dropEdge",2);Gt([K()],Tt.prototype,"previewRows",2);Gt([K()],Tt.prototype,"rendererOptions",2);Tt=Gt([it("new-table-dialog")],Tt);function Hy(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function qy(e,t,r){const i=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&i)return`${e.label}: empty`;if(i)return null;if(e.type==="number"&&typeof t!="number"){const n=Number(t);if(!Number.isFinite(n))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!i){const n=new Date(String(t));if(Number.isNaN(n.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&r?.has(t)?`${e.label}: duplicate`:null}function Wy(e,t){const r=[];for(const i of e)if(i.notnull&&t.forEach((n,s)=>{const a=n.data[i.field];(a==null||typeof a=="string"&&a.trim()==="")&&r.push(`Row ${s+1}: ${i.label} is empty.`)}),i.max!=null&&i.max>0&&t.forEach((n,s)=>{const a=n.data[i.field];typeof a=="string"&&a.length>i.max?r.push(`Row ${s+1}: ${i.label} length ${a.length} > max ${i.max}.`):typeof a=="number"&&a>i.max&&r.push(`Row ${s+1}: ${i.label} value ${a} > max ${i.max}.`)}),i.unique){const n=new Map;t.forEach((s,a)=>{const c=s.data[i.field];c==null||c===""||(n.has(c)?r.push(`Row ${a+1}: ${i.label} duplicates row ${n.get(c)+1} ("${String(c)}").`):n.set(c,a))})}return r}var Ky=Object.defineProperty,Vy=Object.getOwnPropertyDescriptor,It=(e,t,r,i)=>{for(var n=i>1?void 0:i?Vy(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Ky(t,r,n),n};const Gy='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',Yy=S`<span class="mi sm">extension</span>`,Nl="plugin:catalogUrls";function Ei(){return new URL("/easydbaccess/plugins/catalog.json",location.origin).toString()}const Xy=[["installed","Installed"],["built-in","Built-in"],["fixed","Fixed"]],Md=[["importer","Importer"],["exporter","Exporter"],["cell-renderer","Cell renderer"],["sync","Sync"],["source","Source"],["ui","UI"]],Qy=new Map(Md),Jy={off:"Filter by status — click: only enabled → only disabled → off",on:"Showing only enabled plugins — click to show only disabled",not:"Showing only disabled plugins — click to clear"};let vt=class extends qe{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.catalogUrls=[Ei()],this.activeCatalogUrl=Ei(),this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&nn(this.dialogEl,e)}async open(){const e=await pe(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const r=await e.store.plugins.find();this.records=new Map(r.map(s=>[s.url,s]));const i=await e.store.settings.findOne(Nl),n=Array.isArray(i?.value)?i.value.filter(s=>typeof s=="string"):[];this.catalogUrls=n.length>0?n:[Ei()],this.activeCatalogUrl=this.catalogUrls[0]??Ei(),this.addUrl="",this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(this.activeCatalogUrl),this.refreshServerRegistry()}async refreshCatalog(e){try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json(),i=Array.isArray(r.plugins)?r.plugins:[];this.catalog=i.map(n=>({...n,absUrl:new URL(n.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const r=(await(await pe()).store.settings.findOne("server-sync:url"))?.value;if(typeof r!="string"||r.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const n=`${r.replace(/\/+$/,"")}/plugins/registry`;try{const s=await fetch(n,{cache:"no-store"});if(!s.ok)throw new Error(`HTTP ${s.status}`);const a=await s.json(),c=Array.isArray(a.plugins)?a.plugins:[];this.serverCatalog=c.map(u=>({...u,absUrl:new URL(u.url,n).toString()})),this.serverCatalogError=null}catch(s){this.serverCatalog=[],this.serverCatalogError=s.message}}async reloadCatalogSource(){const e=this.activeCatalogUrl.trim();e&&(this.catalogUrls.includes(e)||(this.catalogUrls=[...this.catalogUrls,e],await(await pe()).store.settings.upsert({name:Nl,value:this.catalogUrls})),await this.refreshCatalog(e))}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await pe()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const r=await pe();await r.store.workspaces.patch(r.workspaceId,{pluginUrls:this.urls}),await r.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const r=await pe(),i=this.records.get(e);await r.store.plugins.upsert({...i??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...i,url:e,enabled:t,lastFetched:i?.lastFetched??0}))}async removePlugin(e){const t=await pe();this.urls=this.urls.filter(r=>r!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const r=await pe(),i=mo(e),n=this.records.get(i);await r.store.plugins.upsert({...n??{url:i,lastFetched:0},url:i,enabled:t,lastFetched:n?.lastFetched??0}),this.records=new Map(this.records.set(i,{...n,url:i,enabled:t,lastFetched:n?.lastFetched??0}))}async onRowToggle(e,t){if(e.categories.has("built-in"))await this.toggleBuiltin(e.id,t);else if(e.url)await this.toggleEnabled(e.url,t);else return;(await pe()).api.ui.dialogs.toast("Reload to apply this change.",{kind:"info",title:"Plugin updated"})}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await pe();try{const r=await fetch(e.absUrl,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const i=await r.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:i});const n=new Blob([i],{type:"text/javascript"}),s=URL.createObjectURL(n);try{const c=await import(s);await c.init?.(t.api),await c.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(s),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const a=await t.store.plugins.find();this.records=new Map(a.map(c=>[c.url,c])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(r){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${r.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${r.message}`,{kind:"error",title:"Plugin error"})}finally{const r=new Set(this.installing);r.delete(e.absUrl),this.installing=r}}renderTri(e,t,r,i="",n){const s=n?n[t??"off"]:t==="on"?`Showing only ${e} plugins — click to exclude`:t==="not"?`Hiding ${e} plugins — click to clear`:`Filter by ${e} — click: show only → exclude → off`;return S`
      <button
        type="button"
        class=${`tri${i?` ${i}`:""}${t?` ${t}`:""}`}
        title=${s}
        aria-pressed=${t!==void 0}
        @click=${r}
      >
        <span class="tri-mark">${t==="on"?"✓":t==="not"?"≠":""}</span>${e}
      </button>
    `}cycleState(e,t){const r=e.get(t),i=new Map(e);return r===void 0?i.set(t,"on"):r==="on"?i.set(t,"not"):i.delete(t),i}cycleFilter(e){this.filterStates=this.cycleState(this.filterStates,e)}cycleTypeFilter(e){this.typeFilters=this.cycleState(this.typeFilters,e)}cycleStatusFilter(){this.statusFilter=this.statusFilter===void 0?"on":this.statusFilter==="on"?"not":void 0}buildRows(){const e=new Map,t=new Map;for(const{id:r,meta:i}of sy){const n=i.fixed?!0:this.records.get(mo(r))?.enabled!==!1,s=!i.fixed&&Xt==="all-optional",a=i.fixed?["built-in","fixed","installed"]:["built-in","installed"];e.set(`builtin:${r}`,{id:r,name:i.name,...i.type?{type:i.type}:{},...i.description?{meta:i.description}:{meta:"Built-in plugin"},...i.author?{author:i.author}:{},...i.icon?{icon:i.icon}:{},...i.repo?{repo:i.repo}:{},categories:new Set(a),enabled:n,status:n&&!s?"enabled":"disabled",fixed:!!i.fixed,...s?{skipped:!0}:{}})}for(const r of[...this.catalog,...this.serverCatalog]){const i=this.urls.includes(r.absUrl),n=this.records.get(r.absUrl),s=i?["available","installed"]:["available"],a=e.get(r.id),c=n?.enabled!==!1,u=i&&Xt!=="off";e.set(r.id,{id:r.id,name:r.name,url:r.absUrl,...r.type?{type:r.type}:{},...r.icon?{icon:r.icon}:{},...r.repo?{repo:r.repo}:{},...r.author?{author:r.author}:{},meta:r.description??r.absUrl,categories:a?new Set([...a.categories,...s]):new Set(s),enabled:c,...i?{status:c&&!u?"enabled":"disabled"}:{},...u?{skipped:!0}:{},installing:this.installing.has(r.absUrl)}),t.set(r.absUrl,r.id)}for(const r of this.urls){const i=t.get(r);if(i){e.get(i).categories.add("installed");continue}const n=this.records.get(r),s=n?.lastFetched?new Date(n.lastFetched).toLocaleString():"never",a=n?.enabled!==!1;e.set(`url:${r}`,{id:r,name:r,urlOnly:!0,url:r,meta:n?.lastError??`Last fetched: ${s}`,metaIsError:!!n?.lastError,categories:new Set(["installed"]),enabled:a,status:a&&Xt==="off"?"enabled":"disabled",...Xt!=="off"?{skipped:!0}:{}})}return[...e.values()]}get filteredRows(){const e=this.buildRows(),t=this.search.trim().toLowerCase(),r=[],i=[];for(const[u,p]of this.filterStates)(p==="on"?r:i).push(u);const n=[],s=[];for(const[u,p]of this.typeFilters)(p==="on"?n:s).push(u);const a=this.statusFilter==="on"?"enabled":this.statusFilter==="not"?"disabled":void 0,c=e.filter(u=>!(r.length&&!r.some(p=>u.categories.has(p))||i.some(p=>u.categories.has(p))||n.length&&!(u.type&&n.includes(u.type))||u.type&&s.includes(u.type)||a&&u.status!==a));return t?c.filter(u=>[u.id,u.name,u.type,u.meta,u.author].some(p=>p?.toLowerCase().includes(t))):c}renderRow(e){const t=e.categories.has("built-in")||e.categories.has("installed"),r=!!e.url&&e.categories.has("installed"),i=!!e.url&&!e.categories.has("installed");return S`
      <div
        class=${`row${e.categories.has("built-in")?" builtin":""}${e.metaIsError?" error":""}${e.skipped?" skipped":""}`}
      >
        <span class="row-icon">${e.icon?sr(e.icon):Yy}</span>
        <div class="row-main">
          <div class=${`row-title${e.urlOnly?" mono":""}`}>
            ${e.name}${e.id!==e.name?S`<span class="row-id">${e.id}</span>`:""}${e.type?S`<span class="row-type" title="Plugin type"
                  >${Qy.get(e.type)??e.type}</span
                >`:""}${e.skipped?S`<span
                  class="row-skipped"
                  title="Safe mode kept this plugin from loading this session — your saved setting is unchanged"
                  >skipped</span
                >`:""}
          </div>
          ${e.meta?S`<div class=${`meta${e.metaIsError?" err":""}`}>${e.meta}</div>`:""}
        </div>
        <div class="row-author">${e.author??""}</div>
        ${e.repo?S`<a
              class="row-repo"
              href=${e.repo}
              target="_blank"
              rel="noopener noreferrer"
              title="View source on GitHub"
              >${sr(Gy)}</a
            >`:S`<span></span>`}
        ${e.fixed?S`<span class="mi sm lock-icon" title="Always on — cannot be disabled">lock</span>`:t?S`<label
                class="switch"
                title=${e.skipped?"Your saved setting — safe mode is what stopped this plugin loading now":"Enable / disable"}
              >
                <input
                  type="checkbox"
                  .checked=${e.enabled}
                  @change=${n=>this.onRowToggle(e,n.target.checked)}
                />
                <span class="slider"></span>
              </label>`:S`<span></span>`}
        ${i?S`<button
              type="button"
              class="install"
              ?disabled=${e.installing}
              @click=${()=>this.installFromCatalog({absUrl:e.url,name:e.name})}
            >
              <span class="mi sm">${e.installing?"hourglass_empty":"download"}</span>
              ${e.installing?"Installing…":"Install"}
            </button>`:r?S`<button
                type="button"
                class="uninstall"
                @click=${()=>this.removePlugin(e.url)}
              >
                <span class="mi sm">delete</span> Uninstall
              </button>`:S`<span></span>`}
      </div>
    `}render(){const e=this.filteredRows;return S`
      <dialog @cancel=${this.close} @keydown=${tn}>
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
            ${Xt!=="off"?S`<p class="safemode">
                  <strong>Safe mode is on.</strong>
                  ${Xt==="all-optional"?S`<code>?safemode</code> skipped every URL plugin and every optional
                        built-in for this session.`:S`<code>?safemode1</code> skipped every URL plugin for this session.`}
                  Plugins marked <span class="row-skipped">skipped</span> are not running. The
                  toggles below still show — and change — your saved settings, which safe mode never
                  touches. Reload without the flag to run them again.
                </p>`:""}

            <div class="filters">
              <div class="chips">
                ${Xy.map(([t,r])=>this.renderTri(r,this.filterStates.get(t),()=>this.cycleFilter(t)))}
                ${this.renderTri("Enabled",this.statusFilter,()=>this.cycleStatusFilter(),"status",Jy)}
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
              ${Md.map(([t,r])=>this.renderTri(r,this.typeFilters.get(t),()=>this.cycleTypeFilter(t)))}
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
                ${this.catalogUrls.map(t=>S`<option value=${t}></option>`)}
              </datalist>
              <button type="button" class="ghost" @click=${this.reloadCatalogSource}>
                <span class="mi sm">refresh</span> Reload
              </button>
            </div>
            ${this.catalogError?S`<div class="meta err">Catalog unavailable: ${this.catalogError}</div>`:""}
            ${this.serverCatalogError?S`<div class="meta err">
                  Server registry unavailable: ${this.serverCatalogError}
                </div>`:""}

            <div class="plugin-list">
              ${e.length===0?S`<p class="hint">No plugins match the current filters/search.</p>`:""}
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
    `}};vt.styles=[Vt,en,Ve`
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
    `];It([K()],vt.prototype,"urls",2);It([K()],vt.prototype,"records",2);It([K()],vt.prototype,"addUrl",2);It([K()],vt.prototype,"catalog",2);It([K()],vt.prototype,"catalogError",2);It([K()],vt.prototype,"serverCatalog",2);It([K()],vt.prototype,"serverCatalogError",2);It([K()],vt.prototype,"installing",2);It([K()],vt.prototype,"catalogUrls",2);It([K()],vt.prototype,"activeCatalogUrl",2);It([K()],vt.prototype,"search",2);It([K()],vt.prototype,"filterStates",2);It([K()],vt.prototype,"typeFilters",2);It([K()],vt.prototype,"statusFilter",2);vt=It([it("plugin-manager-dialog")],vt);var Zy=Object.defineProperty,ew=Object.getOwnPropertyDescriptor,Ln=(e,t,r,i)=>{for(var n=i>1?void 0:i?ew(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Zy(t,r,n),n};const Ir="__general__";let qt=class extends qe{constructor(){super(...arguments),this.tabs=[],this.active=Ir,this.values={},this.placements={},this.secretsText="",this.workspaceTitle="",this.secretError="",this.dialogEl=null,this.attemptClose=e=>{const t=this.invalidSecrets();if(t.length>0){e?.preventDefault();const i=t[0];this.active=i.tab.id,this.secretError=`“${i.field.label}” must be empty or a \${secret:name} reference. Move the value into the secrets store (General tab) and reference it, so the raw secret is never saved or synced.`;return}const r=this.danglingSecrets();if(r.length>0){e?.preventDefault();const i=r[0];this.active=i.tab.id;const n=i.names.map(s=>`“${s}”`).join(", ");this.secretError=`“${i.field.label}” references ${n}, which the secrets store does not have. Add it in the General tab or correct the name — an unknown reference is passed on as the literal \${secret:name} text.`;return}this.secretError="",this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.attemptClose()}}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&nn(this.dialogEl,e)}async open(){const e=await pe(),t=[...e.registries.settings];this.tabs=t.map(([s,a])=>({id:s,name:a.name,fields:a.fields}));const r=await e.store.workspaces.findOne(e.workspaceId);this.workspaceTitle=r?.title??"";const i={},n={};for(const s of this.tabs)for(const a of s.fields){const c=`${s.id}:${a.key}`,u=await e.api.settings.placement(s.id,a.key);u==="user"?(i[c]=_o(c),n[c]="user"):u==="workspace"?(i[c]=(await e.store.settings.findOne(c))?.value,n[c]="workspace"):(i[c]=a.default,n[c]=a.scope??"workspace")}this.values=i,this.placements=n,this.secretsText=Yi(),this.active=Ir,await this.updateComplete,this.dialogEl?.showModal()}static rawSecret(e){return typeof e=="string"&&e!==""&&!e.includes("${secret:")}invalidSecrets(){const e=[];for(const t of this.tabs)for(const r of t.fields)r.type==="secret"&&qt.rawSecret(this.values[`${t.id}:${r.key}`])&&e.push({tab:t,field:r});return e}static secretRefs(e){return typeof e!="string"?[]:[...e.matchAll(/\$\{secret:([^}]*)\}/g)].map(t=>(t[1]??"").trim())}missingRefs(e){const t=new Set(Object.keys(Fr(this.secretsText)));return qt.secretRefs(e).filter(r=>!t.has(r))}danglingSecrets(){const e=[];for(const t of this.tabs)for(const r of t.fields){const i=this.missingRefs(this.values[`${t.id}:${r.key}`]);i.length>0&&e.push({tab:t,field:r,names:i})}return e}async setValue(e,t,r){const i=`${e.id}:${t.key}`;this.values={...this.values,[i]:r},this.clearSecretErrorIfFixed(),await(await pe()).api.settings.set(e.id,t.key,r,this.placements[i])}async toggleScope(e,t,r){const i=`${e.id}:${t.key}`,n=r?"user":"workspace";this.placements={...this.placements,[i]:n},await(await pe()).api.settings.set(e.id,t.key,this.values[i],n)}clearSecretErrorIfFixed(){this.secretError&&this.invalidSecrets().length===0&&this.danglingSecrets().length===0&&(this.secretError="")}onSecretsInput(e){this.secretsText=e.target.value,oc(this.secretsText),this.clearSecretErrorIfFixed()}downloadSecrets(){const e=new Blob([this.secretsText],{type:"text/plain;charset=utf-8"}),t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download="secrets.txt",r.click(),URL.revokeObjectURL(t)}async setWorkspaceTitle(e){this.workspaceTitle=e;const t=await pe();await t.store.workspaces.patch(t.workspaceId,{title:e.trim()||void 0})}renderControl(e,t){const r=`${e.id}:${t.key}`,i=this.values[r];switch(t.type){case"text":return S`<textarea
          .value=${String(i??"")}
          @change=${n=>this.setValue(e,t,n.target.value)}
        ></textarea>`;case"number":return S`<input
          type="number"
          .value=${i==null?"":String(i)}
          @change=${n=>{const s=n.target.value;this.setValue(e,t,s===""?void 0:Number(s))}}
        />`;case"boolean":return S`<label class="scope"
          ><input
            type="checkbox"
            .checked=${!!i}
            @change=${n=>this.setValue(e,t,n.target.checked)}
          />
          enabled</label
        >`;case"date":return S`<input
          type="date"
          .value=${String(i??"")}
          @change=${n=>this.setValue(e,t,n.target.value)}
        />`;case"secret":return this.renderSecretControl(e,t,i);case"option":return S`<div class="radios">
          ${(t.options??[]).map(n=>S`<label
              ><input
                type="radio"
                name=${r}
                .checked=${i===n}
                @change=${()=>this.setValue(e,t,n)}
              />${n}</label
            >`)}
        </div>`;case"selection":{const n=Array.isArray(i)?i:[];return S`<div class="checks">
          ${(t.options??[]).map(s=>S`<label
              ><input
                type="checkbox"
                .checked=${n.includes(s)}
                @change=${a=>{const u=a.target.checked?[...n,s]:n.filter(p=>p!==s);this.setValue(e,t,u)}}
              />${s}</label
            >`)}
        </div>`}case"string":default:return S`<input
          type="text"
          .value=${String(i??"")}
          @change=${n=>this.setValue(e,t,n.target.value)}
        />`}}renderSecretControl(e,t,r){const i=Object.keys(Fr(this.secretsText)),n=qt.rawSecret(r)||this.missingRefs(r).length>0;return S`<div class="secret-row">
      <input
        type="text"
        class=${n?"invalid":""}
        placeholder="value or \${secret:name}"
        .value=${String(r??"")}
        @change=${s=>this.setValue(e,t,s.target.value)}
      />
      ${i.length>0?S`<select
            title="Insert a secret reference"
            @change=${s=>{const a=s.target.value;a&&this.setValue(e,t,`\${secret:${a}}`),s.target.value=""}}
          >
            <option value="">🔑 secret…</option>
            ${i.map(s=>S`<option value=${s}>${s}</option>`)}
          </select>`:me}
    </div>`}renderField(e,t){const r=`${e.id}:${t.key}`;return S`<div class="field">
      <div class="field-head">
        <label>${t.label}</label>
        <label class="scope" title="Store on this device only (not synced)">
          <input
            type="checkbox"
            .checked=${this.placements[r]==="user"}
            @change=${i=>this.toggleScope(e,t,i.target.checked)}
          />
          user
        </label>
      </div>
      ${this.renderControl(e,t)}
      ${t.description?S`<p class="desc">${t.description}</p>`:me}
    </div>`}renderGeneral(){return S`
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
    `}renderPanel(){if(this.active===Ir)return this.renderGeneral();const e=this.tabs.find(t=>t.id===this.active);return e?S`
      <h3>${e.name}</h3>
      ${e.fields.length===0?S`<p class="empty">This plugin registered no settings.</p>`:e.fields.map(t=>this.renderField(e,t))}
    `:me}render(){return S`
      <dialog @cancel=${this.attemptClose} @keydown=${tn}>
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
          ${this.secretError?S`<div class="secret-error" role="alert">${this.secretError}</div>`:me}
          <div class="dialog-body">
            <div class="layout">
              <nav class="tabs">
                <button
                  type="button"
                  class=${this.active===Ir?"active":""}
                  @click=${()=>this.active=Ir}
                >
                  General
                </button>
                ${this.tabs.map(e=>S`<button
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
    `}};qt.styles=[Vt,en,Ve`
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
    `];Ln([K()],qt.prototype,"tabs",2);Ln([K()],qt.prototype,"active",2);Ln([K()],qt.prototype,"values",2);Ln([K()],qt.prototype,"placements",2);Ln([K()],qt.prototype,"secretsText",2);Ln([K()],qt.prototype,"workspaceTitle",2);Ln([K()],qt.prototype,"secretError",2);qt=Ln([it("settings-dialog")],qt);var tw=Object.defineProperty,nw=Object.getOwnPropertyDescriptor,br=(e,t,r,i)=>{for(var n=i>1?void 0:i?nw(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&tw(t,r,n),n};const rw={Windows:0,Actions:1,App:2,Tables:3,Views:4};function Ul(e){return rw[e]??3}function iw(e){return e?e.trimStart().startsWith("<svg")?S`<span class="cmd-svg">${ko(e)}</span>`:S`<span class="mi sm">${e}</span>`:S`<span class="mi sm">chevron_right</span>`}let zn=class extends qe{constructor(){super(...arguments),this.search="",this.items=[],this.selected=0,this.api=null,this.onDialogClick=e=>{if(e.detail===0||!this.dialogEl)return;const t=this.dialogEl.getBoundingClientRect();e.clientX>=t.left&&e.clientX<=t.right&&e.clientY>=t.top&&e.clientY<=t.bottom||this.close()}}async open(){const e=await pe();this.api=e.api,this.items=await this.buildItems(),this.search="",this.selected=0,await this.updateComplete,this.dialogEl&&!this.dialogEl.open&&this.dialogEl.showModal(),this.inputEl?.focus()}async buildItems(){const e=await pe(),t=e.api,r=[];for(const s of e.registries.commands)r.push({id:s.id,title:s.title,group:s.group??"Commands",...s.icon?{icon:s.icon}:{},haystack:[s.title,s.group,...s.keywords??[]].join(" ").toLowerCase(),run:()=>s.run(t)});for(const s of[...e.registries.headerButtons,...e.registries.footerButtons])r.push({id:`button:${s.id}`,title:s.label,group:"Actions",...s.icon?{icon:s.icon}:{},haystack:`${s.label} ${s.tooltip??""}`.toLowerCase(),run:()=>s.onClick(t)});const i=await t.store.tables.find({workspaceId:e.workspaceId});i.sort((s,a)=>s.name.localeCompare(a.name));for(const s of i)r.push({id:`goto:${s.id}`,title:`Go to: ${s.name}`,group:"Tables",icon:"table_chart",haystack:`${s.name} go to table`.toLowerCase(),run:()=>{$d(s.id)}});const n=await t.store.viewInstances.find({workspaceId:e.workspaceId});n.sort((s,a)=>s.name.localeCompare(a.name));for(const s of n)r.push({id:`goto-view:${s.id}`,title:`Go to view: ${s.name}`,group:"Views",icon:"view_quilt",haystack:`${s.name} go to view`.toLowerCase(),run:async()=>{await t.store.viewInstances.patch(s.id,{open:!0,updatedAt:Date.now()}),uy(s.id)}});return r.map((s,a)=>({it:s,i:a})).sort((s,a)=>Ul(s.it.group)-Ul(a.it.group)||s.i-a.i).map(({it:s})=>s)}get filtered(){const e=this.search.trim().toLowerCase();return e?this.items.filter(t=>t.haystack.includes(e)):this.items}close(){this.dialogEl?.close()}onInput(e){this.search=e.target.value,this.selected=0}onKeydown(e){const t=this.filtered;if(e.key==="ArrowDown")e.preventDefault(),this.selected=t.length?(this.selected+1)%t.length:0;else if(e.key==="ArrowUp")e.preventDefault(),this.selected=t.length?(this.selected-1+t.length)%t.length:0;else if(e.key==="Enter"){e.preventDefault();const r=t[this.selected];r&&this.execute(r)}}async execute(e){this.close();try{await e.run()}catch(t){console.error(`[command:${e.id}]`,t)}}render(){const e=this.filtered;let t="";return S`
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
          ${e.length===0?S`<div class="empty">No matching commands.</div>`:e.map((r,i)=>{const n=r.group!==t?(t=r.group,r.group):null;return S`
                  ${n?S`<div class="group-head">${n}</div>`:""}
                  <div
                    class=${`item${i===this.selected?" sel":""}`}
                    @mousemove=${()=>this.selected=i}
                    @click=${()=>this.execute(r)}
                  >
                    ${iw(r.icon)}
                    <span class="title">${r.title}</span>
                  </div>
                `})}
        </div>
      </dialog>
    `}};zn.styles=[Vt,Ve`
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
    `];br([K()],zn.prototype,"search",2);br([K()],zn.prototype,"items",2);br([K()],zn.prototype,"selected",2);br([bn("dialog")],zn.prototype,"dialogEl",2);br([bn("input")],zn.prototype,"inputEl",2);zn=br([it("command-palette-dialog")],zn);var sw=Object.defineProperty,ow=Object.getOwnPropertyDescriptor,Bd=(e,t,r,i)=>{for(var n=i>1?void 0:i?ow(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&sw(t,r,n),n};let Wi=class extends qe{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await pe();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(r=>this.tables=r.filter(i=>i.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(r=>r.workspaceId===this.workspaceId),await Cd(),await py()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?S``:S`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on the
      page, or click <strong>+ New Table</strong> above.
    </div>`}};Wi.styles=Ve`
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
  `;Bd([K()],Wi.prototype,"tables",2);Wi=Bd([it("table-list")],Wi);function Si(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function aw(e,t){const{from:r,to:i,name:n,mode:s}=t,a=await e.workspaces.get(r);if(await e.workspaces.put({id:i,name:n,createdAt:Date.now(),pluginUrls:s==="empty"?[]:[...a?.pluginUrls??[]]}),s==="empty")return i;if(s==="all"){const u=await e.tables.where("workspaceId").equals(r).toArray(),p=new Map;for(const _ of u){const T=Si();p.set(_.id,T),await e.tables.put({..._,id:T,workspaceId:i,updatedAt:Date.now()})}for(const[_,T]of p){const A=await e.rows.where("tableId").equals(_).toArray();A.length>0&&await e.rows.bulkPut(A.map(B=>({...B,id:Si(),tableId:T})))}const w=await e.viewTemplates.where("workspaceId").equals(r).toArray(),b=new Map;for(const _ of w){const T=Si();b.set(_.id,T),await e.viewTemplates.put({..._,id:T,workspaceId:i})}const $=await e.viewInstances.where("workspaceId").equals(r).toArray();for(const _ of $){const T=p.get(_.tableId);T&&await e.viewInstances.put({..._,id:Si(),workspaceId:i,tableId:T,templateId:b.get(_.templateId)??_.templateId})}}const c=await e.settings.where("workspaceId").equals(r).toArray();for(const u of c)await e.settings.put({...u,key:Kn(i,u.name),workspaceId:i,name:u.name});return i}var lw=Object.defineProperty,cw=Object.getOwnPropertyDescriptor,ea=(e,t,r,i)=>{for(var n=i>1?void 0:i?cw(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&lw(t,r,n),n};const Hl="Clone everything (tables, views, settings)",ql="Clone settings only (no data)",dw="Empty workspace";let Ur=class extends qe{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await pe();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);if(!t)return;const r=new URLSearchParams(location.search);r.set("space",t.name);const i=`${location.pathname}?${r.toString()}${location.hash}`;location.assign(i)}async addWorkspace(){const e=await pe(),t=await e.api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const r=await e.api.ui.dialogs.choice(`What should "${t.trim()}" start with?`,[Hl,ql,dw],"New workspace");if(!r)return;const i=r===Hl?"all":r===ql?"settings":"empty",n=Fd(t.trim());await aw(nc(),{from:e.workspaceId,to:n,name:t.trim(),mode:i});const s=new URLSearchParams(location.search);s.set("space",t.trim()),location.assign(`${location.pathname}?${s.toString()}${location.hash}`)}render(){return S`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>S`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};Ur.styles=[Vt,Ve`
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
    `];ea([K()],Ur.prototype,"workspaces",2);ea([K()],Ur.prototype,"current",2);Ur=ea([it("workspace-selector")],Ur);var Wl=Object.freeze,Nd=Object.defineProperty,uw=Object.getOwnPropertyDescriptor,sn=(e,t,r,i)=>{for(var n=i>1?void 0:i?uw(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Nd(t,r,n),n},hw=(e,t)=>Wl(Nd(e,"raw",{value:Wl(e.slice())})),Kl;function Vl(e){return e?e.trimStart().startsWith("<svg")?S`<span class="icon-svg" aria-hidden="true">${ko(e)}</span>`:S`<span class="mi sm" aria-hidden="true">${e}</span>`:""}let Dt=class extends qe{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.workspaceTitle="",this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId,{notice:t.detail.notice})},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onOpenSettings=()=>{this.settingsDialog?.open()},this.onOpenCommandPalette=()=>{this.commandPaletteDialog?.open()},this.onGlobalKeydown=e=>{(e.ctrlKey||e.metaKey)&&!e.altKey&&(e.key==="k"||e.key==="K")&&(e.preventDefault(),this.commandPaletteDialog?.open())},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{Yl(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!Yl(e))return;e.preventDefault();const t=await pe(),r=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:r,event:e});for(const i of[...t.registries.dropHandlers])try{if(await i(e,t.api))return}catch(n){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:n})}},this.runSlot=(e,t)=>{if(!this.api)return;const r=t?.currentTarget??void 0;Promise.resolve(e.onClick(this.api,{anchor:r})).catch(i=>{console.error(`[footer-button:${e.id}]`,i)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.addEventListener("easydb:open-settings",this.onOpenSettings),document.addEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.addEventListener("easydb:focus-search",this.openSearch),document.addEventListener("keydown",this.onGlobalKeydown),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.removeEventListener("easydb:open-settings",this.onOpenSettings),document.removeEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.removeEventListener("easydb:focus-search",this.openSearch),document.removeEventListener("keydown",this.onGlobalKeydown),this.workspaceUnsub?.()}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await pe();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e)),this.workspaceUnsub=e.store.workspaces.subscribe(t=>{const r=t.find(i=>i.id===e.workspaceId);this.workspaceTitle=r?.title?.trim()??"",fw(this.workspaceTitle)})}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){if(e.variant==="secondary")return S`
        <button class="icon-btn" title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
          ${Vl(e.icon)}
        </button>
      `;const r=t==="header"||e.variant==="primary"?"primary":"slot";return S`
      <button class=${r} title=${e.tooltip??e.label} @click=${i=>this.runSlot(e,i)}>
        ${Vl(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return S(Kl||(Kl=hw([`
      <header>
        <strong
          >`,`
          <a
            class="version-link"
            href="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md"
            target="_blank"
            rel="noopener"
            title="View the changelog on GitHub"
            ><span class="version">v0.0.219</span></a
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
    `])),this.workspaceTitle||"easyDBAccess",this.headerButtons.filter(e=>e.variant!=="secondary").map(e=>this.renderSlotButton(e,"header")),this.searchOpen?S`<span class="search-wrap">
              <input
                class="search"
                type="search"
                placeholder="search all tables…"
                .value=${this.searchQuery}
                @input=${this.onSearchInput}
                @blur=${this.closeSearchOnBlur}
              />
              ${this.searchQuery.length>0?S`<button
                    class="search-clear"
                    title="Clear search"
                    aria-label="Clear search"
                    @mousedown=${this.clearSearch}
                  >
                    ×
                  </button>`:""}
            </span>`:S`<button
              class="icon-btn ${this.searchQuery.trim().length>0?"active":""}"
              title=${this.searchQuery.trim().length>0?`Filtering all tables: ${this.searchQuery}`:"Search across all tables in this workspace"}
              aria-label="Search"
              @click=${this.openSearch}
            >
              <span class="mi" aria-hidden="true">search</span>
            </button>`,()=>this.api?.ui.openPluginManager(),this.headerButtons.filter(e=>e.variant==="secondary").map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};Dt.styles=[Vt,Ve`
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
    `];sn([bn("new-table-dialog")],Dt.prototype,"dialog",2);sn([bn("csv-paste-dialog")],Dt.prototype,"csvPasteDialog",2);sn([bn("plugin-manager-dialog")],Dt.prototype,"pluginManagerDialog",2);sn([bn("settings-dialog")],Dt.prototype,"settingsDialog",2);sn([bn("command-palette-dialog")],Dt.prototype,"commandPaletteDialog",2);sn([bn("input.search")],Dt.prototype,"searchInput",2);sn([K()],Dt.prototype,"footerButtons",2);sn([K()],Dt.prototype,"headerButtons",2);sn([K()],Dt.prototype,"searchQuery",2);sn([K()],Dt.prototype,"searchOpen",2);sn([K()],Dt.prototype,"workspaceTitle",2);Dt=sn([it("app-shell")],Dt);const Gl=document.title;function fw(e){const t=e.trim();document.title=t?`${t} — ${Gl}`:Gl}function Yl(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([pe(),Zt(()=>Promise.resolve().then(()=>Ad),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});export{me as A,Ve as a,S as b,tn as c,en as d,qe as i,nn as m,K as r,it as t};
//# sourceMappingURL=index-9AuQwalz.js.map
