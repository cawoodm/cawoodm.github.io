(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const Ll="modulepreload",Bl=function(e){return"/easydbaccess/"+e},uo={},Ml=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){let l=function(y){return Promise.all(y.map(k=>Promise.resolve(k).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),h=u?.nonce||u?.getAttribute("nonce");n=l(r.map(y=>{if(y=Bl(y),y in uo)return;uo[y]=!0;const k=y.endsWith(".css"),v=k?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${v}`))return;const I=document.createElement("link");if(I.rel=k?"stylesheet":Ll,k||(I.as="script"),I.crossOrigin="",I.href=y,h&&I.setAttribute("nonce",h),document.head.appendChild(I),k)return new Promise((W,z)=>{I.addEventListener("load",W),I.addEventListener("error",()=>z(new Error(`Unable to preload CSS for ${y}`)))})}))}function a(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return n.then(l=>{for(const u of l||[])u.status==="rejected"&&a(u.reason);return t().catch(a)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jr=globalThis,ys=Jr.ShadowRoot&&(Jr.ShadyCSS===void 0||Jr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ws=Symbol(),ho=new WeakMap;let pa=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==ws)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(ys&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=ho.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ho.set(r,t))}return t}toString(){return this.cssText}};const Nl=e=>new pa(typeof e=="string"?e:e+"",void 0,ws),Je=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,a)=>i+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[a+1],e[0]);return new pa(r,e,ws)},Ul=(e,t)=>{if(ys)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),n=Jr.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)}},fo=ys?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return Nl(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ql,defineProperty:Hl,getOwnPropertyDescriptor:Wl,getOwnPropertyNames:Kl,getOwnPropertySymbols:Vl,getPrototypeOf:Yl}=Object,hi=globalThis,po=hi.trustedTypes,Xl=po?po.emptyScript:"",Gl=hi.reactiveElementPolyfillSupport,gr=(e,t)=>e,ni={toAttribute(e,t){switch(t){case Boolean:e=e?Xl:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},vs=(e,t)=>!ql(e,t),mo={attribute:!0,type:String,converter:ni,reflect:!1,useDefault:!1,hasChanged:vs};Symbol.metadata??=Symbol("metadata"),hi.litPropertyMetadata??=new WeakMap;let Gn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=mo){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,r);n!==void 0&&Hl(this.prototype,t,n)}}static getPropertyDescriptor(t,r,i){const{get:n,set:a}=Wl(this.prototype,t)??{get(){return this[r]},set(l){this[r]=l}};return{get:n,set(l){const u=n?.call(this);a?.call(this,l),this.requestUpdate(t,u,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??mo}static _$Ei(){if(this.hasOwnProperty(gr("elementProperties")))return;const t=Yl(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(gr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(gr("properties"))){const r=this.properties,i=[...Kl(r),...Vl(r)];for(const n of i)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)r.unshift(fo(n))}else t!==void 0&&r.push(fo(t));return r}static _$Eu(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ul(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$ET(t,r){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const a=(i.converter?.toAttribute!==void 0?i.converter:ni).toAttribute(r,i.type);this._$Em=t,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(t,r){const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const a=i.getPropertyOptions(n),l=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:ni;this._$Em=n;const u=l.fromAttribute(r,a.type);this[n]=u??this._$Ej?.get(n)??u,this._$Em=null}}requestUpdate(t,r,i,n=!1,a){if(t!==void 0){const l=this.constructor;if(n===!1&&(a=this[t]),i??=l.getPropertyOptions(t),!((i.hasChanged??vs)(a,r)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(l._$Eu(t,i))))return;this.C(t,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:i,reflect:n,wrapped:a},l){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,l??r??this[t]),a!==!0||l!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,a]of i){const{wrapped:l}=a,u=this[n];l!==!0||this._$AL.has(n)||u===void 0||this.C(n,void 0,a,u)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(r)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Gn.elementStyles=[],Gn.shadowRootOptions={mode:"open"},Gn[gr("elementProperties")]=new Map,Gn[gr("finalized")]=new Map,Gl?.({ReactiveElement:Gn}),(hi.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xs=globalThis,go=e=>e,ri=xs.trustedTypes,bo=ri?ri.createPolicy("lit-html",{createHTML:e=>e}):void 0,ma="$lit$",$n=`lit$${Math.random().toFixed(9).slice(2)}$`,ga="?"+$n,Ql=`<${ga}>`,zn=document,br=()=>zn.createComment(""),yr=e=>e===null||typeof e!="object"&&typeof e!="function",$s=Array.isArray,Jl=e=>$s(e)||typeof e?.[Symbol.iterator]=="function",Ji=`[ 	
\f\r]`,pr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yo=/-->/g,wo=/>/g,Rn=RegExp(`>|${Ji}(?:([^\\s"'>=/]+)(${Ji}*=${Ji}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vo=/'/g,xo=/"/g,ba=/^(?:script|style|textarea|title)$/i,Zl=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),B=Zl(1),Ln=Symbol.for("lit-noChange"),pe=Symbol.for("lit-nothing"),$o=new WeakMap,On=zn.createTreeWalker(zn,129);function ya(e,t){if(!$s(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return bo!==void 0?bo.createHTML(t):t}const ec=(e,t)=>{const r=e.length-1,i=[];let n,a=t===2?"<svg>":t===3?"<math>":"",l=pr;for(let u=0;u<r;u++){const h=e[u];let y,k,v=-1,I=0;for(;I<h.length&&(l.lastIndex=I,k=l.exec(h),k!==null);)I=l.lastIndex,l===pr?k[1]==="!--"?l=yo:k[1]!==void 0?l=wo:k[2]!==void 0?(ba.test(k[2])&&(n=RegExp("</"+k[2],"g")),l=Rn):k[3]!==void 0&&(l=Rn):l===Rn?k[0]===">"?(l=n??pr,v=-1):k[1]===void 0?v=-2:(v=l.lastIndex-k[2].length,y=k[1],l=k[3]===void 0?Rn:k[3]==='"'?xo:vo):l===xo||l===vo?l=Rn:l===yo||l===wo?l=pr:(l=Rn,n=void 0);const W=l===Rn&&e[u+1].startsWith("/>")?" ":"";a+=l===pr?h+Ql:v>=0?(i.push(y),h.slice(0,v)+ma+h.slice(v)+$n+W):h+$n+(v===-2?u:W)}return[ya(e,a+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class wr{constructor({strings:t,_$litType$:r},i){let n;this.parts=[];let a=0,l=0;const u=t.length-1,h=this.parts,[y,k]=ec(t,r);if(this.el=wr.createElement(y,i),On.currentNode=this.el.content,r===2||r===3){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(n=On.nextNode())!==null&&h.length<u;){if(n.nodeType===1){if(n.hasAttributes())for(const v of n.getAttributeNames())if(v.endsWith(ma)){const I=k[l++],W=n.getAttribute(v).split($n),z=/([.?@])?(.*)/.exec(I);h.push({type:1,index:a,name:z[2],strings:W,ctor:z[1]==="."?nc:z[1]==="?"?rc:z[1]==="@"?ic:fi}),n.removeAttribute(v)}else v.startsWith($n)&&(h.push({type:6,index:a}),n.removeAttribute(v));if(ba.test(n.tagName)){const v=n.textContent.split($n),I=v.length-1;if(I>0){n.textContent=ri?ri.emptyScript:"";for(let W=0;W<I;W++)n.append(v[W],br()),On.nextNode(),h.push({type:2,index:++a});n.append(v[I],br())}}}else if(n.nodeType===8)if(n.data===ga)h.push({type:2,index:a});else{let v=-1;for(;(v=n.data.indexOf($n,v+1))!==-1;)h.push({type:7,index:a}),v+=$n.length-1}a++}}static createElement(t,r){const i=zn.createElement("template");return i.innerHTML=t,i}}function Jn(e,t,r=e,i){if(t===Ln)return t;let n=i!==void 0?r._$Co?.[i]:r._$Cl;const a=yr(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),a===void 0?n=void 0:(n=new a(e),n._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=n:r._$Cl=n),n!==void 0&&(t=Jn(e,n._$AS(e,t.values),n,i)),t}class tc{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:i}=this._$AD,n=(t?.creationScope??zn).importNode(r,!0);On.currentNode=n;let a=On.nextNode(),l=0,u=0,h=i[0];for(;h!==void 0;){if(l===h.index){let y;h.type===2?y=new xr(a,a.nextSibling,this,t):h.type===1?y=new h.ctor(a,h.name,h.strings,this,t):h.type===6&&(y=new sc(a,this,t)),this._$AV.push(y),h=i[++u]}l!==h?.index&&(a=On.nextNode(),l++)}return On.currentNode=zn,n}p(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class xr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,n){this.type=2,this._$AH=pe,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Jn(this,t,r),yr(t)?t===pe||t==null||t===""?(this._$AH!==pe&&this._$AR(),this._$AH=pe):t!==this._$AH&&t!==Ln&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Jl(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==pe&&yr(this._$AH)?this._$AA.nextSibling.data=t:this.T(zn.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=wr.createElement(ya(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(r);else{const a=new tc(n,this),l=a.u(this.options);a.p(r),this.T(l),this._$AH=a}}_$AC(t){let r=$o.get(t.strings);return r===void 0&&$o.set(t.strings,r=new wr(t)),r}k(t){$s(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const a of t)n===r.length?r.push(i=new xr(this.O(br()),this.O(br()),this,this.options)):i=r[n],i._$AI(a),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const i=go(t).nextSibling;go(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class fi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,n,a){this.type=1,this._$AH=pe,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=pe}_$AI(t,r=this,i,n){const a=this.strings;let l=!1;if(a===void 0)t=Jn(this,t,r,0),l=!yr(t)||t!==this._$AH&&t!==Ln,l&&(this._$AH=t);else{const u=t;let h,y;for(t=a[0],h=0;h<a.length-1;h++)y=Jn(this,u[i+h],r,h),y===Ln&&(y=this._$AH[h]),l||=!yr(y)||y!==this._$AH[h],y===pe?t=pe:t!==pe&&(t+=(y??"")+a[h+1]),this._$AH[h]=y}l&&!n&&this.j(t)}j(t){t===pe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class nc extends fi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===pe?void 0:t}}class rc extends fi{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==pe)}}class ic extends fi{constructor(t,r,i,n,a){super(t,r,i,n,a),this.type=5}_$AI(t,r=this){if((t=Jn(this,t,r,0)??pe)===Ln)return;const i=this._$AH,n=t===pe&&i!==pe||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==pe&&(i===pe||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class sc{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Jn(this,t)}}const oc=xs.litHtmlPolyfillSupport;oc?.(wr,xr),(xs.litHtmlVersions??=[]).push("3.3.3");const ac=(e,t,r)=>{const i=r?.renderBefore??t;let n=i._$litPart$;if(n===void 0){const a=r?.renderBefore??null;i._$litPart$=n=new xr(t.insertBefore(br(),a),a,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cs=globalThis;let Ne=class extends Gn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ac(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ln}};Ne._$litElement$=!0,Ne.finalized=!0,Cs.litElementHydrateSupport?.({LitElement:Ne});const lc=Cs.litElementPolyfillSupport;lc?.({LitElement:Ne});(Cs.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cc={attribute:!0,type:String,converter:ni,reflect:!1,hasChanged:vs},uc=(e=cc,t,r)=>{const{kind:i,metadata:n}=r;let a=globalThis.litPropertyMetadata.get(n);if(a===void 0&&globalThis.litPropertyMetadata.set(n,a=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),i==="accessor"){const{name:l}=r;return{set(u){const h=t.get.call(this);t.set.call(this,u),this.requestUpdate(l,h,e,!0,u)},init(u){return u!==void 0&&this.C(l,void 0,e,u),u}}}if(i==="setter"){const{name:l}=r;return function(u){const h=this[l];t.call(this,u),this.requestUpdate(l,h,e,!0,u)}}throw Error("Unsupported decorator location: "+i)};function Bt(e){return(t,r)=>typeof r=="object"?uc(e,t,r):((i,n,a)=>{const l=n.hasOwnProperty(a);return n.constructor.createProperty(a,i),l?Object.getOwnPropertyDescriptor(n,a):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function H(e){return Bt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dc=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function tr(e,t){return(r,i,n)=>{const a=l=>l.renderRoot?.querySelector(e)??null;return dc(r,i,{get(){return a(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hc={CHILD:2},wa=e=>(...t)=>({_$litDirective$:e,values:t});class fc{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ii extends fc{constructor(t){if(super(t),this.it=pe,t.type!==hc.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===pe||t==null)return this._t=void 0,this.it=t;if(t===Ln)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}ii.directiveName="unsafeHTML",ii.resultType=1;const Zr=wa(ii);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ss extends ii{}ss.directiveName="unsafeSVG",ss.resultType=2;const pc=wa(ss);var mc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ei={exports:{}},bc=ei.exports,Co;function yc(){return Co||(Co=1,(function(e,t){(function(r,i){e.exports=i()})(bc,function(){var r=function(s,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,d){c.__proto__=d}||function(c,d){for(var f in d)Object.prototype.hasOwnProperty.call(d,f)&&(c[f]=d[f])})(s,o)},i=function(){return(i=Object.assign||function(s){for(var o,c=1,d=arguments.length;c<d;c++)for(var f in o=arguments[c])Object.prototype.hasOwnProperty.call(o,f)&&(s[f]=o[f]);return s}).apply(this,arguments)};function n(s,o,c){for(var d,f=0,p=o.length;f<p;f++)!d&&f in o||((d=d||Array.prototype.slice.call(o,0,f))[f]=o[f]);return s.concat(d||Array.prototype.slice.call(o))}var a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:mc,l=Object.keys,u=Array.isArray;function h(s,o){return typeof o!="object"||l(o).forEach(function(c){s[c]=o[c]}),s}typeof Promise>"u"||a.Promise||(a.Promise=Promise);var y=Object.getPrototypeOf,k={}.hasOwnProperty;function v(s,o){return k.call(s,o)}function I(s,o){typeof o=="function"&&(o=o(y(s))),(typeof Reflect>"u"?l:Reflect.ownKeys)(o).forEach(function(c){z(s,c,o[c])})}var W=Object.defineProperty;function z(s,o,c,d){W(s,o,h(c&&v(c,"get")&&typeof c.get=="function"?{get:c.get,set:c.set,configurable:!0}:{value:c,configurable:!0,writable:!0},d))}function F(s){return{from:function(o){return s.prototype=Object.create(o.prototype),z(s.prototype,"constructor",s),{extend:I.bind(null,s.prototype)}}}}var K=Object.getOwnPropertyDescriptor,oe=[].slice;function _e(s,o,c){return oe.call(s,o,c)}function je(s,o){return o(s)}function se(s){if(!s)throw new Error("Assertion Failed")}function ae(s){a.setImmediate?setImmediate(s):setTimeout(s,0)}function fe(s,o){if(typeof o=="string"&&v(s,o))return s[o];if(!o)return s;if(typeof o!="string"){for(var c=[],d=0,f=o.length;d<f;++d){var p=fe(s,o[d]);c.push(p)}return c}var b=o.indexOf(".");if(b!==-1){var x=s[o.substr(0,b)];return x==null?void 0:fe(x,o.substr(b+1))}}function ve(s,o,c){if(s&&o!==void 0&&!("isFrozen"in Object&&Object.isFrozen(s)))if(typeof o!="string"&&"length"in o){se(typeof c!="string"&&"length"in c);for(var d=0,f=o.length;d<f;++d)ve(s,o[d],c[d])}else{var p,b,x=o.indexOf(".");x!==-1?(p=o.substr(0,x),(b=o.substr(x+1))===""?c===void 0?u(s)&&!isNaN(parseInt(p))?s.splice(p,1):delete s[p]:s[p]=c:ve(x=!(x=s[p])||!v(s,p)?s[p]={}:x,b,c)):c===void 0?u(s)&&!isNaN(parseInt(o))?s.splice(o,1):delete s[o]:s[o]=c}}function Ae(s){var o,c={};for(o in s)v(s,o)&&(c[o]=s[o]);return c}var Ze=[].concat;function rt(s){return Ze.apply([],s)}var cn="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(rt([8,16,32,64].map(function(s){return["Int","Uint","Float"].map(function(o){return o+s+"Array"})}))).filter(function(s){return a[s]}),m=new Set(cn.map(function(s){return a[s]})),w=null;function E(s){return w=new WeakMap,s=(function o(c){if(!c||typeof c!="object")return c;var d=w.get(c);if(d)return d;if(u(c)){d=[],w.set(c,d);for(var f=0,p=c.length;f<p;++f)d.push(o(c[f]))}else if(m.has(c.constructor))d=c;else{var b,x=y(c);for(b in d=x===Object.prototype?{}:Object.create(x),w.set(c,d),c)v(c,b)&&(d[b]=o(c[b]))}return d})(s),w=null,s}var g={}.toString;function C(s){return g.call(s).slice(8,-1)}var le=typeof Symbol<"u"?Symbol.iterator:"@@iterator",he=typeof le=="symbol"?function(s){var o;return s!=null&&(o=s[le])&&o.apply(s)}:function(){return null};function q(s,o){return o=s.indexOf(o),0<=o&&s.splice(o,1),0<=o}var X={};function Ve(s){var o,c,d,f;if(arguments.length===1){if(u(s))return s.slice();if(this===X&&typeof s=="string")return[s];if(f=he(s)){for(c=[];!(d=f.next()).done;)c.push(d.value);return c}if(s==null)return[s];if(typeof(o=s.length)!="number")return[s];for(c=new Array(o);o--;)c[o]=s[o];return c}for(o=arguments.length,c=new Array(o);o--;)c[o]=arguments[o];return c}var ct=typeof Symbol<"u"?function(s){return s[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Ee=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Ft=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Ee),Zt={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Ue(s,o){this.name=s,this.message=o}function ze(s,o){return s+". Errors: "+Object.keys(o).map(function(c){return o[c].toString()}).filter(function(c,d,f){return f.indexOf(c)===d}).join(`
`)}function Ce(s,o,c,d){this.failures=o,this.failedKeys=d,this.successCount=c,this.message=ze(s,o)}function De(s,o){this.name="BulkError",this.failures=Object.keys(o).map(function(c){return o[c]}),this.failuresByPos=o,this.message=ze(s,this.failures)}F(Ue).from(Error).extend({toString:function(){return this.name+": "+this.message}}),F(Ce).from(Ue),F(De).from(Ue);var Ye=Ft.reduce(function(s,o){return s[o]=o+"Error",s},{}),Pe=Ue,te=Ft.reduce(function(s,o){var c=o+"Error";function d(f,p){this.name=c,f?typeof f=="string"?(this.message="".concat(f).concat(p?`
 `+p:""),this.inner=p||null):typeof f=="object"&&(this.message="".concat(f.name," ").concat(f.message),this.inner=f):(this.message=Zt[o]||c,this.inner=null)}return F(d).from(Pe),s[o]=d,s},{});te.Syntax=SyntaxError,te.Type=TypeError,te.Range=RangeError;var Xe=Ee.reduce(function(s,o){return s[o+"Error"]=te[o],s},{}),Le=Ft.reduce(function(s,o){return["Syntax","Type","Range"].indexOf(o)===-1&&(s[o+"Error"]=te[o]),s},{});function de(){}function we(s){return s}function _t(s,o){return s==null||s===we?o:function(c){return o(s(c))}}function ce(s,o){return function(){s.apply(this,arguments),o.apply(this,arguments)}}function Ge(s,o){return s===de?o:function(){var c=s.apply(this,arguments);c!==void 0&&(arguments[0]=c);var d=this.onsuccess,f=this.onerror;this.onsuccess=null,this.onerror=null;var p=o.apply(this,arguments);return d&&(this.onsuccess=this.onsuccess?ce(d,this.onsuccess):d),f&&(this.onerror=this.onerror?ce(f,this.onerror):f),p!==void 0?p:c}}function pn(s,o){return s===de?o:function(){s.apply(this,arguments);var c=this.onsuccess,d=this.onerror;this.onsuccess=this.onerror=null,o.apply(this,arguments),c&&(this.onsuccess=this.onsuccess?ce(c,this.onsuccess):c),d&&(this.onerror=this.onerror?ce(d,this.onerror):d)}}function qt(s,o){return s===de?o:function(c){var d=s.apply(this,arguments);h(c,d);var f=this.onsuccess,p=this.onerror;return this.onsuccess=null,this.onerror=null,c=o.apply(this,arguments),f&&(this.onsuccess=this.onsuccess?ce(f,this.onsuccess):f),p&&(this.onerror=this.onerror?ce(p,this.onerror):p),d===void 0?c===void 0?void 0:c:h(d,c)}}function et(s,o){return s===de?o:function(){return o.apply(this,arguments)!==!1&&s.apply(this,arguments)}}function At(s,o){return s===de?o:function(){var c=s.apply(this,arguments);if(c&&typeof c.then=="function"){for(var d=this,f=arguments.length,p=new Array(f);f--;)p[f]=arguments[f];return c.then(function(){return o.apply(d,p)})}return o.apply(this,arguments)}}Le.ModifyError=Ce,Le.DexieError=Ue,Le.BulkError=De;var Oe=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function qe(s){Oe=s}var xt={},it=100,cn=typeof Promise>"u"?[]:(function(){var s=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[s,y(s),s];var o=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[o,y(o),s]})(),Ee=cn[0],Ft=cn[1],cn=cn[2],Ft=Ft&&Ft.then,ke=Ee&&Ee.constructor,Pt=!!cn,He=function(s,o){ot.push([s,o]),dt&&(queueMicrotask(me),dt=!1)},bt=!0,dt=!0,st=[],Be=[],ue=we,Qe={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:de,pgp:!1,env:{},finalize:de},Q=Qe,ot=[],pt=0,Ct=[];function J(s){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var o=this._PSD=Q;if(typeof s!="function"){if(s!==xt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&ht(this,this._value))}this._state=null,this._value=null,++o.ref,(function c(d,f){try{f(function(p){if(d._state===null){if(p===d)throw new TypeError("A promise cannot be resolved with itself.");var b=d._lib&&Fe();p&&typeof p.then=="function"?c(d,function(x,S){p instanceof J?p._then(x,S):p.then(x,S)}):(d._state=!0,d._value=p,mn(d)),b&&We()}},ht.bind(null,d))}catch(p){ht(d,p)}})(this,s)}var en={get:function(){var s=Q,o=Ar;function c(d,f){var p=this,b=!s.global&&(s!==Q||o!==Ar),x=b&&!bn(),S=new J(function(A,D){re(p,new an(Fs(d,s,b,x),Fs(f,s,b,x),A,D,s))});return this._consoleTask&&(S._consoleTask=this._consoleTask),S}return c.prototype=xt,c},set:function(s){z(this,"then",s&&s.prototype===xt?en:{get:function(){return s},set:en.set})}};function an(s,o,c,d,f){this.onFulfilled=typeof s=="function"?s:null,this.onRejected=typeof o=="function"?o:null,this.resolve=c,this.reject=d,this.psd=f}function ht(s,o){var c,d;Be.push(o),s._state===null&&(c=s._lib&&Fe(),o=ue(o),s._state=!1,s._value=o,d=s,st.some(function(f){return f._value===d._value})||st.push(d),mn(s),c&&We())}function mn(s){var o=s._listeners;s._listeners=[];for(var c=0,d=o.length;c<d;++c)re(s,o[c]);var f=s._PSD;--f.ref||f.finalize(),pt===0&&(++pt,He(function(){--pt==0&&Ie()},[]))}function re(s,o){if(s._state!==null){var c=s._state?o.onFulfilled:o.onRejected;if(c===null)return(s._state?o.resolve:o.reject)(s._value);++o.psd.ref,++pt,He(Te,[c,s,o])}else s._listeners.push(o)}function Te(s,o,c){try{var d,f=o._value;!o._state&&Be.length&&(Be=[]),d=Oe&&o._consoleTask?o._consoleTask.run(function(){return s(f)}):s(f),o._state||Be.indexOf(f)!==-1||(function(p){for(var b=st.length;b;)if(st[--b]._value===p._value)return st.splice(b,1)})(o),c.resolve(d)}catch(p){c.reject(p)}finally{--pt==0&&Ie(),--c.psd.ref||c.psd.finalize()}}function me(){_n(Qe,function(){Fe()&&We()})}function Fe(){var s=bt;return dt=bt=!1,s}function We(){var s,o,c;do for(;0<ot.length;)for(s=ot,ot=[],c=s.length,o=0;o<c;++o){var d=s[o];d[0].apply(null,d[1])}while(0<ot.length);dt=bt=!0}function Ie(){var s=st;st=[],s.forEach(function(d){d._PSD.onunhandled.call(null,d._value,d)});for(var o=Ct.slice(0),c=o.length;c;)o[--c]()}function Ht(s){return new J(xt,!1,s)}function Me(s,o){var c=Q;return function(){var d=Fe(),f=Q;try{return yn(c,!0),s.apply(this,arguments)}catch(p){o&&o(p)}finally{yn(f,!1),d&&We()}}}I(J.prototype,{then:en,_then:function(s,o){re(this,new an(null,null,s,o,Q))},catch:function(s){if(arguments.length===1)return this.then(null,s);var o=s,c=arguments[1];return typeof o=="function"?this.then(null,function(d){return(d instanceof o?c:Ht)(d)}):this.then(null,function(d){return(d&&d.name===o?c:Ht)(d)})},finally:function(s){return this.then(function(o){return J.resolve(s()).then(function(){return o})},function(o){return J.resolve(s()).then(function(){return Ht(o)})})},timeout:function(s,o){var c=this;return s<1/0?new J(function(d,f){var p=setTimeout(function(){return f(new te.Timeout(o))},s);c.then(d,f).finally(clearTimeout.bind(null,p))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&z(J.prototype,Symbol.toStringTag,"Dexie.Promise"),Qe.env=Os(),I(J,{all:function(){var s=Ve.apply(null,arguments).map(Pr);return new J(function(o,c){s.length===0&&o([]);var d=s.length;s.forEach(function(f,p){return J.resolve(f).then(function(b){s[p]=b,--d||o(s)},c)})})},resolve:function(s){return s instanceof J?s:s&&typeof s.then=="function"?new J(function(o,c){s.then(o,c)}):new J(xt,!0,s)},reject:Ht,race:function(){var s=Ve.apply(null,arguments).map(Pr);return new J(function(o,c){s.map(function(d){return J.resolve(d).then(o,c)})})},PSD:{get:function(){return Q},set:function(s){return Q=s}},totalEchoes:{get:function(){return Ar}},newPSD:gn,usePSD:_n,scheduler:{get:function(){return He},set:function(s){He=s}},rejectionMapper:{get:function(){return ue},set:function(s){ue=s}},follow:function(s,o){return new J(function(c,d){return gn(function(f,p){var b=Q;b.unhandleds=[],b.onunhandled=p,b.finalize=ce(function(){var x,S=this;x=function(){S.unhandleds.length===0?f():p(S.unhandleds[0])},Ct.push(function A(){x(),Ct.splice(Ct.indexOf(A),1)}),++pt,He(function(){--pt==0&&Ie()},[])},b.finalize),s()},o,c,d)})}}),ke&&(ke.allSettled&&z(J,"allSettled",function(){var s=Ve.apply(null,arguments).map(Pr);return new J(function(o){s.length===0&&o([]);var c=s.length,d=new Array(c);s.forEach(function(f,p){return J.resolve(f).then(function(b){return d[p]={status:"fulfilled",value:b}},function(b){return d[p]={status:"rejected",reason:b}}).then(function(){return--c||o(d)})})})}),ke.any&&typeof AggregateError<"u"&&z(J,"any",function(){var s=Ve.apply(null,arguments).map(Pr);return new J(function(o,c){s.length===0&&c(new AggregateError([]));var d=s.length,f=new Array(d);s.forEach(function(p,b){return J.resolve(p).then(function(x){return o(x)},function(x){f[b]=x,--d||c(new AggregateError(f))})})})}),ke.withResolvers&&(J.withResolvers=ke.withResolvers));var mt={awaits:0,echoes:0,id:0},ml=0,Sr=[],_r=0,Ar=0,gl=0;function gn(s,o,c,d){var f=Q,p=Object.create(f);return p.parent=f,p.ref=0,p.global=!1,p.id=++gl,Qe.env,p.env=Pt?{Promise:J,PromiseProp:{value:J,configurable:!0,writable:!0},all:J.all,race:J.race,allSettled:J.allSettled,any:J.any,resolve:J.resolve,reject:J.reject}:{},o&&h(p,o),++f.ref,p.finalize=function(){--this.parent.ref||this.parent.finalize()},d=_n(p,s,c,d),p.ref===0&&p.finalize(),d}function qn(){return mt.id||(mt.id=++ml),++mt.awaits,mt.echoes+=it,mt.id}function bn(){return!!mt.awaits&&(--mt.awaits==0&&(mt.id=0),mt.echoes=mt.awaits*it,!0)}function Pr(s){return mt.echoes&&s&&s.constructor===ke?(qn(),s.then(function(o){return bn(),o},function(o){return bn(),at(o)})):s}function bl(){var s=Sr[Sr.length-1];Sr.pop(),yn(s,!1)}function yn(s,o){var c,d=Q;(o?!mt.echoes||_r++&&s===Q:!_r||--_r&&s===Q)||queueMicrotask(o?function(f){++Ar,mt.echoes&&--mt.echoes!=0||(mt.echoes=mt.awaits=mt.id=0),Sr.push(Q),yn(f,!0)}.bind(null,s):bl),s!==Q&&(Q=s,d===Qe&&(Qe.env=Os()),Pt&&(c=Qe.env.Promise,o=s.env,(d.global||s.global)&&(Object.defineProperty(a,"Promise",o.PromiseProp),c.all=o.all,c.race=o.race,c.resolve=o.resolve,c.reject=o.reject,o.allSettled&&(c.allSettled=o.allSettled),o.any&&(c.any=o.any))))}function Os(){var s=a.Promise;return Pt?{Promise:s,PromiseProp:Object.getOwnPropertyDescriptor(a,"Promise"),all:s.all,race:s.race,allSettled:s.allSettled,any:s.any,resolve:s.resolve,reject:s.reject}:{}}function _n(s,o,c,d,f){var p=Q;try{return yn(s,!0),o(c,d,f)}finally{yn(p,!1)}}function Fs(s,o,c,d){return typeof s!="function"?s:function(){var f=Q;c&&qn(),yn(o,!0);try{return s.apply(this,arguments)}finally{yn(f,!1),d&&queueMicrotask(bn)}}}function ki(s){Promise===ke&&mt.echoes===0?_r===0?s():enqueueNativeMicroTask(s):setTimeout(s,0)}(""+Ft).indexOf("[native code]")===-1&&(qn=bn=de);var at=J.reject,An="￿",ln="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",zs="String expected.",Hn=[],Tr="__dbnames",Ei="readonly",Si="readwrite";function Pn(s,o){return s?o?function(){return s.apply(this,arguments)&&o.apply(this,arguments)}:s:o}var Ls={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Dr(s){return typeof s!="string"||/\./.test(s)?function(o){return o}:function(o){return o[s]===void 0&&s in o&&delete(o=E(o))[s],o}}function Bs(){throw te.Type()}function Se(s,o){try{var c=Ms(s),d=Ms(o);if(c!==d)return c==="Array"?1:d==="Array"?-1:c==="binary"?1:d==="binary"?-1:c==="string"?1:d==="string"?-1:c==="Date"?1:d!=="Date"?NaN:-1;switch(c){case"number":case"Date":case"string":return o<s?1:s<o?-1:0;case"binary":return(function(f,p){for(var b=f.length,x=p.length,S=b<x?b:x,A=0;A<S;++A)if(f[A]!==p[A])return f[A]<p[A]?-1:1;return b===x?0:b<x?-1:1})(Ns(s),Ns(o));case"Array":return(function(f,p){for(var b=f.length,x=p.length,S=b<x?b:x,A=0;A<S;++A){var D=Se(f[A],p[A]);if(D!==0)return D}return b===x?0:b<x?-1:1})(s,o)}}catch{}return NaN}function Ms(s){var o=typeof s;return o!="object"?o:ArrayBuffer.isView(s)?"binary":(s=C(s),s==="ArrayBuffer"?"binary":s)}function Ns(s){return s instanceof Uint8Array?s:ArrayBuffer.isView(s)?new Uint8Array(s.buffer,s.byteOffset,s.byteLength):new Uint8Array(s)}var Us=(Ke.prototype._trans=function(s,o,c){var d=this._tx||Q.trans,f=this.name,p=Oe&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(s==="readonly"?"read":"write"," ").concat(this.name));function b(A,D,$){if(!$.schema[f])throw new te.NotFound("Table "+f+" not part of transaction");return o($.idbtrans,$)}var x=Fe();try{var S=d&&d.db._novip===this.db._novip?d===Q.trans?d._promise(s,b,c):gn(function(){return d._promise(s,b,c)},{trans:d,transless:Q.transless||Q}):(function A(D,$,j,_){if(D.idbdb&&(D._state.openComplete||Q.letThrough||D._vip)){var T=D._createTransaction($,j,D._dbSchema);try{T.create(),D._state.PR1398_maxLoop=3}catch(R){return R.name===Ye.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return A(D,$,j,_)})):at(R)}return T._promise($,function(R,P){return gn(function(){return Q.trans=T,_(R,P,T)})}).then(function(R){if($==="readwrite")try{T.idbtrans.commit()}catch{}return $==="readonly"?R:T._completion.then(function(){return R})})}if(D._state.openComplete)return at(new te.DatabaseClosed(D._state.dbOpenError));if(!D._state.isBeingOpened){if(!D._state.autoOpen)return at(new te.DatabaseClosed);D.open().catch(de)}return D._state.dbReadyPromise.then(function(){return A(D,$,j,_)})})(this.db,s,[this.name],b);return p&&(S._consoleTask=p,S=S.catch(function(A){return console.trace(A),at(A)})),S}finally{x&&We()}},Ke.prototype.get=function(s,o){var c=this;return s&&s.constructor===Object?this.where(s).first(o):s==null?at(new te.Type("Invalid argument to Table.get()")):this._trans("readonly",function(d){return c.core.get({trans:d,key:s}).then(function(f){return c.hook.reading.fire(f)})}).then(o)},Ke.prototype.where=function(s){if(typeof s=="string")return new this.db.WhereClause(this,s);if(u(s))return new this.db.WhereClause(this,"[".concat(s.join("+"),"]"));var o=l(s);if(o.length===1)return this.where(o[0]).equals(s[o[0]]);var c=this.schema.indexes.concat(this.schema.primKey).filter(function(x){if(x.compound&&o.every(function(A){return 0<=x.keyPath.indexOf(A)})){for(var S=0;S<o.length;++S)if(o.indexOf(x.keyPath[S])===-1)return!1;return!0}return!1}).sort(function(x,S){return x.keyPath.length-S.keyPath.length})[0];if(c&&this.db._maxKey!==An){var p=c.keyPath.slice(0,o.length);return this.where(p).equals(p.map(function(S){return s[S]}))}!c&&Oe&&console.warn("The query ".concat(JSON.stringify(s)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(o.join("+"),"]"));var d=this.schema.idxByName;function f(x,S){return Se(x,S)===0}var b=o.reduce(function($,S){var A=$[0],D=$[1],$=d[S],j=s[S];return[A||$,A||!$?Pn(D,$&&$.multi?function(_){return _=fe(_,S),u(_)&&_.some(function(T){return f(j,T)})}:function(_){return f(j,fe(_,S))}):D]},[null,null]),p=b[0],b=b[1];return p?this.where(p.name).equals(s[p.keyPath]).filter(b):c?this.filter(b):this.where(o).equals("")},Ke.prototype.filter=function(s){return this.toCollection().and(s)},Ke.prototype.count=function(s){return this.toCollection().count(s)},Ke.prototype.offset=function(s){return this.toCollection().offset(s)},Ke.prototype.limit=function(s){return this.toCollection().limit(s)},Ke.prototype.each=function(s){return this.toCollection().each(s)},Ke.prototype.toArray=function(s){return this.toCollection().toArray(s)},Ke.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Ke.prototype.orderBy=function(s){return new this.db.Collection(new this.db.WhereClause(this,u(s)?"[".concat(s.join("+"),"]"):s))},Ke.prototype.reverse=function(){return this.toCollection().reverse()},Ke.prototype.mapToClass=function(s){var o,c=this.db,d=this.name;function f(){return o!==null&&o.apply(this,arguments)||this}(this.schema.mappedClass=s).prototype instanceof Bs&&((function(S,A){if(typeof A!="function"&&A!==null)throw new TypeError("Class extends value "+String(A)+" is not a constructor or null");function D(){this.constructor=S}r(S,A),S.prototype=A===null?Object.create(A):(D.prototype=A.prototype,new D)})(f,o=s),Object.defineProperty(f.prototype,"db",{get:function(){return c},enumerable:!1,configurable:!0}),f.prototype.table=function(){return d},s=f);for(var p=new Set,b=s.prototype;b;b=y(b))Object.getOwnPropertyNames(b).forEach(function(S){return p.add(S)});function x(S){if(!S)return S;var A,D=Object.create(s.prototype);for(A in S)if(!p.has(A))try{D[A]=S[A]}catch{}return D}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=x,this.hook("reading",x),s},Ke.prototype.defineClass=function(){return this.mapToClass(function(s){h(this,s)})},Ke.prototype.add=function(s,o){var c=this,d=this.schema.primKey,f=d.auto,p=d.keyPath,b=s;return p&&f&&(b=Dr(p)(s)),this._trans("readwrite",function(x){return c.core.mutate({trans:x,type:"add",keys:o!=null?[o]:null,values:[b]})}).then(function(x){return x.numFailures?J.reject(x.failures[0]):x.lastResult}).then(function(x){if(p)try{ve(s,p,x)}catch{}return x})},Ke.prototype.update=function(s,o){return typeof s!="object"||u(s)?this.where(":id").equals(s).modify(o):(s=fe(s,this.schema.primKey.keyPath),s===void 0?at(new te.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(s).modify(o))},Ke.prototype.put=function(s,o){var c=this,d=this.schema.primKey,f=d.auto,p=d.keyPath,b=s;return p&&f&&(b=Dr(p)(s)),this._trans("readwrite",function(x){return c.core.mutate({trans:x,type:"put",values:[b],keys:o!=null?[o]:null})}).then(function(x){return x.numFailures?J.reject(x.failures[0]):x.lastResult}).then(function(x){if(p)try{ve(s,p,x)}catch{}return x})},Ke.prototype.delete=function(s){var o=this;return this._trans("readwrite",function(c){return o.core.mutate({trans:c,type:"delete",keys:[s]})}).then(function(c){return c.numFailures?J.reject(c.failures[0]):void 0})},Ke.prototype.clear=function(){var s=this;return this._trans("readwrite",function(o){return s.core.mutate({trans:o,type:"deleteRange",range:Ls})}).then(function(o){return o.numFailures?J.reject(o.failures[0]):void 0})},Ke.prototype.bulkGet=function(s){var o=this;return this._trans("readonly",function(c){return o.core.getMany({keys:s,trans:c}).then(function(d){return d.map(function(f){return o.hook.reading.fire(f)})})})},Ke.prototype.bulkAdd=function(s,o,c){var d=this,f=Array.isArray(o)?o:void 0,p=(c=c||(f?void 0:o))?c.allKeys:void 0;return this._trans("readwrite",function(b){var A=d.schema.primKey,x=A.auto,A=A.keyPath;if(A&&f)throw new te.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(f&&f.length!==s.length)throw new te.InvalidArgument("Arguments objects and keys must have the same length");var S=s.length,A=A&&x?s.map(Dr(A)):s;return d.core.mutate({trans:b,type:"add",keys:f,values:A,wantResults:p}).then(function(T){var $=T.numFailures,j=T.results,_=T.lastResult,T=T.failures;if($===0)return p?j:_;throw new De("".concat(d.name,".bulkAdd(): ").concat($," of ").concat(S," operations failed"),T)})})},Ke.prototype.bulkPut=function(s,o,c){var d=this,f=Array.isArray(o)?o:void 0,p=(c=c||(f?void 0:o))?c.allKeys:void 0;return this._trans("readwrite",function(b){var A=d.schema.primKey,x=A.auto,A=A.keyPath;if(A&&f)throw new te.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(f&&f.length!==s.length)throw new te.InvalidArgument("Arguments objects and keys must have the same length");var S=s.length,A=A&&x?s.map(Dr(A)):s;return d.core.mutate({trans:b,type:"put",keys:f,values:A,wantResults:p}).then(function(T){var $=T.numFailures,j=T.results,_=T.lastResult,T=T.failures;if($===0)return p?j:_;throw new De("".concat(d.name,".bulkPut(): ").concat($," of ").concat(S," operations failed"),T)})})},Ke.prototype.bulkUpdate=function(s){var o=this,c=this.core,d=s.map(function(b){return b.key}),f=s.map(function(b){return b.changes}),p=[];return this._trans("readwrite",function(b){return c.getMany({trans:b,keys:d,cache:"clone"}).then(function(x){var S=[],A=[];s.forEach(function($,j){var _=$.key,T=$.changes,R=x[j];if(R){for(var P=0,L=Object.keys(T);P<L.length;P++){var M=L[P],N=T[M];if(M===o.schema.primKey.keyPath){if(Se(N,_)!==0)throw new te.Constraint("Cannot update primary key in bulkUpdate()")}else ve(R,M,N)}p.push(j),S.push(_),A.push(R)}});var D=S.length;return c.mutate({trans:b,type:"put",keys:S,values:A,updates:{keys:d,changeSpecs:f}}).then(function($){var j=$.numFailures,_=$.failures;if(j===0)return D;for(var T=0,R=Object.keys(_);T<R.length;T++){var P,L=R[T],M=p[Number(L)];M!=null&&(P=_[L],delete _[L],_[M]=P)}throw new De("".concat(o.name,".bulkUpdate(): ").concat(j," of ").concat(D," operations failed"),_)})})})},Ke.prototype.bulkDelete=function(s){var o=this,c=s.length;return this._trans("readwrite",function(d){return o.core.mutate({trans:d,type:"delete",keys:s})}).then(function(b){var f=b.numFailures,p=b.lastResult,b=b.failures;if(f===0)return p;throw new De("".concat(o.name,".bulkDelete(): ").concat(f," of ").concat(c," operations failed"),b)})},Ke);function Ke(){}function sr(s){function o(b,x){if(x){for(var S=arguments.length,A=new Array(S-1);--S;)A[S-1]=arguments[S];return c[b].subscribe.apply(null,A),s}if(typeof b=="string")return c[b]}var c={};o.addEventType=p;for(var d=1,f=arguments.length;d<f;++d)p(arguments[d]);return o;function p(b,x,S){if(typeof b!="object"){var A;x=x||et;var D={subscribers:[],fire:S=S||de,subscribe:function($){D.subscribers.indexOf($)===-1&&(D.subscribers.push($),D.fire=x(D.fire,$))},unsubscribe:function($){D.subscribers=D.subscribers.filter(function(j){return j!==$}),D.fire=D.subscribers.reduce(x,S)}};return c[b]=o[b]=D}l(A=b).forEach(function($){var j=A[$];if(u(j))p($,A[$][0],A[$][1]);else{if(j!=="asap")throw new te.InvalidArgument("Invalid event config");var _=p($,we,function(){for(var T=arguments.length,R=new Array(T);T--;)R[T]=arguments[T];_.subscribers.forEach(function(P){ae(function(){P.apply(null,R)})})})}})}}function or(s,o){return F(o).from({prototype:s}),o}function Wn(s,o){return!(s.filter||s.algorithm||s.or)&&(o?s.justLimit:!s.replayFilter)}function _i(s,o){s.filter=Pn(s.filter,o)}function Ai(s,o,c){var d=s.replayFilter;s.replayFilter=d?function(){return Pn(d(),o())}:o,s.justLimit=c&&!d}function Ir(s,o){if(s.isPrimKey)return o.primaryKey;var c=o.getIndexByKeyPath(s.index);if(!c)throw new te.Schema("KeyPath "+s.index+" on object store "+o.name+" is not indexed");return c}function qs(s,o,c){var d=Ir(s,o.schema);return o.openCursor({trans:c,values:!s.keysOnly,reverse:s.dir==="prev",unique:!!s.unique,query:{index:d,range:s.range}})}function Rr(s,o,c,d){var f=s.replayFilter?Pn(s.filter,s.replayFilter()):s.filter;if(s.or){var p={},b=function(x,S,A){var D,$;f&&!f(S,A,function(j){return S.stop(j)},function(j){return S.fail(j)})||(($=""+(D=S.primaryKey))=="[object ArrayBuffer]"&&($=""+new Uint8Array(D)),v(p,$)||(p[$]=!0,o(x,S,A)))};return Promise.all([s.or._iterate(b,c),Hs(qs(s,d,c),s.algorithm,b,!s.keysOnly&&s.valueMapper)])}return Hs(qs(s,d,c),Pn(s.algorithm,f),o,!s.keysOnly&&s.valueMapper)}function Hs(s,o,c,d){var f=Me(d?function(p,b,x){return c(d(p),b,x)}:c);return s.then(function(p){if(p)return p.start(function(){var b=function(){return p.continue()};o&&!o(p,function(x){return b=x},function(x){p.stop(x),b=de},function(x){p.fail(x),b=de})||f(p.value,p,function(x){return b=x}),b()})})}var cn=Symbol(),ar=(Ws.prototype.execute=function(s){if(this.add!==void 0){var o=this.add;if(u(o))return n(n([],u(s)?s:[],!0),o).sort();if(typeof o=="number")return(Number(s)||0)+o;if(typeof o=="bigint")try{return BigInt(s)+o}catch{return BigInt(0)+o}throw new TypeError("Invalid term ".concat(o))}if(this.remove!==void 0){var c=this.remove;if(u(c))return u(s)?s.filter(function(d){return!c.includes(d)}).sort():[];if(typeof c=="number")return Number(s)-c;if(typeof c=="bigint")try{return BigInt(s)-c}catch{return BigInt(0)-c}throw new TypeError("Invalid subtrahend ".concat(c))}return o=(o=this.replacePrefix)===null||o===void 0?void 0:o[0],o&&typeof s=="string"&&s.startsWith(o)?this.replacePrefix[1]+s.substring(o.length):s},Ws);function Ws(s){Object.assign(this,s)}var yl=(Re.prototype._read=function(s,o){var c=this._ctx;return c.error?c.table._trans(null,at.bind(null,c.error)):c.table._trans("readonly",s).then(o)},Re.prototype._write=function(s){var o=this._ctx;return o.error?o.table._trans(null,at.bind(null,o.error)):o.table._trans("readwrite",s,"locked")},Re.prototype._addAlgorithm=function(s){var o=this._ctx;o.algorithm=Pn(o.algorithm,s)},Re.prototype._iterate=function(s,o){return Rr(this._ctx,s,o,this._ctx.table.core)},Re.prototype.clone=function(s){var o=Object.create(this.constructor.prototype),c=Object.create(this._ctx);return s&&h(c,s),o._ctx=c,o},Re.prototype.raw=function(){return this._ctx.valueMapper=null,this},Re.prototype.each=function(s){var o=this._ctx;return this._read(function(c){return Rr(o,s,c,o.table.core)})},Re.prototype.count=function(s){var o=this;return this._read(function(c){var d=o._ctx,f=d.table.core;if(Wn(d,!0))return f.count({trans:c,query:{index:Ir(d,f.schema),range:d.range}}).then(function(b){return Math.min(b,d.limit)});var p=0;return Rr(d,function(){return++p,!1},c,f).then(function(){return p})}).then(s)},Re.prototype.sortBy=function(s,o){var c=s.split(".").reverse(),d=c[0],f=c.length-1;function p(S,A){return A?p(S[c[A]],A-1):S[d]}var b=this._ctx.dir==="next"?1:-1;function x(S,A){return Se(p(S,f),p(A,f))*b}return this.toArray(function(S){return S.sort(x)}).then(o)},Re.prototype.toArray=function(s){var o=this;return this._read(function(c){var d=o._ctx;if(d.dir==="next"&&Wn(d,!0)&&0<d.limit){var f=d.valueMapper,p=Ir(d,d.table.core.schema);return d.table.core.query({trans:c,limit:d.limit,values:!0,query:{index:p,range:d.range}}).then(function(x){return x=x.result,f?x.map(f):x})}var b=[];return Rr(d,function(x){return b.push(x)},c,d.table.core).then(function(){return b})},s)},Re.prototype.offset=function(s){var o=this._ctx;return s<=0||(o.offset+=s,Wn(o)?Ai(o,function(){var c=s;return function(d,f){return c===0||(c===1?--c:f(function(){d.advance(c),c=0}),!1)}}):Ai(o,function(){var c=s;return function(){return--c<0}})),this},Re.prototype.limit=function(s){return this._ctx.limit=Math.min(this._ctx.limit,s),Ai(this._ctx,function(){var o=s;return function(c,d,f){return--o<=0&&d(f),0<=o}},!0),this},Re.prototype.until=function(s,o){return _i(this._ctx,function(c,d,f){return!s(c.value)||(d(f),o)}),this},Re.prototype.first=function(s){return this.limit(1).toArray(function(o){return o[0]}).then(s)},Re.prototype.last=function(s){return this.reverse().first(s)},Re.prototype.filter=function(s){var o;return _i(this._ctx,function(c){return s(c.value)}),(o=this._ctx).isMatch=Pn(o.isMatch,s),this},Re.prototype.and=function(s){return this.filter(s)},Re.prototype.or=function(s){return new this.db.WhereClause(this._ctx.table,s,this)},Re.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Re.prototype.desc=function(){return this.reverse()},Re.prototype.eachKey=function(s){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(c,d){s(d.key,d)})},Re.prototype.eachUniqueKey=function(s){return this._ctx.unique="unique",this.eachKey(s)},Re.prototype.eachPrimaryKey=function(s){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(c,d){s(d.primaryKey,d)})},Re.prototype.keys=function(s){var o=this._ctx;o.keysOnly=!o.isMatch;var c=[];return this.each(function(d,f){c.push(f.key)}).then(function(){return c}).then(s)},Re.prototype.primaryKeys=function(s){var o=this._ctx;if(o.dir==="next"&&Wn(o,!0)&&0<o.limit)return this._read(function(d){var f=Ir(o,o.table.core.schema);return o.table.core.query({trans:d,values:!1,limit:o.limit,query:{index:f,range:o.range}})}).then(function(d){return d.result}).then(s);o.keysOnly=!o.isMatch;var c=[];return this.each(function(d,f){c.push(f.primaryKey)}).then(function(){return c}).then(s)},Re.prototype.uniqueKeys=function(s){return this._ctx.unique="unique",this.keys(s)},Re.prototype.firstKey=function(s){return this.limit(1).keys(function(o){return o[0]}).then(s)},Re.prototype.lastKey=function(s){return this.reverse().firstKey(s)},Re.prototype.distinct=function(){var s=this._ctx,s=s.index&&s.table.schema.idxByName[s.index];if(!s||!s.multi)return this;var o={};return _i(this._ctx,function(f){var d=f.primaryKey.toString(),f=v(o,d);return o[d]=!0,!f}),this},Re.prototype.modify=function(s){var o=this,c=this._ctx;return this._write(function(d){var f,p,b;b=typeof s=="function"?s:(f=l(s),p=f.length,function(P){for(var L=!1,M=0;M<p;++M){var N=f[M],U=s[N],V=fe(P,N);U instanceof ar?(ve(P,N,U.execute(V)),L=!0):V!==U&&(ve(P,N,U),L=!0)}return L});var x=c.table.core,$=x.schema.primaryKey,S=$.outbound,A=$.extractKey,D=200,$=o.db._options.modifyChunkSize;$&&(D=typeof $=="object"?$[x.name]||$["*"]||200:$);function j(P,N){var M=N.failures,N=N.numFailures;T+=P-N;for(var U=0,V=l(M);U<V.length;U++){var ee=V[U];_.push(M[ee])}}var _=[],T=0,R=[];return o.clone().primaryKeys().then(function(P){function L(N){var U=Math.min(D,P.length-N);return x.getMany({trans:d,keys:P.slice(N,N+U),cache:"immutable"}).then(function(V){for(var ee=[],Y=[],G=S?[]:null,ne=[],Z=0;Z<U;++Z){var ie=V[Z],be={value:E(ie),primKey:P[N+Z]};b.call(be,be.value,be)!==!1&&(be.value==null?ne.push(P[N+Z]):S||Se(A(ie),A(be.value))===0?(Y.push(be.value),S&&G.push(P[N+Z])):(ne.push(P[N+Z]),ee.push(be.value)))}return Promise.resolve(0<ee.length&&x.mutate({trans:d,type:"add",values:ee}).then(function(xe){for(var $e in xe.failures)ne.splice(parseInt($e),1);j(ee.length,xe)})).then(function(){return(0<Y.length||M&&typeof s=="object")&&x.mutate({trans:d,type:"put",keys:G,values:Y,criteria:M,changeSpec:typeof s!="function"&&s,isAdditionalChunk:0<N}).then(function(xe){return j(Y.length,xe)})}).then(function(){return(0<ne.length||M&&s===Pi)&&x.mutate({trans:d,type:"delete",keys:ne,criteria:M,isAdditionalChunk:0<N}).then(function(xe){return j(ne.length,xe)})}).then(function(){return P.length>N+U&&L(N+D)})})}var M=Wn(c)&&c.limit===1/0&&(typeof s!="function"||s===Pi)&&{index:c.index,range:c.range};return L(0).then(function(){if(0<_.length)throw new Ce("Error modifying one or more objects",_,T,R);return P.length})})})},Re.prototype.delete=function(){var s=this._ctx,o=s.range;return Wn(s)&&(s.isPrimKey||o.type===3)?this._write(function(c){var d=s.table.core.schema.primaryKey,f=o;return s.table.core.count({trans:c,query:{index:d,range:f}}).then(function(p){return s.table.core.mutate({trans:c,type:"deleteRange",range:f}).then(function(b){var x=b.failures;if(b.lastResult,b.results,b=b.numFailures,b)throw new Ce("Could not delete some values",Object.keys(x).map(function(S){return x[S]}),p-b);return p-b})})}):this.modify(Pi)},Re);function Re(){}var Pi=function(s,o){return o.value=null};function wl(s,o){return s<o?-1:s===o?0:1}function vl(s,o){return o<s?-1:s===o?0:1}function Tt(s,o,c){return s=s instanceof Vs?new s.Collection(s):s,s._ctx.error=new(c||TypeError)(o),s}function Kn(s){return new s.Collection(s,function(){return Ks("")}).limit(0)}function jr(s,o,c,d){var f,p,b,x,S,A,D,$=c.length;if(!c.every(function(T){return typeof T=="string"}))return Tt(s,zs);function j(T){f=T==="next"?function(P){return P.toUpperCase()}:function(P){return P.toLowerCase()},p=T==="next"?function(P){return P.toLowerCase()}:function(P){return P.toUpperCase()},b=T==="next"?wl:vl;var R=c.map(function(P){return{lower:p(P),upper:f(P)}}).sort(function(P,L){return b(P.lower,L.lower)});x=R.map(function(P){return P.upper}),S=R.map(function(P){return P.lower}),D=(A=T)==="next"?"":d}j("next"),s=new s.Collection(s,function(){return wn(x[0],S[$-1]+d)}),s._ondirectionchange=function(T){j(T)};var _=0;return s._addAlgorithm(function(T,R,P){var L=T.key;if(typeof L!="string")return!1;var M=p(L);if(o(M,S,_))return!0;for(var N=null,U=_;U<$;++U){var V=(function(ee,Y,G,ne,Z,ie){for(var be=Math.min(ee.length,ne.length),xe=-1,$e=0;$e<be;++$e){var Dt=Y[$e];if(Dt!==ne[$e])return Z(ee[$e],G[$e])<0?ee.substr(0,$e)+G[$e]+G.substr($e+1):Z(ee[$e],ne[$e])<0?ee.substr(0,$e)+ne[$e]+G.substr($e+1):0<=xe?ee.substr(0,xe)+Y[xe]+G.substr(xe+1):null;Z(ee[$e],Dt)<0&&(xe=$e)}return be<ne.length&&ie==="next"?ee+G.substr(ee.length):be<ee.length&&ie==="prev"?ee.substr(0,G.length):xe<0?null:ee.substr(0,xe)+ne[xe]+G.substr(xe+1)})(L,M,x[U],S[U],b,A);V===null&&N===null?_=U+1:(N===null||0<b(N,V))&&(N=V)}return R(N!==null?function(){T.continue(N+D)}:P),!1}),s}function wn(s,o,c,d){return{type:2,lower:s,upper:o,lowerOpen:c,upperOpen:d}}function Ks(s){return{type:1,lower:s,upper:s}}var Vs=(Object.defineProperty(gt.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),gt.prototype.between=function(s,o,c,d){c=c!==!1,d=d===!0;try{return 0<this._cmp(s,o)||this._cmp(s,o)===0&&(c||d)&&(!c||!d)?Kn(this):new this.Collection(this,function(){return wn(s,o,!c,!d)})}catch{return Tt(this,ln)}},gt.prototype.equals=function(s){return s==null?Tt(this,ln):new this.Collection(this,function(){return Ks(s)})},gt.prototype.above=function(s){return s==null?Tt(this,ln):new this.Collection(this,function(){return wn(s,void 0,!0)})},gt.prototype.aboveOrEqual=function(s){return s==null?Tt(this,ln):new this.Collection(this,function(){return wn(s,void 0,!1)})},gt.prototype.below=function(s){return s==null?Tt(this,ln):new this.Collection(this,function(){return wn(void 0,s,!1,!0)})},gt.prototype.belowOrEqual=function(s){return s==null?Tt(this,ln):new this.Collection(this,function(){return wn(void 0,s)})},gt.prototype.startsWith=function(s){return typeof s!="string"?Tt(this,zs):this.between(s,s+An,!0,!0)},gt.prototype.startsWithIgnoreCase=function(s){return s===""?this.startsWith(s):jr(this,function(o,c){return o.indexOf(c[0])===0},[s],An)},gt.prototype.equalsIgnoreCase=function(s){return jr(this,function(o,c){return o===c[0]},[s],"")},gt.prototype.anyOfIgnoreCase=function(){var s=Ve.apply(X,arguments);return s.length===0?Kn(this):jr(this,function(o,c){return c.indexOf(o)!==-1},s,"")},gt.prototype.startsWithAnyOfIgnoreCase=function(){var s=Ve.apply(X,arguments);return s.length===0?Kn(this):jr(this,function(o,c){return c.some(function(d){return o.indexOf(d)===0})},s,An)},gt.prototype.anyOf=function(){var s=this,o=Ve.apply(X,arguments),c=this._cmp;try{o.sort(c)}catch{return Tt(this,ln)}if(o.length===0)return Kn(this);var d=new this.Collection(this,function(){return wn(o[0],o[o.length-1])});d._ondirectionchange=function(p){c=p==="next"?s._ascending:s._descending,o.sort(c)};var f=0;return d._addAlgorithm(function(p,b,x){for(var S=p.key;0<c(S,o[f]);)if(++f===o.length)return b(x),!1;return c(S,o[f])===0||(b(function(){p.continue(o[f])}),!1)}),d},gt.prototype.notEqual=function(s){return this.inAnyRange([[-1/0,s],[s,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},gt.prototype.noneOf=function(){var s=Ve.apply(X,arguments);if(s.length===0)return new this.Collection(this);try{s.sort(this._ascending)}catch{return Tt(this,ln)}var o=s.reduce(function(c,d){return c?c.concat([[c[c.length-1][1],d]]):[[-1/0,d]]},null);return o.push([s[s.length-1],this.db._maxKey]),this.inAnyRange(o,{includeLowers:!1,includeUppers:!1})},gt.prototype.inAnyRange=function(L,o){var c=this,d=this._cmp,f=this._ascending,p=this._descending,b=this._min,x=this._max;if(L.length===0)return Kn(this);if(!L.every(function(M){return M[0]!==void 0&&M[1]!==void 0&&f(M[0],M[1])<=0}))return Tt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",te.InvalidArgument);var S=!o||o.includeLowers!==!1,A=o&&o.includeUppers===!0,D,$=f;function j(M,N){return $(M[0],N[0])}try{(D=L.reduce(function(M,N){for(var U=0,V=M.length;U<V;++U){var ee=M[U];if(d(N[0],ee[1])<0&&0<d(N[1],ee[0])){ee[0]=b(ee[0],N[0]),ee[1]=x(ee[1],N[1]);break}}return U===V&&M.push(N),M},[])).sort(j)}catch{return Tt(this,ln)}var _=0,T=A?function(M){return 0<f(M,D[_][1])}:function(M){return 0<=f(M,D[_][1])},R=S?function(M){return 0<p(M,D[_][0])}:function(M){return 0<=p(M,D[_][0])},P=T,L=new this.Collection(this,function(){return wn(D[0][0],D[D.length-1][1],!S,!A)});return L._ondirectionchange=function(M){$=M==="next"?(P=T,f):(P=R,p),D.sort(j)},L._addAlgorithm(function(M,N,U){for(var V,ee=M.key;P(ee);)if(++_===D.length)return N(U),!1;return!T(V=ee)&&!R(V)||(c._cmp(ee,D[_][1])===0||c._cmp(ee,D[_][0])===0||N(function(){$===f?M.continue(D[_][0]):M.continue(D[_][1])}),!1)}),L},gt.prototype.startsWithAnyOf=function(){var s=Ve.apply(X,arguments);return s.every(function(o){return typeof o=="string"})?s.length===0?Kn(this):this.inAnyRange(s.map(function(o){return[o,o+An]})):Tt(this,"startsWithAnyOf() only works with strings")},gt);function gt(){}function tn(s){return Me(function(o){return lr(o),s(o.target.error),!1})}function lr(s){s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault()}var cr="storagemutated",Ti="x-storagemutated-1",vn=sr(null,cr),xl=(nn.prototype._lock=function(){return se(!Q.global),++this._reculock,this._reculock!==1||Q.global||(Q.lockOwnerFor=this),this},nn.prototype._unlock=function(){if(se(!Q.global),--this._reculock==0)for(Q.global||(Q.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var s=this._blockedFuncs.shift();try{_n(s[1],s[0])}catch{}}return this},nn.prototype._locked=function(){return this._reculock&&Q.lockOwnerFor!==this},nn.prototype.create=function(s){var o=this;if(!this.mode)return this;var c=this.db.idbdb,d=this.db._state.dbOpenError;if(se(!this.idbtrans),!s&&!c)switch(d&&d.name){case"DatabaseClosedError":throw new te.DatabaseClosed(d);case"MissingAPIError":throw new te.MissingAPI(d.message,d);default:throw new te.OpenFailed(d)}if(!this.active)throw new te.TransactionInactive;return se(this._completion._state===null),(s=this.idbtrans=s||(this.db.core||c).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Me(function(f){lr(f),o._reject(s.error)}),s.onabort=Me(function(f){lr(f),o.active&&o._reject(new te.Abort(s.error)),o.active=!1,o.on("abort").fire(f)}),s.oncomplete=Me(function(){o.active=!1,o._resolve(),"mutatedParts"in s&&vn.storagemutated.fire(s.mutatedParts)}),this},nn.prototype._promise=function(s,o,c){var d=this;if(s==="readwrite"&&this.mode!=="readwrite")return at(new te.ReadOnly("Transaction is readonly"));if(!this.active)return at(new te.TransactionInactive);if(this._locked())return new J(function(p,b){d._blockedFuncs.push([function(){d._promise(s,o,c).then(p,b)},Q])});if(c)return gn(function(){var p=new J(function(b,x){d._lock();var S=o(b,x,d);S&&S.then&&S.then(b,x)});return p.finally(function(){return d._unlock()}),p._lib=!0,p});var f=new J(function(p,b){var x=o(p,b,d);x&&x.then&&x.then(p,b)});return f._lib=!0,f},nn.prototype._root=function(){return this.parent?this.parent._root():this},nn.prototype.waitFor=function(s){var o,c=this._root(),d=J.resolve(s);c._waitingFor?c._waitingFor=c._waitingFor.then(function(){return d}):(c._waitingFor=d,c._waitingQueue=[],o=c.idbtrans.objectStore(c.storeNames[0]),(function p(){for(++c._spinCount;c._waitingQueue.length;)c._waitingQueue.shift()();c._waitingFor&&(o.get(-1/0).onsuccess=p)})());var f=c._waitingFor;return new J(function(p,b){d.then(function(x){return c._waitingQueue.push(Me(p.bind(null,x)))},function(x){return c._waitingQueue.push(Me(b.bind(null,x)))}).finally(function(){c._waitingFor===f&&(c._waitingFor=null)})})},nn.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new te.Abort))},nn.prototype.table=function(s){var o=this._memoizedTables||(this._memoizedTables={});if(v(o,s))return o[s];var c=this.schema[s];if(!c)throw new te.NotFound("Table "+s+" not part of transaction");return c=new this.db.Table(s,c,this),c.core=this.db.core.table(s),o[s]=c},nn);function nn(){}function Di(s,o,c,d,f,p,b){return{name:s,keyPath:o,unique:c,multi:d,auto:f,compound:p,src:(c&&!b?"&":"")+(d?"*":"")+(f?"++":"")+Ys(o)}}function Ys(s){return typeof s=="string"?s:s?"["+[].join.call(s,"+")+"]":""}function Ii(s,o,c){return{name:s,primKey:o,indexes:c,mappedClass:null,idxByName:(d=function(f){return[f.name,f]},c.reduce(function(f,p,b){return b=d(p,b),b&&(f[b[0]]=b[1]),f},{}))};var d}var ur=function(s){try{return s.only([[]]),ur=function(){return[[]]},[[]]}catch{return ur=function(){return An},An}};function Ri(s){return s==null?function(){}:typeof s=="string"?(o=s).split(".").length===1?function(c){return c[o]}:function(c){return fe(c,o)}:function(c){return fe(c,s)};var o}function Xs(s){return[].slice.call(s)}var $l=0;function dr(s){return s==null?":id":typeof s=="string"?s:"[".concat(s.join("+"),"]")}function Cl(s,o,S){function d(P){if(P.type===3)return null;if(P.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var _=P.lower,T=P.upper,R=P.lowerOpen,P=P.upperOpen;return _===void 0?T===void 0?null:o.upperBound(T,!!P):T===void 0?o.lowerBound(_,!!R):o.bound(_,T,!!R,!!P)}function f(j){var _,T=j.name;return{name:T,schema:j,mutate:function(R){var P=R.trans,L=R.type,M=R.keys,N=R.values,U=R.range;return new Promise(function(V,ee){V=Me(V);var Y=P.objectStore(T),G=Y.keyPath==null,ne=L==="put"||L==="add";if(!ne&&L!=="delete"&&L!=="deleteRange")throw new Error("Invalid operation type: "+L);var Z,ie=(M||N||{length:1}).length;if(M&&N&&M.length!==N.length)throw new Error("Given keys array must have same length as given values array.");if(ie===0)return V({numFailures:0,failures:{},results:[],lastResult:void 0});function be($t){++Dt,lr($t)}var xe=[],$e=[],Dt=0;if(L==="deleteRange"){if(U.type===4)return V({numFailures:Dt,failures:$e,results:[],lastResult:void 0});U.type===3?xe.push(Z=Y.clear()):xe.push(Z=Y.delete(d(U)))}else{var G=ne?G?[N,M]:[N,null]:[M,null],ge=G[0],wt=G[1];if(ne)for(var vt=0;vt<ie;++vt)xe.push(Z=wt&&wt[vt]!==void 0?Y[L](ge[vt],wt[vt]):Y[L](ge[vt])),Z.onerror=be;else for(vt=0;vt<ie;++vt)xe.push(Z=Y[L](ge[vt])),Z.onerror=be}function Vr($t){$t=$t.target.result,xe.forEach(function(In,Qi){return In.error!=null&&($e[Qi]=In.error)}),V({numFailures:Dt,failures:$e,results:L==="delete"?M:xe.map(function(In){return In.result}),lastResult:$t})}Z.onerror=function($t){be($t),Vr($t)},Z.onsuccess=Vr})},getMany:function(R){var P=R.trans,L=R.keys;return new Promise(function(M,N){M=Me(M);for(var U,V=P.objectStore(T),ee=L.length,Y=new Array(ee),G=0,ne=0,Z=function(xe){xe=xe.target,Y[xe._pos]=xe.result,++ne===G&&M(Y)},ie=tn(N),be=0;be<ee;++be)L[be]!=null&&((U=V.get(L[be]))._pos=be,U.onsuccess=Z,U.onerror=ie,++G);G===0&&M(Y)})},get:function(R){var P=R.trans,L=R.key;return new Promise(function(M,N){M=Me(M);var U=P.objectStore(T).get(L);U.onsuccess=function(V){return M(V.target.result)},U.onerror=tn(N)})},query:(_=A,function(R){return new Promise(function(P,L){P=Me(P);var M,N,U,G=R.trans,V=R.values,ee=R.limit,Z=R.query,Y=ee===1/0?void 0:ee,ne=Z.index,Z=Z.range,G=G.objectStore(T),ne=ne.isPrimaryKey?G:G.index(ne.name),Z=d(Z);if(ee===0)return P({result:[]});_?((Y=V?ne.getAll(Z,Y):ne.getAllKeys(Z,Y)).onsuccess=function(ie){return P({result:ie.target.result})},Y.onerror=tn(L)):(M=0,N=!V&&"openKeyCursor"in ne?ne.openKeyCursor(Z):ne.openCursor(Z),U=[],N.onsuccess=function(ie){var be=N.result;return be?(U.push(V?be.value:be.primaryKey),++M===ee?P({result:U}):void be.continue()):P({result:U})},N.onerror=tn(L))})}),openCursor:function(R){var P=R.trans,L=R.values,M=R.query,N=R.reverse,U=R.unique;return new Promise(function(V,ee){V=Me(V);var ne=M.index,Y=M.range,G=P.objectStore(T),G=ne.isPrimaryKey?G:G.index(ne.name),ne=N?U?"prevunique":"prev":U?"nextunique":"next",Z=!L&&"openKeyCursor"in G?G.openKeyCursor(d(Y),ne):G.openCursor(d(Y),ne);Z.onerror=tn(ee),Z.onsuccess=Me(function(ie){var be,xe,$e,Dt,ge=Z.result;ge?(ge.___id=++$l,ge.done=!1,be=ge.continue.bind(ge),xe=(xe=ge.continuePrimaryKey)&&xe.bind(ge),$e=ge.advance.bind(ge),Dt=function(){throw new Error("Cursor not stopped")},ge.trans=P,ge.stop=ge.continue=ge.continuePrimaryKey=ge.advance=function(){throw new Error("Cursor not started")},ge.fail=Me(ee),ge.next=function(){var wt=this,vt=1;return this.start(function(){return vt--?wt.continue():wt.stop()}).then(function(){return wt})},ge.start=function(wt){function vt(){if(Z.result)try{wt()}catch($t){ge.fail($t)}else ge.done=!0,ge.start=function(){throw new Error("Cursor behind last entry")},ge.stop()}var Vr=new Promise(function($t,In){$t=Me($t),Z.onerror=tn(In),ge.fail=In,ge.stop=function(Qi){ge.stop=ge.continue=ge.continuePrimaryKey=ge.advance=Dt,$t(Qi)}});return Z.onsuccess=Me(function($t){Z.onsuccess=vt,vt()}),ge.continue=be,ge.continuePrimaryKey=xe,ge.advance=$e,vt(),Vr},V(ge)):V(null)},ee)})},count:function(R){var P=R.query,L=R.trans,M=P.index,N=P.range;return new Promise(function(U,V){var ee=L.objectStore(T),Y=M.isPrimaryKey?ee:ee.index(M.name),ee=d(N),Y=ee?Y.count(ee):Y.count();Y.onsuccess=Me(function(G){return U(G.target.result)}),Y.onerror=tn(V)})}}}var p,b,x,D=(b=S,x=Xs((p=s).objectStoreNames),{schema:{name:p.name,tables:x.map(function(j){return b.objectStore(j)}).map(function(j){var _=j.keyPath,P=j.autoIncrement,T=u(_),R={},P={name:j.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:_==null,compound:T,keyPath:_,autoIncrement:P,unique:!0,extractKey:Ri(_)},indexes:Xs(j.indexNames).map(function(L){return j.index(L)}).map(function(U){var M=U.name,N=U.unique,V=U.multiEntry,U=U.keyPath,V={name:M,compound:u(U),keyPath:U,unique:N,multiEntry:V,extractKey:Ri(U)};return R[dr(U)]=V}),getIndexByKeyPath:function(L){return R[dr(L)]}};return R[":id"]=P.primaryKey,_!=null&&(R[dr(_)]=P.primaryKey),P})},hasGetAll:0<x.length&&"getAll"in b.objectStore(x[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),S=D.schema,A=D.hasGetAll,D=S.tables.map(f),$={};return D.forEach(function(j){return $[j.name]=j}),{stack:"dbcore",transaction:s.transaction.bind(s),table:function(j){if(!$[j])throw new Error("Table '".concat(j,"' not found"));return $[j]},MIN_KEY:-1/0,MAX_KEY:ur(o),schema:S}}function kl(s,o,c,d){var f=c.IDBKeyRange;return c.indexedDB,{dbcore:(d=Cl(o,f,d),s.dbcore.reduce(function(p,b){return b=b.create,i(i({},p),b(p))},d))}}function Or(s,d){var c=d.db,d=kl(s._middlewares,c,s._deps,d);s.core=d.dbcore,s.tables.forEach(function(f){var p=f.name;s.core.schema.tables.some(function(b){return b.name===p})&&(f.core=s.core.table(p),s[p]instanceof s.Table&&(s[p].core=f.core))})}function Fr(s,o,c,d){c.forEach(function(f){var p=d[f];o.forEach(function(b){var x=(function S(A,D){return K(A,D)||(A=y(A))&&S(A,D)})(b,f);(!x||"value"in x&&x.value===void 0)&&(b===s.Transaction.prototype||b instanceof s.Transaction?z(b,f,{get:function(){return this.table(f)},set:function(S){W(this,f,{value:S,writable:!0,configurable:!0,enumerable:!0})}}):b[f]=new s.Table(f,p))})})}function ji(s,o){o.forEach(function(c){for(var d in c)c[d]instanceof s.Table&&delete c[d]})}function El(s,o){return s._cfg.version-o._cfg.version}function Sl(s,o,c,d){var f=s._dbSchema;c.objectStoreNames.contains("$meta")&&!f.$meta&&(f.$meta=Ii("$meta",Qs("")[0],[]),s._storeNames.push("$meta"));var p=s._createTransaction("readwrite",s._storeNames,f);p.create(c),p._completion.catch(d);var b=p._reject.bind(p),x=Q.transless||Q;gn(function(){return Q.trans=p,Q.transless=x,o!==0?(Or(s,c),A=o,((S=p).storeNames.includes("$meta")?S.table("$meta").get("version").then(function(D){return D??A}):J.resolve(A)).then(function(D){return j=D,_=p,T=c,R=[],D=($=s)._versions,P=$._dbSchema=Lr(0,$.idbdb,T),(D=D.filter(function(L){return L._cfg.version>=j})).length!==0?(D.forEach(function(L){R.push(function(){var M=P,N=L._cfg.dbschema;Br($,M,T),Br($,N,T),P=$._dbSchema=N;var U=Oi(M,N);U.add.forEach(function(ne){Fi(T,ne[0],ne[1].primKey,ne[1].indexes)}),U.change.forEach(function(ne){if(ne.recreate)throw new te.Upgrade("Not yet support for changing primary key");var Z=T.objectStore(ne.name);ne.add.forEach(function(ie){return zr(Z,ie)}),ne.change.forEach(function(ie){Z.deleteIndex(ie.name),zr(Z,ie)}),ne.del.forEach(function(ie){return Z.deleteIndex(ie)})});var V=L._cfg.contentUpgrade;if(V&&L._cfg.version>j){Or($,T),_._memoizedTables={};var ee=Ae(N);U.del.forEach(function(ne){ee[ne]=M[ne]}),ji($,[$.Transaction.prototype]),Fr($,[$.Transaction.prototype],l(ee),ee),_.schema=ee;var Y,G=ct(V);return G&&qn(),U=J.follow(function(){var ne;(Y=V(_))&&G&&(ne=bn.bind(null,null),Y.then(ne,ne))}),Y&&typeof Y.then=="function"?J.resolve(Y):U.then(function(){return Y})}}),R.push(function(M){var N,U,V=L._cfg.dbschema;N=V,U=M,[].slice.call(U.db.objectStoreNames).forEach(function(ee){return N[ee]==null&&U.db.deleteObjectStore(ee)}),ji($,[$.Transaction.prototype]),Fr($,[$.Transaction.prototype],$._storeNames,$._dbSchema),_.schema=$._dbSchema}),R.push(function(M){$.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil($.idbdb.version/10)===L._cfg.version?($.idbdb.deleteObjectStore("$meta"),delete $._dbSchema.$meta,$._storeNames=$._storeNames.filter(function(N){return N!=="$meta"})):M.objectStore("$meta").put(L._cfg.version,"version"))})}),(function L(){return R.length?J.resolve(R.shift()(_.idbtrans)).then(L):J.resolve()})().then(function(){Gs(P,T)})):J.resolve();var $,j,_,T,R,P}).catch(b)):(l(f).forEach(function(D){Fi(c,D,f[D].primKey,f[D].indexes)}),Or(s,c),void J.follow(function(){return s.on.populate.fire(p)}).catch(b));var S,A})}function _l(s,o){Gs(s._dbSchema,o),o.db.version%10!=0||o.objectStoreNames.contains("$meta")||o.db.createObjectStore("$meta").add(Math.ceil(o.db.version/10-1),"version");var c=Lr(0,s.idbdb,o);Br(s,s._dbSchema,o);for(var d=0,f=Oi(c,s._dbSchema).change;d<f.length;d++){var p=(function(b){if(b.change.length||b.recreate)return console.warn("Unable to patch indexes of table ".concat(b.name," because it has changes on the type of index or primary key.")),{value:void 0};var x=o.objectStore(b.name);b.add.forEach(function(S){Oe&&console.debug("Dexie upgrade patch: Creating missing index ".concat(b.name,".").concat(S.src)),zr(x,S)})})(f[d]);if(typeof p=="object")return p.value}}function Oi(s,o){var c,d={del:[],add:[],change:[]};for(c in s)o[c]||d.del.push(c);for(c in o){var f=s[c],p=o[c];if(f){var b={name:c,def:p,recreate:!1,del:[],add:[],change:[]};if(""+(f.primKey.keyPath||"")!=""+(p.primKey.keyPath||"")||f.primKey.auto!==p.primKey.auto)b.recreate=!0,d.change.push(b);else{var x=f.idxByName,S=p.idxByName,A=void 0;for(A in x)S[A]||b.del.push(A);for(A in S){var D=x[A],$=S[A];D?D.src!==$.src&&b.change.push($):b.add.push($)}(0<b.del.length||0<b.add.length||0<b.change.length)&&d.change.push(b)}}else d.add.push([c,p])}return d}function Fi(s,o,c,d){var f=s.db.createObjectStore(o,c.keyPath?{keyPath:c.keyPath,autoIncrement:c.auto}:{autoIncrement:c.auto});return d.forEach(function(p){return zr(f,p)}),f}function Gs(s,o){l(s).forEach(function(c){o.db.objectStoreNames.contains(c)||(Oe&&console.debug("Dexie: Creating missing table",c),Fi(o,c,s[c].primKey,s[c].indexes))})}function zr(s,o){s.createIndex(o.name,o.keyPath,{unique:o.unique,multiEntry:o.multi})}function Lr(s,o,c){var d={};return _e(o.objectStoreNames,0).forEach(function(f){for(var p=c.objectStore(f),b=Di(Ys(A=p.keyPath),A||"",!0,!1,!!p.autoIncrement,A&&typeof A!="string",!0),x=[],S=0;S<p.indexNames.length;++S){var D=p.index(p.indexNames[S]),A=D.keyPath,D=Di(D.name,A,!!D.unique,!!D.multiEntry,!1,A&&typeof A!="string",!1);x.push(D)}d[f]=Ii(f,b,x)}),d}function Br(s,o,c){for(var d=c.db.objectStoreNames,f=0;f<d.length;++f){var p=d[f],b=c.objectStore(p);s._hasGetAll="getAll"in b;for(var x=0;x<b.indexNames.length;++x){var S=b.indexNames[x],A=b.index(S).keyPath,D=typeof A=="string"?A:"["+_e(A).join("+")+"]";!o[p]||(A=o[p].idxByName[D])&&(A.name=S,delete o[p].idxByName[D],o[p].idxByName[S]=A)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&a.WorkerGlobalScope&&a instanceof a.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(s._hasGetAll=!1)}function Qs(s){return s.split(",").map(function(o,c){var d=(o=o.trim()).replace(/([&*]|\+\+)/g,""),f=/^\[/.test(d)?d.match(/^\[(.*)\]$/)[1].split("+"):d;return Di(d,f||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),u(f),c===0)})}var Al=(Mr.prototype._parseStoresSpec=function(s,o){l(s).forEach(function(c){if(s[c]!==null){var d=Qs(s[c]),f=d.shift();if(f.unique=!0,f.multi)throw new te.Schema("Primary key cannot be multi-valued");d.forEach(function(p){if(p.auto)throw new te.Schema("Only primary key can be marked as autoIncrement (++)");if(!p.keyPath)throw new te.Schema("Index must have a name and cannot be an empty string")}),o[c]=Ii(c,f,d)}})},Mr.prototype.stores=function(c){var o=this.db;this._cfg.storesSource=this._cfg.storesSource?h(this._cfg.storesSource,c):c;var c=o._versions,d={},f={};return c.forEach(function(p){h(d,p._cfg.storesSource),f=p._cfg.dbschema={},p._parseStoresSpec(d,f)}),o._dbSchema=f,ji(o,[o._allTables,o,o.Transaction.prototype]),Fr(o,[o._allTables,o,o.Transaction.prototype,this._cfg.tables],l(f),f),o._storeNames=l(f),this},Mr.prototype.upgrade=function(s){return this._cfg.contentUpgrade=At(this._cfg.contentUpgrade||de,s),this},Mr);function Mr(){}function zi(s,o){var c=s._dbNamesDB;return c||(c=s._dbNamesDB=new un(Tr,{addons:[],indexedDB:s,IDBKeyRange:o})).version(1).stores({dbnames:"name"}),c.table("dbnames")}function Li(s){return s&&typeof s.databases=="function"}function Bi(s){return gn(function(){return Q.letThrough=!0,s()})}function Mi(s){return!("from"in s)}var yt=function(s,o){if(!this){var c=new yt;return s&&"d"in s&&h(c,s),c}h(this,arguments.length?{d:1,from:s,to:1<arguments.length?o:s}:{d:0})};function hr(s,o,c){var d=Se(o,c);if(!isNaN(d)){if(0<d)throw RangeError();if(Mi(s))return h(s,{from:o,to:c,d:1});var f=s.l,d=s.r;if(Se(c,s.from)<0)return f?hr(f,o,c):s.l={from:o,to:c,d:1,l:null,r:null},Zs(s);if(0<Se(o,s.to))return d?hr(d,o,c):s.r={from:o,to:c,d:1,l:null,r:null},Zs(s);Se(o,s.from)<0&&(s.from=o,s.l=null,s.d=d?d.d+1:1),0<Se(c,s.to)&&(s.to=c,s.r=null,s.d=s.l?s.l.d+1:1),c=!s.r,f&&!s.l&&fr(s,f),d&&c&&fr(s,d)}}function fr(s,o){Mi(o)||(function c(d,S){var p=S.from,b=S.to,x=S.l,S=S.r;hr(d,p,b),x&&c(d,x),S&&c(d,S)})(s,o)}function Js(s,o){var c=Nr(o),d=c.next();if(d.done)return!1;for(var f=d.value,p=Nr(s),b=p.next(f.from),x=b.value;!d.done&&!b.done;){if(Se(x.from,f.to)<=0&&0<=Se(x.to,f.from))return!0;Se(f.from,x.from)<0?f=(d=c.next(x.from)).value:x=(b=p.next(f.from)).value}return!1}function Nr(s){var o=Mi(s)?null:{s:0,n:s};return{next:function(c){for(var d=0<arguments.length;o;)switch(o.s){case 0:if(o.s=1,d)for(;o.n.l&&Se(c,o.n.from)<0;)o={up:o,n:o.n.l,s:1};else for(;o.n.l;)o={up:o,n:o.n.l,s:1};case 1:if(o.s=2,!d||Se(c,o.n.to)<=0)return{value:o.n,done:!1};case 2:if(o.n.r){o.s=3,o={up:o,n:o.n.r,s:0};continue}case 3:o=o.up}return{done:!0}}}}function Zs(s){var o,c,d=(((o=s.r)===null||o===void 0?void 0:o.d)||0)-(((c=s.l)===null||c===void 0?void 0:c.d)||0),f=1<d?"r":d<-1?"l":"";f&&(o=f=="r"?"l":"r",c=i({},s),d=s[f],s.from=d.from,s.to=d.to,s[f]=d[f],c[f]=d[o],(s[o]=c).d=eo(c)),s.d=eo(s)}function eo(c){var o=c.r,c=c.l;return(o?c?Math.max(o.d,c.d):o.d:c?c.d:0)+1}function Ur(s,o){return l(o).forEach(function(c){s[c]?fr(s[c],o[c]):s[c]=(function d(f){var p,b,x={};for(p in f)v(f,p)&&(b=f[p],x[p]=!b||typeof b!="object"||m.has(b.constructor)?b:d(b));return x})(o[c])}),s}function Ni(s,o){return s.all||o.all||Object.keys(s).some(function(c){return o[c]&&Js(o[c],s[c])})}I(yt.prototype,((Ft={add:function(s){return fr(this,s),this},addKey:function(s){return hr(this,s,s),this},addKeys:function(s){var o=this;return s.forEach(function(c){return hr(o,c,c)}),this},hasKey:function(s){var o=Nr(this).next(s).value;return o&&Se(o.from,s)<=0&&0<=Se(o.to,s)}})[le]=function(){return Nr(this)},Ft));var Tn={},Ui={},qi=!1;function qr(s){Ur(Ui,s),qi||(qi=!0,setTimeout(function(){qi=!1,Hi(Ui,!(Ui={}))},0))}function Hi(s,o){o===void 0&&(o=!1);var c=new Set;if(s.all)for(var d=0,f=Object.values(Tn);d<f.length;d++)to(b=f[d],s,c,o);else for(var p in s){var b,x=/^idb\:\/\/(.*)\/(.*)\//.exec(p);x&&(p=x[1],x=x[2],(b=Tn["idb://".concat(p,"/").concat(x)])&&to(b,s,c,o))}c.forEach(function(S){return S()})}function to(s,o,c,d){for(var f=[],p=0,b=Object.entries(s.queries.query);p<b.length;p++){for(var x=b[p],S=x[0],A=[],D=0,$=x[1];D<$.length;D++){var j=$[D];Ni(o,j.obsSet)?j.subscribers.forEach(function(P){return c.add(P)}):d&&A.push(j)}d&&f.push([S,A])}if(d)for(var _=0,T=f;_<T.length;_++){var R=T[_],S=R[0],A=R[1];s.queries.query[S]=A}}function Pl(s){var o=s._state,c=s._deps.indexedDB;if(o.isBeingOpened||s.idbdb)return o.dbReadyPromise.then(function(){return o.dbOpenError?at(o.dbOpenError):s});o.isBeingOpened=!0,o.dbOpenError=null,o.openComplete=!1;var d=o.openCanceller,f=Math.round(10*s.verno),p=!1;function b(){if(o.openCanceller!==d)throw new te.DatabaseClosed("db.open() was cancelled")}function x(){return new J(function(j,_){if(b(),!c)throw new te.MissingAPI;var T=s.name,R=o.autoSchema||!f?c.open(T):c.open(T,f);if(!R)throw new te.MissingAPI;R.onerror=tn(_),R.onblocked=Me(s._fireOnBlocked),R.onupgradeneeded=Me(function(P){var L;D=R.transaction,o.autoSchema&&!s._options.allowEmptyDB?(R.onerror=lr,D.abort(),R.result.close(),(L=c.deleteDatabase(T)).onsuccess=L.onerror=Me(function(){_(new te.NoSuchDatabase("Database ".concat(T," doesnt exist")))})):(D.onerror=tn(_),P=P.oldVersion>Math.pow(2,62)?0:P.oldVersion,$=P<1,s.idbdb=R.result,p&&_l(s,D),Sl(s,P/10,D,_))},_),R.onsuccess=Me(function(){D=null;var P,L,M,N,U,V=s.idbdb=R.result,ee=_e(V.objectStoreNames);if(0<ee.length)try{var Y=V.transaction((N=ee).length===1?N[0]:N,"readonly");if(o.autoSchema)L=V,M=Y,(P=s).verno=L.version/10,M=P._dbSchema=Lr(0,L,M),P._storeNames=_e(L.objectStoreNames,0),Fr(P,[P._allTables],l(M),M);else if(Br(s,s._dbSchema,Y),((U=Oi(Lr(0,(U=s).idbdb,Y),U._dbSchema)).add.length||U.change.some(function(G){return G.add.length||G.change.length}))&&!p)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),V.close(),f=V.version+1,p=!0,j(x());Or(s,Y)}catch{}Hn.push(s),V.onversionchange=Me(function(G){o.vcFired=!0,s.on("versionchange").fire(G)}),V.onclose=Me(function(G){s.on("close").fire(G)}),$&&(U=s._deps,Y=T,V=U.indexedDB,U=U.IDBKeyRange,Li(V)||Y===Tr||zi(V,U).put({name:Y}).catch(de)),j()},_)}).catch(function(j){switch(j?.name){case"UnknownError":if(0<o.PR1398_maxLoop)return o.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),x();break;case"VersionError":if(0<f)return f=0,x()}return J.reject(j)})}var S,A=o.dbReadyResolve,D=null,$=!1;return J.race([d,(typeof navigator>"u"?J.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(j){function _(){return indexedDB.databases().finally(j)}S=setInterval(_,100),_()}).finally(function(){return clearInterval(S)}):Promise.resolve()).then(x)]).then(function(){return b(),o.onReadyBeingFired=[],J.resolve(Bi(function(){return s.on.ready.fire(s.vip)})).then(function j(){if(0<o.onReadyBeingFired.length){var _=o.onReadyBeingFired.reduce(At,de);return o.onReadyBeingFired=[],J.resolve(Bi(function(){return _(s.vip)})).then(j)}})}).finally(function(){o.openCanceller===d&&(o.onReadyBeingFired=null,o.isBeingOpened=!1)}).catch(function(j){o.dbOpenError=j;try{D&&D.abort()}catch{}return d===o.openCanceller&&s._close(),at(j)}).finally(function(){o.openComplete=!0,A()}).then(function(){var j;return $&&(j={},s.tables.forEach(function(_){_.schema.indexes.forEach(function(T){T.name&&(j["idb://".concat(s.name,"/").concat(_.name,"/").concat(T.name)]=new yt(-1/0,[[[]]]))}),j["idb://".concat(s.name,"/").concat(_.name,"/")]=j["idb://".concat(s.name,"/").concat(_.name,"/:dels")]=new yt(-1/0,[[[]]])}),vn(cr).fire(j),Hi(j,!0)),s})}function Wi(s){function o(p){return s.next(p)}var c=f(o),d=f(function(p){return s.throw(p)});function f(p){return function(S){var x=p(S),S=x.value;return x.done?S:S&&typeof S.then=="function"?S.then(c,d):u(S)?Promise.all(S).then(c,d):c(S)}}return f(o)()}function Hr(s,o,c){for(var d=u(s)?s.slice():[s],f=0;f<c;++f)d.push(o);return d}var Tl={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(s){return i(i({},s),{table:function(o){var c=s.table(o),d=c.schema,f={},p=[];function b($,j,_){var T=dr($),R=f[T]=f[T]||[],P=$==null?0:typeof $=="string"?1:$.length,L=0<j,L=i(i({},_),{name:L?"".concat(T,"(virtual-from:").concat(_.name,")"):_.name,lowLevelIndex:_,isVirtual:L,keyTail:j,keyLength:P,extractKey:Ri($),unique:!L&&_.unique});return R.push(L),L.isPrimaryKey||p.push(L),1<P&&b(P===2?$[0]:$.slice(0,P-1),j+1,_),R.sort(function(M,N){return M.keyTail-N.keyTail}),L}o=b(d.primaryKey.keyPath,0,d.primaryKey),f[":id"]=[o];for(var x=0,S=d.indexes;x<S.length;x++){var A=S[x];b(A.keyPath,0,A)}function D($){var j,_=$.query.index;return _.isVirtual?i(i({},$),{query:{index:_.lowLevelIndex,range:(j=$.query.range,_=_.keyTail,{type:j.type===1?2:j.type,lower:Hr(j.lower,j.lowerOpen?s.MAX_KEY:s.MIN_KEY,_),lowerOpen:!0,upper:Hr(j.upper,j.upperOpen?s.MIN_KEY:s.MAX_KEY,_),upperOpen:!0})}}):$}return i(i({},c),{schema:i(i({},d),{primaryKey:o,indexes:p,getIndexByKeyPath:function($){return($=f[dr($)])&&$[0]}}),count:function($){return c.count(D($))},query:function($){return c.query(D($))},openCursor:function($){var j=$.query.index,_=j.keyTail,T=j.isVirtual,R=j.keyLength;return T?c.openCursor(D($)).then(function(L){return L&&P(L)}):c.openCursor($);function P(L){return Object.create(L,{continue:{value:function(M){M!=null?L.continue(Hr(M,$.reverse?s.MAX_KEY:s.MIN_KEY,_)):$.unique?L.continue(L.key.slice(0,R).concat($.reverse?s.MIN_KEY:s.MAX_KEY,_)):L.continue()}},continuePrimaryKey:{value:function(M,N){L.continuePrimaryKey(Hr(M,s.MAX_KEY,_),N)}},primaryKey:{get:function(){return L.primaryKey}},key:{get:function(){var M=L.key;return R===1?M[0]:M.slice(0,R)}},value:{get:function(){return L.value}}})}}})}})}};function Ki(s,o,c,d){return c=c||{},d=d||"",l(s).forEach(function(f){var p,b,x;v(o,f)?(p=s[f],b=o[f],typeof p=="object"&&typeof b=="object"&&p&&b?(x=C(p))!==C(b)?c[d+f]=o[f]:x==="Object"?Ki(p,b,c,d+f+"."):p!==b&&(c[d+f]=o[f]):p!==b&&(c[d+f]=o[f])):c[d+f]=void 0}),l(o).forEach(function(f){v(s,f)||(c[d+f]=o[f])}),c}function Vi(s,o){return o.type==="delete"?o.keys:o.keys||o.values.map(s.extractKey)}var Dl={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(s){return i(i({},s),{table:function(o){var c=s.table(o),d=c.schema.primaryKey;return i(i({},c),{mutate:function(f){var p=Q.trans,b=p.table(o).hook,x=b.deleting,S=b.creating,A=b.updating;switch(f.type){case"add":if(S.fire===de)break;return p._promise("readwrite",function(){return D(f)},!0);case"put":if(S.fire===de&&A.fire===de)break;return p._promise("readwrite",function(){return D(f)},!0);case"delete":if(x.fire===de)break;return p._promise("readwrite",function(){return D(f)},!0);case"deleteRange":if(x.fire===de)break;return p._promise("readwrite",function(){return(function $(j,_,T){return c.query({trans:j,values:!1,query:{index:d,range:_},limit:T}).then(function(R){var P=R.result;return D({type:"delete",keys:P,trans:j}).then(function(L){return 0<L.numFailures?Promise.reject(L.failures[0]):P.length<T?{failures:[],numFailures:0,lastResult:void 0}:$(j,i(i({},_),{lower:P[P.length-1],lowerOpen:!0}),T)})})})(f.trans,f.range,1e4)},!0)}return c.mutate(f);function D($){var j,_,T,R=Q.trans,P=$.keys||Vi(d,$);if(!P)throw new Error("Keys missing");return($=$.type==="add"||$.type==="put"?i(i({},$),{keys:P}):i({},$)).type!=="delete"&&($.values=n([],$.values)),$.keys&&($.keys=n([],$.keys)),j=c,T=P,((_=$).type==="add"?Promise.resolve([]):j.getMany({trans:_.trans,keys:T,cache:"immutable"})).then(function(L){var M=P.map(function(N,U){var V,ee,Y,G=L[U],ne={onerror:null,onsuccess:null};return $.type==="delete"?x.fire.call(ne,N,G,R):$.type==="add"||G===void 0?(V=S.fire.call(ne,N,$.values[U],R),N==null&&V!=null&&($.keys[U]=N=V,d.outbound||ve($.values[U],d.keyPath,N))):(V=Ki(G,$.values[U]),(ee=A.fire.call(ne,V,N,G,R))&&(Y=$.values[U],Object.keys(ee).forEach(function(Z){v(Y,Z)?Y[Z]=ee[Z]:ve(Y,Z,ee[Z])}))),ne});return c.mutate($).then(function(N){for(var U=N.failures,V=N.results,ee=N.numFailures,N=N.lastResult,Y=0;Y<P.length;++Y){var G=(V||P)[Y],ne=M[Y];G==null?ne.onerror&&ne.onerror(U[Y]):ne.onsuccess&&ne.onsuccess($.type==="put"&&L[Y]?$.values[Y]:G)}return{failures:U,results:V,numFailures:ee,lastResult:N}}).catch(function(N){return M.forEach(function(U){return U.onerror&&U.onerror(N)}),Promise.reject(N)})})}}})}})}};function no(s,o,c){try{if(!o||o.keys.length<s.length)return null;for(var d=[],f=0,p=0;f<o.keys.length&&p<s.length;++f)Se(o.keys[f],s[p])===0&&(d.push(c?E(o.values[f]):o.values[f]),++p);return d.length===s.length?d:null}catch{return null}}var Il={stack:"dbcore",level:-1,create:function(s){return{table:function(o){var c=s.table(o);return i(i({},c),{getMany:function(d){if(!d.cache)return c.getMany(d);var f=no(d.keys,d.trans._cache,d.cache==="clone");return f?J.resolve(f):c.getMany(d).then(function(p){return d.trans._cache={keys:d.keys,values:d.cache==="clone"?E(p):p},p})},mutate:function(d){return d.type!=="add"&&(d.trans._cache=null),c.mutate(d)}})}}}};function ro(s,o){return s.trans.mode==="readonly"&&!!s.subscr&&!s.trans.explicit&&s.trans.db._options.cache!=="disabled"&&!o.schema.primaryKey.outbound}function io(s,o){switch(s){case"query":return o.values&&!o.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Rl={stack:"dbcore",level:0,name:"Observability",create:function(s){var o=s.schema.name,c=new yt(s.MIN_KEY,s.MAX_KEY);return i(i({},s),{transaction:function(d,f,p){if(Q.subscr&&f!=="readonly")throw new te.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Q.querier));return s.transaction(d,f,p)},table:function(d){var f=s.table(d),p=f.schema,b=p.primaryKey,$=p.indexes,x=b.extractKey,S=b.outbound,A=b.autoIncrement&&$.filter(function(_){return _.compound&&_.keyPath.includes(b.keyPath)}),D=i(i({},f),{mutate:function(_){function T(Z){return Z="idb://".concat(o,"/").concat(d,"/").concat(Z),N[Z]||(N[Z]=new yt)}var R,P,L,M=_.trans,N=_.mutatedParts||(_.mutatedParts={}),U=T(""),V=T(":dels"),ee=_.type,ne=_.type==="deleteRange"?[_.range]:_.type==="delete"?[_.keys]:_.values.length<50?[Vi(b,_).filter(function(Z){return Z}),_.values]:[],Y=ne[0],G=ne[1],ne=_.trans._cache;return u(Y)?(U.addKeys(Y),(ne=ee==="delete"||Y.length===G.length?no(Y,ne):null)||V.addKeys(Y),(ne||G)&&(R=T,P=ne,L=G,p.indexes.forEach(function(Z){var ie=R(Z.name||"");function be($e){return $e!=null?Z.extractKey($e):null}function xe($e){return Z.multiEntry&&u($e)?$e.forEach(function(Dt){return ie.addKey(Dt)}):ie.addKey($e)}(P||L).forEach(function($e,wt){var ge=P&&be(P[wt]),wt=L&&be(L[wt]);Se(ge,wt)!==0&&(ge!=null&&xe(ge),wt!=null&&xe(wt))})}))):Y?(G={from:(G=Y.lower)!==null&&G!==void 0?G:s.MIN_KEY,to:(G=Y.upper)!==null&&G!==void 0?G:s.MAX_KEY},V.add(G),U.add(G)):(U.add(c),V.add(c),p.indexes.forEach(function(Z){return T(Z.name).add(c)})),f.mutate(_).then(function(Z){return!Y||_.type!=="add"&&_.type!=="put"||(U.addKeys(Z.results),A&&A.forEach(function(ie){for(var be=_.values.map(function(ge){return ie.extractKey(ge)}),xe=ie.keyPath.findIndex(function(ge){return ge===b.keyPath}),$e=0,Dt=Z.results.length;$e<Dt;++$e)be[$e][xe]=Z.results[$e];T(ie.name).addKeys(be)})),M.mutatedParts=Ur(M.mutatedParts||{},N),Z})}}),$=function(T){var R=T.query,T=R.index,R=R.range;return[T,new yt((T=R.lower)!==null&&T!==void 0?T:s.MIN_KEY,(R=R.upper)!==null&&R!==void 0?R:s.MAX_KEY)]},j={get:function(_){return[b,new yt(_.key)]},getMany:function(_){return[b,new yt().addKeys(_.keys)]},count:$,query:$,openCursor:$};return l(j).forEach(function(_){D[_]=function(T){var R=Q.subscr,P=!!R,L=ro(Q,f)&&io(_,T)?T.obsSet={}:R;if(P){var M=function(G){return G="idb://".concat(o,"/").concat(d,"/").concat(G),L[G]||(L[G]=new yt)},N=M(""),U=M(":dels"),R=j[_](T),P=R[0],R=R[1];if((_==="query"&&P.isPrimaryKey&&!T.values?U:M(P.name||"")).add(R),!P.isPrimaryKey){if(_!=="count"){var V=_==="query"&&S&&T.values&&f.query(i(i({},T),{values:!1}));return f[_].apply(this,arguments).then(function(G){if(_==="query"){if(S&&T.values)return V.then(function(be){return be=be.result,N.addKeys(be),G});var ne=T.values?G.result.map(x):G.result;(T.values?N:U).addKeys(ne)}else if(_==="openCursor"){var Z=G,ie=T.values;return Z&&Object.create(Z,{key:{get:function(){return U.addKey(Z.primaryKey),Z.key}},primaryKey:{get:function(){var be=Z.primaryKey;return U.addKey(be),be}},value:{get:function(){return ie&&N.addKey(Z.primaryKey),Z.value}}})}return G})}U.add(c)}}return f[_].apply(this,arguments)}}),D}})}};function so(s,o,c){if(c.numFailures===0)return o;if(o.type==="deleteRange")return null;var d=o.keys?o.keys.length:"values"in o&&o.values?o.values.length:1;return c.numFailures===d?null:(o=i({},o),u(o.keys)&&(o.keys=o.keys.filter(function(f,p){return!(p in c.failures)})),"values"in o&&u(o.values)&&(o.values=o.values.filter(function(f,p){return!(p in c.failures)})),o)}function Yi(s,o){return c=s,((d=o).lower===void 0||(d.lowerOpen?0<Se(c,d.lower):0<=Se(c,d.lower)))&&(s=s,(o=o).upper===void 0||(o.upperOpen?Se(s,o.upper)<0:Se(s,o.upper)<=0));var c,d}function oo(s,o,j,d,f,p){if(!j||j.length===0)return s;var b=o.query.index,x=b.multiEntry,S=o.query.range,A=d.schema.primaryKey.extractKey,D=b.extractKey,$=(b.lowLevelIndex||b).extractKey,j=j.reduce(function(_,T){var R=_,P=[];if(T.type==="add"||T.type==="put")for(var L=new yt,M=T.values.length-1;0<=M;--M){var N,U=T.values[M],V=A(U);L.hasKey(V)||(N=D(U),(x&&u(N)?N.some(function(Z){return Yi(Z,S)}):Yi(N,S))&&(L.addKey(V),P.push(U)))}switch(T.type){case"add":var ee=new yt().addKeys(o.values?_.map(function(ie){return A(ie)}):_),R=_.concat(o.values?P.filter(function(ie){return ie=A(ie),!ee.hasKey(ie)&&(ee.addKey(ie),!0)}):P.map(function(ie){return A(ie)}).filter(function(ie){return!ee.hasKey(ie)&&(ee.addKey(ie),!0)}));break;case"put":var Y=new yt().addKeys(T.values.map(function(ie){return A(ie)}));R=_.filter(function(ie){return!Y.hasKey(o.values?A(ie):ie)}).concat(o.values?P:P.map(function(ie){return A(ie)}));break;case"delete":var G=new yt().addKeys(T.keys);R=_.filter(function(ie){return!G.hasKey(o.values?A(ie):ie)});break;case"deleteRange":var ne=T.range;R=_.filter(function(ie){return!Yi(A(ie),ne)})}return R},s);return j===s?s:(j.sort(function(_,T){return Se($(_),$(T))||Se(A(_),A(T))}),o.limit&&o.limit<1/0&&(j.length>o.limit?j.length=o.limit:s.length===o.limit&&j.length<o.limit&&(f.dirty=!0)),p?Object.freeze(j):j)}function ao(s,o){return Se(s.lower,o.lower)===0&&Se(s.upper,o.upper)===0&&!!s.lowerOpen==!!o.lowerOpen&&!!s.upperOpen==!!o.upperOpen}function jl(s,o){return(function(c,d,f,p){if(c===void 0)return d!==void 0?-1:0;if(d===void 0)return 1;if((d=Se(c,d))===0){if(f&&p)return 0;if(f)return 1;if(p)return-1}return d})(s.lower,o.lower,s.lowerOpen,o.lowerOpen)<=0&&0<=(function(c,d,f,p){if(c===void 0)return d!==void 0?1:0;if(d===void 0)return-1;if((d=Se(c,d))===0){if(f&&p)return 0;if(f)return-1;if(p)return 1}return d})(s.upper,o.upper,s.upperOpen,o.upperOpen)}function Ol(s,o,c,d){s.subscribers.add(c),d.addEventListener("abort",function(){var f,p;s.subscribers.delete(c),s.subscribers.size===0&&(f=s,p=o,setTimeout(function(){f.subscribers.size===0&&q(p,f)},3e3))})}var Fl={stack:"dbcore",level:0,name:"Cache",create:function(s){var o=s.schema.name;return i(i({},s),{transaction:function(c,d,f){var p,b,x=s.transaction(c,d,f);return d==="readwrite"&&(b=(p=new AbortController).signal,f=function(S){return function(){if(p.abort(),d==="readwrite"){for(var A=new Set,D=0,$=c;D<$.length;D++){var j=$[D],_=Tn["idb://".concat(o,"/").concat(j)];if(_){var T=s.table(j),R=_.optimisticOps.filter(function(ie){return ie.trans===x});if(x._explicit&&S&&x.mutatedParts)for(var P=0,L=Object.values(_.queries.query);P<L.length;P++)for(var M=0,N=(ee=L[P]).slice();M<N.length;M++)Ni((Y=N[M]).obsSet,x.mutatedParts)&&(q(ee,Y),Y.subscribers.forEach(function(ie){return A.add(ie)}));else if(0<R.length){_.optimisticOps=_.optimisticOps.filter(function(ie){return ie.trans!==x});for(var U=0,V=Object.values(_.queries.query);U<V.length;U++)for(var ee,Y,G,ne=0,Z=(ee=V[U]).slice();ne<Z.length;ne++)(Y=Z[ne]).res!=null&&x.mutatedParts&&(S&&!Y.dirty?(G=Object.isFrozen(Y.res),G=oo(Y.res,Y.req,R,T,Y,G),Y.dirty?(q(ee,Y),Y.subscribers.forEach(function(ie){return A.add(ie)})):G!==Y.res&&(Y.res=G,Y.promise=J.resolve({result:G}))):(Y.dirty&&q(ee,Y),Y.subscribers.forEach(function(ie){return A.add(ie)})))}}}A.forEach(function(ie){return ie()})}}},x.addEventListener("abort",f(!1),{signal:b}),x.addEventListener("error",f(!1),{signal:b}),x.addEventListener("complete",f(!0),{signal:b})),x},table:function(c){var d=s.table(c),f=d.schema.primaryKey;return i(i({},d),{mutate:function(p){var b=Q.trans;if(f.outbound||b.db._options.cache==="disabled"||b.explicit||b.idbtrans.mode!=="readwrite")return d.mutate(p);var x=Tn["idb://".concat(o,"/").concat(c)];return x?(b=d.mutate(p),p.type!=="add"&&p.type!=="put"||!(50<=p.values.length||Vi(f,p).some(function(S){return S==null}))?(x.optimisticOps.push(p),p.mutatedParts&&qr(p.mutatedParts),b.then(function(S){0<S.numFailures&&(q(x.optimisticOps,p),(S=so(0,p,S))&&x.optimisticOps.push(S),p.mutatedParts&&qr(p.mutatedParts))}),b.catch(function(){q(x.optimisticOps,p),p.mutatedParts&&qr(p.mutatedParts)})):b.then(function(S){var A=so(0,i(i({},p),{values:p.values.map(function(D,$){var j;return S.failures[$]?D:(D=(j=f.keyPath)!==null&&j!==void 0&&j.includes(".")?E(D):i({},D),ve(D,f.keyPath,S.results[$]),D)})}),S);x.optimisticOps.push(A),queueMicrotask(function(){return p.mutatedParts&&qr(p.mutatedParts)})}),b):d.mutate(p)},query:function(p){if(!ro(Q,d)||!io("query",p))return d.query(p);var b=((A=Q.trans)===null||A===void 0?void 0:A.db._options.cache)==="immutable",$=Q,x=$.requery,S=$.signal,A=(function(T,R,P,L){var M=Tn["idb://".concat(T,"/").concat(R)];if(!M)return[];if(!(R=M.queries[P]))return[null,!1,M,null];var N=R[(L.query?L.query.index.name:null)||""];if(!N)return[null,!1,M,null];switch(P){case"query":var U=N.find(function(V){return V.req.limit===L.limit&&V.req.values===L.values&&ao(V.req.query.range,L.query.range)});return U?[U,!0,M,N]:[N.find(function(V){return("limit"in V.req?V.req.limit:1/0)>=L.limit&&(!L.values||V.req.values)&&jl(V.req.query.range,L.query.range)}),!1,M,N];case"count":return U=N.find(function(V){return ao(V.req.query.range,L.query.range)}),[U,!!U,M,N]}})(o,c,"query",p),D=A[0],$=A[1],j=A[2],_=A[3];return D&&$?D.obsSet=p.obsSet:($=d.query(p).then(function(T){var R=T.result;if(D&&(D.res=R),b){for(var P=0,L=R.length;P<L;++P)Object.freeze(R[P]);Object.freeze(R)}else T.result=E(R);return T}).catch(function(T){return _&&D&&q(_,D),Promise.reject(T)}),D={obsSet:p.obsSet,promise:$,subscribers:new Set,type:"query",req:p,dirty:!1},_?_.push(D):(_=[D],(j=j||(Tn["idb://".concat(o,"/").concat(c)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[p.query.index.name||""]=_)),Ol(D,_,x,S),D.promise.then(function(T){return{result:oo(T.result,p,j?.optimisticOps,d,D,b)}})}})}})}};function Wr(s,o){return new Proxy(s,{get:function(c,d,f){return d==="db"?o:Reflect.get(c,d,f)}})}var un=(lt.prototype.version=function(s){if(isNaN(s)||s<.1)throw new te.Type("Given version is not a positive number");if(s=Math.round(10*s)/10,this.idbdb||this._state.isBeingOpened)throw new te.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,s);var o=this._versions,c=o.filter(function(d){return d._cfg.version===s})[0];return c||(c=new this.Version(s),o.push(c),o.sort(El),c.stores({}),this._state.autoSchema=!1,c)},lt.prototype._whenReady=function(s){var o=this;return this.idbdb&&(this._state.openComplete||Q.letThrough||this._vip)?s():new J(function(c,d){if(o._state.openComplete)return d(new te.DatabaseClosed(o._state.dbOpenError));if(!o._state.isBeingOpened){if(!o._state.autoOpen)return void d(new te.DatabaseClosed);o.open().catch(de)}o._state.dbReadyPromise.then(c,d)}).then(s)},lt.prototype.use=function(s){var o=s.stack,c=s.create,d=s.level,f=s.name;return f&&this.unuse({stack:o,name:f}),s=this._middlewares[o]||(this._middlewares[o]=[]),s.push({stack:o,create:c,level:d??10,name:f}),s.sort(function(p,b){return p.level-b.level}),this},lt.prototype.unuse=function(s){var o=s.stack,c=s.name,d=s.create;return o&&this._middlewares[o]&&(this._middlewares[o]=this._middlewares[o].filter(function(f){return d?f.create!==d:!!c&&f.name!==c})),this},lt.prototype.open=function(){var s=this;return _n(Qe,function(){return Pl(s)})},lt.prototype._close=function(){var s=this._state,o=Hn.indexOf(this);if(0<=o&&Hn.splice(o,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}s.isBeingOpened||(s.dbReadyPromise=new J(function(c){s.dbReadyResolve=c}),s.openCanceller=new J(function(c,d){s.cancelOpen=d}))},lt.prototype.close=function(c){var o=(c===void 0?{disableAutoOpen:!0}:c).disableAutoOpen,c=this._state;o?(c.isBeingOpened&&c.cancelOpen(new te.DatabaseClosed),this._close(),c.autoOpen=!1,c.dbOpenError=new te.DatabaseClosed):(this._close(),c.autoOpen=this._options.autoOpen||c.isBeingOpened,c.openComplete=!1,c.dbOpenError=null)},lt.prototype.delete=function(s){var o=this;s===void 0&&(s={disableAutoOpen:!0});var c=0<arguments.length&&typeof arguments[0]!="object",d=this._state;return new J(function(f,p){function b(){o.close(s);var x=o._deps.indexedDB.deleteDatabase(o.name);x.onsuccess=Me(function(){var S,A,D;S=o._deps,A=o.name,D=S.indexedDB,S=S.IDBKeyRange,Li(D)||A===Tr||zi(D,S).delete(A).catch(de),f()}),x.onerror=tn(p),x.onblocked=o._fireOnBlocked}if(c)throw new te.InvalidArgument("Invalid closeOptions argument to db.delete()");d.isBeingOpened?d.dbReadyPromise.then(b):b()})},lt.prototype.backendDB=function(){return this.idbdb},lt.prototype.isOpen=function(){return this.idbdb!==null},lt.prototype.hasBeenClosed=function(){var s=this._state.dbOpenError;return s&&s.name==="DatabaseClosed"},lt.prototype.hasFailed=function(){return this._state.dbOpenError!==null},lt.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(lt.prototype,"tables",{get:function(){var s=this;return l(this._allTables).map(function(o){return s._allTables[o]})},enumerable:!1,configurable:!0}),lt.prototype.transaction=function(){var s=function(o,c,d){var f=arguments.length;if(f<2)throw new te.InvalidArgument("Too few arguments");for(var p=new Array(f-1);--f;)p[f-1]=arguments[f];return d=p.pop(),[o,rt(p),d]}.apply(this,arguments);return this._transaction.apply(this,s)},lt.prototype._transaction=function(s,o,c){var d=this,f=Q.trans;f&&f.db===this&&s.indexOf("!")===-1||(f=null);var p,b,x=s.indexOf("?")!==-1;s=s.replace("!","").replace("?","");try{if(b=o.map(function(A){if(A=A instanceof d.Table?A.name:A,typeof A!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return A}),s=="r"||s===Ei)p=Ei;else{if(s!="rw"&&s!=Si)throw new te.InvalidArgument("Invalid transaction mode: "+s);p=Si}if(f){if(f.mode===Ei&&p===Si){if(!x)throw new te.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");f=null}f&&b.forEach(function(A){if(f&&f.storeNames.indexOf(A)===-1){if(!x)throw new te.SubTransaction("Table "+A+" not included in parent transaction.");f=null}}),x&&f&&!f.active&&(f=null)}}catch(A){return f?f._promise(null,function(D,$){$(A)}):at(A)}var S=function A(D,$,j,_,T){return J.resolve().then(function(){var R=Q.transless||Q,P=D._createTransaction($,j,D._dbSchema,_);if(P.explicit=!0,R={trans:P,transless:R},_)P.idbtrans=_.idbtrans;else try{P.create(),P.idbtrans._explicit=!0,D._state.PR1398_maxLoop=3}catch(N){return N.name===Ye.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return A(D,$,j,null,T)})):at(N)}var L,M=ct(T);return M&&qn(),R=J.follow(function(){var N;(L=T.call(P,P))&&(M?(N=bn.bind(null,null),L.then(N,N)):typeof L.next=="function"&&typeof L.throw=="function"&&(L=Wi(L)))},R),(L&&typeof L.then=="function"?J.resolve(L).then(function(N){return P.active?N:at(new te.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):R.then(function(){return L})).then(function(N){return _&&P._resolve(),P._completion.then(function(){return N})}).catch(function(N){return P._reject(N),at(N)})})}.bind(null,this,p,b,f,c);return f?f._promise(p,S,"lock"):Q.trans?_n(Q.transless,function(){return d._whenReady(S)}):this._whenReady(S)},lt.prototype.table=function(s){if(!v(this._allTables,s))throw new te.InvalidTable("Table ".concat(s," does not exist"));return this._allTables[s]},lt);function lt(s,o){var c=this;this._middlewares={},this.verno=0;var d=lt.dependencies;this._options=o=i({addons:lt.addons,autoOpen:!0,indexedDB:d.indexedDB,IDBKeyRange:d.IDBKeyRange,cache:"cloned"},o),this._deps={indexedDB:o.indexedDB,IDBKeyRange:o.IDBKeyRange},d=o.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var f,p,b,x,S,A={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:de,dbReadyPromise:null,cancelOpen:de,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:o.autoOpen};A.dbReadyPromise=new J(function($){A.dbReadyResolve=$}),A.openCanceller=new J(function($,j){A.cancelOpen=j}),this._state=A,this.name=s,this.on=sr(this,"populate","blocked","versionchange","close",{ready:[At,de]}),this.on.ready.subscribe=je(this.on.ready.subscribe,function($){return function(j,_){lt.vip(function(){var T,R=c._state;R.openComplete?(R.dbOpenError||J.resolve().then(j),_&&$(j)):R.onReadyBeingFired?(R.onReadyBeingFired.push(j),_&&$(j)):($(j),T=c,_||$(function P(){T.on.ready.unsubscribe(j),T.on.ready.unsubscribe(P)}))})}}),this.Collection=(f=this,or(yl.prototype,function(L,P){this.db=f;var _=Ls,T=null;if(P)try{_=P()}catch(M){T=M}var R=L._ctx,P=R.table,L=P.hook.reading.fire;this._ctx={table:P,index:R.index,isPrimKey:!R.index||P.schema.primKey.keyPath&&R.index===P.schema.primKey.name,range:_,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:T,or:R.or,valueMapper:L!==we?L:null}})),this.Table=(p=this,or(Us.prototype,function($,j,_){this.db=p,this._tx=_,this.name=$,this.schema=j,this.hook=p._allTables[$]?p._allTables[$].hook:sr(null,{creating:[Ge,de],reading:[_t,we],updating:[qt,de],deleting:[pn,de]})})),this.Transaction=(b=this,or(xl.prototype,function($,j,_,T,R){var P=this;this.db=b,this.mode=$,this.storeNames=j,this.schema=_,this.chromeTransactionDurability=T,this.idbtrans=null,this.on=sr(this,"complete","error","abort"),this.parent=R||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new J(function(L,M){P._resolve=L,P._reject=M}),this._completion.then(function(){P.active=!1,P.on.complete.fire()},function(L){var M=P.active;return P.active=!1,P.on.error.fire(L),P.parent?P.parent._reject(L):M&&P.idbtrans&&P.idbtrans.abort(),at(L)})})),this.Version=(x=this,or(Al.prototype,function($){this.db=x,this._cfg={version:$,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(S=this,or(Vs.prototype,function($,j,_){if(this.db=S,this._ctx={table:$,index:j===":id"?null:j,or:_},this._cmp=this._ascending=Se,this._descending=function(T,R){return Se(R,T)},this._max=function(T,R){return 0<Se(T,R)?T:R},this._min=function(T,R){return Se(T,R)<0?T:R},this._IDBKeyRange=S._deps.IDBKeyRange,!this._IDBKeyRange)throw new te.MissingAPI})),this.on("versionchange",function($){0<$.newVersion?console.warn("Another connection wants to upgrade database '".concat(c.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(c.name,"'. Closing db now to resume the delete request.")),c.close({disableAutoOpen:!1})}),this.on("blocked",function($){!$.newVersion||$.newVersion<$.oldVersion?console.warn("Dexie.delete('".concat(c.name,"') was blocked")):console.warn("Upgrade '".concat(c.name,"' blocked by other connection holding version ").concat($.oldVersion/10))}),this._maxKey=ur(o.IDBKeyRange),this._createTransaction=function($,j,_,T){return new c.Transaction($,j,_,c._options.chromeTransactionDurability,T)},this._fireOnBlocked=function($){c.on("blocked").fire($),Hn.filter(function(j){return j.name===c.name&&j!==c&&!j._state.vcFired}).map(function(j){return j.on("versionchange").fire($)})},this.use(Il),this.use(Fl),this.use(Rl),this.use(Tl),this.use(Dl);var D=new Proxy(this,{get:function($,j,_){if(j==="_vip")return!0;if(j==="table")return function(R){return Wr(c.table(R),D)};var T=Reflect.get($,j,_);return T instanceof Us?Wr(T,D):j==="tables"?T.map(function(R){return Wr(R,D)}):j==="_createTransaction"?function(){return Wr(T.apply(this,arguments),D)}:T}});this.vip=D,d.forEach(function($){return $(c)})}var Kr,Ft=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",zl=(Xi.prototype.subscribe=function(s,o,c){return this._subscribe(s&&typeof s!="function"?s:{next:s,error:o,complete:c})},Xi.prototype[Ft]=function(){return this},Xi);function Xi(s){this._subscribe=s}try{Kr={indexedDB:a.indexedDB||a.mozIndexedDB||a.webkitIndexedDB||a.msIndexedDB,IDBKeyRange:a.IDBKeyRange||a.webkitIDBKeyRange}}catch{Kr={indexedDB:null,IDBKeyRange:null}}function lo(s){var o,c=!1,d=new zl(function(f){var p=ct(s),b,x=!1,S={},A={},D={get closed(){return x},unsubscribe:function(){x||(x=!0,b&&b.abort(),$&&vn.storagemutated.unsubscribe(_))}};f.start&&f.start(D);var $=!1,j=function(){return ki(T)},_=function(R){Ur(S,R),Ni(A,S)&&j()},T=function(){var R,P,L;!x&&Kr.indexedDB&&(S={},R={},b&&b.abort(),b=new AbortController,L=(function(M){var N=Fe();try{p&&qn();var U=gn(s,M);return U=p?U.finally(bn):U}finally{N&&We()}})(P={subscr:R,signal:b.signal,requery:j,querier:s,trans:null}),Promise.resolve(L).then(function(M){c=!0,o=M,x||P.signal.aborted||(S={},(function(N){for(var U in N)if(v(N,U))return;return 1})(A=R)||$||(vn(cr,_),$=!0),ki(function(){return!x&&f.next&&f.next(M)}))},function(M){c=!1,["DatabaseClosedError","AbortError"].includes(M?.name)||x||ki(function(){x||f.error&&f.error(M)})}))};return setTimeout(j,0),D});return d.hasValue=function(){return c},d.getValue=function(){return o},d}var Dn=un;function Gi(s){var o=xn;try{xn=!0,vn.storagemutated.fire(s),Hi(s,!0)}finally{xn=o}}I(Dn,i(i({},Le),{delete:function(s){return new Dn(s,{addons:[]}).delete()},exists:function(s){return new Dn(s,{addons:[]}).open().then(function(o){return o.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(s){try{return o=Dn.dependencies,c=o.indexedDB,o=o.IDBKeyRange,(Li(c)?Promise.resolve(c.databases()).then(function(d){return d.map(function(f){return f.name}).filter(function(f){return f!==Tr})}):zi(c,o).toCollection().primaryKeys()).then(s)}catch{return at(new te.MissingAPI)}var o,c},defineClass:function(){return function(s){h(this,s)}},ignoreTransaction:function(s){return Q.trans?_n(Q.transless,s):s()},vip:Bi,async:function(s){return function(){try{var o=Wi(s.apply(this,arguments));return o&&typeof o.then=="function"?o:J.resolve(o)}catch(c){return at(c)}}},spawn:function(s,o,c){try{var d=Wi(s.apply(c,o||[]));return d&&typeof d.then=="function"?d:J.resolve(d)}catch(f){return at(f)}},currentTransaction:{get:function(){return Q.trans||null}},waitFor:function(s,o){return o=J.resolve(typeof s=="function"?Dn.ignoreTransaction(s):s).timeout(o||6e4),Q.trans?Q.trans.waitFor(o):o},Promise:J,debug:{get:function(){return Oe},set:function(s){qe(s)}},derive:F,extend:h,props:I,override:je,Events:sr,on:vn,liveQuery:lo,extendObservabilitySet:Ur,getByKeyPath:fe,setByKeyPath:ve,delByKeyPath:function(s,o){typeof o=="string"?ve(s,o,void 0):"length"in o&&[].map.call(o,function(c){ve(s,c,void 0)})},shallowClone:Ae,deepClone:E,getObjectDiff:Ki,cmp:Se,asap:ae,minKey:-1/0,addons:[],connections:Hn,errnames:Ye,dependencies:Kr,cache:Tn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(s){return parseInt(s)}).reduce(function(s,o,c){return s+o/Math.pow(10,2*c)})})),Dn.maxKey=ur(Dn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(vn(cr,function(s){xn||(s=new CustomEvent(Ti,{detail:s}),xn=!0,dispatchEvent(s),xn=!1)}),addEventListener(Ti,function(s){s=s.detail,xn||Gi(s)}));var Vn,xn=!1,co=function(){};return typeof BroadcastChannel<"u"&&((co=function(){(Vn=new BroadcastChannel(Ti)).onmessage=function(s){return s.data&&Gi(s.data)}})(),typeof Vn.unref=="function"&&Vn.unref(),vn(cr,function(s){xn||Vn.postMessage(s)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(s){if(!un.disableBfCache&&s.persisted){Oe&&console.debug("Dexie: handling persisted pagehide"),Vn?.close();for(var o=0,c=Hn;o<c.length;o++)c[o].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(s){!un.disableBfCache&&s.persisted&&(Oe&&console.debug("Dexie: handling persisted pageshow"),co(),Gi({all:new yt(-1/0,[[]])}))})),J.rejectionMapper=function(s,o){return!s||s instanceof Ue||s instanceof TypeError||s instanceof SyntaxError||!s.name||!Xe[s.name]?s:(o=new Xe[s.name](o||s.message,s),"stack"in s&&z(o,"stack",{get:function(){return this.inner.stack}}),o)},qe(Oe),i(un,Object.freeze({__proto__:null,Dexie:un,liveQuery:lo,Entity:Bs,cmp:Se,PropModSymbol:cn,PropModification:ar,replacePrefix:function(s,o){return new ar({replacePrefix:[s,o]})},add:function(s){return new ar({add:s})},remove:function(s){return new ar({remove:s})},default:un,RangeSet:yt,mergeRanges:fr,rangesOverlap:Js}),{default:un}),un})})(ei)),ei.exports}var wc=yc();const os=gc(wc),ko=Symbol.for("Dexie"),si=globalThis[ko]||(globalThis[ko]=os);if(os.semVer!==si.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${os.semVer} and ${si.semVer}`);const{liveQuery:va,mergeRanges:Lp,rangesOverlap:Bp,RangeSet:Mp,cmp:Np,Entity:Up,PropModSymbol:qp,PropModification:Hp,replacePrefix:Wp,add:Kp,remove:Vp}=si,vc="easydb";let Yr=null;function xc(){if(Yr)return Yr;const e=new si(vc);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>$c()),Yr={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},Yr}function $c(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function Yn(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const r=Object.entries(t);return e.filter(i=>xa(i,r)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,r){if(await e.update(t,r)===0)throw new Error(`patch: no doc with id=${t}`);const n=await e.get(t);if(!n)throw new Error(`patch: doc id=${t} vanished after update`);return n},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const i=va(()=>e.toArray()).subscribe({next:n=>t(n)});return()=>i.unsubscribe()}}}function Cc(e,t){return{async find(r){const i=e.where("tableId").equals(t);if(!r||Object.keys(r).length===0)return i.toArray();const n=Object.entries(r);return i.filter(a=>xa(a,n)).toArray()},async findOne(r){const i=await e.get(r);return i&&i.tableId===t?i:null},async insert(r){const i={...r,tableId:t};return await e.add(i),i},async bulkInsert(r){if(r.length===0)return[];const i=r.map(n=>({...n,tableId:t}));return await e.bulkAdd(i),i},async upsert(r){const i={...r,tableId:t};return await e.put(i),i},async patch(r,i){if(await e.update(r,i)===0)throw new Error(`row patch: no row ${r}`);const a=await e.get(r);if(!a)throw new Error(`row patch: row ${r} vanished after update`);return a},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},subscribe(r){const n=va(()=>e.where("tableId").equals(t).toArray()).subscribe({next:a=>r(a)});return()=>n.unsubscribe()}}}function xa(e,t){for(const[r,i]of t)if(e[r]!==i)return!1;return!0}function kc(e){return{workspaces:Yn(e.workspaces),tables:Yn(e.tables),settings:Yn(e.settings),plugins:Yn(e.plugins),viewTemplates:Yn(e.viewTemplates),viewInstances:Yn(e.viewInstances),rows:t=>Cc(e.rows,t)}}function Ec(e){const{base:t,providers:r,tableById:i,ctx:n}=e,a=new Map;return{...t,rows(l){const u=i(l),h=u?.source;if(h){const y=r.get(h.type);if(y){const k=JSON.stringify(h),v=a.get(l);if(v&&v.key===k)return v.coll;const I=y.create(u,n);return a.set(l,{key:k,coll:I}),I}}return a.delete(l),t.rows(l)}}}function Sc(){const e=new Map;return{on(t,r){let i=e.get(t);return i||(i=new Set,e.set(t,i)),i.add(r),()=>{i.delete(r)}},emit(t,r){const i=e.get(t);if(i)for(const n of i)try{n(r)}catch(a){console.error(`[event:${String(t)}] listener threw`,a)}}}}const Xt=Je`
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
`;function Sn(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const r=t.querySelector("form");r&&(e.preventDefault(),r.requestSubmit())}const Eo=new WeakSet;function Gt(e,t){if(Eo.has(t))return;Eo.add(t);let r=0,i=0,n=0,a=0,l=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",h=>{if(h.target.closest("button, input, textarea, select, a, label"))return;l=!0,r=h.clientX,i=h.clientY;const k=e.getBoundingClientRect();n=k.left,a=k.top,t.setPointerCapture(h.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",h=>{if(!l)return;const y=h.clientX-r,k=h.clientY-i,v=-e.offsetWidth+80,I=window.innerWidth-80,W=0,z=window.innerHeight-40,F=Math.max(v,Math.min(I,n+y)),K=Math.max(W,Math.min(z,a+k));e.style.position="fixed",e.style.left=`${F}px`,e.style.top=`${K}px`,e.style.margin="0"});const u=h=>{if(l){l=!1;try{t.releasePointerCapture(h.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",u),t.addEventListener("pointercancel",u)}var _c=Object.defineProperty,Ac=Object.getOwnPropertyDescriptor,$a=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ac(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&_c(t,r,n),n};let zt=class extends Ne{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),zt.instance=this}disconnectedCallback(){super.disconnectedCallback(),zt.instance===this&&(zt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&Gt(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:t,message:e,resolve:r}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",r="Input"){return this.enqueue(i=>{this.current={kind:"prompt",title:r,message:e,value:t,resolve:i}})}choice(e,t,r="Choose"){return this.enqueue(i=>{this.current={kind:"choice",title:r,message:e,options:t,resolve:i}})}enqueue(e){return new Promise(t=>{const r=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const r=this.queue.shift();r&&r()}))}render(){const e=this.current;return B`
      <dialog @cancel=${this.onCancel} @keydown=${Sn}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):pe}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return B`
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
        `;case"prompt":return B`
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
        `;case"choice":return B`
          <div class="dialog-header">
            <h2>${e.title}</h2>
            <div class="header-actions">
              <button class="ghost" @click=${()=>this.closeAndResolve(null)}>Cancel</button>
            </div>
          </div>
          <div class="dialog-body">
            ${e.message?B`<p class="message">${e.message}</p>`:pe}
            <div class="choices">
              ${e.options.map(t=>B`<button class="choice" @click=${()=>this.closeAndResolve(t)}>
                    ${t}
                  </button>`)}
            </div>
          </div>
        `}}};zt.instance=null;zt.styles=[Xt,Je`
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
    `];$a([H()],zt.prototype,"current",2);zt=$a([nt("host-dialogs")],zt);const on=Je`
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
`;var Pc=Object.defineProperty,Tc=Object.getOwnPropertyDescriptor,Ca=(e,t,r,i)=>{for(var n=i>1?void 0:i?Tc(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Pc(t,r,n),n};let dn=class extends Ne{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),dn.instance=this}disconnectedCallback(){super.disconnectedCallback(),dn.instance===this&&(dn.instance=null)}show(e,t){const r={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,r];const i=t?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),i)}dismiss(e){const t=this.toasts.find(r=>r.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(r=>r.id!==e)}render(){return B`
      ${this.toasts.map(e=>B`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${Ic(e.kind)}</span>
            <span class="body">
              ${e.title?B`<strong>${e.title}</strong>`:""}${Dc(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};dn.instance=null;dn.styles=[on,Je`
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
    `];Ca([H()],dn.prototype,"toasts",2);dn=Ca([nt("toast-host")],dn);function Dc(e){const t=/(https?:\/\/[^\s)]+)/g,r=[];let i=0,n;for(;(n=t.exec(e))!==null;)n.index>i&&r.push(e.slice(i,n.index)),r.push({url:n[0]}),i=n.index+n[0].length;return i<e.length&&r.push(e.slice(i)),r.length===0?e:r.map(a=>typeof a=="string"?a:B`<a href=${a.url} target="_blank" rel="noopener noreferrer">${a.url}</a>`)}function Ic(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function Rc(){return{headerButtons:[],footerButtons:[],tableButtons:[],importers:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map}}function jn(e,t){return e.push(t),()=>{const r=e.indexOf(t);r>=0&&e.splice(r,1)}}function Zi(e,t,r){return e.set(t,r),()=>{e.get(t)===r&&e.delete(t)}}function jc(e){return{registerHeaderButton:t=>jn(e.headerButtons,t),registerFooterButton:t=>jn(e.footerButtons,t),registerTableButton:t=>jn(e.tableButtons,t),registerImporter:t=>jn(e.importers,t),registerExporter:t=>jn(e.exporters,t),registerUrlSource:t=>jn(e.urlSources,t),registerDropHandler:t=>jn(e.dropHandlers,t),registerCellRenderer:(t,r)=>Zi(e.cellRenderers,t,r),registerRowRenderer:(t,r)=>Zi(e.rowRenderers,t,r),registerTableRenderer:(t,r)=>Zi(e.tableRenderers,t,r),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},dialogs:Oc}}const Oc={async alert(e,t){const r=zt.instance;if(r)return r.alert(e,t);window.alert(e)},async confirm(e,t){const r=zt.instance;return r?r.confirm(e,t):window.confirm(e)},async prompt(e,t,r){const i=zt.instance;return i?i.prompt(e,t,r):window.prompt(e,t)??null},async choice(e,t,r){const i=zt.instance;if(i)return i.choice(e,t,r);const n=window.prompt(`${e}

Options: ${t.join(", ")}`);return n&&t.includes(n)?n:null},toast(e,t){const r=dn.instance;r?r.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}};function Fc(e){const t=jc(e.registries),r=e.registries.rowSources,i=a=>(r.set(a.type,a),()=>{r.get(a.type)===a&&r.delete(a.type)}),n={open(a){return console.warn("[host] windows.open is stubbed until Phase 5",a.id),{id:a.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:n,registerRowSource:i,backend:{fetch:async(a,l)=>{const u=await zc(e.store),h=l?.body instanceof ArrayBuffer;if(!u||h)return globalThis.fetch(a,l);const y={url:a};return l?.method&&(y.method=l.method),l?.headers&&(y.headers=l.headers),typeof l?.body=="string"&&(y.body=l.body),globalThis.fetch(`${u}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)})},async saveFile(a,l,u){const h=typeof l=="string"?new Blob([l],{type:u??"application/octet-stream"}):l,y=URL.createObjectURL(h),k=document.createElement("a");k.href=y,k.download=a,k.rel="noopener",document.body.appendChild(k),k.click(),k.remove(),setTimeout(()=>URL.revokeObjectURL(y),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function zc(e){const r=(await e.settings.findOne("server-sync:url"))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}const Lc={name:"csv-import",version:"0.1.0",description:"Drag-and-drop CSV files to create typed tables.",author:"easyDBAccess built-ins"};function Bc(e){e.ui.registerImporter(Mc),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const i=Jc(t).filter(Zc);if(i.length===0)return!1;t.preventDefault();for(const n of i)await Nc(e,n);return!0})}const Mc={id:"csv",label:"CSV",accept:[".csv","text/csv"],async parse(e){const t=typeof e=="string"?e:await e.text();return $r(t)}};async function Nc(e,t){const r=t.name.replace(/\.csv$/i,"")||"imported";await oi(e,await t.text(),r)}async function oi(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("csv-import: no active workspace");const a=(r||"imported").replace(/\.csv$/i,"")||"imported",l=(await e.store.tables.find()).find(v=>v.workspaceId===n&&v.name===a);let u,h;if(l){const v=await e.ui.dialogs.choice(`A table named "${a}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!v)return;v==="Append rows"?(h="append",u=l.id):v==="Overwrite rows"?(h="overwrite",u=l.id):(h="new",u=Xr())}else h="new",u=Xr();e.events.emit("import:before",{source:"csv",tableId:u});let y;if(h==="new"){const v=$r(t);let I=v.columns,W=v.rows;if(i.editColumns){const F=await i.editColumns(I);if(F===null)return;W=eu(W,I,F),I=F}i.maxRows!=null&&(W=W.slice(0,i.maxRows));const z=l?`${a} (${Date.now().toString(36)})`:a;await e.store.tables.insert({id:u,workspaceId:n,name:z,code:as(z),columns:I,view:"table",...i.origin?{origin:i.origin}:{},updatedAt:Date.now()}),y=W.map(F=>({id:Xr(),tableId:u,data:F,updatedAt:Date.now()}))}else{const v=l.columns,I=ka(t);if(y=(i.maxRows!=null?I.rows.slice(0,i.maxRows):I.rows).map(z=>{const F={};for(let K=0;K<v.length;K++){const oe=v[K];F[oe.field]=_a(z[K]??"",oe.type)}return{id:Xr(),tableId:u,data:F,updatedAt:Date.now()}}),h==="overwrite"){const z=e.store.rows(u),F=await z.find();await z.bulkRemove(F.map(K=>K.id))}}await e.store.rows(u).bulkInsert(y),e.events.emit("import:after",{source:"csv",tableId:u,rowCount:y.length})}function ka(e){const t=e.replace(/﻿/,""),r=Ea(t),i=Sa(t,r);if(i.length===0)return{header:[],rows:[]};const n=i[0],a=i.slice(1).filter(l=>!(l.length===1&&l[0]===""));return{header:n,rows:a}}function $r(e){const t=e.replace(/﻿/,""),r=Ea(t),i=Sa(t,r);if(i.length===0)return{columns:[],rows:[]};const n=i[0],a=i.slice(1).filter(I=>!(I.length===1&&I[0]==="")),l=n.map((I,W)=>Hc(I,W)),u=Pa(l.map(I=>I.field)),h=a.map(I=>{const W={};for(let z=0;z<u.length;z++)W[u[z]]=I[z]??"";return W}),y=l.map((I,W)=>I.type?I.type:Wc(h.map(z=>z[u[W]]??"").filter(z=>z.length>0))),k=l.map((I,W)=>{const z=y[W]??"string",F={field:u[W],label:I.label,type:z},K=qc(z),oe=I.renderer??K;return oe&&(F.renderer=oe),I.default!==void 0&&(F.default=I.default),I.max!=null&&(F.max=I.max),I.unique&&(F.unique=!0),I.notnull&&(F.notnull=!0),I.hidden&&(F.hidden=!0),F}),v=h.map(I=>{const W={};for(let z=0;z<u.length;z++){const F=u[z],K=y[z]??"string";W[F]=_a(I[F]??"",K)}return W});return{columns:k,rows:v}}const Uc=new Set(["string","number","boolean","date","datetime"]),So={color:"color",image:"image"};function qc(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function Hc(e,t){const r=e.trim();if(!r.includes(":"))return{field:as(r||`col_${t+1}`),label:r||`Column ${t+1}`};const i=r.split(":"),n=as(i[0]||`col_${t+1}`),a=(i[1]??i[0]??"").trim()||n,l={field:n,label:a},u=(i[2]??"").trim();u&&(Uc.has(u)?l.type=u:So[u]&&(l.type="string",l.renderer=So[u]));const h=(i[3]??"").trim();h&&(l.default=h);const y=(i[4]??"").trim();if(y){const v=Number(y);Number.isFinite(v)&&v>0&&(l.max=v)}const k=(i[5]??"").toLowerCase();return k.includes("u")&&(l.unique=!0),k.includes("n")&&(l.notnull=!0),k.includes("h")&&(l.hidden=!0),l}function Ea(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),r={",":0,";":0,"	":0};for(const a of t)a in r&&(r[a]+=1);let i=",",n=-1;for(const a of[",",";","	"])(r[a]??0)>n&&(i=a,n=r[a]??0);return i}function Sa(e,t){const r=[];let i=[],n="",a=!1;for(let l=0;l<e.length;l++){const u=e[l];a?u==='"'?e[l+1]==='"'?(n+='"',l++):a=!1:n+=u:u==='"'?a=!0:u===t?(i.push(n),n=""):u===`
`||u==="\r"?(u==="\r"&&e[l+1]===`
`&&l++,i.push(n),r.push(i),i=[],n=""):n+=u}return(n.length>0||i.length>0)&&(i.push(n),r.push(i)),r}function Wc(e){return e.length===0?"string":e.every(Vc)?"boolean":e.every(Yc)?"number":e.every(Gc)?"datetime":e.every(Xc)?"date":"string"}const Kc=/^(true|false|yes|no|0|1)$/i;function Vc(e){return Kc.test(e.trim())}function Yc(e){const t=e.trim();if(t==="")return!1;const r=Number(t);return Number.isFinite(r)}function Xc(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function Gc(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function _a(e,t){const r=e.trim();switch(t){case"number":{if(r==="")return null;const i=Number(r);return Number.isFinite(i)?i:r}case"boolean":return r===""?null:/^(true|yes|1)$/i.test(r);case"date":return Aa(r);case"datetime":return Qc(r);default:return e}}function Aa(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){let i=parseInt(t[1],10),n=parseInt(t[2],10);const a=t[3];let l=parseInt(a,10);a.length===2&&(l+=2e3);let u,h;return i>12?(u=i,h=n):n>12?(h=i,u=n):(u=i,h=n),`${l.toString().padStart(4,"0")}-${h.toString().padStart(2,"0")}-${u.toString().padStart(2,"0")}`}const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toISOString().slice(0,10)}function Qc(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),r=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(r)return`${r[1]}T${r[2].padStart(5,"0")}`;const i=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(i)return`${Aa(`${i[1]}/${i[2]}/${i[3]}`)}T${i[4].padStart(5,"0")}`;const n=new Date(e);if(!Number.isNaN(n.getTime())){const a=n.toISOString();return`${a.slice(0,10)}T${a.slice(11,16)}`}return e}function Jc(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function Zc(e){return!!(/\.csv$/i.test(e.name)||e.type==="text/csv"||e.type==="application/csv")}function Pa(e){const t=new Map,r=new Set,i=[];for(const n of e){let a=n,l=t.get(n)??0;for(;r.has(a);)l+=1,a=`${n}_${l+1}`;t.set(n,l),r.add(a),i.push(a)}return i}function eu(e,t,r){return e.map(i=>{const n={};for(let a=0;a<t.length;a++)n[r[a].field]=i[t[a].field];return n})}function as(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function Xr(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const tu=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:Pa,importCsvText:oi,init:Bc,meta:Lc,parseCsv:$r,parseCsvRaw:ka},Symbol.toStringTag,{value:"Module"})),nu={name:"csv-export",version:"0.1.0",description:"Export a single table as a .csv file via a per-table button.",author:"easyDBAccess built-ins"},ru={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return ks(e,t)}};function iu(e){e.ui.registerExporter(ru),e.ui.registerTableButton({id:"csv-export:download",label:"CSV",icon:"file_download",tooltip:"Download this table as a .csv file",onClick:async(t,r)=>{const i=await t.store.tables.findOne(r.tableId);if(!i)return;const n=await t.store.rows(i.id).find(),a=ks(i,n);await t.backend.saveFile(`${i.code||i.name||"table"}.csv`,a,"text/csv")}})}function ks(e,t){const r=e.columns.map(a=>a.field),i=e.columns.map(a=>_o(a.label??a.field)),n=t.map(a=>r.map(l=>_o(su(a.data[l]))).join(","));return[i.join(","),...n].join(`\r
`)}function su(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function _o(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const ou=Object.freeze(Object.defineProperty({__proto__:null,init:iu,meta:nu,serializeCsv:ks},Symbol.toStringTag,{value:"Module"}));var au=Object.defineProperty,lu=Object.getOwnPropertyDescriptor,nr=(e,t,r,i)=>{for(var n=i>1?void 0:i?lu(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&au(t,r,n),n};function ls(e,t={}){return(Rt.instance??cu()).open(e,t)}function cu(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function uu(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let Rt=class extends Ne{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((r,i)=>r?i:-1).filter(r=>r>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),Rt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Rt.instance===this&&(Rt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Gt(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(r=>!r.hidden),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(r=>{this.resolveFn=r,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return B`
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
            ${this.message?B`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            <ul class="tables">
              ${this.items.map((t,r)=>B`
                  <li>
                    <input
                      type="checkbox"
                      id=${`tsel-${r}`}
                      .checked=${this.selected[r]??!1}
                      @change=${()=>this.toggle(r)}
                    />
                    <label for=${`tsel-${r}`}>
                      <span class="name">${t.name}</span>
                      ${t.hidden?B`<span class="tag-hidden">hidden</span>`:""}
                      <span class="size">${uu(t.size)}</span>
                      ${t.detail?B`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};Rt.instance=null;Rt.styles=[Xt,Je`
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
    `];nr([H()],Rt.prototype,"items",2);nr([H()],Rt.prototype,"selected",2);nr([H()],Rt.prototype,"heading",2);nr([H()],Rt.prototype,"message",2);nr([H()],Rt.prototype,"confirmLabel",2);Rt=nr([nt("table-select-dialog")],Rt);const du={name:"json-import",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"easyDBAccess built-ins"};function hu(e){e.ui.registerImporter(fu),e.ui.registerDropHandler(async t=>{const i=vu(t).filter(xu);if(i.length===0)return!1;t.preventDefault();for(const n of i)await pu(e,n);return!0})}const fu={id:"json",label:"JSON",accept:[".json",".db.json","application/json"],async parse(e){const t=typeof e=="string"?e:await e.text(),r=JSON.parse(t),n=Cr(r,"imported")[0];return{columns:n?.columns??[],rows:n?.rows??[]}}};async function pu(e,t){await ai(e,await t.text(),t.name)}async function ai(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("json-import: no active workspace");let a;try{a=JSON.parse(t)}catch(z){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${r}: ${z.message}`)});return}const l=r.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",u=Cr(a,l);if(u.length===0)return;let h=u;if(u.length>1){const z=await ls(u.map(F=>({name:F.name,size:F.rows.length})),{title:"Import tables",message:`"${r}" contains ${u.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!z)return;h=z.map(F=>u[F])}const y=(await e.store.tables.find()).filter(z=>z.workspaceId===n),k=new Set(h.map(z=>z.name)),v=y.filter(z=>k.has(z.name));let I;if(v.length===0&&h.length===1)I="append-new";else{const z=v.length>0?[`Overwrite matching (${v.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],F=await e.ui.dialogs.choice(`Importing ${h.length} table${h.length===1?"":"s"} from "${r}".${v.length>0?`

${v.length} table${v.length===1?"":"s"} share a name with existing data.`:""}`,z,"JSON import");if(!F)return;F.startsWith("Overwrite matching")?I="overwrite-matching":F==="Replace entire workspace"?I="replace-workspace":I="append-new"}if(I==="replace-workspace")for(const z of y){const F=e.store.rows(z.id),K=await F.find();await F.bulkRemove(K.map(oe=>oe.id)),await e.store.tables.remove(z.id)}const W=new Map(y.map(z=>[z.name,z]));for(const z of h){const F=z.source,K=z.origin??(!F&&i.originUrl?{type:"json",url:i.originUrl}:void 0);let oe;const _e=I==="overwrite-matching"?W.get(z.name):void 0;if(_e){if(oe=_e.id,!_e.source){const se=e.store.rows(oe),ae=await se.find();await se.bulkRemove(ae.map(fe=>fe.id))}await e.store.tables.patch(oe,{columns:z.columns,...z.windowGeometry?{windowGeometry:z.windowGeometry}:{},...z.sortColumn?{sortColumn:z.sortColumn,sortAsc:z.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},source:F??void 0,origin:K??void 0,updatedAt:Date.now()})}else oe=Do(),e.events.emit("import:before",{source:"json",tableId:oe}),await e.store.tables.insert({id:oe,workspaceId:n,name:z.name,code:$u(z.name),columns:z.columns,view:"table",...z.windowGeometry?{windowGeometry:z.windowGeometry}:{},...z.sortColumn?{sortColumn:z.sortColumn,sortAsc:z.sortAsc??!0}:{},...F?{source:F}:{},...K?{origin:K}:{},updatedAt:Date.now()});let je=0;if(!F){const se=e.store.rows(oe),fe=(i.maxRows!=null?z.rows.slice(0,i.maxRows):z.rows).map(ve=>({id:Do(),tableId:oe,data:ve,updatedAt:Date.now()}));await se.bulkInsert(fe),je=fe.length}e.events.emit("import:after",{source:"json",tableId:oe,rowCount:je})}}function Cr(e,t){if(It(e)&&Ao(e))return Po(e);if(It(e)&&Array.isArray(e.tables)){const r=e,i=[];for(const n of r.tables){if(gu(n)){const a=n,l=It(a.windowGeometry)?a.windowGeometry:void 0,u=typeof a.sortColumn=="string"?a.sortColumn:void 0,h=typeof a.sortAsc=="boolean"?a.sortAsc:void 0,y=It(a.source)&&typeof a.source.type=="string"?a.source:void 0,k=It(a.origin)&&typeof a.origin.type=="string"&&typeof a.origin.url=="string"?a.origin:void 0;i.push({name:String(n.name),columns:n.columns.map(bu),rows:Array.isArray(n.rows)?n.rows.filter(It):[],...l?{windowGeometry:l}:{},...u?{sortColumn:u,sortAsc:h??!0}:{},...y?{source:y}:{},...k?{origin:k}:{}});continue}It(n)&&Ao(n)&&i.push(...Po(n))}return i}if(Array.isArray(e)){const r=e.filter(It);return r.length===0?[]:[{name:t,...To(r)}]}return It(e)?[{name:t,...To([e])}]:[]}function Ao(e){for(const[t,r]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!It(r))continue;const i=r;if(Array.isArray(i.dataArray)&&Array.isArray(i.columns))return!0}return!1}function Po(e){const t=[];for(const[r,i]of Object.entries(e)){if(!/\.table\.json$/.test(r)||!It(i))continue;const n=i;if(!Array.isArray(n.dataArray)||!Array.isArray(n.columns))continue;const a=r.replace(/\.table\.json$/,""),l=n.columns.map(k=>mu(k)),u=l.map(k=>k.field),h=n.dataArray.filter(k=>Array.isArray(k)).map(k=>{const v={};for(let I=0;I<u.length;I++)v[u[I]]=k[I];return v}),y={name:a,columns:l,rows:h};if(n.elementRect&&typeof n.elementRect.x=="number"&&typeof n.elementRect.y=="number"){const k=n.elementRect;y.windowGeometry={x:k.x,y:k.y,w:k.width??600,h:k.height??400,z:k.zIndex??100,minimized:!!k.minimized,maximized:!!k.maximized}}typeof n.sortColumn=="number"&&n.sortColumn>=0&&n.sortColumn<u.length&&(y.sortColumn=u[n.sortColumn],y.sortAsc=(n.sortDirection??"asc")!=="desc"),t.push(y)}return t}function mu(e){const t=String(e.field??"col"),r=String(e.name??t),i=typeof e.type=="string"?e.type:"string",n={field:t,label:r,type:i};return e.isUnique&&(n.unique=!0),e.isNotNull&&(n.notnull=!0),n}function gu(e){return It(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function bu(e){if(!It(e))return{field:"col",label:"Col",type:"string"};const t=e,r=String(t.field??"col");let i=typeof t.type=="string"?t.type:"string",n=typeof t.renderer=="string"?t.renderer:void 0;(i==="color"||i==="image")&&(n=n??i,i="string");const a={field:r,label:String(t.label??r),type:i};return n&&(a.renderer=n),typeof t.script=="string"&&(a.script=t.script),a}function To(e){const t=new Set;for(const n of e)for(const a of Object.keys(n))t.add(a);return{columns:Array.from(t).map(n=>({field:n,label:n,type:yu(e.map(a=>a[n]))})),rows:e}}function yu(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&wu(r))?"date":"string"}function wu(e){if(/^\d+$/.test(e))return!1;const t=new Date(e);return!Number.isNaN(t.getTime())}function It(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function vu(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function xu(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}function $u(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Do(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Cu=Object.freeze(Object.defineProperty({__proto__:null,importJsonText:ai,init:hu,meta:du,parsedToTables:Cr},Symbol.toStringTag,{value:"Module"}));class Kt extends Error{constructor(t,r){const i=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(i),this.name="DatasetteError",this.status=r??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function Un(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const r=t.pathname.split("/").filter(Boolean),i={};for(const[u,h]of t.searchParams)i[u]=h;let n,a=null,l=null;if(r.length>=2){l=decodeURIComponent(r[r.length-1]),a=decodeURIComponent(r[r.length-2]);const u=r.slice(0,r.length-2).join("/");n=t.origin+(u?"/"+u:"")}else r.length===1&&(a=decodeURIComponent(r[0])),n=t.origin;return{base:n,db:a,table:l,query:i}}function Zn(e,t={}){const r=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[i,n]of Object.entries({...e.query,...t}))n!=null&&r.searchParams.set(i,String(n));return r.toString()}function ku(e){const t=e?.next_url??null,r=e?.next,i=r!=null&&r!==!1?String(r):null,n=Array.isArray(e?.rows)?e.rows:[],a=Array.isArray(e?.columns)?e.columns:null;return{rows:n.map(u=>Array.isArray(u)&&a?Object.fromEntries(a.map((h,y)=>[h,u[y]])):u),nextUrl:t,nextToken:i,hasMore:t!=null||i!=null,truncated:e?.truncated===!0}}function Eu(e,t=""){const r=String(e||"").toUpperCase();return r.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":r.includes("REAL")||r.includes("FLOA")||r.includes("DOUB")||r.includes("NUM")||r.includes("DEC")?"number":r.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function Io(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],r=Array.isArray(e?.columns)?e.columns.slice():[],i={},n=e?.column_details;if(Array.isArray(n))for(const u of n)i[u.column??u.name]=u;else n&&typeof n=="object"&&Object.assign(i,n);for(const u of r)u in i||(i[u]={});const l=(r.length?r:Object.keys(i)).map(u=>{const h=i[u]||{},y=h.is_pk===!0||h.is_pk===1||t.includes(u),k={field:u,label:Ta(u),type:Eu(h.sqlite_type??h.type,u)};return(h.notnull===!0||h.notnull===1||y)&&(k.notnull=!0),y&&(k.unique=!0),(h.hidden===!0||h.hidden===1)&&(k.hidden=!0),h.default!=null&&h.default!==""&&(k.default=h.default),k});if(t.length===0){const u=l.filter(h=>h.unique).map(h=>h.field);u.length&&t.push(...u)}return{columns:l,pks:t}}function Ta(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function pi(e){const t=[],r=new Set;for(const i of e)for(const n of Object.keys(i))r.has(n)||(r.add(n),t.push(n));return t.map(i=>({field:i,label:Ta(i),type:Su(e.map(n=>n[i]))}))}function Su(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&_u(r))?"datetime":"string"}function _u(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function Au(e){const t=new TextEncoder().encode(String(e));let r="";for(const i of t){const n=String.fromCharCode(i);/[A-Za-z0-9_-]/.test(n)?r+=n:r+="~"+i.toString(16).toUpperCase().padStart(2,"0")}return r}function Pu(e,t){return!t||t.length===0?null:t.map(r=>Au(e[r])).join(",")}function Tu(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],r=[];for(const i of t){if(typeof i=="string"){r.push(i);continue}if(i&&typeof i=="object"&&typeof i.name=="string"){if(i.name==="_memory")continue;r.push(typeof i.route=="string"&&i.route?i.route:i.name)}}return r}function Du(e,t){const r=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],i=[];for(const n of r){if(typeof n=="string"){i.push({db:t,table:n,count:null,hidden:!1,pks:[]});continue}n&&typeof n=="object"&&typeof n.name=="string"&&i.push({db:t,table:n.name,count:typeof n.count=="number"?n.count:null,hidden:n.hidden===!0,pks:Array.isArray(n.primary_keys)?n.primary_keys:[]})}return i}async function kn(e,t){let r;try{r=await e(t)}catch(n){const a=n?.message||"network error";throw new Kt({error:`Couldn't reach ${t} (${a}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(r&&r.ok===!1){let n=null;try{n=await r.json()}catch{}throw new Kt(n&&typeof n=="object"?n:{error:`HTTP ${r.status} for ${t}`},r.status)}const i=await r.json();if(i&&i.ok===!1)throw new Kt(i,r.status);return i}async function Da(e,t){return Tu(await kn(e,`${t}/-/databases.json`))}async function Ro(e,t,r){return Du(await kn(e,`${t}/${encodeURIComponent(r)}.json`),r)}async function Es(e,t){const r=Zn(t,{_extra:"column_details"}),i=await kn(e,r);let{columns:n,pks:a}=Io(i),l=!!i&&i.column_details!=null,u=i?.count??null,h=i;if(n.length===0){const y=Zn(t,{_extra:"columns"}),k=await kn(e,y);({columns:n,pks:a}=Io(k)),l=!!k&&k.column_details!=null,u=k?.count??u,h=k}return{columns:n,pks:a,count:u,typed:l,raw:h}}function Iu(e,t,r){const i=e&&typeof e=="object"?e:{},n=t&&r&&i.databases?.[t]?.tables?.[r]||t&&r&&i.databases?.[t]?.tables?.[r.toLowerCase()]||{},a=t&&i.databases?.[t]||{},l=z=>n[z]??a[z]??i[z],u={columns:{},units:{}};typeof n.sort=="string"&&(u.sort=n.sort),typeof n.sort_desc=="string"&&(u.sortDesc=n.sort_desc),typeof n.size=="number"&&(u.size=n.size),Array.isArray(n.sortable_columns)&&(u.sortableColumns=n.sortable_columns.slice()),typeof n.label_column=="string"&&(u.labelColumn=n.label_column),n.hidden===!0&&(u.hidden=!0),typeof n.description=="string"&&(u.description=n.description),typeof n.description_html=="string"&&(u.descriptionHtml=n.description_html);const h=l("source"),y=l("source_url"),k=l("license"),v=l("license_url"),I=l("about"),W=l("about_url");if(typeof h=="string"&&(u.source=h),typeof y=="string"&&(u.sourceUrl=y),typeof k=="string"&&(u.license=k),typeof v=="string"&&(u.licenseUrl=v),typeof I=="string"&&(u.about=I),typeof W=="string"&&(u.aboutUrl=W),n.columns&&typeof n.columns=="object")for(const[z,F]of Object.entries(n.columns))typeof F=="string"&&(u.columns[z]=F);if(n.units&&typeof n.units=="object")for(const[z,F]of Object.entries(n.units))typeof F=="string"&&(u.units[z]=F);return u}const jo=new Map;async function Ru(e,t){let r=jo.get(t);return r||(r=kn(e,`${t}/-/metadata.json`).catch(()=>({})),jo.set(t,r)),r}async function Ss(e,t){const r=await Ru(e,t.base);return Iu(r,t.db,t.table)}function ju(e){const t={};return e.description!=null&&(t.description=e.description),e.descriptionHtml!=null&&(t.descriptionHtml=e.descriptionHtml),e.source!=null&&(t.source=e.source),e.sourceUrl!=null&&(t.sourceUrl=e.sourceUrl),e.license!=null&&(t.license=e.license),e.licenseUrl!=null&&(t.licenseUrl=e.licenseUrl),e.about!=null&&(t.about=e.about),e.aboutUrl!=null&&(t.aboutUrl=e.aboutUrl),Object.keys(t).length>0?t:void 0}function _s(e,t){const r=e.sortableColumns!=null?new Set(e.sortableColumns):null,i=t.map(u=>{const h=e.columns[u.field],y=e.units[u.field],k=r?r.has(u.field):void 0;return h==null&&y==null&&k===void 0?u:{...u,...h!=null?{description:h}:{},...y!=null?{units:y}:{},...k!==void 0?{sortable:k}:{}}}),n=new Set(t.map(u=>u.field)),a={};e.sort&&n.has(e.sort)?(a.sortColumn=e.sort,a.sortAsc=!0):e.sortDesc&&n.has(e.sortDesc)&&(a.sortColumn=e.sortDesc,a.sortAsc=!1);const l=ju(e);return l&&(a.info=l),e.labelColumn&&n.has(e.labelColumn)&&(a.labelColumn=e.labelColumn),{columns:i,patch:a}}function As(e,t){if(t.length===0)return e;const r=new Map(pi(t).map(i=>[i.field,i.type]));return e.map(i=>{if(i.type!=="string")return i;const n=r.get(i.field);return n&&n!=="string"?{...i,type:n}:i})}async function mi(e,t,r={}){const i=r.maxRows??1e4,a={_size:r.pageSize??1e3,...r.extraParams||{}};let l=Zn(t,a);const u=[];let h=!1,y=!1,k=0,v;for(;l;){let I;try{I=await kn(e,l)}catch(F){if(u.length===0)throw F;v=F instanceof Kt&&F.status?`stopped after ${u.length} rows: HTTP ${F.status}`:`stopped after ${u.length} rows: ${F?.message??String(F)}`,y=!0;break}const W=ku(I);u.push(...W.rows),h=h||W.truncated,k+=1,r.onProgress?.(u.length);const z=W.nextUrl!=null?W.nextUrl:W.nextToken!=null?Zn(t,{_next:W.nextToken}):null;z&&u.length<i&&W.rows.length>0?l=z:(y=z!=null&&W.rows.length>0,l=null)}return{rows:u,truncated:h,hasMore:y,pages:k,error:v}}function Ou(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function Ia(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function Ra(e,t,r){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${r}`}async function gi(e,t,r,i){let n;try{n=await e(t,{method:"POST",headers:Ou(i),body:JSON.stringify(r)})}catch(l){throw new Kt({error:`Couldn't reach ${t} (${l?.message||"network error"}).`},0)}if(n&&n.ok===!1){let l=null;try{l=await n.json()}catch{}throw new Kt(l&&typeof l=="object"?l:{error:`HTTP ${n.status} for ${t}`},n.status)}const a=await n.json();if(a&&a.ok===!1)throw new Kt(a,n.status);return a}async function Oo(e,t,r,i={}){const n=await gi(e,Ia(t,"insert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function Fu(e,t,r,i,n={}){const a=await gi(e,Ra(t,r,"update"),{update:i,return:!0},n.token);return a&&typeof a.row=="object"&&a.row?a.row:Array.isArray(a?.rows)&&a.rows[0]?a.rows[0]:null}async function Fo(e,t,r,i={}){await gi(e,Ra(t,r,"delete"),{},i.token)}async function zu(e,t,r,i={}){const n=await gi(e,Ia(t,"upsert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function Lu(e,t){const r=Zn(t,{_extra:"primary_keys"}),i=await kn(e,r);return Array.isArray(i?.primary_keys)?i.primary_keys:[]}async function ja(e,t){try{const r=await kn(e,Zn(t,{_extra:"count"}));return typeof r?.count=="number"?r.count:null}catch{return null}}async function Oa(e,t,r={}){const i=r.token?{headers:{Authorization:`Bearer ${r.token}`}}:void 0;try{const n=await e(`${t}/-/versions.json`,i);if(n&&n.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${n.status}`};const a=await n.json(),l=a?.datasette?.version??a?.version??null;let u=null;try{u=(await(await e(`${t}/-/actor.json`,i)).json())?.actor??null}catch{}return{reachable:!0,version:l,actor:u,writable:!!(r.token&&u)}}catch(n){return{reachable:!1,version:null,actor:null,writable:!1,error:n?.message||"unreachable"}}}function bi(e,t){return t?(r,i)=>{const n=(i??{}).headers??{};return e(r,{...i??{},headers:{...n,Authorization:`Bearer ${t}`}})}:e}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fa=Symbol.for(""),Bu=e=>{if(e?.r===Fa)return e?._$litStatic$},Mu=e=>({_$litStatic$:e,r:Fa}),zo=new Map,Nu=e=>(t,...r)=>{const i=r.length;let n,a;const l=[],u=[];let h,y=0,k=!1;for(;y<i;){for(h=t[y];y<i&&(a=r[y],(n=Bu(a))!==void 0);)h+=n+t[++y],k=!0;y!==i&&u.push(a),l.push(h),y++}if(y===i&&l.push(t[i]),k){const v=l.join("$$lit$$");(t=zo.get(v))===void 0&&(l.raw=l,zo.set(v,t=l)),r=u}return e(t,...r)},Uu=Nu(B);var qu=Object.defineProperty,Hu=Object.getOwnPropertyDescriptor,yi=(e,t,r,i)=>{for(var n=i>1?void 0:i?Hu(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&qu(t,r,n),n};let Vt=class extends Ne{constructor(){super(...arguments),this.values=[],this.current="",this.search="",this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,r){return this.values=t,this.current=r,this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(i=>{this.resolveFn=i,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}close(e){document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),Vt.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),Vt.instance===this&&(Vt.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(r=>r.value.toLowerCase().includes(e));return B`
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
      ${t.length===0?B`<div class="empty">No matching values.</div>`:B`<ul>
            ${t.slice(0,500).map(r=>B`
                <li
                  class=${r.value===this.current?"selected":""}
                  @click=${()=>this.close(r.value)}
                >
                  <span class="label">${r.value||B`<em>(empty)</em>`}</span>
                  <span class="count">${r.count}</span>
                </li>
              `)}
          </ul>`}
      ${this.values.length>500?B`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      <div class="actions">
        <button class="text" @click=${()=>this.close({clear:!0})}>Clear filter</button>
        <span style="color:#6b7280">${t.length} value${t.length===1?"":"s"}</span>
      </div>
    `}};Vt.instance=null;Vt.styles=[on,Je`
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
    `];yi([Bt({type:Array})],Vt.prototype,"values",2);yi([Bt({type:String})],Vt.prototype,"current",2);yi([H()],Vt.prototype,"search",2);Vt=yi([nt("filter-popover")],Vt);var Wu=Object.defineProperty,Ku=Object.getOwnPropertyDescriptor,Qt=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ku(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Wu(t,r,n),n};let Ot=class extends Ne{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const r=t[this.highlightIdx];r!==void 0?(e.preventDefault(),this.onPick(r)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const r=[];for(const i of this.options)if(i.toLowerCase().includes(t)&&(r.push(i),r.length>=500))break;return r}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return B`
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
        ${this.value?B`<button
              type="button"
              class="clear"
              title="Clear filter"
              tabindex="-1"
              @mousedown=${r=>r.preventDefault()}
              @click=${this.onClear}
            >
              ×
            </button>`:pe}
      </div>
      ${this.open?B`<ul class="dropdown" style=${t}>
            ${e.length===0?B`<li class="empty">No matching values.</li>`:e.map((r,i)=>B`
                    <li
                      class=${i===this.highlightIdx?"highlighted":""}
                      @mousedown=${n=>n.preventDefault()}
                      @click=${()=>this.onPick(r)}
                    >
                      ${r}
                    </li>
                  `)}
          </ul>`:pe}
    `}};Ot.styles=Je`
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
  `;Qt([Bt({type:String})],Ot.prototype,"value",2);Qt([Bt({type:Array})],Ot.prototype,"options",2);Qt([Bt({type:String})],Ot.prototype,"placeholder",2);Qt([H()],Ot.prototype,"open",2);Qt([H()],Ot.prototype,"highlightIdx",2);Qt([H()],Ot.prototype,"dropTop",2);Qt([H()],Ot.prototype,"dropLeft",2);Qt([H()],Ot.prototype,"dropMinWidth",2);Qt([H()],Ot.prototype,"editing",2);Qt([tr("input")],Ot.prototype,"inputEl",2);Ot=Qt([nt("filter-combobox")],Ot);function Vu(e){const t=e.trim(),r=t.split(/\s+/).filter(Boolean);if(!r.some(u=>u==="AND"||u==="OR"))return{kind:"plain",phrase:t.toLowerCase(),words:r.map(u=>u.toLowerCase())};const n=[];let a=[];for(const u of r)u==="OR"?(n.push(a),a=[]):u==="AND"||a.push(u.toLowerCase());n.push(a);const l=n.filter(u=>u.length>0);return l.length===0?{kind:"plain",phrase:t.toLowerCase(),words:[]}:{kind:"boolean",groups:l}}function li(e,t,r){const i=Vu(t);if(i.kind==="boolean")return e.filter(h=>i.groups.some(y=>y.every(k=>r(h,k))));const{phrase:n,words:a}=i;if(a.length<=1)return n===""?e:e.filter(h=>r(h,n));const l=e.filter(h=>r(h,n));if(l.length>0)return l;const u=e.filter(h=>a.every(y=>r(h,y)));return u.length>0?u:e.filter(h=>a.some(y=>r(h,y)))}const ci="easydb:visible-count";function za(e,t,r){e&&document.dispatchEvent(new CustomEvent(ci,{detail:{key:e,count:t,total:r}}))}function La(e,t){return e<0||t<0?"":e===t?` (${t})`:` (${e}/${t})`}var Yu=Object.defineProperty,Xu=Object.getOwnPropertyDescriptor,ut=(e,t,r,i)=>{for(var n=i>1?void 0:i?Xu(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Yu(t,r,n),n};function Lo(e,t){return Object.values(e.data).some(r=>r!=null&&String(r).toLowerCase().includes(t))}const Gu=200;let tt=class extends Ne{constructor(){super(...arguments),this.tableId="",this.viewInstanceId="",this.columns=[],this.rows=[],this.sortColumn=null,this.sortDir=null,this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.viewInst=null,this.tableColumns=[],this.renderedCount=0,this.lastEmittedCount=-1,this.lastEmittedTotal=-1,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;(t.tableId===this.tableId||this.viewMode&&t.tableId===this.viewInstanceId)&&(this.localQuery=t.query??"")},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}get viewMode(){return!!this.viewInstanceId}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.()}async updated(e){(e.has("tableId")||e.has("viewInstanceId"))&&this.tableId&&(this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.markEmptyCells(),this.emitCount()}emitCount(){const e=this.viewMode?this.viewInstanceId:this.tableId;if(!e)return;const t=this.renderedCount,r=this.rows.length;t===this.lastEmittedCount&&r===this.lastEmittedTotal||(this.lastEmittedCount=t,this.lastEmittedTotal=r,za(e,t,r))}markEmptyCells(){const e=this.shadowRoot?.querySelectorAll("tbody tr:not(.spacer) > td");if(e)for(const t of e)t.className.startsWith("t-")&&t.classList.toggle("is-null",Qu(t))}async bind(){if(!this.tableId)return;const e=await ye(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.viewMode?(this.tableColumns=t.columns,this.viewInst=await e.store.viewInstances.findOne(this.viewInstanceId)??null,this.applyView(),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const a=n.find(l=>l.id===this.tableId);a&&(this.tableColumns=a.columns,this.applyView())}),this.viewSubUnsub?.(),this.viewSubUnsub=e.store.viewInstances.subscribe(n=>{const a=n.find(l=>l.id===this.viewInstanceId);a&&(this.viewInst=a,this.applyView())})):(this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const a=n.find(l=>l.id===this.tableId);a&&this.applyTable(a)})),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const r=e.store.rows(this.tableId);this.unsubscribe=r.subscribe(n=>this.rows=n);const i=window.setTimeout(()=>this.loading=!0,Gu);try{this.rows=await r.find()}catch(n){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${n?.message??String(n)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(i),this.loading=!1}}applyTable(e){this.columns=e.columns,this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}applyView(){const e=this.viewInst;if(!e)return;const t=new Map(this.tableColumns.map(i=>[i.field,i])),r=e.columnWidths??{};this.columns=e.visibleColumns.map(i=>t.get(i)).filter(i=>!!i).map(i=>{const n=r[i.field];return typeof n=="number"?{...i,width:n}:i}),this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}async setCell(e,t,r){const i=await ye();await this.commitCell(i,e,t,r)}async commitCell(e,t,r,i){const n=this.columns.find(a=>a.field===r);if(n){const a=Ju(n,i,this.rows,t.id);if(a){await e.api.ui.dialogs.alert(a,`Cannot save ${n.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[r]:i},updatedAt:Date.now()})}catch(a){await e.api.ui.dialogs.alert(a?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}renderCell(e,t){const r=e.data[t.field],i=t.renderer,n=i?this.cellRenderers?.get(i):void 0;if(n){const a=Mu(n);return Uu`<${a}
        .value=${r??""}
        .column=${t}
        .row=${e.data}
        @change=${l=>this.setCell(e,t.field,l.detail.value)}
      ></${a}>`}switch(t.type){case"boolean":return B`<input
          type="checkbox"
          .checked=${r===!0||r==="true"||r===1||r==="1"}
          @change=${l=>this.setCell(e,t.field,l.target.checked)}
        />`;case"date":return B`<input
          type="date"
          .value=${Zu(r)}
          @change=${a=>this.setCell(e,t.field,a.target.value||null)}
        />`;case"datetime":return B`<input
          type="datetime-local"
          .value=${ed(r)}
          @change=${a=>this.setCell(e,t.field,a.target.value||null)}
        />`;case"number":return B`<input
          type="number"
          .value=${r==null?"":String(r)}
          @change=${a=>{const l=a.target.value;this.setCell(e,t.field,l===""?null:Number(l))}}
        />`;default:return B`<input
          type="text"
          .value=${String(r??"")}
          @change=${a=>this.setCell(e,t.field,a.target.value)}
        />`}}async deleteRow(e){const t=await ye();try{await t.store.rows(this.tableId).remove(e)}catch(r){await t.api.ui.dialogs.alert(r?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e){let t;this.sortColumn!==e?t="asc":this.sortDir==="asc"?t="desc":this.sortDir==="desc"?t=null:t="asc",this.sortColumn=t?e:null,this.sortDir=t;const r=await ye(),i=t?{sortColumn:e,sortAsc:t==="asc",updatedAt:Date.now()}:{sortColumn:void 0,sortAsc:void 0,updatedAt:Date.now()};this.viewMode?await r.store.viewInstances.patch(this.viewInstanceId,i):await r.store.tables.patch(this.tableId,i)}filteredRows(){const e=Object.entries(this.filters).filter(([,n])=>n&&n.trim().length>0),t=this.globalQuery.trim(),r=this.localQuery.trim();if(e.length===0&&t.length===0&&r.length===0)return this.rows;let i=this.rows;return e.length>0&&(i=i.filter(n=>e.every(([a,l])=>String(n.data[a]??"").toLowerCase().includes(l.toLowerCase())))),r&&(i=li(i,r,Lo)),t&&(i=li(i,t,Lo)),i}sortedRows(){const e=this.filteredRows();if(!this.sortColumn||!this.sortDir)return e;const t=this.sortColumn,i=this.columns.find(l=>l.field===t)?.type??"string",n=this.sortDir==="asc"?1:-1,a=[...e];return a.sort((l,u)=>{const h=l.data[t],y=u.data[t],k=W=>W==null?0:W===""?1:2,v=k(h),I=k(y);return v!==2||I!==2?(v-I)*n:td(h,y,i)*n}),a}async openFilterPicker(e,t){e.stopPropagation();const r=e.currentTarget,i=Vt.instance;if(!i)return;const n=new Map;for(const u of this.rowsFacetedFor(t)){const h=u.data[t];if(h==null)continue;const y=String(h);n.set(y,(n.get(y)??0)+1)}const a=[...n.entries()].map(([u,h])=>({value:u,count:h})).sort((u,h)=>h.count-u.count||u.value.localeCompare(h.value)),l=await i.open(r.getBoundingClientRect(),a,this.filters[t]??"");l!==null&&(typeof l=="object"&&"clear"in l?this.onFilterInput(t,""):typeof l=="string"&&this.onFilterInput(t,l))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>{this.filterSaveTimer=null,this.saveFilters()},250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=Object.entries(this.filters).filter(([r,i])=>i&&i.trim().length>0&&r!==e).map(([r,i])=>[r,i.trim().toLowerCase()]);return t.length===0?this.rows:this.rows.filter(r=>t.every(([i,n])=>String(r.data[i]??"").toLowerCase().includes(n)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const r=50,i=500;for(const n of this.visibleColumns){let a=!0;for(const u of t){const h=u.data[n.field];if(h==null)continue;if((typeof h=="string"?h:String(h)).length>=r){a=!1;break}}if(!a)continue;const l=new Set;for(const u of this.rowsFacetedFor(n.field)){const h=u.data[n.field];if(h==null||h==="")continue;const y=typeof h=="string"?h:String(h);if(!(y.length>=r)&&(l.add(y),l.size>=i))break}e.set(n.field,[...l].sort())}return e}onResizeStart(e,t,r){e.preventDefault(),e.stopPropagation();const i=r.offsetWidth;this.resizing={field:t,startX:e.clientX,startW:i};const n=l=>{if(!this.resizing)return;const u=l.clientX-this.resizing.startX,h=Math.max(40,this.resizing.startW+u);this.columns=this.columns.map(y=>y.field===this.resizing.field?{...y,width:h}:y)},a=async()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",a);const l=this.resizing?.field;if(this.resizing=null,!l)return;const u=await ye();if(this.viewMode){const h=this.columns.find(k=>k.field===l)?.width,y={...this.viewInst?.columnWidths??{}};typeof h=="number"&&(y[l]=h),await u.store.viewInstances.patch(this.viewInstanceId,{columnWidths:y,updatedAt:Date.now()})}else await u.store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",n),window.addEventListener("pointerup",a)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,r){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientX<i.left+i.width/2;this.dropTargetField=t,this.dropEdge=n?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const r=this.dragSourceField,i=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!r||r===t||!i)return;const n=[...this.columns],a=n.findIndex(y=>y.field===r);if(a<0)return;const[l]=n.splice(a,1);let u=n.findIndex(y=>y.field===t);if(u<0){n.splice(a,0,l);return}i==="after"&&(u+=1),n.splice(u,0,l);const h=await ye();this.viewMode?await h.store.viewInstances.patch(this.viewInstanceId,{visibleColumns:n.map(y=>y.field),updatedAt:Date.now()}):await h.store.tables.patch(this.tableId,{columns:n,updatedAt:Date.now()})}async saveFilters(){const e=await ye(),t={};for(const[i,n]of Object.entries(this.filters))n&&n.trim().length>0&&(t[i]=n);if(this.viewMode){await e.store.viewInstances.patch(this.viewInstanceId,{filters:t,updatedAt:Date.now()});return}const r=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:r,updatedAt:Date.now()})}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,r=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,i=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),n=Math.min(e.length,i+r);return{slice:e.slice(i,n),topPad:i*t,bottomPad:(e.length-n)*t}}render(){const e=this.sortedRows();this.renderedCount=e.length;const t=this.visibleColumns,{slice:r,topPad:i,bottomPad:n}=this.virtualSlice(e),a=this.computeFilterSuggestions(),l=this.externalLoading?this.externalProgress:null;return B`
      ${this.loading||this.externalLoading?B`<div
            class="load-bar"
            role="progressbar"
            aria-label="Loading rows"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow=${l!=null?Math.round(l*100):pe}
          >
            <div
              class="load-bar-fill ${l!=null?"determinate":""}"
              style=${l!=null?`width:${Math.max(2,Math.round(l*100))}%`:pe}
            ></div>
          </div>`:pe}
      <table>
        <colgroup>
          ${t.map(u=>B`<col style=${u.width!=null?`width: ${u.width}px`:""} />`)}
          <col style="width:2rem" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(u=>{const h=u.sortable!==!1,y=this.sortColumn===u.field&&this.sortDir,k=h?y==="asc"?"▲":y==="desc"?"▼":"⇅":"",v=`t-${u.type}`,I=this.dragSourceField===u.field,W=this.dropTargetField===u.field,z=W&&this.dropEdge==="before"?" drop-before":W&&this.dropEdge==="after"?" drop-after":"",F=(u.description?`${u.description}
`:"")+(u.units?`Units: ${u.units}
`:"")+`${u.field} — ${h?"click to sort, ":"not sortable · "}drag to reorder`;return B`
                <th
                  class=${`${v}${y?" sorted":""}${I?" drag-source":""}${z}${h?"":" no-sort"}`}
                  title=${F}
                  draggable="true"
                  @click=${()=>h&&this.toggleSort(u.field)}
                  @dragstart=${K=>this.onColDragStart(K,u.field)}
                  @dragover=${K=>this.onColDragOver(K,u.field,K.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(u.field)}
                  @drop=${K=>this.onColDrop(K,u.field)}
                  @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                >
                  ${u.label}${u.units?B`<span class="col-units"> (${u.units})</span>`:""}<span class="sort-icon">${k}</span>
                  <button
                    class=${`funnel${this.filters[u.field]?" active":""}`}
                    title="Filter by value"
                    @click=${K=>this.openFilterPicker(K,u.field)}
                  >
                    <span class="mi sm">filter_list</span>
                  </button>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${K=>K.stopPropagation()}
                    @pointerdown=${K=>this.onResizeStart(K,u.field,K.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:2rem"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(u=>{const h=a.get(u.field)??[];return B`
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
          ${i>0?B`<tr class="spacer" style=${`height:${i}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${r.map(u=>B`
              <tr>
                ${t.map(h=>B`<td class=${`t-${h.type}${h.renderer?` r-${h.renderer}`:""}`}>
                      ${this.renderCell(u,h)}
                    </td>`)}
                <td>
                  <button class="danger" title="Delete row" @click=${()=>this.deleteRow(u.id)}>
                    <span class="mi sm">delete</span>
                  </button>
                </td>
              </tr>
            `)}
          ${n>0?B`<tr class="spacer" style=${`height:${n}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
        </tbody>
      </table>
    `}};tt.styles=[on,Je`
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
    `];ut([Bt({type:String})],tt.prototype,"tableId",2);ut([Bt({type:String})],tt.prototype,"viewInstanceId",2);ut([H()],tt.prototype,"columns",2);ut([H()],tt.prototype,"rows",2);ut([H()],tt.prototype,"sortColumn",2);ut([H()],tt.prototype,"sortDir",2);ut([H()],tt.prototype,"filters",2);ut([H()],tt.prototype,"globalQuery",2);ut([H()],tt.prototype,"localQuery",2);ut([H()],tt.prototype,"dragSourceField",2);ut([H()],tt.prototype,"dropTargetField",2);ut([H()],tt.prototype,"dropEdge",2);ut([H()],tt.prototype,"resizing",2);ut([H()],tt.prototype,"cellRenderers",2);ut([H()],tt.prototype,"scrollY",2);ut([H()],tt.prototype,"viewportHeight",2);ut([H()],tt.prototype,"loading",2);ut([H()],tt.prototype,"externalLoading",2);ut([H()],tt.prototype,"externalProgress",2);tt=ut([nt("data-table")],tt);function Qu(e){if((e.textContent??"").trim()!==""||e.querySelector("img"))return!1;const t=e.querySelectorAll("input");for(const r of Array.from(t))if(r.type==="checkbox"||r.value!=="")return!1;return!0}function Ju(e,t,r,i){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&r.find(a=>a.id!==i&&a.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function Zu(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function ed(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}function td(e,t,r){switch(r){case"number":{const i=Number(e),n=Number(t);return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}case"boolean":return(e?1:0)-(t?1:0);case"date":{const i=new Date(String(e)).getTime(),n=new Date(String(t)).getTime();return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function Qn(e,t,r){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:r}}))}function Ba(e,t,r=[]){const i=new Set(e.map(u=>u.field)),n=new Set(r),a=[...e],l=[];for(const u of t)i.has(u.field)||n.has(u.field)||(a.push(u),l.push(u.field),i.add(u.field));return{columns:a,newFields:l}}class nd extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function Ma(e){return`datasette:token:${e}`}function rd(e,t){for(const[r,i]of Object.entries(t))if(r!=="data"&&e[r]!==i)return!1;return!0}function id(e,t){const r=e.source,i=r?.config??{},n={base:i.base,db:i.db,table:i.table,query:{}},a=Array.isArray(i.pks)&&i.pks.length>0?i.pks:["rowid"],l=r?.writable===!0,u=i.maxRows??1e4,h=i.pollIntervalMs??0,y=(se,ae)=>t.backend.fetch(se,ae);async function k(){const ae=(await t.settings.findOne(Ma(i.base)))?.value;return typeof ae=="string"&&ae.length>0?ae:void 0}const v=async(se,ae)=>bi(y,await k())(se,ae);function I(se){return{id:Pu(se,a)??sd(),tableId:e.id,data:se,updatedAt:Date.now()}}function W(se){if(!l)throw new nd(se)}function z(se){const ae={};for(const[fe,ve]of Object.entries(se))a.includes(fe)||(ae[fe]=ve);return ae}const F=new Set;let K=[],oe=!1,_e=null;function je(){return _e||(_e=(async()=>{try{const{rows:se}=await mi(v,n,{maxRows:u});K=se.map(I),oe=!0;for(const ae of F)ae(K);return K}finally{_e=null}})(),_e)}return{async find(se){const ae=oe?K:await je();return!se||Object.keys(se).length===0?ae:ae.filter(fe=>rd(fe,se))},async findOne(se){return(oe?K:await je()).find(fe=>fe.id===se)??null},async insert(se){W("insert");const[ae]=await Oo(v,n,[se.data]),fe=I(ae??se.data);return t.events.emit("row:created",{tableId:e.id,row:fe}),je(),fe},async bulkInsert(se){if(se.length===0)return[];W("insert");const ae=await Oo(v,n,se.map(ve=>ve.data)),fe=(ae.length?ae:se.map(ve=>ve.data)).map(I);return je(),fe},async upsert(se){W("upsert");const[ae]=await zu(v,n,[se.data]),fe=I(ae??se.data);return je(),fe},async patch(se,ae){W("update");const fe=ae.data,ve=z(fe??{}),Ae=await Fu(v,n,se,ve),Ze=I(Ae??{...fe??{}});return t.events.emit("row:updated",{tableId:e.id,row:Ze,prev:Ze}),je(),Ze},async remove(se){W("delete"),await Fo(v,n,se),t.events.emit("row:deleted",{tableId:e.id,rowId:se}),je()},async bulkRemove(se){if(se.length!==0){W("delete");for(const ae of se)await Fo(v,n,ae);je()}},subscribe(se){F.add(se),oe?se(K):je();let ae=null;return h>0&&(ae=setInterval(()=>void je(),h)),()=>{F.delete(se),ae&&clearInterval(ae)}},async refresh(){await je()}}}function sd(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var od=Object.defineProperty,ad=Object.getOwnPropertyDescriptor,kr=(e,t,r,i)=>{for(var n=i>1?void 0:i?ad(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&od(t,r,n),n};const ld="https://latest.datasette.io/ephemeral";let Lt=class extends Ne{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();t&&this.finish({url:t,token:this.token.trim()})}}connectedCallback(){super.connectedCallback(),Lt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Lt.instance===this&&(Lt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Gt(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return B`
      <dialog @cancel=${this.onCancel} @keydown=${Sn}>
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
    `}};Lt.instance=null;Lt.styles=[Xt,Je`
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
    `];kr([H()],Lt.prototype,"url",2);kr([H()],Lt.prototype,"token",2);kr([H()],Lt.prototype,"status",2);kr([H()],Lt.prototype,"statusKind",2);Lt=kr([nt("datasette-connect-dialog")],Lt);const ui=e=>e.replace(/^https?:\/\//,"");function cd(e,t,r){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(r)}`}function Ps(e,t,r,i){const n={...e.info??{}};return!n.source&&!n.sourceUrl&&(n.source=`${ui(t)}/${r}/${i}`,n.sourceUrl=cd(t,r,i)),{...e,info:n}}async function Na(e,t,r,i={}){if(t.db&&t.table)return[{db:t.db,table:t.table,count:null,hidden:!1,pks:[]}];let n=[];if(t.db){if(n.push(...await Ro(e,t.base,t.db)),i.skipPicker)return n.filter(u=>!u.hidden)}else{const u=await Da(e,t.base);if(u.length===0)return[];let h=u;if(u.length>1){const y=await ls(u.map(k=>({name:k,size:null})),{title:`${r} from Datasette`,message:`Choose databases on ${ui(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!y)return null;h=y.map(k=>u[k])}for(const y of h)try{n.push(...await Ro(e,t.base,y))}catch{}}if(n.length===0)return[];const a=new Set(n.map(u=>u.db)).size>1,l=await ls(n.map(u=>({name:a?`${u.db}/${u.table}`:u.table,size:u.count,detail:a?void 0:u.db,hidden:u.hidden})),{title:`${r} from Datasette`,message:`Choose tables to ${r.toLowerCase()} from ${ui(t.base)}.`,confirmLabel:r});return l?l.map(u=>n[u]):null}const ud='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',dd={name:"datasette-source",version:"0.2.0",description:"Import tables from any online Datasette instance, database, or single table by URL",author:"easyDBAccess built-ins",optional:!0},Cn={maxImportRows:1e4,pageSize:1e3},hd="https://latest.datasette.io/fixtures/facetable";function fd(e){e.ui.registerHeaderButton({id:"datasette:connect",label:"Connect",icon:ud,tooltip:"Connect a live, editable Datasette table",onClick:()=>wd(e)}),e.ui.registerTableButton({id:"datasette:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from its Datasette backend",visible:t=>t.source?.type==="datasette"||t.origin?.type==="datasette",onClick:(t,{tableId:r})=>Cd(t,r)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:id}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:r}){const i=r||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${hd}`,"","Import from Datasette");i&&await Bo(t,i)}}),e.ui.registerDropHandler(async(t,r)=>{const i=t.dataTransfer?.getData("text/plain")||"";return pd(i)?(t.preventDefault(),await Bo(r,i),!0):!1})}async function Bo(e,t){try{await Ts(e,t)}catch(r){let i;r instanceof Kt?i=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:i=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(i,"Datasette import failed")}}function pd(e){try{const t=Un(e);return!!(t.db&&t.table)}catch{return!1}}function md(e,t){if(!e.has(t))return t;for(let r=2;;r++){const i=`${t} (${r})`;if(!e.has(i))return i}}async function Ts(e,t,r={}){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=Un(t),l=await Na(z=>e.backend.fetch(z),n,"Import",{skipPicker:r.skipTablePicker});if(l===null)return;if(l.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const u=[];let h=0;for(const z of l){const F={base:n.base,db:z.db,table:z.table,query:{}},K=await gd(e,i,F);if(K.skipped){h+=1;continue}u.push({tableId:K.tableId,ref:F,overwrite:K.overwrite,knownCount:z.count})}let y=0,k=0;const v=[],I=[],W=[];for(const z of u)try{const F=await bd(e,z.tableId,z.ref,z.overwrite,z.knownCount);y+=1,k+=F.rowCount,F.error?I.push(`${z.ref.db}/${z.ref.table} (${F.error})`):(F.hasMore||F.truncated)&&v.push(`${z.ref.db}/${z.ref.table}`)}catch(F){W.push(`${z.ref.db}/${z.ref.table}: ${F?.message??String(F)}`)}yd(e,{imported:y,skipped:h,totalRows:k,capped:v,partial:I,failed:W,requested:l.length})}async function gd(e,t,r){const i=`${r.db}/${r.table}`,n={type:"datasette",url:`${r.base}/${encodeURIComponent(r.db)}/${encodeURIComponent(r.table)}`},a=(await e.store.tables.find()).filter(y=>y.workspaceId===t),l=a.find(y=>y.name===i);let u=i;if(l){const y=await e.ui.dialogs.choice(`A table named "${i}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!y||y==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(y==="Overwrite")return await e.store.tables.patch(l.id,{origin:n,updatedAt:Date.now()}),{tableId:l.id,overwrite:!0};u=md(new Set(a.map(k=>k.name)),i)}const h=wi();return await e.store.tables.insert({id:h,workspaceId:t,name:u,code:qa(`${r.db}-${r.table}`),columns:[],view:"table",origin:n,updatedAt:Date.now()}),{tableId:h,overwrite:!1}}async function bd(e,t,r,i,n=null){const a=`${r.db}/${r.table}`,l=u=>e.backend.fetch(u);Qn(t,!0);try{let u=[],h=n,y=!1;try{const m=await Es(l,r);u=m.columns,h=h??m.count,y=m.typed}catch{}h==null&&(h=await ja(l,r));const k=h&&h>0?Math.min(h,Cn.maxImportRows):0,{rows:v,truncated:I,hasMore:W,pages:z,error:F}=await mi(l,r,{maxRows:Cn.maxImportRows,pageSize:Cn.pageSize,onProgress:m=>{k>0&&Qn(t,!0,Math.min(1,m/k))}});let oe=u.length===0?pi(v):y?u:As(u,v),_e={};try{const m=await Ss(l,r),w=_s(m,oe);oe=w.columns,_e=w.patch}catch{}_e=Ps(_e,r.base,r.db,r.table);const je=await e.store.tables.findOne(t),se=je?.columns??[],ae=se.length===0,{columns:fe}=Ba(se,oe,je?.deletedColumns),ve=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t});const Ae=ae?{columns:fe,..._e,updatedAt:ve}:{columns:fe,..._e.info?{info:_e.info}:{},updatedAt:ve};await e.store.tables.patch(t,Ae);const Ze=e.store.rows(t);if(i){const m=await Ze.find();await Ze.bulkRemove(m.map(w=>w.id))}const rt=v.map(m=>({id:wi(),tableId:t,data:m,updatedAt:ve}));return await Ze.bulkInsert(rt),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:v.length}),{name:a,rowCount:v.length,hasMore:W,truncated:I,pages:z,count:h,error:F}}finally{Qn(t,!1)}}function yd(e,t){const r=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,i=`${t.imported} table${t.imported===1?"":"s"}`,n=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${i} (${r});${n} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.partial.length>0){e.ui.dialogs.toast(`Imported ${i} (${r}).${n} ${t.partial.length} loaded partially (stopped early — the server may have rate-limited us): ${t.partial.join(", ")}. Use Refresh to fetch the rest.`,{kind:"warning",title:"Datasette import"});return}if(t.capped.length>0){e.ui.dialogs.toast(`Imported ${i} (${r}).${n} ${t.capped.length} capped at ${Cn.maxImportRows} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${i} (${r}) from Datasette.${n}`,{kind:"success",title:"Datasette import"})}async function wd(e){const t=Lt.instance??vd(),r=(n,a)=>e.backend.fetch(n,a),i=await t.open({initialUrl:"https://datasette.io",async onTest(n,a){const l=Un(n),u=await Oa(r,l.base,{token:a||void 0});if(!u.reachable)return`Unreachable: ${u.error??"no response"}`;const h=u.version?` (Datasette ${u.version})`:"";return u.writable?`Reachable${h} — signed in, read-write.`:`Reachable${h} — read-only (no token / not authenticated).`}});if(i)try{await Ua(e,i.url,i.token)}catch(n){const a=n instanceof Kt?n.message:n?.message??String(n);await e.ui.dialogs.alert(a,"Connect Datasette failed")}}function vd(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function Ua(e,t,r){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=Un(t),a=(v,I)=>e.backend.fetch(v,I),l=bi(a,r||void 0),u=await Oa(a,n.base,{token:r||void 0});r&&await e.store.settings.upsert({key:Ma(n.base),value:r});let h;try{h=await Na(l,n,"Connect")}catch(v){const I=v instanceof Kt?v.message:v?.message??String(v);throw new Error(`Couldn't read tables from ${ui(n.base)}: ${I}`)}if(h===null)return;if(h.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const y=[];for(const v of h){const I=await xd(e,i,n.base,v,u.writable,r);y.push({tableId:I,c:v})}const k=u.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${y.length} live table${y.length===1?"":"s"} from Datasette (${k}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:v,c:I}of y)$d(e,v,n.base,I,r)}async function xd(e,t,r,i,n,a){const l=(await e.store.tables.find()).find(k=>{const v=k.source?.config;return k.workspaceId===t&&k.source?.type==="datasette"&&v?.base===r&&v?.db===i.db&&v?.table===i.table});let u=i.pks??[];if(u.length===0){const k=bi((v,I)=>e.backend.fetch(v,I),a||void 0);try{u=await Lu(k,{base:r,db:i.db,table:i.table,query:{}})}catch{u=[]}}const h=l?.id??wi(),y={...l??{},id:h,workspaceId:t,name:`${i.db}/${i.table}`,code:qa(`${i.db}-${i.table}`),columns:l?.columns??[],view:l?.view??"table",source:{type:"datasette",writable:n,config:{base:r,db:i.db,table:i.table,pks:u}},updatedAt:Date.now()};return l?await e.store.tables.upsert(y):await e.store.tables.insert(y),h}async function $d(e,t,r,i,n){const a={base:r,db:i.db,table:i.table,query:{}},l=bi((u,h)=>e.backend.fetch(u,h),n||void 0);try{let u=[],h=!1;try{const F=await Es(l,a);u=F.columns,h=F.typed}catch{}const{rows:y}=await mi(l,a,{maxRows:50,pageSize:50}),k=u.length===0?pi(y):h?u:As(u,y);if(k.length===0)return;const v=await e.store.tables.findOne(t);if(!v)return;const I=v.source?.config?.pks??[];let W=k.map(F=>I.includes(F.field)?{...F,unique:!0,notnull:!0}:F),z={};try{const F=await Ss(l,a),K=_s(F,W);W=K.columns,z=K.patch}catch{}z=Ps(z,a.base,i.db,i.table),await e.store.tables.patch(t,{columns:W,...z,updatedAt:Date.now()})}catch{}}async function Cd(e,t){const r=await e.store.tables.findOne(t);if(r)try{if(r.source?.type==="datasette"){const i=e.store.rows(t);typeof i.refresh=="function"&&await i.refresh();const n=await i.find();e.ui.dialogs.toast(`Reloaded ${n.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}else r.origin?.type==="datasette"&&await kd(e,r)}catch(i){const n=i instanceof Kt?i.message:i?.message??String(i);e.ui.dialogs.toast(`Refresh failed: ${n}`,{kind:"error",title:"Refresh"})}}async function kd(e,t){const r=Un(t.origin.url),i=h=>e.backend.fetch(h);Qn(t.id,!0);let n,a=[];try{let h=[],y=null,k=!1;try{const Ae=await Es(i,r);h=Ae.columns,y=Ae.count,k=Ae.typed}catch{}y==null&&(y=await ja(i,r));const v=y&&y>0?Math.min(y,Cn.maxImportRows):0,{rows:I,hasMore:W,truncated:z,error:F}=await mi(i,r,{maxRows:Cn.maxImportRows,pageSize:Cn.pageSize,onProgress:Ae=>{v>0&&Qn(t.id,!0,Math.min(1,Ae/v))}});let K=h.length===0?pi(I):k?h:As(h,I),oe={};try{const Ae=await Ss(i,r),Ze=_s(Ae,K);K=Ze.columns,oe=Ze.patch}catch{}oe=Ps(oe,r.base,r.db,r.table);const _e=t.columns.length===0,je=Ba(t.columns,K,t.deletedColumns);a=je.newFields;const se=Date.now(),ae=_e?{columns:je.columns,...oe,updatedAt:se}:{columns:je.columns,...oe.info?{info:oe.info}:{},updatedAt:se};await e.store.tables.patch(t.id,ae);const fe=e.store.rows(t.id),ve=await fe.find();await fe.bulkRemove(ve.map(Ae=>Ae.id)),await fe.bulkInsert(I.map(Ae=>({id:wi(),tableId:t.id,data:Ae,updatedAt:se}))),n={rowCount:I.length,hasMore:W,truncated:z,error:F}}finally{Qn(t.id,!1)}const l=[];n.error?l.push(`partial (${n.error})`):(n.hasMore||n.truncated)&&l.push(`capped at ${Cn.maxImportRows}`),a.length>0&&l.push(`${a.length} new column${a.length===1?"":"s"}`);const u=l.length?` — ${l.join(", ")}`:"";e.ui.dialogs.toast(`Refreshed ${n.rowCount} rows from ${r.db}/${r.table}${u}.`,{kind:n.error||n.hasMore||n.truncated||a.length>0?"warning":"success",title:"Refresh"}),a.length>0&&Ed(t.id,r,a)}function Ed(e,t,r){const i=r.join(", "),n=r.length!==1,a=`Refreshing ${t.db}/${t.table} revealed ${r.length} new column${n?"s":""}: ${i}. Review, reorder or hide ${n?"them":"it"} here.`;document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:e,notice:a}}))}function qa(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function wi(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Sd=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:Ua,importDatasette:Ts,init:fd,meta:dd},Symbol.toStringTag,{value:"Module"})),_d={name:"dump-export",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file.",author:"easyDBAccess built-ins"};function Ad(e){e.ui.registerFooterButton({id:"dump-export:dump",label:"Dump",icon:"archive",tooltip:"Export the current workspace as a JSON dump file",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await vi(e);await e.backend.saveFile(`workspace-${t}.db.json`,r,"application/json")}})}async function vi(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),i={workspaceId:t,exportedAt:Date.now(),tables:[]};for(const n of r){const a=await e.store.rows(n.id).find();i.tables.push({name:n.name,columns:n.columns,rows:a.map(l=>l.data),...n.windowGeometry?{windowGeometry:n.windowGeometry}:{},...n.sortColumn?{sortColumn:n.sortColumn,sortAsc:n.sortAsc??!0}:{},...n.source?{source:n.source}:{},...n.origin?{origin:n.origin}:{}})}return JSON.stringify(i,null,2)}const Pd=Object.freeze(Object.defineProperty({__proto__:null,init:Ad,meta:_d,serializeWorkspace:vi},Symbol.toStringTag,{value:"Module"})),Td={name:"sql-export",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"easyDBAccess built-ins"};function Dd(e){e.ui.registerFooterButton({id:"sql-export:dump",label:"SQL",icon:"storage",tooltip:"Export the current workspace as a .sql script",onClick:async()=>{const t=e.workspaceId();if(!t)return;const r=await Ha(e);await e.backend.saveFile(`workspace-${t}.sql`,r,"application/sql")}})}async function Ha(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),i=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const n of r){const a=await e.store.rows(n.id).find();i.push(Id(n,a),"")}return i.push("COMMIT;",""),i.join(`
`)}function Id(e,t){const r=cs(e.code||e.name||`table_${e.id}`),i=['  "__id" TEXT PRIMARY KEY',...e.columns.map(a=>`  ${Rd(a)}`)],n=[`DROP TABLE IF EXISTS "${r}";`,`CREATE TABLE "${r}" (`,i.join(`,
`),");"];if(t.length>0){const l=["__id",...e.columns.map(u=>u.field)].map(u=>`"${cs(u)}"`).join(", ");for(const u of t){const h=[Mo(u.id),...e.columns.map(y=>Mo(u.data[y.field],y.type))];n.push(`INSERT INTO "${r}" (${l}) VALUES (${h.join(", ")});`)}}return n.join(`
`)}function Rd(e){const t=[`"${cs(e.field)}"`,jd(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function jd(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function Mo(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const r=Od(e);return r===null?"NULL":Gr(r)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?Gr(e.toISOString()):Gr(typeof e=="string"?e:JSON.stringify(e))}function Od(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?No(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(r)return`${r[1]}${r[2]}${r[3]}`;const i=new Date(t);return Number.isFinite(i.getTime())?No(i):null}return null}function No(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),r=String(e.getUTCMonth()+1).padStart(2,"0"),i=String(e.getUTCDate()).padStart(2,"0");return`${t}${r}${i}`}function Gr(e){return`'${e.replace(/'/g,"''")}'`}function cs(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const Fd=Object.freeze(Object.defineProperty({__proto__:null,init:Dd,meta:Td,serializeWorkspaceAsSql:Ha},Symbol.toStringTag,{value:"Module"})),zd={name:"gist-sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"easyDBAccess built-ins"},Ld="gist:";function Bd(e){e.ui.registerFooterButton({id:"gist-sync:push",label:"Push",icon:"cloud_upload",tooltip:"Push the current workspace to a GitHub Gist",onClick:async()=>{try{await Ud(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerFooterButton({id:"gist-sync:pull",label:"Pull",icon:"cloud_download",tooltip:"Pull the latest tables from the configured Gist",onClick:async()=>{try{await qd(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Gist sync"})}}})}async function Wa(e){const t=e.workspaceId();return`${Ld}${t??"default"}`}async function Md(e){const t=await Wa(e),r=await e.store.settings.findOne(t);if(!r)return null;const i=r.value;return!i||!i.token||!i.user?null:{user:i.user,gistId:i.gistId??"",token:i.token}}async function Ka(e,t){const r=await Wa(e);await e.store.settings.upsert({key:r,value:t})}function Nd(e){const t={};for(const r of e.split(";")){const i=r.indexOf("=");if(i<0)continue;const n=r.slice(0,i).trim(),a=r.slice(i+1).trim();n&&(t[n]=a)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function Va(e){const t=await Md(e);if(t)return t;const r=await e.ui.dialogs.prompt(`Connection string format:
user=<github-user>;gist_id=<id>;gist_token=<pat>;

Leave gist_id empty to create a new gist on first Push.`,"","Gist credentials");if(!r)return null;const i=Nd(r);return i?(await Ka(e,i),i):(await e.ui.dialogs.alert("Could not parse connection string. Make sure it contains user=… and gist_token=….","Gist credentials"),null)}async function Ud(e){const t=await Va(e);if(!t)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=(await e.store.tables.find()).filter(h=>h.workspaceId===r);if(i.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const n={},a=[];for(const h of i){const y=await e.store.rows(h.id).find(),k=JSON.stringify(Hd(h,y),null,2);k.length>1e8&&a.push(`${h.name} (${(k.length/1e6).toFixed(2)} MB)`),n[`${Ya(h.name)}.table.json`]={content:k}}if(a.length>0&&!await e.ui.dialogs.confirm(`These tables exceed Gist's 100 MB-per-file limit and will be rejected:

${a.join(`
`)}

Push anyway?`,"Gist size warning"))return;n["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1"},null,2)};let l;if(t.gistId){const h=await fetch(`https://api.github.com/gists/${t.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:n,description:`easyDBAccess workspace: ${r}`})});if(!h.ok)throw new Error(await us(h));l=await h.json()}else{const h=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:n})});if(!h.ok)throw new Error(await us(h));l=await h.json(),t.gistId=l.id,await Ka(e,t)}const u=l.html_url??`https://gist.github.com/${t.user}/${l.id}`;e.ui.dialogs.toast(`Pushed ${i.length} table${i.length===1?"":"s"}.  ${u}`,{kind:"success",title:"Gist sync"})}async function qd(e){const t=await Va(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=await fetch(`https://api.github.com/gists/${t.gistId}`,{headers:{Authorization:`Bearer ${t.token}`,Accept:"application/vnd.github+json"}});if(!i.ok)throw new Error(await us(i));const n=await i.json(),a=Object.entries(n.files).filter(([y])=>y.endsWith(".table.json")&&!y.startsWith("_easydb"));if(a.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const l=(await e.store.tables.find()).filter(y=>y.workspaceId===r),u=new Map(l.map(y=>[y.name,y]));let h=0;for(const[,y]of a){const k=JSON.parse(y.content);if(!k.name||!Array.isArray(k.columns))continue;let v;const I=u.get(k.name);if(I){v=await e.store.tables.patch(I.id,{columns:k.columns,updatedAt:Date.now()});const z=e.store.rows(I.id),F=await z.find();await z.bulkRemove(F.map(K=>K.id))}else v=await e.store.tables.insert({id:Uo(),workspaceId:r,name:k.name,code:Ya(k.name),columns:k.columns,view:"table",updatedAt:Date.now()});const W=(k.rows??[]).map(z=>({id:Uo(),tableId:v.id,data:z,updatedAt:Date.now()}));await e.store.rows(v.id).bulkInsert(W),h++}e.ui.dialogs.toast(`Pulled ${h} table${h===1?"":"s"} from gist ${t.gistId}.`,{kind:"success",title:"Gist sync"})}function Hd(e,t){return{name:e.name,columns:e.columns,rows:t.map(r=>r.data)}}async function us(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}function Ya(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Uo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Wd=Object.freeze(Object.defineProperty({__proto__:null,init:Bd,meta:zd},Symbol.toStringTag,{value:"Module"})),Xa="server-sync:url";function Ga(e){return`server-sync:etag:${e}`}async function Qa(e){const r=(await e.store.settings.findOne(Xa))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}async function Kd(e,t){await e.store.settings.upsert({key:Xa,value:t.replace(/\/+$/,"")})}async function Ja(e,t){const i=(await e.store.settings.findOne(Ga(t)))?.value;return typeof i=="string"?i:null}async function Bn(e,t,r){await e.store.settings.upsert({key:Ga(t),value:r})}function xi(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function qo(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function Za(e,t,r){const i=Cr(r,t),n=(await e.store.tables.find()).filter(l=>l.workspaceId===t);for(const l of n){const u=e.store.rows(l.id),h=await u.find();await u.bulkRemove(h.map(y=>y.id)),await e.store.tables.remove(l.id)}let a=0;for(const l of i){const u=Ho(),h=await e.store.tables.insert({id:u,workspaceId:t,name:l.name,code:Vd(l.name),columns:l.columns,view:"table",...l.windowGeometry?{windowGeometry:l.windowGeometry}:{},...l.sortColumn?{sortColumn:l.sortColumn,sortAsc:l.sortAsc??!0}:{},updatedAt:Date.now()}),y=l.rows.map(k=>({id:Ho(),tableId:h.id,data:k,updatedAt:Date.now()}));await e.store.rows(h.id).bulkInsert(y),a++}return a}function Vd(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Ho(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Yd={name:"server-sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"easyDBAccess built-ins"};function Xd(e){e.ui.registerFooterButton({id:"server-sync:push",label:"Sync ↑",icon:"cloud_sync",tooltip:"Push this workspace to the configured server",onClick:async()=>{try{await Gd(e)}catch(t){e.ui.dialogs.toast(`Push failed: ${t.message}`,{kind:"error",title:"Server sync"})}}}),e.ui.registerFooterButton({id:"server-sync:pull",label:"Sync ↓",icon:"cloud_sync",tooltip:"Pull this workspace from the configured server",onClick:async()=>{try{await Qd(e)}catch(t){e.ui.dialogs.toast(`Pull failed: ${t.message}`,{kind:"error",title:"Server sync"})}}})}async function Gd(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await el(e);if(!r)return;const i=await vi(e),n=await Ja(e,t),a={"Content-Type":"application/json"};n&&(a["If-Match"]=`"${n}"`);let l=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:a,body:i});if(l.status===412){const h=await l.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){h.currentEtag&&await Bn(e,t,h.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}l=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:i})}if(!l.ok)throw new Error(await tl(l));const u=xi(l.headers.get("ETag"));u&&await Bn(e,t,u),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${r}.`,{kind:"success",title:"Server sync"})}async function Qd(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await el(e);if(!r||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const n=await fetch(`${r}/sync/${encodeURIComponent(t)}`);if(n.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!n.ok)throw new Error(await tl(n));const a=xi(n.headers.get("ETag")),l=await n.json(),u=await Za(e,t,l);a&&await Bn(e,t,a),e.ui.dialogs.toast(`Pulled ${u} table${u===1?"":"s"} from ${r}.`,{kind:"success",title:"Server sync"})}async function el(e){const t=await Qa(e);if(t)return t;const r=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!r)return null;try{new URL(r)}catch{return await e.ui.dialogs.alert(`"${r}" is not a valid URL.`,"Server sync"),null}return await Kd(e,r),r.replace(/\/+$/,"")}async function tl(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Jd=Object.freeze(Object.defineProperty({__proto__:null,init:Xd,meta:Yd},Symbol.toStringTag,{value:"Module"})),Zd={name:"new-table",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"easyDBAccess built-ins"};function eh(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const th=Object.freeze(Object.defineProperty({__proto__:null,init:eh,meta:Zd},Symbol.toStringTag,{value:"Module"})),nh={name:"plugin-manager-button",version:"0.1.0",description:"Registers a footer button that opens the Plugin Manager dialog.",author:"easyDBAccess built-ins"};function rh(e){e.ui.registerFooterButton({id:"plugin-manager:open",label:"Plugins",icon:"extension",tooltip:"Add, disable, or remove plugins",onClick:()=>e.ui.openPluginManager()})}const ih=Object.freeze(Object.defineProperty({__proto__:null,init:rh,meta:nh},Symbol.toStringTag,{value:"Module"})),sh={name:"core-renderers",version:"0.1.0",description:"Built-in cell renderers: date, datetime, boolean, script.",author:"easyDBAccess built-ins"};function oh(e){customElements.get("cell-date")||customElements.define("cell-date",ah),customElements.get("cell-datetime")||customElements.define("cell-datetime",lh),customElements.get("cell-boolean")||customElements.define("cell-boolean",ch),customElements.get("cell-script")||customElements.define("cell-script",dh),e.ui.registerCellRenderer("date","cell-date"),e.ui.registerCellRenderer("datetime","cell-datetime"),e.ui.registerCellRenderer("boolean","cell-boolean"),e.ui.registerCellRenderer("script","cell-script")}class ah extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="date",t.value=fh(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class lh extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="datetime-local",t.value=ph(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class ch extends HTMLElement{constructor(){super(...arguments),this._value=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="checkbox",t.checked=uh(this._value),t.style.cssText="transform:translateY(1px);cursor:pointer",t.addEventListener("change",()=>this.commit(t.checked)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function uh(e){return e===!0||e==="true"||e===1||e==="1"}class dh extends HTMLElement{constructor(){super(...arguments),this._column=null,this._row={}}set column(t){this._column=t,this.render()}get column(){return this._column}set row(t){this._row=t??{},this.render()}get row(){return this._row}set value(t){}get value(){}connectedCallback(){this.render()}render(){this.innerHTML="";const t=this._column?.script;if(!t||!t.trim()){const a=document.createElement("span");a.textContent="(no script)",a.style.cssText="color:#9ca3af;font-style:italic",this.append(a);return}let r;try{r=hh(t)}catch(a){this.append(es("compile error",a));return}let i;try{i=r(this._row)}catch(a){this.append(es("runtime error",a));return}if(typeof i!="string"){this.append(es("render(row) did not return a string",null));return}const n=document.createElement("span");n.style.cssText="display:inline-block;width:100%",n.innerHTML=i,this.append(n)}}const Wo=new Map;function hh(e){const t=Wo.get(e);if(t)return t;const r=new Function("row",`${e}
return render(row);`);return Wo.set(e,r),r}function es(e,t){const r=document.createElement("span");if(r.textContent=`⚠ ${e}`,r.style.cssText="color:#b91c1c;font-size:0.8em;font-family:ui-monospace,SFMono-Regular,monospace",t){const i=t instanceof Error?t.message:String(t);r.title=i}return r}function fh(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function ph(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}const mh=Object.freeze(Object.defineProperty({__proto__:null,init:oh,meta:sh},Symbol.toStringTag,{value:"Module"})),gh={name:"cell-color",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"easyDBAccess built-ins"};function bh(e){customElements.get("cell-color")||customElements.define("cell-color",yh),e.ui.registerCellRenderer("color","cell-color")}class yh extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,r,i){this.value=i}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const r=document.createElement("input");r.type="color",r.value=t,r.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",r.addEventListener("change",()=>this.commit(r.value)),this.append(r)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const wh=Object.freeze(Object.defineProperty({__proto__:null,init:bh,meta:gh},Symbol.toStringTag,{value:"Module"})),vh={name:"cell-image",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"easyDBAccess built-ins"};function xh(e){customElements.get("cell-image")||customElements.define("cell-image",$h),e.ui.registerCellRenderer("image","cell-image")}class $h extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("span");if(t.style.cssText="display:inline-flex;align-items:center;gap:0.4rem",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const i=document.createElement("img");i.src=this._value,i.alt="",i.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(i)}else{const i=document.createElement("span");i.style.color="#9ca3af",i.textContent="no image",t.append(i);const n=document.createElement("button");n.type="button",n.textContent="upload",n.style.cssText="padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",n.addEventListener("click",()=>this.pickFile()),t.append(n)}this.append(t)}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const r=t.files?.[0];if(!r)return;const i=new FileReader;i.onload=()=>this.commit(String(i.result)),i.readAsDataURL(r)}),t.click()}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Ch=Object.freeze(Object.defineProperty({__proto__:null,init:xh,meta:vh},Symbol.toStringTag,{value:"Module"})),kh={name:"cell-link",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"easyDBAccess built-ins"};function Eh(e){customElements.get("cell-link")||customElements.define("cell-link",Sh),e.ui.registerCellRenderer("link","cell-link")}class Sh extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1}set value(t){const r=t==null?"":String(t);this._value!==r&&(this._value=r,this._editing=!1,this.render())}get value(){return this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="";const t=this._value,r=this._editing?null:_h(t),i=!this._editing&&!r?Ah(t):null,n=!this._editing&&!r&&!i?Ph(t):null;if(r||i||n){const a=document.createElement("span");a.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const l=document.createElement("a");l.href=r?t:i?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,r&&(l.target="_blank",l.rel="noopener noreferrer"),l.textContent=t,l.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",l.title=r?`Open ${t}`:i?`Email ${t}`:`Call ${t}`;const u=document.createElement("button");u.type="button",u.title="Edit",u.textContent="✎",u.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",u.addEventListener("click",h=>{h.preventDefault(),h.stopPropagation(),this._editing=!0,this.render()}),a.append(l,u),this.append(a)}else{const a=document.createElement("input");a.type="text",a.value=t,a.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",a.addEventListener("change",()=>this.commit(a.value)),a.addEventListener("keydown",l=>{l.key==="Enter"?(l.preventDefault(),this.commit(a.value)):l.key==="Escape"&&(this._editing=!1,this.render())}),this.append(a),this._editing&&setTimeout(()=>{a.focus(),a.select()},0)}}commit(t){this._value=t,this._editing=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function _h(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function Ah(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function Ph(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const r=t.replace(/\D/g,"");if(r.length<7||r.length>15)return null;const i=/[ ()\-.]/.test(t),n=t.startsWith("+");return!i&&!n&&r.length<10?null:t}const Th=Object.freeze(Object.defineProperty({__proto__:null,init:Eh,meta:kh},Symbol.toStringTag,{value:"Module"}));var Dh=Object.defineProperty,Ih=Object.getOwnPropertyDescriptor,nl=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ih(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Dh(t,r,n),n};function Ko(e){return(hn.instance??Rh()).open(e)}function Rh(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let hn=class extends Ne{constructor(){super(...arguments),this.rows=[],this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((r,i)=>{const n=this.rows[i],a=n.field.trim(),l=n.label.trim()||a;return{...r,field:a,label:l,hidden:n.hidden}});this.finish(t)},this.toggleAllHidden=()=>{const e=this.rows.length>0&&this.rows.every(t=>t.hidden);this.rows=this.rows.map(t=>({...t,hidden:!e}))}}connectedCallback(){super.connectedCallback(),hn.instance=this}disconnectedCallback(){super.disconnectedCallback(),hn.instance===this&&(hn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Gt(this.dialogEl,e)}open(e){return this.source=e,this.rows=e.map(t=>({field:t.field,label:t.label,hidden:!!t.hidden})),new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((r,i)=>{const n=r.field.trim().toLowerCase();if(n===""){e.add(i);return}(t.get(n)??t.set(n,[]).get(n)).push(i)});for(const r of t.values())if(r.length>1)for(const i of r)e.add(i);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,r){this.rows=this.rows.map((i,n)=>n===e?{...i,[t]:r}:i)}setHidden(e,t){this.rows=this.rows.map((r,i)=>i===e?{...r,hidden:t}:r)}render(){const e=this.invalidIndices(),t=e.size;return B`
      <dialog @cancel=${this.onCancel} @keydown=${Sn}>
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
              ${this.rows.map((r,i)=>B`
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
    `}};hn.instance=null;hn.styles=[Xt,Je`
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
    `];nl([H()],hn.prototype,"rows",2);hn=nl([nt("column-names-dialog")],hn);var jh=Object.defineProperty,Oh=Object.getOwnPropertyDescriptor,$i=(e,t,r,i)=>{for(var n=i>1?void 0:i?Oh(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&jh(t,r,n),n};let Qr=null;function Fh(){return Qr||(Qr=document.createElement("top-progress"),document.body.appendChild(Qr)),Qr}let Mn=class extends Ne{constructor(){super(...arguments),this.visible=!1,this.frac=null,this.label="",this.active=new Set}static begin(e=""){return Fh().begin(e)}begin(e){const t=Symbol("progress");return this.active.add(t),this.label=e,this.frac=null,this.visible=!0,{fraction:r=>{this.active.has(t)&&(this.frac=r)},done:()=>{this.active.delete(t),this.active.size===0&&(this.visible=!1,this.frac=null,this.label="")}}}render(){if(!this.visible)return B``;const e=this.frac!=null;return B`<div
      class="track"
      role="progressbar"
      aria-label=${this.label||"Loading"}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow=${e?Math.round(this.frac*100):""}
    >
      ${e?B`<div
            class="bar determinate"
            style="width:${Math.round(this.frac*100)}%"
          ></div>`:B`<div class="bar indet"></div>`}
    </div>`}};Mn.styles=Je`
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
  `;$i([H()],Mn.prototype,"visible",2);$i([H()],Mn.prototype,"frac",2);$i([H()],Mn.prototype,"label",2);Mn=$i([nt("top-progress")],Mn);function zh(e){let t;try{t=new URL(e)}catch{return e}const r=t.hostname.toLowerCase();if(r==="github.com"||r==="www.github.com"){const i=t.pathname.split("/").filter(Boolean);if(i.length>=5&&(i[2]==="blob"||i[2]==="raw")){const n=i[0],a=i[1];let l=i.slice(3);return l.length>=3&&l[0]==="refs"&&(l[1]==="heads"||l[1]==="tags")&&(l=l.slice(2)),`https://raw.githubusercontent.com/${[n,a,...l].join("/")}`}}return e}async function Lh(e,t){const r=Number(e.headers?.get?.("content-length")),i=e.body?.getReader?.();if(i&&Number.isFinite(r)&&r>0){const n=[];let a=0;for(;;){const{done:h,value:y}=await i.read();if(h)break;y&&(n.push(y),a+=y.length,t?.(Math.min(1,a/r)))}const l=new Uint8Array(a);let u=0;for(const h of n)l.set(h,u),u+=h.length;return new TextDecoder().decode(l)}return await e.text()}var Bh=Object.defineProperty,Mh=Object.getOwnPropertyDescriptor,Jt=(e,t,r,i)=>{for(var n=i>1?void 0:i?Mh(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Bh(t,r,n),n};const Nh="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",Uh="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",qh='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',Vo=[{label:"Northwind — sample database (JSON dump)",url:Nh,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:Uh,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],Hh={name:"import-data",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"easyDBAccess built-ins",optional:!0};function Wh(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:qh,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>Gh(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:r})=>Yh(t,r)})}const Yo=50*1024*1024;function Xo(e){try{return new URL(e).host}catch{return e}}async function Kh(e){try{return(await e.text()).replace(/\s+/g," ").trim().slice(0,300)}catch{return""}}async function Vh(e,t,r={}){const i=zh(t),n=r.slowMs??2e3;let a=setTimeout(()=>{a=void 0,r.onSlow?.()},n);const l=()=>{a!==void 0&&(clearTimeout(a),a=void 0)};try{let u;try{u=await e.backend.fetch(i)}catch(y){throw new Error(`Could not reach ${Xo(i)} — no response. The server may be down, blocking cross-origin (CORS) requests, or the transfer may have failed (e.g. a very large file). [${y.message}]`)}if(!u.ok){const y=await Kh(u);throw new Error(`HTTP ${u.status} ${u.statusText||""}`.trim()+(y?` — ${y}`:""))}const h=Number(u.headers.get("content-length"));if(Number.isFinite(h)&&h>Yo)throw new Error(`Response is ${(h/(1024*1024)).toFixed(1)} MB, over the ${Yo/(1024*1024)} MB browser import limit. Import a smaller extract, or use a server/Datasette connection for large datasets.`);try{return await Lh(u,r.onProgress)}catch(y){throw new Error(`Failed reading the response body from ${Xo(i)}: ${y.message}`)}}finally{l()}}async function ds(e,t,r){const i={handle:null};try{return await Vh(e,t,{onSlow:()=>{i.handle=Mn.begin(r)},onProgress:n=>i.handle?.fraction(n)})}finally{i.handle?.done()}}async function Yh(e,t){const r=await e.store.tables.findOne(t),i=r?.origin;if(i?.url)try{const n=await ds(e,i.url,`Reading ${r?.name??"data"}…`);let a;if(i.type==="csv")a=$r(n).rows;else{const h=Cr(JSON.parse(n),r.name),y=h.find(k=>k.name===r.name)??(h.length===1?h[0]:void 0);if(!y)throw new Error(`"${r.name}" is no longer in the dump at ${i.url}`);a=y.rows}const l=e.store.rows(t),u=await l.find();await l.bulkRemove(u.map(h=>h.id)),await l.bulkInsert(a.map(h=>({id:Xh(),tableId:t,data:h,updatedAt:Date.now()}))),e.ui.dialogs.toast(`Refreshed "${r.name}" (${a.length} rows).`,{kind:"success",title:"Refresh"})}catch(n){e.ui.dialogs.toast(`Couldn't refresh "${r?.name??t}": ${n.message}`,{kind:"error",title:"Refresh"})}}function Xh(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function Gh(e){const r=await(ft.instance??Qh()).open({async listDatabases(k){const v=Un(k);return Da(I=>e.backend.fetch(I),v.base)}});if(!r)return;const{url:i,file:n,kind:a,dbChosen:l,editColumns:u,maxRows:h}=r,y=n?.name??i;try{if(n){const k=await n.text();a==="csv"?await oi(e,k,n.name,{editColumns:u?Ko:void 0,maxRows:h}):await ai(e,k,n.name,{maxRows:h}),e.ui.dialogs.toast(`Imported ${n.name}.`,{kind:"success",title:"Import"});return}if(a==="datasette")await Ts(e,i,{skipTablePicker:l});else if(a==="csv"){const k=await ds(e,i,`Reading ${Xn(i)}…`);await oi(e,k,Xn(i),{editColumns:u?Ko:void 0,maxRows:h,origin:{type:"csv",url:i}}),e.ui.dialogs.toast(`Imported ${Xn(i)}.`,{kind:"success",title:"Import"})}else{const k=await ds(e,i,`Reading ${Xn(i)}…`);await ai(e,k,Xn(i),{originUrl:i,maxRows:h}),e.ui.dialogs.toast(`Imported ${Xn(i)}.`,{kind:"success",title:"Import"})}}catch(k){e.ui.dialogs.toast(`Could not import ${y}: ${k.message}`,{kind:"error",title:"Import"})}}function Qh(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function Jh(e){try{const t=new URL(e),r=t.hostname.toLowerCase(),i=[...t.searchParams.keys()].some(a=>a.startsWith("_")),n=r.includes("datasette")||i;return!i&&/\.csv$/i.test(t.pathname)?"csv":!i&&/\.json$/i.test(t.pathname)?"json":n?"datasette":"json"}catch{return"json"}}function Go(e,t){if(t!=="datasette"||!e)return!1;try{const r=Un(e);return!r.db&&!r.table}catch{return!1}}function Xn(e){try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();return r&&r.length>0?r:"sample.db.json"}catch{return"sample.db.json"}}function Zh(e){return/\.csv$/i.test(e)?"csv":"json"}let ft=class extends Ne{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.file=null,this.maxRowsInput="",this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t&&!this.file)return;const r=this.resolvedKind,i=this.maxRows,n=r==="csv"&&this.editColumns;if(this.file){this.finish({url:"",file:this.file,kind:r,editColumns:n,maxRows:i});return}const a=r==="datasette"&&!!this.selectedDb&&Go(t,r),l=a?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:l,kind:r,dbChosen:a,editColumns:n,maxRows:i})}}get resolvedKind(){return this.kind!=="auto"?this.kind:this.file?Zh(this.file.name):Jh(this.url.trim())}get maxRows(){const e=Math.floor(Number(this.maxRowsInput));return Number.isFinite(e)&&e>0?e:void 0}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),ft.instance=this}disconnectedCallback(){super.disconnectedCallback(),ft.instance===this&&(ft.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Gt(this.dialogEl,e)}open(e){return this.url="",this.kind="auto",this.presetIdx=-1,this.editColumns=!1,this.file=null,this.maxRowsInput="",this.resetDbList(),this.listDatabases=e?.listDatabases??null,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const r=Vo[t];r&&(this.url=r.url,this.kind=r.kind)}onFileChange(e){const r=e.target.files?.[0]??null;this.file=r,r&&(this.url="",this.presetIdx=-1,this.resetDbList())}renderDbPicker(){return!this.listDatabases||!Go(this.url.trim(),this.resolvedKind)?pe:B`
      <label>
        Database
        <div class="row db-row">
          <select
            .value=${this.selectedDb}
            ?disabled=${!this.dbList||this.dbList.length===0}
            @change=${e=>{this.selectedDb=e.target.value}}
          >
            ${this.dbList?B`
                  <option value="" ?selected=${this.selectedDb===""}>
                    — all databases (choose tables next) —
                  </option>
                  ${this.dbList.map(e=>B`<option value=${e} ?selected=${e===this.selectedDb}>${e}</option>`)}
                `:B`<option value="">— not loaded —</option>`}
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
      ${this.dbError?B`<p class="hint error">${this.dbError}</p>`:pe}
    `}render(){return B`
      <dialog @cancel=${this.onCancel} @keydown=${Sn}>
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
                ${Vo.map((e,t)=>B`<option value=${String(t)} ?selected=${t===this.presetIdx}>
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
            ${this.file?B`<p class="hint">
                  Importing <strong>${this.file.name}</strong> as
                  ${this.resolvedKind.toUpperCase()}.
                </p>`:pe}

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
            ${this.resolvedKind==="csv"?B`<label class="check">
                  <input
                    type="checkbox"
                    .checked=${this.editColumns}
                    @change=${e=>this.editColumns=e.target.checked}
                  />
                  Edit columns before import (rename / hide / fix duplicate names)
                </label>`:pe}

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
            ${this.resolvedKind==="datasette"&&this.maxRows!=null?B`<p class="hint">
                  Row limit applies to CSV/JSON imports; Datasette snapshots use their own
                  10,000-row cap.
                </p>`:pe}

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
      ${pe}
    `}};ft.instance=null;ft.styles=[Xt,Je`
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
    `];Jt([H()],ft.prototype,"url",2);Jt([H()],ft.prototype,"kind",2);Jt([H()],ft.prototype,"presetIdx",2);Jt([H()],ft.prototype,"dbList",2);Jt([H()],ft.prototype,"dbLoading",2);Jt([H()],ft.prototype,"dbError",2);Jt([H()],ft.prototype,"selectedDb",2);Jt([H()],ft.prototype,"editColumns",2);Jt([H()],ft.prototype,"file",2);Jt([H()],ft.prototype,"maxRowsInput",2);ft=Jt([nt("import-dialog")],ft);const ef=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return ft},init:Wh,meta:Hh},Symbol.toStringTag,{value:"Module"})),tf={name:"auto-sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"easyDBAccess built-ins",optional:!0},nf=6e4;let Qo=null,hs=!1;const ts=new Map;function rf(e){Qo===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(Qo=setInterval(()=>{rl(e)},nf)))}async function rl(e){if(hs)return;const t=e.workspaceId();if(!t)return;const r=await Qa(e);if(r)try{await sf(e,r,t)}catch(i){console.warn("[auto-sync]",i)}}async function sf(e,t,r){const i=await vi(e),n=await Ja(e,r),a=await fetch(`${t}/sync/${encodeURIComponent(r)}`);if(a.status===404){await Jo(e,t,r,i,null);return}if(!a.ok)return;const l=xi(a.headers.get("ETag")),u=await a.text();if(qo(i)===qo(u)){l&&l!==n&&await Bn(e,r,l);return}if(l&&l===n){await Jo(e,t,r,i,n);return}if(!(l&&ts.get(r)===l)){hs=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${r}". Pull and replace your local copy?`,"auto-sync")){const y=JSON.parse(u),k=await Za(e,r,y);l&&await Bn(e,r,l),ts.delete(r),e.ui.dialogs.toast(`Pulled ${k} table${k===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else l&&ts.set(r,l)}finally{hs=!1}}}async function Jo(e,t,r,i,n){const a={"Content-Type":"application/json"};n&&(a["If-Match"]=`"${n}"`);const l=await fetch(`${t}/sync/${encodeURIComponent(r)}`,{method:"PUT",headers:a,body:i});if(l.ok){const u=xi(l.headers.get("ETag"));u&&await Bn(e,r,u);return}if(l.status===412){const u=await l.json().catch(()=>({}));u.currentEtag&&await Bn(e,r,u.currentEtag)}}const il=Object.freeze(Object.defineProperty({__proto__:null,load:rf,meta:tf,tick:rl},Symbol.toStringTag,{value:"Module"})),sl=/\$([A-Za-z_][A-Za-z0-9_]*)/g;function Zo(...e){const t=new Set;for(const r of e)if(r)for(const i of r.matchAll(sl))t.add(i[1]);return[...t]}function of(e,t,r){return e.replace(sl,(i,n)=>{const a=r[n];if(!a)return"";const l=t.data[a];return l==null?"":String(l)})}function ea(e){return e==null||e===""}function af(e,t){const r=Object.entries(t).filter(([,i])=>i!=null&&String(i).trim()!=="");return r.length===0?e:e.filter(i=>r.every(([n,a])=>String(i.data[n]??"").toLowerCase().includes(String(a).toLowerCase())))}function lf(e,t,r=!0){if(!t)return e;const i=r?1:-1;return[...e].sort((n,a)=>{const l=n.data[t],u=a.data[t],h=ea(l),y=ea(u);if(h||y)return h===y?0:h?1:-1;const k=Number(l),v=Number(u);return!Number.isNaN(k)&&!Number.isNaN(v)?(k-v)*i:String(l).localeCompare(String(u),void 0,{numeric:!0,sensitivity:"base"})*i})}function cf(e,t){return lf(af(e,t.filters??{}),t.sortColumn,t.sortAsc??!0)}function uf(e){return!!e&&e.trim().length>0}var df=Object.defineProperty,hf=Object.getOwnPropertyDescriptor,rr=(e,t,r,i)=>{for(var n=i>1?void 0:i?hf(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&df(t,r,n),n};function fs(e,t){(jt.instance??ff()).open(e,t)}function ff(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function ta(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let jt=class extends Ne{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()}}connectedCallback(){super.connectedCallback(),jt.instance=this}disconnectedCallback(){super.disconnectedCallback(),jt.instance===this&&(jt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Gt(this.dialogEl,e)}async open(e,t){if(this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),t?.editTemplateId){const r=this.templates.find(i=>i.id===t.editTemplateId);r&&this.editTemplate(r)}else if(t?.editInstanceId){const r=this.instances.find(i=>i.id===t.editInstanceId);r&&await this.editInstance(r)}await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await ye(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(r=>r.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((r,i)=>r.name.localeCompare(i.name))}async openInstance(e){await(await ye()).store.viewInstances.patch(e,{open:!0,updatedAt:Date.now()}),this.close()}async editInstance(e){const r=await(await ye()).store.viewTemplates.findOne(e.templateId),i=r?Zo(r.headerHtml,r.rowHtml,r.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:r?.name??"template",name:e.name,tokens:i,mapping:{...e.mapping}},this.mode="instance"}async deleteInstance(e){await(await ye()).store.viewInstances.remove(e),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await ye();e.id?await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()}):await t.store.viewTemplates.insert({id:ta(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh(),this.mode="list"}useTemplate(e){const t=Zo(e.headerHtml,e.rowHtml,e.footerHtml),r={};for(const i of t)r[i]=this.autoMap(i);this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:r},this.mode="instance"}autoMap(e){const t=e.toLowerCase(),r=this.columns.find(n=>n.field.toLowerCase()===t||(n.label??"").toLowerCase()===t);if(r)return r.field;const i=this.table?.labelColumn;return i&&(t==="title"||t==="name"||t==="label")?i:""}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await ye();if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.mode="list";return}const r=this.columns.filter(n=>!n.hidden).map(n=>n.field),i={id:ta(),workspaceId:t.workspaceId,tableId:this.tableId,tableName:this.table.name,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:r,mapping:{...e.mapping},updatedAt:Date.now()};await t.store.viewInstances.insert(i),await this.openInstance(i.id)}renderList(){return B`
      <div class="section">
        <h3>Views of “${this.table?.name??""}”</h3>
        <ul class="list">
          ${this.instances.map(e=>B`<li>
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
          ${this.templates.map(e=>B`<li>
                <span class="name">${e.name}</span>
                ${e.builtin?B`<span class="badge">built-in</span>`:pe}
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
    `}renderTemplate(){const e=this.tDraft,t=r=>i=>{this.tDraft={...e,[r]:i.target.value}};return B`
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
    `}renderInstance(){const e=this.iDraft;return B`
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
        ${e.tokens.length===0?B`<p class="hint">
              This template has no <code>$TOKEN</code> placeholders — it will show the read-only
              table with your current sort, filter and visible columns.
            </p>`:e.tokens.map(t=>B`<div class="map-row">
                  <code>$${t}</code>
                  <select
                    @change=${r=>this.iDraft={...e,mapping:{...e.mapping,[t]:r.target.value}}}
                  >
                    <option value="" ?selected=${!e.mapping[t]}>— none —</option>
                    ${this.columns.map(r=>B`<option value=${r.field} ?selected=${e.mapping[t]===r.field}>
                          ${r.label||r.field}
                        </option>`)}
                  </select>
                </div>`)}
      </div>
      <p class="hint">
        ${e.id?B`Editing name and column mapping. The snapshotted sort, filters and visible columns
            are kept.`:B`The view snapshots this table's current sort, filters and visible columns.`}
      </p>
    `}render(){const e=this.mode==="template"?this.tDraft?.id?"Edit template":"New template":this.mode==="instance"?`${this.iDraft?.id?"Edit":"New"} view — ${this.iDraft?.templateName??""}`:"Views",t=this.mode==="template"?B`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
              Back
            </button>
            <button type="button" class="primary" @click=${()=>void this.saveTemplate()}>
              Save
            </button>`:this.mode==="instance"?B`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
                Back
              </button>
              <button type="button" class="primary" @click=${()=>void this.saveInstance()}>
                ${this.iDraft?.id?"Save":"Create view"}
              </button>`:B`<button type="button" class="ghost" @click=${this.close}>Close</button>`;return B`
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
    `}};jt.instance=null;jt.styles=[Xt,Je`
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
    `];rr([H()],jt.prototype,"mode",2);rr([H()],jt.prototype,"instances",2);rr([H()],jt.prototype,"templates",2);rr([H()],jt.prototype,"tDraft",2);rr([H()],jt.prototype,"iDraft",2);jt=rr([nt("views-dialog")],jt);const pf={name:"views",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",optional:!0},mf="grid_view",na="RSS Feed",ps='<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',ms=['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>',"</div>"].join(""),gs="</div>";function gf(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:mf,tooltip:"Views — display this table through a template",onClick:(t,{tableId:r})=>fs(r)})}async function bf(e){await wf(e)}function yf(){let e=5381;const t=`${ps}\0${ms}\0${gs}`;for(let r=0;r<t.length;r++)e=(e<<5)+e+t.charCodeAt(r)|0;return(e>>>0).toString(36)}async function wf(e){const t=e.workspaceId();if(!t)return;const r=`views:seeded:rss:${t}`,i=`views:sig:rss:${t}`,n=yf(),a=(await e.store.viewTemplates.find({workspaceId:t})).find(u=>u.builtin&&u.name===na);if(a){(await e.store.settings.findOne(i))?.value!==n&&(await e.store.viewTemplates.patch(a.id,{headerHtml:ps,rowHtml:ms,footerHtml:gs,updatedAt:Date.now()}),await e.store.settings.upsert({key:i,value:n})),await e.store.settings.upsert({key:r,value:!0});return}(await e.store.settings.findOne(r))?.value||(await e.store.viewTemplates.insert({id:vf(),workspaceId:t,name:na,headerHtml:ps,rowHtml:ms,footerHtml:gs,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({key:r,value:!0}),await e.store.settings.upsert({key:i,value:n}))}function vf(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const xf=Object.freeze(Object.defineProperty({__proto__:null,init:gf,load:bf,meta:pf},Symbol.toStringTag,{value:"Module"})),ol=[th,tu,Cu,Sd,ou,Pd,Fd,Wd,Jd,ih,mh,wh,Ch,Th,ef,il,xf],$f=ol;function bs(e){return`builtin:${e}`}async function Cf(e){const t=[];for(const r of ol)if(!await kf(e,r)){t.push(r);try{await r.init?.(e)}catch(i){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"init",error:i})}}return async()=>{for(const r of t)try{await r.load?.(e)}catch(i){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"load",error:i})}}}async function kf(e,t){if(!t.meta?.optional)return!1;const r=t.meta.name;return r?(await e.store.plugins.findOne(bs(r)))?.enabled===!1:!1}async function Ef(e){const t=e.workspaceId();if(!t)return async()=>{};const i=(await e.store.workspaces.findOne(t))?.pluginUrls??[],n=[];for(const a of i)try{const l=await e.store.plugins.findOne(a);if(l&&l.enabled===!1)continue;let u=l?.cachedBody??"";if(u)Sf(e,a,u);else{try{u=await al(a)}catch(k){await e.store.plugins.upsert({url:a,enabled:l?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${k.message}`}),e.events.emit("plugin:error",{url:a,phase:"fetch",error:k});continue}await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),cachedBody:u})}const h=new Blob([u],{type:"text/javascript"}),y=URL.createObjectURL(h);try{const k=await import(y);await k.init?.(e),n.push({url:a,mod:k})}finally{setTimeout(()=>URL.revokeObjectURL(y),5e3)}}catch(l){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`init: ${l.message}`}),e.events.emit("plugin:error",{url:a,phase:"init",error:l})}return async()=>{for(const{url:a,mod:l}of n)try{await l.load?.(e)}catch(u){await e.store.plugins.upsert({url:a,enabled:!0,lastFetched:Date.now(),lastError:`load: ${u.message}`}),e.events.emit("plugin:error",{url:a,phase:"load",error:u})}}}async function al(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const r=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(r))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return r}function Sf(e,t,r){return(async()=>{try{const i=await al(t);if(i===r)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:i})}catch{}})()}let ns=null;function ye(){return ns||(ns=_f()),ns}async function _f(){const e=await xc(),t=kc(e),r=Sc(),i=Rc(),n=new Map;t.tables.subscribe(F=>{n.clear();for(const K of F)n.set(K.id,K)});const a={...t.tables,insert:F=>(n.set(F.id,F),t.tables.insert(F)),upsert:F=>(n.set(F.id,F),t.tables.upsert(F))};let l=null;const u={get backend(){if(!l)throw new Error("[host] row-source ctx used before app init completed");return l.backend},events:r,settings:t.settings,workspaceId:()=>v},h=Ec({base:{...t,tables:a},providers:i.rowSources,tableById:F=>n.get(F),ctx:u}),y=Af(),k=await h.workspaces.find();let v;if(y){const F=Df(y),K=k.find(oe=>oe.id===F||oe.name===y);K?v=K.id:v=(await h.workspaces.insert({id:F,name:y,createdAt:Date.now(),pluginUrls:[]})).id}else{const F=Pf(),K=F?k.find(oe=>oe.id===F):void 0;K?v=K.id:k.length>0?v=k[0].id:v=(await h.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}Tf(v);const I=Fc({store:h,events:r,registries:i,workspaceId:()=>v});l=I,r.on("import:after",({source:F,tableId:K,rowCount:oe})=>{F!=="datasette"&&I.store.tables.findOne(K).then(_e=>{I.ui.dialogs.toast(`Imported ${oe} row${oe===1?"":"s"} into "${_e?.name??K}".`,{kind:"success",title:F.toUpperCase()+" import"})})}),r.on("plugin:error",({url:F,phase:K,error:oe})=>{I.ui.dialogs.toast(`[${K}] ${oe?.message??String(oe)}`,{kind:"error",title:`Plugin: ${F}`})});const W=await Cf(I),z=await Ef(I);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:v}),await W(),await z()}),{store:h,events:r,workspaceId:v,registries:i,api:I}}function Af(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const ll="eda:lastWorkspaceId";function Pf(){try{return globalThis.localStorage?.getItem(ll)??null}catch{return null}}function Tf(e){try{globalThis.localStorage?.setItem(ll,e)}catch{}}function Df(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var If=Object.defineProperty,Rf=Object.getOwnPropertyDescriptor,Ci=(e,t,r,i)=>{for(var n=i>1?void 0:i?Rf(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&If(t,r,n),n};let er=class extends Ne{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Gt(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let r;try{r=$r(this.text)}catch(l){this.errorMsg=`Couldn't parse the CSV: ${l.message}`;return}if(r.columns.length===0||r.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const i=await ye(),n=crypto.randomUUID();await i.store.tables.insert({id:n,workspaceId:i.workspaceId,name:t,code:jf(t),columns:r.columns,view:"table",updatedAt:Date.now()});const a=r.rows.map(l=>({id:crypto.randomUUID(),tableId:n,data:l,updatedAt:Date.now()}));await i.store.rows(n).bulkInsert(a),i.api.ui.dialogs.toast(`Imported ${r.rows.length} row${r.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return B`
      <dialog @cancel=${this.close} @keydown=${Sn}>
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
            ${this.errorMsg?B`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};er.styles=[Xt,Je`
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
    `];Ci([H()],er.prototype,"name",2);Ci([H()],er.prototype,"text",2);Ci([H()],er.prototype,"errorMsg",2);er=Ci([nt("csv-paste-dialog")],er);function jf(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}var Of=Object.defineProperty,Ff=Object.getOwnPropertyDescriptor,Ds=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ff(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Of(t,r,n),n};const zf=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return an HTML string; it is injected into the cell as raw HTML.
  return '<b>' + (row.name ?? '') + '</b>';
}
`;let rn=class extends Ne{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),rn.instance=this}disconnectedCallback(){super.disconnectedCallback(),rn.instance===this&&(rn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Gt(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:zf,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(r=>{this.resolver=r})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return B`
      <dialog @cancel=${this.onCancel} @keydown=${Sn}>
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
    `}};rn.instance=null;rn.styles=[Xt,Je`
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
    `];Ds([H()],rn.prototype,"text",2);Ds([H()],rn.prototype,"columnLabel",2);rn=Ds([nt("script-editor-dialog")],rn);var Lf=Object.defineProperty,Bf=Object.getOwnPropertyDescriptor,Mt=(e,t,r,i)=>{for(var n=i>1?void 0:i?Bf(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Lf(t,r,n),n};const Mf=["string","number","boolean","date","datetime"];let kt=class extends Ne{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.columns=[],this.errorMsg="",this.noticeMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Gt(this.dialogEl,e)}async open(e,t){this.errorMsg="",this.noticeMsg=t?.notice??"";const r=await ye();if(this.rendererOptions=[...r.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.rendererSubUnsub=r.events.on("app:ready",()=>{this.rendererOptions=[...r.registries.cellRenderers.keys()].sort()}),e){const i=await ye(),n=await i.store.tables.findOne(e);if(!n)return;this.mode="edit",this.editTableId=e,this.name=n.name,this.columns=n.columns.map(l=>({field:l.field,label:l.label,type:l.type,renderer:l.renderer,script:l.script,max:l.max,unique:l.unique,notnull:l.notnull,hidden:l.hidden,origField:l.field}));const a=await i.store.rows(e).find();this.previewRows=a.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,r)=>r!==e)}moveColumn(e,t){const r=e+t;if(r<0||r>=this.columns.length)return;const i=[...this.columns],[n]=i.splice(e,1);i.splice(r,0,n),this.columns=i}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,r){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientY<i.top+i.height/2;this.dropTargetIdx=t,this.dropEdge=n?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const r=this.dragSrcIdx,i=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,r===null||r===t||!i)return;const n=[...this.columns],[a]=n.splice(r,1);let l=t+(r<t?-1:0);i==="after"&&(l+=1),n.splice(l,0,a),this.columns=n}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((r,i)=>i===e?{...r,...t}:r)}async editScript(e){const t=rn.instance;if(!t)return;const r=this.columns[e];if(!r)return;const i=await t.open(r.script??"",r.label||r.field);i!==null&&this.patchColumn(e,{script:i.trim()?i:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const r=new Set;for(const a of this.columns){const l=a.field.trim();if(!l){this.errorMsg="Column field names cannot be empty.";return}if(r.has(l)){this.errorMsg=`Duplicate column field: ${l}`;return}r.add(l)}const i=await ye(),n=this.columns.map(a=>{const l={field:a.field.trim(),label:a.label.trim()||a.field.trim(),type:a.type};return a.renderer&&(l.renderer=a.renderer),a.script&&(l.script=a.script),a.max!=null&&a.max>0&&(l.max=a.max),a.unique&&(l.unique=!0),a.notnull&&(l.notnull=!0),a.hidden&&(l.hidden=!0),l});if(this.mode==="edit"&&this.editTableId){const a=this.editTableId,l=await i.store.tables.findOne(a),u=new Map((l?.columns??[]).map(F=>[F.field,F])),h=n.filter(F=>{const K=u.get(F.field);return F.unique&&!K?.unique||F.notnull&&!K?.notnull||F.max&&F.max>0&&F.max!==K?.max});if(h.length>0){const F=await i.store.rows(a).find(),K=qf(h,F);if(K.length>0){this.errorMsg=`Cannot save: ${K.length} existing ${K.length===1?"row violates":"rows violate"} the new constraints.
${K.slice(0,5).join(`
`)}${K.length>5?`
…and ${K.length-5} more.`:""}`;return}}const y=new Set(this.columns.map(F=>F.origField).filter(F=>!!F)),k=new Set(n.map(F=>F.field)),v=(l?.columns??[]).map(F=>F.field).filter(F=>!y.has(F)),I=l?.deletedColumns??[],W=[...new Set([...I,...v])].filter(F=>!k.has(F)),z={name:t,columns:n,updatedAt:Date.now()};(W.length>0||I.length>0)&&(z.deletedColumns=W),await i.store.tables.patch(a,z)}else await i.store.tables.insert({id:Wf(),workspaceId:i.workspaceId,name:t,code:Hf(t),columns:n,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return B`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=new Map;for(const t of this.columns){if(!t.unique)continue;const r=new Set,i=new Set;for(const n of this.previewRows){const a=n.data[t.field];a==null||a===""||(r.has(a)&&i.add(a),r.add(a))}e.set(t.field,i)}return B`
      <div class="preview">
        <h3>Live preview — first ${this.previewRows.length} row${this.previewRows.length===1?"":"s"}</h3>
        <table>
          <thead>
            <tr>
              ${this.columns.map(t=>B`<th title=${t.field}>${t.label||t.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.previewRows.map(t=>B`
                <tr>
                  ${this.columns.map(r=>{const i=t.data[r.field],n=Uf(r,i,e.get(r.field));return B`<td
                      class=${n?"violation":""}
                      title=${n??""}
                    >${Nf(i)}</td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}renameDetected(){return this.mode==="edit"&&this.columns.some(e=>e.origField&&e.origField!==e.field.trim())}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return B`
      <dialog @cancel=${this.close} @keydown=${Sn}>
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
          ${this.noticeMsg?B`<div class="notice">${this.noticeMsg}</div>`:""}
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
            ${this.columns.map((r,i)=>{const n=this.dragSrcIdx===i,a=this.dropTargetIdx===i,l=a&&this.dropEdge==="before"?" drop-before":a&&this.dropEdge==="after"?" drop-after":"";return B`
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
                    ${Mf.map(u=>B`<option value=${u} ?selected=${u===r.type}>${u}</option>`)}
                  </select>
                  <select
                    title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                    .value=${r.renderer??""}
                    @change=${u=>{const h=u.target.value;this.patchColumn(i,{renderer:h||void 0})}}
                  >
                    <option value="" ?selected=${!r.renderer}>— none —</option>
                    ${this.rendererOptions.map(u=>B`<option value=${u} ?selected=${u===r.renderer}>${u}</option>`)}
                  </select>
                  ${r.renderer==="script"?B`<button
                        type="button"
                        class="icon-btn"
                        title="Edit JS render(row)"
                        @click=${()=>this.editScript(i)}
                      >
                        <span class="mi sm">edit</span>
                      </button>`:B`<span></span>`}
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

          ${this.renameDetected()?B`<div class="hint">
                Renamed fields will appear empty for existing rows — the row data
                isn't migrated automatically.
              </div>`:""}
          ${this.errorMsg?B`<div class="error">${this.errorMsg}</div>`:""}
          ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};kt.styles=[on,Xt,Je`
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
  `];Mt([H()],kt.prototype,"mode",2);Mt([H()],kt.prototype,"editTableId",2);Mt([H()],kt.prototype,"name",2);Mt([H()],kt.prototype,"columns",2);Mt([H()],kt.prototype,"errorMsg",2);Mt([H()],kt.prototype,"noticeMsg",2);Mt([H()],kt.prototype,"dragSrcIdx",2);Mt([H()],kt.prototype,"dropTargetIdx",2);Mt([H()],kt.prototype,"dropEdge",2);Mt([H()],kt.prototype,"previewRows",2);Mt([H()],kt.prototype,"rendererOptions",2);kt=Mt([nt("new-table-dialog")],kt);function Nf(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function Uf(e,t,r){const i=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&i)return`${e.label}: empty`;if(i)return null;if(e.type==="number"&&typeof t!="number"){const n=Number(t);if(!Number.isFinite(n))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!i){const n=new Date(String(t));if(Number.isNaN(n.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&r?.has(t)?`${e.label}: duplicate`:null}function qf(e,t){const r=[];for(const i of e)if(i.notnull&&t.forEach((n,a)=>{const l=n.data[i.field];(l==null||typeof l=="string"&&l.trim()==="")&&r.push(`Row ${a+1}: ${i.label} is empty.`)}),i.max!=null&&i.max>0&&t.forEach((n,a)=>{const l=n.data[i.field];typeof l=="string"&&l.length>i.max?r.push(`Row ${a+1}: ${i.label} length ${l.length} > max ${i.max}.`):typeof l=="number"&&l>i.max&&r.push(`Row ${a+1}: ${i.label} value ${l} > max ${i.max}.`)}),i.unique){const n=new Map;t.forEach((a,l)=>{const u=a.data[i.field];u==null||u===""||(n.has(u)?r.push(`Row ${l+1}: ${i.label} duplicates row ${n.get(u)+1} ("${String(u)}").`):n.set(u,l))})}return r}function Hf(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Wf(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var Kf=Object.defineProperty,Vf=Object.getOwnPropertyDescriptor,Nt=(e,t,r,i)=>{for(var n=i>1?void 0:i?Vf(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Kf(t,r,n),n};let Et=class extends Ne{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.builtinNames=[],this.optionalBuiltins=[],this.dirtyBuiltins=!1,this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Gt(this.dialogEl,e)}async open(){const e=await ye(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const r=await e.store.plugins.find();this.records=new Map(r.map(a=>[a.url,a]));const i=[],n=[];for(const a of $f){const l=a.meta?.name;if(l)if(a.meta?.optional){const u=this.records.get(bs(l));n.push({name:l,...a.meta?.description?{description:a.meta.description}:{},...a.meta?.author?{author:a.meta.author}:{},enabled:u?.enabled!==!1})}else i.push(l)}this.builtinNames=i,this.optionalBuiltins=n,this.dirtyBuiltins=!1,this.addUrl="",await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(),this.refreshServerRegistry()}async refreshCatalog(){const e=new URL("/plugins/catalog.json",location.origin).toString();try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json(),i=Array.isArray(r.plugins)?r.plugins:[];this.catalog=i.map(n=>({...n,absUrl:new URL(n.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const r=(await(await ye()).store.settings.findOne("server-sync:url"))?.value;if(typeof r!="string"||r.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const n=`${r.replace(/\/+$/,"")}/plugins/registry`;try{const a=await fetch(n,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);const l=await a.json(),u=Array.isArray(l.plugins)?l.plugins:[];this.serverCatalog=u.map(h=>({...h,absUrl:new URL(h.url,n).toString()})),this.serverCatalogError=null}catch(a){this.serverCatalog=[],this.serverCatalogError=a.message}}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await ye()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const r=await ye();await r.store.workspaces.patch(r.workspaceId,{pluginUrls:this.urls}),await r.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const r=await ye(),i=this.records.get(e);await r.store.plugins.upsert({...i??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...i,url:e,enabled:t,lastFetched:i?.lastFetched??0}))}async removePlugin(e){const t=await ye();this.urls=this.urls.filter(r=>r!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const r=await ye(),i=bs(e),n=this.records.get(i);await r.store.plugins.upsert({...n??{url:i,lastFetched:0},url:i,enabled:t,lastFetched:n?.lastFetched??0}),this.optionalBuiltins=this.optionalBuiltins.map(a=>a.name===e?{...a,enabled:t}:a),this.dirtyBuiltins=!0}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await ye();try{const r=await fetch(e.absUrl,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const i=await r.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:i});const n=new Blob([i],{type:"text/javascript"}),a=URL.createObjectURL(n);try{const u=await import(a);await u.init?.(t.api),await u.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(a),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const l=await t.store.plugins.find();this.records=new Map(l.map(u=>[u.url,u])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(r){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${r.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${r.message}`,{kind:"error",title:"Plugin error"})}finally{const r=new Set(this.installing);r.delete(e.absUrl),this.installing=r}}render(){return B`
      <dialog @cancel=${this.close} @keydown=${Sn}>
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
            ${this.catalog.length>0?B`<div class="section-h">Available from this host</div>`:""}
            ${this.catalog.map(e=>{const t=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return B`
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
            ${this.catalogError?B`<div class="meta err">
                  Host catalog unavailable: ${this.catalogError}
                </div>`:""}

            ${this.serverCatalog.length>0||this.serverCatalogError?B`<div class="section-h">From server</div>`:""}
            ${this.serverCatalog.map(e=>{const t=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return B`
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
            ${this.serverCatalogError?B`<div class="meta err">
                  Server registry unavailable: ${this.serverCatalogError}
                </div>`:""}

            ${this.optionalBuiltins.length>0?B`<div class="section-h">Optional built-ins</div>`:""}
            ${this.optionalBuiltins.map(e=>B`
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
            ${this.builtinNames.map(e=>B`
                <div class="row builtin">
                  <span class="mi sm">extension</span>
                  <div>
                    <div>${e}</div>
                    <div class="meta">Built-in</div>
                  </div>
                  <span class="meta">always on</span>
                </div>
              `)}

            ${this.urls.length>0?B`<div class="section-h">Installed (by URL)</div>`:""}
            ${this.urls.map(e=>{const t=this.records.get(e),r=t?.lastError?" error":"",i=t?.lastFetched?new Date(t.lastFetched).toLocaleString():"never";return B`
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
    `}};Et.styles=[on,Xt,Je`
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
    `];Nt([H()],Et.prototype,"urls",2);Nt([H()],Et.prototype,"records",2);Nt([H()],Et.prototype,"addUrl",2);Nt([H()],Et.prototype,"builtinNames",2);Nt([H()],Et.prototype,"optionalBuiltins",2);Nt([H()],Et.prototype,"dirtyBuiltins",2);Nt([H()],Et.prototype,"catalog",2);Nt([H()],Et.prototype,"catalogError",2);Nt([H()],Et.prototype,"serverCatalog",2);Nt([H()],Et.prototype,"serverCatalogError",2);Nt([H()],Et.prototype,"installing",2);Et=Nt([nt("plugin-manager-dialog")],Et);/**
 * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu
 * @version v4.16.1
 * @homepage https://jspanel.de/
 * @license MIT
 * @author Stefan Sträßer - info@jspanel.de
 * @author of dialog extension: Michael Daumling - michael@terrapinlogo.com
 * @github https://github.com/Flyer53/jsPanel4.git
 */let O={version:"4.16.1",date:"2022-11-03 09:18",ajaxAlwaysCallbacks:[],autopositionSpacing:4,closeOnEscape:(()=>{document.addEventListener("keydown",e=>{(e.key==="Escape"||e.code==="Escape"||e.key==="Esc")&&O.getPanels(t=>t.classList.contains("jsPanel")).some(t=>t.options.closeOnEscape?typeof t.options.closeOnEscape=="function"?t.options.closeOnEscape.call(t,t):(t.close(null,!0),!0):!1)},!1)})(),defaults:{boxShadow:3,container:"window",contentSize:{width:"400px",height:"200px"},dragit:{cursor:"move",handles:".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",opacity:.8,disableOnMaximized:!0},header:!0,headerTitle:"jsPanel",headerControls:{size:"md"},iconfont:void 0,maximizedMargin:0,minimizeTo:"default",paneltype:"standard",position:{my:"center",at:"center"},resizeit:{handles:"n, e, s, w, ne, se, sw, nw",minWidth:128,minHeight:38},theme:"default"},defaultAutocloseConfig:{time:"8s",progressbar:!0},defaultSnapConfig:{sensitivity:70,trigger:"panel",active:"both"},extensions:{},globalCallbacks:!1,icons:{close:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>',maximize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>',normalize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>',minimize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>',smallify:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>'},idCounter:0,isIE:document.documentMode||!1,pointerdown:"onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],pointermove:"onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],pointerup:"onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"],polyfills:(()=>{Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e==null)throw new TypeError("Cannot convert first argument to object");let t=Object(e);for(let r=1;r<arguments.length;r++){let i=arguments[r];if(i==null)continue;i=Object(i);let n=Object.keys(Object(i));for(let a=0,l=n.length;a<l;a++){let u=n[a],h=Object.getOwnPropertyDescriptor(i,u);h!==void 0&&h.enumerable&&(t[u]=i[u])}}return t}}),Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),r=t.length,i=new Array(r);r--;)i[r]=[t[r],e[t[r]]];return i}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(let r=0;r<this.length;r++)e.call(t,this[r],r,this)}),(function(e){e.forEach(function(t){t.append=t.append||function(){let r=Array.prototype.slice.call(arguments),i=document.createDocumentFragment();r.forEach(function(n){let a=n instanceof Node;i.appendChild(a?n:document.createTextNode(String(n)))}),this.appendChild(i)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){let t=(this.document||this.ownerDocument).querySelectorAll(e),r,i=this;do for(r=t.length;--r>=0&&t.item(r)!==i;);while(r<0&&(i=i.parentElement));return i}),(function(){if(typeof window.CustomEvent=="function")return!1;function e(t,r){r=r||{bubbles:!1,cancelable:!1,detail:void 0};let i=document.createEvent("CustomEvent");return i.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),i}e.prototype=window.Event.prototype,window.CustomEvent=e})(),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(t===void 0||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var r=t>0?t|0:0;return this.substring(r,r+e.length)===e}}),String.prototype.includes||(String.prototype.includes=function(e,t){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return t===void 0&&(t=0),this.indexOf(e,t)!==-1}),String.prototype.repeat||(String.prototype.repeat=function(e){if(this==null)throw new TypeError("can't convert "+this+" to object");var t=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),t.length==0||e==0)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,r-t.length),t}),Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw new TypeError('"this" is null or not defined');let r=Object(this),i=r.length>>>0;if(i===0)return!1;let n=t|0,a=Math.max(n>=0?n:i-Math.abs(n),0);function l(u,h){return u===h||typeof u=="number"&&typeof h=="number"&&isNaN(u)&&isNaN(h)}for(;a<i;){if(l(r[a],e))return!0;a++}return!1}})})(),ziBase:100,colorFilledLight:.81,colorFilledDark:.08,colorFilled:0,colorBrightnessThreshold:.55,colorNames:{default:"b0bec5",secondary:"b0bec5",primary:"01579b",info:"039be5",success:"2e7d32",warning:"f57f17",danger:"dd2c00",light:"e0e0e0",dark:"263238",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",grey50:"fafafa",grey100:"f5f5f5",grey200:"eeeeee",grey300:"e0e0e0",grey400:"bdbdbd",grey500:"9e9e9e",grey600:"757575",grey700:"616161",grey800:"424242",grey900:"212121",gray50:"fafafa",gray100:"f5f5f5",gray200:"eeeeee",gray300:"e0e0e0",gray400:"bdbdbd",gray500:"9e9e9e",gray600:"757575",gray700:"616161",gray800:"424242",gray900:"212121",bluegrey50:"eceff1",bluegrey100:"CFD8DC",bluegrey200:"B0BEC5",bluegrey300:"90A4AE",bluegrey400:"78909C",bluegrey500:"607D8B",bluegrey600:"546E7A",bluegrey700:"455A64",bluegrey800:"37474F",bluegrey900:"263238",bluegray50:"eceff1",bluegray100:"CFD8DC",bluegray200:"B0BEC5",bluegray300:"90A4AE",bluegray400:"78909C",bluegray500:"607D8B",bluegray600:"546E7A",bluegray700:"455A64",bluegray800:"37474F",bluegray900:"263238",red50:"FFEBEE",red100:"FFCDD2",red200:"EF9A9A",red300:"E57373",red400:"EF5350",red500:"F44336",red600:"E53935",red700:"D32F2F",red800:"C62828",red900:"B71C1C",reda100:"FF8A80",reda200:"FF5252",reda400:"FF1744",reda700:"D50000",pink50:"FCE4EC",pink100:"F8BBD0",pink200:"F48FB1",pink300:"F06292",pink400:"EC407A",pink500:"E91E63",pink600:"D81B60",pink700:"C2185B",pink800:"AD1457",pink900:"880E4F",pinka100:"FF80AB",pinka200:"FF4081",pinka400:"F50057",pinka700:"C51162",purple50:"F3E5F5",purple100:"E1BEE7",purple200:"CE93D8",purple300:"BA68C8",purple400:"AB47BC",purple500:"9C27B0",purple600:"8E24AA",purple700:"7B1FA2",purple800:"6A1B9A",purple900:"4A148C",purplea100:"EA80FC",purplea200:"E040FB",purplea400:"D500F9",purplea700:"AA00FF",deeppurple50:"EDE7F6",deeppurple100:"D1C4E9",deeppurple200:"B39DDB",deeppurple300:"9575CD",deeppurple400:"7E57C2",deeppurple500:"673AB7",deeppurple600:"5E35B1",deeppurple700:"512DA8",deeppurple800:"4527A0",deeppurple900:"311B92",deeppurplea100:"B388FF",deeppurplea200:"7C4DFF",deeppurplea400:"651FFF",deeppurplea700:"6200EA",indigo50:"E8EAF6",indigo100:"C5CAE9",indigo200:"9FA8DA",indigo300:"7986CB",indigo400:"5C6BC0",indigo500:"3F51B5",indigo600:"3949AB",indigo700:"303F9F",indigo800:"283593",indigo900:"1A237E",indigoa100:"8C9EFF",indigoa200:"536DFE",indigoa400:"3D5AFE",indigoa700:"304FFE",blue50:"E3F2FD",blue100:"BBDEFB",blue200:"90CAF9",blue300:"64B5F6",blue400:"42A5F5",blue500:"2196F3",blue600:"1E88E5",blue700:"1976D2",blue800:"1565C0",blue900:"0D47A1",bluea100:"82B1FF",bluea200:"448AFF",bluea400:"2979FF",bluea700:"2962FF",lightblue50:"E1F5FE",lightblue100:"B3E5FC",lightblue200:"81D4FA",lightblue300:"4FC3F7",lightblue400:"29B6F6",lightblue500:"03A9F4",lightblue600:"039BE5",lightblue700:"0288D1",lightblue800:"0277BD",lightblue900:"01579B",lightbluea100:"80D8FF",lightbluea200:"40C4FF",lightbluea400:"00B0FF",lightbluea700:"0091EA",cyan50:"E0F7FA",cyan100:"B2EBF2",cyan200:"80DEEA",cyan300:"4DD0E1",cyan400:"26C6DA",cyan500:"00BCD4",cyan600:"00ACC1",cyan700:"0097A7",cyan800:"00838F",cyan900:"006064",cyana100:"84FFFF",cyana200:"18FFFF",cyana400:"00E5FF",cyana700:"00B8D4",teal50:"E0F2F1",teal100:"B2DFDB",teal200:"80CBC4",teal300:"4DB6AC",teal400:"26A69A",teal500:"009688",teal600:"00897B",teal700:"00796B",teal800:"00695C",teal900:"004D40",teala100:"A7FFEB",teala200:"64FFDA",teala400:"1DE9B6",teala700:"00BFA5",green50:"E8F5E9",green100:"C8E6C9",green200:"A5D6A7",green300:"81C784",green400:"66BB6A",green500:"4CAF50",green600:"43A047",green700:"388E3C",green800:"2E7D32",green900:"1B5E20",greena100:"B9F6CA",greena200:"69F0AE",greena400:"00E676",greena700:"00C853",lightgreen50:"F1F8E9",lightgreen100:"DCEDC8",lightgreen200:"C5E1A5",lightgreen300:"AED581",lightgreen400:"9CCC65",lightgreen500:"8BC34A",lightgreen600:"7CB342",lightgreen700:"689F38",lightgreen800:"558B2F",lightgreen900:"33691E",lightgreena100:"CCFF90",lightgreena200:"B2FF59",lightgreena400:"76FF03",lightgreena700:"64DD17",lime50:"F9FBE7",lime100:"F0F4C3",lime200:"E6EE9C",lime300:"DCE775",lime400:"D4E157",lime500:"CDDC39",lime600:"C0CA33",lime700:"AFB42B",lime800:"9E9D24",lime900:"827717",limea100:"F4FF81",limea200:"EEFF41",limea400:"C6FF00",limea700:"AEEA00",yellow50:"FFFDE7",yellow100:"FFF9C4",yellow200:"FFF59D",yellow300:"FFF176",yellow400:"FFEE58",yellow500:"FFEB3B",yellow600:"FDD835",yellow700:"FBC02D",yellow800:"F9A825",yellow900:"F57F17",yellowa100:"FFFF8D",yellowa200:"FFFF00",yellowa400:"FFEA00",yellowa700:"FFD600",amber50:"FFF8E1",amber100:"FFECB3",amber200:"FFE082",amber300:"FFD54F",amber400:"FFCA28",amber500:"FFC107",amber600:"FFB300",amber700:"FFA000",amber800:"FF8F00",amber900:"FF6F00",ambera100:"FFE57F",ambera200:"FFD740",ambera400:"FFC400",ambera700:"FFAB00",orange50:"FFF3E0",orange100:"FFE0B2",orange200:"FFCC80",orange300:"FFB74D",orange400:"FFA726",orange500:"FF9800",orange600:"FB8C00",orange700:"F57C00",orange800:"EF6C00",orange900:"E65100",orangea100:"FFD180",orangea200:"FFAB40",orangea400:"FF9100",orangea700:"FF6D00",deeporange50:"FBE9E7",deeporange100:"FFCCBC",deeporange200:"FFAB91",deeporange300:"FF8A65",deeporange400:"FF7043",deeporange500:"FF5722",deeporange600:"F4511E",deeporange700:"E64A19",deeporange800:"D84315",deeporange900:"BF360C",deeporangea100:"FF9E80",deeporangea200:"FF6E40",deeporangea400:"FF3D00",deeporangea700:"DD2C00",brown50:"EFEBE9",brown100:"D7CCC8",brown200:"BCAAA4",brown300:"A1887F",brown400:"8D6E63",brown500:"795548",brown600:"6D4C41",brown700:"5D4037",brown800:"4E342E",brown900:"3E2723","mdb-default":"2BBBAD","mdb-default-dark":"00695c","mdb-primary":"4285F4","mdb-primary-dark":"0d47a1","mdb-secondary":"aa66cc","mdb-secondary-dark":"9933CC","mdb-danger":"ff4444","mdb-danger-dark":"CC0000","mdb-warning":"ffbb33","mdb-warning-dark":"FF8800","mdb-success":"00C851","mdb-success-dark":"007E33","mdb-info":"33b5e5","mdb-info-dark":"0099CC","mdb-elegant":"2E2E2E","mdb-elegant-dark":"212121","mdb-stylish":"4B515D","mdb-stylish-dark":"3E4551","mdb-unique":"3F729B","mdb-unique-dark":"1C2331","mdb-special":"37474F","mdb-special-dark":"263238"},errorReporting:1,modifier:!1,helper:(()=>{document.addEventListener("keydown",e=>O.modifier=e),document.addEventListener("keyup",()=>O.modifier=!1)})(),usePointerEvents(e=!0){e?(this.pointerdown="onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"]):(this.pointerdown="ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="ontouchend"in window?["touchend","mouseup"]:["mouseup"])},pOcontainer(e){if(e==="window")return document.body;if(typeof e=="string"){let t=document.querySelectorAll(e);return t.length&&t.length>0?t:!1}else{if(e.nodeType===1)return e;if(e.length)return e[0]}return!1},pOcontainment(e){let t=e;if(typeof e=="function"&&(t=e()),typeof t=="number")return[t,t,t,t];if(Array.isArray(t)){if(t.length===1)return[t[0],t[0],t[0],t[0]];if(t.length===2)return t.concat(t);t.length===3&&(t[3]=t[1])}return t},pOsize(e,t){let r=t||this.defaults.contentSize;const i=e.parentElement;if(typeof r=="string"){const n=r.trim().split(" ");r={},r.width=n[0],n.length===2?r.height=n[1]:r.height=n[0]}else r.width&&!r.height?r.height=r.width:r.height&&!r.width&&(r.width=r.height);if(String(r.width).match(/^[\d.]+$/gi))r.width+="px";else if(typeof r.width=="string"&&r.width.endsWith("%"))if(i===document.body)r.width=window.innerWidth*(parseFloat(r.width)/100)+"px";else{const n=window.getComputedStyle(i),a=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth);r.width=(parseFloat(n.width)-a)*(parseFloat(r.width)/100)+"px"}else typeof r.width=="function"&&(r.width=r.width.call(e,e),(typeof r.width=="number"||typeof r.width=="string"&&r.width.match(/^[\d.]+$/gi))&&(r.width+="px"));if(String(r.height).match(/^[\d.]+$/gi))r.height+="px";else if(typeof r.height=="string"&&r.height.endsWith("%"))if(i===document.body)r.height=window.innerHeight*(parseFloat(r.height)/100)+"px";else{const n=window.getComputedStyle(i),a=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth);r.height=(parseFloat(n.height)-a)*(parseFloat(r.height)/100)+"px"}else typeof r.height=="function"&&(r.height=r.height.call(e,e),(typeof r.height=="number"||typeof r.height=="string"&&r.height.match(/^[\d.]+$/gi))&&(r.height+="px"));return r},pOborder(e){let t=[],r=e.trim().replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," ").split(" ");return r.forEach((i,n)=>{(i.startsWith("--")||i.startsWith("var"))&&(r[n]=O.getCssVariableValue(i))}),r.forEach(i=>{O.colorNames[i]?t[2]="#"+O.colorNames[i]:i.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/)?t[1]=i:i.match(/(thin|medium|thick)|(\d*\.?\d*(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vmax|vmin|vb|vi|px|cm|mm|Q|in|pc|pt))/)?t[0]=i:t[2]=i}),t[0]||(t[0]="medium"),t[1]||(t[1]="solid"),t[2]||(t[2]=""),t},pOheaderControls(e){if(typeof e=="string"){let t={},r=e.toLowerCase(),i=r.match(/xl|lg|md|sm|xs/),n=r.match(/closeonly|none/);return i&&(t.size=i[0]),n&&(t=Object.assign({},t,{maximize:"remove",normalize:"remove",minimize:"remove",smallify:"remove"}),n[0]==="none"&&(t.close="remove")),Object.assign({},this.defaults.headerControls,t)}else return Object.assign({},this.defaults.headerControls,e)},pOtheme(e){e=e.trim();let t,r="";if(e.match(/^(rgb|hsl|var)/)){let i=e.indexOf(")");t=e.slice(0,i+1).replace(/\s+/g,""),t.startsWith("var")&&(t=O.getCssVariableValue(t)),r=e.slice(i+1,e.length).trim()}else if(e.match(/^(#|\w|--)/)){let i=e.indexOf(" ");i>0?(t=e.slice(0,i+1).replace(/\s+/g,""),r=e.slice(i+1,e.length).trim()):t=e,t.startsWith("--")&&(t=O.getCssVariableValue(t))}if(t.match(/^([\da-f]{3}|[\da-f]{6})$/gi)&&(t="#"+t),r.startsWith("fillcolor")){let i=r.indexOf(" ");r=r.slice(i+1,r.length).trim().replace(/\s+/g,""),r.match(/^([\da-f]{3}|[\da-f]{6})$/gi)?r="#"+r:O.colorNames[r]?r="#"+O.colorNames[r]:r.match(/^(--|var)/)?r=O.getCssVariableValue(r):r="#fff"}return{color:t,colors:!1,filling:r}},color(e){let t=e.toLowerCase(),r,i,n,a,l,u,h,y,k,v={};const I=/^#?([\da-f]{3}|[\da-f]{6})$/gi,W=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,z=/^hsla?\((\d{1,3}),(\d{1,3}%),(\d{1,3}%),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,F=this.colorNames;return F[t]&&(t=F[t]),t.match(I)!==null?(t=t.replace("#",""),t.length%2===1?(r=t.slice(0,1).repeat(2),i=t.slice(1,2).repeat(2),n=t.slice(2,3).repeat(2),v.rgb={r:parseInt(r,16),g:parseInt(i,16),b:parseInt(n,16)},v.hex=`#${r}${i}${n}`):(v.rgb={r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)},v.hex=`#${t}`),k=this.rgbToHsl(v.rgb.r,v.rgb.g,v.rgb.b),v.hsl=k,v.rgb.css=`rgb(${v.rgb.r},${v.rgb.g},${v.rgb.b})`):t.match(W)?(h=W.exec(t),v.rgb={css:t,r:h[1],g:h[2],b:h[3]},v.hex=this.rgbToHex(h[1],h[2],h[3]),k=this.rgbToHsl(h[1],h[2],h[3]),v.hsl=k):t.match(z)?(h=z.exec(t),a=h[1]/360,l=h[2].slice(0,h[2].length-1)/100,u=h[3].slice(0,h[3].length-1)/100,y=this.hslToRgb(a,l,u),v.rgb={css:`rgb(${y[0]},${y[1]},${y[2]})`,r:y[0],g:y[1],b:y[2]},v.hex=this.rgbToHex(v.rgb.r,v.rgb.g,v.rgb.b),v.hsl={css:`hsl(${h[1]},${h[2]},${h[3]})`,h:h[1],s:h[2],l:h[3]}):(v.hex="#f5f5f5",v.rgb={css:"rgb(245,245,245)",r:245,g:245,b:245},v.hsl={css:"hsl(0,0%,96%)",h:0,s:"0%",l:"96%"}),v},calcColors(e){const t=this.colorBrightnessThreshold,r=this.color(e),i=this.lighten(e,this.colorFilledLight),n=this.darken(e,this.colorFilled),a=this.perceivedBrightness(e)<=t?"#ffffff":"#000000",l=this.perceivedBrightness(i)<=t?"#ffffff":"#000000",u=this.perceivedBrightness(n)<=t?"#ffffff":"#000000",h=this.lighten(e,this.colorFilledDark),y=this.perceivedBrightness(h)<=t?"#ffffff":"#000000";return[r.hsl.css,i,n,a,l,u,h,y]},darken(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i-i*t)+"%";return`hsl(${r.h},${r.s},${n})`},lighten(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i+(100-i)*t)+"%";return`hsl(${r.h},${r.s},${n})`},hslToRgb(e,t,r){let i,n,a;if(t===0)i=n=a=r;else{let l=(y,k,v)=>(v<0&&(v+=1),v>1&&(v-=1),v<.16666666666666666?y+(k-y)*6*v:v<.5?k:v<.6666666666666666?y+(k-y)*(.6666666666666666-v)*6:y),u=r<.5?r*(1+t):r+t-r*t,h=2*r-u;i=l(h,u,e+1/3),n=l(h,u,e),a=l(h,u,e-1/3)}return[Math.round(i*255),Math.round(n*255),Math.round(a*255)]},rgbToHsl(e,t,r){e/=255,t/=255,r/=255;let i=Math.max(e,t,r),n=Math.min(e,t,r),a,l,u=(i+n)/2;if(i===n)a=l=0;else{let h=i-n;switch(l=u>.5?h/(2-i-n):h/(i+n),i){case e:a=(t-r)/h+(t<r?6:0);break;case t:a=(r-e)/h+2;break;case r:a=(e-t)/h+4;break}a/=6}return a=Math.round(a*360),l=Math.round(l*100)+"%",u=Math.round(u*100)+"%",{css:"hsl("+a+","+l+","+u+")",h:a,s:l,l:u}},rgbToHex(e,t,r){let i=Number(e).toString(16),n=Number(t).toString(16),a=Number(r).toString(16);return i.length===1&&(i=`0${i}`),n.length===1&&(n=`0${n}`),a.length===1&&(a=`0${a}`),`#${i}${n}${a}`},perceivedBrightness(e){const t=this.color(e).rgb;return t.r/255*.2126+t.g/255*.7152+t.b/255*.0722},pOposition(e){let t={},r=e.trim().split(/\s+/),i=r.filter(l=>l.match(/^(down|right|up|left)$/i));i.length&&(t.autoposition=i[0],r.splice(r.indexOf(i[0]),1));let n=r.filter(l=>l.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i));n.length?(t.my=n[0],t.at=n[1]||n[0],r.splice(r.indexOf(n[0]),1),n[1]&&r.splice(r.indexOf(n[1]),1)):(t.my="center",t.at="center");let a=r.filter(l=>l.match(/^[+-]?\d*\.?\d+[a-z%]*$/i));return a.length&&(t.offsetX=a[0].match(/^[+-]?\d*\.?\d+$/i)?`${a[0]}px`:a[0],a[1]?t.offsetY=a[1].match(/^[+-]?\d*\.?\d+$/i)?`${a[1]}px`:a[1]:t.offsetY=t.offsetX,r.splice(r.indexOf(a[0]),1),a[1]&&r.splice(r.indexOf(a[1]),1)),r.length&&(t.of=r.join(" ")),t},position(e,t){if(!t)return e.style.opacity=1,e;typeof t=="string"?t=Object.assign({},this.defaults.position,this.pOposition(t)):t=Object.assign({},this.defaults.position,t),["my","at","of"].forEach(F=>{typeof t[F]=="function"&&(t[F]=t[F].call(e,e))}),e.options.container==="window"&&(e.style.position="fixed"),typeof e=="string"?e=document.querySelector(e):Object.getPrototypeOf(e).jquery&&(e=e[0]);const r=e.options.container==="window"?"window":e.parentElement,i=e.getBoundingClientRect(),n=e.parentElement.getBoundingClientRect(),a=r==="window"?{left:0,top:0,width:document.documentElement.clientWidth,height:window.innerHeight}:{width:n.width,height:n.height,left:n.left,top:n.top},l=r==="window"?{x:1,y:1}:{x:a.width/r.offsetWidth,y:a.height/r.offsetHeight},u=r==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:window.getComputedStyle(r);a.width-=(parseFloat(u.borderLeftWidth)+parseFloat(u.borderRightWidth))*l.x,a.height-=(parseFloat(u.borderTopWidth)+parseFloat(u.borderBottomWidth))*l.y;let h;t.of?typeof t.of=="string"?h=t.of==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:document.querySelector(t.of).getBoundingClientRect():Object.getPrototypeOf(t.of).jquery?h=t.of[0].getBoundingClientRect():h=t.of.getBoundingClientRect():h=a;let y=this.getScrollbarWidth(document.body),k=this.getScrollbarWidth(e.parentElement),v="0px";t.my.startsWith("left-")?t.at.startsWith("left-")?t.of?v=h.left-a.left-parseFloat(u.borderLeftWidth)+"px":v="0px":t.at.startsWith("center")?t.of?v=h.left-a.left-parseFloat(u.borderLeftWidth)+h.width/2+"px":v=a.width/2+"px":t.at.startsWith("right-")&&(t.of?v=h.left-a.left-parseFloat(u.borderLeftWidth)+h.width+"px":v=a.width+"px"):t.my.startsWith("center")?t.at.startsWith("left-")?t.of?v=h.left-a.left-parseFloat(u.borderLeftWidth)-i.width/2+"px":v=-i.width/2+"px":t.at.startsWith("center")?t.of?v=h.left-a.left-parseFloat(u.borderLeftWidth)-(i.width-h.width)/2+"px":v=a.width/2-i.width/2+"px":t.at.startsWith("right-")&&(t.of?v=h.left-a.left-parseFloat(u.borderLeftWidth)+(h.width-i.width/2)+"px":v=a.width-i.width/2+"px"):t.my.startsWith("right-")&&(t.at.startsWith("left-")?t.of?v=h.left-a.left-parseFloat(u.borderLeftWidth)-i.width+"px":v=-i.width+"px":t.at.startsWith("center")?t.of?v=h.left-a.left-parseFloat(u.borderLeftWidth)-i.width+h.width/2+"px":v=a.width/2-i.width+"px":t.at.startsWith("right-")&&(t.of?v=h.left-a.left-parseFloat(u.borderLeftWidth)+h.width-i.width+"px":v=a.width-i.width+"px",r!=="window"&&(v=parseFloat(v)-k.y+"px")));let I="0px";t.my.endsWith("-top")?t.at.endsWith("-top")?t.of?I=h.top-a.top-parseFloat(u.borderTopWidth)+"px":I="0px":t.at.endsWith("center")?t.of?I=h.top-a.top-parseFloat(u.borderTopWidth)+h.height/2+"px":I=a.height/2+"px":t.at.endsWith("-bottom")&&(t.of?I=h.top-a.top-parseFloat(u.borderTopWidth)+h.height+"px":I=a.height+"px"):t.my.endsWith("center")?t.at.endsWith("-top")?t.of?I=h.top-a.top-parseFloat(u.borderTopWidth)-i.height/2+"px":I=-i.height/2+"px":t.at.endsWith("center")?t.of?I=h.top-a.top-parseFloat(u.borderTopWidth)-i.height/2+h.height/2+"px":I=a.height/2-i.height/2+"px":t.at.endsWith("-bottom")&&(t.of?I=h.top-a.top-parseFloat(u.borderTopWidth)-i.height/2+h.height+"px":I=a.height-i.height/2+"px"):t.my.endsWith("-bottom")&&(t.at.endsWith("-top")?t.of?I=h.top-a.top-parseFloat(u.borderTopWidth)-i.height+"px":I=-i.height+"px":t.at.endsWith("center")?t.of?I=h.top-a.top-parseFloat(u.borderTopWidth)-i.height+h.height/2+"px":I=a.height/2-i.height+"px":t.at.endsWith("-bottom")&&(t.of?I=h.top-a.top-parseFloat(u.borderTopWidth)-i.height+h.height+"px":I=a.height-i.height+"px",r!=="window"?I=parseFloat(I)-k.x+"px":I=parseFloat(I)-y.x+"px")),e.style.left=l.x===1?v:parseFloat(v)/l.x+"px",e.style.top=l.y===1?I:parseFloat(I)/l.y+"px";let W=getComputedStyle(e),z={left:W.left,top:W.top};return t.autoposition&&t.my===t.at&&["left-top","center-top","right-top","left-bottom","center-bottom","right-bottom"].indexOf(t.my)>=0&&(z=this.applyPositionAutopos(e,z,t)),(t.offsetX||t.offsetY)&&(z=this.applyPositionOffset(e,z,t)),(t.minLeft||t.minTop||t.maxLeft||t.maxTop)&&(z=this.applyPositionMinMax(e,z,t)),t.modify&&(z=this.applyPositionModify(e,z,t)),typeof e.options.opacity=="number"?e.style.opacity=e.options.opacity:e.style.opacity=1,e},applyPositionAutopos(e,t,r){const i=`${r.my}-${r.autoposition.toLowerCase()}`;e.classList.add(i);const n=Array.prototype.slice.call(document.querySelectorAll(`.${i}`)),a=n.indexOf(e);if(n.length>1){switch(r.autoposition){case"down":n.forEach((l,u)=>{u>0&&u<=a&&(t.top=parseFloat(t.top)+n[--u].getBoundingClientRect().height+O.autopositionSpacing+"px")});break;case"up":n.forEach((l,u)=>{u>0&&u<=a&&(t.top=parseFloat(t.top)-n[--u].getBoundingClientRect().height-O.autopositionSpacing+"px")});break;case"right":n.forEach((l,u)=>{u>0&&u<=a&&(t.left=parseFloat(t.left)+n[--u].getBoundingClientRect().width+O.autopositionSpacing+"px")});break;case"left":n.forEach((l,u)=>{u>0&&u<=a&&(t.left=parseFloat(t.left)-n[--u].getBoundingClientRect().width-O.autopositionSpacing+"px")});break}e.style.left=t.left,e.style.top=t.top}return{left:t.left,top:t.top}},applyPositionOffset(e,t,r){["offsetX","offsetY"].forEach(n=>{r[n]?(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),isNaN(r[n])===!1&&(r[n]=`${r[n]}px`)):r[n]="0px"}),e.style.left=`calc(${e.style.left} + ${r.offsetX})`,e.style.top=`calc(${e.style.top} + ${r.offsetY})`;const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionMinMax(e,t,r){if(["minLeft","minTop","maxLeft","maxTop"].forEach(n=>{r[n]&&(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),(Number.isInteger(r[n])||r[n].match(/^\d+$/))&&(r[n]=`${r[n]}px`))}),r.minLeft){e.style.left=r.minLeft;let n=getComputedStyle(e).left;parseFloat(n)<parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.minTop){e.style.top=r.minTop;let n=getComputedStyle(e).top;parseFloat(n)<parseFloat(t.top)?e.style.top=t.top:t.top=n}if(r.maxLeft){e.style.left=r.maxLeft;let n=getComputedStyle(e).left;parseFloat(n)>parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.maxTop){e.style.top=r.maxTop;let n=getComputedStyle(e).top;parseFloat(n)>parseFloat(t.top)?e.style.top=t.top:t.top=n}const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionModify(e,t,r){if(r.modify&&typeof r.modify=="function"){const n=r.modify.call(t,t,r);e.style.left=Number.isInteger(n.left)||n.left.match(/^\d+$/)?`${n.left}px`:n.left,e.style.top=Number.isInteger(n.top)||n.top.match(/^\d+$/)?`${n.top}px`:n.top}const i=getComputedStyle(e);return{left:i.left,top:i.top}},autopositionRemaining(e){let t,r=e.options.container;["left-top-down","left-top-right","center-top-down","right-top-down","right-top-left","left-bottom-up","left-bottom-right","center-bottom-up","right-bottom-up","right-bottom-left"].forEach(i=>{e.classList.contains(i)&&(t=i)}),t&&(r==="window"?document.body:typeof r=="string"?document.querySelector(r):r).querySelectorAll(`.${t}`).forEach(n=>n.reposition())},getThemeDetails(e){const t=this.pOtheme(e);if(t.color.startsWith("bootstrap-")){let r=t.color.indexOf("-"),i=document.createElement("button");i.className="btn btn"+t.color.slice(r),document.body.appendChild(i),t.color=getComputedStyle(i).backgroundColor.replace(/\s+/gi,""),document.body.removeChild(i),i=void 0}return t.colors=this.calcColors(t.color),t},clearTheme(e,t){return e.content.classList.remove("jsPanel-content-filled","jsPanel-content-filledlight"),e.header.classList.remove("jsPanel-hdr-light"),e.header.classList.remove("jsPanel-hdr-dark"),e.style.backgroundColor="",this.setStyles(e.headertoolbar,{boxShadow:"",width:"",marginLeft:"",borderTopColor:"transparent"}),this.setStyles(e.content,{background:"",borderTopColor:"transparent"}),e.header.style.background="",Array.prototype.slice.call(e.controlbar.querySelectorAll(".jsPanel-icon")).concat([e.headerlogo,e.headertitle,e.headertoolbar,e.content]).forEach(r=>r.style.color=""),t&&t.call(e,e),e},applyColorTheme(e,t){if(e.style.backgroundColor=t.colors[0],e.header.style.backgroundColor=t.colors[0],e.header.style.color=t.colors[3],[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(r=>e.querySelector(r).style.color=t.colors[3]),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(r=>r.style.color=t.colors[3]),typeof e.options.theme=="string"&&t.filling==="filled"&&(e.content.style.borderTop=t.colors[3]==="#000000"?"1px solid rgba(0,0,0,0.15)":"1px solid rgba(255,255,255,0.15)"),t.colors[3]==="#000000"?e.header.classList.add("jsPanel-hdr-light"):e.header.classList.add("jsPanel-hdr-dark"),t.filling)switch(t.filling){case"filled":this.setStyles(e.content,{backgroundColor:t.colors[2],color:t.colors[3]});break;case"filledlight":e.content.style.backgroundColor=t.colors[1];break;case"filleddark":this.setStyles(e.content,{backgroundColor:t.colors[6],color:t.colors[7]});break;default:e.content.style.backgroundColor=t.filling,e.content.style.color=this.perceivedBrightness(t.filling)<=this.colorBrightnessThreshold?"#fff":"#000"}return e},applyCustomTheme(e,t){let r={bgPanel:"#ffffff",bgContent:"#ffffff",bgFooter:"#f5f5f5",colorHeader:"#000000",colorContent:"#000000",colorFooter:"#000000",border:void 0,borderRadius:void 0},i=typeof t=="object"?Object.assign(r,t):r,n=i.bgPanel,a=i.bgContent,l=i.colorHeader,u=i.colorContent,h=i.bgFooter,y=i.colorFooter;return this.colorNames[n]?e.style.background="#"+this.colorNames[n]:e.style.background=this.getCssVariableValue(n),this.colorNames[l]&&(l="#"+this.colorNames[l]),[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(I=>e.querySelector(I).style.color=this.getCssVariableValue(l)),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(I=>I.style.color=this.getCssVariableValue(l)),this.colorNames[a]?e.content.style.background="#"+this.colorNames[a]:e.content.style.background=this.getCssVariableValue(a),this.colorNames[u]?e.content.style.color="#"+this.colorNames[u]:e.content.style.color=this.getCssVariableValue(u),this.perceivedBrightness(l)>this.colorBrightnessThreshold?e.header.classList.add("jsPanel-hdr-dark"):e.header.classList.add("jsPanel-hdr-light"),this.perceivedBrightness(u)>this.colorBrightnessThreshold?e.content.style.borderTop="1px solid rgba(255,255,255,0.15)":e.content.style.borderTop="1px solid rgba(0,0,0,0.15)",this.colorNames[h]?e.footer.style.background="#"+this.colorNames[h]:e.footer.style.background=this.getCssVariableValue(h),this.colorNames[y]?e.footer.style.color="#"+this.colorNames[y]:e.footer.style.color=this.getCssVariableValue(y),i.border&&e.setBorder(i.border),i.borderRadius&&(e.options.borderRadius=void 0,e.setBorderRadius(i.borderRadius)),e},getCssVariableValue(e){if(e.startsWith("--"))return getComputedStyle(document.documentElement).getPropertyValue(e).replace(/\s+/g,"");if(e.startsWith("var")){let t=e.slice(e.indexOf("(")+1,e.indexOf(")"));return getComputedStyle(document.documentElement).getPropertyValue(t).replace(/\s+/g,"")}return e},getScrollbarWidth(e=document.body){if(e===document.body)return{y:window.innerWidth-document.documentElement.clientWidth,x:window.innerHeight-document.documentElement.clientHeight};{let t=getComputedStyle(e);return{y:e.offsetWidth-e.clientWidth-parseFloat(t.borderRightWidth)-parseFloat(t.borderLeftWidth),x:e.offsetHeight-e.clientHeight-parseFloat(t.borderBottomWidth)-parseFloat(t.borderTopWidth)}}},remClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.remove(r)),e},setClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.add(r)),e},setStyles(e,t){for(const[r,i]of Object.entries(t))e.style[r]=typeof i=="string"?O.getCssVariableValue(i):i;return e},setStyle(e,t){return this.setStyles.call(e,e,t)},strToHtml(e){return document.createRange().createContextualFragment(e)},toggleClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.contains(r)?e.classList.remove(r):e.classList.add(r)),e},emptyNode(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e},addScript(e,t="application/javascript",r){if(!document.querySelector(`script[src="${e}"]`)){const i=document.createElement("script");i.src=e,i.type=t,document.head.appendChild(i),r&&(i.onload=r)}},ajax(e,t){let r,i,n=new XMLHttpRequest;const a={method:"GET",async:!0,user:"",pwd:"",done:function(){if(t){let l=O.strToHtml(this.responseText);r.urlSelector&&(l=l.querySelector(r.urlSelector)),t.contentRemove(),t.content.append(l)}},autoresize:!0,autoreposition:!0};if(t&&typeof e=="string")r=Object.assign({},a,{url:e});else if(typeof e=="object"&&e.url)r=Object.assign({},a,e),r.url=e.url,r.async===!1&&(r.timeout=0,r.withCredentials&&(r.withCredentials=void 0),r.responseType&&(r.responseType=void 0));else{this.errorReporting&&O.errorpanel("XMLHttpRequest seems to miss the <mark>url</mark> parameter!");return}i=r.url.trim().split(/\s+/),r.url=encodeURI(i[0]),i.length>1&&(i.shift(),r.urlSelector=i.join(" ")),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?t?r.done.call(n,n,t):r.done.call(n,n):r.fail&&(t?r.fail.call(n,n,t):r.fail.call(n,n)),r.always&&(t?r.always.call(n,n,t):r.always.call(n,n)),t&&(r.autoresize||r.autoreposition)&&O.ajaxAutoresizeAutoreposition(t,r),O.ajaxAlwaysCallbacks.length&&O.ajaxAlwaysCallbacks.forEach(l=>{t?l.call(n,n,t):l.call(n,n)}))},n.open(r.method,r.url,r.async,r.user,r.pwd),n.timeout=r.timeout||0,r.withCredentials&&(n.withCredentials=r.withCredentials),r.responseType&&(n.responseType=r.responseType),r.beforeSend&&(t?r.beforeSend.call(n,n,t):r.beforeSend.call(n,n)),r.data?n.send(r.data):n.send(null)},fetch(e,t){let r;const i={bodyMethod:"text",autoresize:!0,autoreposition:!0,done:function(a,l){if(l){let u=O.strToHtml(a);l.contentRemove(),l.content.append(u)}}};if(t&&typeof e=="string")r=Object.assign({},i,{resource:encodeURI(e)});else if(typeof e=="object"&&e.resource)r=Object.assign({},i,e),r.resource=encodeURI(e.resource);else{this.errorReporting&&O.errorpanel("Fetch Request seems to miss the <mark>resource</mark> parameter!");return}const n=r.fetchInit||{};r.beforeSend&&(t?r.beforeSend.call(e,e,t):r.beforeSend.call(e,e)),fetch(r.resource,n).then(a=>{if(a.ok)return a[r.bodyMethod]()}).then(a=>{t?r.done.call(a,a,t):r.done.call(a,a),t&&(r.autoresize||r.autoreposition)&&O.ajaxAutoresizeAutoreposition(t,r)})},ajaxAutoresizeAutoreposition(e,t){const r=e.options.contentSize;if(typeof r=="string"&&r.match(/auto/i)){const i=r.split(" "),n=Object.assign({},{width:i[0],height:i[1]});t.autoresize&&e.resize(n),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}else if(typeof r=="object"&&(r.width==="auto"||r.height==="auto")){const i=Object.assign({},r);t.autoresize&&e.resize(i),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}},createPanelTemplate(e=!0){const t=document.createElement("div");return t.className="jsPanel",t.style.left="0",t.style.top="0",e&&["close","maximize","normalize","minimize","smallify"].forEach(r=>{t.setAttribute(`data-btn${r}`,"enabled")}),t.innerHTML=`<div class="jsPanel-hdr">
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
                            </div>`,e},createSnapArea(e,t,r){const i=document.createElement("div"),n=e.parentElement;i.className=`jsPanel-snap-area jsPanel-snap-area-${t}`,t==="lt"||t==="rt"||t==="rb"||t==="lb"?(i.style.width=r+"px",i.style.height=r+"px"):t==="ct"||t==="cb"?i.style.height=r+"px":(t==="lc"||t==="rc")&&(i.style.width=r+"px"),n!==document.body&&(i.style.position="absolute"),document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${t}`)||e.parentElement.appendChild(i)},removeSnapAreas(){document.querySelectorAll(".jsPanel-snap-area").forEach(e=>e.parentElement.removeChild(e))},extend(e){if(Object.prototype.toString.call(e)==="[object Object]")for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this.extensions[t]=e[t])},getPanels(e=function(){return this.classList.contains("jsPanel-standard")}){return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(t=>e.call(t,t)).sort((t,r)=>r.style.zIndex-t.style.zIndex)},processCallbacks(e,t,r="some",i,n){if(typeof t=="function"&&(t=[t]),r)return t[r](a=>a.call(e,e,i,n));t.forEach(a=>a.call(e,e,i,n))},resetZi(){this.zi=((e=O.ziBase)=>{let t=e;return{next:()=>t++}})(),Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((e,t)=>e.style.zIndex-t.style.zIndex).forEach(e=>e.style.zIndex=O.zi.next())},errorpanel(e){this.create({paneltype:"error",dragit:!1,resizeit:!1,theme:{bgPanel:"white",bgContent:"white",colorHeader:"rebeccapurple",colorContent:"#333333",border:"2px solid rebeccapurple"},borderRadius:".33rem",headerControls:"closeonly xs",headerTitle:"&#9888; jsPanel Error",contentSize:{width:"50%",height:"auto"},position:"center-top 0 5 down",animateIn:"jsPanelFadeIn",content:`<div class="jsPanel-error-content-separator"></div><p>${e}</p>`})},create(e={},t){O.zi||(O.zi=((m=O.ziBase)=>{let w=m;return{next:()=>w++}})()),e.config?(e=Object.assign({},this.defaults,e.config,e),delete e.config):e=Object.assign({},this.defaults,e),e.id?typeof e.id=="function"&&(e.id=e.id()):e.id=`jsPanel-${O.idCounter+=1}`;const r=document.getElementById(e.id);if(r!==null){if(r.classList.contains("jsPanel")&&r.front(),this.errorReporting){let m=`&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${e.id}</mark> already exists in the document.`;O.errorpanel(m)}return!1}let i=this.pOcontainer(e.container);if(typeof i=="object"&&i.length&&i.length>0&&(i=i[0]),!i)return this.errorReporting&&O.errorpanel("&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist"),!1;["onbeforeclose","onbeforemaximize","onbeforeminimize","onbeforenormalize","onbeforesmallify","onbeforeunsmallify","onclosed","onfronted","onmaximized","onminimized","onnormalized","onsmallified","onstatuschange","onunsmallified"].forEach(m=>{e[m]?typeof e[m]=="function"&&(e[m]=[e[m]]):e[m]=[]});const n=e.template||this.createPanelTemplate();n.options=e,n.closetimer=void 0,n.status="initialized",n.currentData={},n.header=n.querySelector(".jsPanel-hdr"),n.headerbar=n.header.querySelector(".jsPanel-headerbar"),n.titlebar=n.header.querySelector(".jsPanel-titlebar"),n.headerlogo=n.headerbar.querySelector(".jsPanel-headerlogo"),n.headertitle=n.headerbar.querySelector(".jsPanel-title"),n.controlbar=n.headerbar.querySelector(".jsPanel-controlbar"),n.headertoolbar=n.header.querySelector(".jsPanel-hdr-toolbar"),n.content=n.querySelector(".jsPanel-content"),n.footer=n.querySelector(".jsPanel-ftr"),n.snappableTo=!1,n.snapped=!1,n.droppableTo=!1,n.progressbar=n.autocloseProgressbar=n.querySelector(".jsPanel-progressbar");const a=new CustomEvent("jspanelloaded",{detail:e.id,cancelable:!0}),l=new CustomEvent("jspanelstatuschange",{detail:e.id,cancelable:!0}),u=new CustomEvent("jspanelbeforenormalize",{detail:e.id,cancelable:!0}),h=new CustomEvent("jspanelnormalized",{detail:e.id,cancelable:!0}),y=new CustomEvent("jspanelbeforemaximize",{detail:e.id,cancelable:!0}),k=new CustomEvent("jspanelmaximized",{detail:e.id,cancelable:!0}),v=new CustomEvent("jspanelbeforeminimize",{detail:e.id,cancelable:!0}),I=new CustomEvent("jspanelminimized",{detail:e.id,cancelable:!0}),W=new CustomEvent("jspanelbeforesmallify",{detail:e.id,cancelable:!0}),z=new CustomEvent("jspanelsmallified",{detail:e.id,cancelable:!0}),F=new CustomEvent("jspanelsmallifiedmax",{detail:e.id,cancelable:!0}),K=new CustomEvent("jspanelbeforeunsmallify",{detail:e.id,cancelable:!0}),oe=new CustomEvent("jspanelfronted",{detail:e.id,cancelable:!0}),_e=new CustomEvent("jspanelbeforeclose",{detail:e.id,cancelable:!0}),je=new CustomEvent("jspanelclosed",{detail:e.id,cancelable:!0}),se=new CustomEvent("jspanelcloseduser",{detail:e.id,cancelable:!0});[a,l,u,h,y,k,v,I,W,z,F,K,oe,_e].forEach(m=>m.panel=n);const ae=n.querySelector(".jsPanel-btn-close"),fe=n.querySelector(".jsPanel-btn-maximize"),ve=n.querySelector(".jsPanel-btn-normalize"),Ae=n.querySelector(".jsPanel-btn-smallify"),Ze=n.querySelector(".jsPanel-btn-minimize");ae&&O.pointerup.forEach(m=>{ae.addEventListener(m,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.close(null,!0)})}),fe&&O.pointerup.forEach(m=>{fe.addEventListener(m,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.maximize()})}),ve&&O.pointerup.forEach(m=>{ve.addEventListener(m,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.normalize()})}),Ae&&O.pointerup.forEach(m=>{Ae.addEventListener(m,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.status==="normalized"||n.status==="maximized"?n.smallify():(n.status==="smallified"||n.status==="smallifiedmax")&&n.unsmallify()})}),Ze&&O.pointerup.forEach(m=>{Ze.addEventListener(m,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;n.minimize()})});let rt=O.extensions;for(let m in rt)Object.prototype.hasOwnProperty.call(rt,m)&&(n[m]=rt[m]);if(n.setBorder=m=>{let w=O.pOborder(m);return w[2].length||(w[2]=n.style.backgroundColor),w=w.join(" "),n.style.border=w,n.options.border=w,n},n.setBorderRadius=m=>{typeof m=="string"&&(m.startsWith("--")||m.startsWith("var"))&&(m=m.replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," "),m=O.getCssVariableValue(m)),typeof m=="number"&&(m+="px"),n.style.borderRadius=m;const w=getComputedStyle(n);return n.options.header?(n.header.style.borderTopLeftRadius=w.borderTopLeftRadius,n.header.style.borderTopRightRadius=w.borderTopRightRadius):(n.content.style.borderTopLeftRadius=w.borderTopLeftRadius,n.content.style.borderTopRightRadius=w.borderTopRightRadius),n.options.footerToolbar?(n.footer.style.borderBottomRightRadius=w.borderBottomRightRadius,n.footer.style.borderBottomLeftRadius=w.borderBottomLeftRadius):(n.content.style.borderBottomRightRadius=w.borderBottomRightRadius,n.content.style.borderBottomLeftRadius=w.borderBottomLeftRadius),n},n.setTheme=(m=e.theme,w)=>{let E;if(n.status==="minimized"&&(E=!0,n.normalize()),O.clearTheme(n),typeof m=="object")e.border=void 0,O.applyCustomTheme(n,m);else if(typeof m=="string"){m==="none"&&(m="white");let g=O.getThemeDetails(m);O.applyColorTheme(n,g)}return E&&n.minimize(),w&&w.call(n,n),n},n.remove=(m,w,E)=>{n.parentElement.removeChild(n),document.getElementById(m)?E&&E.call(n,m,n):(n.removeMinimizedReplacement(),n.status="closed",w&&document.dispatchEvent(se),document.dispatchEvent(je),n.options.onclosed&&O.processCallbacks(n,n.options.onclosed,"every",w),O.autopositionRemaining(n),E&&E.call(m,m)),window.removeEventListener("resize",n.windowResizeHandler),document.removeEventListener("jspanelresize",n.parentResizeHandler)},n.close=(m,w)=>{if(n.parentElement){if(n.closetimer&&window.clearInterval(n.closetimer),document.dispatchEvent(_e),n.statusBefore=n.status,n.options.onbeforeclose&&n.options.onbeforeclose.length>0&&!O.processCallbacks(n,n.options.onbeforeclose,"some",n.status,w))return n;n.options.animateOut?(n.options.animateIn&&O.remClass(n,n.options.animateIn),O.setClass(n,n.options.animateOut),n.addEventListener("animationend",E=>{E.stopPropagation(),n.remove(n.id,w,m)})):n.remove(n.id,w,m)}},n.maximize=(m,w)=>{if(n.statusBefore=n.status,e.onbeforemaximize&&e.onbeforemaximize.length>0&&!O.processCallbacks(n,e.onbeforemaximize,"some",n.statusBefore))return n;document.dispatchEvent(y);const E=n.parentElement,g=O.pOcontainment(e.maximizedMargin);return E===document.body?(n.style.width=document.documentElement.clientWidth-g[1]-g[3]+"px",n.style.height=document.documentElement.clientHeight-g[0]-g[2]+"px",n.style.left=g[3]+"px",n.style.top=g[0]+"px"):(n.style.width=E.clientWidth-g[1]-g[3]+"px",n.style.height=E.clientHeight-g[0]-g[2]+"px",n.style.left=g[3]+"px",n.style.top=g[0]+"px"),Ae.style.transform="unset",n.removeMinimizedReplacement(),n.status="maximized",n.setControls([".jsPanel-btn-maximize"]),w||n.front(),document.dispatchEvent(k),document.dispatchEvent(l),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),m&&m.call(n,n,n.statusBefore),e.onmaximized&&O.processCallbacks(n,e.onmaximized,"every",n.statusBefore),n},n.minimize=m=>{if(n.status==="minimized"||(n.statusBefore=n.status,e.onbeforeminimize&&e.onbeforeminimize.length>0&&!O.processCallbacks(n,e.onbeforeminimize,"some",n.statusBefore)))return n;if(document.dispatchEvent(v),!document.getElementById("jsPanel-replacement-container")){const w=document.createElement("div");w.id="jsPanel-replacement-container",document.body.append(w)}if(n.style.left="-9999px",n.status="minimized",document.dispatchEvent(I),document.dispatchEvent(l),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),e.minimizeTo){let w=n.createMinimizedReplacement(),E,g,C;switch(e.minimizeTo){case"default":document.getElementById("jsPanel-replacement-container").append(w);break;case"parentpanel":g=n.closest(".jsPanel-content").parentElement,C=g.querySelectorAll(".jsPanel-minimized-box"),E=C[C.length-1],E.append(w);break;case"parent":g=n.parentElement,E=g.querySelector(".jsPanel-minimized-container"),E||(E=document.createElement("div"),E.className="jsPanel-minimized-container",g.append(E)),E.append(w);break;default:document.querySelector(e.minimizeTo).append(w)}}return m&&m.call(n,n,n.statusBefore),e.onminimized&&O.processCallbacks(n,e.onminimized,"every",n.statusBefore),n},n.normalize=m=>(n.status==="normalized"||(n.statusBefore=n.status,e.onbeforenormalize&&e.onbeforenormalize.length>0&&!O.processCallbacks(n,e.onbeforenormalize,"some",n.statusBefore))||(document.dispatchEvent(u),n.style.width=n.currentData.width,n.style.height=n.currentData.height,n.snapped?n.snap(n.snapped,!0):(n.style.left=n.currentData.left,n.style.top=n.currentData.top),Ae.style.transform="unset",n.removeMinimizedReplacement(),n.status="normalized",n.setControls([".jsPanel-btn-normalize"]),n.front(),document.dispatchEvent(h),document.dispatchEvent(l),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),m&&m.call(n,n,n.statusBefore),e.onnormalized&&O.processCallbacks(n,e.onnormalized,"every",n.statusBefore)),n),n.smallify=m=>{if(n.status==="smallified"||n.status==="smallifiedmax"||(n.statusBefore=n.status,e.onbeforesmallify&&e.onbeforesmallify.length>0&&!O.processCallbacks(n,e.onbeforesmallify,"some",n.statusBefore)))return n;document.dispatchEvent(W),n.style.overflow="hidden";const w=window.getComputedStyle(n),E=parseFloat(window.getComputedStyle(n.headerbar).height);n.style.height=parseFloat(w.borderTopWidth)+parseFloat(w.borderBottomWidth)+E+"px",Ae.style.transform="rotate(180deg)",n.status==="normalized"?(n.setControls([".jsPanel-btn-normalize"]),n.status="smallified",document.dispatchEvent(z),document.dispatchEvent(l),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="maximized"&&(n.setControls([".jsPanel-btn-maximize"]),n.status="smallifiedmax",document.dispatchEvent(F),document.dispatchEvent(l),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore));const g=n.querySelectorAll(".jsPanel-minimized-box");return g[g.length-1].style.display="none",m&&m.call(n,n,n.statusBefore),e.onsmallified&&O.processCallbacks(n,e.onsmallified,"every",n.statusBefore),n},n.unsmallify=m=>{if(n.statusBefore=n.status,n.status==="smallified"||n.status==="smallifiedmax"){if(e.onbeforeunsmallify&&e.onbeforeunsmallify.length>0&&!O.processCallbacks(n,e.onbeforeunsmallify,"some",n.statusBefore))return n;document.dispatchEvent(K),n.style.overflow="visible",n.front(),n.status==="smallified"?(n.style.height=n.currentData.height,n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(h),document.dispatchEvent(l),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="smallifiedmax"?n.maximize():n.status==="minimized"&&n.normalize(),Ae.style.transform="rotate(0deg)";const w=n.querySelectorAll(".jsPanel-minimized-box");w[w.length-1].style.display="flex",m&&m.call(n,n,n.statusBefore),e.onunsmallified&&O.processCallbacks(n,e.onunsmallified,"every",n.statusBefore)}return n},n.front=(m,w=!0)=>{if(n.status==="minimized")n.statusBefore==="maximized"?n.maximize():n.normalize();else{const E=Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(g=>g.style.zIndex);Math.max(...E)>n.style.zIndex&&(n.style.zIndex=O.zi.next()),O.resetZi()}return document.dispatchEvent(oe),m&&m.call(n,n),e.onfronted&&w&&O.processCallbacks(n,e.onfronted,"every",n.status),n},n.snap=(m,w=!1)=>{if(w||(n.currentData.beforeSnap={width:n.currentData.width,height:n.currentData.height}),m&&typeof m=="function"&&!w)m.call(n,n,n.snappableTo);else if(m!==!1){let E=[0,0];if(n.options.dragit.snap.containment&&n.options.dragit.containment){const g=O.pOcontainment(n.options.dragit.containment),C=n.snappableTo;C.startsWith("left")?E[0]=g[3]:C.startsWith("right")&&(E[0]=-g[1]),C.endsWith("top")?E[1]=g[0]:C.endsWith("bottom")&&(E[1]=-g[2])}n.reposition(`${n.snappableTo} ${E[0]} ${E[1]}`)}w||(n.snapped=n.snappableTo)},n.move=(m,w)=>{let E=n.overlaps(m,"paddingbox"),g=n.parentElement;return m.appendChild(n),n.options.container=m,n.style.left=E.left+"px",n.style.top=E.top+"px",n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors(),w&&w.call(n,n,m,g),n},n.closeChildpanels=m=>(n.getChildpanels().forEach(w=>w.close()),m&&m.call(n,n),n),n.getChildpanels=m=>{const w=n.content.querySelectorAll(".jsPanel");return m&&w.forEach((E,g,C)=>{m.call(E,E,g,C)}),w},n.isChildpanel=m=>{const w=n.closest(".jsPanel-content"),E=w?w.parentElement:null;return m&&m.call(n,n,E),w?E:!1},n.contentRemove=m=>(O.emptyNode(n.content),m&&m.call(n,n),n),n.createMinimizedReplacement=()=>{const m=O.createMinimizedTemplate(),w=window.getComputedStyle(n.headertitle).color,E=window.getComputedStyle(n),g=e.iconfont,C=m.querySelector(".jsPanel-controlbar");return n.options.header!=="auto-show-hide"?O.setStyles(m,{backgroundColor:E.backgroundColor,backgroundPositionX:E.backgroundPositionX,backgroundPositionY:E.backgroundPositionY,backgroundRepeat:E.backgroundRepeat,backgroundAttachment:E.backgroundAttachment,backgroundImage:E.backgroundImage,backgroundSize:E.backgroundSize,backgroundOrigin:E.backgroundOrigin,backgroundClip:E.backgroundClip}):m.style.backgroundColor=window.getComputedStyle(n.header).backgroundColor,m.id=n.id+"-min",m.querySelector(".jsPanel-headerbar").replaceChild(n.headerlogo.cloneNode(!0),m.querySelector(".jsPanel-headerlogo")),m.querySelector(".jsPanel-titlebar").replaceChild(n.headertitle.cloneNode(!0),m.querySelector(".jsPanel-title")),m.querySelector(".jsPanel-titlebar").setAttribute("title",n.headertitle.textContent),m.querySelector(".jsPanel-title").style.color=w,C.style.color=w,C.querySelectorAll("button").forEach(le=>le.style.color=w),["jsPanel-hdr-dark","jsPanel-hdr-light"].forEach(le=>{n.header.classList.contains(le)&&m.querySelector(".jsPanel-hdr").classList.add(le)}),n.setIconfont(g,m),n.dataset.btnnormalize==="enabled"?O.pointerup.forEach(le=>{m.querySelector(".jsPanel-btn-normalize").addEventListener(le,he=>{if(he.preventDefault(),he.button&&he.button>0)return!1;n.normalize()})}):C.querySelector(".jsPanel-btn-normalize").style.display="none",n.dataset.btnmaximize==="enabled"?O.pointerup.forEach(le=>{m.querySelector(".jsPanel-btn-maximize").addEventListener(le,he=>{if(he.preventDefault(),he.button&&he.button>0)return!1;n.maximize()})}):C.querySelector(".jsPanel-btn-maximize").style.display="none",n.dataset.btnclose==="enabled"?O.pointerup.forEach(le=>{m.querySelector(".jsPanel-btn-close").addEventListener(le,he=>{if(he.preventDefault(),he.button&&he.button>0)return!1;n.close(null,!0)})}):C.querySelector(".jsPanel-btn-close").style.display="none",m},n.removeMinimizedReplacement=()=>{const m=document.getElementById(`${n.id}-min`);m&&m.parentElement.removeChild(m)},n.drag=(m={})=>{let w,E,g;const C=new CustomEvent("jspaneldragstart",{detail:n.id}),le=new CustomEvent("jspaneldrag",{detail:n.id}),he=new CustomEvent("jspaneldragstop",{detail:n.id});[C,le,he].forEach(Ue=>Ue.panel=n);const q=Ue=>{let ze=Ue.split("-");return ze.forEach((Ce,De)=>{ze[De]=Ce.charAt(0).toUpperCase()+Ce.slice(1)}),"snap"+ze.join("")};function X(Ue){Ue.relatedTarget===null&&O.pointermove.forEach(ze=>{document.removeEventListener(ze,E,!1),n.style.opacity=1})}let Ve=m.handles||O.defaults.dragit.handles,ct=m.cursor||O.defaults.dragit.cursor;function Zt(Ue){if(O.pointermove.forEach(ze=>document.removeEventListener(ze,E)),O.removeSnapAreas(),w){if(n.style.opacity=1,w=void 0,g.snap){switch(n.snappableTo){case"left-top":n.snap(g.snap.snapLeftTop);break;case"center-top":n.snap(g.snap.snapCenterTop);break;case"right-top":n.snap(g.snap.snapRightTop);break;case"right-center":n.snap(g.snap.snapRightCenter);break;case"right-bottom":n.snap(g.snap.snapRightBottom);break;case"center-bottom":n.snap(g.snap.snapCenterBottom);break;case"left-bottom":n.snap(g.snap.snapLeftBottom);break;case"left-center":n.snap(g.snap.snapLeftCenter);break}g.snap.callback&&n.snappableTo&&typeof g.snap.callback=="function"&&(g.snap.callback.call(n,n),g.snap.repositionOnSnap&&g.snap[q(n.snappableTo)]!==!1&&n.repositionOnSnap(n.snappableTo)),n.snappableTo&&g.snap.repositionOnSnap&&g.snap[q(n.snappableTo)]&&n.repositionOnSnap(n.snappableTo)}if(n.droppableTo&&n.droppableTo){let ze=n.parentElement;n.move(n.droppableTo),g.drop.callback&&g.drop.callback.call(n,n,n.droppableTo,ze)}if(document.dispatchEvent(he),g.stop.length){let ze=window.getComputedStyle(n),Ce={left:parseFloat(ze.left),top:parseFloat(ze.top),width:parseFloat(ze.width),height:parseFloat(ze.height)};O.processCallbacks(n,g.stop,!1,Ce,Ue)}n.saveCurrentPosition(),n.calcSizeFactors()}n.controlbar.style.pointerEvents="inherit",n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(ze=>ze.style.pointerEvents="auto"),document.removeEventListener(Ue,Zt)}return n.querySelectorAll(Ve).forEach(Ue=>{Ue.style.touchAction="none",Ue.style.cursor=ct,O.pointerdown.forEach(ze=>{Ue.addEventListener(ze,Ce=>{if(Ce.button&&Ce.button>0||(g=Object.assign({},O.defaults.dragit,m),g.disableOnMaximized&&n.status==="maximized"))return!1;if((g.containment||g.containment===0)&&(g.containment=O.pOcontainment(g.containment)),g.grid&&Array.isArray(g.grid)&&g.grid.length===1&&(g.grid[1]=g.grid[0]),g.snap&&(typeof g.snap=="object"?g.snap=Object.assign({},O.defaultSnapConfig,g.snap):g.snap=O.defaultSnapConfig),Ce.target.closest(".jsPanel-ftr-btn"))return;n.controlbar.style.pointerEvents="none",n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(et=>et.style.pointerEvents="none");let De=window.getComputedStyle(n),Ye=parseFloat(De.left),Pe=parseFloat(De.top),te=parseFloat(De.width),Xe=parseFloat(De.height),Le=Ce.touches?Ce.touches[0].clientX:Ce.clientX,de=Ce.touches?Ce.touches[0].clientY:Ce.clientY,we=n.parentElement,_t=we.getBoundingClientRect(),ce=window.getComputedStyle(we),Ge=n.getScaleFactor(),pn=0,qt=O.getScrollbarWidth(we);E=et=>{if(et.preventDefault(),!w){if(document.dispatchEvent(C),n.style.opacity=g.opacity,n.snapped&&g.snap.resizeToPreSnap&&n.currentData.beforeSnap){n.resize(n.currentData.beforeSnap.width+" "+n.currentData.beforeSnap.height),n.setControls([".jsPanel-btn-normalize"]);let re=n.getBoundingClientRect(),Te=Le-(re.left+re.width),me=re.width/2;Te>-me&&(pn=Te+me)}if(n.front(),n.snapped=!1,n.status==="maximized"&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized"),g.drop&&g.drop.dropZones){let re=g.drop.dropZones.map(me=>O.pOcontainer(me)),Te=[];re.forEach(function(me){me.length?me.forEach(function(Fe){Te.push(Fe)}):Te.push(me)}),Te=Te.filter(function(me,Fe,We){return We.indexOf(me)===Fe}),g.drop.dropZones=Te}g.start.length&&O.processCallbacks(n,g.start,!1,{left:Ye,top:Pe,width:te,height:Xe},et)}w=1;let At,Oe,qe,xt,it,Ee,ke,Pt,He,bt,dt=et.touches?et.touches[0].clientX:et.clientX,st=et.touches?et.touches[0].clientY:et.clientY,Be=window.getComputedStyle(n),ue;if(we===document.body){let re=n.getBoundingClientRect();He=window.innerWidth-parseInt(ce.borderLeftWidth,10)-parseInt(ce.borderRightWidth,10)-(re.left+re.width),bt=window.innerHeight-parseInt(ce.borderTopWidth,10)-parseInt(ce.borderBottomWidth,10)-(re.top+re.height)}else He=parseInt(ce.width,10)-parseInt(ce.borderLeftWidth,10)-parseInt(ce.borderRightWidth,10)-(parseInt(Be.left,10)+parseInt(Be.width,10)),bt=parseInt(ce.height,10)-parseInt(ce.borderTopWidth,10)-parseInt(ce.borderBottomWidth,10)-(parseInt(Be.top,10)+parseInt(Be.height,10));At=parseFloat(Be.left),qe=parseFloat(Be.top),it=He,ke=bt,g.snap&&(g.snap.trigger==="panel"?(Oe=At**2,xt=qe**2,Ee=it**2,Pt=ke**2):g.snap.trigger==="pointer"&&(n.options.container==="window"?(At=dt,qe=st,it=window.innerWidth-dt,ke=window.innerHeight-st,Oe=dt**2,xt=qe**2,Ee=it**2,Pt=ke**2):(ue=n.overlaps(we,"paddingbox",et),At=ue.pointer.left,qe=ue.pointer.top,it=ue.pointer.right,ke=ue.pointer.bottom,Oe=ue.pointer.left**2,xt=ue.pointer.top**2,Ee=ue.pointer.right**2,Pt=ue.pointer.bottom**2)));let Qe=Math.sqrt(Oe+xt),Q=Math.sqrt(Oe+Pt),ot=Math.sqrt(Ee+xt),pt=Math.sqrt(Ee+Pt),Ct=Math.abs(At-it)/2,J=Math.abs(qe-ke)/2,en=Math.sqrt(Oe+J**2),an=Math.sqrt(xt+Ct**2),ht=Math.sqrt(Ee+J**2),mn=Math.sqrt(Pt+Ct**2);if(window.getSelection().removeAllRanges(),document.dispatchEvent(le),(!g.axis||g.axis==="x")&&(n.style.left=Ye+(dt-Le)/Ge.x+pn+"px"),(!g.axis||g.axis==="y")&&(n.style.top=Pe+(st-de)/Ge.y+"px"),g.grid){let re=g.grid,Te=g.axis,me=re[0]*Math.round((Ye+(dt-Le))/re[0]),Fe=re[1]*Math.round((Pe+(st-de))/re[1]);(!Te||Te==="x")&&(n.style.left=`${me}px`),(!Te||Te==="y")&&(n.style.top=`${Fe}px`)}if(g.containment||g.containment===0){let re=g.containment,Te,me;if(n.options.container==="window")Te=window.innerWidth-parseFloat(Be.width)-re[1]-qt.y,me=window.innerHeight-parseFloat(Be.height)-re[2]-qt.x;else{let Fe=parseFloat(ce.borderLeftWidth)+parseFloat(ce.borderRightWidth),We=parseFloat(ce.borderTopWidth)+parseFloat(ce.borderBottomWidth);Te=_t.width/Ge.x-parseFloat(Be.width)-re[1]-Fe-qt.y,me=_t.height/Ge.y-parseFloat(Be.height)-re[2]-We-qt.x}parseFloat(n.style.left)<=re[3]&&(n.style.left=re[3]+"px"),parseFloat(n.style.top)<=re[0]&&(n.style.top=re[0]+"px"),parseFloat(n.style.left)>=Te&&(n.style.left=Te+"px"),parseFloat(n.style.top)>=me&&(n.style.top=me+"px")}if(g.drag.length){let re={left:At,top:qe,right:it,bottom:ke,width:parseFloat(Be.width),height:parseFloat(Be.height)};O.processCallbacks(n,g.drag,!1,re,et)}if(g.snap){let re=g.snap.sensitivity,Te=we===document.body?window.innerWidth/8:_t.width/8,me=we===document.body?window.innerHeight/8:_t.height/8;n.snappableTo=!1,O.removeSnapAreas(),Qe<re?g.snap.snapLeftTop!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="left-top",O.createSnapArea(n,"lt",re)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(ue.pointer.left>0&&ue.pointer.top>0?(n.snappableTo="left-top",O.createSnapArea(n,"lt",re)):(n.snappableTo=!1,O.removeSnapAreas()))):Q<re?g.snap.snapLeftBottom!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="left-bottom",O.createSnapArea(n,"lb",re)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(ue.pointer.left>0&&ue.pointer.bottom>0?(n.snappableTo="left-bottom",O.createSnapArea(n,"lb",re)):(n.snappableTo=!1,O.removeSnapAreas()))):ot<re?g.snap.snapRightTop!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="right-top",O.createSnapArea(n,"rt",re)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(ue.pointer.right>0&&ue.pointer.top>0?(n.snappableTo="right-top",O.createSnapArea(n,"rt",re)):(n.snappableTo=!1,O.removeSnapAreas()))):pt<re?g.snap.snapRightBottom!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="right-bottom",O.createSnapArea(n,"rb",re)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(ue.pointer.right>0&&ue.pointer.bottom>0?(n.snappableTo="right-bottom",O.createSnapArea(n,"rb",re)):(n.snappableTo=!1,O.removeSnapAreas()))):qe<re&&an<Te?g.snap.snapCenterTop!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="center-top",O.createSnapArea(n,"ct",re)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(ue.pointer.top>0?(n.snappableTo="center-top",O.createSnapArea(n,"ct",re)):(n.snappableTo=!1,O.removeSnapAreas()))):At<re&&en<me?g.snap.snapLeftCenter!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="left-center",O.createSnapArea(n,"lc",re)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(ue.pointer.left>0?(n.snappableTo="left-center",O.createSnapArea(n,"lc",re)):(n.snappableTo=!1,O.removeSnapAreas()))):it<re&&ht<me?g.snap.snapRightCenter!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="right-center",O.createSnapArea(n,"rc",re)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(ue.pointer.right>0?(n.snappableTo="right-center",O.createSnapArea(n,"rc",re)):(n.snappableTo=!1,O.removeSnapAreas()))):ke<re&&mn<Te&&g.snap.snapCenterBottom!==!1&&(!g.snap.active||g.snap.active==="both"?(n.snappableTo="center-bottom",O.createSnapArea(n,"cb",re)):g.snap.trigger==="pointer"&&g.snap.active&&g.snap.active==="inside"&&(ue.pointer.bottom>0?(n.snappableTo="center-bottom",O.createSnapArea(n,"cb",re)):(n.snappableTo=!1,O.removeSnapAreas())))}if(g.drop&&g.drop.dropZones){let re=O.isIE?"msElementsFromPoint":"elementsFromPoint",Te=document[re](et.clientX,et.clientY);Array.isArray(Te)||(Te=Array.prototype.slice.call(Te)),g.drop.dropZones.forEach(me=>{Te.includes(me)&&(n.droppableTo=me)}),Te.includes(n.droppableTo)||(n.droppableTo=!1)}},O.pointermove.forEach(et=>document.addEventListener(et,E)),window.addEventListener("mouseout",X,!1)})}),O.pointerup.forEach(ze=>{document.addEventListener(ze,Zt),window.removeEventListener("mouseout",X)}),m.disable&&(Ue.style.pointerEvents="none")}),n},n.dragit=m=>{const w=Object.assign({},O.defaults.dragit,e.dragit),E=n.querySelectorAll(w.handles);return m==="disable"?E.forEach(g=>g.style.pointerEvents="none"):E.forEach(g=>g.style.pointerEvents="auto"),n},n.sizeit=(m={})=>{const w=new CustomEvent("jspanelresizestart",{detail:n.id}),E=new CustomEvent("jspanelresize",{detail:n.id}),g=new CustomEvent("jspanelresizestop",{detail:n.id});[w,E,g].forEach(Ce=>Ce.panel=n);let C={},le,he,q,X,Ve,ct;C.handles=m.handles||O.defaults.resizeit.handles,C.handles.split(",").forEach(Ce=>{const De=document.createElement("DIV");De.className=`jsPanel-resizeit-handle jsPanel-resizeit-${Ce.trim()}`,n.append(De)});let Zt=m.aspectRatio?m.aspectRatio:!1;function Ue(Ce){Ce.relatedTarget===null&&O.pointermove.forEach(De=>document.removeEventListener(De,le,!1))}function ze(Ce){if(O.pointermove.forEach(De=>document.removeEventListener(De,le,!1)),Ce.target.classList&&Ce.target.classList.contains("jsPanel-resizeit-handle")){let De,Ye,Pe=Ce.target.className;if(Pe.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)&&(De=!0),Pe.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)&&(Ye=!0),C.grid&&Array.isArray(C.grid)){C.grid.length===1&&(C.grid[1]=C.grid[0]);const te=parseFloat(n.style.width),Xe=parseFloat(n.style.height),Le=te%C.grid[0],de=Xe%C.grid[1],we=parseFloat(n.style.left),_t=parseFloat(n.style.top),ce=we%C.grid[0],Ge=_t%C.grid[1];Le<C.grid[0]/2?n.style.width=te-Le+"px":n.style.width=te+(C.grid[0]-Le)+"px",de<C.grid[1]/2?n.style.height=Xe-de+"px":n.style.height=Xe+(C.grid[1]-de)+"px",De&&(ce<C.grid[0]/2?n.style.left=we-ce+"px":n.style.left=we+(C.grid[0]-ce)+"px"),Ye&&(Ge<C.grid[1]/2?n.style.top=_t-Ge+"px":n.style.top=_t+(C.grid[1]-Ge)+"px")}}if(he){n.content.style.pointerEvents="inherit",he=void 0,n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors();let De=n.controlbar.querySelector(".jsPanel-btn-smallify"),Ye=n.getBoundingClientRect();if(De&&Ye.height>ct+5&&(De.style.transform="rotate(0deg)"),document.dispatchEvent(g),C.stop.length){let Pe=window.getComputedStyle(n),te={left:parseFloat(Pe.left),top:parseFloat(Pe.top),width:parseFloat(Pe.width),height:parseFloat(Pe.height)};O.processCallbacks(n,C.stop,!1,te,Ce)}}n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(De=>De.style.pointerEvents="auto"),C.aspectRatio=Zt,document.removeEventListener(Ce,ze)}return n.querySelectorAll(".jsPanel-resizeit-handle").forEach(Ce=>{Ce.style.touchAction="none",O.pointerdown.forEach(De=>{Ce.addEventListener(De,Ye=>{if(Ye.preventDefault(),Ye.stopPropagation(),Ye.button&&Ye.button>0)return!1;let Pe=1;if(C=Object.assign({},O.defaults.resizeit,m),(C.containment||C.containment===0)&&(C.containment=O.pOcontainment(C.containment)),C.aspectRatio&&C.aspectRatio===!0&&(C.aspectRatio="panel"),O.modifier){let me=O.modifier;me.altKey?C.aspectRatio="content":me.ctrlKey?C.aspectRatio="panel":me.shiftKey&&(C.aspectRatio=!1,Pe=2)}let te=typeof C.maxWidth=="function"?C.maxWidth():C.maxWidth||1e4,Xe=typeof C.maxHeight=="function"?C.maxHeight():C.maxHeight||1e4,Le=typeof C.minWidth=="function"?C.minWidth():C.minWidth,de=typeof C.minHeight=="function"?C.minHeight():C.minHeight;n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(me=>me.style.pointerEvents="none");const we=n.parentElement,_t=we.tagName.toLowerCase(),ce=n.getBoundingClientRect(),Ge=we.getBoundingClientRect(),pn=window.getComputedStyle(we,null),qt=parseInt(pn.borderLeftWidth,10),et=parseInt(pn.borderTopWidth,10),At=pn.getPropertyValue("position"),Oe=Ye.clientX||Ye.clientX===0||Ye.touches[0].clientX,qe=Ye.clientY||Ye.clientY===0||Ye.touches[0].clientY,xt=Oe/qe,it=Ye.target.classList,Ee=n.getScaleFactor(),ke=ce.width/ce.height,Pt=n.content.getBoundingClientRect(),He=Pt.width/Pt.height,bt=n.header.getBoundingClientRect().height,dt=n.footer.getBoundingClientRect().height||0;let st=ce.left,Be=ce.top,ue=1e4,Qe=1e4,Q=1e4,ot=1e4;Ve=ce.width,ct=ce.height,_t!=="body"&&(st=ce.left-Ge.left+we.scrollLeft,Be=ce.top-Ge.top+we.scrollTop),_t==="body"&&C.containment?(ue=document.documentElement.clientWidth-ce.left,Q=document.documentElement.clientHeight-ce.top,Qe=ce.width+ce.left,ot=ce.height+ce.top):C.containment&&(At==="static"?(ue=Ge.width-ce.left+qt,Q=Ge.height+Ge.top-ce.top+et,Qe=ce.width+(ce.left-Ge.left)-qt,ot=ce.height+(ce.top-Ge.top)-et):(ue=we.clientWidth-(ce.left-Ge.left)/Ee.x+qt,Q=we.clientHeight-(ce.top-Ge.top)/Ee.y+et,Qe=(ce.width+ce.left-Ge.left)/Ee.x-qt,ot=n.clientHeight+(ce.top-Ge.top)/Ee.y-et)),C.containment&&(Qe-=C.containment[3],ot-=C.containment[0],ue-=C.containment[1],Q-=C.containment[2]);const pt=window.getComputedStyle(n),Ct=parseFloat(pt.width)-ce.width,J=parseFloat(pt.height)-ce.height;let en=parseFloat(pt.left)-ce.left,an=parseFloat(pt.top)-ce.top;we!==document.body&&(en+=Ge.left,an+=Ge.top);let ht=parseInt(pt.borderTopWidth,10),mn=parseInt(pt.borderRightWidth,10),re=parseInt(pt.borderBottomWidth,10),Te=parseInt(pt.borderLeftWidth,10);le=me=>{me.preventDefault(),he||(document.dispatchEvent(w),C.start.length&&O.processCallbacks(n,C.start,!1,{width:Ve,height:ct,left:st,top:Be},me),n.front(),n.status==="maximized"&&(n.status="normalized",n.controlbar.querySelector(".jsPanel-btn-maximize")&&n.setControlStatus("maximize","show"),n.controlbar.querySelector(".jsPanel-btn-normalize")&&n.setControlStatus("normalize","hide")),ce.height>ct+5&&(n.status="normalized",n.setControls([".jsPanel-btn-normalize"]))),he=1,document.dispatchEvent(E);let Fe=me.touches?me.touches[0].clientX:me.clientX,We=me.touches?me.touches[0].clientY:me.clientY,Ie;it.contains("jsPanel-resizeit-e")?(q=Ve+(Fe-Oe)*Pe/Ee.x+Ct,q>=ue&&(q=ue),q>=te&&(q=te),q<=Le&&(q=Le),n.style.width=q+"px",Pe===2&&(n.style.left=st-(Fe-Oe)+"px"),C.aspectRatio==="content"?(n.style.height=(q-mn-Te)/He+bt+dt+ht+re+"px",C.containment&&(Ie=n.overlaps(we),Ie.bottom<=C.containment[2]&&(n.style.height=Q+"px",n.style.width=Q*He+"px"))):C.aspectRatio==="panel"&&(n.style.height=q/ke+"px",C.containment&&(Ie=n.overlaps(we),Ie.bottom<=C.containment[2]&&(n.style.height=Q+"px",n.style.width=Q*ke+"px")))):it.contains("jsPanel-resizeit-s")?(X=ct+(We-qe)*Pe/Ee.y+J,X>=Q&&(X=Q),X>=Xe&&(X=Xe),X<=de&&(X=de),n.style.height=X+"px",Pe===2&&(n.style.top=Be-(We-qe)+"px"),C.aspectRatio==="content"?(n.style.width=(X-bt-dt-ht-re)*He+ht+re+"px",C.containment&&(Ie=n.overlaps(we),Ie.right<=C.containment[1]&&(n.style.width=ue+"px",n.style.height=ue/He+"px"))):C.aspectRatio==="panel"&&(n.style.width=X*ke+"px",C.containment&&(Ie=n.overlaps(we),Ie.right<=C.containment[1]&&(n.style.width=ue+"px",n.style.height=ue/ke+"px")))):it.contains("jsPanel-resizeit-w")?(q=Ve+(Oe-Fe)*Pe/Ee.x+Ct,q<=te&&q>=Le&&q<=Qe&&(n.style.left=st+(Fe-Oe)/Ee.x+en+"px"),q>=Qe&&(q=Qe),q>=te&&(q=te),q<=Le&&(q=Le),n.style.width=q+"px",C.aspectRatio==="content"?(n.style.height=(q-mn-Te)/He+bt+dt+ht+re+"px",C.containment&&(Ie=n.overlaps(we),Ie.bottom<=C.containment[2]&&(n.style.height=Q+"px",n.style.width=Q*He+"px"))):C.aspectRatio==="panel"&&(n.style.height=q/ke+"px",C.containment&&(Ie=n.overlaps(we),Ie.bottom<=C.containment[2]&&(n.style.height=Q+"px",n.style.width=Q*ke+"px")))):it.contains("jsPanel-resizeit-n")?(X=ct+(qe-We)*Pe/Ee.y+J,X<=Xe&&X>=de&&X<=ot&&(n.style.top=Be+(We-qe)/Ee.y+an+"px"),X>=ot&&(X=ot),X>=Xe&&(X=Xe),X<=de&&(X=de),n.style.height=X+"px",C.aspectRatio==="content"?(n.style.width=(X-bt-dt-ht-re)*He+ht+re+"px",C.containment&&(Ie=n.overlaps(we),Ie.right<=C.containment[1]&&(n.style.width=ue+"px",n.style.height=ue/He+"px"))):C.aspectRatio==="panel"&&(n.style.width=X*ke+"px",C.containment&&(Ie=n.overlaps(we),Ie.right<=C.containment[1]&&(n.style.width=ue+"px",n.style.height=ue/ke+"px")))):it.contains("jsPanel-resizeit-se")?(q=Ve+(Fe-Oe)*Pe/Ee.x+Ct,q>=ue&&(q=ue),q>=te&&(q=te),q<=Le&&(q=Le),n.style.width=q+"px",Pe===2&&(n.style.left=st-(Fe-Oe)+"px"),C.aspectRatio&&(n.style.height=q/ke+"px"),X=ct+(We-qe)*Pe/Ee.y+J,X>=Q&&(X=Q),X>=Xe&&(X=Xe),X<=de&&(X=de),n.style.height=X+"px",Pe===2&&(n.style.top=Be-(We-qe)+"px"),C.aspectRatio==="content"?(n.style.width=(X-bt-dt-ht-re)*He+ht+re+"px",C.containment&&(Ie=n.overlaps(we),Ie.right<=C.containment[1]&&(n.style.width=ue+"px",n.style.height=ue/He+"px"))):C.aspectRatio==="panel"&&(n.style.width=X*ke+"px",C.containment&&(Ie=n.overlaps(we),Ie.right<=C.containment[1]&&(n.style.width=ue+"px",n.style.height=ue/ke+"px")))):it.contains("jsPanel-resizeit-sw")?(X=ct+(We-qe)*Pe/Ee.y+J,X>=Q&&(X=Q),X>=Xe&&(X=Xe),X<=de&&(X=de),n.style.height=X+"px",Pe===2&&(n.style.top=Be-(We-qe)+"px"),C.aspectRatio&&(n.style.width=X*ke+"px"),q=Ve+(Oe-Fe)*Pe/Ee.x+Ct,q<=te&&q>=Le&&q<=Qe&&(n.style.left=st+(Fe-Oe)/Ee.x+en+"px"),q>=Qe&&(q=Qe),q>=te&&(q=te),q<=Le&&(q=Le),n.style.width=q+"px",C.aspectRatio==="content"?(n.style.height=(q-mn-Te)/He+bt+dt+ht+re+"px",C.containment&&(Ie=n.overlaps(we),Ie.bottom<=C.containment[2]&&(n.style.height=Q+"px",n.style.width=Q*He+"px"))):C.aspectRatio==="panel"&&(n.style.height=q/ke+"px",C.containment&&(Ie=n.overlaps(we),Ie.bottom<=C.containment[2]&&(n.style.height=Q+"px",n.style.width=Q*ke+"px")))):it.contains("jsPanel-resizeit-ne")?(q=Ve+(Fe-Oe)*Pe/Ee.x+Ct,q>=ue&&(q=ue),q>=te&&(q=te),q<=Le&&(q=Le),n.style.width=q+"px",Pe===2&&(n.style.left=st-(Fe-Oe)+"px"),C.aspectRatio&&(n.style.height=q/ke+"px"),X=ct+(qe-We)*Pe/Ee.y+J,X<=Xe&&X>=de&&X<=ot&&(n.style.top=Be+(We-qe)/Ee.y+an+"px"),X>=ot&&(X=ot),X>=Xe&&(X=Xe),X<=de&&(X=de),n.style.height=X+"px",C.aspectRatio==="content"?(n.style.width=(X-bt-dt-ht-re)*He+ht+re+"px",C.containment&&(Ie=n.overlaps(we),Ie.right<=C.containment[1]&&(n.style.width=ue+"px",n.style.height=ue/He+"px"))):C.aspectRatio==="panel"&&(n.style.width=X*ke+"px",C.containment&&(Ie=n.overlaps(we),Ie.right<=C.containment[1]&&(n.style.width=ue+"px",n.style.height=ue/ke+"px")))):it.contains("jsPanel-resizeit-nw")&&(C.aspectRatio&&it.contains("jsPanel-resizeit-nw")&&(Fe=We*xt,We=Fe/xt),q=Ve+(Oe-Fe)*Pe/Ee.x+Ct,q<=te&&q>=Le&&q<=Qe&&(n.style.left=st+(Fe-Oe)/Ee.x+en+"px"),q>=Qe&&(q=Qe),q>=te&&(q=te),q<=Le&&(q=Le),n.style.width=q+"px",C.aspectRatio&&(n.style.height=q/ke+"px"),X=ct+(qe-We)*Pe/Ee.y+J,X<=Xe&&X>=de&&X<=ot&&(n.style.top=Be+(We-qe)/Ee.y+an+"px"),X>=ot&&(X=ot),X>=Xe&&(X=Xe),X<=de&&(X=de),n.style.height=X+"px",C.aspectRatio==="content"?n.style.width=(X-bt-dt-ht-re)*He+ht+re+"px":C.aspectRatio==="panel"&&(n.style.width=X*ke+"px")),window.getSelection().removeAllRanges();const Ht=window.getComputedStyle(n),Me={left:parseFloat(Ht.left),top:parseFloat(Ht.top),right:parseFloat(Ht.right),bottom:parseFloat(Ht.bottom),width:parseFloat(Ht.width),height:parseFloat(Ht.height)};C.resize.length&&O.processCallbacks(n,C.resize,!1,Me,me)},O.pointermove.forEach(me=>document.addEventListener(me,le,!1)),window.addEventListener("mouseout",Ue,!1)})}),O.pointerup.forEach(function(De){document.addEventListener(De,ze),window.removeEventListener("mouseout",Ue)}),m.disable&&(Ce.style.pointerEvents="none")}),n},n.resizeit=m=>{const w=n.querySelectorAll(".jsPanel-resizeit-handle");return m==="disable"?w.forEach(E=>E.style.pointerEvents="none"):w.forEach(E=>E.style.pointerEvents="auto"),n},n.getScaleFactor=()=>{const m=n.getBoundingClientRect();return{x:m.width/n.offsetWidth,y:m.height/n.offsetHeight}},n.calcSizeFactors=()=>{const m=window.getComputedStyle(n);if(e.container==="window")n.hf=parseFloat(m.left)/(window.innerWidth-parseFloat(m.width)),n.vf=parseFloat(m.top)/(window.innerHeight-parseFloat(m.height));else if(n.parentElement){let w=n.parentElement.getBoundingClientRect();n.hf=parseFloat(m.left)/(w.width-parseFloat(m.width)),n.vf=parseFloat(m.top)/(w.height-parseFloat(m.height))}},n.saveCurrentDimensions=()=>{const m=window.getComputedStyle(n);n.currentData.width=m.width,n.currentData.height=m.height},n.saveCurrentPosition=()=>{const m=window.getComputedStyle(n);n.currentData.left=m.left,n.currentData.top=m.top},n.reposition=(...m)=>{let w=e.position,E=!0,g;return m.forEach(C=>{typeof C=="string"||typeof C=="object"?w=C:typeof C=="boolean"?E=C:typeof C=="function"&&(g=C)}),O.position(n,w),n.slaves&&n.slaves.size>0&&n.slaves.forEach(C=>C.reposition()),E&&n.saveCurrentPosition(),g&&g.call(n,n),n},n.repositionOnSnap=m=>{let w="0",E="0",g=O.pOcontainment(e.dragit.containment);if(e.dragit.snap.containment)switch(m){case"left-top":w=g[3],E=g[0];break;case"right-top":w=-g[1],E=g[0];break;case"right-bottom":w=-g[1],E=-g[2];break;case"left-bottom":w=g[3],E=-g[2];break;case"center-top":w=g[3]/2-g[1]/2,E=g[0];break;case"center-bottom":w=g[3]/2-g[1]/2,E=-g[2];break;case"left-center":w=g[3],E=g[0]/2-g[2]/2;break;case"right-center":w=-g[1],E=g[0]/2-g[2]/2;break}O.position(n,m),O.setStyles(n,{left:`calc(${n.style.left} + ${w}px)`,top:`calc(${n.style.top} + ${E}px)`})},n.overlaps=(m,w,E)=>{let g=n.getBoundingClientRect(),C=getComputedStyle(n.parentElement),le=n.getScaleFactor(),he={top:0,right:0,bottom:0,left:0},q,X=0,Ve=0,ct=0,Zt=0;n.options.container!=="window"&&w==="paddingbox"&&(he.top=parseInt(C.borderTopWidth,10)*le.y,he.right=parseInt(C.borderRightWidth,10)*le.x,he.bottom=parseInt(C.borderBottomWidth,10)*le.y,he.left=parseInt(C.borderLeftWidth,10)*le.x),typeof m=="string"?m==="window"?q={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}:m==="parent"?q=n.parentElement.getBoundingClientRect():q=document.querySelector(m).getBoundingClientRect():q=m.getBoundingClientRect(),E&&(X=E.touches?E.touches[0].clientX:E.clientX,Ve=E.touches?E.touches[0].clientY:E.clientY,ct=X-q.left,Zt=Ve-q.top);let Ue=g.left<q.right&&g.right>q.left,ze=g.top<q.bottom&&g.bottom>q.top;return{overlaps:Ue&&ze,top:g.top-q.top-he.top,right:q.right-g.right-he.right,bottom:q.bottom-g.bottom-he.bottom,left:g.left-q.left-he.left,parentBorderWidth:he,panelRect:g,referenceRect:q,pointer:{clientX:X,clientY:Ve,left:ct-he.left,top:Zt-he.top,right:q.width-ct-he.right,bottom:q.height-Zt-he.bottom}}},n.setSize=()=>{if(e.panelSize){const m=O.pOsize(n,e.panelSize);n.style.width=m.width,n.style.height=m.height}else if(e.contentSize){const m=O.pOsize(n,e.contentSize);n.content.style.width=m.width,n.content.style.height=m.height,n.style.width=m.width,n.content.style.width="100%"}return n},n.resize=(...m)=>{let w=window.getComputedStyle(n),E={width:w.width,height:w.height},g=!0,C;m.forEach(q=>{typeof q=="string"?E=q:typeof q=="object"?E=Object.assign(E,q):typeof q=="boolean"?g=q:typeof q=="function"&&(C=q)});let le=O.pOsize(n,E);n.style.width=le.width,n.style.height=le.height,n.slaves&&n.slaves.size>0&&n.slaves.forEach(q=>q.reposition()),g&&n.saveCurrentDimensions(),n.status="normalized";let he=n.controlbar.querySelector(".jsPanel-btn-smallify");return he&&(he.style.transform="rotate(0deg)"),C&&C.call(n,n),n.calcSizeFactors(),n},n.windowResizeHandler=m=>{if(m.target===window){let w=n.status,E=e.onwindowresize,g,C;if(w==="maximized"&&E)n.maximize(!1,!0);else if(n.snapped&&w!=="minimized")n.snap(n.snapped,!0);else if(w==="normalized"||w==="smallified"||w==="maximized"){let le=typeof E;le==="boolean"?(g=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=g<=0?0:g+"px",C=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=C<=0?0:C+"px"):le==="function"?E.call(n,m,n):le==="object"&&(E.preset===!0&&(g=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=g<=0?0:g+"px",C=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=C<=0?0:C+"px"),E.callback.call(n,m,n))}else w==="smallifiedmax"&&E&&n.maximize(!1,!0).smallify();n.slaves&&n.slaves.size>0&&n.slaves.forEach(le=>le.reposition())}},n.setControls=(m,w)=>(n.header.querySelectorAll(".jsPanel-btn").forEach(E=>{const g=E.className.split("-"),C=g[g.length-1];n.getAttribute(`data-btn${C}`)!=="hidden"&&(E.style.display="block")}),m.forEach(E=>{const g=n.controlbar.querySelector(E);g&&(g.style.display="none")}),w&&w.call(n,n),n),n.setControlStatus=(m,w="enable",E)=>{const g=n.controlbar.querySelector(`.jsPanel-btn-${m}`);switch(w){case"disable":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"disabled"),g.style.pointerEvents="none",g.style.opacity=.4,g.style.cursor="default");break;case"hide":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"hidden"),g.style.display="none");break;case"show":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"enabled"),g.style.display="block",g.style.pointerEvents="auto",g.style.opacity=1,g.style.cursor="pointer");break;case"enable":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.getAttribute(`data-btn${m}`)==="hidden"&&(g.style.display="block"),n.setAttribute(`data-btn${m}`,"enabled"),g.style.pointerEvents="auto",g.style.opacity=1,g.style.cursor="pointer");break;case"remove":n.controlbar.removeChild(g),n.setAttribute(`data-btn${m}`,"removed");break}return E&&E.call(n,n),n},n.setControlSize=m=>{const w=m.toLowerCase();n.controlbar.querySelectorAll(".jsPanel-btn").forEach(g=>{["jsPanel-btn-xl","jsPanel-btn-lg","jsPanel-btn-md","jsPanel-btn-sm","jsPanel-btn-xs"].forEach(C=>g.classList.remove(C)),g.classList.add(`jsPanel-btn-${w}`)}),w==="xl"?n.titlebar.style.fontSize="1.5rem":w==="lg"?n.titlebar.style.fontSize="1.25rem":w==="md"?n.titlebar.style.fontSize="1.05rem":w==="sm"?n.titlebar.style.fontSize=".9rem":w==="xs"&&(n.titlebar.style.fontSize=".8rem")},n.setHeaderControls=m=>{if(n.options.headerControls.add){let C=n.options.headerControls.add;Array.isArray(C)||(C=[C]),C.forEach(le=>n.addControl(le))}let w=[];n.controlbar.querySelectorAll(".jsPanel-btn").forEach(C=>{let le=C.className.match(/jsPanel-btn-[a-z\d]{3,}/i),he=le[0].substring(12);w.push(he)});const g=O.pOheaderControls(e.headerControls);return e.headerControls=g,w.forEach(C=>{g[C]&&n.setControlStatus(C,g[C])}),n.setControlSize(g.size),m&&m.call(n,n),n},n.setHeaderLogo=(m,w)=>{let E=[n.headerlogo],g=document.querySelector("#"+n.id+"-min");return g&&E.push(g.querySelector(".jsPanel-headerlogo")),typeof m=="string"?m.startsWith("<")?E.forEach(C=>C.innerHTML=m):E.forEach(C=>{O.emptyNode(C);let le=document.createElement("img");le.src=m,C.append(le)}):E.forEach(C=>{O.emptyNode(C),C.append(m)}),n.headerlogo.childNodes.forEach(C=>{C.nodeName&&C.nodeName==="IMG"&&C.setAttribute("draggable","false")}),w&&w.call(n,n),n},n.setHeaderRemove=m=>(n.removeChild(n.header),n.content.classList.add("jsPanel-content-noheader"),["close","maximize","normalize","minimize","smallify"].forEach(w=>n.setAttribute(`data-btn${w}`,"removed")),m&&m.call(n,n),n),n.setHeaderTitle=(m,w)=>{let E=[n.headertitle],g=document.querySelector("#"+n.id+"-min");return g&&E.push(g.querySelector(".jsPanel-title")),typeof m=="string"?E.forEach(C=>C.innerHTML=m):typeof m=="function"?E.forEach(C=>{O.emptyNode(C),C.innerHTML=m()}):E.forEach(C=>{O.emptyNode(C),C.append(m)}),w&&w.call(n,n),n},n.setIconfont=(m,w=n,E)=>{if(m){let g,C;if(m==="fa"||m==="far"||m==="fal"||m==="fas"||m==="fad")g=[`${m} fa-window-close`,`${m} fa-window-maximize`,`${m} fa-window-restore`,`${m} fa-window-minimize`,`${m} fa-chevron-up`];else if(m==="material-icons")g=[m,m,m,m,m,m],C=["close","fullscreen","fullscreen_exit","call_received","expand_less"];else if(Array.isArray(m))g=[`custom-control-icon ${m[4]}`,`custom-control-icon ${m[3]}`,`custom-control-icon ${m[2]}`,`custom-control-icon ${m[1]}`,`custom-control-icon ${m[0]}`];else if(m==="bootstrap"||m==="glyphicon")g=["glyphicon glyphicon-remove","glyphicon glyphicon-fullscreen","glyphicon glyphicon-resize-full","glyphicon glyphicon-minus","glyphicon glyphicon-chevron-up"];else return w;w.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(le=>O.emptyNode(le).innerHTML="<span></span>"),Array.prototype.slice.call(w.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((le,he)=>{le.className=g[he],m==="material-icons"&&(le.textContent=C[he])})}return E&&E.call(w,w),w},n.addToolbar=(m,w,E)=>{if(m==="header"?m=n.headertoolbar:m==="footer"&&(m=n.footer),typeof w=="string")m.innerHTML=w;else if(Array.isArray(w))w.forEach(g=>{typeof g=="string"?m.innerHTML+=g:m.append(g)});else if(typeof w=="function"){let g=w.call(n,n);typeof g=="string"?m.innerHTML=g:m.append(g)}else m.append(w);return m.classList.add("active"),E&&E.call(n,n),n},n.addCloseControl=()=>{let m=document.createElement("button"),w=n.content.style.color;return m.classList.add("jsPanel-addCloseCtrl"),m.innerHTML=O.icons.close,m.style.color=w,n.options.rtl&&m.classList.add("rtl"),n.appendChild(m),O.pointerup.forEach(E=>{m.addEventListener(E,g=>{if(g.preventDefault(),g.button&&g.button>0)return!1;n.close(null,!0)})}),O.pointerdown.forEach(E=>{m.addEventListener(E,g=>g.preventDefault())}),n},n.addControl=m=>{if(!m.html)return n;m.position||(m.position=1);const w=n.controlbar.querySelectorAll(".jsPanel-btn").length;let E=document.createElement("button");E.innerHTML=m.html,E.className=`jsPanel-btn jsPanel-btn-${m.name} jsPanel-btn-${e.headerControls.size}`,E.style.color=n.header.style.color,m.position>w?n.controlbar.append(E):n.controlbar.insertBefore(E,n.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${m.position})`));const g=m.ariaLabel||m.name;return g&&E.setAttribute("aria-label",g),O.pointerup.forEach(C=>{E.addEventListener(C,le=>{if(le.preventDefault(),le.button&&le.button>0)return!1;m.handler.call(n,n,E)})}),m.afterInsert&&m.afterInsert.call(E,E),n},n.setRtl=()=>{[n.header,n.content,n.footer].forEach(m=>{m.dir="rtl",e.rtl.lang&&(m.lang=e.rtl.lang)})},n.id=e.id,n.classList.add("jsPanel-"+e.paneltype),e.paneltype==="standard"&&(n.style.zIndex=this.zi.next()),i.append(n),n.front(!1,!1),n.setTheme(e.theme),e.boxShadow&&n.classList.add(`jsPanel-depth-${e.boxShadow}`),e.header){if(e.headerLogo&&n.setHeaderLogo(e.headerLogo),n.setIconfont(e.iconfont),n.setHeaderTitle(e.headerTitle),n.setHeaderControls(),O.isIE){let m=[n.headerbar,n.controlbar];switch(n.options.headerControls.size){case"md":m.forEach(w=>{w.style.height="34px"});break;case"xs":m.forEach(w=>{w.style.height="26px"});break;case"sm":m.forEach(w=>{w.style.height="30px"});break;case"lg":m.forEach(w=>{w.style.height="38px"});break;case"xl":m.forEach(w=>{w.style.height="42px"});break}}if(e.header==="auto-show-hide"){let m="jsPanel-depth-"+e.boxShadow;n.header.style.opacity=0,n.style.backgroundColor="transparent",this.remClass(n,m),this.setClass(n.content,m),n.header.addEventListener("mouseenter",()=>{n.header.style.opacity=1,O.setClass(n,m),O.remClass(n.content,m)}),n.header.addEventListener("mouseleave",()=>{n.header.style.opacity=0,O.remClass(n,m),O.setClass(n.content,m)})}}else n.setHeaderRemove(),e.addCloseControl&&n.addCloseControl();if(e.headerToolbar&&n.addToolbar(n.headertoolbar,e.headerToolbar),e.footerToolbar&&n.addToolbar(n.footer,e.footerToolbar),e.border&&n.setBorder(e.border),e.borderRadius&&n.setBorderRadius(e.borderRadius),e.css)for(const[m,w]of Object.entries(e.css))if(m==="panel")n.className+=` ${w}`;else{let E=n.querySelector(`.jsPanel-${m}`);E&&(E.className+=` ${w}`)}if(e.content&&(typeof e.content=="function"?e.content.call(n,n):typeof e.content=="string"?n.content.innerHTML=e.content:n.content.append(e.content)),e.contentAjax&&this.ajax(e.contentAjax,n),e.contentFetch&&this.fetch(e.contentFetch,n),e.contentOverflow){const m=e.contentOverflow.split(" ");m.length===1?n.content.style.overflow=m[0]:m.length===2&&(n.content.style.overflowX=m[0],n.content.style.overflowY=m[1])}if(e.autoclose){typeof e.autoclose=="number"?e.autoclose={time:e.autoclose+"ms"}:typeof e.autoclose=="string"&&(e.autoclose={time:e.autoclose});let m=Object.assign({},O.defaultAutocloseConfig,e.autoclose);m.time&&typeof m.time=="number"&&(m.time+="ms");let w=n.progressbar.querySelector("div");w.addEventListener("animationend",E=>{E.stopPropagation(),n.progressbar.classList.remove("active"),n.close()}),m.progressbar&&(n.progressbar.classList.add("active"),m.background?O.colorNames[m.background]?n.progressbar.style.background="#"+O.colorNames[m.background]:n.progressbar.style.background=m.background:n.progressbar.classList.add("success-bg")),w.style.animation=`${m.time} progressbar`}if(e.rtl&&n.setRtl(),n.setSize(),n.status="normalized",e.position?this.position(n,e.position):n.style.opacity=1,document.dispatchEvent(h),n.calcSizeFactors(),e.animateIn&&(n.addEventListener("animationend",()=>{this.remClass(n,e.animateIn)}),this.setClass(n,e.animateIn)),e.syncMargins){let m=this.pOcontainment(e.maximizedMargin);e.dragit&&(e.dragit.containment=m,e.dragit.snap===!0?(e.dragit.snap=O.defaultSnapConfig,e.dragit.snap.containment=!0):e.dragit.snap&&(e.dragit.snap.containment=!0)),e.resizeit&&(e.resizeit.containment=m)}if(e.dragit?(["start","drag","stop"].forEach(m=>{e.dragit[m]?typeof e.dragit[m]=="function"&&(e.dragit[m]=[e.dragit[m]]):e.dragit[m]=[]}),n.drag(e.dragit),n.addEventListener("jspaneldragstop",m=>{m.panel===n&&n.calcSizeFactors()},!1)):n.titlebar.style.cursor="default",e.resizeit){["start","resize","stop"].forEach(w=>{e.resizeit[w]?typeof e.resizeit[w]=="function"&&(e.resizeit[w]=[e.resizeit[w]]):e.resizeit[w]=[]}),n.sizeit(e.resizeit);let m;n.addEventListener("jspanelresizestart",w=>{w.panel===n&&(m=n.status)},!1),n.addEventListener("jspanelresizestop",w=>{w.panel===n&&(m==="smallified"||m==="smallifiedmax"||m==="maximized")&&parseFloat(n.style.height)>parseFloat(window.getComputedStyle(n.header).height)&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(h),document.dispatchEvent(l),e.onstatuschange&&O.processCallbacks(n,e.onstatuschange,"every"),n.calcSizeFactors())},!1)}if(n.saveCurrentDimensions(),n.saveCurrentPosition(),e.setStatus&&(e.setStatus==="smallifiedmax"?n.maximize().smallify():e.setStatus==="smallified"?n.smallify():n[e.setStatus.slice(0,-1)]()),this.pointerdown.forEach(m=>{n.addEventListener(m,w=>{!w.target.closest(".jsPanel-btn-close")&&!w.target.closest(".jsPanel-btn-minimize")&&e.paneltype==="standard"&&n.front()},!1)}),e.onwindowresize&&n.options.container==="window"&&window.addEventListener("resize",n.windowResizeHandler,!1),e.onparentresize){let m=e.onparentresize,w=typeof m,E=n.isChildpanel();if(E){const g=E.content;let C=[];n.parentResizeHandler=le=>{if(le.panel===E){C[0]=g.offsetWidth,C[1]=g.offsetHeight;let he=n.status,q,X;he==="maximized"&&m?n.maximize():n.snapped&&he!=="minimized"?n.snap(n.snapped,!0):he==="normalized"||he==="smallified"||he==="maximized"?w==="function"?m.call(n,n,{width:C[0],height:C[1]}):w==="object"&&m.preset===!0?(q=(C[0]-n.offsetWidth)*n.hf,n.style.left=q<=0?0:q+"px",X=(C[1]-n.offsetHeight)*n.vf,n.style.top=X<=0?0:X+"px",m.callback.call(n,n,{width:C[0],height:C[1]})):w==="boolean"&&(q=(C[0]-n.offsetWidth)*n.hf,n.style.left=q<=0?0:q+"px",X=(C[1]-n.offsetHeight)*n.vf,n.style.top=X<=0?0:X+"px"):he==="smallifiedmax"&&m&&n.maximize().smallify()}},document.addEventListener("jspanelresize",n.parentResizeHandler,!1)}}return this.globalCallbacks&&(Array.isArray(this.globalCallbacks)?this.globalCallbacks.forEach(m=>m.call(n,n)):this.globalCallbacks.call(n,n)),e.callback&&(Array.isArray(e.callback)?e.callback.forEach(m=>m.call(n,n)):e.callback.call(n,n)),t&&(Array.isArray(t)?t.forEach(m=>m.call(n,n)):t.call(n,n)),document.dispatchEvent(a),n}};var Yf=Object.defineProperty,Xf=Object.getOwnPropertyDescriptor,Is=(e,t,r,i)=>{for(var n=i>1?void 0:i?Xf(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Yf(t,r,n),n};function Gf(e,t){(sn.instance??Qf()).show(e,t)}function Qf(){const e=document.createElement("table-info-dialog");return document.body.appendChild(e),e}let sn=class extends Ne{constructor(){super(...arguments),this.name="",this.info=null,this.dialogEl=null,this.close=()=>this.dialogEl?.close()}connectedCallback(){super.connectedCallback(),sn.instance=this}disconnectedCallback(){super.disconnectedCallback(),sn.instance===this&&(sn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Gt(this.dialogEl,e)}show(e,t){this.name=e,this.info=t,this.updateComplete.then(()=>this.dialogEl?.showModal())}row(e,t,r){if(!t&&!r)return pe;const i=r?B`<a href=${r} target="_blank" rel="noopener noreferrer">${t||r}</a>`:B`${t}`;return B`<dt>${e}</dt>
      <dd>${i}</dd>`}render(){const e=this.info,t=!!(e?.source||e?.sourceUrl||e?.license||e?.licenseUrl||e?.about||e?.aboutUrl);return B`
      <dialog @cancel=${this.close}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>×</button>
        <div class="dialog-header">
          <h2>${this.name}</h2>
          <div class="header-actions">
            <button type="button" class="ghost" @click=${this.close}>Close</button>
          </div>
        </div>
        <div class="dialog-body">
          ${e?.descriptionHtml?B`<div class="desc">${Zr(e.descriptionHtml)}</div>`:e?.description?B`<div class="desc">${e.description}</div>`:pe}
          ${t?B`<dl>
                ${this.row("Source",e?.source,e?.sourceUrl)}
                ${this.row("License",e?.license,e?.licenseUrl)}
                ${this.row("About",e?.about,e?.aboutUrl)}
              </dl>`:pe}
          ${!e?.description&&!e?.descriptionHtml&&!t?B`<p class="empty">No additional information.</p>`:pe}
        </div>
      </dialog>
    `}};sn.instance=null;sn.styles=[Xt,Je`
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
    `];Is([H()],sn.prototype,"name",2);Is([H()],sn.prototype,"info",2);sn=Is([nt("table-info-dialog")],sn);const Jf=.25,Zf=4;function ep(e){return Math.min(Zf,Math.max(Jf,e))}function ra(e,t,r){return{x:e.x+t,y:e.y+r,scale:e.scale}}const mr={x:0,y:0,scale:1};function ia(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function tp(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function np(e,t){let r={...mr};t.style.transformOrigin="0 0";const i=new Set,n=()=>{t.style.transform=`translate(${r.x}px, ${r.y}px) scale(${r.scale})`;for(const w of i)w({...r})};let a="none",l={...mr},u=0,h=0,y=0,k=0,v=0,I=0;const W=(w,E)=>{const g=e.getBoundingClientRect();return{x:w-g.left,y:E-g.top}},z=w=>{if(w.touches.length===2){a="pinch",l={...r};const[E,g]=[w.touches[0],w.touches[1]];y=ia(E,g)||1;const C=W((E.clientX+g.clientX)/2,(E.clientY+g.clientY)/2);k=(C.x-r.x)/r.scale,v=(C.y-r.y)/r.scale,w.preventDefault();return}if(w.touches.length===1&&!tp(w.target)){const E=w.timeStamp;if(E-I<300){r={...mr},n(),I=0,a="none",w.preventDefault();return}I=E,a="pan",l={...r},u=w.touches[0].clientX,h=w.touches[0].clientY}else a="none"},F=w=>{if(a==="pan"&&w.touches.length===1){const E=w.touches[0];r=ra(l,E.clientX-u,E.clientY-h),n(),w.preventDefault()}else if(a==="pinch"&&w.touches.length>=2){const[E,g]=[w.touches[0],w.touches[1]],C=ep(l.scale*(ia(E,g)/y)),le=W((E.clientX+g.clientX)/2,(E.clientY+g.clientY)/2);r={x:le.x-k*C,y:le.y-v*C,scale:C},n(),w.preventDefault()}},K=w=>{w.touches.length===0?a="none":w.touches.length===1&&a==="pinch"&&(a="pan",l={...r},u=w.touches[0].clientX,h=w.touches[0].clientY)};let oe=!1,_e={...mr},je=0,se=0,ae=!1;const fe=(w,E)=>{const g=e.getBoundingClientRect();return w>=g.left&&w<=g.right&&E>=g.top&&E<=g.bottom},ve=w=>{if(!oe)return;const E=w.clientX-je,g=w.clientY-se;!ae&&Math.hypot(E,g)<4||(ae=!0,document.body.style.cursor="grabbing",r=ra(_e,E,g),n(),w.preventDefault())},Ae=()=>{oe&&(oe=!1,document.body.style.cursor="",window.removeEventListener("mousemove",ve,!0),window.removeEventListener("mouseup",Ze,!0))};function Ze(){Ae()}const rt=w=>{w.button===2&&fe(w.clientX,w.clientY)&&(oe=!0,ae=!1,_e={...r},je=w.clientX,se=w.clientY,window.addEventListener("mousemove",ve,!0),window.addEventListener("mouseup",Ze,!0))},m=w=>{ae&&(w.preventDefault(),ae=!1)};return e.addEventListener("touchstart",z,{passive:!1}),e.addEventListener("touchmove",F,{passive:!1}),e.addEventListener("touchend",K),e.addEventListener("touchcancel",K),window.addEventListener("mousedown",rt,!0),window.addEventListener("contextmenu",m,!0),{snapshot:()=>({...r}),reset:()=>{r={...mr},n()},restore:w=>{r={...w},n()},subscribe:w=>(i.add(w),()=>i.delete(w)),dispose:()=>{e.removeEventListener("touchstart",z),e.removeEventListener("touchmove",F),e.removeEventListener("touchend",K),e.removeEventListener("touchcancel",K),window.removeEventListener("mousedown",rt,!0),window.removeEventListener("contextmenu",m,!0),Ae()}}}function cl(e,t){let r=null;const i=n=>{const a=document.getElementById(e);a&&(a.style.transformOrigin="0 0",a.style.transform=`translate(${-n.x/n.scale}px, ${-n.y/n.scale}px) scale(${1/n.scale})`)};return{enter(){const n=t();r||!n||(i(n.snapshot()),r=n.subscribe(i))},exit(){r?.(),r=null;const n=document.getElementById(e);n&&(n.style.transform="",n.style.transformOrigin="")}}}var rp=Object.defineProperty,ip=Object.getOwnPropertyDescriptor,Er=(e,t,r,i)=>{for(var n=i>1?void 0:i?ip(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&rp(t,r,n),n};let Nn=class extends Ne{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return B`<button
        class="icon ${e?"active":""}"
        title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"}
        @click=${this.openSearch}
      >
        <span class="mi sm">search</span>
      </button>`}return B`<input
      type="search"
      placeholder="search…"
      .value=${this.query}
      @input=${this.onInput}
      @blur=${this.onBlur}
    />`}};Nn.styles=[on,Je`
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
    `];Er([Bt({type:String})],Nn.prototype,"tableId",2);Er([H()],Nn.prototype,"query",2);Er([H()],Nn.prototype,"open",2);Er([tr("input")],Nn.prototype,"inputEl",2);Nn=Er([nt("panel-search")],Nn);var sp=Object.defineProperty,op=Object.getOwnPropertyDescriptor,ir=(e,t,r,i)=>{for(var n=i>1?void 0:i?op(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&sp(t,r,n),n};let En=class extends Ne{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.rowsActive=!1}async connectedCallback(){super.connectedCallback();const e=await ye();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(r=>r.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await ye();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await ye(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const r={};for(const i of t.columns)r[i.field]=ap(i);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:r,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}async runTableButton(e){const t=await ye();try{await Promise.resolve(e.onClick(t.api,{tableId:this.tableId}))}catch(r){console.error(`[table-button:${e.id}]`,r)}}render(){return B`
      <button title="Add a blank row" aria-label="Add row" @click=${this.addRow}>
        <span class="mi sm">add</span>
      </button>
      <button title="Edit columns" aria-label="Columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span>
      </button>
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>B`<button
              title=${e.tooltip??e.label}
              aria-label=${e.label}
              @click=${()=>this.runTableButton(e)}
            >
              ${e.icon?B`<span class="mi sm">${e.icon}</span>`:B`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};En.styles=[on,Je`
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
    `];ir([Bt({type:String})],En.prototype,"tableId",2);ir([Bt({type:Boolean})],En.prototype,"active",2);ir([H()],En.prototype,"rowCount",2);ir([H()],En.prototype,"tableButtons",2);ir([H()],En.prototype,"table",2);En=ir([nt("panel-footer")],En);function ap(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function lp(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function cp(e){const t=document.querySelector("app-shell")?.shadowRoot,r=t?.querySelector("header"),i=t?.querySelector("footer");r&&(e.style.top=`${r.offsetHeight}px`),i&&(e.style.bottom=`${i.offsetHeight}px`)}const Fn=new Map,ti=new Set,ul=new Set;let sa=!1,Rs=null;function up(){return Rs}async function dp(){if(sa)return;sa=!0;const e=await ye(),t=document.getElementById("easydb-panels"),r=document.getElementById("easydb-panels-viewport");if(t&&r){Rs=np(t,r);const n=()=>cp(t);n(),window.addEventListener("resize",n);const a=document.querySelector("app-shell")?.shadowRoot,l=a?.querySelector("header"),u=a?.querySelector("footer");if(typeof ResizeObserver<"u"&&(l||u)){const h=new ResizeObserver(n);l&&h.observe(l),u&&h.observe(u)}}const i=(await e.store.tables.find()).filter(n=>n.workspaceId===e.workspaceId);i.sort(oa);for(const n of i)aa(n,e);e.store.tables.subscribe(n=>{const a=n.filter(h=>h.workspaceId===e.workspaceId),l=new Set(a.map(h=>h.id));for(const[h,y]of Fn)if(!l.has(h)){Fn.delete(h),ti.add(h),ul.add(h);try{y.status!=="closed"&&y.close()}catch{}}const u=a.filter(h=>!Fn.has(h.id)).sort(oa);for(const h of u)aa(h,e)})}function oa(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const hp=200,fp=100,pp=720,mp=360;function gp(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<hp||e.h<fp?null:{...e}}function aa(e,t){const r=`panel-${dl(e.id)}`,i=lp(),n=gp(e.windowGeometry),a=n?.minimized===!0,l=()=>{const E=document.createElement("data-table");return E.tableId=e.id,E.style.height="100%",E},u=a?document.createElement("div"):l();let h=a?null:u,y=e.name,k=-1,v=-1;const I=()=>{typeof ae.setHeaderTitle=="function"&&ae.setHeaderTitle(y+La(k,v))},W=E=>{const g=E.detail;g.key===e.id&&(k=g.count,v=g.total,I())};document.addEventListener(ci,W);const z=()=>{oe.active=!1,h?.remove(),h=null},F=()=>{if(h)return;const E=document.getElementById(r)?.querySelector(".jsPanel-content");if(!E)return;E.replaceChildren();const g=l();E.appendChild(g),h=g,oe.active=!0},K=document.createElement("panel-search");K.tableId=e.id;const oe=document.createElement("panel-footer");oe.tableId=e.id,oe.active=!a;const _e=cl(r,()=>Rs),je=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:yp(),se=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:`${pp} ${mp}`},ae=O.create({id:r,container:i,headerTitle:e.name,footerToolbar:oe,theme:"primary",content:u,...se,position:je,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>rs(e.id,t)},resizeit:{containment:!1,stop:()=>rs(e.id,t)},onfronted:()=>wp(e.id,t),onbeforeclose:()=>ti.has(e.id)?!0:((async()=>await t.api.ui.dialogs.confirm(e.source?`Remove the live table "${e.name}"? Its data stays on the Datasette server.`:`Delete table "${e.name}" and all its rows?`,"Confirm")&&(ti.add(e.id),Fn.get(e.id)?.close()))(),!1),onclosed:async()=>{Fn.delete(e.id),ti.delete(e.id),!ul.delete(e.id)&&await vp(e.id,t)},onstatuschange:E=>{E.status==="minimized"?z():(E.status==="normalized"||E.status==="maximized")&&F(),E.status==="maximized"?_e.enter():_e.exit(),rs(e.id,t)}});Fn.set(e.id,ae);const fe=document.getElementById(r),ve=fe?.querySelector(".jsPanel-controlbar");ve&&ve.prepend(K);const Ae=fe?.querySelector(".jsPanel-titlebar");Ae&&(Ae.tabIndex=-1,Ae.style.outline="none",Ae.addEventListener("pointerdown",()=>Ae.focus()));let Ze=null;const rt=document.createElement("button");rt.type="button",rt.title="Table info",rt.setAttribute("aria-label","Table info"),rt.className="eda-info-btn",rt.textContent="ⓘ",rt.style.cssText="display:none;background:none;border:0;color:inherit;cursor:pointer;font-size:1rem;line-height:1;padding:0 0.3rem;",rt.addEventListener("click",E=>{E.stopPropagation(),Ze&&Gf(y,Ze)}),ve?.prepend(rt);const m=E=>{Ze=E?.info??null,rt.style.display=Ze?"inline-flex":"none"};m(e),n?.maximized&&typeof ae.maximize=="function"?queueMicrotask(()=>ae.maximize?.()):n?.minimized&&typeof ae.minimize=="function"&&queueMicrotask(()=>ae.minimize?.()),t.store.tables.subscribe(E=>{const g=E.find(C=>C.id===e.id);g&&(m(g),g.name!==y&&(y=g.name,I()))});const w=ae.close.bind(ae);ae.close=()=>(document.removeEventListener(ci,W),w())}let bp=0;function yp(){const e=bp++;return{my:"left-top",at:"left-top",offsetX:40+e%8*30,offsetY:80+e%8*30}}async function rs(e,t){const r=document.getElementById(`panel-${dl(e)}`);if(!r)return;const i=Fn.get(e)?.status??"normalized";try{const a=(await t.store.tables.findOne(e))?.windowGeometry,l=i==="minimized",u=i==="maximized";let h=r.offsetLeft,y=r.offsetTop,k=r.offsetWidth,v=r.offsetHeight;(l||u)&&a&&(h=a.x,y=a.y,k=a.w,v=a.h),h<=-9e3&&(h=a?.x??40);const I={x:h,y,w:k,h:v,z:a?.z??0,minimized:l,maximized:u};await t.store.tables.patch(e,{windowGeometry:I,updatedAt:Date.now()})}catch{}}async function wp(e,t){try{const r=await t.store.tables.findOne(e);if(!r)return;const i=r.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...i,z:Date.now()},updatedAt:Date.now()})}catch{}}async function vp(e,t){if(!(await t.store.tables.findOne(e))?.source){const i=t.store.rows(e),n=await i.find();await i.bulkRemove(n.map(a=>a.id))}await t.store.tables.remove(e)}function dl(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}var xp=Object.defineProperty,$p=Object.getOwnPropertyDescriptor,Ut=(e,t,r,i)=>{for(var n=i>1?void 0:i?$p(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&xp(t,r,n),n};let St=class extends Ne{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.tableColumns=[],this.rows=[],this.showColsMenu=!1,this.allRows=[],this.searchQuery="",this.globalQuery="",this.onSearch=e=>{const t=e.detail;t.tableId===this.viewInstanceId&&(this.searchQuery=t.query??"",this.recompute())},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??"",this.recompute()}}get templateOn(){return this.instance?.templateEnabled!==!1}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:table-search",this.onSearch),document.addEventListener("easydb:global-search",this.onGlobalSearch),await this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:table-search",this.onSearch),document.removeEventListener("easydb:global-search",this.onGlobalSearch),this.rowsUnsub?.(),this.instUnsub?.()}async updated(e){e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}async reload(){this.rowsUnsub?.(),this.loaded=!1,await this.load()}async load(){if(!this.viewInstanceId)return;this.rowsUnsub?.(),this.instUnsub?.();const e=await ye(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const r=await e.store.tables.findOne(t.tableId);this.tableColumns=r?.columns??[],r&&t.tableName!==r.name&&e.store.viewInstances.patch(t.id,{tableName:r.name});const i=new Map(this.tableColumns.map(a=>[a.field,a]));this.columns=t.visibleColumns.map(a=>i.get(a)??{field:a,label:a,type:"string"}),this.instUnsub=e.store.viewInstances.subscribe(a=>{const l=a.find(u=>u.id===this.viewInstanceId);if(l){if(l.tableId!==this.instance?.tableId){this.instance=l,this.reload();return}this.instance=l,this.recompute()}});const n=e.store.rows(t.tableId);this.rowsUnsub=n.subscribe(a=>{this.allRows=a,this.recompute()}),this.allRows=await n.find(),this.recompute(),this.loaded=!0}recompute(){if(!this.instance)return;let e=cf(this.allRows,this.instance);const t=(n,a)=>Object.values(n.data).some(l=>l!=null&&String(l).toLowerCase().includes(a)),r=this.searchQuery.trim(),i=this.globalQuery.trim();r&&(e=li(e,r,t)),i&&(e=li(e,i,t)),this.rows=e,this.templateOn&&za(this.viewInstanceId,e.length,this.allRows.length)}async toggleTemplate(){if(!this.instance)return;const e=!this.templateOn;await(await ye()).store.viewInstances.patch(this.instance.id,{templateEnabled:e,updatedAt:Date.now()}),this.instance={...this.instance,templateEnabled:e},this.showColsMenu=!1}editTemplate(){!this.instance||!this.template||fs(this.instance.tableId,{editTemplateId:this.template.id})}editView(){this.instance&&fs(this.instance.tableId,{editInstanceId:this.instance.id})}async toggleColumn(e){if(!this.instance)return;const t=this.instance.visibleColumns,i=t.includes(e)?t.filter(a=>a!==e):[...t,e];if(i.length===0)return;await(await ye()).store.viewInstances.patch(this.instance.id,{visibleColumns:i,updatedAt:Date.now()}),this.instance={...this.instance,visibleColumns:i}}renderTable(){return this.rows.length===0?B`<div class="vw-empty">No rows.</div>`:B`
      <table class="vw-table">
        <thead>
          <tr>
            ${this.columns.map(e=>B`<th>${e.label||e.field}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map(e=>B`<tr>
                ${this.columns.map(t=>{const r=e.data[t.field];return B`<td>${r==null?"":String(r)}</td>`})}
              </tr>`)}
        </tbody>
      </table>
    `}renderTemplated(){const e=this.template;if(!e)return B`<div class="vw-empty">This view's template is missing.</div>`;if(uf(e.rowHtml)){const t=this.instance?.mapping??{},r=this.rows.map(n=>of(e.rowHtml,n,t)).join(""),i=(e.headerHtml??"")+r+(e.footerHtml??"");return B`<div class="vw-root">${Zr(i)}</div>`}return B`<div class="vw-root">
      ${e.headerHtml?.trim()?B`<div class="vw-html">${Zr(e.headerHtml)}</div>`:pe}
      ${this.renderTable()}
      ${e.footerHtml?.trim()?B`<div class="vw-html">${Zr(e.footerHtml)}</div>`:pe}
    </div>`}renderFooter(){if(!this.instance)return pe;const e=this.templateOn,t=new Set(this.instance.visibleColumns);return B`<div class="vw-footer">
      ${!e&&this.showColsMenu?B`<div class="cols-menu">
            ${this.tableColumns.map(r=>B`<label
                  ><input
                    type="checkbox"
                    .checked=${t.has(r.field)}
                    @change=${()=>void this.toggleColumn(r.field)}
                  />${r.label||r.field}</label
                >`)}
          </div>`:pe}
      ${e?pe:B`<button
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
      ${this.template?B`<button
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
    </div>`}render(){if(!this.loaded)return B`<div class="vw-body scroll"><div class="vw-loading">Loading…</div></div>`;if(this.error)return B`<div class="vw-body scroll"><div class="vw-empty">${this.error}</div></div>`;const t=this.templateOn?B`<div class="vw-body scroll">${this.renderTemplated()}</div>`:B`<div class="vw-body grid">
          <data-table
            .tableId=${this.instance?.tableId??""}
            .viewInstanceId=${this.viewInstanceId}
          ></data-table>
        </div>`;return B`${t}${this.renderFooter()}`}};St.styles=[on,Je`
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
    `];Ut([Bt({type:String})],St.prototype,"viewInstanceId",2);Ut([H()],St.prototype,"loaded",2);Ut([H()],St.prototype,"error",2);Ut([H()],St.prototype,"instance",2);Ut([H()],St.prototype,"template",2);Ut([H()],St.prototype,"columns",2);Ut([H()],St.prototype,"tableColumns",2);Ut([H()],St.prototype,"rows",2);Ut([H()],St.prototype,"showColsMenu",2);Ut([H()],St.prototype,"searchQuery",2);Ut([H()],St.prototype,"globalQuery",2);St=Ut([nt("view-window")],St);const Wt=new Map;let la=!1;function ca(e){e.panel.setHeaderTitle?.(e.name+La(e.count,e.total))}function Cp(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function kp(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function hl(e){return`view-panel-${kp(e)}`}async function Ep(){if(la)return;la=!0;const e=await ye(),t=r=>r.filter(i=>i.workspaceId===e.workspaceId&&i.open);for(const r of t(await e.store.viewInstances.find()))ua(r,e);e.store.viewInstances.subscribe(r=>{const i=new Map(t(r).map(n=>[n.id,n]));for(const n of[...Wt.keys()])i.has(n)||_p(n);for(const[n,a]of i)Wt.has(n)||ua(a,e)}),e.store.tables.subscribe(r=>void Sp(e,r)),document.addEventListener(ci,r=>{const i=r.detail,n=Wt.get(i.key);n&&(n.count=i.count,n.total=i.total,ca(n))}),document.addEventListener("easydb:reload-view",r=>{const i=r.detail?.instanceId;if(!i)return;const n=Wt.get(i);n&&(async()=>{const a=await e.store.viewInstances.findOne(i);a&&(n.name=a.name,ca(n)),n.el.reload()})()}),document.addEventListener("easydb:reload-views",()=>{for(const{el:r}of Wt.values())r.reload()})}async function Sp(e,t){const r=t.filter(l=>l.workspaceId===e.workspaceId),i=new Set(r.map(l=>l.id)),n=new Map;for(const l of r)n.has(l.name)||n.set(l.name,l);const a=await e.store.viewInstances.find();for(const l of a){if(l.workspaceId!==e.workspaceId||i.has(l.tableId)||!l.tableName)continue;const u=n.get(l.tableName);u&&await e.store.viewInstances.patch(l.id,{tableId:u.id,updatedAt:Date.now()})}}function ua(e,t){if(Wt.has(e.id))return;const r=hl(e.id),i=document.createElement("view-window");i.viewInstanceId=e.id,i.style.height="100%";const n=e.windowGeometry,a=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:"480 520"},l=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:{my:"center-top",at:"center-top",offsetY:60},u=cl(r,up),h=O.create({id:r,container:Cp(),headerTitle:e.name,theme:"#0891b2",content:i,...a,position:l,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>void is(e.id)},resizeit:{containment:!1,stop:()=>void is(e.id)},onstatuschange:I=>{I.status==="maximized"?u.enter():u.exit(),is(e.id)},onclosed:()=>{Wt.delete(e.id),u.exit(),t.store.viewInstances.patch(e.id,{open:!1,updatedAt:Date.now()}).catch(()=>{})}});Wt.set(e.id,{panel:h,el:i,name:e.name,count:-1,total:-1});const y=document.getElementById(r),k=document.createElement("panel-search");k.tableId=e.id,y?.querySelector(".jsPanel-controlbar")?.prepend(k);const v=y?.querySelector(".jsPanel-titlebar");v&&(v.tabIndex=-1,v.style.outline="none",v.addEventListener("pointerdown",()=>v.focus())),n?.maximized?queueMicrotask(()=>h.maximize?.()):n?.minimized&&queueMicrotask(()=>h.minimize?.())}function _p(e){const t=Wt.get(e);if(t){Wt.delete(e);try{t.panel.status!=="closed"&&t.panel.close()}catch{}}}async function is(e){const t=document.getElementById(hl(e)),r=Wt.get(e);if(!t||!r)return;const i=r.panel.status,n=i==="minimized",a=i==="maximized";try{const l=await ye(),u=(await l.store.viewInstances.findOne(e))?.windowGeometry;let h=t.offsetLeft,y=t.offsetTop,k=t.offsetWidth,v=t.offsetHeight;(n||a)&&u&&(h=u.x,y=u.y,k=u.w,v=u.h),h<=-9e3&&(h=u?.x??40);const I={x:h,y,w:k,h:v,z:0,minimized:n,maximized:a};await l.store.viewInstances.patch(e,{windowGeometry:I,updatedAt:Date.now()})}catch{}}var Ap=Object.defineProperty,Pp=Object.getOwnPropertyDescriptor,fl=(e,t,r,i)=>{for(var n=i>1?void 0:i?Pp(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Ap(t,r,n),n};let di=class extends Ne{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await ye();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(r=>this.tables=r.filter(i=>i.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(r=>r.workspaceId===this.workspaceId),await dp(),await Ep()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?B``:B`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on the
      page, or click <strong>+ New Table</strong> above.
    </div>`}};di.styles=Je`
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
  `;fl([H()],di.prototype,"tables",2);di=fl([nt("table-list")],di);var Tp=Object.defineProperty,Dp=Object.getOwnPropertyDescriptor,js=(e,t,r,i)=>{for(var n=i>1?void 0:i?Dp(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Tp(t,r,n),n};let vr=class extends Ne{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await ye();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);if(!t)return;const r=new URLSearchParams(location.search);r.set("space",t.name);const i=`${location.pathname}?${r.toString()}${location.hash}`;location.assign(i)}async addWorkspace(){const t=await(await ye()).api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const r=new URLSearchParams(location.search);r.set("space",t.trim()),location.assign(`${location.pathname}?${r.toString()}${location.hash}`)}render(){return B`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>B`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};vr.styles=[on,Je`
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
  `];js([H()],vr.prototype,"workspaces",2);js([H()],vr.prototype,"current",2);vr=js([nt("workspace-selector")],vr);var da=Object.freeze,pl=Object.defineProperty,Ip=Object.getOwnPropertyDescriptor,fn=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ip(t,r):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&pl(t,r,n),n},Rp=(e,t)=>da(pl(e,"raw",{value:da(e.slice())})),ha;function jp(e){return e?e.trimStart().startsWith("<svg")?B`<span class="icon-svg">${pc(e)}</span>`:B`<span class="mi sm">${e}</span>`:""}let Yt=class extends Ne{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId,{notice:t.detail.notice})},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{fa(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!fa(e))return;e.preventDefault();const t=await ye(),r=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:r,event:e});for(const i of[...t.registries.dropHandlers])try{if(await i(e,t.api))return}catch(n){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:n})}},this.runSlot=e=>{this.api&&Promise.resolve(e.onClick(this.api)).catch(t=>{console.error(`[footer-button:${e.id}]`,t)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager)}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await ye();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e))}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){const r=t==="header"||e.variant==="primary"?"primary":"slot";return B`
      <button class=${r} title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
        ${jp(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return B(ha||(ha=Rp([`
      <header>
        <strong>easyDBAccess <span class="version">v0.0.80</span></strong>
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
    `])),this.headerButtons.map(e=>this.renderSlotButton(e,"header")),this.searchOpen?B`<span class="search-wrap">
              <input
                class="search"
                type="search"
                placeholder="search all tables…"
                .value=${this.searchQuery}
                @input=${this.onSearchInput}
                @blur=${this.closeSearchOnBlur}
              />
              ${this.searchQuery.length>0?B`<button
                    class="search-clear"
                    title="Clear search"
                    aria-label="Clear search"
                    @mousedown=${this.clearSearch}
                  >
                    ×
                  </button>`:""}
            </span>`:B`<button
              class="icon-btn ${this.searchQuery.trim().length>0?"active":""}"
              title=${this.searchQuery.trim().length>0?`Filtering all tables: ${this.searchQuery}`:"Search across all tables in this workspace"}
              @click=${this.openSearch}
            >
              <span class="mi">search</span>
            </button>`,this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};Yt.styles=[on,Je`
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
    `];fn([tr("new-table-dialog")],Yt.prototype,"dialog",2);fn([tr("csv-paste-dialog")],Yt.prototype,"csvPasteDialog",2);fn([tr("plugin-manager-dialog")],Yt.prototype,"pluginManagerDialog",2);fn([tr("input.search")],Yt.prototype,"searchInput",2);fn([H()],Yt.prototype,"footerButtons",2);fn([H()],Yt.prototype,"headerButtons",2);fn([H()],Yt.prototype,"searchQuery",2);fn([H()],Yt.prototype,"searchOpen",2);Yt=fn([nt("app-shell")],Yt);function fa(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([ye(),Ml(()=>Promise.resolve().then(()=>il),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});
//# sourceMappingURL=index-XitrrO3F.js.map
