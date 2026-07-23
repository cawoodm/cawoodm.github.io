(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const Na="modulepreload",qa=function(e){return"/easydbaccess/"+e},Os={},Ua=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){let c=function(k){return Promise.all(k.map(_=>Promise.resolve(_).then(E=>({status:"fulfilled",value:E}),E=>({status:"rejected",reason:E}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),m=f?.nonce||f?.getAttribute("nonce");n=c(r.map(k=>{if(k=qa(k),k in Os)return;Os[k]=!0;const _=k.endsWith(".css"),E=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${k}"]${E}`))return;const z=document.createElement("link");if(z.rel=_?"stylesheet":Na,_||(z.as="script"),z.crossOrigin="",z.href=k,m&&z.setAttribute("nonce",m),document.head.appendChild(z),_)return new Promise((M,q)=>{z.addEventListener("load",M),z.addEventListener("error",()=>q(new Error(`Unable to preload CSS for ${k}`)))})}))}function a(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return n.then(c=>{for(const f of c||[])f.status==="rejected"&&a(f.reason);return t().catch(a)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rr=globalThis,Ki=Rr.ShadowRoot&&(Rr.ShadyCSS===void 0||Rr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vi=Symbol(),Rs=new WeakMap;let Eo=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==Vi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Ki&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=Rs.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Rs.set(r,t))}return t}toString(){return this.cssText}};const Wa=e=>new Eo(typeof e=="string"?e:e+"",void 0,Vi),ot=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,a)=>i+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[a+1],e[0]);return new Eo(r,e,Vi)},Ha=(e,t)=>{if(Ki)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),n=Rr.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)}},zs=Ki?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return Wa(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ka,defineProperty:Va,getOwnPropertyDescriptor:Ya,getOwnPropertyNames:Ga,getOwnPropertySymbols:Xa,getPrototypeOf:Ja}=Object,Wr=globalThis,Is=Wr.trustedTypes,Qa=Is?Is.emptyScript:"",Za=Wr.reactiveElementPolyfillSupport,er=(e,t)=>e,Lr={toAttribute(e,t){switch(t){case Boolean:e=e?Qa:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Yi=(e,t)=>!Ka(e,t),Ls={attribute:!0,type:String,converter:Lr,reflect:!1,useDefault:!1,hasChanged:Yi};Symbol.metadata??=Symbol("metadata"),Wr.litPropertyMetadata??=new WeakMap;let Ln=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Ls){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,r);n!==void 0&&Va(this.prototype,t,n)}}static getPropertyDescriptor(t,r,i){const{get:n,set:a}=Ya(this.prototype,t)??{get(){return this[r]},set(c){this[r]=c}};return{get:n,set(c){const f=n?.call(this);a?.call(this,c),this.requestUpdate(t,f,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ls}static _$Ei(){if(this.hasOwnProperty(er("elementProperties")))return;const t=Ja(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(er("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(er("properties"))){const r=this.properties,i=[...Ga(r),...Xa(r)];for(const n of i)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)r.unshift(zs(n))}else t!==void 0&&r.push(zs(t));return r}static _$Eu(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ha(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$ET(t,r){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const a=(i.converter?.toAttribute!==void 0?i.converter:Lr).toAttribute(r,i.type);this._$Em=t,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(t,r){const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const a=i.getPropertyOptions(n),c=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:Lr;this._$Em=n;const f=c.fromAttribute(r,a.type);this[n]=f??this._$Ej?.get(n)??f,this._$Em=null}}requestUpdate(t,r,i,n=!1,a){if(t!==void 0){const c=this.constructor;if(n===!1&&(a=this[t]),i??=c.getPropertyOptions(t),!((i.hasChanged??Yi)(a,r)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(c._$Eu(t,i))))return;this.C(t,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:i,reflect:n,wrapped:a},c){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,c??r??this[t]),a!==!0||c!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,a]of i){const{wrapped:c}=a,f=this[n];c!==!0||this._$AL.has(n)||f===void 0||this.C(n,void 0,a,f)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(r)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Ln.elementStyles=[],Ln.shadowRootOptions={mode:"open"},Ln[er("elementProperties")]=new Map,Ln[er("finalized")]=new Map,Za?.({ReactiveElement:Ln}),(Wr.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gi=globalThis,Bs=e=>e,Br=Gi.trustedTypes,Ms=Br?Br.createPolicy("lit-html",{createHTML:e=>e}):void 0,So="$lit$",dn=`lit$${Math.random().toFixed(9).slice(2)}$`,_o="?"+dn,el=`<${_o}>`,Sn=document,tr=()=>Sn.createComment(""),nr=e=>e===null||typeof e!="object"&&typeof e!="function",Xi=Array.isArray,tl=e=>Xi(e)||typeof e?.[Symbol.iterator]=="function",Ti=`[ 	
\f\r]`,Zn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ns=/-->/g,qs=/>/g,$n=RegExp(`>|${Ti}(?:([^\\s"'>=/]+)(${Ti}*=${Ti}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Us=/'/g,Ws=/"/g,Ao=/^(?:script|style|textarea|title)$/i,nl=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),H=nl(1),_n=Symbol.for("lit-noChange"),Re=Symbol.for("lit-nothing"),Hs=new WeakMap,kn=Sn.createTreeWalker(Sn,129);function Po(e,t){if(!Xi(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ms!==void 0?Ms.createHTML(t):t}const rl=(e,t)=>{const r=e.length-1,i=[];let n,a=t===2?"<svg>":t===3?"<math>":"",c=Zn;for(let f=0;f<r;f++){const m=e[f];let k,_,E=-1,z=0;for(;z<m.length&&(c.lastIndex=z,_=c.exec(m),_!==null);)z=c.lastIndex,c===Zn?_[1]==="!--"?c=Ns:_[1]!==void 0?c=qs:_[2]!==void 0?(Ao.test(_[2])&&(n=RegExp("</"+_[2],"g")),c=$n):_[3]!==void 0&&(c=$n):c===$n?_[0]===">"?(c=n??Zn,E=-1):_[1]===void 0?E=-2:(E=c.lastIndex-_[2].length,k=_[1],c=_[3]===void 0?$n:_[3]==='"'?Ws:Us):c===Ws||c===Us?c=$n:c===Ns||c===qs?c=Zn:(c=$n,n=void 0);const M=c===$n&&e[f+1].startsWith("/>")?" ":"";a+=c===Zn?m+el:E>=0?(i.push(k),m.slice(0,E)+So+m.slice(E)+dn+M):m+dn+(E===-2?f:M)}return[Po(e,a+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class rr{constructor({strings:t,_$litType$:r},i){let n;this.parts=[];let a=0,c=0;const f=t.length-1,m=this.parts,[k,_]=rl(t,r);if(this.el=rr.createElement(k,i),kn.currentNode=this.el.content,r===2||r===3){const E=this.el.content.firstChild;E.replaceWith(...E.childNodes)}for(;(n=kn.nextNode())!==null&&m.length<f;){if(n.nodeType===1){if(n.hasAttributes())for(const E of n.getAttributeNames())if(E.endsWith(So)){const z=_[c++],M=n.getAttribute(E).split(dn),q=/([.?@])?(.*)/.exec(z);m.push({type:1,index:a,name:q[2],strings:M,ctor:q[1]==="."?sl:q[1]==="?"?ol:q[1]==="@"?al:Hr}),n.removeAttribute(E)}else E.startsWith(dn)&&(m.push({type:6,index:a}),n.removeAttribute(E));if(Ao.test(n.tagName)){const E=n.textContent.split(dn),z=E.length-1;if(z>0){n.textContent=Br?Br.emptyScript:"";for(let M=0;M<z;M++)n.append(E[M],tr()),kn.nextNode(),m.push({type:2,index:++a});n.append(E[z],tr())}}}else if(n.nodeType===8)if(n.data===_o)m.push({type:2,index:a});else{let E=-1;for(;(E=n.data.indexOf(dn,E+1))!==-1;)m.push({type:7,index:a}),E+=dn.length-1}a++}}static createElement(t,r){const i=Sn.createElement("template");return i.innerHTML=t,i}}function Mn(e,t,r=e,i){if(t===_n)return t;let n=i!==void 0?r._$Co?.[i]:r._$Cl;const a=nr(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),a===void 0?n=void 0:(n=new a(e),n._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=n:r._$Cl=n),n!==void 0&&(t=Mn(e,n._$AS(e,t.values),n,i)),t}class il{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:i}=this._$AD,n=(t?.creationScope??Sn).importNode(r,!0);kn.currentNode=n;let a=kn.nextNode(),c=0,f=0,m=i[0];for(;m!==void 0;){if(c===m.index){let k;m.type===2?k=new sr(a,a.nextSibling,this,t):m.type===1?k=new m.ctor(a,m.name,m.strings,this,t):m.type===6&&(k=new ll(a,this,t)),this._$AV.push(k),m=i[++f]}c!==m?.index&&(a=kn.nextNode(),c++)}return kn.currentNode=Sn,n}p(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class sr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,n){this.type=2,this._$AH=Re,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Mn(this,t,r),nr(t)?t===Re||t==null||t===""?(this._$AH!==Re&&this._$AR(),this._$AH=Re):t!==this._$AH&&t!==_n&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):tl(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Re&&nr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Sn.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=rr.createElement(Po(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(r);else{const a=new il(n,this),c=a.u(this.options);a.p(r),this.T(c),this._$AH=a}}_$AC(t){let r=Hs.get(t.strings);return r===void 0&&Hs.set(t.strings,r=new rr(t)),r}k(t){Xi(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const a of t)n===r.length?r.push(i=new sr(this.O(tr()),this.O(tr()),this,this.options)):i=r[n],i._$AI(a),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const i=Bs(t).nextSibling;Bs(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Hr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,n,a){this.type=1,this._$AH=Re,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Re}_$AI(t,r=this,i,n){const a=this.strings;let c=!1;if(a===void 0)t=Mn(this,t,r,0),c=!nr(t)||t!==this._$AH&&t!==_n,c&&(this._$AH=t);else{const f=t;let m,k;for(t=a[0],m=0;m<a.length-1;m++)k=Mn(this,f[i+m],r,m),k===_n&&(k=this._$AH[m]),c||=!nr(k)||k!==this._$AH[m],k===Re?t=Re:t!==Re&&(t+=(k??"")+a[m+1]),this._$AH[m]=k}c&&!n&&this.j(t)}j(t){t===Re?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class sl extends Hr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Re?void 0:t}}class ol extends Hr{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Re)}}class al extends Hr{constructor(t,r,i,n,a){super(t,r,i,n,a),this.type=5}_$AI(t,r=this){if((t=Mn(this,t,r,0)??Re)===_n)return;const i=this._$AH,n=t===Re&&i!==Re||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==Re&&(i===Re||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ll{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Mn(this,t)}}const cl=Gi.litHtmlPolyfillSupport;cl?.(rr,sr),(Gi.litHtmlVersions??=[]).push("3.3.3");const ul=(e,t,r)=>{const i=r?.renderBefore??t;let n=i._$litPart$;if(n===void 0){const a=r?.renderBefore??null;i._$litPart$=n=new sr(t.insertBefore(tr(),a),a,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ji=globalThis;let tt=class extends Ln{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ul(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return _n}};tt._$litElement$=!0,tt.finalized=!0,Ji.litElementHydrateSupport?.({LitElement:tt});const dl=Ji.litElementPolyfillSupport;dl?.({LitElement:tt});(Ji.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fl={attribute:!0,type:String,converter:Lr,reflect:!1,hasChanged:Yi},hl=(e=fl,t,r)=>{const{kind:i,metadata:n}=r;let a=globalThis.litPropertyMetadata.get(n);if(a===void 0&&globalThis.litPropertyMetadata.set(n,a=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),i==="accessor"){const{name:c}=r;return{set(f){const m=t.get.call(this);t.set.call(this,f),this.requestUpdate(c,m,e,!0,f)},init(f){return f!==void 0&&this.C(c,void 0,e,f),f}}}if(i==="setter"){const{name:c}=r;return function(f){const m=this[c];t.call(this,f),this.requestUpdate(c,m,e,!0,f)}}throw Error("Unsupported decorator location: "+i)};function Zt(e){return(t,r)=>typeof r=="object"?hl(e,t,r):((i,n,a)=>{const c=n.hasOwnProperty(a);return n.constructor.createProperty(a,i),c?Object.getOwnPropertyDescriptor(n,a):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ee(e){return Zt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pl=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Kr(e,t){return(r,i,n)=>{const a=c=>c.renderRoot?.querySelector(e)??null;return pl(r,i,{get(){return a(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ml={CHILD:2},gl=e=>(...t)=>({_$litDirective$:e,values:t});class bl{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class zi extends bl{constructor(t){if(super(t),this.it=Re,t.type!==ml.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Re||t==null)return this._t=void 0,this.it=t;if(t===_n)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}zi.directiveName="unsafeHTML",zi.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ii extends zi{}Ii.directiveName="unsafeSVG",Ii.resultType=2;const yl=gl(Ii);var wl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zr={exports:{}},xl=zr.exports,Ks;function $l(){return Ks||(Ks=1,(function(e,t){(function(r,i){e.exports=i()})(xl,function(){var r=function(s,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,u){l.__proto__=u}||function(l,u){for(var d in u)Object.prototype.hasOwnProperty.call(u,d)&&(l[d]=u[d])})(s,o)},i=function(){return(i=Object.assign||function(s){for(var o,l=1,u=arguments.length;l<u;l++)for(var d in o=arguments[l])Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d]);return s}).apply(this,arguments)};function n(s,o,l){for(var u,d=0,h=o.length;d<h;d++)!u&&d in o||((u=u||Array.prototype.slice.call(o,0,d))[d]=o[d]);return s.concat(u||Array.prototype.slice.call(o))}var a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:wl,c=Object.keys,f=Array.isArray;function m(s,o){return typeof o!="object"||c(o).forEach(function(l){s[l]=o[l]}),s}typeof Promise>"u"||a.Promise||(a.Promise=Promise);var k=Object.getPrototypeOf,_={}.hasOwnProperty;function E(s,o){return _.call(s,o)}function z(s,o){typeof o=="function"&&(o=o(k(s))),(typeof Reflect>"u"?c:Reflect.ownKeys)(o).forEach(function(l){q(s,l,o[l])})}var M=Object.defineProperty;function q(s,o,l,u){M(s,o,m(l&&E(l,"get")&&typeof l.get=="function"?{get:l.get,set:l.set,configurable:!0}:{value:l,configurable:!0,writable:!0},u))}function te(s){return{from:function(o){return s.prototype=Object.create(o.prototype),q(s.prototype,"constructor",s),{extend:z.bind(null,s.prototype)}}}}var de=Object.getOwnPropertyDescriptor,ue=[].slice;function Pe(s,o,l){return ue.call(s,o,l)}function nt(s,o){return o(s)}function ae(s){if(!s)throw new Error("Assertion Failed")}function ge(s){a.setImmediate?setImmediate(s):setTimeout(s,0)}function Te(s,o){if(typeof o=="string"&&E(s,o))return s[o];if(!o)return s;if(typeof o!="string"){for(var l=[],u=0,d=o.length;u<d;++u){var h=Te(s,o[u]);l.push(h)}return l}var g=o.indexOf(".");if(g!==-1){var y=s[o.substr(0,g)];return y==null?void 0:Te(y,o.substr(g+1))}}function Ue(s,o,l){if(s&&o!==void 0&&!("isFrozen"in Object&&Object.isFrozen(s)))if(typeof o!="string"&&"length"in o){ae(typeof l!="string"&&"length"in l);for(var u=0,d=o.length;u<d;++u)Ue(s,o[u],l[u])}else{var h,g,y=o.indexOf(".");y!==-1?(h=o.substr(0,y),(g=o.substr(y+1))===""?l===void 0?f(s)&&!isNaN(parseInt(h))?s.splice(h,1):delete s[h]:s[h]=l:Ue(y=!(y=s[h])||!E(s,h)?s[h]={}:y,g,l)):l===void 0?f(s)&&!isNaN(parseInt(o))?s.splice(o,1):delete s[o]:s[o]=l}}function Ot(s){var o,l={};for(o in s)E(s,o)&&(l[o]=s[o]);return l}var tn=[].concat;function jn(s){return tn.apply([],s)}var Xt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(jn([8,16,32,64].map(function(s){return["Int","Uint","Float"].map(function(o){return o+s+"Array"})}))).filter(function(s){return a[s]}),p=new Set(Xt.map(function(s){return a[s]})),v=null;function O(s){return v=new WeakMap,s=(function o(l){if(!l||typeof l!="object")return l;var u=v.get(l);if(u)return u;if(f(l)){u=[],v.set(l,u);for(var d=0,h=l.length;d<h;++d)u.push(o(l[d]))}else if(p.has(l.constructor))u=l;else{var g,y=k(l);for(g in u=y===Object.prototype?{}:Object.create(y),v.set(l,u),l)E(l,g)&&(u[g]=o(l[g]))}return u})(s),v=null,s}var b={}.toString;function x(s){return b.call(s).slice(8,-1)}var se=typeof Symbol<"u"?Symbol.iterator:"@@iterator",ce=typeof se=="symbol"?function(s){var o;return s!=null&&(o=s[se])&&o.apply(s)}:function(){return null};function N(s,o){return o=s.indexOf(o),0<=o&&s.splice(o,1),0<=o}var K={};function We(s){var o,l,u,d;if(arguments.length===1){if(f(s))return s.slice();if(this===K&&typeof s=="string")return[s];if(d=ce(s)){for(l=[];!(u=d.next()).done;)l.push(u.value);return l}if(s==null)return[s];if(typeof(o=s.length)!="number")return[s];for(l=new Array(o);o--;)l[o]=s[o];return l}for(o=arguments.length,l=new Array(o);o--;)l[o]=arguments[o];return l}var rt=typeof Symbol<"u"?function(s){return s[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},xe=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Tt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(xe),Nt={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Le(s,o){this.name=s,this.message=o}function Fe(s,o){return s+". Errors: "+Object.keys(o).map(function(l){return o[l].toString()}).filter(function(l,u,d){return d.indexOf(l)===u}).join(`
`)}function we(s,o,l,u){this.failures=o,this.failedKeys=u,this.successCount=l,this.message=Fe(s,o)}function Ee(s,o){this.name="BulkError",this.failures=Object.keys(o).map(function(l){return o[l]}),this.failuresByPos=o,this.message=Fe(s,this.failures)}te(Le).from(Error).extend({toString:function(){return this.name+": "+this.message}}),te(we).from(Le),te(Ee).from(Le);var He=Tt.reduce(function(s,o){return s[o]=o+"Error",s},{}),Ce=Le,Q=Tt.reduce(function(s,o){var l=o+"Error";function u(d,h){this.name=l,d?typeof d=="string"?(this.message="".concat(d).concat(h?`
 `+h:""),this.inner=h||null):typeof d=="object"&&(this.message="".concat(d.name," ").concat(d.message),this.inner=d):(this.message=Nt[o]||l,this.inner=null)}return te(u).from(Ce),s[o]=u,s},{});Q.Syntax=SyntaxError,Q.Type=TypeError,Q.Range=RangeError;var Ke=xe.reduce(function(s,o){return s[o+"Error"]=Q[o],s},{}),Oe=Tt.reduce(function(s,o){return["Syntax","Type","Range"].indexOf(o)===-1&&(s[o+"Error"]=Q[o]),s},{});function le(){}function me(s){return s}function $t(s,o){return s==null||s===me?o:function(l){return o(s(l))}}function ie(s,o){return function(){s.apply(this,arguments),o.apply(this,arguments)}}function Ve(s,o){return s===le?o:function(){var l=s.apply(this,arguments);l!==void 0&&(arguments[0]=l);var u=this.onsuccess,d=this.onerror;this.onsuccess=null,this.onerror=null;var h=o.apply(this,arguments);return u&&(this.onsuccess=this.onsuccess?ie(u,this.onsuccess):u),d&&(this.onerror=this.onerror?ie(d,this.onerror):d),h!==void 0?h:l}}function nn(s,o){return s===le?o:function(){s.apply(this,arguments);var l=this.onsuccess,u=this.onerror;this.onsuccess=this.onerror=null,o.apply(this,arguments),l&&(this.onsuccess=this.onsuccess?ie(l,this.onsuccess):l),u&&(this.onerror=this.onerror?ie(u,this.onerror):u)}}function Rt(s,o){return s===le?o:function(l){var u=s.apply(this,arguments);m(l,u);var d=this.onsuccess,h=this.onerror;return this.onsuccess=null,this.onerror=null,l=o.apply(this,arguments),d&&(this.onsuccess=this.onsuccess?ie(d,this.onsuccess):d),h&&(this.onerror=this.onerror?ie(h,this.onerror):h),u===void 0?l===void 0?void 0:l:m(u,l)}}function Ge(s,o){return s===le?o:function(){return o.apply(this,arguments)!==!1&&s.apply(this,arguments)}}function Ct(s,o){return s===le?o:function(){var l=s.apply(this,arguments);if(l&&typeof l.then=="function"){for(var u=this,d=arguments.length,h=new Array(d);d--;)h[d]=arguments[d];return l.then(function(){return o.apply(u,h)})}return o.apply(this,arguments)}}Oe.ModifyError=we,Oe.DexieError=Le,Oe.BulkError=Ee;var Ae=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Be(s){Ae=s}var yt={},Xe=100,Xt=typeof Promise>"u"?[]:(function(){var s=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[s,k(s),s];var o=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[o,k(o),s]})(),xe=Xt[0],Tt=Xt[1],Xt=Xt[2],Tt=Tt&&Tt.then,ve=xe&&xe.constructor,kt=!!Xt,Me=function(s,o){Qe.push([s,o]),it&&(queueMicrotask(fe),it=!1)},ft=!0,it=!0,Je=[],ze=[],oe=me,Ye={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:le,pgp:!1,env:{},finalize:le},Y=Ye,Qe=[],at=0,vt=[];function G(s){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var o=this._PSD=Y;if(typeof s!="function"){if(s!==yt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&st(this,this._value))}this._state=null,this._value=null,++o.ref,(function l(u,d){try{d(function(h){if(u._state===null){if(h===u)throw new TypeError("A promise cannot be resolved with itself.");var g=u._lib&&De();h&&typeof h.then=="function"?l(u,function(y,$){h instanceof G?h._then(y,$):h.then(y,$)}):(u._state=!0,u._value=h,rn(u)),g&&Ne()}},st.bind(null,u))}catch(h){st(u,h)}})(this,s)}var qt={get:function(){var s=Y,o=dr;function l(u,d){var h=this,g=!s.global&&(s!==Y||o!==dr),y=g&&!on(),$=new G(function(S,T){ne(h,new Yt(os(u,s,g,y),os(d,s,g,y),S,T,s))});return this._consoleTask&&($._consoleTask=this._consoleTask),$}return l.prototype=yt,l},set:function(s){q(this,"then",s&&s.prototype===yt?qt:{get:function(){return s},set:qt.set})}};function Yt(s,o,l,u,d){this.onFulfilled=typeof s=="function"?s:null,this.onRejected=typeof o=="function"?o:null,this.resolve=l,this.reject=u,this.psd=d}function st(s,o){var l,u;ze.push(o),s._state===null&&(l=s._lib&&De(),o=oe(o),s._state=!1,s._value=o,u=s,Je.some(function(d){return d._value===u._value})||Je.push(u),rn(s),l&&Ne())}function rn(s){var o=s._listeners;s._listeners=[];for(var l=0,u=o.length;l<u;++l)ne(s,o[l]);var d=s._PSD;--d.ref||d.finalize(),at===0&&(++at,Me(function(){--at==0&&Se()},[]))}function ne(s,o){if(s._state!==null){var l=s._state?o.onFulfilled:o.onRejected;if(l===null)return(s._state?o.resolve:o.reject)(s._value);++o.psd.ref,++at,Me(ke,[l,s,o])}else s._listeners.push(o)}function ke(s,o,l){try{var u,d=o._value;!o._state&&ze.length&&(ze=[]),u=Ae&&o._consoleTask?o._consoleTask.run(function(){return s(d)}):s(d),o._state||ze.indexOf(d)!==-1||(function(h){for(var g=Je.length;g;)if(Je[--g]._value===h._value)return Je.splice(g,1)})(o),l.resolve(u)}catch(h){l.reject(h)}finally{--at==0&&Se(),--l.psd.ref||l.psd.finalize()}}function fe(){gn(Ye,function(){De()&&Ne()})}function De(){var s=ft;return it=ft=!1,s}function Ne(){var s,o,l;do for(;0<Qe.length;)for(s=Qe,Qe=[],l=s.length,o=0;o<l;++o){var u=s[o];u[0].apply(null,u[1])}while(0<Qe.length);it=ft=!0}function Se(){var s=Je;Je=[],s.forEach(function(u){u._PSD.onunhandled.call(null,u._value,u)});for(var o=vt.slice(0),l=o.length;l;)o[--l]()}function zt(s){return new G(yt,!1,s)}function Ie(s,o){var l=Y;return function(){var u=De(),d=Y;try{return an(l,!0),s.apply(this,arguments)}catch(h){o&&o(h)}finally{an(d,!1),u&&Ne()}}}z(G.prototype,{then:qt,_then:function(s,o){ne(this,new Yt(null,null,s,o,Y))},catch:function(s){if(arguments.length===1)return this.then(null,s);var o=s,l=arguments[1];return typeof o=="function"?this.then(null,function(u){return(u instanceof o?l:zt)(u)}):this.then(null,function(u){return(u&&u.name===o?l:zt)(u)})},finally:function(s){return this.then(function(o){return G.resolve(s()).then(function(){return o})},function(o){return G.resolve(s()).then(function(){return zt(o)})})},timeout:function(s,o){var l=this;return s<1/0?new G(function(u,d){var h=setTimeout(function(){return d(new Q.Timeout(o))},s);l.then(u,d).finally(clearTimeout.bind(null,h))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&q(G.prototype,Symbol.toStringTag,"Dexie.Promise"),Ye.env=ss(),z(G,{all:function(){var s=We.apply(null,arguments).map(fr);return new G(function(o,l){s.length===0&&o([]);var u=s.length;s.forEach(function(d,h){return G.resolve(d).then(function(g){s[h]=g,--u||o(s)},l)})})},resolve:function(s){return s instanceof G?s:s&&typeof s.then=="function"?new G(function(o,l){s.then(o,l)}):new G(yt,!0,s)},reject:zt,race:function(){var s=We.apply(null,arguments).map(fr);return new G(function(o,l){s.map(function(u){return G.resolve(u).then(o,l)})})},PSD:{get:function(){return Y},set:function(s){return Y=s}},totalEchoes:{get:function(){return dr}},newPSD:sn,usePSD:gn,scheduler:{get:function(){return Me},set:function(s){Me=s}},rejectionMapper:{get:function(){return oe},set:function(s){oe=s}},follow:function(s,o){return new G(function(l,u){return sn(function(d,h){var g=Y;g.unhandleds=[],g.onunhandled=h,g.finalize=ie(function(){var y,$=this;y=function(){$.unhandleds.length===0?d():h($.unhandleds[0])},vt.push(function S(){y(),vt.splice(vt.indexOf(S),1)}),++at,Me(function(){--at==0&&Se()},[])},g.finalize),s()},o,l,u)})}}),ve&&(ve.allSettled&&q(G,"allSettled",function(){var s=We.apply(null,arguments).map(fr);return new G(function(o){s.length===0&&o([]);var l=s.length,u=new Array(l);s.forEach(function(d,h){return G.resolve(d).then(function(g){return u[h]={status:"fulfilled",value:g}},function(g){return u[h]={status:"rejected",reason:g}}).then(function(){return--l||o(u)})})})}),ve.any&&typeof AggregateError<"u"&&q(G,"any",function(){var s=We.apply(null,arguments).map(fr);return new G(function(o,l){s.length===0&&l(new AggregateError([]));var u=s.length,d=new Array(u);s.forEach(function(h,g){return G.resolve(h).then(function(y){return o(y)},function(y){d[g]=y,--u||l(new AggregateError(d))})})})}),ve.withResolvers&&(G.withResolvers=ve.withResolvers));var lt={awaits:0,echoes:0,id:0},ya=0,cr=[],ur=0,dr=0,wa=0;function sn(s,o,l,u){var d=Y,h=Object.create(d);return h.parent=d,h.ref=0,h.global=!1,h.id=++wa,Ye.env,h.env=kt?{Promise:G,PromiseProp:{value:G,configurable:!0,writable:!0},all:G.all,race:G.race,allSettled:G.allSettled,any:G.any,resolve:G.resolve,reject:G.reject}:{},o&&m(h,o),++d.ref,h.finalize=function(){--this.parent.ref||this.parent.finalize()},u=gn(h,s,l,u),h.ref===0&&h.finalize(),u}function Fn(){return lt.id||(lt.id=++ya),++lt.awaits,lt.echoes+=Xe,lt.id}function on(){return!!lt.awaits&&(--lt.awaits==0&&(lt.id=0),lt.echoes=lt.awaits*Xe,!0)}function fr(s){return lt.echoes&&s&&s.constructor===ve?(Fn(),s.then(function(o){return on(),o},function(o){return on(),Ze(o)})):s}function va(){var s=cr[cr.length-1];cr.pop(),an(s,!1)}function an(s,o){var l,u=Y;(o?!lt.echoes||ur++&&s===Y:!ur||--ur&&s===Y)||queueMicrotask(o?function(d){++dr,lt.echoes&&--lt.echoes!=0||(lt.echoes=lt.awaits=lt.id=0),cr.push(Y),an(d,!0)}.bind(null,s):va),s!==Y&&(Y=s,u===Ye&&(Ye.env=ss()),kt&&(l=Ye.env.Promise,o=s.env,(u.global||s.global)&&(Object.defineProperty(a,"Promise",o.PromiseProp),l.all=o.all,l.race=o.race,l.resolve=o.resolve,l.reject=o.reject,o.allSettled&&(l.allSettled=o.allSettled),o.any&&(l.any=o.any))))}function ss(){var s=a.Promise;return kt?{Promise:s,PromiseProp:Object.getOwnPropertyDescriptor(a,"Promise"),all:s.all,race:s.race,allSettled:s.allSettled,any:s.any,resolve:s.resolve,reject:s.reject}:{}}function gn(s,o,l,u,d){var h=Y;try{return an(s,!0),o(l,u,d)}finally{an(h,!1)}}function os(s,o,l,u){return typeof s!="function"?s:function(){var d=Y;l&&Fn(),an(o,!0);try{return s.apply(this,arguments)}finally{an(d,!1),u&&queueMicrotask(on)}}}function ni(s){Promise===ve&&lt.echoes===0?ur===0?s():enqueueNativeMicroTask(s):setTimeout(s,0)}(""+Tt).indexOf("[native code]")===-1&&(Fn=on=le);var Ze=G.reject,bn="￿",Gt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",as="String expected.",On=[],hr="__dbnames",ri="readonly",ii="readwrite";function yn(s,o){return s?o?function(){return s.apply(this,arguments)&&o.apply(this,arguments)}:s:o}var ls={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function pr(s){return typeof s!="string"||/\./.test(s)?function(o){return o}:function(o){return o[s]===void 0&&s in o&&delete(o=O(o))[s],o}}function cs(){throw Q.Type()}function $e(s,o){try{var l=us(s),u=us(o);if(l!==u)return l==="Array"?1:u==="Array"?-1:l==="binary"?1:u==="binary"?-1:l==="string"?1:u==="string"?-1:l==="Date"?1:u!=="Date"?NaN:-1;switch(l){case"number":case"Date":case"string":return o<s?1:s<o?-1:0;case"binary":return(function(d,h){for(var g=d.length,y=h.length,$=g<y?g:y,S=0;S<$;++S)if(d[S]!==h[S])return d[S]<h[S]?-1:1;return g===y?0:g<y?-1:1})(ds(s),ds(o));case"Array":return(function(d,h){for(var g=d.length,y=h.length,$=g<y?g:y,S=0;S<$;++S){var T=$e(d[S],h[S]);if(T!==0)return T}return g===y?0:g<y?-1:1})(s,o)}}catch{}return NaN}function us(s){var o=typeof s;return o!="object"?o:ArrayBuffer.isView(s)?"binary":(s=x(s),s==="ArrayBuffer"?"binary":s)}function ds(s){return s instanceof Uint8Array?s:ArrayBuffer.isView(s)?new Uint8Array(s.buffer,s.byteOffset,s.byteLength):new Uint8Array(s)}var fs=(qe.prototype._trans=function(s,o,l){var u=this._tx||Y.trans,d=this.name,h=Ae&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(s==="readonly"?"read":"write"," ").concat(this.name));function g(S,T,w){if(!w.schema[d])throw new Q.NotFound("Table "+d+" not part of transaction");return o(w.idbtrans,w)}var y=De();try{var $=u&&u.db._novip===this.db._novip?u===Y.trans?u._promise(s,g,l):sn(function(){return u._promise(s,g,l)},{trans:u,transless:Y.transless||Y}):(function S(T,w,j,C){if(T.idbdb&&(T._state.openComplete||Y.letThrough||T._vip)){var P=T._createTransaction(w,j,T._dbSchema);try{P.create(),T._state.PR1398_maxLoop=3}catch(D){return D.name===He.InvalidState&&T.isOpen()&&0<--T._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),T.close({disableAutoOpen:!1}),T.open().then(function(){return S(T,w,j,C)})):Ze(D)}return P._promise(w,function(D,A){return sn(function(){return Y.trans=P,C(D,A,P)})}).then(function(D){if(w==="readwrite")try{P.idbtrans.commit()}catch{}return w==="readonly"?D:P._completion.then(function(){return D})})}if(T._state.openComplete)return Ze(new Q.DatabaseClosed(T._state.dbOpenError));if(!T._state.isBeingOpened){if(!T._state.autoOpen)return Ze(new Q.DatabaseClosed);T.open().catch(le)}return T._state.dbReadyPromise.then(function(){return S(T,w,j,C)})})(this.db,s,[this.name],g);return h&&($._consoleTask=h,$=$.catch(function(S){return console.trace(S),Ze(S)})),$}finally{y&&Ne()}},qe.prototype.get=function(s,o){var l=this;return s&&s.constructor===Object?this.where(s).first(o):s==null?Ze(new Q.Type("Invalid argument to Table.get()")):this._trans("readonly",function(u){return l.core.get({trans:u,key:s}).then(function(d){return l.hook.reading.fire(d)})}).then(o)},qe.prototype.where=function(s){if(typeof s=="string")return new this.db.WhereClause(this,s);if(f(s))return new this.db.WhereClause(this,"[".concat(s.join("+"),"]"));var o=c(s);if(o.length===1)return this.where(o[0]).equals(s[o[0]]);var l=this.schema.indexes.concat(this.schema.primKey).filter(function(y){if(y.compound&&o.every(function(S){return 0<=y.keyPath.indexOf(S)})){for(var $=0;$<o.length;++$)if(o.indexOf(y.keyPath[$])===-1)return!1;return!0}return!1}).sort(function(y,$){return y.keyPath.length-$.keyPath.length})[0];if(l&&this.db._maxKey!==bn){var h=l.keyPath.slice(0,o.length);return this.where(h).equals(h.map(function($){return s[$]}))}!l&&Ae&&console.warn("The query ".concat(JSON.stringify(s)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(o.join("+"),"]"));var u=this.schema.idxByName;function d(y,$){return $e(y,$)===0}var g=o.reduce(function(w,$){var S=w[0],T=w[1],w=u[$],j=s[$];return[S||w,S||!w?yn(T,w&&w.multi?function(C){return C=Te(C,$),f(C)&&C.some(function(P){return d(j,P)})}:function(C){return d(j,Te(C,$))}):T]},[null,null]),h=g[0],g=g[1];return h?this.where(h.name).equals(s[h.keyPath]).filter(g):l?this.filter(g):this.where(o).equals("")},qe.prototype.filter=function(s){return this.toCollection().and(s)},qe.prototype.count=function(s){return this.toCollection().count(s)},qe.prototype.offset=function(s){return this.toCollection().offset(s)},qe.prototype.limit=function(s){return this.toCollection().limit(s)},qe.prototype.each=function(s){return this.toCollection().each(s)},qe.prototype.toArray=function(s){return this.toCollection().toArray(s)},qe.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},qe.prototype.orderBy=function(s){return new this.db.Collection(new this.db.WhereClause(this,f(s)?"[".concat(s.join("+"),"]"):s))},qe.prototype.reverse=function(){return this.toCollection().reverse()},qe.prototype.mapToClass=function(s){var o,l=this.db,u=this.name;function d(){return o!==null&&o.apply(this,arguments)||this}(this.schema.mappedClass=s).prototype instanceof cs&&((function($,S){if(typeof S!="function"&&S!==null)throw new TypeError("Class extends value "+String(S)+" is not a constructor or null");function T(){this.constructor=$}r($,S),$.prototype=S===null?Object.create(S):(T.prototype=S.prototype,new T)})(d,o=s),Object.defineProperty(d.prototype,"db",{get:function(){return l},enumerable:!1,configurable:!0}),d.prototype.table=function(){return u},s=d);for(var h=new Set,g=s.prototype;g;g=k(g))Object.getOwnPropertyNames(g).forEach(function($){return h.add($)});function y($){if(!$)return $;var S,T=Object.create(s.prototype);for(S in $)if(!h.has(S))try{T[S]=$[S]}catch{}return T}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=y,this.hook("reading",y),s},qe.prototype.defineClass=function(){return this.mapToClass(function(s){m(this,s)})},qe.prototype.add=function(s,o){var l=this,u=this.schema.primKey,d=u.auto,h=u.keyPath,g=s;return h&&d&&(g=pr(h)(s)),this._trans("readwrite",function(y){return l.core.mutate({trans:y,type:"add",keys:o!=null?[o]:null,values:[g]})}).then(function(y){return y.numFailures?G.reject(y.failures[0]):y.lastResult}).then(function(y){if(h)try{Ue(s,h,y)}catch{}return y})},qe.prototype.update=function(s,o){return typeof s!="object"||f(s)?this.where(":id").equals(s).modify(o):(s=Te(s,this.schema.primKey.keyPath),s===void 0?Ze(new Q.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(s).modify(o))},qe.prototype.put=function(s,o){var l=this,u=this.schema.primKey,d=u.auto,h=u.keyPath,g=s;return h&&d&&(g=pr(h)(s)),this._trans("readwrite",function(y){return l.core.mutate({trans:y,type:"put",values:[g],keys:o!=null?[o]:null})}).then(function(y){return y.numFailures?G.reject(y.failures[0]):y.lastResult}).then(function(y){if(h)try{Ue(s,h,y)}catch{}return y})},qe.prototype.delete=function(s){var o=this;return this._trans("readwrite",function(l){return o.core.mutate({trans:l,type:"delete",keys:[s]})}).then(function(l){return l.numFailures?G.reject(l.failures[0]):void 0})},qe.prototype.clear=function(){var s=this;return this._trans("readwrite",function(o){return s.core.mutate({trans:o,type:"deleteRange",range:ls})}).then(function(o){return o.numFailures?G.reject(o.failures[0]):void 0})},qe.prototype.bulkGet=function(s){var o=this;return this._trans("readonly",function(l){return o.core.getMany({keys:s,trans:l}).then(function(u){return u.map(function(d){return o.hook.reading.fire(d)})})})},qe.prototype.bulkAdd=function(s,o,l){var u=this,d=Array.isArray(o)?o:void 0,h=(l=l||(d?void 0:o))?l.allKeys:void 0;return this._trans("readwrite",function(g){var S=u.schema.primKey,y=S.auto,S=S.keyPath;if(S&&d)throw new Q.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(d&&d.length!==s.length)throw new Q.InvalidArgument("Arguments objects and keys must have the same length");var $=s.length,S=S&&y?s.map(pr(S)):s;return u.core.mutate({trans:g,type:"add",keys:d,values:S,wantResults:h}).then(function(P){var w=P.numFailures,j=P.results,C=P.lastResult,P=P.failures;if(w===0)return h?j:C;throw new Ee("".concat(u.name,".bulkAdd(): ").concat(w," of ").concat($," operations failed"),P)})})},qe.prototype.bulkPut=function(s,o,l){var u=this,d=Array.isArray(o)?o:void 0,h=(l=l||(d?void 0:o))?l.allKeys:void 0;return this._trans("readwrite",function(g){var S=u.schema.primKey,y=S.auto,S=S.keyPath;if(S&&d)throw new Q.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(d&&d.length!==s.length)throw new Q.InvalidArgument("Arguments objects and keys must have the same length");var $=s.length,S=S&&y?s.map(pr(S)):s;return u.core.mutate({trans:g,type:"put",keys:d,values:S,wantResults:h}).then(function(P){var w=P.numFailures,j=P.results,C=P.lastResult,P=P.failures;if(w===0)return h?j:C;throw new Ee("".concat(u.name,".bulkPut(): ").concat(w," of ").concat($," operations failed"),P)})})},qe.prototype.bulkUpdate=function(s){var o=this,l=this.core,u=s.map(function(g){return g.key}),d=s.map(function(g){return g.changes}),h=[];return this._trans("readwrite",function(g){return l.getMany({trans:g,keys:u,cache:"clone"}).then(function(y){var $=[],S=[];s.forEach(function(w,j){var C=w.key,P=w.changes,D=y[j];if(D){for(var A=0,R=Object.keys(P);A<R.length;A++){var I=R[A],L=P[I];if(I===o.schema.primKey.keyPath){if($e(L,C)!==0)throw new Q.Constraint("Cannot update primary key in bulkUpdate()")}else Ue(D,I,L)}h.push(j),$.push(C),S.push(D)}});var T=$.length;return l.mutate({trans:g,type:"put",keys:$,values:S,updates:{keys:u,changeSpecs:d}}).then(function(w){var j=w.numFailures,C=w.failures;if(j===0)return T;for(var P=0,D=Object.keys(C);P<D.length;P++){var A,R=D[P],I=h[Number(R)];I!=null&&(A=C[R],delete C[R],C[I]=A)}throw new Ee("".concat(o.name,".bulkUpdate(): ").concat(j," of ").concat(T," operations failed"),C)})})})},qe.prototype.bulkDelete=function(s){var o=this,l=s.length;return this._trans("readwrite",function(u){return o.core.mutate({trans:u,type:"delete",keys:s})}).then(function(g){var d=g.numFailures,h=g.lastResult,g=g.failures;if(d===0)return h;throw new Ee("".concat(o.name,".bulkDelete(): ").concat(d," of ").concat(l," operations failed"),g)})},qe);function qe(){}function Wn(s){function o(g,y){if(y){for(var $=arguments.length,S=new Array($-1);--$;)S[$-1]=arguments[$];return l[g].subscribe.apply(null,S),s}if(typeof g=="string")return l[g]}var l={};o.addEventType=h;for(var u=1,d=arguments.length;u<d;++u)h(arguments[u]);return o;function h(g,y,$){if(typeof g!="object"){var S;y=y||Ge;var T={subscribers:[],fire:$=$||le,subscribe:function(w){T.subscribers.indexOf(w)===-1&&(T.subscribers.push(w),T.fire=y(T.fire,w))},unsubscribe:function(w){T.subscribers=T.subscribers.filter(function(j){return j!==w}),T.fire=T.subscribers.reduce(y,$)}};return l[g]=o[g]=T}c(S=g).forEach(function(w){var j=S[w];if(f(j))h(w,S[w][0],S[w][1]);else{if(j!=="asap")throw new Q.InvalidArgument("Invalid event config");var C=h(w,me,function(){for(var P=arguments.length,D=new Array(P);P--;)D[P]=arguments[P];C.subscribers.forEach(function(A){ge(function(){A.apply(null,D)})})})}})}}function Hn(s,o){return te(o).from({prototype:s}),o}function Rn(s,o){return!(s.filter||s.algorithm||s.or)&&(o?s.justLimit:!s.replayFilter)}function si(s,o){s.filter=yn(s.filter,o)}function oi(s,o,l){var u=s.replayFilter;s.replayFilter=u?function(){return yn(u(),o())}:o,s.justLimit=l&&!u}function mr(s,o){if(s.isPrimKey)return o.primaryKey;var l=o.getIndexByKeyPath(s.index);if(!l)throw new Q.Schema("KeyPath "+s.index+" on object store "+o.name+" is not indexed");return l}function hs(s,o,l){var u=mr(s,o.schema);return o.openCursor({trans:l,values:!s.keysOnly,reverse:s.dir==="prev",unique:!!s.unique,query:{index:u,range:s.range}})}function gr(s,o,l,u){var d=s.replayFilter?yn(s.filter,s.replayFilter()):s.filter;if(s.or){var h={},g=function(y,$,S){var T,w;d&&!d($,S,function(j){return $.stop(j)},function(j){return $.fail(j)})||((w=""+(T=$.primaryKey))=="[object ArrayBuffer]"&&(w=""+new Uint8Array(T)),E(h,w)||(h[w]=!0,o(y,$,S)))};return Promise.all([s.or._iterate(g,l),ps(hs(s,u,l),s.algorithm,g,!s.keysOnly&&s.valueMapper)])}return ps(hs(s,u,l),yn(s.algorithm,d),o,!s.keysOnly&&s.valueMapper)}function ps(s,o,l,u){var d=Ie(u?function(h,g,y){return l(u(h),g,y)}:l);return s.then(function(h){if(h)return h.start(function(){var g=function(){return h.continue()};o&&!o(h,function(y){return g=y},function(y){h.stop(y),g=le},function(y){h.fail(y),g=le})||d(h.value,h,function(y){return g=y}),g()})})}var Xt=Symbol(),Kn=(ms.prototype.execute=function(s){if(this.add!==void 0){var o=this.add;if(f(o))return n(n([],f(s)?s:[],!0),o).sort();if(typeof o=="number")return(Number(s)||0)+o;if(typeof o=="bigint")try{return BigInt(s)+o}catch{return BigInt(0)+o}throw new TypeError("Invalid term ".concat(o))}if(this.remove!==void 0){var l=this.remove;if(f(l))return f(s)?s.filter(function(u){return!l.includes(u)}).sort():[];if(typeof l=="number")return Number(s)-l;if(typeof l=="bigint")try{return BigInt(s)-l}catch{return BigInt(0)-l}throw new TypeError("Invalid subtrahend ".concat(l))}return o=(o=this.replacePrefix)===null||o===void 0?void 0:o[0],o&&typeof s=="string"&&s.startsWith(o)?this.replacePrefix[1]+s.substring(o.length):s},ms);function ms(s){Object.assign(this,s)}var xa=(_e.prototype._read=function(s,o){var l=this._ctx;return l.error?l.table._trans(null,Ze.bind(null,l.error)):l.table._trans("readonly",s).then(o)},_e.prototype._write=function(s){var o=this._ctx;return o.error?o.table._trans(null,Ze.bind(null,o.error)):o.table._trans("readwrite",s,"locked")},_e.prototype._addAlgorithm=function(s){var o=this._ctx;o.algorithm=yn(o.algorithm,s)},_e.prototype._iterate=function(s,o){return gr(this._ctx,s,o,this._ctx.table.core)},_e.prototype.clone=function(s){var o=Object.create(this.constructor.prototype),l=Object.create(this._ctx);return s&&m(l,s),o._ctx=l,o},_e.prototype.raw=function(){return this._ctx.valueMapper=null,this},_e.prototype.each=function(s){var o=this._ctx;return this._read(function(l){return gr(o,s,l,o.table.core)})},_e.prototype.count=function(s){var o=this;return this._read(function(l){var u=o._ctx,d=u.table.core;if(Rn(u,!0))return d.count({trans:l,query:{index:mr(u,d.schema),range:u.range}}).then(function(g){return Math.min(g,u.limit)});var h=0;return gr(u,function(){return++h,!1},l,d).then(function(){return h})}).then(s)},_e.prototype.sortBy=function(s,o){var l=s.split(".").reverse(),u=l[0],d=l.length-1;function h($,S){return S?h($[l[S]],S-1):$[u]}var g=this._ctx.dir==="next"?1:-1;function y($,S){return $e(h($,d),h(S,d))*g}return this.toArray(function($){return $.sort(y)}).then(o)},_e.prototype.toArray=function(s){var o=this;return this._read(function(l){var u=o._ctx;if(u.dir==="next"&&Rn(u,!0)&&0<u.limit){var d=u.valueMapper,h=mr(u,u.table.core.schema);return u.table.core.query({trans:l,limit:u.limit,values:!0,query:{index:h,range:u.range}}).then(function(y){return y=y.result,d?y.map(d):y})}var g=[];return gr(u,function(y){return g.push(y)},l,u.table.core).then(function(){return g})},s)},_e.prototype.offset=function(s){var o=this._ctx;return s<=0||(o.offset+=s,Rn(o)?oi(o,function(){var l=s;return function(u,d){return l===0||(l===1?--l:d(function(){u.advance(l),l=0}),!1)}}):oi(o,function(){var l=s;return function(){return--l<0}})),this},_e.prototype.limit=function(s){return this._ctx.limit=Math.min(this._ctx.limit,s),oi(this._ctx,function(){var o=s;return function(l,u,d){return--o<=0&&u(d),0<=o}},!0),this},_e.prototype.until=function(s,o){return si(this._ctx,function(l,u,d){return!s(l.value)||(u(d),o)}),this},_e.prototype.first=function(s){return this.limit(1).toArray(function(o){return o[0]}).then(s)},_e.prototype.last=function(s){return this.reverse().first(s)},_e.prototype.filter=function(s){var o;return si(this._ctx,function(l){return s(l.value)}),(o=this._ctx).isMatch=yn(o.isMatch,s),this},_e.prototype.and=function(s){return this.filter(s)},_e.prototype.or=function(s){return new this.db.WhereClause(this._ctx.table,s,this)},_e.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},_e.prototype.desc=function(){return this.reverse()},_e.prototype.eachKey=function(s){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(l,u){s(u.key,u)})},_e.prototype.eachUniqueKey=function(s){return this._ctx.unique="unique",this.eachKey(s)},_e.prototype.eachPrimaryKey=function(s){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(l,u){s(u.primaryKey,u)})},_e.prototype.keys=function(s){var o=this._ctx;o.keysOnly=!o.isMatch;var l=[];return this.each(function(u,d){l.push(d.key)}).then(function(){return l}).then(s)},_e.prototype.primaryKeys=function(s){var o=this._ctx;if(o.dir==="next"&&Rn(o,!0)&&0<o.limit)return this._read(function(u){var d=mr(o,o.table.core.schema);return o.table.core.query({trans:u,values:!1,limit:o.limit,query:{index:d,range:o.range}})}).then(function(u){return u.result}).then(s);o.keysOnly=!o.isMatch;var l=[];return this.each(function(u,d){l.push(d.primaryKey)}).then(function(){return l}).then(s)},_e.prototype.uniqueKeys=function(s){return this._ctx.unique="unique",this.keys(s)},_e.prototype.firstKey=function(s){return this.limit(1).keys(function(o){return o[0]}).then(s)},_e.prototype.lastKey=function(s){return this.reverse().firstKey(s)},_e.prototype.distinct=function(){var s=this._ctx,s=s.index&&s.table.schema.idxByName[s.index];if(!s||!s.multi)return this;var o={};return si(this._ctx,function(d){var u=d.primaryKey.toString(),d=E(o,u);return o[u]=!0,!d}),this},_e.prototype.modify=function(s){var o=this,l=this._ctx;return this._write(function(u){var d,h,g;g=typeof s=="function"?s:(d=c(s),h=d.length,function(A){for(var R=!1,I=0;I<h;++I){var L=d[I],B=s[L],U=Te(A,L);B instanceof Kn?(Ue(A,L,B.execute(U)),R=!0):U!==B&&(Ue(A,L,B),R=!0)}return R});var y=l.table.core,w=y.schema.primaryKey,$=w.outbound,S=w.extractKey,T=200,w=o.db._options.modifyChunkSize;w&&(T=typeof w=="object"?w[y.name]||w["*"]||200:w);function j(A,L){var I=L.failures,L=L.numFailures;P+=A-L;for(var B=0,U=c(I);B<U.length;B++){var J=U[B];C.push(I[J])}}var C=[],P=0,D=[];return o.clone().primaryKeys().then(function(A){function R(L){var B=Math.min(T,A.length-L);return y.getMany({trans:u,keys:A.slice(L,L+B),cache:"immutable"}).then(function(U){for(var J=[],W=[],V=$?[]:null,Z=[],X=0;X<B;++X){var re=U[X],pe={value:O(re),primKey:A[L+X]};g.call(pe,pe.value,pe)!==!1&&(pe.value==null?Z.push(A[L+X]):$||$e(S(re),S(pe.value))===0?(W.push(pe.value),$&&V.push(A[L+X])):(Z.push(A[L+X]),J.push(pe.value)))}return Promise.resolve(0<J.length&&y.mutate({trans:u,type:"add",values:J}).then(function(be){for(var ye in be.failures)Z.splice(parseInt(ye),1);j(J.length,be)})).then(function(){return(0<W.length||I&&typeof s=="object")&&y.mutate({trans:u,type:"put",keys:V,values:W,criteria:I,changeSpec:typeof s!="function"&&s,isAdditionalChunk:0<L}).then(function(be){return j(W.length,be)})}).then(function(){return(0<Z.length||I&&s===ai)&&y.mutate({trans:u,type:"delete",keys:Z,criteria:I,isAdditionalChunk:0<L}).then(function(be){return j(Z.length,be)})}).then(function(){return A.length>L+B&&R(L+T)})})}var I=Rn(l)&&l.limit===1/0&&(typeof s!="function"||s===ai)&&{index:l.index,range:l.range};return R(0).then(function(){if(0<C.length)throw new we("Error modifying one or more objects",C,P,D);return A.length})})})},_e.prototype.delete=function(){var s=this._ctx,o=s.range;return Rn(s)&&(s.isPrimKey||o.type===3)?this._write(function(l){var u=s.table.core.schema.primaryKey,d=o;return s.table.core.count({trans:l,query:{index:u,range:d}}).then(function(h){return s.table.core.mutate({trans:l,type:"deleteRange",range:d}).then(function(g){var y=g.failures;if(g.lastResult,g.results,g=g.numFailures,g)throw new we("Could not delete some values",Object.keys(y).map(function($){return y[$]}),h-g);return h-g})})}):this.modify(ai)},_e);function _e(){}var ai=function(s,o){return o.value=null};function $a(s,o){return s<o?-1:s===o?0:1}function Ca(s,o){return o<s?-1:s===o?0:1}function Et(s,o,l){return s=s instanceof bs?new s.Collection(s):s,s._ctx.error=new(l||TypeError)(o),s}function zn(s){return new s.Collection(s,function(){return gs("")}).limit(0)}function br(s,o,l,u){var d,h,g,y,$,S,T,w=l.length;if(!l.every(function(P){return typeof P=="string"}))return Et(s,as);function j(P){d=P==="next"?function(A){return A.toUpperCase()}:function(A){return A.toLowerCase()},h=P==="next"?function(A){return A.toLowerCase()}:function(A){return A.toUpperCase()},g=P==="next"?$a:Ca;var D=l.map(function(A){return{lower:h(A),upper:d(A)}}).sort(function(A,R){return g(A.lower,R.lower)});y=D.map(function(A){return A.upper}),$=D.map(function(A){return A.lower}),T=(S=P)==="next"?"":u}j("next"),s=new s.Collection(s,function(){return ln(y[0],$[w-1]+u)}),s._ondirectionchange=function(P){j(P)};var C=0;return s._addAlgorithm(function(P,D,A){var R=P.key;if(typeof R!="string")return!1;var I=h(R);if(o(I,$,C))return!0;for(var L=null,B=C;B<w;++B){var U=(function(J,W,V,Z,X,re){for(var pe=Math.min(J.length,Z.length),be=-1,ye=0;ye<pe;++ye){var St=W[ye];if(St!==Z[ye])return X(J[ye],V[ye])<0?J.substr(0,ye)+V[ye]+V.substr(ye+1):X(J[ye],Z[ye])<0?J.substr(0,ye)+Z[ye]+V.substr(ye+1):0<=be?J.substr(0,be)+W[be]+V.substr(be+1):null;X(J[ye],St)<0&&(be=ye)}return pe<Z.length&&re==="next"?J+V.substr(J.length):pe<J.length&&re==="prev"?J.substr(0,V.length):be<0?null:J.substr(0,be)+Z[be]+V.substr(be+1)})(R,I,y[B],$[B],g,S);U===null&&L===null?C=B+1:(L===null||0<g(L,U))&&(L=U)}return D(L!==null?function(){P.continue(L+T)}:A),!1}),s}function ln(s,o,l,u){return{type:2,lower:s,upper:o,lowerOpen:l,upperOpen:u}}function gs(s){return{type:1,lower:s,upper:s}}var bs=(Object.defineProperty(ct.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),ct.prototype.between=function(s,o,l,u){l=l!==!1,u=u===!0;try{return 0<this._cmp(s,o)||this._cmp(s,o)===0&&(l||u)&&(!l||!u)?zn(this):new this.Collection(this,function(){return ln(s,o,!l,!u)})}catch{return Et(this,Gt)}},ct.prototype.equals=function(s){return s==null?Et(this,Gt):new this.Collection(this,function(){return gs(s)})},ct.prototype.above=function(s){return s==null?Et(this,Gt):new this.Collection(this,function(){return ln(s,void 0,!0)})},ct.prototype.aboveOrEqual=function(s){return s==null?Et(this,Gt):new this.Collection(this,function(){return ln(s,void 0,!1)})},ct.prototype.below=function(s){return s==null?Et(this,Gt):new this.Collection(this,function(){return ln(void 0,s,!1,!0)})},ct.prototype.belowOrEqual=function(s){return s==null?Et(this,Gt):new this.Collection(this,function(){return ln(void 0,s)})},ct.prototype.startsWith=function(s){return typeof s!="string"?Et(this,as):this.between(s,s+bn,!0,!0)},ct.prototype.startsWithIgnoreCase=function(s){return s===""?this.startsWith(s):br(this,function(o,l){return o.indexOf(l[0])===0},[s],bn)},ct.prototype.equalsIgnoreCase=function(s){return br(this,function(o,l){return o===l[0]},[s],"")},ct.prototype.anyOfIgnoreCase=function(){var s=We.apply(K,arguments);return s.length===0?zn(this):br(this,function(o,l){return l.indexOf(o)!==-1},s,"")},ct.prototype.startsWithAnyOfIgnoreCase=function(){var s=We.apply(K,arguments);return s.length===0?zn(this):br(this,function(o,l){return l.some(function(u){return o.indexOf(u)===0})},s,bn)},ct.prototype.anyOf=function(){var s=this,o=We.apply(K,arguments),l=this._cmp;try{o.sort(l)}catch{return Et(this,Gt)}if(o.length===0)return zn(this);var u=new this.Collection(this,function(){return ln(o[0],o[o.length-1])});u._ondirectionchange=function(h){l=h==="next"?s._ascending:s._descending,o.sort(l)};var d=0;return u._addAlgorithm(function(h,g,y){for(var $=h.key;0<l($,o[d]);)if(++d===o.length)return g(y),!1;return l($,o[d])===0||(g(function(){h.continue(o[d])}),!1)}),u},ct.prototype.notEqual=function(s){return this.inAnyRange([[-1/0,s],[s,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},ct.prototype.noneOf=function(){var s=We.apply(K,arguments);if(s.length===0)return new this.Collection(this);try{s.sort(this._ascending)}catch{return Et(this,Gt)}var o=s.reduce(function(l,u){return l?l.concat([[l[l.length-1][1],u]]):[[-1/0,u]]},null);return o.push([s[s.length-1],this.db._maxKey]),this.inAnyRange(o,{includeLowers:!1,includeUppers:!1})},ct.prototype.inAnyRange=function(R,o){var l=this,u=this._cmp,d=this._ascending,h=this._descending,g=this._min,y=this._max;if(R.length===0)return zn(this);if(!R.every(function(I){return I[0]!==void 0&&I[1]!==void 0&&d(I[0],I[1])<=0}))return Et(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",Q.InvalidArgument);var $=!o||o.includeLowers!==!1,S=o&&o.includeUppers===!0,T,w=d;function j(I,L){return w(I[0],L[0])}try{(T=R.reduce(function(I,L){for(var B=0,U=I.length;B<U;++B){var J=I[B];if(u(L[0],J[1])<0&&0<u(L[1],J[0])){J[0]=g(J[0],L[0]),J[1]=y(J[1],L[1]);break}}return B===U&&I.push(L),I},[])).sort(j)}catch{return Et(this,Gt)}var C=0,P=S?function(I){return 0<d(I,T[C][1])}:function(I){return 0<=d(I,T[C][1])},D=$?function(I){return 0<h(I,T[C][0])}:function(I){return 0<=h(I,T[C][0])},A=P,R=new this.Collection(this,function(){return ln(T[0][0],T[T.length-1][1],!$,!S)});return R._ondirectionchange=function(I){w=I==="next"?(A=P,d):(A=D,h),T.sort(j)},R._addAlgorithm(function(I,L,B){for(var U,J=I.key;A(J);)if(++C===T.length)return L(B),!1;return!P(U=J)&&!D(U)||(l._cmp(J,T[C][1])===0||l._cmp(J,T[C][0])===0||L(function(){w===d?I.continue(T[C][0]):I.continue(T[C][1])}),!1)}),R},ct.prototype.startsWithAnyOf=function(){var s=We.apply(K,arguments);return s.every(function(o){return typeof o=="string"})?s.length===0?zn(this):this.inAnyRange(s.map(function(o){return[o,o+bn]})):Et(this,"startsWithAnyOf() only works with strings")},ct);function ct(){}function Ut(s){return Ie(function(o){return Vn(o),s(o.target.error),!1})}function Vn(s){s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault()}var Yn="storagemutated",li="x-storagemutated-1",cn=Wn(null,Yn),ka=(Wt.prototype._lock=function(){return ae(!Y.global),++this._reculock,this._reculock!==1||Y.global||(Y.lockOwnerFor=this),this},Wt.prototype._unlock=function(){if(ae(!Y.global),--this._reculock==0)for(Y.global||(Y.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var s=this._blockedFuncs.shift();try{gn(s[1],s[0])}catch{}}return this},Wt.prototype._locked=function(){return this._reculock&&Y.lockOwnerFor!==this},Wt.prototype.create=function(s){var o=this;if(!this.mode)return this;var l=this.db.idbdb,u=this.db._state.dbOpenError;if(ae(!this.idbtrans),!s&&!l)switch(u&&u.name){case"DatabaseClosedError":throw new Q.DatabaseClosed(u);case"MissingAPIError":throw new Q.MissingAPI(u.message,u);default:throw new Q.OpenFailed(u)}if(!this.active)throw new Q.TransactionInactive;return ae(this._completion._state===null),(s=this.idbtrans=s||(this.db.core||l).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Ie(function(d){Vn(d),o._reject(s.error)}),s.onabort=Ie(function(d){Vn(d),o.active&&o._reject(new Q.Abort(s.error)),o.active=!1,o.on("abort").fire(d)}),s.oncomplete=Ie(function(){o.active=!1,o._resolve(),"mutatedParts"in s&&cn.storagemutated.fire(s.mutatedParts)}),this},Wt.prototype._promise=function(s,o,l){var u=this;if(s==="readwrite"&&this.mode!=="readwrite")return Ze(new Q.ReadOnly("Transaction is readonly"));if(!this.active)return Ze(new Q.TransactionInactive);if(this._locked())return new G(function(h,g){u._blockedFuncs.push([function(){u._promise(s,o,l).then(h,g)},Y])});if(l)return sn(function(){var h=new G(function(g,y){u._lock();var $=o(g,y,u);$&&$.then&&$.then(g,y)});return h.finally(function(){return u._unlock()}),h._lib=!0,h});var d=new G(function(h,g){var y=o(h,g,u);y&&y.then&&y.then(h,g)});return d._lib=!0,d},Wt.prototype._root=function(){return this.parent?this.parent._root():this},Wt.prototype.waitFor=function(s){var o,l=this._root(),u=G.resolve(s);l._waitingFor?l._waitingFor=l._waitingFor.then(function(){return u}):(l._waitingFor=u,l._waitingQueue=[],o=l.idbtrans.objectStore(l.storeNames[0]),(function h(){for(++l._spinCount;l._waitingQueue.length;)l._waitingQueue.shift()();l._waitingFor&&(o.get(-1/0).onsuccess=h)})());var d=l._waitingFor;return new G(function(h,g){u.then(function(y){return l._waitingQueue.push(Ie(h.bind(null,y)))},function(y){return l._waitingQueue.push(Ie(g.bind(null,y)))}).finally(function(){l._waitingFor===d&&(l._waitingFor=null)})})},Wt.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new Q.Abort))},Wt.prototype.table=function(s){var o=this._memoizedTables||(this._memoizedTables={});if(E(o,s))return o[s];var l=this.schema[s];if(!l)throw new Q.NotFound("Table "+s+" not part of transaction");return l=new this.db.Table(s,l,this),l.core=this.db.core.table(s),o[s]=l},Wt);function Wt(){}function ci(s,o,l,u,d,h,g){return{name:s,keyPath:o,unique:l,multi:u,auto:d,compound:h,src:(l&&!g?"&":"")+(u?"*":"")+(d?"++":"")+ys(o)}}function ys(s){return typeof s=="string"?s:s?"["+[].join.call(s,"+")+"]":""}function ui(s,o,l){return{name:s,primKey:o,indexes:l,mappedClass:null,idxByName:(u=function(d){return[d.name,d]},l.reduce(function(d,h,g){return g=u(h,g),g&&(d[g[0]]=g[1]),d},{}))};var u}var Gn=function(s){try{return s.only([[]]),Gn=function(){return[[]]},[[]]}catch{return Gn=function(){return bn},bn}};function di(s){return s==null?function(){}:typeof s=="string"?(o=s).split(".").length===1?function(l){return l[o]}:function(l){return Te(l,o)}:function(l){return Te(l,s)};var o}function ws(s){return[].slice.call(s)}var Ea=0;function Xn(s){return s==null?":id":typeof s=="string"?s:"[".concat(s.join("+"),"]")}function Sa(s,o,$){function u(A){if(A.type===3)return null;if(A.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var C=A.lower,P=A.upper,D=A.lowerOpen,A=A.upperOpen;return C===void 0?P===void 0?null:o.upperBound(P,!!A):P===void 0?o.lowerBound(C,!!D):o.bound(C,P,!!D,!!A)}function d(j){var C,P=j.name;return{name:P,schema:j,mutate:function(D){var A=D.trans,R=D.type,I=D.keys,L=D.values,B=D.range;return new Promise(function(U,J){U=Ie(U);var W=A.objectStore(P),V=W.keyPath==null,Z=R==="put"||R==="add";if(!Z&&R!=="delete"&&R!=="deleteRange")throw new Error("Invalid operation type: "+R);var X,re=(I||L||{length:1}).length;if(I&&L&&I.length!==L.length)throw new Error("Given keys array must have same length as given values array.");if(re===0)return U({numFailures:0,failures:{},results:[],lastResult:void 0});function pe(wt){++St,Vn(wt)}var be=[],ye=[],St=0;if(R==="deleteRange"){if(B.type===4)return U({numFailures:St,failures:ye,results:[],lastResult:void 0});B.type===3?be.push(X=W.clear()):be.push(X=W.delete(u(B)))}else{var V=Z?V?[L,I]:[L,null]:[I,null],he=V[0],pt=V[1];if(Z)for(var mt=0;mt<re;++mt)be.push(X=pt&&pt[mt]!==void 0?W[R](he[mt],pt[mt]):W[R](he[mt])),X.onerror=pe;else for(mt=0;mt<re;++mt)be.push(X=W[R](he[mt])),X.onerror=pe}function Tr(wt){wt=wt.target.result,be.forEach(function(xn,Pi){return xn.error!=null&&(ye[Pi]=xn.error)}),U({numFailures:St,failures:ye,results:R==="delete"?I:be.map(function(xn){return xn.result}),lastResult:wt})}X.onerror=function(wt){pe(wt),Tr(wt)},X.onsuccess=Tr})},getMany:function(D){var A=D.trans,R=D.keys;return new Promise(function(I,L){I=Ie(I);for(var B,U=A.objectStore(P),J=R.length,W=new Array(J),V=0,Z=0,X=function(be){be=be.target,W[be._pos]=be.result,++Z===V&&I(W)},re=Ut(L),pe=0;pe<J;++pe)R[pe]!=null&&((B=U.get(R[pe]))._pos=pe,B.onsuccess=X,B.onerror=re,++V);V===0&&I(W)})},get:function(D){var A=D.trans,R=D.key;return new Promise(function(I,L){I=Ie(I);var B=A.objectStore(P).get(R);B.onsuccess=function(U){return I(U.target.result)},B.onerror=Ut(L)})},query:(C=S,function(D){return new Promise(function(A,R){A=Ie(A);var I,L,B,V=D.trans,U=D.values,J=D.limit,X=D.query,W=J===1/0?void 0:J,Z=X.index,X=X.range,V=V.objectStore(P),Z=Z.isPrimaryKey?V:V.index(Z.name),X=u(X);if(J===0)return A({result:[]});C?((W=U?Z.getAll(X,W):Z.getAllKeys(X,W)).onsuccess=function(re){return A({result:re.target.result})},W.onerror=Ut(R)):(I=0,L=!U&&"openKeyCursor"in Z?Z.openKeyCursor(X):Z.openCursor(X),B=[],L.onsuccess=function(re){var pe=L.result;return pe?(B.push(U?pe.value:pe.primaryKey),++I===J?A({result:B}):void pe.continue()):A({result:B})},L.onerror=Ut(R))})}),openCursor:function(D){var A=D.trans,R=D.values,I=D.query,L=D.reverse,B=D.unique;return new Promise(function(U,J){U=Ie(U);var Z=I.index,W=I.range,V=A.objectStore(P),V=Z.isPrimaryKey?V:V.index(Z.name),Z=L?B?"prevunique":"prev":B?"nextunique":"next",X=!R&&"openKeyCursor"in V?V.openKeyCursor(u(W),Z):V.openCursor(u(W),Z);X.onerror=Ut(J),X.onsuccess=Ie(function(re){var pe,be,ye,St,he=X.result;he?(he.___id=++Ea,he.done=!1,pe=he.continue.bind(he),be=(be=he.continuePrimaryKey)&&be.bind(he),ye=he.advance.bind(he),St=function(){throw new Error("Cursor not stopped")},he.trans=A,he.stop=he.continue=he.continuePrimaryKey=he.advance=function(){throw new Error("Cursor not started")},he.fail=Ie(J),he.next=function(){var pt=this,mt=1;return this.start(function(){return mt--?pt.continue():pt.stop()}).then(function(){return pt})},he.start=function(pt){function mt(){if(X.result)try{pt()}catch(wt){he.fail(wt)}else he.done=!0,he.start=function(){throw new Error("Cursor behind last entry")},he.stop()}var Tr=new Promise(function(wt,xn){wt=Ie(wt),X.onerror=Ut(xn),he.fail=xn,he.stop=function(Pi){he.stop=he.continue=he.continuePrimaryKey=he.advance=St,wt(Pi)}});return X.onsuccess=Ie(function(wt){X.onsuccess=mt,mt()}),he.continue=pe,he.continuePrimaryKey=be,he.advance=ye,mt(),Tr},U(he)):U(null)},J)})},count:function(D){var A=D.query,R=D.trans,I=A.index,L=A.range;return new Promise(function(B,U){var J=R.objectStore(P),W=I.isPrimaryKey?J:J.index(I.name),J=u(L),W=J?W.count(J):W.count();W.onsuccess=Ie(function(V){return B(V.target.result)}),W.onerror=Ut(U)})}}}var h,g,y,T=(g=$,y=ws((h=s).objectStoreNames),{schema:{name:h.name,tables:y.map(function(j){return g.objectStore(j)}).map(function(j){var C=j.keyPath,A=j.autoIncrement,P=f(C),D={},A={name:j.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:C==null,compound:P,keyPath:C,autoIncrement:A,unique:!0,extractKey:di(C)},indexes:ws(j.indexNames).map(function(R){return j.index(R)}).map(function(B){var I=B.name,L=B.unique,U=B.multiEntry,B=B.keyPath,U={name:I,compound:f(B),keyPath:B,unique:L,multiEntry:U,extractKey:di(B)};return D[Xn(B)]=U}),getIndexByKeyPath:function(R){return D[Xn(R)]}};return D[":id"]=A.primaryKey,C!=null&&(D[Xn(C)]=A.primaryKey),A})},hasGetAll:0<y.length&&"getAll"in g.objectStore(y[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),$=T.schema,S=T.hasGetAll,T=$.tables.map(d),w={};return T.forEach(function(j){return w[j.name]=j}),{stack:"dbcore",transaction:s.transaction.bind(s),table:function(j){if(!w[j])throw new Error("Table '".concat(j,"' not found"));return w[j]},MIN_KEY:-1/0,MAX_KEY:Gn(o),schema:$}}function _a(s,o,l,u){var d=l.IDBKeyRange;return l.indexedDB,{dbcore:(u=Sa(o,d,u),s.dbcore.reduce(function(h,g){return g=g.create,i(i({},h),g(h))},u))}}function yr(s,u){var l=u.db,u=_a(s._middlewares,l,s._deps,u);s.core=u.dbcore,s.tables.forEach(function(d){var h=d.name;s.core.schema.tables.some(function(g){return g.name===h})&&(d.core=s.core.table(h),s[h]instanceof s.Table&&(s[h].core=d.core))})}function wr(s,o,l,u){l.forEach(function(d){var h=u[d];o.forEach(function(g){var y=(function $(S,T){return de(S,T)||(S=k(S))&&$(S,T)})(g,d);(!y||"value"in y&&y.value===void 0)&&(g===s.Transaction.prototype||g instanceof s.Transaction?q(g,d,{get:function(){return this.table(d)},set:function($){M(this,d,{value:$,writable:!0,configurable:!0,enumerable:!0})}}):g[d]=new s.Table(d,h))})})}function fi(s,o){o.forEach(function(l){for(var u in l)l[u]instanceof s.Table&&delete l[u]})}function Aa(s,o){return s._cfg.version-o._cfg.version}function Pa(s,o,l,u){var d=s._dbSchema;l.objectStoreNames.contains("$meta")&&!d.$meta&&(d.$meta=ui("$meta",xs("")[0],[]),s._storeNames.push("$meta"));var h=s._createTransaction("readwrite",s._storeNames,d);h.create(l),h._completion.catch(u);var g=h._reject.bind(h),y=Y.transless||Y;sn(function(){return Y.trans=h,Y.transless=y,o!==0?(yr(s,l),S=o,(($=h).storeNames.includes("$meta")?$.table("$meta").get("version").then(function(T){return T??S}):G.resolve(S)).then(function(T){return j=T,C=h,P=l,D=[],T=(w=s)._versions,A=w._dbSchema=xr(0,w.idbdb,P),(T=T.filter(function(R){return R._cfg.version>=j})).length!==0?(T.forEach(function(R){D.push(function(){var I=A,L=R._cfg.dbschema;$r(w,I,P),$r(w,L,P),A=w._dbSchema=L;var B=hi(I,L);B.add.forEach(function(Z){pi(P,Z[0],Z[1].primKey,Z[1].indexes)}),B.change.forEach(function(Z){if(Z.recreate)throw new Q.Upgrade("Not yet support for changing primary key");var X=P.objectStore(Z.name);Z.add.forEach(function(re){return vr(X,re)}),Z.change.forEach(function(re){X.deleteIndex(re.name),vr(X,re)}),Z.del.forEach(function(re){return X.deleteIndex(re)})});var U=R._cfg.contentUpgrade;if(U&&R._cfg.version>j){yr(w,P),C._memoizedTables={};var J=Ot(L);B.del.forEach(function(Z){J[Z]=I[Z]}),fi(w,[w.Transaction.prototype]),wr(w,[w.Transaction.prototype],c(J),J),C.schema=J;var W,V=rt(U);return V&&Fn(),B=G.follow(function(){var Z;(W=U(C))&&V&&(Z=on.bind(null,null),W.then(Z,Z))}),W&&typeof W.then=="function"?G.resolve(W):B.then(function(){return W})}}),D.push(function(I){var L,B,U=R._cfg.dbschema;L=U,B=I,[].slice.call(B.db.objectStoreNames).forEach(function(J){return L[J]==null&&B.db.deleteObjectStore(J)}),fi(w,[w.Transaction.prototype]),wr(w,[w.Transaction.prototype],w._storeNames,w._dbSchema),C.schema=w._dbSchema}),D.push(function(I){w.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(w.idbdb.version/10)===R._cfg.version?(w.idbdb.deleteObjectStore("$meta"),delete w._dbSchema.$meta,w._storeNames=w._storeNames.filter(function(L){return L!=="$meta"})):I.objectStore("$meta").put(R._cfg.version,"version"))})}),(function R(){return D.length?G.resolve(D.shift()(C.idbtrans)).then(R):G.resolve()})().then(function(){vs(A,P)})):G.resolve();var w,j,C,P,D,A}).catch(g)):(c(d).forEach(function(T){pi(l,T,d[T].primKey,d[T].indexes)}),yr(s,l),void G.follow(function(){return s.on.populate.fire(h)}).catch(g));var $,S})}function Ta(s,o){vs(s._dbSchema,o),o.db.version%10!=0||o.objectStoreNames.contains("$meta")||o.db.createObjectStore("$meta").add(Math.ceil(o.db.version/10-1),"version");var l=xr(0,s.idbdb,o);$r(s,s._dbSchema,o);for(var u=0,d=hi(l,s._dbSchema).change;u<d.length;u++){var h=(function(g){if(g.change.length||g.recreate)return console.warn("Unable to patch indexes of table ".concat(g.name," because it has changes on the type of index or primary key.")),{value:void 0};var y=o.objectStore(g.name);g.add.forEach(function($){Ae&&console.debug("Dexie upgrade patch: Creating missing index ".concat(g.name,".").concat($.src)),vr(y,$)})})(d[u]);if(typeof h=="object")return h.value}}function hi(s,o){var l,u={del:[],add:[],change:[]};for(l in s)o[l]||u.del.push(l);for(l in o){var d=s[l],h=o[l];if(d){var g={name:l,def:h,recreate:!1,del:[],add:[],change:[]};if(""+(d.primKey.keyPath||"")!=""+(h.primKey.keyPath||"")||d.primKey.auto!==h.primKey.auto)g.recreate=!0,u.change.push(g);else{var y=d.idxByName,$=h.idxByName,S=void 0;for(S in y)$[S]||g.del.push(S);for(S in $){var T=y[S],w=$[S];T?T.src!==w.src&&g.change.push(w):g.add.push(w)}(0<g.del.length||0<g.add.length||0<g.change.length)&&u.change.push(g)}}else u.add.push([l,h])}return u}function pi(s,o,l,u){var d=s.db.createObjectStore(o,l.keyPath?{keyPath:l.keyPath,autoIncrement:l.auto}:{autoIncrement:l.auto});return u.forEach(function(h){return vr(d,h)}),d}function vs(s,o){c(s).forEach(function(l){o.db.objectStoreNames.contains(l)||(Ae&&console.debug("Dexie: Creating missing table",l),pi(o,l,s[l].primKey,s[l].indexes))})}function vr(s,o){s.createIndex(o.name,o.keyPath,{unique:o.unique,multiEntry:o.multi})}function xr(s,o,l){var u={};return Pe(o.objectStoreNames,0).forEach(function(d){for(var h=l.objectStore(d),g=ci(ys(S=h.keyPath),S||"",!0,!1,!!h.autoIncrement,S&&typeof S!="string",!0),y=[],$=0;$<h.indexNames.length;++$){var T=h.index(h.indexNames[$]),S=T.keyPath,T=ci(T.name,S,!!T.unique,!!T.multiEntry,!1,S&&typeof S!="string",!1);y.push(T)}u[d]=ui(d,g,y)}),u}function $r(s,o,l){for(var u=l.db.objectStoreNames,d=0;d<u.length;++d){var h=u[d],g=l.objectStore(h);s._hasGetAll="getAll"in g;for(var y=0;y<g.indexNames.length;++y){var $=g.indexNames[y],S=g.index($).keyPath,T=typeof S=="string"?S:"["+Pe(S).join("+")+"]";!o[h]||(S=o[h].idxByName[T])&&(S.name=$,delete o[h].idxByName[T],o[h].idxByName[$]=S)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&a.WorkerGlobalScope&&a instanceof a.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(s._hasGetAll=!1)}function xs(s){return s.split(",").map(function(o,l){var u=(o=o.trim()).replace(/([&*]|\+\+)/g,""),d=/^\[/.test(u)?u.match(/^\[(.*)\]$/)[1].split("+"):u;return ci(u,d||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),f(d),l===0)})}var Da=(Cr.prototype._parseStoresSpec=function(s,o){c(s).forEach(function(l){if(s[l]!==null){var u=xs(s[l]),d=u.shift();if(d.unique=!0,d.multi)throw new Q.Schema("Primary key cannot be multi-valued");u.forEach(function(h){if(h.auto)throw new Q.Schema("Only primary key can be marked as autoIncrement (++)");if(!h.keyPath)throw new Q.Schema("Index must have a name and cannot be an empty string")}),o[l]=ui(l,d,u)}})},Cr.prototype.stores=function(l){var o=this.db;this._cfg.storesSource=this._cfg.storesSource?m(this._cfg.storesSource,l):l;var l=o._versions,u={},d={};return l.forEach(function(h){m(u,h._cfg.storesSource),d=h._cfg.dbschema={},h._parseStoresSpec(u,d)}),o._dbSchema=d,fi(o,[o._allTables,o,o.Transaction.prototype]),wr(o,[o._allTables,o,o.Transaction.prototype,this._cfg.tables],c(d),d),o._storeNames=c(d),this},Cr.prototype.upgrade=function(s){return this._cfg.contentUpgrade=Ct(this._cfg.contentUpgrade||le,s),this},Cr);function Cr(){}function mi(s,o){var l=s._dbNamesDB;return l||(l=s._dbNamesDB=new Jt(hr,{addons:[],indexedDB:s,IDBKeyRange:o})).version(1).stores({dbnames:"name"}),l.table("dbnames")}function gi(s){return s&&typeof s.databases=="function"}function bi(s){return sn(function(){return Y.letThrough=!0,s()})}function yi(s){return!("from"in s)}var ht=function(s,o){if(!this){var l=new ht;return s&&"d"in s&&m(l,s),l}m(this,arguments.length?{d:1,from:s,to:1<arguments.length?o:s}:{d:0})};function Jn(s,o,l){var u=$e(o,l);if(!isNaN(u)){if(0<u)throw RangeError();if(yi(s))return m(s,{from:o,to:l,d:1});var d=s.l,u=s.r;if($e(l,s.from)<0)return d?Jn(d,o,l):s.l={from:o,to:l,d:1,l:null,r:null},Cs(s);if(0<$e(o,s.to))return u?Jn(u,o,l):s.r={from:o,to:l,d:1,l:null,r:null},Cs(s);$e(o,s.from)<0&&(s.from=o,s.l=null,s.d=u?u.d+1:1),0<$e(l,s.to)&&(s.to=l,s.r=null,s.d=s.l?s.l.d+1:1),l=!s.r,d&&!s.l&&Qn(s,d),u&&l&&Qn(s,u)}}function Qn(s,o){yi(o)||(function l(u,$){var h=$.from,g=$.to,y=$.l,$=$.r;Jn(u,h,g),y&&l(u,y),$&&l(u,$)})(s,o)}function $s(s,o){var l=kr(o),u=l.next();if(u.done)return!1;for(var d=u.value,h=kr(s),g=h.next(d.from),y=g.value;!u.done&&!g.done;){if($e(y.from,d.to)<=0&&0<=$e(y.to,d.from))return!0;$e(d.from,y.from)<0?d=(u=l.next(y.from)).value:y=(g=h.next(d.from)).value}return!1}function kr(s){var o=yi(s)?null:{s:0,n:s};return{next:function(l){for(var u=0<arguments.length;o;)switch(o.s){case 0:if(o.s=1,u)for(;o.n.l&&$e(l,o.n.from)<0;)o={up:o,n:o.n.l,s:1};else for(;o.n.l;)o={up:o,n:o.n.l,s:1};case 1:if(o.s=2,!u||$e(l,o.n.to)<=0)return{value:o.n,done:!1};case 2:if(o.n.r){o.s=3,o={up:o,n:o.n.r,s:0};continue}case 3:o=o.up}return{done:!0}}}}function Cs(s){var o,l,u=(((o=s.r)===null||o===void 0?void 0:o.d)||0)-(((l=s.l)===null||l===void 0?void 0:l.d)||0),d=1<u?"r":u<-1?"l":"";d&&(o=d=="r"?"l":"r",l=i({},s),u=s[d],s.from=u.from,s.to=u.to,s[d]=u[d],l[d]=u[o],(s[o]=l).d=ks(l)),s.d=ks(s)}function ks(l){var o=l.r,l=l.l;return(o?l?Math.max(o.d,l.d):o.d:l?l.d:0)+1}function Er(s,o){return c(o).forEach(function(l){s[l]?Qn(s[l],o[l]):s[l]=(function u(d){var h,g,y={};for(h in d)E(d,h)&&(g=d[h],y[h]=!g||typeof g!="object"||p.has(g.constructor)?g:u(g));return y})(o[l])}),s}function wi(s,o){return s.all||o.all||Object.keys(s).some(function(l){return o[l]&&$s(o[l],s[l])})}z(ht.prototype,((Tt={add:function(s){return Qn(this,s),this},addKey:function(s){return Jn(this,s,s),this},addKeys:function(s){var o=this;return s.forEach(function(l){return Jn(o,l,l)}),this},hasKey:function(s){var o=kr(this).next(s).value;return o&&$e(o.from,s)<=0&&0<=$e(o.to,s)}})[se]=function(){return kr(this)},Tt));var wn={},vi={},xi=!1;function Sr(s){Er(vi,s),xi||(xi=!0,setTimeout(function(){xi=!1,$i(vi,!(vi={}))},0))}function $i(s,o){o===void 0&&(o=!1);var l=new Set;if(s.all)for(var u=0,d=Object.values(wn);u<d.length;u++)Es(g=d[u],s,l,o);else for(var h in s){var g,y=/^idb\:\/\/(.*)\/(.*)\//.exec(h);y&&(h=y[1],y=y[2],(g=wn["idb://".concat(h,"/").concat(y)])&&Es(g,s,l,o))}l.forEach(function($){return $()})}function Es(s,o,l,u){for(var d=[],h=0,g=Object.entries(s.queries.query);h<g.length;h++){for(var y=g[h],$=y[0],S=[],T=0,w=y[1];T<w.length;T++){var j=w[T];wi(o,j.obsSet)?j.subscribers.forEach(function(A){return l.add(A)}):u&&S.push(j)}u&&d.push([$,S])}if(u)for(var C=0,P=d;C<P.length;C++){var D=P[C],$=D[0],S=D[1];s.queries.query[$]=S}}function ja(s){var o=s._state,l=s._deps.indexedDB;if(o.isBeingOpened||s.idbdb)return o.dbReadyPromise.then(function(){return o.dbOpenError?Ze(o.dbOpenError):s});o.isBeingOpened=!0,o.dbOpenError=null,o.openComplete=!1;var u=o.openCanceller,d=Math.round(10*s.verno),h=!1;function g(){if(o.openCanceller!==u)throw new Q.DatabaseClosed("db.open() was cancelled")}function y(){return new G(function(j,C){if(g(),!l)throw new Q.MissingAPI;var P=s.name,D=o.autoSchema||!d?l.open(P):l.open(P,d);if(!D)throw new Q.MissingAPI;D.onerror=Ut(C),D.onblocked=Ie(s._fireOnBlocked),D.onupgradeneeded=Ie(function(A){var R;T=D.transaction,o.autoSchema&&!s._options.allowEmptyDB?(D.onerror=Vn,T.abort(),D.result.close(),(R=l.deleteDatabase(P)).onsuccess=R.onerror=Ie(function(){C(new Q.NoSuchDatabase("Database ".concat(P," doesnt exist")))})):(T.onerror=Ut(C),A=A.oldVersion>Math.pow(2,62)?0:A.oldVersion,w=A<1,s.idbdb=D.result,h&&Ta(s,T),Pa(s,A/10,T,C))},C),D.onsuccess=Ie(function(){T=null;var A,R,I,L,B,U=s.idbdb=D.result,J=Pe(U.objectStoreNames);if(0<J.length)try{var W=U.transaction((L=J).length===1?L[0]:L,"readonly");if(o.autoSchema)R=U,I=W,(A=s).verno=R.version/10,I=A._dbSchema=xr(0,R,I),A._storeNames=Pe(R.objectStoreNames,0),wr(A,[A._allTables],c(I),I);else if($r(s,s._dbSchema,W),((B=hi(xr(0,(B=s).idbdb,W),B._dbSchema)).add.length||B.change.some(function(V){return V.add.length||V.change.length}))&&!h)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),U.close(),d=U.version+1,h=!0,j(y());yr(s,W)}catch{}On.push(s),U.onversionchange=Ie(function(V){o.vcFired=!0,s.on("versionchange").fire(V)}),U.onclose=Ie(function(V){s.on("close").fire(V)}),w&&(B=s._deps,W=P,U=B.indexedDB,B=B.IDBKeyRange,gi(U)||W===hr||mi(U,B).put({name:W}).catch(le)),j()},C)}).catch(function(j){switch(j?.name){case"UnknownError":if(0<o.PR1398_maxLoop)return o.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),y();break;case"VersionError":if(0<d)return d=0,y()}return G.reject(j)})}var $,S=o.dbReadyResolve,T=null,w=!1;return G.race([u,(typeof navigator>"u"?G.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(j){function C(){return indexedDB.databases().finally(j)}$=setInterval(C,100),C()}).finally(function(){return clearInterval($)}):Promise.resolve()).then(y)]).then(function(){return g(),o.onReadyBeingFired=[],G.resolve(bi(function(){return s.on.ready.fire(s.vip)})).then(function j(){if(0<o.onReadyBeingFired.length){var C=o.onReadyBeingFired.reduce(Ct,le);return o.onReadyBeingFired=[],G.resolve(bi(function(){return C(s.vip)})).then(j)}})}).finally(function(){o.openCanceller===u&&(o.onReadyBeingFired=null,o.isBeingOpened=!1)}).catch(function(j){o.dbOpenError=j;try{T&&T.abort()}catch{}return u===o.openCanceller&&s._close(),Ze(j)}).finally(function(){o.openComplete=!0,S()}).then(function(){var j;return w&&(j={},s.tables.forEach(function(C){C.schema.indexes.forEach(function(P){P.name&&(j["idb://".concat(s.name,"/").concat(C.name,"/").concat(P.name)]=new ht(-1/0,[[[]]]))}),j["idb://".concat(s.name,"/").concat(C.name,"/")]=j["idb://".concat(s.name,"/").concat(C.name,"/:dels")]=new ht(-1/0,[[[]]])}),cn(Yn).fire(j),$i(j,!0)),s})}function Ci(s){function o(h){return s.next(h)}var l=d(o),u=d(function(h){return s.throw(h)});function d(h){return function($){var y=h($),$=y.value;return y.done?$:$&&typeof $.then=="function"?$.then(l,u):f($)?Promise.all($).then(l,u):l($)}}return d(o)()}function _r(s,o,l){for(var u=f(s)?s.slice():[s],d=0;d<l;++d)u.push(o);return u}var Fa={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(s){return i(i({},s),{table:function(o){var l=s.table(o),u=l.schema,d={},h=[];function g(w,j,C){var P=Xn(w),D=d[P]=d[P]||[],A=w==null?0:typeof w=="string"?1:w.length,R=0<j,R=i(i({},C),{name:R?"".concat(P,"(virtual-from:").concat(C.name,")"):C.name,lowLevelIndex:C,isVirtual:R,keyTail:j,keyLength:A,extractKey:di(w),unique:!R&&C.unique});return D.push(R),R.isPrimaryKey||h.push(R),1<A&&g(A===2?w[0]:w.slice(0,A-1),j+1,C),D.sort(function(I,L){return I.keyTail-L.keyTail}),R}o=g(u.primaryKey.keyPath,0,u.primaryKey),d[":id"]=[o];for(var y=0,$=u.indexes;y<$.length;y++){var S=$[y];g(S.keyPath,0,S)}function T(w){var j,C=w.query.index;return C.isVirtual?i(i({},w),{query:{index:C.lowLevelIndex,range:(j=w.query.range,C=C.keyTail,{type:j.type===1?2:j.type,lower:_r(j.lower,j.lowerOpen?s.MAX_KEY:s.MIN_KEY,C),lowerOpen:!0,upper:_r(j.upper,j.upperOpen?s.MIN_KEY:s.MAX_KEY,C),upperOpen:!0})}}):w}return i(i({},l),{schema:i(i({},u),{primaryKey:o,indexes:h,getIndexByKeyPath:function(w){return(w=d[Xn(w)])&&w[0]}}),count:function(w){return l.count(T(w))},query:function(w){return l.query(T(w))},openCursor:function(w){var j=w.query.index,C=j.keyTail,P=j.isVirtual,D=j.keyLength;return P?l.openCursor(T(w)).then(function(R){return R&&A(R)}):l.openCursor(w);function A(R){return Object.create(R,{continue:{value:function(I){I!=null?R.continue(_r(I,w.reverse?s.MAX_KEY:s.MIN_KEY,C)):w.unique?R.continue(R.key.slice(0,D).concat(w.reverse?s.MIN_KEY:s.MAX_KEY,C)):R.continue()}},continuePrimaryKey:{value:function(I,L){R.continuePrimaryKey(_r(I,s.MAX_KEY,C),L)}},primaryKey:{get:function(){return R.primaryKey}},key:{get:function(){var I=R.key;return D===1?I[0]:I.slice(0,D)}},value:{get:function(){return R.value}}})}}})}})}};function ki(s,o,l,u){return l=l||{},u=u||"",c(s).forEach(function(d){var h,g,y;E(o,d)?(h=s[d],g=o[d],typeof h=="object"&&typeof g=="object"&&h&&g?(y=x(h))!==x(g)?l[u+d]=o[d]:y==="Object"?ki(h,g,l,u+d+"."):h!==g&&(l[u+d]=o[d]):h!==g&&(l[u+d]=o[d])):l[u+d]=void 0}),c(o).forEach(function(d){E(s,d)||(l[u+d]=o[d])}),l}function Ei(s,o){return o.type==="delete"?o.keys:o.keys||o.values.map(s.extractKey)}var Oa={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(s){return i(i({},s),{table:function(o){var l=s.table(o),u=l.schema.primaryKey;return i(i({},l),{mutate:function(d){var h=Y.trans,g=h.table(o).hook,y=g.deleting,$=g.creating,S=g.updating;switch(d.type){case"add":if($.fire===le)break;return h._promise("readwrite",function(){return T(d)},!0);case"put":if($.fire===le&&S.fire===le)break;return h._promise("readwrite",function(){return T(d)},!0);case"delete":if(y.fire===le)break;return h._promise("readwrite",function(){return T(d)},!0);case"deleteRange":if(y.fire===le)break;return h._promise("readwrite",function(){return(function w(j,C,P){return l.query({trans:j,values:!1,query:{index:u,range:C},limit:P}).then(function(D){var A=D.result;return T({type:"delete",keys:A,trans:j}).then(function(R){return 0<R.numFailures?Promise.reject(R.failures[0]):A.length<P?{failures:[],numFailures:0,lastResult:void 0}:w(j,i(i({},C),{lower:A[A.length-1],lowerOpen:!0}),P)})})})(d.trans,d.range,1e4)},!0)}return l.mutate(d);function T(w){var j,C,P,D=Y.trans,A=w.keys||Ei(u,w);if(!A)throw new Error("Keys missing");return(w=w.type==="add"||w.type==="put"?i(i({},w),{keys:A}):i({},w)).type!=="delete"&&(w.values=n([],w.values)),w.keys&&(w.keys=n([],w.keys)),j=l,P=A,((C=w).type==="add"?Promise.resolve([]):j.getMany({trans:C.trans,keys:P,cache:"immutable"})).then(function(R){var I=A.map(function(L,B){var U,J,W,V=R[B],Z={onerror:null,onsuccess:null};return w.type==="delete"?y.fire.call(Z,L,V,D):w.type==="add"||V===void 0?(U=$.fire.call(Z,L,w.values[B],D),L==null&&U!=null&&(w.keys[B]=L=U,u.outbound||Ue(w.values[B],u.keyPath,L))):(U=ki(V,w.values[B]),(J=S.fire.call(Z,U,L,V,D))&&(W=w.values[B],Object.keys(J).forEach(function(X){E(W,X)?W[X]=J[X]:Ue(W,X,J[X])}))),Z});return l.mutate(w).then(function(L){for(var B=L.failures,U=L.results,J=L.numFailures,L=L.lastResult,W=0;W<A.length;++W){var V=(U||A)[W],Z=I[W];V==null?Z.onerror&&Z.onerror(B[W]):Z.onsuccess&&Z.onsuccess(w.type==="put"&&R[W]?w.values[W]:V)}return{failures:B,results:U,numFailures:J,lastResult:L}}).catch(function(L){return I.forEach(function(B){return B.onerror&&B.onerror(L)}),Promise.reject(L)})})}}})}})}};function Ss(s,o,l){try{if(!o||o.keys.length<s.length)return null;for(var u=[],d=0,h=0;d<o.keys.length&&h<s.length;++d)$e(o.keys[d],s[h])===0&&(u.push(l?O(o.values[d]):o.values[d]),++h);return u.length===s.length?u:null}catch{return null}}var Ra={stack:"dbcore",level:-1,create:function(s){return{table:function(o){var l=s.table(o);return i(i({},l),{getMany:function(u){if(!u.cache)return l.getMany(u);var d=Ss(u.keys,u.trans._cache,u.cache==="clone");return d?G.resolve(d):l.getMany(u).then(function(h){return u.trans._cache={keys:u.keys,values:u.cache==="clone"?O(h):h},h})},mutate:function(u){return u.type!=="add"&&(u.trans._cache=null),l.mutate(u)}})}}}};function _s(s,o){return s.trans.mode==="readonly"&&!!s.subscr&&!s.trans.explicit&&s.trans.db._options.cache!=="disabled"&&!o.schema.primaryKey.outbound}function As(s,o){switch(s){case"query":return o.values&&!o.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var za={stack:"dbcore",level:0,name:"Observability",create:function(s){var o=s.schema.name,l=new ht(s.MIN_KEY,s.MAX_KEY);return i(i({},s),{transaction:function(u,d,h){if(Y.subscr&&d!=="readonly")throw new Q.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Y.querier));return s.transaction(u,d,h)},table:function(u){var d=s.table(u),h=d.schema,g=h.primaryKey,w=h.indexes,y=g.extractKey,$=g.outbound,S=g.autoIncrement&&w.filter(function(C){return C.compound&&C.keyPath.includes(g.keyPath)}),T=i(i({},d),{mutate:function(C){function P(X){return X="idb://".concat(o,"/").concat(u,"/").concat(X),L[X]||(L[X]=new ht)}var D,A,R,I=C.trans,L=C.mutatedParts||(C.mutatedParts={}),B=P(""),U=P(":dels"),J=C.type,Z=C.type==="deleteRange"?[C.range]:C.type==="delete"?[C.keys]:C.values.length<50?[Ei(g,C).filter(function(X){return X}),C.values]:[],W=Z[0],V=Z[1],Z=C.trans._cache;return f(W)?(B.addKeys(W),(Z=J==="delete"||W.length===V.length?Ss(W,Z):null)||U.addKeys(W),(Z||V)&&(D=P,A=Z,R=V,h.indexes.forEach(function(X){var re=D(X.name||"");function pe(ye){return ye!=null?X.extractKey(ye):null}function be(ye){return X.multiEntry&&f(ye)?ye.forEach(function(St){return re.addKey(St)}):re.addKey(ye)}(A||R).forEach(function(ye,pt){var he=A&&pe(A[pt]),pt=R&&pe(R[pt]);$e(he,pt)!==0&&(he!=null&&be(he),pt!=null&&be(pt))})}))):W?(V={from:(V=W.lower)!==null&&V!==void 0?V:s.MIN_KEY,to:(V=W.upper)!==null&&V!==void 0?V:s.MAX_KEY},U.add(V),B.add(V)):(B.add(l),U.add(l),h.indexes.forEach(function(X){return P(X.name).add(l)})),d.mutate(C).then(function(X){return!W||C.type!=="add"&&C.type!=="put"||(B.addKeys(X.results),S&&S.forEach(function(re){for(var pe=C.values.map(function(he){return re.extractKey(he)}),be=re.keyPath.findIndex(function(he){return he===g.keyPath}),ye=0,St=X.results.length;ye<St;++ye)pe[ye][be]=X.results[ye];P(re.name).addKeys(pe)})),I.mutatedParts=Er(I.mutatedParts||{},L),X})}}),w=function(P){var D=P.query,P=D.index,D=D.range;return[P,new ht((P=D.lower)!==null&&P!==void 0?P:s.MIN_KEY,(D=D.upper)!==null&&D!==void 0?D:s.MAX_KEY)]},j={get:function(C){return[g,new ht(C.key)]},getMany:function(C){return[g,new ht().addKeys(C.keys)]},count:w,query:w,openCursor:w};return c(j).forEach(function(C){T[C]=function(P){var D=Y.subscr,A=!!D,R=_s(Y,d)&&As(C,P)?P.obsSet={}:D;if(A){var I=function(V){return V="idb://".concat(o,"/").concat(u,"/").concat(V),R[V]||(R[V]=new ht)},L=I(""),B=I(":dels"),D=j[C](P),A=D[0],D=D[1];if((C==="query"&&A.isPrimaryKey&&!P.values?B:I(A.name||"")).add(D),!A.isPrimaryKey){if(C!=="count"){var U=C==="query"&&$&&P.values&&d.query(i(i({},P),{values:!1}));return d[C].apply(this,arguments).then(function(V){if(C==="query"){if($&&P.values)return U.then(function(pe){return pe=pe.result,L.addKeys(pe),V});var Z=P.values?V.result.map(y):V.result;(P.values?L:B).addKeys(Z)}else if(C==="openCursor"){var X=V,re=P.values;return X&&Object.create(X,{key:{get:function(){return B.addKey(X.primaryKey),X.key}},primaryKey:{get:function(){var pe=X.primaryKey;return B.addKey(pe),pe}},value:{get:function(){return re&&L.addKey(X.primaryKey),X.value}}})}return V})}B.add(l)}}return d[C].apply(this,arguments)}}),T}})}};function Ps(s,o,l){if(l.numFailures===0)return o;if(o.type==="deleteRange")return null;var u=o.keys?o.keys.length:"values"in o&&o.values?o.values.length:1;return l.numFailures===u?null:(o=i({},o),f(o.keys)&&(o.keys=o.keys.filter(function(d,h){return!(h in l.failures)})),"values"in o&&f(o.values)&&(o.values=o.values.filter(function(d,h){return!(h in l.failures)})),o)}function Si(s,o){return l=s,((u=o).lower===void 0||(u.lowerOpen?0<$e(l,u.lower):0<=$e(l,u.lower)))&&(s=s,(o=o).upper===void 0||(o.upperOpen?$e(s,o.upper)<0:$e(s,o.upper)<=0));var l,u}function Ts(s,o,j,u,d,h){if(!j||j.length===0)return s;var g=o.query.index,y=g.multiEntry,$=o.query.range,S=u.schema.primaryKey.extractKey,T=g.extractKey,w=(g.lowLevelIndex||g).extractKey,j=j.reduce(function(C,P){var D=C,A=[];if(P.type==="add"||P.type==="put")for(var R=new ht,I=P.values.length-1;0<=I;--I){var L,B=P.values[I],U=S(B);R.hasKey(U)||(L=T(B),(y&&f(L)?L.some(function(X){return Si(X,$)}):Si(L,$))&&(R.addKey(U),A.push(B)))}switch(P.type){case"add":var J=new ht().addKeys(o.values?C.map(function(re){return S(re)}):C),D=C.concat(o.values?A.filter(function(re){return re=S(re),!J.hasKey(re)&&(J.addKey(re),!0)}):A.map(function(re){return S(re)}).filter(function(re){return!J.hasKey(re)&&(J.addKey(re),!0)}));break;case"put":var W=new ht().addKeys(P.values.map(function(re){return S(re)}));D=C.filter(function(re){return!W.hasKey(o.values?S(re):re)}).concat(o.values?A:A.map(function(re){return S(re)}));break;case"delete":var V=new ht().addKeys(P.keys);D=C.filter(function(re){return!V.hasKey(o.values?S(re):re)});break;case"deleteRange":var Z=P.range;D=C.filter(function(re){return!Si(S(re),Z)})}return D},s);return j===s?s:(j.sort(function(C,P){return $e(w(C),w(P))||$e(S(C),S(P))}),o.limit&&o.limit<1/0&&(j.length>o.limit?j.length=o.limit:s.length===o.limit&&j.length<o.limit&&(d.dirty=!0)),h?Object.freeze(j):j)}function Ds(s,o){return $e(s.lower,o.lower)===0&&$e(s.upper,o.upper)===0&&!!s.lowerOpen==!!o.lowerOpen&&!!s.upperOpen==!!o.upperOpen}function Ia(s,o){return(function(l,u,d,h){if(l===void 0)return u!==void 0?-1:0;if(u===void 0)return 1;if((u=$e(l,u))===0){if(d&&h)return 0;if(d)return 1;if(h)return-1}return u})(s.lower,o.lower,s.lowerOpen,o.lowerOpen)<=0&&0<=(function(l,u,d,h){if(l===void 0)return u!==void 0?1:0;if(u===void 0)return-1;if((u=$e(l,u))===0){if(d&&h)return 0;if(d)return-1;if(h)return 1}return u})(s.upper,o.upper,s.upperOpen,o.upperOpen)}function La(s,o,l,u){s.subscribers.add(l),u.addEventListener("abort",function(){var d,h;s.subscribers.delete(l),s.subscribers.size===0&&(d=s,h=o,setTimeout(function(){d.subscribers.size===0&&N(h,d)},3e3))})}var Ba={stack:"dbcore",level:0,name:"Cache",create:function(s){var o=s.schema.name;return i(i({},s),{transaction:function(l,u,d){var h,g,y=s.transaction(l,u,d);return u==="readwrite"&&(g=(h=new AbortController).signal,d=function($){return function(){if(h.abort(),u==="readwrite"){for(var S=new Set,T=0,w=l;T<w.length;T++){var j=w[T],C=wn["idb://".concat(o,"/").concat(j)];if(C){var P=s.table(j),D=C.optimisticOps.filter(function(re){return re.trans===y});if(y._explicit&&$&&y.mutatedParts)for(var A=0,R=Object.values(C.queries.query);A<R.length;A++)for(var I=0,L=(J=R[A]).slice();I<L.length;I++)wi((W=L[I]).obsSet,y.mutatedParts)&&(N(J,W),W.subscribers.forEach(function(re){return S.add(re)}));else if(0<D.length){C.optimisticOps=C.optimisticOps.filter(function(re){return re.trans!==y});for(var B=0,U=Object.values(C.queries.query);B<U.length;B++)for(var J,W,V,Z=0,X=(J=U[B]).slice();Z<X.length;Z++)(W=X[Z]).res!=null&&y.mutatedParts&&($&&!W.dirty?(V=Object.isFrozen(W.res),V=Ts(W.res,W.req,D,P,W,V),W.dirty?(N(J,W),W.subscribers.forEach(function(re){return S.add(re)})):V!==W.res&&(W.res=V,W.promise=G.resolve({result:V}))):(W.dirty&&N(J,W),W.subscribers.forEach(function(re){return S.add(re)})))}}}S.forEach(function(re){return re()})}}},y.addEventListener("abort",d(!1),{signal:g}),y.addEventListener("error",d(!1),{signal:g}),y.addEventListener("complete",d(!0),{signal:g})),y},table:function(l){var u=s.table(l),d=u.schema.primaryKey;return i(i({},u),{mutate:function(h){var g=Y.trans;if(d.outbound||g.db._options.cache==="disabled"||g.explicit||g.idbtrans.mode!=="readwrite")return u.mutate(h);var y=wn["idb://".concat(o,"/").concat(l)];return y?(g=u.mutate(h),h.type!=="add"&&h.type!=="put"||!(50<=h.values.length||Ei(d,h).some(function($){return $==null}))?(y.optimisticOps.push(h),h.mutatedParts&&Sr(h.mutatedParts),g.then(function($){0<$.numFailures&&(N(y.optimisticOps,h),($=Ps(0,h,$))&&y.optimisticOps.push($),h.mutatedParts&&Sr(h.mutatedParts))}),g.catch(function(){N(y.optimisticOps,h),h.mutatedParts&&Sr(h.mutatedParts)})):g.then(function($){var S=Ps(0,i(i({},h),{values:h.values.map(function(T,w){var j;return $.failures[w]?T:(T=(j=d.keyPath)!==null&&j!==void 0&&j.includes(".")?O(T):i({},T),Ue(T,d.keyPath,$.results[w]),T)})}),$);y.optimisticOps.push(S),queueMicrotask(function(){return h.mutatedParts&&Sr(h.mutatedParts)})}),g):u.mutate(h)},query:function(h){if(!_s(Y,u)||!As("query",h))return u.query(h);var g=((S=Y.trans)===null||S===void 0?void 0:S.db._options.cache)==="immutable",w=Y,y=w.requery,$=w.signal,S=(function(P,D,A,R){var I=wn["idb://".concat(P,"/").concat(D)];if(!I)return[];if(!(D=I.queries[A]))return[null,!1,I,null];var L=D[(R.query?R.query.index.name:null)||""];if(!L)return[null,!1,I,null];switch(A){case"query":var B=L.find(function(U){return U.req.limit===R.limit&&U.req.values===R.values&&Ds(U.req.query.range,R.query.range)});return B?[B,!0,I,L]:[L.find(function(U){return("limit"in U.req?U.req.limit:1/0)>=R.limit&&(!R.values||U.req.values)&&Ia(U.req.query.range,R.query.range)}),!1,I,L];case"count":return B=L.find(function(U){return Ds(U.req.query.range,R.query.range)}),[B,!!B,I,L]}})(o,l,"query",h),T=S[0],w=S[1],j=S[2],C=S[3];return T&&w?T.obsSet=h.obsSet:(w=u.query(h).then(function(P){var D=P.result;if(T&&(T.res=D),g){for(var A=0,R=D.length;A<R;++A)Object.freeze(D[A]);Object.freeze(D)}else P.result=O(D);return P}).catch(function(P){return C&&T&&N(C,T),Promise.reject(P)}),T={obsSet:h.obsSet,promise:w,subscribers:new Set,type:"query",req:h,dirty:!1},C?C.push(T):(C=[T],(j=j||(wn["idb://".concat(o,"/").concat(l)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[h.query.index.name||""]=C)),La(T,C,y,$),T.promise.then(function(P){return{result:Ts(P.result,h,j?.optimisticOps,u,T,g)}})}})}})}};function Ar(s,o){return new Proxy(s,{get:function(l,u,d){return u==="db"?o:Reflect.get(l,u,d)}})}var Jt=(et.prototype.version=function(s){if(isNaN(s)||s<.1)throw new Q.Type("Given version is not a positive number");if(s=Math.round(10*s)/10,this.idbdb||this._state.isBeingOpened)throw new Q.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,s);var o=this._versions,l=o.filter(function(u){return u._cfg.version===s})[0];return l||(l=new this.Version(s),o.push(l),o.sort(Aa),l.stores({}),this._state.autoSchema=!1,l)},et.prototype._whenReady=function(s){var o=this;return this.idbdb&&(this._state.openComplete||Y.letThrough||this._vip)?s():new G(function(l,u){if(o._state.openComplete)return u(new Q.DatabaseClosed(o._state.dbOpenError));if(!o._state.isBeingOpened){if(!o._state.autoOpen)return void u(new Q.DatabaseClosed);o.open().catch(le)}o._state.dbReadyPromise.then(l,u)}).then(s)},et.prototype.use=function(s){var o=s.stack,l=s.create,u=s.level,d=s.name;return d&&this.unuse({stack:o,name:d}),s=this._middlewares[o]||(this._middlewares[o]=[]),s.push({stack:o,create:l,level:u??10,name:d}),s.sort(function(h,g){return h.level-g.level}),this},et.prototype.unuse=function(s){var o=s.stack,l=s.name,u=s.create;return o&&this._middlewares[o]&&(this._middlewares[o]=this._middlewares[o].filter(function(d){return u?d.create!==u:!!l&&d.name!==l})),this},et.prototype.open=function(){var s=this;return gn(Ye,function(){return ja(s)})},et.prototype._close=function(){var s=this._state,o=On.indexOf(this);if(0<=o&&On.splice(o,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}s.isBeingOpened||(s.dbReadyPromise=new G(function(l){s.dbReadyResolve=l}),s.openCanceller=new G(function(l,u){s.cancelOpen=u}))},et.prototype.close=function(l){var o=(l===void 0?{disableAutoOpen:!0}:l).disableAutoOpen,l=this._state;o?(l.isBeingOpened&&l.cancelOpen(new Q.DatabaseClosed),this._close(),l.autoOpen=!1,l.dbOpenError=new Q.DatabaseClosed):(this._close(),l.autoOpen=this._options.autoOpen||l.isBeingOpened,l.openComplete=!1,l.dbOpenError=null)},et.prototype.delete=function(s){var o=this;s===void 0&&(s={disableAutoOpen:!0});var l=0<arguments.length&&typeof arguments[0]!="object",u=this._state;return new G(function(d,h){function g(){o.close(s);var y=o._deps.indexedDB.deleteDatabase(o.name);y.onsuccess=Ie(function(){var $,S,T;$=o._deps,S=o.name,T=$.indexedDB,$=$.IDBKeyRange,gi(T)||S===hr||mi(T,$).delete(S).catch(le),d()}),y.onerror=Ut(h),y.onblocked=o._fireOnBlocked}if(l)throw new Q.InvalidArgument("Invalid closeOptions argument to db.delete()");u.isBeingOpened?u.dbReadyPromise.then(g):g()})},et.prototype.backendDB=function(){return this.idbdb},et.prototype.isOpen=function(){return this.idbdb!==null},et.prototype.hasBeenClosed=function(){var s=this._state.dbOpenError;return s&&s.name==="DatabaseClosed"},et.prototype.hasFailed=function(){return this._state.dbOpenError!==null},et.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(et.prototype,"tables",{get:function(){var s=this;return c(this._allTables).map(function(o){return s._allTables[o]})},enumerable:!1,configurable:!0}),et.prototype.transaction=function(){var s=function(o,l,u){var d=arguments.length;if(d<2)throw new Q.InvalidArgument("Too few arguments");for(var h=new Array(d-1);--d;)h[d-1]=arguments[d];return u=h.pop(),[o,jn(h),u]}.apply(this,arguments);return this._transaction.apply(this,s)},et.prototype._transaction=function(s,o,l){var u=this,d=Y.trans;d&&d.db===this&&s.indexOf("!")===-1||(d=null);var h,g,y=s.indexOf("?")!==-1;s=s.replace("!","").replace("?","");try{if(g=o.map(function(S){if(S=S instanceof u.Table?S.name:S,typeof S!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return S}),s=="r"||s===ri)h=ri;else{if(s!="rw"&&s!=ii)throw new Q.InvalidArgument("Invalid transaction mode: "+s);h=ii}if(d){if(d.mode===ri&&h===ii){if(!y)throw new Q.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");d=null}d&&g.forEach(function(S){if(d&&d.storeNames.indexOf(S)===-1){if(!y)throw new Q.SubTransaction("Table "+S+" not included in parent transaction.");d=null}}),y&&d&&!d.active&&(d=null)}}catch(S){return d?d._promise(null,function(T,w){w(S)}):Ze(S)}var $=function S(T,w,j,C,P){return G.resolve().then(function(){var D=Y.transless||Y,A=T._createTransaction(w,j,T._dbSchema,C);if(A.explicit=!0,D={trans:A,transless:D},C)A.idbtrans=C.idbtrans;else try{A.create(),A.idbtrans._explicit=!0,T._state.PR1398_maxLoop=3}catch(L){return L.name===He.InvalidState&&T.isOpen()&&0<--T._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),T.close({disableAutoOpen:!1}),T.open().then(function(){return S(T,w,j,null,P)})):Ze(L)}var R,I=rt(P);return I&&Fn(),D=G.follow(function(){var L;(R=P.call(A,A))&&(I?(L=on.bind(null,null),R.then(L,L)):typeof R.next=="function"&&typeof R.throw=="function"&&(R=Ci(R)))},D),(R&&typeof R.then=="function"?G.resolve(R).then(function(L){return A.active?L:Ze(new Q.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):D.then(function(){return R})).then(function(L){return C&&A._resolve(),A._completion.then(function(){return L})}).catch(function(L){return A._reject(L),Ze(L)})})}.bind(null,this,h,g,d,l);return d?d._promise(h,$,"lock"):Y.trans?gn(Y.transless,function(){return u._whenReady($)}):this._whenReady($)},et.prototype.table=function(s){if(!E(this._allTables,s))throw new Q.InvalidTable("Table ".concat(s," does not exist"));return this._allTables[s]},et);function et(s,o){var l=this;this._middlewares={},this.verno=0;var u=et.dependencies;this._options=o=i({addons:et.addons,autoOpen:!0,indexedDB:u.indexedDB,IDBKeyRange:u.IDBKeyRange,cache:"cloned"},o),this._deps={indexedDB:o.indexedDB,IDBKeyRange:o.IDBKeyRange},u=o.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var d,h,g,y,$,S={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:le,dbReadyPromise:null,cancelOpen:le,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:o.autoOpen};S.dbReadyPromise=new G(function(w){S.dbReadyResolve=w}),S.openCanceller=new G(function(w,j){S.cancelOpen=j}),this._state=S,this.name=s,this.on=Wn(this,"populate","blocked","versionchange","close",{ready:[Ct,le]}),this.on.ready.subscribe=nt(this.on.ready.subscribe,function(w){return function(j,C){et.vip(function(){var P,D=l._state;D.openComplete?(D.dbOpenError||G.resolve().then(j),C&&w(j)):D.onReadyBeingFired?(D.onReadyBeingFired.push(j),C&&w(j)):(w(j),P=l,C||w(function A(){P.on.ready.unsubscribe(j),P.on.ready.unsubscribe(A)}))})}}),this.Collection=(d=this,Hn(xa.prototype,function(R,A){this.db=d;var C=ls,P=null;if(A)try{C=A()}catch(I){P=I}var D=R._ctx,A=D.table,R=A.hook.reading.fire;this._ctx={table:A,index:D.index,isPrimKey:!D.index||A.schema.primKey.keyPath&&D.index===A.schema.primKey.name,range:C,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:P,or:D.or,valueMapper:R!==me?R:null}})),this.Table=(h=this,Hn(fs.prototype,function(w,j,C){this.db=h,this._tx=C,this.name=w,this.schema=j,this.hook=h._allTables[w]?h._allTables[w].hook:Wn(null,{creating:[Ve,le],reading:[$t,me],updating:[Rt,le],deleting:[nn,le]})})),this.Transaction=(g=this,Hn(ka.prototype,function(w,j,C,P,D){var A=this;this.db=g,this.mode=w,this.storeNames=j,this.schema=C,this.chromeTransactionDurability=P,this.idbtrans=null,this.on=Wn(this,"complete","error","abort"),this.parent=D||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new G(function(R,I){A._resolve=R,A._reject=I}),this._completion.then(function(){A.active=!1,A.on.complete.fire()},function(R){var I=A.active;return A.active=!1,A.on.error.fire(R),A.parent?A.parent._reject(R):I&&A.idbtrans&&A.idbtrans.abort(),Ze(R)})})),this.Version=(y=this,Hn(Da.prototype,function(w){this.db=y,this._cfg={version:w,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=($=this,Hn(bs.prototype,function(w,j,C){if(this.db=$,this._ctx={table:w,index:j===":id"?null:j,or:C},this._cmp=this._ascending=$e,this._descending=function(P,D){return $e(D,P)},this._max=function(P,D){return 0<$e(P,D)?P:D},this._min=function(P,D){return $e(P,D)<0?P:D},this._IDBKeyRange=$._deps.IDBKeyRange,!this._IDBKeyRange)throw new Q.MissingAPI})),this.on("versionchange",function(w){0<w.newVersion?console.warn("Another connection wants to upgrade database '".concat(l.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(l.name,"'. Closing db now to resume the delete request.")),l.close({disableAutoOpen:!1})}),this.on("blocked",function(w){!w.newVersion||w.newVersion<w.oldVersion?console.warn("Dexie.delete('".concat(l.name,"') was blocked")):console.warn("Upgrade '".concat(l.name,"' blocked by other connection holding version ").concat(w.oldVersion/10))}),this._maxKey=Gn(o.IDBKeyRange),this._createTransaction=function(w,j,C,P){return new l.Transaction(w,j,C,l._options.chromeTransactionDurability,P)},this._fireOnBlocked=function(w){l.on("blocked").fire(w),On.filter(function(j){return j.name===l.name&&j!==l&&!j._state.vcFired}).map(function(j){return j.on("versionchange").fire(w)})},this.use(Ra),this.use(Ba),this.use(za),this.use(Fa),this.use(Oa);var T=new Proxy(this,{get:function(w,j,C){if(j==="_vip")return!0;if(j==="table")return function(D){return Ar(l.table(D),T)};var P=Reflect.get(w,j,C);return P instanceof fs?Ar(P,T):j==="tables"?P.map(function(D){return Ar(D,T)}):j==="_createTransaction"?function(){return Ar(P.apply(this,arguments),T)}:P}});this.vip=T,u.forEach(function(w){return w(l)})}var Pr,Tt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Ma=(_i.prototype.subscribe=function(s,o,l){return this._subscribe(s&&typeof s!="function"?s:{next:s,error:o,complete:l})},_i.prototype[Tt]=function(){return this},_i);function _i(s){this._subscribe=s}try{Pr={indexedDB:a.indexedDB||a.mozIndexedDB||a.webkitIndexedDB||a.msIndexedDB,IDBKeyRange:a.IDBKeyRange||a.webkitIDBKeyRange}}catch{Pr={indexedDB:null,IDBKeyRange:null}}function js(s){var o,l=!1,u=new Ma(function(d){var h=rt(s),g,y=!1,$={},S={},T={get closed(){return y},unsubscribe:function(){y||(y=!0,g&&g.abort(),w&&cn.storagemutated.unsubscribe(C))}};d.start&&d.start(T);var w=!1,j=function(){return ni(P)},C=function(D){Er($,D),wi(S,$)&&j()},P=function(){var D,A,R;!y&&Pr.indexedDB&&($={},D={},g&&g.abort(),g=new AbortController,R=(function(I){var L=De();try{h&&Fn();var B=sn(s,I);return B=h?B.finally(on):B}finally{L&&Ne()}})(A={subscr:D,signal:g.signal,requery:j,querier:s,trans:null}),Promise.resolve(R).then(function(I){l=!0,o=I,y||A.signal.aborted||($={},(function(L){for(var B in L)if(E(L,B))return;return 1})(S=D)||w||(cn(Yn,C),w=!0),ni(function(){return!y&&d.next&&d.next(I)}))},function(I){l=!1,["DatabaseClosedError","AbortError"].includes(I?.name)||y||ni(function(){y||d.error&&d.error(I)})}))};return setTimeout(j,0),T});return u.hasValue=function(){return l},u.getValue=function(){return o},u}var vn=Jt;function Ai(s){var o=un;try{un=!0,cn.storagemutated.fire(s),$i(s,!0)}finally{un=o}}z(vn,i(i({},Oe),{delete:function(s){return new vn(s,{addons:[]}).delete()},exists:function(s){return new vn(s,{addons:[]}).open().then(function(o){return o.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(s){try{return o=vn.dependencies,l=o.indexedDB,o=o.IDBKeyRange,(gi(l)?Promise.resolve(l.databases()).then(function(u){return u.map(function(d){return d.name}).filter(function(d){return d!==hr})}):mi(l,o).toCollection().primaryKeys()).then(s)}catch{return Ze(new Q.MissingAPI)}var o,l},defineClass:function(){return function(s){m(this,s)}},ignoreTransaction:function(s){return Y.trans?gn(Y.transless,s):s()},vip:bi,async:function(s){return function(){try{var o=Ci(s.apply(this,arguments));return o&&typeof o.then=="function"?o:G.resolve(o)}catch(l){return Ze(l)}}},spawn:function(s,o,l){try{var u=Ci(s.apply(l,o||[]));return u&&typeof u.then=="function"?u:G.resolve(u)}catch(d){return Ze(d)}},currentTransaction:{get:function(){return Y.trans||null}},waitFor:function(s,o){return o=G.resolve(typeof s=="function"?vn.ignoreTransaction(s):s).timeout(o||6e4),Y.trans?Y.trans.waitFor(o):o},Promise:G,debug:{get:function(){return Ae},set:function(s){Be(s)}},derive:te,extend:m,props:z,override:nt,Events:Wn,on:cn,liveQuery:js,extendObservabilitySet:Er,getByKeyPath:Te,setByKeyPath:Ue,delByKeyPath:function(s,o){typeof o=="string"?Ue(s,o,void 0):"length"in o&&[].map.call(o,function(l){Ue(s,l,void 0)})},shallowClone:Ot,deepClone:O,getObjectDiff:ki,cmp:$e,asap:ge,minKey:-1/0,addons:[],connections:On,errnames:He,dependencies:Pr,cache:wn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(s){return parseInt(s)}).reduce(function(s,o,l){return s+o/Math.pow(10,2*l)})})),vn.maxKey=Gn(vn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(cn(Yn,function(s){un||(s=new CustomEvent(li,{detail:s}),un=!0,dispatchEvent(s),un=!1)}),addEventListener(li,function(s){s=s.detail,un||Ai(s)}));var In,un=!1,Fs=function(){};return typeof BroadcastChannel<"u"&&((Fs=function(){(In=new BroadcastChannel(li)).onmessage=function(s){return s.data&&Ai(s.data)}})(),typeof In.unref=="function"&&In.unref(),cn(Yn,function(s){un||In.postMessage(s)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(s){if(!Jt.disableBfCache&&s.persisted){Ae&&console.debug("Dexie: handling persisted pagehide"),In?.close();for(var o=0,l=On;o<l.length;o++)l[o].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(s){!Jt.disableBfCache&&s.persisted&&(Ae&&console.debug("Dexie: handling persisted pageshow"),Fs(),Ai({all:new ht(-1/0,[[]])}))})),G.rejectionMapper=function(s,o){return!s||s instanceof Le||s instanceof TypeError||s instanceof SyntaxError||!s.name||!Ke[s.name]?s:(o=new Ke[s.name](o||s.message,s),"stack"in s&&q(o,"stack",{get:function(){return this.inner.stack}}),o)},Be(Ae),i(Jt,Object.freeze({__proto__:null,Dexie:Jt,liveQuery:js,Entity:cs,cmp:$e,PropModSymbol:Xt,PropModification:Kn,replacePrefix:function(s,o){return new Kn({replacePrefix:[s,o]})},add:function(s){return new Kn({add:s})},remove:function(s){return new Kn({remove:s})},default:Jt,RangeSet:ht,mergeRanges:Qn,rangesOverlap:$s}),{default:Jt}),Jt})})(zr)),zr.exports}var Cl=$l();const Li=vl(Cl),Vs=Symbol.for("Dexie"),Mr=globalThis[Vs]||(globalThis[Vs]=Li);if(Li.semVer!==Mr.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Li.semVer} and ${Mr.semVer}`);const{liveQuery:To,mergeRanges:Rf,rangesOverlap:zf,RangeSet:If,cmp:Lf,Entity:Bf,PropModSymbol:Mf,PropModification:Nf,replacePrefix:qf,add:Uf,remove:Wf}=Mr,kl="easydb";let Dr=null;function El(){if(Dr)return Dr;const e=new Mr(kl);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),Dr={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins")},Dr}function jr(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const r=Object.entries(t);return e.filter(i=>Do(i,r)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,r){if(await e.update(t,r)===0)throw new Error(`patch: no doc with id=${t}`);const n=await e.get(t);if(!n)throw new Error(`patch: doc id=${t} vanished after update`);return n},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const i=To(()=>e.toArray()).subscribe({next:n=>t(n)});return()=>i.unsubscribe()}}}function Sl(e,t){return{async find(r){const i=e.where("tableId").equals(t);if(!r||Object.keys(r).length===0)return i.toArray();const n=Object.entries(r);return i.filter(a=>Do(a,n)).toArray()},async findOne(r){const i=await e.get(r);return i&&i.tableId===t?i:null},async insert(r){const i={...r,tableId:t};return await e.add(i),i},async bulkInsert(r){if(r.length===0)return[];const i=r.map(n=>({...n,tableId:t}));return await e.bulkAdd(i),i},async upsert(r){const i={...r,tableId:t};return await e.put(i),i},async patch(r,i){if(await e.update(r,i)===0)throw new Error(`row patch: no row ${r}`);const a=await e.get(r);if(!a)throw new Error(`row patch: row ${r} vanished after update`);return a},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},subscribe(r){const n=To(()=>e.where("tableId").equals(t).toArray()).subscribe({next:a=>r(a)});return()=>n.unsubscribe()}}}function Do(e,t){for(const[r,i]of t)if(e[r]!==i)return!1;return!0}function _l(e){return{workspaces:jr(e.workspaces),tables:jr(e.tables),settings:jr(e.settings),plugins:jr(e.plugins),rows:t=>Sl(e.rows,t)}}function Al(e){const{base:t,providers:r,tableById:i,ctx:n}=e,a=new Map;return{...t,rows(c){const f=i(c),m=f?.source;if(m){const k=r.get(m.type);if(k){const _=JSON.stringify(m),E=a.get(c);if(E&&E.key===_)return E.coll;const z=k.create(f,n);return a.set(c,{key:_,coll:z}),z}}return a.delete(c),t.rows(c)}}}function Pl(){const e=new Map;return{on(t,r){let i=e.get(t);return i||(i=new Set,e.set(t,i)),i.add(r),()=>{i.delete(r)}},emit(t,r){const i=e.get(t);if(i)for(const n of i)try{n(r)}catch(a){console.error(`[event:${String(t)}] listener threw`,a)}}}}const fn=ot`
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
`;function Tn(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const r=t.querySelector("form");r&&(e.preventDefault(),r.requestSubmit())}const Ys=new WeakSet;function hn(e,t){if(Ys.has(t))return;Ys.add(t);let r=0,i=0,n=0,a=0,c=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",m=>{if(m.target.closest("button, input, textarea, select, a, label"))return;c=!0,r=m.clientX,i=m.clientY;const _=e.getBoundingClientRect();n=_.left,a=_.top,t.setPointerCapture(m.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",m=>{if(!c)return;const k=m.clientX-r,_=m.clientY-i,E=-e.offsetWidth+80,z=window.innerWidth-80,M=0,q=window.innerHeight-40,te=Math.max(E,Math.min(z,n+k)),de=Math.max(M,Math.min(q,a+_));e.style.position="fixed",e.style.left=`${te}px`,e.style.top=`${de}px`,e.style.margin="0"});const f=m=>{if(c){c=!1;try{t.releasePointerCapture(m.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",f),t.addEventListener("pointercancel",f)}var Tl=Object.defineProperty,Dl=Object.getOwnPropertyDescriptor,jo=(e,t,r,i)=>{for(var n=i>1?void 0:i?Dl(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Tl(t,r,n),n};let Dt=class extends tt{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),Dt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Dt.instance===this&&(Dt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&hn(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:t,message:e,resolve:r}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",r="Input"){return this.enqueue(i=>{this.current={kind:"prompt",title:r,message:e,value:t,resolve:i}})}choice(e,t,r="Choose"){return this.enqueue(i=>{this.current={kind:"choice",title:r,message:e,options:t,resolve:i}})}enqueue(e){return new Promise(t=>{const r=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const r=this.queue.shift();r&&r()}))}render(){const e=this.current;return H`
      <dialog @cancel=${this.onCancel} @keydown=${Tn}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):Re}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return H`
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
        `;case"prompt":return H`
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
        `;case"choice":return H`
          <div class="dialog-header">
            <h2>${e.title}</h2>
            <div class="header-actions">
              <button class="ghost" @click=${()=>this.closeAndResolve(null)}>Cancel</button>
            </div>
          </div>
          <div class="dialog-body">
            ${e.message?H`<p class="message">${e.message}</p>`:Re}
            <div class="choices">
              ${e.options.map(t=>H`<button class="choice" @click=${()=>this.closeAndResolve(t)}>
                    ${t}
                  </button>`)}
            </div>
          </div>
        `}}};Dt.instance=null;Dt.styles=[fn,ot`
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
    `];jo([ee()],Dt.prototype,"current",2);Dt=jo([dt("host-dialogs")],Dt);const en=ot`
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
`;var jl=Object.defineProperty,Fl=Object.getOwnPropertyDescriptor,Fo=(e,t,r,i)=>{for(var n=i>1?void 0:i?Fl(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&jl(t,r,n),n};let Qt=class extends tt{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),Qt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Qt.instance===this&&(Qt.instance=null)}show(e,t){const r={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,r];const i=t?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),i)}dismiss(e){const t=this.toasts.find(r=>r.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(r=>r.id!==e)}render(){return H`
      ${this.toasts.map(e=>H`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${Rl(e.kind)}</span>
            <span class="body">
              ${e.title?H`<strong>${e.title}</strong>`:""}${Ol(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};Qt.instance=null;Qt.styles=[en,ot`
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
    `];Fo([ee()],Qt.prototype,"toasts",2);Qt=Fo([dt("toast-host")],Qt);function Ol(e){const t=/(https?:\/\/[^\s)]+)/g,r=[];let i=0,n;for(;(n=t.exec(e))!==null;)n.index>i&&r.push(e.slice(i,n.index)),r.push({url:n[0]}),i=n.index+n[0].length;return i<e.length&&r.push(e.slice(i)),r.length===0?e:r.map(a=>typeof a=="string"?a:H`<a href=${a.url} target="_blank" rel="noopener noreferrer">${a.url}</a>`)}function Rl(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function zl(){return{headerButtons:[],footerButtons:[],tableButtons:[],importers:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map}}function Cn(e,t){return e.push(t),()=>{const r=e.indexOf(t);r>=0&&e.splice(r,1)}}function Di(e,t,r){return e.set(t,r),()=>{e.get(t)===r&&e.delete(t)}}function Il(e){return{registerHeaderButton:t=>Cn(e.headerButtons,t),registerFooterButton:t=>Cn(e.footerButtons,t),registerTableButton:t=>Cn(e.tableButtons,t),registerImporter:t=>Cn(e.importers,t),registerExporter:t=>Cn(e.exporters,t),registerUrlSource:t=>Cn(e.urlSources,t),registerDropHandler:t=>Cn(e.dropHandlers,t),registerCellRenderer:(t,r)=>Di(e.cellRenderers,t,r),registerRowRenderer:(t,r)=>Di(e.rowRenderers,t,r),registerTableRenderer:(t,r)=>Di(e.tableRenderers,t,r),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},dialogs:Ll}}const Ll={async alert(e,t){const r=Dt.instance;if(r)return r.alert(e,t);window.alert(e)},async confirm(e,t){const r=Dt.instance;return r?r.confirm(e,t):window.confirm(e)},async prompt(e,t,r){const i=Dt.instance;return i?i.prompt(e,t,r):window.prompt(e,t)??null},async choice(e,t,r){const i=Dt.instance;if(i)return i.choice(e,t,r);const n=window.prompt(`${e}

Options: ${t.join(", ")}`);return n&&t.includes(n)?n:null},toast(e,t){const r=Qt.instance;r?r.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}};function Bl(e){const t=Il(e.registries),r=e.registries.rowSources,i=a=>(r.set(a.type,a),()=>{r.get(a.type)===a&&r.delete(a.type)}),n={open(a){return console.warn("[host] windows.open is stubbed until Phase 5",a.id),{id:a.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:n,registerRowSource:i,backend:{fetch:async(a,c)=>{const f=await Ml(e.store),m=c?.body instanceof ArrayBuffer;if(!f||m)return globalThis.fetch(a,c);const k={url:a};return c?.method&&(k.method=c.method),c?.headers&&(k.headers=c.headers),typeof c?.body=="string"&&(k.body=c.body),globalThis.fetch(`${f}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(k)})},async saveFile(a,c,f){const m=typeof c=="string"?new Blob([c],{type:f??"application/octet-stream"}):c,k=URL.createObjectURL(m),_=document.createElement("a");_.href=k,_.download=a,_.rel="noopener",document.body.appendChild(_),_.click(),_.remove(),setTimeout(()=>URL.revokeObjectURL(k),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function Ml(e){const r=(await e.settings.findOne("server-sync:url"))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}const Nl={name:"csv-import",version:"0.1.0",description:"Drag-and-drop CSV files to create typed tables.",author:"easyDBAccess built-ins"};function ql(e){e.ui.registerImporter(Ul),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const i=tc(t).filter(nc);if(i.length===0)return!1;t.preventDefault();for(const n of i)await Wl(e,n);return!0})}const Ul={id:"csv",label:"CSV",accept:[".csv","text/csv"],async parse(e){const t=typeof e=="string"?e:await e.text();return Vr(t)}};async function Wl(e,t){const r=e.workspaceId();if(!r)throw new Error("csv-import: no active workspace");const i=await t.text(),n=t.name.replace(/\.csv$/i,"")||"imported",a=(await e.store.tables.find()).find(_=>_.workspaceId===r&&_.name===n);let c,f;if(a){const _=await e.ui.dialogs.choice(`A table named "${n}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!_)return;_==="Append rows"?(f="append",c=a.id):_==="Overwrite rows"?(f="overwrite",c=a.id):(f="new",c=Fr())}else f="new",c=Fr();e.events.emit("import:before",{source:"csv",tableId:c});let m;if(f==="new"){const _=Vr(i),E=a?`${n} (${Date.now().toString(36)})`:n;await e.store.tables.insert({id:c,workspaceId:r,name:E,code:Bi(E),columns:_.columns,view:"table",updatedAt:Date.now()}),m=_.rows.map(z=>({id:Fr(),tableId:c,data:z,updatedAt:Date.now()}))}else{const _=a.columns;if(m=Oo(i).rows.map(z=>{const M={};for(let q=0;q<_.length;q++){const te=_[q];M[te.field]=Io(z[q]??"",te.type)}return{id:Fr(),tableId:c,data:M,updatedAt:Date.now()}}),f==="overwrite"){const z=e.store.rows(c),M=await z.find();await z.bulkRemove(M.map(q=>q.id))}}await e.store.rows(c).bulkInsert(m),e.events.emit("import:after",{source:"csv",tableId:c,rowCount:m.length})}function Oo(e){const t=e.replace(/﻿/,""),r=Ro(t),i=zo(t,r);if(i.length===0)return{header:[],rows:[]};const n=i[0],a=i.slice(1).filter(c=>!(c.length===1&&c[0]===""));return{header:n,rows:a}}function Vr(e){const t=e.replace(/﻿/,""),r=Ro(t),i=zo(t,r);if(i.length===0)return{columns:[],rows:[]};const n=i[0],a=i.slice(1).filter(z=>!(z.length===1&&z[0]==="")),c=n.map((z,M)=>Vl(z,M)),f=c.map(z=>z.field),m=a.map(z=>{const M={};for(let q=0;q<f.length;q++)M[f[q]]=z[q]??"";return M}),k=c.map((z,M)=>z.type?z.type:Yl(m.map(q=>q[f[M]]??"").filter(q=>q.length>0))),_=c.map((z,M)=>{const q=k[M]??"string",te={field:z.field,label:z.label,type:q},de=Kl(q),ue=z.renderer??de;return ue&&(te.renderer=ue),z.default!==void 0&&(te.default=z.default),z.max!=null&&(te.max=z.max),z.unique&&(te.unique=!0),z.notnull&&(te.notnull=!0),z.hidden&&(te.hidden=!0),te}),E=m.map(z=>{const M={};for(let q=0;q<f.length;q++){const te=f[q],de=k[q]??"string";M[te]=Io(z[te]??"",de)}return M});return{columns:_,rows:E}}const Hl=new Set(["string","number","boolean","date","datetime"]),Gs={color:"color",image:"image"};function Kl(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function Vl(e,t){const r=e.trim();if(!r.includes(":"))return{field:Bi(r||`col_${t+1}`),label:r||`Column ${t+1}`};const i=r.split(":"),n=Bi(i[0]||`col_${t+1}`),a=(i[1]??i[0]??"").trim()||n,c={field:n,label:a},f=(i[2]??"").trim();f&&(Hl.has(f)?c.type=f:Gs[f]&&(c.type="string",c.renderer=Gs[f]));const m=(i[3]??"").trim();m&&(c.default=m);const k=(i[4]??"").trim();if(k){const E=Number(k);Number.isFinite(E)&&E>0&&(c.max=E)}const _=(i[5]??"").toLowerCase();return _.includes("u")&&(c.unique=!0),_.includes("n")&&(c.notnull=!0),_.includes("h")&&(c.hidden=!0),c}function Ro(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),r={",":0,";":0,"	":0};for(const a of t)a in r&&(r[a]+=1);let i=",",n=-1;for(const a of[",",";","	"])(r[a]??0)>n&&(i=a,n=r[a]??0);return i}function zo(e,t){const r=[];let i=[],n="",a=!1;for(let c=0;c<e.length;c++){const f=e[c];a?f==='"'?e[c+1]==='"'?(n+='"',c++):a=!1:n+=f:f==='"'?a=!0:f===t?(i.push(n),n=""):f===`
`||f==="\r"?(f==="\r"&&e[c+1]===`
`&&c++,i.push(n),r.push(i),i=[],n=""):n+=f}return(n.length>0||i.length>0)&&(i.push(n),r.push(i)),r}function Yl(e){return e.length===0?"string":e.every(Xl)?"boolean":e.every(Jl)?"number":e.every(Zl)?"datetime":e.every(Ql)?"date":"string"}const Gl=/^(true|false|yes|no|0|1)$/i;function Xl(e){return Gl.test(e.trim())}function Jl(e){const t=e.trim();if(t==="")return!1;const r=Number(t);return Number.isFinite(r)}function Ql(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function Zl(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function Io(e,t){const r=e.trim();switch(t){case"number":{if(r==="")return null;const i=Number(r);return Number.isFinite(i)?i:r}case"boolean":return r===""?null:/^(true|yes|1)$/i.test(r);case"date":return Lo(r);case"datetime":return ec(r);default:return e}}function Lo(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){let i=parseInt(t[1],10),n=parseInt(t[2],10);const a=t[3];let c=parseInt(a,10);a.length===2&&(c+=2e3);let f,m;return i>12?(f=i,m=n):n>12?(m=i,f=n):(f=i,m=n),`${c.toString().padStart(4,"0")}-${m.toString().padStart(2,"0")}-${f.toString().padStart(2,"0")}`}const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toISOString().slice(0,10)}function ec(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),r=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(r)return`${r[1]}T${r[2].padStart(5,"0")}`;const i=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(i)return`${Lo(`${i[1]}/${i[2]}/${i[3]}`)}T${i[4].padStart(5,"0")}`;const n=new Date(e);if(!Number.isNaN(n.getTime())){const a=n.toISOString();return`${a.slice(0,10)}T${a.slice(11,16)}`}return e}function tc(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function nc(e){return!!(/\.csv$/i.test(e.name)||e.type==="text/csv"||e.type==="application/csv")}function Bi(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function Fr(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const rc=Object.freeze(Object.defineProperty({__proto__:null,init:ql,meta:Nl,parseCsv:Vr,parseCsvRaw:Oo},Symbol.toStringTag,{value:"Module"})),ic={name:"csv-export",version:"0.1.0",description:"Export a single table as a .csv file via a per-table button.",author:"easyDBAccess built-ins"},sc={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return Qi(e,t)}};function oc(e){e.ui.registerExporter(sc),e.ui.registerTableButton({id:"csv-export:download",label:"CSV",icon:"file_download",tooltip:"Download this table as a .csv file",onClick:async(t,r)=>{const i=await t.store.tables.findOne(r.tableId);if(!i)return;const n=await t.store.rows(i.id).find(),a=Qi(i,n);await t.backend.saveFile(`${i.code||i.name||"table"}.csv`,a,"text/csv")}})}function Qi(e,t){const r=e.columns.map(a=>a.field),i=e.columns.map(a=>Xs(a.label??a.field)),n=t.map(a=>r.map(c=>Xs(ac(a.data[c]))).join(","));return[i.join(","),...n].join(`\r
`)}function ac(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function Xs(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const lc=Object.freeze(Object.defineProperty({__proto__:null,init:oc,meta:ic,serializeCsv:Qi},Symbol.toStringTag,{value:"Module"}));var cc=Object.defineProperty,uc=Object.getOwnPropertyDescriptor,Un=(e,t,r,i)=>{for(var n=i>1?void 0:i?uc(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&cc(t,r,n),n};function Mi(e,t={}){return(_t.instance??dc()).open(e,t)}function dc(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function fc(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let _t=class extends tt{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((r,i)=>r?i:-1).filter(r=>r>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),_t.instance=this}disconnectedCallback(){super.disconnectedCallback(),_t.instance===this&&(_t.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&hn(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(()=>!0),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(r=>{this.resolveFn=r,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return H`
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
            ${this.message?H`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            <ul class="tables">
              ${this.items.map((t,r)=>H`
                  <li>
                    <input
                      type="checkbox"
                      id=${`tsel-${r}`}
                      .checked=${this.selected[r]??!1}
                      @change=${()=>this.toggle(r)}
                    />
                    <label for=${`tsel-${r}`}>
                      <span class="name">${t.name}</span>
                      <span class="size">${fc(t.size)}</span>
                      ${t.detail?H`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};_t.instance=null;_t.styles=[fn,ot`
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
      input[type='checkbox'] {
        width: 1rem;
        height: 1rem;
      }
      button.primary:disabled {
        background: #93c5fd;
        cursor: default;
      }
    `];Un([ee()],_t.prototype,"items",2);Un([ee()],_t.prototype,"selected",2);Un([ee()],_t.prototype,"heading",2);Un([ee()],_t.prototype,"message",2);Un([ee()],_t.prototype,"confirmLabel",2);_t=Un([dt("table-select-dialog")],_t);const hc={name:"json-import",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"easyDBAccess built-ins"};function pc(e){e.ui.registerImporter(mc),e.ui.registerDropHandler(async t=>{const i=$c(t).filter(Cc);if(i.length===0)return!1;t.preventDefault();for(const n of i)await gc(e,n);return!0})}const mc={id:"json",label:"JSON",accept:[".json",".db.json","application/json"],async parse(e){const t=typeof e=="string"?e:await e.text(),r=JSON.parse(t),n=Yr(r,"imported")[0];return{columns:n?.columns??[],rows:n?.rows??[]}}};async function gc(e,t){await Zi(e,await t.text(),t.name)}async function Zi(e,t,r){const i=e.workspaceId();if(!i)throw new Error("json-import: no active workspace");let n;try{n=JSON.parse(t)}catch(M){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${r}: ${M.message}`)});return}const a=r.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",c=Yr(n,a);if(c.length===0)return;let f=c;if(c.length>1){const M=await Mi(c.map(q=>({name:q.name,size:q.rows.length})),{title:"Import tables",message:`"${r}" contains ${c.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!M)return;f=M.map(q=>c[q])}const m=(await e.store.tables.find()).filter(M=>M.workspaceId===i),k=new Set(f.map(M=>M.name)),_=m.filter(M=>k.has(M.name));let E;if(_.length===0&&f.length===1)E="append-new";else{const M=_.length>0?[`Overwrite matching (${_.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],q=await e.ui.dialogs.choice(`Importing ${f.length} table${f.length===1?"":"s"} from "${r}".${_.length>0?`

${_.length} table${_.length===1?"":"s"} share a name with existing data.`:""}`,M,"JSON import");if(!q)return;q.startsWith("Overwrite matching")?E="overwrite-matching":q==="Replace entire workspace"?E="replace-workspace":E="append-new"}if(E==="replace-workspace")for(const M of m){const q=e.store.rows(M.id),te=await q.find();await q.bulkRemove(te.map(de=>de.id)),await e.store.tables.remove(M.id)}const z=new Map(m.map(M=>[M.name,M]));for(const M of f){let q;const te=E==="overwrite-matching"?z.get(M.name):void 0;if(te){q=te.id;const Pe=e.store.rows(q),nt=await Pe.find();await Pe.bulkRemove(nt.map(ae=>ae.id)),await e.store.tables.patch(q,{columns:M.columns,...M.windowGeometry?{windowGeometry:M.windowGeometry}:{},...M.sortColumn?{sortColumn:M.sortColumn,sortAsc:M.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},updatedAt:Date.now()})}else q=eo(),e.events.emit("import:before",{source:"json",tableId:q}),await e.store.tables.insert({id:q,workspaceId:i,name:M.name,code:kc(M.name),columns:M.columns,view:"table",...M.windowGeometry?{windowGeometry:M.windowGeometry}:{},...M.sortColumn?{sortColumn:M.sortColumn,sortAsc:M.sortAsc??!0}:{},updatedAt:Date.now()});const de=e.store.rows(q),ue=M.rows.map(Pe=>({id:eo(),tableId:q,data:Pe,updatedAt:Date.now()}));await de.bulkInsert(ue),e.events.emit("import:after",{source:"json",tableId:q,rowCount:M.rows.length})}}function Yr(e,t){if(It(e)&&Js(e))return Qs(e);if(It(e)&&Array.isArray(e.tables)){const r=e,i=[];for(const n of r.tables){if(yc(n)){const a=n,c=It(a.windowGeometry)?a.windowGeometry:void 0,f=typeof a.sortColumn=="string"?a.sortColumn:void 0,m=typeof a.sortAsc=="boolean"?a.sortAsc:void 0;i.push({name:String(n.name),columns:n.columns.map(wc),rows:Array.isArray(n.rows)?n.rows.filter(It):[],...c?{windowGeometry:c}:{},...f?{sortColumn:f,sortAsc:m??!0}:{}});continue}It(n)&&Js(n)&&i.push(...Qs(n))}return i}if(Array.isArray(e)){const r=e.filter(It);return r.length===0?[]:[{name:t,...Zs(r)}]}return It(e)?[{name:t,...Zs([e])}]:[]}function Js(e){for(const[t,r]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!It(r))continue;const i=r;if(Array.isArray(i.dataArray)&&Array.isArray(i.columns))return!0}return!1}function Qs(e){const t=[];for(const[r,i]of Object.entries(e)){if(!/\.table\.json$/.test(r)||!It(i))continue;const n=i;if(!Array.isArray(n.dataArray)||!Array.isArray(n.columns))continue;const a=r.replace(/\.table\.json$/,""),c=n.columns.map(_=>bc(_)),f=c.map(_=>_.field),m=n.dataArray.filter(_=>Array.isArray(_)).map(_=>{const E={};for(let z=0;z<f.length;z++)E[f[z]]=_[z];return E}),k={name:a,columns:c,rows:m};if(n.elementRect&&typeof n.elementRect.x=="number"&&typeof n.elementRect.y=="number"){const _=n.elementRect;k.windowGeometry={x:_.x,y:_.y,w:_.width??600,h:_.height??400,z:_.zIndex??100,minimized:!!_.minimized,maximized:!!_.maximized}}typeof n.sortColumn=="number"&&n.sortColumn>=0&&n.sortColumn<f.length&&(k.sortColumn=f[n.sortColumn],k.sortAsc=(n.sortDirection??"asc")!=="desc"),t.push(k)}return t}function bc(e){const t=String(e.field??"col"),r=String(e.name??t),i=typeof e.type=="string"?e.type:"string",n={field:t,label:r,type:i};return e.isUnique&&(n.unique=!0),e.isNotNull&&(n.notnull=!0),n}function yc(e){return It(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function wc(e){if(!It(e))return{field:"col",label:"Col",type:"string"};const t=e,r=String(t.field??"col");let i=typeof t.type=="string"?t.type:"string",n=typeof t.renderer=="string"?t.renderer:void 0;(i==="color"||i==="image")&&(n=n??i,i="string");const a={field:r,label:String(t.label??r),type:i};return n&&(a.renderer=n),typeof t.script=="string"&&(a.script=t.script),a}function Zs(e){const t=new Set;for(const n of e)for(const a of Object.keys(n))t.add(a);return{columns:Array.from(t).map(n=>({field:n,label:n,type:vc(e.map(a=>a[n]))})),rows:e}}function vc(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&xc(r))?"date":"string"}function xc(e){if(/^\d+$/.test(e))return!1;const t=new Date(e);return!Number.isNaN(t.getTime())}function It(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function $c(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function Cc(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}function kc(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function eo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Ec=Object.freeze(Object.defineProperty({__proto__:null,importJsonText:Zi,init:pc,meta:hc,parsedToTables:Yr},Symbol.toStringTag,{value:"Module"}));class Ht extends Error{constructor(t,r){const i=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(i),this.name="DatasetteError",this.status=r??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function Dn(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const r=t.pathname.split("/").filter(Boolean),i={};for(const[f,m]of t.searchParams)i[f]=m;let n,a=null,c=null;if(r.length>=2){c=decodeURIComponent(r[r.length-1]),a=decodeURIComponent(r[r.length-2]);const f=r.slice(0,r.length-2).join("/");n=t.origin+(f?"/"+f:"")}else r.length===1&&(a=decodeURIComponent(r[0])),n=t.origin;return{base:n,db:a,table:c,query:i}}function Nr(e,t={}){const r=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[i,n]of Object.entries({...e.query,...t}))n!=null&&r.searchParams.set(i,String(n));return r.toString()}function Sc(e){const t=e?.next_url??null,r=e?.next,i=r!=null&&r!==!1?String(r):null,n=Array.isArray(e?.rows)?e.rows:[],a=Array.isArray(e?.columns)?e.columns:null;return{rows:n.map(f=>Array.isArray(f)&&a?Object.fromEntries(a.map((m,k)=>[m,f[k]])):f),nextUrl:t,nextToken:i,hasMore:t!=null||i!=null,truncated:e?.truncated===!0}}function _c(e,t=""){const r=String(e||"").toUpperCase();return r.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":r.includes("REAL")||r.includes("FLOA")||r.includes("DOUB")||r.includes("NUM")||r.includes("DEC")?"number":r.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function Ac(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],r=Array.isArray(e?.columns)?e.columns.slice():[],i={},n=e?.column_details;if(Array.isArray(n))for(const f of n)i[f.column??f.name]=f;else n&&typeof n=="object"&&Object.assign(i,n);for(const f of r)f in i||(i[f]={});return{columns:(r.length?r:Object.keys(i)).map(f=>{const m=i[f]||{},k=m.is_pk===!0||m.is_pk===1||t.includes(f),_={field:f,label:Bo(f),type:_c(m.sqlite_type??m.type,f)};return(m.notnull===!0||m.notnull===1||k)&&(_.notnull=!0),k&&(_.unique=!0),m.hidden===!0&&(_.hidden=!0),_}),pks:t}}function Bo(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function es(e){const t=[],r=new Set;for(const i of e)for(const n of Object.keys(i))r.has(n)||(r.add(n),t.push(n));return t.map(i=>({field:i,label:Bo(i),type:Pc(e.map(n=>n[i]))}))}function Pc(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&Tc(r))?"datetime":"string"}function Tc(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function Dc(e){const t=new TextEncoder().encode(String(e));let r="";for(const i of t){const n=String.fromCharCode(i);/[A-Za-z0-9_-]/.test(n)?r+=n:r+="~"+i.toString(16).toUpperCase().padStart(2,"0")}return r}function jc(e,t){return!t||t.length===0?null:t.map(r=>Dc(e[r])).join(",")}function Fc(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],r=[];for(const i of t){if(typeof i=="string"){r.push(i);continue}if(i&&typeof i=="object"&&typeof i.name=="string"){if(i.name==="_memory")continue;r.push(typeof i.route=="string"&&i.route?i.route:i.name)}}return r}function Oc(e,t){const r=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],i=[];for(const n of r){if(typeof n=="string"){i.push({db:t,table:n,count:null,hidden:!1,pks:[]});continue}n&&typeof n=="object"&&typeof n.name=="string"&&i.push({db:t,table:n.name,count:typeof n.count=="number"?n.count:null,hidden:n.hidden===!0,pks:Array.isArray(n.primary_keys)?n.primary_keys:[]})}return i}async function or(e,t){let r;try{r=await e(t)}catch(n){const a=n?.message||"network error";throw new Ht({error:`Couldn't reach ${t} (${a}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(r&&r.ok===!1){let n=null;try{n=await r.json()}catch{}throw new Ht(n&&typeof n=="object"?n:{error:`HTTP ${r.status} for ${t}`},r.status)}const i=await r.json();if(i&&i.ok===!1)throw new Ht(i,r.status);return i}async function Mo(e,t){return Fc(await or(e,`${t}/-/databases.json`))}async function to(e,t,r){return Oc(await or(e,`${t}/${encodeURIComponent(r)}.json`),r)}async function No(e,t){const r=Nr(t,{_extra:"columns"}),i=await or(e,r),{columns:n,pks:a}=Ac(i),c=!!i&&i.column_details!=null;return{columns:n,pks:a,count:i?.count??null,typed:c,raw:i}}function qo(e,t){if(t.length===0)return e;const r=new Map(es(t).map(i=>[i.field,i.type]));return e.map(i=>{if(i.type!=="string")return i;const n=r.get(i.field);return n&&n!=="string"?{...i,type:n}:i})}async function Gr(e,t,r={}){const i=r.maxRows??1e4,a={_size:r.pageSize??1e3,...r.extraParams||{}};let c=Nr(t,a);const f=[];let m=!1,k=!1,_=0;for(;c;){const E=await or(e,c),z=Sc(E);f.push(...z.rows),m=m||z.truncated,_+=1;const M=z.nextUrl!=null?z.nextUrl:z.nextToken!=null?Nr(t,{_next:z.nextToken}):null;M&&f.length<i&&z.rows.length>0?c=M:(k=M!=null&&z.rows.length>0,c=null)}return{rows:f,truncated:m,hasMore:k,pages:_}}function Rc(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function Uo(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function Wo(e,t,r){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${r}`}async function Xr(e,t,r,i){let n;try{n=await e(t,{method:"POST",headers:Rc(i),body:JSON.stringify(r)})}catch(c){throw new Ht({error:`Couldn't reach ${t} (${c?.message||"network error"}).`},0)}if(n&&n.ok===!1){let c=null;try{c=await n.json()}catch{}throw new Ht(c&&typeof c=="object"?c:{error:`HTTP ${n.status} for ${t}`},n.status)}const a=await n.json();if(a&&a.ok===!1)throw new Ht(a,n.status);return a}async function no(e,t,r,i={}){const n=await Xr(e,Uo(t,"insert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function zc(e,t,r,i,n={}){const a=await Xr(e,Wo(t,r,"update"),{update:i,return:!0},n.token);return a&&typeof a.row=="object"&&a.row?a.row:Array.isArray(a?.rows)&&a.rows[0]?a.rows[0]:null}async function ro(e,t,r,i={}){await Xr(e,Wo(t,r,"delete"),{},i.token)}async function Ic(e,t,r,i={}){const n=await Xr(e,Uo(t,"upsert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function Lc(e,t){const r=Nr(t,{_extra:"primary_keys"}),i=await or(e,r);return Array.isArray(i?.primary_keys)?i.primary_keys:[]}async function Ho(e,t,r={}){const i=r.token?{headers:{Authorization:`Bearer ${r.token}`}}:void 0;try{const n=await e(`${t}/-/versions.json`,i);if(n&&n.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${n.status}`};const a=await n.json(),c=a?.datasette?.version??a?.version??null;let f=null;try{f=(await(await e(`${t}/-/actor.json`,i)).json())?.actor??null}catch{}return{reachable:!0,version:c,actor:f,writable:!!(r.token&&f)}}catch(n){return{reachable:!1,version:null,actor:null,writable:!1,error:n?.message||"unreachable"}}}function ts(e,t){return t?(r,i)=>{const n=(i??{}).headers??{};return e(r,{...i??{},headers:{...n,Authorization:`Bearer ${t}`}})}:e}class Bc extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function Ko(e){return`datasette:token:${e}`}function Mc(e,t){for(const[r,i]of Object.entries(t))if(r!=="data"&&e[r]!==i)return!1;return!0}function Nc(e,t){const r=e.source,i=r?.config??{},n={base:i.base,db:i.db,table:i.table,query:{}},a=Array.isArray(i.pks)&&i.pks.length>0?i.pks:["rowid"],c=r?.writable===!0,f=i.maxRows??1e4,m=i.pollIntervalMs??0,k=(ae,ge)=>t.backend.fetch(ae,ge);async function _(){const ge=(await t.settings.findOne(Ko(i.base)))?.value;return typeof ge=="string"&&ge.length>0?ge:void 0}const E=async(ae,ge)=>ts(k,await _())(ae,ge);function z(ae){return{id:jc(ae,a)??qc(),tableId:e.id,data:ae,updatedAt:Date.now()}}function M(ae){if(!c)throw new Bc(ae)}function q(ae){const ge={};for(const[Te,Ue]of Object.entries(ae))a.includes(Te)||(ge[Te]=Ue);return ge}const te=new Set;let de=[],ue=!1,Pe=null;function nt(){return Pe||(Pe=(async()=>{try{const{rows:ae}=await Gr(E,n,{maxRows:f});de=ae.map(z),ue=!0;for(const ge of te)ge(de);return de}finally{Pe=null}})(),Pe)}return{async find(ae){const ge=ue?de:await nt();return!ae||Object.keys(ae).length===0?ge:ge.filter(Te=>Mc(Te,ae))},async findOne(ae){return(ue?de:await nt()).find(Te=>Te.id===ae)??null},async insert(ae){M("insert");const[ge]=await no(E,n,[ae.data]),Te=z(ge??ae.data);return t.events.emit("row:created",{tableId:e.id,row:Te}),nt(),Te},async bulkInsert(ae){if(ae.length===0)return[];M("insert");const ge=await no(E,n,ae.map(Ue=>Ue.data)),Te=(ge.length?ge:ae.map(Ue=>Ue.data)).map(z);return nt(),Te},async upsert(ae){M("upsert");const[ge]=await Ic(E,n,[ae.data]),Te=z(ge??ae.data);return nt(),Te},async patch(ae,ge){M("update");const Te=ge.data,Ue=q(Te??{}),Ot=await zc(E,n,ae,Ue),tn=z(Ot??{...Te??{}});return t.events.emit("row:updated",{tableId:e.id,row:tn,prev:tn}),nt(),tn},async remove(ae){M("delete"),await ro(E,n,ae),t.events.emit("row:deleted",{tableId:e.id,rowId:ae}),nt()},async bulkRemove(ae){if(ae.length!==0){M("delete");for(const ge of ae)await ro(E,n,ge);nt()}},subscribe(ae){te.add(ae),ue?ae(de):nt();let ge=null;return m>0&&(ge=setInterval(()=>void nt(),m)),()=>{te.delete(ae),ge&&clearInterval(ge)}},async refresh(){await nt()}}}function qc(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var Uc=Object.defineProperty,Wc=Object.getOwnPropertyDescriptor,ar=(e,t,r,i)=>{for(var n=i>1?void 0:i?Wc(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Uc(t,r,n),n};const Hc="https://latest.datasette.io/ephemeral";let jt=class extends tt{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();t&&this.finish({url:t,token:this.token.trim()})}}connectedCallback(){super.connectedCallback(),jt.instance=this}disconnectedCallback(){super.disconnectedCallback(),jt.instance===this&&(jt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&hn(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return H`
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
                placeholder="e.g. ${Hc}"
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
    `}};jt.instance=null;jt.styles=[fn,ot`
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
    `];ar([ee()],jt.prototype,"url",2);ar([ee()],jt.prototype,"token",2);ar([ee()],jt.prototype,"status",2);ar([ee()],jt.prototype,"statusKind",2);jt=ar([dt("datasette-connect-dialog")],jt);const Ni=e=>e.replace(/^https?:\/\//,"");async function Vo(e,t,r){if(t.db&&t.table)return[{db:t.db,table:t.table,count:null,hidden:!1,pks:[]}];let i=[];if(t.db)for(const c of await to(e,t.base,t.db))c.hidden||i.push(c);else{const c=await Mo(e,t.base);if(c.length===0)return[];let f=c;if(c.length>1){const m=await Mi(c.map(k=>({name:k,size:null})),{title:`${r} from Datasette`,message:`Choose databases on ${Ni(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!m)return null;f=m.map(k=>c[k])}for(const m of f)try{for(const k of await to(e,t.base,m))k.hidden||i.push(k)}catch{}}if(i.length===0)return[];const n=new Set(i.map(c=>c.db)).size>1,a=await Mi(i.map(c=>({name:n?`${c.db}/${c.table}`:c.table,size:c.count,detail:n?void 0:c.db})),{title:`${r} from Datasette`,message:`Choose tables to ${r.toLowerCase()} from ${Ni(t.base)}.`,confirmLabel:r});return a?a.map(c=>i[c]):null}const Kc='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Vc={name:"datasette-source",version:"0.2.0",description:"Import tables from any online Datasette instance, database, or single table by URL",author:"easyDBAccess built-ins",optional:!0},En={maxImportRows:1e4,pageSize:1e3},Yc="https://latest.datasette.io/fixtures/facetable";function Gc(e){e.ui.registerHeaderButton({id:"datasette:connect",label:"Connect",icon:Kc,tooltip:"Connect a live, editable Datasette table",onClick:()=>Zc(e)}),e.ui.registerTableButton({id:"datasette:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from its Datasette backend",visible:t=>t.source?.type==="datasette"||t.origin?.type==="datasette",onClick:(t,{tableId:r})=>nu(t,r)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:Nc}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:r}){const i=r||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${Yc}`,"","Import from Datasette");i&&await io(t,i)}}),e.ui.registerDropHandler(async(t,r)=>{const i=t.dataTransfer?.getData("text/plain")||"";return Xc(i)?(t.preventDefault(),await io(r,i),!0):!1})}async function io(e,t){try{await ns(e,t)}catch(r){let i;r instanceof Ht?i=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:i=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(i,"Datasette import failed")}}function Xc(e){try{const t=Dn(e);return!!(t.db&&t.table)}catch{return!1}}async function ns(e,t){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const i=Dn(t),a=await Vo(_=>e.backend.fetch(_),i,"Import");if(a===null)return;if(a.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}if(i.db&&i.table&&a.length===1){const _=await so(e,r,i);(_.hasMore||_.truncated)&&Jc(e,_);return}let c=0,f=0;const m=[],k=[];for(const _ of a)try{const E=await so(e,r,{base:i.base,db:_.db,table:_.table,query:{}});c+=1,f+=E.rowCount,(E.hasMore||E.truncated)&&m.push(`${_.db}/${_.table}`)}catch(E){k.push(`${_.db}/${_.table}: ${E?.message??String(E)}`)}Qc(e,{imported:c,totalRows:f,capped:m,failed:k,requested:a.length})}async function so(e,t,r){const i=`${r.db}/${r.table}`,n=de=>e.backend.fetch(de);let a=[],c=null,f=!1;try{const de=await No(n,r);a=de.columns,c=de.count,f=de.typed}catch{}const{rows:m,truncated:k,hasMore:_,pages:E}=await Gr(n,r,{maxRows:En.maxImportRows,pageSize:En.pageSize}),z=a.length===0?es(m):f?a:qo(a,m),M=Date.now(),q=qr();e.events.emit("import:before",{source:"datasette",tableId:q}),await e.store.tables.insert({id:q,workspaceId:t,name:i,code:Go(`${r.db}-${r.table}`),columns:z,view:"table",origin:{type:"datasette",url:`${r.base}/${encodeURIComponent(r.db)}/${encodeURIComponent(r.table)}`},updatedAt:M});const te=m.map(de=>({id:qr(),tableId:q,data:de,updatedAt:M}));return await e.store.rows(q).bulkInsert(te),e.events.emit("import:after",{source:"datasette",tableId:q,rowCount:m.length}),{name:i,rowCount:m.length,hasMore:_,truncated:k,pages:E,count:c}}function Jc(e,t){const r=t.count!=null?` of ${t.count}`:"",i=t.name.split("/").pop()??t.name;e.ui.dialogs.toast(`Imported first ${t.rowCount}${r} rows from ${i} — more available (capped at ${En.maxImportRows}). Live paging arrives with the Phase-2 connector.`,{kind:"warning",title:"Datasette import"})}function Qc(e,t){const r=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,i=`${t.imported} table${t.imported===1?"":"s"}`;if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${i} (${r}); ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.capped.length>0){e.ui.dialogs.toast(`Imported ${i} (${r}). ${t.capped.length} capped at ${En.maxImportRows} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${i} (${r}) from Datasette.`,{kind:"success",title:"Datasette import"})}async function Zc(e){const t=jt.instance??eu(),r=(n,a)=>e.backend.fetch(n,a),i=await t.open({initialUrl:"https://datasette.io",async onTest(n,a){const c=Dn(n),f=await Ho(r,c.base,{token:a||void 0});if(!f.reachable)return`Unreachable: ${f.error??"no response"}`;const m=f.version?` (Datasette ${f.version})`:"";return f.writable?`Reachable${m} — signed in, read-write.`:`Reachable${m} — read-only (no token / not authenticated).`}});if(i)try{await Yo(e,i.url,i.token)}catch(n){const a=n instanceof Ht?n.message:n?.message??String(n);await e.ui.dialogs.alert(a,"Connect Datasette failed")}}function eu(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function Yo(e,t,r){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=Dn(t),a=(E,z)=>e.backend.fetch(E,z),c=ts(a,r||void 0),f=await Ho(a,n.base,{token:r||void 0});r&&await e.store.settings.upsert({key:Ko(n.base),value:r});let m;try{m=await Vo(c,n,"Connect")}catch(E){const z=E instanceof Ht?E.message:E?.message??String(E);throw new Error(`Couldn't read tables from ${Ni(n.base)}: ${z}`)}if(m===null)return;if(m.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}let k=0;for(const E of m)await tu(e,i,n.base,E,f.writable,r),k+=1;const _=f.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${k} live table${k===1?"":"s"} from Datasette (${_}).`,{kind:"success",title:"Connect Datasette"})}async function tu(e,t,r,i,n,a){const c={base:r,db:i.db,table:i.table,query:{}},f=ts((ue,Pe)=>e.backend.fetch(ue,Pe),a||void 0);let m=[],k=!1;try{const ue=await No(f,c);m=ue.columns,k=ue.typed}catch{}const{rows:_}=await Gr(f,c,{maxRows:50,pageSize:50}),E=m.length===0?es(_):k?m:qo(m,_);let z=i.pks;if(!z||z.length===0)try{z=await Lc(f,c)}catch{z=[]}const M=E.map(ue=>z.includes(ue.field)?{...ue,unique:!0,notnull:!0}:ue),q=(await e.store.tables.find()).find(ue=>{const Pe=ue.source?.config;return ue.workspaceId===t&&ue.source?.type==="datasette"&&Pe?.base===r&&Pe?.db===i.db&&Pe?.table===i.table}),te=q?.id??qr(),de={...q??{},id:te,workspaceId:t,name:`${i.db}/${i.table}`,code:Go(`${i.db}-${i.table}`),columns:M,view:q?.view??"table",source:{type:"datasette",writable:n,config:{base:r,db:i.db,table:i.table,pks:z}},updatedAt:Date.now()};return q?await e.store.tables.upsert(de):await e.store.tables.insert(de),te}async function nu(e,t){const r=await e.store.tables.findOne(t);if(r)try{if(r.source?.type==="datasette"){const i=e.store.rows(t);typeof i.refresh=="function"&&await i.refresh();const n=await i.find();e.ui.dialogs.toast(`Reloaded ${n.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}else r.origin?.type==="datasette"&&await ru(e,r)}catch(i){const n=i instanceof Ht?i.message:i?.message??String(i);e.ui.dialogs.toast(`Refresh failed: ${n}`,{kind:"error",title:"Refresh"})}}async function ru(e,t){const r=Dn(t.origin.url),i=E=>e.backend.fetch(E),{rows:n,hasMore:a,truncated:c}=await Gr(i,r,{maxRows:En.maxImportRows,pageSize:En.pageSize}),f=Date.now(),m=e.store.rows(t.id),k=await m.find();await m.bulkRemove(k.map(E=>E.id)),await m.bulkInsert(n.map(E=>({id:qr(),tableId:t.id,data:E,updatedAt:f}))),await e.store.tables.patch(t.id,{updatedAt:f});const _=a||c?` (capped at ${En.maxImportRows})`:"";e.ui.dialogs.toast(`Refreshed ${n.length} rows from ${r.db}/${r.table}${_}.`,{kind:a||c?"warning":"success",title:"Refresh"})}function Go(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function qr(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const iu=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:Yo,importDatasette:ns,init:Gc,meta:Vc},Symbol.toStringTag,{value:"Module"})),su={name:"dump-export",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file.",author:"easyDBAccess built-ins"};function ou(e){e.ui.registerFooterButton({id:"dump-export:dump",label:"Dump",icon:"archive",tooltip:"Export the current workspace as a JSON dump file",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await Jr(e);await e.backend.saveFile(`workspace-${t}.db.json`,r,"application/json")}})}async function Jr(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),i={workspaceId:t,exportedAt:Date.now(),tables:[]};for(const n of r){const a=await e.store.rows(n.id).find();i.tables.push({name:n.name,columns:n.columns,rows:a.map(c=>c.data),...n.windowGeometry?{windowGeometry:n.windowGeometry}:{},...n.sortColumn?{sortColumn:n.sortColumn,sortAsc:n.sortAsc??!0}:{}})}return JSON.stringify(i,null,2)}const au=Object.freeze(Object.defineProperty({__proto__:null,init:ou,meta:su,serializeWorkspace:Jr},Symbol.toStringTag,{value:"Module"})),lu={name:"sql-export",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"easyDBAccess built-ins"};function cu(e){e.ui.registerFooterButton({id:"sql-export:dump",label:"SQL",icon:"storage",tooltip:"Export the current workspace as a .sql script",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await Xo(e);await e.backend.saveFile(`workspace-${t}.sql`,r,"application/sql")}})}async function Xo(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),i=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const n of r){const a=await e.store.rows(n.id).find();i.push(uu(n,a),"")}return i.push("COMMIT;",""),i.join(`
`)}function uu(e,t){const r=qi(e.code||e.name||`table_${e.id}`),i=['  "__id" TEXT PRIMARY KEY',...e.columns.map(a=>`  ${du(a)}`)],n=[`DROP TABLE IF EXISTS "${r}";`,`CREATE TABLE "${r}" (`,i.join(`,
`),");"];if(t.length>0){const c=["__id",...e.columns.map(f=>f.field)].map(f=>`"${qi(f)}"`).join(", ");for(const f of t){const m=[oo(f.id),...e.columns.map(k=>oo(f.data[k.field],k.type))];n.push(`INSERT INTO "${r}" (${c}) VALUES (${m.join(", ")});`)}}return n.join(`
`)}function du(e){const t=[`"${qi(e.field)}"`,fu(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function fu(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function oo(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const r=hu(e);return r===null?"NULL":Or(r)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?Or(e.toISOString()):Or(typeof e=="string"?e:JSON.stringify(e))}function hu(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?ao(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(r)return`${r[1]}${r[2]}${r[3]}`;const i=new Date(t);return Number.isFinite(i.getTime())?ao(i):null}return null}function ao(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),r=String(e.getUTCMonth()+1).padStart(2,"0"),i=String(e.getUTCDate()).padStart(2,"0");return`${t}${r}${i}`}function Or(e){return`'${e.replace(/'/g,"''")}'`}function qi(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const pu=Object.freeze(Object.defineProperty({__proto__:null,init:cu,meta:lu,serializeWorkspaceAsSql:Xo},Symbol.toStringTag,{value:"Module"})),mu={name:"gist-sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"easyDBAccess built-ins"},gu="gist:";function bu(e){e.ui.registerFooterButton({id:"gist-sync:push",label:"Push",icon:"cloud_upload",tooltip:"Push the current workspace to a GitHub Gist",onClick:async()=>{try{await vu(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerFooterButton({id:"gist-sync:pull",label:"Pull",icon:"cloud_download",tooltip:"Pull the latest tables from the configured Gist",onClick:async()=>{try{await xu(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}})}async function Jo(e){const t=e.workspaceId();return`${gu}${t??"default"}`}async function yu(e){const t=await Jo(e),r=await e.store.settings.findOne(t);if(!r)return null;const i=r.value;return!i||!i.token||!i.user?null:{user:i.user,gistId:i.gistId??"",token:i.token}}async function Qo(e,t){const r=await Jo(e);await e.store.settings.upsert({key:r,value:t})}function wu(e){const t={};for(const r of e.split(";")){const i=r.indexOf("=");if(i<0)continue;const n=r.slice(0,i).trim(),a=r.slice(i+1).trim();n&&(t[n]=a)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function Zo(e){const t=await yu(e);if(t)return t;const r=await e.ui.dialogs.prompt(`Connection string format:
user=<github-user>;gist_id=<id>;gist_token=<pat>;

Leave gist_id empty to create a new gist on first Push.`,"","Gist credentials");if(!r)return null;const i=wu(r);return i?(await Qo(e,i),i):(await e.ui.dialogs.alert("Could not parse connection string. Make sure it contains user=… and gist_token=….","Gist credentials"),null)}async function vu(e){const t=await Zo(e);if(!t)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=(await e.store.tables.find()).filter(m=>m.workspaceId===r);if(i.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const n={},a=[];for(const m of i){const k=await e.store.rows(m.id).find(),_=JSON.stringify($u(m,k),null,2);_.length>1e8&&a.push(`${m.name} (${(_.length/1e6).toFixed(2)} MB)`),n[`${ea(m.name)}.table.json`]={content:_}}if(a.length>0&&!await e.ui.dialogs.confirm(`These tables exceed Gist's 100 MB-per-file limit and will be rejected:

${a.join(`
`)}

Push anyway?`,"Gist size warning"))return;n["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1"},null,2)};let c;if(t.gistId){const m=await fetch(`https://api.github.com/gists/${t.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:n,description:`easyDBAccess workspace: ${r}`})});if(!m.ok)throw new Error(await Ui(m));c=await m.json()}else{const m=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:n})});if(!m.ok)throw new Error(await Ui(m));c=await m.json(),t.gistId=c.id,await Qo(e,t)}const f=c.html_url??`https://gist.github.com/${t.user}/${c.id}`;e.ui.dialogs.toast(`Pushed ${i.length} table${i.length===1?"":"s"}.  ${f}`,{kind:"success",title:"Gist sync"})}async function xu(e){const t=await Zo(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=await fetch(`https://api.github.com/gists/${t.gistId}`,{headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json"}});if(!i.ok)throw new Error(await Ui(i));const n=await i.json(),a=Object.entries(n.files).filter(([k])=>k.endsWith(".table.json")&&!k.startsWith("_easydb"));if(a.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const c=(await e.store.tables.find()).filter(k=>k.workspaceId===r),f=new Map(c.map(k=>[k.name,k]));let m=0;for(const[,k]of a){const _=JSON.parse(k.content);if(!_.name||!Array.isArray(_.columns))continue;let E;const z=f.get(_.name);if(z){E=await e.store.tables.patch(z.id,{columns:_.columns,updatedAt:Date.now()});const q=e.store.rows(z.id),te=await q.find();await q.bulkRemove(te.map(de=>de.id))}else E=await e.store.tables.insert({id:lo(),workspaceId:r,name:_.name,code:ea(_.name),columns:_.columns,view:"table",updatedAt:Date.now()});const M=(_.rows??[]).map(q=>({id:lo(),tableId:E.id,data:q,updatedAt:Date.now()}));await e.store.rows(E.id).bulkInsert(M),m++}e.ui.dialogs.toast(`Pulled ${m} table${m===1?"":"s"} from gist ${t.gistId}.`,{kind:"success",title:"Gist sync"})}function $u(e,t){return{name:e.name,columns:e.columns,rows:t.map(r=>r.data)}}async function Ui(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}function ea(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function lo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Cu=Object.freeze(Object.defineProperty({__proto__:null,init:bu,meta:mu},Symbol.toStringTag,{value:"Module"})),ta="server-sync:url";function na(e){return`server-sync:etag:${e}`}async function ra(e){const r=(await e.store.settings.findOne(ta))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}async function ku(e,t){await e.store.settings.upsert({key:ta,value:t.replace(/\/+$/,"")})}async function ia(e,t){const i=(await e.store.settings.findOne(na(t)))?.value;return typeof i=="string"?i:null}async function An(e,t,r){await e.store.settings.upsert({key:na(t),value:r})}function Qr(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function co(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function sa(e,t,r){const i=Yr(r,t),n=(await e.store.tables.find()).filter(c=>c.workspaceId===t);for(const c of n){const f=e.store.rows(c.id),m=await f.find();await f.bulkRemove(m.map(k=>k.id)),await e.store.tables.remove(c.id)}let a=0;for(const c of i){const f=uo(),m=await e.store.tables.insert({id:f,workspaceId:t,name:c.name,code:Eu(c.name),columns:c.columns,view:"table",...c.windowGeometry?{windowGeometry:c.windowGeometry}:{},...c.sortColumn?{sortColumn:c.sortColumn,sortAsc:c.sortAsc??!0}:{},updatedAt:Date.now()}),k=c.rows.map(_=>({id:uo(),tableId:m.id,data:_,updatedAt:Date.now()}));await e.store.rows(m.id).bulkInsert(k),a++}return a}function Eu(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function uo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Su={name:"server-sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"easyDBAccess built-ins"};function _u(e){e.ui.registerFooterButton({id:"server-sync:push",label:"Sync ↑",icon:"cloud_upload",tooltip:"Push this workspace to the configured server",onClick:async()=>{try{await Au(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Server sync"})}}}),e.ui.registerFooterButton({id:"server-sync:pull",label:"Sync ↓",icon:"cloud_download",tooltip:"Pull this workspace from the configured server",onClick:async()=>{try{await Pu(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Server sync"})}}})}async function Au(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await oa(e);if(!r)return;const i=await Jr(e),n=await ia(e,t),a={"Content-Type":"application/json"};n&&(a["If-Match"]=`"${n}"`);let c=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:a,body:i});if(c.status===412){const m=await c.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){m.currentEtag&&await An(e,t,m.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}c=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:i})}if(!c.ok)throw new Error(await aa(c));const f=Qr(c.headers.get("ETag"));f&&await An(e,t,f),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${r}.`,{kind:"success",title:"Server sync"})}async function Pu(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await oa(e);if(!r||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const n=await fetch(`${r}/sync/${encodeURIComponent(t)}`);if(n.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!n.ok)throw new Error(await aa(n));const a=Qr(n.headers.get("ETag")),c=await n.json(),f=await sa(e,t,c);a&&await An(e,t,a),e.ui.dialogs.toast(`Pulled ${f} table${f===1?"":"s"} from ${r}.`,{kind:"success",title:"Server sync"})}async function oa(e){const t=await ra(e);if(t)return t;const r=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!r)return null;try{new URL(r)}catch{return await e.ui.dialogs.alert(`"${r}" is not a valid URL.`,"Server sync"),null}return await ku(e,r),r.replace(/\/+$/,"")}async function aa(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Tu=Object.freeze(Object.defineProperty({__proto__:null,init:_u,meta:Su},Symbol.toStringTag,{value:"Module"})),Du={name:"new-table",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"easyDBAccess built-ins"};function ju(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const Fu=Object.freeze(Object.defineProperty({__proto__:null,init:ju,meta:Du},Symbol.toStringTag,{value:"Module"})),Ou={name:"plugin-manager-button",version:"0.1.0",description:"Registers a footer button that opens the Plugin Manager dialog.",author:"easyDBAccess built-ins"};function Ru(e){e.ui.registerFooterButton({id:"plugin-manager:open",label:"Plugins",icon:"extension",tooltip:"Add, disable, or remove plugins",onClick:()=>e.ui.openPluginManager()})}const zu=Object.freeze(Object.defineProperty({__proto__:null,init:Ru,meta:Ou},Symbol.toStringTag,{value:"Module"})),Iu={name:"core-renderers",version:"0.1.0",description:"Built-in cell renderers: date, datetime, boolean, script.",author:"easyDBAccess built-ins"};function Lu(e){customElements.get("cell-date")||customElements.define("cell-date",Bu),customElements.get("cell-datetime")||customElements.define("cell-datetime",Mu),customElements.get("cell-boolean")||customElements.define("cell-boolean",Nu),customElements.get("cell-script")||customElements.define("cell-script",Uu),e.ui.registerCellRenderer("date","cell-date"),e.ui.registerCellRenderer("datetime","cell-datetime"),e.ui.registerCellRenderer("boolean","cell-boolean"),e.ui.registerCellRenderer("script","cell-script")}class Bu extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="date",t.value=Hu(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class Mu extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="datetime-local",t.value=Ku(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class Nu extends HTMLElement{constructor(){super(...arguments),this._value=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="checkbox",t.checked=qu(this._value),t.style.cssText="transform:translateY(1px);cursor:pointer",t.addEventListener("change",()=>this.commit(t.checked)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function qu(e){return e===!0||e==="true"||e===1||e==="1"}class Uu extends HTMLElement{constructor(){super(...arguments),this._column=null,this._row={}}set column(t){this._column=t,this.render()}get column(){return this._column}set row(t){this._row=t??{},this.render()}get row(){return this._row}set value(t){}get value(){}connectedCallback(){this.render()}render(){this.innerHTML="";const t=this._column?.script;if(!t||!t.trim()){const a=document.createElement("span");a.textContent="(no script)",a.style.cssText="color:#9ca3af;font-style:italic",this.append(a);return}let r;try{r=Wu(t)}catch(a){this.append(ji("compile error",a));return}let i;try{i=r(this._row)}catch(a){this.append(ji("runtime error",a));return}if(typeof i!="string"){this.append(ji("render(row) did not return a string",null));return}const n=document.createElement("span");n.style.cssText="display:inline-block;width:100%",n.innerHTML=i,this.append(n)}}const fo=new Map;function Wu(e){const t=fo.get(e);if(t)return t;const r=new Function("row",`${e}
return render(row);`);return fo.set(e,r),r}function ji(e,t){const r=document.createElement("span");if(r.textContent=`⚠ ${e}`,r.style.cssText="color:#b91c1c;font-size:0.8em;font-family:ui-monospace,SFMono-Regular,monospace",t){const i=t instanceof Error?t.message:String(t);r.title=i}return r}function Hu(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function Ku(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}const Vu=Object.freeze(Object.defineProperty({__proto__:null,init:Lu,meta:Iu},Symbol.toStringTag,{value:"Module"})),Yu={name:"cell-color",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"easyDBAccess built-ins"};function Gu(e){customElements.get("cell-color")||customElements.define("cell-color",Xu),e.ui.registerCellRenderer("color","cell-color")}class Xu extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,r,i){this.value=i}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const r=document.createElement("input");r.type="color",r.value=t,r.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",r.addEventListener("change",()=>this.commit(r.value)),this.append(r)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Ju=Object.freeze(Object.defineProperty({__proto__:null,init:Gu,meta:Yu},Symbol.toStringTag,{value:"Module"})),Qu={name:"cell-image",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"easyDBAccess built-ins"};function Zu(e){customElements.get("cell-image")||customElements.define("cell-image",ed),e.ui.registerCellRenderer("image","cell-image")}class ed extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("span");if(t.style.cssText="display:inline-flex;align-items:center;gap:0.4rem",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const i=document.createElement("img");i.src=this._value,i.alt="",i.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(i)}else{const i=document.createElement("span");i.style.color="#9ca3af",i.textContent="no image",t.append(i);const n=document.createElement("button");n.type="button",n.textContent="upload",n.style.cssText="padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",n.addEventListener("click",()=>this.pickFile()),t.append(n)}this.append(t)}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const r=t.files?.[0];if(!r)return;const i=new FileReader;i.onload=()=>this.commit(String(i.result)),i.readAsDataURL(r)}),t.click()}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const td=Object.freeze(Object.defineProperty({__proto__:null,init:Zu,meta:Qu},Symbol.toStringTag,{value:"Module"})),nd={name:"cell-link",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"easyDBAccess built-ins"};function rd(e){customElements.get("cell-link")||customElements.define("cell-link",id),e.ui.registerCellRenderer("link","cell-link")}class id extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1}set value(t){const r=t==null?"":String(t);this._value!==r&&(this._value=r,this._editing=!1,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=this._value,r=this._editing?null:sd(t),i=!this._editing&&!r?od(t):null,n=!this._editing&&!r&&!i?ad(t):null;if(r||i||n){const a=document.createElement("span");a.style.cssText="display:inline-flex;align-items:center;gap:0.25rem;width:100%";const c=document.createElement("a");c.href=r?t:i?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,r&&(c.target="_blank",c.rel="noopener noreferrer"),c.textContent=t,c.style.cssText="color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",c.title=r?`Open ${t}`:i?`Email ${t}`:`Call ${t}`;const f=document.createElement("button");f.type="button",f.title="Edit",f.textContent="✎",f.style.cssText="background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",f.addEventListener("click",m=>{m.preventDefault(),m.stopPropagation(),this._editing=!0,this.render()}),a.append(c,f),this.append(a)}else{const a=document.createElement("input");a.type="text",a.value=t,a.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",a.addEventListener("change",()=>this.commit(a.value)),a.addEventListener("keydown",c=>{c.key==="Enter"?(c.preventDefault(),this.commit(a.value)):c.key==="Escape"&&(this._editing=!1,this.render())}),this.append(a),this._editing&&setTimeout(()=>{a.focus(),a.select()},0)}}commit(t){this._value=t,this._editing=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function sd(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function od(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function ad(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const r=t.replace(/\D/g,"");if(r.length<7||r.length>15)return null;const i=/[ ()\-.]/.test(t),n=t.startsWith("+");return!i&&!n&&r.length<10?null:t}const ld=Object.freeze(Object.defineProperty({__proto__:null,init:rd,meta:nd},Symbol.toStringTag,{value:"Module"}));var cd=Object.defineProperty,ud=Object.getOwnPropertyDescriptor,pn=(e,t,r,i)=>{for(var n=i>1?void 0:i?ud(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&cd(t,r,n),n};const dd="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",fd='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',ho=[{label:"Northwind — sample database (JSON dump)",url:dd,kind:"json"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — global power plants",url:"https://global-power-plants.datasettes.com/global-power-plants/global-power-plants",kind:"datasette"}],hd={name:"import-data",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"easyDBAccess built-ins",optional:!0};function pd(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:fd,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>md(e)})}async function md(e){const r=await(gt.instance??gd()).open({async listDatabases(a){const c=Dn(a);return Mo(f=>e.backend.fetch(f),c.base)}});if(!r)return;const{url:i,kind:n}=r;try{if(n==="datasette")await ns(e,i);else{const a=await e.backend.fetch(i);if(!a.ok)throw new Error(`HTTP ${a.status} ${a.statusText}`);const c=await a.text();await Zi(e,c,mo(i)),e.ui.dialogs.toast(`Imported ${mo(i)}.`,{kind:"success",title:"Import"})}}catch(a){e.ui.dialogs.toast(`Could not import ${i}: ${a.message}`,{kind:"error",title:"Import"})}}function gd(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function bd(e){try{const t=new URL(e),r=t.hostname.toLowerCase(),i=[...t.searchParams.keys()].some(a=>a.startsWith("_")),n=r.includes("datasette")||i;return/\.(json|csv)$/i.test(t.pathname)&&!i?"json":n?"datasette":"json"}catch{return"json"}}function po(e,t){if(t!=="datasette"||!e)return!1;try{const r=Dn(e);return!r.db&&!r.table}catch{return!1}}function mo(e){try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();return r&&r.length>0?r:"sample.db.json"}catch{return"sample.db.json"}}let gt=class extends tt{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const r=this.resolvedKind,i=r==="datasette"&&this.selectedDb&&po(t,r)?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:i,kind:r})}}get resolvedKind(){return this.kind==="auto"?bd(this.url.trim()):this.kind}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),gt.instance=this}disconnectedCallback(){super.disconnectedCallback(),gt.instance===this&&(gt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&hn(this.dialogEl,e)}open(e){return this.url="",this.kind="auto",this.presetIdx=-1,this.resetDbList(),this.listDatabases=e?.listDatabases??null,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const r=ho[t];r&&(this.url=r.url,this.kind=r.kind)}renderDbPicker(){return!this.listDatabases||!po(this.url.trim(),this.resolvedKind)?Re:H`
      <label>
        Database
        <div class="row db-row">
          <select
            .value=${this.selectedDb}
            ?disabled=${!this.dbList||this.dbList.length===0}
            @change=${e=>{this.selectedDb=e.target.value}}
          >
            ${this.dbList?H`
                  <option value="" ?selected=${this.selectedDb===""}>
                    — all databases (choose tables next) —
                  </option>
                  ${this.dbList.map(e=>H`<option value=${e} ?selected=${e===this.selectedDb}>${e}</option>`)}
                `:H`<option value="">— not loaded —</option>`}
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
      ${this.dbError?H`<p class="hint error">${this.dbError}</p>`:Re}
    `}render(){return H`
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
              <select .value=${String(this.presetIdx)} @change=${e=>this.onPresetChange(e)}>
                <option value="-1" ?selected=${this.presetIdx===-1}>— choose a sample —</option>
                ${ho.map((e,t)=>H`<option value=${String(t)} ?selected=${t===this.presetIdx}>
                      ${e.label}
                    </option>`)}
              </select>
            </label>

            <label>
              URL
              <input
                type="text"
                autofocus
                placeholder="https://… (JSON dump or Datasette table)"
                .value=${this.url}
                @input=${e=>{this.url=e.target.value,this.presetIdx=-1,this.resetDbList()}}
              />
            </label>

            <label>
              Import as
              <select
                .value=${this.kind}
                @change=${e=>{this.kind=e.target.value,this.resetDbList()}}
              >
                <option value="auto" ?selected=${this.kind==="auto"}>Auto-detect</option>
                <option value="json" ?selected=${this.kind==="json"}>JSON dump</option>
                <option value="datasette" ?selected=${this.kind==="datasette"}>
                  Datasette (table or instance)
                </option>
              </select>
            </label>

            ${this.renderDbPicker()}

            <p class="hint">
              Paste any URL or pick a sample above. For a Datasette instance root, click
              <em>List databases</em> to pick one first. Multi-table sources — a JSON dump with
              several tables, or a Datasette database/instance URL — let you choose which tables
              to import. Datasette tables import a read-only snapshot (capped at 10,000 rows each).
            </p>
          </div>
        </form>
      </dialog>
      ${Re}
    `}};gt.instance=null;gt.styles=[fn,ot`
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
    `];pn([ee()],gt.prototype,"url",2);pn([ee()],gt.prototype,"kind",2);pn([ee()],gt.prototype,"presetIdx",2);pn([ee()],gt.prototype,"dbList",2);pn([ee()],gt.prototype,"dbLoading",2);pn([ee()],gt.prototype,"dbError",2);pn([ee()],gt.prototype,"selectedDb",2);gt=pn([dt("import-dialog")],gt);const yd=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return gt},init:pd,meta:hd},Symbol.toStringTag,{value:"Module"})),wd={name:"auto-sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"easyDBAccess built-ins",optional:!0},vd=6e4;let go=null,Wi=!1;const Fi=new Map;function xd(e){go===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(go=setInterval(()=>{la(e)},vd)))}async function la(e){if(Wi)return;const t=e.workspaceId();if(!t)return;const r=await ra(e);if(r)try{await $d(e,r,t)}catch(i){console.warn("[auto-sync]",i)}}async function $d(e,t,r){const i=await Jr(e),n=await ia(e,r),a=await fetch(`${t}/sync/${encodeURIComponent(r)}`);if(a.status===404){await bo(e,t,r,i,null);return}if(!a.ok)return;const c=Qr(a.headers.get("ETag")),f=await a.text();if(co(i)===co(f)){c&&c!==n&&await An(e,r,c);return}if(c&&c===n){await bo(e,t,r,i,n);return}if(!(c&&Fi.get(r)===c)){Wi=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${r}". Pull and replace your local copy?`,"auto-sync")){const k=JSON.parse(f),_=await sa(e,r,k);c&&await An(e,r,c),Fi.delete(r),e.ui.dialogs.toast(`Pulled ${_} table${_===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else c&&Fi.set(r,c)}finally{Wi=!1}}}async function bo(e,t,r,i,n){const a={"Content-Type":"application/json"};n&&(a["If-Match"]=`"${n}"`);const c=await fetch(`${t}/sync/${encodeURIComponent(r)}`,{method:"PUT",headers:a,body:i});if(c.ok){const f=Qr(c.headers.get("ETag"));f&&await An(e,r,f);return}if(c.status===412){const f=await c.json().catch(()=>({}));f.currentEtag&&await An(e,r,f.currentEtag)}}const ca=Object.freeze(Object.defineProperty({__proto__:null,load:xd,meta:wd,tick:la},Symbol.toStringTag,{value:"Module"})),ua=[Fu,rc,Ec,iu,lc,au,pu,Cu,Tu,zu,Vu,Ju,td,ld,yd,ca],Cd=ua;function Hi(e){return`builtin:${e}`}async function kd(e){const t=[];for(const r of ua)if(!await Ed(e,r)){t.push(r);try{await r.init?.(e)}catch(i){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"init",error:i})}}return async()=>{for(const r of t)try{await r.load?.(e)}catch(i){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"load",error:i})}}}async function Ed(e,t){if(!t.meta?.optional)return!1;const r=t.meta.name;return r?(await e.store.plugins.findOne(Hi(r)))?.enabled===!1:!1}async function Sd(e){const t=e.workspaceId();if(!t)return async()=>{};const i=(await e.store.workspaces.findOne(t))?.pluginUrls??[],n=[];for(const a of i)try{const c=await e.store.plugins.findOne(a);if(c&&c.enabled===!1)continue;let f=c?.cachedBody??"";if(f)_d(e,a,f);else{try{f=await da(a)}catch(_){await e.store.plugins.upsert({url:a,enabled:c?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${_.message}`}),e.events.emit("plugin:error",{url:a,phase:"fetch",error:_});continue}await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),cachedBody:f})}const m=new Blob([f],{type:"text/javascript"}),k=URL.createObjectURL(m);try{const _=await import(k);await _.init?.(e),n.push({url:a,mod:_})}finally{setTimeout(()=>URL.revokeObjectURL(k),5e3)}}catch(c){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`init: ${c.message}`}),e.events.emit("plugin:error",{url:a,phase:"init",error:c})}return async()=>{for(const{url:a,mod:c}of n)try{await c.load?.(e)}catch(f){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`load: ${f.message}`}),e.events.emit("plugin:error",{url:a,phase:"load",error:f})}}}async function da(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const r=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(r))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return r}function _d(e,t,r){return(async()=>{try{const i=await da(t);if(i===r)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:i})}catch{}})()}let Oi=null;function je(){return Oi||(Oi=Ad()),Oi}async function Ad(){const e=await El(),t=_l(e),r=Pl(),i=zl(),n=new Map;t.tables.subscribe(te=>{n.clear();for(const de of te)n.set(de.id,de)});const a={...t.tables,insert:te=>(n.set(te.id,te),t.tables.insert(te)),upsert:te=>(n.set(te.id,te),t.tables.upsert(te))};let c=null;const f={get backend(){if(!c)throw new Error("[host] row-source ctx used before app init completed");return c.backend},events:r,settings:t.settings,workspaceId:()=>E},m=Al({base:{...t,tables:a},providers:i.rowSources,tableById:te=>n.get(te),ctx:f}),k=Pd(),_=await m.workspaces.find();let E;if(k){const te=Td(k),de=_.find(ue=>ue.id===te||ue.name===k);de?E=de.id:E=(await m.workspaces.insert({id:te,name:k,createdAt:Date.now(),pluginUrls:[]})).id}else _.length===0?E=(await m.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id:E=_[0].id;const z=Bl({store:m,events:r,registries:i,workspaceId:()=>E});c=z,r.on("import:after",({source:te,tableId:de,rowCount:ue})=>{z.store.tables.findOne(de).then(Pe=>{z.ui.dialogs.toast(`Imported ${ue} row${ue===1?"":"s"} into "${Pe?.name??de}".`,{kind:"success",title:te.toUpperCase()+" import"})})}),r.on("plugin:error",({url:te,phase:de,error:ue})=>{z.ui.dialogs.toast(`[${de}] ${ue?.message??String(ue)}`,{kind:"error",title:`Plugin: ${te}`})});const M=await kd(z),q=await Sd(z);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:E}),await M(),await q()}),{store:m,events:r,workspaceId:E,registries:i,api:z}}function Pd(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}function Td(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var Dd=Object.defineProperty,jd=Object.getOwnPropertyDescriptor,Zr=(e,t,r,i)=>{for(var n=i>1?void 0:i?jd(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Dd(t,r,n),n};let Nn=class extends tt{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&hn(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let r;try{r=Vr(this.text)}catch(c){this.errorMsg=`Couldn't parse the CSV: ${c.message}`;return}if(r.columns.length===0||r.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const i=await je(),n=crypto.randomUUID();await i.store.tables.insert({id:n,workspaceId:i.workspaceId,name:t,code:Fd(t),columns:r.columns,view:"table",updatedAt:Date.now()});const a=r.rows.map(c=>({id:crypto.randomUUID(),tableId:n,data:c,updatedAt:Date.now()}));await i.store.rows(n).bulkInsert(a),i.api.ui.dialogs.toast(`Imported ${r.rows.length} row${r.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return H`
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
            ${this.errorMsg?H`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};Nn.styles=[fn,ot`
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
    `];Zr([ee()],Nn.prototype,"name",2);Zr([ee()],Nn.prototype,"text",2);Zr([ee()],Nn.prototype,"errorMsg",2);Nn=Zr([dt("csv-paste-dialog")],Nn);function Fd(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}var Od=Object.defineProperty,Rd=Object.getOwnPropertyDescriptor,rs=(e,t,r,i)=>{for(var n=i>1?void 0:i?Rd(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Od(t,r,n),n};const zd=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return an HTML string; it is injected into the cell as raw HTML.
  return '<b>' + (row.name ?? '') + '</b>';
}
`;let Kt=class extends tt{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),Kt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Kt.instance===this&&(Kt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&hn(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:zd,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(r=>{this.resolver=r})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return H`
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
    `}};Kt.instance=null;Kt.styles=[fn,ot`
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
    `];rs([ee()],Kt.prototype,"text",2);rs([ee()],Kt.prototype,"columnLabel",2);Kt=rs([dt("script-editor-dialog")],Kt);var Id=Object.defineProperty,Ld=Object.getOwnPropertyDescriptor,Bt=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ld(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Id(t,r,n),n};const Bd=["string","number","boolean","date","datetime"];let At=class extends tt{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.columns=[],this.errorMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&hn(this.dialogEl,e)}async open(e){this.errorMsg="";const t=await je();if(this.rendererOptions=[...t.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.rendererSubUnsub=t.events.on("app:ready",()=>{this.rendererOptions=[...t.registries.cellRenderers.keys()].sort()}),e){const r=await je(),i=await r.store.tables.findOne(e);if(!i)return;this.mode="edit",this.editTableId=e,this.name=i.name,this.columns=i.columns.map(a=>({field:a.field,label:a.label,type:a.type,renderer:a.renderer,script:a.script,max:a.max,unique:a.unique,notnull:a.notnull,hidden:a.hidden,origField:a.field}));const n=await r.store.rows(e).find();this.previewRows=n.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,r)=>r!==e)}moveColumn(e,t){const r=e+t;if(r<0||r>=this.columns.length)return;const i=[...this.columns],[n]=i.splice(e,1);i.splice(r,0,n),this.columns=i}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,r){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientY<i.top+i.height/2;this.dropTargetIdx=t,this.dropEdge=n?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const r=this.dragSrcIdx,i=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,r===null||r===t||!i)return;const n=[...this.columns],[a]=n.splice(r,1);let c=t+(r<t?-1:0);i==="after"&&(c+=1),n.splice(c,0,a),this.columns=n}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((r,i)=>i===e?{...r,...t}:r)}async editScript(e){const t=Kt.instance;if(!t)return;const r=this.columns[e];if(!r)return;const i=await t.open(r.script??"",r.label||r.field);i!==null&&this.patchColumn(e,{script:i.trim()?i:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const r=new Set;for(const a of this.columns){const c=a.field.trim();if(!c){this.errorMsg="Column field names cannot be empty.";return}if(r.has(c)){this.errorMsg=`Duplicate column field: ${c}`;return}r.add(c)}const i=await je(),n=this.columns.map(a=>{const c={field:a.field.trim(),label:a.label.trim()||a.field.trim(),type:a.type};return a.renderer&&(c.renderer=a.renderer),a.script&&(c.script=a.script),a.max!=null&&a.max>0&&(c.max=a.max),a.unique&&(c.unique=!0),a.notnull&&(c.notnull=!0),a.hidden&&(c.hidden=!0),c});if(this.mode==="edit"&&this.editTableId){const a=this.editTableId,c=await i.store.tables.findOne(a),f=new Map((c?.columns??[]).map(k=>[k.field,k])),m=n.filter(k=>{const _=f.get(k.field);return k.unique&&!_?.unique||k.notnull&&!_?.notnull||k.max&&k.max>0&&k.max!==_?.max});if(m.length>0){const k=await i.store.rows(a).find(),_=qd(m,k);if(_.length>0){this.errorMsg=`Cannot save: ${_.length} existing ${_.length===1?"row violates":"rows violate"} the new constraints.
${_.slice(0,5).join(`
`)}${_.length>5?`
…and ${_.length-5} more.`:""}`;return}}await i.store.tables.patch(a,{name:t,columns:n,updatedAt:Date.now()})}else await i.store.tables.insert({id:Wd(),workspaceId:i.workspaceId,name:t,code:Ud(t),columns:n,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return H`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=new Map;for(const t of this.columns){if(!t.unique)continue;const r=new Set,i=new Set;for(const n of this.previewRows){const a=n.data[t.field];a==null||a===""||(r.has(a)&&i.add(a),r.add(a))}e.set(t.field,i)}return H`
      <div class="preview">
        <h3>Live preview — first ${this.previewRows.length} row${this.previewRows.length===1?"":"s"}</h3>
        <table>
          <thead>
            <tr>
              ${this.columns.map(t=>H`<th title=${t.field}>${t.label||t.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.previewRows.map(t=>H`
                <tr>
                  ${this.columns.map(r=>{const i=t.data[r.field],n=Nd(r,i,e.get(r.field));return H`<td
                      class=${n?"violation":""}
                      title=${n??""}
                    >${Md(i)}</td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}renameDetected(){return this.mode==="edit"&&this.columns.some(e=>e.origField&&e.origField!==e.field.trim())}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return H`
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
            ${this.columns.map((r,i)=>{const n=this.dragSrcIdx===i,a=this.dropTargetIdx===i,c=a&&this.dropEdge==="before"?" drop-before":a&&this.dropEdge==="after"?" drop-after":"";return H`
                <div
                  class=${`col-row${n?" drag-source":""}${c}`}
                  @dragover=${f=>this.onRowDragOver(f,i,f.currentTarget)}
                  @dragleave=${()=>this.onRowDragLeave(i)}
                  @drop=${f=>this.onRowDrop(f,i)}
                >
                  <span
                    class="drag-handle"
                    title="Drag to reorder"
                    draggable="true"
                    @dragstart=${f=>this.onRowDragStart(f,i)}
                    @dragend=${()=>this.onRowDragEnd()}
                  >
                    <span class="mi sm">drag_indicator</span>
                  </span>
                  <input
                    type="text"
                    .value=${r.field}
                    @input=${f=>this.patchColumn(i,{field:f.target.value})}
                  />
                  <input
                    type="text"
                    .value=${r.label}
                    @input=${f=>this.patchColumn(i,{label:f.target.value})}
                  />
                  <select
                    .value=${r.type}
                    @change=${f=>this.patchColumn(i,{type:f.target.value})}
                  >
                    ${Bd.map(f=>H`<option value=${f} ?selected=${f===r.type}>${f}</option>`)}
                  </select>
                  <select
                    title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                    .value=${r.renderer??""}
                    @change=${f=>{const m=f.target.value;this.patchColumn(i,{renderer:m||void 0})}}
                  >
                    <option value="" ?selected=${!r.renderer}>— none —</option>
                    ${this.rendererOptions.map(f=>H`<option value=${f} ?selected=${f===r.renderer}>${f}</option>`)}
                  </select>
                  ${r.renderer==="script"?H`<button
                        type="button"
                        class="icon-btn"
                        title="Edit JS render(row)"
                        @click=${()=>this.editScript(i)}
                      >
                        <span class="mi sm">edit</span>
                      </button>`:H`<span></span>`}
                  <input
                    type="number"
                    min="0"
                    placeholder="—"
                    title="Max length (strings) or max value (numbers)"
                    .value=${r.max==null?"":String(r.max)}
                    @input=${f=>{const m=f.target.value;this.patchColumn(i,{max:m===""?void 0:Number(m)})}}
                  />
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Unique"
                      .checked=${!!r.unique}
                      @change=${f=>this.patchColumn(i,{unique:f.target.checked})}
                    />
                  </span>
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Not null"
                      .checked=${!!r.notnull}
                      @change=${f=>this.patchColumn(i,{notnull:f.target.checked})}
                    />
                  </span>
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Visible — uncheck to hide the column without losing its data"
                      .checked=${!r.hidden}
                      @change=${f=>this.patchColumn(i,{hidden:!f.target.checked})}
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

          ${this.renameDetected()?H`<div class="hint">
                Renamed fields will appear empty for existing rows — the row data
                isn't migrated automatically.
              </div>`:""}
          ${this.errorMsg?H`<div class="error">${this.errorMsg}</div>`:""}
          ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};At.styles=[en,fn,ot`
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
  `];Bt([ee()],At.prototype,"mode",2);Bt([ee()],At.prototype,"editTableId",2);Bt([ee()],At.prototype,"name",2);Bt([ee()],At.prototype,"columns",2);Bt([ee()],At.prototype,"errorMsg",2);Bt([ee()],At.prototype,"dragSrcIdx",2);Bt([ee()],At.prototype,"dropTargetIdx",2);Bt([ee()],At.prototype,"dropEdge",2);Bt([ee()],At.prototype,"previewRows",2);Bt([ee()],At.prototype,"rendererOptions",2);At=Bt([dt("new-table-dialog")],At);function Md(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function Nd(e,t,r){const i=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&i)return`${e.label}: empty`;if(i)return null;if(e.type==="number"&&typeof t!="number"){const n=Number(t);if(!Number.isFinite(n))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!i){const n=new Date(String(t));if(Number.isNaN(n.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&r?.has(t)?`${e.label}: duplicate`:null}function qd(e,t){const r=[];for(const i of e)if(i.notnull&&t.forEach((n,a)=>{const c=n.data[i.field];(c==null||typeof c=="string"&&c.trim()==="")&&r.push(`Row ${a+1}: ${i.label} is empty.`)}),i.max!=null&&i.max>0&&t.forEach((n,a)=>{const c=n.data[i.field];typeof c=="string"&&c.length>i.max?r.push(`Row ${a+1}: ${i.label} length ${c.length} > max ${i.max}.`):typeof c=="number"&&c>i.max&&r.push(`Row ${a+1}: ${i.label} value ${c} > max ${i.max}.`)}),i.unique){const n=new Map;t.forEach((a,c)=>{const f=a.data[i.field];f==null||f===""||(n.has(f)?r.push(`Row ${c+1}: ${i.label} duplicates row ${n.get(f)+1} ("${String(f)}").`):n.set(f,c))})}return r}function Ud(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Wd(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var Hd=Object.defineProperty,Kd=Object.getOwnPropertyDescriptor,Ft=(e,t,r,i)=>{for(var n=i>1?void 0:i?Kd(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Hd(t,r,n),n};let xt=class extends tt{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.builtinNames=[],this.optionalBuiltins=[],this.dirtyBuiltins=!1,this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&hn(this.dialogEl,e)}async open(){const e=await je(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const r=await e.store.plugins.find();this.records=new Map(r.map(a=>[a.url,a]));const i=[],n=[];for(const a of Cd){const c=a.meta?.name;if(c)if(a.meta?.optional){const f=this.records.get(Hi(c));n.push({name:c,...a.meta?.description?{description:a.meta.description}:{},...a.meta?.author?{author:a.meta.author}:{},enabled:f?.enabled!==!1})}else i.push(c)}this.builtinNames=i,this.optionalBuiltins=n,this.dirtyBuiltins=!1,this.addUrl="",await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(),this.refreshServerRegistry()}async refreshCatalog(){const e=new URL("/plugins/catalog.json",location.origin).toString();try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json(),i=Array.isArray(r.plugins)?r.plugins:[];this.catalog=i.map(n=>({...n,absUrl:new URL(n.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const r=(await(await je()).store.settings.findOne("server-sync:url"))?.value;if(typeof r!="string"||r.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const n=`${r.replace(/\/+$/,"")}/plugins/registry`;try{const a=await fetch(n,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);const c=await a.json(),f=Array.isArray(c.plugins)?c.plugins:[];this.serverCatalog=f.map(m=>({...m,absUrl:new URL(m.url,n).toString()})),this.serverCatalogError=null}catch(a){this.serverCatalog=[],this.serverCatalogError=a.message}}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await je()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const r=await je();await r.store.workspaces.patch(r.workspaceId,{pluginUrls:this.urls}),await r.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const r=await je(),i=this.records.get(e);await r.store.plugins.upsert({...i??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...i,url:e,enabled:t,lastFetched:i?.lastFetched??0}))}async removePlugin(e){const t=await je();this.urls=this.urls.filter(r=>r!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const r=await je(),i=Hi(e),n=this.records.get(i);await r.store.plugins.upsert({...n??{url:i,lastFetched:0},url:i,enabled:t,lastFetched:n?.lastFetched??0}),this.optionalBuiltins=this.optionalBuiltins.map(a=>a.name===e?{...a,enabled:t}:a),this.dirtyBuiltins=!0}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await je();try{const r=await fetch(e.absUrl,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const i=await r.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:i});const n=new Blob([i],{type:"text/javascript"}),a=URL.createObjectURL(n);try{const f=await import(a);await f.init?.(t.api),await f.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(a),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const c=await t.store.plugins.find();this.records=new Map(c.map(f=>[f.url,f])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(r){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${r.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${r.message}`,{kind:"error",title:"Plugin error"})}finally{const r=new Set(this.installing);r.delete(e.absUrl),this.installing=r}}render(){return H`
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
            ${this.catalog.length>0?H`<div class="section-h">Available from this host</div>`:""}
            ${this.catalog.map(e=>{const t=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return H`
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
            ${this.catalogError?H`<div class="meta err">
                  Host catalog unavailable: ${this.catalogError}
                </div>`:""}

            ${this.serverCatalog.length>0||this.serverCatalogError?H`<div class="section-h">From server</div>`:""}
            ${this.serverCatalog.map(e=>{const t=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return H`
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
            ${this.serverCatalogError?H`<div class="meta err">
                  Server registry unavailable: ${this.serverCatalogError}
                </div>`:""}

            ${this.optionalBuiltins.length>0?H`<div class="section-h">Optional built-ins</div>`:""}
            ${this.optionalBuiltins.map(e=>H`
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
            ${this.builtinNames.map(e=>H`
                <div class="row builtin">
                  <span class="mi sm">extension</span>
                  <div>
                    <div>${e}</div>
                    <div class="meta">Built-in</div>
                  </div>
                  <span class="meta">always on</span>
                </div>
              `)}

            ${this.urls.length>0?H`<div class="section-h">Installed (by URL)</div>`:""}
            ${this.urls.map(e=>{const t=this.records.get(e),r=t?.lastError?" error":"",i=t?.lastFetched?new Date(t.lastFetched).toLocaleString():"never";return H`
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
    `}};xt.styles=[en,fn,ot`
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
    `];Ft([ee()],xt.prototype,"urls",2);Ft([ee()],xt.prototype,"records",2);Ft([ee()],xt.prototype,"addUrl",2);Ft([ee()],xt.prototype,"builtinNames",2);Ft([ee()],xt.prototype,"optionalBuiltins",2);Ft([ee()],xt.prototype,"dirtyBuiltins",2);Ft([ee()],xt.prototype,"catalog",2);Ft([ee()],xt.prototype,"catalogError",2);Ft([ee()],xt.prototype,"serverCatalog",2);Ft([ee()],xt.prototype,"serverCatalogError",2);Ft([ee()],xt.prototype,"installing",2);xt=Ft([dt("plugin-manager-dialog")],xt);/**
 * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu
 * @version v4.16.1
 * @homepage https://jspanel.de/
 * @license MIT
 * @author Stefan Sträßer - info@jspanel.de
 * @author of dialog extension: Michael Daumling - michael@terrapinlogo.com
 * @github https://github.com/Flyer53/jsPanel4.git
 */let F={version:"4.16.1",date:"2022-11-03 09:18",ajaxAlwaysCallbacks:[],autopositionSpacing:4,closeOnEscape:(()=>{document.addEventListener("keydown",e=>{(e.key==="Escape"||e.code==="Escape"||e.key==="Esc")&&F.getPanels(t=>t.classList.contains("jsPanel")).some(t=>t.options.closeOnEscape?typeof t.options.closeOnEscape=="function"?t.options.closeOnEscape.call(t,t):(t.close(null,!0),!0):!1)},!1)})(),defaults:{boxShadow:3,container:"window",contentSize:{width:"400px",height:"200px"},dragit:{cursor:"move",handles:".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",opacity:.8,disableOnMaximized:!0},header:!0,headerTitle:"jsPanel",headerControls:{size:"md"},iconfont:void 0,maximizedMargin:0,minimizeTo:"default",paneltype:"standard",position:{my:"center",at:"center"},resizeit:{handles:"n, e, s, w, ne, se, sw, nw",minWidth:128,minHeight:38},theme:"default"},defaultAutocloseConfig:{time:"8s",progressbar:!0},defaultSnapConfig:{sensitivity:70,trigger:"panel",active:"both"},extensions:{},globalCallbacks:!1,icons:{close:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>',maximize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>',normalize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>',minimize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>',smallify:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>'},idCounter:0,isIE:document.documentMode||!1,pointerdown:"onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],pointermove:"onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],pointerup:"onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"],polyfills:(()=>{Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e==null)throw new TypeError("Cannot convert first argument to object");let t=Object(e);for(let r=1;r<arguments.length;r++){let i=arguments[r];if(i==null)continue;i=Object(i);let n=Object.keys(Object(i));for(let a=0,c=n.length;a<c;a++){let f=n[a],m=Object.getOwnPropertyDescriptor(i,f);m!==void 0&&m.enumerable&&(t[f]=i[f])}}return t}}),Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),r=t.length,i=new Array(r);r--;)i[r]=[t[r],e[t[r]]];return i}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(let r=0;r<this.length;r++)e.call(t,this[r],r,this)}),(function(e){e.forEach(function(t){t.append=t.append||function(){let r=Array.prototype.slice.call(arguments),i=document.createDocumentFragment();r.forEach(function(n){let a=n instanceof Node;i.appendChild(a?n:document.createTextNode(String(n)))}),this.appendChild(i)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){let t=(this.document||this.ownerDocument).querySelectorAll(e),r,i=this;do for(r=t.length;--r>=0&&t.item(r)!==i;);while(r<0&&(i=i.parentElement));return i}),(function(){if(typeof window.CustomEvent=="function")return!1;function e(t,r){r=r||{bubbles:!1,cancelable:!1,detail:void 0};let i=document.createEvent("CustomEvent");return i.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),i}e.prototype=window.Event.prototype,window.CustomEvent=e})(),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(t===void 0||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var r=t>0?t|0:0;return this.substring(r,r+e.length)===e}}),String.prototype.includes||(String.prototype.includes=function(e,t){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return t===void 0&&(t=0),this.indexOf(e,t)!==-1}),String.prototype.repeat||(String.prototype.repeat=function(e){if(this==null)throw new TypeError("can't convert "+this+" to object");var t=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),t.length==0||e==0)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,r-t.length),t}),Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw new TypeError('"this" is null or not defined');let r=Object(this),i=r.length>>>0;if(i===0)return!1;let n=t|0,a=Math.max(n>=0?n:i-Math.abs(n),0);function c(f,m){return f===m||typeof f=="number"&&typeof m=="number"&&isNaN(f)&&isNaN(m)}for(;a<i;){if(c(r[a],e))return!0;a++}return!1}})})(),ziBase:100,colorFilledLight:.81,colorFilledDark:.08,colorFilled:0,colorBrightnessThreshold:.55,colorNames:{default:"b0bec5",secondary:"b0bec5",primary:"01579b",info:"039be5",success:"2e7d32",warning:"f57f17",danger:"dd2c00",light:"e0e0e0",dark:"263238",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",grey50:"fafafa",grey100:"f5f5f5",grey200:"eeeeee",grey300:"e0e0e0",grey400:"bdbdbd",grey500:"9e9e9e",grey600:"757575",grey700:"616161",grey800:"424242",grey900:"212121",gray50:"fafafa",gray100:"f5f5f5",gray200:"eeeeee",gray300:"e0e0e0",gray400:"bdbdbd",gray500:"9e9e9e",gray600:"757575",gray700:"616161",gray800:"424242",gray900:"212121",bluegrey50:"eceff1",bluegrey100:"CFD8DC",bluegrey200:"B0BEC5",bluegrey300:"90A4AE",bluegrey400:"78909C",bluegrey500:"607D8B",bluegrey600:"546E7A",bluegrey700:"455A64",bluegrey800:"37474F",bluegrey900:"263238",bluegray50:"eceff1",bluegray100:"CFD8DC",bluegray200:"B0BEC5",bluegray300:"90A4AE",bluegray400:"78909C",bluegray500:"607D8B",bluegray600:"546E7A",bluegray700:"455A64",bluegray800:"37474F",bluegray900:"263238",red50:"FFEBEE",red100:"FFCDD2",red200:"EF9A9A",red300:"E57373",red400:"EF5350",red500:"F44336",red600:"E53935",red700:"D32F2F",red800:"C62828",red900:"B71C1C",reda100:"FF8A80",reda200:"FF5252",reda400:"FF1744",reda700:"D50000",pink50:"FCE4EC",pink100:"F8BBD0",pink200:"F48FB1",pink300:"F06292",pink400:"EC407A",pink500:"E91E63",pink600:"D81B60",pink700:"C2185B",pink800:"AD1457",pink900:"880E4F",pinka100:"FF80AB",pinka200:"FF4081",pinka400:"F50057",pinka700:"C51162",purple50:"F3E5F5",purple100:"E1BEE7",purple200:"CE93D8",purple300:"BA68C8",purple400:"AB47BC",purple500:"9C27B0",purple600:"8E24AA",purple700:"7B1FA2",purple800:"6A1B9A",purple900:"4A148C",purplea100:"EA80FC",purplea200:"E040FB",purplea400:"D500F9",purplea700:"AA00FF",deeppurple50:"EDE7F6",deeppurple100:"D1C4E9",deeppurple200:"B39DDB",deeppurple300:"9575CD",deeppurple400:"7E57C2",deeppurple500:"673AB7",deeppurple600:"5E35B1",deeppurple700:"512DA8",deeppurple800:"4527A0",deeppurple900:"311B92",deeppurplea100:"B388FF",deeppurplea200:"7C4DFF",deeppurplea400:"651FFF",deeppurplea700:"6200EA",indigo50:"E8EAF6",indigo100:"C5CAE9",indigo200:"9FA8DA",indigo300:"7986CB",indigo400:"5C6BC0",indigo500:"3F51B5",indigo600:"3949AB",indigo700:"303F9F",indigo800:"283593",indigo900:"1A237E",indigoa100:"8C9EFF",indigoa200:"536DFE",indigoa400:"3D5AFE",indigoa700:"304FFE",blue50:"E3F2FD",blue100:"BBDEFB",blue200:"90CAF9",blue300:"64B5F6",blue400:"42A5F5",blue500:"2196F3",blue600:"1E88E5",blue700:"1976D2",blue800:"1565C0",blue900:"0D47A1",bluea100:"82B1FF",bluea200:"448AFF",bluea400:"2979FF",bluea700:"2962FF",lightblue50:"E1F5FE",lightblue100:"B3E5FC",lightblue200:"81D4FA",lightblue300:"4FC3F7",lightblue400:"29B6F6",lightblue500:"03A9F4",lightblue600:"039BE5",lightblue700:"0288D1",lightblue800:"0277BD",lightblue900:"01579B",lightbluea100:"80D8FF",lightbluea200:"40C4FF",lightbluea400:"00B0FF",lightbluea700:"0091EA",cyan50:"E0F7FA",cyan100:"B2EBF2",cyan200:"80DEEA",cyan300:"4DD0E1",cyan400:"26C6DA",cyan500:"00BCD4",cyan600:"00ACC1",cyan700:"0097A7",cyan800:"00838F",cyan900:"006064",cyana100:"84FFFF",cyana200:"18FFFF",cyana400:"00E5FF",cyana700:"00B8D4",teal50:"E0F2F1",teal100:"B2DFDB",teal200:"80CBC4",teal300:"4DB6AC",teal400:"26A69A",teal500:"009688",teal600:"00897B",teal700:"00796B",teal800:"00695C",teal900:"004D40",teala100:"A7FFEB",teala200:"64FFDA",teala400:"1DE9B6",teala700:"00BFA5",green50:"E8F5E9",green100:"C8E6C9",green200:"A5D6A7",green300:"81C784",green400:"66BB6A",green500:"4CAF50",green600:"43A047",green700:"388E3C",green800:"2E7D32",green900:"1B5E20",greena100:"B9F6CA",greena200:"69F0AE",greena400:"00E676",greena700:"00C853",lightgreen50:"F1F8E9",lightgreen100:"DCEDC8",lightgreen200:"C5E1A5",lightgreen300:"AED581",lightgreen400:"9CCC65",lightgreen500:"8BC34A",lightgreen600:"7CB342",lightgreen700:"689F38",lightgreen800:"558B2F",lightgreen900:"33691E",lightgreena100:"CCFF90",lightgreena200:"B2FF59",lightgreena400:"76FF03",lightgreena700:"64DD17",lime50:"F9FBE7",lime100:"F0F4C3",lime200:"E6EE9C",lime300:"DCE775",lime400:"D4E157",lime500:"CDDC39",lime600:"C0CA33",lime700:"AFB42B",lime800:"9E9D24",lime900:"827717",limea100:"F4FF81",limea200:"EEFF41",limea400:"C6FF00",limea700:"AEEA00",yellow50:"FFFDE7",yellow100:"FFF9C4",yellow200:"FFF59D",yellow300:"FFF176",yellow400:"FFEE58",yellow500:"FFEB3B",yellow600:"FDD835",yellow700:"FBC02D",yellow800:"F9A825",yellow900:"F57F17",yellowa100:"FFFF8D",yellowa200:"FFFF00",yellowa400:"FFEA00",yellowa700:"FFD600",amber50:"FFF8E1",amber100:"FFECB3",amber200:"FFE082",amber300:"FFD54F",amber400:"FFCA28",amber500:"FFC107",amber600:"FFB300",amber700:"FFA000",amber800:"FF8F00",amber900:"FF6F00",ambera100:"FFE57F",ambera200:"FFD740",ambera400:"FFC400",ambera700:"FFAB00",orange50:"FFF3E0",orange100:"FFE0B2",orange200:"FFCC80",orange300:"FFB74D",orange400:"FFA726",orange500:"FF9800",orange600:"FB8C00",orange700:"F57C00",orange800:"EF6C00",orange900:"E65100",orangea100:"FFD180",orangea200:"FFAB40",orangea400:"FF9100",orangea700:"FF6D00",deeporange50:"FBE9E7",deeporange100:"FFCCBC",deeporange200:"FFAB91",deeporange300:"FF8A65",deeporange400:"FF7043",deeporange500:"FF5722",deeporange600:"F4511E",deeporange700:"E64A19",deeporange800:"D84315",deeporange900:"BF360C",deeporangea100:"FF9E80",deeporangea200:"FF6E40",deeporangea400:"FF3D00",deeporangea700:"DD2C00",brown50:"EFEBE9",brown100:"D7CCC8",brown200:"BCAAA4",brown300:"A1887F",brown400:"8D6E63",brown500:"795548",brown600:"6D4C41",brown700:"5D4037",brown800:"4E342E",brown900:"3E2723","mdb-default":"2BBBAD","mdb-default-dark":"00695c","mdb-primary":"4285F4","mdb-primary-dark":"0d47a1","mdb-secondary":"aa66cc","mdb-secondary-dark":"9933CC","mdb-danger":"ff4444","mdb-danger-dark":"CC0000","mdb-warning":"ffbb33","mdb-warning-dark":"FF8800","mdb-success":"00C851","mdb-success-dark":"007E33","mdb-info":"33b5e5","mdb-info-dark":"0099CC","mdb-elegant":"2E2E2E","mdb-elegant-dark":"212121","mdb-stylish":"4B515D","mdb-stylish-dark":"3E4551","mdb-unique":"3F729B","mdb-unique-dark":"1C2331","mdb-special":"37474F","mdb-special-dark":"263238"},errorReporting:1,modifier:!1,helper:(()=>{document.addEventListener("keydown",e=>F.modifier=e),document.addEventListener("keyup",()=>F.modifier=!1)})(),usePointerEvents(e=!0){e?(this.pointerdown="onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"]):(this.pointerdown="ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="ontouchend"in window?["touchend","mouseup"]:["mouseup"])},pOcontainer(e){if(e==="window")return document.body;if(typeof e=="string"){let t=document.querySelectorAll(e);return t.length&&t.length>0?t:!1}else{if(e.nodeType===1)return e;if(e.length)return e[0]}return!1},pOcontainment(e){let t=e;if(typeof e=="function"&&(t=e()),typeof t=="number")return[t,t,t,t];if(Array.isArray(t)){if(t.length===1)return[t[0],t[0],t[0],t[0]];if(t.length===2)return t.concat(t);t.length===3&&(t[3]=t[1])}return t},pOsize(e,t){let r=t||this.defaults.contentSize;const i=e.parentElement;if(typeof r=="string"){const n=r.trim().split(" ");r={},r.width=n[0],n.length===2?r.height=n[1]:r.height=n[0]}else r.width&&!r.height?r.height=r.width:r.height&&!r.width&&(r.width=r.height);if(String(r.width).match(/^[\d.]+$/gi))r.width+="px";else if(typeof r.width=="string"&&r.width.endsWith("%"))if(i===document.body)r.width=window.innerWidth*(parseFloat(r.width)/100)+"px";else{const n=window.getComputedStyle(i),a=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth);r.width=(parseFloat(n.width)-a)*(parseFloat(r.width)/100)+"px"}else typeof r.width=="function"&&(r.width=r.width.call(e,e),(typeof r.width=="number"||typeof r.width=="string"&&r.width.match(/^[\d.]+$/gi))&&(r.width+="px"));if(String(r.height).match(/^[\d.]+$/gi))r.height+="px";else if(typeof r.height=="string"&&r.height.endsWith("%"))if(i===document.body)r.height=window.innerHeight*(parseFloat(r.height)/100)+"px";else{const n=window.getComputedStyle(i),a=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth);r.height=(parseFloat(n.height)-a)*(parseFloat(r.height)/100)+"px"}else typeof r.height=="function"&&(r.height=r.height.call(e,e),(typeof r.height=="number"||typeof r.height=="string"&&r.height.match(/^[\d.]+$/gi))&&(r.height+="px"));return r},pOborder(e){let t=[],r=e.trim().replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," ").split(" ");return r.forEach((i,n)=>{(i.startsWith("--")||i.startsWith("var"))&&(r[n]=F.getCssVariableValue(i))}),r.forEach(i=>{F.colorNames[i]?t[2]="#"+F.colorNames[i]:i.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/)?t[1]=i:i.match(/(thin|medium|thick)|(\d*\.?\d*(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vmax|vmin|vb|vi|px|cm|mm|Q|in|pc|pt))/)?t[0]=i:t[2]=i}),t[0]||(t[0]="medium"),t[1]||(t[1]="solid"),t[2]||(t[2]=""),t},pOheaderControls(e){if(typeof e=="string"){let t={},r=e.toLowerCase(),i=r.match(/xl|lg|md|sm|xs/),n=r.match(/closeonly|none/);return i&&(t.size=i[0]),n&&(t=Object.assign({},t,{maximize:"remove",normalize:"remove",minimize:"remove",smallify:"remove"}),n[0]==="none"&&(t.close="remove")),Object.assign({},this.defaults.headerControls,t)}else return Object.assign({},this.defaults.headerControls,e)},pOtheme(e){e=e.trim();let t,r="";if(e.match(/^(rgb|hsl|var)/)){let i=e.indexOf(")");t=e.slice(0,i+1).replace(/\s+/g,""),t.startsWith("var")&&(t=F.getCssVariableValue(t)),r=e.slice(i+1,e.length).trim()}else if(e.match(/^(#|\w|--)/)){let i=e.indexOf(" ");i>0?(t=e.slice(0,i+1).replace(/\s+/g,""),r=e.slice(i+1,e.length).trim()):t=e,t.startsWith("--")&&(t=F.getCssVariableValue(t))}if(t.match(/^([\da-f]{3}|[\da-f]{6})$/gi)&&(t="#"+t),r.startsWith("fillcolor")){let i=r.indexOf(" ");r=r.slice(i+1,r.length).trim().replace(/\s+/g,""),r.match(/^([\da-f]{3}|[\da-f]{6})$/gi)?r="#"+r:F.colorNames[r]?r="#"+F.colorNames[r]:r.match(/^(--|var)/)?r=F.getCssVariableValue(r):r="#fff"}return{color:t,colors:!1,filling:r}},color(e){let t=e.toLowerCase(),r,i,n,a,c,f,m,k,_,E={};const z=/^#?([\da-f]{3}|[\da-f]{6})$/gi,M=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,q=/^hsla?\((\d{1,3}),(\d{1,3}%),(\d{1,3}%),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,te=this.colorNames;return te[t]&&(t=te[t]),t.match(z)!==null?(t=t.replace("#",""),t.length%2===1?(r=t.slice(0,1).repeat(2),i=t.slice(1,2).repeat(2),n=t.slice(2,3).repeat(2),E.rgb={r:parseInt(r,16),g:parseInt(i,16),b:parseInt(n,16)},E.hex=`#${r}${i}${n}`):(E.rgb={r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)},E.hex=`#${t}`),_=this.rgbToHsl(E.rgb.r,E.rgb.g,E.rgb.b),E.hsl=_,E.rgb.css=`rgb(${E.rgb.r},${E.rgb.g},${E.rgb.b})`):t.match(M)?(m=M.exec(t),E.rgb={css:t,r:m[1],g:m[2],b:m[3]},E.hex=this.rgbToHex(m[1],m[2],m[3]),_=this.rgbToHsl(m[1],m[2],m[3]),E.hsl=_):t.match(q)?(m=q.exec(t),a=m[1]/360,c=m[2].slice(0,m[2].length-1)/100,f=m[3].slice(0,m[3].length-1)/100,k=this.hslToRgb(a,c,f),E.rgb={css:`rgb(${k[0]},${k[1]},${k[2]})`,r:k[0],g:k[1],b:k[2]},E.hex=this.rgbToHex(E.rgb.r,E.rgb.g,E.rgb.b),E.hsl={css:`hsl(${m[1]},${m[2]},${m[3]})`,h:m[1],s:m[2],l:m[3]}):(E.hex="#f5f5f5",E.rgb={css:"rgb(245,245,245)",r:245,g:245,b:245},E.hsl={css:"hsl(0,0%,96%)",h:0,s:"0%",l:"96%"}),E},calcColors(e){const t=this.colorBrightnessThreshold,r=this.color(e),i=this.lighten(e,this.colorFilledLight),n=this.darken(e,this.colorFilled),a=this.perceivedBrightness(e)<=t?"#ffffff":"#000000",c=this.perceivedBrightness(i)<=t?"#ffffff":"#000000",f=this.perceivedBrightness(n)<=t?"#ffffff":"#000000",m=this.lighten(e,this.colorFilledDark),k=this.perceivedBrightness(m)<=t?"#ffffff":"#000000";return[r.hsl.css,i,n,a,c,f,m,k]},darken(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i-i*t)+"%";return`hsl(${r.h},${r.s},${n})`},lighten(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i+(100-i)*t)+"%";return`hsl(${r.h},${r.s},${n})`},hslToRgb(e,t,r){let i,n,a;if(t===0)i=n=a=r;else{let c=(k,_,E)=>(E<0&&(E+=1),E>1&&(E-=1),E<.16666666666666666?k+(_-k)*6*E:E<.5?_:E<.6666666666666666?k+(_-k)*(.6666666666666666-E)*6:k),f=r<.5?r*(1+t):r+t-r*t,m=2*r-f;i=c(m,f,e+1/3),n=c(m,f,e),a=c(m,f,e-1/3)}return[Math.round(i*255),Math.round(n*255),Math.round(a*255)]},rgbToHsl(e,t,r){e/=255,t/=255,r/=255;let i=Math.max(e,t,r),n=Math.min(e,t,r),a,c,f=(i+n)/2;if(i===n)a=c=0;else{let m=i-n;switch(c=f>.5?m/(2-i-n):m/(i+n),i){case e:a=(t-r)/m+(t<r?6:0);break;case t:a=(r-e)/m+2;break;case r:a=(e-t)/m+4;break}a/=6}return a=Math.round(a*360),c=Math.round(c*100)+"%",f=Math.round(f*100)+"%",{css:"hsl("+a+","+c+","+f+")",h:a,s:c,l:f}},rgbToHex(e,t,r){let i=Number(e).toString(16),n=Number(t).toString(16),a=Number(r).toString(16);return i.length===1&&(i=`0${i}`),n.length===1&&(n=`0${n}`),a.length===1&&(a=`0${a}`),`#${i}${n}${a}`},perceivedBrightness(e){const t=this.color(e).rgb;return t.r/255*.2126+t.g/255*.7152+t.b/255*.0722},pOposition(e){let t={},r=e.trim().split(/\s+/),i=r.filter(c=>c.match(/^(down|right|up|left)$/i));i.length&&(t.autoposition=i[0],r.splice(r.indexOf(i[0]),1));let n=r.filter(c=>c.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i));n.length?(t.my=n[0],t.at=n[1]||n[0],r.splice(r.indexOf(n[0]),1),n[1]&&r.splice(r.indexOf(n[1]),1)):(t.my="center",t.at="center");let a=r.filter(c=>c.match(/^[+-]?\d*\.?\d+[a-z%]*$/i));return a.length&&(t.offsetX=a[0].match(/^[+-]?\d*\.?\d+$/i)?`${a[0]}px`:a[0],a[1]?t.offsetY=a[1].match(/^[+-]?\d*\.?\d+$/i)?`${a[1]}px`:a[1]:t.offsetY=t.offsetX,r.splice(r.indexOf(a[0]),1),a[1]&&r.splice(r.indexOf(a[1]),1)),r.length&&(t.of=r.join(" ")),t},position(e,t){if(!t)return e.style.opacity=1,e;typeof t=="string"?t=Object.assign({},this.defaults.position,this.pOposition(t)):t=Object.assign({},this.defaults.position,t),["my","at","of"].forEach(te=>{typeof t[te]=="function"&&(t[te]=t[te].call(e,e))}),e.options.container==="window"&&(e.style.position="fixed"),typeof e=="string"?e=document.querySelector(e):Object.getPrototypeOf(e).jquery&&(e=e[0]);const r=e.options.container==="window"?"window":e.parentElement,i=e.getBoundingClientRect(),n=e.parentElement.getBoundingClientRect(),a=r==="window"?{left:0,top:0,width:document.documentElement.clientWidth,height:window.innerHeight}:{width:n.width,height:n.height,left:n.left,top:n.top},c=r==="window"?{x:1,y:1}:{x:a.width/r.offsetWidth,y:a.height/r.offsetHeight},f=r==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:window.getComputedStyle(r);a.width-=(parseFloat(f.borderLeftWidth)+parseFloat(f.borderRightWidth))*c.x,a.height-=(parseFloat(f.borderTopWidth)+parseFloat(f.borderBottomWidth))*c.y;let m;t.of?typeof t.of=="string"?m=t.of==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:document.querySelector(t.of).getBoundingClientRect():Object.getPrototypeOf(t.of).jquery?m=t.of[0].getBoundingClientRect():m=t.of.getBoundingClientRect():m=a;let k=this.getScrollbarWidth(document.body),_=this.getScrollbarWidth(e.parentElement),E="0px";t.my.startsWith("left-")?t.at.startsWith("left-")?t.of?E=m.left-a.left-parseFloat(f.borderLeftWidth)+"px":E="0px":t.at.startsWith("center")?t.of?E=m.left-a.left-parseFloat(f.borderLeftWidth)+m.width/2+"px":E=a.width/2+"px":t.at.startsWith("right-")&&(t.of?E=m.left-a.left-parseFloat(f.borderLeftWidth)+m.width+"px":E=a.width+"px"):t.my.startsWith("center")?t.at.startsWith("left-")?t.of?E=m.left-a.left-parseFloat(f.borderLeftWidth)-i.width/2+"px":E=-i.width/2+"px":t.at.startsWith("center")?t.of?E=m.left-a.left-parseFloat(f.borderLeftWidth)-(i.width-m.width)/2+"px":E=a.width/2-i.width/2+"px":t.at.startsWith("right-")&&(t.of?E=m.left-a.left-parseFloat(f.borderLeftWidth)+(m.width-i.width/2)+"px":E=a.width-i.width/2+"px"):t.my.startsWith("right-")&&(t.at.startsWith("left-")?t.of?E=m.left-a.left-parseFloat(f.borderLeftWidth)-i.width+"px":E=-i.width+"px":t.at.startsWith("center")?t.of?E=m.left-a.left-parseFloat(f.borderLeftWidth)-i.width+m.width/2+"px":E=a.width/2-i.width+"px":t.at.startsWith("right-")&&(t.of?E=m.left-a.left-parseFloat(f.borderLeftWidth)+m.width-i.width+"px":E=a.width-i.width+"px",r!=="window"&&(E=parseFloat(E)-_.y+"px")));let z="0px";t.my.endsWith("-top")?t.at.endsWith("-top")?t.of?z=m.top-a.top-parseFloat(f.borderTopWidth)+"px":z="0px":t.at.endsWith("center")?t.of?z=m.top-a.top-parseFloat(f.borderTopWidth)+m.height/2+"px":z=a.height/2+"px":t.at.endsWith("-bottom")&&(t.of?z=m.top-a.top-parseFloat(f.borderTopWidth)+m.height+"px":z=a.height+"px"):t.my.endsWith("center")?t.at.endsWith("-top")?t.of?z=m.top-a.top-parseFloat(f.borderTopWidth)-i.height/2+"px":z=-i.height/2+"px":t.at.endsWith("center")?t.of?z=m.top-a.top-parseFloat(f.borderTopWidth)-i.height/2+m.height/2+"px":z=a.height/2-i.height/2+"px":t.at.endsWith("-bottom")&&(t.of?z=m.top-a.top-parseFloat(f.borderTopWidth)-i.height/2+m.height+"px":z=a.height-i.height/2+"px"):t.my.endsWith("-bottom")&&(t.at.endsWith("-top")?t.of?z=m.top-a.top-parseFloat(f.borderTopWidth)-i.height+"px":z=-i.height+"px":t.at.endsWith("center")?t.of?z=m.top-a.top-parseFloat(f.borderTopWidth)-i.height+m.height/2+"px":z=a.height/2-i.height+"px":t.at.endsWith("-bottom")&&(t.of?z=m.top-a.top-parseFloat(f.borderTopWidth)-i.height+m.height+"px":z=a.height-i.height+"px",r!=="window"?z=parseFloat(z)-_.x+"px":z=parseFloat(z)-k.x+"px")),e.style.left=c.x===1?E:parseFloat(E)/c.x+"px",e.style.top=c.y===1?z:parseFloat(z)/c.y+"px";let M=getComputedStyle(e),q={left:M.left,top:M.top};return t.autoposition&&t.my===t.at&&["left-top","center-top","right-top","left-bottom","center-bottom","right-bottom"].indexOf(t.my)>=0&&(q=this.applyPositionAutopos(e,q,t)),(t.offsetX||t.offsetY)&&(q=this.applyPositionOffset(e,q,t)),(t.minLeft||t.minTop||t.maxLeft||t.maxTop)&&(q=this.applyPositionMinMax(e,q,t)),t.modify&&(q=this.applyPositionModify(e,q,t)),typeof e.options.opacity=="number"?e.style.opacity=e.options.opacity:e.style.opacity=1,e},applyPositionAutopos(e,t,r){const i=`${r.my}-${r.autoposition.toLowerCase()}`;e.classList.add(i);const n=Array.prototype.slice.call(document.querySelectorAll(`.${i}`)),a=n.indexOf(e);if(n.length>1){switch(r.autoposition){case"down":n.forEach((c,f)=>{f>0&&f<=a&&(t.top=parseFloat(t.top)+n[--f].getBoundingClientRect().height+F.autopositionSpacing+"px")});break;case"up":n.forEach((c,f)=>{f>0&&f<=a&&(t.top=parseFloat(t.top)-n[--f].getBoundingClientRect().height-F.autopositionSpacing+"px")});break;case"right":n.forEach((c,f)=>{f>0&&f<=a&&(t.left=parseFloat(t.left)+n[--f].getBoundingClientRect().width+F.autopositionSpacing+"px")});break;case"left":n.forEach((c,f)=>{f>0&&f<=a&&(t.left=parseFloat(t.left)-n[--f].getBoundingClientRect().width-F.autopositionSpacing+"px")});break}e.style.left=t.left,e.style.top=t.top}return{left:t.left,top:t.top}},applyPositionOffset(e,t,r){["offsetX","offsetY"].forEach(n=>{r[n]?(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),isNaN(r[n])===!1&&(r[n]=`${r[n]}px`)):r[n]="0px"}),e.style.left=`calc(${e.style.left} + ${r.offsetX})`,e.style.top=`calc(${e.style.top} + ${r.offsetY})`;const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionMinMax(e,t,r){if(["minLeft","minTop","maxLeft","maxTop"].forEach(n=>{r[n]&&(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),(Number.isInteger(r[n])||r[n].match(/^\d+$/))&&(r[n]=`${r[n]}px`))}),r.minLeft){e.style.left=r.minLeft;let n=getComputedStyle(e).left;parseFloat(n)<parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.minTop){e.style.top=r.minTop;let n=getComputedStyle(e).top;parseFloat(n)<parseFloat(t.top)?e.style.top=t.top:t.top=n}if(r.maxLeft){e.style.left=r.maxLeft;let n=getComputedStyle(e).left;parseFloat(n)>parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.maxTop){e.style.top=r.maxTop;let n=getComputedStyle(e).top;parseFloat(n)>parseFloat(t.top)?e.style.top=t.top:t.top=n}const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionModify(e,t,r){if(r.modify&&typeof r.modify=="function"){const n=r.modify.call(t,t,r);e.style.left=Number.isInteger(n.left)||n.left.match(/^\d+$/)?`${n.left}px`:n.left,e.style.top=Number.isInteger(n.top)||n.top.match(/^\d+$/)?`${n.top}px`:n.top}const i=getComputedStyle(e);return{left:i.left,top:i.top}},autopositionRemaining(e){let t,r=e.options.container;["left-top-down","left-top-right","center-top-down","right-top-down","right-top-left","left-bottom-up","left-bottom-right","center-bottom-up","right-bottom-up","right-bottom-left"].forEach(i=>{e.classList.contains(i)&&(t=i)}),t&&(r==="window"?document.body:typeof r=="string"?document.querySelector(r):r).querySelectorAll(`.${t}`).forEach(n=>n.reposition())},getThemeDetails(e){const t=this.pOtheme(e);if(t.color.startsWith("bootstrap-")){let r=t.color.indexOf("-"),i=document.createElement("button");i.className="btn btn"+t.color.slice(r),document.body.appendChild(i),t.color=getComputedStyle(i).backgroundColor.replace(/\s+/gi,""),document.body.removeChild(i),i=void 0}return t.colors=this.calcColors(t.color),t},clearTheme(e,t){return e.content.classList.remove("jsPanel-content-filled","jsPanel-content-filledlight"),e.header.classList.remove("jsPanel-hdr-light"),e.header.classList.remove("jsPanel-hdr-dark"),e.style.backgroundColor="",this.setStyles(e.headertoolbar,{boxShadow:"",width:"",marginLeft:"",borderTopColor:"transparent"}),this.setStyles(e.content,{background:"",borderTopColor:"transparent"}),e.header.style.background="",Array.prototype.slice.call(e.controlbar.querySelectorAll(".jsPanel-icon")).concat([e.headerlogo,e.headertitle,e.headertoolbar,e.content]).forEach(r=>r.style.color=""),t&&t.call(e,e),e},applyColorTheme(e,t){if(e.style.backgroundColor=t.colors[0],e.header.style.backgroundColor=t.colors[0],e.header.style.color=t.colors[3],[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(r=>e.querySelector(r).style.color=t.colors[3]),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(r=>r.style.color=t.colors[3]),typeof e.options.theme=="string"&&t.filling==="filled"&&(e.content.style.borderTop=t.colors[3]==="#000000"?"1px solid rgba(0,0,0,0.15)":"1px solid rgba(255,255,255,0.15)"),t.colors[3]==="#000000"?e.header.classList.add("jsPanel-hdr-light"):e.header.classList.add("jsPanel-hdr-dark"),t.filling)switch(t.filling){case"filled":this.setStyles(e.content,{backgroundColor:t.colors[2],color:t.colors[3]});break;case"filledlight":e.content.style.backgroundColor=t.colors[1];break;case"filleddark":this.setStyles(e.content,{backgroundColor:t.colors[6],color:t.colors[7]});break;default:e.content.style.backgroundColor=t.filling,e.content.style.color=this.perceivedBrightness(t.filling)<=this.colorBrightnessThreshold?"#fff":"#000"}return e},applyCustomTheme(e,t){let r={bgPanel:"#ffffff",bgContent:"#ffffff",bgFooter:"#f5f5f5",colorHeader:"#000000",colorContent:"#000000",colorFooter:"#000000",border:void 0,borderRadius:void 0},i=typeof t=="object"?Object.assign(r,t):r,n=i.bgPanel,a=i.bgContent,c=i.colorHeader,f=i.colorContent,m=i.bgFooter,k=i.colorFooter;return this.colorNames[n]?e.style.background="#"+this.colorNames[n]:e.style.background=this.getCssVariableValue(n),this.colorNames[c]&&(c="#"+this.colorNames[c]),[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(z=>e.querySelector(z).style.color=this.getCssVariableValue(c)),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(z=>z.style.color=this.getCssVariableValue(c)),this.colorNames[a]?e.content.style.background="#"+this.colorNames[a]:e.content.style.background=this.getCssVariableValue(a),this.colorNames[f]?e.content.style.color="#"+this.colorNames[f]:e.content.style.color=this.getCssVariableValue(f),this.perceivedBrightness(c)>this.colorBrightnessThreshold?e.header.classList.add("jsPanel-hdr-dark"):e.header.classList.add("jsPanel-hdr-light"),this.perceivedBrightness(f)>this.colorBrightnessThreshold?e.content.style.borderTop="1px solid rgba(255,255,255,0.15)":e.content.style.borderTop="1px solid rgba(0,0,0,0.15)",this.colorNames[m]?e.footer.style.background="#"+this.colorNames[m]:e.footer.style.background=this.getCssVariableValue(m),this.colorNames[k]?e.footer.style.color="#"+this.colorNames[k]:e.footer.style.color=this.getCssVariableValue(k),i.border&&e.setBorder(i.border),i.borderRadius&&(e.options.borderRadius=void 0,e.setBorderRadius(i.borderRadius)),e},getCssVariableValue(e){if(e.startsWith("--"))return getComputedStyle(document.documentElement).getPropertyValue(e).replace(/\s+/g,"");if(e.startsWith("var")){let t=e.slice(e.indexOf("(")+1,e.indexOf(")"));return getComputedStyle(document.documentElement).getPropertyValue(t).replace(/\s+/g,"")}return e},getScrollbarWidth(e=document.body){if(e===document.body)return{y:window.innerWidth-document.documentElement.clientWidth,x:window.innerHeight-document.documentElement.clientHeight};{let t=getComputedStyle(e);return{y:e.offsetWidth-e.clientWidth-parseFloat(t.borderRightWidth)-parseFloat(t.borderLeftWidth),x:e.offsetHeight-e.clientHeight-parseFloat(t.borderBottomWidth)-parseFloat(t.borderTopWidth)}}},remClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.remove(r)),e},setClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.add(r)),e},setStyles(e,t){for(const[r,i]of Object.entries(t))e.style[r]=typeof i=="string"?F.getCssVariableValue(i):i;return e},setStyle(e,t){return this.setStyles.call(e,e,t)},strToHtml(e){return document.createRange().createContextualFragment(e)},toggleClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.contains(r)?e.classList.remove(r):e.classList.add(r)),e},emptyNode(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e},addScript(e,t="application/javascript",r){if(!document.querySelector(`script[src="${e}"]`)){const i=document.createElement("script");i.src=e,i.type=t,document.head.appendChild(i),r&&(i.onload=r)}},ajax(e,t){let r,i,n=new XMLHttpRequest;const a={method:"GET",async:!0,user:"",pwd:"",done:function(){if(t){let c=F.strToHtml(this.responseText);r.urlSelector&&(c=c.querySelector(r.urlSelector)),t.contentRemove(),t.content.append(c)}},autoresize:!0,autoreposition:!0};if(t&&typeof e=="string")r=Object.assign({},a,{url:e});else if(typeof e=="object"&&e.url)r=Object.assign({},a,e),r.url=e.url,r.async===!1&&(r.timeout=0,r.withCredentials&&(r.withCredentials=void 0),r.responseType&&(r.responseType=void 0));else{this.errorReporting&&F.errorpanel("XMLHttpRequest seems to miss the <mark>url</mark> parameter!");return}i=r.url.trim().split(/\s+/),r.url=encodeURI(i[0]),i.length>1&&(i.shift(),r.urlSelector=i.join(" ")),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?t?r.done.call(n,n,t):r.done.call(n,n):r.fail&&(t?r.fail.call(n,n,t):r.fail.call(n,n)),r.always&&(t?r.always.call(n,n,t):r.always.call(n,n)),t&&(r.autoresize||r.autoreposition)&&F.ajaxAutoresizeAutoreposition(t,r),F.ajaxAlwaysCallbacks.length&&F.ajaxAlwaysCallbacks.forEach(c=>{t?c.call(n,n,t):c.call(n,n)}))},n.open(r.method,r.url,r.async,r.user,r.pwd),n.timeout=r.timeout||0,r.withCredentials&&(n.withCredentials=r.withCredentials),r.responseType&&(n.responseType=r.responseType),r.beforeSend&&(t?r.beforeSend.call(n,n,t):r.beforeSend.call(n,n)),r.data?n.send(r.data):n.send(null)},fetch(e,t){let r;const i={bodyMethod:"text",autoresize:!0,autoreposition:!0,done:function(a,c){if(c){let f=F.strToHtml(a);c.contentRemove(),c.content.append(f)}}};if(t&&typeof e=="string")r=Object.assign({},i,{resource:encodeURI(e)});else if(typeof e=="object"&&e.resource)r=Object.assign({},i,e),r.resource=encodeURI(e.resource);else{this.errorReporting&&F.errorpanel("Fetch Request seems to miss the <mark>resource</mark> parameter!");return}const n=r.fetchInit||{};r.beforeSend&&(t?r.beforeSend.call(e,e,t):r.beforeSend.call(e,e)),fetch(r.resource,n).then(a=>{if(a.ok)return a[r.bodyMethod]()}).then(a=>{t?r.done.call(a,a,t):r.done.call(a,a),t&&(r.autoresize||r.autoreposition)&&F.ajaxAutoresizeAutoreposition(t,r)})},ajaxAutoresizeAutoreposition(e,t){const r=e.options.contentSize;if(typeof r=="string"&&r.match(/auto/i)){const i=r.split(" "),n=Object.assign({},{width:i[0],height:i[1]});t.autoresize&&e.resize(n),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}else if(typeof r=="object"&&(r.width==="auto"||r.height==="auto")){const i=Object.assign({},r);t.autoresize&&e.resize(i),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}},createPanelTemplate(e=!0){const t=document.createElement("div");return t.className="jsPanel",t.style.left="0",t.style.top="0",e&&["close","maximize","normalize","minimize","smallify"].forEach(r=>{t.setAttribute(`data-btn${r}`,"enabled")}),t.innerHTML=`<div class="jsPanel-hdr">
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
                            </div>`,e},createSnapArea(e,t,r){const i=document.createElement("div"),n=e.parentElement;i.className=`jsPanel-snap-area jsPanel-snap-area-${t}`,t==="lt"||t==="rt"||t==="rb"||t==="lb"?(i.style.width=r+"px",i.style.height=r+"px"):t==="ct"||t==="cb"?i.style.height=r+"px":(t==="lc"||t==="rc")&&(i.style.width=r+"px"),n!==document.body&&(i.style.position="absolute"),document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${t}`)||e.parentElement.appendChild(i)},removeSnapAreas(){document.querySelectorAll(".jsPanel-snap-area").forEach(e=>e.parentElement.removeChild(e))},extend(e){if(Object.prototype.toString.call(e)==="[object Object]")for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this.extensions[t]=e[t])},getPanels(e=function(){return this.classList.contains("jsPanel-standard")}){return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(t=>e.call(t,t)).sort((t,r)=>r.style.zIndex-t.style.zIndex)},processCallbacks(e,t,r="some",i,n){if(typeof t=="function"&&(t=[t]),r)return t[r](a=>a.call(e,e,i,n));t.forEach(a=>a.call(e,e,i,n))},resetZi(){this.zi=((e=F.ziBase)=>{let t=e;return{next:()=>t++}})(),Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((e,t)=>e.style.zIndex-t.style.zIndex).forEach(e=>e.style.zIndex=F.zi.next())},errorpanel(e){this.create({paneltype:"error",dragit:!1,resizeit:!1,theme:{bgPanel:"white",bgContent:"white",colorHeader:"rebeccapurple",colorContent:"#333333",border:"2px solid rebeccapurple"},borderRadius:".33rem",headerControls:"closeonly xs",headerTitle:"&#9888; jsPanel Error",contentSize:{width:"50%",height:"auto"},position:"center-top 0 5 down",animateIn:"jsPanelFadeIn",content:`<div class="jsPanel-error-content-separator"></div><p>${e}</p>`})},create(e={},t){F.zi||(F.zi=((p=F.ziBase)=>{let v=p;return{next:()=>v++}})()),e.config?(e=Object.assign({},this.defaults,e.config,e),delete e.config):e=Object.assign({},this.defaults,e),e.id?typeof e.id=="function"&&(e.id=e.id()):e.id=`jsPanel-${F.idCounter+=1}`;const r=document.getElementById(e.id);if(r!==null){if(r.classList.contains("jsPanel")&&r.front(),this.errorReporting){let p=`&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${e.id}</mark> already exists in the document.`;F.errorpanel(p)}return!1}let i=this.pOcontainer(e.container);if(typeof i=="object"&&i.length&&i.length>0&&(i=i[0]),!i)return this.errorReporting&&F.errorpanel("&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist"),!1;["onbeforeclose","onbeforemaximize","onbeforeminimize","onbeforenormalize","onbeforesmallify","onbeforeunsmallify","onclosed","onfronted","onmaximized","onminimized","onnormalized","onsmallified","onstatuschange","onunsmallified"].forEach(p=>{e[p]?typeof e[p]=="function"&&(e[p]=[e[p]]):e[p]=[]});const n=e.template||this.createPanelTemplate();n.options=e,n.closetimer=void 0,n.status="initialized",n.currentData={},n.header=n.querySelector(".jsPanel-hdr"),n.headerbar=n.header.querySelector(".jsPanel-headerbar"),n.titlebar=n.header.querySelector(".jsPanel-titlebar"),n.headerlogo=n.headerbar.querySelector(".jsPanel-headerlogo"),n.headertitle=n.headerbar.querySelector(".jsPanel-title"),n.controlbar=n.headerbar.querySelector(".jsPanel-controlbar"),n.headertoolbar=n.header.querySelector(".jsPanel-hdr-toolbar"),n.content=n.querySelector(".jsPanel-content"),n.footer=n.querySelector(".jsPanel-ftr"),n.snappableTo=!1,n.snapped=!1,n.droppableTo=!1,n.progressbar=n.autocloseProgressbar=n.querySelector(".jsPanel-progressbar");const a=new CustomEvent("jspanelloaded",{detail:e.id,cancelable:!0}),c=new CustomEvent("jspanelstatuschange",{detail:e.id,cancelable:!0}),f=new CustomEvent("jspanelbeforenormalize",{detail:e.id,cancelable:!0}),m=new CustomEvent("jspanelnormalized",{detail:e.id,cancelable:!0}),k=new CustomEvent("jspanelbeforemaximize",{detail:e.id,cancelable:!0}),_=new CustomEvent("jspanelmaximized",{detail:e.id,cancelable:!0}),E=new CustomEvent("jspanelbeforeminimize",{detail:e.id,cancelable:!0}),z=new CustomEvent("jspanelminimized",{detail:e.id,cancelable:!0}),M=new CustomEvent("jspanelbeforesmallify",{detail:e.id,cancelable:!0}),q=new CustomEvent("jspanelsmallified",{detail:e.id,cancelable:!0}),te=new CustomEvent("jspanelsmallifiedmax",{detail:e.id,cancelable:!0}),de=new CustomEvent("jspanelbeforeunsmallify",{detail:e.id,cancelable:!0}),ue=new CustomEvent("jspanelfronted",{detail:e.id,cancelable:!0}),Pe=new CustomEvent("jspanelbeforeclose",{detail:e.id,cancelable:!0}),nt=new CustomEvent("jspanelclosed",{detail:e.id,cancelable:!0}),ae=new CustomEvent("jspanelcloseduser",{detail:e.id,cancelable:!0});[a,c,f,m,k,_,E,z,M,q,te,de,ue,Pe].forEach(p=>p.panel=n);const ge=n.querySelector(".jsPanel-btn-close"),Te=n.querySelector(".jsPanel-btn-maximize"),Ue=n.querySelector(".jsPanel-btn-normalize"),Ot=n.querySelector(".jsPanel-btn-smallify"),tn=n.querySelector(".jsPanel-btn-minimize");ge&&F.pointerup.forEach(p=>{ge.addEventListener(p,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.close(null,!0)})}),Te&&F.pointerup.forEach(p=>{Te.addEventListener(p,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.maximize()})}),Ue&&F.pointerup.forEach(p=>{Ue.addEventListener(p,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.normalize()})}),Ot&&F.pointerup.forEach(p=>{Ot.addEventListener(p,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.status==="normalized"||n.status==="maximized"?n.smallify():(n.status==="smallified"||n.status==="smallifiedmax")&&n.unsmallify()})}),tn&&F.pointerup.forEach(p=>{tn.addEventListener(p,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.minimize()})});let jn=F.extensions;for(let p in jn)Object.prototype.hasOwnProperty.call(jn,p)&&(n[p]=jn[p]);if(n.setBorder=p=>{let v=F.pOborder(p);return v[2].length||(v[2]=n.style.backgroundColor),v=v.join(" "),n.style.border=v,n.options.border=v,n},n.setBorderRadius=p=>{typeof p=="string"&&(p.startsWith("--")||p.startsWith("var"))&&(p=p.replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," "),p=F.getCssVariableValue(p)),typeof p=="number"&&(p+="px"),n.style.borderRadius=p;const v=getComputedStyle(n);return n.options.header?(n.header.style.borderTopLeftRadius=v.borderTopLeftRadius,n.header.style.borderTopRightRadius=v.borderTopRightRadius):(n.content.style.borderTopLeftRadius=v.borderTopLeftRadius,n.content.style.borderTopRightRadius=v.borderTopRightRadius),n.options.footerToolbar?(n.footer.style.borderBottomRightRadius=v.borderBottomRightRadius,n.footer.style.borderBottomLeftRadius=v.borderBottomLeftRadius):(n.content.style.borderBottomRightRadius=v.borderBottomRightRadius,n.content.style.borderBottomLeftRadius=v.borderBottomLeftRadius),n},n.setTheme=(p=e.theme,v)=>{let O;if(n.status==="minimized"&&(O=!0,n.normalize()),F.clearTheme(n),typeof p=="object")e.border=void 0,F.applyCustomTheme(n,p);else if(typeof p=="string"){p==="none"&&(p="white");let b=F.getThemeDetails(p);F.applyColorTheme(n,b)}return O&&n.minimize(),v&&v.call(n,n),n},n.remove=(p,v,O)=>{n.parentElement.removeChild(n),document.getElementById(p)?O&&O.call(n,p,n):(n.removeMinimizedReplacement(),n.status="closed",v&&document.dispatchEvent(ae),document.dispatchEvent(nt),n.options.onclosed&&F.processCallbacks(n,n.options.onclosed,"every",v),F.autopositionRemaining(n),O&&O.call(p,p)),window.removeEventListener("resize",n.windowResizeHandler),document.removeEventListener("jspanelresize",n.parentResizeHandler)},n.close=(p,v)=>{if(n.parentElement){if(n.closetimer&&window.clearInterval(n.closetimer),document.dispatchEvent(Pe),n.statusBefore=n.status,n.options.onbeforeclose&&n.options.onbeforeclose.length>0&&!F.processCallbacks(n,n.options.onbeforeclose,"some",n.status,v))return n;n.options.animateOut?(n.options.animateIn&&F.remClass(n,n.options.animateIn),F.setClass(n,n.options.animateOut),n.addEventListener("animationend",O=>{O.stopPropagation(),n.remove(n.id,v,p)})):n.remove(n.id,v,p)}},n.maximize=(p,v)=>{if(n.statusBefore=n.status,e.onbeforemaximize&&e.onbeforemaximize.length>0&&!F.processCallbacks(n,e.onbeforemaximize,"some",n.statusBefore))return n;document.dispatchEvent(k);const O=n.parentElement,b=F.pOcontainment(e.maximizedMargin);return O===document.body?(n.style.width=document.documentElement.clientWidth-b[1]-b[3]+"px",n.style.height=document.documentElement.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"):(n.style.width=O.clientWidth-b[1]-b[3]+"px",n.style.height=O.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"),Ot.style.transform="unset",n.removeMinimizedReplacement(),n.status="maximized",n.setControls([".jsPanel-btn-maximize"]),v||n.front(),document.dispatchEvent(_),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),p&&p.call(n,n,n.statusBefore),e.onmaximized&&F.processCallbacks(n,e.onmaximized,"every",n.statusBefore),n},n.minimize=p=>{if(n.status==="minimized"||(n.statusBefore=n.status,e.onbeforeminimize&&e.onbeforeminimize.length>0&&!F.processCallbacks(n,e.onbeforeminimize,"some",n.statusBefore)))return n;if(document.dispatchEvent(E),!document.getElementById("jsPanel-replacement-container")){const v=document.createElement("div");v.id="jsPanel-replacement-container",document.body.append(v)}if(n.style.left="-9999px",n.status="minimized",document.dispatchEvent(z),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),e.minimizeTo){let v=n.createMinimizedReplacement(),O,b,x;switch(e.minimizeTo){case"default":document.getElementById("jsPanel-replacement-container").append(v);break;case"parentpanel":b=n.closest(".jsPanel-content").parentElement,x=b.querySelectorAll(".jsPanel-minimized-box"),O=x[x.length-1],O.append(v);break;case"parent":b=n.parentElement,O=b.querySelector(".jsPanel-minimized-container"),O||(O=document.createElement("div"),O.className="jsPanel-minimized-container",b.append(O)),O.append(v);break;default:document.querySelector(e.minimizeTo).append(v)}}return p&&p.call(n,n,n.statusBefore),e.onminimized&&F.processCallbacks(n,e.onminimized,"every",n.statusBefore),n},n.normalize=p=>(n.status==="normalized"||(n.statusBefore=n.status,e.onbeforenormalize&&e.onbeforenormalize.length>0&&!F.processCallbacks(n,e.onbeforenormalize,"some",n.statusBefore))||(document.dispatchEvent(f),n.style.width=n.currentData.width,n.style.height=n.currentData.height,n.snapped?n.snap(n.snapped,!0):(n.style.left=n.currentData.left,n.style.top=n.currentData.top),Ot.style.transform="unset",n.removeMinimizedReplacement(),n.status="normalized",n.setControls([".jsPanel-btn-normalize"]),n.front(),document.dispatchEvent(m),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),p&&p.call(n,n,n.statusBefore),e.onnormalized&&F.processCallbacks(n,e.onnormalized,"every",n.statusBefore)),n),n.smallify=p=>{if(n.status==="smallified"||n.status==="smallifiedmax"||(n.statusBefore=n.status,e.onbeforesmallify&&e.onbeforesmallify.length>0&&!F.processCallbacks(n,e.onbeforesmallify,"some",n.statusBefore)))return n;document.dispatchEvent(M),n.style.overflow="hidden";const v=window.getComputedStyle(n),O=parseFloat(window.getComputedStyle(n.headerbar).height);n.style.height=parseFloat(v.borderTopWidth)+parseFloat(v.borderBottomWidth)+O+"px",Ot.style.transform="rotate(180deg)",n.status==="normalized"?(n.setControls([".jsPanel-btn-normalize"]),n.status="smallified",document.dispatchEvent(q),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="maximized"&&(n.setControls([".jsPanel-btn-maximize"]),n.status="smallifiedmax",document.dispatchEvent(te),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore));const b=n.querySelectorAll(".jsPanel-minimized-box");return b[b.length-1].style.display="none",p&&p.call(n,n,n.statusBefore),e.onsmallified&&F.processCallbacks(n,e.onsmallified,"every",n.statusBefore),n},n.unsmallify=p=>{if(n.statusBefore=n.status,n.status==="smallified"||n.status==="smallifiedmax"){if(e.onbeforeunsmallify&&e.onbeforeunsmallify.length>0&&!F.processCallbacks(n,e.onbeforeunsmallify,"some",n.statusBefore))return n;document.dispatchEvent(de),n.style.overflow="visible",n.front(),n.status==="smallified"?(n.style.height=n.currentData.height,n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(m),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="smallifiedmax"?n.maximize():n.status==="minimized"&&n.normalize(),Ot.style.transform="rotate(0deg)";const v=n.querySelectorAll(".jsPanel-minimized-box");v[v.length-1].style.display="flex",p&&p.call(n,n,n.statusBefore),e.onunsmallified&&F.processCallbacks(n,e.onunsmallified,"every",n.statusBefore)}return n},n.front=(p,v=!0)=>{if(n.status==="minimized")n.statusBefore==="maximized"?n.maximize():n.normalize();else{const O=Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(b=>b.style.zIndex);Math.max(...O)>n.style.zIndex&&(n.style.zIndex=F.zi.next()),F.resetZi()}return document.dispatchEvent(ue),p&&p.call(n,n),e.onfronted&&v&&F.processCallbacks(n,e.onfronted,"every",n.status),n},n.snap=(p,v=!1)=>{if(v||(n.currentData.beforeSnap={width:n.currentData.width,height:n.currentData.height}),p&&typeof p=="function"&&!v)p.call(n,n,n.snappableTo);else if(p!==!1){let O=[0,0];if(n.options.dragit.snap.containment&&n.options.dragit.containment){const b=F.pOcontainment(n.options.dragit.containment),x=n.snappableTo;x.startsWith("left")?O[0]=b[3]:x.startsWith("right")&&(O[0]=-b[1]),x.endsWith("top")?O[1]=b[0]:x.endsWith("bottom")&&(O[1]=-b[2])}n.reposition(`${n.snappableTo} ${O[0]} ${O[1]}`)}v||(n.snapped=n.snappableTo)},n.move=(p,v)=>{let O=n.overlaps(p,"paddingbox"),b=n.parentElement;return p.appendChild(n),n.options.container=p,n.style.left=O.left+"px",n.style.top=O.top+"px",n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors(),v&&v.call(n,n,p,b),n},n.closeChildpanels=p=>(n.getChildpanels().forEach(v=>v.close()),p&&p.call(n,n),n),n.getChildpanels=p=>{const v=n.content.querySelectorAll(".jsPanel");return p&&v.forEach((O,b,x)=>{p.call(O,O,b,x)}),v},n.isChildpanel=p=>{const v=n.closest(".jsPanel-content"),O=v?v.parentElement:null;return p&&p.call(n,n,O),v?O:!1},n.contentRemove=p=>(F.emptyNode(n.content),p&&p.call(n,n),n),n.createMinimizedReplacement=()=>{const p=F.createMinimizedTemplate(),v=window.getComputedStyle(n.headertitle).color,O=window.getComputedStyle(n),b=e.iconfont,x=p.querySelector(".jsPanel-controlbar");return n.options.header!=="auto-show-hide"?F.setStyles(p,{backgroundColor:O.backgroundColor,backgroundPositionX:O.backgroundPositionX,backgroundPositionY:O.backgroundPositionY,backgroundRepeat:O.backgroundRepeat,backgroundAttachment:O.backgroundAttachment,backgroundImage:O.backgroundImage,backgroundSize:O.backgroundSize,backgroundOrigin:O.backgroundOrigin,backgroundClip:O.backgroundClip}):p.style.backgroundColor=window.getComputedStyle(n.header).backgroundColor,p.id=n.id+"-min",p.querySelector(".jsPanel-headerbar").replaceChild(n.headerlogo.cloneNode(!0),p.querySelector(".jsPanel-headerlogo")),p.querySelector(".jsPanel-titlebar").replaceChild(n.headertitle.cloneNode(!0),p.querySelector(".jsPanel-title")),p.querySelector(".jsPanel-titlebar").setAttribute("title",n.headertitle.textContent),p.querySelector(".jsPanel-title").style.color=v,x.style.color=v,x.querySelectorAll("button").forEach(se=>se.style.color=v),["jsPanel-hdr-dark","jsPanel-hdr-light"].forEach(se=>{n.header.classList.contains(se)&&p.querySelector(".jsPanel-hdr").classList.add(se)}),n.setIconfont(b,p),n.dataset.btnnormalize==="enabled"?F.pointerup.forEach(se=>{p.querySelector(".jsPanel-btn-normalize").addEventListener(se,ce=>{if(ce.preventDefault(),ce.button&&ce.button>0)return!1;n.normalize()})}):x.querySelector(".jsPanel-btn-normalize").style.display="none",n.dataset.btnmaximize==="enabled"?F.pointerup.forEach(se=>{p.querySelector(".jsPanel-btn-maximize").addEventListener(se,ce=>{if(ce.preventDefault(),ce.button&&ce.button>0)return!1;n.maximize()})}):x.querySelector(".jsPanel-btn-maximize").style.display="none",n.dataset.btnclose==="enabled"?F.pointerup.forEach(se=>{p.querySelector(".jsPanel-btn-close").addEventListener(se,ce=>{if(ce.preventDefault(),ce.button&&ce.button>0)return!1;n.close(null,!0)})}):x.querySelector(".jsPanel-btn-close").style.display="none",p},n.removeMinimizedReplacement=()=>{const p=document.getElementById(`${n.id}-min`);p&&p.parentElement.removeChild(p)},n.drag=(p={})=>{let v,O,b;const x=new CustomEvent("jspaneldragstart",{detail:n.id}),se=new CustomEvent("jspaneldrag",{detail:n.id}),ce=new CustomEvent("jspaneldragstop",{detail:n.id});[x,se,ce].forEach(Le=>Le.panel=n);const N=Le=>{let Fe=Le.split("-");return Fe.forEach((we,Ee)=>{Fe[Ee]=we.charAt(0).toUpperCase()+we.slice(1)}),"snap"+Fe.join("")};function K(Le){Le.relatedTarget===null&&F.pointermove.forEach(Fe=>{document.removeEventListener(Fe,O,!1),n.style.opacity=1})}let We=p.handles||F.defaults.dragit.handles,rt=p.cursor||F.defaults.dragit.cursor;function Nt(Le){if(F.pointermove.forEach(Fe=>document.removeEventListener(Fe,O)),F.removeSnapAreas(),v){if(n.style.opacity=1,v=void 0,b.snap){switch(n.snappableTo){case"left-top":n.snap(b.snap.snapLeftTop);break;case"center-top":n.snap(b.snap.snapCenterTop);break;case"right-top":n.snap(b.snap.snapRightTop);break;case"right-center":n.snap(b.snap.snapRightCenter);break;case"right-bottom":n.snap(b.snap.snapRightBottom);break;case"center-bottom":n.snap(b.snap.snapCenterBottom);break;case"left-bottom":n.snap(b.snap.snapLeftBottom);break;case"left-center":n.snap(b.snap.snapLeftCenter);break}b.snap.callback&&n.snappableTo&&typeof b.snap.callback=="function"&&(b.snap.callback.call(n,n),b.snap.repositionOnSnap&&b.snap[N(n.snappableTo)]!==!1&&n.repositionOnSnap(n.snappableTo)),n.snappableTo&&b.snap.repositionOnSnap&&b.snap[N(n.snappableTo)]&&n.repositionOnSnap(n.snappableTo)}if(n.droppableTo&&n.droppableTo){let Fe=n.parentElement;n.move(n.droppableTo),b.drop.callback&&b.drop.callback.call(n,n,n.droppableTo,Fe)}if(document.dispatchEvent(ce),b.stop.length){let Fe=window.getComputedStyle(n),we={left:parseFloat(Fe.left),top:parseFloat(Fe.top),width:parseFloat(Fe.width),height:parseFloat(Fe.height)};F.processCallbacks(n,b.stop,!1,we,Le)}n.saveCurrentPosition(),n.calcSizeFactors()}n.controlbar.style.pointerEvents="inherit",n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Fe=>Fe.style.pointerEvents="auto"),document.removeEventListener(Le,Nt)}return n.querySelectorAll(We).forEach(Le=>{Le.style.touchAction="none",Le.style.cursor=rt,F.pointerdown.forEach(Fe=>{Le.addEventListener(Fe,we=>{if(we.button&&we.button>0||(b=Object.assign({},F.defaults.dragit,p),b.disableOnMaximized&&n.status==="maximized"))return!1;if((b.containment||b.containment===0)&&(b.containment=F.pOcontainment(b.containment)),b.grid&&Array.isArray(b.grid)&&b.grid.length===1&&(b.grid[1]=b.grid[0]),b.snap&&(typeof b.snap=="object"?b.snap=Object.assign({},F.defaultSnapConfig,b.snap):b.snap=F.defaultSnapConfig),we.target.closest(".jsPanel-ftr-btn"))return;n.controlbar.style.pointerEvents="none",n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(Ge=>Ge.style.pointerEvents="none");let Ee=window.getComputedStyle(n),He=parseFloat(Ee.left),Ce=parseFloat(Ee.top),Q=parseFloat(Ee.width),Ke=parseFloat(Ee.height),Oe=we.touches?we.touches[0].clientX:we.clientX,le=we.touches?we.touches[0].clientY:we.clientY,me=n.parentElement,$t=me.getBoundingClientRect(),ie=window.getComputedStyle(me),Ve=n.getScaleFactor(),nn=0,Rt=F.getScrollbarWidth(me);O=Ge=>{if(Ge.preventDefault(),!v){if(document.dispatchEvent(x),n.style.opacity=b.opacity,n.snapped&&b.snap.resizeToPreSnap&&n.currentData.beforeSnap){n.resize(n.currentData.beforeSnap.width+" "+n.currentData.beforeSnap.height),n.setControls([".jsPanel-btn-normalize"]);let ne=n.getBoundingClientRect(),ke=Oe-(ne.left+ne.width),fe=ne.width/2;ke>-fe&&(nn=ke+fe)}if(n.front(),n.snapped=!1,n.status==="maximized"&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized"),b.drop&&b.drop.dropZones){let ne=b.drop.dropZones.map(fe=>F.pOcontainer(fe)),ke=[];ne.forEach(function(fe){fe.length?fe.forEach(function(De){ke.push(De)}):ke.push(fe)}),ke=ke.filter(function(fe,De,Ne){return Ne.indexOf(fe)===De}),b.drop.dropZones=ke}b.start.length&&F.processCallbacks(n,b.start,!1,{left:He,top:Ce,width:Q,height:Ke},Ge)}v=1;let Ct,Ae,Be,yt,Xe,xe,ve,kt,Me,ft,it=Ge.touches?Ge.touches[0].clientX:Ge.clientX,Je=Ge.touches?Ge.touches[0].clientY:Ge.clientY,ze=window.getComputedStyle(n),oe;if(me===document.body){let ne=n.getBoundingClientRect();Me=window.innerWidth-parseInt(ie.borderLeftWidth,10)-parseInt(ie.borderRightWidth,10)-(ne.left+ne.width),ft=window.innerHeight-parseInt(ie.borderTopWidth,10)-parseInt(ie.borderBottomWidth,10)-(ne.top+ne.height)}else Me=parseInt(ie.width,10)-parseInt(ie.borderLeftWidth,10)-parseInt(ie.borderRightWidth,10)-(parseInt(ze.left,10)+parseInt(ze.width,10)),ft=parseInt(ie.height,10)-parseInt(ie.borderTopWidth,10)-parseInt(ie.borderBottomWidth,10)-(parseInt(ze.top,10)+parseInt(ze.height,10));Ct=parseFloat(ze.left),Be=parseFloat(ze.top),Xe=Me,ve=ft,b.snap&&(b.snap.trigger==="panel"?(Ae=Ct**2,yt=Be**2,xe=Xe**2,kt=ve**2):b.snap.trigger==="pointer"&&(n.options.container==="window"?(Ct=it,Be=Je,Xe=window.innerWidth-it,ve=window.innerHeight-Je,Ae=it**2,yt=Be**2,xe=Xe**2,kt=ve**2):(oe=n.overlaps(me,"paddingbox",Ge),Ct=oe.pointer.left,Be=oe.pointer.top,Xe=oe.pointer.right,ve=oe.pointer.bottom,Ae=oe.pointer.left**2,yt=oe.pointer.top**2,xe=oe.pointer.right**2,kt=oe.pointer.bottom**2)));let Ye=Math.sqrt(Ae+yt),Y=Math.sqrt(Ae+kt),Qe=Math.sqrt(xe+yt),at=Math.sqrt(xe+kt),vt=Math.abs(Ct-Xe)/2,G=Math.abs(Be-ve)/2,qt=Math.sqrt(Ae+G**2),Yt=Math.sqrt(yt+vt**2),st=Math.sqrt(xe+G**2),rn=Math.sqrt(kt+vt**2);if(window.getSelection().removeAllRanges(),document.dispatchEvent(se),(!b.axis||b.axis==="x")&&(n.style.left=He+(it-Oe)/Ve.x+nn+"px"),(!b.axis||b.axis==="y")&&(n.style.top=Ce+(Je-le)/Ve.y+"px"),b.grid){let ne=b.grid,ke=b.axis,fe=ne[0]*Math.round((He+(it-Oe))/ne[0]),De=ne[1]*Math.round((Ce+(Je-le))/ne[1]);(!ke||ke==="x")&&(n.style.left=`${fe}px`),(!ke||ke==="y")&&(n.style.top=`${De}px`)}if(b.containment||b.containment===0){let ne=b.containment,ke,fe;if(n.options.container==="window")ke=window.innerWidth-parseFloat(ze.width)-ne[1]-Rt.y,fe=window.innerHeight-parseFloat(ze.height)-ne[2]-Rt.x;else{let De=parseFloat(ie.borderLeftWidth)+parseFloat(ie.borderRightWidth),Ne=parseFloat(ie.borderTopWidth)+parseFloat(ie.borderBottomWidth);ke=$t.width/Ve.x-parseFloat(ze.width)-ne[1]-De-Rt.y,fe=$t.height/Ve.y-parseFloat(ze.height)-ne[2]-Ne-Rt.x}parseFloat(n.style.left)<=ne[3]&&(n.style.left=ne[3]+"px"),parseFloat(n.style.top)<=ne[0]&&(n.style.top=ne[0]+"px"),parseFloat(n.style.left)>=ke&&(n.style.left=ke+"px"),parseFloat(n.style.top)>=fe&&(n.style.top=fe+"px")}if(b.drag.length){let ne={left:Ct,top:Be,right:Xe,bottom:ve,width:parseFloat(ze.width),height:parseFloat(ze.height)};F.processCallbacks(n,b.drag,!1,ne,Ge)}if(b.snap){let ne=b.snap.sensitivity,ke=me===document.body?window.innerWidth/8:$t.width/8,fe=me===document.body?window.innerHeight/8:$t.height/8;n.snappableTo=!1,F.removeSnapAreas(),Ye<ne?b.snap.snapLeftTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-top",F.createSnapArea(n,"lt",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(oe.pointer.left>0&&oe.pointer.top>0?(n.snappableTo="left-top",F.createSnapArea(n,"lt",ne)):(n.snappableTo=!1,F.removeSnapAreas()))):Y<ne?b.snap.snapLeftBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-bottom",F.createSnapArea(n,"lb",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(oe.pointer.left>0&&oe.pointer.bottom>0?(n.snappableTo="left-bottom",F.createSnapArea(n,"lb",ne)):(n.snappableTo=!1,F.removeSnapAreas()))):Qe<ne?b.snap.snapRightTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-top",F.createSnapArea(n,"rt",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(oe.pointer.right>0&&oe.pointer.top>0?(n.snappableTo="right-top",F.createSnapArea(n,"rt",ne)):(n.snappableTo=!1,F.removeSnapAreas()))):at<ne?b.snap.snapRightBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-bottom",F.createSnapArea(n,"rb",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(oe.pointer.right>0&&oe.pointer.bottom>0?(n.snappableTo="right-bottom",F.createSnapArea(n,"rb",ne)):(n.snappableTo=!1,F.removeSnapAreas()))):Be<ne&&Yt<ke?b.snap.snapCenterTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-top",F.createSnapArea(n,"ct",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(oe.pointer.top>0?(n.snappableTo="center-top",F.createSnapArea(n,"ct",ne)):(n.snappableTo=!1,F.removeSnapAreas()))):Ct<ne&&qt<fe?b.snap.snapLeftCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-center",F.createSnapArea(n,"lc",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(oe.pointer.left>0?(n.snappableTo="left-center",F.createSnapArea(n,"lc",ne)):(n.snappableTo=!1,F.removeSnapAreas()))):Xe<ne&&st<fe?b.snap.snapRightCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-center",F.createSnapArea(n,"rc",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(oe.pointer.right>0?(n.snappableTo="right-center",F.createSnapArea(n,"rc",ne)):(n.snappableTo=!1,F.removeSnapAreas()))):ve<ne&&rn<ke&&b.snap.snapCenterBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-bottom",F.createSnapArea(n,"cb",ne)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(oe.pointer.bottom>0?(n.snappableTo="center-bottom",F.createSnapArea(n,"cb",ne)):(n.snappableTo=!1,F.removeSnapAreas())))}if(b.drop&&b.drop.dropZones){let ne=F.isIE?"msElementsFromPoint":"elementsFromPoint",ke=document[ne](Ge.clientX,Ge.clientY);Array.isArray(ke)||(ke=Array.prototype.slice.call(ke)),b.drop.dropZones.forEach(fe=>{ke.includes(fe)&&(n.droppableTo=fe)}),ke.includes(n.droppableTo)||(n.droppableTo=!1)}},F.pointermove.forEach(Ge=>document.addEventListener(Ge,O)),window.addEventListener("mouseout",K,!1)})}),F.pointerup.forEach(Fe=>{document.addEventListener(Fe,Nt),window.removeEventListener("mouseout",K)}),p.disable&&(Le.style.pointerEvents="none")}),n},n.dragit=p=>{const v=Object.assign({},F.defaults.dragit,e.dragit),O=n.querySelectorAll(v.handles);return p==="disable"?O.forEach(b=>b.style.pointerEvents="none"):O.forEach(b=>b.style.pointerEvents="auto"),n},n.sizeit=(p={})=>{const v=new CustomEvent("jspanelresizestart",{detail:n.id}),O=new CustomEvent("jspanelresize",{detail:n.id}),b=new CustomEvent("jspanelresizestop",{detail:n.id});[v,O,b].forEach(we=>we.panel=n);let x={},se,ce,N,K,We,rt;x.handles=p.handles||F.defaults.resizeit.handles,x.handles.split(",").forEach(we=>{const Ee=document.createElement("DIV");Ee.className=`jsPanel-resizeit-handle jsPanel-resizeit-${we.trim()}`,n.append(Ee)});let Nt=p.aspectRatio?p.aspectRatio:!1;function Le(we){we.relatedTarget===null&&F.pointermove.forEach(Ee=>document.removeEventListener(Ee,se,!1))}function Fe(we){if(F.pointermove.forEach(Ee=>document.removeEventListener(Ee,se,!1)),we.target.classList&&we.target.classList.contains("jsPanel-resizeit-handle")){let Ee,He,Ce=we.target.className;if(Ce.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)&&(Ee=!0),Ce.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)&&(He=!0),x.grid&&Array.isArray(x.grid)){x.grid.length===1&&(x.grid[1]=x.grid[0]);const Q=parseFloat(n.style.width),Ke=parseFloat(n.style.height),Oe=Q%x.grid[0],le=Ke%x.grid[1],me=parseFloat(n.style.left),$t=parseFloat(n.style.top),ie=me%x.grid[0],Ve=$t%x.grid[1];Oe<x.grid[0]/2?n.style.width=Q-Oe+"px":n.style.width=Q+(x.grid[0]-Oe)+"px",le<x.grid[1]/2?n.style.height=Ke-le+"px":n.style.height=Ke+(x.grid[1]-le)+"px",Ee&&(ie<x.grid[0]/2?n.style.left=me-ie+"px":n.style.left=me+(x.grid[0]-ie)+"px"),He&&(Ve<x.grid[1]/2?n.style.top=$t-Ve+"px":n.style.top=$t+(x.grid[1]-Ve)+"px")}}if(ce){n.content.style.pointerEvents="inherit",ce=void 0,n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors();let Ee=n.controlbar.querySelector(".jsPanel-btn-smallify"),He=n.getBoundingClientRect();if(Ee&&He.height>rt+5&&(Ee.style.transform="rotate(0deg)"),document.dispatchEvent(b),x.stop.length){let Ce=window.getComputedStyle(n),Q={left:parseFloat(Ce.left),top:parseFloat(Ce.top),width:parseFloat(Ce.width),height:parseFloat(Ce.height)};F.processCallbacks(n,x.stop,!1,Q,we)}}n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Ee=>Ee.style.pointerEvents="auto"),x.aspectRatio=Nt,document.removeEventListener(we,Fe)}return n.querySelectorAll(".jsPanel-resizeit-handle").forEach(we=>{we.style.touchAction="none",F.pointerdown.forEach(Ee=>{we.addEventListener(Ee,He=>{if(He.preventDefault(),He.stopPropagation(),He.button&&He.button>0)return!1;let Ce=1;if(x=Object.assign({},F.defaults.resizeit,p),(x.containment||x.containment===0)&&(x.containment=F.pOcontainment(x.containment)),x.aspectRatio&&x.aspectRatio===!0&&(x.aspectRatio="panel"),F.modifier){let fe=F.modifier;fe.altKey?x.aspectRatio="content":fe.ctrlKey?x.aspectRatio="panel":fe.shiftKey&&(x.aspectRatio=!1,Ce=2)}let Q=typeof x.maxWidth=="function"?x.maxWidth():x.maxWidth||1e4,Ke=typeof x.maxHeight=="function"?x.maxHeight():x.maxHeight||1e4,Oe=typeof x.minWidth=="function"?x.minWidth():x.minWidth,le=typeof x.minHeight=="function"?x.minHeight():x.minHeight;n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(fe=>fe.style.pointerEvents="none");const me=n.parentElement,$t=me.tagName.toLowerCase(),ie=n.getBoundingClientRect(),Ve=me.getBoundingClientRect(),nn=window.getComputedStyle(me,null),Rt=parseInt(nn.borderLeftWidth,10),Ge=parseInt(nn.borderTopWidth,10),Ct=nn.getPropertyValue("position"),Ae=He.clientX||He.clientX===0||He.touches[0].clientX,Be=He.clientY||He.clientY===0||He.touches[0].clientY,yt=Ae/Be,Xe=He.target.classList,xe=n.getScaleFactor(),ve=ie.width/ie.height,kt=n.content.getBoundingClientRect(),Me=kt.width/kt.height,ft=n.header.getBoundingClientRect().height,it=n.footer.getBoundingClientRect().height||0;let Je=ie.left,ze=ie.top,oe=1e4,Ye=1e4,Y=1e4,Qe=1e4;We=ie.width,rt=ie.height,$t!=="body"&&(Je=ie.left-Ve.left+me.scrollLeft,ze=ie.top-Ve.top+me.scrollTop),$t==="body"&&x.containment?(oe=document.documentElement.clientWidth-ie.left,Y=document.documentElement.clientHeight-ie.top,Ye=ie.width+ie.left,Qe=ie.height+ie.top):x.containment&&(Ct==="static"?(oe=Ve.width-ie.left+Rt,Y=Ve.height+Ve.top-ie.top+Ge,Ye=ie.width+(ie.left-Ve.left)-Rt,Qe=ie.height+(ie.top-Ve.top)-Ge):(oe=me.clientWidth-(ie.left-Ve.left)/xe.x+Rt,Y=me.clientHeight-(ie.top-Ve.top)/xe.y+Ge,Ye=(ie.width+ie.left-Ve.left)/xe.x-Rt,Qe=n.clientHeight+(ie.top-Ve.top)/xe.y-Ge)),x.containment&&(Ye-=x.containment[3],Qe-=x.containment[0],oe-=x.containment[1],Y-=x.containment[2]);const at=window.getComputedStyle(n),vt=parseFloat(at.width)-ie.width,G=parseFloat(at.height)-ie.height;let qt=parseFloat(at.left)-ie.left,Yt=parseFloat(at.top)-ie.top;me!==document.body&&(qt+=Ve.left,Yt+=Ve.top);let st=parseInt(at.borderTopWidth,10),rn=parseInt(at.borderRightWidth,10),ne=parseInt(at.borderBottomWidth,10),ke=parseInt(at.borderLeftWidth,10);se=fe=>{fe.preventDefault(),ce||(document.dispatchEvent(v),x.start.length&&F.processCallbacks(n,x.start,!1,{width:We,height:rt,left:Je,top:ze},fe),n.front(),n.status==="maximized"&&(n.status="normalized",n.controlbar.querySelector(".jsPanel-btn-maximize")&&n.setControlStatus("maximize","show"),n.controlbar.querySelector(".jsPanel-btn-normalize")&&n.setControlStatus("normalize","hide")),ie.height>rt+5&&(n.status="normalized",n.setControls([".jsPanel-btn-normalize"]))),ce=1,document.dispatchEvent(O);let De=fe.touches?fe.touches[0].clientX:fe.clientX,Ne=fe.touches?fe.touches[0].clientY:fe.clientY,Se;Xe.contains("jsPanel-resizeit-e")?(N=We+(De-Ae)*Ce/xe.x+vt,N>=oe&&(N=oe),N>=Q&&(N=Q),N<=Oe&&(N=Oe),n.style.width=N+"px",Ce===2&&(n.style.left=Je-(De-Ae)+"px"),x.aspectRatio==="content"?(n.style.height=(N-rn-ke)/Me+ft+it+st+ne+"px",x.containment&&(Se=n.overlaps(me),Se.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*Me+"px"))):x.aspectRatio==="panel"&&(n.style.height=N/ve+"px",x.containment&&(Se=n.overlaps(me),Se.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*ve+"px")))):Xe.contains("jsPanel-resizeit-s")?(K=rt+(Ne-Be)*Ce/xe.y+G,K>=Y&&(K=Y),K>=Ke&&(K=Ke),K<=le&&(K=le),n.style.height=K+"px",Ce===2&&(n.style.top=ze-(Ne-Be)+"px"),x.aspectRatio==="content"?(n.style.width=(K-ft-it-st-ne)*Me+st+ne+"px",x.containment&&(Se=n.overlaps(me),Se.right<=x.containment[1]&&(n.style.width=oe+"px",n.style.height=oe/Me+"px"))):x.aspectRatio==="panel"&&(n.style.width=K*ve+"px",x.containment&&(Se=n.overlaps(me),Se.right<=x.containment[1]&&(n.style.width=oe+"px",n.style.height=oe/ve+"px")))):Xe.contains("jsPanel-resizeit-w")?(N=We+(Ae-De)*Ce/xe.x+vt,N<=Q&&N>=Oe&&N<=Ye&&(n.style.left=Je+(De-Ae)/xe.x+qt+"px"),N>=Ye&&(N=Ye),N>=Q&&(N=Q),N<=Oe&&(N=Oe),n.style.width=N+"px",x.aspectRatio==="content"?(n.style.height=(N-rn-ke)/Me+ft+it+st+ne+"px",x.containment&&(Se=n.overlaps(me),Se.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*Me+"px"))):x.aspectRatio==="panel"&&(n.style.height=N/ve+"px",x.containment&&(Se=n.overlaps(me),Se.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*ve+"px")))):Xe.contains("jsPanel-resizeit-n")?(K=rt+(Be-Ne)*Ce/xe.y+G,K<=Ke&&K>=le&&K<=Qe&&(n.style.top=ze+(Ne-Be)/xe.y+Yt+"px"),K>=Qe&&(K=Qe),K>=Ke&&(K=Ke),K<=le&&(K=le),n.style.height=K+"px",x.aspectRatio==="content"?(n.style.width=(K-ft-it-st-ne)*Me+st+ne+"px",x.containment&&(Se=n.overlaps(me),Se.right<=x.containment[1]&&(n.style.width=oe+"px",n.style.height=oe/Me+"px"))):x.aspectRatio==="panel"&&(n.style.width=K*ve+"px",x.containment&&(Se=n.overlaps(me),Se.right<=x.containment[1]&&(n.style.width=oe+"px",n.style.height=oe/ve+"px")))):Xe.contains("jsPanel-resizeit-se")?(N=We+(De-Ae)*Ce/xe.x+vt,N>=oe&&(N=oe),N>=Q&&(N=Q),N<=Oe&&(N=Oe),n.style.width=N+"px",Ce===2&&(n.style.left=Je-(De-Ae)+"px"),x.aspectRatio&&(n.style.height=N/ve+"px"),K=rt+(Ne-Be)*Ce/xe.y+G,K>=Y&&(K=Y),K>=Ke&&(K=Ke),K<=le&&(K=le),n.style.height=K+"px",Ce===2&&(n.style.top=ze-(Ne-Be)+"px"),x.aspectRatio==="content"?(n.style.width=(K-ft-it-st-ne)*Me+st+ne+"px",x.containment&&(Se=n.overlaps(me),Se.right<=x.containment[1]&&(n.style.width=oe+"px",n.style.height=oe/Me+"px"))):x.aspectRatio==="panel"&&(n.style.width=K*ve+"px",x.containment&&(Se=n.overlaps(me),Se.right<=x.containment[1]&&(n.style.width=oe+"px",n.style.height=oe/ve+"px")))):Xe.contains("jsPanel-resizeit-sw")?(K=rt+(Ne-Be)*Ce/xe.y+G,K>=Y&&(K=Y),K>=Ke&&(K=Ke),K<=le&&(K=le),n.style.height=K+"px",Ce===2&&(n.style.top=ze-(Ne-Be)+"px"),x.aspectRatio&&(n.style.width=K*ve+"px"),N=We+(Ae-De)*Ce/xe.x+vt,N<=Q&&N>=Oe&&N<=Ye&&(n.style.left=Je+(De-Ae)/xe.x+qt+"px"),N>=Ye&&(N=Ye),N>=Q&&(N=Q),N<=Oe&&(N=Oe),n.style.width=N+"px",x.aspectRatio==="content"?(n.style.height=(N-rn-ke)/Me+ft+it+st+ne+"px",x.containment&&(Se=n.overlaps(me),Se.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*Me+"px"))):x.aspectRatio==="panel"&&(n.style.height=N/ve+"px",x.containment&&(Se=n.overlaps(me),Se.bottom<=x.containment[2]&&(n.style.height=Y+"px",n.style.width=Y*ve+"px")))):Xe.contains("jsPanel-resizeit-ne")?(N=We+(De-Ae)*Ce/xe.x+vt,N>=oe&&(N=oe),N>=Q&&(N=Q),N<=Oe&&(N=Oe),n.style.width=N+"px",Ce===2&&(n.style.left=Je-(De-Ae)+"px"),x.aspectRatio&&(n.style.height=N/ve+"px"),K=rt+(Be-Ne)*Ce/xe.y+G,K<=Ke&&K>=le&&K<=Qe&&(n.style.top=ze+(Ne-Be)/xe.y+Yt+"px"),K>=Qe&&(K=Qe),K>=Ke&&(K=Ke),K<=le&&(K=le),n.style.height=K+"px",x.aspectRatio==="content"?(n.style.width=(K-ft-it-st-ne)*Me+st+ne+"px",x.containment&&(Se=n.overlaps(me),Se.right<=x.containment[1]&&(n.style.width=oe+"px",n.style.height=oe/Me+"px"))):x.aspectRatio==="panel"&&(n.style.width=K*ve+"px",x.containment&&(Se=n.overlaps(me),Se.right<=x.containment[1]&&(n.style.width=oe+"px",n.style.height=oe/ve+"px")))):Xe.contains("jsPanel-resizeit-nw")&&(x.aspectRatio&&Xe.contains("jsPanel-resizeit-nw")&&(De=Ne*yt,Ne=De/yt),N=We+(Ae-De)*Ce/xe.x+vt,N<=Q&&N>=Oe&&N<=Ye&&(n.style.left=Je+(De-Ae)/xe.x+qt+"px"),N>=Ye&&(N=Ye),N>=Q&&(N=Q),N<=Oe&&(N=Oe),n.style.width=N+"px",x.aspectRatio&&(n.style.height=N/ve+"px"),K=rt+(Be-Ne)*Ce/xe.y+G,K<=Ke&&K>=le&&K<=Qe&&(n.style.top=ze+(Ne-Be)/xe.y+Yt+"px"),K>=Qe&&(K=Qe),K>=Ke&&(K=Ke),K<=le&&(K=le),n.style.height=K+"px",x.aspectRatio==="content"?n.style.width=(K-ft-it-st-ne)*Me+st+ne+"px":x.aspectRatio==="panel"&&(n.style.width=K*ve+"px")),window.getSelection().removeAllRanges();const zt=window.getComputedStyle(n),Ie={left:parseFloat(zt.left),top:parseFloat(zt.top),right:parseFloat(zt.right),bottom:parseFloat(zt.bottom),width:parseFloat(zt.width),height:parseFloat(zt.height)};x.resize.length&&F.processCallbacks(n,x.resize,!1,Ie,fe)},F.pointermove.forEach(fe=>document.addEventListener(fe,se,!1)),window.addEventListener("mouseout",Le,!1)})}),F.pointerup.forEach(function(Ee){document.addEventListener(Ee,Fe),window.removeEventListener("mouseout",Le)}),p.disable&&(we.style.pointerEvents="none")}),n},n.resizeit=p=>{const v=n.querySelectorAll(".jsPanel-resizeit-handle");return p==="disable"?v.forEach(O=>O.style.pointerEvents="none"):v.forEach(O=>O.style.pointerEvents="auto"),n},n.getScaleFactor=()=>{const p=n.getBoundingClientRect();return{x:p.width/n.offsetWidth,y:p.height/n.offsetHeight}},n.calcSizeFactors=()=>{const p=window.getComputedStyle(n);if(e.container==="window")n.hf=parseFloat(p.left)/(window.innerWidth-parseFloat(p.width)),n.vf=parseFloat(p.top)/(window.innerHeight-parseFloat(p.height));else if(n.parentElement){let v=n.parentElement.getBoundingClientRect();n.hf=parseFloat(p.left)/(v.width-parseFloat(p.width)),n.vf=parseFloat(p.top)/(v.height-parseFloat(p.height))}},n.saveCurrentDimensions=()=>{const p=window.getComputedStyle(n);n.currentData.width=p.width,n.currentData.height=p.height},n.saveCurrentPosition=()=>{const p=window.getComputedStyle(n);n.currentData.left=p.left,n.currentData.top=p.top},n.reposition=(...p)=>{let v=e.position,O=!0,b;return p.forEach(x=>{typeof x=="string"||typeof x=="object"?v=x:typeof x=="boolean"?O=x:typeof x=="function"&&(b=x)}),F.position(n,v),n.slaves&&n.slaves.size>0&&n.slaves.forEach(x=>x.reposition()),O&&n.saveCurrentPosition(),b&&b.call(n,n),n},n.repositionOnSnap=p=>{let v="0",O="0",b=F.pOcontainment(e.dragit.containment);if(e.dragit.snap.containment)switch(p){case"left-top":v=b[3],O=b[0];break;case"right-top":v=-b[1],O=b[0];break;case"right-bottom":v=-b[1],O=-b[2];break;case"left-bottom":v=b[3],O=-b[2];break;case"center-top":v=b[3]/2-b[1]/2,O=b[0];break;case"center-bottom":v=b[3]/2-b[1]/2,O=-b[2];break;case"left-center":v=b[3],O=b[0]/2-b[2]/2;break;case"right-center":v=-b[1],O=b[0]/2-b[2]/2;break}F.position(n,p),F.setStyles(n,{left:`calc(${n.style.left} + ${v}px)`,top:`calc(${n.style.top} + ${O}px)`})},n.overlaps=(p,v,O)=>{let b=n.getBoundingClientRect(),x=getComputedStyle(n.parentElement),se=n.getScaleFactor(),ce={top:0,right:0,bottom:0,left:0},N,K=0,We=0,rt=0,Nt=0;n.options.container!=="window"&&v==="paddingbox"&&(ce.top=parseInt(x.borderTopWidth,10)*se.y,ce.right=parseInt(x.borderRightWidth,10)*se.x,ce.bottom=parseInt(x.borderBottomWidth,10)*se.y,ce.left=parseInt(x.borderLeftWidth,10)*se.x),typeof p=="string"?p==="window"?N={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}:p==="parent"?N=n.parentElement.getBoundingClientRect():N=document.querySelector(p).getBoundingClientRect():N=p.getBoundingClientRect(),O&&(K=O.touches?O.touches[0].clientX:O.clientX,We=O.touches?O.touches[0].clientY:O.clientY,rt=K-N.left,Nt=We-N.top);let Le=b.left<N.right&&b.right>N.left,Fe=b.top<N.bottom&&b.bottom>N.top;return{overlaps:Le&&Fe,top:b.top-N.top-ce.top,right:N.right-b.right-ce.right,bottom:N.bottom-b.bottom-ce.bottom,left:b.left-N.left-ce.left,parentBorderWidth:ce,panelRect:b,referenceRect:N,pointer:{clientX:K,clientY:We,left:rt-ce.left,top:Nt-ce.top,right:N.width-rt-ce.right,bottom:N.height-Nt-ce.bottom}}},n.setSize=()=>{if(e.panelSize){const p=F.pOsize(n,e.panelSize);n.style.width=p.width,n.style.height=p.height}else if(e.contentSize){const p=F.pOsize(n,e.contentSize);n.content.style.width=p.width,n.content.style.height=p.height,n.style.width=p.width,n.content.style.width="100%"}return n},n.resize=(...p)=>{let v=window.getComputedStyle(n),O={width:v.width,height:v.height},b=!0,x;p.forEach(N=>{typeof N=="string"?O=N:typeof N=="object"?O=Object.assign(O,N):typeof N=="boolean"?b=N:typeof N=="function"&&(x=N)});let se=F.pOsize(n,O);n.style.width=se.width,n.style.height=se.height,n.slaves&&n.slaves.size>0&&n.slaves.forEach(N=>N.reposition()),b&&n.saveCurrentDimensions(),n.status="normalized";let ce=n.controlbar.querySelector(".jsPanel-btn-smallify");return ce&&(ce.style.transform="rotate(0deg)"),x&&x.call(n,n),n.calcSizeFactors(),n},n.windowResizeHandler=p=>{if(p.target===window){let v=n.status,O=e.onwindowresize,b,x;if(v==="maximized"&&O)n.maximize(!1,!0);else if(n.snapped&&v!=="minimized")n.snap(n.snapped,!0);else if(v==="normalized"||v==="smallified"||v==="maximized"){let se=typeof O;se==="boolean"?(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",x=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=x<=0?0:x+"px"):se==="function"?O.call(n,p,n):se==="object"&&(O.preset===!0&&(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",x=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=x<=0?0:x+"px"),O.callback.call(n,p,n))}else v==="smallifiedmax"&&O&&n.maximize(!1,!0).smallify();n.slaves&&n.slaves.size>0&&n.slaves.forEach(se=>se.reposition())}},n.setControls=(p,v)=>(n.header.querySelectorAll(".jsPanel-btn").forEach(O=>{const b=O.className.split("-"),x=b[b.length-1];n.getAttribute(`data-btn${x}`)!=="hidden"&&(O.style.display="block")}),p.forEach(O=>{const b=n.controlbar.querySelector(O);b&&(b.style.display="none")}),v&&v.call(n,n),n),n.setControlStatus=(p,v="enable",O)=>{const b=n.controlbar.querySelector(`.jsPanel-btn-${p}`);switch(v){case"disable":n.getAttribute(`data-btn${p}`)!=="removed"&&(n.setAttribute(`data-btn${p}`,"disabled"),b.style.pointerEvents="none",b.style.opacity=.4,b.style.cursor="default");break;case"hide":n.getAttribute(`data-btn${p}`)!=="removed"&&(n.setAttribute(`data-btn${p}`,"hidden"),b.style.display="none");break;case"show":n.getAttribute(`data-btn${p}`)!=="removed"&&(n.setAttribute(`data-btn${p}`,"enabled"),b.style.display="block",b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"enable":n.getAttribute(`data-btn${p}`)!=="removed"&&(n.getAttribute(`data-btn${p}`)==="hidden"&&(b.style.display="block"),n.setAttribute(`data-btn${p}`,"enabled"),b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"remove":n.controlbar.removeChild(b),n.setAttribute(`data-btn${p}`,"removed");break}return O&&O.call(n,n),n},n.setControlSize=p=>{const v=p.toLowerCase();n.controlbar.querySelectorAll(".jsPanel-btn").forEach(b=>{["jsPanel-btn-xl","jsPanel-btn-lg","jsPanel-btn-md","jsPanel-btn-sm","jsPanel-btn-xs"].forEach(x=>b.classList.remove(x)),b.classList.add(`jsPanel-btn-${v}`)}),v==="xl"?n.titlebar.style.fontSize="1.5rem":v==="lg"?n.titlebar.style.fontSize="1.25rem":v==="md"?n.titlebar.style.fontSize="1.05rem":v==="sm"?n.titlebar.style.fontSize=".9rem":v==="xs"&&(n.titlebar.style.fontSize=".8rem")},n.setHeaderControls=p=>{if(n.options.headerControls.add){let x=n.options.headerControls.add;Array.isArray(x)||(x=[x]),x.forEach(se=>n.addControl(se))}let v=[];n.controlbar.querySelectorAll(".jsPanel-btn").forEach(x=>{let se=x.className.match(/jsPanel-btn-[a-z\d]{3,}/i),ce=se[0].substring(12);v.push(ce)});const b=F.pOheaderControls(e.headerControls);return e.headerControls=b,v.forEach(x=>{b[x]&&n.setControlStatus(x,b[x])}),n.setControlSize(b.size),p&&p.call(n,n),n},n.setHeaderLogo=(p,v)=>{let O=[n.headerlogo],b=document.querySelector("#"+n.id+"-min");return b&&O.push(b.querySelector(".jsPanel-headerlogo")),typeof p=="string"?p.startsWith("<")?O.forEach(x=>x.innerHTML=p):O.forEach(x=>{F.emptyNode(x);let se=document.createElement("img");se.src=p,x.append(se)}):O.forEach(x=>{F.emptyNode(x),x.append(p)}),n.headerlogo.childNodes.forEach(x=>{x.nodeName&&x.nodeName==="IMG"&&x.setAttribute("draggable","false")}),v&&v.call(n,n),n},n.setHeaderRemove=p=>(n.removeChild(n.header),n.content.classList.add("jsPanel-content-noheader"),["close","maximize","normalize","minimize","smallify"].forEach(v=>n.setAttribute(`data-btn${v}`,"removed")),p&&p.call(n,n),n),n.setHeaderTitle=(p,v)=>{let O=[n.headertitle],b=document.querySelector("#"+n.id+"-min");return b&&O.push(b.querySelector(".jsPanel-title")),typeof p=="string"?O.forEach(x=>x.innerHTML=p):typeof p=="function"?O.forEach(x=>{F.emptyNode(x),x.innerHTML=p()}):O.forEach(x=>{F.emptyNode(x),x.append(p)}),v&&v.call(n,n),n},n.setIconfont=(p,v=n,O)=>{if(p){let b,x;if(p==="fa"||p==="far"||p==="fal"||p==="fas"||p==="fad")b=[`${p} fa-window-close`,`${p} fa-window-maximize`,`${p} fa-window-restore`,`${p} fa-window-minimize`,`${p} fa-chevron-up`];else if(p==="material-icons")b=[p,p,p,p,p,p],x=["close","fullscreen","fullscreen_exit","call_received","expand_less"];else if(Array.isArray(p))b=[`custom-control-icon ${p[4]}`,`custom-control-icon ${p[3]}`,`custom-control-icon ${p[2]}`,`custom-control-icon ${p[1]}`,`custom-control-icon ${p[0]}`];else if(p==="bootstrap"||p==="glyphicon")b=["glyphicon glyphicon-remove","glyphicon glyphicon-fullscreen","glyphicon glyphicon-resize-full","glyphicon glyphicon-minus","glyphicon glyphicon-chevron-up"];else return v;v.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(se=>F.emptyNode(se).innerHTML="<span></span>"),Array.prototype.slice.call(v.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((se,ce)=>{se.className=b[ce],p==="material-icons"&&(se.textContent=x[ce])})}return O&&O.call(v,v),v},n.addToolbar=(p,v,O)=>{if(p==="header"?p=n.headertoolbar:p==="footer"&&(p=n.footer),typeof v=="string")p.innerHTML=v;else if(Array.isArray(v))v.forEach(b=>{typeof b=="string"?p.innerHTML+=b:p.append(b)});else if(typeof v=="function"){let b=v.call(n,n);typeof b=="string"?p.innerHTML=b:p.append(b)}else p.append(v);return p.classList.add("active"),O&&O.call(n,n),n},n.addCloseControl=()=>{let p=document.createElement("button"),v=n.content.style.color;return p.classList.add("jsPanel-addCloseCtrl"),p.innerHTML=F.icons.close,p.style.color=v,n.options.rtl&&p.classList.add("rtl"),n.appendChild(p),F.pointerup.forEach(O=>{p.addEventListener(O,b=>{if(b.preventDefault(),b.button&&b.button>0)return!1;n.close(null,!0)})}),F.pointerdown.forEach(O=>{p.addEventListener(O,b=>b.preventDefault())}),n},n.addControl=p=>{if(!p.html)return n;p.position||(p.position=1);const v=n.controlbar.querySelectorAll(".jsPanel-btn").length;let O=document.createElement("button");O.innerHTML=p.html,O.className=`jsPanel-btn jsPanel-btn-${p.name} jsPanel-btn-${e.headerControls.size}`,O.style.color=n.header.style.color,p.position>v?n.controlbar.append(O):n.controlbar.insertBefore(O,n.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${p.position})`));const b=p.ariaLabel||p.name;return b&&O.setAttribute("aria-label",b),F.pointerup.forEach(x=>{O.addEventListener(x,se=>{if(se.preventDefault(),se.button&&se.button>0)return!1;p.handler.call(n,n,O)})}),p.afterInsert&&p.afterInsert.call(O,O),n},n.setRtl=()=>{[n.header,n.content,n.footer].forEach(p=>{p.dir="rtl",e.rtl.lang&&(p.lang=e.rtl.lang)})},n.id=e.id,n.classList.add("jsPanel-"+e.paneltype),e.paneltype==="standard"&&(n.style.zIndex=this.zi.next()),i.append(n),n.front(!1,!1),n.setTheme(e.theme),e.boxShadow&&n.classList.add(`jsPanel-depth-${e.boxShadow}`),e.header){if(e.headerLogo&&n.setHeaderLogo(e.headerLogo),n.setIconfont(e.iconfont),n.setHeaderTitle(e.headerTitle),n.setHeaderControls(),F.isIE){let p=[n.headerbar,n.controlbar];switch(n.options.headerControls.size){case"md":p.forEach(v=>{v.style.height="34px"});break;case"xs":p.forEach(v=>{v.style.height="26px"});break;case"sm":p.forEach(v=>{v.style.height="30px"});break;case"lg":p.forEach(v=>{v.style.height="38px"});break;case"xl":p.forEach(v=>{v.style.height="42px"});break}}if(e.header==="auto-show-hide"){let p="jsPanel-depth-"+e.boxShadow;n.header.style.opacity=0,n.style.backgroundColor="transparent",this.remClass(n,p),this.setClass(n.content,p),n.header.addEventListener("mouseenter",()=>{n.header.style.opacity=1,F.setClass(n,p),F.remClass(n.content,p)}),n.header.addEventListener("mouseleave",()=>{n.header.style.opacity=0,F.remClass(n,p),F.setClass(n.content,p)})}}else n.setHeaderRemove(),e.addCloseControl&&n.addCloseControl();if(e.headerToolbar&&n.addToolbar(n.headertoolbar,e.headerToolbar),e.footerToolbar&&n.addToolbar(n.footer,e.footerToolbar),e.border&&n.setBorder(e.border),e.borderRadius&&n.setBorderRadius(e.borderRadius),e.css)for(const[p,v]of Object.entries(e.css))if(p==="panel")n.className+=` ${v}`;else{let O=n.querySelector(`.jsPanel-${p}`);O&&(O.className+=` ${v}`)}if(e.content&&(typeof e.content=="function"?e.content.call(n,n):typeof e.content=="string"?n.content.innerHTML=e.content:n.content.append(e.content)),e.contentAjax&&this.ajax(e.contentAjax,n),e.contentFetch&&this.fetch(e.contentFetch,n),e.contentOverflow){const p=e.contentOverflow.split(" ");p.length===1?n.content.style.overflow=p[0]:p.length===2&&(n.content.style.overflowX=p[0],n.content.style.overflowY=p[1])}if(e.autoclose){typeof e.autoclose=="number"?e.autoclose={time:e.autoclose+"ms"}:typeof e.autoclose=="string"&&(e.autoclose={time:e.autoclose});let p=Object.assign({},F.defaultAutocloseConfig,e.autoclose);p.time&&typeof p.time=="number"&&(p.time+="ms");let v=n.progressbar.querySelector("div");v.addEventListener("animationend",O=>{O.stopPropagation(),n.progressbar.classList.remove("active"),n.close()}),p.progressbar&&(n.progressbar.classList.add("active"),p.background?F.colorNames[p.background]?n.progressbar.style.background="#"+F.colorNames[p.background]:n.progressbar.style.background=p.background:n.progressbar.classList.add("success-bg")),v.style.animation=`${p.time} progressbar`}if(e.rtl&&n.setRtl(),n.setSize(),n.status="normalized",e.position?this.position(n,e.position):n.style.opacity=1,document.dispatchEvent(m),n.calcSizeFactors(),e.animateIn&&(n.addEventListener("animationend",()=>{this.remClass(n,e.animateIn)}),this.setClass(n,e.animateIn)),e.syncMargins){let p=this.pOcontainment(e.maximizedMargin);e.dragit&&(e.dragit.containment=p,e.dragit.snap===!0?(e.dragit.snap=F.defaultSnapConfig,e.dragit.snap.containment=!0):e.dragit.snap&&(e.dragit.snap.containment=!0)),e.resizeit&&(e.resizeit.containment=p)}if(e.dragit?(["start","drag","stop"].forEach(p=>{e.dragit[p]?typeof e.dragit[p]=="function"&&(e.dragit[p]=[e.dragit[p]]):e.dragit[p]=[]}),n.drag(e.dragit),n.addEventListener("jspaneldragstop",p=>{p.panel===n&&n.calcSizeFactors()},!1)):n.titlebar.style.cursor="default",e.resizeit){["start","resize","stop"].forEach(v=>{e.resizeit[v]?typeof e.resizeit[v]=="function"&&(e.resizeit[v]=[e.resizeit[v]]):e.resizeit[v]=[]}),n.sizeit(e.resizeit);let p;n.addEventListener("jspanelresizestart",v=>{v.panel===n&&(p=n.status)},!1),n.addEventListener("jspanelresizestop",v=>{v.panel===n&&(p==="smallified"||p==="smallifiedmax"||p==="maximized")&&parseFloat(n.style.height)>parseFloat(window.getComputedStyle(n.header).height)&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(m),document.dispatchEvent(c),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every"),n.calcSizeFactors())},!1)}if(n.saveCurrentDimensions(),n.saveCurrentPosition(),e.setStatus&&(e.setStatus==="smallifiedmax"?n.maximize().smallify():e.setStatus==="smallified"?n.smallify():n[e.setStatus.slice(0,-1)]()),this.pointerdown.forEach(p=>{n.addEventListener(p,v=>{!v.target.closest(".jsPanel-btn-close")&&!v.target.closest(".jsPanel-btn-minimize")&&e.paneltype==="standard"&&n.front()},!1)}),e.onwindowresize&&n.options.container==="window"&&window.addEventListener("resize",n.windowResizeHandler,!1),e.onparentresize){let p=e.onparentresize,v=typeof p,O=n.isChildpanel();if(O){const b=O.content;let x=[];n.parentResizeHandler=se=>{if(se.panel===O){x[0]=b.offsetWidth,x[1]=b.offsetHeight;let ce=n.status,N,K;ce==="maximized"&&p?n.maximize():n.snapped&&ce!=="minimized"?n.snap(n.snapped,!0):ce==="normalized"||ce==="smallified"||ce==="maximized"?v==="function"?p.call(n,n,{width:x[0],height:x[1]}):v==="object"&&p.preset===!0?(N=(x[0]-n.offsetWidth)*n.hf,n.style.left=N<=0?0:N+"px",K=(x[1]-n.offsetHeight)*n.vf,n.style.top=K<=0?0:K+"px",p.callback.call(n,n,{width:x[0],height:x[1]})):v==="boolean"&&(N=(x[0]-n.offsetWidth)*n.hf,n.style.left=N<=0?0:N+"px",K=(x[1]-n.offsetHeight)*n.vf,n.style.top=K<=0?0:K+"px"):ce==="smallifiedmax"&&p&&n.maximize().smallify()}},document.addEventListener("jspanelresize",n.parentResizeHandler,!1)}}return this.globalCallbacks&&(Array.isArray(this.globalCallbacks)?this.globalCallbacks.forEach(p=>p.call(n,n)):this.globalCallbacks.call(n,n)),e.callback&&(Array.isArray(e.callback)?e.callback.forEach(p=>p.call(n,n)):e.callback.call(n,n)),t&&(Array.isArray(t)?t.forEach(p=>p.call(n,n)):t.call(n,n)),document.dispatchEvent(a),n}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fa=Symbol.for(""),Vd=e=>{if(e?.r===fa)return e?._$litStatic$},Yd=e=>({_$litStatic$:e,r:fa}),yo=new Map,Gd=e=>(t,...r)=>{const i=r.length;let n,a;const c=[],f=[];let m,k=0,_=!1;for(;k<i;){for(m=t[k];k<i&&(a=r[k],(n=Vd(a))!==void 0);)m+=n+t[++k],_=!0;k!==i&&f.push(a),c.push(m),k++}if(k===i&&c.push(t[i]),_){const E=c.join("$$lit$$");(t=yo.get(E))===void 0&&(c.raw=c,yo.set(E,t=c)),r=f}return e(t,...r)},Xd=Gd(H);var Jd=Object.defineProperty,Qd=Object.getOwnPropertyDescriptor,ei=(e,t,r,i)=>{for(var n=i>1?void 0:i?Qd(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Jd(t,r,n),n};let Lt=class extends tt{constructor(){super(...arguments),this.values=[],this.current="",this.search="",this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,r){return this.values=t,this.current=r,this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(i=>{this.resolveFn=i,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}close(e){document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),Lt.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),Lt.instance===this&&(Lt.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(r=>r.value.toLowerCase().includes(e));return H`
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
      ${t.length===0?H`<div class="empty">No matching values.</div>`:H`<ul>
            ${t.slice(0,500).map(r=>H`
                <li
                  class=${r.value===this.current?"selected":""}
                  @click=${()=>this.close(r.value)}
                >
                  <span class="label">${r.value||H`<em>(empty)</em>`}</span>
                  <span class="count">${r.count}</span>
                </li>
              `)}
          </ul>`}
      ${this.values.length>500?H`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      <div class="actions">
        <button class="text" @click=${()=>this.close({clear:!0})}>Clear filter</button>
        <span style="color:#6b7280">${t.length} value${t.length===1?"":"s"}</span>
      </div>
    `}};Lt.instance=null;Lt.styles=[en,ot`
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
    `];ei([Zt({type:Array})],Lt.prototype,"values",2);ei([Zt({type:String})],Lt.prototype,"current",2);ei([ee()],Lt.prototype,"search",2);Lt=ei([dt("filter-popover")],Lt);var Zd=Object.defineProperty,ef=Object.getOwnPropertyDescriptor,Mt=(e,t,r,i)=>{for(var n=i>1?void 0:i?ef(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Zd(t,r,n),n};let Pt=class extends tt{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const r=t[this.highlightIdx];r!==void 0?(e.preventDefault(),this.onPick(r)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const r=[];for(const i of this.options)if(i.toLowerCase().includes(t)&&(r.push(i),r.length>=500))break;return r}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return H`
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
        ${this.value?H`<button
              type="button"
              class="clear"
              title="Clear filter"
              tabindex="-1"
              @mousedown=${r=>r.preventDefault()}
              @click=${this.onClear}
            >
              ×
            </button>`:Re}
      </div>
      ${this.open?H`<ul class="dropdown" style=${t}>
            ${e.length===0?H`<li class="empty">No matching values.</li>`:e.map((r,i)=>H`
                    <li
                      class=${i===this.highlightIdx?"highlighted":""}
                      @mousedown=${n=>n.preventDefault()}
                      @click=${()=>this.onPick(r)}
                    >
                      ${r}
                    </li>
                  `)}
          </ul>`:Re}
    `}};Pt.styles=ot`
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
  `;Mt([Zt({type:String})],Pt.prototype,"value",2);Mt([Zt({type:Array})],Pt.prototype,"options",2);Mt([Zt({type:String})],Pt.prototype,"placeholder",2);Mt([ee()],Pt.prototype,"open",2);Mt([ee()],Pt.prototype,"highlightIdx",2);Mt([ee()],Pt.prototype,"dropTop",2);Mt([ee()],Pt.prototype,"dropLeft",2);Mt([ee()],Pt.prototype,"dropMinWidth",2);Mt([ee()],Pt.prototype,"editing",2);Mt([Kr("input")],Pt.prototype,"inputEl",2);Pt=Mt([dt("filter-combobox")],Pt);var tf=Object.defineProperty,nf=Object.getOwnPropertyDescriptor,bt=(e,t,r,i)=>{for(var n=i>1?void 0:i?nf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&tf(t,r,n),n};let ut=class extends tt{constructor(){super(...arguments),this.tableId="",this.columns=[],this.rows=[],this.sortColumn=null,this.sortDir=null,this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;t.tableId===this.tableId&&(this.localQuery=t.query??"")}}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.()}async updated(e){e.has("tableId")&&this.tableId&&(this.unsubscribe?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.markEmptyCells()}markEmptyCells(){const e=this.shadowRoot?.querySelectorAll("tbody tr:not(.spacer) > td");if(e)for(const t of e)t.className.startsWith("t-")&&t.classList.toggle("is-null",rf(t))}async bind(){if(!this.tableId)return;const e=await je(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(i=>{const n=i.find(a=>a.id===this.tableId);n&&this.applyTable(n)}),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const r=e.store.rows(this.tableId);this.unsubscribe=r.subscribe(i=>this.rows=i);try{this.rows=await r.find()}catch(i){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${i?.message??String(i)}`,{kind:"error",title:"Load failed"})}}applyTable(e){this.columns=e.columns,this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filters={...e.filters??{}}}async setCell(e,t,r){const i=await je();await this.commitCell(i,e,t,r)}async commitCell(e,t,r,i){const n=this.columns.find(a=>a.field===r);if(n){const a=sf(n,i,this.rows,t.id);if(a){await e.api.ui.dialogs.alert(a,`Cannot save ${n.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[r]:i},updatedAt:Date.now()})}catch(a){await e.api.ui.dialogs.alert(a?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}renderCell(e,t){const r=e.data[t.field],i=t.renderer,n=i?this.cellRenderers?.get(i):void 0;if(n){const a=Yd(n);return Xd`<${a}
        .value=${r??""}
        .column=${t}
        .row=${e.data}
        @change=${c=>this.setCell(e,t.field,c.detail.value)}
      ></${a}>`}switch(t.type){case"boolean":return H`<input
          type="checkbox"
          .checked=${r===!0||r==="true"||r===1||r==="1"}
          @change=${c=>this.setCell(e,t.field,c.target.checked)}
        />`;case"date":return H`<input
          type="date"
          .value=${of(r)}
          @change=${a=>this.setCell(e,t.field,a.target.value||null)}
        />`;case"datetime":return H`<input
          type="datetime-local"
          .value=${af(r)}
          @change=${a=>this.setCell(e,t.field,a.target.value||null)}
        />`;case"number":return H`<input
          type="number"
          .value=${r==null?"":String(r)}
          @change=${a=>{const c=a.target.value;this.setCell(e,t.field,c===""?null:Number(c))}}
        />`;default:return H`<input
          type="text"
          .value=${String(r??"")}
          @change=${a=>this.setCell(e,t.field,a.target.value)}
        />`}}async deleteRow(e){const t=await je();try{await t.store.rows(this.tableId).remove(e)}catch(r){await t.api.ui.dialogs.alert(r?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e){let t;this.sortColumn!==e?t="asc":this.sortDir==="asc"?t="desc":this.sortDir==="desc"?t=null:t="asc",this.sortColumn=t?e:null,this.sortDir=t;const r=await je(),i=t?{sortColumn:e,sortAsc:t==="asc",updatedAt:Date.now()}:{sortColumn:void 0,sortAsc:void 0,updatedAt:Date.now()};await r.store.tables.patch(this.tableId,i)}filteredRows(){const e=Object.entries(this.filters).filter(([,i])=>i&&i.trim().length>0),t=this.globalQuery.trim().toLowerCase(),r=this.localQuery.trim().toLowerCase();return e.length===0&&t.length===0&&r.length===0?this.rows:this.rows.filter(i=>{const n=a=>Object.values(i.data).some(c=>c!=null&&String(c).toLowerCase().includes(a));return t.length>0&&!n(t)||r.length>0&&!n(r)?!1:e.every(([a,c])=>String(i.data[a]??"").toLowerCase().includes(c.toLowerCase()))})}sortedRows(){const e=this.filteredRows();if(!this.sortColumn||!this.sortDir)return e;const t=this.sortColumn,i=this.columns.find(c=>c.field===t)?.type??"string",n=this.sortDir==="asc"?1:-1,a=[...e];return a.sort((c,f)=>lf(c.data[t],f.data[t],i)*n),a}async openFilterPicker(e,t){e.stopPropagation();const r=e.currentTarget,i=Lt.instance;if(!i)return;const n=new Map;for(const f of this.rowsFacetedFor(t)){const m=f.data[t];if(m==null)continue;const k=String(m);n.set(k,(n.get(k)??0)+1)}const a=[...n.entries()].map(([f,m])=>({value:f,count:m})).sort((f,m)=>m.count-f.count||f.value.localeCompare(m.value)),c=await i.open(r.getBoundingClientRect(),a,this.filters[t]??"");c!==null&&(typeof c=="object"&&"clear"in c?this.onFilterInput(t,""):typeof c=="string"&&this.onFilterInput(t,c))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>this.saveFilters(),250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=Object.entries(this.filters).filter(([r,i])=>i&&i.trim().length>0&&r!==e).map(([r,i])=>[r,i.trim().toLowerCase()]);return t.length===0?this.rows:this.rows.filter(r=>t.every(([i,n])=>String(r.data[i]??"").toLowerCase().includes(n)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const r=50,i=500;for(const n of this.visibleColumns){let a=!0;for(const f of t){const m=f.data[n.field];if(m==null)continue;if((typeof m=="string"?m:String(m)).length>=r){a=!1;break}}if(!a)continue;const c=new Set;for(const f of this.rowsFacetedFor(n.field)){const m=f.data[n.field];if(m==null||m==="")continue;const k=typeof m=="string"?m:String(m);if(!(k.length>=r)&&(c.add(k),c.size>=i))break}e.set(n.field,[...c].sort())}return e}onResizeStart(e,t,r){e.preventDefault(),e.stopPropagation();const i=r.offsetWidth;this.resizing={field:t,startX:e.clientX,startW:i};const n=c=>{if(!this.resizing)return;const f=c.clientX-this.resizing.startX,m=Math.max(40,this.resizing.startW+f);this.columns=this.columns.map(k=>k.field===this.resizing.field?{...k,width:m}:k)},a=async()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",a);const c=this.resizing?.field;if(this.resizing=null,!c)return;await(await je()).store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",n),window.addEventListener("pointerup",a)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,r){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientX<i.left+i.width/2;this.dropTargetField=t,this.dropEdge=n?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const r=this.dragSourceField,i=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!r||r===t||!i)return;const n=[...this.columns],a=n.findIndex(k=>k.field===r);if(a<0)return;const[c]=n.splice(a,1);let f=n.findIndex(k=>k.field===t);if(f<0){n.splice(a,0,c);return}i==="after"&&(f+=1),n.splice(f,0,c),await(await je()).store.tables.patch(this.tableId,{columns:n,updatedAt:Date.now()})}async saveFilters(){const e=await je(),t={};for(const[i,n]of Object.entries(this.filters))n&&n.trim().length>0&&(t[i]=n);const r=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:r,updatedAt:Date.now()})}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,r=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,i=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),n=Math.min(e.length,i+r);return{slice:e.slice(i,n),topPad:i*t,bottomPad:(e.length-n)*t}}render(){const e=this.sortedRows(),t=this.visibleColumns,{slice:r,topPad:i,bottomPad:n}=this.virtualSlice(e),a=this.computeFilterSuggestions();return H`
      <table>
        <colgroup>
          ${t.map(c=>H`<col style=${c.width!=null?`width: ${c.width}px`:""} />`)}
          <col style="width:2rem" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(c=>{const f=this.sortColumn===c.field&&this.sortDir,m=f==="asc"?"▲":f==="desc"?"▼":"⇅",k=`t-${c.type}`,_=this.dragSourceField===c.field,E=this.dropTargetField===c.field,z=E&&this.dropEdge==="before"?" drop-before":E&&this.dropEdge==="after"?" drop-after":"";return H`
                <th
                  class=${`${k}${f?" sorted":""}${_?" drag-source":""}${z}`}
                  title=${`${c.field} — click to sort, drag to reorder`}
                  draggable="true"
                  @click=${()=>this.toggleSort(c.field)}
                  @dragstart=${M=>this.onColDragStart(M,c.field)}
                  @dragover=${M=>this.onColDragOver(M,c.field,M.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(c.field)}
                  @drop=${M=>this.onColDrop(M,c.field)}
                  @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                >
                  ${c.label}<span class="sort-icon">${m}</span>
                  <button
                    class=${`funnel${this.filters[c.field]?" active":""}`}
                    title="Filter by value"
                    @click=${M=>this.openFilterPicker(M,c.field)}
                  >
                    <span class="mi sm">filter_list</span>
                  </button>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${M=>M.stopPropagation()}
                    @pointerdown=${M=>this.onResizeStart(M,c.field,M.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:2rem"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(c=>{const f=a.get(c.field)??[];return H`
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
          ${i>0?H`<tr class="spacer" style=${`height:${i}px`}><td colspan=${t.length+1}></td></tr>`:""}
          ${r.map(c=>H`
              <tr>
                ${t.map(f=>H`<td class=${`t-${f.type}`}>${this.renderCell(c,f)}</td>`)}
                <td>
                  <button class="danger" title="Delete row" @click=${()=>this.deleteRow(c.id)}>
                    <span class="mi sm">delete</span>
                  </button>
                </td>
              </tr>
            `)}
          ${n>0?H`<tr class="spacer" style=${`height:${n}px`}><td colspan=${t.length+1}></td></tr>`:""}
        </tbody>
      </table>
    `}};ut.styles=[en,ot`
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
  `];bt([Zt({type:String})],ut.prototype,"tableId",2);bt([ee()],ut.prototype,"columns",2);bt([ee()],ut.prototype,"rows",2);bt([ee()],ut.prototype,"sortColumn",2);bt([ee()],ut.prototype,"sortDir",2);bt([ee()],ut.prototype,"filters",2);bt([ee()],ut.prototype,"globalQuery",2);bt([ee()],ut.prototype,"localQuery",2);bt([ee()],ut.prototype,"dragSourceField",2);bt([ee()],ut.prototype,"dropTargetField",2);bt([ee()],ut.prototype,"dropEdge",2);bt([ee()],ut.prototype,"resizing",2);bt([ee()],ut.prototype,"cellRenderers",2);bt([ee()],ut.prototype,"scrollY",2);bt([ee()],ut.prototype,"viewportHeight",2);ut=bt([dt("data-table")],ut);function rf(e){if((e.textContent??"").trim()!==""||e.querySelector("img"))return!1;const t=e.querySelectorAll("input");for(const r of Array.from(t))if(r.type==="checkbox"||r.value!=="")return!1;return!0}function sf(e,t,r,i){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&r.find(a=>a.id!==i&&a.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function of(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function af(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}function lf(e,t,r){const i=e==null||e==="",n=t==null||t==="";if(i&&n)return 0;if(i)return 1;if(n)return-1;switch(r){case"number":{const a=Number(e),c=Number(t);return Number.isNaN(a)||Number.isNaN(c)?String(e).localeCompare(String(t)):a-c}case"boolean":return(e?1:0)-(t?1:0);case"date":{const a=new Date(String(e)).getTime(),c=new Date(String(t)).getTime();return Number.isNaN(a)||Number.isNaN(c)?String(e).localeCompare(String(t)):a-c}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}var cf=Object.defineProperty,uf=Object.getOwnPropertyDescriptor,ti=(e,t,r,i)=>{for(var n=i>1?void 0:i?uf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&cf(t,r,n),n};let qn=class extends tt{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.onBlur=()=>{this.query.trim().length===0&&(this.open=!1)}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}render(){return!this.open&&this.query.length===0?H`<button
        class="icon"
        title="Search rows in this table"
        @click=${()=>this.open=!0}
      >
        <span class="mi sm">search</span>
      </button>`:H`<input
      type="search"
      placeholder="search…"
      autofocus
      .value=${this.query}
      @input=${this.onInput}
      @blur=${this.onBlur}
    />`}};qn.styles=[en,ot`
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
  `];ti([Zt({type:String})],qn.prototype,"tableId",2);ti([ee()],qn.prototype,"query",2);ti([ee()],qn.prototype,"open",2);qn=ti([dt("panel-search")],qn);var df=Object.defineProperty,ff=Object.getOwnPropertyDescriptor,lr=(e,t,r,i)=>{for(var n=i>1?void 0:i?ff(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&df(t,r,n),n};let Pn=class extends tt{constructor(){super(...arguments),this.tableId="",this.rowCount=0,this.tableButtons=[],this.table=null}async connectedCallback(){super.connectedCallback();const e=await je();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]);const t=e.store.rows(this.tableId);this.unsubRows=t.subscribe(r=>this.rowCount=r.length),this.rowCount=(await t.find()).length,this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(r=>{this.table=r.find(i=>i.id===this.tableId)??null})}disconnectedCallback(){super.disconnectedCallback(),this.unsubRows?.(),this.unsubTables?.()}async addRow(){const e=await je(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const r={};for(const i of t.columns)r[i.field]=hf(i);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:r,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}async runTableButton(e){const t=await je();try{await Promise.resolve(e.onClick(t.api,{tableId:this.tableId}))}catch(r){console.error(`[table-button:${e.id}]`,r)}}render(){return H`
      <button title="Add a blank row" @click=${this.addRow}>
        <span class="mi sm">add</span><span>Add row</span>
      </button>
      <button title="Edit columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span><span>Columns</span>
      </button>
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>H`<button title=${e.tooltip??e.label} @click=${()=>this.runTableButton(e)}>
            ${e.icon?H`<span class="mi sm">${e.icon}</span>`:""}
            <span>${e.label}</span>
          </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};Pn.styles=[en,ot`
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
  `];lr([Zt({type:String})],Pn.prototype,"tableId",2);lr([ee()],Pn.prototype,"rowCount",2);lr([ee()],Pn.prototype,"tableButtons",2);lr([ee()],Pn.prototype,"table",2);Pn=lr([dt("panel-footer")],Pn);function hf(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}const Bn=new Map,Ir=new Set,ha=new Set;let wo=!1;async function pf(){if(wo)return;wo=!0;const e=await je(),t=(await e.store.tables.find()).filter(r=>r.workspaceId===e.workspaceId);t.sort(vo);for(const r of t)xo(r,e);e.store.tables.subscribe(r=>{const i=r.filter(c=>c.workspaceId===e.workspaceId),n=new Set(i.map(c=>c.id));for(const[c,f]of Bn)if(!n.has(c)){Bn.delete(c),Ir.add(c),ha.add(c);try{f.status!=="closed"&&f.close()}catch{}}const a=i.filter(c=>!Bn.has(c.id)).sort(vo);for(const c of a)xo(c,e)})}function vo(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const mf=200,gf=100,bf=720,yf=360,pa=34;function wf(e,t){if(!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||e.w<mf||e.h<gf)return null;const r=t.getBoundingClientRect();if(e.w>r.width)return null;const i=Math.max(0,Math.min(e.x,r.width-e.w)),n=Math.max(0,Math.min(e.y,r.height-pa));return{...e,x:i,y:n}}function vf(e,t){const r=t.clientWidth,i=t.clientHeight,n=e.offsetWidth,c=e.querySelector(".jsPanel-titlebar")?.offsetHeight||pa,f=parseFloat(e.style.left)||e.offsetLeft||0,m=parseFloat(e.style.top)||e.offsetTop||0,k=Math.max(0,Math.min(f,r-n)),_=Math.max(0,Math.min(m,i-c));k!==f&&(e.style.left=`${k}px`),_!==m&&(e.style.top=`${_}px`)}function xo(e,t){const r=document.createElement("data-table");r.tableId=e.id,r.style.height="100%";const i=document.createElement("panel-search");i.tableId=e.id;const n=document.createElement("panel-footer");n.tableId=e.id;const a=document.getElementById("easydb-panels")??document.body,c=wf(e.windowGeometry,a),f=`panel-${ma(e.id)}`,m=c?{my:"left-top",at:"left-top",offsetX:c.x,offsetY:c.y}:$f(),k=c?{panelSize:`${c.w} ${c.h}`}:{contentSize:`${bf} ${yf}`},_=F.create({id:f,container:a,headerTitle:e.name,footerToolbar:n,theme:"primary",content:r,...k,position:m,minimizeTo:"parent",dragit:{containment:!1,drag:ue=>vf(ue,a),stop:()=>Ri(e.id,t)},resizeit:{containment:!1,stop:()=>Ri(e.id,t)},onfronted:()=>Cf(e.id,t),onbeforeclose:()=>Ir.has(e.id)?!0:((async()=>await t.api.ui.dialogs.confirm(e.source?`Remove the live table "${e.name}"? Its data stays on the Datasette server.`:`Delete table "${e.name}" and all its rows?`,"Confirm")&&(Ir.add(e.id),Bn.get(e.id)?.close()))(),!1),onclosed:async()=>{Bn.delete(e.id),Ir.delete(e.id),!ha.delete(e.id)&&await kf(e.id,t)},onstatuschange:()=>Ri(e.id,t)});Bn.set(e.id,_);const z=document.getElementById(f)?.querySelector(".jsPanel-controlbar");z&&z.prepend(i),c?.maximized&&typeof _.maximize=="function"?queueMicrotask(()=>_.maximize?.()):c?.minimized&&typeof _.minimize=="function"&&queueMicrotask(()=>_.minimize?.());let M=e.name,q=null;const te=ue=>{typeof _.setHeaderTitle=="function"&&_.setHeaderTitle(`${M} (${ue})`)};t.store.rows(e.id).find().then(ue=>te(ue.length)),q=t.store.rows(e.id).subscribe(ue=>te(ue.length)),t.store.tables.subscribe(ue=>{const Pe=ue.find(nt=>nt.id===e.id);Pe&&Pe.name!==M&&(M=Pe.name)});const de=_.close.bind(_);_.close=()=>(q?.(),de())}let xf=0;function $f(){const e=xf++;return{my:"left-top",at:"left-top",offsetX:40+e%8*30,offsetY:80+e%8*30}}async function Ri(e,t){const r=document.getElementById(`panel-${ma(e)}`);if(!r)return;const i=r.dataset.status??"normalized";try{const a=(await t.store.tables.findOne(e))?.windowGeometry?.z??0,c={x:r.offsetLeft,y:r.offsetTop,w:r.offsetWidth,h:r.offsetHeight,z:a,minimized:i==="minimized",maximized:i==="maximized"};await t.store.tables.patch(e,{windowGeometry:c,updatedAt:Date.now()})}catch{}}async function Cf(e,t){try{const r=await t.store.tables.findOne(e);if(!r)return;const i=r.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...i,z:Date.now()},updatedAt:Date.now()})}catch{}}async function kf(e,t){if(!(await t.store.tables.findOne(e))?.source){const i=t.store.rows(e),n=await i.find();await i.bulkRemove(n.map(a=>a.id))}await t.store.tables.remove(e)}function ma(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}var Ef=Object.defineProperty,Sf=Object.getOwnPropertyDescriptor,ga=(e,t,r,i)=>{for(var n=i>1?void 0:i?Sf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Ef(t,r,n),n};let Ur=class extends tt{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await je();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(r=>this.tables=r.filter(i=>i.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(r=>r.workspaceId===this.workspaceId),await pf()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?H``:H`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on
      the page, or click <strong>+ New Table</strong> above.
    </div>`}};Ur.styles=ot`
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
  `;ga([ee()],Ur.prototype,"tables",2);Ur=ga([dt("table-list")],Ur);var _f=Object.defineProperty,Af=Object.getOwnPropertyDescriptor,is=(e,t,r,i)=>{for(var n=i>1?void 0:i?Af(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&_f(t,r,n),n};let ir=class extends tt{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await je();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);if(!t)return;const r=new URLSearchParams(location.search);r.set("space",t.name);const i=`${location.pathname}?${r.toString()}${location.hash}`;location.assign(i)}async addWorkspace(){const t=await(await je()).api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const r=new URLSearchParams(location.search);r.set("space",t.trim()),location.assign(`${location.pathname}?${r.toString()}${location.hash}`)}render(){return H`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>H`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};ir.styles=[en,ot`
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
  `];is([ee()],ir.prototype,"workspaces",2);is([ee()],ir.prototype,"current",2);ir=is([dt("workspace-selector")],ir);var $o=Object.freeze,ba=Object.defineProperty,Pf=Object.getOwnPropertyDescriptor,mn=(e,t,r,i)=>{for(var n=i>1?void 0:i?Pf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&ba(t,r,n),n},Tf=(e,t)=>$o(ba(e,"raw",{value:$o(e.slice())})),Co;function Df(e){return e?e.trimStart().startsWith("<svg")?H`<span class="icon-svg">${yl(e)}</span>`:H`<span class="mi sm">${e}</span>`:""}let Vt=class extends tt{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.api=null,this.searchTimer=null,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId)},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>{document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:this.searchQuery}}))},200)},this.onDragOver=e=>{ko(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!ko(e))return;e.preventDefault();const t=await je(),r=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:r,event:e});for(const i of[...t.registries.dropHandlers])try{if(await i(e,t.api))return}catch(n){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:n})}},this.runSlot=e=>{this.api&&Promise.resolve(e.onClick(this.api)).catch(t=>{console.error(`[footer-button:${e.id}]`,t)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager)}async bindRegistries(){const e=await je();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e))}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){const r=t==="header"||e.variant==="primary"?"primary":"slot";return H`
      <button class=${r} title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
        ${Df(e.icon)}
        <span>${e.label}</span>
      </button>
    `}render(){return H(Co||(Co=Tf([`
      <header>
        <strong>easyDBAccess <span class="version">v0.0.27</span></strong>
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
    `])),this.searchOpen||this.searchQuery.length>0?H`<input
              class="search"
              type="search"
              placeholder="search all tables…"
              autofocus
              .value=${this.searchQuery}
              @input=${this.onSearchInput}
              @blur=${()=>{this.searchQuery.trim().length===0&&(this.searchOpen=!1)}}
            />`:H`<button
              class="icon-btn"
              title="Search across all tables in this workspace"
              @click=${()=>this.searchOpen=!0}
            >
              <span class="mi">search</span>
            </button>`,this.headerButtons.map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};Vt.styles=[en,ot`
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
    `];mn([Kr("new-table-dialog")],Vt.prototype,"dialog",2);mn([Kr("csv-paste-dialog")],Vt.prototype,"csvPasteDialog",2);mn([Kr("plugin-manager-dialog")],Vt.prototype,"pluginManagerDialog",2);mn([ee()],Vt.prototype,"footerButtons",2);mn([ee()],Vt.prototype,"headerButtons",2);mn([ee()],Vt.prototype,"searchQuery",2);mn([ee()],Vt.prototype,"searchOpen",2);Vt=mn([dt("app-shell")],Vt);function ko(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([je(),Ua(()=>Promise.resolve().then(()=>ca),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});
//# sourceMappingURL=index-CHJ15o2w.js.map
