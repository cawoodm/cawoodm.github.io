(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(n){if(n.ep)return;n.ep=!0;const l=r(n);fetch(n.href,l)}})();const ba="modulepreload",ya=function(e){return"/easydbaccess2/"+e},Eo={},va=function(t,r,o){let n=Promise.resolve();if(r&&r.length>0){let c=function(T){return Promise.all(T.map(j=>Promise.resolve(j).then(R=>({status:"fulfilled",value:R}),R=>({status:"rejected",reason:R}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),m=f?.nonce||f?.getAttribute("nonce");n=c(r.map(T=>{if(T=ya(T),T in Eo)return;Eo[T]=!0;const j=T.endsWith(".css"),R=j?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${T}"]${R}`))return;const F=document.createElement("link");if(F.rel=j?"stylesheet":ba,j||(F.as="script"),F.crossOrigin="",F.href=T,m&&F.setAttribute("nonce",m),document.head.appendChild(F),j)return new Promise((H,Z)=>{F.addEventListener("load",H),F.addEventListener("error",()=>Z(new Error(`Unable to preload CSS for ${T}`)))})}))}function l(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return n.then(c=>{for(const f of c||[])f.status==="rejected"&&l(f.reason);return t().catch(l)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _r=globalThis,Di=_r.ShadowRoot&&(_r.ShadyCSS===void 0||_r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ri=Symbol(),Co=new WeakMap;let us=class{constructor(t,r,o){if(this._$cssResult$=!0,o!==Ri)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Di&&t===void 0){const o=r!==void 0&&r.length===1;o&&(t=Co.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Co.set(r,t))}return t}toString(){return this.cssText}};const wa=e=>new us(typeof e=="string"?e:e+"",void 0,Ri),ot=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,n,l)=>o+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[l+1],e[0]);return new us(r,e,Ri)},xa=(e,t)=>{if(Di)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const o=document.createElement("style"),n=_r.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=r.cssText,e.appendChild(o)}},ko=Di?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return wa(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$a,defineProperty:Ea,getOwnPropertyDescriptor:Ca,getOwnPropertyNames:ka,getOwnPropertySymbols:_a,getPrototypeOf:Sa}=Object,Dr=globalThis,_o=Dr.trustedTypes,Pa=_o?_o.emptyScript:"",Aa=Dr.reactiveElementPolyfillSupport,Vn=(e,t)=>e,jr={toAttribute(e,t){switch(t){case Boolean:e=e?Pa:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},zi=(e,t)=>!$a(e,t),So={attribute:!0,type:String,converter:jr,reflect:!1,useDefault:!1,hasChanged:zi};Symbol.metadata??=Symbol("metadata"),Dr.litPropertyMetadata??=new WeakMap;let An=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=So){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(t,o,r);n!==void 0&&Ea(this.prototype,t,n)}}static getPropertyDescriptor(t,r,o){const{get:n,set:l}=Ca(this.prototype,t)??{get(){return this[r]},set(c){this[r]=c}};return{get:n,set(c){const f=n?.call(this);l?.call(this,c),this.requestUpdate(t,f,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??So}static _$Ei(){if(this.hasOwnProperty(Vn("elementProperties")))return;const t=Sa(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Vn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Vn("properties"))){const r=this.properties,o=[...ka(r),..._a(r)];for(const n of o)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[o,n]of r)this.elementProperties.set(o,n)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const n=this._$Eu(r,o);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const n of o)r.unshift(ko(n))}else t!==void 0&&r.push(ko(t));return r}static _$Eu(t,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xa(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$ET(t,r){const o=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,o);if(n!==void 0&&o.reflect===!0){const l=(o.converter?.toAttribute!==void 0?o.converter:jr).toAttribute(r,o.type);this._$Em=t,l==null?this.removeAttribute(n):this.setAttribute(n,l),this._$Em=null}}_$AK(t,r){const o=this.constructor,n=o._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const l=o.getPropertyOptions(n),c=typeof l.converter=="function"?{fromAttribute:l.converter}:l.converter?.fromAttribute!==void 0?l.converter:jr;this._$Em=n;const f=c.fromAttribute(r,l.type);this[n]=f??this._$Ej?.get(n)??f,this._$Em=null}}requestUpdate(t,r,o,n=!1,l){if(t!==void 0){const c=this.constructor;if(n===!1&&(l=this[t]),o??=c.getPropertyOptions(t),!((o.hasChanged??zi)(l,r)||o.useDefault&&o.reflect&&l===this._$Ej?.get(t)&&!this.hasAttribute(c._$Eu(t,o))))return;this.C(t,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:o,reflect:n,wrapped:l},c){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,c??r??this[t]),l!==!0||c!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,l]of this._$Ep)this[n]=l;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,l]of o){const{wrapped:c}=l,f=this[n];c!==!0||this._$AL.has(n)||f===void 0||this.C(n,void 0,l,f)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};An.elementStyles=[],An.shadowRootOptions={mode:"open"},An[Vn("elementProperties")]=new Map,An[Vn("finalized")]=new Map,Aa?.({ReactiveElement:An}),(Dr.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ii=globalThis,Po=e=>e,Tr=Ii.trustedTypes,Ao=Tr?Tr.createPolicy("lit-html",{createHTML:e=>e}):void 0,ds="$lit$",sn=`lit$${Math.random().toFixed(9).slice(2)}$`,fs="?"+sn,ja=`<${fs}>`,yn=document,Yn=()=>yn.createComment(""),Xn=e=>e===null||typeof e!="object"&&typeof e!="function",Bi=Array.isArray,Ta=e=>Bi(e)||typeof e?.[Symbol.iterator]=="function",$i=`[ 	
\f\r]`,Kn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,jo=/-->/g,To=/>/g,mn=RegExp(`>|${$i}(?:([^\\s"'>=/]+)(${$i}*=${$i}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Fo=/'/g,Oo=/"/g,hs=/^(?:script|style|textarea|title)$/i,Fa=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),G=Fa(1),Tn=Symbol.for("lit-noChange"),Ue=Symbol.for("lit-nothing"),Do=new WeakMap,bn=yn.createTreeWalker(yn,129);function ps(e,t){if(!Bi(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ao!==void 0?Ao.createHTML(t):t}const Oa=(e,t)=>{const r=e.length-1,o=[];let n,l=t===2?"<svg>":t===3?"<math>":"",c=Kn;for(let f=0;f<r;f++){const m=e[f];let T,j,R=-1,F=0;for(;F<m.length&&(c.lastIndex=F,j=c.exec(m),j!==null);)F=c.lastIndex,c===Kn?j[1]==="!--"?c=jo:j[1]!==void 0?c=To:j[2]!==void 0?(hs.test(j[2])&&(n=RegExp("</"+j[2],"g")),c=mn):j[3]!==void 0&&(c=mn):c===mn?j[0]===">"?(c=n??Kn,R=-1):j[1]===void 0?R=-2:(R=c.lastIndex-j[2].length,T=j[1],c=j[3]===void 0?mn:j[3]==='"'?Oo:Fo):c===Oo||c===Fo?c=mn:c===jo||c===To?c=Kn:(c=mn,n=void 0);const H=c===mn&&e[f+1].startsWith("/>")?" ":"";l+=c===Kn?m+ja:R>=0?(o.push(T),m.slice(0,R)+ds+m.slice(R)+sn+H):m+sn+(R===-2?f:H)}return[ps(e,l+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class Gn{constructor({strings:t,_$litType$:r},o){let n;this.parts=[];let l=0,c=0;const f=t.length-1,m=this.parts,[T,j]=Oa(t,r);if(this.el=Gn.createElement(T,o),bn.currentNode=this.el.content,r===2||r===3){const R=this.el.content.firstChild;R.replaceWith(...R.childNodes)}for(;(n=bn.nextNode())!==null&&m.length<f;){if(n.nodeType===1){if(n.hasAttributes())for(const R of n.getAttributeNames())if(R.endsWith(ds)){const F=j[c++],H=n.getAttribute(R).split(sn),Z=/([.?@])?(.*)/.exec(F);m.push({type:1,index:l,name:Z[2],strings:H,ctor:Z[1]==="."?Ra:Z[1]==="?"?za:Z[1]==="@"?Ia:Rr}),n.removeAttribute(R)}else R.startsWith(sn)&&(m.push({type:6,index:l}),n.removeAttribute(R));if(hs.test(n.tagName)){const R=n.textContent.split(sn),F=R.length-1;if(F>0){n.textContent=Tr?Tr.emptyScript:"";for(let H=0;H<F;H++)n.append(R[H],Yn()),bn.nextNode(),m.push({type:2,index:++l});n.append(R[F],Yn())}}}else if(n.nodeType===8)if(n.data===fs)m.push({type:2,index:l});else{let R=-1;for(;(R=n.data.indexOf(sn,R+1))!==-1;)m.push({type:7,index:l}),R+=sn.length-1}l++}}static createElement(t,r){const o=yn.createElement("template");return o.innerHTML=t,o}}function Fn(e,t,r=e,o){if(t===Tn)return t;let n=o!==void 0?r._$Co?.[o]:r._$Cl;const l=Xn(t)?void 0:t._$litDirective$;return n?.constructor!==l&&(n?._$AO?.(!1),l===void 0?n=void 0:(n=new l(e),n._$AT(e,r,o)),o!==void 0?(r._$Co??=[])[o]=n:r._$Cl=n),n!==void 0&&(t=Fn(e,n._$AS(e,t.values),n,o)),t}class Da{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:o}=this._$AD,n=(t?.creationScope??yn).importNode(r,!0);bn.currentNode=n;let l=bn.nextNode(),c=0,f=0,m=o[0];for(;m!==void 0;){if(c===m.index){let T;m.type===2?T=new Jn(l,l.nextSibling,this,t):m.type===1?T=new m.ctor(l,m.name,m.strings,this,t):m.type===6&&(T=new Ba(l,this,t)),this._$AV.push(T),m=o[++f]}c!==m?.index&&(l=bn.nextNode(),c++)}return bn.currentNode=yn,n}p(t){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}}class Jn{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,o,n){this.type=2,this._$AH=Ue,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Fn(this,t,r),Xn(t)?t===Ue||t==null||t===""?(this._$AH!==Ue&&this._$AR(),this._$AH=Ue):t!==this._$AH&&t!==Tn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ta(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Ue&&Xn(this._$AH)?this._$AA.nextSibling.data=t:this.T(yn.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Gn.createElement(ps(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(r);else{const l=new Da(n,this),c=l.u(this.options);l.p(r),this.T(c),this._$AH=l}}_$AC(t){let r=Do.get(t.strings);return r===void 0&&Do.set(t.strings,r=new Gn(t)),r}k(t){Bi(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,n=0;for(const l of t)n===r.length?r.push(o=new Jn(this.O(Yn()),this.O(Yn()),this,this.options)):o=r[n],o._$AI(l),n++;n<r.length&&(this._$AR(o&&o._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const o=Po(t).nextSibling;Po(t).remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Rr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,o,n,l){this.type=1,this._$AH=Ue,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=l,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Ue}_$AI(t,r=this,o,n){const l=this.strings;let c=!1;if(l===void 0)t=Fn(this,t,r,0),c=!Xn(t)||t!==this._$AH&&t!==Tn,c&&(this._$AH=t);else{const f=t;let m,T;for(t=l[0],m=0;m<l.length-1;m++)T=Fn(this,f[o+m],r,m),T===Tn&&(T=this._$AH[m]),c||=!Xn(T)||T!==this._$AH[m],T===Ue?t=Ue:t!==Ue&&(t+=(T??"")+l[m+1]),this._$AH[m]=T}c&&!n&&this.j(t)}j(t){t===Ue?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ra extends Rr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Ue?void 0:t}}class za extends Rr{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Ue)}}class Ia extends Rr{constructor(t,r,o,n,l){super(t,r,o,n,l),this.type=5}_$AI(t,r=this){if((t=Fn(this,t,r,0)??Ue)===Tn)return;const o=this._$AH,n=t===Ue&&o!==Ue||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,l=t!==Ue&&(o===Ue||n);n&&this.element.removeEventListener(this.name,this,o),l&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Ba{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){Fn(this,t)}}const La=Ii.litHtmlPolyfillSupport;La?.(Gn,Jn),(Ii.litHtmlVersions??=[]).push("3.3.3");const Ma=(e,t,r)=>{const o=r?.renderBefore??t;let n=o._$litPart$;if(n===void 0){const l=r?.renderBefore??null;o._$litPart$=n=new Jn(t.insertBefore(Yn(),l),l,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Li=globalThis;class Ge extends An{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ma(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Tn}}Ge._$litElement$=!0,Ge.finalized=!0,Li.litElementHydrateSupport?.({LitElement:Ge});const Na=Li.litElementPolyfillSupport;Na?.({LitElement:Ge});(Li.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qa={attribute:!0,type:String,converter:jr,reflect:!1,hasChanged:zi},Ua=(e=qa,t,r)=>{const{kind:o,metadata:n}=r;let l=globalThis.litPropertyMetadata.get(n);if(l===void 0&&globalThis.litPropertyMetadata.set(n,l=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),l.set(r.name,e),o==="accessor"){const{name:c}=r;return{set(f){const m=t.get.call(this);t.set.call(this,f),this.requestUpdate(c,m,e,!0,f)},init(f){return f!==void 0&&this.C(c,void 0,e,f),f}}}if(o==="setter"){const{name:c}=r;return function(f){const m=this[c];t.call(this,f),this.requestUpdate(c,m,e,!0,f)}}throw Error("Unsupported decorator location: "+o)};function Xt(e){return(t,r)=>typeof r=="object"?Ua(e,t,r):((o,n,l)=>{const c=n.hasOwnProperty(l);return n.constructor.createProperty(l,o),c?Object.getOwnPropertyDescriptor(n,l):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ne(e){return Xt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wa=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function zr(e,t){return(r,o,n)=>{const l=c=>c.renderRoot?.querySelector(e)??null;return Wa(r,o,{get(){return l(this)}})}}var Ha=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ka(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sr={exports:{}},Va=Sr.exports,Ro;function Ya(){return Ro||(Ro=1,(function(e,t){(function(r,o){e.exports=o()})(Va,function(){var r=function(i,s){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,u){a.__proto__=u}||function(a,u){for(var d in u)Object.prototype.hasOwnProperty.call(u,d)&&(a[d]=u[d])})(i,s)},o=function(){return(o=Object.assign||function(i){for(var s,a=1,u=arguments.length;a<u;a++)for(var d in s=arguments[a])Object.prototype.hasOwnProperty.call(s,d)&&(i[d]=s[d]);return i}).apply(this,arguments)};function n(i,s,a){for(var u,d=0,h=s.length;d<h;d++)!u&&d in s||((u=u||Array.prototype.slice.call(s,0,d))[d]=s[d]);return i.concat(u||Array.prototype.slice.call(s))}var l=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Ha,c=Object.keys,f=Array.isArray;function m(i,s){return typeof s!="object"||c(s).forEach(function(a){i[a]=s[a]}),i}typeof Promise>"u"||l.Promise||(l.Promise=Promise);var T=Object.getPrototypeOf,j={}.hasOwnProperty;function R(i,s){return j.call(i,s)}function F(i,s){typeof s=="function"&&(s=s(T(i))),(typeof Reflect>"u"?c:Reflect.ownKeys)(s).forEach(function(a){Z(i,a,s[a])})}var H=Object.defineProperty;function Z(i,s,a,u){H(i,s,m(a&&R(a,"get")&&typeof a.get=="function"?{get:a.get,set:a.set,configurable:!0}:{value:a,configurable:!0,writable:!0},u))}function le(i){return{from:function(s){return i.prototype=Object.create(s.prototype),Z(i.prototype,"constructor",i),{extend:F.bind(null,i.prototype)}}}}var Ze=Object.getOwnPropertyDescriptor,Ce=[].slice;function et(i,s,a){return Ce.call(i,s,a)}function Ct(i,s){return s(i)}function ln(i){if(!i)throw new Error("Assertion Failed")}function zn(i){l.setImmediate?setImmediate(i):setTimeout(i,0)}function kt(i,s){if(typeof s=="string"&&R(i,s))return i[s];if(!s)return i;if(typeof s!="string"){for(var a=[],u=0,d=s.length;u<d;++u){var h=kt(i,s[u]);a.push(h)}return a}var g=s.indexOf(".");if(g!==-1){var y=i[s.substr(0,g)];return y==null?void 0:kt(y,s.substr(g+1))}}function st(i,s,a){if(i&&s!==void 0&&!("isFrozen"in Object&&Object.isFrozen(i)))if(typeof s!="string"&&"length"in s){ln(typeof a!="string"&&"length"in a);for(var u=0,d=s.length;u<d;++u)st(i,s[u],a[u])}else{var h,g,y=s.indexOf(".");y!==-1?(h=s.substr(0,y),(g=s.substr(y+1))===""?a===void 0?f(i)&&!isNaN(parseInt(h))?i.splice(h,1):delete i[h]:i[h]=a:st(y=!(y=i[h])||!R(i,h)?i[h]={}:y,g,a)):a===void 0?f(i)&&!isNaN(parseInt(s))?i.splice(s,1):delete i[s]:i[s]=a}}function Ut(i){var s,a={};for(s in i)R(i,s)&&(a[s]=i[s]);return a}var Zn=[].concat;function En(i){return Zn.apply([],i)}var Kt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(En([8,16,32,64].map(function(i){return["Int","Uint","Float"].map(function(s){return s+i+"Array"})}))).filter(function(i){return l[i]}),p=new Set(Kt.map(function(i){return l[i]})),w=null;function D(i){return w=new WeakMap,i=(function s(a){if(!a||typeof a!="object")return a;var u=w.get(a);if(u)return u;if(f(a)){u=[],w.set(a,u);for(var d=0,h=a.length;d<h;++d)u.push(s(a[d]))}else if(p.has(a.constructor))u=a;else{var g,y=T(a);for(g in u=y===Object.prototype?{}:Object.create(y),w.set(a,u),a)R(a,g)&&(u[g]=s(a[g]))}return u})(i),w=null,i}var b={}.toString;function x(i){return b.call(i).slice(8,-1)}var ie=typeof Symbol<"u"?Symbol.iterator:"@@iterator",ae=typeof ie=="symbol"?function(i){var s;return i!=null&&(s=i[ie])&&s.apply(i)}:function(){return null};function M(i,s){return s=i.indexOf(s),0<=s&&i.splice(s,1),0<=s}var U={};function Ie(i){var s,a,u,d;if(arguments.length===1){if(f(i))return i.slice();if(this===U&&typeof i=="string")return[i];if(d=ae(i)){for(a=[];!(u=d.next()).done;)a.push(u.value);return a}if(i==null)return[i];if(typeof(s=i.length)!="number")return[i];for(a=new Array(s);s--;)a[s]=i[s];return a}for(s=arguments.length,a=new Array(s);s--;)a[s]=arguments[s];return a}var Xe=typeof Symbol<"u"?function(i){return i[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},be=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],_t=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(be),It={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Fe(i,s){this.name=i,this.message=s}function Pe(i,s){return i+". Errors: "+Object.keys(s).map(function(a){return s[a].toString()}).filter(function(a,u,d){return d.indexOf(a)===u}).join(`
`)}function me(i,s,a,u){this.failures=s,this.failedKeys=u,this.successCount=a,this.message=Pe(i,s)}function xe(i,s){this.name="BulkError",this.failures=Object.keys(s).map(function(a){return s[a]}),this.failuresByPos=s,this.message=Pe(i,this.failures)}le(Fe).from(Error).extend({toString:function(){return this.name+": "+this.message}}),le(me).from(Fe),le(xe).from(Fe);var Be=_t.reduce(function(i,s){return i[s]=s+"Error",i},{}),ve=Fe,Q=_t.reduce(function(i,s){var a=s+"Error";function u(d,h){this.name=a,d?typeof d=="string"?(this.message="".concat(d).concat(h?`
 `+h:""),this.inner=h||null):typeof d=="object"&&(this.message="".concat(d.name," ").concat(d.message),this.inner=d):(this.message=It[s]||a,this.inner=null)}return le(u).from(ve),i[s]=u,i},{});Q.Syntax=SyntaxError,Q.Type=TypeError,Q.Range=RangeError;var Le=be.reduce(function(i,s){return i[s+"Error"]=Q[s],i},{}),Ae=_t.reduce(function(i,s){return["Syntax","Type","Range"].indexOf(s)===-1&&(i[s+"Error"]=Q[s]),i},{});function se(){}function fe(i){return i}function bt(i,s){return i==null||i===fe?s:function(a){return s(i(a))}}function re(i,s){return function(){i.apply(this,arguments),s.apply(this,arguments)}}function Me(i,s){return i===se?s:function(){var a=i.apply(this,arguments);a!==void 0&&(arguments[0]=a);var u=this.onsuccess,d=this.onerror;this.onsuccess=null,this.onerror=null;var h=s.apply(this,arguments);return u&&(this.onsuccess=this.onsuccess?re(u,this.onsuccess):u),d&&(this.onerror=this.onerror?re(d,this.onerror):d),h!==void 0?h:a}}function Qt(i,s){return i===se?s:function(){i.apply(this,arguments);var a=this.onsuccess,u=this.onerror;this.onsuccess=this.onerror=null,s.apply(this,arguments),a&&(this.onsuccess=this.onsuccess?re(a,this.onsuccess):a),u&&(this.onerror=this.onerror?re(u,this.onerror):u)}}function jt(i,s){return i===se?s:function(a){var u=i.apply(this,arguments);m(a,u);var d=this.onsuccess,h=this.onerror;return this.onsuccess=null,this.onerror=null,a=s.apply(this,arguments),d&&(this.onsuccess=this.onsuccess?re(d,this.onsuccess):d),h&&(this.onerror=this.onerror?re(h,this.onerror):h),u===void 0?a===void 0?void 0:a:m(u,a)}}function qe(i,s){return i===se?s:function(){return s.apply(this,arguments)!==!1&&i.apply(this,arguments)}}function yt(i,s){return i===se?s:function(){var a=i.apply(this,arguments);if(a&&typeof a.then=="function"){for(var u=this,d=arguments.length,h=new Array(d);d--;)h[d]=arguments[d];return a.then(function(){return s.apply(u,h)})}return s.apply(this,arguments)}}Ae.ModifyError=me,Ae.DexieError=Fe,Ae.BulkError=xe;var ke=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Oe(i){ke=i}var ht={},We=100,Kt=typeof Promise>"u"?[]:(function(){var i=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[i,T(i),i];var s=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[s,T(s),i]})(),be=Kt[0],_t=Kt[1],Kt=Kt[2],_t=_t&&_t.then,ge=be&&be.constructor,vt=!!Kt,De=function(i,s){Ke.push([i,s]),Qe&&(queueMicrotask(ce),Qe=!1)},at=!0,Qe=!0,He=[],je=[],oe=fe,Ne={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:se,pgp:!1,env:{},finalize:se},K=Ne,Ke=[],tt=0,mt=[];function V(i){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var s=this._PSD=K;if(typeof i!="function"){if(i!==ht)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&Je(this,this._value))}this._state=null,this._value=null,++s.ref,(function a(u,d){try{d(function(h){if(u._state===null){if(h===u)throw new TypeError("A promise cannot be resolved with itself.");var g=u._lib&&_e();h&&typeof h.then=="function"?a(u,function(y,$){h instanceof V?h._then(y,$):h.then(y,$)}):(u._state=!0,u._value=h,Jt(u)),g&&Re()}},Je.bind(null,u))}catch(h){Je(u,h)}})(this,i)}var Bt={get:function(){var i=K,s=nr;function a(u,d){var h=this,g=!i.global&&(i!==K||s!==nr),y=g&&!en(),$=new V(function(C,S){ee(h,new Wt(Yi(u,i,g,y),Yi(d,i,g,y),C,S,i))});return this._consoleTask&&($._consoleTask=this._consoleTask),$}return a.prototype=ht,a},set:function(i){Z(this,"then",i&&i.prototype===ht?Bt:{get:function(){return i},set:Bt.set})}};function Wt(i,s,a,u,d){this.onFulfilled=typeof i=="function"?i:null,this.onRejected=typeof s=="function"?s:null,this.resolve=a,this.reject=u,this.psd=d}function Je(i,s){var a,u;je.push(s),i._state===null&&(a=i._lib&&_e(),s=oe(s),i._state=!1,i._value=s,u=i,He.some(function(d){return d._value===u._value})||He.push(u),Jt(i),a&&Re())}function Jt(i){var s=i._listeners;i._listeners=[];for(var a=0,u=s.length;a<u;++a)ee(i,s[a]);var d=i._PSD;--d.ref||d.finalize(),tt===0&&(++tt,De(function(){--tt==0&&$e()},[]))}function ee(i,s){if(i._state!==null){var a=i._state?s.onFulfilled:s.onRejected;if(a===null)return(i._state?s.resolve:s.reject)(i._value);++s.psd.ref,++tt,De(we,[a,i,s])}else i._listeners.push(s)}function we(i,s,a){try{var u,d=s._value;!s._state&&je.length&&(je=[]),u=ke&&s._consoleTask?s._consoleTask.run(function(){return i(d)}):i(d),s._state||je.indexOf(d)!==-1||(function(h){for(var g=He.length;g;)if(He[--g]._value===h._value)return He.splice(g,1)})(s),a.resolve(u)}catch(h){a.reject(h)}finally{--tt==0&&$e(),--a.psd.ref||a.psd.finalize()}}function ce(){cn(Ne,function(){_e()&&Re()})}function _e(){var i=at;return Qe=at=!1,i}function Re(){var i,s,a;do for(;0<Ke.length;)for(i=Ke,Ke=[],a=i.length,s=0;s<a;++s){var u=i[s];u[0].apply(null,u[1])}while(0<Ke.length);Qe=at=!0}function $e(){var i=He;He=[],i.forEach(function(u){u._PSD.onunhandled.call(null,u._value,u)});for(var s=mt.slice(0),a=s.length;a;)s[--a]()}function Tt(i){return new V(ht,!1,i)}function Te(i,s){var a=K;return function(){var u=_e(),d=K;try{return tn(a,!0),i.apply(this,arguments)}catch(h){s&&s(h)}finally{tn(d,!1),u&&Re()}}}F(V.prototype,{then:Bt,_then:function(i,s){ee(this,new Wt(null,null,i,s,K))},catch:function(i){if(arguments.length===1)return this.then(null,i);var s=i,a=arguments[1];return typeof s=="function"?this.then(null,function(u){return(u instanceof s?a:Tt)(u)}):this.then(null,function(u){return(u&&u.name===s?a:Tt)(u)})},finally:function(i){return this.then(function(s){return V.resolve(i()).then(function(){return s})},function(s){return V.resolve(i()).then(function(){return Tt(s)})})},timeout:function(i,s){var a=this;return i<1/0?new V(function(u,d){var h=setTimeout(function(){return d(new Q.Timeout(s))},i);a.then(u,d).finally(clearTimeout.bind(null,h))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&Z(V.prototype,Symbol.toStringTag,"Dexie.Promise"),Ne.env=Vi(),F(V,{all:function(){var i=Ie.apply(null,arguments).map(rr);return new V(function(s,a){i.length===0&&s([]);var u=i.length;i.forEach(function(d,h){return V.resolve(d).then(function(g){i[h]=g,--u||s(i)},a)})})},resolve:function(i){return i instanceof V?i:i&&typeof i.then=="function"?new V(function(s,a){i.then(s,a)}):new V(ht,!0,i)},reject:Tt,race:function(){var i=Ie.apply(null,arguments).map(rr);return new V(function(s,a){i.map(function(u){return V.resolve(u).then(s,a)})})},PSD:{get:function(){return K},set:function(i){return K=i}},totalEchoes:{get:function(){return nr}},newPSD:Zt,usePSD:cn,scheduler:{get:function(){return De},set:function(i){De=i}},rejectionMapper:{get:function(){return oe},set:function(i){oe=i}},follow:function(i,s){return new V(function(a,u){return Zt(function(d,h){var g=K;g.unhandleds=[],g.onunhandled=h,g.finalize=re(function(){var y,$=this;y=function(){$.unhandleds.length===0?d():h($.unhandleds[0])},mt.push(function C(){y(),mt.splice(mt.indexOf(C),1)}),++tt,De(function(){--tt==0&&$e()},[])},g.finalize),i()},s,a,u)})}}),ge&&(ge.allSettled&&Z(V,"allSettled",function(){var i=Ie.apply(null,arguments).map(rr);return new V(function(s){i.length===0&&s([]);var a=i.length,u=new Array(a);i.forEach(function(d,h){return V.resolve(d).then(function(g){return u[h]={status:"fulfilled",value:g}},function(g){return u[h]={status:"rejected",reason:g}}).then(function(){return--a||s(u)})})})}),ge.any&&typeof AggregateError<"u"&&Z(V,"any",function(){var i=Ie.apply(null,arguments).map(rr);return new V(function(s,a){i.length===0&&a(new AggregateError([]));var u=i.length,d=new Array(u);i.forEach(function(h,g){return V.resolve(h).then(function(y){return s(y)},function(y){d[g]=y,--u||a(new AggregateError(d))})})})}),ge.withResolvers&&(V.withResolvers=ge.withResolvers));var nt={awaits:0,echoes:0,id:0},Ys=0,er=[],tr=0,nr=0,Xs=0;function Zt(i,s,a,u){var d=K,h=Object.create(d);return h.parent=d,h.ref=0,h.global=!1,h.id=++Xs,Ne.env,h.env=vt?{Promise:V,PromiseProp:{value:V,configurable:!0,writable:!0},all:V.all,race:V.race,allSettled:V.allSettled,any:V.any,resolve:V.resolve,reject:V.reject}:{},s&&m(h,s),++d.ref,h.finalize=function(){--this.parent.ref||this.parent.finalize()},u=cn(h,i,a,u),h.ref===0&&h.finalize(),u}function Cn(){return nt.id||(nt.id=++Ys),++nt.awaits,nt.echoes+=We,nt.id}function en(){return!!nt.awaits&&(--nt.awaits==0&&(nt.id=0),nt.echoes=nt.awaits*We,!0)}function rr(i){return nt.echoes&&i&&i.constructor===ge?(Cn(),i.then(function(s){return en(),s},function(s){return en(),Ve(s)})):i}function Gs(){var i=er[er.length-1];er.pop(),tn(i,!1)}function tn(i,s){var a,u=K;(s?!nt.echoes||tr++&&i===K:!tr||--tr&&i===K)||queueMicrotask(s?function(d){++nr,nt.echoes&&--nt.echoes!=0||(nt.echoes=nt.awaits=nt.id=0),er.push(K),tn(d,!0)}.bind(null,i):Gs),i!==K&&(K=i,u===Ne&&(Ne.env=Vi()),vt&&(a=Ne.env.Promise,s=i.env,(u.global||i.global)&&(Object.defineProperty(l,"Promise",s.PromiseProp),a.all=s.all,a.race=s.race,a.resolve=s.resolve,a.reject=s.reject,s.allSettled&&(a.allSettled=s.allSettled),s.any&&(a.any=s.any))))}function Vi(){var i=l.Promise;return vt?{Promise:i,PromiseProp:Object.getOwnPropertyDescriptor(l,"Promise"),all:i.all,race:i.race,allSettled:i.allSettled,any:i.any,resolve:i.resolve,reject:i.reject}:{}}function cn(i,s,a,u,d){var h=K;try{return tn(i,!0),s(a,u,d)}finally{tn(h,!1)}}function Yi(i,s,a,u){return typeof i!="function"?i:function(){var d=K;a&&Cn(),tn(s,!0);try{return i.apply(this,arguments)}finally{tn(d,!1),u&&queueMicrotask(en)}}}function Yr(i){Promise===ge&&nt.echoes===0?tr===0?i():enqueueNativeMicroTask(i):setTimeout(i,0)}(""+_t).indexOf("[native code]")===-1&&(Cn=en=se);var Ve=V.reject,un="￿",Ht="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Xi="String expected.",kn=[],ir="__dbnames",Xr="readonly",Gr="readwrite";function dn(i,s){return i?s?function(){return i.apply(this,arguments)&&s.apply(this,arguments)}:i:s}var Gi={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function or(i){return typeof i!="string"||/\./.test(i)?function(s){return s}:function(s){return s[i]===void 0&&i in s&&delete(s=D(s))[i],s}}function Qi(){throw Q.Type()}function ye(i,s){try{var a=Ji(i),u=Ji(s);if(a!==u)return a==="Array"?1:u==="Array"?-1:a==="binary"?1:u==="binary"?-1:a==="string"?1:u==="string"?-1:a==="Date"?1:u!=="Date"?NaN:-1;switch(a){case"number":case"Date":case"string":return s<i?1:i<s?-1:0;case"binary":return(function(d,h){for(var g=d.length,y=h.length,$=g<y?g:y,C=0;C<$;++C)if(d[C]!==h[C])return d[C]<h[C]?-1:1;return g===y?0:g<y?-1:1})(Zi(i),Zi(s));case"Array":return(function(d,h){for(var g=d.length,y=h.length,$=g<y?g:y,C=0;C<$;++C){var S=ye(d[C],h[C]);if(S!==0)return S}return g===y?0:g<y?-1:1})(i,s)}}catch{}return NaN}function Ji(i){var s=typeof i;return s!="object"?s:ArrayBuffer.isView(i)?"binary":(i=x(i),i==="ArrayBuffer"?"binary":i)}function Zi(i){return i instanceof Uint8Array?i:ArrayBuffer.isView(i)?new Uint8Array(i.buffer,i.byteOffset,i.byteLength):new Uint8Array(i)}var eo=(ze.prototype._trans=function(i,s,a){var u=this._tx||K.trans,d=this.name,h=ke&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(i==="readonly"?"read":"write"," ").concat(this.name));function g(C,S,v){if(!v.schema[d])throw new Q.NotFound("Table "+d+" not part of transaction");return s(v.idbtrans,v)}var y=_e();try{var $=u&&u.db._novip===this.db._novip?u===K.trans?u._promise(i,g,a):Zt(function(){return u._promise(i,g,a)},{trans:u,transless:K.transless||K}):(function C(S,v,A,E){if(S.idbdb&&(S._state.openComplete||K.letThrough||S._vip)){var _=S._createTransaction(v,A,S._dbSchema);try{_.create(),S._state.PR1398_maxLoop=3}catch(P){return P.name===Be.InvalidState&&S.isOpen()&&0<--S._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),S.close({disableAutoOpen:!1}),S.open().then(function(){return C(S,v,A,E)})):Ve(P)}return _._promise(v,function(P,k){return Zt(function(){return K.trans=_,E(P,k,_)})}).then(function(P){if(v==="readwrite")try{_.idbtrans.commit()}catch{}return v==="readonly"?P:_._completion.then(function(){return P})})}if(S._state.openComplete)return Ve(new Q.DatabaseClosed(S._state.dbOpenError));if(!S._state.isBeingOpened){if(!S._state.autoOpen)return Ve(new Q.DatabaseClosed);S.open().catch(se)}return S._state.dbReadyPromise.then(function(){return C(S,v,A,E)})})(this.db,i,[this.name],g);return h&&($._consoleTask=h,$=$.catch(function(C){return console.trace(C),Ve(C)})),$}finally{y&&Re()}},ze.prototype.get=function(i,s){var a=this;return i&&i.constructor===Object?this.where(i).first(s):i==null?Ve(new Q.Type("Invalid argument to Table.get()")):this._trans("readonly",function(u){return a.core.get({trans:u,key:i}).then(function(d){return a.hook.reading.fire(d)})}).then(s)},ze.prototype.where=function(i){if(typeof i=="string")return new this.db.WhereClause(this,i);if(f(i))return new this.db.WhereClause(this,"[".concat(i.join("+"),"]"));var s=c(i);if(s.length===1)return this.where(s[0]).equals(i[s[0]]);var a=this.schema.indexes.concat(this.schema.primKey).filter(function(y){if(y.compound&&s.every(function(C){return 0<=y.keyPath.indexOf(C)})){for(var $=0;$<s.length;++$)if(s.indexOf(y.keyPath[$])===-1)return!1;return!0}return!1}).sort(function(y,$){return y.keyPath.length-$.keyPath.length})[0];if(a&&this.db._maxKey!==un){var h=a.keyPath.slice(0,s.length);return this.where(h).equals(h.map(function($){return i[$]}))}!a&&ke&&console.warn("The query ".concat(JSON.stringify(i)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(s.join("+"),"]"));var u=this.schema.idxByName;function d(y,$){return ye(y,$)===0}var g=s.reduce(function(v,$){var C=v[0],S=v[1],v=u[$],A=i[$];return[C||v,C||!v?dn(S,v&&v.multi?function(E){return E=kt(E,$),f(E)&&E.some(function(_){return d(A,_)})}:function(E){return d(A,kt(E,$))}):S]},[null,null]),h=g[0],g=g[1];return h?this.where(h.name).equals(i[h.keyPath]).filter(g):a?this.filter(g):this.where(s).equals("")},ze.prototype.filter=function(i){return this.toCollection().and(i)},ze.prototype.count=function(i){return this.toCollection().count(i)},ze.prototype.offset=function(i){return this.toCollection().offset(i)},ze.prototype.limit=function(i){return this.toCollection().limit(i)},ze.prototype.each=function(i){return this.toCollection().each(i)},ze.prototype.toArray=function(i){return this.toCollection().toArray(i)},ze.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},ze.prototype.orderBy=function(i){return new this.db.Collection(new this.db.WhereClause(this,f(i)?"[".concat(i.join("+"),"]"):i))},ze.prototype.reverse=function(){return this.toCollection().reverse()},ze.prototype.mapToClass=function(i){var s,a=this.db,u=this.name;function d(){return s!==null&&s.apply(this,arguments)||this}(this.schema.mappedClass=i).prototype instanceof Qi&&((function($,C){if(typeof C!="function"&&C!==null)throw new TypeError("Class extends value "+String(C)+" is not a constructor or null");function S(){this.constructor=$}r($,C),$.prototype=C===null?Object.create(C):(S.prototype=C.prototype,new S)})(d,s=i),Object.defineProperty(d.prototype,"db",{get:function(){return a},enumerable:!1,configurable:!0}),d.prototype.table=function(){return u},i=d);for(var h=new Set,g=i.prototype;g;g=T(g))Object.getOwnPropertyNames(g).forEach(function($){return h.add($)});function y($){if(!$)return $;var C,S=Object.create(i.prototype);for(C in $)if(!h.has(C))try{S[C]=$[C]}catch{}return S}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=y,this.hook("reading",y),i},ze.prototype.defineClass=function(){return this.mapToClass(function(i){m(this,i)})},ze.prototype.add=function(i,s){var a=this,u=this.schema.primKey,d=u.auto,h=u.keyPath,g=i;return h&&d&&(g=or(h)(i)),this._trans("readwrite",function(y){return a.core.mutate({trans:y,type:"add",keys:s!=null?[s]:null,values:[g]})}).then(function(y){return y.numFailures?V.reject(y.failures[0]):y.lastResult}).then(function(y){if(h)try{st(i,h,y)}catch{}return y})},ze.prototype.update=function(i,s){return typeof i!="object"||f(i)?this.where(":id").equals(i).modify(s):(i=kt(i,this.schema.primKey.keyPath),i===void 0?Ve(new Q.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(i).modify(s))},ze.prototype.put=function(i,s){var a=this,u=this.schema.primKey,d=u.auto,h=u.keyPath,g=i;return h&&d&&(g=or(h)(i)),this._trans("readwrite",function(y){return a.core.mutate({trans:y,type:"put",values:[g],keys:s!=null?[s]:null})}).then(function(y){return y.numFailures?V.reject(y.failures[0]):y.lastResult}).then(function(y){if(h)try{st(i,h,y)}catch{}return y})},ze.prototype.delete=function(i){var s=this;return this._trans("readwrite",function(a){return s.core.mutate({trans:a,type:"delete",keys:[i]})}).then(function(a){return a.numFailures?V.reject(a.failures[0]):void 0})},ze.prototype.clear=function(){var i=this;return this._trans("readwrite",function(s){return i.core.mutate({trans:s,type:"deleteRange",range:Gi})}).then(function(s){return s.numFailures?V.reject(s.failures[0]):void 0})},ze.prototype.bulkGet=function(i){var s=this;return this._trans("readonly",function(a){return s.core.getMany({keys:i,trans:a}).then(function(u){return u.map(function(d){return s.hook.reading.fire(d)})})})},ze.prototype.bulkAdd=function(i,s,a){var u=this,d=Array.isArray(s)?s:void 0,h=(a=a||(d?void 0:s))?a.allKeys:void 0;return this._trans("readwrite",function(g){var C=u.schema.primKey,y=C.auto,C=C.keyPath;if(C&&d)throw new Q.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(d&&d.length!==i.length)throw new Q.InvalidArgument("Arguments objects and keys must have the same length");var $=i.length,C=C&&y?i.map(or(C)):i;return u.core.mutate({trans:g,type:"add",keys:d,values:C,wantResults:h}).then(function(_){var v=_.numFailures,A=_.results,E=_.lastResult,_=_.failures;if(v===0)return h?A:E;throw new xe("".concat(u.name,".bulkAdd(): ").concat(v," of ").concat($," operations failed"),_)})})},ze.prototype.bulkPut=function(i,s,a){var u=this,d=Array.isArray(s)?s:void 0,h=(a=a||(d?void 0:s))?a.allKeys:void 0;return this._trans("readwrite",function(g){var C=u.schema.primKey,y=C.auto,C=C.keyPath;if(C&&d)throw new Q.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(d&&d.length!==i.length)throw new Q.InvalidArgument("Arguments objects and keys must have the same length");var $=i.length,C=C&&y?i.map(or(C)):i;return u.core.mutate({trans:g,type:"put",keys:d,values:C,wantResults:h}).then(function(_){var v=_.numFailures,A=_.results,E=_.lastResult,_=_.failures;if(v===0)return h?A:E;throw new xe("".concat(u.name,".bulkPut(): ").concat(v," of ").concat($," operations failed"),_)})})},ze.prototype.bulkUpdate=function(i){var s=this,a=this.core,u=i.map(function(g){return g.key}),d=i.map(function(g){return g.changes}),h=[];return this._trans("readwrite",function(g){return a.getMany({trans:g,keys:u,cache:"clone"}).then(function(y){var $=[],C=[];i.forEach(function(v,A){var E=v.key,_=v.changes,P=y[A];if(P){for(var k=0,z=Object.keys(_);k<z.length;k++){var I=z[k],B=_[I];if(I===s.schema.primKey.keyPath){if(ye(B,E)!==0)throw new Q.Constraint("Cannot update primary key in bulkUpdate()")}else st(P,I,B)}h.push(A),$.push(E),C.push(P)}});var S=$.length;return a.mutate({trans:g,type:"put",keys:$,values:C,updates:{keys:u,changeSpecs:d}}).then(function(v){var A=v.numFailures,E=v.failures;if(A===0)return S;for(var _=0,P=Object.keys(E);_<P.length;_++){var k,z=P[_],I=h[Number(z)];I!=null&&(k=E[z],delete E[z],E[I]=k)}throw new xe("".concat(s.name,".bulkUpdate(): ").concat(A," of ").concat(S," operations failed"),E)})})})},ze.prototype.bulkDelete=function(i){var s=this,a=i.length;return this._trans("readwrite",function(u){return s.core.mutate({trans:u,type:"delete",keys:i})}).then(function(g){var d=g.numFailures,h=g.lastResult,g=g.failures;if(d===0)return h;throw new xe("".concat(s.name,".bulkDelete(): ").concat(d," of ").concat(a," operations failed"),g)})},ze);function ze(){}function In(i){function s(g,y){if(y){for(var $=arguments.length,C=new Array($-1);--$;)C[$-1]=arguments[$];return a[g].subscribe.apply(null,C),i}if(typeof g=="string")return a[g]}var a={};s.addEventType=h;for(var u=1,d=arguments.length;u<d;++u)h(arguments[u]);return s;function h(g,y,$){if(typeof g!="object"){var C;y=y||qe;var S={subscribers:[],fire:$=$||se,subscribe:function(v){S.subscribers.indexOf(v)===-1&&(S.subscribers.push(v),S.fire=y(S.fire,v))},unsubscribe:function(v){S.subscribers=S.subscribers.filter(function(A){return A!==v}),S.fire=S.subscribers.reduce(y,$)}};return a[g]=s[g]=S}c(C=g).forEach(function(v){var A=C[v];if(f(A))h(v,C[v][0],C[v][1]);else{if(A!=="asap")throw new Q.InvalidArgument("Invalid event config");var E=h(v,fe,function(){for(var _=arguments.length,P=new Array(_);_--;)P[_]=arguments[_];E.subscribers.forEach(function(k){zn(function(){k.apply(null,P)})})})}})}}function Bn(i,s){return le(s).from({prototype:i}),s}function _n(i,s){return!(i.filter||i.algorithm||i.or)&&(s?i.justLimit:!i.replayFilter)}function Qr(i,s){i.filter=dn(i.filter,s)}function Jr(i,s,a){var u=i.replayFilter;i.replayFilter=u?function(){return dn(u(),s())}:s,i.justLimit=a&&!u}function sr(i,s){if(i.isPrimKey)return s.primaryKey;var a=s.getIndexByKeyPath(i.index);if(!a)throw new Q.Schema("KeyPath "+i.index+" on object store "+s.name+" is not indexed");return a}function to(i,s,a){var u=sr(i,s.schema);return s.openCursor({trans:a,values:!i.keysOnly,reverse:i.dir==="prev",unique:!!i.unique,query:{index:u,range:i.range}})}function ar(i,s,a,u){var d=i.replayFilter?dn(i.filter,i.replayFilter()):i.filter;if(i.or){var h={},g=function(y,$,C){var S,v;d&&!d($,C,function(A){return $.stop(A)},function(A){return $.fail(A)})||((v=""+(S=$.primaryKey))=="[object ArrayBuffer]"&&(v=""+new Uint8Array(S)),R(h,v)||(h[v]=!0,s(y,$,C)))};return Promise.all([i.or._iterate(g,a),no(to(i,u,a),i.algorithm,g,!i.keysOnly&&i.valueMapper)])}return no(to(i,u,a),dn(i.algorithm,d),s,!i.keysOnly&&i.valueMapper)}function no(i,s,a,u){var d=Te(u?function(h,g,y){return a(u(h),g,y)}:a);return i.then(function(h){if(h)return h.start(function(){var g=function(){return h.continue()};s&&!s(h,function(y){return g=y},function(y){h.stop(y),g=se},function(y){h.fail(y),g=se})||d(h.value,h,function(y){return g=y}),g()})})}var Kt=Symbol(),Ln=(ro.prototype.execute=function(i){if(this.add!==void 0){var s=this.add;if(f(s))return n(n([],f(i)?i:[],!0),s).sort();if(typeof s=="number")return(Number(i)||0)+s;if(typeof s=="bigint")try{return BigInt(i)+s}catch{return BigInt(0)+s}throw new TypeError("Invalid term ".concat(s))}if(this.remove!==void 0){var a=this.remove;if(f(a))return f(i)?i.filter(function(u){return!a.includes(u)}).sort():[];if(typeof a=="number")return Number(i)-a;if(typeof a=="bigint")try{return BigInt(i)-a}catch{return BigInt(0)-a}throw new TypeError("Invalid subtrahend ".concat(a))}return s=(s=this.replacePrefix)===null||s===void 0?void 0:s[0],s&&typeof i=="string"&&i.startsWith(s)?this.replacePrefix[1]+i.substring(s.length):i},ro);function ro(i){Object.assign(this,i)}var Qs=(Ee.prototype._read=function(i,s){var a=this._ctx;return a.error?a.table._trans(null,Ve.bind(null,a.error)):a.table._trans("readonly",i).then(s)},Ee.prototype._write=function(i){var s=this._ctx;return s.error?s.table._trans(null,Ve.bind(null,s.error)):s.table._trans("readwrite",i,"locked")},Ee.prototype._addAlgorithm=function(i){var s=this._ctx;s.algorithm=dn(s.algorithm,i)},Ee.prototype._iterate=function(i,s){return ar(this._ctx,i,s,this._ctx.table.core)},Ee.prototype.clone=function(i){var s=Object.create(this.constructor.prototype),a=Object.create(this._ctx);return i&&m(a,i),s._ctx=a,s},Ee.prototype.raw=function(){return this._ctx.valueMapper=null,this},Ee.prototype.each=function(i){var s=this._ctx;return this._read(function(a){return ar(s,i,a,s.table.core)})},Ee.prototype.count=function(i){var s=this;return this._read(function(a){var u=s._ctx,d=u.table.core;if(_n(u,!0))return d.count({trans:a,query:{index:sr(u,d.schema),range:u.range}}).then(function(g){return Math.min(g,u.limit)});var h=0;return ar(u,function(){return++h,!1},a,d).then(function(){return h})}).then(i)},Ee.prototype.sortBy=function(i,s){var a=i.split(".").reverse(),u=a[0],d=a.length-1;function h($,C){return C?h($[a[C]],C-1):$[u]}var g=this._ctx.dir==="next"?1:-1;function y($,C){return ye(h($,d),h(C,d))*g}return this.toArray(function($){return $.sort(y)}).then(s)},Ee.prototype.toArray=function(i){var s=this;return this._read(function(a){var u=s._ctx;if(u.dir==="next"&&_n(u,!0)&&0<u.limit){var d=u.valueMapper,h=sr(u,u.table.core.schema);return u.table.core.query({trans:a,limit:u.limit,values:!0,query:{index:h,range:u.range}}).then(function(y){return y=y.result,d?y.map(d):y})}var g=[];return ar(u,function(y){return g.push(y)},a,u.table.core).then(function(){return g})},i)},Ee.prototype.offset=function(i){var s=this._ctx;return i<=0||(s.offset+=i,_n(s)?Jr(s,function(){var a=i;return function(u,d){return a===0||(a===1?--a:d(function(){u.advance(a),a=0}),!1)}}):Jr(s,function(){var a=i;return function(){return--a<0}})),this},Ee.prototype.limit=function(i){return this._ctx.limit=Math.min(this._ctx.limit,i),Jr(this._ctx,function(){var s=i;return function(a,u,d){return--s<=0&&u(d),0<=s}},!0),this},Ee.prototype.until=function(i,s){return Qr(this._ctx,function(a,u,d){return!i(a.value)||(u(d),s)}),this},Ee.prototype.first=function(i){return this.limit(1).toArray(function(s){return s[0]}).then(i)},Ee.prototype.last=function(i){return this.reverse().first(i)},Ee.prototype.filter=function(i){var s;return Qr(this._ctx,function(a){return i(a.value)}),(s=this._ctx).isMatch=dn(s.isMatch,i),this},Ee.prototype.and=function(i){return this.filter(i)},Ee.prototype.or=function(i){return new this.db.WhereClause(this._ctx.table,i,this)},Ee.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Ee.prototype.desc=function(){return this.reverse()},Ee.prototype.eachKey=function(i){var s=this._ctx;return s.keysOnly=!s.isMatch,this.each(function(a,u){i(u.key,u)})},Ee.prototype.eachUniqueKey=function(i){return this._ctx.unique="unique",this.eachKey(i)},Ee.prototype.eachPrimaryKey=function(i){var s=this._ctx;return s.keysOnly=!s.isMatch,this.each(function(a,u){i(u.primaryKey,u)})},Ee.prototype.keys=function(i){var s=this._ctx;s.keysOnly=!s.isMatch;var a=[];return this.each(function(u,d){a.push(d.key)}).then(function(){return a}).then(i)},Ee.prototype.primaryKeys=function(i){var s=this._ctx;if(s.dir==="next"&&_n(s,!0)&&0<s.limit)return this._read(function(u){var d=sr(s,s.table.core.schema);return s.table.core.query({trans:u,values:!1,limit:s.limit,query:{index:d,range:s.range}})}).then(function(u){return u.result}).then(i);s.keysOnly=!s.isMatch;var a=[];return this.each(function(u,d){a.push(d.primaryKey)}).then(function(){return a}).then(i)},Ee.prototype.uniqueKeys=function(i){return this._ctx.unique="unique",this.keys(i)},Ee.prototype.firstKey=function(i){return this.limit(1).keys(function(s){return s[0]}).then(i)},Ee.prototype.lastKey=function(i){return this.reverse().firstKey(i)},Ee.prototype.distinct=function(){var i=this._ctx,i=i.index&&i.table.schema.idxByName[i.index];if(!i||!i.multi)return this;var s={};return Qr(this._ctx,function(d){var u=d.primaryKey.toString(),d=R(s,u);return s[u]=!0,!d}),this},Ee.prototype.modify=function(i){var s=this,a=this._ctx;return this._write(function(u){var d,h,g;g=typeof i=="function"?i:(d=c(i),h=d.length,function(k){for(var z=!1,I=0;I<h;++I){var B=d[I],L=i[B],N=kt(k,B);L instanceof Ln?(st(k,B,L.execute(N)),z=!0):N!==L&&(st(k,B,L),z=!0)}return z});var y=a.table.core,v=y.schema.primaryKey,$=v.outbound,C=v.extractKey,S=200,v=s.db._options.modifyChunkSize;v&&(S=typeof v=="object"?v[y.name]||v["*"]||200:v);function A(k,B){var I=B.failures,B=B.numFailures;_+=k-B;for(var L=0,N=c(I);L<N.length;L++){var X=N[L];E.push(I[X])}}var E=[],_=0,P=[];return s.clone().primaryKeys().then(function(k){function z(B){var L=Math.min(S,k.length-B);return y.getMany({trans:u,keys:k.slice(B,B+L),cache:"immutable"}).then(function(N){for(var X=[],q=[],W=$?[]:null,J=[],Y=0;Y<L;++Y){var te=N[Y],de={value:D(te),primKey:k[B+Y]};g.call(de,de.value,de)!==!1&&(de.value==null?J.push(k[B+Y]):$||ye(C(te),C(de.value))===0?(q.push(de.value),$&&W.push(k[B+Y])):(J.push(k[B+Y]),X.push(de.value)))}return Promise.resolve(0<X.length&&y.mutate({trans:u,type:"add",values:X}).then(function(he){for(var pe in he.failures)J.splice(parseInt(pe),1);A(X.length,he)})).then(function(){return(0<q.length||I&&typeof i=="object")&&y.mutate({trans:u,type:"put",keys:W,values:q,criteria:I,changeSpec:typeof i!="function"&&i,isAdditionalChunk:0<B}).then(function(he){return A(q.length,he)})}).then(function(){return(0<J.length||I&&i===Zr)&&y.mutate({trans:u,type:"delete",keys:J,criteria:I,isAdditionalChunk:0<B}).then(function(he){return A(J.length,he)})}).then(function(){return k.length>B+L&&z(B+S)})})}var I=_n(a)&&a.limit===1/0&&(typeof i!="function"||i===Zr)&&{index:a.index,range:a.range};return z(0).then(function(){if(0<E.length)throw new me("Error modifying one or more objects",E,_,P);return k.length})})})},Ee.prototype.delete=function(){var i=this._ctx,s=i.range;return _n(i)&&(i.isPrimKey||s.type===3)?this._write(function(a){var u=i.table.core.schema.primaryKey,d=s;return i.table.core.count({trans:a,query:{index:u,range:d}}).then(function(h){return i.table.core.mutate({trans:a,type:"deleteRange",range:d}).then(function(g){var y=g.failures;if(g.lastResult,g.results,g=g.numFailures,g)throw new me("Could not delete some values",Object.keys(y).map(function($){return y[$]}),h-g);return h-g})})}):this.modify(Zr)},Ee);function Ee(){}var Zr=function(i,s){return s.value=null};function Js(i,s){return i<s?-1:i===s?0:1}function Zs(i,s){return s<i?-1:i===s?0:1}function wt(i,s,a){return i=i instanceof oo?new i.Collection(i):i,i._ctx.error=new(a||TypeError)(s),i}function Sn(i){return new i.Collection(i,function(){return io("")}).limit(0)}function lr(i,s,a,u){var d,h,g,y,$,C,S,v=a.length;if(!a.every(function(_){return typeof _=="string"}))return wt(i,Xi);function A(_){d=_==="next"?function(k){return k.toUpperCase()}:function(k){return k.toLowerCase()},h=_==="next"?function(k){return k.toLowerCase()}:function(k){return k.toUpperCase()},g=_==="next"?Js:Zs;var P=a.map(function(k){return{lower:h(k),upper:d(k)}}).sort(function(k,z){return g(k.lower,z.lower)});y=P.map(function(k){return k.upper}),$=P.map(function(k){return k.lower}),S=(C=_)==="next"?"":u}A("next"),i=new i.Collection(i,function(){return nn(y[0],$[v-1]+u)}),i._ondirectionchange=function(_){A(_)};var E=0;return i._addAlgorithm(function(_,P,k){var z=_.key;if(typeof z!="string")return!1;var I=h(z);if(s(I,$,E))return!0;for(var B=null,L=E;L<v;++L){var N=(function(X,q,W,J,Y,te){for(var de=Math.min(X.length,J.length),he=-1,pe=0;pe<de;++pe){var xt=q[pe];if(xt!==J[pe])return Y(X[pe],W[pe])<0?X.substr(0,pe)+W[pe]+W.substr(pe+1):Y(X[pe],J[pe])<0?X.substr(0,pe)+J[pe]+W.substr(pe+1):0<=he?X.substr(0,he)+q[he]+W.substr(he+1):null;Y(X[pe],xt)<0&&(he=pe)}return de<J.length&&te==="next"?X+W.substr(X.length):de<X.length&&te==="prev"?X.substr(0,W.length):he<0?null:X.substr(0,he)+J[he]+W.substr(he+1)})(z,I,y[L],$[L],g,C);N===null&&B===null?E=L+1:(B===null||0<g(B,N))&&(B=N)}return P(B!==null?function(){_.continue(B+S)}:k),!1}),i}function nn(i,s,a,u){return{type:2,lower:i,upper:s,lowerOpen:a,upperOpen:u}}function io(i){return{type:1,lower:i,upper:i}}var oo=(Object.defineProperty(rt.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),rt.prototype.between=function(i,s,a,u){a=a!==!1,u=u===!0;try{return 0<this._cmp(i,s)||this._cmp(i,s)===0&&(a||u)&&(!a||!u)?Sn(this):new this.Collection(this,function(){return nn(i,s,!a,!u)})}catch{return wt(this,Ht)}},rt.prototype.equals=function(i){return i==null?wt(this,Ht):new this.Collection(this,function(){return io(i)})},rt.prototype.above=function(i){return i==null?wt(this,Ht):new this.Collection(this,function(){return nn(i,void 0,!0)})},rt.prototype.aboveOrEqual=function(i){return i==null?wt(this,Ht):new this.Collection(this,function(){return nn(i,void 0,!1)})},rt.prototype.below=function(i){return i==null?wt(this,Ht):new this.Collection(this,function(){return nn(void 0,i,!1,!0)})},rt.prototype.belowOrEqual=function(i){return i==null?wt(this,Ht):new this.Collection(this,function(){return nn(void 0,i)})},rt.prototype.startsWith=function(i){return typeof i!="string"?wt(this,Xi):this.between(i,i+un,!0,!0)},rt.prototype.startsWithIgnoreCase=function(i){return i===""?this.startsWith(i):lr(this,function(s,a){return s.indexOf(a[0])===0},[i],un)},rt.prototype.equalsIgnoreCase=function(i){return lr(this,function(s,a){return s===a[0]},[i],"")},rt.prototype.anyOfIgnoreCase=function(){var i=Ie.apply(U,arguments);return i.length===0?Sn(this):lr(this,function(s,a){return a.indexOf(s)!==-1},i,"")},rt.prototype.startsWithAnyOfIgnoreCase=function(){var i=Ie.apply(U,arguments);return i.length===0?Sn(this):lr(this,function(s,a){return a.some(function(u){return s.indexOf(u)===0})},i,un)},rt.prototype.anyOf=function(){var i=this,s=Ie.apply(U,arguments),a=this._cmp;try{s.sort(a)}catch{return wt(this,Ht)}if(s.length===0)return Sn(this);var u=new this.Collection(this,function(){return nn(s[0],s[s.length-1])});u._ondirectionchange=function(h){a=h==="next"?i._ascending:i._descending,s.sort(a)};var d=0;return u._addAlgorithm(function(h,g,y){for(var $=h.key;0<a($,s[d]);)if(++d===s.length)return g(y),!1;return a($,s[d])===0||(g(function(){h.continue(s[d])}),!1)}),u},rt.prototype.notEqual=function(i){return this.inAnyRange([[-1/0,i],[i,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},rt.prototype.noneOf=function(){var i=Ie.apply(U,arguments);if(i.length===0)return new this.Collection(this);try{i.sort(this._ascending)}catch{return wt(this,Ht)}var s=i.reduce(function(a,u){return a?a.concat([[a[a.length-1][1],u]]):[[-1/0,u]]},null);return s.push([i[i.length-1],this.db._maxKey]),this.inAnyRange(s,{includeLowers:!1,includeUppers:!1})},rt.prototype.inAnyRange=function(z,s){var a=this,u=this._cmp,d=this._ascending,h=this._descending,g=this._min,y=this._max;if(z.length===0)return Sn(this);if(!z.every(function(I){return I[0]!==void 0&&I[1]!==void 0&&d(I[0],I[1])<=0}))return wt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",Q.InvalidArgument);var $=!s||s.includeLowers!==!1,C=s&&s.includeUppers===!0,S,v=d;function A(I,B){return v(I[0],B[0])}try{(S=z.reduce(function(I,B){for(var L=0,N=I.length;L<N;++L){var X=I[L];if(u(B[0],X[1])<0&&0<u(B[1],X[0])){X[0]=g(X[0],B[0]),X[1]=y(X[1],B[1]);break}}return L===N&&I.push(B),I},[])).sort(A)}catch{return wt(this,Ht)}var E=0,_=C?function(I){return 0<d(I,S[E][1])}:function(I){return 0<=d(I,S[E][1])},P=$?function(I){return 0<h(I,S[E][0])}:function(I){return 0<=h(I,S[E][0])},k=_,z=new this.Collection(this,function(){return nn(S[0][0],S[S.length-1][1],!$,!C)});return z._ondirectionchange=function(I){v=I==="next"?(k=_,d):(k=P,h),S.sort(A)},z._addAlgorithm(function(I,B,L){for(var N,X=I.key;k(X);)if(++E===S.length)return B(L),!1;return!_(N=X)&&!P(N)||(a._cmp(X,S[E][1])===0||a._cmp(X,S[E][0])===0||B(function(){v===d?I.continue(S[E][0]):I.continue(S[E][1])}),!1)}),z},rt.prototype.startsWithAnyOf=function(){var i=Ie.apply(U,arguments);return i.every(function(s){return typeof s=="string"})?i.length===0?Sn(this):this.inAnyRange(i.map(function(s){return[s,s+un]})):wt(this,"startsWithAnyOf() only works with strings")},rt);function rt(){}function Lt(i){return Te(function(s){return Mn(s),i(s.target.error),!1})}function Mn(i){i.stopPropagation&&i.stopPropagation(),i.preventDefault&&i.preventDefault()}var Nn="storagemutated",ei="x-storagemutated-1",rn=In(null,Nn),ea=(Mt.prototype._lock=function(){return ln(!K.global),++this._reculock,this._reculock!==1||K.global||(K.lockOwnerFor=this),this},Mt.prototype._unlock=function(){if(ln(!K.global),--this._reculock==0)for(K.global||(K.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var i=this._blockedFuncs.shift();try{cn(i[1],i[0])}catch{}}return this},Mt.prototype._locked=function(){return this._reculock&&K.lockOwnerFor!==this},Mt.prototype.create=function(i){var s=this;if(!this.mode)return this;var a=this.db.idbdb,u=this.db._state.dbOpenError;if(ln(!this.idbtrans),!i&&!a)switch(u&&u.name){case"DatabaseClosedError":throw new Q.DatabaseClosed(u);case"MissingAPIError":throw new Q.MissingAPI(u.message,u);default:throw new Q.OpenFailed(u)}if(!this.active)throw new Q.TransactionInactive;return ln(this._completion._state===null),(i=this.idbtrans=i||(this.db.core||a).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Te(function(d){Mn(d),s._reject(i.error)}),i.onabort=Te(function(d){Mn(d),s.active&&s._reject(new Q.Abort(i.error)),s.active=!1,s.on("abort").fire(d)}),i.oncomplete=Te(function(){s.active=!1,s._resolve(),"mutatedParts"in i&&rn.storagemutated.fire(i.mutatedParts)}),this},Mt.prototype._promise=function(i,s,a){var u=this;if(i==="readwrite"&&this.mode!=="readwrite")return Ve(new Q.ReadOnly("Transaction is readonly"));if(!this.active)return Ve(new Q.TransactionInactive);if(this._locked())return new V(function(h,g){u._blockedFuncs.push([function(){u._promise(i,s,a).then(h,g)},K])});if(a)return Zt(function(){var h=new V(function(g,y){u._lock();var $=s(g,y,u);$&&$.then&&$.then(g,y)});return h.finally(function(){return u._unlock()}),h._lib=!0,h});var d=new V(function(h,g){var y=s(h,g,u);y&&y.then&&y.then(h,g)});return d._lib=!0,d},Mt.prototype._root=function(){return this.parent?this.parent._root():this},Mt.prototype.waitFor=function(i){var s,a=this._root(),u=V.resolve(i);a._waitingFor?a._waitingFor=a._waitingFor.then(function(){return u}):(a._waitingFor=u,a._waitingQueue=[],s=a.idbtrans.objectStore(a.storeNames[0]),(function h(){for(++a._spinCount;a._waitingQueue.length;)a._waitingQueue.shift()();a._waitingFor&&(s.get(-1/0).onsuccess=h)})());var d=a._waitingFor;return new V(function(h,g){u.then(function(y){return a._waitingQueue.push(Te(h.bind(null,y)))},function(y){return a._waitingQueue.push(Te(g.bind(null,y)))}).finally(function(){a._waitingFor===d&&(a._waitingFor=null)})})},Mt.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new Q.Abort))},Mt.prototype.table=function(i){var s=this._memoizedTables||(this._memoizedTables={});if(R(s,i))return s[i];var a=this.schema[i];if(!a)throw new Q.NotFound("Table "+i+" not part of transaction");return a=new this.db.Table(i,a,this),a.core=this.db.core.table(i),s[i]=a},Mt);function Mt(){}function ti(i,s,a,u,d,h,g){return{name:i,keyPath:s,unique:a,multi:u,auto:d,compound:h,src:(a&&!g?"&":"")+(u?"*":"")+(d?"++":"")+so(s)}}function so(i){return typeof i=="string"?i:i?"["+[].join.call(i,"+")+"]":""}function ni(i,s,a){return{name:i,primKey:s,indexes:a,mappedClass:null,idxByName:(u=function(d){return[d.name,d]},a.reduce(function(d,h,g){return g=u(h,g),g&&(d[g[0]]=g[1]),d},{}))};var u}var qn=function(i){try{return i.only([[]]),qn=function(){return[[]]},[[]]}catch{return qn=function(){return un},un}};function ri(i){return i==null?function(){}:typeof i=="string"?(s=i).split(".").length===1?function(a){return a[s]}:function(a){return kt(a,s)}:function(a){return kt(a,i)};var s}function ao(i){return[].slice.call(i)}var ta=0;function Un(i){return i==null?":id":typeof i=="string"?i:"[".concat(i.join("+"),"]")}function na(i,s,$){function u(k){if(k.type===3)return null;if(k.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var E=k.lower,_=k.upper,P=k.lowerOpen,k=k.upperOpen;return E===void 0?_===void 0?null:s.upperBound(_,!!k):_===void 0?s.lowerBound(E,!!P):s.bound(E,_,!!P,!!k)}function d(A){var E,_=A.name;return{name:_,schema:A,mutate:function(P){var k=P.trans,z=P.type,I=P.keys,B=P.values,L=P.range;return new Promise(function(N,X){N=Te(N);var q=k.objectStore(_),W=q.keyPath==null,J=z==="put"||z==="add";if(!J&&z!=="delete"&&z!=="deleteRange")throw new Error("Invalid operation type: "+z);var Y,te=(I||B||{length:1}).length;if(I&&B&&I.length!==B.length)throw new Error("Given keys array must have same length as given values array.");if(te===0)return N({numFailures:0,failures:{},results:[],lastResult:void 0});function de(pt){++xt,Mn(pt)}var he=[],pe=[],xt=0;if(z==="deleteRange"){if(L.type===4)return N({numFailures:xt,failures:pe,results:[],lastResult:void 0});L.type===3?he.push(Y=q.clear()):he.push(Y=q.delete(u(L)))}else{var W=J?W?[B,I]:[B,null]:[I,null],ue=W[0],ct=W[1];if(J)for(var ut=0;ut<te;++ut)he.push(Y=ct&&ct[ut]!==void 0?q[z](ue[ut],ct[ut]):q[z](ue[ut])),Y.onerror=de;else for(ut=0;ut<te;++ut)he.push(Y=q[z](ue[ut])),Y.onerror=de}function xr(pt){pt=pt.target.result,he.forEach(function(pn,xi){return pn.error!=null&&(pe[xi]=pn.error)}),N({numFailures:xt,failures:pe,results:z==="delete"?I:he.map(function(pn){return pn.result}),lastResult:pt})}Y.onerror=function(pt){de(pt),xr(pt)},Y.onsuccess=xr})},getMany:function(P){var k=P.trans,z=P.keys;return new Promise(function(I,B){I=Te(I);for(var L,N=k.objectStore(_),X=z.length,q=new Array(X),W=0,J=0,Y=function(he){he=he.target,q[he._pos]=he.result,++J===W&&I(q)},te=Lt(B),de=0;de<X;++de)z[de]!=null&&((L=N.get(z[de]))._pos=de,L.onsuccess=Y,L.onerror=te,++W);W===0&&I(q)})},get:function(P){var k=P.trans,z=P.key;return new Promise(function(I,B){I=Te(I);var L=k.objectStore(_).get(z);L.onsuccess=function(N){return I(N.target.result)},L.onerror=Lt(B)})},query:(E=C,function(P){return new Promise(function(k,z){k=Te(k);var I,B,L,W=P.trans,N=P.values,X=P.limit,Y=P.query,q=X===1/0?void 0:X,J=Y.index,Y=Y.range,W=W.objectStore(_),J=J.isPrimaryKey?W:W.index(J.name),Y=u(Y);if(X===0)return k({result:[]});E?((q=N?J.getAll(Y,q):J.getAllKeys(Y,q)).onsuccess=function(te){return k({result:te.target.result})},q.onerror=Lt(z)):(I=0,B=!N&&"openKeyCursor"in J?J.openKeyCursor(Y):J.openCursor(Y),L=[],B.onsuccess=function(te){var de=B.result;return de?(L.push(N?de.value:de.primaryKey),++I===X?k({result:L}):void de.continue()):k({result:L})},B.onerror=Lt(z))})}),openCursor:function(P){var k=P.trans,z=P.values,I=P.query,B=P.reverse,L=P.unique;return new Promise(function(N,X){N=Te(N);var J=I.index,q=I.range,W=k.objectStore(_),W=J.isPrimaryKey?W:W.index(J.name),J=B?L?"prevunique":"prev":L?"nextunique":"next",Y=!z&&"openKeyCursor"in W?W.openKeyCursor(u(q),J):W.openCursor(u(q),J);Y.onerror=Lt(X),Y.onsuccess=Te(function(te){var de,he,pe,xt,ue=Y.result;ue?(ue.___id=++ta,ue.done=!1,de=ue.continue.bind(ue),he=(he=ue.continuePrimaryKey)&&he.bind(ue),pe=ue.advance.bind(ue),xt=function(){throw new Error("Cursor not stopped")},ue.trans=k,ue.stop=ue.continue=ue.continuePrimaryKey=ue.advance=function(){throw new Error("Cursor not started")},ue.fail=Te(X),ue.next=function(){var ct=this,ut=1;return this.start(function(){return ut--?ct.continue():ct.stop()}).then(function(){return ct})},ue.start=function(ct){function ut(){if(Y.result)try{ct()}catch(pt){ue.fail(pt)}else ue.done=!0,ue.start=function(){throw new Error("Cursor behind last entry")},ue.stop()}var xr=new Promise(function(pt,pn){pt=Te(pt),Y.onerror=Lt(pn),ue.fail=pn,ue.stop=function(xi){ue.stop=ue.continue=ue.continuePrimaryKey=ue.advance=xt,pt(xi)}});return Y.onsuccess=Te(function(pt){Y.onsuccess=ut,ut()}),ue.continue=de,ue.continuePrimaryKey=he,ue.advance=pe,ut(),xr},N(ue)):N(null)},X)})},count:function(P){var k=P.query,z=P.trans,I=k.index,B=k.range;return new Promise(function(L,N){var X=z.objectStore(_),q=I.isPrimaryKey?X:X.index(I.name),X=u(B),q=X?q.count(X):q.count();q.onsuccess=Te(function(W){return L(W.target.result)}),q.onerror=Lt(N)})}}}var h,g,y,S=(g=$,y=ao((h=i).objectStoreNames),{schema:{name:h.name,tables:y.map(function(A){return g.objectStore(A)}).map(function(A){var E=A.keyPath,k=A.autoIncrement,_=f(E),P={},k={name:A.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:E==null,compound:_,keyPath:E,autoIncrement:k,unique:!0,extractKey:ri(E)},indexes:ao(A.indexNames).map(function(z){return A.index(z)}).map(function(L){var I=L.name,B=L.unique,N=L.multiEntry,L=L.keyPath,N={name:I,compound:f(L),keyPath:L,unique:B,multiEntry:N,extractKey:ri(L)};return P[Un(L)]=N}),getIndexByKeyPath:function(z){return P[Un(z)]}};return P[":id"]=k.primaryKey,E!=null&&(P[Un(E)]=k.primaryKey),k})},hasGetAll:0<y.length&&"getAll"in g.objectStore(y[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),$=S.schema,C=S.hasGetAll,S=$.tables.map(d),v={};return S.forEach(function(A){return v[A.name]=A}),{stack:"dbcore",transaction:i.transaction.bind(i),table:function(A){if(!v[A])throw new Error("Table '".concat(A,"' not found"));return v[A]},MIN_KEY:-1/0,MAX_KEY:qn(s),schema:$}}function ra(i,s,a,u){var d=a.IDBKeyRange;return a.indexedDB,{dbcore:(u=na(s,d,u),i.dbcore.reduce(function(h,g){return g=g.create,o(o({},h),g(h))},u))}}function cr(i,u){var a=u.db,u=ra(i._middlewares,a,i._deps,u);i.core=u.dbcore,i.tables.forEach(function(d){var h=d.name;i.core.schema.tables.some(function(g){return g.name===h})&&(d.core=i.core.table(h),i[h]instanceof i.Table&&(i[h].core=d.core))})}function ur(i,s,a,u){a.forEach(function(d){var h=u[d];s.forEach(function(g){var y=(function $(C,S){return Ze(C,S)||(C=T(C))&&$(C,S)})(g,d);(!y||"value"in y&&y.value===void 0)&&(g===i.Transaction.prototype||g instanceof i.Transaction?Z(g,d,{get:function(){return this.table(d)},set:function($){H(this,d,{value:$,writable:!0,configurable:!0,enumerable:!0})}}):g[d]=new i.Table(d,h))})})}function ii(i,s){s.forEach(function(a){for(var u in a)a[u]instanceof i.Table&&delete a[u]})}function ia(i,s){return i._cfg.version-s._cfg.version}function oa(i,s,a,u){var d=i._dbSchema;a.objectStoreNames.contains("$meta")&&!d.$meta&&(d.$meta=ni("$meta",co("")[0],[]),i._storeNames.push("$meta"));var h=i._createTransaction("readwrite",i._storeNames,d);h.create(a),h._completion.catch(u);var g=h._reject.bind(h),y=K.transless||K;Zt(function(){return K.trans=h,K.transless=y,s!==0?(cr(i,a),C=s,(($=h).storeNames.includes("$meta")?$.table("$meta").get("version").then(function(S){return S??C}):V.resolve(C)).then(function(S){return A=S,E=h,_=a,P=[],S=(v=i)._versions,k=v._dbSchema=fr(0,v.idbdb,_),(S=S.filter(function(z){return z._cfg.version>=A})).length!==0?(S.forEach(function(z){P.push(function(){var I=k,B=z._cfg.dbschema;hr(v,I,_),hr(v,B,_),k=v._dbSchema=B;var L=oi(I,B);L.add.forEach(function(J){si(_,J[0],J[1].primKey,J[1].indexes)}),L.change.forEach(function(J){if(J.recreate)throw new Q.Upgrade("Not yet support for changing primary key");var Y=_.objectStore(J.name);J.add.forEach(function(te){return dr(Y,te)}),J.change.forEach(function(te){Y.deleteIndex(te.name),dr(Y,te)}),J.del.forEach(function(te){return Y.deleteIndex(te)})});var N=z._cfg.contentUpgrade;if(N&&z._cfg.version>A){cr(v,_),E._memoizedTables={};var X=Ut(B);L.del.forEach(function(J){X[J]=I[J]}),ii(v,[v.Transaction.prototype]),ur(v,[v.Transaction.prototype],c(X),X),E.schema=X;var q,W=Xe(N);return W&&Cn(),L=V.follow(function(){var J;(q=N(E))&&W&&(J=en.bind(null,null),q.then(J,J))}),q&&typeof q.then=="function"?V.resolve(q):L.then(function(){return q})}}),P.push(function(I){var B,L,N=z._cfg.dbschema;B=N,L=I,[].slice.call(L.db.objectStoreNames).forEach(function(X){return B[X]==null&&L.db.deleteObjectStore(X)}),ii(v,[v.Transaction.prototype]),ur(v,[v.Transaction.prototype],v._storeNames,v._dbSchema),E.schema=v._dbSchema}),P.push(function(I){v.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(v.idbdb.version/10)===z._cfg.version?(v.idbdb.deleteObjectStore("$meta"),delete v._dbSchema.$meta,v._storeNames=v._storeNames.filter(function(B){return B!=="$meta"})):I.objectStore("$meta").put(z._cfg.version,"version"))})}),(function z(){return P.length?V.resolve(P.shift()(E.idbtrans)).then(z):V.resolve()})().then(function(){lo(k,_)})):V.resolve();var v,A,E,_,P,k}).catch(g)):(c(d).forEach(function(S){si(a,S,d[S].primKey,d[S].indexes)}),cr(i,a),void V.follow(function(){return i.on.populate.fire(h)}).catch(g));var $,C})}function sa(i,s){lo(i._dbSchema,s),s.db.version%10!=0||s.objectStoreNames.contains("$meta")||s.db.createObjectStore("$meta").add(Math.ceil(s.db.version/10-1),"version");var a=fr(0,i.idbdb,s);hr(i,i._dbSchema,s);for(var u=0,d=oi(a,i._dbSchema).change;u<d.length;u++){var h=(function(g){if(g.change.length||g.recreate)return console.warn("Unable to patch indexes of table ".concat(g.name," because it has changes on the type of index or primary key.")),{value:void 0};var y=s.objectStore(g.name);g.add.forEach(function($){ke&&console.debug("Dexie upgrade patch: Creating missing index ".concat(g.name,".").concat($.src)),dr(y,$)})})(d[u]);if(typeof h=="object")return h.value}}function oi(i,s){var a,u={del:[],add:[],change:[]};for(a in i)s[a]||u.del.push(a);for(a in s){var d=i[a],h=s[a];if(d){var g={name:a,def:h,recreate:!1,del:[],add:[],change:[]};if(""+(d.primKey.keyPath||"")!=""+(h.primKey.keyPath||"")||d.primKey.auto!==h.primKey.auto)g.recreate=!0,u.change.push(g);else{var y=d.idxByName,$=h.idxByName,C=void 0;for(C in y)$[C]||g.del.push(C);for(C in $){var S=y[C],v=$[C];S?S.src!==v.src&&g.change.push(v):g.add.push(v)}(0<g.del.length||0<g.add.length||0<g.change.length)&&u.change.push(g)}}else u.add.push([a,h])}return u}function si(i,s,a,u){var d=i.db.createObjectStore(s,a.keyPath?{keyPath:a.keyPath,autoIncrement:a.auto}:{autoIncrement:a.auto});return u.forEach(function(h){return dr(d,h)}),d}function lo(i,s){c(i).forEach(function(a){s.db.objectStoreNames.contains(a)||(ke&&console.debug("Dexie: Creating missing table",a),si(s,a,i[a].primKey,i[a].indexes))})}function dr(i,s){i.createIndex(s.name,s.keyPath,{unique:s.unique,multiEntry:s.multi})}function fr(i,s,a){var u={};return et(s.objectStoreNames,0).forEach(function(d){for(var h=a.objectStore(d),g=ti(so(C=h.keyPath),C||"",!0,!1,!!h.autoIncrement,C&&typeof C!="string",!0),y=[],$=0;$<h.indexNames.length;++$){var S=h.index(h.indexNames[$]),C=S.keyPath,S=ti(S.name,C,!!S.unique,!!S.multiEntry,!1,C&&typeof C!="string",!1);y.push(S)}u[d]=ni(d,g,y)}),u}function hr(i,s,a){for(var u=a.db.objectStoreNames,d=0;d<u.length;++d){var h=u[d],g=a.objectStore(h);i._hasGetAll="getAll"in g;for(var y=0;y<g.indexNames.length;++y){var $=g.indexNames[y],C=g.index($).keyPath,S=typeof C=="string"?C:"["+et(C).join("+")+"]";!s[h]||(C=s[h].idxByName[S])&&(C.name=$,delete s[h].idxByName[S],s[h].idxByName[$]=C)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&l.WorkerGlobalScope&&l instanceof l.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(i._hasGetAll=!1)}function co(i){return i.split(",").map(function(s,a){var u=(s=s.trim()).replace(/([&*]|\+\+)/g,""),d=/^\[/.test(u)?u.match(/^\[(.*)\]$/)[1].split("+"):u;return ti(u,d||null,/\&/.test(s),/\*/.test(s),/\+\+/.test(s),f(d),a===0)})}var aa=(pr.prototype._parseStoresSpec=function(i,s){c(i).forEach(function(a){if(i[a]!==null){var u=co(i[a]),d=u.shift();if(d.unique=!0,d.multi)throw new Q.Schema("Primary key cannot be multi-valued");u.forEach(function(h){if(h.auto)throw new Q.Schema("Only primary key can be marked as autoIncrement (++)");if(!h.keyPath)throw new Q.Schema("Index must have a name and cannot be an empty string")}),s[a]=ni(a,d,u)}})},pr.prototype.stores=function(a){var s=this.db;this._cfg.storesSource=this._cfg.storesSource?m(this._cfg.storesSource,a):a;var a=s._versions,u={},d={};return a.forEach(function(h){m(u,h._cfg.storesSource),d=h._cfg.dbschema={},h._parseStoresSpec(u,d)}),s._dbSchema=d,ii(s,[s._allTables,s,s.Transaction.prototype]),ur(s,[s._allTables,s,s.Transaction.prototype,this._cfg.tables],c(d),d),s._storeNames=c(d),this},pr.prototype.upgrade=function(i){return this._cfg.contentUpgrade=yt(this._cfg.contentUpgrade||se,i),this},pr);function pr(){}function ai(i,s){var a=i._dbNamesDB;return a||(a=i._dbNamesDB=new Vt(ir,{addons:[],indexedDB:i,IDBKeyRange:s})).version(1).stores({dbnames:"name"}),a.table("dbnames")}function li(i){return i&&typeof i.databases=="function"}function ci(i){return Zt(function(){return K.letThrough=!0,i()})}function ui(i){return!("from"in i)}var lt=function(i,s){if(!this){var a=new lt;return i&&"d"in i&&m(a,i),a}m(this,arguments.length?{d:1,from:i,to:1<arguments.length?s:i}:{d:0})};function Wn(i,s,a){var u=ye(s,a);if(!isNaN(u)){if(0<u)throw RangeError();if(ui(i))return m(i,{from:s,to:a,d:1});var d=i.l,u=i.r;if(ye(a,i.from)<0)return d?Wn(d,s,a):i.l={from:s,to:a,d:1,l:null,r:null},fo(i);if(0<ye(s,i.to))return u?Wn(u,s,a):i.r={from:s,to:a,d:1,l:null,r:null},fo(i);ye(s,i.from)<0&&(i.from=s,i.l=null,i.d=u?u.d+1:1),0<ye(a,i.to)&&(i.to=a,i.r=null,i.d=i.l?i.l.d+1:1),a=!i.r,d&&!i.l&&Hn(i,d),u&&a&&Hn(i,u)}}function Hn(i,s){ui(s)||(function a(u,$){var h=$.from,g=$.to,y=$.l,$=$.r;Wn(u,h,g),y&&a(u,y),$&&a(u,$)})(i,s)}function uo(i,s){var a=mr(s),u=a.next();if(u.done)return!1;for(var d=u.value,h=mr(i),g=h.next(d.from),y=g.value;!u.done&&!g.done;){if(ye(y.from,d.to)<=0&&0<=ye(y.to,d.from))return!0;ye(d.from,y.from)<0?d=(u=a.next(y.from)).value:y=(g=h.next(d.from)).value}return!1}function mr(i){var s=ui(i)?null:{s:0,n:i};return{next:function(a){for(var u=0<arguments.length;s;)switch(s.s){case 0:if(s.s=1,u)for(;s.n.l&&ye(a,s.n.from)<0;)s={up:s,n:s.n.l,s:1};else for(;s.n.l;)s={up:s,n:s.n.l,s:1};case 1:if(s.s=2,!u||ye(a,s.n.to)<=0)return{value:s.n,done:!1};case 2:if(s.n.r){s.s=3,s={up:s,n:s.n.r,s:0};continue}case 3:s=s.up}return{done:!0}}}}function fo(i){var s,a,u=(((s=i.r)===null||s===void 0?void 0:s.d)||0)-(((a=i.l)===null||a===void 0?void 0:a.d)||0),d=1<u?"r":u<-1?"l":"";d&&(s=d=="r"?"l":"r",a=o({},i),u=i[d],i.from=u.from,i.to=u.to,i[d]=u[d],a[d]=u[s],(i[s]=a).d=ho(a)),i.d=ho(i)}function ho(a){var s=a.r,a=a.l;return(s?a?Math.max(s.d,a.d):s.d:a?a.d:0)+1}function gr(i,s){return c(s).forEach(function(a){i[a]?Hn(i[a],s[a]):i[a]=(function u(d){var h,g,y={};for(h in d)R(d,h)&&(g=d[h],y[h]=!g||typeof g!="object"||p.has(g.constructor)?g:u(g));return y})(s[a])}),i}function di(i,s){return i.all||s.all||Object.keys(i).some(function(a){return s[a]&&uo(s[a],i[a])})}F(lt.prototype,((_t={add:function(i){return Hn(this,i),this},addKey:function(i){return Wn(this,i,i),this},addKeys:function(i){var s=this;return i.forEach(function(a){return Wn(s,a,a)}),this},hasKey:function(i){var s=mr(this).next(i).value;return s&&ye(s.from,i)<=0&&0<=ye(s.to,i)}})[ie]=function(){return mr(this)},_t));var fn={},fi={},hi=!1;function br(i){gr(fi,i),hi||(hi=!0,setTimeout(function(){hi=!1,pi(fi,!(fi={}))},0))}function pi(i,s){s===void 0&&(s=!1);var a=new Set;if(i.all)for(var u=0,d=Object.values(fn);u<d.length;u++)po(g=d[u],i,a,s);else for(var h in i){var g,y=/^idb\:\/\/(.*)\/(.*)\//.exec(h);y&&(h=y[1],y=y[2],(g=fn["idb://".concat(h,"/").concat(y)])&&po(g,i,a,s))}a.forEach(function($){return $()})}function po(i,s,a,u){for(var d=[],h=0,g=Object.entries(i.queries.query);h<g.length;h++){for(var y=g[h],$=y[0],C=[],S=0,v=y[1];S<v.length;S++){var A=v[S];di(s,A.obsSet)?A.subscribers.forEach(function(k){return a.add(k)}):u&&C.push(A)}u&&d.push([$,C])}if(u)for(var E=0,_=d;E<_.length;E++){var P=_[E],$=P[0],C=P[1];i.queries.query[$]=C}}function la(i){var s=i._state,a=i._deps.indexedDB;if(s.isBeingOpened||i.idbdb)return s.dbReadyPromise.then(function(){return s.dbOpenError?Ve(s.dbOpenError):i});s.isBeingOpened=!0,s.dbOpenError=null,s.openComplete=!1;var u=s.openCanceller,d=Math.round(10*i.verno),h=!1;function g(){if(s.openCanceller!==u)throw new Q.DatabaseClosed("db.open() was cancelled")}function y(){return new V(function(A,E){if(g(),!a)throw new Q.MissingAPI;var _=i.name,P=s.autoSchema||!d?a.open(_):a.open(_,d);if(!P)throw new Q.MissingAPI;P.onerror=Lt(E),P.onblocked=Te(i._fireOnBlocked),P.onupgradeneeded=Te(function(k){var z;S=P.transaction,s.autoSchema&&!i._options.allowEmptyDB?(P.onerror=Mn,S.abort(),P.result.close(),(z=a.deleteDatabase(_)).onsuccess=z.onerror=Te(function(){E(new Q.NoSuchDatabase("Database ".concat(_," doesnt exist")))})):(S.onerror=Lt(E),k=k.oldVersion>Math.pow(2,62)?0:k.oldVersion,v=k<1,i.idbdb=P.result,h&&sa(i,S),oa(i,k/10,S,E))},E),P.onsuccess=Te(function(){S=null;var k,z,I,B,L,N=i.idbdb=P.result,X=et(N.objectStoreNames);if(0<X.length)try{var q=N.transaction((B=X).length===1?B[0]:B,"readonly");if(s.autoSchema)z=N,I=q,(k=i).verno=z.version/10,I=k._dbSchema=fr(0,z,I),k._storeNames=et(z.objectStoreNames,0),ur(k,[k._allTables],c(I),I);else if(hr(i,i._dbSchema,q),((L=oi(fr(0,(L=i).idbdb,q),L._dbSchema)).add.length||L.change.some(function(W){return W.add.length||W.change.length}))&&!h)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),N.close(),d=N.version+1,h=!0,A(y());cr(i,q)}catch{}kn.push(i),N.onversionchange=Te(function(W){s.vcFired=!0,i.on("versionchange").fire(W)}),N.onclose=Te(function(W){i.on("close").fire(W)}),v&&(L=i._deps,q=_,N=L.indexedDB,L=L.IDBKeyRange,li(N)||q===ir||ai(N,L).put({name:q}).catch(se)),A()},E)}).catch(function(A){switch(A?.name){case"UnknownError":if(0<s.PR1398_maxLoop)return s.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),y();break;case"VersionError":if(0<d)return d=0,y()}return V.reject(A)})}var $,C=s.dbReadyResolve,S=null,v=!1;return V.race([u,(typeof navigator>"u"?V.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(A){function E(){return indexedDB.databases().finally(A)}$=setInterval(E,100),E()}).finally(function(){return clearInterval($)}):Promise.resolve()).then(y)]).then(function(){return g(),s.onReadyBeingFired=[],V.resolve(ci(function(){return i.on.ready.fire(i.vip)})).then(function A(){if(0<s.onReadyBeingFired.length){var E=s.onReadyBeingFired.reduce(yt,se);return s.onReadyBeingFired=[],V.resolve(ci(function(){return E(i.vip)})).then(A)}})}).finally(function(){s.openCanceller===u&&(s.onReadyBeingFired=null,s.isBeingOpened=!1)}).catch(function(A){s.dbOpenError=A;try{S&&S.abort()}catch{}return u===s.openCanceller&&i._close(),Ve(A)}).finally(function(){s.openComplete=!0,C()}).then(function(){var A;return v&&(A={},i.tables.forEach(function(E){E.schema.indexes.forEach(function(_){_.name&&(A["idb://".concat(i.name,"/").concat(E.name,"/").concat(_.name)]=new lt(-1/0,[[[]]]))}),A["idb://".concat(i.name,"/").concat(E.name,"/")]=A["idb://".concat(i.name,"/").concat(E.name,"/:dels")]=new lt(-1/0,[[[]]])}),rn(Nn).fire(A),pi(A,!0)),i})}function mi(i){function s(h){return i.next(h)}var a=d(s),u=d(function(h){return i.throw(h)});function d(h){return function($){var y=h($),$=y.value;return y.done?$:$&&typeof $.then=="function"?$.then(a,u):f($)?Promise.all($).then(a,u):a($)}}return d(s)()}function yr(i,s,a){for(var u=f(i)?i.slice():[i],d=0;d<a;++d)u.push(s);return u}var ca={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(i){return o(o({},i),{table:function(s){var a=i.table(s),u=a.schema,d={},h=[];function g(v,A,E){var _=Un(v),P=d[_]=d[_]||[],k=v==null?0:typeof v=="string"?1:v.length,z=0<A,z=o(o({},E),{name:z?"".concat(_,"(virtual-from:").concat(E.name,")"):E.name,lowLevelIndex:E,isVirtual:z,keyTail:A,keyLength:k,extractKey:ri(v),unique:!z&&E.unique});return P.push(z),z.isPrimaryKey||h.push(z),1<k&&g(k===2?v[0]:v.slice(0,k-1),A+1,E),P.sort(function(I,B){return I.keyTail-B.keyTail}),z}s=g(u.primaryKey.keyPath,0,u.primaryKey),d[":id"]=[s];for(var y=0,$=u.indexes;y<$.length;y++){var C=$[y];g(C.keyPath,0,C)}function S(v){var A,E=v.query.index;return E.isVirtual?o(o({},v),{query:{index:E.lowLevelIndex,range:(A=v.query.range,E=E.keyTail,{type:A.type===1?2:A.type,lower:yr(A.lower,A.lowerOpen?i.MAX_KEY:i.MIN_KEY,E),lowerOpen:!0,upper:yr(A.upper,A.upperOpen?i.MIN_KEY:i.MAX_KEY,E),upperOpen:!0})}}):v}return o(o({},a),{schema:o(o({},u),{primaryKey:s,indexes:h,getIndexByKeyPath:function(v){return(v=d[Un(v)])&&v[0]}}),count:function(v){return a.count(S(v))},query:function(v){return a.query(S(v))},openCursor:function(v){var A=v.query.index,E=A.keyTail,_=A.isVirtual,P=A.keyLength;return _?a.openCursor(S(v)).then(function(z){return z&&k(z)}):a.openCursor(v);function k(z){return Object.create(z,{continue:{value:function(I){I!=null?z.continue(yr(I,v.reverse?i.MAX_KEY:i.MIN_KEY,E)):v.unique?z.continue(z.key.slice(0,P).concat(v.reverse?i.MIN_KEY:i.MAX_KEY,E)):z.continue()}},continuePrimaryKey:{value:function(I,B){z.continuePrimaryKey(yr(I,i.MAX_KEY,E),B)}},primaryKey:{get:function(){return z.primaryKey}},key:{get:function(){var I=z.key;return P===1?I[0]:I.slice(0,P)}},value:{get:function(){return z.value}}})}}})}})}};function gi(i,s,a,u){return a=a||{},u=u||"",c(i).forEach(function(d){var h,g,y;R(s,d)?(h=i[d],g=s[d],typeof h=="object"&&typeof g=="object"&&h&&g?(y=x(h))!==x(g)?a[u+d]=s[d]:y==="Object"?gi(h,g,a,u+d+"."):h!==g&&(a[u+d]=s[d]):h!==g&&(a[u+d]=s[d])):a[u+d]=void 0}),c(s).forEach(function(d){R(i,d)||(a[u+d]=s[d])}),a}function bi(i,s){return s.type==="delete"?s.keys:s.keys||s.values.map(i.extractKey)}var ua={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(i){return o(o({},i),{table:function(s){var a=i.table(s),u=a.schema.primaryKey;return o(o({},a),{mutate:function(d){var h=K.trans,g=h.table(s).hook,y=g.deleting,$=g.creating,C=g.updating;switch(d.type){case"add":if($.fire===se)break;return h._promise("readwrite",function(){return S(d)},!0);case"put":if($.fire===se&&C.fire===se)break;return h._promise("readwrite",function(){return S(d)},!0);case"delete":if(y.fire===se)break;return h._promise("readwrite",function(){return S(d)},!0);case"deleteRange":if(y.fire===se)break;return h._promise("readwrite",function(){return(function v(A,E,_){return a.query({trans:A,values:!1,query:{index:u,range:E},limit:_}).then(function(P){var k=P.result;return S({type:"delete",keys:k,trans:A}).then(function(z){return 0<z.numFailures?Promise.reject(z.failures[0]):k.length<_?{failures:[],numFailures:0,lastResult:void 0}:v(A,o(o({},E),{lower:k[k.length-1],lowerOpen:!0}),_)})})})(d.trans,d.range,1e4)},!0)}return a.mutate(d);function S(v){var A,E,_,P=K.trans,k=v.keys||bi(u,v);if(!k)throw new Error("Keys missing");return(v=v.type==="add"||v.type==="put"?o(o({},v),{keys:k}):o({},v)).type!=="delete"&&(v.values=n([],v.values)),v.keys&&(v.keys=n([],v.keys)),A=a,_=k,((E=v).type==="add"?Promise.resolve([]):A.getMany({trans:E.trans,keys:_,cache:"immutable"})).then(function(z){var I=k.map(function(B,L){var N,X,q,W=z[L],J={onerror:null,onsuccess:null};return v.type==="delete"?y.fire.call(J,B,W,P):v.type==="add"||W===void 0?(N=$.fire.call(J,B,v.values[L],P),B==null&&N!=null&&(v.keys[L]=B=N,u.outbound||st(v.values[L],u.keyPath,B))):(N=gi(W,v.values[L]),(X=C.fire.call(J,N,B,W,P))&&(q=v.values[L],Object.keys(X).forEach(function(Y){R(q,Y)?q[Y]=X[Y]:st(q,Y,X[Y])}))),J});return a.mutate(v).then(function(B){for(var L=B.failures,N=B.results,X=B.numFailures,B=B.lastResult,q=0;q<k.length;++q){var W=(N||k)[q],J=I[q];W==null?J.onerror&&J.onerror(L[q]):J.onsuccess&&J.onsuccess(v.type==="put"&&z[q]?v.values[q]:W)}return{failures:L,results:N,numFailures:X,lastResult:B}}).catch(function(B){return I.forEach(function(L){return L.onerror&&L.onerror(B)}),Promise.reject(B)})})}}})}})}};function mo(i,s,a){try{if(!s||s.keys.length<i.length)return null;for(var u=[],d=0,h=0;d<s.keys.length&&h<i.length;++d)ye(s.keys[d],i[h])===0&&(u.push(a?D(s.values[d]):s.values[d]),++h);return u.length===i.length?u:null}catch{return null}}var da={stack:"dbcore",level:-1,create:function(i){return{table:function(s){var a=i.table(s);return o(o({},a),{getMany:function(u){if(!u.cache)return a.getMany(u);var d=mo(u.keys,u.trans._cache,u.cache==="clone");return d?V.resolve(d):a.getMany(u).then(function(h){return u.trans._cache={keys:u.keys,values:u.cache==="clone"?D(h):h},h})},mutate:function(u){return u.type!=="add"&&(u.trans._cache=null),a.mutate(u)}})}}}};function go(i,s){return i.trans.mode==="readonly"&&!!i.subscr&&!i.trans.explicit&&i.trans.db._options.cache!=="disabled"&&!s.schema.primaryKey.outbound}function bo(i,s){switch(i){case"query":return s.values&&!s.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var fa={stack:"dbcore",level:0,name:"Observability",create:function(i){var s=i.schema.name,a=new lt(i.MIN_KEY,i.MAX_KEY);return o(o({},i),{transaction:function(u,d,h){if(K.subscr&&d!=="readonly")throw new Q.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(K.querier));return i.transaction(u,d,h)},table:function(u){var d=i.table(u),h=d.schema,g=h.primaryKey,v=h.indexes,y=g.extractKey,$=g.outbound,C=g.autoIncrement&&v.filter(function(E){return E.compound&&E.keyPath.includes(g.keyPath)}),S=o(o({},d),{mutate:function(E){function _(Y){return Y="idb://".concat(s,"/").concat(u,"/").concat(Y),B[Y]||(B[Y]=new lt)}var P,k,z,I=E.trans,B=E.mutatedParts||(E.mutatedParts={}),L=_(""),N=_(":dels"),X=E.type,J=E.type==="deleteRange"?[E.range]:E.type==="delete"?[E.keys]:E.values.length<50?[bi(g,E).filter(function(Y){return Y}),E.values]:[],q=J[0],W=J[1],J=E.trans._cache;return f(q)?(L.addKeys(q),(J=X==="delete"||q.length===W.length?mo(q,J):null)||N.addKeys(q),(J||W)&&(P=_,k=J,z=W,h.indexes.forEach(function(Y){var te=P(Y.name||"");function de(pe){return pe!=null?Y.extractKey(pe):null}function he(pe){return Y.multiEntry&&f(pe)?pe.forEach(function(xt){return te.addKey(xt)}):te.addKey(pe)}(k||z).forEach(function(pe,ct){var ue=k&&de(k[ct]),ct=z&&de(z[ct]);ye(ue,ct)!==0&&(ue!=null&&he(ue),ct!=null&&he(ct))})}))):q?(W={from:(W=q.lower)!==null&&W!==void 0?W:i.MIN_KEY,to:(W=q.upper)!==null&&W!==void 0?W:i.MAX_KEY},N.add(W),L.add(W)):(L.add(a),N.add(a),h.indexes.forEach(function(Y){return _(Y.name).add(a)})),d.mutate(E).then(function(Y){return!q||E.type!=="add"&&E.type!=="put"||(L.addKeys(Y.results),C&&C.forEach(function(te){for(var de=E.values.map(function(ue){return te.extractKey(ue)}),he=te.keyPath.findIndex(function(ue){return ue===g.keyPath}),pe=0,xt=Y.results.length;pe<xt;++pe)de[pe][he]=Y.results[pe];_(te.name).addKeys(de)})),I.mutatedParts=gr(I.mutatedParts||{},B),Y})}}),v=function(_){var P=_.query,_=P.index,P=P.range;return[_,new lt((_=P.lower)!==null&&_!==void 0?_:i.MIN_KEY,(P=P.upper)!==null&&P!==void 0?P:i.MAX_KEY)]},A={get:function(E){return[g,new lt(E.key)]},getMany:function(E){return[g,new lt().addKeys(E.keys)]},count:v,query:v,openCursor:v};return c(A).forEach(function(E){S[E]=function(_){var P=K.subscr,k=!!P,z=go(K,d)&&bo(E,_)?_.obsSet={}:P;if(k){var I=function(W){return W="idb://".concat(s,"/").concat(u,"/").concat(W),z[W]||(z[W]=new lt)},B=I(""),L=I(":dels"),P=A[E](_),k=P[0],P=P[1];if((E==="query"&&k.isPrimaryKey&&!_.values?L:I(k.name||"")).add(P),!k.isPrimaryKey){if(E!=="count"){var N=E==="query"&&$&&_.values&&d.query(o(o({},_),{values:!1}));return d[E].apply(this,arguments).then(function(W){if(E==="query"){if($&&_.values)return N.then(function(de){return de=de.result,B.addKeys(de),W});var J=_.values?W.result.map(y):W.result;(_.values?B:L).addKeys(J)}else if(E==="openCursor"){var Y=W,te=_.values;return Y&&Object.create(Y,{key:{get:function(){return L.addKey(Y.primaryKey),Y.key}},primaryKey:{get:function(){var de=Y.primaryKey;return L.addKey(de),de}},value:{get:function(){return te&&B.addKey(Y.primaryKey),Y.value}}})}return W})}L.add(a)}}return d[E].apply(this,arguments)}}),S}})}};function yo(i,s,a){if(a.numFailures===0)return s;if(s.type==="deleteRange")return null;var u=s.keys?s.keys.length:"values"in s&&s.values?s.values.length:1;return a.numFailures===u?null:(s=o({},s),f(s.keys)&&(s.keys=s.keys.filter(function(d,h){return!(h in a.failures)})),"values"in s&&f(s.values)&&(s.values=s.values.filter(function(d,h){return!(h in a.failures)})),s)}function yi(i,s){return a=i,((u=s).lower===void 0||(u.lowerOpen?0<ye(a,u.lower):0<=ye(a,u.lower)))&&(i=i,(s=s).upper===void 0||(s.upperOpen?ye(i,s.upper)<0:ye(i,s.upper)<=0));var a,u}function vo(i,s,A,u,d,h){if(!A||A.length===0)return i;var g=s.query.index,y=g.multiEntry,$=s.query.range,C=u.schema.primaryKey.extractKey,S=g.extractKey,v=(g.lowLevelIndex||g).extractKey,A=A.reduce(function(E,_){var P=E,k=[];if(_.type==="add"||_.type==="put")for(var z=new lt,I=_.values.length-1;0<=I;--I){var B,L=_.values[I],N=C(L);z.hasKey(N)||(B=S(L),(y&&f(B)?B.some(function(Y){return yi(Y,$)}):yi(B,$))&&(z.addKey(N),k.push(L)))}switch(_.type){case"add":var X=new lt().addKeys(s.values?E.map(function(te){return C(te)}):E),P=E.concat(s.values?k.filter(function(te){return te=C(te),!X.hasKey(te)&&(X.addKey(te),!0)}):k.map(function(te){return C(te)}).filter(function(te){return!X.hasKey(te)&&(X.addKey(te),!0)}));break;case"put":var q=new lt().addKeys(_.values.map(function(te){return C(te)}));P=E.filter(function(te){return!q.hasKey(s.values?C(te):te)}).concat(s.values?k:k.map(function(te){return C(te)}));break;case"delete":var W=new lt().addKeys(_.keys);P=E.filter(function(te){return!W.hasKey(s.values?C(te):te)});break;case"deleteRange":var J=_.range;P=E.filter(function(te){return!yi(C(te),J)})}return P},i);return A===i?i:(A.sort(function(E,_){return ye(v(E),v(_))||ye(C(E),C(_))}),s.limit&&s.limit<1/0&&(A.length>s.limit?A.length=s.limit:i.length===s.limit&&A.length<s.limit&&(d.dirty=!0)),h?Object.freeze(A):A)}function wo(i,s){return ye(i.lower,s.lower)===0&&ye(i.upper,s.upper)===0&&!!i.lowerOpen==!!s.lowerOpen&&!!i.upperOpen==!!s.upperOpen}function ha(i,s){return(function(a,u,d,h){if(a===void 0)return u!==void 0?-1:0;if(u===void 0)return 1;if((u=ye(a,u))===0){if(d&&h)return 0;if(d)return 1;if(h)return-1}return u})(i.lower,s.lower,i.lowerOpen,s.lowerOpen)<=0&&0<=(function(a,u,d,h){if(a===void 0)return u!==void 0?1:0;if(u===void 0)return-1;if((u=ye(a,u))===0){if(d&&h)return 0;if(d)return-1;if(h)return 1}return u})(i.upper,s.upper,i.upperOpen,s.upperOpen)}function pa(i,s,a,u){i.subscribers.add(a),u.addEventListener("abort",function(){var d,h;i.subscribers.delete(a),i.subscribers.size===0&&(d=i,h=s,setTimeout(function(){d.subscribers.size===0&&M(h,d)},3e3))})}var ma={stack:"dbcore",level:0,name:"Cache",create:function(i){var s=i.schema.name;return o(o({},i),{transaction:function(a,u,d){var h,g,y=i.transaction(a,u,d);return u==="readwrite"&&(g=(h=new AbortController).signal,d=function($){return function(){if(h.abort(),u==="readwrite"){for(var C=new Set,S=0,v=a;S<v.length;S++){var A=v[S],E=fn["idb://".concat(s,"/").concat(A)];if(E){var _=i.table(A),P=E.optimisticOps.filter(function(te){return te.trans===y});if(y._explicit&&$&&y.mutatedParts)for(var k=0,z=Object.values(E.queries.query);k<z.length;k++)for(var I=0,B=(X=z[k]).slice();I<B.length;I++)di((q=B[I]).obsSet,y.mutatedParts)&&(M(X,q),q.subscribers.forEach(function(te){return C.add(te)}));else if(0<P.length){E.optimisticOps=E.optimisticOps.filter(function(te){return te.trans!==y});for(var L=0,N=Object.values(E.queries.query);L<N.length;L++)for(var X,q,W,J=0,Y=(X=N[L]).slice();J<Y.length;J++)(q=Y[J]).res!=null&&y.mutatedParts&&($&&!q.dirty?(W=Object.isFrozen(q.res),W=vo(q.res,q.req,P,_,q,W),q.dirty?(M(X,q),q.subscribers.forEach(function(te){return C.add(te)})):W!==q.res&&(q.res=W,q.promise=V.resolve({result:W}))):(q.dirty&&M(X,q),q.subscribers.forEach(function(te){return C.add(te)})))}}}C.forEach(function(te){return te()})}}},y.addEventListener("abort",d(!1),{signal:g}),y.addEventListener("error",d(!1),{signal:g}),y.addEventListener("complete",d(!0),{signal:g})),y},table:function(a){var u=i.table(a),d=u.schema.primaryKey;return o(o({},u),{mutate:function(h){var g=K.trans;if(d.outbound||g.db._options.cache==="disabled"||g.explicit||g.idbtrans.mode!=="readwrite")return u.mutate(h);var y=fn["idb://".concat(s,"/").concat(a)];return y?(g=u.mutate(h),h.type!=="add"&&h.type!=="put"||!(50<=h.values.length||bi(d,h).some(function($){return $==null}))?(y.optimisticOps.push(h),h.mutatedParts&&br(h.mutatedParts),g.then(function($){0<$.numFailures&&(M(y.optimisticOps,h),($=yo(0,h,$))&&y.optimisticOps.push($),h.mutatedParts&&br(h.mutatedParts))}),g.catch(function(){M(y.optimisticOps,h),h.mutatedParts&&br(h.mutatedParts)})):g.then(function($){var C=yo(0,o(o({},h),{values:h.values.map(function(S,v){var A;return $.failures[v]?S:(S=(A=d.keyPath)!==null&&A!==void 0&&A.includes(".")?D(S):o({},S),st(S,d.keyPath,$.results[v]),S)})}),$);y.optimisticOps.push(C),queueMicrotask(function(){return h.mutatedParts&&br(h.mutatedParts)})}),g):u.mutate(h)},query:function(h){if(!go(K,u)||!bo("query",h))return u.query(h);var g=((C=K.trans)===null||C===void 0?void 0:C.db._options.cache)==="immutable",v=K,y=v.requery,$=v.signal,C=(function(_,P,k,z){var I=fn["idb://".concat(_,"/").concat(P)];if(!I)return[];if(!(P=I.queries[k]))return[null,!1,I,null];var B=P[(z.query?z.query.index.name:null)||""];if(!B)return[null,!1,I,null];switch(k){case"query":var L=B.find(function(N){return N.req.limit===z.limit&&N.req.values===z.values&&wo(N.req.query.range,z.query.range)});return L?[L,!0,I,B]:[B.find(function(N){return("limit"in N.req?N.req.limit:1/0)>=z.limit&&(!z.values||N.req.values)&&ha(N.req.query.range,z.query.range)}),!1,I,B];case"count":return L=B.find(function(N){return wo(N.req.query.range,z.query.range)}),[L,!!L,I,B]}})(s,a,"query",h),S=C[0],v=C[1],A=C[2],E=C[3];return S&&v?S.obsSet=h.obsSet:(v=u.query(h).then(function(_){var P=_.result;if(S&&(S.res=P),g){for(var k=0,z=P.length;k<z;++k)Object.freeze(P[k]);Object.freeze(P)}else _.result=D(P);return _}).catch(function(_){return E&&S&&M(E,S),Promise.reject(_)}),S={obsSet:h.obsSet,promise:v,subscribers:new Set,type:"query",req:h,dirty:!1},E?E.push(S):(E=[S],(A=A||(fn["idb://".concat(s,"/").concat(a)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[h.query.index.name||""]=E)),pa(S,E,y,$),S.promise.then(function(_){return{result:vo(_.result,h,A?.optimisticOps,u,S,g)}})}})}})}};function vr(i,s){return new Proxy(i,{get:function(a,u,d){return u==="db"?s:Reflect.get(a,u,d)}})}var Vt=(Ye.prototype.version=function(i){if(isNaN(i)||i<.1)throw new Q.Type("Given version is not a positive number");if(i=Math.round(10*i)/10,this.idbdb||this._state.isBeingOpened)throw new Q.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,i);var s=this._versions,a=s.filter(function(u){return u._cfg.version===i})[0];return a||(a=new this.Version(i),s.push(a),s.sort(ia),a.stores({}),this._state.autoSchema=!1,a)},Ye.prototype._whenReady=function(i){var s=this;return this.idbdb&&(this._state.openComplete||K.letThrough||this._vip)?i():new V(function(a,u){if(s._state.openComplete)return u(new Q.DatabaseClosed(s._state.dbOpenError));if(!s._state.isBeingOpened){if(!s._state.autoOpen)return void u(new Q.DatabaseClosed);s.open().catch(se)}s._state.dbReadyPromise.then(a,u)}).then(i)},Ye.prototype.use=function(i){var s=i.stack,a=i.create,u=i.level,d=i.name;return d&&this.unuse({stack:s,name:d}),i=this._middlewares[s]||(this._middlewares[s]=[]),i.push({stack:s,create:a,level:u??10,name:d}),i.sort(function(h,g){return h.level-g.level}),this},Ye.prototype.unuse=function(i){var s=i.stack,a=i.name,u=i.create;return s&&this._middlewares[s]&&(this._middlewares[s]=this._middlewares[s].filter(function(d){return u?d.create!==u:!!a&&d.name!==a})),this},Ye.prototype.open=function(){var i=this;return cn(Ne,function(){return la(i)})},Ye.prototype._close=function(){var i=this._state,s=kn.indexOf(this);if(0<=s&&kn.splice(s,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}i.isBeingOpened||(i.dbReadyPromise=new V(function(a){i.dbReadyResolve=a}),i.openCanceller=new V(function(a,u){i.cancelOpen=u}))},Ye.prototype.close=function(a){var s=(a===void 0?{disableAutoOpen:!0}:a).disableAutoOpen,a=this._state;s?(a.isBeingOpened&&a.cancelOpen(new Q.DatabaseClosed),this._close(),a.autoOpen=!1,a.dbOpenError=new Q.DatabaseClosed):(this._close(),a.autoOpen=this._options.autoOpen||a.isBeingOpened,a.openComplete=!1,a.dbOpenError=null)},Ye.prototype.delete=function(i){var s=this;i===void 0&&(i={disableAutoOpen:!0});var a=0<arguments.length&&typeof arguments[0]!="object",u=this._state;return new V(function(d,h){function g(){s.close(i);var y=s._deps.indexedDB.deleteDatabase(s.name);y.onsuccess=Te(function(){var $,C,S;$=s._deps,C=s.name,S=$.indexedDB,$=$.IDBKeyRange,li(S)||C===ir||ai(S,$).delete(C).catch(se),d()}),y.onerror=Lt(h),y.onblocked=s._fireOnBlocked}if(a)throw new Q.InvalidArgument("Invalid closeOptions argument to db.delete()");u.isBeingOpened?u.dbReadyPromise.then(g):g()})},Ye.prototype.backendDB=function(){return this.idbdb},Ye.prototype.isOpen=function(){return this.idbdb!==null},Ye.prototype.hasBeenClosed=function(){var i=this._state.dbOpenError;return i&&i.name==="DatabaseClosed"},Ye.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Ye.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Ye.prototype,"tables",{get:function(){var i=this;return c(this._allTables).map(function(s){return i._allTables[s]})},enumerable:!1,configurable:!0}),Ye.prototype.transaction=function(){var i=function(s,a,u){var d=arguments.length;if(d<2)throw new Q.InvalidArgument("Too few arguments");for(var h=new Array(d-1);--d;)h[d-1]=arguments[d];return u=h.pop(),[s,En(h),u]}.apply(this,arguments);return this._transaction.apply(this,i)},Ye.prototype._transaction=function(i,s,a){var u=this,d=K.trans;d&&d.db===this&&i.indexOf("!")===-1||(d=null);var h,g,y=i.indexOf("?")!==-1;i=i.replace("!","").replace("?","");try{if(g=s.map(function(C){if(C=C instanceof u.Table?C.name:C,typeof C!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return C}),i=="r"||i===Xr)h=Xr;else{if(i!="rw"&&i!=Gr)throw new Q.InvalidArgument("Invalid transaction mode: "+i);h=Gr}if(d){if(d.mode===Xr&&h===Gr){if(!y)throw new Q.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");d=null}d&&g.forEach(function(C){if(d&&d.storeNames.indexOf(C)===-1){if(!y)throw new Q.SubTransaction("Table "+C+" not included in parent transaction.");d=null}}),y&&d&&!d.active&&(d=null)}}catch(C){return d?d._promise(null,function(S,v){v(C)}):Ve(C)}var $=function C(S,v,A,E,_){return V.resolve().then(function(){var P=K.transless||K,k=S._createTransaction(v,A,S._dbSchema,E);if(k.explicit=!0,P={trans:k,transless:P},E)k.idbtrans=E.idbtrans;else try{k.create(),k.idbtrans._explicit=!0,S._state.PR1398_maxLoop=3}catch(B){return B.name===Be.InvalidState&&S.isOpen()&&0<--S._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),S.close({disableAutoOpen:!1}),S.open().then(function(){return C(S,v,A,null,_)})):Ve(B)}var z,I=Xe(_);return I&&Cn(),P=V.follow(function(){var B;(z=_.call(k,k))&&(I?(B=en.bind(null,null),z.then(B,B)):typeof z.next=="function"&&typeof z.throw=="function"&&(z=mi(z)))},P),(z&&typeof z.then=="function"?V.resolve(z).then(function(B){return k.active?B:Ve(new Q.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):P.then(function(){return z})).then(function(B){return E&&k._resolve(),k._completion.then(function(){return B})}).catch(function(B){return k._reject(B),Ve(B)})})}.bind(null,this,h,g,d,a);return d?d._promise(h,$,"lock"):K.trans?cn(K.transless,function(){return u._whenReady($)}):this._whenReady($)},Ye.prototype.table=function(i){if(!R(this._allTables,i))throw new Q.InvalidTable("Table ".concat(i," does not exist"));return this._allTables[i]},Ye);function Ye(i,s){var a=this;this._middlewares={},this.verno=0;var u=Ye.dependencies;this._options=s=o({addons:Ye.addons,autoOpen:!0,indexedDB:u.indexedDB,IDBKeyRange:u.IDBKeyRange,cache:"cloned"},s),this._deps={indexedDB:s.indexedDB,IDBKeyRange:s.IDBKeyRange},u=s.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var d,h,g,y,$,C={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:se,dbReadyPromise:null,cancelOpen:se,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:s.autoOpen};C.dbReadyPromise=new V(function(v){C.dbReadyResolve=v}),C.openCanceller=new V(function(v,A){C.cancelOpen=A}),this._state=C,this.name=i,this.on=In(this,"populate","blocked","versionchange","close",{ready:[yt,se]}),this.on.ready.subscribe=Ct(this.on.ready.subscribe,function(v){return function(A,E){Ye.vip(function(){var _,P=a._state;P.openComplete?(P.dbOpenError||V.resolve().then(A),E&&v(A)):P.onReadyBeingFired?(P.onReadyBeingFired.push(A),E&&v(A)):(v(A),_=a,E||v(function k(){_.on.ready.unsubscribe(A),_.on.ready.unsubscribe(k)}))})}}),this.Collection=(d=this,Bn(Qs.prototype,function(z,k){this.db=d;var E=Gi,_=null;if(k)try{E=k()}catch(I){_=I}var P=z._ctx,k=P.table,z=k.hook.reading.fire;this._ctx={table:k,index:P.index,isPrimKey:!P.index||k.schema.primKey.keyPath&&P.index===k.schema.primKey.name,range:E,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:_,or:P.or,valueMapper:z!==fe?z:null}})),this.Table=(h=this,Bn(eo.prototype,function(v,A,E){this.db=h,this._tx=E,this.name=v,this.schema=A,this.hook=h._allTables[v]?h._allTables[v].hook:In(null,{creating:[Me,se],reading:[bt,fe],updating:[jt,se],deleting:[Qt,se]})})),this.Transaction=(g=this,Bn(ea.prototype,function(v,A,E,_,P){var k=this;this.db=g,this.mode=v,this.storeNames=A,this.schema=E,this.chromeTransactionDurability=_,this.idbtrans=null,this.on=In(this,"complete","error","abort"),this.parent=P||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new V(function(z,I){k._resolve=z,k._reject=I}),this._completion.then(function(){k.active=!1,k.on.complete.fire()},function(z){var I=k.active;return k.active=!1,k.on.error.fire(z),k.parent?k.parent._reject(z):I&&k.idbtrans&&k.idbtrans.abort(),Ve(z)})})),this.Version=(y=this,Bn(aa.prototype,function(v){this.db=y,this._cfg={version:v,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=($=this,Bn(oo.prototype,function(v,A,E){if(this.db=$,this._ctx={table:v,index:A===":id"?null:A,or:E},this._cmp=this._ascending=ye,this._descending=function(_,P){return ye(P,_)},this._max=function(_,P){return 0<ye(_,P)?_:P},this._min=function(_,P){return ye(_,P)<0?_:P},this._IDBKeyRange=$._deps.IDBKeyRange,!this._IDBKeyRange)throw new Q.MissingAPI})),this.on("versionchange",function(v){0<v.newVersion?console.warn("Another connection wants to upgrade database '".concat(a.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(a.name,"'. Closing db now to resume the delete request.")),a.close({disableAutoOpen:!1})}),this.on("blocked",function(v){!v.newVersion||v.newVersion<v.oldVersion?console.warn("Dexie.delete('".concat(a.name,"') was blocked")):console.warn("Upgrade '".concat(a.name,"' blocked by other connection holding version ").concat(v.oldVersion/10))}),this._maxKey=qn(s.IDBKeyRange),this._createTransaction=function(v,A,E,_){return new a.Transaction(v,A,E,a._options.chromeTransactionDurability,_)},this._fireOnBlocked=function(v){a.on("blocked").fire(v),kn.filter(function(A){return A.name===a.name&&A!==a&&!A._state.vcFired}).map(function(A){return A.on("versionchange").fire(v)})},this.use(da),this.use(ma),this.use(fa),this.use(ca),this.use(ua);var S=new Proxy(this,{get:function(v,A,E){if(A==="_vip")return!0;if(A==="table")return function(P){return vr(a.table(P),S)};var _=Reflect.get(v,A,E);return _ instanceof eo?vr(_,S):A==="tables"?_.map(function(P){return vr(P,S)}):A==="_createTransaction"?function(){return vr(_.apply(this,arguments),S)}:_}});this.vip=S,u.forEach(function(v){return v(a)})}var wr,_t=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",ga=(vi.prototype.subscribe=function(i,s,a){return this._subscribe(i&&typeof i!="function"?i:{next:i,error:s,complete:a})},vi.prototype[_t]=function(){return this},vi);function vi(i){this._subscribe=i}try{wr={indexedDB:l.indexedDB||l.mozIndexedDB||l.webkitIndexedDB||l.msIndexedDB,IDBKeyRange:l.IDBKeyRange||l.webkitIDBKeyRange}}catch{wr={indexedDB:null,IDBKeyRange:null}}function xo(i){var s,a=!1,u=new ga(function(d){var h=Xe(i),g,y=!1,$={},C={},S={get closed(){return y},unsubscribe:function(){y||(y=!0,g&&g.abort(),v&&rn.storagemutated.unsubscribe(E))}};d.start&&d.start(S);var v=!1,A=function(){return Yr(_)},E=function(P){gr($,P),di(C,$)&&A()},_=function(){var P,k,z;!y&&wr.indexedDB&&($={},P={},g&&g.abort(),g=new AbortController,z=(function(I){var B=_e();try{h&&Cn();var L=Zt(i,I);return L=h?L.finally(en):L}finally{B&&Re()}})(k={subscr:P,signal:g.signal,requery:A,querier:i,trans:null}),Promise.resolve(z).then(function(I){a=!0,s=I,y||k.signal.aborted||($={},(function(B){for(var L in B)if(R(B,L))return;return 1})(C=P)||v||(rn(Nn,E),v=!0),Yr(function(){return!y&&d.next&&d.next(I)}))},function(I){a=!1,["DatabaseClosedError","AbortError"].includes(I?.name)||y||Yr(function(){y||d.error&&d.error(I)})}))};return setTimeout(A,0),S});return u.hasValue=function(){return a},u.getValue=function(){return s},u}var hn=Vt;function wi(i){var s=on;try{on=!0,rn.storagemutated.fire(i),pi(i,!0)}finally{on=s}}F(hn,o(o({},Ae),{delete:function(i){return new hn(i,{addons:[]}).delete()},exists:function(i){return new hn(i,{addons:[]}).open().then(function(s){return s.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(i){try{return s=hn.dependencies,a=s.indexedDB,s=s.IDBKeyRange,(li(a)?Promise.resolve(a.databases()).then(function(u){return u.map(function(d){return d.name}).filter(function(d){return d!==ir})}):ai(a,s).toCollection().primaryKeys()).then(i)}catch{return Ve(new Q.MissingAPI)}var s,a},defineClass:function(){return function(i){m(this,i)}},ignoreTransaction:function(i){return K.trans?cn(K.transless,i):i()},vip:ci,async:function(i){return function(){try{var s=mi(i.apply(this,arguments));return s&&typeof s.then=="function"?s:V.resolve(s)}catch(a){return Ve(a)}}},spawn:function(i,s,a){try{var u=mi(i.apply(a,s||[]));return u&&typeof u.then=="function"?u:V.resolve(u)}catch(d){return Ve(d)}},currentTransaction:{get:function(){return K.trans||null}},waitFor:function(i,s){return s=V.resolve(typeof i=="function"?hn.ignoreTransaction(i):i).timeout(s||6e4),K.trans?K.trans.waitFor(s):s},Promise:V,debug:{get:function(){return ke},set:function(i){Oe(i)}},derive:le,extend:m,props:F,override:Ct,Events:In,on:rn,liveQuery:xo,extendObservabilitySet:gr,getByKeyPath:kt,setByKeyPath:st,delByKeyPath:function(i,s){typeof s=="string"?st(i,s,void 0):"length"in s&&[].map.call(s,function(a){st(i,a,void 0)})},shallowClone:Ut,deepClone:D,getObjectDiff:gi,cmp:ye,asap:zn,minKey:-1/0,addons:[],connections:kn,errnames:Be,dependencies:wr,cache:fn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(i){return parseInt(i)}).reduce(function(i,s,a){return i+s/Math.pow(10,2*a)})})),hn.maxKey=qn(hn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(rn(Nn,function(i){on||(i=new CustomEvent(ei,{detail:i}),on=!0,dispatchEvent(i),on=!1)}),addEventListener(ei,function(i){i=i.detail,on||wi(i)}));var Pn,on=!1,$o=function(){};return typeof BroadcastChannel<"u"&&(($o=function(){(Pn=new BroadcastChannel(ei)).onmessage=function(i){return i.data&&wi(i.data)}})(),typeof Pn.unref=="function"&&Pn.unref(),rn(Nn,function(i){on||Pn.postMessage(i)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(i){if(!Vt.disableBfCache&&i.persisted){ke&&console.debug("Dexie: handling persisted pagehide"),Pn?.close();for(var s=0,a=kn;s<a.length;s++)a[s].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(i){!Vt.disableBfCache&&i.persisted&&(ke&&console.debug("Dexie: handling persisted pageshow"),$o(),wi({all:new lt(-1/0,[[]])}))})),V.rejectionMapper=function(i,s){return!i||i instanceof Fe||i instanceof TypeError||i instanceof SyntaxError||!i.name||!Le[i.name]?i:(s=new Le[i.name](s||i.message,i),"stack"in i&&Z(s,"stack",{get:function(){return this.inner.stack}}),s)},Oe(ke),o(Vt,Object.freeze({__proto__:null,Dexie:Vt,liveQuery:xo,Entity:Qi,cmp:ye,PropModSymbol:Kt,PropModification:Ln,replacePrefix:function(i,s){return new Ln({replacePrefix:[i,s]})},add:function(i){return new Ln({add:i})},remove:function(i){return new Ln({remove:i})},default:Vt,RangeSet:lt,mergeRanges:Hn,rangesOverlap:uo}),{default:Vt}),Vt})})(Sr)),Sr.exports}var Xa=Ya();const Pi=Ka(Xa),zo=Symbol.for("Dexie"),Fr=globalThis[zo]||(globalThis[zo]=Pi);if(Pi.semVer!==Fr.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Pi.semVer} and ${Fr.semVer}`);const{liveQuery:ms,mergeRanges:Ld,rangesOverlap:Md,RangeSet:Nd,cmp:qd,Entity:Ud,PropModSymbol:Wd,PropModification:Hd,replacePrefix:Kd,add:Vd,remove:Yd}=Fr,Ga="easydb";let $r=null;function Qa(){if($r)return $r;const e=new Fr(Ga);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),$r={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins")},$r}function Er(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const r=Object.entries(t);return e.filter(o=>gs(o,r)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,r){if(await e.update(t,r)===0)throw new Error(`patch: no doc with id=${t}`);const n=await e.get(t);if(!n)throw new Error(`patch: doc id=${t} vanished after update`);return n},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const o=ms(()=>e.toArray()).subscribe({next:n=>t(n)});return()=>o.unsubscribe()}}}function Ja(e,t){return{async find(r){const o=e.where("tableId").equals(t);if(!r||Object.keys(r).length===0)return o.toArray();const n=Object.entries(r);return o.filter(l=>gs(l,n)).toArray()},async findOne(r){const o=await e.get(r);return o&&o.tableId===t?o:null},async insert(r){const o={...r,tableId:t};return await e.add(o),o},async bulkInsert(r){if(r.length===0)return[];const o=r.map(n=>({...n,tableId:t}));return await e.bulkAdd(o),o},async upsert(r){const o={...r,tableId:t};return await e.put(o),o},async patch(r,o){if(await e.update(r,o)===0)throw new Error(`row patch: no row ${r}`);const l=await e.get(r);if(!l)throw new Error(`row patch: row ${r} vanished after update`);return l},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},subscribe(r){const n=ms(()=>e.where("tableId").equals(t).toArray()).subscribe({next:l=>r(l)});return()=>n.unsubscribe()}}}function gs(e,t){for(const[r,o]of t)if(e[r]!==o)return!1;return!0}function Za(e){return{workspaces:Er(e.workspaces),tables:Er(e.tables),settings:Er(e.settings),plugins:Er(e.plugins),rows:t=>Ja(e.rows,t)}}function el(){const e=new Map;return{on(t,r){let o=e.get(t);return o||(o=new Set,e.set(t,o)),o.add(r),()=>{o.delete(r)}},emit(t,r){const o=e.get(t);if(o)for(const n of o)try{n(r)}catch(l){console.error(`[event:${String(t)}] listener threw`,l)}}}}const wn=ot`
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
`;function xn(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const r=t.querySelector("form");r&&(e.preventDefault(),r.requestSubmit())}const Io=new WeakSet;function $n(e,t){if(Io.has(t))return;Io.add(t);let r=0,o=0,n=0,l=0,c=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",m=>{if(m.target.closest("button, input, textarea, select, a, label"))return;c=!0,r=m.clientX,o=m.clientY;const j=e.getBoundingClientRect();n=j.left,l=j.top,t.setPointerCapture(m.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",m=>{if(!c)return;const T=m.clientX-r,j=m.clientY-o,R=-e.offsetWidth+80,F=window.innerWidth-80,H=0,Z=window.innerHeight-40,le=Math.max(R,Math.min(F,n+T)),Ze=Math.max(H,Math.min(Z,l+j));e.style.position="fixed",e.style.left=`${le}px`,e.style.top=`${Ze}px`,e.style.margin="0"});const f=m=>{if(c){c=!1;try{t.releasePointerCapture(m.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",f),t.addEventListener("pointercancel",f)}var tl=Object.defineProperty,nl=Object.getOwnPropertyDescriptor,bs=(e,t,r,o)=>{for(var n=o>1?void 0:o?nl(t,r):t,l=e.length-1,c;l>=0;l--)(c=e[l])&&(n=(o?c(t,r,n):c(n))||n);return o&&n&&tl(t,r,n),n};let St=class extends Ge{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),St.instance=this}disconnectedCallback(){super.disconnectedCallback(),St.instance===this&&(St.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&$n(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:t,message:e,resolve:r}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",r="Input"){return this.enqueue(o=>{this.current={kind:"prompt",title:r,message:e,value:t,resolve:o}})}choice(e,t,r="Choose"){return this.enqueue(o=>{this.current={kind:"choice",title:r,message:e,options:t,resolve:o}})}enqueue(e){return new Promise(t=>{const r=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const r=this.queue.shift();r&&r()}))}render(){const e=this.current;return G`
      <dialog @cancel=${this.onCancel} @keydown=${xn}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):Ue}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return G`
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
        `;case"prompt":return G`
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
        `;case"choice":return G`
          <div class="dialog-header">
            <h2>${e.title}</h2>
            <div class="header-actions">
              <button class="ghost" @click=${()=>this.closeAndResolve(null)}>Cancel</button>
            </div>
          </div>
          <div class="dialog-body">
            ${e.message?G`<p class="message">${e.message}</p>`:Ue}
            <div class="choices">
              ${e.options.map(t=>G`<button class="choice" @click=${()=>this.closeAndResolve(t)}>
                    ${t}
                  </button>`)}
            </div>
          </div>
        `}}};St.instance=null;St.styles=[wn,ot`
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
    `];bs([ne()],St.prototype,"current",2);St=bs([dt("host-dialogs")],St);const Gt=ot`
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
`;var rl=Object.defineProperty,il=Object.getOwnPropertyDescriptor,ys=(e,t,r,o)=>{for(var n=o>1?void 0:o?il(t,r):t,l=e.length-1,c;l>=0;l--)(c=e[l])&&(n=(o?c(t,r,n):c(n))||n);return o&&n&&rl(t,r,n),n};let Yt=class extends Ge{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),Yt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Yt.instance===this&&(Yt.instance=null)}show(e,t){const r={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,r];const o=t?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),o)}dismiss(e){const t=this.toasts.find(r=>r.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(r=>r.id!==e)}render(){return G`
      ${this.toasts.map(e=>G`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${sl(e.kind)}</span>
            <span class="body">
              ${e.title?G`<strong>${e.title}</strong>`:""}${ol(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};Yt.instance=null;Yt.styles=[Gt,ot`
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
    `];ys([ne()],Yt.prototype,"toasts",2);Yt=ys([dt("toast-host")],Yt);function ol(e){const t=/(https?:\/\/[^\s)]+)/g,r=[];let o=0,n;for(;(n=t.exec(e))!==null;)n.index>o&&r.push(e.slice(o,n.index)),r.push({url:n[0]}),o=n.index+n[0].length;return o<e.length&&r.push(e.slice(o)),r.length===0?e:r.map(l=>typeof l=="string"?l:G`<a href=${l.url} target="_blank" rel="noopener noreferrer">${l.url}</a>`)}function sl(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function al(){return{headerButtons:[],footerButtons:[],tableButtons:[],importers:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map}}function gn(e,t){return e.push(t),()=>{const r=e.indexOf(t);r>=0&&e.splice(r,1)}}function Ei(e,t,r){return e.set(t,r),()=>{e.get(t)===r&&e.delete(t)}}function ll(e){return{registerHeaderButton:t=>gn(e.headerButtons,t),registerFooterButton:t=>gn(e.footerButtons,t),registerTableButton:t=>gn(e.tableButtons,t),registerImporter:t=>gn(e.importers,t),registerExporter:t=>gn(e.exporters,t),registerUrlSource:t=>gn(e.urlSources,t),registerDropHandler:t=>gn(e.dropHandlers,t),registerCellRenderer:(t,r)=>Ei(e.cellRenderers,t,r),registerRowRenderer:(t,r)=>Ei(e.rowRenderers,t,r),registerTableRenderer:(t,r)=>Ei(e.tableRenderers,t,r),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},dialogs:cl}}const cl={async alert(e,t){const r=St.instance;if(r)return r.alert(e,t);window.alert(e)},async confirm(e,t){const r=St.instance;return r?r.confirm(e,t):window.confirm(e)},async prompt(e,t,r){const o=St.instance;return o?o.prompt(e,t,r):window.prompt(e,t)??null},async choice(e,t,r){const o=St.instance;if(o)return o.choice(e,t,r);const n=window.prompt(`${e}

Options: ${t.join(", ")}`);return n&&t.includes(n)?n:null},toast(e,t){const r=Yt.instance;r?r.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}};function ul(e){const t=ll(e.registries),r={open(o){return console.warn("[host] windows.open is stubbed until Phase 5",o.id),{id:o.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:r,backend:{fetch:async(o,n)=>{const l=await dl(e.store),c=n?.body instanceof ArrayBuffer;if(!l||c)return globalThis.fetch(o,n);const f={url:o};return n?.method&&(f.method=n.method),n?.headers&&(f.headers=n.headers),typeof n?.body=="string"&&(f.body=n.body),globalThis.fetch(`${l}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)})},async saveFile(o,n,l){const c=typeof n=="string"?new Blob([n],{type:l??"application/octet-stream"}):n,f=URL.createObjectURL(c),m=document.createElement("a");m.href=f,m.download=o,m.rel="noopener",document.body.appendChild(m),m.click(),m.remove(),setTimeout(()=>URL.revokeObjectURL(f),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function dl(e){const r=(await e.settings.findOne("server-sync:url"))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}const fl={name:"csv-import",version:"0.1.0",description:"Drag-and-drop CSV files to create typed tables.",author:"easyDBAccess built-ins"};function hl(e){e.ui.registerImporter(pl),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const o=_l(t).filter(Sl);if(o.length===0)return!1;t.preventDefault();for(const n of o)await ml(e,n);return!0})}const pl={id:"csv",label:"CSV",accept:[".csv","text/csv"],async parse(e){const t=typeof e=="string"?e:await e.text();return Ir(t)}};async function ml(e,t){const r=e.workspaceId();if(!r)throw new Error("csv-import: no active workspace");const o=await t.text(),n=t.name.replace(/\.csv$/i,"")||"imported",l=(await e.store.tables.find()).find(j=>j.workspaceId===r&&j.name===n);let c,f;if(l){const j=await e.ui.dialogs.choice(`A table named "${n}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!j)return;j==="Append rows"?(f="append",c=l.id):j==="Overwrite rows"?(f="overwrite",c=l.id):(f="new",c=Cr())}else f="new",c=Cr();e.events.emit("import:before",{source:"csv",tableId:c});let m;if(f==="new"){const j=Ir(o),R=l?`${n} (${Date.now().toString(36)})`:n;await e.store.tables.insert({id:c,workspaceId:r,name:R,code:Ai(R),columns:j.columns,view:"table",updatedAt:Date.now()}),m=j.rows.map(F=>({id:Cr(),tableId:c,data:F,updatedAt:Date.now()}))}else{const j=l.columns;if(m=vs(o).rows.map(F=>{const H={};for(let Z=0;Z<j.length;Z++){const le=j[Z];H[le.field]=$s(F[Z]??"",le.type)}return{id:Cr(),tableId:c,data:H,updatedAt:Date.now()}}),f==="overwrite"){const F=e.store.rows(c),H=await F.find();await F.bulkRemove(H.map(Z=>Z.id))}}await e.store.rows(c).bulkInsert(m),e.events.emit("import:after",{source:"csv",tableId:c,rowCount:m.length})}function vs(e){const t=e.replace(/﻿/,""),r=ws(t),o=xs(t,r);if(o.length===0)return{header:[],rows:[]};const n=o[0],l=o.slice(1).filter(c=>!(c.length===1&&c[0]===""));return{header:n,rows:l}}function Ir(e){const t=e.replace(/﻿/,""),r=ws(t),o=xs(t,r);if(o.length===0)return{columns:[],rows:[]};const n=o[0],l=o.slice(1).filter(F=>!(F.length===1&&F[0]==="")),c=n.map((F,H)=>yl(F,H)),f=c.map(F=>F.field),m=l.map(F=>{const H={};for(let Z=0;Z<f.length;Z++)H[f[Z]]=F[Z]??"";return H}),T=c.map((F,H)=>F.type?F.type:vl(m.map(Z=>Z[f[H]]??"").filter(Z=>Z.length>0))),j=c.map((F,H)=>{const Z=T[H]??"string",le={field:F.field,label:F.label,type:Z},Ze=bl(Z),Ce=F.renderer??Ze;return Ce&&(le.renderer=Ce),F.default!==void 0&&(le.default=F.default),F.max!=null&&(le.max=F.max),F.unique&&(le.unique=!0),F.notnull&&(le.notnull=!0),F.hidden&&(le.hidden=!0),le}),R=m.map(F=>{const H={};for(let Z=0;Z<f.length;Z++){const le=f[Z],Ze=T[Z]??"string";H[le]=$s(F[le]??"",Ze)}return H});return{columns:j,rows:R}}const gl=new Set(["string","number","boolean","date","datetime"]),Bo={color:"color",image:"image"};function bl(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function yl(e,t){const r=e.trim();if(!r.includes(":"))return{field:Ai(r||`col_${t+1}`),label:r||`Column ${t+1}`};const o=r.split(":"),n=Ai(o[0]||`col_${t+1}`),l=(o[1]??o[0]??"").trim()||n,c={field:n,label:l},f=(o[2]??"").trim();f&&(gl.has(f)?c.type=f:Bo[f]&&(c.type="string",c.renderer=Bo[f]));const m=(o[3]??"").trim();m&&(c.default=m);const T=(o[4]??"").trim();if(T){const R=Number(T);Number.isFinite(R)&&R>0&&(c.max=R)}const j=(o[5]??"").toLowerCase();return j.includes("u")&&(c.unique=!0),j.includes("n")&&(c.notnull=!0),j.includes("h")&&(c.hidden=!0),c}function ws(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),r={",":0,";":0,"	":0};for(const l of t)l in r&&(r[l]+=1);let o=",",n=-1;for(const l of[",",";","	"])(r[l]??0)>n&&(o=l,n=r[l]??0);return o}function xs(e,t){const r=[];let o=[],n="",l=!1;for(let c=0;c<e.length;c++){const f=e[c];l?f==='"'?e[c+1]==='"'?(n+='"',c++):l=!1:n+=f:f==='"'?l=!0:f===t?(o.push(n),n=""):f===`
`||f==="\r"?(f==="\r"&&e[c+1]===`
`&&c++,o.push(n),r.push(o),o=[],n=""):n+=f}return(n.length>0||o.length>0)&&(o.push(n),r.push(o)),r}function vl(e){return e.length===0?"string":e.every(xl)?"boolean":e.every($l)?"number":e.every(Cl)?"datetime":e.every(El)?"date":"string"}const wl=/^(true|false|yes|no|0|1)$/i;function xl(e){return wl.test(e.trim())}function $l(e){const t=e.trim();if(t==="")return!1;const r=Number(t);return Number.isFinite(r)}function El(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function Cl(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function $s(e,t){const r=e.trim();switch(t){case"number":{if(r==="")return null;const o=Number(r);return Number.isFinite(o)?o:r}case"boolean":return r===""?null:/^(true|yes|1)$/i.test(r);case"date":return Es(r);case"datetime":return kl(r);default:return e}}function Es(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){let o=parseInt(t[1],10),n=parseInt(t[2],10);const l=t[3];let c=parseInt(l,10);l.length===2&&(c+=2e3);let f,m;return o>12?(f=o,m=n):n>12?(m=o,f=n):(f=o,m=n),`${c.toString().padStart(4,"0")}-${m.toString().padStart(2,"0")}-${f.toString().padStart(2,"0")}`}const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toISOString().slice(0,10)}function kl(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),r=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(r)return`${r[1]}T${r[2].padStart(5,"0")}`;const o=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(o)return`${Es(`${o[1]}/${o[2]}/${o[3]}`)}T${o[4].padStart(5,"0")}`;const n=new Date(e);if(!Number.isNaN(n.getTime())){const l=n.toISOString();return`${l.slice(0,10)}T${l.slice(11,16)}`}return e}function _l(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const o of Array.from(t.items))if(o.kind==="file"){const n=o.getAsFile();n&&r.push(n)}return r}return[]}function Sl(e){return!!(/\.csv$/i.test(e.name)||e.type==="text/csv"||e.type==="application/csv")}function Ai(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function Cr(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Pl=Object.freeze(Object.defineProperty({__proto__:null,init:hl,meta:fl,parseCsv:Ir,parseCsvRaw:vs},Symbol.toStringTag,{value:"Module"})),Al={name:"csv-export",version:"0.1.0",description:"Export a single table as a .csv file via a per-table button.",author:"easyDBAccess built-ins"},jl={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return Mi(e,t)}};function Tl(e){e.ui.registerExporter(jl),e.ui.registerTableButton({id:"csv-export:download",label:"CSV",icon:"file_download",tooltip:"Download this table as a .csv file",onClick:async(t,r)=>{const o=await t.store.tables.findOne(r.tableId);if(!o)return;const n=await t.store.rows(o.id).find(),l=Mi(o,n);await t.backend.saveFile(`${o.code||o.name||"table"}.csv`,l,"text/csv")}})}function Mi(e,t){const r=e.columns.map(l=>l.field),o=e.columns.map(l=>Lo(l.label??l.field)),n=t.map(l=>r.map(c=>Lo(Fl(l.data[c]))).join(","));return[o.join(","),...n].join(`\r
`)}function Fl(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function Lo(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const Ol=Object.freeze(Object.defineProperty({__proto__:null,init:Tl,meta:Al,serializeCsv:Mi},Symbol.toStringTag,{value:"Module"})),Dl={name:"json-import",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"easyDBAccess built-ins"};function Rl(e){e.ui.registerImporter(zl),e.ui.registerDropHandler(async t=>{const o=Ul(t).filter(Wl);if(o.length===0)return!1;t.preventDefault();for(const n of o)await Il(e,n);return!0})}const zl={id:"json",label:"JSON",accept:[".json",".db.json","application/json"],async parse(e){const t=typeof e=="string"?e:await e.text(),r=JSON.parse(t),n=Br(r,"imported")[0];return{columns:n?.columns??[],rows:n?.rows??[]}}};async function Il(e,t){await Ni(e,await t.text(),t.name)}async function Ni(e,t,r){const o=e.workspaceId();if(!o)throw new Error("json-import: no active workspace");let n;try{n=JSON.parse(t)}catch(F){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${r}: ${F.message}`)});return}const l=r.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",c=Br(n,l);if(c.length===0)return;const f=(await e.store.tables.find()).filter(F=>F.workspaceId===o),m=new Set(c.map(F=>F.name)),T=f.filter(F=>m.has(F.name));let j;if(T.length===0&&c.length===1)j="append-new";else{const F=T.length>0?[`Overwrite matching (${T.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],H=await e.ui.dialogs.choice(`Importing ${c.length} table${c.length===1?"":"s"} from "${r}".${T.length>0?`

${T.length} table${T.length===1?"":"s"} share a name with existing data.`:""}`,F,"JSON import");if(!H)return;H.startsWith("Overwrite matching")?j="overwrite-matching":H==="Replace entire workspace"?j="replace-workspace":j="append-new"}if(j==="replace-workspace")for(const F of f){const H=e.store.rows(F.id),Z=await H.find();await H.bulkRemove(Z.map(le=>le.id)),await e.store.tables.remove(F.id)}const R=new Map(f.map(F=>[F.name,F]));for(const F of c){let H;const Z=j==="overwrite-matching"?R.get(F.name):void 0;if(Z){H=Z.id;const Ce=e.store.rows(H),et=await Ce.find();await Ce.bulkRemove(et.map(Ct=>Ct.id)),await e.store.tables.patch(H,{columns:F.columns,...F.windowGeometry?{windowGeometry:F.windowGeometry}:{},...F.sortColumn?{sortColumn:F.sortColumn,sortAsc:F.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},updatedAt:Date.now()})}else H=Uo(),e.events.emit("import:before",{source:"json",tableId:H}),await e.store.tables.insert({id:H,workspaceId:o,name:F.name,code:Hl(F.name),columns:F.columns,view:"table",...F.windowGeometry?{windowGeometry:F.windowGeometry}:{},...F.sortColumn?{sortColumn:F.sortColumn,sortAsc:F.sortAsc??!0}:{},updatedAt:Date.now()});const le=e.store.rows(H),Ze=F.rows.map(Ce=>({id:Uo(),tableId:H,data:Ce,updatedAt:Date.now()}));await le.bulkInsert(Ze),e.events.emit("import:after",{source:"json",tableId:H,rowCount:F.rows.length})}}function Br(e,t){if(Ft(e)&&Mo(e))return No(e);if(Ft(e)&&Array.isArray(e.tables)){const r=e,o=[];for(const n of r.tables){if(Ll(n)){const l=n,c=Ft(l.windowGeometry)?l.windowGeometry:void 0,f=typeof l.sortColumn=="string"?l.sortColumn:void 0,m=typeof l.sortAsc=="boolean"?l.sortAsc:void 0;o.push({name:String(n.name),columns:n.columns.map(Ml),rows:Array.isArray(n.rows)?n.rows.filter(Ft):[],...c?{windowGeometry:c}:{},...f?{sortColumn:f,sortAsc:m??!0}:{}});continue}Ft(n)&&Mo(n)&&o.push(...No(n))}return o}if(Array.isArray(e)){const r=e.filter(Ft);return r.length===0?[]:[{name:t,...qo(r)}]}return Ft(e)?[{name:t,...qo([e])}]:[]}function Mo(e){for(const[t,r]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!Ft(r))continue;const o=r;if(Array.isArray(o.dataArray)&&Array.isArray(o.columns))return!0}return!1}function No(e){const t=[];for(const[r,o]of Object.entries(e)){if(!/\.table\.json$/.test(r)||!Ft(o))continue;const n=o;if(!Array.isArray(n.dataArray)||!Array.isArray(n.columns))continue;const l=r.replace(/\.table\.json$/,""),c=n.columns.map(j=>Bl(j)),f=c.map(j=>j.field),m=n.dataArray.filter(j=>Array.isArray(j)).map(j=>{const R={};for(let F=0;F<f.length;F++)R[f[F]]=j[F];return R}),T={name:l,columns:c,rows:m};if(n.elementRect&&typeof n.elementRect.x=="number"&&typeof n.elementRect.y=="number"){const j=n.elementRect;T.windowGeometry={x:j.x,y:j.y,w:j.width??600,h:j.height??400,z:j.zIndex??100,minimized:!!j.minimized,maximized:!!j.maximized}}typeof n.sortColumn=="number"&&n.sortColumn>=0&&n.sortColumn<f.length&&(T.sortColumn=f[n.sortColumn],T.sortAsc=(n.sortDirection??"asc")!=="desc"),t.push(T)}return t}function Bl(e){const t=String(e.field??"col"),r=String(e.name??t),o=typeof e.type=="string"?e.type:"string",n={field:t,label:r,type:o};return e.isUnique&&(n.unique=!0),e.isNotNull&&(n.notnull=!0),n}function Ll(e){return Ft(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function Ml(e){if(!Ft(e))return{field:"col",label:"Col",type:"string"};const t=e,r=String(t.field??"col");let o=typeof t.type=="string"?t.type:"string",n=typeof t.renderer=="string"?t.renderer:void 0;(o==="color"||o==="image")&&(n=n??o,o="string");const l={field:r,label:String(t.label??r),type:o};return n&&(l.renderer=n),typeof t.script=="string"&&(l.script=t.script),l}function qo(e){const t=new Set;for(const n of e)for(const l of Object.keys(n))t.add(l);return{columns:Array.from(t).map(n=>({field:n,label:n,type:Nl(e.map(l=>l[n]))})),rows:e}}function Nl(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&ql(r))?"date":"string"}function ql(e){if(/^\d+$/.test(e))return!1;const t=new Date(e);return!Number.isNaN(t.getTime())}function Ft(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Ul(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const o of Array.from(t.items))if(o.kind==="file"){const n=o.getAsFile();n&&r.push(n)}return r}return[]}function Wl(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}function Hl(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Uo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Kl=Object.freeze(Object.defineProperty({__proto__:null,importJsonText:Ni,init:Rl,meta:Dl,parsedToTables:Br},Symbol.toStringTag,{value:"Module"}));class Lr extends Error{constructor(t,r){const o=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(o),this.name="DatasetteError",this.status=r??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function qi(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const r=t.pathname.split("/").filter(Boolean),o={};for(const[f,m]of t.searchParams)o[f]=m;let n,l=null,c=null;if(r.length>=2){c=decodeURIComponent(r[r.length-1]),l=decodeURIComponent(r[r.length-2]);const f=r.slice(0,r.length-2).join("/");n=t.origin+(f?"/"+f:"")}else r.length===1&&(l=decodeURIComponent(r[0])),n=t.origin;return{base:n,db:l,table:c,query:o}}function Cs(e,t={}){const r=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[o,n]of Object.entries({...e.query,...t}))n!=null&&r.searchParams.set(o,String(n));return r.toString()}function Vl(e){const t=[],r=e?.tables;if(Array.isArray(r)){for(const o of r)if(typeof o=="string")t.push(o);else if(o&&typeof o=="object"){if(o.hidden===!0)continue;typeof o.name=="string"&&t.push(o.name)}}else if(r&&typeof r=="object")for(const[o,n]of Object.entries(r))n&&typeof n=="object"&&n.hidden===!0||t.push(o);return t}function Yl(e,t){const r=new URL(e);for(const[o,n]of Object.entries(t))n!=null&&!r.searchParams.has(o)&&r.searchParams.set(o,String(n));return r.toString()}function Xl(e){return{rows:Array.isArray(e?.rows)?e.rows:[],nextUrl:e?.next_url??null,hasMore:e?.next_url!=null,truncated:e?.truncated===!0}}function Gl(e,t=""){const r=String(e||"").toUpperCase();return r.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":r.includes("REAL")||r.includes("FLOA")||r.includes("DOUB")||r.includes("NUM")||r.includes("DEC")?"number":r.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function Ql(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],r=Array.isArray(e?.columns)?e.columns.slice():[],o={},n=e?.column_details;if(Array.isArray(n))for(const f of n)o[f.column??f.name]=f;else n&&typeof n=="object"&&Object.assign(o,n);for(const f of r)f in o||(o[f]={});return{columns:(r.length?r:Object.keys(o)).map(f=>{const m=o[f]||{},T=m.is_pk===!0||m.is_pk===1||t.includes(f),j={field:f,label:ks(f),type:Gl(m.sqlite_type??m.type,f)};return(m.notnull===!0||m.notnull===1||T)&&(j.notnull=!0),T&&(j.unique=!0),m.hidden===!0&&(j.hidden=!0),j}),pks:t}}function ks(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function Wo(e,t=[]){const r=[],o=new Set;for(const n of e)for(const l of Object.keys(n))o.has(l)||(o.add(l),r.push(l));return r.map(n=>{const l={field:n,label:ks(n),type:Jl(e.map(c=>c[n]),n)};return t.includes(n)&&(l.unique=!0,l.notnull=!0),l})}function Jl(e,t){const r=e.filter(o=>o!=null&&o!=="");return r.length===0?"string":r.every(o=>typeof o=="boolean")?"boolean":r.every(o=>typeof o=="number"&&Number.isFinite(o))?"number":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)&&r.every(o=>!Number.isNaN(new Date(String(o)).getTime()))?"datetime":"string"}async function Zl(e,t){const r=Cs(t,{_shape:"objects",_size:0,_extra:"columns,column_details,primary_keys,count"}),o=await e(r),n=await o.json();if(n&&n.ok===!1)throw new Lr(n,o.status);const{columns:l,pks:c}=Ql(n);return{columns:l,pks:c,count:n?.count??null,raw:n}}async function ec(e,t,r={}){const o=r.maxRows??1e4,n=r.pageSize??"max";let l=Cs(t,{_shape:"objects",_size:n,...r.extraParams||{}});const c=[];let f=!1,m=!1,T=0;for(;l;){const j=await e(l),R=await j.json();if(R&&R.ok===!1)throw new Lr(R,j.status);const F=Xl(R);c.push(...F.rows),f=f||F.truncated,T+=1,F.nextUrl&&c.length<o?l=Yl(F.nextUrl,{_shape:"objects"}):(m=F.nextUrl!=null,l=null)}return{rows:c,truncated:f,hasMore:m,pages:T}}var tc=Object.defineProperty,nc=Object.getOwnPropertyDescriptor,Mr=(e,t,r,o)=>{for(var n=o>1?void 0:o?nc(t,r):t,l=e.length-1,c;l>=0;l--)(c=e[l])&&(n=(o?c(t,r,n):c(n))||n);return o&&n&&tc(t,r,n),n};let Ot=class extends Ge{constructor(){super(...arguments),this.dbName="",this.tables=[],this.selected=new Set,this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault(),this.selected.size!==0&&this.finish(this.tables.filter(t=>this.selected.has(t)))}}connectedCallback(){super.connectedCallback(),Ot.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ot.instance===this&&(Ot.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$n(this.dialogEl,e)}open(e,t){return this.dbName=e,this.tables=[...t],this.selected=new Set(t),new Promise(r=>{this.resolveFn=r,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e,t){const r=new Set(this.selected);t?r.add(e):r.delete(e),this.selected=r}toggleAll(e){this.selected=e?new Set(this.tables):new Set}render(){const e=this.tables.length>0&&this.selected.size===this.tables.length;return G`
      <dialog @cancel=${this.onCancel} @keydown=${xn}>
        <button type="button" class="close-x" title="Close" @click=${()=>this.finish(null)}>
          ×
        </button>
        <form @submit=${this.submit}>
          <div class="dialog-header">
            <h2>Import tables from ${this.dbName}</h2>
            <div class="header-actions">
              <button type="button" class="ghost" @click=${()=>this.finish(null)}>Cancel</button>
              <button type="submit" class="primary" ?disabled=${this.selected.size===0}>
                Import ${this.selected.size}/${this.tables.length}
              </button>
            </div>
          </div>
          <div class="dialog-body">
            <label class="all">
              <input
                type="checkbox"
                .checked=${e}
                @change=${t=>this.toggleAll(t.target.checked)}
              />
              Select all
            </label>
            <div class="list">
              ${this.tables.map(t=>G`
                  <label>
                    <input
                      type="checkbox"
                      data-table=${t}
                      .checked=${this.selected.has(t)}
                      @change=${r=>this.toggle(t,r.target.checked)}
                    />
                    ${t}
                  </label>
                `)}
            </div>
          </div>
        </form>
      </dialog>
    `}};Ot.instance=null;Ot.styles=[wn,ot`
      dialog {
        min-width: 380px;
        max-width: 520px;
      }
      .all {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 600;
        color: #374151;
        padding-bottom: 0.4rem;
        border-bottom: 1px solid #e5e7eb;
      }
      .list {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        max-height: 50vh;
        overflow: auto;
      }
      .list label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.9rem;
        color: #374151;
      }
      input[type='checkbox'] {
        width: 1rem;
        height: 1rem;
      }
    `];Mr([ne()],Ot.prototype,"dbName",2);Mr([ne()],Ot.prototype,"tables",2);Mr([ne()],Ot.prototype,"selected",2);Ot=Mr([dt("datasette-table-picker")],Ot);function rc(e,t){return(Ot.instance??document.body.appendChild(document.createElement("datasette-table-picker"))).open(e,t)}const ic={name:"datasette-source",version:"0.1.0",description:"Import a table from any online Datasette instance by URL",author:"easyDBAccess built-ins",optional:!0},Pr={maxImportRows:1e4,pageSize:"max"},oc="https://latest.datasette.io/fixtures/facetable";function sc(e){e.ui.registerUrlSource({id:"datasette",label:"Datasette table or database…",async run(t,{url:r}){const o=r||await t.ui.dialogs.prompt(`Datasette table or database URL

e.g. ${oc}`,"","Import from Datasette");o&&await Ho(t,o)}}),e.ui.registerDropHandler(async(t,r)=>{const o=t.dataTransfer?.getData("text/plain")||"";return ac(o)?(t.preventDefault(),await Ho(r,o),!0):!1})}async function Ho(e,t){try{await Ui(e,t)}catch(r){const o=r instanceof Lr?`Datasette error (${r.status??"?"}): ${r.message}`:`Could not import: ${r?.message??r}`;await e.ui.dialogs.alert(o,"Datasette import failed")}}function ac(e){try{return!!qi(e).db}catch{return!1}}async function Ui(e,t){const r=qi(t);if(!r.db)throw new Error("URL must point to a Datasette database or table, e.g. .../<database>[/<table>]");const n=await lc((l,c)=>e.backend.fetch(l,c),t);if(n.kind==="database"){await uc(e,r,n.tables);return}if(!r.table)throw new Error("That URL responds like a Datasette table but has no table name in its path.");await Wi(e,r,{announce:!0})}async function lc(e,t){const r=new URL(t);r.pathname=r.pathname.replace(/\.(json|csv)$/i,"")+".json";const o=await e(r.toString()),n=await o.json();if(n&&n.ok===!1)throw new Lr(n,o.status);const l=Vl(n),c=Array.isArray(n?.tables),f=Array.isArray(n?.rows)||Array.isArray(n?.columns);return c&&!f?{kind:"database",tables:l}:f?{kind:"table",tables:[]}:{kind:l.length>0?"database":"table",tables:l}}async function cc(e,t){const r=qi(t);if(!r.db||!r.table)throw new Error("URL must point to a table, e.g. .../<database>/<table>");return(await Wi(e,r,{announce:!0})).tableId}async function Wi(e,t,r={}){const o=e.workspaceId();if(!o)throw new Error("datasette-source: no active workspace");if(!t.db||!t.table)throw new Error("datasette-source: table ref requires db + table");const n=(Ce,et)=>e.backend.fetch(Ce,et),{columns:l,pks:c,count:f}=await Zl(n,t),{rows:m,truncated:T,hasMore:j,pages:R}=await ec(n,t,{maxRows:Pr.maxImportRows,pageSize:Pr.pageSize});let F=l;if(F.length===0)F=Wo(m,c);else{const Ce=new Set(F.map(Ct=>Ct.field)),et=Wo(m,c).filter(Ct=>!Ce.has(Ct.field));et.length>0&&(F=[...F,...et])}const H=Date.now(),Z=Ko(),le=`${t.db}/${t.table}`;e.events.emit("import:before",{source:"datasette",tableId:Z}),await e.store.tables.insert({id:Z,workspaceId:o,name:le,code:dc(`${t.db}-${t.table}`),columns:F,view:"table",updatedAt:H});const Ze=m.map(Ce=>({id:Ko(),tableId:Z,data:Ce,updatedAt:H}));if(await e.store.rows(Z).bulkInsert(Ze),e.events.emit("import:after",{source:"datasette",tableId:Z,rowCount:m.length}),r.announce){const Ce=f!=null?` of ${f}`:"";j||T?e.ui.dialogs.toast(`Imported first ${m.length}${Ce} rows from ${t.table} — more available (capped at ${Pr.maxImportRows}). Live paging arrives with the Phase-2 connector.`,{kind:"warning"}):e.ui.dialogs.toast(`Imported ${m.length} rows from ${t.table} (${R} page${R===1?"":"s"}).`,{kind:"success"})}return{tableId:Z,name:le,rowCount:m.length,count:f,hasMore:j,truncated:T}}async function uc(e,t,r){if(r.length===0)throw new Error(`No tables found in database "${t.db}".`);const o=await rc(t.db??"",r);if(o===null||o.length===0)return;e.ui.dialogs.toast(`Importing ${o.length} table${o.length===1?"":"s"} from ${t.db}…`,{kind:"info"});let n=0,l=0,c=0;const f=[];for(const T of o)try{const j=await Wi(e,{...t,table:T},{announce:!1});n+=1,l+=j.rowCount,(j.hasMore||j.truncated)&&(c+=1)}catch(j){f.push(`${T}: ${j?.message??j}`)}const m=c>0?` (${c} capped at ${Pr.maxImportRows} rows)`:"";n>0&&e.ui.dialogs.toast(`Imported ${n}/${o.length} table${o.length===1?"":"s"} (${l} rows) from ${t.db}${m}.`,{kind:f.length?"warning":"success"}),f.length>0&&e.ui.dialogs.toast(`${f.length} table${f.length===1?"":"s"} failed to import:
${f.slice(0,5).join(`
`)}${f.length>5?`
…and ${f.length-5} more.`:""}`,{kind:"error",title:"Datasette import"})}function dc(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Ko(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const fc=Object.freeze(Object.defineProperty({__proto__:null,importDatasette:Ui,importDatasetteTable:cc,init:sc,meta:ic},Symbol.toStringTag,{value:"Module"})),hc={name:"dump-export",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file.",author:"easyDBAccess built-ins"};function pc(e){e.ui.registerFooterButton({id:"dump-export:dump",label:"Dump",icon:"archive",tooltip:"Export the current workspace as a JSON dump file",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await Nr(e);await e.backend.saveFile(`workspace-${t}.db.json`,r,"application/json")}})}async function Nr(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),o={workspaceId:t,exportedAt:Date.now(),tables:[]};for(const n of r){const l=await e.store.rows(n.id).find();o.tables.push({name:n.name,columns:n.columns,rows:l.map(c=>c.data),...n.windowGeometry?{windowGeometry:n.windowGeometry}:{},...n.sortColumn?{sortColumn:n.sortColumn,sortAsc:n.sortAsc??!0}:{}})}return JSON.stringify(o,null,2)}const mc=Object.freeze(Object.defineProperty({__proto__:null,init:pc,meta:hc,serializeWorkspace:Nr},Symbol.toStringTag,{value:"Module"})),gc={name:"sql-export",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"easyDBAccess built-ins"};function bc(e){e.ui.registerFooterButton({id:"sql-export:dump",label:"SQL",icon:"storage",tooltip:"Export the current workspace as a .sql script",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await _s(e);await e.backend.saveFile(`workspace-${t}.sql`,r,"application/sql")}})}async function _s(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),o=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const n of r){const l=await e.store.rows(n.id).find();o.push(yc(n,l),"")}return o.push("COMMIT;",""),o.join(`
`)}function yc(e,t){const r=ji(e.code||e.name||`table_${e.id}`),o=['  "__id" TEXT PRIMARY KEY',...e.columns.map(l=>`  ${vc(l)}`)],n=[`DROP TABLE IF EXISTS "${r}";`,`CREATE TABLE "${r}" (`,o.join(`,
`),");"];if(t.length>0){const c=["__id",...e.columns.map(f=>f.field)].map(f=>`"${ji(f)}"`).join(", ");for(const f of t){const m=[Vo(f.id),...e.columns.map(T=>Vo(f.data[T.field],T.type))];n.push(`INSERT INTO "${r}" (${c}) VALUES (${m.join(", ")});`)}}return n.join(`
`)}function vc(e){const t=[`"${ji(e.field)}"`,wc(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function wc(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function Vo(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const r=xc(e);return r===null?"NULL":kr(r)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?kr(e.toISOString()):kr(typeof e=="string"?e:JSON.stringify(e))}function xc(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?Yo(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(r)return`${r[1]}${r[2]}${r[3]}`;const o=new Date(t);return Number.isFinite(o.getTime())?Yo(o):null}return null}function Yo(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),r=String(e.getUTCMonth()+1).padStart(2,"0"),o=String(e.getUTCDate()).padStart(2,"0");return`${t}${r}${o}`}function kr(e){return`'${e.replace(/'/g,"''")}'`}function ji(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const $c=Object.freeze(Object.defineProperty({__proto__:null,init:bc,meta:gc,serializeWorkspaceAsSql:_s},Symbol.toStringTag,{value:"Module"})),Ec={name:"gist-sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"easyDBAccess built-ins"},Cc="gist:";function kc(e){e.ui.registerFooterButton({id:"gist-sync:push",label:"Push",icon:"cloud_upload",tooltip:"Push the current workspace to a GitHub Gist",onClick:async()=>{try{await Pc(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerFooterButton({id:"gist-sync:pull",label:"Pull",icon:"cloud_download",tooltip:"Pull the latest tables from the configured Gist",onClick:async()=>{try{await Ac(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}})}async function Ss(e){const t=e.workspaceId();return`${Cc}${t??"default"}`}async function _c(e){const t=await Ss(e),r=await e.store.settings.findOne(t);if(!r)return null;const o=r.value;return!o||!o.token||!o.user?null:{user:o.user,gistId:o.gistId??"",token:o.token}}async function Ps(e,t){const r=await Ss(e);await e.store.settings.upsert({key:r,value:t})}function Sc(e){const t={};for(const r of e.split(";")){const o=r.indexOf("=");if(o<0)continue;const n=r.slice(0,o).trim(),l=r.slice(o+1).trim();n&&(t[n]=l)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function As(e){const t=await _c(e);if(t)return t;const r=await e.ui.dialogs.prompt(`Connection string format:
user=<github-user>;gist_id=<id>;gist_token=<pat>;

Leave gist_id empty to create a new gist on first Push.`,"","Gist credentials");if(!r)return null;const o=Sc(r);return o?(await Ps(e,o),o):(await e.ui.dialogs.alert("Could not parse connection string. Make sure it contains user=… and gist_token=….","Gist credentials"),null)}async function Pc(e){const t=await As(e);if(!t)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const o=(await e.store.tables.find()).filter(m=>m.workspaceId===r);if(o.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const n={},l=[];for(const m of o){const T=await e.store.rows(m.id).find(),j=JSON.stringify(jc(m,T),null,2);j.length>1e8&&l.push(`${m.name} (${(j.length/1e6).toFixed(2)} MB)`),n[`${js(m.name)}.table.json`]={content:j}}if(l.length>0&&!await e.ui.dialogs.confirm(`These tables exceed Gist's 100 MB-per-file limit and will be rejected:

${l.join(`
`)}

Push anyway?`,"Gist size warning"))return;n["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1"},null,2)};let c;if(t.gistId){const m=await fetch(`https://api.github.com/gists/${t.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:n,description:`easyDBAccess workspace: ${r}`})});if(!m.ok)throw new Error(await Ti(m));c=await m.json()}else{const m=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:n})});if(!m.ok)throw new Error(await Ti(m));c=await m.json(),t.gistId=c.id,await Ps(e,t)}const f=c.html_url??`https://gist.github.com/${t.user}/${c.id}`;e.ui.dialogs.toast(`Pushed ${o.length} table${o.length===1?"":"s"}.  ${f}`,{kind:"success",title:"Gist sync"})}async function Ac(e){const t=await As(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const r=e.workspaceId();if(!r)throw new Error("no active workspace");const o=await fetch(`https://api.github.com/gists/${t.gistId}`,{headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)throw new Error(await Ti(o));const n=await o.json(),l=Object.entries(n.files).filter(([T])=>T.endsWith(".table.json")&&!T.startsWith("_easydb"));if(l.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const c=(await e.store.tables.find()).filter(T=>T.workspaceId===r),f=new Map(c.map(T=>[T.name,T]));let m=0;for(const[,T]of l){const j=JSON.parse(T.content);if(!j.name||!Array.isArray(j.columns))continue;let R;const F=f.get(j.name);if(F){R=await e.store.tables.patch(F.id,{columns:j.columns,updatedAt:Date.now()});const Z=e.store.rows(F.id),le=await Z.find();await Z.bulkRemove(le.map(Ze=>Ze.id))}else R=await e.store.tables.insert({id:Xo(),workspaceId:r,name:j.name,code:js(j.name),columns:j.columns,view:"table",updatedAt:Date.now()});const H=(j.rows??[]).map(Z=>({id:Xo(),tableId:R.id,data:Z,updatedAt:Date.now()}));await e.store.rows(R.id).bulkInsert(H),m++}e.ui.dialogs.toast(`Pulled ${m} table${m===1?"":"s"} from gist ${t.gistId}.`,{kind:"success",title:"Gist sync"})}function jc(e,t){return{name:e.name,columns:e.columns,rows:t.map(r=>r.data)}}async function Ti(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}function js(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Xo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Tc=Object.freeze(Object.defineProperty({__proto__:null,init:kc,meta:Ec},Symbol.toStringTag,{value:"Module"})),Ts="server-sync:url";function Fs(e){return`server-sync:etag:${e}`}async function Os(e){const r=(await e.store.settings.findOne(Ts))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}async function Fc(e,t){await e.store.settings.upsert({key:Ts,value:t.replace(/\/+$/,"")})}async function Ds(e,t){const o=(await e.store.settings.findOne(Fs(t)))?.value;return typeof o=="string"?o:null}async function vn(e,t,r){await e.store.settings.upsert({key:Fs(t),value:r})}function qr(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function Go(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function Rs(e,t,r){const o=Br(r,t),n=(await e.store.tables.find()).filter(c=>c.workspaceId===t);for(const c of n){const f=e.store.rows(c.id),m=await f.find();await f.bulkRemove(m.map(T=>T.id)),await e.store.tables.remove(c.id)}let l=0;for(const c of o){const f=Qo(),m=await e.store.tables.insert({id:f,workspaceId:t,name:c.name,code:Oc(c.name),columns:c.columns,view:"table",...c.windowGeometry?{windowGeometry:c.windowGeometry}:{},...c.sortColumn?{sortColumn:c.sortColumn,sortAsc:c.sortAsc??!0}:{},updatedAt:Date.now()}),T=c.rows.map(j=>({id:Qo(),tableId:m.id,data:j,updatedAt:Date.now()}));await e.store.rows(m.id).bulkInsert(T),l++}return l}function Oc(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Qo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Dc={name:"server-sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"easyDBAccess built-ins"};function Rc(e){e.ui.registerFooterButton({id:"server-sync:push",label:"Sync ↑",icon:"cloud_upload",tooltip:"Push this workspace to the configured server",onClick:async()=>{try{await zc(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Server sync"})}}}),e.ui.registerFooterButton({id:"server-sync:pull",label:"Sync ↓",icon:"cloud_download",tooltip:"Pull this workspace from the configured server",onClick:async()=>{try{await Ic(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Server sync"})}}})}async function zc(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await zs(e);if(!r)return;const o=await Nr(e),n=await Ds(e,t),l={"Content-Type":"application/json"};n&&(l["If-Match"]=`"${n}"`);let c=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:l,body:o});if(c.status===412){const m=await c.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){m.currentEtag&&await vn(e,t,m.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}c=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:o})}if(!c.ok)throw new Error(await Is(c));const f=qr(c.headers.get("ETag"));f&&await vn(e,t,f),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${r}.`,{kind:"success",title:"Server sync"})}async function Ic(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await zs(e);if(!r||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const n=await fetch(`${r}/sync/${encodeURIComponent(t)}`);if(n.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!n.ok)throw new Error(await Is(n));const l=qr(n.headers.get("ETag")),c=await n.json(),f=await Rs(e,t,c);l&&await vn(e,t,l),e.ui.dialogs.toast(`Pulled ${f} table${f===1?"":"s"} from ${r}.`,{kind:"success",title:"Server sync"})}async function zs(e){const t=await Os(e);if(t)return t;const r=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!r)return null;try{new URL(r)}catch{return await e.ui.dialogs.alert(`"${r}" is not a valid URL.`,"Server sync"),null}return await Fc(e,r),r.replace(/\/+$/,"")}async function Is(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Bc=Object.freeze(Object.defineProperty({__proto__:null,init:Rc,meta:Dc},Symbol.toStringTag,{value:"Module"})),Lc={name:"new-table",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"easyDBAccess built-ins"};function Mc(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const Nc=Object.freeze(Object.defineProperty({__proto__:null,init:Mc,meta:Lc},Symbol.toStringTag,{value:"Module"})),qc={name:"plugin-manager-button",version:"0.1.0",description:"Registers a footer button that opens the Plugin Manager dialog.",author:"easyDBAccess built-ins"};function Uc(e){e.ui.registerFooterButton({id:"plugin-manager:open",label:"Plugins",icon:"extension",tooltip:"Add, disable, or remove plugins",onClick:()=>e.ui.openPluginManager()})}const Wc=Object.freeze(Object.defineProperty({__proto__:null,init:Uc,meta:qc},Symbol.toStringTag,{value:"Module"})),Hc={name:"core-renderers",version:"0.1.0",description:"Built-in cell renderers: date, datetime, boolean, script.",author:"easyDBAccess built-ins"};function Kc(e){customElements.get("cell-date")||customElements.define("cell-date",Vc),customElements.get("cell-datetime")||customElements.define("cell-datetime",Yc),customElements.get("cell-boolean")||customElements.define("cell-boolean",Xc),customElements.get("cell-script")||customElements.define("cell-script",Qc),e.ui.registerCellRenderer("date","cell-date"),e.ui.registerCellRenderer("datetime","cell-datetime"),e.ui.registerCellRenderer("boolean","cell-boolean"),e.ui.registerCellRenderer("script","cell-script")}class Vc extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="date",t.value=Zc(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class Yc extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="datetime-local",t.value=eu(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class Xc extends HTMLElement{constructor(){super(...arguments),this._value=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="checkbox",t.checked=Gc(this._value),t.style.cssText="transform:translateY(1px);cursor:pointer",t.addEventListener("change",()=>this.commit(t.checked)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Gc(e){return e===!0||e==="true"||e===1||e==="1"}class Qc extends HTMLElement{constructor(){super(...arguments),this._column=null,this._row={}}set column(t){this._column=t,this.render()}get column(){return this._column}set row(t){this._row=t??{},this.render()}get row(){return this._row}set value(t){}get value(){}connectedCallback(){this.render()}render(){this.innerHTML="";const t=this._column?.script;if(!t||!t.trim()){const l=document.createElement("span");l.textContent="(no script)",l.style.cssText="color:#9ca3af;font-style:italic",this.append(l);return}let r;try{r=Jc(t)}catch(l){this.append(Ci("compile error",l));return}let o;try{o=r(this._row)}catch(l){this.append(Ci("runtime error",l));return}if(typeof o!="string"){this.append(Ci("render(row) did not return a string",null));return}const n=document.createElement("span");n.style.cssText="display:inline-block;width:100%",n.innerHTML=o,this.append(n)}}const Jo=new Map;function Jc(e){const t=Jo.get(e);if(t)return t;const r=new Function("row",`${e}
return render(row);`);return Jo.set(e,r),r}function Ci(e,t){const r=document.createElement("span");if(r.textContent=`⚠ ${e}`,r.style.cssText="color:#b91c1c;font-size:0.8em;font-family:ui-monospace,SFMono-Regular,monospace",t){const o=t instanceof Error?t.message:String(t);r.title=o}return r}function Zc(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function eu(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const o=new Date(t);if(Number.isNaN(o.getTime()))return"";const n=o.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}const tu=Object.freeze(Object.defineProperty({__proto__:null,init:Kc,meta:Hc},Symbol.toStringTag,{value:"Module"})),nu={name:"cell-color",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"easyDBAccess built-ins"};function ru(e){customElements.get("cell-color")||customElements.define("cell-color",iu),e.ui.registerCellRenderer("color","cell-color")}class iu extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,r,o){this.value=o}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const r=document.createElement("input");r.type="color",r.value=t,r.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",r.addEventListener("change",()=>this.commit(r.value)),this.append(r)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const ou=Object.freeze(Object.defineProperty({__proto__:null,init:ru,meta:nu},Symbol.toStringTag,{value:"Module"})),su={name:"cell-image",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"easyDBAccess built-ins"};function au(e){customElements.get("cell-image")||customElements.define("cell-image",lu),e.ui.registerCellRenderer("image","cell-image")}class lu extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("span");if(t.style.cssText="display:inline-flex;align-items:center;gap:0.4rem",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const o=document.createElement("img");o.src=this._value,o.alt="",o.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(o)}else{const o=document.createElement("span");o.style.color="#9ca3af",o.textContent="no image",t.append(o);const n=document.createElement("button");n.type="button",n.textContent="upload",n.style.cssText="padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",n.addEventListener("click",()=>this.pickFile()),t.append(n)}this.append(t)}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const r=t.files?.[0];if(!r)return;const o=new FileReader;o.onload=()=>this.commit(String(o.result)),o.readAsDataURL(r)}),t.click()}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const cu=Object.freeze(Object.defineProperty({__proto__:null,init:au,meta:su},Symbol.toStringTag,{value:"Module"})),uu={name:"cell-link",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"easyDBAccess built-ins"};function du(e){customElements.get("cell-link")||customElements.define("cell-link",fu),e.ui.registerCellRenderer("link","cell-link")}class fu extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1}set value(t){const r=t==null?"":String(t);this._value!==r&&(this._value=r,this._editing=!1,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=this._value,r=this._editing?null:hu(t),o=!this._editing&&!r?pu(t):null,n=!this._editing&&!r&&!o?mu(t):null;if(r||o||n){const l=document.createElement("span");l.style.cssText="display:inline-flex;align-items:center;gap:0.25rem;width:100%";const c=document.createElement("a");c.href=r?t:o?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,r&&(c.target="_blank",c.rel="noopener noreferrer"),c.textContent=t,c.style.cssText="color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",c.title=r?`Open ${t}`:o?`Email ${t}`:`Call ${t}`;const f=document.createElement("button");f.type="button",f.title="Edit",f.textContent="✎",f.style.cssText="background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",f.addEventListener("click",m=>{m.preventDefault(),m.stopPropagation(),this._editing=!0,this.render()}),l.append(c,f),this.append(l)}else{const l=document.createElement("input");l.type="text",l.value=t,l.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",l.addEventListener("change",()=>this.commit(l.value)),l.addEventListener("keydown",c=>{c.key==="Enter"?(c.preventDefault(),this.commit(l.value)):c.key==="Escape"&&(this._editing=!1,this.render())}),this.append(l),this._editing&&setTimeout(()=>{l.focus(),l.select()},0)}}commit(t){this._value=t,this._editing=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function hu(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function pu(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function mu(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const r=t.replace(/\D/g,"");if(r.length<7||r.length>15)return null;const o=/[ ()\-.]/.test(t),n=t.startsWith("+");return!o&&!n&&r.length<10?null:t}const gu=Object.freeze(Object.defineProperty({__proto__:null,init:du,meta:uu},Symbol.toStringTag,{value:"Module"}));var bu=Object.defineProperty,yu=Object.getOwnPropertyDescriptor,Ur=(e,t,r,o)=>{for(var n=o>1?void 0:o?yu(t,r):t,l=e.length-1,c;l>=0;l--)(c=e[l])&&(n=(o?c(t,r,n):c(n))||n);return o&&n&&bu(t,r,n),n};const vu="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",Zo=[{label:"Northwind — sample database (JSON dump)",url:vu,kind:"json"},{label:"Datasette — fixtures / facetable",url:"https://latest.datasette.io/fixtures/facetable",kind:"datasette"},{label:"Datasette — fixtures / roadside_attractions",url:"https://latest.datasette.io/fixtures/roadside_attractions",kind:"datasette"},{label:"Datasette — global power plants",url:"https://datasette.io/global-power-plants/global-power-plants",kind:"datasette"}],wu={name:"import-data",version:"0.2.0",description:"Header button that imports a table from a URL — a JSON dump (e.g. Northwind) or a Datasette table — with a picker of sample sources.",author:"easyDBAccess built-ins",optional:!0};function xu(e){e.ui.registerHeaderButton({id:"import-data:open",label:"",icon:"cloud_download",tooltip:"Import data from a URL",onClick:()=>$u(e)})}async function $u(e){const r=await(Pt.instance??Eu()).open();if(!r)return;const{url:o,kind:n}=r;try{if(n==="datasette")await Ui(e,o);else{const l=await e.backend.fetch(o);if(!l.ok)throw new Error(`HTTP ${l.status} ${l.statusText}`);const c=await l.text();await Ni(e,c,es(o)),e.ui.dialogs.toast(`Imported ${es(o)}.`,{kind:"success",title:"Import"})}}catch(l){e.ui.dialogs.toast(`Could not import ${o}: ${l.message}`,{kind:"error",title:"Import"})}}function Eu(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function Cu(e){try{const t=new URL(e),r=t.hostname.toLowerCase(),n=t.pathname.replace(/\.(json|csv)$/i,"").split("/").filter(Boolean),l=[...t.searchParams.keys()].some(f=>f.startsWith("_"));return(r.includes("datasette")||l)&&n.length>=1?"datasette":"json"}catch{return"json"}}function es(e){try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();return r&&r.length>0?r:"sample.db.json"}catch{return"sample.db.json"}}let Pt=class extends Ge{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const r=this.kind==="auto"?Cu(t):this.kind;this.finish({url:t,kind:r})}}connectedCallback(){super.connectedCallback(),Pt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Pt.instance===this&&(Pt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$n(this.dialogEl,e)}open(){return this.url="",this.kind="auto",this.presetIdx=-1,new Promise(e=>{this.resolveFn=e,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t;const r=Zo[t];r&&(this.url=r.url,this.kind=r.kind)}render(){return G`
      <dialog @cancel=${this.onCancel} @keydown=${xn}>
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
              <select .value=${String(this.presetIdx)} @change=${e=>this.onPresetChange(e)}>
                <option value="-1" ?selected=${this.presetIdx===-1}>— choose a sample —</option>
                ${Zo.map((e,t)=>G`<option value=${String(t)} ?selected=${t===this.presetIdx}>
                      ${e.label}
                    </option>`)}
              </select>
            </label>

            <label>
              URL
              <input
                type="text"
                autofocus
                placeholder="e.g. https://datasette.io/global-power-plants/global-power-plants"
                .value=${this.url}
                @input=${e=>{this.url=e.target.value,this.presetIdx=-1}}
              />
            </label>

            <label>
              Import as
              <select
                .value=${this.kind}
                @change=${e=>{this.kind=e.target.value}}
              >
                <option value="auto" ?selected=${this.kind==="auto"}>Auto-detect</option>
                <option value="json" ?selected=${this.kind==="json"}>JSON dump</option>
                <option value="datasette" ?selected=${this.kind==="datasette"}>
                  Datasette
                </option>
              </select>
            </label>

            <p class="hint">
              Paste any URL or pick a sample above. A JSON dump imports every table in the file;
              a Datasette URL imports one table or a whole database — auto-detected from the
              response — as read-only snapshots, capped at 10,000 rows each.<br />
              Examples: <code>https://datasette.io/global-power-plants/global-power-plants</code>
              (one table) · <code>https://datasette.io/global-power-plants</code> (whole database).
            </p>
          </div>
        </form>
      </dialog>
      ${Ue}
    `}};Pt.instance=null;Pt.styles=[wn,ot`
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
        line-height: 1.5;
      }
      .hint code {
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 0.72rem;
        background: #f3f4f6;
        padding: 0.05rem 0.25rem;
        border-radius: 0.2rem;
        word-break: break-all;
      }
    `];Ur([ne()],Pt.prototype,"url",2);Ur([ne()],Pt.prototype,"kind",2);Ur([ne()],Pt.prototype,"presetIdx",2);Pt=Ur([dt("import-dialog")],Pt);const ku=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return Pt},init:xu,meta:wu},Symbol.toStringTag,{value:"Module"})),_u={name:"auto-sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"easyDBAccess built-ins",optional:!0},Su=6e4;let ts=null,Fi=!1;const ki=new Map;function Pu(e){ts===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(ts=setInterval(()=>{Bs(e)},Su)))}async function Bs(e){if(Fi)return;const t=e.workspaceId();if(!t)return;const r=await Os(e);if(r)try{await Au(e,r,t)}catch(o){console.warn("[auto-sync]",o)}}async function Au(e,t,r){const o=await Nr(e),n=await Ds(e,r),l=await fetch(`${t}/sync/${encodeURIComponent(r)}`);if(l.status===404){await ns(e,t,r,o,null);return}if(!l.ok)return;const c=qr(l.headers.get("ETag")),f=await l.text();if(Go(o)===Go(f)){c&&c!==n&&await vn(e,r,c);return}if(c&&c===n){await ns(e,t,r,o,n);return}if(!(c&&ki.get(r)===c)){Fi=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${r}". Pull and replace your local copy?`,"auto-sync")){const T=JSON.parse(f),j=await Rs(e,r,T);c&&await vn(e,r,c),ki.delete(r),e.ui.dialogs.toast(`Pulled ${j} table${j===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else c&&ki.set(r,c)}finally{Fi=!1}}}async function ns(e,t,r,o,n){const l={"Content-Type":"application/json"};n&&(l["If-Match"]=`"${n}"`);const c=await fetch(`${t}/sync/${encodeURIComponent(r)}`,{method:"PUT",headers:l,body:o});if(c.ok){const f=qr(c.headers.get("ETag"));f&&await vn(e,r,f);return}if(c.status===412){const f=await c.json().catch(()=>({}));f.currentEtag&&await vn(e,r,f.currentEtag)}}const Ls=Object.freeze(Object.defineProperty({__proto__:null,load:Pu,meta:_u,tick:Bs},Symbol.toStringTag,{value:"Module"})),Ms=[Nc,Pl,Kl,fc,Ol,mc,$c,Tc,Bc,Wc,tu,ou,cu,gu,ku,Ls],ju=Ms;function Oi(e){return`builtin:${e}`}async function Tu(e){const t=[];for(const r of Ms)if(!await Fu(e,r)){t.push(r);try{await r.init?.(e)}catch(o){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"init",error:o})}}return async()=>{for(const r of t)try{await r.load?.(e)}catch(o){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"load",error:o})}}}async function Fu(e,t){if(!t.meta?.optional)return!1;const r=t.meta.name;return r?(await e.store.plugins.findOne(Oi(r)))?.enabled===!1:!1}async function Ou(e){const t=e.workspaceId();if(!t)return async()=>{};const o=(await e.store.workspaces.findOne(t))?.pluginUrls??[],n=[];for(const l of o)try{const c=await e.store.plugins.findOne(l);if(c&&c.enabled===!1)continue;let f=c?.cachedBody??"";if(f)Du(e,l,f);else{try{f=await Ns(l)}catch(j){await e.store.plugins.upsert({url:l,enabled:c?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${j.message}`}),e.events.emit("plugin:error",{url:l,phase:"fetch",error:j});continue}await e.store.plugins.upsert({url:l,enabled:!0,lastFetched:Date.now(),cachedBody:f})}const m=new Blob([f],{type:"text/javascript"}),T=URL.createObjectURL(m);try{const j=await import(T);await j.init?.(e),n.push({url:l,mod:j})}finally{setTimeout(()=>URL.revokeObjectURL(T),5e3)}}catch(c){await e.store.plugins.upsert({url:l,enabled:!0,lastFetched:Date.now(),lastError:`init: ${c.message}`}),e.events.emit("plugin:error",{url:l,phase:"init",error:c})}return async()=>{for(const{url:l,mod:c}of n)try{await c.load?.(e)}catch(f){await e.store.plugins.upsert({url:l,enabled:!0,lastFetched:Date.now(),lastError:`load: ${f.message}`}),e.events.emit("plugin:error",{url:l,phase:"load",error:f})}}}async function Ns(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const r=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(r))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return r}function Du(e,t,r){return(async()=>{try{const o=await Ns(t);if(o===r)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:o})}catch{}})()}let _i=null;function Se(){return _i||(_i=Ru()),_i}async function Ru(){const e=await Qa(),t=Za(e),r=el(),o=al(),n=zu(),l=await t.workspaces.find();let c;if(n){const j=Iu(n),R=l.find(F=>F.id===j||F.name===n);R?c=R.id:c=(await t.workspaces.insert({id:j,name:n,createdAt:Date.now(),pluginUrls:[]})).id}else l.length===0?c=(await t.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id:c=l[0].id;const f=ul({store:t,events:r,registries:o,workspaceId:()=>c});r.on("import:after",({source:j,tableId:R,rowCount:F})=>{f.store.tables.findOne(R).then(H=>{f.ui.dialogs.toast(`Imported ${F} row${F===1?"":"s"} into "${H?.name??R}".`,{kind:"success",title:j.toUpperCase()+" import"})})}),r.on("plugin:error",({url:j,phase:R,error:F})=>{f.ui.dialogs.toast(`[${R}] ${F?.message??String(F)}`,{kind:"error",title:`Plugin: ${j}`})});const m=await Tu(f),T=await Ou(f);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:c}),await m(),await T()}),{store:t,events:r,workspaceId:c,registries:o,api:f}}function zu(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}function Iu(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var Bu=Object.defineProperty,Lu=Object.getOwnPropertyDescriptor,Wr=(e,t,r,o)=>{for(var n=o>1?void 0:o?Lu(t,r):t,l=e.length-1,c;l>=0;l--)(c=e[l])&&(n=(o?c(t,r,n):c(n))||n);return o&&n&&Bu(t,r,n),n};let On=class extends Ge{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$n(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let r;try{r=Ir(this.text)}catch(c){this.errorMsg=`Couldn't parse the CSV: ${c.message}`;return}if(r.columns.length===0||r.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const o=await Se(),n=crypto.randomUUID();await o.store.tables.insert({id:n,workspaceId:o.workspaceId,name:t,code:Mu(t),columns:r.columns,view:"table",updatedAt:Date.now()});const l=r.rows.map(c=>({id:crypto.randomUUID(),tableId:n,data:c,updatedAt:Date.now()}));await o.store.rows(n).bulkInsert(l),o.api.ui.dialogs.toast(`Imported ${r.rows.length} row${r.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return G`
      <dialog @cancel=${this.close} @keydown=${xn}>
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
            ${this.errorMsg?G`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};On.styles=[wn,ot`
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
    `];Wr([ne()],On.prototype,"name",2);Wr([ne()],On.prototype,"text",2);Wr([ne()],On.prototype,"errorMsg",2);On=Wr([dt("csv-paste-dialog")],On);function Mu(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}var Nu=Object.defineProperty,qu=Object.getOwnPropertyDescriptor,Hi=(e,t,r,o)=>{for(var n=o>1?void 0:o?qu(t,r):t,l=e.length-1,c;l>=0;l--)(c=e[l])&&(n=(o?c(t,r,n):c(n))||n);return o&&n&&Nu(t,r,n),n};const Uu=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return an HTML string; it is injected into the cell as raw HTML.
  return '<b>' + (row.name ?? '') + '</b>';
}
`;let Nt=class extends Ge{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),Nt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Nt.instance===this&&(Nt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$n(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:Uu,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(r=>{this.resolver=r})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return G`
      <dialog @cancel=${this.onCancel} @keydown=${xn}>
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
    `}};Nt.instance=null;Nt.styles=[wn,ot`
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
    `];Hi([ne()],Nt.prototype,"text",2);Hi([ne()],Nt.prototype,"columnLabel",2);Nt=Hi([dt("script-editor-dialog")],Nt);var Wu=Object.defineProperty,Hu=Object.getOwnPropertyDescriptor,Rt=(e,t,r,o)=>{for(var n=o>1?void 0:o?Hu(t,r):t,l=e.length-1,c;l>=0;l--)(c=e[l])&&(n=(o?c(t,r,n):c(n))||n);return o&&n&&Wu(t,r,n),n};const Ku=["string","number","boolean","date","datetime"];let $t=class extends Ge{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.columns=[],this.errorMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$n(this.dialogEl,e)}async open(e){this.errorMsg="";const t=await Se();if(this.rendererOptions=[...t.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.rendererSubUnsub=t.events.on("app:ready",()=>{this.rendererOptions=[...t.registries.cellRenderers.keys()].sort()}),e){const r=await Se(),o=await r.store.tables.findOne(e);if(!o)return;this.mode="edit",this.editTableId=e,this.name=o.name,this.columns=o.columns.map(l=>({field:l.field,label:l.label,type:l.type,renderer:l.renderer,script:l.script,max:l.max,unique:l.unique,notnull:l.notnull,hidden:l.hidden,origField:l.field}));const n=await r.store.rows(e).find();this.previewRows=n.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,r)=>r!==e)}moveColumn(e,t){const r=e+t;if(r<0||r>=this.columns.length)return;const o=[...this.columns],[n]=o.splice(e,1);o.splice(r,0,n),this.columns=o}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,r){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const o=r.getBoundingClientRect(),n=e.clientY<o.top+o.height/2;this.dropTargetIdx=t,this.dropEdge=n?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const r=this.dragSrcIdx,o=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,r===null||r===t||!o)return;const n=[...this.columns],[l]=n.splice(r,1);let c=t+(r<t?-1:0);o==="after"&&(c+=1),n.splice(c,0,l),this.columns=n}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((r,o)=>o===e?{...r,...t}:r)}async editScript(e){const t=Nt.instance;if(!t)return;const r=this.columns[e];if(!r)return;const o=await t.open(r.script??"",r.label||r.field);o!==null&&this.patchColumn(e,{script:o.trim()?o:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const r=new Set;for(const l of this.columns){const c=l.field.trim();if(!c){this.errorMsg="Column field names cannot be empty.";return}if(r.has(c)){this.errorMsg=`Duplicate column field: ${c}`;return}r.add(c)}const o=await Se(),n=this.columns.map(l=>{const c={field:l.field.trim(),label:l.label.trim()||l.field.trim(),type:l.type};return l.renderer&&(c.renderer=l.renderer),l.script&&(c.script=l.script),l.max!=null&&l.max>0&&(c.max=l.max),l.unique&&(c.unique=!0),l.notnull&&(c.notnull=!0),l.hidden&&(c.hidden=!0),c});if(this.mode==="edit"&&this.editTableId){const l=this.editTableId,c=await o.store.tables.findOne(l),f=new Map((c?.columns??[]).map(T=>[T.field,T])),m=n.filter(T=>{const j=f.get(T.field);return T.unique&&!j?.unique||T.notnull&&!j?.notnull||T.max&&T.max>0&&T.max!==j?.max});if(m.length>0){const T=await o.store.rows(l).find(),j=Xu(m,T);if(j.length>0){this.errorMsg=`Cannot save: ${j.length} existing ${j.length===1?"row violates":"rows violate"} the new constraints.
${j.slice(0,5).join(`
`)}${j.length>5?`
…and ${j.length-5} more.`:""}`;return}}await o.store.tables.patch(l,{name:t,columns:n,updatedAt:Date.now()})}else await o.store.tables.insert({id:Qu(),workspaceId:o.workspaceId,name:t,code:Gu(t),columns:n,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return G`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=new Map;for(const t of this.columns){if(!t.unique)continue;const r=new Set,o=new Set;for(const n of this.previewRows){const l=n.data[t.field];l==null||l===""||(r.has(l)&&o.add(l),r.add(l))}e.set(t.field,o)}return G`
      <div class="preview">
        <h3>Live preview — first ${this.previewRows.length} row${this.previewRows.length===1?"":"s"}</h3>
        <table>
          <thead>
            <tr>
              ${this.columns.map(t=>G`<th title=${t.field}>${t.label||t.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.previewRows.map(t=>G`
                <tr>
                  ${this.columns.map(r=>{const o=t.data[r.field],n=Yu(r,o,e.get(r.field));return G`<td
                      class=${n?"violation":""}
                      title=${n??""}
                    >${Vu(o)}</td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}renameDetected(){return this.mode==="edit"&&this.columns.some(e=>e.origField&&e.origField!==e.field.trim())}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return G`
      <dialog @cancel=${this.close} @keydown=${xn}>
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
            ${this.columns.map((r,o)=>{const n=this.dragSrcIdx===o,l=this.dropTargetIdx===o,c=l&&this.dropEdge==="before"?" drop-before":l&&this.dropEdge==="after"?" drop-after":"";return G`
                <div
                  class=${`col-row${n?" drag-source":""}${c}`}
                  @dragover=${f=>this.onRowDragOver(f,o,f.currentTarget)}
                  @dragleave=${()=>this.onRowDragLeave(o)}
                  @drop=${f=>this.onRowDrop(f,o)}
                >
                  <span
                    class="drag-handle"
                    title="Drag to reorder"
                    draggable="true"
                    @dragstart=${f=>this.onRowDragStart(f,o)}
                    @dragend=${()=>this.onRowDragEnd()}
                  >
                    <span class="mi sm">drag_indicator</span>
                  </span>
                  <input
                    type="text"
                    .value=${r.field}
                    @input=${f=>this.patchColumn(o,{field:f.target.value})}
                  />
                  <input
                    type="text"
                    .value=${r.label}
                    @input=${f=>this.patchColumn(o,{label:f.target.value})}
                  />
                  <select
                    .value=${r.type}
                    @change=${f=>this.patchColumn(o,{type:f.target.value})}
                  >
                    ${Ku.map(f=>G`<option value=${f} ?selected=${f===r.type}>${f}</option>`)}
                  </select>
                  <select
                    title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                    .value=${r.renderer??""}
                    @change=${f=>{const m=f.target.value;this.patchColumn(o,{renderer:m||void 0})}}
                  >
                    <option value="" ?selected=${!r.renderer}>— none —</option>
                    ${this.rendererOptions.map(f=>G`<option value=${f} ?selected=${f===r.renderer}>${f}</option>`)}
                  </select>
                  ${r.renderer==="script"?G`<button
                        type="button"
                        class="icon-btn"
                        title="Edit JS render(row)"
                        @click=${()=>this.editScript(o)}
                      >
                        <span class="mi sm">edit</span>
                      </button>`:G`<span></span>`}
                  <input
                    type="number"
                    min="0"
                    placeholder="—"
                    title="Max length (strings) or max value (numbers)"
                    .value=${r.max==null?"":String(r.max)}
                    @input=${f=>{const m=f.target.value;this.patchColumn(o,{max:m===""?void 0:Number(m)})}}
                  />
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Unique"
                      .checked=${!!r.unique}
                      @change=${f=>this.patchColumn(o,{unique:f.target.checked})}
                    />
                  </span>
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Not null"
                      .checked=${!!r.notnull}
                      @change=${f=>this.patchColumn(o,{notnull:f.target.checked})}
                    />
                  </span>
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Visible — uncheck to hide the column without losing its data"
                      .checked=${!r.hidden}
                      @change=${f=>this.patchColumn(o,{hidden:!f.target.checked})}
                    />
                  </span>
                  <button
                    type="button"
                    class="icon-btn"
                    title="Move up"
                    ?disabled=${o===0}
                    @click=${()=>this.moveColumn(o,-1)}
                  >
                    <span class="mi sm">arrow_upward</span>
                  </button>
                  <button
                    type="button"
                    class="icon-btn"
                    title="Move down"
                    ?disabled=${o===this.columns.length-1}
                    @click=${()=>this.moveColumn(o,1)}
                  >
                    <span class="mi sm">arrow_downward</span>
                  </button>
                  <button
                    type="button"
                    class="icon-btn row-del"
                    title="Remove column"
                    @click=${()=>this.removeColumn(o)}
                  >
                    <span class="mi sm">delete</span>
                  </button>
                </div>
              `})}
          </div>

          <button type="button" class="add" @click=${this.addColumn}>+ Add column</button>

          ${this.renameDetected()?G`<div class="hint">
                Renamed fields will appear empty for existing rows — the row data
                isn't migrated automatically.
              </div>`:""}
          ${this.errorMsg?G`<div class="error">${this.errorMsg}</div>`:""}
          ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};$t.styles=[Gt,wn,ot`
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
  `];Rt([ne()],$t.prototype,"mode",2);Rt([ne()],$t.prototype,"editTableId",2);Rt([ne()],$t.prototype,"name",2);Rt([ne()],$t.prototype,"columns",2);Rt([ne()],$t.prototype,"errorMsg",2);Rt([ne()],$t.prototype,"dragSrcIdx",2);Rt([ne()],$t.prototype,"dropTargetIdx",2);Rt([ne()],$t.prototype,"dropEdge",2);Rt([ne()],$t.prototype,"previewRows",2);Rt([ne()],$t.prototype,"rendererOptions",2);$t=Rt([dt("new-table-dialog")],$t);function Vu(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function Yu(e,t,r){const o=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&o)return`${e.label}: empty`;if(o)return null;if(e.type==="number"&&typeof t!="number"){const n=Number(t);if(!Number.isFinite(n))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!o){const n=new Date(String(t));if(Number.isNaN(n.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&r?.has(t)?`${e.label}: duplicate`:null}function Xu(e,t){const r=[];for(const o of e)if(o.notnull&&t.forEach((n,l)=>{const c=n.data[o.field];(c==null||typeof c=="string"&&c.trim()==="")&&r.push(`Row ${l+1}: ${o.label} is empty.`)}),o.max!=null&&o.max>0&&t.forEach((n,l)=>{const c=n.data[o.field];typeof c=="string"&&c.length>o.max?r.push(`Row ${l+1}: ${o.label} length ${c.length} > max ${o.max}.`):typeof c=="number"&&c>o.max&&r.push(`Row ${l+1}: ${o.label} value ${c} > max ${o.max}.`)}),o.unique){const n=new Map;t.forEach((l,c)=>{const f=l.data[o.field];f==null||f===""||(n.has(f)?r.push(`Row ${c+1}: ${o.label} duplicates row ${n.get(f)+1} ("${String(f)}").`):n.set(f,c))})}return r}function Gu(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Qu(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var Ju=Object.defineProperty,Zu=Object.getOwnPropertyDescriptor,At=(e,t,r,o)=>{for(var n=o>1?void 0:o?Zu(t,r):t,l=e.length-1,c;l>=0;l--)(c=e[l])&&(n=(o?c(t,r,n):c(n))||n);return o&&n&&Ju(t,r,n),n};let gt=class extends Ge{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.builtinNames=[],this.optionalBuiltins=[],this.dirtyBuiltins=!1,this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&$n(this.dialogEl,e)}async open(){const e=await Se(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const r=await e.store.plugins.find();this.records=new Map(r.map(l=>[l.url,l]));const o=[],n=[];for(const l of ju){const c=l.meta?.name;if(c)if(l.meta?.optional){const f=this.records.get(Oi(c));n.push({name:c,...l.meta?.description?{description:l.meta.description}:{},...l.meta?.author?{author:l.meta.author}:{},enabled:f?.enabled!==!1})}else o.push(c)}this.builtinNames=o,this.optionalBuiltins=n,this.dirtyBuiltins=!1,this.addUrl="",await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(),this.refreshServerRegistry()}async refreshCatalog(){const e=new URL("/plugins/catalog.json",location.origin).toString();try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json(),o=Array.isArray(r.plugins)?r.plugins:[];this.catalog=o.map(n=>({...n,absUrl:new URL(n.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const r=(await(await Se()).store.settings.findOne("server-sync:url"))?.value;if(typeof r!="string"||r.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const n=`${r.replace(/\/+$/,"")}/plugins/registry`;try{const l=await fetch(n,{cache:"no-store"});if(!l.ok)throw new Error(`HTTP ${l.status}`);const c=await l.json(),f=Array.isArray(c.plugins)?c.plugins:[];this.serverCatalog=f.map(m=>({...m,absUrl:new URL(m.url,n).toString()})),this.serverCatalogError=null}catch(l){this.serverCatalog=[],this.serverCatalogError=l.message}}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await Se()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const r=await Se();await r.store.workspaces.patch(r.workspaceId,{pluginUrls:this.urls}),await r.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const r=await Se(),o=this.records.get(e);await r.store.plugins.upsert({...o??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...o,url:e,enabled:t,lastFetched:o?.lastFetched??0}))}async removePlugin(e){const t=await Se();this.urls=this.urls.filter(r=>r!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const r=await Se(),o=Oi(e),n=this.records.get(o);await r.store.plugins.upsert({...n??{url:o,lastFetched:0},url:o,enabled:t,lastFetched:n?.lastFetched??0}),this.optionalBuiltins=this.optionalBuiltins.map(l=>l.name===e?{...l,enabled:t}:l),this.dirtyBuiltins=!0}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await Se();try{const r=await fetch(e.absUrl,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const o=await r.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:o});const n=new Blob([o],{type:"text/javascript"}),l=URL.createObjectURL(n);try{const f=await import(l);await f.init?.(t.api),await f.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(l),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const c=await t.store.plugins.find();this.records=new Map(c.map(f=>[f.url,f])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(r){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${r.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${r.message}`,{kind:"error",title:"Plugin error"})}finally{const r=new Set(this.installing);r.delete(e.absUrl),this.installing=r}}render(){return G`
      <dialog @cancel=${this.close} @keydown=${xn}>
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
            ${this.catalog.length>0?G`<div class="section-h">Available from this host</div>`:""}
            ${this.catalog.map(e=>{const t=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return G`
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
            ${this.catalogError?G`<div class="meta err">
                  Host catalog unavailable: ${this.catalogError}
                </div>`:""}

            ${this.serverCatalog.length>0||this.serverCatalogError?G`<div class="section-h">From server</div>`:""}
            ${this.serverCatalog.map(e=>{const t=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return G`
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
            ${this.serverCatalogError?G`<div class="meta err">
                  Server registry unavailable: ${this.serverCatalogError}
                </div>`:""}

            ${this.optionalBuiltins.length>0?G`<div class="section-h">Optional built-ins</div>`:""}
            ${this.optionalBuiltins.map(e=>G`
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
            ${this.builtinNames.map(e=>G`
                <div class="row builtin">
                  <span class="mi sm">extension</span>
                  <div>
                    <div>${e}</div>
                    <div class="meta">Built-in</div>
                  </div>
                  <span class="meta">always on</span>
                </div>
              `)}

            ${this.urls.length>0?G`<div class="section-h">Installed (by URL)</div>`:""}
            ${this.urls.map(e=>{const t=this.records.get(e),r=t?.lastError?" error":"",o=t?.lastFetched?new Date(t.lastFetched).toLocaleString():"never";return G`
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
                      ${t?.lastError??`Last fetched: ${o}`}
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
    `}};gt.styles=[Gt,wn,ot`
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
    `];At([ne()],gt.prototype,"urls",2);At([ne()],gt.prototype,"records",2);At([ne()],gt.prototype,"addUrl",2);At([ne()],gt.prototype,"builtinNames",2);At([ne()],gt.prototype,"optionalBuiltins",2);At([ne()],gt.prototype,"dirtyBuiltins",2);At([ne()],gt.prototype,"catalog",2);At([ne()],gt.prototype,"catalogError",2);At([ne()],gt.prototype,"serverCatalog",2);At([ne()],gt.prototype,"serverCatalogError",2);At([ne()],gt.prototype,"installing",2);gt=At([dt("plugin-manager-dialog")],gt);/**
 * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu
 * @version v4.16.1
 * @homepage https://jspanel.de/
 * @license MIT
 * @author Stefan Sträßer - info@jspanel.de
 * @author of dialog extension: Michael Daumling - michael@terrapinlogo.com
 * @github https://github.com/Flyer53/jsPanel4.git
 */let O={version:"4.16.1",date:"2022-11-03 09:18",ajaxAlwaysCallbacks:[],autopositionSpacing:4,closeOnEscape:(()=>{document.addEventListener("keydown",e=>{(e.key==="Escape"||e.code==="Escape"||e.key==="Esc")&&O.getPanels(t=>t.classList.contains("jsPanel")).some(t=>t.options.closeOnEscape?typeof t.options.closeOnEscape=="function"?t.options.closeOnEscape.call(t,t):(t.close(null,!0),!0):!1)},!1)})(),defaults:{boxShadow:3,container:"window",contentSize:{width:"400px",height:"200px"},dragit:{cursor:"move",handles:".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",opacity:.8,disableOnMaximized:!0},header:!0,headerTitle:"jsPanel",headerControls:{size:"md"},iconfont:void 0,maximizedMargin:0,minimizeTo:"default",paneltype:"standard",position:{my:"center",at:"center"},resizeit:{handles:"n, e, s, w, ne, se, sw, nw",minWidth:128,minHeight:38},theme:"default"},defaultAutocloseConfig:{time:"8s",progressbar:!0},defaultSnapConfig:{sensitivity:70,trigger:"panel",active:"both"},extensions:{},globalCallbacks:!1,icons:{close:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>',maximize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>',normalize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>',minimize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>',smallify:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>'},idCounter:0,isIE:document.documentMode||!1,pointerdown:"onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],pointermove:"onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],pointerup:"onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"],polyfills:(()=>{Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e==null)throw new TypeError("Cannot convert first argument to object");let t=Object(e);for(let r=1;r<arguments.length;r++){let o=arguments[r];if(o==null)continue;o=Object(o);let n=Object.keys(Object(o));for(let l=0,c=n.length;l<c;l++){let f=n[l],m=Object.getOwnPropertyDescriptor(o,f);m!==void 0&&m.enumerable&&(t[f]=o[f])}}return t}}),Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),r=t.length,o=new Array(r);r--;)o[r]=[t[r],e[t[r]]];return o}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(let r=0;r<this.length;r++)e.call(t,this[r],r,this)}),(function(e){e.forEach(function(t){t.append=t.append||function(){let r=Array.prototype.slice.call(arguments),o=document.createDocumentFragment();r.forEach(function(n){let l=n instanceof Node;o.appendChild(l?n:document.createTextNode(String(n)))}),this.appendChild(o)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){let t=(this.document||this.ownerDocument).querySelectorAll(e),r,o=this;do for(r=t.length;--r>=0&&t.item(r)!==o;);while(r<0&&(o=o.parentElement));return o}),(function(){if(typeof window.CustomEvent=="function")return!1;function e(t,r){r=r||{bubbles:!1,cancelable:!1,detail:void 0};let o=document.createEvent("CustomEvent");return o.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),o}e.prototype=window.Event.prototype,window.CustomEvent=e})(),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(t===void 0||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var r=t>0?t|0:0;return this.substring(r,r+e.length)===e}}),String.prototype.includes||(String.prototype.includes=function(e,t){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return t===void 0&&(t=0),this.indexOf(e,t)!==-1}),String.prototype.repeat||(String.prototype.repeat=function(e){if(this==null)throw new TypeError("can't convert "+this+" to object");var t=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),t.length==0||e==0)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,r-t.length),t}),Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw new TypeError('"this" is null or not defined');let r=Object(this),o=r.length>>>0;if(o===0)return!1;let n=t|0,l=Math.max(n>=0?n:o-Math.abs(n),0);function c(f,m){return f===m||typeof f=="number"&&typeof m=="number"&&isNaN(f)&&isNaN(m)}for(;l<o;){if(c(r[l],e))return!0;l++}return!1}})})(),ziBase:100,colorFilledLight:.81,colorFilledDark:.08,colorFilled:0,colorBrightnessThreshold:.55,colorNames:{default:"b0bec5",secondary:"b0bec5",primary:"01579b",info:"039be5",success:"2e7d32",warning:"f57f17",danger:"dd2c00",light:"e0e0e0",dark:"263238",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",grey50:"fafafa",grey100:"f5f5f5",grey200:"eeeeee",grey300:"e0e0e0",grey400:"bdbdbd",grey500:"9e9e9e",grey600:"757575",grey700:"616161",grey800:"424242",grey900:"212121",gray50:"fafafa",gray100:"f5f5f5",gray200:"eeeeee",gray300:"e0e0e0",gray400:"bdbdbd",gray500:"9e9e9e",gray600:"757575",gray700:"616161",gray800:"424242",gray900:"212121",bluegrey50:"eceff1",bluegrey100:"CFD8DC",bluegrey200:"B0BEC5",bluegrey300:"90A4AE",bluegrey400:"78909C",bluegrey500:"607D8B",bluegrey600:"546E7A",bluegrey700:"455A64",bluegrey800:"37474F",bluegrey900:"263238",bluegray50:"eceff1",bluegray100:"CFD8DC",bluegray200:"B0BEC5",bluegray300:"90A4AE",bluegray400:"78909C",bluegray500:"607D8B",bluegray600:"546E7A",bluegray700:"455A64",bluegray800:"37474F",bluegray900:"263238",red50:"FFEBEE",red100:"FFCDD2",red200:"EF9A9A",red300:"E57373",red400:"EF5350",red500:"F44336",red600:"E53935",red700:"D32F2F",red800:"C62828",red900:"B71C1C",reda100:"FF8A80",reda200:"FF5252",reda400:"FF1744",reda700:"D50000",pink50:"FCE4EC",pink100:"F8BBD0",pink200:"F48FB1",pink300:"F06292",pink400:"EC407A",pink500:"E91E63",pink600:"D81B60",pink700:"C2185B",pink800:"AD1457",pink900:"880E4F",pinka100:"FF80AB",pinka200:"FF4081",pinka400:"F50057",pinka700:"C51162",purple50:"F3E5F5",purple100:"E1BEE7",purple200:"CE93D8",purple300:"BA68C8",purple400:"AB47BC",purple500:"9C27B0",purple600:"8E24AA",purple700:"7B1FA2",purple800:"6A1B9A",purple900:"4A148C",purplea100:"EA80FC",purplea200:"E040FB",purplea400:"D500F9",purplea700:"AA00FF",deeppurple50:"EDE7F6",deeppurple100:"D1C4E9",deeppurple200:"B39DDB",deeppurple300:"9575CD",deeppurple400:"7E57C2",deeppurple500:"673AB7",deeppurple600:"5E35B1",deeppurple700:"512DA8",deeppurple800:"4527A0",deeppurple900:"311B92",deeppurplea100:"B388FF",deeppurplea200:"7C4DFF",deeppurplea400:"651FFF",deeppurplea700:"6200EA",indigo50:"E8EAF6",indigo100:"C5CAE9",indigo200:"9FA8DA",indigo300:"7986CB",indigo400:"5C6BC0",indigo500:"3F51B5",indigo600:"3949AB",indigo700:"303F9F",indigo800:"283593",indigo900:"1A237E",indigoa100:"8C9EFF",indigoa200:"536DFE",indigoa400:"3D5AFE",indigoa700:"304FFE",blue50:"E3F2FD",blue100:"BBDEFB",blue200:"90CAF9",blue300:"64B5F6",blue400:"42A5F5",blue500:"2196F3",blue600:"1E88E5",blue700:"1976D2",blue800:"1565C0",blue900:"0D47A1",bluea100:"82B1FF",bluea200:"448AFF",bluea400:"2979FF",bluea700:"2962FF",lightblue50:"E1F5FE",lightblue100:"B3E5FC",lightblue200:"81D4FA",lightblue300:"4FC3F7",lightblue400:"29B6F6",lightblue500:"03A9F4",lightblue600:"039BE5",lightblue700:"0288D1",lightblue800:"0277BD",lightblue900:"01579B",lightbluea100:"80D8FF",lightbluea200:"40C4FF",lightbluea400:"00B0FF",lightbluea700:"0091EA",cyan50:"E0F7FA",cyan100:"B2EBF2",cyan200:"80DEEA",cyan300:"4DD0E1",cyan400:"26C6DA",cyan500:"00BCD4",cyan600:"00ACC1",cyan700:"0097A7",cyan800:"00838F",cyan900:"006064",cyana100:"84FFFF",cyana200:"18FFFF",cyana400:"00E5FF",cyana700:"00B8D4",teal50:"E0F2F1",teal100:"B2DFDB",teal200:"80CBC4",teal300:"4DB6AC",teal400:"26A69A",teal500:"009688",teal600:"00897B",teal700:"00796B",teal800:"00695C",teal900:"004D40",teala100:"A7FFEB",teala200:"64FFDA",teala400:"1DE9B6",teala700:"00BFA5",green50:"E8F5E9",green100:"C8E6C9",green200:"A5D6A7",green300:"81C784",green400:"66BB6A",green500:"4CAF50",green600:"43A047",green700:"388E3C",green800:"2E7D32",green900:"1B5E20",greena100:"B9F6CA",greena200:"69F0AE",greena400:"00E676",greena700:"00C853",lightgreen50:"F1F8E9",lightgreen100:"DCEDC8",lightgreen200:"C5E1A5",lightgreen300:"AED581",lightgreen400:"9CCC65",lightgreen500:"8BC34A",lightgreen600:"7CB342",lightgreen700:"689F38",lightgreen800:"558B2F",lightgreen900:"33691E",lightgreena100:"CCFF90",lightgreena200:"B2FF59",lightgreena400:"76FF03",lightgreena700:"64DD17",lime50:"F9FBE7",lime100:"F0F4C3",lime200:"E6EE9C",lime300:"DCE775",lime400:"D4E157",lime500:"CDDC39",lime600:"C0CA33",lime700:"AFB42B",lime800:"9E9D24",lime900:"827717",limea100:"F4FF81",limea200:"EEFF41",limea400:"C6FF00",limea700:"AEEA00",yellow50:"FFFDE7",yellow100:"FFF9C4",yellow200:"FFF59D",yellow300:"FFF176",yellow400:"FFEE58",yellow500:"FFEB3B",yellow600:"FDD835",yellow700:"FBC02D",yellow800:"F9A825",yellow900:"F57F17",yellowa100:"FFFF8D",yellowa200:"FFFF00",yellowa400:"FFEA00",yellowa700:"FFD600",amber50:"FFF8E1",amber100:"FFECB3",amber200:"FFE082",amber300:"FFD54F",amber400:"FFCA28",amber500:"FFC107",amber600:"FFB300",amber700:"FFA000",amber800:"FF8F00",amber900:"FF6F00",ambera100:"FFE57F",ambera200:"FFD740",ambera400:"FFC400",ambera700:"FFAB00",orange50:"FFF3E0",orange100:"FFE0B2",orange200:"FFCC80",orange300:"FFB74D",orange400:"FFA726",orange500:"FF9800",orange600:"FB8C00",orange700:"F57C00",orange800:"EF6C00",orange900:"E65100",orangea100:"FFD180",orangea200:"FFAB40",orangea400:"FF9100",orangea700:"FF6D00",deeporange50:"FBE9E7",deeporange100:"FFCCBC",deeporange200:"FFAB91",deeporange300:"FF8A65",deeporange400:"FF7043",deeporange500:"FF5722",deeporange600:"F4511E",deeporange700:"E64A19",deeporange800:"D84315",deeporange900:"BF360C",deeporangea100:"FF9E80",deeporangea200:"FF6E40",deeporangea400:"FF3D00",deeporangea700:"DD2C00",brown50:"EFEBE9",brown100:"D7CCC8",brown200:"BCAAA4",brown300:"A1887F",brown400:"8D6E63",brown500:"795548",brown600:"6D4C41",brown700:"5D4037",brown800:"4E342E",brown900:"3E2723","mdb-default":"2BBBAD","mdb-default-dark":"00695c","mdb-primary":"4285F4","mdb-primary-dark":"0d47a1","mdb-secondary":"aa66cc","mdb-secondary-dark":"9933CC","mdb-danger":"ff4444","mdb-danger-dark":"CC0000","mdb-warning":"ffbb33","mdb-warning-dark":"FF8800","mdb-success":"00C851","mdb-success-dark":"007E33","mdb-info":"33b5e5","mdb-info-dark":"0099CC","mdb-elegant":"2E2E2E","mdb-elegant-dark":"212121","mdb-stylish":"4B515D","mdb-stylish-dark":"3E4551","mdb-unique":"3F729B","mdb-unique-dark":"1C2331","mdb-special":"37474F","mdb-special-dark":"263238"},errorReporting:1,modifier:!1,helper:(()=>{document.addEventListener("keydown",e=>O.modifier=e),document.addEventListener("keyup",()=>O.modifier=!1)})(),usePointerEvents(e=!0){e?(this.pointerdown="onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"]):(this.pointerdown="ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="ontouchend"in window?["touchend","mouseup"]:["mouseup"])},pOcontainer(e){if(e==="window")return document.body;if(typeof e=="string"){let t=document.querySelectorAll(e);return t.length&&t.length>0?t:!1}else{if(e.nodeType===1)return e;if(e.length)return e[0]}return!1},pOcontainment(e){let t=e;if(typeof e=="function"&&(t=e()),typeof t=="number")return[t,t,t,t];if(Array.isArray(t)){if(t.length===1)return[t[0],t[0],t[0],t[0]];if(t.length===2)return t.concat(t);t.length===3&&(t[3]=t[1])}return t},pOsize(e,t){let r=t||this.defaults.contentSize;const o=e.parentElement;if(typeof r=="string"){const n=r.trim().split(" ");r={},r.width=n[0],n.length===2?r.height=n[1]:r.height=n[0]}else r.width&&!r.height?r.height=r.width:r.height&&!r.width&&(r.width=r.height);if(String(r.width).match(/^[\d.]+$/gi))r.width+="px";else if(typeof r.width=="string"&&r.width.endsWith("%"))if(o===document.body)r.width=window.innerWidth*(parseFloat(r.width)/100)+"px";else{const n=window.getComputedStyle(o),l=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth);r.width=(parseFloat(n.width)-l)*(parseFloat(r.width)/100)+"px"}else typeof r.width=="function"&&(r.width=r.width.call(e,e),(typeof r.width=="number"||typeof r.width=="string"&&r.width.match(/^[\d.]+$/gi))&&(r.width+="px"));if(String(r.height).match(/^[\d.]+$/gi))r.height+="px";else if(typeof r.height=="string"&&r.height.endsWith("%"))if(o===document.body)r.height=window.innerHeight*(parseFloat(r.height)/100)+"px";else{const n=window.getComputedStyle(o),l=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth);r.height=(parseFloat(n.height)-l)*(parseFloat(r.height)/100)+"px"}else typeof r.height=="function"&&(r.height=r.height.call(e,e),(typeof r.height=="number"||typeof r.height=="string"&&r.height.match(/^[\d.]+$/gi))&&(r.height+="px"));return r},pOborder(e){let t=[],r=e.trim().replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," ").split(" ");return r.forEach((o,n)=>{(o.startsWith("--")||o.startsWith("var"))&&(r[n]=O.getCssVariableValue(o))}),r.forEach(o=>{O.colorNames[o]?t[2]="#"+O.colorNames[o]:o.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/)?t[1]=o:o.match(/(thin|medium|thick)|(\d*\.?\d*(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vmax|vmin|vb|vi|px|cm|mm|Q|in|pc|pt))/)?t[0]=o:t[2]=o}),t[0]||(t[0]="medium"),t[1]||(t[1]="solid"),t[2]||(t[2]=""),t},pOheaderControls(e){if(typeof e=="string"){let t={},r=e.toLowerCase(),o=r.match(/xl|lg|md|sm|xs/),n=r.match(/closeonly|none/);return o&&(t.size=o[0]),n&&(t=Object.assign({},t,{maximize:"remove",normalize:"remove",minimize:"remove",smallify:"remove"}),n[0]==="none"&&(t.close="remove")),Object.assign({},this.defaults.headerControls,t)}else return Object.assign({},this.defaults.headerControls,e)},pOtheme(e){e=e.trim();let t,r="";if(e.match(/^(rgb|hsl|var)/)){let o=e.indexOf(")");t=e.slice(0,o+1).replace(/\s+/g,""),t.startsWith("var")&&(t=O.getCssVariableValue(t)),r=e.slice(o+1,e.length).trim()}else if(e.match(/^(#|\w|--)/)){let o=e.indexOf(" ");o>0?(t=e.slice(0,o+1).replace(/\s+/g,""),r=e.slice(o+1,e.length).trim()):t=e,t.startsWith("--")&&(t=O.getCssVariableValue(t))}if(t.match(/^([\da-f]{3}|[\da-f]{6})$/gi)&&(t="#"+t),r.startsWith("fillcolor")){let o=r.indexOf(" ");r=r.slice(o+1,r.length).trim().replace(/\s+/g,""),r.match(/^([\da-f]{3}|[\da-f]{6})$/gi)?r="#"+r:O.colorNames[r]?r="#"+O.colorNames[r]:r.match(/^(--|var)/)?r=O.getCssVariableValue(r):r="#fff"}return{color:t,colors:!1,filling:r}},color(e){let t=e.toLowerCase(),r,o,n,l,c,f,m,T,j,R={};const F=/^#?([\da-f]{3}|[\da-f]{6})$/gi,H=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,Z=/^hsla?\((\d{1,3}),(\d{1,3}%),(\d{1,3}%),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,le=this.colorNames;return le[t]&&(t=le[t]),t.match(F)!==null?(t=t.replace("#",""),t.length%2===1?(r=t.slice(0,1).repeat(2),o=t.slice(1,2).repeat(2),n=t.slice(2,3).repeat(2),R.rgb={r:parseInt(r,16),g:parseInt(o,16),b:parseInt(n,16)},R.hex=`#${r}${o}${n}`):(R.rgb={r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)},R.hex=`#${t}`),j=this.rgbToHsl(R.rgb.r,R.rgb.g,R.rgb.b),R.hsl=j,R.rgb.css=`rgb(${R.rgb.r},${R.rgb.g},${R.rgb.b})`):t.match(H)?(m=H.exec(t),R.rgb={css:t,r:m[1],g:m[2],b:m[3]},R.hex=this.rgbToHex(m[1],m[2],m[3]),j=this.rgbToHsl(m[1],m[2],m[3]),R.hsl=j):t.match(Z)?(m=Z.exec(t),l=m[1]/360,c=m[2].slice(0,m[2].length-1)/100,f=m[3].slice(0,m[3].length-1)/100,T=this.hslToRgb(l,c,f),R.rgb={css:`rgb(${T[0]},${T[1]},${T[2]})`,r:T[0],g:T[1],b:T[2]},R.hex=this.rgbToHex(R.rgb.r,R.rgb.g,R.rgb.b),R.hsl={css:`hsl(${m[1]},${m[2]},${m[3]})`,h:m[1],s:m[2],l:m[3]}):(R.hex="#f5f5f5",R.rgb={css:"rgb(245,245,245)",r:245,g:245,b:245},R.hsl={css:"hsl(0,0%,96%)",h:0,s:"0%",l:"96%"}),R},calcColors(e){const t=this.colorBrightnessThreshold,r=this.color(e),o=this.lighten(e,this.colorFilledLight),n=this.darken(e,this.colorFilled),l=this.perceivedBrightness(e)<=t?"#ffffff":"#000000",c=this.perceivedBrightness(o)<=t?"#ffffff":"#000000",f=this.perceivedBrightness(n)<=t?"#ffffff":"#000000",m=this.lighten(e,this.colorFilledDark),T=this.perceivedBrightness(m)<=t?"#ffffff":"#000000";return[r.hsl.css,o,n,l,c,f,m,T]},darken(e,t){const r=this.color(e).hsl,o=parseFloat(r.l),n=Math.round(o-o*t)+"%";return`hsl(${r.h},${r.s},${n})`},lighten(e,t){const r=this.color(e).hsl,o=parseFloat(r.l),n=Math.round(o+(100-o)*t)+"%";return`hsl(${r.h},${r.s},${n})`},hslToRgb(e,t,r){let o,n,l;if(t===0)o=n=l=r;else{let c=(T,j,R)=>(R<0&&(R+=1),R>1&&(R-=1),R<.16666666666666666?T+(j-T)*6*R:R<.5?j:R<.6666666666666666?T+(j-T)*(.6666666666666666-R)*6:T),f=r<.5?r*(1+t):r+t-r*t,m=2*r-f;o=c(m,f,e+1/3),n=c(m,f,e),l=c(m,f,e-1/3)}return[Math.round(o*255),Math.round(n*255),Math.round(l*255)]},rgbToHsl(e,t,r){e/=255,t/=255,r/=255;let o=Math.max(e,t,r),n=Math.min(e,t,r),l,c,f=(o+n)/2;if(o===n)l=c=0;else{let m=o-n;switch(c=f>.5?m/(2-o-n):m/(o+n),o){case e:l=(t-r)/m+(t<r?6:0);break;case t:l=(r-e)/m+2;break;case r:l=(e-t)/m+4;break}l/=6}return l=Math.round(l*360),c=Math.round(c*100)+"%",f=Math.round(f*100)+"%",{css:"hsl("+l+","+c+","+f+")",h:l,s:c,l:f}},rgbToHex(e,t,r){let o=Number(e).toString(16),n=Number(t).toString(16),l=Number(r).toString(16);return o.length===1&&(o=`0${o}`),n.length===1&&(n=`0${n}`),l.length===1&&(l=`0${l}`),`#${o}${n}${l}`},perceivedBrightness(e){const t=this.color(e).rgb;return t.r/255*.2126+t.g/255*.7152+t.b/255*.0722},pOposition(e){let t={},r=e.trim().split(/\s+/),o=r.filter(c=>c.match(/^(down|right|up|left)$/i));o.length&&(t.autoposition=o[0],r.splice(r.indexOf(o[0]),1));let n=r.filter(c=>c.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i));n.length?(t.my=n[0],t.at=n[1]||n[0],r.splice(r.indexOf(n[0]),1),n[1]&&r.splice(r.indexOf(n[1]),1)):(t.my="center",t.at="center");let l=r.filter(c=>c.match(/^[+-]?\d*\.?\d+[a-z%]*$/i));return l.length&&(t.offsetX=l[0].match(/^[+-]?\d*\.?\d+$/i)?`${l[0]}px`:l[0],l[1]?t.offsetY=l[1].match(/^[+-]?\d*\.?\d+$/i)?`${l[1]}px`:l[1]:t.offsetY=t.offsetX,r.splice(r.indexOf(l[0]),1),l[1]&&r.splice(r.indexOf(l[1]),1)),r.length&&(t.of=r.join(" ")),t},position(e,t){if(!t)return e.style.opacity=1,e;typeof t=="string"?t=Object.assign({},this.defaults.position,this.pOposition(t)):t=Object.assign({},this.defaults.position,t),["my","at","of"].forEach(le=>{typeof t[le]=="function"&&(t[le]=t[le].call(e,e))}),e.options.container==="window"&&(e.style.position="fixed"),typeof e=="string"?e=document.querySelector(e):Object.getPrototypeOf(e).jquery&&(e=e[0]);const r=e.options.container==="window"?"window":e.parentElement,o=e.getBoundingClientRect(),n=e.parentElement.getBoundingClientRect(),l=r==="window"?{left:0,top:0,width:document.documentElement.clientWidth,height:window.innerHeight}:{width:n.width,height:n.height,left:n.left,top:n.top},c=r==="window"?{x:1,y:1}:{x:l.width/r.offsetWidth,y:l.height/r.offsetHeight},f=r==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:window.getComputedStyle(r);l.width-=(parseFloat(f.borderLeftWidth)+parseFloat(f.borderRightWidth))*c.x,l.height-=(parseFloat(f.borderTopWidth)+parseFloat(f.borderBottomWidth))*c.y;let m;t.of?typeof t.of=="string"?m=t.of==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:document.querySelector(t.of).getBoundingClientRect():Object.getPrototypeOf(t.of).jquery?m=t.of[0].getBoundingClientRect():m=t.of.getBoundingClientRect():m=l;let T=this.getScrollbarWidth(document.body),j=this.getScrollbarWidth(e.parentElement),R="0px";t.my.startsWith("left-")?t.at.startsWith("left-")?t.of?R=m.left-l.left-parseFloat(f.borderLeftWidth)+"px":R="0px":t.at.startsWith("center")?t.of?R=m.left-l.left-parseFloat(f.borderLeftWidth)+m.width/2+"px":R=l.width/2+"px":t.at.startsWith("right-")&&(t.of?R=m.left-l.left-parseFloat(f.borderLeftWidth)+m.width+"px":R=l.width+"px"):t.my.startsWith("center")?t.at.startsWith("left-")?t.of?R=m.left-l.left-parseFloat(f.borderLeftWidth)-o.width/2+"px":R=-o.width/2+"px":t.at.startsWith("center")?t.of?R=m.left-l.left-parseFloat(f.borderLeftWidth)-(o.width-m.width)/2+"px":R=l.width/2-o.width/2+"px":t.at.startsWith("right-")&&(t.of?R=m.left-l.left-parseFloat(f.borderLeftWidth)+(m.width-o.width/2)+"px":R=l.width-o.width/2+"px"):t.my.startsWith("right-")&&(t.at.startsWith("left-")?t.of?R=m.left-l.left-parseFloat(f.borderLeftWidth)-o.width+"px":R=-o.width+"px":t.at.startsWith("center")?t.of?R=m.left-l.left-parseFloat(f.borderLeftWidth)-o.width+m.width/2+"px":R=l.width/2-o.width+"px":t.at.startsWith("right-")&&(t.of?R=m.left-l.left-parseFloat(f.borderLeftWidth)+m.width-o.width+"px":R=l.width-o.width+"px",r!=="window"&&(R=parseFloat(R)-j.y+"px")));let F="0px";t.my.endsWith("-top")?t.at.endsWith("-top")?t.of?F=m.top-l.top-parseFloat(f.borderTopWidth)+"px":F="0px":t.at.endsWith("center")?t.of?F=m.top-l.top-parseFloat(f.borderTopWidth)+m.height/2+"px":F=l.height/2+"px":t.at.endsWith("-bottom")&&(t.of?F=m.top-l.top-parseFloat(f.borderTopWidth)+m.height+"px":F=l.height+"px"):t.my.endsWith("center")?t.at.endsWith("-top")?t.of?F=m.top-l.top-parseFloat(f.borderTopWidth)-o.height/2+"px":F=-o.height/2+"px":t.at.endsWith("center")?t.of?F=m.top-l.top-parseFloat(f.borderTopWidth)-o.height/2+m.height/2+"px":F=l.height/2-o.height/2+"px":t.at.endsWith("-bottom")&&(t.of?F=m.top-l.top-parseFloat(f.borderTopWidth)-o.height/2+m.height+"px":F=l.height-o.height/2+"px"):t.my.endsWith("-bottom")&&(t.at.endsWith("-top")?t.of?F=m.top-l.top-parseFloat(f.borderTopWidth)-o.height+"px":F=-o.height+"px":t.at.endsWith("center")?t.of?F=m.top-l.top-parseFloat(f.borderTopWidth)-o.height+m.height/2+"px":F=l.height/2-o.height+"px":t.at.endsWith("-bottom")&&(t.of?F=m.top-l.top-parseFloat(f.borderTopWidth)-o.height+m.height+"px":F=l.height-o.height+"px",r!=="window"?F=parseFloat(F)-j.x+"px":F=parseFloat(F)-T.x+"px")),e.style.left=c.x===1?R:parseFloat(R)/c.x+"px",e.style.top=c.y===1?F:parseFloat(F)/c.y+"px";let H=getComputedStyle(e),Z={left:H.left,top:H.top};return t.autoposition&&t.my===t.at&&["left-top","center-top","right-top","left-bottom","center-bottom","right-bottom"].indexOf(t.my)>=0&&(Z=this.applyPositionAutopos(e,Z,t)),(t.offsetX||t.offsetY)&&(Z=this.applyPositionOffset(e,Z,t)),(t.minLeft||t.minTop||t.maxLeft||t.maxTop)&&(Z=this.applyPositionMinMax(e,Z,t)),t.modify&&(Z=this.applyPositionModify(e,Z,t)),typeof e.options.opacity=="number"?e.style.opacity=e.options.opacity:e.style.opacity=1,e},applyPositionAutopos(e,t,r){const o=`${r.my}-${r.autoposition.toLowerCase()}`;e.classList.add(o);const n=Array.prototype.slice.call(document.querySelectorAll(`.${o}`)),l=n.indexOf(e);if(n.length>1){switch(r.autoposition){case"down":n.forEach((c,f)=>{f>0&&f<=l&&(t.top=parseFloat(t.top)+n[--f].getBoundingClientRect().height+O.autopositionSpacing+"px")});break;case"up":n.forEach((c,f)=>{f>0&&f<=l&&(t.top=parseFloat(t.top)-n[--f].getBoundingClientRect().height-O.autopositionSpacing+"px")});break;case"right":n.forEach((c,f)=>{f>0&&f<=l&&(t.left=parseFloat(t.left)+n[--f].getBoundingClientRect().width+O.autopositionSpacing+"px")});break;case"left":n.forEach((c,f)=>{f>0&&f<=l&&(t.left=parseFloat(t.left)-n[--f].getBoundingClientRect().width-O.autopositionSpacing+"px")});break}e.style.left=t.left,e.style.top=t.top}return{left:t.left,top:t.top}},applyPositionOffset(e,t,r){["offsetX","offsetY"].forEach(n=>{r[n]?(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),isNaN(r[n])===!1&&(r[n]=`${r[n]}px`)):r[n]="0px"}),e.style.left=`calc(${e.style.left} + ${r.offsetX})`,e.style.top=`calc(${e.style.top} + ${r.offsetY})`;const o=getComputedStyle(e);return{left:o.left,top:o.top}},applyPositionMinMax(e,t,r){if(["minLeft","minTop","maxLeft","maxTop"].forEach(n=>{r[n]&&(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),(Number.isInteger(r[n])||r[n].match(/^\d+$/))&&(r[n]=`${r[n]}px`))}),r.minLeft){e.style.left=r.minLeft;let n=getComputedStyle(e).left;parseFloat(n)<parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.minTop){e.style.top=r.minTop;let n=getComputedStyle(e).top;parseFloat(n)<parseFloat(t.top)?e.style.top=t.top:t.top=n}if(r.maxLeft){e.style.left=r.maxLeft;let n=getComputedStyle(e).left;parseFloat(n)>parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.maxTop){e.style.top=r.maxTop;let n=getComputedStyle(e).top;parseFloat(n)>parseFloat(t.top)?e.style.top=t.top:t.top=n}const o=getComputedStyle(e);return{left:o.left,top:o.top}},applyPositionModify(e,t,r){if(r.modify&&typeof r.modify=="function"){const n=r.modify.call(t,t,r);e.style.left=Number.isInteger(n.left)||n.left.match(/^\d+$/)?`${n.left}px`:n.left,e.style.top=Number.isInteger(n.top)||n.top.match(/^\d+$/)?`${n.top}px`:n.top}const o=getComputedStyle(e);return{left:o.left,top:o.top}},autopositionRemaining(e){let t,r=e.options.container;["left-top-down","left-top-right","center-top-down","right-top-down","right-top-left","left-bottom-up","left-bottom-right","center-bottom-up","right-bottom-up","right-bottom-left"].forEach(o=>{e.classList.contains(o)&&(t=o)}),t&&(r==="window"?document.body:typeof r=="string"?document.querySelector(r):r).querySelectorAll(`.${t}`).forEach(n=>n.reposition())},getThemeDetails(e){const t=this.pOtheme(e);if(t.color.startsWith("bootstrap-")){let r=t.color.indexOf("-"),o=document.createElement("button");o.className="btn btn"+t.color.slice(r),document.body.appendChild(o),t.color=getComputedStyle(o).backgroundColor.replace(/\s+/gi,""),document.body.removeChild(o),o=void 0}return t.colors=this.calcColors(t.color),t},clearTheme(e,t){return e.content.classList.remove("jsPanel-content-filled","jsPanel-content-filledlight"),e.header.classList.remove("jsPanel-hdr-light"),e.header.classList.remove("jsPanel-hdr-dark"),e.style.backgroundColor="",this.setStyles(e.headertoolbar,{boxShadow:"",width:"",marginLeft:"",borderTopColor:"transparent"}),this.setStyles(e.content,{background:"",borderTopColor:"transparent"}),e.header.style.background="",Array.prototype.slice.call(e.controlbar.querySelectorAll(".jsPanel-icon")).concat([e.headerlogo,e.headertitle,e.headertoolbar,e.content]).forEach(r=>r.style.color=""),t&&t.call(e,e),e},applyColorTheme(e,t){if(e.style.backgroundColor=t.colors[0],e.header.style.backgroundColor=t.colors[0],e.header.style.color=t.colors[3],[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(r=>e.querySelector(r).style.color=t.colors[3]),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(r=>r.style.color=t.colors[3]),typeof e.options.theme=="string"&&t.filling==="filled"&&(e.content.style.borderTop=t.colors[3]==="#000000"?"1px solid rgba(0,0,0,0.15)":"1px solid rgba(255,255,255,0.15)"),t.colors[3]==="#000000"?e.header.classList.add("jsPanel-hdr-light"):e.header.classList.add("jsPanel-hdr-dark"),t.filling)switch(t.filling){case"filled":this.setStyles(e.content,{backgroundColor:t.colors[2],color:t.colors[3]});break;case"filledlight":e.content.style.backgroundColor=t.colors[1];break;case"filleddark":this.setStyles(e.content,{backgroundColor:t.colors[6],color:t.colors[7]});break;default:e.content.style.backgroundColor=t.filling,e.content.style.color=this.perceivedBrightness(t.filling)<=this.colorBrightnessThreshold?"#fff":"#000"}return e},applyCustomTheme(e,t){let r={bgPanel:"#ffffff",bgContent:"#ffffff",bgFooter:"#f5f5f5",colorHeader:"#000000",colorContent:"#000000",colorFooter:"#000000",border:void 0,borderRadius:void 0},o=typeof t=="object"?Object.assign(r,t):r,n=o.bgPanel,l=o.bgContent,c=o.colorHeader,f=o.colorContent,m=o.bgFooter,T=o.colorFooter;return this.colorNames[n]?e.style.background="#"+this.colorNames[n]:e.style.background=this.getCssVariableValue(n),this.colorNames[c]&&(c="#"+this.colorNames[c]),[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(F=>e.querySelector(F).style.color=this.getCssVariableValue(c)),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(F=>F.style.color=this.getCssVariableValue(c)),this.colorNames[l]?e.content.style.background="#"+this.colorNames[l]:e.content.style.background=this.getCssVariableValue(l),this.colorNames[f]?e.content.style.color="#"+this.colorNames[f]:e.content.style.color=this.getCssVariableValue(f),this.perceivedBrightness(c)>this.colorBrightnessThreshold?e.header.classList.add("jsPanel-hdr-dark"):e.header.classList.add("jsPanel-hdr-light"),this.perceivedBrightness(f)>this.colorBrightnessThreshold?e.content.style.borderTop="1px solid rgba(255,255,255,0.15)":e.content.style.borderTop="1px solid rgba(0,0,0,0.15)",this.colorNames[m]?e.footer.style.background="#"+this.colorNames[m]:e.footer.style.background=this.getCssVariableValue(m),this.colorNames[T]?e.footer.style.color="#"+this.colorNames[T]:e.footer.style.color=this.getCssVariableValue(T),o.border&&e.setBorder(o.border),o.borderRadius&&(e.options.borderRadius=void 0,e.setBorderRadius(o.borderRadius)),e},getCssVariableValue(e){if(e.startsWith("--"))return getComputedStyle(document.documentElement).getPropertyValue(e).replace(/\s+/g,"");if(e.startsWith("var")){let t=e.slice(e.indexOf("(")+1,e.indexOf(")"));return getComputedStyle(document.documentElement).getPropertyValue(t).replace(/\s+/g,"")}return e},getScrollbarWidth(e=document.body){if(e===document.body)return{y:window.innerWidth-document.documentElement.clientWidth,x:window.innerHeight-document.documentElement.clientHeight};{let t=getComputedStyle(e);return{y:e.offsetWidth-e.clientWidth-parseFloat(t.borderRightWidth)-parseFloat(t.borderLeftWidth),x:e.offsetHeight-e.clientHeight-parseFloat(t.borderBottomWidth)-parseFloat(t.borderTopWidth)}}},remClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.remove(r)),e},setClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.add(r)),e},setStyles(e,t){for(const[r,o]of Object.entries(t))e.style[r]=typeof o=="string"?O.getCssVariableValue(o):o;return e},setStyle(e,t){return this.setStyles.call(e,e,t)},strToHtml(e){return document.createRange().createContextualFragment(e)},toggleClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.contains(r)?e.classList.remove(r):e.classList.add(r)),e},emptyNode(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e},addScript(e,t="application/javascript",r){if(!document.querySelector(`script[src="${e}"]`)){const o=document.createElement("script");o.src=e,o.type=t,document.head.appendChild(o),r&&(o.onload=r)}},ajax(e,t){let r,o,n=new XMLHttpRequest;const l={method:"GET",async:!0,user:"",pwd:"",done:function(){if(t){let c=O.strToHtml(this.responseText);r.urlSelector&&(c=c.querySelector(r.urlSelector)),t.contentRemove(),t.content.append(c)}},autoresize:!0,autoreposition:!0};if(t&&typeof e=="string")r=Object.assign({},l,{url:e});else if(typeof e=="object"&&e.url)r=Object.assign({},l,e),r.url=e.url,r.async===!1&&(r.timeout=0,r.withCredentials&&(r.withCredentials=void 0),r.responseType&&(r.responseType=void 0));else{this.errorReporting&&O.errorpanel("XMLHttpRequest seems to miss the <mark>url</mark> parameter!");return}o=r.url.trim().split(/\s+/),r.url=encodeURI(o[0]),o.length>1&&(o.shift(),r.urlSelector=o.join(" ")),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?t?r.done.call(n,n,t):r.done.call(n,n):r.fail&&(t?r.fail.call(n,n,t):r.fail.call(n,n)),r.always&&(t?r.always.call(n,n,t):r.always.call(n,n)),t&&(r.autoresize||r.autoreposition)&&O.ajaxAutoresizeAutoreposition(t,r),O.ajaxAlwaysCallbacks.length&&O.ajaxAlwaysCallbacks.forEach(c=>{t?c.call(n,n,t):c.call(n,n)}))},n.open(r.method,r.url,r.async,r.user,r.pwd),n.timeout=r.timeout||0,r.withCredentials&&(n.withCredentials=r.withCredentials),r.responseType&&(n.responseType=r.responseType),r.beforeSend&&(t?r.beforeSend.call(n,n,t):r.beforeSend.call(n,n)),r.data?n.send(r.data):n.send(null)},fetch(e,t){let r;const o={bodyMethod:"text",autoresize:!0,autoreposition:!0,done:function(l,c){if(c){let f=O.strToHtml(l);c.contentRemove(),c.content.append(f)}}};if(t&&typeof e=="string")r=Object.assign({},o,{resource:encodeURI(e)});else if(typeof e=="object"&&e.resource)r=Object.assign({},o,e),r.resource=encodeURI(e.resource);else{this.errorReporting&&O.errorpanel("Fetch Request seems to miss the <mark>resource</mark> parameter!");return}const n=r.fetchInit||{};r.beforeSend&&(t?r.beforeSend.call(e,e,t):r.beforeSend.call(e,e)),fetch(r.resource,n).then(l=>{if(l.ok)return l[r.bodyMethod]()}).then(l=>{t?r.done.call(l,l,t):r.done.call(l,l),t&&(r.autoresize||r.autoreposition)&&O.ajaxAutoresizeAutoreposition(t,r)})},ajaxAutoresizeAutoreposition(e,t){const r=e.options.contentSize;if(typeof r=="string"&&r.match(/auto/i)){const o=r.split(" "),n=Object.assign({},{width:o[0],height:o[1]});t.autoresize&&e.resize(n),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}else if(typeof r=="object"&&(r.width==="auto"||r.height==="auto")){const o=Object.assign({},r);t.autoresize&&e.resize(o),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}},createPanelTemplate(e=!0){const t=document.createElement("div");return t.className="jsPanel",t.style.left="0",t.style.top="0",e&&["close","maximize","normalize","minimize","smallify"].forEach(r=>{t.setAttribute(`data-btn${r}`,"enabled")}),t.innerHTML=`<div class="jsPanel-hdr">
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
                            </div>`,e},createSnapArea(e,t,r){const o=document.createElement("div"),n=e.parentElement;o.className=`jsPanel-snap-area jsPanel-snap-area-${t}`,t==="lt"||t==="rt"||t==="rb"||t==="lb"?(o.style.width=r+"px",o.style.height=r+"px"):t==="ct"||t==="cb"?o.style.height=r+"px":(t==="lc"||t==="rc")&&(o.style.width=r+"px"),n!==document.body&&(o.style.position="absolute"),document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${t}`)||e.parentElement.appendChild(o)},removeSnapAreas(){document.querySelectorAll(".jsPanel-snap-area").forEach(e=>e.parentElement.removeChild(e))},extend(e){if(Object.prototype.toString.call(e)==="[object Object]")for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this.extensions[t]=e[t])},getPanels(e=function(){return this.classList.contains("jsPanel-standard")}){return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(t=>e.call(t,t)).sort((t,r)=>r.style.zIndex-t.style.zIndex)},processCallbacks(e,t,r="some",o,n){if(typeof t=="function"&&(t=[t]),r)return t[r](l=>l.call(e,e,o,n));t.forEach(l=>l.call(e,e,o,n))},resetZi(){this.zi=((e=O.ziBase)=>{let t=e;return{next:()=>t++}})(),Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((e,t)=>e.style.zIndex-t.style.zIndex).forEach(e=>e.style.zIndex=O.zi.next())},errorpanel(e){this.create({paneltype:"error",dragit:!1,resizeit:!1,theme:{bgPanel:"white",bgContent:"white",colorHeader:"rebeccapurple",colorContent:"#333333",border:"2px solid rebeccapurple"},borderRadius:".33rem",headerControls:"closeonly xs",headerTitle:"&#9888; jsPanel Error",contentSize:{width:"50%",height:"auto"},position:"center-top 0 5 down",animateIn:"jsPanelFadeIn",content:`<div class="jsPanel-error-content-separator"></div><p>${e}</p>`})},create(e={},t){O.zi||(O.zi=((p=O.ziBase)=>{let w=p;return{next:()=>w++}})()),e.config?(e=Object.assign({},this.defaults,e.config,e),delete e.config):e=Object.assign({},this.defaults,e),e.id?typeof e.id=="function"&&(e.id=e.id()):e.id=`jsPanel-${O.idCounter+=1}`;const r=document.getElementById(e.id);if(r!==null){if(r.classList.contains("jsPanel")&&r.front(),this.errorReporting){let p=`&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${e.id}</mark> already exists in the document.`;O.errorpanel(p)}return!1}let o=this.pOcontainer(e.container);if(typeof o=="object"&&o.length&&o.length>0&&(o=o[0]),!o)return this.errorReporting&&O.errorpanel("&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist"),!1;["onbeforeclose","onbeforemaximize","onbeforeminimize","onbeforenormalize","onbeforesmallify","onbeforeunsmallify","onclosed","onfronted","onmaximized","onminimized","onnormalized","onsmallified","onstatuschange","onunsmallified"].forEach(p=>{e[p]?typeof e[p]=="function"&&(e[p]=[e[p]]):e[p]=[]});const n=e.template||this.createPanelTemplate();n.options=e,n.closetimer=void 0,n.status="initialized",n.currentData={},n.header=n.querySelector(".jsPanel-hdr"),n.headerbar=n.header.querySelector(".jsPanel-headerbar"),n.titlebar=n.header.querySelector(".jsPanel-titlebar"),n.headerlogo=n.headerbar.querySelector(".jsPanel-headerlogo"),n.headertitle=n.headerbar.querySelector(".jsPanel-title"),n.controlbar=n.headerbar.querySelector(".jsPanel-controlbar"),n.headertoolbar=n.header.querySelector(".jsPanel-hdr-toolbar"),n.content=n.querySelector(".jsPanel-content"),n.footer=n.querySelector(".jsPanel-ftr"),n.snappableTo=!1,n.snapped=!1,n.droppableTo=!1,n.progressbar=n.autocloseProgressbar=n.querySelector(".jsPanel-progressbar");const l=new CustomEvent("jspanelloaded",{detail:e.id,cancelable:!0}),c=new CustomEvent("jspanelstatuschange",{detail:e.id,cancelable:!0}),f=new CustomEvent("jspanelbeforenormalize",{detail:e.id,cancelable:!0}),m=new CustomEvent("jspanelnormalized",{detail:e.id,cancelable:!0}),T=new CustomEvent("jspanelbeforemaximize",{detail:e.id,cancelable:!0}),j=new CustomEvent("jspanelmaximized",{detail:e.id,cancelable:!0}),R=new CustomEvent("jspanelbeforeminimize",{detail:e.id,cancelable:!0}),F=new CustomEvent("jspanelminimized",{detail:e.id,cancelable:!0}),H=new CustomEvent("jspanelbeforesmallify",{detail:e.id,cancelable:!0}),Z=new CustomEvent("jspanelsmallified",{detail:e.id,cancelable:!0}),le=new CustomEvent("jspanelsmallifiedmax",{detail:e.id,cancelable:!0}),Ze=new CustomEvent("jspanelbeforeunsmallify",{detail:e.id,cancelable:!0}),Ce=new CustomEvent("jspanelfronted",{detail:e.id,cancelable:!0}),et=new CustomEvent("jspanelbeforeclose",{detail:e.id,cancelable:!0}),Ct=new CustomEvent("jspanelclosed",{detail:e.id,cancelable:!0}),ln=new CustomEvent("jspanelcloseduser",{detail:e.id,cancelable:!0});[l,c,f,m,T,j,R,F,H,Z,le,Ze,Ce,et].forEach(p=>p.panel=n);const zn=n.querySelector(".jsPanel-btn-close"),kt=n.querySelector(".jsPanel-btn-maximize"),st=n.querySelector(".jsPanel-btn-normalize"),Ut=n.querySelector(".jsPanel-btn-smallify"),Zn=n.querySelector(".jsPanel-btn-minimize");zn&&O.pointerup.forEach(p=>{zn.addEventListener(p,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.close(null,!0)})}),kt&&O.pointerup.forEach(p=>{kt.addEventListener(p,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.maximize()})}),st&&O.pointerup.forEach(p=>{st.addEventListener(p,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.normalize()})}),Ut&&O.pointerup.forEach(p=>{Ut.addEventListener(p,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.status==="normalized"||n.status==="maximized"?n.smallify():(n.status==="smallified"||n.status==="smallifiedmax")&&n.unsmallify()})}),Zn&&O.pointerup.forEach(p=>{Zn.addEventListener(p,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.minimize()})});let En=O.extensions;for(let p in En)Object.prototype.hasOwnProperty.call(En,p)&&(n[p]=En[p]);if(n.setBorder=p=>{let w=O.pOborder(p);return w[2].length||(w[2]=n.style.backgroundColor),w=w.join(" "),n.style.border=w,n.options.border=w,n},n.setBorderRadius=p=>{typeof p=="string"&&(p.startsWith("--")||p.startsWith("var"))&&(p=p.replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," "),p=O.getCssVariableValue(p)),typeof p=="number"&&(p+="px"),n.style.borderRadius=p;const w=getComputedStyle(n);return n.options.header?(n.header.style.borderTopLeftRadius=w.borderTopLeftRadius,n.header.style.borderTopRightRadius=w.borderTopRightRadius):(n.content.style.borderTopLeftRadius=w.borderTopLeftRadius,n.content.style.borderTopRightRadius=w.borderTopRightRadius),n.options.footerToolbar?(n.footer.style.borderBottomRightRadius=w.borderBottomRightRadius,n.footer.style.borderBottomLeftRadius=w.borderBottomLeftRadius):(n.content.style.borderBottomRightRadius=w.borderBottomRightRadius,n.content.style.borderBottomLeftRadius=w.borderBottomLeftRadius),n},n.setTheme=(p=e.theme,w)=>{let D;if(n.status==="minimized"&&(D=!0,n.normalize()),O.clearTheme(n),typeof p=="object")e.border=void 0,O.applyCustomTheme(n,p);else if(typeof p=="string"){p==="none"&&(p="white");let b=O.getThemeDetails(p);O.applyColorTheme(n,b)}return D&&n.minimize(),w&&w.call(n,n),n},n.remove=(p,w,D)=>{n.parentElement.removeChild(n),document.getElementById(p)?D&&D.call(n,p,n):(n.removeMinimizedReplacement(),n.status="closed",w&&document.dispatchEvent(ln),document.dispatchEvent(Ct),n.options.onclosed&&O.processCallbacks(n,n.options.onclosed,"every",w),O.autopositionRemaining(n),D&&D.call(p,p)),window.removeEventListener("resize",n.windowResizeHandler),document.removeEventListener("jspanelresize",n.parentResizeHandler)},n.close=(p,w)=>{if(n.parentElement){if(n.closetimer&&window.clearInterval(n.closetimer),document.dispatchEvent(et),n.statusBefore=n.status,n.options.onbeforeclose&&n.options.onbeforeclose.length>0&&!O.processCallbacks(n,n.options.onbeforeclose,"some",n.status,w))return n;n.options.animateOut?(n.options.animateIn&&O.remClass(n,n.options.animateIn),O.setClass(n,n.options.animateOut),n.addEventListener("animationend",D=>{D.stopPropagation(),n.remove(n.id,w,p)})):n.remove(n.id,w,p)}},n.maximize=(p,w)=>{if(n.statusBefore=n.status,e.onbeforemaximize&&e.onbeforemaximize.length>0&&!O.processCallbacks(n,e.onbeforemaximize,"some",n.statusBefore))return n;document.dispatchEvent(T);const D=n.parentElement,b=O.pOcontainment(e.maximizedMargin);return D===document.body?(n.style.width=document.documentElement.clientWidth-b[1]-b[3]+"px",n.style.height=document.documentElement.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"):(n.style.width=D.clientWidth-b[1]-b[3]+"px",n.style.height=D.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"),Ut.style.transform="unset",n.removeMinimizedReplacement(),n.status="maximized",n.setControls([".jsPanel-btn-maximize"]),w||n.front(),document.dispatchEvent(j),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),p&&p.call(n,n,n.statusBefore),e.onmaximized&&O.processCallbacks(n,e.onmaximized,"every",n.statusBefore),n},n.minimize=p=>{if(n.status==="minimized"||(n.statusBefore=n.status,e.onbeforeminimize&&e.onbeforeminimize.length>0&&!O.processCallbacks(n,e.onbeforeminimize,"some",n.statusBefore)))return n;if(document.dispatchEvent(R),!document.getElementById("jsPanel-replacement-container")){const w=document.createElement("div");w.id="jsPanel-replacement-container",document.body.append(w)}if(n.style.left="-9999px",n.status="minimized",document.dispatchEvent(F),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),e.minimizeTo){let w=n.createMinimizedReplacement(),D,b,x;switch(e.minimizeTo){case"default":document.getElementById("jsPanel-replacement-container").append(w);break;case"parentpanel":b=n.closest(".jsPanel-content").parentElement,x=b.querySelectorAll(".jsPanel-minimized-box"),D=x[x.length-1],D.append(w);break;case"parent":b=n.parentElement,D=b.querySelector(".jsPanel-minimized-container"),D||(D=document.createElement("div"),D.className="jsPanel-minimized-container",b.append(D)),D.append(w);break;default:document.querySelector(e.minimizeTo).append(w)}}return p&&p.call(n,n,n.statusBefore),e.onminimized&&O.processCallbacks(n,e.onminimized,"every",n.statusBefore),n},n.normalize=p=>(n.status==="normalized"||(n.statusBefore=n.status,e.onbeforenormalize&&e.onbeforenormalize.length>0&&!O.processCallbacks(n,e.onbeforenormalize,"some",n.statusBefore))||(document.dispatchEvent(f),n.style.width=n.currentData.width,n.style.height=n.currentData.height,n.snapped?n.snap(n.snapped,!0):(n.style.left=n.currentData.left,n.style.top=n.currentData.top),Ut.style.transform="unset",n.removeMinimizedReplacement(),n.status="normalized",n.setControls([".jsPanel-btn-normalize"]),n.front(),document.dispatchEvent(m),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),p&&p.call(n,n,n.statusBefore),e.onnormalized&&O.processCallbacks(n,e.onnormalized,"every",n.statusBefore)),n),n.smallify=p=>{if(n.status==="smallified"||n.status==="smallifiedmax"||(n.statusBefore=n.status,e.onbeforesmallify&&e.onbeforesmallify.length>0&&!O.processCallbacks(n,e.onbeforesmallify,"some",n.statusBefore)))return n;document.dispatchEvent(H),n.style.overflow="hidden";const w=window.getComputedStyle(n),D=parseFloat(window.getComputedStyle(n.headerbar).height);n.style.height=parseFloat(w.borderTopWidth)+parseFloat(w.borderBottomWidth)+D+"px",Ut.style.transform="rotate(180deg)",n.status==="normalized"?(n.setControls([".jsPanel-btn-normalize"]),n.status="smallified",document.dispatchEvent(Z),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="maximized"&&(n.setControls([".jsPanel-btn-maximize"]),n.status="smallifiedmax",document.dispatchEvent(le),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore));const b=n.querySelectorAll(".jsPanel-minimized-box");return b[b.length-1].style.display="none",p&&p.call(n,n,n.statusBefore),e.onsmallified&&O.processCallbacks(n,e.onsmallified,"every",n.statusBefore),n},n.unsmallify=p=>{if(n.statusBefore=n.status,n.status==="smallified"||n.status==="smallifiedmax"){if(e.onbeforeunsmallify&&e.onbeforeunsmallify.length>0&&!O.processCallbacks(n,e.onbeforeunsmallify,"some",n.statusBefore))return n;document.dispatchEvent(Ze),n.style.overflow="visible",n.front(),n.status==="smallified"?(n.style.height=n.currentData.height,n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(m),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="smallifiedmax"?n.maximize():n.status==="minimized"&&n.normalize(),Ut.style.transform="rotate(0deg)";const w=n.querySelectorAll(".jsPanel-minimized-box");w[w.length-1].style.display="flex",p&&p.call(n,n,n.statusBefore),e.onunsmallified&&O.processCallbacks(n,e.onunsmallified,"every",n.statusBefore)}return n},n.front=(p,w=!0)=>{if(n.status==="minimized")n.statusBefore==="maximized"?n.maximize():n.normalize();else{const D=Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(b=>b.style.zIndex);Math.max(...D)>n.style.zIndex&&(n.style.zIndex=O.zi.next()),O.resetZi()}return document.dispatchEvent(Ce),p&&p.call(n,n),e.onfronted&&w&&O.processCallbacks(n,e.onfronted,"every",n.status),n},n.snap=(p,w=!1)=>{if(w||(n.currentData.beforeSnap={width:n.currentData.width,height:n.currentData.height}),p&&typeof p=="function"&&!w)p.call(n,n,n.snappableTo);else if(p!==!1){let D=[0,0];if(n.options.dragit.snap.containment&&n.options.dragit.containment){const b=O.pOcontainment(n.options.dragit.containment),x=n.snappableTo;x.startsWith("left")?D[0]=b[3]:x.startsWith("right")&&(D[0]=-b[1]),x.endsWith("top")?D[1]=b[0]:x.endsWith("bottom")&&(D[1]=-b[2])}n.reposition(`${n.snappableTo} ${D[0]} ${D[1]}`)}w||(n.snapped=n.snappableTo)},n.move=(p,w)=>{let D=n.overlaps(p,"paddingbox"),b=n.parentElement;return p.appendChild(n),n.options.container=p,n.style.left=D.left+"px",n.style.top=D.top+"px",n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors(),w&&w.call(n,n,p,b),n},n.closeChildpanels=p=>(n.getChildpanels().forEach(w=>w.close()),p&&p.call(n,n),n),n.getChildpanels=p=>{const w=n.content.querySelectorAll(".jsPanel");return p&&w.forEach((D,b,x)=>{p.call(D,D,b,x)}),w},n.isChildpanel=p=>{const w=n.closest(".jsPanel-content"),D=w?w.parentElement:null;return p&&p.call(n,n,D),w?D:!1},n.contentRemove=p=>(O.emptyNode(n.content),p&&p.call(n,n),n),n.createMinimizedReplacement=()=>{const p=O.createMinimizedTemplate(),w=window.getComputedStyle(n.headertitle).color,D=window.getComputedStyle(n),b=e.iconfont,x=p.querySelector(".jsPanel-controlbar");return n.options.header!=="auto-show-hide"?O.setStyles(p,{backgroundColor:D.backgroundColor,backgroundPositionX:D.backgroundPositionX,backgroundPositionY:D.backgroundPositionY,backgroundRepeat:D.backgroundRepeat,backgroundAttachment:D.backgroundAttachment,backgroundImage:D.backgroundImage,backgroundSize:D.backgroundSize,backgroundOrigin:D.backgroundOrigin,backgroundClip:D.backgroundClip}):p.style.backgroundColor=window.getComputedStyle(n.header).backgroundColor,p.id=n.id+"-min",p.querySelector(".jsPanel-headerbar").replaceChild(n.headerlogo.cloneNode(!0),p.querySelector(".jsPanel-headerlogo")),p.querySelector(".jsPanel-titlebar").replaceChild(n.headertitle.cloneNode(!0),p.querySelector(".jsPanel-title")),p.querySelector(".jsPanel-titlebar").setAttribute("title",n.headertitle.textContent),p.querySelector(".jsPanel-title").style.color=w,x.style.color=w,x.querySelectorAll("button").forEach(ie=>ie.style.color=w),["jsPanel-hdr-dark","jsPanel-hdr-light"].forEach(ie=>{n.header.classList.contains(ie)&&p.querySelector(".jsPanel-hdr").classList.add(ie)}),n.setIconfont(b,p),n.dataset.btnnormalize==="enabled"?O.pointerup.forEach(ie=>{p.querySelector(".jsPanel-btn-normalize").addEventListener(ie,ae=>{if(ae.preventDefault(),ae.button&&ae.button>0)return!1;n.normalize()})}):x.querySelector(".jsPanel-btn-normalize").style.display="none",n.dataset.btnmaximize==="enabled"?O.pointerup.forEach(ie=>{p.querySelector(".jsPanel-btn-maximize").addEventListener(ie,ae=>{if(ae.preventDefault(),ae.button&&ae.button>0)return!1;n.maximize()})}):x.querySelector(".jsPanel-btn-maximize").style.display="none",n.dataset.btnclose==="enabled"?O.pointerup.forEach(ie=>{p.querySelector(".jsPanel-btn-close").addEventListener(ie,ae=>{if(ae.preventDefault(),ae.button&&ae.button>0)return!1;n.close(null,!0)})}):x.querySelector(".jsPanel-btn-close").style.display="none",p},n.removeMinimizedReplacement=()=>{const p=document.getElementById(`${n.id}-min`);p&&p.parentElement.removeChild(p)},n.drag=(p={})=>{let w,D,b;const x=new CustomEvent("jspaneldragstart",{detail:n.id}),ie=new CustomEvent("jspaneldrag",{detail:n.id}),ae=new CustomEvent("jspaneldragstop",{detail:n.id});[x,ie,ae].forEach(Fe=>Fe.panel=n);const M=Fe=>{let Pe=Fe.split("-");return Pe.forEach((me,xe)=>{Pe[xe]=me.charAt(0).toUpperCase()+me.slice(1)}),"snap"+Pe.join("")};function U(Fe){Fe.relatedTarget===null&&O.pointermove.forEach(Pe=>{document.removeEventListener(Pe,D,!1),n.style.opacity=1})}let Ie=p.handles||O.defaults.dragit.handles,Xe=p.cursor||O.defaults.dragit.cursor;function It(Fe){if(O.pointermove.forEach(Pe=>document.removeEventListener(Pe,D)),O.removeSnapAreas(),w){if(n.style.opacity=1,w=void 0,b.snap){switch(n.snappableTo){case"left-top":n.snap(b.snap.snapLeftTop);break;case"center-top":n.snap(b.snap.snapCenterTop);break;case"right-top":n.snap(b.snap.snapRightTop);break;case"right-center":n.snap(b.snap.snapRightCenter);break;case"right-bottom":n.snap(b.snap.snapRightBottom);break;case"center-bottom":n.snap(b.snap.snapCenterBottom);break;case"left-bottom":n.snap(b.snap.snapLeftBottom);break;case"left-center":n.snap(b.snap.snapLeftCenter);break}b.snap.callback&&n.snappableTo&&typeof b.snap.callback=="function"&&(b.snap.callback.call(n,n),b.snap.repositionOnSnap&&b.snap[M(n.snappableTo)]!==!1&&n.repositionOnSnap(n.snappableTo)),n.snappableTo&&b.snap.repositionOnSnap&&b.snap[M(n.snappableTo)]&&n.repositionOnSnap(n.snappableTo)}if(n.droppableTo&&n.droppableTo){let Pe=n.parentElement;n.move(n.droppableTo),b.drop.callback&&b.drop.callback.call(n,n,n.droppableTo,Pe)}if(document.dispatchEvent(ae),b.stop.length){let Pe=window.getComputedStyle(n),me={left:parseFloat(Pe.left),top:parseFloat(Pe.top),width:parseFloat(Pe.width),height:parseFloat(Pe.height)};O.processCallbacks(n,b.stop,!1,me,Fe)}n.saveCurrentPosition(),n.calcSizeFactors()}n.controlbar.style.pointerEvents="inherit",n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Pe=>Pe.style.pointerEvents="auto"),document.removeEventListener(Fe,It)}return n.querySelectorAll(Ie).forEach(Fe=>{Fe.style.touchAction="none",Fe.style.cursor=Xe,O.pointerdown.forEach(Pe=>{Fe.addEventListener(Pe,me=>{if(me.button&&me.button>0||(b=Object.assign({},O.defaults.dragit,p),b.disableOnMaximized&&n.status==="maximized"))return!1;if((b.containment||b.containment===0)&&(b.containment=O.pOcontainment(b.containment)),b.grid&&Array.isArray(b.grid)&&b.grid.length===1&&(b.grid[1]=b.grid[0]),b.snap&&(typeof b.snap=="object"?b.snap=Object.assign({},O.defaultSnapConfig,b.snap):b.snap=O.defaultSnapConfig),me.target.closest(".jsPanel-ftr-btn"))return;n.controlbar.style.pointerEvents="none",n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(qe=>qe.style.pointerEvents="none");let xe=window.getComputedStyle(n),Be=parseFloat(xe.left),ve=parseFloat(xe.top),Q=parseFloat(xe.width),Le=parseFloat(xe.height),Ae=me.touches?me.touches[0].clientX:me.clientX,se=me.touches?me.touches[0].clientY:me.clientY,fe=n.parentElement,bt=fe.getBoundingClientRect(),re=window.getComputedStyle(fe),Me=n.getScaleFactor(),Qt=0,jt=O.getScrollbarWidth(fe);D=qe=>{if(qe.preventDefault(),!w){if(document.dispatchEvent(x),n.style.opacity=b.opacity,n.snapped&&b.snap.resizeToPreSnap&&n.currentData.beforeSnap){n.resize(n.currentData.beforeSnap.width+" "+n.currentData.beforeSnap.height),n.setControls([".jsPanel-btn-normalize"]);let ee=n.getBoundingClientRect(),we=Ae-(ee.left+ee.width),ce=ee.width/2;we>-ce&&(Qt=we+ce)}if(n.front(),n.snapped=!1,n.status==="maximized"&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized"),b.drop&&b.drop.dropZones){let ee=b.drop.dropZones.map(ce=>O.pOcontainer(ce)),we=[];ee.forEach(function(ce){ce.length?ce.forEach(function(_e){we.push(_e)}):we.push(ce)}),we=we.filter(function(ce,_e,Re){return Re.indexOf(ce)===_e}),b.drop.dropZones=we}b.start.length&&O.processCallbacks(n,b.start,!1,{left:Be,top:ve,width:Q,height:Le},qe)}w=1;let yt,ke,Oe,ht,We,be,ge,vt,De,at,Qe=qe.touches?qe.touches[0].clientX:qe.clientX,He=qe.touches?qe.touches[0].clientY:qe.clientY,je=window.getComputedStyle(n),oe;if(fe===document.body){let ee=n.getBoundingClientRect();De=window.innerWidth-parseInt(re.borderLeftWidth,10)-parseInt(re.borderRightWidth,10)-(ee.left+ee.width),at=window.innerHeight-parseInt(re.borderTopWidth,10)-parseInt(re.borderBottomWidth,10)-(ee.top+ee.height)}else De=parseInt(re.width,10)-parseInt(re.borderLeftWidth,10)-parseInt(re.borderRightWidth,10)-(parseInt(je.left,10)+parseInt(je.width,10)),at=parseInt(re.height,10)-parseInt(re.borderTopWidth,10)-parseInt(re.borderBottomWidth,10)-(parseInt(je.top,10)+parseInt(je.height,10));yt=parseFloat(je.left),Oe=parseFloat(je.top),We=De,ge=at,b.snap&&(b.snap.trigger==="panel"?(ke=yt**2,ht=Oe**2,be=We**2,vt=ge**2):b.snap.trigger==="pointer"&&(n.options.container==="window"?(yt=Qe,Oe=He,We=window.innerWidth-Qe,ge=window.innerHeight-He,ke=Qe**2,ht=Oe**2,be=We**2,vt=ge**2):(oe=n.overlaps(fe,"paddingbox",qe),yt=oe.pointer.left,Oe=oe.pointer.top,We=oe.pointer.right,ge=oe.pointer.bottom,ke=oe.pointer.left**2,ht=oe.pointer.top**2,be=oe.pointer.right**2,vt=oe.pointer.bottom**2)));let Ne=Math.sqrt(ke+ht),K=Math.sqrt(ke+vt),Ke=Math.sqrt(be+ht),tt=Math.sqrt(be+vt),mt=Math.abs(yt-We)/2,V=Math.abs(Oe-ge)/2,Bt=Math.sqrt(ke+V**2),Wt=Math.sqrt(ht+mt**2),Je=Math.sqrt(be+V**2),Jt=Math.sqrt(vt+mt**2);if(window.getSelection().removeAllRanges(),document.dispatchEvent(ie),(!b.axis||b.axis==="x")&&(n.style.left=Be+(Qe-Ae)/Me.x+Qt+"px"),(!b.axis||b.axis==="y")&&(n.style.top=ve+(He-se)/Me.y+"px"),b.grid){let ee=b.grid,we=b.axis,ce=ee[0]*Math.round((Be+(Qe-Ae))/ee[0]),_e=ee[1]*Math.round((ve+(He-se))/ee[1]);(!we||we==="x")&&(n.style.left=`${ce}px`),(!we||we==="y")&&(n.style.top=`${_e}px`)}if(b.containment||b.containment===0){let ee=b.containment,we,ce;if(n.options.container==="window")we=window.innerWidth-parseFloat(je.width)-ee[1]-jt.y,ce=window.innerHeight-parseFloat(je.height)-ee[2]-jt.x;else{let _e=parseFloat(re.borderLeftWidth)+parseFloat(re.borderRightWidth),Re=parseFloat(re.borderTopWidth)+parseFloat(re.borderBottomWidth);we=bt.width/Me.x-parseFloat(je.width)-ee[1]-_e-jt.y,ce=bt.height/Me.y-parseFloat(je.height)-ee[2]-Re-jt.x}parseFloat(n.style.left)<=ee[3]&&(n.style.left=ee[3]+"px"),parseFloat(n.style.top)<=ee[0]&&(n.style.top=ee[0]+"px"),parseFloat(n.style.left)>=we&&(n.style.left=we+"px"),parseFloat(n.style.top)>=ce&&(n.style.top=ce+"px")}if(b.drag.length){let ee={left:yt,top:Oe,right:We,bottom:ge,width:parseFloat(je.width),height:parseFloat(je.height)};O.processCallbacks(n,b.drag,!1,ee,qe)}if(b.snap){let ee=b.snap.sensitivity,we=fe===document.body?window.innerWidth/8:bt.width/8,ce=fe===document.body?window.innerHeight/8:bt.height/8;n.snappableTo=!1,O.removeSnapAreas(),Ne<ee?b.snap.snapLeftTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-top",O.createSnapArea(n,"lt",ee)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(oe.pointer.left>0&&oe.pointer.top>0?(n.snappableTo="left-top",O.createSnapArea(n,"lt",ee)):(n.snappableTo=!1,O.removeSnapAreas()))):K<ee?b.snap.snapLeftBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-bottom",O.createSnapArea(n,"lb",ee)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(oe.pointer.left>0&&oe.pointer.bottom>0?(n.snappableTo="left-bottom",O.createSnapArea(n,"lb",ee)):(n.snappableTo=!1,O.removeSnapAreas()))):Ke<ee?b.snap.snapRightTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-top",O.createSnapArea(n,"rt",ee)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(oe.pointer.right>0&&oe.pointer.top>0?(n.snappableTo="right-top",O.createSnapArea(n,"rt",ee)):(n.snappableTo=!1,O.removeSnapAreas()))):tt<ee?b.snap.snapRightBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-bottom",O.createSnapArea(n,"rb",ee)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(oe.pointer.right>0&&oe.pointer.bottom>0?(n.snappableTo="right-bottom",O.createSnapArea(n,"rb",ee)):(n.snappableTo=!1,O.removeSnapAreas()))):Oe<ee&&Wt<we?b.snap.snapCenterTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-top",O.createSnapArea(n,"ct",ee)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(oe.pointer.top>0?(n.snappableTo="center-top",O.createSnapArea(n,"ct",ee)):(n.snappableTo=!1,O.removeSnapAreas()))):yt<ee&&Bt<ce?b.snap.snapLeftCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-center",O.createSnapArea(n,"lc",ee)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(oe.pointer.left>0?(n.snappableTo="left-center",O.createSnapArea(n,"lc",ee)):(n.snappableTo=!1,O.removeSnapAreas()))):We<ee&&Je<ce?b.snap.snapRightCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-center",O.createSnapArea(n,"rc",ee)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(oe.pointer.right>0?(n.snappableTo="right-center",O.createSnapArea(n,"rc",ee)):(n.snappableTo=!1,O.removeSnapAreas()))):ge<ee&&Jt<we&&b.snap.snapCenterBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-bottom",O.createSnapArea(n,"cb",ee)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(oe.pointer.bottom>0?(n.snappableTo="center-bottom",O.createSnapArea(n,"cb",ee)):(n.snappableTo=!1,O.removeSnapAreas())))}if(b.drop&&b.drop.dropZones){let ee=O.isIE?"msElementsFromPoint":"elementsFromPoint",we=document[ee](qe.clientX,qe.clientY);Array.isArray(we)||(we=Array.prototype.slice.call(we)),b.drop.dropZones.forEach(ce=>{we.includes(ce)&&(n.droppableTo=ce)}),we.includes(n.droppableTo)||(n.droppableTo=!1)}},O.pointermove.forEach(qe=>document.addEventListener(qe,D)),window.addEventListener("mouseout",U,!1)})}),O.pointerup.forEach(Pe=>{document.addEventListener(Pe,It),window.removeEventListener("mouseout",U)}),p.disable&&(Fe.style.pointerEvents="none")}),n},n.dragit=p=>{const w=Object.assign({},O.defaults.dragit,e.dragit),D=n.querySelectorAll(w.handles);return p==="disable"?D.forEach(b=>b.style.pointerEvents="none"):D.forEach(b=>b.style.pointerEvents="auto"),n},n.sizeit=(p={})=>{const w=new CustomEvent("jspanelresizestart",{detail:n.id}),D=new CustomEvent("jspanelresize",{detail:n.id}),b=new CustomEvent("jspanelresizestop",{detail:n.id});[w,D,b].forEach(me=>me.panel=n);let x={},ie,ae,M,U,Ie,Xe;x.handles=p.handles||O.defaults.resizeit.handles,x.handles.split(",").forEach(me=>{const xe=document.createElement("DIV");xe.className=`jsPanel-resizeit-handle jsPanel-resizeit-${me.trim()}`,n.append(xe)});let It=p.aspectRatio?p.aspectRatio:!1;function Fe(me){me.relatedTarget===null&&O.pointermove.forEach(xe=>document.removeEventListener(xe,ie,!1))}function Pe(me){if(O.pointermove.forEach(xe=>document.removeEventListener(xe,ie,!1)),me.target.classList&&me.target.classList.contains("jsPanel-resizeit-handle")){let xe,Be,ve=me.target.className;if(ve.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)&&(xe=!0),ve.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)&&(Be=!0),x.grid&&Array.isArray(x.grid)){x.grid.length===1&&(x.grid[1]=x.grid[0]);const Q=parseFloat(n.style.width),Le=parseFloat(n.style.height),Ae=Q%x.grid[0],se=Le%x.grid[1],fe=parseFloat(n.style.left),bt=parseFloat(n.style.top),re=fe%x.grid[0],Me=bt%x.grid[1];Ae<x.grid[0]/2?n.style.width=Q-Ae+"px":n.style.width=Q+(x.grid[0]-Ae)+"px",se<x.grid[1]/2?n.style.height=Le-se+"px":n.style.height=Le+(x.grid[1]-se)+"px",xe&&(re<x.grid[0]/2?n.style.left=fe-re+"px":n.style.left=fe+(x.grid[0]-re)+"px"),Be&&(Me<x.grid[1]/2?n.style.top=bt-Me+"px":n.style.top=bt+(x.grid[1]-Me)+"px")}}if(ae){n.content.style.pointerEvents="inherit",ae=void 0,n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors();let xe=n.controlbar.querySelector(".jsPanel-btn-smallify"),Be=n.getBoundingClientRect();if(xe&&Be.height>Xe+5&&(xe.style.transform="rotate(0deg)"),document.dispatchEvent(b),x.stop.length){let ve=window.getComputedStyle(n),Q={left:parseFloat(ve.left),top:parseFloat(ve.top),width:parseFloat(ve.width),height:parseFloat(ve.height)};O.processCallbacks(n,x.stop,!1,Q,me)}}n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(xe=>xe.style.pointerEvents="auto"),x.aspectRatio=It,document.removeEventListener(me,Pe)}return n.querySelectorAll(".jsPanel-resizeit-handle").forEach(me=>{me.style.touchAction="none",O.pointerdown.forEach(xe=>{me.addEventListener(xe,Be=>{if(Be.preventDefault(),Be.stopPropagation(),Be.button&&Be.button>0)return!1;let ve=1;if(x=Object.assign({},O.defaults.resizeit,p),(x.containment||x.containment===0)&&(x.containment=O.pOcontainment(x.containment)),x.aspectRatio&&x.aspectRatio===!0&&(x.aspectRatio="panel"),O.modifier){let ce=O.modifier;ce.altKey?x.aspectRatio="content":ce.ctrlKey?x.aspectRatio="panel":ce.shiftKey&&(x.aspectRatio=!1,ve=2)}let Q=typeof x.maxWidth=="function"?x.maxWidth():x.maxWidth||1e4,Le=typeof x.maxHeight=="function"?x.maxHeight():x.maxHeight||1e4,Ae=typeof x.minWidth=="function"?x.minWidth():x.minWidth,se=typeof x.minHeight=="function"?x.minHeight():x.minHeight;n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(ce=>ce.style.pointerEvents="none");const fe=n.parentElement,bt=fe.tagName.toLowerCase(),re=n.getBoundingClientRect(),Me=fe.getBoundingClientRect(),Qt=window.getComputedStyle(fe,null),jt=parseInt(Qt.borderLeftWidth,10),qe=parseInt(Qt.borderTopWidth,10),yt=Qt.getPropertyValue("position"),ke=Be.clientX||Be.clientX===0||Be.touches[0].clientX,Oe=Be.clientY||Be.clientY===0||Be.touches[0].clientY,ht=ke/Oe,We=Be.target.classList,be=n.getScaleFactor(),ge=re.width/re.height,vt=n.content.getBoundingClientRect(),De=vt.width/vt.height,at=n.header.getBoundingClientRect().height,Qe=n.footer.getBoundingClientRect().height||0;let He=re.left,je=re.top,oe=1e4,Ne=1e4,K=1e4,Ke=1e4;Ie=re.width,Xe=re.height,bt!=="body"&&(He=re.left-Me.left+fe.scrollLeft,je=re.top-Me.top+fe.scrollTop),bt==="body"&&x.containment?(oe=document.documentElement.clientWidth-re.left,K=document.documentElement.clientHeight-re.top,Ne=re.width+re.left,Ke=re.height+re.top):x.containment&&(yt==="static"?(oe=Me.width-re.left+jt,K=Me.height+Me.top-re.top+qe,Ne=re.width+(re.left-Me.left)-jt,Ke=re.height+(re.top-Me.top)-qe):(oe=fe.clientWidth-(re.left-Me.left)/be.x+jt,K=fe.clientHeight-(re.top-Me.top)/be.y+qe,Ne=(re.width+re.left-Me.left)/be.x-jt,Ke=n.clientHeight+(re.top-Me.top)/be.y-qe)),x.containment&&(Ne-=x.containment[3],Ke-=x.containment[0],oe-=x.containment[1],K-=x.containment[2]);const tt=window.getComputedStyle(n),mt=parseFloat(tt.width)-re.width,V=parseFloat(tt.height)-re.height;let Bt=parseFloat(tt.left)-re.left,Wt=parseFloat(tt.top)-re.top;fe!==document.body&&(Bt+=Me.left,Wt+=Me.top);let Je=parseInt(tt.borderTopWidth,10),Jt=parseInt(tt.borderRightWidth,10),ee=parseInt(tt.borderBottomWidth,10),we=parseInt(tt.borderLeftWidth,10);ie=ce=>{ce.preventDefault(),ae||(document.dispatchEvent(w),x.start.length&&O.processCallbacks(n,x.start,!1,{width:Ie,height:Xe,left:He,top:je},ce),n.front(),n.status==="maximized"&&(n.status="normalized",n.controlbar.querySelector(".jsPanel-btn-maximize")&&n.setControlStatus("maximize","show"),n.controlbar.querySelector(".jsPanel-btn-normalize")&&n.setControlStatus("normalize","hide")),re.height>Xe+5&&(n.status="normalized",n.setControls([".jsPanel-btn-normalize"]))),ae=1,document.dispatchEvent(D);let _e=ce.touches?ce.touches[0].clientX:ce.clientX,Re=ce.touches?ce.touches[0].clientY:ce.clientY,$e;We.contains("jsPanel-resizeit-e")?(M=Ie+(_e-ke)*ve/be.x+mt,M>=oe&&(M=oe),M>=Q&&(M=Q),M<=Ae&&(M=Ae),n.style.width=M+"px",ve===2&&(n.style.left=He-(_e-ke)+"px"),x.aspectRatio==="content"?(n.style.height=(M-Jt-we)/De+at+Qe+Je+ee+"px",x.containment&&($e=n.overlaps(fe),$e.bottom<=x.containment[2]&&(n.style.height=K+"px",n.style.width=K*De+"px"))):x.aspectRatio==="panel"&&(n.style.height=M/ge+"px",x.containment&&($e=n.overlaps(fe),$e.bottom<=x.containment[2]&&(n.style.height=K+"px",n.style.width=K*ge+"px")))):We.contains("jsPanel-resizeit-s")?(U=Xe+(Re-Oe)*ve/be.y+V,U>=K&&(U=K),U>=Le&&(U=Le),U<=se&&(U=se),n.style.height=U+"px",ve===2&&(n.style.top=je-(Re-Oe)+"px"),x.aspectRatio==="content"?(n.style.width=(U-at-Qe-Je-ee)*De+Je+ee+"px",x.containment&&($e=n.overlaps(fe),$e.right<=x.containment[1]&&(n.style.width=oe+"px",n.style.height=oe/De+"px"))):x.aspectRatio==="panel"&&(n.style.width=U*ge+"px",x.containment&&($e=n.overlaps(fe),$e.right<=x.containment[1]&&(n.style.width=oe+"px",n.style.height=oe/ge+"px")))):We.contains("jsPanel-resizeit-w")?(M=Ie+(ke-_e)*ve/be.x+mt,M<=Q&&M>=Ae&&M<=Ne&&(n.style.left=He+(_e-ke)/be.x+Bt+"px"),M>=Ne&&(M=Ne),M>=Q&&(M=Q),M<=Ae&&(M=Ae),n.style.width=M+"px",x.aspectRatio==="content"?(n.style.height=(M-Jt-we)/De+at+Qe+Je+ee+"px",x.containment&&($e=n.overlaps(fe),$e.bottom<=x.containment[2]&&(n.style.height=K+"px",n.style.width=K*De+"px"))):x.aspectRatio==="panel"&&(n.style.height=M/ge+"px",x.containment&&($e=n.overlaps(fe),$e.bottom<=x.containment[2]&&(n.style.height=K+"px",n.style.width=K*ge+"px")))):We.contains("jsPanel-resizeit-n")?(U=Xe+(Oe-Re)*ve/be.y+V,U<=Le&&U>=se&&U<=Ke&&(n.style.top=je+(Re-Oe)/be.y+Wt+"px"),U>=Ke&&(U=Ke),U>=Le&&(U=Le),U<=se&&(U=se),n.style.height=U+"px",x.aspectRatio==="content"?(n.style.width=(U-at-Qe-Je-ee)*De+Je+ee+"px",x.containment&&($e=n.overlaps(fe),$e.right<=x.containment[1]&&(n.style.width=oe+"px",n.style.height=oe/De+"px"))):x.aspectRatio==="panel"&&(n.style.width=U*ge+"px",x.containment&&($e=n.overlaps(fe),$e.right<=x.containment[1]&&(n.style.width=oe+"px",n.style.height=oe/ge+"px")))):We.contains("jsPanel-resizeit-se")?(M=Ie+(_e-ke)*ve/be.x+mt,M>=oe&&(M=oe),M>=Q&&(M=Q),M<=Ae&&(M=Ae),n.style.width=M+"px",ve===2&&(n.style.left=He-(_e-ke)+"px"),x.aspectRatio&&(n.style.height=M/ge+"px"),U=Xe+(Re-Oe)*ve/be.y+V,U>=K&&(U=K),U>=Le&&(U=Le),U<=se&&(U=se),n.style.height=U+"px",ve===2&&(n.style.top=je-(Re-Oe)+"px"),x.aspectRatio==="content"?(n.style.width=(U-at-Qe-Je-ee)*De+Je+ee+"px",x.containment&&($e=n.overlaps(fe),$e.right<=x.containment[1]&&(n.style.width=oe+"px",n.style.height=oe/De+"px"))):x.aspectRatio==="panel"&&(n.style.width=U*ge+"px",x.containment&&($e=n.overlaps(fe),$e.right<=x.containment[1]&&(n.style.width=oe+"px",n.style.height=oe/ge+"px")))):We.contains("jsPanel-resizeit-sw")?(U=Xe+(Re-Oe)*ve/be.y+V,U>=K&&(U=K),U>=Le&&(U=Le),U<=se&&(U=se),n.style.height=U+"px",ve===2&&(n.style.top=je-(Re-Oe)+"px"),x.aspectRatio&&(n.style.width=U*ge+"px"),M=Ie+(ke-_e)*ve/be.x+mt,M<=Q&&M>=Ae&&M<=Ne&&(n.style.left=He+(_e-ke)/be.x+Bt+"px"),M>=Ne&&(M=Ne),M>=Q&&(M=Q),M<=Ae&&(M=Ae),n.style.width=M+"px",x.aspectRatio==="content"?(n.style.height=(M-Jt-we)/De+at+Qe+Je+ee+"px",x.containment&&($e=n.overlaps(fe),$e.bottom<=x.containment[2]&&(n.style.height=K+"px",n.style.width=K*De+"px"))):x.aspectRatio==="panel"&&(n.style.height=M/ge+"px",x.containment&&($e=n.overlaps(fe),$e.bottom<=x.containment[2]&&(n.style.height=K+"px",n.style.width=K*ge+"px")))):We.contains("jsPanel-resizeit-ne")?(M=Ie+(_e-ke)*ve/be.x+mt,M>=oe&&(M=oe),M>=Q&&(M=Q),M<=Ae&&(M=Ae),n.style.width=M+"px",ve===2&&(n.style.left=He-(_e-ke)+"px"),x.aspectRatio&&(n.style.height=M/ge+"px"),U=Xe+(Oe-Re)*ve/be.y+V,U<=Le&&U>=se&&U<=Ke&&(n.style.top=je+(Re-Oe)/be.y+Wt+"px"),U>=Ke&&(U=Ke),U>=Le&&(U=Le),U<=se&&(U=se),n.style.height=U+"px",x.aspectRatio==="content"?(n.style.width=(U-at-Qe-Je-ee)*De+Je+ee+"px",x.containment&&($e=n.overlaps(fe),$e.right<=x.containment[1]&&(n.style.width=oe+"px",n.style.height=oe/De+"px"))):x.aspectRatio==="panel"&&(n.style.width=U*ge+"px",x.containment&&($e=n.overlaps(fe),$e.right<=x.containment[1]&&(n.style.width=oe+"px",n.style.height=oe/ge+"px")))):We.contains("jsPanel-resizeit-nw")&&(x.aspectRatio&&We.contains("jsPanel-resizeit-nw")&&(_e=Re*ht,Re=_e/ht),M=Ie+(ke-_e)*ve/be.x+mt,M<=Q&&M>=Ae&&M<=Ne&&(n.style.left=He+(_e-ke)/be.x+Bt+"px"),M>=Ne&&(M=Ne),M>=Q&&(M=Q),M<=Ae&&(M=Ae),n.style.width=M+"px",x.aspectRatio&&(n.style.height=M/ge+"px"),U=Xe+(Oe-Re)*ve/be.y+V,U<=Le&&U>=se&&U<=Ke&&(n.style.top=je+(Re-Oe)/be.y+Wt+"px"),U>=Ke&&(U=Ke),U>=Le&&(U=Le),U<=se&&(U=se),n.style.height=U+"px",x.aspectRatio==="content"?n.style.width=(U-at-Qe-Je-ee)*De+Je+ee+"px":x.aspectRatio==="panel"&&(n.style.width=U*ge+"px")),window.getSelection().removeAllRanges();const Tt=window.getComputedStyle(n),Te={left:parseFloat(Tt.left),top:parseFloat(Tt.top),right:parseFloat(Tt.right),bottom:parseFloat(Tt.bottom),width:parseFloat(Tt.width),height:parseFloat(Tt.height)};x.resize.length&&O.processCallbacks(n,x.resize,!1,Te,ce)},O.pointermove.forEach(ce=>document.addEventListener(ce,ie,!1)),window.addEventListener("mouseout",Fe,!1)})}),O.pointerup.forEach(function(xe){document.addEventListener(xe,Pe),window.removeEventListener("mouseout",Fe)}),p.disable&&(me.style.pointerEvents="none")}),n},n.resizeit=p=>{const w=n.querySelectorAll(".jsPanel-resizeit-handle");return p==="disable"?w.forEach(D=>D.style.pointerEvents="none"):w.forEach(D=>D.style.pointerEvents="auto"),n},n.getScaleFactor=()=>{const p=n.getBoundingClientRect();return{x:p.width/n.offsetWidth,y:p.height/n.offsetHeight}},n.calcSizeFactors=()=>{const p=window.getComputedStyle(n);if(e.container==="window")n.hf=parseFloat(p.left)/(window.innerWidth-parseFloat(p.width)),n.vf=parseFloat(p.top)/(window.innerHeight-parseFloat(p.height));else if(n.parentElement){let w=n.parentElement.getBoundingClientRect();n.hf=parseFloat(p.left)/(w.width-parseFloat(p.width)),n.vf=parseFloat(p.top)/(w.height-parseFloat(p.height))}},n.saveCurrentDimensions=()=>{const p=window.getComputedStyle(n);n.currentData.width=p.width,n.currentData.height=p.height},n.saveCurrentPosition=()=>{const p=window.getComputedStyle(n);n.currentData.left=p.left,n.currentData.top=p.top},n.reposition=(...p)=>{let w=e.position,D=!0,b;return p.forEach(x=>{typeof x=="string"||typeof x=="object"?w=x:typeof x=="boolean"?D=x:typeof x=="function"&&(b=x)}),O.position(n,w),n.slaves&&n.slaves.size>0&&n.slaves.forEach(x=>x.reposition()),D&&n.saveCurrentPosition(),b&&b.call(n,n),n},n.repositionOnSnap=p=>{let w="0",D="0",b=O.pOcontainment(e.dragit.containment);if(e.dragit.snap.containment)switch(p){case"left-top":w=b[3],D=b[0];break;case"right-top":w=-b[1],D=b[0];break;case"right-bottom":w=-b[1],D=-b[2];break;case"left-bottom":w=b[3],D=-b[2];break;case"center-top":w=b[3]/2-b[1]/2,D=b[0];break;case"center-bottom":w=b[3]/2-b[1]/2,D=-b[2];break;case"left-center":w=b[3],D=b[0]/2-b[2]/2;break;case"right-center":w=-b[1],D=b[0]/2-b[2]/2;break}O.position(n,p),O.setStyles(n,{left:`calc(${n.style.left} + ${w}px)`,top:`calc(${n.style.top} + ${D}px)`})},n.overlaps=(p,w,D)=>{let b=n.getBoundingClientRect(),x=getComputedStyle(n.parentElement),ie=n.getScaleFactor(),ae={top:0,right:0,bottom:0,left:0},M,U=0,Ie=0,Xe=0,It=0;n.options.container!=="window"&&w==="paddingbox"&&(ae.top=parseInt(x.borderTopWidth,10)*ie.y,ae.right=parseInt(x.borderRightWidth,10)*ie.x,ae.bottom=parseInt(x.borderBottomWidth,10)*ie.y,ae.left=parseInt(x.borderLeftWidth,10)*ie.x),typeof p=="string"?p==="window"?M={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}:p==="parent"?M=n.parentElement.getBoundingClientRect():M=document.querySelector(p).getBoundingClientRect():M=p.getBoundingClientRect(),D&&(U=D.touches?D.touches[0].clientX:D.clientX,Ie=D.touches?D.touches[0].clientY:D.clientY,Xe=U-M.left,It=Ie-M.top);let Fe=b.left<M.right&&b.right>M.left,Pe=b.top<M.bottom&&b.bottom>M.top;return{overlaps:Fe&&Pe,top:b.top-M.top-ae.top,right:M.right-b.right-ae.right,bottom:M.bottom-b.bottom-ae.bottom,left:b.left-M.left-ae.left,parentBorderWidth:ae,panelRect:b,referenceRect:M,pointer:{clientX:U,clientY:Ie,left:Xe-ae.left,top:It-ae.top,right:M.width-Xe-ae.right,bottom:M.height-It-ae.bottom}}},n.setSize=()=>{if(e.panelSize){const p=O.pOsize(n,e.panelSize);n.style.width=p.width,n.style.height=p.height}else if(e.contentSize){const p=O.pOsize(n,e.contentSize);n.content.style.width=p.width,n.content.style.height=p.height,n.style.width=p.width,n.content.style.width="100%"}return n},n.resize=(...p)=>{let w=window.getComputedStyle(n),D={width:w.width,height:w.height},b=!0,x;p.forEach(M=>{typeof M=="string"?D=M:typeof M=="object"?D=Object.assign(D,M):typeof M=="boolean"?b=M:typeof M=="function"&&(x=M)});let ie=O.pOsize(n,D);n.style.width=ie.width,n.style.height=ie.height,n.slaves&&n.slaves.size>0&&n.slaves.forEach(M=>M.reposition()),b&&n.saveCurrentDimensions(),n.status="normalized";let ae=n.controlbar.querySelector(".jsPanel-btn-smallify");return ae&&(ae.style.transform="rotate(0deg)"),x&&x.call(n,n),n.calcSizeFactors(),n},n.windowResizeHandler=p=>{if(p.target===window){let w=n.status,D=e.onwindowresize,b,x;if(w==="maximized"&&D)n.maximize(!1,!0);else if(n.snapped&&w!=="minimized")n.snap(n.snapped,!0);else if(w==="normalized"||w==="smallified"||w==="maximized"){let ie=typeof D;ie==="boolean"?(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",x=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=x<=0?0:x+"px"):ie==="function"?D.call(n,p,n):ie==="object"&&(D.preset===!0&&(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",x=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=x<=0?0:x+"px"),D.callback.call(n,p,n))}else w==="smallifiedmax"&&D&&n.maximize(!1,!0).smallify();n.slaves&&n.slaves.size>0&&n.slaves.forEach(ie=>ie.reposition())}},n.setControls=(p,w)=>(n.header.querySelectorAll(".jsPanel-btn").forEach(D=>{const b=D.className.split("-"),x=b[b.length-1];n.getAttribute(`data-btn${x}`)!=="hidden"&&(D.style.display="block")}),p.forEach(D=>{const b=n.controlbar.querySelector(D);b&&(b.style.display="none")}),w&&w.call(n,n),n),n.setControlStatus=(p,w="enable",D)=>{const b=n.controlbar.querySelector(`.jsPanel-btn-${p}`);switch(w){case"disable":n.getAttribute(`data-btn${p}`)!=="removed"&&(n.setAttribute(`data-btn${p}`,"disabled"),b.style.pointerEvents="none",b.style.opacity=.4,b.style.cursor="default");break;case"hide":n.getAttribute(`data-btn${p}`)!=="removed"&&(n.setAttribute(`data-btn${p}`,"hidden"),b.style.display="none");break;case"show":n.getAttribute(`data-btn${p}`)!=="removed"&&(n.setAttribute(`data-btn${p}`,"enabled"),b.style.display="block",b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"enable":n.getAttribute(`data-btn${p}`)!=="removed"&&(n.getAttribute(`data-btn${p}`)==="hidden"&&(b.style.display="block"),n.setAttribute(`data-btn${p}`,"enabled"),b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"remove":n.controlbar.removeChild(b),n.setAttribute(`data-btn${p}`,"removed");break}return D&&D.call(n,n),n},n.setControlSize=p=>{const w=p.toLowerCase();n.controlbar.querySelectorAll(".jsPanel-btn").forEach(b=>{["jsPanel-btn-xl","jsPanel-btn-lg","jsPanel-btn-md","jsPanel-btn-sm","jsPanel-btn-xs"].forEach(x=>b.classList.remove(x)),b.classList.add(`jsPanel-btn-${w}`)}),w==="xl"?n.titlebar.style.fontSize="1.5rem":w==="lg"?n.titlebar.style.fontSize="1.25rem":w==="md"?n.titlebar.style.fontSize="1.05rem":w==="sm"?n.titlebar.style.fontSize=".9rem":w==="xs"&&(n.titlebar.style.fontSize=".8rem")},n.setHeaderControls=p=>{if(n.options.headerControls.add){let x=n.options.headerControls.add;Array.isArray(x)||(x=[x]),x.forEach(ie=>n.addControl(ie))}let w=[];n.controlbar.querySelectorAll(".jsPanel-btn").forEach(x=>{let ie=x.className.match(/jsPanel-btn-[a-z\d]{3,}/i),ae=ie[0].substring(12);w.push(ae)});const b=O.pOheaderControls(e.headerControls);return e.headerControls=b,w.forEach(x=>{b[x]&&n.setControlStatus(x,b[x])}),n.setControlSize(b.size),p&&p.call(n,n),n},n.setHeaderLogo=(p,w)=>{let D=[n.headerlogo],b=document.querySelector("#"+n.id+"-min");return b&&D.push(b.querySelector(".jsPanel-headerlogo")),typeof p=="string"?p.startsWith("<")?D.forEach(x=>x.innerHTML=p):D.forEach(x=>{O.emptyNode(x);let ie=document.createElement("img");ie.src=p,x.append(ie)}):D.forEach(x=>{O.emptyNode(x),x.append(p)}),n.headerlogo.childNodes.forEach(x=>{x.nodeName&&x.nodeName==="IMG"&&x.setAttribute("draggable","false")}),w&&w.call(n,n),n},n.setHeaderRemove=p=>(n.removeChild(n.header),n.content.classList.add("jsPanel-content-noheader"),["close","maximize","normalize","minimize","smallify"].forEach(w=>n.setAttribute(`data-btn${w}`,"removed")),p&&p.call(n,n),n),n.setHeaderTitle=(p,w)=>{let D=[n.headertitle],b=document.querySelector("#"+n.id+"-min");return b&&D.push(b.querySelector(".jsPanel-title")),typeof p=="string"?D.forEach(x=>x.innerHTML=p):typeof p=="function"?D.forEach(x=>{O.emptyNode(x),x.innerHTML=p()}):D.forEach(x=>{O.emptyNode(x),x.append(p)}),w&&w.call(n,n),n},n.setIconfont=(p,w=n,D)=>{if(p){let b,x;if(p==="fa"||p==="far"||p==="fal"||p==="fas"||p==="fad")b=[`${p} fa-window-close`,`${p} fa-window-maximize`,`${p} fa-window-restore`,`${p} fa-window-minimize`,`${p} fa-chevron-up`];else if(p==="material-icons")b=[p,p,p,p,p,p],x=["close","fullscreen","fullscreen_exit","call_received","expand_less"];else if(Array.isArray(p))b=[`custom-control-icon ${p[4]}`,`custom-control-icon ${p[3]}`,`custom-control-icon ${p[2]}`,`custom-control-icon ${p[1]}`,`custom-control-icon ${p[0]}`];else if(p==="bootstrap"||p==="glyphicon")b=["glyphicon glyphicon-remove","glyphicon glyphicon-fullscreen","glyphicon glyphicon-resize-full","glyphicon glyphicon-minus","glyphicon glyphicon-chevron-up"];else return w;w.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(ie=>O.emptyNode(ie).innerHTML="<span></span>"),Array.prototype.slice.call(w.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((ie,ae)=>{ie.className=b[ae],p==="material-icons"&&(ie.textContent=x[ae])})}return D&&D.call(w,w),w},n.addToolbar=(p,w,D)=>{if(p==="header"?p=n.headertoolbar:p==="footer"&&(p=n.footer),typeof w=="string")p.innerHTML=w;else if(Array.isArray(w))w.forEach(b=>{typeof b=="string"?p.innerHTML+=b:p.append(b)});else if(typeof w=="function"){let b=w.call(n,n);typeof b=="string"?p.innerHTML=b:p.append(b)}else p.append(w);return p.classList.add("active"),D&&D.call(n,n),n},n.addCloseControl=()=>{let p=document.createElement("button"),w=n.content.style.color;return p.classList.add("jsPanel-addCloseCtrl"),p.innerHTML=O.icons.close,p.style.color=w,n.options.rtl&&p.classList.add("rtl"),n.appendChild(p),O.pointerup.forEach(D=>{p.addEventListener(D,b=>{if(b.preventDefault(),b.button&&b.button>0)return!1;n.close(null,!0)})}),O.pointerdown.forEach(D=>{p.addEventListener(D,b=>b.preventDefault())}),n},n.addControl=p=>{if(!p.html)return n;p.position||(p.position=1);const w=n.controlbar.querySelectorAll(".jsPanel-btn").length;let D=document.createElement("button");D.innerHTML=p.html,D.className=`jsPanel-btn jsPanel-btn-${p.name} jsPanel-btn-${e.headerControls.size}`,D.style.color=n.header.style.color,p.position>w?n.controlbar.append(D):n.controlbar.insertBefore(D,n.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${p.position})`));const b=p.ariaLabel||p.name;return b&&D.setAttribute("aria-label",b),O.pointerup.forEach(x=>{D.addEventListener(x,ie=>{if(ie.preventDefault(),ie.button&&ie.button>0)return!1;p.handler.call(n,n,D)})}),p.afterInsert&&p.afterInsert.call(D,D),n},n.setRtl=()=>{[n.header,n.content,n.footer].forEach(p=>{p.dir="rtl",e.rtl.lang&&(p.lang=e.rtl.lang)})},n.id=e.id,n.classList.add("jsPanel-"+e.paneltype),e.paneltype==="standard"&&(n.style.zIndex=this.zi.next()),o.append(n),n.front(!1,!1),n.setTheme(e.theme),e.boxShadow&&n.classList.add(`jsPanel-depth-${e.boxShadow}`),e.header){if(e.headerLogo&&n.setHeaderLogo(e.headerLogo),n.setIconfont(e.iconfont),n.setHeaderTitle(e.headerTitle),n.setHeaderControls(),O.isIE){let p=[n.headerbar,n.controlbar];switch(n.options.headerControls.size){case"md":p.forEach(w=>{w.style.height="34px"});break;case"xs":p.forEach(w=>{w.style.height="26px"});break;case"sm":p.forEach(w=>{w.style.height="30px"});break;case"lg":p.forEach(w=>{w.style.height="38px"});break;case"xl":p.forEach(w=>{w.style.height="42px"});break}}if(e.header==="auto-show-hide"){let p="jsPanel-depth-"+e.boxShadow;n.header.style.opacity=0,n.style.backgroundColor="transparent",this.remClass(n,p),this.setClass(n.content,p),n.header.addEventListener("mouseenter",()=>{n.header.style.opacity=1,O.setClass(n,p),O.remClass(n.content,p)}),n.header.addEventListener("mouseleave",()=>{n.header.style.opacity=0,O.remClass(n,p),O.setClass(n.content,p)})}}else n.setHeaderRemove(),e.addCloseControl&&n.addCloseControl();if(e.headerToolbar&&n.addToolbar(n.headertoolbar,e.headerToolbar),e.footerToolbar&&n.addToolbar(n.footer,e.footerToolbar),e.border&&n.setBorder(e.border),e.borderRadius&&n.setBorderRadius(e.borderRadius),e.css)for(const[p,w]of Object.entries(e.css))if(p==="panel")n.className+=` ${w}`;else{let D=n.querySelector(`.jsPanel-${p}`);D&&(D.className+=` ${w}`)}if(e.content&&(typeof e.content=="function"?e.content.call(n,n):typeof e.content=="string"?n.content.innerHTML=e.content:n.content.append(e.content)),e.contentAjax&&this.ajax(e.contentAjax,n),e.contentFetch&&this.fetch(e.contentFetch,n),e.contentOverflow){const p=e.contentOverflow.split(" ");p.length===1?n.content.style.overflow=p[0]:p.length===2&&(n.content.style.overflowX=p[0],n.content.style.overflowY=p[1])}if(e.autoclose){typeof e.autoclose=="number"?e.autoclose={time:e.autoclose+"ms"}:typeof e.autoclose=="string"&&(e.autoclose={time:e.autoclose});let p=Object.assign({},O.defaultAutocloseConfig,e.autoclose);p.time&&typeof p.time=="number"&&(p.time+="ms");let w=n.progressbar.querySelector("div");w.addEventListener("animationend",D=>{D.stopPropagation(),n.progressbar.classList.remove("active"),n.close()}),p.progressbar&&(n.progressbar.classList.add("active"),p.background?O.colorNames[p.background]?n.progressbar.style.background="#"+O.colorNames[p.background]:n.progressbar.style.background=p.background:n.progressbar.classList.add("success-bg")),w.style.animation=`${p.time} progressbar`}if(e.rtl&&n.setRtl(),n.setSize(),n.status="normalized",e.position?this.position(n,e.position):n.style.opacity=1,document.dispatchEvent(m),n.calcSizeFactors(),e.animateIn&&(n.addEventListener("animationend",()=>{this.remClass(n,e.animateIn)}),this.setClass(n,e.animateIn)),e.syncMargins){let p=this.pOcontainment(e.maximizedMargin);e.dragit&&(e.dragit.containment=p,e.dragit.snap===!0?(e.dragit.snap=O.defaultSnapConfig,e.dragit.snap.containment=!0):e.dragit.snap&&(e.dragit.snap.containment=!0)),e.resizeit&&(e.resizeit.containment=p)}if(e.dragit?(["start","drag","stop"].forEach(p=>{e.dragit[p]?typeof e.dragit[p]=="function"&&(e.dragit[p]=[e.dragit[p]]):e.dragit[p]=[]}),n.drag(e.dragit),n.addEventListener("jspaneldragstop",p=>{p.panel===n&&n.calcSizeFactors()},!1)):n.titlebar.style.cursor="default",e.resizeit){["start","resize","stop"].forEach(w=>{e.resizeit[w]?typeof e.resizeit[w]=="function"&&(e.resizeit[w]=[e.resizeit[w]]):e.resizeit[w]=[]}),n.sizeit(e.resizeit);let p;n.addEventListener("jspanelresizestart",w=>{w.panel===n&&(p=n.status)},!1),n.addEventListener("jspanelresizestop",w=>{w.panel===n&&(p==="smallified"||p==="smallifiedmax"||p==="maximized")&&parseFloat(n.style.height)>parseFloat(window.getComputedStyle(n.header).height)&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(m),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every"),n.calcSizeFactors())},!1)}if(n.saveCurrentDimensions(),n.saveCurrentPosition(),e.setStatus&&(e.setStatus==="smallifiedmax"?n.maximize().smallify():e.setStatus==="smallified"?n.smallify():n[e.setStatus.slice(0,-1)]()),this.pointerdown.forEach(p=>{n.addEventListener(p,w=>{!w.target.closest(".jsPanel-btn-close")&&!w.target.closest(".jsPanel-btn-minimize")&&e.paneltype==="standard"&&n.front()},!1)}),e.onwindowresize&&n.options.container==="window"&&window.addEventListener("resize",n.windowResizeHandler,!1),e.onparentresize){let p=e.onparentresize,w=typeof p,D=n.isChildpanel();if(D){const b=D.content;let x=[];n.parentResizeHandler=ie=>{if(ie.panel===D){x[0]=b.offsetWidth,x[1]=b.offsetHeight;let ae=n.status,M,U;ae==="maximized"&&p?n.maximize():n.snapped&&ae!=="minimized"?n.snap(n.snapped,!0):ae==="normalized"||ae==="smallified"||ae==="maximized"?w==="function"?p.call(n,n,{width:x[0],height:x[1]}):w==="object"&&p.preset===!0?(M=(x[0]-n.offsetWidth)*n.hf,n.style.left=M<=0?0:M+"px",U=(x[1]-n.offsetHeight)*n.vf,n.style.top=U<=0?0:U+"px",p.callback.call(n,n,{width:x[0],height:x[1]})):w==="boolean"&&(M=(x[0]-n.offsetWidth)*n.hf,n.style.left=M<=0?0:M+"px",U=(x[1]-n.offsetHeight)*n.vf,n.style.top=U<=0?0:U+"px"):ae==="smallifiedmax"&&p&&n.maximize().smallify()}},document.addEventListener("jspanelresize",n.parentResizeHandler,!1)}}return this.globalCallbacks&&(Array.isArray(this.globalCallbacks)?this.globalCallbacks.forEach(p=>p.call(n,n)):this.globalCallbacks.call(n,n)),e.callback&&(Array.isArray(e.callback)?e.callback.forEach(p=>p.call(n,n)):e.callback.call(n,n)),t&&(Array.isArray(t)?t.forEach(p=>p.call(n,n)):t.call(n,n)),document.dispatchEvent(l),n}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qs=Symbol.for(""),ed=e=>{if(e?.r===qs)return e?._$litStatic$},td=e=>({_$litStatic$:e,r:qs}),rs=new Map,nd=e=>(t,...r)=>{const o=r.length;let n,l;const c=[],f=[];let m,T=0,j=!1;for(;T<o;){for(m=t[T];T<o&&(l=r[T],(n=ed(l))!==void 0);)m+=n+t[++T],j=!0;T!==o&&f.push(l),c.push(m),T++}if(T===o&&c.push(t[o]),j){const R=c.join("$$lit$$");(t=rs.get(R))===void 0&&(c.raw=c,rs.set(R,t=c)),r=f}return e(t,...r)},rd=nd(G);var id=Object.defineProperty,od=Object.getOwnPropertyDescriptor,Hr=(e,t,r,o)=>{for(var n=o>1?void 0:o?od(t,r):t,l=e.length-1,c;l>=0;l--)(c=e[l])&&(n=(o?c(t,r,n):c(n))||n);return o&&n&&id(t,r,n),n};let Dt=class extends Ge{constructor(){super(...arguments),this.values=[],this.current="",this.search="",this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,r){return this.values=t,this.current=r,this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(o=>{this.resolveFn=o,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}close(e){document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),Dt.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),Dt.instance===this&&(Dt.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(r=>r.value.toLowerCase().includes(e));return G`
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
      ${t.length===0?G`<div class="empty">No matching values.</div>`:G`<ul>
            ${t.slice(0,500).map(r=>G`
                <li
                  class=${r.value===this.current?"selected":""}
                  @click=${()=>this.close(r.value)}
                >
                  <span class="label">${r.value||G`<em>(empty)</em>`}</span>
                  <span class="count">${r.count}</span>
                </li>
              `)}
          </ul>`}
      ${this.values.length>500?G`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      <div class="actions">
        <button class="text" @click=${()=>this.close({clear:!0})}>Clear filter</button>
        <span style="color:#6b7280">${t.length} value${t.length===1?"":"s"}</span>
      </div>
    `}};Dt.instance=null;Dt.styles=[Gt,ot`
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
    `];Hr([Xt({type:Array})],Dt.prototype,"values",2);Hr([Xt({type:String})],Dt.prototype,"current",2);Hr([ne()],Dt.prototype,"search",2);Dt=Hr([dt("filter-popover")],Dt);var sd=Object.defineProperty,ad=Object.getOwnPropertyDescriptor,zt=(e,t,r,o)=>{for(var n=o>1?void 0:o?ad(t,r):t,l=e.length-1,c;l>=0;l--)(c=e[l])&&(n=(o?c(t,r,n):c(n))||n);return o&&n&&sd(t,r,n),n};let Et=class extends Ge{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const r=t[this.highlightIdx];r!==void 0?(e.preventDefault(),this.onPick(r)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const r=[];for(const o of this.options)if(o.toLowerCase().includes(t)&&(r.push(o),r.length>=500))break;return r}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return G`
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
        ${this.value?G`<button
              type="button"
              class="clear"
              title="Clear filter"
              tabindex="-1"
              @mousedown=${r=>r.preventDefault()}
              @click=${this.onClear}
            >
              ×
            </button>`:Ue}
      </div>
      ${this.open?G`<ul class="dropdown" style=${t}>
            ${e.length===0?G`<li class="empty">No matching values.</li>`:e.map((r,o)=>G`
                    <li
                      class=${o===this.highlightIdx?"highlighted":""}
                      @mousedown=${n=>n.preventDefault()}
                      @click=${()=>this.onPick(r)}
                    >
                      ${r}
                    </li>
                  `)}
          </ul>`:Ue}
    `}};Et.styles=ot`
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
  `;zt([Xt({type:String})],Et.prototype,"value",2);zt([Xt({type:Array})],Et.prototype,"options",2);zt([Xt({type:String})],Et.prototype,"placeholder",2);zt([ne()],Et.prototype,"open",2);zt([ne()],Et.prototype,"highlightIdx",2);zt([ne()],Et.prototype,"dropTop",2);zt([ne()],Et.prototype,"dropLeft",2);zt([ne()],Et.prototype,"dropMinWidth",2);zt([ne()],Et.prototype,"editing",2);zt([zr("input")],Et.prototype,"inputEl",2);Et=zt([dt("filter-combobox")],Et);var ld=Object.defineProperty,cd=Object.getOwnPropertyDescriptor,ft=(e,t,r,o)=>{for(var n=o>1?void 0:o?cd(t,r):t,l=e.length-1,c;l>=0;l--)(c=e[l])&&(n=(o?c(t,r,n):c(n))||n);return o&&n&&ld(t,r,n),n};let it=class extends Ge{constructor(){super(...arguments),this.tableId="",this.columns=[],this.rows=[],this.sortColumn=null,this.sortDir=null,this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;t.tableId===this.tableId&&(this.localQuery=t.query??"")}}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.()}async updated(e){e.has("tableId")&&this.tableId&&(this.unsubscribe?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.markEmptyCells()}markEmptyCells(){const e=this.shadowRoot?.querySelectorAll("tbody tr:not(.spacer) > td");if(e)for(const t of e)t.className.startsWith("t-")&&t.classList.toggle("is-null",ud(t))}async bind(){if(!this.tableId)return;const e=await Se(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(o=>{const n=o.find(l=>l.id===this.tableId);n&&this.applyTable(n)}),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const r=e.store.rows(this.tableId);this.unsubscribe=r.subscribe(o=>this.rows=o),this.rows=await r.find()}applyTable(e){this.columns=e.columns,this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filters={...e.filters??{}}}async setCell(e,t,r){const o=await Se();await this.commitCell(o,e,t,r)}async commitCell(e,t,r,o){const n=this.columns.find(l=>l.field===r);if(n){const l=dd(n,o,this.rows,t.id);if(l){await e.api.ui.dialogs.alert(l,`Cannot save ${n.label}`),this.requestUpdate();return}}await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[r]:o},updatedAt:Date.now()})}renderCell(e,t){const r=e.data[t.field],o=t.renderer,n=o?this.cellRenderers?.get(o):void 0;if(n){const l=td(n);return rd`<${l}
        .value=${r??""}
        .column=${t}
        .row=${e.data}
        @change=${c=>this.setCell(e,t.field,c.detail.value)}
      ></${l}>`}switch(t.type){case"boolean":return G`<input
          type="checkbox"
          .checked=${r===!0||r==="true"||r===1||r==="1"}
          @change=${c=>this.setCell(e,t.field,c.target.checked)}
        />`;case"date":return G`<input
          type="date"
          .value=${fd(r)}
          @change=${l=>this.setCell(e,t.field,l.target.value||null)}
        />`;case"datetime":return G`<input
          type="datetime-local"
          .value=${hd(r)}
          @change=${l=>this.setCell(e,t.field,l.target.value||null)}
        />`;case"number":return G`<input
          type="number"
          .value=${r==null?"":String(r)}
          @change=${l=>{const c=l.target.value;this.setCell(e,t.field,c===""?null:Number(c))}}
        />`;default:return G`<input
          type="text"
          .value=${String(r??"")}
          @change=${l=>this.setCell(e,t.field,l.target.value)}
        />`}}async deleteRow(e){await(await Se()).store.rows(this.tableId).remove(e)}async toggleSort(e){let t;this.sortColumn!==e?t="asc":this.sortDir==="asc"?t="desc":this.sortDir==="desc"?t=null:t="asc",this.sortColumn=t?e:null,this.sortDir=t;const r=await Se(),o=t?{sortColumn:e,sortAsc:t==="asc",updatedAt:Date.now()}:{sortColumn:void 0,sortAsc:void 0,updatedAt:Date.now()};await r.store.tables.patch(this.tableId,o)}filteredRows(){const e=Object.entries(this.filters).filter(([,o])=>o&&o.trim().length>0),t=this.globalQuery.trim().toLowerCase(),r=this.localQuery.trim().toLowerCase();return e.length===0&&t.length===0&&r.length===0?this.rows:this.rows.filter(o=>{const n=l=>Object.values(o.data).some(c=>c!=null&&String(c).toLowerCase().includes(l));return t.length>0&&!n(t)||r.length>0&&!n(r)?!1:e.every(([l,c])=>String(o.data[l]??"").toLowerCase().includes(c.toLowerCase()))})}sortedRows(){const e=this.filteredRows();if(!this.sortColumn||!this.sortDir)return e;const t=this.sortColumn,o=this.columns.find(c=>c.field===t)?.type??"string",n=this.sortDir==="asc"?1:-1,l=[...e];return l.sort((c,f)=>pd(c.data[t],f.data[t],o)*n),l}async openFilterPicker(e,t){e.stopPropagation();const r=e.currentTarget,o=Dt.instance;if(!o)return;const n=new Map;for(const f of this.rowsFacetedFor(t)){const m=f.data[t];if(m==null)continue;const T=String(m);n.set(T,(n.get(T)??0)+1)}const l=[...n.entries()].map(([f,m])=>({value:f,count:m})).sort((f,m)=>m.count-f.count||f.value.localeCompare(m.value)),c=await o.open(r.getBoundingClientRect(),l,this.filters[t]??"");c!==null&&(typeof c=="object"&&"clear"in c?this.onFilterInput(t,""):typeof c=="string"&&this.onFilterInput(t,c))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>this.saveFilters(),250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=Object.entries(this.filters).filter(([r,o])=>o&&o.trim().length>0&&r!==e).map(([r,o])=>[r,o.trim().toLowerCase()]);return t.length===0?this.rows:this.rows.filter(r=>t.every(([o,n])=>String(r.data[o]??"").toLowerCase().includes(n)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const r=50,o=500;for(const n of this.visibleColumns){let l=!0;for(const f of t){const m=f.data[n.field];if(m==null)continue;if((typeof m=="string"?m:String(m)).length>=r){l=!1;break}}if(!l)continue;const c=new Set;for(const f of this.rowsFacetedFor(n.field)){const m=f.data[n.field];if(m==null||m==="")continue;const T=typeof m=="string"?m:String(m);if(!(T.length>=r)&&(c.add(T),c.size>=o))break}e.set(n.field,[...c].sort())}return e}onResizeStart(e,t,r){e.preventDefault(),e.stopPropagation();const o=r.offsetWidth;this.resizing={field:t,startX:e.clientX,startW:o};const n=c=>{if(!this.resizing)return;const f=c.clientX-this.resizing.startX,m=Math.max(40,this.resizing.startW+f);this.columns=this.columns.map(T=>T.field===this.resizing.field?{...T,width:m}:T)},l=async()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",l);const c=this.resizing?.field;if(this.resizing=null,!c)return;await(await Se()).store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",n),window.addEventListener("pointerup",l)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,r){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const o=r.getBoundingClientRect(),n=e.clientX<o.left+o.width/2;this.dropTargetField=t,this.dropEdge=n?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const r=this.dragSourceField,o=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!r||r===t||!o)return;const n=[...this.columns],l=n.findIndex(T=>T.field===r);if(l<0)return;const[c]=n.splice(l,1);let f=n.findIndex(T=>T.field===t);if(f<0){n.splice(l,0,c);return}o==="after"&&(f+=1),n.splice(f,0,c),await(await Se()).store.tables.patch(this.tableId,{columns:n,updatedAt:Date.now()})}async saveFilters(){const e=await Se(),t={};for(const[o,n]of Object.entries(this.filters))n&&n.trim().length>0&&(t[o]=n);const r=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:r,updatedAt:Date.now()})}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,r=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,o=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),n=Math.min(e.length,o+r);return{slice:e.slice(o,n),topPad:o*t,bottomPad:(e.length-n)*t}}render(){const e=this.sortedRows(),t=this.visibleColumns,{slice:r,topPad:o,bottomPad:n}=this.virtualSlice(e),l=this.computeFilterSuggestions();return G`
      <table>
        <colgroup>
          ${t.map(c=>G`<col style=${c.width!=null?`width: ${c.width}px`:""} />`)}
          <col style="width:2rem" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(c=>{const f=this.sortColumn===c.field&&this.sortDir,m=f==="asc"?"▲":f==="desc"?"▼":"⇅",T=`t-${c.type}`,j=this.dragSourceField===c.field,R=this.dropTargetField===c.field,F=R&&this.dropEdge==="before"?" drop-before":R&&this.dropEdge==="after"?" drop-after":"";return G`
                <th
                  class=${`${T}${f?" sorted":""}${j?" drag-source":""}${F}`}
                  title=${`${c.field} — click to sort, drag to reorder`}
                  draggable="true"
                  @click=${()=>this.toggleSort(c.field)}
                  @dragstart=${H=>this.onColDragStart(H,c.field)}
                  @dragover=${H=>this.onColDragOver(H,c.field,H.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(c.field)}
                  @drop=${H=>this.onColDrop(H,c.field)}
                  @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                >
                  ${c.label}<span class="sort-icon">${m}</span>
                  <button
                    class=${`funnel${this.filters[c.field]?" active":""}`}
                    title="Filter by value"
                    @click=${H=>this.openFilterPicker(H,c.field)}
                  >
                    <span class="mi sm">filter_list</span>
                  </button>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${H=>H.stopPropagation()}
                    @pointerdown=${H=>this.onResizeStart(H,c.field,H.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:2rem"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(c=>{const f=l.get(c.field)??[];return G`
                <th>
                  <filter-combobox
                    .value=${this.filters[c.field]??""}
                    .options=${f}
                    placeholder="filter…"
                    @filter-change=${m=>this.onFilterInput(c.field,m.detail.value)}
                  ></filter-combobox>
                </th>
              `})}
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${o>0?G`<tr class="spacer" style=${`height:${o}px`}><td colspan=${t.length+1}></td></tr>`:""}
          ${r.map(c=>G`
              <tr>
                ${t.map(f=>G`<td class=${`t-${f.type}`}>${this.renderCell(c,f)}</td>`)}
                <td>
                  <button class="danger" title="Delete row" @click=${()=>this.deleteRow(c.id)}>
                    <span class="mi sm">delete</span>
                  </button>
                </td>
              </tr>
            `)}
          ${n>0?G`<tr class="spacer" style=${`height:${n}px`}><td colspan=${t.length+1}></td></tr>`:""}
        </tbody>
      </table>
    `}};it.styles=[Gt,ot`
    :host {
      display: block;
      overflow: auto;
      max-height: 60vh;
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
  `];ft([Xt({type:String})],it.prototype,"tableId",2);ft([ne()],it.prototype,"columns",2);ft([ne()],it.prototype,"rows",2);ft([ne()],it.prototype,"sortColumn",2);ft([ne()],it.prototype,"sortDir",2);ft([ne()],it.prototype,"filters",2);ft([ne()],it.prototype,"globalQuery",2);ft([ne()],it.prototype,"localQuery",2);ft([ne()],it.prototype,"dragSourceField",2);ft([ne()],it.prototype,"dropTargetField",2);ft([ne()],it.prototype,"dropEdge",2);ft([ne()],it.prototype,"resizing",2);ft([ne()],it.prototype,"cellRenderers",2);ft([ne()],it.prototype,"scrollY",2);ft([ne()],it.prototype,"viewportHeight",2);it=ft([dt("data-table")],it);function ud(e){if((e.textContent??"").trim()!==""||e.querySelector("img"))return!1;const t=e.querySelectorAll("input");for(const r of Array.from(t))if(r.type==="checkbox"||r.value!=="")return!1;return!0}function dd(e,t,r,o){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&r.find(l=>l.id!==o&&l.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function fd(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function hd(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const o=new Date(t);if(Number.isNaN(o.getTime()))return"";const n=o.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}function pd(e,t,r){const o=e==null||e==="",n=t==null||t==="";if(o&&n)return 0;if(o)return 1;if(n)return-1;switch(r){case"number":{const l=Number(e),c=Number(t);return Number.isNaN(l)||Number.isNaN(c)?String(e).localeCompare(String(t)):l-c}case"boolean":return(e?1:0)-(t?1:0);case"date":{const l=new Date(String(e)).getTime(),c=new Date(String(t)).getTime();return Number.isNaN(l)||Number.isNaN(c)?String(e).localeCompare(String(t)):l-c}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}var md=Object.defineProperty,gd=Object.getOwnPropertyDescriptor,Kr=(e,t,r,o)=>{for(var n=o>1?void 0:o?gd(t,r):t,l=e.length-1,c;l>=0;l--)(c=e[l])&&(n=(o?c(t,r,n):c(n))||n);return o&&n&&md(t,r,n),n};let Dn=class extends Ge{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.onBlur=()=>{this.query.trim().length===0&&(this.open=!1)}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}render(){return!this.open&&this.query.length===0?G`<button
        class="icon"
        title="Search rows in this table"
        @click=${()=>this.open=!0}
      >
        <span class="mi sm">search</span>
      </button>`:G`<input
      type="search"
      placeholder="search…"
      autofocus
      .value=${this.query}
      @input=${this.onInput}
      @blur=${this.onBlur}
    />`}};Dn.styles=[Gt,ot`
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
  `];Kr([Xt({type:String})],Dn.prototype,"tableId",2);Kr([ne()],Dn.prototype,"query",2);Kr([ne()],Dn.prototype,"open",2);Dn=Kr([dt("panel-search")],Dn);var bd=Object.defineProperty,yd=Object.getOwnPropertyDescriptor,Vr=(e,t,r,o)=>{for(var n=o>1?void 0:o?yd(t,r):t,l=e.length-1,c;l>=0;l--)(c=e[l])&&(n=(o?c(t,r,n):c(n))||n);return o&&n&&bd(t,r,n),n};let Rn=class extends Ge{constructor(){super(...arguments),this.tableId="",this.rowCount=0,this.tableButtons=[]}async connectedCallback(){super.connectedCallback();const e=await Se();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]);const t=e.store.rows(this.tableId);this.unsubRows=t.subscribe(r=>this.rowCount=r.length),this.rowCount=(await t.find()).length}disconnectedCallback(){super.disconnectedCallback(),this.unsubRows?.()}async addRow(){const e=await Se(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const r={};for(const o of t.columns)r[o.field]=vd(o);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:r,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}async runTableButton(e){const t=await Se();try{await Promise.resolve(e.onClick(t.api,{tableId:this.tableId}))}catch(r){console.error(`[table-button:${e.id}]`,r)}}render(){return G`
      <button title="Add a blank row" @click=${this.addRow}>
        <span class="mi sm">add</span><span>Add row</span>
      </button>
      <button title="Edit columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span><span>Columns</span>
      </button>
      ${this.tableButtons.map(e=>G`<button title=${e.tooltip??e.label} @click=${()=>this.runTableButton(e)}>
          ${e.icon?G`<span class="mi sm">${e.icon}</span>`:""}
          <span>${e.label}</span>
        </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};Rn.styles=[Gt,ot`
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
  `];Vr([Xt({type:String})],Rn.prototype,"tableId",2);Vr([ne()],Rn.prototype,"rowCount",2);Vr([ne()],Rn.prototype,"tableButtons",2);Rn=Vr([dt("panel-footer")],Rn);function vd(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}const jn=new Map,Ar=new Set,Us=new Set;let is=!1;async function wd(){if(is)return;is=!0;const e=await Se(),t=(await e.store.tables.find()).filter(r=>r.workspaceId===e.workspaceId);t.sort(os);for(const r of t)ss(r,e);e.store.tables.subscribe(r=>{const o=r.filter(c=>c.workspaceId===e.workspaceId),n=new Set(o.map(c=>c.id));for(const[c,f]of jn)if(!n.has(c)){jn.delete(c),Ar.add(c),Us.add(c);try{f.status!=="closed"&&f.close()}catch{}}const l=o.filter(c=>!jn.has(c.id)).sort(os);for(const c of l)ss(c,e)})}function os(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const xd=200,$d=100,Ed=720,Cd=360,Ws=34;function kd(e,t){if(!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||e.w<xd||e.h<$d)return null;const r=t.getBoundingClientRect();if(e.w>r.width)return null;const o=Math.max(0,Math.min(e.x,r.width-e.w)),n=Math.max(0,Math.min(e.y,r.height-Ws));return{...e,x:o,y:n}}function _d(e,t){const r=t.clientWidth,o=t.clientHeight,n=e.offsetWidth,c=e.querySelector(".jsPanel-titlebar")?.offsetHeight||Ws,f=parseFloat(e.style.left)||e.offsetLeft||0,m=parseFloat(e.style.top)||e.offsetTop||0,T=Math.max(0,Math.min(f,r-n)),j=Math.max(0,Math.min(m,o-c));T!==f&&(e.style.left=`${T}px`),j!==m&&(e.style.top=`${j}px`)}function ss(e,t){const r=document.createElement("data-table");r.tableId=e.id,r.style.height="100%";const o=document.createElement("panel-search");o.tableId=e.id;const n=document.createElement("panel-footer");n.tableId=e.id;const l=document.getElementById("easydb-panels")??document.body,c=kd(e.windowGeometry,l),f=`panel-${Hs(e.id)}`,m=c?{my:"left-top",at:"left-top",offsetX:c.x,offsetY:c.y}:Pd(),T=c?{panelSize:`${c.w} ${c.h}`}:{contentSize:`${Ed} ${Cd}`},j=O.create({id:f,container:l,headerTitle:e.name,footerToolbar:n,theme:"primary",content:r,...T,position:m,minimizeTo:"parent",dragit:{containment:!1,drag:Ce=>_d(Ce,l),stop:()=>Si(e.id,t)},resizeit:{containment:!1,stop:()=>Si(e.id,t)},onfronted:()=>Ad(e.id,t),onbeforeclose:()=>Ar.has(e.id)?!0:((async()=>await t.api.ui.dialogs.confirm(`Delete table "${e.name}" and all its rows?`,"Confirm delete")&&(Ar.add(e.id),jn.get(e.id)?.close()))(),!1),onclosed:async()=>{jn.delete(e.id),Ar.delete(e.id),!Us.delete(e.id)&&await jd(e.id,t)},onstatuschange:()=>Si(e.id,t)});jn.set(e.id,j);const F=document.getElementById(f)?.querySelector(".jsPanel-controlbar");F&&F.prepend(o),c?.maximized&&typeof j.maximize=="function"?queueMicrotask(()=>j.maximize?.()):c?.minimized&&typeof j.minimize=="function"&&queueMicrotask(()=>j.minimize?.());let H=e.name,Z=null;const le=Ce=>{typeof j.setHeaderTitle=="function"&&j.setHeaderTitle(`${H} (${Ce})`)};t.store.rows(e.id).find().then(Ce=>le(Ce.length)),Z=t.store.rows(e.id).subscribe(Ce=>le(Ce.length)),t.store.tables.subscribe(Ce=>{const et=Ce.find(Ct=>Ct.id===e.id);et&&et.name!==H&&(H=et.name)});const Ze=j.close.bind(j);j.close=()=>(Z?.(),Ze())}let Sd=0;function Pd(){const e=Sd++;return{my:"left-top",at:"left-top",offsetX:40+e%8*30,offsetY:80+e%8*30}}async function Si(e,t){const r=document.getElementById(`panel-${Hs(e)}`);if(!r)return;const o=r.dataset.status??"normalized";try{const l=(await t.store.tables.findOne(e))?.windowGeometry?.z??0,c={x:r.offsetLeft,y:r.offsetTop,w:r.offsetWidth,h:r.offsetHeight,z:l,minimized:o==="minimized",maximized:o==="maximized"};await t.store.tables.patch(e,{windowGeometry:c,updatedAt:Date.now()})}catch{}}async function Ad(e,t){try{const r=await t.store.tables.findOne(e);if(!r)return;const o=r.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...o,z:Date.now()},updatedAt:Date.now()})}catch{}}async function jd(e,t){const r=t.store.rows(e),o=await r.find();await r.bulkRemove(o.map(n=>n.id)),await t.store.tables.remove(e)}function Hs(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}var Td=Object.defineProperty,Fd=Object.getOwnPropertyDescriptor,Ks=(e,t,r,o)=>{for(var n=o>1?void 0:o?Fd(t,r):t,l=e.length-1,c;l>=0;l--)(c=e[l])&&(n=(o?c(t,r,n):c(n))||n);return o&&n&&Td(t,r,n),n};let Or=class extends Ge{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await Se();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(r=>this.tables=r.filter(o=>o.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(r=>r.workspaceId===this.workspaceId),await wd()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?G``:G`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on
      the page, or click <strong>+ New Table</strong> above.
    </div>`}};Or.styles=ot`
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
  `;Ks([ne()],Or.prototype,"tables",2);Or=Ks([dt("table-list")],Or);var Od=Object.defineProperty,Dd=Object.getOwnPropertyDescriptor,Ki=(e,t,r,o)=>{for(var n=o>1?void 0:o?Dd(t,r):t,l=e.length-1,c;l>=0;l--)(c=e[l])&&(n=(o?c(t,r,n):c(n))||n);return o&&n&&Od(t,r,n),n};let Qn=class extends Ge{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await Se();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);if(!t)return;const r=new URLSearchParams(location.search);r.set("space",t.name);const o=`${location.pathname}?${r.toString()}${location.hash}`;location.assign(o)}async addWorkspace(){const t=await(await Se()).api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const r=new URLSearchParams(location.search);r.set("space",t.trim()),location.assign(`${location.pathname}?${r.toString()}${location.hash}`)}render(){return G`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>G`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};Qn.styles=[Gt,ot`
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
  `];Ki([ne()],Qn.prototype,"workspaces",2);Ki([ne()],Qn.prototype,"current",2);Qn=Ki([dt("workspace-selector")],Qn);var as=Object.freeze,Vs=Object.defineProperty,Rd=Object.getOwnPropertyDescriptor,an=(e,t,r,o)=>{for(var n=o>1?void 0:o?Rd(t,r):t,l=e.length-1,c;l>=0;l--)(c=e[l])&&(n=(o?c(t,r,n):c(n))||n);return o&&n&&Vs(t,r,n),n},zd=(e,t)=>as(Vs(e,"raw",{value:as(e.slice())})),ls;let qt=class extends Ge{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.api=null,this.searchTimer=null,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId)},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>{document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:this.searchQuery}}))},200)},this.onDragOver=e=>{cs(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!cs(e))return;e.preventDefault();const t=await Se(),r=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:r,event:e});for(const o of[...t.registries.dropHandlers])try{if(await o(e,t.api))return}catch(n){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:n})}},this.runSlot=e=>{this.api&&Promise.resolve(e.onClick(this.api)).catch(t=>{console.error(`[footer-button:${e.id}]`,t)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager)}async bindRegistries(){const e=await Se();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e))}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){const r=t==="header"||e.variant==="primary"?"primary":"slot";return G`
      <button class=${r} title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
        ${e.icon?G`<span class="mi sm">${e.icon}</span>`:""}
        <span>${e.label}</span>
      </button>
    `}render(){return G(ls||(ls=zd([`
      <header>
        <strong>easyDBAccess <span class="version">v0.0.11</span></strong>
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
    `])),this.searchOpen||this.searchQuery.length>0?G`<input
              class="search"
              type="search"
              placeholder="search all tables…"
              autofocus
              .value=${this.searchQuery}
              @input=${this.onSearchInput}
              @blur=${()=>{this.searchQuery.trim().length===0&&(this.searchOpen=!1)}}
            />`:G`<button
              class="icon-btn"
              title="Search across all tables in this workspace"
              @click=${()=>this.searchOpen=!0}
            >
              <span class="mi">search</span>
            </button>`,this.headerButtons.map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};qt.styles=[Gt,ot`
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
      input.search {
        background: #374151;
        color: white;
        border: 1px solid #4b5563;
        padding: 0.3rem 0.6rem;
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
    `];an([zr("new-table-dialog")],qt.prototype,"dialog",2);an([zr("csv-paste-dialog")],qt.prototype,"csvPasteDialog",2);an([zr("plugin-manager-dialog")],qt.prototype,"pluginManagerDialog",2);an([ne()],qt.prototype,"footerButtons",2);an([ne()],qt.prototype,"headerButtons",2);an([ne()],qt.prototype,"searchQuery",2);an([ne()],qt.prototype,"searchOpen",2);qt=an([dt("app-shell")],qt);function cs(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([Se(),va(()=>Promise.resolve().then(()=>Ls),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});
//# sourceMappingURL=index-BadH9J1L.js.map
