(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const Fl="modulepreload",zl=function(e){return"/easydbaccess/"+e},so={},Ll=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){let l=function(y){return Promise.all(y.map(k=>Promise.resolve(k).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),h=u?.nonce||u?.getAttribute("nonce");n=l(r.map(y=>{if(y=zl(y),y in so)return;so[y]=!0;const k=y.endsWith(".css"),x=k?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${x}`))return;const I=document.createElement("link");if(I.rel=k?"stylesheet":Fl,k||(I.as="script"),I.crossOrigin="",I.href=y,h&&I.setAttribute("nonce",h),document.head.appendChild(I),k)return new Promise((V,L)=>{I.addEventListener("load",V),I.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${y}`)))})}))}function a(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return n.then(l=>{for(const u of l||[])u.status==="rejected"&&a(u.reason);return t().catch(a)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qr=globalThis,bs=Qr.ShadowRoot&&(Qr.ShadyCSS===void 0||Qr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ys=Symbol(),oo=new WeakMap;let ca=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==ys)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(bs&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=oo.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&oo.set(r,t))}return t}toString(){return this.cssText}};const Bl=e=>new ca(typeof e=="string"?e:e+"",void 0,ys),Qe=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,a)=>i+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[a+1],e[0]);return new ca(r,e,ys)},Ml=(e,t)=>{if(bs)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),n=Qr.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)}},ao=bs?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return Bl(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Nl,defineProperty:Ul,getOwnPropertyDescriptor:ql,getOwnPropertyNames:Hl,getOwnPropertySymbols:Wl,getPrototypeOf:Kl}=Object,ui=globalThis,lo=ui.trustedTypes,Vl=lo?lo.emptyScript:"",Yl=ui.reactiveElementPolyfillSupport,pr=(e,t)=>e,ti={toAttribute(e,t){switch(t){case Boolean:e=e?Vl:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ws=(e,t)=>!Nl(e,t),co={attribute:!0,type:String,converter:ti,reflect:!1,useDefault:!1,hasChanged:ws};Symbol.metadata??=Symbol("metadata"),ui.litPropertyMetadata??=new WeakMap;let Gn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=co){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,r);n!==void 0&&Ul(this.prototype,t,n)}}static getPropertyDescriptor(t,r,i){const{get:n,set:a}=ql(this.prototype,t)??{get(){return this[r]},set(l){this[r]=l}};return{get:n,set(l){const u=n?.call(this);a?.call(this,l),this.requestUpdate(t,u,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??co}static _$Ei(){if(this.hasOwnProperty(pr("elementProperties")))return;const t=Kl(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(pr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(pr("properties"))){const r=this.properties,i=[...Hl(r),...Wl(r)];for(const n of i)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)r.unshift(ao(n))}else t!==void 0&&r.push(ao(t));return r}static _$Eu(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ml(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$ET(t,r){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const a=(i.converter?.toAttribute!==void 0?i.converter:ti).toAttribute(r,i.type);this._$Em=t,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(t,r){const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const a=i.getPropertyOptions(n),l=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:ti;this._$Em=n;const u=l.fromAttribute(r,a.type);this[n]=u??this._$Ej?.get(n)??u,this._$Em=null}}requestUpdate(t,r,i,n=!1,a){if(t!==void 0){const l=this.constructor;if(n===!1&&(a=this[t]),i??=l.getPropertyOptions(t),!((i.hasChanged??ws)(a,r)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(l._$Eu(t,i))))return;this.C(t,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:i,reflect:n,wrapped:a},l){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,l??r??this[t]),a!==!0||l!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,a]of i){const{wrapped:l}=a,u=this[n];l!==!0||this._$AL.has(n)||u===void 0||this.C(n,void 0,a,u)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(r)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Gn.elementStyles=[],Gn.shadowRootOptions={mode:"open"},Gn[pr("elementProperties")]=new Map,Gn[pr("finalized")]=new Map,Yl?.({ReactiveElement:Gn}),(ui.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vs=globalThis,uo=e=>e,ni=vs.trustedTypes,ho=ni?ni.createPolicy("lit-html",{createHTML:e=>e}):void 0,ua="$lit$",$n=`lit$${Math.random().toFixed(9).slice(2)}$`,da="?"+$n,Xl=`<${da}>`,Fn=document,mr=()=>Fn.createComment(""),gr=e=>e===null||typeof e!="object"&&typeof e!="function",xs=Array.isArray,Gl=e=>xs(e)||typeof e?.[Symbol.iterator]=="function",Xi=`[ 	
\f\r]`,hr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fo=/-->/g,po=/>/g,Dn=RegExp(`>|${Xi}(?:([^\\s"'>=/]+)(${Xi}*=${Xi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mo=/'/g,go=/"/g,ha=/^(?:script|style|textarea|title)$/i,Ql=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),z=Ql(1),zn=Symbol.for("lit-noChange"),fe=Symbol.for("lit-nothing"),bo=new WeakMap,Rn=Fn.createTreeWalker(Fn,129);function fa(e,t){if(!xs(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ho!==void 0?ho.createHTML(t):t}const Jl=(e,t)=>{const r=e.length-1,i=[];let n,a=t===2?"<svg>":t===3?"<math>":"",l=hr;for(let u=0;u<r;u++){const h=e[u];let y,k,x=-1,I=0;for(;I<h.length&&(l.lastIndex=I,k=l.exec(h),k!==null);)I=l.lastIndex,l===hr?k[1]==="!--"?l=fo:k[1]!==void 0?l=po:k[2]!==void 0?(ha.test(k[2])&&(n=RegExp("</"+k[2],"g")),l=Dn):k[3]!==void 0&&(l=Dn):l===Dn?k[0]===">"?(l=n??hr,x=-1):k[1]===void 0?x=-2:(x=l.lastIndex-k[2].length,y=k[1],l=k[3]===void 0?Dn:k[3]==='"'?go:mo):l===go||l===mo?l=Dn:l===fo||l===po?l=hr:(l=Dn,n=void 0);const V=l===Dn&&e[u+1].startsWith("/>")?" ":"";a+=l===hr?h+Xl:x>=0?(i.push(y),h.slice(0,x)+ua+h.slice(x)+$n+V):h+$n+(x===-2?u:V)}return[fa(e,a+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class br{constructor({strings:t,_$litType$:r},i){let n;this.parts=[];let a=0,l=0;const u=t.length-1,h=this.parts,[y,k]=Jl(t,r);if(this.el=br.createElement(y,i),Rn.currentNode=this.el.content,r===2||r===3){const x=this.el.content.firstChild;x.replaceWith(...x.childNodes)}for(;(n=Rn.nextNode())!==null&&h.length<u;){if(n.nodeType===1){if(n.hasAttributes())for(const x of n.getAttributeNames())if(x.endsWith(ua)){const I=k[l++],V=n.getAttribute(x).split($n),L=/([.?@])?(.*)/.exec(I);h.push({type:1,index:a,name:L[2],strings:V,ctor:L[1]==="."?ec:L[1]==="?"?tc:L[1]==="@"?nc:di}),n.removeAttribute(x)}else x.startsWith($n)&&(h.push({type:6,index:a}),n.removeAttribute(x));if(ha.test(n.tagName)){const x=n.textContent.split($n),I=x.length-1;if(I>0){n.textContent=ni?ni.emptyScript:"";for(let V=0;V<I;V++)n.append(x[V],mr()),Rn.nextNode(),h.push({type:2,index:++a});n.append(x[I],mr())}}}else if(n.nodeType===8)if(n.data===da)h.push({type:2,index:a});else{let x=-1;for(;(x=n.data.indexOf($n,x+1))!==-1;)h.push({type:7,index:a}),x+=$n.length-1}a++}}static createElement(t,r){const i=Fn.createElement("template");return i.innerHTML=t,i}}function Qn(e,t,r=e,i){if(t===zn)return t;let n=i!==void 0?r._$Co?.[i]:r._$Cl;const a=gr(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),a===void 0?n=void 0:(n=new a(e),n._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=n:r._$Cl=n),n!==void 0&&(t=Qn(e,n._$AS(e,t.values),n,i)),t}class Zl{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:i}=this._$AD,n=(t?.creationScope??Fn).importNode(r,!0);Rn.currentNode=n;let a=Rn.nextNode(),l=0,u=0,h=i[0];for(;h!==void 0;){if(l===h.index){let y;h.type===2?y=new vr(a,a.nextSibling,this,t):h.type===1?y=new h.ctor(a,h.name,h.strings,this,t):h.type===6&&(y=new rc(a,this,t)),this._$AV.push(y),h=i[++u]}l!==h?.index&&(a=Rn.nextNode(),l++)}return Rn.currentNode=Fn,n}p(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class vr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,n){this.type=2,this._$AH=fe,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Qn(this,t,r),gr(t)?t===fe||t==null||t===""?(this._$AH!==fe&&this._$AR(),this._$AH=fe):t!==this._$AH&&t!==zn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Gl(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==fe&&gr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Fn.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=br.createElement(fa(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(r);else{const a=new Zl(n,this),l=a.u(this.options);a.p(r),this.T(l),this._$AH=a}}_$AC(t){let r=bo.get(t.strings);return r===void 0&&bo.set(t.strings,r=new br(t)),r}k(t){xs(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const a of t)n===r.length?r.push(i=new vr(this.O(mr()),this.O(mr()),this,this.options)):i=r[n],i._$AI(a),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const i=uo(t).nextSibling;uo(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class di{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,n,a){this.type=1,this._$AH=fe,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=fe}_$AI(t,r=this,i,n){const a=this.strings;let l=!1;if(a===void 0)t=Qn(this,t,r,0),l=!gr(t)||t!==this._$AH&&t!==zn,l&&(this._$AH=t);else{const u=t;let h,y;for(t=a[0],h=0;h<a.length-1;h++)y=Qn(this,u[i+h],r,h),y===zn&&(y=this._$AH[h]),l||=!gr(y)||y!==this._$AH[h],y===fe?t=fe:t!==fe&&(t+=(y??"")+a[h+1]),this._$AH[h]=y}l&&!n&&this.j(t)}j(t){t===fe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ec extends di{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===fe?void 0:t}}class tc extends di{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==fe)}}class nc extends di{constructor(t,r,i,n,a){super(t,r,i,n,a),this.type=5}_$AI(t,r=this){if((t=Qn(this,t,r,0)??fe)===zn)return;const i=this._$AH,n=t===fe&&i!==fe||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==fe&&(i===fe||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rc{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Qn(this,t)}}const ic=vs.litHtmlPolyfillSupport;ic?.(br,vr),(vs.litHtmlVersions??=[]).push("3.3.3");const sc=(e,t,r)=>{const i=r?.renderBefore??t;let n=i._$litPart$;if(n===void 0){const a=r?.renderBefore??null;i._$litPart$=n=new vr(t.insertBefore(mr(),a),a,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $s=globalThis;let Me=class extends Gn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=sc(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return zn}};Me._$litElement$=!0,Me.finalized=!0,$s.litElementHydrateSupport?.({LitElement:Me});const oc=$s.litElementPolyfillSupport;oc?.({LitElement:Me});($s.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ac={attribute:!0,type:String,converter:ti,reflect:!1,hasChanged:ws},lc=(e=ac,t,r)=>{const{kind:i,metadata:n}=r;let a=globalThis.litPropertyMetadata.get(n);if(a===void 0&&globalThis.litPropertyMetadata.set(n,a=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),i==="accessor"){const{name:l}=r;return{set(u){const h=t.get.call(this);t.set.call(this,u),this.requestUpdate(l,h,e,!0,u)},init(u){return u!==void 0&&this.C(l,void 0,e,u),u}}}if(i==="setter"){const{name:l}=r;return function(u){const h=this[l];t.call(this,u),this.requestUpdate(l,h,e,!0,u)}}throw Error("Unsupported decorator location: "+i)};function Bt(e){return(t,r)=>typeof r=="object"?lc(e,t,r):((i,n,a)=>{const l=n.hasOwnProperty(a);return n.constructor.createProperty(a,i),l?Object.getOwnPropertyDescriptor(n,a):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function H(e){return Bt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cc=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Zn(e,t){return(r,i,n)=>{const a=l=>l.renderRoot?.querySelector(e)??null;return cc(r,i,{get(){return a(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const uc={CHILD:2},pa=e=>(...t)=>({_$litDirective$:e,values:t});class dc{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ri extends dc{constructor(t){if(super(t),this.it=fe,t.type!==uc.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===fe||t==null)return this._t=void 0,this.it=t;if(t===zn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}ri.directiveName="unsafeHTML",ri.resultType=1;const Jr=pa(ri);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class rs extends ri{}rs.directiveName="unsafeSVG",rs.resultType=2;const hc=pa(rs);var fc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zr={exports:{}},mc=Zr.exports,yo;function gc(){return yo||(yo=1,(function(e,t){(function(r,i){e.exports=i()})(mc,function(){var r=function(s,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,d){c.__proto__=d}||function(c,d){for(var f in d)Object.prototype.hasOwnProperty.call(d,f)&&(c[f]=d[f])})(s,o)},i=function(){return(i=Object.assign||function(s){for(var o,c=1,d=arguments.length;c<d;c++)for(var f in o=arguments[c])Object.prototype.hasOwnProperty.call(o,f)&&(s[f]=o[f]);return s}).apply(this,arguments)};function n(s,o,c){for(var d,f=0,p=o.length;f<p;f++)!d&&f in o||((d=d||Array.prototype.slice.call(o,0,f))[f]=o[f]);return s.concat(d||Array.prototype.slice.call(o))}var a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:fc,l=Object.keys,u=Array.isArray;function h(s,o){return typeof o!="object"||l(o).forEach(function(c){s[c]=o[c]}),s}typeof Promise>"u"||a.Promise||(a.Promise=Promise);var y=Object.getPrototypeOf,k={}.hasOwnProperty;function x(s,o){return k.call(s,o)}function I(s,o){typeof o=="function"&&(o=o(y(s))),(typeof Reflect>"u"?l:Reflect.ownKeys)(o).forEach(function(c){L(s,c,o[c])})}var V=Object.defineProperty;function L(s,o,c,d){V(s,o,h(c&&x(c,"get")&&typeof c.get=="function"?{get:c.get,set:c.set,configurable:!0}:{value:c,configurable:!0,writable:!0},d))}function N(s){return{from:function(o){return s.prototype=Object.create(o.prototype),L(s.prototype,"constructor",s),{extend:I.bind(null,s.prototype)}}}}var ee=Object.getOwnPropertyDescriptor,ce=[].slice;function je(s,o,c){return ce.call(s,o,c)}function Oe(s,o){return o(s)}function oe(s){if(!s)throw new Error("Assertion Failed")}function ie(s){a.setImmediate?setImmediate(s):setTimeout(s,0)}function pe(s,o){if(typeof o=="string"&&x(s,o))return s[o];if(!o)return s;if(typeof o!="string"){for(var c=[],d=0,f=o.length;d<f;++d){var p=pe(s,o[d]);c.push(p)}return c}var b=o.indexOf(".");if(b!==-1){var v=s[o.substr(0,b)];return v==null?void 0:pe(v,o.substr(b+1))}}function Se(s,o,c){if(s&&o!==void 0&&!("isFrozen"in Object&&Object.isFrozen(s)))if(typeof o!="string"&&"length"in o){oe(typeof c!="string"&&"length"in c);for(var d=0,f=o.length;d<f;++d)Se(s,o[d],c[d])}else{var p,b,v=o.indexOf(".");v!==-1?(p=o.substr(0,v),(b=o.substr(v+1))===""?c===void 0?u(s)&&!isNaN(parseInt(p))?s.splice(p,1):delete s[p]:s[p]=c:Se(v=!(v=s[p])||!x(s,p)?s[p]={}:v,b,c)):c===void 0?u(s)&&!isNaN(parseInt(o))?s.splice(o,1):delete s[o]:s[o]=c}}function ot(s){var o,c={};for(o in s)x(s,o)&&(c[o]=s[o]);return c}var gt=[].concat;function ct(s){return gt.apply([],s)}var cn="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ct([8,16,32,64].map(function(s){return["Int","Uint","Float"].map(function(o){return o+s+"Array"})}))).filter(function(s){return a[s]}),m=new Set(cn.map(function(s){return a[s]})),w=null;function E(s){return w=new WeakMap,s=(function o(c){if(!c||typeof c!="object")return c;var d=w.get(c);if(d)return d;if(u(c)){d=[],w.set(c,d);for(var f=0,p=c.length;f<p;++f)d.push(o(c[f]))}else if(m.has(c.constructor))d=c;else{var b,v=y(c);for(b in d=v===Object.prototype?{}:Object.create(v),w.set(c,d),c)x(c,b)&&(d[b]=o(c[b]))}return d})(s),w=null,s}var g={}.toString;function C(s){return g.call(s).slice(8,-1)}var ae=typeof Symbol<"u"?Symbol.iterator:"@@iterator",he=typeof ae=="symbol"?function(s){var o;return s!=null&&(o=s[ae])&&o.apply(s)}:function(){return null};function q(s,o){return o=s.indexOf(o),0<=o&&s.splice(o,1),0<=o}var Y={};function Ke(s){var o,c,d,f;if(arguments.length===1){if(u(s))return s.slice();if(this===Y&&typeof s=="string")return[s];if(f=he(s)){for(c=[];!(d=f.next()).done;)c.push(d.value);return c}if(s==null)return[s];if(typeof(o=s.length)!="number")return[s];for(c=new Array(o);o--;)c[o]=s[o];return c}for(o=arguments.length,c=new Array(o);o--;)c[o]=arguments[o];return c}var at=typeof Symbol<"u"?function(s){return s[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Ce=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Ft=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Ce),Zt={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Ne(s,o){this.name=s,this.message=o}function Fe(s,o){return s+". Errors: "+Object.keys(o).map(function(c){return o[c].toString()}).filter(function(c,d,f){return f.indexOf(c)===d}).join(`
`)}function $e(s,o,c,d){this.failures=o,this.failedKeys=d,this.successCount=c,this.message=Fe(s,o)}function Pe(s,o){this.name="BulkError",this.failures=Object.keys(o).map(function(c){return o[c]}),this.failuresByPos=o,this.message=Fe(s,this.failures)}N(Ne).from(Error).extend({toString:function(){return this.name+": "+this.message}}),N($e).from(Ne),N(Pe).from(Ne);var Ve=Ft.reduce(function(s,o){return s[o]=o+"Error",s},{}),_e=Ne,te=Ft.reduce(function(s,o){var c=o+"Error";function d(f,p){this.name=c,f?typeof f=="string"?(this.message="".concat(f).concat(p?`
 `+p:""),this.inner=p||null):typeof f=="object"&&(this.message="".concat(f.name," ").concat(f.message),this.inner=f):(this.message=Zt[o]||c,this.inner=null)}return N(d).from(_e),s[o]=d,s},{});te.Syntax=SyntaxError,te.Type=TypeError,te.Range=RangeError;var Ye=Ce.reduce(function(s,o){return s[o+"Error"]=te[o],s},{}),ze=Ft.reduce(function(s,o){return["Syntax","Type","Range"].indexOf(o)===-1&&(s[o+"Error"]=te[o]),s},{});function de(){}function we(s){return s}function Et(s,o){return s==null||s===we?o:function(c){return o(s(c))}}function le(s,o){return function(){s.apply(this,arguments),o.apply(this,arguments)}}function Xe(s,o){return s===de?o:function(){var c=s.apply(this,arguments);c!==void 0&&(arguments[0]=c);var d=this.onsuccess,f=this.onerror;this.onsuccess=null,this.onerror=null;var p=o.apply(this,arguments);return d&&(this.onsuccess=this.onsuccess?le(d,this.onsuccess):d),f&&(this.onerror=this.onerror?le(f,this.onerror):f),p!==void 0?p:c}}function pn(s,o){return s===de?o:function(){s.apply(this,arguments);var c=this.onsuccess,d=this.onerror;this.onsuccess=this.onerror=null,o.apply(this,arguments),c&&(this.onsuccess=this.onsuccess?le(c,this.onsuccess):c),d&&(this.onerror=this.onerror?le(d,this.onerror):d)}}function Nt(s,o){return s===de?o:function(c){var d=s.apply(this,arguments);h(c,d);var f=this.onsuccess,p=this.onerror;return this.onsuccess=null,this.onerror=null,c=o.apply(this,arguments),f&&(this.onsuccess=this.onsuccess?le(f,this.onsuccess):f),p&&(this.onerror=this.onerror?le(p,this.onerror):p),d===void 0?c===void 0?void 0:c:h(d,c)}}function Je(s,o){return s===de?o:function(){return o.apply(this,arguments)!==!1&&s.apply(this,arguments)}}function St(s,o){return s===de?o:function(){var c=s.apply(this,arguments);if(c&&typeof c.then=="function"){for(var d=this,f=arguments.length,p=new Array(f);f--;)p[f]=arguments[f];return c.then(function(){return o.apply(d,p)})}return o.apply(this,arguments)}}ze.ModifyError=$e,ze.DexieError=Ne,ze.BulkError=Pe;var Ie=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ue(s){Ie=s}var xt={},tt=100,cn=typeof Promise>"u"?[]:(function(){var s=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[s,y(s),s];var o=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[o,y(o),s]})(),Ce=cn[0],Ft=cn[1],cn=cn[2],Ft=Ft&&Ft.then,ke=Ce&&Ce.constructor,_t=!!cn,qe=function(s,o){rt.push([s,o]),ut&&(queueMicrotask(me),ut=!1)},bt=!0,ut=!0,nt=[],Le=[],ue=we,Ge={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:de,pgp:!1,env:{},finalize:de},G=Ge,rt=[],ft=0,kt=[];function Q(s){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var o=this._PSD=G;if(typeof s!="function"){if(s!==xt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&dt(this,this._value))}this._state=null,this._value=null,++o.ref,(function c(d,f){try{f(function(p){if(d._state===null){if(p===d)throw new TypeError("A promise cannot be resolved with itself.");var b=d._lib&&Re();p&&typeof p.then=="function"?c(d,function(v,S){p instanceof Q?p._then(v,S):p.then(v,S)}):(d._state=!0,d._value=p,mn(d)),b&&He()}},dt.bind(null,d))}catch(p){dt(d,p)}})(this,s)}var en={get:function(){var s=G,o=_r;function c(d,f){var p=this,b=!s.global&&(s!==G||o!==_r),v=b&&!bn(),S=new Q(function(A,D){re(p,new an(Ds(d,s,b,v),Ds(f,s,b,v),A,D,s))});return this._consoleTask&&(S._consoleTask=this._consoleTask),S}return c.prototype=xt,c},set:function(s){L(this,"then",s&&s.prototype===xt?en:{get:function(){return s},set:en.set})}};function an(s,o,c,d,f){this.onFulfilled=typeof s=="function"?s:null,this.onRejected=typeof o=="function"?o:null,this.resolve=c,this.reject=d,this.psd=f}function dt(s,o){var c,d;Le.push(o),s._state===null&&(c=s._lib&&Re(),o=ue(o),s._state=!1,s._value=o,d=s,nt.some(function(f){return f._value===d._value})||nt.push(d),mn(s),c&&He())}function mn(s){var o=s._listeners;s._listeners=[];for(var c=0,d=o.length;c<d;++c)re(s,o[c]);var f=s._PSD;--f.ref||f.finalize(),ft===0&&(++ft,qe(function(){--ft==0&&Te()},[]))}function re(s,o){if(s._state!==null){var c=s._state?o.onFulfilled:o.onRejected;if(c===null)return(s._state?o.resolve:o.reject)(s._value);++o.psd.ref,++ft,qe(Ae,[c,s,o])}else s._listeners.push(o)}function Ae(s,o,c){try{var d,f=o._value;!o._state&&Le.length&&(Le=[]),d=Ie&&o._consoleTask?o._consoleTask.run(function(){return s(f)}):s(f),o._state||Le.indexOf(f)!==-1||(function(p){for(var b=nt.length;b;)if(nt[--b]._value===p._value)return nt.splice(b,1)})(o),c.resolve(d)}catch(p){c.reject(p)}finally{--ft==0&&Te(),--c.psd.ref||c.psd.finalize()}}function me(){En(Ge,function(){Re()&&He()})}function Re(){var s=bt;return ut=bt=!1,s}function He(){var s,o,c;do for(;0<rt.length;)for(s=rt,rt=[],c=s.length,o=0;o<c;++o){var d=s[o];d[0].apply(null,d[1])}while(0<rt.length);ut=bt=!0}function Te(){var s=nt;nt=[],s.forEach(function(d){d._PSD.onunhandled.call(null,d._value,d)});for(var o=kt.slice(0),c=o.length;c;)o[--c]()}function Ut(s){return new Q(xt,!1,s)}function Be(s,o){var c=G;return function(){var d=Re(),f=G;try{return yn(c,!0),s.apply(this,arguments)}catch(p){o&&o(p)}finally{yn(f,!1),d&&He()}}}I(Q.prototype,{then:en,_then:function(s,o){re(this,new an(null,null,s,o,G))},catch:function(s){if(arguments.length===1)return this.then(null,s);var o=s,c=arguments[1];return typeof o=="function"?this.then(null,function(d){return(d instanceof o?c:Ut)(d)}):this.then(null,function(d){return(d&&d.name===o?c:Ut)(d)})},finally:function(s){return this.then(function(o){return Q.resolve(s()).then(function(){return o})},function(o){return Q.resolve(s()).then(function(){return Ut(o)})})},timeout:function(s,o){var c=this;return s<1/0?new Q(function(d,f){var p=setTimeout(function(){return f(new te.Timeout(o))},s);c.then(d,f).finally(clearTimeout.bind(null,p))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&L(Q.prototype,Symbol.toStringTag,"Dexie.Promise"),Ge.env=Ts(),I(Q,{all:function(){var s=Ke.apply(null,arguments).map(Ar);return new Q(function(o,c){s.length===0&&o([]);var d=s.length;s.forEach(function(f,p){return Q.resolve(f).then(function(b){s[p]=b,--d||o(s)},c)})})},resolve:function(s){return s instanceof Q?s:s&&typeof s.then=="function"?new Q(function(o,c){s.then(o,c)}):new Q(xt,!0,s)},reject:Ut,race:function(){var s=Ke.apply(null,arguments).map(Ar);return new Q(function(o,c){s.map(function(d){return Q.resolve(d).then(o,c)})})},PSD:{get:function(){return G},set:function(s){return G=s}},totalEchoes:{get:function(){return _r}},newPSD:gn,usePSD:En,scheduler:{get:function(){return qe},set:function(s){qe=s}},rejectionMapper:{get:function(){return ue},set:function(s){ue=s}},follow:function(s,o){return new Q(function(c,d){return gn(function(f,p){var b=G;b.unhandleds=[],b.onunhandled=p,b.finalize=le(function(){var v,S=this;v=function(){S.unhandleds.length===0?f():p(S.unhandleds[0])},kt.push(function A(){v(),kt.splice(kt.indexOf(A),1)}),++ft,qe(function(){--ft==0&&Te()},[])},b.finalize),s()},o,c,d)})}}),ke&&(ke.allSettled&&L(Q,"allSettled",function(){var s=Ke.apply(null,arguments).map(Ar);return new Q(function(o){s.length===0&&o([]);var c=s.length,d=new Array(c);s.forEach(function(f,p){return Q.resolve(f).then(function(b){return d[p]={status:"fulfilled",value:b}},function(b){return d[p]={status:"rejected",reason:b}}).then(function(){return--c||o(d)})})})}),ke.any&&typeof AggregateError<"u"&&L(Q,"any",function(){var s=Ke.apply(null,arguments).map(Ar);return new Q(function(o,c){s.length===0&&c(new AggregateError([]));var d=s.length,f=new Array(d);s.forEach(function(p,b){return Q.resolve(p).then(function(v){return o(v)},function(v){f[b]=v,--d||c(new AggregateError(f))})})})}),ke.withResolvers&&(Q.withResolvers=ke.withResolvers));var pt={awaits:0,echoes:0,id:0},fl=0,Er=[],Sr=0,_r=0,pl=0;function gn(s,o,c,d){var f=G,p=Object.create(f);return p.parent=f,p.ref=0,p.global=!1,p.id=++pl,Ge.env,p.env=_t?{Promise:Q,PromiseProp:{value:Q,configurable:!0,writable:!0},all:Q.all,race:Q.race,allSettled:Q.allSettled,any:Q.any,resolve:Q.resolve,reject:Q.reject}:{},o&&h(p,o),++f.ref,p.finalize=function(){--this.parent.ref||this.parent.finalize()},d=En(p,s,c,d),p.ref===0&&p.finalize(),d}function qn(){return pt.id||(pt.id=++fl),++pt.awaits,pt.echoes+=tt,pt.id}function bn(){return!!pt.awaits&&(--pt.awaits==0&&(pt.id=0),pt.echoes=pt.awaits*tt,!0)}function Ar(s){return pt.echoes&&s&&s.constructor===ke?(qn(),s.then(function(o){return bn(),o},function(o){return bn(),it(o)})):s}function ml(){var s=Er[Er.length-1];Er.pop(),yn(s,!1)}function yn(s,o){var c,d=G;(o?!pt.echoes||Sr++&&s===G:!Sr||--Sr&&s===G)||queueMicrotask(o?function(f){++_r,pt.echoes&&--pt.echoes!=0||(pt.echoes=pt.awaits=pt.id=0),Er.push(G),yn(f,!0)}.bind(null,s):ml),s!==G&&(G=s,d===Ge&&(Ge.env=Ts()),_t&&(c=Ge.env.Promise,o=s.env,(d.global||s.global)&&(Object.defineProperty(a,"Promise",o.PromiseProp),c.all=o.all,c.race=o.race,c.resolve=o.resolve,c.reject=o.reject,o.allSettled&&(c.allSettled=o.allSettled),o.any&&(c.any=o.any))))}function Ts(){var s=a.Promise;return _t?{Promise:s,PromiseProp:Object.getOwnPropertyDescriptor(a,"Promise"),all:s.all,race:s.race,allSettled:s.allSettled,any:s.any,resolve:s.resolve,reject:s.reject}:{}}function En(s,o,c,d,f){var p=G;try{return yn(s,!0),o(c,d,f)}finally{yn(p,!1)}}function Ds(s,o,c,d){return typeof s!="function"?s:function(){var f=G;c&&qn(),yn(o,!0);try{return s.apply(this,arguments)}finally{yn(f,!1),d&&queueMicrotask(bn)}}}function xi(s){Promise===ke&&pt.echoes===0?Sr===0?s():enqueueNativeMicroTask(s):setTimeout(s,0)}(""+Ft).indexOf("[native code]")===-1&&(qn=bn=de);var it=Q.reject,Sn="￿",ln="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Is="String expected.",Hn=[],Pr="__dbnames",$i="readonly",ki="readwrite";function _n(s,o){return s?o?function(){return s.apply(this,arguments)&&o.apply(this,arguments)}:s:o}var Rs={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Tr(s){return typeof s!="string"||/\./.test(s)?function(o){return o}:function(o){return o[s]===void 0&&s in o&&delete(o=E(o))[s],o}}function js(){throw te.Type()}function Ee(s,o){try{var c=Os(s),d=Os(o);if(c!==d)return c==="Array"?1:d==="Array"?-1:c==="binary"?1:d==="binary"?-1:c==="string"?1:d==="string"?-1:c==="Date"?1:d!=="Date"?NaN:-1;switch(c){case"number":case"Date":case"string":return o<s?1:s<o?-1:0;case"binary":return(function(f,p){for(var b=f.length,v=p.length,S=b<v?b:v,A=0;A<S;++A)if(f[A]!==p[A])return f[A]<p[A]?-1:1;return b===v?0:b<v?-1:1})(Fs(s),Fs(o));case"Array":return(function(f,p){for(var b=f.length,v=p.length,S=b<v?b:v,A=0;A<S;++A){var D=Ee(f[A],p[A]);if(D!==0)return D}return b===v?0:b<v?-1:1})(s,o)}}catch{}return NaN}function Os(s){var o=typeof s;return o!="object"?o:ArrayBuffer.isView(s)?"binary":(s=C(s),s==="ArrayBuffer"?"binary":s)}function Fs(s){return s instanceof Uint8Array?s:ArrayBuffer.isView(s)?new Uint8Array(s.buffer,s.byteOffset,s.byteLength):new Uint8Array(s)}var zs=(We.prototype._trans=function(s,o,c){var d=this._tx||G.trans,f=this.name,p=Ie&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(s==="readonly"?"read":"write"," ").concat(this.name));function b(A,D,$){if(!$.schema[f])throw new te.NotFound("Table "+f+" not part of transaction");return o($.idbtrans,$)}var v=Re();try{var S=d&&d.db._novip===this.db._novip?d===G.trans?d._promise(s,b,c):gn(function(){return d._promise(s,b,c)},{trans:d,transless:G.transless||G}):(function A(D,$,j,_){if(D.idbdb&&(D._state.openComplete||G.letThrough||D._vip)){var T=D._createTransaction($,j,D._dbSchema);try{T.create(),D._state.PR1398_maxLoop=3}catch(R){return R.name===Ve.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return A(D,$,j,_)})):it(R)}return T._promise($,function(R,P){return gn(function(){return G.trans=T,_(R,P,T)})}).then(function(R){if($==="readwrite")try{T.idbtrans.commit()}catch{}return $==="readonly"?R:T._completion.then(function(){return R})})}if(D._state.openComplete)return it(new te.DatabaseClosed(D._state.dbOpenError));if(!D._state.isBeingOpened){if(!D._state.autoOpen)return it(new te.DatabaseClosed);D.open().catch(de)}return D._state.dbReadyPromise.then(function(){return A(D,$,j,_)})})(this.db,s,[this.name],b);return p&&(S._consoleTask=p,S=S.catch(function(A){return console.trace(A),it(A)})),S}finally{v&&He()}},We.prototype.get=function(s,o){var c=this;return s&&s.constructor===Object?this.where(s).first(o):s==null?it(new te.Type("Invalid argument to Table.get()")):this._trans("readonly",function(d){return c.core.get({trans:d,key:s}).then(function(f){return c.hook.reading.fire(f)})}).then(o)},We.prototype.where=function(s){if(typeof s=="string")return new this.db.WhereClause(this,s);if(u(s))return new this.db.WhereClause(this,"[".concat(s.join("+"),"]"));var o=l(s);if(o.length===1)return this.where(o[0]).equals(s[o[0]]);var c=this.schema.indexes.concat(this.schema.primKey).filter(function(v){if(v.compound&&o.every(function(A){return 0<=v.keyPath.indexOf(A)})){for(var S=0;S<o.length;++S)if(o.indexOf(v.keyPath[S])===-1)return!1;return!0}return!1}).sort(function(v,S){return v.keyPath.length-S.keyPath.length})[0];if(c&&this.db._maxKey!==Sn){var p=c.keyPath.slice(0,o.length);return this.where(p).equals(p.map(function(S){return s[S]}))}!c&&Ie&&console.warn("The query ".concat(JSON.stringify(s)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(o.join("+"),"]"));var d=this.schema.idxByName;function f(v,S){return Ee(v,S)===0}var b=o.reduce(function($,S){var A=$[0],D=$[1],$=d[S],j=s[S];return[A||$,A||!$?_n(D,$&&$.multi?function(_){return _=pe(_,S),u(_)&&_.some(function(T){return f(j,T)})}:function(_){return f(j,pe(_,S))}):D]},[null,null]),p=b[0],b=b[1];return p?this.where(p.name).equals(s[p.keyPath]).filter(b):c?this.filter(b):this.where(o).equals("")},We.prototype.filter=function(s){return this.toCollection().and(s)},We.prototype.count=function(s){return this.toCollection().count(s)},We.prototype.offset=function(s){return this.toCollection().offset(s)},We.prototype.limit=function(s){return this.toCollection().limit(s)},We.prototype.each=function(s){return this.toCollection().each(s)},We.prototype.toArray=function(s){return this.toCollection().toArray(s)},We.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},We.prototype.orderBy=function(s){return new this.db.Collection(new this.db.WhereClause(this,u(s)?"[".concat(s.join("+"),"]"):s))},We.prototype.reverse=function(){return this.toCollection().reverse()},We.prototype.mapToClass=function(s){var o,c=this.db,d=this.name;function f(){return o!==null&&o.apply(this,arguments)||this}(this.schema.mappedClass=s).prototype instanceof js&&((function(S,A){if(typeof A!="function"&&A!==null)throw new TypeError("Class extends value "+String(A)+" is not a constructor or null");function D(){this.constructor=S}r(S,A),S.prototype=A===null?Object.create(A):(D.prototype=A.prototype,new D)})(f,o=s),Object.defineProperty(f.prototype,"db",{get:function(){return c},enumerable:!1,configurable:!0}),f.prototype.table=function(){return d},s=f);for(var p=new Set,b=s.prototype;b;b=y(b))Object.getOwnPropertyNames(b).forEach(function(S){return p.add(S)});function v(S){if(!S)return S;var A,D=Object.create(s.prototype);for(A in S)if(!p.has(A))try{D[A]=S[A]}catch{}return D}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=v,this.hook("reading",v),s},We.prototype.defineClass=function(){return this.mapToClass(function(s){h(this,s)})},We.prototype.add=function(s,o){var c=this,d=this.schema.primKey,f=d.auto,p=d.keyPath,b=s;return p&&f&&(b=Tr(p)(s)),this._trans("readwrite",function(v){return c.core.mutate({trans:v,type:"add",keys:o!=null?[o]:null,values:[b]})}).then(function(v){return v.numFailures?Q.reject(v.failures[0]):v.lastResult}).then(function(v){if(p)try{Se(s,p,v)}catch{}return v})},We.prototype.update=function(s,o){return typeof s!="object"||u(s)?this.where(":id").equals(s).modify(o):(s=pe(s,this.schema.primKey.keyPath),s===void 0?it(new te.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(s).modify(o))},We.prototype.put=function(s,o){var c=this,d=this.schema.primKey,f=d.auto,p=d.keyPath,b=s;return p&&f&&(b=Tr(p)(s)),this._trans("readwrite",function(v){return c.core.mutate({trans:v,type:"put",values:[b],keys:o!=null?[o]:null})}).then(function(v){return v.numFailures?Q.reject(v.failures[0]):v.lastResult}).then(function(v){if(p)try{Se(s,p,v)}catch{}return v})},We.prototype.delete=function(s){var o=this;return this._trans("readwrite",function(c){return o.core.mutate({trans:c,type:"delete",keys:[s]})}).then(function(c){return c.numFailures?Q.reject(c.failures[0]):void 0})},We.prototype.clear=function(){var s=this;return this._trans("readwrite",function(o){return s.core.mutate({trans:o,type:"deleteRange",range:Rs})}).then(function(o){return o.numFailures?Q.reject(o.failures[0]):void 0})},We.prototype.bulkGet=function(s){var o=this;return this._trans("readonly",function(c){return o.core.getMany({keys:s,trans:c}).then(function(d){return d.map(function(f){return o.hook.reading.fire(f)})})})},We.prototype.bulkAdd=function(s,o,c){var d=this,f=Array.isArray(o)?o:void 0,p=(c=c||(f?void 0:o))?c.allKeys:void 0;return this._trans("readwrite",function(b){var A=d.schema.primKey,v=A.auto,A=A.keyPath;if(A&&f)throw new te.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(f&&f.length!==s.length)throw new te.InvalidArgument("Arguments objects and keys must have the same length");var S=s.length,A=A&&v?s.map(Tr(A)):s;return d.core.mutate({trans:b,type:"add",keys:f,values:A,wantResults:p}).then(function(T){var $=T.numFailures,j=T.results,_=T.lastResult,T=T.failures;if($===0)return p?j:_;throw new Pe("".concat(d.name,".bulkAdd(): ").concat($," of ").concat(S," operations failed"),T)})})},We.prototype.bulkPut=function(s,o,c){var d=this,f=Array.isArray(o)?o:void 0,p=(c=c||(f?void 0:o))?c.allKeys:void 0;return this._trans("readwrite",function(b){var A=d.schema.primKey,v=A.auto,A=A.keyPath;if(A&&f)throw new te.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(f&&f.length!==s.length)throw new te.InvalidArgument("Arguments objects and keys must have the same length");var S=s.length,A=A&&v?s.map(Tr(A)):s;return d.core.mutate({trans:b,type:"put",keys:f,values:A,wantResults:p}).then(function(T){var $=T.numFailures,j=T.results,_=T.lastResult,T=T.failures;if($===0)return p?j:_;throw new Pe("".concat(d.name,".bulkPut(): ").concat($," of ").concat(S," operations failed"),T)})})},We.prototype.bulkUpdate=function(s){var o=this,c=this.core,d=s.map(function(b){return b.key}),f=s.map(function(b){return b.changes}),p=[];return this._trans("readwrite",function(b){return c.getMany({trans:b,keys:d,cache:"clone"}).then(function(v){var S=[],A=[];s.forEach(function($,j){var _=$.key,T=$.changes,R=v[j];if(R){for(var P=0,F=Object.keys(T);P<F.length;P++){var B=F[P],M=T[B];if(B===o.schema.primKey.keyPath){if(Ee(M,_)!==0)throw new te.Constraint("Cannot update primary key in bulkUpdate()")}else Se(R,B,M)}p.push(j),S.push(_),A.push(R)}});var D=S.length;return c.mutate({trans:b,type:"put",keys:S,values:A,updates:{keys:d,changeSpecs:f}}).then(function($){var j=$.numFailures,_=$.failures;if(j===0)return D;for(var T=0,R=Object.keys(_);T<R.length;T++){var P,F=R[T],B=p[Number(F)];B!=null&&(P=_[F],delete _[F],_[B]=P)}throw new Pe("".concat(o.name,".bulkUpdate(): ").concat(j," of ").concat(D," operations failed"),_)})})})},We.prototype.bulkDelete=function(s){var o=this,c=s.length;return this._trans("readwrite",function(d){return o.core.mutate({trans:d,type:"delete",keys:s})}).then(function(b){var f=b.numFailures,p=b.lastResult,b=b.failures;if(f===0)return p;throw new Pe("".concat(o.name,".bulkDelete(): ").concat(f," of ").concat(c," operations failed"),b)})},We);function We(){}function rr(s){function o(b,v){if(v){for(var S=arguments.length,A=new Array(S-1);--S;)A[S-1]=arguments[S];return c[b].subscribe.apply(null,A),s}if(typeof b=="string")return c[b]}var c={};o.addEventType=p;for(var d=1,f=arguments.length;d<f;++d)p(arguments[d]);return o;function p(b,v,S){if(typeof b!="object"){var A;v=v||Je;var D={subscribers:[],fire:S=S||de,subscribe:function($){D.subscribers.indexOf($)===-1&&(D.subscribers.push($),D.fire=v(D.fire,$))},unsubscribe:function($){D.subscribers=D.subscribers.filter(function(j){return j!==$}),D.fire=D.subscribers.reduce(v,S)}};return c[b]=o[b]=D}l(A=b).forEach(function($){var j=A[$];if(u(j))p($,A[$][0],A[$][1]);else{if(j!=="asap")throw new te.InvalidArgument("Invalid event config");var _=p($,we,function(){for(var T=arguments.length,R=new Array(T);T--;)R[T]=arguments[T];_.subscribers.forEach(function(P){ie(function(){P.apply(null,R)})})})}})}}function ir(s,o){return N(o).from({prototype:s}),o}function Wn(s,o){return!(s.filter||s.algorithm||s.or)&&(o?s.justLimit:!s.replayFilter)}function Ci(s,o){s.filter=_n(s.filter,o)}function Ei(s,o,c){var d=s.replayFilter;s.replayFilter=d?function(){return _n(d(),o())}:o,s.justLimit=c&&!d}function Dr(s,o){if(s.isPrimKey)return o.primaryKey;var c=o.getIndexByKeyPath(s.index);if(!c)throw new te.Schema("KeyPath "+s.index+" on object store "+o.name+" is not indexed");return c}function Ls(s,o,c){var d=Dr(s,o.schema);return o.openCursor({trans:c,values:!s.keysOnly,reverse:s.dir==="prev",unique:!!s.unique,query:{index:d,range:s.range}})}function Ir(s,o,c,d){var f=s.replayFilter?_n(s.filter,s.replayFilter()):s.filter;if(s.or){var p={},b=function(v,S,A){var D,$;f&&!f(S,A,function(j){return S.stop(j)},function(j){return S.fail(j)})||(($=""+(D=S.primaryKey))=="[object ArrayBuffer]"&&($=""+new Uint8Array(D)),x(p,$)||(p[$]=!0,o(v,S,A)))};return Promise.all([s.or._iterate(b,c),Bs(Ls(s,d,c),s.algorithm,b,!s.keysOnly&&s.valueMapper)])}return Bs(Ls(s,d,c),_n(s.algorithm,f),o,!s.keysOnly&&s.valueMapper)}function Bs(s,o,c,d){var f=Be(d?function(p,b,v){return c(d(p),b,v)}:c);return s.then(function(p){if(p)return p.start(function(){var b=function(){return p.continue()};o&&!o(p,function(v){return b=v},function(v){p.stop(v),b=de},function(v){p.fail(v),b=de})||f(p.value,p,function(v){return b=v}),b()})})}var cn=Symbol(),sr=(Ms.prototype.execute=function(s){if(this.add!==void 0){var o=this.add;if(u(o))return n(n([],u(s)?s:[],!0),o).sort();if(typeof o=="number")return(Number(s)||0)+o;if(typeof o=="bigint")try{return BigInt(s)+o}catch{return BigInt(0)+o}throw new TypeError("Invalid term ".concat(o))}if(this.remove!==void 0){var c=this.remove;if(u(c))return u(s)?s.filter(function(d){return!c.includes(d)}).sort():[];if(typeof c=="number")return Number(s)-c;if(typeof c=="bigint")try{return BigInt(s)-c}catch{return BigInt(0)-c}throw new TypeError("Invalid subtrahend ".concat(c))}return o=(o=this.replacePrefix)===null||o===void 0?void 0:o[0],o&&typeof s=="string"&&s.startsWith(o)?this.replacePrefix[1]+s.substring(o.length):s},Ms);function Ms(s){Object.assign(this,s)}var gl=(De.prototype._read=function(s,o){var c=this._ctx;return c.error?c.table._trans(null,it.bind(null,c.error)):c.table._trans("readonly",s).then(o)},De.prototype._write=function(s){var o=this._ctx;return o.error?o.table._trans(null,it.bind(null,o.error)):o.table._trans("readwrite",s,"locked")},De.prototype._addAlgorithm=function(s){var o=this._ctx;o.algorithm=_n(o.algorithm,s)},De.prototype._iterate=function(s,o){return Ir(this._ctx,s,o,this._ctx.table.core)},De.prototype.clone=function(s){var o=Object.create(this.constructor.prototype),c=Object.create(this._ctx);return s&&h(c,s),o._ctx=c,o},De.prototype.raw=function(){return this._ctx.valueMapper=null,this},De.prototype.each=function(s){var o=this._ctx;return this._read(function(c){return Ir(o,s,c,o.table.core)})},De.prototype.count=function(s){var o=this;return this._read(function(c){var d=o._ctx,f=d.table.core;if(Wn(d,!0))return f.count({trans:c,query:{index:Dr(d,f.schema),range:d.range}}).then(function(b){return Math.min(b,d.limit)});var p=0;return Ir(d,function(){return++p,!1},c,f).then(function(){return p})}).then(s)},De.prototype.sortBy=function(s,o){var c=s.split(".").reverse(),d=c[0],f=c.length-1;function p(S,A){return A?p(S[c[A]],A-1):S[d]}var b=this._ctx.dir==="next"?1:-1;function v(S,A){return Ee(p(S,f),p(A,f))*b}return this.toArray(function(S){return S.sort(v)}).then(o)},De.prototype.toArray=function(s){var o=this;return this._read(function(c){var d=o._ctx;if(d.dir==="next"&&Wn(d,!0)&&0<d.limit){var f=d.valueMapper,p=Dr(d,d.table.core.schema);return d.table.core.query({trans:c,limit:d.limit,values:!0,query:{index:p,range:d.range}}).then(function(v){return v=v.result,f?v.map(f):v})}var b=[];return Ir(d,function(v){return b.push(v)},c,d.table.core).then(function(){return b})},s)},De.prototype.offset=function(s){var o=this._ctx;return s<=0||(o.offset+=s,Wn(o)?Ei(o,function(){var c=s;return function(d,f){return c===0||(c===1?--c:f(function(){d.advance(c),c=0}),!1)}}):Ei(o,function(){var c=s;return function(){return--c<0}})),this},De.prototype.limit=function(s){return this._ctx.limit=Math.min(this._ctx.limit,s),Ei(this._ctx,function(){var o=s;return function(c,d,f){return--o<=0&&d(f),0<=o}},!0),this},De.prototype.until=function(s,o){return Ci(this._ctx,function(c,d,f){return!s(c.value)||(d(f),o)}),this},De.prototype.first=function(s){return this.limit(1).toArray(function(o){return o[0]}).then(s)},De.prototype.last=function(s){return this.reverse().first(s)},De.prototype.filter=function(s){var o;return Ci(this._ctx,function(c){return s(c.value)}),(o=this._ctx).isMatch=_n(o.isMatch,s),this},De.prototype.and=function(s){return this.filter(s)},De.prototype.or=function(s){return new this.db.WhereClause(this._ctx.table,s,this)},De.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},De.prototype.desc=function(){return this.reverse()},De.prototype.eachKey=function(s){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(c,d){s(d.key,d)})},De.prototype.eachUniqueKey=function(s){return this._ctx.unique="unique",this.eachKey(s)},De.prototype.eachPrimaryKey=function(s){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(c,d){s(d.primaryKey,d)})},De.prototype.keys=function(s){var o=this._ctx;o.keysOnly=!o.isMatch;var c=[];return this.each(function(d,f){c.push(f.key)}).then(function(){return c}).then(s)},De.prototype.primaryKeys=function(s){var o=this._ctx;if(o.dir==="next"&&Wn(o,!0)&&0<o.limit)return this._read(function(d){var f=Dr(o,o.table.core.schema);return o.table.core.query({trans:d,values:!1,limit:o.limit,query:{index:f,range:o.range}})}).then(function(d){return d.result}).then(s);o.keysOnly=!o.isMatch;var c=[];return this.each(function(d,f){c.push(f.primaryKey)}).then(function(){return c}).then(s)},De.prototype.uniqueKeys=function(s){return this._ctx.unique="unique",this.keys(s)},De.prototype.firstKey=function(s){return this.limit(1).keys(function(o){return o[0]}).then(s)},De.prototype.lastKey=function(s){return this.reverse().firstKey(s)},De.prototype.distinct=function(){var s=this._ctx,s=s.index&&s.table.schema.idxByName[s.index];if(!s||!s.multi)return this;var o={};return Ci(this._ctx,function(f){var d=f.primaryKey.toString(),f=x(o,d);return o[d]=!0,!f}),this},De.prototype.modify=function(s){var o=this,c=this._ctx;return this._write(function(d){var f,p,b;b=typeof s=="function"?s:(f=l(s),p=f.length,function(P){for(var F=!1,B=0;B<p;++B){var M=f[B],U=s[M],W=pe(P,M);U instanceof sr?(Se(P,M,U.execute(W)),F=!0):W!==U&&(Se(P,M,U),F=!0)}return F});var v=c.table.core,$=v.schema.primaryKey,S=$.outbound,A=$.extractKey,D=200,$=o.db._options.modifyChunkSize;$&&(D=typeof $=="object"?$[v.name]||$["*"]||200:$);function j(P,M){var B=M.failures,M=M.numFailures;T+=P-M;for(var U=0,W=l(B);U<W.length;U++){var Z=W[U];_.push(B[Z])}}var _=[],T=0,R=[];return o.clone().primaryKeys().then(function(P){function F(M){var U=Math.min(D,P.length-M);return v.getMany({trans:d,keys:P.slice(M,M+U),cache:"immutable"}).then(function(W){for(var Z=[],K=[],X=S?[]:null,ne=[],J=0;J<U;++J){var se=W[J],be={value:E(se),primKey:P[M+J]};b.call(be,be.value,be)!==!1&&(be.value==null?ne.push(P[M+J]):S||Ee(A(se),A(be.value))===0?(K.push(be.value),S&&X.push(P[M+J])):(ne.push(P[M+J]),Z.push(be.value)))}return Promise.resolve(0<Z.length&&v.mutate({trans:d,type:"add",values:Z}).then(function(ve){for(var xe in ve.failures)ne.splice(parseInt(xe),1);j(Z.length,ve)})).then(function(){return(0<K.length||B&&typeof s=="object")&&v.mutate({trans:d,type:"put",keys:X,values:K,criteria:B,changeSpec:typeof s!="function"&&s,isAdditionalChunk:0<M}).then(function(ve){return j(K.length,ve)})}).then(function(){return(0<ne.length||B&&s===Si)&&v.mutate({trans:d,type:"delete",keys:ne,criteria:B,isAdditionalChunk:0<M}).then(function(ve){return j(ne.length,ve)})}).then(function(){return P.length>M+U&&F(M+D)})})}var B=Wn(c)&&c.limit===1/0&&(typeof s!="function"||s===Si)&&{index:c.index,range:c.range};return F(0).then(function(){if(0<_.length)throw new $e("Error modifying one or more objects",_,T,R);return P.length})})})},De.prototype.delete=function(){var s=this._ctx,o=s.range;return Wn(s)&&(s.isPrimKey||o.type===3)?this._write(function(c){var d=s.table.core.schema.primaryKey,f=o;return s.table.core.count({trans:c,query:{index:d,range:f}}).then(function(p){return s.table.core.mutate({trans:c,type:"deleteRange",range:f}).then(function(b){var v=b.failures;if(b.lastResult,b.results,b=b.numFailures,b)throw new $e("Could not delete some values",Object.keys(v).map(function(S){return v[S]}),p-b);return p-b})})}):this.modify(Si)},De);function De(){}var Si=function(s,o){return o.value=null};function bl(s,o){return s<o?-1:s===o?0:1}function yl(s,o){return o<s?-1:s===o?0:1}function At(s,o,c){return s=s instanceof Us?new s.Collection(s):s,s._ctx.error=new(c||TypeError)(o),s}function Kn(s){return new s.Collection(s,function(){return Ns("")}).limit(0)}function Rr(s,o,c,d){var f,p,b,v,S,A,D,$=c.length;if(!c.every(function(T){return typeof T=="string"}))return At(s,Is);function j(T){f=T==="next"?function(P){return P.toUpperCase()}:function(P){return P.toLowerCase()},p=T==="next"?function(P){return P.toLowerCase()}:function(P){return P.toUpperCase()},b=T==="next"?bl:yl;var R=c.map(function(P){return{lower:p(P),upper:f(P)}}).sort(function(P,F){return b(P.lower,F.lower)});v=R.map(function(P){return P.upper}),S=R.map(function(P){return P.lower}),D=(A=T)==="next"?"":d}j("next"),s=new s.Collection(s,function(){return wn(v[0],S[$-1]+d)}),s._ondirectionchange=function(T){j(T)};var _=0;return s._addAlgorithm(function(T,R,P){var F=T.key;if(typeof F!="string")return!1;var B=p(F);if(o(B,S,_))return!0;for(var M=null,U=_;U<$;++U){var W=(function(Z,K,X,ne,J,se){for(var be=Math.min(Z.length,ne.length),ve=-1,xe=0;xe<be;++xe){var Pt=K[xe];if(Pt!==ne[xe])return J(Z[xe],X[xe])<0?Z.substr(0,xe)+X[xe]+X.substr(xe+1):J(Z[xe],ne[xe])<0?Z.substr(0,xe)+ne[xe]+X.substr(xe+1):0<=ve?Z.substr(0,ve)+K[ve]+X.substr(ve+1):null;J(Z[xe],Pt)<0&&(ve=xe)}return be<ne.length&&se==="next"?Z+X.substr(Z.length):be<Z.length&&se==="prev"?Z.substr(0,X.length):ve<0?null:Z.substr(0,ve)+ne[ve]+X.substr(ve+1)})(F,B,v[U],S[U],b,A);W===null&&M===null?_=U+1:(M===null||0<b(M,W))&&(M=W)}return R(M!==null?function(){T.continue(M+D)}:P),!1}),s}function wn(s,o,c,d){return{type:2,lower:s,upper:o,lowerOpen:c,upperOpen:d}}function Ns(s){return{type:1,lower:s,upper:s}}var Us=(Object.defineProperty(mt.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),mt.prototype.between=function(s,o,c,d){c=c!==!1,d=d===!0;try{return 0<this._cmp(s,o)||this._cmp(s,o)===0&&(c||d)&&(!c||!d)?Kn(this):new this.Collection(this,function(){return wn(s,o,!c,!d)})}catch{return At(this,ln)}},mt.prototype.equals=function(s){return s==null?At(this,ln):new this.Collection(this,function(){return Ns(s)})},mt.prototype.above=function(s){return s==null?At(this,ln):new this.Collection(this,function(){return wn(s,void 0,!0)})},mt.prototype.aboveOrEqual=function(s){return s==null?At(this,ln):new this.Collection(this,function(){return wn(s,void 0,!1)})},mt.prototype.below=function(s){return s==null?At(this,ln):new this.Collection(this,function(){return wn(void 0,s,!1,!0)})},mt.prototype.belowOrEqual=function(s){return s==null?At(this,ln):new this.Collection(this,function(){return wn(void 0,s)})},mt.prototype.startsWith=function(s){return typeof s!="string"?At(this,Is):this.between(s,s+Sn,!0,!0)},mt.prototype.startsWithIgnoreCase=function(s){return s===""?this.startsWith(s):Rr(this,function(o,c){return o.indexOf(c[0])===0},[s],Sn)},mt.prototype.equalsIgnoreCase=function(s){return Rr(this,function(o,c){return o===c[0]},[s],"")},mt.prototype.anyOfIgnoreCase=function(){var s=Ke.apply(Y,arguments);return s.length===0?Kn(this):Rr(this,function(o,c){return c.indexOf(o)!==-1},s,"")},mt.prototype.startsWithAnyOfIgnoreCase=function(){var s=Ke.apply(Y,arguments);return s.length===0?Kn(this):Rr(this,function(o,c){return c.some(function(d){return o.indexOf(d)===0})},s,Sn)},mt.prototype.anyOf=function(){var s=this,o=Ke.apply(Y,arguments),c=this._cmp;try{o.sort(c)}catch{return At(this,ln)}if(o.length===0)return Kn(this);var d=new this.Collection(this,function(){return wn(o[0],o[o.length-1])});d._ondirectionchange=function(p){c=p==="next"?s._ascending:s._descending,o.sort(c)};var f=0;return d._addAlgorithm(function(p,b,v){for(var S=p.key;0<c(S,o[f]);)if(++f===o.length)return b(v),!1;return c(S,o[f])===0||(b(function(){p.continue(o[f])}),!1)}),d},mt.prototype.notEqual=function(s){return this.inAnyRange([[-1/0,s],[s,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},mt.prototype.noneOf=function(){var s=Ke.apply(Y,arguments);if(s.length===0)return new this.Collection(this);try{s.sort(this._ascending)}catch{return At(this,ln)}var o=s.reduce(function(c,d){return c?c.concat([[c[c.length-1][1],d]]):[[-1/0,d]]},null);return o.push([s[s.length-1],this.db._maxKey]),this.inAnyRange(o,{includeLowers:!1,includeUppers:!1})},mt.prototype.inAnyRange=function(F,o){var c=this,d=this._cmp,f=this._ascending,p=this._descending,b=this._min,v=this._max;if(F.length===0)return Kn(this);if(!F.every(function(B){return B[0]!==void 0&&B[1]!==void 0&&f(B[0],B[1])<=0}))return At(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",te.InvalidArgument);var S=!o||o.includeLowers!==!1,A=o&&o.includeUppers===!0,D,$=f;function j(B,M){return $(B[0],M[0])}try{(D=F.reduce(function(B,M){for(var U=0,W=B.length;U<W;++U){var Z=B[U];if(d(M[0],Z[1])<0&&0<d(M[1],Z[0])){Z[0]=b(Z[0],M[0]),Z[1]=v(Z[1],M[1]);break}}return U===W&&B.push(M),B},[])).sort(j)}catch{return At(this,ln)}var _=0,T=A?function(B){return 0<f(B,D[_][1])}:function(B){return 0<=f(B,D[_][1])},R=S?function(B){return 0<p(B,D[_][0])}:function(B){return 0<=p(B,D[_][0])},P=T,F=new this.Collection(this,function(){return wn(D[0][0],D[D.length-1][1],!S,!A)});return F._ondirectionchange=function(B){$=B==="next"?(P=T,f):(P=R,p),D.sort(j)},F._addAlgorithm(function(B,M,U){for(var W,Z=B.key;P(Z);)if(++_===D.length)return M(U),!1;return!T(W=Z)&&!R(W)||(c._cmp(Z,D[_][1])===0||c._cmp(Z,D[_][0])===0||M(function(){$===f?B.continue(D[_][0]):B.continue(D[_][1])}),!1)}),F},mt.prototype.startsWithAnyOf=function(){var s=Ke.apply(Y,arguments);return s.every(function(o){return typeof o=="string"})?s.length===0?Kn(this):this.inAnyRange(s.map(function(o){return[o,o+Sn]})):At(this,"startsWithAnyOf() only works with strings")},mt);function mt(){}function tn(s){return Be(function(o){return or(o),s(o.target.error),!1})}function or(s){s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault()}var ar="storagemutated",_i="x-storagemutated-1",vn=rr(null,ar),wl=(nn.prototype._lock=function(){return oe(!G.global),++this._reculock,this._reculock!==1||G.global||(G.lockOwnerFor=this),this},nn.prototype._unlock=function(){if(oe(!G.global),--this._reculock==0)for(G.global||(G.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var s=this._blockedFuncs.shift();try{En(s[1],s[0])}catch{}}return this},nn.prototype._locked=function(){return this._reculock&&G.lockOwnerFor!==this},nn.prototype.create=function(s){var o=this;if(!this.mode)return this;var c=this.db.idbdb,d=this.db._state.dbOpenError;if(oe(!this.idbtrans),!s&&!c)switch(d&&d.name){case"DatabaseClosedError":throw new te.DatabaseClosed(d);case"MissingAPIError":throw new te.MissingAPI(d.message,d);default:throw new te.OpenFailed(d)}if(!this.active)throw new te.TransactionInactive;return oe(this._completion._state===null),(s=this.idbtrans=s||(this.db.core||c).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Be(function(f){or(f),o._reject(s.error)}),s.onabort=Be(function(f){or(f),o.active&&o._reject(new te.Abort(s.error)),o.active=!1,o.on("abort").fire(f)}),s.oncomplete=Be(function(){o.active=!1,o._resolve(),"mutatedParts"in s&&vn.storagemutated.fire(s.mutatedParts)}),this},nn.prototype._promise=function(s,o,c){var d=this;if(s==="readwrite"&&this.mode!=="readwrite")return it(new te.ReadOnly("Transaction is readonly"));if(!this.active)return it(new te.TransactionInactive);if(this._locked())return new Q(function(p,b){d._blockedFuncs.push([function(){d._promise(s,o,c).then(p,b)},G])});if(c)return gn(function(){var p=new Q(function(b,v){d._lock();var S=o(b,v,d);S&&S.then&&S.then(b,v)});return p.finally(function(){return d._unlock()}),p._lib=!0,p});var f=new Q(function(p,b){var v=o(p,b,d);v&&v.then&&v.then(p,b)});return f._lib=!0,f},nn.prototype._root=function(){return this.parent?this.parent._root():this},nn.prototype.waitFor=function(s){var o,c=this._root(),d=Q.resolve(s);c._waitingFor?c._waitingFor=c._waitingFor.then(function(){return d}):(c._waitingFor=d,c._waitingQueue=[],o=c.idbtrans.objectStore(c.storeNames[0]),(function p(){for(++c._spinCount;c._waitingQueue.length;)c._waitingQueue.shift()();c._waitingFor&&(o.get(-1/0).onsuccess=p)})());var f=c._waitingFor;return new Q(function(p,b){d.then(function(v){return c._waitingQueue.push(Be(p.bind(null,v)))},function(v){return c._waitingQueue.push(Be(b.bind(null,v)))}).finally(function(){c._waitingFor===f&&(c._waitingFor=null)})})},nn.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new te.Abort))},nn.prototype.table=function(s){var o=this._memoizedTables||(this._memoizedTables={});if(x(o,s))return o[s];var c=this.schema[s];if(!c)throw new te.NotFound("Table "+s+" not part of transaction");return c=new this.db.Table(s,c,this),c.core=this.db.core.table(s),o[s]=c},nn);function nn(){}function Ai(s,o,c,d,f,p,b){return{name:s,keyPath:o,unique:c,multi:d,auto:f,compound:p,src:(c&&!b?"&":"")+(d?"*":"")+(f?"++":"")+qs(o)}}function qs(s){return typeof s=="string"?s:s?"["+[].join.call(s,"+")+"]":""}function Pi(s,o,c){return{name:s,primKey:o,indexes:c,mappedClass:null,idxByName:(d=function(f){return[f.name,f]},c.reduce(function(f,p,b){return b=d(p,b),b&&(f[b[0]]=b[1]),f},{}))};var d}var lr=function(s){try{return s.only([[]]),lr=function(){return[[]]},[[]]}catch{return lr=function(){return Sn},Sn}};function Ti(s){return s==null?function(){}:typeof s=="string"?(o=s).split(".").length===1?function(c){return c[o]}:function(c){return pe(c,o)}:function(c){return pe(c,s)};var o}function Hs(s){return[].slice.call(s)}var vl=0;function cr(s){return s==null?":id":typeof s=="string"?s:"[".concat(s.join("+"),"]")}function xl(s,o,S){function d(P){if(P.type===3)return null;if(P.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var _=P.lower,T=P.upper,R=P.lowerOpen,P=P.upperOpen;return _===void 0?T===void 0?null:o.upperBound(T,!!P):T===void 0?o.lowerBound(_,!!R):o.bound(_,T,!!R,!!P)}function f(j){var _,T=j.name;return{name:T,schema:j,mutate:function(R){var P=R.trans,F=R.type,B=R.keys,M=R.values,U=R.range;return new Promise(function(W,Z){W=Be(W);var K=P.objectStore(T),X=K.keyPath==null,ne=F==="put"||F==="add";if(!ne&&F!=="delete"&&F!=="deleteRange")throw new Error("Invalid operation type: "+F);var J,se=(B||M||{length:1}).length;if(B&&M&&B.length!==M.length)throw new Error("Given keys array must have same length as given values array.");if(se===0)return W({numFailures:0,failures:{},results:[],lastResult:void 0});function be($t){++Pt,or($t)}var ve=[],xe=[],Pt=0;if(F==="deleteRange"){if(U.type===4)return W({numFailures:Pt,failures:xe,results:[],lastResult:void 0});U.type===3?ve.push(J=K.clear()):ve.push(J=K.delete(d(U)))}else{var X=ne?X?[M,B]:[M,null]:[B,null],ge=X[0],wt=X[1];if(ne)for(var vt=0;vt<se;++vt)ve.push(J=wt&&wt[vt]!==void 0?K[F](ge[vt],wt[vt]):K[F](ge[vt])),J.onerror=be;else for(vt=0;vt<se;++vt)ve.push(J=K[F](ge[vt])),J.onerror=be}function Kr($t){$t=$t.target.result,ve.forEach(function(Tn,Yi){return Tn.error!=null&&(xe[Yi]=Tn.error)}),W({numFailures:Pt,failures:xe,results:F==="delete"?B:ve.map(function(Tn){return Tn.result}),lastResult:$t})}J.onerror=function($t){be($t),Kr($t)},J.onsuccess=Kr})},getMany:function(R){var P=R.trans,F=R.keys;return new Promise(function(B,M){B=Be(B);for(var U,W=P.objectStore(T),Z=F.length,K=new Array(Z),X=0,ne=0,J=function(ve){ve=ve.target,K[ve._pos]=ve.result,++ne===X&&B(K)},se=tn(M),be=0;be<Z;++be)F[be]!=null&&((U=W.get(F[be]))._pos=be,U.onsuccess=J,U.onerror=se,++X);X===0&&B(K)})},get:function(R){var P=R.trans,F=R.key;return new Promise(function(B,M){B=Be(B);var U=P.objectStore(T).get(F);U.onsuccess=function(W){return B(W.target.result)},U.onerror=tn(M)})},query:(_=A,function(R){return new Promise(function(P,F){P=Be(P);var B,M,U,X=R.trans,W=R.values,Z=R.limit,J=R.query,K=Z===1/0?void 0:Z,ne=J.index,J=J.range,X=X.objectStore(T),ne=ne.isPrimaryKey?X:X.index(ne.name),J=d(J);if(Z===0)return P({result:[]});_?((K=W?ne.getAll(J,K):ne.getAllKeys(J,K)).onsuccess=function(se){return P({result:se.target.result})},K.onerror=tn(F)):(B=0,M=!W&&"openKeyCursor"in ne?ne.openKeyCursor(J):ne.openCursor(J),U=[],M.onsuccess=function(se){var be=M.result;return be?(U.push(W?be.value:be.primaryKey),++B===Z?P({result:U}):void be.continue()):P({result:U})},M.onerror=tn(F))})}),openCursor:function(R){var P=R.trans,F=R.values,B=R.query,M=R.reverse,U=R.unique;return new Promise(function(W,Z){W=Be(W);var ne=B.index,K=B.range,X=P.objectStore(T),X=ne.isPrimaryKey?X:X.index(ne.name),ne=M?U?"prevunique":"prev":U?"nextunique":"next",J=!F&&"openKeyCursor"in X?X.openKeyCursor(d(K),ne):X.openCursor(d(K),ne);J.onerror=tn(Z),J.onsuccess=Be(function(se){var be,ve,xe,Pt,ge=J.result;ge?(ge.___id=++vl,ge.done=!1,be=ge.continue.bind(ge),ve=(ve=ge.continuePrimaryKey)&&ve.bind(ge),xe=ge.advance.bind(ge),Pt=function(){throw new Error("Cursor not stopped")},ge.trans=P,ge.stop=ge.continue=ge.continuePrimaryKey=ge.advance=function(){throw new Error("Cursor not started")},ge.fail=Be(Z),ge.next=function(){var wt=this,vt=1;return this.start(function(){return vt--?wt.continue():wt.stop()}).then(function(){return wt})},ge.start=function(wt){function vt(){if(J.result)try{wt()}catch($t){ge.fail($t)}else ge.done=!0,ge.start=function(){throw new Error("Cursor behind last entry")},ge.stop()}var Kr=new Promise(function($t,Tn){$t=Be($t),J.onerror=tn(Tn),ge.fail=Tn,ge.stop=function(Yi){ge.stop=ge.continue=ge.continuePrimaryKey=ge.advance=Pt,$t(Yi)}});return J.onsuccess=Be(function($t){J.onsuccess=vt,vt()}),ge.continue=be,ge.continuePrimaryKey=ve,ge.advance=xe,vt(),Kr},W(ge)):W(null)},Z)})},count:function(R){var P=R.query,F=R.trans,B=P.index,M=P.range;return new Promise(function(U,W){var Z=F.objectStore(T),K=B.isPrimaryKey?Z:Z.index(B.name),Z=d(M),K=Z?K.count(Z):K.count();K.onsuccess=Be(function(X){return U(X.target.result)}),K.onerror=tn(W)})}}}var p,b,v,D=(b=S,v=Hs((p=s).objectStoreNames),{schema:{name:p.name,tables:v.map(function(j){return b.objectStore(j)}).map(function(j){var _=j.keyPath,P=j.autoIncrement,T=u(_),R={},P={name:j.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:_==null,compound:T,keyPath:_,autoIncrement:P,unique:!0,extractKey:Ti(_)},indexes:Hs(j.indexNames).map(function(F){return j.index(F)}).map(function(U){var B=U.name,M=U.unique,W=U.multiEntry,U=U.keyPath,W={name:B,compound:u(U),keyPath:U,unique:M,multiEntry:W,extractKey:Ti(U)};return R[cr(U)]=W}),getIndexByKeyPath:function(F){return R[cr(F)]}};return R[":id"]=P.primaryKey,_!=null&&(R[cr(_)]=P.primaryKey),P})},hasGetAll:0<v.length&&"getAll"in b.objectStore(v[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),S=D.schema,A=D.hasGetAll,D=S.tables.map(f),$={};return D.forEach(function(j){return $[j.name]=j}),{stack:"dbcore",transaction:s.transaction.bind(s),table:function(j){if(!$[j])throw new Error("Table '".concat(j,"' not found"));return $[j]},MIN_KEY:-1/0,MAX_KEY:lr(o),schema:S}}function $l(s,o,c,d){var f=c.IDBKeyRange;return c.indexedDB,{dbcore:(d=xl(o,f,d),s.dbcore.reduce(function(p,b){return b=b.create,i(i({},p),b(p))},d))}}function jr(s,d){var c=d.db,d=$l(s._middlewares,c,s._deps,d);s.core=d.dbcore,s.tables.forEach(function(f){var p=f.name;s.core.schema.tables.some(function(b){return b.name===p})&&(f.core=s.core.table(p),s[p]instanceof s.Table&&(s[p].core=f.core))})}function Or(s,o,c,d){c.forEach(function(f){var p=d[f];o.forEach(function(b){var v=(function S(A,D){return ee(A,D)||(A=y(A))&&S(A,D)})(b,f);(!v||"value"in v&&v.value===void 0)&&(b===s.Transaction.prototype||b instanceof s.Transaction?L(b,f,{get:function(){return this.table(f)},set:function(S){V(this,f,{value:S,writable:!0,configurable:!0,enumerable:!0})}}):b[f]=new s.Table(f,p))})})}function Di(s,o){o.forEach(function(c){for(var d in c)c[d]instanceof s.Table&&delete c[d]})}function kl(s,o){return s._cfg.version-o._cfg.version}function Cl(s,o,c,d){var f=s._dbSchema;c.objectStoreNames.contains("$meta")&&!f.$meta&&(f.$meta=Pi("$meta",Ks("")[0],[]),s._storeNames.push("$meta"));var p=s._createTransaction("readwrite",s._storeNames,f);p.create(c),p._completion.catch(d);var b=p._reject.bind(p),v=G.transless||G;gn(function(){return G.trans=p,G.transless=v,o!==0?(jr(s,c),A=o,((S=p).storeNames.includes("$meta")?S.table("$meta").get("version").then(function(D){return D??A}):Q.resolve(A)).then(function(D){return j=D,_=p,T=c,R=[],D=($=s)._versions,P=$._dbSchema=zr(0,$.idbdb,T),(D=D.filter(function(F){return F._cfg.version>=j})).length!==0?(D.forEach(function(F){R.push(function(){var B=P,M=F._cfg.dbschema;Lr($,B,T),Lr($,M,T),P=$._dbSchema=M;var U=Ii(B,M);U.add.forEach(function(ne){Ri(T,ne[0],ne[1].primKey,ne[1].indexes)}),U.change.forEach(function(ne){if(ne.recreate)throw new te.Upgrade("Not yet support for changing primary key");var J=T.objectStore(ne.name);ne.add.forEach(function(se){return Fr(J,se)}),ne.change.forEach(function(se){J.deleteIndex(se.name),Fr(J,se)}),ne.del.forEach(function(se){return J.deleteIndex(se)})});var W=F._cfg.contentUpgrade;if(W&&F._cfg.version>j){jr($,T),_._memoizedTables={};var Z=ot(M);U.del.forEach(function(ne){Z[ne]=B[ne]}),Di($,[$.Transaction.prototype]),Or($,[$.Transaction.prototype],l(Z),Z),_.schema=Z;var K,X=at(W);return X&&qn(),U=Q.follow(function(){var ne;(K=W(_))&&X&&(ne=bn.bind(null,null),K.then(ne,ne))}),K&&typeof K.then=="function"?Q.resolve(K):U.then(function(){return K})}}),R.push(function(B){var M,U,W=F._cfg.dbschema;M=W,U=B,[].slice.call(U.db.objectStoreNames).forEach(function(Z){return M[Z]==null&&U.db.deleteObjectStore(Z)}),Di($,[$.Transaction.prototype]),Or($,[$.Transaction.prototype],$._storeNames,$._dbSchema),_.schema=$._dbSchema}),R.push(function(B){$.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil($.idbdb.version/10)===F._cfg.version?($.idbdb.deleteObjectStore("$meta"),delete $._dbSchema.$meta,$._storeNames=$._storeNames.filter(function(M){return M!=="$meta"})):B.objectStore("$meta").put(F._cfg.version,"version"))})}),(function F(){return R.length?Q.resolve(R.shift()(_.idbtrans)).then(F):Q.resolve()})().then(function(){Ws(P,T)})):Q.resolve();var $,j,_,T,R,P}).catch(b)):(l(f).forEach(function(D){Ri(c,D,f[D].primKey,f[D].indexes)}),jr(s,c),void Q.follow(function(){return s.on.populate.fire(p)}).catch(b));var S,A})}function El(s,o){Ws(s._dbSchema,o),o.db.version%10!=0||o.objectStoreNames.contains("$meta")||o.db.createObjectStore("$meta").add(Math.ceil(o.db.version/10-1),"version");var c=zr(0,s.idbdb,o);Lr(s,s._dbSchema,o);for(var d=0,f=Ii(c,s._dbSchema).change;d<f.length;d++){var p=(function(b){if(b.change.length||b.recreate)return console.warn("Unable to patch indexes of table ".concat(b.name," because it has changes on the type of index or primary key.")),{value:void 0};var v=o.objectStore(b.name);b.add.forEach(function(S){Ie&&console.debug("Dexie upgrade patch: Creating missing index ".concat(b.name,".").concat(S.src)),Fr(v,S)})})(f[d]);if(typeof p=="object")return p.value}}function Ii(s,o){var c,d={del:[],add:[],change:[]};for(c in s)o[c]||d.del.push(c);for(c in o){var f=s[c],p=o[c];if(f){var b={name:c,def:p,recreate:!1,del:[],add:[],change:[]};if(""+(f.primKey.keyPath||"")!=""+(p.primKey.keyPath||"")||f.primKey.auto!==p.primKey.auto)b.recreate=!0,d.change.push(b);else{var v=f.idxByName,S=p.idxByName,A=void 0;for(A in v)S[A]||b.del.push(A);for(A in S){var D=v[A],$=S[A];D?D.src!==$.src&&b.change.push($):b.add.push($)}(0<b.del.length||0<b.add.length||0<b.change.length)&&d.change.push(b)}}else d.add.push([c,p])}return d}function Ri(s,o,c,d){var f=s.db.createObjectStore(o,c.keyPath?{keyPath:c.keyPath,autoIncrement:c.auto}:{autoIncrement:c.auto});return d.forEach(function(p){return Fr(f,p)}),f}function Ws(s,o){l(s).forEach(function(c){o.db.objectStoreNames.contains(c)||(Ie&&console.debug("Dexie: Creating missing table",c),Ri(o,c,s[c].primKey,s[c].indexes))})}function Fr(s,o){s.createIndex(o.name,o.keyPath,{unique:o.unique,multiEntry:o.multi})}function zr(s,o,c){var d={};return je(o.objectStoreNames,0).forEach(function(f){for(var p=c.objectStore(f),b=Ai(qs(A=p.keyPath),A||"",!0,!1,!!p.autoIncrement,A&&typeof A!="string",!0),v=[],S=0;S<p.indexNames.length;++S){var D=p.index(p.indexNames[S]),A=D.keyPath,D=Ai(D.name,A,!!D.unique,!!D.multiEntry,!1,A&&typeof A!="string",!1);v.push(D)}d[f]=Pi(f,b,v)}),d}function Lr(s,o,c){for(var d=c.db.objectStoreNames,f=0;f<d.length;++f){var p=d[f],b=c.objectStore(p);s._hasGetAll="getAll"in b;for(var v=0;v<b.indexNames.length;++v){var S=b.indexNames[v],A=b.index(S).keyPath,D=typeof A=="string"?A:"["+je(A).join("+")+"]";!o[p]||(A=o[p].idxByName[D])&&(A.name=S,delete o[p].idxByName[D],o[p].idxByName[S]=A)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&a.WorkerGlobalScope&&a instanceof a.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(s._hasGetAll=!1)}function Ks(s){return s.split(",").map(function(o,c){var d=(o=o.trim()).replace(/([&*]|\+\+)/g,""),f=/^\[/.test(d)?d.match(/^\[(.*)\]$/)[1].split("+"):d;return Ai(d,f||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),u(f),c===0)})}var Sl=(Br.prototype._parseStoresSpec=function(s,o){l(s).forEach(function(c){if(s[c]!==null){var d=Ks(s[c]),f=d.shift();if(f.unique=!0,f.multi)throw new te.Schema("Primary key cannot be multi-valued");d.forEach(function(p){if(p.auto)throw new te.Schema("Only primary key can be marked as autoIncrement (++)");if(!p.keyPath)throw new te.Schema("Index must have a name and cannot be an empty string")}),o[c]=Pi(c,f,d)}})},Br.prototype.stores=function(c){var o=this.db;this._cfg.storesSource=this._cfg.storesSource?h(this._cfg.storesSource,c):c;var c=o._versions,d={},f={};return c.forEach(function(p){h(d,p._cfg.storesSource),f=p._cfg.dbschema={},p._parseStoresSpec(d,f)}),o._dbSchema=f,Di(o,[o._allTables,o,o.Transaction.prototype]),Or(o,[o._allTables,o,o.Transaction.prototype,this._cfg.tables],l(f),f),o._storeNames=l(f),this},Br.prototype.upgrade=function(s){return this._cfg.contentUpgrade=St(this._cfg.contentUpgrade||de,s),this},Br);function Br(){}function ji(s,o){var c=s._dbNamesDB;return c||(c=s._dbNamesDB=new un(Pr,{addons:[],indexedDB:s,IDBKeyRange:o})).version(1).stores({dbnames:"name"}),c.table("dbnames")}function Oi(s){return s&&typeof s.databases=="function"}function Fi(s){return gn(function(){return G.letThrough=!0,s()})}function zi(s){return!("from"in s)}var yt=function(s,o){if(!this){var c=new yt;return s&&"d"in s&&h(c,s),c}h(this,arguments.length?{d:1,from:s,to:1<arguments.length?o:s}:{d:0})};function ur(s,o,c){var d=Ee(o,c);if(!isNaN(d)){if(0<d)throw RangeError();if(zi(s))return h(s,{from:o,to:c,d:1});var f=s.l,d=s.r;if(Ee(c,s.from)<0)return f?ur(f,o,c):s.l={from:o,to:c,d:1,l:null,r:null},Ys(s);if(0<Ee(o,s.to))return d?ur(d,o,c):s.r={from:o,to:c,d:1,l:null,r:null},Ys(s);Ee(o,s.from)<0&&(s.from=o,s.l=null,s.d=d?d.d+1:1),0<Ee(c,s.to)&&(s.to=c,s.r=null,s.d=s.l?s.l.d+1:1),c=!s.r,f&&!s.l&&dr(s,f),d&&c&&dr(s,d)}}function dr(s,o){zi(o)||(function c(d,S){var p=S.from,b=S.to,v=S.l,S=S.r;ur(d,p,b),v&&c(d,v),S&&c(d,S)})(s,o)}function Vs(s,o){var c=Mr(o),d=c.next();if(d.done)return!1;for(var f=d.value,p=Mr(s),b=p.next(f.from),v=b.value;!d.done&&!b.done;){if(Ee(v.from,f.to)<=0&&0<=Ee(v.to,f.from))return!0;Ee(f.from,v.from)<0?f=(d=c.next(v.from)).value:v=(b=p.next(f.from)).value}return!1}function Mr(s){var o=zi(s)?null:{s:0,n:s};return{next:function(c){for(var d=0<arguments.length;o;)switch(o.s){case 0:if(o.s=1,d)for(;o.n.l&&Ee(c,o.n.from)<0;)o={up:o,n:o.n.l,s:1};else for(;o.n.l;)o={up:o,n:o.n.l,s:1};case 1:if(o.s=2,!d||Ee(c,o.n.to)<=0)return{value:o.n,done:!1};case 2:if(o.n.r){o.s=3,o={up:o,n:o.n.r,s:0};continue}case 3:o=o.up}return{done:!0}}}}function Ys(s){var o,c,d=(((o=s.r)===null||o===void 0?void 0:o.d)||0)-(((c=s.l)===null||c===void 0?void 0:c.d)||0),f=1<d?"r":d<-1?"l":"";f&&(o=f=="r"?"l":"r",c=i({},s),d=s[f],s.from=d.from,s.to=d.to,s[f]=d[f],c[f]=d[o],(s[o]=c).d=Xs(c)),s.d=Xs(s)}function Xs(c){var o=c.r,c=c.l;return(o?c?Math.max(o.d,c.d):o.d:c?c.d:0)+1}function Nr(s,o){return l(o).forEach(function(c){s[c]?dr(s[c],o[c]):s[c]=(function d(f){var p,b,v={};for(p in f)x(f,p)&&(b=f[p],v[p]=!b||typeof b!="object"||m.has(b.constructor)?b:d(b));return v})(o[c])}),s}function Li(s,o){return s.all||o.all||Object.keys(s).some(function(c){return o[c]&&Vs(o[c],s[c])})}I(yt.prototype,((Ft={add:function(s){return dr(this,s),this},addKey:function(s){return ur(this,s,s),this},addKeys:function(s){var o=this;return s.forEach(function(c){return ur(o,c,c)}),this},hasKey:function(s){var o=Mr(this).next(s).value;return o&&Ee(o.from,s)<=0&&0<=Ee(o.to,s)}})[ae]=function(){return Mr(this)},Ft));var An={},Bi={},Mi=!1;function Ur(s){Nr(Bi,s),Mi||(Mi=!0,setTimeout(function(){Mi=!1,Ni(Bi,!(Bi={}))},0))}function Ni(s,o){o===void 0&&(o=!1);var c=new Set;if(s.all)for(var d=0,f=Object.values(An);d<f.length;d++)Gs(b=f[d],s,c,o);else for(var p in s){var b,v=/^idb\:\/\/(.*)\/(.*)\//.exec(p);v&&(p=v[1],v=v[2],(b=An["idb://".concat(p,"/").concat(v)])&&Gs(b,s,c,o))}c.forEach(function(S){return S()})}function Gs(s,o,c,d){for(var f=[],p=0,b=Object.entries(s.queries.query);p<b.length;p++){for(var v=b[p],S=v[0],A=[],D=0,$=v[1];D<$.length;D++){var j=$[D];Li(o,j.obsSet)?j.subscribers.forEach(function(P){return c.add(P)}):d&&A.push(j)}d&&f.push([S,A])}if(d)for(var _=0,T=f;_<T.length;_++){var R=T[_],S=R[0],A=R[1];s.queries.query[S]=A}}function _l(s){var o=s._state,c=s._deps.indexedDB;if(o.isBeingOpened||s.idbdb)return o.dbReadyPromise.then(function(){return o.dbOpenError?it(o.dbOpenError):s});o.isBeingOpened=!0,o.dbOpenError=null,o.openComplete=!1;var d=o.openCanceller,f=Math.round(10*s.verno),p=!1;function b(){if(o.openCanceller!==d)throw new te.DatabaseClosed("db.open() was cancelled")}function v(){return new Q(function(j,_){if(b(),!c)throw new te.MissingAPI;var T=s.name,R=o.autoSchema||!f?c.open(T):c.open(T,f);if(!R)throw new te.MissingAPI;R.onerror=tn(_),R.onblocked=Be(s._fireOnBlocked),R.onupgradeneeded=Be(function(P){var F;D=R.transaction,o.autoSchema&&!s._options.allowEmptyDB?(R.onerror=or,D.abort(),R.result.close(),(F=c.deleteDatabase(T)).onsuccess=F.onerror=Be(function(){_(new te.NoSuchDatabase("Database ".concat(T," doesnt exist")))})):(D.onerror=tn(_),P=P.oldVersion>Math.pow(2,62)?0:P.oldVersion,$=P<1,s.idbdb=R.result,p&&El(s,D),Cl(s,P/10,D,_))},_),R.onsuccess=Be(function(){D=null;var P,F,B,M,U,W=s.idbdb=R.result,Z=je(W.objectStoreNames);if(0<Z.length)try{var K=W.transaction((M=Z).length===1?M[0]:M,"readonly");if(o.autoSchema)F=W,B=K,(P=s).verno=F.version/10,B=P._dbSchema=zr(0,F,B),P._storeNames=je(F.objectStoreNames,0),Or(P,[P._allTables],l(B),B);else if(Lr(s,s._dbSchema,K),((U=Ii(zr(0,(U=s).idbdb,K),U._dbSchema)).add.length||U.change.some(function(X){return X.add.length||X.change.length}))&&!p)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),W.close(),f=W.version+1,p=!0,j(v());jr(s,K)}catch{}Hn.push(s),W.onversionchange=Be(function(X){o.vcFired=!0,s.on("versionchange").fire(X)}),W.onclose=Be(function(X){s.on("close").fire(X)}),$&&(U=s._deps,K=T,W=U.indexedDB,U=U.IDBKeyRange,Oi(W)||K===Pr||ji(W,U).put({name:K}).catch(de)),j()},_)}).catch(function(j){switch(j?.name){case"UnknownError":if(0<o.PR1398_maxLoop)return o.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),v();break;case"VersionError":if(0<f)return f=0,v()}return Q.reject(j)})}var S,A=o.dbReadyResolve,D=null,$=!1;return Q.race([d,(typeof navigator>"u"?Q.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(j){function _(){return indexedDB.databases().finally(j)}S=setInterval(_,100),_()}).finally(function(){return clearInterval(S)}):Promise.resolve()).then(v)]).then(function(){return b(),o.onReadyBeingFired=[],Q.resolve(Fi(function(){return s.on.ready.fire(s.vip)})).then(function j(){if(0<o.onReadyBeingFired.length){var _=o.onReadyBeingFired.reduce(St,de);return o.onReadyBeingFired=[],Q.resolve(Fi(function(){return _(s.vip)})).then(j)}})}).finally(function(){o.openCanceller===d&&(o.onReadyBeingFired=null,o.isBeingOpened=!1)}).catch(function(j){o.dbOpenError=j;try{D&&D.abort()}catch{}return d===o.openCanceller&&s._close(),it(j)}).finally(function(){o.openComplete=!0,A()}).then(function(){var j;return $&&(j={},s.tables.forEach(function(_){_.schema.indexes.forEach(function(T){T.name&&(j["idb://".concat(s.name,"/").concat(_.name,"/").concat(T.name)]=new yt(-1/0,[[[]]]))}),j["idb://".concat(s.name,"/").concat(_.name,"/")]=j["idb://".concat(s.name,"/").concat(_.name,"/:dels")]=new yt(-1/0,[[[]]])}),vn(ar).fire(j),Ni(j,!0)),s})}function Ui(s){function o(p){return s.next(p)}var c=f(o),d=f(function(p){return s.throw(p)});function f(p){return function(S){var v=p(S),S=v.value;return v.done?S:S&&typeof S.then=="function"?S.then(c,d):u(S)?Promise.all(S).then(c,d):c(S)}}return f(o)()}function qr(s,o,c){for(var d=u(s)?s.slice():[s],f=0;f<c;++f)d.push(o);return d}var Al={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(s){return i(i({},s),{table:function(o){var c=s.table(o),d=c.schema,f={},p=[];function b($,j,_){var T=cr($),R=f[T]=f[T]||[],P=$==null?0:typeof $=="string"?1:$.length,F=0<j,F=i(i({},_),{name:F?"".concat(T,"(virtual-from:").concat(_.name,")"):_.name,lowLevelIndex:_,isVirtual:F,keyTail:j,keyLength:P,extractKey:Ti($),unique:!F&&_.unique});return R.push(F),F.isPrimaryKey||p.push(F),1<P&&b(P===2?$[0]:$.slice(0,P-1),j+1,_),R.sort(function(B,M){return B.keyTail-M.keyTail}),F}o=b(d.primaryKey.keyPath,0,d.primaryKey),f[":id"]=[o];for(var v=0,S=d.indexes;v<S.length;v++){var A=S[v];b(A.keyPath,0,A)}function D($){var j,_=$.query.index;return _.isVirtual?i(i({},$),{query:{index:_.lowLevelIndex,range:(j=$.query.range,_=_.keyTail,{type:j.type===1?2:j.type,lower:qr(j.lower,j.lowerOpen?s.MAX_KEY:s.MIN_KEY,_),lowerOpen:!0,upper:qr(j.upper,j.upperOpen?s.MIN_KEY:s.MAX_KEY,_),upperOpen:!0})}}):$}return i(i({},c),{schema:i(i({},d),{primaryKey:o,indexes:p,getIndexByKeyPath:function($){return($=f[cr($)])&&$[0]}}),count:function($){return c.count(D($))},query:function($){return c.query(D($))},openCursor:function($){var j=$.query.index,_=j.keyTail,T=j.isVirtual,R=j.keyLength;return T?c.openCursor(D($)).then(function(F){return F&&P(F)}):c.openCursor($);function P(F){return Object.create(F,{continue:{value:function(B){B!=null?F.continue(qr(B,$.reverse?s.MAX_KEY:s.MIN_KEY,_)):$.unique?F.continue(F.key.slice(0,R).concat($.reverse?s.MIN_KEY:s.MAX_KEY,_)):F.continue()}},continuePrimaryKey:{value:function(B,M){F.continuePrimaryKey(qr(B,s.MAX_KEY,_),M)}},primaryKey:{get:function(){return F.primaryKey}},key:{get:function(){var B=F.key;return R===1?B[0]:B.slice(0,R)}},value:{get:function(){return F.value}}})}}})}})}};function qi(s,o,c,d){return c=c||{},d=d||"",l(s).forEach(function(f){var p,b,v;x(o,f)?(p=s[f],b=o[f],typeof p=="object"&&typeof b=="object"&&p&&b?(v=C(p))!==C(b)?c[d+f]=o[f]:v==="Object"?qi(p,b,c,d+f+"."):p!==b&&(c[d+f]=o[f]):p!==b&&(c[d+f]=o[f])):c[d+f]=void 0}),l(o).forEach(function(f){x(s,f)||(c[d+f]=o[f])}),c}function Hi(s,o){return o.type==="delete"?o.keys:o.keys||o.values.map(s.extractKey)}var Pl={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(s){return i(i({},s),{table:function(o){var c=s.table(o),d=c.schema.primaryKey;return i(i({},c),{mutate:function(f){var p=G.trans,b=p.table(o).hook,v=b.deleting,S=b.creating,A=b.updating;switch(f.type){case"add":if(S.fire===de)break;return p._promise("readwrite",function(){return D(f)},!0);case"put":if(S.fire===de&&A.fire===de)break;return p._promise("readwrite",function(){return D(f)},!0);case"delete":if(v.fire===de)break;return p._promise("readwrite",function(){return D(f)},!0);case"deleteRange":if(v.fire===de)break;return p._promise("readwrite",function(){return(function $(j,_,T){return c.query({trans:j,values:!1,query:{index:d,range:_},limit:T}).then(function(R){var P=R.result;return D({type:"delete",keys:P,trans:j}).then(function(F){return 0<F.numFailures?Promise.reject(F.failures[0]):P.length<T?{failures:[],numFailures:0,lastResult:void 0}:$(j,i(i({},_),{lower:P[P.length-1],lowerOpen:!0}),T)})})})(f.trans,f.range,1e4)},!0)}return c.mutate(f);function D($){var j,_,T,R=G.trans,P=$.keys||Hi(d,$);if(!P)throw new Error("Keys missing");return($=$.type==="add"||$.type==="put"?i(i({},$),{keys:P}):i({},$)).type!=="delete"&&($.values=n([],$.values)),$.keys&&($.keys=n([],$.keys)),j=c,T=P,((_=$).type==="add"?Promise.resolve([]):j.getMany({trans:_.trans,keys:T,cache:"immutable"})).then(function(F){var B=P.map(function(M,U){var W,Z,K,X=F[U],ne={onerror:null,onsuccess:null};return $.type==="delete"?v.fire.call(ne,M,X,R):$.type==="add"||X===void 0?(W=S.fire.call(ne,M,$.values[U],R),M==null&&W!=null&&($.keys[U]=M=W,d.outbound||Se($.values[U],d.keyPath,M))):(W=qi(X,$.values[U]),(Z=A.fire.call(ne,W,M,X,R))&&(K=$.values[U],Object.keys(Z).forEach(function(J){x(K,J)?K[J]=Z[J]:Se(K,J,Z[J])}))),ne});return c.mutate($).then(function(M){for(var U=M.failures,W=M.results,Z=M.numFailures,M=M.lastResult,K=0;K<P.length;++K){var X=(W||P)[K],ne=B[K];X==null?ne.onerror&&ne.onerror(U[K]):ne.onsuccess&&ne.onsuccess($.type==="put"&&F[K]?$.values[K]:X)}return{failures:U,results:W,numFailures:Z,lastResult:M}}).catch(function(M){return B.forEach(function(U){return U.onerror&&U.onerror(M)}),Promise.reject(M)})})}}})}})}};function Qs(s,o,c){try{if(!o||o.keys.length<s.length)return null;for(var d=[],f=0,p=0;f<o.keys.length&&p<s.length;++f)Ee(o.keys[f],s[p])===0&&(d.push(c?E(o.values[f]):o.values[f]),++p);return d.length===s.length?d:null}catch{return null}}var Tl={stack:"dbcore",level:-1,create:function(s){return{table:function(o){var c=s.table(o);return i(i({},c),{getMany:function(d){if(!d.cache)return c.getMany(d);var f=Qs(d.keys,d.trans._cache,d.cache==="clone");return f?Q.resolve(f):c.getMany(d).then(function(p){return d.trans._cache={keys:d.keys,values:d.cache==="clone"?E(p):p},p})},mutate:function(d){return d.type!=="add"&&(d.trans._cache=null),c.mutate(d)}})}}}};function Js(s,o){return s.trans.mode==="readonly"&&!!s.subscr&&!s.trans.explicit&&s.trans.db._options.cache!=="disabled"&&!o.schema.primaryKey.outbound}function Zs(s,o){switch(s){case"query":return o.values&&!o.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Dl={stack:"dbcore",level:0,name:"Observability",create:function(s){var o=s.schema.name,c=new yt(s.MIN_KEY,s.MAX_KEY);return i(i({},s),{transaction:function(d,f,p){if(G.subscr&&f!=="readonly")throw new te.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(G.querier));return s.transaction(d,f,p)},table:function(d){var f=s.table(d),p=f.schema,b=p.primaryKey,$=p.indexes,v=b.extractKey,S=b.outbound,A=b.autoIncrement&&$.filter(function(_){return _.compound&&_.keyPath.includes(b.keyPath)}),D=i(i({},f),{mutate:function(_){function T(J){return J="idb://".concat(o,"/").concat(d,"/").concat(J),M[J]||(M[J]=new yt)}var R,P,F,B=_.trans,M=_.mutatedParts||(_.mutatedParts={}),U=T(""),W=T(":dels"),Z=_.type,ne=_.type==="deleteRange"?[_.range]:_.type==="delete"?[_.keys]:_.values.length<50?[Hi(b,_).filter(function(J){return J}),_.values]:[],K=ne[0],X=ne[1],ne=_.trans._cache;return u(K)?(U.addKeys(K),(ne=Z==="delete"||K.length===X.length?Qs(K,ne):null)||W.addKeys(K),(ne||X)&&(R=T,P=ne,F=X,p.indexes.forEach(function(J){var se=R(J.name||"");function be(xe){return xe!=null?J.extractKey(xe):null}function ve(xe){return J.multiEntry&&u(xe)?xe.forEach(function(Pt){return se.addKey(Pt)}):se.addKey(xe)}(P||F).forEach(function(xe,wt){var ge=P&&be(P[wt]),wt=F&&be(F[wt]);Ee(ge,wt)!==0&&(ge!=null&&ve(ge),wt!=null&&ve(wt))})}))):K?(X={from:(X=K.lower)!==null&&X!==void 0?X:s.MIN_KEY,to:(X=K.upper)!==null&&X!==void 0?X:s.MAX_KEY},W.add(X),U.add(X)):(U.add(c),W.add(c),p.indexes.forEach(function(J){return T(J.name).add(c)})),f.mutate(_).then(function(J){return!K||_.type!=="add"&&_.type!=="put"||(U.addKeys(J.results),A&&A.forEach(function(se){for(var be=_.values.map(function(ge){return se.extractKey(ge)}),ve=se.keyPath.findIndex(function(ge){return ge===b.keyPath}),xe=0,Pt=J.results.length;xe<Pt;++xe)be[xe][ve]=J.results[xe];T(se.name).addKeys(be)})),B.mutatedParts=Nr(B.mutatedParts||{},M),J})}}),$=function(T){var R=T.query,T=R.index,R=R.range;return[T,new yt((T=R.lower)!==null&&T!==void 0?T:s.MIN_KEY,(R=R.upper)!==null&&R!==void 0?R:s.MAX_KEY)]},j={get:function(_){return[b,new yt(_.key)]},getMany:function(_){return[b,new yt().addKeys(_.keys)]},count:$,query:$,openCursor:$};return l(j).forEach(function(_){D[_]=function(T){var R=G.subscr,P=!!R,F=Js(G,f)&&Zs(_,T)?T.obsSet={}:R;if(P){var B=function(X){return X="idb://".concat(o,"/").concat(d,"/").concat(X),F[X]||(F[X]=new yt)},M=B(""),U=B(":dels"),R=j[_](T),P=R[0],R=R[1];if((_==="query"&&P.isPrimaryKey&&!T.values?U:B(P.name||"")).add(R),!P.isPrimaryKey){if(_!=="count"){var W=_==="query"&&S&&T.values&&f.query(i(i({},T),{values:!1}));return f[_].apply(this,arguments).then(function(X){if(_==="query"){if(S&&T.values)return W.then(function(be){return be=be.result,M.addKeys(be),X});var ne=T.values?X.result.map(v):X.result;(T.values?M:U).addKeys(ne)}else if(_==="openCursor"){var J=X,se=T.values;return J&&Object.create(J,{key:{get:function(){return U.addKey(J.primaryKey),J.key}},primaryKey:{get:function(){var be=J.primaryKey;return U.addKey(be),be}},value:{get:function(){return se&&M.addKey(J.primaryKey),J.value}}})}return X})}U.add(c)}}return f[_].apply(this,arguments)}}),D}})}};function eo(s,o,c){if(c.numFailures===0)return o;if(o.type==="deleteRange")return null;var d=o.keys?o.keys.length:"values"in o&&o.values?o.values.length:1;return c.numFailures===d?null:(o=i({},o),u(o.keys)&&(o.keys=o.keys.filter(function(f,p){return!(p in c.failures)})),"values"in o&&u(o.values)&&(o.values=o.values.filter(function(f,p){return!(p in c.failures)})),o)}function Wi(s,o){return c=s,((d=o).lower===void 0||(d.lowerOpen?0<Ee(c,d.lower):0<=Ee(c,d.lower)))&&(s=s,(o=o).upper===void 0||(o.upperOpen?Ee(s,o.upper)<0:Ee(s,o.upper)<=0));var c,d}function to(s,o,j,d,f,p){if(!j||j.length===0)return s;var b=o.query.index,v=b.multiEntry,S=o.query.range,A=d.schema.primaryKey.extractKey,D=b.extractKey,$=(b.lowLevelIndex||b).extractKey,j=j.reduce(function(_,T){var R=_,P=[];if(T.type==="add"||T.type==="put")for(var F=new yt,B=T.values.length-1;0<=B;--B){var M,U=T.values[B],W=A(U);F.hasKey(W)||(M=D(U),(v&&u(M)?M.some(function(J){return Wi(J,S)}):Wi(M,S))&&(F.addKey(W),P.push(U)))}switch(T.type){case"add":var Z=new yt().addKeys(o.values?_.map(function(se){return A(se)}):_),R=_.concat(o.values?P.filter(function(se){return se=A(se),!Z.hasKey(se)&&(Z.addKey(se),!0)}):P.map(function(se){return A(se)}).filter(function(se){return!Z.hasKey(se)&&(Z.addKey(se),!0)}));break;case"put":var K=new yt().addKeys(T.values.map(function(se){return A(se)}));R=_.filter(function(se){return!K.hasKey(o.values?A(se):se)}).concat(o.values?P:P.map(function(se){return A(se)}));break;case"delete":var X=new yt().addKeys(T.keys);R=_.filter(function(se){return!X.hasKey(o.values?A(se):se)});break;case"deleteRange":var ne=T.range;R=_.filter(function(se){return!Wi(A(se),ne)})}return R},s);return j===s?s:(j.sort(function(_,T){return Ee($(_),$(T))||Ee(A(_),A(T))}),o.limit&&o.limit<1/0&&(j.length>o.limit?j.length=o.limit:s.length===o.limit&&j.length<o.limit&&(f.dirty=!0)),p?Object.freeze(j):j)}function no(s,o){return Ee(s.lower,o.lower)===0&&Ee(s.upper,o.upper)===0&&!!s.lowerOpen==!!o.lowerOpen&&!!s.upperOpen==!!o.upperOpen}function Il(s,o){return(function(c,d,f,p){if(c===void 0)return d!==void 0?-1:0;if(d===void 0)return 1;if((d=Ee(c,d))===0){if(f&&p)return 0;if(f)return 1;if(p)return-1}return d})(s.lower,o.lower,s.lowerOpen,o.lowerOpen)<=0&&0<=(function(c,d,f,p){if(c===void 0)return d!==void 0?1:0;if(d===void 0)return-1;if((d=Ee(c,d))===0){if(f&&p)return 0;if(f)return-1;if(p)return 1}return d})(s.upper,o.upper,s.upperOpen,o.upperOpen)}function Rl(s,o,c,d){s.subscribers.add(c),d.addEventListener("abort",function(){var f,p;s.subscribers.delete(c),s.subscribers.size===0&&(f=s,p=o,setTimeout(function(){f.subscribers.size===0&&q(p,f)},3e3))})}var jl={stack:"dbcore",level:0,name:"Cache",create:function(s){var o=s.schema.name;return i(i({},s),{transaction:function(c,d,f){var p,b,v=s.transaction(c,d,f);return d==="readwrite"&&(b=(p=new AbortController).signal,f=function(S){return function(){if(p.abort(),d==="readwrite"){for(var A=new Set,D=0,$=c;D<$.length;D++){var j=$[D],_=An["idb://".concat(o,"/").concat(j)];if(_){var T=s.table(j),R=_.optimisticOps.filter(function(se){return se.trans===v});if(v._explicit&&S&&v.mutatedParts)for(var P=0,F=Object.values(_.queries.query);P<F.length;P++)for(var B=0,M=(Z=F[P]).slice();B<M.length;B++)Li((K=M[B]).obsSet,v.mutatedParts)&&(q(Z,K),K.subscribers.forEach(function(se){return A.add(se)}));else if(0<R.length){_.optimisticOps=_.optimisticOps.filter(function(se){return se.trans!==v});for(var U=0,W=Object.values(_.queries.query);U<W.length;U++)for(var Z,K,X,ne=0,J=(Z=W[U]).slice();ne<J.length;ne++)(K=J[ne]).res!=null&&v.mutatedParts&&(S&&!K.dirty?(X=Object.isFrozen(K.res),X=to(K.res,K.req,R,T,K,X),K.dirty?(q(Z,K),K.subscribers.forEach(function(se){return A.add(se)})):X!==K.res&&(K.res=X,K.promise=Q.resolve({result:X}))):(K.dirty&&q(Z,K),K.subscribers.forEach(function(se){return A.add(se)})))}}}A.forEach(function(se){return se()})}}},v.addEventListener("abort",f(!1),{signal:b}),v.addEventListener("error",f(!1),{signal:b}),v.addEventListener("complete",f(!0),{signal:b})),v},table:function(c){var d=s.table(c),f=d.schema.primaryKey;return i(i({},d),{mutate:function(p){var b=G.trans;if(f.outbound||b.db._options.cache==="disabled"||b.explicit||b.idbtrans.mode!=="readwrite")return d.mutate(p);var v=An["idb://".concat(o,"/").concat(c)];return v?(b=d.mutate(p),p.type!=="add"&&p.type!=="put"||!(50<=p.values.length||Hi(f,p).some(function(S){return S==null}))?(v.optimisticOps.push(p),p.mutatedParts&&Ur(p.mutatedParts),b.then(function(S){0<S.numFailures&&(q(v.optimisticOps,p),(S=eo(0,p,S))&&v.optimisticOps.push(S),p.mutatedParts&&Ur(p.mutatedParts))}),b.catch(function(){q(v.optimisticOps,p),p.mutatedParts&&Ur(p.mutatedParts)})):b.then(function(S){var A=eo(0,i(i({},p),{values:p.values.map(function(D,$){var j;return S.failures[$]?D:(D=(j=f.keyPath)!==null&&j!==void 0&&j.includes(".")?E(D):i({},D),Se(D,f.keyPath,S.results[$]),D)})}),S);v.optimisticOps.push(A),queueMicrotask(function(){return p.mutatedParts&&Ur(p.mutatedParts)})}),b):d.mutate(p)},query:function(p){if(!Js(G,d)||!Zs("query",p))return d.query(p);var b=((A=G.trans)===null||A===void 0?void 0:A.db._options.cache)==="immutable",$=G,v=$.requery,S=$.signal,A=(function(T,R,P,F){var B=An["idb://".concat(T,"/").concat(R)];if(!B)return[];if(!(R=B.queries[P]))return[null,!1,B,null];var M=R[(F.query?F.query.index.name:null)||""];if(!M)return[null,!1,B,null];switch(P){case"query":var U=M.find(function(W){return W.req.limit===F.limit&&W.req.values===F.values&&no(W.req.query.range,F.query.range)});return U?[U,!0,B,M]:[M.find(function(W){return("limit"in W.req?W.req.limit:1/0)>=F.limit&&(!F.values||W.req.values)&&Il(W.req.query.range,F.query.range)}),!1,B,M];case"count":return U=M.find(function(W){return no(W.req.query.range,F.query.range)}),[U,!!U,B,M]}})(o,c,"query",p),D=A[0],$=A[1],j=A[2],_=A[3];return D&&$?D.obsSet=p.obsSet:($=d.query(p).then(function(T){var R=T.result;if(D&&(D.res=R),b){for(var P=0,F=R.length;P<F;++P)Object.freeze(R[P]);Object.freeze(R)}else T.result=E(R);return T}).catch(function(T){return _&&D&&q(_,D),Promise.reject(T)}),D={obsSet:p.obsSet,promise:$,subscribers:new Set,type:"query",req:p,dirty:!1},_?_.push(D):(_=[D],(j=j||(An["idb://".concat(o,"/").concat(c)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[p.query.index.name||""]=_)),Rl(D,_,v,S),D.promise.then(function(T){return{result:to(T.result,p,j?.optimisticOps,d,D,b)}})}})}})}};function Hr(s,o){return new Proxy(s,{get:function(c,d,f){return d==="db"?o:Reflect.get(c,d,f)}})}var un=(st.prototype.version=function(s){if(isNaN(s)||s<.1)throw new te.Type("Given version is not a positive number");if(s=Math.round(10*s)/10,this.idbdb||this._state.isBeingOpened)throw new te.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,s);var o=this._versions,c=o.filter(function(d){return d._cfg.version===s})[0];return c||(c=new this.Version(s),o.push(c),o.sort(kl),c.stores({}),this._state.autoSchema=!1,c)},st.prototype._whenReady=function(s){var o=this;return this.idbdb&&(this._state.openComplete||G.letThrough||this._vip)?s():new Q(function(c,d){if(o._state.openComplete)return d(new te.DatabaseClosed(o._state.dbOpenError));if(!o._state.isBeingOpened){if(!o._state.autoOpen)return void d(new te.DatabaseClosed);o.open().catch(de)}o._state.dbReadyPromise.then(c,d)}).then(s)},st.prototype.use=function(s){var o=s.stack,c=s.create,d=s.level,f=s.name;return f&&this.unuse({stack:o,name:f}),s=this._middlewares[o]||(this._middlewares[o]=[]),s.push({stack:o,create:c,level:d??10,name:f}),s.sort(function(p,b){return p.level-b.level}),this},st.prototype.unuse=function(s){var o=s.stack,c=s.name,d=s.create;return o&&this._middlewares[o]&&(this._middlewares[o]=this._middlewares[o].filter(function(f){return d?f.create!==d:!!c&&f.name!==c})),this},st.prototype.open=function(){var s=this;return En(Ge,function(){return _l(s)})},st.prototype._close=function(){var s=this._state,o=Hn.indexOf(this);if(0<=o&&Hn.splice(o,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}s.isBeingOpened||(s.dbReadyPromise=new Q(function(c){s.dbReadyResolve=c}),s.openCanceller=new Q(function(c,d){s.cancelOpen=d}))},st.prototype.close=function(c){var o=(c===void 0?{disableAutoOpen:!0}:c).disableAutoOpen,c=this._state;o?(c.isBeingOpened&&c.cancelOpen(new te.DatabaseClosed),this._close(),c.autoOpen=!1,c.dbOpenError=new te.DatabaseClosed):(this._close(),c.autoOpen=this._options.autoOpen||c.isBeingOpened,c.openComplete=!1,c.dbOpenError=null)},st.prototype.delete=function(s){var o=this;s===void 0&&(s={disableAutoOpen:!0});var c=0<arguments.length&&typeof arguments[0]!="object",d=this._state;return new Q(function(f,p){function b(){o.close(s);var v=o._deps.indexedDB.deleteDatabase(o.name);v.onsuccess=Be(function(){var S,A,D;S=o._deps,A=o.name,D=S.indexedDB,S=S.IDBKeyRange,Oi(D)||A===Pr||ji(D,S).delete(A).catch(de),f()}),v.onerror=tn(p),v.onblocked=o._fireOnBlocked}if(c)throw new te.InvalidArgument("Invalid closeOptions argument to db.delete()");d.isBeingOpened?d.dbReadyPromise.then(b):b()})},st.prototype.backendDB=function(){return this.idbdb},st.prototype.isOpen=function(){return this.idbdb!==null},st.prototype.hasBeenClosed=function(){var s=this._state.dbOpenError;return s&&s.name==="DatabaseClosed"},st.prototype.hasFailed=function(){return this._state.dbOpenError!==null},st.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(st.prototype,"tables",{get:function(){var s=this;return l(this._allTables).map(function(o){return s._allTables[o]})},enumerable:!1,configurable:!0}),st.prototype.transaction=function(){var s=function(o,c,d){var f=arguments.length;if(f<2)throw new te.InvalidArgument("Too few arguments");for(var p=new Array(f-1);--f;)p[f-1]=arguments[f];return d=p.pop(),[o,ct(p),d]}.apply(this,arguments);return this._transaction.apply(this,s)},st.prototype._transaction=function(s,o,c){var d=this,f=G.trans;f&&f.db===this&&s.indexOf("!")===-1||(f=null);var p,b,v=s.indexOf("?")!==-1;s=s.replace("!","").replace("?","");try{if(b=o.map(function(A){if(A=A instanceof d.Table?A.name:A,typeof A!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return A}),s=="r"||s===$i)p=$i;else{if(s!="rw"&&s!=ki)throw new te.InvalidArgument("Invalid transaction mode: "+s);p=ki}if(f){if(f.mode===$i&&p===ki){if(!v)throw new te.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");f=null}f&&b.forEach(function(A){if(f&&f.storeNames.indexOf(A)===-1){if(!v)throw new te.SubTransaction("Table "+A+" not included in parent transaction.");f=null}}),v&&f&&!f.active&&(f=null)}}catch(A){return f?f._promise(null,function(D,$){$(A)}):it(A)}var S=function A(D,$,j,_,T){return Q.resolve().then(function(){var R=G.transless||G,P=D._createTransaction($,j,D._dbSchema,_);if(P.explicit=!0,R={trans:P,transless:R},_)P.idbtrans=_.idbtrans;else try{P.create(),P.idbtrans._explicit=!0,D._state.PR1398_maxLoop=3}catch(M){return M.name===Ve.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return A(D,$,j,null,T)})):it(M)}var F,B=at(T);return B&&qn(),R=Q.follow(function(){var M;(F=T.call(P,P))&&(B?(M=bn.bind(null,null),F.then(M,M)):typeof F.next=="function"&&typeof F.throw=="function"&&(F=Ui(F)))},R),(F&&typeof F.then=="function"?Q.resolve(F).then(function(M){return P.active?M:it(new te.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):R.then(function(){return F})).then(function(M){return _&&P._resolve(),P._completion.then(function(){return M})}).catch(function(M){return P._reject(M),it(M)})})}.bind(null,this,p,b,f,c);return f?f._promise(p,S,"lock"):G.trans?En(G.transless,function(){return d._whenReady(S)}):this._whenReady(S)},st.prototype.table=function(s){if(!x(this._allTables,s))throw new te.InvalidTable("Table ".concat(s," does not exist"));return this._allTables[s]},st);function st(s,o){var c=this;this._middlewares={},this.verno=0;var d=st.dependencies;this._options=o=i({addons:st.addons,autoOpen:!0,indexedDB:d.indexedDB,IDBKeyRange:d.IDBKeyRange,cache:"cloned"},o),this._deps={indexedDB:o.indexedDB,IDBKeyRange:o.IDBKeyRange},d=o.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var f,p,b,v,S,A={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:de,dbReadyPromise:null,cancelOpen:de,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:o.autoOpen};A.dbReadyPromise=new Q(function($){A.dbReadyResolve=$}),A.openCanceller=new Q(function($,j){A.cancelOpen=j}),this._state=A,this.name=s,this.on=rr(this,"populate","blocked","versionchange","close",{ready:[St,de]}),this.on.ready.subscribe=Oe(this.on.ready.subscribe,function($){return function(j,_){st.vip(function(){var T,R=c._state;R.openComplete?(R.dbOpenError||Q.resolve().then(j),_&&$(j)):R.onReadyBeingFired?(R.onReadyBeingFired.push(j),_&&$(j)):($(j),T=c,_||$(function P(){T.on.ready.unsubscribe(j),T.on.ready.unsubscribe(P)}))})}}),this.Collection=(f=this,ir(gl.prototype,function(F,P){this.db=f;var _=Rs,T=null;if(P)try{_=P()}catch(B){T=B}var R=F._ctx,P=R.table,F=P.hook.reading.fire;this._ctx={table:P,index:R.index,isPrimKey:!R.index||P.schema.primKey.keyPath&&R.index===P.schema.primKey.name,range:_,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:T,or:R.or,valueMapper:F!==we?F:null}})),this.Table=(p=this,ir(zs.prototype,function($,j,_){this.db=p,this._tx=_,this.name=$,this.schema=j,this.hook=p._allTables[$]?p._allTables[$].hook:rr(null,{creating:[Xe,de],reading:[Et,we],updating:[Nt,de],deleting:[pn,de]})})),this.Transaction=(b=this,ir(wl.prototype,function($,j,_,T,R){var P=this;this.db=b,this.mode=$,this.storeNames=j,this.schema=_,this.chromeTransactionDurability=T,this.idbtrans=null,this.on=rr(this,"complete","error","abort"),this.parent=R||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new Q(function(F,B){P._resolve=F,P._reject=B}),this._completion.then(function(){P.active=!1,P.on.complete.fire()},function(F){var B=P.active;return P.active=!1,P.on.error.fire(F),P.parent?P.parent._reject(F):B&&P.idbtrans&&P.idbtrans.abort(),it(F)})})),this.Version=(v=this,ir(Sl.prototype,function($){this.db=v,this._cfg={version:$,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(S=this,ir(Us.prototype,function($,j,_){if(this.db=S,this._ctx={table:$,index:j===":id"?null:j,or:_},this._cmp=this._ascending=Ee,this._descending=function(T,R){return Ee(R,T)},this._max=function(T,R){return 0<Ee(T,R)?T:R},this._min=function(T,R){return Ee(T,R)<0?T:R},this._IDBKeyRange=S._deps.IDBKeyRange,!this._IDBKeyRange)throw new te.MissingAPI})),this.on("versionchange",function($){0<$.newVersion?console.warn("Another connection wants to upgrade database '".concat(c.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(c.name,"'. Closing db now to resume the delete request.")),c.close({disableAutoOpen:!1})}),this.on("blocked",function($){!$.newVersion||$.newVersion<$.oldVersion?console.warn("Dexie.delete('".concat(c.name,"') was blocked")):console.warn("Upgrade '".concat(c.name,"' blocked by other connection holding version ").concat($.oldVersion/10))}),this._maxKey=lr(o.IDBKeyRange),this._createTransaction=function($,j,_,T){return new c.Transaction($,j,_,c._options.chromeTransactionDurability,T)},this._fireOnBlocked=function($){c.on("blocked").fire($),Hn.filter(function(j){return j.name===c.name&&j!==c&&!j._state.vcFired}).map(function(j){return j.on("versionchange").fire($)})},this.use(Tl),this.use(jl),this.use(Dl),this.use(Al),this.use(Pl);var D=new Proxy(this,{get:function($,j,_){if(j==="_vip")return!0;if(j==="table")return function(R){return Hr(c.table(R),D)};var T=Reflect.get($,j,_);return T instanceof zs?Hr(T,D):j==="tables"?T.map(function(R){return Hr(R,D)}):j==="_createTransaction"?function(){return Hr(T.apply(this,arguments),D)}:T}});this.vip=D,d.forEach(function($){return $(c)})}var Wr,Ft=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Ol=(Ki.prototype.subscribe=function(s,o,c){return this._subscribe(s&&typeof s!="function"?s:{next:s,error:o,complete:c})},Ki.prototype[Ft]=function(){return this},Ki);function Ki(s){this._subscribe=s}try{Wr={indexedDB:a.indexedDB||a.mozIndexedDB||a.webkitIndexedDB||a.msIndexedDB,IDBKeyRange:a.IDBKeyRange||a.webkitIDBKeyRange}}catch{Wr={indexedDB:null,IDBKeyRange:null}}function ro(s){var o,c=!1,d=new Ol(function(f){var p=at(s),b,v=!1,S={},A={},D={get closed(){return v},unsubscribe:function(){v||(v=!0,b&&b.abort(),$&&vn.storagemutated.unsubscribe(_))}};f.start&&f.start(D);var $=!1,j=function(){return xi(T)},_=function(R){Nr(S,R),Li(A,S)&&j()},T=function(){var R,P,F;!v&&Wr.indexedDB&&(S={},R={},b&&b.abort(),b=new AbortController,F=(function(B){var M=Re();try{p&&qn();var U=gn(s,B);return U=p?U.finally(bn):U}finally{M&&He()}})(P={subscr:R,signal:b.signal,requery:j,querier:s,trans:null}),Promise.resolve(F).then(function(B){c=!0,o=B,v||P.signal.aborted||(S={},(function(M){for(var U in M)if(x(M,U))return;return 1})(A=R)||$||(vn(ar,_),$=!0),xi(function(){return!v&&f.next&&f.next(B)}))},function(B){c=!1,["DatabaseClosedError","AbortError"].includes(B?.name)||v||xi(function(){v||f.error&&f.error(B)})}))};return setTimeout(j,0),D});return d.hasValue=function(){return c},d.getValue=function(){return o},d}var Pn=un;function Vi(s){var o=xn;try{xn=!0,vn.storagemutated.fire(s),Ni(s,!0)}finally{xn=o}}I(Pn,i(i({},ze),{delete:function(s){return new Pn(s,{addons:[]}).delete()},exists:function(s){return new Pn(s,{addons:[]}).open().then(function(o){return o.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(s){try{return o=Pn.dependencies,c=o.indexedDB,o=o.IDBKeyRange,(Oi(c)?Promise.resolve(c.databases()).then(function(d){return d.map(function(f){return f.name}).filter(function(f){return f!==Pr})}):ji(c,o).toCollection().primaryKeys()).then(s)}catch{return it(new te.MissingAPI)}var o,c},defineClass:function(){return function(s){h(this,s)}},ignoreTransaction:function(s){return G.trans?En(G.transless,s):s()},vip:Fi,async:function(s){return function(){try{var o=Ui(s.apply(this,arguments));return o&&typeof o.then=="function"?o:Q.resolve(o)}catch(c){return it(c)}}},spawn:function(s,o,c){try{var d=Ui(s.apply(c,o||[]));return d&&typeof d.then=="function"?d:Q.resolve(d)}catch(f){return it(f)}},currentTransaction:{get:function(){return G.trans||null}},waitFor:function(s,o){return o=Q.resolve(typeof s=="function"?Pn.ignoreTransaction(s):s).timeout(o||6e4),G.trans?G.trans.waitFor(o):o},Promise:Q,debug:{get:function(){return Ie},set:function(s){Ue(s)}},derive:N,extend:h,props:I,override:Oe,Events:rr,on:vn,liveQuery:ro,extendObservabilitySet:Nr,getByKeyPath:pe,setByKeyPath:Se,delByKeyPath:function(s,o){typeof o=="string"?Se(s,o,void 0):"length"in o&&[].map.call(o,function(c){Se(s,c,void 0)})},shallowClone:ot,deepClone:E,getObjectDiff:qi,cmp:Ee,asap:ie,minKey:-1/0,addons:[],connections:Hn,errnames:Ve,dependencies:Wr,cache:An,semVer:"4.0.10",version:"4.0.10".split(".").map(function(s){return parseInt(s)}).reduce(function(s,o,c){return s+o/Math.pow(10,2*c)})})),Pn.maxKey=lr(Pn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(vn(ar,function(s){xn||(s=new CustomEvent(_i,{detail:s}),xn=!0,dispatchEvent(s),xn=!1)}),addEventListener(_i,function(s){s=s.detail,xn||Vi(s)}));var Vn,xn=!1,io=function(){};return typeof BroadcastChannel<"u"&&((io=function(){(Vn=new BroadcastChannel(_i)).onmessage=function(s){return s.data&&Vi(s.data)}})(),typeof Vn.unref=="function"&&Vn.unref(),vn(ar,function(s){xn||Vn.postMessage(s)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(s){if(!un.disableBfCache&&s.persisted){Ie&&console.debug("Dexie: handling persisted pagehide"),Vn?.close();for(var o=0,c=Hn;o<c.length;o++)c[o].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(s){!un.disableBfCache&&s.persisted&&(Ie&&console.debug("Dexie: handling persisted pageshow"),io(),Vi({all:new yt(-1/0,[[]])}))})),Q.rejectionMapper=function(s,o){return!s||s instanceof Ne||s instanceof TypeError||s instanceof SyntaxError||!s.name||!Ye[s.name]?s:(o=new Ye[s.name](o||s.message,s),"stack"in s&&L(o,"stack",{get:function(){return this.inner.stack}}),o)},Ue(Ie),i(un,Object.freeze({__proto__:null,Dexie:un,liveQuery:ro,Entity:js,cmp:Ee,PropModSymbol:cn,PropModification:sr,replacePrefix:function(s,o){return new sr({replacePrefix:[s,o]})},add:function(s){return new sr({add:s})},remove:function(s){return new sr({remove:s})},default:un,RangeSet:yt,mergeRanges:dr,rangesOverlap:Vs}),{default:un}),un})})(Zr)),Zr.exports}var bc=gc();const is=pc(bc),wo=Symbol.for("Dexie"),ii=globalThis[wo]||(globalThis[wo]=is);if(is.semVer!==ii.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${is.semVer} and ${ii.semVer}`);const{liveQuery:ma,mergeRanges:Op,rangesOverlap:Fp,RangeSet:zp,cmp:Lp,Entity:Bp,PropModSymbol:Mp,PropModification:Np,replacePrefix:Up,add:qp,remove:Hp}=ii,yc="easydb";let Vr=null;function wc(){if(Vr)return Vr;const e=new ii(yc);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>vc()),Vr={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},Vr}function vc(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function Yn(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const r=Object.entries(t);return e.filter(i=>ga(i,r)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,r){if(await e.update(t,r)===0)throw new Error(`patch: no doc with id=${t}`);const n=await e.get(t);if(!n)throw new Error(`patch: doc id=${t} vanished after update`);return n},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const i=ma(()=>e.toArray()).subscribe({next:n=>t(n)});return()=>i.unsubscribe()}}}function xc(e,t){return{async find(r){const i=e.where("tableId").equals(t);if(!r||Object.keys(r).length===0)return i.toArray();const n=Object.entries(r);return i.filter(a=>ga(a,n)).toArray()},async findOne(r){const i=await e.get(r);return i&&i.tableId===t?i:null},async insert(r){const i={...r,tableId:t};return await e.add(i),i},async bulkInsert(r){if(r.length===0)return[];const i=r.map(n=>({...n,tableId:t}));return await e.bulkAdd(i),i},async upsert(r){const i={...r,tableId:t};return await e.put(i),i},async patch(r,i){if(await e.update(r,i)===0)throw new Error(`row patch: no row ${r}`);const a=await e.get(r);if(!a)throw new Error(`row patch: row ${r} vanished after update`);return a},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},subscribe(r){const n=ma(()=>e.where("tableId").equals(t).toArray()).subscribe({next:a=>r(a)});return()=>n.unsubscribe()}}}function ga(e,t){for(const[r,i]of t)if(e[r]!==i)return!1;return!0}function $c(e){return{workspaces:Yn(e.workspaces),tables:Yn(e.tables),settings:Yn(e.settings),plugins:Yn(e.plugins),viewTemplates:Yn(e.viewTemplates),viewInstances:Yn(e.viewInstances),rows:t=>xc(e.rows,t)}}function kc(e){const{base:t,providers:r,tableById:i,ctx:n}=e,a=new Map;return{...t,rows(l){const u=i(l),h=u?.source;if(h){const y=r.get(h.type);if(y){const k=JSON.stringify(h),x=a.get(l);if(x&&x.key===k)return x.coll;const I=y.create(u,n);return a.set(l,{key:k,coll:I}),I}}return a.delete(l),t.rows(l)}}}function Cc(){const e=new Map;return{on(t,r){let i=e.get(t);return i||(i=new Set,e.set(t,i)),i.add(r),()=>{i.delete(r)}},emit(t,r){const i=e.get(t);if(i)for(const n of i)try{n(r)}catch(a){console.error(`[event:${String(t)}] listener threw`,a)}}}}const Vt=Qe`
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
`;function Cn(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const r=t.querySelector("form");r&&(e.preventDefault(),r.requestSubmit())}const vo=new WeakSet;function Yt(e,t){if(vo.has(t))return;vo.add(t);let r=0,i=0,n=0,a=0,l=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",h=>{if(h.target.closest("button, input, textarea, select, a, label"))return;l=!0,r=h.clientX,i=h.clientY;const k=e.getBoundingClientRect();n=k.left,a=k.top,t.setPointerCapture(h.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",h=>{if(!l)return;const y=h.clientX-r,k=h.clientY-i,x=-e.offsetWidth+80,I=window.innerWidth-80,V=0,L=window.innerHeight-40,N=Math.max(x,Math.min(I,n+y)),ee=Math.max(V,Math.min(L,a+k));e.style.position="fixed",e.style.left=`${N}px`,e.style.top=`${ee}px`,e.style.margin="0"});const u=h=>{if(l){l=!1;try{t.releasePointerCapture(h.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",u),t.addEventListener("pointercancel",u)}var Ec=Object.defineProperty,Sc=Object.getOwnPropertyDescriptor,ba=(e,t,r,i)=>{for(var n=i>1?void 0:i?Sc(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Ec(t,r,n),n};let zt=class extends Me{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),zt.instance=this}disconnectedCallback(){super.disconnectedCallback(),zt.instance===this&&(zt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&Yt(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:t,message:e,resolve:r}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",r="Input"){return this.enqueue(i=>{this.current={kind:"prompt",title:r,message:e,value:t,resolve:i}})}choice(e,t,r="Choose"){return this.enqueue(i=>{this.current={kind:"choice",title:r,message:e,options:t,resolve:i}})}enqueue(e){return new Promise(t=>{const r=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const r=this.queue.shift();r&&r()}))}render(){const e=this.current;return z`
      <dialog @cancel=${this.onCancel} @keydown=${Cn}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):fe}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return z`
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
        `;case"prompt":return z`
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
        `;case"choice":return z`
          <div class="dialog-header">
            <h2>${e.title}</h2>
            <div class="header-actions">
              <button class="ghost" @click=${()=>this.closeAndResolve(null)}>Cancel</button>
            </div>
          </div>
          <div class="dialog-body">
            ${e.message?z`<p class="message">${e.message}</p>`:fe}
            <div class="choices">
              ${e.options.map(t=>z`<button class="choice" @click=${()=>this.closeAndResolve(t)}>
                    ${t}
                  </button>`)}
            </div>
          </div>
        `}}};zt.instance=null;zt.styles=[Vt,Qe`
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
    `];ba([H()],zt.prototype,"current",2);zt=ba([et("host-dialogs")],zt);const on=Qe`
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
`;var _c=Object.defineProperty,Ac=Object.getOwnPropertyDescriptor,ya=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ac(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&_c(t,r,n),n};let dn=class extends Me{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),dn.instance=this}disconnectedCallback(){super.disconnectedCallback(),dn.instance===this&&(dn.instance=null)}show(e,t){const r={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,r];const i=t?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),i)}dismiss(e){const t=this.toasts.find(r=>r.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(r=>r.id!==e)}render(){return z`
      ${this.toasts.map(e=>z`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${Tc(e.kind)}</span>
            <span class="body">
              ${e.title?z`<strong>${e.title}</strong>`:""}${Pc(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};dn.instance=null;dn.styles=[on,Qe`
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
    `];ya([H()],dn.prototype,"toasts",2);dn=ya([et("toast-host")],dn);function Pc(e){const t=/(https?:\/\/[^\s)]+)/g,r=[];let i=0,n;for(;(n=t.exec(e))!==null;)n.index>i&&r.push(e.slice(i,n.index)),r.push({url:n[0]}),i=n.index+n[0].length;return i<e.length&&r.push(e.slice(i)),r.length===0?e:r.map(a=>typeof a=="string"?a:z`<a href=${a.url} target="_blank" rel="noopener noreferrer">${a.url}</a>`)}function Tc(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function Dc(){return{headerButtons:[],footerButtons:[],tableButtons:[],importers:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map}}function In(e,t){return e.push(t),()=>{const r=e.indexOf(t);r>=0&&e.splice(r,1)}}function Gi(e,t,r){return e.set(t,r),()=>{e.get(t)===r&&e.delete(t)}}function Ic(e){return{registerHeaderButton:t=>In(e.headerButtons,t),registerFooterButton:t=>In(e.footerButtons,t),registerTableButton:t=>In(e.tableButtons,t),registerImporter:t=>In(e.importers,t),registerExporter:t=>In(e.exporters,t),registerUrlSource:t=>In(e.urlSources,t),registerDropHandler:t=>In(e.dropHandlers,t),registerCellRenderer:(t,r)=>Gi(e.cellRenderers,t,r),registerRowRenderer:(t,r)=>Gi(e.rowRenderers,t,r),registerTableRenderer:(t,r)=>Gi(e.tableRenderers,t,r),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},dialogs:Rc}}const Rc={async alert(e,t){const r=zt.instance;if(r)return r.alert(e,t);window.alert(e)},async confirm(e,t){const r=zt.instance;return r?r.confirm(e,t):window.confirm(e)},async prompt(e,t,r){const i=zt.instance;return i?i.prompt(e,t,r):window.prompt(e,t)??null},async choice(e,t,r){const i=zt.instance;if(i)return i.choice(e,t,r);const n=window.prompt(`${e}

Options: ${t.join(", ")}`);return n&&t.includes(n)?n:null},toast(e,t){const r=dn.instance;r?r.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}};function jc(e){const t=Ic(e.registries),r=e.registries.rowSources,i=a=>(r.set(a.type,a),()=>{r.get(a.type)===a&&r.delete(a.type)}),n={open(a){return console.warn("[host] windows.open is stubbed until Phase 5",a.id),{id:a.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:n,registerRowSource:i,backend:{fetch:async(a,l)=>{const u=await Oc(e.store),h=l?.body instanceof ArrayBuffer;if(!u||h)return globalThis.fetch(a,l);const y={url:a};return l?.method&&(y.method=l.method),l?.headers&&(y.headers=l.headers),typeof l?.body=="string"&&(y.body=l.body),globalThis.fetch(`${u}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)})},async saveFile(a,l,u){const h=typeof l=="string"?new Blob([l],{type:u??"application/octet-stream"}):l,y=URL.createObjectURL(h),k=document.createElement("a");k.href=y,k.download=a,k.rel="noopener",document.body.appendChild(k),k.click(),k.remove(),setTimeout(()=>URL.revokeObjectURL(y),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function Oc(e){const r=(await e.settings.findOne("server-sync:url"))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}const Fc={name:"csv-import",version:"0.1.0",description:"Drag-and-drop CSV files to create typed tables.",author:"easyDBAccess built-ins"};function zc(e){e.ui.registerImporter(Lc),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const i=Gc(t).filter(Qc);if(i.length===0)return!1;t.preventDefault();for(const n of i)await Bc(e,n);return!0})}const Lc={id:"csv",label:"CSV",accept:[".csv","text/csv"],async parse(e){const t=typeof e=="string"?e:await e.text();return xr(t)}};async function Bc(e,t){const r=t.name.replace(/\.csv$/i,"")||"imported";await si(e,await t.text(),r)}async function si(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("csv-import: no active workspace");const a=(r||"imported").replace(/\.csv$/i,"")||"imported",l=(await e.store.tables.find()).find(x=>x.workspaceId===n&&x.name===a);let u,h;if(l){const x=await e.ui.dialogs.choice(`A table named "${a}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!x)return;x==="Append rows"?(h="append",u=l.id):x==="Overwrite rows"?(h="overwrite",u=l.id):(h="new",u=Yr())}else h="new",u=Yr();e.events.emit("import:before",{source:"csv",tableId:u});let y;if(h==="new"){const x=xr(t);let I=x.columns,V=x.rows;if(i.editColumns){const N=await i.editColumns(I);if(N===null)return;V=Jc(V,I,N),I=N}i.maxRows!=null&&(V=V.slice(0,i.maxRows));const L=l?`${a} (${Date.now().toString(36)})`:a;await e.store.tables.insert({id:u,workspaceId:n,name:L,code:ss(L),columns:I,view:"table",...i.origin?{origin:i.origin}:{},updatedAt:Date.now()}),y=V.map(N=>({id:Yr(),tableId:u,data:N,updatedAt:Date.now()}))}else{const x=l.columns,I=wa(t);if(y=(i.maxRows!=null?I.rows.slice(0,i.maxRows):I.rows).map(L=>{const N={};for(let ee=0;ee<x.length;ee++){const ce=x[ee];N[ce.field]=$a(L[ee]??"",ce.type)}return{id:Yr(),tableId:u,data:N,updatedAt:Date.now()}}),h==="overwrite"){const L=e.store.rows(u),N=await L.find();await L.bulkRemove(N.map(ee=>ee.id))}}await e.store.rows(u).bulkInsert(y),e.events.emit("import:after",{source:"csv",tableId:u,rowCount:y.length})}function wa(e){const t=e.replace(/﻿/,""),r=va(t),i=xa(t,r);if(i.length===0)return{header:[],rows:[]};const n=i[0],a=i.slice(1).filter(l=>!(l.length===1&&l[0]===""));return{header:n,rows:a}}function xr(e){const t=e.replace(/﻿/,""),r=va(t),i=xa(t,r);if(i.length===0)return{columns:[],rows:[]};const n=i[0],a=i.slice(1).filter(I=>!(I.length===1&&I[0]==="")),l=n.map((I,V)=>Uc(I,V)),u=Ca(l.map(I=>I.field)),h=a.map(I=>{const V={};for(let L=0;L<u.length;L++)V[u[L]]=I[L]??"";return V}),y=l.map((I,V)=>I.type?I.type:qc(h.map(L=>L[u[V]]??"").filter(L=>L.length>0))),k=l.map((I,V)=>{const L=y[V]??"string",N={field:u[V],label:I.label,type:L},ee=Nc(L),ce=I.renderer??ee;return ce&&(N.renderer=ce),I.default!==void 0&&(N.default=I.default),I.max!=null&&(N.max=I.max),I.unique&&(N.unique=!0),I.notnull&&(N.notnull=!0),I.hidden&&(N.hidden=!0),N}),x=h.map(I=>{const V={};for(let L=0;L<u.length;L++){const N=u[L],ee=y[L]??"string";V[N]=$a(I[N]??"",ee)}return V});return{columns:k,rows:x}}const Mc=new Set(["string","number","boolean","date","datetime"]),xo={color:"color",image:"image"};function Nc(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function Uc(e,t){const r=e.trim();if(!r.includes(":"))return{field:ss(r||`col_${t+1}`),label:r||`Column ${t+1}`};const i=r.split(":"),n=ss(i[0]||`col_${t+1}`),a=(i[1]??i[0]??"").trim()||n,l={field:n,label:a},u=(i[2]??"").trim();u&&(Mc.has(u)?l.type=u:xo[u]&&(l.type="string",l.renderer=xo[u]));const h=(i[3]??"").trim();h&&(l.default=h);const y=(i[4]??"").trim();if(y){const x=Number(y);Number.isFinite(x)&&x>0&&(l.max=x)}const k=(i[5]??"").toLowerCase();return k.includes("u")&&(l.unique=!0),k.includes("n")&&(l.notnull=!0),k.includes("h")&&(l.hidden=!0),l}function va(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),r={",":0,";":0,"	":0};for(const a of t)a in r&&(r[a]+=1);let i=",",n=-1;for(const a of[",",";","	"])(r[a]??0)>n&&(i=a,n=r[a]??0);return i}function xa(e,t){const r=[];let i=[],n="",a=!1;for(let l=0;l<e.length;l++){const u=e[l];a?u==='"'?e[l+1]==='"'?(n+='"',l++):a=!1:n+=u:u==='"'?a=!0:u===t?(i.push(n),n=""):u===`
`||u==="\r"?(u==="\r"&&e[l+1]===`
`&&l++,i.push(n),r.push(i),i=[],n=""):n+=u}return(n.length>0||i.length>0)&&(i.push(n),r.push(i)),r}function qc(e){return e.length===0?"string":e.every(Wc)?"boolean":e.every(Kc)?"number":e.every(Yc)?"datetime":e.every(Vc)?"date":"string"}const Hc=/^(true|false|yes|no|0|1)$/i;function Wc(e){return Hc.test(e.trim())}function Kc(e){const t=e.trim();if(t==="")return!1;const r=Number(t);return Number.isFinite(r)}function Vc(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function Yc(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function $a(e,t){const r=e.trim();switch(t){case"number":{if(r==="")return null;const i=Number(r);return Number.isFinite(i)?i:r}case"boolean":return r===""?null:/^(true|yes|1)$/i.test(r);case"date":return ka(r);case"datetime":return Xc(r);default:return e}}function ka(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){let i=parseInt(t[1],10),n=parseInt(t[2],10);const a=t[3];let l=parseInt(a,10);a.length===2&&(l+=2e3);let u,h;return i>12?(u=i,h=n):n>12?(h=i,u=n):(u=i,h=n),`${l.toString().padStart(4,"0")}-${h.toString().padStart(2,"0")}-${u.toString().padStart(2,"0")}`}const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toISOString().slice(0,10)}function Xc(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),r=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(r)return`${r[1]}T${r[2].padStart(5,"0")}`;const i=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(i)return`${ka(`${i[1]}/${i[2]}/${i[3]}`)}T${i[4].padStart(5,"0")}`;const n=new Date(e);if(!Number.isNaN(n.getTime())){const a=n.toISOString();return`${a.slice(0,10)}T${a.slice(11,16)}`}return e}function Gc(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function Qc(e){return!!(/\.csv$/i.test(e.name)||e.type==="text/csv"||e.type==="application/csv")}function Ca(e){const t=new Map,r=new Set,i=[];for(const n of e){let a=n,l=t.get(n)??0;for(;r.has(a);)l+=1,a=`${n}_${l+1}`;t.set(n,l),r.add(a),i.push(a)}return i}function Jc(e,t,r){return e.map(i=>{const n={};for(let a=0;a<t.length;a++)n[r[a].field]=i[t[a].field];return n})}function ss(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function Yr(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Zc=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:Ca,importCsvText:si,init:zc,meta:Fc,parseCsv:xr,parseCsvRaw:wa},Symbol.toStringTag,{value:"Module"})),eu={name:"csv-export",version:"0.1.0",description:"Export a single table as a .csv file via a per-table button.",author:"easyDBAccess built-ins"},tu={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return ks(e,t)}};function nu(e){e.ui.registerExporter(tu),e.ui.registerTableButton({id:"csv-export:download",label:"CSV",icon:"file_download",tooltip:"Download this table as a .csv file",onClick:async(t,r)=>{const i=await t.store.tables.findOne(r.tableId);if(!i)return;const n=await t.store.rows(i.id).find(),a=ks(i,n);await t.backend.saveFile(`${i.code||i.name||"table"}.csv`,a,"text/csv")}})}function ks(e,t){const r=e.columns.map(a=>a.field),i=e.columns.map(a=>$o(a.label??a.field)),n=t.map(a=>r.map(l=>$o(ru(a.data[l]))).join(","));return[i.join(","),...n].join(`\r
`)}function ru(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function $o(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const iu=Object.freeze(Object.defineProperty({__proto__:null,init:nu,meta:eu,serializeCsv:ks},Symbol.toStringTag,{value:"Module"}));var su=Object.defineProperty,ou=Object.getOwnPropertyDescriptor,er=(e,t,r,i)=>{for(var n=i>1?void 0:i?ou(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&su(t,r,n),n};function os(e,t={}){return(Dt.instance??au()).open(e,t)}function au(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function lu(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let Dt=class extends Me{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((r,i)=>r?i:-1).filter(r=>r>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),Dt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Dt.instance===this&&(Dt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Yt(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(r=>!r.hidden),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(r=>{this.resolveFn=r,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return z`
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
            ${this.message?z`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            <ul class="tables">
              ${this.items.map((t,r)=>z`
                  <li>
                    <input
                      type="checkbox"
                      id=${`tsel-${r}`}
                      .checked=${this.selected[r]??!1}
                      @change=${()=>this.toggle(r)}
                    />
                    <label for=${`tsel-${r}`}>
                      <span class="name">${t.name}</span>
                      ${t.hidden?z`<span class="tag-hidden">hidden</span>`:""}
                      <span class="size">${lu(t.size)}</span>
                      ${t.detail?z`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};Dt.instance=null;Dt.styles=[Vt,Qe`
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
    `];er([H()],Dt.prototype,"items",2);er([H()],Dt.prototype,"selected",2);er([H()],Dt.prototype,"heading",2);er([H()],Dt.prototype,"message",2);er([H()],Dt.prototype,"confirmLabel",2);Dt=er([et("table-select-dialog")],Dt);const cu={name:"json-import",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"easyDBAccess built-ins"};function uu(e){e.ui.registerImporter(du),e.ui.registerDropHandler(async t=>{const i=yu(t).filter(wu);if(i.length===0)return!1;t.preventDefault();for(const n of i)await hu(e,n);return!0})}const du={id:"json",label:"JSON",accept:[".json",".db.json","application/json"],async parse(e){const t=typeof e=="string"?e:await e.text(),r=JSON.parse(t),n=$r(r,"imported")[0];return{columns:n?.columns??[],rows:n?.rows??[]}}};async function hu(e,t){await oi(e,await t.text(),t.name)}async function oi(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("json-import: no active workspace");let a;try{a=JSON.parse(t)}catch(L){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${r}: ${L.message}`)});return}const l=r.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",u=$r(a,l);if(u.length===0)return;let h=u;if(u.length>1){const L=await os(u.map(N=>({name:N.name,size:N.rows.length})),{title:"Import tables",message:`"${r}" contains ${u.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!L)return;h=L.map(N=>u[N])}const y=(await e.store.tables.find()).filter(L=>L.workspaceId===n),k=new Set(h.map(L=>L.name)),x=y.filter(L=>k.has(L.name));let I;if(x.length===0&&h.length===1)I="append-new";else{const L=x.length>0?[`Overwrite matching (${x.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],N=await e.ui.dialogs.choice(`Importing ${h.length} table${h.length===1?"":"s"} from "${r}".${x.length>0?`

${x.length} table${x.length===1?"":"s"} share a name with existing data.`:""}`,L,"JSON import");if(!N)return;N.startsWith("Overwrite matching")?I="overwrite-matching":N==="Replace entire workspace"?I="replace-workspace":I="append-new"}if(I==="replace-workspace")for(const L of y){const N=e.store.rows(L.id),ee=await N.find();await N.bulkRemove(ee.map(ce=>ce.id)),await e.store.tables.remove(L.id)}const V=new Map(y.map(L=>[L.name,L]));for(const L of h){const N=L.source,ee=L.origin??(!N&&i.originUrl?{type:"json",url:i.originUrl}:void 0);let ce;const je=I==="overwrite-matching"?V.get(L.name):void 0;if(je){if(ce=je.id,!je.source){const oe=e.store.rows(ce),ie=await oe.find();await oe.bulkRemove(ie.map(pe=>pe.id))}await e.store.tables.patch(ce,{columns:L.columns,...L.windowGeometry?{windowGeometry:L.windowGeometry}:{},...L.sortColumn?{sortColumn:L.sortColumn,sortAsc:L.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},source:N??void 0,origin:ee??void 0,updatedAt:Date.now()})}else ce=So(),e.events.emit("import:before",{source:"json",tableId:ce}),await e.store.tables.insert({id:ce,workspaceId:n,name:L.name,code:vu(L.name),columns:L.columns,view:"table",...L.windowGeometry?{windowGeometry:L.windowGeometry}:{},...L.sortColumn?{sortColumn:L.sortColumn,sortAsc:L.sortAsc??!0}:{},...N?{source:N}:{},...ee?{origin:ee}:{},updatedAt:Date.now()});let Oe=0;if(!N){const oe=e.store.rows(ce),pe=(i.maxRows!=null?L.rows.slice(0,i.maxRows):L.rows).map(Se=>({id:So(),tableId:ce,data:Se,updatedAt:Date.now()}));await oe.bulkInsert(pe),Oe=pe.length}e.events.emit("import:after",{source:"json",tableId:ce,rowCount:Oe})}}function $r(e,t){if(Tt(e)&&ko(e))return Co(e);if(Tt(e)&&Array.isArray(e.tables)){const r=e,i=[];for(const n of r.tables){if(pu(n)){const a=n,l=Tt(a.windowGeometry)?a.windowGeometry:void 0,u=typeof a.sortColumn=="string"?a.sortColumn:void 0,h=typeof a.sortAsc=="boolean"?a.sortAsc:void 0,y=Tt(a.source)&&typeof a.source.type=="string"?a.source:void 0,k=Tt(a.origin)&&typeof a.origin.type=="string"&&typeof a.origin.url=="string"?a.origin:void 0;i.push({name:String(n.name),columns:n.columns.map(mu),rows:Array.isArray(n.rows)?n.rows.filter(Tt):[],...l?{windowGeometry:l}:{},...u?{sortColumn:u,sortAsc:h??!0}:{},...y?{source:y}:{},...k?{origin:k}:{}});continue}Tt(n)&&ko(n)&&i.push(...Co(n))}return i}if(Array.isArray(e)){const r=e.filter(Tt);return r.length===0?[]:[{name:t,...Eo(r)}]}return Tt(e)?[{name:t,...Eo([e])}]:[]}function ko(e){for(const[t,r]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!Tt(r))continue;const i=r;if(Array.isArray(i.dataArray)&&Array.isArray(i.columns))return!0}return!1}function Co(e){const t=[];for(const[r,i]of Object.entries(e)){if(!/\.table\.json$/.test(r)||!Tt(i))continue;const n=i;if(!Array.isArray(n.dataArray)||!Array.isArray(n.columns))continue;const a=r.replace(/\.table\.json$/,""),l=n.columns.map(k=>fu(k)),u=l.map(k=>k.field),h=n.dataArray.filter(k=>Array.isArray(k)).map(k=>{const x={};for(let I=0;I<u.length;I++)x[u[I]]=k[I];return x}),y={name:a,columns:l,rows:h};if(n.elementRect&&typeof n.elementRect.x=="number"&&typeof n.elementRect.y=="number"){const k=n.elementRect;y.windowGeometry={x:k.x,y:k.y,w:k.width??600,h:k.height??400,z:k.zIndex??100,minimized:!!k.minimized,maximized:!!k.maximized}}typeof n.sortColumn=="number"&&n.sortColumn>=0&&n.sortColumn<u.length&&(y.sortColumn=u[n.sortColumn],y.sortAsc=(n.sortDirection??"asc")!=="desc"),t.push(y)}return t}function fu(e){const t=String(e.field??"col"),r=String(e.name??t),i=typeof e.type=="string"?e.type:"string",n={field:t,label:r,type:i};return e.isUnique&&(n.unique=!0),e.isNotNull&&(n.notnull=!0),n}function pu(e){return Tt(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function mu(e){if(!Tt(e))return{field:"col",label:"Col",type:"string"};const t=e,r=String(t.field??"col");let i=typeof t.type=="string"?t.type:"string",n=typeof t.renderer=="string"?t.renderer:void 0;(i==="color"||i==="image")&&(n=n??i,i="string");const a={field:r,label:String(t.label??r),type:i};return n&&(a.renderer=n),typeof t.script=="string"&&(a.script=t.script),a}function Eo(e){const t=new Set;for(const n of e)for(const a of Object.keys(n))t.add(a);return{columns:Array.from(t).map(n=>({field:n,label:n,type:gu(e.map(a=>a[n]))})),rows:e}}function gu(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&bu(r))?"date":"string"}function bu(e){if(/^\d+$/.test(e))return!1;const t=new Date(e);return!Number.isNaN(t.getTime())}function Tt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function yu(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function wu(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}function vu(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function So(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const xu=Object.freeze(Object.defineProperty({__proto__:null,importJsonText:oi,init:uu,meta:cu,parsedToTables:$r},Symbol.toStringTag,{value:"Module"}));class Ht extends Error{constructor(t,r){const i=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(i),this.name="DatasetteError",this.status=r??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function Un(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const r=t.pathname.split("/").filter(Boolean),i={};for(const[u,h]of t.searchParams)i[u]=h;let n,a=null,l=null;if(r.length>=2){l=decodeURIComponent(r[r.length-1]),a=decodeURIComponent(r[r.length-2]);const u=r.slice(0,r.length-2).join("/");n=t.origin+(u?"/"+u:"")}else r.length===1&&(a=decodeURIComponent(r[0])),n=t.origin;return{base:n,db:a,table:l,query:i}}function yr(e,t={}){const r=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[i,n]of Object.entries({...e.query,...t}))n!=null&&r.searchParams.set(i,String(n));return r.toString()}function $u(e){const t=e?.next_url??null,r=e?.next,i=r!=null&&r!==!1?String(r):null,n=Array.isArray(e?.rows)?e.rows:[],a=Array.isArray(e?.columns)?e.columns:null;return{rows:n.map(u=>Array.isArray(u)&&a?Object.fromEntries(a.map((h,y)=>[h,u[y]])):u),nextUrl:t,nextToken:i,hasMore:t!=null||i!=null,truncated:e?.truncated===!0}}function ku(e,t=""){const r=String(e||"").toUpperCase();return r.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":r.includes("REAL")||r.includes("FLOA")||r.includes("DOUB")||r.includes("NUM")||r.includes("DEC")?"number":r.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function _o(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],r=Array.isArray(e?.columns)?e.columns.slice():[],i={},n=e?.column_details;if(Array.isArray(n))for(const u of n)i[u.column??u.name]=u;else n&&typeof n=="object"&&Object.assign(i,n);for(const u of r)u in i||(i[u]={});const l=(r.length?r:Object.keys(i)).map(u=>{const h=i[u]||{},y=h.is_pk===!0||h.is_pk===1||t.includes(u),k={field:u,label:Ea(u),type:ku(h.sqlite_type??h.type,u)};return(h.notnull===!0||h.notnull===1||y)&&(k.notnull=!0),y&&(k.unique=!0),(h.hidden===!0||h.hidden===1)&&(k.hidden=!0),h.default!=null&&h.default!==""&&(k.default=h.default),k});if(t.length===0){const u=l.filter(h=>h.unique).map(h=>h.field);u.length&&t.push(...u)}return{columns:l,pks:t}}function Ea(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function Cs(e){const t=[],r=new Set;for(const i of e)for(const n of Object.keys(i))r.has(n)||(r.add(n),t.push(n));return t.map(i=>({field:i,label:Ea(i),type:Cu(e.map(n=>n[i]))}))}function Cu(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&Eu(r))?"datetime":"string"}function Eu(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function Su(e){const t=new TextEncoder().encode(String(e));let r="";for(const i of t){const n=String.fromCharCode(i);/[A-Za-z0-9_-]/.test(n)?r+=n:r+="~"+i.toString(16).toUpperCase().padStart(2,"0")}return r}function _u(e,t){return!t||t.length===0?null:t.map(r=>Su(e[r])).join(",")}function Au(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],r=[];for(const i of t){if(typeof i=="string"){r.push(i);continue}if(i&&typeof i=="object"&&typeof i.name=="string"){if(i.name==="_memory")continue;r.push(typeof i.route=="string"&&i.route?i.route:i.name)}}return r}function Pu(e,t){const r=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],i=[];for(const n of r){if(typeof n=="string"){i.push({db:t,table:n,count:null,hidden:!1,pks:[]});continue}n&&typeof n=="object"&&typeof n.name=="string"&&i.push({db:t,table:n.name,count:typeof n.count=="number"?n.count:null,hidden:n.hidden===!0,pks:Array.isArray(n.primary_keys)?n.primary_keys:[]})}return i}async function Ln(e,t){let r;try{r=await e(t)}catch(n){const a=n?.message||"network error";throw new Ht({error:`Couldn't reach ${t} (${a}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(r&&r.ok===!1){let n=null;try{n=await r.json()}catch{}throw new Ht(n&&typeof n=="object"?n:{error:`HTTP ${r.status} for ${t}`},r.status)}const i=await r.json();if(i&&i.ok===!1)throw new Ht(i,r.status);return i}async function Sa(e,t){return Au(await Ln(e,`${t}/-/databases.json`))}async function Ao(e,t,r){return Pu(await Ln(e,`${t}/${encodeURIComponent(r)}.json`),r)}async function _a(e,t){const r=yr(t,{_extra:"column_details"}),i=await Ln(e,r);let{columns:n,pks:a}=_o(i),l=!!i&&i.column_details!=null,u=i?.count??null,h=i;if(n.length===0){const y=yr(t,{_extra:"columns"}),k=await Ln(e,y);({columns:n,pks:a}=_o(k)),l=!!k&&k.column_details!=null,u=k?.count??u,h=k}return{columns:n,pks:a,count:u,typed:l,raw:h}}function Tu(e,t,r){const i=e&&typeof e=="object"?e:{},n=t&&r&&i.databases?.[t]?.tables?.[r]||t&&r&&i.databases?.[t]?.tables?.[r.toLowerCase()]||{},a=t&&i.databases?.[t]||{},l=L=>n[L]??a[L]??i[L],u={columns:{},units:{}};typeof n.sort=="string"&&(u.sort=n.sort),typeof n.sort_desc=="string"&&(u.sortDesc=n.sort_desc),typeof n.size=="number"&&(u.size=n.size),Array.isArray(n.sortable_columns)&&(u.sortableColumns=n.sortable_columns.slice()),typeof n.label_column=="string"&&(u.labelColumn=n.label_column),n.hidden===!0&&(u.hidden=!0),typeof n.description=="string"&&(u.description=n.description),typeof n.description_html=="string"&&(u.descriptionHtml=n.description_html);const h=l("source"),y=l("source_url"),k=l("license"),x=l("license_url"),I=l("about"),V=l("about_url");if(typeof h=="string"&&(u.source=h),typeof y=="string"&&(u.sourceUrl=y),typeof k=="string"&&(u.license=k),typeof x=="string"&&(u.licenseUrl=x),typeof I=="string"&&(u.about=I),typeof V=="string"&&(u.aboutUrl=V),n.columns&&typeof n.columns=="object")for(const[L,N]of Object.entries(n.columns))typeof N=="string"&&(u.columns[L]=N);if(n.units&&typeof n.units=="object")for(const[L,N]of Object.entries(n.units))typeof N=="string"&&(u.units[L]=N);return u}const Po=new Map;async function Du(e,t){let r=Po.get(t);return r||(r=Ln(e,`${t}/-/metadata.json`).catch(()=>({})),Po.set(t,r)),r}async function Aa(e,t){const r=await Du(e,t.base);return Tu(r,t.db,t.table)}function Iu(e){const t={};return e.description!=null&&(t.description=e.description),e.descriptionHtml!=null&&(t.descriptionHtml=e.descriptionHtml),e.source!=null&&(t.source=e.source),e.sourceUrl!=null&&(t.sourceUrl=e.sourceUrl),e.license!=null&&(t.license=e.license),e.licenseUrl!=null&&(t.licenseUrl=e.licenseUrl),e.about!=null&&(t.about=e.about),e.aboutUrl!=null&&(t.aboutUrl=e.aboutUrl),Object.keys(t).length>0?t:void 0}function Pa(e,t){const r=e.sortableColumns!=null?new Set(e.sortableColumns):null,i=t.map(u=>{const h=e.columns[u.field],y=e.units[u.field],k=r?r.has(u.field):void 0;return h==null&&y==null&&k===void 0?u:{...u,...h!=null?{description:h}:{},...y!=null?{units:y}:{},...k!==void 0?{sortable:k}:{}}}),n=new Set(t.map(u=>u.field)),a={};e.sort&&n.has(e.sort)?(a.sortColumn=e.sort,a.sortAsc=!0):e.sortDesc&&n.has(e.sortDesc)&&(a.sortColumn=e.sortDesc,a.sortAsc=!1);const l=Iu(e);return l&&(a.info=l),e.labelColumn&&n.has(e.labelColumn)&&(a.labelColumn=e.labelColumn),{columns:i,patch:a}}function Ta(e,t){if(t.length===0)return e;const r=new Map(Cs(t).map(i=>[i.field,i.type]));return e.map(i=>{if(i.type!=="string")return i;const n=r.get(i.field);return n&&n!=="string"?{...i,type:n}:i})}async function hi(e,t,r={}){const i=r.maxRows??1e4,a={_size:r.pageSize??1e3,...r.extraParams||{}};let l=yr(t,a);const u=[];let h=!1,y=!1,k=0,x;for(;l;){let I;try{I=await Ln(e,l)}catch(N){if(u.length===0)throw N;x=N instanceof Ht&&N.status?`stopped after ${u.length} rows: HTTP ${N.status}`:`stopped after ${u.length} rows: ${N?.message??String(N)}`,y=!0;break}const V=$u(I);u.push(...V.rows),h=h||V.truncated,k+=1,r.onProgress?.(u.length);const L=V.nextUrl!=null?V.nextUrl:V.nextToken!=null?yr(t,{_next:V.nextToken}):null;L&&u.length<i&&V.rows.length>0?l=L:(y=L!=null&&V.rows.length>0,l=null)}return{rows:u,truncated:h,hasMore:y,pages:k,error:x}}function Ru(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function Da(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function Ia(e,t,r){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${r}`}async function fi(e,t,r,i){let n;try{n=await e(t,{method:"POST",headers:Ru(i),body:JSON.stringify(r)})}catch(l){throw new Ht({error:`Couldn't reach ${t} (${l?.message||"network error"}).`},0)}if(n&&n.ok===!1){let l=null;try{l=await n.json()}catch{}throw new Ht(l&&typeof l=="object"?l:{error:`HTTP ${n.status} for ${t}`},n.status)}const a=await n.json();if(a&&a.ok===!1)throw new Ht(a,n.status);return a}async function To(e,t,r,i={}){const n=await fi(e,Da(t,"insert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function ju(e,t,r,i,n={}){const a=await fi(e,Ia(t,r,"update"),{update:i,return:!0},n.token);return a&&typeof a.row=="object"&&a.row?a.row:Array.isArray(a?.rows)&&a.rows[0]?a.rows[0]:null}async function Do(e,t,r,i={}){await fi(e,Ia(t,r,"delete"),{},i.token)}async function Ou(e,t,r,i={}){const n=await fi(e,Da(t,"upsert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function Fu(e,t){const r=yr(t,{_extra:"primary_keys"}),i=await Ln(e,r);return Array.isArray(i?.primary_keys)?i.primary_keys:[]}async function Ra(e,t,r={}){const i=r.token?{headers:{Authorization:`Bearer ${r.token}`}}:void 0;try{const n=await e(`${t}/-/versions.json`,i);if(n&&n.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${n.status}`};const a=await n.json(),l=a?.datasette?.version??a?.version??null;let u=null;try{u=(await(await e(`${t}/-/actor.json`,i)).json())?.actor??null}catch{}return{reachable:!0,version:l,actor:u,writable:!!(r.token&&u)}}catch(n){return{reachable:!1,version:null,actor:null,writable:!1,error:n?.message||"unreachable"}}}function pi(e,t){return t?(r,i)=>{const n=(i??{}).headers??{};return e(r,{...i??{},headers:{...n,Authorization:`Bearer ${t}`}})}:e}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ja=Symbol.for(""),zu=e=>{if(e?.r===ja)return e?._$litStatic$},Lu=e=>({_$litStatic$:e,r:ja}),Io=new Map,Bu=e=>(t,...r)=>{const i=r.length;let n,a;const l=[],u=[];let h,y=0,k=!1;for(;y<i;){for(h=t[y];y<i&&(a=r[y],(n=zu(a))!==void 0);)h+=n+t[++y],k=!0;y!==i&&u.push(a),l.push(h),y++}if(y===i&&l.push(t[i]),k){const x=l.join("$$lit$$");(t=Io.get(x))===void 0&&(l.raw=l,Io.set(x,t=l)),r=u}return e(t,...r)},Mu=Bu(z);var Nu=Object.defineProperty,Uu=Object.getOwnPropertyDescriptor,mi=(e,t,r,i)=>{for(var n=i>1?void 0:i?Uu(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Nu(t,r,n),n};let Wt=class extends Me{constructor(){super(...arguments),this.values=[],this.current="",this.search="",this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,r){return this.values=t,this.current=r,this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(i=>{this.resolveFn=i,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}close(e){document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),Wt.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),Wt.instance===this&&(Wt.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(r=>r.value.toLowerCase().includes(e));return z`
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
      ${t.length===0?z`<div class="empty">No matching values.</div>`:z`<ul>
            ${t.slice(0,500).map(r=>z`
                <li
                  class=${r.value===this.current?"selected":""}
                  @click=${()=>this.close(r.value)}
                >
                  <span class="label">${r.value||z`<em>(empty)</em>`}</span>
                  <span class="count">${r.count}</span>
                </li>
              `)}
          </ul>`}
      ${this.values.length>500?z`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      <div class="actions">
        <button class="text" @click=${()=>this.close({clear:!0})}>Clear filter</button>
        <span style="color:#6b7280">${t.length} value${t.length===1?"":"s"}</span>
      </div>
    `}};Wt.instance=null;Wt.styles=[on,Qe`
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
    `];mi([Bt({type:Array})],Wt.prototype,"values",2);mi([Bt({type:String})],Wt.prototype,"current",2);mi([H()],Wt.prototype,"search",2);Wt=mi([et("filter-popover")],Wt);var qu=Object.defineProperty,Hu=Object.getOwnPropertyDescriptor,Xt=(e,t,r,i)=>{for(var n=i>1?void 0:i?Hu(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&qu(t,r,n),n};let Rt=class extends Me{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const r=t[this.highlightIdx];r!==void 0?(e.preventDefault(),this.onPick(r)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const r=[];for(const i of this.options)if(i.toLowerCase().includes(t)&&(r.push(i),r.length>=500))break;return r}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return z`
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
        ${this.value?z`<button
              type="button"
              class="clear"
              title="Clear filter"
              tabindex="-1"
              @mousedown=${r=>r.preventDefault()}
              @click=${this.onClear}
            >
              ×
            </button>`:fe}
      </div>
      ${this.open?z`<ul class="dropdown" style=${t}>
            ${e.length===0?z`<li class="empty">No matching values.</li>`:e.map((r,i)=>z`
                    <li
                      class=${i===this.highlightIdx?"highlighted":""}
                      @mousedown=${n=>n.preventDefault()}
                      @click=${()=>this.onPick(r)}
                    >
                      ${r}
                    </li>
                  `)}
          </ul>`:fe}
    `}};Rt.styles=Qe`
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
  `;Xt([Bt({type:String})],Rt.prototype,"value",2);Xt([Bt({type:Array})],Rt.prototype,"options",2);Xt([Bt({type:String})],Rt.prototype,"placeholder",2);Xt([H()],Rt.prototype,"open",2);Xt([H()],Rt.prototype,"highlightIdx",2);Xt([H()],Rt.prototype,"dropTop",2);Xt([H()],Rt.prototype,"dropLeft",2);Xt([H()],Rt.prototype,"dropMinWidth",2);Xt([H()],Rt.prototype,"editing",2);Xt([Zn("input")],Rt.prototype,"inputEl",2);Rt=Xt([et("filter-combobox")],Rt);function Wu(e){const t=e.trim(),r=t.split(/\s+/).filter(Boolean);if(!r.some(u=>u==="AND"||u==="OR"))return{kind:"plain",phrase:t.toLowerCase(),words:r.map(u=>u.toLowerCase())};const n=[];let a=[];for(const u of r)u==="OR"?(n.push(a),a=[]):u==="AND"||a.push(u.toLowerCase());n.push(a);const l=n.filter(u=>u.length>0);return l.length===0?{kind:"plain",phrase:t.toLowerCase(),words:[]}:{kind:"boolean",groups:l}}function as(e,t,r){const i=Wu(t);if(i.kind==="boolean")return e.filter(h=>i.groups.some(y=>y.every(k=>r(h,k))));const{phrase:n,words:a}=i;if(a.length<=1)return n===""?e:e.filter(h=>r(h,n));const l=e.filter(h=>r(h,n));if(l.length>0)return l;const u=e.filter(h=>a.every(y=>r(h,y)));return u.length>0?u:e.filter(h=>a.some(y=>r(h,y)))}const ai="easydb:visible-count";function Oa(e,t,r){e&&document.dispatchEvent(new CustomEvent(ai,{detail:{key:e,count:t,total:r}}))}function Fa(e,t){return e<0||t<0?"":e===t?` (${t})`:` (${e}/${t})`}var Ku=Object.defineProperty,Vu=Object.getOwnPropertyDescriptor,lt=(e,t,r,i)=>{for(var n=i>1?void 0:i?Vu(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Ku(t,r,n),n};function Ro(e,t){return Object.values(e.data).some(r=>r!=null&&String(r).toLowerCase().includes(t))}const Yu=200;let Ze=class extends Me{constructor(){super(...arguments),this.tableId="",this.viewInstanceId="",this.columns=[],this.rows=[],this.sortColumn=null,this.sortDir=null,this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.viewInst=null,this.tableColumns=[],this.renderedCount=0,this.lastEmittedCount=-1,this.lastEmittedTotal=-1,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;(t.tableId===this.tableId||this.viewMode&&t.tableId===this.viewInstanceId)&&(this.localQuery=t.query??"")},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}get viewMode(){return!!this.viewInstanceId}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.()}async updated(e){(e.has("tableId")||e.has("viewInstanceId"))&&this.tableId&&(this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.markEmptyCells(),this.emitCount()}emitCount(){const e=this.viewMode?this.viewInstanceId:this.tableId;if(!e)return;const t=this.renderedCount,r=this.rows.length;t===this.lastEmittedCount&&r===this.lastEmittedTotal||(this.lastEmittedCount=t,this.lastEmittedTotal=r,Oa(e,t,r))}markEmptyCells(){const e=this.shadowRoot?.querySelectorAll("tbody tr:not(.spacer) > td");if(e)for(const t of e)t.className.startsWith("t-")&&t.classList.toggle("is-null",Xu(t))}async bind(){if(!this.tableId)return;const e=await ye(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.viewMode?(this.tableColumns=t.columns,this.viewInst=await e.store.viewInstances.findOne(this.viewInstanceId)??null,this.applyView(),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const a=n.find(l=>l.id===this.tableId);a&&(this.tableColumns=a.columns,this.applyView())}),this.viewSubUnsub?.(),this.viewSubUnsub=e.store.viewInstances.subscribe(n=>{const a=n.find(l=>l.id===this.viewInstanceId);a&&(this.viewInst=a,this.applyView())})):(this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const a=n.find(l=>l.id===this.tableId);a&&this.applyTable(a)})),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const r=e.store.rows(this.tableId);this.unsubscribe=r.subscribe(n=>this.rows=n);const i=window.setTimeout(()=>this.loading=!0,Yu);try{this.rows=await r.find()}catch(n){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${n?.message??String(n)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(i),this.loading=!1}}applyTable(e){this.columns=e.columns,this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}applyView(){const e=this.viewInst;if(!e)return;const t=new Map(this.tableColumns.map(i=>[i.field,i])),r=e.columnWidths??{};this.columns=e.visibleColumns.map(i=>t.get(i)).filter(i=>!!i).map(i=>{const n=r[i.field];return typeof n=="number"?{...i,width:n}:i}),this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}async setCell(e,t,r){const i=await ye();await this.commitCell(i,e,t,r)}async commitCell(e,t,r,i){const n=this.columns.find(a=>a.field===r);if(n){const a=Gu(n,i,this.rows,t.id);if(a){await e.api.ui.dialogs.alert(a,`Cannot save ${n.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[r]:i},updatedAt:Date.now()})}catch(a){await e.api.ui.dialogs.alert(a?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}renderCell(e,t){const r=e.data[t.field],i=t.renderer,n=i?this.cellRenderers?.get(i):void 0;if(n){const a=Lu(n);return Mu`<${a}
        .value=${r??""}
        .column=${t}
        .row=${e.data}
        @change=${l=>this.setCell(e,t.field,l.detail.value)}
      ></${a}>`}switch(t.type){case"boolean":return z`<input
          type="checkbox"
          .checked=${r===!0||r==="true"||r===1||r==="1"}
          @change=${l=>this.setCell(e,t.field,l.target.checked)}
        />`;case"date":return z`<input
          type="date"
          .value=${Qu(r)}
          @change=${a=>this.setCell(e,t.field,a.target.value||null)}
        />`;case"datetime":return z`<input
          type="datetime-local"
          .value=${Ju(r)}
          @change=${a=>this.setCell(e,t.field,a.target.value||null)}
        />`;case"number":return z`<input
          type="number"
          .value=${r==null?"":String(r)}
          @change=${a=>{const l=a.target.value;this.setCell(e,t.field,l===""?null:Number(l))}}
        />`;default:return z`<input
          type="text"
          .value=${String(r??"")}
          @change=${a=>this.setCell(e,t.field,a.target.value)}
        />`}}async deleteRow(e){const t=await ye();try{await t.store.rows(this.tableId).remove(e)}catch(r){await t.api.ui.dialogs.alert(r?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e){let t;this.sortColumn!==e?t="asc":this.sortDir==="asc"?t="desc":this.sortDir==="desc"?t=null:t="asc",this.sortColumn=t?e:null,this.sortDir=t;const r=await ye(),i=t?{sortColumn:e,sortAsc:t==="asc",updatedAt:Date.now()}:{sortColumn:void 0,sortAsc:void 0,updatedAt:Date.now()};this.viewMode?await r.store.viewInstances.patch(this.viewInstanceId,i):await r.store.tables.patch(this.tableId,i)}filteredRows(){const e=Object.entries(this.filters).filter(([,n])=>n&&n.trim().length>0),t=this.globalQuery.trim(),r=this.localQuery.trim();if(e.length===0&&t.length===0&&r.length===0)return this.rows;let i=this.rows;return e.length>0&&(i=i.filter(n=>e.every(([a,l])=>String(n.data[a]??"").toLowerCase().includes(l.toLowerCase())))),r&&(i=as(i,r,Ro)),t&&(i=as(i,t,Ro)),i}sortedRows(){const e=this.filteredRows();if(!this.sortColumn||!this.sortDir)return e;const t=this.sortColumn,i=this.columns.find(l=>l.field===t)?.type??"string",n=this.sortDir==="asc"?1:-1,a=[...e];return a.sort((l,u)=>{const h=l.data[t],y=u.data[t],k=V=>V==null?0:V===""?1:2,x=k(h),I=k(y);return x!==2||I!==2?(x-I)*n:Zu(h,y,i)*n}),a}async openFilterPicker(e,t){e.stopPropagation();const r=e.currentTarget,i=Wt.instance;if(!i)return;const n=new Map;for(const u of this.rowsFacetedFor(t)){const h=u.data[t];if(h==null)continue;const y=String(h);n.set(y,(n.get(y)??0)+1)}const a=[...n.entries()].map(([u,h])=>({value:u,count:h})).sort((u,h)=>h.count-u.count||u.value.localeCompare(h.value)),l=await i.open(r.getBoundingClientRect(),a,this.filters[t]??"");l!==null&&(typeof l=="object"&&"clear"in l?this.onFilterInput(t,""):typeof l=="string"&&this.onFilterInput(t,l))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>{this.filterSaveTimer=null,this.saveFilters()},250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=Object.entries(this.filters).filter(([r,i])=>i&&i.trim().length>0&&r!==e).map(([r,i])=>[r,i.trim().toLowerCase()]);return t.length===0?this.rows:this.rows.filter(r=>t.every(([i,n])=>String(r.data[i]??"").toLowerCase().includes(n)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const r=50,i=500;for(const n of this.visibleColumns){let a=!0;for(const u of t){const h=u.data[n.field];if(h==null)continue;if((typeof h=="string"?h:String(h)).length>=r){a=!1;break}}if(!a)continue;const l=new Set;for(const u of this.rowsFacetedFor(n.field)){const h=u.data[n.field];if(h==null||h==="")continue;const y=typeof h=="string"?h:String(h);if(!(y.length>=r)&&(l.add(y),l.size>=i))break}e.set(n.field,[...l].sort())}return e}onResizeStart(e,t,r){e.preventDefault(),e.stopPropagation();const i=r.offsetWidth;this.resizing={field:t,startX:e.clientX,startW:i};const n=l=>{if(!this.resizing)return;const u=l.clientX-this.resizing.startX,h=Math.max(40,this.resizing.startW+u);this.columns=this.columns.map(y=>y.field===this.resizing.field?{...y,width:h}:y)},a=async()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",a);const l=this.resizing?.field;if(this.resizing=null,!l)return;const u=await ye();if(this.viewMode){const h=this.columns.find(k=>k.field===l)?.width,y={...this.viewInst?.columnWidths??{}};typeof h=="number"&&(y[l]=h),await u.store.viewInstances.patch(this.viewInstanceId,{columnWidths:y,updatedAt:Date.now()})}else await u.store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",n),window.addEventListener("pointerup",a)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,r){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientX<i.left+i.width/2;this.dropTargetField=t,this.dropEdge=n?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const r=this.dragSourceField,i=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!r||r===t||!i)return;const n=[...this.columns],a=n.findIndex(y=>y.field===r);if(a<0)return;const[l]=n.splice(a,1);let u=n.findIndex(y=>y.field===t);if(u<0){n.splice(a,0,l);return}i==="after"&&(u+=1),n.splice(u,0,l);const h=await ye();this.viewMode?await h.store.viewInstances.patch(this.viewInstanceId,{visibleColumns:n.map(y=>y.field),updatedAt:Date.now()}):await h.store.tables.patch(this.tableId,{columns:n,updatedAt:Date.now()})}async saveFilters(){const e=await ye(),t={};for(const[i,n]of Object.entries(this.filters))n&&n.trim().length>0&&(t[i]=n);if(this.viewMode){await e.store.viewInstances.patch(this.viewInstanceId,{filters:t,updatedAt:Date.now()});return}const r=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:r,updatedAt:Date.now()})}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,r=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,i=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),n=Math.min(e.length,i+r);return{slice:e.slice(i,n),topPad:i*t,bottomPad:(e.length-n)*t}}render(){const e=this.sortedRows();this.renderedCount=e.length;const t=this.visibleColumns,{slice:r,topPad:i,bottomPad:n}=this.virtualSlice(e),a=this.computeFilterSuggestions(),l=this.externalLoading?this.externalProgress:null;return z`
      ${this.loading||this.externalLoading?z`<div
            class="load-bar"
            role="progressbar"
            aria-label="Loading rows"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow=${l!=null?Math.round(l*100):fe}
          >
            <div
              class="load-bar-fill ${l!=null?"determinate":""}"
              style=${l!=null?`width:${Math.max(2,Math.round(l*100))}%`:fe}
            ></div>
          </div>`:fe}
      <table>
        <colgroup>
          ${t.map(u=>z`<col style=${u.width!=null?`width: ${u.width}px`:""} />`)}
          <col style="width:2rem" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(u=>{const h=u.sortable!==!1,y=this.sortColumn===u.field&&this.sortDir,k=h?y==="asc"?"▲":y==="desc"?"▼":"⇅":"",x=`t-${u.type}`,I=this.dragSourceField===u.field,V=this.dropTargetField===u.field,L=V&&this.dropEdge==="before"?" drop-before":V&&this.dropEdge==="after"?" drop-after":"",N=(u.description?`${u.description}
`:"")+(u.units?`Units: ${u.units}
`:"")+`${u.field} — ${h?"click to sort, ":"not sortable · "}drag to reorder`;return z`
                <th
                  class=${`${x}${y?" sorted":""}${I?" drag-source":""}${L}${h?"":" no-sort"}`}
                  title=${N}
                  draggable="true"
                  @click=${()=>h&&this.toggleSort(u.field)}
                  @dragstart=${ee=>this.onColDragStart(ee,u.field)}
                  @dragover=${ee=>this.onColDragOver(ee,u.field,ee.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(u.field)}
                  @drop=${ee=>this.onColDrop(ee,u.field)}
                  @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                >
                  ${u.label}${u.units?z`<span class="col-units"> (${u.units})</span>`:""}<span class="sort-icon">${k}</span>
                  <button
                    class=${`funnel${this.filters[u.field]?" active":""}`}
                    title="Filter by value"
                    @click=${ee=>this.openFilterPicker(ee,u.field)}
                  >
                    <span class="mi sm">filter_list</span>
                  </button>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${ee=>ee.stopPropagation()}
                    @pointerdown=${ee=>this.onResizeStart(ee,u.field,ee.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:2rem"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(u=>{const h=a.get(u.field)??[];return z`
                <th>
                  <filter-combobox
                    .value=${this.filters[u.field]??""}
                    .options=${h}
                    placeholder="filter…"
                    @filter-change=${y=>this.onFilterInput(u.field,y.detail.value)}
                  ></filter-combobox>
                </th>
              `})}
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${i>0?z`<tr class="spacer" style=${`height:${i}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${r.map(u=>z`
              <tr>
                ${t.map(h=>z`<td class=${`t-${h.type}${h.renderer?` r-${h.renderer}`:""}`}>
                      ${this.renderCell(u,h)}
                    </td>`)}
                <td>
                  <button class="danger" title="Delete row" @click=${()=>this.deleteRow(u.id)}>
                    <span class="mi sm">delete</span>
                  </button>
                </td>
              </tr>
            `)}
          ${n>0?z`<tr class="spacer" style=${`height:${n}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
        </tbody>
      </table>
    `}};Ze.styles=[on,Qe`
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
      th .col-units {
        color: #9ca3af;
        font-weight: 400;
      }
      /* A column outside the source's sortable-columns allowlist. */
      th.no-sort {
        cursor: default;
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
    `];lt([Bt({type:String})],Ze.prototype,"tableId",2);lt([Bt({type:String})],Ze.prototype,"viewInstanceId",2);lt([H()],Ze.prototype,"columns",2);lt([H()],Ze.prototype,"rows",2);lt([H()],Ze.prototype,"sortColumn",2);lt([H()],Ze.prototype,"sortDir",2);lt([H()],Ze.prototype,"filters",2);lt([H()],Ze.prototype,"globalQuery",2);lt([H()],Ze.prototype,"localQuery",2);lt([H()],Ze.prototype,"dragSourceField",2);lt([H()],Ze.prototype,"dropTargetField",2);lt([H()],Ze.prototype,"dropEdge",2);lt([H()],Ze.prototype,"resizing",2);lt([H()],Ze.prototype,"cellRenderers",2);lt([H()],Ze.prototype,"scrollY",2);lt([H()],Ze.prototype,"viewportHeight",2);lt([H()],Ze.prototype,"loading",2);lt([H()],Ze.prototype,"externalLoading",2);lt([H()],Ze.prototype,"externalProgress",2);Ze=lt([et("data-table")],Ze);function Xu(e){if((e.textContent??"").trim()!==""||e.querySelector("img"))return!1;const t=e.querySelectorAll("input");for(const r of Array.from(t))if(r.type==="checkbox"||r.value!=="")return!1;return!0}function Gu(e,t,r,i){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&r.find(a=>a.id!==i&&a.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function Qu(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function Ju(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}function Zu(e,t,r){switch(r){case"number":{const i=Number(e),n=Number(t);return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}case"boolean":return(e?1:0)-(t?1:0);case"date":{const i=new Date(String(e)).getTime(),n=new Date(String(t)).getTime();return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function Qi(e,t,r){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:r}}))}class ed extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function za(e){return`datasette:token:${e}`}function td(e,t){for(const[r,i]of Object.entries(t))if(r!=="data"&&e[r]!==i)return!1;return!0}function nd(e,t){const r=e.source,i=r?.config??{},n={base:i.base,db:i.db,table:i.table,query:{}},a=Array.isArray(i.pks)&&i.pks.length>0?i.pks:["rowid"],l=r?.writable===!0,u=i.maxRows??1e4,h=i.pollIntervalMs??0,y=(oe,ie)=>t.backend.fetch(oe,ie);async function k(){const ie=(await t.settings.findOne(za(i.base)))?.value;return typeof ie=="string"&&ie.length>0?ie:void 0}const x=async(oe,ie)=>pi(y,await k())(oe,ie);function I(oe){return{id:_u(oe,a)??rd(),tableId:e.id,data:oe,updatedAt:Date.now()}}function V(oe){if(!l)throw new ed(oe)}function L(oe){const ie={};for(const[pe,Se]of Object.entries(oe))a.includes(pe)||(ie[pe]=Se);return ie}const N=new Set;let ee=[],ce=!1,je=null;function Oe(){return je||(je=(async()=>{try{const{rows:oe}=await hi(x,n,{maxRows:u});ee=oe.map(I),ce=!0;for(const ie of N)ie(ee);return ee}finally{je=null}})(),je)}return{async find(oe){const ie=ce?ee:await Oe();return!oe||Object.keys(oe).length===0?ie:ie.filter(pe=>td(pe,oe))},async findOne(oe){return(ce?ee:await Oe()).find(pe=>pe.id===oe)??null},async insert(oe){V("insert");const[ie]=await To(x,n,[oe.data]),pe=I(ie??oe.data);return t.events.emit("row:created",{tableId:e.id,row:pe}),Oe(),pe},async bulkInsert(oe){if(oe.length===0)return[];V("insert");const ie=await To(x,n,oe.map(Se=>Se.data)),pe=(ie.length?ie:oe.map(Se=>Se.data)).map(I);return Oe(),pe},async upsert(oe){V("upsert");const[ie]=await Ou(x,n,[oe.data]),pe=I(ie??oe.data);return Oe(),pe},async patch(oe,ie){V("update");const pe=ie.data,Se=L(pe??{}),ot=await ju(x,n,oe,Se),gt=I(ot??{...pe??{}});return t.events.emit("row:updated",{tableId:e.id,row:gt,prev:gt}),Oe(),gt},async remove(oe){V("delete"),await Do(x,n,oe),t.events.emit("row:deleted",{tableId:e.id,rowId:oe}),Oe()},async bulkRemove(oe){if(oe.length!==0){V("delete");for(const ie of oe)await Do(x,n,ie);Oe()}},subscribe(oe){N.add(oe),ce?oe(ee):Oe();let ie=null;return h>0&&(ie=setInterval(()=>void Oe(),h)),()=>{N.delete(oe),ie&&clearInterval(ie)}},async refresh(){await Oe()}}}function rd(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var id=Object.defineProperty,sd=Object.getOwnPropertyDescriptor,kr=(e,t,r,i)=>{for(var n=i>1?void 0:i?sd(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&id(t,r,n),n};const od="https://latest.datasette.io/ephemeral";let Lt=class extends Me{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();t&&this.finish({url:t,token:this.token.trim()})}}connectedCallback(){super.connectedCallback(),Lt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Lt.instance===this&&(Lt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Yt(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return z`
      <dialog @cancel=${this.onCancel} @keydown=${Cn}>
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
                placeholder="e.g. ${od}"
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
    `}};Lt.instance=null;Lt.styles=[Vt,Qe`
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
    `];kr([H()],Lt.prototype,"url",2);kr([H()],Lt.prototype,"token",2);kr([H()],Lt.prototype,"status",2);kr([H()],Lt.prototype,"statusKind",2);Lt=kr([et("datasette-connect-dialog")],Lt);const li=e=>e.replace(/^https?:\/\//,"");function ad(e,t,r){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(r)}`}function La(e,t,r,i){const n={...e.info??{}};return!n.source&&!n.sourceUrl&&(n.source=`${li(t)}/${r}/${i}`,n.sourceUrl=ad(t,r,i)),{...e,info:n}}async function Ba(e,t,r,i={}){if(t.db&&t.table)return[{db:t.db,table:t.table,count:null,hidden:!1,pks:[]}];let n=[];if(t.db){if(n.push(...await Ao(e,t.base,t.db)),i.skipPicker)return n.filter(u=>!u.hidden)}else{const u=await Sa(e,t.base);if(u.length===0)return[];let h=u;if(u.length>1){const y=await os(u.map(k=>({name:k,size:null})),{title:`${r} from Datasette`,message:`Choose databases on ${li(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!y)return null;h=y.map(k=>u[k])}for(const y of h)try{n.push(...await Ao(e,t.base,y))}catch{}}if(n.length===0)return[];const a=new Set(n.map(u=>u.db)).size>1,l=await os(n.map(u=>({name:a?`${u.db}/${u.table}`:u.table,size:u.count,detail:a?void 0:u.db,hidden:u.hidden})),{title:`${r} from Datasette`,message:`Choose tables to ${r.toLowerCase()} from ${li(t.base)}.`,confirmLabel:r});return l?l.map(u=>n[u]):null}const ld='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',cd={name:"datasette-source",version:"0.2.0",description:"Import tables from any online Datasette instance, database, or single table by URL",author:"easyDBAccess built-ins",optional:!0},jn={maxImportRows:1e4,pageSize:1e3},ud="https://latest.datasette.io/fixtures/facetable";function dd(e){e.ui.registerHeaderButton({id:"datasette:connect",label:"Connect",icon:ld,tooltip:"Connect a live, editable Datasette table",onClick:()=>bd(e)}),e.ui.registerTableButton({id:"datasette:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from its Datasette backend",visible:t=>t.source?.type==="datasette"||t.origin?.type==="datasette",onClick:(t,{tableId:r})=>xd(t,r)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:nd}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:r}){const i=r||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${ud}`,"","Import from Datasette");i&&await jo(t,i)}}),e.ui.registerDropHandler(async(t,r)=>{const i=t.dataTransfer?.getData("text/plain")||"";return hd(i)?(t.preventDefault(),await jo(r,i),!0):!1})}async function jo(e,t){try{await Es(e,t)}catch(r){let i;r instanceof Ht?i=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:i=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(i,"Datasette import failed")}}function hd(e){try{const t=Un(e);return!!(t.db&&t.table)}catch{return!1}}function fd(e,t){if(!e.has(t))return t;for(let r=2;;r++){const i=`${t} (${r})`;if(!e.has(i))return i}}async function Es(e,t,r={}){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=Un(t),l=await Ba(L=>e.backend.fetch(L),n,"Import",{skipPicker:r.skipTablePicker});if(l===null)return;if(l.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const u=[];let h=0;for(const L of l){const N={base:n.base,db:L.db,table:L.table,query:{}},ee=await pd(e,i,N);if(ee.skipped){h+=1;continue}u.push({tableId:ee.tableId,ref:N,overwrite:ee.overwrite})}let y=0,k=0;const x=[],I=[],V=[];for(const L of u)try{const N=await md(e,L.tableId,L.ref,L.overwrite);y+=1,k+=N.rowCount,N.error?I.push(`${L.ref.db}/${L.ref.table} (${N.error})`):(N.hasMore||N.truncated)&&x.push(`${L.ref.db}/${L.ref.table}`)}catch(N){V.push(`${L.ref.db}/${L.ref.table}: ${N?.message??String(N)}`)}gd(e,{imported:y,skipped:h,totalRows:k,capped:x,partial:I,failed:V,requested:l.length})}async function pd(e,t,r){const i=`${r.db}/${r.table}`,n={type:"datasette",url:`${r.base}/${encodeURIComponent(r.db)}/${encodeURIComponent(r.table)}`},a=(await e.store.tables.find()).filter(y=>y.workspaceId===t),l=a.find(y=>y.name===i);let u=i;if(l){const y=await e.ui.dialogs.choice(`A table named "${i}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!y||y==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(y==="Overwrite")return await e.store.tables.patch(l.id,{origin:n,updatedAt:Date.now()}),{tableId:l.id,overwrite:!0};u=fd(new Set(a.map(k=>k.name)),i)}const h=gi();return await e.store.tables.insert({id:h,workspaceId:t,name:u,code:Na(`${r.db}-${r.table}`),columns:[],view:"table",origin:n,updatedAt:Date.now()}),{tableId:h,overwrite:!1}}async function md(e,t,r,i){const n=`${r.db}/${r.table}`,a=l=>e.backend.fetch(l);Qi(t,!0);try{let l=[],u=null,h=!1;try{const ie=await _a(a,r);l=ie.columns,u=ie.count,h=ie.typed}catch{}const y=u&&u>0?Math.min(u,jn.maxImportRows):0,{rows:k,truncated:x,hasMore:I,pages:V,error:L}=await hi(a,r,{maxRows:jn.maxImportRows,pageSize:jn.pageSize,onProgress:ie=>{y>0&&Qi(t,!0,Math.min(1,ie/y))}});let ee=l.length===0?Cs(k):h?l:Ta(l,k),ce={};try{const ie=await Aa(a,r),pe=Pa(ie,ee);ee=pe.columns,ce=pe.patch}catch{}ce=La(ce,r.base,r.db,r.table);const je=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t}),await e.store.tables.patch(t,{columns:ee,...ce,updatedAt:je});const Oe=e.store.rows(t);if(i){const ie=await Oe.find();await Oe.bulkRemove(ie.map(pe=>pe.id))}const oe=k.map(ie=>({id:gi(),tableId:t,data:ie,updatedAt:je}));return await Oe.bulkInsert(oe),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:k.length}),{name:n,rowCount:k.length,hasMore:I,truncated:x,pages:V,count:u,error:L}}finally{Qi(t,!1)}}function gd(e,t){const r=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,i=`${t.imported} table${t.imported===1?"":"s"}`,n=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${i} (${r});${n} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.partial.length>0){e.ui.dialogs.toast(`Imported ${i} (${r}).${n} ${t.partial.length} loaded partially (stopped early — the server may have rate-limited us): ${t.partial.join(", ")}. Use Refresh to fetch the rest.`,{kind:"warning",title:"Datasette import"});return}if(t.capped.length>0){e.ui.dialogs.toast(`Imported ${i} (${r}).${n} ${t.capped.length} capped at ${jn.maxImportRows} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${i} (${r}) from Datasette.${n}`,{kind:"success",title:"Datasette import"})}async function bd(e){const t=Lt.instance??yd(),r=(n,a)=>e.backend.fetch(n,a),i=await t.open({initialUrl:"https://datasette.io",async onTest(n,a){const l=Un(n),u=await Ra(r,l.base,{token:a||void 0});if(!u.reachable)return`Unreachable: ${u.error??"no response"}`;const h=u.version?` (Datasette ${u.version})`:"";return u.writable?`Reachable${h} — signed in, read-write.`:`Reachable${h} — read-only (no token / not authenticated).`}});if(i)try{await Ma(e,i.url,i.token)}catch(n){const a=n instanceof Ht?n.message:n?.message??String(n);await e.ui.dialogs.alert(a,"Connect Datasette failed")}}function yd(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function Ma(e,t,r){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=Un(t),a=(x,I)=>e.backend.fetch(x,I),l=pi(a,r||void 0),u=await Ra(a,n.base,{token:r||void 0});r&&await e.store.settings.upsert({key:za(n.base),value:r});let h;try{h=await Ba(l,n,"Connect")}catch(x){const I=x instanceof Ht?x.message:x?.message??String(x);throw new Error(`Couldn't read tables from ${li(n.base)}: ${I}`)}if(h===null)return;if(h.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const y=[];for(const x of h){const I=await wd(e,i,n.base,x,u.writable,r);y.push({tableId:I,c:x})}const k=u.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${y.length} live table${y.length===1?"":"s"} from Datasette (${k}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:x,c:I}of y)vd(e,x,n.base,I,r)}async function wd(e,t,r,i,n,a){const l=(await e.store.tables.find()).find(k=>{const x=k.source?.config;return k.workspaceId===t&&k.source?.type==="datasette"&&x?.base===r&&x?.db===i.db&&x?.table===i.table});let u=i.pks??[];if(u.length===0){const k=pi((x,I)=>e.backend.fetch(x,I),a||void 0);try{u=await Fu(k,{base:r,db:i.db,table:i.table,query:{}})}catch{u=[]}}const h=l?.id??gi(),y={...l??{},id:h,workspaceId:t,name:`${i.db}/${i.table}`,code:Na(`${i.db}-${i.table}`),columns:l?.columns??[],view:l?.view??"table",source:{type:"datasette",writable:n,config:{base:r,db:i.db,table:i.table,pks:u}},updatedAt:Date.now()};return l?await e.store.tables.upsert(y):await e.store.tables.insert(y),h}async function vd(e,t,r,i,n){const a={base:r,db:i.db,table:i.table,query:{}},l=pi((u,h)=>e.backend.fetch(u,h),n||void 0);try{let u=[],h=!1;try{const N=await _a(l,a);u=N.columns,h=N.typed}catch{}const{rows:y}=await hi(l,a,{maxRows:50,pageSize:50}),k=u.length===0?Cs(y):h?u:Ta(u,y);if(k.length===0)return;const x=await e.store.tables.findOne(t);if(!x)return;const I=x.source?.config?.pks??[];let V=k.map(N=>I.includes(N.field)?{...N,unique:!0,notnull:!0}:N),L={};try{const N=await Aa(l,a),ee=Pa(N,V);V=ee.columns,L=ee.patch}catch{}L=La(L,a.base,i.db,i.table),await e.store.tables.patch(t,{columns:V,...L,updatedAt:Date.now()})}catch{}}async function xd(e,t){const r=await e.store.tables.findOne(t);if(r)try{if(r.source?.type==="datasette"){const i=e.store.rows(t);typeof i.refresh=="function"&&await i.refresh();const n=await i.find();e.ui.dialogs.toast(`Reloaded ${n.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}else r.origin?.type==="datasette"&&await $d(e,r)}catch(i){const n=i instanceof Ht?i.message:i?.message??String(i);e.ui.dialogs.toast(`Refresh failed: ${n}`,{kind:"error",title:"Refresh"})}}async function $d(e,t){const r=Un(t.origin.url),i=I=>e.backend.fetch(I),{rows:n,hasMore:a,truncated:l,error:u}=await hi(i,r,{maxRows:jn.maxImportRows,pageSize:jn.pageSize}),h=Date.now(),y=e.store.rows(t.id),k=await y.find();await y.bulkRemove(k.map(I=>I.id)),await y.bulkInsert(n.map(I=>({id:gi(),tableId:t.id,data:I,updatedAt:h}))),await e.store.tables.patch(t.id,{updatedAt:h});const x=u?` — partial (${u})`:a||l?` (capped at ${jn.maxImportRows})`:"";e.ui.dialogs.toast(`Refreshed ${n.length} rows from ${r.db}/${r.table}${x}.`,{kind:u||a||l?"warning":"success",title:"Refresh"})}function Na(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function gi(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const kd=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:Ma,importDatasette:Es,init:dd,meta:cd},Symbol.toStringTag,{value:"Module"})),Cd={name:"dump-export",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file.",author:"easyDBAccess built-ins"};function Ed(e){e.ui.registerFooterButton({id:"dump-export:dump",label:"Dump",icon:"archive",tooltip:"Export the current workspace as a JSON dump file",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await bi(e);await e.backend.saveFile(`workspace-${t}.db.json`,r,"application/json")}})}async function bi(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),i={workspaceId:t,exportedAt:Date.now(),tables:[]};for(const n of r){const a=await e.store.rows(n.id).find();i.tables.push({name:n.name,columns:n.columns,rows:a.map(l=>l.data),...n.windowGeometry?{windowGeometry:n.windowGeometry}:{},...n.sortColumn?{sortColumn:n.sortColumn,sortAsc:n.sortAsc??!0}:{},...n.source?{source:n.source}:{},...n.origin?{origin:n.origin}:{}})}return JSON.stringify(i,null,2)}const Sd=Object.freeze(Object.defineProperty({__proto__:null,init:Ed,meta:Cd,serializeWorkspace:bi},Symbol.toStringTag,{value:"Module"})),_d={name:"sql-export",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"easyDBAccess built-ins"};function Ad(e){e.ui.registerFooterButton({id:"sql-export:dump",label:"SQL",icon:"storage",tooltip:"Export the current workspace as a .sql script",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await Ua(e);await e.backend.saveFile(`workspace-${t}.sql`,r,"application/sql")}})}async function Ua(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),i=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const n of r){const a=await e.store.rows(n.id).find();i.push(Pd(n,a),"")}return i.push("COMMIT;",""),i.join(`
`)}function Pd(e,t){const r=ls(e.code||e.name||`table_${e.id}`),i=['  "__id" TEXT PRIMARY KEY',...e.columns.map(a=>`  ${Td(a)}`)],n=[`DROP TABLE IF EXISTS "${r}";`,`CREATE TABLE "${r}" (`,i.join(`,
`),");"];if(t.length>0){const l=["__id",...e.columns.map(u=>u.field)].map(u=>`"${ls(u)}"`).join(", ");for(const u of t){const h=[Oo(u.id),...e.columns.map(y=>Oo(u.data[y.field],y.type))];n.push(`INSERT INTO "${r}" (${l}) VALUES (${h.join(", ")});`)}}return n.join(`
`)}function Td(e){const t=[`"${ls(e.field)}"`,Dd(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function Dd(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function Oo(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const r=Id(e);return r===null?"NULL":Xr(r)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?Xr(e.toISOString()):Xr(typeof e=="string"?e:JSON.stringify(e))}function Id(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?Fo(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(r)return`${r[1]}${r[2]}${r[3]}`;const i=new Date(t);return Number.isFinite(i.getTime())?Fo(i):null}return null}function Fo(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),r=String(e.getUTCMonth()+1).padStart(2,"0"),i=String(e.getUTCDate()).padStart(2,"0");return`${t}${r}${i}`}function Xr(e){return`'${e.replace(/'/g,"''")}'`}function ls(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const Rd=Object.freeze(Object.defineProperty({__proto__:null,init:Ad,meta:_d,serializeWorkspaceAsSql:Ua},Symbol.toStringTag,{value:"Module"})),jd={name:"gist-sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"easyDBAccess built-ins"},Od="gist:";function Fd(e){e.ui.registerFooterButton({id:"gist-sync:push",label:"Push",icon:"cloud_upload",tooltip:"Push the current workspace to a GitHub Gist",onClick:async()=>{try{await Bd(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerFooterButton({id:"gist-sync:pull",label:"Pull",icon:"cloud_download",tooltip:"Pull the latest tables from the configured Gist",onClick:async()=>{try{await Md(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}})}async function qa(e){const t=e.workspaceId();return`${Od}${t??"default"}`}async function zd(e){const t=await qa(e),r=await e.store.settings.findOne(t);if(!r)return null;const i=r.value;return!i||!i.token||!i.user?null:{user:i.user,gistId:i.gistId??"",token:i.token}}async function Ha(e,t){const r=await qa(e);await e.store.settings.upsert({key:r,value:t})}function Ld(e){const t={};for(const r of e.split(";")){const i=r.indexOf("=");if(i<0)continue;const n=r.slice(0,i).trim(),a=r.slice(i+1).trim();n&&(t[n]=a)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function Wa(e){const t=await zd(e);if(t)return t;const r=await e.ui.dialogs.prompt(`Connection string format:
user=<github-user>;gist_id=<id>;gist_token=<pat>;

Leave gist_id empty to create a new gist on first Push.`,"","Gist credentials");if(!r)return null;const i=Ld(r);return i?(await Ha(e,i),i):(await e.ui.dialogs.alert("Could not parse connection string. Make sure it contains user=… and gist_token=….","Gist credentials"),null)}async function Bd(e){const t=await Wa(e);if(!t)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=(await e.store.tables.find()).filter(h=>h.workspaceId===r);if(i.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const n={},a=[];for(const h of i){const y=await e.store.rows(h.id).find(),k=JSON.stringify(Nd(h,y),null,2);k.length>1e8&&a.push(`${h.name} (${(k.length/1e6).toFixed(2)} MB)`),n[`${Ka(h.name)}.table.json`]={content:k}}if(a.length>0&&!await e.ui.dialogs.confirm(`These tables exceed Gist's 100 MB-per-file limit and will be rejected:

${a.join(`
`)}

Push anyway?`,"Gist size warning"))return;n["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1"},null,2)};let l;if(t.gistId){const h=await fetch(`https://api.github.com/gists/${t.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:n,description:`easyDBAccess workspace: ${r}`})});if(!h.ok)throw new Error(await cs(h));l=await h.json()}else{const h=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:n})});if(!h.ok)throw new Error(await cs(h));l=await h.json(),t.gistId=l.id,await Ha(e,t)}const u=l.html_url??`https://gist.github.com/${t.user}/${l.id}`;e.ui.dialogs.toast(`Pushed ${i.length} table${i.length===1?"":"s"}.  ${u}`,{kind:"success",title:"Gist sync"})}async function Md(e){const t=await Wa(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=await fetch(`https://api.github.com/gists/${t.gistId}`,{headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json"}});if(!i.ok)throw new Error(await cs(i));const n=await i.json(),a=Object.entries(n.files).filter(([y])=>y.endsWith(".table.json")&&!y.startsWith("_easydb"));if(a.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const l=(await e.store.tables.find()).filter(y=>y.workspaceId===r),u=new Map(l.map(y=>[y.name,y]));let h=0;for(const[,y]of a){const k=JSON.parse(y.content);if(!k.name||!Array.isArray(k.columns))continue;let x;const I=u.get(k.name);if(I){x=await e.store.tables.patch(I.id,{columns:k.columns,updatedAt:Date.now()});const L=e.store.rows(I.id),N=await L.find();await L.bulkRemove(N.map(ee=>ee.id))}else x=await e.store.tables.insert({id:zo(),workspaceId:r,name:k.name,code:Ka(k.name),columns:k.columns,view:"table",updatedAt:Date.now()});const V=(k.rows??[]).map(L=>({id:zo(),tableId:x.id,data:L,updatedAt:Date.now()}));await e.store.rows(x.id).bulkInsert(V),h++}e.ui.dialogs.toast(`Pulled ${h} table${h===1?"":"s"} from gist ${t.gistId}.`,{kind:"success",title:"Gist sync"})}function Nd(e,t){return{name:e.name,columns:e.columns,rows:t.map(r=>r.data)}}async function cs(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}function Ka(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function zo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Ud=Object.freeze(Object.defineProperty({__proto__:null,init:Fd,meta:jd},Symbol.toStringTag,{value:"Module"})),Va="server-sync:url";function Ya(e){return`server-sync:etag:${e}`}async function Xa(e){const r=(await e.store.settings.findOne(Va))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}async function qd(e,t){await e.store.settings.upsert({key:Va,value:t.replace(/\/+$/,"")})}async function Ga(e,t){const i=(await e.store.settings.findOne(Ya(t)))?.value;return typeof i=="string"?i:null}async function Bn(e,t,r){await e.store.settings.upsert({key:Ya(t),value:r})}function yi(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function Lo(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function Qa(e,t,r){const i=$r(r,t),n=(await e.store.tables.find()).filter(l=>l.workspaceId===t);for(const l of n){const u=e.store.rows(l.id),h=await u.find();await u.bulkRemove(h.map(y=>y.id)),await e.store.tables.remove(l.id)}let a=0;for(const l of i){const u=Bo(),h=await e.store.tables.insert({id:u,workspaceId:t,name:l.name,code:Hd(l.name),columns:l.columns,view:"table",...l.windowGeometry?{windowGeometry:l.windowGeometry}:{},...l.sortColumn?{sortColumn:l.sortColumn,sortAsc:l.sortAsc??!0}:{},updatedAt:Date.now()}),y=l.rows.map(k=>({id:Bo(),tableId:h.id,data:k,updatedAt:Date.now()}));await e.store.rows(h.id).bulkInsert(y),a++}return a}function Hd(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Bo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Wd={name:"server-sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"easyDBAccess built-ins"};function Kd(e){e.ui.registerFooterButton({id:"server-sync:push",label:"Sync ↑",icon:"cloud_sync",tooltip:"Push this workspace to the configured server",onClick:async()=>{try{await Vd(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Server sync"})}}}),e.ui.registerFooterButton({id:"server-sync:pull",label:"Sync ↓",icon:"cloud_sync",tooltip:"Pull this workspace from the configured server",onClick:async()=>{try{await Yd(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Server sync"})}}})}async function Vd(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await Ja(e);if(!r)return;const i=await bi(e),n=await Ga(e,t),a={"Content-Type":"application/json"};n&&(a["If-Match"]=`"${n}"`);let l=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:a,body:i});if(l.status===412){const h=await l.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){h.currentEtag&&await Bn(e,t,h.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}l=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:i})}if(!l.ok)throw new Error(await Za(l));const u=yi(l.headers.get("ETag"));u&&await Bn(e,t,u),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${r}.`,{kind:"success",title:"Server sync"})}async function Yd(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await Ja(e);if(!r||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const n=await fetch(`${r}/sync/${encodeURIComponent(t)}`);if(n.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!n.ok)throw new Error(await Za(n));const a=yi(n.headers.get("ETag")),l=await n.json(),u=await Qa(e,t,l);a&&await Bn(e,t,a),e.ui.dialogs.toast(`Pulled ${u} table${u===1?"":"s"} from ${r}.`,{kind:"success",title:"Server sync"})}async function Ja(e){const t=await Xa(e);if(t)return t;const r=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!r)return null;try{new URL(r)}catch{return await e.ui.dialogs.alert(`"${r}" is not a valid URL.`,"Server sync"),null}return await qd(e,r),r.replace(/\/+$/,"")}async function Za(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Xd=Object.freeze(Object.defineProperty({__proto__:null,init:Kd,meta:Wd},Symbol.toStringTag,{value:"Module"})),Gd={name:"new-table",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"easyDBAccess built-ins"};function Qd(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const Jd=Object.freeze(Object.defineProperty({__proto__:null,init:Qd,meta:Gd},Symbol.toStringTag,{value:"Module"})),Zd={name:"plugin-manager-button",version:"0.1.0",description:"Registers a footer button that opens the Plugin Manager dialog.",author:"easyDBAccess built-ins"};function eh(e){e.ui.registerFooterButton({id:"plugin-manager:open",label:"Plugins",icon:"extension",tooltip:"Add, disable, or remove plugins",onClick:()=>e.ui.openPluginManager()})}const th=Object.freeze(Object.defineProperty({__proto__:null,init:eh,meta:Zd},Symbol.toStringTag,{value:"Module"})),nh={name:"core-renderers",version:"0.1.0",description:"Built-in cell renderers: date, datetime, boolean, script.",author:"easyDBAccess built-ins"};function rh(e){customElements.get("cell-date")||customElements.define("cell-date",ih),customElements.get("cell-datetime")||customElements.define("cell-datetime",sh),customElements.get("cell-boolean")||customElements.define("cell-boolean",oh),customElements.get("cell-script")||customElements.define("cell-script",lh),e.ui.registerCellRenderer("date","cell-date"),e.ui.registerCellRenderer("datetime","cell-datetime"),e.ui.registerCellRenderer("boolean","cell-boolean"),e.ui.registerCellRenderer("script","cell-script")}class ih extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="date",t.value=uh(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class sh extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="datetime-local",t.value=dh(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class oh extends HTMLElement{constructor(){super(...arguments),this._value=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="checkbox",t.checked=ah(this._value),t.style.cssText="transform:translateY(1px);cursor:pointer",t.addEventListener("change",()=>this.commit(t.checked)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function ah(e){return e===!0||e==="true"||e===1||e==="1"}class lh extends HTMLElement{constructor(){super(...arguments),this._column=null,this._row={}}set column(t){this._column=t,this.render()}get column(){return this._column}set row(t){this._row=t??{},this.render()}get row(){return this._row}set value(t){}get value(){}connectedCallback(){this.render()}render(){this.innerHTML="";const t=this._column?.script;if(!t||!t.trim()){const a=document.createElement("span");a.textContent="(no script)",a.style.cssText="color:#9ca3af;font-style:italic",this.append(a);return}let r;try{r=ch(t)}catch(a){this.append(Ji("compile error",a));return}let i;try{i=r(this._row)}catch(a){this.append(Ji("runtime error",a));return}if(typeof i!="string"){this.append(Ji("render(row) did not return a string",null));return}const n=document.createElement("span");n.style.cssText="display:inline-block;width:100%",n.innerHTML=i,this.append(n)}}const Mo=new Map;function ch(e){const t=Mo.get(e);if(t)return t;const r=new Function("row",`${e}
return render(row);`);return Mo.set(e,r),r}function Ji(e,t){const r=document.createElement("span");if(r.textContent=`⚠ ${e}`,r.style.cssText="color:#b91c1c;font-size:0.8em;font-family:ui-monospace,SFMono-Regular,monospace",t){const i=t instanceof Error?t.message:String(t);r.title=i}return r}function uh(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function dh(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}const hh=Object.freeze(Object.defineProperty({__proto__:null,init:rh,meta:nh},Symbol.toStringTag,{value:"Module"})),fh={name:"cell-color",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"easyDBAccess built-ins"};function ph(e){customElements.get("cell-color")||customElements.define("cell-color",mh),e.ui.registerCellRenderer("color","cell-color")}class mh extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,r,i){this.value=i}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const r=document.createElement("input");r.type="color",r.value=t,r.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",r.addEventListener("change",()=>this.commit(r.value)),this.append(r)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const gh=Object.freeze(Object.defineProperty({__proto__:null,init:ph,meta:fh},Symbol.toStringTag,{value:"Module"})),bh={name:"cell-image",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"easyDBAccess built-ins"};function yh(e){customElements.get("cell-image")||customElements.define("cell-image",wh),e.ui.registerCellRenderer("image","cell-image")}class wh extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("span");if(t.style.cssText="display:inline-flex;align-items:center;gap:0.4rem",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const i=document.createElement("img");i.src=this._value,i.alt="",i.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(i)}else{const i=document.createElement("span");i.style.color="#9ca3af",i.textContent="no image",t.append(i);const n=document.createElement("button");n.type="button",n.textContent="upload",n.style.cssText="padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",n.addEventListener("click",()=>this.pickFile()),t.append(n)}this.append(t)}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const r=t.files?.[0];if(!r)return;const i=new FileReader;i.onload=()=>this.commit(String(i.result)),i.readAsDataURL(r)}),t.click()}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const vh=Object.freeze(Object.defineProperty({__proto__:null,init:yh,meta:bh},Symbol.toStringTag,{value:"Module"})),xh={name:"cell-link",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"easyDBAccess built-ins"};function $h(e){customElements.get("cell-link")||customElements.define("cell-link",kh),e.ui.registerCellRenderer("link","cell-link")}class kh extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1}set value(t){const r=t==null?"":String(t);this._value!==r&&(this._value=r,this._editing=!1,this.render())}get value(){return this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="";const t=this._value,r=this._editing?null:Ch(t),i=!this._editing&&!r?Eh(t):null,n=!this._editing&&!r&&!i?Sh(t):null;if(r||i||n){const a=document.createElement("span");a.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const l=document.createElement("a");l.href=r?t:i?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,r&&(l.target="_blank",l.rel="noopener noreferrer"),l.textContent=t,l.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",l.title=r?`Open ${t}`:i?`Email ${t}`:`Call ${t}`;const u=document.createElement("button");u.type="button",u.title="Edit",u.textContent="✎",u.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",u.addEventListener("click",h=>{h.preventDefault(),h.stopPropagation(),this._editing=!0,this.render()}),a.append(l,u),this.append(a)}else{const a=document.createElement("input");a.type="text",a.value=t,a.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",a.addEventListener("change",()=>this.commit(a.value)),a.addEventListener("keydown",l=>{l.key==="Enter"?(l.preventDefault(),this.commit(a.value)):l.key==="Escape"&&(this._editing=!1,this.render())}),this.append(a),this._editing&&setTimeout(()=>{a.focus(),a.select()},0)}}commit(t){this._value=t,this._editing=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Ch(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function Eh(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function Sh(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const r=t.replace(/\D/g,"");if(r.length<7||r.length>15)return null;const i=/[ ()\-.]/.test(t),n=t.startsWith("+");return!i&&!n&&r.length<10?null:t}const _h=Object.freeze(Object.defineProperty({__proto__:null,init:$h,meta:xh},Symbol.toStringTag,{value:"Module"}));var Ah=Object.defineProperty,Ph=Object.getOwnPropertyDescriptor,el=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ph(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Ah(t,r,n),n};function No(e){return(hn.instance??Th()).open(e)}function Th(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let hn=class extends Me{constructor(){super(...arguments),this.rows=[],this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((r,i)=>{const n=this.rows[i],a=n.field.trim(),l=n.label.trim()||a;return{...r,field:a,label:l,hidden:n.hidden}});this.finish(t)},this.toggleAllHidden=()=>{const e=this.rows.length>0&&this.rows.every(t=>t.hidden);this.rows=this.rows.map(t=>({...t,hidden:!e}))}}connectedCallback(){super.connectedCallback(),hn.instance=this}disconnectedCallback(){super.disconnectedCallback(),hn.instance===this&&(hn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Yt(this.dialogEl,e)}open(e){return this.source=e,this.rows=e.map(t=>({field:t.field,label:t.label,hidden:!!t.hidden})),new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((r,i)=>{const n=r.field.trim().toLowerCase();if(n===""){e.add(i);return}(t.get(n)??t.set(n,[]).get(n)).push(i)});for(const r of t.values())if(r.length>1)for(const i of r)e.add(i);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,r){this.rows=this.rows.map((i,n)=>n===e?{...i,[t]:r}:i)}setHidden(e,t){this.rows=this.rows.map((r,i)=>i===e?{...r,hidden:t}:r)}render(){const e=this.invalidIndices(),t=e.size;return z`
      <dialog @cancel=${this.onCancel} @keydown=${Cn}>
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
              ${this.rows.map((r,i)=>z`
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
              ${t>0?`Fix ${t} column name${t===1?"":"s"} — names must be unique and non-empty.`:fe}
            </p>
          </div>
        </form>
      </dialog>
    `}};hn.instance=null;hn.styles=[Vt,Qe`
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
    `];el([H()],hn.prototype,"rows",2);hn=el([et("column-names-dialog")],hn);var Dh=Object.defineProperty,Ih=Object.getOwnPropertyDescriptor,wi=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ih(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Dh(t,r,n),n};let Gr=null;function Rh(){return Gr||(Gr=document.createElement("top-progress"),document.body.appendChild(Gr)),Gr}let Mn=class extends Me{constructor(){super(...arguments),this.visible=!1,this.frac=null,this.label="",this.active=new Set}static begin(e=""){return Rh().begin(e)}begin(e){const t=Symbol("progress");return this.active.add(t),this.label=e,this.frac=null,this.visible=!0,{fraction:r=>{this.active.has(t)&&(this.frac=r)},done:()=>{this.active.delete(t),this.active.size===0&&(this.visible=!1,this.frac=null,this.label="")}}}render(){if(!this.visible)return z``;const e=this.frac!=null;return z`<div
      class="track"
      role="progressbar"
      aria-label=${this.label||"Loading"}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow=${e?Math.round(this.frac*100):""}
    >
      ${e?z`<div
            class="bar determinate"
            style="width:${Math.round(this.frac*100)}%"
          ></div>`:z`<div class="bar indet"></div>`}
    </div>`}};Mn.styles=Qe`
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
  `;wi([H()],Mn.prototype,"visible",2);wi([H()],Mn.prototype,"frac",2);wi([H()],Mn.prototype,"label",2);Mn=wi([et("top-progress")],Mn);function jh(e){let t;try{t=new URL(e)}catch{return e}const r=t.hostname.toLowerCase();if(r==="github.com"||r==="www.github.com"){const i=t.pathname.split("/").filter(Boolean);if(i.length>=5&&(i[2]==="blob"||i[2]==="raw")){const n=i[0],a=i[1];let l=i.slice(3);return l.length>=3&&l[0]==="refs"&&(l[1]==="heads"||l[1]==="tags")&&(l=l.slice(2)),`https://raw.githubusercontent.com/${[n,a,...l].join("/")}`}}return e}async function Oh(e,t){const r=Number(e.headers?.get?.("content-length")),i=e.body?.getReader?.();if(i&&Number.isFinite(r)&&r>0){const n=[];let a=0;for(;;){const{done:h,value:y}=await i.read();if(h)break;y&&(n.push(y),a+=y.length,t?.(Math.min(1,a/r)))}const l=new Uint8Array(a);let u=0;for(const h of n)l.set(h,u),u+=h.length;return new TextDecoder().decode(l)}return await e.text()}var Fh=Object.defineProperty,zh=Object.getOwnPropertyDescriptor,Gt=(e,t,r,i)=>{for(var n=i>1?void 0:i?zh(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Fh(t,r,n),n};const Lh="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",Bh="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",Mh='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',Uo=[{label:"Northwind — sample database (JSON dump)",url:Lh,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:Bh,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],Nh={name:"import-data",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"easyDBAccess built-ins",optional:!0};function Uh(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:Mh,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>Vh(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:r})=>Wh(t,r)})}const qo=50*1024*1024;function Ho(e){try{return new URL(e).host}catch{return e}}async function qh(e){try{return(await e.text()).replace(/\s+/g," ").trim().slice(0,300)}catch{return""}}async function Hh(e,t,r={}){const i=jh(t),n=r.slowMs??2e3;let a=setTimeout(()=>{a=void 0,r.onSlow?.()},n);const l=()=>{a!==void 0&&(clearTimeout(a),a=void 0)};try{let u;try{u=await e.backend.fetch(i)}catch(y){throw new Error(`Could not reach ${Ho(i)} — no response. The server may be down, blocking cross-origin (CORS) requests, or the transfer may have failed (e.g. a very large file). [${y.message}]`)}if(!u.ok){const y=await qh(u);throw new Error(`HTTP ${u.status} ${u.statusText||""}`.trim()+(y?` — ${y}`:""))}const h=Number(u.headers.get("content-length"));if(Number.isFinite(h)&&h>qo)throw new Error(`Response is ${(h/(1024*1024)).toFixed(1)} MB, over the ${qo/(1024*1024)} MB browser import limit. Import a smaller extract, or use a server/Datasette connection for large datasets.`);try{return await Oh(u,r.onProgress)}catch(y){throw new Error(`Failed reading the response body from ${Ho(i)}: ${y.message}`)}}finally{l()}}async function us(e,t,r){const i={handle:null};try{return await Hh(e,t,{onSlow:()=>{i.handle=Mn.begin(r)},onProgress:n=>i.handle?.fraction(n)})}finally{i.handle?.done()}}async function Wh(e,t){const r=await e.store.tables.findOne(t),i=r?.origin;if(i?.url)try{const n=await us(e,i.url,`Reading ${r?.name??"data"}…`);let a;if(i.type==="csv")a=xr(n).rows;else{const h=$r(JSON.parse(n),r.name),y=h.find(k=>k.name===r.name)??(h.length===1?h[0]:void 0);if(!y)throw new Error(`"${r.name}" is no longer in the dump at ${i.url}`);a=y.rows}const l=e.store.rows(t),u=await l.find();await l.bulkRemove(u.map(h=>h.id)),await l.bulkInsert(a.map(h=>({id:Kh(),tableId:t,data:h,updatedAt:Date.now()}))),e.ui.dialogs.toast(`Refreshed "${r.name}" (${a.length} rows).`,{kind:"success",title:"Refresh"})}catch(n){e.ui.dialogs.toast(`Couldn't refresh "${r?.name??t}": ${n.message}`,{kind:"error",title:"Refresh"})}}function Kh(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function Vh(e){const r=await(ht.instance??Yh()).open({async listDatabases(k){const x=Un(k);return Sa(I=>e.backend.fetch(I),x.base)}});if(!r)return;const{url:i,file:n,kind:a,dbChosen:l,editColumns:u,maxRows:h}=r,y=n?.name??i;try{if(n){const k=await n.text();a==="csv"?await si(e,k,n.name,{editColumns:u?No:void 0,maxRows:h}):await oi(e,k,n.name,{maxRows:h}),e.ui.dialogs.toast(`Imported ${n.name}.`,{kind:"success",title:"Import"});return}if(a==="datasette")await Es(e,i,{skipTablePicker:l});else if(a==="csv"){const k=await us(e,i,`Reading ${Xn(i)}…`);await si(e,k,Xn(i),{editColumns:u?No:void 0,maxRows:h,origin:{type:"csv",url:i}}),e.ui.dialogs.toast(`Imported ${Xn(i)}.`,{kind:"success",title:"Import"})}else{const k=await us(e,i,`Reading ${Xn(i)}…`);await oi(e,k,Xn(i),{originUrl:i,maxRows:h}),e.ui.dialogs.toast(`Imported ${Xn(i)}.`,{kind:"success",title:"Import"})}}catch(k){e.ui.dialogs.toast(`Could not import ${y}: ${k.message}`,{kind:"error",title:"Import"})}}function Yh(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function Xh(e){try{const t=new URL(e),r=t.hostname.toLowerCase(),i=[...t.searchParams.keys()].some(a=>a.startsWith("_")),n=r.includes("datasette")||i;return!i&&/\.csv$/i.test(t.pathname)?"csv":!i&&/\.json$/i.test(t.pathname)?"json":n?"datasette":"json"}catch{return"json"}}function Wo(e,t){if(t!=="datasette"||!e)return!1;try{const r=Un(e);return!r.db&&!r.table}catch{return!1}}function Xn(e){try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();return r&&r.length>0?r:"sample.db.json"}catch{return"sample.db.json"}}function Gh(e){return/\.csv$/i.test(e)?"csv":"json"}let ht=class extends Me{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.file=null,this.maxRowsInput="",this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t&&!this.file)return;const r=this.resolvedKind,i=this.maxRows,n=r==="csv"&&this.editColumns;if(this.file){this.finish({url:"",file:this.file,kind:r,editColumns:n,maxRows:i});return}const a=r==="datasette"&&!!this.selectedDb&&Wo(t,r),l=a?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:l,kind:r,dbChosen:a,editColumns:n,maxRows:i})}}get resolvedKind(){return this.kind!=="auto"?this.kind:this.file?Gh(this.file.name):Xh(this.url.trim())}get maxRows(){const e=Math.floor(Number(this.maxRowsInput));return Number.isFinite(e)&&e>0?e:void 0}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),ht.instance=this}disconnectedCallback(){super.disconnectedCallback(),ht.instance===this&&(ht.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Yt(this.dialogEl,e)}open(e){return this.url="",this.kind="auto",this.presetIdx=-1,this.editColumns=!1,this.file=null,this.maxRowsInput="",this.resetDbList(),this.listDatabases=e?.listDatabases??null,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const r=Uo[t];r&&(this.url=r.url,this.kind=r.kind)}onFileChange(e){const r=e.target.files?.[0]??null;this.file=r,r&&(this.url="",this.presetIdx=-1,this.resetDbList())}renderDbPicker(){return!this.listDatabases||!Wo(this.url.trim(),this.resolvedKind)?fe:z`
      <label>
        Database
        <div class="row db-row">
          <select
            .value=${this.selectedDb}
            ?disabled=${!this.dbList||this.dbList.length===0}
            @change=${e=>{this.selectedDb=e.target.value}}
          >
            ${this.dbList?z`
                  <option value="" ?selected=${this.selectedDb===""}>
                    — all databases (choose tables next) —
                  </option>
                  ${this.dbList.map(e=>z`<option value=${e} ?selected=${e===this.selectedDb}>${e}</option>`)}
                `:z`<option value="">— not loaded —</option>`}
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
      ${this.dbError?z`<p class="hint error">${this.dbError}</p>`:fe}
    `}render(){return z`
      <dialog @cancel=${this.onCancel} @keydown=${Cn}>
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
                ${Uo.map((e,t)=>z`<option value=${String(t)} ?selected=${t===this.presetIdx}>
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
            ${this.file?z`<p class="hint">
                  Importing <strong>${this.file.name}</strong> as
                  ${this.resolvedKind.toUpperCase()}.
                </p>`:fe}

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
            ${this.resolvedKind==="csv"?z`<label class="check">
                  <input
                    type="checkbox"
                    .checked=${this.editColumns}
                    @change=${e=>this.editColumns=e.target.checked}
                  />
                  Edit columns before import (rename / hide / fix duplicate names)
                </label>`:fe}

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
            ${this.resolvedKind==="datasette"&&this.maxRows!=null?z`<p class="hint">
                  Row limit applies to CSV/JSON imports; Datasette snapshots use their own
                  10,000-row cap.
                </p>`:fe}

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
      ${fe}
    `}};ht.instance=null;ht.styles=[Vt,Qe`
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
    `];Gt([H()],ht.prototype,"url",2);Gt([H()],ht.prototype,"kind",2);Gt([H()],ht.prototype,"presetIdx",2);Gt([H()],ht.prototype,"dbList",2);Gt([H()],ht.prototype,"dbLoading",2);Gt([H()],ht.prototype,"dbError",2);Gt([H()],ht.prototype,"selectedDb",2);Gt([H()],ht.prototype,"editColumns",2);Gt([H()],ht.prototype,"file",2);Gt([H()],ht.prototype,"maxRowsInput",2);ht=Gt([et("import-dialog")],ht);const Qh=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return ht},init:Uh,meta:Nh},Symbol.toStringTag,{value:"Module"})),Jh={name:"auto-sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"easyDBAccess built-ins",optional:!0},Zh=6e4;let Ko=null,ds=!1;const Zi=new Map;function ef(e){Ko===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(Ko=setInterval(()=>{tl(e)},Zh)))}async function tl(e){if(ds)return;const t=e.workspaceId();if(!t)return;const r=await Xa(e);if(r)try{await tf(e,r,t)}catch(i){console.warn("[auto-sync]",i)}}async function tf(e,t,r){const i=await bi(e),n=await Ga(e,r),a=await fetch(`${t}/sync/${encodeURIComponent(r)}`);if(a.status===404){await Vo(e,t,r,i,null);return}if(!a.ok)return;const l=yi(a.headers.get("ETag")),u=await a.text();if(Lo(i)===Lo(u)){l&&l!==n&&await Bn(e,r,l);return}if(l&&l===n){await Vo(e,t,r,i,n);return}if(!(l&&Zi.get(r)===l)){ds=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${r}". Pull and replace your local copy?`,"auto-sync")){const y=JSON.parse(u),k=await Qa(e,r,y);l&&await Bn(e,r,l),Zi.delete(r),e.ui.dialogs.toast(`Pulled ${k} table${k===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else l&&Zi.set(r,l)}finally{ds=!1}}}async function Vo(e,t,r,i,n){const a={"Content-Type":"application/json"};n&&(a["If-Match"]=`"${n}"`);const l=await fetch(`${t}/sync/${encodeURIComponent(r)}`,{method:"PUT",headers:a,body:i});if(l.ok){const u=yi(l.headers.get("ETag"));u&&await Bn(e,r,u);return}if(l.status===412){const u=await l.json().catch(()=>({}));u.currentEtag&&await Bn(e,r,u.currentEtag)}}const nl=Object.freeze(Object.defineProperty({__proto__:null,load:ef,meta:Jh,tick:tl},Symbol.toStringTag,{value:"Module"})),rl=/\$([A-Za-z_][A-Za-z0-9_]*)/g;function Yo(...e){const t=new Set;for(const r of e)if(r)for(const i of r.matchAll(rl))t.add(i[1]);return[...t]}function nf(e,t,r){return e.replace(rl,(i,n)=>{const a=r[n];if(!a)return"";const l=t.data[a];return l==null?"":String(l)})}function Xo(e){return e==null||e===""}function rf(e,t){const r=Object.entries(t).filter(([,i])=>i!=null&&String(i).trim()!=="");return r.length===0?e:e.filter(i=>r.every(([n,a])=>String(i.data[n]??"").toLowerCase().includes(String(a).toLowerCase())))}function sf(e,t,r=!0){if(!t)return e;const i=r?1:-1;return[...e].sort((n,a)=>{const l=n.data[t],u=a.data[t],h=Xo(l),y=Xo(u);if(h||y)return h===y?0:h?1:-1;const k=Number(l),x=Number(u);return!Number.isNaN(k)&&!Number.isNaN(x)?(k-x)*i:String(l).localeCompare(String(u),void 0,{numeric:!0,sensitivity:"base"})*i})}function of(e,t){return sf(rf(e,t.filters??{}),t.sortColumn,t.sortAsc??!0)}function af(e){return!!e&&e.trim().length>0}var lf=Object.defineProperty,cf=Object.getOwnPropertyDescriptor,tr=(e,t,r,i)=>{for(var n=i>1?void 0:i?cf(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&lf(t,r,n),n};function hs(e,t){(It.instance??uf()).open(e,t)}function uf(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function Go(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let It=class extends Me{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()}}connectedCallback(){super.connectedCallback(),It.instance=this}disconnectedCallback(){super.disconnectedCallback(),It.instance===this&&(It.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Yt(this.dialogEl,e)}async open(e,t){if(this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),t?.editTemplateId){const r=this.templates.find(i=>i.id===t.editTemplateId);r&&this.editTemplate(r)}else if(t?.editInstanceId){const r=this.instances.find(i=>i.id===t.editInstanceId);r&&await this.editInstance(r)}await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await ye(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(r=>r.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((r,i)=>r.name.localeCompare(i.name))}async openInstance(e){await(await ye()).store.viewInstances.patch(e,{open:!0,updatedAt:Date.now()}),this.close()}async editInstance(e){const r=await(await ye()).store.viewTemplates.findOne(e.templateId),i=r?Yo(r.headerHtml,r.rowHtml,r.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:r?.name??"template",name:e.name,tokens:i,mapping:{...e.mapping}},this.mode="instance"}async deleteInstance(e){await(await ye()).store.viewInstances.remove(e),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await ye();e.id?await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()}):await t.store.viewTemplates.insert({id:Go(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh(),this.mode="list"}useTemplate(e){const t=Yo(e.headerHtml,e.rowHtml,e.footerHtml),r={};for(const i of t)r[i]=this.autoMap(i);this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:r},this.mode="instance"}autoMap(e){const t=e.toLowerCase(),r=this.columns.find(n=>n.field.toLowerCase()===t||(n.label??"").toLowerCase()===t);if(r)return r.field;const i=this.table?.labelColumn;return i&&(t==="title"||t==="name"||t==="label")?i:""}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await ye();if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.mode="list";return}const r=this.columns.filter(n=>!n.hidden).map(n=>n.field),i={id:Go(),workspaceId:t.workspaceId,tableId:this.tableId,tableName:this.table.name,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:r,mapping:{...e.mapping},updatedAt:Date.now()};await t.store.viewInstances.insert(i),await this.openInstance(i.id)}renderList(){return z`
      <div class="section">
        <h3>Views of “${this.table?.name??""}”</h3>
        <ul class="list">
          ${this.instances.map(e=>z`<li>
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
          ${this.templates.map(e=>z`<li>
                <span class="name">${e.name}</span>
                ${e.builtin?z`<span class="badge">built-in</span>`:fe}
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
    `}renderTemplate(){const e=this.tDraft,t=r=>i=>{this.tDraft={...e,[r]:i.target.value}};return z`
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
    `}renderInstance(){const e=this.iDraft;return z`
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
        ${e.tokens.length===0?z`<p class="hint">
              This template has no <code>$TOKEN</code> placeholders — it will show the read-only
              table with your current sort, filter and visible columns.
            </p>`:e.tokens.map(t=>z`<div class="map-row">
                  <code>$${t}</code>
                  <select
                    @change=${r=>this.iDraft={...e,mapping:{...e.mapping,[t]:r.target.value}}}
                  >
                    <option value="" ?selected=${!e.mapping[t]}>— none —</option>
                    ${this.columns.map(r=>z`<option value=${r.field} ?selected=${e.mapping[t]===r.field}>
                          ${r.label||r.field}
                        </option>`)}
                  </select>
                </div>`)}
      </div>
      <p class="hint">
        ${e.id?z`Editing name and column mapping. The snapshotted sort, filters and visible columns
            are kept.`:z`The view snapshots this table's current sort, filters and visible columns.`}
      </p>
    `}render(){const e=this.mode==="template"?this.tDraft?.id?"Edit template":"New template":this.mode==="instance"?`${this.iDraft?.id?"Edit":"New"} view — ${this.iDraft?.templateName??""}`:"Views",t=this.mode==="template"?z`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
              Back
            </button>
            <button type="button" class="primary" @click=${()=>void this.saveTemplate()}>
              Save
            </button>`:this.mode==="instance"?z`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
                Back
              </button>
              <button type="button" class="primary" @click=${()=>void this.saveInstance()}>
                ${this.iDraft?.id?"Save":"Create view"}
              </button>`:z`<button type="button" class="ghost" @click=${this.close}>Close</button>`;return z`
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
    `}};It.instance=null;It.styles=[Vt,Qe`
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
    `];tr([H()],It.prototype,"mode",2);tr([H()],It.prototype,"instances",2);tr([H()],It.prototype,"templates",2);tr([H()],It.prototype,"tDraft",2);tr([H()],It.prototype,"iDraft",2);It=tr([et("views-dialog")],It);const df={name:"views",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",optional:!0},hf="grid_view",Qo="RSS Feed",fs='<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',ps=['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>',"</div>"].join(""),ms="</div>";function ff(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:hf,tooltip:"Views — display this table through a template",onClick:(t,{tableId:r})=>hs(r)})}async function pf(e){await gf(e)}function mf(){let e=5381;const t=`${fs}\0${ps}\0${ms}`;for(let r=0;r<t.length;r++)e=(e<<5)+e+t.charCodeAt(r)|0;return(e>>>0).toString(36)}async function gf(e){const t=e.workspaceId();if(!t)return;const r=`views:seeded:rss:${t}`,i=`views:sig:rss:${t}`,n=mf(),a=(await e.store.viewTemplates.find({workspaceId:t})).find(u=>u.builtin&&u.name===Qo);if(a){(await e.store.settings.findOne(i))?.value!==n&&(await e.store.viewTemplates.patch(a.id,{headerHtml:fs,rowHtml:ps,footerHtml:ms,updatedAt:Date.now()}),await e.store.settings.upsert({key:i,value:n})),await e.store.settings.upsert({key:r,value:!0});return}(await e.store.settings.findOne(r))?.value||(await e.store.viewTemplates.insert({id:bf(),workspaceId:t,name:Qo,headerHtml:fs,rowHtml:ps,footerHtml:ms,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({key:r,value:!0}),await e.store.settings.upsert({key:i,value:n}))}function bf(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const yf=Object.freeze(Object.defineProperty({__proto__:null,init:ff,load:pf,meta:df},Symbol.toStringTag,{value:"Module"})),il=[Jd,Zc,xu,kd,iu,Sd,Rd,Ud,Xd,th,hh,gh,vh,_h,Qh,nl,yf],wf=il;function gs(e){return`builtin:${e}`}async function vf(e){const t=[];for(const r of il)if(!await xf(e,r)){t.push(r);try{await r.init?.(e)}catch(i){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"init",error:i})}}return async()=>{for(const r of t)try{await r.load?.(e)}catch(i){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"load",error:i})}}}async function xf(e,t){if(!t.meta?.optional)return!1;const r=t.meta.name;return r?(await e.store.plugins.findOne(gs(r)))?.enabled===!1:!1}async function $f(e){const t=e.workspaceId();if(!t)return async()=>{};const i=(await e.store.workspaces.findOne(t))?.pluginUrls??[],n=[];for(const a of i)try{const l=await e.store.plugins.findOne(a);if(l&&l.enabled===!1)continue;let u=l?.cachedBody??"";if(u)kf(e,a,u);else{try{u=await sl(a)}catch(k){await e.store.plugins.upsert({url:a,enabled:l?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${k.message}`}),e.events.emit("plugin:error",{url:a,phase:"fetch",error:k});continue}await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),cachedBody:u})}const h=new Blob([u],{type:"text/javascript"}),y=URL.createObjectURL(h);try{const k=await import(y);await k.init?.(e),n.push({url:a,mod:k})}finally{setTimeout(()=>URL.revokeObjectURL(y),5e3)}}catch(l){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`init: ${l.message}`}),e.events.emit("plugin:error",{url:a,phase:"init",error:l})}return async()=>{for(const{url:a,mod:l}of n)try{await l.load?.(e)}catch(u){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`load: ${u.message}`}),e.events.emit("plugin:error",{url:a,phase:"load",error:u})}}}async function sl(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const r=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(r))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return r}function kf(e,t,r){return(async()=>{try{const i=await sl(t);if(i===r)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:i})}catch{}})()}let es=null;function ye(){return es||(es=Cf()),es}async function Cf(){const e=await wc(),t=$c(e),r=Cc(),i=Dc(),n=new Map;t.tables.subscribe(N=>{n.clear();for(const ee of N)n.set(ee.id,ee)});const a={...t.tables,insert:N=>(n.set(N.id,N),t.tables.insert(N)),upsert:N=>(n.set(N.id,N),t.tables.upsert(N))};let l=null;const u={get backend(){if(!l)throw new Error("[host] row-source ctx used before app init completed");return l.backend},events:r,settings:t.settings,workspaceId:()=>x},h=kc({base:{...t,tables:a},providers:i.rowSources,tableById:N=>n.get(N),ctx:u}),y=Ef(),k=await h.workspaces.find();let x;if(y){const N=Af(y),ee=k.find(ce=>ce.id===N||ce.name===y);ee?x=ee.id:x=(await h.workspaces.insert({id:N,name:y,createdAt:Date.now(),pluginUrls:[]})).id}else{const N=Sf(),ee=N?k.find(ce=>ce.id===N):void 0;ee?x=ee.id:k.length>0?x=k[0].id:x=(await h.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}_f(x);const I=jc({store:h,events:r,registries:i,workspaceId:()=>x});l=I,r.on("import:after",({source:N,tableId:ee,rowCount:ce})=>{N!=="datasette"&&I.store.tables.findOne(ee).then(je=>{I.ui.dialogs.toast(`Imported ${ce} row${ce===1?"":"s"} into "${je?.name??ee}".`,{kind:"success",title:N.toUpperCase()+" import"})})}),r.on("plugin:error",({url:N,phase:ee,error:ce})=>{I.ui.dialogs.toast(`[${ee}] ${ce?.message??String(ce)}`,{kind:"error",title:`Plugin: ${N}`})});const V=await vf(I),L=await $f(I);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:x}),await V(),await L()}),{store:h,events:r,workspaceId:x,registries:i,api:I}}function Ef(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const ol="eda:lastWorkspaceId";function Sf(){try{return globalThis.localStorage?.getItem(ol)??null}catch{return null}}function _f(e){try{globalThis.localStorage?.setItem(ol,e)}catch{}}function Af(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var Pf=Object.defineProperty,Tf=Object.getOwnPropertyDescriptor,vi=(e,t,r,i)=>{for(var n=i>1?void 0:i?Tf(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Pf(t,r,n),n};let Jn=class extends Me{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Yt(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let r;try{r=xr(this.text)}catch(l){this.errorMsg=`Couldn't parse the CSV: ${l.message}`;return}if(r.columns.length===0||r.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const i=await ye(),n=crypto.randomUUID();await i.store.tables.insert({id:n,workspaceId:i.workspaceId,name:t,code:Df(t),columns:r.columns,view:"table",updatedAt:Date.now()});const a=r.rows.map(l=>({id:crypto.randomUUID(),tableId:n,data:l,updatedAt:Date.now()}));await i.store.rows(n).bulkInsert(a),i.api.ui.dialogs.toast(`Imported ${r.rows.length} row${r.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return z`
      <dialog @cancel=${this.close} @keydown=${Cn}>
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
            ${this.errorMsg?z`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};Jn.styles=[Vt,Qe`
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
    `];vi([H()],Jn.prototype,"name",2);vi([H()],Jn.prototype,"text",2);vi([H()],Jn.prototype,"errorMsg",2);Jn=vi([et("csv-paste-dialog")],Jn);function Df(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}var If=Object.defineProperty,Rf=Object.getOwnPropertyDescriptor,Ss=(e,t,r,i)=>{for(var n=i>1?void 0:i?Rf(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&If(t,r,n),n};const jf=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return an HTML string; it is injected into the cell as raw HTML.
  return '<b>' + (row.name ?? '') + '</b>';
}
`;let rn=class extends Me{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),rn.instance=this}disconnectedCallback(){super.disconnectedCallback(),rn.instance===this&&(rn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Yt(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:jf,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(r=>{this.resolver=r})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return z`
      <dialog @cancel=${this.onCancel} @keydown=${Cn}>
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
    `}};rn.instance=null;rn.styles=[Vt,Qe`
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
    `];Ss([H()],rn.prototype,"text",2);Ss([H()],rn.prototype,"columnLabel",2);rn=Ss([et("script-editor-dialog")],rn);var Of=Object.defineProperty,Ff=Object.getOwnPropertyDescriptor,Qt=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ff(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Of(t,r,n),n};const zf=["string","number","boolean","date","datetime"];let jt=class extends Me{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.columns=[],this.errorMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Yt(this.dialogEl,e)}async open(e){this.errorMsg="";const t=await ye();if(this.rendererOptions=[...t.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.rendererSubUnsub=t.events.on("app:ready",()=>{this.rendererOptions=[...t.registries.cellRenderers.keys()].sort()}),e){const r=await ye(),i=await r.store.tables.findOne(e);if(!i)return;this.mode="edit",this.editTableId=e,this.name=i.name,this.columns=i.columns.map(a=>({field:a.field,label:a.label,type:a.type,renderer:a.renderer,script:a.script,max:a.max,unique:a.unique,notnull:a.notnull,hidden:a.hidden,origField:a.field}));const n=await r.store.rows(e).find();this.previewRows=n.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,r)=>r!==e)}moveColumn(e,t){const r=e+t;if(r<0||r>=this.columns.length)return;const i=[...this.columns],[n]=i.splice(e,1);i.splice(r,0,n),this.columns=i}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,r){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientY<i.top+i.height/2;this.dropTargetIdx=t,this.dropEdge=n?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const r=this.dragSrcIdx,i=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,r===null||r===t||!i)return;const n=[...this.columns],[a]=n.splice(r,1);let l=t+(r<t?-1:0);i==="after"&&(l+=1),n.splice(l,0,a),this.columns=n}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((r,i)=>i===e?{...r,...t}:r)}async editScript(e){const t=rn.instance;if(!t)return;const r=this.columns[e];if(!r)return;const i=await t.open(r.script??"",r.label||r.field);i!==null&&this.patchColumn(e,{script:i.trim()?i:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const r=new Set;for(const a of this.columns){const l=a.field.trim();if(!l){this.errorMsg="Column field names cannot be empty.";return}if(r.has(l)){this.errorMsg=`Duplicate column field: ${l}`;return}r.add(l)}const i=await ye(),n=this.columns.map(a=>{const l={field:a.field.trim(),label:a.label.trim()||a.field.trim(),type:a.type};return a.renderer&&(l.renderer=a.renderer),a.script&&(l.script=a.script),a.max!=null&&a.max>0&&(l.max=a.max),a.unique&&(l.unique=!0),a.notnull&&(l.notnull=!0),a.hidden&&(l.hidden=!0),l});if(this.mode==="edit"&&this.editTableId){const a=this.editTableId,l=await i.store.tables.findOne(a),u=new Map((l?.columns??[]).map(y=>[y.field,y])),h=n.filter(y=>{const k=u.get(y.field);return y.unique&&!k?.unique||y.notnull&&!k?.notnull||y.max&&y.max>0&&y.max!==k?.max});if(h.length>0){const y=await i.store.rows(a).find(),k=Mf(h,y);if(k.length>0){this.errorMsg=`Cannot save: ${k.length} existing ${k.length===1?"row violates":"rows violate"} the new constraints.
${k.slice(0,5).join(`
`)}${k.length>5?`
…and ${k.length-5} more.`:""}`;return}}await i.store.tables.patch(a,{name:t,columns:n,updatedAt:Date.now()})}else await i.store.tables.insert({id:Uf(),workspaceId:i.workspaceId,name:t,code:Nf(t),columns:n,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return z`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=new Map;for(const t of this.columns){if(!t.unique)continue;const r=new Set,i=new Set;for(const n of this.previewRows){const a=n.data[t.field];a==null||a===""||(r.has(a)&&i.add(a),r.add(a))}e.set(t.field,i)}return z`
      <div class="preview">
        <h3>Live preview — first ${this.previewRows.length} row${this.previewRows.length===1?"":"s"}</h3>
        <table>
          <thead>
            <tr>
              ${this.columns.map(t=>z`<th title=${t.field}>${t.label||t.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.previewRows.map(t=>z`
                <tr>
                  ${this.columns.map(r=>{const i=t.data[r.field],n=Bf(r,i,e.get(r.field));return z`<td
                      class=${n?"violation":""}
                      title=${n??""}
                    >${Lf(i)}</td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}renameDetected(){return this.mode==="edit"&&this.columns.some(e=>e.origField&&e.origField!==e.field.trim())}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return z`
      <dialog @cancel=${this.close} @keydown=${Cn}>
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
            ${this.columns.map((r,i)=>{const n=this.dragSrcIdx===i,a=this.dropTargetIdx===i,l=a&&this.dropEdge==="before"?" drop-before":a&&this.dropEdge==="after"?" drop-after":"";return z`
                <div
                  class=${`col-row${n?" drag-source":""}${l}`}
                  @dragover=${u=>this.onRowDragOver(u,i,u.currentTarget)}
                  @dragleave=${()=>this.onRowDragLeave(i)}
                  @drop=${u=>this.onRowDrop(u,i)}
                >
                  <span
                    class="drag-handle"
                    title="Drag to reorder"
                    draggable="true"
                    @dragstart=${u=>this.onRowDragStart(u,i)}
                    @dragend=${()=>this.onRowDragEnd()}
                  >
                    <span class="mi sm">drag_indicator</span>
                  </span>
                  <input
                    type="text"
                    .value=${r.field}
                    @input=${u=>this.patchColumn(i,{field:u.target.value})}
                  />
                  <input
                    type="text"
                    .value=${r.label}
                    @input=${u=>this.patchColumn(i,{label:u.target.value})}
                  />
                  <select
                    .value=${r.type}
                    @change=${u=>this.patchColumn(i,{type:u.target.value})}
                  >
                    ${zf.map(u=>z`<option value=${u} ?selected=${u===r.type}>${u}</option>`)}
                  </select>
                  <select
                    title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                    .value=${r.renderer??""}
                    @change=${u=>{const h=u.target.value;this.patchColumn(i,{renderer:h||void 0})}}
                  >
                    <option value="" ?selected=${!r.renderer}>— none —</option>
                    ${this.rendererOptions.map(u=>z`<option value=${u} ?selected=${u===r.renderer}>${u}</option>`)}
                  </select>
                  ${r.renderer==="script"?z`<button
                        type="button"
                        class="icon-btn"
                        title="Edit JS render(row)"
                        @click=${()=>this.editScript(i)}
                      >
                        <span class="mi sm">edit</span>
                      </button>`:z`<span></span>`}
                  <input
                    type="number"
                    min="0"
                    placeholder="—"
                    title="Max length (strings) or max value (numbers)"
                    .value=${r.max==null?"":String(r.max)}
                    @input=${u=>{const h=u.target.value;this.patchColumn(i,{max:h===""?void 0:Number(h)})}}
                  />
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Unique"
                      .checked=${!!r.unique}
                      @change=${u=>this.patchColumn(i,{unique:u.target.checked})}
                    />
                  </span>
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Not null"
                      .checked=${!!r.notnull}
                      @change=${u=>this.patchColumn(i,{notnull:u.target.checked})}
                    />
                  </span>
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Visible — uncheck to hide the column without losing its data"
                      .checked=${!r.hidden}
                      @change=${u=>this.patchColumn(i,{hidden:!u.target.checked})}
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

          ${this.renameDetected()?z`<div class="hint">
                Renamed fields will appear empty for existing rows — the row data
                isn't migrated automatically.
              </div>`:""}
          ${this.errorMsg?z`<div class="error">${this.errorMsg}</div>`:""}
          ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};jt.styles=[on,Vt,Qe`
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
  `];Qt([H()],jt.prototype,"mode",2);Qt([H()],jt.prototype,"editTableId",2);Qt([H()],jt.prototype,"name",2);Qt([H()],jt.prototype,"columns",2);Qt([H()],jt.prototype,"errorMsg",2);Qt([H()],jt.prototype,"dragSrcIdx",2);Qt([H()],jt.prototype,"dropTargetIdx",2);Qt([H()],jt.prototype,"dropEdge",2);Qt([H()],jt.prototype,"previewRows",2);Qt([H()],jt.prototype,"rendererOptions",2);jt=Qt([et("new-table-dialog")],jt);function Lf(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function Bf(e,t,r){const i=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&i)return`${e.label}: empty`;if(i)return null;if(e.type==="number"&&typeof t!="number"){const n=Number(t);if(!Number.isFinite(n))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!i){const n=new Date(String(t));if(Number.isNaN(n.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&r?.has(t)?`${e.label}: duplicate`:null}function Mf(e,t){const r=[];for(const i of e)if(i.notnull&&t.forEach((n,a)=>{const l=n.data[i.field];(l==null||typeof l=="string"&&l.trim()==="")&&r.push(`Row ${a+1}: ${i.label} is empty.`)}),i.max!=null&&i.max>0&&t.forEach((n,a)=>{const l=n.data[i.field];typeof l=="string"&&l.length>i.max?r.push(`Row ${a+1}: ${i.label} length ${l.length} > max ${i.max}.`):typeof l=="number"&&l>i.max&&r.push(`Row ${a+1}: ${i.label} value ${l} > max ${i.max}.`)}),i.unique){const n=new Map;t.forEach((a,l)=>{const u=a.data[i.field];u==null||u===""||(n.has(u)?r.push(`Row ${l+1}: ${i.label} duplicates row ${n.get(u)+1} ("${String(u)}").`):n.set(u,l))})}return r}function Nf(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Uf(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var qf=Object.defineProperty,Hf=Object.getOwnPropertyDescriptor,Mt=(e,t,r,i)=>{for(var n=i>1?void 0:i?Hf(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&qf(t,r,n),n};let Ct=class extends Me{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.builtinNames=[],this.optionalBuiltins=[],this.dirtyBuiltins=!1,this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Yt(this.dialogEl,e)}async open(){const e=await ye(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const r=await e.store.plugins.find();this.records=new Map(r.map(a=>[a.url,a]));const i=[],n=[];for(const a of wf){const l=a.meta?.name;if(l)if(a.meta?.optional){const u=this.records.get(gs(l));n.push({name:l,...a.meta?.description?{description:a.meta.description}:{},...a.meta?.author?{author:a.meta.author}:{},enabled:u?.enabled!==!1})}else i.push(l)}this.builtinNames=i,this.optionalBuiltins=n,this.dirtyBuiltins=!1,this.addUrl="",await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(),this.refreshServerRegistry()}async refreshCatalog(){const e=new URL("/plugins/catalog.json",location.origin).toString();try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json(),i=Array.isArray(r.plugins)?r.plugins:[];this.catalog=i.map(n=>({...n,absUrl:new URL(n.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const r=(await(await ye()).store.settings.findOne("server-sync:url"))?.value;if(typeof r!="string"||r.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const n=`${r.replace(/\/+$/,"")}/plugins/registry`;try{const a=await fetch(n,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);const l=await a.json(),u=Array.isArray(l.plugins)?l.plugins:[];this.serverCatalog=u.map(h=>({...h,absUrl:new URL(h.url,n).toString()})),this.serverCatalogError=null}catch(a){this.serverCatalog=[],this.serverCatalogError=a.message}}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await ye()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const r=await ye();await r.store.workspaces.patch(r.workspaceId,{pluginUrls:this.urls}),await r.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const r=await ye(),i=this.records.get(e);await r.store.plugins.upsert({...i??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...i,url:e,enabled:t,lastFetched:i?.lastFetched??0}))}async removePlugin(e){const t=await ye();this.urls=this.urls.filter(r=>r!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const r=await ye(),i=gs(e),n=this.records.get(i);await r.store.plugins.upsert({...n??{url:i,lastFetched:0},url:i,enabled:t,lastFetched:n?.lastFetched??0}),this.optionalBuiltins=this.optionalBuiltins.map(a=>a.name===e?{...a,enabled:t}:a),this.dirtyBuiltins=!0}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await ye();try{const r=await fetch(e.absUrl,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const i=await r.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:i});const n=new Blob([i],{type:"text/javascript"}),a=URL.createObjectURL(n);try{const u=await import(a);await u.init?.(t.api),await u.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(a),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const l=await t.store.plugins.find();this.records=new Map(l.map(u=>[u.url,u])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(r){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${r.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${r.message}`,{kind:"error",title:"Plugin error"})}finally{const r=new Set(this.installing);r.delete(e.absUrl),this.installing=r}}render(){return z`
      <dialog @cancel=${this.close} @keydown=${Cn}>
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
            ${this.catalog.length>0?z`<div class="section-h">Available from this host</div>`:""}
            ${this.catalog.map(e=>{const t=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return z`
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
            ${this.catalogError?z`<div class="meta err">
                  Host catalog unavailable: ${this.catalogError}
                </div>`:""}

            ${this.serverCatalog.length>0||this.serverCatalogError?z`<div class="section-h">From server</div>`:""}
            ${this.serverCatalog.map(e=>{const t=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return z`
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
            ${this.serverCatalogError?z`<div class="meta err">
                  Server registry unavailable: ${this.serverCatalogError}
                </div>`:""}

            ${this.optionalBuiltins.length>0?z`<div class="section-h">Optional built-ins</div>`:""}
            ${this.optionalBuiltins.map(e=>z`
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
            ${this.builtinNames.map(e=>z`
                <div class="row builtin">
                  <span class="mi sm">extension</span>
                  <div>
                    <div>${e}</div>
                    <div class="meta">Built-in</div>
                  </div>
                  <span class="meta">always on</span>
                </div>
              `)}

            ${this.urls.length>0?z`<div class="section-h">Installed (by URL)</div>`:""}
            ${this.urls.map(e=>{const t=this.records.get(e),r=t?.lastError?" error":"",i=t?.lastFetched?new Date(t.lastFetched).toLocaleString():"never";return z`
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
    `}};Ct.styles=[on,Vt,Qe`
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
    `];Mt([H()],Ct.prototype,"urls",2);Mt([H()],Ct.prototype,"records",2);Mt([H()],Ct.prototype,"addUrl",2);Mt([H()],Ct.prototype,"builtinNames",2);Mt([H()],Ct.prototype,"optionalBuiltins",2);Mt([H()],Ct.prototype,"dirtyBuiltins",2);Mt([H()],Ct.prototype,"catalog",2);Mt([H()],Ct.prototype,"catalogError",2);Mt([H()],Ct.prototype,"serverCatalog",2);Mt([H()],Ct.prototype,"serverCatalogError",2);Mt([H()],Ct.prototype,"installing",2);Ct=Mt([et("plugin-manager-dialog")],Ct);/**
 * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu
 * @version v4.16.1
 * @homepage https://jspanel.de/
 * @license MIT
 * @author Stefan Sträßer - info@jspanel.de
 * @author of dialog extension: Michael Daumling - michael@terrapinlogo.com
 * @github https://github.com/Flyer53/jsPanel4.git
 */let O={version:"4.16.1",date:"2022-11-03 09:18",ajaxAlwaysCallbacks:[],autopositionSpacing:4,closeOnEscape:(()=>{document.addEventListener("keydown",e=>{(e.key==="Escape"||e.code==="Escape"||e.key==="Esc")&&O.getPanels(t=>t.classList.contains("jsPanel")).some(t=>t.options.closeOnEscape?typeof t.options.closeOnEscape=="function"?t.options.closeOnEscape.call(t,t):(t.close(null,!0),!0):!1)},!1)})(),defaults:{boxShadow:3,container:"window",contentSize:{width:"400px",height:"200px"},dragit:{cursor:"move",handles:".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",opacity:.8,disableOnMaximized:!0},header:!0,headerTitle:"jsPanel",headerControls:{size:"md"},iconfont:void 0,maximizedMargin:0,minimizeTo:"default",paneltype:"standard",position:{my:"center",at:"center"},resizeit:{handles:"n, e, s, w, ne, se, sw, nw",minWidth:128,minHeight:38},theme:"default"},defaultAutocloseConfig:{time:"8s",progressbar:!0},defaultSnapConfig:{sensitivity:70,trigger:"panel",active:"both"},extensions:{},globalCallbacks:!1,icons:{close:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>',maximize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>',normalize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>',minimize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>',smallify:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>'},idCounter:0,isIE:document.documentMode||!1,pointerdown:"onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],pointermove:"onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],pointerup:"onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"],polyfills:(()=>{Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e==null)throw new TypeError("Cannot convert first argument to object");let t=Object(e);for(let r=1;r<arguments.length;r++){let i=arguments[r];if(i==null)continue;i=Object(i);let n=Object.keys(Object(i));for(let a=0,l=n.length;a<l;a++){let u=n[a],h=Object.getOwnPropertyDescriptor(i,u);h!==void 0&&h.enumerable&&(t[u]=i[u])}}return t}}),Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),r=t.length,i=new Array(r);r--;)i[r]=[t[r],e[t[r]]];return i}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(let r=0;r<this.length;r++)e.call(t,this[r],r,this)}),(function(e){e.forEach(function(t){t.append=t.append||function(){let r=Array.prototype.slice.call(arguments),i=document.createDocumentFragment();r.forEach(function(n){let a=n instanceof Node;i.appendChild(a?n:document.createTextNode(String(n)))}),this.appendChild(i)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){let t=(this.document||this.ownerDocument).querySelectorAll(e),r,i=this;do for(r=t.length;--r>=0&&t.item(r)!==i;);while(r<0&&(i=i.parentElement));return i}),(function(){if(typeof window.CustomEvent=="function")return!1;function e(t,r){r=r||{bubbles:!1,cancelable:!1,detail:void 0};let i=document.createEvent("CustomEvent");return i.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),i}e.prototype=window.Event.prototype,window.CustomEvent=e})(),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(t===void 0||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var r=t>0?t|0:0;return this.substring(r,r+e.length)===e}}),String.prototype.includes||(String.prototype.includes=function(e,t){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return t===void 0&&(t=0),this.indexOf(e,t)!==-1}),String.prototype.repeat||(String.prototype.repeat=function(e){if(this==null)throw new TypeError("can't convert "+this+" to object");var t=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),t.length==0||e==0)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,r-t.length),t}),Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw new TypeError('"this" is null or not defined');let r=Object(this),i=r.length>>>0;if(i===0)return!1;let n=t|0,a=Math.max(n>=0?n:i-Math.abs(n),0);function l(u,h){return u===h||typeof u=="number"&&typeof h=="number"&&isNaN(u)&&isNaN(h)}for(;a<i;){if(l(r[a],e))return!0;a++}return!1}})})(),ziBase:100,colorFilledLight:.81,colorFilledDark:.08,colorFilled:0,colorBrightnessThreshold:.55,colorNames:{default:"b0bec5",secondary:"b0bec5",primary:"01579b",info:"039be5",success:"2e7d32",warning:"f57f17",danger:"dd2c00",light:"e0e0e0",dark:"263238",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",grey50:"fafafa",grey100:"f5f5f5",grey200:"eeeeee",grey300:"e0e0e0",grey400:"bdbdbd",grey500:"9e9e9e",grey600:"757575",grey700:"616161",grey800:"424242",grey900:"212121",gray50:"fafafa",gray100:"f5f5f5",gray200:"eeeeee",gray300:"e0e0e0",gray400:"bdbdbd",gray500:"9e9e9e",gray600:"757575",gray700:"616161",gray800:"424242",gray900:"212121",bluegrey50:"eceff1",bluegrey100:"CFD8DC",bluegrey200:"B0BEC5",bluegrey300:"90A4AE",bluegrey400:"78909C",bluegrey500:"607D8B",bluegrey600:"546E7A",bluegrey700:"455A64",bluegrey800:"37474F",bluegrey900:"263238",bluegray50:"eceff1",bluegray100:"CFD8DC",bluegray200:"B0BEC5",bluegray300:"90A4AE",bluegray400:"78909C",bluegray500:"607D8B",bluegray600:"546E7A",bluegray700:"455A64",bluegray800:"37474F",bluegray900:"263238",red50:"FFEBEE",red100:"FFCDD2",red200:"EF9A9A",red300:"E57373",red400:"EF5350",red500:"F44336",red600:"E53935",red700:"D32F2F",red800:"C62828",red900:"B71C1C",reda100:"FF8A80",reda200:"FF5252",reda400:"FF1744",reda700:"D50000",pink50:"FCE4EC",pink100:"F8BBD0",pink200:"F48FB1",pink300:"F06292",pink400:"EC407A",pink500:"E91E63",pink600:"D81B60",pink700:"C2185B",pink800:"AD1457",pink900:"880E4F",pinka100:"FF80AB",pinka200:"FF4081",pinka400:"F50057",pinka700:"C51162",purple50:"F3E5F5",purple100:"E1BEE7",purple200:"CE93D8",purple300:"BA68C8",purple400:"AB47BC",purple500:"9C27B0",purple600:"8E24AA",purple700:"7B1FA2",purple800:"6A1B9A",purple900:"4A148C",purplea100:"EA80FC",purplea200:"E040FB",purplea400:"D500F9",purplea700:"AA00FF",deeppurple50:"EDE7F6",deeppurple100:"D1C4E9",deeppurple200:"B39DDB",deeppurple300:"9575CD",deeppurple400:"7E57C2",deeppurple500:"673AB7",deeppurple600:"5E35B1",deeppurple700:"512DA8",deeppurple800:"4527A0",deeppurple900:"311B92",deeppurplea100:"B388FF",deeppurplea200:"7C4DFF",deeppurplea400:"651FFF",deeppurplea700:"6200EA",indigo50:"E8EAF6",indigo100:"C5CAE9",indigo200:"9FA8DA",indigo300:"7986CB",indigo400:"5C6BC0",indigo500:"3F51B5",indigo600:"3949AB",indigo700:"303F9F",indigo800:"283593",indigo900:"1A237E",indigoa100:"8C9EFF",indigoa200:"536DFE",indigoa400:"3D5AFE",indigoa700:"304FFE",blue50:"E3F2FD",blue100:"BBDEFB",blue200:"90CAF9",blue300:"64B5F6",blue400:"42A5F5",blue500:"2196F3",blue600:"1E88E5",blue700:"1976D2",blue800:"1565C0",blue900:"0D47A1",bluea100:"82B1FF",bluea200:"448AFF",bluea400:"2979FF",bluea700:"2962FF",lightblue50:"E1F5FE",lightblue100:"B3E5FC",lightblue200:"81D4FA",lightblue300:"4FC3F7",lightblue400:"29B6F6",lightblue500:"03A9F4",lightblue600:"039BE5",lightblue700:"0288D1",lightblue800:"0277BD",lightblue900:"01579B",lightbluea100:"80D8FF",lightbluea200:"40C4FF",lightbluea400:"00B0FF",lightbluea700:"0091EA",cyan50:"E0F7FA",cyan100:"B2EBF2",cyan200:"80DEEA",cyan300:"4DD0E1",cyan400:"26C6DA",cyan500:"00BCD4",cyan600:"00ACC1",cyan700:"0097A7",cyan800:"00838F",cyan900:"006064",cyana100:"84FFFF",cyana200:"18FFFF",cyana400:"00E5FF",cyana700:"00B8D4",teal50:"E0F2F1",teal100:"B2DFDB",teal200:"80CBC4",teal300:"4DB6AC",teal400:"26A69A",teal500:"009688",teal600:"00897B",teal700:"00796B",teal800:"00695C",teal900:"004D40",teala100:"A7FFEB",teala200:"64FFDA",teala400:"1DE9B6",teala700:"00BFA5",green50:"E8F5E9",green100:"C8E6C9",green200:"A5D6A7",green300:"81C784",green400:"66BB6A",green500:"4CAF50",green600:"43A047",green700:"388E3C",green800:"2E7D32",green900:"1B5E20",greena100:"B9F6CA",greena200:"69F0AE",greena400:"00E676",greena700:"00C853",lightgreen50:"F1F8E9",lightgreen100:"DCEDC8",lightgreen200:"C5E1A5",lightgreen300:"AED581",lightgreen400:"9CCC65",lightgreen500:"8BC34A",lightgreen600:"7CB342",lightgreen700:"689F38",lightgreen800:"558B2F",lightgreen900:"33691E",lightgreena100:"CCFF90",lightgreena200:"B2FF59",lightgreena400:"76FF03",lightgreena700:"64DD17",lime50:"F9FBE7",lime100:"F0F4C3",lime200:"E6EE9C",lime300:"DCE775",lime400:"D4E157",lime500:"CDDC39",lime600:"C0CA33",lime700:"AFB42B",lime800:"9E9D24",lime900:"827717",limea100:"F4FF81",limea200:"EEFF41",limea400:"C6FF00",limea700:"AEEA00",yellow50:"FFFDE7",yellow100:"FFF9C4",yellow200:"FFF59D",yellow300:"FFF176",yellow400:"FFEE58",yellow500:"FFEB3B",yellow600:"FDD835",yellow700:"FBC02D",yellow800:"F9A825",yellow900:"F57F17",yellowa100:"FFFF8D",yellowa200:"FFFF00",yellowa400:"FFEA00",yellowa700:"FFD600",amber50:"FFF8E1",amber100:"FFECB3",amber200:"FFE082",amber300:"FFD54F",amber400:"FFCA28",amber500:"FFC107",amber600:"FFB300",amber700:"FFA000",amber800:"FF8F00",amber900:"FF6F00",ambera100:"FFE57F",ambera200:"FFD740",ambera400:"FFC400",ambera700:"FFAB00",orange50:"FFF3E0",orange100:"FFE0B2",orange200:"FFCC80",orange300:"FFB74D",orange400:"FFA726",orange500:"FF9800",orange600:"FB8C00",orange700:"F57C00",orange800:"EF6C00",orange900:"E65100",orangea100:"FFD180",orangea200:"FFAB40",orangea400:"FF9100",orangea700:"FF6D00",deeporange50:"FBE9E7",deeporange100:"FFCCBC",deeporange200:"FFAB91",deeporange300:"FF8A65",deeporange400:"FF7043",deeporange500:"FF5722",deeporange600:"F4511E",deeporange700:"E64A19",deeporange800:"D84315",deeporange900:"BF360C",deeporangea100:"FF9E80",deeporangea200:"FF6E40",deeporangea400:"FF3D00",deeporangea700:"DD2C00",brown50:"EFEBE9",brown100:"D7CCC8",brown200:"BCAAA4",brown300:"A1887F",brown400:"8D6E63",brown500:"795548",brown600:"6D4C41",brown700:"5D4037",brown800:"4E342E",brown900:"3E2723","mdb-default":"2BBBAD","mdb-default-dark":"00695c","mdb-primary":"4285F4","mdb-primary-dark":"0d47a1","mdb-secondary":"aa66cc","mdb-secondary-dark":"9933CC","mdb-danger":"ff4444","mdb-danger-dark":"CC0000","mdb-warning":"ffbb33","mdb-warning-dark":"FF8800","mdb-success":"00C851","mdb-success-dark":"007E33","mdb-info":"33b5e5","mdb-info-dark":"0099CC","mdb-elegant":"2E2E2E","mdb-elegant-dark":"212121","mdb-stylish":"4B515D","mdb-stylish-dark":"3E4551","mdb-unique":"3F729B","mdb-unique-dark":"1C2331","mdb-special":"37474F","mdb-special-dark":"263238"},errorReporting:1,modifier:!1,helper:(()=>{document.addEventListener("keydown",e=>O.modifier=e),document.addEventListener("keyup",()=>O.modifier=!1)})(),usePointerEvents(e=!0){e?(this.pointerdown="onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"]):(this.pointerdown="ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="ontouchend"in window?["touchend","mouseup"]:["mouseup"])},pOcontainer(e){if(e==="window")return document.body;if(typeof e=="string"){let t=document.querySelectorAll(e);return t.length&&t.length>0?t:!1}else{if(e.nodeType===1)return e;if(e.length)return e[0]}return!1},pOcontainment(e){let t=e;if(typeof e=="function"&&(t=e()),typeof t=="number")return[t,t,t,t];if(Array.isArray(t)){if(t.length===1)return[t[0],t[0],t[0],t[0]];if(t.length===2)return t.concat(t);t.length===3&&(t[3]=t[1])}return t},pOsize(e,t){let r=t||this.defaults.contentSize;const i=e.parentElement;if(typeof r=="string"){const n=r.trim().split(" ");r={},r.width=n[0],n.length===2?r.height=n[1]:r.height=n[0]}else r.width&&!r.height?r.height=r.width:r.height&&!r.width&&(r.width=r.height);if(String(r.width).match(/^[\d.]+$/gi))r.width+="px";else if(typeof r.width=="string"&&r.width.endsWith("%"))if(i===document.body)r.width=window.innerWidth*(parseFloat(r.width)/100)+"px";else{const n=window.getComputedStyle(i),a=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth);r.width=(parseFloat(n.width)-a)*(parseFloat(r.width)/100)+"px"}else typeof r.width=="function"&&(r.width=r.width.call(e,e),(typeof r.width=="number"||typeof r.width=="string"&&r.width.match(/^[\d.]+$/gi))&&(r.width+="px"));if(String(r.height).match(/^[\d.]+$/gi))r.height+="px";else if(typeof r.height=="string"&&r.height.endsWith("%"))if(i===document.body)r.height=window.innerHeight*(parseFloat(r.height)/100)+"px";else{const n=window.getComputedStyle(i),a=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth);r.height=(parseFloat(n.height)-a)*(parseFloat(r.height)/100)+"px"}else typeof r.height=="function"&&(r.height=r.height.call(e,e),(typeof r.height=="number"||typeof r.height=="string"&&r.height.match(/^[\d.]+$/gi))&&(r.height+="px"));return r},pOborder(e){let t=[],r=e.trim().replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," ").split(" ");return r.forEach((i,n)=>{(i.startsWith("--")||i.startsWith("var"))&&(r[n]=O.getCssVariableValue(i))}),r.forEach(i=>{O.colorNames[i]?t[2]="#"+O.colorNames[i]:i.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/)?t[1]=i:i.match(/(thin|medium|thick)|(\d*\.?\d*(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vmax|vmin|vb|vi|px|cm|mm|Q|in|pc|pt))/)?t[0]=i:t[2]=i}),t[0]||(t[0]="medium"),t[1]||(t[1]="solid"),t[2]||(t[2]=""),t},pOheaderControls(e){if(typeof e=="string"){let t={},r=e.toLowerCase(),i=r.match(/xl|lg|md|sm|xs/),n=r.match(/closeonly|none/);return i&&(t.size=i[0]),n&&(t=Object.assign({},t,{maximize:"remove",normalize:"remove",minimize:"remove",smallify:"remove"}),n[0]==="none"&&(t.close="remove")),Object.assign({},this.defaults.headerControls,t)}else return Object.assign({},this.defaults.headerControls,e)},pOtheme(e){e=e.trim();let t,r="";if(e.match(/^(rgb|hsl|var)/)){let i=e.indexOf(")");t=e.slice(0,i+1).replace(/\s+/g,""),t.startsWith("var")&&(t=O.getCssVariableValue(t)),r=e.slice(i+1,e.length).trim()}else if(e.match(/^(#|\w|--)/)){let i=e.indexOf(" ");i>0?(t=e.slice(0,i+1).replace(/\s+/g,""),r=e.slice(i+1,e.length).trim()):t=e,t.startsWith("--")&&(t=O.getCssVariableValue(t))}if(t.match(/^([\da-f]{3}|[\da-f]{6})$/gi)&&(t="#"+t),r.startsWith("fillcolor")){let i=r.indexOf(" ");r=r.slice(i+1,r.length).trim().replace(/\s+/g,""),r.match(/^([\da-f]{3}|[\da-f]{6})$/gi)?r="#"+r:O.colorNames[r]?r="#"+O.colorNames[r]:r.match(/^(--|var)/)?r=O.getCssVariableValue(r):r="#fff"}return{color:t,colors:!1,filling:r}},color(e){let t=e.toLowerCase(),r,i,n,a,l,u,h,y,k,x={};const I=/^#?([\da-f]{3}|[\da-f]{6})$/gi,V=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,L=/^hsla?\((\d{1,3}),(\d{1,3}%),(\d{1,3}%),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,N=this.colorNames;return N[t]&&(t=N[t]),t.match(I)!==null?(t=t.replace("#",""),t.length%2===1?(r=t.slice(0,1).repeat(2),i=t.slice(1,2).repeat(2),n=t.slice(2,3).repeat(2),x.rgb={r:parseInt(r,16),g:parseInt(i,16),b:parseInt(n,16)},x.hex=`#${r}${i}${n}`):(x.rgb={r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)},x.hex=`#${t}`),k=this.rgbToHsl(x.rgb.r,x.rgb.g,x.rgb.b),x.hsl=k,x.rgb.css=`rgb(${x.rgb.r},${x.rgb.g},${x.rgb.b})`):t.match(V)?(h=V.exec(t),x.rgb={css:t,r:h[1],g:h[2],b:h[3]},x.hex=this.rgbToHex(h[1],h[2],h[3]),k=this.rgbToHsl(h[1],h[2],h[3]),x.hsl=k):t.match(L)?(h=L.exec(t),a=h[1]/360,l=h[2].slice(0,h[2].length-1)/100,u=h[3].slice(0,h[3].length-1)/100,y=this.hslToRgb(a,l,u),x.rgb={css:`rgb(${y[0]},${y[1]},${y[2]})`,r:y[0],g:y[1],b:y[2]},x.hex=this.rgbToHex(x.rgb.r,x.rgb.g,x.rgb.b),x.hsl={css:`hsl(${h[1]},${h[2]},${h[3]})`,h:h[1],s:h[2],l:h[3]}):(x.hex="#f5f5f5",x.rgb={css:"rgb(245,245,245)",r:245,g:245,b:245},x.hsl={css:"hsl(0,0%,96%)",h:0,s:"0%",l:"96%"}),x},calcColors(e){const t=this.colorBrightnessThreshold,r=this.color(e),i=this.lighten(e,this.colorFilledLight),n=this.darken(e,this.colorFilled),a=this.perceivedBrightness(e)<=t?"#ffffff":"#000000",l=this.perceivedBrightness(i)<=t?"#ffffff":"#000000",u=this.perceivedBrightness(n)<=t?"#ffffff":"#000000",h=this.lighten(e,this.colorFilledDark),y=this.perceivedBrightness(h)<=t?"#ffffff":"#000000";return[r.hsl.css,i,n,a,l,u,h,y]},darken(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i-i*t)+"%";return`hsl(${r.h},${r.s},${n})`},lighten(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i+(100-i)*t)+"%";return`hsl(${r.h},${r.s},${n})`},hslToRgb(e,t,r){let i,n,a;if(t===0)i=n=a=r;else{let l=(y,k,x)=>(x<0&&(x+=1),x>1&&(x-=1),x<.16666666666666666?y+(k-y)*6*x:x<.5?k:x<.6666666666666666?y+(k-y)*(.6666666666666666-x)*6:y),u=r<.5?r*(1+t):r+t-r*t,h=2*r-u;i=l(h,u,e+1/3),n=l(h,u,e),a=l(h,u,e-1/3)}return[Math.round(i*255),Math.round(n*255),Math.round(a*255)]},rgbToHsl(e,t,r){e/=255,t/=255,r/=255;let i=Math.max(e,t,r),n=Math.min(e,t,r),a,l,u=(i+n)/2;if(i===n)a=l=0;else{let h=i-n;switch(l=u>.5?h/(2-i-n):h/(i+n),i){case e:a=(t-r)/h+(t<r?6:0);break;case t:a=(r-e)/h+2;break;case r:a=(e-t)/h+4;break}a/=6}return a=Math.round(a*360),l=Math.round(l*100)+"%",u=Math.round(u*100)+"%",{css:"hsl("+a+","+l+","+u+")",h:a,s:l,l:u}},rgbToHex(e,t,r){let i=Number(e).toString(16),n=Number(t).toString(16),a=Number(r).toString(16);return i.length===1&&(i=`0${i}`),n.length===1&&(n=`0${n}`),a.length===1&&(a=`0${a}`),`#${i}${n}${a}`},perceivedBrightness(e){const t=this.color(e).rgb;return t.r/255*.2126+t.g/255*.7152+t.b/255*.0722},pOposition(e){let t={},r=e.trim().split(/\s+/),i=r.filter(l=>l.match(/^(down|right|up|left)$/i));i.length&&(t.autoposition=i[0],r.splice(r.indexOf(i[0]),1));let n=r.filter(l=>l.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i));n.length?(t.my=n[0],t.at=n[1]||n[0],r.splice(r.indexOf(n[0]),1),n[1]&&r.splice(r.indexOf(n[1]),1)):(t.my="center",t.at="center");let a=r.filter(l=>l.match(/^[+-]?\d*\.?\d+[a-z%]*$/i));return a.length&&(t.offsetX=a[0].match(/^[+-]?\d*\.?\d+$/i)?`${a[0]}px`:a[0],a[1]?t.offsetY=a[1].match(/^[+-]?\d*\.?\d+$/i)?`${a[1]}px`:a[1]:t.offsetY=t.offsetX,r.splice(r.indexOf(a[0]),1),a[1]&&r.splice(r.indexOf(a[1]),1)),r.length&&(t.of=r.join(" ")),t},position(e,t){if(!t)return e.style.opacity=1,e;typeof t=="string"?t=Object.assign({},this.defaults.position,this.pOposition(t)):t=Object.assign({},this.defaults.position,t),["my","at","of"].forEach(N=>{typeof t[N]=="function"&&(t[N]=t[N].call(e,e))}),e.options.container==="window"&&(e.style.position="fixed"),typeof e=="string"?e=document.querySelector(e):Object.getPrototypeOf(e).jquery&&(e=e[0]);const r=e.options.container==="window"?"window":e.parentElement,i=e.getBoundingClientRect(),n=e.parentElement.getBoundingClientRect(),a=r==="window"?{left:0,top:0,width:document.documentElement.clientWidth,height:window.innerHeight}:{width:n.width,height:n.height,left:n.left,top:n.top},l=r==="window"?{x:1,y:1}:{x:a.width/r.offsetWidth,y:a.height/r.offsetHeight},u=r==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:window.getComputedStyle(r);a.width-=(parseFloat(u.borderLeftWidth)+parseFloat(u.borderRightWidth))*l.x,a.height-=(parseFloat(u.borderTopWidth)+parseFloat(u.borderBottomWidth))*l.y;let h;t.of?typeof t.of=="string"?h=t.of==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:document.querySelector(t.of).getBoundingClientRect():Object.getPrototypeOf(t.of).jquery?h=t.of[0].getBoundingClientRect():h=t.of.getBoundingClientRect():h=a;let y=this.getScrollbarWidth(document.body),k=this.getScrollbarWidth(e.parentElement),x="0px";t.my.startsWith("left-")?t.at.startsWith("left-")?t.of?x=h.left-a.left-parseFloat(u.borderLeftWidth)+"px":x="0px":t.at.startsWith("center")?t.of?x=h.left-a.left-parseFloat(u.borderLeftWidth)+h.width/2+"px":x=a.width/2+"px":t.at.startsWith("right-")&&(t.of?x=h.left-a.left-parseFloat(u.borderLeftWidth)+h.width+"px":x=a.width+"px"):t.my.startsWith("center")?t.at.startsWith("left-")?t.of?x=h.left-a.left-parseFloat(u.borderLeftWidth)-i.width/2+"px":x=-i.width/2+"px":t.at.startsWith("center")?t.of?x=h.left-a.left-parseFloat(u.borderLeftWidth)-(i.width-h.width)/2+"px":x=a.width/2-i.width/2+"px":t.at.startsWith("right-")&&(t.of?x=h.left-a.left-parseFloat(u.borderLeftWidth)+(h.width-i.width/2)+"px":x=a.width-i.width/2+"px"):t.my.startsWith("right-")&&(t.at.startsWith("left-")?t.of?x=h.left-a.left-parseFloat(u.borderLeftWidth)-i.width+"px":x=-i.width+"px":t.at.startsWith("center")?t.of?x=h.left-a.left-parseFloat(u.borderLeftWidth)-i.width+h.width/2+"px":x=a.width/2-i.width+"px":t.at.startsWith("right-")&&(t.of?x=h.left-a.left-parseFloat(u.borderLeftWidth)+h.width-i.width+"px":x=a.width-i.width+"px",r!=="window"&&(x=parseFloat(x)-k.y+"px")));let I="0px";t.my.endsWith("-top")?t.at.endsWith("-top")?t.of?I=h.top-a.top-parseFloat(u.borderTopWidth)+"px":I="0px":t.at.endsWith("center")?t.of?I=h.top-a.top-parseFloat(u.borderTopWidth)+h.height/2+"px":I=a.height/2+"px":t.at.endsWith("-bottom")&&(t.of?I=h.top-a.top-parseFloat(u.borderTopWidth)+h.height+"px":I=a.height+"px"):t.my.endsWith("center")?t.at.endsWith("-top")?t.of?I=h.top-a.top-parseFloat(u.borderTopWidth)-i.height/2+"px":I=-i.height/2+"px":t.at.endsWith("center")?t.of?I=h.top-a.top-parseFloat(u.borderTopWidth)-i.height/2+h.height/2+"px":I=a.height/2-i.height/2+"px":t.at.endsWith("-bottom")&&(t.of?I=h.top-a.top-parseFloat(u.borderTopWidth)-i.height/2+h.height+"px":I=a.height-i.height/2+"px"):t.my.endsWith("-bottom")&&(t.at.endsWith("-top")?t.of?I=h.top-a.top-parseFloat(u.borderTopWidth)-i.height+"px":I=-i.height+"px":t.at.endsWith("center")?t.of?I=h.top-a.top-parseFloat(u.borderTopWidth)-i.height+h.height/2+"px":I=a.height/2-i.height+"px":t.at.endsWith("-bottom")&&(t.of?I=h.top-a.top-parseFloat(u.borderTopWidth)-i.height+h.height+"px":I=a.height-i.height+"px",r!=="window"?I=parseFloat(I)-k.x+"px":I=parseFloat(I)-y.x+"px")),e.style.left=l.x===1?x:parseFloat(x)/l.x+"px",e.style.top=l.y===1?I:parseFloat(I)/l.y+"px";let V=getComputedStyle(e),L={left:V.left,top:V.top};return t.autoposition&&t.my===t.at&&["left-top","center-top","right-top","left-bottom","center-bottom","right-bottom"].indexOf(t.my)>=0&&(L=this.applyPositionAutopos(e,L,t)),(t.offsetX||t.offsetY)&&(L=this.applyPositionOffset(e,L,t)),(t.minLeft||t.minTop||t.maxLeft||t.maxTop)&&(L=this.applyPositionMinMax(e,L,t)),t.modify&&(L=this.applyPositionModify(e,L,t)),typeof e.options.opacity=="number"?e.style.opacity=e.options.opacity:e.style.opacity=1,e},applyPositionAutopos(e,t,r){const i=`${r.my}-${r.autoposition.toLowerCase()}`;e.classList.add(i);const n=Array.prototype.slice.call(document.querySelectorAll(`.${i}`)),a=n.indexOf(e);if(n.length>1){switch(r.autoposition){case"down":n.forEach((l,u)=>{u>0&&u<=a&&(t.top=parseFloat(t.top)+n[--u].getBoundingClientRect().height+O.autopositionSpacing+"px")});break;case"up":n.forEach((l,u)=>{u>0&&u<=a&&(t.top=parseFloat(t.top)-n[--u].getBoundingClientRect().height-O.autopositionSpacing+"px")});break;case"right":n.forEach((l,u)=>{u>0&&u<=a&&(t.left=parseFloat(t.left)+n[--u].getBoundingClientRect().width+O.autopositionSpacing+"px")});break;case"left":n.forEach((l,u)=>{u>0&&u<=a&&(t.left=parseFloat(t.left)-n[--u].getBoundingClientRect().width-O.autopositionSpacing+"px")});break}e.style.left=t.left,e.style.top=t.top}return{left:t.left,top:t.top}},applyPositionOffset(e,t,r){["offsetX","offsetY"].forEach(n=>{r[n]?(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),isNaN(r[n])===!1&&(r[n]=`${r[n]}px`)):r[n]="0px"}),e.style.left=`calc(${e.style.left} + ${r.offsetX})`,e.style.top=`calc(${e.style.top} + ${r.offsetY})`;const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionMinMax(e,t,r){if(["minLeft","minTop","maxLeft","maxTop"].forEach(n=>{r[n]&&(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),(Number.isInteger(r[n])||r[n].match(/^\d+$/))&&(r[n]=`${r[n]}px`))}),r.minLeft){e.style.left=r.minLeft;let n=getComputedStyle(e).left;parseFloat(n)<parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.minTop){e.style.top=r.minTop;let n=getComputedStyle(e).top;parseFloat(n)<parseFloat(t.top)?e.style.top=t.top:t.top=n}if(r.maxLeft){e.style.left=r.maxLeft;let n=getComputedStyle(e).left;parseFloat(n)>parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.maxTop){e.style.top=r.maxTop;let n=getComputedStyle(e).top;parseFloat(n)>parseFloat(t.top)?e.style.top=t.top:t.top=n}const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionModify(e,t,r){if(r.modify&&typeof r.modify=="function"){const n=r.modify.call(t,t,r);e.style.left=Number.isInteger(n.left)||n.left.match(/^\d+$/)?`${n.left}px`:n.left,e.style.top=Number.isInteger(n.top)||n.top.match(/^\d+$/)?`${n.top}px`:n.top}const i=getComputedStyle(e);return{left:i.left,top:i.top}},autopositionRemaining(e){let t,r=e.options.container;["left-top-down","left-top-right","center-top-down","right-top-down","right-top-left","left-bottom-up","left-bottom-right","center-bottom-up","right-bottom-up","right-bottom-left"].forEach(i=>{e.classList.contains(i)&&(t=i)}),t&&(r==="window"?document.body:typeof r=="string"?document.querySelector(r):r).querySelectorAll(`.${t}`).forEach(n=>n.reposition())},getThemeDetails(e){const t=this.pOtheme(e);if(t.color.startsWith("bootstrap-")){let r=t.color.indexOf("-"),i=document.createElement("button");i.className="btn btn"+t.color.slice(r),document.body.appendChild(i),t.color=getComputedStyle(i).backgroundColor.replace(/\s+/gi,""),document.body.removeChild(i),i=void 0}return t.colors=this.calcColors(t.color),t},clearTheme(e,t){return e.content.classList.remove("jsPanel-content-filled","jsPanel-content-filledlight"),e.header.classList.remove("jsPanel-hdr-light"),e.header.classList.remove("jsPanel-hdr-dark"),e.style.backgroundColor="",this.setStyles(e.headertoolbar,{boxShadow:"",width:"",marginLeft:"",borderTopColor:"transparent"}),this.setStyles(e.content,{background:"",borderTopColor:"transparent"}),e.header.style.background="",Array.prototype.slice.call(e.controlbar.querySelectorAll(".jsPanel-icon")).concat([e.headerlogo,e.headertitle,e.headertoolbar,e.content]).forEach(r=>r.style.color=""),t&&t.call(e,e),e},applyColorTheme(e,t){if(e.style.backgroundColor=t.colors[0],e.header.style.backgroundColor=t.colors[0],e.header.style.color=t.colors[3],[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(r=>e.querySelector(r).style.color=t.colors[3]),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(r=>r.style.color=t.colors[3]),typeof e.options.theme=="string"&&t.filling==="filled"&&(e.content.style.borderTop=t.colors[3]==="#000000"?"1px solid rgba(0,0,0,0.15)":"1px solid rgba(255,255,255,0.15)"),t.colors[3]==="#000000"?e.header.classList.add("jsPanel-hdr-light"):e.header.classList.add("jsPanel-hdr-dark"),t.filling)switch(t.filling){case"filled":this.setStyles(e.content,{backgroundColor:t.colors[2],color:t.colors[3]});break;case"filledlight":e.content.style.backgroundColor=t.colors[1];break;case"filleddark":this.setStyles(e.content,{backgroundColor:t.colors[6],color:t.colors[7]});break;default:e.content.style.backgroundColor=t.filling,e.content.style.color=this.perceivedBrightness(t.filling)<=this.colorBrightnessThreshold?"#fff":"#000"}return e},applyCustomTheme(e,t){let r={bgPanel:"#ffffff",bgContent:"#ffffff",bgFooter:"#f5f5f5",colorHeader:"#000000",colorContent:"#000000",colorFooter:"#000000",border:void 0,borderRadius:void 0},i=typeof t=="object"?Object.assign(r,t):r,n=i.bgPanel,a=i.bgContent,l=i.colorHeader,u=i.colorContent,h=i.bgFooter,y=i.colorFooter;return this.colorNames[n]?e.style.background="#"+this.colorNames[n]:e.style.background=this.getCssVariableValue(n),this.colorNames[l]&&(l="#"+this.colorNames[l]),[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(I=>e.querySelector(I).style.color=this.getCssVariableValue(l)),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(I=>I.style.color=this.getCssVariableValue(l)),this.colorNames[a]?e.content.style.background="#"+this.colorNames[a]:e.content.style.background=this.getCssVariableValue(a),this.colorNames[u]?e.content.style.color="#"+this.colorNames[u]:e.content.style.color=this.getCssVariableValue(u),this.perceivedBrightness(l)>this.colorBrightnessThreshold?e.header.classList.add("jsPanel-hdr-dark"):e.header.classList.add("jsPanel-hdr-light"),this.perceivedBrightness(u)>this.colorBrightnessThreshold?e.content.style.borderTop="1px solid rgba(255,255,255,0.15)":e.content.style.borderTop="1px solid rgba(0,0,0,0.15)",this.colorNames[h]?e.footer.style.background="#"+this.colorNames[h]:e.footer.style.background=this.getCssVariableValue(h),this.colorNames[y]?e.footer.style.color="#"+this.colorNames[y]:e.footer.style.color=this.getCssVariableValue(y),i.border&&e.setBorder(i.border),i.borderRadius&&(e.options.borderRadius=void 0,e.setBorderRadius(i.borderRadius)),e},getCssVariableValue(e){if(e.startsWith("--"))return getComputedStyle(document.documentElement).getPropertyValue(e).replace(/\s+/g,"");if(e.startsWith("var")){let t=e.slice(e.indexOf("(")+1,e.indexOf(")"));return getComputedStyle(document.documentElement).getPropertyValue(t).replace(/\s+/g,"")}return e},getScrollbarWidth(e=document.body){if(e===document.body)return{y:window.innerWidth-document.documentElement.clientWidth,x:window.innerHeight-document.documentElement.clientHeight};{let t=getComputedStyle(e);return{y:e.offsetWidth-e.clientWidth-parseFloat(t.borderRightWidth)-parseFloat(t.borderLeftWidth),x:e.offsetHeight-e.clientHeight-parseFloat(t.borderBottomWidth)-parseFloat(t.borderTopWidth)}}},remClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.remove(r)),e},setClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.add(r)),e},setStyles(e,t){for(const[r,i]of Object.entries(t))e.style[r]=typeof i=="string"?O.getCssVariableValue(i):i;return e},setStyle(e,t){return this.setStyles.call(e,e,t)},strToHtml(e){return document.createRange().createContextualFragment(e)},toggleClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.contains(r)?e.classList.remove(r):e.classList.add(r)),e},emptyNode(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e},addScript(e,t="application/javascript",r){if(!document.querySelector(`script[src="${e}"]`)){const i=document.createElement("script");i.src=e,i.type=t,document.head.appendChild(i),r&&(i.onload=r)}},ajax(e,t){let r,i,n=new XMLHttpRequest;const a={method:"GET",async:!0,user:"",pwd:"",done:function(){if(t){let l=O.strToHtml(this.responseText);r.urlSelector&&(l=l.querySelector(r.urlSelector)),t.contentRemove(),t.content.append(l)}},autoresize:!0,autoreposition:!0};if(t&&typeof e=="string")r=Object.assign({},a,{url:e});else if(typeof e=="object"&&e.url)r=Object.assign({},a,e),r.url=e.url,r.async===!1&&(r.timeout=0,r.withCredentials&&(r.withCredentials=void 0),r.responseType&&(r.responseType=void 0));else{this.errorReporting&&O.errorpanel("XMLHttpRequest seems to miss the <mark>url</mark> parameter!");return}i=r.url.trim().split(/\s+/),r.url=encodeURI(i[0]),i.length>1&&(i.shift(),r.urlSelector=i.join(" ")),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?t?r.done.call(n,n,t):r.done.call(n,n):r.fail&&(t?r.fail.call(n,n,t):r.fail.call(n,n)),r.always&&(t?r.always.call(n,n,t):r.always.call(n,n)),t&&(r.autoresize||r.autoreposition)&&O.ajaxAutoresizeAutoreposition(t,r),O.ajaxAlwaysCallbacks.length&&O.ajaxAlwaysCallbacks.forEach(l=>{t?l.call(n,n,t):l.call(n,n)}))},n.open(r.method,r.url,r.async,r.user,r.pwd),n.timeout=r.timeout||0,r.withCredentials&&(n.withCredentials=r.withCredentials),r.responseType&&(n.responseType=r.responseType),r.beforeSend&&(t?r.beforeSend.call(n,n,t):r.beforeSend.call(n,n)),r.data?n.send(r.data):n.send(null)},fetch(e,t){let r;const i={bodyMethod:"text",autoresize:!0,autoreposition:!0,done:function(a,l){if(l){let u=O.strToHtml(a);l.contentRemove(),l.content.append(u)}}};if(t&&typeof e=="string")r=Object.assign({},i,{resource:encodeURI(e)});else if(typeof e=="object"&&e.resource)r=Object.assign({},i,e),r.resource=encodeURI(e.resource);else{this.errorReporting&&O.errorpanel("Fetch Request seems to miss the <mark>resource</mark> parameter!");return}const n=r.fetchInit||{};r.beforeSend&&(t?r.beforeSend.call(e,e,t):r.beforeSend.call(e,e)),fetch(r.resource,n).then(a=>{if(a.ok)return a[r.bodyMethod]()}).then(a=>{t?r.done.call(a,a,t):r.done.call(a,a),t&&(r.autoresize||r.autoreposition)&&O.ajaxAutoresizeAutoreposition(t,r)})},ajaxAutoresizeAutoreposition(e,t){const r=e.options.contentSize;if(typeof r=="string"&&r.match(/auto/i)){const i=r.split(" "),n=Object.assign({},{width:i[0],height:i[1]});t.autoresize&&e.resize(n),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}else if(typeof r=="object"&&(r.width==="auto"||r.height==="auto")){const i=Object.assign({},r);t.autoresize&&e.resize(i),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}},createPanelTemplate(e=!0){const t=document.createElement("div");return t.className="jsPanel",t.style.left="0",t.style.top="0",e&&["close","maximize","normalize","minimize","smallify"].forEach(r=>{t.setAttribute(`data-btn${r}`,"enabled")}),t.innerHTML=`<div class="jsPanel-hdr">
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
                            </div>`,e},createSnapArea(e,t,r){const i=document.createElement("div"),n=e.parentElement;i.className=`jsPanel-snap-area jsPanel-snap-area-${t}`,t==="lt"||t==="rt"||t==="rb"||t==="lb"?(i.style.width=r+"px",i.style.height=r+"px"):t==="ct"||t==="cb"?i.style.height=r+"px":(t==="lc"||t==="rc")&&(i.style.width=r+"px"),n!==document.body&&(i.style.position="absolute"),document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${t}`)||e.parentElement.appendChild(i)},removeSnapAreas(){document.querySelectorAll(".jsPanel-snap-area").forEach(e=>e.parentElement.removeChild(e))},extend(e){if(Object.prototype.toString.call(e)==="[object Object]")for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this.extensions[t]=e[t])},getPanels(e=function(){return this.classList.contains("jsPanel-standard")}){return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(t=>e.call(t,t)).sort((t,r)=>r.style.zIndex-t.style.zIndex)},processCallbacks(e,t,r="some",i,n){if(typeof t=="function"&&(t=[t]),r)return t[r](a=>a.call(e,e,i,n));t.forEach(a=>a.call(e,e,i,n))},resetZi(){this.zi=((e=O.ziBase)=>{let t=e;return{next:()=>t++}})(),Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((e,t)=>e.style.zIndex-t.style.zIndex).forEach(e=>e.style.zIndex=O.zi.next())},errorpanel(e){this.create({paneltype:"error",dragit:!1,resizeit:!1,theme:{bgPanel:"white",bgContent:"white",colorHeader:"rebeccapurple",colorContent:"#333333",border:"2px solid rebeccapurple"},borderRadius:".33rem",headerControls:"closeonly xs",headerTitle:"&#9888; jsPanel Error",contentSize:{width:"50%",height:"auto"},position:"center-top 0 5 down",animateIn:"jsPanelFadeIn",content:`<div class="jsPanel-error-content-separator"></div><p>${e}</p>`})},create(e={},t){O.zi||(O.zi=((m=O.ziBase)=>{let w=m;return{next:()=>w++}})()),e.config?(e=Object.assign({},this.defaults,e.config,e),delete e.config):e=Object.assign({},this.defaults,e),e.id?typeof e.id=="function"&&(e.id=e.id()):e.id=`jsPanel-${O.idCounter+=1}`;const r=document.getElementById(e.id);if(r!==null){if(r.classList.contains("jsPanel")&&r.front(),this.errorReporting){let m=`&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${e.id}</mark> already exists in the document.`;O.errorpanel(m)}return!1}let i=this.pOcontainer(e.container);if(typeof i=="object"&&i.length&&i.length>0&&(i=i[0]),!i)return this.errorReporting&&O.errorpanel("&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist"),!1;["onbeforeclose","onbeforemaximize","onbeforeminimize","onbeforenormalize","onbeforesmallify","onbeforeunsmallify","onclosed","onfronted","onmaximized","onminimized","onnormalized","onsmallified","onstatuschange","onunsmallified"].forEach(m=>{e[m]?typeof e[m]=="function"&&(e[m]=[e[m]]):e[m]=[]});const n=e.template||this.createPanelTemplate();n.options=e,n.closetimer=void 0,n.status="initialized",n.currentData={},n.header=n.querySelector(".jsPanel-hdr"),n.headerbar=n.header.querySelector(".jsPanel-headerbar"),n.titlebar=n.header.querySelector(".jsPanel-titlebar"),n.headerlogo=n.headerbar.querySelector(".jsPanel-headerlogo"),n.headertitle=n.headerbar.querySelector(".jsPanel-title"),n.controlbar=n.headerbar.querySelector(".jsPanel-controlbar"),n.headertoolbar=n.header.querySelector(".jsPanel-hdr-toolbar"),n.content=n.querySelector(".jsPanel-content"),n.footer=n.querySelector(".jsPanel-ftr"),n.snappableTo=!1,n.snapped=!1,n.droppableTo=!1,n.progressbar=n.autocloseProgressbar=n.querySelector(".jsPanel-progressbar");const a=new CustomEvent("jspanelloaded",{detail:e.id,cancelable:!0}),l=new CustomEvent("jspanelstatuschange",{detail:e.id,cancelable:!0}),u=new CustomEvent("jspanelbeforenormalize",{detail:e.id,cancelable:!0}),h=new CustomEvent("jspanelnormalized",{detail:e.id,cancelable:!0}),y=new CustomEvent("jspanelbeforemaximize",{detail:e.id,cancelable:!0}),k=new CustomEvent("jspanelmaximized",{detail:e.id,cancelable:!0}),x=new CustomEvent("jspanelbeforeminimize",{detail:e.id,cancelable:!0}),I=new CustomEvent("jspanelminimized",{detail:e.id,cancelable:!0}),V=new CustomEvent("jspanelbeforesmallify",{detail:e.id,cancelable:!0}),L=new CustomEvent("jspanelsmallified",{detail:e.id,cancelable:!0}),N=new CustomEvent("jspanelsmallifiedmax",{detail:e.id,cancelable:!0}),ee=new CustomEvent("jspanelbeforeunsmallify",{detail:e.id,cancelable:!0}),ce=new CustomEvent("jspanelfronted",{detail:e.id,cancelable:!0}),je=new CustomEvent("jspanelbeforeclose",{detail:e.id,cancelable:!0}),Oe=new CustomEvent("jspanelclosed",{detail:e.id,cancelable:!0}),oe=new CustomEvent("jspanelcloseduser",{detail:e.id,cancelable:!0});[a,l,u,h,y,k,x,I,V,L,N,ee,ce,je].forEach(m=>m.panel=n);const ie=n.querySelector(".jsPanel-btn-close"),pe=n.querySelector(".jsPanel-btn-maximize"),Se=n.querySelector(".jsPanel-btn-normalize"),ot=n.querySelector(".jsPanel-btn-smallify"),gt=n.querySelector(".jsPanel-btn-minimize");ie&&O.pointerup.forEach(m=>{ie.addEventListener(m,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.close(null,!0)})}),pe&&O.pointerup.forEach(m=>{pe.addEventListener(m,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.maximize()})}),Se&&O.pointerup.forEach(m=>{Se.addEventListener(m,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.normalize()})}),ot&&O.pointerup.forEach(m=>{ot.addEventListener(m,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.status==="normalized"||n.status==="maximized"?n.smallify():(n.status==="smallified"||n.status==="smallifiedmax")&&n.unsmallify()})}),gt&&O.pointerup.forEach(m=>{gt.addEventListener(m,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.minimize()})});let ct=O.extensions;for(let m in ct)Object.prototype.hasOwnProperty.call(ct,m)&&(n[m]=ct[m]);if(n.setBorder=m=>{let w=O.pOborder(m);return w[2].length||(w[2]=n.style.backgroundColor),w=w.join(" "),n.style.border=w,n.options.border=w,n},n.setBorderRadius=m=>{typeof m=="string"&&(m.startsWith("--")||m.startsWith("var"))&&(m=m.replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," "),m=O.getCssVariableValue(m)),typeof m=="number"&&(m+="px"),n.style.borderRadius=m;const w=getComputedStyle(n);return n.options.header?(n.header.style.borderTopLeftRadius=w.borderTopLeftRadius,n.header.style.borderTopRightRadius=w.borderTopRightRadius):(n.content.style.borderTopLeftRadius=w.borderTopLeftRadius,n.content.style.borderTopRightRadius=w.borderTopRightRadius),n.options.footerToolbar?(n.footer.style.borderBottomRightRadius=w.borderBottomRightRadius,n.footer.style.borderBottomLeftRadius=w.borderBottomLeftRadius):(n.content.style.borderBottomRightRadius=w.borderBottomRightRadius,n.content.style.borderBottomLeftRadius=w.borderBottomLeftRadius),n},n.setTheme=(m=e.theme,w)=>{let E;if(n.status==="minimized"&&(E=!0,n.normalize()),O.clearTheme(n),typeof m=="object")e.border=void 0,O.applyCustomTheme(n,m);else if(typeof m=="string"){m==="none"&&(m="white");let g=O.getThemeDetails(m);O.applyColorTheme(n,g)}return E&&n.minimize(),w&&w.call(n,n),n},n.remove=(m,w,E)=>{n.parentElement.removeChild(n),document.getElementById(m)?E&&E.call(n,m,n):(n.removeMinimizedReplacement(),n.status="closed",w&&document.dispatchEvent(oe),document.dispatchEvent(Oe),n.options.onclosed&&O.processCallbacks(n,n.options.onclosed,"every",w),O.autopositionRemaining(n),E&&E.call(m,m)),window.removeEventListener("resize",n.windowResizeHandler),document.removeEventListener("jspanelresize",n.parentResizeHandler)},n.close=(m,w)=>{if(n.parentElement){if(n.closetimer&&window.clearInterval(n.closetimer),document.dispatchEvent(je),n.statusBefore=n.status,n.options.onbeforeclose&&n.options.onbeforeclose.length>0&&!O.processCallbacks(n,n.options.onbeforeclose,"some",n.status,w))return n;n.options.animateOut?(n.options.animateIn&&O.remClass(n,n.options.animateIn),O.setClass(n,n.options.animateOut),n.addEventListener("animationend",E=>{E.stopPropagation(),n.remove(n.id,w,m)})):n.remove(n.id,w,m)}},n.maximize=(m,w)=>{if(n.statusBefore=n.status,e.onbeforemaximize&&e.onbeforemaximize.length>0&&!O.processCallbacks(n,e.onbeforemaximize,"some",n.statusBefore))return n;document.dispatchEvent(y);const E=n.parentElement,g=O.pOcontainment(e.maximizedMargin);return E===document.body?(n.style.width=document.documentElement.clientWidth-g[1]-g[3]+"px",n.style.height=document.documentElement.clientHeight-g[0]-g[2]+"px",n.style.left=g[3]+"px",n.style.top=g[0]+"px"):(n.style.width=E.clientWidth-g[1]-g[3]+"px",n.style.height=E.clientHeight-g[0]-g[2]+"px",n.style.left=g[3]+"px",n.style.top=g[0]+"px"),ot.style.transform="unset",n.removeMinimizedReplacement(),n.status="maximized",n.setControls([".jsPanel-btn-maximize"]),w||n.front(),document.dispatchEvent(k),document.dispatchEvent(l),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),m&&m.call(n,n,n.statusBefore),e.onmaximized&&O.processCallbacks(n,e.onmaximized,"every",n.statusBefore),n},n.minimize=m=>{if(n.status==="minimized"||(n.statusBefore=n.status,e.onbeforeminimize&&e.onbeforeminimize.length>0&&!O.processCallbacks(n,e.onbeforeminimize,"some",n.statusBefore)))return n;if(document.dispatchEvent(x),!document.getElementById("jsPanel-replacement-container")){const w=document.createElement("div");w.id="jsPanel-replacement-container",document.body.append(w)}if(n.style.left="-9999px",n.status="minimized",document.dispatchEvent(I),document.dispatchEvent(l),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),e.minimizeTo){let w=n.createMinimizedReplacement(),E,g,C;switch(e.minimizeTo){case"default":document.getElementById("jsPanel-replacement-container").append(w);break;case"parentpanel":g=n.closest(".jsPanel-content").parentElement,C=g.querySelectorAll(".jsPanel-minimized-box"),E=C[C.length-1],E.append(w);break;case"parent":g=n.parentElement,E=g.querySelector(".jsPanel-minimized-container"),E||(E=document.createElement("div"),E.className="jsPanel-minimized-container",g.append(E)),E.append(w);break;default:document.querySelector(e.minimizeTo).append(w)}}return m&&m.call(n,n,n.statusBefore),e.onminimized&&O.processCallbacks(n,e.onminimized,"every",n.statusBefore),n},n.normalize=m=>(n.status==="normalized"||(n.statusBefore=n.status,e.onbeforenormalize&&e.onbeforenormalize.length>0&&!O.processCallbacks(n,e.onbeforenormalize,"some",n.statusBefore))||(document.dispatchEvent(u),n.style.width=n.currentData.width,n.style.height=n.currentData.height,n.snapped?n.snap(n.snapped,!0):(n.style.left=n.currentData.left,n.style.top=n.currentData.top),ot.style.transform="unset",n.removeMinimizedReplacement(),n.status="normalized",n.setControls([".jsPanel-btn-normalize"]),n.front(),document.dispatchEvent(h),document.dispatchEvent(l),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),m&&m.call(n,n,n.statusBefore),e.onnormalized&&O.processCallbacks(n,e.onnormalized,"every",n.statusBefore)),n),n.smallify=m=>{if(n.status==="smallified"||n.status==="smallifiedmax"||(n.statusBefore=n.status,e.onbeforesmallify&&e.onbeforesmallify.length>0&&!O.processCallbacks(n,e.onbeforesmallify,"some",n.statusBefore)))return n;document.dispatchEvent(V),n.style.overflow="hidden";const w=window.getComputedStyle(n),E=parseFloat(window.getComputedStyle(n.headerbar).height);n.style.height=parseFloat(w.borderTopWidth)+parseFloat(w.borderBottomWidth)+E+"px",ot.style.transform="rotate(180deg)",n.status==="normalized"?(n.setControls([".jsPanel-btn-normalize"]),n.status="smallified",document.dispatchEvent(L),document.dispatchEvent(l),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="maximized"&&(n.setControls([".jsPanel-btn-maximize"]),n.status="smallifiedmax",document.dispatchEvent(N),document.dispatchEvent(l),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore));const g=n.querySelectorAll(".jsPanel-minimized-box");return g[g.length-1].style.display="none",m&&m.call(n,n,n.statusBefore),e.onsmallified&&O.processCallbacks(n,e.onsmallified,"every",n.statusBefore),n},n.unsmallify=m=>{if(n.statusBefore=n.status,n.status==="smallified"||n.status==="smallifiedmax"){if(e.onbeforeunsmallify&&e.onbeforeunsmallify.length>0&&!O.processCallbacks(n,e.onbeforeunsmallify,"some",n.statusBefore))return n;document.dispatchEvent(ee),n.style.overflow="visible",n.front(),n.status==="smallified"?(n.style.height=n.currentData.height,n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(h),document.dispatchEvent(l),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="smallifiedmax"?n.maximize():n.status==="minimized"&&n.normalize(),ot.style.transform="rotate(0deg)";const w=n.querySelectorAll(".jsPanel-minimized-box");w[w.length-1].style.display="flex",m&&m.call(n,n,n.statusBefore),e.onunsmallified&&O.processCallbacks(n,e.onunsmallified,"every",n.statusBefore)}return n},n.front=(m,w=!0)=>{if(n.status==="minimized")n.statusBefore==="maximized"?n.maximize():n.normalize();else{const E=Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(g=>g.style.zIndex);Math.max(...E)>n.style.zIndex&&(n.style.zIndex=O.zi.next()),O.resetZi()}return document.dispatchEvent(ce),m&&m.call(n,n),e.onfronted&&w&&O.processCallbacks(n,e.onfronted,"every",n.status),n},n.snap=(m,w=!1)=>{if(w||(n.currentData.beforeSnap={width:n.currentData.width,height:n.currentData.height}),m&&typeof m=="function"&&!w)m.call(n,n,n.snappableTo);else if(m!==!1){let E=[0,0];if(n.options.dragit.snap.containment&&n.options.dragit.containment){const g=O.pOcontainment(n.options.dragit.containment),C=n.snappableTo;C.startsWith("left")?E[0]=g[3]:C.startsWith("right")&&(E[0]=-g[1]),C.endsWith("top")?E[1]=g[0]:C.endsWith("bottom")&&(E[1]=-g[2])}n.reposition(`${n.snappableTo} ${E[0]} ${E[1]}`)}w||(n.snapped=n.snappableTo)},n.move=(m,w)=>{let E=n.overlaps(m,"paddingbox"),g=n.parentElement;return m.appendChild(n),n.options.container=m,n.style.left=E.left+"px",n.style.top=E.top+"px",n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors(),w&&w.call(n,n,m,g),n},n.closeChildpanels=m=>(n.getChildpanels().forEach(w=>w.close()),m&&m.call(n,n),n),n.getChildpanels=m=>{const w=n.content.querySelectorAll(".jsPanel");return m&&w.forEach((E,g,C)=>{m.call(E,E,g,C)}),w},n.isChildpanel=m=>{const w=n.closest(".jsPanel-content"),E=w?w.parentElement:null;return m&&m.call(n,n,E),w?E:!1},n.contentRemove=m=>(O.emptyNode(n.content),m&&m.call(n,n),n),n.createMinimizedReplacement=()=>{const m=O.createMinimizedTemplate(),w=window.getComputedStyle(n.headertitle).color,E=window.getComputedStyle(n),g=e.iconfont,C=m.querySelector(".jsPanel-controlbar");return n.options.header!=="auto-show-hide"?O.setStyles(m,{backgroundColor:E.backgroundColor,backgroundPositionX:E.backgroundPositionX,backgroundPositionY:E.backgroundPositionY,backgroundRepeat:E.backgroundRepeat,backgroundAttachment:E.backgroundAttachment,backgroundImage:E.backgroundImage,backgroundSize:E.backgroundSize,backgroundOrigin:E.backgroundOrigin,backgroundClip:E.backgroundClip}):m.style.backgroundColor=window.getComputedStyle(n.header).backgroundColor,m.id=n.id+"-min",m.querySelector(".jsPanel-headerbar").replaceChild(n.headerlogo.cloneNode(!0),m.querySelector(".jsPanel-headerlogo")),m.querySelector(".jsPanel-titlebar").replaceChild(n.headertitle.cloneNode(!0),m.querySelector(".jsPanel-title")),m.querySelector(".jsPanel-titlebar").setAttribute("title",n.headertitle.textContent),m.querySelector(".jsPanel-title").style.color=w,C.style.color=w,C.querySelectorAll("button").forEach(ae=>ae.style.color=w),["jsPanel-hdr-dark","jsPanel-hdr-light"].forEach(ae=>{n.header.classList.contains(ae)&&m.querySelector(".jsPanel-hdr").classList.add(ae)}),n.setIconfont(g,m),n.dataset.btnnormalize==="enabled"?O.pointerup.forEach(ae=>{m.querySelector(".jsPanel-btn-normalize").addEventListener(ae,he=>{if(he.preventDefault(),he.button&&he.button>0)return!1;n.normalize()})}):C.querySelector(".jsPanel-btn-normalize").style.display="none",n.dataset.btnmaximize==="enabled"?O.pointerup.forEach(ae=>{m.querySelector(".jsPanel-btn-maximize").addEventListener(ae,he=>{if(he.preventDefault(),he.button&&he.button>0)return!1;n.maximize()})}):C.querySelector(".jsPanel-btn-maximize").style.display="none",n.dataset.btnclose==="enabled"?O.pointerup.forEach(ae=>{m.querySelector(".jsPanel-btn-close").addEventListener(ae,he=>{if(he.preventDefault(),he.button&&he.button>0)return!1;n.close(null,!0)})}):C.querySelector(".jsPanel-btn-close").style.display="none",m},n.removeMinimizedReplacement=()=>{const m=document.getElementById(`${n.id}-min`);m&&m.parentElement.removeChild(m)},n.drag=(m={})=>{let w,E,g;const C=new CustomEvent("jspaneldragstart",{detail:n.id}),ae=new CustomEvent("jspaneldrag",{detail:n.id}),he=new CustomEvent("jspaneldragstop",{detail:n.id});[C,ae,he].forEach(Ne=>Ne.panel=n);const q=Ne=>{let Fe=Ne.split("-");return Fe.forEach(($e,Pe)=>{Fe[Pe]=$e.charAt(0).toUpperCase()+$e.slice(1)}),"snap"+Fe.join("")};function Y(Ne){Ne.relatedTarget===null&&O.pointermove.forEach(Fe=>{document.removeEventListener(Fe,E,!1),n.style.opacity=1})}let Ke=m.handles||O.defaults.dragit.handles,at=m.cursor||O.defaults.dragit.cursor;function Zt(Ne){if(O.pointermove.forEach(Fe=>document.removeEventListener(Fe,E)),O.removeSnapAreas(),w){if(n.style.opacity=1,w=void 0,g.snap){switch(n.snappableTo){case"left-top":n.snap(g.snap.snapLeftTop);break;case"center-top":n.snap(g.snap.snapCenterTop);break;case"right-top":n.snap(g.snap.snapRightTop);break;case"right-center":n.snap(g.snap.snapRightCenter);break;case"right-bottom":n.snap(g.snap.snapRightBottom);break;case"center-bottom":n.snap(g.snap.snapCenterBottom);break;case"left-bottom":n.snap(g.snap.snapLeftBottom);break;case"left-center":n.snap(g.snap.snapLeftCenter);break}g.snap.callback&&n.snappableTo&&typeof g.snap.callback=="function"&&(g.snap.callback.call(n,n),g.snap.repositionOnSnap&&g.snap[q(n.snappableTo)]!==!1&&n.repositionOnSnap(n.snappableTo)),n.snappableTo&&g.snap.repositionOnSnap&&g.snap[q(n.snappableTo)]&&n.repositionOnSnap(n.snappableTo)}if(n.droppableTo&&n.droppableTo){let Fe=n.parentElement;n.move(n.droppableTo),g.drop.callback&&g.drop.callback.call(n,n,n.droppableTo,Fe)}if(document.dispatchEvent(he),g.stop.length){let Fe=window.getComputedStyle(n),$e={left:parseFloat(Fe.left),top:parseFloat(Fe.top),width:parseFloat(Fe.width),height:parseFloat(Fe.height)};O.processCallbacks(n,g.stop,!1,$e,Ne)}n.saveCurrentPosition(),n.calcSizeFactors()}n.controlbar.style.pointerEvents="inherit",n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Fe=>Fe.style.pointerEvents="auto"),document.removeEventListener(Ne,Zt)}return n.querySelectorAll(Ke).forEach(Ne=>{Ne.style.touchAction="none",Ne.style.cursor=at,O.pointerdown.forEach(Fe=>{Ne.addEventListener(Fe,$e=>{if($e.button&&$e.button>0||(g=Object.assign({},O.defaults.dragit,m),g.disableOnMaximized&&n.status==="maximized"))return!1;if((g.containment||g.containment===0)&&(g.containment=O.pOcontainment(g.containment)),g.grid&&Array.isArray(g.grid)&&g.grid.length===1&&(g.grid[1]=g.grid[0]),g.snap&&(typeof g.snap=="object"?g.snap=Object.assign({},O.defaultSnapConfig,g.snap):g.snap=O.defaultSnapConfig),$e.target.closest(".jsPanel-ftr-btn"))return;n.controlbar.style.pointerEvents="none",n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(Je=>Je.style.pointerEvents="none");let Pe=window.getComputedStyle(n),Ve=parseFloat(Pe.left),_e=parseFloat(Pe.top),te=parseFloat(Pe.width),Ye=parseFloat(Pe.height),ze=$e.touches?$e.touches[0].clientX:$e.clientX,de=$e.touches?$e.touches[0].clientY:$e.clientY,we=n.parentElement,Et=we.getBoundingClientRect(),le=window.getComputedStyle(we),Xe=n.getScaleFactor(),pn=0,Nt=O.getScrollbarWidth(we);E=Je=>{if(Je.preventDefault(),!w){if(document.dispatchEvent(C),n.style.opacity=g.opacity,n.snapped&&g.snap.resizeToPreSnap&&n.currentData.beforeSnap){n.resize(n.currentData.beforeSnap.width+" "+n.currentData.beforeSnap.height),n.setControls([".jsPanel-btn-normalize"]);let re=n.getBoundingClientRect(),Ae=ze-(re.left+re.width),me=re.width/2;Ae>-me&&(pn=Ae+me)}if(n.front(),n.snapped=!1,n.status==="maximized"&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized"),g.drop&&g.drop.dropZones){let re=g.drop.dropZones.map(me=>O.pOcontainer(me)),Ae=[];re.forEach(function(me){me.length?me.forEach(function(Re){Ae.push(Re)}):Ae.push(me)}),Ae=Ae.filter(function(me,Re,He){return He.indexOf(me)===Re}),g.drop.dropZones=Ae}g.start.length&&O.processCallbacks(n,g.start,!1,{left:Ve,top:_e,width:te,height:Ye},Je)}w=1;let St,Ie,Ue,xt,tt,Ce,ke,_t,qe,bt,ut=Je.touches?Je.touches[0].clientX:Je.clientX,nt=Je.touches?Je.touches[0].clientY:Je.clientY,Le=window.getComputedStyle(n),ue;if(we===document.body){let re=n.getBoundingClientRect();qe=window.innerWidth-parseInt(le.borderLeftWidth,10)-parseInt(le.borderRightWidth,10)-(re.left+re.width),bt=window.innerHeight-parseInt(le.borderTopWidth,10)-parseInt(le.borderBottomWidth,10)-(re.top+re.height)}else qe=parseInt(le.width,10)-parseInt(le.borderLeftWidth,10)-parseInt(le.borderRightWidth,10)-(parseInt(Le.left,10)+parseInt(Le.width,10)),bt=parseInt(le.height,10)-parseInt(le.borderTopWidth,10)-parseInt(le.borderBottomWidth,10)-(parseInt(Le.top,10)+parseInt(Le.height,10));St=parseFloat(Le.left),Ue=parseFloat(Le.top),tt=qe,ke=bt,g.snap&&(g.snap.trigger==="panel"?(Ie=St**2,xt=Ue**2,Ce=tt**2,_t=ke**2):g.snap.trigger==="pointer"&&(n.options.container==="window"?(St=ut,Ue=nt,tt=window.innerWidth-ut,ke=window.innerHeight-nt,Ie=ut**2,xt=Ue**2,Ce=tt**2,_t=ke**2):(ue=n.overlaps(we,"paddingbox",Je),St=ue.pointer.left,Ue=ue.pointer.top,tt=ue.pointer.right,ke=ue.pointer.bottom,Ie=ue.pointer.left**2,xt=ue.pointer.top**2,Ce=ue.pointer.right**2,_t=ue.pointer.bottom**2)));let Ge=Math.sqrt(Ie+xt),G=Math.sqrt(Ie+_t),rt=Math.sqrt(Ce+xt),ft=Math.sqrt(Ce+_t),kt=Math.abs(St-tt)/2,Q=Math.abs(Ue-ke)/2,en=Math.sqrt(Ie+Q**2),an=Math.sqrt(xt+kt**2),dt=Math.sqrt(Ce+Q**2),mn=Math.sqrt(_t+kt**2);if(window.getSelection().removeAllRanges(),document.dispatchEvent(ae),(!g.axis||g.axis==="x")&&(n.style.left=Ve+(ut-ze)/Xe.x+pn+"px"),(!g.axis||g.axis==="y")&&(n.style.top=_e+(nt-de)/Xe.y+"px"),g.grid){let re=g.grid,Ae=g.axis,me=re[0]*Math.round((Ve+(ut-ze))/re[0]),Re=re[1]*Math.round((_e+(nt-de))/re[1]);(!Ae||Ae==="x")&&(n.style.left=`${me}px`),(!Ae||Ae==="y")&&(n.style.top=`${Re}px`)}if(g.containment||g.containment===0){let re=g.containment,Ae,me;if(n.options.container==="window")Ae=window.innerWidth-parseFloat(Le.width)-re[1]-Nt.y,me=window.innerHeight-parseFloat(Le.height)-re[2]-Nt.x;else{let Re=parseFloat(le.borderLeftWidth)+parseFloat(le.borderRightWidth),He=parseFloat(le.borderTopWidth)+parseFloat(le.borderBottomWidth);Ae=Et.width/Xe.x-parseFloat(Le.width)-re[1]-Re-Nt.y,me=Et.height/Xe.y-parseFloat(Le.height)-re[2]-He-Nt.x}parseFloat(n.style.left)<=re[3]&&(n.style.left=re[3]+"px"),parseFloat(n.style.top)<=re[0]&&(n.style.top=re[0]+"px"),parseFloat(n.style.left)>=Ae&&(n.style.left=Ae+"px"),parseFloat(n.style.top)>=me&&(n.style.top=me+"px")}if(g.drag.length){let re={left:St,top:Ue,right:tt,bottom:ke,width:parseFloat(Le.width),height:parseFloat(Le.height)};O.processCallbacks(n,g.drag,!1,re,Je)}if(g.snap){let re=g.snap.sensitivity,Ae=we===document.body?window.innerWidth/8:Et.width/8,me=we===document.body?window.innerHeight/8:Et.height/8;n.snappableTo=!1,O.removeSnapAreas(),Ge<re?g.snap.snapLeftTop!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="left-top",O.createSnapArea(n,"lt",re)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(ue.pointer.left>0&&ue.pointer.top>0?(n.snappableTo="left-top",O.createSnapArea(n,"lt",re)):(n.snappableTo=!1,O.removeSnapAreas()))):G<re?g.snap.snapLeftBottom!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="left-bottom",O.createSnapArea(n,"lb",re)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(ue.pointer.left>0&&ue.pointer.bottom>0?(n.snappableTo="left-bottom",O.createSnapArea(n,"lb",re)):(n.snappableTo=!1,O.removeSnapAreas()))):rt<re?g.snap.snapRightTop!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="right-top",O.createSnapArea(n,"rt",re)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(ue.pointer.right>0&&ue.pointer.top>0?(n.snappableTo="right-top",O.createSnapArea(n,"rt",re)):(n.snappableTo=!1,O.removeSnapAreas()))):ft<re?g.snap.snapRightBottom!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="right-bottom",O.createSnapArea(n,"rb",re)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(ue.pointer.right>0&&ue.pointer.bottom>0?(n.snappableTo="right-bottom",O.createSnapArea(n,"rb",re)):(n.snappableTo=!1,O.removeSnapAreas()))):Ue<re&&an<Ae?g.snap.snapCenterTop!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="center-top",O.createSnapArea(n,"ct",re)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(ue.pointer.top>0?(n.snappableTo="center-top",O.createSnapArea(n,"ct",re)):(n.snappableTo=!1,O.removeSnapAreas()))):St<re&&en<me?g.snap.snapLeftCenter!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="left-center",O.createSnapArea(n,"lc",re)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(ue.pointer.left>0?(n.snappableTo="left-center",O.createSnapArea(n,"lc",re)):(n.snappableTo=!1,O.removeSnapAreas()))):tt<re&&dt<me?g.snap.snapRightCenter!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="right-center",O.createSnapArea(n,"rc",re)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(ue.pointer.right>0?(n.snappableTo="right-center",O.createSnapArea(n,"rc",re)):(n.snappableTo=!1,O.removeSnapAreas()))):ke<re&&mn<Ae&&g.snap.snapCenterBottom!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="center-bottom",O.createSnapArea(n,"cb",re)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(ue.pointer.bottom>0?(n.snappableTo="center-bottom",O.createSnapArea(n,"cb",re)):(n.snappableTo=!1,O.removeSnapAreas())))}if(g.drop&&g.drop.dropZones){let re=O.isIE?"msElementsFromPoint":"elementsFromPoint",Ae=document[re](Je.clientX,Je.clientY);Array.isArray(Ae)||(Ae=Array.prototype.slice.call(Ae)),g.drop.dropZones.forEach(me=>{Ae.includes(me)&&(n.droppableTo=me)}),Ae.includes(n.droppableTo)||(n.droppableTo=!1)}},O.pointermove.forEach(Je=>document.addEventListener(Je,E)),window.addEventListener("mouseout",Y,!1)})}),O.pointerup.forEach(Fe=>{document.addEventListener(Fe,Zt),window.removeEventListener("mouseout",Y)}),m.disable&&(Ne.style.pointerEvents="none")}),n},n.dragit=m=>{const w=Object.assign({},O.defaults.dragit,e.dragit),E=n.querySelectorAll(w.handles);return m==="disable"?E.forEach(g=>g.style.pointerEvents="none"):E.forEach(g=>g.style.pointerEvents="auto"),n},n.sizeit=(m={})=>{const w=new CustomEvent("jspanelresizestart",{detail:n.id}),E=new CustomEvent("jspanelresize",{detail:n.id}),g=new CustomEvent("jspanelresizestop",{detail:n.id});[w,E,g].forEach($e=>$e.panel=n);let C={},ae,he,q,Y,Ke,at;C.handles=m.handles||O.defaults.resizeit.handles,C.handles.split(",").forEach($e=>{const Pe=document.createElement("DIV");Pe.className=`jsPanel-resizeit-handle jsPanel-resizeit-${$e.trim()}`,n.append(Pe)});let Zt=m.aspectRatio?m.aspectRatio:!1;function Ne($e){$e.relatedTarget===null&&O.pointermove.forEach(Pe=>document.removeEventListener(Pe,ae,!1))}function Fe($e){if(O.pointermove.forEach(Pe=>document.removeEventListener(Pe,ae,!1)),$e.target.classList&&$e.target.classList.contains("jsPanel-resizeit-handle")){let Pe,Ve,_e=$e.target.className;if(_e.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)&&(Pe=!0),_e.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)&&(Ve=!0),C.grid&&Array.isArray(C.grid)){C.grid.length===1&&(C.grid[1]=C.grid[0]);const te=parseFloat(n.style.width),Ye=parseFloat(n.style.height),ze=te%C.grid[0],de=Ye%C.grid[1],we=parseFloat(n.style.left),Et=parseFloat(n.style.top),le=we%C.grid[0],Xe=Et%C.grid[1];ze<C.grid[0]/2?n.style.width=te-ze+"px":n.style.width=te+(C.grid[0]-ze)+"px",de<C.grid[1]/2?n.style.height=Ye-de+"px":n.style.height=Ye+(C.grid[1]-de)+"px",Pe&&(le<C.grid[0]/2?n.style.left=we-le+"px":n.style.left=we+(C.grid[0]-le)+"px"),Ve&&(Xe<C.grid[1]/2?n.style.top=Et-Xe+"px":n.style.top=Et+(C.grid[1]-Xe)+"px")}}if(he){n.content.style.pointerEvents="inherit",he=void 0,n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors();let Pe=n.controlbar.querySelector(".jsPanel-btn-smallify"),Ve=n.getBoundingClientRect();if(Pe&&Ve.height>at+5&&(Pe.style.transform="rotate(0deg)"),document.dispatchEvent(g),C.stop.length){let _e=window.getComputedStyle(n),te={left:parseFloat(_e.left),top:parseFloat(_e.top),width:parseFloat(_e.width),height:parseFloat(_e.height)};O.processCallbacks(n,C.stop,!1,te,$e)}}n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Pe=>Pe.style.pointerEvents="auto"),C.aspectRatio=Zt,document.removeEventListener($e,Fe)}return n.querySelectorAll(".jsPanel-resizeit-handle").forEach($e=>{$e.style.touchAction="none",O.pointerdown.forEach(Pe=>{$e.addEventListener(Pe,Ve=>{if(Ve.preventDefault(),Ve.stopPropagation(),Ve.button&&Ve.button>0)return!1;let _e=1;if(C=Object.assign({},O.defaults.resizeit,m),(C.containment||C.containment===0)&&(C.containment=O.pOcontainment(C.containment)),C.aspectRatio&&C.aspectRatio===!0&&(C.aspectRatio="panel"),O.modifier){let me=O.modifier;me.altKey?C.aspectRatio="content":me.ctrlKey?C.aspectRatio="panel":me.shiftKey&&(C.aspectRatio=!1,_e=2)}let te=typeof C.maxWidth=="function"?C.maxWidth():C.maxWidth||1e4,Ye=typeof C.maxHeight=="function"?C.maxHeight():C.maxHeight||1e4,ze=typeof C.minWidth=="function"?C.minWidth():C.minWidth,de=typeof C.minHeight=="function"?C.minHeight():C.minHeight;n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(me=>me.style.pointerEvents="none");const we=n.parentElement,Et=we.tagName.toLowerCase(),le=n.getBoundingClientRect(),Xe=we.getBoundingClientRect(),pn=window.getComputedStyle(we,null),Nt=parseInt(pn.borderLeftWidth,10),Je=parseInt(pn.borderTopWidth,10),St=pn.getPropertyValue("position"),Ie=Ve.clientX||Ve.clientX===0||Ve.touches[0].clientX,Ue=Ve.clientY||Ve.clientY===0||Ve.touches[0].clientY,xt=Ie/Ue,tt=Ve.target.classList,Ce=n.getScaleFactor(),ke=le.width/le.height,_t=n.content.getBoundingClientRect(),qe=_t.width/_t.height,bt=n.header.getBoundingClientRect().height,ut=n.footer.getBoundingClientRect().height||0;let nt=le.left,Le=le.top,ue=1e4,Ge=1e4,G=1e4,rt=1e4;Ke=le.width,at=le.height,Et!=="body"&&(nt=le.left-Xe.left+we.scrollLeft,Le=le.top-Xe.top+we.scrollTop),Et==="body"&&C.containment?(ue=document.documentElement.clientWidth-le.left,G=document.documentElement.clientHeight-le.top,Ge=le.width+le.left,rt=le.height+le.top):C.containment&&(St==="static"?(ue=Xe.width-le.left+Nt,G=Xe.height+Xe.top-le.top+Je,Ge=le.width+(le.left-Xe.left)-Nt,rt=le.height+(le.top-Xe.top)-Je):(ue=we.clientWidth-(le.left-Xe.left)/Ce.x+Nt,G=we.clientHeight-(le.top-Xe.top)/Ce.y+Je,Ge=(le.width+le.left-Xe.left)/Ce.x-Nt,rt=n.clientHeight+(le.top-Xe.top)/Ce.y-Je)),C.containment&&(Ge-=C.containment[3],rt-=C.containment[0],ue-=C.containment[1],G-=C.containment[2]);const ft=window.getComputedStyle(n),kt=parseFloat(ft.width)-le.width,Q=parseFloat(ft.height)-le.height;let en=parseFloat(ft.left)-le.left,an=parseFloat(ft.top)-le.top;we!==document.body&&(en+=Xe.left,an+=Xe.top);let dt=parseInt(ft.borderTopWidth,10),mn=parseInt(ft.borderRightWidth,10),re=parseInt(ft.borderBottomWidth,10),Ae=parseInt(ft.borderLeftWidth,10);ae=me=>{me.preventDefault(),he||(document.dispatchEvent(w),C.start.length&&O.processCallbacks(n,C.start,!1,{width:Ke,height:at,left:nt,top:Le},me),n.front(),n.status==="maximized"&&(n.status="normalized",n.controlbar.querySelector(".jsPanel-btn-maximize")&&n.setControlStatus("maximize","show"),n.controlbar.querySelector(".jsPanel-btn-normalize")&&n.setControlStatus("normalize","hide")),le.height>at+5&&(n.status="normalized",n.setControls([".jsPanel-btn-normalize"]))),he=1,document.dispatchEvent(E);let Re=me.touches?me.touches[0].clientX:me.clientX,He=me.touches?me.touches[0].clientY:me.clientY,Te;tt.contains("jsPanel-resizeit-e")?(q=Ke+(Re-Ie)*_e/Ce.x+kt,q>=ue&&(q=ue),q>=te&&(q=te),q<=ze&&(q=ze),n.style.width=q+"px",_e===2&&(n.style.left=nt-(Re-Ie)+"px"),C.aspectRatio==="content"?(n.style.height=(q-mn-Ae)/qe+bt+ut+dt+re+"px",C.containment&&(Te=n.overlaps(we),Te.bottom<=C.containment[2]&&(n.style.height=G+"px",n.style.width=G*qe+"px"))):C.aspectRatio==="panel"&&(n.style.height=q/ke+"px",C.containment&&(Te=n.overlaps(we),Te.bottom<=C.containment[2]&&(n.style.height=G+"px",n.style.width=G*ke+"px")))):tt.contains("jsPanel-resizeit-s")?(Y=at+(He-Ue)*_e/Ce.y+Q,Y>=G&&(Y=G),Y>=Ye&&(Y=Ye),Y<=de&&(Y=de),n.style.height=Y+"px",_e===2&&(n.style.top=Le-(He-Ue)+"px"),C.aspectRatio==="content"?(n.style.width=(Y-bt-ut-dt-re)*qe+dt+re+"px",C.containment&&(Te=n.overlaps(we),Te.right<=C.containment[1]&&(n.style.width=ue+"px",n.style.height=ue/qe+"px"))):C.aspectRatio==="panel"&&(n.style.width=Y*ke+"px",C.containment&&(Te=n.overlaps(we),Te.right<=C.containment[1]&&(n.style.width=ue+"px",n.style.height=ue/ke+"px")))):tt.contains("jsPanel-resizeit-w")?(q=Ke+(Ie-Re)*_e/Ce.x+kt,q<=te&&q>=ze&&q<=Ge&&(n.style.left=nt+(Re-Ie)/Ce.x+en+"px"),q>=Ge&&(q=Ge),q>=te&&(q=te),q<=ze&&(q=ze),n.style.width=q+"px",C.aspectRatio==="content"?(n.style.height=(q-mn-Ae)/qe+bt+ut+dt+re+"px",C.containment&&(Te=n.overlaps(we),Te.bottom<=C.containment[2]&&(n.style.height=G+"px",n.style.width=G*qe+"px"))):C.aspectRatio==="panel"&&(n.style.height=q/ke+"px",C.containment&&(Te=n.overlaps(we),Te.bottom<=C.containment[2]&&(n.style.height=G+"px",n.style.width=G*ke+"px")))):tt.contains("jsPanel-resizeit-n")?(Y=at+(Ue-He)*_e/Ce.y+Q,Y<=Ye&&Y>=de&&Y<=rt&&(n.style.top=Le+(He-Ue)/Ce.y+an+"px"),Y>=rt&&(Y=rt),Y>=Ye&&(Y=Ye),Y<=de&&(Y=de),n.style.height=Y+"px",C.aspectRatio==="content"?(n.style.width=(Y-bt-ut-dt-re)*qe+dt+re+"px",C.containment&&(Te=n.overlaps(we),Te.right<=C.containment[1]&&(n.style.width=ue+"px",n.style.height=ue/qe+"px"))):C.aspectRatio==="panel"&&(n.style.width=Y*ke+"px",C.containment&&(Te=n.overlaps(we),Te.right<=C.containment[1]&&(n.style.width=ue+"px",n.style.height=ue/ke+"px")))):tt.contains("jsPanel-resizeit-se")?(q=Ke+(Re-Ie)*_e/Ce.x+kt,q>=ue&&(q=ue),q>=te&&(q=te),q<=ze&&(q=ze),n.style.width=q+"px",_e===2&&(n.style.left=nt-(Re-Ie)+"px"),C.aspectRatio&&(n.style.height=q/ke+"px"),Y=at+(He-Ue)*_e/Ce.y+Q,Y>=G&&(Y=G),Y>=Ye&&(Y=Ye),Y<=de&&(Y=de),n.style.height=Y+"px",_e===2&&(n.style.top=Le-(He-Ue)+"px"),C.aspectRatio==="content"?(n.style.width=(Y-bt-ut-dt-re)*qe+dt+re+"px",C.containment&&(Te=n.overlaps(we),Te.right<=C.containment[1]&&(n.style.width=ue+"px",n.style.height=ue/qe+"px"))):C.aspectRatio==="panel"&&(n.style.width=Y*ke+"px",C.containment&&(Te=n.overlaps(we),Te.right<=C.containment[1]&&(n.style.width=ue+"px",n.style.height=ue/ke+"px")))):tt.contains("jsPanel-resizeit-sw")?(Y=at+(He-Ue)*_e/Ce.y+Q,Y>=G&&(Y=G),Y>=Ye&&(Y=Ye),Y<=de&&(Y=de),n.style.height=Y+"px",_e===2&&(n.style.top=Le-(He-Ue)+"px"),C.aspectRatio&&(n.style.width=Y*ke+"px"),q=Ke+(Ie-Re)*_e/Ce.x+kt,q<=te&&q>=ze&&q<=Ge&&(n.style.left=nt+(Re-Ie)/Ce.x+en+"px"),q>=Ge&&(q=Ge),q>=te&&(q=te),q<=ze&&(q=ze),n.style.width=q+"px",C.aspectRatio==="content"?(n.style.height=(q-mn-Ae)/qe+bt+ut+dt+re+"px",C.containment&&(Te=n.overlaps(we),Te.bottom<=C.containment[2]&&(n.style.height=G+"px",n.style.width=G*qe+"px"))):C.aspectRatio==="panel"&&(n.style.height=q/ke+"px",C.containment&&(Te=n.overlaps(we),Te.bottom<=C.containment[2]&&(n.style.height=G+"px",n.style.width=G*ke+"px")))):tt.contains("jsPanel-resizeit-ne")?(q=Ke+(Re-Ie)*_e/Ce.x+kt,q>=ue&&(q=ue),q>=te&&(q=te),q<=ze&&(q=ze),n.style.width=q+"px",_e===2&&(n.style.left=nt-(Re-Ie)+"px"),C.aspectRatio&&(n.style.height=q/ke+"px"),Y=at+(Ue-He)*_e/Ce.y+Q,Y<=Ye&&Y>=de&&Y<=rt&&(n.style.top=Le+(He-Ue)/Ce.y+an+"px"),Y>=rt&&(Y=rt),Y>=Ye&&(Y=Ye),Y<=de&&(Y=de),n.style.height=Y+"px",C.aspectRatio==="content"?(n.style.width=(Y-bt-ut-dt-re)*qe+dt+re+"px",C.containment&&(Te=n.overlaps(we),Te.right<=C.containment[1]&&(n.style.width=ue+"px",n.style.height=ue/qe+"px"))):C.aspectRatio==="panel"&&(n.style.width=Y*ke+"px",C.containment&&(Te=n.overlaps(we),Te.right<=C.containment[1]&&(n.style.width=ue+"px",n.style.height=ue/ke+"px")))):tt.contains("jsPanel-resizeit-nw")&&(C.aspectRatio&&tt.contains("jsPanel-resizeit-nw")&&(Re=He*xt,He=Re/xt),q=Ke+(Ie-Re)*_e/Ce.x+kt,q<=te&&q>=ze&&q<=Ge&&(n.style.left=nt+(Re-Ie)/Ce.x+en+"px"),q>=Ge&&(q=Ge),q>=te&&(q=te),q<=ze&&(q=ze),n.style.width=q+"px",C.aspectRatio&&(n.style.height=q/ke+"px"),Y=at+(Ue-He)*_e/Ce.y+Q,Y<=Ye&&Y>=de&&Y<=rt&&(n.style.top=Le+(He-Ue)/Ce.y+an+"px"),Y>=rt&&(Y=rt),Y>=Ye&&(Y=Ye),Y<=de&&(Y=de),n.style.height=Y+"px",C.aspectRatio==="content"?n.style.width=(Y-bt-ut-dt-re)*qe+dt+re+"px":C.aspectRatio==="panel"&&(n.style.width=Y*ke+"px")),window.getSelection().removeAllRanges();const Ut=window.getComputedStyle(n),Be={left:parseFloat(Ut.left),top:parseFloat(Ut.top),right:parseFloat(Ut.right),bottom:parseFloat(Ut.bottom),width:parseFloat(Ut.width),height:parseFloat(Ut.height)};C.resize.length&&O.processCallbacks(n,C.resize,!1,Be,me)},O.pointermove.forEach(me=>document.addEventListener(me,ae,!1)),window.addEventListener("mouseout",Ne,!1)})}),O.pointerup.forEach(function(Pe){document.addEventListener(Pe,Fe),window.removeEventListener("mouseout",Ne)}),m.disable&&($e.style.pointerEvents="none")}),n},n.resizeit=m=>{const w=n.querySelectorAll(".jsPanel-resizeit-handle");return m==="disable"?w.forEach(E=>E.style.pointerEvents="none"):w.forEach(E=>E.style.pointerEvents="auto"),n},n.getScaleFactor=()=>{const m=n.getBoundingClientRect();return{x:m.width/n.offsetWidth,y:m.height/n.offsetHeight}},n.calcSizeFactors=()=>{const m=window.getComputedStyle(n);if(e.container==="window")n.hf=parseFloat(m.left)/(window.innerWidth-parseFloat(m.width)),n.vf=parseFloat(m.top)/(window.innerHeight-parseFloat(m.height));else if(n.parentElement){let w=n.parentElement.getBoundingClientRect();n.hf=parseFloat(m.left)/(w.width-parseFloat(m.width)),n.vf=parseFloat(m.top)/(w.height-parseFloat(m.height))}},n.saveCurrentDimensions=()=>{const m=window.getComputedStyle(n);n.currentData.width=m.width,n.currentData.height=m.height},n.saveCurrentPosition=()=>{const m=window.getComputedStyle(n);n.currentData.left=m.left,n.currentData.top=m.top},n.reposition=(...m)=>{let w=e.position,E=!0,g;return m.forEach(C=>{typeof C=="string"||typeof C=="object"?w=C:typeof C=="boolean"?E=C:typeof C=="function"&&(g=C)}),O.position(n,w),n.slaves&&n.slaves.size>0&&n.slaves.forEach(C=>C.reposition()),E&&n.saveCurrentPosition(),g&&g.call(n,n),n},n.repositionOnSnap=m=>{let w="0",E="0",g=O.pOcontainment(e.dragit.containment);if(e.dragit.snap.containment)switch(m){case"left-top":w=g[3],E=g[0];break;case"right-top":w=-g[1],E=g[0];break;case"right-bottom":w=-g[1],E=-g[2];break;case"left-bottom":w=g[3],E=-g[2];break;case"center-top":w=g[3]/2-g[1]/2,E=g[0];break;case"center-bottom":w=g[3]/2-g[1]/2,E=-g[2];break;case"left-center":w=g[3],E=g[0]/2-g[2]/2;break;case"right-center":w=-g[1],E=g[0]/2-g[2]/2;break}O.position(n,m),O.setStyles(n,{left:`calc(${n.style.left} + ${w}px)`,top:`calc(${n.style.top} + ${E}px)`})},n.overlaps=(m,w,E)=>{let g=n.getBoundingClientRect(),C=getComputedStyle(n.parentElement),ae=n.getScaleFactor(),he={top:0,right:0,bottom:0,left:0},q,Y=0,Ke=0,at=0,Zt=0;n.options.container!=="window"&&w==="paddingbox"&&(he.top=parseInt(C.borderTopWidth,10)*ae.y,he.right=parseInt(C.borderRightWidth,10)*ae.x,he.bottom=parseInt(C.borderBottomWidth,10)*ae.y,he.left=parseInt(C.borderLeftWidth,10)*ae.x),typeof m=="string"?m==="window"?q={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}:m==="parent"?q=n.parentElement.getBoundingClientRect():q=document.querySelector(m).getBoundingClientRect():q=m.getBoundingClientRect(),E&&(Y=E.touches?E.touches[0].clientX:E.clientX,Ke=E.touches?E.touches[0].clientY:E.clientY,at=Y-q.left,Zt=Ke-q.top);let Ne=g.left<q.right&&g.right>q.left,Fe=g.top<q.bottom&&g.bottom>q.top;return{overlaps:Ne&&Fe,top:g.top-q.top-he.top,right:q.right-g.right-he.right,bottom:q.bottom-g.bottom-he.bottom,left:g.left-q.left-he.left,parentBorderWidth:he,panelRect:g,referenceRect:q,pointer:{clientX:Y,clientY:Ke,left:at-he.left,top:Zt-he.top,right:q.width-at-he.right,bottom:q.height-Zt-he.bottom}}},n.setSize=()=>{if(e.panelSize){const m=O.pOsize(n,e.panelSize);n.style.width=m.width,n.style.height=m.height}else if(e.contentSize){const m=O.pOsize(n,e.contentSize);n.content.style.width=m.width,n.content.style.height=m.height,n.style.width=m.width,n.content.style.width="100%"}return n},n.resize=(...m)=>{let w=window.getComputedStyle(n),E={width:w.width,height:w.height},g=!0,C;m.forEach(q=>{typeof q=="string"?E=q:typeof q=="object"?E=Object.assign(E,q):typeof q=="boolean"?g=q:typeof q=="function"&&(C=q)});let ae=O.pOsize(n,E);n.style.width=ae.width,n.style.height=ae.height,n.slaves&&n.slaves.size>0&&n.slaves.forEach(q=>q.reposition()),g&&n.saveCurrentDimensions(),n.status="normalized";let he=n.controlbar.querySelector(".jsPanel-btn-smallify");return he&&(he.style.transform="rotate(0deg)"),C&&C.call(n,n),n.calcSizeFactors(),n},n.windowResizeHandler=m=>{if(m.target===window){let w=n.status,E=e.onwindowresize,g,C;if(w==="maximized"&&E)n.maximize(!1,!0);else if(n.snapped&&w!=="minimized")n.snap(n.snapped,!0);else if(w==="normalized"||w==="smallified"||w==="maximized"){let ae=typeof E;ae==="boolean"?(g=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=g<=0?0:g+"px",C=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=C<=0?0:C+"px"):ae==="function"?E.call(n,m,n):ae==="object"&&(E.preset===!0&&(g=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=g<=0?0:g+"px",C=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=C<=0?0:C+"px"),E.callback.call(n,m,n))}else w==="smallifiedmax"&&E&&n.maximize(!1,!0).smallify();n.slaves&&n.slaves.size>0&&n.slaves.forEach(ae=>ae.reposition())}},n.setControls=(m,w)=>(n.header.querySelectorAll(".jsPanel-btn").forEach(E=>{const g=E.className.split("-"),C=g[g.length-1];n.getAttribute(`data-btn${C}`)!=="hidden"&&(E.style.display="block")}),m.forEach(E=>{const g=n.controlbar.querySelector(E);g&&(g.style.display="none")}),w&&w.call(n,n),n),n.setControlStatus=(m,w="enable",E)=>{const g=n.controlbar.querySelector(`.jsPanel-btn-${m}`);switch(w){case"disable":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"disabled"),g.style.pointerEvents="none",g.style.opacity=.4,g.style.cursor="default");break;case"hide":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"hidden"),g.style.display="none");break;case"show":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"enabled"),g.style.display="block",g.style.pointerEvents="auto",g.style.opacity=1,g.style.cursor="pointer");break;case"enable":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.getAttribute(`data-btn${m}`)==="hidden"&&(g.style.display="block"),n.setAttribute(`data-btn${m}`,"enabled"),g.style.pointerEvents="auto",g.style.opacity=1,g.style.cursor="pointer");break;case"remove":n.controlbar.removeChild(g),n.setAttribute(`data-btn${m}`,"removed");break}return E&&E.call(n,n),n},n.setControlSize=m=>{const w=m.toLowerCase();n.controlbar.querySelectorAll(".jsPanel-btn").forEach(g=>{["jsPanel-btn-xl","jsPanel-btn-lg","jsPanel-btn-md","jsPanel-btn-sm","jsPanel-btn-xs"].forEach(C=>g.classList.remove(C)),g.classList.add(`jsPanel-btn-${w}`)}),w==="xl"?n.titlebar.style.fontSize="1.5rem":w==="lg"?n.titlebar.style.fontSize="1.25rem":w==="md"?n.titlebar.style.fontSize="1.05rem":w==="sm"?n.titlebar.style.fontSize=".9rem":w==="xs"&&(n.titlebar.style.fontSize=".8rem")},n.setHeaderControls=m=>{if(n.options.headerControls.add){let C=n.options.headerControls.add;Array.isArray(C)||(C=[C]),C.forEach(ae=>n.addControl(ae))}let w=[];n.controlbar.querySelectorAll(".jsPanel-btn").forEach(C=>{let ae=C.className.match(/jsPanel-btn-[a-z\d]{3,}/i),he=ae[0].substring(12);w.push(he)});const g=O.pOheaderControls(e.headerControls);return e.headerControls=g,w.forEach(C=>{g[C]&&n.setControlStatus(C,g[C])}),n.setControlSize(g.size),m&&m.call(n,n),n},n.setHeaderLogo=(m,w)=>{let E=[n.headerlogo],g=document.querySelector("#"+n.id+"-min");return g&&E.push(g.querySelector(".jsPanel-headerlogo")),typeof m=="string"?m.startsWith("<")?E.forEach(C=>C.innerHTML=m):E.forEach(C=>{O.emptyNode(C);let ae=document.createElement("img");ae.src=m,C.append(ae)}):E.forEach(C=>{O.emptyNode(C),C.append(m)}),n.headerlogo.childNodes.forEach(C=>{C.nodeName&&C.nodeName==="IMG"&&C.setAttribute("draggable","false")}),w&&w.call(n,n),n},n.setHeaderRemove=m=>(n.removeChild(n.header),n.content.classList.add("jsPanel-content-noheader"),["close","maximize","normalize","minimize","smallify"].forEach(w=>n.setAttribute(`data-btn${w}`,"removed")),m&&m.call(n,n),n),n.setHeaderTitle=(m,w)=>{let E=[n.headertitle],g=document.querySelector("#"+n.id+"-min");return g&&E.push(g.querySelector(".jsPanel-title")),typeof m=="string"?E.forEach(C=>C.innerHTML=m):typeof m=="function"?E.forEach(C=>{O.emptyNode(C),C.innerHTML=m()}):E.forEach(C=>{O.emptyNode(C),C.append(m)}),w&&w.call(n,n),n},n.setIconfont=(m,w=n,E)=>{if(m){let g,C;if(m==="fa"||m==="far"||m==="fal"||m==="fas"||m==="fad")g=[`${m} fa-window-close`,`${m} fa-window-maximize`,`${m} fa-window-restore`,`${m} fa-window-minimize`,`${m} fa-chevron-up`];else if(m==="material-icons")g=[m,m,m,m,m,m],C=["close","fullscreen","fullscreen_exit","call_received","expand_less"];else if(Array.isArray(m))g=[`custom-control-icon ${m[4]}`,`custom-control-icon ${m[3]}`,`custom-control-icon ${m[2]}`,`custom-control-icon ${m[1]}`,`custom-control-icon ${m[0]}`];else if(m==="bootstrap"||m==="glyphicon")g=["glyphicon glyphicon-remove","glyphicon glyphicon-fullscreen","glyphicon glyphicon-resize-full","glyphicon glyphicon-minus","glyphicon glyphicon-chevron-up"];else return w;w.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(ae=>O.emptyNode(ae).innerHTML="<span></span>"),Array.prototype.slice.call(w.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((ae,he)=>{ae.className=g[he],m==="material-icons"&&(ae.textContent=C[he])})}return E&&E.call(w,w),w},n.addToolbar=(m,w,E)=>{if(m==="header"?m=n.headertoolbar:m==="footer"&&(m=n.footer),typeof w=="string")m.innerHTML=w;else if(Array.isArray(w))w.forEach(g=>{typeof g=="string"?m.innerHTML+=g:m.append(g)});else if(typeof w=="function"){let g=w.call(n,n);typeof g=="string"?m.innerHTML=g:m.append(g)}else m.append(w);return m.classList.add("active"),E&&E.call(n,n),n},n.addCloseControl=()=>{let m=document.createElement("button"),w=n.content.style.color;return m.classList.add("jsPanel-addCloseCtrl"),m.innerHTML=O.icons.close,m.style.color=w,n.options.rtl&&m.classList.add("rtl"),n.appendChild(m),O.pointerup.forEach(E=>{m.addEventListener(E,g=>{if(g.preventDefault(),g.button&&g.button>0)return!1;n.close(null,!0)})}),O.pointerdown.forEach(E=>{m.addEventListener(E,g=>g.preventDefault())}),n},n.addControl=m=>{if(!m.html)return n;m.position||(m.position=1);const w=n.controlbar.querySelectorAll(".jsPanel-btn").length;let E=document.createElement("button");E.innerHTML=m.html,E.className=`jsPanel-btn jsPanel-btn-${m.name} jsPanel-btn-${e.headerControls.size}`,E.style.color=n.header.style.color,m.position>w?n.controlbar.append(E):n.controlbar.insertBefore(E,n.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${m.position})`));const g=m.ariaLabel||m.name;return g&&E.setAttribute("aria-label",g),O.pointerup.forEach(C=>{E.addEventListener(C,ae=>{if(ae.preventDefault(),ae.button&&ae.button>0)return!1;m.handler.call(n,n,E)})}),m.afterInsert&&m.afterInsert.call(E,E),n},n.setRtl=()=>{[n.header,n.content,n.footer].forEach(m=>{m.dir="rtl",e.rtl.lang&&(m.lang=e.rtl.lang)})},n.id=e.id,n.classList.add("jsPanel-"+e.paneltype),e.paneltype==="standard"&&(n.style.zIndex=this.zi.next()),i.append(n),n.front(!1,!1),n.setTheme(e.theme),e.boxShadow&&n.classList.add(`jsPanel-depth-${e.boxShadow}`),e.header){if(e.headerLogo&&n.setHeaderLogo(e.headerLogo),n.setIconfont(e.iconfont),n.setHeaderTitle(e.headerTitle),n.setHeaderControls(),O.isIE){let m=[n.headerbar,n.controlbar];switch(n.options.headerControls.size){case"md":m.forEach(w=>{w.style.height="34px"});break;case"xs":m.forEach(w=>{w.style.height="26px"});break;case"sm":m.forEach(w=>{w.style.height="30px"});break;case"lg":m.forEach(w=>{w.style.height="38px"});break;case"xl":m.forEach(w=>{w.style.height="42px"});break}}if(e.header==="auto-show-hide"){let m="jsPanel-depth-"+e.boxShadow;n.header.style.opacity=0,n.style.backgroundColor="transparent",this.remClass(n,m),this.setClass(n.content,m),n.header.addEventListener("mouseenter",()=>{n.header.style.opacity=1,O.setClass(n,m),O.remClass(n.content,m)}),n.header.addEventListener("mouseleave",()=>{n.header.style.opacity=0,O.remClass(n,m),O.setClass(n.content,m)})}}else n.setHeaderRemove(),e.addCloseControl&&n.addCloseControl();if(e.headerToolbar&&n.addToolbar(n.headertoolbar,e.headerToolbar),e.footerToolbar&&n.addToolbar(n.footer,e.footerToolbar),e.border&&n.setBorder(e.border),e.borderRadius&&n.setBorderRadius(e.borderRadius),e.css)for(const[m,w]of Object.entries(e.css))if(m==="panel")n.className+=` ${w}`;else{let E=n.querySelector(`.jsPanel-${m}`);E&&(E.className+=` ${w}`)}if(e.content&&(typeof e.content=="function"?e.content.call(n,n):typeof e.content=="string"?n.content.innerHTML=e.content:n.content.append(e.content)),e.contentAjax&&this.ajax(e.contentAjax,n),e.contentFetch&&this.fetch(e.contentFetch,n),e.contentOverflow){const m=e.contentOverflow.split(" ");m.length===1?n.content.style.overflow=m[0]:m.length===2&&(n.content.style.overflowX=m[0],n.content.style.overflowY=m[1])}if(e.autoclose){typeof e.autoclose=="number"?e.autoclose={time:e.autoclose+"ms"}:typeof e.autoclose=="string"&&(e.autoclose={time:e.autoclose});let m=Object.assign({},O.defaultAutocloseConfig,e.autoclose);m.time&&typeof m.time=="number"&&(m.time+="ms");let w=n.progressbar.querySelector("div");w.addEventListener("animationend",E=>{E.stopPropagation(),n.progressbar.classList.remove("active"),n.close()}),m.progressbar&&(n.progressbar.classList.add("active"),m.background?O.colorNames[m.background]?n.progressbar.style.background="#"+O.colorNames[m.background]:n.progressbar.style.background=m.background:n.progressbar.classList.add("success-bg")),w.style.animation=`${m.time} progressbar`}if(e.rtl&&n.setRtl(),n.setSize(),n.status="normalized",e.position?this.position(n,e.position):n.style.opacity=1,document.dispatchEvent(h),n.calcSizeFactors(),e.animateIn&&(n.addEventListener("animationend",()=>{this.remClass(n,e.animateIn)}),this.setClass(n,e.animateIn)),e.syncMargins){let m=this.pOcontainment(e.maximizedMargin);e.dragit&&(e.dragit.containment=m,e.dragit.snap===!0?(e.dragit.snap=O.defaultSnapConfig,e.dragit.snap.containment=!0):e.dragit.snap&&(e.dragit.snap.containment=!0)),e.resizeit&&(e.resizeit.containment=m)}if(e.dragit?(["start","drag","stop"].forEach(m=>{e.dragit[m]?typeof e.dragit[m]=="function"&&(e.dragit[m]=[e.dragit[m]]):e.dragit[m]=[]}),n.drag(e.dragit),n.addEventListener("jspaneldragstop",m=>{m.panel===n&&n.calcSizeFactors()},!1)):n.titlebar.style.cursor="default",e.resizeit){["start","resize","stop"].forEach(w=>{e.resizeit[w]?typeof e.resizeit[w]=="function"&&(e.resizeit[w]=[e.resizeit[w]]):e.resizeit[w]=[]}),n.sizeit(e.resizeit);let m;n.addEventListener("jspanelresizestart",w=>{w.panel===n&&(m=n.status)},!1),n.addEventListener("jspanelresizestop",w=>{w.panel===n&&(m==="smallified"||m==="smallifiedmax"||m==="maximized")&&parseFloat(n.style.height)>parseFloat(window.getComputedStyle(n.header).height)&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(h),document.dispatchEvent(l),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every"),n.calcSizeFactors())},!1)}if(n.saveCurrentDimensions(),n.saveCurrentPosition(),e.setStatus&&(e.setStatus==="smallifiedmax"?n.maximize().smallify():e.setStatus==="smallified"?n.smallify():n[e.setStatus.slice(0,-1)]()),this.pointerdown.forEach(m=>{n.addEventListener(m,w=>{!w.target.closest(".jsPanel-btn-close")&&!w.target.closest(".jsPanel-btn-minimize")&&e.paneltype==="standard"&&n.front()},!1)}),e.onwindowresize&&n.options.container==="window"&&window.addEventListener("resize",n.windowResizeHandler,!1),e.onparentresize){let m=e.onparentresize,w=typeof m,E=n.isChildpanel();if(E){const g=E.content;let C=[];n.parentResizeHandler=ae=>{if(ae.panel===E){C[0]=g.offsetWidth,C[1]=g.offsetHeight;let he=n.status,q,Y;he==="maximized"&&m?n.maximize():n.snapped&&he!=="minimized"?n.snap(n.snapped,!0):he==="normalized"||he==="smallified"||he==="maximized"?w==="function"?m.call(n,n,{width:C[0],height:C[1]}):w==="object"&&m.preset===!0?(q=(C[0]-n.offsetWidth)*n.hf,n.style.left=q<=0?0:q+"px",Y=(C[1]-n.offsetHeight)*n.vf,n.style.top=Y<=0?0:Y+"px",m.callback.call(n,n,{width:C[0],height:C[1]})):w==="boolean"&&(q=(C[0]-n.offsetWidth)*n.hf,n.style.left=q<=0?0:q+"px",Y=(C[1]-n.offsetHeight)*n.vf,n.style.top=Y<=0?0:Y+"px"):he==="smallifiedmax"&&m&&n.maximize().smallify()}},document.addEventListener("jspanelresize",n.parentResizeHandler,!1)}}return this.globalCallbacks&&(Array.isArray(this.globalCallbacks)?this.globalCallbacks.forEach(m=>m.call(n,n)):this.globalCallbacks.call(n,n)),e.callback&&(Array.isArray(e.callback)?e.callback.forEach(m=>m.call(n,n)):e.callback.call(n,n)),t&&(Array.isArray(t)?t.forEach(m=>m.call(n,n)):t.call(n,n)),document.dispatchEvent(a),n}};var Wf=Object.defineProperty,Kf=Object.getOwnPropertyDescriptor,_s=(e,t,r,i)=>{for(var n=i>1?void 0:i?Kf(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Wf(t,r,n),n};function Vf(e,t){(sn.instance??Yf()).show(e,t)}function Yf(){const e=document.createElement("table-info-dialog");return document.body.appendChild(e),e}let sn=class extends Me{constructor(){super(...arguments),this.name="",this.info=null,this.dialogEl=null,this.close=()=>this.dialogEl?.close()}connectedCallback(){super.connectedCallback(),sn.instance=this}disconnectedCallback(){super.disconnectedCallback(),sn.instance===this&&(sn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Yt(this.dialogEl,e)}show(e,t){this.name=e,this.info=t,this.updateComplete.then(()=>this.dialogEl?.showModal())}row(e,t,r){if(!t&&!r)return fe;const i=r?z`<a href=${r} target="_blank" rel="noopener noreferrer">${t||r}</a>`:z`${t}`;return z`<dt>${e}</dt>
      <dd>${i}</dd>`}render(){const e=this.info,t=!!(e?.source||e?.sourceUrl||e?.license||e?.licenseUrl||e?.about||e?.aboutUrl);return z`
      <dialog @cancel=${this.close}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>×</button>
        <div class="dialog-header">
          <h2>${this.name}</h2>
          <div class="header-actions">
            <button type="button" class="ghost" @click=${this.close}>Close</button>
          </div>
        </div>
        <div class="dialog-body">
          ${e?.descriptionHtml?z`<div class="desc">${Jr(e.descriptionHtml)}</div>`:e?.description?z`<div class="desc">${e.description}</div>`:fe}
          ${t?z`<dl>
                ${this.row("Source",e?.source,e?.sourceUrl)}
                ${this.row("License",e?.license,e?.licenseUrl)}
                ${this.row("About",e?.about,e?.aboutUrl)}
              </dl>`:fe}
          ${!e?.description&&!e?.descriptionHtml&&!t?z`<p class="empty">No additional information.</p>`:fe}
        </div>
      </dialog>
    `}};sn.instance=null;sn.styles=[Vt,Qe`
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
    `];_s([H()],sn.prototype,"name",2);_s([H()],sn.prototype,"info",2);sn=_s([et("table-info-dialog")],sn);const Xf=.25,Gf=4;function Qf(e){return Math.min(Gf,Math.max(Xf,e))}function Jo(e,t,r){return{x:e.x+t,y:e.y+r,scale:e.scale}}const fr={x:0,y:0,scale:1};function Zo(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Jf(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function Zf(e,t){let r={...fr};t.style.transformOrigin="0 0";const i=new Set,n=()=>{t.style.transform=`translate(${r.x}px, ${r.y}px) scale(${r.scale})`;for(const w of i)w({...r})};let a="none",l={...fr},u=0,h=0,y=0,k=0,x=0,I=0;const V=(w,E)=>{const g=e.getBoundingClientRect();return{x:w-g.left,y:E-g.top}},L=w=>{if(w.touches.length===2){a="pinch",l={...r};const[E,g]=[w.touches[0],w.touches[1]];y=Zo(E,g)||1;const C=V((E.clientX+g.clientX)/2,(E.clientY+g.clientY)/2);k=(C.x-r.x)/r.scale,x=(C.y-r.y)/r.scale,w.preventDefault();return}if(w.touches.length===1&&!Jf(w.target)){const E=w.timeStamp;if(E-I<300){r={...fr},n(),I=0,a="none",w.preventDefault();return}I=E,a="pan",l={...r},u=w.touches[0].clientX,h=w.touches[0].clientY}else a="none"},N=w=>{if(a==="pan"&&w.touches.length===1){const E=w.touches[0];r=Jo(l,E.clientX-u,E.clientY-h),n(),w.preventDefault()}else if(a==="pinch"&&w.touches.length>=2){const[E,g]=[w.touches[0],w.touches[1]],C=Qf(l.scale*(Zo(E,g)/y)),ae=V((E.clientX+g.clientX)/2,(E.clientY+g.clientY)/2);r={x:ae.x-k*C,y:ae.y-x*C,scale:C},n(),w.preventDefault()}},ee=w=>{w.touches.length===0?a="none":w.touches.length===1&&a==="pinch"&&(a="pan",l={...r},u=w.touches[0].clientX,h=w.touches[0].clientY)};let ce=!1,je={...fr},Oe=0,oe=0,ie=!1;const pe=(w,E)=>{const g=e.getBoundingClientRect();return w>=g.left&&w<=g.right&&E>=g.top&&E<=g.bottom},Se=w=>{if(!ce)return;const E=w.clientX-Oe,g=w.clientY-oe;!ie&&Math.hypot(E,g)<4||(ie=!0,document.body.style.cursor="grabbing",r=Jo(je,E,g),n(),w.preventDefault())},ot=()=>{ce&&(ce=!1,document.body.style.cursor="",window.removeEventListener("mousemove",Se,!0),window.removeEventListener("mouseup",gt,!0))};function gt(){ot()}const ct=w=>{w.button===2&&pe(w.clientX,w.clientY)&&(ce=!0,ie=!1,je={...r},Oe=w.clientX,oe=w.clientY,window.addEventListener("mousemove",Se,!0),window.addEventListener("mouseup",gt,!0))},m=w=>{ie&&(w.preventDefault(),ie=!1)};return e.addEventListener("touchstart",L,{passive:!1}),e.addEventListener("touchmove",N,{passive:!1}),e.addEventListener("touchend",ee),e.addEventListener("touchcancel",ee),window.addEventListener("mousedown",ct,!0),window.addEventListener("contextmenu",m,!0),{snapshot:()=>({...r}),reset:()=>{r={...fr},n()},restore:w=>{r={...w},n()},subscribe:w=>(i.add(w),()=>i.delete(w)),dispose:()=>{e.removeEventListener("touchstart",L),e.removeEventListener("touchmove",N),e.removeEventListener("touchend",ee),e.removeEventListener("touchcancel",ee),window.removeEventListener("mousedown",ct,!0),window.removeEventListener("contextmenu",m,!0),ot()}}}function al(e,t){let r=null;const i=n=>{const a=document.getElementById(e);a&&(a.style.transformOrigin="0 0",a.style.transform=`translate(${-n.x/n.scale}px, ${-n.y/n.scale}px) scale(${1/n.scale})`)};return{enter(){const n=t();r||!n||(i(n.snapshot()),r=n.subscribe(i))},exit(){r?.(),r=null;const n=document.getElementById(e);n&&(n.style.transform="",n.style.transformOrigin="")}}}var ep=Object.defineProperty,tp=Object.getOwnPropertyDescriptor,Cr=(e,t,r,i)=>{for(var n=i>1?void 0:i?tp(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&ep(t,r,n),n};let Nn=class extends Me{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return z`<button
        class="icon ${e?"active":""}"
        title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"}
        @click=${this.openSearch}
      >
        <span class="mi sm">search</span>
      </button>`}return z`<input
      type="search"
      placeholder="search…"
      .value=${this.query}
      @input=${this.onInput}
      @blur=${this.onBlur}
    />`}};Nn.styles=[on,Qe`
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
    `];Cr([Bt({type:String})],Nn.prototype,"tableId",2);Cr([H()],Nn.prototype,"query",2);Cr([H()],Nn.prototype,"open",2);Cr([Zn("input")],Nn.prototype,"inputEl",2);Nn=Cr([et("panel-search")],Nn);var np=Object.defineProperty,rp=Object.getOwnPropertyDescriptor,nr=(e,t,r,i)=>{for(var n=i>1?void 0:i?rp(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&np(t,r,n),n};let kn=class extends Me{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.rowsActive=!1}async connectedCallback(){super.connectedCallback();const e=await ye();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(r=>r.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await ye();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await ye(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const r={};for(const i of t.columns)r[i.field]=ip(i);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:r,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}async runTableButton(e){const t=await ye();try{await Promise.resolve(e.onClick(t.api,{tableId:this.tableId}))}catch(r){console.error(`[table-button:${e.id}]`,r)}}render(){return z`
      <button title="Add a blank row" aria-label="Add row" @click=${this.addRow}>
        <span class="mi sm">add</span>
      </button>
      <button title="Edit columns" aria-label="Columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span>
      </button>
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>z`<button
              title=${e.tooltip??e.label}
              aria-label=${e.label}
              @click=${()=>this.runTableButton(e)}
            >
              ${e.icon?z`<span class="mi sm">${e.icon}</span>`:z`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};kn.styles=[on,Qe`
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
    `];nr([Bt({type:String})],kn.prototype,"tableId",2);nr([Bt({type:Boolean})],kn.prototype,"active",2);nr([H()],kn.prototype,"rowCount",2);nr([H()],kn.prototype,"tableButtons",2);nr([H()],kn.prototype,"table",2);kn=nr([et("panel-footer")],kn);function ip(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function sp(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function op(e){const t=document.querySelector("app-shell")?.shadowRoot,r=t?.querySelector("header"),i=t?.querySelector("footer");r&&(e.style.top=`${r.offsetHeight}px`),i&&(e.style.bottom=`${i.offsetHeight}px`)}const On=new Map,ei=new Set,ll=new Set;let ea=!1,As=null;function ap(){return As}async function lp(){if(ea)return;ea=!0;const e=await ye(),t=document.getElementById("easydb-panels"),r=document.getElementById("easydb-panels-viewport");if(t&&r){As=Zf(t,r);const n=()=>op(t);n(),window.addEventListener("resize",n);const a=document.querySelector("app-shell")?.shadowRoot,l=a?.querySelector("header"),u=a?.querySelector("footer");if(typeof ResizeObserver<"u"&&(l||u)){const h=new ResizeObserver(n);l&&h.observe(l),u&&h.observe(u)}}const i=(await e.store.tables.find()).filter(n=>n.workspaceId===e.workspaceId);i.sort(ta);for(const n of i)na(n,e);e.store.tables.subscribe(n=>{const a=n.filter(h=>h.workspaceId===e.workspaceId),l=new Set(a.map(h=>h.id));for(const[h,y]of On)if(!l.has(h)){On.delete(h),ei.add(h),ll.add(h);try{y.status!=="closed"&&y.close()}catch{}}const u=a.filter(h=>!On.has(h.id)).sort(ta);for(const h of u)na(h,e)})}function ta(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const cp=200,up=100,dp=720,hp=360;function fp(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<cp||e.h<up?null:{...e}}function na(e,t){const r=`panel-${cl(e.id)}`,i=sp(),n=fp(e.windowGeometry),a=n?.minimized===!0,l=()=>{const E=document.createElement("data-table");return E.tableId=e.id,E.style.height="100%",E},u=a?document.createElement("div"):l();let h=a?null:u,y=e.name,k=-1,x=-1;const I=()=>{typeof ie.setHeaderTitle=="function"&&ie.setHeaderTitle(y+Fa(k,x))},V=E=>{const g=E.detail;g.key===e.id&&(k=g.count,x=g.total,I())};document.addEventListener(ai,V);const L=()=>{ce.active=!1,h?.remove(),h=null},N=()=>{if(h)return;const E=document.getElementById(r)?.querySelector(".jsPanel-content");if(!E)return;E.replaceChildren();const g=l();E.appendChild(g),h=g,ce.active=!0},ee=document.createElement("panel-search");ee.tableId=e.id;const ce=document.createElement("panel-footer");ce.tableId=e.id,ce.active=!a;const je=al(r,()=>As),Oe=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:mp(),oe=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:`${dp} ${hp}`},ie=O.create({id:r,container:i,headerTitle:e.name,footerToolbar:ce,theme:"primary",content:u,...oe,position:Oe,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>ts(e.id,t)},resizeit:{containment:!1,stop:()=>ts(e.id,t)},onfronted:()=>gp(e.id,t),onbeforeclose:()=>ei.has(e.id)?!0:((async()=>await t.api.ui.dialogs.confirm(e.source?`Remove the live table "${e.name}"? Its data stays on the Datasette server.`:`Delete table "${e.name}" and all its rows?`,"Confirm")&&(ei.add(e.id),On.get(e.id)?.close()))(),!1),onclosed:async()=>{On.delete(e.id),ei.delete(e.id),!ll.delete(e.id)&&await bp(e.id,t)},onstatuschange:E=>{E.status==="minimized"?L():(E.status==="normalized"||E.status==="maximized")&&N(),E.status==="maximized"?je.enter():je.exit(),ts(e.id,t)}});On.set(e.id,ie);const pe=document.getElementById(r),Se=pe?.querySelector(".jsPanel-controlbar");Se&&Se.prepend(ee);const ot=pe?.querySelector(".jsPanel-titlebar");ot&&(ot.tabIndex=-1,ot.style.outline="none",ot.addEventListener("pointerdown",()=>ot.focus()));let gt=null;const ct=document.createElement("button");ct.type="button",ct.title="Table info",ct.setAttribute("aria-label","Table info"),ct.className="eda-info-btn",ct.textContent="ⓘ",ct.style.cssText="display:none;background:none;border:0;color:inherit;cursor:pointer;font-size:1rem;line-height:1;padding:0 0.3rem;",ct.addEventListener("click",E=>{E.stopPropagation(),gt&&Vf(y,gt)}),Se?.prepend(ct);const m=E=>{gt=E?.info??null,ct.style.display=gt?"inline-flex":"none"};m(e),n?.maximized&&typeof ie.maximize=="function"?queueMicrotask(()=>ie.maximize?.()):n?.minimized&&typeof ie.minimize=="function"&&queueMicrotask(()=>ie.minimize?.()),t.store.tables.subscribe(E=>{const g=E.find(C=>C.id===e.id);g&&(m(g),g.name!==y&&(y=g.name,I()))});const w=ie.close.bind(ie);ie.close=()=>(document.removeEventListener(ai,V),w())}let pp=0;function mp(){const e=pp++;return{my:"left-top",at:"left-top",offsetX:40+e%8*30,offsetY:80+e%8*30}}async function ts(e,t){const r=document.getElementById(`panel-${cl(e)}`);if(!r)return;const i=On.get(e)?.status??"normalized";try{const a=(await t.store.tables.findOne(e))?.windowGeometry,l=i==="minimized",u=i==="maximized";let h=r.offsetLeft,y=r.offsetTop,k=r.offsetWidth,x=r.offsetHeight;(l||u)&&a&&(h=a.x,y=a.y,k=a.w,x=a.h),h<=-9e3&&(h=a?.x??40);const I={x:h,y,w:k,h:x,z:a?.z??0,minimized:l,maximized:u};await t.store.tables.patch(e,{windowGeometry:I,updatedAt:Date.now()})}catch{}}async function gp(e,t){try{const r=await t.store.tables.findOne(e);if(!r)return;const i=r.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...i,z:Date.now()},updatedAt:Date.now()})}catch{}}async function bp(e,t){if(!(await t.store.tables.findOne(e))?.source){const i=t.store.rows(e),n=await i.find();await i.bulkRemove(n.map(a=>a.id))}await t.store.tables.remove(e)}function cl(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}var yp=Object.defineProperty,wp=Object.getOwnPropertyDescriptor,Jt=(e,t,r,i)=>{for(var n=i>1?void 0:i?wp(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&yp(t,r,n),n};let Ot=class extends Me{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.tableColumns=[],this.rows=[],this.showColsMenu=!1,this.allRows=[],this.searchQuery="",this.onSearch=e=>{const t=e.detail;t.tableId===this.viewInstanceId&&(this.searchQuery=t.query??"",this.recompute())}}get templateOn(){return this.instance?.templateEnabled!==!1}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:table-search",this.onSearch),await this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:table-search",this.onSearch),this.rowsUnsub?.(),this.instUnsub?.()}async updated(e){e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}async reload(){this.rowsUnsub?.(),this.loaded=!1,await this.load()}async load(){if(!this.viewInstanceId)return;this.rowsUnsub?.(),this.instUnsub?.();const e=await ye(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const r=await e.store.tables.findOne(t.tableId);this.tableColumns=r?.columns??[],r&&t.tableName!==r.name&&e.store.viewInstances.patch(t.id,{tableName:r.name});const i=new Map(this.tableColumns.map(a=>[a.field,a]));this.columns=t.visibleColumns.map(a=>i.get(a)??{field:a,label:a,type:"string"}),this.instUnsub=e.store.viewInstances.subscribe(a=>{const l=a.find(u=>u.id===this.viewInstanceId);if(l){if(l.tableId!==this.instance?.tableId){this.instance=l,this.reload();return}this.instance=l,this.recompute()}});const n=e.store.rows(t.tableId);this.rowsUnsub=n.subscribe(a=>{this.allRows=a,this.recompute()}),this.allRows=await n.find(),this.recompute(),this.loaded=!0}recompute(){if(!this.instance)return;let e=of(this.allRows,this.instance);const t=this.searchQuery.trim();t&&(e=as(e,t,(r,i)=>Object.values(r.data).some(n=>n!=null&&String(n).toLowerCase().includes(i)))),this.rows=e,this.templateOn&&Oa(this.viewInstanceId,e.length,this.allRows.length)}async toggleTemplate(){if(!this.instance)return;const e=!this.templateOn;await(await ye()).store.viewInstances.patch(this.instance.id,{templateEnabled:e,updatedAt:Date.now()}),this.instance={...this.instance,templateEnabled:e},this.showColsMenu=!1}editTemplate(){!this.instance||!this.template||hs(this.instance.tableId,{editTemplateId:this.template.id})}editView(){this.instance&&hs(this.instance.tableId,{editInstanceId:this.instance.id})}async toggleColumn(e){if(!this.instance)return;const t=this.instance.visibleColumns,i=t.includes(e)?t.filter(a=>a!==e):[...t,e];if(i.length===0)return;await(await ye()).store.viewInstances.patch(this.instance.id,{visibleColumns:i,updatedAt:Date.now()}),this.instance={...this.instance,visibleColumns:i}}renderTable(){return this.rows.length===0?z`<div class="vw-empty">No rows.</div>`:z`
      <table class="vw-table">
        <thead>
          <tr>
            ${this.columns.map(e=>z`<th>${e.label||e.field}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map(e=>z`<tr>
                ${this.columns.map(t=>{const r=e.data[t.field];return z`<td>${r==null?"":String(r)}</td>`})}
              </tr>`)}
        </tbody>
      </table>
    `}renderTemplated(){const e=this.template;if(!e)return z`<div class="vw-empty">This view's template is missing.</div>`;if(af(e.rowHtml)){const t=this.instance?.mapping??{},r=this.rows.map(n=>nf(e.rowHtml,n,t)).join(""),i=(e.headerHtml??"")+r+(e.footerHtml??"");return z`<div class="vw-root">${Jr(i)}</div>`}return z`<div class="vw-root">
      ${e.headerHtml?.trim()?z`<div class="vw-html">${Jr(e.headerHtml)}</div>`:fe}
      ${this.renderTable()}
      ${e.footerHtml?.trim()?z`<div class="vw-html">${Jr(e.footerHtml)}</div>`:fe}
    </div>`}renderFooter(){if(!this.instance)return fe;const e=this.templateOn,t=new Set(this.instance.visibleColumns);return z`<div class="vw-footer">
      ${!e&&this.showColsMenu?z`<div class="cols-menu">
            ${this.tableColumns.map(r=>z`<label
                  ><input
                    type="checkbox"
                    .checked=${t.has(r.field)}
                    @change=${()=>void this.toggleColumn(r.field)}
                  />${r.label||r.field}</label
                >`)}
          </div>`:fe}
      ${e?fe:z`<button
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
      ${this.template?z`<button
            class="edit-template"
            aria-label="Edit template"
            title=${`Edit the "${this.template.name}" template`}
            @click=${()=>this.editTemplate()}
          >
            <span class="mi">code</span>
          </button>`:fe}
      <button
        class=${e?"":"active"}
        title=${e?"Show as a table (turn the template off)":"Show through the template"}
        aria-label="Toggle template"
        aria-pressed=${e?"false":"true"}
        @click=${()=>void this.toggleTemplate()}
      >
        <span class="mi">table_view</span>
      </button>
    </div>`}render(){if(!this.loaded)return z`<div class="vw-body scroll"><div class="vw-loading">Loading…</div></div>`;if(this.error)return z`<div class="vw-body scroll"><div class="vw-empty">${this.error}</div></div>`;const t=this.templateOn?z`<div class="vw-body scroll">${this.renderTemplated()}</div>`:z`<div class="vw-body grid">
          <data-table
            .tableId=${this.instance?.tableId??""}
            .viewInstanceId=${this.viewInstanceId}
          ></data-table>
        </div>`;return z`${t}${this.renderFooter()}`}};Ot.styles=[on,Qe`
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
    `];Jt([Bt({type:String})],Ot.prototype,"viewInstanceId",2);Jt([H()],Ot.prototype,"loaded",2);Jt([H()],Ot.prototype,"error",2);Jt([H()],Ot.prototype,"instance",2);Jt([H()],Ot.prototype,"template",2);Jt([H()],Ot.prototype,"columns",2);Jt([H()],Ot.prototype,"tableColumns",2);Jt([H()],Ot.prototype,"rows",2);Jt([H()],Ot.prototype,"showColsMenu",2);Jt([H()],Ot.prototype,"searchQuery",2);Ot=Jt([et("view-window")],Ot);const qt=new Map;let ra=!1;function ia(e){e.panel.setHeaderTitle?.(e.name+Fa(e.count,e.total))}function vp(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function xp(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function ul(e){return`view-panel-${xp(e)}`}async function $p(){if(ra)return;ra=!0;const e=await ye(),t=r=>r.filter(i=>i.workspaceId===e.workspaceId&&i.open);for(const r of t(await e.store.viewInstances.find()))sa(r,e);e.store.viewInstances.subscribe(r=>{const i=new Map(t(r).map(n=>[n.id,n]));for(const n of[...qt.keys()])i.has(n)||Cp(n);for(const[n,a]of i)qt.has(n)||sa(a,e)}),e.store.tables.subscribe(r=>void kp(e,r)),document.addEventListener(ai,r=>{const i=r.detail,n=qt.get(i.key);n&&(n.count=i.count,n.total=i.total,ia(n))}),document.addEventListener("easydb:reload-view",r=>{const i=r.detail?.instanceId;if(!i)return;const n=qt.get(i);n&&(async()=>{const a=await e.store.viewInstances.findOne(i);a&&(n.name=a.name,ia(n)),n.el.reload()})()}),document.addEventListener("easydb:reload-views",()=>{for(const{el:r}of qt.values())r.reload()})}async function kp(e,t){const r=t.filter(l=>l.workspaceId===e.workspaceId),i=new Set(r.map(l=>l.id)),n=new Map;for(const l of r)n.has(l.name)||n.set(l.name,l);const a=await e.store.viewInstances.find();for(const l of a){if(l.workspaceId!==e.workspaceId||i.has(l.tableId)||!l.tableName)continue;const u=n.get(l.tableName);u&&await e.store.viewInstances.patch(l.id,{tableId:u.id,updatedAt:Date.now()})}}function sa(e,t){if(qt.has(e.id))return;const r=ul(e.id),i=document.createElement("view-window");i.viewInstanceId=e.id,i.style.height="100%";const n=e.windowGeometry,a=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:"480 520"},l=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:{my:"center-top",at:"center-top",offsetY:60},u=al(r,ap),h=O.create({id:r,container:vp(),headerTitle:e.name,theme:"#0891b2",content:i,...a,position:l,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>void ns(e.id)},resizeit:{containment:!1,stop:()=>void ns(e.id)},onstatuschange:I=>{I.status==="maximized"?u.enter():u.exit(),ns(e.id)},onclosed:()=>{qt.delete(e.id),u.exit(),t.store.viewInstances.patch(e.id,{open:!1,updatedAt:Date.now()}).catch(()=>{})}});qt.set(e.id,{panel:h,el:i,name:e.name,count:-1,total:-1});const y=document.getElementById(r),k=document.createElement("panel-search");k.tableId=e.id,y?.querySelector(".jsPanel-controlbar")?.prepend(k);const x=y?.querySelector(".jsPanel-titlebar");x&&(x.tabIndex=-1,x.style.outline="none",x.addEventListener("pointerdown",()=>x.focus())),n?.maximized?queueMicrotask(()=>h.maximize?.()):n?.minimized&&queueMicrotask(()=>h.minimize?.())}function Cp(e){const t=qt.get(e);if(t){qt.delete(e);try{t.panel.status!=="closed"&&t.panel.close()}catch{}}}async function ns(e){const t=document.getElementById(ul(e)),r=qt.get(e);if(!t||!r)return;const i=r.panel.status,n=i==="minimized",a=i==="maximized";try{const l=await ye(),u=(await l.store.viewInstances.findOne(e))?.windowGeometry;let h=t.offsetLeft,y=t.offsetTop,k=t.offsetWidth,x=t.offsetHeight;(n||a)&&u&&(h=u.x,y=u.y,k=u.w,x=u.h),h<=-9e3&&(h=u?.x??40);const I={x:h,y,w:k,h:x,z:0,minimized:n,maximized:a};await l.store.viewInstances.patch(e,{windowGeometry:I,updatedAt:Date.now()})}catch{}}var Ep=Object.defineProperty,Sp=Object.getOwnPropertyDescriptor,dl=(e,t,r,i)=>{for(var n=i>1?void 0:i?Sp(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Ep(t,r,n),n};let ci=class extends Me{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await ye();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(r=>this.tables=r.filter(i=>i.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(r=>r.workspaceId===this.workspaceId),await lp(),await $p()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?z``:z`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on the
      page, or click <strong>+ New Table</strong> above.
    </div>`}};ci.styles=Qe`
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
  `;dl([H()],ci.prototype,"tables",2);ci=dl([et("table-list")],ci);var _p=Object.defineProperty,Ap=Object.getOwnPropertyDescriptor,Ps=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ap(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&_p(t,r,n),n};let wr=class extends Me{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await ye();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);if(!t)return;const r=new URLSearchParams(location.search);r.set("space",t.name);const i=`${location.pathname}?${r.toString()}${location.hash}`;location.assign(i)}async addWorkspace(){const t=await(await ye()).api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const r=new URLSearchParams(location.search);r.set("space",t.trim()),location.assign(`${location.pathname}?${r.toString()}${location.hash}`)}render(){return z`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>z`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};wr.styles=[on,Qe`
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
  `];Ps([H()],wr.prototype,"workspaces",2);Ps([H()],wr.prototype,"current",2);wr=Ps([et("workspace-selector")],wr);var oa=Object.freeze,hl=Object.defineProperty,Pp=Object.getOwnPropertyDescriptor,fn=(e,t,r,i)=>{for(var n=i>1?void 0:i?Pp(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&hl(t,r,n),n},Tp=(e,t)=>oa(hl(e,"raw",{value:oa(e.slice())})),aa;function Dp(e){return e?e.trimStart().startsWith("<svg")?z`<span class="icon-svg">${hc(e)}</span>`:z`<span class="mi sm">${e}</span>`:""}let Kt=class extends Me{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId)},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{la(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!la(e))return;e.preventDefault();const t=await ye(),r=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:r,event:e});for(const i of[...t.registries.dropHandlers])try{if(await i(e,t.api))return}catch(n){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:n})}},this.runSlot=e=>{this.api&&Promise.resolve(e.onClick(this.api)).catch(t=>{console.error(`[footer-button:${e.id}]`,t)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager)}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await ye();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e))}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){const r=t==="header"||e.variant==="primary"?"primary":"slot";return z`
      <button class=${r} title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
        ${Dp(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return z(aa||(aa=Tp([`
      <header>
        <strong>easyDBAccess <span class="version">v0.0.76</span></strong>
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
    `])),this.headerButtons.map(e=>this.renderSlotButton(e,"header")),this.searchOpen?z`<span class="search-wrap">
              <input
                class="search"
                type="search"
                placeholder="search all tables…"
                .value=${this.searchQuery}
                @input=${this.onSearchInput}
                @blur=${this.closeSearchOnBlur}
              />
              ${this.searchQuery.length>0?z`<button
                    class="search-clear"
                    title="Clear search"
                    aria-label="Clear search"
                    @mousedown=${this.clearSearch}
                  >
                    ×
                  </button>`:""}
            </span>`:z`<button
              class="icon-btn ${this.searchQuery.trim().length>0?"active":""}"
              title=${this.searchQuery.trim().length>0?`Filtering all tables: ${this.searchQuery}`:"Search across all tables in this workspace"}
              @click=${this.openSearch}
            >
              <span class="mi">search</span>
            </button>`,this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};Kt.styles=[on,Qe`
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
    `];fn([Zn("new-table-dialog")],Kt.prototype,"dialog",2);fn([Zn("csv-paste-dialog")],Kt.prototype,"csvPasteDialog",2);fn([Zn("plugin-manager-dialog")],Kt.prototype,"pluginManagerDialog",2);fn([Zn("input.search")],Kt.prototype,"searchInput",2);fn([H()],Kt.prototype,"footerButtons",2);fn([H()],Kt.prototype,"headerButtons",2);fn([H()],Kt.prototype,"searchQuery",2);fn([H()],Kt.prototype,"searchOpen",2);Kt=fn([et("app-shell")],Kt);function la(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([ye(),Ll(()=>Promise.resolve().then(()=>nl),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});
//# sourceMappingURL=index-8G6JOBjZ.js.map
