(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();const Dd="modulepreload",Od=function(e){return"/easydbaccess/"+e},ba={},ln=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){let a=function(p){return Promise.all(p.map(w=>Promise.resolve(w).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),u=c?.nonce||c?.getAttribute("nonce");n=a(r.map(p=>{if(p=Od(p),p in ba)return;ba[p]=!0;const w=p.endsWith(".css"),b=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${b}`))return;const $=document.createElement("link");if($.rel=w?"stylesheet":Dd,w||($.as="script"),$.crossOrigin="",$.href=p,u&&$.setAttribute("nonce",u),document.head.appendChild($),w)return new Promise((D,P)=>{$.addEventListener("load",D),$.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${p}`)))})}))}function s(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return n.then(a=>{for(const c of a||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vi=globalThis,ao=vi.ShadowRoot&&(vi.ShadyCSS===void 0||vi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,lo=Symbol(),ya=new WeakMap;let Pl=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==lo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(ao&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=ya.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ya.set(r,t))}return t}toString(){return this.cssText}};const jd=e=>new Pl(typeof e=="string"?e:e+"",void 0,lo),We=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,s)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[s+1],e[0]);return new Pl(r,e,lo)},zd=(e,t)=>{if(ao)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),n=vi.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)}},wa=ao?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return jd(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ld,defineProperty:Fd,getOwnPropertyDescriptor:Md,getOwnPropertyNames:Bd,getOwnPropertySymbols:Nd,getPrototypeOf:Ud}=Object,Li=globalThis,va=Li.trustedTypes,Hd=va?va.emptyScript:"",qd=Li.reactiveElementPolyfillSupport,Rr=(e,t)=>e,ki={toAttribute(e,t){switch(t){case Boolean:e=e?Hd:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},co=(e,t)=>!Ld(e,t),xa={attribute:!0,type:String,converter:ki,reflect:!1,useDefault:!1,hasChanged:co};Symbol.metadata??=Symbol("metadata"),Li.litPropertyMetadata??=new WeakMap;let sr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=xa){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,r);n!==void 0&&Fd(this.prototype,t,n)}}static getPropertyDescriptor(t,r,i){const{get:n,set:s}=Md(this.prototype,t)??{get(){return this[r]},set(a){this[r]=a}};return{get:n,set(a){const c=n?.call(this);s?.call(this,a),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??xa}static _$Ei(){if(this.hasOwnProperty(Rr("elementProperties")))return;const t=Ud(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Rr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Rr("properties"))){const r=this.properties,i=[...Bd(r),...Nd(r)];for(const n of i)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)r.unshift(wa(n))}else t!==void 0&&r.push(wa(t));return r}static _$Eu(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return zd(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$ET(t,r){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const s=(i.converter?.toAttribute!==void 0?i.converter:ki).toAttribute(r,i.type);this._$Em=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,r){const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const s=i.getPropertyOptions(n),a=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ki;this._$Em=n;const c=a.fromAttribute(r,s.type);this[n]=c??this._$Ej?.get(n)??c,this._$Em=null}}requestUpdate(t,r,i,n=!1,s){if(t!==void 0){const a=this.constructor;if(n===!1&&(s=this[t]),i??=a.getPropertyOptions(t),!((i.hasChanged??co)(s,r)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:i,reflect:n,wrapped:s},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??r??this[t]),s!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,s]of i){const{wrapped:a}=s,c=this[n];a!==!0||this._$AL.has(n)||c===void 0||this.C(n,void 0,s,c)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(r)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};sr.elementStyles=[],sr.shadowRootOptions={mode:"open"},sr[Rr("elementProperties")]=new Map,sr[Rr("finalized")]=new Map,qd?.({ReactiveElement:sr}),(Li.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const uo=globalThis,$a=e=>e,Ci=uo.trustedTypes,ka=Ci?Ci.createPolicy("lit-html",{createHTML:e=>e}):void 0,Rl="$lit$",Dn=`lit$${Math.random().toFixed(9).slice(2)}$`,Dl="?"+Dn,Wd=`<${Dl}>`,Gn=document,Dr=()=>Gn.createComment(""),Or=e=>e===null||typeof e!="object"&&typeof e!="function",ho=Array.isArray,Kd=e=>ho(e)||typeof e?.[Symbol.iterator]=="function",Ps=`[ 	
\f\r]`,Tr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ca=/-->/g,Ea=/>/g,qn=RegExp(`>|${Ps}(?:([^\\s"'>=/]+)(${Ps}*=${Ps}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Sa=/'/g,_a=/"/g,Ol=/^(?:script|style|textarea|title)$/i,Vd=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),_=Vd(1),Yn=Symbol.for("lit-noChange"),pe=Symbol.for("lit-nothing"),Ta=new WeakMap,Kn=Gn.createTreeWalker(Gn,129);function jl(e,t){if(!ho(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ka!==void 0?ka.createHTML(t):t}const Gd=(e,t)=>{const r=e.length-1,i=[];let n,s=t===2?"<svg>":t===3?"<math>":"",a=Tr;for(let c=0;c<r;c++){const u=e[c];let p,w,b=-1,$=0;for(;$<u.length&&(a.lastIndex=$,w=a.exec(u),w!==null);)$=a.lastIndex,a===Tr?w[1]==="!--"?a=Ca:w[1]!==void 0?a=Ea:w[2]!==void 0?(Ol.test(w[2])&&(n=RegExp("</"+w[2],"g")),a=qn):w[3]!==void 0&&(a=qn):a===qn?w[0]===">"?(a=n??Tr,b=-1):w[1]===void 0?b=-2:(b=a.lastIndex-w[2].length,p=w[1],a=w[3]===void 0?qn:w[3]==='"'?_a:Sa):a===_a||a===Sa?a=qn:a===Ca||a===Ea?a=Tr:(a=qn,n=void 0);const D=a===qn&&e[c+1].startsWith("/>")?" ":"";s+=a===Tr?u+Wd:b>=0?(i.push(p),u.slice(0,b)+Rl+u.slice(b)+Dn+D):u+Dn+(b===-2?c:D)}return[jl(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class jr{constructor({strings:t,_$litType$:r},i){let n;this.parts=[];let s=0,a=0;const c=t.length-1,u=this.parts,[p,w]=Gd(t,r);if(this.el=jr.createElement(p,i),Kn.currentNode=this.el.content,r===2||r===3){const b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(n=Kn.nextNode())!==null&&u.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const b of n.getAttributeNames())if(b.endsWith(Rl)){const $=w[a++],D=n.getAttribute(b).split(Dn),P=/([.?@])?(.*)/.exec($);u.push({type:1,index:s,name:P[2],strings:D,ctor:P[1]==="."?Xd:P[1]==="?"?Qd:P[1]==="@"?Jd:Fi}),n.removeAttribute(b)}else b.startsWith(Dn)&&(u.push({type:6,index:s}),n.removeAttribute(b));if(Ol.test(n.tagName)){const b=n.textContent.split(Dn),$=b.length-1;if($>0){n.textContent=Ci?Ci.emptyScript:"";for(let D=0;D<$;D++)n.append(b[D],Dr()),Kn.nextNode(),u.push({type:2,index:++s});n.append(b[$],Dr())}}}else if(n.nodeType===8)if(n.data===Dl)u.push({type:2,index:s});else{let b=-1;for(;(b=n.data.indexOf(Dn,b+1))!==-1;)u.push({type:7,index:s}),b+=Dn.length-1}s++}}static createElement(t,r){const i=Gn.createElement("template");return i.innerHTML=t,i}}function ar(e,t,r=e,i){if(t===Yn)return t;let n=i!==void 0?r._$Co?.[i]:r._$Cl;const s=Or(t)?void 0:t._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),s===void 0?n=void 0:(n=new s(e),n._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=n:r._$Cl=n),n!==void 0&&(t=ar(e,n._$AS(e,t.values),n,i)),t}class Yd{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:i}=this._$AD,n=(t?.creationScope??Gn).importNode(r,!0);Kn.currentNode=n;let s=Kn.nextNode(),a=0,c=0,u=i[0];for(;u!==void 0;){if(a===u.index){let p;u.type===2?p=new Mr(s,s.nextSibling,this,t):u.type===1?p=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(p=new Zd(s,this,t)),this._$AV.push(p),u=i[++c]}a!==u?.index&&(s=Kn.nextNode(),a++)}return Kn.currentNode=Gn,n}p(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class Mr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,n){this.type=2,this._$AH=pe,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=ar(this,t,r),Or(t)?t===pe||t==null||t===""?(this._$AH!==pe&&this._$AR(),this._$AH=pe):t!==this._$AH&&t!==Yn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Kd(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==pe&&Or(this._$AH)?this._$AA.nextSibling.data=t:this.T(Gn.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=jr.createElement(jl(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(r);else{const s=new Yd(n,this),a=s.u(this.options);s.p(r),this.T(a),this._$AH=s}}_$AC(t){let r=Ta.get(t.strings);return r===void 0&&Ta.set(t.strings,r=new jr(t)),r}k(t){ho(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const s of t)n===r.length?r.push(i=new Mr(this.O(Dr()),this.O(Dr()),this,this.options)):i=r[n],i._$AI(s),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const i=$a(t).nextSibling;$a(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Fi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,n,s){this.type=1,this._$AH=pe,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=pe}_$AI(t,r=this,i,n){const s=this.strings;let a=!1;if(s===void 0)t=ar(this,t,r,0),a=!Or(t)||t!==this._$AH&&t!==Yn,a&&(this._$AH=t);else{const c=t;let u,p;for(t=s[0],u=0;u<s.length-1;u++)p=ar(this,c[i+u],r,u),p===Yn&&(p=this._$AH[u]),a||=!Or(p)||p!==this._$AH[u],p===pe?t=pe:t!==pe&&(t+=(p??"")+s[u+1]),this._$AH[u]=p}a&&!n&&this.j(t)}j(t){t===pe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Xd extends Fi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===pe?void 0:t}}class Qd extends Fi{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==pe)}}class Jd extends Fi{constructor(t,r,i,n,s){super(t,r,i,n,s),this.type=5}_$AI(t,r=this){if((t=ar(this,t,r,0)??pe)===Yn)return;const i=this._$AH,n=t===pe&&i!==pe||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==pe&&(i===pe||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Zd{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ar(this,t)}}const eu=uo.litHtmlPolyfillSupport;eu?.(jr,Mr),(uo.litHtmlVersions??=[]).push("3.3.3");const tu=(e,t,r)=>{const i=r?.renderBefore??t;let n=i._$litPart$;if(n===void 0){const s=r?.renderBefore??null;i._$litPart$=n=new Mr(t.insertBefore(Dr(),s),s,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fo=globalThis;let Ue=class extends sr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=tu(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Yn}};Ue._$litElement$=!0,Ue.finalized=!0,fo.litElementHydrateSupport?.({LitElement:Ue});const nu=fo.litElementPolyfillSupport;nu?.({LitElement:Ue});(fo.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ru={attribute:!0,type:String,converter:ki,reflect:!1,hasChanged:co},iu=(e=ru,t,r)=>{const{kind:i,metadata:n}=r;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),i==="accessor"){const{name:a}=r;return{set(c){const u=t.get.call(this);t.set.call(this,c),this.requestUpdate(a,u,e,!0,c)},init(c){return c!==void 0&&this.C(a,void 0,e,c),c}}}if(i==="setter"){const{name:a}=r;return function(c){const u=this[a];t.call(this,c),this.requestUpdate(a,u,e,!0,c)}}throw Error("Unsupported decorator location: "+i)};function Ht(e){return(t,r)=>typeof r=="object"?iu(e,t,r):((i,n,s)=>{const a=n.hasOwnProperty(s);return n.constructor.createProperty(s,i),a?Object.getOwnPropertyDescriptor(n,s):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function K(e){return Ht({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const su=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function yn(e,t){return(r,i,n)=>{const s=a=>a.renderRoot?.querySelector(e)??null;return su(r,i,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ou={CHILD:2},zl=e=>(...t)=>({_$litDirective$:e,values:t});class au{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ei extends au{constructor(t){if(super(t),this.it=pe,t.type!==ou.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===pe||t==null)return this._t=void 0,this.it=t;if(t===Yn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Ei.directiveName="unsafeHTML",Ei.resultType=1;const or=zl(Ei);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class qs extends Ei{}qs.directiveName="unsafeSVG",qs.resultType=2;const po=zl(qs);var lu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function cu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xi={exports:{}},du=xi.exports,Aa;function uu(){return Aa||(Aa=1,(function(e,t){(function(r,i){e.exports=i()})(du,function(){var r=function(o,l){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,h){d.__proto__=h}||function(d,h){for(var f in h)Object.prototype.hasOwnProperty.call(h,f)&&(d[f]=h[f])})(o,l)},i=function(){return(i=Object.assign||function(o){for(var l,d=1,h=arguments.length;d<h;d++)for(var f in l=arguments[d])Object.prototype.hasOwnProperty.call(l,f)&&(o[f]=l[f]);return o}).apply(this,arguments)};function n(o,l,d){for(var h,f=0,g=l.length;f<g;f++)!h&&f in l||((h=h||Array.prototype.slice.call(l,0,f))[f]=l[f]);return o.concat(h||Array.prototype.slice.call(l))}var s=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:lu,a=Object.keys,c=Array.isArray;function u(o,l){return typeof l!="object"||a(l).forEach(function(d){o[d]=l[d]}),o}typeof Promise>"u"||s.Promise||(s.Promise=Promise);var p=Object.getPrototypeOf,w={}.hasOwnProperty;function b(o,l){return w.call(o,l)}function $(o,l){typeof l=="function"&&(l=l(p(o))),(typeof Reflect>"u"?a:Reflect.ownKeys)(l).forEach(function(d){P(o,d,l[d])})}var D=Object.defineProperty;function P(o,l,d,h){D(o,l,u(d&&b(d,"get")&&typeof d.get=="function"?{get:d.get,set:d.set,configurable:!0}:{value:d,configurable:!0,writable:!0},h))}function S(o){return{from:function(l){return o.prototype=Object.create(l.prototype),P(o.prototype,"constructor",o),{extend:$.bind(null,o.prototype)}}}}var B=Object.getOwnPropertyDescriptor,q=[].slice;function Q(o,l,d){return q.call(o,l,d)}function X(o,l){return l(o)}function J(o){if(!o)throw new Error("Assertion Failed")}function W(o){s.setImmediate?setImmediate(o):setTimeout(o,0)}function Z(o,l){if(typeof l=="string"&&b(o,l))return o[l];if(!l)return o;if(typeof l!="string"){for(var d=[],h=0,f=l.length;h<f;++h){var g=Z(o,l[h]);d.push(g)}return d}var v=l.indexOf(".");if(v!==-1){var C=o[l.substr(0,v)];return C==null?void 0:Z(C,l.substr(v+1))}}function de(o,l,d){if(o&&l!==void 0&&!("isFrozen"in Object&&Object.isFrozen(o)))if(typeof l!="string"&&"length"in l){J(typeof d!="string"&&"length"in d);for(var h=0,f=l.length;h<f;++h)de(o,l[h],d[h])}else{var g,v,C=l.indexOf(".");C!==-1?(g=l.substr(0,C),(v=l.substr(C+1))===""?d===void 0?c(o)&&!isNaN(parseInt(g))?o.splice(g,1):delete o[g]:o[g]=d:de(C=!(C=o[g])||!b(o,g)?o[g]={}:C,v,d)):d===void 0?c(o)&&!isNaN(parseInt(l))?o.splice(l,1):delete o[l]:o[l]=d}}function we(o){var l,d={};for(l in o)b(o,l)&&(d[l]=o[l]);return d}var Te=[].concat;function Pe(o){return Te.apply([],o)}var xn="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Pe([8,16,32,64].map(function(o){return["Int","Uint","Float"].map(function(l){return l+o+"Array"})}))).filter(function(o){return s[o]}),m=new Set(xn.map(function(o){return s[o]})),x=null;function I(o){return x=new WeakMap,o=(function l(d){if(!d||typeof d!="object")return d;var h=x.get(d);if(h)return h;if(c(d)){h=[],x.set(d,h);for(var f=0,g=d.length;f<g;++f)h.push(l(d[f]))}else if(m.has(d.constructor))h=d;else{var v,C=p(d);for(v in h=C===Object.prototype?{}:Object.create(C),x.set(d,h),d)b(d,v)&&(h[v]=l(d[v]))}return h})(o),x=null,o}var y={}.toString;function k(o){return y.call(o).slice(8,-1)}var he=typeof Symbol<"u"?Symbol.iterator:"@@iterator",ge=typeof he=="symbol"?function(o){var l;return o!=null&&(l=o[he])&&l.apply(o)}:function(){return null};function G(o,l){return l=o.indexOf(l),0<=l&&o.splice(l,1),0<=l}var Y={};function Fe(o){var l,d,h,f;if(arguments.length===1){if(c(o))return o.slice();if(this===Y&&typeof o=="string")return[o];if(f=ge(o)){for(d=[];!(h=f.next()).done;)d.push(h.value);return d}if(o==null)return[o];if(typeof(l=o.length)!="number")return[o];for(d=new Array(l);l--;)d[l]=o[l];return d}for(l=arguments.length,d=new Array(l);l--;)d[l]=arguments[l];return d}var st=typeof Symbol<"u"?function(o){return o[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Ae=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Kt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Ae),dn={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Ke(o,l){this.name=o,this.message=l}function Be(o,l){return o+". Errors: "+Object.keys(l).map(function(d){return l[d].toString()}).filter(function(d,h,f){return f.indexOf(d)===h}).join(`
`)}function Se(o,l,d,h){this.failures=l,this.failedKeys=h,this.successCount=d,this.message=Be(o,l)}function Oe(o,l){this.name="BulkError",this.failures=Object.keys(l).map(function(d){return l[d]}),this.failuresByPos=l,this.message=Be(o,this.failures)}S(Ke).from(Error).extend({toString:function(){return this.name+": "+this.message}}),S(Se).from(Ke),S(Oe).from(Ke);var Je=Kt.reduce(function(o,l){return o[l]=l+"Error",o},{}),Re=Ke,ae=Kt.reduce(function(o,l){var d=l+"Error";function h(f,g){this.name=d,f?typeof f=="string"?(this.message="".concat(f).concat(g?`
 `+g:""),this.inner=g||null):typeof f=="object"&&(this.message="".concat(f.name," ").concat(f.message),this.inner=f):(this.message=dn[l]||d,this.inner=null)}return S(h).from(Re),o[l]=h,o},{});ae.Syntax=SyntaxError,ae.Type=TypeError,ae.Range=RangeError;var Ze=Ae.reduce(function(o,l){return o[l+"Error"]=ae[l],o},{}),Ne=Kt.reduce(function(o,l){return["Syntax","Type","Range"].indexOf(l)===-1&&(o[l+"Error"]=ae[l]),o},{});function ye(){}function ke(o){return o}function Dt(o,l){return o==null||o===ke?l:function(d){return l(o(d))}}function me(o,l){return function(){o.apply(this,arguments),l.apply(this,arguments)}}function et(o,l){return o===ye?l:function(){var d=o.apply(this,arguments);d!==void 0&&(arguments[0]=d);var h=this.onsuccess,f=this.onerror;this.onsuccess=null,this.onerror=null;var g=l.apply(this,arguments);return h&&(this.onsuccess=this.onsuccess?me(h,this.onsuccess):h),f&&(this.onerror=this.onerror?me(f,this.onerror):f),g!==void 0?g:d}}function En(o,l){return o===ye?l:function(){o.apply(this,arguments);var d=this.onsuccess,h=this.onerror;this.onsuccess=this.onerror=null,l.apply(this,arguments),d&&(this.onsuccess=this.onsuccess?me(d,this.onsuccess):d),h&&(this.onerror=this.onerror?me(h,this.onerror):h)}}function rn(o,l){return o===ye?l:function(d){var h=o.apply(this,arguments);u(d,h);var f=this.onsuccess,g=this.onerror;return this.onsuccess=null,this.onerror=null,d=l.apply(this,arguments),f&&(this.onsuccess=this.onsuccess?me(f,this.onsuccess):f),g&&(this.onerror=this.onerror?me(g,this.onerror):g),h===void 0?d===void 0?void 0:d:u(h,d)}}function rt(o,l){return o===ye?l:function(){return l.apply(this,arguments)!==!1&&o.apply(this,arguments)}}function Ot(o,l){return o===ye?l:function(){var d=o.apply(this,arguments);if(d&&typeof d.then=="function"){for(var h=this,f=arguments.length,g=new Array(f);f--;)g[f]=arguments[f];return d.then(function(){return l.apply(h,g)})}return l.apply(this,arguments)}}Ne.ModifyError=Se,Ne.DexieError=Ke,Ne.BulkError=Oe;var Le=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ve(o){Le=o}var Et={},at=100,xn=typeof Promise>"u"?[]:(function(){var o=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[o,p(o),o];var l=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[l,p(l),o]})(),Ae=xn[0],Kt=xn[1],xn=xn[2],Kt=Kt&&Kt.then,_e=Ae&&Ae.constructor,jt=!!xn,Ge=function(o,l){ct.push([o,l]),ft&&(queueMicrotask(ve),ft=!1)},xt=!0,ft=!0,lt=[],He=[],be=ke,tt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:ye,pgp:!1,env:{},finalize:ye},re=tt,ct=[],gt=0,It=[];function ie(o){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var l=this._PSD=re;if(typeof o!="function"){if(o!==Et)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&pt(this,this._value))}this._state=null,this._value=null,++l.ref,(function d(h,f){try{f(function(g){if(h._state===null){if(g===h)throw new TypeError("A promise cannot be resolved with itself.");var v=h._lib&&Me();g&&typeof g.then=="function"?d(h,function(C,T){g instanceof ie?g._then(C,T):g.then(C,T)}):(h._state=!0,h._value=g,Sn(h)),v&&Ye()}},pt.bind(null,h))}catch(g){pt(h,g)}})(this,o)}var un={get:function(){var o=re,l=Vr;function d(h,f){var g=this,v=!o.global&&(o!==re||l!==Vr),C=v&&!Tn(),T=new ie(function(R,z){ce(g,new wn(Ho(h,o,v,C),Ho(f,o,v,C),R,z,o))});return this._consoleTask&&(T._consoleTask=this._consoleTask),T}return d.prototype=Et,d},set:function(o){P(this,"then",o&&o.prototype===Et?un:{get:function(){return o},set:un.set})}};function wn(o,l,d,h,f){this.onFulfilled=typeof o=="function"?o:null,this.onRejected=typeof l=="function"?l:null,this.resolve=d,this.reject=h,this.psd=f}function pt(o,l){var d,h;He.push(l),o._state===null&&(d=o._lib&&Me(),l=be(l),o._state=!1,o._value=l,h=o,lt.some(function(f){return f._value===h._value})||lt.push(h),Sn(o),d&&Ye())}function Sn(o){var l=o._listeners;o._listeners=[];for(var d=0,h=l.length;d<h;++d)ce(o,l[d]);var f=o._PSD;--f.ref||f.finalize(),gt===0&&(++gt,Ge(function(){--gt==0&&je()},[]))}function ce(o,l){if(o._state!==null){var d=o._state?l.onFulfilled:l.onRejected;if(d===null)return(o._state?l.resolve:l.reject)(o._value);++l.psd.ref,++gt,Ge(De,[d,o,l])}else o._listeners.push(l)}function De(o,l,d){try{var h,f=l._value;!l._state&&He.length&&(He=[]),h=Le&&l._consoleTask?l._consoleTask.run(function(){return o(f)}):o(f),l._state||He.indexOf(f)!==-1||(function(g){for(var v=lt.length;v;)if(lt[--v]._value===g._value)return lt.splice(v,1)})(l),d.resolve(h)}catch(g){d.reject(g)}finally{--gt==0&&je(),--d.psd.ref||d.psd.finalize()}}function ve(){Fn(tt,function(){Me()&&Ye()})}function Me(){var o=xt;return ft=xt=!1,o}function Ye(){var o,l,d;do for(;0<ct.length;)for(o=ct,ct=[],d=o.length,l=0;l<d;++l){var h=o[l];h[0].apply(null,h[1])}while(0<ct.length);ft=xt=!0}function je(){var o=lt;lt=[],o.forEach(function(h){h._PSD.onunhandled.call(null,h._value,h)});for(var l=It.slice(0),d=l.length;d;)l[--d]()}function sn(o){return new ie(Et,!1,o)}function qe(o,l){var d=re;return function(){var h=Me(),f=re;try{return An(d,!0),o.apply(this,arguments)}catch(g){l&&l(g)}finally{An(f,!1),h&&Ye()}}}$(ie.prototype,{then:un,_then:function(o,l){ce(this,new wn(null,null,o,l,re))},catch:function(o){if(arguments.length===1)return this.then(null,o);var l=o,d=arguments[1];return typeof l=="function"?this.then(null,function(h){return(h instanceof l?d:sn)(h)}):this.then(null,function(h){return(h&&h.name===l?d:sn)(h)})},finally:function(o){return this.then(function(l){return ie.resolve(o()).then(function(){return l})},function(l){return ie.resolve(o()).then(function(){return sn(l)})})},timeout:function(o,l){var d=this;return o<1/0?new ie(function(h,f){var g=setTimeout(function(){return f(new ae.Timeout(l))},o);d.then(h,f).finally(clearTimeout.bind(null,g))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&P(ie.prototype,Symbol.toStringTag,"Dexie.Promise"),tt.env=Uo(),$(ie,{all:function(){var o=Fe.apply(null,arguments).map(Gr);return new ie(function(l,d){o.length===0&&l([]);var h=o.length;o.forEach(function(f,g){return ie.resolve(f).then(function(v){o[g]=v,--h||l(o)},d)})})},resolve:function(o){return o instanceof ie?o:o&&typeof o.then=="function"?new ie(function(l,d){o.then(l,d)}):new ie(Et,!0,o)},reject:sn,race:function(){var o=Fe.apply(null,arguments).map(Gr);return new ie(function(l,d){o.map(function(h){return ie.resolve(h).then(l,d)})})},PSD:{get:function(){return re},set:function(o){return re=o}},totalEchoes:{get:function(){return Vr}},newPSD:_n,usePSD:Fn,scheduler:{get:function(){return Ge},set:function(o){Ge=o}},rejectionMapper:{get:function(){return be},set:function(o){be=o}},follow:function(o,l){return new ie(function(d,h){return _n(function(f,g){var v=re;v.unhandleds=[],v.onunhandled=g,v.finalize=me(function(){var C,T=this;C=function(){T.unhandleds.length===0?f():g(T.unhandleds[0])},It.push(function R(){C(),It.splice(It.indexOf(R),1)}),++gt,Ge(function(){--gt==0&&je()},[])},v.finalize),o()},l,d,h)})}}),_e&&(_e.allSettled&&P(ie,"allSettled",function(){var o=Fe.apply(null,arguments).map(Gr);return new ie(function(l){o.length===0&&l([]);var d=o.length,h=new Array(d);o.forEach(function(f,g){return ie.resolve(f).then(function(v){return h[g]={status:"fulfilled",value:v}},function(v){return h[g]={status:"rejected",reason:v}}).then(function(){return--d||l(h)})})})}),_e.any&&typeof AggregateError<"u"&&P(ie,"any",function(){var o=Fe.apply(null,arguments).map(Gr);return new ie(function(l,d){o.length===0&&d(new AggregateError([]));var h=o.length,f=new Array(h);o.forEach(function(g,v){return ie.resolve(g).then(function(C){return l(C)},function(C){f[v]=C,--h||d(new AggregateError(f))})})})}),_e.withResolvers&&(ie.withResolvers=_e.withResolvers));var bt={awaits:0,echoes:0,id:0},dd=0,Wr=[],Kr=0,Vr=0,ud=0;function _n(o,l,d,h){var f=re,g=Object.create(f);return g.parent=f,g.ref=0,g.global=!1,g.id=++ud,tt.env,g.env=jt?{Promise:ie,PromiseProp:{value:ie,configurable:!0,writable:!0},all:ie.all,race:ie.race,allSettled:ie.allSettled,any:ie.any,resolve:ie.resolve,reject:ie.reject}:{},l&&u(g,l),++f.ref,g.finalize=function(){--this.parent.ref||this.parent.finalize()},h=Fn(g,o,d,h),g.ref===0&&g.finalize(),h}function Zn(){return bt.id||(bt.id=++dd),++bt.awaits,bt.echoes+=at,bt.id}function Tn(){return!!bt.awaits&&(--bt.awaits==0&&(bt.id=0),bt.echoes=bt.awaits*at,!0)}function Gr(o){return bt.echoes&&o&&o.constructor===_e?(Zn(),o.then(function(l){return Tn(),l},function(l){return Tn(),dt(l)})):o}function hd(){var o=Wr[Wr.length-1];Wr.pop(),An(o,!1)}function An(o,l){var d,h=re;(l?!bt.echoes||Kr++&&o===re:!Kr||--Kr&&o===re)||queueMicrotask(l?function(f){++Vr,bt.echoes&&--bt.echoes!=0||(bt.echoes=bt.awaits=bt.id=0),Wr.push(re),An(f,!0)}.bind(null,o):hd),o!==re&&(re=o,h===tt&&(tt.env=Uo()),jt&&(d=tt.env.Promise,l=o.env,(h.global||o.global)&&(Object.defineProperty(s,"Promise",l.PromiseProp),d.all=l.all,d.race=l.race,d.resolve=l.resolve,d.reject=l.reject,l.allSettled&&(d.allSettled=l.allSettled),l.any&&(d.any=l.any))))}function Uo(){var o=s.Promise;return jt?{Promise:o,PromiseProp:Object.getOwnPropertyDescriptor(s,"Promise"),all:o.all,race:o.race,allSettled:o.allSettled,any:o.any,resolve:o.resolve,reject:o.reject}:{}}function Fn(o,l,d,h,f){var g=re;try{return An(o,!0),l(d,h,f)}finally{An(g,!1)}}function Ho(o,l,d,h){return typeof o!="function"?o:function(){var f=re;d&&Zn(),An(l,!0);try{return o.apply(this,arguments)}finally{An(f,!1),h&&queueMicrotask(Tn)}}}function rs(o){Promise===_e&&bt.echoes===0?Kr===0?o():enqueueNativeMicroTask(o):setTimeout(o,0)}(""+Kt).indexOf("[native code]")===-1&&(Zn=Tn=ye);var dt=ie.reject,Mn="￿",vn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",qo="String expected.",er=[],Yr="__dbnames",is="readonly",ss="readwrite";function Bn(o,l){return o?l?function(){return o.apply(this,arguments)&&l.apply(this,arguments)}:o:l}var Wo={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Xr(o){return typeof o!="string"||/\./.test(o)?function(l){return l}:function(l){return l[o]===void 0&&o in l&&delete(l=I(l))[o],l}}function Ko(){throw ae.Type()}function Ie(o,l){try{var d=Vo(o),h=Vo(l);if(d!==h)return d==="Array"?1:h==="Array"?-1:d==="binary"?1:h==="binary"?-1:d==="string"?1:h==="string"?-1:d==="Date"?1:h!=="Date"?NaN:-1;switch(d){case"number":case"Date":case"string":return l<o?1:o<l?-1:0;case"binary":return(function(f,g){for(var v=f.length,C=g.length,T=v<C?v:C,R=0;R<T;++R)if(f[R]!==g[R])return f[R]<g[R]?-1:1;return v===C?0:v<C?-1:1})(Go(o),Go(l));case"Array":return(function(f,g){for(var v=f.length,C=g.length,T=v<C?v:C,R=0;R<T;++R){var z=Ie(f[R],g[R]);if(z!==0)return z}return v===C?0:v<C?-1:1})(o,l)}}catch{}return NaN}function Vo(o){var l=typeof o;return l!="object"?l:ArrayBuffer.isView(o)?"binary":(o=k(o),o==="ArrayBuffer"?"binary":o)}function Go(o){return o instanceof Uint8Array?o:ArrayBuffer.isView(o)?new Uint8Array(o.buffer,o.byteOffset,o.byteLength):new Uint8Array(o)}var Yo=(Xe.prototype._trans=function(o,l,d){var h=this._tx||re.trans,f=this.name,g=Le&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(o==="readonly"?"read":"write"," ").concat(this.name));function v(R,z,E){if(!E.schema[f])throw new ae.NotFound("Table "+f+" not part of transaction");return l(E.idbtrans,E)}var C=Me();try{var T=h&&h.db._novip===this.db._novip?h===re.trans?h._promise(o,v,d):_n(function(){return h._promise(o,v,d)},{trans:h,transless:re.transless||re}):(function R(z,E,F,A){if(z.idbdb&&(z._state.openComplete||re.letThrough||z._vip)){var j=z._createTransaction(E,F,z._dbSchema);try{j.create(),z._state.PR1398_maxLoop=3}catch(L){return L.name===Je.InvalidState&&z.isOpen()&&0<--z._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),z.close({disableAutoOpen:!1}),z.open().then(function(){return R(z,E,F,A)})):dt(L)}return j._promise(E,function(L,O){return _n(function(){return re.trans=j,A(L,O,j)})}).then(function(L){if(E==="readwrite")try{j.idbtrans.commit()}catch{}return E==="readonly"?L:j._completion.then(function(){return L})})}if(z._state.openComplete)return dt(new ae.DatabaseClosed(z._state.dbOpenError));if(!z._state.isBeingOpened){if(!z._state.autoOpen)return dt(new ae.DatabaseClosed);z.open().catch(ye)}return z._state.dbReadyPromise.then(function(){return R(z,E,F,A)})})(this.db,o,[this.name],v);return g&&(T._consoleTask=g,T=T.catch(function(R){return console.trace(R),dt(R)})),T}finally{C&&Ye()}},Xe.prototype.get=function(o,l){var d=this;return o&&o.constructor===Object?this.where(o).first(l):o==null?dt(new ae.Type("Invalid argument to Table.get()")):this._trans("readonly",function(h){return d.core.get({trans:h,key:o}).then(function(f){return d.hook.reading.fire(f)})}).then(l)},Xe.prototype.where=function(o){if(typeof o=="string")return new this.db.WhereClause(this,o);if(c(o))return new this.db.WhereClause(this,"[".concat(o.join("+"),"]"));var l=a(o);if(l.length===1)return this.where(l[0]).equals(o[l[0]]);var d=this.schema.indexes.concat(this.schema.primKey).filter(function(C){if(C.compound&&l.every(function(R){return 0<=C.keyPath.indexOf(R)})){for(var T=0;T<l.length;++T)if(l.indexOf(C.keyPath[T])===-1)return!1;return!0}return!1}).sort(function(C,T){return C.keyPath.length-T.keyPath.length})[0];if(d&&this.db._maxKey!==Mn){var g=d.keyPath.slice(0,l.length);return this.where(g).equals(g.map(function(T){return o[T]}))}!d&&Le&&console.warn("The query ".concat(JSON.stringify(o)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(l.join("+"),"]"));var h=this.schema.idxByName;function f(C,T){return Ie(C,T)===0}var v=l.reduce(function(E,T){var R=E[0],z=E[1],E=h[T],F=o[T];return[R||E,R||!E?Bn(z,E&&E.multi?function(A){return A=Z(A,T),c(A)&&A.some(function(j){return f(F,j)})}:function(A){return f(F,Z(A,T))}):z]},[null,null]),g=v[0],v=v[1];return g?this.where(g.name).equals(o[g.keyPath]).filter(v):d?this.filter(v):this.where(l).equals("")},Xe.prototype.filter=function(o){return this.toCollection().and(o)},Xe.prototype.count=function(o){return this.toCollection().count(o)},Xe.prototype.offset=function(o){return this.toCollection().offset(o)},Xe.prototype.limit=function(o){return this.toCollection().limit(o)},Xe.prototype.each=function(o){return this.toCollection().each(o)},Xe.prototype.toArray=function(o){return this.toCollection().toArray(o)},Xe.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Xe.prototype.orderBy=function(o){return new this.db.Collection(new this.db.WhereClause(this,c(o)?"[".concat(o.join("+"),"]"):o))},Xe.prototype.reverse=function(){return this.toCollection().reverse()},Xe.prototype.mapToClass=function(o){var l,d=this.db,h=this.name;function f(){return l!==null&&l.apply(this,arguments)||this}(this.schema.mappedClass=o).prototype instanceof Ko&&((function(T,R){if(typeof R!="function"&&R!==null)throw new TypeError("Class extends value "+String(R)+" is not a constructor or null");function z(){this.constructor=T}r(T,R),T.prototype=R===null?Object.create(R):(z.prototype=R.prototype,new z)})(f,l=o),Object.defineProperty(f.prototype,"db",{get:function(){return d},enumerable:!1,configurable:!0}),f.prototype.table=function(){return h},o=f);for(var g=new Set,v=o.prototype;v;v=p(v))Object.getOwnPropertyNames(v).forEach(function(T){return g.add(T)});function C(T){if(!T)return T;var R,z=Object.create(o.prototype);for(R in T)if(!g.has(R))try{z[R]=T[R]}catch{}return z}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=C,this.hook("reading",C),o},Xe.prototype.defineClass=function(){return this.mapToClass(function(o){u(this,o)})},Xe.prototype.add=function(o,l){var d=this,h=this.schema.primKey,f=h.auto,g=h.keyPath,v=o;return g&&f&&(v=Xr(g)(o)),this._trans("readwrite",function(C){return d.core.mutate({trans:C,type:"add",keys:l!=null?[l]:null,values:[v]})}).then(function(C){return C.numFailures?ie.reject(C.failures[0]):C.lastResult}).then(function(C){if(g)try{de(o,g,C)}catch{}return C})},Xe.prototype.update=function(o,l){return typeof o!="object"||c(o)?this.where(":id").equals(o).modify(l):(o=Z(o,this.schema.primKey.keyPath),o===void 0?dt(new ae.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(o).modify(l))},Xe.prototype.put=function(o,l){var d=this,h=this.schema.primKey,f=h.auto,g=h.keyPath,v=o;return g&&f&&(v=Xr(g)(o)),this._trans("readwrite",function(C){return d.core.mutate({trans:C,type:"put",values:[v],keys:l!=null?[l]:null})}).then(function(C){return C.numFailures?ie.reject(C.failures[0]):C.lastResult}).then(function(C){if(g)try{de(o,g,C)}catch{}return C})},Xe.prototype.delete=function(o){var l=this;return this._trans("readwrite",function(d){return l.core.mutate({trans:d,type:"delete",keys:[o]})}).then(function(d){return d.numFailures?ie.reject(d.failures[0]):void 0})},Xe.prototype.clear=function(){var o=this;return this._trans("readwrite",function(l){return o.core.mutate({trans:l,type:"deleteRange",range:Wo})}).then(function(l){return l.numFailures?ie.reject(l.failures[0]):void 0})},Xe.prototype.bulkGet=function(o){var l=this;return this._trans("readonly",function(d){return l.core.getMany({keys:o,trans:d}).then(function(h){return h.map(function(f){return l.hook.reading.fire(f)})})})},Xe.prototype.bulkAdd=function(o,l,d){var h=this,f=Array.isArray(l)?l:void 0,g=(d=d||(f?void 0:l))?d.allKeys:void 0;return this._trans("readwrite",function(v){var R=h.schema.primKey,C=R.auto,R=R.keyPath;if(R&&f)throw new ae.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(f&&f.length!==o.length)throw new ae.InvalidArgument("Arguments objects and keys must have the same length");var T=o.length,R=R&&C?o.map(Xr(R)):o;return h.core.mutate({trans:v,type:"add",keys:f,values:R,wantResults:g}).then(function(j){var E=j.numFailures,F=j.results,A=j.lastResult,j=j.failures;if(E===0)return g?F:A;throw new Oe("".concat(h.name,".bulkAdd(): ").concat(E," of ").concat(T," operations failed"),j)})})},Xe.prototype.bulkPut=function(o,l,d){var h=this,f=Array.isArray(l)?l:void 0,g=(d=d||(f?void 0:l))?d.allKeys:void 0;return this._trans("readwrite",function(v){var R=h.schema.primKey,C=R.auto,R=R.keyPath;if(R&&f)throw new ae.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(f&&f.length!==o.length)throw new ae.InvalidArgument("Arguments objects and keys must have the same length");var T=o.length,R=R&&C?o.map(Xr(R)):o;return h.core.mutate({trans:v,type:"put",keys:f,values:R,wantResults:g}).then(function(j){var E=j.numFailures,F=j.results,A=j.lastResult,j=j.failures;if(E===0)return g?F:A;throw new Oe("".concat(h.name,".bulkPut(): ").concat(E," of ").concat(T," operations failed"),j)})})},Xe.prototype.bulkUpdate=function(o){var l=this,d=this.core,h=o.map(function(v){return v.key}),f=o.map(function(v){return v.changes}),g=[];return this._trans("readwrite",function(v){return d.getMany({trans:v,keys:h,cache:"clone"}).then(function(C){var T=[],R=[];o.forEach(function(E,F){var A=E.key,j=E.changes,L=C[F];if(L){for(var O=0,N=Object.keys(j);O<N.length;O++){var U=N[O],H=j[U];if(U===l.schema.primKey.keyPath){if(Ie(H,A)!==0)throw new ae.Constraint("Cannot update primary key in bulkUpdate()")}else de(L,U,H)}g.push(F),T.push(A),R.push(L)}});var z=T.length;return d.mutate({trans:v,type:"put",keys:T,values:R,updates:{keys:h,changeSpecs:f}}).then(function(E){var F=E.numFailures,A=E.failures;if(F===0)return z;for(var j=0,L=Object.keys(A);j<L.length;j++){var O,N=L[j],U=g[Number(N)];U!=null&&(O=A[N],delete A[N],A[U]=O)}throw new Oe("".concat(l.name,".bulkUpdate(): ").concat(F," of ").concat(z," operations failed"),A)})})})},Xe.prototype.bulkDelete=function(o){var l=this,d=o.length;return this._trans("readwrite",function(h){return l.core.mutate({trans:h,type:"delete",keys:o})}).then(function(v){var f=v.numFailures,g=v.lastResult,v=v.failures;if(f===0)return g;throw new Oe("".concat(l.name,".bulkDelete(): ").concat(f," of ").concat(d," operations failed"),v)})},Xe);function Xe(){}function wr(o){function l(v,C){if(C){for(var T=arguments.length,R=new Array(T-1);--T;)R[T-1]=arguments[T];return d[v].subscribe.apply(null,R),o}if(typeof v=="string")return d[v]}var d={};l.addEventType=g;for(var h=1,f=arguments.length;h<f;++h)g(arguments[h]);return l;function g(v,C,T){if(typeof v!="object"){var R;C=C||rt;var z={subscribers:[],fire:T=T||ye,subscribe:function(E){z.subscribers.indexOf(E)===-1&&(z.subscribers.push(E),z.fire=C(z.fire,E))},unsubscribe:function(E){z.subscribers=z.subscribers.filter(function(F){return F!==E}),z.fire=z.subscribers.reduce(C,T)}};return d[v]=l[v]=z}a(R=v).forEach(function(E){var F=R[E];if(c(F))g(E,R[E][0],R[E][1]);else{if(F!=="asap")throw new ae.InvalidArgument("Invalid event config");var A=g(E,ke,function(){for(var j=arguments.length,L=new Array(j);j--;)L[j]=arguments[j];A.subscribers.forEach(function(O){W(function(){O.apply(null,L)})})})}})}}function vr(o,l){return S(l).from({prototype:o}),l}function tr(o,l){return!(o.filter||o.algorithm||o.or)&&(l?o.justLimit:!o.replayFilter)}function os(o,l){o.filter=Bn(o.filter,l)}function as(o,l,d){var h=o.replayFilter;o.replayFilter=h?function(){return Bn(h(),l())}:l,o.justLimit=d&&!h}function Qr(o,l){if(o.isPrimKey)return l.primaryKey;var d=l.getIndexByKeyPath(o.index);if(!d)throw new ae.Schema("KeyPath "+o.index+" on object store "+l.name+" is not indexed");return d}function Xo(o,l,d){var h=Qr(o,l.schema);return l.openCursor({trans:d,values:!o.keysOnly,reverse:o.dir==="prev",unique:!!o.unique,query:{index:h,range:o.range}})}function Jr(o,l,d,h){var f=o.replayFilter?Bn(o.filter,o.replayFilter()):o.filter;if(o.or){var g={},v=function(C,T,R){var z,E;f&&!f(T,R,function(F){return T.stop(F)},function(F){return T.fail(F)})||((E=""+(z=T.primaryKey))=="[object ArrayBuffer]"&&(E=""+new Uint8Array(z)),b(g,E)||(g[E]=!0,l(C,T,R)))};return Promise.all([o.or._iterate(v,d),Qo(Xo(o,h,d),o.algorithm,v,!o.keysOnly&&o.valueMapper)])}return Qo(Xo(o,h,d),Bn(o.algorithm,f),l,!o.keysOnly&&o.valueMapper)}function Qo(o,l,d,h){var f=qe(h?function(g,v,C){return d(h(g),v,C)}:d);return o.then(function(g){if(g)return g.start(function(){var v=function(){return g.continue()};l&&!l(g,function(C){return v=C},function(C){g.stop(C),v=ye},function(C){g.fail(C),v=ye})||f(g.value,g,function(C){return v=C}),v()})})}var xn=Symbol(),xr=(Jo.prototype.execute=function(o){if(this.add!==void 0){var l=this.add;if(c(l))return n(n([],c(o)?o:[],!0),l).sort();if(typeof l=="number")return(Number(o)||0)+l;if(typeof l=="bigint")try{return BigInt(o)+l}catch{return BigInt(0)+l}throw new TypeError("Invalid term ".concat(l))}if(this.remove!==void 0){var d=this.remove;if(c(d))return c(o)?o.filter(function(h){return!d.includes(h)}).sort():[];if(typeof d=="number")return Number(o)-d;if(typeof d=="bigint")try{return BigInt(o)-d}catch{return BigInt(0)-d}throw new TypeError("Invalid subtrahend ".concat(d))}return l=(l=this.replacePrefix)===null||l===void 0?void 0:l[0],l&&typeof o=="string"&&o.startsWith(l)?this.replacePrefix[1]+o.substring(l.length):o},Jo);function Jo(o){Object.assign(this,o)}var fd=(ze.prototype._read=function(o,l){var d=this._ctx;return d.error?d.table._trans(null,dt.bind(null,d.error)):d.table._trans("readonly",o).then(l)},ze.prototype._write=function(o){var l=this._ctx;return l.error?l.table._trans(null,dt.bind(null,l.error)):l.table._trans("readwrite",o,"locked")},ze.prototype._addAlgorithm=function(o){var l=this._ctx;l.algorithm=Bn(l.algorithm,o)},ze.prototype._iterate=function(o,l){return Jr(this._ctx,o,l,this._ctx.table.core)},ze.prototype.clone=function(o){var l=Object.create(this.constructor.prototype),d=Object.create(this._ctx);return o&&u(d,o),l._ctx=d,l},ze.prototype.raw=function(){return this._ctx.valueMapper=null,this},ze.prototype.each=function(o){var l=this._ctx;return this._read(function(d){return Jr(l,o,d,l.table.core)})},ze.prototype.count=function(o){var l=this;return this._read(function(d){var h=l._ctx,f=h.table.core;if(tr(h,!0))return f.count({trans:d,query:{index:Qr(h,f.schema),range:h.range}}).then(function(v){return Math.min(v,h.limit)});var g=0;return Jr(h,function(){return++g,!1},d,f).then(function(){return g})}).then(o)},ze.prototype.sortBy=function(o,l){var d=o.split(".").reverse(),h=d[0],f=d.length-1;function g(T,R){return R?g(T[d[R]],R-1):T[h]}var v=this._ctx.dir==="next"?1:-1;function C(T,R){return Ie(g(T,f),g(R,f))*v}return this.toArray(function(T){return T.sort(C)}).then(l)},ze.prototype.toArray=function(o){var l=this;return this._read(function(d){var h=l._ctx;if(h.dir==="next"&&tr(h,!0)&&0<h.limit){var f=h.valueMapper,g=Qr(h,h.table.core.schema);return h.table.core.query({trans:d,limit:h.limit,values:!0,query:{index:g,range:h.range}}).then(function(C){return C=C.result,f?C.map(f):C})}var v=[];return Jr(h,function(C){return v.push(C)},d,h.table.core).then(function(){return v})},o)},ze.prototype.offset=function(o){var l=this._ctx;return o<=0||(l.offset+=o,tr(l)?as(l,function(){var d=o;return function(h,f){return d===0||(d===1?--d:f(function(){h.advance(d),d=0}),!1)}}):as(l,function(){var d=o;return function(){return--d<0}})),this},ze.prototype.limit=function(o){return this._ctx.limit=Math.min(this._ctx.limit,o),as(this._ctx,function(){var l=o;return function(d,h,f){return--l<=0&&h(f),0<=l}},!0),this},ze.prototype.until=function(o,l){return os(this._ctx,function(d,h,f){return!o(d.value)||(h(f),l)}),this},ze.prototype.first=function(o){return this.limit(1).toArray(function(l){return l[0]}).then(o)},ze.prototype.last=function(o){return this.reverse().first(o)},ze.prototype.filter=function(o){var l;return os(this._ctx,function(d){return o(d.value)}),(l=this._ctx).isMatch=Bn(l.isMatch,o),this},ze.prototype.and=function(o){return this.filter(o)},ze.prototype.or=function(o){return new this.db.WhereClause(this._ctx.table,o,this)},ze.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},ze.prototype.desc=function(){return this.reverse()},ze.prototype.eachKey=function(o){var l=this._ctx;return l.keysOnly=!l.isMatch,this.each(function(d,h){o(h.key,h)})},ze.prototype.eachUniqueKey=function(o){return this._ctx.unique="unique",this.eachKey(o)},ze.prototype.eachPrimaryKey=function(o){var l=this._ctx;return l.keysOnly=!l.isMatch,this.each(function(d,h){o(h.primaryKey,h)})},ze.prototype.keys=function(o){var l=this._ctx;l.keysOnly=!l.isMatch;var d=[];return this.each(function(h,f){d.push(f.key)}).then(function(){return d}).then(o)},ze.prototype.primaryKeys=function(o){var l=this._ctx;if(l.dir==="next"&&tr(l,!0)&&0<l.limit)return this._read(function(h){var f=Qr(l,l.table.core.schema);return l.table.core.query({trans:h,values:!1,limit:l.limit,query:{index:f,range:l.range}})}).then(function(h){return h.result}).then(o);l.keysOnly=!l.isMatch;var d=[];return this.each(function(h,f){d.push(f.primaryKey)}).then(function(){return d}).then(o)},ze.prototype.uniqueKeys=function(o){return this._ctx.unique="unique",this.keys(o)},ze.prototype.firstKey=function(o){return this.limit(1).keys(function(l){return l[0]}).then(o)},ze.prototype.lastKey=function(o){return this.reverse().firstKey(o)},ze.prototype.distinct=function(){var o=this._ctx,o=o.index&&o.table.schema.idxByName[o.index];if(!o||!o.multi)return this;var l={};return os(this._ctx,function(f){var h=f.primaryKey.toString(),f=b(l,h);return l[h]=!0,!f}),this},ze.prototype.modify=function(o){var l=this,d=this._ctx;return this._write(function(h){var f,g,v;v=typeof o=="function"?o:(f=a(o),g=f.length,function(O){for(var N=!1,U=0;U<g;++U){var H=f[U],V=o[H],ee=Z(O,H);V instanceof xr?(de(O,H,V.execute(ee)),N=!0):ee!==V&&(de(O,H,V),N=!0)}return N});var C=d.table.core,E=C.schema.primaryKey,T=E.outbound,R=E.extractKey,z=200,E=l.db._options.modifyChunkSize;E&&(z=typeof E=="object"?E[C.name]||E["*"]||200:E);function F(O,H){var U=H.failures,H=H.numFailures;j+=O-H;for(var V=0,ee=a(U);V<ee.length;V++){var oe=ee[V];A.push(U[oe])}}var A=[],j=0,L=[];return l.clone().primaryKeys().then(function(O){function N(H){var V=Math.min(z,O.length-H);return C.getMany({trans:h,keys:O.slice(H,H+V),cache:"immutable"}).then(function(ee){for(var oe=[],te=[],ne=T?[]:null,le=[],se=0;se<V;++se){var ue=ee[se],$e={value:I(ue),primKey:O[H+se]};v.call($e,$e.value,$e)!==!1&&($e.value==null?le.push(O[H+se]):T||Ie(R(ue),R($e.value))===0?(te.push($e.value),T&&ne.push(O[H+se])):(le.push(O[H+se]),oe.push($e.value)))}return Promise.resolve(0<oe.length&&C.mutate({trans:h,type:"add",values:oe}).then(function(Ce){for(var Ee in Ce.failures)le.splice(parseInt(Ee),1);F(oe.length,Ce)})).then(function(){return(0<te.length||U&&typeof o=="object")&&C.mutate({trans:h,type:"put",keys:ne,values:te,criteria:U,changeSpec:typeof o!="function"&&o,isAdditionalChunk:0<H}).then(function(Ce){return F(te.length,Ce)})}).then(function(){return(0<le.length||U&&o===ls)&&C.mutate({trans:h,type:"delete",keys:le,criteria:U,isAdditionalChunk:0<H}).then(function(Ce){return F(le.length,Ce)})}).then(function(){return O.length>H+V&&N(H+z)})})}var U=tr(d)&&d.limit===1/0&&(typeof o!="function"||o===ls)&&{index:d.index,range:d.range};return N(0).then(function(){if(0<A.length)throw new Se("Error modifying one or more objects",A,j,L);return O.length})})})},ze.prototype.delete=function(){var o=this._ctx,l=o.range;return tr(o)&&(o.isPrimKey||l.type===3)?this._write(function(d){var h=o.table.core.schema.primaryKey,f=l;return o.table.core.count({trans:d,query:{index:h,range:f}}).then(function(g){return o.table.core.mutate({trans:d,type:"deleteRange",range:f}).then(function(v){var C=v.failures;if(v.lastResult,v.results,v=v.numFailures,v)throw new Se("Could not delete some values",Object.keys(C).map(function(T){return C[T]}),g-v);return g-v})})}):this.modify(ls)},ze);function ze(){}var ls=function(o,l){return l.value=null};function pd(o,l){return o<l?-1:o===l?0:1}function md(o,l){return l<o?-1:o===l?0:1}function zt(o,l,d){return o=o instanceof ea?new o.Collection(o):o,o._ctx.error=new(d||TypeError)(l),o}function nr(o){return new o.Collection(o,function(){return Zo("")}).limit(0)}function Zr(o,l,d,h){var f,g,v,C,T,R,z,E=d.length;if(!d.every(function(j){return typeof j=="string"}))return zt(o,qo);function F(j){f=j==="next"?function(O){return O.toUpperCase()}:function(O){return O.toLowerCase()},g=j==="next"?function(O){return O.toLowerCase()}:function(O){return O.toUpperCase()},v=j==="next"?pd:md;var L=d.map(function(O){return{lower:g(O),upper:f(O)}}).sort(function(O,N){return v(O.lower,N.lower)});C=L.map(function(O){return O.upper}),T=L.map(function(O){return O.lower}),z=(R=j)==="next"?"":h}F("next"),o=new o.Collection(o,function(){return In(C[0],T[E-1]+h)}),o._ondirectionchange=function(j){F(j)};var A=0;return o._addAlgorithm(function(j,L,O){var N=j.key;if(typeof N!="string")return!1;var U=g(N);if(l(U,T,A))return!0;for(var H=null,V=A;V<E;++V){var ee=(function(oe,te,ne,le,se,ue){for(var $e=Math.min(oe.length,le.length),Ce=-1,Ee=0;Ee<$e;++Ee){var Lt=te[Ee];if(Lt!==le[Ee])return se(oe[Ee],ne[Ee])<0?oe.substr(0,Ee)+ne[Ee]+ne.substr(Ee+1):se(oe[Ee],le[Ee])<0?oe.substr(0,Ee)+le[Ee]+ne.substr(Ee+1):0<=Ce?oe.substr(0,Ce)+te[Ce]+ne.substr(Ce+1):null;se(oe[Ee],Lt)<0&&(Ce=Ee)}return $e<le.length&&ue==="next"?oe+ne.substr(oe.length):$e<oe.length&&ue==="prev"?oe.substr(0,ne.length):Ce<0?null:oe.substr(0,Ce)+le[Ce]+ne.substr(Ce+1)})(N,U,C[V],T[V],v,R);ee===null&&H===null?A=V+1:(H===null||0<v(H,ee))&&(H=ee)}return L(H!==null?function(){j.continue(H+z)}:O),!1}),o}function In(o,l,d,h){return{type:2,lower:o,upper:l,lowerOpen:d,upperOpen:h}}function Zo(o){return{type:1,lower:o,upper:o}}var ea=(Object.defineProperty(yt.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),yt.prototype.between=function(o,l,d,h){d=d!==!1,h=h===!0;try{return 0<this._cmp(o,l)||this._cmp(o,l)===0&&(d||h)&&(!d||!h)?nr(this):new this.Collection(this,function(){return In(o,l,!d,!h)})}catch{return zt(this,vn)}},yt.prototype.equals=function(o){return o==null?zt(this,vn):new this.Collection(this,function(){return Zo(o)})},yt.prototype.above=function(o){return o==null?zt(this,vn):new this.Collection(this,function(){return In(o,void 0,!0)})},yt.prototype.aboveOrEqual=function(o){return o==null?zt(this,vn):new this.Collection(this,function(){return In(o,void 0,!1)})},yt.prototype.below=function(o){return o==null?zt(this,vn):new this.Collection(this,function(){return In(void 0,o,!1,!0)})},yt.prototype.belowOrEqual=function(o){return o==null?zt(this,vn):new this.Collection(this,function(){return In(void 0,o)})},yt.prototype.startsWith=function(o){return typeof o!="string"?zt(this,qo):this.between(o,o+Mn,!0,!0)},yt.prototype.startsWithIgnoreCase=function(o){return o===""?this.startsWith(o):Zr(this,function(l,d){return l.indexOf(d[0])===0},[o],Mn)},yt.prototype.equalsIgnoreCase=function(o){return Zr(this,function(l,d){return l===d[0]},[o],"")},yt.prototype.anyOfIgnoreCase=function(){var o=Fe.apply(Y,arguments);return o.length===0?nr(this):Zr(this,function(l,d){return d.indexOf(l)!==-1},o,"")},yt.prototype.startsWithAnyOfIgnoreCase=function(){var o=Fe.apply(Y,arguments);return o.length===0?nr(this):Zr(this,function(l,d){return d.some(function(h){return l.indexOf(h)===0})},o,Mn)},yt.prototype.anyOf=function(){var o=this,l=Fe.apply(Y,arguments),d=this._cmp;try{l.sort(d)}catch{return zt(this,vn)}if(l.length===0)return nr(this);var h=new this.Collection(this,function(){return In(l[0],l[l.length-1])});h._ondirectionchange=function(g){d=g==="next"?o._ascending:o._descending,l.sort(d)};var f=0;return h._addAlgorithm(function(g,v,C){for(var T=g.key;0<d(T,l[f]);)if(++f===l.length)return v(C),!1;return d(T,l[f])===0||(v(function(){g.continue(l[f])}),!1)}),h},yt.prototype.notEqual=function(o){return this.inAnyRange([[-1/0,o],[o,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},yt.prototype.noneOf=function(){var o=Fe.apply(Y,arguments);if(o.length===0)return new this.Collection(this);try{o.sort(this._ascending)}catch{return zt(this,vn)}var l=o.reduce(function(d,h){return d?d.concat([[d[d.length-1][1],h]]):[[-1/0,h]]},null);return l.push([o[o.length-1],this.db._maxKey]),this.inAnyRange(l,{includeLowers:!1,includeUppers:!1})},yt.prototype.inAnyRange=function(N,l){var d=this,h=this._cmp,f=this._ascending,g=this._descending,v=this._min,C=this._max;if(N.length===0)return nr(this);if(!N.every(function(U){return U[0]!==void 0&&U[1]!==void 0&&f(U[0],U[1])<=0}))return zt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ae.InvalidArgument);var T=!l||l.includeLowers!==!1,R=l&&l.includeUppers===!0,z,E=f;function F(U,H){return E(U[0],H[0])}try{(z=N.reduce(function(U,H){for(var V=0,ee=U.length;V<ee;++V){var oe=U[V];if(h(H[0],oe[1])<0&&0<h(H[1],oe[0])){oe[0]=v(oe[0],H[0]),oe[1]=C(oe[1],H[1]);break}}return V===ee&&U.push(H),U},[])).sort(F)}catch{return zt(this,vn)}var A=0,j=R?function(U){return 0<f(U,z[A][1])}:function(U){return 0<=f(U,z[A][1])},L=T?function(U){return 0<g(U,z[A][0])}:function(U){return 0<=g(U,z[A][0])},O=j,N=new this.Collection(this,function(){return In(z[0][0],z[z.length-1][1],!T,!R)});return N._ondirectionchange=function(U){E=U==="next"?(O=j,f):(O=L,g),z.sort(F)},N._addAlgorithm(function(U,H,V){for(var ee,oe=U.key;O(oe);)if(++A===z.length)return H(V),!1;return!j(ee=oe)&&!L(ee)||(d._cmp(oe,z[A][1])===0||d._cmp(oe,z[A][0])===0||H(function(){E===f?U.continue(z[A][0]):U.continue(z[A][1])}),!1)}),N},yt.prototype.startsWithAnyOf=function(){var o=Fe.apply(Y,arguments);return o.every(function(l){return typeof l=="string"})?o.length===0?nr(this):this.inAnyRange(o.map(function(l){return[l,l+Mn]})):zt(this,"startsWithAnyOf() only works with strings")},yt);function yt(){}function hn(o){return qe(function(l){return $r(l),o(l.target.error),!1})}function $r(o){o.stopPropagation&&o.stopPropagation(),o.preventDefault&&o.preventDefault()}var kr="storagemutated",cs="x-storagemutated-1",Pn=wr(null,kr),gd=(fn.prototype._lock=function(){return J(!re.global),++this._reculock,this._reculock!==1||re.global||(re.lockOwnerFor=this),this},fn.prototype._unlock=function(){if(J(!re.global),--this._reculock==0)for(re.global||(re.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var o=this._blockedFuncs.shift();try{Fn(o[1],o[0])}catch{}}return this},fn.prototype._locked=function(){return this._reculock&&re.lockOwnerFor!==this},fn.prototype.create=function(o){var l=this;if(!this.mode)return this;var d=this.db.idbdb,h=this.db._state.dbOpenError;if(J(!this.idbtrans),!o&&!d)switch(h&&h.name){case"DatabaseClosedError":throw new ae.DatabaseClosed(h);case"MissingAPIError":throw new ae.MissingAPI(h.message,h);default:throw new ae.OpenFailed(h)}if(!this.active)throw new ae.TransactionInactive;return J(this._completion._state===null),(o=this.idbtrans=o||(this.db.core||d).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=qe(function(f){$r(f),l._reject(o.error)}),o.onabort=qe(function(f){$r(f),l.active&&l._reject(new ae.Abort(o.error)),l.active=!1,l.on("abort").fire(f)}),o.oncomplete=qe(function(){l.active=!1,l._resolve(),"mutatedParts"in o&&Pn.storagemutated.fire(o.mutatedParts)}),this},fn.prototype._promise=function(o,l,d){var h=this;if(o==="readwrite"&&this.mode!=="readwrite")return dt(new ae.ReadOnly("Transaction is readonly"));if(!this.active)return dt(new ae.TransactionInactive);if(this._locked())return new ie(function(g,v){h._blockedFuncs.push([function(){h._promise(o,l,d).then(g,v)},re])});if(d)return _n(function(){var g=new ie(function(v,C){h._lock();var T=l(v,C,h);T&&T.then&&T.then(v,C)});return g.finally(function(){return h._unlock()}),g._lib=!0,g});var f=new ie(function(g,v){var C=l(g,v,h);C&&C.then&&C.then(g,v)});return f._lib=!0,f},fn.prototype._root=function(){return this.parent?this.parent._root():this},fn.prototype.waitFor=function(o){var l,d=this._root(),h=ie.resolve(o);d._waitingFor?d._waitingFor=d._waitingFor.then(function(){return h}):(d._waitingFor=h,d._waitingQueue=[],l=d.idbtrans.objectStore(d.storeNames[0]),(function g(){for(++d._spinCount;d._waitingQueue.length;)d._waitingQueue.shift()();d._waitingFor&&(l.get(-1/0).onsuccess=g)})());var f=d._waitingFor;return new ie(function(g,v){h.then(function(C){return d._waitingQueue.push(qe(g.bind(null,C)))},function(C){return d._waitingQueue.push(qe(v.bind(null,C)))}).finally(function(){d._waitingFor===f&&(d._waitingFor=null)})})},fn.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ae.Abort))},fn.prototype.table=function(o){var l=this._memoizedTables||(this._memoizedTables={});if(b(l,o))return l[o];var d=this.schema[o];if(!d)throw new ae.NotFound("Table "+o+" not part of transaction");return d=new this.db.Table(o,d,this),d.core=this.db.core.table(o),l[o]=d},fn);function fn(){}function ds(o,l,d,h,f,g,v){return{name:o,keyPath:l,unique:d,multi:h,auto:f,compound:g,src:(d&&!v?"&":"")+(h?"*":"")+(f?"++":"")+ta(l)}}function ta(o){return typeof o=="string"?o:o?"["+[].join.call(o,"+")+"]":""}function us(o,l,d){return{name:o,primKey:l,indexes:d,mappedClass:null,idxByName:(h=function(f){return[f.name,f]},d.reduce(function(f,g,v){return v=h(g,v),v&&(f[v[0]]=v[1]),f},{}))};var h}var Cr=function(o){try{return o.only([[]]),Cr=function(){return[[]]},[[]]}catch{return Cr=function(){return Mn},Mn}};function hs(o){return o==null?function(){}:typeof o=="string"?(l=o).split(".").length===1?function(d){return d[l]}:function(d){return Z(d,l)}:function(d){return Z(d,o)};var l}function na(o){return[].slice.call(o)}var bd=0;function Er(o){return o==null?":id":typeof o=="string"?o:"[".concat(o.join("+"),"]")}function yd(o,l,T){function h(O){if(O.type===3)return null;if(O.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var A=O.lower,j=O.upper,L=O.lowerOpen,O=O.upperOpen;return A===void 0?j===void 0?null:l.upperBound(j,!!O):j===void 0?l.lowerBound(A,!!L):l.bound(A,j,!!L,!!O)}function f(F){var A,j=F.name;return{name:j,schema:F,mutate:function(L){var O=L.trans,N=L.type,U=L.keys,H=L.values,V=L.range;return new Promise(function(ee,oe){ee=qe(ee);var te=O.objectStore(j),ne=te.keyPath==null,le=N==="put"||N==="add";if(!le&&N!=="delete"&&N!=="deleteRange")throw new Error("Invalid operation type: "+N);var se,ue=(U||H||{length:1}).length;if(U&&H&&U.length!==H.length)throw new Error("Given keys array must have same length as given values array.");if(ue===0)return ee({numFailures:0,failures:{},results:[],lastResult:void 0});function $e(St){++Lt,$r(St)}var Ce=[],Ee=[],Lt=0;if(N==="deleteRange"){if(V.type===4)return ee({numFailures:Lt,failures:Ee,results:[],lastResult:void 0});V.type===3?Ce.push(se=te.clear()):Ce.push(se=te.delete(h(V)))}else{var ne=le?ne?[H,U]:[H,null]:[U,null],xe=ne[0],kt=ne[1];if(le)for(var Ct=0;Ct<ue;++Ct)Ce.push(se=kt&&kt[Ct]!==void 0?te[N](xe[Ct],kt[Ct]):te[N](xe[Ct])),se.onerror=$e;else for(Ct=0;Ct<ue;++Ct)Ce.push(se=te[N](xe[Ct])),se.onerror=$e}function hi(St){St=St.target.result,Ce.forEach(function(Hn,Is){return Hn.error!=null&&(Ee[Is]=Hn.error)}),ee({numFailures:Lt,failures:Ee,results:N==="delete"?U:Ce.map(function(Hn){return Hn.result}),lastResult:St})}se.onerror=function(St){$e(St),hi(St)},se.onsuccess=hi})},getMany:function(L){var O=L.trans,N=L.keys;return new Promise(function(U,H){U=qe(U);for(var V,ee=O.objectStore(j),oe=N.length,te=new Array(oe),ne=0,le=0,se=function(Ce){Ce=Ce.target,te[Ce._pos]=Ce.result,++le===ne&&U(te)},ue=hn(H),$e=0;$e<oe;++$e)N[$e]!=null&&((V=ee.get(N[$e]))._pos=$e,V.onsuccess=se,V.onerror=ue,++ne);ne===0&&U(te)})},get:function(L){var O=L.trans,N=L.key;return new Promise(function(U,H){U=qe(U);var V=O.objectStore(j).get(N);V.onsuccess=function(ee){return U(ee.target.result)},V.onerror=hn(H)})},query:(A=R,function(L){return new Promise(function(O,N){O=qe(O);var U,H,V,ne=L.trans,ee=L.values,oe=L.limit,se=L.query,te=oe===1/0?void 0:oe,le=se.index,se=se.range,ne=ne.objectStore(j),le=le.isPrimaryKey?ne:ne.index(le.name),se=h(se);if(oe===0)return O({result:[]});A?((te=ee?le.getAll(se,te):le.getAllKeys(se,te)).onsuccess=function(ue){return O({result:ue.target.result})},te.onerror=hn(N)):(U=0,H=!ee&&"openKeyCursor"in le?le.openKeyCursor(se):le.openCursor(se),V=[],H.onsuccess=function(ue){var $e=H.result;return $e?(V.push(ee?$e.value:$e.primaryKey),++U===oe?O({result:V}):void $e.continue()):O({result:V})},H.onerror=hn(N))})}),openCursor:function(L){var O=L.trans,N=L.values,U=L.query,H=L.reverse,V=L.unique;return new Promise(function(ee,oe){ee=qe(ee);var le=U.index,te=U.range,ne=O.objectStore(j),ne=le.isPrimaryKey?ne:ne.index(le.name),le=H?V?"prevunique":"prev":V?"nextunique":"next",se=!N&&"openKeyCursor"in ne?ne.openKeyCursor(h(te),le):ne.openCursor(h(te),le);se.onerror=hn(oe),se.onsuccess=qe(function(ue){var $e,Ce,Ee,Lt,xe=se.result;xe?(xe.___id=++bd,xe.done=!1,$e=xe.continue.bind(xe),Ce=(Ce=xe.continuePrimaryKey)&&Ce.bind(xe),Ee=xe.advance.bind(xe),Lt=function(){throw new Error("Cursor not stopped")},xe.trans=O,xe.stop=xe.continue=xe.continuePrimaryKey=xe.advance=function(){throw new Error("Cursor not started")},xe.fail=qe(oe),xe.next=function(){var kt=this,Ct=1;return this.start(function(){return Ct--?kt.continue():kt.stop()}).then(function(){return kt})},xe.start=function(kt){function Ct(){if(se.result)try{kt()}catch(St){xe.fail(St)}else xe.done=!0,xe.start=function(){throw new Error("Cursor behind last entry")},xe.stop()}var hi=new Promise(function(St,Hn){St=qe(St),se.onerror=hn(Hn),xe.fail=Hn,xe.stop=function(Is){xe.stop=xe.continue=xe.continuePrimaryKey=xe.advance=Lt,St(Is)}});return se.onsuccess=qe(function(St){se.onsuccess=Ct,Ct()}),xe.continue=$e,xe.continuePrimaryKey=Ce,xe.advance=Ee,Ct(),hi},ee(xe)):ee(null)},oe)})},count:function(L){var O=L.query,N=L.trans,U=O.index,H=O.range;return new Promise(function(V,ee){var oe=N.objectStore(j),te=U.isPrimaryKey?oe:oe.index(U.name),oe=h(H),te=oe?te.count(oe):te.count();te.onsuccess=qe(function(ne){return V(ne.target.result)}),te.onerror=hn(ee)})}}}var g,v,C,z=(v=T,C=na((g=o).objectStoreNames),{schema:{name:g.name,tables:C.map(function(F){return v.objectStore(F)}).map(function(F){var A=F.keyPath,O=F.autoIncrement,j=c(A),L={},O={name:F.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:A==null,compound:j,keyPath:A,autoIncrement:O,unique:!0,extractKey:hs(A)},indexes:na(F.indexNames).map(function(N){return F.index(N)}).map(function(V){var U=V.name,H=V.unique,ee=V.multiEntry,V=V.keyPath,ee={name:U,compound:c(V),keyPath:V,unique:H,multiEntry:ee,extractKey:hs(V)};return L[Er(V)]=ee}),getIndexByKeyPath:function(N){return L[Er(N)]}};return L[":id"]=O.primaryKey,A!=null&&(L[Er(A)]=O.primaryKey),O})},hasGetAll:0<C.length&&"getAll"in v.objectStore(C[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),T=z.schema,R=z.hasGetAll,z=T.tables.map(f),E={};return z.forEach(function(F){return E[F.name]=F}),{stack:"dbcore",transaction:o.transaction.bind(o),table:function(F){if(!E[F])throw new Error("Table '".concat(F,"' not found"));return E[F]},MIN_KEY:-1/0,MAX_KEY:Cr(l),schema:T}}function wd(o,l,d,h){var f=d.IDBKeyRange;return d.indexedDB,{dbcore:(h=yd(l,f,h),o.dbcore.reduce(function(g,v){return v=v.create,i(i({},g),v(g))},h))}}function ei(o,h){var d=h.db,h=wd(o._middlewares,d,o._deps,h);o.core=h.dbcore,o.tables.forEach(function(f){var g=f.name;o.core.schema.tables.some(function(v){return v.name===g})&&(f.core=o.core.table(g),o[g]instanceof o.Table&&(o[g].core=f.core))})}function ti(o,l,d,h){d.forEach(function(f){var g=h[f];l.forEach(function(v){var C=(function T(R,z){return B(R,z)||(R=p(R))&&T(R,z)})(v,f);(!C||"value"in C&&C.value===void 0)&&(v===o.Transaction.prototype||v instanceof o.Transaction?P(v,f,{get:function(){return this.table(f)},set:function(T){D(this,f,{value:T,writable:!0,configurable:!0,enumerable:!0})}}):v[f]=new o.Table(f,g))})})}function fs(o,l){l.forEach(function(d){for(var h in d)d[h]instanceof o.Table&&delete d[h]})}function vd(o,l){return o._cfg.version-l._cfg.version}function xd(o,l,d,h){var f=o._dbSchema;d.objectStoreNames.contains("$meta")&&!f.$meta&&(f.$meta=us("$meta",ia("")[0],[]),o._storeNames.push("$meta"));var g=o._createTransaction("readwrite",o._storeNames,f);g.create(d),g._completion.catch(h);var v=g._reject.bind(g),C=re.transless||re;_n(function(){return re.trans=g,re.transless=C,l!==0?(ei(o,d),R=l,((T=g).storeNames.includes("$meta")?T.table("$meta").get("version").then(function(z){return z??R}):ie.resolve(R)).then(function(z){return F=z,A=g,j=d,L=[],z=(E=o)._versions,O=E._dbSchema=ri(0,E.idbdb,j),(z=z.filter(function(N){return N._cfg.version>=F})).length!==0?(z.forEach(function(N){L.push(function(){var U=O,H=N._cfg.dbschema;ii(E,U,j),ii(E,H,j),O=E._dbSchema=H;var V=ps(U,H);V.add.forEach(function(le){ms(j,le[0],le[1].primKey,le[1].indexes)}),V.change.forEach(function(le){if(le.recreate)throw new ae.Upgrade("Not yet support for changing primary key");var se=j.objectStore(le.name);le.add.forEach(function(ue){return ni(se,ue)}),le.change.forEach(function(ue){se.deleteIndex(ue.name),ni(se,ue)}),le.del.forEach(function(ue){return se.deleteIndex(ue)})});var ee=N._cfg.contentUpgrade;if(ee&&N._cfg.version>F){ei(E,j),A._memoizedTables={};var oe=we(H);V.del.forEach(function(le){oe[le]=U[le]}),fs(E,[E.Transaction.prototype]),ti(E,[E.Transaction.prototype],a(oe),oe),A.schema=oe;var te,ne=st(ee);return ne&&Zn(),V=ie.follow(function(){var le;(te=ee(A))&&ne&&(le=Tn.bind(null,null),te.then(le,le))}),te&&typeof te.then=="function"?ie.resolve(te):V.then(function(){return te})}}),L.push(function(U){var H,V,ee=N._cfg.dbschema;H=ee,V=U,[].slice.call(V.db.objectStoreNames).forEach(function(oe){return H[oe]==null&&V.db.deleteObjectStore(oe)}),fs(E,[E.Transaction.prototype]),ti(E,[E.Transaction.prototype],E._storeNames,E._dbSchema),A.schema=E._dbSchema}),L.push(function(U){E.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(E.idbdb.version/10)===N._cfg.version?(E.idbdb.deleteObjectStore("$meta"),delete E._dbSchema.$meta,E._storeNames=E._storeNames.filter(function(H){return H!=="$meta"})):U.objectStore("$meta").put(N._cfg.version,"version"))})}),(function N(){return L.length?ie.resolve(L.shift()(A.idbtrans)).then(N):ie.resolve()})().then(function(){ra(O,j)})):ie.resolve();var E,F,A,j,L,O}).catch(v)):(a(f).forEach(function(z){ms(d,z,f[z].primKey,f[z].indexes)}),ei(o,d),void ie.follow(function(){return o.on.populate.fire(g)}).catch(v));var T,R})}function $d(o,l){ra(o._dbSchema,l),l.db.version%10!=0||l.objectStoreNames.contains("$meta")||l.db.createObjectStore("$meta").add(Math.ceil(l.db.version/10-1),"version");var d=ri(0,o.idbdb,l);ii(o,o._dbSchema,l);for(var h=0,f=ps(d,o._dbSchema).change;h<f.length;h++){var g=(function(v){if(v.change.length||v.recreate)return console.warn("Unable to patch indexes of table ".concat(v.name," because it has changes on the type of index or primary key.")),{value:void 0};var C=l.objectStore(v.name);v.add.forEach(function(T){Le&&console.debug("Dexie upgrade patch: Creating missing index ".concat(v.name,".").concat(T.src)),ni(C,T)})})(f[h]);if(typeof g=="object")return g.value}}function ps(o,l){var d,h={del:[],add:[],change:[]};for(d in o)l[d]||h.del.push(d);for(d in l){var f=o[d],g=l[d];if(f){var v={name:d,def:g,recreate:!1,del:[],add:[],change:[]};if(""+(f.primKey.keyPath||"")!=""+(g.primKey.keyPath||"")||f.primKey.auto!==g.primKey.auto)v.recreate=!0,h.change.push(v);else{var C=f.idxByName,T=g.idxByName,R=void 0;for(R in C)T[R]||v.del.push(R);for(R in T){var z=C[R],E=T[R];z?z.src!==E.src&&v.change.push(E):v.add.push(E)}(0<v.del.length||0<v.add.length||0<v.change.length)&&h.change.push(v)}}else h.add.push([d,g])}return h}function ms(o,l,d,h){var f=o.db.createObjectStore(l,d.keyPath?{keyPath:d.keyPath,autoIncrement:d.auto}:{autoIncrement:d.auto});return h.forEach(function(g){return ni(f,g)}),f}function ra(o,l){a(o).forEach(function(d){l.db.objectStoreNames.contains(d)||(Le&&console.debug("Dexie: Creating missing table",d),ms(l,d,o[d].primKey,o[d].indexes))})}function ni(o,l){o.createIndex(l.name,l.keyPath,{unique:l.unique,multiEntry:l.multi})}function ri(o,l,d){var h={};return Q(l.objectStoreNames,0).forEach(function(f){for(var g=d.objectStore(f),v=ds(ta(R=g.keyPath),R||"",!0,!1,!!g.autoIncrement,R&&typeof R!="string",!0),C=[],T=0;T<g.indexNames.length;++T){var z=g.index(g.indexNames[T]),R=z.keyPath,z=ds(z.name,R,!!z.unique,!!z.multiEntry,!1,R&&typeof R!="string",!1);C.push(z)}h[f]=us(f,v,C)}),h}function ii(o,l,d){for(var h=d.db.objectStoreNames,f=0;f<h.length;++f){var g=h[f],v=d.objectStore(g);o._hasGetAll="getAll"in v;for(var C=0;C<v.indexNames.length;++C){var T=v.indexNames[C],R=v.index(T).keyPath,z=typeof R=="string"?R:"["+Q(R).join("+")+"]";!l[g]||(R=l[g].idxByName[z])&&(R.name=T,delete l[g].idxByName[z],l[g].idxByName[T]=R)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&s.WorkerGlobalScope&&s instanceof s.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(o._hasGetAll=!1)}function ia(o){return o.split(",").map(function(l,d){var h=(l=l.trim()).replace(/([&*]|\+\+)/g,""),f=/^\[/.test(h)?h.match(/^\[(.*)\]$/)[1].split("+"):h;return ds(h,f||null,/\&/.test(l),/\*/.test(l),/\+\+/.test(l),c(f),d===0)})}var kd=(si.prototype._parseStoresSpec=function(o,l){a(o).forEach(function(d){if(o[d]!==null){var h=ia(o[d]),f=h.shift();if(f.unique=!0,f.multi)throw new ae.Schema("Primary key cannot be multi-valued");h.forEach(function(g){if(g.auto)throw new ae.Schema("Only primary key can be marked as autoIncrement (++)");if(!g.keyPath)throw new ae.Schema("Index must have a name and cannot be an empty string")}),l[d]=us(d,f,h)}})},si.prototype.stores=function(d){var l=this.db;this._cfg.storesSource=this._cfg.storesSource?u(this._cfg.storesSource,d):d;var d=l._versions,h={},f={};return d.forEach(function(g){u(h,g._cfg.storesSource),f=g._cfg.dbschema={},g._parseStoresSpec(h,f)}),l._dbSchema=f,fs(l,[l._allTables,l,l.Transaction.prototype]),ti(l,[l._allTables,l,l.Transaction.prototype,this._cfg.tables],a(f),f),l._storeNames=a(f),this},si.prototype.upgrade=function(o){return this._cfg.contentUpgrade=Ot(this._cfg.contentUpgrade||ye,o),this},si);function si(){}function gs(o,l){var d=o._dbNamesDB;return d||(d=o._dbNamesDB=new $n(Yr,{addons:[],indexedDB:o,IDBKeyRange:l})).version(1).stores({dbnames:"name"}),d.table("dbnames")}function bs(o){return o&&typeof o.databases=="function"}function ys(o){return _n(function(){return re.letThrough=!0,o()})}function ws(o){return!("from"in o)}var $t=function(o,l){if(!this){var d=new $t;return o&&"d"in o&&u(d,o),d}u(this,arguments.length?{d:1,from:o,to:1<arguments.length?l:o}:{d:0})};function Sr(o,l,d){var h=Ie(l,d);if(!isNaN(h)){if(0<h)throw RangeError();if(ws(o))return u(o,{from:l,to:d,d:1});var f=o.l,h=o.r;if(Ie(d,o.from)<0)return f?Sr(f,l,d):o.l={from:l,to:d,d:1,l:null,r:null},oa(o);if(0<Ie(l,o.to))return h?Sr(h,l,d):o.r={from:l,to:d,d:1,l:null,r:null},oa(o);Ie(l,o.from)<0&&(o.from=l,o.l=null,o.d=h?h.d+1:1),0<Ie(d,o.to)&&(o.to=d,o.r=null,o.d=o.l?o.l.d+1:1),d=!o.r,f&&!o.l&&_r(o,f),h&&d&&_r(o,h)}}function _r(o,l){ws(l)||(function d(h,T){var g=T.from,v=T.to,C=T.l,T=T.r;Sr(h,g,v),C&&d(h,C),T&&d(h,T)})(o,l)}function sa(o,l){var d=oi(l),h=d.next();if(h.done)return!1;for(var f=h.value,g=oi(o),v=g.next(f.from),C=v.value;!h.done&&!v.done;){if(Ie(C.from,f.to)<=0&&0<=Ie(C.to,f.from))return!0;Ie(f.from,C.from)<0?f=(h=d.next(C.from)).value:C=(v=g.next(f.from)).value}return!1}function oi(o){var l=ws(o)?null:{s:0,n:o};return{next:function(d){for(var h=0<arguments.length;l;)switch(l.s){case 0:if(l.s=1,h)for(;l.n.l&&Ie(d,l.n.from)<0;)l={up:l,n:l.n.l,s:1};else for(;l.n.l;)l={up:l,n:l.n.l,s:1};case 1:if(l.s=2,!h||Ie(d,l.n.to)<=0)return{value:l.n,done:!1};case 2:if(l.n.r){l.s=3,l={up:l,n:l.n.r,s:0};continue}case 3:l=l.up}return{done:!0}}}}function oa(o){var l,d,h=(((l=o.r)===null||l===void 0?void 0:l.d)||0)-(((d=o.l)===null||d===void 0?void 0:d.d)||0),f=1<h?"r":h<-1?"l":"";f&&(l=f=="r"?"l":"r",d=i({},o),h=o[f],o.from=h.from,o.to=h.to,o[f]=h[f],d[f]=h[l],(o[l]=d).d=aa(d)),o.d=aa(o)}function aa(d){var l=d.r,d=d.l;return(l?d?Math.max(l.d,d.d):l.d:d?d.d:0)+1}function ai(o,l){return a(l).forEach(function(d){o[d]?_r(o[d],l[d]):o[d]=(function h(f){var g,v,C={};for(g in f)b(f,g)&&(v=f[g],C[g]=!v||typeof v!="object"||m.has(v.constructor)?v:h(v));return C})(l[d])}),o}function vs(o,l){return o.all||l.all||Object.keys(o).some(function(d){return l[d]&&sa(l[d],o[d])})}$($t.prototype,((Kt={add:function(o){return _r(this,o),this},addKey:function(o){return Sr(this,o,o),this},addKeys:function(o){var l=this;return o.forEach(function(d){return Sr(l,d,d)}),this},hasKey:function(o){var l=oi(this).next(o).value;return l&&Ie(l.from,o)<=0&&0<=Ie(l.to,o)}})[he]=function(){return oi(this)},Kt));var Nn={},xs={},$s=!1;function li(o){ai(xs,o),$s||($s=!0,setTimeout(function(){$s=!1,ks(xs,!(xs={}))},0))}function ks(o,l){l===void 0&&(l=!1);var d=new Set;if(o.all)for(var h=0,f=Object.values(Nn);h<f.length;h++)la(v=f[h],o,d,l);else for(var g in o){var v,C=/^idb\:\/\/(.*)\/(.*)\//.exec(g);C&&(g=C[1],C=C[2],(v=Nn["idb://".concat(g,"/").concat(C)])&&la(v,o,d,l))}d.forEach(function(T){return T()})}function la(o,l,d,h){for(var f=[],g=0,v=Object.entries(o.queries.query);g<v.length;g++){for(var C=v[g],T=C[0],R=[],z=0,E=C[1];z<E.length;z++){var F=E[z];vs(l,F.obsSet)?F.subscribers.forEach(function(O){return d.add(O)}):h&&R.push(F)}h&&f.push([T,R])}if(h)for(var A=0,j=f;A<j.length;A++){var L=j[A],T=L[0],R=L[1];o.queries.query[T]=R}}function Cd(o){var l=o._state,d=o._deps.indexedDB;if(l.isBeingOpened||o.idbdb)return l.dbReadyPromise.then(function(){return l.dbOpenError?dt(l.dbOpenError):o});l.isBeingOpened=!0,l.dbOpenError=null,l.openComplete=!1;var h=l.openCanceller,f=Math.round(10*o.verno),g=!1;function v(){if(l.openCanceller!==h)throw new ae.DatabaseClosed("db.open() was cancelled")}function C(){return new ie(function(F,A){if(v(),!d)throw new ae.MissingAPI;var j=o.name,L=l.autoSchema||!f?d.open(j):d.open(j,f);if(!L)throw new ae.MissingAPI;L.onerror=hn(A),L.onblocked=qe(o._fireOnBlocked),L.onupgradeneeded=qe(function(O){var N;z=L.transaction,l.autoSchema&&!o._options.allowEmptyDB?(L.onerror=$r,z.abort(),L.result.close(),(N=d.deleteDatabase(j)).onsuccess=N.onerror=qe(function(){A(new ae.NoSuchDatabase("Database ".concat(j," doesnt exist")))})):(z.onerror=hn(A),O=O.oldVersion>Math.pow(2,62)?0:O.oldVersion,E=O<1,o.idbdb=L.result,g&&$d(o,z),xd(o,O/10,z,A))},A),L.onsuccess=qe(function(){z=null;var O,N,U,H,V,ee=o.idbdb=L.result,oe=Q(ee.objectStoreNames);if(0<oe.length)try{var te=ee.transaction((H=oe).length===1?H[0]:H,"readonly");if(l.autoSchema)N=ee,U=te,(O=o).verno=N.version/10,U=O._dbSchema=ri(0,N,U),O._storeNames=Q(N.objectStoreNames,0),ti(O,[O._allTables],a(U),U);else if(ii(o,o._dbSchema,te),((V=ps(ri(0,(V=o).idbdb,te),V._dbSchema)).add.length||V.change.some(function(ne){return ne.add.length||ne.change.length}))&&!g)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),ee.close(),f=ee.version+1,g=!0,F(C());ei(o,te)}catch{}er.push(o),ee.onversionchange=qe(function(ne){l.vcFired=!0,o.on("versionchange").fire(ne)}),ee.onclose=qe(function(ne){o.on("close").fire(ne)}),E&&(V=o._deps,te=j,ee=V.indexedDB,V=V.IDBKeyRange,bs(ee)||te===Yr||gs(ee,V).put({name:te}).catch(ye)),F()},A)}).catch(function(F){switch(F?.name){case"UnknownError":if(0<l.PR1398_maxLoop)return l.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),C();break;case"VersionError":if(0<f)return f=0,C()}return ie.reject(F)})}var T,R=l.dbReadyResolve,z=null,E=!1;return ie.race([h,(typeof navigator>"u"?ie.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(F){function A(){return indexedDB.databases().finally(F)}T=setInterval(A,100),A()}).finally(function(){return clearInterval(T)}):Promise.resolve()).then(C)]).then(function(){return v(),l.onReadyBeingFired=[],ie.resolve(ys(function(){return o.on.ready.fire(o.vip)})).then(function F(){if(0<l.onReadyBeingFired.length){var A=l.onReadyBeingFired.reduce(Ot,ye);return l.onReadyBeingFired=[],ie.resolve(ys(function(){return A(o.vip)})).then(F)}})}).finally(function(){l.openCanceller===h&&(l.onReadyBeingFired=null,l.isBeingOpened=!1)}).catch(function(F){l.dbOpenError=F;try{z&&z.abort()}catch{}return h===l.openCanceller&&o._close(),dt(F)}).finally(function(){l.openComplete=!0,R()}).then(function(){var F;return E&&(F={},o.tables.forEach(function(A){A.schema.indexes.forEach(function(j){j.name&&(F["idb://".concat(o.name,"/").concat(A.name,"/").concat(j.name)]=new $t(-1/0,[[[]]]))}),F["idb://".concat(o.name,"/").concat(A.name,"/")]=F["idb://".concat(o.name,"/").concat(A.name,"/:dels")]=new $t(-1/0,[[[]]])}),Pn(kr).fire(F),ks(F,!0)),o})}function Cs(o){function l(g){return o.next(g)}var d=f(l),h=f(function(g){return o.throw(g)});function f(g){return function(T){var C=g(T),T=C.value;return C.done?T:T&&typeof T.then=="function"?T.then(d,h):c(T)?Promise.all(T).then(d,h):d(T)}}return f(l)()}function ci(o,l,d){for(var h=c(o)?o.slice():[o],f=0;f<d;++f)h.push(l);return h}var Ed={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(o){return i(i({},o),{table:function(l){var d=o.table(l),h=d.schema,f={},g=[];function v(E,F,A){var j=Er(E),L=f[j]=f[j]||[],O=E==null?0:typeof E=="string"?1:E.length,N=0<F,N=i(i({},A),{name:N?"".concat(j,"(virtual-from:").concat(A.name,")"):A.name,lowLevelIndex:A,isVirtual:N,keyTail:F,keyLength:O,extractKey:hs(E),unique:!N&&A.unique});return L.push(N),N.isPrimaryKey||g.push(N),1<O&&v(O===2?E[0]:E.slice(0,O-1),F+1,A),L.sort(function(U,H){return U.keyTail-H.keyTail}),N}l=v(h.primaryKey.keyPath,0,h.primaryKey),f[":id"]=[l];for(var C=0,T=h.indexes;C<T.length;C++){var R=T[C];v(R.keyPath,0,R)}function z(E){var F,A=E.query.index;return A.isVirtual?i(i({},E),{query:{index:A.lowLevelIndex,range:(F=E.query.range,A=A.keyTail,{type:F.type===1?2:F.type,lower:ci(F.lower,F.lowerOpen?o.MAX_KEY:o.MIN_KEY,A),lowerOpen:!0,upper:ci(F.upper,F.upperOpen?o.MIN_KEY:o.MAX_KEY,A),upperOpen:!0})}}):E}return i(i({},d),{schema:i(i({},h),{primaryKey:l,indexes:g,getIndexByKeyPath:function(E){return(E=f[Er(E)])&&E[0]}}),count:function(E){return d.count(z(E))},query:function(E){return d.query(z(E))},openCursor:function(E){var F=E.query.index,A=F.keyTail,j=F.isVirtual,L=F.keyLength;return j?d.openCursor(z(E)).then(function(N){return N&&O(N)}):d.openCursor(E);function O(N){return Object.create(N,{continue:{value:function(U){U!=null?N.continue(ci(U,E.reverse?o.MAX_KEY:o.MIN_KEY,A)):E.unique?N.continue(N.key.slice(0,L).concat(E.reverse?o.MIN_KEY:o.MAX_KEY,A)):N.continue()}},continuePrimaryKey:{value:function(U,H){N.continuePrimaryKey(ci(U,o.MAX_KEY,A),H)}},primaryKey:{get:function(){return N.primaryKey}},key:{get:function(){var U=N.key;return L===1?U[0]:U.slice(0,L)}},value:{get:function(){return N.value}}})}}})}})}};function Es(o,l,d,h){return d=d||{},h=h||"",a(o).forEach(function(f){var g,v,C;b(l,f)?(g=o[f],v=l[f],typeof g=="object"&&typeof v=="object"&&g&&v?(C=k(g))!==k(v)?d[h+f]=l[f]:C==="Object"?Es(g,v,d,h+f+"."):g!==v&&(d[h+f]=l[f]):g!==v&&(d[h+f]=l[f])):d[h+f]=void 0}),a(l).forEach(function(f){b(o,f)||(d[h+f]=l[f])}),d}function Ss(o,l){return l.type==="delete"?l.keys:l.keys||l.values.map(o.extractKey)}var Sd={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(o){return i(i({},o),{table:function(l){var d=o.table(l),h=d.schema.primaryKey;return i(i({},d),{mutate:function(f){var g=re.trans,v=g.table(l).hook,C=v.deleting,T=v.creating,R=v.updating;switch(f.type){case"add":if(T.fire===ye)break;return g._promise("readwrite",function(){return z(f)},!0);case"put":if(T.fire===ye&&R.fire===ye)break;return g._promise("readwrite",function(){return z(f)},!0);case"delete":if(C.fire===ye)break;return g._promise("readwrite",function(){return z(f)},!0);case"deleteRange":if(C.fire===ye)break;return g._promise("readwrite",function(){return(function E(F,A,j){return d.query({trans:F,values:!1,query:{index:h,range:A},limit:j}).then(function(L){var O=L.result;return z({type:"delete",keys:O,trans:F}).then(function(N){return 0<N.numFailures?Promise.reject(N.failures[0]):O.length<j?{failures:[],numFailures:0,lastResult:void 0}:E(F,i(i({},A),{lower:O[O.length-1],lowerOpen:!0}),j)})})})(f.trans,f.range,1e4)},!0)}return d.mutate(f);function z(E){var F,A,j,L=re.trans,O=E.keys||Ss(h,E);if(!O)throw new Error("Keys missing");return(E=E.type==="add"||E.type==="put"?i(i({},E),{keys:O}):i({},E)).type!=="delete"&&(E.values=n([],E.values)),E.keys&&(E.keys=n([],E.keys)),F=d,j=O,((A=E).type==="add"?Promise.resolve([]):F.getMany({trans:A.trans,keys:j,cache:"immutable"})).then(function(N){var U=O.map(function(H,V){var ee,oe,te,ne=N[V],le={onerror:null,onsuccess:null};return E.type==="delete"?C.fire.call(le,H,ne,L):E.type==="add"||ne===void 0?(ee=T.fire.call(le,H,E.values[V],L),H==null&&ee!=null&&(E.keys[V]=H=ee,h.outbound||de(E.values[V],h.keyPath,H))):(ee=Es(ne,E.values[V]),(oe=R.fire.call(le,ee,H,ne,L))&&(te=E.values[V],Object.keys(oe).forEach(function(se){b(te,se)?te[se]=oe[se]:de(te,se,oe[se])}))),le});return d.mutate(E).then(function(H){for(var V=H.failures,ee=H.results,oe=H.numFailures,H=H.lastResult,te=0;te<O.length;++te){var ne=(ee||O)[te],le=U[te];ne==null?le.onerror&&le.onerror(V[te]):le.onsuccess&&le.onsuccess(E.type==="put"&&N[te]?E.values[te]:ne)}return{failures:V,results:ee,numFailures:oe,lastResult:H}}).catch(function(H){return U.forEach(function(V){return V.onerror&&V.onerror(H)}),Promise.reject(H)})})}}})}})}};function ca(o,l,d){try{if(!l||l.keys.length<o.length)return null;for(var h=[],f=0,g=0;f<l.keys.length&&g<o.length;++f)Ie(l.keys[f],o[g])===0&&(h.push(d?I(l.values[f]):l.values[f]),++g);return h.length===o.length?h:null}catch{return null}}var _d={stack:"dbcore",level:-1,create:function(o){return{table:function(l){var d=o.table(l);return i(i({},d),{getMany:function(h){if(!h.cache)return d.getMany(h);var f=ca(h.keys,h.trans._cache,h.cache==="clone");return f?ie.resolve(f):d.getMany(h).then(function(g){return h.trans._cache={keys:h.keys,values:h.cache==="clone"?I(g):g},g})},mutate:function(h){return h.type!=="add"&&(h.trans._cache=null),d.mutate(h)}})}}}};function da(o,l){return o.trans.mode==="readonly"&&!!o.subscr&&!o.trans.explicit&&o.trans.db._options.cache!=="disabled"&&!l.schema.primaryKey.outbound}function ua(o,l){switch(o){case"query":return l.values&&!l.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Td={stack:"dbcore",level:0,name:"Observability",create:function(o){var l=o.schema.name,d=new $t(o.MIN_KEY,o.MAX_KEY);return i(i({},o),{transaction:function(h,f,g){if(re.subscr&&f!=="readonly")throw new ae.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(re.querier));return o.transaction(h,f,g)},table:function(h){var f=o.table(h),g=f.schema,v=g.primaryKey,E=g.indexes,C=v.extractKey,T=v.outbound,R=v.autoIncrement&&E.filter(function(A){return A.compound&&A.keyPath.includes(v.keyPath)}),z=i(i({},f),{mutate:function(A){function j(se){return se="idb://".concat(l,"/").concat(h,"/").concat(se),H[se]||(H[se]=new $t)}var L,O,N,U=A.trans,H=A.mutatedParts||(A.mutatedParts={}),V=j(""),ee=j(":dels"),oe=A.type,le=A.type==="deleteRange"?[A.range]:A.type==="delete"?[A.keys]:A.values.length<50?[Ss(v,A).filter(function(se){return se}),A.values]:[],te=le[0],ne=le[1],le=A.trans._cache;return c(te)?(V.addKeys(te),(le=oe==="delete"||te.length===ne.length?ca(te,le):null)||ee.addKeys(te),(le||ne)&&(L=j,O=le,N=ne,g.indexes.forEach(function(se){var ue=L(se.name||"");function $e(Ee){return Ee!=null?se.extractKey(Ee):null}function Ce(Ee){return se.multiEntry&&c(Ee)?Ee.forEach(function(Lt){return ue.addKey(Lt)}):ue.addKey(Ee)}(O||N).forEach(function(Ee,kt){var xe=O&&$e(O[kt]),kt=N&&$e(N[kt]);Ie(xe,kt)!==0&&(xe!=null&&Ce(xe),kt!=null&&Ce(kt))})}))):te?(ne={from:(ne=te.lower)!==null&&ne!==void 0?ne:o.MIN_KEY,to:(ne=te.upper)!==null&&ne!==void 0?ne:o.MAX_KEY},ee.add(ne),V.add(ne)):(V.add(d),ee.add(d),g.indexes.forEach(function(se){return j(se.name).add(d)})),f.mutate(A).then(function(se){return!te||A.type!=="add"&&A.type!=="put"||(V.addKeys(se.results),R&&R.forEach(function(ue){for(var $e=A.values.map(function(xe){return ue.extractKey(xe)}),Ce=ue.keyPath.findIndex(function(xe){return xe===v.keyPath}),Ee=0,Lt=se.results.length;Ee<Lt;++Ee)$e[Ee][Ce]=se.results[Ee];j(ue.name).addKeys($e)})),U.mutatedParts=ai(U.mutatedParts||{},H),se})}}),E=function(j){var L=j.query,j=L.index,L=L.range;return[j,new $t((j=L.lower)!==null&&j!==void 0?j:o.MIN_KEY,(L=L.upper)!==null&&L!==void 0?L:o.MAX_KEY)]},F={get:function(A){return[v,new $t(A.key)]},getMany:function(A){return[v,new $t().addKeys(A.keys)]},count:E,query:E,openCursor:E};return a(F).forEach(function(A){z[A]=function(j){var L=re.subscr,O=!!L,N=da(re,f)&&ua(A,j)?j.obsSet={}:L;if(O){var U=function(ne){return ne="idb://".concat(l,"/").concat(h,"/").concat(ne),N[ne]||(N[ne]=new $t)},H=U(""),V=U(":dels"),L=F[A](j),O=L[0],L=L[1];if((A==="query"&&O.isPrimaryKey&&!j.values?V:U(O.name||"")).add(L),!O.isPrimaryKey){if(A!=="count"){var ee=A==="query"&&T&&j.values&&f.query(i(i({},j),{values:!1}));return f[A].apply(this,arguments).then(function(ne){if(A==="query"){if(T&&j.values)return ee.then(function($e){return $e=$e.result,H.addKeys($e),ne});var le=j.values?ne.result.map(C):ne.result;(j.values?H:V).addKeys(le)}else if(A==="openCursor"){var se=ne,ue=j.values;return se&&Object.create(se,{key:{get:function(){return V.addKey(se.primaryKey),se.key}},primaryKey:{get:function(){var $e=se.primaryKey;return V.addKey($e),$e}},value:{get:function(){return ue&&H.addKey(se.primaryKey),se.value}}})}return ne})}V.add(d)}}return f[A].apply(this,arguments)}}),z}})}};function ha(o,l,d){if(d.numFailures===0)return l;if(l.type==="deleteRange")return null;var h=l.keys?l.keys.length:"values"in l&&l.values?l.values.length:1;return d.numFailures===h?null:(l=i({},l),c(l.keys)&&(l.keys=l.keys.filter(function(f,g){return!(g in d.failures)})),"values"in l&&c(l.values)&&(l.values=l.values.filter(function(f,g){return!(g in d.failures)})),l)}function _s(o,l){return d=o,((h=l).lower===void 0||(h.lowerOpen?0<Ie(d,h.lower):0<=Ie(d,h.lower)))&&(o=o,(l=l).upper===void 0||(l.upperOpen?Ie(o,l.upper)<0:Ie(o,l.upper)<=0));var d,h}function fa(o,l,F,h,f,g){if(!F||F.length===0)return o;var v=l.query.index,C=v.multiEntry,T=l.query.range,R=h.schema.primaryKey.extractKey,z=v.extractKey,E=(v.lowLevelIndex||v).extractKey,F=F.reduce(function(A,j){var L=A,O=[];if(j.type==="add"||j.type==="put")for(var N=new $t,U=j.values.length-1;0<=U;--U){var H,V=j.values[U],ee=R(V);N.hasKey(ee)||(H=z(V),(C&&c(H)?H.some(function(se){return _s(se,T)}):_s(H,T))&&(N.addKey(ee),O.push(V)))}switch(j.type){case"add":var oe=new $t().addKeys(l.values?A.map(function(ue){return R(ue)}):A),L=A.concat(l.values?O.filter(function(ue){return ue=R(ue),!oe.hasKey(ue)&&(oe.addKey(ue),!0)}):O.map(function(ue){return R(ue)}).filter(function(ue){return!oe.hasKey(ue)&&(oe.addKey(ue),!0)}));break;case"put":var te=new $t().addKeys(j.values.map(function(ue){return R(ue)}));L=A.filter(function(ue){return!te.hasKey(l.values?R(ue):ue)}).concat(l.values?O:O.map(function(ue){return R(ue)}));break;case"delete":var ne=new $t().addKeys(j.keys);L=A.filter(function(ue){return!ne.hasKey(l.values?R(ue):ue)});break;case"deleteRange":var le=j.range;L=A.filter(function(ue){return!_s(R(ue),le)})}return L},o);return F===o?o:(F.sort(function(A,j){return Ie(E(A),E(j))||Ie(R(A),R(j))}),l.limit&&l.limit<1/0&&(F.length>l.limit?F.length=l.limit:o.length===l.limit&&F.length<l.limit&&(f.dirty=!0)),g?Object.freeze(F):F)}function pa(o,l){return Ie(o.lower,l.lower)===0&&Ie(o.upper,l.upper)===0&&!!o.lowerOpen==!!l.lowerOpen&&!!o.upperOpen==!!l.upperOpen}function Ad(o,l){return(function(d,h,f,g){if(d===void 0)return h!==void 0?-1:0;if(h===void 0)return 1;if((h=Ie(d,h))===0){if(f&&g)return 0;if(f)return 1;if(g)return-1}return h})(o.lower,l.lower,o.lowerOpen,l.lowerOpen)<=0&&0<=(function(d,h,f,g){if(d===void 0)return h!==void 0?1:0;if(h===void 0)return-1;if((h=Ie(d,h))===0){if(f&&g)return 0;if(f)return-1;if(g)return 1}return h})(o.upper,l.upper,o.upperOpen,l.upperOpen)}function Id(o,l,d,h){o.subscribers.add(d),h.addEventListener("abort",function(){var f,g;o.subscribers.delete(d),o.subscribers.size===0&&(f=o,g=l,setTimeout(function(){f.subscribers.size===0&&G(g,f)},3e3))})}var Pd={stack:"dbcore",level:0,name:"Cache",create:function(o){var l=o.schema.name;return i(i({},o),{transaction:function(d,h,f){var g,v,C=o.transaction(d,h,f);return h==="readwrite"&&(v=(g=new AbortController).signal,f=function(T){return function(){if(g.abort(),h==="readwrite"){for(var R=new Set,z=0,E=d;z<E.length;z++){var F=E[z],A=Nn["idb://".concat(l,"/").concat(F)];if(A){var j=o.table(F),L=A.optimisticOps.filter(function(ue){return ue.trans===C});if(C._explicit&&T&&C.mutatedParts)for(var O=0,N=Object.values(A.queries.query);O<N.length;O++)for(var U=0,H=(oe=N[O]).slice();U<H.length;U++)vs((te=H[U]).obsSet,C.mutatedParts)&&(G(oe,te),te.subscribers.forEach(function(ue){return R.add(ue)}));else if(0<L.length){A.optimisticOps=A.optimisticOps.filter(function(ue){return ue.trans!==C});for(var V=0,ee=Object.values(A.queries.query);V<ee.length;V++)for(var oe,te,ne,le=0,se=(oe=ee[V]).slice();le<se.length;le++)(te=se[le]).res!=null&&C.mutatedParts&&(T&&!te.dirty?(ne=Object.isFrozen(te.res),ne=fa(te.res,te.req,L,j,te,ne),te.dirty?(G(oe,te),te.subscribers.forEach(function(ue){return R.add(ue)})):ne!==te.res&&(te.res=ne,te.promise=ie.resolve({result:ne}))):(te.dirty&&G(oe,te),te.subscribers.forEach(function(ue){return R.add(ue)})))}}}R.forEach(function(ue){return ue()})}}},C.addEventListener("abort",f(!1),{signal:v}),C.addEventListener("error",f(!1),{signal:v}),C.addEventListener("complete",f(!0),{signal:v})),C},table:function(d){var h=o.table(d),f=h.schema.primaryKey;return i(i({},h),{mutate:function(g){var v=re.trans;if(f.outbound||v.db._options.cache==="disabled"||v.explicit||v.idbtrans.mode!=="readwrite")return h.mutate(g);var C=Nn["idb://".concat(l,"/").concat(d)];return C?(v=h.mutate(g),g.type!=="add"&&g.type!=="put"||!(50<=g.values.length||Ss(f,g).some(function(T){return T==null}))?(C.optimisticOps.push(g),g.mutatedParts&&li(g.mutatedParts),v.then(function(T){0<T.numFailures&&(G(C.optimisticOps,g),(T=ha(0,g,T))&&C.optimisticOps.push(T),g.mutatedParts&&li(g.mutatedParts))}),v.catch(function(){G(C.optimisticOps,g),g.mutatedParts&&li(g.mutatedParts)})):v.then(function(T){var R=ha(0,i(i({},g),{values:g.values.map(function(z,E){var F;return T.failures[E]?z:(z=(F=f.keyPath)!==null&&F!==void 0&&F.includes(".")?I(z):i({},z),de(z,f.keyPath,T.results[E]),z)})}),T);C.optimisticOps.push(R),queueMicrotask(function(){return g.mutatedParts&&li(g.mutatedParts)})}),v):h.mutate(g)},query:function(g){if(!da(re,h)||!ua("query",g))return h.query(g);var v=((R=re.trans)===null||R===void 0?void 0:R.db._options.cache)==="immutable",E=re,C=E.requery,T=E.signal,R=(function(j,L,O,N){var U=Nn["idb://".concat(j,"/").concat(L)];if(!U)return[];if(!(L=U.queries[O]))return[null,!1,U,null];var H=L[(N.query?N.query.index.name:null)||""];if(!H)return[null,!1,U,null];switch(O){case"query":var V=H.find(function(ee){return ee.req.limit===N.limit&&ee.req.values===N.values&&pa(ee.req.query.range,N.query.range)});return V?[V,!0,U,H]:[H.find(function(ee){return("limit"in ee.req?ee.req.limit:1/0)>=N.limit&&(!N.values||ee.req.values)&&Ad(ee.req.query.range,N.query.range)}),!1,U,H];case"count":return V=H.find(function(ee){return pa(ee.req.query.range,N.query.range)}),[V,!!V,U,H]}})(l,d,"query",g),z=R[0],E=R[1],F=R[2],A=R[3];return z&&E?z.obsSet=g.obsSet:(E=h.query(g).then(function(j){var L=j.result;if(z&&(z.res=L),v){for(var O=0,N=L.length;O<N;++O)Object.freeze(L[O]);Object.freeze(L)}else j.result=I(L);return j}).catch(function(j){return A&&z&&G(A,z),Promise.reject(j)}),z={obsSet:g.obsSet,promise:E,subscribers:new Set,type:"query",req:g,dirty:!1},A?A.push(z):(A=[z],(F=F||(Nn["idb://".concat(l,"/").concat(d)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[g.query.index.name||""]=A)),Id(z,A,C,T),z.promise.then(function(j){return{result:fa(j.result,g,F?.optimisticOps,h,z,v)}})}})}})}};function di(o,l){return new Proxy(o,{get:function(d,h,f){return h==="db"?l:Reflect.get(d,h,f)}})}var $n=(ut.prototype.version=function(o){if(isNaN(o)||o<.1)throw new ae.Type("Given version is not a positive number");if(o=Math.round(10*o)/10,this.idbdb||this._state.isBeingOpened)throw new ae.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,o);var l=this._versions,d=l.filter(function(h){return h._cfg.version===o})[0];return d||(d=new this.Version(o),l.push(d),l.sort(vd),d.stores({}),this._state.autoSchema=!1,d)},ut.prototype._whenReady=function(o){var l=this;return this.idbdb&&(this._state.openComplete||re.letThrough||this._vip)?o():new ie(function(d,h){if(l._state.openComplete)return h(new ae.DatabaseClosed(l._state.dbOpenError));if(!l._state.isBeingOpened){if(!l._state.autoOpen)return void h(new ae.DatabaseClosed);l.open().catch(ye)}l._state.dbReadyPromise.then(d,h)}).then(o)},ut.prototype.use=function(o){var l=o.stack,d=o.create,h=o.level,f=o.name;return f&&this.unuse({stack:l,name:f}),o=this._middlewares[l]||(this._middlewares[l]=[]),o.push({stack:l,create:d,level:h??10,name:f}),o.sort(function(g,v){return g.level-v.level}),this},ut.prototype.unuse=function(o){var l=o.stack,d=o.name,h=o.create;return l&&this._middlewares[l]&&(this._middlewares[l]=this._middlewares[l].filter(function(f){return h?f.create!==h:!!d&&f.name!==d})),this},ut.prototype.open=function(){var o=this;return Fn(tt,function(){return Cd(o)})},ut.prototype._close=function(){var o=this._state,l=er.indexOf(this);if(0<=l&&er.splice(l,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}o.isBeingOpened||(o.dbReadyPromise=new ie(function(d){o.dbReadyResolve=d}),o.openCanceller=new ie(function(d,h){o.cancelOpen=h}))},ut.prototype.close=function(d){var l=(d===void 0?{disableAutoOpen:!0}:d).disableAutoOpen,d=this._state;l?(d.isBeingOpened&&d.cancelOpen(new ae.DatabaseClosed),this._close(),d.autoOpen=!1,d.dbOpenError=new ae.DatabaseClosed):(this._close(),d.autoOpen=this._options.autoOpen||d.isBeingOpened,d.openComplete=!1,d.dbOpenError=null)},ut.prototype.delete=function(o){var l=this;o===void 0&&(o={disableAutoOpen:!0});var d=0<arguments.length&&typeof arguments[0]!="object",h=this._state;return new ie(function(f,g){function v(){l.close(o);var C=l._deps.indexedDB.deleteDatabase(l.name);C.onsuccess=qe(function(){var T,R,z;T=l._deps,R=l.name,z=T.indexedDB,T=T.IDBKeyRange,bs(z)||R===Yr||gs(z,T).delete(R).catch(ye),f()}),C.onerror=hn(g),C.onblocked=l._fireOnBlocked}if(d)throw new ae.InvalidArgument("Invalid closeOptions argument to db.delete()");h.isBeingOpened?h.dbReadyPromise.then(v):v()})},ut.prototype.backendDB=function(){return this.idbdb},ut.prototype.isOpen=function(){return this.idbdb!==null},ut.prototype.hasBeenClosed=function(){var o=this._state.dbOpenError;return o&&o.name==="DatabaseClosed"},ut.prototype.hasFailed=function(){return this._state.dbOpenError!==null},ut.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(ut.prototype,"tables",{get:function(){var o=this;return a(this._allTables).map(function(l){return o._allTables[l]})},enumerable:!1,configurable:!0}),ut.prototype.transaction=function(){var o=function(l,d,h){var f=arguments.length;if(f<2)throw new ae.InvalidArgument("Too few arguments");for(var g=new Array(f-1);--f;)g[f-1]=arguments[f];return h=g.pop(),[l,Pe(g),h]}.apply(this,arguments);return this._transaction.apply(this,o)},ut.prototype._transaction=function(o,l,d){var h=this,f=re.trans;f&&f.db===this&&o.indexOf("!")===-1||(f=null);var g,v,C=o.indexOf("?")!==-1;o=o.replace("!","").replace("?","");try{if(v=l.map(function(R){if(R=R instanceof h.Table?R.name:R,typeof R!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return R}),o=="r"||o===is)g=is;else{if(o!="rw"&&o!=ss)throw new ae.InvalidArgument("Invalid transaction mode: "+o);g=ss}if(f){if(f.mode===is&&g===ss){if(!C)throw new ae.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");f=null}f&&v.forEach(function(R){if(f&&f.storeNames.indexOf(R)===-1){if(!C)throw new ae.SubTransaction("Table "+R+" not included in parent transaction.");f=null}}),C&&f&&!f.active&&(f=null)}}catch(R){return f?f._promise(null,function(z,E){E(R)}):dt(R)}var T=function R(z,E,F,A,j){return ie.resolve().then(function(){var L=re.transless||re,O=z._createTransaction(E,F,z._dbSchema,A);if(O.explicit=!0,L={trans:O,transless:L},A)O.idbtrans=A.idbtrans;else try{O.create(),O.idbtrans._explicit=!0,z._state.PR1398_maxLoop=3}catch(H){return H.name===Je.InvalidState&&z.isOpen()&&0<--z._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),z.close({disableAutoOpen:!1}),z.open().then(function(){return R(z,E,F,null,j)})):dt(H)}var N,U=st(j);return U&&Zn(),L=ie.follow(function(){var H;(N=j.call(O,O))&&(U?(H=Tn.bind(null,null),N.then(H,H)):typeof N.next=="function"&&typeof N.throw=="function"&&(N=Cs(N)))},L),(N&&typeof N.then=="function"?ie.resolve(N).then(function(H){return O.active?H:dt(new ae.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):L.then(function(){return N})).then(function(H){return A&&O._resolve(),O._completion.then(function(){return H})}).catch(function(H){return O._reject(H),dt(H)})})}.bind(null,this,g,v,f,d);return f?f._promise(g,T,"lock"):re.trans?Fn(re.transless,function(){return h._whenReady(T)}):this._whenReady(T)},ut.prototype.table=function(o){if(!b(this._allTables,o))throw new ae.InvalidTable("Table ".concat(o," does not exist"));return this._allTables[o]},ut);function ut(o,l){var d=this;this._middlewares={},this.verno=0;var h=ut.dependencies;this._options=l=i({addons:ut.addons,autoOpen:!0,indexedDB:h.indexedDB,IDBKeyRange:h.IDBKeyRange,cache:"cloned"},l),this._deps={indexedDB:l.indexedDB,IDBKeyRange:l.IDBKeyRange},h=l.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var f,g,v,C,T,R={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ye,dbReadyPromise:null,cancelOpen:ye,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:l.autoOpen};R.dbReadyPromise=new ie(function(E){R.dbReadyResolve=E}),R.openCanceller=new ie(function(E,F){R.cancelOpen=F}),this._state=R,this.name=o,this.on=wr(this,"populate","blocked","versionchange","close",{ready:[Ot,ye]}),this.on.ready.subscribe=X(this.on.ready.subscribe,function(E){return function(F,A){ut.vip(function(){var j,L=d._state;L.openComplete?(L.dbOpenError||ie.resolve().then(F),A&&E(F)):L.onReadyBeingFired?(L.onReadyBeingFired.push(F),A&&E(F)):(E(F),j=d,A||E(function O(){j.on.ready.unsubscribe(F),j.on.ready.unsubscribe(O)}))})}}),this.Collection=(f=this,vr(fd.prototype,function(N,O){this.db=f;var A=Wo,j=null;if(O)try{A=O()}catch(U){j=U}var L=N._ctx,O=L.table,N=O.hook.reading.fire;this._ctx={table:O,index:L.index,isPrimKey:!L.index||O.schema.primKey.keyPath&&L.index===O.schema.primKey.name,range:A,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:j,or:L.or,valueMapper:N!==ke?N:null}})),this.Table=(g=this,vr(Yo.prototype,function(E,F,A){this.db=g,this._tx=A,this.name=E,this.schema=F,this.hook=g._allTables[E]?g._allTables[E].hook:wr(null,{creating:[et,ye],reading:[Dt,ke],updating:[rn,ye],deleting:[En,ye]})})),this.Transaction=(v=this,vr(gd.prototype,function(E,F,A,j,L){var O=this;this.db=v,this.mode=E,this.storeNames=F,this.schema=A,this.chromeTransactionDurability=j,this.idbtrans=null,this.on=wr(this,"complete","error","abort"),this.parent=L||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new ie(function(N,U){O._resolve=N,O._reject=U}),this._completion.then(function(){O.active=!1,O.on.complete.fire()},function(N){var U=O.active;return O.active=!1,O.on.error.fire(N),O.parent?O.parent._reject(N):U&&O.idbtrans&&O.idbtrans.abort(),dt(N)})})),this.Version=(C=this,vr(kd.prototype,function(E){this.db=C,this._cfg={version:E,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(T=this,vr(ea.prototype,function(E,F,A){if(this.db=T,this._ctx={table:E,index:F===":id"?null:F,or:A},this._cmp=this._ascending=Ie,this._descending=function(j,L){return Ie(L,j)},this._max=function(j,L){return 0<Ie(j,L)?j:L},this._min=function(j,L){return Ie(j,L)<0?j:L},this._IDBKeyRange=T._deps.IDBKeyRange,!this._IDBKeyRange)throw new ae.MissingAPI})),this.on("versionchange",function(E){0<E.newVersion?console.warn("Another connection wants to upgrade database '".concat(d.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(d.name,"'. Closing db now to resume the delete request.")),d.close({disableAutoOpen:!1})}),this.on("blocked",function(E){!E.newVersion||E.newVersion<E.oldVersion?console.warn("Dexie.delete('".concat(d.name,"') was blocked")):console.warn("Upgrade '".concat(d.name,"' blocked by other connection holding version ").concat(E.oldVersion/10))}),this._maxKey=Cr(l.IDBKeyRange),this._createTransaction=function(E,F,A,j){return new d.Transaction(E,F,A,d._options.chromeTransactionDurability,j)},this._fireOnBlocked=function(E){d.on("blocked").fire(E),er.filter(function(F){return F.name===d.name&&F!==d&&!F._state.vcFired}).map(function(F){return F.on("versionchange").fire(E)})},this.use(_d),this.use(Pd),this.use(Td),this.use(Ed),this.use(Sd);var z=new Proxy(this,{get:function(E,F,A){if(F==="_vip")return!0;if(F==="table")return function(L){return di(d.table(L),z)};var j=Reflect.get(E,F,A);return j instanceof Yo?di(j,z):F==="tables"?j.map(function(L){return di(L,z)}):F==="_createTransaction"?function(){return di(j.apply(this,arguments),z)}:j}});this.vip=z,h.forEach(function(E){return E(d)})}var ui,Kt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Rd=(Ts.prototype.subscribe=function(o,l,d){return this._subscribe(o&&typeof o!="function"?o:{next:o,error:l,complete:d})},Ts.prototype[Kt]=function(){return this},Ts);function Ts(o){this._subscribe=o}try{ui={indexedDB:s.indexedDB||s.mozIndexedDB||s.webkitIndexedDB||s.msIndexedDB,IDBKeyRange:s.IDBKeyRange||s.webkitIDBKeyRange}}catch{ui={indexedDB:null,IDBKeyRange:null}}function ma(o){var l,d=!1,h=new Rd(function(f){var g=st(o),v,C=!1,T={},R={},z={get closed(){return C},unsubscribe:function(){C||(C=!0,v&&v.abort(),E&&Pn.storagemutated.unsubscribe(A))}};f.start&&f.start(z);var E=!1,F=function(){return rs(j)},A=function(L){ai(T,L),vs(R,T)&&F()},j=function(){var L,O,N;!C&&ui.indexedDB&&(T={},L={},v&&v.abort(),v=new AbortController,N=(function(U){var H=Me();try{g&&Zn();var V=_n(o,U);return V=g?V.finally(Tn):V}finally{H&&Ye()}})(O={subscr:L,signal:v.signal,requery:F,querier:o,trans:null}),Promise.resolve(N).then(function(U){d=!0,l=U,C||O.signal.aborted||(T={},(function(H){for(var V in H)if(b(H,V))return;return 1})(R=L)||E||(Pn(kr,A),E=!0),rs(function(){return!C&&f.next&&f.next(U)}))},function(U){d=!1,["DatabaseClosedError","AbortError"].includes(U?.name)||C||rs(function(){C||f.error&&f.error(U)})}))};return setTimeout(F,0),z});return h.hasValue=function(){return d},h.getValue=function(){return l},h}var Un=$n;function As(o){var l=Rn;try{Rn=!0,Pn.storagemutated.fire(o),ks(o,!0)}finally{Rn=l}}$(Un,i(i({},Ne),{delete:function(o){return new Un(o,{addons:[]}).delete()},exists:function(o){return new Un(o,{addons:[]}).open().then(function(l){return l.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(o){try{return l=Un.dependencies,d=l.indexedDB,l=l.IDBKeyRange,(bs(d)?Promise.resolve(d.databases()).then(function(h){return h.map(function(f){return f.name}).filter(function(f){return f!==Yr})}):gs(d,l).toCollection().primaryKeys()).then(o)}catch{return dt(new ae.MissingAPI)}var l,d},defineClass:function(){return function(o){u(this,o)}},ignoreTransaction:function(o){return re.trans?Fn(re.transless,o):o()},vip:ys,async:function(o){return function(){try{var l=Cs(o.apply(this,arguments));return l&&typeof l.then=="function"?l:ie.resolve(l)}catch(d){return dt(d)}}},spawn:function(o,l,d){try{var h=Cs(o.apply(d,l||[]));return h&&typeof h.then=="function"?h:ie.resolve(h)}catch(f){return dt(f)}},currentTransaction:{get:function(){return re.trans||null}},waitFor:function(o,l){return l=ie.resolve(typeof o=="function"?Un.ignoreTransaction(o):o).timeout(l||6e4),re.trans?re.trans.waitFor(l):l},Promise:ie,debug:{get:function(){return Le},set:function(o){Ve(o)}},derive:S,extend:u,props:$,override:X,Events:wr,on:Pn,liveQuery:ma,extendObservabilitySet:ai,getByKeyPath:Z,setByKeyPath:de,delByKeyPath:function(o,l){typeof l=="string"?de(o,l,void 0):"length"in l&&[].map.call(l,function(d){de(o,d,void 0)})},shallowClone:we,deepClone:I,getObjectDiff:Es,cmp:Ie,asap:W,minKey:-1/0,addons:[],connections:er,errnames:Je,dependencies:ui,cache:Nn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(o){return parseInt(o)}).reduce(function(o,l,d){return o+l/Math.pow(10,2*d)})})),Un.maxKey=Cr(Un.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Pn(kr,function(o){Rn||(o=new CustomEvent(cs,{detail:o}),Rn=!0,dispatchEvent(o),Rn=!1)}),addEventListener(cs,function(o){o=o.detail,Rn||As(o)}));var rr,Rn=!1,ga=function(){};return typeof BroadcastChannel<"u"&&((ga=function(){(rr=new BroadcastChannel(cs)).onmessage=function(o){return o.data&&As(o.data)}})(),typeof rr.unref=="function"&&rr.unref(),Pn(kr,function(o){Rn||rr.postMessage(o)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(o){if(!$n.disableBfCache&&o.persisted){Le&&console.debug("Dexie: handling persisted pagehide"),rr?.close();for(var l=0,d=er;l<d.length;l++)d[l].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(o){!$n.disableBfCache&&o.persisted&&(Le&&console.debug("Dexie: handling persisted pageshow"),ga(),As({all:new $t(-1/0,[[]])}))})),ie.rejectionMapper=function(o,l){return!o||o instanceof Ke||o instanceof TypeError||o instanceof SyntaxError||!o.name||!Ze[o.name]?o:(l=new Ze[o.name](l||o.message,o),"stack"in o&&P(l,"stack",{get:function(){return this.inner.stack}}),l)},Ve(Le),i($n,Object.freeze({__proto__:null,Dexie:$n,liveQuery:ma,Entity:Ko,cmp:Ie,PropModSymbol:xn,PropModification:xr,replacePrefix:function(o,l){return new xr({replacePrefix:[o,l]})},add:function(o){return new xr({add:o})},remove:function(o){return new xr({remove:o})},default:$n,RangeSet:$t,mergeRanges:_r,rangesOverlap:sa}),{default:$n}),$n})})(xi)),xi.exports}var hu=uu();const Ws=cu(hu),Ia=Symbol.for("Dexie"),Si=globalThis[Ia]||(globalThis[Ia]=Ws);if(Ws.semVer!==Si.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Ws.semVer} and ${Si.semVer}`);const{liveQuery:Ll,mergeRanges:Dy,rangesOverlap:Oy,RangeSet:jy,cmp:zy,Entity:Ly,PropModSymbol:Fy,PropModification:My,replacePrefix:By,add:Ny,remove:Uy}=Si,fu="easydb";let fi=null;function pu(){if(fi)return fi;const e=new Si(fu);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>mu()),fi={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},fi}function mu(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function ir(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const r=Object.entries(t);return e.filter(i=>Fl(i,r)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,r){if(await e.update(t,r)===0)throw new Error(`patch: no doc with id=${t}`);const n=await e.get(t);if(!n)throw new Error(`patch: doc id=${t} vanished after update`);return n},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const i=Ll(()=>e.toArray()).subscribe({next:n=>t(n)});return()=>i.unsubscribe()}}}function gu(e,t){return{async find(r){const i=e.where("tableId").equals(t);if(!r||Object.keys(r).length===0)return i.toArray();const n=Object.entries(r);return i.filter(s=>Fl(s,n)).toArray()},async findOne(r){const i=await e.get(r);return i&&i.tableId===t?i:null},async insert(r){const i={...r,tableId:t};return await e.add(i),i},async bulkInsert(r){if(r.length===0)return[];const i=r.map(n=>({...n,tableId:t}));return await e.bulkAdd(i),i},async upsert(r){const i={...r,tableId:t};return await e.put(i),i},async patch(r,i){if(await e.update(r,i)===0)throw new Error(`row patch: no row ${r}`);const s=await e.get(r);if(!s)throw new Error(`row patch: row ${r} vanished after update`);return s},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},subscribe(r){const n=Ll(()=>e.where("tableId").equals(t).toArray()).subscribe({next:s=>r(s)});return()=>n.unsubscribe()}}}function Fl(e,t){for(const[r,i]of t)if(e[r]!==i)return!1;return!0}function bu(e){return{workspaces:ir(e.workspaces),tables:ir(e.tables),settings:ir(e.settings),plugins:ir(e.plugins),viewTemplates:ir(e.viewTemplates),viewInstances:ir(e.viewInstances),rows:t=>gu(e.rows,t)}}function yu(e){const{base:t,providers:r,tableById:i,ctx:n}=e,s=new Map;return{...t,rows(a){const c=i(a),u=c?.source;if(u){const p=r.get(u.type);if(p){const w=JSON.stringify(u),b=s.get(a);if(b&&b.key===w)return b.coll;const $=p.create(c,n);return s.set(a,{key:w,coll:$}),$}}return s.delete(a),t.rows(a)}}}function wu(){const e=new Map;return{on(t,r){let i=e.get(t);return i||(i=new Set,e.set(t,i)),i.add(r),()=>{i.delete(r)}},emit(t,r){const i=e.get(t);if(i)for(const n of i)try{n(r)}catch(s){console.error(`[event:${String(t)}] listener threw`,s)}}}}const Jt=We`
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
`;function Zt(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const r=t.querySelector("form");r&&(e.preventDefault(),r.requestSubmit())}const Pa=new WeakSet;function en(e,t){if(Pa.has(t))return;Pa.add(t);let r=0,i=0,n=0,s=0,a=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",u=>{if(u.target.closest("button, input, textarea, select, a, label"))return;a=!0,r=u.clientX,i=u.clientY;const w=e.getBoundingClientRect();n=w.left,s=w.top,t.setPointerCapture(u.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",u=>{if(!a)return;const p=u.clientX-r,w=u.clientY-i,b=-e.offsetWidth+80,$=window.innerWidth-80,D=0,P=window.innerHeight-40,S=Math.max(b,Math.min($,n+p)),B=Math.max(D,Math.min(P,s+w));e.style.position="fixed",e.style.left=`${S}px`,e.style.top=`${B}px`,e.style.margin="0"});const c=u=>{if(a){a=!1;try{t.releasePointerCapture(u.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c)}var vu=Object.defineProperty,xu=Object.getOwnPropertyDescriptor,Ml=(e,t,r,i)=>{for(var n=i>1?void 0:i?xu(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&vu(t,r,n),n};let Yt=class extends Ue{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitChoice=e=>{if(e.preventDefault(),this.current?.kind!=="choice")return;const t=this.current.options[0];t!==void 0&&this.closeAndResolve(t)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),Yt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Yt.instance===this&&(Yt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&en(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:t,message:e,resolve:r}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",r="Input"){return this.enqueue(i=>{this.current={kind:"prompt",title:r,message:e,value:t,resolve:i}})}choice(e,t,r="Choose"){return this.enqueue(i=>{this.current={kind:"choice",title:r,message:e,options:t,resolve:i}})}enqueue(e){return new Promise(t=>{const r=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const r=this.queue.shift();r&&r()}))}render(){const e=this.current;return _`
      <dialog @cancel=${this.onCancel} @keydown=${Zt}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):pe}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return _`
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
        `;case"prompt":return _`
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
        `;case"choice":return _`
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
              ${e.message?_`<p class="message">${e.message}</p>`:pe}
              <div class="choices">
                ${e.options.map((t,r)=>r===0?_`<button type="submit" class="choice primary" autofocus>${t}</button>`:_`<button
                        type="button"
                        class="choice"
                        @click=${()=>this.closeAndResolve(t)}
                      >
                        ${t}
                      </button>`)}
              </div>
            </div>
          </form>
        `}}};Yt.instance=null;Yt.styles=[Jt,We`
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
    `];Ml([K()],Yt.prototype,"current",2);Yt=Ml([nt("host-dialogs")],Yt);const qt=We`
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
`;var $u=Object.defineProperty,ku=Object.getOwnPropertyDescriptor,Bl=(e,t,r,i)=>{for(var n=i>1?void 0:i?ku(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&$u(t,r,n),n};let Cn=class extends Ue{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),Cn.instance=this}disconnectedCallback(){super.disconnectedCallback(),Cn.instance===this&&(Cn.instance=null)}show(e,t){const r={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,r];const i=t?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),i)}dismiss(e){const t=this.toasts.find(r=>r.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(r=>r.id!==e)}render(){return _`
      ${this.toasts.map(e=>_`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${Eu(e.kind)}</span>
            <span class="body">
              ${e.title?_`<strong>${e.title}</strong>`:""}${Cu(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};Cn.instance=null;Cn.styles=[qt,We`
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
    `];Bl([K()],Cn.prototype,"toasts",2);Cn=Bl([nt("toast-host")],Cn);function Cu(e){const t=/(https?:\/\/[^\s)]+)/g,r=[];let i=0,n;for(;(n=t.exec(e))!==null;)n.index>i&&r.push(e.slice(i,n.index)),r.push({url:n[0]}),i=n.index+n[0].length;return i<e.length&&r.push(e.slice(i)),r.length===0?e:r.map(s=>typeof s=="string"?s:_`<a href=${s.url} target="_blank" rel="noopener noreferrer">${s.url}</a>`)}function Eu(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function Su(){return{headerButtons:[],footerButtons:[],tableButtons:[],importers:[],connectors:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map,settings:new Map,commands:[]}}function kn(e,t){return e.push(t),()=>{const r=e.indexOf(t);r>=0&&e.splice(r,1)}}function Rs(e,t,r){return e.set(t,r),()=>{e.get(t)===r&&e.delete(t)}}function _u(e){return{registerHeaderButton:t=>kn(e.headerButtons,t),registerFooterButton:t=>kn(e.footerButtons,t),registerTableButton:t=>kn(e.tableButtons,t),registerImporter:t=>kn(e.importers,t),registerConnector:t=>kn(e.connectors,t),registerExporter:t=>kn(e.exporters,t),registerUrlSource:t=>kn(e.urlSources,t),registerDropHandler:t=>kn(e.dropHandlers,t),registerCellRenderer:(t,r)=>Rs(e.cellRenderers,t,r),registerRowRenderer:(t,r)=>Rs(e.rowRenderers,t,r),registerTableRenderer:(t,r)=>Rs(e.tableRenderers,t,r),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},openSettings:()=>{document.dispatchEvent(new CustomEvent("easydb:open-settings"))},registerCommand:t=>kn(e.commands,t),openCommandPalette:()=>{document.dispatchEvent(new CustomEvent("easydb:open-command-palette"))},registerSettings:(t,r,i)=>(e.settings.set(t,{name:r,fields:i}),()=>{e.settings.get(t)?.name===r&&e.settings.delete(t)}),dialogs:Tu}}const Tu={async alert(e,t){const r=Yt.instance;if(r)return r.alert(e,t);window.alert(e)},async confirm(e,t){const r=Yt.instance;return r?r.confirm(e,t):window.confirm(e)},async prompt(e,t,r){const i=Yt.instance;return i?i.prompt(e,t,r):window.prompt(e,t)??null},async choice(e,t,r){const i=Yt.instance;if(i)return i.choice(e,t,r);const n=window.prompt(`${e}

Options: ${t.join(", ")}`);return n&&t.includes(n)?n:null},toast(e,t){const r=Cn.instance;r?r.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}},mo="/easydbaccess/settings.json",Nl="/easydbaccess/secrets.txt";function Br(e){try{return globalThis.localStorage??null}catch{return null}}function Mi(e){const t=Br();if(!t)return{};const r=t.getItem(mo);if(!r)return{};try{const i=JSON.parse(r);return i&&typeof i=="object"?i:{}}catch{return{}}}function go(e,t){return Mi()[e]}function Au(e,t,r){const i=Br();if(!i)return;const n=Mi();n[e]=t,i.setItem(mo,JSON.stringify(n))}function Iu(e,t){const r=Br();if(!r)return;const i=Mi();e in i&&(delete i[e],r.setItem(mo,JSON.stringify(i)))}function Ks(e,t){return e in Mi()}function Bi(e){return Br()?.getItem(Nl)??""}function Ul(e,t){Br()?.setItem(Nl,e)}function Ni(e){const t={};for(const r of e.split(/\r?\n/)){const i=r.trim();if(!i||i.startsWith("#"))continue;const n=i.indexOf(":");if(n<0)continue;const s=i.slice(0,n).trim(),a=i.slice(n+1).trim();s&&(t[s]=a)}return t}function Hl(e,t){return e.replace(/\$\{secret:([^}]+)\}/g,(r,i)=>{const n=t[i.trim()];return n===void 0?r:n})}function Pu(e){const t=_u(e.registries),r=e.registries.rowSources,i=a=>(r.set(a.type,a),()=>{r.get(a.type)===a&&r.delete(a.type)}),n=Du(e.store,e.registries),s={open(a){return console.warn("[host] windows.open is stubbed until Phase 5",a.id),{id:a.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:s,registerRowSource:i,settings:n,backend:{fetch:async(a,c)=>{const u=await Ru(e.store),p=c?.body instanceof ArrayBuffer;if(!u||p)return globalThis.fetch(a,c);const w={url:a};return c?.method&&(w.method=c.method),c?.headers&&(w.headers=c.headers),typeof c?.body=="string"&&(w.body=c.body),globalThis.fetch(`${u}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)})},async saveFile(a,c,u){const p=typeof c=="string"?new Blob([c],{type:u??"application/octet-stream"}):c,w=URL.createObjectURL(p),b=document.createElement("a");b.href=w,b.download=a,b.rel="noopener",document.body.appendChild(b),b.click(),b.remove(),setTimeout(()=>URL.revokeObjectURL(w),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function Ru(e){const t="server-sync:url";let r=Ks(t)?go(t):void 0;return r===void 0&&(r=(await e.settings.findOne(t))?.value),typeof r!="string"||r.length===0?null:Hl(r,Ni(Bi())).replace(/\/+$/,"")}function Du(e,t){const r=(s,a)=>`${s}:${a}`,i=(s,a)=>t.settings.get(s)?.fields.find(c=>c.key===a),n=s=>typeof s=="string"?Hl(s,Ni(Bi())):s;return{async get(s,a){const c=r(s,a);let u;if(Ks(c))u=go(c);else{const p=await e.settings.findOne(c);u=p?p.value:i(s,a)?.default}return n(u)},async set(s,a,c,u){const p=r(s,a);(u??i(s,a)?.scope??"workspace")==="user"?(Au(p,c),await e.settings.remove(p).catch(()=>{})):(await e.settings.upsert({key:p,value:c}),Iu(p))},async placement(s,a){const c=r(s,a);return Ks(c)?"user":await e.settings.findOne(c)?"workspace":null}}}function Ra(e,t){return e.has(t)?e.get(t)!=="0":!1}function Ou(){if(typeof location>"u")return"off";const e=new URLSearchParams(location.search);return Ra(e,"safemode")?"all-optional":Ra(e,"safemode1")?"url-plugins":"off"}const Vt=Ou();function bo(e){let t;try{t=new URL(e)}catch{return e}const r=t.hostname.toLowerCase();if(r==="github.com"||r==="www.github.com"){const i=t.pathname.split("/").filter(Boolean);if(i.length>=5&&(i[2]==="blob"||i[2]==="raw")){const n=i[0],s=i[1];let a=i.slice(3);return a.length>=3&&a[0]==="refs"&&(a[1]==="heads"||a[1]==="tags")&&(a=a.slice(2)),`https://raw.githubusercontent.com/${[n,s,...a].join("/")}`}}return e}function ql(e){if(e.length>1024)return!1;const t=e.split(`
`);return t[0]?.startsWith("version https://git-lfs.github.com/spec/v1")===!0&&t.some(r=>r.startsWith("oid "))&&t.some(r=>r.startsWith("size "))}function Wl(e){const t=bo(e);let r;try{r=new URL(t)}catch{return null}if(r.hostname.toLowerCase()!=="raw.githubusercontent.com")return null;const i=r.pathname.replace(/^\/+/,"");return i.split("/").filter(Boolean).length<4?null:`https://media.githubusercontent.com/media/${i}`}async function Kl(e,t){const r=Number(e.headers?.get?.("content-length")),i=e.body?.getReader?.();if(i&&Number.isFinite(r)&&r>0){const n=[];let s=0;for(;;){const{done:u,value:p}=await i.read();if(u)break;p&&(n.push(p),s+=p.length,t?.(Math.min(1,s/r)))}const a=new Uint8Array(s);let c=0;for(const u of n)a.set(u,c),c+=u.length;return new TextDecoder().decode(a)}return await e.text()}const ju=50*1024*1024;function Da(e){try{return new URL(e).host}catch{return e}}function ur(e){try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();return r&&r.length>0?r:"sample.db.json"}catch{return"sample.db.json"}}async function zu(e){try{return(await e.text()).replace(/\s+/g," ").trim().slice(0,300)}catch{return""}}function Oa(e){const t=e/1048576;return`${Number.isInteger(t)?t:t.toFixed(1)} MB`}async function Lu(e,t,r={}){const i=bo(t),n=r.slowMs??2e3;let s=setTimeout(()=>{s=void 0,r.onSlow?.()},n);const a=()=>{s!==void 0&&(clearTimeout(s),s=void 0)},c=r.maxBytes===null?null:r.maxBytes??ju,u=async p=>{let w;try{w=await e.backend.fetch(p)}catch($){throw new Error(`Could not reach ${Da(p)} — no response. The server may be down, blocking cross-origin (CORS) requests, or the transfer may have failed (e.g. a very large file). [${$.message}]`)}if(!w.ok){const $=await zu(w);throw new Error(`HTTP ${w.status} ${w.statusText||""}`.trim()+($?` — ${$}`:""))}const b=Number(w.headers.get("content-length"));if(c!==null&&Number.isFinite(b)&&b>c)throw w.body?.cancel().catch(()=>{}),new Error(`Response is ${Oa(b)}, over the ${Oa(c)} browser import limit. Set a row limit, import it as a Reference instead of a Copy, take a smaller extract, or connect to a server/Datasette for large datasets.`);try{return await Kl(w,r.onProgress)}catch($){throw new Error(`Failed reading the response body from ${Da(p)}: ${$.message}`)}};try{const p=await u(i);if(ql(p)){const w=Wl(i);if(w)return await u(w)}return p}finally{a()}}async function Ui(e,t,r,i={}){const{TopProgress:n}=await ln(async()=>{const{TopProgress:a}=await import("./top-progress-tjFOYMjp.js");return{TopProgress:a}},[]),s={handle:null};try{return await Lu(e,t,{onSlow:()=>{s.handle=n.begin(r)},onProgress:a=>s.handle?.fraction(a),...i.maxBytes!==void 0?{maxBytes:i.maxBytes}:{}})}finally{s.handle?.done()}}function it(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function Tt(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Vs(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}const Fu={id:"csv-import",name:"CSV Import",type:"importer",version:"0.1.0",description:"Drag-and-drop CSV or TSV files to create typed tables.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-import.ts"};function Mu(e){e.ui.registerImporter(Nu),ln(()=>import("./csv-import-options-CRCp_pcS.js"),[]),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const i=Zu(t).filter(eh);if(i.length===0)return!1;t.preventDefault();for(const n of i)await Uu(e,n);return!0})}function Gs(e){return e.kind==="file"&&e.file?e.file.name:e.kind==="url"&&e.url?ur(e.url):"pasted"}function Bu(e){return vo(Gs(e))||"imported"}const Nu={id:"csv",label:"CSV / TSV",icon:"table_view",order:10,accept:[".csv",".tsv",".tab","text/csv","text/tab-separated-values"],panel:"csv-import-options",samples:[{label:"Air quality — 2016 readings (CSV)",url:"https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv"}],supports:{url:!0,file:!0,text:!0,reference:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??e.text??"";return/\.(csv|tsv|tab)$/i.test(t)?.95:e.file?.type==="text/csv"?.9:e.kind==="text"?.2:0},async list(e,t){return[{name:Bu(t),rowCount:null,handle:t}]},async*read(e,t){const r=t.handle;let i;r.kind==="file"&&r.file?i=e.maxRows!=null?await Yl(r.file,e.maxRows):await r.file.text():r.kind==="url"&&r.url?i=await e.fetchText(r.url,`Reading ${Gs(r)}…`):i=r.text??"";const s=(typeof e.panel.separator=="string"?e.panel.separator:void 0)??xo(Gs(r)),a={...e.maxRows!=null?{maxRows:e.maxRows}:{},...s?{separator:s}:{}},c=e.targetColumns;if(c&&c.length>0){yield{rows:yo(i,a).rows.map(b=>{const $={};for(let D=0;D<c.length;D++){const P=c[D];$[P.field]=wo(b[D]??"",P.type)}return $})};return}const u=hr(i,a);yield{columns:u.columns,rows:u.rows}},reference(e,t){const r=t.handle;if(r.kind!=="url"||!r.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");return{type:"url",config:{url:r.url,format:"csv"}}}};async function Uu(e,t){await Vl(e,await t.text(),t.name)}async function Vl(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("csv-import: no active workspace");const s=vo(r||"imported")||"imported",a=i.separator??xo(r),c=(await e.store.tables.find()).find($=>$.workspaceId===n&&$.name===s);let u,p;if(c){const $=await e.ui.dialogs.choice(`A table named "${s}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!$)return;$==="Append rows"?(p="append",u=c.id):$==="Overwrite rows"?(p="overwrite",u=c.id):(p="new",u=it())}else p="new",u=it();e.events.emit("import:before",{source:"csv",tableId:u});let w;if(p==="new"){const $=hr(t,{maxRows:i.maxRows,separator:a});let D=$.columns,P=$.rows;if(i.editColumns){const B=await i.editColumns(D);if(B===null)return;P=th(P,D,B),D=B}i.maxRows!=null&&(P=P.slice(0,i.maxRows));const S=c?`${s} (${Date.now().toString(36)})`:s;await e.store.tables.insert({id:u,workspaceId:n,name:S,code:Vs(S),columns:D,view:"table",...i.origin?{origin:i.origin}:{},updatedAt:Date.now()}),w=P.map(B=>({id:it(),tableId:u,data:B,updatedAt:Date.now()}))}else{const $=c.columns,D=yo(t,{maxRows:i.maxRows,separator:a});if(w=(i.maxRows!=null?D.rows.slice(0,i.maxRows):D.rows).map(S=>{const B={};for(let q=0;q<$.length;q++){const Q=$[q];B[Q.field]=wo(S[q]??"",Q.type)}return{id:it(),tableId:u,data:B,updatedAt:Date.now()}}),p==="overwrite"){const S=e.store.rows(u),B=await S.find();await S.bulkRemove(B.map(q=>q.id))}}await e.store.rows(u).bulkInsert(w),e.events.emit("import:after",{source:"csv",tableId:u,rowCount:w.length})}function yo(e,t={}){const r=e.replace(/﻿/,""),i=t.separator??Xl(r),n=Ql(r,i,Gl(t.maxRows));if(n.length===0)return{header:[],rows:[]};const s=n[0],a=n.slice(1).filter(c=>!(c.length===1&&c[0]===""));return{header:s,rows:a}}function Gl(e){return e!=null?e+1:void 0}async function Yl(e,t){const i=new TextDecoder,n=t+1;let s="",a=0,c=!1,u=0;for(;u<e.size;){const p=new Uint8Array(await e.slice(u,u+1048576).arrayBuffer());u+=1048576;const w=i.decode(p,{stream:!0});for(let b=0;b<w.length;b++){const $=w[b];if($==='"')c=!c;else if($===`
`&&!c&&(a+=1,a>=n))return s+w.slice(0,b+1)}s+=w}return s}function hr(e,t={}){const r=e.replace(/﻿/,""),i=t.separator??Xl(r),n=Ql(r,i,Gl(t.maxRows));if(n.length===0)return{columns:[],rows:[]};const s=n[0],a=n.slice(1).filter(D=>!(D.length===1&&D[0]==="")),c=s.map((D,P)=>Wu(D,P)),u=ec(c.map(D=>D.field)),p=a.map(D=>{const P={};for(let S=0;S<u.length;S++)P[u[S]]=D[S]??"";return P}),w=c.map((D,P)=>D.type?D.type:Ku(p.map(S=>S[u[P]]??"").filter(S=>S.length>0))),b=c.map((D,P)=>{const S=w[P]??"string",B={field:u[P],label:D.label,type:S},q=qu(S),Q=D.renderer??q;return Q&&(B.renderer=Q),D.default!==void 0&&(B.default=D.default),D.max!=null&&(B.max=D.max),D.unique&&(B.unique=!0),D.notnull&&(B.notnull=!0),D.hidden&&(B.hidden=!0),B}),$=p.map(D=>{const P={};for(let S=0;S<u.length;S++){const B=u[S],q=w[S]??"string";P[B]=wo(D[B]??"",q)}return P});return{columns:b,rows:$}}const Hu=new Set(["string","number","boolean","date","datetime"]),ja={color:"color",image:"image"};function qu(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function Wu(e,t){const r=e.trim();if(!r.includes(":"))return{field:Vs(r||`col_${t+1}`),label:r||`Column ${t+1}`};const i=r.split(":"),n=Vs(i[0]||`col_${t+1}`),s=(i[1]??i[0]??"").trim()||n,a={field:n,label:s},c=(i[2]??"").trim();c&&(Hu.has(c)?a.type=c:ja[c]&&(a.type="string",a.renderer=ja[c]));const u=(i[3]??"").trim();u&&(a.default=u);const p=(i[4]??"").trim();if(p){const b=Number(p);Number.isFinite(b)&&b>0&&(a.max=b)}const w=(i[5]??"").toLowerCase();return w.includes("u")&&(a.unique=!0),w.includes("n")&&(a.notnull=!0),w.includes("h")&&(a.hidden=!0),a}function Xl(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),r={",":0,";":0,"	":0};for(const s of t)s in r&&(r[s]+=1);let i=",",n=-1;for(const s of[",",";","	"])(r[s]??0)>n&&(i=s,n=r[s]??0);return i}function Ql(e,t,r){const i=[];let n=[],s="",a=!1;for(let c=0;c<e.length;c++){const u=e[c];if(a)u==='"'?e[c+1]==='"'?(s+='"',c++):a=!1:s+=u;else if(u==='"')a=!0;else if(u===t)n.push(s),s="";else if(u===`
`||u==="\r"){if(u==="\r"&&e[c+1]===`
`&&c++,n.push(s),i.push(n),n=[],s="",r!=null&&i.length>=r)return i}else s+=u}return(s.length>0||n.length>0)&&(n.push(s),i.push(n)),i}function Ku(e){return e.length===0?"string":e.every(Gu)?"boolean":e.every(Yu)?"number":e.every(Qu)?"datetime":e.every(Xu)?"date":"string"}const Vu=/^(true|false|yes|no|0|1)$/i;function Gu(e){return Vu.test(e.trim())}function Yu(e){const t=e.trim();if(t==="")return!1;const r=Number(t);return Number.isFinite(r)}function Xu(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function Qu(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function wo(e,t){const r=e.trim();switch(t){case"number":{if(r==="")return null;const i=Number(r);return Number.isFinite(i)?i:r}case"boolean":return r===""?null:/^(true|yes|1)$/i.test(r);case"date":return Jl(r);case"datetime":return Ju(r);default:return e}}function Jl(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){const i=parseInt(t[1],10),n=parseInt(t[2],10),s=t[3];let a=parseInt(s,10);s.length===2&&(a+=2e3);let c,u;return i>12?(c=i,u=n):n>12?(u=i,c=n):(c=i,u=n),`${a.toString().padStart(4,"0")}-${u.toString().padStart(2,"0")}-${c.toString().padStart(2,"0")}`}const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toISOString().slice(0,10)}function Ju(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),r=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(r)return`${r[1]}T${r[2].padStart(5,"0")}`;const i=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(i)return`${Jl(`${i[1]}/${i[2]}/${i[3]}`)}T${i[4].padStart(5,"0")}`;const n=new Date(e);if(!Number.isNaN(n.getTime())){const s=n.toISOString();return`${s.slice(0,10)}T${s.slice(11,16)}`}return e}function Zu(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}const Zl=/\.(csv|tsv|tab)$/i;function vo(e){return e.replace(Zl,"")}function xo(e){return/\.(tsv|tab)$/i.test(e)?"	":void 0}function eh(e){return!!(Zl.test(e.name)||e.type==="text/csv"||e.type==="application/csv"||e.type==="text/tab-separated-values")}function ec(e){const t=new Map,r=new Set,i=[];for(const n of e){let s=n,a=t.get(n)??0;for(;r.has(s);)a+=1,s=`${n}_${a+1}`;t.set(n,a),r.add(s),i.push(s)}return i}function th(e,t,r){return e.map(i=>{const n={};for(let s=0;s<t.length;s++)n[r[s].field]=i[t[s].field];return n})}const nh=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:ec,importCsvText:Vl,init:Mu,meta:Fu,parseCsv:hr,parseCsvRaw:yo,readCsvHead:Yl,separatorForName:xo,stripDelimitedExt:vo},Symbol.toStringTag,{value:"Module"})),rh={id:"csv-export",name:"CSV Export",type:"exporter",version:"0.1.0",description:"CSV serializer for the per-table export menu (see dump-export.ts) and the importer/exporter registry.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-export.ts"},ih={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return $o(e,t)}};function sh(e){e.ui.registerExporter(ih)}function $o(e,t){const r=e.columns.map(s=>s.field),i=e.columns.map(s=>za(s.label??s.field)),n=t.map(s=>r.map(a=>za(oh(s.data[a]))).join(","));return[i.join(","),...n].join(`\r
`)}function oh(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function za(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const ah=Object.freeze(Object.defineProperty({__proto__:null,init:sh,meta:rh,serializeCsv:$o},Symbol.toStringTag,{value:"Module"}));var lh=Object.defineProperty,ch=Object.getOwnPropertyDescriptor,fr=(e,t,r,i)=>{for(var n=i>1?void 0:i?ch(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&lh(t,r,n),n};function _i(e,t={}){return(Ft.instance??dh()).open(e,t)}function dh(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function uh(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let Ft=class extends Ue{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((r,i)=>r?i:-1).filter(r=>r>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),Ft.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ft.instance===this&&(Ft.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(r=>!r.hidden),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(r=>{this.resolveFn=r,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return _`
      <dialog @cancel=${this.onCancel} @keydown=${Zt}>
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
            ${this.message?_`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            <ul class="tables">
              ${this.items.map((t,r)=>_`
                  <li>
                    <input
                      type="checkbox"
                      id=${`tsel-${r}`}
                      .checked=${this.selected[r]??!1}
                      @change=${()=>this.toggle(r)}
                    />
                    <label for=${`tsel-${r}`}>
                      <span class="name">${t.name}</span>
                      ${t.hidden?_`<span class="tag-hidden">hidden</span>`:""}
                      <span class="size">${uh(t.size)}</span>
                      ${t.detail?_`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};Ft.instance=null;Ft.styles=[Jt,We`
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
    `];fr([K()],Ft.prototype,"items",2);fr([K()],Ft.prototype,"selected",2);fr([K()],Ft.prototype,"heading",2);fr([K()],Ft.prototype,"message",2);fr([K()],Ft.prototype,"confirmLabel",2);Ft=fr([nt("table-select-dialog")],Ft);function ko(e,t){return e.every((r,i)=>r.field===t[i]?.field)?null:r=>{const i={};for(let n=0;n<e.length;n++)i[t[n].field]=r[e[n].field];return i}}function Hi(e,t,r=[]){const i=new Set(e.map(c=>c.field)),n=new Set(r),s=[...e],a=[];for(const c of t)i.has(c.field)||n.has(c.field)||(s.push(c),a.push(c.field),i.add(c.field));return{columns:s,newFields:a}}function tc(e,t){const r=new Set([...e].map(n=>n.toLowerCase())),i=t.trim()||"imported";if(!r.has(i.toLowerCase()))return i;for(let n=2;;n++){const s=`${i}-${n}`;if(!r.has(s.toLowerCase()))return s}}async function nc(e,t){return(await e.store.tables.find()).filter(r=>r.workspaceId===t).map(r=>r.name)}async function hh(e,t,r,i){const{workspaceId:n,importerId:s,target:a,maxRows:c}=i;let u,p,w,b=!1,$=0,D,P=null;const S=q=>e.store.rows(q),B=async q=>{if(b)return!0;if(a.kind==="new"){let Q=q.columns??[];if(i.editColumns){const J=await i.editColumns(Q);if(J===null)return!1;P=ko(Q,J),Q=J}u=it(),p=tc(await nc(e,n),t);const X={id:u,workspaceId:n,name:p,code:Tt(p),columns:Q,view:"table",...i.origin?{origin:i.origin}:{},updatedAt:Date.now()};await e.store.tables.insert(X),w=!0}else{const Q=await e.store.tables.findOne(a.tableId);if(!Q)throw new Error("The table to import into no longer exists.");if(u=Q.id,p=Q.name,w=!1,a.kind==="overwrite"){const X=await S(u).find();await S(u).bulkRemove(X.map(J=>J.id))}if(q.columns?.length){const X=Hi(Q.columns,q.columns,Q.deletedColumns??[]);X.newFields.length>0&&await e.store.tables.patch(u,{columns:X.columns,updatedAt:Date.now()})}}return e.events.emit("import:before",{source:s,tableId:u}),b=!0,!0};for await(const q of r){if(c!=null&&$>=c)break;if(!await B(q))return null;q.totalCount!=null&&(D=q.totalCount);let Q=q.rows;if(c!=null&&$+Q.length>c&&(Q=Q.slice(0,c-$)),Q.length===0)continue;P&&(Q=Q.map(P));const X=Date.now(),J=Q.map(W=>({id:it(),tableId:u,data:W,updatedAt:X}));await S(u).bulkInsert(J),$+=J.length,i.onProgress?.($,D)}return!b&&!await B({})?null:(e.events.emit("import:after",{source:s,tableId:u,rowCount:$}),{tableId:u,tableName:p,rowCount:$,created:w})}function La(e,t,r={}){const i=t.mode==="reference"||t.maxRows!=null;return{api:e,fetchText:(n,s)=>Ui(e,n,s??"Reading…",i?{maxBytes:null}:{}),panel:t.panel??{},...t.cursor!==void 0?{cursor:t.cursor}:{},...t.maxRows!==void 0?{maxRows:t.maxRows}:{},...r}}async function fh(e,t){if(t.length<=1)return t;const r=await _i(t.map(i=>({name:i.name,size:i.rowCount,...i.detail!==void 0?{detail:i.detail}:{},...i.hidden!==void 0?{hidden:i.hidden}:{}})),{title:`Import from ${e.label}`,message:`This source offers ${t.length} tables. Choose which to import.`,confirmLabel:"Import"});return r?r.map(i=>t[i]):null}async function ph(e,t,r,i,n){if(!t.reference)throw new Error(`${t.label} cannot be referenced — import a copy instead.`);const s=t.reference(r,i);let a=[];for await(const p of t.read(r,i)){a=p.columns??[];break}if(a.length===0)throw new Error("No columns found in the referenced data.");const c=tc(await nc(e,n),i.name),u=it();return await e.store.tables.insert({id:u,workspaceId:n,name:c,code:Tt(c),columns:a,view:"table",source:s,updatedAt:Date.now()}),{tableId:u,tableName:c,rowCount:0,created:!0}}async function rc(e,t,r,i){const n=e.workspaceId();if(!n)throw new Error("No active workspace.");const s=La(e,i),a=await t.list(s,r);if(a.length===0)throw new Error("No tables found at that source.");const c=await fh(t,a);if(c===null)return{landed:[],failed:[],cancelled:!0};const u=[],p=[];for(const w of c)try{if(i.mode==="reference"){u.push(await ph(e,t,s,w,n));continue}const b=i.target;let $;b.kind!=="new"&&($=(await e.store.tables.findOne(b.tableId))?.columns);const D=La(e,i,{...$?{targetColumns:$}:{}}),P=t.read(D,w),S=i.origin??(r.kind==="url"&&r.url?{type:t.id,url:r.url}:void 0),B=await hh(e,w.name,P,{workspaceId:n,importerId:t.id,target:b,...S?{origin:S}:{},...i.editColumns?{editColumns:i.editColumns}:{},...i.maxRows!==void 0?{maxRows:i.maxRows}:{}});if(B===null)return{landed:u,failed:p,cancelled:!0};u.push(B)}catch(b){p.push({name:w.name,error:b?.message??String(b)})}return{landed:u,failed:p,cancelled:!1}}const mh={id:"json-import",name:"JSON Import",type:"importer",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"/><path d="M16 3a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/json-import.ts"};function gh(e){e.ui.registerImporter(ic),e.ui.registerDropHandler(async t=>{const i=Sh(t).filter(_h);if(i.length===0)return!1;t.preventDefault();for(const n of i)await yh(e,n);return!0})}function Co(e){return mt(e)?Ys(e)?!0:Array.isArray(e.tables):!1}function bh(e){return e.kind==="file"&&e.file?Ds(e.file.name):e.kind==="url"&&e.url?Ds(ur(e.url)):Ds(e.name??"imported")}const ic={id:"json",label:"JSON (array of objects or a dump)",icon:"data_object",order:20,accept:[".json",".db.json","application/json"],samples:[{label:"Northwind — sample database (JSON dump)",url:"https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json"}],supports:{url:!0,file:!0,text:!0,reference:!0,multiTable:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??"";if(/\.db\.json$/i.test(t))return 1;if(/\.json$/i.test(t))return .95;if(e.file?.type==="application/json")return .9;const r=(e.text??"").trimStart();return r.startsWith("{")||r.startsWith("[")?.3:0},async list(e,t){let r;t.kind==="file"&&t.file?r=await t.file.text():t.kind==="url"&&t.url?r=await e.fetchText(t.url,`Reading ${ur(t.url)}…`):r=t.text??"";const i=bh(t);let n;try{n=JSON.parse(r)}catch(a){throw new Error(`Invalid JSON in ${i}: ${a.message}`)}const s=qi(n,i);return s.map(a=>({name:a.name,rowCount:a.rows.length,handle:{table:a,input:t,single:s.length===1}}))},async*read(e,t){const{table:r}=t.handle;yield{columns:r.columns,rows:r.rows}},reference(e,t){const{input:r,single:i}=t.handle;if(r.kind!=="url"||!r.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");if(!i)throw new Error("That URL holds several tables, so a reference would be ambiguous. Import a copy instead.");return{type:"url",config:{url:r.url,format:"json"}}}};function Ds(e){return e.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported"}async function yh(e,t){const r=await t.text();let i;try{i=JSON.parse(r)}catch(a){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${t.name}: ${a.message}`)});return}if(Co(i)){await Eo(e,r,t.name);return}const n=await rc(e,ic,{kind:"text",text:r,name:t.name},{mode:"copy",target:{kind:"new"}}),s=n.landed.reduce((a,c)=>a+c.rowCount,0);n.landed.length>0&&e.ui.dialogs.toast(`Imported ${t.name} (${s.toLocaleString()} rows).`,{kind:"success",title:"Import"})}async function Eo(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("json-import: no active workspace");let s;try{s=JSON.parse(t)}catch(B){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${r}: ${B.message}`)});return}const a=r.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",c=qi(s,a);if(c.length===0)return;let u=c;if(c.length>1){const B=await _i(c.map(q=>({name:q.name,size:q.rows.length})),{title:"Import tables",message:`"${r}" contains ${c.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!B)return;u=B.map(q=>c[q])}const p=(await e.store.tables.find()).filter(B=>B.workspaceId===n),w=new Set(u.map(B=>B.name)),b=p.filter(B=>w.has(B.name));let $;if(b.length===0&&u.length===1)$="append-new";else{const B=b.length>0?[`Overwrite matching (${b.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],q=await e.ui.dialogs.choice(`Importing ${u.length} table${u.length===1?"":"s"} from "${r}".${b.length>0?`

${b.length} table${b.length===1?"":"s"} share a name with existing data.`:""}`,B,"JSON import");if(!q)return;q.startsWith("Overwrite matching")?$="overwrite-matching":q==="Replace entire workspace"?$="replace-workspace":$="append-new"}const D=2e3,P=u.reduce((B,q)=>B+(q.source?0:Math.min(q.rows.length,i.maxRows??1/0)),0);let S=null;if(P>=D){const{TopProgress:B}=await ln(async()=>{const{TopProgress:q}=await import("./top-progress-tjFOYMjp.js");return{TopProgress:q}},[]);S=B.begin(`Importing ${r}…`)}try{if($==="replace-workspace")for(const X of p){const J=e.store.rows(X.id),W=await J.find();await J.bulkRemove(W.map(Z=>Z.id)),await e.store.tables.remove(X.id)}const B=new Map(p.map(X=>[X.name,X])),q=new Map;let Q=0;for(const X of u){const J=X.source,W=X.origin??(!J&&i.originUrl?{type:"json",url:i.originUrl}:void 0);let Z;const de=$==="overwrite-matching"?B.get(X.name):void 0;let we=X.columns,Te=X.rows;if(i.editColumns&&!de&&!J){const m=await i.editColumns(we,X.name);if(m===null)continue;Te=Eh(Te,we,m),we=m}if(de){if(Z=de.id,!de.source){const m=e.store.rows(Z),x=await m.find();await m.bulkRemove(x.map(I=>I.id))}await e.store.tables.patch(Z,{columns:we,...X.title?{title:X.title}:{},...X.windowGeometry?{windowGeometry:X.windowGeometry}:{},...X.sortColumn?{sortColumn:X.sortColumn,sortAsc:X.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},...X.filters?{filters:X.filters}:{},...X.labelColumn?{labelColumn:X.labelColumn}:{},...X.info?{info:X.info}:{},...X.deletedColumns?{deletedColumns:X.deletedColumns}:{},source:J??void 0,origin:W??void 0,updatedAt:Date.now()})}else Z=it(),e.events.emit("import:before",{source:"json",tableId:Z}),await e.store.tables.insert({id:Z,workspaceId:n,name:X.name,code:Tt(X.name),columns:we,view:"table",...X.title?{title:X.title}:{},...X.windowGeometry?{windowGeometry:X.windowGeometry}:{},...X.sortColumn?{sortColumn:X.sortColumn,sortAsc:X.sortAsc??!0}:{},...X.filters?{filters:X.filters}:{},...X.labelColumn?{labelColumn:X.labelColumn}:{},...X.info?{info:X.info}:{},...X.deletedColumns?{deletedColumns:X.deletedColumns}:{},...J?{source:J}:{},...W?{origin:W}:{},updatedAt:Date.now()});q.set(X.name,Z);let Pe=0;if(!J){const m=e.store.rows(Z),I=(i.maxRows!=null?Te.slice(0,i.maxRows):Te).map(y=>({id:it(),tableId:Z,data:y,updatedAt:Date.now()}));await m.bulkInsert(I),Pe=I.length,Q+=Pe,S?.fraction(P>0?Q/P:1)}e.events.emit("import:after",{source:"json",tableId:Z,rowCount:Pe})}await wh(e,s,n,q,$==="replace-workspace")}finally{S?.done()}document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function wh(e,t,r,i,n){if(!mt(t))return;const s=t,a=Array.isArray(s.viewTemplates)?s.viewTemplates:[],c=Array.isArray(s.viewInstances)?s.viewInstances:[];if(!(a.length===0&&c.length===0)){if(n){const u=(await e.store.viewInstances.find()).filter(p=>p.workspaceId===r);await e.store.viewInstances.bulkRemove(u.map(p=>p.id))}for(const u of a)!mt(u)||typeof u.id!="string"||await e.store.viewTemplates.upsert({...u,workspaceId:r});for(const u of c){if(!mt(u)||typeof u.id!="string")continue;const p=(u.tableName?i.get(u.tableName):void 0)??u.tableId;p&&await e.store.viewInstances.upsert({...u,workspaceId:r,tableId:p})}}}function qi(e,t){if(mt(e)&&Ys(e))return Fa(e);if(mt(e)&&Array.isArray(e.tables)){const r=e,i=[];for(const n of r.tables){if(xh(n)){const s=n,a=mt(s.windowGeometry)?s.windowGeometry:void 0,c=typeof s.sortColumn=="string"?s.sortColumn:void 0,u=typeof s.sortAsc=="boolean"?s.sortAsc:void 0,p=typeof s.title=="string"?s.title:void 0,w=mt(s.filters)?s.filters:void 0,b=typeof s.labelColumn=="string"?s.labelColumn:void 0,$=mt(s.info)?s.info:void 0,D=Array.isArray(s.deletedColumns)?s.deletedColumns.filter(B=>typeof B=="string"):void 0,P=mt(s.source)&&typeof s.source.type=="string"?s.source:void 0,S=mt(s.origin)&&typeof s.origin.type=="string"&&typeof s.origin.url=="string"?s.origin:void 0;i.push({name:String(n.name),columns:n.columns.map($h),rows:Array.isArray(n.rows)?n.rows.filter(mt):[],...p?{title:p}:{},...a?{windowGeometry:a}:{},...c?{sortColumn:c,sortAsc:u??!0}:{},...w?{filters:w}:{},...b?{labelColumn:b}:{},...$?{info:$}:{},...D?{deletedColumns:D}:{},...P?{source:P}:{},...S?{origin:S}:{}});continue}mt(n)&&Ys(n)&&i.push(...Fa(n))}return i}if(Array.isArray(e)){const r=e.filter(mt);return r.length===0?[]:[{name:t,...Ma(r)}]}return mt(e)?[{name:t,...Ma([e])}]:[]}function Ys(e){for(const[t,r]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!mt(r))continue;const i=r;if(Array.isArray(i.dataArray)&&Array.isArray(i.columns))return!0}return!1}function Fa(e){const t=[];for(const[r,i]of Object.entries(e)){if(!/\.table\.json$/.test(r)||!mt(i))continue;const n=i;if(!Array.isArray(n.dataArray)||!Array.isArray(n.columns))continue;const s=r.replace(/\.table\.json$/,""),a=n.columns.map(w=>vh(w)),c=a.map(w=>w.field),u=n.dataArray.filter(w=>Array.isArray(w)).map(w=>{const b={};for(let $=0;$<c.length;$++)b[c[$]]=w[$];return b}),p={name:s,columns:a,rows:u};if(n.elementRect&&typeof n.elementRect.x=="number"&&typeof n.elementRect.y=="number"){const w=n.elementRect;p.windowGeometry={x:w.x,y:w.y,w:w.width??600,h:w.height??400,z:w.zIndex??100,minimized:!!w.minimized,maximized:!!w.maximized}}typeof n.sortColumn=="number"&&n.sortColumn>=0&&n.sortColumn<c.length&&(p.sortColumn=c[n.sortColumn],p.sortAsc=(n.sortDirection??"asc")!=="desc"),t.push(p)}return t}function vh(e){const t=String(e.field??"col"),r=String(e.name??t),i=typeof e.type=="string"?e.type:"string",n={field:t,label:r,type:i};return e.isUnique&&(n.unique=!0),e.isNotNull&&(n.notnull=!0),n}function xh(e){return mt(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function $h(e){if(!mt(e))return{field:"col",label:"Col",type:"string"};const t=e,r=String(t.field??"col");let i=typeof t.type=="string"?t.type:"string",n=typeof t.renderer=="string"?t.renderer:void 0;(i==="color"||i==="image")&&(n=n??i,i="string");const s={field:r,label:String(t.label??r),type:i};return n&&(s.renderer=n),typeof t.script=="string"&&(s.script=t.script),s}function Ma(e){const t=new Set;for(const n of e)for(const s of Object.keys(n))t.add(s);return{columns:Array.from(t).map(n=>({field:n,label:n,type:kh(e.map(s=>s[n]))})),rows:e}}function kh(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&Ch(r))?"date":"string"}function Ch(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}([T ]\d{1,2}:\d{2}(:\d{2})?)?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}([T ]\d{1,2}:\d{2})?$/.test(t))}function Eh(e,t,r){const i=ko(t,r);return i?e.map(i):e}function mt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Sh(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function _h(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}const Th=Object.freeze(Object.defineProperty({__proto__:null,init:gh,isWorkspaceDump:Co,meta:mh,parsedToTables:qi,restoreWorkspaceDump:Eo},Symbol.toStringTag,{value:"Module"}));var Ah=Object.defineProperty,Ih=Object.getOwnPropertyDescriptor,So=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ih(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Ah(t,r,n),n};let pi=null;function Ph(){return pi||(pi=document.createElement("anchored-menu"),document.body.appendChild(pi)),pi}let Xn=class extends Ue{constructor(){super(...arguments),this.items=[],this.shown=!1,this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.finish(null)},this.onKey=e=>{e.key==="Escape"&&(e.preventDefault(),this.finish(null))}}static open(e,t){return Ph().openMenu(e,t)}connectedCallback(){super.connectedCallback(),this.setAttribute("hidden","")}openMenu(e,t){return this.items=t,this.style.left=`${Math.round(e.left)}px`,this.style.top=`${Math.round(e.bottom+4)}px`,this.removeAttribute("hidden"),this.shown=!0,this.updateComplete.then(()=>{const r=this.shadowRoot?.querySelector(".menu");if(!r)return;const i=r.getBoundingClientRect();i.bottom>window.innerHeight&&(this.style.top=`${Math.round(e.top-i.height-4)}px`)}),new Promise(r=>{this.resolveFn=r,setTimeout(()=>{document.addEventListener("mousedown",this.onOutside,!0),document.addEventListener("keydown",this.onKey,!0)},0)})}finish(e){this.setAttribute("hidden",""),this.shown=!1,document.removeEventListener("mousedown",this.onOutside,!0),document.removeEventListener("keydown",this.onKey,!0);const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}render(){return this.shown?_`
      <div class="menu" role="menu">
        ${this.items.map(e=>_`
            <button
              role="menuitem"
              class=${e.danger?"danger":""}
              @click=${()=>this.finish(e.id)}
            >
              ${e.icon?_`<span class="mi">${e.icon}</span>`:""}
              <span>${e.label}</span>
            </button>
          `)}
      </div>
    `:_``}};Xn.styles=[qt,We`
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
    `];So([K()],Xn.prototype,"items",2);So([K()],Xn.prototype,"shown",2);Xn=So([nt("anchored-menu")],Xn);const zr=Object.freeze(Object.defineProperty({__proto__:null,get AnchoredMenu(){return Xn}},Symbol.toStringTag,{value:"Module"})),Xs='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Rh={id:"connect-menu",name:"Connect",type:"ui",version:"0.1.0",description:"Header Connect button listing every registered live-backend connector. Chrome only — it knows no backend.",author:"Marc Cawood",icon:Xs,repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/connect-menu.ts"};function Dh(e){e.ui.registerHeaderButton({id:"connect-menu:open",label:"Connect",icon:Xs,tooltip:"Connect a live table on a remote backend (rows are never stored locally)",onClick:(t,r)=>Ba(t,r?.anchor)}),e.ui.registerCommand({id:"connect-menu:open",title:"Connect a live table…",group:"Data",icon:Xs,keywords:["datasette","live","remote","backend"],run:t=>Ba(t)})}async function Oh(){const{registries:e}=await fe();return[...e.connectors].sort((t,r)=>(t.order??Number.MAX_SAFE_INTEGER)-(r.order??Number.MAX_SAFE_INTEGER))}async function Ba(e,t){const r=await Oh();if(r.length===0){await e.ui.dialogs.alert("No backends are installed to connect to. Install a connector plugin from the Plugin Manager first.","Connect");return}let i=r[0];if(r.length>1){const n=t?.getBoundingClientRect(),s=n?await Xn.open(n,r.map(a=>({id:a.id,label:a.label,icon:a.icon}))):await e.ui.dialogs.choice("Which backend do you want to connect to?",r.map(a=>a.label),"Connect");if(!s)return;i=n?r.find(a=>a.id===s):r.find(a=>a.label===s)}if(i)try{await i.connect(e)}catch(n){await e.ui.dialogs.alert(n?.message??String(n),`Connect ${i.label} failed`)}}const jh=Object.freeze(Object.defineProperty({__proto__:null,init:Dh,meta:Rh},Symbol.toStringTag,{value:"Module"}));function Na(e,t){return JSON.stringify(t.map(r=>e[r]))}function zh(e,t){return t.every(r=>e[r]!==null&&e[r]!==void 0)}function sc(e){const{oldRows:t,freshRows:r,pks:i,userAddedFields:n,deletedRemoteFields:s=[]}=e,a=new Set(s),c=b=>{const $={...b};for(const D of a)delete $[D];return $};if(!(i.length>0&&r.every(b=>zh(b,i))))return{data:r.map(c),merged:!1};const p=new Map;for(const b of t){const $=Na(b.data,i);p.has($)||p.set($,b)}return{data:r.map(b=>{const $=c(b),D=Na(b,i),P=p.get(D);if(P)for(const S of n)Object.prototype.hasOwnProperty.call(P.data,S)&&($[S]=P.data[S]);return $}),merged:!0}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oc=Symbol.for(""),Lh=e=>{if(e?.r===oc)return e?._$litStatic$},Ua=e=>({_$litStatic$:e,r:oc}),Ha=new Map,Fh=e=>(t,...r)=>{const i=r.length;let n,s;const a=[],c=[];let u,p=0,w=!1;for(;p<i;){for(u=t[p];p<i&&(s=r[p],(n=Lh(s))!==void 0);)u+=n+t[++p],w=!0;p!==i&&c.push(s),a.push(u),p++}if(p===i&&a.push(t[i]),w){const b=a.join("$$lit$$");(t=Ha.get(b))===void 0&&(a.raw=a,Ha.set(b,t=a)),r=c}return e(t,...r)},qa=Fh(_);function Wa(e){return e==null||String(e).trim()===""}function ac(e){const t=[];let r="",i=!1,n=!1,s=!1,a=!1,c=!1,u=!0;const p=()=>{const w=s?r:r.trim();(i||a)&&t.push(c?{term:w,negate:a,prefix:c}:{term:w,negate:a}),r="",i=!1,n=!1,s=!1,a=!1,c=!1,u=!0};for(let w=0;w<e.length;w++){const b=e[w];if(b==='"'){if(n&&e[w+1]==='"'){r+='"',i=!0,w++;continue}n=!n,s=!0,i=!0,u=!1;continue}if(b===","&&!n){p();continue}if(b==="!"&&!n&&u&&!a&&!c){a=!0;continue}if(b==="^"&&!n&&u&&!c){c=!0;continue}u&&!n&&/\s/.test(b)||(u=!1),r+=b,/\s/.test(b)||(i=!0)}return p(),t}function Mh(e){return e.includes(",")||e.includes('"')||e!==e.trim()||e===""||e.startsWith("!")||e.startsWith("^")}function lc(e){return e.map(t=>{const r=t.term===""&&t.negate?"":Mh(t.term)?`"${t.term.replace(/"/g,'""')}"`:t.term;return(t.negate?"!":"")+(t.prefix?"^":"")+r}).join(",")}function Ka(e,t){const r=t.term;if(r.trim()===""||!t.prefix&&r.toUpperCase()==="NULL")return Wa(e);const i=String(e??"").toLowerCase(),n=r.toLowerCase();return t.prefix?i.startsWith(n):i.includes(n)}function Ti(e,t){const r=ac(t);if(r.length===0)return!0;for(const n of r)if(n.negate&&Ka(e,n))return!1;const i=r.filter(n=>!n.negate);return i.length===0?!0:i.some(n=>Ka(e,n))}var Bh=Object.defineProperty,Nh=Object.getOwnPropertyDescriptor,pr=(e,t,r,i)=>{for(var n=i>1?void 0:i?Nh(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Bh(t,r,n),n};function Os(e){return lc([{...e,negate:!1}])}let Mt=class extends Ue{constructor(){super(...arguments),this.values=[],this.blanks=0,this.current="",this.search="",this.states=new Map,this.resolveFn=null,this.onChange=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,r,i=0,n){return this.values=t,this.blanks=i,this.onChange=n??null,this.states=new Map(ac(r??"").map(s=>[Os(s),{state:s.negate?"not":"on",token:s}])),this.current=r??"",this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(s=>{this.resolveFn=s,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}cycle(e){const t={term:e,negate:!1},r=Os(t),i=new Map(this.states),n=i.get(r);n===void 0?i.set(r,{state:"on",token:t}):n.state==="on"?i.set(r,{state:"not",token:n.token}):i.delete(r),this.states=i;const s=[...i.values()].map(a=>({...a.token,negate:a.state==="not"}));this.current=lc(s),this.onChange?.(this.current)}close(e){this.onChange=null,document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),Mt.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),Mt.instance===this&&(Mt.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(a=>a.value.toLowerCase().includes(e)),r=this.blanks>0&&"(blanks)".includes(e),i=a=>this.states.get(Os({term:a,negate:!1}))?.state,n=a=>_`
      <span class=${`cb${a?` ${a}`:""}`}
        >${a==="on"?"✓":a==="not"?"✕":""}</span
      >
    `,s=a=>a==="on"?"Included — click to exclude":a==="not"?"Excluded — click to clear":"Click to include → exclude → off";return _`
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
      ${t.length===0&&!r?_`<div class="empty">No matching values.</div>`:_`<ul>
            ${r?_`
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
            ${t.slice(0,500).map(a=>{const c=i(a.value);return _`
                <li title=${s(c)} @click=${()=>this.cycle(a.value)}>
                  <span class="left">
                    ${n(c)}
                    <span class="label">${a.value}</span>
                  </span>
                  <span class="count">${a.count}</span>
                </li>
              `})}
          </ul>`}
      ${this.values.length>500?_`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      <div class="actions">
        <button
          class="text"
          @click=${()=>{this.states=new Map,this.close({clear:!0})}}
        >
          Clear filter
        </button>
        <span style="color:#6b7280">${t.length} value${t.length===1?"":"s"}</span>
      </div>
    `}};Mt.instance=null;Mt.styles=[qt,We`
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
    `];pr([Ht({type:Array})],Mt.prototype,"values",2);pr([Ht({type:Number})],Mt.prototype,"blanks",2);pr([Ht({type:String})],Mt.prototype,"current",2);pr([K()],Mt.prototype,"search",2);pr([K()],Mt.prototype,"states",2);Mt=pr([nt("filter-popover")],Mt);var Uh=Object.defineProperty,Hh=Object.getOwnPropertyDescriptor,cn=(e,t,r,i)=>{for(var n=i>1?void 0:i?Hh(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Uh(t,r,n),n};let Ut=class extends Ue{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const r=t[this.highlightIdx];r!==void 0?(e.preventDefault(),this.onPick(r)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const r=[];for(const i of this.options)if(i.toLowerCase().includes(t)&&(r.push(i),r.length>=500))break;return r}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=this.open&&e.length>0,r=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return _`
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
        ${this.value?_`<button
              type="button"
              class="clear"
              title="Clear filter"
              tabindex="-1"
              @mousedown=${i=>i.preventDefault()}
              @click=${this.onClear}
            >
              ×
            </button>`:pe}
      </div>
      ${t?_`<ul
            class="dropdown"
            style=${r}
            @mousedown=${i=>i.preventDefault()}
          >
            ${e.map((i,n)=>_`
                <li
                  class=${n===this.highlightIdx?"highlighted":""}
                  @mousedown=${s=>s.preventDefault()}
                  @click=${()=>this.onPick(i)}
                >
                  ${i}
                </li>
              `)}
          </ul>`:pe}
    `}};Ut.styles=We`
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
  `;cn([Ht({type:String})],Ut.prototype,"value",2);cn([Ht({type:Array})],Ut.prototype,"options",2);cn([Ht({type:String})],Ut.prototype,"placeholder",2);cn([K()],Ut.prototype,"open",2);cn([K()],Ut.prototype,"highlightIdx",2);cn([K()],Ut.prototype,"dropTop",2);cn([K()],Ut.prototype,"dropLeft",2);cn([K()],Ut.prototype,"dropMinWidth",2);cn([K()],Ut.prototype,"editing",2);cn([yn("input")],Ut.prototype,"inputEl",2);Ut=cn([nt("filter-combobox")],Ut);function qh(e){const t=e.trim(),r=t.split(/\s+/).filter(Boolean);if(!r.some(c=>c==="AND"||c==="OR"))return{kind:"plain",phrase:t.toLowerCase(),words:r.map(c=>c.toLowerCase())};const n=[];let s=[];for(const c of r)c==="OR"?(n.push(s),s=[]):c==="AND"||s.push(c.toLowerCase());n.push(s);const a=n.filter(c=>c.length>0);return a.length===0?{kind:"plain",phrase:t.toLowerCase(),words:[]}:{kind:"boolean",groups:a}}function Wh(e,t,r){const i=qh(t);if(i.kind==="boolean")return e.filter(u=>i.groups.some(p=>p.every(w=>r(u,w))));const{phrase:n,words:s}=i;if(s.length<=1)return n===""?e:e.filter(u=>r(u,n));const a=e.filter(u=>r(u,n));if(a.length>0)return a;const c=e.filter(u=>s.every(p=>r(u,p)));return c.length>0?c:e.filter(u=>s.some(p=>r(u,p)))}const Kh=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function Ai(e,t,r){const i=new Map;for(const c of r)i.set(c.field.toLowerCase(),c.field),c.label&&i.set(c.label.toLowerCase(),c.field);const n=[...i.keys()].filter(Boolean).sort((c,u)=>u.length-c.length);let s=t;return n.length>0&&(s=s.replace(new RegExp(`(^|\\s)(${n.map(Kh).join("|")}):\\s+`,"gi"),"$1$2:")),Wh(e,s,(c,u)=>{const p=u.indexOf(":");if(p>0){const w=i.get(u.slice(0,p));if(w)return Ti(c.data[w],u.slice(p+1))}return Object.values(c.data).some(w=>w!=null&&String(w).toLowerCase().includes(u))})}const Va=new Map;function Vh(e){const t=Va.get(e);if(t)return t;const r=new Function("row",`${e}
return render(row);`);return Va.set(e,r),r}function Gh(e,t){if(!e||!e.trim())return{ok:!1,label:"no script",message:""};let r;try{r=Vh(e)}catch(i){return{ok:!1,label:"compile error",message:Ga(i)}}try{return{ok:!0,value:r(t)}}catch(i){return{ok:!1,label:"runtime error",message:Ga(i)}}}function Ga(e){return e instanceof Error?e.message:String(e)}const Ii="easydb:visible-count";function cc(e,t,r){e&&document.dispatchEvent(new CustomEvent(Ii,{detail:{key:e,count:t,total:r}}))}function dc(e,t){return e<0||t<0?"":e===t?` (${t})`:` (${e}/${t})`}const uc="#dc2626",hc="cell-invalid",Yh=`border-color:${uc};background:#fef2f2`;function _o(e,t){e.classList.add(hc),e.style.border=`1px solid ${uc}`,e.style.background="#fef2f2",t&&(e.title=t)}const Xh=/^\s*(true|1)\s*$/i,Qh=/^\s*(false|0)\s*$/i;function Jh(e){return e===!0||e===1?"true":e===!1||e===0?"false":e==null?"empty":typeof e=="string"?e.trim()===""?"empty":Xh.test(e)?"true":Qh.test(e)?"false":"invalid":"invalid"}var Zh=Object.defineProperty,ef=Object.getOwnPropertyDescriptor,ht=(e,t,r,i)=>{for(var n=i>1?void 0:i?ef(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Zh(t,r,n),n};const tf=200,nf=10,js=32;let ot=class extends Ue{constructor(){super(...arguments),this.tableId="",this.viewInstanceId="",this.columns=[],this.rows=[],this.sortColumn=null,this.sortDir=null,this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.viewInst=null,this.tableColumns=[],this.renderedCount=0,this.lastEmittedCount=-1,this.lastEmittedTotal=-1,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;(t.tableId===this.tableId||this.viewMode&&t.tableId===this.viewInstanceId)&&(this.localQuery=t.query??"")},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}get viewMode(){return!!this.viewInstanceId}get readOnlyView(){return this.viewMode&&!!this.viewInst?.readonly}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.()}async updated(e){(e.has("tableId")||e.has("viewInstanceId"))&&this.tableId&&(this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.markEmptyCells(),this.emitCount()}emitCount(){const e=this.viewMode?this.viewInstanceId:this.tableId;if(!e)return;const t=this.renderedCount,r=this.rows.length;t===this.lastEmittedCount&&r===this.lastEmittedTotal||(this.lastEmittedCount=t,this.lastEmittedTotal=r,cc(e,t,r))}markEmptyCells(){const e=this.shadowRoot?.querySelectorAll("tbody tr:not(.spacer) > td");if(e)for(const t of e)t.className.startsWith("t-")&&t.classList.toggle("is-null",rf(t))}async bind(){if(!this.tableId)return;const e=await fe(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.viewMode?(this.tableColumns=t.columns,this.viewInst=await e.store.viewInstances.findOne(this.viewInstanceId)??null,this.applyView(),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const s=n.find(a=>a.id===this.tableId);s&&(this.tableColumns=s.columns,this.applyView())}),this.viewSubUnsub?.(),this.viewSubUnsub=e.store.viewInstances.subscribe(n=>{const s=n.find(a=>a.id===this.viewInstanceId);s&&(this.viewInst=s,this.applyView())})):(this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const s=n.find(a=>a.id===this.tableId);s&&this.applyTable(s)})),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const r=e.store.rows(this.tableId);this.unsubscribe=r.subscribe(n=>this.rows=n);const i=window.setTimeout(()=>this.loading=!0,tf);try{this.rows=await r.find()}catch(n){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${n?.message??String(n)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(i),this.loading=!1}}applyTable(e){this.columns=e.columns,this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}applyView(){const e=this.viewInst;if(!e)return;const t=new Map(this.tableColumns.map(i=>[i.field,i])),r=e.columnWidths??{};this.columns=e.visibleColumns.map(i=>t.get(i)).filter(i=>!!i).map(i=>{const n=r[i.field];return typeof n=="number"?{...i,width:n}:i}),this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}async setCell(e,t,r){const i=await fe();await this.commitCell(i,e,t,r)}async commitCell(e,t,r,i){const n=this.columns.find(s=>s.field===r);if(n){const s=sf(n,i,this.rows,t.id);if(s){await e.api.ui.dialogs.alert(s,`Cannot save ${n.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[r]:i},updatedAt:Date.now()})}catch(s){await e.api.ui.dialogs.alert(s?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}cancelCellEdit(e,t){if(e.key!=="Escape")return;e.stopPropagation();const r=e.target;typeof t=="boolean"?r.checked=t:r.value=t,r.blur()}renderInvalidCell(e,t,r,i){const n=String(r);return _`<input
      type="text"
      class=${hc}
      style=${Yh}
      title=${i}
      .value=${n}
      @keydown=${s=>this.cancelCellEdit(s,n)}
      @change=${s=>this.setCell(e,t.field,s.target.value)}
    />`}renderReadonlyCell(e,t){return e.type==="boolean"?_`<input type="checkbox" .checked=${t===!0||t==="true"||t===1||t==="1"} disabled />`:t==null||t===""?_``:e.type==="date"?_`${mi(t)}`:e.type==="datetime"?_`${gi(t).replace("T"," ")}`:_`${String(t)}`}renderScriptedCell(e,t){const r=Gh(t.script,e.data);if(!r.ok)return _`<span class="script-err" title=${r.message}>⚠ ${r.label}</span>`;const i=t.renderer?this.cellRenderers?.get(t.renderer):void 0;if(!i)return _`${r.value==null?"":String(r.value)}`;const n=Ua(i);return qa`<${n}
      .value=${r.value??""}
      .column=${t}
      .row=${e.data}
      .readonly=${!0}
    ></${n}>`}renderCell(e,t){const r=e.data[t.field];if(t.script?.trim())return this.renderScriptedCell(e,t);const i=t.renderer,n=i?this.cellRenderers?.get(i):void 0;if(n){const s=Ua(n);return qa`<${s}
        .value=${r??""}
        .column=${t}
        .row=${e.data}
        .readonly=${this.readOnlyView}
        @change=${a=>this.setCell(e,t.field,a.detail.value)}
      ></${s}>`}if(this.readOnlyView)return this.renderReadonlyCell(t,r);switch(t.type){case"date":return Ya(r,mi(r))?this.renderInvalidCell(e,t,r,`Not a valid date: "${String(r)}"`):_`<input
          type="date"
          .value=${mi(r)}
          @keydown=${s=>this.cancelCellEdit(s,mi(r))}
          @change=${s=>this.setCell(e,t.field,s.target.value||null)}
        />`;case"datetime":return Ya(r,gi(r))?this.renderInvalidCell(e,t,r,`Not a valid datetime: "${String(r)}"`):_`<input
          type="datetime-local"
          .value=${gi(r)}
          @keydown=${s=>this.cancelCellEdit(s,gi(r))}
          @change=${s=>this.setCell(e,t.field,s.target.value||null)}
        />`;case"number":{const s=r==null||r==="";return!s&&Number.isNaN(Number(r))?this.renderInvalidCell(e,t,r,`Not a valid number: "${String(r)}"`):_`<input
          type="number"
          .value=${s?"":String(r)}
          @keydown=${a=>this.cancelCellEdit(a,s?"":String(r))}
          @change=${a=>{const c=a.target.value;this.setCell(e,t.field,c===""?null:Number(c))}}
        />`}default:return _`<input
          type="text"
          .value=${String(r??"")}
          @keydown=${s=>this.cancelCellEdit(s,String(r??""))}
          @change=${s=>this.setCell(e,t.field,s.target.value)}
        />`}}async deleteRow(e){const t=await fe();try{await t.store.rows(this.tableId).remove(e)}catch(r){await t.api.ui.dialogs.alert(r?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e){let t;this.sortColumn!==e?t="asc":this.sortDir==="asc"?t="desc":this.sortDir==="desc"?t=null:t="asc",this.sortColumn=t?e:null,this.sortDir=t;const r=await fe(),i=t?{sortColumn:e,sortAsc:t==="asc",updatedAt:Date.now()}:{sortColumn:void 0,sortAsc:void 0,updatedAt:Date.now()};this.viewMode?await r.store.viewInstances.patch(this.viewInstanceId,i):await r.store.tables.patch(this.tableId,i)}filteredRows(){const e=Object.entries(this.filters).filter(([,n])=>n&&n.trim().length>0),t=this.globalQuery.trim(),r=this.localQuery.trim();if(e.length===0&&t.length===0&&r.length===0)return this.rows;let i=this.rows;return e.length>0&&(i=i.filter(n=>e.every(([s,a])=>Ti(n.data[s],a)))),r&&(i=Ai(i,r,this.columns)),t&&(i=Ai(i,t,this.columns)),i}sortedRows(){const e=this.filteredRows();if(!this.sortColumn||!this.sortDir)return e;const t=this.sortColumn,i=this.columns.find(a=>a.field===t)?.type??"string",n=this.sortDir==="asc"?1:-1,s=[...e];return s.sort((a,c)=>{const u=a.data[t],p=c.data[t],w=D=>D==null?0:D===""?1:2,b=w(u),$=w(p);return b!==2||$!==2?(b-$)*n:of(u,p,i)*n}),s}async openFilterPicker(e,t){e.stopPropagation();const r=e.currentTarget,i=Mt.instance;if(!i)return;const n=new Map;let s=0;for(const u of this.rowsFacetedFor(t)){const p=u.data[t];if(p==null||String(p).trim()===""){s++;continue}const w=String(p);n.set(w,(n.get(w)??0)+1)}const a=[...n.entries()].map(([u,p])=>({value:u,count:p})).sort((u,p)=>p.count-u.count||u.value.localeCompare(p.value)),c=await i.open(r.getBoundingClientRect(),a,this.filters[t]??"",s,u=>this.onFilterInput(t,u));c!==null&&(typeof c=="object"&&"clear"in c?this.onFilterInput(t,""):typeof c=="string"&&this.onFilterInput(t,c))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>{this.filterSaveTimer=null,this.saveFilters()},250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=Object.entries(this.filters).filter(([r,i])=>i&&i.trim().length>0&&r!==e);return t.length===0?this.rows:this.rows.filter(r=>t.every(([i,n])=>Ti(r.data[i],n)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const r=50,i=500;for(const n of this.visibleColumns){let s=!0;for(const c of t){const u=c.data[n.field];if(u==null)continue;if((typeof u=="string"?u:String(u)).length>=r){s=!1;break}}if(!s)continue;const a=new Set;for(const c of this.rowsFacetedFor(n.field)){const u=c.data[n.field];if(u==null||u==="")continue;const p=typeof u=="string"?u:String(u);if(!(p.length>=r)&&(a.add(p),a.size>=i))break}e.set(n.field,[...a].sort())}return e}freezeColumnWidths(){const e=this.renderRoot.querySelector("thead tr");if(!e)return;const t=Array.from(e.querySelectorAll(":scope > th")),r=this.visibleColumns,i=new Map;r.forEach((n,s)=>{if(n.width!=null)return;const a=t[s];a&&i.set(n.field,Math.round(a.getBoundingClientRect().width))}),i.size!==0&&(this.columns=this.columns.map(n=>i.has(n.field)?{...n,width:i.get(n.field)}:n))}onResizeStart(e,t,r){e.preventDefault(),e.stopPropagation();const i=r.offsetWidth;this.freezeColumnWidths(),this.resizing={field:t,startX:e.clientX,startW:i};const n=a=>{if(!this.resizing)return;const c=a.clientX-this.resizing.startX,u=Math.max(nf,this.resizing.startW+c);this.columns=this.columns.map(p=>p.field===this.resizing.field?{...p,width:u}:p)},s=async()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",s);const a=this.resizing?.field;if(this.resizing=null,!a)return;const c=await fe();if(this.viewMode){const u={...this.viewInst?.columnWidths??{}};for(const p of this.columns)typeof p.width=="number"&&(u[p.field]=p.width);await c.store.viewInstances.patch(this.viewInstanceId,{columnWidths:u,updatedAt:Date.now()})}else await c.store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",n),window.addEventListener("pointerup",s)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,r){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientX<i.left+i.width/2;this.dropTargetField=t,this.dropEdge=n?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const r=this.dragSourceField,i=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!r||r===t||!i)return;const n=[...this.columns],s=n.findIndex(p=>p.field===r);if(s<0)return;const[a]=n.splice(s,1);let c=n.findIndex(p=>p.field===t);if(c<0){n.splice(s,0,a);return}i==="after"&&(c+=1),n.splice(c,0,a);const u=await fe();this.viewMode?await u.store.viewInstances.patch(this.viewInstanceId,{visibleColumns:n.map(p=>p.field),updatedAt:Date.now()}):await u.store.tables.patch(this.tableId,{columns:n,updatedAt:Date.now()})}async saveFilters(){const e=await fe(),t={};for(const[i,n]of Object.entries(this.filters))n&&n.trim().length>0&&(t[i]=n);if(this.viewMode){await e.store.viewInstances.patch(this.viewInstanceId,{filters:t,updatedAt:Date.now()});return}const r=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:r,updatedAt:Date.now()})}tableSizingStyle(e){return e.length===0||!e.every(r=>typeof r.width=="number")?null:`table-layout: fixed; width: ${e.reduce((r,i)=>r+(i.width??0),0)+js}px; min-width: 0`}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,r=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,i=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),n=Math.min(e.length,i+r);return{slice:e.slice(i,n),topPad:i*t,bottomPad:(e.length-n)*t}}render(){const e=this.sortedRows();this.renderedCount=e.length;const t=this.visibleColumns,{slice:r,topPad:i,bottomPad:n}=this.virtualSlice(e),s=this.computeFilterSuggestions(),a=this.externalLoading?this.externalProgress:null;return _`
      ${this.loading||this.externalLoading?_`<div
            class="load-bar"
            role="progressbar"
            aria-label="Loading rows"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow=${a!=null?Math.round(a*100):pe}
          >
            <div
              class="load-bar-fill ${a!=null?"determinate":""}"
              style=${a!=null?`width:${Math.max(2,Math.round(a*100))}%`:pe}
            ></div>
          </div>`:pe}
      <table style=${this.tableSizingStyle(t)??pe}>
        <colgroup>
          ${t.map(c=>_`<col style=${c.width!=null?`width: ${c.width}px`:""} />`)}
          <col style="width:${js}px" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(c=>{const u=c.sortable!==!1,p=this.sortColumn===c.field&&this.sortDir,w=u?p==="asc"?"▲":p==="desc"?"▼":"⇅":"",b=`t-${c.type}`,$=this.dragSourceField===c.field,D=this.dropTargetField===c.field,P=D&&this.dropEdge==="before"?" drop-before":D&&this.dropEdge==="after"?" drop-after":"",S=(c.description?`${c.description}
`:"")+(c.units?`Units: ${c.units}
`:"")+`${c.field} — ${u?"click to sort, ":"not sortable · "}drag to reorder`;return _`
                <th
                  class=${`${b}${p?" sorted":""}${$?" drag-source":""}${P}${u?"":" no-sort"}`}
                  title=${S}
                  @click=${()=>u&&this.toggleSort(c.field)}
                  @dragover=${B=>this.onColDragOver(B,c.field,B.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(c.field)}
                  @drop=${B=>this.onColDrop(B,c.field)}
                >
                  <div class="col-head">
                    <span
                      class="col-grip mi sm"
                      title="Drag to reorder column"
                      draggable="true"
                      @click=${B=>B.stopPropagation()}
                      @dragstart=${B=>this.onColDragStart(B,c.field)}
                      @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                      >drag_indicator</span
                    ><span class="col-label"
                      >${c.label}${c.units?_`<span class="col-units"> (${c.units})</span>`:""}</span
                    ><span class="sort-icon">${w}</span>
                    <button
                      class=${`funnel${this.filters[c.field]?" active":""}`}
                      title="Filter by value"
                      @click=${B=>this.openFilterPicker(B,c.field)}
                    >
                      <span class="mi sm">filter_list</span>
                    </button>
                  </div>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${B=>B.stopPropagation()}
                    @pointerdown=${B=>this.onResizeStart(B,c.field,B.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:${js}px"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(c=>{const u=s.get(c.field)??[];return _`
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
          ${i>0?_`<tr class="spacer" style=${`height:${i}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${r.map(c=>_`
              <tr>
                ${t.map(u=>_`<td class=${`t-${u.type}${u.renderer?` r-${u.renderer}`:""}`}>
                      ${this.renderCell(c,u)}
                    </td>`)}
                <td>
                  <button class="danger" title="Delete row" @click=${()=>this.deleteRow(c.id)}>
                    <span class="mi sm">delete</span>
                  </button>
                </td>
              </tr>
            `)}
          ${n>0?_`<tr class="spacer" style=${`height:${n}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
        </tbody>
      </table>
    `}};ot.styles=[qt,We`
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
        /* An editable cell is an <input>, which clips its value flat — the td's
           own text-overflow can't reach inside it. Inputs honor text-overflow
           themselves while unfocused, so a narrow column ellipses its text and
           still reveals the whole value once you click into it. */
        text-overflow: ellipsis;
      }
      .mi.sm {
        font-size: 1rem;
      }
    `];ht([Ht({type:String})],ot.prototype,"tableId",2);ht([Ht({type:String})],ot.prototype,"viewInstanceId",2);ht([K()],ot.prototype,"columns",2);ht([K()],ot.prototype,"rows",2);ht([K()],ot.prototype,"sortColumn",2);ht([K()],ot.prototype,"sortDir",2);ht([K()],ot.prototype,"filters",2);ht([K()],ot.prototype,"globalQuery",2);ht([K()],ot.prototype,"localQuery",2);ht([K()],ot.prototype,"dragSourceField",2);ht([K()],ot.prototype,"dropTargetField",2);ht([K()],ot.prototype,"dropEdge",2);ht([K()],ot.prototype,"resizing",2);ht([K()],ot.prototype,"cellRenderers",2);ht([K()],ot.prototype,"scrollY",2);ht([K()],ot.prototype,"viewportHeight",2);ht([K()],ot.prototype,"loading",2);ht([K()],ot.prototype,"externalLoading",2);ht([K()],ot.prototype,"externalProgress",2);ot=ht([nt("data-table")],ot);function rf(e){if((e.textContent??"").trim()!==""||e.querySelector("img"))return!1;const t=e.querySelectorAll("input");for(const r of Array.from(t))if(r.type==="checkbox"||r.value!=="")return!1;return!0}function sf(e,t,r,i){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&r.find(s=>s.id!==i&&s.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function mi(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function gi(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}function Ya(e,t){return e==null||typeof e=="string"&&e.trim()===""?!1:t===""}function of(e,t,r){switch(r){case"number":{const i=Number(e),n=Number(t);return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}case"boolean":return(e?1:0)-(t?1:0);case"date":{const i=new Date(String(e)).getTime(),n=new Date(String(t)).getTime();return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function pn(e,t,r){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:r}}))}class Bt extends Error{constructor(t,r){const i=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(i),this.name="DatasetteError",this.status=r??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function bn(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const r=t.pathname.split("/").filter(Boolean),i={};for(const[c,u]of t.searchParams)i[c]=u;let n,s=null,a=null;if(r.length>=2){a=decodeURIComponent(r[r.length-1]),s=decodeURIComponent(r[r.length-2]);const c=r.slice(0,r.length-2).join("/");n=t.origin+(c?"/"+c:"")}else r.length===1&&(s=decodeURIComponent(r[0])),n=t.origin;return{base:n,db:s,table:a,query:i}}function lr(e,t={}){const r=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[i,n]of Object.entries({...e.query,...t}))n!=null&&r.searchParams.set(i,String(n));return r.toString()}function af(e){const t=e?.next_url??null,r=e?.next,i=r!=null&&r!==!1?String(r):null,n=Array.isArray(e?.rows)?e.rows:[],s=Array.isArray(e?.columns)?e.columns:null;return{rows:n.map(c=>Array.isArray(c)&&s?Object.fromEntries(s.map((u,p)=>[u,c[p]])):c),nextUrl:t,nextToken:i,hasMore:t!=null||i!=null,truncated:e?.truncated===!0}}function lf(e,t=""){const r=String(e||"").toUpperCase();return r.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":r.includes("REAL")||r.includes("FLOA")||r.includes("DOUB")||r.includes("NUM")||r.includes("DEC")?"number":r.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function Xa(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],r=Array.isArray(e?.columns)?e.columns.slice():[],i={},n=e?.column_details;if(Array.isArray(n))for(const c of n)i[c.column??c.name]=c;else n&&typeof n=="object"&&Object.assign(i,n);for(const c of r)c in i||(i[c]={});const a=(r.length?r:Object.keys(i)).map(c=>{const u=i[c]||{},p=u.is_pk===!0||u.is_pk===1||t.includes(c),w={field:c,label:fc(c),type:lf(u.sqlite_type??u.type,c)};return(u.notnull===!0||u.notnull===1||p)&&(w.notnull=!0),p&&(w.unique=!0),(u.hidden===!0||u.hidden===1)&&(w.hidden=!0),u.default!=null&&u.default!==""&&(w.default=u.default),w});if(t.length===0){const c=a.filter(u=>u.unique).map(u=>u.field);c.length&&t.push(...c)}return{columns:a,pks:t}}function fc(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function Wi(e){const t=[],r=new Set;for(const i of e)for(const n of Object.keys(i))r.has(n)||(r.add(n),t.push(n));return t.map(i=>({field:i,label:fc(i),type:cf(e.map(n=>n[i]))}))}function cf(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&df(r))?"datetime":"string"}function df(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function uf(e){const t=new TextEncoder().encode(String(e));let r="";for(const i of t){const n=String.fromCharCode(i);/[A-Za-z0-9_-]/.test(n)?r+=n:r+="~"+i.toString(16).toUpperCase().padStart(2,"0")}return r}function hf(e,t){return!t||t.length===0?null:t.map(r=>uf(e[r])).join(",")}function ff(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],r=[];for(const i of t){if(typeof i=="string"){r.push(i);continue}if(i&&typeof i=="object"&&typeof i.name=="string"){if(i.name==="_memory")continue;r.push(typeof i.route=="string"&&i.route?i.route:i.name)}}return r}function pf(e,t){const r=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],i=[];for(const n of r){if(typeof n=="string"){i.push({db:t,table:n,count:null,hidden:!1,pks:[]});continue}n&&typeof n=="object"&&typeof n.name=="string"&&i.push({db:t,table:n.name,count:typeof n.count=="number"?n.count:null,hidden:n.hidden===!0,pks:Array.isArray(n.primary_keys)?n.primary_keys:[]})}return i}async function On(e,t){let r;try{r=await e(t)}catch(n){const s=n?.message||"network error";throw new Bt({error:`Couldn't reach ${t} (${s}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(r&&r.ok===!1){let n=null;try{n=await r.json()}catch{}throw new Bt(n&&typeof n=="object"?n:{error:`HTTP ${r.status} for ${t}`},r.status)}const i=await r.json();if(i&&i.ok===!1)throw new Bt(i,r.status);return i}async function To(e,t){return ff(await On(e,`${t}/-/databases.json`))}async function Pi(e,t,r){return pf(await On(e,`${t}/${encodeURIComponent(r)}.json`),r)}async function Ki(e,t){const r=lr(t,{_extra:"column_details"}),i=await On(e,r);let{columns:n,pks:s}=Xa(i),a=!!i&&i.column_details!=null,c=i?.count??null,u=i;if(n.length===0){const p=lr(t,{_extra:"columns"}),w=await On(e,p);({columns:n,pks:s}=Xa(w)),a=!!w&&w.column_details!=null,c=w?.count??c,u=w}return{columns:n,pks:s,count:c,typed:a,raw:u}}async function Qs(e,t){if(!t.db||!t.table)throw new Error("probeSingleTable: URL must name a database and a table");const r=await Ki(e,t);return{db:t.db,table:t.table,count:r.count,hidden:!1,pks:r.pks}}function mf(e,t,r){const i=e&&typeof e=="object"?e:{},n=t&&r&&i.databases?.[t]?.tables?.[r]||t&&r&&i.databases?.[t]?.tables?.[r.toLowerCase()]||{},s=t&&i.databases?.[t]||{},a=P=>n[P]??s[P]??i[P],c={columns:{},units:{}};typeof n.sort=="string"&&(c.sort=n.sort),typeof n.sort_desc=="string"&&(c.sortDesc=n.sort_desc),typeof n.size=="number"&&(c.size=n.size),Array.isArray(n.sortable_columns)&&(c.sortableColumns=n.sortable_columns.slice()),typeof n.label_column=="string"&&(c.labelColumn=n.label_column),n.hidden===!0&&(c.hidden=!0),typeof n.description=="string"&&(c.description=n.description),typeof n.description_html=="string"&&(c.descriptionHtml=n.description_html);const u=a("source"),p=a("source_url"),w=a("license"),b=a("license_url"),$=a("about"),D=a("about_url");if(typeof u=="string"&&(c.source=u),typeof p=="string"&&(c.sourceUrl=p),typeof w=="string"&&(c.license=w),typeof b=="string"&&(c.licenseUrl=b),typeof $=="string"&&(c.about=$),typeof D=="string"&&(c.aboutUrl=D),n.columns&&typeof n.columns=="object")for(const[P,S]of Object.entries(n.columns))typeof S=="string"&&(c.columns[P]=S);if(n.units&&typeof n.units=="object")for(const[P,S]of Object.entries(n.units))typeof S=="string"&&(c.units[P]=S);return c}const Qa=new Map;async function gf(e,t){let r=Qa.get(t);return r||(r=On(e,`${t}/-/metadata.json`).catch(()=>({})),Qa.set(t,r)),r}async function Ao(e,t){const r=await gf(e,t.base);return mf(r,t.db,t.table)}function bf(e){const t={};return e.description!=null&&(t.description=e.description),e.descriptionHtml!=null&&(t.descriptionHtml=e.descriptionHtml),e.source!=null&&(t.source=e.source),e.sourceUrl!=null&&(t.sourceUrl=e.sourceUrl),e.license!=null&&(t.license=e.license),e.licenseUrl!=null&&(t.licenseUrl=e.licenseUrl),e.about!=null&&(t.about=e.about),e.aboutUrl!=null&&(t.aboutUrl=e.aboutUrl),Object.keys(t).length>0?t:void 0}function Io(e,t){const r=e.sortableColumns!=null?new Set(e.sortableColumns):null,i=t.map(c=>{const u=e.columns[c.field],p=e.units[c.field],w=r?r.has(c.field):void 0;return u==null&&p==null&&w===void 0?c:{...c,...u!=null?{description:u}:{},...p!=null?{units:p}:{},...w!==void 0?{sortable:w}:{}}}),n=new Set(t.map(c=>c.field)),s={};e.sort&&n.has(e.sort)?(s.sortColumn=e.sort,s.sortAsc=!0):e.sortDesc&&n.has(e.sortDesc)&&(s.sortColumn=e.sortDesc,s.sortAsc=!1);const a=bf(e);return a&&(s.info=a),e.labelColumn&&n.has(e.labelColumn)&&(s.labelColumn=e.labelColumn),{columns:i,patch:s}}function Po(e,t){if(t.length===0)return e;const r=new Map(Wi(t).map(i=>[i.field,i.type]));return e.map(i=>{if(i.type!=="string")return i;const n=r.get(i.field);return n&&n!=="string"?{...i,type:n}:i})}async function Nr(e,t,r={}){const i=r.maxRows??1e4,s={_size:r.pageSize??1e3,...r.extraParams||{}};let a=r.startUrl??lr(t,s);const c=[];let u=!1,p=!1,w=0,b,$;for(;a;){let D;try{D=await On(e,a)}catch(B){if(c.length===0&&!r.startUrl)throw B;b=B instanceof Bt&&B.status?`stopped after ${c.length} rows: HTTP ${B.status}`:`stopped after ${c.length} rows: ${B?.message??String(B)}`,p=!0,$=a;break}const P=af(D);c.push(...P.rows),u=u||P.truncated,w+=1,r.onProgress?.(c.length);const S=P.nextUrl!=null?P.nextUrl:P.nextToken!=null?lr(t,{_next:P.nextToken}):null;S&&c.length<i&&P.rows.length>0?a=S:(p=S!=null&&P.rows.length>0,p&&($=S??void 0),a=null)}return{rows:c,truncated:u,hasMore:p,pages:w,error:b,nextUrl:$}}function yf(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function pc(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function mc(e,t,r){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${r}`}async function Vi(e,t,r,i){let n;try{n=await e(t,{method:"POST",headers:yf(i),body:JSON.stringify(r)})}catch(a){throw new Bt({error:`Couldn't reach ${t} (${a?.message||"network error"}).`},0)}if(n&&n.ok===!1){let a=null;try{a=await n.json()}catch{}throw new Bt(a&&typeof a=="object"?a:{error:`HTTP ${n.status} for ${t}`},n.status)}const s=await n.json();if(s&&s.ok===!1)throw new Bt(s,n.status);return s}async function Ja(e,t,r,i={}){const n=await Vi(e,pc(t,"insert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function wf(e,t,r,i,n={}){const s=await Vi(e,mc(t,r,"update"),{update:i,return:!0},n.token);return s&&typeof s.row=="object"&&s.row?s.row:Array.isArray(s?.rows)&&s.rows[0]?s.rows[0]:null}async function Za(e,t,r,i={}){await Vi(e,mc(t,r,"delete"),{},i.token)}async function vf(e,t,r,i={}){const n=await Vi(e,pc(t,"upsert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function xf(e,t){const r=lr(t,{_extra:"primary_keys"}),i=await On(e,r);return Array.isArray(i?.primary_keys)?i.primary_keys:[]}async function gc(e,t){try{const r=await On(e,lr(t,{_extra:"count"}));return typeof r?.count=="number"?r.count:null}catch{return null}}async function bc(e,t,r={}){const i=r.token?{headers:{Authorization:`Bearer ${r.token}`}}:void 0;try{const n=await e(`${t}/-/versions.json`,i);if(n&&n.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${n.status}`};const s=await n.json(),a=s?.datasette?.version??s?.version??null;let c=null;try{c=(await(await e(`${t}/-/actor.json`,i)).json())?.actor??null}catch{}return{reachable:!0,version:a,actor:c,writable:!!(r.token&&c)}}catch(n){return{reachable:!1,version:null,actor:null,writable:!1,error:n?.message||"unreachable"}}}function cr(e,t){return t?(r,i)=>{const n=(i??{}).headers??{};return e(r,{...i??{},headers:{...n,Authorization:`Bearer ${t}`}})}:e}const Ri=e=>e.replace(/^https?:\/\//,""),on={maxImportRows:1e4,pageSize:1e3};function $f(e,t,r){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(r)}`}function Ro(e,t,r,i){const n={...e.info??{}};return!n.source&&!n.sourceUrl&&(n.source=`${Ri(t)}/${r}/${i}`,n.sourceUrl=$f(t,r,i)),{...e,info:n}}function yc(e,t){if(!e.has(t))return t;for(let r=2;;r++){const i=`${t} (${r})`;if(!e.has(i))return i}}async function wc(e,t,r,i={}){if(t.db&&t.table)return[await Qs(e,t)];const n=[];if(t.db){if(n.push(...await Pi(e,t.base,t.db)),i.skipPicker)return n.filter(c=>!c.hidden)}else{const c=await To(e,t.base);if(c.length===0)return[];let u=c;if(c.length>1){const p=await _i(c.map(w=>({name:w,size:null})),{title:`${r} from Datasette`,message:`Choose databases on ${Ri(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!p)return null;u=p.map(w=>c[w])}for(const p of u)try{n.push(...await Pi(e,t.base,p))}catch{}}if(n.length===0)return[];const s=new Set(n.map(c=>c.db)).size>1,a=await _i(n.map(c=>({name:s?`${c.db}/${c.table}`:c.table,size:c.count,detail:s?void 0:c.db,hidden:c.hidden})),{title:`${r} from Datasette`,message:`Choose tables to ${r.toLowerCase()} from ${Ri(t.base)}.`,confirmLabel:r});return a?a.map(c=>n[c]):null}const kf=e=>new Promise(t=>setTimeout(t,e));function Cf(){const e=globalThis.__eda_resumeDelayMs;return typeof e=="number"&&e>=0?e:6e4}function Do(e,t,r,i){if(!(!e||!t))return{nextUrl:t,loadedRows:r,...i!=null?{totalCount:i}:{}}}const Ef={id:"datasette-import",name:"Datasette Import",type:"importer",version:"0.3.0",description:"Import snapshot tables from any online Datasette instance, database, or single table by URL",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-import.ts"},Sf="https://latest.datasette.io/fixtures/facetable";function _f(e){e.ui.registerTableButton({id:"datasette:refresh-snapshot",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this snapshot from the Datasette table it came from",visible:t=>t.origin?.type==="datasette"&&t.source?.type!=="datasette",onClick:(t,{tableId:r})=>Df(t,r)}),e.ui.registerTableButton({id:"datasette:resume",label:"Resume import",icon:"sync_problem",tooltip:"Import was interrupted — click to resume from where it stopped",danger:!0,visible:t=>t.origin?.type==="datasette"&&t.importResume!=null,onClick:(t,{tableId:r})=>jf(t,r)}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:r}){const i=r||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${Sf}`,"","Import from Datasette");i&&await el(t,i)}}),e.ui.registerDropHandler(async(t,r)=>{const i=t.dataTransfer?.getData("text/plain")||"";return Tf(i)?(t.preventDefault(),await el(r,i),!0):!1})}async function el(e,t){try{await Oo(e,t)}catch(r){let i;r instanceof Bt?i=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:i=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(i,"Datasette import failed")}}function Tf(e){try{const t=bn(e);return!!(t.db&&t.table)}catch{return!1}}async function Oo(e,t,r={}){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=bn(t),a=await wc(P=>e.backend.fetch(P),n,"Import",{skipPicker:r.skipTablePicker});if(a===null)return;if(a.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const c=[];let u=0;for(const P of a){const S={base:n.base,db:P.db,table:P.table,query:{}},B=await Af(e,i,S);if(B.skipped){u+=1;continue}c.push({tableId:B.tableId,ref:S,overwrite:B.overwrite,knownCount:P.count})}let p=0,w=0;const b=[],$=[],D=[];for(const P of c)try{const S=await If(e,P.tableId,P.ref,P.overwrite,P.knownCount,r);p+=1,w+=S.rowCount,S.error?$.push(`${P.ref.db}/${P.ref.table} (${S.error})`):(S.hasMore||S.truncated)&&b.push(`${P.ref.db}/${P.ref.table}`)}catch(S){D.push(`${P.ref.db}/${P.ref.table}: ${S?.message??String(S)}`)}Rf(e,{imported:p,skipped:u,totalRows:w,capped:b,partial:$,failed:D,requested:a.length})}async function Af(e,t,r){const i=`${r.db}/${r.table}`,n={type:"datasette",url:`${r.base}/${encodeURIComponent(r.db)}/${encodeURIComponent(r.table)}`},s=(await e.store.tables.find()).filter(p=>p.workspaceId===t),a=s.find(p=>p.name.toLowerCase()===i.toLowerCase());let c=i;if(a){const p=await e.ui.dialogs.choice(`A table named "${i}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!p||p==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(p==="Overwrite")return await e.store.tables.patch(a.id,{origin:n,updatedAt:Date.now()}),{tableId:a.id,overwrite:!0};c=yc(new Set(s.map(w=>w.name)),i)}const u=it();return await e.store.tables.insert({id:u,workspaceId:t,name:c,code:Tt(`${r.db}-${r.table}`),columns:[],view:"table",origin:n,updatedAt:Date.now()}),{tableId:u,overwrite:!1}}async function If(e,t,r,i,n=null,s={}){const a=`${r.db}/${r.table}`,c=p=>e.backend.fetch(p),u=s.maxRows!=null?Math.min(s.maxRows,on.maxImportRows):on.maxImportRows;pn(t,!0);try{let p=[],w=n,b=!1,$=[];try{const Y=await Ki(c,r);p=Y.columns,w=w??Y.count,b=Y.typed,$=Y.pks??[]}catch{}w==null&&(w=await gc(c,r));const D=w&&w>0?Math.min(w,u):0,P=[];let S=!1,B=!1,q=0,Q,X,J;for(;;){const Y=await Nr(c,r,{maxRows:Math.max(0,u-P.length),pageSize:on.pageSize,...J?{startUrl:J}:{},onProgress:st=>{D>0&&pn(t,!0,Math.min(1,(P.length+st)/D))}});if(P.push(...Y.rows),S=S||Y.truncated,q+=Y.pages,B=Y.hasMore,Q=Y.error,X=Y.nextUrl,!Y.error||!Y.nextUrl||P.length>=u||await e.ui.dialogs.choice(`Import of "${a}" paused after ${P.length.toLocaleString()} rows (${Y.error}). Datasette may be rate-limiting a large import. Wait 60 seconds and resume from where it stopped, or cancel and keep the rows imported so far (you can resume later from the table's footer)?`,["Resume in 60s","Cancel"],"Import paused — rate limited?")!=="Resume in 60s")break;pn(t,!0),e.ui.dialogs.toast(`Resuming "${a}" in 60s…`,{kind:"info",title:"Import paused"}),await kf(Cf()),J=Y.nextUrl,Q=void 0,X=void 0}let Z=p.length===0?Wi(P):b?p:Po(p,P),de={};try{const Y=await Ao(c,r),Fe=Io(Y,Z);Z=Fe.columns,de=Fe.patch}catch{}de=Ro(de,r.base,r.db,r.table);const we=await e.store.tables.findOne(t),Te=we?.columns??[],Pe=Te.length===0;let{columns:m}=Hi(Te,Z,we?.deletedColumns),x=P;if(s.editColumns&&Pe){const Y=await s.editColumns(m,a);if(Y===null)return{name:a,rowCount:0,hasMore:!1,truncated:!1,pages:q,count:w,error:Q};x=Pf(x,m,Y),m=Y}const I=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t});const y=Do(Q,X,P.length,w),k=$.length>0&&we?.origin?{origin:{...we.origin,pks:$}}:{},he=Pe?{columns:m,...de,...k,importResume:y,updatedAt:I}:{columns:m,...de.info?{info:de.info}:{},...k,importResume:y,updatedAt:I};await e.store.tables.patch(t,he);const ge=e.store.rows(t);if(i){const Y=await ge.find();await ge.bulkRemove(Y.map(Fe=>Fe.id))}const G=x.map(Y=>({id:it(),tableId:t,data:Y,updatedAt:I}));return await ge.bulkInsert(G),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:G.length}),{name:a,rowCount:G.length,hasMore:B,truncated:S,pages:q,count:w,error:Q}}finally{pn(t,!1)}}function Pf(e,t,r){const i=ko(t,r);return i?e.map(i):e}function Rf(e,t){const r=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,i=`${t.imported} table${t.imported===1?"":"s"}`,n=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${i} (${r});${n} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.partial.length>0){e.ui.dialogs.toast(`Imported ${i} (${r}).${n} ${t.partial.length} loaded partially (stopped early — the server may have rate-limited us): ${t.partial.join(", ")}. Use Refresh to fetch the rest.`,{kind:"warning",title:"Datasette import"});return}if(t.capped.length>0){e.ui.dialogs.toast(`Imported ${i} (${r}).${n} ${t.capped.length} capped at ${on.maxImportRows} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${i} (${r}) from Datasette.${n}`,{kind:"success",title:"Datasette import"})}async function Df(e,t){const r=await e.store.tables.findOne(t);if(!(!r?.origin?.url||r.origin.type!=="datasette"))try{await Of(e,r)}catch(i){const n=i instanceof Bt?i.message:i?.message??String(i);e.ui.dialogs.toast(`Refresh failed: ${n}`,{kind:"error",title:"Refresh"})}}async function Of(e,t){const r=bn(t.origin.url),i=u=>e.backend.fetch(u);pn(t.id,!0);let n,s=[];try{let u=[],p=null,w=!1;try{const k=await Ki(i,r);u=k.columns,p=k.count,w=k.typed}catch{}p==null&&(p=await gc(i,r));const b=p&&p>0?Math.min(p,on.maxImportRows):0,{rows:$,hasMore:D,truncated:P,error:S,nextUrl:B}=await Nr(i,r,{maxRows:on.maxImportRows,pageSize:on.pageSize,onProgress:k=>{b>0&&pn(t.id,!0,Math.min(1,k/b))}});let q=u.length===0?Wi($):w?u:Po(u,$),Q={};try{const k=await Ao(i,r),he=Io(k,q);q=he.columns,Q=he.patch}catch{}Q=Ro(Q,r.base,r.db,r.table);const X=t.columns.length===0,J=Hi(t.columns,q,t.deletedColumns);s=J.newFields;const W=Date.now(),Z=Do(S,B,$.length,p),de=X?{columns:J.columns,...Q,importResume:Z,updatedAt:W}:{columns:J.columns,...Q.info?{info:Q.info}:{},importResume:Z,updatedAt:W};await e.store.tables.patch(t.id,de);const we=t.origin?.pks??[],Te=new Set(q.map(k=>k.field)),Pe=t.columns.map(k=>k.field).filter(k=>!Te.has(k)&&!we.includes(k)),m=(t.deletedColumns??[]).filter(k=>Te.has(k)),x=e.store.rows(t.id),I=await x.find(),{data:y}=sc({oldRows:I.map(k=>({data:k.data})),freshRows:$,pks:we,userAddedFields:Pe,deletedRemoteFields:m});await x.bulkRemove(I.map(k=>k.id)),await x.bulkInsert(y.map(k=>({id:it(),tableId:t.id,data:k,updatedAt:W}))),n={rowCount:y.length,hasMore:D,truncated:P,error:S}}finally{pn(t.id,!1)}const a=[];n.error?a.push(`partial (${n.error})`):(n.hasMore||n.truncated)&&a.push(`capped at ${on.maxImportRows}`),s.length>0&&a.push(`${s.length} new column${s.length===1?"":"s"}`);const c=a.length?` — ${a.join(", ")}`:"";e.ui.dialogs.toast(`Refreshed ${n.rowCount} rows from ${r.db}/${r.table}${c}.`,{kind:n.error||n.hasMore||n.truncated||s.length>0?"warning":"success",title:"Refresh"}),s.length>0&&zf(t.id,r,s)}async function jf(e,t){const r=await e.store.tables.findOne(t),i=r?.importResume;if(!r||!r.origin?.url||!i)return;const n=bn(r.origin.url),s=$=>e.backend.fetch($),a=i.loadedRows,c=i.totalCount??null,u=c&&c>0?Math.min(c,on.maxImportRows):0;pn(t,!0,u>0?Math.min(1,a/u):void 0);let p=0,w;try{const $=await Nr(s,n,{startUrl:i.nextUrl,maxRows:Math.max(0,on.maxImportRows-a),pageSize:on.pageSize,onProgress:S=>{u>0&&pn(t,!0,Math.min(1,(a+S)/u))}});p=$.rows.length;const D=Date.now();await e.store.rows(t).bulkInsert($.rows.map(S=>({id:it(),tableId:t,data:S,updatedAt:D}))),w={error:$.error,nextUrl:$.nextUrl};const P=Do($.error,$.nextUrl,a+p,c);await e.store.tables.patch(t,{importResume:P,updatedAt:D})}catch($){const D=$ instanceof Bt?$.message:$?.message??String($);e.ui.dialogs.toast(`Couldn't resume ${n.db}/${n.table}: ${D}. Try again later.`,{kind:"error",title:"Resume import"});return}finally{pn(t,!1)}const b=a+p;w.error?e.ui.dialogs.toast(`Resumed ${n.db}/${n.table}: +${p} rows (${b} total) — interrupted again (${w.error}). Resume to continue.`,{kind:"warning",title:"Resume import"}):e.ui.dialogs.toast(`Finished ${n.db}/${n.table}: +${p} rows (${b} total).`,{kind:"success",title:"Resume import"})}function zf(e,t,r){const i=r.join(", "),n=r.length!==1,s=`Refreshing ${t.db}/${t.table} revealed ${r.length} new column${n?"s":""}: ${i}. Review, reorder or hide ${n?"them":"it"} here.`;document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:e,notice:s}}))}const Lf=Object.freeze(Object.defineProperty({__proto__:null,importDatasette:Oo,init:_f,meta:Ef},Symbol.toStringTag,{value:"Module"}));var Ff=Object.defineProperty,Mf=Object.getOwnPropertyDescriptor,Ur=(e,t,r,i)=>{for(var n=i>1?void 0:i?Mf(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Ff(t,r,n),n};const Bf="https://latest.datasette.io/ephemeral";let Xt=class extends Ue{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=async e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const r=this.token.trim();if(this.onConnect){this.status="Checking…",this.statusKind="busy";try{await this.onConnect(t,r)}catch(i){this.status=i?.message??String(i),this.statusKind="err";return}}this.finish({url:t,token:r})}}connectedCallback(){super.connectedCallback(),Xt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Xt.instance===this&&(Xt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,this.onConnect=e.onConnect,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return _`
      <dialog @cancel=${this.onCancel} @keydown=${Zt}>
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
                placeholder="e.g. ${Bf}"
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
    `}};Xt.instance=null;Xt.styles=[Jt,We`
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
    `];Ur([K()],Xt.prototype,"url",2);Ur([K()],Xt.prototype,"token",2);Ur([K()],Xt.prototype,"status",2);Ur([K()],Xt.prototype,"statusKind",2);Xt=Ur([nt("datasette-connect-dialog")],Xt);class Nf extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function vc(e){return`datasette:token:${e}`}function Uf(e,t){for(const[r,i]of Object.entries(t))if(r!=="data"&&e[r]!==i)return!1;return!0}function Hf(e,t){const r=e.source,i=r?.config??{},n={base:i.base,db:i.db,table:i.table,query:{}},s=Array.isArray(i.pks)&&i.pks.length>0?i.pks:["rowid"],a=r?.writable===!0,c=i.maxRows??1e4,u=i.pollIntervalMs??0,p=(J,W)=>t.backend.fetch(J,W);async function w(){const W=(await t.settings.findOne(vc(i.base)))?.value;return typeof W=="string"&&W.length>0?W:void 0}const b=async(J,W)=>cr(p,await w())(J,W);function $(J){return{id:hf(J,s)??it(),tableId:e.id,data:J,updatedAt:Date.now()}}function D(J){if(!a)throw new Nf(J)}function P(J){const W={};for(const[Z,de]of Object.entries(J))s.includes(Z)||(W[Z]=de);return W}const S=new Set;let B=[],q=!1,Q=null;function X(){return Q||(Q=(async()=>{try{const{rows:J}=await Nr(b,n,{maxRows:c});B=J.map($),q=!0;for(const W of S)W(B);return B}finally{Q=null}})(),Q)}return{async find(J){const W=q?B:await X();return!J||Object.keys(J).length===0?W:W.filter(Z=>Uf(Z,J))},async findOne(J){return(q?B:await X()).find(Z=>Z.id===J)??null},async insert(J){D("insert");const[W]=await Ja(b,n,[J.data]),Z=$(W??J.data);return t.events.emit("row:created",{tableId:e.id,row:Z}),X(),Z},async bulkInsert(J){if(J.length===0)return[];D("insert");const W=await Ja(b,n,J.map(de=>de.data)),Z=(W.length?W:J.map(de=>de.data)).map($);return X(),Z},async upsert(J){D("upsert");const[W]=await vf(b,n,[J.data]),Z=$(W??J.data);return X(),Z},async patch(J,W){D("update");const Z=W.data,de=P(Z??{}),we=await wf(b,n,J,de),Te=$(we??{...Z??{}});return t.events.emit("row:updated",{tableId:e.id,row:Te,prev:Te}),X(),Te},async remove(J){D("delete"),await Za(b,n,J),t.events.emit("row:deleted",{tableId:e.id,rowId:J}),X()},async bulkRemove(J){if(J.length!==0){D("delete");for(const W of J)await Za(b,n,W);X()}},subscribe(J){S.add(J),q?J(B):X();let W=null;return u>0&&(W=setInterval(()=>void X(),u)),()=>{S.delete(J),W&&clearInterval(W)}},async refresh(){await X()}}}const qf='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Wf={id:"datasette-connect",name:"Datasette Connect",type:"source",version:"0.3.0",description:"Connect a live, editable table on any Datasette instance — rows are never stored locally",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-connect.ts"};function Kf(e){e.ui.registerConnector({id:"datasette",label:"Datasette",icon:qf,order:10,description:"A live, editable table on any Datasette instance",connect:t=>Gf(t)}),e.ui.registerTableButton({id:"datasette:refresh-live",label:"Refresh",icon:"refresh",tooltip:"Re-read this live table from its Datasette instance",visible:t=>t.source?.type==="datasette",onClick:(t,{tableId:r})=>Vf(t,r)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:Hf})}async function Vf(e,t){if((await e.store.tables.findOne(t))?.source?.type==="datasette")try{const i=e.store.rows(t);typeof i.refresh=="function"&&await i.refresh();const n=await i.find();e.ui.dialogs.toast(`Reloaded ${n.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}catch(i){const n=i instanceof Bt?i.message:i?.message??String(i);e.ui.dialogs.toast(`Refresh failed: ${n}`,{kind:"error",title:"Refresh"})}}async function Gf(e){const t=Xt.instance??Yf(),r=(n,s)=>e.backend.fetch(n,s),i=await t.open({initialUrl:"https://datasette.io",async onTest(n,s){const a=bn(n),c=await bc(r,a.base,{token:s||void 0});if(a.db&&a.table){await Qs(cr(r,s||void 0),a);const p=c.version?` (Datasette ${c.version})`:"";return c.writable?`Reachable${p} — table found, signed in, read-write.`:`Reachable${p} — table found, read-only (no token / not authenticated).`}if(!c.reachable)return`Unreachable: ${c.error??"no response"}`;const u=c.version?` (Datasette ${c.version})`:"";return c.writable?`Reachable${u} — signed in, read-write.`:`Reachable${u} — read-only (no token / not authenticated).`},async onConnect(n,s){const a=bn(n);a.db&&a.table&&await Qs(cr(r,s||void 0),a)}});if(i)try{await xc(e,i.url,i.token)}catch(n){const s=n instanceof Bt?n.message:n?.message??String(n);await e.ui.dialogs.alert(s,"Connect Datasette failed")}}function Yf(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function xc(e,t,r){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=bn(t),s=(b,$)=>e.backend.fetch(b,$),a=cr(s,r||void 0),c=await bc(s,n.base,{token:r||void 0});r&&await e.store.settings.upsert({key:vc(n.base),value:r});let u;try{u=await wc(a,n,"Connect")}catch(b){const $=b instanceof Bt?b.message:b?.message??String(b);throw new Error(`Couldn't read tables from ${Ri(n.base)}: ${$}`)}if(u===null)return;if(u.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const p=[];for(const b of u){const $=await Xf(e,i,n.base,b,c.writable,r);$!==null&&p.push({tableId:$,c:b})}if(p.length===0)return;const w=c.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${p.length} live table${p.length===1?"":"s"} from Datasette (${w}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:b,c:$}of p)Qf(e,b,n.base,$,r)}async function Xf(e,t,r,i,n,s){const a=(await e.store.tables.find()).filter($=>$.workspaceId===t);let c=`${i.db}/${i.table}`,u=a.find($=>{const D=$.source?.config;return $.source?.type==="datasette"&&D?.base===r&&D?.db===i.db&&D?.table===i.table});if(!u){const $=a.find(D=>D.name.toLowerCase()===c.toLowerCase());if($){const D=await e.ui.dialogs.choice(`A table named "${c}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Connect — table already exists");if(!D||D==="Skip")return null;D==="Overwrite"?u=$:c=yc(new Set(a.map(P=>P.name)),c)}}let p=i.pks??[];if(p.length===0){const $=cr((D,P)=>e.backend.fetch(D,P),s||void 0);try{p=await xf($,{base:r,db:i.db,table:i.table,query:{}})}catch{p=[]}}const w=u?.id??it(),b={...u??{},id:w,workspaceId:t,name:c,code:Tt(`${i.db}-${i.table}`),columns:u?.columns??[],view:u?.view??"table",source:{type:"datasette",writable:n,config:{base:r,db:i.db,table:i.table,pks:p}},updatedAt:Date.now()};return u?await e.store.tables.upsert(b):await e.store.tables.insert(b),w}async function Qf(e,t,r,i,n){const s={base:r,db:i.db,table:i.table,query:{}},a=cr((c,u)=>e.backend.fetch(c,u),n||void 0);try{let c=[],u=!1;try{const S=await Ki(a,s);c=S.columns,u=S.typed}catch{}const{rows:p}=await Nr(a,s,{maxRows:50,pageSize:50}),w=c.length===0?Wi(p):u?c:Po(c,p);if(w.length===0)return;const b=await e.store.tables.findOne(t);if(!b)return;const $=b.source?.config?.pks??[];let D=w.map(S=>$.includes(S.field)?{...S,unique:!0,notnull:!0}:S),P={};try{const S=await Ao(a,s),B=Io(S,D);D=B.columns,P=B.patch}catch{}P=Ro(P,s.base,i.db,i.table),await e.store.tables.patch(t,{columns:D,...P,updatedAt:Date.now()})}catch{}}const Jf=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:xc,init:Kf,meta:Wf},Symbol.toStringTag,{value:"Module"})),Zf={id:"url-source",name:"URL Reference",type:"source",version:"0.1.0",description:'Backs a table with a live read-only fetch of a plain CSV or JSON URL — a "reference" table whose rows are never persisted locally.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/url-source.ts"};function ep(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"url",create:$c}),e.ui.registerTableButton({id:"url-source:refresh",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this reference from its source URL",visible:t=>t.source?.type==="url",onClick:async(t,{tableId:r})=>{try{const i=t.store.rows(r);typeof i.refresh=="function"&&await i.refresh(),t.ui.dialogs.toast("Reference refreshed.",{kind:"success",title:"Refresh"})}catch(i){t.ui.dialogs.toast(`Refresh failed: ${i.message}`,{kind:"error",title:"Refresh"})}}})}class Wn extends Error{constructor(t){super(`This is a reference (read-only) table — ${t} is not permitted. Import a copy to edit.`),this.name="ReadOnlyReferenceError"}}function tp(e,t){for(const[r,i]of Object.entries(t))if(r!=="data"&&e[r]!==i)return!1;return!0}function np(e){const t=r=>typeof r=="object"&&r!==null&&!Array.isArray(r);if(Array.isArray(e))return e.filter(t);if(t(e)){for(const r of["rows","records","data"]){const i=e[r];if(Array.isArray(i))return i.filter(t)}for(const r of Object.values(e))if(Array.isArray(r))return r.filter(t)}return[]}function $c(e,t){const r=e.source?.config??{},i=typeof r.url=="string"?r.url:"",n=r.format==="json"?"json":"csv",s=new Set;let a=[],c=!1,u=null;function p(D){return D.map((P,S)=>({id:`url:${S}`,tableId:e.id,data:P,updatedAt:0}))}async function w(D){let P;try{P=await t.backend.fetch(D)}catch(S){throw new Error(`Could not reach ${i}: ${S?.message??String(S)}`)}if(!P.ok)throw new Error(`Could not load ${i}: HTTP ${P.status} ${P.statusText}`);try{return await Kl(P)}catch(S){throw new Error(`Could not read response from ${i}: ${S?.message??String(S)}`)}}async function b(){if(!i)throw new Error("This reference table has no URL configured.");const D=bo(i);let P=await w(D);if(ql(P)){const S=Wl(D);S&&(P=await w(S))}try{return n==="json"?np(JSON.parse(P)):hr(P).rows}catch(S){throw new Error(`Could not parse ${n.toUpperCase()} from ${i}: ${S?.message??String(S)}`)}}function $(){return u||(u=(async()=>{try{const D=await b();a=p(D),c=!0;for(const P of s)P(a);return a}finally{u=null}})(),u)}return{async find(D){const P=c?a:await $();return!D||Object.keys(D).length===0?P:P.filter(S=>tp(S,D))},async findOne(D){return(c?a:await $()).find(S=>S.id===D)??null},async insert(){throw new Wn("insert")},async bulkInsert(){throw new Wn("insert")},async upsert(){throw new Wn("upsert")},async patch(){throw new Wn("update")},async remove(){throw new Wn("delete")},async bulkRemove(){throw new Wn("delete")},subscribe(D){return s.add(D),c?D(a):$(),()=>{s.delete(D)}},async refresh(){c=!1,a=[],await $()}}}const rp=Object.freeze(Object.defineProperty({__proto__:null,ReadOnlyReferenceError:Wn,createUrlCollection:$c,init:ep,meta:Zf},Symbol.toStringTag,{value:"Module"})),ip={id:"sql-export",name:"SQL Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-export.ts"};function sp(){}async function kc(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),i=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const n of r){const s=await e.store.rows(n.id).find();i.push(Ec(n,s),"")}return i.push("COMMIT;",""),i.join(`
`)}function Cc(e,t){return["-- easyDBAccess table export",`-- table:    ${e.name}`,`-- exported: ${new Date().toISOString()}`,"","BEGIN;","",Ec(e,t),"","COMMIT;",""].join(`
`)}function Ec(e,t){const r=Js(e.code||e.name||`table_${e.id}`),i=['  "__id" TEXT PRIMARY KEY',...e.columns.map(s=>`  ${op(s)}`)],n=[`DROP TABLE IF EXISTS "${r}";`,`CREATE TABLE "${r}" (`,i.join(`,
`),");"];if(t.length>0){const a=["__id",...e.columns.map(c=>c.field)].map(c=>`"${Js(c)}"`).join(", ");for(const c of t){const u=[tl(c.id),...e.columns.map(p=>tl(c.data[p.field],p.type))];n.push(`INSERT INTO "${r}" (${a}) VALUES (${u.join(", ")});`)}}return n.join(`
`)}function op(e){const t=[`"${Js(e.field)}"`,ap(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function ap(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function tl(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const r=lp(e);return r===null?"NULL":bi(r)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?bi(e.toISOString()):bi(typeof e=="string"?e:JSON.stringify(e))}function lp(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?nl(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(r)return`${r[1]}${r[2]}${r[3]}`;const i=new Date(t);return Number.isFinite(i.getTime())?nl(i):null}return null}function nl(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),r=String(e.getUTCMonth()+1).padStart(2,"0"),i=String(e.getUTCDate()).padStart(2,"0");return`${t}${r}${i}`}function bi(e){return`'${e.replace(/'/g,"''")}'`}function Js(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const cp=Object.freeze(Object.defineProperty({__proto__:null,init:sp,meta:ip,serializeTableAsSql:Cc,serializeWorkspaceAsSql:kc},Symbol.toStringTag,{value:"Module"})),Sc=/\$(input[.:])?([A-Za-z_][A-Za-z0-9_]*)/g;function rl(...e){const t=new Set;for(const r of e)if(r)for(const i of r.matchAll(Sc))t.add(i[2]);return[...t]}const _c=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),yi=e=>_c(e).replace(/"/g,"&quot;").replace(/'/g,"&#39;");function dp(e){return typeof e=="boolean"?e:typeof e=="number"?e!==0:typeof e=="string"?["true","1","yes","y","t","on"].includes(e.trim().toLowerCase()):!1}function up(e,t,r,i,n){const s=i?.type??"string",a=_c(i?.label||e),c=`class="eda-input" data-eda-row="${yi(r)}" data-eda-field="${yi(e)}" data-eda-type="${yi(s)}"`,u=n?" disabled":"";let p;if(s==="boolean")p=`<input type="checkbox" ${c}${dp(t)?" checked":""}${u} />`;else{const w=s==="number"?"number":"text",b=t==null?"":yi(String(t));p=`<input type="${w}" ${c} value="${b}"${u} />`}return`<label class="eda-input-field" title="${a}">${p}<span class="eda-input-label">${a}</span></label>`}function hp(e,t,r,i={}){return e.replace(Sc,(n,s,a)=>{const c=r[a];if(!c)return"";const u=t.data[c];return s?up(c,u,t.id,i.columns?.get(c),i.readonly===!0):u==null?"":String(u)})}function il(e){return e==null||e===""}function fp(e,t){const r=Object.entries(t).filter(([,i])=>i!=null&&String(i).trim()!=="");return r.length===0?e:e.filter(i=>r.every(([n,s])=>Ti(i.data[n],s)))}function pp(e,t,r=!0){if(!t)return e;const i=r?1:-1;return[...e].sort((n,s)=>{const a=n.data[t],c=s.data[t],u=il(a),p=il(c);if(u||p)return u===p?0:u?1:-1;const w=Number(a),b=Number(c);return!Number.isNaN(w)&&!Number.isNaN(b)?(w-b)*i:String(a).localeCompare(String(c),void 0,{numeric:!0,sensitivity:"base"})*i})}function Tc(e,t){return pp(fp(e,t.filters??{}),t.sortColumn,t.sortAsc??!0)}function mp(e){return!!e&&e.trim().length>0}function gp(e,t){return t==="raw"||t==="structure"?e.columns:e.columns.filter(r=>r.hidden!==!0)}function bp(e,t){return t==="raw"||t==="structure"?e:{...e,columns:gp(e,t)}}function yp(e,t,r){return r==="structure"?[]:r==="raw"?t:Tc(t,{filters:e.filters??{},sortColumn:e.sortColumn,sortAsc:e.sortAsc})}function jo(e,t){const r=e.columns.map(n=>n.field),i=e.source!=null;return{name:e.name,title:e.title,columns:e.columns,view:e.view,windowGeometry:e.windowGeometry,sortColumn:e.sortColumn,sortAsc:e.sortAsc,filters:e.filters,labelColumn:e.labelColumn,deletedColumns:e.deletedColumns,info:e.info,source:e.source,origin:e.origin,rows:i?[]:t.map(n=>{const s={};for(const a of r)s[a]=n.data[a];return s})}}const wp={id:"dump-export",name:"Dump Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file, and — per table — CSV/JSON/SQL with a Raw vs. Visible vs. Structure Only choice.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/dump-export.ts"};function vp(e){e.ui.registerFooterButton({id:"export:menu",label:"Export",icon:"download",tooltip:"Export the current workspace (JSON or SQL)",onClick:async(t,r)=>{const i=t.workspaceId();if(!i)return;const{AnchoredMenu:n}=await ln(async()=>{const{AnchoredMenu:c}=await Promise.resolve().then(()=>zr);return{AnchoredMenu:c}},void 0),s=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),a=await n.open(s,[{id:"json",label:"JSON dump (.db.json)",icon:"data_object"},{id:"sql",label:"SQL script (.sql)",icon:"storage"}]);if(a)try{if(a==="json"){const c=await Gi(t);await t.backend.saveFile(`workspace-${i}.db.json`,c,"application/json")}else if(a==="sql"){const c=await kc(t);await t.backend.saveFile(`workspace-${i}.sql`,c,"application/sql")}}catch(c){t.ui.dialogs.toast(`Export failed: ${c.message}`,{kind:"error",title:"Export"})}}}),e.ui.registerTableButton({id:"table-export:menu",label:"Export",icon:"file_download",tooltip:"Export this table as CSV, JSON, or SQL",onClick:async(t,r)=>{const{AnchoredMenu:i}=await ln(async()=>{const{AnchoredMenu:p}=await Promise.resolve().then(()=>zr);return{AnchoredMenu:p}},void 0),n=r.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await i.open(n,[{id:"csv",label:"CSV (.csv)",icon:"table_chart"},{id:"json",label:"JSON (.table.json)",icon:"data_object"},{id:"sql",label:"SQL (.sql)",icon:"storage"}]);if(!s)return;const a=await t.store.tables.findOne(r.tableId);if(!a)return;const c=await t.ui.dialogs.choice(`Export "${a.name}" as ${s.toUpperCase()} — which rows/columns?`,["Visible Data","Raw Data","Structure Only"],"Export table");if(!c)return;const u=c==="Visible Data"?"visible":c==="Raw Data"?"raw":"structure";try{const p=await t.store.rows(a.id).find(),w=bp(a,u),b=yp(a,p,u),$=Tt(a.code||a.name||"table"),D=u!=="structure"&&a.source!=null&&p.length===0;if(s==="csv")D&&t.ui.dialogs.toast(`"${a.name}" is a live table with no local rows — exporting column definitions only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${$}.csv`,$o(w,b),"text/csv");else if(s==="json"){const P=JSON.stringify(jo(w,b),null,2);await t.backend.saveFile(`${$}.table.json`,P,"application/json")}else s==="sql"&&(D&&t.ui.dialogs.toast(`"${a.name}" is a live table with no local rows — exporting the CREATE TABLE only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${$}.sql`,Cc(w,b),"application/sql"))}catch(p){t.ui.dialogs.toast(`Export failed: ${p.message}`,{kind:"error",title:"Export"})}}})}async function Gi(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const r=(await e.store.tables.find()).filter(a=>a.workspaceId===t),i=(await e.store.viewTemplates.find()).filter(a=>a.workspaceId===t),n=(await e.store.viewInstances.find()).filter(a=>a.workspaceId===t),s={workspaceId:t,exportedAt:Date.now(),tables:[],viewTemplates:i,viewInstances:n};for(const a of r){const c=await e.store.rows(a.id).find();s.tables.push({name:a.name,columns:a.columns,rows:c.map(u=>u.data),...a.title?{title:a.title}:{},...a.windowGeometry?{windowGeometry:a.windowGeometry}:{},...a.sortColumn?{sortColumn:a.sortColumn,sortAsc:a.sortAsc??!0}:{},...a.filters?{filters:a.filters}:{},...a.labelColumn?{labelColumn:a.labelColumn}:{},...a.info?{info:a.info}:{},...a.deletedColumns?{deletedColumns:a.deletedColumns}:{},...a.source?{source:a.source}:{},...a.origin?{origin:a.origin}:{}})}return JSON.stringify(s,null,2)}const xp=Object.freeze(Object.defineProperty({__proto__:null,init:vp,meta:wp,serializeWorkspace:Gi},Symbol.toStringTag,{value:"Module"})),$p={id:"gist-sync",name:"Gist Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/gist-sync.ts"},kp="gist:",sl='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>';function Cp(e){e.ui.registerSettings("gist-sync","Gist Sync",[{key:"user",label:"GitHub user",type:"string",scope:"workspace",description:"GitHub username that owns the gist."},{key:"gist_id",label:"Gist ID",type:"string",scope:"workspace",description:"Leave empty to create a new gist on the first Push."},{key:"gist_token",label:"GitHub token (PAT)",type:"secret",scope:"user",description:'Personal access token with the "gist" scope. Stored on this device only (not synced).'}]),e.ui.registerFooterButton({id:"gist-sync:menu",label:"Gist",icon:sl,tooltip:"Gist sync — push, pull, share…",onClick:async(t,r)=>{const{AnchoredMenu:i}=await ln(async()=>{const{AnchoredMenu:a}=await Promise.resolve().then(()=>zr);return{AnchoredMenu:a}},void 0),n=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await i.open(n,[{id:"push",label:"Push",icon:"cloud_upload"},{id:"pull",label:"Pull",icon:"cloud_download"},{id:"share",label:"Share",icon:"share"},{id:"view",label:"View gist",icon:"open_in_new"}]);if(s)try{if(s==="push"||s==="pull"){const a=await i.open(n,[{id:"all",label:"Everything",icon:"sync"},{id:"data",label:"Data only (tables + rows)",icon:"table_rows"},{id:"settings",label:"Settings only (views + settings)",icon:"tune"}]);if(!a)return;const c=a;s==="push"?await Ip(t,c):await Ic(t,c)}else s==="share"?await Tp(t):s==="view"&&await Ap(t)}catch(a){t.ui.dialogs.toast(`Gist ${s} failed: ${a.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerTableButton({id:"gist-sync:table",label:"Gist",icon:sl,tooltip:"Gist sync for this table — push, pull, view file",onClick:async(t,r)=>{const{AnchoredMenu:i}=await ln(async()=>{const{AnchoredMenu:a}=await Promise.resolve().then(()=>zr);return{AnchoredMenu:a}},void 0),n=r.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await i.open(n,[{id:"push",label:"Push this table",icon:"cloud_upload"},{id:"pull",label:"Pull this table",icon:"cloud_download"},{id:"view",label:"View gist file",icon:"open_in_new"}]);if(s)try{s==="push"?await Pp(t,r.tableId):s==="pull"?await Rp(t,r.tableId):s==="view"&&await Dp(t,r.tableId)}catch(a){t.ui.dialogs.toast(`Gist ${s} failed: ${a.message}`,{kind:"error",title:"Gist sync"})}}})}async function Ep(e){const t=new URLSearchParams(location.hash.replace(/^#/,"")).get("gist");if(!t)return;history.replaceState(null,"",location.pathname+location.search);let r;try{r=atob(t)}catch{return}const i=Sp(r);if(!i){await e.ui.dialogs.alert("The shared gist link is invalid.","Gist sync");return}await e.ui.dialogs.confirm(`Load shared workspace from gist ${i.gistId||"(new)"} (owner: ${i.user})?

This pulls its tables into the current workspace.`,"Gist sync")&&(await zo(e,i),await Ic(e))}async function Ac(e){const t=e.workspaceId();return`${kp}${t??"default"}`}async function Hr(e){const[t,r,i]=await Promise.all([e.settings.get("gist-sync","user"),e.settings.get("gist-sync","gist_id"),e.settings.get("gist-sync","gist_token")]);if(t&&i)return{user:t,gistId:r??"",token:i};const s=(await e.store.settings.findOne(await Ac(e)))?.value;if(s?.user&&s?.token){const a={user:s.user,gistId:s.gistId??"",token:s.token};return await zo(e,a),a}return null}async function zo(e,t){await e.settings.set("gist-sync","user",t.user),await e.settings.set("gist-sync","gist_id",t.gistId),await e.settings.set("gist-sync","gist_token",t.token),await e.store.settings.upsert({key:await Ac(e),value:t})}function Sp(e){const t={};for(const r of e.split(";")){const i=r.indexOf("=");if(i<0)continue;const n=r.slice(0,i).trim(),s=r.slice(i+1).trim();n&&(t[n]=s)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function Lo(e){const t=await Hr(e);return t||(e.ui.dialogs.toast("Add your GitHub user and token in Settings → Gist Sync, then try again.",{kind:"warning",title:"Gist sync"}),e.ui.openSettings(),null)}function _p(e){return`user=${e.user};gist_id=${e.gistId};gist_token=${e.token}`}async function Tp(e){const t=await Hr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("Configure a gist and Push first — there is nothing to share yet.","Gist sync");return}const i=`${location.origin+location.pathname}#gist=${encodeURIComponent(btoa(_p(t)))}`,{GistShareDialog:n}=await ln(async()=>{const{GistShareDialog:s}=await import("./gist-share-dialog-C-C-tK8p.js");return{GistShareDialog:s}},[]);await n.open(i)}async function Ap(e){const t=await Hr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist configured yet — Push first.","Gist sync");return}window.open(`https://gist.github.com/${t.user}/${t.gistId}`,"_blank","noopener")}async function Ip(e,t="all"){const r=await Lo(e);if(!r)return;const i=e.workspaceId();if(!i)throw new Error("no active workspace");const n=t!=="settings",s=t!=="data",a=(await e.store.tables.find()).filter(S=>S.workspaceId===i);if(n&&a.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const c=1e8,u=1e7,p={},w=[],b=[];if(n)for(const S of a){const B=S.source!=null?[]:await e.store.rows(S.id).find(),q=JSON.stringify(jo(S,B),null,2),Q=`${S.name} (${(q.length/1e6).toFixed(2)} MB)`;q.length>c?w.push(Q):q.length>u&&b.push(Q),p[`${Tt(S.name)}.table.json`]={content:q}}if(w.length>0||b.length>0){const S=[];if(w.length>0&&S.push(`Over Gist's 100 MB per-file limit — GitHub will REJECT these:
${w.join(`
`)}`),b.length>0&&S.push(`Large (over 10 MB) — Gist sync will be slow and less reliable:
${b.join(`
`)}`),!await e.ui.dialogs.confirm(`${S.join(`

`)}

To reduce size: remove unnecessary columns, limit the number of rows, or mark the table no-persist/no-sync.

Push anyway?`,"Gist size warning"))return}if(s){const S=(await e.store.viewTemplates.find()).filter(Q=>Q.workspaceId===i),B=(await e.store.viewInstances.find()).filter(Q=>Q.workspaceId===i),q=await e.store.settings.find();p["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:i,exportedAt:Date.now(),kind:"easydb-workspace-v1",viewTemplates:S,viewInstances:B,settings:q},null,2)}}let $;if(r.gistId){const S=await fetch(`https://api.github.com/gists/${r.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:p,description:`easyDBAccess workspace: ${i}`})});if(!S.ok)throw new Error(await Lr(S));$=await S.json()}else{const S=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${i}`,files:p})});if(!S.ok)throw new Error(await Lr(S));$=await S.json(),r.gistId=$.id,await zo(e,r)}const D=$.html_url??`https://gist.github.com/${r.user}/${$.id}`,P=t==="settings"?"settings":t==="data"?`${a.length} table${a.length===1?"":"s"} (data only)`:`${a.length} table${a.length===1?"":"s"}`;e.ui.dialogs.toast(`Pushed ${P}.  ${D}`,{kind:"success",title:"Gist sync"})}async function Ic(e,t="all"){const r=t!=="settings",i=t!=="data",n=await Lo(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const s=e.workspaceId();if(!s)throw new Error("no active workspace");const a=await fetch(`https://api.github.com/gists/${n.gistId}`,{headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json"}});if(!a.ok)throw new Error(await Lr(a));const c=await a.json(),u=Object.entries(c.files).filter(([q])=>q.endsWith(".table.json")&&!q.startsWith("_easydb"));if(r&&u.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const p=(await e.store.tables.find()).filter(q=>q.workspaceId===s),w=new Map(p.map(q=>[q.name.toLowerCase(),q]));let b=0;const $=[],D=new Map;if(r){const{TopProgress:q}=await ln(async()=>{const{TopProgress:X}=await import("./top-progress-tjFOYMjp.js");return{TopProgress:X}},[]),Q=q.begin("Pulling from gist…");try{for(const[X,[J,W]]of u.entries())try{const Z=await Di(W),de=JSON.parse(Z);if(!de.name||!Array.isArray(de.columns))throw new Error("unexpected file shape (missing name/columns)");let we;const Te=w.get(de.name.toLowerCase());if(Te){if(we=await e.store.tables.patch(Te.id,{title:de.title,columns:de.columns,...Zs(de),updatedAt:Date.now()}),we.source==null){const Pe=e.store.rows(Te.id),m=await Pe.find();await Pe.bulkRemove(m.map(x=>x.id))}}else we=await e.store.tables.insert({id:it(),workspaceId:s,name:de.name,title:de.title,code:Tt(de.name),columns:de.columns,view:de.view??"table",...Zs(de),updatedAt:Date.now()});if(we.source==null){const Pe=(de.rows??[]).map(m=>({id:it(),tableId:we.id,data:m,updatedAt:Date.now()}));await e.store.rows(we.id).bulkInsert(Pe)}D.set(de.name,we.id),b++}catch(Z){$.push({file:J,error:Z.message})}finally{Q.fraction((X+1)/u.length)}}finally{Q.done()}}let P=0,S="";const B=i?c.files["_easydb.workspace.json"]:void 0;if(B)try{const q=await Di(B),Q=JSON.parse(q),X=Q.viewTemplates??[],J=Q.viewInstances??[],W=Q.settings??[];for(const Z of X)await e.store.viewTemplates.upsert({...Z,workspaceId:s});for(const Z of J){let de;Z.tableName&&(de=D.get(Z.tableName)??w.get(Z.tableName)?.id),de??=Z.tableId,de&&(await e.store.viewInstances.upsert({...Z,workspaceId:s,tableId:de}),P++)}for(const Z of W)await e.store.settings.upsert(Z)}catch(q){S=`Workspace metadata import failed: ${q.message}`}if($.length>0){const q=$.map(Q=>`• ${Q.file}: ${Q.error}`).join(`
`);e.ui.dialogs.toast(`Pulled ${b} of ${u.length} tables. ${$.length} failed:
${q}${S?`
${S}`:""}`,{kind:"warning",title:"Gist sync"})}else{const q=P>0?` (+${P} views)`:"",Q=t==="settings"?`Pulled settings${q}.`:`Pulled ${b} table${b===1?"":"s"}.${q}`;e.ui.dialogs.toast(Q,{kind:"success",title:"Gist sync"}),S&&e.ui.dialogs.toast(S,{kind:"warning",title:"Gist sync"})}document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function Pp(e,t){const r=await Lo(e);if(!r)return;if(!r.gistId){await e.ui.dialogs.alert("No gist yet — use the main Gist button to Push the whole workspace first.","Gist sync");return}const i=await e.store.tables.findOne(t);if(!i)return;const n=i.source!=null?[]:await e.store.rows(t).find(),s=JSON.stringify(jo(i,n),null,2),a={[`${Tt(i.name)}.table.json`]:{content:s}},c=await fetch(`https://api.github.com/gists/${r.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:a})});if(!c.ok)throw new Error(await Lr(c));e.ui.dialogs.toast(`Pushed "${i.name}" to gist.`,{kind:"success",title:"Gist sync"})}async function Rp(e,t){const r=await Hr(e);if(!r||!r.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const i=await e.store.tables.findOne(t);if(!i)return;const n=`${Tt(i.name)}.table.json`,s=await fetch(`https://api.github.com/gists/${r.gistId}`,{headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json"}});if(!s.ok)throw new Error(await Lr(s));const c=(await s.json()).files[n];if(!c){await e.ui.dialogs.alert(`No file "${n}" in the gist for this table.`,"Gist sync");return}const u=await Di(c),p=JSON.parse(u);if(!p.name||!Array.isArray(p.columns))throw new Error("unexpected file shape (missing name/columns)");if((await e.store.tables.patch(t,{title:p.title,columns:p.columns,...Zs(p),updatedAt:Date.now()})).source==null){const b=e.store.rows(t),$=await b.find();await b.bulkRemove($.map(P=>P.id));const D=(p.rows??[]).map(P=>({id:it(),tableId:t,data:P,updatedAt:Date.now()}));await b.bulkInsert(D)}e.ui.dialogs.toast(`Pulled "${i.name}" from gist.`,{kind:"success",title:"Gist sync"})}async function Dp(e,t){const r=await Hr(e);if(!r||!r.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const i=await e.store.tables.findOne(t);if(!i)return;const n=`file-${Tt(i.name)}-table-json`;window.open(`https://gist.github.com/${r.user}/${r.gistId}#${n}`,"_blank","noopener")}function Zs(e){const t={};return e.view!==void 0&&(t.view=e.view),e.windowGeometry&&(t.windowGeometry=e.windowGeometry),e.sortColumn!==void 0&&(t.sortColumn=e.sortColumn),e.sortAsc!==void 0&&(t.sortAsc=e.sortAsc),e.filters!==void 0&&(t.filters=e.filters),e.labelColumn!==void 0&&(t.labelColumn=e.labelColumn),e.deletedColumns!==void 0&&(t.deletedColumns=e.deletedColumns),e.info!==void 0&&(t.info=e.info),e.source!==void 0&&(t.source=e.source),e.origin!==void 0&&(t.origin=e.origin),t}async function Di(e,t=r=>fetch(r)){if(!e.truncated)return e.content;if(!e.raw_url)throw new Error("GitHub truncated this file but returned no raw_url");const r=await t(e.raw_url);if(!r.ok)throw new Error(`raw fetch failed: ${r.status} ${r.statusText}`);return r.text()}async function Lr(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Op=Object.freeze(Object.defineProperty({__proto__:null,fetchGistFileContent:Di,init:Cp,load:Ep,meta:$p},Symbol.toStringTag,{value:"Module"})),Pc="server-sync:url";function Rc(e){return`server-sync:etag:${e}`}async function Dc(e){const r=(await e.store.settings.findOne(Pc))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}async function jp(e,t){await e.store.settings.upsert({key:Pc,value:t.replace(/\/+$/,"")})}async function Oc(e,t){const i=(await e.store.settings.findOne(Rc(t)))?.value;return typeof i=="string"?i:null}async function Qn(e,t,r){await e.store.settings.upsert({key:Rc(t),value:r})}function Yi(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function ol(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function jc(e,t,r){const i=qi(r,t),n=(await e.store.tables.find()).filter(a=>a.workspaceId===t);for(const a of n){const c=e.store.rows(a.id),u=await c.find();await c.bulkRemove(u.map(p=>p.id)),await e.store.tables.remove(a.id)}let s=0;for(const a of i){const c=it(),u=await e.store.tables.insert({id:c,workspaceId:t,name:a.name,code:Tt(a.name),columns:a.columns,view:"table",...a.windowGeometry?{windowGeometry:a.windowGeometry}:{},...a.sortColumn?{sortColumn:a.sortColumn,sortAsc:a.sortAsc??!0}:{},updatedAt:Date.now()}),p=a.rows.map(w=>({id:it(),tableId:u.id,data:w,updatedAt:Date.now()}));await e.store.rows(u.id).bulkInsert(p),s++}return s}const zp={id:"server-sync",name:"Server Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/server-sync.ts"};function Lp(e){e.ui.registerSettings("server-sync","Server Sync",[{key:"url",label:"Server URL",type:"string",scope:"workspace",description:"Base URL of the sync server, e.g. http://localhost:3000"}]),e.ui.registerFooterButton({id:"server-sync:menu",label:"Sync",icon:"cloud_sync",tooltip:"Server sync — push or pull this workspace",onClick:async(t,r)=>{const{AnchoredMenu:i}=await ln(async()=>{const{AnchoredMenu:a}=await Promise.resolve().then(()=>zr);return{AnchoredMenu:a}},void 0),n=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await i.open(n,[{id:"push",label:"Push (↑)",icon:"cloud_upload"},{id:"pull",label:"Pull (↓)",icon:"cloud_download"}]);if(s)try{s==="push"?await Fp(t):s==="pull"&&await Mp(t)}catch(a){t.ui.dialogs.toast(`${s==="push"?"Push":"Pull"} failed: ${a.message}`,{kind:"error",title:"Server sync"})}}})}async function Fp(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await zc(e);if(!r)return;const i=await Gi(e),n=await Oc(e,t),s={"Content-Type":"application/json"};n&&(s["If-Match"]=`"${n}"`);let a=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:s,body:i});if(a.status===412){const u=await a.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){u.currentEtag&&await Qn(e,t,u.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}a=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:i})}if(!a.ok)throw new Error(await Lc(a));const c=Yi(a.headers.get("ETag"));c&&await Qn(e,t,c),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${r}.`,{kind:"success",title:"Server sync"})}async function Mp(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await zc(e);if(!r||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const n=await fetch(`${r}/sync/${encodeURIComponent(t)}`);if(n.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!n.ok)throw new Error(await Lc(n));const s=Yi(n.headers.get("ETag")),a=await n.json(),c=await jc(e,t,a);s&&await Qn(e,t,s),e.ui.dialogs.toast(`Pulled ${c} table${c===1?"":"s"} from ${r}.`,{kind:"success",title:"Server sync"})}async function zc(e){const t=await Dc(e);if(t)return t;const r=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!r)return null;try{new URL(r)}catch{return await e.ui.dialogs.alert(`"${r}" is not a valid URL.`,"Server sync"),null}return await jp(e,r),r.replace(/\/+$/,"")}async function Lc(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Bp=Object.freeze(Object.defineProperty({__proto__:null,init:Lp,meta:zp},Symbol.toStringTag,{value:"Module"})),Np={id:"new-table",name:"New Table",type:"ui",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/new-table-button.ts"};function Up(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const Hp=Object.freeze(Object.defineProperty({__proto__:null,init:Up,meta:Np},Symbol.toStringTag,{value:"Module"}));function Xi(e,t="Edit"){const r=document.createElement("button");return r.type="button",r.title=t,r.textContent="✎",r.className="cell-pencil",r.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",r.addEventListener("mouseenter",()=>r.style.color="#374151"),r.addEventListener("mouseleave",()=>r.style.color="#9ca3af"),r.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),e()}),r}function Qi(e,t){const r=document.createElement("span");return r.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%",e.style.flex="1 1 auto",e.style.minWidth="0",e.style.overflow="hidden",r.append(e,t),r}function Ji(e){const t=document.createElement("input");t.type="text",t.value=e.value,t.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0;text-overflow:ellipsis";const r=()=>{e.isLive(t)&&e.onCommit(t.value)};return t.addEventListener("keydown",i=>{i.key==="Enter"?(i.preventDefault(),r()):i.key==="Escape"&&(i.preventDefault(),e.onCancel())}),t.addEventListener("blur",r),setTimeout(()=>{t.focus(),t.select()},0),t}const qp={id:"cell-date",name:"Cell Date",type:"cell-renderer",version:"0.1.0",description:"Renderer for date columns: a native `<input type=date>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"date\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-date.ts"};function Wp(e){customElements.get("cell-date")||customElements.define("cell-date",Kp),e.ui.registerCellRenderer("date","cell-date")}class Kp extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const r=!!t;this._readonly!==r&&(this._readonly=r,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const r=Ji({value:this._value==null?"":String(this._value),onCommit:i=>this.commit(i||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:i=>this._editor===i});this.append(r),this._editor=r;return}if(Vp(this._value)){const r=document.createElement("span");r.textContent=String(this._value),r.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",_o(r,`Not a valid date: "${String(this._value)}"`),this.append(this._readonly?r:Qi(r,this.pencil()));return}if(this._readonly){this.textContent=eo(this._value);return}const t=document.createElement("input");t.type="date",t.value=eo(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return Xi(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function eo(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function Vp(e){return e==null||typeof e=="string"&&e.trim()===""?!1:eo(e)===""}const Gp=Object.freeze(Object.defineProperty({__proto__:null,init:Wp,meta:qp},Symbol.toStringTag,{value:"Module"})),Yp={id:"cell-datetime",name:"Cell Datetime",type:"cell-renderer",version:"0.1.0",description:"Renderer for datetime columns: a native `<input type=datetime-local>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"datetime\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-datetime.ts"};function Xp(e){customElements.get("cell-datetime")||customElements.define("cell-datetime",Qp),e.ui.registerCellRenderer("datetime","cell-datetime")}class Qp extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const r=!!t;this._readonly!==r&&(this._readonly=r,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const r=Ji({value:this._value==null?"":String(this._value),onCommit:i=>this.commit(i||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:i=>this._editor===i});this.append(r),this._editor=r;return}if(Jp(this._value)){const r=document.createElement("span");r.textContent=String(this._value),r.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",_o(r,`Not a valid datetime: "${String(this._value)}"`),this.append(this._readonly?r:Qi(r,this.pencil()));return}if(this._readonly){this.textContent=to(this._value).replace("T"," ");return}const t=document.createElement("input");t.type="datetime-local",t.value=to(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return Xi(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function to(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}function Jp(e){return e==null||typeof e=="string"&&e.trim()===""?!1:to(e)===""}const Zp=Object.freeze(Object.defineProperty({__proto__:null,init:Xp,meta:Yp},Symbol.toStringTag,{value:"Module"})),em={id:"cell-boolean",name:"Cell Boolean",type:"cell-renderer",version:"0.1.0",description:`Renderer for boolean columns: a checkbox for true/false, a grayed-out unchecked box for an empty cell (clickable to set true), and red-bordered raw text with a pencil for a stored value that is none of those. Apply by setting a column's renderer to "boolean".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="8 12 11 15 16 9"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-boolean.ts"};function tm(e){customElements.get("cell-boolean")||customElements.define("cell-boolean",nm),e.ui.registerCellRenderer("boolean","cell-boolean")}class nm extends HTMLElement{constructor(){super(...arguments),this._value=!1,this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const r=!!t;this._readonly!==r&&(this._readonly=r,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=Ji({value:this._value==null?"":String(this._value),onCommit:s=>this.commit(s),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:s=>this._editor===s});this.append(n),this._editor=n;return}const t=Jh(this._value);if(t==="invalid"){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",_o(n,`Not a valid boolean: "${String(this._value)}"`),this.append(this._readonly?n:Qi(n,this.pencil()));return}const r=document.createElement("input");r.type="checkbox",r.checked=t==="true";let i="transform:translateY(1px)";t==="empty"&&(i+=";opacity:0.45",r.title="Empty — no value stored. Click to set true."),this._readonly?r.disabled=!0:(i+=";cursor:pointer",r.addEventListener("change",()=>this.commit(r.checked))),r.style.cssText=i,this.append(r)}pencil(){return Xi(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const rm=Object.freeze(Object.defineProperty({__proto__:null,init:tm,meta:em},Symbol.toStringTag,{value:"Module"})),im={id:"cell-color",name:"Cell Color",type:"cell-renderer",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2h2.3c2 0 3.6-1.6 3.6-3.6C20.7 6 16.9 3 12 3z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="11" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-color.ts"};function sm(e){customElements.get("cell-color")||customElements.define("cell-color",om),e.ui.registerCellRenderer("color","cell-color")}class om extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,r,i){this.value=i}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const r=document.createElement("input");r.type="color",r.value=t,r.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",r.addEventListener("change",()=>this.commit(r.value)),this.append(r)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const am=Object.freeze(Object.defineProperty({__proto__:null,init:sm,meta:im},Symbol.toStringTag,{value:"Module"})),lm={id:"cell-image",name:"Cell Image",type:"cell-renderer",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-image.ts"};function cm(e){customElements.get("cell-image")||customElements.define("cell-image",dm),e.ui.registerCellRenderer("image","cell-image")}class dm extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t??"",this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const r=!!t;this._readonly!==r&&(this._readonly=r,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this.style.display="block",this.style.minWidth="0",this.style.overflow="hidden",this._editing){const i=document.createElement("span");i.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const n=Ji({value:this._value,onCommit:a=>this.commit(a),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:a=>this._editor===a}),s=document.createElement("button");s.type="button",s.textContent="upload",s.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",s.addEventListener("mousedown",a=>a.preventDefault()),s.addEventListener("click",()=>this.pickFile()),i.append(n,s),this.append(i),this._editor=n;return}const t=document.createElement("span");if(t.style.cssText="display:flex;align-items:center;gap:0.4rem;min-width:0",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const i=document.createElement("img");i.src=this._value,i.alt="",i.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(i)}else{const i=document.createElement("span");if(i.style.color="#9ca3af",i.textContent="no image",t.append(i),!this._readonly){const n=document.createElement("button");n.type="button",n.textContent="upload",n.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",n.addEventListener("click",()=>this.pickFile()),t.append(n)}}this.append(this._readonly?t:Qi(t,this.pencil()))}pencil(){return Xi(()=>{this._editing=!0,this.render()},"Edit the image URL")}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const r=t.files?.[0];if(!r)return;const i=new FileReader;i.onload=()=>this.commit(String(i.result)),i.readAsDataURL(r)}),t.click()}commit(t){const r=t!==this._value;this._value=t,this._editing=!1,this.render(),r&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const um=Object.freeze(Object.defineProperty({__proto__:null,init:cm,meta:lm},Symbol.toStringTag,{value:"Module"}));/**
 * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu
 * @version v4.16.1
 * @homepage https://jspanel.de/
 * @license MIT
 * @author Stefan Sträßer - info@jspanel.de
 * @author of dialog extension: Michael Daumling - michael@terrapinlogo.com
 * @github https://github.com/Flyer53/jsPanel4.git
 */let M={version:"4.16.1",date:"2022-11-03 09:18",ajaxAlwaysCallbacks:[],autopositionSpacing:4,closeOnEscape:(()=>{document.addEventListener("keydown",e=>{(e.key==="Escape"||e.code==="Escape"||e.key==="Esc")&&M.getPanels(t=>t.classList.contains("jsPanel")).some(t=>t.options.closeOnEscape?typeof t.options.closeOnEscape=="function"?t.options.closeOnEscape.call(t,t):(t.close(null,!0),!0):!1)},!1)})(),defaults:{boxShadow:3,container:"window",contentSize:{width:"400px",height:"200px"},dragit:{cursor:"move",handles:".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",opacity:.8,disableOnMaximized:!0},header:!0,headerTitle:"jsPanel",headerControls:{size:"md"},iconfont:void 0,maximizedMargin:0,minimizeTo:"default",paneltype:"standard",position:{my:"center",at:"center"},resizeit:{handles:"n, e, s, w, ne, se, sw, nw",minWidth:128,minHeight:38},theme:"default"},defaultAutocloseConfig:{time:"8s",progressbar:!0},defaultSnapConfig:{sensitivity:70,trigger:"panel",active:"both"},extensions:{},globalCallbacks:!1,icons:{close:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>',maximize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>',normalize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>',minimize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>',smallify:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>'},idCounter:0,isIE:document.documentMode||!1,pointerdown:"onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],pointermove:"onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],pointerup:"onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"],polyfills:(()=>{Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e==null)throw new TypeError("Cannot convert first argument to object");let t=Object(e);for(let r=1;r<arguments.length;r++){let i=arguments[r];if(i==null)continue;i=Object(i);let n=Object.keys(Object(i));for(let s=0,a=n.length;s<a;s++){let c=n[s],u=Object.getOwnPropertyDescriptor(i,c);u!==void 0&&u.enumerable&&(t[c]=i[c])}}return t}}),Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),r=t.length,i=new Array(r);r--;)i[r]=[t[r],e[t[r]]];return i}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(let r=0;r<this.length;r++)e.call(t,this[r],r,this)}),(function(e){e.forEach(function(t){t.append=t.append||function(){let r=Array.prototype.slice.call(arguments),i=document.createDocumentFragment();r.forEach(function(n){let s=n instanceof Node;i.appendChild(s?n:document.createTextNode(String(n)))}),this.appendChild(i)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){let t=(this.document||this.ownerDocument).querySelectorAll(e),r,i=this;do for(r=t.length;--r>=0&&t.item(r)!==i;);while(r<0&&(i=i.parentElement));return i}),(function(){if(typeof window.CustomEvent=="function")return!1;function e(t,r){r=r||{bubbles:!1,cancelable:!1,detail:void 0};let i=document.createEvent("CustomEvent");return i.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),i}e.prototype=window.Event.prototype,window.CustomEvent=e})(),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(t===void 0||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var r=t>0?t|0:0;return this.substring(r,r+e.length)===e}}),String.prototype.includes||(String.prototype.includes=function(e,t){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return t===void 0&&(t=0),this.indexOf(e,t)!==-1}),String.prototype.repeat||(String.prototype.repeat=function(e){if(this==null)throw new TypeError("can't convert "+this+" to object");var t=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),t.length==0||e==0)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,r-t.length),t}),Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw new TypeError('"this" is null or not defined');let r=Object(this),i=r.length>>>0;if(i===0)return!1;let n=t|0,s=Math.max(n>=0?n:i-Math.abs(n),0);function a(c,u){return c===u||typeof c=="number"&&typeof u=="number"&&isNaN(c)&&isNaN(u)}for(;s<i;){if(a(r[s],e))return!0;s++}return!1}})})(),ziBase:100,colorFilledLight:.81,colorFilledDark:.08,colorFilled:0,colorBrightnessThreshold:.55,colorNames:{default:"b0bec5",secondary:"b0bec5",primary:"01579b",info:"039be5",success:"2e7d32",warning:"f57f17",danger:"dd2c00",light:"e0e0e0",dark:"263238",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",grey50:"fafafa",grey100:"f5f5f5",grey200:"eeeeee",grey300:"e0e0e0",grey400:"bdbdbd",grey500:"9e9e9e",grey600:"757575",grey700:"616161",grey800:"424242",grey900:"212121",gray50:"fafafa",gray100:"f5f5f5",gray200:"eeeeee",gray300:"e0e0e0",gray400:"bdbdbd",gray500:"9e9e9e",gray600:"757575",gray700:"616161",gray800:"424242",gray900:"212121",bluegrey50:"eceff1",bluegrey100:"CFD8DC",bluegrey200:"B0BEC5",bluegrey300:"90A4AE",bluegrey400:"78909C",bluegrey500:"607D8B",bluegrey600:"546E7A",bluegrey700:"455A64",bluegrey800:"37474F",bluegrey900:"263238",bluegray50:"eceff1",bluegray100:"CFD8DC",bluegray200:"B0BEC5",bluegray300:"90A4AE",bluegray400:"78909C",bluegray500:"607D8B",bluegray600:"546E7A",bluegray700:"455A64",bluegray800:"37474F",bluegray900:"263238",red50:"FFEBEE",red100:"FFCDD2",red200:"EF9A9A",red300:"E57373",red400:"EF5350",red500:"F44336",red600:"E53935",red700:"D32F2F",red800:"C62828",red900:"B71C1C",reda100:"FF8A80",reda200:"FF5252",reda400:"FF1744",reda700:"D50000",pink50:"FCE4EC",pink100:"F8BBD0",pink200:"F48FB1",pink300:"F06292",pink400:"EC407A",pink500:"E91E63",pink600:"D81B60",pink700:"C2185B",pink800:"AD1457",pink900:"880E4F",pinka100:"FF80AB",pinka200:"FF4081",pinka400:"F50057",pinka700:"C51162",purple50:"F3E5F5",purple100:"E1BEE7",purple200:"CE93D8",purple300:"BA68C8",purple400:"AB47BC",purple500:"9C27B0",purple600:"8E24AA",purple700:"7B1FA2",purple800:"6A1B9A",purple900:"4A148C",purplea100:"EA80FC",purplea200:"E040FB",purplea400:"D500F9",purplea700:"AA00FF",deeppurple50:"EDE7F6",deeppurple100:"D1C4E9",deeppurple200:"B39DDB",deeppurple300:"9575CD",deeppurple400:"7E57C2",deeppurple500:"673AB7",deeppurple600:"5E35B1",deeppurple700:"512DA8",deeppurple800:"4527A0",deeppurple900:"311B92",deeppurplea100:"B388FF",deeppurplea200:"7C4DFF",deeppurplea400:"651FFF",deeppurplea700:"6200EA",indigo50:"E8EAF6",indigo100:"C5CAE9",indigo200:"9FA8DA",indigo300:"7986CB",indigo400:"5C6BC0",indigo500:"3F51B5",indigo600:"3949AB",indigo700:"303F9F",indigo800:"283593",indigo900:"1A237E",indigoa100:"8C9EFF",indigoa200:"536DFE",indigoa400:"3D5AFE",indigoa700:"304FFE",blue50:"E3F2FD",blue100:"BBDEFB",blue200:"90CAF9",blue300:"64B5F6",blue400:"42A5F5",blue500:"2196F3",blue600:"1E88E5",blue700:"1976D2",blue800:"1565C0",blue900:"0D47A1",bluea100:"82B1FF",bluea200:"448AFF",bluea400:"2979FF",bluea700:"2962FF",lightblue50:"E1F5FE",lightblue100:"B3E5FC",lightblue200:"81D4FA",lightblue300:"4FC3F7",lightblue400:"29B6F6",lightblue500:"03A9F4",lightblue600:"039BE5",lightblue700:"0288D1",lightblue800:"0277BD",lightblue900:"01579B",lightbluea100:"80D8FF",lightbluea200:"40C4FF",lightbluea400:"00B0FF",lightbluea700:"0091EA",cyan50:"E0F7FA",cyan100:"B2EBF2",cyan200:"80DEEA",cyan300:"4DD0E1",cyan400:"26C6DA",cyan500:"00BCD4",cyan600:"00ACC1",cyan700:"0097A7",cyan800:"00838F",cyan900:"006064",cyana100:"84FFFF",cyana200:"18FFFF",cyana400:"00E5FF",cyana700:"00B8D4",teal50:"E0F2F1",teal100:"B2DFDB",teal200:"80CBC4",teal300:"4DB6AC",teal400:"26A69A",teal500:"009688",teal600:"00897B",teal700:"00796B",teal800:"00695C",teal900:"004D40",teala100:"A7FFEB",teala200:"64FFDA",teala400:"1DE9B6",teala700:"00BFA5",green50:"E8F5E9",green100:"C8E6C9",green200:"A5D6A7",green300:"81C784",green400:"66BB6A",green500:"4CAF50",green600:"43A047",green700:"388E3C",green800:"2E7D32",green900:"1B5E20",greena100:"B9F6CA",greena200:"69F0AE",greena400:"00E676",greena700:"00C853",lightgreen50:"F1F8E9",lightgreen100:"DCEDC8",lightgreen200:"C5E1A5",lightgreen300:"AED581",lightgreen400:"9CCC65",lightgreen500:"8BC34A",lightgreen600:"7CB342",lightgreen700:"689F38",lightgreen800:"558B2F",lightgreen900:"33691E",lightgreena100:"CCFF90",lightgreena200:"B2FF59",lightgreena400:"76FF03",lightgreena700:"64DD17",lime50:"F9FBE7",lime100:"F0F4C3",lime200:"E6EE9C",lime300:"DCE775",lime400:"D4E157",lime500:"CDDC39",lime600:"C0CA33",lime700:"AFB42B",lime800:"9E9D24",lime900:"827717",limea100:"F4FF81",limea200:"EEFF41",limea400:"C6FF00",limea700:"AEEA00",yellow50:"FFFDE7",yellow100:"FFF9C4",yellow200:"FFF59D",yellow300:"FFF176",yellow400:"FFEE58",yellow500:"FFEB3B",yellow600:"FDD835",yellow700:"FBC02D",yellow800:"F9A825",yellow900:"F57F17",yellowa100:"FFFF8D",yellowa200:"FFFF00",yellowa400:"FFEA00",yellowa700:"FFD600",amber50:"FFF8E1",amber100:"FFECB3",amber200:"FFE082",amber300:"FFD54F",amber400:"FFCA28",amber500:"FFC107",amber600:"FFB300",amber700:"FFA000",amber800:"FF8F00",amber900:"FF6F00",ambera100:"FFE57F",ambera200:"FFD740",ambera400:"FFC400",ambera700:"FFAB00",orange50:"FFF3E0",orange100:"FFE0B2",orange200:"FFCC80",orange300:"FFB74D",orange400:"FFA726",orange500:"FF9800",orange600:"FB8C00",orange700:"F57C00",orange800:"EF6C00",orange900:"E65100",orangea100:"FFD180",orangea200:"FFAB40",orangea400:"FF9100",orangea700:"FF6D00",deeporange50:"FBE9E7",deeporange100:"FFCCBC",deeporange200:"FFAB91",deeporange300:"FF8A65",deeporange400:"FF7043",deeporange500:"FF5722",deeporange600:"F4511E",deeporange700:"E64A19",deeporange800:"D84315",deeporange900:"BF360C",deeporangea100:"FF9E80",deeporangea200:"FF6E40",deeporangea400:"FF3D00",deeporangea700:"DD2C00",brown50:"EFEBE9",brown100:"D7CCC8",brown200:"BCAAA4",brown300:"A1887F",brown400:"8D6E63",brown500:"795548",brown600:"6D4C41",brown700:"5D4037",brown800:"4E342E",brown900:"3E2723","mdb-default":"2BBBAD","mdb-default-dark":"00695c","mdb-primary":"4285F4","mdb-primary-dark":"0d47a1","mdb-secondary":"aa66cc","mdb-secondary-dark":"9933CC","mdb-danger":"ff4444","mdb-danger-dark":"CC0000","mdb-warning":"ffbb33","mdb-warning-dark":"FF8800","mdb-success":"00C851","mdb-success-dark":"007E33","mdb-info":"33b5e5","mdb-info-dark":"0099CC","mdb-elegant":"2E2E2E","mdb-elegant-dark":"212121","mdb-stylish":"4B515D","mdb-stylish-dark":"3E4551","mdb-unique":"3F729B","mdb-unique-dark":"1C2331","mdb-special":"37474F","mdb-special-dark":"263238"},errorReporting:1,modifier:!1,helper:(()=>{document.addEventListener("keydown",e=>M.modifier=e),document.addEventListener("keyup",()=>M.modifier=!1)})(),usePointerEvents(e=!0){e?(this.pointerdown="onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"]):(this.pointerdown="ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="ontouchend"in window?["touchend","mouseup"]:["mouseup"])},pOcontainer(e){if(e==="window")return document.body;if(typeof e=="string"){let t=document.querySelectorAll(e);return t.length&&t.length>0?t:!1}else{if(e.nodeType===1)return e;if(e.length)return e[0]}return!1},pOcontainment(e){let t=e;if(typeof e=="function"&&(t=e()),typeof t=="number")return[t,t,t,t];if(Array.isArray(t)){if(t.length===1)return[t[0],t[0],t[0],t[0]];if(t.length===2)return t.concat(t);t.length===3&&(t[3]=t[1])}return t},pOsize(e,t){let r=t||this.defaults.contentSize;const i=e.parentElement;if(typeof r=="string"){const n=r.trim().split(" ");r={},r.width=n[0],n.length===2?r.height=n[1]:r.height=n[0]}else r.width&&!r.height?r.height=r.width:r.height&&!r.width&&(r.width=r.height);if(String(r.width).match(/^[\d.]+$/gi))r.width+="px";else if(typeof r.width=="string"&&r.width.endsWith("%"))if(i===document.body)r.width=window.innerWidth*(parseFloat(r.width)/100)+"px";else{const n=window.getComputedStyle(i),s=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth);r.width=(parseFloat(n.width)-s)*(parseFloat(r.width)/100)+"px"}else typeof r.width=="function"&&(r.width=r.width.call(e,e),(typeof r.width=="number"||typeof r.width=="string"&&r.width.match(/^[\d.]+$/gi))&&(r.width+="px"));if(String(r.height).match(/^[\d.]+$/gi))r.height+="px";else if(typeof r.height=="string"&&r.height.endsWith("%"))if(i===document.body)r.height=window.innerHeight*(parseFloat(r.height)/100)+"px";else{const n=window.getComputedStyle(i),s=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth);r.height=(parseFloat(n.height)-s)*(parseFloat(r.height)/100)+"px"}else typeof r.height=="function"&&(r.height=r.height.call(e,e),(typeof r.height=="number"||typeof r.height=="string"&&r.height.match(/^[\d.]+$/gi))&&(r.height+="px"));return r},pOborder(e){let t=[],r=e.trim().replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," ").split(" ");return r.forEach((i,n)=>{(i.startsWith("--")||i.startsWith("var"))&&(r[n]=M.getCssVariableValue(i))}),r.forEach(i=>{M.colorNames[i]?t[2]="#"+M.colorNames[i]:i.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/)?t[1]=i:i.match(/(thin|medium|thick)|(\d*\.?\d*(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vmax|vmin|vb|vi|px|cm|mm|Q|in|pc|pt))/)?t[0]=i:t[2]=i}),t[0]||(t[0]="medium"),t[1]||(t[1]="solid"),t[2]||(t[2]=""),t},pOheaderControls(e){if(typeof e=="string"){let t={},r=e.toLowerCase(),i=r.match(/xl|lg|md|sm|xs/),n=r.match(/closeonly|none/);return i&&(t.size=i[0]),n&&(t=Object.assign({},t,{maximize:"remove",normalize:"remove",minimize:"remove",smallify:"remove"}),n[0]==="none"&&(t.close="remove")),Object.assign({},this.defaults.headerControls,t)}else return Object.assign({},this.defaults.headerControls,e)},pOtheme(e){e=e.trim();let t,r="";if(e.match(/^(rgb|hsl|var)/)){let i=e.indexOf(")");t=e.slice(0,i+1).replace(/\s+/g,""),t.startsWith("var")&&(t=M.getCssVariableValue(t)),r=e.slice(i+1,e.length).trim()}else if(e.match(/^(#|\w|--)/)){let i=e.indexOf(" ");i>0?(t=e.slice(0,i+1).replace(/\s+/g,""),r=e.slice(i+1,e.length).trim()):t=e,t.startsWith("--")&&(t=M.getCssVariableValue(t))}if(t.match(/^([\da-f]{3}|[\da-f]{6})$/gi)&&(t="#"+t),r.startsWith("fillcolor")){let i=r.indexOf(" ");r=r.slice(i+1,r.length).trim().replace(/\s+/g,""),r.match(/^([\da-f]{3}|[\da-f]{6})$/gi)?r="#"+r:M.colorNames[r]?r="#"+M.colorNames[r]:r.match(/^(--|var)/)?r=M.getCssVariableValue(r):r="#fff"}return{color:t,colors:!1,filling:r}},color(e){let t=e.toLowerCase(),r,i,n,s,a,c,u,p,w,b={};const $=/^#?([\da-f]{3}|[\da-f]{6})$/gi,D=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,P=/^hsla?\((\d{1,3}),(\d{1,3}%),(\d{1,3}%),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,S=this.colorNames;return S[t]&&(t=S[t]),t.match($)!==null?(t=t.replace("#",""),t.length%2===1?(r=t.slice(0,1).repeat(2),i=t.slice(1,2).repeat(2),n=t.slice(2,3).repeat(2),b.rgb={r:parseInt(r,16),g:parseInt(i,16),b:parseInt(n,16)},b.hex=`#${r}${i}${n}`):(b.rgb={r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)},b.hex=`#${t}`),w=this.rgbToHsl(b.rgb.r,b.rgb.g,b.rgb.b),b.hsl=w,b.rgb.css=`rgb(${b.rgb.r},${b.rgb.g},${b.rgb.b})`):t.match(D)?(u=D.exec(t),b.rgb={css:t,r:u[1],g:u[2],b:u[3]},b.hex=this.rgbToHex(u[1],u[2],u[3]),w=this.rgbToHsl(u[1],u[2],u[3]),b.hsl=w):t.match(P)?(u=P.exec(t),s=u[1]/360,a=u[2].slice(0,u[2].length-1)/100,c=u[3].slice(0,u[3].length-1)/100,p=this.hslToRgb(s,a,c),b.rgb={css:`rgb(${p[0]},${p[1]},${p[2]})`,r:p[0],g:p[1],b:p[2]},b.hex=this.rgbToHex(b.rgb.r,b.rgb.g,b.rgb.b),b.hsl={css:`hsl(${u[1]},${u[2]},${u[3]})`,h:u[1],s:u[2],l:u[3]}):(b.hex="#f5f5f5",b.rgb={css:"rgb(245,245,245)",r:245,g:245,b:245},b.hsl={css:"hsl(0,0%,96%)",h:0,s:"0%",l:"96%"}),b},calcColors(e){const t=this.colorBrightnessThreshold,r=this.color(e),i=this.lighten(e,this.colorFilledLight),n=this.darken(e,this.colorFilled),s=this.perceivedBrightness(e)<=t?"#ffffff":"#000000",a=this.perceivedBrightness(i)<=t?"#ffffff":"#000000",c=this.perceivedBrightness(n)<=t?"#ffffff":"#000000",u=this.lighten(e,this.colorFilledDark),p=this.perceivedBrightness(u)<=t?"#ffffff":"#000000";return[r.hsl.css,i,n,s,a,c,u,p]},darken(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i-i*t)+"%";return`hsl(${r.h},${r.s},${n})`},lighten(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i+(100-i)*t)+"%";return`hsl(${r.h},${r.s},${n})`},hslToRgb(e,t,r){let i,n,s;if(t===0)i=n=s=r;else{let a=(p,w,b)=>(b<0&&(b+=1),b>1&&(b-=1),b<.16666666666666666?p+(w-p)*6*b:b<.5?w:b<.6666666666666666?p+(w-p)*(.6666666666666666-b)*6:p),c=r<.5?r*(1+t):r+t-r*t,u=2*r-c;i=a(u,c,e+1/3),n=a(u,c,e),s=a(u,c,e-1/3)}return[Math.round(i*255),Math.round(n*255),Math.round(s*255)]},rgbToHsl(e,t,r){e/=255,t/=255,r/=255;let i=Math.max(e,t,r),n=Math.min(e,t,r),s,a,c=(i+n)/2;if(i===n)s=a=0;else{let u=i-n;switch(a=c>.5?u/(2-i-n):u/(i+n),i){case e:s=(t-r)/u+(t<r?6:0);break;case t:s=(r-e)/u+2;break;case r:s=(e-t)/u+4;break}s/=6}return s=Math.round(s*360),a=Math.round(a*100)+"%",c=Math.round(c*100)+"%",{css:"hsl("+s+","+a+","+c+")",h:s,s:a,l:c}},rgbToHex(e,t,r){let i=Number(e).toString(16),n=Number(t).toString(16),s=Number(r).toString(16);return i.length===1&&(i=`0${i}`),n.length===1&&(n=`0${n}`),s.length===1&&(s=`0${s}`),`#${i}${n}${s}`},perceivedBrightness(e){const t=this.color(e).rgb;return t.r/255*.2126+t.g/255*.7152+t.b/255*.0722},pOposition(e){let t={},r=e.trim().split(/\s+/),i=r.filter(a=>a.match(/^(down|right|up|left)$/i));i.length&&(t.autoposition=i[0],r.splice(r.indexOf(i[0]),1));let n=r.filter(a=>a.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i));n.length?(t.my=n[0],t.at=n[1]||n[0],r.splice(r.indexOf(n[0]),1),n[1]&&r.splice(r.indexOf(n[1]),1)):(t.my="center",t.at="center");let s=r.filter(a=>a.match(/^[+-]?\d*\.?\d+[a-z%]*$/i));return s.length&&(t.offsetX=s[0].match(/^[+-]?\d*\.?\d+$/i)?`${s[0]}px`:s[0],s[1]?t.offsetY=s[1].match(/^[+-]?\d*\.?\d+$/i)?`${s[1]}px`:s[1]:t.offsetY=t.offsetX,r.splice(r.indexOf(s[0]),1),s[1]&&r.splice(r.indexOf(s[1]),1)),r.length&&(t.of=r.join(" ")),t},position(e,t){if(!t)return e.style.opacity=1,e;typeof t=="string"?t=Object.assign({},this.defaults.position,this.pOposition(t)):t=Object.assign({},this.defaults.position,t),["my","at","of"].forEach(S=>{typeof t[S]=="function"&&(t[S]=t[S].call(e,e))}),e.options.container==="window"&&(e.style.position="fixed"),typeof e=="string"?e=document.querySelector(e):Object.getPrototypeOf(e).jquery&&(e=e[0]);const r=e.options.container==="window"?"window":e.parentElement,i=e.getBoundingClientRect(),n=e.parentElement.getBoundingClientRect(),s=r==="window"?{left:0,top:0,width:document.documentElement.clientWidth,height:window.innerHeight}:{width:n.width,height:n.height,left:n.left,top:n.top},a=r==="window"?{x:1,y:1}:{x:s.width/r.offsetWidth,y:s.height/r.offsetHeight},c=r==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:window.getComputedStyle(r);s.width-=(parseFloat(c.borderLeftWidth)+parseFloat(c.borderRightWidth))*a.x,s.height-=(parseFloat(c.borderTopWidth)+parseFloat(c.borderBottomWidth))*a.y;let u;t.of?typeof t.of=="string"?u=t.of==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:document.querySelector(t.of).getBoundingClientRect():Object.getPrototypeOf(t.of).jquery?u=t.of[0].getBoundingClientRect():u=t.of.getBoundingClientRect():u=s;let p=this.getScrollbarWidth(document.body),w=this.getScrollbarWidth(e.parentElement),b="0px";t.my.startsWith("left-")?t.at.startsWith("left-")?t.of?b=u.left-s.left-parseFloat(c.borderLeftWidth)+"px":b="0px":t.at.startsWith("center")?t.of?b=u.left-s.left-parseFloat(c.borderLeftWidth)+u.width/2+"px":b=s.width/2+"px":t.at.startsWith("right-")&&(t.of?b=u.left-s.left-parseFloat(c.borderLeftWidth)+u.width+"px":b=s.width+"px"):t.my.startsWith("center")?t.at.startsWith("left-")?t.of?b=u.left-s.left-parseFloat(c.borderLeftWidth)-i.width/2+"px":b=-i.width/2+"px":t.at.startsWith("center")?t.of?b=u.left-s.left-parseFloat(c.borderLeftWidth)-(i.width-u.width)/2+"px":b=s.width/2-i.width/2+"px":t.at.startsWith("right-")&&(t.of?b=u.left-s.left-parseFloat(c.borderLeftWidth)+(u.width-i.width/2)+"px":b=s.width-i.width/2+"px"):t.my.startsWith("right-")&&(t.at.startsWith("left-")?t.of?b=u.left-s.left-parseFloat(c.borderLeftWidth)-i.width+"px":b=-i.width+"px":t.at.startsWith("center")?t.of?b=u.left-s.left-parseFloat(c.borderLeftWidth)-i.width+u.width/2+"px":b=s.width/2-i.width+"px":t.at.startsWith("right-")&&(t.of?b=u.left-s.left-parseFloat(c.borderLeftWidth)+u.width-i.width+"px":b=s.width-i.width+"px",r!=="window"&&(b=parseFloat(b)-w.y+"px")));let $="0px";t.my.endsWith("-top")?t.at.endsWith("-top")?t.of?$=u.top-s.top-parseFloat(c.borderTopWidth)+"px":$="0px":t.at.endsWith("center")?t.of?$=u.top-s.top-parseFloat(c.borderTopWidth)+u.height/2+"px":$=s.height/2+"px":t.at.endsWith("-bottom")&&(t.of?$=u.top-s.top-parseFloat(c.borderTopWidth)+u.height+"px":$=s.height+"px"):t.my.endsWith("center")?t.at.endsWith("-top")?t.of?$=u.top-s.top-parseFloat(c.borderTopWidth)-i.height/2+"px":$=-i.height/2+"px":t.at.endsWith("center")?t.of?$=u.top-s.top-parseFloat(c.borderTopWidth)-i.height/2+u.height/2+"px":$=s.height/2-i.height/2+"px":t.at.endsWith("-bottom")&&(t.of?$=u.top-s.top-parseFloat(c.borderTopWidth)-i.height/2+u.height+"px":$=s.height-i.height/2+"px"):t.my.endsWith("-bottom")&&(t.at.endsWith("-top")?t.of?$=u.top-s.top-parseFloat(c.borderTopWidth)-i.height+"px":$=-i.height+"px":t.at.endsWith("center")?t.of?$=u.top-s.top-parseFloat(c.borderTopWidth)-i.height+u.height/2+"px":$=s.height/2-i.height+"px":t.at.endsWith("-bottom")&&(t.of?$=u.top-s.top-parseFloat(c.borderTopWidth)-i.height+u.height+"px":$=s.height-i.height+"px",r!=="window"?$=parseFloat($)-w.x+"px":$=parseFloat($)-p.x+"px")),e.style.left=a.x===1?b:parseFloat(b)/a.x+"px",e.style.top=a.y===1?$:parseFloat($)/a.y+"px";let D=getComputedStyle(e),P={left:D.left,top:D.top};return t.autoposition&&t.my===t.at&&["left-top","center-top","right-top","left-bottom","center-bottom","right-bottom"].indexOf(t.my)>=0&&(P=this.applyPositionAutopos(e,P,t)),(t.offsetX||t.offsetY)&&(P=this.applyPositionOffset(e,P,t)),(t.minLeft||t.minTop||t.maxLeft||t.maxTop)&&(P=this.applyPositionMinMax(e,P,t)),t.modify&&(P=this.applyPositionModify(e,P,t)),typeof e.options.opacity=="number"?e.style.opacity=e.options.opacity:e.style.opacity=1,e},applyPositionAutopos(e,t,r){const i=`${r.my}-${r.autoposition.toLowerCase()}`;e.classList.add(i);const n=Array.prototype.slice.call(document.querySelectorAll(`.${i}`)),s=n.indexOf(e);if(n.length>1){switch(r.autoposition){case"down":n.forEach((a,c)=>{c>0&&c<=s&&(t.top=parseFloat(t.top)+n[--c].getBoundingClientRect().height+M.autopositionSpacing+"px")});break;case"up":n.forEach((a,c)=>{c>0&&c<=s&&(t.top=parseFloat(t.top)-n[--c].getBoundingClientRect().height-M.autopositionSpacing+"px")});break;case"right":n.forEach((a,c)=>{c>0&&c<=s&&(t.left=parseFloat(t.left)+n[--c].getBoundingClientRect().width+M.autopositionSpacing+"px")});break;case"left":n.forEach((a,c)=>{c>0&&c<=s&&(t.left=parseFloat(t.left)-n[--c].getBoundingClientRect().width-M.autopositionSpacing+"px")});break}e.style.left=t.left,e.style.top=t.top}return{left:t.left,top:t.top}},applyPositionOffset(e,t,r){["offsetX","offsetY"].forEach(n=>{r[n]?(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),isNaN(r[n])===!1&&(r[n]=`${r[n]}px`)):r[n]="0px"}),e.style.left=`calc(${e.style.left} + ${r.offsetX})`,e.style.top=`calc(${e.style.top} + ${r.offsetY})`;const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionMinMax(e,t,r){if(["minLeft","minTop","maxLeft","maxTop"].forEach(n=>{r[n]&&(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),(Number.isInteger(r[n])||r[n].match(/^\d+$/))&&(r[n]=`${r[n]}px`))}),r.minLeft){e.style.left=r.minLeft;let n=getComputedStyle(e).left;parseFloat(n)<parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.minTop){e.style.top=r.minTop;let n=getComputedStyle(e).top;parseFloat(n)<parseFloat(t.top)?e.style.top=t.top:t.top=n}if(r.maxLeft){e.style.left=r.maxLeft;let n=getComputedStyle(e).left;parseFloat(n)>parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.maxTop){e.style.top=r.maxTop;let n=getComputedStyle(e).top;parseFloat(n)>parseFloat(t.top)?e.style.top=t.top:t.top=n}const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionModify(e,t,r){if(r.modify&&typeof r.modify=="function"){const n=r.modify.call(t,t,r);e.style.left=Number.isInteger(n.left)||n.left.match(/^\d+$/)?`${n.left}px`:n.left,e.style.top=Number.isInteger(n.top)||n.top.match(/^\d+$/)?`${n.top}px`:n.top}const i=getComputedStyle(e);return{left:i.left,top:i.top}},autopositionRemaining(e){let t,r=e.options.container;["left-top-down","left-top-right","center-top-down","right-top-down","right-top-left","left-bottom-up","left-bottom-right","center-bottom-up","right-bottom-up","right-bottom-left"].forEach(i=>{e.classList.contains(i)&&(t=i)}),t&&(r==="window"?document.body:typeof r=="string"?document.querySelector(r):r).querySelectorAll(`.${t}`).forEach(n=>n.reposition())},getThemeDetails(e){const t=this.pOtheme(e);if(t.color.startsWith("bootstrap-")){let r=t.color.indexOf("-"),i=document.createElement("button");i.className="btn btn"+t.color.slice(r),document.body.appendChild(i),t.color=getComputedStyle(i).backgroundColor.replace(/\s+/gi,""),document.body.removeChild(i),i=void 0}return t.colors=this.calcColors(t.color),t},clearTheme(e,t){return e.content.classList.remove("jsPanel-content-filled","jsPanel-content-filledlight"),e.header.classList.remove("jsPanel-hdr-light"),e.header.classList.remove("jsPanel-hdr-dark"),e.style.backgroundColor="",this.setStyles(e.headertoolbar,{boxShadow:"",width:"",marginLeft:"",borderTopColor:"transparent"}),this.setStyles(e.content,{background:"",borderTopColor:"transparent"}),e.header.style.background="",Array.prototype.slice.call(e.controlbar.querySelectorAll(".jsPanel-icon")).concat([e.headerlogo,e.headertitle,e.headertoolbar,e.content]).forEach(r=>r.style.color=""),t&&t.call(e,e),e},applyColorTheme(e,t){if(e.style.backgroundColor=t.colors[0],e.header.style.backgroundColor=t.colors[0],e.header.style.color=t.colors[3],[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(r=>e.querySelector(r).style.color=t.colors[3]),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(r=>r.style.color=t.colors[3]),typeof e.options.theme=="string"&&t.filling==="filled"&&(e.content.style.borderTop=t.colors[3]==="#000000"?"1px solid rgba(0,0,0,0.15)":"1px solid rgba(255,255,255,0.15)"),t.colors[3]==="#000000"?e.header.classList.add("jsPanel-hdr-light"):e.header.classList.add("jsPanel-hdr-dark"),t.filling)switch(t.filling){case"filled":this.setStyles(e.content,{backgroundColor:t.colors[2],color:t.colors[3]});break;case"filledlight":e.content.style.backgroundColor=t.colors[1];break;case"filleddark":this.setStyles(e.content,{backgroundColor:t.colors[6],color:t.colors[7]});break;default:e.content.style.backgroundColor=t.filling,e.content.style.color=this.perceivedBrightness(t.filling)<=this.colorBrightnessThreshold?"#fff":"#000"}return e},applyCustomTheme(e,t){let r={bgPanel:"#ffffff",bgContent:"#ffffff",bgFooter:"#f5f5f5",colorHeader:"#000000",colorContent:"#000000",colorFooter:"#000000",border:void 0,borderRadius:void 0},i=typeof t=="object"?Object.assign(r,t):r,n=i.bgPanel,s=i.bgContent,a=i.colorHeader,c=i.colorContent,u=i.bgFooter,p=i.colorFooter;return this.colorNames[n]?e.style.background="#"+this.colorNames[n]:e.style.background=this.getCssVariableValue(n),this.colorNames[a]&&(a="#"+this.colorNames[a]),[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach($=>e.querySelector($).style.color=this.getCssVariableValue(a)),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach($=>$.style.color=this.getCssVariableValue(a)),this.colorNames[s]?e.content.style.background="#"+this.colorNames[s]:e.content.style.background=this.getCssVariableValue(s),this.colorNames[c]?e.content.style.color="#"+this.colorNames[c]:e.content.style.color=this.getCssVariableValue(c),this.perceivedBrightness(a)>this.colorBrightnessThreshold?e.header.classList.add("jsPanel-hdr-dark"):e.header.classList.add("jsPanel-hdr-light"),this.perceivedBrightness(c)>this.colorBrightnessThreshold?e.content.style.borderTop="1px solid rgba(255,255,255,0.15)":e.content.style.borderTop="1px solid rgba(0,0,0,0.15)",this.colorNames[u]?e.footer.style.background="#"+this.colorNames[u]:e.footer.style.background=this.getCssVariableValue(u),this.colorNames[p]?e.footer.style.color="#"+this.colorNames[p]:e.footer.style.color=this.getCssVariableValue(p),i.border&&e.setBorder(i.border),i.borderRadius&&(e.options.borderRadius=void 0,e.setBorderRadius(i.borderRadius)),e},getCssVariableValue(e){if(e.startsWith("--"))return getComputedStyle(document.documentElement).getPropertyValue(e).replace(/\s+/g,"");if(e.startsWith("var")){let t=e.slice(e.indexOf("(")+1,e.indexOf(")"));return getComputedStyle(document.documentElement).getPropertyValue(t).replace(/\s+/g,"")}return e},getScrollbarWidth(e=document.body){if(e===document.body)return{y:window.innerWidth-document.documentElement.clientWidth,x:window.innerHeight-document.documentElement.clientHeight};{let t=getComputedStyle(e);return{y:e.offsetWidth-e.clientWidth-parseFloat(t.borderRightWidth)-parseFloat(t.borderLeftWidth),x:e.offsetHeight-e.clientHeight-parseFloat(t.borderBottomWidth)-parseFloat(t.borderTopWidth)}}},remClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.remove(r)),e},setClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.add(r)),e},setStyles(e,t){for(const[r,i]of Object.entries(t))e.style[r]=typeof i=="string"?M.getCssVariableValue(i):i;return e},setStyle(e,t){return this.setStyles.call(e,e,t)},strToHtml(e){return document.createRange().createContextualFragment(e)},toggleClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.contains(r)?e.classList.remove(r):e.classList.add(r)),e},emptyNode(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e},addScript(e,t="application/javascript",r){if(!document.querySelector(`script[src="${e}"]`)){const i=document.createElement("script");i.src=e,i.type=t,document.head.appendChild(i),r&&(i.onload=r)}},ajax(e,t){let r,i,n=new XMLHttpRequest;const s={method:"GET",async:!0,user:"",pwd:"",done:function(){if(t){let a=M.strToHtml(this.responseText);r.urlSelector&&(a=a.querySelector(r.urlSelector)),t.contentRemove(),t.content.append(a)}},autoresize:!0,autoreposition:!0};if(t&&typeof e=="string")r=Object.assign({},s,{url:e});else if(typeof e=="object"&&e.url)r=Object.assign({},s,e),r.url=e.url,r.async===!1&&(r.timeout=0,r.withCredentials&&(r.withCredentials=void 0),r.responseType&&(r.responseType=void 0));else{this.errorReporting&&M.errorpanel("XMLHttpRequest seems to miss the <mark>url</mark> parameter!");return}i=r.url.trim().split(/\s+/),r.url=encodeURI(i[0]),i.length>1&&(i.shift(),r.urlSelector=i.join(" ")),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?t?r.done.call(n,n,t):r.done.call(n,n):r.fail&&(t?r.fail.call(n,n,t):r.fail.call(n,n)),r.always&&(t?r.always.call(n,n,t):r.always.call(n,n)),t&&(r.autoresize||r.autoreposition)&&M.ajaxAutoresizeAutoreposition(t,r),M.ajaxAlwaysCallbacks.length&&M.ajaxAlwaysCallbacks.forEach(a=>{t?a.call(n,n,t):a.call(n,n)}))},n.open(r.method,r.url,r.async,r.user,r.pwd),n.timeout=r.timeout||0,r.withCredentials&&(n.withCredentials=r.withCredentials),r.responseType&&(n.responseType=r.responseType),r.beforeSend&&(t?r.beforeSend.call(n,n,t):r.beforeSend.call(n,n)),r.data?n.send(r.data):n.send(null)},fetch(e,t){let r;const i={bodyMethod:"text",autoresize:!0,autoreposition:!0,done:function(s,a){if(a){let c=M.strToHtml(s);a.contentRemove(),a.content.append(c)}}};if(t&&typeof e=="string")r=Object.assign({},i,{resource:encodeURI(e)});else if(typeof e=="object"&&e.resource)r=Object.assign({},i,e),r.resource=encodeURI(e.resource);else{this.errorReporting&&M.errorpanel("Fetch Request seems to miss the <mark>resource</mark> parameter!");return}const n=r.fetchInit||{};r.beforeSend&&(t?r.beforeSend.call(e,e,t):r.beforeSend.call(e,e)),fetch(r.resource,n).then(s=>{if(s.ok)return s[r.bodyMethod]()}).then(s=>{t?r.done.call(s,s,t):r.done.call(s,s),t&&(r.autoresize||r.autoreposition)&&M.ajaxAutoresizeAutoreposition(t,r)})},ajaxAutoresizeAutoreposition(e,t){const r=e.options.contentSize;if(typeof r=="string"&&r.match(/auto/i)){const i=r.split(" "),n=Object.assign({},{width:i[0],height:i[1]});t.autoresize&&e.resize(n),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}else if(typeof r=="object"&&(r.width==="auto"||r.height==="auto")){const i=Object.assign({},r);t.autoresize&&e.resize(i),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}},createPanelTemplate(e=!0){const t=document.createElement("div");return t.className="jsPanel",t.style.left="0",t.style.top="0",e&&["close","maximize","normalize","minimize","smallify"].forEach(r=>{t.setAttribute(`data-btn${r}`,"enabled")}),t.innerHTML=`<div class="jsPanel-hdr">
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
                            </div>`,e},createSnapArea(e,t,r){const i=document.createElement("div"),n=e.parentElement;i.className=`jsPanel-snap-area jsPanel-snap-area-${t}`,t==="lt"||t==="rt"||t==="rb"||t==="lb"?(i.style.width=r+"px",i.style.height=r+"px"):t==="ct"||t==="cb"?i.style.height=r+"px":(t==="lc"||t==="rc")&&(i.style.width=r+"px"),n!==document.body&&(i.style.position="absolute"),document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${t}`)||e.parentElement.appendChild(i)},removeSnapAreas(){document.querySelectorAll(".jsPanel-snap-area").forEach(e=>e.parentElement.removeChild(e))},extend(e){if(Object.prototype.toString.call(e)==="[object Object]")for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this.extensions[t]=e[t])},getPanels(e=function(){return this.classList.contains("jsPanel-standard")}){return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(t=>e.call(t,t)).sort((t,r)=>r.style.zIndex-t.style.zIndex)},processCallbacks(e,t,r="some",i,n){if(typeof t=="function"&&(t=[t]),r)return t[r](s=>s.call(e,e,i,n));t.forEach(s=>s.call(e,e,i,n))},resetZi(){this.zi=((e=M.ziBase)=>{let t=e;return{next:()=>t++}})(),Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((e,t)=>e.style.zIndex-t.style.zIndex).forEach(e=>e.style.zIndex=M.zi.next())},errorpanel(e){this.create({paneltype:"error",dragit:!1,resizeit:!1,theme:{bgPanel:"white",bgContent:"white",colorHeader:"rebeccapurple",colorContent:"#333333",border:"2px solid rebeccapurple"},borderRadius:".33rem",headerControls:"closeonly xs",headerTitle:"&#9888; jsPanel Error",contentSize:{width:"50%",height:"auto"},position:"center-top 0 5 down",animateIn:"jsPanelFadeIn",content:`<div class="jsPanel-error-content-separator"></div><p>${e}</p>`})},create(e={},t){M.zi||(M.zi=((m=M.ziBase)=>{let x=m;return{next:()=>x++}})()),e.config?(e=Object.assign({},this.defaults,e.config,e),delete e.config):e=Object.assign({},this.defaults,e),e.id?typeof e.id=="function"&&(e.id=e.id()):e.id=`jsPanel-${M.idCounter+=1}`;const r=document.getElementById(e.id);if(r!==null){if(r.classList.contains("jsPanel")&&r.front(),this.errorReporting){let m=`&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${e.id}</mark> already exists in the document.`;M.errorpanel(m)}return!1}let i=this.pOcontainer(e.container);if(typeof i=="object"&&i.length&&i.length>0&&(i=i[0]),!i)return this.errorReporting&&M.errorpanel("&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist"),!1;["onbeforeclose","onbeforemaximize","onbeforeminimize","onbeforenormalize","onbeforesmallify","onbeforeunsmallify","onclosed","onfronted","onmaximized","onminimized","onnormalized","onsmallified","onstatuschange","onunsmallified"].forEach(m=>{e[m]?typeof e[m]=="function"&&(e[m]=[e[m]]):e[m]=[]});const n=e.template||this.createPanelTemplate();n.options=e,n.closetimer=void 0,n.status="initialized",n.currentData={},n.header=n.querySelector(".jsPanel-hdr"),n.headerbar=n.header.querySelector(".jsPanel-headerbar"),n.titlebar=n.header.querySelector(".jsPanel-titlebar"),n.headerlogo=n.headerbar.querySelector(".jsPanel-headerlogo"),n.headertitle=n.headerbar.querySelector(".jsPanel-title"),n.controlbar=n.headerbar.querySelector(".jsPanel-controlbar"),n.headertoolbar=n.header.querySelector(".jsPanel-hdr-toolbar"),n.content=n.querySelector(".jsPanel-content"),n.footer=n.querySelector(".jsPanel-ftr"),n.snappableTo=!1,n.snapped=!1,n.droppableTo=!1,n.progressbar=n.autocloseProgressbar=n.querySelector(".jsPanel-progressbar");const s=new CustomEvent("jspanelloaded",{detail:e.id,cancelable:!0}),a=new CustomEvent("jspanelstatuschange",{detail:e.id,cancelable:!0}),c=new CustomEvent("jspanelbeforenormalize",{detail:e.id,cancelable:!0}),u=new CustomEvent("jspanelnormalized",{detail:e.id,cancelable:!0}),p=new CustomEvent("jspanelbeforemaximize",{detail:e.id,cancelable:!0}),w=new CustomEvent("jspanelmaximized",{detail:e.id,cancelable:!0}),b=new CustomEvent("jspanelbeforeminimize",{detail:e.id,cancelable:!0}),$=new CustomEvent("jspanelminimized",{detail:e.id,cancelable:!0}),D=new CustomEvent("jspanelbeforesmallify",{detail:e.id,cancelable:!0}),P=new CustomEvent("jspanelsmallified",{detail:e.id,cancelable:!0}),S=new CustomEvent("jspanelsmallifiedmax",{detail:e.id,cancelable:!0}),B=new CustomEvent("jspanelbeforeunsmallify",{detail:e.id,cancelable:!0}),q=new CustomEvent("jspanelfronted",{detail:e.id,cancelable:!0}),Q=new CustomEvent("jspanelbeforeclose",{detail:e.id,cancelable:!0}),X=new CustomEvent("jspanelclosed",{detail:e.id,cancelable:!0}),J=new CustomEvent("jspanelcloseduser",{detail:e.id,cancelable:!0});[s,a,c,u,p,w,b,$,D,P,S,B,q,Q].forEach(m=>m.panel=n);const W=n.querySelector(".jsPanel-btn-close"),Z=n.querySelector(".jsPanel-btn-maximize"),de=n.querySelector(".jsPanel-btn-normalize"),we=n.querySelector(".jsPanel-btn-smallify"),Te=n.querySelector(".jsPanel-btn-minimize");W&&M.pointerup.forEach(m=>{W.addEventListener(m,x=>{if(x.preventDefault(),x.button&&x.button>0)return!1;n.close(null,!0)})}),Z&&M.pointerup.forEach(m=>{Z.addEventListener(m,x=>{if(x.preventDefault(),x.button&&x.button>0)return!1;n.maximize()})}),de&&M.pointerup.forEach(m=>{de.addEventListener(m,x=>{if(x.preventDefault(),x.button&&x.button>0)return!1;n.normalize()})}),we&&M.pointerup.forEach(m=>{we.addEventListener(m,x=>{if(x.preventDefault(),x.button&&x.button>0)return!1;n.status==="normalized"||n.status==="maximized"?n.smallify():(n.status==="smallified"||n.status==="smallifiedmax")&&n.unsmallify()})}),Te&&M.pointerup.forEach(m=>{Te.addEventListener(m,x=>{if(x.preventDefault(),x.button&&x.button>0)return!1;n.minimize()})});let Pe=M.extensions;for(let m in Pe)Object.prototype.hasOwnProperty.call(Pe,m)&&(n[m]=Pe[m]);if(n.setBorder=m=>{let x=M.pOborder(m);return x[2].length||(x[2]=n.style.backgroundColor),x=x.join(" "),n.style.border=x,n.options.border=x,n},n.setBorderRadius=m=>{typeof m=="string"&&(m.startsWith("--")||m.startsWith("var"))&&(m=m.replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," "),m=M.getCssVariableValue(m)),typeof m=="number"&&(m+="px"),n.style.borderRadius=m;const x=getComputedStyle(n);return n.options.header?(n.header.style.borderTopLeftRadius=x.borderTopLeftRadius,n.header.style.borderTopRightRadius=x.borderTopRightRadius):(n.content.style.borderTopLeftRadius=x.borderTopLeftRadius,n.content.style.borderTopRightRadius=x.borderTopRightRadius),n.options.footerToolbar?(n.footer.style.borderBottomRightRadius=x.borderBottomRightRadius,n.footer.style.borderBottomLeftRadius=x.borderBottomLeftRadius):(n.content.style.borderBottomRightRadius=x.borderBottomRightRadius,n.content.style.borderBottomLeftRadius=x.borderBottomLeftRadius),n},n.setTheme=(m=e.theme,x)=>{let I;if(n.status==="minimized"&&(I=!0,n.normalize()),M.clearTheme(n),typeof m=="object")e.border=void 0,M.applyCustomTheme(n,m);else if(typeof m=="string"){m==="none"&&(m="white");let y=M.getThemeDetails(m);M.applyColorTheme(n,y)}return I&&n.minimize(),x&&x.call(n,n),n},n.remove=(m,x,I)=>{n.parentElement.removeChild(n),document.getElementById(m)?I&&I.call(n,m,n):(n.removeMinimizedReplacement(),n.status="closed",x&&document.dispatchEvent(J),document.dispatchEvent(X),n.options.onclosed&&M.processCallbacks(n,n.options.onclosed,"every",x),M.autopositionRemaining(n),I&&I.call(m,m)),window.removeEventListener("resize",n.windowResizeHandler),document.removeEventListener("jspanelresize",n.parentResizeHandler)},n.close=(m,x)=>{if(n.parentElement){if(n.closetimer&&window.clearInterval(n.closetimer),document.dispatchEvent(Q),n.statusBefore=n.status,n.options.onbeforeclose&&n.options.onbeforeclose.length>0&&!M.processCallbacks(n,n.options.onbeforeclose,"some",n.status,x))return n;n.options.animateOut?(n.options.animateIn&&M.remClass(n,n.options.animateIn),M.setClass(n,n.options.animateOut),n.addEventListener("animationend",I=>{I.stopPropagation(),n.remove(n.id,x,m)})):n.remove(n.id,x,m)}},n.maximize=(m,x)=>{if(n.statusBefore=n.status,e.onbeforemaximize&&e.onbeforemaximize.length>0&&!M.processCallbacks(n,e.onbeforemaximize,"some",n.statusBefore))return n;document.dispatchEvent(p);const I=n.parentElement,y=M.pOcontainment(e.maximizedMargin);return I===document.body?(n.style.width=document.documentElement.clientWidth-y[1]-y[3]+"px",n.style.height=document.documentElement.clientHeight-y[0]-y[2]+"px",n.style.left=y[3]+"px",n.style.top=y[0]+"px"):(n.style.width=I.clientWidth-y[1]-y[3]+"px",n.style.height=I.clientHeight-y[0]-y[2]+"px",n.style.left=y[3]+"px",n.style.top=y[0]+"px"),we.style.transform="unset",n.removeMinimizedReplacement(),n.status="maximized",n.setControls([".jsPanel-btn-maximize"]),x||n.front(),document.dispatchEvent(w),document.dispatchEvent(a),e.onstatuschange&&M.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),m&&m.call(n,n,n.statusBefore),e.onmaximized&&M.processCallbacks(n,e.onmaximized,"every",n.statusBefore),n},n.minimize=m=>{if(n.status==="minimized"||(n.statusBefore=n.status,e.onbeforeminimize&&e.onbeforeminimize.length>0&&!M.processCallbacks(n,e.onbeforeminimize,"some",n.statusBefore)))return n;if(document.dispatchEvent(b),!document.getElementById("jsPanel-replacement-container")){const x=document.createElement("div");x.id="jsPanel-replacement-container",document.body.append(x)}if(n.style.left="-9999px",n.status="minimized",document.dispatchEvent($),document.dispatchEvent(a),e.onstatuschange&&M.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),e.minimizeTo){let x=n.createMinimizedReplacement(),I,y,k;switch(e.minimizeTo){case"default":document.getElementById("jsPanel-replacement-container").append(x);break;case"parentpanel":y=n.closest(".jsPanel-content").parentElement,k=y.querySelectorAll(".jsPanel-minimized-box"),I=k[k.length-1],I.append(x);break;case"parent":y=n.parentElement,I=y.querySelector(".jsPanel-minimized-container"),I||(I=document.createElement("div"),I.className="jsPanel-minimized-container",y.append(I)),I.append(x);break;default:document.querySelector(e.minimizeTo).append(x)}}return m&&m.call(n,n,n.statusBefore),e.onminimized&&M.processCallbacks(n,e.onminimized,"every",n.statusBefore),n},n.normalize=m=>(n.status==="normalized"||(n.statusBefore=n.status,e.onbeforenormalize&&e.onbeforenormalize.length>0&&!M.processCallbacks(n,e.onbeforenormalize,"some",n.statusBefore))||(document.dispatchEvent(c),n.style.width=n.currentData.width,n.style.height=n.currentData.height,n.snapped?n.snap(n.snapped,!0):(n.style.left=n.currentData.left,n.style.top=n.currentData.top),we.style.transform="unset",n.removeMinimizedReplacement(),n.status="normalized",n.setControls([".jsPanel-btn-normalize"]),n.front(),document.dispatchEvent(u),document.dispatchEvent(a),e.onstatuschange&&M.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),m&&m.call(n,n,n.statusBefore),e.onnormalized&&M.processCallbacks(n,e.onnormalized,"every",n.statusBefore)),n),n.smallify=m=>{if(n.status==="smallified"||n.status==="smallifiedmax"||(n.statusBefore=n.status,e.onbeforesmallify&&e.onbeforesmallify.length>0&&!M.processCallbacks(n,e.onbeforesmallify,"some",n.statusBefore)))return n;document.dispatchEvent(D),n.style.overflow="hidden";const x=window.getComputedStyle(n),I=parseFloat(window.getComputedStyle(n.headerbar).height);n.style.height=parseFloat(x.borderTopWidth)+parseFloat(x.borderBottomWidth)+I+"px",we.style.transform="rotate(180deg)",n.status==="normalized"?(n.setControls([".jsPanel-btn-normalize"]),n.status="smallified",document.dispatchEvent(P),document.dispatchEvent(a),e.onstatuschange&&M.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="maximized"&&(n.setControls([".jsPanel-btn-maximize"]),n.status="smallifiedmax",document.dispatchEvent(S),document.dispatchEvent(a),e.onstatuschange&&M.processCallbacks(n,e.onstatuschange,"every",n.statusBefore));const y=n.querySelectorAll(".jsPanel-minimized-box");return y[y.length-1].style.display="none",m&&m.call(n,n,n.statusBefore),e.onsmallified&&M.processCallbacks(n,e.onsmallified,"every",n.statusBefore),n},n.unsmallify=m=>{if(n.statusBefore=n.status,n.status==="smallified"||n.status==="smallifiedmax"){if(e.onbeforeunsmallify&&e.onbeforeunsmallify.length>0&&!M.processCallbacks(n,e.onbeforeunsmallify,"some",n.statusBefore))return n;document.dispatchEvent(B),n.style.overflow="visible",n.front(),n.status==="smallified"?(n.style.height=n.currentData.height,n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(u),document.dispatchEvent(a),e.onstatuschange&&M.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="smallifiedmax"?n.maximize():n.status==="minimized"&&n.normalize(),we.style.transform="rotate(0deg)";const x=n.querySelectorAll(".jsPanel-minimized-box");x[x.length-1].style.display="flex",m&&m.call(n,n,n.statusBefore),e.onunsmallified&&M.processCallbacks(n,e.onunsmallified,"every",n.statusBefore)}return n},n.front=(m,x=!0)=>{if(n.status==="minimized")n.statusBefore==="maximized"?n.maximize():n.normalize();else{const I=Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(y=>y.style.zIndex);Math.max(...I)>n.style.zIndex&&(n.style.zIndex=M.zi.next()),M.resetZi()}return document.dispatchEvent(q),m&&m.call(n,n),e.onfronted&&x&&M.processCallbacks(n,e.onfronted,"every",n.status),n},n.snap=(m,x=!1)=>{if(x||(n.currentData.beforeSnap={width:n.currentData.width,height:n.currentData.height}),m&&typeof m=="function"&&!x)m.call(n,n,n.snappableTo);else if(m!==!1){let I=[0,0];if(n.options.dragit.snap.containment&&n.options.dragit.containment){const y=M.pOcontainment(n.options.dragit.containment),k=n.snappableTo;k.startsWith("left")?I[0]=y[3]:k.startsWith("right")&&(I[0]=-y[1]),k.endsWith("top")?I[1]=y[0]:k.endsWith("bottom")&&(I[1]=-y[2])}n.reposition(`${n.snappableTo} ${I[0]} ${I[1]}`)}x||(n.snapped=n.snappableTo)},n.move=(m,x)=>{let I=n.overlaps(m,"paddingbox"),y=n.parentElement;return m.appendChild(n),n.options.container=m,n.style.left=I.left+"px",n.style.top=I.top+"px",n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors(),x&&x.call(n,n,m,y),n},n.closeChildpanels=m=>(n.getChildpanels().forEach(x=>x.close()),m&&m.call(n,n),n),n.getChildpanels=m=>{const x=n.content.querySelectorAll(".jsPanel");return m&&x.forEach((I,y,k)=>{m.call(I,I,y,k)}),x},n.isChildpanel=m=>{const x=n.closest(".jsPanel-content"),I=x?x.parentElement:null;return m&&m.call(n,n,I),x?I:!1},n.contentRemove=m=>(M.emptyNode(n.content),m&&m.call(n,n),n),n.createMinimizedReplacement=()=>{const m=M.createMinimizedTemplate(),x=window.getComputedStyle(n.headertitle).color,I=window.getComputedStyle(n),y=e.iconfont,k=m.querySelector(".jsPanel-controlbar");return n.options.header!=="auto-show-hide"?M.setStyles(m,{backgroundColor:I.backgroundColor,backgroundPositionX:I.backgroundPositionX,backgroundPositionY:I.backgroundPositionY,backgroundRepeat:I.backgroundRepeat,backgroundAttachment:I.backgroundAttachment,backgroundImage:I.backgroundImage,backgroundSize:I.backgroundSize,backgroundOrigin:I.backgroundOrigin,backgroundClip:I.backgroundClip}):m.style.backgroundColor=window.getComputedStyle(n.header).backgroundColor,m.id=n.id+"-min",m.querySelector(".jsPanel-headerbar").replaceChild(n.headerlogo.cloneNode(!0),m.querySelector(".jsPanel-headerlogo")),m.querySelector(".jsPanel-titlebar").replaceChild(n.headertitle.cloneNode(!0),m.querySelector(".jsPanel-title")),m.querySelector(".jsPanel-titlebar").setAttribute("title",n.headertitle.textContent),m.querySelector(".jsPanel-title").style.color=x,k.style.color=x,k.querySelectorAll("button").forEach(he=>he.style.color=x),["jsPanel-hdr-dark","jsPanel-hdr-light"].forEach(he=>{n.header.classList.contains(he)&&m.querySelector(".jsPanel-hdr").classList.add(he)}),n.setIconfont(y,m),n.dataset.btnnormalize==="enabled"?M.pointerup.forEach(he=>{m.querySelector(".jsPanel-btn-normalize").addEventListener(he,ge=>{if(ge.preventDefault(),ge.button&&ge.button>0)return!1;n.normalize()})}):k.querySelector(".jsPanel-btn-normalize").style.display="none",n.dataset.btnmaximize==="enabled"?M.pointerup.forEach(he=>{m.querySelector(".jsPanel-btn-maximize").addEventListener(he,ge=>{if(ge.preventDefault(),ge.button&&ge.button>0)return!1;n.maximize()})}):k.querySelector(".jsPanel-btn-maximize").style.display="none",n.dataset.btnclose==="enabled"?M.pointerup.forEach(he=>{m.querySelector(".jsPanel-btn-close").addEventListener(he,ge=>{if(ge.preventDefault(),ge.button&&ge.button>0)return!1;n.close(null,!0)})}):k.querySelector(".jsPanel-btn-close").style.display="none",m},n.removeMinimizedReplacement=()=>{const m=document.getElementById(`${n.id}-min`);m&&m.parentElement.removeChild(m)},n.drag=(m={})=>{let x,I,y;const k=new CustomEvent("jspaneldragstart",{detail:n.id}),he=new CustomEvent("jspaneldrag",{detail:n.id}),ge=new CustomEvent("jspaneldragstop",{detail:n.id});[k,he,ge].forEach(Ke=>Ke.panel=n);const G=Ke=>{let Be=Ke.split("-");return Be.forEach((Se,Oe)=>{Be[Oe]=Se.charAt(0).toUpperCase()+Se.slice(1)}),"snap"+Be.join("")};function Y(Ke){Ke.relatedTarget===null&&M.pointermove.forEach(Be=>{document.removeEventListener(Be,I,!1),n.style.opacity=1})}let Fe=m.handles||M.defaults.dragit.handles,st=m.cursor||M.defaults.dragit.cursor;function dn(Ke){if(M.pointermove.forEach(Be=>document.removeEventListener(Be,I)),M.removeSnapAreas(),x){if(n.style.opacity=1,x=void 0,y.snap){switch(n.snappableTo){case"left-top":n.snap(y.snap.snapLeftTop);break;case"center-top":n.snap(y.snap.snapCenterTop);break;case"right-top":n.snap(y.snap.snapRightTop);break;case"right-center":n.snap(y.snap.snapRightCenter);break;case"right-bottom":n.snap(y.snap.snapRightBottom);break;case"center-bottom":n.snap(y.snap.snapCenterBottom);break;case"left-bottom":n.snap(y.snap.snapLeftBottom);break;case"left-center":n.snap(y.snap.snapLeftCenter);break}y.snap.callback&&n.snappableTo&&typeof y.snap.callback=="function"&&(y.snap.callback.call(n,n),y.snap.repositionOnSnap&&y.snap[G(n.snappableTo)]!==!1&&n.repositionOnSnap(n.snappableTo)),n.snappableTo&&y.snap.repositionOnSnap&&y.snap[G(n.snappableTo)]&&n.repositionOnSnap(n.snappableTo)}if(n.droppableTo&&n.droppableTo){let Be=n.parentElement;n.move(n.droppableTo),y.drop.callback&&y.drop.callback.call(n,n,n.droppableTo,Be)}if(document.dispatchEvent(ge),y.stop.length){let Be=window.getComputedStyle(n),Se={left:parseFloat(Be.left),top:parseFloat(Be.top),width:parseFloat(Be.width),height:parseFloat(Be.height)};M.processCallbacks(n,y.stop,!1,Se,Ke)}n.saveCurrentPosition(),n.calcSizeFactors()}n.controlbar.style.pointerEvents="inherit",n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Be=>Be.style.pointerEvents="auto"),document.removeEventListener(Ke,dn)}return n.querySelectorAll(Fe).forEach(Ke=>{Ke.style.touchAction="none",Ke.style.cursor=st,M.pointerdown.forEach(Be=>{Ke.addEventListener(Be,Se=>{if(Se.button&&Se.button>0||(y=Object.assign({},M.defaults.dragit,m),y.disableOnMaximized&&n.status==="maximized"))return!1;if((y.containment||y.containment===0)&&(y.containment=M.pOcontainment(y.containment)),y.grid&&Array.isArray(y.grid)&&y.grid.length===1&&(y.grid[1]=y.grid[0]),y.snap&&(typeof y.snap=="object"?y.snap=Object.assign({},M.defaultSnapConfig,y.snap):y.snap=M.defaultSnapConfig),Se.target.closest(".jsPanel-ftr-btn"))return;n.controlbar.style.pointerEvents="none",n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(rt=>rt.style.pointerEvents="none");let Oe=window.getComputedStyle(n),Je=parseFloat(Oe.left),Re=parseFloat(Oe.top),ae=parseFloat(Oe.width),Ze=parseFloat(Oe.height),Ne=Se.touches?Se.touches[0].clientX:Se.clientX,ye=Se.touches?Se.touches[0].clientY:Se.clientY,ke=n.parentElement,Dt=ke.getBoundingClientRect(),me=window.getComputedStyle(ke),et=n.getScaleFactor(),En=0,rn=M.getScrollbarWidth(ke);I=rt=>{if(rt.preventDefault(),!x){if(document.dispatchEvent(k),n.style.opacity=y.opacity,n.snapped&&y.snap.resizeToPreSnap&&n.currentData.beforeSnap){n.resize(n.currentData.beforeSnap.width+" "+n.currentData.beforeSnap.height),n.setControls([".jsPanel-btn-normalize"]);let ce=n.getBoundingClientRect(),De=Ne-(ce.left+ce.width),ve=ce.width/2;De>-ve&&(En=De+ve)}if(n.front(),n.snapped=!1,n.status==="maximized"&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized"),y.drop&&y.drop.dropZones){let ce=y.drop.dropZones.map(ve=>M.pOcontainer(ve)),De=[];ce.forEach(function(ve){ve.length?ve.forEach(function(Me){De.push(Me)}):De.push(ve)}),De=De.filter(function(ve,Me,Ye){return Ye.indexOf(ve)===Me}),y.drop.dropZones=De}y.start.length&&M.processCallbacks(n,y.start,!1,{left:Je,top:Re,width:ae,height:Ze},rt)}x=1;let Ot,Le,Ve,Et,at,Ae,_e,jt,Ge,xt,ft=rt.touches?rt.touches[0].clientX:rt.clientX,lt=rt.touches?rt.touches[0].clientY:rt.clientY,He=window.getComputedStyle(n),be;if(ke===document.body){let ce=n.getBoundingClientRect();Ge=window.innerWidth-parseInt(me.borderLeftWidth,10)-parseInt(me.borderRightWidth,10)-(ce.left+ce.width),xt=window.innerHeight-parseInt(me.borderTopWidth,10)-parseInt(me.borderBottomWidth,10)-(ce.top+ce.height)}else Ge=parseInt(me.width,10)-parseInt(me.borderLeftWidth,10)-parseInt(me.borderRightWidth,10)-(parseInt(He.left,10)+parseInt(He.width,10)),xt=parseInt(me.height,10)-parseInt(me.borderTopWidth,10)-parseInt(me.borderBottomWidth,10)-(parseInt(He.top,10)+parseInt(He.height,10));Ot=parseFloat(He.left),Ve=parseFloat(He.top),at=Ge,_e=xt,y.snap&&(y.snap.trigger==="panel"?(Le=Ot**2,Et=Ve**2,Ae=at**2,jt=_e**2):y.snap.trigger==="pointer"&&(n.options.container==="window"?(Ot=ft,Ve=lt,at=window.innerWidth-ft,_e=window.innerHeight-lt,Le=ft**2,Et=Ve**2,Ae=at**2,jt=_e**2):(be=n.overlaps(ke,"paddingbox",rt),Ot=be.pointer.left,Ve=be.pointer.top,at=be.pointer.right,_e=be.pointer.bottom,Le=be.pointer.left**2,Et=be.pointer.top**2,Ae=be.pointer.right**2,jt=be.pointer.bottom**2)));let tt=Math.sqrt(Le+Et),re=Math.sqrt(Le+jt),ct=Math.sqrt(Ae+Et),gt=Math.sqrt(Ae+jt),It=Math.abs(Ot-at)/2,ie=Math.abs(Ve-_e)/2,un=Math.sqrt(Le+ie**2),wn=Math.sqrt(Et+It**2),pt=Math.sqrt(Ae+ie**2),Sn=Math.sqrt(jt+It**2);if(window.getSelection().removeAllRanges(),document.dispatchEvent(he),(!y.axis||y.axis==="x")&&(n.style.left=Je+(ft-Ne)/et.x+En+"px"),(!y.axis||y.axis==="y")&&(n.style.top=Re+(lt-ye)/et.y+"px"),y.grid){let ce=y.grid,De=y.axis,ve=ce[0]*Math.round((Je+(ft-Ne))/ce[0]),Me=ce[1]*Math.round((Re+(lt-ye))/ce[1]);(!De||De==="x")&&(n.style.left=`${ve}px`),(!De||De==="y")&&(n.style.top=`${Me}px`)}if(y.containment||y.containment===0){let ce=y.containment,De,ve;if(n.options.container==="window")De=window.innerWidth-parseFloat(He.width)-ce[1]-rn.y,ve=window.innerHeight-parseFloat(He.height)-ce[2]-rn.x;else{let Me=parseFloat(me.borderLeftWidth)+parseFloat(me.borderRightWidth),Ye=parseFloat(me.borderTopWidth)+parseFloat(me.borderBottomWidth);De=Dt.width/et.x-parseFloat(He.width)-ce[1]-Me-rn.y,ve=Dt.height/et.y-parseFloat(He.height)-ce[2]-Ye-rn.x}parseFloat(n.style.left)<=ce[3]&&(n.style.left=ce[3]+"px"),parseFloat(n.style.top)<=ce[0]&&(n.style.top=ce[0]+"px"),parseFloat(n.style.left)>=De&&(n.style.left=De+"px"),parseFloat(n.style.top)>=ve&&(n.style.top=ve+"px")}if(y.drag.length){let ce={left:Ot,top:Ve,right:at,bottom:_e,width:parseFloat(He.width),height:parseFloat(He.height)};M.processCallbacks(n,y.drag,!1,ce,rt)}if(y.snap){let ce=y.snap.sensitivity,De=ke===document.body?window.innerWidth/8:Dt.width/8,ve=ke===document.body?window.innerHeight/8:Dt.height/8;n.snappableTo=!1,M.removeSnapAreas(),tt<ce?y.snap.snapLeftTop!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="left-top",M.createSnapArea(n,"lt",ce)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(be.pointer.left>0&&be.pointer.top>0?(n.snappableTo="left-top",M.createSnapArea(n,"lt",ce)):(n.snappableTo=!1,M.removeSnapAreas()))):re<ce?y.snap.snapLeftBottom!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="left-bottom",M.createSnapArea(n,"lb",ce)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(be.pointer.left>0&&be.pointer.bottom>0?(n.snappableTo="left-bottom",M.createSnapArea(n,"lb",ce)):(n.snappableTo=!1,M.removeSnapAreas()))):ct<ce?y.snap.snapRightTop!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="right-top",M.createSnapArea(n,"rt",ce)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(be.pointer.right>0&&be.pointer.top>0?(n.snappableTo="right-top",M.createSnapArea(n,"rt",ce)):(n.snappableTo=!1,M.removeSnapAreas()))):gt<ce?y.snap.snapRightBottom!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="right-bottom",M.createSnapArea(n,"rb",ce)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(be.pointer.right>0&&be.pointer.bottom>0?(n.snappableTo="right-bottom",M.createSnapArea(n,"rb",ce)):(n.snappableTo=!1,M.removeSnapAreas()))):Ve<ce&&wn<De?y.snap.snapCenterTop!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="center-top",M.createSnapArea(n,"ct",ce)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(be.pointer.top>0?(n.snappableTo="center-top",M.createSnapArea(n,"ct",ce)):(n.snappableTo=!1,M.removeSnapAreas()))):Ot<ce&&un<ve?y.snap.snapLeftCenter!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="left-center",M.createSnapArea(n,"lc",ce)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(be.pointer.left>0?(n.snappableTo="left-center",M.createSnapArea(n,"lc",ce)):(n.snappableTo=!1,M.removeSnapAreas()))):at<ce&&pt<ve?y.snap.snapRightCenter!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="right-center",M.createSnapArea(n,"rc",ce)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(be.pointer.right>0?(n.snappableTo="right-center",M.createSnapArea(n,"rc",ce)):(n.snappableTo=!1,M.removeSnapAreas()))):_e<ce&&Sn<De&&y.snap.snapCenterBottom!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="center-bottom",M.createSnapArea(n,"cb",ce)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(be.pointer.bottom>0?(n.snappableTo="center-bottom",M.createSnapArea(n,"cb",ce)):(n.snappableTo=!1,M.removeSnapAreas())))}if(y.drop&&y.drop.dropZones){let ce=M.isIE?"msElementsFromPoint":"elementsFromPoint",De=document[ce](rt.clientX,rt.clientY);Array.isArray(De)||(De=Array.prototype.slice.call(De)),y.drop.dropZones.forEach(ve=>{De.includes(ve)&&(n.droppableTo=ve)}),De.includes(n.droppableTo)||(n.droppableTo=!1)}},M.pointermove.forEach(rt=>document.addEventListener(rt,I)),window.addEventListener("mouseout",Y,!1)})}),M.pointerup.forEach(Be=>{document.addEventListener(Be,dn),window.removeEventListener("mouseout",Y)}),m.disable&&(Ke.style.pointerEvents="none")}),n},n.dragit=m=>{const x=Object.assign({},M.defaults.dragit,e.dragit),I=n.querySelectorAll(x.handles);return m==="disable"?I.forEach(y=>y.style.pointerEvents="none"):I.forEach(y=>y.style.pointerEvents="auto"),n},n.sizeit=(m={})=>{const x=new CustomEvent("jspanelresizestart",{detail:n.id}),I=new CustomEvent("jspanelresize",{detail:n.id}),y=new CustomEvent("jspanelresizestop",{detail:n.id});[x,I,y].forEach(Se=>Se.panel=n);let k={},he,ge,G,Y,Fe,st;k.handles=m.handles||M.defaults.resizeit.handles,k.handles.split(",").forEach(Se=>{const Oe=document.createElement("DIV");Oe.className=`jsPanel-resizeit-handle jsPanel-resizeit-${Se.trim()}`,n.append(Oe)});let dn=m.aspectRatio?m.aspectRatio:!1;function Ke(Se){Se.relatedTarget===null&&M.pointermove.forEach(Oe=>document.removeEventListener(Oe,he,!1))}function Be(Se){if(M.pointermove.forEach(Oe=>document.removeEventListener(Oe,he,!1)),Se.target.classList&&Se.target.classList.contains("jsPanel-resizeit-handle")){let Oe,Je,Re=Se.target.className;if(Re.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)&&(Oe=!0),Re.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)&&(Je=!0),k.grid&&Array.isArray(k.grid)){k.grid.length===1&&(k.grid[1]=k.grid[0]);const ae=parseFloat(n.style.width),Ze=parseFloat(n.style.height),Ne=ae%k.grid[0],ye=Ze%k.grid[1],ke=parseFloat(n.style.left),Dt=parseFloat(n.style.top),me=ke%k.grid[0],et=Dt%k.grid[1];Ne<k.grid[0]/2?n.style.width=ae-Ne+"px":n.style.width=ae+(k.grid[0]-Ne)+"px",ye<k.grid[1]/2?n.style.height=Ze-ye+"px":n.style.height=Ze+(k.grid[1]-ye)+"px",Oe&&(me<k.grid[0]/2?n.style.left=ke-me+"px":n.style.left=ke+(k.grid[0]-me)+"px"),Je&&(et<k.grid[1]/2?n.style.top=Dt-et+"px":n.style.top=Dt+(k.grid[1]-et)+"px")}}if(ge){n.content.style.pointerEvents="inherit",ge=void 0,n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors();let Oe=n.controlbar.querySelector(".jsPanel-btn-smallify"),Je=n.getBoundingClientRect();if(Oe&&Je.height>st+5&&(Oe.style.transform="rotate(0deg)"),document.dispatchEvent(y),k.stop.length){let Re=window.getComputedStyle(n),ae={left:parseFloat(Re.left),top:parseFloat(Re.top),width:parseFloat(Re.width),height:parseFloat(Re.height)};M.processCallbacks(n,k.stop,!1,ae,Se)}}n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Oe=>Oe.style.pointerEvents="auto"),k.aspectRatio=dn,document.removeEventListener(Se,Be)}return n.querySelectorAll(".jsPanel-resizeit-handle").forEach(Se=>{Se.style.touchAction="none",M.pointerdown.forEach(Oe=>{Se.addEventListener(Oe,Je=>{if(Je.preventDefault(),Je.stopPropagation(),Je.button&&Je.button>0)return!1;let Re=1;if(k=Object.assign({},M.defaults.resizeit,m),(k.containment||k.containment===0)&&(k.containment=M.pOcontainment(k.containment)),k.aspectRatio&&k.aspectRatio===!0&&(k.aspectRatio="panel"),M.modifier){let ve=M.modifier;ve.altKey?k.aspectRatio="content":ve.ctrlKey?k.aspectRatio="panel":ve.shiftKey&&(k.aspectRatio=!1,Re=2)}let ae=typeof k.maxWidth=="function"?k.maxWidth():k.maxWidth||1e4,Ze=typeof k.maxHeight=="function"?k.maxHeight():k.maxHeight||1e4,Ne=typeof k.minWidth=="function"?k.minWidth():k.minWidth,ye=typeof k.minHeight=="function"?k.minHeight():k.minHeight;n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(ve=>ve.style.pointerEvents="none");const ke=n.parentElement,Dt=ke.tagName.toLowerCase(),me=n.getBoundingClientRect(),et=ke.getBoundingClientRect(),En=window.getComputedStyle(ke,null),rn=parseInt(En.borderLeftWidth,10),rt=parseInt(En.borderTopWidth,10),Ot=En.getPropertyValue("position"),Le=Je.clientX||Je.clientX===0||Je.touches[0].clientX,Ve=Je.clientY||Je.clientY===0||Je.touches[0].clientY,Et=Le/Ve,at=Je.target.classList,Ae=n.getScaleFactor(),_e=me.width/me.height,jt=n.content.getBoundingClientRect(),Ge=jt.width/jt.height,xt=n.header.getBoundingClientRect().height,ft=n.footer.getBoundingClientRect().height||0;let lt=me.left,He=me.top,be=1e4,tt=1e4,re=1e4,ct=1e4;Fe=me.width,st=me.height,Dt!=="body"&&(lt=me.left-et.left+ke.scrollLeft,He=me.top-et.top+ke.scrollTop),Dt==="body"&&k.containment?(be=document.documentElement.clientWidth-me.left,re=document.documentElement.clientHeight-me.top,tt=me.width+me.left,ct=me.height+me.top):k.containment&&(Ot==="static"?(be=et.width-me.left+rn,re=et.height+et.top-me.top+rt,tt=me.width+(me.left-et.left)-rn,ct=me.height+(me.top-et.top)-rt):(be=ke.clientWidth-(me.left-et.left)/Ae.x+rn,re=ke.clientHeight-(me.top-et.top)/Ae.y+rt,tt=(me.width+me.left-et.left)/Ae.x-rn,ct=n.clientHeight+(me.top-et.top)/Ae.y-rt)),k.containment&&(tt-=k.containment[3],ct-=k.containment[0],be-=k.containment[1],re-=k.containment[2]);const gt=window.getComputedStyle(n),It=parseFloat(gt.width)-me.width,ie=parseFloat(gt.height)-me.height;let un=parseFloat(gt.left)-me.left,wn=parseFloat(gt.top)-me.top;ke!==document.body&&(un+=et.left,wn+=et.top);let pt=parseInt(gt.borderTopWidth,10),Sn=parseInt(gt.borderRightWidth,10),ce=parseInt(gt.borderBottomWidth,10),De=parseInt(gt.borderLeftWidth,10);he=ve=>{ve.preventDefault(),ge||(document.dispatchEvent(x),k.start.length&&M.processCallbacks(n,k.start,!1,{width:Fe,height:st,left:lt,top:He},ve),n.front(),n.status==="maximized"&&(n.status="normalized",n.controlbar.querySelector(".jsPanel-btn-maximize")&&n.setControlStatus("maximize","show"),n.controlbar.querySelector(".jsPanel-btn-normalize")&&n.setControlStatus("normalize","hide")),me.height>st+5&&(n.status="normalized",n.setControls([".jsPanel-btn-normalize"]))),ge=1,document.dispatchEvent(I);let Me=ve.touches?ve.touches[0].clientX:ve.clientX,Ye=ve.touches?ve.touches[0].clientY:ve.clientY,je;at.contains("jsPanel-resizeit-e")?(G=Fe+(Me-Le)*Re/Ae.x+It,G>=be&&(G=be),G>=ae&&(G=ae),G<=Ne&&(G=Ne),n.style.width=G+"px",Re===2&&(n.style.left=lt-(Me-Le)+"px"),k.aspectRatio==="content"?(n.style.height=(G-Sn-De)/Ge+xt+ft+pt+ce+"px",k.containment&&(je=n.overlaps(ke),je.bottom<=k.containment[2]&&(n.style.height=re+"px",n.style.width=re*Ge+"px"))):k.aspectRatio==="panel"&&(n.style.height=G/_e+"px",k.containment&&(je=n.overlaps(ke),je.bottom<=k.containment[2]&&(n.style.height=re+"px",n.style.width=re*_e+"px")))):at.contains("jsPanel-resizeit-s")?(Y=st+(Ye-Ve)*Re/Ae.y+ie,Y>=re&&(Y=re),Y>=Ze&&(Y=Ze),Y<=ye&&(Y=ye),n.style.height=Y+"px",Re===2&&(n.style.top=He-(Ye-Ve)+"px"),k.aspectRatio==="content"?(n.style.width=(Y-xt-ft-pt-ce)*Ge+pt+ce+"px",k.containment&&(je=n.overlaps(ke),je.right<=k.containment[1]&&(n.style.width=be+"px",n.style.height=be/Ge+"px"))):k.aspectRatio==="panel"&&(n.style.width=Y*_e+"px",k.containment&&(je=n.overlaps(ke),je.right<=k.containment[1]&&(n.style.width=be+"px",n.style.height=be/_e+"px")))):at.contains("jsPanel-resizeit-w")?(G=Fe+(Le-Me)*Re/Ae.x+It,G<=ae&&G>=Ne&&G<=tt&&(n.style.left=lt+(Me-Le)/Ae.x+un+"px"),G>=tt&&(G=tt),G>=ae&&(G=ae),G<=Ne&&(G=Ne),n.style.width=G+"px",k.aspectRatio==="content"?(n.style.height=(G-Sn-De)/Ge+xt+ft+pt+ce+"px",k.containment&&(je=n.overlaps(ke),je.bottom<=k.containment[2]&&(n.style.height=re+"px",n.style.width=re*Ge+"px"))):k.aspectRatio==="panel"&&(n.style.height=G/_e+"px",k.containment&&(je=n.overlaps(ke),je.bottom<=k.containment[2]&&(n.style.height=re+"px",n.style.width=re*_e+"px")))):at.contains("jsPanel-resizeit-n")?(Y=st+(Ve-Ye)*Re/Ae.y+ie,Y<=Ze&&Y>=ye&&Y<=ct&&(n.style.top=He+(Ye-Ve)/Ae.y+wn+"px"),Y>=ct&&(Y=ct),Y>=Ze&&(Y=Ze),Y<=ye&&(Y=ye),n.style.height=Y+"px",k.aspectRatio==="content"?(n.style.width=(Y-xt-ft-pt-ce)*Ge+pt+ce+"px",k.containment&&(je=n.overlaps(ke),je.right<=k.containment[1]&&(n.style.width=be+"px",n.style.height=be/Ge+"px"))):k.aspectRatio==="panel"&&(n.style.width=Y*_e+"px",k.containment&&(je=n.overlaps(ke),je.right<=k.containment[1]&&(n.style.width=be+"px",n.style.height=be/_e+"px")))):at.contains("jsPanel-resizeit-se")?(G=Fe+(Me-Le)*Re/Ae.x+It,G>=be&&(G=be),G>=ae&&(G=ae),G<=Ne&&(G=Ne),n.style.width=G+"px",Re===2&&(n.style.left=lt-(Me-Le)+"px"),k.aspectRatio&&(n.style.height=G/_e+"px"),Y=st+(Ye-Ve)*Re/Ae.y+ie,Y>=re&&(Y=re),Y>=Ze&&(Y=Ze),Y<=ye&&(Y=ye),n.style.height=Y+"px",Re===2&&(n.style.top=He-(Ye-Ve)+"px"),k.aspectRatio==="content"?(n.style.width=(Y-xt-ft-pt-ce)*Ge+pt+ce+"px",k.containment&&(je=n.overlaps(ke),je.right<=k.containment[1]&&(n.style.width=be+"px",n.style.height=be/Ge+"px"))):k.aspectRatio==="panel"&&(n.style.width=Y*_e+"px",k.containment&&(je=n.overlaps(ke),je.right<=k.containment[1]&&(n.style.width=be+"px",n.style.height=be/_e+"px")))):at.contains("jsPanel-resizeit-sw")?(Y=st+(Ye-Ve)*Re/Ae.y+ie,Y>=re&&(Y=re),Y>=Ze&&(Y=Ze),Y<=ye&&(Y=ye),n.style.height=Y+"px",Re===2&&(n.style.top=He-(Ye-Ve)+"px"),k.aspectRatio&&(n.style.width=Y*_e+"px"),G=Fe+(Le-Me)*Re/Ae.x+It,G<=ae&&G>=Ne&&G<=tt&&(n.style.left=lt+(Me-Le)/Ae.x+un+"px"),G>=tt&&(G=tt),G>=ae&&(G=ae),G<=Ne&&(G=Ne),n.style.width=G+"px",k.aspectRatio==="content"?(n.style.height=(G-Sn-De)/Ge+xt+ft+pt+ce+"px",k.containment&&(je=n.overlaps(ke),je.bottom<=k.containment[2]&&(n.style.height=re+"px",n.style.width=re*Ge+"px"))):k.aspectRatio==="panel"&&(n.style.height=G/_e+"px",k.containment&&(je=n.overlaps(ke),je.bottom<=k.containment[2]&&(n.style.height=re+"px",n.style.width=re*_e+"px")))):at.contains("jsPanel-resizeit-ne")?(G=Fe+(Me-Le)*Re/Ae.x+It,G>=be&&(G=be),G>=ae&&(G=ae),G<=Ne&&(G=Ne),n.style.width=G+"px",Re===2&&(n.style.left=lt-(Me-Le)+"px"),k.aspectRatio&&(n.style.height=G/_e+"px"),Y=st+(Ve-Ye)*Re/Ae.y+ie,Y<=Ze&&Y>=ye&&Y<=ct&&(n.style.top=He+(Ye-Ve)/Ae.y+wn+"px"),Y>=ct&&(Y=ct),Y>=Ze&&(Y=Ze),Y<=ye&&(Y=ye),n.style.height=Y+"px",k.aspectRatio==="content"?(n.style.width=(Y-xt-ft-pt-ce)*Ge+pt+ce+"px",k.containment&&(je=n.overlaps(ke),je.right<=k.containment[1]&&(n.style.width=be+"px",n.style.height=be/Ge+"px"))):k.aspectRatio==="panel"&&(n.style.width=Y*_e+"px",k.containment&&(je=n.overlaps(ke),je.right<=k.containment[1]&&(n.style.width=be+"px",n.style.height=be/_e+"px")))):at.contains("jsPanel-resizeit-nw")&&(k.aspectRatio&&at.contains("jsPanel-resizeit-nw")&&(Me=Ye*Et,Ye=Me/Et),G=Fe+(Le-Me)*Re/Ae.x+It,G<=ae&&G>=Ne&&G<=tt&&(n.style.left=lt+(Me-Le)/Ae.x+un+"px"),G>=tt&&(G=tt),G>=ae&&(G=ae),G<=Ne&&(G=Ne),n.style.width=G+"px",k.aspectRatio&&(n.style.height=G/_e+"px"),Y=st+(Ve-Ye)*Re/Ae.y+ie,Y<=Ze&&Y>=ye&&Y<=ct&&(n.style.top=He+(Ye-Ve)/Ae.y+wn+"px"),Y>=ct&&(Y=ct),Y>=Ze&&(Y=Ze),Y<=ye&&(Y=ye),n.style.height=Y+"px",k.aspectRatio==="content"?n.style.width=(Y-xt-ft-pt-ce)*Ge+pt+ce+"px":k.aspectRatio==="panel"&&(n.style.width=Y*_e+"px")),window.getSelection().removeAllRanges();const sn=window.getComputedStyle(n),qe={left:parseFloat(sn.left),top:parseFloat(sn.top),right:parseFloat(sn.right),bottom:parseFloat(sn.bottom),width:parseFloat(sn.width),height:parseFloat(sn.height)};k.resize.length&&M.processCallbacks(n,k.resize,!1,qe,ve)},M.pointermove.forEach(ve=>document.addEventListener(ve,he,!1)),window.addEventListener("mouseout",Ke,!1)})}),M.pointerup.forEach(function(Oe){document.addEventListener(Oe,Be),window.removeEventListener("mouseout",Ke)}),m.disable&&(Se.style.pointerEvents="none")}),n},n.resizeit=m=>{const x=n.querySelectorAll(".jsPanel-resizeit-handle");return m==="disable"?x.forEach(I=>I.style.pointerEvents="none"):x.forEach(I=>I.style.pointerEvents="auto"),n},n.getScaleFactor=()=>{const m=n.getBoundingClientRect();return{x:m.width/n.offsetWidth,y:m.height/n.offsetHeight}},n.calcSizeFactors=()=>{const m=window.getComputedStyle(n);if(e.container==="window")n.hf=parseFloat(m.left)/(window.innerWidth-parseFloat(m.width)),n.vf=parseFloat(m.top)/(window.innerHeight-parseFloat(m.height));else if(n.parentElement){let x=n.parentElement.getBoundingClientRect();n.hf=parseFloat(m.left)/(x.width-parseFloat(m.width)),n.vf=parseFloat(m.top)/(x.height-parseFloat(m.height))}},n.saveCurrentDimensions=()=>{const m=window.getComputedStyle(n);n.currentData.width=m.width,n.currentData.height=m.height},n.saveCurrentPosition=()=>{const m=window.getComputedStyle(n);n.currentData.left=m.left,n.currentData.top=m.top},n.reposition=(...m)=>{let x=e.position,I=!0,y;return m.forEach(k=>{typeof k=="string"||typeof k=="object"?x=k:typeof k=="boolean"?I=k:typeof k=="function"&&(y=k)}),M.position(n,x),n.slaves&&n.slaves.size>0&&n.slaves.forEach(k=>k.reposition()),I&&n.saveCurrentPosition(),y&&y.call(n,n),n},n.repositionOnSnap=m=>{let x="0",I="0",y=M.pOcontainment(e.dragit.containment);if(e.dragit.snap.containment)switch(m){case"left-top":x=y[3],I=y[0];break;case"right-top":x=-y[1],I=y[0];break;case"right-bottom":x=-y[1],I=-y[2];break;case"left-bottom":x=y[3],I=-y[2];break;case"center-top":x=y[3]/2-y[1]/2,I=y[0];break;case"center-bottom":x=y[3]/2-y[1]/2,I=-y[2];break;case"left-center":x=y[3],I=y[0]/2-y[2]/2;break;case"right-center":x=-y[1],I=y[0]/2-y[2]/2;break}M.position(n,m),M.setStyles(n,{left:`calc(${n.style.left} + ${x}px)`,top:`calc(${n.style.top} + ${I}px)`})},n.overlaps=(m,x,I)=>{let y=n.getBoundingClientRect(),k=getComputedStyle(n.parentElement),he=n.getScaleFactor(),ge={top:0,right:0,bottom:0,left:0},G,Y=0,Fe=0,st=0,dn=0;n.options.container!=="window"&&x==="paddingbox"&&(ge.top=parseInt(k.borderTopWidth,10)*he.y,ge.right=parseInt(k.borderRightWidth,10)*he.x,ge.bottom=parseInt(k.borderBottomWidth,10)*he.y,ge.left=parseInt(k.borderLeftWidth,10)*he.x),typeof m=="string"?m==="window"?G={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}:m==="parent"?G=n.parentElement.getBoundingClientRect():G=document.querySelector(m).getBoundingClientRect():G=m.getBoundingClientRect(),I&&(Y=I.touches?I.touches[0].clientX:I.clientX,Fe=I.touches?I.touches[0].clientY:I.clientY,st=Y-G.left,dn=Fe-G.top);let Ke=y.left<G.right&&y.right>G.left,Be=y.top<G.bottom&&y.bottom>G.top;return{overlaps:Ke&&Be,top:y.top-G.top-ge.top,right:G.right-y.right-ge.right,bottom:G.bottom-y.bottom-ge.bottom,left:y.left-G.left-ge.left,parentBorderWidth:ge,panelRect:y,referenceRect:G,pointer:{clientX:Y,clientY:Fe,left:st-ge.left,top:dn-ge.top,right:G.width-st-ge.right,bottom:G.height-dn-ge.bottom}}},n.setSize=()=>{if(e.panelSize){const m=M.pOsize(n,e.panelSize);n.style.width=m.width,n.style.height=m.height}else if(e.contentSize){const m=M.pOsize(n,e.contentSize);n.content.style.width=m.width,n.content.style.height=m.height,n.style.width=m.width,n.content.style.width="100%"}return n},n.resize=(...m)=>{let x=window.getComputedStyle(n),I={width:x.width,height:x.height},y=!0,k;m.forEach(G=>{typeof G=="string"?I=G:typeof G=="object"?I=Object.assign(I,G):typeof G=="boolean"?y=G:typeof G=="function"&&(k=G)});let he=M.pOsize(n,I);n.style.width=he.width,n.style.height=he.height,n.slaves&&n.slaves.size>0&&n.slaves.forEach(G=>G.reposition()),y&&n.saveCurrentDimensions(),n.status="normalized";let ge=n.controlbar.querySelector(".jsPanel-btn-smallify");return ge&&(ge.style.transform="rotate(0deg)"),k&&k.call(n,n),n.calcSizeFactors(),n},n.windowResizeHandler=m=>{if(m.target===window){let x=n.status,I=e.onwindowresize,y,k;if(x==="maximized"&&I)n.maximize(!1,!0);else if(n.snapped&&x!=="minimized")n.snap(n.snapped,!0);else if(x==="normalized"||x==="smallified"||x==="maximized"){let he=typeof I;he==="boolean"?(y=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=y<=0?0:y+"px",k=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=k<=0?0:k+"px"):he==="function"?I.call(n,m,n):he==="object"&&(I.preset===!0&&(y=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=y<=0?0:y+"px",k=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=k<=0?0:k+"px"),I.callback.call(n,m,n))}else x==="smallifiedmax"&&I&&n.maximize(!1,!0).smallify();n.slaves&&n.slaves.size>0&&n.slaves.forEach(he=>he.reposition())}},n.setControls=(m,x)=>(n.header.querySelectorAll(".jsPanel-btn").forEach(I=>{const y=I.className.split("-"),k=y[y.length-1];n.getAttribute(`data-btn${k}`)!=="hidden"&&(I.style.display="block")}),m.forEach(I=>{const y=n.controlbar.querySelector(I);y&&(y.style.display="none")}),x&&x.call(n,n),n),n.setControlStatus=(m,x="enable",I)=>{const y=n.controlbar.querySelector(`.jsPanel-btn-${m}`);switch(x){case"disable":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"disabled"),y.style.pointerEvents="none",y.style.opacity=.4,y.style.cursor="default");break;case"hide":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"hidden"),y.style.display="none");break;case"show":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"enabled"),y.style.display="block",y.style.pointerEvents="auto",y.style.opacity=1,y.style.cursor="pointer");break;case"enable":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.getAttribute(`data-btn${m}`)==="hidden"&&(y.style.display="block"),n.setAttribute(`data-btn${m}`,"enabled"),y.style.pointerEvents="auto",y.style.opacity=1,y.style.cursor="pointer");break;case"remove":n.controlbar.removeChild(y),n.setAttribute(`data-btn${m}`,"removed");break}return I&&I.call(n,n),n},n.setControlSize=m=>{const x=m.toLowerCase();n.controlbar.querySelectorAll(".jsPanel-btn").forEach(y=>{["jsPanel-btn-xl","jsPanel-btn-lg","jsPanel-btn-md","jsPanel-btn-sm","jsPanel-btn-xs"].forEach(k=>y.classList.remove(k)),y.classList.add(`jsPanel-btn-${x}`)}),x==="xl"?n.titlebar.style.fontSize="1.5rem":x==="lg"?n.titlebar.style.fontSize="1.25rem":x==="md"?n.titlebar.style.fontSize="1.05rem":x==="sm"?n.titlebar.style.fontSize=".9rem":x==="xs"&&(n.titlebar.style.fontSize=".8rem")},n.setHeaderControls=m=>{if(n.options.headerControls.add){let k=n.options.headerControls.add;Array.isArray(k)||(k=[k]),k.forEach(he=>n.addControl(he))}let x=[];n.controlbar.querySelectorAll(".jsPanel-btn").forEach(k=>{let he=k.className.match(/jsPanel-btn-[a-z\d]{3,}/i),ge=he[0].substring(12);x.push(ge)});const y=M.pOheaderControls(e.headerControls);return e.headerControls=y,x.forEach(k=>{y[k]&&n.setControlStatus(k,y[k])}),n.setControlSize(y.size),m&&m.call(n,n),n},n.setHeaderLogo=(m,x)=>{let I=[n.headerlogo],y=document.querySelector("#"+n.id+"-min");return y&&I.push(y.querySelector(".jsPanel-headerlogo")),typeof m=="string"?m.startsWith("<")?I.forEach(k=>k.innerHTML=m):I.forEach(k=>{M.emptyNode(k);let he=document.createElement("img");he.src=m,k.append(he)}):I.forEach(k=>{M.emptyNode(k),k.append(m)}),n.headerlogo.childNodes.forEach(k=>{k.nodeName&&k.nodeName==="IMG"&&k.setAttribute("draggable","false")}),x&&x.call(n,n),n},n.setHeaderRemove=m=>(n.removeChild(n.header),n.content.classList.add("jsPanel-content-noheader"),["close","maximize","normalize","minimize","smallify"].forEach(x=>n.setAttribute(`data-btn${x}`,"removed")),m&&m.call(n,n),n),n.setHeaderTitle=(m,x)=>{let I=[n.headertitle],y=document.querySelector("#"+n.id+"-min");return y&&I.push(y.querySelector(".jsPanel-title")),typeof m=="string"?I.forEach(k=>k.innerHTML=m):typeof m=="function"?I.forEach(k=>{M.emptyNode(k),k.innerHTML=m()}):I.forEach(k=>{M.emptyNode(k),k.append(m)}),x&&x.call(n,n),n},n.setIconfont=(m,x=n,I)=>{if(m){let y,k;if(m==="fa"||m==="far"||m==="fal"||m==="fas"||m==="fad")y=[`${m} fa-window-close`,`${m} fa-window-maximize`,`${m} fa-window-restore`,`${m} fa-window-minimize`,`${m} fa-chevron-up`];else if(m==="material-icons")y=[m,m,m,m,m,m],k=["close","fullscreen","fullscreen_exit","call_received","expand_less"];else if(Array.isArray(m))y=[`custom-control-icon ${m[4]}`,`custom-control-icon ${m[3]}`,`custom-control-icon ${m[2]}`,`custom-control-icon ${m[1]}`,`custom-control-icon ${m[0]}`];else if(m==="bootstrap"||m==="glyphicon")y=["glyphicon glyphicon-remove","glyphicon glyphicon-fullscreen","glyphicon glyphicon-resize-full","glyphicon glyphicon-minus","glyphicon glyphicon-chevron-up"];else return x;x.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(he=>M.emptyNode(he).innerHTML="<span></span>"),Array.prototype.slice.call(x.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((he,ge)=>{he.className=y[ge],m==="material-icons"&&(he.textContent=k[ge])})}return I&&I.call(x,x),x},n.addToolbar=(m,x,I)=>{if(m==="header"?m=n.headertoolbar:m==="footer"&&(m=n.footer),typeof x=="string")m.innerHTML=x;else if(Array.isArray(x))x.forEach(y=>{typeof y=="string"?m.innerHTML+=y:m.append(y)});else if(typeof x=="function"){let y=x.call(n,n);typeof y=="string"?m.innerHTML=y:m.append(y)}else m.append(x);return m.classList.add("active"),I&&I.call(n,n),n},n.addCloseControl=()=>{let m=document.createElement("button"),x=n.content.style.color;return m.classList.add("jsPanel-addCloseCtrl"),m.innerHTML=M.icons.close,m.style.color=x,n.options.rtl&&m.classList.add("rtl"),n.appendChild(m),M.pointerup.forEach(I=>{m.addEventListener(I,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.close(null,!0)})}),M.pointerdown.forEach(I=>{m.addEventListener(I,y=>y.preventDefault())}),n},n.addControl=m=>{if(!m.html)return n;m.position||(m.position=1);const x=n.controlbar.querySelectorAll(".jsPanel-btn").length;let I=document.createElement("button");I.innerHTML=m.html,I.className=`jsPanel-btn jsPanel-btn-${m.name} jsPanel-btn-${e.headerControls.size}`,I.style.color=n.header.style.color,m.position>x?n.controlbar.append(I):n.controlbar.insertBefore(I,n.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${m.position})`));const y=m.ariaLabel||m.name;return y&&I.setAttribute("aria-label",y),M.pointerup.forEach(k=>{I.addEventListener(k,he=>{if(he.preventDefault(),he.button&&he.button>0)return!1;m.handler.call(n,n,I)})}),m.afterInsert&&m.afterInsert.call(I,I),n},n.setRtl=()=>{[n.header,n.content,n.footer].forEach(m=>{m.dir="rtl",e.rtl.lang&&(m.lang=e.rtl.lang)})},n.id=e.id,n.classList.add("jsPanel-"+e.paneltype),e.paneltype==="standard"&&(n.style.zIndex=this.zi.next()),i.append(n),n.front(!1,!1),n.setTheme(e.theme),e.boxShadow&&n.classList.add(`jsPanel-depth-${e.boxShadow}`),e.header){if(e.headerLogo&&n.setHeaderLogo(e.headerLogo),n.setIconfont(e.iconfont),n.setHeaderTitle(e.headerTitle),n.setHeaderControls(),M.isIE){let m=[n.headerbar,n.controlbar];switch(n.options.headerControls.size){case"md":m.forEach(x=>{x.style.height="34px"});break;case"xs":m.forEach(x=>{x.style.height="26px"});break;case"sm":m.forEach(x=>{x.style.height="30px"});break;case"lg":m.forEach(x=>{x.style.height="38px"});break;case"xl":m.forEach(x=>{x.style.height="42px"});break}}if(e.header==="auto-show-hide"){let m="jsPanel-depth-"+e.boxShadow;n.header.style.opacity=0,n.style.backgroundColor="transparent",this.remClass(n,m),this.setClass(n.content,m),n.header.addEventListener("mouseenter",()=>{n.header.style.opacity=1,M.setClass(n,m),M.remClass(n.content,m)}),n.header.addEventListener("mouseleave",()=>{n.header.style.opacity=0,M.remClass(n,m),M.setClass(n.content,m)})}}else n.setHeaderRemove(),e.addCloseControl&&n.addCloseControl();if(e.headerToolbar&&n.addToolbar(n.headertoolbar,e.headerToolbar),e.footerToolbar&&n.addToolbar(n.footer,e.footerToolbar),e.border&&n.setBorder(e.border),e.borderRadius&&n.setBorderRadius(e.borderRadius),e.css)for(const[m,x]of Object.entries(e.css))if(m==="panel")n.className+=` ${x}`;else{let I=n.querySelector(`.jsPanel-${m}`);I&&(I.className+=` ${x}`)}if(e.content&&(typeof e.content=="function"?e.content.call(n,n):typeof e.content=="string"?n.content.innerHTML=e.content:n.content.append(e.content)),e.contentAjax&&this.ajax(e.contentAjax,n),e.contentFetch&&this.fetch(e.contentFetch,n),e.contentOverflow){const m=e.contentOverflow.split(" ");m.length===1?n.content.style.overflow=m[0]:m.length===2&&(n.content.style.overflowX=m[0],n.content.style.overflowY=m[1])}if(e.autoclose){typeof e.autoclose=="number"?e.autoclose={time:e.autoclose+"ms"}:typeof e.autoclose=="string"&&(e.autoclose={time:e.autoclose});let m=Object.assign({},M.defaultAutocloseConfig,e.autoclose);m.time&&typeof m.time=="number"&&(m.time+="ms");let x=n.progressbar.querySelector("div");x.addEventListener("animationend",I=>{I.stopPropagation(),n.progressbar.classList.remove("active"),n.close()}),m.progressbar&&(n.progressbar.classList.add("active"),m.background?M.colorNames[m.background]?n.progressbar.style.background="#"+M.colorNames[m.background]:n.progressbar.style.background=m.background:n.progressbar.classList.add("success-bg")),x.style.animation=`${m.time} progressbar`}if(e.rtl&&n.setRtl(),n.setSize(),n.status="normalized",e.position?this.position(n,e.position):n.style.opacity=1,document.dispatchEvent(u),n.calcSizeFactors(),e.animateIn&&(n.addEventListener("animationend",()=>{this.remClass(n,e.animateIn)}),this.setClass(n,e.animateIn)),e.syncMargins){let m=this.pOcontainment(e.maximizedMargin);e.dragit&&(e.dragit.containment=m,e.dragit.snap===!0?(e.dragit.snap=M.defaultSnapConfig,e.dragit.snap.containment=!0):e.dragit.snap&&(e.dragit.snap.containment=!0)),e.resizeit&&(e.resizeit.containment=m)}if(e.dragit?(["start","drag","stop"].forEach(m=>{e.dragit[m]?typeof e.dragit[m]=="function"&&(e.dragit[m]=[e.dragit[m]]):e.dragit[m]=[]}),n.drag(e.dragit),n.addEventListener("jspaneldragstop",m=>{m.panel===n&&n.calcSizeFactors()},!1)):n.titlebar.style.cursor="default",e.resizeit){["start","resize","stop"].forEach(x=>{e.resizeit[x]?typeof e.resizeit[x]=="function"&&(e.resizeit[x]=[e.resizeit[x]]):e.resizeit[x]=[]}),n.sizeit(e.resizeit);let m;n.addEventListener("jspanelresizestart",x=>{x.panel===n&&(m=n.status)},!1),n.addEventListener("jspanelresizestop",x=>{x.panel===n&&(m==="smallified"||m==="smallifiedmax"||m==="maximized")&&parseFloat(n.style.height)>parseFloat(window.getComputedStyle(n.header).height)&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(u),document.dispatchEvent(a),e.onstatuschange&&M.processCallbacks(n,e.onstatuschange,"every"),n.calcSizeFactors())},!1)}if(n.saveCurrentDimensions(),n.saveCurrentPosition(),e.setStatus&&(e.setStatus==="smallifiedmax"?n.maximize().smallify():e.setStatus==="smallified"?n.smallify():n[e.setStatus.slice(0,-1)]()),this.pointerdown.forEach(m=>{n.addEventListener(m,x=>{!x.target.closest(".jsPanel-btn-close")&&!x.target.closest(".jsPanel-btn-minimize")&&e.paneltype==="standard"&&n.front()},!1)}),e.onwindowresize&&n.options.container==="window"&&window.addEventListener("resize",n.windowResizeHandler,!1),e.onparentresize){let m=e.onparentresize,x=typeof m,I=n.isChildpanel();if(I){const y=I.content;let k=[];n.parentResizeHandler=he=>{if(he.panel===I){k[0]=y.offsetWidth,k[1]=y.offsetHeight;let ge=n.status,G,Y;ge==="maximized"&&m?n.maximize():n.snapped&&ge!=="minimized"?n.snap(n.snapped,!0):ge==="normalized"||ge==="smallified"||ge==="maximized"?x==="function"?m.call(n,n,{width:k[0],height:k[1]}):x==="object"&&m.preset===!0?(G=(k[0]-n.offsetWidth)*n.hf,n.style.left=G<=0?0:G+"px",Y=(k[1]-n.offsetHeight)*n.vf,n.style.top=Y<=0?0:Y+"px",m.callback.call(n,n,{width:k[0],height:k[1]})):x==="boolean"&&(G=(k[0]-n.offsetWidth)*n.hf,n.style.left=G<=0?0:G+"px",Y=(k[1]-n.offsetHeight)*n.vf,n.style.top=Y<=0?0:Y+"px"):ge==="smallifiedmax"&&m&&n.maximize().smallify()}},document.addEventListener("jspanelresize",n.parentResizeHandler,!1)}}return this.globalCallbacks&&(Array.isArray(this.globalCallbacks)?this.globalCallbacks.forEach(m=>m.call(n,n)):this.globalCallbacks.call(n,n)),e.callback&&(Array.isArray(e.callback)?e.callback.forEach(m=>m.call(n,n)):e.callback.call(n,n)),t&&(Array.isArray(t)?t.forEach(m=>m.call(n,n)):t.call(n,n)),document.dispatchEvent(s),n}};const hm=/<\/?[a-z][a-z0-9]*(\s[^<>]*)?\/?>|&[a-z][a-z0-9]*;|&#\d+;|&#x[0-9a-f]+;/i;function Fc(e){return hm.test(e)}function fm(e){return e.replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"').replace(/&apos;|&#39;/gi,"'").replace(/&nbsp;/gi," ").replace(/&#x([0-9a-f]+);/gi,(t,r)=>String.fromCodePoint(parseInt(r,16))).replace(/&#(\d+);/g,(t,r)=>String.fromCodePoint(Number(r))).replace(/&amp;/gi,"&")}function pm(e){if(typeof document<"u"){const t=document.createElement("div");return t.innerHTML=e,t.textContent??""}return fm(e.replace(/<[^>]*>/g,""))}function mm(e){return(Fc(e)?pm(e):e).replace(/\s+/g," ").trim()}const gm={id:"html-preview",name:"HTML Preview",type:"cell-renderer",version:"0.3.0",description:`Shows a cell's HTML as a plain-text preview (first N characters); click to edit the raw HTML in a dialog, or use the popup icon to view the full rendered HTML in a window. Apply by setting a column's renderer to "html-preview". For direct in-cell rendering use the "html" renderer instead.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-preview.ts"};let no=30;async function al(e){const t=await e.settings.get("html-preview","maxChars");typeof t=="number"&&Number.isFinite(t)&&t>0&&(no=Math.floor(t))}function bm(e){customElements.get("html-preview-cell")||customElements.define("html-preview-cell",ym),e.ui.registerCellRenderer("html-preview","html-preview-cell"),e.ui.registerSettings("html-preview","HTML Preview",[{key:"maxChars",label:"Max characters shown",type:"number",default:30,scope:"workspace",description:"HTML-preview cells show the first N characters of the text; use the popup icon on the right to open the full rendered HTML in a window. Applies to cells rendered after the change (reload to refresh all)."}]),al(e),e.events.on("app:ready",()=>void al(e))}function ll(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}let cl=0;class ym extends HTMLElement{constructor(){super(...arguments),this._value="",this._label="HTML"}set value(t){const r=t??"";this._value!==r&&(this._value=r,this.render())}get value(){return this._value}set column(t){this._label=t?.label??"HTML"}connectedCallback(){this.render()}render(){if(this.innerHTML="",!this._value){const a=document.createElement("span");a.style.cssText="color:#9ca3af;cursor:text",a.textContent="empty",a.title="Click to edit the HTML",a.addEventListener("click",()=>this.openEditor()),this.append(a);return}const t=document.createElement("span");t.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%";const r=document.createElement("span"),i=mm(this._value);r.textContent=i.length>no?i.slice(0,no)+"…":i,r.title="Click to edit the HTML",r.style.cssText="flex:0 1 auto;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:text",r.addEventListener("click",a=>{a.stopPropagation(),this.openEditor()});const n=document.createElement("span");n.style.cssText="flex:1 1 auto";const s=document.createElement("button");s.type="button",s.title="Open the HTML in a window",s.setAttribute("aria-label","Open the HTML in a window"),s.innerHTML='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3h7v7"/><path d="M21 3l-9 9"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/></svg>',s.style.cssText="flex:none;display:inline-flex;align-items:center;justify-content:center;padding:1px;background:none;border:0;color:#9ca3af;cursor:pointer;line-height:0",s.addEventListener("mouseenter",()=>s.style.color="#4b5563"),s.addEventListener("mouseleave",()=>s.style.color="#9ca3af"),s.addEventListener("click",a=>{a.stopPropagation(),this.openWindow()}),t.append(r,n,s),this.append(t)}openWindow(){const t=document.createElement("div");if(t.style.cssText="padding:0.75rem;overflow:auto;height:100%;box-sizing:border-box",Fc(this._value))t.innerHTML=this._value;else{const r=document.createElement("pre");r.style.cssText="white-space:pre-wrap;word-break:break-word;margin:0;font-family:ui-monospace, monospace;",r.textContent=this._value,t.append(r)}M.create({id:`easydb-html-popup-${++cl}`,container:ll(),headerTitle:this._label,theme:"#7c3aed",content:t,contentSize:"520 400",position:"center-top 0 60",minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1},resizeit:{containment:!1}})}openEditor(){const t=document.createElement("div");t.style.cssText="display:flex;flex-direction:column;gap:0.5rem;height:100%;box-sizing:border-box;padding:0.5rem";const r=document.createElement("textarea");r.value=this._value,r.style.cssText="flex:1 1 auto;width:100%;box-sizing:border-box;resize:none;font-family:monospace;font-size:0.85rem";const i=document.createElement("div");i.style.cssText="display:flex;justify-content:flex-end;gap:0.5rem;flex:none";const n=document.createElement("button");n.type="button",n.textContent="Cancel",n.style.cssText="padding:0.3rem 0.8rem;cursor:pointer";const s=document.createElement("button");s.type="button",s.textContent="Save",s.style.cssText="padding:0.3rem 0.8rem;cursor:pointer;background:#7c3aed;color:#fff;border:0;border-radius:0.25rem",i.append(n,s),t.append(r,i);const a=M.create({id:`easydb-html-edit-${++cl}`,container:ll(),headerTitle:`Edit ${this._label}`,theme:"#7c3aed",content:t,contentSize:"520 400",position:"center",minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1},resizeit:{containment:!1}});n.addEventListener("click",()=>a.close()),s.addEventListener("click",()=>{this._value=r.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:r.value},bubbles:!0,composed:!0})),a.close(),this.render()}),r.addEventListener("keydown",c=>{c.key==="Enter"&&(c.ctrlKey||c.metaKey)?(c.preventDefault(),s.click()):c.key==="Escape"&&(c.preventDefault(),a.close())}),setTimeout(()=>r.focus(),0)}}const wm=Object.freeze(Object.defineProperty({__proto__:null,init:bm,meta:gm},Symbol.toStringTag,{value:"Module"})),vm={id:"html-render",name:"HTML",type:"cell-renderer",version:"0.1.0",description:`Renders a cell's value directly as HTML (unescaped, in full, no popup). Apply by setting a column's renderer to "html". For a truncated preview use "html-preview".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-render.ts"};function xm(e){customElements.get("html-render-cell")||customElements.define("html-render-cell",$m),e.ui.registerCellRenderer("html","html-render-cell")}class $m extends HTMLElement{constructor(){super(...arguments),this._value="",this.editing=!1}set value(t){const r=t??"";this._value!==r&&(this._value=r,this.editing||this.render())}get value(){return this._value}connectedCallback(){this.editing||this.render()}render(){this.innerHTML="";const t=document.createElement("span");t.style.cssText="display:inline-block;min-width:1ch;cursor:text",t.title="Click to edit",this._value?t.innerHTML=this._value:(t.style.color="#9ca3af",t.textContent="empty"),t.addEventListener("click",()=>this.beginEdit()),this.append(t)}beginEdit(){this.editing=!0,this.innerHTML="";const t=document.createElement("input");t.type="text",t.value=this._value,t.style.cssText="width:100%;box-sizing:border-box";let r=!1;const i=()=>{r||(r=!0,this.editing=!1,this._value=t.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:t.value},bubbles:!0,composed:!0})),this.render())};t.addEventListener("blur",i),t.addEventListener("keydown",n=>{n.key==="Enter"?(n.preventDefault(),t.blur()):n.key==="Escape"&&(n.preventDefault(),r=!0,this.editing=!1,this.render())}),this.append(t),t.focus(),t.select()}}const km=Object.freeze(Object.defineProperty({__proto__:null,init:xm,meta:vm},Symbol.toStringTag,{value:"Module"})),Cm={id:"cell-link",name:"Cell Link",type:"cell-renderer",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-link.ts"};function Em(e){customElements.get("cell-link")||customElements.define("cell-link",Sm),e.ui.registerCellRenderer("link","cell-link")}class Sm extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1,this._editor=null}set value(t){const r=t==null?"":String(t);this._value!==r&&(this._value=r,this._editing=!1,this.render())}get value(){return this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="",this._editor=null;const t=this._value,r=this._editing?null:_m(t),i=!this._editing&&!r?Tm(t):null,n=!this._editing&&!r&&!i?Am(t):null;if(r||i||n){const s=document.createElement("span");s.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const a=document.createElement("a");a.href=r?t:i?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,r&&(a.target="_blank",a.rel="noopener noreferrer"),a.textContent=t,a.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",a.title=r?`Open ${t}`:i?`Email ${t}`:`Call ${t}`;const c=document.createElement("button");c.type="button",c.title="Edit",c.textContent="✎",c.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",c.addEventListener("click",u=>{u.preventDefault(),u.stopPropagation(),this._editing=!0,this.render()}),s.append(a,c),this.append(s)}else{const s=document.createElement("input");s.type="text",s.value=t,s.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",s.addEventListener("change",()=>{this._editor===s&&this.commit(s.value)}),s.addEventListener("keydown",a=>{a.key==="Enter"?(a.preventDefault(),this.commit(s.value)):a.key==="Escape"&&(this._editor=null,this._editing=!1,this.render())}),s.addEventListener("blur",()=>{this._editor===s&&this.commit(s.value)}),this.append(s),this._editor=s,this._editing&&setTimeout(()=>{s.focus(),s.select()},0)}}commit(t){const r=t!==this._value;this._value=t,this._editing=!1,this.render(),r&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function _m(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function Tm(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function Am(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const r=t.replace(/\D/g,"");if(r.length<7||r.length>15)return null;const i=/[ ()\-.]/.test(t),n=t.startsWith("+");return!i&&!n&&r.length<10?null:t}const Im=Object.freeze(Object.defineProperty({__proto__:null,init:Em,meta:Cm},Symbol.toStringTag,{value:"Module"})),Mc={id:"auto-renderer",name:"Auto Renderer",type:"cell-renderer",version:"0.1.0",description:"After any import, gives columns a renderer based on their values: link for URLs, image for image URLs, html-preview for markup or long text.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 3 8 6.5 4.5 8 8 9.5 9.5 13 11 9.5 14.5 8 11 6.5 9.5 3z"/><path d="M17.5 12 16.75 14 15 14.75 16.75 15.5 17.5 17.5 18.25 15.5 20 14.75 18.25 14 17.5 12z"/><path d="M4 17h9"/><path d="M4 21h6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-renderer.ts"},Pm=120,Rm=50,Dm=/\.(png|jpe?g|gif|webp|svg|avif|bmp|ico)(\?|#|$)/i,Om=/<[a-z][a-z0-9-]*(\s[^<>]*)?\/?>/i;function Bc(e){return/^https?:\/\/\S+$/i.test(e)}function jm(e){return/^data:image\//i.test(e)?!0:Bc(e)&&Dm.test(e)}function Nc(e,t){if(e!=="string")return;const r=[];for(const n of t){if(n==null)continue;const s=typeof n=="string"?n.trim():String(n).trim();s&&r.push(s)}if(r.length===0)return;if(r.every(jm))return"image";if(r.every(Bc))return"link";if(r.some(n=>Om.test(n))||r.reduce((n,s)=>n+s.length,0)/r.length>Pm)return"html-preview"}function Uc(e,t){return t.length===0?[...e]:e.map(r=>{if(r.renderer)return r;const i=Nc(r.type,t.map(n=>n[r.field]));return i?{...r,renderer:i}:r})}function zm(e){e.events.on("import:after",({tableId:t})=>{Lm(e,t)})}async function Lm(e,t){try{const r=await e.store.tables.findOne(t);if(!r||r.columns.length===0||r.columns.every(s=>s.renderer))return;const i=(await e.store.rows(t).find()).slice(0,Rm);if(i.length===0)return;const n=Uc(r.columns,i.map(s=>s.data));if(n.every((s,a)=>s.renderer===r.columns[a]?.renderer))return;await e.store.tables.upsert({...r,columns:n,updatedAt:Date.now()})}catch(r){e.events.emit("plugin:error",{url:Mc.id,phase:"runtime",error:r})}}const Fm=Object.freeze(Object.defineProperty({__proto__:null,inferRenderer:Nc,init:zm,meta:Mc,withInferredRenderers:Uc},Symbol.toStringTag,{value:"Module"}));function $i(e){return e.source?e.source.type==="url"?"referenced":"connected":e.origin?"imported":"normal"}function dl(e){return!!(e.source||e.origin)}const Pr='viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15" role="img"',ul={normal:`<svg ${Pr} aria-label="Local table"><title>Local table</title><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,imported:`<svg ${Pr} aria-label="Imported table (snapshot)"><title>Imported table (snapshot)</title><rect x="3" y="11" width="18" height="10" rx="1"/><line x1="7" y1="15" x2="7" y2="17"/><line x1="12" y1="15" x2="12" y2="17"/><line x1="17" y1="15" x2="17" y2="17"/><path d="M12 2v7"/><polyline points="8 6 12 9 16 6"/></svg>`,referenced:`<svg ${Pr} aria-label="Referenced table (read-only)"><title>Referenced table (read-only)</title><path d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1"/><path d="M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1"/></svg>`,connected:`<svg ${Pr} aria-label="Connected table (live)"><title>Connected table (live)</title><line x1="9" y1="2" x2="9" y2="7"/><line x1="15" y1="2" x2="15" y2="7"/><rect x="6" y="7" width="12" height="7" rx="2"/><path d="M9 14v3a3 3 0 0 0 6 0v-3"/></svg>`},Mm=`<svg ${Pr} aria-label="View"><title>View</title><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;var Bm=Object.defineProperty,Nm=Object.getOwnPropertyDescriptor,Zi=(e,t,r,i)=>{for(var n=i>1?void 0:i?Nm(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Bm(t,r,n),n};function Um(e,t,r){(an.instance??qm()).show(e,t,r)}function Hm(e){if(!e)return null;const t=$i(e);if(t==="connected"||t==="referenced"){const r=e.source?.type??"remote",i=e.source?.writable?"Edits you make are written back to the source.":"It is read-only — edits are not saved back to the source.";return{label:`Connected (live ${r})`,note:`This table is connected to a live ${r} backend: its rows are fetched from the source on demand and are not stored locally. ${i} Closing its window just disconnects the view — the source data is untouched.`}}return t==="imported"?{label:"Imported (snapshot)",note:"This table is a local snapshot imported once from its origin. The rows live in this browser, so edits stay local; use Refresh to re-fetch the latest data from the origin.",...e.origin?{url:e.origin.url}:{}}:{label:"Local",note:"This table was created in the app and is stored locally in your browser."}}function qm(){const e=document.createElement("table-info-dialog");return document.body.appendChild(e),e}let an=class extends Ue{constructor(){super(...arguments),this.name="",this.info=null,this.provenance=null,this.dialogEl=null,this.close=()=>this.dialogEl?.close(),this.onSubmit=e=>{e.preventDefault(),this.close()}}connectedCallback(){super.connectedCallback(),an.instance=this}disconnectedCallback(){super.disconnectedCallback(),an.instance===this&&(an.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}show(e,t,r){this.name=e,this.info=t,this.provenance=r??null,this.updateComplete.then(()=>this.dialogEl?.showModal())}row(e,t,r){if(!t&&!r)return pe;const i=r?_`<a href=${r} target="_blank" rel="noopener noreferrer">${t||r}</a>`:_`${t}`;return _`<dt>${e}</dt>
      <dd>${i}</dd>`}render(){const e=this.info,t=!!(e?.source||e?.sourceUrl||e?.license||e?.licenseUrl||e?.about||e?.aboutUrl),r=Hm(this.provenance);return _`
      <dialog @cancel=${this.close} @keydown=${Zt}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>×</button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>${this.name}</h2>
            <div class="header-actions">
              <button type="submit" class="ghost">Close</button>
            </div>
          </div>
          <div class="dialog-body">
            ${r?_`<div class="kind">
                  <span class="kind-label">${r.label}</span>
                  <p class="kind-note">${r.note}</p>
                  ${r.url?_`<div class="kind-origin">
                        <a href=${r.url} target="_blank" rel="noopener noreferrer"
                          >${r.url}</a
                        >
                      </div>`:pe}
                </div>`:pe}
            ${e?.descriptionHtml?_`<div class="desc">${or(e.descriptionHtml)}</div>`:e?.description?_`<div class="desc">${e.description}</div>`:pe}
            ${t?_`<dl>
                  ${this.row("Source",e?.source,e?.sourceUrl)}
                  ${this.row("License",e?.license,e?.licenseUrl)}
                  ${this.row("About",e?.about,e?.aboutUrl)}
                </dl>`:pe}
            ${!e?.description&&!e?.descriptionHtml&&!t&&!r?_`<p class="empty">No additional information.</p>`:pe}
          </div>
        </form>
      </dialog>
    `}};an.instance=null;an.styles=[Jt,We`
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
    `];Zi([K()],an.prototype,"name",2);Zi([K()],an.prototype,"info",2);Zi([K()],an.prototype,"provenance",2);an=Zi([nt("table-info-dialog")],an);const Wm=.25,Km=4;function Vm(e){return Math.min(Km,Math.max(Wm,e))}function hl(e,t,r){return{x:e.x+t,y:e.y+r,scale:e.scale}}const Ar={x:0,y:0,scale:1};function fl(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Gm(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function Ym(e,t){let r={...Ar};t.style.transformOrigin="0 0";const i=new Set,n=()=>{t.style.transform=`translate(${r.x}px, ${r.y}px) scale(${r.scale})`;for(const x of i)x({...r})};let s="none",a={...Ar},c=0,u=0,p=0,w=0,b=0,$=0;const D=(x,I)=>{const y=e.getBoundingClientRect();return{x:x-y.left,y:I-y.top}},P=x=>{if(x.touches.length===2){s="pinch",a={...r};const[I,y]=[x.touches[0],x.touches[1]];p=fl(I,y)||1;const k=D((I.clientX+y.clientX)/2,(I.clientY+y.clientY)/2);w=(k.x-r.x)/r.scale,b=(k.y-r.y)/r.scale,x.preventDefault();return}if(x.touches.length===1&&!Gm(x.target)){const I=x.timeStamp;if(I-$<300){r={...Ar},n(),$=0,s="none",x.preventDefault();return}$=I,s="pan",a={...r},c=x.touches[0].clientX,u=x.touches[0].clientY}else s="none"},S=x=>{if(s==="pan"&&x.touches.length===1){const I=x.touches[0];r=hl(a,I.clientX-c,I.clientY-u),n(),x.preventDefault()}else if(s==="pinch"&&x.touches.length>=2){const[I,y]=[x.touches[0],x.touches[1]],k=Vm(a.scale*(fl(I,y)/p)),he=D((I.clientX+y.clientX)/2,(I.clientY+y.clientY)/2);r={x:he.x-w*k,y:he.y-b*k,scale:k},n(),x.preventDefault()}},B=x=>{x.touches.length===0?s="none":x.touches.length===1&&s==="pinch"&&(s="pan",a={...r},c=x.touches[0].clientX,u=x.touches[0].clientY)};let q=!1,Q={...Ar},X=0,J=0,W=!1;const Z=(x,I)=>{const y=e.getBoundingClientRect();return x>=y.left&&x<=y.right&&I>=y.top&&I<=y.bottom},de=x=>{if(!q)return;const I=x.clientX-X,y=x.clientY-J;!W&&Math.hypot(I,y)<4||(W=!0,document.body.style.cursor="grabbing",r=hl(Q,I,y),n(),x.preventDefault())},we=()=>{q&&(q=!1,document.body.style.cursor="",window.removeEventListener("mousemove",de,!0),window.removeEventListener("mouseup",Te,!0))};function Te(){we()}const Pe=x=>{x.button===2&&Z(x.clientX,x.clientY)&&(q=!0,W=!1,Q={...r},X=x.clientX,J=x.clientY,window.addEventListener("mousemove",de,!0),window.addEventListener("mouseup",Te,!0))},m=x=>{W&&(x.preventDefault(),W=!1)};return e.addEventListener("touchstart",P,{passive:!1}),e.addEventListener("touchmove",S,{passive:!1}),e.addEventListener("touchend",B),e.addEventListener("touchcancel",B),window.addEventListener("mousedown",Pe,!0),window.addEventListener("contextmenu",m,!0),{snapshot:()=>({...r}),reset:()=>{r={...Ar},n()},restore:x=>{r={...x},n()},subscribe:x=>(i.add(x),()=>i.delete(x)),dispose:()=>{e.removeEventListener("touchstart",P),e.removeEventListener("touchmove",S),e.removeEventListener("touchend",B),e.removeEventListener("touchcancel",B),window.removeEventListener("mousedown",Pe,!0),window.removeEventListener("contextmenu",m,!0),we()}}}function Hc(e,t){let r=null;const i=n=>{const s=document.getElementById(e);s&&(s.style.transformOrigin="0 0",s.style.transform=`translate(${-n.x/n.scale}px, ${-n.y/n.scale}px) scale(${1/n.scale})`)};return{enter(){const n=t();r||!n||(i(n.snapshot()),r=n.subscribe(i))},exit(){r?.(),r=null;const n=document.getElementById(e);n&&(n.style.transform="",n.style.transformOrigin="")}}}function Xm(){for(const e of document.querySelectorAll(".jsPanel"))e.status==="maximized"&&e.maximize?.(void 0,!0)}function Qm(e){let t=0;const r=()=>{t||(t=requestAnimationFrame(()=>{t=0,Xm()}))},i=typeof ResizeObserver<"u"?new ResizeObserver(r):null;return i?.observe(e),window.addEventListener("resize",r),()=>{t&&cancelAnimationFrame(t),t=0,i?.disconnect(),window.removeEventListener("resize",r)}}const Jm="input, textarea, select, button, a, .jsPanel-controlbar",Zm=".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",zs=new WeakMap;function qc(e){const t=e.status==="maximized";for(const r of e.querySelectorAll(Zm))zs.has(r)||zs.set(r,r.style.cursor||"move"),r.style.cursor=t?"pointer":zs.get(r)??"move"}function eg(){for(const e of document.querySelectorAll(".jsPanel"))qc(e)}function tg(){const e=r=>{let i=null;for(const s of r.composedPath())if(s instanceof HTMLElement){if(s.matches(Jm))return;if(s.classList.contains("jsPanel-titlebar")){i=s;break}}if(!i)return;const n=i.closest(".jsPanel");n&&(n.status==="maximized"||n.status==="minimized"?n.normalize?.():n.maximize?.())},t=r=>{const i=r.detail,n=typeof i=="string"?document.getElementById(i):null;n?qc(n):eg()};return document.addEventListener("dblclick",e,!0),document.addEventListener("jspanelstatuschange",t),document.addEventListener("jspanelloaded",t),()=>{document.removeEventListener("dblclick",e,!0),document.removeEventListener("jspanelstatuschange",t),document.removeEventListener("jspanelloaded",t)}}const ng=200,rg=100;function ig(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<ng||e.h<rg?null:{...e}}function Oi(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}let Ls=0;function Wc(){return Ls=Math.max(Date.now(),Ls+1),Ls}const es=new Map;function Kc(e,t){es.set(e,t)}function ts(e){es.delete(e)}function sg(e){return es.has(e)}function og(e){try{es.get(e)?.()}catch{}}const ji=(()=>{const e=new URLSearchParams(location.search).get("minimize");return e===null?!1:!/^(0|false|no)$/i.test(e)})();function ag(e){return e.filter(t=>!t.minimized).slice().sort((t,r)=>(t.z??-1/0)-(r.z??-1/0)).map(t=>t.id)}let pl=!1;async function lg(){pl||(pl=!0,document.addEventListener("easydb:restack-windows",()=>void ml())),await ml()}async function ml(){if(ji)return;const e=await fe();for(let t=0;t<=12;t++){const[r,i]=await Promise.all([e.store.tables.find(),e.store.viewInstances.find()]),n=[...r.filter(a=>a.workspaceId===e.workspaceId&&!a.windowGeometry?.closed).map(a=>({id:a.id,z:a.windowGeometry?.z,minimized:a.windowGeometry?.minimized===!0})),...i.filter(a=>a.workspaceId===e.workspaceId&&a.open).map(a=>({id:a.id,z:a.windowGeometry?.z,minimized:a.windowGeometry?.minimized===!0}))],s=ag(n);if(t<12&&!s.every(a=>sg(a))){await new Promise(a=>setTimeout(a,80));continue}for(const a of s)og(a);return}}var cg=Object.defineProperty,dg=Object.getOwnPropertyDescriptor,qr=(e,t,r,i)=>{for(var n=i>1?void 0:i?dg(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&cg(t,r,n),n};let Jn=class extends Ue{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return _`<button
        class="icon ${e?"active":""}"
        title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"}
        @click=${this.openSearch}
      >
        <span class="mi sm">search</span>
      </button>`}return _`<input
      type="search"
      placeholder="search…"
      .value=${this.query}
      @input=${this.onInput}
      @blur=${this.onBlur}
    />`}};Jn.styles=[qt,We`
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
    `];qr([Ht({type:String})],Jn.prototype,"tableId",2);qr([K()],Jn.prototype,"query",2);qr([K()],Jn.prototype,"open",2);qr([yn("input")],Jn.prototype,"inputEl",2);Jn=qr([nt("panel-search")],Jn);var ug=Object.defineProperty,hg=Object.getOwnPropertyDescriptor,mr=(e,t,r,i)=>{for(var n=i>1?void 0:i?hg(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&ug(t,r,n),n};let jn=class extends Ue{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.rowsActive=!1,this.runTableButton=async(e,t)=>{const r=t?.currentTarget??void 0,i=await fe();try{await Promise.resolve(e.onClick(i.api,{tableId:this.tableId,anchor:r}))}catch(n){console.error(`[table-button:${e.id}]`,n)}}}async connectedCallback(){super.connectedCallback();const e=await fe();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(r=>r.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await fe();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await fe(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const r={};for(const i of t.columns)r[i.field]=fg(i);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:r,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}render(){return _`
      <button title="Add a blank row" aria-label="Add row" @click=${this.addRow}>
        <span class="mi sm">add</span>
      </button>
      <button title="Edit columns" aria-label="Columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span>
      </button>
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>_`<button
              class=${e.danger?"danger":""}
              title=${e.tooltip??e.label}
              aria-label=${e.label}
              @click=${t=>this.runTableButton(e,t)}
            >
              ${e.icon?e.icon.trimStart().startsWith("<svg")?_`<span class="icon-svg">${po(e.icon)}</span>`:_`<span class="mi sm">${e.icon}</span>`:_`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};jn.styles=[qt,We`
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
    `];mr([Ht({type:String})],jn.prototype,"tableId",2);mr([Ht({type:Boolean})],jn.prototype,"active",2);mr([K()],jn.prototype,"rowCount",2);mr([K()],jn.prototype,"tableButtons",2);mr([K()],jn.prototype,"table",2);jn=mr([nt("panel-footer")],jn);function fg(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function Fs(e){return e.title?.trim()?e.title.trim():e.name}function pg(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function mg(e){const t=document.querySelector("app-shell")?.shadowRoot,r=t?.querySelector("header"),i=t?.querySelector("footer");r&&(e.style.top=`${r.offsetHeight}px`),i&&(e.style.bottom=`${i.offsetHeight}px`)}const Vn=new Map,Vc=new Set;let gl=!1,Fo=null;function Gc(){return Fo}function gg(e){const t=Vn.get(e);return t?(t.status==="minimized"&&t.normalize?.(),t.front?.(),!0):(bg(e),!0)}async function bg(e){const t=await fe(),r=await t.store.tables.findOne(e);r?.windowGeometry?.closed&&await t.store.tables.patch(e,{windowGeometry:{...r.windowGeometry,closed:!1},updatedAt:Date.now()})}async function yg(e){const t=await fe();await Eg(e,t)}async function wg(){if(gl)return;gl=!0;const e=await fe(),t=document.getElementById("easydb-panels"),r=document.getElementById("easydb-panels-viewport");if(t&&r){Fo=Ym(t,r);const n=()=>mg(t);n(),window.addEventListener("resize",n);const s=document.querySelector("app-shell")?.shadowRoot,a=s?.querySelector("header"),c=s?.querySelector("footer");if(typeof ResizeObserver<"u"&&(a||c)){const u=new ResizeObserver(n);a&&u.observe(a),c&&u.observe(c)}Qm(r)}tg();const i=(await e.store.tables.find()).filter(n=>n.workspaceId===e.workspaceId);i.sort(Oi);for(const n of i)n.windowGeometry?.closed||bl(n,e);e.store.tables.subscribe(n=>{const s=n.filter(u=>u.workspaceId===e.workspaceId),a=new Map(s.map(u=>[u.id,u]));for(const[u,p]of Vn){const w=a.get(u);if(!w||w.windowGeometry?.closed){Vn.delete(u),ts(u),Vc.add(u);try{p.status!=="closed"&&p.close()}catch{}}}const c=s.filter(u=>!Vn.has(u.id)&&!u.windowGeometry?.closed).sort(Oi);for(const u of c)bl(u,e)}),lg()}const vg=720,xg=360;function bl(e,t){const r=`panel-${Yc(e.id)}`,i=pg(),n=ig(e.windowGeometry),s=ji||n?.minimized===!0,a=()=>{const y=document.createElement("data-table");return y.tableId=e.id,y.style.height="100%",y},c=s?document.createElement("div"):a();let u=s?null:c,p=Fs(e),w=-1,b=-1;const $=()=>{typeof W.setHeaderTitle=="function"&&W.setHeaderTitle(p+dc(w,b))},D=y=>{const k=y.detail;k.key===e.id&&(w=k.count,b=k.total,$())};document.addEventListener(Ii,D);const P=()=>{q.active=!1,u?.remove(),u=null},S=()=>{if(u)return;const y=document.getElementById(r)?.querySelector(".jsPanel-content");if(!y)return;y.replaceChildren();const k=a();y.appendChild(k),u=k,q.active=!0},B=document.createElement("panel-search");B.tableId=e.id;const q=document.createElement("panel-footer");q.tableId=e.id,q.active=!s;const Q=Hc(r,()=>Fo),X=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:kg(),J=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:`${vg} ${xg}`},W=M.create({id:r,container:i,headerTitle:p,headerLogo:ul[$i(e)],footerToolbar:q,theme:"primary",content:c,...J,position:X,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>Ms(e.id,t)},resizeit:{containment:!1,stop:()=>Ms(e.id,t)},onfronted:()=>Cg(e.id,t),onclosed:async()=>{if(Vn.delete(e.id),ts(e.id),Vc.delete(e.id))return;const y=await t.store.tables.findOne(e.id);if(!y)return;const k=y.windowGeometry??{x:60,y:60,w:720,h:360,z:1,minimized:!1,maximized:!1};await t.store.tables.patch(e.id,{windowGeometry:{...k,closed:!0},updatedAt:Date.now()})},onstatuschange:y=>{y.status==="minimized"?P():(y.status==="normalized"||y.status==="maximized")&&S(),y.status==="maximized"?Q.enter():Q.exit(),Ms(e.id,t)}});Vn.set(e.id,W),Kc(e.id,()=>W.front?.(void 0,!1));const Z=document.getElementById(r),de=Z?.querySelector(".jsPanel-controlbar");de&&de.prepend(B),dl(e)&&Z?.classList.add("eda-refreshable");const we=Z?.querySelector(".jsPanel-titlebar");we&&(we.tabIndex=-1,we.style.outline="none",we.addEventListener("pointerdown",()=>we.focus()));let Te=null;const Pe=document.createElement("button");Pe.type="button",Pe.title="Table info",Pe.setAttribute("aria-label","Table info"),Pe.className="eda-info-btn",Pe.textContent="ⓘ",Pe.style.cssText="display:none;background:none;border:0;color:inherit;cursor:pointer;font-size:1rem;line-height:1;padding:0 0.3rem;",Pe.addEventListener("click",y=>{y.stopPropagation(),Te&&Um(p,Te.info??{},{source:Te.source,origin:Te.origin})}),de?.prepend(Pe);const m=y=>{Te=y??null;const k=!!(y?.info||y?.source||y?.origin);Pe.style.display=k?"inline-flex":"none"};m(e),s&&typeof W.minimize=="function"?queueMicrotask(()=>W.minimize?.()):n?.maximized&&typeof W.maximize=="function"&&queueMicrotask(()=>W.maximize?.());let x=$i(e);t.store.tables.subscribe(y=>{const k=y.find(ge=>ge.id===e.id);if(!k)return;m(k),Fs(k)!==p&&(p=Fs(k),$());const he=$i(k);he!==x&&(x=he,typeof W.setHeaderLogo=="function"&&W.setHeaderLogo(ul[he]),Z?.classList.toggle("eda-refreshable",dl(k)))});const I=W.close.bind(W);W.close=()=>(document.removeEventListener(Ii,D),I())}let $g=0;function kg(){const e=$g++;return{my:"left-top",at:"left-top",offsetX:40+e%8*30,offsetY:80+e%8*30}}async function Ms(e,t){const r=document.getElementById(`panel-${Yc(e)}`);if(!r)return;const i=Vn.get(e)?.status??"normalized";try{const s=(await t.store.tables.findOne(e))?.windowGeometry,a=ji?s?.minimized??!1:i==="minimized",c=ji?s?.maximized??!1:i==="maximized";let u=r.offsetLeft,p=r.offsetTop,w=r.offsetWidth,b=r.offsetHeight;const $=i==="minimized"||i==="maximized";if($&&!s)return;$&&s&&(u=s.x,p=s.y,w=s.w,b=s.h),u<=-9e3&&(u=s?.x??40);const D={x:u,y:p,w,h:b,z:s?.z??0,minimized:a,maximized:c};await t.store.tables.patch(e,{windowGeometry:D,updatedAt:Date.now()})}catch{}}async function Cg(e,t){try{const r=await t.store.tables.findOne(e);if(!r)return;const i=r.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...i,z:Wc()},updatedAt:Date.now()})}catch{}}async function Eg(e,t){if(!(await t.store.tables.findOne(e))?.source){const i=t.store.rows(e),n=await i.find();await i.bulkRemove(n.map(s=>s.id))}await t.store.tables.remove(e)}function Yc(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}const Sg={id:"delete-table",name:"Delete Table",type:"ui",version:"0.1.0",description:"Adds a trash button to each table window that permanently deletes the table and its rows (with confirmation).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/delete-table.ts"};function _g(e){e.ui.registerTableButton({id:"delete-table:delete",label:"Delete",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="#7f1d1d" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',tooltip:"Delete this table permanently",onClick:async(t,r)=>{const i=await t.store.tables.findOne(r.tableId);!i||!await t.ui.dialogs.confirm(i.source?`Delete the live table "${i.name}"? Its data stays on the server — only the local connection is removed.`:`Permanently delete table "${i.name}" and all its rows? This can't be undone.`,"Delete table")||(await yg(r.tableId),t.ui.dialogs.toast(`Deleted "${i.name}".`,{kind:"success",title:"Delete table"}))}})}const Tg=Object.freeze(Object.defineProperty({__proto__:null,init:_g,meta:Sg},Symbol.toStringTag,{value:"Module"}));var Ag=Object.defineProperty,Ig=Object.getOwnPropertyDescriptor,Mo=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ig(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Ag(t,r,n),n};function Pg(e,t){return(mn.instance??Rg()).open(e,t)}function Rg(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let mn=class extends Ue{constructor(){super(...arguments),this.rows=[],this.subject="",this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((r,i)=>{const n=this.rows[i],s=n.field.trim(),a=n.label.trim()||s;return{...r,field:s,label:a,hidden:n.hidden}});this.finish(t)},this.toggleAllHidden=()=>{const e=this.rows.length>0&&this.rows.every(t=>t.hidden);this.rows=this.rows.map(t=>({...t,hidden:!e}))}}connectedCallback(){super.connectedCallback(),mn.instance=this}disconnectedCallback(){super.disconnectedCallback(),mn.instance===this&&(mn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}open(e,t){return this.source=e,this.subject=t??"",this.rows=e.map(r=>({field:r.field,label:r.label,hidden:!!r.hidden})),new Promise(r=>{this.resolveFn=r,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((r,i)=>{const n=r.field.trim().toLowerCase();if(n===""){e.add(i);return}(t.get(n)??t.set(n,[]).get(n)).push(i)});for(const r of t.values())if(r.length>1)for(const i of r)e.add(i);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,r){this.rows=this.rows.map((i,n)=>n===e?{...i,[t]:r}:i)}setHidden(e,t){this.rows=this.rows.map((r,i)=>i===e?{...r,hidden:t}:r)}render(){const e=this.invalidIndices(),t=e.size;return _`
      <dialog @cancel=${this.onCancel} @keydown=${Zt}>
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
              ${this.rows.map((r,i)=>_`
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
              ${t>0?`Fix ${t} column name${t===1?"":"s"} — names must be unique and non-empty.`:pe}
            </p>
          </div>
        </form>
      </dialog>
    `}};mn.instance=null;mn.styles=[Jt,We`
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
    `];Mo([K()],mn.prototype,"rows",2);Mo([K()],mn.prototype,"subject",2);mn=Mo([nt("column-names-dialog")],mn);async function Dg(e,t,r){const i=t.origin?.url;if(!i)throw new Error(`"${t.name}" has no source URL to reload from.`);const n={api:e,fetchText:(W,Z)=>Ui(e,W,Z??`Reading ${t.name}…`,{maxBytes:null}),panel:{}},s=await r.list(n,{kind:"url",url:i});if(s.length===0)throw new Error(`Nothing to read at ${i} any more.`);const a=s.find(W=>W.name===t.name)??(s.length===1?s[0]:void 0);if(!a)throw new Error(`"${t.name}" is no longer one of the tables at ${i}.`);let c=[];const u=[];for await(const W of r.read(n,a))W.columns?.length&&(c=W.columns),u.push(...W.rows);const{columns:p,newFields:w}=Hi(t.columns,c,t.deletedColumns??[]),b=t.origin?.pks??[],$=new Set(c.map(W=>W.field)),D=t.columns.map(W=>W.field).filter(W=>!$.has(W)&&!b.includes(W)),P=(t.deletedColumns??[]).filter(W=>$.has(W)),S=e.store.rows(t.id),B=await S.find(),{data:q,merged:Q}=sc({oldRows:B.map(W=>({data:W.data})),freshRows:u,pks:b,userAddedFields:D,deletedRemoteFields:P}),X=Date.now();p.length>0&&await e.store.tables.patch(t.id,{columns:p,updatedAt:X}),await S.bulkRemove(B.map(W=>W.id));const J=q.map(W=>({id:it(),tableId:t.id,data:W,updatedAt:X}));return await S.bulkInsert(J),{rowCount:J.length,newFields:w,merged:Q}}var Og=Object.defineProperty,jg=Object.getOwnPropertyDescriptor,vt=(e,t,r,i)=>{for(var n=i>1?void 0:i?jg(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Og(t,r,n),n};const zg="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",Lg="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",Fg='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',yl=[{label:"Northwind — sample database (JSON dump)",url:zg,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:Lg,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],Mg={id:"import-data",name:"Import Data",type:"importer",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/import-data.ts"};function Bg(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:Fg,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>Ug(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:r})=>Ng(t,r)})}async function Ng(e,t){const r=await e.store.tables.findOne(t);if(r?.origin?.url)try{const i=await Xc(r.origin.type);if(!i)throw new Error(`No importer is installed that can read a "${r.origin.type}" source.`);const n=await Dg(e,r,i),s=[];n.newFields.length>0&&s.push(`${n.newFields.length} new column${n.newFields.length===1?"":"s"}`),!n.merged&&n.rowCount>0&&s.push("rows replaced (no primary key to match on)"),e.ui.dialogs.toast(`Refreshed "${r.name}" (${n.rowCount.toLocaleString()} rows)${s.length?` — ${s.join(", ")}`:""}.`,{kind:n.newFields.length>0?"warning":"success",title:"Refresh"})}catch(i){e.ui.dialogs.toast(`Couldn't refresh "${r.name}": ${i.message}`,{kind:"error",title:"Refresh"})}}async function Ug(e,t="auto"){const i=await(Qe.instance??Yg()).open({presetKind:t,async listDatabases(S){const B=bn(S);return To(q=>e.backend.fetch(q),B.base)},async listTables(){const S=e.workspaceId();return(await e.store.tables.find()).filter(B=>B.workspaceId===S&&!B.source).map(B=>({id:B.id,name:B.name})).sort((B,q)=>B.name.localeCompare(q.name))}});if(!i)return;const{url:n,file:s,kind:a,dbChosen:c,editColumns:u,maxRows:p,mode:w,panel:b,target:$}=i,D=s?.name??n,P=u?(S,B)=>Pg(S,B):void 0;typeof b.separator=="string"&&b.separator;try{const S=await Xc(a);if(S){const B=a==="json"?await Hg(e,n,s,p,w):null;if(B?.isDump&&await e.ui.dialogs.confirm(`"${D}" is a workspace dump, not a plain table. Restore it — tables, window layout, views and filters? Choose Cancel to import only its tables as data.`,"Restore workspace")){await Eo(e,B.text,D,{maxRows:p,editColumns:P,...s?{}:{originUrl:n}});return}const q=s?s.name:ur(n),Q=B?{kind:"text",text:B.text,name:q}:s?{kind:"file",file:s}:{kind:"url",url:n},X=await rc(e,S,Q,{mode:w,target:$,maxRows:p,panel:b,...B&&!s?{origin:{type:S.id,url:n}}:{},...P?{editColumns:J=>P(J)}:{}});S.ownToasts||qg(e,X,D);return}if(w==="reference"&&!s){a==="datasette"?await Gg(e,n):await Qc(e,n,a);return}await Oo(e,n,{skipTablePicker:c,maxRows:p,editColumns:P})}catch(S){e.ui.dialogs.toast(`Could not import ${D}: ${S.message}`,{kind:"error",title:"Import"})}}async function Hg(e,t,r,i,n){if(n==="reference")return null;const s=r?await r.text():await Ui(e,t,`Reading ${ur(t)}…`,i!=null?{maxBytes:null}:{});try{return{text:s,isDump:Co(JSON.parse(s))}}catch{return{text:s,isDump:!1}}}async function Xc(e){const{registries:t}=await fe();return t.importers.find(r=>r.id===e&&r.supports?.kernel===!0)}function qg(e,t,r){if(t.cancelled&&t.landed.length===0)return;const i=t.landed.reduce((a,c)=>a+c.rowCount,0),n=t.landed.length===1?`"${t.landed[0].tableName}"`:`${t.landed.length} tables from ${r}`;if(t.landed.length>0){const a=t.failed.length>0?` — ${t.failed.length} failed`:"";e.ui.dialogs.toast(`Imported ${n} (${i.toLocaleString()} rows)${a}.`,{kind:t.failed.length>0?"warning":"success",title:"Import"});return}const s=t.failed.map(a=>`${a.name}: ${a.error}`).join("; ");e.ui.dialogs.toast(`Could not import ${r}${s?` — ${s}`:""}.`,{kind:"error",title:"Import"})}function Wg(e){const t=JSON.parse(e),r=i=>Array.isArray(i)&&i.every(n=>n!=null&&typeof n=="object"&&!Array.isArray(n));if(r(t))return t;if(t&&typeof t=="object"){const i=t;for(const n of["rows","records","data"])if(r(i[n]))return i[n];for(const n of Object.values(i))if(r(n))return n}return[]}function Kg(e){const t=Wg(e).slice(0,50),r=n=>typeof n=="number"?"number":typeof n=="boolean"?"boolean":"string",i=new Map;for(const n of t)for(const[s,a]of Object.entries(n))!i.has(s)&&a!=null?i.set(s,r(a)):i.has(s)||i.set(s,"string");return[...i.entries()].map(([n,s])=>({field:n,label:n,type:s}))}function Vg(e,t,r){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(r)}.json?_size=max`}async function Gg(e,t){const r=bn(t),i=c=>e.backend.fetch(c),n=[];if(r.db&&r.table)n.push({db:r.db,table:r.table});else if(r.db)for(const c of await Pi(i,r.base,r.db))c.hidden||n.push({db:c.db,table:c.table});else for(const c of await To(i,r.base))for(const u of await Pi(i,r.base,c))u.hidden||n.push({db:u.db,table:u.table});if(n.length===0)throw new Error("No tables found to reference at that URL.");let s=0;const a=[];for(const c of n)try{await Qc(e,Vg(r.base,c.db,c.table),"json",{nameHint:`${c.db}/${c.table}`,silent:!0}),s++}catch(u){a.push(`${c.table}: ${u.message}`)}e.ui.dialogs.toast(`Referenced ${s} table${s===1?"":"s"}${a.length?` — ${a.length} failed`:""}.`,{kind:a.length?"warning":"success",title:"Reference"})}async function Qc(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("No active workspace.");const s=i.nameHint??ur(t),a=await Ui(e,t,`Reading ${s}…`,{maxBytes:null}),c=r==="csv"?hr(a).columns:Kg(a);if(c.length===0)throw new Error("No columns found in the referenced data.");const u=new Set((await e.store.tables.find()).filter(b=>b.workspaceId===n).map(b=>b.name.toLowerCase()));let p=s;for(let b=2;u.has(p.toLowerCase());b++)p=`${s}-${b}`;const w={id:it(),workspaceId:n,name:p,code:Tt(p),columns:c,view:"table",source:{type:"url",config:{url:t,format:r}},updatedAt:Date.now()};await e.store.tables.insert(w),i.silent||e.ui.dialogs.toast(`Referenced ${p} — live, read-only.`,{kind:"success",title:"Reference"})}function Yg(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function Xg(e){try{const t=new URL(e),r=t.hostname.toLowerCase(),i=[...t.searchParams.keys()].some(s=>s.startsWith("_")),n=r.includes("datasette")||i;return!i&&/\.(csv|tsv|tab)$/i.test(t.pathname)?"csv":!i&&/\.json$/i.test(t.pathname)?"json":n?"datasette":"json"}catch{return"json"}}function wl(e,t){if(t!=="datasette"||!e)return!1;try{const r=bn(e);return!r.db&&!r.table}catch{return!1}}function Qg(e){return/\.(csv|tsv|tab)$/i.test(e)?"csv":"json"}let Qe=class extends Ue{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.targetKind="new",this.targetTableId="",this.tables=[],this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.panelEl=null,this.mountedPanel="",this.panelGeneration=0,this.formats=[],this.acceptAttr=".txt",this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t&&!this.file)return;const r=this.resolvedKind,i=this.maxRows,n=this.editColumns&&this.mode==="copy",s=this.panelValue(),a=this.supportsTarget?this.target:{kind:"new"},c=this.file?"copy":this.mode;if(this.file){this.finish({url:"",file:this.file,kind:r,editColumns:n,maxRows:i,mode:c,panel:s,target:a});return}const u=r==="datasette"&&!!this.selectedDb&&wl(t,r),p=u?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:p,kind:r,dbChosen:u,editColumns:n,maxRows:i,mode:c,panel:s,target:a})}}get supportsTarget(){return this.formats.find(e=>e.id===this.resolvedKind)?.kernel===!0}get target(){return this.mode==="reference"||this.targetKind==="new"||!this.targetTableId?{kind:"new"}:{kind:this.targetKind,tableId:this.targetTableId}}get resolvedKind(){return this.kind!=="auto"?this.kind:this.file?Qg(this.file.name):Xg(this.url.trim())}get maxRows(){const e=Math.floor(Number(this.maxRowsInput));return Number.isFinite(e)&&e>0?e:void 0}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),Qe.instance=this}disconnectedCallback(){super.disconnectedCallback(),Qe.instance===this&&(Qe.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}updated(){const e=this.shadowRoot?.querySelector(".panel-slot");if(!e){this.panelEl=null,this.mountedPanel="";return}const t=this.activePanelTag,r=t?`${t}#${this.panelGeneration}`:"";if(r===this.mountedPanel||(e.replaceChildren(),this.panelEl=null,this.mountedPanel=r,!t))return;const i=document.createElement(t);i.addEventListener("change",()=>this.requestUpdate()),e.appendChild(i),this.panelEl=i}get activePanelTag(){return this.formats.find(e=>e.id===this.resolvedKind)?.panel}get activeLabel(){return this.formats.find(e=>e.id===this.resolvedKind)?.label??this.resolvedKind}panelValue(){const e=this.panelEl?.value;return e&&typeof e=="object"?e:{}}async loadFormats(){const{registries:e}=await fe(),t=[...e.importers].sort((n,s)=>(n.order??Number.MAX_SAFE_INTEGER)-(s.order??Number.MAX_SAFE_INTEGER)).map(n=>({id:n.id,label:n.label,panel:n.panel,kernel:n.supports?.kernel})),r=t.some(n=>n.id==="datasette")?t:[...t,{id:"datasette",label:"Datasette (table or instance)"}];this.formats=r;const i=new Set([".txt"]);for(const n of e.importers)for(const s of n.accept??[])i.add(s);this.acceptAttr=[...i].join(",")}open(e){this.targetKind="new",this.targetTableId="",this.tables=[],e?.listTables?.().then(r=>{this.tables=r}),this.url="",this.kind=e?.presetKind??"auto",this.presetIdx=-1,this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.panelGeneration+=1,this.resetDbList(),this.listDatabases=e?.listDatabases??null;const t=this.loadFormats();return new Promise(r=>{this.resolveFn=r,t.then(()=>this.updateComplete).then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const r=yl[t];r&&(this.url=r.url,this.kind=r.kind)}onFileChange(e){const r=e.target.files?.[0]??null;this.file=r,r&&(this.url="",this.presetIdx=-1,this.resetDbList())}renderDbPicker(){return!this.listDatabases||!wl(this.url.trim(),this.resolvedKind)?pe:_`
      <label>
        Database
        <div class="row db-row">
          <select
            .value=${this.selectedDb}
            ?disabled=${!this.dbList||this.dbList.length===0}
            @change=${e=>{this.selectedDb=e.target.value}}
          >
            ${this.dbList?_`
                  <option value="" ?selected=${this.selectedDb===""}>
                    — all databases (choose tables next) —
                  </option>
                  ${this.dbList.map(e=>_`<option value=${e} ?selected=${e===this.selectedDb}>${e}</option>`)}
                `:_`<option value="">— not loaded —</option>`}
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
      ${this.dbError?_`<p class="hint error">${this.dbError}</p>`:pe}
    `}renderTarget(){if(!this.supportsTarget||this.mode==="reference")return pe;const e=this.targetKind!=="new";return _`
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
          ${e?_`<select
                data-testid="import-target-table"
                .value=${this.targetTableId}
                @change=${t=>{this.targetTableId=t.target.value}}
              >
                ${this.tables.length===0?_`<option value="">— no tables yet —</option>`:this.tables.map(t=>_`<option value=${t.id} ?selected=${t.id===this.targetTableId}>
                          ${t.name}
                        </option>`)}
              </select>`:pe}
        </div>
      </label>
      ${e?_`<p class="hint">
            The table keeps its own columns. Values map onto them the way the format requires — a
            CSV by column position, so its header names need not match.
          </p>`:pe}
    `}renderPluginBlock(){const e=this.renderDbPicker();return!!!this.activePanelTag&&e===pe?pe:_`
      <fieldset class="block">
        <legend>${this.activeLabel} options</legend>
        <div class="panel-slot"></div>
        ${e}
      </fieldset>
    `}render(){return _`
      <dialog @cancel=${this.onCancel} @keydown=${Zt}>
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
                ${this.formats.map(e=>_`<option value=${e.id} ?selected=${this.kind===e.id}>${e.label}</option>`)}
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
                  ${yl.map((e,t)=>_`<option value=${String(t)} ?selected=${t===this.presetIdx}>
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
              ${this.file?_`<p class="hint">
                    Importing <strong>${this.file.name}</strong> as
                    ${this.resolvedKind.toUpperCase()}.
                  </p>`:pe}

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
              ${this.file?_`<p class="hint">Uploaded files can only be imported as a Copy.</p>`:pe}
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
              ${this.mode==="reference"?_`<p class="hint">
                    A Reference keeps the source's own schema, so there is nothing to edit.
                  </p>`:pe}

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
      ${pe}
    `}};Qe.instance=null;Qe.styles=[Jt,We`
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
    `];vt([K()],Qe.prototype,"url",2);vt([K()],Qe.prototype,"kind",2);vt([K()],Qe.prototype,"presetIdx",2);vt([K()],Qe.prototype,"dbList",2);vt([K()],Qe.prototype,"dbLoading",2);vt([K()],Qe.prototype,"dbError",2);vt([K()],Qe.prototype,"selectedDb",2);vt([K()],Qe.prototype,"editColumns",2);vt([K()],Qe.prototype,"file",2);vt([K()],Qe.prototype,"maxRowsInput",2);vt([K()],Qe.prototype,"mode",2);vt([K()],Qe.prototype,"targetKind",2);vt([K()],Qe.prototype,"targetTableId",2);vt([K()],Qe.prototype,"tables",2);vt([K()],Qe.prototype,"formats",2);vt([K()],Qe.prototype,"acceptAttr",2);Qe=vt([nt("import-dialog")],Qe);const Jg=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return Qe},init:Bg,meta:Mg},Symbol.toStringTag,{value:"Module"})),Zg={id:"auto-sync",name:"Auto Sync",type:"sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-sync.ts"},eb=6e4;let vl=null,ro=!1;const Bs=new Map;function tb(e){vl===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(vl=setInterval(()=>{Jc(e)},eb)))}async function Jc(e){if(ro)return;const t=e.workspaceId();if(!t)return;const r=await Dc(e);if(r)try{await nb(e,r,t)}catch(i){console.warn("[auto-sync]",i)}}async function nb(e,t,r){const i=await Gi(e),n=await Oc(e,r),s=await fetch(`${t}/sync/${encodeURIComponent(r)}`);if(s.status===404){await xl(e,t,r,i,null);return}if(!s.ok)return;const a=Yi(s.headers.get("ETag")),c=await s.text();if(ol(i)===ol(c)){a&&a!==n&&await Qn(e,r,a);return}if(a&&a===n){await xl(e,t,r,i,n);return}if(!(a&&Bs.get(r)===a)){ro=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${r}". Pull and replace your local copy?`,"auto-sync")){const p=JSON.parse(c),w=await jc(e,r,p);a&&await Qn(e,r,a),Bs.delete(r),e.ui.dialogs.toast(`Pulled ${w} table${w===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else a&&Bs.set(r,a)}finally{ro=!1}}}async function xl(e,t,r,i,n){const s={"Content-Type":"application/json"};n&&(s["If-Match"]=`"${n}"`);const a=await fetch(`${t}/sync/${encodeURIComponent(r)}`,{method:"PUT",headers:s,body:i});if(a.ok){const c=Yi(a.headers.get("ETag"));c&&await Qn(e,r,c);return}if(a.status===412){const c=await a.json().catch(()=>({}));c.currentEtag&&await Qn(e,r,c.currentEtag)}}const Zc=Object.freeze(Object.defineProperty({__proto__:null,load:tb,meta:Zg,tick:Jc},Symbol.toStringTag,{value:"Module"}));var rb=Object.defineProperty,ib=Object.getOwnPropertyDescriptor,gr=(e,t,r,i)=>{for(var n=i>1?void 0:i?ib(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&rb(t,r,n),n};function io(e,t){(Nt.instance??sb()).open(e,t)}function sb(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function Ns(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let Nt=class extends Ue{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.mode==="template"?this.saveTemplate():this.mode==="instance"?this.saveInstance():this.close()}}connectedCallback(){super.connectedCallback(),Nt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Nt.instance===this&&(Nt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}async open(e,t){if(this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),t?.editTemplateId){const r=this.templates.find(i=>i.id===t.editTemplateId);r&&this.editTemplate(r)}else if(t?.editInstanceId){const r=this.instances.find(i=>i.id===t.editInstanceId);r&&await this.editInstance(r)}await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await fe(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(r=>r.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((r,i)=>r.name.localeCompare(i.name))}async openInstance(e){await(await fe()).store.viewInstances.patch(e,{open:!0,updatedAt:Date.now()}),this.close()}async editInstance(e){const r=await(await fe()).store.viewTemplates.findOne(e.templateId),i=r?rl(r.headerHtml,r.rowHtml,r.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:r?.name??"template",name:e.name,tokens:i,mapping:{...e.mapping},limit:e.limit??0,readonly:e.readonly??!1},this.mode="instance"}async deleteInstance(e){await(await fe()).store.viewInstances.remove(e),await this.refresh()}async copyInstance(e){const t=await fe(),r=this.columns.filter(n=>!n.hidden).map(n=>n.field),i={...e,id:Ns(),name:`${e.name} copy`,visibleColumns:r,open:!1,windowGeometry:void 0,updatedAt:Date.now()};await t.store.viewInstances.insert(i),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async deleteTemplate(e){const t=await fe();await t.api.ui.dialogs.confirm(`Delete the template "${e.name}"? Views already created from it keep working.`,"Delete template")&&(await t.store.viewTemplates.remove(e.id),document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh())}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await fe();if(e.id){const r=this.templates.find(i=>i.id===e.id)?.builtin;await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,...r?{builtin:!1}:{},updatedAt:Date.now()})}else await t.store.viewTemplates.insert({id:Ns(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()});document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh(),this.mode="list"}useTemplate(e){const t=rl(e.headerHtml,e.rowHtml,e.footerHtml),r={};for(const i of t)r[i]=this.autoMap(i);this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:r,limit:0,readonly:!1},this.mode="instance"}firstColumn(e){const t=this.columns.find(e);return t?t.field:""}autoMap(e){const t=e.toLowerCase(),r=this.columns.find(b=>b.field.toLowerCase()===t||(b.label??"").toLowerCase()===t);if(r)return r.field;const i=/^check(\d+)$/i.exec(e);if(i){const b=Number(i[1])-1;return this.columns.filter(D=>D.type==="boolean")[b]?.field??""}if(["done","complete","completed","checked","check","read","active","enabled","starred","flag","ok"].includes(t))return this.firstColumn(b=>b.type==="boolean");const s=this.table?.labelColumn;if(s&&(t==="title"||t==="name"||t==="label"))return s;if(["date","datetime","time","created","updated","modified","timestamp","day","when"].includes(t))return this.firstColumn(b=>b.type==="date"||b.type==="datetime");const c=["url","link","href","website","homepage","uri","site","web"];if(c.includes(t)){const b=this.firstColumn($=>$.renderer==="link");return b||this.firstColumn($=>{const D=$.field.toLowerCase(),P=($.label??"").toLowerCase();return c.some(S=>D.includes(S)||P.includes(S))})}const u=b=>$=>{const D=$.field.toLowerCase(),P=($.label??"").toLowerCase();return b.some(S=>D.includes(S)||P.includes(S))},p=["image","img","photo","picture","pic","thumbnail","thumb","avatar","cover","poster","logo","icon"];if(p.includes(t)){const b=this.firstColumn(D=>D.renderer==="image");if(b)return b;const $=this.firstColumn(u(p));return $||this.firstColumn(u(["url","src","href","link"]))}if(["email","mail","e-mail"].includes(t))return this.firstColumn(u(["mail"]));if(["phone","tel","telephone","mobile","cell","cellphone"].includes(t))return this.firstColumn(u(["phone","tel","mobile","cell"]));const w=["description","desc","notes","note","body","text","summary","about","comment","comments","details","detail","remarks"];if(w.includes(t)){const b=this.firstColumn(S=>{if(S.type!=="string")return!1;const B=S.field.toLowerCase(),q=(S.label??"").toLowerCase();return w.some(Q=>B.includes(Q)||q.includes(Q))});if(b)return b;const $=this.columns.filter(S=>S.type==="string"),D=$[0];if(!D)return"";let P=D;for(const S of $)(S.max??0)>(P.max??0)&&(P=S);return P.field}return""}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await fe();if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},limit:e.limit>0?e.limit:void 0,readonly:e.readonly,updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.mode="list";return}const r=this.columns.filter(n=>!n.hidden).map(n=>n.field),i={id:Ns(),workspaceId:t.workspaceId,tableId:this.tableId,tableName:this.table.name,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:r,mapping:{...e.mapping},updatedAt:Date.now(),...e.limit>0?{limit:e.limit}:{},...e.readonly?{readonly:!0}:{}};await t.store.viewInstances.insert(i),await this.openInstance(i.id)}renderList(){return _`
      <div class="section">
        <h3>Views of “${this.table?.name??""}”</h3>
        <ul class="list">
          ${this.instances.map(e=>_`<li>
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
          ${this.templates.map(e=>_`<li>
                <span class="name">${e.name}</span>
                ${e.builtin?_`<span class="badge">built-in</span>`:pe}
                <button type="button" class="mini" @click=${()=>this.useTemplate(e)}>Use</button>
                <button type="button" class="mini" @click=${()=>this.editTemplate(e)}>Edit</button>
                <button type="button" class="mini" @click=${()=>this.copyTemplate(e)}>Copy</button>
                <button
                  type="button"
                  class="mini danger"
                  title="Delete this template"
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
    `}renderTemplate(){const e=this.tDraft,t=r=>i=>{this.tDraft={...e,[r]:i.target.value}};return _`
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
    `}renderInstance(){const e=this.iDraft;return _`
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
        ${e.tokens.length===0?_`<p class="hint">
              This template has no <code>$TOKEN</code> placeholders — it will show the read-only
              table with your current sort, filter and visible columns.
            </p>`:e.tokens.map(t=>_`<div class="map-row">
                  <code>$${t}</code>
                  <select
                    @change=${r=>this.iDraft={...e,mapping:{...e.mapping,[t]:r.target.value}}}
                  >
                    <option value="" ?selected=${!e.mapping[t]}>— none —</option>
                    ${this.columns.map(r=>_`<option value=${r.field} ?selected=${e.mapping[t]===r.field}>
                          ${r.label||r.field}
                        </option>`)}
                  </select>
                </div>`)}
      </div>
      <p class="hint">
        ${e.id?_`Editing name and column mapping. The snapshotted sort, filters and visible columns
            are kept.`:_`The view snapshots this table's current sort, filters and visible columns.`}
      </p>
    `}render(){const e=this.mode==="template"?this.tDraft?.id?"Edit template":"New template":this.mode==="instance"?`${this.iDraft?.id?"Edit":"New"} view — ${this.iDraft?.templateName??""}`:"Views",t=this.mode==="template"?_`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
              Back
            </button>
            <button type="submit" class="primary">Save</button>`:this.mode==="instance"?_`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
                Back
              </button>
              <button type="submit" class="primary">
                ${this.iDraft?.id?"Save":"Create view"}
              </button>`:_`<button type="submit" class="ghost">Close</button>`;return _`
      <dialog @cancel=${this.close} @keydown=${Zt}>
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
    `}};Nt.instance=null;Nt.styles=[Jt,We`
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
    `];gr([K()],Nt.prototype,"mode",2);gr([K()],Nt.prototype,"instances",2);gr([K()],Nt.prototype,"templates",2);gr([K()],Nt.prototype,"tDraft",2);gr([K()],Nt.prototype,"iDraft",2);Nt=gr([nt("views-dialog")],Nt);const ob={id:"views",name:"Views",type:"ui",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/views.ts"},ab="grid_view",lb={slug:"rss",name:"RSS Feed",header:'<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>','<div style="display:flex;gap:16px;margin-top:8px;">$input.CHECK1$input.CHECK2</div>',"</div>"].join(""),footer:"</div>"},cb={slug:"todo-list",name:"Todo List",header:'<div style="display:flex;flex-direction:column;gap:6px;padding:12px;max-width:720px;margin:0 auto;">',row:['<div style="display:flex;align-items:center;gap:10px;border:1px solid #e5e7eb;border-radius:8px;padding:8px 12px;background:#ffffff;">',"$input.DONE",'<span style="flex:1;font-weight:500;color:#111827;">$TITLE</span>','<span style="color:#6b7280;font-size:0.8rem;white-space:nowrap;">$DUE</span>',"</div>"].join(""),footer:"</div>"},db={slug:"gallery",name:"Gallery",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;padding:12px;">',row:['<figure style="margin:0;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<img src="$IMAGE" alt="$TITLE" loading="lazy" style="width:100%;height:150px;object-fit:cover;display:block;background:#f3f4f6;" />','<figcaption style="padding:6px 8px;font-size:0.85rem;color:#374151;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">$TITLE</figcaption>',"</figure>"].join(""),footer:"</div>"},ub={slug:"contact-cards",name:"Contact Cards",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:10px;padding:12px 14px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<div style="font-weight:600;color:#111827;font-size:0.95rem;">$NAME</div>','<a href="mailto:$EMAIL" style="color:#2563eb;text-decoration:none;font-size:0.85rem;word-break:break-all;">$EMAIL</a>','<div style="color:#6b7280;font-size:0.85rem;margin-top:2px;">$PHONE</div>',"</div>"].join(""),footer:"</div>"},hb=[lb,cb,db,ub];function fb(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:ab,tooltip:"Views -- display this table through a template",onClick:(t,{tableId:r})=>io(r)})}async function pb(e){await gb(e)}function mb(e){let t=5381;const r=`${e.header} ${e.row} ${e.footer}`;for(let i=0;i<r.length;i++)t=(t<<5)+t+r.charCodeAt(i)|0;return(t>>>0).toString(36)}async function gb(e){const t=e.workspaceId();if(!t)return;const r=await e.store.viewTemplates.find({workspaceId:t});for(const i of hb)await bb(e,t,i,r)}async function bb(e,t,r,i){const n=`views:seeded:${r.slug}:${t}`,s=`views:sig:${r.slug}:${t}`,a=mb(r),c=i.find(p=>p.builtin&&p.name===r.name);if(c){(await e.store.settings.findOne(s))?.value!==a&&(await e.store.viewTemplates.patch(c.id,{headerHtml:r.header,rowHtml:r.row,footerHtml:r.footer,updatedAt:Date.now()}),await e.store.settings.upsert({key:s,value:a})),await e.store.settings.upsert({key:n,value:!0});return}(await e.store.settings.findOne(n))?.value||(await e.store.viewTemplates.insert({id:yb(),workspaceId:t,name:r.name,headerHtml:r.header,rowHtml:r.row,footerHtml:r.footer,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({key:n,value:!0}),await e.store.settings.upsert({key:s,value:a}))}function yb(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const wb=Object.freeze(Object.defineProperty({__proto__:null,init:fb,load:pb,meta:ob},Symbol.toStringTag,{value:"Module"})),vb={id:"settings",name:"Settings",type:"ui",fixed:!0,version:"0.1.0",description:"Header gear button that opens the tabbed Settings dialog; imports dropped secrets.txt.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/settings.ts"};function xb(e){e.ui.registerHeaderButton({id:"settings:open",label:"Settings",icon:"settings",tooltip:"Workspace and plugin settings",variant:"secondary",onClick:()=>e.ui.openSettings()}),e.ui.registerDropHandler(async(t,r)=>{const n=Array.from(t.dataTransfer?.files??[]).find(c=>c.name.toLowerCase()==="secrets.txt");if(!n)return!1;const s=await n.text(),a=Object.keys(Ni(s)).length;return Bi().trim().length>0&&!await r.ui.dialogs.confirm(`Replace your current secrets with ${a} secret${a===1?"":"s"} from "${n.name}"?`,"Import secrets")||(Ul(s),r.ui.dialogs.toast(`Imported ${a} secret${a===1?"":"s"}.`,{kind:"success",title:"Secrets"})),!0})}const $b=Object.freeze(Object.defineProperty({__proto__:null,init:xb,meta:vb},Symbol.toStringTag,{value:"Module"})),kb=[$b,Hp,nh,Th,jh,Lf,Jf,rp,ah,xp,cp,Op,Bp,Gp,Zp,rm,am,um,wm,km,Im,Fm,Tg,Jg,Zc,wb];function Cb(e){if(!e.meta)throw new Error("Built-in plugin is missing meta");return e.meta}const ed=kb.map(e=>{const t=Cb(e);return{id:t.id,meta:t,module:e}}),Eb=ed;function so(e){return`builtin:${e}`}async function Sb(e){const t=[];for(const r of ed)if(!await _b(e,r)){t.push(r);try{await r.module.init?.(e)}catch(i){e.events.emit("plugin:error",{url:r.id,phase:"init",error:i})}}return async()=>{for(const r of t)try{await r.module.load?.(e)}catch(i){e.events.emit("plugin:error",{url:r.id,phase:"load",error:i})}}}async function _b(e,t){return t.meta.fixed?!1:Vt==="all-optional"?!0:(await e.store.plugins.findOne(so(t.id)))?.enabled===!1}function td(e){return e.filter(t=>t.status!=="minimized")}function Tb(e,t,r){if(e<=0)return[];const i=Math.ceil(Math.sqrt(e)),n=Math.ceil(e/i),s=(t.w-r*(i+1))/i,a=(t.h-r*(n+1))/n;return Array.from({length:e},(c,u)=>{const p=u%i,w=Math.floor(u/i);return{x:t.x+r+p*(s+r),y:t.y+r+w*(a+r),w:s,h:a}})}function br(){const e=M.getPanels;return typeof e!="function"?[]:Array.from(e.call(M)??[])}function Ab(){for(const e of br())e.close?.()}function Ib(){for(const e of br())e.minimize?.()}function Pb(){for(const e of br())e.normalize?.()}function Rb(){for(const e of br())e.maximize?.()}function nd(){const e=document.getElementById("easydb-panels"),t=e?.clientWidth??window.innerWidth,r=e?.clientHeight??window.innerHeight,i=Gc()?.snapshot(),n=i?.scale&&i.scale>0?i.scale:1,s=i?.x??0,a=i?.y??0;return{x:-s/n,y:-a/n,w:t/n,h:r/n}}function rd(e,t,r,i,n){e.style.left=`${Math.round(t)}px`,e.style.top=`${Math.round(r)}px`,e.style.width=`${Math.round(i)}px`,e.style.height=`${Math.round(n)}px`}function Db(){const e=td(br()).reverse();if(e.length===0)return;const t=nd(),r=32,i=Math.min(680,Math.max(320,t.w*.6)),n=Math.min(480,Math.max(240,t.h*.6));e.forEach((s,a)=>{s.normalize?.(),rd(s,t.x+24+a*r,t.y+24+a*r,i,n)})}function Ob(){const e=td(br()).reverse();if(e.length===0)return;const r=Tb(e.length,nd(),8);e.forEach((i,n)=>{i.normalize?.();const s=r[n];s&&rd(i,s.x,s.y,s.w,s.h)})}function jb(e){const t=[{id:"windows:minimize-all",title:"Minimize all windows",icon:"remove",run:Ib},{id:"windows:restore-all",title:"Restore all windows",icon:"crop_square",run:Pb},{id:"windows:maximize-all",title:"Maximize all windows",icon:"fullscreen",run:Rb},{id:"windows:cascade",title:"Cascade windows",icon:"view_agenda",run:Db},{id:"windows:tile",title:"Tile windows",icon:"grid_view",run:Ob},{id:"windows:close-all",title:"Close all windows",icon:"close",run:Ab}];for(const n of t)e.ui.registerCommand({id:n.id,title:n.title,group:"Windows",icon:n.icon,run:n.run});const r="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md",i="https://github.com/cawoodm/easydbaccess/tree/main/docs";e.ui.registerCommand({id:"app:search",title:"Search all tables",group:"App",icon:"search",keywords:["find","global search","filter"],run:()=>{document.dispatchEvent(new CustomEvent("easydb:focus-search"))}}),e.ui.registerCommand({id:"app:plugins",title:"Plugins",group:"App",icon:"extension",keywords:["plugin manager","install","extensions"],run:n=>n.ui.openPluginManager()}),e.ui.registerCommand({id:"app:changelog",title:"Changelog",group:"App",icon:"history",keywords:["releases","version","whats new"],run:()=>{window.open(r,"_blank","noopener")}}),e.ui.registerCommand({id:"app:docs",title:"Documentation",group:"App",icon:"menu_book",keywords:["docs","help","guide","manual"],run:()=>{window.open(i,"_blank","noopener")}})}async function zb(e){if(Vt==="url-plugins"||Vt==="all-optional")return async()=>{};const t=e.workspaceId();if(!t)return async()=>{};const i=(await e.store.workspaces.findOne(t))?.pluginUrls??[],n=[];for(const s of i)try{const a=await e.store.plugins.findOne(s);if(a&&a.enabled===!1)continue;let c=a?.cachedBody??"";if(c)Lb(e,s,c);else{try{c=await id(s)}catch(w){await e.store.plugins.upsert({url:s,enabled:a?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${w.message}`}),e.events.emit("plugin:error",{url:s,phase:"fetch",error:w});continue}await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),cachedBody:c})}const u=new Blob([c],{type:"text/javascript"}),p=URL.createObjectURL(u);try{const w=await import(p);await w.init?.(e),n.push({url:s,mod:w})}finally{setTimeout(()=>URL.revokeObjectURL(p),5e3)}}catch(a){await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),lastError:`init: ${a.message}`}),e.events.emit("plugin:error",{url:s,phase:"init",error:a})}return async()=>{for(const{url:s,mod:a}of n)try{await a.load?.(e)}catch(c){await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),lastError:`load: ${c.message}`}),e.events.emit("plugin:error",{url:s,phase:"load",error:c})}}}async function id(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const r=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(r))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return r}function Lb(e,t,r){return(async()=>{try{const i=await id(t);if(i===r)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:i})}catch{}})()}let Us=null;function fe(){return Us||(Us=Fb()),Us}async function Fb(){const e=await pu(),t=bu(e),r=wu(),i=Su(),n=new Map;t.tables.subscribe(S=>{n.clear();for(const B of S)n.set(B.id,B)});const s={...t.tables,insert:S=>(n.set(S.id,S),t.tables.insert(S)),upsert:S=>(n.set(S.id,S),t.tables.upsert(S))};let a=null;const c={get backend(){if(!a)throw new Error("[host] row-source ctx used before app init completed");return a.backend},events:r,settings:t.settings,workspaceId:()=>b},u=yu({base:{...t,tables:s},providers:i.rowSources,tableById:S=>n.get(S),ctx:c}),p=Mb(),w=await u.workspaces.find();let b;if(p){const S=Ub(p),B=w.find(q=>q.id===S||q.name===p);B?b=B.id:b=(await u.workspaces.insert({id:S,name:p,createdAt:Date.now(),pluginUrls:[]})).id}else{const S=Bb(),B=S?w.find(q=>q.id===S):void 0;B?b=B.id:w.length>0?b=w[0].id:b=(await u.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}Nb(b);const $=Pu({store:u,events:r,registries:i,workspaceId:()=>b});a=$,jb($),r.on("import:after",({source:S,tableId:B,rowCount:q})=>{S!=="datasette"&&$.store.tables.findOne(B).then(Q=>{$.ui.dialogs.toast(`Imported ${q} row${q===1?"":"s"} into "${Q?.name??B}".`,{kind:"success",title:S.toUpperCase()+" import"})})}),r.on("plugin:error",({url:S,phase:B,error:q})=>{$.ui.dialogs.toast(`[${B}] ${q?.message??String(q)}`,{kind:"error",title:`Plugin: ${S}`})});const D=await Sb($),P=await zb($);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:b}),await D(),await P(),Vt==="all-optional"?$.ui.dialogs.toast("Safe mode is ON: only fixed built-ins (Settings, core rendering) loaded. All other built-in plugins and URL-installed plugins are disabled for this session only — nothing was changed. Disable the culprit below, then reload without ?safemode.",{kind:"warning",title:"Safe mode"}):Vt==="url-plugins"&&$.ui.dialogs.toast("Safe mode (URL plugins) is ON: URL-installed plugins were not loaded this session. Built-in plugins are unaffected. Reload without ?safemode1 to restore them.",{kind:"warning",title:"Safe mode"}),Vt!=="off"&&$.ui.openPluginManager()}),{store:u,events:r,workspaceId:b,registries:i,api:$}}function Mb(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const sd="eda:lastWorkspaceId";function Bb(){try{return globalThis.localStorage?.getItem(sd)??null}catch{return null}}function Nb(e){try{globalThis.localStorage?.setItem(sd,e)}catch{}}function Ub(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var Hb=Object.defineProperty,qb=Object.getOwnPropertyDescriptor,ns=(e,t,r,i)=>{for(var n=i>1?void 0:i?qb(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Hb(t,r,n),n};let dr=class extends Ue{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let r;try{r=hr(this.text)}catch(a){this.errorMsg=`Couldn't parse the CSV: ${a.message}`;return}if(r.columns.length===0||r.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const i=await fe(),n=crypto.randomUUID();await i.store.tables.insert({id:n,workspaceId:i.workspaceId,name:t,code:Tt(t),columns:r.columns,view:"table",updatedAt:Date.now()});const s=r.rows.map(a=>({id:crypto.randomUUID(),tableId:n,data:a,updatedAt:Date.now()}));await i.store.rows(n).bulkInsert(s),i.api.ui.dialogs.toast(`Imported ${r.rows.length} row${r.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return _`
      <dialog @cancel=${this.close} @keydown=${Zt}>
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
            ${this.errorMsg?_`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};dr.styles=[Jt,We`
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
    `];ns([K()],dr.prototype,"name",2);ns([K()],dr.prototype,"text",2);ns([K()],dr.prototype,"errorMsg",2);dr=ns([nt("csv-paste-dialog")],dr);var Wb=Object.defineProperty,Kb=Object.getOwnPropertyDescriptor,Bo=(e,t,r,i)=>{for(var n=i>1?void 0:i?Kb(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Wb(t,r,n),n};const Vb=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return the value this column should display.
  return row.name ?? '';
}
`;let gn=class extends Ue{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),gn.instance=this}disconnectedCallback(){super.disconnectedCallback(),gn.instance===this&&(gn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:Vb,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(r=>{this.resolver=r})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return _`
      <dialog @cancel=${this.onCancel} @keydown=${Zt}>
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
    `}};gn.instance=null;gn.styles=[Jt,We`
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
    `];Bo([K()],gn.prototype,"text",2);Bo([K()],gn.prototype,"columnLabel",2);gn=Bo([nt("script-editor-dialog")],gn);function Gb(e){const t={...e.orig??{},field:e.field.trim(),label:e.label.trim()||e.field.trim(),type:e.type};return e.renderer?t.renderer=e.renderer:delete t.renderer,e.script?t.script=e.script:delete t.script,e.max!=null&&e.max>0?t.max=e.max:delete t.max,e.unique?t.unique=!0:delete t.unique,e.notnull?t.notnull=!0:delete t.notnull,e.hidden?t.hidden=!0:delete t.hidden,t}var Yb=Object.defineProperty,Xb=Object.getOwnPropertyDescriptor,Wt=(e,t,r,i)=>{for(var n=i>1?void 0:i?Xb(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Yb(t,r,n),n};const Qb=["string","number","boolean","date","datetime"];let _t=class extends Ue{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.columns=[],this.errorMsg="",this.noticeMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}async open(e,t){this.errorMsg="",this.noticeMsg=t?.notice??"";const r=await fe();if(this.rendererOptions=[...r.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.rendererSubUnsub=r.events.on("app:ready",()=>{this.rendererOptions=[...r.registries.cellRenderers.keys()].sort()}),e){const i=await fe(),n=await i.store.tables.findOne(e);if(!n)return;this.mode="edit",this.editTableId=e,this.name=n.name,this.tableTitle=n.title??"",this.columns=n.columns.map(a=>({field:a.field,label:a.label,type:a.type,renderer:a.renderer,script:a.script,max:a.max,unique:a.unique,notnull:a.notnull,hidden:a.hidden,origField:a.field,orig:a}));const s=await i.store.rows(e).find();this.previewRows=s.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,r)=>r!==e)}moveColumn(e,t){const r=e+t;if(r<0||r>=this.columns.length)return;const i=[...this.columns],[n]=i.splice(e,1);i.splice(r,0,n),this.columns=i}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,r){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientY<i.top+i.height/2;this.dropTargetIdx=t,this.dropEdge=n?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const r=this.dragSrcIdx,i=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,r===null||r===t||!i)return;const n=[...this.columns],[s]=n.splice(r,1);let a=t+(r<t?-1:0);i==="after"&&(a+=1),n.splice(a,0,s),this.columns=n}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((r,i)=>i===e?{...r,...t}:r)}async editScript(e){const t=gn.instance;if(!t)return;const r=this.columns[e];if(!r)return;const i=await t.open(r.script??"",r.label||r.field);i!==null&&this.patchColumn(e,{script:i.trim()?i:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}const r=await fe(),i=(await r.store.tables.find()).filter(p=>p.workspaceId===r.workspaceId),n=t.toLowerCase(),s=i.find(p=>p.name.toLowerCase()===n&&p.id!==this.editTableId);if(s){this.errorMsg=`A table named "${s.name}" already exists — names must be unique.`;return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const a=new Set;for(const p of this.columns){const w=p.field.trim();if(!w){this.errorMsg="Column field names cannot be empty.";return}if(a.has(w)){this.errorMsg=`Duplicate column field: ${w}`;return}a.add(w)}const c=this.tableTitle.trim(),u=this.columns.map(Gb);if(this.mode==="edit"&&this.editTableId){const p=this.editTableId,w=await r.store.tables.findOne(p),b=new Map((w?.columns??[]).map(W=>[W.field,W])),$=u.filter(W=>{const Z=b.get(W.field);return W.unique&&!Z?.unique||W.notnull&&!Z?.notnull||W.max&&W.max>0&&W.max!==Z?.max});if($.length>0){const W=await r.store.rows(p).find(),Z=ey($,W);if(Z.length>0){this.errorMsg=`Cannot save: ${Z.length} existing ${Z.length===1?"row violates":"rows violate"} the new constraints.
${Z.slice(0,5).join(`
`)}${Z.length>5?`
…and ${Z.length-5} more.`:""}`;return}}const D=new Set(this.columns.map(W=>W.origField).filter(W=>!!W)),P=new Set(u.map(W=>W.field)),S=(w?.columns??[]).map(W=>W.field).filter(W=>!D.has(W)),B=w?.deletedColumns??[],q=[...new Set([...B,...S])].filter(W=>!P.has(W)),Q={name:t,title:c,columns:u,updatedAt:Date.now()};(q.length>0||B.length>0)&&(Q.deletedColumns=q);const X=w?.name;await r.store.tables.patch(p,Q);const J=S.filter(W=>!P.has(W));if(J.length>0){const W=await r.store.rows(p).find();for(const Z of W){let de=!1;const we={...Z.data};for(const Te of J)Te in we&&(delete we[Te],de=!0);de&&await r.store.rows(p).patch(Z.id,{data:we,updatedAt:Date.now()})}}if(X!==void 0&&X!==t){const W=(await r.store.viewInstances.find()).filter(Z=>Z.tableId===p);for(const Z of W)Z.tableName!==t&&await r.store.viewInstances.patch(Z.id,{tableName:t,updatedAt:Date.now()})}}else await r.store.tables.insert({id:it(),workspaceId:r.workspaceId,name:t,title:c,code:Tt(t),columns:u,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return _`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=new Map;for(const r of this.columns){if(!r.unique)continue;const i=new Set,n=new Set;for(const s of this.previewRows){const a=s.data[r.field];a==null||a===""||(i.has(a)&&n.add(a),i.add(a))}e.set(r.field,n)}const t=this.columns.filter(r=>!r.hidden);return _`
      <div class="preview">
        <h3>
          Live preview — first ${this.previewRows.length}
          row${this.previewRows.length===1?"":"s"}
        </h3>
        <table>
          <thead>
            <tr>
              ${t.map(r=>_`<th title=${r.field}>${r.label||r.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.previewRows.map(r=>_`
                <tr>
                  ${t.map(i=>{const n=r.data[i.field],s=Zb(i,n,e.get(i.field));return _`<td class=${s?"violation":""} title=${s??""}>
                      ${Jb(n)}
                    </td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}renameDetected(){return this.mode==="edit"&&this.columns.some(e=>e.origField&&e.origField!==e.field.trim())}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return _`
      <dialog @cancel=${this.close} @keydown=${Zt}>
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
            ${this.noticeMsg?_`<div class="notice">${this.noticeMsg}</div>`:""}
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
              ${this.columns.map((r,i)=>{const n=this.dragSrcIdx===i,s=this.dropTargetIdx===i,a=s&&this.dropEdge==="before"?" drop-before":s&&this.dropEdge==="after"?" drop-after":"";return _`
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
                      ${Qb.map(c=>_`<option value=${c} ?selected=${c===r.type}>${c}</option>`)}
                    </select>
                    <select
                      title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                      .value=${r.renderer??""}
                      @change=${c=>{const u=c.target.value;this.patchColumn(i,{renderer:u||void 0})}}
                    >
                      <option value="" ?selected=${!r.renderer}>— none —</option>
                      ${this.rendererOptions.map(c=>_`<option value=${c} ?selected=${c===r.renderer}>${c}</option>`)}
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

            ${this.renameDetected()?_`<div class="hint">
                  Renamed fields will appear empty for existing rows — the row data isn't migrated
                  automatically.
                </div>`:""}
            ${this.errorMsg?_`<div class="error">${this.errorMsg}</div>`:""}
            ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};_t.styles=[qt,Jt,We`
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
    `];Wt([K()],_t.prototype,"mode",2);Wt([K()],_t.prototype,"editTableId",2);Wt([K()],_t.prototype,"name",2);Wt([K()],_t.prototype,"tableTitle",2);Wt([K()],_t.prototype,"columns",2);Wt([K()],_t.prototype,"errorMsg",2);Wt([K()],_t.prototype,"noticeMsg",2);Wt([K()],_t.prototype,"dragSrcIdx",2);Wt([K()],_t.prototype,"dropTargetIdx",2);Wt([K()],_t.prototype,"dropEdge",2);Wt([K()],_t.prototype,"previewRows",2);Wt([K()],_t.prototype,"rendererOptions",2);_t=Wt([nt("new-table-dialog")],_t);function Jb(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function Zb(e,t,r){const i=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&i)return`${e.label}: empty`;if(i)return null;if(e.type==="number"&&typeof t!="number"){const n=Number(t);if(!Number.isFinite(n))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!i){const n=new Date(String(t));if(Number.isNaN(n.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&r?.has(t)?`${e.label}: duplicate`:null}function ey(e,t){const r=[];for(const i of e)if(i.notnull&&t.forEach((n,s)=>{const a=n.data[i.field];(a==null||typeof a=="string"&&a.trim()==="")&&r.push(`Row ${s+1}: ${i.label} is empty.`)}),i.max!=null&&i.max>0&&t.forEach((n,s)=>{const a=n.data[i.field];typeof a=="string"&&a.length>i.max?r.push(`Row ${s+1}: ${i.label} length ${a.length} > max ${i.max}.`):typeof a=="number"&&a>i.max&&r.push(`Row ${s+1}: ${i.label} value ${a} > max ${i.max}.`)}),i.unique){const n=new Map;t.forEach((s,a)=>{const c=s.data[i.field];c==null||c===""||(n.has(c)?r.push(`Row ${a+1}: ${i.label} duplicates row ${n.get(c)+1} ("${String(c)}").`):n.set(c,a))})}return r}var ty=Object.defineProperty,ny=Object.getOwnPropertyDescriptor,At=(e,t,r,i)=>{for(var n=i>1?void 0:i?ny(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&ty(t,r,n),n};const ry='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',iy=_`<span class="mi sm">extension</span>`,$l="plugin:catalogUrls";function wi(){return new URL("/easydbaccess/plugins/catalog.json",location.origin).toString()}const sy=[["installed","Installed"],["built-in","Built-in"],["fixed","Fixed"]],od=[["importer","Importer"],["exporter","Exporter"],["cell-renderer","Cell renderer"],["sync","Sync"],["source","Source"],["ui","UI"]],oy=new Map(od),ay={off:"Filter by status — click: only enabled → only disabled → off",on:"Showing only enabled plugins — click to show only disabled",not:"Showing only disabled plugins — click to clear"};let wt=class extends Ue{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.catalogUrls=[wi()],this.activeCatalogUrl=wi(),this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}async open(){const e=await fe(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const r=await e.store.plugins.find();this.records=new Map(r.map(s=>[s.url,s]));const i=await e.store.settings.findOne($l),n=Array.isArray(i?.value)?i.value.filter(s=>typeof s=="string"):[];this.catalogUrls=n.length>0?n:[wi()],this.activeCatalogUrl=this.catalogUrls[0]??wi(),this.addUrl="",this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(this.activeCatalogUrl),this.refreshServerRegistry()}async refreshCatalog(e){try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json(),i=Array.isArray(r.plugins)?r.plugins:[];this.catalog=i.map(n=>({...n,absUrl:new URL(n.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const r=(await(await fe()).store.settings.findOne("server-sync:url"))?.value;if(typeof r!="string"||r.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const n=`${r.replace(/\/+$/,"")}/plugins/registry`;try{const s=await fetch(n,{cache:"no-store"});if(!s.ok)throw new Error(`HTTP ${s.status}`);const a=await s.json(),c=Array.isArray(a.plugins)?a.plugins:[];this.serverCatalog=c.map(u=>({...u,absUrl:new URL(u.url,n).toString()})),this.serverCatalogError=null}catch(s){this.serverCatalog=[],this.serverCatalogError=s.message}}async reloadCatalogSource(){const e=this.activeCatalogUrl.trim();e&&(this.catalogUrls.includes(e)||(this.catalogUrls=[...this.catalogUrls,e],await(await fe()).store.settings.upsert({key:$l,value:this.catalogUrls})),await this.refreshCatalog(e))}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await fe()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const r=await fe();await r.store.workspaces.patch(r.workspaceId,{pluginUrls:this.urls}),await r.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const r=await fe(),i=this.records.get(e);await r.store.plugins.upsert({...i??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...i,url:e,enabled:t,lastFetched:i?.lastFetched??0}))}async removePlugin(e){const t=await fe();this.urls=this.urls.filter(r=>r!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const r=await fe(),i=so(e),n=this.records.get(i);await r.store.plugins.upsert({...n??{url:i,lastFetched:0},url:i,enabled:t,lastFetched:n?.lastFetched??0}),this.records=new Map(this.records.set(i,{...n,url:i,enabled:t,lastFetched:n?.lastFetched??0}))}async onRowToggle(e,t){if(e.categories.has("built-in"))await this.toggleBuiltin(e.id,t);else if(e.url)await this.toggleEnabled(e.url,t);else return;(await fe()).api.ui.dialogs.toast("Reload to apply this change.",{kind:"info",title:"Plugin updated"})}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await fe();try{const r=await fetch(e.absUrl,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const i=await r.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:i});const n=new Blob([i],{type:"text/javascript"}),s=URL.createObjectURL(n);try{const c=await import(s);await c.init?.(t.api),await c.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(s),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const a=await t.store.plugins.find();this.records=new Map(a.map(c=>[c.url,c])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(r){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${r.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${r.message}`,{kind:"error",title:"Plugin error"})}finally{const r=new Set(this.installing);r.delete(e.absUrl),this.installing=r}}renderTri(e,t,r,i="",n){const s=n?n[t??"off"]:t==="on"?`Showing only ${e} plugins — click to exclude`:t==="not"?`Hiding ${e} plugins — click to clear`:`Filter by ${e} — click: show only → exclude → off`;return _`
      <button
        type="button"
        class=${`tri${i?` ${i}`:""}${t?` ${t}`:""}`}
        title=${s}
        aria-pressed=${t!==void 0}
        @click=${r}
      >
        <span class="tri-mark">${t==="on"?"✓":t==="not"?"≠":""}</span>${e}
      </button>
    `}cycleState(e,t){const r=e.get(t),i=new Map(e);return r===void 0?i.set(t,"on"):r==="on"?i.set(t,"not"):i.delete(t),i}cycleFilter(e){this.filterStates=this.cycleState(this.filterStates,e)}cycleTypeFilter(e){this.typeFilters=this.cycleState(this.typeFilters,e)}cycleStatusFilter(){this.statusFilter=this.statusFilter===void 0?"on":this.statusFilter==="on"?"not":void 0}buildRows(){const e=new Map,t=new Map;for(const{id:r,meta:i}of Eb){const n=i.fixed?!0:this.records.get(so(r))?.enabled!==!1,s=!i.fixed&&Vt==="all-optional",a=i.fixed?["built-in","fixed","installed"]:["built-in","installed"];e.set(`builtin:${r}`,{id:r,name:i.name,...i.type?{type:i.type}:{},...i.description?{meta:i.description}:{meta:"Built-in plugin"},...i.author?{author:i.author}:{},...i.icon?{icon:i.icon}:{},...i.repo?{repo:i.repo}:{},categories:new Set(a),enabled:n,status:n&&!s?"enabled":"disabled",fixed:!!i.fixed,...s?{skipped:!0}:{}})}for(const r of[...this.catalog,...this.serverCatalog]){const i=this.urls.includes(r.absUrl),n=this.records.get(r.absUrl),s=i?["available","installed"]:["available"],a=e.get(r.id),c=n?.enabled!==!1,u=i&&Vt!=="off";e.set(r.id,{id:r.id,name:r.name,url:r.absUrl,...r.type?{type:r.type}:{},...r.icon?{icon:r.icon}:{},...r.repo?{repo:r.repo}:{},...r.author?{author:r.author}:{},meta:r.description??r.absUrl,categories:a?new Set([...a.categories,...s]):new Set(s),enabled:c,...i?{status:c&&!u?"enabled":"disabled"}:{},...u?{skipped:!0}:{},installing:this.installing.has(r.absUrl)}),t.set(r.absUrl,r.id)}for(const r of this.urls){const i=t.get(r);if(i){e.get(i).categories.add("installed");continue}const n=this.records.get(r),s=n?.lastFetched?new Date(n.lastFetched).toLocaleString():"never",a=n?.enabled!==!1;e.set(`url:${r}`,{id:r,name:r,urlOnly:!0,url:r,meta:n?.lastError??`Last fetched: ${s}`,metaIsError:!!n?.lastError,categories:new Set(["installed"]),enabled:a,status:a&&Vt==="off"?"enabled":"disabled",...Vt!=="off"?{skipped:!0}:{}})}return[...e.values()]}get filteredRows(){const e=this.buildRows(),t=this.search.trim().toLowerCase(),r=[],i=[];for(const[u,p]of this.filterStates)(p==="on"?r:i).push(u);const n=[],s=[];for(const[u,p]of this.typeFilters)(p==="on"?n:s).push(u);const a=this.statusFilter==="on"?"enabled":this.statusFilter==="not"?"disabled":void 0,c=e.filter(u=>!(r.length&&!r.some(p=>u.categories.has(p))||i.some(p=>u.categories.has(p))||n.length&&!(u.type&&n.includes(u.type))||u.type&&s.includes(u.type)||a&&u.status!==a));return t?c.filter(u=>[u.id,u.name,u.type,u.meta,u.author].some(p=>p?.toLowerCase().includes(t))):c}renderRow(e){const t=e.categories.has("built-in")||e.categories.has("installed"),r=!!e.url&&e.categories.has("installed"),i=!!e.url&&!e.categories.has("installed");return _`
      <div
        class=${`row${e.categories.has("built-in")?" builtin":""}${e.metaIsError?" error":""}${e.skipped?" skipped":""}`}
      >
        <span class="row-icon">${e.icon?or(e.icon):iy}</span>
        <div class="row-main">
          <div class=${`row-title${e.urlOnly?" mono":""}`}>
            ${e.name}${e.id!==e.name?_`<span class="row-id">${e.id}</span>`:""}${e.type?_`<span class="row-type" title="Plugin type"
                  >${oy.get(e.type)??e.type}</span
                >`:""}${e.skipped?_`<span
                  class="row-skipped"
                  title="Safe mode kept this plugin from loading this session — your saved setting is unchanged"
                  >skipped</span
                >`:""}
          </div>
          ${e.meta?_`<div class=${`meta${e.metaIsError?" err":""}`}>${e.meta}</div>`:""}
        </div>
        <div class="row-author">${e.author??""}</div>
        ${e.repo?_`<a
              class="row-repo"
              href=${e.repo}
              target="_blank"
              rel="noopener noreferrer"
              title="View source on GitHub"
              >${or(ry)}</a
            >`:_`<span></span>`}
        ${e.fixed?_`<span class="mi sm lock-icon" title="Always on — cannot be disabled">lock</span>`:t?_`<label
                class="switch"
                title=${e.skipped?"Your saved setting — safe mode is what stopped this plugin loading now":"Enable / disable"}
              >
                <input
                  type="checkbox"
                  .checked=${e.enabled}
                  @change=${n=>this.onRowToggle(e,n.target.checked)}
                />
                <span class="slider"></span>
              </label>`:_`<span></span>`}
        ${i?_`<button
              type="button"
              class="install"
              ?disabled=${e.installing}
              @click=${()=>this.installFromCatalog({absUrl:e.url,name:e.name})}
            >
              <span class="mi sm">${e.installing?"hourglass_empty":"download"}</span>
              ${e.installing?"Installing…":"Install"}
            </button>`:r?_`<button
                type="button"
                class="uninstall"
                @click=${()=>this.removePlugin(e.url)}
              >
                <span class="mi sm">delete</span> Uninstall
              </button>`:_`<span></span>`}
      </div>
    `}render(){const e=this.filteredRows;return _`
      <dialog @cancel=${this.close} @keydown=${Zt}>
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
            ${Vt!=="off"?_`<p class="safemode">
                  <strong>Safe mode is on.</strong>
                  ${Vt==="all-optional"?_`<code>?safemode</code> skipped every URL plugin and every optional
                        built-in for this session.`:_`<code>?safemode1</code> skipped every URL plugin for this session.`}
                  Plugins marked <span class="row-skipped">skipped</span> are not running. The
                  toggles below still show — and change — your saved settings, which safe mode never
                  touches. Reload without the flag to run them again.
                </p>`:""}

            <div class="filters">
              <div class="chips">
                ${sy.map(([t,r])=>this.renderTri(r,this.filterStates.get(t),()=>this.cycleFilter(t)))}
                ${this.renderTri("Enabled",this.statusFilter,()=>this.cycleStatusFilter(),"status",ay)}
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
              ${od.map(([t,r])=>this.renderTri(r,this.typeFilters.get(t),()=>this.cycleTypeFilter(t)))}
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
                ${this.catalogUrls.map(t=>_`<option value=${t}></option>`)}
              </datalist>
              <button type="button" class="ghost" @click=${this.reloadCatalogSource}>
                <span class="mi sm">refresh</span> Reload
              </button>
            </div>
            ${this.catalogError?_`<div class="meta err">Catalog unavailable: ${this.catalogError}</div>`:""}
            ${this.serverCatalogError?_`<div class="meta err">
                  Server registry unavailable: ${this.serverCatalogError}
                </div>`:""}

            <div class="plugin-list">
              ${e.length===0?_`<p class="hint">No plugins match the current filters/search.</p>`:""}
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
    `}};wt.styles=[qt,Jt,We`
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
    `];At([K()],wt.prototype,"urls",2);At([K()],wt.prototype,"records",2);At([K()],wt.prototype,"addUrl",2);At([K()],wt.prototype,"catalog",2);At([K()],wt.prototype,"catalogError",2);At([K()],wt.prototype,"serverCatalog",2);At([K()],wt.prototype,"serverCatalogError",2);At([K()],wt.prototype,"installing",2);At([K()],wt.prototype,"catalogUrls",2);At([K()],wt.prototype,"activeCatalogUrl",2);At([K()],wt.prototype,"search",2);At([K()],wt.prototype,"filterStates",2);At([K()],wt.prototype,"typeFilters",2);At([K()],wt.prototype,"statusFilter",2);wt=At([nt("plugin-manager-dialog")],wt);var ly=Object.defineProperty,cy=Object.getOwnPropertyDescriptor,Ln=(e,t,r,i)=>{for(var n=i>1?void 0:i?cy(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&ly(t,r,n),n};const Ir="__general__";let Qt=class extends Ue{constructor(){super(...arguments),this.tabs=[],this.active=Ir,this.values={},this.placements={},this.secretsText="",this.workspaceTitle="",this.secretError="",this.dialogEl=null,this.attemptClose=e=>{const t=this.invalidSecrets();if(t.length>0){e?.preventDefault();const r=t[0];this.active=r.tab.id,this.secretError=`“${r.field.label}” must be empty or a \${secret:name} reference. Move the value into the secrets store (General tab) and reference it, so the raw secret is never saved or synced.`;return}this.secretError="",this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.attemptClose()}}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&en(this.dialogEl,e)}async open(){const e=await fe(),t=[...e.registries.settings];this.tabs=t.map(([s,a])=>({id:s,name:a.name,fields:a.fields}));const r=await e.store.workspaces.findOne(e.workspaceId);this.workspaceTitle=r?.title??"";const i={},n={};for(const s of this.tabs)for(const a of s.fields){const c=`${s.id}:${a.key}`,u=await e.api.settings.placement(s.id,a.key);u==="user"?(i[c]=go(c),n[c]="user"):u==="workspace"?(i[c]=(await e.store.settings.findOne(c))?.value,n[c]="workspace"):(i[c]=a.default,n[c]=a.scope??"workspace")}this.values=i,this.placements=n,this.secretsText=Bi(),this.active=Ir,await this.updateComplete,this.dialogEl?.showModal()}static rawSecret(e){return typeof e=="string"&&e!==""&&!e.includes("${secret:")}invalidSecrets(){const e=[];for(const t of this.tabs)for(const r of t.fields)r.type==="secret"&&Qt.rawSecret(this.values[`${t.id}:${r.key}`])&&e.push({tab:t,field:r});return e}async setValue(e,t,r){const i=`${e.id}:${t.key}`;this.values={...this.values,[i]:r},this.secretError&&this.invalidSecrets().length===0&&(this.secretError=""),await(await fe()).api.settings.set(e.id,t.key,r,this.placements[i])}async toggleScope(e,t,r){const i=`${e.id}:${t.key}`,n=r?"user":"workspace";this.placements={...this.placements,[i]:n},await(await fe()).api.settings.set(e.id,t.key,this.values[i],n)}onSecretsInput(e){this.secretsText=e.target.value,Ul(this.secretsText)}downloadSecrets(){const e=new Blob([this.secretsText],{type:"text/plain;charset=utf-8"}),t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download="secrets.txt",r.click(),URL.revokeObjectURL(t)}async setWorkspaceTitle(e){this.workspaceTitle=e;const t=await fe();await t.store.workspaces.patch(t.workspaceId,{title:e.trim()||void 0})}renderControl(e,t){const r=`${e.id}:${t.key}`,i=this.values[r];switch(t.type){case"text":return _`<textarea
          .value=${String(i??"")}
          @change=${n=>this.setValue(e,t,n.target.value)}
        ></textarea>`;case"number":return _`<input
          type="number"
          .value=${i==null?"":String(i)}
          @change=${n=>{const s=n.target.value;this.setValue(e,t,s===""?void 0:Number(s))}}
        />`;case"boolean":return _`<label class="scope"
          ><input
            type="checkbox"
            .checked=${!!i}
            @change=${n=>this.setValue(e,t,n.target.checked)}
          />
          enabled</label
        >`;case"date":return _`<input
          type="date"
          .value=${String(i??"")}
          @change=${n=>this.setValue(e,t,n.target.value)}
        />`;case"secret":return this.renderSecretControl(e,t,i);case"option":return _`<div class="radios">
          ${(t.options??[]).map(n=>_`<label
              ><input
                type="radio"
                name=${r}
                .checked=${i===n}
                @change=${()=>this.setValue(e,t,n)}
              />${n}</label
            >`)}
        </div>`;case"selection":{const n=Array.isArray(i)?i:[];return _`<div class="checks">
          ${(t.options??[]).map(s=>_`<label
              ><input
                type="checkbox"
                .checked=${n.includes(s)}
                @change=${a=>{const u=a.target.checked?[...n,s]:n.filter(p=>p!==s);this.setValue(e,t,u)}}
              />${s}</label
            >`)}
        </div>`}case"string":default:return _`<input
          type="text"
          .value=${String(i??"")}
          @change=${n=>this.setValue(e,t,n.target.value)}
        />`}}renderSecretControl(e,t,r){const i=Object.keys(Ni(this.secretsText)),n=Qt.rawSecret(r);return _`<div class="secret-row">
      <input
        type="text"
        class=${n?"invalid":""}
        placeholder="value or \${secret:name}"
        .value=${String(r??"")}
        @change=${s=>this.setValue(e,t,s.target.value)}
      />
      ${i.length>0?_`<select
            title="Insert a secret reference"
            @change=${s=>{const a=s.target.value;a&&this.setValue(e,t,`\${secret:${a}}`),s.target.value=""}}
          >
            <option value="">🔑 secret…</option>
            ${i.map(s=>_`<option value=${s}>${s}</option>`)}
          </select>`:pe}
    </div>`}renderField(e,t){const r=`${e.id}:${t.key}`;return _`<div class="field">
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
      ${t.description?_`<p class="desc">${t.description}</p>`:pe}
    </div>`}renderGeneral(){return _`
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
    `}renderPanel(){if(this.active===Ir)return this.renderGeneral();const e=this.tabs.find(t=>t.id===this.active);return e?_`
      <h3>${e.name}</h3>
      ${e.fields.length===0?_`<p class="empty">This plugin registered no settings.</p>`:e.fields.map(t=>this.renderField(e,t))}
    `:pe}render(){return _`
      <dialog @cancel=${this.attemptClose} @keydown=${Zt}>
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
          ${this.secretError?_`<div class="secret-error" role="alert">${this.secretError}</div>`:pe}
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
                ${this.tabs.map(e=>_`<button
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
    `}};Qt.styles=[qt,Jt,We`
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
    `];Ln([K()],Qt.prototype,"tabs",2);Ln([K()],Qt.prototype,"active",2);Ln([K()],Qt.prototype,"values",2);Ln([K()],Qt.prototype,"placements",2);Ln([K()],Qt.prototype,"secretsText",2);Ln([K()],Qt.prototype,"workspaceTitle",2);Ln([K()],Qt.prototype,"secretError",2);Qt=Ln([nt("settings-dialog")],Qt);var dy=Object.defineProperty,uy=Object.getOwnPropertyDescriptor,tn=(e,t,r,i)=>{for(var n=i>1?void 0:i?uy(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&dy(t,r,n),n};let Pt=class extends Ue{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.tableColumns=[],this.rows=[],this.showColsMenu=!1,this.allRows=[],this.searchQuery="",this.globalQuery="",this.onSearch=e=>{const t=e.detail;t.tableId===this.viewInstanceId&&(this.searchQuery=t.query??"",this.recompute())},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??"",this.recompute()},this.onInputChange=async e=>{const t=e.target;if(!(t instanceof HTMLInputElement)||!t.classList.contains("eda-input")||!this.instance||this.instance.readonly===!0)return;const r=t.getAttribute("data-eda-row"),i=t.getAttribute("data-eda-field"),n=t.getAttribute("data-eda-type")??"string";if(!r||!i)return;const s=this.allRows.find(u=>u.id===r);if(!s)return;let a;if(n==="boolean")a=t.checked;else if(n==="number"){const u=Number(t.value);a=t.value.trim()===""?null:Number.isNaN(u)?t.value:u}else a=t.value;await(await fe()).store.rows(this.instance.tableId).patch(r,{data:{...s.data,[i]:a},updatedAt:Date.now()})}}get templateOn(){return this.instance?.templateEnabled!==!1}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:table-search",this.onSearch),document.addEventListener("easydb:global-search",this.onGlobalSearch),await this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:table-search",this.onSearch),document.removeEventListener("easydb:global-search",this.onGlobalSearch),this.rowsUnsub?.(),this.instUnsub?.()}async updated(e){e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}async reload(){this.rowsUnsub?.(),this.loaded=!1,await this.load()}async load(){if(!this.viewInstanceId)return;this.rowsUnsub?.(),this.instUnsub?.();const e=await fe(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const r=await e.store.tables.findOne(t.tableId);this.tableColumns=r?.columns??[],r&&t.tableName!==r.name&&e.store.viewInstances.patch(t.id,{tableName:r.name});const i=new Map(this.tableColumns.map(s=>[s.field,s]));this.columns=t.visibleColumns.map(s=>i.get(s)??{field:s,label:s,type:"string"}),this.instUnsub=e.store.viewInstances.subscribe(s=>{const a=s.find(c=>c.id===this.viewInstanceId);if(a){if(a.tableId!==this.instance?.tableId){this.instance=a,this.reload();return}this.instance=a,this.recompute()}});const n=e.store.rows(t.tableId);this.rowsUnsub=n.subscribe(s=>{this.allRows=s,this.recompute()}),this.allRows=await n.find(),this.recompute(),this.loaded=!0}recompute(){if(!this.instance)return;let e=Tc(this.allRows,this.instance);const t=this.searchQuery.trim(),r=this.globalQuery.trim();t&&(e=Ai(e,t,this.tableColumns)),r&&(e=Ai(e,r,this.tableColumns));const i=this.instance.limit??0;i>0&&e.length>i&&(e=e.slice(0,i)),this.rows=e,this.templateOn&&cc(this.viewInstanceId,e.length,this.allRows.length)}async setSortColumn(e){if(!this.instance)return;await(await fe()).store.viewInstances.patch(this.instance.id,{sortColumn:e||void 0,updatedAt:Date.now()}),this.instance={...this.instance,sortColumn:e||void 0},this.recompute()}async toggleSortDir(){if(!this.instance?.sortColumn)return;const e=!(this.instance.sortAsc??!0);await(await fe()).store.viewInstances.patch(this.instance.id,{sortAsc:e,updatedAt:Date.now()}),this.instance={...this.instance,sortAsc:e},this.recompute()}async toggleTemplate(){if(!this.instance)return;const e=!this.templateOn;await(await fe()).store.viewInstances.patch(this.instance.id,{templateEnabled:e,updatedAt:Date.now()}),this.instance={...this.instance,templateEnabled:e},this.showColsMenu=!1}editTemplate(){!this.instance||!this.template||io(this.instance.tableId,{editTemplateId:this.template.id})}editView(){this.instance&&io(this.instance.tableId,{editInstanceId:this.instance.id})}async toggleColumn(e){if(!this.instance)return;const t=this.instance.visibleColumns,i=t.includes(e)?t.filter(s=>s!==e):[...t,e];if(i.length===0)return;await(await fe()).store.viewInstances.patch(this.instance.id,{visibleColumns:i,updatedAt:Date.now()}),this.instance={...this.instance,visibleColumns:i}}renderTable(){return this.rows.length===0?_`<div class="vw-empty">No rows.</div>`:_`
      <table class="vw-table">
        <thead>
          <tr>
            ${this.columns.map(e=>_`<th>${e.label||e.field}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map(e=>_`<tr>
                ${this.columns.map(t=>{const r=e.data[t.field];return _`<td>${r==null?"":String(r)}</td>`})}
              </tr>`)}
        </tbody>
      </table>
    `}renderTemplated(){const e=this.template;if(!e)return _`<div class="vw-empty">This view's template is missing.</div>`;if(mp(e.rowHtml)){const t=this.instance?.mapping??{},r=new Map(this.tableColumns.map(a=>[a.field,a])),i=this.instance?.readonly===!0,n=this.rows.map(a=>hp(e.rowHtml,a,t,{columns:r,readonly:i})).join(""),s=(e.headerHtml??"")+n+(e.footerHtml??"");return _`<div class="vw-root">${or(s)}</div>`}return _`<div class="vw-root">
      ${e.headerHtml?.trim()?_`<div class="vw-html">${or(e.headerHtml)}</div>`:pe}
      ${this.renderTable()}
      ${e.footerHtml?.trim()?_`<div class="vw-html">${or(e.footerHtml)}</div>`:pe}
    </div>`}renderSortBar(){if(!this.instance)return pe;const e=this.tableColumns.filter(i=>i.sortable!==!1),t=this.instance.sortColumn??"",r=this.instance.sortAsc??!0;return _`<div class="vw-sortbar">
      <span class="mi" title="Sort">sort</span>
      <select
        aria-label="Sort by"
        @change=${i=>void this.setSortColumn(i.target.value)}
      >
        <option value="" ?selected=${!t}>— unsorted —</option>
        ${e.map(i=>_`<option value=${i.field} ?selected=${t===i.field}>${i.label||i.field}</option>`)}
      </select>
      <button
        aria-label="Toggle sort direction"
        title=${r?"Ascending (click for descending)":"Descending (click for ascending)"}
        ?disabled=${!t}
        @click=${()=>void this.toggleSortDir()}
      >
        <span class="mi">${r?"arrow_upward":"arrow_downward"}</span>
      </button>
    </div>`}renderFooter(){if(!this.instance)return pe;const e=this.templateOn,t=new Set(this.instance.visibleColumns);return _`<div class="vw-footer">
      ${!e&&this.showColsMenu?_`<div class="cols-menu">
            ${this.tableColumns.map(r=>_`<label
                  ><input
                    type="checkbox"
                    .checked=${t.has(r.field)}
                    @change=${()=>void this.toggleColumn(r.field)}
                  />${r.label||r.field}</label
                >`)}
          </div>`:pe}
      ${e?pe:_`<button
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
      ${this.template?_`<button
            class="edit-template"
            aria-label="Edit template"
            title=${`Edit the "${this.template.name}" template`}
            @click=${()=>this.editTemplate()}
          >
            <span class="mi">code</span>
          </button>`:pe}
      <button
        class=${e?"":"active"}
        title=${e?"Show as a table (turn the template off)":"Show through the template"}
        aria-label="Toggle template"
        aria-pressed=${e?"false":"true"}
        @click=${()=>void this.toggleTemplate()}
      >
        <span class="mi">table_view</span>
      </button>
    </div>`}render(){if(!this.loaded)return _`<div class="vw-body scroll"><div class="vw-loading">Loading…</div></div>`;if(this.error)return _`<div class="vw-body scroll"><div class="vw-empty">${this.error}</div></div>`;const e=this.templateOn,t=e?_`<div class="vw-body scroll" @change=${this.onInputChange}>
          ${this.renderTemplated()}
        </div>`:_`<div class="vw-body grid">
          <data-table
            .tableId=${this.instance?.tableId??""}
            .viewInstanceId=${this.viewInstanceId}
          ></data-table>
        </div>`;return _`${e?this.renderSortBar():pe}${t}${this.renderFooter()}`}};Pt.styles=[qt,We`
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
    `];tn([Ht({type:String})],Pt.prototype,"viewInstanceId",2);tn([K()],Pt.prototype,"loaded",2);tn([K()],Pt.prototype,"error",2);tn([K()],Pt.prototype,"instance",2);tn([K()],Pt.prototype,"template",2);tn([K()],Pt.prototype,"columns",2);tn([K()],Pt.prototype,"tableColumns",2);tn([K()],Pt.prototype,"rows",2);tn([K()],Pt.prototype,"showColsMenu",2);tn([K()],Pt.prototype,"searchQuery",2);tn([K()],Pt.prototype,"globalQuery",2);Pt=tn([nt("view-window")],Pt);const Gt=new Map;function hy(e){const t=Gt.get(e);if(!t)return!1;const r=t.panel;return r.status==="minimized"&&r.normalize?.(),r.front?.(),!0}let kl=!1;function oo(e){e.panel.setHeaderTitle?.(e.name+dc(e.count,e.total))}function fy(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function py(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function ad(e){return`view-panel-${py(e)}`}async function my(){if(kl)return;kl=!0;const e=await fe(),t=i=>i.filter(n=>n.workspaceId===e.workspaceId&&n.open),r=t(await e.store.viewInstances.find()).sort(Oi);for(const i of r)Cl(i,e);e.store.viewInstances.subscribe(i=>{const n=new Map(t(i).map(a=>[a.id,a]));for(const a of[...Gt.keys()])n.has(a)||by(a);const s=[...n.values()].filter(a=>!Gt.has(a.id)).sort(Oi);for(const a of s)Cl(a,e)}),e.store.tables.subscribe(i=>void gy(e,i)),document.addEventListener(Ii,i=>{const n=i.detail,s=Gt.get(n.key);s&&s.el&&(s.count=n.count,s.total=n.total,oo(s))}),document.addEventListener("easydb:reload-view",i=>{const n=i.detail?.instanceId;if(!n)return;const s=Gt.get(n);s&&(async()=>{const a=await e.store.viewInstances.findOne(n);a&&(s.name=a.name,oo(s)),s.el?.reload()})()}),document.addEventListener("easydb:reload-views",()=>{for(const{el:i}of Gt.values())i?.reload()})}async function gy(e,t){const r=t.filter(a=>a.workspaceId===e.workspaceId),i=new Set(r.map(a=>a.id)),n=new Map;for(const a of r)n.has(a.name)||n.set(a.name,a);const s=await e.store.viewInstances.find();for(const a of s){if(a.workspaceId!==e.workspaceId||i.has(a.tableId)||!a.tableName)continue;const c=n.get(a.tableName);c&&await e.store.viewInstances.patch(a.id,{tableId:c.id,updatedAt:Date.now()})}}function Cl(e,t){if(Gt.has(e.id))return;const r=ad(e.id),i=e.windowGeometry,n=i?.minimized===!0,s=()=>{const q=document.createElement("view-window");return q.viewInstanceId=e.id,q.style.height="100%",q},a=n?document.createElement("div"):s();let c;const u=()=>{c&&(c.el?.remove(),c.el=null,c.count=-1,c.total=-1,oo(c))},p=()=>{if(!c||c.el)return;const q=document.getElementById(r)?.querySelector(".jsPanel-content");if(!q)return;q.replaceChildren();const Q=s();q.appendChild(Q),c.el=Q},w=i?{panelSize:`${i.w} ${i.h}`}:{contentSize:"480 520"},b=i?{my:"left-top",at:"left-top",offsetX:i.x,offsetY:i.y}:{my:"center-top",at:"center-top",offsetY:60},$=Hc(r,Gc),D=M.create({id:r,container:fy(),headerTitle:e.name,headerLogo:Mm,theme:"#0891b2",content:a,...w,position:b,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>void Hs(e.id)},resizeit:{containment:!1,stop:()=>void Hs(e.id)},onfronted:()=>void yy(e.id,t),onstatuschange:q=>{q.status==="maximized"?$.enter():$.exit(),q.status==="minimized"?u():(q.status==="normalized"||q.status==="maximized")&&p(),Hs(e.id)},onclosed:()=>{Gt.delete(e.id),ts(e.id),$.exit(),t.store.viewInstances.patch(e.id,{open:!1,updatedAt:Date.now()}).catch(()=>{})}});c={panel:D,el:n?null:a,name:e.name,count:-1,total:-1},Gt.set(e.id,c),Kc(e.id,()=>D.front?.(void 0,!1));const P=document.getElementById(r),S=document.createElement("panel-search");S.tableId=e.id,P?.querySelector(".jsPanel-controlbar")?.prepend(S);const B=P?.querySelector(".jsPanel-titlebar");B&&(B.tabIndex=-1,B.style.outline="none",B.addEventListener("pointerdown",()=>B.focus())),i?.maximized?queueMicrotask(()=>D.maximize?.()):i?.minimized&&queueMicrotask(()=>D.minimize?.())}function by(e){const t=Gt.get(e);if(t){Gt.delete(e),ts(e);try{t.panel.status!=="closed"&&t.panel.close()}catch{}}}async function yy(e,t){try{const r=await t.store.viewInstances.findOne(e);if(!r)return;const i=r.windowGeometry??{x:0,y:0,w:480,h:520,z:0,minimized:!1,maximized:!1};await t.store.viewInstances.patch(e,{windowGeometry:{...i,z:Wc()},updatedAt:Date.now()})}catch{}}async function Hs(e){const t=document.getElementById(ad(e)),r=Gt.get(e);if(!t||!r)return;const i=r.panel.status,n=i==="minimized",s=i==="maximized";try{const a=await fe(),c=(await a.store.viewInstances.findOne(e))?.windowGeometry;let u=t.offsetLeft,p=t.offsetTop,w=t.offsetWidth,b=t.offsetHeight;(n||s)&&c&&(u=c.x,p=c.y,w=c.w,b=c.h),u<=-9e3&&(u=c?.x??40);const $={x:u,y:p,w,h:b,z:c?.z??0,minimized:n,maximized:s};await a.store.viewInstances.patch(e,{windowGeometry:$,updatedAt:Date.now()})}catch{}}var wy=Object.defineProperty,vy=Object.getOwnPropertyDescriptor,yr=(e,t,r,i)=>{for(var n=i>1?void 0:i?vy(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&wy(t,r,n),n};const xy={Windows:0,Actions:1,App:2,Tables:3,Views:4};function El(e){return xy[e]??3}function $y(e){return e?e.trimStart().startsWith("<svg")?_`<span class="cmd-svg">${po(e)}</span>`:_`<span class="mi sm">${e}</span>`:_`<span class="mi sm">chevron_right</span>`}let zn=class extends Ue{constructor(){super(...arguments),this.search="",this.items=[],this.selected=0,this.api=null}async open(){const e=await fe();this.api=e.api,this.items=await this.buildItems(),this.search="",this.selected=0,await this.updateComplete,this.dialogEl&&!this.dialogEl.open&&this.dialogEl.showModal(),this.inputEl?.focus()}async buildItems(){const e=await fe(),t=e.api,r=[];for(const s of e.registries.commands)r.push({id:s.id,title:s.title,group:s.group??"Commands",...s.icon?{icon:s.icon}:{},haystack:[s.title,s.group,...s.keywords??[]].join(" ").toLowerCase(),run:()=>s.run(t)});for(const s of[...e.registries.headerButtons,...e.registries.footerButtons])r.push({id:`button:${s.id}`,title:s.label,group:"Actions",...s.icon?{icon:s.icon}:{},haystack:`${s.label} ${s.tooltip??""}`.toLowerCase(),run:()=>s.onClick(t)});const i=await t.store.tables.find({workspaceId:e.workspaceId});i.sort((s,a)=>s.name.localeCompare(a.name));for(const s of i)r.push({id:`goto:${s.id}`,title:`Go to: ${s.name}`,group:"Tables",icon:"table_chart",haystack:`${s.name} go to table`.toLowerCase(),run:()=>{gg(s.id)}});const n=await t.store.viewInstances.find({workspaceId:e.workspaceId});n.sort((s,a)=>s.name.localeCompare(a.name));for(const s of n)r.push({id:`goto-view:${s.id}`,title:`Go to view: ${s.name}`,group:"Views",icon:"view_quilt",haystack:`${s.name} go to view`.toLowerCase(),run:async()=>{await t.store.viewInstances.patch(s.id,{open:!0,updatedAt:Date.now()}),hy(s.id)}});return r.map((s,a)=>({it:s,i:a})).sort((s,a)=>El(s.it.group)-El(a.it.group)||s.i-a.i).map(({it:s})=>s)}get filtered(){const e=this.search.trim().toLowerCase();return e?this.items.filter(t=>t.haystack.includes(e)):this.items}close(){this.dialogEl?.close()}onInput(e){this.search=e.target.value,this.selected=0}onKeydown(e){const t=this.filtered;if(e.key==="ArrowDown")e.preventDefault(),this.selected=t.length?(this.selected+1)%t.length:0;else if(e.key==="ArrowUp")e.preventDefault(),this.selected=t.length?(this.selected-1+t.length)%t.length:0;else if(e.key==="Enter"){e.preventDefault();const r=t[this.selected];r&&this.execute(r)}}async execute(e){this.close();try{await e.run()}catch(t){console.error(`[command:${e.id}]`,t)}}render(){const e=this.filtered;let t="";return _`
      <dialog @keydown=${this.onKeydown} @close=${()=>this.search=""}>
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
          ${e.length===0?_`<div class="empty">No matching commands.</div>`:e.map((r,i)=>{const n=r.group!==t?(t=r.group,r.group):null;return _`
                  ${n?_`<div class="group-head">${n}</div>`:""}
                  <div
                    class=${`item${i===this.selected?" sel":""}`}
                    @mousemove=${()=>this.selected=i}
                    @click=${()=>this.execute(r)}
                  >
                    ${$y(r.icon)}
                    <span class="title">${r.title}</span>
                  </div>
                `})}
        </div>
      </dialog>
    `}};zn.styles=[qt,We`
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
    `];yr([K()],zn.prototype,"search",2);yr([K()],zn.prototype,"items",2);yr([K()],zn.prototype,"selected",2);yr([yn("dialog")],zn.prototype,"dialogEl",2);yr([yn("input")],zn.prototype,"inputEl",2);zn=yr([nt("command-palette-dialog")],zn);var ky=Object.defineProperty,Cy=Object.getOwnPropertyDescriptor,ld=(e,t,r,i)=>{for(var n=i>1?void 0:i?Cy(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&ky(t,r,n),n};let zi=class extends Ue{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await fe();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(r=>this.tables=r.filter(i=>i.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(r=>r.workspaceId===this.workspaceId),await wg(),await my()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?_``:_`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on the
      page, or click <strong>+ New Table</strong> above.
    </div>`}};zi.styles=We`
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
  `;ld([K()],zi.prototype,"tables",2);zi=ld([nt("table-list")],zi);var Ey=Object.defineProperty,Sy=Object.getOwnPropertyDescriptor,No=(e,t,r,i)=>{for(var n=i>1?void 0:i?Sy(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&Ey(t,r,n),n};let Fr=class extends Ue{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await fe();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);if(!t)return;const r=new URLSearchParams(location.search);r.set("space",t.name);const i=`${location.pathname}?${r.toString()}${location.hash}`;location.assign(i)}async addWorkspace(){const t=await(await fe()).api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const r=new URLSearchParams(location.search);r.set("space",t.trim()),location.assign(`${location.pathname}?${r.toString()}${location.hash}`)}render(){return _`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>_`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};Fr.styles=[qt,We`
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
  `];No([K()],Fr.prototype,"workspaces",2);No([K()],Fr.prototype,"current",2);Fr=No([nt("workspace-selector")],Fr);var Sl=Object.freeze,cd=Object.defineProperty,_y=Object.getOwnPropertyDescriptor,nn=(e,t,r,i)=>{for(var n=i>1?void 0:i?_y(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(i?a(t,r,n):a(n))||n);return i&&n&&cd(t,r,n),n},Ty=(e,t)=>Sl(cd(e,"raw",{value:Sl(e.slice())})),_l;function Tl(e){return e?e.trimStart().startsWith("<svg")?_`<span class="icon-svg">${po(e)}</span>`:_`<span class="mi sm">${e}</span>`:""}let Rt=class extends Ue{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.workspaceTitle="",this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId,{notice:t.detail.notice})},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onOpenSettings=()=>{this.settingsDialog?.open()},this.onOpenCommandPalette=()=>{this.commandPaletteDialog?.open()},this.onGlobalKeydown=e=>{(e.ctrlKey||e.metaKey)&&!e.altKey&&(e.key==="k"||e.key==="K")&&(e.preventDefault(),this.commandPaletteDialog?.open())},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{Il(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!Il(e))return;e.preventDefault();const t=await fe(),r=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:r,event:e});for(const i of[...t.registries.dropHandlers])try{if(await i(e,t.api))return}catch(n){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:n})}},this.runSlot=(e,t)=>{if(!this.api)return;const r=t?.currentTarget??void 0;Promise.resolve(e.onClick(this.api,{anchor:r})).catch(i=>{console.error(`[footer-button:${e.id}]`,i)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.addEventListener("easydb:open-settings",this.onOpenSettings),document.addEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.addEventListener("easydb:focus-search",this.openSearch),document.addEventListener("keydown",this.onGlobalKeydown),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.removeEventListener("easydb:open-settings",this.onOpenSettings),document.removeEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.removeEventListener("easydb:focus-search",this.openSearch),document.removeEventListener("keydown",this.onGlobalKeydown),this.workspaceUnsub?.()}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await fe();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e)),this.workspaceUnsub=e.store.workspaces.subscribe(t=>{const r=t.find(i=>i.id===e.workspaceId);this.workspaceTitle=r?.title?.trim()??"",Ay(this.workspaceTitle)})}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){if(e.variant==="secondary")return _`
        <button class="icon-btn" title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
          ${Tl(e.icon)}
        </button>
      `;const r=t==="header"||e.variant==="primary"?"primary":"slot";return _`
      <button class=${r} title=${e.tooltip??e.label} @click=${i=>this.runSlot(e,i)}>
        ${Tl(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return _(_l||(_l=Ty([`
      <header>
        <strong
          >`,`
          <a
            class="version-link"
            href="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md"
            target="_blank"
            rel="noopener"
            title="View the changelog on GitHub"
            ><span class="version">v0.0.197</span></a
          ></strong
        >
        `,`
        `,`
        <button
          class="icon-btn"
          title="Add, disable, or remove plugins"
          @click=`,`
        >
          <span class="mi">extension</span>
        </button>
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
    `])),this.workspaceTitle||"easyDBAccess",this.headerButtons.filter(e=>e.variant!=="secondary").map(e=>this.renderSlotButton(e,"header")),this.searchOpen?_`<span class="search-wrap">
              <input
                class="search"
                type="search"
                placeholder="search all tables…"
                .value=${this.searchQuery}
                @input=${this.onSearchInput}
                @blur=${this.closeSearchOnBlur}
              />
              ${this.searchQuery.length>0?_`<button
                    class="search-clear"
                    title="Clear search"
                    aria-label="Clear search"
                    @mousedown=${this.clearSearch}
                  >
                    ×
                  </button>`:""}
            </span>`:_`<button
              class="icon-btn ${this.searchQuery.trim().length>0?"active":""}"
              title=${this.searchQuery.trim().length>0?`Filtering all tables: ${this.searchQuery}`:"Search across all tables in this workspace"}
              @click=${this.openSearch}
            >
              <span class="mi">search</span>
            </button>`,()=>this.api?.ui.openPluginManager(),this.headerButtons.filter(e=>e.variant==="secondary").map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};Rt.styles=[qt,We`
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
    `];nn([yn("new-table-dialog")],Rt.prototype,"dialog",2);nn([yn("csv-paste-dialog")],Rt.prototype,"csvPasteDialog",2);nn([yn("plugin-manager-dialog")],Rt.prototype,"pluginManagerDialog",2);nn([yn("settings-dialog")],Rt.prototype,"settingsDialog",2);nn([yn("command-palette-dialog")],Rt.prototype,"commandPaletteDialog",2);nn([yn("input.search")],Rt.prototype,"searchInput",2);nn([K()],Rt.prototype,"footerButtons",2);nn([K()],Rt.prototype,"headerButtons",2);nn([K()],Rt.prototype,"searchQuery",2);nn([K()],Rt.prototype,"searchOpen",2);nn([K()],Rt.prototype,"workspaceTitle",2);Rt=nn([nt("app-shell")],Rt);const Al=document.title;function Ay(e){const t=e.trim();document.title=t?`${t} — ${Al}`:Al}function Il(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([fe(),ln(()=>Promise.resolve().then(()=>Zc),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});export{pe as A,We as a,_ as b,Zt as c,Jt as d,Ue as i,en as m,K as r,nt as t};
//# sourceMappingURL=index-CTxvL0Ke.js.map
