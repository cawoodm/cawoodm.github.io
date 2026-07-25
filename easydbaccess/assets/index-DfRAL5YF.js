(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const kl="modulepreload",Cl=function(e){return"/easydbaccess/"+e},eo={},El=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){let c=function(y){return Promise.all(y.map(k=>Promise.resolve(k).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=d?.nonce||d?.getAttribute("nonce");n=c(r.map(y=>{if(y=Cl(y),y in eo)return;eo[y]=!0;const k=y.endsWith(".css"),x=k?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${x}`))return;const I=document.createElement("link");if(I.rel=k?"stylesheet":kl,k||(I.as="script"),I.crossOrigin="",I.href=y,f&&I.setAttribute("nonce",f),document.head.appendChild(I),k)return new Promise((V,z)=>{I.addEventListener("load",V),I.addEventListener("error",()=>z(new Error(`Unable to preload CSS for ${y}`)))})}))}function a(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return n.then(c=>{for(const d of c||[])d.status==="rejected"&&a(d.reason);return t().catch(a)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gr=globalThis,fs=Gr.ShadowRoot&&(Gr.ShadyCSS===void 0||Gr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ps=Symbol(),to=new WeakMap;let ta=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==ps)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(fs&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=to.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&to.set(r,t))}return t}toString(){return this.cssText}};const Sl=e=>new ta(typeof e=="string"?e:e+"",void 0,ps),Ze=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,a)=>i+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[a+1],e[0]);return new ta(r,e,ps)},_l=(e,t)=>{if(fs)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),n=Gr.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)}},no=fs?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return Sl(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Al,defineProperty:Pl,getOwnPropertyDescriptor:Tl,getOwnPropertyNames:Dl,getOwnPropertySymbols:Il,getPrototypeOf:Rl}=Object,oi=globalThis,ro=oi.trustedTypes,jl=ro?ro.emptyScript:"",Ol=oi.reactiveElementPolyfillSupport,fr=(e,t)=>e,Zr={toAttribute(e,t){switch(t){case Boolean:e=e?jl:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ms=(e,t)=>!Al(e,t),io={attribute:!0,type:String,converter:Zr,reflect:!1,useDefault:!1,hasChanged:ms};Symbol.metadata??=Symbol("metadata"),oi.litPropertyMetadata??=new WeakMap;let Yn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=io){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,r);n!==void 0&&Pl(this.prototype,t,n)}}static getPropertyDescriptor(t,r,i){const{get:n,set:a}=Tl(this.prototype,t)??{get(){return this[r]},set(c){this[r]=c}};return{get:n,set(c){const d=n?.call(this);a?.call(this,c),this.requestUpdate(t,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??io}static _$Ei(){if(this.hasOwnProperty(fr("elementProperties")))return;const t=Rl(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(fr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(fr("properties"))){const r=this.properties,i=[...Dl(r),...Il(r)];for(const n of i)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)r.unshift(no(n))}else t!==void 0&&r.push(no(t));return r}static _$Eu(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _l(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$ET(t,r){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const a=(i.converter?.toAttribute!==void 0?i.converter:Zr).toAttribute(r,i.type);this._$Em=t,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(t,r){const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const a=i.getPropertyOptions(n),c=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:Zr;this._$Em=n;const d=c.fromAttribute(r,a.type);this[n]=d??this._$Ej?.get(n)??d,this._$Em=null}}requestUpdate(t,r,i,n=!1,a){if(t!==void 0){const c=this.constructor;if(n===!1&&(a=this[t]),i??=c.getPropertyOptions(t),!((i.hasChanged??ms)(a,r)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(c._$Eu(t,i))))return;this.C(t,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:i,reflect:n,wrapped:a},c){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,c??r??this[t]),a!==!0||c!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,a]of i){const{wrapped:c}=a,d=this[n];c!==!0||this._$AL.has(n)||d===void 0||this.C(n,void 0,a,d)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(r)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Yn.elementStyles=[],Yn.shadowRootOptions={mode:"open"},Yn[fr("elementProperties")]=new Map,Yn[fr("finalized")]=new Map,Ol?.({ReactiveElement:Yn}),(oi.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gs=globalThis,so=e=>e,ei=gs.trustedTypes,oo=ei?ei.createPolicy("lit-html",{createHTML:e=>e}):void 0,na="$lit$",xn=`lit$${Math.random().toFixed(9).slice(2)}$`,ra="?"+xn,Fl=`<${ra}>`,On=document,pr=()=>On.createComment(""),mr=e=>e===null||typeof e!="object"&&typeof e!="function",bs=Array.isArray,zl=e=>bs(e)||typeof e?.[Symbol.iterator]=="function",Wi=`[ 	
\f\r]`,dr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ao=/-->/g,lo=/>/g,Tn=RegExp(`>|${Wi}(?:([^\\s"'>=/]+)(${Wi}*=${Wi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),co=/'/g,uo=/"/g,ia=/^(?:script|style|textarea|title)$/i,Ll=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),M=Ll(1),Fn=Symbol.for("lit-noChange"),ye=Symbol.for("lit-nothing"),ho=new WeakMap,In=On.createTreeWalker(On,129);function sa(e,t){if(!bs(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return oo!==void 0?oo.createHTML(t):t}const Bl=(e,t)=>{const r=e.length-1,i=[];let n,a=t===2?"<svg>":t===3?"<math>":"",c=dr;for(let d=0;d<r;d++){const f=e[d];let y,k,x=-1,I=0;for(;I<f.length&&(c.lastIndex=I,k=c.exec(f),k!==null);)I=c.lastIndex,c===dr?k[1]==="!--"?c=ao:k[1]!==void 0?c=lo:k[2]!==void 0?(ia.test(k[2])&&(n=RegExp("</"+k[2],"g")),c=Tn):k[3]!==void 0&&(c=Tn):c===Tn?k[0]===">"?(c=n??dr,x=-1):k[1]===void 0?x=-2:(x=c.lastIndex-k[2].length,y=k[1],c=k[3]===void 0?Tn:k[3]==='"'?uo:co):c===uo||c===co?c=Tn:c===ao||c===lo?c=dr:(c=Tn,n=void 0);const V=c===Tn&&e[d+1].startsWith("/>")?" ":"";a+=c===dr?f+Fl:x>=0?(i.push(y),f.slice(0,x)+na+f.slice(x)+xn+V):f+xn+(x===-2?d:V)}return[sa(e,a+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class gr{constructor({strings:t,_$litType$:r},i){let n;this.parts=[];let a=0,c=0;const d=t.length-1,f=this.parts,[y,k]=Bl(t,r);if(this.el=gr.createElement(y,i),In.currentNode=this.el.content,r===2||r===3){const x=this.el.content.firstChild;x.replaceWith(...x.childNodes)}for(;(n=In.nextNode())!==null&&f.length<d;){if(n.nodeType===1){if(n.hasAttributes())for(const x of n.getAttributeNames())if(x.endsWith(na)){const I=k[c++],V=n.getAttribute(x).split(xn),z=/([.?@])?(.*)/.exec(I);f.push({type:1,index:a,name:z[2],strings:V,ctor:z[1]==="."?Nl:z[1]==="?"?ql:z[1]==="@"?Ul:ai}),n.removeAttribute(x)}else x.startsWith(xn)&&(f.push({type:6,index:a}),n.removeAttribute(x));if(ia.test(n.tagName)){const x=n.textContent.split(xn),I=x.length-1;if(I>0){n.textContent=ei?ei.emptyScript:"";for(let V=0;V<I;V++)n.append(x[V],pr()),In.nextNode(),f.push({type:2,index:++a});n.append(x[I],pr())}}}else if(n.nodeType===8)if(n.data===ra)f.push({type:2,index:a});else{let x=-1;for(;(x=n.data.indexOf(xn,x+1))!==-1;)f.push({type:7,index:a}),x+=xn.length-1}a++}}static createElement(t,r){const i=On.createElement("template");return i.innerHTML=t,i}}function Xn(e,t,r=e,i){if(t===Fn)return t;let n=i!==void 0?r._$Co?.[i]:r._$Cl;const a=mr(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),a===void 0?n=void 0:(n=new a(e),n._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=n:r._$Cl=n),n!==void 0&&(t=Xn(e,n._$AS(e,t.values),n,i)),t}class Ml{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:i}=this._$AD,n=(t?.creationScope??On).importNode(r,!0);In.currentNode=n;let a=In.nextNode(),c=0,d=0,f=i[0];for(;f!==void 0;){if(c===f.index){let y;f.type===2?y=new wr(a,a.nextSibling,this,t):f.type===1?y=new f.ctor(a,f.name,f.strings,this,t):f.type===6&&(y=new Hl(a,this,t)),this._$AV.push(y),f=i[++d]}c!==f?.index&&(a=In.nextNode(),c++)}return In.currentNode=On,n}p(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class wr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,n){this.type=2,this._$AH=ye,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Xn(this,t,r),mr(t)?t===ye||t==null||t===""?(this._$AH!==ye&&this._$AR(),this._$AH=ye):t!==this._$AH&&t!==Fn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):zl(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ye&&mr(this._$AH)?this._$AA.nextSibling.data=t:this.T(On.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=gr.createElement(sa(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(r);else{const a=new Ml(n,this),c=a.u(this.options);a.p(r),this.T(c),this._$AH=a}}_$AC(t){let r=ho.get(t.strings);return r===void 0&&ho.set(t.strings,r=new gr(t)),r}k(t){bs(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const a of t)n===r.length?r.push(i=new wr(this.O(pr()),this.O(pr()),this,this.options)):i=r[n],i._$AI(a),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const i=so(t).nextSibling;so(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class ai{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,n,a){this.type=1,this._$AH=ye,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ye}_$AI(t,r=this,i,n){const a=this.strings;let c=!1;if(a===void 0)t=Xn(this,t,r,0),c=!mr(t)||t!==this._$AH&&t!==Fn,c&&(this._$AH=t);else{const d=t;let f,y;for(t=a[0],f=0;f<a.length-1;f++)y=Xn(this,d[i+f],r,f),y===Fn&&(y=this._$AH[f]),c||=!mr(y)||y!==this._$AH[f],y===ye?t=ye:t!==ye&&(t+=(y??"")+a[f+1]),this._$AH[f]=y}c&&!n&&this.j(t)}j(t){t===ye?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Nl extends ai{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ye?void 0:t}}class ql extends ai{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ye)}}class Ul extends ai{constructor(t,r,i,n,a){super(t,r,i,n,a),this.type=5}_$AI(t,r=this){if((t=Xn(this,t,r,0)??ye)===Fn)return;const i=this._$AH,n=t===ye&&i!==ye||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==ye&&(i===ye||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Hl{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Xn(this,t)}}const Wl=gs.litHtmlPolyfillSupport;Wl?.(gr,wr),(gs.litHtmlVersions??=[]).push("3.3.3");const Kl=(e,t,r)=>{const i=r?.renderBefore??t;let n=i._$litPart$;if(n===void 0){const a=r?.renderBefore??null;i._$litPart$=n=new wr(t.insertBefore(pr(),a),a,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ys=globalThis;let Ke=class extends Yn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Kl(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Fn}};Ke._$litElement$=!0,Ke.finalized=!0,ys.litElementHydrateSupport?.({LitElement:Ke});const Vl=ys.litElementPolyfillSupport;Vl?.({LitElement:Ke});(ys.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yl={attribute:!0,type:String,converter:Zr,reflect:!1,hasChanged:ms},Xl=(e=Yl,t,r)=>{const{kind:i,metadata:n}=r;let a=globalThis.litPropertyMetadata.get(n);if(a===void 0&&globalThis.litPropertyMetadata.set(n,a=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),i==="accessor"){const{name:c}=r;return{set(d){const f=t.get.call(this);t.set.call(this,d),this.requestUpdate(c,f,e,!0,d)},init(d){return d!==void 0&&this.C(c,void 0,e,d),d}}}if(i==="setter"){const{name:c}=r;return function(d){const f=this[c];t.call(this,d),this.requestUpdate(c,f,e,!0,d)}}throw Error("Unsupported decorator location: "+i)};function Bt(e){return(t,r)=>typeof r=="object"?Xl(e,t,r):((i,n,a)=>{const c=n.hasOwnProperty(a);return n.constructor.createProperty(a,i),c?Object.getOwnPropertyDescriptor(n,a):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(e){return Bt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gl=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Jn(e,t){return(r,i,n)=>{const a=c=>c.renderRoot?.querySelector(e)??null;return Gl(r,i,{get(){return a(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ql={CHILD:2},oa=e=>(...t)=>({_$litDirective$:e,values:t});class Jl{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ti extends Jl{constructor(t){if(super(t),this.it=ye,t.type!==Ql.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ye||t==null)return this._t=void 0,this.it=t;if(t===Fn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}ti.directiveName="unsafeHTML",ti.resultType=1;const Ki=oa(ti);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class es extends ti{}es.directiveName="unsafeSVG",es.resultType=2;const Zl=oa(es);var ec=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qr={exports:{}},nc=Qr.exports,fo;function rc(){return fo||(fo=1,(function(e,t){(function(r,i){e.exports=i()})(nc,function(){var r=function(s,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,u){l.__proto__=u}||function(l,u){for(var h in u)Object.prototype.hasOwnProperty.call(u,h)&&(l[h]=u[h])})(s,o)},i=function(){return(i=Object.assign||function(s){for(var o,l=1,u=arguments.length;l<u;l++)for(var h in o=arguments[l])Object.prototype.hasOwnProperty.call(o,h)&&(s[h]=o[h]);return s}).apply(this,arguments)};function n(s,o,l){for(var u,h=0,p=o.length;h<p;h++)!u&&h in o||((u=u||Array.prototype.slice.call(o,0,h))[h]=o[h]);return s.concat(u||Array.prototype.slice.call(o))}var a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:ec,c=Object.keys,d=Array.isArray;function f(s,o){return typeof o!="object"||c(o).forEach(function(l){s[l]=o[l]}),s}typeof Promise>"u"||a.Promise||(a.Promise=Promise);var y=Object.getPrototypeOf,k={}.hasOwnProperty;function x(s,o){return k.call(s,o)}function I(s,o){typeof o=="function"&&(o=o(y(s))),(typeof Reflect>"u"?c:Reflect.ownKeys)(o).forEach(function(l){z(s,l,o[l])})}var V=Object.defineProperty;function z(s,o,l,u){V(s,o,f(l&&x(l,"get")&&typeof l.get=="function"?{get:l.get,set:l.set,configurable:!0}:{value:l,configurable:!0,writable:!0},u))}function H(s){return{from:function(o){return s.prototype=Object.create(o.prototype),z(s.prototype,"constructor",s),{extend:I.bind(null,s.prototype)}}}}var se=Object.getOwnPropertyDescriptor,ce=[].slice;function Ce(s,o,l){return ce.call(s,o,l)}function Le(s,o){return o(s)}function ie(s){if(!s)throw new Error("Assertion Failed")}function oe(s){a.setImmediate?setImmediate(s):setTimeout(s,0)}function we(s,o){if(typeof o=="string"&&x(s,o))return s[o];if(!o)return s;if(typeof o!="string"){for(var l=[],u=0,h=o.length;u<h;++u){var p=we(s,o[u]);l.push(p)}return l}var b=o.indexOf(".");if(b!==-1){var v=s[o.substr(0,b)];return v==null?void 0:we(v,o.substr(b+1))}}function Pe(s,o,l){if(s&&o!==void 0&&!("isFrozen"in Object&&Object.isFrozen(s)))if(typeof o!="string"&&"length"in o){ie(typeof l!="string"&&"length"in l);for(var u=0,h=o.length;u<h;++u)Pe(s,o[u],l[u])}else{var p,b,v=o.indexOf(".");v!==-1?(p=o.substr(0,v),(b=o.substr(v+1))===""?l===void 0?d(s)&&!isNaN(parseInt(p))?s.splice(p,1):delete s[p]:s[p]=l:Pe(v=!(v=s[p])||!x(s,p)?s[p]={}:v,b,l)):l===void 0?d(s)&&!isNaN(parseInt(o))?s.splice(o,1):delete s[o]:s[o]=l}}function at(s){var o,l={};for(o in s)x(s,o)&&(l[o]=s[o]);return l}var Ct=[].concat;function je(s){return Ct.apply([],s)}var an="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(je([8,16,32,64].map(function(s){return["Int","Uint","Float"].map(function(o){return o+s+"Array"})}))).filter(function(s){return a[s]}),m=new Set(an.map(function(s){return a[s]})),w=null;function P(s){return w=new WeakMap,s=(function o(l){if(!l||typeof l!="object")return l;var u=w.get(l);if(u)return u;if(d(l)){u=[],w.set(l,u);for(var h=0,p=l.length;h<p;++h)u.push(o(l[h]))}else if(m.has(l.constructor))u=l;else{var b,v=y(l);for(b in u=v===Object.prototype?{}:Object.create(v),w.set(l,u),l)x(l,b)&&(u[b]=o(l[b]))}return u})(s),w=null,s}var g={}.toString;function C(s){return g.call(s).slice(8,-1)}var ae=typeof Symbol<"u"?Symbol.iterator:"@@iterator",he=typeof ae=="symbol"?function(s){var o;return s!=null&&(o=s[ae])&&o.apply(s)}:function(){return null};function q(s,o){return o=s.indexOf(o),0<=o&&s.splice(o,1),0<=o}var Y={};function Ve(s){var o,l,u,h;if(arguments.length===1){if(d(s))return s.slice();if(this===Y&&typeof s=="string")return[s];if(h=he(s)){for(l=[];!(u=h.next()).done;)l.push(u.value);return l}if(s==null)return[s];if(typeof(o=s.length)!="number")return[s];for(l=new Array(o);o--;)l[o]=s[o];return l}for(o=arguments.length,l=new Array(o);o--;)l[o]=arguments[o];return l}var lt=typeof Symbol<"u"?function(s){return s[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Ee=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Ft=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Ee),Xt={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Ne(s,o){this.name=s,this.message=o}function Fe(s,o){return s+". Errors: "+Object.keys(o).map(function(l){return o[l].toString()}).filter(function(l,u,h){return h.indexOf(l)===u}).join(`
`)}function $e(s,o,l,u){this.failures=o,this.failedKeys=u,this.successCount=l,this.message=Fe(s,o)}function Te(s,o){this.name="BulkError",this.failures=Object.keys(o).map(function(l){return o[l]}),this.failuresByPos=o,this.message=Fe(s,this.failures)}H(Ne).from(Error).extend({toString:function(){return this.name+": "+this.message}}),H($e).from(Ne),H(Te).from(Ne);var Ye=Ft.reduce(function(s,o){return s[o]=o+"Error",s},{}),_e=Ne,ee=Ft.reduce(function(s,o){var l=o+"Error";function u(h,p){this.name=l,h?typeof h=="string"?(this.message="".concat(h).concat(p?`
 `+p:""),this.inner=p||null):typeof h=="object"&&(this.message="".concat(h.name," ").concat(h.message),this.inner=h):(this.message=Xt[o]||l,this.inner=null)}return H(u).from(_e),s[o]=u,s},{});ee.Syntax=SyntaxError,ee.Type=TypeError,ee.Range=RangeError;var Xe=Ee.reduce(function(s,o){return s[o+"Error"]=ee[o],s},{}),ze=Ft.reduce(function(s,o){return["Syntax","Type","Range"].indexOf(o)===-1&&(s[o+"Error"]=ee[o]),s},{});function de(){}function be(s){return s}function Et(s,o){return s==null||s===be?o:function(l){return o(s(l))}}function le(s,o){return function(){s.apply(this,arguments),o.apply(this,arguments)}}function Ge(s,o){return s===de?o:function(){var l=s.apply(this,arguments);l!==void 0&&(arguments[0]=l);var u=this.onsuccess,h=this.onerror;this.onsuccess=null,this.onerror=null;var p=o.apply(this,arguments);return u&&(this.onsuccess=this.onsuccess?le(u,this.onsuccess):u),h&&(this.onerror=this.onerror?le(h,this.onerror):h),p!==void 0?p:l}}function fn(s,o){return s===de?o:function(){s.apply(this,arguments);var l=this.onsuccess,u=this.onerror;this.onsuccess=this.onerror=null,o.apply(this,arguments),l&&(this.onsuccess=this.onsuccess?le(l,this.onsuccess):l),u&&(this.onerror=this.onerror?le(u,this.onerror):u)}}function Nt(s,o){return s===de?o:function(l){var u=s.apply(this,arguments);f(l,u);var h=this.onsuccess,p=this.onerror;return this.onsuccess=null,this.onerror=null,l=o.apply(this,arguments),h&&(this.onsuccess=this.onsuccess?le(h,this.onsuccess):h),p&&(this.onerror=this.onerror?le(p,this.onerror):p),u===void 0?l===void 0?void 0:l:f(u,l)}}function Je(s,o){return s===de?o:function(){return o.apply(this,arguments)!==!1&&s.apply(this,arguments)}}function St(s,o){return s===de?o:function(){var l=s.apply(this,arguments);if(l&&typeof l.then=="function"){for(var u=this,h=arguments.length,p=new Array(h);h--;)p[h]=arguments[h];return l.then(function(){return o.apply(u,p)})}return o.apply(this,arguments)}}ze.ModifyError=$e,ze.DexieError=Ne,ze.BulkError=Te;var Re=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function qe(s){Re=s}var vt={},tt=100,an=typeof Promise>"u"?[]:(function(){var s=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[s,y(s),s];var o=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[o,y(o),s]})(),Ee=an[0],Ft=an[1],an=an[2],Ft=Ft&&Ft.then,ke=Ee&&Ee.constructor,_t=!!an,Ue=function(s,o){rt.push([s,o]),ut&&(queueMicrotask(fe),ut=!1)},gt=!0,ut=!0,nt=[],Be=[],ue=be,Qe={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:de,pgp:!1,env:{},finalize:de},G=Qe,rt=[],ft=0,$t=[];function Q(s){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var o=this._PSD=G;if(typeof s!="function"){if(s!==vt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&dt(this,this._value))}this._state=null,this._value=null,++o.ref,(function l(u,h){try{h(function(p){if(u._state===null){if(p===u)throw new TypeError("A promise cannot be resolved with itself.");var b=u._lib&&Oe();p&&typeof p.then=="function"?l(u,function(v,E){p instanceof Q?p._then(v,E):p.then(v,E)}):(u._state=!0,u._value=p,pn(u)),b&&He()}},dt.bind(null,u))}catch(p){dt(u,p)}})(this,s)}var Gt={get:function(){var s=G,o=Sr;function l(u,h){var p=this,b=!s.global&&(s!==G||o!==Sr),v=b&&!gn(),E=new Q(function(_,D){ne(p,new sn(Ss(u,s,b,v),Ss(h,s,b,v),_,D,s))});return this._consoleTask&&(E._consoleTask=this._consoleTask),E}return l.prototype=vt,l},set:function(s){z(this,"then",s&&s.prototype===vt?Gt:{get:function(){return s},set:Gt.set})}};function sn(s,o,l,u,h){this.onFulfilled=typeof s=="function"?s:null,this.onRejected=typeof o=="function"?o:null,this.resolve=l,this.reject=u,this.psd=h}function dt(s,o){var l,u;Be.push(o),s._state===null&&(l=s._lib&&Oe(),o=ue(o),s._state=!1,s._value=o,u=s,nt.some(function(h){return h._value===u._value})||nt.push(u),pn(s),l&&He())}function pn(s){var o=s._listeners;s._listeners=[];for(var l=0,u=o.length;l<u;++l)ne(s,o[l]);var h=s._PSD;--h.ref||h.finalize(),ft===0&&(++ft,Ue(function(){--ft==0&&De()},[]))}function ne(s,o){if(s._state!==null){var l=s._state?o.onFulfilled:o.onRejected;if(l===null)return(s._state?o.resolve:o.reject)(s._value);++o.psd.ref,++ft,Ue(Ae,[l,s,o])}else s._listeners.push(o)}function Ae(s,o,l){try{var u,h=o._value;!o._state&&Be.length&&(Be=[]),u=Re&&o._consoleTask?o._consoleTask.run(function(){return s(h)}):s(h),o._state||Be.indexOf(h)!==-1||(function(p){for(var b=nt.length;b;)if(nt[--b]._value===p._value)return nt.splice(b,1)})(o),l.resolve(u)}catch(p){l.reject(p)}finally{--ft==0&&De(),--l.psd.ref||l.psd.finalize()}}function fe(){Cn(Qe,function(){Oe()&&He()})}function Oe(){var s=gt;return ut=gt=!1,s}function He(){var s,o,l;do for(;0<rt.length;)for(s=rt,rt=[],l=s.length,o=0;o<l;++o){var u=s[o];u[0].apply(null,u[1])}while(0<rt.length);ut=gt=!0}function De(){var s=nt;nt=[],s.forEach(function(u){u._PSD.onunhandled.call(null,u._value,u)});for(var o=$t.slice(0),l=o.length;l;)o[--l]()}function qt(s){return new Q(vt,!1,s)}function Me(s,o){var l=G;return function(){var u=Oe(),h=G;try{return bn(l,!0),s.apply(this,arguments)}catch(p){o&&o(p)}finally{bn(h,!1),u&&He()}}}I(Q.prototype,{then:Gt,_then:function(s,o){ne(this,new sn(null,null,s,o,G))},catch:function(s){if(arguments.length===1)return this.then(null,s);var o=s,l=arguments[1];return typeof o=="function"?this.then(null,function(u){return(u instanceof o?l:qt)(u)}):this.then(null,function(u){return(u&&u.name===o?l:qt)(u)})},finally:function(s){return this.then(function(o){return Q.resolve(s()).then(function(){return o})},function(o){return Q.resolve(s()).then(function(){return qt(o)})})},timeout:function(s,o){var l=this;return s<1/0?new Q(function(u,h){var p=setTimeout(function(){return h(new ee.Timeout(o))},s);l.then(u,h).finally(clearTimeout.bind(null,p))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&z(Q.prototype,Symbol.toStringTag,"Dexie.Promise"),Qe.env=Es(),I(Q,{all:function(){var s=Ve.apply(null,arguments).map(_r);return new Q(function(o,l){s.length===0&&o([]);var u=s.length;s.forEach(function(h,p){return Q.resolve(h).then(function(b){s[p]=b,--u||o(s)},l)})})},resolve:function(s){return s instanceof Q?s:s&&typeof s.then=="function"?new Q(function(o,l){s.then(o,l)}):new Q(vt,!0,s)},reject:qt,race:function(){var s=Ve.apply(null,arguments).map(_r);return new Q(function(o,l){s.map(function(u){return Q.resolve(u).then(o,l)})})},PSD:{get:function(){return G},set:function(s){return G=s}},totalEchoes:{get:function(){return Sr}},newPSD:mn,usePSD:Cn,scheduler:{get:function(){return Ue},set:function(s){Ue=s}},rejectionMapper:{get:function(){return ue},set:function(s){ue=s}},follow:function(s,o){return new Q(function(l,u){return mn(function(h,p){var b=G;b.unhandleds=[],b.onunhandled=p,b.finalize=le(function(){var v,E=this;v=function(){E.unhandleds.length===0?h():p(E.unhandleds[0])},$t.push(function _(){v(),$t.splice($t.indexOf(_),1)}),++ft,Ue(function(){--ft==0&&De()},[])},b.finalize),s()},o,l,u)})}}),ke&&(ke.allSettled&&z(Q,"allSettled",function(){var s=Ve.apply(null,arguments).map(_r);return new Q(function(o){s.length===0&&o([]);var l=s.length,u=new Array(l);s.forEach(function(h,p){return Q.resolve(h).then(function(b){return u[p]={status:"fulfilled",value:b}},function(b){return u[p]={status:"rejected",reason:b}}).then(function(){return--l||o(u)})})})}),ke.any&&typeof AggregateError<"u"&&z(Q,"any",function(){var s=Ve.apply(null,arguments).map(_r);return new Q(function(o,l){s.length===0&&l(new AggregateError([]));var u=s.length,h=new Array(u);s.forEach(function(p,b){return Q.resolve(p).then(function(v){return o(v)},function(v){h[b]=v,--u||l(new AggregateError(h))})})})}),ke.withResolvers&&(Q.withResolvers=ke.withResolvers));var pt={awaits:0,echoes:0,id:0},el=0,Cr=[],Er=0,Sr=0,tl=0;function mn(s,o,l,u){var h=G,p=Object.create(h);return p.parent=h,p.ref=0,p.global=!1,p.id=++tl,Qe.env,p.env=_t?{Promise:Q,PromiseProp:{value:Q,configurable:!0,writable:!0},all:Q.all,race:Q.race,allSettled:Q.allSettled,any:Q.any,resolve:Q.resolve,reject:Q.reject}:{},o&&f(p,o),++h.ref,p.finalize=function(){--this.parent.ref||this.parent.finalize()},u=Cn(p,s,l,u),p.ref===0&&p.finalize(),u}function Nn(){return pt.id||(pt.id=++el),++pt.awaits,pt.echoes+=tt,pt.id}function gn(){return!!pt.awaits&&(--pt.awaits==0&&(pt.id=0),pt.echoes=pt.awaits*tt,!0)}function _r(s){return pt.echoes&&s&&s.constructor===ke?(Nn(),s.then(function(o){return gn(),o},function(o){return gn(),it(o)})):s}function nl(){var s=Cr[Cr.length-1];Cr.pop(),bn(s,!1)}function bn(s,o){var l,u=G;(o?!pt.echoes||Er++&&s===G:!Er||--Er&&s===G)||queueMicrotask(o?function(h){++Sr,pt.echoes&&--pt.echoes!=0||(pt.echoes=pt.awaits=pt.id=0),Cr.push(G),bn(h,!0)}.bind(null,s):nl),s!==G&&(G=s,u===Qe&&(Qe.env=Es()),_t&&(l=Qe.env.Promise,o=s.env,(u.global||s.global)&&(Object.defineProperty(a,"Promise",o.PromiseProp),l.all=o.all,l.race=o.race,l.resolve=o.resolve,l.reject=o.reject,o.allSettled&&(l.allSettled=o.allSettled),o.any&&(l.any=o.any))))}function Es(){var s=a.Promise;return _t?{Promise:s,PromiseProp:Object.getOwnPropertyDescriptor(a,"Promise"),all:s.all,race:s.race,allSettled:s.allSettled,any:s.any,resolve:s.resolve,reject:s.reject}:{}}function Cn(s,o,l,u,h){var p=G;try{return bn(s,!0),o(l,u,h)}finally{bn(p,!1)}}function Ss(s,o,l,u){return typeof s!="function"?s:function(){var h=G;l&&Nn(),bn(o,!0);try{return s.apply(this,arguments)}finally{bn(h,!1),u&&queueMicrotask(gn)}}}function bi(s){Promise===ke&&pt.echoes===0?Er===0?s():enqueueNativeMicroTask(s):setTimeout(s,0)}(""+Ft).indexOf("[native code]")===-1&&(Nn=gn=de);var it=Q.reject,En="￿",on="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",_s="String expected.",qn=[],Ar="__dbnames",yi="readonly",wi="readwrite";function Sn(s,o){return s?o?function(){return s.apply(this,arguments)&&o.apply(this,arguments)}:s:o}var As={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Pr(s){return typeof s!="string"||/\./.test(s)?function(o){return o}:function(o){return o[s]===void 0&&s in o&&delete(o=P(o))[s],o}}function Ps(){throw ee.Type()}function Se(s,o){try{var l=Ts(s),u=Ts(o);if(l!==u)return l==="Array"?1:u==="Array"?-1:l==="binary"?1:u==="binary"?-1:l==="string"?1:u==="string"?-1:l==="Date"?1:u!=="Date"?NaN:-1;switch(l){case"number":case"Date":case"string":return o<s?1:s<o?-1:0;case"binary":return(function(h,p){for(var b=h.length,v=p.length,E=b<v?b:v,_=0;_<E;++_)if(h[_]!==p[_])return h[_]<p[_]?-1:1;return b===v?0:b<v?-1:1})(Ds(s),Ds(o));case"Array":return(function(h,p){for(var b=h.length,v=p.length,E=b<v?b:v,_=0;_<E;++_){var D=Se(h[_],p[_]);if(D!==0)return D}return b===v?0:b<v?-1:1})(s,o)}}catch{}return NaN}function Ts(s){var o=typeof s;return o!="object"?o:ArrayBuffer.isView(s)?"binary":(s=C(s),s==="ArrayBuffer"?"binary":s)}function Ds(s){return s instanceof Uint8Array?s:ArrayBuffer.isView(s)?new Uint8Array(s.buffer,s.byteOffset,s.byteLength):new Uint8Array(s)}var Is=(We.prototype._trans=function(s,o,l){var u=this._tx||G.trans,h=this.name,p=Re&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(s==="readonly"?"read":"write"," ").concat(this.name));function b(_,D,$){if(!$.schema[h])throw new ee.NotFound("Table "+h+" not part of transaction");return o($.idbtrans,$)}var v=Oe();try{var E=u&&u.db._novip===this.db._novip?u===G.trans?u._promise(s,b,l):mn(function(){return u._promise(s,b,l)},{trans:u,transless:G.transless||G}):(function _(D,$,j,S){if(D.idbdb&&(D._state.openComplete||G.letThrough||D._vip)){var T=D._createTransaction($,j,D._dbSchema);try{T.create(),D._state.PR1398_maxLoop=3}catch(R){return R.name===Ye.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return _(D,$,j,S)})):it(R)}return T._promise($,function(R,A){return mn(function(){return G.trans=T,S(R,A,T)})}).then(function(R){if($==="readwrite")try{T.idbtrans.commit()}catch{}return $==="readonly"?R:T._completion.then(function(){return R})})}if(D._state.openComplete)return it(new ee.DatabaseClosed(D._state.dbOpenError));if(!D._state.isBeingOpened){if(!D._state.autoOpen)return it(new ee.DatabaseClosed);D.open().catch(de)}return D._state.dbReadyPromise.then(function(){return _(D,$,j,S)})})(this.db,s,[this.name],b);return p&&(E._consoleTask=p,E=E.catch(function(_){return console.trace(_),it(_)})),E}finally{v&&He()}},We.prototype.get=function(s,o){var l=this;return s&&s.constructor===Object?this.where(s).first(o):s==null?it(new ee.Type("Invalid argument to Table.get()")):this._trans("readonly",function(u){return l.core.get({trans:u,key:s}).then(function(h){return l.hook.reading.fire(h)})}).then(o)},We.prototype.where=function(s){if(typeof s=="string")return new this.db.WhereClause(this,s);if(d(s))return new this.db.WhereClause(this,"[".concat(s.join("+"),"]"));var o=c(s);if(o.length===1)return this.where(o[0]).equals(s[o[0]]);var l=this.schema.indexes.concat(this.schema.primKey).filter(function(v){if(v.compound&&o.every(function(_){return 0<=v.keyPath.indexOf(_)})){for(var E=0;E<o.length;++E)if(o.indexOf(v.keyPath[E])===-1)return!1;return!0}return!1}).sort(function(v,E){return v.keyPath.length-E.keyPath.length})[0];if(l&&this.db._maxKey!==En){var p=l.keyPath.slice(0,o.length);return this.where(p).equals(p.map(function(E){return s[E]}))}!l&&Re&&console.warn("The query ".concat(JSON.stringify(s)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(o.join("+"),"]"));var u=this.schema.idxByName;function h(v,E){return Se(v,E)===0}var b=o.reduce(function($,E){var _=$[0],D=$[1],$=u[E],j=s[E];return[_||$,_||!$?Sn(D,$&&$.multi?function(S){return S=we(S,E),d(S)&&S.some(function(T){return h(j,T)})}:function(S){return h(j,we(S,E))}):D]},[null,null]),p=b[0],b=b[1];return p?this.where(p.name).equals(s[p.keyPath]).filter(b):l?this.filter(b):this.where(o).equals("")},We.prototype.filter=function(s){return this.toCollection().and(s)},We.prototype.count=function(s){return this.toCollection().count(s)},We.prototype.offset=function(s){return this.toCollection().offset(s)},We.prototype.limit=function(s){return this.toCollection().limit(s)},We.prototype.each=function(s){return this.toCollection().each(s)},We.prototype.toArray=function(s){return this.toCollection().toArray(s)},We.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},We.prototype.orderBy=function(s){return new this.db.Collection(new this.db.WhereClause(this,d(s)?"[".concat(s.join("+"),"]"):s))},We.prototype.reverse=function(){return this.toCollection().reverse()},We.prototype.mapToClass=function(s){var o,l=this.db,u=this.name;function h(){return o!==null&&o.apply(this,arguments)||this}(this.schema.mappedClass=s).prototype instanceof Ps&&((function(E,_){if(typeof _!="function"&&_!==null)throw new TypeError("Class extends value "+String(_)+" is not a constructor or null");function D(){this.constructor=E}r(E,_),E.prototype=_===null?Object.create(_):(D.prototype=_.prototype,new D)})(h,o=s),Object.defineProperty(h.prototype,"db",{get:function(){return l},enumerable:!1,configurable:!0}),h.prototype.table=function(){return u},s=h);for(var p=new Set,b=s.prototype;b;b=y(b))Object.getOwnPropertyNames(b).forEach(function(E){return p.add(E)});function v(E){if(!E)return E;var _,D=Object.create(s.prototype);for(_ in E)if(!p.has(_))try{D[_]=E[_]}catch{}return D}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=v,this.hook("reading",v),s},We.prototype.defineClass=function(){return this.mapToClass(function(s){f(this,s)})},We.prototype.add=function(s,o){var l=this,u=this.schema.primKey,h=u.auto,p=u.keyPath,b=s;return p&&h&&(b=Pr(p)(s)),this._trans("readwrite",function(v){return l.core.mutate({trans:v,type:"add",keys:o!=null?[o]:null,values:[b]})}).then(function(v){return v.numFailures?Q.reject(v.failures[0]):v.lastResult}).then(function(v){if(p)try{Pe(s,p,v)}catch{}return v})},We.prototype.update=function(s,o){return typeof s!="object"||d(s)?this.where(":id").equals(s).modify(o):(s=we(s,this.schema.primKey.keyPath),s===void 0?it(new ee.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(s).modify(o))},We.prototype.put=function(s,o){var l=this,u=this.schema.primKey,h=u.auto,p=u.keyPath,b=s;return p&&h&&(b=Pr(p)(s)),this._trans("readwrite",function(v){return l.core.mutate({trans:v,type:"put",values:[b],keys:o!=null?[o]:null})}).then(function(v){return v.numFailures?Q.reject(v.failures[0]):v.lastResult}).then(function(v){if(p)try{Pe(s,p,v)}catch{}return v})},We.prototype.delete=function(s){var o=this;return this._trans("readwrite",function(l){return o.core.mutate({trans:l,type:"delete",keys:[s]})}).then(function(l){return l.numFailures?Q.reject(l.failures[0]):void 0})},We.prototype.clear=function(){var s=this;return this._trans("readwrite",function(o){return s.core.mutate({trans:o,type:"deleteRange",range:As})}).then(function(o){return o.numFailures?Q.reject(o.failures[0]):void 0})},We.prototype.bulkGet=function(s){var o=this;return this._trans("readonly",function(l){return o.core.getMany({keys:s,trans:l}).then(function(u){return u.map(function(h){return o.hook.reading.fire(h)})})})},We.prototype.bulkAdd=function(s,o,l){var u=this,h=Array.isArray(o)?o:void 0,p=(l=l||(h?void 0:o))?l.allKeys:void 0;return this._trans("readwrite",function(b){var _=u.schema.primKey,v=_.auto,_=_.keyPath;if(_&&h)throw new ee.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(h&&h.length!==s.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var E=s.length,_=_&&v?s.map(Pr(_)):s;return u.core.mutate({trans:b,type:"add",keys:h,values:_,wantResults:p}).then(function(T){var $=T.numFailures,j=T.results,S=T.lastResult,T=T.failures;if($===0)return p?j:S;throw new Te("".concat(u.name,".bulkAdd(): ").concat($," of ").concat(E," operations failed"),T)})})},We.prototype.bulkPut=function(s,o,l){var u=this,h=Array.isArray(o)?o:void 0,p=(l=l||(h?void 0:o))?l.allKeys:void 0;return this._trans("readwrite",function(b){var _=u.schema.primKey,v=_.auto,_=_.keyPath;if(_&&h)throw new ee.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(h&&h.length!==s.length)throw new ee.InvalidArgument("Arguments objects and keys must have the same length");var E=s.length,_=_&&v?s.map(Pr(_)):s;return u.core.mutate({trans:b,type:"put",keys:h,values:_,wantResults:p}).then(function(T){var $=T.numFailures,j=T.results,S=T.lastResult,T=T.failures;if($===0)return p?j:S;throw new Te("".concat(u.name,".bulkPut(): ").concat($," of ").concat(E," operations failed"),T)})})},We.prototype.bulkUpdate=function(s){var o=this,l=this.core,u=s.map(function(b){return b.key}),h=s.map(function(b){return b.changes}),p=[];return this._trans("readwrite",function(b){return l.getMany({trans:b,keys:u,cache:"clone"}).then(function(v){var E=[],_=[];s.forEach(function($,j){var S=$.key,T=$.changes,R=v[j];if(R){for(var A=0,F=Object.keys(T);A<F.length;A++){var L=F[A],B=T[L];if(L===o.schema.primKey.keyPath){if(Se(B,S)!==0)throw new ee.Constraint("Cannot update primary key in bulkUpdate()")}else Pe(R,L,B)}p.push(j),E.push(S),_.push(R)}});var D=E.length;return l.mutate({trans:b,type:"put",keys:E,values:_,updates:{keys:u,changeSpecs:h}}).then(function($){var j=$.numFailures,S=$.failures;if(j===0)return D;for(var T=0,R=Object.keys(S);T<R.length;T++){var A,F=R[T],L=p[Number(F)];L!=null&&(A=S[F],delete S[F],S[L]=A)}throw new Te("".concat(o.name,".bulkUpdate(): ").concat(j," of ").concat(D," operations failed"),S)})})})},We.prototype.bulkDelete=function(s){var o=this,l=s.length;return this._trans("readwrite",function(u){return o.core.mutate({trans:u,type:"delete",keys:s})}).then(function(b){var h=b.numFailures,p=b.lastResult,b=b.failures;if(h===0)return p;throw new Te("".concat(o.name,".bulkDelete(): ").concat(h," of ").concat(l," operations failed"),b)})},We);function We(){}function nr(s){function o(b,v){if(v){for(var E=arguments.length,_=new Array(E-1);--E;)_[E-1]=arguments[E];return l[b].subscribe.apply(null,_),s}if(typeof b=="string")return l[b]}var l={};o.addEventType=p;for(var u=1,h=arguments.length;u<h;++u)p(arguments[u]);return o;function p(b,v,E){if(typeof b!="object"){var _;v=v||Je;var D={subscribers:[],fire:E=E||de,subscribe:function($){D.subscribers.indexOf($)===-1&&(D.subscribers.push($),D.fire=v(D.fire,$))},unsubscribe:function($){D.subscribers=D.subscribers.filter(function(j){return j!==$}),D.fire=D.subscribers.reduce(v,E)}};return l[b]=o[b]=D}c(_=b).forEach(function($){var j=_[$];if(d(j))p($,_[$][0],_[$][1]);else{if(j!=="asap")throw new ee.InvalidArgument("Invalid event config");var S=p($,be,function(){for(var T=arguments.length,R=new Array(T);T--;)R[T]=arguments[T];S.subscribers.forEach(function(A){oe(function(){A.apply(null,R)})})})}})}}function rr(s,o){return H(o).from({prototype:s}),o}function Un(s,o){return!(s.filter||s.algorithm||s.or)&&(o?s.justLimit:!s.replayFilter)}function vi(s,o){s.filter=Sn(s.filter,o)}function xi(s,o,l){var u=s.replayFilter;s.replayFilter=u?function(){return Sn(u(),o())}:o,s.justLimit=l&&!u}function Tr(s,o){if(s.isPrimKey)return o.primaryKey;var l=o.getIndexByKeyPath(s.index);if(!l)throw new ee.Schema("KeyPath "+s.index+" on object store "+o.name+" is not indexed");return l}function Rs(s,o,l){var u=Tr(s,o.schema);return o.openCursor({trans:l,values:!s.keysOnly,reverse:s.dir==="prev",unique:!!s.unique,query:{index:u,range:s.range}})}function Dr(s,o,l,u){var h=s.replayFilter?Sn(s.filter,s.replayFilter()):s.filter;if(s.or){var p={},b=function(v,E,_){var D,$;h&&!h(E,_,function(j){return E.stop(j)},function(j){return E.fail(j)})||(($=""+(D=E.primaryKey))=="[object ArrayBuffer]"&&($=""+new Uint8Array(D)),x(p,$)||(p[$]=!0,o(v,E,_)))};return Promise.all([s.or._iterate(b,l),js(Rs(s,u,l),s.algorithm,b,!s.keysOnly&&s.valueMapper)])}return js(Rs(s,u,l),Sn(s.algorithm,h),o,!s.keysOnly&&s.valueMapper)}function js(s,o,l,u){var h=Me(u?function(p,b,v){return l(u(p),b,v)}:l);return s.then(function(p){if(p)return p.start(function(){var b=function(){return p.continue()};o&&!o(p,function(v){return b=v},function(v){p.stop(v),b=de},function(v){p.fail(v),b=de})||h(p.value,p,function(v){return b=v}),b()})})}var an=Symbol(),ir=(Os.prototype.execute=function(s){if(this.add!==void 0){var o=this.add;if(d(o))return n(n([],d(s)?s:[],!0),o).sort();if(typeof o=="number")return(Number(s)||0)+o;if(typeof o=="bigint")try{return BigInt(s)+o}catch{return BigInt(0)+o}throw new TypeError("Invalid term ".concat(o))}if(this.remove!==void 0){var l=this.remove;if(d(l))return d(s)?s.filter(function(u){return!l.includes(u)}).sort():[];if(typeof l=="number")return Number(s)-l;if(typeof l=="bigint")try{return BigInt(s)-l}catch{return BigInt(0)-l}throw new TypeError("Invalid subtrahend ".concat(l))}return o=(o=this.replacePrefix)===null||o===void 0?void 0:o[0],o&&typeof s=="string"&&s.startsWith(o)?this.replacePrefix[1]+s.substring(o.length):s},Os);function Os(s){Object.assign(this,s)}var rl=(Ie.prototype._read=function(s,o){var l=this._ctx;return l.error?l.table._trans(null,it.bind(null,l.error)):l.table._trans("readonly",s).then(o)},Ie.prototype._write=function(s){var o=this._ctx;return o.error?o.table._trans(null,it.bind(null,o.error)):o.table._trans("readwrite",s,"locked")},Ie.prototype._addAlgorithm=function(s){var o=this._ctx;o.algorithm=Sn(o.algorithm,s)},Ie.prototype._iterate=function(s,o){return Dr(this._ctx,s,o,this._ctx.table.core)},Ie.prototype.clone=function(s){var o=Object.create(this.constructor.prototype),l=Object.create(this._ctx);return s&&f(l,s),o._ctx=l,o},Ie.prototype.raw=function(){return this._ctx.valueMapper=null,this},Ie.prototype.each=function(s){var o=this._ctx;return this._read(function(l){return Dr(o,s,l,o.table.core)})},Ie.prototype.count=function(s){var o=this;return this._read(function(l){var u=o._ctx,h=u.table.core;if(Un(u,!0))return h.count({trans:l,query:{index:Tr(u,h.schema),range:u.range}}).then(function(b){return Math.min(b,u.limit)});var p=0;return Dr(u,function(){return++p,!1},l,h).then(function(){return p})}).then(s)},Ie.prototype.sortBy=function(s,o){var l=s.split(".").reverse(),u=l[0],h=l.length-1;function p(E,_){return _?p(E[l[_]],_-1):E[u]}var b=this._ctx.dir==="next"?1:-1;function v(E,_){return Se(p(E,h),p(_,h))*b}return this.toArray(function(E){return E.sort(v)}).then(o)},Ie.prototype.toArray=function(s){var o=this;return this._read(function(l){var u=o._ctx;if(u.dir==="next"&&Un(u,!0)&&0<u.limit){var h=u.valueMapper,p=Tr(u,u.table.core.schema);return u.table.core.query({trans:l,limit:u.limit,values:!0,query:{index:p,range:u.range}}).then(function(v){return v=v.result,h?v.map(h):v})}var b=[];return Dr(u,function(v){return b.push(v)},l,u.table.core).then(function(){return b})},s)},Ie.prototype.offset=function(s){var o=this._ctx;return s<=0||(o.offset+=s,Un(o)?xi(o,function(){var l=s;return function(u,h){return l===0||(l===1?--l:h(function(){u.advance(l),l=0}),!1)}}):xi(o,function(){var l=s;return function(){return--l<0}})),this},Ie.prototype.limit=function(s){return this._ctx.limit=Math.min(this._ctx.limit,s),xi(this._ctx,function(){var o=s;return function(l,u,h){return--o<=0&&u(h),0<=o}},!0),this},Ie.prototype.until=function(s,o){return vi(this._ctx,function(l,u,h){return!s(l.value)||(u(h),o)}),this},Ie.prototype.first=function(s){return this.limit(1).toArray(function(o){return o[0]}).then(s)},Ie.prototype.last=function(s){return this.reverse().first(s)},Ie.prototype.filter=function(s){var o;return vi(this._ctx,function(l){return s(l.value)}),(o=this._ctx).isMatch=Sn(o.isMatch,s),this},Ie.prototype.and=function(s){return this.filter(s)},Ie.prototype.or=function(s){return new this.db.WhereClause(this._ctx.table,s,this)},Ie.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Ie.prototype.desc=function(){return this.reverse()},Ie.prototype.eachKey=function(s){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(l,u){s(u.key,u)})},Ie.prototype.eachUniqueKey=function(s){return this._ctx.unique="unique",this.eachKey(s)},Ie.prototype.eachPrimaryKey=function(s){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(l,u){s(u.primaryKey,u)})},Ie.prototype.keys=function(s){var o=this._ctx;o.keysOnly=!o.isMatch;var l=[];return this.each(function(u,h){l.push(h.key)}).then(function(){return l}).then(s)},Ie.prototype.primaryKeys=function(s){var o=this._ctx;if(o.dir==="next"&&Un(o,!0)&&0<o.limit)return this._read(function(u){var h=Tr(o,o.table.core.schema);return o.table.core.query({trans:u,values:!1,limit:o.limit,query:{index:h,range:o.range}})}).then(function(u){return u.result}).then(s);o.keysOnly=!o.isMatch;var l=[];return this.each(function(u,h){l.push(h.primaryKey)}).then(function(){return l}).then(s)},Ie.prototype.uniqueKeys=function(s){return this._ctx.unique="unique",this.keys(s)},Ie.prototype.firstKey=function(s){return this.limit(1).keys(function(o){return o[0]}).then(s)},Ie.prototype.lastKey=function(s){return this.reverse().firstKey(s)},Ie.prototype.distinct=function(){var s=this._ctx,s=s.index&&s.table.schema.idxByName[s.index];if(!s||!s.multi)return this;var o={};return vi(this._ctx,function(h){var u=h.primaryKey.toString(),h=x(o,u);return o[u]=!0,!h}),this},Ie.prototype.modify=function(s){var o=this,l=this._ctx;return this._write(function(u){var h,p,b;b=typeof s=="function"?s:(h=c(s),p=h.length,function(A){for(var F=!1,L=0;L<p;++L){var B=h[L],N=s[B],W=we(A,B);N instanceof ir?(Pe(A,B,N.execute(W)),F=!0):W!==N&&(Pe(A,B,N),F=!0)}return F});var v=l.table.core,$=v.schema.primaryKey,E=$.outbound,_=$.extractKey,D=200,$=o.db._options.modifyChunkSize;$&&(D=typeof $=="object"?$[v.name]||$["*"]||200:$);function j(A,B){var L=B.failures,B=B.numFailures;T+=A-B;for(var N=0,W=c(L);N<W.length;N++){var Z=W[N];S.push(L[Z])}}var S=[],T=0,R=[];return o.clone().primaryKeys().then(function(A){function F(B){var N=Math.min(D,A.length-B);return v.getMany({trans:u,keys:A.slice(B,B+N),cache:"immutable"}).then(function(W){for(var Z=[],K=[],X=E?[]:null,te=[],J=0;J<N;++J){var re=W[J],me={value:P(re),primKey:A[B+J]};b.call(me,me.value,me)!==!1&&(me.value==null?te.push(A[B+J]):E||Se(_(re),_(me.value))===0?(K.push(me.value),E&&X.push(A[B+J])):(te.push(A[B+J]),Z.push(me.value)))}return Promise.resolve(0<Z.length&&v.mutate({trans:u,type:"add",values:Z}).then(function(ve){for(var xe in ve.failures)te.splice(parseInt(xe),1);j(Z.length,ve)})).then(function(){return(0<K.length||L&&typeof s=="object")&&v.mutate({trans:u,type:"put",keys:X,values:K,criteria:L,changeSpec:typeof s!="function"&&s,isAdditionalChunk:0<B}).then(function(ve){return j(K.length,ve)})}).then(function(){return(0<te.length||L&&s===$i)&&v.mutate({trans:u,type:"delete",keys:te,criteria:L,isAdditionalChunk:0<B}).then(function(ve){return j(te.length,ve)})}).then(function(){return A.length>B+N&&F(B+D)})})}var L=Un(l)&&l.limit===1/0&&(typeof s!="function"||s===$i)&&{index:l.index,range:l.range};return F(0).then(function(){if(0<S.length)throw new $e("Error modifying one or more objects",S,T,R);return A.length})})})},Ie.prototype.delete=function(){var s=this._ctx,o=s.range;return Un(s)&&(s.isPrimKey||o.type===3)?this._write(function(l){var u=s.table.core.schema.primaryKey,h=o;return s.table.core.count({trans:l,query:{index:u,range:h}}).then(function(p){return s.table.core.mutate({trans:l,type:"deleteRange",range:h}).then(function(b){var v=b.failures;if(b.lastResult,b.results,b=b.numFailures,b)throw new $e("Could not delete some values",Object.keys(v).map(function(E){return v[E]}),p-b);return p-b})})}):this.modify($i)},Ie);function Ie(){}var $i=function(s,o){return o.value=null};function il(s,o){return s<o?-1:s===o?0:1}function sl(s,o){return o<s?-1:s===o?0:1}function At(s,o,l){return s=s instanceof zs?new s.Collection(s):s,s._ctx.error=new(l||TypeError)(o),s}function Hn(s){return new s.Collection(s,function(){return Fs("")}).limit(0)}function Ir(s,o,l,u){var h,p,b,v,E,_,D,$=l.length;if(!l.every(function(T){return typeof T=="string"}))return At(s,_s);function j(T){h=T==="next"?function(A){return A.toUpperCase()}:function(A){return A.toLowerCase()},p=T==="next"?function(A){return A.toLowerCase()}:function(A){return A.toUpperCase()},b=T==="next"?il:sl;var R=l.map(function(A){return{lower:p(A),upper:h(A)}}).sort(function(A,F){return b(A.lower,F.lower)});v=R.map(function(A){return A.upper}),E=R.map(function(A){return A.lower}),D=(_=T)==="next"?"":u}j("next"),s=new s.Collection(s,function(){return yn(v[0],E[$-1]+u)}),s._ondirectionchange=function(T){j(T)};var S=0;return s._addAlgorithm(function(T,R,A){var F=T.key;if(typeof F!="string")return!1;var L=p(F);if(o(L,E,S))return!0;for(var B=null,N=S;N<$;++N){var W=(function(Z,K,X,te,J,re){for(var me=Math.min(Z.length,te.length),ve=-1,xe=0;xe<me;++xe){var Pt=K[xe];if(Pt!==te[xe])return J(Z[xe],X[xe])<0?Z.substr(0,xe)+X[xe]+X.substr(xe+1):J(Z[xe],te[xe])<0?Z.substr(0,xe)+te[xe]+X.substr(xe+1):0<=ve?Z.substr(0,ve)+K[ve]+X.substr(ve+1):null;J(Z[xe],Pt)<0&&(ve=xe)}return me<te.length&&re==="next"?Z+X.substr(Z.length):me<Z.length&&re==="prev"?Z.substr(0,X.length):ve<0?null:Z.substr(0,ve)+te[ve]+X.substr(ve+1)})(F,L,v[N],E[N],b,_);W===null&&B===null?S=N+1:(B===null||0<b(B,W))&&(B=W)}return R(B!==null?function(){T.continue(B+D)}:A),!1}),s}function yn(s,o,l,u){return{type:2,lower:s,upper:o,lowerOpen:l,upperOpen:u}}function Fs(s){return{type:1,lower:s,upper:s}}var zs=(Object.defineProperty(mt.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),mt.prototype.between=function(s,o,l,u){l=l!==!1,u=u===!0;try{return 0<this._cmp(s,o)||this._cmp(s,o)===0&&(l||u)&&(!l||!u)?Hn(this):new this.Collection(this,function(){return yn(s,o,!l,!u)})}catch{return At(this,on)}},mt.prototype.equals=function(s){return s==null?At(this,on):new this.Collection(this,function(){return Fs(s)})},mt.prototype.above=function(s){return s==null?At(this,on):new this.Collection(this,function(){return yn(s,void 0,!0)})},mt.prototype.aboveOrEqual=function(s){return s==null?At(this,on):new this.Collection(this,function(){return yn(s,void 0,!1)})},mt.prototype.below=function(s){return s==null?At(this,on):new this.Collection(this,function(){return yn(void 0,s,!1,!0)})},mt.prototype.belowOrEqual=function(s){return s==null?At(this,on):new this.Collection(this,function(){return yn(void 0,s)})},mt.prototype.startsWith=function(s){return typeof s!="string"?At(this,_s):this.between(s,s+En,!0,!0)},mt.prototype.startsWithIgnoreCase=function(s){return s===""?this.startsWith(s):Ir(this,function(o,l){return o.indexOf(l[0])===0},[s],En)},mt.prototype.equalsIgnoreCase=function(s){return Ir(this,function(o,l){return o===l[0]},[s],"")},mt.prototype.anyOfIgnoreCase=function(){var s=Ve.apply(Y,arguments);return s.length===0?Hn(this):Ir(this,function(o,l){return l.indexOf(o)!==-1},s,"")},mt.prototype.startsWithAnyOfIgnoreCase=function(){var s=Ve.apply(Y,arguments);return s.length===0?Hn(this):Ir(this,function(o,l){return l.some(function(u){return o.indexOf(u)===0})},s,En)},mt.prototype.anyOf=function(){var s=this,o=Ve.apply(Y,arguments),l=this._cmp;try{o.sort(l)}catch{return At(this,on)}if(o.length===0)return Hn(this);var u=new this.Collection(this,function(){return yn(o[0],o[o.length-1])});u._ondirectionchange=function(p){l=p==="next"?s._ascending:s._descending,o.sort(l)};var h=0;return u._addAlgorithm(function(p,b,v){for(var E=p.key;0<l(E,o[h]);)if(++h===o.length)return b(v),!1;return l(E,o[h])===0||(b(function(){p.continue(o[h])}),!1)}),u},mt.prototype.notEqual=function(s){return this.inAnyRange([[-1/0,s],[s,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},mt.prototype.noneOf=function(){var s=Ve.apply(Y,arguments);if(s.length===0)return new this.Collection(this);try{s.sort(this._ascending)}catch{return At(this,on)}var o=s.reduce(function(l,u){return l?l.concat([[l[l.length-1][1],u]]):[[-1/0,u]]},null);return o.push([s[s.length-1],this.db._maxKey]),this.inAnyRange(o,{includeLowers:!1,includeUppers:!1})},mt.prototype.inAnyRange=function(F,o){var l=this,u=this._cmp,h=this._ascending,p=this._descending,b=this._min,v=this._max;if(F.length===0)return Hn(this);if(!F.every(function(L){return L[0]!==void 0&&L[1]!==void 0&&h(L[0],L[1])<=0}))return At(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ee.InvalidArgument);var E=!o||o.includeLowers!==!1,_=o&&o.includeUppers===!0,D,$=h;function j(L,B){return $(L[0],B[0])}try{(D=F.reduce(function(L,B){for(var N=0,W=L.length;N<W;++N){var Z=L[N];if(u(B[0],Z[1])<0&&0<u(B[1],Z[0])){Z[0]=b(Z[0],B[0]),Z[1]=v(Z[1],B[1]);break}}return N===W&&L.push(B),L},[])).sort(j)}catch{return At(this,on)}var S=0,T=_?function(L){return 0<h(L,D[S][1])}:function(L){return 0<=h(L,D[S][1])},R=E?function(L){return 0<p(L,D[S][0])}:function(L){return 0<=p(L,D[S][0])},A=T,F=new this.Collection(this,function(){return yn(D[0][0],D[D.length-1][1],!E,!_)});return F._ondirectionchange=function(L){$=L==="next"?(A=T,h):(A=R,p),D.sort(j)},F._addAlgorithm(function(L,B,N){for(var W,Z=L.key;A(Z);)if(++S===D.length)return B(N),!1;return!T(W=Z)&&!R(W)||(l._cmp(Z,D[S][1])===0||l._cmp(Z,D[S][0])===0||B(function(){$===h?L.continue(D[S][0]):L.continue(D[S][1])}),!1)}),F},mt.prototype.startsWithAnyOf=function(){var s=Ve.apply(Y,arguments);return s.every(function(o){return typeof o=="string"})?s.length===0?Hn(this):this.inAnyRange(s.map(function(o){return[o,o+En]})):At(this,"startsWithAnyOf() only works with strings")},mt);function mt(){}function Qt(s){return Me(function(o){return sr(o),s(o.target.error),!1})}function sr(s){s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault()}var or="storagemutated",ki="x-storagemutated-1",wn=nr(null,or),ol=(Jt.prototype._lock=function(){return ie(!G.global),++this._reculock,this._reculock!==1||G.global||(G.lockOwnerFor=this),this},Jt.prototype._unlock=function(){if(ie(!G.global),--this._reculock==0)for(G.global||(G.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var s=this._blockedFuncs.shift();try{Cn(s[1],s[0])}catch{}}return this},Jt.prototype._locked=function(){return this._reculock&&G.lockOwnerFor!==this},Jt.prototype.create=function(s){var o=this;if(!this.mode)return this;var l=this.db.idbdb,u=this.db._state.dbOpenError;if(ie(!this.idbtrans),!s&&!l)switch(u&&u.name){case"DatabaseClosedError":throw new ee.DatabaseClosed(u);case"MissingAPIError":throw new ee.MissingAPI(u.message,u);default:throw new ee.OpenFailed(u)}if(!this.active)throw new ee.TransactionInactive;return ie(this._completion._state===null),(s=this.idbtrans=s||(this.db.core||l).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Me(function(h){sr(h),o._reject(s.error)}),s.onabort=Me(function(h){sr(h),o.active&&o._reject(new ee.Abort(s.error)),o.active=!1,o.on("abort").fire(h)}),s.oncomplete=Me(function(){o.active=!1,o._resolve(),"mutatedParts"in s&&wn.storagemutated.fire(s.mutatedParts)}),this},Jt.prototype._promise=function(s,o,l){var u=this;if(s==="readwrite"&&this.mode!=="readwrite")return it(new ee.ReadOnly("Transaction is readonly"));if(!this.active)return it(new ee.TransactionInactive);if(this._locked())return new Q(function(p,b){u._blockedFuncs.push([function(){u._promise(s,o,l).then(p,b)},G])});if(l)return mn(function(){var p=new Q(function(b,v){u._lock();var E=o(b,v,u);E&&E.then&&E.then(b,v)});return p.finally(function(){return u._unlock()}),p._lib=!0,p});var h=new Q(function(p,b){var v=o(p,b,u);v&&v.then&&v.then(p,b)});return h._lib=!0,h},Jt.prototype._root=function(){return this.parent?this.parent._root():this},Jt.prototype.waitFor=function(s){var o,l=this._root(),u=Q.resolve(s);l._waitingFor?l._waitingFor=l._waitingFor.then(function(){return u}):(l._waitingFor=u,l._waitingQueue=[],o=l.idbtrans.objectStore(l.storeNames[0]),(function p(){for(++l._spinCount;l._waitingQueue.length;)l._waitingQueue.shift()();l._waitingFor&&(o.get(-1/0).onsuccess=p)})());var h=l._waitingFor;return new Q(function(p,b){u.then(function(v){return l._waitingQueue.push(Me(p.bind(null,v)))},function(v){return l._waitingQueue.push(Me(b.bind(null,v)))}).finally(function(){l._waitingFor===h&&(l._waitingFor=null)})})},Jt.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ee.Abort))},Jt.prototype.table=function(s){var o=this._memoizedTables||(this._memoizedTables={});if(x(o,s))return o[s];var l=this.schema[s];if(!l)throw new ee.NotFound("Table "+s+" not part of transaction");return l=new this.db.Table(s,l,this),l.core=this.db.core.table(s),o[s]=l},Jt);function Jt(){}function Ci(s,o,l,u,h,p,b){return{name:s,keyPath:o,unique:l,multi:u,auto:h,compound:p,src:(l&&!b?"&":"")+(u?"*":"")+(h?"++":"")+Ls(o)}}function Ls(s){return typeof s=="string"?s:s?"["+[].join.call(s,"+")+"]":""}function Ei(s,o,l){return{name:s,primKey:o,indexes:l,mappedClass:null,idxByName:(u=function(h){return[h.name,h]},l.reduce(function(h,p,b){return b=u(p,b),b&&(h[b[0]]=b[1]),h},{}))};var u}var ar=function(s){try{return s.only([[]]),ar=function(){return[[]]},[[]]}catch{return ar=function(){return En},En}};function Si(s){return s==null?function(){}:typeof s=="string"?(o=s).split(".").length===1?function(l){return l[o]}:function(l){return we(l,o)}:function(l){return we(l,s)};var o}function Bs(s){return[].slice.call(s)}var al=0;function lr(s){return s==null?":id":typeof s=="string"?s:"[".concat(s.join("+"),"]")}function ll(s,o,E){function u(A){if(A.type===3)return null;if(A.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var S=A.lower,T=A.upper,R=A.lowerOpen,A=A.upperOpen;return S===void 0?T===void 0?null:o.upperBound(T,!!A):T===void 0?o.lowerBound(S,!!R):o.bound(S,T,!!R,!!A)}function h(j){var S,T=j.name;return{name:T,schema:j,mutate:function(R){var A=R.trans,F=R.type,L=R.keys,B=R.values,N=R.range;return new Promise(function(W,Z){W=Me(W);var K=A.objectStore(T),X=K.keyPath==null,te=F==="put"||F==="add";if(!te&&F!=="delete"&&F!=="deleteRange")throw new Error("Invalid operation type: "+F);var J,re=(L||B||{length:1}).length;if(L&&B&&L.length!==B.length)throw new Error("Given keys array must have same length as given values array.");if(re===0)return W({numFailures:0,failures:{},results:[],lastResult:void 0});function me(xt){++Pt,sr(xt)}var ve=[],xe=[],Pt=0;if(F==="deleteRange"){if(N.type===4)return W({numFailures:Pt,failures:xe,results:[],lastResult:void 0});N.type===3?ve.push(J=K.clear()):ve.push(J=K.delete(u(N)))}else{var X=te?X?[B,L]:[B,null]:[L,null],pe=X[0],yt=X[1];if(te)for(var wt=0;wt<re;++wt)ve.push(J=yt&&yt[wt]!==void 0?K[F](pe[wt],yt[wt]):K[F](pe[wt])),J.onerror=me;else for(wt=0;wt<re;++wt)ve.push(J=K[F](pe[wt])),J.onerror=me}function Wr(xt){xt=xt.target.result,ve.forEach(function(Pn,Hi){return Pn.error!=null&&(xe[Hi]=Pn.error)}),W({numFailures:Pt,failures:xe,results:F==="delete"?L:ve.map(function(Pn){return Pn.result}),lastResult:xt})}J.onerror=function(xt){me(xt),Wr(xt)},J.onsuccess=Wr})},getMany:function(R){var A=R.trans,F=R.keys;return new Promise(function(L,B){L=Me(L);for(var N,W=A.objectStore(T),Z=F.length,K=new Array(Z),X=0,te=0,J=function(ve){ve=ve.target,K[ve._pos]=ve.result,++te===X&&L(K)},re=Qt(B),me=0;me<Z;++me)F[me]!=null&&((N=W.get(F[me]))._pos=me,N.onsuccess=J,N.onerror=re,++X);X===0&&L(K)})},get:function(R){var A=R.trans,F=R.key;return new Promise(function(L,B){L=Me(L);var N=A.objectStore(T).get(F);N.onsuccess=function(W){return L(W.target.result)},N.onerror=Qt(B)})},query:(S=_,function(R){return new Promise(function(A,F){A=Me(A);var L,B,N,X=R.trans,W=R.values,Z=R.limit,J=R.query,K=Z===1/0?void 0:Z,te=J.index,J=J.range,X=X.objectStore(T),te=te.isPrimaryKey?X:X.index(te.name),J=u(J);if(Z===0)return A({result:[]});S?((K=W?te.getAll(J,K):te.getAllKeys(J,K)).onsuccess=function(re){return A({result:re.target.result})},K.onerror=Qt(F)):(L=0,B=!W&&"openKeyCursor"in te?te.openKeyCursor(J):te.openCursor(J),N=[],B.onsuccess=function(re){var me=B.result;return me?(N.push(W?me.value:me.primaryKey),++L===Z?A({result:N}):void me.continue()):A({result:N})},B.onerror=Qt(F))})}),openCursor:function(R){var A=R.trans,F=R.values,L=R.query,B=R.reverse,N=R.unique;return new Promise(function(W,Z){W=Me(W);var te=L.index,K=L.range,X=A.objectStore(T),X=te.isPrimaryKey?X:X.index(te.name),te=B?N?"prevunique":"prev":N?"nextunique":"next",J=!F&&"openKeyCursor"in X?X.openKeyCursor(u(K),te):X.openCursor(u(K),te);J.onerror=Qt(Z),J.onsuccess=Me(function(re){var me,ve,xe,Pt,pe=J.result;pe?(pe.___id=++al,pe.done=!1,me=pe.continue.bind(pe),ve=(ve=pe.continuePrimaryKey)&&ve.bind(pe),xe=pe.advance.bind(pe),Pt=function(){throw new Error("Cursor not stopped")},pe.trans=A,pe.stop=pe.continue=pe.continuePrimaryKey=pe.advance=function(){throw new Error("Cursor not started")},pe.fail=Me(Z),pe.next=function(){var yt=this,wt=1;return this.start(function(){return wt--?yt.continue():yt.stop()}).then(function(){return yt})},pe.start=function(yt){function wt(){if(J.result)try{yt()}catch(xt){pe.fail(xt)}else pe.done=!0,pe.start=function(){throw new Error("Cursor behind last entry")},pe.stop()}var Wr=new Promise(function(xt,Pn){xt=Me(xt),J.onerror=Qt(Pn),pe.fail=Pn,pe.stop=function(Hi){pe.stop=pe.continue=pe.continuePrimaryKey=pe.advance=Pt,xt(Hi)}});return J.onsuccess=Me(function(xt){J.onsuccess=wt,wt()}),pe.continue=me,pe.continuePrimaryKey=ve,pe.advance=xe,wt(),Wr},W(pe)):W(null)},Z)})},count:function(R){var A=R.query,F=R.trans,L=A.index,B=A.range;return new Promise(function(N,W){var Z=F.objectStore(T),K=L.isPrimaryKey?Z:Z.index(L.name),Z=u(B),K=Z?K.count(Z):K.count();K.onsuccess=Me(function(X){return N(X.target.result)}),K.onerror=Qt(W)})}}}var p,b,v,D=(b=E,v=Bs((p=s).objectStoreNames),{schema:{name:p.name,tables:v.map(function(j){return b.objectStore(j)}).map(function(j){var S=j.keyPath,A=j.autoIncrement,T=d(S),R={},A={name:j.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:S==null,compound:T,keyPath:S,autoIncrement:A,unique:!0,extractKey:Si(S)},indexes:Bs(j.indexNames).map(function(F){return j.index(F)}).map(function(N){var L=N.name,B=N.unique,W=N.multiEntry,N=N.keyPath,W={name:L,compound:d(N),keyPath:N,unique:B,multiEntry:W,extractKey:Si(N)};return R[lr(N)]=W}),getIndexByKeyPath:function(F){return R[lr(F)]}};return R[":id"]=A.primaryKey,S!=null&&(R[lr(S)]=A.primaryKey),A})},hasGetAll:0<v.length&&"getAll"in b.objectStore(v[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),E=D.schema,_=D.hasGetAll,D=E.tables.map(h),$={};return D.forEach(function(j){return $[j.name]=j}),{stack:"dbcore",transaction:s.transaction.bind(s),table:function(j){if(!$[j])throw new Error("Table '".concat(j,"' not found"));return $[j]},MIN_KEY:-1/0,MAX_KEY:ar(o),schema:E}}function cl(s,o,l,u){var h=l.IDBKeyRange;return l.indexedDB,{dbcore:(u=ll(o,h,u),s.dbcore.reduce(function(p,b){return b=b.create,i(i({},p),b(p))},u))}}function Rr(s,u){var l=u.db,u=cl(s._middlewares,l,s._deps,u);s.core=u.dbcore,s.tables.forEach(function(h){var p=h.name;s.core.schema.tables.some(function(b){return b.name===p})&&(h.core=s.core.table(p),s[p]instanceof s.Table&&(s[p].core=h.core))})}function jr(s,o,l,u){l.forEach(function(h){var p=u[h];o.forEach(function(b){var v=(function E(_,D){return se(_,D)||(_=y(_))&&E(_,D)})(b,h);(!v||"value"in v&&v.value===void 0)&&(b===s.Transaction.prototype||b instanceof s.Transaction?z(b,h,{get:function(){return this.table(h)},set:function(E){V(this,h,{value:E,writable:!0,configurable:!0,enumerable:!0})}}):b[h]=new s.Table(h,p))})})}function _i(s,o){o.forEach(function(l){for(var u in l)l[u]instanceof s.Table&&delete l[u]})}function ul(s,o){return s._cfg.version-o._cfg.version}function dl(s,o,l,u){var h=s._dbSchema;l.objectStoreNames.contains("$meta")&&!h.$meta&&(h.$meta=Ei("$meta",Ns("")[0],[]),s._storeNames.push("$meta"));var p=s._createTransaction("readwrite",s._storeNames,h);p.create(l),p._completion.catch(u);var b=p._reject.bind(p),v=G.transless||G;mn(function(){return G.trans=p,G.transless=v,o!==0?(Rr(s,l),_=o,((E=p).storeNames.includes("$meta")?E.table("$meta").get("version").then(function(D){return D??_}):Q.resolve(_)).then(function(D){return j=D,S=p,T=l,R=[],D=($=s)._versions,A=$._dbSchema=Fr(0,$.idbdb,T),(D=D.filter(function(F){return F._cfg.version>=j})).length!==0?(D.forEach(function(F){R.push(function(){var L=A,B=F._cfg.dbschema;zr($,L,T),zr($,B,T),A=$._dbSchema=B;var N=Ai(L,B);N.add.forEach(function(te){Pi(T,te[0],te[1].primKey,te[1].indexes)}),N.change.forEach(function(te){if(te.recreate)throw new ee.Upgrade("Not yet support for changing primary key");var J=T.objectStore(te.name);te.add.forEach(function(re){return Or(J,re)}),te.change.forEach(function(re){J.deleteIndex(re.name),Or(J,re)}),te.del.forEach(function(re){return J.deleteIndex(re)})});var W=F._cfg.contentUpgrade;if(W&&F._cfg.version>j){Rr($,T),S._memoizedTables={};var Z=at(B);N.del.forEach(function(te){Z[te]=L[te]}),_i($,[$.Transaction.prototype]),jr($,[$.Transaction.prototype],c(Z),Z),S.schema=Z;var K,X=lt(W);return X&&Nn(),N=Q.follow(function(){var te;(K=W(S))&&X&&(te=gn.bind(null,null),K.then(te,te))}),K&&typeof K.then=="function"?Q.resolve(K):N.then(function(){return K})}}),R.push(function(L){var B,N,W=F._cfg.dbschema;B=W,N=L,[].slice.call(N.db.objectStoreNames).forEach(function(Z){return B[Z]==null&&N.db.deleteObjectStore(Z)}),_i($,[$.Transaction.prototype]),jr($,[$.Transaction.prototype],$._storeNames,$._dbSchema),S.schema=$._dbSchema}),R.push(function(L){$.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil($.idbdb.version/10)===F._cfg.version?($.idbdb.deleteObjectStore("$meta"),delete $._dbSchema.$meta,$._storeNames=$._storeNames.filter(function(B){return B!=="$meta"})):L.objectStore("$meta").put(F._cfg.version,"version"))})}),(function F(){return R.length?Q.resolve(R.shift()(S.idbtrans)).then(F):Q.resolve()})().then(function(){Ms(A,T)})):Q.resolve();var $,j,S,T,R,A}).catch(b)):(c(h).forEach(function(D){Pi(l,D,h[D].primKey,h[D].indexes)}),Rr(s,l),void Q.follow(function(){return s.on.populate.fire(p)}).catch(b));var E,_})}function hl(s,o){Ms(s._dbSchema,o),o.db.version%10!=0||o.objectStoreNames.contains("$meta")||o.db.createObjectStore("$meta").add(Math.ceil(o.db.version/10-1),"version");var l=Fr(0,s.idbdb,o);zr(s,s._dbSchema,o);for(var u=0,h=Ai(l,s._dbSchema).change;u<h.length;u++){var p=(function(b){if(b.change.length||b.recreate)return console.warn("Unable to patch indexes of table ".concat(b.name," because it has changes on the type of index or primary key.")),{value:void 0};var v=o.objectStore(b.name);b.add.forEach(function(E){Re&&console.debug("Dexie upgrade patch: Creating missing index ".concat(b.name,".").concat(E.src)),Or(v,E)})})(h[u]);if(typeof p=="object")return p.value}}function Ai(s,o){var l,u={del:[],add:[],change:[]};for(l in s)o[l]||u.del.push(l);for(l in o){var h=s[l],p=o[l];if(h){var b={name:l,def:p,recreate:!1,del:[],add:[],change:[]};if(""+(h.primKey.keyPath||"")!=""+(p.primKey.keyPath||"")||h.primKey.auto!==p.primKey.auto)b.recreate=!0,u.change.push(b);else{var v=h.idxByName,E=p.idxByName,_=void 0;for(_ in v)E[_]||b.del.push(_);for(_ in E){var D=v[_],$=E[_];D?D.src!==$.src&&b.change.push($):b.add.push($)}(0<b.del.length||0<b.add.length||0<b.change.length)&&u.change.push(b)}}else u.add.push([l,p])}return u}function Pi(s,o,l,u){var h=s.db.createObjectStore(o,l.keyPath?{keyPath:l.keyPath,autoIncrement:l.auto}:{autoIncrement:l.auto});return u.forEach(function(p){return Or(h,p)}),h}function Ms(s,o){c(s).forEach(function(l){o.db.objectStoreNames.contains(l)||(Re&&console.debug("Dexie: Creating missing table",l),Pi(o,l,s[l].primKey,s[l].indexes))})}function Or(s,o){s.createIndex(o.name,o.keyPath,{unique:o.unique,multiEntry:o.multi})}function Fr(s,o,l){var u={};return Ce(o.objectStoreNames,0).forEach(function(h){for(var p=l.objectStore(h),b=Ci(Ls(_=p.keyPath),_||"",!0,!1,!!p.autoIncrement,_&&typeof _!="string",!0),v=[],E=0;E<p.indexNames.length;++E){var D=p.index(p.indexNames[E]),_=D.keyPath,D=Ci(D.name,_,!!D.unique,!!D.multiEntry,!1,_&&typeof _!="string",!1);v.push(D)}u[h]=Ei(h,b,v)}),u}function zr(s,o,l){for(var u=l.db.objectStoreNames,h=0;h<u.length;++h){var p=u[h],b=l.objectStore(p);s._hasGetAll="getAll"in b;for(var v=0;v<b.indexNames.length;++v){var E=b.indexNames[v],_=b.index(E).keyPath,D=typeof _=="string"?_:"["+Ce(_).join("+")+"]";!o[p]||(_=o[p].idxByName[D])&&(_.name=E,delete o[p].idxByName[D],o[p].idxByName[E]=_)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&a.WorkerGlobalScope&&a instanceof a.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(s._hasGetAll=!1)}function Ns(s){return s.split(",").map(function(o,l){var u=(o=o.trim()).replace(/([&*]|\+\+)/g,""),h=/^\[/.test(u)?u.match(/^\[(.*)\]$/)[1].split("+"):u;return Ci(u,h||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),d(h),l===0)})}var fl=(Lr.prototype._parseStoresSpec=function(s,o){c(s).forEach(function(l){if(s[l]!==null){var u=Ns(s[l]),h=u.shift();if(h.unique=!0,h.multi)throw new ee.Schema("Primary key cannot be multi-valued");u.forEach(function(p){if(p.auto)throw new ee.Schema("Only primary key can be marked as autoIncrement (++)");if(!p.keyPath)throw new ee.Schema("Index must have a name and cannot be an empty string")}),o[l]=Ei(l,h,u)}})},Lr.prototype.stores=function(l){var o=this.db;this._cfg.storesSource=this._cfg.storesSource?f(this._cfg.storesSource,l):l;var l=o._versions,u={},h={};return l.forEach(function(p){f(u,p._cfg.storesSource),h=p._cfg.dbschema={},p._parseStoresSpec(u,h)}),o._dbSchema=h,_i(o,[o._allTables,o,o.Transaction.prototype]),jr(o,[o._allTables,o,o.Transaction.prototype,this._cfg.tables],c(h),h),o._storeNames=c(h),this},Lr.prototype.upgrade=function(s){return this._cfg.contentUpgrade=St(this._cfg.contentUpgrade||de,s),this},Lr);function Lr(){}function Ti(s,o){var l=s._dbNamesDB;return l||(l=s._dbNamesDB=new ln(Ar,{addons:[],indexedDB:s,IDBKeyRange:o})).version(1).stores({dbnames:"name"}),l.table("dbnames")}function Di(s){return s&&typeof s.databases=="function"}function Ii(s){return mn(function(){return G.letThrough=!0,s()})}function Ri(s){return!("from"in s)}var bt=function(s,o){if(!this){var l=new bt;return s&&"d"in s&&f(l,s),l}f(this,arguments.length?{d:1,from:s,to:1<arguments.length?o:s}:{d:0})};function cr(s,o,l){var u=Se(o,l);if(!isNaN(u)){if(0<u)throw RangeError();if(Ri(s))return f(s,{from:o,to:l,d:1});var h=s.l,u=s.r;if(Se(l,s.from)<0)return h?cr(h,o,l):s.l={from:o,to:l,d:1,l:null,r:null},Us(s);if(0<Se(o,s.to))return u?cr(u,o,l):s.r={from:o,to:l,d:1,l:null,r:null},Us(s);Se(o,s.from)<0&&(s.from=o,s.l=null,s.d=u?u.d+1:1),0<Se(l,s.to)&&(s.to=l,s.r=null,s.d=s.l?s.l.d+1:1),l=!s.r,h&&!s.l&&ur(s,h),u&&l&&ur(s,u)}}function ur(s,o){Ri(o)||(function l(u,E){var p=E.from,b=E.to,v=E.l,E=E.r;cr(u,p,b),v&&l(u,v),E&&l(u,E)})(s,o)}function qs(s,o){var l=Br(o),u=l.next();if(u.done)return!1;for(var h=u.value,p=Br(s),b=p.next(h.from),v=b.value;!u.done&&!b.done;){if(Se(v.from,h.to)<=0&&0<=Se(v.to,h.from))return!0;Se(h.from,v.from)<0?h=(u=l.next(v.from)).value:v=(b=p.next(h.from)).value}return!1}function Br(s){var o=Ri(s)?null:{s:0,n:s};return{next:function(l){for(var u=0<arguments.length;o;)switch(o.s){case 0:if(o.s=1,u)for(;o.n.l&&Se(l,o.n.from)<0;)o={up:o,n:o.n.l,s:1};else for(;o.n.l;)o={up:o,n:o.n.l,s:1};case 1:if(o.s=2,!u||Se(l,o.n.to)<=0)return{value:o.n,done:!1};case 2:if(o.n.r){o.s=3,o={up:o,n:o.n.r,s:0};continue}case 3:o=o.up}return{done:!0}}}}function Us(s){var o,l,u=(((o=s.r)===null||o===void 0?void 0:o.d)||0)-(((l=s.l)===null||l===void 0?void 0:l.d)||0),h=1<u?"r":u<-1?"l":"";h&&(o=h=="r"?"l":"r",l=i({},s),u=s[h],s.from=u.from,s.to=u.to,s[h]=u[h],l[h]=u[o],(s[o]=l).d=Hs(l)),s.d=Hs(s)}function Hs(l){var o=l.r,l=l.l;return(o?l?Math.max(o.d,l.d):o.d:l?l.d:0)+1}function Mr(s,o){return c(o).forEach(function(l){s[l]?ur(s[l],o[l]):s[l]=(function u(h){var p,b,v={};for(p in h)x(h,p)&&(b=h[p],v[p]=!b||typeof b!="object"||m.has(b.constructor)?b:u(b));return v})(o[l])}),s}function ji(s,o){return s.all||o.all||Object.keys(s).some(function(l){return o[l]&&qs(o[l],s[l])})}I(bt.prototype,((Ft={add:function(s){return ur(this,s),this},addKey:function(s){return cr(this,s,s),this},addKeys:function(s){var o=this;return s.forEach(function(l){return cr(o,l,l)}),this},hasKey:function(s){var o=Br(this).next(s).value;return o&&Se(o.from,s)<=0&&0<=Se(o.to,s)}})[ae]=function(){return Br(this)},Ft));var _n={},Oi={},Fi=!1;function Nr(s){Mr(Oi,s),Fi||(Fi=!0,setTimeout(function(){Fi=!1,zi(Oi,!(Oi={}))},0))}function zi(s,o){o===void 0&&(o=!1);var l=new Set;if(s.all)for(var u=0,h=Object.values(_n);u<h.length;u++)Ws(b=h[u],s,l,o);else for(var p in s){var b,v=/^idb\:\/\/(.*)\/(.*)\//.exec(p);v&&(p=v[1],v=v[2],(b=_n["idb://".concat(p,"/").concat(v)])&&Ws(b,s,l,o))}l.forEach(function(E){return E()})}function Ws(s,o,l,u){for(var h=[],p=0,b=Object.entries(s.queries.query);p<b.length;p++){for(var v=b[p],E=v[0],_=[],D=0,$=v[1];D<$.length;D++){var j=$[D];ji(o,j.obsSet)?j.subscribers.forEach(function(A){return l.add(A)}):u&&_.push(j)}u&&h.push([E,_])}if(u)for(var S=0,T=h;S<T.length;S++){var R=T[S],E=R[0],_=R[1];s.queries.query[E]=_}}function pl(s){var o=s._state,l=s._deps.indexedDB;if(o.isBeingOpened||s.idbdb)return o.dbReadyPromise.then(function(){return o.dbOpenError?it(o.dbOpenError):s});o.isBeingOpened=!0,o.dbOpenError=null,o.openComplete=!1;var u=o.openCanceller,h=Math.round(10*s.verno),p=!1;function b(){if(o.openCanceller!==u)throw new ee.DatabaseClosed("db.open() was cancelled")}function v(){return new Q(function(j,S){if(b(),!l)throw new ee.MissingAPI;var T=s.name,R=o.autoSchema||!h?l.open(T):l.open(T,h);if(!R)throw new ee.MissingAPI;R.onerror=Qt(S),R.onblocked=Me(s._fireOnBlocked),R.onupgradeneeded=Me(function(A){var F;D=R.transaction,o.autoSchema&&!s._options.allowEmptyDB?(R.onerror=sr,D.abort(),R.result.close(),(F=l.deleteDatabase(T)).onsuccess=F.onerror=Me(function(){S(new ee.NoSuchDatabase("Database ".concat(T," doesnt exist")))})):(D.onerror=Qt(S),A=A.oldVersion>Math.pow(2,62)?0:A.oldVersion,$=A<1,s.idbdb=R.result,p&&hl(s,D),dl(s,A/10,D,S))},S),R.onsuccess=Me(function(){D=null;var A,F,L,B,N,W=s.idbdb=R.result,Z=Ce(W.objectStoreNames);if(0<Z.length)try{var K=W.transaction((B=Z).length===1?B[0]:B,"readonly");if(o.autoSchema)F=W,L=K,(A=s).verno=F.version/10,L=A._dbSchema=Fr(0,F,L),A._storeNames=Ce(F.objectStoreNames,0),jr(A,[A._allTables],c(L),L);else if(zr(s,s._dbSchema,K),((N=Ai(Fr(0,(N=s).idbdb,K),N._dbSchema)).add.length||N.change.some(function(X){return X.add.length||X.change.length}))&&!p)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),W.close(),h=W.version+1,p=!0,j(v());Rr(s,K)}catch{}qn.push(s),W.onversionchange=Me(function(X){o.vcFired=!0,s.on("versionchange").fire(X)}),W.onclose=Me(function(X){s.on("close").fire(X)}),$&&(N=s._deps,K=T,W=N.indexedDB,N=N.IDBKeyRange,Di(W)||K===Ar||Ti(W,N).put({name:K}).catch(de)),j()},S)}).catch(function(j){switch(j?.name){case"UnknownError":if(0<o.PR1398_maxLoop)return o.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),v();break;case"VersionError":if(0<h)return h=0,v()}return Q.reject(j)})}var E,_=o.dbReadyResolve,D=null,$=!1;return Q.race([u,(typeof navigator>"u"?Q.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(j){function S(){return indexedDB.databases().finally(j)}E=setInterval(S,100),S()}).finally(function(){return clearInterval(E)}):Promise.resolve()).then(v)]).then(function(){return b(),o.onReadyBeingFired=[],Q.resolve(Ii(function(){return s.on.ready.fire(s.vip)})).then(function j(){if(0<o.onReadyBeingFired.length){var S=o.onReadyBeingFired.reduce(St,de);return o.onReadyBeingFired=[],Q.resolve(Ii(function(){return S(s.vip)})).then(j)}})}).finally(function(){o.openCanceller===u&&(o.onReadyBeingFired=null,o.isBeingOpened=!1)}).catch(function(j){o.dbOpenError=j;try{D&&D.abort()}catch{}return u===o.openCanceller&&s._close(),it(j)}).finally(function(){o.openComplete=!0,_()}).then(function(){var j;return $&&(j={},s.tables.forEach(function(S){S.schema.indexes.forEach(function(T){T.name&&(j["idb://".concat(s.name,"/").concat(S.name,"/").concat(T.name)]=new bt(-1/0,[[[]]]))}),j["idb://".concat(s.name,"/").concat(S.name,"/")]=j["idb://".concat(s.name,"/").concat(S.name,"/:dels")]=new bt(-1/0,[[[]]])}),wn(or).fire(j),zi(j,!0)),s})}function Li(s){function o(p){return s.next(p)}var l=h(o),u=h(function(p){return s.throw(p)});function h(p){return function(E){var v=p(E),E=v.value;return v.done?E:E&&typeof E.then=="function"?E.then(l,u):d(E)?Promise.all(E).then(l,u):l(E)}}return h(o)()}function qr(s,o,l){for(var u=d(s)?s.slice():[s],h=0;h<l;++h)u.push(o);return u}var ml={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(s){return i(i({},s),{table:function(o){var l=s.table(o),u=l.schema,h={},p=[];function b($,j,S){var T=lr($),R=h[T]=h[T]||[],A=$==null?0:typeof $=="string"?1:$.length,F=0<j,F=i(i({},S),{name:F?"".concat(T,"(virtual-from:").concat(S.name,")"):S.name,lowLevelIndex:S,isVirtual:F,keyTail:j,keyLength:A,extractKey:Si($),unique:!F&&S.unique});return R.push(F),F.isPrimaryKey||p.push(F),1<A&&b(A===2?$[0]:$.slice(0,A-1),j+1,S),R.sort(function(L,B){return L.keyTail-B.keyTail}),F}o=b(u.primaryKey.keyPath,0,u.primaryKey),h[":id"]=[o];for(var v=0,E=u.indexes;v<E.length;v++){var _=E[v];b(_.keyPath,0,_)}function D($){var j,S=$.query.index;return S.isVirtual?i(i({},$),{query:{index:S.lowLevelIndex,range:(j=$.query.range,S=S.keyTail,{type:j.type===1?2:j.type,lower:qr(j.lower,j.lowerOpen?s.MAX_KEY:s.MIN_KEY,S),lowerOpen:!0,upper:qr(j.upper,j.upperOpen?s.MIN_KEY:s.MAX_KEY,S),upperOpen:!0})}}):$}return i(i({},l),{schema:i(i({},u),{primaryKey:o,indexes:p,getIndexByKeyPath:function($){return($=h[lr($)])&&$[0]}}),count:function($){return l.count(D($))},query:function($){return l.query(D($))},openCursor:function($){var j=$.query.index,S=j.keyTail,T=j.isVirtual,R=j.keyLength;return T?l.openCursor(D($)).then(function(F){return F&&A(F)}):l.openCursor($);function A(F){return Object.create(F,{continue:{value:function(L){L!=null?F.continue(qr(L,$.reverse?s.MAX_KEY:s.MIN_KEY,S)):$.unique?F.continue(F.key.slice(0,R).concat($.reverse?s.MIN_KEY:s.MAX_KEY,S)):F.continue()}},continuePrimaryKey:{value:function(L,B){F.continuePrimaryKey(qr(L,s.MAX_KEY,S),B)}},primaryKey:{get:function(){return F.primaryKey}},key:{get:function(){var L=F.key;return R===1?L[0]:L.slice(0,R)}},value:{get:function(){return F.value}}})}}})}})}};function Bi(s,o,l,u){return l=l||{},u=u||"",c(s).forEach(function(h){var p,b,v;x(o,h)?(p=s[h],b=o[h],typeof p=="object"&&typeof b=="object"&&p&&b?(v=C(p))!==C(b)?l[u+h]=o[h]:v==="Object"?Bi(p,b,l,u+h+"."):p!==b&&(l[u+h]=o[h]):p!==b&&(l[u+h]=o[h])):l[u+h]=void 0}),c(o).forEach(function(h){x(s,h)||(l[u+h]=o[h])}),l}function Mi(s,o){return o.type==="delete"?o.keys:o.keys||o.values.map(s.extractKey)}var gl={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(s){return i(i({},s),{table:function(o){var l=s.table(o),u=l.schema.primaryKey;return i(i({},l),{mutate:function(h){var p=G.trans,b=p.table(o).hook,v=b.deleting,E=b.creating,_=b.updating;switch(h.type){case"add":if(E.fire===de)break;return p._promise("readwrite",function(){return D(h)},!0);case"put":if(E.fire===de&&_.fire===de)break;return p._promise("readwrite",function(){return D(h)},!0);case"delete":if(v.fire===de)break;return p._promise("readwrite",function(){return D(h)},!0);case"deleteRange":if(v.fire===de)break;return p._promise("readwrite",function(){return(function $(j,S,T){return l.query({trans:j,values:!1,query:{index:u,range:S},limit:T}).then(function(R){var A=R.result;return D({type:"delete",keys:A,trans:j}).then(function(F){return 0<F.numFailures?Promise.reject(F.failures[0]):A.length<T?{failures:[],numFailures:0,lastResult:void 0}:$(j,i(i({},S),{lower:A[A.length-1],lowerOpen:!0}),T)})})})(h.trans,h.range,1e4)},!0)}return l.mutate(h);function D($){var j,S,T,R=G.trans,A=$.keys||Mi(u,$);if(!A)throw new Error("Keys missing");return($=$.type==="add"||$.type==="put"?i(i({},$),{keys:A}):i({},$)).type!=="delete"&&($.values=n([],$.values)),$.keys&&($.keys=n([],$.keys)),j=l,T=A,((S=$).type==="add"?Promise.resolve([]):j.getMany({trans:S.trans,keys:T,cache:"immutable"})).then(function(F){var L=A.map(function(B,N){var W,Z,K,X=F[N],te={onerror:null,onsuccess:null};return $.type==="delete"?v.fire.call(te,B,X,R):$.type==="add"||X===void 0?(W=E.fire.call(te,B,$.values[N],R),B==null&&W!=null&&($.keys[N]=B=W,u.outbound||Pe($.values[N],u.keyPath,B))):(W=Bi(X,$.values[N]),(Z=_.fire.call(te,W,B,X,R))&&(K=$.values[N],Object.keys(Z).forEach(function(J){x(K,J)?K[J]=Z[J]:Pe(K,J,Z[J])}))),te});return l.mutate($).then(function(B){for(var N=B.failures,W=B.results,Z=B.numFailures,B=B.lastResult,K=0;K<A.length;++K){var X=(W||A)[K],te=L[K];X==null?te.onerror&&te.onerror(N[K]):te.onsuccess&&te.onsuccess($.type==="put"&&F[K]?$.values[K]:X)}return{failures:N,results:W,numFailures:Z,lastResult:B}}).catch(function(B){return L.forEach(function(N){return N.onerror&&N.onerror(B)}),Promise.reject(B)})})}}})}})}};function Ks(s,o,l){try{if(!o||o.keys.length<s.length)return null;for(var u=[],h=0,p=0;h<o.keys.length&&p<s.length;++h)Se(o.keys[h],s[p])===0&&(u.push(l?P(o.values[h]):o.values[h]),++p);return u.length===s.length?u:null}catch{return null}}var bl={stack:"dbcore",level:-1,create:function(s){return{table:function(o){var l=s.table(o);return i(i({},l),{getMany:function(u){if(!u.cache)return l.getMany(u);var h=Ks(u.keys,u.trans._cache,u.cache==="clone");return h?Q.resolve(h):l.getMany(u).then(function(p){return u.trans._cache={keys:u.keys,values:u.cache==="clone"?P(p):p},p})},mutate:function(u){return u.type!=="add"&&(u.trans._cache=null),l.mutate(u)}})}}}};function Vs(s,o){return s.trans.mode==="readonly"&&!!s.subscr&&!s.trans.explicit&&s.trans.db._options.cache!=="disabled"&&!o.schema.primaryKey.outbound}function Ys(s,o){switch(s){case"query":return o.values&&!o.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var yl={stack:"dbcore",level:0,name:"Observability",create:function(s){var o=s.schema.name,l=new bt(s.MIN_KEY,s.MAX_KEY);return i(i({},s),{transaction:function(u,h,p){if(G.subscr&&h!=="readonly")throw new ee.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(G.querier));return s.transaction(u,h,p)},table:function(u){var h=s.table(u),p=h.schema,b=p.primaryKey,$=p.indexes,v=b.extractKey,E=b.outbound,_=b.autoIncrement&&$.filter(function(S){return S.compound&&S.keyPath.includes(b.keyPath)}),D=i(i({},h),{mutate:function(S){function T(J){return J="idb://".concat(o,"/").concat(u,"/").concat(J),B[J]||(B[J]=new bt)}var R,A,F,L=S.trans,B=S.mutatedParts||(S.mutatedParts={}),N=T(""),W=T(":dels"),Z=S.type,te=S.type==="deleteRange"?[S.range]:S.type==="delete"?[S.keys]:S.values.length<50?[Mi(b,S).filter(function(J){return J}),S.values]:[],K=te[0],X=te[1],te=S.trans._cache;return d(K)?(N.addKeys(K),(te=Z==="delete"||K.length===X.length?Ks(K,te):null)||W.addKeys(K),(te||X)&&(R=T,A=te,F=X,p.indexes.forEach(function(J){var re=R(J.name||"");function me(xe){return xe!=null?J.extractKey(xe):null}function ve(xe){return J.multiEntry&&d(xe)?xe.forEach(function(Pt){return re.addKey(Pt)}):re.addKey(xe)}(A||F).forEach(function(xe,yt){var pe=A&&me(A[yt]),yt=F&&me(F[yt]);Se(pe,yt)!==0&&(pe!=null&&ve(pe),yt!=null&&ve(yt))})}))):K?(X={from:(X=K.lower)!==null&&X!==void 0?X:s.MIN_KEY,to:(X=K.upper)!==null&&X!==void 0?X:s.MAX_KEY},W.add(X),N.add(X)):(N.add(l),W.add(l),p.indexes.forEach(function(J){return T(J.name).add(l)})),h.mutate(S).then(function(J){return!K||S.type!=="add"&&S.type!=="put"||(N.addKeys(J.results),_&&_.forEach(function(re){for(var me=S.values.map(function(pe){return re.extractKey(pe)}),ve=re.keyPath.findIndex(function(pe){return pe===b.keyPath}),xe=0,Pt=J.results.length;xe<Pt;++xe)me[xe][ve]=J.results[xe];T(re.name).addKeys(me)})),L.mutatedParts=Mr(L.mutatedParts||{},B),J})}}),$=function(T){var R=T.query,T=R.index,R=R.range;return[T,new bt((T=R.lower)!==null&&T!==void 0?T:s.MIN_KEY,(R=R.upper)!==null&&R!==void 0?R:s.MAX_KEY)]},j={get:function(S){return[b,new bt(S.key)]},getMany:function(S){return[b,new bt().addKeys(S.keys)]},count:$,query:$,openCursor:$};return c(j).forEach(function(S){D[S]=function(T){var R=G.subscr,A=!!R,F=Vs(G,h)&&Ys(S,T)?T.obsSet={}:R;if(A){var L=function(X){return X="idb://".concat(o,"/").concat(u,"/").concat(X),F[X]||(F[X]=new bt)},B=L(""),N=L(":dels"),R=j[S](T),A=R[0],R=R[1];if((S==="query"&&A.isPrimaryKey&&!T.values?N:L(A.name||"")).add(R),!A.isPrimaryKey){if(S!=="count"){var W=S==="query"&&E&&T.values&&h.query(i(i({},T),{values:!1}));return h[S].apply(this,arguments).then(function(X){if(S==="query"){if(E&&T.values)return W.then(function(me){return me=me.result,B.addKeys(me),X});var te=T.values?X.result.map(v):X.result;(T.values?B:N).addKeys(te)}else if(S==="openCursor"){var J=X,re=T.values;return J&&Object.create(J,{key:{get:function(){return N.addKey(J.primaryKey),J.key}},primaryKey:{get:function(){var me=J.primaryKey;return N.addKey(me),me}},value:{get:function(){return re&&B.addKey(J.primaryKey),J.value}}})}return X})}N.add(l)}}return h[S].apply(this,arguments)}}),D}})}};function Xs(s,o,l){if(l.numFailures===0)return o;if(o.type==="deleteRange")return null;var u=o.keys?o.keys.length:"values"in o&&o.values?o.values.length:1;return l.numFailures===u?null:(o=i({},o),d(o.keys)&&(o.keys=o.keys.filter(function(h,p){return!(p in l.failures)})),"values"in o&&d(o.values)&&(o.values=o.values.filter(function(h,p){return!(p in l.failures)})),o)}function Ni(s,o){return l=s,((u=o).lower===void 0||(u.lowerOpen?0<Se(l,u.lower):0<=Se(l,u.lower)))&&(s=s,(o=o).upper===void 0||(o.upperOpen?Se(s,o.upper)<0:Se(s,o.upper)<=0));var l,u}function Gs(s,o,j,u,h,p){if(!j||j.length===0)return s;var b=o.query.index,v=b.multiEntry,E=o.query.range,_=u.schema.primaryKey.extractKey,D=b.extractKey,$=(b.lowLevelIndex||b).extractKey,j=j.reduce(function(S,T){var R=S,A=[];if(T.type==="add"||T.type==="put")for(var F=new bt,L=T.values.length-1;0<=L;--L){var B,N=T.values[L],W=_(N);F.hasKey(W)||(B=D(N),(v&&d(B)?B.some(function(J){return Ni(J,E)}):Ni(B,E))&&(F.addKey(W),A.push(N)))}switch(T.type){case"add":var Z=new bt().addKeys(o.values?S.map(function(re){return _(re)}):S),R=S.concat(o.values?A.filter(function(re){return re=_(re),!Z.hasKey(re)&&(Z.addKey(re),!0)}):A.map(function(re){return _(re)}).filter(function(re){return!Z.hasKey(re)&&(Z.addKey(re),!0)}));break;case"put":var K=new bt().addKeys(T.values.map(function(re){return _(re)}));R=S.filter(function(re){return!K.hasKey(o.values?_(re):re)}).concat(o.values?A:A.map(function(re){return _(re)}));break;case"delete":var X=new bt().addKeys(T.keys);R=S.filter(function(re){return!X.hasKey(o.values?_(re):re)});break;case"deleteRange":var te=T.range;R=S.filter(function(re){return!Ni(_(re),te)})}return R},s);return j===s?s:(j.sort(function(S,T){return Se($(S),$(T))||Se(_(S),_(T))}),o.limit&&o.limit<1/0&&(j.length>o.limit?j.length=o.limit:s.length===o.limit&&j.length<o.limit&&(h.dirty=!0)),p?Object.freeze(j):j)}function Qs(s,o){return Se(s.lower,o.lower)===0&&Se(s.upper,o.upper)===0&&!!s.lowerOpen==!!o.lowerOpen&&!!s.upperOpen==!!o.upperOpen}function wl(s,o){return(function(l,u,h,p){if(l===void 0)return u!==void 0?-1:0;if(u===void 0)return 1;if((u=Se(l,u))===0){if(h&&p)return 0;if(h)return 1;if(p)return-1}return u})(s.lower,o.lower,s.lowerOpen,o.lowerOpen)<=0&&0<=(function(l,u,h,p){if(l===void 0)return u!==void 0?1:0;if(u===void 0)return-1;if((u=Se(l,u))===0){if(h&&p)return 0;if(h)return-1;if(p)return 1}return u})(s.upper,o.upper,s.upperOpen,o.upperOpen)}function vl(s,o,l,u){s.subscribers.add(l),u.addEventListener("abort",function(){var h,p;s.subscribers.delete(l),s.subscribers.size===0&&(h=s,p=o,setTimeout(function(){h.subscribers.size===0&&q(p,h)},3e3))})}var xl={stack:"dbcore",level:0,name:"Cache",create:function(s){var o=s.schema.name;return i(i({},s),{transaction:function(l,u,h){var p,b,v=s.transaction(l,u,h);return u==="readwrite"&&(b=(p=new AbortController).signal,h=function(E){return function(){if(p.abort(),u==="readwrite"){for(var _=new Set,D=0,$=l;D<$.length;D++){var j=$[D],S=_n["idb://".concat(o,"/").concat(j)];if(S){var T=s.table(j),R=S.optimisticOps.filter(function(re){return re.trans===v});if(v._explicit&&E&&v.mutatedParts)for(var A=0,F=Object.values(S.queries.query);A<F.length;A++)for(var L=0,B=(Z=F[A]).slice();L<B.length;L++)ji((K=B[L]).obsSet,v.mutatedParts)&&(q(Z,K),K.subscribers.forEach(function(re){return _.add(re)}));else if(0<R.length){S.optimisticOps=S.optimisticOps.filter(function(re){return re.trans!==v});for(var N=0,W=Object.values(S.queries.query);N<W.length;N++)for(var Z,K,X,te=0,J=(Z=W[N]).slice();te<J.length;te++)(K=J[te]).res!=null&&v.mutatedParts&&(E&&!K.dirty?(X=Object.isFrozen(K.res),X=Gs(K.res,K.req,R,T,K,X),K.dirty?(q(Z,K),K.subscribers.forEach(function(re){return _.add(re)})):X!==K.res&&(K.res=X,K.promise=Q.resolve({result:X}))):(K.dirty&&q(Z,K),K.subscribers.forEach(function(re){return _.add(re)})))}}}_.forEach(function(re){return re()})}}},v.addEventListener("abort",h(!1),{signal:b}),v.addEventListener("error",h(!1),{signal:b}),v.addEventListener("complete",h(!0),{signal:b})),v},table:function(l){var u=s.table(l),h=u.schema.primaryKey;return i(i({},u),{mutate:function(p){var b=G.trans;if(h.outbound||b.db._options.cache==="disabled"||b.explicit||b.idbtrans.mode!=="readwrite")return u.mutate(p);var v=_n["idb://".concat(o,"/").concat(l)];return v?(b=u.mutate(p),p.type!=="add"&&p.type!=="put"||!(50<=p.values.length||Mi(h,p).some(function(E){return E==null}))?(v.optimisticOps.push(p),p.mutatedParts&&Nr(p.mutatedParts),b.then(function(E){0<E.numFailures&&(q(v.optimisticOps,p),(E=Xs(0,p,E))&&v.optimisticOps.push(E),p.mutatedParts&&Nr(p.mutatedParts))}),b.catch(function(){q(v.optimisticOps,p),p.mutatedParts&&Nr(p.mutatedParts)})):b.then(function(E){var _=Xs(0,i(i({},p),{values:p.values.map(function(D,$){var j;return E.failures[$]?D:(D=(j=h.keyPath)!==null&&j!==void 0&&j.includes(".")?P(D):i({},D),Pe(D,h.keyPath,E.results[$]),D)})}),E);v.optimisticOps.push(_),queueMicrotask(function(){return p.mutatedParts&&Nr(p.mutatedParts)})}),b):u.mutate(p)},query:function(p){if(!Vs(G,u)||!Ys("query",p))return u.query(p);var b=((_=G.trans)===null||_===void 0?void 0:_.db._options.cache)==="immutable",$=G,v=$.requery,E=$.signal,_=(function(T,R,A,F){var L=_n["idb://".concat(T,"/").concat(R)];if(!L)return[];if(!(R=L.queries[A]))return[null,!1,L,null];var B=R[(F.query?F.query.index.name:null)||""];if(!B)return[null,!1,L,null];switch(A){case"query":var N=B.find(function(W){return W.req.limit===F.limit&&W.req.values===F.values&&Qs(W.req.query.range,F.query.range)});return N?[N,!0,L,B]:[B.find(function(W){return("limit"in W.req?W.req.limit:1/0)>=F.limit&&(!F.values||W.req.values)&&wl(W.req.query.range,F.query.range)}),!1,L,B];case"count":return N=B.find(function(W){return Qs(W.req.query.range,F.query.range)}),[N,!!N,L,B]}})(o,l,"query",p),D=_[0],$=_[1],j=_[2],S=_[3];return D&&$?D.obsSet=p.obsSet:($=u.query(p).then(function(T){var R=T.result;if(D&&(D.res=R),b){for(var A=0,F=R.length;A<F;++A)Object.freeze(R[A]);Object.freeze(R)}else T.result=P(R);return T}).catch(function(T){return S&&D&&q(S,D),Promise.reject(T)}),D={obsSet:p.obsSet,promise:$,subscribers:new Set,type:"query",req:p,dirty:!1},S?S.push(D):(S=[D],(j=j||(_n["idb://".concat(o,"/").concat(l)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[p.query.index.name||""]=S)),vl(D,S,v,E),D.promise.then(function(T){return{result:Gs(T.result,p,j?.optimisticOps,u,D,b)}})}})}})}};function Ur(s,o){return new Proxy(s,{get:function(l,u,h){return u==="db"?o:Reflect.get(l,u,h)}})}var ln=(st.prototype.version=function(s){if(isNaN(s)||s<.1)throw new ee.Type("Given version is not a positive number");if(s=Math.round(10*s)/10,this.idbdb||this._state.isBeingOpened)throw new ee.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,s);var o=this._versions,l=o.filter(function(u){return u._cfg.version===s})[0];return l||(l=new this.Version(s),o.push(l),o.sort(ul),l.stores({}),this._state.autoSchema=!1,l)},st.prototype._whenReady=function(s){var o=this;return this.idbdb&&(this._state.openComplete||G.letThrough||this._vip)?s():new Q(function(l,u){if(o._state.openComplete)return u(new ee.DatabaseClosed(o._state.dbOpenError));if(!o._state.isBeingOpened){if(!o._state.autoOpen)return void u(new ee.DatabaseClosed);o.open().catch(de)}o._state.dbReadyPromise.then(l,u)}).then(s)},st.prototype.use=function(s){var o=s.stack,l=s.create,u=s.level,h=s.name;return h&&this.unuse({stack:o,name:h}),s=this._middlewares[o]||(this._middlewares[o]=[]),s.push({stack:o,create:l,level:u??10,name:h}),s.sort(function(p,b){return p.level-b.level}),this},st.prototype.unuse=function(s){var o=s.stack,l=s.name,u=s.create;return o&&this._middlewares[o]&&(this._middlewares[o]=this._middlewares[o].filter(function(h){return u?h.create!==u:!!l&&h.name!==l})),this},st.prototype.open=function(){var s=this;return Cn(Qe,function(){return pl(s)})},st.prototype._close=function(){var s=this._state,o=qn.indexOf(this);if(0<=o&&qn.splice(o,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}s.isBeingOpened||(s.dbReadyPromise=new Q(function(l){s.dbReadyResolve=l}),s.openCanceller=new Q(function(l,u){s.cancelOpen=u}))},st.prototype.close=function(l){var o=(l===void 0?{disableAutoOpen:!0}:l).disableAutoOpen,l=this._state;o?(l.isBeingOpened&&l.cancelOpen(new ee.DatabaseClosed),this._close(),l.autoOpen=!1,l.dbOpenError=new ee.DatabaseClosed):(this._close(),l.autoOpen=this._options.autoOpen||l.isBeingOpened,l.openComplete=!1,l.dbOpenError=null)},st.prototype.delete=function(s){var o=this;s===void 0&&(s={disableAutoOpen:!0});var l=0<arguments.length&&typeof arguments[0]!="object",u=this._state;return new Q(function(h,p){function b(){o.close(s);var v=o._deps.indexedDB.deleteDatabase(o.name);v.onsuccess=Me(function(){var E,_,D;E=o._deps,_=o.name,D=E.indexedDB,E=E.IDBKeyRange,Di(D)||_===Ar||Ti(D,E).delete(_).catch(de),h()}),v.onerror=Qt(p),v.onblocked=o._fireOnBlocked}if(l)throw new ee.InvalidArgument("Invalid closeOptions argument to db.delete()");u.isBeingOpened?u.dbReadyPromise.then(b):b()})},st.prototype.backendDB=function(){return this.idbdb},st.prototype.isOpen=function(){return this.idbdb!==null},st.prototype.hasBeenClosed=function(){var s=this._state.dbOpenError;return s&&s.name==="DatabaseClosed"},st.prototype.hasFailed=function(){return this._state.dbOpenError!==null},st.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(st.prototype,"tables",{get:function(){var s=this;return c(this._allTables).map(function(o){return s._allTables[o]})},enumerable:!1,configurable:!0}),st.prototype.transaction=function(){var s=function(o,l,u){var h=arguments.length;if(h<2)throw new ee.InvalidArgument("Too few arguments");for(var p=new Array(h-1);--h;)p[h-1]=arguments[h];return u=p.pop(),[o,je(p),u]}.apply(this,arguments);return this._transaction.apply(this,s)},st.prototype._transaction=function(s,o,l){var u=this,h=G.trans;h&&h.db===this&&s.indexOf("!")===-1||(h=null);var p,b,v=s.indexOf("?")!==-1;s=s.replace("!","").replace("?","");try{if(b=o.map(function(_){if(_=_ instanceof u.Table?_.name:_,typeof _!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return _}),s=="r"||s===yi)p=yi;else{if(s!="rw"&&s!=wi)throw new ee.InvalidArgument("Invalid transaction mode: "+s);p=wi}if(h){if(h.mode===yi&&p===wi){if(!v)throw new ee.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");h=null}h&&b.forEach(function(_){if(h&&h.storeNames.indexOf(_)===-1){if(!v)throw new ee.SubTransaction("Table "+_+" not included in parent transaction.");h=null}}),v&&h&&!h.active&&(h=null)}}catch(_){return h?h._promise(null,function(D,$){$(_)}):it(_)}var E=function _(D,$,j,S,T){return Q.resolve().then(function(){var R=G.transless||G,A=D._createTransaction($,j,D._dbSchema,S);if(A.explicit=!0,R={trans:A,transless:R},S)A.idbtrans=S.idbtrans;else try{A.create(),A.idbtrans._explicit=!0,D._state.PR1398_maxLoop=3}catch(B){return B.name===Ye.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return _(D,$,j,null,T)})):it(B)}var F,L=lt(T);return L&&Nn(),R=Q.follow(function(){var B;(F=T.call(A,A))&&(L?(B=gn.bind(null,null),F.then(B,B)):typeof F.next=="function"&&typeof F.throw=="function"&&(F=Li(F)))},R),(F&&typeof F.then=="function"?Q.resolve(F).then(function(B){return A.active?B:it(new ee.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):R.then(function(){return F})).then(function(B){return S&&A._resolve(),A._completion.then(function(){return B})}).catch(function(B){return A._reject(B),it(B)})})}.bind(null,this,p,b,h,l);return h?h._promise(p,E,"lock"):G.trans?Cn(G.transless,function(){return u._whenReady(E)}):this._whenReady(E)},st.prototype.table=function(s){if(!x(this._allTables,s))throw new ee.InvalidTable("Table ".concat(s," does not exist"));return this._allTables[s]},st);function st(s,o){var l=this;this._middlewares={},this.verno=0;var u=st.dependencies;this._options=o=i({addons:st.addons,autoOpen:!0,indexedDB:u.indexedDB,IDBKeyRange:u.IDBKeyRange,cache:"cloned"},o),this._deps={indexedDB:o.indexedDB,IDBKeyRange:o.IDBKeyRange},u=o.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var h,p,b,v,E,_={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:de,dbReadyPromise:null,cancelOpen:de,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:o.autoOpen};_.dbReadyPromise=new Q(function($){_.dbReadyResolve=$}),_.openCanceller=new Q(function($,j){_.cancelOpen=j}),this._state=_,this.name=s,this.on=nr(this,"populate","blocked","versionchange","close",{ready:[St,de]}),this.on.ready.subscribe=Le(this.on.ready.subscribe,function($){return function(j,S){st.vip(function(){var T,R=l._state;R.openComplete?(R.dbOpenError||Q.resolve().then(j),S&&$(j)):R.onReadyBeingFired?(R.onReadyBeingFired.push(j),S&&$(j)):($(j),T=l,S||$(function A(){T.on.ready.unsubscribe(j),T.on.ready.unsubscribe(A)}))})}}),this.Collection=(h=this,rr(rl.prototype,function(F,A){this.db=h;var S=As,T=null;if(A)try{S=A()}catch(L){T=L}var R=F._ctx,A=R.table,F=A.hook.reading.fire;this._ctx={table:A,index:R.index,isPrimKey:!R.index||A.schema.primKey.keyPath&&R.index===A.schema.primKey.name,range:S,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:T,or:R.or,valueMapper:F!==be?F:null}})),this.Table=(p=this,rr(Is.prototype,function($,j,S){this.db=p,this._tx=S,this.name=$,this.schema=j,this.hook=p._allTables[$]?p._allTables[$].hook:nr(null,{creating:[Ge,de],reading:[Et,be],updating:[Nt,de],deleting:[fn,de]})})),this.Transaction=(b=this,rr(ol.prototype,function($,j,S,T,R){var A=this;this.db=b,this.mode=$,this.storeNames=j,this.schema=S,this.chromeTransactionDurability=T,this.idbtrans=null,this.on=nr(this,"complete","error","abort"),this.parent=R||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new Q(function(F,L){A._resolve=F,A._reject=L}),this._completion.then(function(){A.active=!1,A.on.complete.fire()},function(F){var L=A.active;return A.active=!1,A.on.error.fire(F),A.parent?A.parent._reject(F):L&&A.idbtrans&&A.idbtrans.abort(),it(F)})})),this.Version=(v=this,rr(fl.prototype,function($){this.db=v,this._cfg={version:$,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(E=this,rr(zs.prototype,function($,j,S){if(this.db=E,this._ctx={table:$,index:j===":id"?null:j,or:S},this._cmp=this._ascending=Se,this._descending=function(T,R){return Se(R,T)},this._max=function(T,R){return 0<Se(T,R)?T:R},this._min=function(T,R){return Se(T,R)<0?T:R},this._IDBKeyRange=E._deps.IDBKeyRange,!this._IDBKeyRange)throw new ee.MissingAPI})),this.on("versionchange",function($){0<$.newVersion?console.warn("Another connection wants to upgrade database '".concat(l.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(l.name,"'. Closing db now to resume the delete request.")),l.close({disableAutoOpen:!1})}),this.on("blocked",function($){!$.newVersion||$.newVersion<$.oldVersion?console.warn("Dexie.delete('".concat(l.name,"') was blocked")):console.warn("Upgrade '".concat(l.name,"' blocked by other connection holding version ").concat($.oldVersion/10))}),this._maxKey=ar(o.IDBKeyRange),this._createTransaction=function($,j,S,T){return new l.Transaction($,j,S,l._options.chromeTransactionDurability,T)},this._fireOnBlocked=function($){l.on("blocked").fire($),qn.filter(function(j){return j.name===l.name&&j!==l&&!j._state.vcFired}).map(function(j){return j.on("versionchange").fire($)})},this.use(bl),this.use(xl),this.use(yl),this.use(ml),this.use(gl);var D=new Proxy(this,{get:function($,j,S){if(j==="_vip")return!0;if(j==="table")return function(R){return Ur(l.table(R),D)};var T=Reflect.get($,j,S);return T instanceof Is?Ur(T,D):j==="tables"?T.map(function(R){return Ur(R,D)}):j==="_createTransaction"?function(){return Ur(T.apply(this,arguments),D)}:T}});this.vip=D,u.forEach(function($){return $(l)})}var Hr,Ft=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",$l=(qi.prototype.subscribe=function(s,o,l){return this._subscribe(s&&typeof s!="function"?s:{next:s,error:o,complete:l})},qi.prototype[Ft]=function(){return this},qi);function qi(s){this._subscribe=s}try{Hr={indexedDB:a.indexedDB||a.mozIndexedDB||a.webkitIndexedDB||a.msIndexedDB,IDBKeyRange:a.IDBKeyRange||a.webkitIDBKeyRange}}catch{Hr={indexedDB:null,IDBKeyRange:null}}function Js(s){var o,l=!1,u=new $l(function(h){var p=lt(s),b,v=!1,E={},_={},D={get closed(){return v},unsubscribe:function(){v||(v=!0,b&&b.abort(),$&&wn.storagemutated.unsubscribe(S))}};h.start&&h.start(D);var $=!1,j=function(){return bi(T)},S=function(R){Mr(E,R),ji(_,E)&&j()},T=function(){var R,A,F;!v&&Hr.indexedDB&&(E={},R={},b&&b.abort(),b=new AbortController,F=(function(L){var B=Oe();try{p&&Nn();var N=mn(s,L);return N=p?N.finally(gn):N}finally{B&&He()}})(A={subscr:R,signal:b.signal,requery:j,querier:s,trans:null}),Promise.resolve(F).then(function(L){l=!0,o=L,v||A.signal.aborted||(E={},(function(B){for(var N in B)if(x(B,N))return;return 1})(_=R)||$||(wn(or,S),$=!0),bi(function(){return!v&&h.next&&h.next(L)}))},function(L){l=!1,["DatabaseClosedError","AbortError"].includes(L?.name)||v||bi(function(){v||h.error&&h.error(L)})}))};return setTimeout(j,0),D});return u.hasValue=function(){return l},u.getValue=function(){return o},u}var An=ln;function Ui(s){var o=vn;try{vn=!0,wn.storagemutated.fire(s),zi(s,!0)}finally{vn=o}}I(An,i(i({},ze),{delete:function(s){return new An(s,{addons:[]}).delete()},exists:function(s){return new An(s,{addons:[]}).open().then(function(o){return o.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(s){try{return o=An.dependencies,l=o.indexedDB,o=o.IDBKeyRange,(Di(l)?Promise.resolve(l.databases()).then(function(u){return u.map(function(h){return h.name}).filter(function(h){return h!==Ar})}):Ti(l,o).toCollection().primaryKeys()).then(s)}catch{return it(new ee.MissingAPI)}var o,l},defineClass:function(){return function(s){f(this,s)}},ignoreTransaction:function(s){return G.trans?Cn(G.transless,s):s()},vip:Ii,async:function(s){return function(){try{var o=Li(s.apply(this,arguments));return o&&typeof o.then=="function"?o:Q.resolve(o)}catch(l){return it(l)}}},spawn:function(s,o,l){try{var u=Li(s.apply(l,o||[]));return u&&typeof u.then=="function"?u:Q.resolve(u)}catch(h){return it(h)}},currentTransaction:{get:function(){return G.trans||null}},waitFor:function(s,o){return o=Q.resolve(typeof s=="function"?An.ignoreTransaction(s):s).timeout(o||6e4),G.trans?G.trans.waitFor(o):o},Promise:Q,debug:{get:function(){return Re},set:function(s){qe(s)}},derive:H,extend:f,props:I,override:Le,Events:nr,on:wn,liveQuery:Js,extendObservabilitySet:Mr,getByKeyPath:we,setByKeyPath:Pe,delByKeyPath:function(s,o){typeof o=="string"?Pe(s,o,void 0):"length"in o&&[].map.call(o,function(l){Pe(s,l,void 0)})},shallowClone:at,deepClone:P,getObjectDiff:Bi,cmp:Se,asap:oe,minKey:-1/0,addons:[],connections:qn,errnames:Ye,dependencies:Hr,cache:_n,semVer:"4.0.10",version:"4.0.10".split(".").map(function(s){return parseInt(s)}).reduce(function(s,o,l){return s+o/Math.pow(10,2*l)})})),An.maxKey=ar(An.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(wn(or,function(s){vn||(s=new CustomEvent(ki,{detail:s}),vn=!0,dispatchEvent(s),vn=!1)}),addEventListener(ki,function(s){s=s.detail,vn||Ui(s)}));var Wn,vn=!1,Zs=function(){};return typeof BroadcastChannel<"u"&&((Zs=function(){(Wn=new BroadcastChannel(ki)).onmessage=function(s){return s.data&&Ui(s.data)}})(),typeof Wn.unref=="function"&&Wn.unref(),wn(or,function(s){vn||Wn.postMessage(s)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(s){if(!ln.disableBfCache&&s.persisted){Re&&console.debug("Dexie: handling persisted pagehide"),Wn?.close();for(var o=0,l=qn;o<l.length;o++)l[o].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(s){!ln.disableBfCache&&s.persisted&&(Re&&console.debug("Dexie: handling persisted pageshow"),Zs(),Ui({all:new bt(-1/0,[[]])}))})),Q.rejectionMapper=function(s,o){return!s||s instanceof Ne||s instanceof TypeError||s instanceof SyntaxError||!s.name||!Xe[s.name]?s:(o=new Xe[s.name](o||s.message,s),"stack"in s&&z(o,"stack",{get:function(){return this.inner.stack}}),o)},qe(Re),i(ln,Object.freeze({__proto__:null,Dexie:ln,liveQuery:Js,Entity:Ps,cmp:Se,PropModSymbol:an,PropModification:ir,replacePrefix:function(s,o){return new ir({replacePrefix:[s,o]})},add:function(s){return new ir({add:s})},remove:function(s){return new ir({remove:s})},default:ln,RangeSet:bt,mergeRanges:ur,rangesOverlap:qs}),{default:ln}),ln})})(Qr)),Qr.exports}var ic=rc();const ts=tc(ic),po=Symbol.for("Dexie"),ni=globalThis[po]||(globalThis[po]=ts);if(ts.semVer!==ni.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${ts.semVer} and ${ni.semVer}`);const{liveQuery:aa,mergeRanges:fp,rangesOverlap:pp,RangeSet:mp,cmp:gp,Entity:bp,PropModSymbol:yp,PropModification:wp,replacePrefix:vp,add:xp,remove:$p}=ni,sc="easydb";let Kr=null;function oc(){if(Kr)return Kr;const e=new ni(sc);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>ac()),Kr={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},Kr}function ac(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function Kn(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const r=Object.entries(t);return e.filter(i=>la(i,r)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,r){if(await e.update(t,r)===0)throw new Error(`patch: no doc with id=${t}`);const n=await e.get(t);if(!n)throw new Error(`patch: doc id=${t} vanished after update`);return n},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const i=aa(()=>e.toArray()).subscribe({next:n=>t(n)});return()=>i.unsubscribe()}}}function lc(e,t){return{async find(r){const i=e.where("tableId").equals(t);if(!r||Object.keys(r).length===0)return i.toArray();const n=Object.entries(r);return i.filter(a=>la(a,n)).toArray()},async findOne(r){const i=await e.get(r);return i&&i.tableId===t?i:null},async insert(r){const i={...r,tableId:t};return await e.add(i),i},async bulkInsert(r){if(r.length===0)return[];const i=r.map(n=>({...n,tableId:t}));return await e.bulkAdd(i),i},async upsert(r){const i={...r,tableId:t};return await e.put(i),i},async patch(r,i){if(await e.update(r,i)===0)throw new Error(`row patch: no row ${r}`);const a=await e.get(r);if(!a)throw new Error(`row patch: row ${r} vanished after update`);return a},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},subscribe(r){const n=aa(()=>e.where("tableId").equals(t).toArray()).subscribe({next:a=>r(a)});return()=>n.unsubscribe()}}}function la(e,t){for(const[r,i]of t)if(e[r]!==i)return!1;return!0}function cc(e){return{workspaces:Kn(e.workspaces),tables:Kn(e.tables),settings:Kn(e.settings),plugins:Kn(e.plugins),viewTemplates:Kn(e.viewTemplates),viewInstances:Kn(e.viewInstances),rows:t=>lc(e.rows,t)}}function uc(e){const{base:t,providers:r,tableById:i,ctx:n}=e,a=new Map;return{...t,rows(c){const d=i(c),f=d?.source;if(f){const y=r.get(f.type);if(y){const k=JSON.stringify(f),x=a.get(c);if(x&&x.key===k)return x.coll;const I=y.create(d,n);return a.set(c,{key:k,coll:I}),I}}return a.delete(c),t.rows(c)}}}function dc(){const e=new Map;return{on(t,r){let i=e.get(t);return i||(i=new Set,e.set(t,i)),i.add(r),()=>{i.delete(r)}},emit(t,r){const i=e.get(t);if(i)for(const n of i)try{n(r)}catch(a){console.error(`[event:${String(t)}] listener threw`,a)}}}}const tn=Ze`
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
`;function kn(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const r=t.querySelector("form");r&&(e.preventDefault(),r.requestSubmit())}const mo=new WeakSet;function nn(e,t){if(mo.has(t))return;mo.add(t);let r=0,i=0,n=0,a=0,c=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",f=>{if(f.target.closest("button, input, textarea, select, a, label"))return;c=!0,r=f.clientX,i=f.clientY;const k=e.getBoundingClientRect();n=k.left,a=k.top,t.setPointerCapture(f.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",f=>{if(!c)return;const y=f.clientX-r,k=f.clientY-i,x=-e.offsetWidth+80,I=window.innerWidth-80,V=0,z=window.innerHeight-40,H=Math.max(x,Math.min(I,n+y)),se=Math.max(V,Math.min(z,a+k));e.style.position="fixed",e.style.left=`${H}px`,e.style.top=`${se}px`,e.style.margin="0"});const d=f=>{if(c){c=!1;try{t.releasePointerCapture(f.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",d),t.addEventListener("pointercancel",d)}var hc=Object.defineProperty,fc=Object.getOwnPropertyDescriptor,ca=(e,t,r,i)=>{for(var n=i>1?void 0:i?fc(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&hc(t,r,n),n};let zt=class extends Ke{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),zt.instance=this}disconnectedCallback(){super.disconnectedCallback(),zt.instance===this&&(zt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&nn(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:t,message:e,resolve:r}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",r="Input"){return this.enqueue(i=>{this.current={kind:"prompt",title:r,message:e,value:t,resolve:i}})}choice(e,t,r="Choose"){return this.enqueue(i=>{this.current={kind:"choice",title:r,message:e,options:t,resolve:i}})}enqueue(e){return new Promise(t=>{const r=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const r=this.queue.shift();r&&r()}))}render(){const e=this.current;return M`
      <dialog @cancel=${this.onCancel} @keydown=${kn}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):ye}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return M`
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
        `;case"prompt":return M`
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
        `;case"choice":return M`
          <div class="dialog-header">
            <h2>${e.title}</h2>
            <div class="header-actions">
              <button class="ghost" @click=${()=>this.closeAndResolve(null)}>Cancel</button>
            </div>
          </div>
          <div class="dialog-body">
            ${e.message?M`<p class="message">${e.message}</p>`:ye}
            <div class="choices">
              ${e.options.map(t=>M`<button class="choice" @click=${()=>this.closeAndResolve(t)}>
                    ${t}
                  </button>`)}
            </div>
          </div>
        `}}};zt.instance=null;zt.styles=[tn,Ze`
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
    `];ca([U()],zt.prototype,"current",2);zt=ca([ot("host-dialogs")],zt);const rn=Ze`
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
`;var pc=Object.defineProperty,mc=Object.getOwnPropertyDescriptor,ua=(e,t,r,i)=>{for(var n=i>1?void 0:i?mc(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&pc(t,r,n),n};let cn=class extends Ke{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),cn.instance=this}disconnectedCallback(){super.disconnectedCallback(),cn.instance===this&&(cn.instance=null)}show(e,t){const r={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,r];const i=t?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),i)}dismiss(e){const t=this.toasts.find(r=>r.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(r=>r.id!==e)}render(){return M`
      ${this.toasts.map(e=>M`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${bc(e.kind)}</span>
            <span class="body">
              ${e.title?M`<strong>${e.title}</strong>`:""}${gc(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};cn.instance=null;cn.styles=[rn,Ze`
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
    `];ua([U()],cn.prototype,"toasts",2);cn=ua([ot("toast-host")],cn);function gc(e){const t=/(https?:\/\/[^\s)]+)/g,r=[];let i=0,n;for(;(n=t.exec(e))!==null;)n.index>i&&r.push(e.slice(i,n.index)),r.push({url:n[0]}),i=n.index+n[0].length;return i<e.length&&r.push(e.slice(i)),r.length===0?e:r.map(a=>typeof a=="string"?a:M`<a href=${a.url} target="_blank" rel="noopener noreferrer">${a.url}</a>`)}function bc(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function yc(){return{headerButtons:[],footerButtons:[],tableButtons:[],importers:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map}}function Dn(e,t){return e.push(t),()=>{const r=e.indexOf(t);r>=0&&e.splice(r,1)}}function Vi(e,t,r){return e.set(t,r),()=>{e.get(t)===r&&e.delete(t)}}function wc(e){return{registerHeaderButton:t=>Dn(e.headerButtons,t),registerFooterButton:t=>Dn(e.footerButtons,t),registerTableButton:t=>Dn(e.tableButtons,t),registerImporter:t=>Dn(e.importers,t),registerExporter:t=>Dn(e.exporters,t),registerUrlSource:t=>Dn(e.urlSources,t),registerDropHandler:t=>Dn(e.dropHandlers,t),registerCellRenderer:(t,r)=>Vi(e.cellRenderers,t,r),registerRowRenderer:(t,r)=>Vi(e.rowRenderers,t,r),registerTableRenderer:(t,r)=>Vi(e.tableRenderers,t,r),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},dialogs:vc}}const vc={async alert(e,t){const r=zt.instance;if(r)return r.alert(e,t);window.alert(e)},async confirm(e,t){const r=zt.instance;return r?r.confirm(e,t):window.confirm(e)},async prompt(e,t,r){const i=zt.instance;return i?i.prompt(e,t,r):window.prompt(e,t)??null},async choice(e,t,r){const i=zt.instance;if(i)return i.choice(e,t,r);const n=window.prompt(`${e}

Options: ${t.join(", ")}`);return n&&t.includes(n)?n:null},toast(e,t){const r=cn.instance;r?r.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}};function xc(e){const t=wc(e.registries),r=e.registries.rowSources,i=a=>(r.set(a.type,a),()=>{r.get(a.type)===a&&r.delete(a.type)}),n={open(a){return console.warn("[host] windows.open is stubbed until Phase 5",a.id),{id:a.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:n,registerRowSource:i,backend:{fetch:async(a,c)=>{const d=await $c(e.store),f=c?.body instanceof ArrayBuffer;if(!d||f)return globalThis.fetch(a,c);const y={url:a};return c?.method&&(y.method=c.method),c?.headers&&(y.headers=c.headers),typeof c?.body=="string"&&(y.body=c.body),globalThis.fetch(`${d}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)})},async saveFile(a,c,d){const f=typeof c=="string"?new Blob([c],{type:d??"application/octet-stream"}):c,y=URL.createObjectURL(f),k=document.createElement("a");k.href=y,k.download=a,k.rel="noopener",document.body.appendChild(k),k.click(),k.remove(),setTimeout(()=>URL.revokeObjectURL(y),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function $c(e){const r=(await e.settings.findOne("server-sync:url"))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}const kc={name:"csv-import",version:"0.1.0",description:"Drag-and-drop CSV files to create typed tables.",author:"easyDBAccess built-ins"};function Cc(e){e.ui.registerImporter(Ec),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const i=zc(t).filter(Lc);if(i.length===0)return!1;t.preventDefault();for(const n of i)await Sc(e,n);return!0})}const Ec={id:"csv",label:"CSV",accept:[".csv","text/csv"],async parse(e){const t=typeof e=="string"?e:await e.text();return vr(t)}};async function Sc(e,t){const r=t.name.replace(/\.csv$/i,"")||"imported";await ri(e,await t.text(),r)}async function ri(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("csv-import: no active workspace");const a=(r||"imported").replace(/\.csv$/i,"")||"imported",c=(await e.store.tables.find()).find(x=>x.workspaceId===n&&x.name===a);let d,f;if(c){const x=await e.ui.dialogs.choice(`A table named "${a}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!x)return;x==="Append rows"?(f="append",d=c.id):x==="Overwrite rows"?(f="overwrite",d=c.id):(f="new",d=Vr())}else f="new",d=Vr();e.events.emit("import:before",{source:"csv",tableId:d});let y;if(f==="new"){const x=vr(t);let I=x.columns,V=x.rows;if(i.editColumns){const H=await i.editColumns(I);if(H===null)return;V=Bc(V,I,H),I=H}i.maxRows!=null&&(V=V.slice(0,i.maxRows));const z=c?`${a} (${Date.now().toString(36)})`:a;await e.store.tables.insert({id:d,workspaceId:n,name:z,code:ns(z),columns:I,view:"table",...i.origin?{origin:i.origin}:{},updatedAt:Date.now()}),y=V.map(H=>({id:Vr(),tableId:d,data:H,updatedAt:Date.now()}))}else{const x=c.columns,I=da(t);if(y=(i.maxRows!=null?I.rows.slice(0,i.maxRows):I.rows).map(z=>{const H={};for(let se=0;se<x.length;se++){const ce=x[se];H[ce.field]=pa(z[se]??"",ce.type)}return{id:Vr(),tableId:d,data:H,updatedAt:Date.now()}}),f==="overwrite"){const z=e.store.rows(d),H=await z.find();await z.bulkRemove(H.map(se=>se.id))}}await e.store.rows(d).bulkInsert(y),e.events.emit("import:after",{source:"csv",tableId:d,rowCount:y.length})}function da(e){const t=e.replace(/﻿/,""),r=ha(t),i=fa(t,r);if(i.length===0)return{header:[],rows:[]};const n=i[0],a=i.slice(1).filter(c=>!(c.length===1&&c[0]===""));return{header:n,rows:a}}function vr(e){const t=e.replace(/﻿/,""),r=ha(t),i=fa(t,r);if(i.length===0)return{columns:[],rows:[]};const n=i[0],a=i.slice(1).filter(I=>!(I.length===1&&I[0]==="")),c=n.map((I,V)=>Pc(I,V)),d=ga(c.map(I=>I.field)),f=a.map(I=>{const V={};for(let z=0;z<d.length;z++)V[d[z]]=I[z]??"";return V}),y=c.map((I,V)=>I.type?I.type:Tc(f.map(z=>z[d[V]]??"").filter(z=>z.length>0))),k=c.map((I,V)=>{const z=y[V]??"string",H={field:d[V],label:I.label,type:z},se=Ac(z),ce=I.renderer??se;return ce&&(H.renderer=ce),I.default!==void 0&&(H.default=I.default),I.max!=null&&(H.max=I.max),I.unique&&(H.unique=!0),I.notnull&&(H.notnull=!0),I.hidden&&(H.hidden=!0),H}),x=f.map(I=>{const V={};for(let z=0;z<d.length;z++){const H=d[z],se=y[z]??"string";V[H]=pa(I[H]??"",se)}return V});return{columns:k,rows:x}}const _c=new Set(["string","number","boolean","date","datetime"]),go={color:"color",image:"image"};function Ac(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function Pc(e,t){const r=e.trim();if(!r.includes(":"))return{field:ns(r||`col_${t+1}`),label:r||`Column ${t+1}`};const i=r.split(":"),n=ns(i[0]||`col_${t+1}`),a=(i[1]??i[0]??"").trim()||n,c={field:n,label:a},d=(i[2]??"").trim();d&&(_c.has(d)?c.type=d:go[d]&&(c.type="string",c.renderer=go[d]));const f=(i[3]??"").trim();f&&(c.default=f);const y=(i[4]??"").trim();if(y){const x=Number(y);Number.isFinite(x)&&x>0&&(c.max=x)}const k=(i[5]??"").toLowerCase();return k.includes("u")&&(c.unique=!0),k.includes("n")&&(c.notnull=!0),k.includes("h")&&(c.hidden=!0),c}function ha(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),r={",":0,";":0,"	":0};for(const a of t)a in r&&(r[a]+=1);let i=",",n=-1;for(const a of[",",";","	"])(r[a]??0)>n&&(i=a,n=r[a]??0);return i}function fa(e,t){const r=[];let i=[],n="",a=!1;for(let c=0;c<e.length;c++){const d=e[c];a?d==='"'?e[c+1]==='"'?(n+='"',c++):a=!1:n+=d:d==='"'?a=!0:d===t?(i.push(n),n=""):d===`
`||d==="\r"?(d==="\r"&&e[c+1]===`
`&&c++,i.push(n),r.push(i),i=[],n=""):n+=d}return(n.length>0||i.length>0)&&(i.push(n),r.push(i)),r}function Tc(e){return e.length===0?"string":e.every(Ic)?"boolean":e.every(Rc)?"number":e.every(Oc)?"datetime":e.every(jc)?"date":"string"}const Dc=/^(true|false|yes|no|0|1)$/i;function Ic(e){return Dc.test(e.trim())}function Rc(e){const t=e.trim();if(t==="")return!1;const r=Number(t);return Number.isFinite(r)}function jc(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function Oc(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function pa(e,t){const r=e.trim();switch(t){case"number":{if(r==="")return null;const i=Number(r);return Number.isFinite(i)?i:r}case"boolean":return r===""?null:/^(true|yes|1)$/i.test(r);case"date":return ma(r);case"datetime":return Fc(r);default:return e}}function ma(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){let i=parseInt(t[1],10),n=parseInt(t[2],10);const a=t[3];let c=parseInt(a,10);a.length===2&&(c+=2e3);let d,f;return i>12?(d=i,f=n):n>12?(f=i,d=n):(d=i,f=n),`${c.toString().padStart(4,"0")}-${f.toString().padStart(2,"0")}-${d.toString().padStart(2,"0")}`}const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toISOString().slice(0,10)}function Fc(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),r=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(r)return`${r[1]}T${r[2].padStart(5,"0")}`;const i=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(i)return`${ma(`${i[1]}/${i[2]}/${i[3]}`)}T${i[4].padStart(5,"0")}`;const n=new Date(e);if(!Number.isNaN(n.getTime())){const a=n.toISOString();return`${a.slice(0,10)}T${a.slice(11,16)}`}return e}function zc(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function Lc(e){return!!(/\.csv$/i.test(e.name)||e.type==="text/csv"||e.type==="application/csv")}function ga(e){const t=new Map,r=new Set,i=[];for(const n of e){let a=n,c=t.get(n)??0;for(;r.has(a);)c+=1,a=`${n}_${c+1}`;t.set(n,c),r.add(a),i.push(a)}return i}function Bc(e,t,r){return e.map(i=>{const n={};for(let a=0;a<t.length;a++)n[r[a].field]=i[t[a].field];return n})}function ns(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function Vr(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Mc=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:ga,importCsvText:ri,init:Cc,meta:kc,parseCsv:vr,parseCsvRaw:da},Symbol.toStringTag,{value:"Module"})),Nc={name:"csv-export",version:"0.1.0",description:"Export a single table as a .csv file via a per-table button.",author:"easyDBAccess built-ins"},qc={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return ws(e,t)}};function Uc(e){e.ui.registerExporter(qc),e.ui.registerTableButton({id:"csv-export:download",label:"CSV",icon:"file_download",tooltip:"Download this table as a .csv file",onClick:async(t,r)=>{const i=await t.store.tables.findOne(r.tableId);if(!i)return;const n=await t.store.rows(i.id).find(),a=ws(i,n);await t.backend.saveFile(`${i.code||i.name||"table"}.csv`,a,"text/csv")}})}function ws(e,t){const r=e.columns.map(a=>a.field),i=e.columns.map(a=>bo(a.label??a.field)),n=t.map(a=>r.map(c=>bo(Hc(a.data[c]))).join(","));return[i.join(","),...n].join(`\r
`)}function Hc(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function bo(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const Wc=Object.freeze(Object.defineProperty({__proto__:null,init:Uc,meta:Nc,serializeCsv:ws},Symbol.toStringTag,{value:"Module"}));var Kc=Object.defineProperty,Vc=Object.getOwnPropertyDescriptor,Zn=(e,t,r,i)=>{for(var n=i>1?void 0:i?Vc(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Kc(t,r,n),n};function rs(e,t={}){return(Dt.instance??Yc()).open(e,t)}function Yc(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function Xc(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let Dt=class extends Ke{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((r,i)=>r?i:-1).filter(r=>r>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),Dt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Dt.instance===this&&(Dt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&nn(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(()=>!0),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(r=>{this.resolveFn=r,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return M`
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
            ${this.message?M`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            <ul class="tables">
              ${this.items.map((t,r)=>M`
                  <li>
                    <input
                      type="checkbox"
                      id=${`tsel-${r}`}
                      .checked=${this.selected[r]??!1}
                      @change=${()=>this.toggle(r)}
                    />
                    <label for=${`tsel-${r}`}>
                      <span class="name">${t.name}</span>
                      <span class="size">${Xc(t.size)}</span>
                      ${t.detail?M`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};Dt.instance=null;Dt.styles=[tn,Ze`
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
    `];Zn([U()],Dt.prototype,"items",2);Zn([U()],Dt.prototype,"selected",2);Zn([U()],Dt.prototype,"heading",2);Zn([U()],Dt.prototype,"message",2);Zn([U()],Dt.prototype,"confirmLabel",2);Dt=Zn([ot("table-select-dialog")],Dt);const Gc={name:"json-import",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"easyDBAccess built-ins"};function Qc(e){e.ui.registerImporter(Jc),e.ui.registerDropHandler(async t=>{const i=su(t).filter(ou);if(i.length===0)return!1;t.preventDefault();for(const n of i)await Zc(e,n);return!0})}const Jc={id:"json",label:"JSON",accept:[".json",".db.json","application/json"],async parse(e){const t=typeof e=="string"?e:await e.text(),r=JSON.parse(t),n=xr(r,"imported")[0];return{columns:n?.columns??[],rows:n?.rows??[]}}};async function Zc(e,t){await ii(e,await t.text(),t.name)}async function ii(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("json-import: no active workspace");let a;try{a=JSON.parse(t)}catch(z){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${r}: ${z.message}`)});return}const c=r.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",d=xr(a,c);if(d.length===0)return;let f=d;if(d.length>1){const z=await rs(d.map(H=>({name:H.name,size:H.rows.length})),{title:"Import tables",message:`"${r}" contains ${d.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!z)return;f=z.map(H=>d[H])}const y=(await e.store.tables.find()).filter(z=>z.workspaceId===n),k=new Set(f.map(z=>z.name)),x=y.filter(z=>k.has(z.name));let I;if(x.length===0&&f.length===1)I="append-new";else{const z=x.length>0?[`Overwrite matching (${x.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],H=await e.ui.dialogs.choice(`Importing ${f.length} table${f.length===1?"":"s"} from "${r}".${x.length>0?`

${x.length} table${x.length===1?"":"s"} share a name with existing data.`:""}`,z,"JSON import");if(!H)return;H.startsWith("Overwrite matching")?I="overwrite-matching":H==="Replace entire workspace"?I="replace-workspace":I="append-new"}if(I==="replace-workspace")for(const z of y){const H=e.store.rows(z.id),se=await H.find();await H.bulkRemove(se.map(ce=>ce.id)),await e.store.tables.remove(z.id)}const V=new Map(y.map(z=>[z.name,z]));for(const z of f){const H=z.source,se=z.origin??(!H&&i.originUrl?{type:"json",url:i.originUrl}:void 0);let ce;const Ce=I==="overwrite-matching"?V.get(z.name):void 0;if(Ce){if(ce=Ce.id,!Ce.source){const ie=e.store.rows(ce),oe=await ie.find();await ie.bulkRemove(oe.map(we=>we.id))}await e.store.tables.patch(ce,{columns:z.columns,...z.windowGeometry?{windowGeometry:z.windowGeometry}:{},...z.sortColumn?{sortColumn:z.sortColumn,sortAsc:z.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},source:H??void 0,origin:se??void 0,updatedAt:Date.now()})}else ce=xo(),e.events.emit("import:before",{source:"json",tableId:ce}),await e.store.tables.insert({id:ce,workspaceId:n,name:z.name,code:au(z.name),columns:z.columns,view:"table",...z.windowGeometry?{windowGeometry:z.windowGeometry}:{},...z.sortColumn?{sortColumn:z.sortColumn,sortAsc:z.sortAsc??!0}:{},...H?{source:H}:{},...se?{origin:se}:{},updatedAt:Date.now()});let Le=0;if(!H){const ie=e.store.rows(ce),we=(i.maxRows!=null?z.rows.slice(0,i.maxRows):z.rows).map(Pe=>({id:xo(),tableId:ce,data:Pe,updatedAt:Date.now()}));await ie.bulkInsert(we),Le=we.length}e.events.emit("import:after",{source:"json",tableId:ce,rowCount:Le})}}function xr(e,t){if(Tt(e)&&yo(e))return wo(e);if(Tt(e)&&Array.isArray(e.tables)){const r=e,i=[];for(const n of r.tables){if(tu(n)){const a=n,c=Tt(a.windowGeometry)?a.windowGeometry:void 0,d=typeof a.sortColumn=="string"?a.sortColumn:void 0,f=typeof a.sortAsc=="boolean"?a.sortAsc:void 0,y=Tt(a.source)&&typeof a.source.type=="string"?a.source:void 0,k=Tt(a.origin)&&typeof a.origin.type=="string"&&typeof a.origin.url=="string"?a.origin:void 0;i.push({name:String(n.name),columns:n.columns.map(nu),rows:Array.isArray(n.rows)?n.rows.filter(Tt):[],...c?{windowGeometry:c}:{},...d?{sortColumn:d,sortAsc:f??!0}:{},...y?{source:y}:{},...k?{origin:k}:{}});continue}Tt(n)&&yo(n)&&i.push(...wo(n))}return i}if(Array.isArray(e)){const r=e.filter(Tt);return r.length===0?[]:[{name:t,...vo(r)}]}return Tt(e)?[{name:t,...vo([e])}]:[]}function yo(e){for(const[t,r]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!Tt(r))continue;const i=r;if(Array.isArray(i.dataArray)&&Array.isArray(i.columns))return!0}return!1}function wo(e){const t=[];for(const[r,i]of Object.entries(e)){if(!/\.table\.json$/.test(r)||!Tt(i))continue;const n=i;if(!Array.isArray(n.dataArray)||!Array.isArray(n.columns))continue;const a=r.replace(/\.table\.json$/,""),c=n.columns.map(k=>eu(k)),d=c.map(k=>k.field),f=n.dataArray.filter(k=>Array.isArray(k)).map(k=>{const x={};for(let I=0;I<d.length;I++)x[d[I]]=k[I];return x}),y={name:a,columns:c,rows:f};if(n.elementRect&&typeof n.elementRect.x=="number"&&typeof n.elementRect.y=="number"){const k=n.elementRect;y.windowGeometry={x:k.x,y:k.y,w:k.width??600,h:k.height??400,z:k.zIndex??100,minimized:!!k.minimized,maximized:!!k.maximized}}typeof n.sortColumn=="number"&&n.sortColumn>=0&&n.sortColumn<d.length&&(y.sortColumn=d[n.sortColumn],y.sortAsc=(n.sortDirection??"asc")!=="desc"),t.push(y)}return t}function eu(e){const t=String(e.field??"col"),r=String(e.name??t),i=typeof e.type=="string"?e.type:"string",n={field:t,label:r,type:i};return e.isUnique&&(n.unique=!0),e.isNotNull&&(n.notnull=!0),n}function tu(e){return Tt(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function nu(e){if(!Tt(e))return{field:"col",label:"Col",type:"string"};const t=e,r=String(t.field??"col");let i=typeof t.type=="string"?t.type:"string",n=typeof t.renderer=="string"?t.renderer:void 0;(i==="color"||i==="image")&&(n=n??i,i="string");const a={field:r,label:String(t.label??r),type:i};return n&&(a.renderer=n),typeof t.script=="string"&&(a.script=t.script),a}function vo(e){const t=new Set;for(const n of e)for(const a of Object.keys(n))t.add(a);return{columns:Array.from(t).map(n=>({field:n,label:n,type:ru(e.map(a=>a[n]))})),rows:e}}function ru(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&iu(r))?"date":"string"}function iu(e){if(/^\d+$/.test(e))return!1;const t=new Date(e);return!Number.isNaN(t.getTime())}function Tt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function su(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function ou(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}function au(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function xo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const lu=Object.freeze(Object.defineProperty({__proto__:null,importJsonText:ii,init:Qc,meta:Gc,parsedToTables:xr},Symbol.toStringTag,{value:"Module"}));class Zt extends Error{constructor(t,r){const i=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(i),this.name="DatasetteError",this.status=r??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function Mn(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const r=t.pathname.split("/").filter(Boolean),i={};for(const[d,f]of t.searchParams)i[d]=f;let n,a=null,c=null;if(r.length>=2){c=decodeURIComponent(r[r.length-1]),a=decodeURIComponent(r[r.length-2]);const d=r.slice(0,r.length-2).join("/");n=t.origin+(d?"/"+d:"")}else r.length===1&&(a=decodeURIComponent(r[0])),n=t.origin;return{base:n,db:a,table:c,query:i}}function br(e,t={}){const r=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[i,n]of Object.entries({...e.query,...t}))n!=null&&r.searchParams.set(i,String(n));return r.toString()}function cu(e){const t=e?.next_url??null,r=e?.next,i=r!=null&&r!==!1?String(r):null,n=Array.isArray(e?.rows)?e.rows:[],a=Array.isArray(e?.columns)?e.columns:null;return{rows:n.map(d=>Array.isArray(d)&&a?Object.fromEntries(a.map((f,y)=>[f,d[y]])):d),nextUrl:t,nextToken:i,hasMore:t!=null||i!=null,truncated:e?.truncated===!0}}function uu(e,t=""){const r=String(e||"").toUpperCase();return r.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":r.includes("REAL")||r.includes("FLOA")||r.includes("DOUB")||r.includes("NUM")||r.includes("DEC")?"number":r.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function $o(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],r=Array.isArray(e?.columns)?e.columns.slice():[],i={},n=e?.column_details;if(Array.isArray(n))for(const d of n)i[d.column??d.name]=d;else n&&typeof n=="object"&&Object.assign(i,n);for(const d of r)d in i||(i[d]={});const c=(r.length?r:Object.keys(i)).map(d=>{const f=i[d]||{},y=f.is_pk===!0||f.is_pk===1||t.includes(d),k={field:d,label:ba(d),type:uu(f.sqlite_type??f.type,d)};return(f.notnull===!0||f.notnull===1||y)&&(k.notnull=!0),y&&(k.unique=!0),(f.hidden===!0||f.hidden===1)&&(k.hidden=!0),f.default!=null&&f.default!==""&&(k.default=f.default),k});if(t.length===0){const d=c.filter(f=>f.unique).map(f=>f.field);d.length&&t.push(...d)}return{columns:c,pks:t}}function ba(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function vs(e){const t=[],r=new Set;for(const i of e)for(const n of Object.keys(i))r.has(n)||(r.add(n),t.push(n));return t.map(i=>({field:i,label:ba(i),type:du(e.map(n=>n[i]))}))}function du(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&hu(r))?"datetime":"string"}function hu(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function fu(e){const t=new TextEncoder().encode(String(e));let r="";for(const i of t){const n=String.fromCharCode(i);/[A-Za-z0-9_-]/.test(n)?r+=n:r+="~"+i.toString(16).toUpperCase().padStart(2,"0")}return r}function pu(e,t){return!t||t.length===0?null:t.map(r=>fu(e[r])).join(",")}function mu(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],r=[];for(const i of t){if(typeof i=="string"){r.push(i);continue}if(i&&typeof i=="object"&&typeof i.name=="string"){if(i.name==="_memory")continue;r.push(typeof i.route=="string"&&i.route?i.route:i.name)}}return r}function gu(e,t){const r=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],i=[];for(const n of r){if(typeof n=="string"){i.push({db:t,table:n,count:null,hidden:!1,pks:[]});continue}n&&typeof n=="object"&&typeof n.name=="string"&&i.push({db:t,table:n.name,count:typeof n.count=="number"?n.count:null,hidden:n.hidden===!0,pks:Array.isArray(n.primary_keys)?n.primary_keys:[]})}return i}async function Gn(e,t){let r;try{r=await e(t)}catch(n){const a=n?.message||"network error";throw new Zt({error:`Couldn't reach ${t} (${a}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(r&&r.ok===!1){let n=null;try{n=await r.json()}catch{}throw new Zt(n&&typeof n=="object"?n:{error:`HTTP ${r.status} for ${t}`},r.status)}const i=await r.json();if(i&&i.ok===!1)throw new Zt(i,r.status);return i}async function ya(e,t){return mu(await Gn(e,`${t}/-/databases.json`))}async function ko(e,t,r){return gu(await Gn(e,`${t}/${encodeURIComponent(r)}.json`),r)}async function wa(e,t){const r=br(t,{_extra:"column_details"}),i=await Gn(e,r);let{columns:n,pks:a}=$o(i),c=!!i&&i.column_details!=null,d=i?.count??null,f=i;if(n.length===0){const y=br(t,{_extra:"columns"}),k=await Gn(e,y);({columns:n,pks:a}=$o(k)),c=!!k&&k.column_details!=null,d=k?.count??d,f=k}return{columns:n,pks:a,count:d,typed:c,raw:f}}function va(e,t){if(t.length===0)return e;const r=new Map(vs(t).map(i=>[i.field,i.type]));return e.map(i=>{if(i.type!=="string")return i;const n=r.get(i.field);return n&&n!=="string"?{...i,type:n}:i})}async function li(e,t,r={}){const i=r.maxRows??1e4,a={_size:r.pageSize??1e3,...r.extraParams||{}};let c=br(t,a);const d=[];let f=!1,y=!1,k=0;for(;c;){const x=await Gn(e,c),I=cu(x);d.push(...I.rows),f=f||I.truncated,k+=1,r.onProgress?.(d.length);const V=I.nextUrl!=null?I.nextUrl:I.nextToken!=null?br(t,{_next:I.nextToken}):null;V&&d.length<i&&I.rows.length>0?c=V:(y=V!=null&&I.rows.length>0,c=null)}return{rows:d,truncated:f,hasMore:y,pages:k}}function bu(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function xa(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function $a(e,t,r){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${r}`}async function ci(e,t,r,i){let n;try{n=await e(t,{method:"POST",headers:bu(i),body:JSON.stringify(r)})}catch(c){throw new Zt({error:`Couldn't reach ${t} (${c?.message||"network error"}).`},0)}if(n&&n.ok===!1){let c=null;try{c=await n.json()}catch{}throw new Zt(c&&typeof c=="object"?c:{error:`HTTP ${n.status} for ${t}`},n.status)}const a=await n.json();if(a&&a.ok===!1)throw new Zt(a,n.status);return a}async function Co(e,t,r,i={}){const n=await ci(e,xa(t,"insert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function yu(e,t,r,i,n={}){const a=await ci(e,$a(t,r,"update"),{update:i,return:!0},n.token);return a&&typeof a.row=="object"&&a.row?a.row:Array.isArray(a?.rows)&&a.rows[0]?a.rows[0]:null}async function Eo(e,t,r,i={}){await ci(e,$a(t,r,"delete"),{},i.token)}async function wu(e,t,r,i={}){const n=await ci(e,xa(t,"upsert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function vu(e,t){const r=br(t,{_extra:"primary_keys"}),i=await Gn(e,r);return Array.isArray(i?.primary_keys)?i.primary_keys:[]}async function ka(e,t,r={}){const i=r.token?{headers:{Authorization:`Bearer ${r.token}`}}:void 0;try{const n=await e(`${t}/-/versions.json`,i);if(n&&n.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${n.status}`};const a=await n.json(),c=a?.datasette?.version??a?.version??null;let d=null;try{d=(await(await e(`${t}/-/actor.json`,i)).json())?.actor??null}catch{}return{reachable:!0,version:c,actor:d,writable:!!(r.token&&d)}}catch(n){return{reachable:!1,version:null,actor:null,writable:!1,error:n?.message||"unreachable"}}}function ui(e,t){return t?(r,i)=>{const n=(i??{}).headers??{};return e(r,{...i??{},headers:{...n,Authorization:`Bearer ${t}`}})}:e}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ca=Symbol.for(""),xu=e=>{if(e?.r===Ca)return e?._$litStatic$},$u=e=>({_$litStatic$:e,r:Ca}),So=new Map,ku=e=>(t,...r)=>{const i=r.length;let n,a;const c=[],d=[];let f,y=0,k=!1;for(;y<i;){for(f=t[y];y<i&&(a=r[y],(n=xu(a))!==void 0);)f+=n+t[++y],k=!0;y!==i&&d.push(a),c.push(f),y++}if(y===i&&c.push(t[i]),k){const x=c.join("$$lit$$");(t=So.get(x))===void 0&&(c.raw=c,So.set(x,t=c)),r=d}return e(t,...r)},Cu=ku(M);var Eu=Object.defineProperty,Su=Object.getOwnPropertyDescriptor,di=(e,t,r,i)=>{for(var n=i>1?void 0:i?Su(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Eu(t,r,n),n};let Ut=class extends Ke{constructor(){super(...arguments),this.values=[],this.current="",this.search="",this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,r){return this.values=t,this.current=r,this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(i=>{this.resolveFn=i,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}close(e){document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),Ut.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),Ut.instance===this&&(Ut.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(r=>r.value.toLowerCase().includes(e));return M`
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
      ${t.length===0?M`<div class="empty">No matching values.</div>`:M`<ul>
            ${t.slice(0,500).map(r=>M`
                <li
                  class=${r.value===this.current?"selected":""}
                  @click=${()=>this.close(r.value)}
                >
                  <span class="label">${r.value||M`<em>(empty)</em>`}</span>
                  <span class="count">${r.count}</span>
                </li>
              `)}
          </ul>`}
      ${this.values.length>500?M`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      <div class="actions">
        <button class="text" @click=${()=>this.close({clear:!0})}>Clear filter</button>
        <span style="color:#6b7280">${t.length} value${t.length===1?"":"s"}</span>
      </div>
    `}};Ut.instance=null;Ut.styles=[rn,Ze`
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
    `];di([Bt({type:Array})],Ut.prototype,"values",2);di([Bt({type:String})],Ut.prototype,"current",2);di([U()],Ut.prototype,"search",2);Ut=di([ot("filter-popover")],Ut);var _u=Object.defineProperty,Au=Object.getOwnPropertyDescriptor,Wt=(e,t,r,i)=>{for(var n=i>1?void 0:i?Au(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&_u(t,r,n),n};let Rt=class extends Ke{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const r=t[this.highlightIdx];r!==void 0?(e.preventDefault(),this.onPick(r)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const r=[];for(const i of this.options)if(i.toLowerCase().includes(t)&&(r.push(i),r.length>=500))break;return r}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return M`
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
        ${this.value?M`<button
              type="button"
              class="clear"
              title="Clear filter"
              tabindex="-1"
              @mousedown=${r=>r.preventDefault()}
              @click=${this.onClear}
            >
              ×
            </button>`:ye}
      </div>
      ${this.open?M`<ul class="dropdown" style=${t}>
            ${e.length===0?M`<li class="empty">No matching values.</li>`:e.map((r,i)=>M`
                    <li
                      class=${i===this.highlightIdx?"highlighted":""}
                      @mousedown=${n=>n.preventDefault()}
                      @click=${()=>this.onPick(r)}
                    >
                      ${r}
                    </li>
                  `)}
          </ul>`:ye}
    `}};Rt.styles=Ze`
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
  `;Wt([Bt({type:String})],Rt.prototype,"value",2);Wt([Bt({type:Array})],Rt.prototype,"options",2);Wt([Bt({type:String})],Rt.prototype,"placeholder",2);Wt([U()],Rt.prototype,"open",2);Wt([U()],Rt.prototype,"highlightIdx",2);Wt([U()],Rt.prototype,"dropTop",2);Wt([U()],Rt.prototype,"dropLeft",2);Wt([U()],Rt.prototype,"dropMinWidth",2);Wt([U()],Rt.prototype,"editing",2);Wt([Jn("input")],Rt.prototype,"inputEl",2);Rt=Wt([ot("filter-combobox")],Rt);var Pu=Object.defineProperty,Tu=Object.getOwnPropertyDescriptor,ct=(e,t,r,i)=>{for(var n=i>1?void 0:i?Tu(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Pu(t,r,n),n};const Du=200;let et=class extends Ke{constructor(){super(...arguments),this.tableId="",this.viewInstanceId="",this.columns=[],this.rows=[],this.sortColumn=null,this.sortDir=null,this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.viewInst=null,this.tableColumns=[],this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;(t.tableId===this.tableId||this.viewMode&&t.tableId===this.viewInstanceId)&&(this.localQuery=t.query??"")},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}get viewMode(){return!!this.viewInstanceId}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.()}async updated(e){(e.has("tableId")||e.has("viewInstanceId"))&&this.tableId&&(this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.markEmptyCells()}markEmptyCells(){const e=this.shadowRoot?.querySelectorAll("tbody tr:not(.spacer) > td");if(e)for(const t of e)t.className.startsWith("t-")&&t.classList.toggle("is-null",Iu(t))}async bind(){if(!this.tableId)return;const e=await ge(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.viewMode?(this.tableColumns=t.columns,this.viewInst=await e.store.viewInstances.findOne(this.viewInstanceId)??null,this.applyView(),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const a=n.find(c=>c.id===this.tableId);a&&(this.tableColumns=a.columns,this.applyView())}),this.viewSubUnsub?.(),this.viewSubUnsub=e.store.viewInstances.subscribe(n=>{const a=n.find(c=>c.id===this.viewInstanceId);a&&(this.viewInst=a,this.applyView())})):(this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const a=n.find(c=>c.id===this.tableId);a&&this.applyTable(a)})),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const r=e.store.rows(this.tableId);this.unsubscribe=r.subscribe(n=>this.rows=n);const i=window.setTimeout(()=>this.loading=!0,Du);try{this.rows=await r.find()}catch(n){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${n?.message??String(n)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(i),this.loading=!1}}applyTable(e){this.columns=e.columns,this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filters={...e.filters??{}}}applyView(){const e=this.viewInst;if(!e)return;const t=new Map(this.tableColumns.map(i=>[i.field,i])),r=e.columnWidths??{};this.columns=e.visibleColumns.map(i=>t.get(i)).filter(i=>!!i).map(i=>{const n=r[i.field];return typeof n=="number"?{...i,width:n}:i}),this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filters={...e.filters??{}}}async setCell(e,t,r){const i=await ge();await this.commitCell(i,e,t,r)}async commitCell(e,t,r,i){const n=this.columns.find(a=>a.field===r);if(n){const a=Ru(n,i,this.rows,t.id);if(a){await e.api.ui.dialogs.alert(a,`Cannot save ${n.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[r]:i},updatedAt:Date.now()})}catch(a){await e.api.ui.dialogs.alert(a?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}renderCell(e,t){const r=e.data[t.field],i=t.renderer,n=i?this.cellRenderers?.get(i):void 0;if(n){const a=$u(n);return Cu`<${a}
        .value=${r??""}
        .column=${t}
        .row=${e.data}
        @change=${c=>this.setCell(e,t.field,c.detail.value)}
      ></${a}>`}switch(t.type){case"boolean":return M`<input
          type="checkbox"
          .checked=${r===!0||r==="true"||r===1||r==="1"}
          @change=${c=>this.setCell(e,t.field,c.target.checked)}
        />`;case"date":return M`<input
          type="date"
          .value=${ju(r)}
          @change=${a=>this.setCell(e,t.field,a.target.value||null)}
        />`;case"datetime":return M`<input
          type="datetime-local"
          .value=${Ou(r)}
          @change=${a=>this.setCell(e,t.field,a.target.value||null)}
        />`;case"number":return M`<input
          type="number"
          .value=${r==null?"":String(r)}
          @change=${a=>{const c=a.target.value;this.setCell(e,t.field,c===""?null:Number(c))}}
        />`;default:return M`<input
          type="text"
          .value=${String(r??"")}
          @change=${a=>this.setCell(e,t.field,a.target.value)}
        />`}}async deleteRow(e){const t=await ge();try{await t.store.rows(this.tableId).remove(e)}catch(r){await t.api.ui.dialogs.alert(r?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e){let t;this.sortColumn!==e?t="asc":this.sortDir==="asc"?t="desc":this.sortDir==="desc"?t=null:t="asc",this.sortColumn=t?e:null,this.sortDir=t;const r=await ge(),i=t?{sortColumn:e,sortAsc:t==="asc",updatedAt:Date.now()}:{sortColumn:void 0,sortAsc:void 0,updatedAt:Date.now()};this.viewMode?await r.store.viewInstances.patch(this.viewInstanceId,i):await r.store.tables.patch(this.tableId,i)}filteredRows(){const e=Object.entries(this.filters).filter(([,i])=>i&&i.trim().length>0),t=this.globalQuery.trim().toLowerCase(),r=this.localQuery.trim().toLowerCase();return e.length===0&&t.length===0&&r.length===0?this.rows:this.rows.filter(i=>{const n=a=>Object.values(i.data).some(c=>c!=null&&String(c).toLowerCase().includes(a));return t.length>0&&!n(t)||r.length>0&&!n(r)?!1:e.every(([a,c])=>String(i.data[a]??"").toLowerCase().includes(c.toLowerCase()))})}sortedRows(){const e=this.filteredRows();if(!this.sortColumn||!this.sortDir)return e;const t=this.sortColumn,i=this.columns.find(c=>c.field===t)?.type??"string",n=this.sortDir==="asc"?1:-1,a=[...e];return a.sort((c,d)=>{const f=c.data[t],y=d.data[t],k=V=>V==null?0:V===""?1:2,x=k(f),I=k(y);return x!==2||I!==2?(x-I)*n:Fu(f,y,i)*n}),a}async openFilterPicker(e,t){e.stopPropagation();const r=e.currentTarget,i=Ut.instance;if(!i)return;const n=new Map;for(const d of this.rowsFacetedFor(t)){const f=d.data[t];if(f==null)continue;const y=String(f);n.set(y,(n.get(y)??0)+1)}const a=[...n.entries()].map(([d,f])=>({value:d,count:f})).sort((d,f)=>f.count-d.count||d.value.localeCompare(f.value)),c=await i.open(r.getBoundingClientRect(),a,this.filters[t]??"");c!==null&&(typeof c=="object"&&"clear"in c?this.onFilterInput(t,""):typeof c=="string"&&this.onFilterInput(t,c))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>this.saveFilters(),250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=Object.entries(this.filters).filter(([r,i])=>i&&i.trim().length>0&&r!==e).map(([r,i])=>[r,i.trim().toLowerCase()]);return t.length===0?this.rows:this.rows.filter(r=>t.every(([i,n])=>String(r.data[i]??"").toLowerCase().includes(n)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const r=50,i=500;for(const n of this.visibleColumns){let a=!0;for(const d of t){const f=d.data[n.field];if(f==null)continue;if((typeof f=="string"?f:String(f)).length>=r){a=!1;break}}if(!a)continue;const c=new Set;for(const d of this.rowsFacetedFor(n.field)){const f=d.data[n.field];if(f==null||f==="")continue;const y=typeof f=="string"?f:String(f);if(!(y.length>=r)&&(c.add(y),c.size>=i))break}e.set(n.field,[...c].sort())}return e}onResizeStart(e,t,r){e.preventDefault(),e.stopPropagation();const i=r.offsetWidth;this.resizing={field:t,startX:e.clientX,startW:i};const n=c=>{if(!this.resizing)return;const d=c.clientX-this.resizing.startX,f=Math.max(40,this.resizing.startW+d);this.columns=this.columns.map(y=>y.field===this.resizing.field?{...y,width:f}:y)},a=async()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",a);const c=this.resizing?.field;if(this.resizing=null,!c)return;const d=await ge();if(this.viewMode){const f=this.columns.find(k=>k.field===c)?.width,y={...this.viewInst?.columnWidths??{}};typeof f=="number"&&(y[c]=f),await d.store.viewInstances.patch(this.viewInstanceId,{columnWidths:y,updatedAt:Date.now()})}else await d.store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",n),window.addEventListener("pointerup",a)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,r){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientX<i.left+i.width/2;this.dropTargetField=t,this.dropEdge=n?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const r=this.dragSourceField,i=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!r||r===t||!i)return;const n=[...this.columns],a=n.findIndex(y=>y.field===r);if(a<0)return;const[c]=n.splice(a,1);let d=n.findIndex(y=>y.field===t);if(d<0){n.splice(a,0,c);return}i==="after"&&(d+=1),n.splice(d,0,c);const f=await ge();this.viewMode?await f.store.viewInstances.patch(this.viewInstanceId,{visibleColumns:n.map(y=>y.field),updatedAt:Date.now()}):await f.store.tables.patch(this.tableId,{columns:n,updatedAt:Date.now()})}async saveFilters(){const e=await ge(),t={};for(const[i,n]of Object.entries(this.filters))n&&n.trim().length>0&&(t[i]=n);if(this.viewMode){await e.store.viewInstances.patch(this.viewInstanceId,{filters:t,updatedAt:Date.now()});return}const r=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:r,updatedAt:Date.now()})}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,r=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,i=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),n=Math.min(e.length,i+r);return{slice:e.slice(i,n),topPad:i*t,bottomPad:(e.length-n)*t}}render(){const e=this.sortedRows(),t=this.visibleColumns,{slice:r,topPad:i,bottomPad:n}=this.virtualSlice(e),a=this.computeFilterSuggestions(),c=this.externalLoading?this.externalProgress:null;return M`
      ${this.loading||this.externalLoading?M`<div
            class="load-bar"
            role="progressbar"
            aria-label="Loading rows"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow=${c!=null?Math.round(c*100):ye}
          >
            <div
              class="load-bar-fill ${c!=null?"determinate":""}"
              style=${c!=null?`width:${Math.max(2,Math.round(c*100))}%`:ye}
            ></div>
          </div>`:ye}
      <table>
        <colgroup>
          ${t.map(d=>M`<col style=${d.width!=null?`width: ${d.width}px`:""} />`)}
          <col style="width:2rem" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(d=>{const f=this.sortColumn===d.field&&this.sortDir,y=f==="asc"?"▲":f==="desc"?"▼":"⇅",k=`t-${d.type}`,x=this.dragSourceField===d.field,I=this.dropTargetField===d.field,V=I&&this.dropEdge==="before"?" drop-before":I&&this.dropEdge==="after"?" drop-after":"";return M`
                <th
                  class=${`${k}${f?" sorted":""}${x?" drag-source":""}${V}`}
                  title=${`${d.field} — click to sort, drag to reorder`}
                  draggable="true"
                  @click=${()=>this.toggleSort(d.field)}
                  @dragstart=${z=>this.onColDragStart(z,d.field)}
                  @dragover=${z=>this.onColDragOver(z,d.field,z.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(d.field)}
                  @drop=${z=>this.onColDrop(z,d.field)}
                  @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                >
                  ${d.label}<span class="sort-icon">${y}</span>
                  <button
                    class=${`funnel${this.filters[d.field]?" active":""}`}
                    title="Filter by value"
                    @click=${z=>this.openFilterPicker(z,d.field)}
                  >
                    <span class="mi sm">filter_list</span>
                  </button>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${z=>z.stopPropagation()}
                    @pointerdown=${z=>this.onResizeStart(z,d.field,z.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:2rem"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(d=>{const f=a.get(d.field)??[];return M`
                <th>
                  <filter-combobox
                    .value=${this.filters[d.field]??""}
                    .options=${f}
                    placeholder="filter…"
                    @filter-change=${y=>this.onFilterInput(d.field,y.detail.value)}
                  ></filter-combobox>
                </th>
              `})}
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${i>0?M`<tr class="spacer" style=${`height:${i}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${r.map(d=>M`
              <tr>
                ${t.map(f=>M`<td class=${`t-${f.type}${f.renderer?` r-${f.renderer}`:""}`}>
                      ${this.renderCell(d,f)}
                    </td>`)}
                <td>
                  <button class="danger" title="Delete row" @click=${()=>this.deleteRow(d.id)}>
                    <span class="mi sm">delete</span>
                  </button>
                </td>
              </tr>
            `)}
          ${n>0?M`<tr class="spacer" style=${`height:${n}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
        </tbody>
      </table>
    `}};et.styles=[rn,Ze`
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
    `];ct([Bt({type:String})],et.prototype,"tableId",2);ct([Bt({type:String})],et.prototype,"viewInstanceId",2);ct([U()],et.prototype,"columns",2);ct([U()],et.prototype,"rows",2);ct([U()],et.prototype,"sortColumn",2);ct([U()],et.prototype,"sortDir",2);ct([U()],et.prototype,"filters",2);ct([U()],et.prototype,"globalQuery",2);ct([U()],et.prototype,"localQuery",2);ct([U()],et.prototype,"dragSourceField",2);ct([U()],et.prototype,"dropTargetField",2);ct([U()],et.prototype,"dropEdge",2);ct([U()],et.prototype,"resizing",2);ct([U()],et.prototype,"cellRenderers",2);ct([U()],et.prototype,"scrollY",2);ct([U()],et.prototype,"viewportHeight",2);ct([U()],et.prototype,"loading",2);ct([U()],et.prototype,"externalLoading",2);ct([U()],et.prototype,"externalProgress",2);et=ct([ot("data-table")],et);function Iu(e){if((e.textContent??"").trim()!==""||e.querySelector("img"))return!1;const t=e.querySelectorAll("input");for(const r of Array.from(t))if(r.type==="checkbox"||r.value!=="")return!1;return!0}function Ru(e,t,r,i){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&r.find(a=>a.id!==i&&a.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function ju(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function Ou(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}function Fu(e,t,r){switch(r){case"number":{const i=Number(e),n=Number(t);return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}case"boolean":return(e?1:0)-(t?1:0);case"date":{const i=new Date(String(e)).getTime(),n=new Date(String(t)).getTime();return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function Yi(e,t,r){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:r}}))}class zu extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function Ea(e){return`datasette:token:${e}`}function Lu(e,t){for(const[r,i]of Object.entries(t))if(r!=="data"&&e[r]!==i)return!1;return!0}function Bu(e,t){const r=e.source,i=r?.config??{},n={base:i.base,db:i.db,table:i.table,query:{}},a=Array.isArray(i.pks)&&i.pks.length>0?i.pks:["rowid"],c=r?.writable===!0,d=i.maxRows??1e4,f=i.pollIntervalMs??0,y=(ie,oe)=>t.backend.fetch(ie,oe);async function k(){const oe=(await t.settings.findOne(Ea(i.base)))?.value;return typeof oe=="string"&&oe.length>0?oe:void 0}const x=async(ie,oe)=>ui(y,await k())(ie,oe);function I(ie){return{id:pu(ie,a)??Mu(),tableId:e.id,data:ie,updatedAt:Date.now()}}function V(ie){if(!c)throw new zu(ie)}function z(ie){const oe={};for(const[we,Pe]of Object.entries(ie))a.includes(we)||(oe[we]=Pe);return oe}const H=new Set;let se=[],ce=!1,Ce=null;function Le(){return Ce||(Ce=(async()=>{try{const{rows:ie}=await li(x,n,{maxRows:d});se=ie.map(I),ce=!0;for(const oe of H)oe(se);return se}finally{Ce=null}})(),Ce)}return{async find(ie){const oe=ce?se:await Le();return!ie||Object.keys(ie).length===0?oe:oe.filter(we=>Lu(we,ie))},async findOne(ie){return(ce?se:await Le()).find(we=>we.id===ie)??null},async insert(ie){V("insert");const[oe]=await Co(x,n,[ie.data]),we=I(oe??ie.data);return t.events.emit("row:created",{tableId:e.id,row:we}),Le(),we},async bulkInsert(ie){if(ie.length===0)return[];V("insert");const oe=await Co(x,n,ie.map(Pe=>Pe.data)),we=(oe.length?oe:ie.map(Pe=>Pe.data)).map(I);return Le(),we},async upsert(ie){V("upsert");const[oe]=await wu(x,n,[ie.data]),we=I(oe??ie.data);return Le(),we},async patch(ie,oe){V("update");const we=oe.data,Pe=z(we??{}),at=await yu(x,n,ie,Pe),Ct=I(at??{...we??{}});return t.events.emit("row:updated",{tableId:e.id,row:Ct,prev:Ct}),Le(),Ct},async remove(ie){V("delete"),await Eo(x,n,ie),t.events.emit("row:deleted",{tableId:e.id,rowId:ie}),Le()},async bulkRemove(ie){if(ie.length!==0){V("delete");for(const oe of ie)await Eo(x,n,oe);Le()}},subscribe(ie){H.add(ie),ce?ie(se):Le();let oe=null;return f>0&&(oe=setInterval(()=>void Le(),f)),()=>{H.delete(ie),oe&&clearInterval(oe)}},async refresh(){await Le()}}}function Mu(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var Nu=Object.defineProperty,qu=Object.getOwnPropertyDescriptor,$r=(e,t,r,i)=>{for(var n=i>1?void 0:i?qu(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Nu(t,r,n),n};const Uu="https://latest.datasette.io/ephemeral";let Lt=class extends Ke{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();t&&this.finish({url:t,token:this.token.trim()})}}connectedCallback(){super.connectedCallback(),Lt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Lt.instance===this&&(Lt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&nn(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return M`
      <dialog @cancel=${this.onCancel} @keydown=${kn}>
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
                placeholder="e.g. ${Uu}"
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
    `}};Lt.instance=null;Lt.styles=[tn,Ze`
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
    `];$r([U()],Lt.prototype,"url",2);$r([U()],Lt.prototype,"token",2);$r([U()],Lt.prototype,"status",2);$r([U()],Lt.prototype,"statusKind",2);Lt=$r([ot("datasette-connect-dialog")],Lt);const is=e=>e.replace(/^https?:\/\//,"");async function Sa(e,t,r,i={}){if(t.db&&t.table)return[{db:t.db,table:t.table,count:null,hidden:!1,pks:[]}];let n=[];if(t.db){for(const d of await ko(e,t.base,t.db))d.hidden||n.push(d);if(i.skipPicker)return n}else{const d=await ya(e,t.base);if(d.length===0)return[];let f=d;if(d.length>1){const y=await rs(d.map(k=>({name:k,size:null})),{title:`${r} from Datasette`,message:`Choose databases on ${is(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!y)return null;f=y.map(k=>d[k])}for(const y of f)try{for(const k of await ko(e,t.base,y))k.hidden||n.push(k)}catch{}}if(n.length===0)return[];const a=new Set(n.map(d=>d.db)).size>1,c=await rs(n.map(d=>({name:a?`${d.db}/${d.table}`:d.table,size:d.count,detail:a?void 0:d.db})),{title:`${r} from Datasette`,message:`Choose tables to ${r.toLowerCase()} from ${is(t.base)}.`,confirmLabel:r});return c?c.map(d=>n[d]):null}const Hu='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Wu={name:"datasette-source",version:"0.2.0",description:"Import tables from any online Datasette instance, database, or single table by URL",author:"easyDBAccess built-ins",optional:!0},Rn={maxImportRows:1e4,pageSize:1e3},Ku="https://latest.datasette.io/fixtures/facetable";function Vu(e){e.ui.registerHeaderButton({id:"datasette:connect",label:"Connect",icon:Hu,tooltip:"Connect a live, editable Datasette table",onClick:()=>Zu(e)}),e.ui.registerTableButton({id:"datasette:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from its Datasette backend",visible:t=>t.source?.type==="datasette"||t.origin?.type==="datasette",onClick:(t,{tableId:r})=>rd(t,r)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:Bu}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:r}){const i=r||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${Ku}`,"","Import from Datasette");i&&await _o(t,i)}}),e.ui.registerDropHandler(async(t,r)=>{const i=t.dataTransfer?.getData("text/plain")||"";return Yu(i)?(t.preventDefault(),await _o(r,i),!0):!1})}async function _o(e,t){try{await xs(e,t)}catch(r){let i;r instanceof Zt?i=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:i=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(i,"Datasette import failed")}}function Yu(e){try{const t=Mn(e);return!!(t.db&&t.table)}catch{return!1}}function Xu(e,t){if(!e.has(t))return t;for(let r=2;;r++){const i=`${t} (${r})`;if(!e.has(i))return i}}async function xs(e,t,r={}){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=Mn(t),c=await Sa(V=>e.backend.fetch(V),n,"Import",{skipPicker:r.skipTablePicker});if(c===null)return;if(c.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const d=[];let f=0;for(const V of c){const z={base:n.base,db:V.db,table:V.table,query:{}},H=await Gu(e,i,z);if(H.skipped){f+=1;continue}d.push({tableId:H.tableId,ref:z,overwrite:H.overwrite})}let y=0,k=0;const x=[],I=[];for(const V of d)try{const z=await Qu(e,V.tableId,V.ref,V.overwrite);y+=1,k+=z.rowCount,(z.hasMore||z.truncated)&&x.push(`${V.ref.db}/${V.ref.table}`)}catch(z){I.push(`${V.ref.db}/${V.ref.table}: ${z?.message??String(z)}`)}Ju(e,{imported:y,skipped:f,totalRows:k,capped:x,failed:I,requested:c.length})}async function Gu(e,t,r){const i=`${r.db}/${r.table}`,n={type:"datasette",url:`${r.base}/${encodeURIComponent(r.db)}/${encodeURIComponent(r.table)}`},a=(await e.store.tables.find()).filter(y=>y.workspaceId===t),c=a.find(y=>y.name===i);let d=i;if(c){const y=await e.ui.dialogs.choice(`A table named "${i}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!y||y==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(y==="Overwrite")return await e.store.tables.patch(c.id,{origin:n,updatedAt:Date.now()}),{tableId:c.id,overwrite:!0};d=Xu(new Set(a.map(k=>k.name)),i)}const f=hi();return await e.store.tables.insert({id:f,workspaceId:t,name:d,code:Aa(`${r.db}-${r.table}`),columns:[],view:"table",origin:n,updatedAt:Date.now()}),{tableId:f,overwrite:!1}}async function Qu(e,t,r,i){const n=`${r.db}/${r.table}`,a=c=>e.backend.fetch(c);Yi(t,!0);try{let c=[],d=null,f=!1;try{const Ce=await wa(a,r);c=Ce.columns,d=Ce.count,f=Ce.typed}catch{}const y=d&&d>0?Math.min(d,Rn.maxImportRows):0,{rows:k,truncated:x,hasMore:I,pages:V}=await li(a,r,{maxRows:Rn.maxImportRows,pageSize:Rn.pageSize,onProgress:Ce=>{y>0&&Yi(t,!0,Math.min(1,Ce/y))}}),z=c.length===0?vs(k):f?c:va(c,k),H=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t}),await e.store.tables.patch(t,{columns:z,updatedAt:H});const se=e.store.rows(t);if(i){const Ce=await se.find();await se.bulkRemove(Ce.map(Le=>Le.id))}const ce=k.map(Ce=>({id:hi(),tableId:t,data:Ce,updatedAt:H}));return await se.bulkInsert(ce),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:k.length}),{name:n,rowCount:k.length,hasMore:I,truncated:x,pages:V,count:d}}finally{Yi(t,!1)}}function Ju(e,t){const r=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,i=`${t.imported} table${t.imported===1?"":"s"}`,n=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${i} (${r});${n} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.capped.length>0){e.ui.dialogs.toast(`Imported ${i} (${r}).${n} ${t.capped.length} capped at ${Rn.maxImportRows} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${i} (${r}) from Datasette.${n}`,{kind:"success",title:"Datasette import"})}async function Zu(e){const t=Lt.instance??ed(),r=(n,a)=>e.backend.fetch(n,a),i=await t.open({initialUrl:"https://datasette.io",async onTest(n,a){const c=Mn(n),d=await ka(r,c.base,{token:a||void 0});if(!d.reachable)return`Unreachable: ${d.error??"no response"}`;const f=d.version?` (Datasette ${d.version})`:"";return d.writable?`Reachable${f} — signed in, read-write.`:`Reachable${f} — read-only (no token / not authenticated).`}});if(i)try{await _a(e,i.url,i.token)}catch(n){const a=n instanceof Zt?n.message:n?.message??String(n);await e.ui.dialogs.alert(a,"Connect Datasette failed")}}function ed(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function _a(e,t,r){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=Mn(t),a=(x,I)=>e.backend.fetch(x,I),c=ui(a,r||void 0),d=await ka(a,n.base,{token:r||void 0});r&&await e.store.settings.upsert({key:Ea(n.base),value:r});let f;try{f=await Sa(c,n,"Connect")}catch(x){const I=x instanceof Zt?x.message:x?.message??String(x);throw new Error(`Couldn't read tables from ${is(n.base)}: ${I}`)}if(f===null)return;if(f.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const y=[];for(const x of f){const I=await td(e,i,n.base,x,d.writable,r);y.push({tableId:I,c:x})}const k=d.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${y.length} live table${y.length===1?"":"s"} from Datasette (${k}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:x,c:I}of y)nd(e,x,n.base,I,r)}async function td(e,t,r,i,n,a){const c=(await e.store.tables.find()).find(k=>{const x=k.source?.config;return k.workspaceId===t&&k.source?.type==="datasette"&&x?.base===r&&x?.db===i.db&&x?.table===i.table});let d=i.pks??[];if(d.length===0){const k=ui((x,I)=>e.backend.fetch(x,I),a||void 0);try{d=await vu(k,{base:r,db:i.db,table:i.table,query:{}})}catch{d=[]}}const f=c?.id??hi(),y={...c??{},id:f,workspaceId:t,name:`${i.db}/${i.table}`,code:Aa(`${i.db}-${i.table}`),columns:c?.columns??[],view:c?.view??"table",source:{type:"datasette",writable:n,config:{base:r,db:i.db,table:i.table,pks:d}},updatedAt:Date.now()};return c?await e.store.tables.upsert(y):await e.store.tables.insert(y),f}async function nd(e,t,r,i,n){const a={base:r,db:i.db,table:i.table,query:{}},c=ui((d,f)=>e.backend.fetch(d,f),n||void 0);try{let d=[],f=!1;try{const z=await wa(c,a);d=z.columns,f=z.typed}catch{}const{rows:y}=await li(c,a,{maxRows:50,pageSize:50}),k=d.length===0?vs(y):f?d:va(d,y);if(k.length===0)return;const x=await e.store.tables.findOne(t);if(!x)return;const I=x.source?.config?.pks??[],V=k.map(z=>I.includes(z.field)?{...z,unique:!0,notnull:!0}:z);await e.store.tables.patch(t,{columns:V,updatedAt:Date.now()})}catch{}}async function rd(e,t){const r=await e.store.tables.findOne(t);if(r)try{if(r.source?.type==="datasette"){const i=e.store.rows(t);typeof i.refresh=="function"&&await i.refresh();const n=await i.find();e.ui.dialogs.toast(`Reloaded ${n.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}else r.origin?.type==="datasette"&&await id(e,r)}catch(i){const n=i instanceof Zt?i.message:i?.message??String(i);e.ui.dialogs.toast(`Refresh failed: ${n}`,{kind:"error",title:"Refresh"})}}async function id(e,t){const r=Mn(t.origin.url),i=x=>e.backend.fetch(x),{rows:n,hasMore:a,truncated:c}=await li(i,r,{maxRows:Rn.maxImportRows,pageSize:Rn.pageSize}),d=Date.now(),f=e.store.rows(t.id),y=await f.find();await f.bulkRemove(y.map(x=>x.id)),await f.bulkInsert(n.map(x=>({id:hi(),tableId:t.id,data:x,updatedAt:d}))),await e.store.tables.patch(t.id,{updatedAt:d});const k=a||c?` (capped at ${Rn.maxImportRows})`:"";e.ui.dialogs.toast(`Refreshed ${n.length} rows from ${r.db}/${r.table}${k}.`,{kind:a||c?"warning":"success",title:"Refresh"})}function Aa(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function hi(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const sd=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:_a,importDatasette:xs,init:Vu,meta:Wu},Symbol.toStringTag,{value:"Module"})),od={name:"dump-export",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file.",author:"easyDBAccess built-ins"};function ad(e){e.ui.registerFooterButton({id:"dump-export:dump",label:"Dump",icon:"archive",tooltip:"Export the current workspace as a JSON dump file",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await fi(e);await e.backend.saveFile(`workspace-${t}.db.json`,r,"application/json")}})}async function fi(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),i={workspaceId:t,exportedAt:Date.now(),tables:[]};for(const n of r){const a=await e.store.rows(n.id).find();i.tables.push({name:n.name,columns:n.columns,rows:a.map(c=>c.data),...n.windowGeometry?{windowGeometry:n.windowGeometry}:{},...n.sortColumn?{sortColumn:n.sortColumn,sortAsc:n.sortAsc??!0}:{},...n.source?{source:n.source}:{},...n.origin?{origin:n.origin}:{}})}return JSON.stringify(i,null,2)}const ld=Object.freeze(Object.defineProperty({__proto__:null,init:ad,meta:od,serializeWorkspace:fi},Symbol.toStringTag,{value:"Module"})),cd={name:"sql-export",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"easyDBAccess built-ins"};function ud(e){e.ui.registerFooterButton({id:"sql-export:dump",label:"SQL",icon:"storage",tooltip:"Export the current workspace as a .sql script",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await Pa(e);await e.backend.saveFile(`workspace-${t}.sql`,r,"application/sql")}})}async function Pa(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),i=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const n of r){const a=await e.store.rows(n.id).find();i.push(dd(n,a),"")}return i.push("COMMIT;",""),i.join(`
`)}function dd(e,t){const r=ss(e.code||e.name||`table_${e.id}`),i=['  "__id" TEXT PRIMARY KEY',...e.columns.map(a=>`  ${hd(a)}`)],n=[`DROP TABLE IF EXISTS "${r}";`,`CREATE TABLE "${r}" (`,i.join(`,
`),");"];if(t.length>0){const c=["__id",...e.columns.map(d=>d.field)].map(d=>`"${ss(d)}"`).join(", ");for(const d of t){const f=[Ao(d.id),...e.columns.map(y=>Ao(d.data[y.field],y.type))];n.push(`INSERT INTO "${r}" (${c}) VALUES (${f.join(", ")});`)}}return n.join(`
`)}function hd(e){const t=[`"${ss(e.field)}"`,fd(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function fd(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function Ao(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const r=pd(e);return r===null?"NULL":Yr(r)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?Yr(e.toISOString()):Yr(typeof e=="string"?e:JSON.stringify(e))}function pd(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?Po(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(r)return`${r[1]}${r[2]}${r[3]}`;const i=new Date(t);return Number.isFinite(i.getTime())?Po(i):null}return null}function Po(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),r=String(e.getUTCMonth()+1).padStart(2,"0"),i=String(e.getUTCDate()).padStart(2,"0");return`${t}${r}${i}`}function Yr(e){return`'${e.replace(/'/g,"''")}'`}function ss(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const md=Object.freeze(Object.defineProperty({__proto__:null,init:ud,meta:cd,serializeWorkspaceAsSql:Pa},Symbol.toStringTag,{value:"Module"})),gd={name:"gist-sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"easyDBAccess built-ins"},bd="gist:";function yd(e){e.ui.registerFooterButton({id:"gist-sync:push",label:"Push",icon:"cloud_upload",tooltip:"Push the current workspace to a GitHub Gist",onClick:async()=>{try{await xd(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerFooterButton({id:"gist-sync:pull",label:"Pull",icon:"cloud_download",tooltip:"Pull the latest tables from the configured Gist",onClick:async()=>{try{await $d(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}})}async function Ta(e){const t=e.workspaceId();return`${bd}${t??"default"}`}async function wd(e){const t=await Ta(e),r=await e.store.settings.findOne(t);if(!r)return null;const i=r.value;return!i||!i.token||!i.user?null:{user:i.user,gistId:i.gistId??"",token:i.token}}async function Da(e,t){const r=await Ta(e);await e.store.settings.upsert({key:r,value:t})}function vd(e){const t={};for(const r of e.split(";")){const i=r.indexOf("=");if(i<0)continue;const n=r.slice(0,i).trim(),a=r.slice(i+1).trim();n&&(t[n]=a)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function Ia(e){const t=await wd(e);if(t)return t;const r=await e.ui.dialogs.prompt(`Connection string format:
user=<github-user>;gist_id=<id>;gist_token=<pat>;

Leave gist_id empty to create a new gist on first Push.`,"","Gist credentials");if(!r)return null;const i=vd(r);return i?(await Da(e,i),i):(await e.ui.dialogs.alert("Could not parse connection string. Make sure it contains user=… and gist_token=….","Gist credentials"),null)}async function xd(e){const t=await Ia(e);if(!t)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=(await e.store.tables.find()).filter(f=>f.workspaceId===r);if(i.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const n={},a=[];for(const f of i){const y=await e.store.rows(f.id).find(),k=JSON.stringify(kd(f,y),null,2);k.length>1e8&&a.push(`${f.name} (${(k.length/1e6).toFixed(2)} MB)`),n[`${Ra(f.name)}.table.json`]={content:k}}if(a.length>0&&!await e.ui.dialogs.confirm(`These tables exceed Gist's 100 MB-per-file limit and will be rejected:

${a.join(`
`)}

Push anyway?`,"Gist size warning"))return;n["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1"},null,2)};let c;if(t.gistId){const f=await fetch(`https://api.github.com/gists/${t.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:n,description:`easyDBAccess workspace: ${r}`})});if(!f.ok)throw new Error(await os(f));c=await f.json()}else{const f=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:n})});if(!f.ok)throw new Error(await os(f));c=await f.json(),t.gistId=c.id,await Da(e,t)}const d=c.html_url??`https://gist.github.com/${t.user}/${c.id}`;e.ui.dialogs.toast(`Pushed ${i.length} table${i.length===1?"":"s"}.  ${d}`,{kind:"success",title:"Gist sync"})}async function $d(e){const t=await Ia(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=await fetch(`https://api.github.com/gists/${t.gistId}`,{headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json"}});if(!i.ok)throw new Error(await os(i));const n=await i.json(),a=Object.entries(n.files).filter(([y])=>y.endsWith(".table.json")&&!y.startsWith("_easydb"));if(a.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const c=(await e.store.tables.find()).filter(y=>y.workspaceId===r),d=new Map(c.map(y=>[y.name,y]));let f=0;for(const[,y]of a){const k=JSON.parse(y.content);if(!k.name||!Array.isArray(k.columns))continue;let x;const I=d.get(k.name);if(I){x=await e.store.tables.patch(I.id,{columns:k.columns,updatedAt:Date.now()});const z=e.store.rows(I.id),H=await z.find();await z.bulkRemove(H.map(se=>se.id))}else x=await e.store.tables.insert({id:To(),workspaceId:r,name:k.name,code:Ra(k.name),columns:k.columns,view:"table",updatedAt:Date.now()});const V=(k.rows??[]).map(z=>({id:To(),tableId:x.id,data:z,updatedAt:Date.now()}));await e.store.rows(x.id).bulkInsert(V),f++}e.ui.dialogs.toast(`Pulled ${f} table${f===1?"":"s"} from gist ${t.gistId}.`,{kind:"success",title:"Gist sync"})}function kd(e,t){return{name:e.name,columns:e.columns,rows:t.map(r=>r.data)}}async function os(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}function Ra(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function To(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Cd=Object.freeze(Object.defineProperty({__proto__:null,init:yd,meta:gd},Symbol.toStringTag,{value:"Module"})),ja="server-sync:url";function Oa(e){return`server-sync:etag:${e}`}async function Fa(e){const r=(await e.store.settings.findOne(ja))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}async function Ed(e,t){await e.store.settings.upsert({key:ja,value:t.replace(/\/+$/,"")})}async function za(e,t){const i=(await e.store.settings.findOne(Oa(t)))?.value;return typeof i=="string"?i:null}async function zn(e,t,r){await e.store.settings.upsert({key:Oa(t),value:r})}function pi(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function Do(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function La(e,t,r){const i=xr(r,t),n=(await e.store.tables.find()).filter(c=>c.workspaceId===t);for(const c of n){const d=e.store.rows(c.id),f=await d.find();await d.bulkRemove(f.map(y=>y.id)),await e.store.tables.remove(c.id)}let a=0;for(const c of i){const d=Io(),f=await e.store.tables.insert({id:d,workspaceId:t,name:c.name,code:Sd(c.name),columns:c.columns,view:"table",...c.windowGeometry?{windowGeometry:c.windowGeometry}:{},...c.sortColumn?{sortColumn:c.sortColumn,sortAsc:c.sortAsc??!0}:{},updatedAt:Date.now()}),y=c.rows.map(k=>({id:Io(),tableId:f.id,data:k,updatedAt:Date.now()}));await e.store.rows(f.id).bulkInsert(y),a++}return a}function Sd(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Io(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const _d={name:"server-sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"easyDBAccess built-ins"};function Ad(e){e.ui.registerFooterButton({id:"server-sync:push",label:"Sync ↑",icon:"cloud_sync",tooltip:"Push this workspace to the configured server",onClick:async()=>{try{await Pd(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Server sync"})}}}),e.ui.registerFooterButton({id:"server-sync:pull",label:"Sync ↓",icon:"cloud_sync",tooltip:"Pull this workspace from the configured server",onClick:async()=>{try{await Td(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Server sync"})}}})}async function Pd(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await Ba(e);if(!r)return;const i=await fi(e),n=await za(e,t),a={"Content-Type":"application/json"};n&&(a["If-Match"]=`"${n}"`);let c=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:a,body:i});if(c.status===412){const f=await c.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){f.currentEtag&&await zn(e,t,f.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}c=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:i})}if(!c.ok)throw new Error(await Ma(c));const d=pi(c.headers.get("ETag"));d&&await zn(e,t,d),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${r}.`,{kind:"success",title:"Server sync"})}async function Td(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await Ba(e);if(!r||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const n=await fetch(`${r}/sync/${encodeURIComponent(t)}`);if(n.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!n.ok)throw new Error(await Ma(n));const a=pi(n.headers.get("ETag")),c=await n.json(),d=await La(e,t,c);a&&await zn(e,t,a),e.ui.dialogs.toast(`Pulled ${d} table${d===1?"":"s"} from ${r}.`,{kind:"success",title:"Server sync"})}async function Ba(e){const t=await Fa(e);if(t)return t;const r=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!r)return null;try{new URL(r)}catch{return await e.ui.dialogs.alert(`"${r}" is not a valid URL.`,"Server sync"),null}return await Ed(e,r),r.replace(/\/+$/,"")}async function Ma(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Dd=Object.freeze(Object.defineProperty({__proto__:null,init:Ad,meta:_d},Symbol.toStringTag,{value:"Module"})),Id={name:"new-table",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"easyDBAccess built-ins"};function Rd(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const jd=Object.freeze(Object.defineProperty({__proto__:null,init:Rd,meta:Id},Symbol.toStringTag,{value:"Module"})),Od={name:"plugin-manager-button",version:"0.1.0",description:"Registers a footer button that opens the Plugin Manager dialog.",author:"easyDBAccess built-ins"};function Fd(e){e.ui.registerFooterButton({id:"plugin-manager:open",label:"Plugins",icon:"extension",tooltip:"Add, disable, or remove plugins",onClick:()=>e.ui.openPluginManager()})}const zd=Object.freeze(Object.defineProperty({__proto__:null,init:Fd,meta:Od},Symbol.toStringTag,{value:"Module"})),Ld={name:"core-renderers",version:"0.1.0",description:"Built-in cell renderers: date, datetime, boolean, script.",author:"easyDBAccess built-ins"};function Bd(e){customElements.get("cell-date")||customElements.define("cell-date",Md),customElements.get("cell-datetime")||customElements.define("cell-datetime",Nd),customElements.get("cell-boolean")||customElements.define("cell-boolean",qd),customElements.get("cell-script")||customElements.define("cell-script",Hd),e.ui.registerCellRenderer("date","cell-date"),e.ui.registerCellRenderer("datetime","cell-datetime"),e.ui.registerCellRenderer("boolean","cell-boolean"),e.ui.registerCellRenderer("script","cell-script")}class Md extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="date",t.value=Kd(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class Nd extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="datetime-local",t.value=Vd(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class qd extends HTMLElement{constructor(){super(...arguments),this._value=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="checkbox",t.checked=Ud(this._value),t.style.cssText="transform:translateY(1px);cursor:pointer",t.addEventListener("change",()=>this.commit(t.checked)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Ud(e){return e===!0||e==="true"||e===1||e==="1"}class Hd extends HTMLElement{constructor(){super(...arguments),this._column=null,this._row={}}set column(t){this._column=t,this.render()}get column(){return this._column}set row(t){this._row=t??{},this.render()}get row(){return this._row}set value(t){}get value(){}connectedCallback(){this.render()}render(){this.innerHTML="";const t=this._column?.script;if(!t||!t.trim()){const a=document.createElement("span");a.textContent="(no script)",a.style.cssText="color:#9ca3af;font-style:italic",this.append(a);return}let r;try{r=Wd(t)}catch(a){this.append(Xi("compile error",a));return}let i;try{i=r(this._row)}catch(a){this.append(Xi("runtime error",a));return}if(typeof i!="string"){this.append(Xi("render(row) did not return a string",null));return}const n=document.createElement("span");n.style.cssText="display:inline-block;width:100%",n.innerHTML=i,this.append(n)}}const Ro=new Map;function Wd(e){const t=Ro.get(e);if(t)return t;const r=new Function("row",`${e}
return render(row);`);return Ro.set(e,r),r}function Xi(e,t){const r=document.createElement("span");if(r.textContent=`⚠ ${e}`,r.style.cssText="color:#b91c1c;font-size:0.8em;font-family:ui-monospace,SFMono-Regular,monospace",t){const i=t instanceof Error?t.message:String(t);r.title=i}return r}function Kd(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function Vd(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}const Yd=Object.freeze(Object.defineProperty({__proto__:null,init:Bd,meta:Ld},Symbol.toStringTag,{value:"Module"})),Xd={name:"cell-color",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"easyDBAccess built-ins"};function Gd(e){customElements.get("cell-color")||customElements.define("cell-color",Qd),e.ui.registerCellRenderer("color","cell-color")}class Qd extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,r,i){this.value=i}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const r=document.createElement("input");r.type="color",r.value=t,r.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",r.addEventListener("change",()=>this.commit(r.value)),this.append(r)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Jd=Object.freeze(Object.defineProperty({__proto__:null,init:Gd,meta:Xd},Symbol.toStringTag,{value:"Module"})),Zd={name:"cell-image",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"easyDBAccess built-ins"};function eh(e){customElements.get("cell-image")||customElements.define("cell-image",th),e.ui.registerCellRenderer("image","cell-image")}class th extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("span");if(t.style.cssText="display:inline-flex;align-items:center;gap:0.4rem",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const i=document.createElement("img");i.src=this._value,i.alt="",i.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(i)}else{const i=document.createElement("span");i.style.color="#9ca3af",i.textContent="no image",t.append(i);const n=document.createElement("button");n.type="button",n.textContent="upload",n.style.cssText="padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",n.addEventListener("click",()=>this.pickFile()),t.append(n)}this.append(t)}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const r=t.files?.[0];if(!r)return;const i=new FileReader;i.onload=()=>this.commit(String(i.result)),i.readAsDataURL(r)}),t.click()}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const nh=Object.freeze(Object.defineProperty({__proto__:null,init:eh,meta:Zd},Symbol.toStringTag,{value:"Module"})),rh={name:"cell-link",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"easyDBAccess built-ins"};function ih(e){customElements.get("cell-link")||customElements.define("cell-link",sh),e.ui.registerCellRenderer("link","cell-link")}class sh extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1}set value(t){const r=t==null?"":String(t);this._value!==r&&(this._value=r,this._editing=!1,this.render())}get value(){return this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="";const t=this._value,r=this._editing?null:oh(t),i=!this._editing&&!r?ah(t):null,n=!this._editing&&!r&&!i?lh(t):null;if(r||i||n){const a=document.createElement("span");a.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const c=document.createElement("a");c.href=r?t:i?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,r&&(c.target="_blank",c.rel="noopener noreferrer"),c.textContent=t,c.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",c.title=r?`Open ${t}`:i?`Email ${t}`:`Call ${t}`;const d=document.createElement("button");d.type="button",d.title="Edit",d.textContent="✎",d.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",d.addEventListener("click",f=>{f.preventDefault(),f.stopPropagation(),this._editing=!0,this.render()}),a.append(c,d),this.append(a)}else{const a=document.createElement("input");a.type="text",a.value=t,a.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",a.addEventListener("change",()=>this.commit(a.value)),a.addEventListener("keydown",c=>{c.key==="Enter"?(c.preventDefault(),this.commit(a.value)):c.key==="Escape"&&(this._editing=!1,this.render())}),this.append(a),this._editing&&setTimeout(()=>{a.focus(),a.select()},0)}}commit(t){this._value=t,this._editing=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function oh(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function ah(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function lh(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const r=t.replace(/\D/g,"");if(r.length<7||r.length>15)return null;const i=/[ ()\-.]/.test(t),n=t.startsWith("+");return!i&&!n&&r.length<10?null:t}const ch=Object.freeze(Object.defineProperty({__proto__:null,init:ih,meta:rh},Symbol.toStringTag,{value:"Module"}));var uh=Object.defineProperty,dh=Object.getOwnPropertyDescriptor,Na=(e,t,r,i)=>{for(var n=i>1?void 0:i?dh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&uh(t,r,n),n};function jo(e){return(un.instance??hh()).open(e)}function hh(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let un=class extends Ke{constructor(){super(...arguments),this.rows=[],this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((r,i)=>{const n=this.rows[i],a=n.field.trim(),c=n.label.trim()||a;return{...r,field:a,label:c,hidden:n.hidden}});this.finish(t)},this.toggleAllHidden=()=>{const e=this.rows.length>0&&this.rows.every(t=>t.hidden);this.rows=this.rows.map(t=>({...t,hidden:!e}))}}connectedCallback(){super.connectedCallback(),un.instance=this}disconnectedCallback(){super.disconnectedCallback(),un.instance===this&&(un.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&nn(this.dialogEl,e)}open(e){return this.source=e,this.rows=e.map(t=>({field:t.field,label:t.label,hidden:!!t.hidden})),new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((r,i)=>{const n=r.field.trim().toLowerCase();if(n===""){e.add(i);return}(t.get(n)??t.set(n,[]).get(n)).push(i)});for(const r of t.values())if(r.length>1)for(const i of r)e.add(i);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,r){this.rows=this.rows.map((i,n)=>n===e?{...i,[t]:r}:i)}setHidden(e,t){this.rows=this.rows.map((r,i)=>i===e?{...r,hidden:t}:r)}render(){const e=this.invalidIndices(),t=e.size;return M`
      <dialog @cancel=${this.onCancel} @keydown=${kn}>
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
              ${this.rows.map((r,i)=>M`
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
              ${t>0?`Fix ${t} column name${t===1?"":"s"} — names must be unique and non-empty.`:ye}
            </p>
          </div>
        </form>
      </dialog>
    `}};un.instance=null;un.styles=[tn,Ze`
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
    `];Na([U()],un.prototype,"rows",2);un=Na([ot("column-names-dialog")],un);var fh=Object.defineProperty,ph=Object.getOwnPropertyDescriptor,mi=(e,t,r,i)=>{for(var n=i>1?void 0:i?ph(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&fh(t,r,n),n};let Xr=null;function mh(){return Xr||(Xr=document.createElement("top-progress"),document.body.appendChild(Xr)),Xr}let Ln=class extends Ke{constructor(){super(...arguments),this.visible=!1,this.frac=null,this.label="",this.active=new Set}static begin(e=""){return mh().begin(e)}begin(e){const t=Symbol("progress");return this.active.add(t),this.label=e,this.frac=null,this.visible=!0,{fraction:r=>{this.active.has(t)&&(this.frac=r)},done:()=>{this.active.delete(t),this.active.size===0&&(this.visible=!1,this.frac=null,this.label="")}}}render(){if(!this.visible)return M``;const e=this.frac!=null;return M`<div
      class="track"
      role="progressbar"
      aria-label=${this.label||"Loading"}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow=${e?Math.round(this.frac*100):""}
    >
      ${e?M`<div
            class="bar determinate"
            style="width:${Math.round(this.frac*100)}%"
          ></div>`:M`<div class="bar indet"></div>`}
    </div>`}};Ln.styles=Ze`
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
  `;mi([U()],Ln.prototype,"visible",2);mi([U()],Ln.prototype,"frac",2);mi([U()],Ln.prototype,"label",2);Ln=mi([ot("top-progress")],Ln);function gh(e){let t;try{t=new URL(e)}catch{return e}const r=t.hostname.toLowerCase();if(r==="github.com"||r==="www.github.com"){const i=t.pathname.split("/").filter(Boolean);if(i.length>=5&&(i[2]==="blob"||i[2]==="raw")){const n=i[0],a=i[1];let c=i.slice(3);return c.length>=3&&c[0]==="refs"&&(c[1]==="heads"||c[1]==="tags")&&(c=c.slice(2)),`https://raw.githubusercontent.com/${[n,a,...c].join("/")}`}}return e}async function bh(e,t){const r=Number(e.headers?.get?.("content-length")),i=e.body?.getReader?.();if(i&&Number.isFinite(r)&&r>0){const n=[];let a=0;for(;;){const{done:f,value:y}=await i.read();if(f)break;y&&(n.push(y),a+=y.length,t?.(Math.min(1,a/r)))}const c=new Uint8Array(a);let d=0;for(const f of n)c.set(f,d),d+=f.length;return new TextDecoder().decode(c)}return await e.text()}var yh=Object.defineProperty,wh=Object.getOwnPropertyDescriptor,Kt=(e,t,r,i)=>{for(var n=i>1?void 0:i?wh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&yh(t,r,n),n};const vh="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",xh="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",$h='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',Oo=[{label:"Northwind — sample database (JSON dump)",url:vh,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:xh,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],kh={name:"import-data",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"easyDBAccess built-ins",optional:!0};function Ch(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:$h,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>Ph(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:r})=>_h(t,r)})}const Fo=50*1024*1024;function zo(e){try{return new URL(e).host}catch{return e}}async function Eh(e){try{return(await e.text()).replace(/\s+/g," ").trim().slice(0,300)}catch{return""}}async function Sh(e,t,r={}){const i=gh(t),n=r.slowMs??2e3;let a=setTimeout(()=>{a=void 0,r.onSlow?.()},n);const c=()=>{a!==void 0&&(clearTimeout(a),a=void 0)};try{let d;try{d=await e.backend.fetch(i)}catch(y){throw new Error(`Could not reach ${zo(i)} — no response. The server may be down, blocking cross-origin (CORS) requests, or the transfer may have failed (e.g. a very large file). [${y.message}]`)}if(!d.ok){const y=await Eh(d);throw new Error(`HTTP ${d.status} ${d.statusText||""}`.trim()+(y?` — ${y}`:""))}const f=Number(d.headers.get("content-length"));if(Number.isFinite(f)&&f>Fo)throw new Error(`Response is ${(f/(1024*1024)).toFixed(1)} MB, over the ${Fo/(1024*1024)} MB browser import limit. Import a smaller extract, or use a server/Datasette connection for large datasets.`);try{return await bh(d,r.onProgress)}catch(y){throw new Error(`Failed reading the response body from ${zo(i)}: ${y.message}`)}}finally{c()}}async function as(e,t,r){const i={handle:null};try{return await Sh(e,t,{onSlow:()=>{i.handle=Ln.begin(r)},onProgress:n=>i.handle?.fraction(n)})}finally{i.handle?.done()}}async function _h(e,t){const r=await e.store.tables.findOne(t),i=r?.origin;if(i?.url)try{const n=await as(e,i.url,`Reading ${r?.name??"data"}…`);let a;if(i.type==="csv")a=vr(n).rows;else{const f=xr(JSON.parse(n),r.name),y=f.find(k=>k.name===r.name)??(f.length===1?f[0]:void 0);if(!y)throw new Error(`"${r.name}" is no longer in the dump at ${i.url}`);a=y.rows}const c=e.store.rows(t),d=await c.find();await c.bulkRemove(d.map(f=>f.id)),await c.bulkInsert(a.map(f=>({id:Ah(),tableId:t,data:f,updatedAt:Date.now()}))),e.ui.dialogs.toast(`Refreshed "${r.name}" (${a.length} rows).`,{kind:"success",title:"Refresh"})}catch(n){e.ui.dialogs.toast(`Couldn't refresh "${r?.name??t}": ${n.message}`,{kind:"error",title:"Refresh"})}}function Ah(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function Ph(e){const r=await(ht.instance??Th()).open({async listDatabases(k){const x=Mn(k);return ya(I=>e.backend.fetch(I),x.base)}});if(!r)return;const{url:i,file:n,kind:a,dbChosen:c,editColumns:d,maxRows:f}=r,y=n?.name??i;try{if(n){const k=await n.text();a==="csv"?await ri(e,k,n.name,{editColumns:d?jo:void 0,maxRows:f}):await ii(e,k,n.name,{maxRows:f}),e.ui.dialogs.toast(`Imported ${n.name}.`,{kind:"success",title:"Import"});return}if(a==="datasette")await xs(e,i,{skipTablePicker:c});else if(a==="csv"){const k=await as(e,i,`Reading ${Vn(i)}…`);await ri(e,k,Vn(i),{editColumns:d?jo:void 0,maxRows:f,origin:{type:"csv",url:i}}),e.ui.dialogs.toast(`Imported ${Vn(i)}.`,{kind:"success",title:"Import"})}else{const k=await as(e,i,`Reading ${Vn(i)}…`);await ii(e,k,Vn(i),{originUrl:i,maxRows:f}),e.ui.dialogs.toast(`Imported ${Vn(i)}.`,{kind:"success",title:"Import"})}}catch(k){e.ui.dialogs.toast(`Could not import ${y}: ${k.message}`,{kind:"error",title:"Import"})}}function Th(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function Dh(e){try{const t=new URL(e),r=t.hostname.toLowerCase(),i=[...t.searchParams.keys()].some(a=>a.startsWith("_")),n=r.includes("datasette")||i;return!i&&/\.csv$/i.test(t.pathname)?"csv":!i&&/\.json$/i.test(t.pathname)?"json":n?"datasette":"json"}catch{return"json"}}function Lo(e,t){if(t!=="datasette"||!e)return!1;try{const r=Mn(e);return!r.db&&!r.table}catch{return!1}}function Vn(e){try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();return r&&r.length>0?r:"sample.db.json"}catch{return"sample.db.json"}}function Ih(e){return/\.csv$/i.test(e)?"csv":"json"}let ht=class extends Ke{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.file=null,this.maxRowsInput="",this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t&&!this.file)return;const r=this.resolvedKind,i=this.maxRows,n=r==="csv"&&this.editColumns;if(this.file){this.finish({url:"",file:this.file,kind:r,editColumns:n,maxRows:i});return}const a=r==="datasette"&&!!this.selectedDb&&Lo(t,r),c=a?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:c,kind:r,dbChosen:a,editColumns:n,maxRows:i})}}get resolvedKind(){return this.kind!=="auto"?this.kind:this.file?Ih(this.file.name):Dh(this.url.trim())}get maxRows(){const e=Math.floor(Number(this.maxRowsInput));return Number.isFinite(e)&&e>0?e:void 0}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),ht.instance=this}disconnectedCallback(){super.disconnectedCallback(),ht.instance===this&&(ht.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&nn(this.dialogEl,e)}open(e){return this.url="",this.kind="auto",this.presetIdx=-1,this.editColumns=!1,this.file=null,this.maxRowsInput="",this.resetDbList(),this.listDatabases=e?.listDatabases??null,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const r=Oo[t];r&&(this.url=r.url,this.kind=r.kind)}onFileChange(e){const r=e.target.files?.[0]??null;this.file=r,r&&(this.url="",this.presetIdx=-1,this.resetDbList())}renderDbPicker(){return!this.listDatabases||!Lo(this.url.trim(),this.resolvedKind)?ye:M`
      <label>
        Database
        <div class="row db-row">
          <select
            .value=${this.selectedDb}
            ?disabled=${!this.dbList||this.dbList.length===0}
            @change=${e=>{this.selectedDb=e.target.value}}
          >
            ${this.dbList?M`
                  <option value="" ?selected=${this.selectedDb===""}>
                    — all databases (choose tables next) —
                  </option>
                  ${this.dbList.map(e=>M`<option value=${e} ?selected=${e===this.selectedDb}>${e}</option>`)}
                `:M`<option value="">— not loaded —</option>`}
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
      ${this.dbError?M`<p class="hint error">${this.dbError}</p>`:ye}
    `}render(){return M`
      <dialog @cancel=${this.onCancel} @keydown=${kn}>
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
                ${Oo.map((e,t)=>M`<option value=${String(t)} ?selected=${t===this.presetIdx}>
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
            ${this.file?M`<p class="hint">
                  Importing <strong>${this.file.name}</strong> as
                  ${this.resolvedKind.toUpperCase()}.
                </p>`:ye}

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
            ${this.resolvedKind==="csv"?M`<label class="check">
                  <input
                    type="checkbox"
                    .checked=${this.editColumns}
                    @change=${e=>this.editColumns=e.target.checked}
                  />
                  Edit columns before import (rename / hide / fix duplicate names)
                </label>`:ye}

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
            ${this.resolvedKind==="datasette"&&this.maxRows!=null?M`<p class="hint">
                  Row limit applies to CSV/JSON imports; Datasette snapshots use their own
                  10,000-row cap.
                </p>`:ye}

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
      ${ye}
    `}};ht.instance=null;ht.styles=[tn,Ze`
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
    `];Kt([U()],ht.prototype,"url",2);Kt([U()],ht.prototype,"kind",2);Kt([U()],ht.prototype,"presetIdx",2);Kt([U()],ht.prototype,"dbList",2);Kt([U()],ht.prototype,"dbLoading",2);Kt([U()],ht.prototype,"dbError",2);Kt([U()],ht.prototype,"selectedDb",2);Kt([U()],ht.prototype,"editColumns",2);Kt([U()],ht.prototype,"file",2);Kt([U()],ht.prototype,"maxRowsInput",2);ht=Kt([ot("import-dialog")],ht);const Rh=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return ht},init:Ch,meta:kh},Symbol.toStringTag,{value:"Module"})),jh={name:"auto-sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"easyDBAccess built-ins",optional:!0},Oh=6e4;let Bo=null,ls=!1;const Gi=new Map;function Fh(e){Bo===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(Bo=setInterval(()=>{qa(e)},Oh)))}async function qa(e){if(ls)return;const t=e.workspaceId();if(!t)return;const r=await Fa(e);if(r)try{await zh(e,r,t)}catch(i){console.warn("[auto-sync]",i)}}async function zh(e,t,r){const i=await fi(e),n=await za(e,r),a=await fetch(`${t}/sync/${encodeURIComponent(r)}`);if(a.status===404){await Mo(e,t,r,i,null);return}if(!a.ok)return;const c=pi(a.headers.get("ETag")),d=await a.text();if(Do(i)===Do(d)){c&&c!==n&&await zn(e,r,c);return}if(c&&c===n){await Mo(e,t,r,i,n);return}if(!(c&&Gi.get(r)===c)){ls=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${r}". Pull and replace your local copy?`,"auto-sync")){const y=JSON.parse(d),k=await La(e,r,y);c&&await zn(e,r,c),Gi.delete(r),e.ui.dialogs.toast(`Pulled ${k} table${k===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else c&&Gi.set(r,c)}finally{ls=!1}}}async function Mo(e,t,r,i,n){const a={"Content-Type":"application/json"};n&&(a["If-Match"]=`"${n}"`);const c=await fetch(`${t}/sync/${encodeURIComponent(r)}`,{method:"PUT",headers:a,body:i});if(c.ok){const d=pi(c.headers.get("ETag"));d&&await zn(e,r,d);return}if(c.status===412){const d=await c.json().catch(()=>({}));d.currentEtag&&await zn(e,r,d.currentEtag)}}const Ua=Object.freeze(Object.defineProperty({__proto__:null,load:Fh,meta:jh,tick:qa},Symbol.toStringTag,{value:"Module"})),Ha=/\$([A-Za-z_][A-Za-z0-9_]*)/g;function No(...e){const t=new Set;for(const r of e)if(r)for(const i of r.matchAll(Ha))t.add(i[1]);return[...t]}function Lh(e,t,r){return e.replace(Ha,(i,n)=>{const a=r[n];if(!a)return"";const c=t.data[a];return c==null?"":String(c)})}function qo(e){return e==null||e===""}function Bh(e,t){const r=Object.entries(t).filter(([,i])=>i!=null&&String(i).trim()!=="");return r.length===0?e:e.filter(i=>r.every(([n,a])=>String(i.data[n]??"").toLowerCase().includes(String(a).toLowerCase())))}function Mh(e,t,r=!0){if(!t)return e;const i=r?1:-1;return[...e].sort((n,a)=>{const c=n.data[t],d=a.data[t],f=qo(c),y=qo(d);if(f||y)return f===y?0:f?1:-1;const k=Number(c),x=Number(d);return!Number.isNaN(k)&&!Number.isNaN(x)?(k-x)*i:String(c).localeCompare(String(d),void 0,{numeric:!0,sensitivity:"base"})*i})}function Nh(e,t){return Mh(Bh(e,t.filters??{}),t.sortColumn,t.sortAsc??!0)}function qh(e){return!!e&&e.trim().length>0}var Uh=Object.defineProperty,Hh=Object.getOwnPropertyDescriptor,er=(e,t,r,i)=>{for(var n=i>1?void 0:i?Hh(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Uh(t,r,n),n};function Wh(e){(It.instance??Kh()).open(e)}function Kh(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function Uo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let It=class extends Ke{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()}}connectedCallback(){super.connectedCallback(),It.instance=this}disconnectedCallback(){super.disconnectedCallback(),It.instance===this&&(It.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&nn(this.dialogEl,e)}async open(e){this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await ge(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(r=>r.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((r,i)=>r.name.localeCompare(i.name))}async openInstance(e){await(await ge()).store.viewInstances.patch(e,{open:!0,updatedAt:Date.now()}),this.close()}async editInstance(e){const r=await(await ge()).store.viewTemplates.findOne(e.templateId),i=r?No(r.headerHtml,r.rowHtml,r.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:r?.name??"template",name:e.name,tokens:i,mapping:{...e.mapping}},this.mode="instance"}async deleteInstance(e){await(await ge()).store.viewInstances.remove(e),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await ge();e.id?await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()}):await t.store.viewTemplates.insert({id:Uo(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()}),await this.refresh(),this.mode="list"}useTemplate(e){const t=No(e.headerHtml,e.rowHtml,e.footerHtml),r={};for(const i of t)r[i]=this.autoMap(i);this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:r},this.mode="instance"}autoMap(e){const t=e.toLowerCase();return this.columns.find(i=>i.field.toLowerCase()===t||(i.label??"").toLowerCase()===t)?.field??""}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await ge();if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.mode="list";return}const r=this.columns.filter(n=>!n.hidden).map(n=>n.field),i={id:Uo(),workspaceId:t.workspaceId,tableId:this.tableId,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:r,mapping:{...e.mapping},updatedAt:Date.now()};await t.store.viewInstances.insert(i),await this.openInstance(i.id)}renderList(){return M`
      <div class="section">
        <h3>Views of “${this.table?.name??""}”</h3>
        <ul class="list">
          ${this.instances.map(e=>M`<li>
                <span class="name">${e.name}</span>
                <button class="mini" @click=${()=>this.openInstance(e.id)}>Open</button>
                <button class="mini" @click=${()=>void this.editInstance(e)}>Edit</button>
                <button class="mini danger" @click=${()=>void this.deleteInstance(e.id)}>
                  Delete
                </button>
              </li>`)}
        </ul>
      </div>
      <div class="section">
        <h3>View templates (workspace)</h3>
        <ul class="list">
          ${this.templates.map(e=>M`<li>
                <span class="name">${e.name}</span>
                ${e.builtin?M`<span class="badge">built-in</span>`:ye}
                <button class="mini" @click=${()=>this.useTemplate(e)}>Use</button>
                <button class="mini" @click=${()=>this.editTemplate(e)}>Edit</button>
                <button class="mini" @click=${()=>this.copyTemplate(e)}>Copy</button>
              </li>`)}
        </ul>
        <div>
          <button class="mini" @click=${()=>this.newTemplate()}>+ New template</button>
        </div>
        <p class="hint">
          A template's row HTML uses <code>$TOKEN</code> placeholders (e.g. <code>$TITLE</code>).
          Leave row HTML blank to show a read-only columns table with the header/footer HTML around
          it.
        </p>
      </div>
    `}renderTemplate(){const e=this.tDraft,t=r=>i=>{this.tDraft={...e,[r]:i.target.value}};return M`
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
    `}renderInstance(){const e=this.iDraft;return M`
      <label class="field">
        View name
        <input
          type="text"
          .value=${e.name}
          @input=${t=>this.iDraft={...e,name:t.target.value}}
        />
      </label>
      <div class="section">
        <h3>Map placeholders to columns</h3>
        ${e.tokens.length===0?M`<p class="hint">
              This template has no <code>$TOKEN</code> placeholders — it will show the read-only
              table with your current sort, filter and visible columns.
            </p>`:e.tokens.map(t=>M`<div class="map-row">
                  <code>$${t}</code>
                  <select
                    @change=${r=>this.iDraft={...e,mapping:{...e.mapping,[t]:r.target.value}}}
                  >
                    <option value="" ?selected=${!e.mapping[t]}>— none —</option>
                    ${this.columns.map(r=>M`<option value=${r.field} ?selected=${e.mapping[t]===r.field}>
                          ${r.label||r.field}
                        </option>`)}
                  </select>
                </div>`)}
      </div>
      <p class="hint">
        ${e.id?M`Editing name and column mapping. The snapshotted sort, filters and visible columns
            are kept.`:M`The view snapshots this table's current sort, filters and visible columns.`}
      </p>
    `}render(){const e=this.mode==="template"?this.tDraft?.id?"Edit template":"New template":this.mode==="instance"?`${this.iDraft?.id?"Edit":"New"} view — ${this.iDraft?.templateName??""}`:"Views",t=this.mode==="template"?M`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
              Back
            </button>
            <button type="button" class="primary" @click=${()=>void this.saveTemplate()}>
              Save
            </button>`:this.mode==="instance"?M`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
                Back
              </button>
              <button type="button" class="primary" @click=${()=>void this.saveInstance()}>
                ${this.iDraft?.id?"Save":"Create view"}
              </button>`:M`<button type="button" class="ghost" @click=${this.close}>Close</button>`;return M`
      <dialog @cancel=${this.close}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>×</button>
        <div class="dialog-header">
          <h2>${e}</h2>
          <div class="header-actions">${t}</div>
        </div>
        <div class="dialog-body">
          ${this.mode==="template"?this.renderTemplate():this.mode==="instance"?this.renderInstance():this.renderList()}
        </div>
      </dialog>
    `}};It.instance=null;It.styles=[tn,Ze`
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
    `];er([U()],It.prototype,"mode",2);er([U()],It.prototype,"instances",2);er([U()],It.prototype,"templates",2);er([U()],It.prototype,"tDraft",2);er([U()],It.prototype,"iDraft",2);It=er([ot("views-dialog")],It);const Vh={name:"views",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",optional:!0},Yh="grid_view",Ho="RSS Feed",cs='<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',us=['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>',"</div>"].join(""),ds="</div>";function Xh(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:Yh,tooltip:"Views — display this table through a template",onClick:(t,{tableId:r})=>Wh(r)})}async function Gh(e){await Jh(e)}function Qh(){let e=5381;const t=`${cs}\0${us}\0${ds}`;for(let r=0;r<t.length;r++)e=(e<<5)+e+t.charCodeAt(r)|0;return(e>>>0).toString(36)}async function Jh(e){const t=e.workspaceId();if(!t)return;const r=`views:seeded:rss:${t}`,i=`views:sig:rss:${t}`,n=Qh(),a=(await e.store.viewTemplates.find({workspaceId:t})).find(d=>d.builtin&&d.name===Ho);if(a){(await e.store.settings.findOne(i))?.value!==n&&(await e.store.viewTemplates.patch(a.id,{headerHtml:cs,rowHtml:us,footerHtml:ds,updatedAt:Date.now()}),await e.store.settings.upsert({key:i,value:n})),await e.store.settings.upsert({key:r,value:!0});return}(await e.store.settings.findOne(r))?.value||(await e.store.viewTemplates.insert({id:Zh(),workspaceId:t,name:Ho,headerHtml:cs,rowHtml:us,footerHtml:ds,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({key:r,value:!0}),await e.store.settings.upsert({key:i,value:n}))}function Zh(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const ef=Object.freeze(Object.defineProperty({__proto__:null,init:Xh,load:Gh,meta:Vh},Symbol.toStringTag,{value:"Module"})),Wa=[jd,Mc,lu,sd,Wc,ld,md,Cd,Dd,zd,Yd,Jd,nh,ch,Rh,Ua,ef],tf=Wa;function hs(e){return`builtin:${e}`}async function nf(e){const t=[];for(const r of Wa)if(!await rf(e,r)){t.push(r);try{await r.init?.(e)}catch(i){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"init",error:i})}}return async()=>{for(const r of t)try{await r.load?.(e)}catch(i){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"load",error:i})}}}async function rf(e,t){if(!t.meta?.optional)return!1;const r=t.meta.name;return r?(await e.store.plugins.findOne(hs(r)))?.enabled===!1:!1}async function sf(e){const t=e.workspaceId();if(!t)return async()=>{};const i=(await e.store.workspaces.findOne(t))?.pluginUrls??[],n=[];for(const a of i)try{const c=await e.store.plugins.findOne(a);if(c&&c.enabled===!1)continue;let d=c?.cachedBody??"";if(d)of(e,a,d);else{try{d=await Ka(a)}catch(k){await e.store.plugins.upsert({url:a,enabled:c?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${k.message}`}),e.events.emit("plugin:error",{url:a,phase:"fetch",error:k});continue}await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),cachedBody:d})}const f=new Blob([d],{type:"text/javascript"}),y=URL.createObjectURL(f);try{const k=await import(y);await k.init?.(e),n.push({url:a,mod:k})}finally{setTimeout(()=>URL.revokeObjectURL(y),5e3)}}catch(c){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`init: ${c.message}`}),e.events.emit("plugin:error",{url:a,phase:"init",error:c})}return async()=>{for(const{url:a,mod:c}of n)try{await c.load?.(e)}catch(d){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`load: ${d.message}`}),e.events.emit("plugin:error",{url:a,phase:"load",error:d})}}}async function Ka(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const r=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(r))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return r}function of(e,t,r){return(async()=>{try{const i=await Ka(t);if(i===r)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:i})}catch{}})()}let Qi=null;function ge(){return Qi||(Qi=af()),Qi}async function af(){const e=await oc(),t=cc(e),r=dc(),i=yc(),n=new Map;t.tables.subscribe(H=>{n.clear();for(const se of H)n.set(se.id,se)});const a={...t.tables,insert:H=>(n.set(H.id,H),t.tables.insert(H)),upsert:H=>(n.set(H.id,H),t.tables.upsert(H))};let c=null;const d={get backend(){if(!c)throw new Error("[host] row-source ctx used before app init completed");return c.backend},events:r,settings:t.settings,workspaceId:()=>x},f=uc({base:{...t,tables:a},providers:i.rowSources,tableById:H=>n.get(H),ctx:d}),y=lf(),k=await f.workspaces.find();let x;if(y){const H=df(y),se=k.find(ce=>ce.id===H||ce.name===y);se?x=se.id:x=(await f.workspaces.insert({id:H,name:y,createdAt:Date.now(),pluginUrls:[]})).id}else{const H=cf(),se=H?k.find(ce=>ce.id===H):void 0;se?x=se.id:k.length>0?x=k[0].id:x=(await f.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}uf(x);const I=xc({store:f,events:r,registries:i,workspaceId:()=>x});c=I,r.on("import:after",({source:H,tableId:se,rowCount:ce})=>{H!=="datasette"&&I.store.tables.findOne(se).then(Ce=>{I.ui.dialogs.toast(`Imported ${ce} row${ce===1?"":"s"} into "${Ce?.name??se}".`,{kind:"success",title:H.toUpperCase()+" import"})})}),r.on("plugin:error",({url:H,phase:se,error:ce})=>{I.ui.dialogs.toast(`[${se}] ${ce?.message??String(ce)}`,{kind:"error",title:`Plugin: ${H}`})});const V=await nf(I),z=await sf(I);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:x}),await V(),await z()}),{store:f,events:r,workspaceId:x,registries:i,api:I}}function lf(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const Va="eda:lastWorkspaceId";function cf(){try{return globalThis.localStorage?.getItem(Va)??null}catch{return null}}function uf(e){try{globalThis.localStorage?.setItem(Va,e)}catch{}}function df(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var hf=Object.defineProperty,ff=Object.getOwnPropertyDescriptor,gi=(e,t,r,i)=>{for(var n=i>1?void 0:i?ff(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&hf(t,r,n),n};let Qn=class extends Ke{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&nn(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let r;try{r=vr(this.text)}catch(c){this.errorMsg=`Couldn't parse the CSV: ${c.message}`;return}if(r.columns.length===0||r.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const i=await ge(),n=crypto.randomUUID();await i.store.tables.insert({id:n,workspaceId:i.workspaceId,name:t,code:pf(t),columns:r.columns,view:"table",updatedAt:Date.now()});const a=r.rows.map(c=>({id:crypto.randomUUID(),tableId:n,data:c,updatedAt:Date.now()}));await i.store.rows(n).bulkInsert(a),i.api.ui.dialogs.toast(`Imported ${r.rows.length} row${r.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return M`
      <dialog @cancel=${this.close} @keydown=${kn}>
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
            ${this.errorMsg?M`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};Qn.styles=[tn,Ze`
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
    `];gi([U()],Qn.prototype,"name",2);gi([U()],Qn.prototype,"text",2);gi([U()],Qn.prototype,"errorMsg",2);Qn=gi([ot("csv-paste-dialog")],Qn);function pf(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}var mf=Object.defineProperty,gf=Object.getOwnPropertyDescriptor,$s=(e,t,r,i)=>{for(var n=i>1?void 0:i?gf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&mf(t,r,n),n};const bf=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return an HTML string; it is injected into the cell as raw HTML.
  return '<b>' + (row.name ?? '') + '</b>';
}
`;let en=class extends Ke{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),en.instance=this}disconnectedCallback(){super.disconnectedCallback(),en.instance===this&&(en.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&nn(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:bf,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(r=>{this.resolver=r})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return M`
      <dialog @cancel=${this.onCancel} @keydown=${kn}>
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
    `}};en.instance=null;en.styles=[tn,Ze`
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
    `];$s([U()],en.prototype,"text",2);$s([U()],en.prototype,"columnLabel",2);en=$s([ot("script-editor-dialog")],en);var yf=Object.defineProperty,wf=Object.getOwnPropertyDescriptor,Vt=(e,t,r,i)=>{for(var n=i>1?void 0:i?wf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&yf(t,r,n),n};const vf=["string","number","boolean","date","datetime"];let jt=class extends Ke{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.columns=[],this.errorMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&nn(this.dialogEl,e)}async open(e){this.errorMsg="";const t=await ge();if(this.rendererOptions=[...t.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.rendererSubUnsub=t.events.on("app:ready",()=>{this.rendererOptions=[...t.registries.cellRenderers.keys()].sort()}),e){const r=await ge(),i=await r.store.tables.findOne(e);if(!i)return;this.mode="edit",this.editTableId=e,this.name=i.name,this.columns=i.columns.map(a=>({field:a.field,label:a.label,type:a.type,renderer:a.renderer,script:a.script,max:a.max,unique:a.unique,notnull:a.notnull,hidden:a.hidden,origField:a.field}));const n=await r.store.rows(e).find();this.previewRows=n.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,r)=>r!==e)}moveColumn(e,t){const r=e+t;if(r<0||r>=this.columns.length)return;const i=[...this.columns],[n]=i.splice(e,1);i.splice(r,0,n),this.columns=i}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,r){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientY<i.top+i.height/2;this.dropTargetIdx=t,this.dropEdge=n?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const r=this.dragSrcIdx,i=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,r===null||r===t||!i)return;const n=[...this.columns],[a]=n.splice(r,1);let c=t+(r<t?-1:0);i==="after"&&(c+=1),n.splice(c,0,a),this.columns=n}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((r,i)=>i===e?{...r,...t}:r)}async editScript(e){const t=en.instance;if(!t)return;const r=this.columns[e];if(!r)return;const i=await t.open(r.script??"",r.label||r.field);i!==null&&this.patchColumn(e,{script:i.trim()?i:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const r=new Set;for(const a of this.columns){const c=a.field.trim();if(!c){this.errorMsg="Column field names cannot be empty.";return}if(r.has(c)){this.errorMsg=`Duplicate column field: ${c}`;return}r.add(c)}const i=await ge(),n=this.columns.map(a=>{const c={field:a.field.trim(),label:a.label.trim()||a.field.trim(),type:a.type};return a.renderer&&(c.renderer=a.renderer),a.script&&(c.script=a.script),a.max!=null&&a.max>0&&(c.max=a.max),a.unique&&(c.unique=!0),a.notnull&&(c.notnull=!0),a.hidden&&(c.hidden=!0),c});if(this.mode==="edit"&&this.editTableId){const a=this.editTableId,c=await i.store.tables.findOne(a),d=new Map((c?.columns??[]).map(y=>[y.field,y])),f=n.filter(y=>{const k=d.get(y.field);return y.unique&&!k?.unique||y.notnull&&!k?.notnull||y.max&&y.max>0&&y.max!==k?.max});if(f.length>0){const y=await i.store.rows(a).find(),k=kf(f,y);if(k.length>0){this.errorMsg=`Cannot save: ${k.length} existing ${k.length===1?"row violates":"rows violate"} the new constraints.
${k.slice(0,5).join(`
`)}${k.length>5?`
…and ${k.length-5} more.`:""}`;return}}await i.store.tables.patch(a,{name:t,columns:n,updatedAt:Date.now()})}else await i.store.tables.insert({id:Ef(),workspaceId:i.workspaceId,name:t,code:Cf(t),columns:n,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return M`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=new Map;for(const t of this.columns){if(!t.unique)continue;const r=new Set,i=new Set;for(const n of this.previewRows){const a=n.data[t.field];a==null||a===""||(r.has(a)&&i.add(a),r.add(a))}e.set(t.field,i)}return M`
      <div class="preview">
        <h3>Live preview — first ${this.previewRows.length} row${this.previewRows.length===1?"":"s"}</h3>
        <table>
          <thead>
            <tr>
              ${this.columns.map(t=>M`<th title=${t.field}>${t.label||t.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.previewRows.map(t=>M`
                <tr>
                  ${this.columns.map(r=>{const i=t.data[r.field],n=$f(r,i,e.get(r.field));return M`<td
                      class=${n?"violation":""}
                      title=${n??""}
                    >${xf(i)}</td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}renameDetected(){return this.mode==="edit"&&this.columns.some(e=>e.origField&&e.origField!==e.field.trim())}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return M`
      <dialog @cancel=${this.close} @keydown=${kn}>
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
            ${this.columns.map((r,i)=>{const n=this.dragSrcIdx===i,a=this.dropTargetIdx===i,c=a&&this.dropEdge==="before"?" drop-before":a&&this.dropEdge==="after"?" drop-after":"";return M`
                <div
                  class=${`col-row${n?" drag-source":""}${c}`}
                  @dragover=${d=>this.onRowDragOver(d,i,d.currentTarget)}
                  @dragleave=${()=>this.onRowDragLeave(i)}
                  @drop=${d=>this.onRowDrop(d,i)}
                >
                  <span
                    class="drag-handle"
                    title="Drag to reorder"
                    draggable="true"
                    @dragstart=${d=>this.onRowDragStart(d,i)}
                    @dragend=${()=>this.onRowDragEnd()}
                  >
                    <span class="mi sm">drag_indicator</span>
                  </span>
                  <input
                    type="text"
                    .value=${r.field}
                    @input=${d=>this.patchColumn(i,{field:d.target.value})}
                  />
                  <input
                    type="text"
                    .value=${r.label}
                    @input=${d=>this.patchColumn(i,{label:d.target.value})}
                  />
                  <select
                    .value=${r.type}
                    @change=${d=>this.patchColumn(i,{type:d.target.value})}
                  >
                    ${vf.map(d=>M`<option value=${d} ?selected=${d===r.type}>${d}</option>`)}
                  </select>
                  <select
                    title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                    .value=${r.renderer??""}
                    @change=${d=>{const f=d.target.value;this.patchColumn(i,{renderer:f||void 0})}}
                  >
                    <option value="" ?selected=${!r.renderer}>— none —</option>
                    ${this.rendererOptions.map(d=>M`<option value=${d} ?selected=${d===r.renderer}>${d}</option>`)}
                  </select>
                  ${r.renderer==="script"?M`<button
                        type="button"
                        class="icon-btn"
                        title="Edit JS render(row)"
                        @click=${()=>this.editScript(i)}
                      >
                        <span class="mi sm">edit</span>
                      </button>`:M`<span></span>`}
                  <input
                    type="number"
                    min="0"
                    placeholder="—"
                    title="Max length (strings) or max value (numbers)"
                    .value=${r.max==null?"":String(r.max)}
                    @input=${d=>{const f=d.target.value;this.patchColumn(i,{max:f===""?void 0:Number(f)})}}
                  />
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Unique"
                      .checked=${!!r.unique}
                      @change=${d=>this.patchColumn(i,{unique:d.target.checked})}
                    />
                  </span>
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Not null"
                      .checked=${!!r.notnull}
                      @change=${d=>this.patchColumn(i,{notnull:d.target.checked})}
                    />
                  </span>
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Visible — uncheck to hide the column without losing its data"
                      .checked=${!r.hidden}
                      @change=${d=>this.patchColumn(i,{hidden:!d.target.checked})}
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

          ${this.renameDetected()?M`<div class="hint">
                Renamed fields will appear empty for existing rows — the row data
                isn't migrated automatically.
              </div>`:""}
          ${this.errorMsg?M`<div class="error">${this.errorMsg}</div>`:""}
          ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};jt.styles=[rn,tn,Ze`
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
  `];Vt([U()],jt.prototype,"mode",2);Vt([U()],jt.prototype,"editTableId",2);Vt([U()],jt.prototype,"name",2);Vt([U()],jt.prototype,"columns",2);Vt([U()],jt.prototype,"errorMsg",2);Vt([U()],jt.prototype,"dragSrcIdx",2);Vt([U()],jt.prototype,"dropTargetIdx",2);Vt([U()],jt.prototype,"dropEdge",2);Vt([U()],jt.prototype,"previewRows",2);Vt([U()],jt.prototype,"rendererOptions",2);jt=Vt([ot("new-table-dialog")],jt);function xf(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function $f(e,t,r){const i=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&i)return`${e.label}: empty`;if(i)return null;if(e.type==="number"&&typeof t!="number"){const n=Number(t);if(!Number.isFinite(n))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!i){const n=new Date(String(t));if(Number.isNaN(n.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&r?.has(t)?`${e.label}: duplicate`:null}function kf(e,t){const r=[];for(const i of e)if(i.notnull&&t.forEach((n,a)=>{const c=n.data[i.field];(c==null||typeof c=="string"&&c.trim()==="")&&r.push(`Row ${a+1}: ${i.label} is empty.`)}),i.max!=null&&i.max>0&&t.forEach((n,a)=>{const c=n.data[i.field];typeof c=="string"&&c.length>i.max?r.push(`Row ${a+1}: ${i.label} length ${c.length} > max ${i.max}.`):typeof c=="number"&&c>i.max&&r.push(`Row ${a+1}: ${i.label} value ${c} > max ${i.max}.`)}),i.unique){const n=new Map;t.forEach((a,c)=>{const d=a.data[i.field];d==null||d===""||(n.has(d)?r.push(`Row ${c+1}: ${i.label} duplicates row ${n.get(d)+1} ("${String(d)}").`):n.set(d,c))})}return r}function Cf(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Ef(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var Sf=Object.defineProperty,_f=Object.getOwnPropertyDescriptor,Mt=(e,t,r,i)=>{for(var n=i>1?void 0:i?_f(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Sf(t,r,n),n};let kt=class extends Ke{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.builtinNames=[],this.optionalBuiltins=[],this.dirtyBuiltins=!1,this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&nn(this.dialogEl,e)}async open(){const e=await ge(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const r=await e.store.plugins.find();this.records=new Map(r.map(a=>[a.url,a]));const i=[],n=[];for(const a of tf){const c=a.meta?.name;if(c)if(a.meta?.optional){const d=this.records.get(hs(c));n.push({name:c,...a.meta?.description?{description:a.meta.description}:{},...a.meta?.author?{author:a.meta.author}:{},enabled:d?.enabled!==!1})}else i.push(c)}this.builtinNames=i,this.optionalBuiltins=n,this.dirtyBuiltins=!1,this.addUrl="",await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(),this.refreshServerRegistry()}async refreshCatalog(){const e=new URL("/plugins/catalog.json",location.origin).toString();try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json(),i=Array.isArray(r.plugins)?r.plugins:[];this.catalog=i.map(n=>({...n,absUrl:new URL(n.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const r=(await(await ge()).store.settings.findOne("server-sync:url"))?.value;if(typeof r!="string"||r.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const n=`${r.replace(/\/+$/,"")}/plugins/registry`;try{const a=await fetch(n,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);const c=await a.json(),d=Array.isArray(c.plugins)?c.plugins:[];this.serverCatalog=d.map(f=>({...f,absUrl:new URL(f.url,n).toString()})),this.serverCatalogError=null}catch(a){this.serverCatalog=[],this.serverCatalogError=a.message}}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await ge()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const r=await ge();await r.store.workspaces.patch(r.workspaceId,{pluginUrls:this.urls}),await r.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const r=await ge(),i=this.records.get(e);await r.store.plugins.upsert({...i??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...i,url:e,enabled:t,lastFetched:i?.lastFetched??0}))}async removePlugin(e){const t=await ge();this.urls=this.urls.filter(r=>r!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const r=await ge(),i=hs(e),n=this.records.get(i);await r.store.plugins.upsert({...n??{url:i,lastFetched:0},url:i,enabled:t,lastFetched:n?.lastFetched??0}),this.optionalBuiltins=this.optionalBuiltins.map(a=>a.name===e?{...a,enabled:t}:a),this.dirtyBuiltins=!0}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await ge();try{const r=await fetch(e.absUrl,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const i=await r.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:i});const n=new Blob([i],{type:"text/javascript"}),a=URL.createObjectURL(n);try{const d=await import(a);await d.init?.(t.api),await d.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(a),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const c=await t.store.plugins.find();this.records=new Map(c.map(d=>[d.url,d])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(r){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${r.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${r.message}`,{kind:"error",title:"Plugin error"})}finally{const r=new Set(this.installing);r.delete(e.absUrl),this.installing=r}}render(){return M`
      <dialog @cancel=${this.close} @keydown=${kn}>
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
            ${this.catalog.length>0?M`<div class="section-h">Available from this host</div>`:""}
            ${this.catalog.map(e=>{const t=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return M`
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
            ${this.catalogError?M`<div class="meta err">
                  Host catalog unavailable: ${this.catalogError}
                </div>`:""}

            ${this.serverCatalog.length>0||this.serverCatalogError?M`<div class="section-h">From server</div>`:""}
            ${this.serverCatalog.map(e=>{const t=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return M`
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
            ${this.serverCatalogError?M`<div class="meta err">
                  Server registry unavailable: ${this.serverCatalogError}
                </div>`:""}

            ${this.optionalBuiltins.length>0?M`<div class="section-h">Optional built-ins</div>`:""}
            ${this.optionalBuiltins.map(e=>M`
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
            ${this.builtinNames.map(e=>M`
                <div class="row builtin">
                  <span class="mi sm">extension</span>
                  <div>
                    <div>${e}</div>
                    <div class="meta">Built-in</div>
                  </div>
                  <span class="meta">always on</span>
                </div>
              `)}

            ${this.urls.length>0?M`<div class="section-h">Installed (by URL)</div>`:""}
            ${this.urls.map(e=>{const t=this.records.get(e),r=t?.lastError?" error":"",i=t?.lastFetched?new Date(t.lastFetched).toLocaleString():"never";return M`
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
    `}};kt.styles=[rn,tn,Ze`
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
    `];Mt([U()],kt.prototype,"urls",2);Mt([U()],kt.prototype,"records",2);Mt([U()],kt.prototype,"addUrl",2);Mt([U()],kt.prototype,"builtinNames",2);Mt([U()],kt.prototype,"optionalBuiltins",2);Mt([U()],kt.prototype,"dirtyBuiltins",2);Mt([U()],kt.prototype,"catalog",2);Mt([U()],kt.prototype,"catalogError",2);Mt([U()],kt.prototype,"serverCatalog",2);Mt([U()],kt.prototype,"serverCatalogError",2);Mt([U()],kt.prototype,"installing",2);kt=Mt([ot("plugin-manager-dialog")],kt);/**
 * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu
 * @version v4.16.1
 * @homepage https://jspanel.de/
 * @license MIT
 * @author Stefan Sträßer - info@jspanel.de
 * @author of dialog extension: Michael Daumling - michael@terrapinlogo.com
 * @github https://github.com/Flyer53/jsPanel4.git
 */let O={version:"4.16.1",date:"2022-11-03 09:18",ajaxAlwaysCallbacks:[],autopositionSpacing:4,closeOnEscape:(()=>{document.addEventListener("keydown",e=>{(e.key==="Escape"||e.code==="Escape"||e.key==="Esc")&&O.getPanels(t=>t.classList.contains("jsPanel")).some(t=>t.options.closeOnEscape?typeof t.options.closeOnEscape=="function"?t.options.closeOnEscape.call(t,t):(t.close(null,!0),!0):!1)},!1)})(),defaults:{boxShadow:3,container:"window",contentSize:{width:"400px",height:"200px"},dragit:{cursor:"move",handles:".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",opacity:.8,disableOnMaximized:!0},header:!0,headerTitle:"jsPanel",headerControls:{size:"md"},iconfont:void 0,maximizedMargin:0,minimizeTo:"default",paneltype:"standard",position:{my:"center",at:"center"},resizeit:{handles:"n, e, s, w, ne, se, sw, nw",minWidth:128,minHeight:38},theme:"default"},defaultAutocloseConfig:{time:"8s",progressbar:!0},defaultSnapConfig:{sensitivity:70,trigger:"panel",active:"both"},extensions:{},globalCallbacks:!1,icons:{close:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>',maximize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>',normalize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>',minimize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>',smallify:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>'},idCounter:0,isIE:document.documentMode||!1,pointerdown:"onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],pointermove:"onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],pointerup:"onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"],polyfills:(()=>{Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e==null)throw new TypeError("Cannot convert first argument to object");let t=Object(e);for(let r=1;r<arguments.length;r++){let i=arguments[r];if(i==null)continue;i=Object(i);let n=Object.keys(Object(i));for(let a=0,c=n.length;a<c;a++){let d=n[a],f=Object.getOwnPropertyDescriptor(i,d);f!==void 0&&f.enumerable&&(t[d]=i[d])}}return t}}),Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),r=t.length,i=new Array(r);r--;)i[r]=[t[r],e[t[r]]];return i}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(let r=0;r<this.length;r++)e.call(t,this[r],r,this)}),(function(e){e.forEach(function(t){t.append=t.append||function(){let r=Array.prototype.slice.call(arguments),i=document.createDocumentFragment();r.forEach(function(n){let a=n instanceof Node;i.appendChild(a?n:document.createTextNode(String(n)))}),this.appendChild(i)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){let t=(this.document||this.ownerDocument).querySelectorAll(e),r,i=this;do for(r=t.length;--r>=0&&t.item(r)!==i;);while(r<0&&(i=i.parentElement));return i}),(function(){if(typeof window.CustomEvent=="function")return!1;function e(t,r){r=r||{bubbles:!1,cancelable:!1,detail:void 0};let i=document.createEvent("CustomEvent");return i.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),i}e.prototype=window.Event.prototype,window.CustomEvent=e})(),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(t===void 0||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var r=t>0?t|0:0;return this.substring(r,r+e.length)===e}}),String.prototype.includes||(String.prototype.includes=function(e,t){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return t===void 0&&(t=0),this.indexOf(e,t)!==-1}),String.prototype.repeat||(String.prototype.repeat=function(e){if(this==null)throw new TypeError("can't convert "+this+" to object");var t=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),t.length==0||e==0)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,r-t.length),t}),Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw new TypeError('"this" is null or not defined');let r=Object(this),i=r.length>>>0;if(i===0)return!1;let n=t|0,a=Math.max(n>=0?n:i-Math.abs(n),0);function c(d,f){return d===f||typeof d=="number"&&typeof f=="number"&&isNaN(d)&&isNaN(f)}for(;a<i;){if(c(r[a],e))return!0;a++}return!1}})})(),ziBase:100,colorFilledLight:.81,colorFilledDark:.08,colorFilled:0,colorBrightnessThreshold:.55,colorNames:{default:"b0bec5",secondary:"b0bec5",primary:"01579b",info:"039be5",success:"2e7d32",warning:"f57f17",danger:"dd2c00",light:"e0e0e0",dark:"263238",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",grey50:"fafafa",grey100:"f5f5f5",grey200:"eeeeee",grey300:"e0e0e0",grey400:"bdbdbd",grey500:"9e9e9e",grey600:"757575",grey700:"616161",grey800:"424242",grey900:"212121",gray50:"fafafa",gray100:"f5f5f5",gray200:"eeeeee",gray300:"e0e0e0",gray400:"bdbdbd",gray500:"9e9e9e",gray600:"757575",gray700:"616161",gray800:"424242",gray900:"212121",bluegrey50:"eceff1",bluegrey100:"CFD8DC",bluegrey200:"B0BEC5",bluegrey300:"90A4AE",bluegrey400:"78909C",bluegrey500:"607D8B",bluegrey600:"546E7A",bluegrey700:"455A64",bluegrey800:"37474F",bluegrey900:"263238",bluegray50:"eceff1",bluegray100:"CFD8DC",bluegray200:"B0BEC5",bluegray300:"90A4AE",bluegray400:"78909C",bluegray500:"607D8B",bluegray600:"546E7A",bluegray700:"455A64",bluegray800:"37474F",bluegray900:"263238",red50:"FFEBEE",red100:"FFCDD2",red200:"EF9A9A",red300:"E57373",red400:"EF5350",red500:"F44336",red600:"E53935",red700:"D32F2F",red800:"C62828",red900:"B71C1C",reda100:"FF8A80",reda200:"FF5252",reda400:"FF1744",reda700:"D50000",pink50:"FCE4EC",pink100:"F8BBD0",pink200:"F48FB1",pink300:"F06292",pink400:"EC407A",pink500:"E91E63",pink600:"D81B60",pink700:"C2185B",pink800:"AD1457",pink900:"880E4F",pinka100:"FF80AB",pinka200:"FF4081",pinka400:"F50057",pinka700:"C51162",purple50:"F3E5F5",purple100:"E1BEE7",purple200:"CE93D8",purple300:"BA68C8",purple400:"AB47BC",purple500:"9C27B0",purple600:"8E24AA",purple700:"7B1FA2",purple800:"6A1B9A",purple900:"4A148C",purplea100:"EA80FC",purplea200:"E040FB",purplea400:"D500F9",purplea700:"AA00FF",deeppurple50:"EDE7F6",deeppurple100:"D1C4E9",deeppurple200:"B39DDB",deeppurple300:"9575CD",deeppurple400:"7E57C2",deeppurple500:"673AB7",deeppurple600:"5E35B1",deeppurple700:"512DA8",deeppurple800:"4527A0",deeppurple900:"311B92",deeppurplea100:"B388FF",deeppurplea200:"7C4DFF",deeppurplea400:"651FFF",deeppurplea700:"6200EA",indigo50:"E8EAF6",indigo100:"C5CAE9",indigo200:"9FA8DA",indigo300:"7986CB",indigo400:"5C6BC0",indigo500:"3F51B5",indigo600:"3949AB",indigo700:"303F9F",indigo800:"283593",indigo900:"1A237E",indigoa100:"8C9EFF",indigoa200:"536DFE",indigoa400:"3D5AFE",indigoa700:"304FFE",blue50:"E3F2FD",blue100:"BBDEFB",blue200:"90CAF9",blue300:"64B5F6",blue400:"42A5F5",blue500:"2196F3",blue600:"1E88E5",blue700:"1976D2",blue800:"1565C0",blue900:"0D47A1",bluea100:"82B1FF",bluea200:"448AFF",bluea400:"2979FF",bluea700:"2962FF",lightblue50:"E1F5FE",lightblue100:"B3E5FC",lightblue200:"81D4FA",lightblue300:"4FC3F7",lightblue400:"29B6F6",lightblue500:"03A9F4",lightblue600:"039BE5",lightblue700:"0288D1",lightblue800:"0277BD",lightblue900:"01579B",lightbluea100:"80D8FF",lightbluea200:"40C4FF",lightbluea400:"00B0FF",lightbluea700:"0091EA",cyan50:"E0F7FA",cyan100:"B2EBF2",cyan200:"80DEEA",cyan300:"4DD0E1",cyan400:"26C6DA",cyan500:"00BCD4",cyan600:"00ACC1",cyan700:"0097A7",cyan800:"00838F",cyan900:"006064",cyana100:"84FFFF",cyana200:"18FFFF",cyana400:"00E5FF",cyana700:"00B8D4",teal50:"E0F2F1",teal100:"B2DFDB",teal200:"80CBC4",teal300:"4DB6AC",teal400:"26A69A",teal500:"009688",teal600:"00897B",teal700:"00796B",teal800:"00695C",teal900:"004D40",teala100:"A7FFEB",teala200:"64FFDA",teala400:"1DE9B6",teala700:"00BFA5",green50:"E8F5E9",green100:"C8E6C9",green200:"A5D6A7",green300:"81C784",green400:"66BB6A",green500:"4CAF50",green600:"43A047",green700:"388E3C",green800:"2E7D32",green900:"1B5E20",greena100:"B9F6CA",greena200:"69F0AE",greena400:"00E676",greena700:"00C853",lightgreen50:"F1F8E9",lightgreen100:"DCEDC8",lightgreen200:"C5E1A5",lightgreen300:"AED581",lightgreen400:"9CCC65",lightgreen500:"8BC34A",lightgreen600:"7CB342",lightgreen700:"689F38",lightgreen800:"558B2F",lightgreen900:"33691E",lightgreena100:"CCFF90",lightgreena200:"B2FF59",lightgreena400:"76FF03",lightgreena700:"64DD17",lime50:"F9FBE7",lime100:"F0F4C3",lime200:"E6EE9C",lime300:"DCE775",lime400:"D4E157",lime500:"CDDC39",lime600:"C0CA33",lime700:"AFB42B",lime800:"9E9D24",lime900:"827717",limea100:"F4FF81",limea200:"EEFF41",limea400:"C6FF00",limea700:"AEEA00",yellow50:"FFFDE7",yellow100:"FFF9C4",yellow200:"FFF59D",yellow300:"FFF176",yellow400:"FFEE58",yellow500:"FFEB3B",yellow600:"FDD835",yellow700:"FBC02D",yellow800:"F9A825",yellow900:"F57F17",yellowa100:"FFFF8D",yellowa200:"FFFF00",yellowa400:"FFEA00",yellowa700:"FFD600",amber50:"FFF8E1",amber100:"FFECB3",amber200:"FFE082",amber300:"FFD54F",amber400:"FFCA28",amber500:"FFC107",amber600:"FFB300",amber700:"FFA000",amber800:"FF8F00",amber900:"FF6F00",ambera100:"FFE57F",ambera200:"FFD740",ambera400:"FFC400",ambera700:"FFAB00",orange50:"FFF3E0",orange100:"FFE0B2",orange200:"FFCC80",orange300:"FFB74D",orange400:"FFA726",orange500:"FF9800",orange600:"FB8C00",orange700:"F57C00",orange800:"EF6C00",orange900:"E65100",orangea100:"FFD180",orangea200:"FFAB40",orangea400:"FF9100",orangea700:"FF6D00",deeporange50:"FBE9E7",deeporange100:"FFCCBC",deeporange200:"FFAB91",deeporange300:"FF8A65",deeporange400:"FF7043",deeporange500:"FF5722",deeporange600:"F4511E",deeporange700:"E64A19",deeporange800:"D84315",deeporange900:"BF360C",deeporangea100:"FF9E80",deeporangea200:"FF6E40",deeporangea400:"FF3D00",deeporangea700:"DD2C00",brown50:"EFEBE9",brown100:"D7CCC8",brown200:"BCAAA4",brown300:"A1887F",brown400:"8D6E63",brown500:"795548",brown600:"6D4C41",brown700:"5D4037",brown800:"4E342E",brown900:"3E2723","mdb-default":"2BBBAD","mdb-default-dark":"00695c","mdb-primary":"4285F4","mdb-primary-dark":"0d47a1","mdb-secondary":"aa66cc","mdb-secondary-dark":"9933CC","mdb-danger":"ff4444","mdb-danger-dark":"CC0000","mdb-warning":"ffbb33","mdb-warning-dark":"FF8800","mdb-success":"00C851","mdb-success-dark":"007E33","mdb-info":"33b5e5","mdb-info-dark":"0099CC","mdb-elegant":"2E2E2E","mdb-elegant-dark":"212121","mdb-stylish":"4B515D","mdb-stylish-dark":"3E4551","mdb-unique":"3F729B","mdb-unique-dark":"1C2331","mdb-special":"37474F","mdb-special-dark":"263238"},errorReporting:1,modifier:!1,helper:(()=>{document.addEventListener("keydown",e=>O.modifier=e),document.addEventListener("keyup",()=>O.modifier=!1)})(),usePointerEvents(e=!0){e?(this.pointerdown="onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"]):(this.pointerdown="ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="ontouchend"in window?["touchend","mouseup"]:["mouseup"])},pOcontainer(e){if(e==="window")return document.body;if(typeof e=="string"){let t=document.querySelectorAll(e);return t.length&&t.length>0?t:!1}else{if(e.nodeType===1)return e;if(e.length)return e[0]}return!1},pOcontainment(e){let t=e;if(typeof e=="function"&&(t=e()),typeof t=="number")return[t,t,t,t];if(Array.isArray(t)){if(t.length===1)return[t[0],t[0],t[0],t[0]];if(t.length===2)return t.concat(t);t.length===3&&(t[3]=t[1])}return t},pOsize(e,t){let r=t||this.defaults.contentSize;const i=e.parentElement;if(typeof r=="string"){const n=r.trim().split(" ");r={},r.width=n[0],n.length===2?r.height=n[1]:r.height=n[0]}else r.width&&!r.height?r.height=r.width:r.height&&!r.width&&(r.width=r.height);if(String(r.width).match(/^[\d.]+$/gi))r.width+="px";else if(typeof r.width=="string"&&r.width.endsWith("%"))if(i===document.body)r.width=window.innerWidth*(parseFloat(r.width)/100)+"px";else{const n=window.getComputedStyle(i),a=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth);r.width=(parseFloat(n.width)-a)*(parseFloat(r.width)/100)+"px"}else typeof r.width=="function"&&(r.width=r.width.call(e,e),(typeof r.width=="number"||typeof r.width=="string"&&r.width.match(/^[\d.]+$/gi))&&(r.width+="px"));if(String(r.height).match(/^[\d.]+$/gi))r.height+="px";else if(typeof r.height=="string"&&r.height.endsWith("%"))if(i===document.body)r.height=window.innerHeight*(parseFloat(r.height)/100)+"px";else{const n=window.getComputedStyle(i),a=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth);r.height=(parseFloat(n.height)-a)*(parseFloat(r.height)/100)+"px"}else typeof r.height=="function"&&(r.height=r.height.call(e,e),(typeof r.height=="number"||typeof r.height=="string"&&r.height.match(/^[\d.]+$/gi))&&(r.height+="px"));return r},pOborder(e){let t=[],r=e.trim().replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," ").split(" ");return r.forEach((i,n)=>{(i.startsWith("--")||i.startsWith("var"))&&(r[n]=O.getCssVariableValue(i))}),r.forEach(i=>{O.colorNames[i]?t[2]="#"+O.colorNames[i]:i.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/)?t[1]=i:i.match(/(thin|medium|thick)|(\d*\.?\d*(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vmax|vmin|vb|vi|px|cm|mm|Q|in|pc|pt))/)?t[0]=i:t[2]=i}),t[0]||(t[0]="medium"),t[1]||(t[1]="solid"),t[2]||(t[2]=""),t},pOheaderControls(e){if(typeof e=="string"){let t={},r=e.toLowerCase(),i=r.match(/xl|lg|md|sm|xs/),n=r.match(/closeonly|none/);return i&&(t.size=i[0]),n&&(t=Object.assign({},t,{maximize:"remove",normalize:"remove",minimize:"remove",smallify:"remove"}),n[0]==="none"&&(t.close="remove")),Object.assign({},this.defaults.headerControls,t)}else return Object.assign({},this.defaults.headerControls,e)},pOtheme(e){e=e.trim();let t,r="";if(e.match(/^(rgb|hsl|var)/)){let i=e.indexOf(")");t=e.slice(0,i+1).replace(/\s+/g,""),t.startsWith("var")&&(t=O.getCssVariableValue(t)),r=e.slice(i+1,e.length).trim()}else if(e.match(/^(#|\w|--)/)){let i=e.indexOf(" ");i>0?(t=e.slice(0,i+1).replace(/\s+/g,""),r=e.slice(i+1,e.length).trim()):t=e,t.startsWith("--")&&(t=O.getCssVariableValue(t))}if(t.match(/^([\da-f]{3}|[\da-f]{6})$/gi)&&(t="#"+t),r.startsWith("fillcolor")){let i=r.indexOf(" ");r=r.slice(i+1,r.length).trim().replace(/\s+/g,""),r.match(/^([\da-f]{3}|[\da-f]{6})$/gi)?r="#"+r:O.colorNames[r]?r="#"+O.colorNames[r]:r.match(/^(--|var)/)?r=O.getCssVariableValue(r):r="#fff"}return{color:t,colors:!1,filling:r}},color(e){let t=e.toLowerCase(),r,i,n,a,c,d,f,y,k,x={};const I=/^#?([\da-f]{3}|[\da-f]{6})$/gi,V=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,z=/^hsla?\((\d{1,3}),(\d{1,3}%),(\d{1,3}%),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,H=this.colorNames;return H[t]&&(t=H[t]),t.match(I)!==null?(t=t.replace("#",""),t.length%2===1?(r=t.slice(0,1).repeat(2),i=t.slice(1,2).repeat(2),n=t.slice(2,3).repeat(2),x.rgb={r:parseInt(r,16),g:parseInt(i,16),b:parseInt(n,16)},x.hex=`#${r}${i}${n}`):(x.rgb={r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)},x.hex=`#${t}`),k=this.rgbToHsl(x.rgb.r,x.rgb.g,x.rgb.b),x.hsl=k,x.rgb.css=`rgb(${x.rgb.r},${x.rgb.g},${x.rgb.b})`):t.match(V)?(f=V.exec(t),x.rgb={css:t,r:f[1],g:f[2],b:f[3]},x.hex=this.rgbToHex(f[1],f[2],f[3]),k=this.rgbToHsl(f[1],f[2],f[3]),x.hsl=k):t.match(z)?(f=z.exec(t),a=f[1]/360,c=f[2].slice(0,f[2].length-1)/100,d=f[3].slice(0,f[3].length-1)/100,y=this.hslToRgb(a,c,d),x.rgb={css:`rgb(${y[0]},${y[1]},${y[2]})`,r:y[0],g:y[1],b:y[2]},x.hex=this.rgbToHex(x.rgb.r,x.rgb.g,x.rgb.b),x.hsl={css:`hsl(${f[1]},${f[2]},${f[3]})`,h:f[1],s:f[2],l:f[3]}):(x.hex="#f5f5f5",x.rgb={css:"rgb(245,245,245)",r:245,g:245,b:245},x.hsl={css:"hsl(0,0%,96%)",h:0,s:"0%",l:"96%"}),x},calcColors(e){const t=this.colorBrightnessThreshold,r=this.color(e),i=this.lighten(e,this.colorFilledLight),n=this.darken(e,this.colorFilled),a=this.perceivedBrightness(e)<=t?"#ffffff":"#000000",c=this.perceivedBrightness(i)<=t?"#ffffff":"#000000",d=this.perceivedBrightness(n)<=t?"#ffffff":"#000000",f=this.lighten(e,this.colorFilledDark),y=this.perceivedBrightness(f)<=t?"#ffffff":"#000000";return[r.hsl.css,i,n,a,c,d,f,y]},darken(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i-i*t)+"%";return`hsl(${r.h},${r.s},${n})`},lighten(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i+(100-i)*t)+"%";return`hsl(${r.h},${r.s},${n})`},hslToRgb(e,t,r){let i,n,a;if(t===0)i=n=a=r;else{let c=(y,k,x)=>(x<0&&(x+=1),x>1&&(x-=1),x<.16666666666666666?y+(k-y)*6*x:x<.5?k:x<.6666666666666666?y+(k-y)*(.6666666666666666-x)*6:y),d=r<.5?r*(1+t):r+t-r*t,f=2*r-d;i=c(f,d,e+1/3),n=c(f,d,e),a=c(f,d,e-1/3)}return[Math.round(i*255),Math.round(n*255),Math.round(a*255)]},rgbToHsl(e,t,r){e/=255,t/=255,r/=255;let i=Math.max(e,t,r),n=Math.min(e,t,r),a,c,d=(i+n)/2;if(i===n)a=c=0;else{let f=i-n;switch(c=d>.5?f/(2-i-n):f/(i+n),i){case e:a=(t-r)/f+(t<r?6:0);break;case t:a=(r-e)/f+2;break;case r:a=(e-t)/f+4;break}a/=6}return a=Math.round(a*360),c=Math.round(c*100)+"%",d=Math.round(d*100)+"%",{css:"hsl("+a+","+c+","+d+")",h:a,s:c,l:d}},rgbToHex(e,t,r){let i=Number(e).toString(16),n=Number(t).toString(16),a=Number(r).toString(16);return i.length===1&&(i=`0${i}`),n.length===1&&(n=`0${n}`),a.length===1&&(a=`0${a}`),`#${i}${n}${a}`},perceivedBrightness(e){const t=this.color(e).rgb;return t.r/255*.2126+t.g/255*.7152+t.b/255*.0722},pOposition(e){let t={},r=e.trim().split(/\s+/),i=r.filter(c=>c.match(/^(down|right|up|left)$/i));i.length&&(t.autoposition=i[0],r.splice(r.indexOf(i[0]),1));let n=r.filter(c=>c.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i));n.length?(t.my=n[0],t.at=n[1]||n[0],r.splice(r.indexOf(n[0]),1),n[1]&&r.splice(r.indexOf(n[1]),1)):(t.my="center",t.at="center");let a=r.filter(c=>c.match(/^[+-]?\d*\.?\d+[a-z%]*$/i));return a.length&&(t.offsetX=a[0].match(/^[+-]?\d*\.?\d+$/i)?`${a[0]}px`:a[0],a[1]?t.offsetY=a[1].match(/^[+-]?\d*\.?\d+$/i)?`${a[1]}px`:a[1]:t.offsetY=t.offsetX,r.splice(r.indexOf(a[0]),1),a[1]&&r.splice(r.indexOf(a[1]),1)),r.length&&(t.of=r.join(" ")),t},position(e,t){if(!t)return e.style.opacity=1,e;typeof t=="string"?t=Object.assign({},this.defaults.position,this.pOposition(t)):t=Object.assign({},this.defaults.position,t),["my","at","of"].forEach(H=>{typeof t[H]=="function"&&(t[H]=t[H].call(e,e))}),e.options.container==="window"&&(e.style.position="fixed"),typeof e=="string"?e=document.querySelector(e):Object.getPrototypeOf(e).jquery&&(e=e[0]);const r=e.options.container==="window"?"window":e.parentElement,i=e.getBoundingClientRect(),n=e.parentElement.getBoundingClientRect(),a=r==="window"?{left:0,top:0,width:document.documentElement.clientWidth,height:window.innerHeight}:{width:n.width,height:n.height,left:n.left,top:n.top},c=r==="window"?{x:1,y:1}:{x:a.width/r.offsetWidth,y:a.height/r.offsetHeight},d=r==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:window.getComputedStyle(r);a.width-=(parseFloat(d.borderLeftWidth)+parseFloat(d.borderRightWidth))*c.x,a.height-=(parseFloat(d.borderTopWidth)+parseFloat(d.borderBottomWidth))*c.y;let f;t.of?typeof t.of=="string"?f=t.of==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:document.querySelector(t.of).getBoundingClientRect():Object.getPrototypeOf(t.of).jquery?f=t.of[0].getBoundingClientRect():f=t.of.getBoundingClientRect():f=a;let y=this.getScrollbarWidth(document.body),k=this.getScrollbarWidth(e.parentElement),x="0px";t.my.startsWith("left-")?t.at.startsWith("left-")?t.of?x=f.left-a.left-parseFloat(d.borderLeftWidth)+"px":x="0px":t.at.startsWith("center")?t.of?x=f.left-a.left-parseFloat(d.borderLeftWidth)+f.width/2+"px":x=a.width/2+"px":t.at.startsWith("right-")&&(t.of?x=f.left-a.left-parseFloat(d.borderLeftWidth)+f.width+"px":x=a.width+"px"):t.my.startsWith("center")?t.at.startsWith("left-")?t.of?x=f.left-a.left-parseFloat(d.borderLeftWidth)-i.width/2+"px":x=-i.width/2+"px":t.at.startsWith("center")?t.of?x=f.left-a.left-parseFloat(d.borderLeftWidth)-(i.width-f.width)/2+"px":x=a.width/2-i.width/2+"px":t.at.startsWith("right-")&&(t.of?x=f.left-a.left-parseFloat(d.borderLeftWidth)+(f.width-i.width/2)+"px":x=a.width-i.width/2+"px"):t.my.startsWith("right-")&&(t.at.startsWith("left-")?t.of?x=f.left-a.left-parseFloat(d.borderLeftWidth)-i.width+"px":x=-i.width+"px":t.at.startsWith("center")?t.of?x=f.left-a.left-parseFloat(d.borderLeftWidth)-i.width+f.width/2+"px":x=a.width/2-i.width+"px":t.at.startsWith("right-")&&(t.of?x=f.left-a.left-parseFloat(d.borderLeftWidth)+f.width-i.width+"px":x=a.width-i.width+"px",r!=="window"&&(x=parseFloat(x)-k.y+"px")));let I="0px";t.my.endsWith("-top")?t.at.endsWith("-top")?t.of?I=f.top-a.top-parseFloat(d.borderTopWidth)+"px":I="0px":t.at.endsWith("center")?t.of?I=f.top-a.top-parseFloat(d.borderTopWidth)+f.height/2+"px":I=a.height/2+"px":t.at.endsWith("-bottom")&&(t.of?I=f.top-a.top-parseFloat(d.borderTopWidth)+f.height+"px":I=a.height+"px"):t.my.endsWith("center")?t.at.endsWith("-top")?t.of?I=f.top-a.top-parseFloat(d.borderTopWidth)-i.height/2+"px":I=-i.height/2+"px":t.at.endsWith("center")?t.of?I=f.top-a.top-parseFloat(d.borderTopWidth)-i.height/2+f.height/2+"px":I=a.height/2-i.height/2+"px":t.at.endsWith("-bottom")&&(t.of?I=f.top-a.top-parseFloat(d.borderTopWidth)-i.height/2+f.height+"px":I=a.height-i.height/2+"px"):t.my.endsWith("-bottom")&&(t.at.endsWith("-top")?t.of?I=f.top-a.top-parseFloat(d.borderTopWidth)-i.height+"px":I=-i.height+"px":t.at.endsWith("center")?t.of?I=f.top-a.top-parseFloat(d.borderTopWidth)-i.height+f.height/2+"px":I=a.height/2-i.height+"px":t.at.endsWith("-bottom")&&(t.of?I=f.top-a.top-parseFloat(d.borderTopWidth)-i.height+f.height+"px":I=a.height-i.height+"px",r!=="window"?I=parseFloat(I)-k.x+"px":I=parseFloat(I)-y.x+"px")),e.style.left=c.x===1?x:parseFloat(x)/c.x+"px",e.style.top=c.y===1?I:parseFloat(I)/c.y+"px";let V=getComputedStyle(e),z={left:V.left,top:V.top};return t.autoposition&&t.my===t.at&&["left-top","center-top","right-top","left-bottom","center-bottom","right-bottom"].indexOf(t.my)>=0&&(z=this.applyPositionAutopos(e,z,t)),(t.offsetX||t.offsetY)&&(z=this.applyPositionOffset(e,z,t)),(t.minLeft||t.minTop||t.maxLeft||t.maxTop)&&(z=this.applyPositionMinMax(e,z,t)),t.modify&&(z=this.applyPositionModify(e,z,t)),typeof e.options.opacity=="number"?e.style.opacity=e.options.opacity:e.style.opacity=1,e},applyPositionAutopos(e,t,r){const i=`${r.my}-${r.autoposition.toLowerCase()}`;e.classList.add(i);const n=Array.prototype.slice.call(document.querySelectorAll(`.${i}`)),a=n.indexOf(e);if(n.length>1){switch(r.autoposition){case"down":n.forEach((c,d)=>{d>0&&d<=a&&(t.top=parseFloat(t.top)+n[--d].getBoundingClientRect().height+O.autopositionSpacing+"px")});break;case"up":n.forEach((c,d)=>{d>0&&d<=a&&(t.top=parseFloat(t.top)-n[--d].getBoundingClientRect().height-O.autopositionSpacing+"px")});break;case"right":n.forEach((c,d)=>{d>0&&d<=a&&(t.left=parseFloat(t.left)+n[--d].getBoundingClientRect().width+O.autopositionSpacing+"px")});break;case"left":n.forEach((c,d)=>{d>0&&d<=a&&(t.left=parseFloat(t.left)-n[--d].getBoundingClientRect().width-O.autopositionSpacing+"px")});break}e.style.left=t.left,e.style.top=t.top}return{left:t.left,top:t.top}},applyPositionOffset(e,t,r){["offsetX","offsetY"].forEach(n=>{r[n]?(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),isNaN(r[n])===!1&&(r[n]=`${r[n]}px`)):r[n]="0px"}),e.style.left=`calc(${e.style.left} + ${r.offsetX})`,e.style.top=`calc(${e.style.top} + ${r.offsetY})`;const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionMinMax(e,t,r){if(["minLeft","minTop","maxLeft","maxTop"].forEach(n=>{r[n]&&(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),(Number.isInteger(r[n])||r[n].match(/^\d+$/))&&(r[n]=`${r[n]}px`))}),r.minLeft){e.style.left=r.minLeft;let n=getComputedStyle(e).left;parseFloat(n)<parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.minTop){e.style.top=r.minTop;let n=getComputedStyle(e).top;parseFloat(n)<parseFloat(t.top)?e.style.top=t.top:t.top=n}if(r.maxLeft){e.style.left=r.maxLeft;let n=getComputedStyle(e).left;parseFloat(n)>parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.maxTop){e.style.top=r.maxTop;let n=getComputedStyle(e).top;parseFloat(n)>parseFloat(t.top)?e.style.top=t.top:t.top=n}const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionModify(e,t,r){if(r.modify&&typeof r.modify=="function"){const n=r.modify.call(t,t,r);e.style.left=Number.isInteger(n.left)||n.left.match(/^\d+$/)?`${n.left}px`:n.left,e.style.top=Number.isInteger(n.top)||n.top.match(/^\d+$/)?`${n.top}px`:n.top}const i=getComputedStyle(e);return{left:i.left,top:i.top}},autopositionRemaining(e){let t,r=e.options.container;["left-top-down","left-top-right","center-top-down","right-top-down","right-top-left","left-bottom-up","left-bottom-right","center-bottom-up","right-bottom-up","right-bottom-left"].forEach(i=>{e.classList.contains(i)&&(t=i)}),t&&(r==="window"?document.body:typeof r=="string"?document.querySelector(r):r).querySelectorAll(`.${t}`).forEach(n=>n.reposition())},getThemeDetails(e){const t=this.pOtheme(e);if(t.color.startsWith("bootstrap-")){let r=t.color.indexOf("-"),i=document.createElement("button");i.className="btn btn"+t.color.slice(r),document.body.appendChild(i),t.color=getComputedStyle(i).backgroundColor.replace(/\s+/gi,""),document.body.removeChild(i),i=void 0}return t.colors=this.calcColors(t.color),t},clearTheme(e,t){return e.content.classList.remove("jsPanel-content-filled","jsPanel-content-filledlight"),e.header.classList.remove("jsPanel-hdr-light"),e.header.classList.remove("jsPanel-hdr-dark"),e.style.backgroundColor="",this.setStyles(e.headertoolbar,{boxShadow:"",width:"",marginLeft:"",borderTopColor:"transparent"}),this.setStyles(e.content,{background:"",borderTopColor:"transparent"}),e.header.style.background="",Array.prototype.slice.call(e.controlbar.querySelectorAll(".jsPanel-icon")).concat([e.headerlogo,e.headertitle,e.headertoolbar,e.content]).forEach(r=>r.style.color=""),t&&t.call(e,e),e},applyColorTheme(e,t){if(e.style.backgroundColor=t.colors[0],e.header.style.backgroundColor=t.colors[0],e.header.style.color=t.colors[3],[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(r=>e.querySelector(r).style.color=t.colors[3]),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(r=>r.style.color=t.colors[3]),typeof e.options.theme=="string"&&t.filling==="filled"&&(e.content.style.borderTop=t.colors[3]==="#000000"?"1px solid rgba(0,0,0,0.15)":"1px solid rgba(255,255,255,0.15)"),t.colors[3]==="#000000"?e.header.classList.add("jsPanel-hdr-light"):e.header.classList.add("jsPanel-hdr-dark"),t.filling)switch(t.filling){case"filled":this.setStyles(e.content,{backgroundColor:t.colors[2],color:t.colors[3]});break;case"filledlight":e.content.style.backgroundColor=t.colors[1];break;case"filleddark":this.setStyles(e.content,{backgroundColor:t.colors[6],color:t.colors[7]});break;default:e.content.style.backgroundColor=t.filling,e.content.style.color=this.perceivedBrightness(t.filling)<=this.colorBrightnessThreshold?"#fff":"#000"}return e},applyCustomTheme(e,t){let r={bgPanel:"#ffffff",bgContent:"#ffffff",bgFooter:"#f5f5f5",colorHeader:"#000000",colorContent:"#000000",colorFooter:"#000000",border:void 0,borderRadius:void 0},i=typeof t=="object"?Object.assign(r,t):r,n=i.bgPanel,a=i.bgContent,c=i.colorHeader,d=i.colorContent,f=i.bgFooter,y=i.colorFooter;return this.colorNames[n]?e.style.background="#"+this.colorNames[n]:e.style.background=this.getCssVariableValue(n),this.colorNames[c]&&(c="#"+this.colorNames[c]),[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(I=>e.querySelector(I).style.color=this.getCssVariableValue(c)),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(I=>I.style.color=this.getCssVariableValue(c)),this.colorNames[a]?e.content.style.background="#"+this.colorNames[a]:e.content.style.background=this.getCssVariableValue(a),this.colorNames[d]?e.content.style.color="#"+this.colorNames[d]:e.content.style.color=this.getCssVariableValue(d),this.perceivedBrightness(c)>this.colorBrightnessThreshold?e.header.classList.add("jsPanel-hdr-dark"):e.header.classList.add("jsPanel-hdr-light"),this.perceivedBrightness(d)>this.colorBrightnessThreshold?e.content.style.borderTop="1px solid rgba(255,255,255,0.15)":e.content.style.borderTop="1px solid rgba(0,0,0,0.15)",this.colorNames[f]?e.footer.style.background="#"+this.colorNames[f]:e.footer.style.background=this.getCssVariableValue(f),this.colorNames[y]?e.footer.style.color="#"+this.colorNames[y]:e.footer.style.color=this.getCssVariableValue(y),i.border&&e.setBorder(i.border),i.borderRadius&&(e.options.borderRadius=void 0,e.setBorderRadius(i.borderRadius)),e},getCssVariableValue(e){if(e.startsWith("--"))return getComputedStyle(document.documentElement).getPropertyValue(e).replace(/\s+/g,"");if(e.startsWith("var")){let t=e.slice(e.indexOf("(")+1,e.indexOf(")"));return getComputedStyle(document.documentElement).getPropertyValue(t).replace(/\s+/g,"")}return e},getScrollbarWidth(e=document.body){if(e===document.body)return{y:window.innerWidth-document.documentElement.clientWidth,x:window.innerHeight-document.documentElement.clientHeight};{let t=getComputedStyle(e);return{y:e.offsetWidth-e.clientWidth-parseFloat(t.borderRightWidth)-parseFloat(t.borderLeftWidth),x:e.offsetHeight-e.clientHeight-parseFloat(t.borderBottomWidth)-parseFloat(t.borderTopWidth)}}},remClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.remove(r)),e},setClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.add(r)),e},setStyles(e,t){for(const[r,i]of Object.entries(t))e.style[r]=typeof i=="string"?O.getCssVariableValue(i):i;return e},setStyle(e,t){return this.setStyles.call(e,e,t)},strToHtml(e){return document.createRange().createContextualFragment(e)},toggleClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.contains(r)?e.classList.remove(r):e.classList.add(r)),e},emptyNode(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e},addScript(e,t="application/javascript",r){if(!document.querySelector(`script[src="${e}"]`)){const i=document.createElement("script");i.src=e,i.type=t,document.head.appendChild(i),r&&(i.onload=r)}},ajax(e,t){let r,i,n=new XMLHttpRequest;const a={method:"GET",async:!0,user:"",pwd:"",done:function(){if(t){let c=O.strToHtml(this.responseText);r.urlSelector&&(c=c.querySelector(r.urlSelector)),t.contentRemove(),t.content.append(c)}},autoresize:!0,autoreposition:!0};if(t&&typeof e=="string")r=Object.assign({},a,{url:e});else if(typeof e=="object"&&e.url)r=Object.assign({},a,e),r.url=e.url,r.async===!1&&(r.timeout=0,r.withCredentials&&(r.withCredentials=void 0),r.responseType&&(r.responseType=void 0));else{this.errorReporting&&O.errorpanel("XMLHttpRequest seems to miss the <mark>url</mark> parameter!");return}i=r.url.trim().split(/\s+/),r.url=encodeURI(i[0]),i.length>1&&(i.shift(),r.urlSelector=i.join(" ")),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?t?r.done.call(n,n,t):r.done.call(n,n):r.fail&&(t?r.fail.call(n,n,t):r.fail.call(n,n)),r.always&&(t?r.always.call(n,n,t):r.always.call(n,n)),t&&(r.autoresize||r.autoreposition)&&O.ajaxAutoresizeAutoreposition(t,r),O.ajaxAlwaysCallbacks.length&&O.ajaxAlwaysCallbacks.forEach(c=>{t?c.call(n,n,t):c.call(n,n)}))},n.open(r.method,r.url,r.async,r.user,r.pwd),n.timeout=r.timeout||0,r.withCredentials&&(n.withCredentials=r.withCredentials),r.responseType&&(n.responseType=r.responseType),r.beforeSend&&(t?r.beforeSend.call(n,n,t):r.beforeSend.call(n,n)),r.data?n.send(r.data):n.send(null)},fetch(e,t){let r;const i={bodyMethod:"text",autoresize:!0,autoreposition:!0,done:function(a,c){if(c){let d=O.strToHtml(a);c.contentRemove(),c.content.append(d)}}};if(t&&typeof e=="string")r=Object.assign({},i,{resource:encodeURI(e)});else if(typeof e=="object"&&e.resource)r=Object.assign({},i,e),r.resource=encodeURI(e.resource);else{this.errorReporting&&O.errorpanel("Fetch Request seems to miss the <mark>resource</mark> parameter!");return}const n=r.fetchInit||{};r.beforeSend&&(t?r.beforeSend.call(e,e,t):r.beforeSend.call(e,e)),fetch(r.resource,n).then(a=>{if(a.ok)return a[r.bodyMethod]()}).then(a=>{t?r.done.call(a,a,t):r.done.call(a,a),t&&(r.autoresize||r.autoreposition)&&O.ajaxAutoresizeAutoreposition(t,r)})},ajaxAutoresizeAutoreposition(e,t){const r=e.options.contentSize;if(typeof r=="string"&&r.match(/auto/i)){const i=r.split(" "),n=Object.assign({},{width:i[0],height:i[1]});t.autoresize&&e.resize(n),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}else if(typeof r=="object"&&(r.width==="auto"||r.height==="auto")){const i=Object.assign({},r);t.autoresize&&e.resize(i),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}},createPanelTemplate(e=!0){const t=document.createElement("div");return t.className="jsPanel",t.style.left="0",t.style.top="0",e&&["close","maximize","normalize","minimize","smallify"].forEach(r=>{t.setAttribute(`data-btn${r}`,"enabled")}),t.innerHTML=`<div class="jsPanel-hdr">
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
                            </div>`,e},createSnapArea(e,t,r){const i=document.createElement("div"),n=e.parentElement;i.className=`jsPanel-snap-area jsPanel-snap-area-${t}`,t==="lt"||t==="rt"||t==="rb"||t==="lb"?(i.style.width=r+"px",i.style.height=r+"px"):t==="ct"||t==="cb"?i.style.height=r+"px":(t==="lc"||t==="rc")&&(i.style.width=r+"px"),n!==document.body&&(i.style.position="absolute"),document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${t}`)||e.parentElement.appendChild(i)},removeSnapAreas(){document.querySelectorAll(".jsPanel-snap-area").forEach(e=>e.parentElement.removeChild(e))},extend(e){if(Object.prototype.toString.call(e)==="[object Object]")for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this.extensions[t]=e[t])},getPanels(e=function(){return this.classList.contains("jsPanel-standard")}){return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(t=>e.call(t,t)).sort((t,r)=>r.style.zIndex-t.style.zIndex)},processCallbacks(e,t,r="some",i,n){if(typeof t=="function"&&(t=[t]),r)return t[r](a=>a.call(e,e,i,n));t.forEach(a=>a.call(e,e,i,n))},resetZi(){this.zi=((e=O.ziBase)=>{let t=e;return{next:()=>t++}})(),Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((e,t)=>e.style.zIndex-t.style.zIndex).forEach(e=>e.style.zIndex=O.zi.next())},errorpanel(e){this.create({paneltype:"error",dragit:!1,resizeit:!1,theme:{bgPanel:"white",bgContent:"white",colorHeader:"rebeccapurple",colorContent:"#333333",border:"2px solid rebeccapurple"},borderRadius:".33rem",headerControls:"closeonly xs",headerTitle:"&#9888; jsPanel Error",contentSize:{width:"50%",height:"auto"},position:"center-top 0 5 down",animateIn:"jsPanelFadeIn",content:`<div class="jsPanel-error-content-separator"></div><p>${e}</p>`})},create(e={},t){O.zi||(O.zi=((m=O.ziBase)=>{let w=m;return{next:()=>w++}})()),e.config?(e=Object.assign({},this.defaults,e.config,e),delete e.config):e=Object.assign({},this.defaults,e),e.id?typeof e.id=="function"&&(e.id=e.id()):e.id=`jsPanel-${O.idCounter+=1}`;const r=document.getElementById(e.id);if(r!==null){if(r.classList.contains("jsPanel")&&r.front(),this.errorReporting){let m=`&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${e.id}</mark> already exists in the document.`;O.errorpanel(m)}return!1}let i=this.pOcontainer(e.container);if(typeof i=="object"&&i.length&&i.length>0&&(i=i[0]),!i)return this.errorReporting&&O.errorpanel("&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist"),!1;["onbeforeclose","onbeforemaximize","onbeforeminimize","onbeforenormalize","onbeforesmallify","onbeforeunsmallify","onclosed","onfronted","onmaximized","onminimized","onnormalized","onsmallified","onstatuschange","onunsmallified"].forEach(m=>{e[m]?typeof e[m]=="function"&&(e[m]=[e[m]]):e[m]=[]});const n=e.template||this.createPanelTemplate();n.options=e,n.closetimer=void 0,n.status="initialized",n.currentData={},n.header=n.querySelector(".jsPanel-hdr"),n.headerbar=n.header.querySelector(".jsPanel-headerbar"),n.titlebar=n.header.querySelector(".jsPanel-titlebar"),n.headerlogo=n.headerbar.querySelector(".jsPanel-headerlogo"),n.headertitle=n.headerbar.querySelector(".jsPanel-title"),n.controlbar=n.headerbar.querySelector(".jsPanel-controlbar"),n.headertoolbar=n.header.querySelector(".jsPanel-hdr-toolbar"),n.content=n.querySelector(".jsPanel-content"),n.footer=n.querySelector(".jsPanel-ftr"),n.snappableTo=!1,n.snapped=!1,n.droppableTo=!1,n.progressbar=n.autocloseProgressbar=n.querySelector(".jsPanel-progressbar");const a=new CustomEvent("jspanelloaded",{detail:e.id,cancelable:!0}),c=new CustomEvent("jspanelstatuschange",{detail:e.id,cancelable:!0}),d=new CustomEvent("jspanelbeforenormalize",{detail:e.id,cancelable:!0}),f=new CustomEvent("jspanelnormalized",{detail:e.id,cancelable:!0}),y=new CustomEvent("jspanelbeforemaximize",{detail:e.id,cancelable:!0}),k=new CustomEvent("jspanelmaximized",{detail:e.id,cancelable:!0}),x=new CustomEvent("jspanelbeforeminimize",{detail:e.id,cancelable:!0}),I=new CustomEvent("jspanelminimized",{detail:e.id,cancelable:!0}),V=new CustomEvent("jspanelbeforesmallify",{detail:e.id,cancelable:!0}),z=new CustomEvent("jspanelsmallified",{detail:e.id,cancelable:!0}),H=new CustomEvent("jspanelsmallifiedmax",{detail:e.id,cancelable:!0}),se=new CustomEvent("jspanelbeforeunsmallify",{detail:e.id,cancelable:!0}),ce=new CustomEvent("jspanelfronted",{detail:e.id,cancelable:!0}),Ce=new CustomEvent("jspanelbeforeclose",{detail:e.id,cancelable:!0}),Le=new CustomEvent("jspanelclosed",{detail:e.id,cancelable:!0}),ie=new CustomEvent("jspanelcloseduser",{detail:e.id,cancelable:!0});[a,c,d,f,y,k,x,I,V,z,H,se,ce,Ce].forEach(m=>m.panel=n);const oe=n.querySelector(".jsPanel-btn-close"),we=n.querySelector(".jsPanel-btn-maximize"),Pe=n.querySelector(".jsPanel-btn-normalize"),at=n.querySelector(".jsPanel-btn-smallify"),Ct=n.querySelector(".jsPanel-btn-minimize");oe&&O.pointerup.forEach(m=>{oe.addEventListener(m,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.close(null,!0)})}),we&&O.pointerup.forEach(m=>{we.addEventListener(m,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.maximize()})}),Pe&&O.pointerup.forEach(m=>{Pe.addEventListener(m,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.normalize()})}),at&&O.pointerup.forEach(m=>{at.addEventListener(m,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.status==="normalized"||n.status==="maximized"?n.smallify():(n.status==="smallified"||n.status==="smallifiedmax")&&n.unsmallify()})}),Ct&&O.pointerup.forEach(m=>{Ct.addEventListener(m,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.minimize()})});let je=O.extensions;for(let m in je)Object.prototype.hasOwnProperty.call(je,m)&&(n[m]=je[m]);if(n.setBorder=m=>{let w=O.pOborder(m);return w[2].length||(w[2]=n.style.backgroundColor),w=w.join(" "),n.style.border=w,n.options.border=w,n},n.setBorderRadius=m=>{typeof m=="string"&&(m.startsWith("--")||m.startsWith("var"))&&(m=m.replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," "),m=O.getCssVariableValue(m)),typeof m=="number"&&(m+="px"),n.style.borderRadius=m;const w=getComputedStyle(n);return n.options.header?(n.header.style.borderTopLeftRadius=w.borderTopLeftRadius,n.header.style.borderTopRightRadius=w.borderTopRightRadius):(n.content.style.borderTopLeftRadius=w.borderTopLeftRadius,n.content.style.borderTopRightRadius=w.borderTopRightRadius),n.options.footerToolbar?(n.footer.style.borderBottomRightRadius=w.borderBottomRightRadius,n.footer.style.borderBottomLeftRadius=w.borderBottomLeftRadius):(n.content.style.borderBottomRightRadius=w.borderBottomRightRadius,n.content.style.borderBottomLeftRadius=w.borderBottomLeftRadius),n},n.setTheme=(m=e.theme,w)=>{let P;if(n.status==="minimized"&&(P=!0,n.normalize()),O.clearTheme(n),typeof m=="object")e.border=void 0,O.applyCustomTheme(n,m);else if(typeof m=="string"){m==="none"&&(m="white");let g=O.getThemeDetails(m);O.applyColorTheme(n,g)}return P&&n.minimize(),w&&w.call(n,n),n},n.remove=(m,w,P)=>{n.parentElement.removeChild(n),document.getElementById(m)?P&&P.call(n,m,n):(n.removeMinimizedReplacement(),n.status="closed",w&&document.dispatchEvent(ie),document.dispatchEvent(Le),n.options.onclosed&&O.processCallbacks(n,n.options.onclosed,"every",w),O.autopositionRemaining(n),P&&P.call(m,m)),window.removeEventListener("resize",n.windowResizeHandler),document.removeEventListener("jspanelresize",n.parentResizeHandler)},n.close=(m,w)=>{if(n.parentElement){if(n.closetimer&&window.clearInterval(n.closetimer),document.dispatchEvent(Ce),n.statusBefore=n.status,n.options.onbeforeclose&&n.options.onbeforeclose.length>0&&!O.processCallbacks(n,n.options.onbeforeclose,"some",n.status,w))return n;n.options.animateOut?(n.options.animateIn&&O.remClass(n,n.options.animateIn),O.setClass(n,n.options.animateOut),n.addEventListener("animationend",P=>{P.stopPropagation(),n.remove(n.id,w,m)})):n.remove(n.id,w,m)}},n.maximize=(m,w)=>{if(n.statusBefore=n.status,e.onbeforemaximize&&e.onbeforemaximize.length>0&&!O.processCallbacks(n,e.onbeforemaximize,"some",n.statusBefore))return n;document.dispatchEvent(y);const P=n.parentElement,g=O.pOcontainment(e.maximizedMargin);return P===document.body?(n.style.width=document.documentElement.clientWidth-g[1]-g[3]+"px",n.style.height=document.documentElement.clientHeight-g[0]-g[2]+"px",n.style.left=g[3]+"px",n.style.top=g[0]+"px"):(n.style.width=P.clientWidth-g[1]-g[3]+"px",n.style.height=P.clientHeight-g[0]-g[2]+"px",n.style.left=g[3]+"px",n.style.top=g[0]+"px"),at.style.transform="unset",n.removeMinimizedReplacement(),n.status="maximized",n.setControls([".jsPanel-btn-maximize"]),w||n.front(),document.dispatchEvent(k),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),m&&m.call(n,n,n.statusBefore),e.onmaximized&&O.processCallbacks(n,e.onmaximized,"every",n.statusBefore),n},n.minimize=m=>{if(n.status==="minimized"||(n.statusBefore=n.status,e.onbeforeminimize&&e.onbeforeminimize.length>0&&!O.processCallbacks(n,e.onbeforeminimize,"some",n.statusBefore)))return n;if(document.dispatchEvent(x),!document.getElementById("jsPanel-replacement-container")){const w=document.createElement("div");w.id="jsPanel-replacement-container",document.body.append(w)}if(n.style.left="-9999px",n.status="minimized",document.dispatchEvent(I),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),e.minimizeTo){let w=n.createMinimizedReplacement(),P,g,C;switch(e.minimizeTo){case"default":document.getElementById("jsPanel-replacement-container").append(w);break;case"parentpanel":g=n.closest(".jsPanel-content").parentElement,C=g.querySelectorAll(".jsPanel-minimized-box"),P=C[C.length-1],P.append(w);break;case"parent":g=n.parentElement,P=g.querySelector(".jsPanel-minimized-container"),P||(P=document.createElement("div"),P.className="jsPanel-minimized-container",g.append(P)),P.append(w);break;default:document.querySelector(e.minimizeTo).append(w)}}return m&&m.call(n,n,n.statusBefore),e.onminimized&&O.processCallbacks(n,e.onminimized,"every",n.statusBefore),n},n.normalize=m=>(n.status==="normalized"||(n.statusBefore=n.status,e.onbeforenormalize&&e.onbeforenormalize.length>0&&!O.processCallbacks(n,e.onbeforenormalize,"some",n.statusBefore))||(document.dispatchEvent(d),n.style.width=n.currentData.width,n.style.height=n.currentData.height,n.snapped?n.snap(n.snapped,!0):(n.style.left=n.currentData.left,n.style.top=n.currentData.top),at.style.transform="unset",n.removeMinimizedReplacement(),n.status="normalized",n.setControls([".jsPanel-btn-normalize"]),n.front(),document.dispatchEvent(f),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),m&&m.call(n,n,n.statusBefore),e.onnormalized&&O.processCallbacks(n,e.onnormalized,"every",n.statusBefore)),n),n.smallify=m=>{if(n.status==="smallified"||n.status==="smallifiedmax"||(n.statusBefore=n.status,e.onbeforesmallify&&e.onbeforesmallify.length>0&&!O.processCallbacks(n,e.onbeforesmallify,"some",n.statusBefore)))return n;document.dispatchEvent(V),n.style.overflow="hidden";const w=window.getComputedStyle(n),P=parseFloat(window.getComputedStyle(n.headerbar).height);n.style.height=parseFloat(w.borderTopWidth)+parseFloat(w.borderBottomWidth)+P+"px",at.style.transform="rotate(180deg)",n.status==="normalized"?(n.setControls([".jsPanel-btn-normalize"]),n.status="smallified",document.dispatchEvent(z),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="maximized"&&(n.setControls([".jsPanel-btn-maximize"]),n.status="smallifiedmax",document.dispatchEvent(H),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore));const g=n.querySelectorAll(".jsPanel-minimized-box");return g[g.length-1].style.display="none",m&&m.call(n,n,n.statusBefore),e.onsmallified&&O.processCallbacks(n,e.onsmallified,"every",n.statusBefore),n},n.unsmallify=m=>{if(n.statusBefore=n.status,n.status==="smallified"||n.status==="smallifiedmax"){if(e.onbeforeunsmallify&&e.onbeforeunsmallify.length>0&&!O.processCallbacks(n,e.onbeforeunsmallify,"some",n.statusBefore))return n;document.dispatchEvent(se),n.style.overflow="visible",n.front(),n.status==="smallified"?(n.style.height=n.currentData.height,n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(f),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="smallifiedmax"?n.maximize():n.status==="minimized"&&n.normalize(),at.style.transform="rotate(0deg)";const w=n.querySelectorAll(".jsPanel-minimized-box");w[w.length-1].style.display="flex",m&&m.call(n,n,n.statusBefore),e.onunsmallified&&O.processCallbacks(n,e.onunsmallified,"every",n.statusBefore)}return n},n.front=(m,w=!0)=>{if(n.status==="minimized")n.statusBefore==="maximized"?n.maximize():n.normalize();else{const P=Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(g=>g.style.zIndex);Math.max(...P)>n.style.zIndex&&(n.style.zIndex=O.zi.next()),O.resetZi()}return document.dispatchEvent(ce),m&&m.call(n,n),e.onfronted&&w&&O.processCallbacks(n,e.onfronted,"every",n.status),n},n.snap=(m,w=!1)=>{if(w||(n.currentData.beforeSnap={width:n.currentData.width,height:n.currentData.height}),m&&typeof m=="function"&&!w)m.call(n,n,n.snappableTo);else if(m!==!1){let P=[0,0];if(n.options.dragit.snap.containment&&n.options.dragit.containment){const g=O.pOcontainment(n.options.dragit.containment),C=n.snappableTo;C.startsWith("left")?P[0]=g[3]:C.startsWith("right")&&(P[0]=-g[1]),C.endsWith("top")?P[1]=g[0]:C.endsWith("bottom")&&(P[1]=-g[2])}n.reposition(`${n.snappableTo} ${P[0]} ${P[1]}`)}w||(n.snapped=n.snappableTo)},n.move=(m,w)=>{let P=n.overlaps(m,"paddingbox"),g=n.parentElement;return m.appendChild(n),n.options.container=m,n.style.left=P.left+"px",n.style.top=P.top+"px",n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors(),w&&w.call(n,n,m,g),n},n.closeChildpanels=m=>(n.getChildpanels().forEach(w=>w.close()),m&&m.call(n,n),n),n.getChildpanels=m=>{const w=n.content.querySelectorAll(".jsPanel");return m&&w.forEach((P,g,C)=>{m.call(P,P,g,C)}),w},n.isChildpanel=m=>{const w=n.closest(".jsPanel-content"),P=w?w.parentElement:null;return m&&m.call(n,n,P),w?P:!1},n.contentRemove=m=>(O.emptyNode(n.content),m&&m.call(n,n),n),n.createMinimizedReplacement=()=>{const m=O.createMinimizedTemplate(),w=window.getComputedStyle(n.headertitle).color,P=window.getComputedStyle(n),g=e.iconfont,C=m.querySelector(".jsPanel-controlbar");return n.options.header!=="auto-show-hide"?O.setStyles(m,{backgroundColor:P.backgroundColor,backgroundPositionX:P.backgroundPositionX,backgroundPositionY:P.backgroundPositionY,backgroundRepeat:P.backgroundRepeat,backgroundAttachment:P.backgroundAttachment,backgroundImage:P.backgroundImage,backgroundSize:P.backgroundSize,backgroundOrigin:P.backgroundOrigin,backgroundClip:P.backgroundClip}):m.style.backgroundColor=window.getComputedStyle(n.header).backgroundColor,m.id=n.id+"-min",m.querySelector(".jsPanel-headerbar").replaceChild(n.headerlogo.cloneNode(!0),m.querySelector(".jsPanel-headerlogo")),m.querySelector(".jsPanel-titlebar").replaceChild(n.headertitle.cloneNode(!0),m.querySelector(".jsPanel-title")),m.querySelector(".jsPanel-titlebar").setAttribute("title",n.headertitle.textContent),m.querySelector(".jsPanel-title").style.color=w,C.style.color=w,C.querySelectorAll("button").forEach(ae=>ae.style.color=w),["jsPanel-hdr-dark","jsPanel-hdr-light"].forEach(ae=>{n.header.classList.contains(ae)&&m.querySelector(".jsPanel-hdr").classList.add(ae)}),n.setIconfont(g,m),n.dataset.btnnormalize==="enabled"?O.pointerup.forEach(ae=>{m.querySelector(".jsPanel-btn-normalize").addEventListener(ae,he=>{if(he.preventDefault(),he.button&&he.button>0)return!1;n.normalize()})}):C.querySelector(".jsPanel-btn-normalize").style.display="none",n.dataset.btnmaximize==="enabled"?O.pointerup.forEach(ae=>{m.querySelector(".jsPanel-btn-maximize").addEventListener(ae,he=>{if(he.preventDefault(),he.button&&he.button>0)return!1;n.maximize()})}):C.querySelector(".jsPanel-btn-maximize").style.display="none",n.dataset.btnclose==="enabled"?O.pointerup.forEach(ae=>{m.querySelector(".jsPanel-btn-close").addEventListener(ae,he=>{if(he.preventDefault(),he.button&&he.button>0)return!1;n.close(null,!0)})}):C.querySelector(".jsPanel-btn-close").style.display="none",m},n.removeMinimizedReplacement=()=>{const m=document.getElementById(`${n.id}-min`);m&&m.parentElement.removeChild(m)},n.drag=(m={})=>{let w,P,g;const C=new CustomEvent("jspaneldragstart",{detail:n.id}),ae=new CustomEvent("jspaneldrag",{detail:n.id}),he=new CustomEvent("jspaneldragstop",{detail:n.id});[C,ae,he].forEach(Ne=>Ne.panel=n);const q=Ne=>{let Fe=Ne.split("-");return Fe.forEach(($e,Te)=>{Fe[Te]=$e.charAt(0).toUpperCase()+$e.slice(1)}),"snap"+Fe.join("")};function Y(Ne){Ne.relatedTarget===null&&O.pointermove.forEach(Fe=>{document.removeEventListener(Fe,P,!1),n.style.opacity=1})}let Ve=m.handles||O.defaults.dragit.handles,lt=m.cursor||O.defaults.dragit.cursor;function Xt(Ne){if(O.pointermove.forEach(Fe=>document.removeEventListener(Fe,P)),O.removeSnapAreas(),w){if(n.style.opacity=1,w=void 0,g.snap){switch(n.snappableTo){case"left-top":n.snap(g.snap.snapLeftTop);break;case"center-top":n.snap(g.snap.snapCenterTop);break;case"right-top":n.snap(g.snap.snapRightTop);break;case"right-center":n.snap(g.snap.snapRightCenter);break;case"right-bottom":n.snap(g.snap.snapRightBottom);break;case"center-bottom":n.snap(g.snap.snapCenterBottom);break;case"left-bottom":n.snap(g.snap.snapLeftBottom);break;case"left-center":n.snap(g.snap.snapLeftCenter);break}g.snap.callback&&n.snappableTo&&typeof g.snap.callback=="function"&&(g.snap.callback.call(n,n),g.snap.repositionOnSnap&&g.snap[q(n.snappableTo)]!==!1&&n.repositionOnSnap(n.snappableTo)),n.snappableTo&&g.snap.repositionOnSnap&&g.snap[q(n.snappableTo)]&&n.repositionOnSnap(n.snappableTo)}if(n.droppableTo&&n.droppableTo){let Fe=n.parentElement;n.move(n.droppableTo),g.drop.callback&&g.drop.callback.call(n,n,n.droppableTo,Fe)}if(document.dispatchEvent(he),g.stop.length){let Fe=window.getComputedStyle(n),$e={left:parseFloat(Fe.left),top:parseFloat(Fe.top),width:parseFloat(Fe.width),height:parseFloat(Fe.height)};O.processCallbacks(n,g.stop,!1,$e,Ne)}n.saveCurrentPosition(),n.calcSizeFactors()}n.controlbar.style.pointerEvents="inherit",n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Fe=>Fe.style.pointerEvents="auto"),document.removeEventListener(Ne,Xt)}return n.querySelectorAll(Ve).forEach(Ne=>{Ne.style.touchAction="none",Ne.style.cursor=lt,O.pointerdown.forEach(Fe=>{Ne.addEventListener(Fe,$e=>{if($e.button&&$e.button>0||(g=Object.assign({},O.defaults.dragit,m),g.disableOnMaximized&&n.status==="maximized"))return!1;if((g.containment||g.containment===0)&&(g.containment=O.pOcontainment(g.containment)),g.grid&&Array.isArray(g.grid)&&g.grid.length===1&&(g.grid[1]=g.grid[0]),g.snap&&(typeof g.snap=="object"?g.snap=Object.assign({},O.defaultSnapConfig,g.snap):g.snap=O.defaultSnapConfig),$e.target.closest(".jsPanel-ftr-btn"))return;n.controlbar.style.pointerEvents="none",n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(Je=>Je.style.pointerEvents="none");let Te=window.getComputedStyle(n),Ye=parseFloat(Te.left),_e=parseFloat(Te.top),ee=parseFloat(Te.width),Xe=parseFloat(Te.height),ze=$e.touches?$e.touches[0].clientX:$e.clientX,de=$e.touches?$e.touches[0].clientY:$e.clientY,be=n.parentElement,Et=be.getBoundingClientRect(),le=window.getComputedStyle(be),Ge=n.getScaleFactor(),fn=0,Nt=O.getScrollbarWidth(be);P=Je=>{if(Je.preventDefault(),!w){if(document.dispatchEvent(C),n.style.opacity=g.opacity,n.snapped&&g.snap.resizeToPreSnap&&n.currentData.beforeSnap){n.resize(n.currentData.beforeSnap.width+" "+n.currentData.beforeSnap.height),n.setControls([".jsPanel-btn-normalize"]);let ne=n.getBoundingClientRect(),Ae=ze-(ne.left+ne.width),fe=ne.width/2;Ae>-fe&&(fn=Ae+fe)}if(n.front(),n.snapped=!1,n.status==="maximized"&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized"),g.drop&&g.drop.dropZones){let ne=g.drop.dropZones.map(fe=>O.pOcontainer(fe)),Ae=[];ne.forEach(function(fe){fe.length?fe.forEach(function(Oe){Ae.push(Oe)}):Ae.push(fe)}),Ae=Ae.filter(function(fe,Oe,He){return He.indexOf(fe)===Oe}),g.drop.dropZones=Ae}g.start.length&&O.processCallbacks(n,g.start,!1,{left:Ye,top:_e,width:ee,height:Xe},Je)}w=1;let St,Re,qe,vt,tt,Ee,ke,_t,Ue,gt,ut=Je.touches?Je.touches[0].clientX:Je.clientX,nt=Je.touches?Je.touches[0].clientY:Je.clientY,Be=window.getComputedStyle(n),ue;if(be===document.body){let ne=n.getBoundingClientRect();Ue=window.innerWidth-parseInt(le.borderLeftWidth,10)-parseInt(le.borderRightWidth,10)-(ne.left+ne.width),gt=window.innerHeight-parseInt(le.borderTopWidth,10)-parseInt(le.borderBottomWidth,10)-(ne.top+ne.height)}else Ue=parseInt(le.width,10)-parseInt(le.borderLeftWidth,10)-parseInt(le.borderRightWidth,10)-(parseInt(Be.left,10)+parseInt(Be.width,10)),gt=parseInt(le.height,10)-parseInt(le.borderTopWidth,10)-parseInt(le.borderBottomWidth,10)-(parseInt(Be.top,10)+parseInt(Be.height,10));St=parseFloat(Be.left),qe=parseFloat(Be.top),tt=Ue,ke=gt,g.snap&&(g.snap.trigger==="panel"?(Re=St**2,vt=qe**2,Ee=tt**2,_t=ke**2):g.snap.trigger==="pointer"&&(n.options.container==="window"?(St=ut,qe=nt,tt=window.innerWidth-ut,ke=window.innerHeight-nt,Re=ut**2,vt=qe**2,Ee=tt**2,_t=ke**2):(ue=n.overlaps(be,"paddingbox",Je),St=ue.pointer.left,qe=ue.pointer.top,tt=ue.pointer.right,ke=ue.pointer.bottom,Re=ue.pointer.left**2,vt=ue.pointer.top**2,Ee=ue.pointer.right**2,_t=ue.pointer.bottom**2)));let Qe=Math.sqrt(Re+vt),G=Math.sqrt(Re+_t),rt=Math.sqrt(Ee+vt),ft=Math.sqrt(Ee+_t),$t=Math.abs(St-tt)/2,Q=Math.abs(qe-ke)/2,Gt=Math.sqrt(Re+Q**2),sn=Math.sqrt(vt+$t**2),dt=Math.sqrt(Ee+Q**2),pn=Math.sqrt(_t+$t**2);if(window.getSelection().removeAllRanges(),document.dispatchEvent(ae),(!g.axis||g.axis==="x")&&(n.style.left=Ye+(ut-ze)/Ge.x+fn+"px"),(!g.axis||g.axis==="y")&&(n.style.top=_e+(nt-de)/Ge.y+"px"),g.grid){let ne=g.grid,Ae=g.axis,fe=ne[0]*Math.round((Ye+(ut-ze))/ne[0]),Oe=ne[1]*Math.round((_e+(nt-de))/ne[1]);(!Ae||Ae==="x")&&(n.style.left=`${fe}px`),(!Ae||Ae==="y")&&(n.style.top=`${Oe}px`)}if(g.containment||g.containment===0){let ne=g.containment,Ae,fe;if(n.options.container==="window")Ae=window.innerWidth-parseFloat(Be.width)-ne[1]-Nt.y,fe=window.innerHeight-parseFloat(Be.height)-ne[2]-Nt.x;else{let Oe=parseFloat(le.borderLeftWidth)+parseFloat(le.borderRightWidth),He=parseFloat(le.borderTopWidth)+parseFloat(le.borderBottomWidth);Ae=Et.width/Ge.x-parseFloat(Be.width)-ne[1]-Oe-Nt.y,fe=Et.height/Ge.y-parseFloat(Be.height)-ne[2]-He-Nt.x}parseFloat(n.style.left)<=ne[3]&&(n.style.left=ne[3]+"px"),parseFloat(n.style.top)<=ne[0]&&(n.style.top=ne[0]+"px"),parseFloat(n.style.left)>=Ae&&(n.style.left=Ae+"px"),parseFloat(n.style.top)>=fe&&(n.style.top=fe+"px")}if(g.drag.length){let ne={left:St,top:qe,right:tt,bottom:ke,width:parseFloat(Be.width),height:parseFloat(Be.height)};O.processCallbacks(n,g.drag,!1,ne,Je)}if(g.snap){let ne=g.snap.sensitivity,Ae=be===document.body?window.innerWidth/8:Et.width/8,fe=be===document.body?window.innerHeight/8:Et.height/8;n.snappableTo=!1,O.removeSnapAreas(),Qe<ne?g.snap.snapLeftTop!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="left-top",O.createSnapArea(n,"lt",ne)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(ue.pointer.left>0&&ue.pointer.top>0?(n.snappableTo="left-top",O.createSnapArea(n,"lt",ne)):(n.snappableTo=!1,O.removeSnapAreas()))):G<ne?g.snap.snapLeftBottom!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="left-bottom",O.createSnapArea(n,"lb",ne)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(ue.pointer.left>0&&ue.pointer.bottom>0?(n.snappableTo="left-bottom",O.createSnapArea(n,"lb",ne)):(n.snappableTo=!1,O.removeSnapAreas()))):rt<ne?g.snap.snapRightTop!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="right-top",O.createSnapArea(n,"rt",ne)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(ue.pointer.right>0&&ue.pointer.top>0?(n.snappableTo="right-top",O.createSnapArea(n,"rt",ne)):(n.snappableTo=!1,O.removeSnapAreas()))):ft<ne?g.snap.snapRightBottom!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="right-bottom",O.createSnapArea(n,"rb",ne)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(ue.pointer.right>0&&ue.pointer.bottom>0?(n.snappableTo="right-bottom",O.createSnapArea(n,"rb",ne)):(n.snappableTo=!1,O.removeSnapAreas()))):qe<ne&&sn<Ae?g.snap.snapCenterTop!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="center-top",O.createSnapArea(n,"ct",ne)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(ue.pointer.top>0?(n.snappableTo="center-top",O.createSnapArea(n,"ct",ne)):(n.snappableTo=!1,O.removeSnapAreas()))):St<ne&&Gt<fe?g.snap.snapLeftCenter!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="left-center",O.createSnapArea(n,"lc",ne)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(ue.pointer.left>0?(n.snappableTo="left-center",O.createSnapArea(n,"lc",ne)):(n.snappableTo=!1,O.removeSnapAreas()))):tt<ne&&dt<fe?g.snap.snapRightCenter!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="right-center",O.createSnapArea(n,"rc",ne)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(ue.pointer.right>0?(n.snappableTo="right-center",O.createSnapArea(n,"rc",ne)):(n.snappableTo=!1,O.removeSnapAreas()))):ke<ne&&pn<Ae&&g.snap.snapCenterBottom!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="center-bottom",O.createSnapArea(n,"cb",ne)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(ue.pointer.bottom>0?(n.snappableTo="center-bottom",O.createSnapArea(n,"cb",ne)):(n.snappableTo=!1,O.removeSnapAreas())))}if(g.drop&&g.drop.dropZones){let ne=O.isIE?"msElementsFromPoint":"elementsFromPoint",Ae=document[ne](Je.clientX,Je.clientY);Array.isArray(Ae)||(Ae=Array.prototype.slice.call(Ae)),g.drop.dropZones.forEach(fe=>{Ae.includes(fe)&&(n.droppableTo=fe)}),Ae.includes(n.droppableTo)||(n.droppableTo=!1)}},O.pointermove.forEach(Je=>document.addEventListener(Je,P)),window.addEventListener("mouseout",Y,!1)})}),O.pointerup.forEach(Fe=>{document.addEventListener(Fe,Xt),window.removeEventListener("mouseout",Y)}),m.disable&&(Ne.style.pointerEvents="none")}),n},n.dragit=m=>{const w=Object.assign({},O.defaults.dragit,e.dragit),P=n.querySelectorAll(w.handles);return m==="disable"?P.forEach(g=>g.style.pointerEvents="none"):P.forEach(g=>g.style.pointerEvents="auto"),n},n.sizeit=(m={})=>{const w=new CustomEvent("jspanelresizestart",{detail:n.id}),P=new CustomEvent("jspanelresize",{detail:n.id}),g=new CustomEvent("jspanelresizestop",{detail:n.id});[w,P,g].forEach($e=>$e.panel=n);let C={},ae,he,q,Y,Ve,lt;C.handles=m.handles||O.defaults.resizeit.handles,C.handles.split(",").forEach($e=>{const Te=document.createElement("DIV");Te.className=`jsPanel-resizeit-handle jsPanel-resizeit-${$e.trim()}`,n.append(Te)});let Xt=m.aspectRatio?m.aspectRatio:!1;function Ne($e){$e.relatedTarget===null&&O.pointermove.forEach(Te=>document.removeEventListener(Te,ae,!1))}function Fe($e){if(O.pointermove.forEach(Te=>document.removeEventListener(Te,ae,!1)),$e.target.classList&&$e.target.classList.contains("jsPanel-resizeit-handle")){let Te,Ye,_e=$e.target.className;if(_e.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)&&(Te=!0),_e.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)&&(Ye=!0),C.grid&&Array.isArray(C.grid)){C.grid.length===1&&(C.grid[1]=C.grid[0]);const ee=parseFloat(n.style.width),Xe=parseFloat(n.style.height),ze=ee%C.grid[0],de=Xe%C.grid[1],be=parseFloat(n.style.left),Et=parseFloat(n.style.top),le=be%C.grid[0],Ge=Et%C.grid[1];ze<C.grid[0]/2?n.style.width=ee-ze+"px":n.style.width=ee+(C.grid[0]-ze)+"px",de<C.grid[1]/2?n.style.height=Xe-de+"px":n.style.height=Xe+(C.grid[1]-de)+"px",Te&&(le<C.grid[0]/2?n.style.left=be-le+"px":n.style.left=be+(C.grid[0]-le)+"px"),Ye&&(Ge<C.grid[1]/2?n.style.top=Et-Ge+"px":n.style.top=Et+(C.grid[1]-Ge)+"px")}}if(he){n.content.style.pointerEvents="inherit",he=void 0,n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors();let Te=n.controlbar.querySelector(".jsPanel-btn-smallify"),Ye=n.getBoundingClientRect();if(Te&&Ye.height>lt+5&&(Te.style.transform="rotate(0deg)"),document.dispatchEvent(g),C.stop.length){let _e=window.getComputedStyle(n),ee={left:parseFloat(_e.left),top:parseFloat(_e.top),width:parseFloat(_e.width),height:parseFloat(_e.height)};O.processCallbacks(n,C.stop,!1,ee,$e)}}n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Te=>Te.style.pointerEvents="auto"),C.aspectRatio=Xt,document.removeEventListener($e,Fe)}return n.querySelectorAll(".jsPanel-resizeit-handle").forEach($e=>{$e.style.touchAction="none",O.pointerdown.forEach(Te=>{$e.addEventListener(Te,Ye=>{if(Ye.preventDefault(),Ye.stopPropagation(),Ye.button&&Ye.button>0)return!1;let _e=1;if(C=Object.assign({},O.defaults.resizeit,m),(C.containment||C.containment===0)&&(C.containment=O.pOcontainment(C.containment)),C.aspectRatio&&C.aspectRatio===!0&&(C.aspectRatio="panel"),O.modifier){let fe=O.modifier;fe.altKey?C.aspectRatio="content":fe.ctrlKey?C.aspectRatio="panel":fe.shiftKey&&(C.aspectRatio=!1,_e=2)}let ee=typeof C.maxWidth=="function"?C.maxWidth():C.maxWidth||1e4,Xe=typeof C.maxHeight=="function"?C.maxHeight():C.maxHeight||1e4,ze=typeof C.minWidth=="function"?C.minWidth():C.minWidth,de=typeof C.minHeight=="function"?C.minHeight():C.minHeight;n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(fe=>fe.style.pointerEvents="none");const be=n.parentElement,Et=be.tagName.toLowerCase(),le=n.getBoundingClientRect(),Ge=be.getBoundingClientRect(),fn=window.getComputedStyle(be,null),Nt=parseInt(fn.borderLeftWidth,10),Je=parseInt(fn.borderTopWidth,10),St=fn.getPropertyValue("position"),Re=Ye.clientX||Ye.clientX===0||Ye.touches[0].clientX,qe=Ye.clientY||Ye.clientY===0||Ye.touches[0].clientY,vt=Re/qe,tt=Ye.target.classList,Ee=n.getScaleFactor(),ke=le.width/le.height,_t=n.content.getBoundingClientRect(),Ue=_t.width/_t.height,gt=n.header.getBoundingClientRect().height,ut=n.footer.getBoundingClientRect().height||0;let nt=le.left,Be=le.top,ue=1e4,Qe=1e4,G=1e4,rt=1e4;Ve=le.width,lt=le.height,Et!=="body"&&(nt=le.left-Ge.left+be.scrollLeft,Be=le.top-Ge.top+be.scrollTop),Et==="body"&&C.containment?(ue=document.documentElement.clientWidth-le.left,G=document.documentElement.clientHeight-le.top,Qe=le.width+le.left,rt=le.height+le.top):C.containment&&(St==="static"?(ue=Ge.width-le.left+Nt,G=Ge.height+Ge.top-le.top+Je,Qe=le.width+(le.left-Ge.left)-Nt,rt=le.height+(le.top-Ge.top)-Je):(ue=be.clientWidth-(le.left-Ge.left)/Ee.x+Nt,G=be.clientHeight-(le.top-Ge.top)/Ee.y+Je,Qe=(le.width+le.left-Ge.left)/Ee.x-Nt,rt=n.clientHeight+(le.top-Ge.top)/Ee.y-Je)),C.containment&&(Qe-=C.containment[3],rt-=C.containment[0],ue-=C.containment[1],G-=C.containment[2]);const ft=window.getComputedStyle(n),$t=parseFloat(ft.width)-le.width,Q=parseFloat(ft.height)-le.height;let Gt=parseFloat(ft.left)-le.left,sn=parseFloat(ft.top)-le.top;be!==document.body&&(Gt+=Ge.left,sn+=Ge.top);let dt=parseInt(ft.borderTopWidth,10),pn=parseInt(ft.borderRightWidth,10),ne=parseInt(ft.borderBottomWidth,10),Ae=parseInt(ft.borderLeftWidth,10);ae=fe=>{fe.preventDefault(),he||(document.dispatchEvent(w),C.start.length&&O.processCallbacks(n,C.start,!1,{width:Ve,height:lt,left:nt,top:Be},fe),n.front(),n.status==="maximized"&&(n.status="normalized",n.controlbar.querySelector(".jsPanel-btn-maximize")&&n.setControlStatus("maximize","show"),n.controlbar.querySelector(".jsPanel-btn-normalize")&&n.setControlStatus("normalize","hide")),le.height>lt+5&&(n.status="normalized",n.setControls([".jsPanel-btn-normalize"]))),he=1,document.dispatchEvent(P);let Oe=fe.touches?fe.touches[0].clientX:fe.clientX,He=fe.touches?fe.touches[0].clientY:fe.clientY,De;tt.contains("jsPanel-resizeit-e")?(q=Ve+(Oe-Re)*_e/Ee.x+$t,q>=ue&&(q=ue),q>=ee&&(q=ee),q<=ze&&(q=ze),n.style.width=q+"px",_e===2&&(n.style.left=nt-(Oe-Re)+"px"),C.aspectRatio==="content"?(n.style.height=(q-pn-Ae)/Ue+gt+ut+dt+ne+"px",C.containment&&(De=n.overlaps(be),De.bottom<=C.containment[2]&&(n.style.height=G+"px",n.style.width=G*Ue+"px"))):C.aspectRatio==="panel"&&(n.style.height=q/ke+"px",C.containment&&(De=n.overlaps(be),De.bottom<=C.containment[2]&&(n.style.height=G+"px",n.style.width=G*ke+"px")))):tt.contains("jsPanel-resizeit-s")?(Y=lt+(He-qe)*_e/Ee.y+Q,Y>=G&&(Y=G),Y>=Xe&&(Y=Xe),Y<=de&&(Y=de),n.style.height=Y+"px",_e===2&&(n.style.top=Be-(He-qe)+"px"),C.aspectRatio==="content"?(n.style.width=(Y-gt-ut-dt-ne)*Ue+dt+ne+"px",C.containment&&(De=n.overlaps(be),De.right<=C.containment[1]&&(n.style.width=ue+"px",n.style.height=ue/Ue+"px"))):C.aspectRatio==="panel"&&(n.style.width=Y*ke+"px",C.containment&&(De=n.overlaps(be),De.right<=C.containment[1]&&(n.style.width=ue+"px",n.style.height=ue/ke+"px")))):tt.contains("jsPanel-resizeit-w")?(q=Ve+(Re-Oe)*_e/Ee.x+$t,q<=ee&&q>=ze&&q<=Qe&&(n.style.left=nt+(Oe-Re)/Ee.x+Gt+"px"),q>=Qe&&(q=Qe),q>=ee&&(q=ee),q<=ze&&(q=ze),n.style.width=q+"px",C.aspectRatio==="content"?(n.style.height=(q-pn-Ae)/Ue+gt+ut+dt+ne+"px",C.containment&&(De=n.overlaps(be),De.bottom<=C.containment[2]&&(n.style.height=G+"px",n.style.width=G*Ue+"px"))):C.aspectRatio==="panel"&&(n.style.height=q/ke+"px",C.containment&&(De=n.overlaps(be),De.bottom<=C.containment[2]&&(n.style.height=G+"px",n.style.width=G*ke+"px")))):tt.contains("jsPanel-resizeit-n")?(Y=lt+(qe-He)*_e/Ee.y+Q,Y<=Xe&&Y>=de&&Y<=rt&&(n.style.top=Be+(He-qe)/Ee.y+sn+"px"),Y>=rt&&(Y=rt),Y>=Xe&&(Y=Xe),Y<=de&&(Y=de),n.style.height=Y+"px",C.aspectRatio==="content"?(n.style.width=(Y-gt-ut-dt-ne)*Ue+dt+ne+"px",C.containment&&(De=n.overlaps(be),De.right<=C.containment[1]&&(n.style.width=ue+"px",n.style.height=ue/Ue+"px"))):C.aspectRatio==="panel"&&(n.style.width=Y*ke+"px",C.containment&&(De=n.overlaps(be),De.right<=C.containment[1]&&(n.style.width=ue+"px",n.style.height=ue/ke+"px")))):tt.contains("jsPanel-resizeit-se")?(q=Ve+(Oe-Re)*_e/Ee.x+$t,q>=ue&&(q=ue),q>=ee&&(q=ee),q<=ze&&(q=ze),n.style.width=q+"px",_e===2&&(n.style.left=nt-(Oe-Re)+"px"),C.aspectRatio&&(n.style.height=q/ke+"px"),Y=lt+(He-qe)*_e/Ee.y+Q,Y>=G&&(Y=G),Y>=Xe&&(Y=Xe),Y<=de&&(Y=de),n.style.height=Y+"px",_e===2&&(n.style.top=Be-(He-qe)+"px"),C.aspectRatio==="content"?(n.style.width=(Y-gt-ut-dt-ne)*Ue+dt+ne+"px",C.containment&&(De=n.overlaps(be),De.right<=C.containment[1]&&(n.style.width=ue+"px",n.style.height=ue/Ue+"px"))):C.aspectRatio==="panel"&&(n.style.width=Y*ke+"px",C.containment&&(De=n.overlaps(be),De.right<=C.containment[1]&&(n.style.width=ue+"px",n.style.height=ue/ke+"px")))):tt.contains("jsPanel-resizeit-sw")?(Y=lt+(He-qe)*_e/Ee.y+Q,Y>=G&&(Y=G),Y>=Xe&&(Y=Xe),Y<=de&&(Y=de),n.style.height=Y+"px",_e===2&&(n.style.top=Be-(He-qe)+"px"),C.aspectRatio&&(n.style.width=Y*ke+"px"),q=Ve+(Re-Oe)*_e/Ee.x+$t,q<=ee&&q>=ze&&q<=Qe&&(n.style.left=nt+(Oe-Re)/Ee.x+Gt+"px"),q>=Qe&&(q=Qe),q>=ee&&(q=ee),q<=ze&&(q=ze),n.style.width=q+"px",C.aspectRatio==="content"?(n.style.height=(q-pn-Ae)/Ue+gt+ut+dt+ne+"px",C.containment&&(De=n.overlaps(be),De.bottom<=C.containment[2]&&(n.style.height=G+"px",n.style.width=G*Ue+"px"))):C.aspectRatio==="panel"&&(n.style.height=q/ke+"px",C.containment&&(De=n.overlaps(be),De.bottom<=C.containment[2]&&(n.style.height=G+"px",n.style.width=G*ke+"px")))):tt.contains("jsPanel-resizeit-ne")?(q=Ve+(Oe-Re)*_e/Ee.x+$t,q>=ue&&(q=ue),q>=ee&&(q=ee),q<=ze&&(q=ze),n.style.width=q+"px",_e===2&&(n.style.left=nt-(Oe-Re)+"px"),C.aspectRatio&&(n.style.height=q/ke+"px"),Y=lt+(qe-He)*_e/Ee.y+Q,Y<=Xe&&Y>=de&&Y<=rt&&(n.style.top=Be+(He-qe)/Ee.y+sn+"px"),Y>=rt&&(Y=rt),Y>=Xe&&(Y=Xe),Y<=de&&(Y=de),n.style.height=Y+"px",C.aspectRatio==="content"?(n.style.width=(Y-gt-ut-dt-ne)*Ue+dt+ne+"px",C.containment&&(De=n.overlaps(be),De.right<=C.containment[1]&&(n.style.width=ue+"px",n.style.height=ue/Ue+"px"))):C.aspectRatio==="panel"&&(n.style.width=Y*ke+"px",C.containment&&(De=n.overlaps(be),De.right<=C.containment[1]&&(n.style.width=ue+"px",n.style.height=ue/ke+"px")))):tt.contains("jsPanel-resizeit-nw")&&(C.aspectRatio&&tt.contains("jsPanel-resizeit-nw")&&(Oe=He*vt,He=Oe/vt),q=Ve+(Re-Oe)*_e/Ee.x+$t,q<=ee&&q>=ze&&q<=Qe&&(n.style.left=nt+(Oe-Re)/Ee.x+Gt+"px"),q>=Qe&&(q=Qe),q>=ee&&(q=ee),q<=ze&&(q=ze),n.style.width=q+"px",C.aspectRatio&&(n.style.height=q/ke+"px"),Y=lt+(qe-He)*_e/Ee.y+Q,Y<=Xe&&Y>=de&&Y<=rt&&(n.style.top=Be+(He-qe)/Ee.y+sn+"px"),Y>=rt&&(Y=rt),Y>=Xe&&(Y=Xe),Y<=de&&(Y=de),n.style.height=Y+"px",C.aspectRatio==="content"?n.style.width=(Y-gt-ut-dt-ne)*Ue+dt+ne+"px":C.aspectRatio==="panel"&&(n.style.width=Y*ke+"px")),window.getSelection().removeAllRanges();const qt=window.getComputedStyle(n),Me={left:parseFloat(qt.left),top:parseFloat(qt.top),right:parseFloat(qt.right),bottom:parseFloat(qt.bottom),width:parseFloat(qt.width),height:parseFloat(qt.height)};C.resize.length&&O.processCallbacks(n,C.resize,!1,Me,fe)},O.pointermove.forEach(fe=>document.addEventListener(fe,ae,!1)),window.addEventListener("mouseout",Ne,!1)})}),O.pointerup.forEach(function(Te){document.addEventListener(Te,Fe),window.removeEventListener("mouseout",Ne)}),m.disable&&($e.style.pointerEvents="none")}),n},n.resizeit=m=>{const w=n.querySelectorAll(".jsPanel-resizeit-handle");return m==="disable"?w.forEach(P=>P.style.pointerEvents="none"):w.forEach(P=>P.style.pointerEvents="auto"),n},n.getScaleFactor=()=>{const m=n.getBoundingClientRect();return{x:m.width/n.offsetWidth,y:m.height/n.offsetHeight}},n.calcSizeFactors=()=>{const m=window.getComputedStyle(n);if(e.container==="window")n.hf=parseFloat(m.left)/(window.innerWidth-parseFloat(m.width)),n.vf=parseFloat(m.top)/(window.innerHeight-parseFloat(m.height));else if(n.parentElement){let w=n.parentElement.getBoundingClientRect();n.hf=parseFloat(m.left)/(w.width-parseFloat(m.width)),n.vf=parseFloat(m.top)/(w.height-parseFloat(m.height))}},n.saveCurrentDimensions=()=>{const m=window.getComputedStyle(n);n.currentData.width=m.width,n.currentData.height=m.height},n.saveCurrentPosition=()=>{const m=window.getComputedStyle(n);n.currentData.left=m.left,n.currentData.top=m.top},n.reposition=(...m)=>{let w=e.position,P=!0,g;return m.forEach(C=>{typeof C=="string"||typeof C=="object"?w=C:typeof C=="boolean"?P=C:typeof C=="function"&&(g=C)}),O.position(n,w),n.slaves&&n.slaves.size>0&&n.slaves.forEach(C=>C.reposition()),P&&n.saveCurrentPosition(),g&&g.call(n,n),n},n.repositionOnSnap=m=>{let w="0",P="0",g=O.pOcontainment(e.dragit.containment);if(e.dragit.snap.containment)switch(m){case"left-top":w=g[3],P=g[0];break;case"right-top":w=-g[1],P=g[0];break;case"right-bottom":w=-g[1],P=-g[2];break;case"left-bottom":w=g[3],P=-g[2];break;case"center-top":w=g[3]/2-g[1]/2,P=g[0];break;case"center-bottom":w=g[3]/2-g[1]/2,P=-g[2];break;case"left-center":w=g[3],P=g[0]/2-g[2]/2;break;case"right-center":w=-g[1],P=g[0]/2-g[2]/2;break}O.position(n,m),O.setStyles(n,{left:`calc(${n.style.left} + ${w}px)`,top:`calc(${n.style.top} + ${P}px)`})},n.overlaps=(m,w,P)=>{let g=n.getBoundingClientRect(),C=getComputedStyle(n.parentElement),ae=n.getScaleFactor(),he={top:0,right:0,bottom:0,left:0},q,Y=0,Ve=0,lt=0,Xt=0;n.options.container!=="window"&&w==="paddingbox"&&(he.top=parseInt(C.borderTopWidth,10)*ae.y,he.right=parseInt(C.borderRightWidth,10)*ae.x,he.bottom=parseInt(C.borderBottomWidth,10)*ae.y,he.left=parseInt(C.borderLeftWidth,10)*ae.x),typeof m=="string"?m==="window"?q={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}:m==="parent"?q=n.parentElement.getBoundingClientRect():q=document.querySelector(m).getBoundingClientRect():q=m.getBoundingClientRect(),P&&(Y=P.touches?P.touches[0].clientX:P.clientX,Ve=P.touches?P.touches[0].clientY:P.clientY,lt=Y-q.left,Xt=Ve-q.top);let Ne=g.left<q.right&&g.right>q.left,Fe=g.top<q.bottom&&g.bottom>q.top;return{overlaps:Ne&&Fe,top:g.top-q.top-he.top,right:q.right-g.right-he.right,bottom:q.bottom-g.bottom-he.bottom,left:g.left-q.left-he.left,parentBorderWidth:he,panelRect:g,referenceRect:q,pointer:{clientX:Y,clientY:Ve,left:lt-he.left,top:Xt-he.top,right:q.width-lt-he.right,bottom:q.height-Xt-he.bottom}}},n.setSize=()=>{if(e.panelSize){const m=O.pOsize(n,e.panelSize);n.style.width=m.width,n.style.height=m.height}else if(e.contentSize){const m=O.pOsize(n,e.contentSize);n.content.style.width=m.width,n.content.style.height=m.height,n.style.width=m.width,n.content.style.width="100%"}return n},n.resize=(...m)=>{let w=window.getComputedStyle(n),P={width:w.width,height:w.height},g=!0,C;m.forEach(q=>{typeof q=="string"?P=q:typeof q=="object"?P=Object.assign(P,q):typeof q=="boolean"?g=q:typeof q=="function"&&(C=q)});let ae=O.pOsize(n,P);n.style.width=ae.width,n.style.height=ae.height,n.slaves&&n.slaves.size>0&&n.slaves.forEach(q=>q.reposition()),g&&n.saveCurrentDimensions(),n.status="normalized";let he=n.controlbar.querySelector(".jsPanel-btn-smallify");return he&&(he.style.transform="rotate(0deg)"),C&&C.call(n,n),n.calcSizeFactors(),n},n.windowResizeHandler=m=>{if(m.target===window){let w=n.status,P=e.onwindowresize,g,C;if(w==="maximized"&&P)n.maximize(!1,!0);else if(n.snapped&&w!=="minimized")n.snap(n.snapped,!0);else if(w==="normalized"||w==="smallified"||w==="maximized"){let ae=typeof P;ae==="boolean"?(g=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=g<=0?0:g+"px",C=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=C<=0?0:C+"px"):ae==="function"?P.call(n,m,n):ae==="object"&&(P.preset===!0&&(g=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=g<=0?0:g+"px",C=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=C<=0?0:C+"px"),P.callback.call(n,m,n))}else w==="smallifiedmax"&&P&&n.maximize(!1,!0).smallify();n.slaves&&n.slaves.size>0&&n.slaves.forEach(ae=>ae.reposition())}},n.setControls=(m,w)=>(n.header.querySelectorAll(".jsPanel-btn").forEach(P=>{const g=P.className.split("-"),C=g[g.length-1];n.getAttribute(`data-btn${C}`)!=="hidden"&&(P.style.display="block")}),m.forEach(P=>{const g=n.controlbar.querySelector(P);g&&(g.style.display="none")}),w&&w.call(n,n),n),n.setControlStatus=(m,w="enable",P)=>{const g=n.controlbar.querySelector(`.jsPanel-btn-${m}`);switch(w){case"disable":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"disabled"),g.style.pointerEvents="none",g.style.opacity=.4,g.style.cursor="default");break;case"hide":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"hidden"),g.style.display="none");break;case"show":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"enabled"),g.style.display="block",g.style.pointerEvents="auto",g.style.opacity=1,g.style.cursor="pointer");break;case"enable":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.getAttribute(`data-btn${m}`)==="hidden"&&(g.style.display="block"),n.setAttribute(`data-btn${m}`,"enabled"),g.style.pointerEvents="auto",g.style.opacity=1,g.style.cursor="pointer");break;case"remove":n.controlbar.removeChild(g),n.setAttribute(`data-btn${m}`,"removed");break}return P&&P.call(n,n),n},n.setControlSize=m=>{const w=m.toLowerCase();n.controlbar.querySelectorAll(".jsPanel-btn").forEach(g=>{["jsPanel-btn-xl","jsPanel-btn-lg","jsPanel-btn-md","jsPanel-btn-sm","jsPanel-btn-xs"].forEach(C=>g.classList.remove(C)),g.classList.add(`jsPanel-btn-${w}`)}),w==="xl"?n.titlebar.style.fontSize="1.5rem":w==="lg"?n.titlebar.style.fontSize="1.25rem":w==="md"?n.titlebar.style.fontSize="1.05rem":w==="sm"?n.titlebar.style.fontSize=".9rem":w==="xs"&&(n.titlebar.style.fontSize=".8rem")},n.setHeaderControls=m=>{if(n.options.headerControls.add){let C=n.options.headerControls.add;Array.isArray(C)||(C=[C]),C.forEach(ae=>n.addControl(ae))}let w=[];n.controlbar.querySelectorAll(".jsPanel-btn").forEach(C=>{let ae=C.className.match(/jsPanel-btn-[a-z\d]{3,}/i),he=ae[0].substring(12);w.push(he)});const g=O.pOheaderControls(e.headerControls);return e.headerControls=g,w.forEach(C=>{g[C]&&n.setControlStatus(C,g[C])}),n.setControlSize(g.size),m&&m.call(n,n),n},n.setHeaderLogo=(m,w)=>{let P=[n.headerlogo],g=document.querySelector("#"+n.id+"-min");return g&&P.push(g.querySelector(".jsPanel-headerlogo")),typeof m=="string"?m.startsWith("<")?P.forEach(C=>C.innerHTML=m):P.forEach(C=>{O.emptyNode(C);let ae=document.createElement("img");ae.src=m,C.append(ae)}):P.forEach(C=>{O.emptyNode(C),C.append(m)}),n.headerlogo.childNodes.forEach(C=>{C.nodeName&&C.nodeName==="IMG"&&C.setAttribute("draggable","false")}),w&&w.call(n,n),n},n.setHeaderRemove=m=>(n.removeChild(n.header),n.content.classList.add("jsPanel-content-noheader"),["close","maximize","normalize","minimize","smallify"].forEach(w=>n.setAttribute(`data-btn${w}`,"removed")),m&&m.call(n,n),n),n.setHeaderTitle=(m,w)=>{let P=[n.headertitle],g=document.querySelector("#"+n.id+"-min");return g&&P.push(g.querySelector(".jsPanel-title")),typeof m=="string"?P.forEach(C=>C.innerHTML=m):typeof m=="function"?P.forEach(C=>{O.emptyNode(C),C.innerHTML=m()}):P.forEach(C=>{O.emptyNode(C),C.append(m)}),w&&w.call(n,n),n},n.setIconfont=(m,w=n,P)=>{if(m){let g,C;if(m==="fa"||m==="far"||m==="fal"||m==="fas"||m==="fad")g=[`${m} fa-window-close`,`${m} fa-window-maximize`,`${m} fa-window-restore`,`${m} fa-window-minimize`,`${m} fa-chevron-up`];else if(m==="material-icons")g=[m,m,m,m,m,m],C=["close","fullscreen","fullscreen_exit","call_received","expand_less"];else if(Array.isArray(m))g=[`custom-control-icon ${m[4]}`,`custom-control-icon ${m[3]}`,`custom-control-icon ${m[2]}`,`custom-control-icon ${m[1]}`,`custom-control-icon ${m[0]}`];else if(m==="bootstrap"||m==="glyphicon")g=["glyphicon glyphicon-remove","glyphicon glyphicon-fullscreen","glyphicon glyphicon-resize-full","glyphicon glyphicon-minus","glyphicon glyphicon-chevron-up"];else return w;w.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(ae=>O.emptyNode(ae).innerHTML="<span></span>"),Array.prototype.slice.call(w.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((ae,he)=>{ae.className=g[he],m==="material-icons"&&(ae.textContent=C[he])})}return P&&P.call(w,w),w},n.addToolbar=(m,w,P)=>{if(m==="header"?m=n.headertoolbar:m==="footer"&&(m=n.footer),typeof w=="string")m.innerHTML=w;else if(Array.isArray(w))w.forEach(g=>{typeof g=="string"?m.innerHTML+=g:m.append(g)});else if(typeof w=="function"){let g=w.call(n,n);typeof g=="string"?m.innerHTML=g:m.append(g)}else m.append(w);return m.classList.add("active"),P&&P.call(n,n),n},n.addCloseControl=()=>{let m=document.createElement("button"),w=n.content.style.color;return m.classList.add("jsPanel-addCloseCtrl"),m.innerHTML=O.icons.close,m.style.color=w,n.options.rtl&&m.classList.add("rtl"),n.appendChild(m),O.pointerup.forEach(P=>{m.addEventListener(P,g=>{if(g.preventDefault(),g.button&&g.button>0)return!1;n.close(null,!0)})}),O.pointerdown.forEach(P=>{m.addEventListener(P,g=>g.preventDefault())}),n},n.addControl=m=>{if(!m.html)return n;m.position||(m.position=1);const w=n.controlbar.querySelectorAll(".jsPanel-btn").length;let P=document.createElement("button");P.innerHTML=m.html,P.className=`jsPanel-btn jsPanel-btn-${m.name} jsPanel-btn-${e.headerControls.size}`,P.style.color=n.header.style.color,m.position>w?n.controlbar.append(P):n.controlbar.insertBefore(P,n.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${m.position})`));const g=m.ariaLabel||m.name;return g&&P.setAttribute("aria-label",g),O.pointerup.forEach(C=>{P.addEventListener(C,ae=>{if(ae.preventDefault(),ae.button&&ae.button>0)return!1;m.handler.call(n,n,P)})}),m.afterInsert&&m.afterInsert.call(P,P),n},n.setRtl=()=>{[n.header,n.content,n.footer].forEach(m=>{m.dir="rtl",e.rtl.lang&&(m.lang=e.rtl.lang)})},n.id=e.id,n.classList.add("jsPanel-"+e.paneltype),e.paneltype==="standard"&&(n.style.zIndex=this.zi.next()),i.append(n),n.front(!1,!1),n.setTheme(e.theme),e.boxShadow&&n.classList.add(`jsPanel-depth-${e.boxShadow}`),e.header){if(e.headerLogo&&n.setHeaderLogo(e.headerLogo),n.setIconfont(e.iconfont),n.setHeaderTitle(e.headerTitle),n.setHeaderControls(),O.isIE){let m=[n.headerbar,n.controlbar];switch(n.options.headerControls.size){case"md":m.forEach(w=>{w.style.height="34px"});break;case"xs":m.forEach(w=>{w.style.height="26px"});break;case"sm":m.forEach(w=>{w.style.height="30px"});break;case"lg":m.forEach(w=>{w.style.height="38px"});break;case"xl":m.forEach(w=>{w.style.height="42px"});break}}if(e.header==="auto-show-hide"){let m="jsPanel-depth-"+e.boxShadow;n.header.style.opacity=0,n.style.backgroundColor="transparent",this.remClass(n,m),this.setClass(n.content,m),n.header.addEventListener("mouseenter",()=>{n.header.style.opacity=1,O.setClass(n,m),O.remClass(n.content,m)}),n.header.addEventListener("mouseleave",()=>{n.header.style.opacity=0,O.remClass(n,m),O.setClass(n.content,m)})}}else n.setHeaderRemove(),e.addCloseControl&&n.addCloseControl();if(e.headerToolbar&&n.addToolbar(n.headertoolbar,e.headerToolbar),e.footerToolbar&&n.addToolbar(n.footer,e.footerToolbar),e.border&&n.setBorder(e.border),e.borderRadius&&n.setBorderRadius(e.borderRadius),e.css)for(const[m,w]of Object.entries(e.css))if(m==="panel")n.className+=` ${w}`;else{let P=n.querySelector(`.jsPanel-${m}`);P&&(P.className+=` ${w}`)}if(e.content&&(typeof e.content=="function"?e.content.call(n,n):typeof e.content=="string"?n.content.innerHTML=e.content:n.content.append(e.content)),e.contentAjax&&this.ajax(e.contentAjax,n),e.contentFetch&&this.fetch(e.contentFetch,n),e.contentOverflow){const m=e.contentOverflow.split(" ");m.length===1?n.content.style.overflow=m[0]:m.length===2&&(n.content.style.overflowX=m[0],n.content.style.overflowY=m[1])}if(e.autoclose){typeof e.autoclose=="number"?e.autoclose={time:e.autoclose+"ms"}:typeof e.autoclose=="string"&&(e.autoclose={time:e.autoclose});let m=Object.assign({},O.defaultAutocloseConfig,e.autoclose);m.time&&typeof m.time=="number"&&(m.time+="ms");let w=n.progressbar.querySelector("div");w.addEventListener("animationend",P=>{P.stopPropagation(),n.progressbar.classList.remove("active"),n.close()}),m.progressbar&&(n.progressbar.classList.add("active"),m.background?O.colorNames[m.background]?n.progressbar.style.background="#"+O.colorNames[m.background]:n.progressbar.style.background=m.background:n.progressbar.classList.add("success-bg")),w.style.animation=`${m.time} progressbar`}if(e.rtl&&n.setRtl(),n.setSize(),n.status="normalized",e.position?this.position(n,e.position):n.style.opacity=1,document.dispatchEvent(f),n.calcSizeFactors(),e.animateIn&&(n.addEventListener("animationend",()=>{this.remClass(n,e.animateIn)}),this.setClass(n,e.animateIn)),e.syncMargins){let m=this.pOcontainment(e.maximizedMargin);e.dragit&&(e.dragit.containment=m,e.dragit.snap===!0?(e.dragit.snap=O.defaultSnapConfig,e.dragit.snap.containment=!0):e.dragit.snap&&(e.dragit.snap.containment=!0)),e.resizeit&&(e.resizeit.containment=m)}if(e.dragit?(["start","drag","stop"].forEach(m=>{e.dragit[m]?typeof e.dragit[m]=="function"&&(e.dragit[m]=[e.dragit[m]]):e.dragit[m]=[]}),n.drag(e.dragit),n.addEventListener("jspaneldragstop",m=>{m.panel===n&&n.calcSizeFactors()},!1)):n.titlebar.style.cursor="default",e.resizeit){["start","resize","stop"].forEach(w=>{e.resizeit[w]?typeof e.resizeit[w]=="function"&&(e.resizeit[w]=[e.resizeit[w]]):e.resizeit[w]=[]}),n.sizeit(e.resizeit);let m;n.addEventListener("jspanelresizestart",w=>{w.panel===n&&(m=n.status)},!1),n.addEventListener("jspanelresizestop",w=>{w.panel===n&&(m==="smallified"||m==="smallifiedmax"||m==="maximized")&&parseFloat(n.style.height)>parseFloat(window.getComputedStyle(n.header).height)&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(f),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every"),n.calcSizeFactors())},!1)}if(n.saveCurrentDimensions(),n.saveCurrentPosition(),e.setStatus&&(e.setStatus==="smallifiedmax"?n.maximize().smallify():e.setStatus==="smallified"?n.smallify():n[e.setStatus.slice(0,-1)]()),this.pointerdown.forEach(m=>{n.addEventListener(m,w=>{!w.target.closest(".jsPanel-btn-close")&&!w.target.closest(".jsPanel-btn-minimize")&&e.paneltype==="standard"&&n.front()},!1)}),e.onwindowresize&&n.options.container==="window"&&window.addEventListener("resize",n.windowResizeHandler,!1),e.onparentresize){let m=e.onparentresize,w=typeof m,P=n.isChildpanel();if(P){const g=P.content;let C=[];n.parentResizeHandler=ae=>{if(ae.panel===P){C[0]=g.offsetWidth,C[1]=g.offsetHeight;let he=n.status,q,Y;he==="maximized"&&m?n.maximize():n.snapped&&he!=="minimized"?n.snap(n.snapped,!0):he==="normalized"||he==="smallified"||he==="maximized"?w==="function"?m.call(n,n,{width:C[0],height:C[1]}):w==="object"&&m.preset===!0?(q=(C[0]-n.offsetWidth)*n.hf,n.style.left=q<=0?0:q+"px",Y=(C[1]-n.offsetHeight)*n.vf,n.style.top=Y<=0?0:Y+"px",m.callback.call(n,n,{width:C[0],height:C[1]})):w==="boolean"&&(q=(C[0]-n.offsetWidth)*n.hf,n.style.left=q<=0?0:q+"px",Y=(C[1]-n.offsetHeight)*n.vf,n.style.top=Y<=0?0:Y+"px"):he==="smallifiedmax"&&m&&n.maximize().smallify()}},document.addEventListener("jspanelresize",n.parentResizeHandler,!1)}}return this.globalCallbacks&&(Array.isArray(this.globalCallbacks)?this.globalCallbacks.forEach(m=>m.call(n,n)):this.globalCallbacks.call(n,n)),e.callback&&(Array.isArray(e.callback)?e.callback.forEach(m=>m.call(n,n)):e.callback.call(n,n)),t&&(Array.isArray(t)?t.forEach(m=>m.call(n,n)):t.call(n,n)),document.dispatchEvent(a),n}};const Af=.25,Pf=4;function Tf(e){return Math.min(Pf,Math.max(Af,e))}function Wo(e,t,r){return{x:e.x+t,y:e.y+r,scale:e.scale}}const hr={x:0,y:0,scale:1};function Ko(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Df(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function If(e,t){let r={...hr};t.style.transformOrigin="0 0";const i=new Set,n=()=>{t.style.transform=`translate(${r.x}px, ${r.y}px) scale(${r.scale})`;for(const w of i)w({...r})};let a="none",c={...hr},d=0,f=0,y=0,k=0,x=0,I=0;const V=(w,P)=>{const g=e.getBoundingClientRect();return{x:w-g.left,y:P-g.top}},z=w=>{if(w.touches.length===2){a="pinch",c={...r};const[P,g]=[w.touches[0],w.touches[1]];y=Ko(P,g)||1;const C=V((P.clientX+g.clientX)/2,(P.clientY+g.clientY)/2);k=(C.x-r.x)/r.scale,x=(C.y-r.y)/r.scale,w.preventDefault();return}if(w.touches.length===1&&!Df(w.target)){const P=w.timeStamp;if(P-I<300){r={...hr},n(),I=0,a="none",w.preventDefault();return}I=P,a="pan",c={...r},d=w.touches[0].clientX,f=w.touches[0].clientY}else a="none"},H=w=>{if(a==="pan"&&w.touches.length===1){const P=w.touches[0];r=Wo(c,P.clientX-d,P.clientY-f),n(),w.preventDefault()}else if(a==="pinch"&&w.touches.length>=2){const[P,g]=[w.touches[0],w.touches[1]],C=Tf(c.scale*(Ko(P,g)/y)),ae=V((P.clientX+g.clientX)/2,(P.clientY+g.clientY)/2);r={x:ae.x-k*C,y:ae.y-x*C,scale:C},n(),w.preventDefault()}},se=w=>{w.touches.length===0?a="none":w.touches.length===1&&a==="pinch"&&(a="pan",c={...r},d=w.touches[0].clientX,f=w.touches[0].clientY)};let ce=!1,Ce={...hr},Le=0,ie=0,oe=!1;const we=(w,P)=>{const g=e.getBoundingClientRect();return w>=g.left&&w<=g.right&&P>=g.top&&P<=g.bottom},Pe=w=>{if(!ce)return;const P=w.clientX-Le,g=w.clientY-ie;!oe&&Math.hypot(P,g)<4||(oe=!0,document.body.style.cursor="grabbing",r=Wo(Ce,P,g),n(),w.preventDefault())},at=()=>{ce&&(ce=!1,document.body.style.cursor="",window.removeEventListener("mousemove",Pe,!0),window.removeEventListener("mouseup",Ct,!0))};function Ct(){at()}const je=w=>{w.button===2&&we(w.clientX,w.clientY)&&(ce=!0,oe=!1,Ce={...r},Le=w.clientX,ie=w.clientY,window.addEventListener("mousemove",Pe,!0),window.addEventListener("mouseup",Ct,!0))},m=w=>{oe&&(w.preventDefault(),oe=!1)};return e.addEventListener("touchstart",z,{passive:!1}),e.addEventListener("touchmove",H,{passive:!1}),e.addEventListener("touchend",se),e.addEventListener("touchcancel",se),window.addEventListener("mousedown",je,!0),window.addEventListener("contextmenu",m,!0),{snapshot:()=>({...r}),reset:()=>{r={...hr},n()},restore:w=>{r={...w},n()},subscribe:w=>(i.add(w),()=>i.delete(w)),dispose:()=>{e.removeEventListener("touchstart",z),e.removeEventListener("touchmove",H),e.removeEventListener("touchend",se),e.removeEventListener("touchcancel",se),window.removeEventListener("mousedown",je,!0),window.removeEventListener("contextmenu",m,!0),at()}}}function Ya(e,t){let r=null;const i=n=>{const a=document.getElementById(e);a&&(a.style.transformOrigin="0 0",a.style.transform=`translate(${-n.x/n.scale}px, ${-n.y/n.scale}px) scale(${1/n.scale})`)};return{enter(){const n=t();r||!n||(i(n.snapshot()),r=n.subscribe(i))},exit(){r?.(),r=null;const n=document.getElementById(e);n&&(n.style.transform="",n.style.transformOrigin="")}}}var Rf=Object.defineProperty,jf=Object.getOwnPropertyDescriptor,kr=(e,t,r,i)=>{for(var n=i>1?void 0:i?jf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Rf(t,r,n),n};let Bn=class extends Ke{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return M`<button
        class="icon ${e?"active":""}"
        title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"}
        @click=${this.openSearch}
      >
        <span class="mi sm">search</span>
      </button>`}return M`<input
      type="search"
      placeholder="search…"
      .value=${this.query}
      @input=${this.onInput}
      @blur=${this.onBlur}
    />`}};Bn.styles=[rn,Ze`
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
    `];kr([Bt({type:String})],Bn.prototype,"tableId",2);kr([U()],Bn.prototype,"query",2);kr([U()],Bn.prototype,"open",2);kr([Jn("input")],Bn.prototype,"inputEl",2);Bn=kr([ot("panel-search")],Bn);var Of=Object.defineProperty,Ff=Object.getOwnPropertyDescriptor,tr=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ff(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Of(t,r,n),n};let $n=class extends Ke{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.rowsActive=!1}async connectedCallback(){super.connectedCallback();const e=await ge();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(r=>r.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await ge();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await ge(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const r={};for(const i of t.columns)r[i.field]=zf(i);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:r,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}async runTableButton(e){const t=await ge();try{await Promise.resolve(e.onClick(t.api,{tableId:this.tableId}))}catch(r){console.error(`[table-button:${e.id}]`,r)}}render(){return M`
      <button title="Add a blank row" aria-label="Add row" @click=${this.addRow}>
        <span class="mi sm">add</span>
      </button>
      <button title="Edit columns" aria-label="Columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span>
      </button>
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>M`<button
              title=${e.tooltip??e.label}
              aria-label=${e.label}
              @click=${()=>this.runTableButton(e)}
            >
              ${e.icon?M`<span class="mi sm">${e.icon}</span>`:M`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};$n.styles=[rn,Ze`
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
      .spacer {
        flex: 1;
      }
      .count {
        color: #6b7280;
      }
      .mi.sm {
        font-size: 0.95rem;
      }
    `];tr([Bt({type:String})],$n.prototype,"tableId",2);tr([Bt({type:Boolean})],$n.prototype,"active",2);tr([U()],$n.prototype,"rowCount",2);tr([U()],$n.prototype,"tableButtons",2);tr([U()],$n.prototype,"table",2);$n=tr([ot("panel-footer")],$n);function zf(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function Lf(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function Bf(e){const t=document.querySelector("app-shell")?.shadowRoot,r=t?.querySelector("header"),i=t?.querySelector("footer");r&&(e.style.top=`${r.offsetHeight}px`),i&&(e.style.bottom=`${i.offsetHeight}px`)}const jn=new Map,Jr=new Set,Xa=new Set;let Vo=!1,ks=null;function Mf(){return ks}async function Nf(){if(Vo)return;Vo=!0;const e=await ge(),t=document.getElementById("easydb-panels"),r=document.getElementById("easydb-panels-viewport");if(t&&r){ks=If(t,r);const n=()=>Bf(t);n(),window.addEventListener("resize",n);const a=document.querySelector("app-shell")?.shadowRoot,c=a?.querySelector("header"),d=a?.querySelector("footer");if(typeof ResizeObserver<"u"&&(c||d)){const f=new ResizeObserver(n);c&&f.observe(c),d&&f.observe(d)}}const i=(await e.store.tables.find()).filter(n=>n.workspaceId===e.workspaceId);i.sort(Yo);for(const n of i)Xo(n,e);e.store.tables.subscribe(n=>{const a=n.filter(f=>f.workspaceId===e.workspaceId),c=new Set(a.map(f=>f.id));for(const[f,y]of jn)if(!c.has(f)){jn.delete(f),Jr.add(f),Xa.add(f);try{y.status!=="closed"&&y.close()}catch{}}const d=a.filter(f=>!jn.has(f.id)).sort(Yo);for(const f of d)Xo(f,e)})}function Yo(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const qf=200,Uf=100,Hf=720,Wf=360;function Kf(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<qf||e.h<Uf?null:{...e}}function Xo(e,t){const r=`panel-${Ga(e.id)}`,i=Lf(),n=Kf(e.windowGeometry),a=n?.minimized===!0,c=()=>{const je=document.createElement("data-table");return je.tableId=e.id,je.style.height="100%",je},d=a?document.createElement("div"):c();let f=a?null:d,y=e.name,k=null;const x=je=>{typeof oe.setHeaderTitle=="function"&&oe.setHeaderTitle(`${y} (${je})`)},I=()=>{k||(k=t.store.rows(e.id).subscribe(je=>x(je.length)))},V=()=>{k?.(),k=null},z=()=>{V(),ce.active=!1,f?.remove(),f=null},H=()=>{if(f)return;const je=document.getElementById(r)?.querySelector(".jsPanel-content");if(!je)return;je.replaceChildren();const m=c();je.appendChild(m),f=m,ce.active=!0,I()},se=document.createElement("panel-search");se.tableId=e.id;const ce=document.createElement("panel-footer");ce.tableId=e.id,ce.active=!a;const Ce=Ya(r,()=>ks),Le=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:Yf(),ie=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:`${Hf} ${Wf}`},oe=O.create({id:r,container:i,headerTitle:e.name,footerToolbar:ce,theme:"primary",content:d,...ie,position:Le,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>Ji(e.id,t)},resizeit:{containment:!1,stop:()=>Ji(e.id,t)},onfronted:()=>Xf(e.id,t),onbeforeclose:()=>Jr.has(e.id)?!0:((async()=>await t.api.ui.dialogs.confirm(e.source?`Remove the live table "${e.name}"? Its data stays on the Datasette server.`:`Delete table "${e.name}" and all its rows?`,"Confirm")&&(Jr.add(e.id),jn.get(e.id)?.close()))(),!1),onclosed:async()=>{jn.delete(e.id),Jr.delete(e.id),!Xa.delete(e.id)&&await Gf(e.id,t)},onstatuschange:je=>{je.status==="minimized"?z():(je.status==="normalized"||je.status==="maximized")&&H(),je.status==="maximized"?Ce.enter():Ce.exit(),Ji(e.id,t)}});jn.set(e.id,oe);const we=document.getElementById(r),Pe=we?.querySelector(".jsPanel-controlbar");Pe&&Pe.prepend(se);const at=we?.querySelector(".jsPanel-titlebar");at&&(at.tabIndex=-1,at.style.outline="none",at.addEventListener("pointerdown",()=>at.focus())),n?.maximized&&typeof oe.maximize=="function"?queueMicrotask(()=>oe.maximize?.()):n?.minimized&&typeof oe.minimize=="function"&&queueMicrotask(()=>oe.minimize?.()),t.store.tables.subscribe(je=>{const m=je.find(w=>w.id===e.id);m&&m.name!==y&&(y=m.name,k&&t.store.rows(e.id).find().then(w=>x(w.length)))}),a||I();const Ct=oe.close.bind(oe);oe.close=()=>(V(),Ct())}let Vf=0;function Yf(){const e=Vf++;return{my:"left-top",at:"left-top",offsetX:40+e%8*30,offsetY:80+e%8*30}}async function Ji(e,t){const r=document.getElementById(`panel-${Ga(e)}`);if(!r)return;const i=jn.get(e)?.status??"normalized";try{const a=(await t.store.tables.findOne(e))?.windowGeometry,c=i==="minimized",d=i==="maximized";let f=r.offsetLeft,y=r.offsetTop,k=r.offsetWidth,x=r.offsetHeight;(c||d)&&a&&(f=a.x,y=a.y,k=a.w,x=a.h),f<=-9e3&&(f=a?.x??40);const I={x:f,y,w:k,h:x,z:a?.z??0,minimized:c,maximized:d};await t.store.tables.patch(e,{windowGeometry:I,updatedAt:Date.now()})}catch{}}async function Xf(e,t){try{const r=await t.store.tables.findOne(e);if(!r)return;const i=r.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...i,z:Date.now()},updatedAt:Date.now()})}catch{}}async function Gf(e,t){if(!(await t.store.tables.findOne(e))?.source){const i=t.store.rows(e),n=await i.find();await i.bulkRemove(n.map(a=>a.id))}await t.store.tables.remove(e)}function Ga(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}var Qf=Object.defineProperty,Jf=Object.getOwnPropertyDescriptor,Yt=(e,t,r,i)=>{for(var n=i>1?void 0:i?Jf(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Qf(t,r,n),n};let Ot=class extends Ke{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.tableColumns=[],this.rows=[],this.showColsMenu=!1,this.allRows=[],this.searchQuery="",this.onSearch=e=>{const t=e.detail;t.tableId===this.viewInstanceId&&(this.searchQuery=t.query??"",this.recompute())}}get templateOn(){return this.instance?.templateEnabled!==!1}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:table-search",this.onSearch),await this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:table-search",this.onSearch),this.rowsUnsub?.()}async updated(e){e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}async reload(){this.rowsUnsub?.(),this.loaded=!1,await this.load()}async load(){if(!this.viewInstanceId)return;const e=await ge(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const r=await e.store.tables.findOne(t.tableId);this.tableColumns=r?.columns??[];const i=new Map(this.tableColumns.map(a=>[a.field,a]));this.columns=t.visibleColumns.map(a=>i.get(a)??{field:a,label:a,type:"string"});const n=e.store.rows(t.tableId);this.rowsUnsub=n.subscribe(a=>{this.allRows=a,this.recompute()}),this.allRows=await n.find(),this.recompute(),this.loaded=!0}recompute(){if(!this.instance)return;let e=Nh(this.allRows,this.instance);const t=this.searchQuery.trim().toLowerCase();t&&(e=e.filter(r=>Object.values(r.data).some(i=>i!=null&&String(i).toLowerCase().includes(t)))),this.rows=e}async toggleTemplate(){if(!this.instance)return;const e=!this.templateOn;await(await ge()).store.viewInstances.patch(this.instance.id,{templateEnabled:e,updatedAt:Date.now()}),this.instance={...this.instance,templateEnabled:e},this.showColsMenu=!1}async toggleColumn(e){if(!this.instance)return;const t=this.instance.visibleColumns,i=t.includes(e)?t.filter(a=>a!==e):[...t,e];if(i.length===0)return;await(await ge()).store.viewInstances.patch(this.instance.id,{visibleColumns:i,updatedAt:Date.now()}),this.instance={...this.instance,visibleColumns:i}}renderTable(){return this.rows.length===0?M`<div class="vw-empty">No rows.</div>`:M`
      <table class="vw-table">
        <thead>
          <tr>
            ${this.columns.map(e=>M`<th>${e.label||e.field}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map(e=>M`<tr>
                ${this.columns.map(t=>{const r=e.data[t.field];return M`<td>${r==null?"":String(r)}</td>`})}
              </tr>`)}
        </tbody>
      </table>
    `}renderTemplated(){const e=this.template;if(!e)return M`<div class="vw-empty">This view's template is missing.</div>`;if(qh(e.rowHtml)){const t=this.instance?.mapping??{},r=this.rows.map(n=>Lh(e.rowHtml,n,t)).join(""),i=(e.headerHtml??"")+r+(e.footerHtml??"");return M`<div class="vw-root">${Ki(i)}</div>`}return M`<div class="vw-root">
      ${e.headerHtml?.trim()?M`<div class="vw-html">${Ki(e.headerHtml)}</div>`:ye}
      ${this.renderTable()}
      ${e.footerHtml?.trim()?M`<div class="vw-html">${Ki(e.footerHtml)}</div>`:ye}
    </div>`}renderFooter(){if(!this.instance)return ye;const e=this.templateOn,t=new Set(this.instance.visibleColumns);return M`<div class="vw-footer">
      ${!e&&this.showColsMenu?M`<div class="cols-menu">
            ${this.tableColumns.map(r=>M`<label
                  ><input
                    type="checkbox"
                    .checked=${t.has(r.field)}
                    @change=${()=>void this.toggleColumn(r.field)}
                  />${r.label||r.field}</label
                >`)}
          </div>`:ye}
      ${e?ye:M`<button
            title="Show / hide columns"
            aria-label="Columns"
            @click=${()=>this.showColsMenu=!this.showColsMenu}
          >
            <span class="mi">view_column</span>
          </button>`}
      <button
        class=${e?"":"active"}
        title=${e?"Show as a table (turn the template off)":"Show through the template"}
        aria-label="Toggle template"
        aria-pressed=${e?"false":"true"}
        @click=${()=>void this.toggleTemplate()}
      >
        <span class="mi">table_view</span>
      </button>
    </div>`}render(){if(!this.loaded)return M`<div class="vw-body scroll"><div class="vw-loading">Loading…</div></div>`;if(this.error)return M`<div class="vw-body scroll"><div class="vw-empty">${this.error}</div></div>`;const t=this.templateOn?M`<div class="vw-body scroll">${this.renderTemplated()}</div>`:M`<div class="vw-body grid">
          <data-table
            .tableId=${this.instance?.tableId??""}
            .viewInstanceId=${this.viewInstanceId}
          ></data-table>
        </div>`;return M`${t}${this.renderFooter()}`}};Ot.styles=[rn,Ze`
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
    `];Yt([Bt({type:String})],Ot.prototype,"viewInstanceId",2);Yt([U()],Ot.prototype,"loaded",2);Yt([U()],Ot.prototype,"error",2);Yt([U()],Ot.prototype,"instance",2);Yt([U()],Ot.prototype,"template",2);Yt([U()],Ot.prototype,"columns",2);Yt([U()],Ot.prototype,"tableColumns",2);Yt([U()],Ot.prototype,"rows",2);Yt([U()],Ot.prototype,"showColsMenu",2);Yt([U()],Ot.prototype,"searchQuery",2);Ot=Yt([ot("view-window")],Ot);const dn=new Map;let Go=!1;function Zf(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function ep(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function Qa(e){return`view-panel-${ep(e)}`}async function tp(){if(Go)return;Go=!0;const e=await ge(),t=r=>r.filter(i=>i.workspaceId===e.workspaceId&&i.open);for(const r of t(await e.store.viewInstances.find()))Qo(r,e);e.store.viewInstances.subscribe(r=>{const i=new Map(t(r).map(n=>[n.id,n]));for(const n of[...dn.keys()])i.has(n)||np(n);for(const[n,a]of i)dn.has(n)||Qo(a,e)}),document.addEventListener("easydb:reload-view",r=>{const i=r.detail?.instanceId;if(!i)return;const n=dn.get(i);n&&(async()=>{const a=await e.store.viewInstances.findOne(i);a&&n.panel.setHeaderTitle?.(a.name),n.el.reload()})()})}function Qo(e,t){if(dn.has(e.id))return;const r=Qa(e.id),i=document.createElement("view-window");i.viewInstanceId=e.id,i.style.height="100%";const n=e.windowGeometry,a=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:"480 520"},c=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:{my:"center-top",at:"center-top",offsetY:60},d=Ya(r,Mf),f=O.create({id:r,container:Zf(),headerTitle:e.name,theme:"#0891b2",content:i,...a,position:c,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>void Zi(e.id)},resizeit:{containment:!1,stop:()=>void Zi(e.id)},onstatuschange:I=>{I.status==="maximized"?d.enter():d.exit(),Zi(e.id)},onclosed:()=>{dn.delete(e.id),d.exit(),t.store.viewInstances.patch(e.id,{open:!1,updatedAt:Date.now()}).catch(()=>{})}});dn.set(e.id,{panel:f,el:i});const y=document.getElementById(r),k=document.createElement("panel-search");k.tableId=e.id,y?.querySelector(".jsPanel-controlbar")?.prepend(k);const x=y?.querySelector(".jsPanel-titlebar");x&&(x.tabIndex=-1,x.style.outline="none",x.addEventListener("pointerdown",()=>x.focus())),n?.maximized?queueMicrotask(()=>f.maximize?.()):n?.minimized&&queueMicrotask(()=>f.minimize?.())}function np(e){const t=dn.get(e);if(t){dn.delete(e);try{t.panel.status!=="closed"&&t.panel.close()}catch{}}}async function Zi(e){const t=document.getElementById(Qa(e)),r=dn.get(e);if(!t||!r)return;const i=r.panel.status,n=i==="minimized",a=i==="maximized";try{const c=await ge(),d=(await c.store.viewInstances.findOne(e))?.windowGeometry;let f=t.offsetLeft,y=t.offsetTop,k=t.offsetWidth,x=t.offsetHeight;(n||a)&&d&&(f=d.x,y=d.y,k=d.w,x=d.h),f<=-9e3&&(f=d?.x??40);const I={x:f,y,w:k,h:x,z:0,minimized:n,maximized:a};await c.store.viewInstances.patch(e,{windowGeometry:I,updatedAt:Date.now()})}catch{}}var rp=Object.defineProperty,ip=Object.getOwnPropertyDescriptor,Ja=(e,t,r,i)=>{for(var n=i>1?void 0:i?ip(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&rp(t,r,n),n};let si=class extends Ke{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await ge();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(r=>this.tables=r.filter(i=>i.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(r=>r.workspaceId===this.workspaceId),await Nf(),await tp()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?M``:M`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on the
      page, or click <strong>+ New Table</strong> above.
    </div>`}};si.styles=Ze`
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
  `;Ja([U()],si.prototype,"tables",2);si=Ja([ot("table-list")],si);var sp=Object.defineProperty,op=Object.getOwnPropertyDescriptor,Cs=(e,t,r,i)=>{for(var n=i>1?void 0:i?op(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&sp(t,r,n),n};let yr=class extends Ke{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await ge();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);if(!t)return;const r=new URLSearchParams(location.search);r.set("space",t.name);const i=`${location.pathname}?${r.toString()}${location.hash}`;location.assign(i)}async addWorkspace(){const t=await(await ge()).api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const r=new URLSearchParams(location.search);r.set("space",t.trim()),location.assign(`${location.pathname}?${r.toString()}${location.hash}`)}render(){return M`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>M`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};yr.styles=[rn,Ze`
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
  `];Cs([U()],yr.prototype,"workspaces",2);Cs([U()],yr.prototype,"current",2);yr=Cs([ot("workspace-selector")],yr);var Jo=Object.freeze,Za=Object.defineProperty,ap=Object.getOwnPropertyDescriptor,hn=(e,t,r,i)=>{for(var n=i>1?void 0:i?ap(t,r):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(n=(i?c(t,r,n):c(n))||n);return i&&n&&Za(t,r,n),n},lp=(e,t)=>Jo(Za(e,"raw",{value:Jo(e.slice())})),Zo;function cp(e){return e?e.trimStart().startsWith("<svg")?M`<span class="icon-svg">${Zl(e)}</span>`:M`<span class="mi sm">${e}</span>`:""}let Ht=class extends Ke{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId)},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{ea(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!ea(e))return;e.preventDefault();const t=await ge(),r=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:r,event:e});for(const i of[...t.registries.dropHandlers])try{if(await i(e,t.api))return}catch(n){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:n})}},this.runSlot=e=>{this.api&&Promise.resolve(e.onClick(this.api)).catch(t=>{console.error(`[footer-button:${e.id}]`,t)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager)}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await ge();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e))}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){const r=t==="header"||e.variant==="primary"?"primary":"slot";return M`
      <button class=${r} title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
        ${cp(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return M(Zo||(Zo=lp([`
      <header>
        <strong>easyDBAccess <span class="version">v0.0.60</span></strong>
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
    `])),this.headerButtons.map(e=>this.renderSlotButton(e,"header")),this.searchOpen?M`<span class="search-wrap">
              <input
                class="search"
                type="search"
                placeholder="search all tables…"
                .value=${this.searchQuery}
                @input=${this.onSearchInput}
                @blur=${this.closeSearchOnBlur}
              />
              ${this.searchQuery.length>0?M`<button
                    class="search-clear"
                    title="Clear search"
                    aria-label="Clear search"
                    @mousedown=${this.clearSearch}
                  >
                    ×
                  </button>`:""}
            </span>`:M`<button
              class="icon-btn ${this.searchQuery.trim().length>0?"active":""}"
              title=${this.searchQuery.trim().length>0?`Filtering all tables: ${this.searchQuery}`:"Search across all tables in this workspace"}
              @click=${this.openSearch}
            >
              <span class="mi">search</span>
            </button>`,this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};Ht.styles=[rn,Ze`
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
    `];hn([Jn("new-table-dialog")],Ht.prototype,"dialog",2);hn([Jn("csv-paste-dialog")],Ht.prototype,"csvPasteDialog",2);hn([Jn("plugin-manager-dialog")],Ht.prototype,"pluginManagerDialog",2);hn([Jn("input.search")],Ht.prototype,"searchInput",2);hn([U()],Ht.prototype,"footerButtons",2);hn([U()],Ht.prototype,"headerButtons",2);hn([U()],Ht.prototype,"searchQuery",2);hn([U()],Ht.prototype,"searchOpen",2);Ht=hn([ot("app-shell")],Ht);function ea(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([ge(),El(()=>Promise.resolve().then(()=>Ua),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});
//# sourceMappingURL=index-DfRAL5YF.js.map
