(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const wc="modulepreload",vc=function(e){return"/easydbaccess/"+e},Ro={},Tn=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){let l=function(g){return Promise.all(g.map(x=>Promise.resolve(x).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),h=c?.nonce||c?.getAttribute("nonce");n=l(r.map(g=>{if(g=vc(g),g in Ro)return;Ro[g]=!0;const x=g.endsWith(".css"),w=x?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${w}`))return;const P=document.createElement("link");if(P.rel=x?"stylesheet":wc,x||(P.as="script"),P.crossOrigin="",P.href=g,h&&P.setAttribute("nonce",h),document.head.appendChild(P),x)return new Promise((W,L)=>{P.addEventListener("load",W),P.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${g}`)))})}))}function o(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return n.then(l=>{for(const c of l||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hi=globalThis,Fs=hi.ShadowRoot&&(hi.ShadyCSS===void 0||hi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,zs=Symbol(),Oo=new WeakMap;let Ba=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==zs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Fs&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=Oo.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Oo.set(r,t))}return t}toString(){return this.cssText}};const xc=e=>new Ba(typeof e=="string"?e:e+"",void 0,zs),Ye=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,o)=>i+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1],e[0]);return new Ba(r,e,zs)},$c=(e,t)=>{if(Fs)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),n=hi.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)}},jo=Fs?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return xc(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:kc,defineProperty:Cc,getOwnPropertyDescriptor:Ec,getOwnPropertyNames:Sc,getOwnPropertySymbols:_c,getPrototypeOf:Tc}=Object,Si=globalThis,Fo=Si.trustedTypes,Ac=Fo?Fo.emptyScript:"",Pc=Si.reactiveElementPolyfillSupport,kr=(e,t)=>e,mi={toAttribute(e,t){switch(t){case Boolean:e=e?Ac:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ls=(e,t)=>!kc(e,t),zo={attribute:!0,type:String,converter:mi,reflect:!1,useDefault:!1,hasChanged:Ls};Symbol.metadata??=Symbol("metadata"),Si.litPropertyMetadata??=new WeakMap;let tr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=zo){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,r);n!==void 0&&Cc(this.prototype,t,n)}}static getPropertyDescriptor(t,r,i){const{get:n,set:o}=Ec(this.prototype,t)??{get(){return this[r]},set(l){this[r]=l}};return{get:n,set(l){const c=n?.call(this);o?.call(this,l),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??zo}static _$Ei(){if(this.hasOwnProperty(kr("elementProperties")))return;const t=Tc(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(kr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(kr("properties"))){const r=this.properties,i=[...Sc(r),..._c(r)];for(const n of i)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)r.unshift(jo(n))}else t!==void 0&&r.push(jo(t));return r}static _$Eu(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $c(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$ET(t,r){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:mi).toAttribute(r,i.type);this._$Em=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,r){const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const o=i.getPropertyOptions(n),l=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:mi;this._$Em=n;const c=l.fromAttribute(r,o.type);this[n]=c??this._$Ej?.get(n)??c,this._$Em=null}}requestUpdate(t,r,i,n=!1,o){if(t!==void 0){const l=this.constructor;if(n===!1&&(o=this[t]),i??=l.getPropertyOptions(t),!((i.hasChanged??Ls)(o,r)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(l._$Eu(t,i))))return;this.C(t,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:i,reflect:n,wrapped:o},l){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,l??r??this[t]),o!==!0||l!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i){const{wrapped:l}=o,c=this[n];l!==!0||this._$AL.has(n)||c===void 0||this.C(n,void 0,o,c)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(r)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};tr.elementStyles=[],tr.shadowRootOptions={mode:"open"},tr[kr("elementProperties")]=new Map,tr[kr("finalized")]=new Map,Pc?.({ReactiveElement:tr}),(Si.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ms=globalThis,Lo=e=>e,gi=Ms.trustedTypes,Mo=gi?gi.createPolicy("lit-html",{createHTML:e=>e}):void 0,Na="$lit$",_n=`lit$${Math.random().toFixed(9).slice(2)}$`,Ua="?"+_n,Ic=`<${Ua}>`,Un=document,Cr=()=>Un.createComment(""),Er=e=>e===null||typeof e!="object"&&typeof e!="function",Bs=Array.isArray,Dc=e=>Bs(e)||typeof e?.[Symbol.iterator]=="function",fs=`[ 	
\f\r]`,vr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bo=/-->/g,No=/>/g,Ln=RegExp(`>|${fs}(?:([^\\s"'>=/]+)(${fs}*=${fs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Uo=/'/g,qo=/"/g,qa=/^(?:script|style|textarea|title)$/i,Rc=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),R=Rc(1),qn=Symbol.for("lit-noChange"),me=Symbol.for("lit-nothing"),Ho=new WeakMap,Bn=Un.createTreeWalker(Un,129);function Ha(e,t){if(!Bs(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Mo!==void 0?Mo.createHTML(t):t}const Oc=(e,t)=>{const r=e.length-1,i=[];let n,o=t===2?"<svg>":t===3?"<math>":"",l=vr;for(let c=0;c<r;c++){const h=e[c];let g,x,w=-1,P=0;for(;P<h.length&&(l.lastIndex=P,x=l.exec(h),x!==null);)P=l.lastIndex,l===vr?x[1]==="!--"?l=Bo:x[1]!==void 0?l=No:x[2]!==void 0?(qa.test(x[2])&&(n=RegExp("</"+x[2],"g")),l=Ln):x[3]!==void 0&&(l=Ln):l===Ln?x[0]===">"?(l=n??vr,w=-1):x[1]===void 0?w=-2:(w=l.lastIndex-x[2].length,g=x[1],l=x[3]===void 0?Ln:x[3]==='"'?qo:Uo):l===qo||l===Uo?l=Ln:l===Bo||l===No?l=vr:(l=Ln,n=void 0);const W=l===Ln&&e[c+1].startsWith("/>")?" ":"";o+=l===vr?h+Ic:w>=0?(i.push(g),h.slice(0,w)+Na+h.slice(w)+_n+W):h+_n+(w===-2?c:W)}return[Ha(e,o+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class Sr{constructor({strings:t,_$litType$:r},i){let n;this.parts=[];let o=0,l=0;const c=t.length-1,h=this.parts,[g,x]=Oc(t,r);if(this.el=Sr.createElement(g,i),Bn.currentNode=this.el.content,r===2||r===3){const w=this.el.content.firstChild;w.replaceWith(...w.childNodes)}for(;(n=Bn.nextNode())!==null&&h.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const w of n.getAttributeNames())if(w.endsWith(Na)){const P=x[l++],W=n.getAttribute(w).split(_n),L=/([.?@])?(.*)/.exec(P);h.push({type:1,index:o,name:L[2],strings:W,ctor:L[1]==="."?Fc:L[1]==="?"?zc:L[1]==="@"?Lc:_i}),n.removeAttribute(w)}else w.startsWith(_n)&&(h.push({type:6,index:o}),n.removeAttribute(w));if(qa.test(n.tagName)){const w=n.textContent.split(_n),P=w.length-1;if(P>0){n.textContent=gi?gi.emptyScript:"";for(let W=0;W<P;W++)n.append(w[W],Cr()),Bn.nextNode(),h.push({type:2,index:++o});n.append(w[P],Cr())}}}else if(n.nodeType===8)if(n.data===Ua)h.push({type:2,index:o});else{let w=-1;for(;(w=n.data.indexOf(_n,w+1))!==-1;)h.push({type:7,index:o}),w+=_n.length-1}o++}}static createElement(t,r){const i=Un.createElement("template");return i.innerHTML=t,i}}function rr(e,t,r=e,i){if(t===qn)return t;let n=i!==void 0?r._$Co?.[i]:r._$Cl;const o=Er(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),o===void 0?n=void 0:(n=new o(e),n._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=n:r._$Cl=n),n!==void 0&&(t=rr(e,n._$AS(e,t.values),n,i)),t}class jc{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:i}=this._$AD,n=(t?.creationScope??Un).importNode(r,!0);Bn.currentNode=n;let o=Bn.nextNode(),l=0,c=0,h=i[0];for(;h!==void 0;){if(l===h.index){let g;h.type===2?g=new Ar(o,o.nextSibling,this,t):h.type===1?g=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(g=new Mc(o,this,t)),this._$AV.push(g),h=i[++c]}l!==h?.index&&(o=Bn.nextNode(),l++)}return Bn.currentNode=Un,n}p(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class Ar{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,n){this.type=2,this._$AH=me,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=rr(this,t,r),Er(t)?t===me||t==null||t===""?(this._$AH!==me&&this._$AR(),this._$AH=me):t!==this._$AH&&t!==qn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Dc(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==me&&Er(this._$AH)?this._$AA.nextSibling.data=t:this.T(Un.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Sr.createElement(Ha(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(r);else{const o=new jc(n,this),l=o.u(this.options);o.p(r),this.T(l),this._$AH=o}}_$AC(t){let r=Ho.get(t.strings);return r===void 0&&Ho.set(t.strings,r=new Sr(t)),r}k(t){Bs(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const o of t)n===r.length?r.push(i=new Ar(this.O(Cr()),this.O(Cr()),this,this.options)):i=r[n],i._$AI(o),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const i=Lo(t).nextSibling;Lo(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class _i{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,n,o){this.type=1,this._$AH=me,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=me}_$AI(t,r=this,i,n){const o=this.strings;let l=!1;if(o===void 0)t=rr(this,t,r,0),l=!Er(t)||t!==this._$AH&&t!==qn,l&&(this._$AH=t);else{const c=t;let h,g;for(t=o[0],h=0;h<o.length-1;h++)g=rr(this,c[i+h],r,h),g===qn&&(g=this._$AH[h]),l||=!Er(g)||g!==this._$AH[h],g===me?t=me:t!==me&&(t+=(g??"")+o[h+1]),this._$AH[h]=g}l&&!n&&this.j(t)}j(t){t===me?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Fc extends _i{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===me?void 0:t}}class zc extends _i{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==me)}}class Lc extends _i{constructor(t,r,i,n,o){super(t,r,i,n,o),this.type=5}_$AI(t,r=this){if((t=rr(this,t,r,0)??me)===qn)return;const i=this._$AH,n=t===me&&i!==me||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==me&&(i===me||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Mc{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){rr(this,t)}}const Bc=Ms.litHtmlPolyfillSupport;Bc?.(Sr,Ar),(Ms.litHtmlVersions??=[]).push("3.3.3");const Nc=(e,t,r)=>{const i=r?.renderBefore??t;let n=i._$litPart$;if(n===void 0){const o=r?.renderBefore??null;i._$litPart$=n=new Ar(t.insertBefore(Cr(),o),o,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ns=globalThis;let Ne=class extends tr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Nc(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return qn}};Ne._$litElement$=!0,Ne.finalized=!0,Ns.litElementHydrateSupport?.({LitElement:Ne});const Uc=Ns.litElementPolyfillSupport;Uc?.({LitElement:Ne});(Ns.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qc={attribute:!0,type:String,converter:mi,reflect:!1,hasChanged:Ls},Hc=(e=qc,t,r)=>{const{kind:i,metadata:n}=r;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(r.name,e),i==="accessor"){const{name:l}=r;return{set(c){const h=t.get.call(this);t.set.call(this,c),this.requestUpdate(l,h,e,!0,c)},init(c){return c!==void 0&&this.C(l,void 0,e,c),c}}}if(i==="setter"){const{name:l}=r;return function(c){const h=this[l];t.call(this,c),this.requestUpdate(l,h,e,!0,c)}}throw Error("Unsupported decorator location: "+i)};function Ht(e){return(t,r)=>typeof r=="object"?Hc(e,t,r):((i,n,o)=>{const l=n.hasOwnProperty(o);return n.constructor.createProperty(o,i),l?Object.getOwnPropertyDescriptor(n,o):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function K(e){return Ht({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wc=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Kn(e,t){return(r,i,n)=>{const o=l=>l.renderRoot?.querySelector(e)??null;return Wc(r,i,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kc={CHILD:2},Wa=e=>(...t)=>({_$litDirective$:e,values:t});class Vc{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class bi extends Vc{constructor(t){if(super(t),this.it=me,t.type!==Kc.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===me||t==null)return this._t=void 0,this.it=t;if(t===qn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}bi.directiveName="unsafeHTML",bi.resultType=1;const nr=Wa(bi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class xs extends bi{}xs.directiveName="unsafeSVG",xs.resultType=2;const Ka=Wa(xs);var Gc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Yc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fi={exports:{}},Xc=fi.exports,Wo;function Qc(){return Wo||(Wo=1,(function(e,t){(function(r,i){e.exports=i()})(Xc,function(){var r=function(s,a){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,d){u.__proto__=d}||function(u,d){for(var f in d)Object.prototype.hasOwnProperty.call(d,f)&&(u[f]=d[f])})(s,a)},i=function(){return(i=Object.assign||function(s){for(var a,u=1,d=arguments.length;u<d;u++)for(var f in a=arguments[u])Object.prototype.hasOwnProperty.call(a,f)&&(s[f]=a[f]);return s}).apply(this,arguments)};function n(s,a,u){for(var d,f=0,p=a.length;f<p;f++)!d&&f in a||((d=d||Array.prototype.slice.call(a,0,f))[f]=a[f]);return s.concat(d||Array.prototype.slice.call(a))}var o=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Gc,l=Object.keys,c=Array.isArray;function h(s,a){return typeof a!="object"||l(a).forEach(function(u){s[u]=a[u]}),s}typeof Promise>"u"||o.Promise||(o.Promise=Promise);var g=Object.getPrototypeOf,x={}.hasOwnProperty;function w(s,a){return x.call(s,a)}function P(s,a){typeof a=="function"&&(a=a(g(s))),(typeof Reflect>"u"?l:Reflect.ownKeys)(a).forEach(function(u){L(s,u,a[u])})}var W=Object.defineProperty;function L(s,a,u,d){W(s,a,h(u&&w(u,"get")&&typeof u.get=="function"?{get:u.get,set:u.set,configurable:!0}:{value:u,configurable:!0,writable:!0},d))}function N(s){return{from:function(a){return s.prototype=Object.create(a.prototype),L(s.prototype,"constructor",s),{extend:P.bind(null,s.prototype)}}}}var U=Object.getOwnPropertyDescriptor,re=[].slice;function ce(s,a,u){return re.call(s,a,u)}function be(s,a){return a(s)}function Q(s){if(!s)throw new Error("Assertion Failed")}function q(s){o.setImmediate?setImmediate(s):setTimeout(s,0)}function oe(s,a){if(typeof a=="string"&&w(s,a))return s[a];if(!a)return s;if(typeof a!="string"){for(var u=[],d=0,f=a.length;d<f;++d){var p=oe(s,a[d]);u.push(p)}return u}var y=a.indexOf(".");if(y!==-1){var $=s[a.substr(0,y)];return $==null?void 0:oe($,a.substr(y+1))}}function ye(s,a,u){if(s&&a!==void 0&&!("isFrozen"in Object&&Object.isFrozen(s)))if(typeof a!="string"&&"length"in a){Q(typeof u!="string"&&"length"in u);for(var d=0,f=a.length;d<f;++d)ye(s,a[d],u[d])}else{var p,y,$=a.indexOf(".");$!==-1?(p=a.substr(0,$),(y=a.substr($+1))===""?u===void 0?c(s)&&!isNaN(parseInt(p))?s.splice(p,1):delete s[p]:s[p]=u:ye($=!($=s[p])||!w(s,p)?s[p]={}:$,y,u)):u===void 0?c(s)&&!isNaN(parseInt(a))?s.splice(a,1):delete s[a]:s[a]=u}}function $e(s){var a,u={};for(a in s)w(s,a)&&(u[a]=s[a]);return u}var ze=[].concat;function ke(s){return ze.apply([],s)}var fn="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ke([8,16,32,64].map(function(s){return["Int","Uint","Float"].map(function(a){return a+s+"Array"})}))).filter(function(s){return o[s]}),m=new Set(fn.map(function(s){return o[s]})),v=null;function E(s){return v=new WeakMap,s=(function a(u){if(!u||typeof u!="object")return u;var d=v.get(u);if(d)return d;if(c(u)){d=[],v.set(u,d);for(var f=0,p=u.length;f<p;++f)d.push(a(u[f]))}else if(m.has(u.constructor))d=u;else{var y,$=g(u);for(y in d=$===Object.prototype?{}:Object.create($),v.set(u,d),u)w(u,y)&&(d[y]=a(u[y]))}return d})(s),v=null,s}var b={}.toString;function C(s){return b.call(s).slice(8,-1)}var ue=typeof Symbol<"u"?Symbol.iterator:"@@iterator",pe=typeof ue=="symbol"?function(s){var a;return s!=null&&(a=s[ue])&&a.apply(s)}:function(){return null};function V(s,a){return a=s.indexOf(a),0<=a&&s.splice(a,1),0<=a}var X={};function Xe(s){var a,u,d,f;if(arguments.length===1){if(c(s))return s.slice();if(this===X&&typeof s=="string")return[s];if(f=pe(s)){for(u=[];!(d=f.next()).done;)u.push(d.value);return u}if(s==null)return[s];if(typeof(a=s.length)!="number")return[s];for(u=new Array(a);a--;)u[a]=s[a];return u}for(a=arguments.length,u=new Array(a);a--;)u[a]=arguments[a];return u}var ct=typeof Symbol<"u"?function(s){return s[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Ae=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Mt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Ae),rn={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function He(s,a){this.name=s,this.message=a}function Me(s,a){return s+". Errors: "+Object.keys(a).map(function(u){return a[u].toString()}).filter(function(u,d,f){return f.indexOf(u)===d}).join(`
`)}function _e(s,a,u,d){this.failures=a,this.failedKeys=d,this.successCount=u,this.message=Me(s,a)}function Re(s,a){this.name="BulkError",this.failures=Object.keys(a).map(function(u){return a[u]}),this.failuresByPos=a,this.message=Me(s,this.failures)}N(He).from(Error).extend({toString:function(){return this.name+": "+this.message}}),N(_e).from(He),N(Re).from(He);var Qe=Mt.reduce(function(s,a){return s[a]=a+"Error",s},{}),Ie=He,ie=Mt.reduce(function(s,a){var u=a+"Error";function d(f,p){this.name=u,f?typeof f=="string"?(this.message="".concat(f).concat(p?`
 `+p:""),this.inner=p||null):typeof f=="object"&&(this.message="".concat(f.name," ").concat(f.message),this.inner=f):(this.message=rn[a]||u,this.inner=null)}return N(d).from(Ie),s[a]=d,s},{});ie.Syntax=SyntaxError,ie.Type=TypeError,ie.Range=RangeError;var Je=Ae.reduce(function(s,a){return s[a+"Error"]=ie[a],s},{}),Be=Mt.reduce(function(s,a){return["Syntax","Type","Range"].indexOf(a)===-1&&(s[a+"Error"]=ie[a]),s},{});function fe(){}function Ce(s){return s}function Tt(s,a){return s==null||s===Ce?a:function(u){return a(s(u))}}function de(s,a){return function(){s.apply(this,arguments),a.apply(this,arguments)}}function Ze(s,a){return s===fe?a:function(){var u=s.apply(this,arguments);u!==void 0&&(arguments[0]=u);var d=this.onsuccess,f=this.onerror;this.onsuccess=null,this.onerror=null;var p=a.apply(this,arguments);return d&&(this.onsuccess=this.onsuccess?de(d,this.onsuccess):d),f&&(this.onerror=this.onerror?de(f,this.onerror):f),p!==void 0?p:u}}function wn(s,a){return s===fe?a:function(){s.apply(this,arguments);var u=this.onsuccess,d=this.onerror;this.onsuccess=this.onerror=null,a.apply(this,arguments),u&&(this.onsuccess=this.onsuccess?de(u,this.onsuccess):u),d&&(this.onerror=this.onerror?de(d,this.onerror):d)}}function Yt(s,a){return s===fe?a:function(u){var d=s.apply(this,arguments);h(u,d);var f=this.onsuccess,p=this.onerror;return this.onsuccess=null,this.onerror=null,u=a.apply(this,arguments),f&&(this.onsuccess=this.onsuccess?de(f,this.onsuccess):f),p&&(this.onerror=this.onerror?de(p,this.onerror):p),d===void 0?u===void 0?void 0:u:h(d,u)}}function tt(s,a){return s===fe?a:function(){return a.apply(this,arguments)!==!1&&s.apply(this,arguments)}}function At(s,a){return s===fe?a:function(){var u=s.apply(this,arguments);if(u&&typeof u.then=="function"){for(var d=this,f=arguments.length,p=new Array(f);f--;)p[f]=arguments[f];return u.then(function(){return a.apply(d,p)})}return a.apply(this,arguments)}}Be.ModifyError=_e,Be.DexieError=He,Be.BulkError=Re;var Fe=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function We(s){Fe=s}var $t={},it=100,fn=typeof Promise>"u"?[]:(function(){var s=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[s,g(s),s];var a=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[a,g(a),s]})(),Ae=fn[0],Mt=fn[1],fn=fn[2],Mt=Mt&&Mt.then,Te=Ae&&Ae.constructor,Pt=!!fn,Ke=function(s,a){ot.push([s,a]),dt&&(queueMicrotask(we),dt=!1)},bt=!0,dt=!0,st=[],Ue=[],he=Ce,et={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:fe,pgp:!1,env:{},finalize:fe},Z=et,ot=[],pt=0,Et=[];function ee(s){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var a=this._PSD=Z;if(typeof s!="function"){if(s!==$t)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&ht(this,this._value))}this._state=null,this._value=null,++a.ref,(function u(d,f){try{f(function(p){if(d._state===null){if(p===d)throw new TypeError("A promise cannot be resolved with itself.");var y=d._lib&&Le();p&&typeof p.then=="function"?u(d,function($,S){p instanceof ee?p._then($,S):p.then($,S)}):(d._state=!0,d._value=p,vn(d)),y&&Ve()}},ht.bind(null,d))}catch(p){ht(d,p)}})(this,s)}var sn={get:function(){var s=Z,a=Nr;function u(d,f){var p=this,y=!s.global&&(s!==Z||a!==Nr),$=y&&!$n(),S=new ee(function(T,D){ae(p,new dn(io(d,s,y,$),io(f,s,y,$),T,D,s))});return this._consoleTask&&(S._consoleTask=this._consoleTask),S}return u.prototype=$t,u},set:function(s){L(this,"then",s&&s.prototype===$t?sn:{get:function(){return s},set:sn.set})}};function dn(s,a,u,d,f){this.onFulfilled=typeof s=="function"?s:null,this.onRejected=typeof a=="function"?a:null,this.resolve=u,this.reject=d,this.psd=f}function ht(s,a){var u,d;Ue.push(a),s._state===null&&(u=s._lib&&Le(),a=he(a),s._state=!1,s._value=a,d=s,st.some(function(f){return f._value===d._value})||st.push(d),vn(s),u&&Ve())}function vn(s){var a=s._listeners;s._listeners=[];for(var u=0,d=a.length;u<d;++u)ae(s,a[u]);var f=s._PSD;--f.ref||f.finalize(),pt===0&&(++pt,Ke(function(){--pt==0&&Oe()},[]))}function ae(s,a){if(s._state!==null){var u=s._state?a.onFulfilled:a.onRejected;if(u===null)return(s._state?a.resolve:a.reject)(s._value);++a.psd.ref,++pt,Ke(De,[u,s,a])}else s._listeners.push(a)}function De(s,a,u){try{var d,f=a._value;!a._state&&Ue.length&&(Ue=[]),d=Fe&&a._consoleTask?a._consoleTask.run(function(){return s(f)}):s(f),a._state||Ue.indexOf(f)!==-1||(function(p){for(var y=st.length;y;)if(st[--y]._value===p._value)return st.splice(y,1)})(a),u.resolve(d)}catch(p){u.reject(p)}finally{--pt==0&&Oe(),--u.psd.ref||u.psd.finalize()}}function we(){Dn(et,function(){Le()&&Ve()})}function Le(){var s=bt;return dt=bt=!1,s}function Ve(){var s,a,u;do for(;0<ot.length;)for(s=ot,ot=[],u=s.length,a=0;a<u;++a){var d=s[a];d[0].apply(null,d[1])}while(0<ot.length);dt=bt=!0}function Oe(){var s=st;st=[],s.forEach(function(d){d._PSD.onunhandled.call(null,d._value,d)});for(var a=Et.slice(0),u=a.length;u;)a[--u]()}function Xt(s){return new ee($t,!1,s)}function qe(s,a){var u=Z;return function(){var d=Le(),f=Z;try{return kn(u,!0),s.apply(this,arguments)}catch(p){a&&a(p)}finally{kn(f,!1),d&&Ve()}}}P(ee.prototype,{then:sn,_then:function(s,a){ae(this,new dn(null,null,s,a,Z))},catch:function(s){if(arguments.length===1)return this.then(null,s);var a=s,u=arguments[1];return typeof a=="function"?this.then(null,function(d){return(d instanceof a?u:Xt)(d)}):this.then(null,function(d){return(d&&d.name===a?u:Xt)(d)})},finally:function(s){return this.then(function(a){return ee.resolve(s()).then(function(){return a})},function(a){return ee.resolve(s()).then(function(){return Xt(a)})})},timeout:function(s,a){var u=this;return s<1/0?new ee(function(d,f){var p=setTimeout(function(){return f(new ie.Timeout(a))},s);u.then(d,f).finally(clearTimeout.bind(null,p))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&L(ee.prototype,Symbol.toStringTag,"Dexie.Promise"),et.env=ro(),P(ee,{all:function(){var s=Xe.apply(null,arguments).map(Ur);return new ee(function(a,u){s.length===0&&a([]);var d=s.length;s.forEach(function(f,p){return ee.resolve(f).then(function(y){s[p]=y,--d||a(s)},u)})})},resolve:function(s){return s instanceof ee?s:s&&typeof s.then=="function"?new ee(function(a,u){s.then(a,u)}):new ee($t,!0,s)},reject:Xt,race:function(){var s=Xe.apply(null,arguments).map(Ur);return new ee(function(a,u){s.map(function(d){return ee.resolve(d).then(a,u)})})},PSD:{get:function(){return Z},set:function(s){return Z=s}},totalEchoes:{get:function(){return Nr}},newPSD:xn,usePSD:Dn,scheduler:{get:function(){return Ke},set:function(s){Ke=s}},rejectionMapper:{get:function(){return he},set:function(s){he=s}},follow:function(s,a){return new ee(function(u,d){return xn(function(f,p){var y=Z;y.unhandleds=[],y.onunhandled=p,y.finalize=de(function(){var $,S=this;$=function(){S.unhandleds.length===0?f():p(S.unhandleds[0])},Et.push(function T(){$(),Et.splice(Et.indexOf(T),1)}),++pt,Ke(function(){--pt==0&&Oe()},[])},y.finalize),s()},a,u,d)})}}),Te&&(Te.allSettled&&L(ee,"allSettled",function(){var s=Xe.apply(null,arguments).map(Ur);return new ee(function(a){s.length===0&&a([]);var u=s.length,d=new Array(u);s.forEach(function(f,p){return ee.resolve(f).then(function(y){return d[p]={status:"fulfilled",value:y}},function(y){return d[p]={status:"rejected",reason:y}}).then(function(){return--u||a(d)})})})}),Te.any&&typeof AggregateError<"u"&&L(ee,"any",function(){var s=Xe.apply(null,arguments).map(Ur);return new ee(function(a,u){s.length===0&&u(new AggregateError([]));var d=s.length,f=new Array(d);s.forEach(function(p,y){return ee.resolve(p).then(function($){return a($)},function($){f[y]=$,--d||u(new AggregateError(f))})})})}),Te.withResolvers&&(ee.withResolvers=Te.withResolvers));var mt={awaits:0,echoes:0,id:0},Xl=0,Mr=[],Br=0,Nr=0,Ql=0;function xn(s,a,u,d){var f=Z,p=Object.create(f);return p.parent=f,p.ref=0,p.global=!1,p.id=++Ql,et.env,p.env=Pt?{Promise:ee,PromiseProp:{value:ee,configurable:!0,writable:!0},all:ee.all,race:ee.race,allSettled:ee.allSettled,any:ee.any,resolve:ee.resolve,reject:ee.reject}:{},a&&h(p,a),++f.ref,p.finalize=function(){--this.parent.ref||this.parent.finalize()},d=Dn(p,s,u,d),p.ref===0&&p.finalize(),d}function Gn(){return mt.id||(mt.id=++Xl),++mt.awaits,mt.echoes+=it,mt.id}function $n(){return!!mt.awaits&&(--mt.awaits==0&&(mt.id=0),mt.echoes=mt.awaits*it,!0)}function Ur(s){return mt.echoes&&s&&s.constructor===Te?(Gn(),s.then(function(a){return $n(),a},function(a){return $n(),at(a)})):s}function Jl(){var s=Mr[Mr.length-1];Mr.pop(),kn(s,!1)}function kn(s,a){var u,d=Z;(a?!mt.echoes||Br++&&s===Z:!Br||--Br&&s===Z)||queueMicrotask(a?function(f){++Nr,mt.echoes&&--mt.echoes!=0||(mt.echoes=mt.awaits=mt.id=0),Mr.push(Z),kn(f,!0)}.bind(null,s):Jl),s!==Z&&(Z=s,d===et&&(et.env=ro()),Pt&&(u=et.env.Promise,a=s.env,(d.global||s.global)&&(Object.defineProperty(o,"Promise",a.PromiseProp),u.all=a.all,u.race=a.race,u.resolve=a.resolve,u.reject=a.reject,a.allSettled&&(u.allSettled=a.allSettled),a.any&&(u.any=a.any))))}function ro(){var s=o.Promise;return Pt?{Promise:s,PromiseProp:Object.getOwnPropertyDescriptor(o,"Promise"),all:s.all,race:s.race,allSettled:s.allSettled,any:s.any,resolve:s.resolve,reject:s.reject}:{}}function Dn(s,a,u,d,f){var p=Z;try{return kn(s,!0),a(u,d,f)}finally{kn(p,!1)}}function io(s,a,u,d){return typeof s!="function"?s:function(){var f=Z;u&&Gn(),kn(a,!0);try{return s.apply(this,arguments)}finally{kn(f,!1),d&&queueMicrotask($n)}}}function Mi(s){Promise===Te&&mt.echoes===0?Br===0?s():enqueueNativeMicroTask(s):setTimeout(s,0)}(""+Mt).indexOf("[native code]")===-1&&(Gn=$n=fe);var at=ee.reject,Rn="￿",hn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",so="String expected.",Yn=[],qr="__dbnames",Bi="readonly",Ni="readwrite";function On(s,a){return s?a?function(){return s.apply(this,arguments)&&a.apply(this,arguments)}:s:a}var oo={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Hr(s){return typeof s!="string"||/\./.test(s)?function(a){return a}:function(a){return a[s]===void 0&&s in a&&delete(a=E(a))[s],a}}function ao(){throw ie.Type()}function Pe(s,a){try{var u=lo(s),d=lo(a);if(u!==d)return u==="Array"?1:d==="Array"?-1:u==="binary"?1:d==="binary"?-1:u==="string"?1:d==="string"?-1:u==="Date"?1:d!=="Date"?NaN:-1;switch(u){case"number":case"Date":case"string":return a<s?1:s<a?-1:0;case"binary":return(function(f,p){for(var y=f.length,$=p.length,S=y<$?y:$,T=0;T<S;++T)if(f[T]!==p[T])return f[T]<p[T]?-1:1;return y===$?0:y<$?-1:1})(co(s),co(a));case"Array":return(function(f,p){for(var y=f.length,$=p.length,S=y<$?y:$,T=0;T<S;++T){var D=Pe(f[T],p[T]);if(D!==0)return D}return y===$?0:y<$?-1:1})(s,a)}}catch{}return NaN}function lo(s){var a=typeof s;return a!="object"?a:ArrayBuffer.isView(s)?"binary":(s=C(s),s==="ArrayBuffer"?"binary":s)}function co(s){return s instanceof Uint8Array?s:ArrayBuffer.isView(s)?new Uint8Array(s.buffer,s.byteOffset,s.byteLength):new Uint8Array(s)}var uo=(Ge.prototype._trans=function(s,a,u){var d=this._tx||Z.trans,f=this.name,p=Fe&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(s==="readonly"?"read":"write"," ").concat(this.name));function y(T,D,k){if(!k.schema[f])throw new ie.NotFound("Table "+f+" not part of transaction");return a(k.idbtrans,k)}var $=Le();try{var S=d&&d.db._novip===this.db._novip?d===Z.trans?d._promise(s,y,u):xn(function(){return d._promise(s,y,u)},{trans:d,transless:Z.transless||Z}):(function T(D,k,j,_){if(D.idbdb&&(D._state.openComplete||Z.letThrough||D._vip)){var I=D._createTransaction(k,j,D._dbSchema);try{I.create(),D._state.PR1398_maxLoop=3}catch(O){return O.name===Qe.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return T(D,k,j,_)})):at(O)}return I._promise(k,function(O,A){return xn(function(){return Z.trans=I,_(O,A,I)})}).then(function(O){if(k==="readwrite")try{I.idbtrans.commit()}catch{}return k==="readonly"?O:I._completion.then(function(){return O})})}if(D._state.openComplete)return at(new ie.DatabaseClosed(D._state.dbOpenError));if(!D._state.isBeingOpened){if(!D._state.autoOpen)return at(new ie.DatabaseClosed);D.open().catch(fe)}return D._state.dbReadyPromise.then(function(){return T(D,k,j,_)})})(this.db,s,[this.name],y);return p&&(S._consoleTask=p,S=S.catch(function(T){return console.trace(T),at(T)})),S}finally{$&&Ve()}},Ge.prototype.get=function(s,a){var u=this;return s&&s.constructor===Object?this.where(s).first(a):s==null?at(new ie.Type("Invalid argument to Table.get()")):this._trans("readonly",function(d){return u.core.get({trans:d,key:s}).then(function(f){return u.hook.reading.fire(f)})}).then(a)},Ge.prototype.where=function(s){if(typeof s=="string")return new this.db.WhereClause(this,s);if(c(s))return new this.db.WhereClause(this,"[".concat(s.join("+"),"]"));var a=l(s);if(a.length===1)return this.where(a[0]).equals(s[a[0]]);var u=this.schema.indexes.concat(this.schema.primKey).filter(function($){if($.compound&&a.every(function(T){return 0<=$.keyPath.indexOf(T)})){for(var S=0;S<a.length;++S)if(a.indexOf($.keyPath[S])===-1)return!1;return!0}return!1}).sort(function($,S){return $.keyPath.length-S.keyPath.length})[0];if(u&&this.db._maxKey!==Rn){var p=u.keyPath.slice(0,a.length);return this.where(p).equals(p.map(function(S){return s[S]}))}!u&&Fe&&console.warn("The query ".concat(JSON.stringify(s)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(a.join("+"),"]"));var d=this.schema.idxByName;function f($,S){return Pe($,S)===0}var y=a.reduce(function(k,S){var T=k[0],D=k[1],k=d[S],j=s[S];return[T||k,T||!k?On(D,k&&k.multi?function(_){return _=oe(_,S),c(_)&&_.some(function(I){return f(j,I)})}:function(_){return f(j,oe(_,S))}):D]},[null,null]),p=y[0],y=y[1];return p?this.where(p.name).equals(s[p.keyPath]).filter(y):u?this.filter(y):this.where(a).equals("")},Ge.prototype.filter=function(s){return this.toCollection().and(s)},Ge.prototype.count=function(s){return this.toCollection().count(s)},Ge.prototype.offset=function(s){return this.toCollection().offset(s)},Ge.prototype.limit=function(s){return this.toCollection().limit(s)},Ge.prototype.each=function(s){return this.toCollection().each(s)},Ge.prototype.toArray=function(s){return this.toCollection().toArray(s)},Ge.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Ge.prototype.orderBy=function(s){return new this.db.Collection(new this.db.WhereClause(this,c(s)?"[".concat(s.join("+"),"]"):s))},Ge.prototype.reverse=function(){return this.toCollection().reverse()},Ge.prototype.mapToClass=function(s){var a,u=this.db,d=this.name;function f(){return a!==null&&a.apply(this,arguments)||this}(this.schema.mappedClass=s).prototype instanceof ao&&((function(S,T){if(typeof T!="function"&&T!==null)throw new TypeError("Class extends value "+String(T)+" is not a constructor or null");function D(){this.constructor=S}r(S,T),S.prototype=T===null?Object.create(T):(D.prototype=T.prototype,new D)})(f,a=s),Object.defineProperty(f.prototype,"db",{get:function(){return u},enumerable:!1,configurable:!0}),f.prototype.table=function(){return d},s=f);for(var p=new Set,y=s.prototype;y;y=g(y))Object.getOwnPropertyNames(y).forEach(function(S){return p.add(S)});function $(S){if(!S)return S;var T,D=Object.create(s.prototype);for(T in S)if(!p.has(T))try{D[T]=S[T]}catch{}return D}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=$,this.hook("reading",$),s},Ge.prototype.defineClass=function(){return this.mapToClass(function(s){h(this,s)})},Ge.prototype.add=function(s,a){var u=this,d=this.schema.primKey,f=d.auto,p=d.keyPath,y=s;return p&&f&&(y=Hr(p)(s)),this._trans("readwrite",function($){return u.core.mutate({trans:$,type:"add",keys:a!=null?[a]:null,values:[y]})}).then(function($){return $.numFailures?ee.reject($.failures[0]):$.lastResult}).then(function($){if(p)try{ye(s,p,$)}catch{}return $})},Ge.prototype.update=function(s,a){return typeof s!="object"||c(s)?this.where(":id").equals(s).modify(a):(s=oe(s,this.schema.primKey.keyPath),s===void 0?at(new ie.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(s).modify(a))},Ge.prototype.put=function(s,a){var u=this,d=this.schema.primKey,f=d.auto,p=d.keyPath,y=s;return p&&f&&(y=Hr(p)(s)),this._trans("readwrite",function($){return u.core.mutate({trans:$,type:"put",values:[y],keys:a!=null?[a]:null})}).then(function($){return $.numFailures?ee.reject($.failures[0]):$.lastResult}).then(function($){if(p)try{ye(s,p,$)}catch{}return $})},Ge.prototype.delete=function(s){var a=this;return this._trans("readwrite",function(u){return a.core.mutate({trans:u,type:"delete",keys:[s]})}).then(function(u){return u.numFailures?ee.reject(u.failures[0]):void 0})},Ge.prototype.clear=function(){var s=this;return this._trans("readwrite",function(a){return s.core.mutate({trans:a,type:"deleteRange",range:oo})}).then(function(a){return a.numFailures?ee.reject(a.failures[0]):void 0})},Ge.prototype.bulkGet=function(s){var a=this;return this._trans("readonly",function(u){return a.core.getMany({keys:s,trans:u}).then(function(d){return d.map(function(f){return a.hook.reading.fire(f)})})})},Ge.prototype.bulkAdd=function(s,a,u){var d=this,f=Array.isArray(a)?a:void 0,p=(u=u||(f?void 0:a))?u.allKeys:void 0;return this._trans("readwrite",function(y){var T=d.schema.primKey,$=T.auto,T=T.keyPath;if(T&&f)throw new ie.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(f&&f.length!==s.length)throw new ie.InvalidArgument("Arguments objects and keys must have the same length");var S=s.length,T=T&&$?s.map(Hr(T)):s;return d.core.mutate({trans:y,type:"add",keys:f,values:T,wantResults:p}).then(function(I){var k=I.numFailures,j=I.results,_=I.lastResult,I=I.failures;if(k===0)return p?j:_;throw new Re("".concat(d.name,".bulkAdd(): ").concat(k," of ").concat(S," operations failed"),I)})})},Ge.prototype.bulkPut=function(s,a,u){var d=this,f=Array.isArray(a)?a:void 0,p=(u=u||(f?void 0:a))?u.allKeys:void 0;return this._trans("readwrite",function(y){var T=d.schema.primKey,$=T.auto,T=T.keyPath;if(T&&f)throw new ie.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(f&&f.length!==s.length)throw new ie.InvalidArgument("Arguments objects and keys must have the same length");var S=s.length,T=T&&$?s.map(Hr(T)):s;return d.core.mutate({trans:y,type:"put",keys:f,values:T,wantResults:p}).then(function(I){var k=I.numFailures,j=I.results,_=I.lastResult,I=I.failures;if(k===0)return p?j:_;throw new Re("".concat(d.name,".bulkPut(): ").concat(k," of ").concat(S," operations failed"),I)})})},Ge.prototype.bulkUpdate=function(s){var a=this,u=this.core,d=s.map(function(y){return y.key}),f=s.map(function(y){return y.changes}),p=[];return this._trans("readwrite",function(y){return u.getMany({trans:y,keys:d,cache:"clone"}).then(function($){var S=[],T=[];s.forEach(function(k,j){var _=k.key,I=k.changes,O=$[j];if(O){for(var A=0,z=Object.keys(I);A<z.length;A++){var M=z[A],B=I[M];if(M===a.schema.primKey.keyPath){if(Pe(B,_)!==0)throw new ie.Constraint("Cannot update primary key in bulkUpdate()")}else ye(O,M,B)}p.push(j),S.push(_),T.push(O)}});var D=S.length;return u.mutate({trans:y,type:"put",keys:S,values:T,updates:{keys:d,changeSpecs:f}}).then(function(k){var j=k.numFailures,_=k.failures;if(j===0)return D;for(var I=0,O=Object.keys(_);I<O.length;I++){var A,z=O[I],M=p[Number(z)];M!=null&&(A=_[z],delete _[z],_[M]=A)}throw new Re("".concat(a.name,".bulkUpdate(): ").concat(j," of ").concat(D," operations failed"),_)})})})},Ge.prototype.bulkDelete=function(s){var a=this,u=s.length;return this._trans("readwrite",function(d){return a.core.mutate({trans:d,type:"delete",keys:s})}).then(function(y){var f=y.numFailures,p=y.lastResult,y=y.failures;if(f===0)return p;throw new Re("".concat(a.name,".bulkDelete(): ").concat(f," of ").concat(u," operations failed"),y)})},Ge);function Ge(){}function dr(s){function a(y,$){if($){for(var S=arguments.length,T=new Array(S-1);--S;)T[S-1]=arguments[S];return u[y].subscribe.apply(null,T),s}if(typeof y=="string")return u[y]}var u={};a.addEventType=p;for(var d=1,f=arguments.length;d<f;++d)p(arguments[d]);return a;function p(y,$,S){if(typeof y!="object"){var T;$=$||tt;var D={subscribers:[],fire:S=S||fe,subscribe:function(k){D.subscribers.indexOf(k)===-1&&(D.subscribers.push(k),D.fire=$(D.fire,k))},unsubscribe:function(k){D.subscribers=D.subscribers.filter(function(j){return j!==k}),D.fire=D.subscribers.reduce($,S)}};return u[y]=a[y]=D}l(T=y).forEach(function(k){var j=T[k];if(c(j))p(k,T[k][0],T[k][1]);else{if(j!=="asap")throw new ie.InvalidArgument("Invalid event config");var _=p(k,Ce,function(){for(var I=arguments.length,O=new Array(I);I--;)O[I]=arguments[I];_.subscribers.forEach(function(A){q(function(){A.apply(null,O)})})})}})}}function hr(s,a){return N(a).from({prototype:s}),a}function Xn(s,a){return!(s.filter||s.algorithm||s.or)&&(a?s.justLimit:!s.replayFilter)}function Ui(s,a){s.filter=On(s.filter,a)}function qi(s,a,u){var d=s.replayFilter;s.replayFilter=d?function(){return On(d(),a())}:a,s.justLimit=u&&!d}function Wr(s,a){if(s.isPrimKey)return a.primaryKey;var u=a.getIndexByKeyPath(s.index);if(!u)throw new ie.Schema("KeyPath "+s.index+" on object store "+a.name+" is not indexed");return u}function ho(s,a,u){var d=Wr(s,a.schema);return a.openCursor({trans:u,values:!s.keysOnly,reverse:s.dir==="prev",unique:!!s.unique,query:{index:d,range:s.range}})}function Kr(s,a,u,d){var f=s.replayFilter?On(s.filter,s.replayFilter()):s.filter;if(s.or){var p={},y=function($,S,T){var D,k;f&&!f(S,T,function(j){return S.stop(j)},function(j){return S.fail(j)})||((k=""+(D=S.primaryKey))=="[object ArrayBuffer]"&&(k=""+new Uint8Array(D)),w(p,k)||(p[k]=!0,a($,S,T)))};return Promise.all([s.or._iterate(y,u),fo(ho(s,d,u),s.algorithm,y,!s.keysOnly&&s.valueMapper)])}return fo(ho(s,d,u),On(s.algorithm,f),a,!s.keysOnly&&s.valueMapper)}function fo(s,a,u,d){var f=qe(d?function(p,y,$){return u(d(p),y,$)}:u);return s.then(function(p){if(p)return p.start(function(){var y=function(){return p.continue()};a&&!a(p,function($){return y=$},function($){p.stop($),y=fe},function($){p.fail($),y=fe})||f(p.value,p,function($){return y=$}),y()})})}var fn=Symbol(),fr=(po.prototype.execute=function(s){if(this.add!==void 0){var a=this.add;if(c(a))return n(n([],c(s)?s:[],!0),a).sort();if(typeof a=="number")return(Number(s)||0)+a;if(typeof a=="bigint")try{return BigInt(s)+a}catch{return BigInt(0)+a}throw new TypeError("Invalid term ".concat(a))}if(this.remove!==void 0){var u=this.remove;if(c(u))return c(s)?s.filter(function(d){return!u.includes(d)}).sort():[];if(typeof u=="number")return Number(s)-u;if(typeof u=="bigint")try{return BigInt(s)-u}catch{return BigInt(0)-u}throw new TypeError("Invalid subtrahend ".concat(u))}return a=(a=this.replacePrefix)===null||a===void 0?void 0:a[0],a&&typeof s=="string"&&s.startsWith(a)?this.replacePrefix[1]+s.substring(a.length):s},po);function po(s){Object.assign(this,s)}var Zl=(je.prototype._read=function(s,a){var u=this._ctx;return u.error?u.table._trans(null,at.bind(null,u.error)):u.table._trans("readonly",s).then(a)},je.prototype._write=function(s){var a=this._ctx;return a.error?a.table._trans(null,at.bind(null,a.error)):a.table._trans("readwrite",s,"locked")},je.prototype._addAlgorithm=function(s){var a=this._ctx;a.algorithm=On(a.algorithm,s)},je.prototype._iterate=function(s,a){return Kr(this._ctx,s,a,this._ctx.table.core)},je.prototype.clone=function(s){var a=Object.create(this.constructor.prototype),u=Object.create(this._ctx);return s&&h(u,s),a._ctx=u,a},je.prototype.raw=function(){return this._ctx.valueMapper=null,this},je.prototype.each=function(s){var a=this._ctx;return this._read(function(u){return Kr(a,s,u,a.table.core)})},je.prototype.count=function(s){var a=this;return this._read(function(u){var d=a._ctx,f=d.table.core;if(Xn(d,!0))return f.count({trans:u,query:{index:Wr(d,f.schema),range:d.range}}).then(function(y){return Math.min(y,d.limit)});var p=0;return Kr(d,function(){return++p,!1},u,f).then(function(){return p})}).then(s)},je.prototype.sortBy=function(s,a){var u=s.split(".").reverse(),d=u[0],f=u.length-1;function p(S,T){return T?p(S[u[T]],T-1):S[d]}var y=this._ctx.dir==="next"?1:-1;function $(S,T){return Pe(p(S,f),p(T,f))*y}return this.toArray(function(S){return S.sort($)}).then(a)},je.prototype.toArray=function(s){var a=this;return this._read(function(u){var d=a._ctx;if(d.dir==="next"&&Xn(d,!0)&&0<d.limit){var f=d.valueMapper,p=Wr(d,d.table.core.schema);return d.table.core.query({trans:u,limit:d.limit,values:!0,query:{index:p,range:d.range}}).then(function($){return $=$.result,f?$.map(f):$})}var y=[];return Kr(d,function($){return y.push($)},u,d.table.core).then(function(){return y})},s)},je.prototype.offset=function(s){var a=this._ctx;return s<=0||(a.offset+=s,Xn(a)?qi(a,function(){var u=s;return function(d,f){return u===0||(u===1?--u:f(function(){d.advance(u),u=0}),!1)}}):qi(a,function(){var u=s;return function(){return--u<0}})),this},je.prototype.limit=function(s){return this._ctx.limit=Math.min(this._ctx.limit,s),qi(this._ctx,function(){var a=s;return function(u,d,f){return--a<=0&&d(f),0<=a}},!0),this},je.prototype.until=function(s,a){return Ui(this._ctx,function(u,d,f){return!s(u.value)||(d(f),a)}),this},je.prototype.first=function(s){return this.limit(1).toArray(function(a){return a[0]}).then(s)},je.prototype.last=function(s){return this.reverse().first(s)},je.prototype.filter=function(s){var a;return Ui(this._ctx,function(u){return s(u.value)}),(a=this._ctx).isMatch=On(a.isMatch,s),this},je.prototype.and=function(s){return this.filter(s)},je.prototype.or=function(s){return new this.db.WhereClause(this._ctx.table,s,this)},je.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},je.prototype.desc=function(){return this.reverse()},je.prototype.eachKey=function(s){var a=this._ctx;return a.keysOnly=!a.isMatch,this.each(function(u,d){s(d.key,d)})},je.prototype.eachUniqueKey=function(s){return this._ctx.unique="unique",this.eachKey(s)},je.prototype.eachPrimaryKey=function(s){var a=this._ctx;return a.keysOnly=!a.isMatch,this.each(function(u,d){s(d.primaryKey,d)})},je.prototype.keys=function(s){var a=this._ctx;a.keysOnly=!a.isMatch;var u=[];return this.each(function(d,f){u.push(f.key)}).then(function(){return u}).then(s)},je.prototype.primaryKeys=function(s){var a=this._ctx;if(a.dir==="next"&&Xn(a,!0)&&0<a.limit)return this._read(function(d){var f=Wr(a,a.table.core.schema);return a.table.core.query({trans:d,values:!1,limit:a.limit,query:{index:f,range:a.range}})}).then(function(d){return d.result}).then(s);a.keysOnly=!a.isMatch;var u=[];return this.each(function(d,f){u.push(f.primaryKey)}).then(function(){return u}).then(s)},je.prototype.uniqueKeys=function(s){return this._ctx.unique="unique",this.keys(s)},je.prototype.firstKey=function(s){return this.limit(1).keys(function(a){return a[0]}).then(s)},je.prototype.lastKey=function(s){return this.reverse().firstKey(s)},je.prototype.distinct=function(){var s=this._ctx,s=s.index&&s.table.schema.idxByName[s.index];if(!s||!s.multi)return this;var a={};return Ui(this._ctx,function(f){var d=f.primaryKey.toString(),f=w(a,d);return a[d]=!0,!f}),this},je.prototype.modify=function(s){var a=this,u=this._ctx;return this._write(function(d){var f,p,y;y=typeof s=="function"?s:(f=l(s),p=f.length,function(A){for(var z=!1,M=0;M<p;++M){var B=f[M],H=s[B],G=oe(A,B);H instanceof fr?(ye(A,B,H.execute(G)),z=!0):G!==H&&(ye(A,B,H),z=!0)}return z});var $=u.table.core,k=$.schema.primaryKey,S=k.outbound,T=k.extractKey,D=200,k=a.db._options.modifyChunkSize;k&&(D=typeof k=="object"?k[$.name]||k["*"]||200:k);function j(A,B){var M=B.failures,B=B.numFailures;I+=A-B;for(var H=0,G=l(M);H<G.length;H++){var ne=G[H];_.push(M[ne])}}var _=[],I=0,O=[];return a.clone().primaryKeys().then(function(A){function z(B){var H=Math.min(D,A.length-B);return $.getMany({trans:d,keys:A.slice(B,B+H),cache:"immutable"}).then(function(G){for(var ne=[],Y=[],J=S?[]:null,se=[],te=0;te<H;++te){var le=G[te],xe={value:E(le),primKey:A[B+te]};y.call(xe,xe.value,xe)!==!1&&(xe.value==null?se.push(A[B+te]):S||Pe(T(le),T(xe.value))===0?(Y.push(xe.value),S&&J.push(A[B+te])):(se.push(A[B+te]),ne.push(xe.value)))}return Promise.resolve(0<ne.length&&$.mutate({trans:d,type:"add",values:ne}).then(function(Ee){for(var Se in Ee.failures)se.splice(parseInt(Se),1);j(ne.length,Ee)})).then(function(){return(0<Y.length||M&&typeof s=="object")&&$.mutate({trans:d,type:"put",keys:J,values:Y,criteria:M,changeSpec:typeof s!="function"&&s,isAdditionalChunk:0<B}).then(function(Ee){return j(Y.length,Ee)})}).then(function(){return(0<se.length||M&&s===Hi)&&$.mutate({trans:d,type:"delete",keys:se,criteria:M,isAdditionalChunk:0<B}).then(function(Ee){return j(se.length,Ee)})}).then(function(){return A.length>B+H&&z(B+D)})})}var M=Xn(u)&&u.limit===1/0&&(typeof s!="function"||s===Hi)&&{index:u.index,range:u.range};return z(0).then(function(){if(0<_.length)throw new _e("Error modifying one or more objects",_,I,O);return A.length})})})},je.prototype.delete=function(){var s=this._ctx,a=s.range;return Xn(s)&&(s.isPrimKey||a.type===3)?this._write(function(u){var d=s.table.core.schema.primaryKey,f=a;return s.table.core.count({trans:u,query:{index:d,range:f}}).then(function(p){return s.table.core.mutate({trans:u,type:"deleteRange",range:f}).then(function(y){var $=y.failures;if(y.lastResult,y.results,y=y.numFailures,y)throw new _e("Could not delete some values",Object.keys($).map(function(S){return $[S]}),p-y);return p-y})})}):this.modify(Hi)},je);function je(){}var Hi=function(s,a){return a.value=null};function ec(s,a){return s<a?-1:s===a?0:1}function tc(s,a){return a<s?-1:s===a?0:1}function It(s,a,u){return s=s instanceof go?new s.Collection(s):s,s._ctx.error=new(u||TypeError)(a),s}function Qn(s){return new s.Collection(s,function(){return mo("")}).limit(0)}function Vr(s,a,u,d){var f,p,y,$,S,T,D,k=u.length;if(!u.every(function(I){return typeof I=="string"}))return It(s,so);function j(I){f=I==="next"?function(A){return A.toUpperCase()}:function(A){return A.toLowerCase()},p=I==="next"?function(A){return A.toLowerCase()}:function(A){return A.toUpperCase()},y=I==="next"?ec:tc;var O=u.map(function(A){return{lower:p(A),upper:f(A)}}).sort(function(A,z){return y(A.lower,z.lower)});$=O.map(function(A){return A.upper}),S=O.map(function(A){return A.lower}),D=(T=I)==="next"?"":d}j("next"),s=new s.Collection(s,function(){return Cn($[0],S[k-1]+d)}),s._ondirectionchange=function(I){j(I)};var _=0;return s._addAlgorithm(function(I,O,A){var z=I.key;if(typeof z!="string")return!1;var M=p(z);if(a(M,S,_))return!0;for(var B=null,H=_;H<k;++H){var G=(function(ne,Y,J,se,te,le){for(var xe=Math.min(ne.length,se.length),Ee=-1,Se=0;Se<xe;++Se){var Dt=Y[Se];if(Dt!==se[Se])return te(ne[Se],J[Se])<0?ne.substr(0,Se)+J[Se]+J.substr(Se+1):te(ne[Se],se[Se])<0?ne.substr(0,Se)+se[Se]+J.substr(Se+1):0<=Ee?ne.substr(0,Ee)+Y[Ee]+J.substr(Ee+1):null;te(ne[Se],Dt)<0&&(Ee=Se)}return xe<se.length&&le==="next"?ne+J.substr(ne.length):xe<ne.length&&le==="prev"?ne.substr(0,J.length):Ee<0?null:ne.substr(0,Ee)+se[Ee]+J.substr(Ee+1)})(z,M,$[H],S[H],y,T);G===null&&B===null?_=H+1:(B===null||0<y(B,G))&&(B=G)}return O(B!==null?function(){I.continue(B+D)}:A),!1}),s}function Cn(s,a,u,d){return{type:2,lower:s,upper:a,lowerOpen:u,upperOpen:d}}function mo(s){return{type:1,lower:s,upper:s}}var go=(Object.defineProperty(gt.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),gt.prototype.between=function(s,a,u,d){u=u!==!1,d=d===!0;try{return 0<this._cmp(s,a)||this._cmp(s,a)===0&&(u||d)&&(!u||!d)?Qn(this):new this.Collection(this,function(){return Cn(s,a,!u,!d)})}catch{return It(this,hn)}},gt.prototype.equals=function(s){return s==null?It(this,hn):new this.Collection(this,function(){return mo(s)})},gt.prototype.above=function(s){return s==null?It(this,hn):new this.Collection(this,function(){return Cn(s,void 0,!0)})},gt.prototype.aboveOrEqual=function(s){return s==null?It(this,hn):new this.Collection(this,function(){return Cn(s,void 0,!1)})},gt.prototype.below=function(s){return s==null?It(this,hn):new this.Collection(this,function(){return Cn(void 0,s,!1,!0)})},gt.prototype.belowOrEqual=function(s){return s==null?It(this,hn):new this.Collection(this,function(){return Cn(void 0,s)})},gt.prototype.startsWith=function(s){return typeof s!="string"?It(this,so):this.between(s,s+Rn,!0,!0)},gt.prototype.startsWithIgnoreCase=function(s){return s===""?this.startsWith(s):Vr(this,function(a,u){return a.indexOf(u[0])===0},[s],Rn)},gt.prototype.equalsIgnoreCase=function(s){return Vr(this,function(a,u){return a===u[0]},[s],"")},gt.prototype.anyOfIgnoreCase=function(){var s=Xe.apply(X,arguments);return s.length===0?Qn(this):Vr(this,function(a,u){return u.indexOf(a)!==-1},s,"")},gt.prototype.startsWithAnyOfIgnoreCase=function(){var s=Xe.apply(X,arguments);return s.length===0?Qn(this):Vr(this,function(a,u){return u.some(function(d){return a.indexOf(d)===0})},s,Rn)},gt.prototype.anyOf=function(){var s=this,a=Xe.apply(X,arguments),u=this._cmp;try{a.sort(u)}catch{return It(this,hn)}if(a.length===0)return Qn(this);var d=new this.Collection(this,function(){return Cn(a[0],a[a.length-1])});d._ondirectionchange=function(p){u=p==="next"?s._ascending:s._descending,a.sort(u)};var f=0;return d._addAlgorithm(function(p,y,$){for(var S=p.key;0<u(S,a[f]);)if(++f===a.length)return y($),!1;return u(S,a[f])===0||(y(function(){p.continue(a[f])}),!1)}),d},gt.prototype.notEqual=function(s){return this.inAnyRange([[-1/0,s],[s,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},gt.prototype.noneOf=function(){var s=Xe.apply(X,arguments);if(s.length===0)return new this.Collection(this);try{s.sort(this._ascending)}catch{return It(this,hn)}var a=s.reduce(function(u,d){return u?u.concat([[u[u.length-1][1],d]]):[[-1/0,d]]},null);return a.push([s[s.length-1],this.db._maxKey]),this.inAnyRange(a,{includeLowers:!1,includeUppers:!1})},gt.prototype.inAnyRange=function(z,a){var u=this,d=this._cmp,f=this._ascending,p=this._descending,y=this._min,$=this._max;if(z.length===0)return Qn(this);if(!z.every(function(M){return M[0]!==void 0&&M[1]!==void 0&&f(M[0],M[1])<=0}))return It(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ie.InvalidArgument);var S=!a||a.includeLowers!==!1,T=a&&a.includeUppers===!0,D,k=f;function j(M,B){return k(M[0],B[0])}try{(D=z.reduce(function(M,B){for(var H=0,G=M.length;H<G;++H){var ne=M[H];if(d(B[0],ne[1])<0&&0<d(B[1],ne[0])){ne[0]=y(ne[0],B[0]),ne[1]=$(ne[1],B[1]);break}}return H===G&&M.push(B),M},[])).sort(j)}catch{return It(this,hn)}var _=0,I=T?function(M){return 0<f(M,D[_][1])}:function(M){return 0<=f(M,D[_][1])},O=S?function(M){return 0<p(M,D[_][0])}:function(M){return 0<=p(M,D[_][0])},A=I,z=new this.Collection(this,function(){return Cn(D[0][0],D[D.length-1][1],!S,!T)});return z._ondirectionchange=function(M){k=M==="next"?(A=I,f):(A=O,p),D.sort(j)},z._addAlgorithm(function(M,B,H){for(var G,ne=M.key;A(ne);)if(++_===D.length)return B(H),!1;return!I(G=ne)&&!O(G)||(u._cmp(ne,D[_][1])===0||u._cmp(ne,D[_][0])===0||B(function(){k===f?M.continue(D[_][0]):M.continue(D[_][1])}),!1)}),z},gt.prototype.startsWithAnyOf=function(){var s=Xe.apply(X,arguments);return s.every(function(a){return typeof a=="string"})?s.length===0?Qn(this):this.inAnyRange(s.map(function(a){return[a,a+Rn]})):It(this,"startsWithAnyOf() only works with strings")},gt);function gt(){}function on(s){return qe(function(a){return pr(a),s(a.target.error),!1})}function pr(s){s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault()}var mr="storagemutated",Wi="x-storagemutated-1",En=dr(null,mr),nc=(an.prototype._lock=function(){return Q(!Z.global),++this._reculock,this._reculock!==1||Z.global||(Z.lockOwnerFor=this),this},an.prototype._unlock=function(){if(Q(!Z.global),--this._reculock==0)for(Z.global||(Z.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var s=this._blockedFuncs.shift();try{Dn(s[1],s[0])}catch{}}return this},an.prototype._locked=function(){return this._reculock&&Z.lockOwnerFor!==this},an.prototype.create=function(s){var a=this;if(!this.mode)return this;var u=this.db.idbdb,d=this.db._state.dbOpenError;if(Q(!this.idbtrans),!s&&!u)switch(d&&d.name){case"DatabaseClosedError":throw new ie.DatabaseClosed(d);case"MissingAPIError":throw new ie.MissingAPI(d.message,d);default:throw new ie.OpenFailed(d)}if(!this.active)throw new ie.TransactionInactive;return Q(this._completion._state===null),(s=this.idbtrans=s||(this.db.core||u).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=qe(function(f){pr(f),a._reject(s.error)}),s.onabort=qe(function(f){pr(f),a.active&&a._reject(new ie.Abort(s.error)),a.active=!1,a.on("abort").fire(f)}),s.oncomplete=qe(function(){a.active=!1,a._resolve(),"mutatedParts"in s&&En.storagemutated.fire(s.mutatedParts)}),this},an.prototype._promise=function(s,a,u){var d=this;if(s==="readwrite"&&this.mode!=="readwrite")return at(new ie.ReadOnly("Transaction is readonly"));if(!this.active)return at(new ie.TransactionInactive);if(this._locked())return new ee(function(p,y){d._blockedFuncs.push([function(){d._promise(s,a,u).then(p,y)},Z])});if(u)return xn(function(){var p=new ee(function(y,$){d._lock();var S=a(y,$,d);S&&S.then&&S.then(y,$)});return p.finally(function(){return d._unlock()}),p._lib=!0,p});var f=new ee(function(p,y){var $=a(p,y,d);$&&$.then&&$.then(p,y)});return f._lib=!0,f},an.prototype._root=function(){return this.parent?this.parent._root():this},an.prototype.waitFor=function(s){var a,u=this._root(),d=ee.resolve(s);u._waitingFor?u._waitingFor=u._waitingFor.then(function(){return d}):(u._waitingFor=d,u._waitingQueue=[],a=u.idbtrans.objectStore(u.storeNames[0]),(function p(){for(++u._spinCount;u._waitingQueue.length;)u._waitingQueue.shift()();u._waitingFor&&(a.get(-1/0).onsuccess=p)})());var f=u._waitingFor;return new ee(function(p,y){d.then(function($){return u._waitingQueue.push(qe(p.bind(null,$)))},function($){return u._waitingQueue.push(qe(y.bind(null,$)))}).finally(function(){u._waitingFor===f&&(u._waitingFor=null)})})},an.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ie.Abort))},an.prototype.table=function(s){var a=this._memoizedTables||(this._memoizedTables={});if(w(a,s))return a[s];var u=this.schema[s];if(!u)throw new ie.NotFound("Table "+s+" not part of transaction");return u=new this.db.Table(s,u,this),u.core=this.db.core.table(s),a[s]=u},an);function an(){}function Ki(s,a,u,d,f,p,y){return{name:s,keyPath:a,unique:u,multi:d,auto:f,compound:p,src:(u&&!y?"&":"")+(d?"*":"")+(f?"++":"")+bo(a)}}function bo(s){return typeof s=="string"?s:s?"["+[].join.call(s,"+")+"]":""}function Vi(s,a,u){return{name:s,primKey:a,indexes:u,mappedClass:null,idxByName:(d=function(f){return[f.name,f]},u.reduce(function(f,p,y){return y=d(p,y),y&&(f[y[0]]=y[1]),f},{}))};var d}var gr=function(s){try{return s.only([[]]),gr=function(){return[[]]},[[]]}catch{return gr=function(){return Rn},Rn}};function Gi(s){return s==null?function(){}:typeof s=="string"?(a=s).split(".").length===1?function(u){return u[a]}:function(u){return oe(u,a)}:function(u){return oe(u,s)};var a}function yo(s){return[].slice.call(s)}var rc=0;function br(s){return s==null?":id":typeof s=="string"?s:"[".concat(s.join("+"),"]")}function ic(s,a,S){function d(A){if(A.type===3)return null;if(A.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var _=A.lower,I=A.upper,O=A.lowerOpen,A=A.upperOpen;return _===void 0?I===void 0?null:a.upperBound(I,!!A):I===void 0?a.lowerBound(_,!!O):a.bound(_,I,!!O,!!A)}function f(j){var _,I=j.name;return{name:I,schema:j,mutate:function(O){var A=O.trans,z=O.type,M=O.keys,B=O.values,H=O.range;return new Promise(function(G,ne){G=qe(G);var Y=A.objectStore(I),J=Y.keyPath==null,se=z==="put"||z==="add";if(!se&&z!=="delete"&&z!=="deleteRange")throw new Error("Invalid operation type: "+z);var te,le=(M||B||{length:1}).length;if(M&&B&&M.length!==B.length)throw new Error("Given keys array must have same length as given values array.");if(le===0)return G({numFailures:0,failures:{},results:[],lastResult:void 0});function xe(kt){++Dt,pr(kt)}var Ee=[],Se=[],Dt=0;if(z==="deleteRange"){if(H.type===4)return G({numFailures:Dt,failures:Se,results:[],lastResult:void 0});H.type===3?Ee.push(te=Y.clear()):Ee.push(te=Y.delete(d(H)))}else{var J=se?J?[B,M]:[B,null]:[M,null],ve=J[0],wt=J[1];if(se)for(var vt=0;vt<le;++vt)Ee.push(te=wt&&wt[vt]!==void 0?Y[z](ve[vt],wt[vt]):Y[z](ve[vt])),te.onerror=xe;else for(vt=0;vt<le;++vt)Ee.push(te=Y[z](ve[vt])),te.onerror=xe}function oi(kt){kt=kt.target.result,Ee.forEach(function(zn,hs){return zn.error!=null&&(Se[hs]=zn.error)}),G({numFailures:Dt,failures:Se,results:z==="delete"?M:Ee.map(function(zn){return zn.result}),lastResult:kt})}te.onerror=function(kt){xe(kt),oi(kt)},te.onsuccess=oi})},getMany:function(O){var A=O.trans,z=O.keys;return new Promise(function(M,B){M=qe(M);for(var H,G=A.objectStore(I),ne=z.length,Y=new Array(ne),J=0,se=0,te=function(Ee){Ee=Ee.target,Y[Ee._pos]=Ee.result,++se===J&&M(Y)},le=on(B),xe=0;xe<ne;++xe)z[xe]!=null&&((H=G.get(z[xe]))._pos=xe,H.onsuccess=te,H.onerror=le,++J);J===0&&M(Y)})},get:function(O){var A=O.trans,z=O.key;return new Promise(function(M,B){M=qe(M);var H=A.objectStore(I).get(z);H.onsuccess=function(G){return M(G.target.result)},H.onerror=on(B)})},query:(_=T,function(O){return new Promise(function(A,z){A=qe(A);var M,B,H,J=O.trans,G=O.values,ne=O.limit,te=O.query,Y=ne===1/0?void 0:ne,se=te.index,te=te.range,J=J.objectStore(I),se=se.isPrimaryKey?J:J.index(se.name),te=d(te);if(ne===0)return A({result:[]});_?((Y=G?se.getAll(te,Y):se.getAllKeys(te,Y)).onsuccess=function(le){return A({result:le.target.result})},Y.onerror=on(z)):(M=0,B=!G&&"openKeyCursor"in se?se.openKeyCursor(te):se.openCursor(te),H=[],B.onsuccess=function(le){var xe=B.result;return xe?(H.push(G?xe.value:xe.primaryKey),++M===ne?A({result:H}):void xe.continue()):A({result:H})},B.onerror=on(z))})}),openCursor:function(O){var A=O.trans,z=O.values,M=O.query,B=O.reverse,H=O.unique;return new Promise(function(G,ne){G=qe(G);var se=M.index,Y=M.range,J=A.objectStore(I),J=se.isPrimaryKey?J:J.index(se.name),se=B?H?"prevunique":"prev":H?"nextunique":"next",te=!z&&"openKeyCursor"in J?J.openKeyCursor(d(Y),se):J.openCursor(d(Y),se);te.onerror=on(ne),te.onsuccess=qe(function(le){var xe,Ee,Se,Dt,ve=te.result;ve?(ve.___id=++rc,ve.done=!1,xe=ve.continue.bind(ve),Ee=(Ee=ve.continuePrimaryKey)&&Ee.bind(ve),Se=ve.advance.bind(ve),Dt=function(){throw new Error("Cursor not stopped")},ve.trans=A,ve.stop=ve.continue=ve.continuePrimaryKey=ve.advance=function(){throw new Error("Cursor not started")},ve.fail=qe(ne),ve.next=function(){var wt=this,vt=1;return this.start(function(){return vt--?wt.continue():wt.stop()}).then(function(){return wt})},ve.start=function(wt){function vt(){if(te.result)try{wt()}catch(kt){ve.fail(kt)}else ve.done=!0,ve.start=function(){throw new Error("Cursor behind last entry")},ve.stop()}var oi=new Promise(function(kt,zn){kt=qe(kt),te.onerror=on(zn),ve.fail=zn,ve.stop=function(hs){ve.stop=ve.continue=ve.continuePrimaryKey=ve.advance=Dt,kt(hs)}});return te.onsuccess=qe(function(kt){te.onsuccess=vt,vt()}),ve.continue=xe,ve.continuePrimaryKey=Ee,ve.advance=Se,vt(),oi},G(ve)):G(null)},ne)})},count:function(O){var A=O.query,z=O.trans,M=A.index,B=A.range;return new Promise(function(H,G){var ne=z.objectStore(I),Y=M.isPrimaryKey?ne:ne.index(M.name),ne=d(B),Y=ne?Y.count(ne):Y.count();Y.onsuccess=qe(function(J){return H(J.target.result)}),Y.onerror=on(G)})}}}var p,y,$,D=(y=S,$=yo((p=s).objectStoreNames),{schema:{name:p.name,tables:$.map(function(j){return y.objectStore(j)}).map(function(j){var _=j.keyPath,A=j.autoIncrement,I=c(_),O={},A={name:j.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:_==null,compound:I,keyPath:_,autoIncrement:A,unique:!0,extractKey:Gi(_)},indexes:yo(j.indexNames).map(function(z){return j.index(z)}).map(function(H){var M=H.name,B=H.unique,G=H.multiEntry,H=H.keyPath,G={name:M,compound:c(H),keyPath:H,unique:B,multiEntry:G,extractKey:Gi(H)};return O[br(H)]=G}),getIndexByKeyPath:function(z){return O[br(z)]}};return O[":id"]=A.primaryKey,_!=null&&(O[br(_)]=A.primaryKey),A})},hasGetAll:0<$.length&&"getAll"in y.objectStore($[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),S=D.schema,T=D.hasGetAll,D=S.tables.map(f),k={};return D.forEach(function(j){return k[j.name]=j}),{stack:"dbcore",transaction:s.transaction.bind(s),table:function(j){if(!k[j])throw new Error("Table '".concat(j,"' not found"));return k[j]},MIN_KEY:-1/0,MAX_KEY:gr(a),schema:S}}function sc(s,a,u,d){var f=u.IDBKeyRange;return u.indexedDB,{dbcore:(d=ic(a,f,d),s.dbcore.reduce(function(p,y){return y=y.create,i(i({},p),y(p))},d))}}function Gr(s,d){var u=d.db,d=sc(s._middlewares,u,s._deps,d);s.core=d.dbcore,s.tables.forEach(function(f){var p=f.name;s.core.schema.tables.some(function(y){return y.name===p})&&(f.core=s.core.table(p),s[p]instanceof s.Table&&(s[p].core=f.core))})}function Yr(s,a,u,d){u.forEach(function(f){var p=d[f];a.forEach(function(y){var $=(function S(T,D){return U(T,D)||(T=g(T))&&S(T,D)})(y,f);(!$||"value"in $&&$.value===void 0)&&(y===s.Transaction.prototype||y instanceof s.Transaction?L(y,f,{get:function(){return this.table(f)},set:function(S){W(this,f,{value:S,writable:!0,configurable:!0,enumerable:!0})}}):y[f]=new s.Table(f,p))})})}function Yi(s,a){a.forEach(function(u){for(var d in u)u[d]instanceof s.Table&&delete u[d]})}function oc(s,a){return s._cfg.version-a._cfg.version}function ac(s,a,u,d){var f=s._dbSchema;u.objectStoreNames.contains("$meta")&&!f.$meta&&(f.$meta=Vi("$meta",vo("")[0],[]),s._storeNames.push("$meta"));var p=s._createTransaction("readwrite",s._storeNames,f);p.create(u),p._completion.catch(d);var y=p._reject.bind(p),$=Z.transless||Z;xn(function(){return Z.trans=p,Z.transless=$,a!==0?(Gr(s,u),T=a,((S=p).storeNames.includes("$meta")?S.table("$meta").get("version").then(function(D){return D??T}):ee.resolve(T)).then(function(D){return j=D,_=p,I=u,O=[],D=(k=s)._versions,A=k._dbSchema=Qr(0,k.idbdb,I),(D=D.filter(function(z){return z._cfg.version>=j})).length!==0?(D.forEach(function(z){O.push(function(){var M=A,B=z._cfg.dbschema;Jr(k,M,I),Jr(k,B,I),A=k._dbSchema=B;var H=Xi(M,B);H.add.forEach(function(se){Qi(I,se[0],se[1].primKey,se[1].indexes)}),H.change.forEach(function(se){if(se.recreate)throw new ie.Upgrade("Not yet support for changing primary key");var te=I.objectStore(se.name);se.add.forEach(function(le){return Xr(te,le)}),se.change.forEach(function(le){te.deleteIndex(le.name),Xr(te,le)}),se.del.forEach(function(le){return te.deleteIndex(le)})});var G=z._cfg.contentUpgrade;if(G&&z._cfg.version>j){Gr(k,I),_._memoizedTables={};var ne=$e(B);H.del.forEach(function(se){ne[se]=M[se]}),Yi(k,[k.Transaction.prototype]),Yr(k,[k.Transaction.prototype],l(ne),ne),_.schema=ne;var Y,J=ct(G);return J&&Gn(),H=ee.follow(function(){var se;(Y=G(_))&&J&&(se=$n.bind(null,null),Y.then(se,se))}),Y&&typeof Y.then=="function"?ee.resolve(Y):H.then(function(){return Y})}}),O.push(function(M){var B,H,G=z._cfg.dbschema;B=G,H=M,[].slice.call(H.db.objectStoreNames).forEach(function(ne){return B[ne]==null&&H.db.deleteObjectStore(ne)}),Yi(k,[k.Transaction.prototype]),Yr(k,[k.Transaction.prototype],k._storeNames,k._dbSchema),_.schema=k._dbSchema}),O.push(function(M){k.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(k.idbdb.version/10)===z._cfg.version?(k.idbdb.deleteObjectStore("$meta"),delete k._dbSchema.$meta,k._storeNames=k._storeNames.filter(function(B){return B!=="$meta"})):M.objectStore("$meta").put(z._cfg.version,"version"))})}),(function z(){return O.length?ee.resolve(O.shift()(_.idbtrans)).then(z):ee.resolve()})().then(function(){wo(A,I)})):ee.resolve();var k,j,_,I,O,A}).catch(y)):(l(f).forEach(function(D){Qi(u,D,f[D].primKey,f[D].indexes)}),Gr(s,u),void ee.follow(function(){return s.on.populate.fire(p)}).catch(y));var S,T})}function lc(s,a){wo(s._dbSchema,a),a.db.version%10!=0||a.objectStoreNames.contains("$meta")||a.db.createObjectStore("$meta").add(Math.ceil(a.db.version/10-1),"version");var u=Qr(0,s.idbdb,a);Jr(s,s._dbSchema,a);for(var d=0,f=Xi(u,s._dbSchema).change;d<f.length;d++){var p=(function(y){if(y.change.length||y.recreate)return console.warn("Unable to patch indexes of table ".concat(y.name," because it has changes on the type of index or primary key.")),{value:void 0};var $=a.objectStore(y.name);y.add.forEach(function(S){Fe&&console.debug("Dexie upgrade patch: Creating missing index ".concat(y.name,".").concat(S.src)),Xr($,S)})})(f[d]);if(typeof p=="object")return p.value}}function Xi(s,a){var u,d={del:[],add:[],change:[]};for(u in s)a[u]||d.del.push(u);for(u in a){var f=s[u],p=a[u];if(f){var y={name:u,def:p,recreate:!1,del:[],add:[],change:[]};if(""+(f.primKey.keyPath||"")!=""+(p.primKey.keyPath||"")||f.primKey.auto!==p.primKey.auto)y.recreate=!0,d.change.push(y);else{var $=f.idxByName,S=p.idxByName,T=void 0;for(T in $)S[T]||y.del.push(T);for(T in S){var D=$[T],k=S[T];D?D.src!==k.src&&y.change.push(k):y.add.push(k)}(0<y.del.length||0<y.add.length||0<y.change.length)&&d.change.push(y)}}else d.add.push([u,p])}return d}function Qi(s,a,u,d){var f=s.db.createObjectStore(a,u.keyPath?{keyPath:u.keyPath,autoIncrement:u.auto}:{autoIncrement:u.auto});return d.forEach(function(p){return Xr(f,p)}),f}function wo(s,a){l(s).forEach(function(u){a.db.objectStoreNames.contains(u)||(Fe&&console.debug("Dexie: Creating missing table",u),Qi(a,u,s[u].primKey,s[u].indexes))})}function Xr(s,a){s.createIndex(a.name,a.keyPath,{unique:a.unique,multiEntry:a.multi})}function Qr(s,a,u){var d={};return ce(a.objectStoreNames,0).forEach(function(f){for(var p=u.objectStore(f),y=Ki(bo(T=p.keyPath),T||"",!0,!1,!!p.autoIncrement,T&&typeof T!="string",!0),$=[],S=0;S<p.indexNames.length;++S){var D=p.index(p.indexNames[S]),T=D.keyPath,D=Ki(D.name,T,!!D.unique,!!D.multiEntry,!1,T&&typeof T!="string",!1);$.push(D)}d[f]=Vi(f,y,$)}),d}function Jr(s,a,u){for(var d=u.db.objectStoreNames,f=0;f<d.length;++f){var p=d[f],y=u.objectStore(p);s._hasGetAll="getAll"in y;for(var $=0;$<y.indexNames.length;++$){var S=y.indexNames[$],T=y.index(S).keyPath,D=typeof T=="string"?T:"["+ce(T).join("+")+"]";!a[p]||(T=a[p].idxByName[D])&&(T.name=S,delete a[p].idxByName[D],a[p].idxByName[S]=T)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&o.WorkerGlobalScope&&o instanceof o.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(s._hasGetAll=!1)}function vo(s){return s.split(",").map(function(a,u){var d=(a=a.trim()).replace(/([&*]|\+\+)/g,""),f=/^\[/.test(d)?d.match(/^\[(.*)\]$/)[1].split("+"):d;return Ki(d,f||null,/\&/.test(a),/\*/.test(a),/\+\+/.test(a),c(f),u===0)})}var cc=(Zr.prototype._parseStoresSpec=function(s,a){l(s).forEach(function(u){if(s[u]!==null){var d=vo(s[u]),f=d.shift();if(f.unique=!0,f.multi)throw new ie.Schema("Primary key cannot be multi-valued");d.forEach(function(p){if(p.auto)throw new ie.Schema("Only primary key can be marked as autoIncrement (++)");if(!p.keyPath)throw new ie.Schema("Index must have a name and cannot be an empty string")}),a[u]=Vi(u,f,d)}})},Zr.prototype.stores=function(u){var a=this.db;this._cfg.storesSource=this._cfg.storesSource?h(this._cfg.storesSource,u):u;var u=a._versions,d={},f={};return u.forEach(function(p){h(d,p._cfg.storesSource),f=p._cfg.dbschema={},p._parseStoresSpec(d,f)}),a._dbSchema=f,Yi(a,[a._allTables,a,a.Transaction.prototype]),Yr(a,[a._allTables,a,a.Transaction.prototype,this._cfg.tables],l(f),f),a._storeNames=l(f),this},Zr.prototype.upgrade=function(s){return this._cfg.contentUpgrade=At(this._cfg.contentUpgrade||fe,s),this},Zr);function Zr(){}function Ji(s,a){var u=s._dbNamesDB;return u||(u=s._dbNamesDB=new pn(qr,{addons:[],indexedDB:s,IDBKeyRange:a})).version(1).stores({dbnames:"name"}),u.table("dbnames")}function Zi(s){return s&&typeof s.databases=="function"}function es(s){return xn(function(){return Z.letThrough=!0,s()})}function ts(s){return!("from"in s)}var yt=function(s,a){if(!this){var u=new yt;return s&&"d"in s&&h(u,s),u}h(this,arguments.length?{d:1,from:s,to:1<arguments.length?a:s}:{d:0})};function yr(s,a,u){var d=Pe(a,u);if(!isNaN(d)){if(0<d)throw RangeError();if(ts(s))return h(s,{from:a,to:u,d:1});var f=s.l,d=s.r;if(Pe(u,s.from)<0)return f?yr(f,a,u):s.l={from:a,to:u,d:1,l:null,r:null},$o(s);if(0<Pe(a,s.to))return d?yr(d,a,u):s.r={from:a,to:u,d:1,l:null,r:null},$o(s);Pe(a,s.from)<0&&(s.from=a,s.l=null,s.d=d?d.d+1:1),0<Pe(u,s.to)&&(s.to=u,s.r=null,s.d=s.l?s.l.d+1:1),u=!s.r,f&&!s.l&&wr(s,f),d&&u&&wr(s,d)}}function wr(s,a){ts(a)||(function u(d,S){var p=S.from,y=S.to,$=S.l,S=S.r;yr(d,p,y),$&&u(d,$),S&&u(d,S)})(s,a)}function xo(s,a){var u=ei(a),d=u.next();if(d.done)return!1;for(var f=d.value,p=ei(s),y=p.next(f.from),$=y.value;!d.done&&!y.done;){if(Pe($.from,f.to)<=0&&0<=Pe($.to,f.from))return!0;Pe(f.from,$.from)<0?f=(d=u.next($.from)).value:$=(y=p.next(f.from)).value}return!1}function ei(s){var a=ts(s)?null:{s:0,n:s};return{next:function(u){for(var d=0<arguments.length;a;)switch(a.s){case 0:if(a.s=1,d)for(;a.n.l&&Pe(u,a.n.from)<0;)a={up:a,n:a.n.l,s:1};else for(;a.n.l;)a={up:a,n:a.n.l,s:1};case 1:if(a.s=2,!d||Pe(u,a.n.to)<=0)return{value:a.n,done:!1};case 2:if(a.n.r){a.s=3,a={up:a,n:a.n.r,s:0};continue}case 3:a=a.up}return{done:!0}}}}function $o(s){var a,u,d=(((a=s.r)===null||a===void 0?void 0:a.d)||0)-(((u=s.l)===null||u===void 0?void 0:u.d)||0),f=1<d?"r":d<-1?"l":"";f&&(a=f=="r"?"l":"r",u=i({},s),d=s[f],s.from=d.from,s.to=d.to,s[f]=d[f],u[f]=d[a],(s[a]=u).d=ko(u)),s.d=ko(s)}function ko(u){var a=u.r,u=u.l;return(a?u?Math.max(a.d,u.d):a.d:u?u.d:0)+1}function ti(s,a){return l(a).forEach(function(u){s[u]?wr(s[u],a[u]):s[u]=(function d(f){var p,y,$={};for(p in f)w(f,p)&&(y=f[p],$[p]=!y||typeof y!="object"||m.has(y.constructor)?y:d(y));return $})(a[u])}),s}function ns(s,a){return s.all||a.all||Object.keys(s).some(function(u){return a[u]&&xo(a[u],s[u])})}P(yt.prototype,((Mt={add:function(s){return wr(this,s),this},addKey:function(s){return yr(this,s,s),this},addKeys:function(s){var a=this;return s.forEach(function(u){return yr(a,u,u)}),this},hasKey:function(s){var a=ei(this).next(s).value;return a&&Pe(a.from,s)<=0&&0<=Pe(a.to,s)}})[ue]=function(){return ei(this)},Mt));var jn={},rs={},is=!1;function ni(s){ti(rs,s),is||(is=!0,setTimeout(function(){is=!1,ss(rs,!(rs={}))},0))}function ss(s,a){a===void 0&&(a=!1);var u=new Set;if(s.all)for(var d=0,f=Object.values(jn);d<f.length;d++)Co(y=f[d],s,u,a);else for(var p in s){var y,$=/^idb\:\/\/(.*)\/(.*)\//.exec(p);$&&(p=$[1],$=$[2],(y=jn["idb://".concat(p,"/").concat($)])&&Co(y,s,u,a))}u.forEach(function(S){return S()})}function Co(s,a,u,d){for(var f=[],p=0,y=Object.entries(s.queries.query);p<y.length;p++){for(var $=y[p],S=$[0],T=[],D=0,k=$[1];D<k.length;D++){var j=k[D];ns(a,j.obsSet)?j.subscribers.forEach(function(A){return u.add(A)}):d&&T.push(j)}d&&f.push([S,T])}if(d)for(var _=0,I=f;_<I.length;_++){var O=I[_],S=O[0],T=O[1];s.queries.query[S]=T}}function uc(s){var a=s._state,u=s._deps.indexedDB;if(a.isBeingOpened||s.idbdb)return a.dbReadyPromise.then(function(){return a.dbOpenError?at(a.dbOpenError):s});a.isBeingOpened=!0,a.dbOpenError=null,a.openComplete=!1;var d=a.openCanceller,f=Math.round(10*s.verno),p=!1;function y(){if(a.openCanceller!==d)throw new ie.DatabaseClosed("db.open() was cancelled")}function $(){return new ee(function(j,_){if(y(),!u)throw new ie.MissingAPI;var I=s.name,O=a.autoSchema||!f?u.open(I):u.open(I,f);if(!O)throw new ie.MissingAPI;O.onerror=on(_),O.onblocked=qe(s._fireOnBlocked),O.onupgradeneeded=qe(function(A){var z;D=O.transaction,a.autoSchema&&!s._options.allowEmptyDB?(O.onerror=pr,D.abort(),O.result.close(),(z=u.deleteDatabase(I)).onsuccess=z.onerror=qe(function(){_(new ie.NoSuchDatabase("Database ".concat(I," doesnt exist")))})):(D.onerror=on(_),A=A.oldVersion>Math.pow(2,62)?0:A.oldVersion,k=A<1,s.idbdb=O.result,p&&lc(s,D),ac(s,A/10,D,_))},_),O.onsuccess=qe(function(){D=null;var A,z,M,B,H,G=s.idbdb=O.result,ne=ce(G.objectStoreNames);if(0<ne.length)try{var Y=G.transaction((B=ne).length===1?B[0]:B,"readonly");if(a.autoSchema)z=G,M=Y,(A=s).verno=z.version/10,M=A._dbSchema=Qr(0,z,M),A._storeNames=ce(z.objectStoreNames,0),Yr(A,[A._allTables],l(M),M);else if(Jr(s,s._dbSchema,Y),((H=Xi(Qr(0,(H=s).idbdb,Y),H._dbSchema)).add.length||H.change.some(function(J){return J.add.length||J.change.length}))&&!p)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),G.close(),f=G.version+1,p=!0,j($());Gr(s,Y)}catch{}Yn.push(s),G.onversionchange=qe(function(J){a.vcFired=!0,s.on("versionchange").fire(J)}),G.onclose=qe(function(J){s.on("close").fire(J)}),k&&(H=s._deps,Y=I,G=H.indexedDB,H=H.IDBKeyRange,Zi(G)||Y===qr||Ji(G,H).put({name:Y}).catch(fe)),j()},_)}).catch(function(j){switch(j?.name){case"UnknownError":if(0<a.PR1398_maxLoop)return a.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),$();break;case"VersionError":if(0<f)return f=0,$()}return ee.reject(j)})}var S,T=a.dbReadyResolve,D=null,k=!1;return ee.race([d,(typeof navigator>"u"?ee.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(j){function _(){return indexedDB.databases().finally(j)}S=setInterval(_,100),_()}).finally(function(){return clearInterval(S)}):Promise.resolve()).then($)]).then(function(){return y(),a.onReadyBeingFired=[],ee.resolve(es(function(){return s.on.ready.fire(s.vip)})).then(function j(){if(0<a.onReadyBeingFired.length){var _=a.onReadyBeingFired.reduce(At,fe);return a.onReadyBeingFired=[],ee.resolve(es(function(){return _(s.vip)})).then(j)}})}).finally(function(){a.openCanceller===d&&(a.onReadyBeingFired=null,a.isBeingOpened=!1)}).catch(function(j){a.dbOpenError=j;try{D&&D.abort()}catch{}return d===a.openCanceller&&s._close(),at(j)}).finally(function(){a.openComplete=!0,T()}).then(function(){var j;return k&&(j={},s.tables.forEach(function(_){_.schema.indexes.forEach(function(I){I.name&&(j["idb://".concat(s.name,"/").concat(_.name,"/").concat(I.name)]=new yt(-1/0,[[[]]]))}),j["idb://".concat(s.name,"/").concat(_.name,"/")]=j["idb://".concat(s.name,"/").concat(_.name,"/:dels")]=new yt(-1/0,[[[]]])}),En(mr).fire(j),ss(j,!0)),s})}function os(s){function a(p){return s.next(p)}var u=f(a),d=f(function(p){return s.throw(p)});function f(p){return function(S){var $=p(S),S=$.value;return $.done?S:S&&typeof S.then=="function"?S.then(u,d):c(S)?Promise.all(S).then(u,d):u(S)}}return f(a)()}function ri(s,a,u){for(var d=c(s)?s.slice():[s],f=0;f<u;++f)d.push(a);return d}var dc={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(s){return i(i({},s),{table:function(a){var u=s.table(a),d=u.schema,f={},p=[];function y(k,j,_){var I=br(k),O=f[I]=f[I]||[],A=k==null?0:typeof k=="string"?1:k.length,z=0<j,z=i(i({},_),{name:z?"".concat(I,"(virtual-from:").concat(_.name,")"):_.name,lowLevelIndex:_,isVirtual:z,keyTail:j,keyLength:A,extractKey:Gi(k),unique:!z&&_.unique});return O.push(z),z.isPrimaryKey||p.push(z),1<A&&y(A===2?k[0]:k.slice(0,A-1),j+1,_),O.sort(function(M,B){return M.keyTail-B.keyTail}),z}a=y(d.primaryKey.keyPath,0,d.primaryKey),f[":id"]=[a];for(var $=0,S=d.indexes;$<S.length;$++){var T=S[$];y(T.keyPath,0,T)}function D(k){var j,_=k.query.index;return _.isVirtual?i(i({},k),{query:{index:_.lowLevelIndex,range:(j=k.query.range,_=_.keyTail,{type:j.type===1?2:j.type,lower:ri(j.lower,j.lowerOpen?s.MAX_KEY:s.MIN_KEY,_),lowerOpen:!0,upper:ri(j.upper,j.upperOpen?s.MIN_KEY:s.MAX_KEY,_),upperOpen:!0})}}):k}return i(i({},u),{schema:i(i({},d),{primaryKey:a,indexes:p,getIndexByKeyPath:function(k){return(k=f[br(k)])&&k[0]}}),count:function(k){return u.count(D(k))},query:function(k){return u.query(D(k))},openCursor:function(k){var j=k.query.index,_=j.keyTail,I=j.isVirtual,O=j.keyLength;return I?u.openCursor(D(k)).then(function(z){return z&&A(z)}):u.openCursor(k);function A(z){return Object.create(z,{continue:{value:function(M){M!=null?z.continue(ri(M,k.reverse?s.MAX_KEY:s.MIN_KEY,_)):k.unique?z.continue(z.key.slice(0,O).concat(k.reverse?s.MIN_KEY:s.MAX_KEY,_)):z.continue()}},continuePrimaryKey:{value:function(M,B){z.continuePrimaryKey(ri(M,s.MAX_KEY,_),B)}},primaryKey:{get:function(){return z.primaryKey}},key:{get:function(){var M=z.key;return O===1?M[0]:M.slice(0,O)}},value:{get:function(){return z.value}}})}}})}})}};function as(s,a,u,d){return u=u||{},d=d||"",l(s).forEach(function(f){var p,y,$;w(a,f)?(p=s[f],y=a[f],typeof p=="object"&&typeof y=="object"&&p&&y?($=C(p))!==C(y)?u[d+f]=a[f]:$==="Object"?as(p,y,u,d+f+"."):p!==y&&(u[d+f]=a[f]):p!==y&&(u[d+f]=a[f])):u[d+f]=void 0}),l(a).forEach(function(f){w(s,f)||(u[d+f]=a[f])}),u}function ls(s,a){return a.type==="delete"?a.keys:a.keys||a.values.map(s.extractKey)}var hc={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(s){return i(i({},s),{table:function(a){var u=s.table(a),d=u.schema.primaryKey;return i(i({},u),{mutate:function(f){var p=Z.trans,y=p.table(a).hook,$=y.deleting,S=y.creating,T=y.updating;switch(f.type){case"add":if(S.fire===fe)break;return p._promise("readwrite",function(){return D(f)},!0);case"put":if(S.fire===fe&&T.fire===fe)break;return p._promise("readwrite",function(){return D(f)},!0);case"delete":if($.fire===fe)break;return p._promise("readwrite",function(){return D(f)},!0);case"deleteRange":if($.fire===fe)break;return p._promise("readwrite",function(){return(function k(j,_,I){return u.query({trans:j,values:!1,query:{index:d,range:_},limit:I}).then(function(O){var A=O.result;return D({type:"delete",keys:A,trans:j}).then(function(z){return 0<z.numFailures?Promise.reject(z.failures[0]):A.length<I?{failures:[],numFailures:0,lastResult:void 0}:k(j,i(i({},_),{lower:A[A.length-1],lowerOpen:!0}),I)})})})(f.trans,f.range,1e4)},!0)}return u.mutate(f);function D(k){var j,_,I,O=Z.trans,A=k.keys||ls(d,k);if(!A)throw new Error("Keys missing");return(k=k.type==="add"||k.type==="put"?i(i({},k),{keys:A}):i({},k)).type!=="delete"&&(k.values=n([],k.values)),k.keys&&(k.keys=n([],k.keys)),j=u,I=A,((_=k).type==="add"?Promise.resolve([]):j.getMany({trans:_.trans,keys:I,cache:"immutable"})).then(function(z){var M=A.map(function(B,H){var G,ne,Y,J=z[H],se={onerror:null,onsuccess:null};return k.type==="delete"?$.fire.call(se,B,J,O):k.type==="add"||J===void 0?(G=S.fire.call(se,B,k.values[H],O),B==null&&G!=null&&(k.keys[H]=B=G,d.outbound||ye(k.values[H],d.keyPath,B))):(G=as(J,k.values[H]),(ne=T.fire.call(se,G,B,J,O))&&(Y=k.values[H],Object.keys(ne).forEach(function(te){w(Y,te)?Y[te]=ne[te]:ye(Y,te,ne[te])}))),se});return u.mutate(k).then(function(B){for(var H=B.failures,G=B.results,ne=B.numFailures,B=B.lastResult,Y=0;Y<A.length;++Y){var J=(G||A)[Y],se=M[Y];J==null?se.onerror&&se.onerror(H[Y]):se.onsuccess&&se.onsuccess(k.type==="put"&&z[Y]?k.values[Y]:J)}return{failures:H,results:G,numFailures:ne,lastResult:B}}).catch(function(B){return M.forEach(function(H){return H.onerror&&H.onerror(B)}),Promise.reject(B)})})}}})}})}};function Eo(s,a,u){try{if(!a||a.keys.length<s.length)return null;for(var d=[],f=0,p=0;f<a.keys.length&&p<s.length;++f)Pe(a.keys[f],s[p])===0&&(d.push(u?E(a.values[f]):a.values[f]),++p);return d.length===s.length?d:null}catch{return null}}var fc={stack:"dbcore",level:-1,create:function(s){return{table:function(a){var u=s.table(a);return i(i({},u),{getMany:function(d){if(!d.cache)return u.getMany(d);var f=Eo(d.keys,d.trans._cache,d.cache==="clone");return f?ee.resolve(f):u.getMany(d).then(function(p){return d.trans._cache={keys:d.keys,values:d.cache==="clone"?E(p):p},p})},mutate:function(d){return d.type!=="add"&&(d.trans._cache=null),u.mutate(d)}})}}}};function So(s,a){return s.trans.mode==="readonly"&&!!s.subscr&&!s.trans.explicit&&s.trans.db._options.cache!=="disabled"&&!a.schema.primaryKey.outbound}function _o(s,a){switch(s){case"query":return a.values&&!a.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var pc={stack:"dbcore",level:0,name:"Observability",create:function(s){var a=s.schema.name,u=new yt(s.MIN_KEY,s.MAX_KEY);return i(i({},s),{transaction:function(d,f,p){if(Z.subscr&&f!=="readonly")throw new ie.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Z.querier));return s.transaction(d,f,p)},table:function(d){var f=s.table(d),p=f.schema,y=p.primaryKey,k=p.indexes,$=y.extractKey,S=y.outbound,T=y.autoIncrement&&k.filter(function(_){return _.compound&&_.keyPath.includes(y.keyPath)}),D=i(i({},f),{mutate:function(_){function I(te){return te="idb://".concat(a,"/").concat(d,"/").concat(te),B[te]||(B[te]=new yt)}var O,A,z,M=_.trans,B=_.mutatedParts||(_.mutatedParts={}),H=I(""),G=I(":dels"),ne=_.type,se=_.type==="deleteRange"?[_.range]:_.type==="delete"?[_.keys]:_.values.length<50?[ls(y,_).filter(function(te){return te}),_.values]:[],Y=se[0],J=se[1],se=_.trans._cache;return c(Y)?(H.addKeys(Y),(se=ne==="delete"||Y.length===J.length?Eo(Y,se):null)||G.addKeys(Y),(se||J)&&(O=I,A=se,z=J,p.indexes.forEach(function(te){var le=O(te.name||"");function xe(Se){return Se!=null?te.extractKey(Se):null}function Ee(Se){return te.multiEntry&&c(Se)?Se.forEach(function(Dt){return le.addKey(Dt)}):le.addKey(Se)}(A||z).forEach(function(Se,wt){var ve=A&&xe(A[wt]),wt=z&&xe(z[wt]);Pe(ve,wt)!==0&&(ve!=null&&Ee(ve),wt!=null&&Ee(wt))})}))):Y?(J={from:(J=Y.lower)!==null&&J!==void 0?J:s.MIN_KEY,to:(J=Y.upper)!==null&&J!==void 0?J:s.MAX_KEY},G.add(J),H.add(J)):(H.add(u),G.add(u),p.indexes.forEach(function(te){return I(te.name).add(u)})),f.mutate(_).then(function(te){return!Y||_.type!=="add"&&_.type!=="put"||(H.addKeys(te.results),T&&T.forEach(function(le){for(var xe=_.values.map(function(ve){return le.extractKey(ve)}),Ee=le.keyPath.findIndex(function(ve){return ve===y.keyPath}),Se=0,Dt=te.results.length;Se<Dt;++Se)xe[Se][Ee]=te.results[Se];I(le.name).addKeys(xe)})),M.mutatedParts=ti(M.mutatedParts||{},B),te})}}),k=function(I){var O=I.query,I=O.index,O=O.range;return[I,new yt((I=O.lower)!==null&&I!==void 0?I:s.MIN_KEY,(O=O.upper)!==null&&O!==void 0?O:s.MAX_KEY)]},j={get:function(_){return[y,new yt(_.key)]},getMany:function(_){return[y,new yt().addKeys(_.keys)]},count:k,query:k,openCursor:k};return l(j).forEach(function(_){D[_]=function(I){var O=Z.subscr,A=!!O,z=So(Z,f)&&_o(_,I)?I.obsSet={}:O;if(A){var M=function(J){return J="idb://".concat(a,"/").concat(d,"/").concat(J),z[J]||(z[J]=new yt)},B=M(""),H=M(":dels"),O=j[_](I),A=O[0],O=O[1];if((_==="query"&&A.isPrimaryKey&&!I.values?H:M(A.name||"")).add(O),!A.isPrimaryKey){if(_!=="count"){var G=_==="query"&&S&&I.values&&f.query(i(i({},I),{values:!1}));return f[_].apply(this,arguments).then(function(J){if(_==="query"){if(S&&I.values)return G.then(function(xe){return xe=xe.result,B.addKeys(xe),J});var se=I.values?J.result.map($):J.result;(I.values?B:H).addKeys(se)}else if(_==="openCursor"){var te=J,le=I.values;return te&&Object.create(te,{key:{get:function(){return H.addKey(te.primaryKey),te.key}},primaryKey:{get:function(){var xe=te.primaryKey;return H.addKey(xe),xe}},value:{get:function(){return le&&B.addKey(te.primaryKey),te.value}}})}return J})}H.add(u)}}return f[_].apply(this,arguments)}}),D}})}};function To(s,a,u){if(u.numFailures===0)return a;if(a.type==="deleteRange")return null;var d=a.keys?a.keys.length:"values"in a&&a.values?a.values.length:1;return u.numFailures===d?null:(a=i({},a),c(a.keys)&&(a.keys=a.keys.filter(function(f,p){return!(p in u.failures)})),"values"in a&&c(a.values)&&(a.values=a.values.filter(function(f,p){return!(p in u.failures)})),a)}function cs(s,a){return u=s,((d=a).lower===void 0||(d.lowerOpen?0<Pe(u,d.lower):0<=Pe(u,d.lower)))&&(s=s,(a=a).upper===void 0||(a.upperOpen?Pe(s,a.upper)<0:Pe(s,a.upper)<=0));var u,d}function Ao(s,a,j,d,f,p){if(!j||j.length===0)return s;var y=a.query.index,$=y.multiEntry,S=a.query.range,T=d.schema.primaryKey.extractKey,D=y.extractKey,k=(y.lowLevelIndex||y).extractKey,j=j.reduce(function(_,I){var O=_,A=[];if(I.type==="add"||I.type==="put")for(var z=new yt,M=I.values.length-1;0<=M;--M){var B,H=I.values[M],G=T(H);z.hasKey(G)||(B=D(H),($&&c(B)?B.some(function(te){return cs(te,S)}):cs(B,S))&&(z.addKey(G),A.push(H)))}switch(I.type){case"add":var ne=new yt().addKeys(a.values?_.map(function(le){return T(le)}):_),O=_.concat(a.values?A.filter(function(le){return le=T(le),!ne.hasKey(le)&&(ne.addKey(le),!0)}):A.map(function(le){return T(le)}).filter(function(le){return!ne.hasKey(le)&&(ne.addKey(le),!0)}));break;case"put":var Y=new yt().addKeys(I.values.map(function(le){return T(le)}));O=_.filter(function(le){return!Y.hasKey(a.values?T(le):le)}).concat(a.values?A:A.map(function(le){return T(le)}));break;case"delete":var J=new yt().addKeys(I.keys);O=_.filter(function(le){return!J.hasKey(a.values?T(le):le)});break;case"deleteRange":var se=I.range;O=_.filter(function(le){return!cs(T(le),se)})}return O},s);return j===s?s:(j.sort(function(_,I){return Pe(k(_),k(I))||Pe(T(_),T(I))}),a.limit&&a.limit<1/0&&(j.length>a.limit?j.length=a.limit:s.length===a.limit&&j.length<a.limit&&(f.dirty=!0)),p?Object.freeze(j):j)}function Po(s,a){return Pe(s.lower,a.lower)===0&&Pe(s.upper,a.upper)===0&&!!s.lowerOpen==!!a.lowerOpen&&!!s.upperOpen==!!a.upperOpen}function mc(s,a){return(function(u,d,f,p){if(u===void 0)return d!==void 0?-1:0;if(d===void 0)return 1;if((d=Pe(u,d))===0){if(f&&p)return 0;if(f)return 1;if(p)return-1}return d})(s.lower,a.lower,s.lowerOpen,a.lowerOpen)<=0&&0<=(function(u,d,f,p){if(u===void 0)return d!==void 0?1:0;if(d===void 0)return-1;if((d=Pe(u,d))===0){if(f&&p)return 0;if(f)return-1;if(p)return 1}return d})(s.upper,a.upper,s.upperOpen,a.upperOpen)}function gc(s,a,u,d){s.subscribers.add(u),d.addEventListener("abort",function(){var f,p;s.subscribers.delete(u),s.subscribers.size===0&&(f=s,p=a,setTimeout(function(){f.subscribers.size===0&&V(p,f)},3e3))})}var bc={stack:"dbcore",level:0,name:"Cache",create:function(s){var a=s.schema.name;return i(i({},s),{transaction:function(u,d,f){var p,y,$=s.transaction(u,d,f);return d==="readwrite"&&(y=(p=new AbortController).signal,f=function(S){return function(){if(p.abort(),d==="readwrite"){for(var T=new Set,D=0,k=u;D<k.length;D++){var j=k[D],_=jn["idb://".concat(a,"/").concat(j)];if(_){var I=s.table(j),O=_.optimisticOps.filter(function(le){return le.trans===$});if($._explicit&&S&&$.mutatedParts)for(var A=0,z=Object.values(_.queries.query);A<z.length;A++)for(var M=0,B=(ne=z[A]).slice();M<B.length;M++)ns((Y=B[M]).obsSet,$.mutatedParts)&&(V(ne,Y),Y.subscribers.forEach(function(le){return T.add(le)}));else if(0<O.length){_.optimisticOps=_.optimisticOps.filter(function(le){return le.trans!==$});for(var H=0,G=Object.values(_.queries.query);H<G.length;H++)for(var ne,Y,J,se=0,te=(ne=G[H]).slice();se<te.length;se++)(Y=te[se]).res!=null&&$.mutatedParts&&(S&&!Y.dirty?(J=Object.isFrozen(Y.res),J=Ao(Y.res,Y.req,O,I,Y,J),Y.dirty?(V(ne,Y),Y.subscribers.forEach(function(le){return T.add(le)})):J!==Y.res&&(Y.res=J,Y.promise=ee.resolve({result:J}))):(Y.dirty&&V(ne,Y),Y.subscribers.forEach(function(le){return T.add(le)})))}}}T.forEach(function(le){return le()})}}},$.addEventListener("abort",f(!1),{signal:y}),$.addEventListener("error",f(!1),{signal:y}),$.addEventListener("complete",f(!0),{signal:y})),$},table:function(u){var d=s.table(u),f=d.schema.primaryKey;return i(i({},d),{mutate:function(p){var y=Z.trans;if(f.outbound||y.db._options.cache==="disabled"||y.explicit||y.idbtrans.mode!=="readwrite")return d.mutate(p);var $=jn["idb://".concat(a,"/").concat(u)];return $?(y=d.mutate(p),p.type!=="add"&&p.type!=="put"||!(50<=p.values.length||ls(f,p).some(function(S){return S==null}))?($.optimisticOps.push(p),p.mutatedParts&&ni(p.mutatedParts),y.then(function(S){0<S.numFailures&&(V($.optimisticOps,p),(S=To(0,p,S))&&$.optimisticOps.push(S),p.mutatedParts&&ni(p.mutatedParts))}),y.catch(function(){V($.optimisticOps,p),p.mutatedParts&&ni(p.mutatedParts)})):y.then(function(S){var T=To(0,i(i({},p),{values:p.values.map(function(D,k){var j;return S.failures[k]?D:(D=(j=f.keyPath)!==null&&j!==void 0&&j.includes(".")?E(D):i({},D),ye(D,f.keyPath,S.results[k]),D)})}),S);$.optimisticOps.push(T),queueMicrotask(function(){return p.mutatedParts&&ni(p.mutatedParts)})}),y):d.mutate(p)},query:function(p){if(!So(Z,d)||!_o("query",p))return d.query(p);var y=((T=Z.trans)===null||T===void 0?void 0:T.db._options.cache)==="immutable",k=Z,$=k.requery,S=k.signal,T=(function(I,O,A,z){var M=jn["idb://".concat(I,"/").concat(O)];if(!M)return[];if(!(O=M.queries[A]))return[null,!1,M,null];var B=O[(z.query?z.query.index.name:null)||""];if(!B)return[null,!1,M,null];switch(A){case"query":var H=B.find(function(G){return G.req.limit===z.limit&&G.req.values===z.values&&Po(G.req.query.range,z.query.range)});return H?[H,!0,M,B]:[B.find(function(G){return("limit"in G.req?G.req.limit:1/0)>=z.limit&&(!z.values||G.req.values)&&mc(G.req.query.range,z.query.range)}),!1,M,B];case"count":return H=B.find(function(G){return Po(G.req.query.range,z.query.range)}),[H,!!H,M,B]}})(a,u,"query",p),D=T[0],k=T[1],j=T[2],_=T[3];return D&&k?D.obsSet=p.obsSet:(k=d.query(p).then(function(I){var O=I.result;if(D&&(D.res=O),y){for(var A=0,z=O.length;A<z;++A)Object.freeze(O[A]);Object.freeze(O)}else I.result=E(O);return I}).catch(function(I){return _&&D&&V(_,D),Promise.reject(I)}),D={obsSet:p.obsSet,promise:k,subscribers:new Set,type:"query",req:p,dirty:!1},_?_.push(D):(_=[D],(j=j||(jn["idb://".concat(a,"/").concat(u)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[p.query.index.name||""]=_)),gc(D,_,$,S),D.promise.then(function(I){return{result:Ao(I.result,p,j?.optimisticOps,d,D,y)}})}})}})}};function ii(s,a){return new Proxy(s,{get:function(u,d,f){return d==="db"?a:Reflect.get(u,d,f)}})}var pn=(lt.prototype.version=function(s){if(isNaN(s)||s<.1)throw new ie.Type("Given version is not a positive number");if(s=Math.round(10*s)/10,this.idbdb||this._state.isBeingOpened)throw new ie.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,s);var a=this._versions,u=a.filter(function(d){return d._cfg.version===s})[0];return u||(u=new this.Version(s),a.push(u),a.sort(oc),u.stores({}),this._state.autoSchema=!1,u)},lt.prototype._whenReady=function(s){var a=this;return this.idbdb&&(this._state.openComplete||Z.letThrough||this._vip)?s():new ee(function(u,d){if(a._state.openComplete)return d(new ie.DatabaseClosed(a._state.dbOpenError));if(!a._state.isBeingOpened){if(!a._state.autoOpen)return void d(new ie.DatabaseClosed);a.open().catch(fe)}a._state.dbReadyPromise.then(u,d)}).then(s)},lt.prototype.use=function(s){var a=s.stack,u=s.create,d=s.level,f=s.name;return f&&this.unuse({stack:a,name:f}),s=this._middlewares[a]||(this._middlewares[a]=[]),s.push({stack:a,create:u,level:d??10,name:f}),s.sort(function(p,y){return p.level-y.level}),this},lt.prototype.unuse=function(s){var a=s.stack,u=s.name,d=s.create;return a&&this._middlewares[a]&&(this._middlewares[a]=this._middlewares[a].filter(function(f){return d?f.create!==d:!!u&&f.name!==u})),this},lt.prototype.open=function(){var s=this;return Dn(et,function(){return uc(s)})},lt.prototype._close=function(){var s=this._state,a=Yn.indexOf(this);if(0<=a&&Yn.splice(a,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}s.isBeingOpened||(s.dbReadyPromise=new ee(function(u){s.dbReadyResolve=u}),s.openCanceller=new ee(function(u,d){s.cancelOpen=d}))},lt.prototype.close=function(u){var a=(u===void 0?{disableAutoOpen:!0}:u).disableAutoOpen,u=this._state;a?(u.isBeingOpened&&u.cancelOpen(new ie.DatabaseClosed),this._close(),u.autoOpen=!1,u.dbOpenError=new ie.DatabaseClosed):(this._close(),u.autoOpen=this._options.autoOpen||u.isBeingOpened,u.openComplete=!1,u.dbOpenError=null)},lt.prototype.delete=function(s){var a=this;s===void 0&&(s={disableAutoOpen:!0});var u=0<arguments.length&&typeof arguments[0]!="object",d=this._state;return new ee(function(f,p){function y(){a.close(s);var $=a._deps.indexedDB.deleteDatabase(a.name);$.onsuccess=qe(function(){var S,T,D;S=a._deps,T=a.name,D=S.indexedDB,S=S.IDBKeyRange,Zi(D)||T===qr||Ji(D,S).delete(T).catch(fe),f()}),$.onerror=on(p),$.onblocked=a._fireOnBlocked}if(u)throw new ie.InvalidArgument("Invalid closeOptions argument to db.delete()");d.isBeingOpened?d.dbReadyPromise.then(y):y()})},lt.prototype.backendDB=function(){return this.idbdb},lt.prototype.isOpen=function(){return this.idbdb!==null},lt.prototype.hasBeenClosed=function(){var s=this._state.dbOpenError;return s&&s.name==="DatabaseClosed"},lt.prototype.hasFailed=function(){return this._state.dbOpenError!==null},lt.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(lt.prototype,"tables",{get:function(){var s=this;return l(this._allTables).map(function(a){return s._allTables[a]})},enumerable:!1,configurable:!0}),lt.prototype.transaction=function(){var s=function(a,u,d){var f=arguments.length;if(f<2)throw new ie.InvalidArgument("Too few arguments");for(var p=new Array(f-1);--f;)p[f-1]=arguments[f];return d=p.pop(),[a,ke(p),d]}.apply(this,arguments);return this._transaction.apply(this,s)},lt.prototype._transaction=function(s,a,u){var d=this,f=Z.trans;f&&f.db===this&&s.indexOf("!")===-1||(f=null);var p,y,$=s.indexOf("?")!==-1;s=s.replace("!","").replace("?","");try{if(y=a.map(function(T){if(T=T instanceof d.Table?T.name:T,typeof T!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return T}),s=="r"||s===Bi)p=Bi;else{if(s!="rw"&&s!=Ni)throw new ie.InvalidArgument("Invalid transaction mode: "+s);p=Ni}if(f){if(f.mode===Bi&&p===Ni){if(!$)throw new ie.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");f=null}f&&y.forEach(function(T){if(f&&f.storeNames.indexOf(T)===-1){if(!$)throw new ie.SubTransaction("Table "+T+" not included in parent transaction.");f=null}}),$&&f&&!f.active&&(f=null)}}catch(T){return f?f._promise(null,function(D,k){k(T)}):at(T)}var S=function T(D,k,j,_,I){return ee.resolve().then(function(){var O=Z.transless||Z,A=D._createTransaction(k,j,D._dbSchema,_);if(A.explicit=!0,O={trans:A,transless:O},_)A.idbtrans=_.idbtrans;else try{A.create(),A.idbtrans._explicit=!0,D._state.PR1398_maxLoop=3}catch(B){return B.name===Qe.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return T(D,k,j,null,I)})):at(B)}var z,M=ct(I);return M&&Gn(),O=ee.follow(function(){var B;(z=I.call(A,A))&&(M?(B=$n.bind(null,null),z.then(B,B)):typeof z.next=="function"&&typeof z.throw=="function"&&(z=os(z)))},O),(z&&typeof z.then=="function"?ee.resolve(z).then(function(B){return A.active?B:at(new ie.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):O.then(function(){return z})).then(function(B){return _&&A._resolve(),A._completion.then(function(){return B})}).catch(function(B){return A._reject(B),at(B)})})}.bind(null,this,p,y,f,u);return f?f._promise(p,S,"lock"):Z.trans?Dn(Z.transless,function(){return d._whenReady(S)}):this._whenReady(S)},lt.prototype.table=function(s){if(!w(this._allTables,s))throw new ie.InvalidTable("Table ".concat(s," does not exist"));return this._allTables[s]},lt);function lt(s,a){var u=this;this._middlewares={},this.verno=0;var d=lt.dependencies;this._options=a=i({addons:lt.addons,autoOpen:!0,indexedDB:d.indexedDB,IDBKeyRange:d.IDBKeyRange,cache:"cloned"},a),this._deps={indexedDB:a.indexedDB,IDBKeyRange:a.IDBKeyRange},d=a.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var f,p,y,$,S,T={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:fe,dbReadyPromise:null,cancelOpen:fe,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:a.autoOpen};T.dbReadyPromise=new ee(function(k){T.dbReadyResolve=k}),T.openCanceller=new ee(function(k,j){T.cancelOpen=j}),this._state=T,this.name=s,this.on=dr(this,"populate","blocked","versionchange","close",{ready:[At,fe]}),this.on.ready.subscribe=be(this.on.ready.subscribe,function(k){return function(j,_){lt.vip(function(){var I,O=u._state;O.openComplete?(O.dbOpenError||ee.resolve().then(j),_&&k(j)):O.onReadyBeingFired?(O.onReadyBeingFired.push(j),_&&k(j)):(k(j),I=u,_||k(function A(){I.on.ready.unsubscribe(j),I.on.ready.unsubscribe(A)}))})}}),this.Collection=(f=this,hr(Zl.prototype,function(z,A){this.db=f;var _=oo,I=null;if(A)try{_=A()}catch(M){I=M}var O=z._ctx,A=O.table,z=A.hook.reading.fire;this._ctx={table:A,index:O.index,isPrimKey:!O.index||A.schema.primKey.keyPath&&O.index===A.schema.primKey.name,range:_,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:I,or:O.or,valueMapper:z!==Ce?z:null}})),this.Table=(p=this,hr(uo.prototype,function(k,j,_){this.db=p,this._tx=_,this.name=k,this.schema=j,this.hook=p._allTables[k]?p._allTables[k].hook:dr(null,{creating:[Ze,fe],reading:[Tt,Ce],updating:[Yt,fe],deleting:[wn,fe]})})),this.Transaction=(y=this,hr(nc.prototype,function(k,j,_,I,O){var A=this;this.db=y,this.mode=k,this.storeNames=j,this.schema=_,this.chromeTransactionDurability=I,this.idbtrans=null,this.on=dr(this,"complete","error","abort"),this.parent=O||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new ee(function(z,M){A._resolve=z,A._reject=M}),this._completion.then(function(){A.active=!1,A.on.complete.fire()},function(z){var M=A.active;return A.active=!1,A.on.error.fire(z),A.parent?A.parent._reject(z):M&&A.idbtrans&&A.idbtrans.abort(),at(z)})})),this.Version=($=this,hr(cc.prototype,function(k){this.db=$,this._cfg={version:k,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(S=this,hr(go.prototype,function(k,j,_){if(this.db=S,this._ctx={table:k,index:j===":id"?null:j,or:_},this._cmp=this._ascending=Pe,this._descending=function(I,O){return Pe(O,I)},this._max=function(I,O){return 0<Pe(I,O)?I:O},this._min=function(I,O){return Pe(I,O)<0?I:O},this._IDBKeyRange=S._deps.IDBKeyRange,!this._IDBKeyRange)throw new ie.MissingAPI})),this.on("versionchange",function(k){0<k.newVersion?console.warn("Another connection wants to upgrade database '".concat(u.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(u.name,"'. Closing db now to resume the delete request.")),u.close({disableAutoOpen:!1})}),this.on("blocked",function(k){!k.newVersion||k.newVersion<k.oldVersion?console.warn("Dexie.delete('".concat(u.name,"') was blocked")):console.warn("Upgrade '".concat(u.name,"' blocked by other connection holding version ").concat(k.oldVersion/10))}),this._maxKey=gr(a.IDBKeyRange),this._createTransaction=function(k,j,_,I){return new u.Transaction(k,j,_,u._options.chromeTransactionDurability,I)},this._fireOnBlocked=function(k){u.on("blocked").fire(k),Yn.filter(function(j){return j.name===u.name&&j!==u&&!j._state.vcFired}).map(function(j){return j.on("versionchange").fire(k)})},this.use(fc),this.use(bc),this.use(pc),this.use(dc),this.use(hc);var D=new Proxy(this,{get:function(k,j,_){if(j==="_vip")return!0;if(j==="table")return function(O){return ii(u.table(O),D)};var I=Reflect.get(k,j,_);return I instanceof uo?ii(I,D):j==="tables"?I.map(function(O){return ii(O,D)}):j==="_createTransaction"?function(){return ii(I.apply(this,arguments),D)}:I}});this.vip=D,d.forEach(function(k){return k(u)})}var si,Mt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",yc=(us.prototype.subscribe=function(s,a,u){return this._subscribe(s&&typeof s!="function"?s:{next:s,error:a,complete:u})},us.prototype[Mt]=function(){return this},us);function us(s){this._subscribe=s}try{si={indexedDB:o.indexedDB||o.mozIndexedDB||o.webkitIndexedDB||o.msIndexedDB,IDBKeyRange:o.IDBKeyRange||o.webkitIDBKeyRange}}catch{si={indexedDB:null,IDBKeyRange:null}}function Io(s){var a,u=!1,d=new yc(function(f){var p=ct(s),y,$=!1,S={},T={},D={get closed(){return $},unsubscribe:function(){$||($=!0,y&&y.abort(),k&&En.storagemutated.unsubscribe(_))}};f.start&&f.start(D);var k=!1,j=function(){return Mi(I)},_=function(O){ti(S,O),ns(T,S)&&j()},I=function(){var O,A,z;!$&&si.indexedDB&&(S={},O={},y&&y.abort(),y=new AbortController,z=(function(M){var B=Le();try{p&&Gn();var H=xn(s,M);return H=p?H.finally($n):H}finally{B&&Ve()}})(A={subscr:O,signal:y.signal,requery:j,querier:s,trans:null}),Promise.resolve(z).then(function(M){u=!0,a=M,$||A.signal.aborted||(S={},(function(B){for(var H in B)if(w(B,H))return;return 1})(T=O)||k||(En(mr,_),k=!0),Mi(function(){return!$&&f.next&&f.next(M)}))},function(M){u=!1,["DatabaseClosedError","AbortError"].includes(M?.name)||$||Mi(function(){$||f.error&&f.error(M)})}))};return setTimeout(j,0),D});return d.hasValue=function(){return u},d.getValue=function(){return a},d}var Fn=pn;function ds(s){var a=Sn;try{Sn=!0,En.storagemutated.fire(s),ss(s,!0)}finally{Sn=a}}P(Fn,i(i({},Be),{delete:function(s){return new Fn(s,{addons:[]}).delete()},exists:function(s){return new Fn(s,{addons:[]}).open().then(function(a){return a.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(s){try{return a=Fn.dependencies,u=a.indexedDB,a=a.IDBKeyRange,(Zi(u)?Promise.resolve(u.databases()).then(function(d){return d.map(function(f){return f.name}).filter(function(f){return f!==qr})}):Ji(u,a).toCollection().primaryKeys()).then(s)}catch{return at(new ie.MissingAPI)}var a,u},defineClass:function(){return function(s){h(this,s)}},ignoreTransaction:function(s){return Z.trans?Dn(Z.transless,s):s()},vip:es,async:function(s){return function(){try{var a=os(s.apply(this,arguments));return a&&typeof a.then=="function"?a:ee.resolve(a)}catch(u){return at(u)}}},spawn:function(s,a,u){try{var d=os(s.apply(u,a||[]));return d&&typeof d.then=="function"?d:ee.resolve(d)}catch(f){return at(f)}},currentTransaction:{get:function(){return Z.trans||null}},waitFor:function(s,a){return a=ee.resolve(typeof s=="function"?Fn.ignoreTransaction(s):s).timeout(a||6e4),Z.trans?Z.trans.waitFor(a):a},Promise:ee,debug:{get:function(){return Fe},set:function(s){We(s)}},derive:N,extend:h,props:P,override:be,Events:dr,on:En,liveQuery:Io,extendObservabilitySet:ti,getByKeyPath:oe,setByKeyPath:ye,delByKeyPath:function(s,a){typeof a=="string"?ye(s,a,void 0):"length"in a&&[].map.call(a,function(u){ye(s,u,void 0)})},shallowClone:$e,deepClone:E,getObjectDiff:as,cmp:Pe,asap:q,minKey:-1/0,addons:[],connections:Yn,errnames:Qe,dependencies:si,cache:jn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(s){return parseInt(s)}).reduce(function(s,a,u){return s+a/Math.pow(10,2*u)})})),Fn.maxKey=gr(Fn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(En(mr,function(s){Sn||(s=new CustomEvent(Wi,{detail:s}),Sn=!0,dispatchEvent(s),Sn=!1)}),addEventListener(Wi,function(s){s=s.detail,Sn||ds(s)}));var Jn,Sn=!1,Do=function(){};return typeof BroadcastChannel<"u"&&((Do=function(){(Jn=new BroadcastChannel(Wi)).onmessage=function(s){return s.data&&ds(s.data)}})(),typeof Jn.unref=="function"&&Jn.unref(),En(mr,function(s){Sn||Jn.postMessage(s)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(s){if(!pn.disableBfCache&&s.persisted){Fe&&console.debug("Dexie: handling persisted pagehide"),Jn?.close();for(var a=0,u=Yn;a<u.length;a++)u[a].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(s){!pn.disableBfCache&&s.persisted&&(Fe&&console.debug("Dexie: handling persisted pageshow"),Do(),ds({all:new yt(-1/0,[[]])}))})),ee.rejectionMapper=function(s,a){return!s||s instanceof He||s instanceof TypeError||s instanceof SyntaxError||!s.name||!Je[s.name]?s:(a=new Je[s.name](a||s.message,s),"stack"in s&&L(a,"stack",{get:function(){return this.inner.stack}}),a)},We(Fe),i(pn,Object.freeze({__proto__:null,Dexie:pn,liveQuery:Io,Entity:ao,cmp:Pe,PropModSymbol:fn,PropModification:fr,replacePrefix:function(s,a){return new fr({replacePrefix:[s,a]})},add:function(s){return new fr({add:s})},remove:function(s){return new fr({remove:s})},default:pn,RangeSet:yt,mergeRanges:wr,rangesOverlap:xo}),{default:pn}),pn})})(fi)),fi.exports}var Jc=Qc();const $s=Yc(Jc),Ko=Symbol.for("Dexie"),yi=globalThis[Ko]||(globalThis[Ko]=$s);if($s.semVer!==yi.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${$s.semVer} and ${yi.semVer}`);const{liveQuery:Va,mergeRanges:jm,rangesOverlap:Fm,RangeSet:zm,cmp:Lm,Entity:Mm,PropModSymbol:Bm,PropModification:Nm,replacePrefix:Um,add:qm,remove:Hm}=yi,Zc="easydb";let ai=null;function eu(){if(ai)return ai;const e=new yi(Zc);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>tu()),ai={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},ai}function tu(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function Zn(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const r=Object.entries(t);return e.filter(i=>Ga(i,r)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,r){if(await e.update(t,r)===0)throw new Error(`patch: no doc with id=${t}`);const n=await e.get(t);if(!n)throw new Error(`patch: doc id=${t} vanished after update`);return n},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const i=Va(()=>e.toArray()).subscribe({next:n=>t(n)});return()=>i.unsubscribe()}}}function nu(e,t){return{async find(r){const i=e.where("tableId").equals(t);if(!r||Object.keys(r).length===0)return i.toArray();const n=Object.entries(r);return i.filter(o=>Ga(o,n)).toArray()},async findOne(r){const i=await e.get(r);return i&&i.tableId===t?i:null},async insert(r){const i={...r,tableId:t};return await e.add(i),i},async bulkInsert(r){if(r.length===0)return[];const i=r.map(n=>({...n,tableId:t}));return await e.bulkAdd(i),i},async upsert(r){const i={...r,tableId:t};return await e.put(i),i},async patch(r,i){if(await e.update(r,i)===0)throw new Error(`row patch: no row ${r}`);const o=await e.get(r);if(!o)throw new Error(`row patch: row ${r} vanished after update`);return o},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},subscribe(r){const n=Va(()=>e.where("tableId").equals(t).toArray()).subscribe({next:o=>r(o)});return()=>n.unsubscribe()}}}function Ga(e,t){for(const[r,i]of t)if(e[r]!==i)return!1;return!0}function ru(e){return{workspaces:Zn(e.workspaces),tables:Zn(e.tables),settings:Zn(e.settings),plugins:Zn(e.plugins),viewTemplates:Zn(e.viewTemplates),viewInstances:Zn(e.viewInstances),rows:t=>nu(e.rows,t)}}function iu(e){const{base:t,providers:r,tableById:i,ctx:n}=e,o=new Map;return{...t,rows(l){const c=i(l),h=c?.source;if(h){const g=r.get(h.type);if(g){const x=JSON.stringify(h),w=o.get(l);if(w&&w.key===x)return w.coll;const P=g.create(c,n);return o.set(l,{key:x,coll:P}),P}}return o.delete(l),t.rows(l)}}}function su(){const e=new Map;return{on(t,r){let i=e.get(t);return i||(i=new Set,e.set(t,i)),i.add(r),()=>{i.delete(r)}},emit(t,r){const i=e.get(t);if(i)for(const n of i)try{n(r)}catch(o){console.error(`[event:${String(t)}] listener threw`,o)}}}}const Wt=Ye`
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
`;function Kt(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const r=t.querySelector("form");r&&(e.preventDefault(),r.requestSubmit())}const Vo=new WeakSet;function Vt(e,t){if(Vo.has(t))return;Vo.add(t);let r=0,i=0,n=0,o=0,l=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",h=>{if(h.target.closest("button, input, textarea, select, a, label"))return;l=!0,r=h.clientX,i=h.clientY;const x=e.getBoundingClientRect();n=x.left,o=x.top,t.setPointerCapture(h.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",h=>{if(!l)return;const g=h.clientX-r,x=h.clientY-i,w=-e.offsetWidth+80,P=window.innerWidth-80,W=0,L=window.innerHeight-40,N=Math.max(w,Math.min(P,n+g)),U=Math.max(W,Math.min(L,o+x));e.style.position="fixed",e.style.left=`${N}px`,e.style.top=`${U}px`,e.style.margin="0"});const c=h=>{if(l){l=!1;try{t.releasePointerCapture(h.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c)}var ou=Object.defineProperty,au=Object.getOwnPropertyDescriptor,Ya=(e,t,r,i)=>{for(var n=i>1?void 0:i?au(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&ou(t,r,n),n};let Bt=class extends Ne{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),Bt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Bt.instance===this&&(Bt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&Vt(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:t,message:e,resolve:r}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",r="Input"){return this.enqueue(i=>{this.current={kind:"prompt",title:r,message:e,value:t,resolve:i}})}choice(e,t,r="Choose"){return this.enqueue(i=>{this.current={kind:"choice",title:r,message:e,options:t,resolve:i}})}enqueue(e){return new Promise(t=>{const r=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const r=this.queue.shift();r&&r()}))}render(){const e=this.current;return R`
      <dialog @cancel=${this.onCancel} @keydown=${Kt}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):me}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return R`
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
        `;case"prompt":return R`
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
        `;case"choice":return R`
          <div class="dialog-header">
            <h2>${e.title}</h2>
            <div class="header-actions">
              <button class="ghost" @click=${()=>this.closeAndResolve(null)}>Cancel</button>
            </div>
          </div>
          <div class="dialog-body">
            ${e.message?R`<p class="message">${e.message}</p>`:me}
            <div class="choices">
              ${e.options.map(t=>R`<button class="choice" @click=${()=>this.closeAndResolve(t)}>
                    ${t}
                  </button>`)}
            </div>
          </div>
        `}}};Bt.instance=null;Bt.styles=[Wt,Ye`
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
    `];Ya([K()],Bt.prototype,"current",2);Bt=Ya([nt("host-dialogs")],Bt);const Zt=Ye`
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
`;var lu=Object.defineProperty,cu=Object.getOwnPropertyDescriptor,Xa=(e,t,r,i)=>{for(var n=i>1?void 0:i?cu(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&lu(t,r,n),n};let mn=class extends Ne{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),mn.instance=this}disconnectedCallback(){super.disconnectedCallback(),mn.instance===this&&(mn.instance=null)}show(e,t){const r={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,r];const i=t?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),i)}dismiss(e){const t=this.toasts.find(r=>r.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(r=>r.id!==e)}render(){return R`
      ${this.toasts.map(e=>R`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${du(e.kind)}</span>
            <span class="body">
              ${e.title?R`<strong>${e.title}</strong>`:""}${uu(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};mn.instance=null;mn.styles=[Zt,Ye`
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
    `];Xa([K()],mn.prototype,"toasts",2);mn=Xa([nt("toast-host")],mn);function uu(e){const t=/(https?:\/\/[^\s)]+)/g,r=[];let i=0,n;for(;(n=t.exec(e))!==null;)n.index>i&&r.push(e.slice(i,n.index)),r.push({url:n[0]}),i=n.index+n[0].length;return i<e.length&&r.push(e.slice(i)),r.length===0?e:r.map(o=>typeof o=="string"?o:R`<a href=${o.url} target="_blank" rel="noopener noreferrer">${o.url}</a>`)}function du(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function hu(){return{headerButtons:[],footerButtons:[],tableButtons:[],importers:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map,settings:new Map}}function Mn(e,t){return e.push(t),()=>{const r=e.indexOf(t);r>=0&&e.splice(r,1)}}function ps(e,t,r){return e.set(t,r),()=>{e.get(t)===r&&e.delete(t)}}function fu(e){return{registerHeaderButton:t=>Mn(e.headerButtons,t),registerFooterButton:t=>Mn(e.footerButtons,t),registerTableButton:t=>Mn(e.tableButtons,t),registerImporter:t=>Mn(e.importers,t),registerExporter:t=>Mn(e.exporters,t),registerUrlSource:t=>Mn(e.urlSources,t),registerDropHandler:t=>Mn(e.dropHandlers,t),registerCellRenderer:(t,r)=>ps(e.cellRenderers,t,r),registerRowRenderer:(t,r)=>ps(e.rowRenderers,t,r),registerTableRenderer:(t,r)=>ps(e.tableRenderers,t,r),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},openSettings:()=>{document.dispatchEvent(new CustomEvent("easydb:open-settings"))},registerSettings:(t,r,i)=>(e.settings.set(t,{name:r,fields:i}),()=>{e.settings.get(t)?.name===r&&e.settings.delete(t)}),dialogs:pu}}const pu={async alert(e,t){const r=Bt.instance;if(r)return r.alert(e,t);window.alert(e)},async confirm(e,t){const r=Bt.instance;return r?r.confirm(e,t):window.confirm(e)},async prompt(e,t,r){const i=Bt.instance;return i?i.prompt(e,t,r):window.prompt(e,t)??null},async choice(e,t,r){const i=Bt.instance;if(i)return i.choice(e,t,r);const n=window.prompt(`${e}

Options: ${t.join(", ")}`);return n&&t.includes(n)?n:null},toast(e,t){const r=mn.instance;r?r.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}},Us="/easydbaccess/settings.json",Qa="/easydbaccess/secrets.txt";function Pr(e){try{return globalThis.localStorage??null}catch{return null}}function Ti(e){const t=Pr();if(!t)return{};const r=t.getItem(Us);if(!r)return{};try{const i=JSON.parse(r);return i&&typeof i=="object"?i:{}}catch{return{}}}function qs(e,t){return Ti()[e]}function mu(e,t,r){const i=Pr();if(!i)return;const n=Ti();n[e]=t,i.setItem(Us,JSON.stringify(n))}function gu(e,t){const r=Pr();if(!r)return;const i=Ti();e in i&&(delete i[e],r.setItem(Us,JSON.stringify(i)))}function ks(e,t){return e in Ti()}function Ai(e){return Pr()?.getItem(Qa)??""}function Ja(e,t){Pr()?.setItem(Qa,e)}function Pi(e){const t={};for(const r of e.split(/\r?\n/)){const i=r.trim();if(!i||i.startsWith("#"))continue;const n=i.indexOf(":");if(n<0)continue;const o=i.slice(0,n).trim(),l=i.slice(n+1).trim();o&&(t[o]=l)}return t}function Za(e,t){return e.replace(/\$\{secret:([^}]+)\}/g,(r,i)=>{const n=t[i.trim()];return n===void 0?r:n})}function bu(e){const t=fu(e.registries),r=e.registries.rowSources,i=l=>(r.set(l.type,l),()=>{r.get(l.type)===l&&r.delete(l.type)}),n=wu(e.store,e.registries),o={open(l){return console.warn("[host] windows.open is stubbed until Phase 5",l.id),{id:l.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:o,registerRowSource:i,settings:n,backend:{fetch:async(l,c)=>{const h=await yu(e.store),g=c?.body instanceof ArrayBuffer;if(!h||g)return globalThis.fetch(l,c);const x={url:l};return c?.method&&(x.method=c.method),c?.headers&&(x.headers=c.headers),typeof c?.body=="string"&&(x.body=c.body),globalThis.fetch(`${h}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)})},async saveFile(l,c,h){const g=typeof c=="string"?new Blob([c],{type:h??"application/octet-stream"}):c,x=URL.createObjectURL(g),w=document.createElement("a");w.href=x,w.download=l,w.rel="noopener",document.body.appendChild(w),w.click(),w.remove(),setTimeout(()=>URL.revokeObjectURL(x),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function yu(e){const t="server-sync:url";let r=ks(t)?qs(t):void 0;return r===void 0&&(r=(await e.settings.findOne(t))?.value),typeof r!="string"||r.length===0?null:Za(r,Pi(Ai())).replace(/\/+$/,"")}function wu(e,t){const r=(o,l)=>`${o}:${l}`,i=(o,l)=>t.settings.get(o)?.fields.find(c=>c.key===l),n=o=>typeof o=="string"?Za(o,Pi(Ai())):o;return{async get(o,l){const c=r(o,l);let h;if(ks(c))h=qs(c);else{const g=await e.settings.findOne(c);h=g?g.value:i(o,l)?.default}return n(h)},async set(o,l,c,h){const g=r(o,l);(h??i(o,l)?.scope??"workspace")==="user"?(mu(g,c),await e.settings.remove(g).catch(()=>{})):(await e.settings.upsert({key:g,value:c}),gu(g))},async placement(o,l){const c=r(o,l);return ks(c)?"user":await e.settings.findOne(c)?"workspace":null}}}const vu={id:"csv-import",name:"CSV Import",type:"importer",version:"0.1.0",description:"Drag-and-drop CSV files to create typed tables.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-import.ts"};function xu(e){e.ui.registerImporter($u),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const i=Ou(t).filter(ju);if(i.length===0)return!1;t.preventDefault();for(const n of i)await ku(e,n);return!0})}const $u={id:"csv",label:"CSV",accept:[".csv","text/csv"],async parse(e){const t=typeof e=="string"?e:await e.text();return Ir(t)}};async function ku(e,t){const r=t.name.replace(/\.csv$/i,"")||"imported";await wi(e,await t.text(),r)}async function wi(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("csv-import: no active workspace");const o=(r||"imported").replace(/\.csv$/i,"")||"imported",l=(await e.store.tables.find()).find(w=>w.workspaceId===n&&w.name===o);let c,h;if(l){const w=await e.ui.dialogs.choice(`A table named "${o}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!w)return;w==="Append rows"?(h="append",c=l.id):w==="Overwrite rows"?(h="overwrite",c=l.id):(h="new",c=li())}else h="new",c=li();e.events.emit("import:before",{source:"csv",tableId:c});let g;if(h==="new"){const w=Ir(t,{maxRows:i.maxRows});let P=w.columns,W=w.rows;if(i.editColumns){const N=await i.editColumns(P);if(N===null)return;W=Fu(W,P,N),P=N}i.maxRows!=null&&(W=W.slice(0,i.maxRows));const L=l?`${o} (${Date.now().toString(36)})`:o;await e.store.tables.insert({id:c,workspaceId:n,name:L,code:Cs(L),columns:P,view:"table",...i.origin?{origin:i.origin}:{},updatedAt:Date.now()}),g=W.map(N=>({id:li(),tableId:c,data:N,updatedAt:Date.now()}))}else{const w=l.columns,P=el(t,{maxRows:i.maxRows});if(g=(i.maxRows!=null?P.rows.slice(0,i.maxRows):P.rows).map(L=>{const N={};for(let U=0;U<w.length;U++){const re=w[U];N[re.field]=sl(L[U]??"",re.type)}return{id:li(),tableId:c,data:N,updatedAt:Date.now()}}),h==="overwrite"){const L=e.store.rows(c),N=await L.find();await L.bulkRemove(N.map(U=>U.id))}}await e.store.rows(c).bulkInsert(g),e.events.emit("import:after",{source:"csv",tableId:c,rowCount:g.length})}function el(e,t={}){const r=e.replace(/﻿/,""),i=rl(r),n=il(r,i,tl(t.maxRows));if(n.length===0)return{header:[],rows:[]};const o=n[0],l=n.slice(1).filter(c=>!(c.length===1&&c[0]===""));return{header:o,rows:l}}function tl(e){return e!=null?e+1:void 0}async function nl(e,t){const i=new TextDecoder,n=t+1;let o="",l=0,c=!1,h=0;for(;h<e.size;){const g=new Uint8Array(await e.slice(h,h+1048576).arrayBuffer());h+=1048576;const x=i.decode(g,{stream:!0});for(let w=0;w<x.length;w++){const P=x[w];if(P==='"')c=!c;else if(P===`
`&&!c&&(l+=1,l>=n))return o+x.slice(0,w+1)}o+=x}return o}function Ir(e,t={}){const r=e.replace(/﻿/,""),i=rl(r),n=il(r,i,tl(t.maxRows));if(n.length===0)return{columns:[],rows:[]};const o=n[0],l=n.slice(1).filter(W=>!(W.length===1&&W[0]==="")),c=o.map((W,L)=>Su(W,L)),h=al(c.map(W=>W.field)),g=l.map(W=>{const L={};for(let N=0;N<h.length;N++)L[h[N]]=W[N]??"";return L}),x=c.map((W,L)=>W.type?W.type:_u(g.map(N=>N[h[L]]??"").filter(N=>N.length>0))),w=c.map((W,L)=>{const N=x[L]??"string",U={field:h[L],label:W.label,type:N},re=Eu(N),ce=W.renderer??re;return ce&&(U.renderer=ce),W.default!==void 0&&(U.default=W.default),W.max!=null&&(U.max=W.max),W.unique&&(U.unique=!0),W.notnull&&(U.notnull=!0),W.hidden&&(U.hidden=!0),U}),P=g.map(W=>{const L={};for(let N=0;N<h.length;N++){const U=h[N],re=x[N]??"string";L[U]=sl(W[U]??"",re)}return L});return{columns:w,rows:P}}const Cu=new Set(["string","number","boolean","date","datetime"]),Go={color:"color",image:"image"};function Eu(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function Su(e,t){const r=e.trim();if(!r.includes(":"))return{field:Cs(r||`col_${t+1}`),label:r||`Column ${t+1}`};const i=r.split(":"),n=Cs(i[0]||`col_${t+1}`),o=(i[1]??i[0]??"").trim()||n,l={field:n,label:o},c=(i[2]??"").trim();c&&(Cu.has(c)?l.type=c:Go[c]&&(l.type="string",l.renderer=Go[c]));const h=(i[3]??"").trim();h&&(l.default=h);const g=(i[4]??"").trim();if(g){const w=Number(g);Number.isFinite(w)&&w>0&&(l.max=w)}const x=(i[5]??"").toLowerCase();return x.includes("u")&&(l.unique=!0),x.includes("n")&&(l.notnull=!0),x.includes("h")&&(l.hidden=!0),l}function rl(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),r={",":0,";":0,"	":0};for(const o of t)o in r&&(r[o]+=1);let i=",",n=-1;for(const o of[",",";","	"])(r[o]??0)>n&&(i=o,n=r[o]??0);return i}function il(e,t,r){const i=[];let n=[],o="",l=!1;for(let c=0;c<e.length;c++){const h=e[c];if(l)h==='"'?e[c+1]==='"'?(o+='"',c++):l=!1:o+=h;else if(h==='"')l=!0;else if(h===t)n.push(o),o="";else if(h===`
`||h==="\r"){if(h==="\r"&&e[c+1]===`
`&&c++,n.push(o),i.push(n),n=[],o="",r!=null&&i.length>=r)return i}else o+=h}return(o.length>0||n.length>0)&&(n.push(o),i.push(n)),i}function _u(e){return e.length===0?"string":e.every(Au)?"boolean":e.every(Pu)?"number":e.every(Du)?"datetime":e.every(Iu)?"date":"string"}const Tu=/^(true|false|yes|no|0|1)$/i;function Au(e){return Tu.test(e.trim())}function Pu(e){const t=e.trim();if(t==="")return!1;const r=Number(t);return Number.isFinite(r)}function Iu(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function Du(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function sl(e,t){const r=e.trim();switch(t){case"number":{if(r==="")return null;const i=Number(r);return Number.isFinite(i)?i:r}case"boolean":return r===""?null:/^(true|yes|1)$/i.test(r);case"date":return ol(r);case"datetime":return Ru(r);default:return e}}function ol(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){let i=parseInt(t[1],10),n=parseInt(t[2],10);const o=t[3];let l=parseInt(o,10);o.length===2&&(l+=2e3);let c,h;return i>12?(c=i,h=n):n>12?(h=i,c=n):(c=i,h=n),`${l.toString().padStart(4,"0")}-${h.toString().padStart(2,"0")}-${c.toString().padStart(2,"0")}`}const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toISOString().slice(0,10)}function Ru(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),r=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(r)return`${r[1]}T${r[2].padStart(5,"0")}`;const i=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(i)return`${ol(`${i[1]}/${i[2]}/${i[3]}`)}T${i[4].padStart(5,"0")}`;const n=new Date(e);if(!Number.isNaN(n.getTime())){const o=n.toISOString();return`${o.slice(0,10)}T${o.slice(11,16)}`}return e}function Ou(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function ju(e){return!!(/\.csv$/i.test(e.name)||e.type==="text/csv"||e.type==="application/csv")}function al(e){const t=new Map,r=new Set,i=[];for(const n of e){let o=n,l=t.get(n)??0;for(;r.has(o);)l+=1,o=`${n}_${l+1}`;t.set(n,l),r.add(o),i.push(o)}return i}function Fu(e,t,r){return e.map(i=>{const n={};for(let o=0;o<t.length;o++)n[r[o].field]=i[t[o].field];return n})}function Cs(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function li(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const zu=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:al,importCsvText:wi,init:xu,meta:vu,parseCsv:Ir,parseCsvRaw:el,readCsvHead:nl},Symbol.toStringTag,{value:"Module"})),Lu={id:"csv-export",name:"CSV Export",type:"exporter",version:"0.1.0",description:"Export a single table as a .csv file via a per-table button.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-export.ts"},Mu={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return Hs(e,t)}};function Bu(e){e.ui.registerExporter(Mu),e.ui.registerTableButton({id:"csv-export:download",label:"CSV",icon:"file_download",tooltip:"Download this table as a .csv file",onClick:async(t,r)=>{const i=await t.store.tables.findOne(r.tableId);if(!i)return;const n=await t.store.rows(i.id).find(),o=Hs(i,n);await t.backend.saveFile(`${i.code||i.name||"table"}.csv`,o,"text/csv")}})}function Hs(e,t){const r=e.columns.map(o=>o.field),i=e.columns.map(o=>Yo(o.label??o.field)),n=t.map(o=>r.map(l=>Yo(Nu(o.data[l]))).join(","));return[i.join(","),...n].join(`\r
`)}function Nu(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function Yo(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const Uu=Object.freeze(Object.defineProperty({__proto__:null,init:Bu,meta:Lu,serializeCsv:Hs},Symbol.toStringTag,{value:"Module"}));var qu=Object.defineProperty,Hu=Object.getOwnPropertyDescriptor,ar=(e,t,r,i)=>{for(var n=i>1?void 0:i?Hu(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&qu(t,r,n),n};function Es(e,t={}){return(Ot.instance??Wu()).open(e,t)}function Wu(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function Ku(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let Ot=class extends Ne{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((r,i)=>r?i:-1).filter(r=>r>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),Ot.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ot.instance===this&&(Ot.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Vt(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(r=>!r.hidden),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(r=>{this.resolveFn=r,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return R`
      <dialog @cancel=${this.onCancel} @keydown=${Kt}>
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
            ${this.message?R`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            <ul class="tables">
              ${this.items.map((t,r)=>R`
                  <li>
                    <input
                      type="checkbox"
                      id=${`tsel-${r}`}
                      .checked=${this.selected[r]??!1}
                      @change=${()=>this.toggle(r)}
                    />
                    <label for=${`tsel-${r}`}>
                      <span class="name">${t.name}</span>
                      ${t.hidden?R`<span class="tag-hidden">hidden</span>`:""}
                      <span class="size">${Ku(t.size)}</span>
                      ${t.detail?R`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};Ot.instance=null;Ot.styles=[Wt,Ye`
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
    `];ar([K()],Ot.prototype,"items",2);ar([K()],Ot.prototype,"selected",2);ar([K()],Ot.prototype,"heading",2);ar([K()],Ot.prototype,"message",2);ar([K()],Ot.prototype,"confirmLabel",2);Ot=ar([nt("table-select-dialog")],Ot);const Vu={id:"json-import",name:"JSON Import",type:"importer",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"/><path d="M16 3a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/json-import.ts"};function Gu(e){e.ui.registerImporter(Yu),e.ui.registerDropHandler(async t=>{const i=nd(t).filter(rd);if(i.length===0)return!1;t.preventDefault();for(const n of i)await Xu(e,n);return!0})}const Yu={id:"json",label:"JSON",accept:[".json",".db.json","application/json"],async parse(e){const t=typeof e=="string"?e:await e.text(),r=JSON.parse(t),n=Dr(r,"imported")[0];return{columns:n?.columns??[],rows:n?.rows??[]}}};async function Xu(e,t){await vi(e,await t.text(),t.name)}async function vi(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("json-import: no active workspace");let o;try{o=JSON.parse(t)}catch(U){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${r}: ${U.message}`)});return}const l=r.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",c=Dr(o,l);if(c.length===0)return;let h=c;if(c.length>1){const U=await Es(c.map(re=>({name:re.name,size:re.rows.length})),{title:"Import tables",message:`"${r}" contains ${c.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!U)return;h=U.map(re=>c[re])}const g=(await e.store.tables.find()).filter(U=>U.workspaceId===n),x=new Set(h.map(U=>U.name)),w=g.filter(U=>x.has(U.name));let P;if(w.length===0&&h.length===1)P="append-new";else{const U=w.length>0?[`Overwrite matching (${w.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],re=await e.ui.dialogs.choice(`Importing ${h.length} table${h.length===1?"":"s"} from "${r}".${w.length>0?`

${w.length} table${w.length===1?"":"s"} share a name with existing data.`:""}`,U,"JSON import");if(!re)return;re.startsWith("Overwrite matching")?P="overwrite-matching":re==="Replace entire workspace"?P="replace-workspace":P="append-new"}const W=2e3,L=h.reduce((U,re)=>U+(re.source?0:Math.min(re.rows.length,i.maxRows??1/0)),0);let N=null;if(L>=W){const{TopProgress:U}=await Tn(async()=>{const{TopProgress:re}=await Promise.resolve().then(()=>jl);return{TopProgress:re}},void 0);N=U.begin(`Importing ${r}…`)}try{if(P==="replace-workspace")for(const ce of g){const be=e.store.rows(ce.id),Q=await be.find();await be.bulkRemove(Q.map(q=>q.id)),await e.store.tables.remove(ce.id)}const U=new Map(g.map(ce=>[ce.name,ce]));let re=0;for(const ce of h){const be=ce.source,Q=ce.origin??(!be&&i.originUrl?{type:"json",url:i.originUrl}:void 0);let q;const oe=P==="overwrite-matching"?U.get(ce.name):void 0;if(oe){if(q=oe.id,!oe.source){const $e=e.store.rows(q),ze=await $e.find();await $e.bulkRemove(ze.map(ke=>ke.id))}await e.store.tables.patch(q,{columns:ce.columns,...ce.windowGeometry?{windowGeometry:ce.windowGeometry}:{},...ce.sortColumn?{sortColumn:ce.sortColumn,sortAsc:ce.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},source:be??void 0,origin:Q??void 0,updatedAt:Date.now()})}else q=Zo(),e.events.emit("import:before",{source:"json",tableId:q}),await e.store.tables.insert({id:q,workspaceId:n,name:ce.name,code:id(ce.name),columns:ce.columns,view:"table",...ce.windowGeometry?{windowGeometry:ce.windowGeometry}:{},...ce.sortColumn?{sortColumn:ce.sortColumn,sortAsc:ce.sortAsc??!0}:{},...be?{source:be}:{},...Q?{origin:Q}:{},updatedAt:Date.now()});let ye=0;if(!be){const $e=e.store.rows(q),ke=(i.maxRows!=null?ce.rows.slice(0,i.maxRows):ce.rows).map(m=>({id:Zo(),tableId:q,data:m,updatedAt:Date.now()}));await $e.bulkInsert(ke),ye=ke.length,re+=ye,N?.fraction(L>0?re/L:1)}e.events.emit("import:after",{source:"json",tableId:q,rowCount:ye})}}finally{N?.done()}}function Dr(e,t){if(Rt(e)&&Xo(e))return Qo(e);if(Rt(e)&&Array.isArray(e.tables)){const r=e,i=[];for(const n of r.tables){if(Ju(n)){const o=n,l=Rt(o.windowGeometry)?o.windowGeometry:void 0,c=typeof o.sortColumn=="string"?o.sortColumn:void 0,h=typeof o.sortAsc=="boolean"?o.sortAsc:void 0,g=Rt(o.source)&&typeof o.source.type=="string"?o.source:void 0,x=Rt(o.origin)&&typeof o.origin.type=="string"&&typeof o.origin.url=="string"?o.origin:void 0;i.push({name:String(n.name),columns:n.columns.map(Zu),rows:Array.isArray(n.rows)?n.rows.filter(Rt):[],...l?{windowGeometry:l}:{},...c?{sortColumn:c,sortAsc:h??!0}:{},...g?{source:g}:{},...x?{origin:x}:{}});continue}Rt(n)&&Xo(n)&&i.push(...Qo(n))}return i}if(Array.isArray(e)){const r=e.filter(Rt);return r.length===0?[]:[{name:t,...Jo(r)}]}return Rt(e)?[{name:t,...Jo([e])}]:[]}function Xo(e){for(const[t,r]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!Rt(r))continue;const i=r;if(Array.isArray(i.dataArray)&&Array.isArray(i.columns))return!0}return!1}function Qo(e){const t=[];for(const[r,i]of Object.entries(e)){if(!/\.table\.json$/.test(r)||!Rt(i))continue;const n=i;if(!Array.isArray(n.dataArray)||!Array.isArray(n.columns))continue;const o=r.replace(/\.table\.json$/,""),l=n.columns.map(x=>Qu(x)),c=l.map(x=>x.field),h=n.dataArray.filter(x=>Array.isArray(x)).map(x=>{const w={};for(let P=0;P<c.length;P++)w[c[P]]=x[P];return w}),g={name:o,columns:l,rows:h};if(n.elementRect&&typeof n.elementRect.x=="number"&&typeof n.elementRect.y=="number"){const x=n.elementRect;g.windowGeometry={x:x.x,y:x.y,w:x.width??600,h:x.height??400,z:x.zIndex??100,minimized:!!x.minimized,maximized:!!x.maximized}}typeof n.sortColumn=="number"&&n.sortColumn>=0&&n.sortColumn<c.length&&(g.sortColumn=c[n.sortColumn],g.sortAsc=(n.sortDirection??"asc")!=="desc"),t.push(g)}return t}function Qu(e){const t=String(e.field??"col"),r=String(e.name??t),i=typeof e.type=="string"?e.type:"string",n={field:t,label:r,type:i};return e.isUnique&&(n.unique=!0),e.isNotNull&&(n.notnull=!0),n}function Ju(e){return Rt(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function Zu(e){if(!Rt(e))return{field:"col",label:"Col",type:"string"};const t=e,r=String(t.field??"col");let i=typeof t.type=="string"?t.type:"string",n=typeof t.renderer=="string"?t.renderer:void 0;(i==="color"||i==="image")&&(n=n??i,i="string");const o={field:r,label:String(t.label??r),type:i};return n&&(o.renderer=n),typeof t.script=="string"&&(o.script=t.script),o}function Jo(e){const t=new Set;for(const n of e)for(const o of Object.keys(n))t.add(o);return{columns:Array.from(t).map(n=>({field:n,label:n,type:ed(e.map(o=>o[n]))})),rows:e}}function ed(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&td(r))?"date":"string"}function td(e){if(/^\d+$/.test(e))return!1;const t=new Date(e);return!Number.isNaN(t.getTime())}function Rt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function nd(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function rd(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}function id(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Zo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const sd=Object.freeze(Object.defineProperty({__proto__:null,importJsonText:vi,init:Gu,meta:Vu,parsedToTables:Dr},Symbol.toStringTag,{value:"Module"}));var od=Object.defineProperty,ad=Object.getOwnPropertyDescriptor,Rr=(e,t,r,i)=>{for(var n=i>1?void 0:i?ad(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&od(t,r,n),n};const ld="https://latest.datasette.io/ephemeral";let Ut=class extends Ne{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=async e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const r=this.token.trim();if(this.onConnect){this.status="Checking…",this.statusKind="busy";try{await this.onConnect(t,r)}catch(i){this.status=i?.message??String(i),this.statusKind="err";return}}this.finish({url:t,token:r})}}connectedCallback(){super.connectedCallback(),Ut.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ut.instance===this&&(Ut.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Vt(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,this.onConnect=e.onConnect,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return R`
      <dialog @cancel=${this.onCancel} @keydown=${Kt}>
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
                placeholder="e.g. ${ld}"
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
    `}};Ut.instance=null;Ut.styles=[Wt,Ye`
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
    `];Rr([K()],Ut.prototype,"url",2);Rr([K()],Ut.prototype,"token",2);Rr([K()],Ut.prototype,"status",2);Rr([K()],Ut.prototype,"statusKind",2);Ut=Rr([nt("datasette-connect-dialog")],Ut);function ll(e,t,r=[]){const i=new Set(e.map(c=>c.field)),n=new Set(r),o=[...e],l=[];for(const c of t)i.has(c.field)||n.has(c.field)||(o.push(c),l.push(c.field),i.add(c.field));return{columns:o,newFields:l}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cl=Symbol.for(""),cd=e=>{if(e?.r===cl)return e?._$litStatic$},ud=e=>({_$litStatic$:e,r:cl}),ea=new Map,dd=e=>(t,...r)=>{const i=r.length;let n,o;const l=[],c=[];let h,g=0,x=!1;for(;g<i;){for(h=t[g];g<i&&(o=r[g],(n=cd(o))!==void 0);)h+=n+t[++g],x=!0;g!==i&&c.push(o),l.push(h),g++}if(g===i&&l.push(t[i]),x){const w=l.join("$$lit$$");(t=ea.get(w))===void 0&&(l.raw=l,ea.set(w,t=l)),r=c}return e(t,...r)},hd=dd(R);var fd=Object.defineProperty,pd=Object.getOwnPropertyDescriptor,Ii=(e,t,r,i)=>{for(var n=i>1?void 0:i?pd(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&fd(t,r,n),n};let Jt=class extends Ne{constructor(){super(...arguments),this.values=[],this.current="",this.search="",this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,r){return this.values=t,this.current=r,this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(i=>{this.resolveFn=i,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}close(e){document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),Jt.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),Jt.instance===this&&(Jt.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(r=>r.value.toLowerCase().includes(e));return R`
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
      ${t.length===0?R`<div class="empty">No matching values.</div>`:R`<ul>
            ${t.slice(0,500).map(r=>R`
                <li
                  class=${r.value===this.current?"selected":""}
                  @click=${()=>this.close(r.value)}
                >
                  <span class="label">${r.value||R`<em>(empty)</em>`}</span>
                  <span class="count">${r.count}</span>
                </li>
              `)}
          </ul>`}
      ${this.values.length>500?R`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      <div class="actions">
        <button class="text" @click=${()=>this.close({clear:!0})}>Clear filter</button>
        <span style="color:#6b7280">${t.length} value${t.length===1?"":"s"}</span>
      </div>
    `}};Jt.instance=null;Jt.styles=[Zt,Ye`
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
    `];Ii([Ht({type:Array})],Jt.prototype,"values",2);Ii([Ht({type:String})],Jt.prototype,"current",2);Ii([K()],Jt.prototype,"search",2);Jt=Ii([nt("filter-popover")],Jt);var md=Object.defineProperty,gd=Object.getOwnPropertyDescriptor,en=(e,t,r,i)=>{for(var n=i>1?void 0:i?gd(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&md(t,r,n),n};let Ft=class extends Ne{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const r=t[this.highlightIdx];r!==void 0?(e.preventDefault(),this.onPick(r)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const r=[];for(const i of this.options)if(i.toLowerCase().includes(t)&&(r.push(i),r.length>=500))break;return r}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return R`
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
        ${this.value?R`<button
              type="button"
              class="clear"
              title="Clear filter"
              tabindex="-1"
              @mousedown=${r=>r.preventDefault()}
              @click=${this.onClear}
            >
              ×
            </button>`:me}
      </div>
      ${this.open?R`<ul class="dropdown" style=${t}>
            ${e.length===0?R`<li class="empty">No matching values.</li>`:e.map((r,i)=>R`
                    <li
                      class=${i===this.highlightIdx?"highlighted":""}
                      @mousedown=${n=>n.preventDefault()}
                      @click=${()=>this.onPick(r)}
                    >
                      ${r}
                    </li>
                  `)}
          </ul>`:me}
    `}};Ft.styles=Ye`
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
  `;en([Ht({type:String})],Ft.prototype,"value",2);en([Ht({type:Array})],Ft.prototype,"options",2);en([Ht({type:String})],Ft.prototype,"placeholder",2);en([K()],Ft.prototype,"open",2);en([K()],Ft.prototype,"highlightIdx",2);en([K()],Ft.prototype,"dropTop",2);en([K()],Ft.prototype,"dropLeft",2);en([K()],Ft.prototype,"dropMinWidth",2);en([K()],Ft.prototype,"editing",2);en([Kn("input")],Ft.prototype,"inputEl",2);Ft=en([nt("filter-combobox")],Ft);function bd(e){const t=e.trim(),r=t.split(/\s+/).filter(Boolean);if(!r.some(c=>c==="AND"||c==="OR"))return{kind:"plain",phrase:t.toLowerCase(),words:r.map(c=>c.toLowerCase())};const n=[];let o=[];for(const c of r)c==="OR"?(n.push(o),o=[]):c==="AND"||o.push(c.toLowerCase());n.push(o);const l=n.filter(c=>c.length>0);return l.length===0?{kind:"plain",phrase:t.toLowerCase(),words:[]}:{kind:"boolean",groups:l}}function xi(e,t,r){const i=bd(t);if(i.kind==="boolean")return e.filter(h=>i.groups.some(g=>g.every(x=>r(h,x))));const{phrase:n,words:o}=i;if(o.length<=1)return n===""?e:e.filter(h=>r(h,n));const l=e.filter(h=>r(h,n));if(l.length>0)return l;const c=e.filter(h=>o.every(g=>r(h,g)));return c.length>0?c:e.filter(h=>o.some(g=>r(h,g)))}const $i="easydb:visible-count";function ul(e,t,r){e&&document.dispatchEvent(new CustomEvent($i,{detail:{key:e,count:t,total:r}}))}function dl(e,t){return e<0||t<0?"":e===t?` (${t})`:` (${e}/${t})`}var yd=Object.defineProperty,wd=Object.getOwnPropertyDescriptor,ut=(e,t,r,i)=>{for(var n=i>1?void 0:i?wd(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&yd(t,r,n),n};function ta(e,t){return Object.values(e.data).some(r=>r!=null&&String(r).toLowerCase().includes(t))}const vd=200;let rt=class extends Ne{constructor(){super(...arguments),this.tableId="",this.viewInstanceId="",this.columns=[],this.rows=[],this.sortColumn=null,this.sortDir=null,this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.viewInst=null,this.tableColumns=[],this.renderedCount=0,this.lastEmittedCount=-1,this.lastEmittedTotal=-1,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;(t.tableId===this.tableId||this.viewMode&&t.tableId===this.viewInstanceId)&&(this.localQuery=t.query??"")},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}get viewMode(){return!!this.viewInstanceId}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.()}async updated(e){(e.has("tableId")||e.has("viewInstanceId"))&&this.tableId&&(this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.markEmptyCells(),this.emitCount()}emitCount(){const e=this.viewMode?this.viewInstanceId:this.tableId;if(!e)return;const t=this.renderedCount,r=this.rows.length;t===this.lastEmittedCount&&r===this.lastEmittedTotal||(this.lastEmittedCount=t,this.lastEmittedTotal=r,ul(e,t,r))}markEmptyCells(){const e=this.shadowRoot?.querySelectorAll("tbody tr:not(.spacer) > td");if(e)for(const t of e)t.className.startsWith("t-")&&t.classList.toggle("is-null",xd(t))}async bind(){if(!this.tableId)return;const e=await ge(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.viewMode?(this.tableColumns=t.columns,this.viewInst=await e.store.viewInstances.findOne(this.viewInstanceId)??null,this.applyView(),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const o=n.find(l=>l.id===this.tableId);o&&(this.tableColumns=o.columns,this.applyView())}),this.viewSubUnsub?.(),this.viewSubUnsub=e.store.viewInstances.subscribe(n=>{const o=n.find(l=>l.id===this.viewInstanceId);o&&(this.viewInst=o,this.applyView())})):(this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const o=n.find(l=>l.id===this.tableId);o&&this.applyTable(o)})),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const r=e.store.rows(this.tableId);this.unsubscribe=r.subscribe(n=>this.rows=n);const i=window.setTimeout(()=>this.loading=!0,vd);try{this.rows=await r.find()}catch(n){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${n?.message??String(n)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(i),this.loading=!1}}applyTable(e){this.columns=e.columns,this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}applyView(){const e=this.viewInst;if(!e)return;const t=new Map(this.tableColumns.map(i=>[i.field,i])),r=e.columnWidths??{};this.columns=e.visibleColumns.map(i=>t.get(i)).filter(i=>!!i).map(i=>{const n=r[i.field];return typeof n=="number"?{...i,width:n}:i}),this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}async setCell(e,t,r){const i=await ge();await this.commitCell(i,e,t,r)}async commitCell(e,t,r,i){const n=this.columns.find(o=>o.field===r);if(n){const o=$d(n,i,this.rows,t.id);if(o){await e.api.ui.dialogs.alert(o,`Cannot save ${n.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[r]:i},updatedAt:Date.now()})}catch(o){await e.api.ui.dialogs.alert(o?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}cancelCellEdit(e,t){if(e.key!=="Escape")return;e.stopPropagation();const r=e.target;typeof t=="boolean"?r.checked=t:r.value=t,r.blur()}renderCell(e,t){const r=e.data[t.field],i=t.renderer,n=i?this.cellRenderers?.get(i):void 0;if(n){const o=ud(n);return hd`<${o}
        .value=${r??""}
        .column=${t}
        .row=${e.data}
        @change=${l=>this.setCell(e,t.field,l.detail.value)}
      ></${o}>`}switch(t.type){case"boolean":{const o=r===!0||r==="true"||r===1||r==="1";return R`<input
          type="checkbox"
          .checked=${o}
          @keydown=${l=>this.cancelCellEdit(l,o)}
          @change=${l=>this.setCell(e,t.field,l.target.checked)}
        />`}case"date":return R`<input
          type="date"
          .value=${na(r)}
          @keydown=${o=>this.cancelCellEdit(o,na(r))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"datetime":return R`<input
          type="datetime-local"
          .value=${ra(r)}
          @keydown=${o=>this.cancelCellEdit(o,ra(r))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"number":return R`<input
          type="number"
          .value=${r==null?"":String(r)}
          @keydown=${o=>this.cancelCellEdit(o,r==null?"":String(r))}
          @change=${o=>{const l=o.target.value;this.setCell(e,t.field,l===""?null:Number(l))}}
        />`;default:return R`<input
          type="text"
          .value=${String(r??"")}
          @keydown=${o=>this.cancelCellEdit(o,String(r??""))}
          @change=${o=>this.setCell(e,t.field,o.target.value)}
        />`}}async deleteRow(e){const t=await ge();try{await t.store.rows(this.tableId).remove(e)}catch(r){await t.api.ui.dialogs.alert(r?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e){let t;this.sortColumn!==e?t="asc":this.sortDir==="asc"?t="desc":this.sortDir==="desc"?t=null:t="asc",this.sortColumn=t?e:null,this.sortDir=t;const r=await ge(),i=t?{sortColumn:e,sortAsc:t==="asc",updatedAt:Date.now()}:{sortColumn:void 0,sortAsc:void 0,updatedAt:Date.now()};this.viewMode?await r.store.viewInstances.patch(this.viewInstanceId,i):await r.store.tables.patch(this.tableId,i)}filteredRows(){const e=Object.entries(this.filters).filter(([,n])=>n&&n.trim().length>0),t=this.globalQuery.trim(),r=this.localQuery.trim();if(e.length===0&&t.length===0&&r.length===0)return this.rows;let i=this.rows;return e.length>0&&(i=i.filter(n=>e.every(([o,l])=>String(n.data[o]??"").toLowerCase().includes(l.toLowerCase())))),r&&(i=xi(i,r,ta)),t&&(i=xi(i,t,ta)),i}sortedRows(){const e=this.filteredRows();if(!this.sortColumn||!this.sortDir)return e;const t=this.sortColumn,i=this.columns.find(l=>l.field===t)?.type??"string",n=this.sortDir==="asc"?1:-1,o=[...e];return o.sort((l,c)=>{const h=l.data[t],g=c.data[t],x=W=>W==null?0:W===""?1:2,w=x(h),P=x(g);return w!==2||P!==2?(w-P)*n:kd(h,g,i)*n}),o}async openFilterPicker(e,t){e.stopPropagation();const r=e.currentTarget,i=Jt.instance;if(!i)return;const n=new Map;for(const c of this.rowsFacetedFor(t)){const h=c.data[t];if(h==null)continue;const g=String(h);n.set(g,(n.get(g)??0)+1)}const o=[...n.entries()].map(([c,h])=>({value:c,count:h})).sort((c,h)=>h.count-c.count||c.value.localeCompare(h.value)),l=await i.open(r.getBoundingClientRect(),o,this.filters[t]??"");l!==null&&(typeof l=="object"&&"clear"in l?this.onFilterInput(t,""):typeof l=="string"&&this.onFilterInput(t,l))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>{this.filterSaveTimer=null,this.saveFilters()},250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=Object.entries(this.filters).filter(([r,i])=>i&&i.trim().length>0&&r!==e).map(([r,i])=>[r,i.trim().toLowerCase()]);return t.length===0?this.rows:this.rows.filter(r=>t.every(([i,n])=>String(r.data[i]??"").toLowerCase().includes(n)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const r=50,i=500;for(const n of this.visibleColumns){let o=!0;for(const c of t){const h=c.data[n.field];if(h==null)continue;if((typeof h=="string"?h:String(h)).length>=r){o=!1;break}}if(!o)continue;const l=new Set;for(const c of this.rowsFacetedFor(n.field)){const h=c.data[n.field];if(h==null||h==="")continue;const g=typeof h=="string"?h:String(h);if(!(g.length>=r)&&(l.add(g),l.size>=i))break}e.set(n.field,[...l].sort())}return e}freezeColumnWidths(){const e=this.renderRoot.querySelector("thead tr");if(!e)return;const t=Array.from(e.querySelectorAll(":scope > th")),r=this.visibleColumns,i=new Map;r.forEach((n,o)=>{if(n.width!=null)return;const l=t[o];l&&i.set(n.field,Math.round(l.getBoundingClientRect().width))}),i.size!==0&&(this.columns=this.columns.map(n=>i.has(n.field)?{...n,width:i.get(n.field)}:n))}onResizeStart(e,t,r){e.preventDefault(),e.stopPropagation();const i=r.offsetWidth;this.freezeColumnWidths(),this.resizing={field:t,startX:e.clientX,startW:i};const n=l=>{if(!this.resizing)return;const c=l.clientX-this.resizing.startX,h=Math.max(40,this.resizing.startW+c);this.columns=this.columns.map(g=>g.field===this.resizing.field?{...g,width:h}:g)},o=async()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",o);const l=this.resizing?.field;if(this.resizing=null,!l)return;const c=await ge();if(this.viewMode){const h={...this.viewInst?.columnWidths??{}};for(const g of this.columns)typeof g.width=="number"&&(h[g.field]=g.width);await c.store.viewInstances.patch(this.viewInstanceId,{columnWidths:h,updatedAt:Date.now()})}else await c.store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",n),window.addEventListener("pointerup",o)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,r){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientX<i.left+i.width/2;this.dropTargetField=t,this.dropEdge=n?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const r=this.dragSourceField,i=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!r||r===t||!i)return;const n=[...this.columns],o=n.findIndex(g=>g.field===r);if(o<0)return;const[l]=n.splice(o,1);let c=n.findIndex(g=>g.field===t);if(c<0){n.splice(o,0,l);return}i==="after"&&(c+=1),n.splice(c,0,l);const h=await ge();this.viewMode?await h.store.viewInstances.patch(this.viewInstanceId,{visibleColumns:n.map(g=>g.field),updatedAt:Date.now()}):await h.store.tables.patch(this.tableId,{columns:n,updatedAt:Date.now()})}async saveFilters(){const e=await ge(),t={};for(const[i,n]of Object.entries(this.filters))n&&n.trim().length>0&&(t[i]=n);if(this.viewMode){await e.store.viewInstances.patch(this.viewInstanceId,{filters:t,updatedAt:Date.now()});return}const r=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:r,updatedAt:Date.now()})}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,r=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,i=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),n=Math.min(e.length,i+r);return{slice:e.slice(i,n),topPad:i*t,bottomPad:(e.length-n)*t}}render(){const e=this.sortedRows();this.renderedCount=e.length;const t=this.visibleColumns,{slice:r,topPad:i,bottomPad:n}=this.virtualSlice(e),o=this.computeFilterSuggestions(),l=this.externalLoading?this.externalProgress:null;return R`
      ${this.loading||this.externalLoading?R`<div
            class="load-bar"
            role="progressbar"
            aria-label="Loading rows"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow=${l!=null?Math.round(l*100):me}
          >
            <div
              class="load-bar-fill ${l!=null?"determinate":""}"
              style=${l!=null?`width:${Math.max(2,Math.round(l*100))}%`:me}
            ></div>
          </div>`:me}
      <table style=${t.some(c=>c.width!=null)?"table-layout: fixed":me}>
        <colgroup>
          ${t.map(c=>R`<col style=${c.width!=null?`width: ${c.width}px`:""} />`)}
          <col style="width:2rem" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(c=>{const h=c.sortable!==!1,g=this.sortColumn===c.field&&this.sortDir,x=h?g==="asc"?"▲":g==="desc"?"▼":"⇅":"",w=`t-${c.type}`,P=this.dragSourceField===c.field,W=this.dropTargetField===c.field,L=W&&this.dropEdge==="before"?" drop-before":W&&this.dropEdge==="after"?" drop-after":"",N=(c.description?`${c.description}
`:"")+(c.units?`Units: ${c.units}
`:"")+`${c.field} — ${h?"click to sort, ":"not sortable · "}drag to reorder`;return R`
                <th
                  class=${`${w}${g?" sorted":""}${P?" drag-source":""}${L}${h?"":" no-sort"}`}
                  title=${N}
                  @click=${()=>h&&this.toggleSort(c.field)}
                  @dragover=${U=>this.onColDragOver(U,c.field,U.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(c.field)}
                  @drop=${U=>this.onColDrop(U,c.field)}
                >
                  <div class="col-head">
                    <span
                      class="col-grip mi sm"
                      title="Drag to reorder column"
                      draggable="true"
                      @click=${U=>U.stopPropagation()}
                      @dragstart=${U=>this.onColDragStart(U,c.field)}
                      @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                      >drag_indicator</span
                    ><span class="col-label"
                      >${c.label}${c.units?R`<span class="col-units"> (${c.units})</span>`:""}</span
                    ><span class="sort-icon">${x}</span>
                    <button
                      class=${`funnel${this.filters[c.field]?" active":""}`}
                      title="Filter by value"
                      @click=${U=>this.openFilterPicker(U,c.field)}
                    >
                      <span class="mi sm">filter_list</span>
                    </button>
                  </div>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${U=>U.stopPropagation()}
                    @pointerdown=${U=>this.onResizeStart(U,c.field,U.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:2rem"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(c=>{const h=o.get(c.field)??[];return R`
                <th>
                  <filter-combobox
                    .value=${this.filters[c.field]??""}
                    .options=${h}
                    placeholder="filter…"
                    @filter-change=${g=>this.onFilterInput(c.field,g.detail.value)}
                  ></filter-combobox>
                </th>
              `})}
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${i>0?R`<tr class="spacer" style=${`height:${i}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${r.map(c=>R`
              <tr>
                ${t.map(h=>R`<td class=${`t-${h.type}${h.renderer?` r-${h.renderer}`:""}`}>
                      ${this.renderCell(c,h)}
                    </td>`)}
                <td>
                  <button class="danger" title="Delete row" @click=${()=>this.deleteRow(c.id)}>
                    <span class="mi sm">delete</span>
                  </button>
                </td>
              </tr>
            `)}
          ${n>0?R`<tr class="spacer" style=${`height:${n}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
        </tbody>
      </table>
    `}};rt.styles=[Zt,Ye`
      :host {
        display: block;
        overflow: auto;
        max-height: 60vh;
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
    `];ut([Ht({type:String})],rt.prototype,"tableId",2);ut([Ht({type:String})],rt.prototype,"viewInstanceId",2);ut([K()],rt.prototype,"columns",2);ut([K()],rt.prototype,"rows",2);ut([K()],rt.prototype,"sortColumn",2);ut([K()],rt.prototype,"sortDir",2);ut([K()],rt.prototype,"filters",2);ut([K()],rt.prototype,"globalQuery",2);ut([K()],rt.prototype,"localQuery",2);ut([K()],rt.prototype,"dragSourceField",2);ut([K()],rt.prototype,"dropTargetField",2);ut([K()],rt.prototype,"dropEdge",2);ut([K()],rt.prototype,"resizing",2);ut([K()],rt.prototype,"cellRenderers",2);ut([K()],rt.prototype,"scrollY",2);ut([K()],rt.prototype,"viewportHeight",2);ut([K()],rt.prototype,"loading",2);ut([K()],rt.prototype,"externalLoading",2);ut([K()],rt.prototype,"externalProgress",2);rt=ut([nt("data-table")],rt);function xd(e){if((e.textContent??"").trim()!==""||e.querySelector("img"))return!1;const t=e.querySelectorAll("input");for(const r of Array.from(t))if(r.type==="checkbox"||r.value!=="")return!1;return!0}function $d(e,t,r,i){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&r.find(o=>o.id!==i&&o.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function na(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function ra(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}function kd(e,t,r){switch(r){case"number":{const i=Number(e),n=Number(t);return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}case"boolean":return(e?1:0)-(t?1:0);case"date":{const i=new Date(String(e)).getTime(),n=new Date(String(t)).getTime();return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function ln(e,t,r){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:r}}))}class qt extends Error{constructor(t,r){const i=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(i),this.name="DatasetteError",this.status=r??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function bn(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const r=t.pathname.split("/").filter(Boolean),i={};for(const[c,h]of t.searchParams)i[c]=h;let n,o=null,l=null;if(r.length>=2){l=decodeURIComponent(r[r.length-1]),o=decodeURIComponent(r[r.length-2]);const c=r.slice(0,r.length-2).join("/");n=t.origin+(c?"/"+c:"")}else r.length===1&&(o=decodeURIComponent(r[0])),n=t.origin;return{base:n,db:o,table:l,query:i}}function ir(e,t={}){const r=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[i,n]of Object.entries({...e.query,...t}))n!=null&&r.searchParams.set(i,String(n));return r.toString()}function Cd(e){const t=e?.next_url??null,r=e?.next,i=r!=null&&r!==!1?String(r):null,n=Array.isArray(e?.rows)?e.rows:[],o=Array.isArray(e?.columns)?e.columns:null;return{rows:n.map(c=>Array.isArray(c)&&o?Object.fromEntries(o.map((h,g)=>[h,c[g]])):c),nextUrl:t,nextToken:i,hasMore:t!=null||i!=null,truncated:e?.truncated===!0}}function Ed(e,t=""){const r=String(e||"").toUpperCase();return r.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":r.includes("REAL")||r.includes("FLOA")||r.includes("DOUB")||r.includes("NUM")||r.includes("DEC")?"number":r.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function ia(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],r=Array.isArray(e?.columns)?e.columns.slice():[],i={},n=e?.column_details;if(Array.isArray(n))for(const c of n)i[c.column??c.name]=c;else n&&typeof n=="object"&&Object.assign(i,n);for(const c of r)c in i||(i[c]={});const l=(r.length?r:Object.keys(i)).map(c=>{const h=i[c]||{},g=h.is_pk===!0||h.is_pk===1||t.includes(c),x={field:c,label:hl(c),type:Ed(h.sqlite_type??h.type,c)};return(h.notnull===!0||h.notnull===1||g)&&(x.notnull=!0),g&&(x.unique=!0),(h.hidden===!0||h.hidden===1)&&(x.hidden=!0),h.default!=null&&h.default!==""&&(x.default=h.default),x});if(t.length===0){const c=l.filter(h=>h.unique).map(h=>h.field);c.length&&t.push(...c)}return{columns:l,pks:t}}function hl(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function Di(e){const t=[],r=new Set;for(const i of e)for(const n of Object.keys(i))r.has(n)||(r.add(n),t.push(n));return t.map(i=>({field:i,label:hl(i),type:Sd(e.map(n=>n[i]))}))}function Sd(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&_d(r))?"datetime":"string"}function _d(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function Td(e){const t=new TextEncoder().encode(String(e));let r="";for(const i of t){const n=String.fromCharCode(i);/[A-Za-z0-9_-]/.test(n)?r+=n:r+="~"+i.toString(16).toUpperCase().padStart(2,"0")}return r}function Ad(e,t){return!t||t.length===0?null:t.map(r=>Td(e[r])).join(",")}function Pd(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],r=[];for(const i of t){if(typeof i=="string"){r.push(i);continue}if(i&&typeof i=="object"&&typeof i.name=="string"){if(i.name==="_memory")continue;r.push(typeof i.route=="string"&&i.route?i.route:i.name)}}return r}function Id(e,t){const r=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],i=[];for(const n of r){if(typeof n=="string"){i.push({db:t,table:n,count:null,hidden:!1,pks:[]});continue}n&&typeof n=="object"&&typeof n.name=="string"&&i.push({db:t,table:n.name,count:typeof n.count=="number"?n.count:null,hidden:n.hidden===!0,pks:Array.isArray(n.primary_keys)?n.primary_keys:[]})}return i}async function An(e,t){let r;try{r=await e(t)}catch(n){const o=n?.message||"network error";throw new qt({error:`Couldn't reach ${t} (${o}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(r&&r.ok===!1){let n=null;try{n=await r.json()}catch{}throw new qt(n&&typeof n=="object"?n:{error:`HTTP ${r.status} for ${t}`},r.status)}const i=await r.json();if(i&&i.ok===!1)throw new qt(i,r.status);return i}async function fl(e,t){return Pd(await An(e,`${t}/-/databases.json`))}async function sa(e,t,r){return Id(await An(e,`${t}/${encodeURIComponent(r)}.json`),r)}async function Ri(e,t){const r=ir(t,{_extra:"column_details"}),i=await An(e,r);let{columns:n,pks:o}=ia(i),l=!!i&&i.column_details!=null,c=i?.count??null,h=i;if(n.length===0){const g=ir(t,{_extra:"columns"}),x=await An(e,g);({columns:n,pks:o}=ia(x)),l=!!x&&x.column_details!=null,c=x?.count??c,h=x}return{columns:n,pks:o,count:c,typed:l,raw:h}}async function Ss(e,t){if(!t.db||!t.table)throw new Error("probeSingleTable: URL must name a database and a table");const r=await Ri(e,t);return{db:t.db,table:t.table,count:r.count,hidden:!1,pks:r.pks}}function Dd(e,t,r){const i=e&&typeof e=="object"?e:{},n=t&&r&&i.databases?.[t]?.tables?.[r]||t&&r&&i.databases?.[t]?.tables?.[r.toLowerCase()]||{},o=t&&i.databases?.[t]||{},l=L=>n[L]??o[L]??i[L],c={columns:{},units:{}};typeof n.sort=="string"&&(c.sort=n.sort),typeof n.sort_desc=="string"&&(c.sortDesc=n.sort_desc),typeof n.size=="number"&&(c.size=n.size),Array.isArray(n.sortable_columns)&&(c.sortableColumns=n.sortable_columns.slice()),typeof n.label_column=="string"&&(c.labelColumn=n.label_column),n.hidden===!0&&(c.hidden=!0),typeof n.description=="string"&&(c.description=n.description),typeof n.description_html=="string"&&(c.descriptionHtml=n.description_html);const h=l("source"),g=l("source_url"),x=l("license"),w=l("license_url"),P=l("about"),W=l("about_url");if(typeof h=="string"&&(c.source=h),typeof g=="string"&&(c.sourceUrl=g),typeof x=="string"&&(c.license=x),typeof w=="string"&&(c.licenseUrl=w),typeof P=="string"&&(c.about=P),typeof W=="string"&&(c.aboutUrl=W),n.columns&&typeof n.columns=="object")for(const[L,N]of Object.entries(n.columns))typeof N=="string"&&(c.columns[L]=N);if(n.units&&typeof n.units=="object")for(const[L,N]of Object.entries(n.units))typeof N=="string"&&(c.units[L]=N);return c}const oa=new Map;async function Rd(e,t){let r=oa.get(t);return r||(r=An(e,`${t}/-/metadata.json`).catch(()=>({})),oa.set(t,r)),r}async function Ws(e,t){const r=await Rd(e,t.base);return Dd(r,t.db,t.table)}function Od(e){const t={};return e.description!=null&&(t.description=e.description),e.descriptionHtml!=null&&(t.descriptionHtml=e.descriptionHtml),e.source!=null&&(t.source=e.source),e.sourceUrl!=null&&(t.sourceUrl=e.sourceUrl),e.license!=null&&(t.license=e.license),e.licenseUrl!=null&&(t.licenseUrl=e.licenseUrl),e.about!=null&&(t.about=e.about),e.aboutUrl!=null&&(t.aboutUrl=e.aboutUrl),Object.keys(t).length>0?t:void 0}function Ks(e,t){const r=e.sortableColumns!=null?new Set(e.sortableColumns):null,i=t.map(c=>{const h=e.columns[c.field],g=e.units[c.field],x=r?r.has(c.field):void 0;return h==null&&g==null&&x===void 0?c:{...c,...h!=null?{description:h}:{},...g!=null?{units:g}:{},...x!==void 0?{sortable:x}:{}}}),n=new Set(t.map(c=>c.field)),o={};e.sort&&n.has(e.sort)?(o.sortColumn=e.sort,o.sortAsc=!0):e.sortDesc&&n.has(e.sortDesc)&&(o.sortColumn=e.sortDesc,o.sortAsc=!1);const l=Od(e);return l&&(o.info=l),e.labelColumn&&n.has(e.labelColumn)&&(o.labelColumn=e.labelColumn),{columns:i,patch:o}}function Vs(e,t){if(t.length===0)return e;const r=new Map(Di(t).map(i=>[i.field,i.type]));return e.map(i=>{if(i.type!=="string")return i;const n=r.get(i.field);return n&&n!=="string"?{...i,type:n}:i})}async function Or(e,t,r={}){const i=r.maxRows??1e4,o={_size:r.pageSize??1e3,...r.extraParams||{}};let l=r.startUrl??ir(t,o);const c=[];let h=!1,g=!1,x=0,w,P;for(;l;){let W;try{W=await An(e,l)}catch(U){if(c.length===0&&!r.startUrl)throw U;w=U instanceof qt&&U.status?`stopped after ${c.length} rows: HTTP ${U.status}`:`stopped after ${c.length} rows: ${U?.message??String(U)}`,g=!0,P=l;break}const L=Cd(W);c.push(...L.rows),h=h||L.truncated,x+=1,r.onProgress?.(c.length);const N=L.nextUrl!=null?L.nextUrl:L.nextToken!=null?ir(t,{_next:L.nextToken}):null;N&&c.length<i&&L.rows.length>0?l=N:(g=N!=null&&L.rows.length>0,g&&(P=N??void 0),l=null)}return{rows:c,truncated:h,hasMore:g,pages:x,error:w,nextUrl:P}}function jd(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function pl(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function ml(e,t,r){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${r}`}async function Oi(e,t,r,i){let n;try{n=await e(t,{method:"POST",headers:jd(i),body:JSON.stringify(r)})}catch(l){throw new qt({error:`Couldn't reach ${t} (${l?.message||"network error"}).`},0)}if(n&&n.ok===!1){let l=null;try{l=await n.json()}catch{}throw new qt(l&&typeof l=="object"?l:{error:`HTTP ${n.status} for ${t}`},n.status)}const o=await n.json();if(o&&o.ok===!1)throw new qt(o,n.status);return o}async function aa(e,t,r,i={}){const n=await Oi(e,pl(t,"insert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function Fd(e,t,r,i,n={}){const o=await Oi(e,ml(t,r,"update"),{update:i,return:!0},n.token);return o&&typeof o.row=="object"&&o.row?o.row:Array.isArray(o?.rows)&&o.rows[0]?o.rows[0]:null}async function la(e,t,r,i={}){await Oi(e,ml(t,r,"delete"),{},i.token)}async function zd(e,t,r,i={}){const n=await Oi(e,pl(t,"upsert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function Ld(e,t){const r=ir(t,{_extra:"primary_keys"}),i=await An(e,r);return Array.isArray(i?.primary_keys)?i.primary_keys:[]}async function gl(e,t){try{const r=await An(e,ir(t,{_extra:"count"}));return typeof r?.count=="number"?r.count:null}catch{return null}}async function bl(e,t,r={}){const i=r.token?{headers:{Authorization:`Bearer ${r.token}`}}:void 0;try{const n=await e(`${t}/-/versions.json`,i);if(n&&n.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${n.status}`};const o=await n.json(),l=o?.datasette?.version??o?.version??null;let c=null;try{c=(await(await e(`${t}/-/actor.json`,i)).json())?.actor??null}catch{}return{reachable:!0,version:l,actor:c,writable:!!(r.token&&c)}}catch(n){return{reachable:!1,version:null,actor:null,writable:!1,error:n?.message||"unreachable"}}}function sr(e,t){return t?(r,i)=>{const n=(i??{}).headers??{};return e(r,{...i??{},headers:{...n,Authorization:`Bearer ${t}`}})}:e}class Md extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function yl(e){return`datasette:token:${e}`}function Bd(e,t){for(const[r,i]of Object.entries(t))if(r!=="data"&&e[r]!==i)return!1;return!0}function Nd(e,t){const r=e.source,i=r?.config??{},n={base:i.base,db:i.db,table:i.table,query:{}},o=Array.isArray(i.pks)&&i.pks.length>0?i.pks:["rowid"],l=r?.writable===!0,c=i.maxRows??1e4,h=i.pollIntervalMs??0,g=(Q,q)=>t.backend.fetch(Q,q);async function x(){const q=(await t.settings.findOne(yl(i.base)))?.value;return typeof q=="string"&&q.length>0?q:void 0}const w=async(Q,q)=>sr(g,await x())(Q,q);function P(Q){return{id:Ad(Q,o)??Ud(),tableId:e.id,data:Q,updatedAt:Date.now()}}function W(Q){if(!l)throw new Md(Q)}function L(Q){const q={};for(const[oe,ye]of Object.entries(Q))o.includes(oe)||(q[oe]=ye);return q}const N=new Set;let U=[],re=!1,ce=null;function be(){return ce||(ce=(async()=>{try{const{rows:Q}=await Or(w,n,{maxRows:c});U=Q.map(P),re=!0;for(const q of N)q(U);return U}finally{ce=null}})(),ce)}return{async find(Q){const q=re?U:await be();return!Q||Object.keys(Q).length===0?q:q.filter(oe=>Bd(oe,Q))},async findOne(Q){return(re?U:await be()).find(oe=>oe.id===Q)??null},async insert(Q){W("insert");const[q]=await aa(w,n,[Q.data]),oe=P(q??Q.data);return t.events.emit("row:created",{tableId:e.id,row:oe}),be(),oe},async bulkInsert(Q){if(Q.length===0)return[];W("insert");const q=await aa(w,n,Q.map(ye=>ye.data)),oe=(q.length?q:Q.map(ye=>ye.data)).map(P);return be(),oe},async upsert(Q){W("upsert");const[q]=await zd(w,n,[Q.data]),oe=P(q??Q.data);return be(),oe},async patch(Q,q){W("update");const oe=q.data,ye=L(oe??{}),$e=await Fd(w,n,Q,ye),ze=P($e??{...oe??{}});return t.events.emit("row:updated",{tableId:e.id,row:ze,prev:ze}),be(),ze},async remove(Q){W("delete"),await la(w,n,Q),t.events.emit("row:deleted",{tableId:e.id,rowId:Q}),be()},async bulkRemove(Q){if(Q.length!==0){W("delete");for(const q of Q)await la(w,n,q);be()}},subscribe(Q){N.add(Q),re?Q(U):be();let q=null;return h>0&&(q=setInterval(()=>void be(),h)),()=>{N.delete(Q),q&&clearInterval(q)}},async refresh(){await be()}}}function Ud(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const ki=e=>e.replace(/^https?:\/\//,""),qd=e=>new Promise(t=>setTimeout(t,e));function Hd(){const e=globalThis.__eda_resumeDelayMs;return typeof e=="number"&&e>=0?e:6e4}function Wd(e,t,r){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(r)}`}function Gs(e,t,r,i){const n={...e.info??{}};return!n.source&&!n.sourceUrl&&(n.source=`${ki(t)}/${r}/${i}`,n.sourceUrl=Wd(t,r,i)),{...e,info:n}}function Ys(e,t,r,i){if(!(!e||!t))return{nextUrl:t,loadedRows:r,...i!=null?{totalCount:i}:{}}}async function wl(e,t,r,i={}){if(t.db&&t.table)return[await Ss(e,t)];let n=[];if(t.db){if(n.push(...await sa(e,t.base,t.db)),i.skipPicker)return n.filter(c=>!c.hidden)}else{const c=await fl(e,t.base);if(c.length===0)return[];let h=c;if(c.length>1){const g=await Es(c.map(x=>({name:x,size:null})),{title:`${r} from Datasette`,message:`Choose databases on ${ki(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!g)return null;h=g.map(x=>c[x])}for(const g of h)try{n.push(...await sa(e,t.base,g))}catch{}}if(n.length===0)return[];const o=new Set(n.map(c=>c.db)).size>1,l=await Es(n.map(c=>({name:o?`${c.db}/${c.table}`:c.table,size:c.count,detail:o?void 0:c.db,hidden:c.hidden})),{title:`${r} from Datasette`,message:`Choose tables to ${r.toLowerCase()} from ${ki(t.base)}.`,confirmLabel:r});return l?l.map(c=>n[c]):null}const Kd='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Vd={id:"datasette-source",name:"Datasette",type:"source",version:"0.2.0",description:"Import tables from any online Datasette instance, database, or single table by URL",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-source.ts"},Nt={maxImportRows:1e4,pageSize:1e3},Gd="https://latest.datasette.io/fixtures/facetable";function Yd(e){e.ui.registerHeaderButton({id:"datasette:connect",label:"Connect",icon:Kd,tooltip:"Connect a live, editable Datasette table",onClick:()=>th(e)}),e.ui.registerTableButton({id:"datasette:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from its Datasette backend",visible:t=>t.source?.type==="datasette"||t.origin?.type==="datasette",onClick:(t,{tableId:r})=>sh(t,r)}),e.ui.registerTableButton({id:"datasette:resume",label:"Resume import",icon:"sync_problem",tooltip:"Import was interrupted — click to resume from where it stopped",danger:!0,visible:t=>t.origin?.type==="datasette"&&t.importResume!=null,onClick:(t,{tableId:r})=>ah(t,r)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:Nd}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:r}){const i=r||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${Gd}`,"","Import from Datasette");i&&await ca(t,i)}}),e.ui.registerDropHandler(async(t,r)=>{const i=t.dataTransfer?.getData("text/plain")||"";return Xd(i)?(t.preventDefault(),await ca(r,i),!0):!1})}async function ca(e,t){try{await Xs(e,t)}catch(r){let i;r instanceof qt?i=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:i=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(i,"Datasette import failed")}}function Xd(e){try{const t=bn(e);return!!(t.db&&t.table)}catch{return!1}}function Qd(e,t){if(!e.has(t))return t;for(let r=2;;r++){const i=`${t} (${r})`;if(!e.has(i))return i}}async function Xs(e,t,r={}){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=bn(t),l=await wl(L=>e.backend.fetch(L),n,"Import",{skipPicker:r.skipTablePicker});if(l===null)return;if(l.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const c=[];let h=0;for(const L of l){const N={base:n.base,db:L.db,table:L.table,query:{}},U=await Jd(e,i,N);if(U.skipped){h+=1;continue}c.push({tableId:U.tableId,ref:N,overwrite:U.overwrite,knownCount:L.count})}let g=0,x=0;const w=[],P=[],W=[];for(const L of c)try{const N=await Zd(e,L.tableId,L.ref,L.overwrite,L.knownCount);g+=1,x+=N.rowCount,N.error?P.push(`${L.ref.db}/${L.ref.table} (${N.error})`):(N.hasMore||N.truncated)&&w.push(`${L.ref.db}/${L.ref.table}`)}catch(N){W.push(`${L.ref.db}/${L.ref.table}: ${N?.message??String(N)}`)}eh(e,{imported:g,skipped:h,totalRows:x,capped:w,partial:P,failed:W,requested:l.length})}async function Jd(e,t,r){const i=`${r.db}/${r.table}`,n={type:"datasette",url:`${r.base}/${encodeURIComponent(r.db)}/${encodeURIComponent(r.table)}`},o=(await e.store.tables.find()).filter(g=>g.workspaceId===t),l=o.find(g=>g.name===i);let c=i;if(l){const g=await e.ui.dialogs.choice(`A table named "${i}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!g||g==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(g==="Overwrite")return await e.store.tables.patch(l.id,{origin:n,updatedAt:Date.now()}),{tableId:l.id,overwrite:!0};c=Qd(new Set(o.map(x=>x.name)),i)}const h=jr();return await e.store.tables.insert({id:h,workspaceId:t,name:c,code:xl(`${r.db}-${r.table}`),columns:[],view:"table",origin:n,updatedAt:Date.now()}),{tableId:h,overwrite:!1}}async function Zd(e,t,r,i,n=null){const o=`${r.db}/${r.table}`,l=c=>e.backend.fetch(c);ln(t,!0);try{let c=[],h=n,g=!1;try{const b=await Ri(l,r);c=b.columns,h=h??b.count,g=b.typed}catch{}h==null&&(h=await gl(l,r));const x=h&&h>0?Math.min(h,Nt.maxImportRows):0,w=[];let P=!1,W=!1,L=0,N,U,re;for(;;){const b=await Or(l,r,{maxRows:Math.max(0,Nt.maxImportRows-w.length),pageSize:Nt.pageSize,...re?{startUrl:re}:{},onProgress:ue=>{x>0&&ln(t,!0,Math.min(1,(w.length+ue)/x))}});if(w.push(...b.rows),P=P||b.truncated,L+=b.pages,W=b.hasMore,N=b.error,U=b.nextUrl,!b.error||!b.nextUrl||w.length>=Nt.maxImportRows||await e.ui.dialogs.choice(`Import of "${o}" paused after ${w.length.toLocaleString()} rows (${b.error}). Datasette may be rate-limiting a large import. Wait 60 seconds and resume from where it stopped, or cancel and keep the rows imported so far (you can resume later from the table's footer)?`,["Resume in 60s","Cancel"],"Import paused — rate limited?")!=="Resume in 60s")break;ln(t,!0),e.ui.dialogs.toast(`Resuming "${o}" in 60s…`,{kind:"info",title:"Import paused"}),await qd(Hd()),re=b.nextUrl,N=void 0,U=void 0}let be=c.length===0?Di(w):g?c:Vs(c,w),Q={};try{const b=await Ws(l,r),C=Ks(b,be);be=C.columns,Q=C.patch}catch{}Q=Gs(Q,r.base,r.db,r.table);const q=await e.store.tables.findOne(t),oe=q?.columns??[],ye=oe.length===0,{columns:$e}=ll(oe,be,q?.deletedColumns),ze=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t});const ke=Ys(N,U,w.length,h),m=ye?{columns:$e,...Q,importResume:ke,updatedAt:ze}:{columns:$e,...Q.info?{info:Q.info}:{},importResume:ke,updatedAt:ze};await e.store.tables.patch(t,m);const v=e.store.rows(t);if(i){const b=await v.find();await v.bulkRemove(b.map(C=>C.id))}const E=w.map(b=>({id:jr(),tableId:t,data:b,updatedAt:ze}));return await v.bulkInsert(E),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:w.length}),{name:o,rowCount:w.length,hasMore:W,truncated:P,pages:L,count:h,error:N}}finally{ln(t,!1)}}function eh(e,t){const r=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,i=`${t.imported} table${t.imported===1?"":"s"}`,n=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${i} (${r});${n} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.partial.length>0){e.ui.dialogs.toast(`Imported ${i} (${r}).${n} ${t.partial.length} loaded partially (stopped early — the server may have rate-limited us): ${t.partial.join(", ")}. Use Refresh to fetch the rest.`,{kind:"warning",title:"Datasette import"});return}if(t.capped.length>0){e.ui.dialogs.toast(`Imported ${i} (${r}).${n} ${t.capped.length} capped at ${Nt.maxImportRows} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${i} (${r}) from Datasette.${n}`,{kind:"success",title:"Datasette import"})}async function th(e){const t=Ut.instance??nh(),r=(n,o)=>e.backend.fetch(n,o),i=await t.open({initialUrl:"https://datasette.io",async onTest(n,o){const l=bn(n),c=await bl(r,l.base,{token:o||void 0});if(l.db&&l.table){await Ss(sr(r,o||void 0),l);const g=c.version?` (Datasette ${c.version})`:"";return c.writable?`Reachable${g} — table found, signed in, read-write.`:`Reachable${g} — table found, read-only (no token / not authenticated).`}if(!c.reachable)return`Unreachable: ${c.error??"no response"}`;const h=c.version?` (Datasette ${c.version})`:"";return c.writable?`Reachable${h} — signed in, read-write.`:`Reachable${h} — read-only (no token / not authenticated).`},async onConnect(n,o){const l=bn(n);l.db&&l.table&&await Ss(sr(r,o||void 0),l)}});if(i)try{await vl(e,i.url,i.token)}catch(n){const o=n instanceof qt?n.message:n?.message??String(n);await e.ui.dialogs.alert(o,"Connect Datasette failed")}}function nh(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function vl(e,t,r){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=bn(t),o=(w,P)=>e.backend.fetch(w,P),l=sr(o,r||void 0),c=await bl(o,n.base,{token:r||void 0});r&&await e.store.settings.upsert({key:yl(n.base),value:r});let h;try{h=await wl(l,n,"Connect")}catch(w){const P=w instanceof qt?w.message:w?.message??String(w);throw new Error(`Couldn't read tables from ${ki(n.base)}: ${P}`)}if(h===null)return;if(h.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const g=[];for(const w of h){const P=await rh(e,i,n.base,w,c.writable,r);g.push({tableId:P,c:w})}const x=c.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${g.length} live table${g.length===1?"":"s"} from Datasette (${x}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:w,c:P}of g)ih(e,w,n.base,P,r)}async function rh(e,t,r,i,n,o){const l=(await e.store.tables.find()).find(x=>{const w=x.source?.config;return x.workspaceId===t&&x.source?.type==="datasette"&&w?.base===r&&w?.db===i.db&&w?.table===i.table});let c=i.pks??[];if(c.length===0){const x=sr((w,P)=>e.backend.fetch(w,P),o||void 0);try{c=await Ld(x,{base:r,db:i.db,table:i.table,query:{}})}catch{c=[]}}const h=l?.id??jr(),g={...l??{},id:h,workspaceId:t,name:`${i.db}/${i.table}`,code:xl(`${i.db}-${i.table}`),columns:l?.columns??[],view:l?.view??"table",source:{type:"datasette",writable:n,config:{base:r,db:i.db,table:i.table,pks:c}},updatedAt:Date.now()};return l?await e.store.tables.upsert(g):await e.store.tables.insert(g),h}async function ih(e,t,r,i,n){const o={base:r,db:i.db,table:i.table,query:{}},l=sr((c,h)=>e.backend.fetch(c,h),n||void 0);try{let c=[],h=!1;try{const N=await Ri(l,o);c=N.columns,h=N.typed}catch{}const{rows:g}=await Or(l,o,{maxRows:50,pageSize:50}),x=c.length===0?Di(g):h?c:Vs(c,g);if(x.length===0)return;const w=await e.store.tables.findOne(t);if(!w)return;const P=w.source?.config?.pks??[];let W=x.map(N=>P.includes(N.field)?{...N,unique:!0,notnull:!0}:N),L={};try{const N=await Ws(l,o),U=Ks(N,W);W=U.columns,L=U.patch}catch{}L=Gs(L,o.base,i.db,i.table),await e.store.tables.patch(t,{columns:W,...L,updatedAt:Date.now()})}catch{}}async function sh(e,t){const r=await e.store.tables.findOne(t);if(r)try{if(r.source?.type==="datasette"){const i=e.store.rows(t);typeof i.refresh=="function"&&await i.refresh();const n=await i.find();e.ui.dialogs.toast(`Reloaded ${n.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}else r.origin?.type==="datasette"&&await oh(e,r)}catch(i){const n=i instanceof qt?i.message:i?.message??String(i);e.ui.dialogs.toast(`Refresh failed: ${n}`,{kind:"error",title:"Refresh"})}}async function oh(e,t){const r=bn(t.origin.url),i=h=>e.backend.fetch(h);ln(t.id,!0);let n,o=[];try{let h=[],g=null,x=!1;try{const ke=await Ri(i,r);h=ke.columns,g=ke.count,x=ke.typed}catch{}g==null&&(g=await gl(i,r));const w=g&&g>0?Math.min(g,Nt.maxImportRows):0,{rows:P,hasMore:W,truncated:L,error:N,nextUrl:U}=await Or(i,r,{maxRows:Nt.maxImportRows,pageSize:Nt.pageSize,onProgress:ke=>{w>0&&ln(t.id,!0,Math.min(1,ke/w))}});let re=h.length===0?Di(P):x?h:Vs(h,P),ce={};try{const ke=await Ws(i,r),m=Ks(ke,re);re=m.columns,ce=m.patch}catch{}ce=Gs(ce,r.base,r.db,r.table);const be=t.columns.length===0,Q=ll(t.columns,re,t.deletedColumns);o=Q.newFields;const q=Date.now(),oe=Ys(N,U,P.length,g),ye=be?{columns:Q.columns,...ce,importResume:oe,updatedAt:q}:{columns:Q.columns,...ce.info?{info:ce.info}:{},importResume:oe,updatedAt:q};await e.store.tables.patch(t.id,ye);const $e=e.store.rows(t.id),ze=await $e.find();await $e.bulkRemove(ze.map(ke=>ke.id)),await $e.bulkInsert(P.map(ke=>({id:jr(),tableId:t.id,data:ke,updatedAt:q}))),n={rowCount:P.length,hasMore:W,truncated:L,error:N}}finally{ln(t.id,!1)}const l=[];n.error?l.push(`partial (${n.error})`):(n.hasMore||n.truncated)&&l.push(`capped at ${Nt.maxImportRows}`),o.length>0&&l.push(`${o.length} new column${o.length===1?"":"s"}`);const c=l.length?` — ${l.join(", ")}`:"";e.ui.dialogs.toast(`Refreshed ${n.rowCount} rows from ${r.db}/${r.table}${c}.`,{kind:n.error||n.hasMore||n.truncated||o.length>0?"warning":"success",title:"Refresh"}),o.length>0&&lh(t.id,r,o)}async function ah(e,t){const r=await e.store.tables.findOne(t),i=r?.importResume;if(!r||!r.origin?.url||!i)return;const n=bn(r.origin.url),o=P=>e.backend.fetch(P),l=i.loadedRows,c=i.totalCount??null,h=c&&c>0?Math.min(c,Nt.maxImportRows):0;ln(t,!0,h>0?Math.min(1,l/h):void 0);let g=0,x;try{const P=await Or(o,n,{startUrl:i.nextUrl,maxRows:Math.max(0,Nt.maxImportRows-l),pageSize:Nt.pageSize,onProgress:N=>{h>0&&ln(t,!0,Math.min(1,(l+N)/h))}});g=P.rows.length;const W=Date.now();await e.store.rows(t).bulkInsert(P.rows.map(N=>({id:jr(),tableId:t,data:N,updatedAt:W}))),x={error:P.error,nextUrl:P.nextUrl};const L=Ys(P.error,P.nextUrl,l+g,c);await e.store.tables.patch(t,{importResume:L,updatedAt:W})}catch(P){const W=P instanceof qt?P.message:P?.message??String(P);e.ui.dialogs.toast(`Couldn't resume ${n.db}/${n.table}: ${W}. Try again later.`,{kind:"error",title:"Resume import"});return}finally{ln(t,!1)}const w=l+g;x.error?e.ui.dialogs.toast(`Resumed ${n.db}/${n.table}: +${g} rows (${w} total) — interrupted again (${x.error}). Resume to continue.`,{kind:"warning",title:"Resume import"}):e.ui.dialogs.toast(`Finished ${n.db}/${n.table}: +${g} rows (${w} total).`,{kind:"success",title:"Resume import"})}function lh(e,t,r){const i=r.join(", "),n=r.length!==1,o=`Refreshing ${t.db}/${t.table} revealed ${r.length} new column${n?"s":""}: ${i}. Review, reorder or hide ${n?"them":"it"} here.`;document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:e,notice:o}}))}function xl(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function jr(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const ch=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:vl,importDatasette:Xs,init:Yd,meta:Vd},Symbol.toStringTag,{value:"Module"})),uh={id:"sql-export",name:"SQL Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-export.ts"};function dh(){}async function $l(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),i=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const n of r){const o=await e.store.rows(n.id).find();i.push(hh(n,o),"")}return i.push("COMMIT;",""),i.join(`
`)}function hh(e,t){const r=_s(e.code||e.name||`table_${e.id}`),i=['  "__id" TEXT PRIMARY KEY',...e.columns.map(o=>`  ${fh(o)}`)],n=[`DROP TABLE IF EXISTS "${r}";`,`CREATE TABLE "${r}" (`,i.join(`,
`),");"];if(t.length>0){const l=["__id",...e.columns.map(c=>c.field)].map(c=>`"${_s(c)}"`).join(", ");for(const c of t){const h=[ua(c.id),...e.columns.map(g=>ua(c.data[g.field],g.type))];n.push(`INSERT INTO "${r}" (${l}) VALUES (${h.join(", ")});`)}}return n.join(`
`)}function fh(e){const t=[`"${_s(e.field)}"`,ph(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function ph(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function ua(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const r=mh(e);return r===null?"NULL":ci(r)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?ci(e.toISOString()):ci(typeof e=="string"?e:JSON.stringify(e))}function mh(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?da(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(r)return`${r[1]}${r[2]}${r[3]}`;const i=new Date(t);return Number.isFinite(i.getTime())?da(i):null}return null}function da(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),r=String(e.getUTCMonth()+1).padStart(2,"0"),i=String(e.getUTCDate()).padStart(2,"0");return`${t}${r}${i}`}function ci(e){return`'${e.replace(/'/g,"''")}'`}function _s(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const gh=Object.freeze(Object.defineProperty({__proto__:null,init:dh,meta:uh,serializeWorkspaceAsSql:$l},Symbol.toStringTag,{value:"Module"})),bh={id:"dump-export",name:"Dump Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/dump-export.ts"};function yh(e){e.ui.registerFooterButton({id:"export:menu",label:"Export",icon:"download",tooltip:"Export the current workspace (JSON or SQL)",onClick:async(t,r)=>{const i=t.workspaceId();if(!i)return;const{AnchoredMenu:n}=await Tn(async()=>{const{AnchoredMenu:c}=await import("./anchored-menu-NE4wsaIU.js");return{AnchoredMenu:c}},[]),o=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),l=await n.open(o,[{id:"json",label:"JSON dump (.db.json)",icon:"data_object"},{id:"sql",label:"SQL script (.sql)",icon:"storage"}]);if(l)try{if(l==="json"){const c=await ji(t);await t.backend.saveFile(`workspace-${i}.db.json`,c,"application/json")}else if(l==="sql"){const c=await $l(t);await t.backend.saveFile(`workspace-${i}.sql`,c,"application/sql")}}catch(c){t.ui.dialogs.toast(`Export failed: ${c.message}`,{kind:"error",title:"Export"})}}})}async function ji(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),i={workspaceId:t,exportedAt:Date.now(),tables:[]};for(const n of r){const o=await e.store.rows(n.id).find();i.tables.push({name:n.name,columns:n.columns,rows:o.map(l=>l.data),...n.windowGeometry?{windowGeometry:n.windowGeometry}:{},...n.sortColumn?{sortColumn:n.sortColumn,sortAsc:n.sortAsc??!0}:{},...n.source?{source:n.source}:{},...n.origin?{origin:n.origin}:{}})}return JSON.stringify(i,null,2)}const wh=Object.freeze(Object.defineProperty({__proto__:null,init:yh,meta:bh,serializeWorkspace:ji},Symbol.toStringTag,{value:"Module"})),vh={id:"gist-sync",name:"Gist Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/gist-sync.ts"},xh="gist:",$h=["gist:","datasette:token:","server-sync:"];function kl(e){return!$h.some(t=>e.startsWith(t))}const ha='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>';function kh(e){e.ui.registerSettings("gist-sync","Gist Sync",[{key:"user",label:"GitHub user",type:"string",scope:"workspace",description:"GitHub username that owns the gist."},{key:"gist_id",label:"Gist ID",type:"string",scope:"workspace",description:"Leave empty to create a new gist on the first Push."},{key:"gist_token",label:"GitHub token (PAT)",type:"secret",scope:"user",description:'Personal access token with the "gist" scope. Stored on this device only (not synced).'}]),e.ui.registerFooterButton({id:"gist-sync:menu",label:"Gist",icon:ha,tooltip:"Gist sync — push, pull, share…",onClick:async(t,r)=>{const{AnchoredMenu:i}=await Tn(async()=>{const{AnchoredMenu:l}=await import("./anchored-menu-NE4wsaIU.js");return{AnchoredMenu:l}},[]),n=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await i.open(n,[{id:"push",label:"Push",icon:"cloud_upload"},{id:"pull",label:"Pull",icon:"cloud_download"},{id:"settings",label:"Settings",icon:"settings"},{id:"share",label:"Share",icon:"share"},{id:"view",label:"View gist",icon:"open_in_new"}]);if(o)try{o==="push"?await Th(t):o==="pull"?await Sl(t):o==="settings"?await Eh(t):o==="share"?await Sh(t):o==="view"&&await _h(t)}catch(l){t.ui.dialogs.toast(`Gist ${o} failed: ${l.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerTableButton({id:"gist-sync:table",label:"Gist",icon:ha,tooltip:"Gist sync for this table — push, pull, view file",onClick:async(t,r)=>{const{AnchoredMenu:i}=await Tn(async()=>{const{AnchoredMenu:l}=await import("./anchored-menu-NE4wsaIU.js");return{AnchoredMenu:l}},[]),n=r.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await i.open(n,[{id:"push",label:"Push this table",icon:"cloud_upload"},{id:"pull",label:"Pull this table",icon:"cloud_download"},{id:"view",label:"View gist file",icon:"open_in_new"}]);if(o)try{o==="push"?await Ah(t,r.tableId):o==="pull"?await Ph(t,r.tableId):o==="view"&&await Ih(t,r.tableId)}catch(l){t.ui.dialogs.toast(`Gist ${o} failed: ${l.message}`,{kind:"error",title:"Gist sync"})}}})}async function Ch(e){const t=new URLSearchParams(location.hash.replace(/^#/,"")).get("gist");if(!t)return;history.replaceState(null,"",location.pathname+location.search);let r;try{r=atob(t)}catch{return}const i=Qs(r);if(!i){await e.ui.dialogs.alert("The shared gist link is invalid.","Gist sync");return}await e.ui.dialogs.confirm(`Load shared workspace from gist ${i.gistId||"(new)"} (owner: ${i.user})?

This pulls its tables into the current workspace.`,"Gist sync")&&(await Fr(e,i),await Sl(e))}async function Cl(e){const t=e.workspaceId();return`${xh}${t??"default"}`}async function lr(e){const[t,r,i]=await Promise.all([e.settings.get("gist-sync","user"),e.settings.get("gist-sync","gist_id"),e.settings.get("gist-sync","gist_token")]);if(t&&i)return{user:t,gistId:r??"",token:i};const o=(await e.store.settings.findOne(await Cl(e)))?.value;if(o?.user&&o?.token){const l={user:o.user,gistId:o.gistId??"",token:o.token};return await Fr(e,l),l}return null}async function Fr(e,t){await e.settings.set("gist-sync","user",t.user),await e.settings.set("gist-sync","gist_id",t.gistId),await e.settings.set("gist-sync","gist_token",t.token),await e.store.settings.upsert({key:await Cl(e),value:t})}function Qs(e){const t={};for(const r of e.split(";")){const i=r.indexOf("=");if(i<0)continue;const n=r.slice(0,i).trim(),o=r.slice(i+1).trim();n&&(t[n]=o)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function Js(e){const t=await lr(e);if(t)return t;const r=await e.ui.dialogs.prompt(`Connection string format:
user=<github-user>;gist_id=<id>;gist_token=<pat>;

Leave gist_id empty to create a new gist on first Push.`,"","Gist credentials");if(!r)return null;const i=Qs(r);return i?(await Fr(e,i),i):(await e.ui.dialogs.alert("Could not parse connection string. Make sure it contains user=… and gist_token=….","Gist credentials"),null)}function El(e){return`user=${e.user};gist_id=${e.gistId};gist_token=${e.token}`}async function Eh(e){const t=await lr(e),r=t?El(t):"",i=await e.ui.dialogs.prompt(`Edit the Gist connection string:
user=<github-user>;gist_id=<id>;gist_token=<pat>;

Leave gist_id empty to create a new gist on first Push.`,r,"Gist settings");if(i==null)return;const n=Qs(i);if(!n){await e.ui.dialogs.alert("Could not parse connection string. Make sure it contains user=… and gist_token=….","Gist settings");return}await Fr(e,n),e.ui.dialogs.toast("Gist settings saved.",{kind:"success",title:"Gist sync"})}async function Sh(e){const t=await lr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("Configure a gist and Push first — there is nothing to share yet.","Gist sync");return}const i=`${location.origin+location.pathname}#gist=${encodeURIComponent(btoa(El(t)))}`,{GistShareDialog:n}=await Tn(async()=>{const{GistShareDialog:o}=await import("./gist-share-dialog-DiCyFmeW.js");return{GistShareDialog:o}},[]);await n.open(i)}async function _h(e){const t=await lr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist configured yet — Push first.","Gist sync");return}window.open(`https://gist.github.com/${t.user}/${t.gistId}`,"_blank","noopener")}async function Th(e){const t=await Js(e);if(!t)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=(await e.store.tables.find()).filter(L=>L.workspaceId===r);if(i.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const n=1e8,o=1e7,l={},c=[],h=[];for(const L of i){const N=await e.store.rows(L.id).find(),U=JSON.stringify(_l(L,N),null,2),re=`${L.name} (${(U.length/1e6).toFixed(2)} MB)`;U.length>n?c.push(re):U.length>o&&h.push(re),l[`${zr(L.name)}.table.json`]={content:U}}if(c.length>0||h.length>0){const L=[];if(c.length>0&&L.push(`Over Gist's 100 MB per-file limit — GitHub will REJECT these:
${c.join(`
`)}`),h.length>0&&L.push(`Large (over 10 MB) — Gist sync will be slow and less reliable:
${h.join(`
`)}`),!await e.ui.dialogs.confirm(`${L.join(`

`)}

To reduce size: remove unnecessary columns, limit the number of rows, or mark the table no-persist/no-sync.

Push anyway?`,"Gist size warning"))return}const g=(await e.store.viewTemplates.find()).filter(L=>L.workspaceId===r),x=(await e.store.viewInstances.find()).filter(L=>L.workspaceId===r),w=(await e.store.settings.find()).filter(L=>kl(L.key));l["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1",viewTemplates:g,viewInstances:x,settings:w},null,2)};let P;if(t.gistId){const L=await fetch(`https://api.github.com/gists/${t.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:l,description:`easyDBAccess workspace: ${r}`})});if(!L.ok)throw new Error(await _r(L));P=await L.json()}else{const L=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:l})});if(!L.ok)throw new Error(await _r(L));P=await L.json(),t.gistId=P.id,await Fr(e,t)}const W=P.html_url??`https://gist.github.com/${t.user}/${P.id}`;e.ui.dialogs.toast(`Pushed ${i.length} table${i.length===1?"":"s"}.  ${W}`,{kind:"success",title:"Gist sync"})}async function Sl(e){const t=await Js(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=await fetch(`https://api.github.com/gists/${t.gistId}`,{headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json"}});if(!i.ok)throw new Error(await _r(i));const n=await i.json(),o=Object.entries(n.files).filter(([U])=>U.endsWith(".table.json")&&!U.startsWith("_easydb"));if(o.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const l=(await e.store.tables.find()).filter(U=>U.workspaceId===r),c=new Map(l.map(U=>[U.name.toLowerCase(),U])),{TopProgress:h}=await Tn(async()=>{const{TopProgress:U}=await Promise.resolve().then(()=>jl);return{TopProgress:U}},void 0),g=h.begin("Pulling from gist…");let x=0;const w=[],P=new Map;try{for(const[U,[re,ce]]of o.entries())try{const be=await Ci(ce),Q=JSON.parse(be);if(!Q.name||!Array.isArray(Q.columns))throw new Error("unexpected file shape (missing name/columns)");let q;const oe=c.get(Q.name.toLowerCase());if(oe){q=await e.store.tables.patch(oe.id,{title:Q.title,columns:Q.columns,updatedAt:Date.now()});const $e=e.store.rows(oe.id),ze=await $e.find();await $e.bulkRemove(ze.map(ke=>ke.id))}else q=await e.store.tables.insert({id:Ts(),workspaceId:r,name:Q.name,title:Q.title,code:zr(Q.name),columns:Q.columns,view:"table",updatedAt:Date.now()});const ye=(Q.rows??[]).map($e=>({id:Ts(),tableId:q.id,data:$e,updatedAt:Date.now()}));await e.store.rows(q.id).bulkInsert(ye),P.set(Q.name,q.id),x++}catch(be){w.push({file:re,error:be.message})}finally{g.fraction((U+1)/o.length)}}finally{g.done()}let W=0,L="";const N=n.files["_easydb.workspace.json"];if(N)try{const U=await Ci(N),re=JSON.parse(U),ce=re.viewTemplates??[],be=re.viewInstances??[],Q=re.settings??[];for(const q of ce)await e.store.viewTemplates.upsert({...q,workspaceId:r});for(const q of be){let oe;q.tableName&&(oe=P.get(q.tableName)??c.get(q.tableName)?.id),oe??=q.tableId,oe&&(await e.store.viewInstances.upsert({...q,workspaceId:r,tableId:oe}),W++)}for(const q of Q)kl(q.key)&&await e.store.settings.upsert(q)}catch(U){L=`Workspace metadata import failed: ${U.message}`}if(w.length>0){const U=w.map(re=>`• ${re.file}: ${re.error}`).join(`
`);e.ui.dialogs.toast(`Pulled ${x} of ${o.length} tables. ${w.length} failed:
${U}${L?`
${L}`:""}`,{kind:"warning",title:"Gist sync"})}else{const U=W>0?` (+${W} views)`:"";e.ui.dialogs.toast(`Pulled ${x} table${x===1?"":"s"} from gist ${t.gistId}.${U}`,{kind:"success",title:"Gist sync"}),L&&e.ui.dialogs.toast(L,{kind:"warning",title:"Gist sync"})}}async function Ah(e,t){const r=await Js(e);if(!r)return;if(!r.gistId){await e.ui.dialogs.alert("No gist yet — use the main Gist button to Push the whole workspace first.","Gist sync");return}const i=await e.store.tables.findOne(t);if(!i)return;const n=await e.store.rows(t).find(),o=JSON.stringify(_l(i,n),null,2),l={[`${zr(i.name)}.table.json`]:{content:o}},c=await fetch(`https://api.github.com/gists/${r.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:l})});if(!c.ok)throw new Error(await _r(c));e.ui.dialogs.toast(`Pushed "${i.name}" to gist.`,{kind:"success",title:"Gist sync"})}async function Ph(e,t){const r=await lr(e);if(!r||!r.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const i=await e.store.tables.findOne(t);if(!i)return;const n=`${zr(i.name)}.table.json`,o=await fetch(`https://api.github.com/gists/${r.gistId}`,{headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)throw new Error(await _r(o));const c=(await o.json()).files[n];if(!c){await e.ui.dialogs.alert(`No file "${n}" in the gist for this table.`,"Gist sync");return}const h=await Ci(c),g=JSON.parse(h);if(!g.name||!Array.isArray(g.columns))throw new Error("unexpected file shape (missing name/columns)");await e.store.tables.patch(t,{title:g.title,columns:g.columns,updatedAt:Date.now()});const x=e.store.rows(t),w=await x.find();await x.bulkRemove(w.map(W=>W.id));const P=(g.rows??[]).map(W=>({id:Ts(),tableId:t,data:W,updatedAt:Date.now()}));await x.bulkInsert(P),e.ui.dialogs.toast(`Pulled "${i.name}" from gist.`,{kind:"success",title:"Gist sync"})}async function Ih(e,t){const r=await lr(e);if(!r||!r.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const i=await e.store.tables.findOne(t);if(!i)return;const n=`file-${zr(i.name)}-table-json`;window.open(`https://gist.github.com/${r.user}/${r.gistId}#${n}`,"_blank","noopener")}function _l(e,t){const r=e.columns.map(i=>i.field);return{name:e.name,title:e.title,columns:e.columns,rows:t.map(i=>{const n={};for(const o of r)n[o]=i.data[o];return n})}}async function Ci(e,t=r=>fetch(r)){if(!e.truncated)return e.content;if(!e.raw_url)throw new Error("GitHub truncated this file but returned no raw_url");const r=await t(e.raw_url);if(!r.ok)throw new Error(`raw fetch failed: ${r.status} ${r.statusText}`);return r.text()}async function _r(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}function zr(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Ts(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Dh=Object.freeze(Object.defineProperty({__proto__:null,fetchGistFileContent:Ci,init:kh,load:Ch,meta:vh},Symbol.toStringTag,{value:"Module"})),Tl="server-sync:url";function Al(e){return`server-sync:etag:${e}`}async function Pl(e){const r=(await e.store.settings.findOne(Tl))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}async function Rh(e,t){await e.store.settings.upsert({key:Tl,value:t.replace(/\/+$/,"")})}async function Il(e,t){const i=(await e.store.settings.findOne(Al(t)))?.value;return typeof i=="string"?i:null}async function Hn(e,t,r){await e.store.settings.upsert({key:Al(t),value:r})}function Fi(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function fa(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function Dl(e,t,r){const i=Dr(r,t),n=(await e.store.tables.find()).filter(l=>l.workspaceId===t);for(const l of n){const c=e.store.rows(l.id),h=await c.find();await c.bulkRemove(h.map(g=>g.id)),await e.store.tables.remove(l.id)}let o=0;for(const l of i){const c=pa(),h=await e.store.tables.insert({id:c,workspaceId:t,name:l.name,code:Oh(l.name),columns:l.columns,view:"table",...l.windowGeometry?{windowGeometry:l.windowGeometry}:{},...l.sortColumn?{sortColumn:l.sortColumn,sortAsc:l.sortAsc??!0}:{},updatedAt:Date.now()}),g=l.rows.map(x=>({id:pa(),tableId:h.id,data:x,updatedAt:Date.now()}));await e.store.rows(h.id).bulkInsert(g),o++}return o}function Oh(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function pa(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const jh={id:"server-sync",name:"Server Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/server-sync.ts"};function Fh(e){e.ui.registerSettings("server-sync","Server Sync",[{key:"url",label:"Server URL",type:"string",scope:"workspace",description:"Base URL of the sync server, e.g. http://localhost:3000"}]),e.ui.registerFooterButton({id:"server-sync:menu",label:"Sync",icon:"cloud_sync",tooltip:"Server sync — push or pull this workspace",onClick:async(t,r)=>{const{AnchoredMenu:i}=await Tn(async()=>{const{AnchoredMenu:l}=await import("./anchored-menu-NE4wsaIU.js");return{AnchoredMenu:l}},[]),n=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await i.open(n,[{id:"push",label:"Push (↑)",icon:"cloud_upload"},{id:"pull",label:"Pull (↓)",icon:"cloud_download"}]);if(o)try{o==="push"?await zh(t):o==="pull"&&await Lh(t)}catch(l){t.ui.dialogs.toast(`${o==="push"?"Push":"Pull"} failed: ${l.message}`,{kind:"error",title:"Server sync"})}}})}async function zh(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await Rl(e);if(!r)return;const i=await ji(e),n=await Il(e,t),o={"Content-Type":"application/json"};n&&(o["If-Match"]=`"${n}"`);let l=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:o,body:i});if(l.status===412){const h=await l.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){h.currentEtag&&await Hn(e,t,h.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}l=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:i})}if(!l.ok)throw new Error(await Ol(l));const c=Fi(l.headers.get("ETag"));c&&await Hn(e,t,c),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${r}.`,{kind:"success",title:"Server sync"})}async function Lh(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await Rl(e);if(!r||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const n=await fetch(`${r}/sync/${encodeURIComponent(t)}`);if(n.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!n.ok)throw new Error(await Ol(n));const o=Fi(n.headers.get("ETag")),l=await n.json(),c=await Dl(e,t,l);o&&await Hn(e,t,o),e.ui.dialogs.toast(`Pulled ${c} table${c===1?"":"s"} from ${r}.`,{kind:"success",title:"Server sync"})}async function Rl(e){const t=await Pl(e);if(t)return t;const r=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!r)return null;try{new URL(r)}catch{return await e.ui.dialogs.alert(`"${r}" is not a valid URL.`,"Server sync"),null}return await Rh(e,r),r.replace(/\/+$/,"")}async function Ol(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Mh=Object.freeze(Object.defineProperty({__proto__:null,init:Fh,meta:jh},Symbol.toStringTag,{value:"Module"})),Bh={id:"new-table",name:"New Table",type:"ui",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/new-table-button.ts"};function Nh(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const Uh=Object.freeze(Object.defineProperty({__proto__:null,init:Nh,meta:Bh},Symbol.toStringTag,{value:"Module"})),qh={id:"plugin-manager-button",name:"Plugin Manager",type:"ui",version:"0.1.0",description:"Registers a footer button that opens the Plugin Manager dialog.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/plugin-manager-button.ts",fixed:!0};function Hh(e){e.ui.registerFooterButton({id:"plugin-manager:open",label:"Plugins",icon:"extension",tooltip:"Add, disable, or remove plugins",onClick:()=>e.ui.openPluginManager()})}const Wh=Object.freeze(Object.defineProperty({__proto__:null,init:Hh,meta:qh},Symbol.toStringTag,{value:"Module"})),Kh={id:"core-renderers",name:"Core Renderers",type:"cell-renderer",version:"0.1.0",description:"Built-in cell renderers: date, datetime, boolean, script.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/core-renderers.ts",fixed:!0};function Vh(e){customElements.get("cell-date")||customElements.define("cell-date",Gh),customElements.get("cell-datetime")||customElements.define("cell-datetime",Yh),customElements.get("cell-boolean")||customElements.define("cell-boolean",Xh),customElements.get("cell-script")||customElements.define("cell-script",Jh),e.ui.registerCellRenderer("date","cell-date"),e.ui.registerCellRenderer("datetime","cell-datetime"),e.ui.registerCellRenderer("boolean","cell-boolean"),e.ui.registerCellRenderer("script","cell-script")}class Gh extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="date",t.value=ef(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class Yh extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="datetime-local",t.value=tf(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class Xh extends HTMLElement{constructor(){super(...arguments),this._value=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="checkbox",t.checked=Qh(this._value),t.style.cssText="transform:translateY(1px);cursor:pointer",t.addEventListener("change",()=>this.commit(t.checked)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Qh(e){return e===!0||e==="true"||e===1||e==="1"}class Jh extends HTMLElement{constructor(){super(...arguments),this._column=null,this._row={}}set column(t){this._column=t,this.render()}get column(){return this._column}set row(t){this._row=t??{},this.render()}get row(){return this._row}set value(t){}get value(){}connectedCallback(){this.render()}render(){this.innerHTML="";const t=this._column?.script;if(!t||!t.trim()){const o=document.createElement("span");o.textContent="(no script)",o.style.cssText="color:#9ca3af;font-style:italic",this.append(o);return}let r;try{r=Zh(t)}catch(o){this.append(ms("compile error",o));return}let i;try{i=r(this._row)}catch(o){this.append(ms("runtime error",o));return}if(typeof i!="string"){this.append(ms("render(row) did not return a string",null));return}const n=document.createElement("span");n.style.cssText="display:inline-block;width:100%",n.innerHTML=i,this.append(n)}}const ma=new Map;function Zh(e){const t=ma.get(e);if(t)return t;const r=new Function("row",`${e}
return render(row);`);return ma.set(e,r),r}function ms(e,t){const r=document.createElement("span");if(r.textContent=`⚠ ${e}`,r.style.cssText="color:#b91c1c;font-size:0.8em;font-family:ui-monospace,SFMono-Regular,monospace",t){const i=t instanceof Error?t.message:String(t);r.title=i}return r}function ef(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function tf(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}const nf=Object.freeze(Object.defineProperty({__proto__:null,init:Vh,meta:Kh},Symbol.toStringTag,{value:"Module"})),rf={id:"cell-color",name:"Cell Color",type:"cell-renderer",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2h2.3c2 0 3.6-1.6 3.6-3.6C20.7 6 16.9 3 12 3z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="11" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-color.ts"};function sf(e){customElements.get("cell-color")||customElements.define("cell-color",of),e.ui.registerCellRenderer("color","cell-color")}class of extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,r,i){this.value=i}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const r=document.createElement("input");r.type="color",r.value=t,r.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",r.addEventListener("change",()=>this.commit(r.value)),this.append(r)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const af=Object.freeze(Object.defineProperty({__proto__:null,init:sf,meta:rf},Symbol.toStringTag,{value:"Module"})),lf={id:"cell-image",name:"Cell Image",type:"cell-renderer",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-image.ts"};function cf(e){customElements.get("cell-image")||customElements.define("cell-image",uf),e.ui.registerCellRenderer("image","cell-image")}class uf extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("span");if(t.style.cssText="display:inline-flex;align-items:center;gap:0.4rem",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const i=document.createElement("img");i.src=this._value,i.alt="",i.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(i)}else{const i=document.createElement("span");i.style.color="#9ca3af",i.textContent="no image",t.append(i);const n=document.createElement("button");n.type="button",n.textContent="upload",n.style.cssText="padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",n.addEventListener("click",()=>this.pickFile()),t.append(n)}this.append(t)}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const r=t.files?.[0];if(!r)return;const i=new FileReader;i.onload=()=>this.commit(String(i.result)),i.readAsDataURL(r)}),t.click()}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const df=Object.freeze(Object.defineProperty({__proto__:null,init:cf,meta:lf},Symbol.toStringTag,{value:"Module"})),hf={id:"cell-link",name:"Cell Link",type:"cell-renderer",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-link.ts"};function ff(e){customElements.get("cell-link")||customElements.define("cell-link",pf),e.ui.registerCellRenderer("link","cell-link")}class pf extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1}set value(t){const r=t==null?"":String(t);this._value!==r&&(this._value=r,this._editing=!1,this.render())}get value(){return this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="";const t=this._value,r=this._editing?null:mf(t),i=!this._editing&&!r?gf(t):null,n=!this._editing&&!r&&!i?bf(t):null;if(r||i||n){const o=document.createElement("span");o.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const l=document.createElement("a");l.href=r?t:i?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,r&&(l.target="_blank",l.rel="noopener noreferrer"),l.textContent=t,l.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",l.title=r?`Open ${t}`:i?`Email ${t}`:`Call ${t}`;const c=document.createElement("button");c.type="button",c.title="Edit",c.textContent="✎",c.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",c.addEventListener("click",h=>{h.preventDefault(),h.stopPropagation(),this._editing=!0,this.render()}),o.append(l,c),this.append(o)}else{const o=document.createElement("input");o.type="text",o.value=t,o.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",o.addEventListener("change",()=>this.commit(o.value)),o.addEventListener("keydown",l=>{l.key==="Enter"?(l.preventDefault(),this.commit(o.value)):l.key==="Escape"&&(this._editing=!1,this.render())}),this.append(o),this._editing&&setTimeout(()=>{o.focus(),o.select()},0)}}commit(t){this._value=t,this._editing=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function mf(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function gf(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function bf(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const r=t.replace(/\D/g,"");if(r.length<7||r.length>15)return null;const i=/[ ()\-.]/.test(t),n=t.startsWith("+");return!i&&!n&&r.length<10?null:t}const yf=Object.freeze(Object.defineProperty({__proto__:null,init:ff,meta:hf},Symbol.toStringTag,{value:"Module"}));var wf=Object.defineProperty,vf=Object.getOwnPropertyDescriptor,zi=(e,t,r,i)=>{for(var n=i>1?void 0:i?vf(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&wf(t,r,n),n};let ui=null;function xf(){return ui||(ui=document.createElement("top-progress"),document.body.appendChild(ui)),ui}let Pn=class extends Ne{constructor(){super(...arguments),this.visible=!1,this.frac=null,this.label="",this.active=new Set}static begin(e=""){return xf().begin(e)}begin(e){const t=Symbol("progress");return this.active.add(t),this.label=e,this.frac=null,this.visible=!0,{fraction:r=>{this.active.has(t)&&(this.frac=r)},done:()=>{this.active.delete(t),this.active.size===0&&(this.visible=!1,this.frac=null,this.label="")}}}render(){if(!this.visible)return R``;const e=this.frac!=null;return R`<div
      class="track"
      role="progressbar"
      aria-label=${this.label||"Loading"}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow=${e?Math.round(this.frac*100):""}
    >
      ${e?R`<div
            class="bar determinate"
            style="width:${Math.round(this.frac*100)}%"
          ></div>`:R`<div class="bar indet"></div>`}
    </div>`}};Pn.styles=Ye`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      z-index: 10000;
      pointer-events: none;
    }
    .track {
      position: absolute;
      inset: 0;
      overflow: hidden;
    }
    .bar {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      background: #2563eb;
    }
    .bar.determinate {
      transition: width 0.15s ease;
    }
    .bar.indet {
      width: 35%;
      animation: eda-top-progress 1.1s ease-in-out infinite;
    }
    @keyframes eda-top-progress {
      0% {
        left: -35%;
      }
      100% {
        left: 100%;
      }
    }
  `;zi([K()],Pn.prototype,"visible",2);zi([K()],Pn.prototype,"frac",2);zi([K()],Pn.prototype,"label",2);Pn=zi([nt("top-progress")],Pn);const jl=Object.freeze(Object.defineProperty({__proto__:null,get TopProgress(){return Pn}},Symbol.toStringTag,{value:"Module"}));var $f=Object.defineProperty,kf=Object.getOwnPropertyDescriptor,Fl=(e,t,r,i)=>{for(var n=i>1?void 0:i?kf(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&$f(t,r,n),n};function ga(e){return(gn.instance??Cf()).open(e)}function Cf(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let gn=class extends Ne{constructor(){super(...arguments),this.rows=[],this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((r,i)=>{const n=this.rows[i],o=n.field.trim(),l=n.label.trim()||o;return{...r,field:o,label:l,hidden:n.hidden}});this.finish(t)},this.toggleAllHidden=()=>{const e=this.rows.length>0&&this.rows.every(t=>t.hidden);this.rows=this.rows.map(t=>({...t,hidden:!e}))}}connectedCallback(){super.connectedCallback(),gn.instance=this}disconnectedCallback(){super.disconnectedCallback(),gn.instance===this&&(gn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Vt(this.dialogEl,e)}open(e){return this.source=e,this.rows=e.map(t=>({field:t.field,label:t.label,hidden:!!t.hidden})),new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((r,i)=>{const n=r.field.trim().toLowerCase();if(n===""){e.add(i);return}(t.get(n)??t.set(n,[]).get(n)).push(i)});for(const r of t.values())if(r.length>1)for(const i of r)e.add(i);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,r){this.rows=this.rows.map((i,n)=>n===e?{...i,[t]:r}:i)}setHidden(e,t){this.rows=this.rows.map((r,i)=>i===e?{...r,hidden:t}:r)}render(){const e=this.invalidIndices(),t=e.size;return R`
      <dialog @cancel=${this.onCancel} @keydown=${Kt}>
        <button type="button" class="close-x" title="Close" @click=${()=>this.finish(null)}>
          ×
        </button>
        <form @submit=${this.submit}>
          <div class="dialog-header">
            <h2>Edit columns</h2>
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
              ${this.rows.map((r,i)=>R`
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
    `}};gn.instance=null;gn.styles=[Wt,Ye`
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
    `];Fl([K()],gn.prototype,"rows",2);gn=Fl([nt("column-names-dialog")],gn);function Ef(e){let t;try{t=new URL(e)}catch{return e}const r=t.hostname.toLowerCase();if(r==="github.com"||r==="www.github.com"){const i=t.pathname.split("/").filter(Boolean);if(i.length>=5&&(i[2]==="blob"||i[2]==="raw")){const n=i[0],o=i[1];let l=i.slice(3);return l.length>=3&&l[0]==="refs"&&(l[1]==="heads"||l[1]==="tags")&&(l=l.slice(2)),`https://raw.githubusercontent.com/${[n,o,...l].join("/")}`}}return e}async function Sf(e,t){const r=Number(e.headers?.get?.("content-length")),i=e.body?.getReader?.();if(i&&Number.isFinite(r)&&r>0){const n=[];let o=0;for(;;){const{done:h,value:g}=await i.read();if(h)break;g&&(n.push(g),o+=g.length,t?.(Math.min(1,o/r)))}const l=new Uint8Array(o);let c=0;for(const h of n)l.set(h,c),c+=h.length;return new TextDecoder().decode(l)}return await e.text()}var _f=Object.defineProperty,Tf=Object.getOwnPropertyDescriptor,tn=(e,t,r,i)=>{for(var n=i>1?void 0:i?Tf(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&_f(t,r,n),n};const Af="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",Pf="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",If='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',ba=[{label:"Northwind — sample database (JSON dump)",url:Af,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:Pf,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],Df={id:"import-data",name:"Import Data",type:"importer",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/import-data.ts"};function Rf(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:If,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>Lf(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:r})=>Ff(t,r)})}const ya=50*1024*1024;function wa(e){try{return new URL(e).host}catch{return e}}async function Of(e){try{return(await e.text()).replace(/\s+/g," ").trim().slice(0,300)}catch{return""}}async function jf(e,t,r={}){const i=Ef(t),n=r.slowMs??2e3;let o=setTimeout(()=>{o=void 0,r.onSlow?.()},n);const l=()=>{o!==void 0&&(clearTimeout(o),o=void 0)};try{let c;try{c=await e.backend.fetch(i)}catch(g){throw new Error(`Could not reach ${wa(i)} — no response. The server may be down, blocking cross-origin (CORS) requests, or the transfer may have failed (e.g. a very large file). [${g.message}]`)}if(!c.ok){const g=await Of(c);throw new Error(`HTTP ${c.status} ${c.statusText||""}`.trim()+(g?` — ${g}`:""))}const h=Number(c.headers.get("content-length"));if(Number.isFinite(h)&&h>ya)throw new Error(`Response is ${(h/(1024*1024)).toFixed(1)} MB, over the ${ya/(1024*1024)} MB browser import limit. Import a smaller extract, or use a server/Datasette connection for large datasets.`);try{return await Sf(c,r.onProgress)}catch(g){throw new Error(`Failed reading the response body from ${wa(i)}: ${g.message}`)}}finally{l()}}async function As(e,t,r){const i={handle:null};try{return await jf(e,t,{onSlow:()=>{i.handle=Pn.begin(r)},onProgress:n=>i.handle?.fraction(n)})}finally{i.handle?.done()}}async function Ff(e,t){const r=await e.store.tables.findOne(t),i=r?.origin;if(i?.url)try{const n=await As(e,i.url,`Reading ${r?.name??"data"}…`);let o;if(i.type==="csv")o=Ir(n).rows;else{const h=Dr(JSON.parse(n),r.name),g=h.find(x=>x.name===r.name)??(h.length===1?h[0]:void 0);if(!g)throw new Error(`"${r.name}" is no longer in the dump at ${i.url}`);o=g.rows}const l=e.store.rows(t),c=await l.find();await l.bulkRemove(c.map(h=>h.id)),await l.bulkInsert(o.map(h=>({id:zf(),tableId:t,data:h,updatedAt:Date.now()}))),e.ui.dialogs.toast(`Refreshed "${r.name}" (${o.length} rows).`,{kind:"success",title:"Refresh"})}catch(n){e.ui.dialogs.toast(`Couldn't refresh "${r?.name??t}": ${n.message}`,{kind:"error",title:"Refresh"})}}function zf(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function Lf(e){const r=await(ft.instance??Mf()).open({async listDatabases(x){const w=bn(x);return fl(P=>e.backend.fetch(P),w.base)}});if(!r)return;const{url:i,file:n,kind:o,dbChosen:l,editColumns:c,maxRows:h}=r,g=n?.name??i;try{if(n){if(o==="csv"){const x=h!=null?await nl(n,h):await n.text();await wi(e,x,n.name,{editColumns:c?ga:void 0,maxRows:h})}else{const x=await n.text();await vi(e,x,n.name,{maxRows:h})}e.ui.dialogs.toast(`Imported ${n.name}.`,{kind:"success",title:"Import"});return}if(o==="datasette")await Xs(e,i,{skipTablePicker:l});else if(o==="csv"){const x=await As(e,i,`Reading ${er(i)}…`);await wi(e,x,er(i),{editColumns:c?ga:void 0,maxRows:h,origin:{type:"csv",url:i}}),e.ui.dialogs.toast(`Imported ${er(i)}.`,{kind:"success",title:"Import"})}else{const x=await As(e,i,`Reading ${er(i)}…`);await vi(e,x,er(i),{originUrl:i,maxRows:h}),e.ui.dialogs.toast(`Imported ${er(i)}.`,{kind:"success",title:"Import"})}}catch(x){e.ui.dialogs.toast(`Could not import ${g}: ${x.message}`,{kind:"error",title:"Import"})}}function Mf(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function Bf(e){try{const t=new URL(e),r=t.hostname.toLowerCase(),i=[...t.searchParams.keys()].some(o=>o.startsWith("_")),n=r.includes("datasette")||i;return!i&&/\.csv$/i.test(t.pathname)?"csv":!i&&/\.json$/i.test(t.pathname)?"json":n?"datasette":"json"}catch{return"json"}}function va(e,t){if(t!=="datasette"||!e)return!1;try{const r=bn(e);return!r.db&&!r.table}catch{return!1}}function er(e){try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();return r&&r.length>0?r:"sample.db.json"}catch{return"sample.db.json"}}function Nf(e){return/\.csv$/i.test(e)?"csv":"json"}let ft=class extends Ne{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.file=null,this.maxRowsInput="",this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t&&!this.file)return;const r=this.resolvedKind,i=this.maxRows,n=r==="csv"&&this.editColumns;if(this.file){this.finish({url:"",file:this.file,kind:r,editColumns:n,maxRows:i});return}const o=r==="datasette"&&!!this.selectedDb&&va(t,r),l=o?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:l,kind:r,dbChosen:o,editColumns:n,maxRows:i})}}get resolvedKind(){return this.kind!=="auto"?this.kind:this.file?Nf(this.file.name):Bf(this.url.trim())}get maxRows(){const e=Math.floor(Number(this.maxRowsInput));return Number.isFinite(e)&&e>0?e:void 0}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),ft.instance=this}disconnectedCallback(){super.disconnectedCallback(),ft.instance===this&&(ft.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Vt(this.dialogEl,e)}open(e){return this.url="",this.kind="auto",this.presetIdx=-1,this.editColumns=!1,this.file=null,this.maxRowsInput="",this.resetDbList(),this.listDatabases=e?.listDatabases??null,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const r=ba[t];r&&(this.url=r.url,this.kind=r.kind)}onFileChange(e){const r=e.target.files?.[0]??null;this.file=r,r&&(this.url="",this.presetIdx=-1,this.resetDbList())}renderDbPicker(){return!this.listDatabases||!va(this.url.trim(),this.resolvedKind)?me:R`
      <label>
        Database
        <div class="row db-row">
          <select
            .value=${this.selectedDb}
            ?disabled=${!this.dbList||this.dbList.length===0}
            @change=${e=>{this.selectedDb=e.target.value}}
          >
            ${this.dbList?R`
                  <option value="" ?selected=${this.selectedDb===""}>
                    — all databases (choose tables next) —
                  </option>
                  ${this.dbList.map(e=>R`<option value=${e} ?selected=${e===this.selectedDb}>${e}</option>`)}
                `:R`<option value="">— not loaded —</option>`}
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
      ${this.dbError?R`<p class="hint error">${this.dbError}</p>`:me}
    `}render(){return R`
      <dialog @cancel=${this.onCancel} @keydown=${Kt}>
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
              <select
                .value=${String(this.presetIdx)}
                @change=${e=>this.onPresetChange(e)}
              >
                <option value="-1" ?selected=${this.presetIdx===-1}>— choose a sample —</option>
                ${ba.map((e,t)=>R`<option value=${String(t)} ?selected=${t===this.presetIdx}>
                      ${e.label}
                    </option>`)}
              </select>
            </label>

            <label>
              URL
              <input
                type="text"
                autofocus
                placeholder="https://… (JSON dump, .csv file, or Datasette table)"
                ?disabled=${!!this.file}
                .value=${this.url}
                @input=${e=>{this.url=e.target.value,this.presetIdx=-1,this.file=null,this.resetDbList()}}
              />
            </label>

            <label>
              …or upload a file
              <input
                type="file"
                accept=".csv,.json,.txt,text/csv,application/json"
                @change=${e=>this.onFileChange(e)}
              />
            </label>
            ${this.file?R`<p class="hint">
                  Importing <strong>${this.file.name}</strong> as
                  ${this.resolvedKind.toUpperCase()}.
                </p>`:me}

            <label>
              Import as
              <select
                .value=${this.kind}
                @change=${e=>{this.kind=e.target.value,this.resetDbList()}}
              >
                <option value="auto" ?selected=${this.kind==="auto"}>Auto-detect</option>
                <option value="json" ?selected=${this.kind==="json"}>JSON dump</option>
                <option value="csv" ?selected=${this.kind==="csv"}>CSV file</option>
                <option value="datasette" ?selected=${this.kind==="datasette"}>
                  Datasette (table or instance)
                </option>
              </select>
            </label>

            ${this.renderDbPicker()}
            ${this.resolvedKind==="csv"?R`<label class="check">
                  <input
                    type="checkbox"
                    .checked=${this.editColumns}
                    @change=${e=>this.editColumns=e.target.checked}
                  />
                  Edit columns before import (rename / hide / fix duplicate names)
                </label>`:me}

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
            ${this.resolvedKind==="datasette"&&this.maxRows!=null?R`<p class="hint">
                  Row limit applies to CSV/JSON imports; Datasette snapshots use their own
                  10,000-row cap.
                </p>`:me}

            <p class="hint">
              Paste any URL or pick a sample above — a JSON dump, a <code>.csv</code> file, or a
              Datasette table/database/instance. For a Datasette instance root, click
              <em>List databases</em> to pick one first. Multi-table sources let you choose which
              tables to import; Datasette tables import a read-only snapshot (capped at 10,000 rows
              each).
            </p>
          </div>
        </form>
      </dialog>
      ${me}
    `}};ft.instance=null;ft.styles=[Wt,Ye`
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
    `];tn([K()],ft.prototype,"url",2);tn([K()],ft.prototype,"kind",2);tn([K()],ft.prototype,"presetIdx",2);tn([K()],ft.prototype,"dbList",2);tn([K()],ft.prototype,"dbLoading",2);tn([K()],ft.prototype,"dbError",2);tn([K()],ft.prototype,"selectedDb",2);tn([K()],ft.prototype,"editColumns",2);tn([K()],ft.prototype,"file",2);tn([K()],ft.prototype,"maxRowsInput",2);ft=tn([nt("import-dialog")],ft);const Uf=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return ft},init:Rf,meta:Df},Symbol.toStringTag,{value:"Module"})),qf={id:"auto-sync",name:"Auto Sync",type:"sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-sync.ts"},Hf=6e4;let xa=null,Ps=!1;const gs=new Map;function Wf(e){xa===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(xa=setInterval(()=>{zl(e)},Hf)))}async function zl(e){if(Ps)return;const t=e.workspaceId();if(!t)return;const r=await Pl(e);if(r)try{await Kf(e,r,t)}catch(i){console.warn("[auto-sync]",i)}}async function Kf(e,t,r){const i=await ji(e),n=await Il(e,r),o=await fetch(`${t}/sync/${encodeURIComponent(r)}`);if(o.status===404){await $a(e,t,r,i,null);return}if(!o.ok)return;const l=Fi(o.headers.get("ETag")),c=await o.text();if(fa(i)===fa(c)){l&&l!==n&&await Hn(e,r,l);return}if(l&&l===n){await $a(e,t,r,i,n);return}if(!(l&&gs.get(r)===l)){Ps=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${r}". Pull and replace your local copy?`,"auto-sync")){const g=JSON.parse(c),x=await Dl(e,r,g);l&&await Hn(e,r,l),gs.delete(r),e.ui.dialogs.toast(`Pulled ${x} table${x===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else l&&gs.set(r,l)}finally{Ps=!1}}}async function $a(e,t,r,i,n){const o={"Content-Type":"application/json"};n&&(o["If-Match"]=`"${n}"`);const l=await fetch(`${t}/sync/${encodeURIComponent(r)}`,{method:"PUT",headers:o,body:i});if(l.ok){const c=Fi(l.headers.get("ETag"));c&&await Hn(e,r,c);return}if(l.status===412){const c=await l.json().catch(()=>({}));c.currentEtag&&await Hn(e,r,c.currentEtag)}}const Ll=Object.freeze(Object.defineProperty({__proto__:null,load:Wf,meta:qf,tick:zl},Symbol.toStringTag,{value:"Module"})),Ml=/\$([A-Za-z_][A-Za-z0-9_]*)/g;function ka(...e){const t=new Set;for(const r of e)if(r)for(const i of r.matchAll(Ml))t.add(i[1]);return[...t]}function Vf(e,t,r){return e.replace(Ml,(i,n)=>{const o=r[n];if(!o)return"";const l=t.data[o];return l==null?"":String(l)})}function Ca(e){return e==null||e===""}function Gf(e,t){const r=Object.entries(t).filter(([,i])=>i!=null&&String(i).trim()!=="");return r.length===0?e:e.filter(i=>r.every(([n,o])=>String(i.data[n]??"").toLowerCase().includes(String(o).toLowerCase())))}function Yf(e,t,r=!0){if(!t)return e;const i=r?1:-1;return[...e].sort((n,o)=>{const l=n.data[t],c=o.data[t],h=Ca(l),g=Ca(c);if(h||g)return h===g?0:h?1:-1;const x=Number(l),w=Number(c);return!Number.isNaN(x)&&!Number.isNaN(w)?(x-w)*i:String(l).localeCompare(String(c),void 0,{numeric:!0,sensitivity:"base"})*i})}function Xf(e,t){return Yf(Gf(e,t.filters??{}),t.sortColumn,t.sortAsc??!0)}function Qf(e){return!!e&&e.trim().length>0}var Jf=Object.defineProperty,Zf=Object.getOwnPropertyDescriptor,cr=(e,t,r,i)=>{for(var n=i>1?void 0:i?Zf(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Jf(t,r,n),n};function Is(e,t){(jt.instance??ep()).open(e,t)}function ep(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function Ea(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let jt=class extends Ne{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.mode==="template"?this.saveTemplate():this.mode==="instance"?this.saveInstance():this.close()}}connectedCallback(){super.connectedCallback(),jt.instance=this}disconnectedCallback(){super.disconnectedCallback(),jt.instance===this&&(jt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Vt(this.dialogEl,e)}async open(e,t){if(this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),t?.editTemplateId){const r=this.templates.find(i=>i.id===t.editTemplateId);r&&this.editTemplate(r)}else if(t?.editInstanceId){const r=this.instances.find(i=>i.id===t.editInstanceId);r&&await this.editInstance(r)}await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await ge(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(r=>r.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((r,i)=>r.name.localeCompare(i.name))}async openInstance(e){await(await ge()).store.viewInstances.patch(e,{open:!0,updatedAt:Date.now()}),this.close()}async editInstance(e){const r=await(await ge()).store.viewTemplates.findOne(e.templateId),i=r?ka(r.headerHtml,r.rowHtml,r.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:r?.name??"template",name:e.name,tokens:i,mapping:{...e.mapping},limit:e.limit??0},this.mode="instance"}async deleteInstance(e){await(await ge()).store.viewInstances.remove(e),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await ge();e.id?await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()}):await t.store.viewTemplates.insert({id:Ea(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh(),this.mode="list"}useTemplate(e){const t=ka(e.headerHtml,e.rowHtml,e.footerHtml),r={};for(const i of t)r[i]=this.autoMap(i);this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:r,limit:0},this.mode="instance"}firstColumn(e){const t=this.columns.find(e);return t?t.field:""}autoMap(e){const t=e.toLowerCase(),r=this.columns.find(c=>c.field.toLowerCase()===t||(c.label??"").toLowerCase()===t);if(r)return r.field;const i=this.table?.labelColumn;if(i&&(t==="title"||t==="name"||t==="label"))return i;if(["date","datetime","time","created","updated","modified","timestamp","day","when"].includes(t))return this.firstColumn(c=>c.type==="date"||c.type==="datetime");const o=["url","link","href","website","homepage","uri","site","web"];if(o.includes(t)){const c=this.firstColumn(h=>h.renderer==="link");return c||this.firstColumn(h=>{const g=h.field.toLowerCase(),x=(h.label??"").toLowerCase();return o.some(w=>g.includes(w)||x.includes(w))})}const l=["description","desc","notes","note","body","text","summary","about","comment","comments","details","detail","remarks"];if(l.includes(t)){const c=this.firstColumn(w=>{if(w.type!=="string")return!1;const P=w.field.toLowerCase(),W=(w.label??"").toLowerCase();return l.some(L=>P.includes(L)||W.includes(L))});if(c)return c;const h=this.columns.filter(w=>w.type==="string"),g=h[0];if(!g)return"";let x=g;for(const w of h)(w.max??0)>(x.max??0)&&(x=w);return x.field}return""}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await ge();if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},limit:e.limit>0?e.limit:void 0,updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.mode="list";return}const r=this.columns.filter(n=>!n.hidden).map(n=>n.field),i={id:Ea(),workspaceId:t.workspaceId,tableId:this.tableId,tableName:this.table.name,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:r,mapping:{...e.mapping},updatedAt:Date.now(),...e.limit>0?{limit:e.limit}:{}};await t.store.viewInstances.insert(i),await this.openInstance(i.id)}renderList(){return R`
      <div class="section">
        <h3>Views of “${this.table?.name??""}”</h3>
        <ul class="list">
          ${this.instances.map(e=>R`<li>
                <span class="name">${e.name}</span>
                <button type="button" class="mini" @click=${()=>this.openInstance(e.id)}>
                  Open
                </button>
                <button type="button" class="mini" @click=${()=>void this.editInstance(e)}>
                  Edit
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
          ${this.templates.map(e=>R`<li>
                <span class="name">${e.name}</span>
                ${e.builtin?R`<span class="badge">built-in</span>`:me}
                <button type="button" class="mini" @click=${()=>this.useTemplate(e)}>Use</button>
                <button type="button" class="mini" @click=${()=>this.editTemplate(e)}>Edit</button>
                <button type="button" class="mini" @click=${()=>this.copyTemplate(e)}>Copy</button>
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
    `}renderTemplate(){const e=this.tDraft,t=r=>i=>{this.tDraft={...e,[r]:i.target.value}};return R`
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
    `}renderInstance(){const e=this.iDraft;return R`
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
      <div class="section">
        <h3>Map placeholders to columns</h3>
        ${e.tokens.length===0?R`<p class="hint">
              This template has no <code>$TOKEN</code> placeholders — it will show the read-only
              table with your current sort, filter and visible columns.
            </p>`:e.tokens.map(t=>R`<div class="map-row">
                  <code>$${t}</code>
                  <select
                    @change=${r=>this.iDraft={...e,mapping:{...e.mapping,[t]:r.target.value}}}
                  >
                    <option value="" ?selected=${!e.mapping[t]}>— none —</option>
                    ${this.columns.map(r=>R`<option value=${r.field} ?selected=${e.mapping[t]===r.field}>
                          ${r.label||r.field}
                        </option>`)}
                  </select>
                </div>`)}
      </div>
      <p class="hint">
        ${e.id?R`Editing name and column mapping. The snapshotted sort, filters and visible columns
            are kept.`:R`The view snapshots this table's current sort, filters and visible columns.`}
      </p>
    `}render(){const e=this.mode==="template"?this.tDraft?.id?"Edit template":"New template":this.mode==="instance"?`${this.iDraft?.id?"Edit":"New"} view — ${this.iDraft?.templateName??""}`:"Views",t=this.mode==="template"?R`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
              Back
            </button>
            <button type="submit" class="primary">Save</button>`:this.mode==="instance"?R`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
                Back
              </button>
              <button type="submit" class="primary">
                ${this.iDraft?.id?"Save":"Create view"}
              </button>`:R`<button type="submit" class="ghost">Close</button>`;return R`
      <dialog @cancel=${this.close} @keydown=${Kt}>
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
    `}};jt.instance=null;jt.styles=[Wt,Ye`
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
    `];cr([K()],jt.prototype,"mode",2);cr([K()],jt.prototype,"instances",2);cr([K()],jt.prototype,"templates",2);cr([K()],jt.prototype,"tDraft",2);cr([K()],jt.prototype,"iDraft",2);jt=cr([nt("views-dialog")],jt);const tp={id:"views",name:"Views",type:"ui",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/views.ts"},np="grid_view",Sa="RSS Feed",Ds='<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',Rs=['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>',"</div>"].join(""),Os="</div>";function rp(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:np,tooltip:"Views — display this table through a template",onClick:(t,{tableId:r})=>Is(r)})}async function ip(e){await op(e)}function sp(){let e=5381;const t=`${Ds}\0${Rs}\0${Os}`;for(let r=0;r<t.length;r++)e=(e<<5)+e+t.charCodeAt(r)|0;return(e>>>0).toString(36)}async function op(e){const t=e.workspaceId();if(!t)return;const r=`views:seeded:rss:${t}`,i=`views:sig:rss:${t}`,n=sp(),o=(await e.store.viewTemplates.find({workspaceId:t})).find(c=>c.builtin&&c.name===Sa);if(o){(await e.store.settings.findOne(i))?.value!==n&&(await e.store.viewTemplates.patch(o.id,{headerHtml:Ds,rowHtml:Rs,footerHtml:Os,updatedAt:Date.now()}),await e.store.settings.upsert({key:i,value:n})),await e.store.settings.upsert({key:r,value:!0});return}(await e.store.settings.findOne(r))?.value||(await e.store.viewTemplates.insert({id:ap(),workspaceId:t,name:Sa,headerHtml:Ds,rowHtml:Rs,footerHtml:Os,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({key:r,value:!0}),await e.store.settings.upsert({key:i,value:n}))}function ap(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const lp=Object.freeze(Object.defineProperty({__proto__:null,init:rp,load:ip,meta:tp},Symbol.toStringTag,{value:"Module"})),cp={id:"settings",name:"Settings",type:"ui",version:"0.1.0",description:"Header gear button that opens the tabbed Settings dialog; imports dropped secrets.txt.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/settings.ts"};function up(e){e.ui.registerHeaderButton({id:"settings:open",label:"Settings",icon:"settings",tooltip:"Workspace and plugin settings",variant:"secondary",onClick:()=>e.ui.openSettings()}),e.ui.registerDropHandler(async(t,r)=>{const n=Array.from(t.dataTransfer?.files??[]).find(c=>c.name.toLowerCase()==="secrets.txt");if(!n)return!1;const o=await n.text(),l=Object.keys(Pi(o)).length;return Ai().trim().length>0&&!await r.ui.dialogs.confirm(`Replace your current secrets with ${l} secret${l===1?"":"s"} from "${n.name}"?`,"Import secrets")||(Ja(o),r.ui.dialogs.toast(`Imported ${l} secret${l===1?"":"s"}.`,{kind:"success",title:"Secrets"})),!0})}const dp=Object.freeze(Object.defineProperty({__proto__:null,init:up,meta:cp},Symbol.toStringTag,{value:"Module"})),hp=[dp,Uh,zu,sd,ch,Uu,wh,gh,Dh,Mh,Wh,nf,af,df,yf,Uf,Ll,lp];function fp(e){if(!e.meta)throw new Error("Built-in plugin is missing meta");return e.meta}const Bl=hp.map(e=>{const t=fp(e);return{id:t.id,meta:t,module:e}}),pp=Bl;function js(e){return`builtin:${e}`}async function mp(e){const t=[];for(const r of Bl)if(!await gp(e,r)){t.push(r);try{await r.module.init?.(e)}catch(i){e.events.emit("plugin:error",{url:r.id,phase:"init",error:i})}}return async()=>{for(const r of t)try{await r.module.load?.(e)}catch(i){e.events.emit("plugin:error",{url:r.id,phase:"load",error:i})}}}async function gp(e,t){return t.meta.fixed?!1:(await e.store.plugins.findOne(js(t.id)))?.enabled===!1}async function bp(e){const t=e.workspaceId();if(!t)return async()=>{};const i=(await e.store.workspaces.findOne(t))?.pluginUrls??[],n=[];for(const o of i)try{const l=await e.store.plugins.findOne(o);if(l&&l.enabled===!1)continue;let c=l?.cachedBody??"";if(c)yp(e,o,c);else{try{c=await Nl(o)}catch(x){await e.store.plugins.upsert({url:o,enabled:l?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${x.message}`}),e.events.emit("plugin:error",{url:o,phase:"fetch",error:x});continue}await e.store.plugins.upsert({url:o,enabled:!0,lastFetched:Date.now(),cachedBody:c})}const h=new Blob([c],{type:"text/javascript"}),g=URL.createObjectURL(h);try{const x=await import(g);await x.init?.(e),n.push({url:o,mod:x})}finally{setTimeout(()=>URL.revokeObjectURL(g),5e3)}}catch(l){await e.store.plugins.upsert({url:o,enabled:!0,lastFetched:Date.now(),lastError:`init: ${l.message}`}),e.events.emit("plugin:error",{url:o,phase:"init",error:l})}return async()=>{for(const{url:o,mod:l}of n)try{await l.load?.(e)}catch(c){await e.store.plugins.upsert({url:o,enabled:!0,lastFetched:Date.now(),lastError:`load: ${c.message}`}),e.events.emit("plugin:error",{url:o,phase:"load",error:c})}}}async function Nl(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const r=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(r))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return r}function yp(e,t,r){return(async()=>{try{const i=await Nl(t);if(i===r)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:i})}catch{}})()}let bs=null;function ge(){return bs||(bs=wp()),bs}async function wp(){const e=await eu(),t=ru(e),r=su(),i=hu(),n=new Map;t.tables.subscribe(N=>{n.clear();for(const U of N)n.set(U.id,U)});const o={...t.tables,insert:N=>(n.set(N.id,N),t.tables.insert(N)),upsert:N=>(n.set(N.id,N),t.tables.upsert(N))};let l=null;const c={get backend(){if(!l)throw new Error("[host] row-source ctx used before app init completed");return l.backend},events:r,settings:t.settings,workspaceId:()=>w},h=iu({base:{...t,tables:o},providers:i.rowSources,tableById:N=>n.get(N),ctx:c}),g=vp(),x=await h.workspaces.find();let w;if(g){const N=kp(g),U=x.find(re=>re.id===N||re.name===g);U?w=U.id:w=(await h.workspaces.insert({id:N,name:g,createdAt:Date.now(),pluginUrls:[]})).id}else{const N=xp(),U=N?x.find(re=>re.id===N):void 0;U?w=U.id:x.length>0?w=x[0].id:w=(await h.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}$p(w);const P=bu({store:h,events:r,registries:i,workspaceId:()=>w});l=P,r.on("import:after",({source:N,tableId:U,rowCount:re})=>{N!=="datasette"&&P.store.tables.findOne(U).then(ce=>{P.ui.dialogs.toast(`Imported ${re} row${re===1?"":"s"} into "${ce?.name??U}".`,{kind:"success",title:N.toUpperCase()+" import"})})}),r.on("plugin:error",({url:N,phase:U,error:re})=>{P.ui.dialogs.toast(`[${U}] ${re?.message??String(re)}`,{kind:"error",title:`Plugin: ${N}`})});const W=await mp(P),L=await bp(P);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:w}),await W(),await L()}),{store:h,events:r,workspaceId:w,registries:i,api:P}}function vp(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const Ul="eda:lastWorkspaceId";function xp(){try{return globalThis.localStorage?.getItem(Ul)??null}catch{return null}}function $p(e){try{globalThis.localStorage?.setItem(Ul,e)}catch{}}function kp(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var Cp=Object.defineProperty,Ep=Object.getOwnPropertyDescriptor,Li=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ep(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Cp(t,r,n),n};let or=class extends Ne{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Vt(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let r;try{r=Ir(this.text)}catch(l){this.errorMsg=`Couldn't parse the CSV: ${l.message}`;return}if(r.columns.length===0||r.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const i=await ge(),n=crypto.randomUUID();await i.store.tables.insert({id:n,workspaceId:i.workspaceId,name:t,code:Sp(t),columns:r.columns,view:"table",updatedAt:Date.now()});const o=r.rows.map(l=>({id:crypto.randomUUID(),tableId:n,data:l,updatedAt:Date.now()}));await i.store.rows(n).bulkInsert(o),i.api.ui.dialogs.toast(`Imported ${r.rows.length} row${r.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return R`
      <dialog @cancel=${this.close} @keydown=${Kt}>
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
            ${this.errorMsg?R`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};or.styles=[Wt,Ye`
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
    `];Li([K()],or.prototype,"name",2);Li([K()],or.prototype,"text",2);Li([K()],or.prototype,"errorMsg",2);or=Li([nt("csv-paste-dialog")],or);function Sp(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}var _p=Object.defineProperty,Tp=Object.getOwnPropertyDescriptor,Zs=(e,t,r,i)=>{for(var n=i>1?void 0:i?Tp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&_p(t,r,n),n};const Ap=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return an HTML string; it is injected into the cell as raw HTML.
  return '<b>' + (row.name ?? '') + '</b>';
}
`;let cn=class extends Ne{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),cn.instance=this}disconnectedCallback(){super.disconnectedCallback(),cn.instance===this&&(cn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Vt(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:Ap,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(r=>{this.resolver=r})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return R`
      <dialog @cancel=${this.onCancel} @keydown=${Kt}>
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
    `}};cn.instance=null;cn.styles=[Wt,Ye`
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
    `];Zs([K()],cn.prototype,"text",2);Zs([K()],cn.prototype,"columnLabel",2);cn=Zs([nt("script-editor-dialog")],cn);var Pp=Object.defineProperty,Ip=Object.getOwnPropertyDescriptor,Lt=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ip(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Pp(t,r,n),n};const Dp=["string","number","boolean","date","datetime"];let Ct=class extends Ne{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.columns=[],this.errorMsg="",this.noticeMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Vt(this.dialogEl,e)}async open(e,t){this.errorMsg="",this.noticeMsg=t?.notice??"";const r=await ge();if(this.rendererOptions=[...r.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.rendererSubUnsub=r.events.on("app:ready",()=>{this.rendererOptions=[...r.registries.cellRenderers.keys()].sort()}),e){const i=await ge(),n=await i.store.tables.findOne(e);if(!n)return;this.mode="edit",this.editTableId=e,this.name=n.name,this.tableTitle=n.title??"",this.columns=n.columns.map(l=>({field:l.field,label:l.label,type:l.type,renderer:l.renderer,script:l.script,max:l.max,unique:l.unique,notnull:l.notnull,hidden:l.hidden,origField:l.field}));const o=await i.store.rows(e).find();this.previewRows=o.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,r)=>r!==e)}moveColumn(e,t){const r=e+t;if(r<0||r>=this.columns.length)return;const i=[...this.columns],[n]=i.splice(e,1);i.splice(r,0,n),this.columns=i}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,r){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientY<i.top+i.height/2;this.dropTargetIdx=t,this.dropEdge=n?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const r=this.dragSrcIdx,i=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,r===null||r===t||!i)return;const n=[...this.columns],[o]=n.splice(r,1);let l=t+(r<t?-1:0);i==="after"&&(l+=1),n.splice(l,0,o),this.columns=n}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((r,i)=>i===e?{...r,...t}:r)}async editScript(e){const t=cn.instance;if(!t)return;const r=this.columns[e];if(!r)return;const i=await t.open(r.script??"",r.label||r.field);i!==null&&this.patchColumn(e,{script:i.trim()?i:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}const r=await ge(),i=(await r.store.tables.find()).filter(g=>g.workspaceId===r.workspaceId),n=t.toLowerCase(),o=i.find(g=>g.name.toLowerCase()===n&&g.id!==this.editTableId);if(o){this.errorMsg=`A table named "${o.name}" already exists — names must be unique.`;return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const l=new Set;for(const g of this.columns){const x=g.field.trim();if(!x){this.errorMsg="Column field names cannot be empty.";return}if(l.has(x)){this.errorMsg=`Duplicate column field: ${x}`;return}l.add(x)}const c=this.tableTitle.trim(),h=this.columns.map(g=>{const x={field:g.field.trim(),label:g.label.trim()||g.field.trim(),type:g.type};return g.renderer&&(x.renderer=g.renderer),g.script&&(x.script=g.script),g.max!=null&&g.max>0&&(x.max=g.max),g.unique&&(x.unique=!0),g.notnull&&(x.notnull=!0),g.hidden&&(x.hidden=!0),x});if(this.mode==="edit"&&this.editTableId){const g=this.editTableId,x=await r.store.tables.findOne(g),w=new Map((x?.columns??[]).map(q=>[q.field,q])),P=h.filter(q=>{const oe=w.get(q.field);return q.unique&&!oe?.unique||q.notnull&&!oe?.notnull||q.max&&q.max>0&&q.max!==oe?.max});if(P.length>0){const q=await r.store.rows(g).find(),oe=jp(P,q);if(oe.length>0){this.errorMsg=`Cannot save: ${oe.length} existing ${oe.length===1?"row violates":"rows violate"} the new constraints.
${oe.slice(0,5).join(`
`)}${oe.length>5?`
…and ${oe.length-5} more.`:""}`;return}}const W=new Set(this.columns.map(q=>q.origField).filter(q=>!!q)),L=new Set(h.map(q=>q.field)),N=(x?.columns??[]).map(q=>q.field).filter(q=>!W.has(q)),U=x?.deletedColumns??[],re=[...new Set([...U,...N])].filter(q=>!L.has(q)),ce={name:t,title:c,columns:h,updatedAt:Date.now()};(re.length>0||U.length>0)&&(ce.deletedColumns=re);const be=x?.name;await r.store.tables.patch(g,ce);const Q=N.filter(q=>!L.has(q));if(Q.length>0){const q=await r.store.rows(g).find();for(const oe of q){let ye=!1;const $e={...oe.data};for(const ze of Q)ze in $e&&(delete $e[ze],ye=!0);ye&&await r.store.rows(g).patch(oe.id,{data:$e,updatedAt:Date.now()})}}if(be!==void 0&&be!==t){const q=(await r.store.viewInstances.find()).filter(oe=>oe.tableId===g);for(const oe of q)oe.tableName!==t&&await r.store.viewInstances.patch(oe.id,{tableName:t,updatedAt:Date.now()})}}else await r.store.tables.insert({id:zp(),workspaceId:r.workspaceId,name:t,title:c,code:Fp(t),columns:h,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return R`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=new Map;for(const t of this.columns){if(!t.unique)continue;const r=new Set,i=new Set;for(const n of this.previewRows){const o=n.data[t.field];o==null||o===""||(r.has(o)&&i.add(o),r.add(o))}e.set(t.field,i)}return R`
      <div class="preview">
        <h3>Live preview — first ${this.previewRows.length} row${this.previewRows.length===1?"":"s"}</h3>
        <table>
          <thead>
            <tr>
              ${this.columns.map(t=>R`<th title=${t.field}>${t.label||t.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.previewRows.map(t=>R`
                <tr>
                  ${this.columns.map(r=>{const i=t.data[r.field],n=Op(r,i,e.get(r.field));return R`<td
                      class=${n?"violation":""}
                      title=${n??""}
                    >${Rp(i)}</td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}renameDetected(){return this.mode==="edit"&&this.columns.some(e=>e.origField&&e.origField!==e.field.trim())}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return R`
      <dialog @cancel=${this.close} @keydown=${Kt}>
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
          ${this.noticeMsg?R`<div class="notice">${this.noticeMsg}</div>`:""}
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
            ${this.columns.map((r,i)=>{const n=this.dragSrcIdx===i,o=this.dropTargetIdx===i,l=o&&this.dropEdge==="before"?" drop-before":o&&this.dropEdge==="after"?" drop-after":"";return R`
                <div
                  class=${`col-row${n?" drag-source":""}${l}`}
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
                    ${Dp.map(c=>R`<option value=${c} ?selected=${c===r.type}>${c}</option>`)}
                  </select>
                  <select
                    title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                    .value=${r.renderer??""}
                    @change=${c=>{const h=c.target.value;this.patchColumn(i,{renderer:h||void 0})}}
                  >
                    <option value="" ?selected=${!r.renderer}>— none —</option>
                    ${this.rendererOptions.map(c=>R`<option value=${c} ?selected=${c===r.renderer}>${c}</option>`)}
                  </select>
                  ${r.renderer==="script"?R`<button
                        type="button"
                        class="icon-btn"
                        title="Edit JS render(row)"
                        @click=${()=>this.editScript(i)}
                      >
                        <span class="mi sm">edit</span>
                      </button>`:R`<span></span>`}
                  <input
                    type="number"
                    min="0"
                    placeholder="—"
                    title="Max length (strings) or max value (numbers)"
                    .value=${r.max==null?"":String(r.max)}
                    @input=${c=>{const h=c.target.value;this.patchColumn(i,{max:h===""?void 0:Number(h)})}}
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

          ${this.renameDetected()?R`<div class="hint">
                Renamed fields will appear empty for existing rows — the row data
                isn't migrated automatically.
              </div>`:""}
          ${this.errorMsg?R`<div class="error">${this.errorMsg}</div>`:""}
          ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};Ct.styles=[Zt,Wt,Ye`
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
  `];Lt([K()],Ct.prototype,"mode",2);Lt([K()],Ct.prototype,"editTableId",2);Lt([K()],Ct.prototype,"name",2);Lt([K()],Ct.prototype,"tableTitle",2);Lt([K()],Ct.prototype,"columns",2);Lt([K()],Ct.prototype,"errorMsg",2);Lt([K()],Ct.prototype,"noticeMsg",2);Lt([K()],Ct.prototype,"dragSrcIdx",2);Lt([K()],Ct.prototype,"dropTargetIdx",2);Lt([K()],Ct.prototype,"dropEdge",2);Lt([K()],Ct.prototype,"previewRows",2);Lt([K()],Ct.prototype,"rendererOptions",2);Ct=Lt([nt("new-table-dialog")],Ct);function Rp(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function Op(e,t,r){const i=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&i)return`${e.label}: empty`;if(i)return null;if(e.type==="number"&&typeof t!="number"){const n=Number(t);if(!Number.isFinite(n))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!i){const n=new Date(String(t));if(Number.isNaN(n.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&r?.has(t)?`${e.label}: duplicate`:null}function jp(e,t){const r=[];for(const i of e)if(i.notnull&&t.forEach((n,o)=>{const l=n.data[i.field];(l==null||typeof l=="string"&&l.trim()==="")&&r.push(`Row ${o+1}: ${i.label} is empty.`)}),i.max!=null&&i.max>0&&t.forEach((n,o)=>{const l=n.data[i.field];typeof l=="string"&&l.length>i.max?r.push(`Row ${o+1}: ${i.label} length ${l.length} > max ${i.max}.`):typeof l=="number"&&l>i.max&&r.push(`Row ${o+1}: ${i.label} value ${l} > max ${i.max}.`)}),i.unique){const n=new Map;t.forEach((o,l)=>{const c=o.data[i.field];c==null||c===""||(n.has(c)?r.push(`Row ${l+1}: ${i.label} duplicates row ${n.get(c)+1} ("${String(c)}").`):n.set(c,l))})}return r}function Fp(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function zp(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var Lp=Object.defineProperty,Mp=Object.getOwnPropertyDescriptor,_t=(e,t,r,i)=>{for(var n=i>1?void 0:i?Mp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Lp(t,r,n),n};const Bp='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',Np=R`<span class="mi sm">extension</span>`,_a="plugin:catalogUrls";function di(){return new URL("/easydbaccess/plugins/catalog.json",location.origin).toString()}const Up=[["installed","Installed"],["built-in","Built-in"],["available","Available"],["fixed","Fixed"]],ql=[["importer","Importer"],["exporter","Exporter"],["cell-renderer","Cell renderer"],["sync","Sync"],["source","Source"],["ui","UI"]],qp=new Map(ql);let xt=class extends Ne{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.catalogUrls=[di()],this.activeCatalogUrl=di(),this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Vt(this.dialogEl,e)}async open(){const e=await ge(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const r=await e.store.plugins.find();this.records=new Map(r.map(o=>[o.url,o]));const i=await e.store.settings.findOne(_a),n=Array.isArray(i?.value)?i.value.filter(o=>typeof o=="string"):[];this.catalogUrls=n.length>0?n:[di()],this.activeCatalogUrl=this.catalogUrls[0]??di(),this.addUrl="",this.search="",this.filterStates=new Map,this.typeFilters=new Map,await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(this.activeCatalogUrl),this.refreshServerRegistry()}async refreshCatalog(e){try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json(),i=Array.isArray(r.plugins)?r.plugins:[];this.catalog=i.map(n=>({...n,absUrl:new URL(n.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const r=(await(await ge()).store.settings.findOne("server-sync:url"))?.value;if(typeof r!="string"||r.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const n=`${r.replace(/\/+$/,"")}/plugins/registry`;try{const o=await fetch(n,{cache:"no-store"});if(!o.ok)throw new Error(`HTTP ${o.status}`);const l=await o.json(),c=Array.isArray(l.plugins)?l.plugins:[];this.serverCatalog=c.map(h=>({...h,absUrl:new URL(h.url,n).toString()})),this.serverCatalogError=null}catch(o){this.serverCatalog=[],this.serverCatalogError=o.message}}async reloadCatalogSource(){const e=this.activeCatalogUrl.trim();e&&(this.catalogUrls.includes(e)||(this.catalogUrls=[...this.catalogUrls,e],await(await ge()).store.settings.upsert({key:_a,value:this.catalogUrls})),await this.refreshCatalog(e))}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await ge()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const r=await ge();await r.store.workspaces.patch(r.workspaceId,{pluginUrls:this.urls}),await r.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const r=await ge(),i=this.records.get(e);await r.store.plugins.upsert({...i??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...i,url:e,enabled:t,lastFetched:i?.lastFetched??0}))}async removePlugin(e){const t=await ge();this.urls=this.urls.filter(r=>r!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const r=await ge(),i=js(e),n=this.records.get(i);await r.store.plugins.upsert({...n??{url:i,lastFetched:0},url:i,enabled:t,lastFetched:n?.lastFetched??0}),this.records=new Map(this.records.set(i,{...n,url:i,enabled:t,lastFetched:n?.lastFetched??0}))}async onRowToggle(e,t){if(e.categories.has("built-in"))await this.toggleBuiltin(e.id,t);else if(e.url)await this.toggleEnabled(e.url,t);else return;(await ge()).api.ui.dialogs.toast("Reload to apply this change.",{kind:"info",title:"Plugin updated"})}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await ge();try{const r=await fetch(e.absUrl,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const i=await r.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:i});const n=new Blob([i],{type:"text/javascript"}),o=URL.createObjectURL(n);try{const c=await import(o);await c.init?.(t.api),await c.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(o),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const l=await t.store.plugins.find();this.records=new Map(l.map(c=>[c.url,c])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(r){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${r.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${r.message}`,{kind:"error",title:"Plugin error"})}finally{const r=new Set(this.installing);r.delete(e.absUrl),this.installing=r}}cycleState(e,t){const r=e.get(t),i=new Map(e);return r===void 0?i.set(t,"on"):r==="on"?i.set(t,"not"):i.delete(t),i}cycleFilter(e){this.filterStates=this.cycleState(this.filterStates,e)}cycleTypeFilter(e){this.typeFilters=this.cycleState(this.typeFilters,e)}buildRows(){const e=new Map,t=new Map;for(const{id:r,meta:i}of pp){const n=i.fixed?!0:this.records.get(js(r))?.enabled!==!1,o=i.fixed?["built-in","fixed"]:["built-in"];e.set(`builtin:${r}`,{id:r,name:i.name,...i.type?{type:i.type}:{},...i.description?{meta:i.description}:{meta:"Built-in plugin"},...i.author?{author:i.author}:{},...i.icon?{icon:i.icon}:{},...i.repo?{repo:i.repo}:{},categories:new Set(o),enabled:n,fixed:!!i.fixed})}for(const r of[...this.catalog,...this.serverCatalog]){const i=this.urls.includes(r.absUrl),n=this.records.get(r.absUrl),o=i?["available","installed"]:["available"],l=e.get(r.id);e.set(r.id,{id:r.id,name:r.name,url:r.absUrl,...r.type?{type:r.type}:{},...r.icon?{icon:r.icon}:{},...r.repo?{repo:r.repo}:{},...r.author?{author:r.author}:{},meta:r.description??r.absUrl,categories:l?new Set([...l.categories,...o]):new Set(o),enabled:n?.enabled!==!1,installing:this.installing.has(r.absUrl)}),t.set(r.absUrl,r.id)}for(const r of this.urls){const i=t.get(r);if(i){e.get(i).categories.add("installed");continue}const n=this.records.get(r),o=n?.lastFetched?new Date(n.lastFetched).toLocaleString():"never";e.set(`url:${r}`,{id:r,name:r,urlOnly:!0,url:r,meta:n?.lastError??`Last fetched: ${o}`,metaIsError:!!n?.lastError,categories:new Set(["installed"]),enabled:n?.enabled!==!1})}return[...e.values()]}get filteredRows(){const e=this.buildRows(),t=this.search.trim().toLowerCase(),r=[],i=[];for(const[c,h]of this.filterStates)(h==="on"?r:i).push(c);const n=[],o=[];for(const[c,h]of this.typeFilters)(h==="on"?n:o).push(c);const l=e.filter(c=>!(r.length&&!r.some(h=>c.categories.has(h))||i.some(h=>c.categories.has(h))||n.length&&!(c.type&&n.includes(c.type))||c.type&&o.includes(c.type)));return t?l.filter(c=>[c.id,c.name,c.type,c.meta,c.author].some(h=>h?.toLowerCase().includes(t))):l}renderRow(e){const t=e.categories.has("built-in")||e.categories.has("installed"),r=!!e.url&&e.categories.has("installed"),i=!!e.url&&!e.categories.has("installed");return R`
      <div class=${`row${e.categories.has("built-in")?" builtin":""}${e.metaIsError?" error":""}`}>
        <span class="row-icon">${e.icon?nr(e.icon):Np}</span>
        <div class="row-main">
          <div class=${`row-title${e.urlOnly?" mono":""}`}>
            ${e.name}${e.id!==e.name?R`<span class="row-id">${e.id}</span>`:""}${e.type?R`<span class="row-type" title="Plugin type"
                  >${qp.get(e.type)??e.type}</span
                >`:""}
          </div>
          ${e.meta?R`<div class=${`meta${e.metaIsError?" err":""}`}>${e.meta}</div>`:""}
        </div>
        <div class="row-author">${e.author??""}</div>
        ${e.repo?R`<a
              class="row-repo"
              href=${e.repo}
              target="_blank"
              rel="noopener noreferrer"
              title="View source on GitHub"
              >${nr(Bp)}</a
            >`:R`<span></span>`}
        ${e.fixed?R`<span class="mi sm lock-icon" title="Always on — cannot be disabled">lock</span>`:t?R`<label class="switch" title="Enable / disable">
                <input
                  type="checkbox"
                  .checked=${e.enabled}
                  @change=${n=>this.onRowToggle(e,n.target.checked)}
                />
                <span class="slider"></span>
              </label>`:R`<span></span>`}
        ${i?R`<button
              type="button"
              class="install"
              ?disabled=${e.installing}
              @click=${()=>this.installFromCatalog({absUrl:e.url,name:e.name})}
            >
              <span class="mi sm">${e.installing?"hourglass_empty":"download"}</span>
              ${e.installing?"Installing…":"Install"}
            </button>`:r?R`<button
                type="button"
                class="uninstall"
                @click=${()=>this.removePlugin(e.url)}
              >
                <span class="mi sm">delete</span> Uninstall
              </button>`:R`<span></span>`}
      </div>
    `}render(){const e=this.filteredRows;return R`
      <dialog @cancel=${this.close} @keydown=${Kt}>
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
              Enable/disable changes take effect after reload; installing a
              plugin activates it immediately.
            </p>

            <div class="filters">
              ${Up.map(([t,r])=>{const i=this.filterStates.get(t),n=i==="on"?`Showing only ${r} plugins — click to exclude`:i==="not"?`Hiding ${r} plugins — click to clear`:`Filter by ${r} — click: show only → exclude → off`;return R`
                  <button
                    type="button"
                    class=${`tri${i?` ${i}`:""}`}
                    title=${n}
                    aria-pressed=${i!==void 0}
                    @click=${()=>this.cycleFilter(t)}
                  >
                    <span class="tri-mark"
                      >${i==="on"?"✓":i==="not"?"≠":""}</span
                    >${r}
                  </button>
                `})}
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
              ${ql.map(([t,r])=>{const i=this.typeFilters.get(t),n=i==="on"?`Showing only ${r} plugins — click to exclude`:i==="not"?`Hiding ${r} plugins — click to clear`:`Filter by ${r} — click: show only → exclude → off`;return R`
                  <button
                    type="button"
                    class=${`tri${i?` ${i}`:""}`}
                    title=${n}
                    aria-pressed=${i!==void 0}
                    @click=${()=>this.cycleTypeFilter(t)}
                  >
                    <span class="tri-mark"
                      >${i==="on"?"✓":i==="not"?"≠":""}</span
                    >${r}
                  </button>
                `})}
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
                ${this.catalogUrls.map(t=>R`<option value=${t}></option>`)}
              </datalist>
              <button type="button" class="ghost" @click=${this.reloadCatalogSource}>
                <span class="mi sm">refresh</span> Reload
              </button>
            </div>
            ${this.catalogError?R`<div class="meta err">Catalog unavailable: ${this.catalogError}</div>`:""}
            ${this.serverCatalogError?R`<div class="meta err">Server registry unavailable: ${this.serverCatalogError}</div>`:""}

            <div class="plugin-list">
              ${e.length===0?R`<p class="hint">No plugins match the current filters/search.</p>`:""}
              ${e.map(t=>this.renderRow(t))}
            </div>

            <div class="add">
              <input
                type="text"
                placeholder="https://example.com/my-plugin.js"
                .value=${this.addUrl}
                @input=${t=>this.addUrl=t.target.value}
              />
              <button type="submit" class="primary">
                <span class="mi sm">add</span> Add
              </button>
            </div>
          </div>
        </form>
      </dialog>
    `}};xt.styles=[Zt,Wt,Ye`
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
    `];_t([K()],xt.prototype,"urls",2);_t([K()],xt.prototype,"records",2);_t([K()],xt.prototype,"addUrl",2);_t([K()],xt.prototype,"catalog",2);_t([K()],xt.prototype,"catalogError",2);_t([K()],xt.prototype,"serverCatalog",2);_t([K()],xt.prototype,"serverCatalogError",2);_t([K()],xt.prototype,"installing",2);_t([K()],xt.prototype,"catalogUrls",2);_t([K()],xt.prototype,"activeCatalogUrl",2);_t([K()],xt.prototype,"search",2);_t([K()],xt.prototype,"filterStates",2);_t([K()],xt.prototype,"typeFilters",2);xt=_t([nt("plugin-manager-dialog")],xt);var Hp=Object.defineProperty,Wp=Object.getOwnPropertyDescriptor,Vn=(e,t,r,i)=>{for(var n=i>1?void 0:i?Wp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Hp(t,r,n),n};const xr="__general__";let yn=class extends Ne{constructor(){super(...arguments),this.tabs=[],this.active=xr,this.values={},this.placements={},this.secretsText="",this.workspaceTitle="",this.dialogEl=null,this.onSubmit=e=>{e.preventDefault(),this.close()}}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Vt(this.dialogEl,e)}async open(){const e=await ge(),t=[...e.registries.settings];this.tabs=t.map(([o,l])=>({id:o,name:l.name,fields:l.fields}));const r=await e.store.workspaces.findOne(e.workspaceId);this.workspaceTitle=r?.title??"";const i={},n={};for(const o of this.tabs)for(const l of o.fields){const c=`${o.id}:${l.key}`,h=await e.api.settings.placement(o.id,l.key);h==="user"?(i[c]=qs(c),n[c]="user"):h==="workspace"?(i[c]=(await e.store.settings.findOne(c))?.value,n[c]="workspace"):(i[c]=l.default,n[c]=l.scope??"workspace")}this.values=i,this.placements=n,this.secretsText=Ai(),this.active=xr,await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async setValue(e,t,r){const i=`${e.id}:${t.key}`;this.values={...this.values,[i]:r},await(await ge()).api.settings.set(e.id,t.key,r,this.placements[i])}async toggleScope(e,t,r){const i=`${e.id}:${t.key}`,n=r?"user":"workspace";this.placements={...this.placements,[i]:n},await(await ge()).api.settings.set(e.id,t.key,this.values[i],n)}onSecretsInput(e){this.secretsText=e.target.value,Ja(this.secretsText)}async setWorkspaceTitle(e){this.workspaceTitle=e;const t=await ge();await t.store.workspaces.patch(t.workspaceId,{title:e.trim()||void 0})}renderControl(e,t){const r=`${e.id}:${t.key}`,i=this.values[r];switch(t.type){case"text":return R`<textarea
          .value=${String(i??"")}
          @change=${n=>this.setValue(e,t,n.target.value)}
        ></textarea>`;case"number":return R`<input
          type="number"
          .value=${i==null?"":String(i)}
          @change=${n=>{const o=n.target.value;this.setValue(e,t,o===""?void 0:Number(o))}}
        />`;case"boolean":return R`<label class="scope"
          ><input
            type="checkbox"
            .checked=${!!i}
            @change=${n=>this.setValue(e,t,n.target.checked)}
          />
          enabled</label
        >`;case"date":return R`<input
          type="date"
          .value=${String(i??"")}
          @change=${n=>this.setValue(e,t,n.target.value)}
        />`;case"secret":return this.renderSecretControl(e,t,i);case"option":return R`<div class="radios">
          ${(t.options??[]).map(n=>R`<label
              ><input
                type="radio"
                name=${r}
                .checked=${i===n}
                @change=${()=>this.setValue(e,t,n)}
              />${n}</label
            >`)}
        </div>`;case"selection":{const n=Array.isArray(i)?i:[];return R`<div class="checks">
          ${(t.options??[]).map(o=>R`<label
              ><input
                type="checkbox"
                .checked=${n.includes(o)}
                @change=${l=>{const h=l.target.checked?[...n,o]:n.filter(g=>g!==o);this.setValue(e,t,h)}}
              />${o}</label
            >`)}
        </div>`}case"string":default:return R`<input
          type="text"
          .value=${String(i??"")}
          @change=${n=>this.setValue(e,t,n.target.value)}
        />`}}renderSecretControl(e,t,r){const i=Object.keys(Pi(this.secretsText));return R`<div class="secret-row">
      <input
        type="text"
        placeholder="value or \${secret:name}"
        .value=${String(r??"")}
        @change=${n=>this.setValue(e,t,n.target.value)}
      />
      ${i.length>0?R`<select
            title="Insert a secret reference"
            @change=${n=>{const o=n.target.value;o&&this.setValue(e,t,`\${secret:${o}}`),n.target.value=""}}
          >
            <option value="">🔑 secret…</option>
            ${i.map(n=>R`<option value=${n}>${n}</option>`)}
          </select>`:me}
    </div>`}renderField(e,t){const r=`${e.id}:${t.key}`;return R`<div class="field">
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
      ${t.description?R`<p class="desc">${t.description}</p>`:me}
    </div>`}renderGeneral(){return R`
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
        </p>
        <textarea
          placeholder="githubPAT: ghp_…"
          .value=${this.secretsText}
          @input=${this.onSecretsInput}
        ></textarea>
      </div>
    `}renderPanel(){if(this.active===xr)return this.renderGeneral();const e=this.tabs.find(t=>t.id===this.active);return e?R`
      <h3>${e.name}</h3>
      ${e.fields.length===0?R`<p class="empty">This plugin registered no settings.</p>`:e.fields.map(t=>this.renderField(e,t))}
    `:me}render(){return R`
      <dialog @cancel=${this.close} @keydown=${Kt}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>
          <span class="mi sm">close</span>
        </button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>Settings</h2>
            <div class="header-actions">
              <button type="submit" class="primary">Done</button>
            </div>
          </div>
          <div class="dialog-body">
            <div class="layout">
              <nav class="tabs">
                <button
                  type="button"
                  class=${this.active===xr?"active":""}
                  @click=${()=>this.active=xr}
                >
                  General
                </button>
                ${this.tabs.map(e=>R`<button
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
    `}};yn.styles=[Zt,Wt,Ye`
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
      .secret-row {
        display: flex;
        gap: 0.4rem;
        align-items: center;
      }
      .secret-row select {
        width: auto;
        flex: 0 0 auto;
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
    `];Vn([K()],yn.prototype,"tabs",2);Vn([K()],yn.prototype,"active",2);Vn([K()],yn.prototype,"values",2);Vn([K()],yn.prototype,"placements",2);Vn([K()],yn.prototype,"secretsText",2);Vn([K()],yn.prototype,"workspaceTitle",2);yn=Vn([nt("settings-dialog")],yn);/**
 * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu
 * @version v4.16.1
 * @homepage https://jspanel.de/
 * @license MIT
 * @author Stefan Sträßer - info@jspanel.de
 * @author of dialog extension: Michael Daumling - michael@terrapinlogo.com
 * @github https://github.com/Flyer53/jsPanel4.git
 */let F={version:"4.16.1",date:"2022-11-03 09:18",ajaxAlwaysCallbacks:[],autopositionSpacing:4,closeOnEscape:(()=>{document.addEventListener("keydown",e=>{(e.key==="Escape"||e.code==="Escape"||e.key==="Esc")&&F.getPanels(t=>t.classList.contains("jsPanel")).some(t=>t.options.closeOnEscape?typeof t.options.closeOnEscape=="function"?t.options.closeOnEscape.call(t,t):(t.close(null,!0),!0):!1)},!1)})(),defaults:{boxShadow:3,container:"window",contentSize:{width:"400px",height:"200px"},dragit:{cursor:"move",handles:".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",opacity:.8,disableOnMaximized:!0},header:!0,headerTitle:"jsPanel",headerControls:{size:"md"},iconfont:void 0,maximizedMargin:0,minimizeTo:"default",paneltype:"standard",position:{my:"center",at:"center"},resizeit:{handles:"n, e, s, w, ne, se, sw, nw",minWidth:128,minHeight:38},theme:"default"},defaultAutocloseConfig:{time:"8s",progressbar:!0},defaultSnapConfig:{sensitivity:70,trigger:"panel",active:"both"},extensions:{},globalCallbacks:!1,icons:{close:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>',maximize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>',normalize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>',minimize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>',smallify:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>'},idCounter:0,isIE:document.documentMode||!1,pointerdown:"onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],pointermove:"onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],pointerup:"onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"],polyfills:(()=>{Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e==null)throw new TypeError("Cannot convert first argument to object");let t=Object(e);for(let r=1;r<arguments.length;r++){let i=arguments[r];if(i==null)continue;i=Object(i);let n=Object.keys(Object(i));for(let o=0,l=n.length;o<l;o++){let c=n[o],h=Object.getOwnPropertyDescriptor(i,c);h!==void 0&&h.enumerable&&(t[c]=i[c])}}return t}}),Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),r=t.length,i=new Array(r);r--;)i[r]=[t[r],e[t[r]]];return i}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(let r=0;r<this.length;r++)e.call(t,this[r],r,this)}),(function(e){e.forEach(function(t){t.append=t.append||function(){let r=Array.prototype.slice.call(arguments),i=document.createDocumentFragment();r.forEach(function(n){let o=n instanceof Node;i.appendChild(o?n:document.createTextNode(String(n)))}),this.appendChild(i)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){let t=(this.document||this.ownerDocument).querySelectorAll(e),r,i=this;do for(r=t.length;--r>=0&&t.item(r)!==i;);while(r<0&&(i=i.parentElement));return i}),(function(){if(typeof window.CustomEvent=="function")return!1;function e(t,r){r=r||{bubbles:!1,cancelable:!1,detail:void 0};let i=document.createEvent("CustomEvent");return i.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),i}e.prototype=window.Event.prototype,window.CustomEvent=e})(),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(t===void 0||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var r=t>0?t|0:0;return this.substring(r,r+e.length)===e}}),String.prototype.includes||(String.prototype.includes=function(e,t){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return t===void 0&&(t=0),this.indexOf(e,t)!==-1}),String.prototype.repeat||(String.prototype.repeat=function(e){if(this==null)throw new TypeError("can't convert "+this+" to object");var t=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),t.length==0||e==0)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,r-t.length),t}),Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw new TypeError('"this" is null or not defined');let r=Object(this),i=r.length>>>0;if(i===0)return!1;let n=t|0,o=Math.max(n>=0?n:i-Math.abs(n),0);function l(c,h){return c===h||typeof c=="number"&&typeof h=="number"&&isNaN(c)&&isNaN(h)}for(;o<i;){if(l(r[o],e))return!0;o++}return!1}})})(),ziBase:100,colorFilledLight:.81,colorFilledDark:.08,colorFilled:0,colorBrightnessThreshold:.55,colorNames:{default:"b0bec5",secondary:"b0bec5",primary:"01579b",info:"039be5",success:"2e7d32",warning:"f57f17",danger:"dd2c00",light:"e0e0e0",dark:"263238",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",grey50:"fafafa",grey100:"f5f5f5",grey200:"eeeeee",grey300:"e0e0e0",grey400:"bdbdbd",grey500:"9e9e9e",grey600:"757575",grey700:"616161",grey800:"424242",grey900:"212121",gray50:"fafafa",gray100:"f5f5f5",gray200:"eeeeee",gray300:"e0e0e0",gray400:"bdbdbd",gray500:"9e9e9e",gray600:"757575",gray700:"616161",gray800:"424242",gray900:"212121",bluegrey50:"eceff1",bluegrey100:"CFD8DC",bluegrey200:"B0BEC5",bluegrey300:"90A4AE",bluegrey400:"78909C",bluegrey500:"607D8B",bluegrey600:"546E7A",bluegrey700:"455A64",bluegrey800:"37474F",bluegrey900:"263238",bluegray50:"eceff1",bluegray100:"CFD8DC",bluegray200:"B0BEC5",bluegray300:"90A4AE",bluegray400:"78909C",bluegray500:"607D8B",bluegray600:"546E7A",bluegray700:"455A64",bluegray800:"37474F",bluegray900:"263238",red50:"FFEBEE",red100:"FFCDD2",red200:"EF9A9A",red300:"E57373",red400:"EF5350",red500:"F44336",red600:"E53935",red700:"D32F2F",red800:"C62828",red900:"B71C1C",reda100:"FF8A80",reda200:"FF5252",reda400:"FF1744",reda700:"D50000",pink50:"FCE4EC",pink100:"F8BBD0",pink200:"F48FB1",pink300:"F06292",pink400:"EC407A",pink500:"E91E63",pink600:"D81B60",pink700:"C2185B",pink800:"AD1457",pink900:"880E4F",pinka100:"FF80AB",pinka200:"FF4081",pinka400:"F50057",pinka700:"C51162",purple50:"F3E5F5",purple100:"E1BEE7",purple200:"CE93D8",purple300:"BA68C8",purple400:"AB47BC",purple500:"9C27B0",purple600:"8E24AA",purple700:"7B1FA2",purple800:"6A1B9A",purple900:"4A148C",purplea100:"EA80FC",purplea200:"E040FB",purplea400:"D500F9",purplea700:"AA00FF",deeppurple50:"EDE7F6",deeppurple100:"D1C4E9",deeppurple200:"B39DDB",deeppurple300:"9575CD",deeppurple400:"7E57C2",deeppurple500:"673AB7",deeppurple600:"5E35B1",deeppurple700:"512DA8",deeppurple800:"4527A0",deeppurple900:"311B92",deeppurplea100:"B388FF",deeppurplea200:"7C4DFF",deeppurplea400:"651FFF",deeppurplea700:"6200EA",indigo50:"E8EAF6",indigo100:"C5CAE9",indigo200:"9FA8DA",indigo300:"7986CB",indigo400:"5C6BC0",indigo500:"3F51B5",indigo600:"3949AB",indigo700:"303F9F",indigo800:"283593",indigo900:"1A237E",indigoa100:"8C9EFF",indigoa200:"536DFE",indigoa400:"3D5AFE",indigoa700:"304FFE",blue50:"E3F2FD",blue100:"BBDEFB",blue200:"90CAF9",blue300:"64B5F6",blue400:"42A5F5",blue500:"2196F3",blue600:"1E88E5",blue700:"1976D2",blue800:"1565C0",blue900:"0D47A1",bluea100:"82B1FF",bluea200:"448AFF",bluea400:"2979FF",bluea700:"2962FF",lightblue50:"E1F5FE",lightblue100:"B3E5FC",lightblue200:"81D4FA",lightblue300:"4FC3F7",lightblue400:"29B6F6",lightblue500:"03A9F4",lightblue600:"039BE5",lightblue700:"0288D1",lightblue800:"0277BD",lightblue900:"01579B",lightbluea100:"80D8FF",lightbluea200:"40C4FF",lightbluea400:"00B0FF",lightbluea700:"0091EA",cyan50:"E0F7FA",cyan100:"B2EBF2",cyan200:"80DEEA",cyan300:"4DD0E1",cyan400:"26C6DA",cyan500:"00BCD4",cyan600:"00ACC1",cyan700:"0097A7",cyan800:"00838F",cyan900:"006064",cyana100:"84FFFF",cyana200:"18FFFF",cyana400:"00E5FF",cyana700:"00B8D4",teal50:"E0F2F1",teal100:"B2DFDB",teal200:"80CBC4",teal300:"4DB6AC",teal400:"26A69A",teal500:"009688",teal600:"00897B",teal700:"00796B",teal800:"00695C",teal900:"004D40",teala100:"A7FFEB",teala200:"64FFDA",teala400:"1DE9B6",teala700:"00BFA5",green50:"E8F5E9",green100:"C8E6C9",green200:"A5D6A7",green300:"81C784",green400:"66BB6A",green500:"4CAF50",green600:"43A047",green700:"388E3C",green800:"2E7D32",green900:"1B5E20",greena100:"B9F6CA",greena200:"69F0AE",greena400:"00E676",greena700:"00C853",lightgreen50:"F1F8E9",lightgreen100:"DCEDC8",lightgreen200:"C5E1A5",lightgreen300:"AED581",lightgreen400:"9CCC65",lightgreen500:"8BC34A",lightgreen600:"7CB342",lightgreen700:"689F38",lightgreen800:"558B2F",lightgreen900:"33691E",lightgreena100:"CCFF90",lightgreena200:"B2FF59",lightgreena400:"76FF03",lightgreena700:"64DD17",lime50:"F9FBE7",lime100:"F0F4C3",lime200:"E6EE9C",lime300:"DCE775",lime400:"D4E157",lime500:"CDDC39",lime600:"C0CA33",lime700:"AFB42B",lime800:"9E9D24",lime900:"827717",limea100:"F4FF81",limea200:"EEFF41",limea400:"C6FF00",limea700:"AEEA00",yellow50:"FFFDE7",yellow100:"FFF9C4",yellow200:"FFF59D",yellow300:"FFF176",yellow400:"FFEE58",yellow500:"FFEB3B",yellow600:"FDD835",yellow700:"FBC02D",yellow800:"F9A825",yellow900:"F57F17",yellowa100:"FFFF8D",yellowa200:"FFFF00",yellowa400:"FFEA00",yellowa700:"FFD600",amber50:"FFF8E1",amber100:"FFECB3",amber200:"FFE082",amber300:"FFD54F",amber400:"FFCA28",amber500:"FFC107",amber600:"FFB300",amber700:"FFA000",amber800:"FF8F00",amber900:"FF6F00",ambera100:"FFE57F",ambera200:"FFD740",ambera400:"FFC400",ambera700:"FFAB00",orange50:"FFF3E0",orange100:"FFE0B2",orange200:"FFCC80",orange300:"FFB74D",orange400:"FFA726",orange500:"FF9800",orange600:"FB8C00",orange700:"F57C00",orange800:"EF6C00",orange900:"E65100",orangea100:"FFD180",orangea200:"FFAB40",orangea400:"FF9100",orangea700:"FF6D00",deeporange50:"FBE9E7",deeporange100:"FFCCBC",deeporange200:"FFAB91",deeporange300:"FF8A65",deeporange400:"FF7043",deeporange500:"FF5722",deeporange600:"F4511E",deeporange700:"E64A19",deeporange800:"D84315",deeporange900:"BF360C",deeporangea100:"FF9E80",deeporangea200:"FF6E40",deeporangea400:"FF3D00",deeporangea700:"DD2C00",brown50:"EFEBE9",brown100:"D7CCC8",brown200:"BCAAA4",brown300:"A1887F",brown400:"8D6E63",brown500:"795548",brown600:"6D4C41",brown700:"5D4037",brown800:"4E342E",brown900:"3E2723","mdb-default":"2BBBAD","mdb-default-dark":"00695c","mdb-primary":"4285F4","mdb-primary-dark":"0d47a1","mdb-secondary":"aa66cc","mdb-secondary-dark":"9933CC","mdb-danger":"ff4444","mdb-danger-dark":"CC0000","mdb-warning":"ffbb33","mdb-warning-dark":"FF8800","mdb-success":"00C851","mdb-success-dark":"007E33","mdb-info":"33b5e5","mdb-info-dark":"0099CC","mdb-elegant":"2E2E2E","mdb-elegant-dark":"212121","mdb-stylish":"4B515D","mdb-stylish-dark":"3E4551","mdb-unique":"3F729B","mdb-unique-dark":"1C2331","mdb-special":"37474F","mdb-special-dark":"263238"},errorReporting:1,modifier:!1,helper:(()=>{document.addEventListener("keydown",e=>F.modifier=e),document.addEventListener("keyup",()=>F.modifier=!1)})(),usePointerEvents(e=!0){e?(this.pointerdown="onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"]):(this.pointerdown="ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="ontouchend"in window?["touchend","mouseup"]:["mouseup"])},pOcontainer(e){if(e==="window")return document.body;if(typeof e=="string"){let t=document.querySelectorAll(e);return t.length&&t.length>0?t:!1}else{if(e.nodeType===1)return e;if(e.length)return e[0]}return!1},pOcontainment(e){let t=e;if(typeof e=="function"&&(t=e()),typeof t=="number")return[t,t,t,t];if(Array.isArray(t)){if(t.length===1)return[t[0],t[0],t[0],t[0]];if(t.length===2)return t.concat(t);t.length===3&&(t[3]=t[1])}return t},pOsize(e,t){let r=t||this.defaults.contentSize;const i=e.parentElement;if(typeof r=="string"){const n=r.trim().split(" ");r={},r.width=n[0],n.length===2?r.height=n[1]:r.height=n[0]}else r.width&&!r.height?r.height=r.width:r.height&&!r.width&&(r.width=r.height);if(String(r.width).match(/^[\d.]+$/gi))r.width+="px";else if(typeof r.width=="string"&&r.width.endsWith("%"))if(i===document.body)r.width=window.innerWidth*(parseFloat(r.width)/100)+"px";else{const n=window.getComputedStyle(i),o=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth);r.width=(parseFloat(n.width)-o)*(parseFloat(r.width)/100)+"px"}else typeof r.width=="function"&&(r.width=r.width.call(e,e),(typeof r.width=="number"||typeof r.width=="string"&&r.width.match(/^[\d.]+$/gi))&&(r.width+="px"));if(String(r.height).match(/^[\d.]+$/gi))r.height+="px";else if(typeof r.height=="string"&&r.height.endsWith("%"))if(i===document.body)r.height=window.innerHeight*(parseFloat(r.height)/100)+"px";else{const n=window.getComputedStyle(i),o=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth);r.height=(parseFloat(n.height)-o)*(parseFloat(r.height)/100)+"px"}else typeof r.height=="function"&&(r.height=r.height.call(e,e),(typeof r.height=="number"||typeof r.height=="string"&&r.height.match(/^[\d.]+$/gi))&&(r.height+="px"));return r},pOborder(e){let t=[],r=e.trim().replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," ").split(" ");return r.forEach((i,n)=>{(i.startsWith("--")||i.startsWith("var"))&&(r[n]=F.getCssVariableValue(i))}),r.forEach(i=>{F.colorNames[i]?t[2]="#"+F.colorNames[i]:i.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/)?t[1]=i:i.match(/(thin|medium|thick)|(\d*\.?\d*(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vmax|vmin|vb|vi|px|cm|mm|Q|in|pc|pt))/)?t[0]=i:t[2]=i}),t[0]||(t[0]="medium"),t[1]||(t[1]="solid"),t[2]||(t[2]=""),t},pOheaderControls(e){if(typeof e=="string"){let t={},r=e.toLowerCase(),i=r.match(/xl|lg|md|sm|xs/),n=r.match(/closeonly|none/);return i&&(t.size=i[0]),n&&(t=Object.assign({},t,{maximize:"remove",normalize:"remove",minimize:"remove",smallify:"remove"}),n[0]==="none"&&(t.close="remove")),Object.assign({},this.defaults.headerControls,t)}else return Object.assign({},this.defaults.headerControls,e)},pOtheme(e){e=e.trim();let t,r="";if(e.match(/^(rgb|hsl|var)/)){let i=e.indexOf(")");t=e.slice(0,i+1).replace(/\s+/g,""),t.startsWith("var")&&(t=F.getCssVariableValue(t)),r=e.slice(i+1,e.length).trim()}else if(e.match(/^(#|\w|--)/)){let i=e.indexOf(" ");i>0?(t=e.slice(0,i+1).replace(/\s+/g,""),r=e.slice(i+1,e.length).trim()):t=e,t.startsWith("--")&&(t=F.getCssVariableValue(t))}if(t.match(/^([\da-f]{3}|[\da-f]{6})$/gi)&&(t="#"+t),r.startsWith("fillcolor")){let i=r.indexOf(" ");r=r.slice(i+1,r.length).trim().replace(/\s+/g,""),r.match(/^([\da-f]{3}|[\da-f]{6})$/gi)?r="#"+r:F.colorNames[r]?r="#"+F.colorNames[r]:r.match(/^(--|var)/)?r=F.getCssVariableValue(r):r="#fff"}return{color:t,colors:!1,filling:r}},color(e){let t=e.toLowerCase(),r,i,n,o,l,c,h,g,x,w={};const P=/^#?([\da-f]{3}|[\da-f]{6})$/gi,W=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,L=/^hsla?\((\d{1,3}),(\d{1,3}%),(\d{1,3}%),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,N=this.colorNames;return N[t]&&(t=N[t]),t.match(P)!==null?(t=t.replace("#",""),t.length%2===1?(r=t.slice(0,1).repeat(2),i=t.slice(1,2).repeat(2),n=t.slice(2,3).repeat(2),w.rgb={r:parseInt(r,16),g:parseInt(i,16),b:parseInt(n,16)},w.hex=`#${r}${i}${n}`):(w.rgb={r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)},w.hex=`#${t}`),x=this.rgbToHsl(w.rgb.r,w.rgb.g,w.rgb.b),w.hsl=x,w.rgb.css=`rgb(${w.rgb.r},${w.rgb.g},${w.rgb.b})`):t.match(W)?(h=W.exec(t),w.rgb={css:t,r:h[1],g:h[2],b:h[3]},w.hex=this.rgbToHex(h[1],h[2],h[3]),x=this.rgbToHsl(h[1],h[2],h[3]),w.hsl=x):t.match(L)?(h=L.exec(t),o=h[1]/360,l=h[2].slice(0,h[2].length-1)/100,c=h[3].slice(0,h[3].length-1)/100,g=this.hslToRgb(o,l,c),w.rgb={css:`rgb(${g[0]},${g[1]},${g[2]})`,r:g[0],g:g[1],b:g[2]},w.hex=this.rgbToHex(w.rgb.r,w.rgb.g,w.rgb.b),w.hsl={css:`hsl(${h[1]},${h[2]},${h[3]})`,h:h[1],s:h[2],l:h[3]}):(w.hex="#f5f5f5",w.rgb={css:"rgb(245,245,245)",r:245,g:245,b:245},w.hsl={css:"hsl(0,0%,96%)",h:0,s:"0%",l:"96%"}),w},calcColors(e){const t=this.colorBrightnessThreshold,r=this.color(e),i=this.lighten(e,this.colorFilledLight),n=this.darken(e,this.colorFilled),o=this.perceivedBrightness(e)<=t?"#ffffff":"#000000",l=this.perceivedBrightness(i)<=t?"#ffffff":"#000000",c=this.perceivedBrightness(n)<=t?"#ffffff":"#000000",h=this.lighten(e,this.colorFilledDark),g=this.perceivedBrightness(h)<=t?"#ffffff":"#000000";return[r.hsl.css,i,n,o,l,c,h,g]},darken(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i-i*t)+"%";return`hsl(${r.h},${r.s},${n})`},lighten(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i+(100-i)*t)+"%";return`hsl(${r.h},${r.s},${n})`},hslToRgb(e,t,r){let i,n,o;if(t===0)i=n=o=r;else{let l=(g,x,w)=>(w<0&&(w+=1),w>1&&(w-=1),w<.16666666666666666?g+(x-g)*6*w:w<.5?x:w<.6666666666666666?g+(x-g)*(.6666666666666666-w)*6:g),c=r<.5?r*(1+t):r+t-r*t,h=2*r-c;i=l(h,c,e+1/3),n=l(h,c,e),o=l(h,c,e-1/3)}return[Math.round(i*255),Math.round(n*255),Math.round(o*255)]},rgbToHsl(e,t,r){e/=255,t/=255,r/=255;let i=Math.max(e,t,r),n=Math.min(e,t,r),o,l,c=(i+n)/2;if(i===n)o=l=0;else{let h=i-n;switch(l=c>.5?h/(2-i-n):h/(i+n),i){case e:o=(t-r)/h+(t<r?6:0);break;case t:o=(r-e)/h+2;break;case r:o=(e-t)/h+4;break}o/=6}return o=Math.round(o*360),l=Math.round(l*100)+"%",c=Math.round(c*100)+"%",{css:"hsl("+o+","+l+","+c+")",h:o,s:l,l:c}},rgbToHex(e,t,r){let i=Number(e).toString(16),n=Number(t).toString(16),o=Number(r).toString(16);return i.length===1&&(i=`0${i}`),n.length===1&&(n=`0${n}`),o.length===1&&(o=`0${o}`),`#${i}${n}${o}`},perceivedBrightness(e){const t=this.color(e).rgb;return t.r/255*.2126+t.g/255*.7152+t.b/255*.0722},pOposition(e){let t={},r=e.trim().split(/\s+/),i=r.filter(l=>l.match(/^(down|right|up|left)$/i));i.length&&(t.autoposition=i[0],r.splice(r.indexOf(i[0]),1));let n=r.filter(l=>l.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i));n.length?(t.my=n[0],t.at=n[1]||n[0],r.splice(r.indexOf(n[0]),1),n[1]&&r.splice(r.indexOf(n[1]),1)):(t.my="center",t.at="center");let o=r.filter(l=>l.match(/^[+-]?\d*\.?\d+[a-z%]*$/i));return o.length&&(t.offsetX=o[0].match(/^[+-]?\d*\.?\d+$/i)?`${o[0]}px`:o[0],o[1]?t.offsetY=o[1].match(/^[+-]?\d*\.?\d+$/i)?`${o[1]}px`:o[1]:t.offsetY=t.offsetX,r.splice(r.indexOf(o[0]),1),o[1]&&r.splice(r.indexOf(o[1]),1)),r.length&&(t.of=r.join(" ")),t},position(e,t){if(!t)return e.style.opacity=1,e;typeof t=="string"?t=Object.assign({},this.defaults.position,this.pOposition(t)):t=Object.assign({},this.defaults.position,t),["my","at","of"].forEach(N=>{typeof t[N]=="function"&&(t[N]=t[N].call(e,e))}),e.options.container==="window"&&(e.style.position="fixed"),typeof e=="string"?e=document.querySelector(e):Object.getPrototypeOf(e).jquery&&(e=e[0]);const r=e.options.container==="window"?"window":e.parentElement,i=e.getBoundingClientRect(),n=e.parentElement.getBoundingClientRect(),o=r==="window"?{left:0,top:0,width:document.documentElement.clientWidth,height:window.innerHeight}:{width:n.width,height:n.height,left:n.left,top:n.top},l=r==="window"?{x:1,y:1}:{x:o.width/r.offsetWidth,y:o.height/r.offsetHeight},c=r==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:window.getComputedStyle(r);o.width-=(parseFloat(c.borderLeftWidth)+parseFloat(c.borderRightWidth))*l.x,o.height-=(parseFloat(c.borderTopWidth)+parseFloat(c.borderBottomWidth))*l.y;let h;t.of?typeof t.of=="string"?h=t.of==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:document.querySelector(t.of).getBoundingClientRect():Object.getPrototypeOf(t.of).jquery?h=t.of[0].getBoundingClientRect():h=t.of.getBoundingClientRect():h=o;let g=this.getScrollbarWidth(document.body),x=this.getScrollbarWidth(e.parentElement),w="0px";t.my.startsWith("left-")?t.at.startsWith("left-")?t.of?w=h.left-o.left-parseFloat(c.borderLeftWidth)+"px":w="0px":t.at.startsWith("center")?t.of?w=h.left-o.left-parseFloat(c.borderLeftWidth)+h.width/2+"px":w=o.width/2+"px":t.at.startsWith("right-")&&(t.of?w=h.left-o.left-parseFloat(c.borderLeftWidth)+h.width+"px":w=o.width+"px"):t.my.startsWith("center")?t.at.startsWith("left-")?t.of?w=h.left-o.left-parseFloat(c.borderLeftWidth)-i.width/2+"px":w=-i.width/2+"px":t.at.startsWith("center")?t.of?w=h.left-o.left-parseFloat(c.borderLeftWidth)-(i.width-h.width)/2+"px":w=o.width/2-i.width/2+"px":t.at.startsWith("right-")&&(t.of?w=h.left-o.left-parseFloat(c.borderLeftWidth)+(h.width-i.width/2)+"px":w=o.width-i.width/2+"px"):t.my.startsWith("right-")&&(t.at.startsWith("left-")?t.of?w=h.left-o.left-parseFloat(c.borderLeftWidth)-i.width+"px":w=-i.width+"px":t.at.startsWith("center")?t.of?w=h.left-o.left-parseFloat(c.borderLeftWidth)-i.width+h.width/2+"px":w=o.width/2-i.width+"px":t.at.startsWith("right-")&&(t.of?w=h.left-o.left-parseFloat(c.borderLeftWidth)+h.width-i.width+"px":w=o.width-i.width+"px",r!=="window"&&(w=parseFloat(w)-x.y+"px")));let P="0px";t.my.endsWith("-top")?t.at.endsWith("-top")?t.of?P=h.top-o.top-parseFloat(c.borderTopWidth)+"px":P="0px":t.at.endsWith("center")?t.of?P=h.top-o.top-parseFloat(c.borderTopWidth)+h.height/2+"px":P=o.height/2+"px":t.at.endsWith("-bottom")&&(t.of?P=h.top-o.top-parseFloat(c.borderTopWidth)+h.height+"px":P=o.height+"px"):t.my.endsWith("center")?t.at.endsWith("-top")?t.of?P=h.top-o.top-parseFloat(c.borderTopWidth)-i.height/2+"px":P=-i.height/2+"px":t.at.endsWith("center")?t.of?P=h.top-o.top-parseFloat(c.borderTopWidth)-i.height/2+h.height/2+"px":P=o.height/2-i.height/2+"px":t.at.endsWith("-bottom")&&(t.of?P=h.top-o.top-parseFloat(c.borderTopWidth)-i.height/2+h.height+"px":P=o.height-i.height/2+"px"):t.my.endsWith("-bottom")&&(t.at.endsWith("-top")?t.of?P=h.top-o.top-parseFloat(c.borderTopWidth)-i.height+"px":P=-i.height+"px":t.at.endsWith("center")?t.of?P=h.top-o.top-parseFloat(c.borderTopWidth)-i.height+h.height/2+"px":P=o.height/2-i.height+"px":t.at.endsWith("-bottom")&&(t.of?P=h.top-o.top-parseFloat(c.borderTopWidth)-i.height+h.height+"px":P=o.height-i.height+"px",r!=="window"?P=parseFloat(P)-x.x+"px":P=parseFloat(P)-g.x+"px")),e.style.left=l.x===1?w:parseFloat(w)/l.x+"px",e.style.top=l.y===1?P:parseFloat(P)/l.y+"px";let W=getComputedStyle(e),L={left:W.left,top:W.top};return t.autoposition&&t.my===t.at&&["left-top","center-top","right-top","left-bottom","center-bottom","right-bottom"].indexOf(t.my)>=0&&(L=this.applyPositionAutopos(e,L,t)),(t.offsetX||t.offsetY)&&(L=this.applyPositionOffset(e,L,t)),(t.minLeft||t.minTop||t.maxLeft||t.maxTop)&&(L=this.applyPositionMinMax(e,L,t)),t.modify&&(L=this.applyPositionModify(e,L,t)),typeof e.options.opacity=="number"?e.style.opacity=e.options.opacity:e.style.opacity=1,e},applyPositionAutopos(e,t,r){const i=`${r.my}-${r.autoposition.toLowerCase()}`;e.classList.add(i);const n=Array.prototype.slice.call(document.querySelectorAll(`.${i}`)),o=n.indexOf(e);if(n.length>1){switch(r.autoposition){case"down":n.forEach((l,c)=>{c>0&&c<=o&&(t.top=parseFloat(t.top)+n[--c].getBoundingClientRect().height+F.autopositionSpacing+"px")});break;case"up":n.forEach((l,c)=>{c>0&&c<=o&&(t.top=parseFloat(t.top)-n[--c].getBoundingClientRect().height-F.autopositionSpacing+"px")});break;case"right":n.forEach((l,c)=>{c>0&&c<=o&&(t.left=parseFloat(t.left)+n[--c].getBoundingClientRect().width+F.autopositionSpacing+"px")});break;case"left":n.forEach((l,c)=>{c>0&&c<=o&&(t.left=parseFloat(t.left)-n[--c].getBoundingClientRect().width-F.autopositionSpacing+"px")});break}e.style.left=t.left,e.style.top=t.top}return{left:t.left,top:t.top}},applyPositionOffset(e,t,r){["offsetX","offsetY"].forEach(n=>{r[n]?(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),isNaN(r[n])===!1&&(r[n]=`${r[n]}px`)):r[n]="0px"}),e.style.left=`calc(${e.style.left} + ${r.offsetX})`,e.style.top=`calc(${e.style.top} + ${r.offsetY})`;const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionMinMax(e,t,r){if(["minLeft","minTop","maxLeft","maxTop"].forEach(n=>{r[n]&&(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),(Number.isInteger(r[n])||r[n].match(/^\d+$/))&&(r[n]=`${r[n]}px`))}),r.minLeft){e.style.left=r.minLeft;let n=getComputedStyle(e).left;parseFloat(n)<parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.minTop){e.style.top=r.minTop;let n=getComputedStyle(e).top;parseFloat(n)<parseFloat(t.top)?e.style.top=t.top:t.top=n}if(r.maxLeft){e.style.left=r.maxLeft;let n=getComputedStyle(e).left;parseFloat(n)>parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.maxTop){e.style.top=r.maxTop;let n=getComputedStyle(e).top;parseFloat(n)>parseFloat(t.top)?e.style.top=t.top:t.top=n}const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionModify(e,t,r){if(r.modify&&typeof r.modify=="function"){const n=r.modify.call(t,t,r);e.style.left=Number.isInteger(n.left)||n.left.match(/^\d+$/)?`${n.left}px`:n.left,e.style.top=Number.isInteger(n.top)||n.top.match(/^\d+$/)?`${n.top}px`:n.top}const i=getComputedStyle(e);return{left:i.left,top:i.top}},autopositionRemaining(e){let t,r=e.options.container;["left-top-down","left-top-right","center-top-down","right-top-down","right-top-left","left-bottom-up","left-bottom-right","center-bottom-up","right-bottom-up","right-bottom-left"].forEach(i=>{e.classList.contains(i)&&(t=i)}),t&&(r==="window"?document.body:typeof r=="string"?document.querySelector(r):r).querySelectorAll(`.${t}`).forEach(n=>n.reposition())},getThemeDetails(e){const t=this.pOtheme(e);if(t.color.startsWith("bootstrap-")){let r=t.color.indexOf("-"),i=document.createElement("button");i.className="btn btn"+t.color.slice(r),document.body.appendChild(i),t.color=getComputedStyle(i).backgroundColor.replace(/\s+/gi,""),document.body.removeChild(i),i=void 0}return t.colors=this.calcColors(t.color),t},clearTheme(e,t){return e.content.classList.remove("jsPanel-content-filled","jsPanel-content-filledlight"),e.header.classList.remove("jsPanel-hdr-light"),e.header.classList.remove("jsPanel-hdr-dark"),e.style.backgroundColor="",this.setStyles(e.headertoolbar,{boxShadow:"",width:"",marginLeft:"",borderTopColor:"transparent"}),this.setStyles(e.content,{background:"",borderTopColor:"transparent"}),e.header.style.background="",Array.prototype.slice.call(e.controlbar.querySelectorAll(".jsPanel-icon")).concat([e.headerlogo,e.headertitle,e.headertoolbar,e.content]).forEach(r=>r.style.color=""),t&&t.call(e,e),e},applyColorTheme(e,t){if(e.style.backgroundColor=t.colors[0],e.header.style.backgroundColor=t.colors[0],e.header.style.color=t.colors[3],[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(r=>e.querySelector(r).style.color=t.colors[3]),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(r=>r.style.color=t.colors[3]),typeof e.options.theme=="string"&&t.filling==="filled"&&(e.content.style.borderTop=t.colors[3]==="#000000"?"1px solid rgba(0,0,0,0.15)":"1px solid rgba(255,255,255,0.15)"),t.colors[3]==="#000000"?e.header.classList.add("jsPanel-hdr-light"):e.header.classList.add("jsPanel-hdr-dark"),t.filling)switch(t.filling){case"filled":this.setStyles(e.content,{backgroundColor:t.colors[2],color:t.colors[3]});break;case"filledlight":e.content.style.backgroundColor=t.colors[1];break;case"filleddark":this.setStyles(e.content,{backgroundColor:t.colors[6],color:t.colors[7]});break;default:e.content.style.backgroundColor=t.filling,e.content.style.color=this.perceivedBrightness(t.filling)<=this.colorBrightnessThreshold?"#fff":"#000"}return e},applyCustomTheme(e,t){let r={bgPanel:"#ffffff",bgContent:"#ffffff",bgFooter:"#f5f5f5",colorHeader:"#000000",colorContent:"#000000",colorFooter:"#000000",border:void 0,borderRadius:void 0},i=typeof t=="object"?Object.assign(r,t):r,n=i.bgPanel,o=i.bgContent,l=i.colorHeader,c=i.colorContent,h=i.bgFooter,g=i.colorFooter;return this.colorNames[n]?e.style.background="#"+this.colorNames[n]:e.style.background=this.getCssVariableValue(n),this.colorNames[l]&&(l="#"+this.colorNames[l]),[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(P=>e.querySelector(P).style.color=this.getCssVariableValue(l)),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(P=>P.style.color=this.getCssVariableValue(l)),this.colorNames[o]?e.content.style.background="#"+this.colorNames[o]:e.content.style.background=this.getCssVariableValue(o),this.colorNames[c]?e.content.style.color="#"+this.colorNames[c]:e.content.style.color=this.getCssVariableValue(c),this.perceivedBrightness(l)>this.colorBrightnessThreshold?e.header.classList.add("jsPanel-hdr-dark"):e.header.classList.add("jsPanel-hdr-light"),this.perceivedBrightness(c)>this.colorBrightnessThreshold?e.content.style.borderTop="1px solid rgba(255,255,255,0.15)":e.content.style.borderTop="1px solid rgba(0,0,0,0.15)",this.colorNames[h]?e.footer.style.background="#"+this.colorNames[h]:e.footer.style.background=this.getCssVariableValue(h),this.colorNames[g]?e.footer.style.color="#"+this.colorNames[g]:e.footer.style.color=this.getCssVariableValue(g),i.border&&e.setBorder(i.border),i.borderRadius&&(e.options.borderRadius=void 0,e.setBorderRadius(i.borderRadius)),e},getCssVariableValue(e){if(e.startsWith("--"))return getComputedStyle(document.documentElement).getPropertyValue(e).replace(/\s+/g,"");if(e.startsWith("var")){let t=e.slice(e.indexOf("(")+1,e.indexOf(")"));return getComputedStyle(document.documentElement).getPropertyValue(t).replace(/\s+/g,"")}return e},getScrollbarWidth(e=document.body){if(e===document.body)return{y:window.innerWidth-document.documentElement.clientWidth,x:window.innerHeight-document.documentElement.clientHeight};{let t=getComputedStyle(e);return{y:e.offsetWidth-e.clientWidth-parseFloat(t.borderRightWidth)-parseFloat(t.borderLeftWidth),x:e.offsetHeight-e.clientHeight-parseFloat(t.borderBottomWidth)-parseFloat(t.borderTopWidth)}}},remClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.remove(r)),e},setClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.add(r)),e},setStyles(e,t){for(const[r,i]of Object.entries(t))e.style[r]=typeof i=="string"?F.getCssVariableValue(i):i;return e},setStyle(e,t){return this.setStyles.call(e,e,t)},strToHtml(e){return document.createRange().createContextualFragment(e)},toggleClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.contains(r)?e.classList.remove(r):e.classList.add(r)),e},emptyNode(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e},addScript(e,t="application/javascript",r){if(!document.querySelector(`script[src="${e}"]`)){const i=document.createElement("script");i.src=e,i.type=t,document.head.appendChild(i),r&&(i.onload=r)}},ajax(e,t){let r,i,n=new XMLHttpRequest;const o={method:"GET",async:!0,user:"",pwd:"",done:function(){if(t){let l=F.strToHtml(this.responseText);r.urlSelector&&(l=l.querySelector(r.urlSelector)),t.contentRemove(),t.content.append(l)}},autoresize:!0,autoreposition:!0};if(t&&typeof e=="string")r=Object.assign({},o,{url:e});else if(typeof e=="object"&&e.url)r=Object.assign({},o,e),r.url=e.url,r.async===!1&&(r.timeout=0,r.withCredentials&&(r.withCredentials=void 0),r.responseType&&(r.responseType=void 0));else{this.errorReporting&&F.errorpanel("XMLHttpRequest seems to miss the <mark>url</mark> parameter!");return}i=r.url.trim().split(/\s+/),r.url=encodeURI(i[0]),i.length>1&&(i.shift(),r.urlSelector=i.join(" ")),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?t?r.done.call(n,n,t):r.done.call(n,n):r.fail&&(t?r.fail.call(n,n,t):r.fail.call(n,n)),r.always&&(t?r.always.call(n,n,t):r.always.call(n,n)),t&&(r.autoresize||r.autoreposition)&&F.ajaxAutoresizeAutoreposition(t,r),F.ajaxAlwaysCallbacks.length&&F.ajaxAlwaysCallbacks.forEach(l=>{t?l.call(n,n,t):l.call(n,n)}))},n.open(r.method,r.url,r.async,r.user,r.pwd),n.timeout=r.timeout||0,r.withCredentials&&(n.withCredentials=r.withCredentials),r.responseType&&(n.responseType=r.responseType),r.beforeSend&&(t?r.beforeSend.call(n,n,t):r.beforeSend.call(n,n)),r.data?n.send(r.data):n.send(null)},fetch(e,t){let r;const i={bodyMethod:"text",autoresize:!0,autoreposition:!0,done:function(o,l){if(l){let c=F.strToHtml(o);l.contentRemove(),l.content.append(c)}}};if(t&&typeof e=="string")r=Object.assign({},i,{resource:encodeURI(e)});else if(typeof e=="object"&&e.resource)r=Object.assign({},i,e),r.resource=encodeURI(e.resource);else{this.errorReporting&&F.errorpanel("Fetch Request seems to miss the <mark>resource</mark> parameter!");return}const n=r.fetchInit||{};r.beforeSend&&(t?r.beforeSend.call(e,e,t):r.beforeSend.call(e,e)),fetch(r.resource,n).then(o=>{if(o.ok)return o[r.bodyMethod]()}).then(o=>{t?r.done.call(o,o,t):r.done.call(o,o),t&&(r.autoresize||r.autoreposition)&&F.ajaxAutoresizeAutoreposition(t,r)})},ajaxAutoresizeAutoreposition(e,t){const r=e.options.contentSize;if(typeof r=="string"&&r.match(/auto/i)){const i=r.split(" "),n=Object.assign({},{width:i[0],height:i[1]});t.autoresize&&e.resize(n),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}else if(typeof r=="object"&&(r.width==="auto"||r.height==="auto")){const i=Object.assign({},r);t.autoresize&&e.resize(i),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}},createPanelTemplate(e=!0){const t=document.createElement("div");return t.className="jsPanel",t.style.left="0",t.style.top="0",e&&["close","maximize","normalize","minimize","smallify"].forEach(r=>{t.setAttribute(`data-btn${r}`,"enabled")}),t.innerHTML=`<div class="jsPanel-hdr">
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
                            </div>`,e},createSnapArea(e,t,r){const i=document.createElement("div"),n=e.parentElement;i.className=`jsPanel-snap-area jsPanel-snap-area-${t}`,t==="lt"||t==="rt"||t==="rb"||t==="lb"?(i.style.width=r+"px",i.style.height=r+"px"):t==="ct"||t==="cb"?i.style.height=r+"px":(t==="lc"||t==="rc")&&(i.style.width=r+"px"),n!==document.body&&(i.style.position="absolute"),document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${t}`)||e.parentElement.appendChild(i)},removeSnapAreas(){document.querySelectorAll(".jsPanel-snap-area").forEach(e=>e.parentElement.removeChild(e))},extend(e){if(Object.prototype.toString.call(e)==="[object Object]")for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this.extensions[t]=e[t])},getPanels(e=function(){return this.classList.contains("jsPanel-standard")}){return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(t=>e.call(t,t)).sort((t,r)=>r.style.zIndex-t.style.zIndex)},processCallbacks(e,t,r="some",i,n){if(typeof t=="function"&&(t=[t]),r)return t[r](o=>o.call(e,e,i,n));t.forEach(o=>o.call(e,e,i,n))},resetZi(){this.zi=((e=F.ziBase)=>{let t=e;return{next:()=>t++}})(),Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((e,t)=>e.style.zIndex-t.style.zIndex).forEach(e=>e.style.zIndex=F.zi.next())},errorpanel(e){this.create({paneltype:"error",dragit:!1,resizeit:!1,theme:{bgPanel:"white",bgContent:"white",colorHeader:"rebeccapurple",colorContent:"#333333",border:"2px solid rebeccapurple"},borderRadius:".33rem",headerControls:"closeonly xs",headerTitle:"&#9888; jsPanel Error",contentSize:{width:"50%",height:"auto"},position:"center-top 0 5 down",animateIn:"jsPanelFadeIn",content:`<div class="jsPanel-error-content-separator"></div><p>${e}</p>`})},create(e={},t){F.zi||(F.zi=((m=F.ziBase)=>{let v=m;return{next:()=>v++}})()),e.config?(e=Object.assign({},this.defaults,e.config,e),delete e.config):e=Object.assign({},this.defaults,e),e.id?typeof e.id=="function"&&(e.id=e.id()):e.id=`jsPanel-${F.idCounter+=1}`;const r=document.getElementById(e.id);if(r!==null){if(r.classList.contains("jsPanel")&&r.front(),this.errorReporting){let m=`&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${e.id}</mark> already exists in the document.`;F.errorpanel(m)}return!1}let i=this.pOcontainer(e.container);if(typeof i=="object"&&i.length&&i.length>0&&(i=i[0]),!i)return this.errorReporting&&F.errorpanel("&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist"),!1;["onbeforeclose","onbeforemaximize","onbeforeminimize","onbeforenormalize","onbeforesmallify","onbeforeunsmallify","onclosed","onfronted","onmaximized","onminimized","onnormalized","onsmallified","onstatuschange","onunsmallified"].forEach(m=>{e[m]?typeof e[m]=="function"&&(e[m]=[e[m]]):e[m]=[]});const n=e.template||this.createPanelTemplate();n.options=e,n.closetimer=void 0,n.status="initialized",n.currentData={},n.header=n.querySelector(".jsPanel-hdr"),n.headerbar=n.header.querySelector(".jsPanel-headerbar"),n.titlebar=n.header.querySelector(".jsPanel-titlebar"),n.headerlogo=n.headerbar.querySelector(".jsPanel-headerlogo"),n.headertitle=n.headerbar.querySelector(".jsPanel-title"),n.controlbar=n.headerbar.querySelector(".jsPanel-controlbar"),n.headertoolbar=n.header.querySelector(".jsPanel-hdr-toolbar"),n.content=n.querySelector(".jsPanel-content"),n.footer=n.querySelector(".jsPanel-ftr"),n.snappableTo=!1,n.snapped=!1,n.droppableTo=!1,n.progressbar=n.autocloseProgressbar=n.querySelector(".jsPanel-progressbar");const o=new CustomEvent("jspanelloaded",{detail:e.id,cancelable:!0}),l=new CustomEvent("jspanelstatuschange",{detail:e.id,cancelable:!0}),c=new CustomEvent("jspanelbeforenormalize",{detail:e.id,cancelable:!0}),h=new CustomEvent("jspanelnormalized",{detail:e.id,cancelable:!0}),g=new CustomEvent("jspanelbeforemaximize",{detail:e.id,cancelable:!0}),x=new CustomEvent("jspanelmaximized",{detail:e.id,cancelable:!0}),w=new CustomEvent("jspanelbeforeminimize",{detail:e.id,cancelable:!0}),P=new CustomEvent("jspanelminimized",{detail:e.id,cancelable:!0}),W=new CustomEvent("jspanelbeforesmallify",{detail:e.id,cancelable:!0}),L=new CustomEvent("jspanelsmallified",{detail:e.id,cancelable:!0}),N=new CustomEvent("jspanelsmallifiedmax",{detail:e.id,cancelable:!0}),U=new CustomEvent("jspanelbeforeunsmallify",{detail:e.id,cancelable:!0}),re=new CustomEvent("jspanelfronted",{detail:e.id,cancelable:!0}),ce=new CustomEvent("jspanelbeforeclose",{detail:e.id,cancelable:!0}),be=new CustomEvent("jspanelclosed",{detail:e.id,cancelable:!0}),Q=new CustomEvent("jspanelcloseduser",{detail:e.id,cancelable:!0});[o,l,c,h,g,x,w,P,W,L,N,U,re,ce].forEach(m=>m.panel=n);const q=n.querySelector(".jsPanel-btn-close"),oe=n.querySelector(".jsPanel-btn-maximize"),ye=n.querySelector(".jsPanel-btn-normalize"),$e=n.querySelector(".jsPanel-btn-smallify"),ze=n.querySelector(".jsPanel-btn-minimize");q&&F.pointerup.forEach(m=>{q.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.close(null,!0)})}),oe&&F.pointerup.forEach(m=>{oe.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.maximize()})}),ye&&F.pointerup.forEach(m=>{ye.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.normalize()})}),$e&&F.pointerup.forEach(m=>{$e.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.status==="normalized"||n.status==="maximized"?n.smallify():(n.status==="smallified"||n.status==="smallifiedmax")&&n.unsmallify()})}),ze&&F.pointerup.forEach(m=>{ze.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.minimize()})});let ke=F.extensions;for(let m in ke)Object.prototype.hasOwnProperty.call(ke,m)&&(n[m]=ke[m]);if(n.setBorder=m=>{let v=F.pOborder(m);return v[2].length||(v[2]=n.style.backgroundColor),v=v.join(" "),n.style.border=v,n.options.border=v,n},n.setBorderRadius=m=>{typeof m=="string"&&(m.startsWith("--")||m.startsWith("var"))&&(m=m.replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," "),m=F.getCssVariableValue(m)),typeof m=="number"&&(m+="px"),n.style.borderRadius=m;const v=getComputedStyle(n);return n.options.header?(n.header.style.borderTopLeftRadius=v.borderTopLeftRadius,n.header.style.borderTopRightRadius=v.borderTopRightRadius):(n.content.style.borderTopLeftRadius=v.borderTopLeftRadius,n.content.style.borderTopRightRadius=v.borderTopRightRadius),n.options.footerToolbar?(n.footer.style.borderBottomRightRadius=v.borderBottomRightRadius,n.footer.style.borderBottomLeftRadius=v.borderBottomLeftRadius):(n.content.style.borderBottomRightRadius=v.borderBottomRightRadius,n.content.style.borderBottomLeftRadius=v.borderBottomLeftRadius),n},n.setTheme=(m=e.theme,v)=>{let E;if(n.status==="minimized"&&(E=!0,n.normalize()),F.clearTheme(n),typeof m=="object")e.border=void 0,F.applyCustomTheme(n,m);else if(typeof m=="string"){m==="none"&&(m="white");let b=F.getThemeDetails(m);F.applyColorTheme(n,b)}return E&&n.minimize(),v&&v.call(n,n),n},n.remove=(m,v,E)=>{n.parentElement.removeChild(n),document.getElementById(m)?E&&E.call(n,m,n):(n.removeMinimizedReplacement(),n.status="closed",v&&document.dispatchEvent(Q),document.dispatchEvent(be),n.options.onclosed&&F.processCallbacks(n,n.options.onclosed,"every",v),F.autopositionRemaining(n),E&&E.call(m,m)),window.removeEventListener("resize",n.windowResizeHandler),document.removeEventListener("jspanelresize",n.parentResizeHandler)},n.close=(m,v)=>{if(n.parentElement){if(n.closetimer&&window.clearInterval(n.closetimer),document.dispatchEvent(ce),n.statusBefore=n.status,n.options.onbeforeclose&&n.options.onbeforeclose.length>0&&!F.processCallbacks(n,n.options.onbeforeclose,"some",n.status,v))return n;n.options.animateOut?(n.options.animateIn&&F.remClass(n,n.options.animateIn),F.setClass(n,n.options.animateOut),n.addEventListener("animationend",E=>{E.stopPropagation(),n.remove(n.id,v,m)})):n.remove(n.id,v,m)}},n.maximize=(m,v)=>{if(n.statusBefore=n.status,e.onbeforemaximize&&e.onbeforemaximize.length>0&&!F.processCallbacks(n,e.onbeforemaximize,"some",n.statusBefore))return n;document.dispatchEvent(g);const E=n.parentElement,b=F.pOcontainment(e.maximizedMargin);return E===document.body?(n.style.width=document.documentElement.clientWidth-b[1]-b[3]+"px",n.style.height=document.documentElement.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"):(n.style.width=E.clientWidth-b[1]-b[3]+"px",n.style.height=E.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"),$e.style.transform="unset",n.removeMinimizedReplacement(),n.status="maximized",n.setControls([".jsPanel-btn-maximize"]),v||n.front(),document.dispatchEvent(x),document.dispatchEvent(l),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),m&&m.call(n,n,n.statusBefore),e.onmaximized&&F.processCallbacks(n,e.onmaximized,"every",n.statusBefore),n},n.minimize=m=>{if(n.status==="minimized"||(n.statusBefore=n.status,e.onbeforeminimize&&e.onbeforeminimize.length>0&&!F.processCallbacks(n,e.onbeforeminimize,"some",n.statusBefore)))return n;if(document.dispatchEvent(w),!document.getElementById("jsPanel-replacement-container")){const v=document.createElement("div");v.id="jsPanel-replacement-container",document.body.append(v)}if(n.style.left="-9999px",n.status="minimized",document.dispatchEvent(P),document.dispatchEvent(l),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),e.minimizeTo){let v=n.createMinimizedReplacement(),E,b,C;switch(e.minimizeTo){case"default":document.getElementById("jsPanel-replacement-container").append(v);break;case"parentpanel":b=n.closest(".jsPanel-content").parentElement,C=b.querySelectorAll(".jsPanel-minimized-box"),E=C[C.length-1],E.append(v);break;case"parent":b=n.parentElement,E=b.querySelector(".jsPanel-minimized-container"),E||(E=document.createElement("div"),E.className="jsPanel-minimized-container",b.append(E)),E.append(v);break;default:document.querySelector(e.minimizeTo).append(v)}}return m&&m.call(n,n,n.statusBefore),e.onminimized&&F.processCallbacks(n,e.onminimized,"every",n.statusBefore),n},n.normalize=m=>(n.status==="normalized"||(n.statusBefore=n.status,e.onbeforenormalize&&e.onbeforenormalize.length>0&&!F.processCallbacks(n,e.onbeforenormalize,"some",n.statusBefore))||(document.dispatchEvent(c),n.style.width=n.currentData.width,n.style.height=n.currentData.height,n.snapped?n.snap(n.snapped,!0):(n.style.left=n.currentData.left,n.style.top=n.currentData.top),$e.style.transform="unset",n.removeMinimizedReplacement(),n.status="normalized",n.setControls([".jsPanel-btn-normalize"]),n.front(),document.dispatchEvent(h),document.dispatchEvent(l),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),m&&m.call(n,n,n.statusBefore),e.onnormalized&&F.processCallbacks(n,e.onnormalized,"every",n.statusBefore)),n),n.smallify=m=>{if(n.status==="smallified"||n.status==="smallifiedmax"||(n.statusBefore=n.status,e.onbeforesmallify&&e.onbeforesmallify.length>0&&!F.processCallbacks(n,e.onbeforesmallify,"some",n.statusBefore)))return n;document.dispatchEvent(W),n.style.overflow="hidden";const v=window.getComputedStyle(n),E=parseFloat(window.getComputedStyle(n.headerbar).height);n.style.height=parseFloat(v.borderTopWidth)+parseFloat(v.borderBottomWidth)+E+"px",$e.style.transform="rotate(180deg)",n.status==="normalized"?(n.setControls([".jsPanel-btn-normalize"]),n.status="smallified",document.dispatchEvent(L),document.dispatchEvent(l),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="maximized"&&(n.setControls([".jsPanel-btn-maximize"]),n.status="smallifiedmax",document.dispatchEvent(N),document.dispatchEvent(l),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore));const b=n.querySelectorAll(".jsPanel-minimized-box");return b[b.length-1].style.display="none",m&&m.call(n,n,n.statusBefore),e.onsmallified&&F.processCallbacks(n,e.onsmallified,"every",n.statusBefore),n},n.unsmallify=m=>{if(n.statusBefore=n.status,n.status==="smallified"||n.status==="smallifiedmax"){if(e.onbeforeunsmallify&&e.onbeforeunsmallify.length>0&&!F.processCallbacks(n,e.onbeforeunsmallify,"some",n.statusBefore))return n;document.dispatchEvent(U),n.style.overflow="visible",n.front(),n.status==="smallified"?(n.style.height=n.currentData.height,n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(h),document.dispatchEvent(l),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="smallifiedmax"?n.maximize():n.status==="minimized"&&n.normalize(),$e.style.transform="rotate(0deg)";const v=n.querySelectorAll(".jsPanel-minimized-box");v[v.length-1].style.display="flex",m&&m.call(n,n,n.statusBefore),e.onunsmallified&&F.processCallbacks(n,e.onunsmallified,"every",n.statusBefore)}return n},n.front=(m,v=!0)=>{if(n.status==="minimized")n.statusBefore==="maximized"?n.maximize():n.normalize();else{const E=Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(b=>b.style.zIndex);Math.max(...E)>n.style.zIndex&&(n.style.zIndex=F.zi.next()),F.resetZi()}return document.dispatchEvent(re),m&&m.call(n,n),e.onfronted&&v&&F.processCallbacks(n,e.onfronted,"every",n.status),n},n.snap=(m,v=!1)=>{if(v||(n.currentData.beforeSnap={width:n.currentData.width,height:n.currentData.height}),m&&typeof m=="function"&&!v)m.call(n,n,n.snappableTo);else if(m!==!1){let E=[0,0];if(n.options.dragit.snap.containment&&n.options.dragit.containment){const b=F.pOcontainment(n.options.dragit.containment),C=n.snappableTo;C.startsWith("left")?E[0]=b[3]:C.startsWith("right")&&(E[0]=-b[1]),C.endsWith("top")?E[1]=b[0]:C.endsWith("bottom")&&(E[1]=-b[2])}n.reposition(`${n.snappableTo} ${E[0]} ${E[1]}`)}v||(n.snapped=n.snappableTo)},n.move=(m,v)=>{let E=n.overlaps(m,"paddingbox"),b=n.parentElement;return m.appendChild(n),n.options.container=m,n.style.left=E.left+"px",n.style.top=E.top+"px",n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors(),v&&v.call(n,n,m,b),n},n.closeChildpanels=m=>(n.getChildpanels().forEach(v=>v.close()),m&&m.call(n,n),n),n.getChildpanels=m=>{const v=n.content.querySelectorAll(".jsPanel");return m&&v.forEach((E,b,C)=>{m.call(E,E,b,C)}),v},n.isChildpanel=m=>{const v=n.closest(".jsPanel-content"),E=v?v.parentElement:null;return m&&m.call(n,n,E),v?E:!1},n.contentRemove=m=>(F.emptyNode(n.content),m&&m.call(n,n),n),n.createMinimizedReplacement=()=>{const m=F.createMinimizedTemplate(),v=window.getComputedStyle(n.headertitle).color,E=window.getComputedStyle(n),b=e.iconfont,C=m.querySelector(".jsPanel-controlbar");return n.options.header!=="auto-show-hide"?F.setStyles(m,{backgroundColor:E.backgroundColor,backgroundPositionX:E.backgroundPositionX,backgroundPositionY:E.backgroundPositionY,backgroundRepeat:E.backgroundRepeat,backgroundAttachment:E.backgroundAttachment,backgroundImage:E.backgroundImage,backgroundSize:E.backgroundSize,backgroundOrigin:E.backgroundOrigin,backgroundClip:E.backgroundClip}):m.style.backgroundColor=window.getComputedStyle(n.header).backgroundColor,m.id=n.id+"-min",m.querySelector(".jsPanel-headerbar").replaceChild(n.headerlogo.cloneNode(!0),m.querySelector(".jsPanel-headerlogo")),m.querySelector(".jsPanel-titlebar").replaceChild(n.headertitle.cloneNode(!0),m.querySelector(".jsPanel-title")),m.querySelector(".jsPanel-titlebar").setAttribute("title",n.headertitle.textContent),m.querySelector(".jsPanel-title").style.color=v,C.style.color=v,C.querySelectorAll("button").forEach(ue=>ue.style.color=v),["jsPanel-hdr-dark","jsPanel-hdr-light"].forEach(ue=>{n.header.classList.contains(ue)&&m.querySelector(".jsPanel-hdr").classList.add(ue)}),n.setIconfont(b,m),n.dataset.btnnormalize==="enabled"?F.pointerup.forEach(ue=>{m.querySelector(".jsPanel-btn-normalize").addEventListener(ue,pe=>{if(pe.preventDefault(),pe.button&&pe.button>0)return!1;n.normalize()})}):C.querySelector(".jsPanel-btn-normalize").style.display="none",n.dataset.btnmaximize==="enabled"?F.pointerup.forEach(ue=>{m.querySelector(".jsPanel-btn-maximize").addEventListener(ue,pe=>{if(pe.preventDefault(),pe.button&&pe.button>0)return!1;n.maximize()})}):C.querySelector(".jsPanel-btn-maximize").style.display="none",n.dataset.btnclose==="enabled"?F.pointerup.forEach(ue=>{m.querySelector(".jsPanel-btn-close").addEventListener(ue,pe=>{if(pe.preventDefault(),pe.button&&pe.button>0)return!1;n.close(null,!0)})}):C.querySelector(".jsPanel-btn-close").style.display="none",m},n.removeMinimizedReplacement=()=>{const m=document.getElementById(`${n.id}-min`);m&&m.parentElement.removeChild(m)},n.drag=(m={})=>{let v,E,b;const C=new CustomEvent("jspaneldragstart",{detail:n.id}),ue=new CustomEvent("jspaneldrag",{detail:n.id}),pe=new CustomEvent("jspaneldragstop",{detail:n.id});[C,ue,pe].forEach(He=>He.panel=n);const V=He=>{let Me=He.split("-");return Me.forEach((_e,Re)=>{Me[Re]=_e.charAt(0).toUpperCase()+_e.slice(1)}),"snap"+Me.join("")};function X(He){He.relatedTarget===null&&F.pointermove.forEach(Me=>{document.removeEventListener(Me,E,!1),n.style.opacity=1})}let Xe=m.handles||F.defaults.dragit.handles,ct=m.cursor||F.defaults.dragit.cursor;function rn(He){if(F.pointermove.forEach(Me=>document.removeEventListener(Me,E)),F.removeSnapAreas(),v){if(n.style.opacity=1,v=void 0,b.snap){switch(n.snappableTo){case"left-top":n.snap(b.snap.snapLeftTop);break;case"center-top":n.snap(b.snap.snapCenterTop);break;case"right-top":n.snap(b.snap.snapRightTop);break;case"right-center":n.snap(b.snap.snapRightCenter);break;case"right-bottom":n.snap(b.snap.snapRightBottom);break;case"center-bottom":n.snap(b.snap.snapCenterBottom);break;case"left-bottom":n.snap(b.snap.snapLeftBottom);break;case"left-center":n.snap(b.snap.snapLeftCenter);break}b.snap.callback&&n.snappableTo&&typeof b.snap.callback=="function"&&(b.snap.callback.call(n,n),b.snap.repositionOnSnap&&b.snap[V(n.snappableTo)]!==!1&&n.repositionOnSnap(n.snappableTo)),n.snappableTo&&b.snap.repositionOnSnap&&b.snap[V(n.snappableTo)]&&n.repositionOnSnap(n.snappableTo)}if(n.droppableTo&&n.droppableTo){let Me=n.parentElement;n.move(n.droppableTo),b.drop.callback&&b.drop.callback.call(n,n,n.droppableTo,Me)}if(document.dispatchEvent(pe),b.stop.length){let Me=window.getComputedStyle(n),_e={left:parseFloat(Me.left),top:parseFloat(Me.top),width:parseFloat(Me.width),height:parseFloat(Me.height)};F.processCallbacks(n,b.stop,!1,_e,He)}n.saveCurrentPosition(),n.calcSizeFactors()}n.controlbar.style.pointerEvents="inherit",n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Me=>Me.style.pointerEvents="auto"),document.removeEventListener(He,rn)}return n.querySelectorAll(Xe).forEach(He=>{He.style.touchAction="none",He.style.cursor=ct,F.pointerdown.forEach(Me=>{He.addEventListener(Me,_e=>{if(_e.button&&_e.button>0||(b=Object.assign({},F.defaults.dragit,m),b.disableOnMaximized&&n.status==="maximized"))return!1;if((b.containment||b.containment===0)&&(b.containment=F.pOcontainment(b.containment)),b.grid&&Array.isArray(b.grid)&&b.grid.length===1&&(b.grid[1]=b.grid[0]),b.snap&&(typeof b.snap=="object"?b.snap=Object.assign({},F.defaultSnapConfig,b.snap):b.snap=F.defaultSnapConfig),_e.target.closest(".jsPanel-ftr-btn"))return;n.controlbar.style.pointerEvents="none",n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(tt=>tt.style.pointerEvents="none");let Re=window.getComputedStyle(n),Qe=parseFloat(Re.left),Ie=parseFloat(Re.top),ie=parseFloat(Re.width),Je=parseFloat(Re.height),Be=_e.touches?_e.touches[0].clientX:_e.clientX,fe=_e.touches?_e.touches[0].clientY:_e.clientY,Ce=n.parentElement,Tt=Ce.getBoundingClientRect(),de=window.getComputedStyle(Ce),Ze=n.getScaleFactor(),wn=0,Yt=F.getScrollbarWidth(Ce);E=tt=>{if(tt.preventDefault(),!v){if(document.dispatchEvent(C),n.style.opacity=b.opacity,n.snapped&&b.snap.resizeToPreSnap&&n.currentData.beforeSnap){n.resize(n.currentData.beforeSnap.width+" "+n.currentData.beforeSnap.height),n.setControls([".jsPanel-btn-normalize"]);let ae=n.getBoundingClientRect(),De=Be-(ae.left+ae.width),we=ae.width/2;De>-we&&(wn=De+we)}if(n.front(),n.snapped=!1,n.status==="maximized"&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized"),b.drop&&b.drop.dropZones){let ae=b.drop.dropZones.map(we=>F.pOcontainer(we)),De=[];ae.forEach(function(we){we.length?we.forEach(function(Le){De.push(Le)}):De.push(we)}),De=De.filter(function(we,Le,Ve){return Ve.indexOf(we)===Le}),b.drop.dropZones=De}b.start.length&&F.processCallbacks(n,b.start,!1,{left:Qe,top:Ie,width:ie,height:Je},tt)}v=1;let At,Fe,We,$t,it,Ae,Te,Pt,Ke,bt,dt=tt.touches?tt.touches[0].clientX:tt.clientX,st=tt.touches?tt.touches[0].clientY:tt.clientY,Ue=window.getComputedStyle(n),he;if(Ce===document.body){let ae=n.getBoundingClientRect();Ke=window.innerWidth-parseInt(de.borderLeftWidth,10)-parseInt(de.borderRightWidth,10)-(ae.left+ae.width),bt=window.innerHeight-parseInt(de.borderTopWidth,10)-parseInt(de.borderBottomWidth,10)-(ae.top+ae.height)}else Ke=parseInt(de.width,10)-parseInt(de.borderLeftWidth,10)-parseInt(de.borderRightWidth,10)-(parseInt(Ue.left,10)+parseInt(Ue.width,10)),bt=parseInt(de.height,10)-parseInt(de.borderTopWidth,10)-parseInt(de.borderBottomWidth,10)-(parseInt(Ue.top,10)+parseInt(Ue.height,10));At=parseFloat(Ue.left),We=parseFloat(Ue.top),it=Ke,Te=bt,b.snap&&(b.snap.trigger==="panel"?(Fe=At**2,$t=We**2,Ae=it**2,Pt=Te**2):b.snap.trigger==="pointer"&&(n.options.container==="window"?(At=dt,We=st,it=window.innerWidth-dt,Te=window.innerHeight-st,Fe=dt**2,$t=We**2,Ae=it**2,Pt=Te**2):(he=n.overlaps(Ce,"paddingbox",tt),At=he.pointer.left,We=he.pointer.top,it=he.pointer.right,Te=he.pointer.bottom,Fe=he.pointer.left**2,$t=he.pointer.top**2,Ae=he.pointer.right**2,Pt=he.pointer.bottom**2)));let et=Math.sqrt(Fe+$t),Z=Math.sqrt(Fe+Pt),ot=Math.sqrt(Ae+$t),pt=Math.sqrt(Ae+Pt),Et=Math.abs(At-it)/2,ee=Math.abs(We-Te)/2,sn=Math.sqrt(Fe+ee**2),dn=Math.sqrt($t+Et**2),ht=Math.sqrt(Ae+ee**2),vn=Math.sqrt(Pt+Et**2);if(window.getSelection().removeAllRanges(),document.dispatchEvent(ue),(!b.axis||b.axis==="x")&&(n.style.left=Qe+(dt-Be)/Ze.x+wn+"px"),(!b.axis||b.axis==="y")&&(n.style.top=Ie+(st-fe)/Ze.y+"px"),b.grid){let ae=b.grid,De=b.axis,we=ae[0]*Math.round((Qe+(dt-Be))/ae[0]),Le=ae[1]*Math.round((Ie+(st-fe))/ae[1]);(!De||De==="x")&&(n.style.left=`${we}px`),(!De||De==="y")&&(n.style.top=`${Le}px`)}if(b.containment||b.containment===0){let ae=b.containment,De,we;if(n.options.container==="window")De=window.innerWidth-parseFloat(Ue.width)-ae[1]-Yt.y,we=window.innerHeight-parseFloat(Ue.height)-ae[2]-Yt.x;else{let Le=parseFloat(de.borderLeftWidth)+parseFloat(de.borderRightWidth),Ve=parseFloat(de.borderTopWidth)+parseFloat(de.borderBottomWidth);De=Tt.width/Ze.x-parseFloat(Ue.width)-ae[1]-Le-Yt.y,we=Tt.height/Ze.y-parseFloat(Ue.height)-ae[2]-Ve-Yt.x}parseFloat(n.style.left)<=ae[3]&&(n.style.left=ae[3]+"px"),parseFloat(n.style.top)<=ae[0]&&(n.style.top=ae[0]+"px"),parseFloat(n.style.left)>=De&&(n.style.left=De+"px"),parseFloat(n.style.top)>=we&&(n.style.top=we+"px")}if(b.drag.length){let ae={left:At,top:We,right:it,bottom:Te,width:parseFloat(Ue.width),height:parseFloat(Ue.height)};F.processCallbacks(n,b.drag,!1,ae,tt)}if(b.snap){let ae=b.snap.sensitivity,De=Ce===document.body?window.innerWidth/8:Tt.width/8,we=Ce===document.body?window.innerHeight/8:Tt.height/8;n.snappableTo=!1,F.removeSnapAreas(),et<ae?b.snap.snapLeftTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-top",F.createSnapArea(n,"lt",ae)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(he.pointer.left>0&&he.pointer.top>0?(n.snappableTo="left-top",F.createSnapArea(n,"lt",ae)):(n.snappableTo=!1,F.removeSnapAreas()))):Z<ae?b.snap.snapLeftBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-bottom",F.createSnapArea(n,"lb",ae)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(he.pointer.left>0&&he.pointer.bottom>0?(n.snappableTo="left-bottom",F.createSnapArea(n,"lb",ae)):(n.snappableTo=!1,F.removeSnapAreas()))):ot<ae?b.snap.snapRightTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-top",F.createSnapArea(n,"rt",ae)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(he.pointer.right>0&&he.pointer.top>0?(n.snappableTo="right-top",F.createSnapArea(n,"rt",ae)):(n.snappableTo=!1,F.removeSnapAreas()))):pt<ae?b.snap.snapRightBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-bottom",F.createSnapArea(n,"rb",ae)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(he.pointer.right>0&&he.pointer.bottom>0?(n.snappableTo="right-bottom",F.createSnapArea(n,"rb",ae)):(n.snappableTo=!1,F.removeSnapAreas()))):We<ae&&dn<De?b.snap.snapCenterTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-top",F.createSnapArea(n,"ct",ae)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(he.pointer.top>0?(n.snappableTo="center-top",F.createSnapArea(n,"ct",ae)):(n.snappableTo=!1,F.removeSnapAreas()))):At<ae&&sn<we?b.snap.snapLeftCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-center",F.createSnapArea(n,"lc",ae)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(he.pointer.left>0?(n.snappableTo="left-center",F.createSnapArea(n,"lc",ae)):(n.snappableTo=!1,F.removeSnapAreas()))):it<ae&&ht<we?b.snap.snapRightCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-center",F.createSnapArea(n,"rc",ae)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(he.pointer.right>0?(n.snappableTo="right-center",F.createSnapArea(n,"rc",ae)):(n.snappableTo=!1,F.removeSnapAreas()))):Te<ae&&vn<De&&b.snap.snapCenterBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-bottom",F.createSnapArea(n,"cb",ae)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(he.pointer.bottom>0?(n.snappableTo="center-bottom",F.createSnapArea(n,"cb",ae)):(n.snappableTo=!1,F.removeSnapAreas())))}if(b.drop&&b.drop.dropZones){let ae=F.isIE?"msElementsFromPoint":"elementsFromPoint",De=document[ae](tt.clientX,tt.clientY);Array.isArray(De)||(De=Array.prototype.slice.call(De)),b.drop.dropZones.forEach(we=>{De.includes(we)&&(n.droppableTo=we)}),De.includes(n.droppableTo)||(n.droppableTo=!1)}},F.pointermove.forEach(tt=>document.addEventListener(tt,E)),window.addEventListener("mouseout",X,!1)})}),F.pointerup.forEach(Me=>{document.addEventListener(Me,rn),window.removeEventListener("mouseout",X)}),m.disable&&(He.style.pointerEvents="none")}),n},n.dragit=m=>{const v=Object.assign({},F.defaults.dragit,e.dragit),E=n.querySelectorAll(v.handles);return m==="disable"?E.forEach(b=>b.style.pointerEvents="none"):E.forEach(b=>b.style.pointerEvents="auto"),n},n.sizeit=(m={})=>{const v=new CustomEvent("jspanelresizestart",{detail:n.id}),E=new CustomEvent("jspanelresize",{detail:n.id}),b=new CustomEvent("jspanelresizestop",{detail:n.id});[v,E,b].forEach(_e=>_e.panel=n);let C={},ue,pe,V,X,Xe,ct;C.handles=m.handles||F.defaults.resizeit.handles,C.handles.split(",").forEach(_e=>{const Re=document.createElement("DIV");Re.className=`jsPanel-resizeit-handle jsPanel-resizeit-${_e.trim()}`,n.append(Re)});let rn=m.aspectRatio?m.aspectRatio:!1;function He(_e){_e.relatedTarget===null&&F.pointermove.forEach(Re=>document.removeEventListener(Re,ue,!1))}function Me(_e){if(F.pointermove.forEach(Re=>document.removeEventListener(Re,ue,!1)),_e.target.classList&&_e.target.classList.contains("jsPanel-resizeit-handle")){let Re,Qe,Ie=_e.target.className;if(Ie.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)&&(Re=!0),Ie.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)&&(Qe=!0),C.grid&&Array.isArray(C.grid)){C.grid.length===1&&(C.grid[1]=C.grid[0]);const ie=parseFloat(n.style.width),Je=parseFloat(n.style.height),Be=ie%C.grid[0],fe=Je%C.grid[1],Ce=parseFloat(n.style.left),Tt=parseFloat(n.style.top),de=Ce%C.grid[0],Ze=Tt%C.grid[1];Be<C.grid[0]/2?n.style.width=ie-Be+"px":n.style.width=ie+(C.grid[0]-Be)+"px",fe<C.grid[1]/2?n.style.height=Je-fe+"px":n.style.height=Je+(C.grid[1]-fe)+"px",Re&&(de<C.grid[0]/2?n.style.left=Ce-de+"px":n.style.left=Ce+(C.grid[0]-de)+"px"),Qe&&(Ze<C.grid[1]/2?n.style.top=Tt-Ze+"px":n.style.top=Tt+(C.grid[1]-Ze)+"px")}}if(pe){n.content.style.pointerEvents="inherit",pe=void 0,n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors();let Re=n.controlbar.querySelector(".jsPanel-btn-smallify"),Qe=n.getBoundingClientRect();if(Re&&Qe.height>ct+5&&(Re.style.transform="rotate(0deg)"),document.dispatchEvent(b),C.stop.length){let Ie=window.getComputedStyle(n),ie={left:parseFloat(Ie.left),top:parseFloat(Ie.top),width:parseFloat(Ie.width),height:parseFloat(Ie.height)};F.processCallbacks(n,C.stop,!1,ie,_e)}}n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Re=>Re.style.pointerEvents="auto"),C.aspectRatio=rn,document.removeEventListener(_e,Me)}return n.querySelectorAll(".jsPanel-resizeit-handle").forEach(_e=>{_e.style.touchAction="none",F.pointerdown.forEach(Re=>{_e.addEventListener(Re,Qe=>{if(Qe.preventDefault(),Qe.stopPropagation(),Qe.button&&Qe.button>0)return!1;let Ie=1;if(C=Object.assign({},F.defaults.resizeit,m),(C.containment||C.containment===0)&&(C.containment=F.pOcontainment(C.containment)),C.aspectRatio&&C.aspectRatio===!0&&(C.aspectRatio="panel"),F.modifier){let we=F.modifier;we.altKey?C.aspectRatio="content":we.ctrlKey?C.aspectRatio="panel":we.shiftKey&&(C.aspectRatio=!1,Ie=2)}let ie=typeof C.maxWidth=="function"?C.maxWidth():C.maxWidth||1e4,Je=typeof C.maxHeight=="function"?C.maxHeight():C.maxHeight||1e4,Be=typeof C.minWidth=="function"?C.minWidth():C.minWidth,fe=typeof C.minHeight=="function"?C.minHeight():C.minHeight;n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(we=>we.style.pointerEvents="none");const Ce=n.parentElement,Tt=Ce.tagName.toLowerCase(),de=n.getBoundingClientRect(),Ze=Ce.getBoundingClientRect(),wn=window.getComputedStyle(Ce,null),Yt=parseInt(wn.borderLeftWidth,10),tt=parseInt(wn.borderTopWidth,10),At=wn.getPropertyValue("position"),Fe=Qe.clientX||Qe.clientX===0||Qe.touches[0].clientX,We=Qe.clientY||Qe.clientY===0||Qe.touches[0].clientY,$t=Fe/We,it=Qe.target.classList,Ae=n.getScaleFactor(),Te=de.width/de.height,Pt=n.content.getBoundingClientRect(),Ke=Pt.width/Pt.height,bt=n.header.getBoundingClientRect().height,dt=n.footer.getBoundingClientRect().height||0;let st=de.left,Ue=de.top,he=1e4,et=1e4,Z=1e4,ot=1e4;Xe=de.width,ct=de.height,Tt!=="body"&&(st=de.left-Ze.left+Ce.scrollLeft,Ue=de.top-Ze.top+Ce.scrollTop),Tt==="body"&&C.containment?(he=document.documentElement.clientWidth-de.left,Z=document.documentElement.clientHeight-de.top,et=de.width+de.left,ot=de.height+de.top):C.containment&&(At==="static"?(he=Ze.width-de.left+Yt,Z=Ze.height+Ze.top-de.top+tt,et=de.width+(de.left-Ze.left)-Yt,ot=de.height+(de.top-Ze.top)-tt):(he=Ce.clientWidth-(de.left-Ze.left)/Ae.x+Yt,Z=Ce.clientHeight-(de.top-Ze.top)/Ae.y+tt,et=(de.width+de.left-Ze.left)/Ae.x-Yt,ot=n.clientHeight+(de.top-Ze.top)/Ae.y-tt)),C.containment&&(et-=C.containment[3],ot-=C.containment[0],he-=C.containment[1],Z-=C.containment[2]);const pt=window.getComputedStyle(n),Et=parseFloat(pt.width)-de.width,ee=parseFloat(pt.height)-de.height;let sn=parseFloat(pt.left)-de.left,dn=parseFloat(pt.top)-de.top;Ce!==document.body&&(sn+=Ze.left,dn+=Ze.top);let ht=parseInt(pt.borderTopWidth,10),vn=parseInt(pt.borderRightWidth,10),ae=parseInt(pt.borderBottomWidth,10),De=parseInt(pt.borderLeftWidth,10);ue=we=>{we.preventDefault(),pe||(document.dispatchEvent(v),C.start.length&&F.processCallbacks(n,C.start,!1,{width:Xe,height:ct,left:st,top:Ue},we),n.front(),n.status==="maximized"&&(n.status="normalized",n.controlbar.querySelector(".jsPanel-btn-maximize")&&n.setControlStatus("maximize","show"),n.controlbar.querySelector(".jsPanel-btn-normalize")&&n.setControlStatus("normalize","hide")),de.height>ct+5&&(n.status="normalized",n.setControls([".jsPanel-btn-normalize"]))),pe=1,document.dispatchEvent(E);let Le=we.touches?we.touches[0].clientX:we.clientX,Ve=we.touches?we.touches[0].clientY:we.clientY,Oe;it.contains("jsPanel-resizeit-e")?(V=Xe+(Le-Fe)*Ie/Ae.x+Et,V>=he&&(V=he),V>=ie&&(V=ie),V<=Be&&(V=Be),n.style.width=V+"px",Ie===2&&(n.style.left=st-(Le-Fe)+"px"),C.aspectRatio==="content"?(n.style.height=(V-vn-De)/Ke+bt+dt+ht+ae+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.bottom<=C.containment[2]&&(n.style.height=Z+"px",n.style.width=Z*Ke+"px"))):C.aspectRatio==="panel"&&(n.style.height=V/Te+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.bottom<=C.containment[2]&&(n.style.height=Z+"px",n.style.width=Z*Te+"px")))):it.contains("jsPanel-resizeit-s")?(X=ct+(Ve-We)*Ie/Ae.y+ee,X>=Z&&(X=Z),X>=Je&&(X=Je),X<=fe&&(X=fe),n.style.height=X+"px",Ie===2&&(n.style.top=Ue-(Ve-We)+"px"),C.aspectRatio==="content"?(n.style.width=(X-bt-dt-ht-ae)*Ke+ht+ae+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.right<=C.containment[1]&&(n.style.width=he+"px",n.style.height=he/Ke+"px"))):C.aspectRatio==="panel"&&(n.style.width=X*Te+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.right<=C.containment[1]&&(n.style.width=he+"px",n.style.height=he/Te+"px")))):it.contains("jsPanel-resizeit-w")?(V=Xe+(Fe-Le)*Ie/Ae.x+Et,V<=ie&&V>=Be&&V<=et&&(n.style.left=st+(Le-Fe)/Ae.x+sn+"px"),V>=et&&(V=et),V>=ie&&(V=ie),V<=Be&&(V=Be),n.style.width=V+"px",C.aspectRatio==="content"?(n.style.height=(V-vn-De)/Ke+bt+dt+ht+ae+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.bottom<=C.containment[2]&&(n.style.height=Z+"px",n.style.width=Z*Ke+"px"))):C.aspectRatio==="panel"&&(n.style.height=V/Te+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.bottom<=C.containment[2]&&(n.style.height=Z+"px",n.style.width=Z*Te+"px")))):it.contains("jsPanel-resizeit-n")?(X=ct+(We-Ve)*Ie/Ae.y+ee,X<=Je&&X>=fe&&X<=ot&&(n.style.top=Ue+(Ve-We)/Ae.y+dn+"px"),X>=ot&&(X=ot),X>=Je&&(X=Je),X<=fe&&(X=fe),n.style.height=X+"px",C.aspectRatio==="content"?(n.style.width=(X-bt-dt-ht-ae)*Ke+ht+ae+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.right<=C.containment[1]&&(n.style.width=he+"px",n.style.height=he/Ke+"px"))):C.aspectRatio==="panel"&&(n.style.width=X*Te+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.right<=C.containment[1]&&(n.style.width=he+"px",n.style.height=he/Te+"px")))):it.contains("jsPanel-resizeit-se")?(V=Xe+(Le-Fe)*Ie/Ae.x+Et,V>=he&&(V=he),V>=ie&&(V=ie),V<=Be&&(V=Be),n.style.width=V+"px",Ie===2&&(n.style.left=st-(Le-Fe)+"px"),C.aspectRatio&&(n.style.height=V/Te+"px"),X=ct+(Ve-We)*Ie/Ae.y+ee,X>=Z&&(X=Z),X>=Je&&(X=Je),X<=fe&&(X=fe),n.style.height=X+"px",Ie===2&&(n.style.top=Ue-(Ve-We)+"px"),C.aspectRatio==="content"?(n.style.width=(X-bt-dt-ht-ae)*Ke+ht+ae+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.right<=C.containment[1]&&(n.style.width=he+"px",n.style.height=he/Ke+"px"))):C.aspectRatio==="panel"&&(n.style.width=X*Te+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.right<=C.containment[1]&&(n.style.width=he+"px",n.style.height=he/Te+"px")))):it.contains("jsPanel-resizeit-sw")?(X=ct+(Ve-We)*Ie/Ae.y+ee,X>=Z&&(X=Z),X>=Je&&(X=Je),X<=fe&&(X=fe),n.style.height=X+"px",Ie===2&&(n.style.top=Ue-(Ve-We)+"px"),C.aspectRatio&&(n.style.width=X*Te+"px"),V=Xe+(Fe-Le)*Ie/Ae.x+Et,V<=ie&&V>=Be&&V<=et&&(n.style.left=st+(Le-Fe)/Ae.x+sn+"px"),V>=et&&(V=et),V>=ie&&(V=ie),V<=Be&&(V=Be),n.style.width=V+"px",C.aspectRatio==="content"?(n.style.height=(V-vn-De)/Ke+bt+dt+ht+ae+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.bottom<=C.containment[2]&&(n.style.height=Z+"px",n.style.width=Z*Ke+"px"))):C.aspectRatio==="panel"&&(n.style.height=V/Te+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.bottom<=C.containment[2]&&(n.style.height=Z+"px",n.style.width=Z*Te+"px")))):it.contains("jsPanel-resizeit-ne")?(V=Xe+(Le-Fe)*Ie/Ae.x+Et,V>=he&&(V=he),V>=ie&&(V=ie),V<=Be&&(V=Be),n.style.width=V+"px",Ie===2&&(n.style.left=st-(Le-Fe)+"px"),C.aspectRatio&&(n.style.height=V/Te+"px"),X=ct+(We-Ve)*Ie/Ae.y+ee,X<=Je&&X>=fe&&X<=ot&&(n.style.top=Ue+(Ve-We)/Ae.y+dn+"px"),X>=ot&&(X=ot),X>=Je&&(X=Je),X<=fe&&(X=fe),n.style.height=X+"px",C.aspectRatio==="content"?(n.style.width=(X-bt-dt-ht-ae)*Ke+ht+ae+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.right<=C.containment[1]&&(n.style.width=he+"px",n.style.height=he/Ke+"px"))):C.aspectRatio==="panel"&&(n.style.width=X*Te+"px",C.containment&&(Oe=n.overlaps(Ce),Oe.right<=C.containment[1]&&(n.style.width=he+"px",n.style.height=he/Te+"px")))):it.contains("jsPanel-resizeit-nw")&&(C.aspectRatio&&it.contains("jsPanel-resizeit-nw")&&(Le=Ve*$t,Ve=Le/$t),V=Xe+(Fe-Le)*Ie/Ae.x+Et,V<=ie&&V>=Be&&V<=et&&(n.style.left=st+(Le-Fe)/Ae.x+sn+"px"),V>=et&&(V=et),V>=ie&&(V=ie),V<=Be&&(V=Be),n.style.width=V+"px",C.aspectRatio&&(n.style.height=V/Te+"px"),X=ct+(We-Ve)*Ie/Ae.y+ee,X<=Je&&X>=fe&&X<=ot&&(n.style.top=Ue+(Ve-We)/Ae.y+dn+"px"),X>=ot&&(X=ot),X>=Je&&(X=Je),X<=fe&&(X=fe),n.style.height=X+"px",C.aspectRatio==="content"?n.style.width=(X-bt-dt-ht-ae)*Ke+ht+ae+"px":C.aspectRatio==="panel"&&(n.style.width=X*Te+"px")),window.getSelection().removeAllRanges();const Xt=window.getComputedStyle(n),qe={left:parseFloat(Xt.left),top:parseFloat(Xt.top),right:parseFloat(Xt.right),bottom:parseFloat(Xt.bottom),width:parseFloat(Xt.width),height:parseFloat(Xt.height)};C.resize.length&&F.processCallbacks(n,C.resize,!1,qe,we)},F.pointermove.forEach(we=>document.addEventListener(we,ue,!1)),window.addEventListener("mouseout",He,!1)})}),F.pointerup.forEach(function(Re){document.addEventListener(Re,Me),window.removeEventListener("mouseout",He)}),m.disable&&(_e.style.pointerEvents="none")}),n},n.resizeit=m=>{const v=n.querySelectorAll(".jsPanel-resizeit-handle");return m==="disable"?v.forEach(E=>E.style.pointerEvents="none"):v.forEach(E=>E.style.pointerEvents="auto"),n},n.getScaleFactor=()=>{const m=n.getBoundingClientRect();return{x:m.width/n.offsetWidth,y:m.height/n.offsetHeight}},n.calcSizeFactors=()=>{const m=window.getComputedStyle(n);if(e.container==="window")n.hf=parseFloat(m.left)/(window.innerWidth-parseFloat(m.width)),n.vf=parseFloat(m.top)/(window.innerHeight-parseFloat(m.height));else if(n.parentElement){let v=n.parentElement.getBoundingClientRect();n.hf=parseFloat(m.left)/(v.width-parseFloat(m.width)),n.vf=parseFloat(m.top)/(v.height-parseFloat(m.height))}},n.saveCurrentDimensions=()=>{const m=window.getComputedStyle(n);n.currentData.width=m.width,n.currentData.height=m.height},n.saveCurrentPosition=()=>{const m=window.getComputedStyle(n);n.currentData.left=m.left,n.currentData.top=m.top},n.reposition=(...m)=>{let v=e.position,E=!0,b;return m.forEach(C=>{typeof C=="string"||typeof C=="object"?v=C:typeof C=="boolean"?E=C:typeof C=="function"&&(b=C)}),F.position(n,v),n.slaves&&n.slaves.size>0&&n.slaves.forEach(C=>C.reposition()),E&&n.saveCurrentPosition(),b&&b.call(n,n),n},n.repositionOnSnap=m=>{let v="0",E="0",b=F.pOcontainment(e.dragit.containment);if(e.dragit.snap.containment)switch(m){case"left-top":v=b[3],E=b[0];break;case"right-top":v=-b[1],E=b[0];break;case"right-bottom":v=-b[1],E=-b[2];break;case"left-bottom":v=b[3],E=-b[2];break;case"center-top":v=b[3]/2-b[1]/2,E=b[0];break;case"center-bottom":v=b[3]/2-b[1]/2,E=-b[2];break;case"left-center":v=b[3],E=b[0]/2-b[2]/2;break;case"right-center":v=-b[1],E=b[0]/2-b[2]/2;break}F.position(n,m),F.setStyles(n,{left:`calc(${n.style.left} + ${v}px)`,top:`calc(${n.style.top} + ${E}px)`})},n.overlaps=(m,v,E)=>{let b=n.getBoundingClientRect(),C=getComputedStyle(n.parentElement),ue=n.getScaleFactor(),pe={top:0,right:0,bottom:0,left:0},V,X=0,Xe=0,ct=0,rn=0;n.options.container!=="window"&&v==="paddingbox"&&(pe.top=parseInt(C.borderTopWidth,10)*ue.y,pe.right=parseInt(C.borderRightWidth,10)*ue.x,pe.bottom=parseInt(C.borderBottomWidth,10)*ue.y,pe.left=parseInt(C.borderLeftWidth,10)*ue.x),typeof m=="string"?m==="window"?V={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}:m==="parent"?V=n.parentElement.getBoundingClientRect():V=document.querySelector(m).getBoundingClientRect():V=m.getBoundingClientRect(),E&&(X=E.touches?E.touches[0].clientX:E.clientX,Xe=E.touches?E.touches[0].clientY:E.clientY,ct=X-V.left,rn=Xe-V.top);let He=b.left<V.right&&b.right>V.left,Me=b.top<V.bottom&&b.bottom>V.top;return{overlaps:He&&Me,top:b.top-V.top-pe.top,right:V.right-b.right-pe.right,bottom:V.bottom-b.bottom-pe.bottom,left:b.left-V.left-pe.left,parentBorderWidth:pe,panelRect:b,referenceRect:V,pointer:{clientX:X,clientY:Xe,left:ct-pe.left,top:rn-pe.top,right:V.width-ct-pe.right,bottom:V.height-rn-pe.bottom}}},n.setSize=()=>{if(e.panelSize){const m=F.pOsize(n,e.panelSize);n.style.width=m.width,n.style.height=m.height}else if(e.contentSize){const m=F.pOsize(n,e.contentSize);n.content.style.width=m.width,n.content.style.height=m.height,n.style.width=m.width,n.content.style.width="100%"}return n},n.resize=(...m)=>{let v=window.getComputedStyle(n),E={width:v.width,height:v.height},b=!0,C;m.forEach(V=>{typeof V=="string"?E=V:typeof V=="object"?E=Object.assign(E,V):typeof V=="boolean"?b=V:typeof V=="function"&&(C=V)});let ue=F.pOsize(n,E);n.style.width=ue.width,n.style.height=ue.height,n.slaves&&n.slaves.size>0&&n.slaves.forEach(V=>V.reposition()),b&&n.saveCurrentDimensions(),n.status="normalized";let pe=n.controlbar.querySelector(".jsPanel-btn-smallify");return pe&&(pe.style.transform="rotate(0deg)"),C&&C.call(n,n),n.calcSizeFactors(),n},n.windowResizeHandler=m=>{if(m.target===window){let v=n.status,E=e.onwindowresize,b,C;if(v==="maximized"&&E)n.maximize(!1,!0);else if(n.snapped&&v!=="minimized")n.snap(n.snapped,!0);else if(v==="normalized"||v==="smallified"||v==="maximized"){let ue=typeof E;ue==="boolean"?(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",C=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=C<=0?0:C+"px"):ue==="function"?E.call(n,m,n):ue==="object"&&(E.preset===!0&&(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",C=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=C<=0?0:C+"px"),E.callback.call(n,m,n))}else v==="smallifiedmax"&&E&&n.maximize(!1,!0).smallify();n.slaves&&n.slaves.size>0&&n.slaves.forEach(ue=>ue.reposition())}},n.setControls=(m,v)=>(n.header.querySelectorAll(".jsPanel-btn").forEach(E=>{const b=E.className.split("-"),C=b[b.length-1];n.getAttribute(`data-btn${C}`)!=="hidden"&&(E.style.display="block")}),m.forEach(E=>{const b=n.controlbar.querySelector(E);b&&(b.style.display="none")}),v&&v.call(n,n),n),n.setControlStatus=(m,v="enable",E)=>{const b=n.controlbar.querySelector(`.jsPanel-btn-${m}`);switch(v){case"disable":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"disabled"),b.style.pointerEvents="none",b.style.opacity=.4,b.style.cursor="default");break;case"hide":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"hidden"),b.style.display="none");break;case"show":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"enabled"),b.style.display="block",b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"enable":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.getAttribute(`data-btn${m}`)==="hidden"&&(b.style.display="block"),n.setAttribute(`data-btn${m}`,"enabled"),b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"remove":n.controlbar.removeChild(b),n.setAttribute(`data-btn${m}`,"removed");break}return E&&E.call(n,n),n},n.setControlSize=m=>{const v=m.toLowerCase();n.controlbar.querySelectorAll(".jsPanel-btn").forEach(b=>{["jsPanel-btn-xl","jsPanel-btn-lg","jsPanel-btn-md","jsPanel-btn-sm","jsPanel-btn-xs"].forEach(C=>b.classList.remove(C)),b.classList.add(`jsPanel-btn-${v}`)}),v==="xl"?n.titlebar.style.fontSize="1.5rem":v==="lg"?n.titlebar.style.fontSize="1.25rem":v==="md"?n.titlebar.style.fontSize="1.05rem":v==="sm"?n.titlebar.style.fontSize=".9rem":v==="xs"&&(n.titlebar.style.fontSize=".8rem")},n.setHeaderControls=m=>{if(n.options.headerControls.add){let C=n.options.headerControls.add;Array.isArray(C)||(C=[C]),C.forEach(ue=>n.addControl(ue))}let v=[];n.controlbar.querySelectorAll(".jsPanel-btn").forEach(C=>{let ue=C.className.match(/jsPanel-btn-[a-z\d]{3,}/i),pe=ue[0].substring(12);v.push(pe)});const b=F.pOheaderControls(e.headerControls);return e.headerControls=b,v.forEach(C=>{b[C]&&n.setControlStatus(C,b[C])}),n.setControlSize(b.size),m&&m.call(n,n),n},n.setHeaderLogo=(m,v)=>{let E=[n.headerlogo],b=document.querySelector("#"+n.id+"-min");return b&&E.push(b.querySelector(".jsPanel-headerlogo")),typeof m=="string"?m.startsWith("<")?E.forEach(C=>C.innerHTML=m):E.forEach(C=>{F.emptyNode(C);let ue=document.createElement("img");ue.src=m,C.append(ue)}):E.forEach(C=>{F.emptyNode(C),C.append(m)}),n.headerlogo.childNodes.forEach(C=>{C.nodeName&&C.nodeName==="IMG"&&C.setAttribute("draggable","false")}),v&&v.call(n,n),n},n.setHeaderRemove=m=>(n.removeChild(n.header),n.content.classList.add("jsPanel-content-noheader"),["close","maximize","normalize","minimize","smallify"].forEach(v=>n.setAttribute(`data-btn${v}`,"removed")),m&&m.call(n,n),n),n.setHeaderTitle=(m,v)=>{let E=[n.headertitle],b=document.querySelector("#"+n.id+"-min");return b&&E.push(b.querySelector(".jsPanel-title")),typeof m=="string"?E.forEach(C=>C.innerHTML=m):typeof m=="function"?E.forEach(C=>{F.emptyNode(C),C.innerHTML=m()}):E.forEach(C=>{F.emptyNode(C),C.append(m)}),v&&v.call(n,n),n},n.setIconfont=(m,v=n,E)=>{if(m){let b,C;if(m==="fa"||m==="far"||m==="fal"||m==="fas"||m==="fad")b=[`${m} fa-window-close`,`${m} fa-window-maximize`,`${m} fa-window-restore`,`${m} fa-window-minimize`,`${m} fa-chevron-up`];else if(m==="material-icons")b=[m,m,m,m,m,m],C=["close","fullscreen","fullscreen_exit","call_received","expand_less"];else if(Array.isArray(m))b=[`custom-control-icon ${m[4]}`,`custom-control-icon ${m[3]}`,`custom-control-icon ${m[2]}`,`custom-control-icon ${m[1]}`,`custom-control-icon ${m[0]}`];else if(m==="bootstrap"||m==="glyphicon")b=["glyphicon glyphicon-remove","glyphicon glyphicon-fullscreen","glyphicon glyphicon-resize-full","glyphicon glyphicon-minus","glyphicon glyphicon-chevron-up"];else return v;v.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(ue=>F.emptyNode(ue).innerHTML="<span></span>"),Array.prototype.slice.call(v.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((ue,pe)=>{ue.className=b[pe],m==="material-icons"&&(ue.textContent=C[pe])})}return E&&E.call(v,v),v},n.addToolbar=(m,v,E)=>{if(m==="header"?m=n.headertoolbar:m==="footer"&&(m=n.footer),typeof v=="string")m.innerHTML=v;else if(Array.isArray(v))v.forEach(b=>{typeof b=="string"?m.innerHTML+=b:m.append(b)});else if(typeof v=="function"){let b=v.call(n,n);typeof b=="string"?m.innerHTML=b:m.append(b)}else m.append(v);return m.classList.add("active"),E&&E.call(n,n),n},n.addCloseControl=()=>{let m=document.createElement("button"),v=n.content.style.color;return m.classList.add("jsPanel-addCloseCtrl"),m.innerHTML=F.icons.close,m.style.color=v,n.options.rtl&&m.classList.add("rtl"),n.appendChild(m),F.pointerup.forEach(E=>{m.addEventListener(E,b=>{if(b.preventDefault(),b.button&&b.button>0)return!1;n.close(null,!0)})}),F.pointerdown.forEach(E=>{m.addEventListener(E,b=>b.preventDefault())}),n},n.addControl=m=>{if(!m.html)return n;m.position||(m.position=1);const v=n.controlbar.querySelectorAll(".jsPanel-btn").length;let E=document.createElement("button");E.innerHTML=m.html,E.className=`jsPanel-btn jsPanel-btn-${m.name} jsPanel-btn-${e.headerControls.size}`,E.style.color=n.header.style.color,m.position>v?n.controlbar.append(E):n.controlbar.insertBefore(E,n.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${m.position})`));const b=m.ariaLabel||m.name;return b&&E.setAttribute("aria-label",b),F.pointerup.forEach(C=>{E.addEventListener(C,ue=>{if(ue.preventDefault(),ue.button&&ue.button>0)return!1;m.handler.call(n,n,E)})}),m.afterInsert&&m.afterInsert.call(E,E),n},n.setRtl=()=>{[n.header,n.content,n.footer].forEach(m=>{m.dir="rtl",e.rtl.lang&&(m.lang=e.rtl.lang)})},n.id=e.id,n.classList.add("jsPanel-"+e.paneltype),e.paneltype==="standard"&&(n.style.zIndex=this.zi.next()),i.append(n),n.front(!1,!1),n.setTheme(e.theme),e.boxShadow&&n.classList.add(`jsPanel-depth-${e.boxShadow}`),e.header){if(e.headerLogo&&n.setHeaderLogo(e.headerLogo),n.setIconfont(e.iconfont),n.setHeaderTitle(e.headerTitle),n.setHeaderControls(),F.isIE){let m=[n.headerbar,n.controlbar];switch(n.options.headerControls.size){case"md":m.forEach(v=>{v.style.height="34px"});break;case"xs":m.forEach(v=>{v.style.height="26px"});break;case"sm":m.forEach(v=>{v.style.height="30px"});break;case"lg":m.forEach(v=>{v.style.height="38px"});break;case"xl":m.forEach(v=>{v.style.height="42px"});break}}if(e.header==="auto-show-hide"){let m="jsPanel-depth-"+e.boxShadow;n.header.style.opacity=0,n.style.backgroundColor="transparent",this.remClass(n,m),this.setClass(n.content,m),n.header.addEventListener("mouseenter",()=>{n.header.style.opacity=1,F.setClass(n,m),F.remClass(n.content,m)}),n.header.addEventListener("mouseleave",()=>{n.header.style.opacity=0,F.remClass(n,m),F.setClass(n.content,m)})}}else n.setHeaderRemove(),e.addCloseControl&&n.addCloseControl();if(e.headerToolbar&&n.addToolbar(n.headertoolbar,e.headerToolbar),e.footerToolbar&&n.addToolbar(n.footer,e.footerToolbar),e.border&&n.setBorder(e.border),e.borderRadius&&n.setBorderRadius(e.borderRadius),e.css)for(const[m,v]of Object.entries(e.css))if(m==="panel")n.className+=` ${v}`;else{let E=n.querySelector(`.jsPanel-${m}`);E&&(E.className+=` ${v}`)}if(e.content&&(typeof e.content=="function"?e.content.call(n,n):typeof e.content=="string"?n.content.innerHTML=e.content:n.content.append(e.content)),e.contentAjax&&this.ajax(e.contentAjax,n),e.contentFetch&&this.fetch(e.contentFetch,n),e.contentOverflow){const m=e.contentOverflow.split(" ");m.length===1?n.content.style.overflow=m[0]:m.length===2&&(n.content.style.overflowX=m[0],n.content.style.overflowY=m[1])}if(e.autoclose){typeof e.autoclose=="number"?e.autoclose={time:e.autoclose+"ms"}:typeof e.autoclose=="string"&&(e.autoclose={time:e.autoclose});let m=Object.assign({},F.defaultAutocloseConfig,e.autoclose);m.time&&typeof m.time=="number"&&(m.time+="ms");let v=n.progressbar.querySelector("div");v.addEventListener("animationend",E=>{E.stopPropagation(),n.progressbar.classList.remove("active"),n.close()}),m.progressbar&&(n.progressbar.classList.add("active"),m.background?F.colorNames[m.background]?n.progressbar.style.background="#"+F.colorNames[m.background]:n.progressbar.style.background=m.background:n.progressbar.classList.add("success-bg")),v.style.animation=`${m.time} progressbar`}if(e.rtl&&n.setRtl(),n.setSize(),n.status="normalized",e.position?this.position(n,e.position):n.style.opacity=1,document.dispatchEvent(h),n.calcSizeFactors(),e.animateIn&&(n.addEventListener("animationend",()=>{this.remClass(n,e.animateIn)}),this.setClass(n,e.animateIn)),e.syncMargins){let m=this.pOcontainment(e.maximizedMargin);e.dragit&&(e.dragit.containment=m,e.dragit.snap===!0?(e.dragit.snap=F.defaultSnapConfig,e.dragit.snap.containment=!0):e.dragit.snap&&(e.dragit.snap.containment=!0)),e.resizeit&&(e.resizeit.containment=m)}if(e.dragit?(["start","drag","stop"].forEach(m=>{e.dragit[m]?typeof e.dragit[m]=="function"&&(e.dragit[m]=[e.dragit[m]]):e.dragit[m]=[]}),n.drag(e.dragit),n.addEventListener("jspaneldragstop",m=>{m.panel===n&&n.calcSizeFactors()},!1)):n.titlebar.style.cursor="default",e.resizeit){["start","resize","stop"].forEach(v=>{e.resizeit[v]?typeof e.resizeit[v]=="function"&&(e.resizeit[v]=[e.resizeit[v]]):e.resizeit[v]=[]}),n.sizeit(e.resizeit);let m;n.addEventListener("jspanelresizestart",v=>{v.panel===n&&(m=n.status)},!1),n.addEventListener("jspanelresizestop",v=>{v.panel===n&&(m==="smallified"||m==="smallifiedmax"||m==="maximized")&&parseFloat(n.style.height)>parseFloat(window.getComputedStyle(n.header).height)&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(h),document.dispatchEvent(l),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every"),n.calcSizeFactors())},!1)}if(n.saveCurrentDimensions(),n.saveCurrentPosition(),e.setStatus&&(e.setStatus==="smallifiedmax"?n.maximize().smallify():e.setStatus==="smallified"?n.smallify():n[e.setStatus.slice(0,-1)]()),this.pointerdown.forEach(m=>{n.addEventListener(m,v=>{!v.target.closest(".jsPanel-btn-close")&&!v.target.closest(".jsPanel-btn-minimize")&&e.paneltype==="standard"&&n.front()},!1)}),e.onwindowresize&&n.options.container==="window"&&window.addEventListener("resize",n.windowResizeHandler,!1),e.onparentresize){let m=e.onparentresize,v=typeof m,E=n.isChildpanel();if(E){const b=E.content;let C=[];n.parentResizeHandler=ue=>{if(ue.panel===E){C[0]=b.offsetWidth,C[1]=b.offsetHeight;let pe=n.status,V,X;pe==="maximized"&&m?n.maximize():n.snapped&&pe!=="minimized"?n.snap(n.snapped,!0):pe==="normalized"||pe==="smallified"||pe==="maximized"?v==="function"?m.call(n,n,{width:C[0],height:C[1]}):v==="object"&&m.preset===!0?(V=(C[0]-n.offsetWidth)*n.hf,n.style.left=V<=0?0:V+"px",X=(C[1]-n.offsetHeight)*n.vf,n.style.top=X<=0?0:X+"px",m.callback.call(n,n,{width:C[0],height:C[1]})):v==="boolean"&&(V=(C[0]-n.offsetWidth)*n.hf,n.style.left=V<=0?0:V+"px",X=(C[1]-n.offsetHeight)*n.vf,n.style.top=X<=0?0:X+"px"):pe==="smallifiedmax"&&m&&n.maximize().smallify()}},document.addEventListener("jspanelresize",n.parentResizeHandler,!1)}}return this.globalCallbacks&&(Array.isArray(this.globalCallbacks)?this.globalCallbacks.forEach(m=>m.call(n,n)):this.globalCallbacks.call(n,n)),e.callback&&(Array.isArray(e.callback)?e.callback.forEach(m=>m.call(n,n)):e.callback.call(n,n)),t&&(Array.isArray(t)?t.forEach(m=>m.call(n,n)):t.call(n,n)),document.dispatchEvent(o),n}};var Kp=Object.defineProperty,Vp=Object.getOwnPropertyDescriptor,eo=(e,t,r,i)=>{for(var n=i>1?void 0:i?Vp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Kp(t,r,n),n};function Gp(e,t){(un.instance??Yp()).show(e,t)}function Yp(){const e=document.createElement("table-info-dialog");return document.body.appendChild(e),e}let un=class extends Ne{constructor(){super(...arguments),this.name="",this.info=null,this.dialogEl=null,this.close=()=>this.dialogEl?.close(),this.onSubmit=e=>{e.preventDefault(),this.close()}}connectedCallback(){super.connectedCallback(),un.instance=this}disconnectedCallback(){super.disconnectedCallback(),un.instance===this&&(un.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Vt(this.dialogEl,e)}show(e,t){this.name=e,this.info=t,this.updateComplete.then(()=>this.dialogEl?.showModal())}row(e,t,r){if(!t&&!r)return me;const i=r?R`<a href=${r} target="_blank" rel="noopener noreferrer">${t||r}</a>`:R`${t}`;return R`<dt>${e}</dt>
      <dd>${i}</dd>`}render(){const e=this.info,t=!!(e?.source||e?.sourceUrl||e?.license||e?.licenseUrl||e?.about||e?.aboutUrl);return R`
      <dialog @cancel=${this.close} @keydown=${Kt}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>×</button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>${this.name}</h2>
            <div class="header-actions">
              <button type="submit" class="ghost">Close</button>
            </div>
          </div>
          <div class="dialog-body">
            ${e?.descriptionHtml?R`<div class="desc">${nr(e.descriptionHtml)}</div>`:e?.description?R`<div class="desc">${e.description}</div>`:me}
            ${t?R`<dl>
                  ${this.row("Source",e?.source,e?.sourceUrl)}
                  ${this.row("License",e?.license,e?.licenseUrl)}
                  ${this.row("About",e?.about,e?.aboutUrl)}
                </dl>`:me}
            ${!e?.description&&!e?.descriptionHtml&&!t?R`<p class="empty">No additional information.</p>`:me}
          </div>
        </form>
      </dialog>
    `}};un.instance=null;un.styles=[Wt,Ye`
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
    `];eo([K()],un.prototype,"name",2);eo([K()],un.prototype,"info",2);un=eo([nt("table-info-dialog")],un);const Xp=.25,Qp=4;function Jp(e){return Math.min(Qp,Math.max(Xp,e))}function Ta(e,t,r){return{x:e.x+t,y:e.y+r,scale:e.scale}}const $r={x:0,y:0,scale:1};function Aa(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Zp(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function em(e,t){let r={...$r};t.style.transformOrigin="0 0";const i=new Set,n=()=>{t.style.transform=`translate(${r.x}px, ${r.y}px) scale(${r.scale})`;for(const v of i)v({...r})};let o="none",l={...$r},c=0,h=0,g=0,x=0,w=0,P=0;const W=(v,E)=>{const b=e.getBoundingClientRect();return{x:v-b.left,y:E-b.top}},L=v=>{if(v.touches.length===2){o="pinch",l={...r};const[E,b]=[v.touches[0],v.touches[1]];g=Aa(E,b)||1;const C=W((E.clientX+b.clientX)/2,(E.clientY+b.clientY)/2);x=(C.x-r.x)/r.scale,w=(C.y-r.y)/r.scale,v.preventDefault();return}if(v.touches.length===1&&!Zp(v.target)){const E=v.timeStamp;if(E-P<300){r={...$r},n(),P=0,o="none",v.preventDefault();return}P=E,o="pan",l={...r},c=v.touches[0].clientX,h=v.touches[0].clientY}else o="none"},N=v=>{if(o==="pan"&&v.touches.length===1){const E=v.touches[0];r=Ta(l,E.clientX-c,E.clientY-h),n(),v.preventDefault()}else if(o==="pinch"&&v.touches.length>=2){const[E,b]=[v.touches[0],v.touches[1]],C=Jp(l.scale*(Aa(E,b)/g)),ue=W((E.clientX+b.clientX)/2,(E.clientY+b.clientY)/2);r={x:ue.x-x*C,y:ue.y-w*C,scale:C},n(),v.preventDefault()}},U=v=>{v.touches.length===0?o="none":v.touches.length===1&&o==="pinch"&&(o="pan",l={...r},c=v.touches[0].clientX,h=v.touches[0].clientY)};let re=!1,ce={...$r},be=0,Q=0,q=!1;const oe=(v,E)=>{const b=e.getBoundingClientRect();return v>=b.left&&v<=b.right&&E>=b.top&&E<=b.bottom},ye=v=>{if(!re)return;const E=v.clientX-be,b=v.clientY-Q;!q&&Math.hypot(E,b)<4||(q=!0,document.body.style.cursor="grabbing",r=Ta(ce,E,b),n(),v.preventDefault())},$e=()=>{re&&(re=!1,document.body.style.cursor="",window.removeEventListener("mousemove",ye,!0),window.removeEventListener("mouseup",ze,!0))};function ze(){$e()}const ke=v=>{v.button===2&&oe(v.clientX,v.clientY)&&(re=!0,q=!1,ce={...r},be=v.clientX,Q=v.clientY,window.addEventListener("mousemove",ye,!0),window.addEventListener("mouseup",ze,!0))},m=v=>{q&&(v.preventDefault(),q=!1)};return e.addEventListener("touchstart",L,{passive:!1}),e.addEventListener("touchmove",N,{passive:!1}),e.addEventListener("touchend",U),e.addEventListener("touchcancel",U),window.addEventListener("mousedown",ke,!0),window.addEventListener("contextmenu",m,!0),{snapshot:()=>({...r}),reset:()=>{r={...$r},n()},restore:v=>{r={...v},n()},subscribe:v=>(i.add(v),()=>i.delete(v)),dispose:()=>{e.removeEventListener("touchstart",L),e.removeEventListener("touchmove",N),e.removeEventListener("touchend",U),e.removeEventListener("touchcancel",U),window.removeEventListener("mousedown",ke,!0),window.removeEventListener("contextmenu",m,!0),$e()}}}function Hl(e,t){let r=null;const i=n=>{const o=document.getElementById(e);o&&(o.style.transformOrigin="0 0",o.style.transform=`translate(${-n.x/n.scale}px, ${-n.y/n.scale}px) scale(${1/n.scale})`)};return{enter(){const n=t();r||!n||(i(n.snapshot()),r=n.subscribe(i))},exit(){r?.(),r=null;const n=document.getElementById(e);n&&(n.style.transform="",n.style.transformOrigin="")}}}const tm=200,nm=100;function rm(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<tm||e.h<nm?null:{...e}}var im=Object.defineProperty,sm=Object.getOwnPropertyDescriptor,Lr=(e,t,r,i)=>{for(var n=i>1?void 0:i?sm(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&im(t,r,n),n};let Wn=class extends Ne{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return R`<button
        class="icon ${e?"active":""}"
        title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"}
        @click=${this.openSearch}
      >
        <span class="mi sm">search</span>
      </button>`}return R`<input
      type="search"
      placeholder="search…"
      .value=${this.query}
      @input=${this.onInput}
      @blur=${this.onBlur}
    />`}};Wn.styles=[Zt,Ye`
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
    `];Lr([Ht({type:String})],Wn.prototype,"tableId",2);Lr([K()],Wn.prototype,"query",2);Lr([K()],Wn.prototype,"open",2);Lr([Kn("input")],Wn.prototype,"inputEl",2);Wn=Lr([nt("panel-search")],Wn);var om=Object.defineProperty,am=Object.getOwnPropertyDescriptor,ur=(e,t,r,i)=>{for(var n=i>1?void 0:i?am(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&om(t,r,n),n};let In=class extends Ne{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.rowsActive=!1,this.runTableButton=async(e,t)=>{const r=t?.currentTarget??void 0,i=await ge();try{await Promise.resolve(e.onClick(i.api,{tableId:this.tableId,anchor:r}))}catch(n){console.error(`[table-button:${e.id}]`,n)}}}async connectedCallback(){super.connectedCallback();const e=await ge();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(r=>r.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await ge();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await ge(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const r={};for(const i of t.columns)r[i.field]=lm(i);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:r,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}render(){return R`
      <button title="Add a blank row" aria-label="Add row" @click=${this.addRow}>
        <span class="mi sm">add</span>
      </button>
      <button title="Edit columns" aria-label="Columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span>
      </button>
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>R`<button
              class=${e.danger?"danger":""}
              title=${e.tooltip??e.label}
              aria-label=${e.label}
              @click=${t=>this.runTableButton(e,t)}
            >
              ${e.icon?e.icon.trimStart().startsWith("<svg")?R`<span class="icon-svg">${Ka(e.icon)}</span>`:R`<span class="mi sm">${e.icon}</span>`:R`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};In.styles=[Zt,Ye`
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
    `];ur([Ht({type:String})],In.prototype,"tableId",2);ur([Ht({type:Boolean})],In.prototype,"active",2);ur([K()],In.prototype,"rowCount",2);ur([K()],In.prototype,"tableButtons",2);ur([K()],In.prototype,"table",2);In=ur([nt("panel-footer")],In);function lm(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function ys(e){return e.title?.trim()?e.title.trim():e.name}function cm(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function um(e){const t=document.querySelector("app-shell")?.shadowRoot,r=t?.querySelector("header"),i=t?.querySelector("footer");r&&(e.style.top=`${r.offsetHeight}px`),i&&(e.style.bottom=`${i.offsetHeight}px`)}const Nn=new Map,pi=new Set,Wl=new Set;let Pa=!1,to=null;function dm(){return to}async function hm(){if(Pa)return;Pa=!0;const e=await ge(),t=document.getElementById("easydb-panels"),r=document.getElementById("easydb-panels-viewport");if(t&&r){to=em(t,r);const n=()=>um(t);n(),window.addEventListener("resize",n);const o=document.querySelector("app-shell")?.shadowRoot,l=o?.querySelector("header"),c=o?.querySelector("footer");if(typeof ResizeObserver<"u"&&(l||c)){const h=new ResizeObserver(n);l&&h.observe(l),c&&h.observe(c)}}const i=(await e.store.tables.find()).filter(n=>n.workspaceId===e.workspaceId);i.sort(Ia);for(const n of i)Da(n,e);e.store.tables.subscribe(n=>{const o=n.filter(h=>h.workspaceId===e.workspaceId),l=new Set(o.map(h=>h.id));for(const[h,g]of Nn)if(!l.has(h)){Nn.delete(h),pi.add(h),Wl.add(h);try{g.status!=="closed"&&g.close()}catch{}}const c=o.filter(h=>!Nn.has(h.id)).sort(Ia);for(const h of c)Da(h,e)})}function Ia(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const fm=720,pm=360;function Da(e,t){const r=`panel-${Kl(e.id)}`,i=cm(),n=rm(e.windowGeometry),o=n?.minimized===!0,l=()=>{const E=document.createElement("data-table");return E.tableId=e.id,E.style.height="100%",E},c=o?document.createElement("div"):l();let h=o?null:c,g=ys(e),x=-1,w=-1;const P=()=>{typeof q.setHeaderTitle=="function"&&q.setHeaderTitle(g+dl(x,w))},W=E=>{const b=E.detail;b.key===e.id&&(x=b.count,w=b.total,P())};document.addEventListener($i,W);const L=()=>{re.active=!1,h?.remove(),h=null},N=()=>{if(h)return;const E=document.getElementById(r)?.querySelector(".jsPanel-content");if(!E)return;E.replaceChildren();const b=l();E.appendChild(b),h=b,re.active=!0},U=document.createElement("panel-search");U.tableId=e.id;const re=document.createElement("panel-footer");re.tableId=e.id,re.active=!o;const ce=Hl(r,()=>to),be=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:gm(),Q=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:`${fm} ${pm}`},q=F.create({id:r,container:i,headerTitle:g,footerToolbar:re,theme:"primary",content:c,...Q,position:be,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>ws(e.id,t)},resizeit:{containment:!1,stop:()=>ws(e.id,t)},onfronted:()=>bm(e.id,t),onbeforeclose:()=>pi.has(e.id)?!0:((async()=>await t.api.ui.dialogs.confirm(e.source?`Remove the live table "${e.name}"? Its data stays on the Datasette server.`:`Delete table "${e.name}" and all its rows?`,"Confirm")&&(pi.add(e.id),Nn.get(e.id)?.close()))(),!1),onclosed:async()=>{Nn.delete(e.id),pi.delete(e.id),!Wl.delete(e.id)&&await ym(e.id,t)},onstatuschange:E=>{E.status==="minimized"?L():(E.status==="normalized"||E.status==="maximized")&&N(),E.status==="maximized"?ce.enter():ce.exit(),ws(e.id,t)}});Nn.set(e.id,q);const oe=document.getElementById(r),ye=oe?.querySelector(".jsPanel-controlbar");ye&&ye.prepend(U);const $e=oe?.querySelector(".jsPanel-titlebar");$e&&($e.tabIndex=-1,$e.style.outline="none",$e.addEventListener("pointerdown",()=>$e.focus()));let ze=null;const ke=document.createElement("button");ke.type="button",ke.title="Table info",ke.setAttribute("aria-label","Table info"),ke.className="eda-info-btn",ke.textContent="ⓘ",ke.style.cssText="display:none;background:none;border:0;color:inherit;cursor:pointer;font-size:1rem;line-height:1;padding:0 0.3rem;",ke.addEventListener("click",E=>{E.stopPropagation(),ze&&Gp(g,ze)}),ye?.prepend(ke);const m=E=>{ze=E?.info??null,ke.style.display=ze?"inline-flex":"none"};m(e),n?.maximized&&typeof q.maximize=="function"?queueMicrotask(()=>q.maximize?.()):n?.minimized&&typeof q.minimize=="function"&&queueMicrotask(()=>q.minimize?.()),t.store.tables.subscribe(E=>{const b=E.find(C=>C.id===e.id);b&&(m(b),ys(b)!==g&&(g=ys(b),P()))});const v=q.close.bind(q);q.close=()=>(document.removeEventListener($i,W),v())}let mm=0;function gm(){const e=mm++;return{my:"left-top",at:"left-top",offsetX:40+e%8*30,offsetY:80+e%8*30}}async function ws(e,t){const r=document.getElementById(`panel-${Kl(e)}`);if(!r)return;const i=Nn.get(e)?.status??"normalized";try{const o=(await t.store.tables.findOne(e))?.windowGeometry,l=i==="minimized",c=i==="maximized";let h=r.offsetLeft,g=r.offsetTop,x=r.offsetWidth,w=r.offsetHeight;(l||c)&&o&&(h=o.x,g=o.y,x=o.w,w=o.h),h<=-9e3&&(h=o?.x??40);const P={x:h,y:g,w:x,h:w,z:o?.z??0,minimized:l,maximized:c};await t.store.tables.patch(e,{windowGeometry:P,updatedAt:Date.now()})}catch{}}async function bm(e,t){try{const r=await t.store.tables.findOne(e);if(!r)return;const i=r.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...i,z:Date.now()},updatedAt:Date.now()})}catch{}}async function ym(e,t){if(!(await t.store.tables.findOne(e))?.source){const i=t.store.rows(e),n=await i.find();await i.bulkRemove(n.map(o=>o.id))}await t.store.tables.remove(e)}function Kl(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}var wm=Object.defineProperty,vm=Object.getOwnPropertyDescriptor,Gt=(e,t,r,i)=>{for(var n=i>1?void 0:i?vm(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&wm(t,r,n),n};let St=class extends Ne{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.tableColumns=[],this.rows=[],this.showColsMenu=!1,this.allRows=[],this.searchQuery="",this.globalQuery="",this.onSearch=e=>{const t=e.detail;t.tableId===this.viewInstanceId&&(this.searchQuery=t.query??"",this.recompute())},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??"",this.recompute()}}get templateOn(){return this.instance?.templateEnabled!==!1}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:table-search",this.onSearch),document.addEventListener("easydb:global-search",this.onGlobalSearch),await this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:table-search",this.onSearch),document.removeEventListener("easydb:global-search",this.onGlobalSearch),this.rowsUnsub?.(),this.instUnsub?.()}async updated(e){e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}async reload(){this.rowsUnsub?.(),this.loaded=!1,await this.load()}async load(){if(!this.viewInstanceId)return;this.rowsUnsub?.(),this.instUnsub?.();const e=await ge(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const r=await e.store.tables.findOne(t.tableId);this.tableColumns=r?.columns??[],r&&t.tableName!==r.name&&e.store.viewInstances.patch(t.id,{tableName:r.name});const i=new Map(this.tableColumns.map(o=>[o.field,o]));this.columns=t.visibleColumns.map(o=>i.get(o)??{field:o,label:o,type:"string"}),this.instUnsub=e.store.viewInstances.subscribe(o=>{const l=o.find(c=>c.id===this.viewInstanceId);if(l){if(l.tableId!==this.instance?.tableId){this.instance=l,this.reload();return}this.instance=l,this.recompute()}});const n=e.store.rows(t.tableId);this.rowsUnsub=n.subscribe(o=>{this.allRows=o,this.recompute()}),this.allRows=await n.find(),this.recompute(),this.loaded=!0}recompute(){if(!this.instance)return;let e=Xf(this.allRows,this.instance);const t=(o,l)=>Object.values(o.data).some(c=>c!=null&&String(c).toLowerCase().includes(l)),r=this.searchQuery.trim(),i=this.globalQuery.trim();r&&(e=xi(e,r,t)),i&&(e=xi(e,i,t));const n=this.instance.limit??0;n>0&&e.length>n&&(e=e.slice(0,n)),this.rows=e,this.templateOn&&ul(this.viewInstanceId,e.length,this.allRows.length)}async toggleTemplate(){if(!this.instance)return;const e=!this.templateOn;await(await ge()).store.viewInstances.patch(this.instance.id,{templateEnabled:e,updatedAt:Date.now()}),this.instance={...this.instance,templateEnabled:e},this.showColsMenu=!1}editTemplate(){!this.instance||!this.template||Is(this.instance.tableId,{editTemplateId:this.template.id})}editView(){this.instance&&Is(this.instance.tableId,{editInstanceId:this.instance.id})}async toggleColumn(e){if(!this.instance)return;const t=this.instance.visibleColumns,i=t.includes(e)?t.filter(o=>o!==e):[...t,e];if(i.length===0)return;await(await ge()).store.viewInstances.patch(this.instance.id,{visibleColumns:i,updatedAt:Date.now()}),this.instance={...this.instance,visibleColumns:i}}renderTable(){return this.rows.length===0?R`<div class="vw-empty">No rows.</div>`:R`
      <table class="vw-table">
        <thead>
          <tr>
            ${this.columns.map(e=>R`<th>${e.label||e.field}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map(e=>R`<tr>
                ${this.columns.map(t=>{const r=e.data[t.field];return R`<td>${r==null?"":String(r)}</td>`})}
              </tr>`)}
        </tbody>
      </table>
    `}renderTemplated(){const e=this.template;if(!e)return R`<div class="vw-empty">This view's template is missing.</div>`;if(Qf(e.rowHtml)){const t=this.instance?.mapping??{},r=this.rows.map(n=>Vf(e.rowHtml,n,t)).join(""),i=(e.headerHtml??"")+r+(e.footerHtml??"");return R`<div class="vw-root">${nr(i)}</div>`}return R`<div class="vw-root">
      ${e.headerHtml?.trim()?R`<div class="vw-html">${nr(e.headerHtml)}</div>`:me}
      ${this.renderTable()}
      ${e.footerHtml?.trim()?R`<div class="vw-html">${nr(e.footerHtml)}</div>`:me}
    </div>`}renderFooter(){if(!this.instance)return me;const e=this.templateOn,t=new Set(this.instance.visibleColumns);return R`<div class="vw-footer">
      ${!e&&this.showColsMenu?R`<div class="cols-menu">
            ${this.tableColumns.map(r=>R`<label
                  ><input
                    type="checkbox"
                    .checked=${t.has(r.field)}
                    @change=${()=>void this.toggleColumn(r.field)}
                  />${r.label||r.field}</label
                >`)}
          </div>`:me}
      ${e?me:R`<button
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
      ${this.template?R`<button
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
    </div>`}render(){if(!this.loaded)return R`<div class="vw-body scroll"><div class="vw-loading">Loading…</div></div>`;if(this.error)return R`<div class="vw-body scroll"><div class="vw-empty">${this.error}</div></div>`;const t=this.templateOn?R`<div class="vw-body scroll">${this.renderTemplated()}</div>`:R`<div class="vw-body grid">
          <data-table
            .tableId=${this.instance?.tableId??""}
            .viewInstanceId=${this.viewInstanceId}
          ></data-table>
        </div>`;return R`${t}${this.renderFooter()}`}};St.styles=[Zt,Ye`
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
    `];Gt([Ht({type:String})],St.prototype,"viewInstanceId",2);Gt([K()],St.prototype,"loaded",2);Gt([K()],St.prototype,"error",2);Gt([K()],St.prototype,"instance",2);Gt([K()],St.prototype,"template",2);Gt([K()],St.prototype,"columns",2);Gt([K()],St.prototype,"tableColumns",2);Gt([K()],St.prototype,"rows",2);Gt([K()],St.prototype,"showColsMenu",2);Gt([K()],St.prototype,"searchQuery",2);Gt([K()],St.prototype,"globalQuery",2);St=Gt([nt("view-window")],St);const Qt=new Map;let Ra=!1;function Oa(e){e.panel.setHeaderTitle?.(e.name+dl(e.count,e.total))}function xm(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function $m(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function Vl(e){return`view-panel-${$m(e)}`}async function km(){if(Ra)return;Ra=!0;const e=await ge(),t=r=>r.filter(i=>i.workspaceId===e.workspaceId&&i.open);for(const r of t(await e.store.viewInstances.find()))ja(r,e);e.store.viewInstances.subscribe(r=>{const i=new Map(t(r).map(n=>[n.id,n]));for(const n of[...Qt.keys()])i.has(n)||Em(n);for(const[n,o]of i)Qt.has(n)||ja(o,e)}),e.store.tables.subscribe(r=>void Cm(e,r)),document.addEventListener($i,r=>{const i=r.detail,n=Qt.get(i.key);n&&(n.count=i.count,n.total=i.total,Oa(n))}),document.addEventListener("easydb:reload-view",r=>{const i=r.detail?.instanceId;if(!i)return;const n=Qt.get(i);n&&(async()=>{const o=await e.store.viewInstances.findOne(i);o&&(n.name=o.name,Oa(n)),n.el.reload()})()}),document.addEventListener("easydb:reload-views",()=>{for(const{el:r}of Qt.values())r.reload()})}async function Cm(e,t){const r=t.filter(l=>l.workspaceId===e.workspaceId),i=new Set(r.map(l=>l.id)),n=new Map;for(const l of r)n.has(l.name)||n.set(l.name,l);const o=await e.store.viewInstances.find();for(const l of o){if(l.workspaceId!==e.workspaceId||i.has(l.tableId)||!l.tableName)continue;const c=n.get(l.tableName);c&&await e.store.viewInstances.patch(l.id,{tableId:c.id,updatedAt:Date.now()})}}function ja(e,t){if(Qt.has(e.id))return;const r=Vl(e.id),i=document.createElement("view-window");i.viewInstanceId=e.id,i.style.height="100%";const n=e.windowGeometry,o=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:"480 520"},l=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:{my:"center-top",at:"center-top",offsetY:60},c=Hl(r,dm),h=F.create({id:r,container:xm(),headerTitle:e.name,theme:"#0891b2",content:i,...o,position:l,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>void vs(e.id)},resizeit:{containment:!1,stop:()=>void vs(e.id)},onstatuschange:P=>{P.status==="maximized"?c.enter():c.exit(),vs(e.id)},onclosed:()=>{Qt.delete(e.id),c.exit(),t.store.viewInstances.patch(e.id,{open:!1,updatedAt:Date.now()}).catch(()=>{})}});Qt.set(e.id,{panel:h,el:i,name:e.name,count:-1,total:-1});const g=document.getElementById(r),x=document.createElement("panel-search");x.tableId=e.id,g?.querySelector(".jsPanel-controlbar")?.prepend(x);const w=g?.querySelector(".jsPanel-titlebar");w&&(w.tabIndex=-1,w.style.outline="none",w.addEventListener("pointerdown",()=>w.focus())),n?.maximized?queueMicrotask(()=>h.maximize?.()):n?.minimized&&queueMicrotask(()=>h.minimize?.())}function Em(e){const t=Qt.get(e);if(t){Qt.delete(e);try{t.panel.status!=="closed"&&t.panel.close()}catch{}}}async function vs(e){const t=document.getElementById(Vl(e)),r=Qt.get(e);if(!t||!r)return;const i=r.panel.status,n=i==="minimized",o=i==="maximized";try{const l=await ge(),c=(await l.store.viewInstances.findOne(e))?.windowGeometry;let h=t.offsetLeft,g=t.offsetTop,x=t.offsetWidth,w=t.offsetHeight;(n||o)&&c&&(h=c.x,g=c.y,x=c.w,w=c.h),h<=-9e3&&(h=c?.x??40);const P={x:h,y:g,w:x,h:w,z:0,minimized:n,maximized:o};await l.store.viewInstances.patch(e,{windowGeometry:P,updatedAt:Date.now()})}catch{}}var Sm=Object.defineProperty,_m=Object.getOwnPropertyDescriptor,Gl=(e,t,r,i)=>{for(var n=i>1?void 0:i?_m(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Sm(t,r,n),n};let Ei=class extends Ne{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await ge();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(r=>this.tables=r.filter(i=>i.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(r=>r.workspaceId===this.workspaceId),await hm(),await km()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?R``:R`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on the
      page, or click <strong>+ New Table</strong> above.
    </div>`}};Ei.styles=Ye`
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
  `;Gl([K()],Ei.prototype,"tables",2);Ei=Gl([nt("table-list")],Ei);var Tm=Object.defineProperty,Am=Object.getOwnPropertyDescriptor,no=(e,t,r,i)=>{for(var n=i>1?void 0:i?Am(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Tm(t,r,n),n};let Tr=class extends Ne{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await ge();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);if(!t)return;const r=new URLSearchParams(location.search);r.set("space",t.name);const i=`${location.pathname}?${r.toString()}${location.hash}`;location.assign(i)}async addWorkspace(){const t=await(await ge()).api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const r=new URLSearchParams(location.search);r.set("space",t.trim()),location.assign(`${location.pathname}?${r.toString()}${location.hash}`)}render(){return R`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>R`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};Tr.styles=[Zt,Ye`
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
  `];no([K()],Tr.prototype,"workspaces",2);no([K()],Tr.prototype,"current",2);Tr=no([nt("workspace-selector")],Tr);var Fa=Object.freeze,Yl=Object.defineProperty,Pm=Object.getOwnPropertyDescriptor,nn=(e,t,r,i)=>{for(var n=i>1?void 0:i?Pm(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Yl(t,r,n),n},Im=(e,t)=>Fa(Yl(e,"raw",{value:Fa(e.slice())})),za;function La(e){return e?e.trimStart().startsWith("<svg")?R`<span class="icon-svg">${Ka(e)}</span>`:R`<span class="mi sm">${e}</span>`:""}let zt=class extends Ne{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.workspaceTitle="",this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId,{notice:t.detail.notice})},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onOpenSettings=()=>{this.settingsDialog?.open()},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{Ma(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!Ma(e))return;e.preventDefault();const t=await ge(),r=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:r,event:e});for(const i of[...t.registries.dropHandlers])try{if(await i(e,t.api))return}catch(n){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:n})}},this.runSlot=(e,t)=>{if(!this.api)return;const r=t?.currentTarget??void 0;Promise.resolve(e.onClick(this.api,{anchor:r})).catch(i=>{console.error(`[footer-button:${e.id}]`,i)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.addEventListener("easydb:open-settings",this.onOpenSettings),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.removeEventListener("easydb:open-settings",this.onOpenSettings),this.workspaceUnsub?.()}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await ge();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e)),this.workspaceUnsub=e.store.workspaces.subscribe(t=>{const r=t.find(i=>i.id===e.workspaceId);this.workspaceTitle=r?.title?.trim()??""})}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){if(e.variant==="secondary")return R`
        <button class="icon-btn" title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
          ${La(e.icon)}
        </button>
      `;const r=t==="header"||e.variant==="primary"?"primary":"slot";return R`
      <button class=${r} title=${e.tooltip??e.label} @click=${i=>this.runSlot(e,i)}>
        ${La(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return R(za||(za=Im([`
      <header>
        <strong
          >`,`
          <a
            class="version-link"
            href="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md"
            target="_blank"
            rel="noopener"
            title="View the changelog on GitHub"
            ><span class="version">v0.0.118</span></a
          ></strong
        >
        `,`
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
      <settings-dialog></settings-dialog>
      <script-editor-dialog><\/script-editor-dialog>
      <host-dialogs></host-dialogs>
      <toast-host></toast-host>
    `])),this.workspaceTitle||"easyDBAccess",this.headerButtons.filter(e=>e.variant!=="secondary").map(e=>this.renderSlotButton(e,"header")),this.searchOpen?R`<span class="search-wrap">
              <input
                class="search"
                type="search"
                placeholder="search all tables…"
                .value=${this.searchQuery}
                @input=${this.onSearchInput}
                @blur=${this.closeSearchOnBlur}
              />
              ${this.searchQuery.length>0?R`<button
                    class="search-clear"
                    title="Clear search"
                    aria-label="Clear search"
                    @mousedown=${this.clearSearch}
                  >
                    ×
                  </button>`:""}
            </span>`:R`<button
              class="icon-btn ${this.searchQuery.trim().length>0?"active":""}"
              title=${this.searchQuery.trim().length>0?`Filtering all tables: ${this.searchQuery}`:"Search across all tables in this workspace"}
              @click=${this.openSearch}
            >
              <span class="mi">search</span>
            </button>`,this.headerButtons.filter(e=>e.variant==="secondary").map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};zt.styles=[Zt,Ye`
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
    `];nn([Kn("new-table-dialog")],zt.prototype,"dialog",2);nn([Kn("csv-paste-dialog")],zt.prototype,"csvPasteDialog",2);nn([Kn("plugin-manager-dialog")],zt.prototype,"pluginManagerDialog",2);nn([Kn("settings-dialog")],zt.prototype,"settingsDialog",2);nn([Kn("input.search")],zt.prototype,"searchInput",2);nn([K()],zt.prototype,"footerButtons",2);nn([K()],zt.prototype,"headerButtons",2);nn([K()],zt.prototype,"searchQuery",2);nn([K()],zt.prototype,"searchOpen",2);nn([K()],zt.prototype,"workspaceTitle",2);zt=nn([nt("app-shell")],zt);function Ma(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([ge(),Tn(()=>Promise.resolve().then(()=>Ll),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});export{Ye as a,R as b,Kt as c,Wt as d,Zt as e,Ne as i,Vt as m,K as r,nt as t};
//# sourceMappingURL=index-JlVqOzV2.js.map
