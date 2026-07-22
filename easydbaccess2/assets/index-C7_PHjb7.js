(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const ya="modulepreload",wa=function(e){return"/easydbaccess2/"+e},Co={},va=function(n,r,o){let t=Promise.resolve();if(r&&r.length>0){let c=function(F){return Promise.all(F.map(A=>Promise.resolve(A).then(R=>({status:"fulfilled",value:R}),R=>({status:"rejected",reason:R}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),m=f?.nonce||f?.getAttribute("nonce");t=c(r.map(F=>{if(F=wa(F),F in Co)return;Co[F]=!0;const A=F.endsWith(".css"),R=A?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${F}"]${R}`))return;const T=document.createElement("link");if(T.rel=A?"stylesheet":ya,A||(T.as="script"),T.crossOrigin="",T.href=F,m&&T.setAttribute("nonce",m),document.head.appendChild(T),A)return new Promise((N,Q)=>{T.addEventListener("load",N),T.addEventListener("error",()=>Q(new Error(`Unable to preload CSS for ${F}`)))})}))}function a(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return t.then(c=>{for(const f of c||[])f.status==="rejected"&&a(f.reason);return n().catch(a)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _r=globalThis,Ri=_r.ShadowRoot&&(_r.ShadyCSS===void 0||_r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,zi=Symbol(),ko=new WeakMap;let fs=class{constructor(n,r,o){if(this._$cssResult$=!0,o!==zi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=n,this.t=r}get styleSheet(){let n=this.o;const r=this.t;if(Ri&&n===void 0){const o=r!==void 0&&r.length===1;o&&(n=ko.get(r)),n===void 0&&((this.o=n=new CSSStyleSheet).replaceSync(this.cssText),o&&ko.set(r,n))}return n}toString(){return this.cssText}};const xa=e=>new fs(typeof e=="string"?e:e+"",void 0,zi),ct=(e,...n)=>{const r=e.length===1?e[0]:n.reduce((o,t,a)=>o+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(t)+e[a+1],e[0]);return new fs(r,e,zi)},$a=(e,n)=>{if(Ri)e.adoptedStyleSheets=n.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of n){const o=document.createElement("style"),t=_r.litNonce;t!==void 0&&o.setAttribute("nonce",t),o.textContent=r.cssText,e.appendChild(o)}},So=Ri?e=>e:e=>e instanceof CSSStyleSheet?(n=>{let r="";for(const o of n.cssRules)r+=o.cssText;return xa(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ea,defineProperty:Ca,getOwnPropertyDescriptor:ka,getOwnPropertyNames:Sa,getOwnPropertySymbols:_a,getPrototypeOf:Pa}=Object,zr=globalThis,_o=zr.trustedTypes,Aa=_o?_o.emptyScript:"",ja=zr.reactiveElementPolyfillSupport,Vn=(e,n)=>e,Tr={toAttribute(e,n){switch(n){case Boolean:e=e?Aa:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,n){let r=e;switch(n){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ii=(e,n)=>!Ea(e,n),Po={attribute:!0,type:String,converter:Tr,reflect:!1,useDefault:!1,hasChanged:Ii};Symbol.metadata??=Symbol("metadata"),zr.litPropertyMetadata??=new WeakMap;let jn=class extends HTMLElement{static addInitializer(n){this._$Ei(),(this.l??=[]).push(n)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(n,r=Po){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(n)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(n,r),!r.noAccessor){const o=Symbol(),t=this.getPropertyDescriptor(n,o,r);t!==void 0&&Ca(this.prototype,n,t)}}static getPropertyDescriptor(n,r,o){const{get:t,set:a}=ka(this.prototype,n)??{get(){return this[r]},set(c){this[r]=c}};return{get:t,set(c){const f=t?.call(this);a?.call(this,c),this.requestUpdate(n,f,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(n){return this.elementProperties.get(n)??Po}static _$Ei(){if(this.hasOwnProperty(Vn("elementProperties")))return;const n=Pa(this);n.finalize(),n.l!==void 0&&(this.l=[...n.l]),this.elementProperties=new Map(n.elementProperties)}static finalize(){if(this.hasOwnProperty(Vn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Vn("properties"))){const r=this.properties,o=[...Sa(r),..._a(r)];for(const t of o)this.createProperty(t,r[t])}const n=this[Symbol.metadata];if(n!==null){const r=litPropertyMetadata.get(n);if(r!==void 0)for(const[o,t]of r)this.elementProperties.set(o,t)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const t=this._$Eu(r,o);t!==void 0&&this._$Eh.set(t,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(n){const r=[];if(Array.isArray(n)){const o=new Set(n.flat(1/0).reverse());for(const t of o)r.unshift(So(t))}else n!==void 0&&r.push(So(n));return r}static _$Eu(n,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof n=="string"?n.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(n=>n(this))}addController(n){(this._$EO??=new Set).add(n),this.renderRoot!==void 0&&this.isConnected&&n.hostConnected?.()}removeController(n){this._$EO?.delete(n)}_$E_(){const n=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(n.set(o,this[o]),delete this[o]);n.size>0&&(this._$Ep=n)}createRenderRoot(){const n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $a(n,this.constructor.elementStyles),n}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(n=>n.hostConnected?.())}enableUpdating(n){}disconnectedCallback(){this._$EO?.forEach(n=>n.hostDisconnected?.())}attributeChangedCallback(n,r,o){this._$AK(n,o)}_$ET(n,r){const o=this.constructor.elementProperties.get(n),t=this.constructor._$Eu(n,o);if(t!==void 0&&o.reflect===!0){const a=(o.converter?.toAttribute!==void 0?o.converter:Tr).toAttribute(r,o.type);this._$Em=n,a==null?this.removeAttribute(t):this.setAttribute(t,a),this._$Em=null}}_$AK(n,r){const o=this.constructor,t=o._$Eh.get(n);if(t!==void 0&&this._$Em!==t){const a=o.getPropertyOptions(t),c=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:Tr;this._$Em=t;const f=c.fromAttribute(r,a.type);this[t]=f??this._$Ej?.get(t)??f,this._$Em=null}}requestUpdate(n,r,o,t=!1,a){if(n!==void 0){const c=this.constructor;if(t===!1&&(a=this[n]),o??=c.getPropertyOptions(n),!((o.hasChanged??Ii)(a,r)||o.useDefault&&o.reflect&&a===this._$Ej?.get(n)&&!this.hasAttribute(c._$Eu(n,o))))return;this.C(n,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(n,r,{useDefault:o,reflect:t,wrapped:a},c){o&&!(this._$Ej??=new Map).has(n)&&(this._$Ej.set(n,c??r??this[n]),a!==!0||c!==void 0)||(this._$AL.has(n)||(this.hasUpdated||o||(r=void 0),this._$AL.set(n,r)),t===!0&&this._$Em!==n&&(this._$Eq??=new Set).add(n))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const n=this.scheduleUpdate();return n!=null&&await n,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,a]of this._$Ep)this[t]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[t,a]of o){const{wrapped:c}=a,f=this[t];c!==!0||this._$AL.has(t)||f===void 0||this.C(t,void 0,a,f)}}let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$EM()}catch(o){throw n=!1,this._$EM(),o}n&&this._$AE(r)}willUpdate(n){}_$AE(n){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(n)),this.updated(n)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(n){return!0}update(n){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(n){}firstUpdated(n){}};jn.elementStyles=[],jn.shadowRootOptions={mode:"open"},jn[Vn("elementProperties")]=new Map,jn[Vn("finalized")]=new Map,ja?.({ReactiveElement:jn}),(zr.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bi=globalThis,Ao=e=>e,Fr=Bi.trustedTypes,jo=Fr?Fr.createPolicy("lit-html",{createHTML:e=>e}):void 0,hs="$lit$",ln=`lit$${Math.random().toFixed(9).slice(2)}$`,ps="?"+ln,Ta=`<${ps}>`,wn=document,Yn=()=>wn.createComment(""),Xn=e=>e===null||typeof e!="object"&&typeof e!="function",Li=Array.isArray,Fa=e=>Li(e)||typeof e?.[Symbol.iterator]=="function",Ei=`[ 	
\f\r]`,Kn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,To=/-->/g,Fo=/>/g,gn=RegExp(`>|${Ei}(?:([^\\s"'>=/]+)(${Ei}*=${Ei}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Oo=/'/g,Do=/"/g,ms=/^(?:script|style|textarea|title)$/i,Oa=e=>(n,...r)=>({_$litType$:e,strings:n,values:r}),X=Oa(1),Fn=Symbol.for("lit-noChange"),He=Symbol.for("lit-nothing"),Ro=new WeakMap,yn=wn.createTreeWalker(wn,129);function gs(e,n){if(!Li(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return jo!==void 0?jo.createHTML(n):n}const Da=(e,n)=>{const r=e.length-1,o=[];let t,a=n===2?"<svg>":n===3?"<math>":"",c=Kn;for(let f=0;f<r;f++){const m=e[f];let F,A,R=-1,T=0;for(;T<m.length&&(c.lastIndex=T,A=c.exec(m),A!==null);)T=c.lastIndex,c===Kn?A[1]==="!--"?c=To:A[1]!==void 0?c=Fo:A[2]!==void 0?(ms.test(A[2])&&(t=RegExp("</"+A[2],"g")),c=gn):A[3]!==void 0&&(c=gn):c===gn?A[0]===">"?(c=t??Kn,R=-1):A[1]===void 0?R=-2:(R=c.lastIndex-A[2].length,F=A[1],c=A[3]===void 0?gn:A[3]==='"'?Do:Oo):c===Do||c===Oo?c=gn:c===To||c===Fo?c=Kn:(c=gn,t=void 0);const N=c===gn&&e[f+1].startsWith("/>")?" ":"";a+=c===Kn?m+Ta:R>=0?(o.push(F),m.slice(0,R)+hs+m.slice(R)+ln+N):m+ln+(R===-2?f:N)}return[gs(e,a+(e[r]||"<?>")+(n===2?"</svg>":n===3?"</math>":"")),o]};class Gn{constructor({strings:n,_$litType$:r},o){let t;this.parts=[];let a=0,c=0;const f=n.length-1,m=this.parts,[F,A]=Da(n,r);if(this.el=Gn.createElement(F,o),yn.currentNode=this.el.content,r===2||r===3){const R=this.el.content.firstChild;R.replaceWith(...R.childNodes)}for(;(t=yn.nextNode())!==null&&m.length<f;){if(t.nodeType===1){if(t.hasAttributes())for(const R of t.getAttributeNames())if(R.endsWith(hs)){const T=A[c++],N=t.getAttribute(R).split(ln),Q=/([.?@])?(.*)/.exec(T);m.push({type:1,index:a,name:Q[2],strings:N,ctor:Q[1]==="."?za:Q[1]==="?"?Ia:Q[1]==="@"?Ba:Ir}),t.removeAttribute(R)}else R.startsWith(ln)&&(m.push({type:6,index:a}),t.removeAttribute(R));if(ms.test(t.tagName)){const R=t.textContent.split(ln),T=R.length-1;if(T>0){t.textContent=Fr?Fr.emptyScript:"";for(let N=0;N<T;N++)t.append(R[N],Yn()),yn.nextNode(),m.push({type:2,index:++a});t.append(R[T],Yn())}}}else if(t.nodeType===8)if(t.data===ps)m.push({type:2,index:a});else{let R=-1;for(;(R=t.data.indexOf(ln,R+1))!==-1;)m.push({type:7,index:a}),R+=ln.length-1}a++}}static createElement(n,r){const o=wn.createElement("template");return o.innerHTML=n,o}}function On(e,n,r=e,o){if(n===Fn)return n;let t=o!==void 0?r._$Co?.[o]:r._$Cl;const a=Xn(n)?void 0:n._$litDirective$;return t?.constructor!==a&&(t?._$AO?.(!1),a===void 0?t=void 0:(t=new a(e),t._$AT(e,r,o)),o!==void 0?(r._$Co??=[])[o]=t:r._$Cl=t),t!==void 0&&(n=On(e,t._$AS(e,n.values),t,o)),n}class Ra{constructor(n,r){this._$AV=[],this._$AN=void 0,this._$AD=n,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(n){const{el:{content:r},parts:o}=this._$AD,t=(n?.creationScope??wn).importNode(r,!0);yn.currentNode=t;let a=yn.nextNode(),c=0,f=0,m=o[0];for(;m!==void 0;){if(c===m.index){let F;m.type===2?F=new Jn(a,a.nextSibling,this,n):m.type===1?F=new m.ctor(a,m.name,m.strings,this,n):m.type===6&&(F=new La(a,this,n)),this._$AV.push(F),m=o[++f]}c!==m?.index&&(a=yn.nextNode(),c++)}return yn.currentNode=wn,t}p(n){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(n,o,r),r+=o.strings.length-2):o._$AI(n[r])),r++}}class Jn{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(n,r,o,t){this.type=2,this._$AH=He,this._$AN=void 0,this._$AA=n,this._$AB=r,this._$AM=o,this.options=t,this._$Cv=t?.isConnected??!0}get parentNode(){let n=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&n?.nodeType===11&&(n=r.parentNode),n}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(n,r=this){n=On(this,n,r),Xn(n)?n===He||n==null||n===""?(this._$AH!==He&&this._$AR(),this._$AH=He):n!==this._$AH&&n!==Fn&&this._(n):n._$litType$!==void 0?this.$(n):n.nodeType!==void 0?this.T(n):Fa(n)?this.k(n):this._(n)}O(n){return this._$AA.parentNode.insertBefore(n,this._$AB)}T(n){this._$AH!==n&&(this._$AR(),this._$AH=this.O(n))}_(n){this._$AH!==He&&Xn(this._$AH)?this._$AA.nextSibling.data=n:this.T(wn.createTextNode(n)),this._$AH=n}$(n){const{values:r,_$litType$:o}=n,t=typeof o=="number"?this._$AC(n):(o.el===void 0&&(o.el=Gn.createElement(gs(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===t)this._$AH.p(r);else{const a=new Ra(t,this),c=a.u(this.options);a.p(r),this.T(c),this._$AH=a}}_$AC(n){let r=Ro.get(n.strings);return r===void 0&&Ro.set(n.strings,r=new Gn(n)),r}k(n){Li(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,t=0;for(const a of n)t===r.length?r.push(o=new Jn(this.O(Yn()),this.O(Yn()),this,this.options)):o=r[t],o._$AI(a),t++;t<r.length&&(this._$AR(o&&o._$AB.nextSibling,t),r.length=t)}_$AR(n=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);n!==this._$AB;){const o=Ao(n).nextSibling;Ao(n).remove(),n=o}}setConnected(n){this._$AM===void 0&&(this._$Cv=n,this._$AP?.(n))}}class Ir{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(n,r,o,t,a){this.type=1,this._$AH=He,this._$AN=void 0,this.element=n,this.name=r,this._$AM=t,this.options=a,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=He}_$AI(n,r=this,o,t){const a=this.strings;let c=!1;if(a===void 0)n=On(this,n,r,0),c=!Xn(n)||n!==this._$AH&&n!==Fn,c&&(this._$AH=n);else{const f=n;let m,F;for(n=a[0],m=0;m<a.length-1;m++)F=On(this,f[o+m],r,m),F===Fn&&(F=this._$AH[m]),c||=!Xn(F)||F!==this._$AH[m],F===He?n=He:n!==He&&(n+=(F??"")+a[m+1]),this._$AH[m]=F}c&&!t&&this.j(n)}j(n){n===He?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,n??"")}}class za extends Ir{constructor(){super(...arguments),this.type=3}j(n){this.element[this.name]=n===He?void 0:n}}class Ia extends Ir{constructor(){super(...arguments),this.type=4}j(n){this.element.toggleAttribute(this.name,!!n&&n!==He)}}class Ba extends Ir{constructor(n,r,o,t,a){super(n,r,o,t,a),this.type=5}_$AI(n,r=this){if((n=On(this,n,r,0)??He)===Fn)return;const o=this._$AH,t=n===He&&o!==He||n.capture!==o.capture||n.once!==o.once||n.passive!==o.passive,a=n!==He&&(o===He||t);t&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,n),this._$AH=n}handleEvent(n){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,n):this._$AH.handleEvent(n)}}class La{constructor(n,r,o){this.element=n,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(n){On(this,n)}}const Ma=Bi.litHtmlPolyfillSupport;Ma?.(Gn,Jn),(Bi.litHtmlVersions??=[]).push("3.3.3");const Na=(e,n,r)=>{const o=r?.renderBefore??n;let t=o._$litPart$;if(t===void 0){const a=r?.renderBefore??null;o._$litPart$=t=new Jn(n.insertBefore(Yn(),a),a,void 0,r??{})}return t._$AI(e),t};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mi=globalThis;class tt extends jn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const n=super.createRenderRoot();return this.renderOptions.renderBefore??=n.firstChild,n}update(n){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(n),this._$Do=Na(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Fn}}tt._$litElement$=!0,tt.finalized=!0,Mi.litElementHydrateSupport?.({LitElement:tt});const qa=Mi.litElementPolyfillSupport;qa?.({LitElement:tt});(Mi.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=e=>(n,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,n)}):customElements.define(e,n)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ua={attribute:!0,type:String,converter:Tr,reflect:!1,hasChanged:Ii},Wa=(e=Ua,n,r)=>{const{kind:o,metadata:t}=r;let a=globalThis.litPropertyMetadata.get(t);if(a===void 0&&globalThis.litPropertyMetadata.set(t,a=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),o==="accessor"){const{name:c}=r;return{set(f){const m=n.get.call(this);n.set.call(this,f),this.requestUpdate(c,m,e,!0,f)},init(f){return f!==void 0&&this.C(c,void 0,e,f),f}}}if(o==="setter"){const{name:c}=r;return function(f){const m=this[c];n.call(this,f),this.requestUpdate(c,m,e,!0,f)}}throw Error("Unsupported decorator location: "+o)};function Qt(e){return(n,r)=>typeof r=="object"?Wa(e,n,r):((o,t,a)=>{const c=t.hasOwnProperty(a);return t.constructor.createProperty(a,o),c?Object.getOwnPropertyDescriptor(t,a):void 0})(e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ne(e){return Qt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ha=(e,n,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof n!="object"&&Object.defineProperty(e,n,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Br(e,n){return(r,o,t)=>{const a=c=>c.renderRoot?.querySelector(e)??null;return Ha(r,o,{get(){return a(this)}})}}var Ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Va(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pr={exports:{}},Ya=Pr.exports,zo;function Xa(){return zo||(zo=1,(function(e,n){(function(r,o){e.exports=o()})(Ya,function(){var r=function(i,s){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,u){l.__proto__=u}||function(l,u){for(var d in u)Object.prototype.hasOwnProperty.call(u,d)&&(l[d]=u[d])})(i,s)},o=function(){return(o=Object.assign||function(i){for(var s,l=1,u=arguments.length;l<u;l++)for(var d in s=arguments[l])Object.prototype.hasOwnProperty.call(s,d)&&(i[d]=s[d]);return i}).apply(this,arguments)};function t(i,s,l){for(var u,d=0,h=s.length;d<h;d++)!u&&d in s||((u=u||Array.prototype.slice.call(s,0,d))[d]=s[d]);return i.concat(u||Array.prototype.slice.call(s))}var a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Ka,c=Object.keys,f=Array.isArray;function m(i,s){return typeof s!="object"||c(s).forEach(function(l){i[l]=s[l]}),i}typeof Promise>"u"||a.Promise||(a.Promise=Promise);var F=Object.getPrototypeOf,A={}.hasOwnProperty;function R(i,s){return A.call(i,s)}function T(i,s){typeof s=="function"&&(s=s(F(i))),(typeof Reflect>"u"?c:Reflect.ownKeys)(s).forEach(function(l){Q(i,l,s[l])})}var N=Object.defineProperty;function Q(i,s,l,u){N(i,s,m(l&&R(l,"get")&&typeof l.get=="function"?{get:l.get,set:l.set,configurable:!0}:{value:l,configurable:!0,writable:!0},u))}function oe(i){return{from:function(s){return i.prototype=Object.create(s.prototype),Q(i.prototype,"constructor",i),{extend:T.bind(null,i.prototype)}}}}var Ke=Object.getOwnPropertyDescriptor,ke=[].slice;function he(i,s,l){return ke.call(i,s,l)}function _e(i,s){return s(i)}function Wt(i){if(!i)throw new Error("Assertion Failed")}function De(i){a.setImmediate?setImmediate(i):setTimeout(i,0)}function nt(i,s){if(typeof s=="string"&&R(i,s))return i[s];if(!s)return i;if(typeof s!="string"){for(var l=[],u=0,d=s.length;u<d;++u){var h=nt(i,s[u]);l.push(h)}return l}var g=s.indexOf(".");if(g!==-1){var y=i[s.substr(0,g)];return y==null?void 0:nt(y,s.substr(g+1))}}function Ye(i,s,l){if(i&&s!==void 0&&!("isFrozen"in Object&&Object.isFrozen(i)))if(typeof s!="string"&&"length"in s){Wt(typeof l!="string"&&"length"in l);for(var u=0,d=s.length;u<d;++u)Ye(i,s[u],l[u])}else{var h,g,y=s.indexOf(".");y!==-1?(h=s.substr(0,y),(g=s.substr(y+1))===""?l===void 0?f(i)&&!isNaN(parseInt(h))?i.splice(h,1):delete i[h]:i[h]=l:Ye(y=!(y=i[h])||!R(i,h)?i[h]={}:y,g,l)):l===void 0?f(i)&&!isNaN(parseInt(s))?i.splice(s,1):delete i[s]:i[s]=l}}function Ht(i){var s,l={};for(s in i)R(i,s)&&(l[s]=i[s]);return l}var er=[].concat;function Cn(i){return er.apply([],i)}var Yt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Cn([8,16,32,64].map(function(i){return["Int","Uint","Float"].map(function(s){return s+i+"Array"})}))).filter(function(i){return a[i]}),p=new Set(Yt.map(function(i){return a[i]})),v=null;function D(i){return v=new WeakMap,i=(function s(l){if(!l||typeof l!="object")return l;var u=v.get(l);if(u)return u;if(f(l)){u=[],v.set(l,u);for(var d=0,h=l.length;d<h;++d)u.push(s(l[d]))}else if(p.has(l.constructor))u=l;else{var g,y=F(l);for(g in u=y===Object.prototype?{}:Object.create(y),v.set(l,u),l)R(l,g)&&(u[g]=s(l[g]))}return u})(i),v=null,i}var b={}.toString;function x(i){return b.call(i).slice(8,-1)}var ie=typeof Symbol<"u"?Symbol.iterator:"@@iterator",le=typeof ie=="symbol"?function(i){var s;return i!=null&&(s=i[ie])&&s.apply(i)}:function(){return null};function M(i,s){return s=i.indexOf(s),0<=s&&i.splice(s,1),0<=s}var W={};function Me(i){var s,l,u,d;if(arguments.length===1){if(f(i))return i.slice();if(this===W&&typeof i=="string")return[i];if(d=le(i)){for(l=[];!(u=d.next()).done;)l.push(u.value);return l}if(i==null)return[i];if(typeof(s=i.length)!="number")return[i];for(l=new Array(s);s--;)l[s]=i[s];return l}for(s=arguments.length,l=new Array(s);s--;)l[s]=arguments[s];return l}var et=typeof Symbol<"u"?function(i){return i[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},ye=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],_t=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(ye),Bt={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Re(i,s){this.name=i,this.message=s}function je(i,s){return i+". Errors: "+Object.keys(s).map(function(l){return s[l].toString()}).filter(function(l,u,d){return d.indexOf(l)===u}).join(`
`)}function ge(i,s,l,u){this.failures=s,this.failedKeys=u,this.successCount=l,this.message=je(i,s)}function $e(i,s){this.name="BulkError",this.failures=Object.keys(s).map(function(l){return s[l]}),this.failuresByPos=s,this.message=je(i,this.failures)}oe(Re).from(Error).extend({toString:function(){return this.name+": "+this.message}}),oe(ge).from(Re),oe($e).from(Re);var Ne=_t.reduce(function(i,s){return i[s]=s+"Error",i},{}),ve=Re,J=_t.reduce(function(i,s){var l=s+"Error";function u(d,h){this.name=l,d?typeof d=="string"?(this.message="".concat(d).concat(h?`
 `+h:""),this.inner=h||null):typeof d=="object"&&(this.message="".concat(d.name," ").concat(d.message),this.inner=d):(this.message=Bt[s]||l,this.inner=null)}return oe(u).from(ve),i[s]=u,i},{});J.Syntax=SyntaxError,J.Type=TypeError,J.Range=RangeError;var qe=ye.reduce(function(i,s){return i[s+"Error"]=J[s],i},{}),Te=_t.reduce(function(i,s){return["Syntax","Type","Range"].indexOf(s)===-1&&(i[s+"Error"]=J[s]),i},{});function ae(){}function fe(i){return i}function vt(i,s){return i==null||i===fe?s:function(l){return s(i(l))}}function re(i,s){return function(){i.apply(this,arguments),s.apply(this,arguments)}}function Ue(i,s){return i===ae?s:function(){var l=i.apply(this,arguments);l!==void 0&&(arguments[0]=l);var u=this.onsuccess,d=this.onerror;this.onsuccess=null,this.onerror=null;var h=s.apply(this,arguments);return u&&(this.onsuccess=this.onsuccess?re(u,this.onsuccess):u),d&&(this.onerror=this.onerror?re(d,this.onerror):d),h!==void 0?h:l}}function Zt(i,s){return i===ae?s:function(){i.apply(this,arguments);var l=this.onsuccess,u=this.onerror;this.onsuccess=this.onerror=null,s.apply(this,arguments),l&&(this.onsuccess=this.onsuccess?re(l,this.onsuccess):l),u&&(this.onerror=this.onerror?re(u,this.onerror):u)}}function Ft(i,s){return i===ae?s:function(l){var u=i.apply(this,arguments);m(l,u);var d=this.onsuccess,h=this.onerror;return this.onsuccess=null,this.onerror=null,l=s.apply(this,arguments),d&&(this.onsuccess=this.onsuccess?re(d,this.onsuccess):d),h&&(this.onerror=this.onerror?re(h,this.onerror):h),u===void 0?l===void 0?void 0:l:m(u,l)}}function Ve(i,s){return i===ae?s:function(){return s.apply(this,arguments)!==!1&&i.apply(this,arguments)}}function xt(i,s){return i===ae?s:function(){var l=i.apply(this,arguments);if(l&&typeof l.then=="function"){for(var u=this,d=arguments.length,h=new Array(d);d--;)h[d]=arguments[d];return l.then(function(){return s.apply(u,h)})}return s.apply(this,arguments)}}Te.ModifyError=ge,Te.DexieError=Re,Te.BulkError=$e;var Se=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function ze(i){Se=i}var gt={},Xe=100,Yt=typeof Promise>"u"?[]:(function(){var i=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[i,F(i),i];var s=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[s,F(s),i]})(),ye=Yt[0],_t=Yt[1],Yt=Yt[2],_t=_t&&_t.then,be=ye&&ye.constructor,$t=!!Yt,Ie=function(i,s){Qe.push([i,s]),rt&&(queueMicrotask(ce),rt=!1)},ut=!0,rt=!0,Ge=[],Fe=[],se=fe,We={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:ae,pgp:!1,env:{},finalize:ae},K=We,Qe=[],ot=0,yt=[];function V(i){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var s=this._PSD=K;if(typeof i!="function"){if(i!==gt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&it(this,this._value))}this._state=null,this._value=null,++s.ref,(function l(u,d){try{d(function(h){if(u._state===null){if(h===u)throw new TypeError("A promise cannot be resolved with itself.");var g=u._lib&&Pe();h&&typeof h.then=="function"?l(u,function(y,$){h instanceof V?h._then(y,$):h.then(y,$)}):(u._state=!0,u._value=h,en(u)),g&&Be()}},it.bind(null,u))}catch(h){it(u,h)}})(this,i)}var Lt={get:function(){var i=K,s=rr;function l(u,d){var h=this,g=!i.global&&(i!==K||s!==rr),y=g&&!nn(),$=new V(function(C,_){ee(h,new Kt(Xi(u,i,g,y),Xi(d,i,g,y),C,_,i))});return this._consoleTask&&($._consoleTask=this._consoleTask),$}return l.prototype=gt,l},set:function(i){Q(this,"then",i&&i.prototype===gt?Lt:{get:function(){return i},set:Lt.set})}};function Kt(i,s,l,u,d){this.onFulfilled=typeof i=="function"?i:null,this.onRejected=typeof s=="function"?s:null,this.resolve=l,this.reject=u,this.psd=d}function it(i,s){var l,u;Fe.push(s),i._state===null&&(l=i._lib&&Pe(),s=se(s),i._state=!1,i._value=s,u=i,Ge.some(function(d){return d._value===u._value})||Ge.push(u),en(i),l&&Be())}function en(i){var s=i._listeners;i._listeners=[];for(var l=0,u=s.length;l<u;++l)ee(i,s[l]);var d=i._PSD;--d.ref||d.finalize(),ot===0&&(++ot,Ie(function(){--ot==0&&Ee()},[]))}function ee(i,s){if(i._state!==null){var l=i._state?s.onFulfilled:s.onRejected;if(l===null)return(i._state?s.resolve:s.reject)(i._value);++s.psd.ref,++ot,Ie(xe,[l,i,s])}else i._listeners.push(s)}function xe(i,s,l){try{var u,d=s._value;!s._state&&Fe.length&&(Fe=[]),u=Se&&s._consoleTask?s._consoleTask.run(function(){return i(d)}):i(d),s._state||Fe.indexOf(d)!==-1||(function(h){for(var g=Ge.length;g;)if(Ge[--g]._value===h._value)return Ge.splice(g,1)})(s),l.resolve(u)}catch(h){l.reject(h)}finally{--ot==0&&Ee(),--l.psd.ref||l.psd.finalize()}}function ce(){un(We,function(){Pe()&&Be()})}function Pe(){var i=ut;return rt=ut=!1,i}function Be(){var i,s,l;do for(;0<Qe.length;)for(i=Qe,Qe=[],l=i.length,s=0;s<l;++s){var u=i[s];u[0].apply(null,u[1])}while(0<Qe.length);rt=ut=!0}function Ee(){var i=Ge;Ge=[],i.forEach(function(u){u._PSD.onunhandled.call(null,u._value,u)});for(var s=yt.slice(0),l=s.length;l;)s[--l]()}function Ot(i){return new V(gt,!1,i)}function Oe(i,s){var l=K;return function(){var u=Pe(),d=K;try{return rn(l,!0),i.apply(this,arguments)}catch(h){s&&s(h)}finally{rn(d,!1),u&&Be()}}}T(V.prototype,{then:Lt,_then:function(i,s){ee(this,new Kt(null,null,i,s,K))},catch:function(i){if(arguments.length===1)return this.then(null,i);var s=i,l=arguments[1];return typeof s=="function"?this.then(null,function(u){return(u instanceof s?l:Ot)(u)}):this.then(null,function(u){return(u&&u.name===s?l:Ot)(u)})},finally:function(i){return this.then(function(s){return V.resolve(i()).then(function(){return s})},function(s){return V.resolve(i()).then(function(){return Ot(s)})})},timeout:function(i,s){var l=this;return i<1/0?new V(function(u,d){var h=setTimeout(function(){return d(new J.Timeout(s))},i);l.then(u,d).finally(clearTimeout.bind(null,h))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&Q(V.prototype,Symbol.toStringTag,"Dexie.Promise"),We.env=Yi(),T(V,{all:function(){var i=Me.apply(null,arguments).map(ir);return new V(function(s,l){i.length===0&&s([]);var u=i.length;i.forEach(function(d,h){return V.resolve(d).then(function(g){i[h]=g,--u||s(i)},l)})})},resolve:function(i){return i instanceof V?i:i&&typeof i.then=="function"?new V(function(s,l){i.then(s,l)}):new V(gt,!0,i)},reject:Ot,race:function(){var i=Me.apply(null,arguments).map(ir);return new V(function(s,l){i.map(function(u){return V.resolve(u).then(s,l)})})},PSD:{get:function(){return K},set:function(i){return K=i}},totalEchoes:{get:function(){return rr}},newPSD:tn,usePSD:un,scheduler:{get:function(){return Ie},set:function(i){Ie=i}},rejectionMapper:{get:function(){return se},set:function(i){se=i}},follow:function(i,s){return new V(function(l,u){return tn(function(d,h){var g=K;g.unhandleds=[],g.onunhandled=h,g.finalize=re(function(){var y,$=this;y=function(){$.unhandleds.length===0?d():h($.unhandleds[0])},yt.push(function C(){y(),yt.splice(yt.indexOf(C),1)}),++ot,Ie(function(){--ot==0&&Ee()},[])},g.finalize),i()},s,l,u)})}}),be&&(be.allSettled&&Q(V,"allSettled",function(){var i=Me.apply(null,arguments).map(ir);return new V(function(s){i.length===0&&s([]);var l=i.length,u=new Array(l);i.forEach(function(d,h){return V.resolve(d).then(function(g){return u[h]={status:"fulfilled",value:g}},function(g){return u[h]={status:"rejected",reason:g}}).then(function(){return--l||s(u)})})})}),be.any&&typeof AggregateError<"u"&&Q(V,"any",function(){var i=Me.apply(null,arguments).map(ir);return new V(function(s,l){i.length===0&&l(new AggregateError([]));var u=i.length,d=new Array(u);i.forEach(function(h,g){return V.resolve(h).then(function(y){return s(y)},function(y){d[g]=y,--u||l(new AggregateError(d))})})})}),be.withResolvers&&(V.withResolvers=be.withResolvers));var st={awaits:0,echoes:0,id:0},Xs=0,tr=[],nr=0,rr=0,Gs=0;function tn(i,s,l,u){var d=K,h=Object.create(d);return h.parent=d,h.ref=0,h.global=!1,h.id=++Gs,We.env,h.env=$t?{Promise:V,PromiseProp:{value:V,configurable:!0,writable:!0},all:V.all,race:V.race,allSettled:V.allSettled,any:V.any,resolve:V.resolve,reject:V.reject}:{},s&&m(h,s),++d.ref,h.finalize=function(){--this.parent.ref||this.parent.finalize()},u=un(h,i,l,u),h.ref===0&&h.finalize(),u}function kn(){return st.id||(st.id=++Xs),++st.awaits,st.echoes+=Xe,st.id}function nn(){return!!st.awaits&&(--st.awaits==0&&(st.id=0),st.echoes=st.awaits*Xe,!0)}function ir(i){return st.echoes&&i&&i.constructor===be?(kn(),i.then(function(s){return nn(),s},function(s){return nn(),Je(s)})):i}function Qs(){var i=tr[tr.length-1];tr.pop(),rn(i,!1)}function rn(i,s){var l,u=K;(s?!st.echoes||nr++&&i===K:!nr||--nr&&i===K)||queueMicrotask(s?function(d){++rr,st.echoes&&--st.echoes!=0||(st.echoes=st.awaits=st.id=0),tr.push(K),rn(d,!0)}.bind(null,i):Qs),i!==K&&(K=i,u===We&&(We.env=Yi()),$t&&(l=We.env.Promise,s=i.env,(u.global||i.global)&&(Object.defineProperty(a,"Promise",s.PromiseProp),l.all=s.all,l.race=s.race,l.resolve=s.resolve,l.reject=s.reject,s.allSettled&&(l.allSettled=s.allSettled),s.any&&(l.any=s.any))))}function Yi(){var i=a.Promise;return $t?{Promise:i,PromiseProp:Object.getOwnPropertyDescriptor(a,"Promise"),all:i.all,race:i.race,allSettled:i.allSettled,any:i.any,resolve:i.resolve,reject:i.reject}:{}}function un(i,s,l,u,d){var h=K;try{return rn(i,!0),s(l,u,d)}finally{rn(h,!1)}}function Xi(i,s,l,u){return typeof i!="function"?i:function(){var d=K;l&&kn(),rn(s,!0);try{return i.apply(this,arguments)}finally{rn(d,!1),u&&queueMicrotask(nn)}}}function Xr(i){Promise===be&&st.echoes===0?nr===0?i():enqueueNativeMicroTask(i):setTimeout(i,0)}(""+_t).indexOf("[native code]")===-1&&(kn=nn=ae);var Je=V.reject,dn="￿",Vt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Gi="String expected.",Sn=[],or="__dbnames",Gr="readonly",Qr="readwrite";function fn(i,s){return i?s?function(){return i.apply(this,arguments)&&s.apply(this,arguments)}:i:s}var Qi={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function sr(i){return typeof i!="string"||/\./.test(i)?function(s){return s}:function(s){return s[i]===void 0&&i in s&&delete(s=D(s))[i],s}}function Ji(){throw J.Type()}function we(i,s){try{var l=Zi(i),u=Zi(s);if(l!==u)return l==="Array"?1:u==="Array"?-1:l==="binary"?1:u==="binary"?-1:l==="string"?1:u==="string"?-1:l==="Date"?1:u!=="Date"?NaN:-1;switch(l){case"number":case"Date":case"string":return s<i?1:i<s?-1:0;case"binary":return(function(d,h){for(var g=d.length,y=h.length,$=g<y?g:y,C=0;C<$;++C)if(d[C]!==h[C])return d[C]<h[C]?-1:1;return g===y?0:g<y?-1:1})(eo(i),eo(s));case"Array":return(function(d,h){for(var g=d.length,y=h.length,$=g<y?g:y,C=0;C<$;++C){var _=we(d[C],h[C]);if(_!==0)return _}return g===y?0:g<y?-1:1})(i,s)}}catch{}return NaN}function Zi(i){var s=typeof i;return s!="object"?s:ArrayBuffer.isView(i)?"binary":(i=x(i),i==="ArrayBuffer"?"binary":i)}function eo(i){return i instanceof Uint8Array?i:ArrayBuffer.isView(i)?new Uint8Array(i.buffer,i.byteOffset,i.byteLength):new Uint8Array(i)}var to=(Le.prototype._trans=function(i,s,l){var u=this._tx||K.trans,d=this.name,h=Se&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(i==="readonly"?"read":"write"," ").concat(this.name));function g(C,_,w){if(!w.schema[d])throw new J.NotFound("Table "+d+" not part of transaction");return s(w.idbtrans,w)}var y=Pe();try{var $=u&&u.db._novip===this.db._novip?u===K.trans?u._promise(i,g,l):tn(function(){return u._promise(i,g,l)},{trans:u,transless:K.transless||K}):(function C(_,w,j,E){if(_.idbdb&&(_._state.openComplete||K.letThrough||_._vip)){var S=_._createTransaction(w,j,_._dbSchema);try{S.create(),_._state.PR1398_maxLoop=3}catch(P){return P.name===Ne.InvalidState&&_.isOpen()&&0<--_._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),_.close({disableAutoOpen:!1}),_.open().then(function(){return C(_,w,j,E)})):Je(P)}return S._promise(w,function(P,k){return tn(function(){return K.trans=S,E(P,k,S)})}).then(function(P){if(w==="readwrite")try{S.idbtrans.commit()}catch{}return w==="readonly"?P:S._completion.then(function(){return P})})}if(_._state.openComplete)return Je(new J.DatabaseClosed(_._state.dbOpenError));if(!_._state.isBeingOpened){if(!_._state.autoOpen)return Je(new J.DatabaseClosed);_.open().catch(ae)}return _._state.dbReadyPromise.then(function(){return C(_,w,j,E)})})(this.db,i,[this.name],g);return h&&($._consoleTask=h,$=$.catch(function(C){return console.trace(C),Je(C)})),$}finally{y&&Be()}},Le.prototype.get=function(i,s){var l=this;return i&&i.constructor===Object?this.where(i).first(s):i==null?Je(new J.Type("Invalid argument to Table.get()")):this._trans("readonly",function(u){return l.core.get({trans:u,key:i}).then(function(d){return l.hook.reading.fire(d)})}).then(s)},Le.prototype.where=function(i){if(typeof i=="string")return new this.db.WhereClause(this,i);if(f(i))return new this.db.WhereClause(this,"[".concat(i.join("+"),"]"));var s=c(i);if(s.length===1)return this.where(s[0]).equals(i[s[0]]);var l=this.schema.indexes.concat(this.schema.primKey).filter(function(y){if(y.compound&&s.every(function(C){return 0<=y.keyPath.indexOf(C)})){for(var $=0;$<s.length;++$)if(s.indexOf(y.keyPath[$])===-1)return!1;return!0}return!1}).sort(function(y,$){return y.keyPath.length-$.keyPath.length})[0];if(l&&this.db._maxKey!==dn){var h=l.keyPath.slice(0,s.length);return this.where(h).equals(h.map(function($){return i[$]}))}!l&&Se&&console.warn("The query ".concat(JSON.stringify(i)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(s.join("+"),"]"));var u=this.schema.idxByName;function d(y,$){return we(y,$)===0}var g=s.reduce(function(w,$){var C=w[0],_=w[1],w=u[$],j=i[$];return[C||w,C||!w?fn(_,w&&w.multi?function(E){return E=nt(E,$),f(E)&&E.some(function(S){return d(j,S)})}:function(E){return d(j,nt(E,$))}):_]},[null,null]),h=g[0],g=g[1];return h?this.where(h.name).equals(i[h.keyPath]).filter(g):l?this.filter(g):this.where(s).equals("")},Le.prototype.filter=function(i){return this.toCollection().and(i)},Le.prototype.count=function(i){return this.toCollection().count(i)},Le.prototype.offset=function(i){return this.toCollection().offset(i)},Le.prototype.limit=function(i){return this.toCollection().limit(i)},Le.prototype.each=function(i){return this.toCollection().each(i)},Le.prototype.toArray=function(i){return this.toCollection().toArray(i)},Le.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Le.prototype.orderBy=function(i){return new this.db.Collection(new this.db.WhereClause(this,f(i)?"[".concat(i.join("+"),"]"):i))},Le.prototype.reverse=function(){return this.toCollection().reverse()},Le.prototype.mapToClass=function(i){var s,l=this.db,u=this.name;function d(){return s!==null&&s.apply(this,arguments)||this}(this.schema.mappedClass=i).prototype instanceof Ji&&((function($,C){if(typeof C!="function"&&C!==null)throw new TypeError("Class extends value "+String(C)+" is not a constructor or null");function _(){this.constructor=$}r($,C),$.prototype=C===null?Object.create(C):(_.prototype=C.prototype,new _)})(d,s=i),Object.defineProperty(d.prototype,"db",{get:function(){return l},enumerable:!1,configurable:!0}),d.prototype.table=function(){return u},i=d);for(var h=new Set,g=i.prototype;g;g=F(g))Object.getOwnPropertyNames(g).forEach(function($){return h.add($)});function y($){if(!$)return $;var C,_=Object.create(i.prototype);for(C in $)if(!h.has(C))try{_[C]=$[C]}catch{}return _}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=y,this.hook("reading",y),i},Le.prototype.defineClass=function(){return this.mapToClass(function(i){m(this,i)})},Le.prototype.add=function(i,s){var l=this,u=this.schema.primKey,d=u.auto,h=u.keyPath,g=i;return h&&d&&(g=sr(h)(i)),this._trans("readwrite",function(y){return l.core.mutate({trans:y,type:"add",keys:s!=null?[s]:null,values:[g]})}).then(function(y){return y.numFailures?V.reject(y.failures[0]):y.lastResult}).then(function(y){if(h)try{Ye(i,h,y)}catch{}return y})},Le.prototype.update=function(i,s){return typeof i!="object"||f(i)?this.where(":id").equals(i).modify(s):(i=nt(i,this.schema.primKey.keyPath),i===void 0?Je(new J.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(i).modify(s))},Le.prototype.put=function(i,s){var l=this,u=this.schema.primKey,d=u.auto,h=u.keyPath,g=i;return h&&d&&(g=sr(h)(i)),this._trans("readwrite",function(y){return l.core.mutate({trans:y,type:"put",values:[g],keys:s!=null?[s]:null})}).then(function(y){return y.numFailures?V.reject(y.failures[0]):y.lastResult}).then(function(y){if(h)try{Ye(i,h,y)}catch{}return y})},Le.prototype.delete=function(i){var s=this;return this._trans("readwrite",function(l){return s.core.mutate({trans:l,type:"delete",keys:[i]})}).then(function(l){return l.numFailures?V.reject(l.failures[0]):void 0})},Le.prototype.clear=function(){var i=this;return this._trans("readwrite",function(s){return i.core.mutate({trans:s,type:"deleteRange",range:Qi})}).then(function(s){return s.numFailures?V.reject(s.failures[0]):void 0})},Le.prototype.bulkGet=function(i){var s=this;return this._trans("readonly",function(l){return s.core.getMany({keys:i,trans:l}).then(function(u){return u.map(function(d){return s.hook.reading.fire(d)})})})},Le.prototype.bulkAdd=function(i,s,l){var u=this,d=Array.isArray(s)?s:void 0,h=(l=l||(d?void 0:s))?l.allKeys:void 0;return this._trans("readwrite",function(g){var C=u.schema.primKey,y=C.auto,C=C.keyPath;if(C&&d)throw new J.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(d&&d.length!==i.length)throw new J.InvalidArgument("Arguments objects and keys must have the same length");var $=i.length,C=C&&y?i.map(sr(C)):i;return u.core.mutate({trans:g,type:"add",keys:d,values:C,wantResults:h}).then(function(S){var w=S.numFailures,j=S.results,E=S.lastResult,S=S.failures;if(w===0)return h?j:E;throw new $e("".concat(u.name,".bulkAdd(): ").concat(w," of ").concat($," operations failed"),S)})})},Le.prototype.bulkPut=function(i,s,l){var u=this,d=Array.isArray(s)?s:void 0,h=(l=l||(d?void 0:s))?l.allKeys:void 0;return this._trans("readwrite",function(g){var C=u.schema.primKey,y=C.auto,C=C.keyPath;if(C&&d)throw new J.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(d&&d.length!==i.length)throw new J.InvalidArgument("Arguments objects and keys must have the same length");var $=i.length,C=C&&y?i.map(sr(C)):i;return u.core.mutate({trans:g,type:"put",keys:d,values:C,wantResults:h}).then(function(S){var w=S.numFailures,j=S.results,E=S.lastResult,S=S.failures;if(w===0)return h?j:E;throw new $e("".concat(u.name,".bulkPut(): ").concat(w," of ").concat($," operations failed"),S)})})},Le.prototype.bulkUpdate=function(i){var s=this,l=this.core,u=i.map(function(g){return g.key}),d=i.map(function(g){return g.changes}),h=[];return this._trans("readwrite",function(g){return l.getMany({trans:g,keys:u,cache:"clone"}).then(function(y){var $=[],C=[];i.forEach(function(w,j){var E=w.key,S=w.changes,P=y[j];if(P){for(var k=0,z=Object.keys(S);k<z.length;k++){var I=z[k],B=S[I];if(I===s.schema.primKey.keyPath){if(we(B,E)!==0)throw new J.Constraint("Cannot update primary key in bulkUpdate()")}else Ye(P,I,B)}h.push(j),$.push(E),C.push(P)}});var _=$.length;return l.mutate({trans:g,type:"put",keys:$,values:C,updates:{keys:u,changeSpecs:d}}).then(function(w){var j=w.numFailures,E=w.failures;if(j===0)return _;for(var S=0,P=Object.keys(E);S<P.length;S++){var k,z=P[S],I=h[Number(z)];I!=null&&(k=E[z],delete E[z],E[I]=k)}throw new $e("".concat(s.name,".bulkUpdate(): ").concat(j," of ").concat(_," operations failed"),E)})})})},Le.prototype.bulkDelete=function(i){var s=this,l=i.length;return this._trans("readwrite",function(u){return s.core.mutate({trans:u,type:"delete",keys:i})}).then(function(g){var d=g.numFailures,h=g.lastResult,g=g.failures;if(d===0)return h;throw new $e("".concat(s.name,".bulkDelete(): ").concat(d," of ").concat(l," operations failed"),g)})},Le);function Le(){}function In(i){function s(g,y){if(y){for(var $=arguments.length,C=new Array($-1);--$;)C[$-1]=arguments[$];return l[g].subscribe.apply(null,C),i}if(typeof g=="string")return l[g]}var l={};s.addEventType=h;for(var u=1,d=arguments.length;u<d;++u)h(arguments[u]);return s;function h(g,y,$){if(typeof g!="object"){var C;y=y||Ve;var _={subscribers:[],fire:$=$||ae,subscribe:function(w){_.subscribers.indexOf(w)===-1&&(_.subscribers.push(w),_.fire=y(_.fire,w))},unsubscribe:function(w){_.subscribers=_.subscribers.filter(function(j){return j!==w}),_.fire=_.subscribers.reduce(y,$)}};return l[g]=s[g]=_}c(C=g).forEach(function(w){var j=C[w];if(f(j))h(w,C[w][0],C[w][1]);else{if(j!=="asap")throw new J.InvalidArgument("Invalid event config");var E=h(w,fe,function(){for(var S=arguments.length,P=new Array(S);S--;)P[S]=arguments[S];E.subscribers.forEach(function(k){De(function(){k.apply(null,P)})})})}})}}function Bn(i,s){return oe(s).from({prototype:i}),s}function _n(i,s){return!(i.filter||i.algorithm||i.or)&&(s?i.justLimit:!i.replayFilter)}function Jr(i,s){i.filter=fn(i.filter,s)}function Zr(i,s,l){var u=i.replayFilter;i.replayFilter=u?function(){return fn(u(),s())}:s,i.justLimit=l&&!u}function ar(i,s){if(i.isPrimKey)return s.primaryKey;var l=s.getIndexByKeyPath(i.index);if(!l)throw new J.Schema("KeyPath "+i.index+" on object store "+s.name+" is not indexed");return l}function no(i,s,l){var u=ar(i,s.schema);return s.openCursor({trans:l,values:!i.keysOnly,reverse:i.dir==="prev",unique:!!i.unique,query:{index:u,range:i.range}})}function lr(i,s,l,u){var d=i.replayFilter?fn(i.filter,i.replayFilter()):i.filter;if(i.or){var h={},g=function(y,$,C){var _,w;d&&!d($,C,function(j){return $.stop(j)},function(j){return $.fail(j)})||((w=""+(_=$.primaryKey))=="[object ArrayBuffer]"&&(w=""+new Uint8Array(_)),R(h,w)||(h[w]=!0,s(y,$,C)))};return Promise.all([i.or._iterate(g,l),ro(no(i,u,l),i.algorithm,g,!i.keysOnly&&i.valueMapper)])}return ro(no(i,u,l),fn(i.algorithm,d),s,!i.keysOnly&&i.valueMapper)}function ro(i,s,l,u){var d=Oe(u?function(h,g,y){return l(u(h),g,y)}:l);return i.then(function(h){if(h)return h.start(function(){var g=function(){return h.continue()};s&&!s(h,function(y){return g=y},function(y){h.stop(y),g=ae},function(y){h.fail(y),g=ae})||d(h.value,h,function(y){return g=y}),g()})})}var Yt=Symbol(),Ln=(io.prototype.execute=function(i){if(this.add!==void 0){var s=this.add;if(f(s))return t(t([],f(i)?i:[],!0),s).sort();if(typeof s=="number")return(Number(i)||0)+s;if(typeof s=="bigint")try{return BigInt(i)+s}catch{return BigInt(0)+s}throw new TypeError("Invalid term ".concat(s))}if(this.remove!==void 0){var l=this.remove;if(f(l))return f(i)?i.filter(function(u){return!l.includes(u)}).sort():[];if(typeof l=="number")return Number(i)-l;if(typeof l=="bigint")try{return BigInt(i)-l}catch{return BigInt(0)-l}throw new TypeError("Invalid subtrahend ".concat(l))}return s=(s=this.replacePrefix)===null||s===void 0?void 0:s[0],s&&typeof i=="string"&&i.startsWith(s)?this.replacePrefix[1]+i.substring(s.length):i},io);function io(i){Object.assign(this,i)}var Js=(Ce.prototype._read=function(i,s){var l=this._ctx;return l.error?l.table._trans(null,Je.bind(null,l.error)):l.table._trans("readonly",i).then(s)},Ce.prototype._write=function(i){var s=this._ctx;return s.error?s.table._trans(null,Je.bind(null,s.error)):s.table._trans("readwrite",i,"locked")},Ce.prototype._addAlgorithm=function(i){var s=this._ctx;s.algorithm=fn(s.algorithm,i)},Ce.prototype._iterate=function(i,s){return lr(this._ctx,i,s,this._ctx.table.core)},Ce.prototype.clone=function(i){var s=Object.create(this.constructor.prototype),l=Object.create(this._ctx);return i&&m(l,i),s._ctx=l,s},Ce.prototype.raw=function(){return this._ctx.valueMapper=null,this},Ce.prototype.each=function(i){var s=this._ctx;return this._read(function(l){return lr(s,i,l,s.table.core)})},Ce.prototype.count=function(i){var s=this;return this._read(function(l){var u=s._ctx,d=u.table.core;if(_n(u,!0))return d.count({trans:l,query:{index:ar(u,d.schema),range:u.range}}).then(function(g){return Math.min(g,u.limit)});var h=0;return lr(u,function(){return++h,!1},l,d).then(function(){return h})}).then(i)},Ce.prototype.sortBy=function(i,s){var l=i.split(".").reverse(),u=l[0],d=l.length-1;function h($,C){return C?h($[l[C]],C-1):$[u]}var g=this._ctx.dir==="next"?1:-1;function y($,C){return we(h($,d),h(C,d))*g}return this.toArray(function($){return $.sort(y)}).then(s)},Ce.prototype.toArray=function(i){var s=this;return this._read(function(l){var u=s._ctx;if(u.dir==="next"&&_n(u,!0)&&0<u.limit){var d=u.valueMapper,h=ar(u,u.table.core.schema);return u.table.core.query({trans:l,limit:u.limit,values:!0,query:{index:h,range:u.range}}).then(function(y){return y=y.result,d?y.map(d):y})}var g=[];return lr(u,function(y){return g.push(y)},l,u.table.core).then(function(){return g})},i)},Ce.prototype.offset=function(i){var s=this._ctx;return i<=0||(s.offset+=i,_n(s)?Zr(s,function(){var l=i;return function(u,d){return l===0||(l===1?--l:d(function(){u.advance(l),l=0}),!1)}}):Zr(s,function(){var l=i;return function(){return--l<0}})),this},Ce.prototype.limit=function(i){return this._ctx.limit=Math.min(this._ctx.limit,i),Zr(this._ctx,function(){var s=i;return function(l,u,d){return--s<=0&&u(d),0<=s}},!0),this},Ce.prototype.until=function(i,s){return Jr(this._ctx,function(l,u,d){return!i(l.value)||(u(d),s)}),this},Ce.prototype.first=function(i){return this.limit(1).toArray(function(s){return s[0]}).then(i)},Ce.prototype.last=function(i){return this.reverse().first(i)},Ce.prototype.filter=function(i){var s;return Jr(this._ctx,function(l){return i(l.value)}),(s=this._ctx).isMatch=fn(s.isMatch,i),this},Ce.prototype.and=function(i){return this.filter(i)},Ce.prototype.or=function(i){return new this.db.WhereClause(this._ctx.table,i,this)},Ce.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Ce.prototype.desc=function(){return this.reverse()},Ce.prototype.eachKey=function(i){var s=this._ctx;return s.keysOnly=!s.isMatch,this.each(function(l,u){i(u.key,u)})},Ce.prototype.eachUniqueKey=function(i){return this._ctx.unique="unique",this.eachKey(i)},Ce.prototype.eachPrimaryKey=function(i){var s=this._ctx;return s.keysOnly=!s.isMatch,this.each(function(l,u){i(u.primaryKey,u)})},Ce.prototype.keys=function(i){var s=this._ctx;s.keysOnly=!s.isMatch;var l=[];return this.each(function(u,d){l.push(d.key)}).then(function(){return l}).then(i)},Ce.prototype.primaryKeys=function(i){var s=this._ctx;if(s.dir==="next"&&_n(s,!0)&&0<s.limit)return this._read(function(u){var d=ar(s,s.table.core.schema);return s.table.core.query({trans:u,values:!1,limit:s.limit,query:{index:d,range:s.range}})}).then(function(u){return u.result}).then(i);s.keysOnly=!s.isMatch;var l=[];return this.each(function(u,d){l.push(d.primaryKey)}).then(function(){return l}).then(i)},Ce.prototype.uniqueKeys=function(i){return this._ctx.unique="unique",this.keys(i)},Ce.prototype.firstKey=function(i){return this.limit(1).keys(function(s){return s[0]}).then(i)},Ce.prototype.lastKey=function(i){return this.reverse().firstKey(i)},Ce.prototype.distinct=function(){var i=this._ctx,i=i.index&&i.table.schema.idxByName[i.index];if(!i||!i.multi)return this;var s={};return Jr(this._ctx,function(d){var u=d.primaryKey.toString(),d=R(s,u);return s[u]=!0,!d}),this},Ce.prototype.modify=function(i){var s=this,l=this._ctx;return this._write(function(u){var d,h,g;g=typeof i=="function"?i:(d=c(i),h=d.length,function(k){for(var z=!1,I=0;I<h;++I){var B=d[I],L=i[B],q=nt(k,B);L instanceof Ln?(Ye(k,B,L.execute(q)),z=!0):q!==L&&(Ye(k,B,L),z=!0)}return z});var y=l.table.core,w=y.schema.primaryKey,$=w.outbound,C=w.extractKey,_=200,w=s.db._options.modifyChunkSize;w&&(_=typeof w=="object"?w[y.name]||w["*"]||200:w);function j(k,B){var I=B.failures,B=B.numFailures;S+=k-B;for(var L=0,q=c(I);L<q.length;L++){var G=q[L];E.push(I[G])}}var E=[],S=0,P=[];return s.clone().primaryKeys().then(function(k){function z(B){var L=Math.min(_,k.length-B);return y.getMany({trans:u,keys:k.slice(B,B+L),cache:"immutable"}).then(function(q){for(var G=[],U=[],H=$?[]:null,Z=[],Y=0;Y<L;++Y){var te=q[Y],de={value:D(te),primKey:k[B+Y]};g.call(de,de.value,de)!==!1&&(de.value==null?Z.push(k[B+Y]):$||we(C(te),C(de.value))===0?(U.push(de.value),$&&H.push(k[B+Y])):(Z.push(k[B+Y]),G.push(de.value)))}return Promise.resolve(0<G.length&&y.mutate({trans:u,type:"add",values:G}).then(function(pe){for(var me in pe.failures)Z.splice(parseInt(me),1);j(G.length,pe)})).then(function(){return(0<U.length||I&&typeof i=="object")&&y.mutate({trans:u,type:"put",keys:H,values:U,criteria:I,changeSpec:typeof i!="function"&&i,isAdditionalChunk:0<B}).then(function(pe){return j(U.length,pe)})}).then(function(){return(0<Z.length||I&&i===ei)&&y.mutate({trans:u,type:"delete",keys:Z,criteria:I,isAdditionalChunk:0<B}).then(function(pe){return j(Z.length,pe)})}).then(function(){return k.length>B+L&&z(B+_)})})}var I=_n(l)&&l.limit===1/0&&(typeof i!="function"||i===ei)&&{index:l.index,range:l.range};return z(0).then(function(){if(0<E.length)throw new ge("Error modifying one or more objects",E,S,P);return k.length})})})},Ce.prototype.delete=function(){var i=this._ctx,s=i.range;return _n(i)&&(i.isPrimKey||s.type===3)?this._write(function(l){var u=i.table.core.schema.primaryKey,d=s;return i.table.core.count({trans:l,query:{index:u,range:d}}).then(function(h){return i.table.core.mutate({trans:l,type:"deleteRange",range:d}).then(function(g){var y=g.failures;if(g.lastResult,g.results,g=g.numFailures,g)throw new ge("Could not delete some values",Object.keys(y).map(function($){return y[$]}),h-g);return h-g})})}):this.modify(ei)},Ce);function Ce(){}var ei=function(i,s){return s.value=null};function Zs(i,s){return i<s?-1:i===s?0:1}function ea(i,s){return s<i?-1:i===s?0:1}function Et(i,s,l){return i=i instanceof so?new i.Collection(i):i,i._ctx.error=new(l||TypeError)(s),i}function Pn(i){return new i.Collection(i,function(){return oo("")}).limit(0)}function cr(i,s,l,u){var d,h,g,y,$,C,_,w=l.length;if(!l.every(function(S){return typeof S=="string"}))return Et(i,Gi);function j(S){d=S==="next"?function(k){return k.toUpperCase()}:function(k){return k.toLowerCase()},h=S==="next"?function(k){return k.toLowerCase()}:function(k){return k.toUpperCase()},g=S==="next"?Zs:ea;var P=l.map(function(k){return{lower:h(k),upper:d(k)}}).sort(function(k,z){return g(k.lower,z.lower)});y=P.map(function(k){return k.upper}),$=P.map(function(k){return k.lower}),_=(C=S)==="next"?"":u}j("next"),i=new i.Collection(i,function(){return on(y[0],$[w-1]+u)}),i._ondirectionchange=function(S){j(S)};var E=0;return i._addAlgorithm(function(S,P,k){var z=S.key;if(typeof z!="string")return!1;var I=h(z);if(s(I,$,E))return!0;for(var B=null,L=E;L<w;++L){var q=(function(G,U,H,Z,Y,te){for(var de=Math.min(G.length,Z.length),pe=-1,me=0;me<de;++me){var Ct=U[me];if(Ct!==Z[me])return Y(G[me],H[me])<0?G.substr(0,me)+H[me]+H.substr(me+1):Y(G[me],Z[me])<0?G.substr(0,me)+Z[me]+H.substr(me+1):0<=pe?G.substr(0,pe)+U[pe]+H.substr(pe+1):null;Y(G[me],Ct)<0&&(pe=me)}return de<Z.length&&te==="next"?G+H.substr(G.length):de<G.length&&te==="prev"?G.substr(0,H.length):pe<0?null:G.substr(0,pe)+Z[pe]+H.substr(pe+1)})(z,I,y[L],$[L],g,C);q===null&&B===null?E=L+1:(B===null||0<g(B,q))&&(B=q)}return P(B!==null?function(){S.continue(B+_)}:k),!1}),i}function on(i,s,l,u){return{type:2,lower:i,upper:s,lowerOpen:l,upperOpen:u}}function oo(i){return{type:1,lower:i,upper:i}}var so=(Object.defineProperty(at.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),at.prototype.between=function(i,s,l,u){l=l!==!1,u=u===!0;try{return 0<this._cmp(i,s)||this._cmp(i,s)===0&&(l||u)&&(!l||!u)?Pn(this):new this.Collection(this,function(){return on(i,s,!l,!u)})}catch{return Et(this,Vt)}},at.prototype.equals=function(i){return i==null?Et(this,Vt):new this.Collection(this,function(){return oo(i)})},at.prototype.above=function(i){return i==null?Et(this,Vt):new this.Collection(this,function(){return on(i,void 0,!0)})},at.prototype.aboveOrEqual=function(i){return i==null?Et(this,Vt):new this.Collection(this,function(){return on(i,void 0,!1)})},at.prototype.below=function(i){return i==null?Et(this,Vt):new this.Collection(this,function(){return on(void 0,i,!1,!0)})},at.prototype.belowOrEqual=function(i){return i==null?Et(this,Vt):new this.Collection(this,function(){return on(void 0,i)})},at.prototype.startsWith=function(i){return typeof i!="string"?Et(this,Gi):this.between(i,i+dn,!0,!0)},at.prototype.startsWithIgnoreCase=function(i){return i===""?this.startsWith(i):cr(this,function(s,l){return s.indexOf(l[0])===0},[i],dn)},at.prototype.equalsIgnoreCase=function(i){return cr(this,function(s,l){return s===l[0]},[i],"")},at.prototype.anyOfIgnoreCase=function(){var i=Me.apply(W,arguments);return i.length===0?Pn(this):cr(this,function(s,l){return l.indexOf(s)!==-1},i,"")},at.prototype.startsWithAnyOfIgnoreCase=function(){var i=Me.apply(W,arguments);return i.length===0?Pn(this):cr(this,function(s,l){return l.some(function(u){return s.indexOf(u)===0})},i,dn)},at.prototype.anyOf=function(){var i=this,s=Me.apply(W,arguments),l=this._cmp;try{s.sort(l)}catch{return Et(this,Vt)}if(s.length===0)return Pn(this);var u=new this.Collection(this,function(){return on(s[0],s[s.length-1])});u._ondirectionchange=function(h){l=h==="next"?i._ascending:i._descending,s.sort(l)};var d=0;return u._addAlgorithm(function(h,g,y){for(var $=h.key;0<l($,s[d]);)if(++d===s.length)return g(y),!1;return l($,s[d])===0||(g(function(){h.continue(s[d])}),!1)}),u},at.prototype.notEqual=function(i){return this.inAnyRange([[-1/0,i],[i,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},at.prototype.noneOf=function(){var i=Me.apply(W,arguments);if(i.length===0)return new this.Collection(this);try{i.sort(this._ascending)}catch{return Et(this,Vt)}var s=i.reduce(function(l,u){return l?l.concat([[l[l.length-1][1],u]]):[[-1/0,u]]},null);return s.push([i[i.length-1],this.db._maxKey]),this.inAnyRange(s,{includeLowers:!1,includeUppers:!1})},at.prototype.inAnyRange=function(z,s){var l=this,u=this._cmp,d=this._ascending,h=this._descending,g=this._min,y=this._max;if(z.length===0)return Pn(this);if(!z.every(function(I){return I[0]!==void 0&&I[1]!==void 0&&d(I[0],I[1])<=0}))return Et(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",J.InvalidArgument);var $=!s||s.includeLowers!==!1,C=s&&s.includeUppers===!0,_,w=d;function j(I,B){return w(I[0],B[0])}try{(_=z.reduce(function(I,B){for(var L=0,q=I.length;L<q;++L){var G=I[L];if(u(B[0],G[1])<0&&0<u(B[1],G[0])){G[0]=g(G[0],B[0]),G[1]=y(G[1],B[1]);break}}return L===q&&I.push(B),I},[])).sort(j)}catch{return Et(this,Vt)}var E=0,S=C?function(I){return 0<d(I,_[E][1])}:function(I){return 0<=d(I,_[E][1])},P=$?function(I){return 0<h(I,_[E][0])}:function(I){return 0<=h(I,_[E][0])},k=S,z=new this.Collection(this,function(){return on(_[0][0],_[_.length-1][1],!$,!C)});return z._ondirectionchange=function(I){w=I==="next"?(k=S,d):(k=P,h),_.sort(j)},z._addAlgorithm(function(I,B,L){for(var q,G=I.key;k(G);)if(++E===_.length)return B(L),!1;return!S(q=G)&&!P(q)||(l._cmp(G,_[E][1])===0||l._cmp(G,_[E][0])===0||B(function(){w===d?I.continue(_[E][0]):I.continue(_[E][1])}),!1)}),z},at.prototype.startsWithAnyOf=function(){var i=Me.apply(W,arguments);return i.every(function(s){return typeof s=="string"})?i.length===0?Pn(this):this.inAnyRange(i.map(function(s){return[s,s+dn]})):Et(this,"startsWithAnyOf() only works with strings")},at);function at(){}function Mt(i){return Oe(function(s){return Mn(s),i(s.target.error),!1})}function Mn(i){i.stopPropagation&&i.stopPropagation(),i.preventDefault&&i.preventDefault()}var Nn="storagemutated",ti="x-storagemutated-1",sn=In(null,Nn),ta=(Nt.prototype._lock=function(){return Wt(!K.global),++this._reculock,this._reculock!==1||K.global||(K.lockOwnerFor=this),this},Nt.prototype._unlock=function(){if(Wt(!K.global),--this._reculock==0)for(K.global||(K.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var i=this._blockedFuncs.shift();try{un(i[1],i[0])}catch{}}return this},Nt.prototype._locked=function(){return this._reculock&&K.lockOwnerFor!==this},Nt.prototype.create=function(i){var s=this;if(!this.mode)return this;var l=this.db.idbdb,u=this.db._state.dbOpenError;if(Wt(!this.idbtrans),!i&&!l)switch(u&&u.name){case"DatabaseClosedError":throw new J.DatabaseClosed(u);case"MissingAPIError":throw new J.MissingAPI(u.message,u);default:throw new J.OpenFailed(u)}if(!this.active)throw new J.TransactionInactive;return Wt(this._completion._state===null),(i=this.idbtrans=i||(this.db.core||l).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Oe(function(d){Mn(d),s._reject(i.error)}),i.onabort=Oe(function(d){Mn(d),s.active&&s._reject(new J.Abort(i.error)),s.active=!1,s.on("abort").fire(d)}),i.oncomplete=Oe(function(){s.active=!1,s._resolve(),"mutatedParts"in i&&sn.storagemutated.fire(i.mutatedParts)}),this},Nt.prototype._promise=function(i,s,l){var u=this;if(i==="readwrite"&&this.mode!=="readwrite")return Je(new J.ReadOnly("Transaction is readonly"));if(!this.active)return Je(new J.TransactionInactive);if(this._locked())return new V(function(h,g){u._blockedFuncs.push([function(){u._promise(i,s,l).then(h,g)},K])});if(l)return tn(function(){var h=new V(function(g,y){u._lock();var $=s(g,y,u);$&&$.then&&$.then(g,y)});return h.finally(function(){return u._unlock()}),h._lib=!0,h});var d=new V(function(h,g){var y=s(h,g,u);y&&y.then&&y.then(h,g)});return d._lib=!0,d},Nt.prototype._root=function(){return this.parent?this.parent._root():this},Nt.prototype.waitFor=function(i){var s,l=this._root(),u=V.resolve(i);l._waitingFor?l._waitingFor=l._waitingFor.then(function(){return u}):(l._waitingFor=u,l._waitingQueue=[],s=l.idbtrans.objectStore(l.storeNames[0]),(function h(){for(++l._spinCount;l._waitingQueue.length;)l._waitingQueue.shift()();l._waitingFor&&(s.get(-1/0).onsuccess=h)})());var d=l._waitingFor;return new V(function(h,g){u.then(function(y){return l._waitingQueue.push(Oe(h.bind(null,y)))},function(y){return l._waitingQueue.push(Oe(g.bind(null,y)))}).finally(function(){l._waitingFor===d&&(l._waitingFor=null)})})},Nt.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new J.Abort))},Nt.prototype.table=function(i){var s=this._memoizedTables||(this._memoizedTables={});if(R(s,i))return s[i];var l=this.schema[i];if(!l)throw new J.NotFound("Table "+i+" not part of transaction");return l=new this.db.Table(i,l,this),l.core=this.db.core.table(i),s[i]=l},Nt);function Nt(){}function ni(i,s,l,u,d,h,g){return{name:i,keyPath:s,unique:l,multi:u,auto:d,compound:h,src:(l&&!g?"&":"")+(u?"*":"")+(d?"++":"")+ao(s)}}function ao(i){return typeof i=="string"?i:i?"["+[].join.call(i,"+")+"]":""}function ri(i,s,l){return{name:i,primKey:s,indexes:l,mappedClass:null,idxByName:(u=function(d){return[d.name,d]},l.reduce(function(d,h,g){return g=u(h,g),g&&(d[g[0]]=g[1]),d},{}))};var u}var qn=function(i){try{return i.only([[]]),qn=function(){return[[]]},[[]]}catch{return qn=function(){return dn},dn}};function ii(i){return i==null?function(){}:typeof i=="string"?(s=i).split(".").length===1?function(l){return l[s]}:function(l){return nt(l,s)}:function(l){return nt(l,i)};var s}function lo(i){return[].slice.call(i)}var na=0;function Un(i){return i==null?":id":typeof i=="string"?i:"[".concat(i.join("+"),"]")}function ra(i,s,$){function u(k){if(k.type===3)return null;if(k.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var E=k.lower,S=k.upper,P=k.lowerOpen,k=k.upperOpen;return E===void 0?S===void 0?null:s.upperBound(S,!!k):S===void 0?s.lowerBound(E,!!P):s.bound(E,S,!!P,!!k)}function d(j){var E,S=j.name;return{name:S,schema:j,mutate:function(P){var k=P.trans,z=P.type,I=P.keys,B=P.values,L=P.range;return new Promise(function(q,G){q=Oe(q);var U=k.objectStore(S),H=U.keyPath==null,Z=z==="put"||z==="add";if(!Z&&z!=="delete"&&z!=="deleteRange")throw new Error("Invalid operation type: "+z);var Y,te=(I||B||{length:1}).length;if(I&&B&&I.length!==B.length)throw new Error("Given keys array must have same length as given values array.");if(te===0)return q({numFailures:0,failures:{},results:[],lastResult:void 0});function de(bt){++Ct,Mn(bt)}var pe=[],me=[],Ct=0;if(z==="deleteRange"){if(L.type===4)return q({numFailures:Ct,failures:me,results:[],lastResult:void 0});L.type===3?pe.push(Y=U.clear()):pe.push(Y=U.delete(u(L)))}else{var H=Z?H?[B,I]:[B,null]:[I,null],ue=H[0],ft=H[1];if(Z)for(var ht=0;ht<te;++ht)pe.push(Y=ft&&ft[ht]!==void 0?U[z](ue[ht],ft[ht]):U[z](ue[ht])),Y.onerror=de;else for(ht=0;ht<te;++ht)pe.push(Y=U[z](ue[ht])),Y.onerror=de}function $r(bt){bt=bt.target.result,pe.forEach(function(mn,$i){return mn.error!=null&&(me[$i]=mn.error)}),q({numFailures:Ct,failures:me,results:z==="delete"?I:pe.map(function(mn){return mn.result}),lastResult:bt})}Y.onerror=function(bt){de(bt),$r(bt)},Y.onsuccess=$r})},getMany:function(P){var k=P.trans,z=P.keys;return new Promise(function(I,B){I=Oe(I);for(var L,q=k.objectStore(S),G=z.length,U=new Array(G),H=0,Z=0,Y=function(pe){pe=pe.target,U[pe._pos]=pe.result,++Z===H&&I(U)},te=Mt(B),de=0;de<G;++de)z[de]!=null&&((L=q.get(z[de]))._pos=de,L.onsuccess=Y,L.onerror=te,++H);H===0&&I(U)})},get:function(P){var k=P.trans,z=P.key;return new Promise(function(I,B){I=Oe(I);var L=k.objectStore(S).get(z);L.onsuccess=function(q){return I(q.target.result)},L.onerror=Mt(B)})},query:(E=C,function(P){return new Promise(function(k,z){k=Oe(k);var I,B,L,H=P.trans,q=P.values,G=P.limit,Y=P.query,U=G===1/0?void 0:G,Z=Y.index,Y=Y.range,H=H.objectStore(S),Z=Z.isPrimaryKey?H:H.index(Z.name),Y=u(Y);if(G===0)return k({result:[]});E?((U=q?Z.getAll(Y,U):Z.getAllKeys(Y,U)).onsuccess=function(te){return k({result:te.target.result})},U.onerror=Mt(z)):(I=0,B=!q&&"openKeyCursor"in Z?Z.openKeyCursor(Y):Z.openCursor(Y),L=[],B.onsuccess=function(te){var de=B.result;return de?(L.push(q?de.value:de.primaryKey),++I===G?k({result:L}):void de.continue()):k({result:L})},B.onerror=Mt(z))})}),openCursor:function(P){var k=P.trans,z=P.values,I=P.query,B=P.reverse,L=P.unique;return new Promise(function(q,G){q=Oe(q);var Z=I.index,U=I.range,H=k.objectStore(S),H=Z.isPrimaryKey?H:H.index(Z.name),Z=B?L?"prevunique":"prev":L?"nextunique":"next",Y=!z&&"openKeyCursor"in H?H.openKeyCursor(u(U),Z):H.openCursor(u(U),Z);Y.onerror=Mt(G),Y.onsuccess=Oe(function(te){var de,pe,me,Ct,ue=Y.result;ue?(ue.___id=++na,ue.done=!1,de=ue.continue.bind(ue),pe=(pe=ue.continuePrimaryKey)&&pe.bind(ue),me=ue.advance.bind(ue),Ct=function(){throw new Error("Cursor not stopped")},ue.trans=k,ue.stop=ue.continue=ue.continuePrimaryKey=ue.advance=function(){throw new Error("Cursor not started")},ue.fail=Oe(G),ue.next=function(){var ft=this,ht=1;return this.start(function(){return ht--?ft.continue():ft.stop()}).then(function(){return ft})},ue.start=function(ft){function ht(){if(Y.result)try{ft()}catch(bt){ue.fail(bt)}else ue.done=!0,ue.start=function(){throw new Error("Cursor behind last entry")},ue.stop()}var $r=new Promise(function(bt,mn){bt=Oe(bt),Y.onerror=Mt(mn),ue.fail=mn,ue.stop=function($i){ue.stop=ue.continue=ue.continuePrimaryKey=ue.advance=Ct,bt($i)}});return Y.onsuccess=Oe(function(bt){Y.onsuccess=ht,ht()}),ue.continue=de,ue.continuePrimaryKey=pe,ue.advance=me,ht(),$r},q(ue)):q(null)},G)})},count:function(P){var k=P.query,z=P.trans,I=k.index,B=k.range;return new Promise(function(L,q){var G=z.objectStore(S),U=I.isPrimaryKey?G:G.index(I.name),G=u(B),U=G?U.count(G):U.count();U.onsuccess=Oe(function(H){return L(H.target.result)}),U.onerror=Mt(q)})}}}var h,g,y,_=(g=$,y=lo((h=i).objectStoreNames),{schema:{name:h.name,tables:y.map(function(j){return g.objectStore(j)}).map(function(j){var E=j.keyPath,k=j.autoIncrement,S=f(E),P={},k={name:j.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:E==null,compound:S,keyPath:E,autoIncrement:k,unique:!0,extractKey:ii(E)},indexes:lo(j.indexNames).map(function(z){return j.index(z)}).map(function(L){var I=L.name,B=L.unique,q=L.multiEntry,L=L.keyPath,q={name:I,compound:f(L),keyPath:L,unique:B,multiEntry:q,extractKey:ii(L)};return P[Un(L)]=q}),getIndexByKeyPath:function(z){return P[Un(z)]}};return P[":id"]=k.primaryKey,E!=null&&(P[Un(E)]=k.primaryKey),k})},hasGetAll:0<y.length&&"getAll"in g.objectStore(y[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),$=_.schema,C=_.hasGetAll,_=$.tables.map(d),w={};return _.forEach(function(j){return w[j.name]=j}),{stack:"dbcore",transaction:i.transaction.bind(i),table:function(j){if(!w[j])throw new Error("Table '".concat(j,"' not found"));return w[j]},MIN_KEY:-1/0,MAX_KEY:qn(s),schema:$}}function ia(i,s,l,u){var d=l.IDBKeyRange;return l.indexedDB,{dbcore:(u=ra(s,d,u),i.dbcore.reduce(function(h,g){return g=g.create,o(o({},h),g(h))},u))}}function ur(i,u){var l=u.db,u=ia(i._middlewares,l,i._deps,u);i.core=u.dbcore,i.tables.forEach(function(d){var h=d.name;i.core.schema.tables.some(function(g){return g.name===h})&&(d.core=i.core.table(h),i[h]instanceof i.Table&&(i[h].core=d.core))})}function dr(i,s,l,u){l.forEach(function(d){var h=u[d];s.forEach(function(g){var y=(function $(C,_){return Ke(C,_)||(C=F(C))&&$(C,_)})(g,d);(!y||"value"in y&&y.value===void 0)&&(g===i.Transaction.prototype||g instanceof i.Transaction?Q(g,d,{get:function(){return this.table(d)},set:function($){N(this,d,{value:$,writable:!0,configurable:!0,enumerable:!0})}}):g[d]=new i.Table(d,h))})})}function oi(i,s){s.forEach(function(l){for(var u in l)l[u]instanceof i.Table&&delete l[u]})}function oa(i,s){return i._cfg.version-s._cfg.version}function sa(i,s,l,u){var d=i._dbSchema;l.objectStoreNames.contains("$meta")&&!d.$meta&&(d.$meta=ri("$meta",uo("")[0],[]),i._storeNames.push("$meta"));var h=i._createTransaction("readwrite",i._storeNames,d);h.create(l),h._completion.catch(u);var g=h._reject.bind(h),y=K.transless||K;tn(function(){return K.trans=h,K.transless=y,s!==0?(ur(i,l),C=s,(($=h).storeNames.includes("$meta")?$.table("$meta").get("version").then(function(_){return _??C}):V.resolve(C)).then(function(_){return j=_,E=h,S=l,P=[],_=(w=i)._versions,k=w._dbSchema=hr(0,w.idbdb,S),(_=_.filter(function(z){return z._cfg.version>=j})).length!==0?(_.forEach(function(z){P.push(function(){var I=k,B=z._cfg.dbschema;pr(w,I,S),pr(w,B,S),k=w._dbSchema=B;var L=si(I,B);L.add.forEach(function(Z){ai(S,Z[0],Z[1].primKey,Z[1].indexes)}),L.change.forEach(function(Z){if(Z.recreate)throw new J.Upgrade("Not yet support for changing primary key");var Y=S.objectStore(Z.name);Z.add.forEach(function(te){return fr(Y,te)}),Z.change.forEach(function(te){Y.deleteIndex(te.name),fr(Y,te)}),Z.del.forEach(function(te){return Y.deleteIndex(te)})});var q=z._cfg.contentUpgrade;if(q&&z._cfg.version>j){ur(w,S),E._memoizedTables={};var G=Ht(B);L.del.forEach(function(Z){G[Z]=I[Z]}),oi(w,[w.Transaction.prototype]),dr(w,[w.Transaction.prototype],c(G),G),E.schema=G;var U,H=et(q);return H&&kn(),L=V.follow(function(){var Z;(U=q(E))&&H&&(Z=nn.bind(null,null),U.then(Z,Z))}),U&&typeof U.then=="function"?V.resolve(U):L.then(function(){return U})}}),P.push(function(I){var B,L,q=z._cfg.dbschema;B=q,L=I,[].slice.call(L.db.objectStoreNames).forEach(function(G){return B[G]==null&&L.db.deleteObjectStore(G)}),oi(w,[w.Transaction.prototype]),dr(w,[w.Transaction.prototype],w._storeNames,w._dbSchema),E.schema=w._dbSchema}),P.push(function(I){w.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(w.idbdb.version/10)===z._cfg.version?(w.idbdb.deleteObjectStore("$meta"),delete w._dbSchema.$meta,w._storeNames=w._storeNames.filter(function(B){return B!=="$meta"})):I.objectStore("$meta").put(z._cfg.version,"version"))})}),(function z(){return P.length?V.resolve(P.shift()(E.idbtrans)).then(z):V.resolve()})().then(function(){co(k,S)})):V.resolve();var w,j,E,S,P,k}).catch(g)):(c(d).forEach(function(_){ai(l,_,d[_].primKey,d[_].indexes)}),ur(i,l),void V.follow(function(){return i.on.populate.fire(h)}).catch(g));var $,C})}function aa(i,s){co(i._dbSchema,s),s.db.version%10!=0||s.objectStoreNames.contains("$meta")||s.db.createObjectStore("$meta").add(Math.ceil(s.db.version/10-1),"version");var l=hr(0,i.idbdb,s);pr(i,i._dbSchema,s);for(var u=0,d=si(l,i._dbSchema).change;u<d.length;u++){var h=(function(g){if(g.change.length||g.recreate)return console.warn("Unable to patch indexes of table ".concat(g.name," because it has changes on the type of index or primary key.")),{value:void 0};var y=s.objectStore(g.name);g.add.forEach(function($){Se&&console.debug("Dexie upgrade patch: Creating missing index ".concat(g.name,".").concat($.src)),fr(y,$)})})(d[u]);if(typeof h=="object")return h.value}}function si(i,s){var l,u={del:[],add:[],change:[]};for(l in i)s[l]||u.del.push(l);for(l in s){var d=i[l],h=s[l];if(d){var g={name:l,def:h,recreate:!1,del:[],add:[],change:[]};if(""+(d.primKey.keyPath||"")!=""+(h.primKey.keyPath||"")||d.primKey.auto!==h.primKey.auto)g.recreate=!0,u.change.push(g);else{var y=d.idxByName,$=h.idxByName,C=void 0;for(C in y)$[C]||g.del.push(C);for(C in $){var _=y[C],w=$[C];_?_.src!==w.src&&g.change.push(w):g.add.push(w)}(0<g.del.length||0<g.add.length||0<g.change.length)&&u.change.push(g)}}else u.add.push([l,h])}return u}function ai(i,s,l,u){var d=i.db.createObjectStore(s,l.keyPath?{keyPath:l.keyPath,autoIncrement:l.auto}:{autoIncrement:l.auto});return u.forEach(function(h){return fr(d,h)}),d}function co(i,s){c(i).forEach(function(l){s.db.objectStoreNames.contains(l)||(Se&&console.debug("Dexie: Creating missing table",l),ai(s,l,i[l].primKey,i[l].indexes))})}function fr(i,s){i.createIndex(s.name,s.keyPath,{unique:s.unique,multiEntry:s.multi})}function hr(i,s,l){var u={};return he(s.objectStoreNames,0).forEach(function(d){for(var h=l.objectStore(d),g=ni(ao(C=h.keyPath),C||"",!0,!1,!!h.autoIncrement,C&&typeof C!="string",!0),y=[],$=0;$<h.indexNames.length;++$){var _=h.index(h.indexNames[$]),C=_.keyPath,_=ni(_.name,C,!!_.unique,!!_.multiEntry,!1,C&&typeof C!="string",!1);y.push(_)}u[d]=ri(d,g,y)}),u}function pr(i,s,l){for(var u=l.db.objectStoreNames,d=0;d<u.length;++d){var h=u[d],g=l.objectStore(h);i._hasGetAll="getAll"in g;for(var y=0;y<g.indexNames.length;++y){var $=g.indexNames[y],C=g.index($).keyPath,_=typeof C=="string"?C:"["+he(C).join("+")+"]";!s[h]||(C=s[h].idxByName[_])&&(C.name=$,delete s[h].idxByName[_],s[h].idxByName[$]=C)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&a.WorkerGlobalScope&&a instanceof a.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(i._hasGetAll=!1)}function uo(i){return i.split(",").map(function(s,l){var u=(s=s.trim()).replace(/([&*]|\+\+)/g,""),d=/^\[/.test(u)?u.match(/^\[(.*)\]$/)[1].split("+"):u;return ni(u,d||null,/\&/.test(s),/\*/.test(s),/\+\+/.test(s),f(d),l===0)})}var la=(mr.prototype._parseStoresSpec=function(i,s){c(i).forEach(function(l){if(i[l]!==null){var u=uo(i[l]),d=u.shift();if(d.unique=!0,d.multi)throw new J.Schema("Primary key cannot be multi-valued");u.forEach(function(h){if(h.auto)throw new J.Schema("Only primary key can be marked as autoIncrement (++)");if(!h.keyPath)throw new J.Schema("Index must have a name and cannot be an empty string")}),s[l]=ri(l,d,u)}})},mr.prototype.stores=function(l){var s=this.db;this._cfg.storesSource=this._cfg.storesSource?m(this._cfg.storesSource,l):l;var l=s._versions,u={},d={};return l.forEach(function(h){m(u,h._cfg.storesSource),d=h._cfg.dbschema={},h._parseStoresSpec(u,d)}),s._dbSchema=d,oi(s,[s._allTables,s,s.Transaction.prototype]),dr(s,[s._allTables,s,s.Transaction.prototype,this._cfg.tables],c(d),d),s._storeNames=c(d),this},mr.prototype.upgrade=function(i){return this._cfg.contentUpgrade=xt(this._cfg.contentUpgrade||ae,i),this},mr);function mr(){}function li(i,s){var l=i._dbNamesDB;return l||(l=i._dbNamesDB=new Xt(or,{addons:[],indexedDB:i,IDBKeyRange:s})).version(1).stores({dbnames:"name"}),l.table("dbnames")}function ci(i){return i&&typeof i.databases=="function"}function ui(i){return tn(function(){return K.letThrough=!0,i()})}function di(i){return!("from"in i)}var dt=function(i,s){if(!this){var l=new dt;return i&&"d"in i&&m(l,i),l}m(this,arguments.length?{d:1,from:i,to:1<arguments.length?s:i}:{d:0})};function Wn(i,s,l){var u=we(s,l);if(!isNaN(u)){if(0<u)throw RangeError();if(di(i))return m(i,{from:s,to:l,d:1});var d=i.l,u=i.r;if(we(l,i.from)<0)return d?Wn(d,s,l):i.l={from:s,to:l,d:1,l:null,r:null},ho(i);if(0<we(s,i.to))return u?Wn(u,s,l):i.r={from:s,to:l,d:1,l:null,r:null},ho(i);we(s,i.from)<0&&(i.from=s,i.l=null,i.d=u?u.d+1:1),0<we(l,i.to)&&(i.to=l,i.r=null,i.d=i.l?i.l.d+1:1),l=!i.r,d&&!i.l&&Hn(i,d),u&&l&&Hn(i,u)}}function Hn(i,s){di(s)||(function l(u,$){var h=$.from,g=$.to,y=$.l,$=$.r;Wn(u,h,g),y&&l(u,y),$&&l(u,$)})(i,s)}function fo(i,s){var l=gr(s),u=l.next();if(u.done)return!1;for(var d=u.value,h=gr(i),g=h.next(d.from),y=g.value;!u.done&&!g.done;){if(we(y.from,d.to)<=0&&0<=we(y.to,d.from))return!0;we(d.from,y.from)<0?d=(u=l.next(y.from)).value:y=(g=h.next(d.from)).value}return!1}function gr(i){var s=di(i)?null:{s:0,n:i};return{next:function(l){for(var u=0<arguments.length;s;)switch(s.s){case 0:if(s.s=1,u)for(;s.n.l&&we(l,s.n.from)<0;)s={up:s,n:s.n.l,s:1};else for(;s.n.l;)s={up:s,n:s.n.l,s:1};case 1:if(s.s=2,!u||we(l,s.n.to)<=0)return{value:s.n,done:!1};case 2:if(s.n.r){s.s=3,s={up:s,n:s.n.r,s:0};continue}case 3:s=s.up}return{done:!0}}}}function ho(i){var s,l,u=(((s=i.r)===null||s===void 0?void 0:s.d)||0)-(((l=i.l)===null||l===void 0?void 0:l.d)||0),d=1<u?"r":u<-1?"l":"";d&&(s=d=="r"?"l":"r",l=o({},i),u=i[d],i.from=u.from,i.to=u.to,i[d]=u[d],l[d]=u[s],(i[s]=l).d=po(l)),i.d=po(i)}function po(l){var s=l.r,l=l.l;return(s?l?Math.max(s.d,l.d):s.d:l?l.d:0)+1}function br(i,s){return c(s).forEach(function(l){i[l]?Hn(i[l],s[l]):i[l]=(function u(d){var h,g,y={};for(h in d)R(d,h)&&(g=d[h],y[h]=!g||typeof g!="object"||p.has(g.constructor)?g:u(g));return y})(s[l])}),i}function fi(i,s){return i.all||s.all||Object.keys(i).some(function(l){return s[l]&&fo(s[l],i[l])})}T(dt.prototype,((_t={add:function(i){return Hn(this,i),this},addKey:function(i){return Wn(this,i,i),this},addKeys:function(i){var s=this;return i.forEach(function(l){return Wn(s,l,l)}),this},hasKey:function(i){var s=gr(this).next(i).value;return s&&we(s.from,i)<=0&&0<=we(s.to,i)}})[ie]=function(){return gr(this)},_t));var hn={},hi={},pi=!1;function yr(i){br(hi,i),pi||(pi=!0,setTimeout(function(){pi=!1,mi(hi,!(hi={}))},0))}function mi(i,s){s===void 0&&(s=!1);var l=new Set;if(i.all)for(var u=0,d=Object.values(hn);u<d.length;u++)mo(g=d[u],i,l,s);else for(var h in i){var g,y=/^idb\:\/\/(.*)\/(.*)\//.exec(h);y&&(h=y[1],y=y[2],(g=hn["idb://".concat(h,"/").concat(y)])&&mo(g,i,l,s))}l.forEach(function($){return $()})}function mo(i,s,l,u){for(var d=[],h=0,g=Object.entries(i.queries.query);h<g.length;h++){for(var y=g[h],$=y[0],C=[],_=0,w=y[1];_<w.length;_++){var j=w[_];fi(s,j.obsSet)?j.subscribers.forEach(function(k){return l.add(k)}):u&&C.push(j)}u&&d.push([$,C])}if(u)for(var E=0,S=d;E<S.length;E++){var P=S[E],$=P[0],C=P[1];i.queries.query[$]=C}}function ca(i){var s=i._state,l=i._deps.indexedDB;if(s.isBeingOpened||i.idbdb)return s.dbReadyPromise.then(function(){return s.dbOpenError?Je(s.dbOpenError):i});s.isBeingOpened=!0,s.dbOpenError=null,s.openComplete=!1;var u=s.openCanceller,d=Math.round(10*i.verno),h=!1;function g(){if(s.openCanceller!==u)throw new J.DatabaseClosed("db.open() was cancelled")}function y(){return new V(function(j,E){if(g(),!l)throw new J.MissingAPI;var S=i.name,P=s.autoSchema||!d?l.open(S):l.open(S,d);if(!P)throw new J.MissingAPI;P.onerror=Mt(E),P.onblocked=Oe(i._fireOnBlocked),P.onupgradeneeded=Oe(function(k){var z;_=P.transaction,s.autoSchema&&!i._options.allowEmptyDB?(P.onerror=Mn,_.abort(),P.result.close(),(z=l.deleteDatabase(S)).onsuccess=z.onerror=Oe(function(){E(new J.NoSuchDatabase("Database ".concat(S," doesnt exist")))})):(_.onerror=Mt(E),k=k.oldVersion>Math.pow(2,62)?0:k.oldVersion,w=k<1,i.idbdb=P.result,h&&aa(i,_),sa(i,k/10,_,E))},E),P.onsuccess=Oe(function(){_=null;var k,z,I,B,L,q=i.idbdb=P.result,G=he(q.objectStoreNames);if(0<G.length)try{var U=q.transaction((B=G).length===1?B[0]:B,"readonly");if(s.autoSchema)z=q,I=U,(k=i).verno=z.version/10,I=k._dbSchema=hr(0,z,I),k._storeNames=he(z.objectStoreNames,0),dr(k,[k._allTables],c(I),I);else if(pr(i,i._dbSchema,U),((L=si(hr(0,(L=i).idbdb,U),L._dbSchema)).add.length||L.change.some(function(H){return H.add.length||H.change.length}))&&!h)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),q.close(),d=q.version+1,h=!0,j(y());ur(i,U)}catch{}Sn.push(i),q.onversionchange=Oe(function(H){s.vcFired=!0,i.on("versionchange").fire(H)}),q.onclose=Oe(function(H){i.on("close").fire(H)}),w&&(L=i._deps,U=S,q=L.indexedDB,L=L.IDBKeyRange,ci(q)||U===or||li(q,L).put({name:U}).catch(ae)),j()},E)}).catch(function(j){switch(j?.name){case"UnknownError":if(0<s.PR1398_maxLoop)return s.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),y();break;case"VersionError":if(0<d)return d=0,y()}return V.reject(j)})}var $,C=s.dbReadyResolve,_=null,w=!1;return V.race([u,(typeof navigator>"u"?V.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(j){function E(){return indexedDB.databases().finally(j)}$=setInterval(E,100),E()}).finally(function(){return clearInterval($)}):Promise.resolve()).then(y)]).then(function(){return g(),s.onReadyBeingFired=[],V.resolve(ui(function(){return i.on.ready.fire(i.vip)})).then(function j(){if(0<s.onReadyBeingFired.length){var E=s.onReadyBeingFired.reduce(xt,ae);return s.onReadyBeingFired=[],V.resolve(ui(function(){return E(i.vip)})).then(j)}})}).finally(function(){s.openCanceller===u&&(s.onReadyBeingFired=null,s.isBeingOpened=!1)}).catch(function(j){s.dbOpenError=j;try{_&&_.abort()}catch{}return u===s.openCanceller&&i._close(),Je(j)}).finally(function(){s.openComplete=!0,C()}).then(function(){var j;return w&&(j={},i.tables.forEach(function(E){E.schema.indexes.forEach(function(S){S.name&&(j["idb://".concat(i.name,"/").concat(E.name,"/").concat(S.name)]=new dt(-1/0,[[[]]]))}),j["idb://".concat(i.name,"/").concat(E.name,"/")]=j["idb://".concat(i.name,"/").concat(E.name,"/:dels")]=new dt(-1/0,[[[]]])}),sn(Nn).fire(j),mi(j,!0)),i})}function gi(i){function s(h){return i.next(h)}var l=d(s),u=d(function(h){return i.throw(h)});function d(h){return function($){var y=h($),$=y.value;return y.done?$:$&&typeof $.then=="function"?$.then(l,u):f($)?Promise.all($).then(l,u):l($)}}return d(s)()}function wr(i,s,l){for(var u=f(i)?i.slice():[i],d=0;d<l;++d)u.push(s);return u}var ua={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(i){return o(o({},i),{table:function(s){var l=i.table(s),u=l.schema,d={},h=[];function g(w,j,E){var S=Un(w),P=d[S]=d[S]||[],k=w==null?0:typeof w=="string"?1:w.length,z=0<j,z=o(o({},E),{name:z?"".concat(S,"(virtual-from:").concat(E.name,")"):E.name,lowLevelIndex:E,isVirtual:z,keyTail:j,keyLength:k,extractKey:ii(w),unique:!z&&E.unique});return P.push(z),z.isPrimaryKey||h.push(z),1<k&&g(k===2?w[0]:w.slice(0,k-1),j+1,E),P.sort(function(I,B){return I.keyTail-B.keyTail}),z}s=g(u.primaryKey.keyPath,0,u.primaryKey),d[":id"]=[s];for(var y=0,$=u.indexes;y<$.length;y++){var C=$[y];g(C.keyPath,0,C)}function _(w){var j,E=w.query.index;return E.isVirtual?o(o({},w),{query:{index:E.lowLevelIndex,range:(j=w.query.range,E=E.keyTail,{type:j.type===1?2:j.type,lower:wr(j.lower,j.lowerOpen?i.MAX_KEY:i.MIN_KEY,E),lowerOpen:!0,upper:wr(j.upper,j.upperOpen?i.MIN_KEY:i.MAX_KEY,E),upperOpen:!0})}}):w}return o(o({},l),{schema:o(o({},u),{primaryKey:s,indexes:h,getIndexByKeyPath:function(w){return(w=d[Un(w)])&&w[0]}}),count:function(w){return l.count(_(w))},query:function(w){return l.query(_(w))},openCursor:function(w){var j=w.query.index,E=j.keyTail,S=j.isVirtual,P=j.keyLength;return S?l.openCursor(_(w)).then(function(z){return z&&k(z)}):l.openCursor(w);function k(z){return Object.create(z,{continue:{value:function(I){I!=null?z.continue(wr(I,w.reverse?i.MAX_KEY:i.MIN_KEY,E)):w.unique?z.continue(z.key.slice(0,P).concat(w.reverse?i.MIN_KEY:i.MAX_KEY,E)):z.continue()}},continuePrimaryKey:{value:function(I,B){z.continuePrimaryKey(wr(I,i.MAX_KEY,E),B)}},primaryKey:{get:function(){return z.primaryKey}},key:{get:function(){var I=z.key;return P===1?I[0]:I.slice(0,P)}},value:{get:function(){return z.value}}})}}})}})}};function bi(i,s,l,u){return l=l||{},u=u||"",c(i).forEach(function(d){var h,g,y;R(s,d)?(h=i[d],g=s[d],typeof h=="object"&&typeof g=="object"&&h&&g?(y=x(h))!==x(g)?l[u+d]=s[d]:y==="Object"?bi(h,g,l,u+d+"."):h!==g&&(l[u+d]=s[d]):h!==g&&(l[u+d]=s[d])):l[u+d]=void 0}),c(s).forEach(function(d){R(i,d)||(l[u+d]=s[d])}),l}function yi(i,s){return s.type==="delete"?s.keys:s.keys||s.values.map(i.extractKey)}var da={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(i){return o(o({},i),{table:function(s){var l=i.table(s),u=l.schema.primaryKey;return o(o({},l),{mutate:function(d){var h=K.trans,g=h.table(s).hook,y=g.deleting,$=g.creating,C=g.updating;switch(d.type){case"add":if($.fire===ae)break;return h._promise("readwrite",function(){return _(d)},!0);case"put":if($.fire===ae&&C.fire===ae)break;return h._promise("readwrite",function(){return _(d)},!0);case"delete":if(y.fire===ae)break;return h._promise("readwrite",function(){return _(d)},!0);case"deleteRange":if(y.fire===ae)break;return h._promise("readwrite",function(){return(function w(j,E,S){return l.query({trans:j,values:!1,query:{index:u,range:E},limit:S}).then(function(P){var k=P.result;return _({type:"delete",keys:k,trans:j}).then(function(z){return 0<z.numFailures?Promise.reject(z.failures[0]):k.length<S?{failures:[],numFailures:0,lastResult:void 0}:w(j,o(o({},E),{lower:k[k.length-1],lowerOpen:!0}),S)})})})(d.trans,d.range,1e4)},!0)}return l.mutate(d);function _(w){var j,E,S,P=K.trans,k=w.keys||yi(u,w);if(!k)throw new Error("Keys missing");return(w=w.type==="add"||w.type==="put"?o(o({},w),{keys:k}):o({},w)).type!=="delete"&&(w.values=t([],w.values)),w.keys&&(w.keys=t([],w.keys)),j=l,S=k,((E=w).type==="add"?Promise.resolve([]):j.getMany({trans:E.trans,keys:S,cache:"immutable"})).then(function(z){var I=k.map(function(B,L){var q,G,U,H=z[L],Z={onerror:null,onsuccess:null};return w.type==="delete"?y.fire.call(Z,B,H,P):w.type==="add"||H===void 0?(q=$.fire.call(Z,B,w.values[L],P),B==null&&q!=null&&(w.keys[L]=B=q,u.outbound||Ye(w.values[L],u.keyPath,B))):(q=bi(H,w.values[L]),(G=C.fire.call(Z,q,B,H,P))&&(U=w.values[L],Object.keys(G).forEach(function(Y){R(U,Y)?U[Y]=G[Y]:Ye(U,Y,G[Y])}))),Z});return l.mutate(w).then(function(B){for(var L=B.failures,q=B.results,G=B.numFailures,B=B.lastResult,U=0;U<k.length;++U){var H=(q||k)[U],Z=I[U];H==null?Z.onerror&&Z.onerror(L[U]):Z.onsuccess&&Z.onsuccess(w.type==="put"&&z[U]?w.values[U]:H)}return{failures:L,results:q,numFailures:G,lastResult:B}}).catch(function(B){return I.forEach(function(L){return L.onerror&&L.onerror(B)}),Promise.reject(B)})})}}})}})}};function go(i,s,l){try{if(!s||s.keys.length<i.length)return null;for(var u=[],d=0,h=0;d<s.keys.length&&h<i.length;++d)we(s.keys[d],i[h])===0&&(u.push(l?D(s.values[d]):s.values[d]),++h);return u.length===i.length?u:null}catch{return null}}var fa={stack:"dbcore",level:-1,create:function(i){return{table:function(s){var l=i.table(s);return o(o({},l),{getMany:function(u){if(!u.cache)return l.getMany(u);var d=go(u.keys,u.trans._cache,u.cache==="clone");return d?V.resolve(d):l.getMany(u).then(function(h){return u.trans._cache={keys:u.keys,values:u.cache==="clone"?D(h):h},h})},mutate:function(u){return u.type!=="add"&&(u.trans._cache=null),l.mutate(u)}})}}}};function bo(i,s){return i.trans.mode==="readonly"&&!!i.subscr&&!i.trans.explicit&&i.trans.db._options.cache!=="disabled"&&!s.schema.primaryKey.outbound}function yo(i,s){switch(i){case"query":return s.values&&!s.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var ha={stack:"dbcore",level:0,name:"Observability",create:function(i){var s=i.schema.name,l=new dt(i.MIN_KEY,i.MAX_KEY);return o(o({},i),{transaction:function(u,d,h){if(K.subscr&&d!=="readonly")throw new J.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(K.querier));return i.transaction(u,d,h)},table:function(u){var d=i.table(u),h=d.schema,g=h.primaryKey,w=h.indexes,y=g.extractKey,$=g.outbound,C=g.autoIncrement&&w.filter(function(E){return E.compound&&E.keyPath.includes(g.keyPath)}),_=o(o({},d),{mutate:function(E){function S(Y){return Y="idb://".concat(s,"/").concat(u,"/").concat(Y),B[Y]||(B[Y]=new dt)}var P,k,z,I=E.trans,B=E.mutatedParts||(E.mutatedParts={}),L=S(""),q=S(":dels"),G=E.type,Z=E.type==="deleteRange"?[E.range]:E.type==="delete"?[E.keys]:E.values.length<50?[yi(g,E).filter(function(Y){return Y}),E.values]:[],U=Z[0],H=Z[1],Z=E.trans._cache;return f(U)?(L.addKeys(U),(Z=G==="delete"||U.length===H.length?go(U,Z):null)||q.addKeys(U),(Z||H)&&(P=S,k=Z,z=H,h.indexes.forEach(function(Y){var te=P(Y.name||"");function de(me){return me!=null?Y.extractKey(me):null}function pe(me){return Y.multiEntry&&f(me)?me.forEach(function(Ct){return te.addKey(Ct)}):te.addKey(me)}(k||z).forEach(function(me,ft){var ue=k&&de(k[ft]),ft=z&&de(z[ft]);we(ue,ft)!==0&&(ue!=null&&pe(ue),ft!=null&&pe(ft))})}))):U?(H={from:(H=U.lower)!==null&&H!==void 0?H:i.MIN_KEY,to:(H=U.upper)!==null&&H!==void 0?H:i.MAX_KEY},q.add(H),L.add(H)):(L.add(l),q.add(l),h.indexes.forEach(function(Y){return S(Y.name).add(l)})),d.mutate(E).then(function(Y){return!U||E.type!=="add"&&E.type!=="put"||(L.addKeys(Y.results),C&&C.forEach(function(te){for(var de=E.values.map(function(ue){return te.extractKey(ue)}),pe=te.keyPath.findIndex(function(ue){return ue===g.keyPath}),me=0,Ct=Y.results.length;me<Ct;++me)de[me][pe]=Y.results[me];S(te.name).addKeys(de)})),I.mutatedParts=br(I.mutatedParts||{},B),Y})}}),w=function(S){var P=S.query,S=P.index,P=P.range;return[S,new dt((S=P.lower)!==null&&S!==void 0?S:i.MIN_KEY,(P=P.upper)!==null&&P!==void 0?P:i.MAX_KEY)]},j={get:function(E){return[g,new dt(E.key)]},getMany:function(E){return[g,new dt().addKeys(E.keys)]},count:w,query:w,openCursor:w};return c(j).forEach(function(E){_[E]=function(S){var P=K.subscr,k=!!P,z=bo(K,d)&&yo(E,S)?S.obsSet={}:P;if(k){var I=function(H){return H="idb://".concat(s,"/").concat(u,"/").concat(H),z[H]||(z[H]=new dt)},B=I(""),L=I(":dels"),P=j[E](S),k=P[0],P=P[1];if((E==="query"&&k.isPrimaryKey&&!S.values?L:I(k.name||"")).add(P),!k.isPrimaryKey){if(E!=="count"){var q=E==="query"&&$&&S.values&&d.query(o(o({},S),{values:!1}));return d[E].apply(this,arguments).then(function(H){if(E==="query"){if($&&S.values)return q.then(function(de){return de=de.result,B.addKeys(de),H});var Z=S.values?H.result.map(y):H.result;(S.values?B:L).addKeys(Z)}else if(E==="openCursor"){var Y=H,te=S.values;return Y&&Object.create(Y,{key:{get:function(){return L.addKey(Y.primaryKey),Y.key}},primaryKey:{get:function(){var de=Y.primaryKey;return L.addKey(de),de}},value:{get:function(){return te&&B.addKey(Y.primaryKey),Y.value}}})}return H})}L.add(l)}}return d[E].apply(this,arguments)}}),_}})}};function wo(i,s,l){if(l.numFailures===0)return s;if(s.type==="deleteRange")return null;var u=s.keys?s.keys.length:"values"in s&&s.values?s.values.length:1;return l.numFailures===u?null:(s=o({},s),f(s.keys)&&(s.keys=s.keys.filter(function(d,h){return!(h in l.failures)})),"values"in s&&f(s.values)&&(s.values=s.values.filter(function(d,h){return!(h in l.failures)})),s)}function wi(i,s){return l=i,((u=s).lower===void 0||(u.lowerOpen?0<we(l,u.lower):0<=we(l,u.lower)))&&(i=i,(s=s).upper===void 0||(s.upperOpen?we(i,s.upper)<0:we(i,s.upper)<=0));var l,u}function vo(i,s,j,u,d,h){if(!j||j.length===0)return i;var g=s.query.index,y=g.multiEntry,$=s.query.range,C=u.schema.primaryKey.extractKey,_=g.extractKey,w=(g.lowLevelIndex||g).extractKey,j=j.reduce(function(E,S){var P=E,k=[];if(S.type==="add"||S.type==="put")for(var z=new dt,I=S.values.length-1;0<=I;--I){var B,L=S.values[I],q=C(L);z.hasKey(q)||(B=_(L),(y&&f(B)?B.some(function(Y){return wi(Y,$)}):wi(B,$))&&(z.addKey(q),k.push(L)))}switch(S.type){case"add":var G=new dt().addKeys(s.values?E.map(function(te){return C(te)}):E),P=E.concat(s.values?k.filter(function(te){return te=C(te),!G.hasKey(te)&&(G.addKey(te),!0)}):k.map(function(te){return C(te)}).filter(function(te){return!G.hasKey(te)&&(G.addKey(te),!0)}));break;case"put":var U=new dt().addKeys(S.values.map(function(te){return C(te)}));P=E.filter(function(te){return!U.hasKey(s.values?C(te):te)}).concat(s.values?k:k.map(function(te){return C(te)}));break;case"delete":var H=new dt().addKeys(S.keys);P=E.filter(function(te){return!H.hasKey(s.values?C(te):te)});break;case"deleteRange":var Z=S.range;P=E.filter(function(te){return!wi(C(te),Z)})}return P},i);return j===i?i:(j.sort(function(E,S){return we(w(E),w(S))||we(C(E),C(S))}),s.limit&&s.limit<1/0&&(j.length>s.limit?j.length=s.limit:i.length===s.limit&&j.length<s.limit&&(d.dirty=!0)),h?Object.freeze(j):j)}function xo(i,s){return we(i.lower,s.lower)===0&&we(i.upper,s.upper)===0&&!!i.lowerOpen==!!s.lowerOpen&&!!i.upperOpen==!!s.upperOpen}function pa(i,s){return(function(l,u,d,h){if(l===void 0)return u!==void 0?-1:0;if(u===void 0)return 1;if((u=we(l,u))===0){if(d&&h)return 0;if(d)return 1;if(h)return-1}return u})(i.lower,s.lower,i.lowerOpen,s.lowerOpen)<=0&&0<=(function(l,u,d,h){if(l===void 0)return u!==void 0?1:0;if(u===void 0)return-1;if((u=we(l,u))===0){if(d&&h)return 0;if(d)return-1;if(h)return 1}return u})(i.upper,s.upper,i.upperOpen,s.upperOpen)}function ma(i,s,l,u){i.subscribers.add(l),u.addEventListener("abort",function(){var d,h;i.subscribers.delete(l),i.subscribers.size===0&&(d=i,h=s,setTimeout(function(){d.subscribers.size===0&&M(h,d)},3e3))})}var ga={stack:"dbcore",level:0,name:"Cache",create:function(i){var s=i.schema.name;return o(o({},i),{transaction:function(l,u,d){var h,g,y=i.transaction(l,u,d);return u==="readwrite"&&(g=(h=new AbortController).signal,d=function($){return function(){if(h.abort(),u==="readwrite"){for(var C=new Set,_=0,w=l;_<w.length;_++){var j=w[_],E=hn["idb://".concat(s,"/").concat(j)];if(E){var S=i.table(j),P=E.optimisticOps.filter(function(te){return te.trans===y});if(y._explicit&&$&&y.mutatedParts)for(var k=0,z=Object.values(E.queries.query);k<z.length;k++)for(var I=0,B=(G=z[k]).slice();I<B.length;I++)fi((U=B[I]).obsSet,y.mutatedParts)&&(M(G,U),U.subscribers.forEach(function(te){return C.add(te)}));else if(0<P.length){E.optimisticOps=E.optimisticOps.filter(function(te){return te.trans!==y});for(var L=0,q=Object.values(E.queries.query);L<q.length;L++)for(var G,U,H,Z=0,Y=(G=q[L]).slice();Z<Y.length;Z++)(U=Y[Z]).res!=null&&y.mutatedParts&&($&&!U.dirty?(H=Object.isFrozen(U.res),H=vo(U.res,U.req,P,S,U,H),U.dirty?(M(G,U),U.subscribers.forEach(function(te){return C.add(te)})):H!==U.res&&(U.res=H,U.promise=V.resolve({result:H}))):(U.dirty&&M(G,U),U.subscribers.forEach(function(te){return C.add(te)})))}}}C.forEach(function(te){return te()})}}},y.addEventListener("abort",d(!1),{signal:g}),y.addEventListener("error",d(!1),{signal:g}),y.addEventListener("complete",d(!0),{signal:g})),y},table:function(l){var u=i.table(l),d=u.schema.primaryKey;return o(o({},u),{mutate:function(h){var g=K.trans;if(d.outbound||g.db._options.cache==="disabled"||g.explicit||g.idbtrans.mode!=="readwrite")return u.mutate(h);var y=hn["idb://".concat(s,"/").concat(l)];return y?(g=u.mutate(h),h.type!=="add"&&h.type!=="put"||!(50<=h.values.length||yi(d,h).some(function($){return $==null}))?(y.optimisticOps.push(h),h.mutatedParts&&yr(h.mutatedParts),g.then(function($){0<$.numFailures&&(M(y.optimisticOps,h),($=wo(0,h,$))&&y.optimisticOps.push($),h.mutatedParts&&yr(h.mutatedParts))}),g.catch(function(){M(y.optimisticOps,h),h.mutatedParts&&yr(h.mutatedParts)})):g.then(function($){var C=wo(0,o(o({},h),{values:h.values.map(function(_,w){var j;return $.failures[w]?_:(_=(j=d.keyPath)!==null&&j!==void 0&&j.includes(".")?D(_):o({},_),Ye(_,d.keyPath,$.results[w]),_)})}),$);y.optimisticOps.push(C),queueMicrotask(function(){return h.mutatedParts&&yr(h.mutatedParts)})}),g):u.mutate(h)},query:function(h){if(!bo(K,u)||!yo("query",h))return u.query(h);var g=((C=K.trans)===null||C===void 0?void 0:C.db._options.cache)==="immutable",w=K,y=w.requery,$=w.signal,C=(function(S,P,k,z){var I=hn["idb://".concat(S,"/").concat(P)];if(!I)return[];if(!(P=I.queries[k]))return[null,!1,I,null];var B=P[(z.query?z.query.index.name:null)||""];if(!B)return[null,!1,I,null];switch(k){case"query":var L=B.find(function(q){return q.req.limit===z.limit&&q.req.values===z.values&&xo(q.req.query.range,z.query.range)});return L?[L,!0,I,B]:[B.find(function(q){return("limit"in q.req?q.req.limit:1/0)>=z.limit&&(!z.values||q.req.values)&&pa(q.req.query.range,z.query.range)}),!1,I,B];case"count":return L=B.find(function(q){return xo(q.req.query.range,z.query.range)}),[L,!!L,I,B]}})(s,l,"query",h),_=C[0],w=C[1],j=C[2],E=C[3];return _&&w?_.obsSet=h.obsSet:(w=u.query(h).then(function(S){var P=S.result;if(_&&(_.res=P),g){for(var k=0,z=P.length;k<z;++k)Object.freeze(P[k]);Object.freeze(P)}else S.result=D(P);return S}).catch(function(S){return E&&_&&M(E,_),Promise.reject(S)}),_={obsSet:h.obsSet,promise:w,subscribers:new Set,type:"query",req:h,dirty:!1},E?E.push(_):(E=[_],(j=j||(hn["idb://".concat(s,"/").concat(l)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[h.query.index.name||""]=E)),ma(_,E,y,$),_.promise.then(function(S){return{result:vo(S.result,h,j?.optimisticOps,u,_,g)}})}})}})}};function vr(i,s){return new Proxy(i,{get:function(l,u,d){return u==="db"?s:Reflect.get(l,u,d)}})}var Xt=(Ze.prototype.version=function(i){if(isNaN(i)||i<.1)throw new J.Type("Given version is not a positive number");if(i=Math.round(10*i)/10,this.idbdb||this._state.isBeingOpened)throw new J.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,i);var s=this._versions,l=s.filter(function(u){return u._cfg.version===i})[0];return l||(l=new this.Version(i),s.push(l),s.sort(oa),l.stores({}),this._state.autoSchema=!1,l)},Ze.prototype._whenReady=function(i){var s=this;return this.idbdb&&(this._state.openComplete||K.letThrough||this._vip)?i():new V(function(l,u){if(s._state.openComplete)return u(new J.DatabaseClosed(s._state.dbOpenError));if(!s._state.isBeingOpened){if(!s._state.autoOpen)return void u(new J.DatabaseClosed);s.open().catch(ae)}s._state.dbReadyPromise.then(l,u)}).then(i)},Ze.prototype.use=function(i){var s=i.stack,l=i.create,u=i.level,d=i.name;return d&&this.unuse({stack:s,name:d}),i=this._middlewares[s]||(this._middlewares[s]=[]),i.push({stack:s,create:l,level:u??10,name:d}),i.sort(function(h,g){return h.level-g.level}),this},Ze.prototype.unuse=function(i){var s=i.stack,l=i.name,u=i.create;return s&&this._middlewares[s]&&(this._middlewares[s]=this._middlewares[s].filter(function(d){return u?d.create!==u:!!l&&d.name!==l})),this},Ze.prototype.open=function(){var i=this;return un(We,function(){return ca(i)})},Ze.prototype._close=function(){var i=this._state,s=Sn.indexOf(this);if(0<=s&&Sn.splice(s,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}i.isBeingOpened||(i.dbReadyPromise=new V(function(l){i.dbReadyResolve=l}),i.openCanceller=new V(function(l,u){i.cancelOpen=u}))},Ze.prototype.close=function(l){var s=(l===void 0?{disableAutoOpen:!0}:l).disableAutoOpen,l=this._state;s?(l.isBeingOpened&&l.cancelOpen(new J.DatabaseClosed),this._close(),l.autoOpen=!1,l.dbOpenError=new J.DatabaseClosed):(this._close(),l.autoOpen=this._options.autoOpen||l.isBeingOpened,l.openComplete=!1,l.dbOpenError=null)},Ze.prototype.delete=function(i){var s=this;i===void 0&&(i={disableAutoOpen:!0});var l=0<arguments.length&&typeof arguments[0]!="object",u=this._state;return new V(function(d,h){function g(){s.close(i);var y=s._deps.indexedDB.deleteDatabase(s.name);y.onsuccess=Oe(function(){var $,C,_;$=s._deps,C=s.name,_=$.indexedDB,$=$.IDBKeyRange,ci(_)||C===or||li(_,$).delete(C).catch(ae),d()}),y.onerror=Mt(h),y.onblocked=s._fireOnBlocked}if(l)throw new J.InvalidArgument("Invalid closeOptions argument to db.delete()");u.isBeingOpened?u.dbReadyPromise.then(g):g()})},Ze.prototype.backendDB=function(){return this.idbdb},Ze.prototype.isOpen=function(){return this.idbdb!==null},Ze.prototype.hasBeenClosed=function(){var i=this._state.dbOpenError;return i&&i.name==="DatabaseClosed"},Ze.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Ze.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Ze.prototype,"tables",{get:function(){var i=this;return c(this._allTables).map(function(s){return i._allTables[s]})},enumerable:!1,configurable:!0}),Ze.prototype.transaction=function(){var i=function(s,l,u){var d=arguments.length;if(d<2)throw new J.InvalidArgument("Too few arguments");for(var h=new Array(d-1);--d;)h[d-1]=arguments[d];return u=h.pop(),[s,Cn(h),u]}.apply(this,arguments);return this._transaction.apply(this,i)},Ze.prototype._transaction=function(i,s,l){var u=this,d=K.trans;d&&d.db===this&&i.indexOf("!")===-1||(d=null);var h,g,y=i.indexOf("?")!==-1;i=i.replace("!","").replace("?","");try{if(g=s.map(function(C){if(C=C instanceof u.Table?C.name:C,typeof C!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return C}),i=="r"||i===Gr)h=Gr;else{if(i!="rw"&&i!=Qr)throw new J.InvalidArgument("Invalid transaction mode: "+i);h=Qr}if(d){if(d.mode===Gr&&h===Qr){if(!y)throw new J.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");d=null}d&&g.forEach(function(C){if(d&&d.storeNames.indexOf(C)===-1){if(!y)throw new J.SubTransaction("Table "+C+" not included in parent transaction.");d=null}}),y&&d&&!d.active&&(d=null)}}catch(C){return d?d._promise(null,function(_,w){w(C)}):Je(C)}var $=function C(_,w,j,E,S){return V.resolve().then(function(){var P=K.transless||K,k=_._createTransaction(w,j,_._dbSchema,E);if(k.explicit=!0,P={trans:k,transless:P},E)k.idbtrans=E.idbtrans;else try{k.create(),k.idbtrans._explicit=!0,_._state.PR1398_maxLoop=3}catch(B){return B.name===Ne.InvalidState&&_.isOpen()&&0<--_._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),_.close({disableAutoOpen:!1}),_.open().then(function(){return C(_,w,j,null,S)})):Je(B)}var z,I=et(S);return I&&kn(),P=V.follow(function(){var B;(z=S.call(k,k))&&(I?(B=nn.bind(null,null),z.then(B,B)):typeof z.next=="function"&&typeof z.throw=="function"&&(z=gi(z)))},P),(z&&typeof z.then=="function"?V.resolve(z).then(function(B){return k.active?B:Je(new J.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):P.then(function(){return z})).then(function(B){return E&&k._resolve(),k._completion.then(function(){return B})}).catch(function(B){return k._reject(B),Je(B)})})}.bind(null,this,h,g,d,l);return d?d._promise(h,$,"lock"):K.trans?un(K.transless,function(){return u._whenReady($)}):this._whenReady($)},Ze.prototype.table=function(i){if(!R(this._allTables,i))throw new J.InvalidTable("Table ".concat(i," does not exist"));return this._allTables[i]},Ze);function Ze(i,s){var l=this;this._middlewares={},this.verno=0;var u=Ze.dependencies;this._options=s=o({addons:Ze.addons,autoOpen:!0,indexedDB:u.indexedDB,IDBKeyRange:u.IDBKeyRange,cache:"cloned"},s),this._deps={indexedDB:s.indexedDB,IDBKeyRange:s.IDBKeyRange},u=s.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var d,h,g,y,$,C={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ae,dbReadyPromise:null,cancelOpen:ae,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:s.autoOpen};C.dbReadyPromise=new V(function(w){C.dbReadyResolve=w}),C.openCanceller=new V(function(w,j){C.cancelOpen=j}),this._state=C,this.name=i,this.on=In(this,"populate","blocked","versionchange","close",{ready:[xt,ae]}),this.on.ready.subscribe=_e(this.on.ready.subscribe,function(w){return function(j,E){Ze.vip(function(){var S,P=l._state;P.openComplete?(P.dbOpenError||V.resolve().then(j),E&&w(j)):P.onReadyBeingFired?(P.onReadyBeingFired.push(j),E&&w(j)):(w(j),S=l,E||w(function k(){S.on.ready.unsubscribe(j),S.on.ready.unsubscribe(k)}))})}}),this.Collection=(d=this,Bn(Js.prototype,function(z,k){this.db=d;var E=Qi,S=null;if(k)try{E=k()}catch(I){S=I}var P=z._ctx,k=P.table,z=k.hook.reading.fire;this._ctx={table:k,index:P.index,isPrimKey:!P.index||k.schema.primKey.keyPath&&P.index===k.schema.primKey.name,range:E,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:S,or:P.or,valueMapper:z!==fe?z:null}})),this.Table=(h=this,Bn(to.prototype,function(w,j,E){this.db=h,this._tx=E,this.name=w,this.schema=j,this.hook=h._allTables[w]?h._allTables[w].hook:In(null,{creating:[Ue,ae],reading:[vt,fe],updating:[Ft,ae],deleting:[Zt,ae]})})),this.Transaction=(g=this,Bn(ta.prototype,function(w,j,E,S,P){var k=this;this.db=g,this.mode=w,this.storeNames=j,this.schema=E,this.chromeTransactionDurability=S,this.idbtrans=null,this.on=In(this,"complete","error","abort"),this.parent=P||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new V(function(z,I){k._resolve=z,k._reject=I}),this._completion.then(function(){k.active=!1,k.on.complete.fire()},function(z){var I=k.active;return k.active=!1,k.on.error.fire(z),k.parent?k.parent._reject(z):I&&k.idbtrans&&k.idbtrans.abort(),Je(z)})})),this.Version=(y=this,Bn(la.prototype,function(w){this.db=y,this._cfg={version:w,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=($=this,Bn(so.prototype,function(w,j,E){if(this.db=$,this._ctx={table:w,index:j===":id"?null:j,or:E},this._cmp=this._ascending=we,this._descending=function(S,P){return we(P,S)},this._max=function(S,P){return 0<we(S,P)?S:P},this._min=function(S,P){return we(S,P)<0?S:P},this._IDBKeyRange=$._deps.IDBKeyRange,!this._IDBKeyRange)throw new J.MissingAPI})),this.on("versionchange",function(w){0<w.newVersion?console.warn("Another connection wants to upgrade database '".concat(l.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(l.name,"'. Closing db now to resume the delete request.")),l.close({disableAutoOpen:!1})}),this.on("blocked",function(w){!w.newVersion||w.newVersion<w.oldVersion?console.warn("Dexie.delete('".concat(l.name,"') was blocked")):console.warn("Upgrade '".concat(l.name,"' blocked by other connection holding version ").concat(w.oldVersion/10))}),this._maxKey=qn(s.IDBKeyRange),this._createTransaction=function(w,j,E,S){return new l.Transaction(w,j,E,l._options.chromeTransactionDurability,S)},this._fireOnBlocked=function(w){l.on("blocked").fire(w),Sn.filter(function(j){return j.name===l.name&&j!==l&&!j._state.vcFired}).map(function(j){return j.on("versionchange").fire(w)})},this.use(fa),this.use(ga),this.use(ha),this.use(ua),this.use(da);var _=new Proxy(this,{get:function(w,j,E){if(j==="_vip")return!0;if(j==="table")return function(P){return vr(l.table(P),_)};var S=Reflect.get(w,j,E);return S instanceof to?vr(S,_):j==="tables"?S.map(function(P){return vr(P,_)}):j==="_createTransaction"?function(){return vr(S.apply(this,arguments),_)}:S}});this.vip=_,u.forEach(function(w){return w(l)})}var xr,_t=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",ba=(vi.prototype.subscribe=function(i,s,l){return this._subscribe(i&&typeof i!="function"?i:{next:i,error:s,complete:l})},vi.prototype[_t]=function(){return this},vi);function vi(i){this._subscribe=i}try{xr={indexedDB:a.indexedDB||a.mozIndexedDB||a.webkitIndexedDB||a.msIndexedDB,IDBKeyRange:a.IDBKeyRange||a.webkitIDBKeyRange}}catch{xr={indexedDB:null,IDBKeyRange:null}}function $o(i){var s,l=!1,u=new ba(function(d){var h=et(i),g,y=!1,$={},C={},_={get closed(){return y},unsubscribe:function(){y||(y=!0,g&&g.abort(),w&&sn.storagemutated.unsubscribe(E))}};d.start&&d.start(_);var w=!1,j=function(){return Xr(S)},E=function(P){br($,P),fi(C,$)&&j()},S=function(){var P,k,z;!y&&xr.indexedDB&&($={},P={},g&&g.abort(),g=new AbortController,z=(function(I){var B=Pe();try{h&&kn();var L=tn(i,I);return L=h?L.finally(nn):L}finally{B&&Be()}})(k={subscr:P,signal:g.signal,requery:j,querier:i,trans:null}),Promise.resolve(z).then(function(I){l=!0,s=I,y||k.signal.aborted||($={},(function(B){for(var L in B)if(R(B,L))return;return 1})(C=P)||w||(sn(Nn,E),w=!0),Xr(function(){return!y&&d.next&&d.next(I)}))},function(I){l=!1,["DatabaseClosedError","AbortError"].includes(I?.name)||y||Xr(function(){y||d.error&&d.error(I)})}))};return setTimeout(j,0),_});return u.hasValue=function(){return l},u.getValue=function(){return s},u}var pn=Xt;function xi(i){var s=an;try{an=!0,sn.storagemutated.fire(i),mi(i,!0)}finally{an=s}}T(pn,o(o({},Te),{delete:function(i){return new pn(i,{addons:[]}).delete()},exists:function(i){return new pn(i,{addons:[]}).open().then(function(s){return s.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(i){try{return s=pn.dependencies,l=s.indexedDB,s=s.IDBKeyRange,(ci(l)?Promise.resolve(l.databases()).then(function(u){return u.map(function(d){return d.name}).filter(function(d){return d!==or})}):li(l,s).toCollection().primaryKeys()).then(i)}catch{return Je(new J.MissingAPI)}var s,l},defineClass:function(){return function(i){m(this,i)}},ignoreTransaction:function(i){return K.trans?un(K.transless,i):i()},vip:ui,async:function(i){return function(){try{var s=gi(i.apply(this,arguments));return s&&typeof s.then=="function"?s:V.resolve(s)}catch(l){return Je(l)}}},spawn:function(i,s,l){try{var u=gi(i.apply(l,s||[]));return u&&typeof u.then=="function"?u:V.resolve(u)}catch(d){return Je(d)}},currentTransaction:{get:function(){return K.trans||null}},waitFor:function(i,s){return s=V.resolve(typeof i=="function"?pn.ignoreTransaction(i):i).timeout(s||6e4),K.trans?K.trans.waitFor(s):s},Promise:V,debug:{get:function(){return Se},set:function(i){ze(i)}},derive:oe,extend:m,props:T,override:_e,Events:In,on:sn,liveQuery:$o,extendObservabilitySet:br,getByKeyPath:nt,setByKeyPath:Ye,delByKeyPath:function(i,s){typeof s=="string"?Ye(i,s,void 0):"length"in s&&[].map.call(s,function(l){Ye(i,l,void 0)})},shallowClone:Ht,deepClone:D,getObjectDiff:bi,cmp:we,asap:De,minKey:-1/0,addons:[],connections:Sn,errnames:Ne,dependencies:xr,cache:hn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(i){return parseInt(i)}).reduce(function(i,s,l){return i+s/Math.pow(10,2*l)})})),pn.maxKey=qn(pn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(sn(Nn,function(i){an||(i=new CustomEvent(ti,{detail:i}),an=!0,dispatchEvent(i),an=!1)}),addEventListener(ti,function(i){i=i.detail,an||xi(i)}));var An,an=!1,Eo=function(){};return typeof BroadcastChannel<"u"&&((Eo=function(){(An=new BroadcastChannel(ti)).onmessage=function(i){return i.data&&xi(i.data)}})(),typeof An.unref=="function"&&An.unref(),sn(Nn,function(i){an||An.postMessage(i)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(i){if(!Xt.disableBfCache&&i.persisted){Se&&console.debug("Dexie: handling persisted pagehide"),An?.close();for(var s=0,l=Sn;s<l.length;s++)l[s].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(i){!Xt.disableBfCache&&i.persisted&&(Se&&console.debug("Dexie: handling persisted pageshow"),Eo(),xi({all:new dt(-1/0,[[]])}))})),V.rejectionMapper=function(i,s){return!i||i instanceof Re||i instanceof TypeError||i instanceof SyntaxError||!i.name||!qe[i.name]?i:(s=new qe[i.name](s||i.message,i),"stack"in i&&Q(s,"stack",{get:function(){return this.inner.stack}}),s)},ze(Se),o(Xt,Object.freeze({__proto__:null,Dexie:Xt,liveQuery:$o,Entity:Ji,cmp:we,PropModSymbol:Yt,PropModification:Ln,replacePrefix:function(i,s){return new Ln({replacePrefix:[i,s]})},add:function(i){return new Ln({add:i})},remove:function(i){return new Ln({remove:i})},default:Xt,RangeSet:dt,mergeRanges:Hn,rangesOverlap:fo}),{default:Xt}),Xt})})(Pr)),Pr.exports}var Ga=Xa();const Ai=Va(Ga),Io=Symbol.for("Dexie"),Or=globalThis[Io]||(globalThis[Io]=Ai);if(Ai.semVer!==Or.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Ai.semVer} and ${Or.semVer}`);const{liveQuery:bs,mergeRanges:qd,rangesOverlap:Ud,RangeSet:Wd,cmp:Hd,Entity:Kd,PropModSymbol:Vd,PropModification:Yd,replacePrefix:Xd,add:Gd,remove:Qd}=Or,Qa="easydb";let Er=null;function Ja(){if(Er)return Er;const e=new Or(Qa);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),Er={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins")},Er}function Cr(e){return{async find(n){if(!n||Object.keys(n).length===0)return e.toArray();const r=Object.entries(n);return e.filter(o=>ys(o,r)).toArray()},async findOne(n){return await e.get(n)??null},async insert(n){return await e.add(n),n},async bulkInsert(n){return n.length===0?[]:(await e.bulkAdd(n),n)},async upsert(n){return await e.put(n),n},async patch(n,r){if(await e.update(n,r)===0)throw new Error(`patch: no doc with id=${n}`);const t=await e.get(n);if(!t)throw new Error(`patch: doc id=${n} vanished after update`);return t},async remove(n){await e.delete(n)},async bulkRemove(n){n.length!==0&&await e.bulkDelete(n)},subscribe(n){const o=bs(()=>e.toArray()).subscribe({next:t=>n(t)});return()=>o.unsubscribe()}}}function Za(e,n){return{async find(r){const o=e.where("tableId").equals(n);if(!r||Object.keys(r).length===0)return o.toArray();const t=Object.entries(r);return o.filter(a=>ys(a,t)).toArray()},async findOne(r){const o=await e.get(r);return o&&o.tableId===n?o:null},async insert(r){const o={...r,tableId:n};return await e.add(o),o},async bulkInsert(r){if(r.length===0)return[];const o=r.map(t=>({...t,tableId:n}));return await e.bulkAdd(o),o},async upsert(r){const o={...r,tableId:n};return await e.put(o),o},async patch(r,o){if(await e.update(r,o)===0)throw new Error(`row patch: no row ${r}`);const a=await e.get(r);if(!a)throw new Error(`row patch: row ${r} vanished after update`);return a},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},subscribe(r){const t=bs(()=>e.where("tableId").equals(n).toArray()).subscribe({next:a=>r(a)});return()=>t.unsubscribe()}}}function ys(e,n){for(const[r,o]of n)if(e[r]!==o)return!1;return!0}function el(e){return{workspaces:Cr(e.workspaces),tables:Cr(e.tables),settings:Cr(e.settings),plugins:Cr(e.plugins),rows:n=>Za(e.rows,n)}}function tl(){const e=new Map;return{on(n,r){let o=e.get(n);return o||(o=new Set,e.set(n,o)),o.add(r),()=>{o.delete(r)}},emit(n,r){const o=e.get(n);if(o)for(const t of o)try{t(r)}catch(a){console.error(`[event:${String(n)}] listener threw`,a)}}}}const xn=ct`
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
`;function $n(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const n=e.currentTarget;if(!(n instanceof HTMLElement))return;const r=n.querySelector("form");r&&(e.preventDefault(),r.requestSubmit())}const Bo=new WeakSet;function En(e,n){if(Bo.has(n))return;Bo.add(n);let r=0,o=0,t=0,a=0,c=!1;n.style.cursor="grab",n.style.touchAction="none",n.style.userSelect="none",n.addEventListener("pointerdown",m=>{if(m.target.closest("button, input, textarea, select, a, label"))return;c=!0,r=m.clientX,o=m.clientY;const A=e.getBoundingClientRect();t=A.left,a=A.top,n.setPointerCapture(m.pointerId),n.style.cursor="grabbing"}),n.addEventListener("pointermove",m=>{if(!c)return;const F=m.clientX-r,A=m.clientY-o,R=-e.offsetWidth+80,T=window.innerWidth-80,N=0,Q=window.innerHeight-40,oe=Math.max(R,Math.min(T,t+F)),Ke=Math.max(N,Math.min(Q,a+A));e.style.position="fixed",e.style.left=`${oe}px`,e.style.top=`${Ke}px`,e.style.margin="0"});const f=m=>{if(c){c=!1;try{n.releasePointerCapture(m.pointerId)}catch{}n.style.cursor="grab"}};n.addEventListener("pointerup",f),n.addEventListener("pointercancel",f)}var nl=Object.defineProperty,rl=Object.getOwnPropertyDescriptor,ws=(e,n,r,o)=>{for(var t=o>1?void 0:o?rl(n,r):n,a=e.length-1,c;a>=0;a--)(c=e[a])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&nl(n,r,t),t};let Pt=class extends tt{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const n=this.current;n&&(n.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),Pt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Pt.instance===this&&(Pt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&En(this.dialogEl,e)}alert(e,n="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:n,message:e,resolve:r}})}async confirm(e,n="Confirm"){return await this.choice(e,["Yes","No"],n)==="Yes"}prompt(e,n="",r="Input"){return this.enqueue(o=>{this.current={kind:"prompt",title:r,message:e,value:n,resolve:o}})}choice(e,n,r="Choose"){return this.enqueue(o=>{this.current={kind:"choice",title:r,message:e,options:n,resolve:o}})}enqueue(e){return new Promise(n=>{const r=()=>{e(n),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(e){const n=this.current;n&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{n.kind==="alert"?n.resolve():n.resolve(e);const r=this.queue.shift();r&&r()}))}render(){const e=this.current;return X`
      <dialog @cancel=${this.onCancel} @keydown=${$n}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):He}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return X`
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
        `;case"prompt":return X`
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
                @input=${n=>{this.current?.kind==="prompt"&&(this.current={...this.current,value:n.target.value})}}
              />
            </div>
          </form>
        `;case"choice":return X`
          <div class="dialog-header">
            <h2>${e.title}</h2>
            <div class="header-actions">
              <button class="ghost" @click=${()=>this.closeAndResolve(null)}>Cancel</button>
            </div>
          </div>
          <div class="dialog-body">
            ${e.message?X`<p class="message">${e.message}</p>`:He}
            <div class="choices">
              ${e.options.map(n=>X`<button class="choice" @click=${()=>this.closeAndResolve(n)}>
                    ${n}
                  </button>`)}
            </div>
          </div>
        `}}};Pt.instance=null;Pt.styles=[xn,ct`
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
    `];ws([ne()],Pt.prototype,"current",2);Pt=ws([pt("host-dialogs")],Pt);const Jt=ct`
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
`;var il=Object.defineProperty,ol=Object.getOwnPropertyDescriptor,vs=(e,n,r,o)=>{for(var t=o>1?void 0:o?ol(n,r):n,a=e.length-1,c;a>=0;a--)(c=e[a])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&il(n,r,t),t};let Gt=class extends tt{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),Gt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Gt.instance===this&&(Gt.instance=null)}show(e,n){const r={id:this.nextId++,kind:n?.kind??"info",message:e,...n?.title?{title:n.title}:{}};this.toasts=[...this.toasts,r];const o=n?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),o)}dismiss(e){const n=this.toasts.find(r=>r.id===e);n?.timer!=null&&window.clearTimeout(n.timer),this.toasts=this.toasts.filter(r=>r.id!==e)}render(){return X`
      ${this.toasts.map(e=>X`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${al(e.kind)}</span>
            <span class="body">
              ${e.title?X`<strong>${e.title}</strong>`:""}${sl(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};Gt.instance=null;Gt.styles=[Jt,ct`
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
    `];vs([ne()],Gt.prototype,"toasts",2);Gt=vs([pt("toast-host")],Gt);function sl(e){const n=/(https?:\/\/[^\s)]+)/g,r=[];let o=0,t;for(;(t=n.exec(e))!==null;)t.index>o&&r.push(e.slice(o,t.index)),r.push({url:t[0]}),o=t.index+t[0].length;return o<e.length&&r.push(e.slice(o)),r.length===0?e:r.map(a=>typeof a=="string"?a:X`<a href=${a.url} target="_blank" rel="noopener noreferrer">${a.url}</a>`)}function al(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function ll(){return{headerButtons:[],footerButtons:[],tableButtons:[],importers:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map}}function bn(e,n){return e.push(n),()=>{const r=e.indexOf(n);r>=0&&e.splice(r,1)}}function Ci(e,n,r){return e.set(n,r),()=>{e.get(n)===r&&e.delete(n)}}function cl(e){return{registerHeaderButton:n=>bn(e.headerButtons,n),registerFooterButton:n=>bn(e.footerButtons,n),registerTableButton:n=>bn(e.tableButtons,n),registerImporter:n=>bn(e.importers,n),registerExporter:n=>bn(e.exporters,n),registerUrlSource:n=>bn(e.urlSources,n),registerDropHandler:n=>bn(e.dropHandlers,n),registerCellRenderer:(n,r)=>Ci(e.cellRenderers,n,r),registerRowRenderer:(n,r)=>Ci(e.rowRenderers,n,r),registerTableRenderer:(n,r)=>Ci(e.tableRenderers,n,r),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},dialogs:ul}}const ul={async alert(e,n){const r=Pt.instance;if(r)return r.alert(e,n);window.alert(e)},async confirm(e,n){const r=Pt.instance;return r?r.confirm(e,n):window.confirm(e)},async prompt(e,n,r){const o=Pt.instance;return o?o.prompt(e,n,r):window.prompt(e,n)??null},async choice(e,n,r){const o=Pt.instance;if(o)return o.choice(e,n,r);const t=window.prompt(`${e}

Options: ${n.join(", ")}`);return t&&n.includes(t)?t:null},toast(e,n){const r=Gt.instance;r?r.show(e,n):console.log(`[toast:${n?.kind??"info"}]`,n?.title??"",e)}};function dl(e){const n=cl(e.registries),r={open(o){return console.warn("[host] windows.open is stubbed until Phase 5",o.id),{id:o.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:n,windows:r,backend:{fetch:async(o,t)=>{const a=await fl(e.store),c=t?.body instanceof ArrayBuffer;if(!a||c)return globalThis.fetch(o,t);const f={url:o};return t?.method&&(f.method=t.method),t?.headers&&(f.headers=t.headers),typeof t?.body=="string"&&(f.body=t.body),globalThis.fetch(`${a}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)})},async saveFile(o,t,a){const c=typeof t=="string"?new Blob([t],{type:a??"application/octet-stream"}):t,f=URL.createObjectURL(c),m=document.createElement("a");m.href=f,m.download=o,m.rel="noopener",document.body.appendChild(m),m.click(),m.remove(),setTimeout(()=>URL.revokeObjectURL(f),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function fl(e){const r=(await e.settings.findOne("server-sync:url"))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}const hl={name:"csv-import",version:"0.1.0",description:"Drag-and-drop CSV files to create typed tables.",author:"easyDBAccess built-ins"};function pl(e){e.ui.registerImporter(ml),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async n=>{const o=_l(n).filter(Pl);if(o.length===0)return!1;n.preventDefault();for(const t of o)await gl(e,t);return!0})}const ml={id:"csv",label:"CSV",accept:[".csv","text/csv"],async parse(e){const n=typeof e=="string"?e:await e.text();return Lr(n)}};async function gl(e,n){const r=e.workspaceId();if(!r)throw new Error("csv-import: no active workspace");const o=await n.text(),t=n.name.replace(/\.csv$/i,"")||"imported",a=(await e.store.tables.find()).find(A=>A.workspaceId===r&&A.name===t);let c,f;if(a){const A=await e.ui.dialogs.choice(`A table named "${t}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!A)return;A==="Append rows"?(f="append",c=a.id):A==="Overwrite rows"?(f="overwrite",c=a.id):(f="new",c=kr())}else f="new",c=kr();e.events.emit("import:before",{source:"csv",tableId:c});let m;if(f==="new"){const A=Lr(o),R=a?`${t} (${Date.now().toString(36)})`:t;await e.store.tables.insert({id:c,workspaceId:r,name:R,code:ji(R),columns:A.columns,view:"table",updatedAt:Date.now()}),m=A.rows.map(T=>({id:kr(),tableId:c,data:T,updatedAt:Date.now()}))}else{const A=a.columns;if(m=xs(o).rows.map(T=>{const N={};for(let Q=0;Q<A.length;Q++){const oe=A[Q];N[oe.field]=Cs(T[Q]??"",oe.type)}return{id:kr(),tableId:c,data:N,updatedAt:Date.now()}}),f==="overwrite"){const T=e.store.rows(c),N=await T.find();await T.bulkRemove(N.map(Q=>Q.id))}}await e.store.rows(c).bulkInsert(m),e.events.emit("import:after",{source:"csv",tableId:c,rowCount:m.length})}function xs(e){const n=e.replace(/﻿/,""),r=$s(n),o=Es(n,r);if(o.length===0)return{header:[],rows:[]};const t=o[0],a=o.slice(1).filter(c=>!(c.length===1&&c[0]===""));return{header:t,rows:a}}function Lr(e){const n=e.replace(/﻿/,""),r=$s(n),o=Es(n,r);if(o.length===0)return{columns:[],rows:[]};const t=o[0],a=o.slice(1).filter(T=>!(T.length===1&&T[0]==="")),c=t.map((T,N)=>wl(T,N)),f=c.map(T=>T.field),m=a.map(T=>{const N={};for(let Q=0;Q<f.length;Q++)N[f[Q]]=T[Q]??"";return N}),F=c.map((T,N)=>T.type?T.type:vl(m.map(Q=>Q[f[N]]??"").filter(Q=>Q.length>0))),A=c.map((T,N)=>{const Q=F[N]??"string",oe={field:T.field,label:T.label,type:Q},Ke=yl(Q),ke=T.renderer??Ke;return ke&&(oe.renderer=ke),T.default!==void 0&&(oe.default=T.default),T.max!=null&&(oe.max=T.max),T.unique&&(oe.unique=!0),T.notnull&&(oe.notnull=!0),T.hidden&&(oe.hidden=!0),oe}),R=m.map(T=>{const N={};for(let Q=0;Q<f.length;Q++){const oe=f[Q],Ke=F[Q]??"string";N[oe]=Cs(T[oe]??"",Ke)}return N});return{columns:A,rows:R}}const bl=new Set(["string","number","boolean","date","datetime"]),Lo={color:"color",image:"image"};function yl(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function wl(e,n){const r=e.trim();if(!r.includes(":"))return{field:ji(r||`col_${n+1}`),label:r||`Column ${n+1}`};const o=r.split(":"),t=ji(o[0]||`col_${n+1}`),a=(o[1]??o[0]??"").trim()||t,c={field:t,label:a},f=(o[2]??"").trim();f&&(bl.has(f)?c.type=f:Lo[f]&&(c.type="string",c.renderer=Lo[f]));const m=(o[3]??"").trim();m&&(c.default=m);const F=(o[4]??"").trim();if(F){const R=Number(F);Number.isFinite(R)&&R>0&&(c.max=R)}const A=(o[5]??"").toLowerCase();return A.includes("u")&&(c.unique=!0),A.includes("n")&&(c.notnull=!0),A.includes("h")&&(c.hidden=!0),c}function $s(e){const n=e.split(/\r?\n/).slice(0,5).join(`
`),r={",":0,";":0,"	":0};for(const a of n)a in r&&(r[a]+=1);let o=",",t=-1;for(const a of[",",";","	"])(r[a]??0)>t&&(o=a,t=r[a]??0);return o}function Es(e,n){const r=[];let o=[],t="",a=!1;for(let c=0;c<e.length;c++){const f=e[c];a?f==='"'?e[c+1]==='"'?(t+='"',c++):a=!1:t+=f:f==='"'?a=!0:f===n?(o.push(t),t=""):f===`
`||f==="\r"?(f==="\r"&&e[c+1]===`
`&&c++,o.push(t),r.push(o),o=[],t=""):t+=f}return(t.length>0||o.length>0)&&(o.push(t),r.push(o)),r}function vl(e){return e.length===0?"string":e.every($l)?"boolean":e.every(El)?"number":e.every(kl)?"datetime":e.every(Cl)?"date":"string"}const xl=/^(true|false|yes|no|0|1)$/i;function $l(e){return xl.test(e.trim())}function El(e){const n=e.trim();if(n==="")return!1;const r=Number(n);return Number.isFinite(r)}function Cl(e){const n=e.trim();return n===""||/^\d+$/.test(n)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(n)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(n))}function kl(e){const n=e.trim();return n===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(n)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(n))}function Cs(e,n){const r=e.trim();switch(n){case"number":{if(r==="")return null;const o=Number(r);return Number.isFinite(o)?o:r}case"boolean":return r===""?null:/^(true|yes|1)$/i.test(r);case"date":return ks(r);case"datetime":return Sl(r);default:return e}}function ks(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const n=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(n){let o=parseInt(n[1],10),t=parseInt(n[2],10);const a=n[3];let c=parseInt(a,10);a.length===2&&(c+=2e3);let f,m;return o>12?(f=o,m=t):t>12?(m=o,f=t):(f=o,m=t),`${c.toString().padStart(4,"0")}-${m.toString().padStart(2,"0")}-${f.toString().padStart(2,"0")}`}const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toISOString().slice(0,10)}function Sl(e){if(e==="")return"";const n=e.replace(/\s+/,"T"),r=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(n);if(r)return`${r[1]}T${r[2].padStart(5,"0")}`;const o=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(o)return`${ks(`${o[1]}/${o[2]}/${o[3]}`)}T${o[4].padStart(5,"0")}`;const t=new Date(e);if(!Number.isNaN(t.getTime())){const a=t.toISOString();return`${a.slice(0,10)}T${a.slice(11,16)}`}return e}function _l(e){const n=e.dataTransfer;if(!n)return[];if(n.files&&n.files.length>0)return Array.from(n.files);if(n.items){const r=[];for(const o of Array.from(n.items))if(o.kind==="file"){const t=o.getAsFile();t&&r.push(t)}return r}return[]}function Pl(e){return!!(/\.csv$/i.test(e.name)||e.type==="text/csv"||e.type==="application/csv")}function ji(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function kr(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Al=Object.freeze(Object.defineProperty({__proto__:null,init:pl,meta:hl,parseCsv:Lr,parseCsvRaw:xs},Symbol.toStringTag,{value:"Module"})),jl={name:"csv-export",version:"0.1.0",description:"Export a single table as a .csv file via a per-table button.",author:"easyDBAccess built-ins"},Tl={id:"csv",label:"CSV",extension:".csv",async serialize(e,n){return Ni(e,n)}};function Fl(e){e.ui.registerExporter(Tl),e.ui.registerTableButton({id:"csv-export:download",label:"CSV",icon:"file_download",tooltip:"Download this table as a .csv file",onClick:async(n,r)=>{const o=await n.store.tables.findOne(r.tableId);if(!o)return;const t=await n.store.rows(o.id).find(),a=Ni(o,t);await n.backend.saveFile(`${o.code||o.name||"table"}.csv`,a,"text/csv")}})}function Ni(e,n){const r=e.columns.map(a=>a.field),o=e.columns.map(a=>Mo(a.label??a.field)),t=n.map(a=>r.map(c=>Mo(Ol(a.data[c]))).join(","));return[o.join(","),...t].join(`\r
`)}function Ol(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function Mo(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const Dl=Object.freeze(Object.defineProperty({__proto__:null,init:Fl,meta:jl,serializeCsv:Ni},Symbol.toStringTag,{value:"Module"})),Rl={name:"json-import",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"easyDBAccess built-ins"};function zl(e){e.ui.registerImporter(Il),e.ui.registerDropHandler(async n=>{const o=Wl(n).filter(Hl);if(o.length===0)return!1;n.preventDefault();for(const t of o)await Bl(e,t);return!0})}const Il={id:"json",label:"JSON",accept:[".json",".db.json","application/json"],async parse(e){const n=typeof e=="string"?e:await e.text(),r=JSON.parse(n),t=Mr(r,"imported")[0];return{columns:t?.columns??[],rows:t?.rows??[]}}};async function Bl(e,n){await qi(e,await n.text(),n.name)}async function qi(e,n,r){const o=e.workspaceId();if(!o)throw new Error("json-import: no active workspace");let t;try{t=JSON.parse(n)}catch(T){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${r}: ${T.message}`)});return}const a=r.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",c=Mr(t,a);if(c.length===0)return;const f=(await e.store.tables.find()).filter(T=>T.workspaceId===o),m=new Set(c.map(T=>T.name)),F=f.filter(T=>m.has(T.name));let A;if(F.length===0&&c.length===1)A="append-new";else{const T=F.length>0?[`Overwrite matching (${F.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],N=await e.ui.dialogs.choice(`Importing ${c.length} table${c.length===1?"":"s"} from "${r}".${F.length>0?`

${F.length} table${F.length===1?"":"s"} share a name with existing data.`:""}`,T,"JSON import");if(!N)return;N.startsWith("Overwrite matching")?A="overwrite-matching":N==="Replace entire workspace"?A="replace-workspace":A="append-new"}if(A==="replace-workspace")for(const T of f){const N=e.store.rows(T.id),Q=await N.find();await N.bulkRemove(Q.map(oe=>oe.id)),await e.store.tables.remove(T.id)}const R=new Map(f.map(T=>[T.name,T]));for(const T of c){let N;const Q=A==="overwrite-matching"?R.get(T.name):void 0;if(Q){N=Q.id;const ke=e.store.rows(N),he=await ke.find();await ke.bulkRemove(he.map(_e=>_e.id)),await e.store.tables.patch(N,{columns:T.columns,...T.windowGeometry?{windowGeometry:T.windowGeometry}:{},...T.sortColumn?{sortColumn:T.sortColumn,sortAsc:T.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},updatedAt:Date.now()})}else N=Wo(),e.events.emit("import:before",{source:"json",tableId:N}),await e.store.tables.insert({id:N,workspaceId:o,name:T.name,code:Kl(T.name),columns:T.columns,view:"table",...T.windowGeometry?{windowGeometry:T.windowGeometry}:{},...T.sortColumn?{sortColumn:T.sortColumn,sortAsc:T.sortAsc??!0}:{},updatedAt:Date.now()});const oe=e.store.rows(N),Ke=T.rows.map(ke=>({id:Wo(),tableId:N,data:ke,updatedAt:Date.now()}));await oe.bulkInsert(Ke),e.events.emit("import:after",{source:"json",tableId:N,rowCount:T.rows.length})}}function Mr(e,n){if(Dt(e)&&No(e))return qo(e);if(Dt(e)&&Array.isArray(e.tables)){const r=e,o=[];for(const t of r.tables){if(Ml(t)){const a=t,c=Dt(a.windowGeometry)?a.windowGeometry:void 0,f=typeof a.sortColumn=="string"?a.sortColumn:void 0,m=typeof a.sortAsc=="boolean"?a.sortAsc:void 0;o.push({name:String(t.name),columns:t.columns.map(Nl),rows:Array.isArray(t.rows)?t.rows.filter(Dt):[],...c?{windowGeometry:c}:{},...f?{sortColumn:f,sortAsc:m??!0}:{}});continue}Dt(t)&&No(t)&&o.push(...qo(t))}return o}if(Array.isArray(e)){const r=e.filter(Dt);return r.length===0?[]:[{name:n,...Uo(r)}]}return Dt(e)?[{name:n,...Uo([e])}]:[]}function No(e){for(const[n,r]of Object.entries(e)){if(!/\.table\.json$/.test(n)||!Dt(r))continue;const o=r;if(Array.isArray(o.dataArray)&&Array.isArray(o.columns))return!0}return!1}function qo(e){const n=[];for(const[r,o]of Object.entries(e)){if(!/\.table\.json$/.test(r)||!Dt(o))continue;const t=o;if(!Array.isArray(t.dataArray)||!Array.isArray(t.columns))continue;const a=r.replace(/\.table\.json$/,""),c=t.columns.map(A=>Ll(A)),f=c.map(A=>A.field),m=t.dataArray.filter(A=>Array.isArray(A)).map(A=>{const R={};for(let T=0;T<f.length;T++)R[f[T]]=A[T];return R}),F={name:a,columns:c,rows:m};if(t.elementRect&&typeof t.elementRect.x=="number"&&typeof t.elementRect.y=="number"){const A=t.elementRect;F.windowGeometry={x:A.x,y:A.y,w:A.width??600,h:A.height??400,z:A.zIndex??100,minimized:!!A.minimized,maximized:!!A.maximized}}typeof t.sortColumn=="number"&&t.sortColumn>=0&&t.sortColumn<f.length&&(F.sortColumn=f[t.sortColumn],F.sortAsc=(t.sortDirection??"asc")!=="desc"),n.push(F)}return n}function Ll(e){const n=String(e.field??"col"),r=String(e.name??n),o=typeof e.type=="string"?e.type:"string",t={field:n,label:r,type:o};return e.isUnique&&(t.unique=!0),e.isNotNull&&(t.notnull=!0),t}function Ml(e){return Dt(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function Nl(e){if(!Dt(e))return{field:"col",label:"Col",type:"string"};const n=e,r=String(n.field??"col");let o=typeof n.type=="string"?n.type:"string",t=typeof n.renderer=="string"?n.renderer:void 0;(o==="color"||o==="image")&&(t=t??o,o="string");const a={field:r,label:String(n.label??r),type:o};return t&&(a.renderer=t),typeof n.script=="string"&&(a.script=n.script),a}function Uo(e){const n=new Set;for(const t of e)for(const a of Object.keys(t))n.add(a);return{columns:Array.from(n).map(t=>({field:t,label:t,type:ql(e.map(a=>a[t]))})),rows:e}}function ql(e){const n=e.filter(r=>r!=null&&r!=="");return n.length===0?"string":n.every(r=>typeof r=="boolean")?"boolean":n.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":n.every(r=>typeof r=="string"&&Ul(r))?"date":"string"}function Ul(e){if(/^\d+$/.test(e))return!1;const n=new Date(e);return!Number.isNaN(n.getTime())}function Dt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Wl(e){const n=e.dataTransfer;if(!n)return[];if(n.files&&n.files.length>0)return Array.from(n.files);if(n.items){const r=[];for(const o of Array.from(n.items))if(o.kind==="file"){const t=o.getAsFile();t&&r.push(t)}return r}return[]}function Hl(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}function Kl(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Wo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Vl=Object.freeze(Object.defineProperty({__proto__:null,importJsonText:qi,init:zl,meta:Rl,parsedToTables:Mr},Symbol.toStringTag,{value:"Module"}));class Nr extends Error{constructor(n,r){const o=n?.error||n?.errors&&n.errors.join("; ")||"Datasette request failed";super(o),this.name="DatasetteError",this.status=r??n?.status,this.errors=n?.errors||(n?.error?[n.error]:[])}}function Ui(e){const n=new URL(String(e).trim());n.pathname=n.pathname.replace(/\.(json|csv)$/i,"");const r=n.pathname.split("/").filter(Boolean),o={};for(const[f,m]of n.searchParams)o[f]=m;let t,a=null,c=null;if(r.length>=2){c=decodeURIComponent(r[r.length-1]),a=decodeURIComponent(r[r.length-2]);const f=r.slice(0,r.length-2).join("/");t=n.origin+(f?"/"+f:"")}else r.length===1&&(a=decodeURIComponent(r[0])),t=n.origin;return{base:t,db:a,table:c,query:o}}function Dr(e,n={}){const r=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[o,t]of Object.entries({...e.query,...n}))t!=null&&r.searchParams.set(o,String(t));return r.toString()}function Yl(e){const n=[],r=t=>typeof t=="number"&&Number.isFinite(t)?t:null,o=e?.tables;if(Array.isArray(o)){for(const t of o)if(typeof t=="string")n.push({name:t,count:null});else if(t&&typeof t=="object"){if(t.hidden===!0)continue;typeof t.name=="string"&&n.push({name:t.name,count:r(t.count)})}}else if(o&&typeof o=="object")for(const[t,a]of Object.entries(o))a&&typeof a=="object"&&a.hidden===!0||n.push({name:t,count:a&&typeof a=="object"?r(a.count):null});return n}function Xl(e,n){const r=new URL(e);for(const[o,t]of Object.entries(n))t!=null&&!r.searchParams.has(o)&&r.searchParams.set(o,String(t));return r.toString()}function Gl(e){const n=e?.next!=null?String(e.next):null,r=e?.next_url??null;return{rows:Array.isArray(e?.rows)?e.rows:[],nextUrl:r,nextToken:n,hasMore:r!=null||n!=null,truncated:e?.truncated===!0}}function Ql(e,n=""){const r=String(e||"").toUpperCase();return r.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(n)?"boolean":"number":r.includes("REAL")||r.includes("FLOA")||r.includes("DOUB")||r.includes("NUM")||r.includes("DEC")?"number":r.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(n)?"datetime":"string"}function Jl(e){const n=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],r=Array.isArray(e?.columns)?e.columns.slice():[],o={},t=e?.column_details;if(Array.isArray(t))for(const f of t)o[f.column??f.name]=f;else t&&typeof t=="object"&&Object.assign(o,t);for(const f of r)f in o||(o[f]={});return{columns:(r.length?r:Object.keys(o)).map(f=>{const m=o[f]||{},F=m.is_pk===!0||m.is_pk===1||n.includes(f),A={field:f,label:Ss(f),type:Ql(m.sqlite_type??m.type,f)};return(m.notnull===!0||m.notnull===1||F)&&(A.notnull=!0),F&&(A.unique=!0),m.hidden===!0&&(A.hidden=!0),A}),pks:n}}function Ss(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,n=>n.toUpperCase()).trim()}function Ho(e,n=[]){const r=[],o=new Set;for(const t of e)for(const a of Object.keys(t))o.has(a)||(o.add(a),r.push(a));return r.map(t=>{const a={field:t,label:Ss(t),type:Zl(e.map(c=>c[t]),t)};return n.includes(t)&&(a.unique=!0,a.notnull=!0),a})}function Zl(e,n){const r=e.filter(o=>o!=null&&o!=="");return r.length===0?"string":r.every(o=>typeof o=="boolean")?"boolean":r.every(o=>typeof o=="number"&&Number.isFinite(o))?"number":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(n)&&r.every(o=>!Number.isNaN(new Date(String(o)).getTime()))?"datetime":"string"}async function ec(e,n){const r=Dr(n,{_shape:"objects",_size:0,_extra:"columns,column_details,primary_keys,count"}),o=await e(r),t=await o.json();if(t&&t.ok===!1)throw new Nr(t,o.status);const{columns:a,pks:c}=Jl(t);return{columns:a,pks:c,count:t?.count??null,raw:t}}async function tc(e,n,r={}){const o=r.maxRows??1e4,a={_shape:"objects",_size:r.pageSize??"max",...r.extraParams||{}};let c=Dr(n,a);const f=[];let m=!1,F=!1,A=0;for(;c;){const R=await e(c),T=await R.json();if(T&&T.ok===!1)throw new Nr(T,R.status);const N=Gl(T);f.push(...N.rows),m=m||N.truncated,A+=1,(N.nextUrl||N.nextToken)&&f.length<o?c=N.nextUrl?Xl(N.nextUrl,{_shape:"objects"}):Dr(n,{...a,_next:N.nextToken}):(F=N.nextUrl!=null||N.nextToken!=null,c=null)}return{rows:f,truncated:m,hasMore:F,pages:A}}var nc=Object.defineProperty,rc=Object.getOwnPropertyDescriptor,Zn=(e,n,r,o)=>{for(var t=o>1?void 0:o?rc(n,r):n,a=e.length-1,c;a>=0;a--)(c=e[a])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&nc(n,r,t),t};function ic(e){return e==null?"? rows":`${e.toLocaleString()} row${e===1?"":"s"}`}function Ko(e){return e==null?"…":e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(e<10240?1:0)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}let At=class extends tt{constructor(){super(...arguments),this.dbName="",this.items=[],this.selected=new Set,this.renameMode=new Set,this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.selected.size===0)return;const n=this.items.filter(r=>this.selected.has(r.name)).map(r=>({table:r.name,overwrite:r.exists&&!this.renameMode.has(r.name)}));this.finish(n)}}connectedCallback(){super.connectedCallback(),At.instance=this}disconnectedCallback(){super.disconnectedCallback(),At.instance===this&&(At.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&En(this.dialogEl,e)}open(e,n,r){return this.dbName=e,this.items=n.map(o=>({...o})),this.selected=new Set(n.map(o=>o.name)),this.renameMode=new Set,new Promise(o=>{this.resolveFn=o,this.updateComplete.then(()=>{this.dialogEl?.showModal(),r&&this.runEstimates(r)})})}runEstimates(e){this.items.forEach((n,r)=>{n.bytes==null&&e(n.name).then(o=>{this.items=this.items.map((t,a)=>a===r?{...t,bytes:o}:t)}).catch(()=>{})})}finish(e){this.dialogEl?.close();const n=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>n?.(e))}toggle(e,n){const r=new Set(this.selected);n?r.add(e):r.delete(e),this.selected=r}toggleAll(e){this.selected=e?new Set(this.items.map(n=>n.name)):new Set}setMode(e,n){const r=new Set(this.renameMode);n==="rename"?r.add(e):r.delete(e),this.renameMode=r}render(){const e=this.items.length>0&&this.selected.size===this.items.length,n=this.items.filter(t=>this.selected.has(t.name)),r=n.reduce((t,a)=>t+(a.rows??0),0),o=n.some(t=>t.bytes==null)?null:n.reduce((t,a)=>t+(a.bytes??0),0);return X`
      <dialog @cancel=${this.onCancel} @keydown=${$n}>
        <button type="button" class="close-x" title="Close" @click=${()=>this.finish(null)}>
          ×
        </button>
        <form @submit=${this.submit}>
          <div class="dialog-header">
            <h2>Import tables from ${this.dbName}</h2>
            <div class="header-actions">
              <button type="button" class="ghost" @click=${()=>this.finish(null)}>Cancel</button>
              <button type="submit" class="primary" ?disabled=${this.selected.size===0}>
                Import ${this.selected.size}/${this.items.length}
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
              ${this.items.map(t=>X`
                  <label class="row">
                    <input
                      type="checkbox"
                      data-table=${t.name}
                      .checked=${this.selected.has(t.name)}
                      @change=${a=>this.toggle(t.name,a.target.checked)}
                    />
                    <span class="name" title=${t.name}>${t.name}</span>
                    <span class="size">${ic(t.rows)} · ${Ko(t.bytes)}</span>
                    ${t.exists?X`<span class="collision">
                          <span class="badge" title="A local table with this name already exists"
                            >exists</span
                          >
                          <select
                            data-mode=${t.name}
                            @change=${a=>this.setMode(t.name,a.target.value)}
                          >
                            <option value="overwrite" ?selected=${!this.renameMode.has(t.name)}>
                              Overwrite
                            </option>
                            <option value="rename" ?selected=${this.renameMode.has(t.name)}>
                              Rename
                            </option>
                          </select>
                        </span>`:He}
                  </label>
                `)}
            </div>
            <div class="footer">
              ${this.selected.size} selected · ${r.toLocaleString()} rows ·
              ${o==null?"~":""}${Ko(o)}
            </div>
          </div>
        </form>
      </dialog>
    `}};At.instance=null;At.styles=[xn,ct`
      dialog {
        min-width: 460px;
        max-width: 600px;
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
        gap: 0.1rem;
        max-height: 52vh;
        overflow: auto;
      }
      .row {
        display: grid;
        grid-template-columns: 1rem 1fr auto auto;
        align-items: center;
        gap: 0.6rem;
        padding: 0.25rem 0.1rem;
        font-size: 0.9rem;
        color: #374151;
      }
      .row .name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .row .size {
        color: #6b7280;
        font-size: 0.8rem;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      .row .collision {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
      }
      .badge {
        background: #fef3c7;
        color: #92400e;
        border-radius: 0.2rem;
        padding: 0.05rem 0.3rem;
        font-size: 0.68rem;
        text-transform: uppercase;
        letter-spacing: 0.03em;
      }
      select {
        font: inherit;
        font-size: 0.8rem;
        padding: 0.1rem 0.25rem;
        border: 1px solid #d1d5db;
        border-radius: 0.2rem;
      }
      input[type='checkbox'] {
        width: 1rem;
        height: 1rem;
      }
      .footer {
        color: #6b7280;
        font-size: 0.8rem;
        border-top: 1px solid #e5e7eb;
        padding-top: 0.5rem;
      }
    `];Zn([ne()],At.prototype,"dbName",2);Zn([ne()],At.prototype,"items",2);Zn([ne()],At.prototype,"selected",2);Zn([ne()],At.prototype,"renameMode",2);At=Zn([pt("datasette-table-picker")],At);function oc(e,n,r){return(At.instance??document.body.appendChild(document.createElement("datasette-table-picker"))).open(e,n,r)}const sc={name:"datasette-source",version:"0.1.0",description:"Import a table from any online Datasette instance by URL",author:"easyDBAccess built-ins",optional:!0},Ar={maxImportRows:1e4,pageSize:"max"},ac="https://latest.datasette.io/fixtures/facetable";function lc(e){e.ui.registerUrlSource({id:"datasette",label:"Datasette table or database…",async run(n,{url:r}){const o=r||await n.ui.dialogs.prompt(`Datasette table or database URL

e.g. ${ac}`,"","Import from Datasette");o&&await Vo(n,o)}}),e.ui.registerDropHandler(async(n,r)=>{const o=n.dataTransfer?.getData("text/plain")||"";return cc(o)?(n.preventDefault(),await Vo(r,o),!0):!1})}async function Vo(e,n){try{await Wi(e,n)}catch(r){const o=r instanceof Nr?`Datasette error (${r.status??"?"}): ${r.message}`:`Could not import: ${r?.message??r}`;await e.ui.dialogs.alert(o,"Datasette import failed")}}function cc(e){try{return!!Ui(e).db}catch{return!1}}async function Wi(e,n){const r=Ui(n);if(!r.db)throw new Error("URL must point to a Datasette database or table, e.g. .../<database>[/<table>]");const t=await uc((a,c)=>e.backend.fetch(a,c),n);if(t.kind==="database"){await hc(e,r,t.tables);return}if(!r.table)throw new Error("That URL responds like a Datasette table but has no table name in its path.");await Hi(e,r,{announce:!0})}async function uc(e,n){const r=new URL(n);r.pathname=r.pathname.replace(/\.(json|csv)$/i,"")+".json";const o=await e(r.toString()),t=await o.json();if(t&&t.ok===!1)throw new Nr(t,o.status);const a=Yl(t),c=Array.isArray(t?.tables),f=Array.isArray(t?.rows)||Array.isArray(t?.columns);return c&&!f?{kind:"database",tables:a}:f?{kind:"table",tables:[]}:{kind:a.length>0?"database":"table",tables:a}}async function dc(e,n){const r=Ui(n);if(!r.db||!r.table)throw new Error("URL must point to a table, e.g. .../<database>/<table>");return(await Hi(e,r,{announce:!0})).tableId}async function Hi(e,n,r={}){const o=e.workspaceId();if(!o)throw new Error("datasette-source: no active workspace");if(!n.db||!n.table)throw new Error("datasette-source: table ref requires db + table");const t=(De,nt)=>e.backend.fetch(De,nt),{columns:a,pks:c,count:f}=await ec(t,n),{rows:m,truncated:F,hasMore:A,pages:R}=await tc(t,n,{maxRows:Ar.maxImportRows,pageSize:Ar.pageSize});let T=a;if(T.length===0)T=Ho(m,c);else{const De=new Set(T.map(Ye=>Ye.field)),nt=Ho(m,c).filter(Ye=>!De.has(Ye.field));nt.length>0&&(T=[...T,...nt])}const N=Date.now(),Q=`${n.db}/${n.table}`,oe=(await e.store.tables.find()).filter(De=>De.workspaceId===o),Ke=new Map(oe.map(De=>[De.name,De]));let ke=Q;const he=r.overwrite?Ke.get(Q):void 0;if(!he&&Ke.has(Q)){let De=2;for(;Ke.has(`${Q} (${De})`);)De+=1;ke=`${Q} (${De})`}let _e;if(he){_e=he.id,ke=he.name,e.events.emit("import:before",{source:"datasette",tableId:_e});const De=e.store.rows(_e),nt=await De.find();await De.bulkRemove(nt.map(Ye=>Ye.id)),await e.store.tables.patch(_e,{columns:T,updatedAt:N})}else _e=Yo(),e.events.emit("import:before",{source:"datasette",tableId:_e}),await e.store.tables.insert({id:_e,workspaceId:o,name:ke,code:pc(ke),columns:T,view:"table",updatedAt:N});const Wt=m.map(De=>({id:Yo(),tableId:_e,data:De,updatedAt:N}));if(await e.store.rows(_e).bulkInsert(Wt),e.events.emit("import:after",{source:"datasette",tableId:_e,rowCount:m.length}),r.announce){const De=f!=null?` of ${f}`:"";A||F?e.ui.dialogs.toast(`Imported first ${m.length}${De} rows from ${n.table} — more available (capped at ${Ar.maxImportRows}). Live paging arrives with the Phase-2 connector.`,{kind:"warning"}):e.ui.dialogs.toast(`Imported ${m.length} rows from ${n.table} (${R} page${R===1?"":"s"}).`,{kind:"success"})}return{tableId:_e,name:ke,rowCount:m.length,count:f,hasMore:A,truncated:F}}async function fc(e,n,r,o){if(o===0)return 0;try{const t=Dr({...n,table:r},{_shape:"objects",_size:20}),c=await(await e(t)).json(),f=Array.isArray(c?.rows)?c.rows:[];if(f.length===0)return o==null?null:0;const m=JSON.stringify(f).length/f.length,F=o??f.length;return Math.round(m*F)}catch{return null}}async function hc(e,n,r){if(r.length===0)throw new Error(`No tables found in database "${n.db}".`);const o=(he,_e)=>e.backend.fetch(he,_e),t=e.workspaceId(),a=t?(await e.store.tables.find()).filter(he=>he.workspaceId===t):[],c=new Set(a.map(he=>he.name)),f=new Map(r.map(he=>[he.name,he.count])),m=r.map(he=>({name:he.name,rows:he.count,bytes:null,exists:c.has(`${n.db}/${he.name}`)})),F=he=>fc(o,n,he,f.get(he)??null),A=await oc(n.db??"",m,F);if(A===null||A.length===0)return;e.ui.dialogs.toast(`Importing ${A.length} table${A.length===1?"":"s"} from ${n.db}…`,{kind:"info"});let R=0,T=0,N=0,Q=0;const oe=[];for(const he of A)try{const _e=await Hi(e,{...n,table:he.table},{announce:!1,overwrite:he.overwrite});R+=1,T+=_e.rowCount,(_e.hasMore||_e.truncated)&&(N+=1),he.overwrite&&(Q+=1)}catch(_e){oe.push(`${he.table}: ${_e?.message??_e}`)}const Ke=[N>0?`${N} capped at ${Ar.maxImportRows} rows`:"",Q>0?`${Q} overwritten`:""].filter(Boolean),ke=Ke.length?` (${Ke.join("; ")})`:"";R>0&&e.ui.dialogs.toast(`Imported ${R}/${A.length} table${A.length===1?"":"s"} (${T} rows) from ${n.db}${ke}.`,{kind:oe.length?"warning":"success"}),oe.length>0&&e.ui.dialogs.toast(`${oe.length} table${oe.length===1?"":"s"} failed to import:
${oe.slice(0,5).join(`
`)}${oe.length>5?`
…and ${oe.length-5} more.`:""}`,{kind:"error",title:"Datasette import"})}function pc(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Yo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const mc=Object.freeze(Object.defineProperty({__proto__:null,importDatasette:Wi,importDatasetteTable:dc,init:lc,meta:sc},Symbol.toStringTag,{value:"Module"})),gc={name:"dump-export",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file.",author:"easyDBAccess built-ins"};function bc(e){e.ui.registerFooterButton({id:"dump-export:dump",label:"Dump",icon:"archive",tooltip:"Export the current workspace as a JSON dump file",onClick:async()=>{const n=e.workspaceId();if(!n)return;const r=await qr(e);await e.backend.saveFile(`workspace-${n}.db.json`,r,"application/json")}})}async function qr(e){const n=e.workspaceId();if(!n)throw new Error("dump-export: no active workspace");const r=(await e.store.tables.find()).filter(t=>t.workspaceId===n),o={workspaceId:n,exportedAt:Date.now(),tables:[]};for(const t of r){const a=await e.store.rows(t.id).find();o.tables.push({name:t.name,columns:t.columns,rows:a.map(c=>c.data),...t.windowGeometry?{windowGeometry:t.windowGeometry}:{},...t.sortColumn?{sortColumn:t.sortColumn,sortAsc:t.sortAsc??!0}:{}})}return JSON.stringify(o,null,2)}const yc=Object.freeze(Object.defineProperty({__proto__:null,init:bc,meta:gc,serializeWorkspace:qr},Symbol.toStringTag,{value:"Module"})),wc={name:"sql-export",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"easyDBAccess built-ins"};function vc(e){e.ui.registerFooterButton({id:"sql-export:dump",label:"SQL",icon:"storage",tooltip:"Export the current workspace as a .sql script",onClick:async()=>{const n=e.workspaceId();if(!n)return;const r=await _s(e);await e.backend.saveFile(`workspace-${n}.sql`,r,"application/sql")}})}async function _s(e){const n=e.workspaceId();if(!n)throw new Error("sql-export: no active workspace");const r=(await e.store.tables.find()).filter(t=>t.workspaceId===n),o=["-- easyDBAccess SQL dump",`-- workspace: ${n}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const t of r){const a=await e.store.rows(t.id).find();o.push(xc(t,a),"")}return o.push("COMMIT;",""),o.join(`
`)}function xc(e,n){const r=Ti(e.code||e.name||`table_${e.id}`),o=['  "__id" TEXT PRIMARY KEY',...e.columns.map(a=>`  ${$c(a)}`)],t=[`DROP TABLE IF EXISTS "${r}";`,`CREATE TABLE "${r}" (`,o.join(`,
`),");"];if(n.length>0){const c=["__id",...e.columns.map(f=>f.field)].map(f=>`"${Ti(f)}"`).join(", ");for(const f of n){const m=[Xo(f.id),...e.columns.map(F=>Xo(f.data[F.field],F.type))];t.push(`INSERT INTO "${r}" (${c}) VALUES (${m.join(", ")});`)}}return t.join(`
`)}function $c(e){const n=[`"${Ti(e.field)}"`,Ec(e.type)];return e.notnull&&n.push("NOT NULL"),e.unique&&n.push("UNIQUE"),n.join(" ")}function Ec(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function Xo(e,n){if(e==null)return"NULL";if(n==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const r=Cc(e);return r===null?"NULL":Sr(r)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?Sr(e.toISOString()):Sr(typeof e=="string"?e:JSON.stringify(e))}function Cc(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?Go(e):null;if(typeof e=="string"){const n=e.trim();if(n.length===0)return null;const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(n);if(r)return`${r[1]}${r[2]}${r[3]}`;const o=new Date(n);return Number.isFinite(o.getTime())?Go(o):null}return null}function Go(e){const n=String(e.getUTCFullYear()).padStart(4,"0"),r=String(e.getUTCMonth()+1).padStart(2,"0"),o=String(e.getUTCDate()).padStart(2,"0");return`${n}${r}${o}`}function Sr(e){return`'${e.replace(/'/g,"''")}'`}function Ti(e){let n=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(n)&&(n=`_${n}`),n||"_"}const kc=Object.freeze(Object.defineProperty({__proto__:null,init:vc,meta:wc,serializeWorkspaceAsSql:_s},Symbol.toStringTag,{value:"Module"})),Sc={name:"gist-sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"easyDBAccess built-ins"},_c="gist:";function Pc(e){e.ui.registerFooterButton({id:"gist-sync:push",label:"Push",icon:"cloud_upload",tooltip:"Push the current workspace to a GitHub Gist",onClick:async()=>{try{await Tc(e)}catch(n){e.ui.dialogs.toast(`Push failed: ${n.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerFooterButton({id:"gist-sync:pull",label:"Pull",icon:"cloud_download",tooltip:"Pull the latest tables from the configured Gist",onClick:async()=>{try{await Fc(e)}catch(n){e.ui.dialogs.toast(`Pull failed: ${n.message}`,{kind:"error",title:"Gist sync"})}}})}async function Ps(e){const n=e.workspaceId();return`${_c}${n??"default"}`}async function Ac(e){const n=await Ps(e),r=await e.store.settings.findOne(n);if(!r)return null;const o=r.value;return!o||!o.token||!o.user?null:{user:o.user,gistId:o.gistId??"",token:o.token}}async function As(e,n){const r=await Ps(e);await e.store.settings.upsert({key:r,value:n})}function jc(e){const n={};for(const r of e.split(";")){const o=r.indexOf("=");if(o<0)continue;const t=r.slice(0,o).trim(),a=r.slice(o+1).trim();t&&(n[t]=a)}return!n.user||!n.gist_token?null:{user:n.user,gistId:n.gist_id??"",token:n.gist_token}}async function js(e){const n=await Ac(e);if(n)return n;const r=await e.ui.dialogs.prompt(`Connection string format:
user=<github-user>;gist_id=<id>;gist_token=<pat>;

Leave gist_id empty to create a new gist on first Push.`,"","Gist credentials");if(!r)return null;const o=jc(r);return o?(await As(e,o),o):(await e.ui.dialogs.alert("Could not parse connection string. Make sure it contains user=… and gist_token=….","Gist credentials"),null)}async function Tc(e){const n=await js(e);if(!n)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const o=(await e.store.tables.find()).filter(m=>m.workspaceId===r);if(o.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const t={},a=[];for(const m of o){const F=await e.store.rows(m.id).find(),A=JSON.stringify(Oc(m,F),null,2);A.length>1e8&&a.push(`${m.name} (${(A.length/1e6).toFixed(2)} MB)`),t[`${Ts(m.name)}.table.json`]={content:A}}if(a.length>0&&!await e.ui.dialogs.confirm(`These tables exceed Gist's 100 MB-per-file limit and will be rejected:

${a.join(`
`)}

Push anyway?`,"Gist size warning"))return;t["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1"},null,2)};let c;if(n.gistId){const m=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:t,description:`easyDBAccess workspace: ${r}`})});if(!m.ok)throw new Error(await Fi(m));c=await m.json()}else{const m=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:t})});if(!m.ok)throw new Error(await Fi(m));c=await m.json(),n.gistId=c.id,await As(e,n)}const f=c.html_url??`https://gist.github.com/${n.user}/${c.id}`;e.ui.dialogs.toast(`Pushed ${o.length} table${o.length===1?"":"s"}.  ${f}`,{kind:"success",title:"Gist sync"})}async function Fc(e){const n=await js(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const r=e.workspaceId();if(!r)throw new Error("no active workspace");const o=await fetch(`https://api.github.com/gists/${n.gistId}`,{headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)throw new Error(await Fi(o));const t=await o.json(),a=Object.entries(t.files).filter(([F])=>F.endsWith(".table.json")&&!F.startsWith("_easydb"));if(a.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const c=(await e.store.tables.find()).filter(F=>F.workspaceId===r),f=new Map(c.map(F=>[F.name,F]));let m=0;for(const[,F]of a){const A=JSON.parse(F.content);if(!A.name||!Array.isArray(A.columns))continue;let R;const T=f.get(A.name);if(T){R=await e.store.tables.patch(T.id,{columns:A.columns,updatedAt:Date.now()});const Q=e.store.rows(T.id),oe=await Q.find();await Q.bulkRemove(oe.map(Ke=>Ke.id))}else R=await e.store.tables.insert({id:Qo(),workspaceId:r,name:A.name,code:Ts(A.name),columns:A.columns,view:"table",updatedAt:Date.now()});const N=(A.rows??[]).map(Q=>({id:Qo(),tableId:R.id,data:Q,updatedAt:Date.now()}));await e.store.rows(R.id).bulkInsert(N),m++}e.ui.dialogs.toast(`Pulled ${m} table${m===1?"":"s"} from gist ${n.gistId}.`,{kind:"success",title:"Gist sync"})}function Oc(e,n){return{name:e.name,columns:e.columns,rows:n.map(r=>r.data)}}async function Fi(e){let n="";try{n=await e.text()}catch{}return`${e.status} ${e.statusText}${n?`: ${n.slice(0,200)}`:""}`}function Ts(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Qo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Dc=Object.freeze(Object.defineProperty({__proto__:null,init:Pc,meta:Sc},Symbol.toStringTag,{value:"Module"})),Fs="server-sync:url";function Os(e){return`server-sync:etag:${e}`}async function Ds(e){const r=(await e.store.settings.findOne(Fs))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}async function Rc(e,n){await e.store.settings.upsert({key:Fs,value:n.replace(/\/+$/,"")})}async function Rs(e,n){const o=(await e.store.settings.findOne(Os(n)))?.value;return typeof o=="string"?o:null}async function vn(e,n,r){await e.store.settings.upsert({key:Os(n),value:r})}function Ur(e){if(!e)return null;const n=e.trim();return n.startsWith('"')&&n.endsWith('"')?n.slice(1,-1):n}function Jo(e){try{const n=JSON.parse(e);return n&&typeof n=="object"&&!Array.isArray(n)&&delete n.exportedAt,JSON.stringify(n)}catch{return e}}async function zs(e,n,r){const o=Mr(r,n),t=(await e.store.tables.find()).filter(c=>c.workspaceId===n);for(const c of t){const f=e.store.rows(c.id),m=await f.find();await f.bulkRemove(m.map(F=>F.id)),await e.store.tables.remove(c.id)}let a=0;for(const c of o){const f=Zo(),m=await e.store.tables.insert({id:f,workspaceId:n,name:c.name,code:zc(c.name),columns:c.columns,view:"table",...c.windowGeometry?{windowGeometry:c.windowGeometry}:{},...c.sortColumn?{sortColumn:c.sortColumn,sortAsc:c.sortAsc??!0}:{},updatedAt:Date.now()}),F=c.rows.map(A=>({id:Zo(),tableId:m.id,data:A,updatedAt:Date.now()}));await e.store.rows(m.id).bulkInsert(F),a++}return a}function zc(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Zo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Ic={name:"server-sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"easyDBAccess built-ins"};function Bc(e){e.ui.registerFooterButton({id:"server-sync:push",label:"Sync ↑",icon:"cloud_upload",tooltip:"Push this workspace to the configured server",onClick:async()=>{try{await Lc(e)}catch(n){e.ui.dialogs.toast(`Push failed: ${n.message}`,{kind:"error",title:"Server sync"})}}}),e.ui.registerFooterButton({id:"server-sync:pull",label:"Sync ↓",icon:"cloud_download",tooltip:"Pull this workspace from the configured server",onClick:async()=>{try{await Mc(e)}catch(n){e.ui.dialogs.toast(`Pull failed: ${n.message}`,{kind:"error",title:"Server sync"})}}})}async function Lc(e){const n=e.workspaceId();if(!n)throw new Error("no active workspace");const r=await Is(e);if(!r)return;const o=await qr(e),t=await Rs(e,n),a={"Content-Type":"application/json"};t&&(a["If-Match"]=`"${t}"`);let c=await fetch(`${r}/sync/${encodeURIComponent(n)}`,{method:"PUT",headers:a,body:o});if(c.status===412){const m=await c.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${n}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){m.currentEtag&&await vn(e,n,m.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}c=await fetch(`${r}/sync/${encodeURIComponent(n)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:o})}if(!c.ok)throw new Error(await Bs(c));const f=Ur(c.headers.get("ETag"));f&&await vn(e,n,f),e.ui.dialogs.toast(`Pushed workspace "${n}" to ${r}.`,{kind:"success",title:"Server sync"})}async function Mc(e){const n=e.workspaceId();if(!n)throw new Error("no active workspace");const r=await Is(e);if(!r||!await e.ui.dialogs.confirm(`Replace your local copy of "${n}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const t=await fetch(`${r}/sync/${encodeURIComponent(n)}`);if(t.status===404){e.ui.dialogs.toast(`Workspace "${n}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!t.ok)throw new Error(await Bs(t));const a=Ur(t.headers.get("ETag")),c=await t.json(),f=await zs(e,n,c);a&&await vn(e,n,a),e.ui.dialogs.toast(`Pulled ${f} table${f===1?"":"s"} from ${r}.`,{kind:"success",title:"Server sync"})}async function Is(e){const n=await Ds(e);if(n)return n;const r=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!r)return null;try{new URL(r)}catch{return await e.ui.dialogs.alert(`"${r}" is not a valid URL.`,"Server sync"),null}return await Rc(e,r),r.replace(/\/+$/,"")}async function Bs(e){let n="";try{n=await e.text()}catch{}return`${e.status} ${e.statusText}${n?`: ${n.slice(0,200)}`:""}`}const Nc=Object.freeze(Object.defineProperty({__proto__:null,init:Bc,meta:Ic},Symbol.toStringTag,{value:"Module"})),qc={name:"new-table",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"easyDBAccess built-ins"};function Uc(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const Wc=Object.freeze(Object.defineProperty({__proto__:null,init:Uc,meta:qc},Symbol.toStringTag,{value:"Module"})),Hc={name:"plugin-manager-button",version:"0.1.0",description:"Registers a footer button that opens the Plugin Manager dialog.",author:"easyDBAccess built-ins"};function Kc(e){e.ui.registerFooterButton({id:"plugin-manager:open",label:"Plugins",icon:"extension",tooltip:"Add, disable, or remove plugins",onClick:()=>e.ui.openPluginManager()})}const Vc=Object.freeze(Object.defineProperty({__proto__:null,init:Kc,meta:Hc},Symbol.toStringTag,{value:"Module"})),Yc={name:"core-renderers",version:"0.1.0",description:"Built-in cell renderers: date, datetime, boolean, script.",author:"easyDBAccess built-ins"};function Xc(e){customElements.get("cell-date")||customElements.define("cell-date",Gc),customElements.get("cell-datetime")||customElements.define("cell-datetime",Qc),customElements.get("cell-boolean")||customElements.define("cell-boolean",Jc),customElements.get("cell-script")||customElements.define("cell-script",eu),e.ui.registerCellRenderer("date","cell-date"),e.ui.registerCellRenderer("datetime","cell-datetime"),e.ui.registerCellRenderer("boolean","cell-boolean"),e.ui.registerCellRenderer("script","cell-script")}class Gc extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(n){this._value!==n&&(this._value=n,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const n=document.createElement("input");n.type="date",n.value=nu(this._value),n.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",n.addEventListener("change",()=>this.commit(n.value||null)),this.append(n)}commit(n){this._value=n,this.dispatchEvent(new CustomEvent("change",{detail:{value:n},bubbles:!0,composed:!0}))}}class Qc extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(n){this._value!==n&&(this._value=n,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const n=document.createElement("input");n.type="datetime-local",n.value=ru(this._value),n.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",n.addEventListener("change",()=>this.commit(n.value||null)),this.append(n)}commit(n){this._value=n,this.dispatchEvent(new CustomEvent("change",{detail:{value:n},bubbles:!0,composed:!0}))}}class Jc extends HTMLElement{constructor(){super(...arguments),this._value=!1}set value(n){this._value!==n&&(this._value=n,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const n=document.createElement("input");n.type="checkbox",n.checked=Zc(this._value),n.style.cssText="transform:translateY(1px);cursor:pointer",n.addEventListener("change",()=>this.commit(n.checked)),this.append(n)}commit(n){this._value=n,this.dispatchEvent(new CustomEvent("change",{detail:{value:n},bubbles:!0,composed:!0}))}}function Zc(e){return e===!0||e==="true"||e===1||e==="1"}class eu extends HTMLElement{constructor(){super(...arguments),this._column=null,this._row={}}set column(n){this._column=n,this.render()}get column(){return this._column}set row(n){this._row=n??{},this.render()}get row(){return this._row}set value(n){}get value(){}connectedCallback(){this.render()}render(){this.innerHTML="";const n=this._column?.script;if(!n||!n.trim()){const a=document.createElement("span");a.textContent="(no script)",a.style.cssText="color:#9ca3af;font-style:italic",this.append(a);return}let r;try{r=tu(n)}catch(a){this.append(ki("compile error",a));return}let o;try{o=r(this._row)}catch(a){this.append(ki("runtime error",a));return}if(typeof o!="string"){this.append(ki("render(row) did not return a string",null));return}const t=document.createElement("span");t.style.cssText="display:inline-block;width:100%",t.innerHTML=o,this.append(t)}}const es=new Map;function tu(e){const n=es.get(e);if(n)return n;const r=new Function("row",`${e}
return render(row);`);return es.set(e,r),r}function ki(e,n){const r=document.createElement("span");if(r.textContent=`⚠ ${e}`,r.style.cssText="color:#b91c1c;font-size:0.8em;font-family:ui-monospace,SFMono-Regular,monospace",n){const o=n instanceof Error?n.message:String(n);r.title=o}return r}function nu(e){if(typeof e!="string"&&typeof e!="number")return"";const n=String(e).trim();if(!n)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(n))return n;const r=new Date(n);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function ru(e){if(typeof e!="string"&&typeof e!="number")return"";const n=String(e).trim();if(!n)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(n);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(n))return`${n}T00:00`;const o=new Date(n);if(Number.isNaN(o.getTime()))return"";const t=o.toISOString();return`${t.slice(0,10)}T${t.slice(11,16)}`}const iu=Object.freeze(Object.defineProperty({__proto__:null,init:Xc,meta:Yc},Symbol.toStringTag,{value:"Module"})),ou={name:"cell-color",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"easyDBAccess built-ins"};function su(e){customElements.get("cell-color")||customElements.define("cell-color",au),e.ui.registerCellRenderer("color","cell-color")}class au extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(n){this._value!==n&&(this._value=n??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(n,r,o){this.value=o}render(){const n=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const r=document.createElement("input");r.type="color",r.value=n,r.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",r.addEventListener("change",()=>this.commit(r.value)),this.append(r)}commit(n){this._value=n,this.dispatchEvent(new CustomEvent("change",{detail:{value:n},bubbles:!0,composed:!0}))}}const lu=Object.freeze(Object.defineProperty({__proto__:null,init:su,meta:ou},Symbol.toStringTag,{value:"Module"})),cu={name:"cell-image",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"easyDBAccess built-ins"};function uu(e){customElements.get("cell-image")||customElements.define("cell-image",du),e.ui.registerCellRenderer("image","cell-image")}class du extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(n){this._value!==n&&(this._value=n??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const n=document.createElement("span");if(n.style.cssText="display:inline-flex;align-items:center;gap:0.4rem",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const o=document.createElement("img");o.src=this._value,o.alt="",o.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",n.append(o)}else{const o=document.createElement("span");o.style.color="#9ca3af",o.textContent="no image",n.append(o);const t=document.createElement("button");t.type="button",t.textContent="upload",t.style.cssText="padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",t.addEventListener("click",()=>this.pickFile()),n.append(t)}this.append(n)}pickFile(){const n=document.createElement("input");n.type="file",n.accept="image/*",n.addEventListener("change",()=>{const r=n.files?.[0];if(!r)return;const o=new FileReader;o.onload=()=>this.commit(String(o.result)),o.readAsDataURL(r)}),n.click()}commit(n){this._value=n,this.dispatchEvent(new CustomEvent("change",{detail:{value:n},bubbles:!0,composed:!0}))}}const fu=Object.freeze(Object.defineProperty({__proto__:null,init:uu,meta:cu},Symbol.toStringTag,{value:"Module"})),hu={name:"cell-link",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"easyDBAccess built-ins"};function pu(e){customElements.get("cell-link")||customElements.define("cell-link",mu),e.ui.registerCellRenderer("link","cell-link")}class mu extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1}set value(n){const r=n==null?"":String(n);this._value!==r&&(this._value=r,this._editing=!1,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const n=this._value,r=this._editing?null:gu(n),o=!this._editing&&!r?bu(n):null,t=!this._editing&&!r&&!o?yu(n):null;if(r||o||t){const a=document.createElement("span");a.style.cssText="display:inline-flex;align-items:center;gap:0.25rem;width:100%";const c=document.createElement("a");c.href=r?n:o?`mailto:${n.trim()}`:`tel:${n.replace(/[^\d+]/g,"")}`,r&&(c.target="_blank",c.rel="noopener noreferrer"),c.textContent=n,c.style.cssText="color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",c.title=r?`Open ${n}`:o?`Email ${n}`:`Call ${n}`;const f=document.createElement("button");f.type="button",f.title="Edit",f.textContent="✎",f.style.cssText="background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",f.addEventListener("click",m=>{m.preventDefault(),m.stopPropagation(),this._editing=!0,this.render()}),a.append(c,f),this.append(a)}else{const a=document.createElement("input");a.type="text",a.value=n,a.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",a.addEventListener("change",()=>this.commit(a.value)),a.addEventListener("keydown",c=>{c.key==="Enter"?(c.preventDefault(),this.commit(a.value)):c.key==="Escape"&&(this._editing=!1,this.render())}),this.append(a),this._editing&&setTimeout(()=>{a.focus(),a.select()},0)}}commit(n){this._value=n,this._editing=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:n},bubbles:!0,composed:!0}))}}function gu(e){const n=e.trim();return/^https?:\/\/\S+$/i.test(n)?n:null}function bu(e){const n=e.trim();return n&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(n)?n:null}function yu(e){const n=e.trim();if(!n||!/^[+0-9 ()\-.]+$/.test(n)||/^\d{4}-\d{2}-\d{2}$/.test(n)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(n))return null;const r=n.replace(/\D/g,"");if(r.length<7||r.length>15)return null;const o=/[ ()\-.]/.test(n),t=n.startsWith("+");return!o&&!t&&r.length<10?null:n}const wu=Object.freeze(Object.defineProperty({__proto__:null,init:pu,meta:hu},Symbol.toStringTag,{value:"Module"}));var vu=Object.defineProperty,xu=Object.getOwnPropertyDescriptor,Wr=(e,n,r,o)=>{for(var t=o>1?void 0:o?xu(n,r):n,a=e.length-1,c;a>=0;a--)(c=e[a])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&vu(n,r,t),t};const $u="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",ts=[{label:"Northwind — sample database (JSON dump)",url:$u,kind:"json"},{label:"Datasette — global power plants (table)",url:"https://datasette.io/global-power-plants/global-power-plants",kind:"datasette"},{label:"Datasette — US legislators (whole database)",url:"https://datasette.io/legislators",kind:"datasette"}],Eu={name:"import-data",version:"0.2.0",description:"Header button that imports a table from a URL — a JSON dump (e.g. Northwind) or a Datasette table — with a picker of sample sources.",author:"easyDBAccess built-ins",optional:!0};function Cu(e){e.ui.registerHeaderButton({id:"import-data:open",label:"",icon:"cloud_download",tooltip:"Import data from a URL",onClick:()=>ku(e)})}async function ku(e){const r=await(jt.instance??Su()).open();if(!r)return;const{url:o,kind:t}=r;try{if(t==="datasette")await Wi(e,o);else{const a=await e.backend.fetch(o);if(!a.ok)throw new Error(`HTTP ${a.status} ${a.statusText}`);const c=await a.text();await qi(e,c,ns(o)),e.ui.dialogs.toast(`Imported ${ns(o)}.`,{kind:"success",title:"Import"})}}catch(a){e.ui.dialogs.toast(`Could not import ${o}: ${a.message}`,{kind:"error",title:"Import"})}}function Su(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function _u(e){try{const n=new URL(e),r=n.hostname.toLowerCase(),t=n.pathname.replace(/\.(json|csv)$/i,"").split("/").filter(Boolean),a=[...n.searchParams.keys()].some(f=>f.startsWith("_"));return(r.includes("datasette")||a)&&t.length>=1?"datasette":"json"}catch{return"json"}}function ns(e){try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();return r&&r.length>0?r:"sample.db.json"}catch{return"sample.db.json"}}let jt=class extends tt{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const n=this.url.trim();if(!n)return;const r=this.kind==="auto"?_u(n):this.kind;this.finish({url:n,kind:r})}}connectedCallback(){super.connectedCallback(),jt.instance=this}disconnectedCallback(){super.disconnectedCallback(),jt.instance===this&&(jt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&En(this.dialogEl,e)}open(){return this.url="",this.kind="auto",this.presetIdx=-1,new Promise(e=>{this.resolveFn=e,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const n=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>n?.(e))}onPresetChange(e){const n=Number(e.target.value);this.presetIdx=n;const r=ts[n];r&&(this.url=r.url,this.kind=r.kind)}render(){return X`
      <dialog @cancel=${this.onCancel} @keydown=${$n}>
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
                ${ts.map((e,n)=>X`<option value=${String(n)} ?selected=${n===this.presetIdx}>
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
      ${He}
    `}};jt.instance=null;jt.styles=[xn,ct`
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
    `];Wr([ne()],jt.prototype,"url",2);Wr([ne()],jt.prototype,"kind",2);Wr([ne()],jt.prototype,"presetIdx",2);jt=Wr([pt("import-dialog")],jt);const Pu=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return jt},init:Cu,meta:Eu},Symbol.toStringTag,{value:"Module"})),Au={name:"auto-sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"easyDBAccess built-ins",optional:!0},ju=6e4;let rs=null,Oi=!1;const Si=new Map;function Tu(e){rs===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(rs=setInterval(()=>{Ls(e)},ju)))}async function Ls(e){if(Oi)return;const n=e.workspaceId();if(!n)return;const r=await Ds(e);if(r)try{await Fu(e,r,n)}catch(o){console.warn("[auto-sync]",o)}}async function Fu(e,n,r){const o=await qr(e),t=await Rs(e,r),a=await fetch(`${n}/sync/${encodeURIComponent(r)}`);if(a.status===404){await is(e,n,r,o,null);return}if(!a.ok)return;const c=Ur(a.headers.get("ETag")),f=await a.text();if(Jo(o)===Jo(f)){c&&c!==t&&await vn(e,r,c);return}if(c&&c===t){await is(e,n,r,o,t);return}if(!(c&&Si.get(r)===c)){Oi=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${r}". Pull and replace your local copy?`,"auto-sync")){const F=JSON.parse(f),A=await zs(e,r,F);c&&await vn(e,r,c),Si.delete(r),e.ui.dialogs.toast(`Pulled ${A} table${A===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else c&&Si.set(r,c)}finally{Oi=!1}}}async function is(e,n,r,o,t){const a={"Content-Type":"application/json"};t&&(a["If-Match"]=`"${t}"`);const c=await fetch(`${n}/sync/${encodeURIComponent(r)}`,{method:"PUT",headers:a,body:o});if(c.ok){const f=Ur(c.headers.get("ETag"));f&&await vn(e,r,f);return}if(c.status===412){const f=await c.json().catch(()=>({}));f.currentEtag&&await vn(e,r,f.currentEtag)}}const Ms=Object.freeze(Object.defineProperty({__proto__:null,load:Tu,meta:Au,tick:Ls},Symbol.toStringTag,{value:"Module"})),Ns=[Wc,Al,Vl,mc,Dl,yc,kc,Dc,Nc,Vc,iu,lu,fu,wu,Pu,Ms],Ou=Ns;function Di(e){return`builtin:${e}`}async function Du(e){const n=[];for(const r of Ns)if(!await Ru(e,r)){n.push(r);try{await r.init?.(e)}catch(o){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"init",error:o})}}return async()=>{for(const r of n)try{await r.load?.(e)}catch(o){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"load",error:o})}}}async function Ru(e,n){if(!n.meta?.optional)return!1;const r=n.meta.name;return r?(await e.store.plugins.findOne(Di(r)))?.enabled===!1:!1}async function zu(e){const n=e.workspaceId();if(!n)return async()=>{};const o=(await e.store.workspaces.findOne(n))?.pluginUrls??[],t=[];for(const a of o)try{const c=await e.store.plugins.findOne(a);if(c&&c.enabled===!1)continue;let f=c?.cachedBody??"";if(f)Iu(e,a,f);else{try{f=await qs(a)}catch(A){await e.store.plugins.upsert({url:a,enabled:c?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${A.message}`}),e.events.emit("plugin:error",{url:a,phase:"fetch",error:A});continue}await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),cachedBody:f})}const m=new Blob([f],{type:"text/javascript"}),F=URL.createObjectURL(m);try{const A=await import(F);await A.init?.(e),t.push({url:a,mod:A})}finally{setTimeout(()=>URL.revokeObjectURL(F),5e3)}}catch(c){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`init: ${c.message}`}),e.events.emit("plugin:error",{url:a,phase:"init",error:c})}return async()=>{for(const{url:a,mod:c}of t)try{await c.load?.(e)}catch(f){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`load: ${f.message}`}),e.events.emit("plugin:error",{url:a,phase:"load",error:f})}}}async function qs(e){const n=await fetch(e);if(!n.ok)throw new Error(`HTTP ${n.status} ${n.statusText}`);const r=await n.text();if((n.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(r))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return r}function Iu(e,n,r){return(async()=>{try{const o=await qs(n);if(o===r)return;await e.store.plugins.upsert({url:n,enabled:!0,lastFetched:Date.now(),cachedBody:o})}catch{}})()}let _i=null;function Ae(){return _i||(_i=Bu()),_i}async function Bu(){const e=await Ja(),n=el(e),r=tl(),o=ll(),t=Lu(),a=await n.workspaces.find();let c;if(t){const A=Mu(t),R=a.find(T=>T.id===A||T.name===t);R?c=R.id:c=(await n.workspaces.insert({id:A,name:t,createdAt:Date.now(),pluginUrls:[]})).id}else a.length===0?c=(await n.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id:c=a[0].id;const f=dl({store:n,events:r,registries:o,workspaceId:()=>c});r.on("import:after",({source:A,tableId:R,rowCount:T})=>{f.store.tables.findOne(R).then(N=>{f.ui.dialogs.toast(`Imported ${T} row${T===1?"":"s"} into "${N?.name??R}".`,{kind:"success",title:A.toUpperCase()+" import"})})}),r.on("plugin:error",({url:A,phase:R,error:T})=>{f.ui.dialogs.toast(`[${R}] ${T?.message??String(T)}`,{kind:"error",title:`Plugin: ${A}`})});const m=await Du(f),F=await zu(f);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:c}),await m(),await F()}),{store:n,events:r,workspaceId:c,registries:o,api:f}}function Lu(){if(typeof location>"u")return null;const n=new URLSearchParams(location.search).get("space");return n&&n.trim().length>0?n.trim():null}function Mu(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var Nu=Object.defineProperty,qu=Object.getOwnPropertyDescriptor,Hr=(e,n,r,o)=>{for(var t=o>1?void 0:o?qu(n,r):n,a=e.length-1,c;a>=0;a--)(c=e[a])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&Nu(n,r,t),t};let Dn=class extends tt{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&En(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const n=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let r;try{r=Lr(this.text)}catch(c){this.errorMsg=`Couldn't parse the CSV: ${c.message}`;return}if(r.columns.length===0||r.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const o=await Ae(),t=crypto.randomUUID();await o.store.tables.insert({id:t,workspaceId:o.workspaceId,name:n,code:Uu(n),columns:r.columns,view:"table",updatedAt:Date.now()});const a=r.rows.map(c=>({id:crypto.randomUUID(),tableId:t,data:c,updatedAt:Date.now()}));await o.store.rows(t).bulkInsert(a),o.api.ui.dialogs.toast(`Imported ${r.rows.length} row${r.rows.length===1?"":"s"} into "${n}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return X`
      <dialog @cancel=${this.close} @keydown=${$n}>
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
            ${this.errorMsg?X`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};Dn.styles=[xn,ct`
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
    `];Hr([ne()],Dn.prototype,"name",2);Hr([ne()],Dn.prototype,"text",2);Hr([ne()],Dn.prototype,"errorMsg",2);Dn=Hr([pt("csv-paste-dialog")],Dn);function Uu(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}var Wu=Object.defineProperty,Hu=Object.getOwnPropertyDescriptor,Ki=(e,n,r,o)=>{for(var t=o>1?void 0:o?Hu(n,r):n,a=e.length-1,c;a>=0;a--)(c=e[a])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&Wu(n,r,t),t};const Ku=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return an HTML string; it is injected into the cell as raw HTML.
  return '<b>' + (row.name ?? '') + '</b>';
}
`;let qt=class extends tt{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),qt.instance=this}disconnectedCallback(){super.disconnectedCallback(),qt.instance===this&&(qt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&En(this.dialogEl,e)}async open(e,n){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:Ku,this.columnLabel=n??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(r=>{this.resolver=r})}resolve(e){const n=this.resolver;this.resolver=null,this.dialogEl?.close(),n&&n(e)}render(){return X`
      <dialog @cancel=${this.onCancel} @keydown=${$n}>
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
    `}};qt.instance=null;qt.styles=[xn,ct`
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
    `];Ki([ne()],qt.prototype,"text",2);Ki([ne()],qt.prototype,"columnLabel",2);qt=Ki([pt("script-editor-dialog")],qt);var Vu=Object.defineProperty,Yu=Object.getOwnPropertyDescriptor,zt=(e,n,r,o)=>{for(var t=o>1?void 0:o?Yu(n,r):n,a=e.length-1,c;a>=0;a--)(c=e[a])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&Vu(n,r,t),t};const Xu=["string","number","boolean","date","datetime"];let kt=class extends tt{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.columns=[],this.errorMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&En(this.dialogEl,e)}async open(e){this.errorMsg="";const n=await Ae();if(this.rendererOptions=[...n.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.rendererSubUnsub=n.events.on("app:ready",()=>{this.rendererOptions=[...n.registries.cellRenderers.keys()].sort()}),e){const r=await Ae(),o=await r.store.tables.findOne(e);if(!o)return;this.mode="edit",this.editTableId=e,this.name=o.name,this.columns=o.columns.map(a=>({field:a.field,label:a.label,type:a.type,renderer:a.renderer,script:a.script,max:a.max,unique:a.unique,notnull:a.notnull,hidden:a.hidden,origField:a.field}));const t=await r.store.rows(e).find();this.previewRows=t.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((n,r)=>r!==e)}moveColumn(e,n){const r=e+n;if(r<0||r>=this.columns.length)return;const o=[...this.columns],[t]=o.splice(e,1);o.splice(r,0,t),this.columns=o}onRowDragStart(e,n){this.dragSrcIdx=n,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(n)))}onRowDragOver(e,n,r){if(this.dragSrcIdx===null||this.dragSrcIdx===n)return;e.preventDefault();const o=r.getBoundingClientRect(),t=e.clientY<o.top+o.height/2;this.dropTargetIdx=n,this.dropEdge=t?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,n){e.preventDefault();const r=this.dragSrcIdx,o=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,r===null||r===n||!o)return;const t=[...this.columns],[a]=t.splice(r,1);let c=n+(r<n?-1:0);o==="after"&&(c+=1),t.splice(c,0,a),this.columns=t}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,n){this.columns=this.columns.map((r,o)=>o===e?{...r,...n}:r)}async editScript(e){const n=qt.instance;if(!n)return;const r=this.columns[e];if(!r)return;const o=await n.open(r.script??"",r.label||r.field);o!==null&&this.patchColumn(e,{script:o.trim()?o:void 0})}async submit(e){e.preventDefault();const n=this.name.trim();if(!n){this.errorMsg="Table name is required.";return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const r=new Set;for(const a of this.columns){const c=a.field.trim();if(!c){this.errorMsg="Column field names cannot be empty.";return}if(r.has(c)){this.errorMsg=`Duplicate column field: ${c}`;return}r.add(c)}const o=await Ae(),t=this.columns.map(a=>{const c={field:a.field.trim(),label:a.label.trim()||a.field.trim(),type:a.type};return a.renderer&&(c.renderer=a.renderer),a.script&&(c.script=a.script),a.max!=null&&a.max>0&&(c.max=a.max),a.unique&&(c.unique=!0),a.notnull&&(c.notnull=!0),a.hidden&&(c.hidden=!0),c});if(this.mode==="edit"&&this.editTableId){const a=this.editTableId,c=await o.store.tables.findOne(a),f=new Map((c?.columns??[]).map(F=>[F.field,F])),m=t.filter(F=>{const A=f.get(F.field);return F.unique&&!A?.unique||F.notnull&&!A?.notnull||F.max&&F.max>0&&F.max!==A?.max});if(m.length>0){const F=await o.store.rows(a).find(),A=Ju(m,F);if(A.length>0){this.errorMsg=`Cannot save: ${A.length} existing ${A.length===1?"row violates":"rows violate"} the new constraints.
${A.slice(0,5).join(`
`)}${A.length>5?`
…and ${A.length-5} more.`:""}`;return}}await o.store.tables.patch(a,{name:n,columns:t,updatedAt:Date.now()})}else await o.store.tables.insert({id:ed(),workspaceId:o.workspaceId,name:n,code:Zu(n),columns:t,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return X`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=new Map;for(const n of this.columns){if(!n.unique)continue;const r=new Set,o=new Set;for(const t of this.previewRows){const a=t.data[n.field];a==null||a===""||(r.has(a)&&o.add(a),r.add(a))}e.set(n.field,o)}return X`
      <div class="preview">
        <h3>Live preview — first ${this.previewRows.length} row${this.previewRows.length===1?"":"s"}</h3>
        <table>
          <thead>
            <tr>
              ${this.columns.map(n=>X`<th title=${n.field}>${n.label||n.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.previewRows.map(n=>X`
                <tr>
                  ${this.columns.map(r=>{const o=n.data[r.field],t=Qu(r,o,e.get(r.field));return X`<td
                      class=${t?"violation":""}
                      title=${t??""}
                    >${Gu(o)}</td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}renameDetected(){return this.mode==="edit"&&this.columns.some(e=>e.origField&&e.origField!==e.field.trim())}render(){const e=this.mode==="edit"?"Edit columns":"New table",n=this.mode==="edit"?"Save":"Create";return X`
      <dialog @cancel=${this.close} @keydown=${$n}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>
          <span class="mi sm">close</span>
        </button>
        <form @submit=${this.submit}>
          <div class="dialog-header">
            <h2>${e}</h2>
            <div class="header-actions">
              <button type="button" class="ghost" @click=${this.close}>Cancel</button>
              <button type="submit" class="primary">${n}</button>
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
            ${this.columns.map((r,o)=>{const t=this.dragSrcIdx===o,a=this.dropTargetIdx===o,c=a&&this.dropEdge==="before"?" drop-before":a&&this.dropEdge==="after"?" drop-after":"";return X`
                <div
                  class=${`col-row${t?" drag-source":""}${c}`}
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
                    ${Xu.map(f=>X`<option value=${f} ?selected=${f===r.type}>${f}</option>`)}
                  </select>
                  <select
                    title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                    .value=${r.renderer??""}
                    @change=${f=>{const m=f.target.value;this.patchColumn(o,{renderer:m||void 0})}}
                  >
                    <option value="" ?selected=${!r.renderer}>— none —</option>
                    ${this.rendererOptions.map(f=>X`<option value=${f} ?selected=${f===r.renderer}>${f}</option>`)}
                  </select>
                  ${r.renderer==="script"?X`<button
                        type="button"
                        class="icon-btn"
                        title="Edit JS render(row)"
                        @click=${()=>this.editScript(o)}
                      >
                        <span class="mi sm">edit</span>
                      </button>`:X`<span></span>`}
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

          ${this.renameDetected()?X`<div class="hint">
                Renamed fields will appear empty for existing rows — the row data
                isn't migrated automatically.
              </div>`:""}
          ${this.errorMsg?X`<div class="error">${this.errorMsg}</div>`:""}
          ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};kt.styles=[Jt,xn,ct`
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
  `];zt([ne()],kt.prototype,"mode",2);zt([ne()],kt.prototype,"editTableId",2);zt([ne()],kt.prototype,"name",2);zt([ne()],kt.prototype,"columns",2);zt([ne()],kt.prototype,"errorMsg",2);zt([ne()],kt.prototype,"dragSrcIdx",2);zt([ne()],kt.prototype,"dropTargetIdx",2);zt([ne()],kt.prototype,"dropEdge",2);zt([ne()],kt.prototype,"previewRows",2);zt([ne()],kt.prototype,"rendererOptions",2);kt=zt([pt("new-table-dialog")],kt);function Gu(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function Qu(e,n,r){const o=n==null||typeof n=="string"&&n.trim()==="";if(e.notnull&&o)return`${e.label}: empty`;if(o)return null;if(e.type==="number"&&typeof n!="number"){const t=Number(n);if(!Number.isFinite(t))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof n!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(n)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!o){const t=new Date(String(n));if(Number.isNaN(t.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof n=="string"&&n.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof n=="number"&&n>e.max)return`${e.label}: > ${e.max}`}return e.unique&&r?.has(n)?`${e.label}: duplicate`:null}function Ju(e,n){const r=[];for(const o of e)if(o.notnull&&n.forEach((t,a)=>{const c=t.data[o.field];(c==null||typeof c=="string"&&c.trim()==="")&&r.push(`Row ${a+1}: ${o.label} is empty.`)}),o.max!=null&&o.max>0&&n.forEach((t,a)=>{const c=t.data[o.field];typeof c=="string"&&c.length>o.max?r.push(`Row ${a+1}: ${o.label} length ${c.length} > max ${o.max}.`):typeof c=="number"&&c>o.max&&r.push(`Row ${a+1}: ${o.label} value ${c} > max ${o.max}.`)}),o.unique){const t=new Map;n.forEach((a,c)=>{const f=a.data[o.field];f==null||f===""||(t.has(f)?r.push(`Row ${c+1}: ${o.label} duplicates row ${t.get(f)+1} ("${String(f)}").`):t.set(f,c))})}return r}function Zu(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function ed(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var td=Object.defineProperty,nd=Object.getOwnPropertyDescriptor,Tt=(e,n,r,o)=>{for(var t=o>1?void 0:o?nd(n,r):n,a=e.length-1,c;a>=0;a--)(c=e[a])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&td(n,r,t),t};let wt=class extends tt{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.builtinNames=[],this.optionalBuiltins=[],this.dirtyBuiltins=!1,this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&En(this.dialogEl,e)}async open(){const e=await Ae(),n=await e.store.workspaces.findOne(e.workspaceId);this.urls=n?.pluginUrls??[];const r=await e.store.plugins.find();this.records=new Map(r.map(a=>[a.url,a]));const o=[],t=[];for(const a of Ou){const c=a.meta?.name;if(c)if(a.meta?.optional){const f=this.records.get(Di(c));t.push({name:c,...a.meta?.description?{description:a.meta.description}:{},...a.meta?.author?{author:a.meta.author}:{},enabled:f?.enabled!==!1})}else o.push(c)}this.builtinNames=o,this.optionalBuiltins=t,this.dirtyBuiltins=!1,this.addUrl="",await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(),this.refreshServerRegistry()}async refreshCatalog(){const e=new URL("/plugins/catalog.json",location.origin).toString();try{const n=await fetch(e,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status}`);const r=await n.json(),o=Array.isArray(r.plugins)?r.plugins:[];this.catalog=o.map(t=>({...t,absUrl:new URL(t.url,e).toString()})),this.catalogError=null}catch(n){this.catalog=[],this.catalogError=n.message}}async refreshServerRegistry(){const r=(await(await Ae()).store.settings.findOne("server-sync:url"))?.value;if(typeof r!="string"||r.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const t=`${r.replace(/\/+$/,"")}/plugins/registry`;try{const a=await fetch(t,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);const c=await a.json(),f=Array.isArray(c.plugins)?c.plugins:[];this.serverCatalog=f.map(m=>({...m,absUrl:new URL(m.url,t).toString()})),this.serverCatalogError=null}catch(a){this.serverCatalog=[],this.serverCatalogError=a.message}}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const n=this.addUrl.trim();if(!n)return;if(!/^https?:\/\//i.test(n)){await(await Ae()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(n))return;this.urls=[...this.urls,n];const r=await Ae();await r.store.workspaces.patch(r.workspaceId,{pluginUrls:this.urls}),await r.store.plugins.upsert({url:n,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,n){const r=await Ae(),o=this.records.get(e);await r.store.plugins.upsert({...o??{url:e,lastFetched:0},enabled:n}),this.records=new Map(this.records.set(e,{...o,url:e,enabled:n,lastFetched:o?.lastFetched??0}))}async removePlugin(e){const n=await Ae();this.urls=this.urls.filter(r=>r!==e),await n.store.workspaces.patch(n.workspaceId,{pluginUrls:this.urls}),await n.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,n){const r=await Ae(),o=Di(e),t=this.records.get(o);await r.store.plugins.upsert({...t??{url:o,lastFetched:0},url:o,enabled:n,lastFetched:t?.lastFetched??0}),this.optionalBuiltins=this.optionalBuiltins.map(a=>a.name===e?{...a,enabled:n}:a),this.dirtyBuiltins=!0}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const n=await Ae();try{const r=await fetch(e.absUrl,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const o=await r.text();await n.store.workspaces.patch(n.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await n.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:o});const t=new Blob([o],{type:"text/javascript"}),a=URL.createObjectURL(t);try{const f=await import(a);await f.init?.(n.api),await f.load?.(n.api)}finally{setTimeout(()=>URL.revokeObjectURL(a),5e3)}n.events.emit("app:ready",{workspaceId:n.workspaceId}),this.urls=[...this.urls,e.absUrl];const c=await n.store.plugins.find();this.records=new Map(c.map(f=>[f.url,f])),n.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(r){await n.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${r.message}`}),n.api.ui.dialogs.toast(`Could not install ${e.name}: ${r.message}`,{kind:"error",title:"Plugin error"})}finally{const r=new Set(this.installing);r.delete(e.absUrl),this.installing=r}}render(){return X`
      <dialog @cancel=${this.close} @keydown=${$n}>
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
            ${this.catalog.length>0?X`<div class="section-h">Available from this host</div>`:""}
            ${this.catalog.map(e=>{const n=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return X`
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
                    ?disabled=${n||r}
                    @click=${()=>this.installFromCatalog(e)}
                  >
                    <span class="mi sm">
                      ${n?"check":r?"hourglass_empty":"download"}
                    </span>
                    ${n?"Installed":r?"Installing…":"Install"}
                  </button>
                </div>
              `})}
            ${this.catalogError?X`<div class="meta err">
                  Host catalog unavailable: ${this.catalogError}
                </div>`:""}

            ${this.serverCatalog.length>0||this.serverCatalogError?X`<div class="section-h">From server</div>`:""}
            ${this.serverCatalog.map(e=>{const n=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return X`
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
                    ?disabled=${n||r}
                    @click=${()=>this.installFromCatalog(e)}
                  >
                    <span class="mi sm">
                      ${n?"check":r?"hourglass_empty":"download"}
                    </span>
                    ${n?"Installed":r?"Installing…":"Install"}
                  </button>
                </div>
              `})}
            ${this.serverCatalogError?X`<div class="meta err">
                  Server registry unavailable: ${this.serverCatalogError}
                </div>`:""}

            ${this.optionalBuiltins.length>0?X`<div class="section-h">Optional built-ins</div>`:""}
            ${this.optionalBuiltins.map(e=>X`
                <div class="row">
                  <input
                    type="checkbox"
                    title="Enable / disable"
                    .checked=${e.enabled}
                    @change=${n=>this.toggleBuiltin(e.name,n.target.checked)}
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
            ${this.builtinNames.map(e=>X`
                <div class="row builtin">
                  <span class="mi sm">extension</span>
                  <div>
                    <div>${e}</div>
                    <div class="meta">Built-in</div>
                  </div>
                  <span class="meta">always on</span>
                </div>
              `)}

            ${this.urls.length>0?X`<div class="section-h">Installed (by URL)</div>`:""}
            ${this.urls.map(e=>{const n=this.records.get(e),r=n?.lastError?" error":"",o=n?.lastFetched?new Date(n.lastFetched).toLocaleString():"never";return X`
                <div class=${`row${r}`}>
                  <input
                    type="checkbox"
                    title="Enable / disable"
                    .checked=${n?.enabled!==!1}
                    @change=${t=>this.toggleEnabled(e,t.target.checked)}
                  />
                  <div>
                    <div class="url">${e}</div>
                    <div class=${`meta${n?.lastError?" err":""}`}>
                      ${n?.lastError??`Last fetched: ${o}`}
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
    `}};wt.styles=[Jt,xn,ct`
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
    `];Tt([ne()],wt.prototype,"urls",2);Tt([ne()],wt.prototype,"records",2);Tt([ne()],wt.prototype,"addUrl",2);Tt([ne()],wt.prototype,"builtinNames",2);Tt([ne()],wt.prototype,"optionalBuiltins",2);Tt([ne()],wt.prototype,"dirtyBuiltins",2);Tt([ne()],wt.prototype,"catalog",2);Tt([ne()],wt.prototype,"catalogError",2);Tt([ne()],wt.prototype,"serverCatalog",2);Tt([ne()],wt.prototype,"serverCatalogError",2);Tt([ne()],wt.prototype,"installing",2);wt=Tt([pt("plugin-manager-dialog")],wt);/**
 * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu
 * @version v4.16.1
 * @homepage https://jspanel.de/
 * @license MIT
 * @author Stefan Sträßer - info@jspanel.de
 * @author of dialog extension: Michael Daumling - michael@terrapinlogo.com
 * @github https://github.com/Flyer53/jsPanel4.git
 */let O={version:"4.16.1",date:"2022-11-03 09:18",ajaxAlwaysCallbacks:[],autopositionSpacing:4,closeOnEscape:(()=>{document.addEventListener("keydown",e=>{(e.key==="Escape"||e.code==="Escape"||e.key==="Esc")&&O.getPanels(n=>n.classList.contains("jsPanel")).some(n=>n.options.closeOnEscape?typeof n.options.closeOnEscape=="function"?n.options.closeOnEscape.call(n,n):(n.close(null,!0),!0):!1)},!1)})(),defaults:{boxShadow:3,container:"window",contentSize:{width:"400px",height:"200px"},dragit:{cursor:"move",handles:".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",opacity:.8,disableOnMaximized:!0},header:!0,headerTitle:"jsPanel",headerControls:{size:"md"},iconfont:void 0,maximizedMargin:0,minimizeTo:"default",paneltype:"standard",position:{my:"center",at:"center"},resizeit:{handles:"n, e, s, w, ne, se, sw, nw",minWidth:128,minHeight:38},theme:"default"},defaultAutocloseConfig:{time:"8s",progressbar:!0},defaultSnapConfig:{sensitivity:70,trigger:"panel",active:"both"},extensions:{},globalCallbacks:!1,icons:{close:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>',maximize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>',normalize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>',minimize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>',smallify:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>'},idCounter:0,isIE:document.documentMode||!1,pointerdown:"onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],pointermove:"onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],pointerup:"onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"],polyfills:(()=>{Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e==null)throw new TypeError("Cannot convert first argument to object");let n=Object(e);for(let r=1;r<arguments.length;r++){let o=arguments[r];if(o==null)continue;o=Object(o);let t=Object.keys(Object(o));for(let a=0,c=t.length;a<c;a++){let f=t[a],m=Object.getOwnPropertyDescriptor(o,f);m!==void 0&&m.enumerable&&(n[f]=o[f])}}return n}}),Object.entries||(Object.entries=function(e){for(var n=Object.keys(e),r=n.length,o=new Array(r);r--;)o[r]=[n[r],e[n[r]]];return o}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,n){n=n||window;for(let r=0;r<this.length;r++)e.call(n,this[r],r,this)}),(function(e){e.forEach(function(n){n.append=n.append||function(){let r=Array.prototype.slice.call(arguments),o=document.createDocumentFragment();r.forEach(function(t){let a=t instanceof Node;o.appendChild(a?t:document.createTextNode(String(t)))}),this.appendChild(o)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){let n=(this.document||this.ownerDocument).querySelectorAll(e),r,o=this;do for(r=n.length;--r>=0&&n.item(r)!==o;);while(r<0&&(o=o.parentElement));return o}),(function(){if(typeof window.CustomEvent=="function")return!1;function e(n,r){r=r||{bubbles:!1,cancelable:!1,detail:void 0};let o=document.createEvent("CustomEvent");return o.initCustomEvent(n,r.bubbles,r.cancelable,r.detail),o}e.prototype=window.Event.prototype,window.CustomEvent=e})(),String.prototype.endsWith||(String.prototype.endsWith=function(e,n){return(n===void 0||n>this.length)&&(n=this.length),this.substring(n-e.length,n)===e}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,n){var r=n>0?n|0:0;return this.substring(r,r+e.length)===e}}),String.prototype.includes||(String.prototype.includes=function(e,n){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return n===void 0&&(n=0),this.indexOf(e,n)!==-1}),String.prototype.repeat||(String.prototype.repeat=function(e){if(this==null)throw new TypeError("can't convert "+this+" to object");var n=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),n.length==0||e==0)return"";if(n.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=n.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)n+=n,e--;return n+=n.substring(0,r-n.length),n}),Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,n){if(this==null)throw new TypeError('"this" is null or not defined');let r=Object(this),o=r.length>>>0;if(o===0)return!1;let t=n|0,a=Math.max(t>=0?t:o-Math.abs(t),0);function c(f,m){return f===m||typeof f=="number"&&typeof m=="number"&&isNaN(f)&&isNaN(m)}for(;a<o;){if(c(r[a],e))return!0;a++}return!1}})})(),ziBase:100,colorFilledLight:.81,colorFilledDark:.08,colorFilled:0,colorBrightnessThreshold:.55,colorNames:{default:"b0bec5",secondary:"b0bec5",primary:"01579b",info:"039be5",success:"2e7d32",warning:"f57f17",danger:"dd2c00",light:"e0e0e0",dark:"263238",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",grey50:"fafafa",grey100:"f5f5f5",grey200:"eeeeee",grey300:"e0e0e0",grey400:"bdbdbd",grey500:"9e9e9e",grey600:"757575",grey700:"616161",grey800:"424242",grey900:"212121",gray50:"fafafa",gray100:"f5f5f5",gray200:"eeeeee",gray300:"e0e0e0",gray400:"bdbdbd",gray500:"9e9e9e",gray600:"757575",gray700:"616161",gray800:"424242",gray900:"212121",bluegrey50:"eceff1",bluegrey100:"CFD8DC",bluegrey200:"B0BEC5",bluegrey300:"90A4AE",bluegrey400:"78909C",bluegrey500:"607D8B",bluegrey600:"546E7A",bluegrey700:"455A64",bluegrey800:"37474F",bluegrey900:"263238",bluegray50:"eceff1",bluegray100:"CFD8DC",bluegray200:"B0BEC5",bluegray300:"90A4AE",bluegray400:"78909C",bluegray500:"607D8B",bluegray600:"546E7A",bluegray700:"455A64",bluegray800:"37474F",bluegray900:"263238",red50:"FFEBEE",red100:"FFCDD2",red200:"EF9A9A",red300:"E57373",red400:"EF5350",red500:"F44336",red600:"E53935",red700:"D32F2F",red800:"C62828",red900:"B71C1C",reda100:"FF8A80",reda200:"FF5252",reda400:"FF1744",reda700:"D50000",pink50:"FCE4EC",pink100:"F8BBD0",pink200:"F48FB1",pink300:"F06292",pink400:"EC407A",pink500:"E91E63",pink600:"D81B60",pink700:"C2185B",pink800:"AD1457",pink900:"880E4F",pinka100:"FF80AB",pinka200:"FF4081",pinka400:"F50057",pinka700:"C51162",purple50:"F3E5F5",purple100:"E1BEE7",purple200:"CE93D8",purple300:"BA68C8",purple400:"AB47BC",purple500:"9C27B0",purple600:"8E24AA",purple700:"7B1FA2",purple800:"6A1B9A",purple900:"4A148C",purplea100:"EA80FC",purplea200:"E040FB",purplea400:"D500F9",purplea700:"AA00FF",deeppurple50:"EDE7F6",deeppurple100:"D1C4E9",deeppurple200:"B39DDB",deeppurple300:"9575CD",deeppurple400:"7E57C2",deeppurple500:"673AB7",deeppurple600:"5E35B1",deeppurple700:"512DA8",deeppurple800:"4527A0",deeppurple900:"311B92",deeppurplea100:"B388FF",deeppurplea200:"7C4DFF",deeppurplea400:"651FFF",deeppurplea700:"6200EA",indigo50:"E8EAF6",indigo100:"C5CAE9",indigo200:"9FA8DA",indigo300:"7986CB",indigo400:"5C6BC0",indigo500:"3F51B5",indigo600:"3949AB",indigo700:"303F9F",indigo800:"283593",indigo900:"1A237E",indigoa100:"8C9EFF",indigoa200:"536DFE",indigoa400:"3D5AFE",indigoa700:"304FFE",blue50:"E3F2FD",blue100:"BBDEFB",blue200:"90CAF9",blue300:"64B5F6",blue400:"42A5F5",blue500:"2196F3",blue600:"1E88E5",blue700:"1976D2",blue800:"1565C0",blue900:"0D47A1",bluea100:"82B1FF",bluea200:"448AFF",bluea400:"2979FF",bluea700:"2962FF",lightblue50:"E1F5FE",lightblue100:"B3E5FC",lightblue200:"81D4FA",lightblue300:"4FC3F7",lightblue400:"29B6F6",lightblue500:"03A9F4",lightblue600:"039BE5",lightblue700:"0288D1",lightblue800:"0277BD",lightblue900:"01579B",lightbluea100:"80D8FF",lightbluea200:"40C4FF",lightbluea400:"00B0FF",lightbluea700:"0091EA",cyan50:"E0F7FA",cyan100:"B2EBF2",cyan200:"80DEEA",cyan300:"4DD0E1",cyan400:"26C6DA",cyan500:"00BCD4",cyan600:"00ACC1",cyan700:"0097A7",cyan800:"00838F",cyan900:"006064",cyana100:"84FFFF",cyana200:"18FFFF",cyana400:"00E5FF",cyana700:"00B8D4",teal50:"E0F2F1",teal100:"B2DFDB",teal200:"80CBC4",teal300:"4DB6AC",teal400:"26A69A",teal500:"009688",teal600:"00897B",teal700:"00796B",teal800:"00695C",teal900:"004D40",teala100:"A7FFEB",teala200:"64FFDA",teala400:"1DE9B6",teala700:"00BFA5",green50:"E8F5E9",green100:"C8E6C9",green200:"A5D6A7",green300:"81C784",green400:"66BB6A",green500:"4CAF50",green600:"43A047",green700:"388E3C",green800:"2E7D32",green900:"1B5E20",greena100:"B9F6CA",greena200:"69F0AE",greena400:"00E676",greena700:"00C853",lightgreen50:"F1F8E9",lightgreen100:"DCEDC8",lightgreen200:"C5E1A5",lightgreen300:"AED581",lightgreen400:"9CCC65",lightgreen500:"8BC34A",lightgreen600:"7CB342",lightgreen700:"689F38",lightgreen800:"558B2F",lightgreen900:"33691E",lightgreena100:"CCFF90",lightgreena200:"B2FF59",lightgreena400:"76FF03",lightgreena700:"64DD17",lime50:"F9FBE7",lime100:"F0F4C3",lime200:"E6EE9C",lime300:"DCE775",lime400:"D4E157",lime500:"CDDC39",lime600:"C0CA33",lime700:"AFB42B",lime800:"9E9D24",lime900:"827717",limea100:"F4FF81",limea200:"EEFF41",limea400:"C6FF00",limea700:"AEEA00",yellow50:"FFFDE7",yellow100:"FFF9C4",yellow200:"FFF59D",yellow300:"FFF176",yellow400:"FFEE58",yellow500:"FFEB3B",yellow600:"FDD835",yellow700:"FBC02D",yellow800:"F9A825",yellow900:"F57F17",yellowa100:"FFFF8D",yellowa200:"FFFF00",yellowa400:"FFEA00",yellowa700:"FFD600",amber50:"FFF8E1",amber100:"FFECB3",amber200:"FFE082",amber300:"FFD54F",amber400:"FFCA28",amber500:"FFC107",amber600:"FFB300",amber700:"FFA000",amber800:"FF8F00",amber900:"FF6F00",ambera100:"FFE57F",ambera200:"FFD740",ambera400:"FFC400",ambera700:"FFAB00",orange50:"FFF3E0",orange100:"FFE0B2",orange200:"FFCC80",orange300:"FFB74D",orange400:"FFA726",orange500:"FF9800",orange600:"FB8C00",orange700:"F57C00",orange800:"EF6C00",orange900:"E65100",orangea100:"FFD180",orangea200:"FFAB40",orangea400:"FF9100",orangea700:"FF6D00",deeporange50:"FBE9E7",deeporange100:"FFCCBC",deeporange200:"FFAB91",deeporange300:"FF8A65",deeporange400:"FF7043",deeporange500:"FF5722",deeporange600:"F4511E",deeporange700:"E64A19",deeporange800:"D84315",deeporange900:"BF360C",deeporangea100:"FF9E80",deeporangea200:"FF6E40",deeporangea400:"FF3D00",deeporangea700:"DD2C00",brown50:"EFEBE9",brown100:"D7CCC8",brown200:"BCAAA4",brown300:"A1887F",brown400:"8D6E63",brown500:"795548",brown600:"6D4C41",brown700:"5D4037",brown800:"4E342E",brown900:"3E2723","mdb-default":"2BBBAD","mdb-default-dark":"00695c","mdb-primary":"4285F4","mdb-primary-dark":"0d47a1","mdb-secondary":"aa66cc","mdb-secondary-dark":"9933CC","mdb-danger":"ff4444","mdb-danger-dark":"CC0000","mdb-warning":"ffbb33","mdb-warning-dark":"FF8800","mdb-success":"00C851","mdb-success-dark":"007E33","mdb-info":"33b5e5","mdb-info-dark":"0099CC","mdb-elegant":"2E2E2E","mdb-elegant-dark":"212121","mdb-stylish":"4B515D","mdb-stylish-dark":"3E4551","mdb-unique":"3F729B","mdb-unique-dark":"1C2331","mdb-special":"37474F","mdb-special-dark":"263238"},errorReporting:1,modifier:!1,helper:(()=>{document.addEventListener("keydown",e=>O.modifier=e),document.addEventListener("keyup",()=>O.modifier=!1)})(),usePointerEvents(e=!0){e?(this.pointerdown="onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"]):(this.pointerdown="ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="ontouchend"in window?["touchend","mouseup"]:["mouseup"])},pOcontainer(e){if(e==="window")return document.body;if(typeof e=="string"){let n=document.querySelectorAll(e);return n.length&&n.length>0?n:!1}else{if(e.nodeType===1)return e;if(e.length)return e[0]}return!1},pOcontainment(e){let n=e;if(typeof e=="function"&&(n=e()),typeof n=="number")return[n,n,n,n];if(Array.isArray(n)){if(n.length===1)return[n[0],n[0],n[0],n[0]];if(n.length===2)return n.concat(n);n.length===3&&(n[3]=n[1])}return n},pOsize(e,n){let r=n||this.defaults.contentSize;const o=e.parentElement;if(typeof r=="string"){const t=r.trim().split(" ");r={},r.width=t[0],t.length===2?r.height=t[1]:r.height=t[0]}else r.width&&!r.height?r.height=r.width:r.height&&!r.width&&(r.width=r.height);if(String(r.width).match(/^[\d.]+$/gi))r.width+="px";else if(typeof r.width=="string"&&r.width.endsWith("%"))if(o===document.body)r.width=window.innerWidth*(parseFloat(r.width)/100)+"px";else{const t=window.getComputedStyle(o),a=parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth);r.width=(parseFloat(t.width)-a)*(parseFloat(r.width)/100)+"px"}else typeof r.width=="function"&&(r.width=r.width.call(e,e),(typeof r.width=="number"||typeof r.width=="string"&&r.width.match(/^[\d.]+$/gi))&&(r.width+="px"));if(String(r.height).match(/^[\d.]+$/gi))r.height+="px";else if(typeof r.height=="string"&&r.height.endsWith("%"))if(o===document.body)r.height=window.innerHeight*(parseFloat(r.height)/100)+"px";else{const t=window.getComputedStyle(o),a=parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth);r.height=(parseFloat(t.height)-a)*(parseFloat(r.height)/100)+"px"}else typeof r.height=="function"&&(r.height=r.height.call(e,e),(typeof r.height=="number"||typeof r.height=="string"&&r.height.match(/^[\d.]+$/gi))&&(r.height+="px"));return r},pOborder(e){let n=[],r=e.trim().replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," ").split(" ");return r.forEach((o,t)=>{(o.startsWith("--")||o.startsWith("var"))&&(r[t]=O.getCssVariableValue(o))}),r.forEach(o=>{O.colorNames[o]?n[2]="#"+O.colorNames[o]:o.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/)?n[1]=o:o.match(/(thin|medium|thick)|(\d*\.?\d*(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vmax|vmin|vb|vi|px|cm|mm|Q|in|pc|pt))/)?n[0]=o:n[2]=o}),n[0]||(n[0]="medium"),n[1]||(n[1]="solid"),n[2]||(n[2]=""),n},pOheaderControls(e){if(typeof e=="string"){let n={},r=e.toLowerCase(),o=r.match(/xl|lg|md|sm|xs/),t=r.match(/closeonly|none/);return o&&(n.size=o[0]),t&&(n=Object.assign({},n,{maximize:"remove",normalize:"remove",minimize:"remove",smallify:"remove"}),t[0]==="none"&&(n.close="remove")),Object.assign({},this.defaults.headerControls,n)}else return Object.assign({},this.defaults.headerControls,e)},pOtheme(e){e=e.trim();let n,r="";if(e.match(/^(rgb|hsl|var)/)){let o=e.indexOf(")");n=e.slice(0,o+1).replace(/\s+/g,""),n.startsWith("var")&&(n=O.getCssVariableValue(n)),r=e.slice(o+1,e.length).trim()}else if(e.match(/^(#|\w|--)/)){let o=e.indexOf(" ");o>0?(n=e.slice(0,o+1).replace(/\s+/g,""),r=e.slice(o+1,e.length).trim()):n=e,n.startsWith("--")&&(n=O.getCssVariableValue(n))}if(n.match(/^([\da-f]{3}|[\da-f]{6})$/gi)&&(n="#"+n),r.startsWith("fillcolor")){let o=r.indexOf(" ");r=r.slice(o+1,r.length).trim().replace(/\s+/g,""),r.match(/^([\da-f]{3}|[\da-f]{6})$/gi)?r="#"+r:O.colorNames[r]?r="#"+O.colorNames[r]:r.match(/^(--|var)/)?r=O.getCssVariableValue(r):r="#fff"}return{color:n,colors:!1,filling:r}},color(e){let n=e.toLowerCase(),r,o,t,a,c,f,m,F,A,R={};const T=/^#?([\da-f]{3}|[\da-f]{6})$/gi,N=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,Q=/^hsla?\((\d{1,3}),(\d{1,3}%),(\d{1,3}%),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,oe=this.colorNames;return oe[n]&&(n=oe[n]),n.match(T)!==null?(n=n.replace("#",""),n.length%2===1?(r=n.slice(0,1).repeat(2),o=n.slice(1,2).repeat(2),t=n.slice(2,3).repeat(2),R.rgb={r:parseInt(r,16),g:parseInt(o,16),b:parseInt(t,16)},R.hex=`#${r}${o}${t}`):(R.rgb={r:parseInt(n.slice(0,2),16),g:parseInt(n.slice(2,4),16),b:parseInt(n.slice(4,6),16)},R.hex=`#${n}`),A=this.rgbToHsl(R.rgb.r,R.rgb.g,R.rgb.b),R.hsl=A,R.rgb.css=`rgb(${R.rgb.r},${R.rgb.g},${R.rgb.b})`):n.match(N)?(m=N.exec(n),R.rgb={css:n,r:m[1],g:m[2],b:m[3]},R.hex=this.rgbToHex(m[1],m[2],m[3]),A=this.rgbToHsl(m[1],m[2],m[3]),R.hsl=A):n.match(Q)?(m=Q.exec(n),a=m[1]/360,c=m[2].slice(0,m[2].length-1)/100,f=m[3].slice(0,m[3].length-1)/100,F=this.hslToRgb(a,c,f),R.rgb={css:`rgb(${F[0]},${F[1]},${F[2]})`,r:F[0],g:F[1],b:F[2]},R.hex=this.rgbToHex(R.rgb.r,R.rgb.g,R.rgb.b),R.hsl={css:`hsl(${m[1]},${m[2]},${m[3]})`,h:m[1],s:m[2],l:m[3]}):(R.hex="#f5f5f5",R.rgb={css:"rgb(245,245,245)",r:245,g:245,b:245},R.hsl={css:"hsl(0,0%,96%)",h:0,s:"0%",l:"96%"}),R},calcColors(e){const n=this.colorBrightnessThreshold,r=this.color(e),o=this.lighten(e,this.colorFilledLight),t=this.darken(e,this.colorFilled),a=this.perceivedBrightness(e)<=n?"#ffffff":"#000000",c=this.perceivedBrightness(o)<=n?"#ffffff":"#000000",f=this.perceivedBrightness(t)<=n?"#ffffff":"#000000",m=this.lighten(e,this.colorFilledDark),F=this.perceivedBrightness(m)<=n?"#ffffff":"#000000";return[r.hsl.css,o,t,a,c,f,m,F]},darken(e,n){const r=this.color(e).hsl,o=parseFloat(r.l),t=Math.round(o-o*n)+"%";return`hsl(${r.h},${r.s},${t})`},lighten(e,n){const r=this.color(e).hsl,o=parseFloat(r.l),t=Math.round(o+(100-o)*n)+"%";return`hsl(${r.h},${r.s},${t})`},hslToRgb(e,n,r){let o,t,a;if(n===0)o=t=a=r;else{let c=(F,A,R)=>(R<0&&(R+=1),R>1&&(R-=1),R<.16666666666666666?F+(A-F)*6*R:R<.5?A:R<.6666666666666666?F+(A-F)*(.6666666666666666-R)*6:F),f=r<.5?r*(1+n):r+n-r*n,m=2*r-f;o=c(m,f,e+1/3),t=c(m,f,e),a=c(m,f,e-1/3)}return[Math.round(o*255),Math.round(t*255),Math.round(a*255)]},rgbToHsl(e,n,r){e/=255,n/=255,r/=255;let o=Math.max(e,n,r),t=Math.min(e,n,r),a,c,f=(o+t)/2;if(o===t)a=c=0;else{let m=o-t;switch(c=f>.5?m/(2-o-t):m/(o+t),o){case e:a=(n-r)/m+(n<r?6:0);break;case n:a=(r-e)/m+2;break;case r:a=(e-n)/m+4;break}a/=6}return a=Math.round(a*360),c=Math.round(c*100)+"%",f=Math.round(f*100)+"%",{css:"hsl("+a+","+c+","+f+")",h:a,s:c,l:f}},rgbToHex(e,n,r){let o=Number(e).toString(16),t=Number(n).toString(16),a=Number(r).toString(16);return o.length===1&&(o=`0${o}`),t.length===1&&(t=`0${t}`),a.length===1&&(a=`0${a}`),`#${o}${t}${a}`},perceivedBrightness(e){const n=this.color(e).rgb;return n.r/255*.2126+n.g/255*.7152+n.b/255*.0722},pOposition(e){let n={},r=e.trim().split(/\s+/),o=r.filter(c=>c.match(/^(down|right|up|left)$/i));o.length&&(n.autoposition=o[0],r.splice(r.indexOf(o[0]),1));let t=r.filter(c=>c.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i));t.length?(n.my=t[0],n.at=t[1]||t[0],r.splice(r.indexOf(t[0]),1),t[1]&&r.splice(r.indexOf(t[1]),1)):(n.my="center",n.at="center");let a=r.filter(c=>c.match(/^[+-]?\d*\.?\d+[a-z%]*$/i));return a.length&&(n.offsetX=a[0].match(/^[+-]?\d*\.?\d+$/i)?`${a[0]}px`:a[0],a[1]?n.offsetY=a[1].match(/^[+-]?\d*\.?\d+$/i)?`${a[1]}px`:a[1]:n.offsetY=n.offsetX,r.splice(r.indexOf(a[0]),1),a[1]&&r.splice(r.indexOf(a[1]),1)),r.length&&(n.of=r.join(" ")),n},position(e,n){if(!n)return e.style.opacity=1,e;typeof n=="string"?n=Object.assign({},this.defaults.position,this.pOposition(n)):n=Object.assign({},this.defaults.position,n),["my","at","of"].forEach(oe=>{typeof n[oe]=="function"&&(n[oe]=n[oe].call(e,e))}),e.options.container==="window"&&(e.style.position="fixed"),typeof e=="string"?e=document.querySelector(e):Object.getPrototypeOf(e).jquery&&(e=e[0]);const r=e.options.container==="window"?"window":e.parentElement,o=e.getBoundingClientRect(),t=e.parentElement.getBoundingClientRect(),a=r==="window"?{left:0,top:0,width:document.documentElement.clientWidth,height:window.innerHeight}:{width:t.width,height:t.height,left:t.left,top:t.top},c=r==="window"?{x:1,y:1}:{x:a.width/r.offsetWidth,y:a.height/r.offsetHeight},f=r==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:window.getComputedStyle(r);a.width-=(parseFloat(f.borderLeftWidth)+parseFloat(f.borderRightWidth))*c.x,a.height-=(parseFloat(f.borderTopWidth)+parseFloat(f.borderBottomWidth))*c.y;let m;n.of?typeof n.of=="string"?m=n.of==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:document.querySelector(n.of).getBoundingClientRect():Object.getPrototypeOf(n.of).jquery?m=n.of[0].getBoundingClientRect():m=n.of.getBoundingClientRect():m=a;let F=this.getScrollbarWidth(document.body),A=this.getScrollbarWidth(e.parentElement),R="0px";n.my.startsWith("left-")?n.at.startsWith("left-")?n.of?R=m.left-a.left-parseFloat(f.borderLeftWidth)+"px":R="0px":n.at.startsWith("center")?n.of?R=m.left-a.left-parseFloat(f.borderLeftWidth)+m.width/2+"px":R=a.width/2+"px":n.at.startsWith("right-")&&(n.of?R=m.left-a.left-parseFloat(f.borderLeftWidth)+m.width+"px":R=a.width+"px"):n.my.startsWith("center")?n.at.startsWith("left-")?n.of?R=m.left-a.left-parseFloat(f.borderLeftWidth)-o.width/2+"px":R=-o.width/2+"px":n.at.startsWith("center")?n.of?R=m.left-a.left-parseFloat(f.borderLeftWidth)-(o.width-m.width)/2+"px":R=a.width/2-o.width/2+"px":n.at.startsWith("right-")&&(n.of?R=m.left-a.left-parseFloat(f.borderLeftWidth)+(m.width-o.width/2)+"px":R=a.width-o.width/2+"px"):n.my.startsWith("right-")&&(n.at.startsWith("left-")?n.of?R=m.left-a.left-parseFloat(f.borderLeftWidth)-o.width+"px":R=-o.width+"px":n.at.startsWith("center")?n.of?R=m.left-a.left-parseFloat(f.borderLeftWidth)-o.width+m.width/2+"px":R=a.width/2-o.width+"px":n.at.startsWith("right-")&&(n.of?R=m.left-a.left-parseFloat(f.borderLeftWidth)+m.width-o.width+"px":R=a.width-o.width+"px",r!=="window"&&(R=parseFloat(R)-A.y+"px")));let T="0px";n.my.endsWith("-top")?n.at.endsWith("-top")?n.of?T=m.top-a.top-parseFloat(f.borderTopWidth)+"px":T="0px":n.at.endsWith("center")?n.of?T=m.top-a.top-parseFloat(f.borderTopWidth)+m.height/2+"px":T=a.height/2+"px":n.at.endsWith("-bottom")&&(n.of?T=m.top-a.top-parseFloat(f.borderTopWidth)+m.height+"px":T=a.height+"px"):n.my.endsWith("center")?n.at.endsWith("-top")?n.of?T=m.top-a.top-parseFloat(f.borderTopWidth)-o.height/2+"px":T=-o.height/2+"px":n.at.endsWith("center")?n.of?T=m.top-a.top-parseFloat(f.borderTopWidth)-o.height/2+m.height/2+"px":T=a.height/2-o.height/2+"px":n.at.endsWith("-bottom")&&(n.of?T=m.top-a.top-parseFloat(f.borderTopWidth)-o.height/2+m.height+"px":T=a.height-o.height/2+"px"):n.my.endsWith("-bottom")&&(n.at.endsWith("-top")?n.of?T=m.top-a.top-parseFloat(f.borderTopWidth)-o.height+"px":T=-o.height+"px":n.at.endsWith("center")?n.of?T=m.top-a.top-parseFloat(f.borderTopWidth)-o.height+m.height/2+"px":T=a.height/2-o.height+"px":n.at.endsWith("-bottom")&&(n.of?T=m.top-a.top-parseFloat(f.borderTopWidth)-o.height+m.height+"px":T=a.height-o.height+"px",r!=="window"?T=parseFloat(T)-A.x+"px":T=parseFloat(T)-F.x+"px")),e.style.left=c.x===1?R:parseFloat(R)/c.x+"px",e.style.top=c.y===1?T:parseFloat(T)/c.y+"px";let N=getComputedStyle(e),Q={left:N.left,top:N.top};return n.autoposition&&n.my===n.at&&["left-top","center-top","right-top","left-bottom","center-bottom","right-bottom"].indexOf(n.my)>=0&&(Q=this.applyPositionAutopos(e,Q,n)),(n.offsetX||n.offsetY)&&(Q=this.applyPositionOffset(e,Q,n)),(n.minLeft||n.minTop||n.maxLeft||n.maxTop)&&(Q=this.applyPositionMinMax(e,Q,n)),n.modify&&(Q=this.applyPositionModify(e,Q,n)),typeof e.options.opacity=="number"?e.style.opacity=e.options.opacity:e.style.opacity=1,e},applyPositionAutopos(e,n,r){const o=`${r.my}-${r.autoposition.toLowerCase()}`;e.classList.add(o);const t=Array.prototype.slice.call(document.querySelectorAll(`.${o}`)),a=t.indexOf(e);if(t.length>1){switch(r.autoposition){case"down":t.forEach((c,f)=>{f>0&&f<=a&&(n.top=parseFloat(n.top)+t[--f].getBoundingClientRect().height+O.autopositionSpacing+"px")});break;case"up":t.forEach((c,f)=>{f>0&&f<=a&&(n.top=parseFloat(n.top)-t[--f].getBoundingClientRect().height-O.autopositionSpacing+"px")});break;case"right":t.forEach((c,f)=>{f>0&&f<=a&&(n.left=parseFloat(n.left)+t[--f].getBoundingClientRect().width+O.autopositionSpacing+"px")});break;case"left":t.forEach((c,f)=>{f>0&&f<=a&&(n.left=parseFloat(n.left)-t[--f].getBoundingClientRect().width-O.autopositionSpacing+"px")});break}e.style.left=n.left,e.style.top=n.top}return{left:n.left,top:n.top}},applyPositionOffset(e,n,r){["offsetX","offsetY"].forEach(t=>{r[t]?(typeof r[t]=="function"&&(r[t]=r[t].call(n,n,r)),isNaN(r[t])===!1&&(r[t]=`${r[t]}px`)):r[t]="0px"}),e.style.left=`calc(${e.style.left} + ${r.offsetX})`,e.style.top=`calc(${e.style.top} + ${r.offsetY})`;const o=getComputedStyle(e);return{left:o.left,top:o.top}},applyPositionMinMax(e,n,r){if(["minLeft","minTop","maxLeft","maxTop"].forEach(t=>{r[t]&&(typeof r[t]=="function"&&(r[t]=r[t].call(n,n,r)),(Number.isInteger(r[t])||r[t].match(/^\d+$/))&&(r[t]=`${r[t]}px`))}),r.minLeft){e.style.left=r.minLeft;let t=getComputedStyle(e).left;parseFloat(t)<parseFloat(n.left)?e.style.left=n.left:n.left=t}if(r.minTop){e.style.top=r.minTop;let t=getComputedStyle(e).top;parseFloat(t)<parseFloat(n.top)?e.style.top=n.top:n.top=t}if(r.maxLeft){e.style.left=r.maxLeft;let t=getComputedStyle(e).left;parseFloat(t)>parseFloat(n.left)?e.style.left=n.left:n.left=t}if(r.maxTop){e.style.top=r.maxTop;let t=getComputedStyle(e).top;parseFloat(t)>parseFloat(n.top)?e.style.top=n.top:n.top=t}const o=getComputedStyle(e);return{left:o.left,top:o.top}},applyPositionModify(e,n,r){if(r.modify&&typeof r.modify=="function"){const t=r.modify.call(n,n,r);e.style.left=Number.isInteger(t.left)||t.left.match(/^\d+$/)?`${t.left}px`:t.left,e.style.top=Number.isInteger(t.top)||t.top.match(/^\d+$/)?`${t.top}px`:t.top}const o=getComputedStyle(e);return{left:o.left,top:o.top}},autopositionRemaining(e){let n,r=e.options.container;["left-top-down","left-top-right","center-top-down","right-top-down","right-top-left","left-bottom-up","left-bottom-right","center-bottom-up","right-bottom-up","right-bottom-left"].forEach(o=>{e.classList.contains(o)&&(n=o)}),n&&(r==="window"?document.body:typeof r=="string"?document.querySelector(r):r).querySelectorAll(`.${n}`).forEach(t=>t.reposition())},getThemeDetails(e){const n=this.pOtheme(e);if(n.color.startsWith("bootstrap-")){let r=n.color.indexOf("-"),o=document.createElement("button");o.className="btn btn"+n.color.slice(r),document.body.appendChild(o),n.color=getComputedStyle(o).backgroundColor.replace(/\s+/gi,""),document.body.removeChild(o),o=void 0}return n.colors=this.calcColors(n.color),n},clearTheme(e,n){return e.content.classList.remove("jsPanel-content-filled","jsPanel-content-filledlight"),e.header.classList.remove("jsPanel-hdr-light"),e.header.classList.remove("jsPanel-hdr-dark"),e.style.backgroundColor="",this.setStyles(e.headertoolbar,{boxShadow:"",width:"",marginLeft:"",borderTopColor:"transparent"}),this.setStyles(e.content,{background:"",borderTopColor:"transparent"}),e.header.style.background="",Array.prototype.slice.call(e.controlbar.querySelectorAll(".jsPanel-icon")).concat([e.headerlogo,e.headertitle,e.headertoolbar,e.content]).forEach(r=>r.style.color=""),n&&n.call(e,e),e},applyColorTheme(e,n){if(e.style.backgroundColor=n.colors[0],e.header.style.backgroundColor=n.colors[0],e.header.style.color=n.colors[3],[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(r=>e.querySelector(r).style.color=n.colors[3]),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(r=>r.style.color=n.colors[3]),typeof e.options.theme=="string"&&n.filling==="filled"&&(e.content.style.borderTop=n.colors[3]==="#000000"?"1px solid rgba(0,0,0,0.15)":"1px solid rgba(255,255,255,0.15)"),n.colors[3]==="#000000"?e.header.classList.add("jsPanel-hdr-light"):e.header.classList.add("jsPanel-hdr-dark"),n.filling)switch(n.filling){case"filled":this.setStyles(e.content,{backgroundColor:n.colors[2],color:n.colors[3]});break;case"filledlight":e.content.style.backgroundColor=n.colors[1];break;case"filleddark":this.setStyles(e.content,{backgroundColor:n.colors[6],color:n.colors[7]});break;default:e.content.style.backgroundColor=n.filling,e.content.style.color=this.perceivedBrightness(n.filling)<=this.colorBrightnessThreshold?"#fff":"#000"}return e},applyCustomTheme(e,n){let r={bgPanel:"#ffffff",bgContent:"#ffffff",bgFooter:"#f5f5f5",colorHeader:"#000000",colorContent:"#000000",colorFooter:"#000000",border:void 0,borderRadius:void 0},o=typeof n=="object"?Object.assign(r,n):r,t=o.bgPanel,a=o.bgContent,c=o.colorHeader,f=o.colorContent,m=o.bgFooter,F=o.colorFooter;return this.colorNames[t]?e.style.background="#"+this.colorNames[t]:e.style.background=this.getCssVariableValue(t),this.colorNames[c]&&(c="#"+this.colorNames[c]),[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(T=>e.querySelector(T).style.color=this.getCssVariableValue(c)),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(T=>T.style.color=this.getCssVariableValue(c)),this.colorNames[a]?e.content.style.background="#"+this.colorNames[a]:e.content.style.background=this.getCssVariableValue(a),this.colorNames[f]?e.content.style.color="#"+this.colorNames[f]:e.content.style.color=this.getCssVariableValue(f),this.perceivedBrightness(c)>this.colorBrightnessThreshold?e.header.classList.add("jsPanel-hdr-dark"):e.header.classList.add("jsPanel-hdr-light"),this.perceivedBrightness(f)>this.colorBrightnessThreshold?e.content.style.borderTop="1px solid rgba(255,255,255,0.15)":e.content.style.borderTop="1px solid rgba(0,0,0,0.15)",this.colorNames[m]?e.footer.style.background="#"+this.colorNames[m]:e.footer.style.background=this.getCssVariableValue(m),this.colorNames[F]?e.footer.style.color="#"+this.colorNames[F]:e.footer.style.color=this.getCssVariableValue(F),o.border&&e.setBorder(o.border),o.borderRadius&&(e.options.borderRadius=void 0,e.setBorderRadius(o.borderRadius)),e},getCssVariableValue(e){if(e.startsWith("--"))return getComputedStyle(document.documentElement).getPropertyValue(e).replace(/\s+/g,"");if(e.startsWith("var")){let n=e.slice(e.indexOf("(")+1,e.indexOf(")"));return getComputedStyle(document.documentElement).getPropertyValue(n).replace(/\s+/g,"")}return e},getScrollbarWidth(e=document.body){if(e===document.body)return{y:window.innerWidth-document.documentElement.clientWidth,x:window.innerHeight-document.documentElement.clientHeight};{let n=getComputedStyle(e);return{y:e.offsetWidth-e.clientWidth-parseFloat(n.borderRightWidth)-parseFloat(n.borderLeftWidth),x:e.offsetHeight-e.clientHeight-parseFloat(n.borderBottomWidth)-parseFloat(n.borderTopWidth)}}},remClass(e,n){return n.trim().split(/\s+/).forEach(r=>e.classList.remove(r)),e},setClass(e,n){return n.trim().split(/\s+/).forEach(r=>e.classList.add(r)),e},setStyles(e,n){for(const[r,o]of Object.entries(n))e.style[r]=typeof o=="string"?O.getCssVariableValue(o):o;return e},setStyle(e,n){return this.setStyles.call(e,e,n)},strToHtml(e){return document.createRange().createContextualFragment(e)},toggleClass(e,n){return n.trim().split(/\s+/).forEach(r=>e.classList.contains(r)?e.classList.remove(r):e.classList.add(r)),e},emptyNode(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e},addScript(e,n="application/javascript",r){if(!document.querySelector(`script[src="${e}"]`)){const o=document.createElement("script");o.src=e,o.type=n,document.head.appendChild(o),r&&(o.onload=r)}},ajax(e,n){let r,o,t=new XMLHttpRequest;const a={method:"GET",async:!0,user:"",pwd:"",done:function(){if(n){let c=O.strToHtml(this.responseText);r.urlSelector&&(c=c.querySelector(r.urlSelector)),n.contentRemove(),n.content.append(c)}},autoresize:!0,autoreposition:!0};if(n&&typeof e=="string")r=Object.assign({},a,{url:e});else if(typeof e=="object"&&e.url)r=Object.assign({},a,e),r.url=e.url,r.async===!1&&(r.timeout=0,r.withCredentials&&(r.withCredentials=void 0),r.responseType&&(r.responseType=void 0));else{this.errorReporting&&O.errorpanel("XMLHttpRequest seems to miss the <mark>url</mark> parameter!");return}o=r.url.trim().split(/\s+/),r.url=encodeURI(o[0]),o.length>1&&(o.shift(),r.urlSelector=o.join(" ")),t.onreadystatechange=()=>{t.readyState===4&&(t.status===200?n?r.done.call(t,t,n):r.done.call(t,t):r.fail&&(n?r.fail.call(t,t,n):r.fail.call(t,t)),r.always&&(n?r.always.call(t,t,n):r.always.call(t,t)),n&&(r.autoresize||r.autoreposition)&&O.ajaxAutoresizeAutoreposition(n,r),O.ajaxAlwaysCallbacks.length&&O.ajaxAlwaysCallbacks.forEach(c=>{n?c.call(t,t,n):c.call(t,t)}))},t.open(r.method,r.url,r.async,r.user,r.pwd),t.timeout=r.timeout||0,r.withCredentials&&(t.withCredentials=r.withCredentials),r.responseType&&(t.responseType=r.responseType),r.beforeSend&&(n?r.beforeSend.call(t,t,n):r.beforeSend.call(t,t)),r.data?t.send(r.data):t.send(null)},fetch(e,n){let r;const o={bodyMethod:"text",autoresize:!0,autoreposition:!0,done:function(a,c){if(c){let f=O.strToHtml(a);c.contentRemove(),c.content.append(f)}}};if(n&&typeof e=="string")r=Object.assign({},o,{resource:encodeURI(e)});else if(typeof e=="object"&&e.resource)r=Object.assign({},o,e),r.resource=encodeURI(e.resource);else{this.errorReporting&&O.errorpanel("Fetch Request seems to miss the <mark>resource</mark> parameter!");return}const t=r.fetchInit||{};r.beforeSend&&(n?r.beforeSend.call(e,e,n):r.beforeSend.call(e,e)),fetch(r.resource,t).then(a=>{if(a.ok)return a[r.bodyMethod]()}).then(a=>{n?r.done.call(a,a,n):r.done.call(a,a),n&&(r.autoresize||r.autoreposition)&&O.ajaxAutoresizeAutoreposition(n,r)})},ajaxAutoresizeAutoreposition(e,n){const r=e.options.contentSize;if(typeof r=="string"&&r.match(/auto/i)){const o=r.split(" "),t=Object.assign({},{width:o[0],height:o[1]});n.autoresize&&e.resize(t),e.classList.contains("jsPanel-contextmenu")||n.autoreposition&&e.reposition()}else if(typeof r=="object"&&(r.width==="auto"||r.height==="auto")){const o=Object.assign({},r);n.autoresize&&e.resize(o),e.classList.contains("jsPanel-contextmenu")||n.autoreposition&&e.reposition()}},createPanelTemplate(e=!0){const n=document.createElement("div");return n.className="jsPanel",n.style.left="0",n.style.top="0",e&&["close","maximize","normalize","minimize","smallify"].forEach(r=>{n.setAttribute(`data-btn${r}`,"enabled")}),n.innerHTML=`<div class="jsPanel-hdr">
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
                            <div class="jsPanel-ftr"></div>`,n},createMinimizedTemplate(){const e=document.createElement("div");return e.className="jsPanel-replacement",e.innerHTML=`<div class="jsPanel-hdr">
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
                            </div>`,e},createSnapArea(e,n,r){const o=document.createElement("div"),t=e.parentElement;o.className=`jsPanel-snap-area jsPanel-snap-area-${n}`,n==="lt"||n==="rt"||n==="rb"||n==="lb"?(o.style.width=r+"px",o.style.height=r+"px"):n==="ct"||n==="cb"?o.style.height=r+"px":(n==="lc"||n==="rc")&&(o.style.width=r+"px"),t!==document.body&&(o.style.position="absolute"),document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${n}`)||e.parentElement.appendChild(o)},removeSnapAreas(){document.querySelectorAll(".jsPanel-snap-area").forEach(e=>e.parentElement.removeChild(e))},extend(e){if(Object.prototype.toString.call(e)==="[object Object]")for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&(this.extensions[n]=e[n])},getPanels(e=function(){return this.classList.contains("jsPanel-standard")}){return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(n=>e.call(n,n)).sort((n,r)=>r.style.zIndex-n.style.zIndex)},processCallbacks(e,n,r="some",o,t){if(typeof n=="function"&&(n=[n]),r)return n[r](a=>a.call(e,e,o,t));n.forEach(a=>a.call(e,e,o,t))},resetZi(){this.zi=((e=O.ziBase)=>{let n=e;return{next:()=>n++}})(),Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((e,n)=>e.style.zIndex-n.style.zIndex).forEach(e=>e.style.zIndex=O.zi.next())},errorpanel(e){this.create({paneltype:"error",dragit:!1,resizeit:!1,theme:{bgPanel:"white",bgContent:"white",colorHeader:"rebeccapurple",colorContent:"#333333",border:"2px solid rebeccapurple"},borderRadius:".33rem",headerControls:"closeonly xs",headerTitle:"&#9888; jsPanel Error",contentSize:{width:"50%",height:"auto"},position:"center-top 0 5 down",animateIn:"jsPanelFadeIn",content:`<div class="jsPanel-error-content-separator"></div><p>${e}</p>`})},create(e={},n){O.zi||(O.zi=((p=O.ziBase)=>{let v=p;return{next:()=>v++}})()),e.config?(e=Object.assign({},this.defaults,e.config,e),delete e.config):e=Object.assign({},this.defaults,e),e.id?typeof e.id=="function"&&(e.id=e.id()):e.id=`jsPanel-${O.idCounter+=1}`;const r=document.getElementById(e.id);if(r!==null){if(r.classList.contains("jsPanel")&&r.front(),this.errorReporting){let p=`&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${e.id}</mark> already exists in the document.`;O.errorpanel(p)}return!1}let o=this.pOcontainer(e.container);if(typeof o=="object"&&o.length&&o.length>0&&(o=o[0]),!o)return this.errorReporting&&O.errorpanel("&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist"),!1;["onbeforeclose","onbeforemaximize","onbeforeminimize","onbeforenormalize","onbeforesmallify","onbeforeunsmallify","onclosed","onfronted","onmaximized","onminimized","onnormalized","onsmallified","onstatuschange","onunsmallified"].forEach(p=>{e[p]?typeof e[p]=="function"&&(e[p]=[e[p]]):e[p]=[]});const t=e.template||this.createPanelTemplate();t.options=e,t.closetimer=void 0,t.status="initialized",t.currentData={},t.header=t.querySelector(".jsPanel-hdr"),t.headerbar=t.header.querySelector(".jsPanel-headerbar"),t.titlebar=t.header.querySelector(".jsPanel-titlebar"),t.headerlogo=t.headerbar.querySelector(".jsPanel-headerlogo"),t.headertitle=t.headerbar.querySelector(".jsPanel-title"),t.controlbar=t.headerbar.querySelector(".jsPanel-controlbar"),t.headertoolbar=t.header.querySelector(".jsPanel-hdr-toolbar"),t.content=t.querySelector(".jsPanel-content"),t.footer=t.querySelector(".jsPanel-ftr"),t.snappableTo=!1,t.snapped=!1,t.droppableTo=!1,t.progressbar=t.autocloseProgressbar=t.querySelector(".jsPanel-progressbar");const a=new CustomEvent("jspanelloaded",{detail:e.id,cancelable:!0}),c=new CustomEvent("jspanelstatuschange",{detail:e.id,cancelable:!0}),f=new CustomEvent("jspanelbeforenormalize",{detail:e.id,cancelable:!0}),m=new CustomEvent("jspanelnormalized",{detail:e.id,cancelable:!0}),F=new CustomEvent("jspanelbeforemaximize",{detail:e.id,cancelable:!0}),A=new CustomEvent("jspanelmaximized",{detail:e.id,cancelable:!0}),R=new CustomEvent("jspanelbeforeminimize",{detail:e.id,cancelable:!0}),T=new CustomEvent("jspanelminimized",{detail:e.id,cancelable:!0}),N=new CustomEvent("jspanelbeforesmallify",{detail:e.id,cancelable:!0}),Q=new CustomEvent("jspanelsmallified",{detail:e.id,cancelable:!0}),oe=new CustomEvent("jspanelsmallifiedmax",{detail:e.id,cancelable:!0}),Ke=new CustomEvent("jspanelbeforeunsmallify",{detail:e.id,cancelable:!0}),ke=new CustomEvent("jspanelfronted",{detail:e.id,cancelable:!0}),he=new CustomEvent("jspanelbeforeclose",{detail:e.id,cancelable:!0}),_e=new CustomEvent("jspanelclosed",{detail:e.id,cancelable:!0}),Wt=new CustomEvent("jspanelcloseduser",{detail:e.id,cancelable:!0});[a,c,f,m,F,A,R,T,N,Q,oe,Ke,ke,he].forEach(p=>p.panel=t);const De=t.querySelector(".jsPanel-btn-close"),nt=t.querySelector(".jsPanel-btn-maximize"),Ye=t.querySelector(".jsPanel-btn-normalize"),Ht=t.querySelector(".jsPanel-btn-smallify"),er=t.querySelector(".jsPanel-btn-minimize");De&&O.pointerup.forEach(p=>{De.addEventListener(p,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;t.close(null,!0)})}),nt&&O.pointerup.forEach(p=>{nt.addEventListener(p,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;t.maximize()})}),Ye&&O.pointerup.forEach(p=>{Ye.addEventListener(p,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;t.normalize()})}),Ht&&O.pointerup.forEach(p=>{Ht.addEventListener(p,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;t.status==="normalized"||t.status==="maximized"?t.smallify():(t.status==="smallified"||t.status==="smallifiedmax")&&t.unsmallify()})}),er&&O.pointerup.forEach(p=>{er.addEventListener(p,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;t.minimize()})});let Cn=O.extensions;for(let p in Cn)Object.prototype.hasOwnProperty.call(Cn,p)&&(t[p]=Cn[p]);if(t.setBorder=p=>{let v=O.pOborder(p);return v[2].length||(v[2]=t.style.backgroundColor),v=v.join(" "),t.style.border=v,t.options.border=v,t},t.setBorderRadius=p=>{typeof p=="string"&&(p.startsWith("--")||p.startsWith("var"))&&(p=p.replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," "),p=O.getCssVariableValue(p)),typeof p=="number"&&(p+="px"),t.style.borderRadius=p;const v=getComputedStyle(t);return t.options.header?(t.header.style.borderTopLeftRadius=v.borderTopLeftRadius,t.header.style.borderTopRightRadius=v.borderTopRightRadius):(t.content.style.borderTopLeftRadius=v.borderTopLeftRadius,t.content.style.borderTopRightRadius=v.borderTopRightRadius),t.options.footerToolbar?(t.footer.style.borderBottomRightRadius=v.borderBottomRightRadius,t.footer.style.borderBottomLeftRadius=v.borderBottomLeftRadius):(t.content.style.borderBottomRightRadius=v.borderBottomRightRadius,t.content.style.borderBottomLeftRadius=v.borderBottomLeftRadius),t},t.setTheme=(p=e.theme,v)=>{let D;if(t.status==="minimized"&&(D=!0,t.normalize()),O.clearTheme(t),typeof p=="object")e.border=void 0,O.applyCustomTheme(t,p);else if(typeof p=="string"){p==="none"&&(p="white");let b=O.getThemeDetails(p);O.applyColorTheme(t,b)}return D&&t.minimize(),v&&v.call(t,t),t},t.remove=(p,v,D)=>{t.parentElement.removeChild(t),document.getElementById(p)?D&&D.call(t,p,t):(t.removeMinimizedReplacement(),t.status="closed",v&&document.dispatchEvent(Wt),document.dispatchEvent(_e),t.options.onclosed&&O.processCallbacks(t,t.options.onclosed,"every",v),O.autopositionRemaining(t),D&&D.call(p,p)),window.removeEventListener("resize",t.windowResizeHandler),document.removeEventListener("jspanelresize",t.parentResizeHandler)},t.close=(p,v)=>{if(t.parentElement){if(t.closetimer&&window.clearInterval(t.closetimer),document.dispatchEvent(he),t.statusBefore=t.status,t.options.onbeforeclose&&t.options.onbeforeclose.length>0&&!O.processCallbacks(t,t.options.onbeforeclose,"some",t.status,v))return t;t.options.animateOut?(t.options.animateIn&&O.remClass(t,t.options.animateIn),O.setClass(t,t.options.animateOut),t.addEventListener("animationend",D=>{D.stopPropagation(),t.remove(t.id,v,p)})):t.remove(t.id,v,p)}},t.maximize=(p,v)=>{if(t.statusBefore=t.status,e.onbeforemaximize&&e.onbeforemaximize.length>0&&!O.processCallbacks(t,e.onbeforemaximize,"some",t.statusBefore))return t;document.dispatchEvent(F);const D=t.parentElement,b=O.pOcontainment(e.maximizedMargin);return D===document.body?(t.style.width=document.documentElement.clientWidth-b[1]-b[3]+"px",t.style.height=document.documentElement.clientHeight-b[0]-b[2]+"px",t.style.left=b[3]+"px",t.style.top=b[0]+"px"):(t.style.width=D.clientWidth-b[1]-b[3]+"px",t.style.height=D.clientHeight-b[0]-b[2]+"px",t.style.left=b[3]+"px",t.style.top=b[0]+"px"),Ht.style.transform="unset",t.removeMinimizedReplacement(),t.status="maximized",t.setControls([".jsPanel-btn-maximize"]),v||t.front(),document.dispatchEvent(A),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(t,e.onstatuschange,"every",t.statusBefore),p&&p.call(t,t,t.statusBefore),e.onmaximized&&O.processCallbacks(t,e.onmaximized,"every",t.statusBefore),t},t.minimize=p=>{if(t.status==="minimized"||(t.statusBefore=t.status,e.onbeforeminimize&&e.onbeforeminimize.length>0&&!O.processCallbacks(t,e.onbeforeminimize,"some",t.statusBefore)))return t;if(document.dispatchEvent(R),!document.getElementById("jsPanel-replacement-container")){const v=document.createElement("div");v.id="jsPanel-replacement-container",document.body.append(v)}if(t.style.left="-9999px",t.status="minimized",document.dispatchEvent(T),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(t,e.onstatuschange,"every",t.statusBefore),e.minimizeTo){let v=t.createMinimizedReplacement(),D,b,x;switch(e.minimizeTo){case"default":document.getElementById("jsPanel-replacement-container").append(v);break;case"parentpanel":b=t.closest(".jsPanel-content").parentElement,x=b.querySelectorAll(".jsPanel-minimized-box"),D=x[x.length-1],D.append(v);break;case"parent":b=t.parentElement,D=b.querySelector(".jsPanel-minimized-container"),D||(D=document.createElement("div"),D.className="jsPanel-minimized-container",b.append(D)),D.append(v);break;default:document.querySelector(e.minimizeTo).append(v)}}return p&&p.call(t,t,t.statusBefore),e.onminimized&&O.processCallbacks(t,e.onminimized,"every",t.statusBefore),t},t.normalize=p=>(t.status==="normalized"||(t.statusBefore=t.status,e.onbeforenormalize&&e.onbeforenormalize.length>0&&!O.processCallbacks(t,e.onbeforenormalize,"some",t.statusBefore))||(document.dispatchEvent(f),t.style.width=t.currentData.width,t.style.height=t.currentData.height,t.snapped?t.snap(t.snapped,!0):(t.style.left=t.currentData.left,t.style.top=t.currentData.top),Ht.style.transform="unset",t.removeMinimizedReplacement(),t.status="normalized",t.setControls([".jsPanel-btn-normalize"]),t.front(),document.dispatchEvent(m),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(t,e.onstatuschange,"every",t.statusBefore),p&&p.call(t,t,t.statusBefore),e.onnormalized&&O.processCallbacks(t,e.onnormalized,"every",t.statusBefore)),t),t.smallify=p=>{if(t.status==="smallified"||t.status==="smallifiedmax"||(t.statusBefore=t.status,e.onbeforesmallify&&e.onbeforesmallify.length>0&&!O.processCallbacks(t,e.onbeforesmallify,"some",t.statusBefore)))return t;document.dispatchEvent(N),t.style.overflow="hidden";const v=window.getComputedStyle(t),D=parseFloat(window.getComputedStyle(t.headerbar).height);t.style.height=parseFloat(v.borderTopWidth)+parseFloat(v.borderBottomWidth)+D+"px",Ht.style.transform="rotate(180deg)",t.status==="normalized"?(t.setControls([".jsPanel-btn-normalize"]),t.status="smallified",document.dispatchEvent(Q),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(t,e.onstatuschange,"every",t.statusBefore)):t.status==="maximized"&&(t.setControls([".jsPanel-btn-maximize"]),t.status="smallifiedmax",document.dispatchEvent(oe),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(t,e.onstatuschange,"every",t.statusBefore));const b=t.querySelectorAll(".jsPanel-minimized-box");return b[b.length-1].style.display="none",p&&p.call(t,t,t.statusBefore),e.onsmallified&&O.processCallbacks(t,e.onsmallified,"every",t.statusBefore),t},t.unsmallify=p=>{if(t.statusBefore=t.status,t.status==="smallified"||t.status==="smallifiedmax"){if(e.onbeforeunsmallify&&e.onbeforeunsmallify.length>0&&!O.processCallbacks(t,e.onbeforeunsmallify,"some",t.statusBefore))return t;document.dispatchEvent(Ke),t.style.overflow="visible",t.front(),t.status==="smallified"?(t.style.height=t.currentData.height,t.setControls([".jsPanel-btn-normalize"]),t.status="normalized",document.dispatchEvent(m),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(t,e.onstatuschange,"every",t.statusBefore)):t.status==="smallifiedmax"?t.maximize():t.status==="minimized"&&t.normalize(),Ht.style.transform="rotate(0deg)";const v=t.querySelectorAll(".jsPanel-minimized-box");v[v.length-1].style.display="flex",p&&p.call(t,t,t.statusBefore),e.onunsmallified&&O.processCallbacks(t,e.onunsmallified,"every",t.statusBefore)}return t},t.front=(p,v=!0)=>{if(t.status==="minimized")t.statusBefore==="maximized"?t.maximize():t.normalize();else{const D=Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(b=>b.style.zIndex);Math.max(...D)>t.style.zIndex&&(t.style.zIndex=O.zi.next()),O.resetZi()}return document.dispatchEvent(ke),p&&p.call(t,t),e.onfronted&&v&&O.processCallbacks(t,e.onfronted,"every",t.status),t},t.snap=(p,v=!1)=>{if(v||(t.currentData.beforeSnap={width:t.currentData.width,height:t.currentData.height}),p&&typeof p=="function"&&!v)p.call(t,t,t.snappableTo);else if(p!==!1){let D=[0,0];if(t.options.dragit.snap.containment&&t.options.dragit.containment){const b=O.pOcontainment(t.options.dragit.containment),x=t.snappableTo;x.startsWith("left")?D[0]=b[3]:x.startsWith("right")&&(D[0]=-b[1]),x.endsWith("top")?D[1]=b[0]:x.endsWith("bottom")&&(D[1]=-b[2])}t.reposition(`${t.snappableTo} ${D[0]} ${D[1]}`)}v||(t.snapped=t.snappableTo)},t.move=(p,v)=>{let D=t.overlaps(p,"paddingbox"),b=t.parentElement;return p.appendChild(t),t.options.container=p,t.style.left=D.left+"px",t.style.top=D.top+"px",t.saveCurrentDimensions(),t.saveCurrentPosition(),t.calcSizeFactors(),v&&v.call(t,t,p,b),t},t.closeChildpanels=p=>(t.getChildpanels().forEach(v=>v.close()),p&&p.call(t,t),t),t.getChildpanels=p=>{const v=t.content.querySelectorAll(".jsPanel");return p&&v.forEach((D,b,x)=>{p.call(D,D,b,x)}),v},t.isChildpanel=p=>{const v=t.closest(".jsPanel-content"),D=v?v.parentElement:null;return p&&p.call(t,t,D),v?D:!1},t.contentRemove=p=>(O.emptyNode(t.content),p&&p.call(t,t),t),t.createMinimizedReplacement=()=>{const p=O.createMinimizedTemplate(),v=window.getComputedStyle(t.headertitle).color,D=window.getComputedStyle(t),b=e.iconfont,x=p.querySelector(".jsPanel-controlbar");return t.options.header!=="auto-show-hide"?O.setStyles(p,{backgroundColor:D.backgroundColor,backgroundPositionX:D.backgroundPositionX,backgroundPositionY:D.backgroundPositionY,backgroundRepeat:D.backgroundRepeat,backgroundAttachment:D.backgroundAttachment,backgroundImage:D.backgroundImage,backgroundSize:D.backgroundSize,backgroundOrigin:D.backgroundOrigin,backgroundClip:D.backgroundClip}):p.style.backgroundColor=window.getComputedStyle(t.header).backgroundColor,p.id=t.id+"-min",p.querySelector(".jsPanel-headerbar").replaceChild(t.headerlogo.cloneNode(!0),p.querySelector(".jsPanel-headerlogo")),p.querySelector(".jsPanel-titlebar").replaceChild(t.headertitle.cloneNode(!0),p.querySelector(".jsPanel-title")),p.querySelector(".jsPanel-titlebar").setAttribute("title",t.headertitle.textContent),p.querySelector(".jsPanel-title").style.color=v,x.style.color=v,x.querySelectorAll("button").forEach(ie=>ie.style.color=v),["jsPanel-hdr-dark","jsPanel-hdr-light"].forEach(ie=>{t.header.classList.contains(ie)&&p.querySelector(".jsPanel-hdr").classList.add(ie)}),t.setIconfont(b,p),t.dataset.btnnormalize==="enabled"?O.pointerup.forEach(ie=>{p.querySelector(".jsPanel-btn-normalize").addEventListener(ie,le=>{if(le.preventDefault(),le.button&&le.button>0)return!1;t.normalize()})}):x.querySelector(".jsPanel-btn-normalize").style.display="none",t.dataset.btnmaximize==="enabled"?O.pointerup.forEach(ie=>{p.querySelector(".jsPanel-btn-maximize").addEventListener(ie,le=>{if(le.preventDefault(),le.button&&le.button>0)return!1;t.maximize()})}):x.querySelector(".jsPanel-btn-maximize").style.display="none",t.dataset.btnclose==="enabled"?O.pointerup.forEach(ie=>{p.querySelector(".jsPanel-btn-close").addEventListener(ie,le=>{if(le.preventDefault(),le.button&&le.button>0)return!1;t.close(null,!0)})}):x.querySelector(".jsPanel-btn-close").style.display="none",p},t.removeMinimizedReplacement=()=>{const p=document.getElementById(`${t.id}-min`);p&&p.parentElement.removeChild(p)},t.drag=(p={})=>{let v,D,b;const x=new CustomEvent("jspaneldragstart",{detail:t.id}),ie=new CustomEvent("jspaneldrag",{detail:t.id}),le=new CustomEvent("jspaneldragstop",{detail:t.id});[x,ie,le].forEach(Re=>Re.panel=t);const M=Re=>{let je=Re.split("-");return je.forEach((ge,$e)=>{je[$e]=ge.charAt(0).toUpperCase()+ge.slice(1)}),"snap"+je.join("")};function W(Re){Re.relatedTarget===null&&O.pointermove.forEach(je=>{document.removeEventListener(je,D,!1),t.style.opacity=1})}let Me=p.handles||O.defaults.dragit.handles,et=p.cursor||O.defaults.dragit.cursor;function Bt(Re){if(O.pointermove.forEach(je=>document.removeEventListener(je,D)),O.removeSnapAreas(),v){if(t.style.opacity=1,v=void 0,b.snap){switch(t.snappableTo){case"left-top":t.snap(b.snap.snapLeftTop);break;case"center-top":t.snap(b.snap.snapCenterTop);break;case"right-top":t.snap(b.snap.snapRightTop);break;case"right-center":t.snap(b.snap.snapRightCenter);break;case"right-bottom":t.snap(b.snap.snapRightBottom);break;case"center-bottom":t.snap(b.snap.snapCenterBottom);break;case"left-bottom":t.snap(b.snap.snapLeftBottom);break;case"left-center":t.snap(b.snap.snapLeftCenter);break}b.snap.callback&&t.snappableTo&&typeof b.snap.callback=="function"&&(b.snap.callback.call(t,t),b.snap.repositionOnSnap&&b.snap[M(t.snappableTo)]!==!1&&t.repositionOnSnap(t.snappableTo)),t.snappableTo&&b.snap.repositionOnSnap&&b.snap[M(t.snappableTo)]&&t.repositionOnSnap(t.snappableTo)}if(t.droppableTo&&t.droppableTo){let je=t.parentElement;t.move(t.droppableTo),b.drop.callback&&b.drop.callback.call(t,t,t.droppableTo,je)}if(document.dispatchEvent(le),b.stop.length){let je=window.getComputedStyle(t),ge={left:parseFloat(je.left),top:parseFloat(je.top),width:parseFloat(je.width),height:parseFloat(je.height)};O.processCallbacks(t,b.stop,!1,ge,Re)}t.saveCurrentPosition(),t.calcSizeFactors()}t.controlbar.style.pointerEvents="inherit",t.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(je=>je.style.pointerEvents="auto"),document.removeEventListener(Re,Bt)}return t.querySelectorAll(Me).forEach(Re=>{Re.style.touchAction="none",Re.style.cursor=et,O.pointerdown.forEach(je=>{Re.addEventListener(je,ge=>{if(ge.button&&ge.button>0||(b=Object.assign({},O.defaults.dragit,p),b.disableOnMaximized&&t.status==="maximized"))return!1;if((b.containment||b.containment===0)&&(b.containment=O.pOcontainment(b.containment)),b.grid&&Array.isArray(b.grid)&&b.grid.length===1&&(b.grid[1]=b.grid[0]),b.snap&&(typeof b.snap=="object"?b.snap=Object.assign({},O.defaultSnapConfig,b.snap):b.snap=O.defaultSnapConfig),ge.target.closest(".jsPanel-ftr-btn"))return;t.controlbar.style.pointerEvents="none",t.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(Ve=>Ve.style.pointerEvents="none");let $e=window.getComputedStyle(t),Ne=parseFloat($e.left),ve=parseFloat($e.top),J=parseFloat($e.width),qe=parseFloat($e.height),Te=ge.touches?ge.touches[0].clientX:ge.clientX,ae=ge.touches?ge.touches[0].clientY:ge.clientY,fe=t.parentElement,vt=fe.getBoundingClientRect(),re=window.getComputedStyle(fe),Ue=t.getScaleFactor(),Zt=0,Ft=O.getScrollbarWidth(fe);D=Ve=>{if(Ve.preventDefault(),!v){if(document.dispatchEvent(x),t.style.opacity=b.opacity,t.snapped&&b.snap.resizeToPreSnap&&t.currentData.beforeSnap){t.resize(t.currentData.beforeSnap.width+" "+t.currentData.beforeSnap.height),t.setControls([".jsPanel-btn-normalize"]);let ee=t.getBoundingClientRect(),xe=Te-(ee.left+ee.width),ce=ee.width/2;xe>-ce&&(Zt=xe+ce)}if(t.front(),t.snapped=!1,t.status==="maximized"&&(t.setControls([".jsPanel-btn-normalize"]),t.status="normalized"),b.drop&&b.drop.dropZones){let ee=b.drop.dropZones.map(ce=>O.pOcontainer(ce)),xe=[];ee.forEach(function(ce){ce.length?ce.forEach(function(Pe){xe.push(Pe)}):xe.push(ce)}),xe=xe.filter(function(ce,Pe,Be){return Be.indexOf(ce)===Pe}),b.drop.dropZones=xe}b.start.length&&O.processCallbacks(t,b.start,!1,{left:Ne,top:ve,width:J,height:qe},Ve)}v=1;let xt,Se,ze,gt,Xe,ye,be,$t,Ie,ut,rt=Ve.touches?Ve.touches[0].clientX:Ve.clientX,Ge=Ve.touches?Ve.touches[0].clientY:Ve.clientY,Fe=window.getComputedStyle(t),se;if(fe===document.body){let ee=t.getBoundingClientRect();Ie=window.innerWidth-parseInt(re.borderLeftWidth,10)-parseInt(re.borderRightWidth,10)-(ee.left+ee.width),ut=window.innerHeight-parseInt(re.borderTopWidth,10)-parseInt(re.borderBottomWidth,10)-(ee.top+ee.height)}else Ie=parseInt(re.width,10)-parseInt(re.borderLeftWidth,10)-parseInt(re.borderRightWidth,10)-(parseInt(Fe.left,10)+parseInt(Fe.width,10)),ut=parseInt(re.height,10)-parseInt(re.borderTopWidth,10)-parseInt(re.borderBottomWidth,10)-(parseInt(Fe.top,10)+parseInt(Fe.height,10));xt=parseFloat(Fe.left),ze=parseFloat(Fe.top),Xe=Ie,be=ut,b.snap&&(b.snap.trigger==="panel"?(Se=xt**2,gt=ze**2,ye=Xe**2,$t=be**2):b.snap.trigger==="pointer"&&(t.options.container==="window"?(xt=rt,ze=Ge,Xe=window.innerWidth-rt,be=window.innerHeight-Ge,Se=rt**2,gt=ze**2,ye=Xe**2,$t=be**2):(se=t.overlaps(fe,"paddingbox",Ve),xt=se.pointer.left,ze=se.pointer.top,Xe=se.pointer.right,be=se.pointer.bottom,Se=se.pointer.left**2,gt=se.pointer.top**2,ye=se.pointer.right**2,$t=se.pointer.bottom**2)));let We=Math.sqrt(Se+gt),K=Math.sqrt(Se+$t),Qe=Math.sqrt(ye+gt),ot=Math.sqrt(ye+$t),yt=Math.abs(xt-Xe)/2,V=Math.abs(ze-be)/2,Lt=Math.sqrt(Se+V**2),Kt=Math.sqrt(gt+yt**2),it=Math.sqrt(ye+V**2),en=Math.sqrt($t+yt**2);if(window.getSelection().removeAllRanges(),document.dispatchEvent(ie),(!b.axis||b.axis==="x")&&(t.style.left=Ne+(rt-Te)/Ue.x+Zt+"px"),(!b.axis||b.axis==="y")&&(t.style.top=ve+(Ge-ae)/Ue.y+"px"),b.grid){let ee=b.grid,xe=b.axis,ce=ee[0]*Math.round((Ne+(rt-Te))/ee[0]),Pe=ee[1]*Math.round((ve+(Ge-ae))/ee[1]);(!xe||xe==="x")&&(t.style.left=`${ce}px`),(!xe||xe==="y")&&(t.style.top=`${Pe}px`)}if(b.containment||b.containment===0){let ee=b.containment,xe,ce;if(t.options.container==="window")xe=window.innerWidth-parseFloat(Fe.width)-ee[1]-Ft.y,ce=window.innerHeight-parseFloat(Fe.height)-ee[2]-Ft.x;else{let Pe=parseFloat(re.borderLeftWidth)+parseFloat(re.borderRightWidth),Be=parseFloat(re.borderTopWidth)+parseFloat(re.borderBottomWidth);xe=vt.width/Ue.x-parseFloat(Fe.width)-ee[1]-Pe-Ft.y,ce=vt.height/Ue.y-parseFloat(Fe.height)-ee[2]-Be-Ft.x}parseFloat(t.style.left)<=ee[3]&&(t.style.left=ee[3]+"px"),parseFloat(t.style.top)<=ee[0]&&(t.style.top=ee[0]+"px"),parseFloat(t.style.left)>=xe&&(t.style.left=xe+"px"),parseFloat(t.style.top)>=ce&&(t.style.top=ce+"px")}if(b.drag.length){let ee={left:xt,top:ze,right:Xe,bottom:be,width:parseFloat(Fe.width),height:parseFloat(Fe.height)};O.processCallbacks(t,b.drag,!1,ee,Ve)}if(b.snap){let ee=b.snap.sensitivity,xe=fe===document.body?window.innerWidth/8:vt.width/8,ce=fe===document.body?window.innerHeight/8:vt.height/8;t.snappableTo=!1,O.removeSnapAreas(),We<ee?b.snap.snapLeftTop!==!1&&(!b.snap.active||b.snap.active==="both"?(t.snappableTo="left-top",O.createSnapArea(t,"lt",ee)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(se.pointer.left>0&&se.pointer.top>0?(t.snappableTo="left-top",O.createSnapArea(t,"lt",ee)):(t.snappableTo=!1,O.removeSnapAreas()))):K<ee?b.snap.snapLeftBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(t.snappableTo="left-bottom",O.createSnapArea(t,"lb",ee)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(se.pointer.left>0&&se.pointer.bottom>0?(t.snappableTo="left-bottom",O.createSnapArea(t,"lb",ee)):(t.snappableTo=!1,O.removeSnapAreas()))):Qe<ee?b.snap.snapRightTop!==!1&&(!b.snap.active||b.snap.active==="both"?(t.snappableTo="right-top",O.createSnapArea(t,"rt",ee)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(se.pointer.right>0&&se.pointer.top>0?(t.snappableTo="right-top",O.createSnapArea(t,"rt",ee)):(t.snappableTo=!1,O.removeSnapAreas()))):ot<ee?b.snap.snapRightBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(t.snappableTo="right-bottom",O.createSnapArea(t,"rb",ee)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(se.pointer.right>0&&se.pointer.bottom>0?(t.snappableTo="right-bottom",O.createSnapArea(t,"rb",ee)):(t.snappableTo=!1,O.removeSnapAreas()))):ze<ee&&Kt<xe?b.snap.snapCenterTop!==!1&&(!b.snap.active||b.snap.active==="both"?(t.snappableTo="center-top",O.createSnapArea(t,"ct",ee)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(se.pointer.top>0?(t.snappableTo="center-top",O.createSnapArea(t,"ct",ee)):(t.snappableTo=!1,O.removeSnapAreas()))):xt<ee&&Lt<ce?b.snap.snapLeftCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(t.snappableTo="left-center",O.createSnapArea(t,"lc",ee)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(se.pointer.left>0?(t.snappableTo="left-center",O.createSnapArea(t,"lc",ee)):(t.snappableTo=!1,O.removeSnapAreas()))):Xe<ee&&it<ce?b.snap.snapRightCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(t.snappableTo="right-center",O.createSnapArea(t,"rc",ee)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(se.pointer.right>0?(t.snappableTo="right-center",O.createSnapArea(t,"rc",ee)):(t.snappableTo=!1,O.removeSnapAreas()))):be<ee&&en<xe&&b.snap.snapCenterBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(t.snappableTo="center-bottom",O.createSnapArea(t,"cb",ee)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(se.pointer.bottom>0?(t.snappableTo="center-bottom",O.createSnapArea(t,"cb",ee)):(t.snappableTo=!1,O.removeSnapAreas())))}if(b.drop&&b.drop.dropZones){let ee=O.isIE?"msElementsFromPoint":"elementsFromPoint",xe=document[ee](Ve.clientX,Ve.clientY);Array.isArray(xe)||(xe=Array.prototype.slice.call(xe)),b.drop.dropZones.forEach(ce=>{xe.includes(ce)&&(t.droppableTo=ce)}),xe.includes(t.droppableTo)||(t.droppableTo=!1)}},O.pointermove.forEach(Ve=>document.addEventListener(Ve,D)),window.addEventListener("mouseout",W,!1)})}),O.pointerup.forEach(je=>{document.addEventListener(je,Bt),window.removeEventListener("mouseout",W)}),p.disable&&(Re.style.pointerEvents="none")}),t},t.dragit=p=>{const v=Object.assign({},O.defaults.dragit,e.dragit),D=t.querySelectorAll(v.handles);return p==="disable"?D.forEach(b=>b.style.pointerEvents="none"):D.forEach(b=>b.style.pointerEvents="auto"),t},t.sizeit=(p={})=>{const v=new CustomEvent("jspanelresizestart",{detail:t.id}),D=new CustomEvent("jspanelresize",{detail:t.id}),b=new CustomEvent("jspanelresizestop",{detail:t.id});[v,D,b].forEach(ge=>ge.panel=t);let x={},ie,le,M,W,Me,et;x.handles=p.handles||O.defaults.resizeit.handles,x.handles.split(",").forEach(ge=>{const $e=document.createElement("DIV");$e.className=`jsPanel-resizeit-handle jsPanel-resizeit-${ge.trim()}`,t.append($e)});let Bt=p.aspectRatio?p.aspectRatio:!1;function Re(ge){ge.relatedTarget===null&&O.pointermove.forEach($e=>document.removeEventListener($e,ie,!1))}function je(ge){if(O.pointermove.forEach($e=>document.removeEventListener($e,ie,!1)),ge.target.classList&&ge.target.classList.contains("jsPanel-resizeit-handle")){let $e,Ne,ve=ge.target.className;if(ve.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)&&($e=!0),ve.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)&&(Ne=!0),x.grid&&Array.isArray(x.grid)){x.grid.length===1&&(x.grid[1]=x.grid[0]);const J=parseFloat(t.style.width),qe=parseFloat(t.style.height),Te=J%x.grid[0],ae=qe%x.grid[1],fe=parseFloat(t.style.left),vt=parseFloat(t.style.top),re=fe%x.grid[0],Ue=vt%x.grid[1];Te<x.grid[0]/2?t.style.width=J-Te+"px":t.style.width=J+(x.grid[0]-Te)+"px",ae<x.grid[1]/2?t.style.height=qe-ae+"px":t.style.height=qe+(x.grid[1]-ae)+"px",$e&&(re<x.grid[0]/2?t.style.left=fe-re+"px":t.style.left=fe+(x.grid[0]-re)+"px"),Ne&&(Ue<x.grid[1]/2?t.style.top=vt-Ue+"px":t.style.top=vt+(x.grid[1]-Ue)+"px")}}if(le){t.content.style.pointerEvents="inherit",le=void 0,t.saveCurrentDimensions(),t.saveCurrentPosition(),t.calcSizeFactors();let $e=t.controlbar.querySelector(".jsPanel-btn-smallify"),Ne=t.getBoundingClientRect();if($e&&Ne.height>et+5&&($e.style.transform="rotate(0deg)"),document.dispatchEvent(b),x.stop.length){let ve=window.getComputedStyle(t),J={left:parseFloat(ve.left),top:parseFloat(ve.top),width:parseFloat(ve.width),height:parseFloat(ve.height)};O.processCallbacks(t,x.stop,!1,J,ge)}}t.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach($e=>$e.style.pointerEvents="auto"),x.aspectRatio=Bt,document.removeEventListener(ge,je)}return t.querySelectorAll(".jsPanel-resizeit-handle").forEach(ge=>{ge.style.touchAction="none",O.pointerdown.forEach($e=>{ge.addEventListener($e,Ne=>{if(Ne.preventDefault(),Ne.stopPropagation(),Ne.button&&Ne.button>0)return!1;let ve=1;if(x=Object.assign({},O.defaults.resizeit,p),(x.containment||x.containment===0)&&(x.containment=O.pOcontainment(x.containment)),x.aspectRatio&&x.aspectRatio===!0&&(x.aspectRatio="panel"),O.modifier){let ce=O.modifier;ce.altKey?x.aspectRatio="content":ce.ctrlKey?x.aspectRatio="panel":ce.shiftKey&&(x.aspectRatio=!1,ve=2)}let J=typeof x.maxWidth=="function"?x.maxWidth():x.maxWidth||1e4,qe=typeof x.maxHeight=="function"?x.maxHeight():x.maxHeight||1e4,Te=typeof x.minWidth=="function"?x.minWidth():x.minWidth,ae=typeof x.minHeight=="function"?x.minHeight():x.minHeight;t.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(ce=>ce.style.pointerEvents="none");const fe=t.parentElement,vt=fe.tagName.toLowerCase(),re=t.getBoundingClientRect(),Ue=fe.getBoundingClientRect(),Zt=window.getComputedStyle(fe,null),Ft=parseInt(Zt.borderLeftWidth,10),Ve=parseInt(Zt.borderTopWidth,10),xt=Zt.getPropertyValue("position"),Se=Ne.clientX||Ne.clientX===0||Ne.touches[0].clientX,ze=Ne.clientY||Ne.clientY===0||Ne.touches[0].clientY,gt=Se/ze,Xe=Ne.target.classList,ye=t.getScaleFactor(),be=re.width/re.height,$t=t.content.getBoundingClientRect(),Ie=$t.width/$t.height,ut=t.header.getBoundingClientRect().height,rt=t.footer.getBoundingClientRect().height||0;let Ge=re.left,Fe=re.top,se=1e4,We=1e4,K=1e4,Qe=1e4;Me=re.width,et=re.height,vt!=="body"&&(Ge=re.left-Ue.left+fe.scrollLeft,Fe=re.top-Ue.top+fe.scrollTop),vt==="body"&&x.containment?(se=document.documentElement.clientWidth-re.left,K=document.documentElement.clientHeight-re.top,We=re.width+re.left,Qe=re.height+re.top):x.containment&&(xt==="static"?(se=Ue.width-re.left+Ft,K=Ue.height+Ue.top-re.top+Ve,We=re.width+(re.left-Ue.left)-Ft,Qe=re.height+(re.top-Ue.top)-Ve):(se=fe.clientWidth-(re.left-Ue.left)/ye.x+Ft,K=fe.clientHeight-(re.top-Ue.top)/ye.y+Ve,We=(re.width+re.left-Ue.left)/ye.x-Ft,Qe=t.clientHeight+(re.top-Ue.top)/ye.y-Ve)),x.containment&&(We-=x.containment[3],Qe-=x.containment[0],se-=x.containment[1],K-=x.containment[2]);const ot=window.getComputedStyle(t),yt=parseFloat(ot.width)-re.width,V=parseFloat(ot.height)-re.height;let Lt=parseFloat(ot.left)-re.left,Kt=parseFloat(ot.top)-re.top;fe!==document.body&&(Lt+=Ue.left,Kt+=Ue.top);let it=parseInt(ot.borderTopWidth,10),en=parseInt(ot.borderRightWidth,10),ee=parseInt(ot.borderBottomWidth,10),xe=parseInt(ot.borderLeftWidth,10);ie=ce=>{ce.preventDefault(),le||(document.dispatchEvent(v),x.start.length&&O.processCallbacks(t,x.start,!1,{width:Me,height:et,left:Ge,top:Fe},ce),t.front(),t.status==="maximized"&&(t.status="normalized",t.controlbar.querySelector(".jsPanel-btn-maximize")&&t.setControlStatus("maximize","show"),t.controlbar.querySelector(".jsPanel-btn-normalize")&&t.setControlStatus("normalize","hide")),re.height>et+5&&(t.status="normalized",t.setControls([".jsPanel-btn-normalize"]))),le=1,document.dispatchEvent(D);let Pe=ce.touches?ce.touches[0].clientX:ce.clientX,Be=ce.touches?ce.touches[0].clientY:ce.clientY,Ee;Xe.contains("jsPanel-resizeit-e")?(M=Me+(Pe-Se)*ve/ye.x+yt,M>=se&&(M=se),M>=J&&(M=J),M<=Te&&(M=Te),t.style.width=M+"px",ve===2&&(t.style.left=Ge-(Pe-Se)+"px"),x.aspectRatio==="content"?(t.style.height=(M-en-xe)/Ie+ut+rt+it+ee+"px",x.containment&&(Ee=t.overlaps(fe),Ee.bottom<=x.containment[2]&&(t.style.height=K+"px",t.style.width=K*Ie+"px"))):x.aspectRatio==="panel"&&(t.style.height=M/be+"px",x.containment&&(Ee=t.overlaps(fe),Ee.bottom<=x.containment[2]&&(t.style.height=K+"px",t.style.width=K*be+"px")))):Xe.contains("jsPanel-resizeit-s")?(W=et+(Be-ze)*ve/ye.y+V,W>=K&&(W=K),W>=qe&&(W=qe),W<=ae&&(W=ae),t.style.height=W+"px",ve===2&&(t.style.top=Fe-(Be-ze)+"px"),x.aspectRatio==="content"?(t.style.width=(W-ut-rt-it-ee)*Ie+it+ee+"px",x.containment&&(Ee=t.overlaps(fe),Ee.right<=x.containment[1]&&(t.style.width=se+"px",t.style.height=se/Ie+"px"))):x.aspectRatio==="panel"&&(t.style.width=W*be+"px",x.containment&&(Ee=t.overlaps(fe),Ee.right<=x.containment[1]&&(t.style.width=se+"px",t.style.height=se/be+"px")))):Xe.contains("jsPanel-resizeit-w")?(M=Me+(Se-Pe)*ve/ye.x+yt,M<=J&&M>=Te&&M<=We&&(t.style.left=Ge+(Pe-Se)/ye.x+Lt+"px"),M>=We&&(M=We),M>=J&&(M=J),M<=Te&&(M=Te),t.style.width=M+"px",x.aspectRatio==="content"?(t.style.height=(M-en-xe)/Ie+ut+rt+it+ee+"px",x.containment&&(Ee=t.overlaps(fe),Ee.bottom<=x.containment[2]&&(t.style.height=K+"px",t.style.width=K*Ie+"px"))):x.aspectRatio==="panel"&&(t.style.height=M/be+"px",x.containment&&(Ee=t.overlaps(fe),Ee.bottom<=x.containment[2]&&(t.style.height=K+"px",t.style.width=K*be+"px")))):Xe.contains("jsPanel-resizeit-n")?(W=et+(ze-Be)*ve/ye.y+V,W<=qe&&W>=ae&&W<=Qe&&(t.style.top=Fe+(Be-ze)/ye.y+Kt+"px"),W>=Qe&&(W=Qe),W>=qe&&(W=qe),W<=ae&&(W=ae),t.style.height=W+"px",x.aspectRatio==="content"?(t.style.width=(W-ut-rt-it-ee)*Ie+it+ee+"px",x.containment&&(Ee=t.overlaps(fe),Ee.right<=x.containment[1]&&(t.style.width=se+"px",t.style.height=se/Ie+"px"))):x.aspectRatio==="panel"&&(t.style.width=W*be+"px",x.containment&&(Ee=t.overlaps(fe),Ee.right<=x.containment[1]&&(t.style.width=se+"px",t.style.height=se/be+"px")))):Xe.contains("jsPanel-resizeit-se")?(M=Me+(Pe-Se)*ve/ye.x+yt,M>=se&&(M=se),M>=J&&(M=J),M<=Te&&(M=Te),t.style.width=M+"px",ve===2&&(t.style.left=Ge-(Pe-Se)+"px"),x.aspectRatio&&(t.style.height=M/be+"px"),W=et+(Be-ze)*ve/ye.y+V,W>=K&&(W=K),W>=qe&&(W=qe),W<=ae&&(W=ae),t.style.height=W+"px",ve===2&&(t.style.top=Fe-(Be-ze)+"px"),x.aspectRatio==="content"?(t.style.width=(W-ut-rt-it-ee)*Ie+it+ee+"px",x.containment&&(Ee=t.overlaps(fe),Ee.right<=x.containment[1]&&(t.style.width=se+"px",t.style.height=se/Ie+"px"))):x.aspectRatio==="panel"&&(t.style.width=W*be+"px",x.containment&&(Ee=t.overlaps(fe),Ee.right<=x.containment[1]&&(t.style.width=se+"px",t.style.height=se/be+"px")))):Xe.contains("jsPanel-resizeit-sw")?(W=et+(Be-ze)*ve/ye.y+V,W>=K&&(W=K),W>=qe&&(W=qe),W<=ae&&(W=ae),t.style.height=W+"px",ve===2&&(t.style.top=Fe-(Be-ze)+"px"),x.aspectRatio&&(t.style.width=W*be+"px"),M=Me+(Se-Pe)*ve/ye.x+yt,M<=J&&M>=Te&&M<=We&&(t.style.left=Ge+(Pe-Se)/ye.x+Lt+"px"),M>=We&&(M=We),M>=J&&(M=J),M<=Te&&(M=Te),t.style.width=M+"px",x.aspectRatio==="content"?(t.style.height=(M-en-xe)/Ie+ut+rt+it+ee+"px",x.containment&&(Ee=t.overlaps(fe),Ee.bottom<=x.containment[2]&&(t.style.height=K+"px",t.style.width=K*Ie+"px"))):x.aspectRatio==="panel"&&(t.style.height=M/be+"px",x.containment&&(Ee=t.overlaps(fe),Ee.bottom<=x.containment[2]&&(t.style.height=K+"px",t.style.width=K*be+"px")))):Xe.contains("jsPanel-resizeit-ne")?(M=Me+(Pe-Se)*ve/ye.x+yt,M>=se&&(M=se),M>=J&&(M=J),M<=Te&&(M=Te),t.style.width=M+"px",ve===2&&(t.style.left=Ge-(Pe-Se)+"px"),x.aspectRatio&&(t.style.height=M/be+"px"),W=et+(ze-Be)*ve/ye.y+V,W<=qe&&W>=ae&&W<=Qe&&(t.style.top=Fe+(Be-ze)/ye.y+Kt+"px"),W>=Qe&&(W=Qe),W>=qe&&(W=qe),W<=ae&&(W=ae),t.style.height=W+"px",x.aspectRatio==="content"?(t.style.width=(W-ut-rt-it-ee)*Ie+it+ee+"px",x.containment&&(Ee=t.overlaps(fe),Ee.right<=x.containment[1]&&(t.style.width=se+"px",t.style.height=se/Ie+"px"))):x.aspectRatio==="panel"&&(t.style.width=W*be+"px",x.containment&&(Ee=t.overlaps(fe),Ee.right<=x.containment[1]&&(t.style.width=se+"px",t.style.height=se/be+"px")))):Xe.contains("jsPanel-resizeit-nw")&&(x.aspectRatio&&Xe.contains("jsPanel-resizeit-nw")&&(Pe=Be*gt,Be=Pe/gt),M=Me+(Se-Pe)*ve/ye.x+yt,M<=J&&M>=Te&&M<=We&&(t.style.left=Ge+(Pe-Se)/ye.x+Lt+"px"),M>=We&&(M=We),M>=J&&(M=J),M<=Te&&(M=Te),t.style.width=M+"px",x.aspectRatio&&(t.style.height=M/be+"px"),W=et+(ze-Be)*ve/ye.y+V,W<=qe&&W>=ae&&W<=Qe&&(t.style.top=Fe+(Be-ze)/ye.y+Kt+"px"),W>=Qe&&(W=Qe),W>=qe&&(W=qe),W<=ae&&(W=ae),t.style.height=W+"px",x.aspectRatio==="content"?t.style.width=(W-ut-rt-it-ee)*Ie+it+ee+"px":x.aspectRatio==="panel"&&(t.style.width=W*be+"px")),window.getSelection().removeAllRanges();const Ot=window.getComputedStyle(t),Oe={left:parseFloat(Ot.left),top:parseFloat(Ot.top),right:parseFloat(Ot.right),bottom:parseFloat(Ot.bottom),width:parseFloat(Ot.width),height:parseFloat(Ot.height)};x.resize.length&&O.processCallbacks(t,x.resize,!1,Oe,ce)},O.pointermove.forEach(ce=>document.addEventListener(ce,ie,!1)),window.addEventListener("mouseout",Re,!1)})}),O.pointerup.forEach(function($e){document.addEventListener($e,je),window.removeEventListener("mouseout",Re)}),p.disable&&(ge.style.pointerEvents="none")}),t},t.resizeit=p=>{const v=t.querySelectorAll(".jsPanel-resizeit-handle");return p==="disable"?v.forEach(D=>D.style.pointerEvents="none"):v.forEach(D=>D.style.pointerEvents="auto"),t},t.getScaleFactor=()=>{const p=t.getBoundingClientRect();return{x:p.width/t.offsetWidth,y:p.height/t.offsetHeight}},t.calcSizeFactors=()=>{const p=window.getComputedStyle(t);if(e.container==="window")t.hf=parseFloat(p.left)/(window.innerWidth-parseFloat(p.width)),t.vf=parseFloat(p.top)/(window.innerHeight-parseFloat(p.height));else if(t.parentElement){let v=t.parentElement.getBoundingClientRect();t.hf=parseFloat(p.left)/(v.width-parseFloat(p.width)),t.vf=parseFloat(p.top)/(v.height-parseFloat(p.height))}},t.saveCurrentDimensions=()=>{const p=window.getComputedStyle(t);t.currentData.width=p.width,t.currentData.height=p.height},t.saveCurrentPosition=()=>{const p=window.getComputedStyle(t);t.currentData.left=p.left,t.currentData.top=p.top},t.reposition=(...p)=>{let v=e.position,D=!0,b;return p.forEach(x=>{typeof x=="string"||typeof x=="object"?v=x:typeof x=="boolean"?D=x:typeof x=="function"&&(b=x)}),O.position(t,v),t.slaves&&t.slaves.size>0&&t.slaves.forEach(x=>x.reposition()),D&&t.saveCurrentPosition(),b&&b.call(t,t),t},t.repositionOnSnap=p=>{let v="0",D="0",b=O.pOcontainment(e.dragit.containment);if(e.dragit.snap.containment)switch(p){case"left-top":v=b[3],D=b[0];break;case"right-top":v=-b[1],D=b[0];break;case"right-bottom":v=-b[1],D=-b[2];break;case"left-bottom":v=b[3],D=-b[2];break;case"center-top":v=b[3]/2-b[1]/2,D=b[0];break;case"center-bottom":v=b[3]/2-b[1]/2,D=-b[2];break;case"left-center":v=b[3],D=b[0]/2-b[2]/2;break;case"right-center":v=-b[1],D=b[0]/2-b[2]/2;break}O.position(t,p),O.setStyles(t,{left:`calc(${t.style.left} + ${v}px)`,top:`calc(${t.style.top} + ${D}px)`})},t.overlaps=(p,v,D)=>{let b=t.getBoundingClientRect(),x=getComputedStyle(t.parentElement),ie=t.getScaleFactor(),le={top:0,right:0,bottom:0,left:0},M,W=0,Me=0,et=0,Bt=0;t.options.container!=="window"&&v==="paddingbox"&&(le.top=parseInt(x.borderTopWidth,10)*ie.y,le.right=parseInt(x.borderRightWidth,10)*ie.x,le.bottom=parseInt(x.borderBottomWidth,10)*ie.y,le.left=parseInt(x.borderLeftWidth,10)*ie.x),typeof p=="string"?p==="window"?M={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}:p==="parent"?M=t.parentElement.getBoundingClientRect():M=document.querySelector(p).getBoundingClientRect():M=p.getBoundingClientRect(),D&&(W=D.touches?D.touches[0].clientX:D.clientX,Me=D.touches?D.touches[0].clientY:D.clientY,et=W-M.left,Bt=Me-M.top);let Re=b.left<M.right&&b.right>M.left,je=b.top<M.bottom&&b.bottom>M.top;return{overlaps:Re&&je,top:b.top-M.top-le.top,right:M.right-b.right-le.right,bottom:M.bottom-b.bottom-le.bottom,left:b.left-M.left-le.left,parentBorderWidth:le,panelRect:b,referenceRect:M,pointer:{clientX:W,clientY:Me,left:et-le.left,top:Bt-le.top,right:M.width-et-le.right,bottom:M.height-Bt-le.bottom}}},t.setSize=()=>{if(e.panelSize){const p=O.pOsize(t,e.panelSize);t.style.width=p.width,t.style.height=p.height}else if(e.contentSize){const p=O.pOsize(t,e.contentSize);t.content.style.width=p.width,t.content.style.height=p.height,t.style.width=p.width,t.content.style.width="100%"}return t},t.resize=(...p)=>{let v=window.getComputedStyle(t),D={width:v.width,height:v.height},b=!0,x;p.forEach(M=>{typeof M=="string"?D=M:typeof M=="object"?D=Object.assign(D,M):typeof M=="boolean"?b=M:typeof M=="function"&&(x=M)});let ie=O.pOsize(t,D);t.style.width=ie.width,t.style.height=ie.height,t.slaves&&t.slaves.size>0&&t.slaves.forEach(M=>M.reposition()),b&&t.saveCurrentDimensions(),t.status="normalized";let le=t.controlbar.querySelector(".jsPanel-btn-smallify");return le&&(le.style.transform="rotate(0deg)"),x&&x.call(t,t),t.calcSizeFactors(),t},t.windowResizeHandler=p=>{if(p.target===window){let v=t.status,D=e.onwindowresize,b,x;if(v==="maximized"&&D)t.maximize(!1,!0);else if(t.snapped&&v!=="minimized")t.snap(t.snapped,!0);else if(v==="normalized"||v==="smallified"||v==="maximized"){let ie=typeof D;ie==="boolean"?(b=(window.innerWidth-t.offsetWidth)*t.hf,t.style.left=b<=0?0:b+"px",x=(window.innerHeight-t.offsetHeight)*t.vf,t.style.top=x<=0?0:x+"px"):ie==="function"?D.call(t,p,t):ie==="object"&&(D.preset===!0&&(b=(window.innerWidth-t.offsetWidth)*t.hf,t.style.left=b<=0?0:b+"px",x=(window.innerHeight-t.offsetHeight)*t.vf,t.style.top=x<=0?0:x+"px"),D.callback.call(t,p,t))}else v==="smallifiedmax"&&D&&t.maximize(!1,!0).smallify();t.slaves&&t.slaves.size>0&&t.slaves.forEach(ie=>ie.reposition())}},t.setControls=(p,v)=>(t.header.querySelectorAll(".jsPanel-btn").forEach(D=>{const b=D.className.split("-"),x=b[b.length-1];t.getAttribute(`data-btn${x}`)!=="hidden"&&(D.style.display="block")}),p.forEach(D=>{const b=t.controlbar.querySelector(D);b&&(b.style.display="none")}),v&&v.call(t,t),t),t.setControlStatus=(p,v="enable",D)=>{const b=t.controlbar.querySelector(`.jsPanel-btn-${p}`);switch(v){case"disable":t.getAttribute(`data-btn${p}`)!=="removed"&&(t.setAttribute(`data-btn${p}`,"disabled"),b.style.pointerEvents="none",b.style.opacity=.4,b.style.cursor="default");break;case"hide":t.getAttribute(`data-btn${p}`)!=="removed"&&(t.setAttribute(`data-btn${p}`,"hidden"),b.style.display="none");break;case"show":t.getAttribute(`data-btn${p}`)!=="removed"&&(t.setAttribute(`data-btn${p}`,"enabled"),b.style.display="block",b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"enable":t.getAttribute(`data-btn${p}`)!=="removed"&&(t.getAttribute(`data-btn${p}`)==="hidden"&&(b.style.display="block"),t.setAttribute(`data-btn${p}`,"enabled"),b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"remove":t.controlbar.removeChild(b),t.setAttribute(`data-btn${p}`,"removed");break}return D&&D.call(t,t),t},t.setControlSize=p=>{const v=p.toLowerCase();t.controlbar.querySelectorAll(".jsPanel-btn").forEach(b=>{["jsPanel-btn-xl","jsPanel-btn-lg","jsPanel-btn-md","jsPanel-btn-sm","jsPanel-btn-xs"].forEach(x=>b.classList.remove(x)),b.classList.add(`jsPanel-btn-${v}`)}),v==="xl"?t.titlebar.style.fontSize="1.5rem":v==="lg"?t.titlebar.style.fontSize="1.25rem":v==="md"?t.titlebar.style.fontSize="1.05rem":v==="sm"?t.titlebar.style.fontSize=".9rem":v==="xs"&&(t.titlebar.style.fontSize=".8rem")},t.setHeaderControls=p=>{if(t.options.headerControls.add){let x=t.options.headerControls.add;Array.isArray(x)||(x=[x]),x.forEach(ie=>t.addControl(ie))}let v=[];t.controlbar.querySelectorAll(".jsPanel-btn").forEach(x=>{let ie=x.className.match(/jsPanel-btn-[a-z\d]{3,}/i),le=ie[0].substring(12);v.push(le)});const b=O.pOheaderControls(e.headerControls);return e.headerControls=b,v.forEach(x=>{b[x]&&t.setControlStatus(x,b[x])}),t.setControlSize(b.size),p&&p.call(t,t),t},t.setHeaderLogo=(p,v)=>{let D=[t.headerlogo],b=document.querySelector("#"+t.id+"-min");return b&&D.push(b.querySelector(".jsPanel-headerlogo")),typeof p=="string"?p.startsWith("<")?D.forEach(x=>x.innerHTML=p):D.forEach(x=>{O.emptyNode(x);let ie=document.createElement("img");ie.src=p,x.append(ie)}):D.forEach(x=>{O.emptyNode(x),x.append(p)}),t.headerlogo.childNodes.forEach(x=>{x.nodeName&&x.nodeName==="IMG"&&x.setAttribute("draggable","false")}),v&&v.call(t,t),t},t.setHeaderRemove=p=>(t.removeChild(t.header),t.content.classList.add("jsPanel-content-noheader"),["close","maximize","normalize","minimize","smallify"].forEach(v=>t.setAttribute(`data-btn${v}`,"removed")),p&&p.call(t,t),t),t.setHeaderTitle=(p,v)=>{let D=[t.headertitle],b=document.querySelector("#"+t.id+"-min");return b&&D.push(b.querySelector(".jsPanel-title")),typeof p=="string"?D.forEach(x=>x.innerHTML=p):typeof p=="function"?D.forEach(x=>{O.emptyNode(x),x.innerHTML=p()}):D.forEach(x=>{O.emptyNode(x),x.append(p)}),v&&v.call(t,t),t},t.setIconfont=(p,v=t,D)=>{if(p){let b,x;if(p==="fa"||p==="far"||p==="fal"||p==="fas"||p==="fad")b=[`${p} fa-window-close`,`${p} fa-window-maximize`,`${p} fa-window-restore`,`${p} fa-window-minimize`,`${p} fa-chevron-up`];else if(p==="material-icons")b=[p,p,p,p,p,p],x=["close","fullscreen","fullscreen_exit","call_received","expand_less"];else if(Array.isArray(p))b=[`custom-control-icon ${p[4]}`,`custom-control-icon ${p[3]}`,`custom-control-icon ${p[2]}`,`custom-control-icon ${p[1]}`,`custom-control-icon ${p[0]}`];else if(p==="bootstrap"||p==="glyphicon")b=["glyphicon glyphicon-remove","glyphicon glyphicon-fullscreen","glyphicon glyphicon-resize-full","glyphicon glyphicon-minus","glyphicon glyphicon-chevron-up"];else return v;v.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(ie=>O.emptyNode(ie).innerHTML="<span></span>"),Array.prototype.slice.call(v.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((ie,le)=>{ie.className=b[le],p==="material-icons"&&(ie.textContent=x[le])})}return D&&D.call(v,v),v},t.addToolbar=(p,v,D)=>{if(p==="header"?p=t.headertoolbar:p==="footer"&&(p=t.footer),typeof v=="string")p.innerHTML=v;else if(Array.isArray(v))v.forEach(b=>{typeof b=="string"?p.innerHTML+=b:p.append(b)});else if(typeof v=="function"){let b=v.call(t,t);typeof b=="string"?p.innerHTML=b:p.append(b)}else p.append(v);return p.classList.add("active"),D&&D.call(t,t),t},t.addCloseControl=()=>{let p=document.createElement("button"),v=t.content.style.color;return p.classList.add("jsPanel-addCloseCtrl"),p.innerHTML=O.icons.close,p.style.color=v,t.options.rtl&&p.classList.add("rtl"),t.appendChild(p),O.pointerup.forEach(D=>{p.addEventListener(D,b=>{if(b.preventDefault(),b.button&&b.button>0)return!1;t.close(null,!0)})}),O.pointerdown.forEach(D=>{p.addEventListener(D,b=>b.preventDefault())}),t},t.addControl=p=>{if(!p.html)return t;p.position||(p.position=1);const v=t.controlbar.querySelectorAll(".jsPanel-btn").length;let D=document.createElement("button");D.innerHTML=p.html,D.className=`jsPanel-btn jsPanel-btn-${p.name} jsPanel-btn-${e.headerControls.size}`,D.style.color=t.header.style.color,p.position>v?t.controlbar.append(D):t.controlbar.insertBefore(D,t.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${p.position})`));const b=p.ariaLabel||p.name;return b&&D.setAttribute("aria-label",b),O.pointerup.forEach(x=>{D.addEventListener(x,ie=>{if(ie.preventDefault(),ie.button&&ie.button>0)return!1;p.handler.call(t,t,D)})}),p.afterInsert&&p.afterInsert.call(D,D),t},t.setRtl=()=>{[t.header,t.content,t.footer].forEach(p=>{p.dir="rtl",e.rtl.lang&&(p.lang=e.rtl.lang)})},t.id=e.id,t.classList.add("jsPanel-"+e.paneltype),e.paneltype==="standard"&&(t.style.zIndex=this.zi.next()),o.append(t),t.front(!1,!1),t.setTheme(e.theme),e.boxShadow&&t.classList.add(`jsPanel-depth-${e.boxShadow}`),e.header){if(e.headerLogo&&t.setHeaderLogo(e.headerLogo),t.setIconfont(e.iconfont),t.setHeaderTitle(e.headerTitle),t.setHeaderControls(),O.isIE){let p=[t.headerbar,t.controlbar];switch(t.options.headerControls.size){case"md":p.forEach(v=>{v.style.height="34px"});break;case"xs":p.forEach(v=>{v.style.height="26px"});break;case"sm":p.forEach(v=>{v.style.height="30px"});break;case"lg":p.forEach(v=>{v.style.height="38px"});break;case"xl":p.forEach(v=>{v.style.height="42px"});break}}if(e.header==="auto-show-hide"){let p="jsPanel-depth-"+e.boxShadow;t.header.style.opacity=0,t.style.backgroundColor="transparent",this.remClass(t,p),this.setClass(t.content,p),t.header.addEventListener("mouseenter",()=>{t.header.style.opacity=1,O.setClass(t,p),O.remClass(t.content,p)}),t.header.addEventListener("mouseleave",()=>{t.header.style.opacity=0,O.remClass(t,p),O.setClass(t.content,p)})}}else t.setHeaderRemove(),e.addCloseControl&&t.addCloseControl();if(e.headerToolbar&&t.addToolbar(t.headertoolbar,e.headerToolbar),e.footerToolbar&&t.addToolbar(t.footer,e.footerToolbar),e.border&&t.setBorder(e.border),e.borderRadius&&t.setBorderRadius(e.borderRadius),e.css)for(const[p,v]of Object.entries(e.css))if(p==="panel")t.className+=` ${v}`;else{let D=t.querySelector(`.jsPanel-${p}`);D&&(D.className+=` ${v}`)}if(e.content&&(typeof e.content=="function"?e.content.call(t,t):typeof e.content=="string"?t.content.innerHTML=e.content:t.content.append(e.content)),e.contentAjax&&this.ajax(e.contentAjax,t),e.contentFetch&&this.fetch(e.contentFetch,t),e.contentOverflow){const p=e.contentOverflow.split(" ");p.length===1?t.content.style.overflow=p[0]:p.length===2&&(t.content.style.overflowX=p[0],t.content.style.overflowY=p[1])}if(e.autoclose){typeof e.autoclose=="number"?e.autoclose={time:e.autoclose+"ms"}:typeof e.autoclose=="string"&&(e.autoclose={time:e.autoclose});let p=Object.assign({},O.defaultAutocloseConfig,e.autoclose);p.time&&typeof p.time=="number"&&(p.time+="ms");let v=t.progressbar.querySelector("div");v.addEventListener("animationend",D=>{D.stopPropagation(),t.progressbar.classList.remove("active"),t.close()}),p.progressbar&&(t.progressbar.classList.add("active"),p.background?O.colorNames[p.background]?t.progressbar.style.background="#"+O.colorNames[p.background]:t.progressbar.style.background=p.background:t.progressbar.classList.add("success-bg")),v.style.animation=`${p.time} progressbar`}if(e.rtl&&t.setRtl(),t.setSize(),t.status="normalized",e.position?this.position(t,e.position):t.style.opacity=1,document.dispatchEvent(m),t.calcSizeFactors(),e.animateIn&&(t.addEventListener("animationend",()=>{this.remClass(t,e.animateIn)}),this.setClass(t,e.animateIn)),e.syncMargins){let p=this.pOcontainment(e.maximizedMargin);e.dragit&&(e.dragit.containment=p,e.dragit.snap===!0?(e.dragit.snap=O.defaultSnapConfig,e.dragit.snap.containment=!0):e.dragit.snap&&(e.dragit.snap.containment=!0)),e.resizeit&&(e.resizeit.containment=p)}if(e.dragit?(["start","drag","stop"].forEach(p=>{e.dragit[p]?typeof e.dragit[p]=="function"&&(e.dragit[p]=[e.dragit[p]]):e.dragit[p]=[]}),t.drag(e.dragit),t.addEventListener("jspaneldragstop",p=>{p.panel===t&&t.calcSizeFactors()},!1)):t.titlebar.style.cursor="default",e.resizeit){["start","resize","stop"].forEach(v=>{e.resizeit[v]?typeof e.resizeit[v]=="function"&&(e.resizeit[v]=[e.resizeit[v]]):e.resizeit[v]=[]}),t.sizeit(e.resizeit);let p;t.addEventListener("jspanelresizestart",v=>{v.panel===t&&(p=t.status)},!1),t.addEventListener("jspanelresizestop",v=>{v.panel===t&&(p==="smallified"||p==="smallifiedmax"||p==="maximized")&&parseFloat(t.style.height)>parseFloat(window.getComputedStyle(t.header).height)&&(t.setControls([".jsPanel-btn-normalize"]),t.status="normalized",document.dispatchEvent(m),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(t,e.onstatuschange,"every"),t.calcSizeFactors())},!1)}if(t.saveCurrentDimensions(),t.saveCurrentPosition(),e.setStatus&&(e.setStatus==="smallifiedmax"?t.maximize().smallify():e.setStatus==="smallified"?t.smallify():t[e.setStatus.slice(0,-1)]()),this.pointerdown.forEach(p=>{t.addEventListener(p,v=>{!v.target.closest(".jsPanel-btn-close")&&!v.target.closest(".jsPanel-btn-minimize")&&e.paneltype==="standard"&&t.front()},!1)}),e.onwindowresize&&t.options.container==="window"&&window.addEventListener("resize",t.windowResizeHandler,!1),e.onparentresize){let p=e.onparentresize,v=typeof p,D=t.isChildpanel();if(D){const b=D.content;let x=[];t.parentResizeHandler=ie=>{if(ie.panel===D){x[0]=b.offsetWidth,x[1]=b.offsetHeight;let le=t.status,M,W;le==="maximized"&&p?t.maximize():t.snapped&&le!=="minimized"?t.snap(t.snapped,!0):le==="normalized"||le==="smallified"||le==="maximized"?v==="function"?p.call(t,t,{width:x[0],height:x[1]}):v==="object"&&p.preset===!0?(M=(x[0]-t.offsetWidth)*t.hf,t.style.left=M<=0?0:M+"px",W=(x[1]-t.offsetHeight)*t.vf,t.style.top=W<=0?0:W+"px",p.callback.call(t,t,{width:x[0],height:x[1]})):v==="boolean"&&(M=(x[0]-t.offsetWidth)*t.hf,t.style.left=M<=0?0:M+"px",W=(x[1]-t.offsetHeight)*t.vf,t.style.top=W<=0?0:W+"px"):le==="smallifiedmax"&&p&&t.maximize().smallify()}},document.addEventListener("jspanelresize",t.parentResizeHandler,!1)}}return this.globalCallbacks&&(Array.isArray(this.globalCallbacks)?this.globalCallbacks.forEach(p=>p.call(t,t)):this.globalCallbacks.call(t,t)),e.callback&&(Array.isArray(e.callback)?e.callback.forEach(p=>p.call(t,t)):e.callback.call(t,t)),n&&(Array.isArray(n)?n.forEach(p=>p.call(t,t)):n.call(t,t)),document.dispatchEvent(a),t}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Us=Symbol.for(""),rd=e=>{if(e?.r===Us)return e?._$litStatic$},id=e=>({_$litStatic$:e,r:Us}),os=new Map,od=e=>(n,...r)=>{const o=r.length;let t,a;const c=[],f=[];let m,F=0,A=!1;for(;F<o;){for(m=n[F];F<o&&(a=r[F],(t=rd(a))!==void 0);)m+=t+n[++F],A=!0;F!==o&&f.push(a),c.push(m),F++}if(F===o&&c.push(n[o]),A){const R=c.join("$$lit$$");(n=os.get(R))===void 0&&(c.raw=c,os.set(R,n=c)),r=f}return e(n,...r)},sd=od(X);var ad=Object.defineProperty,ld=Object.getOwnPropertyDescriptor,Kr=(e,n,r,o)=>{for(var t=o>1?void 0:o?ld(n,r):n,a=e.length-1,c;a>=0;a--)(c=e[a])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&ad(n,r,t),t};let Rt=class extends tt{constructor(){super(...arguments),this.values=[],this.current="",this.search="",this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,n,r){return this.values=n,this.current=r,this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(o=>{this.resolveFn=o,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}close(e){document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const n=this.resolveFn;this.resolveFn=null,n?.(e)}connectedCallback(){super.connectedCallback(),Rt.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),Rt.instance===this&&(Rt.instance=null)}render(){const e=this.search.toLowerCase(),n=this.values.filter(r=>r.value.toLowerCase().includes(e));return X`
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
      ${n.length===0?X`<div class="empty">No matching values.</div>`:X`<ul>
            ${n.slice(0,500).map(r=>X`
                <li
                  class=${r.value===this.current?"selected":""}
                  @click=${()=>this.close(r.value)}
                >
                  <span class="label">${r.value||X`<em>(empty)</em>`}</span>
                  <span class="count">${r.count}</span>
                </li>
              `)}
          </ul>`}
      ${this.values.length>500?X`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      <div class="actions">
        <button class="text" @click=${()=>this.close({clear:!0})}>Clear filter</button>
        <span style="color:#6b7280">${n.length} value${n.length===1?"":"s"}</span>
      </div>
    `}};Rt.instance=null;Rt.styles=[Jt,ct`
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
    `];Kr([Qt({type:Array})],Rt.prototype,"values",2);Kr([Qt({type:String})],Rt.prototype,"current",2);Kr([ne()],Rt.prototype,"search",2);Rt=Kr([pt("filter-popover")],Rt);var cd=Object.defineProperty,ud=Object.getOwnPropertyDescriptor,It=(e,n,r,o)=>{for(var t=o>1?void 0:o?ud(n,r):n,a=e.length-1,c;a>=0;a--)(c=e[a])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&cd(n,r,t),t};let St=class extends tt{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const n=e.target.value;this.fire(n),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const n=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,n.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const r=n[this.highlightIdx];r!==void 0?(e.preventDefault(),this.onPick(r)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const n=(this.value??"").trim().toLowerCase();if(!n)return this.options.slice(0,500);const r=[];for(const o of this.options)if(o.toLowerCase().includes(n)&&(r.push(o),r.length>=500))break;return r}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],n=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return X`
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
        ${this.value?X`<button
              type="button"
              class="clear"
              title="Clear filter"
              tabindex="-1"
              @mousedown=${r=>r.preventDefault()}
              @click=${this.onClear}
            >
              ×
            </button>`:He}
      </div>
      ${this.open?X`<ul class="dropdown" style=${n}>
            ${e.length===0?X`<li class="empty">No matching values.</li>`:e.map((r,o)=>X`
                    <li
                      class=${o===this.highlightIdx?"highlighted":""}
                      @mousedown=${t=>t.preventDefault()}
                      @click=${()=>this.onPick(r)}
                    >
                      ${r}
                    </li>
                  `)}
          </ul>`:He}
    `}};St.styles=ct`
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
  `;It([Qt({type:String})],St.prototype,"value",2);It([Qt({type:Array})],St.prototype,"options",2);It([Qt({type:String})],St.prototype,"placeholder",2);It([ne()],St.prototype,"open",2);It([ne()],St.prototype,"highlightIdx",2);It([ne()],St.prototype,"dropTop",2);It([ne()],St.prototype,"dropLeft",2);It([ne()],St.prototype,"dropMinWidth",2);It([ne()],St.prototype,"editing",2);It([Br("input")],St.prototype,"inputEl",2);St=It([pt("filter-combobox")],St);var dd=Object.defineProperty,fd=Object.getOwnPropertyDescriptor,mt=(e,n,r,o)=>{for(var t=o>1?void 0:o?fd(n,r):n,a=e.length-1,c;a>=0;a--)(c=e[a])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&dd(n,r,t),t};let lt=class extends tt{constructor(){super(...arguments),this.tableId="",this.columns=[],this.rows=[],this.sortColumn=null,this.sortDir=null,this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const n=e.detail;n.tableId===this.tableId&&(this.localQuery=n.query??"")}}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.()}async updated(e){e.has("tableId")&&this.tableId&&(this.unsubscribe?.(),await this.bind());const n=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");n&&n.offsetHeight>0&&(this.rowHeight=n.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.markEmptyCells()}markEmptyCells(){const e=this.shadowRoot?.querySelectorAll("tbody tr:not(.spacer) > td");if(e)for(const n of e)n.className.startsWith("t-")&&n.classList.toggle("is-null",hd(n))}async bind(){if(!this.tableId)return;const e=await Ae(),n=await e.store.tables.findOne(this.tableId);if(!n)return;this.applyTable(n),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(o=>{const t=o.find(a=>a.id===this.tableId);t&&this.applyTable(t)}),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const r=e.store.rows(this.tableId);this.unsubscribe=r.subscribe(o=>this.rows=o),this.rows=await r.find()}applyTable(e){this.columns=e.columns,this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filters={...e.filters??{}}}async setCell(e,n,r){const o=await Ae();await this.commitCell(o,e,n,r)}async commitCell(e,n,r,o){const t=this.columns.find(a=>a.field===r);if(t){const a=pd(t,o,this.rows,n.id);if(a){await e.api.ui.dialogs.alert(a,`Cannot save ${t.label}`),this.requestUpdate();return}}await e.store.rows(this.tableId).patch(n.id,{data:{...n.data,[r]:o},updatedAt:Date.now()})}renderCell(e,n){const r=e.data[n.field],o=n.renderer,t=o?this.cellRenderers?.get(o):void 0;if(t){const a=id(t);return sd`<${a}
        .value=${r??""}
        .column=${n}
        .row=${e.data}
        @change=${c=>this.setCell(e,n.field,c.detail.value)}
      ></${a}>`}switch(n.type){case"boolean":return X`<input
          type="checkbox"
          .checked=${r===!0||r==="true"||r===1||r==="1"}
          @change=${c=>this.setCell(e,n.field,c.target.checked)}
        />`;case"date":return X`<input
          type="date"
          .value=${md(r)}
          @change=${a=>this.setCell(e,n.field,a.target.value||null)}
        />`;case"datetime":return X`<input
          type="datetime-local"
          .value=${gd(r)}
          @change=${a=>this.setCell(e,n.field,a.target.value||null)}
        />`;case"number":return X`<input
          type="number"
          .value=${r==null?"":String(r)}
          @change=${a=>{const c=a.target.value;this.setCell(e,n.field,c===""?null:Number(c))}}
        />`;default:return X`<input
          type="text"
          .value=${String(r??"")}
          @change=${a=>this.setCell(e,n.field,a.target.value)}
        />`}}async deleteRow(e){await(await Ae()).store.rows(this.tableId).remove(e)}async toggleSort(e){let n;this.sortColumn!==e?n="asc":this.sortDir==="asc"?n="desc":this.sortDir==="desc"?n=null:n="asc",this.sortColumn=n?e:null,this.sortDir=n;const r=await Ae(),o=n?{sortColumn:e,sortAsc:n==="asc",updatedAt:Date.now()}:{sortColumn:void 0,sortAsc:void 0,updatedAt:Date.now()};await r.store.tables.patch(this.tableId,o)}filteredRows(){const e=Object.entries(this.filters).filter(([,o])=>o&&o.trim().length>0),n=this.globalQuery.trim().toLowerCase(),r=this.localQuery.trim().toLowerCase();return e.length===0&&n.length===0&&r.length===0?this.rows:this.rows.filter(o=>{const t=a=>Object.values(o.data).some(c=>c!=null&&String(c).toLowerCase().includes(a));return n.length>0&&!t(n)||r.length>0&&!t(r)?!1:e.every(([a,c])=>String(o.data[a]??"").toLowerCase().includes(c.toLowerCase()))})}sortedRows(){const e=this.filteredRows();if(!this.sortColumn||!this.sortDir)return e;const n=this.sortColumn,o=this.columns.find(c=>c.field===n)?.type??"string",t=this.sortDir==="asc"?1:-1,a=[...e];return a.sort((c,f)=>bd(c.data[n],f.data[n],o)*t),a}async openFilterPicker(e,n){e.stopPropagation();const r=e.currentTarget,o=Rt.instance;if(!o)return;const t=new Map;for(const f of this.rowsFacetedFor(n)){const m=f.data[n];if(m==null)continue;const F=String(m);t.set(F,(t.get(F)??0)+1)}const a=[...t.entries()].map(([f,m])=>({value:f,count:m})).sort((f,m)=>m.count-f.count||f.value.localeCompare(m.value)),c=await o.open(r.getBoundingClientRect(),a,this.filters[n]??"");c!==null&&(typeof c=="object"&&"clear"in c?this.onFilterInput(n,""):typeof c=="string"&&this.onFilterInput(n,c))}onFilterInput(e,n){this.filters={...this.filters,[e]:n},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>this.saveFilters(),250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const n=Object.entries(this.filters).filter(([r,o])=>o&&o.trim().length>0&&r!==e).map(([r,o])=>[r,o.trim().toLowerCase()]);return n.length===0?this.rows:this.rows.filter(r=>n.every(([o,t])=>String(r.data[o]??"").toLowerCase().includes(t)))}computeFilterSuggestions(){const e=new Map,n=this.rows.slice(0,100);if(n.length===0)return e;const r=50,o=500;for(const t of this.visibleColumns){let a=!0;for(const f of n){const m=f.data[t.field];if(m==null)continue;if((typeof m=="string"?m:String(m)).length>=r){a=!1;break}}if(!a)continue;const c=new Set;for(const f of this.rowsFacetedFor(t.field)){const m=f.data[t.field];if(m==null||m==="")continue;const F=typeof m=="string"?m:String(m);if(!(F.length>=r)&&(c.add(F),c.size>=o))break}e.set(t.field,[...c].sort())}return e}onResizeStart(e,n,r){e.preventDefault(),e.stopPropagation();const o=r.offsetWidth;this.resizing={field:n,startX:e.clientX,startW:o};const t=c=>{if(!this.resizing)return;const f=c.clientX-this.resizing.startX,m=Math.max(40,this.resizing.startW+f);this.columns=this.columns.map(F=>F.field===this.resizing.field?{...F,width:m}:F)},a=async()=>{window.removeEventListener("pointermove",t),window.removeEventListener("pointerup",a);const c=this.resizing?.field;if(this.resizing=null,!c)return;await(await Ae()).store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",t),window.addEventListener("pointerup",a)}onColDragStart(e,n){this.dragSourceField=n,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",n))}onColDragOver(e,n,r){if(!this.dragSourceField||this.dragSourceField===n)return;e.preventDefault();const o=r.getBoundingClientRect(),t=e.clientX<o.left+o.width/2;this.dropTargetField=n,this.dropEdge=t?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,n){e.preventDefault();const r=this.dragSourceField,o=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!r||r===n||!o)return;const t=[...this.columns],a=t.findIndex(F=>F.field===r);if(a<0)return;const[c]=t.splice(a,1);let f=t.findIndex(F=>F.field===n);if(f<0){t.splice(a,0,c);return}o==="after"&&(f+=1),t.splice(f,0,c),await(await Ae()).store.tables.patch(this.tableId,{columns:t,updatedAt:Date.now()})}async saveFilters(){const e=await Ae(),n={};for(const[o,t]of Object.entries(this.filters))t&&t.trim().length>0&&(n[o]=t);const r=Object.keys(n).length===0?void 0:n;await e.store.tables.patch(this.tableId,{filters:r,updatedAt:Date.now()})}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const n=this.rowHeight,r=Math.ceil(this.viewportHeight/n)+this.OVERSCAN*2,o=Math.max(0,Math.floor(this.scrollY/n)-this.OVERSCAN),t=Math.min(e.length,o+r);return{slice:e.slice(o,t),topPad:o*n,bottomPad:(e.length-t)*n}}render(){const e=this.sortedRows(),n=this.visibleColumns,{slice:r,topPad:o,bottomPad:t}=this.virtualSlice(e),a=this.computeFilterSuggestions();return X`
      <table>
        <colgroup>
          ${n.map(c=>X`<col style=${c.width!=null?`width: ${c.width}px`:""} />`)}
          <col style="width:2rem" />
        </colgroup>
        <thead>
          <tr>
            ${n.map(c=>{const f=this.sortColumn===c.field&&this.sortDir,m=f==="asc"?"▲":f==="desc"?"▼":"⇅",F=`t-${c.type}`,A=this.dragSourceField===c.field,R=this.dropTargetField===c.field,T=R&&this.dropEdge==="before"?" drop-before":R&&this.dropEdge==="after"?" drop-after":"";return X`
                <th
                  class=${`${F}${f?" sorted":""}${A?" drag-source":""}${T}`}
                  title=${`${c.field} — click to sort, drag to reorder`}
                  draggable="true"
                  @click=${()=>this.toggleSort(c.field)}
                  @dragstart=${N=>this.onColDragStart(N,c.field)}
                  @dragover=${N=>this.onColDragOver(N,c.field,N.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(c.field)}
                  @drop=${N=>this.onColDrop(N,c.field)}
                  @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                >
                  ${c.label}<span class="sort-icon">${m}</span>
                  <button
                    class=${`funnel${this.filters[c.field]?" active":""}`}
                    title="Filter by value"
                    @click=${N=>this.openFilterPicker(N,c.field)}
                  >
                    <span class="mi sm">filter_list</span>
                  </button>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${N=>N.stopPropagation()}
                    @pointerdown=${N=>this.onResizeStart(N,c.field,N.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:2rem"></th>
          </tr>
          <tr class="filter-row">
            ${n.map(c=>{const f=a.get(c.field)??[];return X`
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
          ${o>0?X`<tr class="spacer" style=${`height:${o}px`}><td colspan=${n.length+1}></td></tr>`:""}
          ${r.map(c=>X`
              <tr>
                ${n.map(f=>X`<td class=${`t-${f.type}`}>${this.renderCell(c,f)}</td>`)}
                <td>
                  <button class="danger" title="Delete row" @click=${()=>this.deleteRow(c.id)}>
                    <span class="mi sm">delete</span>
                  </button>
                </td>
              </tr>
            `)}
          ${t>0?X`<tr class="spacer" style=${`height:${t}px`}><td colspan=${n.length+1}></td></tr>`:""}
        </tbody>
      </table>
    `}};lt.styles=[Jt,ct`
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
  `];mt([Qt({type:String})],lt.prototype,"tableId",2);mt([ne()],lt.prototype,"columns",2);mt([ne()],lt.prototype,"rows",2);mt([ne()],lt.prototype,"sortColumn",2);mt([ne()],lt.prototype,"sortDir",2);mt([ne()],lt.prototype,"filters",2);mt([ne()],lt.prototype,"globalQuery",2);mt([ne()],lt.prototype,"localQuery",2);mt([ne()],lt.prototype,"dragSourceField",2);mt([ne()],lt.prototype,"dropTargetField",2);mt([ne()],lt.prototype,"dropEdge",2);mt([ne()],lt.prototype,"resizing",2);mt([ne()],lt.prototype,"cellRenderers",2);mt([ne()],lt.prototype,"scrollY",2);mt([ne()],lt.prototype,"viewportHeight",2);lt=mt([pt("data-table")],lt);function hd(e){if((e.textContent??"").trim()!==""||e.querySelector("img"))return!1;const n=e.querySelectorAll("input");for(const r of Array.from(n))if(r.type==="checkbox"||r.value!=="")return!1;return!0}function pd(e,n,r,o){if(e.notnull){if(n==null)return`${e.label} cannot be empty.`;if(typeof n=="string"&&n.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof n=="string"&&n.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${n.length}).`;if(typeof n=="number"&&n>e.max)return`${e.label} must be at most ${e.max} (got ${n}).`}return e.unique&&n!==null&&n!==void 0&&n!==""&&r.find(a=>a.id!==o&&a.data[e.field]===n)?`${e.label} must be unique. Another row already has "${String(n)}".`:null}function md(e){if(typeof e!="string"&&typeof e!="number")return"";const n=String(e).trim();if(!n)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(n))return n;const r=new Date(n);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function gd(e){if(typeof e!="string"&&typeof e!="number")return"";const n=String(e).trim();if(!n)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(n);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(n))return`${n}T00:00`;const o=new Date(n);if(Number.isNaN(o.getTime()))return"";const t=o.toISOString();return`${t.slice(0,10)}T${t.slice(11,16)}`}function bd(e,n,r){const o=e==null||e==="",t=n==null||n==="";if(o&&t)return 0;if(o)return 1;if(t)return-1;switch(r){case"number":{const a=Number(e),c=Number(n);return Number.isNaN(a)||Number.isNaN(c)?String(e).localeCompare(String(n)):a-c}case"boolean":return(e?1:0)-(n?1:0);case"date":{const a=new Date(String(e)).getTime(),c=new Date(String(n)).getTime();return Number.isNaN(a)||Number.isNaN(c)?String(e).localeCompare(String(n)):a-c}default:return String(e).localeCompare(String(n),void 0,{numeric:!0,sensitivity:"base"})}}var yd=Object.defineProperty,wd=Object.getOwnPropertyDescriptor,Vr=(e,n,r,o)=>{for(var t=o>1?void 0:o?wd(n,r):n,a=e.length-1,c;a>=0;a--)(c=e[a])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&yd(n,r,t),t};let Rn=class extends tt{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.onBlur=()=>{this.query.trim().length===0&&(this.open=!1)}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}render(){return!this.open&&this.query.length===0?X`<button
        class="icon"
        title="Search rows in this table"
        @click=${()=>this.open=!0}
      >
        <span class="mi sm">search</span>
      </button>`:X`<input
      type="search"
      placeholder="search…"
      autofocus
      .value=${this.query}
      @input=${this.onInput}
      @blur=${this.onBlur}
    />`}};Rn.styles=[Jt,ct`
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
  `];Vr([Qt({type:String})],Rn.prototype,"tableId",2);Vr([ne()],Rn.prototype,"query",2);Vr([ne()],Rn.prototype,"open",2);Rn=Vr([pt("panel-search")],Rn);var vd=Object.defineProperty,xd=Object.getOwnPropertyDescriptor,Yr=(e,n,r,o)=>{for(var t=o>1?void 0:o?xd(n,r):n,a=e.length-1,c;a>=0;a--)(c=e[a])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&vd(n,r,t),t};let zn=class extends tt{constructor(){super(...arguments),this.tableId="",this.rowCount=0,this.tableButtons=[]}async connectedCallback(){super.connectedCallback();const e=await Ae();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]);const n=e.store.rows(this.tableId);this.unsubRows=n.subscribe(r=>this.rowCount=r.length),this.rowCount=(await n.find()).length}disconnectedCallback(){super.disconnectedCallback(),this.unsubRows?.()}async addRow(){const e=await Ae(),n=await e.store.tables.findOne(this.tableId);if(!n)return;const r={};for(const o of n.columns)r[o.field]=$d(o);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:r,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}async runTableButton(e){const n=await Ae();try{await Promise.resolve(e.onClick(n.api,{tableId:this.tableId}))}catch(r){console.error(`[table-button:${e.id}]`,r)}}render(){return X`
      <button title="Add a blank row" @click=${this.addRow}>
        <span class="mi sm">add</span><span>Add row</span>
      </button>
      <button title="Edit columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span><span>Columns</span>
      </button>
      ${this.tableButtons.map(e=>X`<button title=${e.tooltip??e.label} @click=${()=>this.runTableButton(e)}>
          ${e.icon?X`<span class="mi sm">${e.icon}</span>`:""}
          <span>${e.label}</span>
        </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};zn.styles=[Jt,ct`
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
  `];Yr([Qt({type:String})],zn.prototype,"tableId",2);Yr([ne()],zn.prototype,"rowCount",2);Yr([ne()],zn.prototype,"tableButtons",2);zn=Yr([pt("panel-footer")],zn);function $d(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}const Tn=new Map,jr=new Set,Ws=new Set;let ss=!1;async function Ed(){if(ss)return;ss=!0;const e=await Ae(),n=(await e.store.tables.find()).filter(r=>r.workspaceId===e.workspaceId);n.sort(as);for(const r of n)ls(r,e);e.store.tables.subscribe(r=>{const o=r.filter(c=>c.workspaceId===e.workspaceId),t=new Set(o.map(c=>c.id));for(const[c,f]of Tn)if(!t.has(c)){Tn.delete(c),jr.add(c),Ws.add(c);try{f.status!=="closed"&&f.close()}catch{}}const a=o.filter(c=>!Tn.has(c.id)).sort(as);for(const c of a)ls(c,e)})}function as(e,n){return(e.windowGeometry?.z??-1/0)-(n.windowGeometry?.z??-1/0)}const Cd=200,kd=100,Sd=720,_d=360,Hs=34;function Pd(e,n){if(!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||e.w<Cd||e.h<kd)return null;const r=n.getBoundingClientRect();if(e.w>r.width)return null;const o=Math.max(0,Math.min(e.x,r.width-e.w)),t=Math.max(0,Math.min(e.y,r.height-Hs));return{...e,x:o,y:t}}function Ad(e,n){const r=n.clientWidth,o=n.clientHeight,t=e.offsetWidth,c=e.querySelector(".jsPanel-titlebar")?.offsetHeight||Hs,f=parseFloat(e.style.left)||e.offsetLeft||0,m=parseFloat(e.style.top)||e.offsetTop||0,F=Math.max(0,Math.min(f,r-t)),A=Math.max(0,Math.min(m,o-c));F!==f&&(e.style.left=`${F}px`),A!==m&&(e.style.top=`${A}px`)}function ls(e,n){const r=document.createElement("data-table");r.tableId=e.id,r.style.height="100%";const o=document.createElement("panel-search");o.tableId=e.id;const t=document.createElement("panel-footer");t.tableId=e.id;const a=document.getElementById("easydb-panels")??document.body,c=Pd(e.windowGeometry,a),f=`panel-${Ks(e.id)}`,m=c?{my:"left-top",at:"left-top",offsetX:c.x,offsetY:c.y}:Td(),F=c?{panelSize:`${c.w} ${c.h}`}:{contentSize:`${Sd} ${_d}`},A=O.create({id:f,container:a,headerTitle:e.name,footerToolbar:t,theme:"primary",content:r,...F,position:m,minimizeTo:"parent",dragit:{containment:!1,drag:ke=>Ad(ke,a),stop:()=>Pi(e.id,n)},resizeit:{containment:!1,stop:()=>Pi(e.id,n)},onfronted:()=>Fd(e.id,n),onbeforeclose:()=>jr.has(e.id)?!0:((async()=>await n.api.ui.dialogs.confirm(`Delete table "${e.name}" and all its rows?`,"Confirm delete")&&(jr.add(e.id),Tn.get(e.id)?.close()))(),!1),onclosed:async()=>{Tn.delete(e.id),jr.delete(e.id),!Ws.delete(e.id)&&await Od(e.id,n)},onstatuschange:()=>Pi(e.id,n)});Tn.set(e.id,A);const T=document.getElementById(f)?.querySelector(".jsPanel-controlbar");T&&T.prepend(o),c?.maximized&&typeof A.maximize=="function"?queueMicrotask(()=>A.maximize?.()):c?.minimized&&typeof A.minimize=="function"&&queueMicrotask(()=>A.minimize?.());let N=e.name,Q=null;const oe=ke=>{typeof A.setHeaderTitle=="function"&&A.setHeaderTitle(`${N} (${ke})`)};n.store.rows(e.id).find().then(ke=>oe(ke.length)),Q=n.store.rows(e.id).subscribe(ke=>oe(ke.length)),n.store.tables.subscribe(ke=>{const he=ke.find(_e=>_e.id===e.id);he&&he.name!==N&&(N=he.name)});const Ke=A.close.bind(A);A.close=()=>(Q?.(),Ke())}let jd=0;function Td(){const e=jd++;return{my:"left-top",at:"left-top",offsetX:40+e%8*30,offsetY:80+e%8*30}}async function Pi(e,n){const r=document.getElementById(`panel-${Ks(e)}`);if(!r)return;const o=r.dataset.status??"normalized";try{const a=(await n.store.tables.findOne(e))?.windowGeometry?.z??0,c={x:r.offsetLeft,y:r.offsetTop,w:r.offsetWidth,h:r.offsetHeight,z:a,minimized:o==="minimized",maximized:o==="maximized"};await n.store.tables.patch(e,{windowGeometry:c,updatedAt:Date.now()})}catch{}}async function Fd(e,n){try{const r=await n.store.tables.findOne(e);if(!r)return;const o=r.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await n.store.tables.patch(e,{windowGeometry:{...o,z:Date.now()},updatedAt:Date.now()})}catch{}}async function Od(e,n){const r=n.store.rows(e),o=await r.find();await r.bulkRemove(o.map(t=>t.id)),await n.store.tables.remove(e)}function Ks(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}var Dd=Object.defineProperty,Rd=Object.getOwnPropertyDescriptor,Vs=(e,n,r,o)=>{for(var t=o>1?void 0:o?Rd(n,r):n,a=e.length-1,c;a>=0;a--)(c=e[a])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&Dd(n,r,t),t};let Rr=class extends tt{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await Ae();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(r=>this.tables=r.filter(o=>o.workspaceId===this.workspaceId));const n=await e.store.tables.find();this.tables=n.filter(r=>r.workspaceId===this.workspaceId),await Ed()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?X``:X`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on
      the page, or click <strong>+ New Table</strong> above.
    </div>`}};Rr.styles=ct`
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
  `;Vs([ne()],Rr.prototype,"tables",2);Rr=Vs([pt("table-list")],Rr);var zd=Object.defineProperty,Id=Object.getOwnPropertyDescriptor,Vi=(e,n,r,o)=>{for(var t=o>1?void 0:o?Id(n,r):n,a=e.length-1,c;a>=0;a--)(c=e[a])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&zd(n,r,t),t};let Qn=class extends tt{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await Ae();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(n=>this.workspaces=n),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const n=this.workspaces.find(t=>t.id===e);if(!n)return;const r=new URLSearchParams(location.search);r.set("space",n.name);const o=`${location.pathname}?${r.toString()}${location.hash}`;location.assign(o)}async addWorkspace(){const n=await(await Ae()).api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!n||!n.trim())return;const r=new URLSearchParams(location.search);r.set("space",n.trim()),location.assign(`${location.pathname}?${r.toString()}${location.hash}`)}render(){return X`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>X`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};Qn.styles=[Jt,ct`
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
  `];Vi([ne()],Qn.prototype,"workspaces",2);Vi([ne()],Qn.prototype,"current",2);Qn=Vi([pt("workspace-selector")],Qn);var cs=Object.freeze,Ys=Object.defineProperty,Bd=Object.getOwnPropertyDescriptor,cn=(e,n,r,o)=>{for(var t=o>1?void 0:o?Bd(n,r):n,a=e.length-1,c;a>=0;a--)(c=e[a])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&Ys(n,r,t),t},Ld=(e,n)=>cs(Ys(e,"raw",{value:cs(e.slice())})),us;let Ut=class extends tt{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.api=null,this.searchTimer=null,this.onEditColumns=e=>{const n=e;this.dialog?.open(n.detail.tableId)},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>{document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:this.searchQuery}}))},200)},this.onDragOver=e=>{ds(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!ds(e))return;e.preventDefault();const n=await Ae(),r=Array.from(e.dataTransfer?.files??[]);n.events.emit("drop:files",{files:r,event:e});for(const o of[...n.registries.dropHandlers])try{if(await o(e,n.api))return}catch(t){n.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:t})}},this.runSlot=e=>{this.api&&Promise.resolve(e.onClick(this.api)).catch(n=>{console.error(`[footer-button:${e.id}]`,n)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager)}async bindRegistries(){const e=await Ae();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e))}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,n){const r=n==="header"||e.variant==="primary"?"primary":"slot";return X`
      <button class=${r} title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
        ${e.icon?X`<span class="mi sm">${e.icon}</span>`:""}
        <span>${e.label}</span>
      </button>
    `}render(){return X(us||(us=Ld([`
      <header>
        <strong>easyDBAccess <span class="version">v0.0.14</span></strong>
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
    `])),this.searchOpen||this.searchQuery.length>0?X`<input
              class="search"
              type="search"
              placeholder="search all tables…"
              autofocus
              .value=${this.searchQuery}
              @input=${this.onSearchInput}
              @blur=${()=>{this.searchQuery.trim().length===0&&(this.searchOpen=!1)}}
            />`:X`<button
              class="icon-btn"
              title="Search across all tables in this workspace"
              @click=${()=>this.searchOpen=!0}
            >
              <span class="mi">search</span>
            </button>`,this.headerButtons.map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};Ut.styles=[Jt,ct`
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
    `];cn([Br("new-table-dialog")],Ut.prototype,"dialog",2);cn([Br("csv-paste-dialog")],Ut.prototype,"csvPasteDialog",2);cn([Br("plugin-manager-dialog")],Ut.prototype,"pluginManagerDialog",2);cn([ne()],Ut.prototype,"footerButtons",2);cn([ne()],Ut.prototype,"headerButtons",2);cn([ne()],Ut.prototype,"searchQuery",2);cn([ne()],Ut.prototype,"searchOpen",2);Ut=cn([pt("app-shell")],Ut);function ds(e){const n=e.dataTransfer;return n?n.types&&Array.from(n.types).includes("Files")?!0:(n.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([Ae(),va(()=>Promise.resolve().then(()=>Ms),[])]).then(([e,n])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>n.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});
//# sourceMappingURL=index-C7_PHjb7.js.map
