(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const Sc="modulepreload",_c=function(e){return"/easydbaccess/"+e},Mo={},In=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){let l=function(g){return Promise.all(g.map(x=>Promise.resolve(x).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),d=c?.nonce||c?.getAttribute("nonce");n=l(r.map(g=>{if(g=_c(g),g in Mo)return;Mo[g]=!0;const x=g.endsWith(".css"),y=x?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${y}`))return;const S=document.createElement("link");if(S.rel=x?"stylesheet":Sc,x||(S.as="script"),S.crossOrigin="",S.href=g,d&&S.setAttribute("nonce",d),document.head.appendChild(S),x)return new Promise((U,N)=>{S.addEventListener("load",U),S.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${g}`)))})}))}function o(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return n.then(l=>{for(const c of l||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mi=globalThis,Us=mi.ShadowRoot&&(mi.ShadyCSS===void 0||mi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qs=Symbol(),Bo=new WeakMap;let Ka=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==qs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Us&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=Bo.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Bo.set(r,t))}return t}toString(){return this.cssText}};const Tc=e=>new Ka(typeof e=="string"?e:e+"",void 0,qs),He=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,o)=>i+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1],e[0]);return new Ka(r,e,qs)},Ac=(e,t)=>{if(Us)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),n=mi.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)}},No=Us?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return Tc(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Pc,defineProperty:Ic,getOwnPropertyDescriptor:Dc,getOwnPropertyNames:Rc,getOwnPropertySymbols:Oc,getPrototypeOf:jc}=Object,Ti=globalThis,Uo=Ti.trustedTypes,zc=Uo?Uo.emptyScript:"",Fc=Ti.reactiveElementPolyfillSupport,Sr=(e,t)=>e,bi={toAttribute(e,t){switch(t){case Boolean:e=e?zc:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Hs=(e,t)=>!Pc(e,t),qo={attribute:!0,type:String,converter:bi,reflect:!1,useDefault:!1,hasChanged:Hs};Symbol.metadata??=Symbol("metadata"),Ti.litPropertyMetadata??=new WeakMap;let nr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=qo){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,r);n!==void 0&&Ic(this.prototype,t,n)}}static getPropertyDescriptor(t,r,i){const{get:n,set:o}=Dc(this.prototype,t)??{get(){return this[r]},set(l){this[r]=l}};return{get:n,set(l){const c=n?.call(this);o?.call(this,l),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??qo}static _$Ei(){if(this.hasOwnProperty(Sr("elementProperties")))return;const t=jc(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Sr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Sr("properties"))){const r=this.properties,i=[...Rc(r),...Oc(r)];for(const n of i)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)r.unshift(No(n))}else t!==void 0&&r.push(No(t));return r}static _$Eu(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ac(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$ET(t,r){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:bi).toAttribute(r,i.type);this._$Em=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,r){const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const o=i.getPropertyOptions(n),l=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:bi;this._$Em=n;const c=l.fromAttribute(r,o.type);this[n]=c??this._$Ej?.get(n)??c,this._$Em=null}}requestUpdate(t,r,i,n=!1,o){if(t!==void 0){const l=this.constructor;if(n===!1&&(o=this[t]),i??=l.getPropertyOptions(t),!((i.hasChanged??Hs)(o,r)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(l._$Eu(t,i))))return;this.C(t,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:i,reflect:n,wrapped:o},l){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,l??r??this[t]),o!==!0||l!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i){const{wrapped:l}=o,c=this[n];l!==!0||this._$AL.has(n)||c===void 0||this.C(n,void 0,o,c)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(r)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};nr.elementStyles=[],nr.shadowRootOptions={mode:"open"},nr[Sr("elementProperties")]=new Map,nr[Sr("finalized")]=new Map,Fc?.({ReactiveElement:nr}),(Ti.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ws=globalThis,Ho=e=>e,yi=Ws.trustedTypes,Wo=yi?yi.createPolicy("lit-html",{createHTML:e=>e}):void 0,Va="$lit$",Pn=`lit$${Math.random().toFixed(9).slice(2)}$`,Ga="?"+Pn,Lc=`<${Ga}>`,Hn=document,_r=()=>Hn.createComment(""),Tr=e=>e===null||typeof e!="object"&&typeof e!="function",Ks=Array.isArray,Mc=e=>Ks(e)||typeof e?.[Symbol.iterator]=="function",ms=`[ 	
\f\r]`,kr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ko=/-->/g,Vo=/>/g,Un=RegExp(`>|${ms}(?:([^\\s"'>=/]+)(${ms}*=${ms}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Go=/'/g,Yo=/"/g,Ya=/^(?:script|style|textarea|title)$/i,Bc=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),I=Bc(1),Wn=Symbol.for("lit-noChange"),be=Symbol.for("lit-nothing"),Xo=new WeakMap,qn=Hn.createTreeWalker(Hn,129);function Xa(e,t){if(!Ks(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Wo!==void 0?Wo.createHTML(t):t}const Nc=(e,t)=>{const r=e.length-1,i=[];let n,o=t===2?"<svg>":t===3?"<math>":"",l=kr;for(let c=0;c<r;c++){const d=e[c];let g,x,y=-1,S=0;for(;S<d.length&&(l.lastIndex=S,x=l.exec(d),x!==null);)S=l.lastIndex,l===kr?x[1]==="!--"?l=Ko:x[1]!==void 0?l=Vo:x[2]!==void 0?(Ya.test(x[2])&&(n=RegExp("</"+x[2],"g")),l=Un):x[3]!==void 0&&(l=Un):l===Un?x[0]===">"?(l=n??kr,y=-1):x[1]===void 0?y=-2:(y=l.lastIndex-x[2].length,g=x[1],l=x[3]===void 0?Un:x[3]==='"'?Yo:Go):l===Yo||l===Go?l=Un:l===Ko||l===Vo?l=kr:(l=Un,n=void 0);const U=l===Un&&e[c+1].startsWith("/>")?" ":"";o+=l===kr?d+Lc:y>=0?(i.push(g),d.slice(0,y)+Va+d.slice(y)+Pn+U):d+Pn+(y===-2?c:U)}return[Xa(e,o+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class Ar{constructor({strings:t,_$litType$:r},i){let n;this.parts=[];let o=0,l=0;const c=t.length-1,d=this.parts,[g,x]=Nc(t,r);if(this.el=Ar.createElement(g,i),qn.currentNode=this.el.content,r===2||r===3){const y=this.el.content.firstChild;y.replaceWith(...y.childNodes)}for(;(n=qn.nextNode())!==null&&d.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const y of n.getAttributeNames())if(y.endsWith(Va)){const S=x[l++],U=n.getAttribute(y).split(Pn),N=/([.?@])?(.*)/.exec(S);d.push({type:1,index:o,name:N[2],strings:U,ctor:N[1]==="."?qc:N[1]==="?"?Hc:N[1]==="@"?Wc:Ai}),n.removeAttribute(y)}else y.startsWith(Pn)&&(d.push({type:6,index:o}),n.removeAttribute(y));if(Ya.test(n.tagName)){const y=n.textContent.split(Pn),S=y.length-1;if(S>0){n.textContent=yi?yi.emptyScript:"";for(let U=0;U<S;U++)n.append(y[U],_r()),qn.nextNode(),d.push({type:2,index:++o});n.append(y[S],_r())}}}else if(n.nodeType===8)if(n.data===Ga)d.push({type:2,index:o});else{let y=-1;for(;(y=n.data.indexOf(Pn,y+1))!==-1;)d.push({type:7,index:o}),y+=Pn.length-1}o++}}static createElement(t,r){const i=Hn.createElement("template");return i.innerHTML=t,i}}function ir(e,t,r=e,i){if(t===Wn)return t;let n=i!==void 0?r._$Co?.[i]:r._$Cl;const o=Tr(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),o===void 0?n=void 0:(n=new o(e),n._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=n:r._$Cl=n),n!==void 0&&(t=ir(e,n._$AS(e,t.values),n,i)),t}class Uc{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:i}=this._$AD,n=(t?.creationScope??Hn).importNode(r,!0);qn.currentNode=n;let o=qn.nextNode(),l=0,c=0,d=i[0];for(;d!==void 0;){if(l===d.index){let g;d.type===2?g=new Dr(o,o.nextSibling,this,t):d.type===1?g=new d.ctor(o,d.name,d.strings,this,t):d.type===6&&(g=new Kc(o,this,t)),this._$AV.push(g),d=i[++c]}l!==d?.index&&(o=qn.nextNode(),l++)}return qn.currentNode=Hn,n}p(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class Dr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,n){this.type=2,this._$AH=be,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=ir(this,t,r),Tr(t)?t===be||t==null||t===""?(this._$AH!==be&&this._$AR(),this._$AH=be):t!==this._$AH&&t!==Wn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Mc(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==be&&Tr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Hn.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Ar.createElement(Xa(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(r);else{const o=new Uc(n,this),l=o.u(this.options);o.p(r),this.T(l),this._$AH=o}}_$AC(t){let r=Xo.get(t.strings);return r===void 0&&Xo.set(t.strings,r=new Ar(t)),r}k(t){Ks(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const o of t)n===r.length?r.push(i=new Dr(this.O(_r()),this.O(_r()),this,this.options)):i=r[n],i._$AI(o),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const i=Ho(t).nextSibling;Ho(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Ai{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,n,o){this.type=1,this._$AH=be,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=be}_$AI(t,r=this,i,n){const o=this.strings;let l=!1;if(o===void 0)t=ir(this,t,r,0),l=!Tr(t)||t!==this._$AH&&t!==Wn,l&&(this._$AH=t);else{const c=t;let d,g;for(t=o[0],d=0;d<o.length-1;d++)g=ir(this,c[i+d],r,d),g===Wn&&(g=this._$AH[d]),l||=!Tr(g)||g!==this._$AH[d],g===be?t=be:t!==be&&(t+=(g??"")+o[d+1]),this._$AH[d]=g}l&&!n&&this.j(t)}j(t){t===be?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class qc extends Ai{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===be?void 0:t}}class Hc extends Ai{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==be)}}class Wc extends Ai{constructor(t,r,i,n,o){super(t,r,i,n,o),this.type=5}_$AI(t,r=this){if((t=ir(this,t,r,0)??be)===Wn)return;const i=this._$AH,n=t===be&&i!==be||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==be&&(i===be||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Kc{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ir(this,t)}}const Vc=Ws.litHtmlPolyfillSupport;Vc?.(Ar,Dr),(Ws.litHtmlVersions??=[]).push("3.3.3");const Gc=(e,t,r)=>{const i=r?.renderBefore??t;let n=i._$litPart$;if(n===void 0){const o=r?.renderBefore??null;i._$litPart$=n=new Dr(t.insertBefore(_r(),o),o,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vs=globalThis;let Ne=class extends nr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Gc(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Wn}};Ne._$litElement$=!0,Ne.finalized=!0,Vs.litElementHydrateSupport?.({LitElement:Ne});const Yc=Vs.litElementPolyfillSupport;Yc?.({LitElement:Ne});(Vs.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xc={attribute:!0,type:String,converter:bi,reflect:!1,hasChanged:Hs},Qc=(e=Xc,t,r)=>{const{kind:i,metadata:n}=r;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(r.name,e),i==="accessor"){const{name:l}=r;return{set(c){const d=t.get.call(this);t.set.call(this,c),this.requestUpdate(l,d,e,!0,c)},init(c){return c!==void 0&&this.C(l,void 0,e,c),c}}}if(i==="setter"){const{name:l}=r;return function(c){const d=this[l];t.call(this,c),this.requestUpdate(l,d,e,!0,c)}}throw Error("Unsupported decorator location: "+i)};function Mt(e){return(t,r)=>typeof r=="object"?Qc(e,t,r):((i,n,o)=>{const l=n.hasOwnProperty(o);return n.constructor.createProperty(o,i),l?Object.getOwnPropertyDescriptor(n,o):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function W(e){return Mt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jc=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dn(e,t){return(r,i,n)=>{const o=l=>l.renderRoot?.querySelector(e)??null;return Jc(r,i,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zc={CHILD:2},Qa=e=>(...t)=>({_$litDirective$:e,values:t});class eu{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class wi extends eu{constructor(t){if(super(t),this.it=be,t.type!==Zc.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===be||t==null)return this._t=void 0,this.it=t;if(t===Wn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}wi.directiveName="unsafeHTML",wi.resultType=1;const rr=Qa(wi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Es extends wi{}Es.directiveName="unsafeSVG",Es.resultType=2;const Gs=Qa(Es);var tu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function nu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gi={exports:{}},ru=gi.exports,Qo;function iu(){return Qo||(Qo=1,(function(e,t){(function(r,i){e.exports=i()})(ru,function(){var r=function(s,a){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,h){u.__proto__=h}||function(u,h){for(var f in h)Object.prototype.hasOwnProperty.call(h,f)&&(u[f]=h[f])})(s,a)},i=function(){return(i=Object.assign||function(s){for(var a,u=1,h=arguments.length;u<h;u++)for(var f in a=arguments[u])Object.prototype.hasOwnProperty.call(a,f)&&(s[f]=a[f]);return s}).apply(this,arguments)};function n(s,a,u){for(var h,f=0,p=a.length;f<p;f++)!h&&f in a||((h=h||Array.prototype.slice.call(a,0,f))[f]=a[f]);return s.concat(h||Array.prototype.slice.call(a))}var o=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:tu,l=Object.keys,c=Array.isArray;function d(s,a){return typeof a!="object"||l(a).forEach(function(u){s[u]=a[u]}),s}typeof Promise>"u"||o.Promise||(o.Promise=Promise);var g=Object.getPrototypeOf,x={}.hasOwnProperty;function y(s,a){return x.call(s,a)}function S(s,a){typeof a=="function"&&(a=a(g(s))),(typeof Reflect>"u"?l:Reflect.ownKeys)(a).forEach(function(u){N(s,u,a[u])})}var U=Object.defineProperty;function N(s,a,u,h){U(s,a,d(u&&y(u,"get")&&typeof u.get=="function"?{get:u.get,set:u.set,configurable:!0}:{value:u,configurable:!0,writable:!0},h))}function F(s){return{from:function(a){return s.prototype=Object.create(a.prototype),N(s.prototype,"constructor",s),{extend:S.bind(null,s.prototype)}}}}var q=Object.getOwnPropertyDescriptor,G=[].slice;function he(s,a,u){return G.call(s,a,u)}function ee(s,a){return a(s)}function ie(s){if(!s)throw new Error("Assertion Failed")}function V(s){o.setImmediate?setImmediate(s):setTimeout(s,0)}function J(s,a){if(typeof a=="string"&&y(s,a))return s[a];if(!a)return s;if(typeof a!="string"){for(var u=[],h=0,f=a.length;h<f;++h){var p=J(s,a[h]);u.push(p)}return u}var w=a.indexOf(".");if(w!==-1){var $=s[a.substr(0,w)];return $==null?void 0:J($,a.substr(w+1))}}function ue(s,a,u){if(s&&a!==void 0&&!("isFrozen"in Object&&Object.isFrozen(s)))if(typeof a!="string"&&"length"in a){ie(typeof u!="string"&&"length"in u);for(var h=0,f=a.length;h<f;++h)ue(s,a[h],u[h])}else{var p,w,$=a.indexOf(".");$!==-1?(p=a.substr(0,$),(w=a.substr($+1))===""?u===void 0?c(s)&&!isNaN(parseInt(p))?s.splice(p,1):delete s[p]:s[p]=u:ue($=!($=s[p])||!y(s,p)?s[p]={}:$,w,u)):u===void 0?c(s)&&!isNaN(parseInt(a))?s.splice(a,1):delete s[a]:s[a]=u}}function we(s){var a,u={};for(a in s)y(s,a)&&(u[a]=s[a]);return u}var Ae=[].concat;function $e(s){return Ae.apply([],s)}var pn="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat($e([8,16,32,64].map(function(s){return["Int","Uint","Float"].map(function(a){return a+s+"Array"})}))).filter(function(s){return o[s]}),m=new Set(pn.map(function(s){return o[s]})),v=null;function E(s){return v=new WeakMap,s=(function a(u){if(!u||typeof u!="object")return u;var h=v.get(u);if(h)return h;if(c(u)){h=[],v.set(u,h);for(var f=0,p=u.length;f<p;++f)h.push(a(u[f]))}else if(m.has(u.constructor))h=u;else{var w,$=g(u);for(w in h=$===Object.prototype?{}:Object.create($),v.set(u,h),u)y(u,w)&&(h[w]=a(u[w]))}return h})(s),v=null,s}var b={}.toString;function C(s){return b.call(s).slice(8,-1)}var de=typeof Symbol<"u"?Symbol.iterator:"@@iterator",ye=typeof de=="symbol"?function(s){var a;return s!=null&&(a=s[de])&&a.apply(s)}:function(){return null};function K(s,a){return a=s.indexOf(a),0<=a&&s.splice(a,1),0<=a}var Q={};function Xe(s){var a,u,h,f;if(arguments.length===1){if(c(s))return s.slice();if(this===Q&&typeof s=="string")return[s];if(f=ye(s)){for(u=[];!(h=f.next()).done;)u.push(h.value);return u}if(s==null)return[s];if(typeof(a=s.length)!="number")return[s];for(u=new Array(a);a--;)u[a]=s[a];return u}for(a=arguments.length,u=new Array(a);a--;)u[a]=arguments[a];return u}var ct=typeof Symbol<"u"?function(s){return s[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Pe=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Nt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Pe),sn={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function We(s,a){this.name=s,this.message=a}function Me(s,a){return s+". Errors: "+Object.keys(a).map(function(u){return a[u].toString()}).filter(function(u,h,f){return f.indexOf(u)===h}).join(`
`)}function _e(s,a,u,h){this.failures=a,this.failedKeys=h,this.successCount=u,this.message=Me(s,a)}function Oe(s,a){this.name="BulkError",this.failures=Object.keys(a).map(function(u){return a[u]}),this.failuresByPos=a,this.message=Me(s,this.failures)}F(We).from(Error).extend({toString:function(){return this.name+": "+this.message}}),F(_e).from(We),F(Oe).from(We);var Qe=Nt.reduce(function(s,a){return s[a]=a+"Error",s},{}),De=We,oe=Nt.reduce(function(s,a){var u=a+"Error";function h(f,p){this.name=u,f?typeof f=="string"?(this.message="".concat(f).concat(p?`
 `+p:""),this.inner=p||null):typeof f=="object"&&(this.message="".concat(f.name," ").concat(f.message),this.inner=f):(this.message=sn[a]||u,this.inner=null)}return F(h).from(De),s[a]=h,s},{});oe.Syntax=SyntaxError,oe.Type=TypeError,oe.Range=RangeError;var Je=Pe.reduce(function(s,a){return s[a+"Error"]=oe[a],s},{}),Be=Nt.reduce(function(s,a){return["Syntax","Type","Range"].indexOf(a)===-1&&(s[a+"Error"]=oe[a]),s},{});function me(){}function Ce(s){return s}function Pt(s,a){return s==null||s===Ce?a:function(u){return a(s(u))}}function fe(s,a){return function(){s.apply(this,arguments),a.apply(this,arguments)}}function Ze(s,a){return s===me?a:function(){var u=s.apply(this,arguments);u!==void 0&&(arguments[0]=u);var h=this.onsuccess,f=this.onerror;this.onsuccess=null,this.onerror=null;var p=a.apply(this,arguments);return h&&(this.onsuccess=this.onsuccess?fe(h,this.onsuccess):h),f&&(this.onerror=this.onerror?fe(f,this.onerror):f),p!==void 0?p:u}}function xn(s,a){return s===me?a:function(){s.apply(this,arguments);var u=this.onsuccess,h=this.onerror;this.onsuccess=this.onerror=null,a.apply(this,arguments),u&&(this.onsuccess=this.onsuccess?fe(u,this.onsuccess):u),h&&(this.onerror=this.onerror?fe(h,this.onerror):h)}}function Jt(s,a){return s===me?a:function(u){var h=s.apply(this,arguments);d(u,h);var f=this.onsuccess,p=this.onerror;return this.onsuccess=null,this.onerror=null,u=a.apply(this,arguments),f&&(this.onsuccess=this.onsuccess?fe(f,this.onsuccess):f),p&&(this.onerror=this.onerror?fe(p,this.onerror):p),h===void 0?u===void 0?void 0:u:d(h,u)}}function nt(s,a){return s===me?a:function(){return a.apply(this,arguments)!==!1&&s.apply(this,arguments)}}function It(s,a){return s===me?a:function(){var u=s.apply(this,arguments);if(u&&typeof u.then=="function"){for(var h=this,f=arguments.length,p=new Array(f);f--;)p[f]=arguments[f];return u.then(function(){return a.apply(h,p)})}return a.apply(this,arguments)}}Be.ModifyError=_e,Be.DexieError=We,Be.BulkError=Oe;var Fe=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ke(s){Fe=s}var kt={},it=100,pn=typeof Promise>"u"?[]:(function(){var s=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[s,g(s),s];var a=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[a,g(a),s]})(),Pe=pn[0],Nt=pn[1],pn=pn[2],Nt=Nt&&Nt.then,Te=Pe&&Pe.constructor,Dt=!!pn,Ve=function(s,a){ot.push([s,a]),dt&&(queueMicrotask(ve),dt=!1)},yt=!0,dt=!0,st=[],Ue=[],pe=Ce,et={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:me,pgp:!1,env:{},finalize:me},te=et,ot=[],pt=0,St=[];function ne(s){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var a=this._PSD=te;if(typeof s!="function"){if(s!==kt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&ht(this,this._value))}this._state=null,this._value=null,++a.ref,(function u(h,f){try{f(function(p){if(h._state===null){if(p===h)throw new TypeError("A promise cannot be resolved with itself.");var w=h._lib&&Le();p&&typeof p.then=="function"?u(h,function($,_){p instanceof ne?p._then($,_):p.then($,_)}):(h._state=!0,h._value=p,$n(h)),w&&Ge()}},ht.bind(null,h))}catch(p){ht(h,p)}})(this,s)}var on={get:function(){var s=te,a=Hr;function u(h,f){var p=this,w=!s.global&&(s!==te||a!==Hr),$=w&&!Cn(),_=new ne(function(A,R){le(p,new hn(uo(h,s,w,$),uo(f,s,w,$),A,R,s))});return this._consoleTask&&(_._consoleTask=this._consoleTask),_}return u.prototype=kt,u},set:function(s){N(this,"then",s&&s.prototype===kt?on:{get:function(){return s},set:on.set})}};function hn(s,a,u,h,f){this.onFulfilled=typeof s=="function"?s:null,this.onRejected=typeof a=="function"?a:null,this.resolve=u,this.reject=h,this.psd=f}function ht(s,a){var u,h;Ue.push(a),s._state===null&&(u=s._lib&&Le(),a=pe(a),s._state=!1,s._value=a,h=s,st.some(function(f){return f._value===h._value})||st.push(h),$n(s),u&&Ge())}function $n(s){var a=s._listeners;s._listeners=[];for(var u=0,h=a.length;u<h;++u)le(s,a[u]);var f=s._PSD;--f.ref||f.finalize(),pt===0&&(++pt,Ve(function(){--pt==0&&je()},[]))}function le(s,a){if(s._state!==null){var u=s._state?a.onFulfilled:a.onRejected;if(u===null)return(s._state?a.resolve:a.reject)(s._value);++a.psd.ref,++pt,Ve(Re,[u,s,a])}else s._listeners.push(a)}function Re(s,a,u){try{var h,f=a._value;!a._state&&Ue.length&&(Ue=[]),h=Fe&&a._consoleTask?a._consoleTask.run(function(){return s(f)}):s(f),a._state||Ue.indexOf(f)!==-1||(function(p){for(var w=st.length;w;)if(st[--w]._value===p._value)return st.splice(w,1)})(a),u.resolve(h)}catch(p){u.reject(p)}finally{--pt==0&&je(),--u.psd.ref||u.psd.finalize()}}function ve(){zn(et,function(){Le()&&Ge()})}function Le(){var s=yt;return dt=yt=!1,s}function Ge(){var s,a,u;do for(;0<ot.length;)for(s=ot,ot=[],u=s.length,a=0;a<u;++a){var h=s[a];h[0].apply(null,h[1])}while(0<ot.length);dt=yt=!0}function je(){var s=st;st=[],s.forEach(function(h){h._PSD.onunhandled.call(null,h._value,h)});for(var a=St.slice(0),u=a.length;u;)a[--u]()}function Zt(s){return new ne(kt,!1,s)}function qe(s,a){var u=te;return function(){var h=Le(),f=te;try{return En(u,!0),s.apply(this,arguments)}catch(p){a&&a(p)}finally{En(f,!1),h&&Ge()}}}S(ne.prototype,{then:on,_then:function(s,a){le(this,new hn(null,null,s,a,te))},catch:function(s){if(arguments.length===1)return this.then(null,s);var a=s,u=arguments[1];return typeof a=="function"?this.then(null,function(h){return(h instanceof a?u:Zt)(h)}):this.then(null,function(h){return(h&&h.name===a?u:Zt)(h)})},finally:function(s){return this.then(function(a){return ne.resolve(s()).then(function(){return a})},function(a){return ne.resolve(s()).then(function(){return Zt(a)})})},timeout:function(s,a){var u=this;return s<1/0?new ne(function(h,f){var p=setTimeout(function(){return f(new oe.Timeout(a))},s);u.then(h,f).finally(clearTimeout.bind(null,p))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&N(ne.prototype,Symbol.toStringTag,"Dexie.Promise"),et.env=co(),S(ne,{all:function(){var s=Xe.apply(null,arguments).map(Wr);return new ne(function(a,u){s.length===0&&a([]);var h=s.length;s.forEach(function(f,p){return ne.resolve(f).then(function(w){s[p]=w,--h||a(s)},u)})})},resolve:function(s){return s instanceof ne?s:s&&typeof s.then=="function"?new ne(function(a,u){s.then(a,u)}):new ne(kt,!0,s)},reject:Zt,race:function(){var s=Xe.apply(null,arguments).map(Wr);return new ne(function(a,u){s.map(function(h){return ne.resolve(h).then(a,u)})})},PSD:{get:function(){return te},set:function(s){return te=s}},totalEchoes:{get:function(){return Hr}},newPSD:kn,usePSD:zn,scheduler:{get:function(){return Ve},set:function(s){Ve=s}},rejectionMapper:{get:function(){return pe},set:function(s){pe=s}},follow:function(s,a){return new ne(function(u,h){return kn(function(f,p){var w=te;w.unhandleds=[],w.onunhandled=p,w.finalize=fe(function(){var $,_=this;$=function(){_.unhandleds.length===0?f():p(_.unhandleds[0])},St.push(function A(){$(),St.splice(St.indexOf(A),1)}),++pt,Ve(function(){--pt==0&&je()},[])},w.finalize),s()},a,u,h)})}}),Te&&(Te.allSettled&&N(ne,"allSettled",function(){var s=Xe.apply(null,arguments).map(Wr);return new ne(function(a){s.length===0&&a([]);var u=s.length,h=new Array(u);s.forEach(function(f,p){return ne.resolve(f).then(function(w){return h[p]={status:"fulfilled",value:w}},function(w){return h[p]={status:"rejected",reason:w}}).then(function(){return--u||a(h)})})})}),Te.any&&typeof AggregateError<"u"&&N(ne,"any",function(){var s=Xe.apply(null,arguments).map(Wr);return new ne(function(a,u){s.length===0&&u(new AggregateError([]));var h=s.length,f=new Array(h);s.forEach(function(p,w){return ne.resolve(p).then(function($){return a($)},function($){f[w]=$,--h||u(new AggregateError(f))})})})}),Te.withResolvers&&(ne.withResolvers=Te.withResolvers));var mt={awaits:0,echoes:0,id:0},rc=0,Ur=[],qr=0,Hr=0,ic=0;function kn(s,a,u,h){var f=te,p=Object.create(f);return p.parent=f,p.ref=0,p.global=!1,p.id=++ic,et.env,p.env=Dt?{Promise:ne,PromiseProp:{value:ne,configurable:!0,writable:!0},all:ne.all,race:ne.race,allSettled:ne.allSettled,any:ne.any,resolve:ne.resolve,reject:ne.reject}:{},a&&d(p,a),++f.ref,p.finalize=function(){--this.parent.ref||this.parent.finalize()},h=zn(p,s,u,h),p.ref===0&&p.finalize(),h}function Yn(){return mt.id||(mt.id=++rc),++mt.awaits,mt.echoes+=it,mt.id}function Cn(){return!!mt.awaits&&(--mt.awaits==0&&(mt.id=0),mt.echoes=mt.awaits*it,!0)}function Wr(s){return mt.echoes&&s&&s.constructor===Te?(Yn(),s.then(function(a){return Cn(),a},function(a){return Cn(),at(a)})):s}function sc(){var s=Ur[Ur.length-1];Ur.pop(),En(s,!1)}function En(s,a){var u,h=te;(a?!mt.echoes||qr++&&s===te:!qr||--qr&&s===te)||queueMicrotask(a?function(f){++Hr,mt.echoes&&--mt.echoes!=0||(mt.echoes=mt.awaits=mt.id=0),Ur.push(te),En(f,!0)}.bind(null,s):sc),s!==te&&(te=s,h===et&&(et.env=co()),Dt&&(u=et.env.Promise,a=s.env,(h.global||s.global)&&(Object.defineProperty(o,"Promise",a.PromiseProp),u.all=a.all,u.race=a.race,u.resolve=a.resolve,u.reject=a.reject,a.allSettled&&(u.allSettled=a.allSettled),a.any&&(u.any=a.any))))}function co(){var s=o.Promise;return Dt?{Promise:s,PromiseProp:Object.getOwnPropertyDescriptor(o,"Promise"),all:s.all,race:s.race,allSettled:s.allSettled,any:s.any,resolve:s.resolve,reject:s.reject}:{}}function zn(s,a,u,h,f){var p=te;try{return En(s,!0),a(u,h,f)}finally{En(p,!1)}}function uo(s,a,u,h){return typeof s!="function"?s:function(){var f=te;u&&Yn(),En(a,!0);try{return s.apply(this,arguments)}finally{En(f,!1),h&&queueMicrotask(Cn)}}}function Ni(s){Promise===Te&&mt.echoes===0?qr===0?s():enqueueNativeMicroTask(s):setTimeout(s,0)}(""+Nt).indexOf("[native code]")===-1&&(Yn=Cn=me);var at=ne.reject,Fn="￿",fn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ho="String expected.",Xn=[],Kr="__dbnames",Ui="readonly",qi="readwrite";function Ln(s,a){return s?a?function(){return s.apply(this,arguments)&&a.apply(this,arguments)}:s:a}var fo={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Vr(s){return typeof s!="string"||/\./.test(s)?function(a){return a}:function(a){return a[s]===void 0&&s in a&&delete(a=E(a))[s],a}}function po(){throw oe.Type()}function Ie(s,a){try{var u=mo(s),h=mo(a);if(u!==h)return u==="Array"?1:h==="Array"?-1:u==="binary"?1:h==="binary"?-1:u==="string"?1:h==="string"?-1:u==="Date"?1:h!=="Date"?NaN:-1;switch(u){case"number":case"Date":case"string":return a<s?1:s<a?-1:0;case"binary":return(function(f,p){for(var w=f.length,$=p.length,_=w<$?w:$,A=0;A<_;++A)if(f[A]!==p[A])return f[A]<p[A]?-1:1;return w===$?0:w<$?-1:1})(go(s),go(a));case"Array":return(function(f,p){for(var w=f.length,$=p.length,_=w<$?w:$,A=0;A<_;++A){var R=Ie(f[A],p[A]);if(R!==0)return R}return w===$?0:w<$?-1:1})(s,a)}}catch{}return NaN}function mo(s){var a=typeof s;return a!="object"?a:ArrayBuffer.isView(s)?"binary":(s=C(s),s==="ArrayBuffer"?"binary":s)}function go(s){return s instanceof Uint8Array?s:ArrayBuffer.isView(s)?new Uint8Array(s.buffer,s.byteOffset,s.byteLength):new Uint8Array(s)}var bo=(Ye.prototype._trans=function(s,a,u){var h=this._tx||te.trans,f=this.name,p=Fe&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(s==="readonly"?"read":"write"," ").concat(this.name));function w(A,R,k){if(!k.schema[f])throw new oe.NotFound("Table "+f+" not part of transaction");return a(k.idbtrans,k)}var $=Le();try{var _=h&&h.db._novip===this.db._novip?h===te.trans?h._promise(s,w,u):kn(function(){return h._promise(s,w,u)},{trans:h,transless:te.transless||te}):(function A(R,k,j,T){if(R.idbdb&&(R._state.openComplete||te.letThrough||R._vip)){var D=R._createTransaction(k,j,R._dbSchema);try{D.create(),R._state.PR1398_maxLoop=3}catch(O){return O.name===Qe.InvalidState&&R.isOpen()&&0<--R._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),R.close({disableAutoOpen:!1}),R.open().then(function(){return A(R,k,j,T)})):at(O)}return D._promise(k,function(O,P){return kn(function(){return te.trans=D,T(O,P,D)})}).then(function(O){if(k==="readwrite")try{D.idbtrans.commit()}catch{}return k==="readonly"?O:D._completion.then(function(){return O})})}if(R._state.openComplete)return at(new oe.DatabaseClosed(R._state.dbOpenError));if(!R._state.isBeingOpened){if(!R._state.autoOpen)return at(new oe.DatabaseClosed);R.open().catch(me)}return R._state.dbReadyPromise.then(function(){return A(R,k,j,T)})})(this.db,s,[this.name],w);return p&&(_._consoleTask=p,_=_.catch(function(A){return console.trace(A),at(A)})),_}finally{$&&Ge()}},Ye.prototype.get=function(s,a){var u=this;return s&&s.constructor===Object?this.where(s).first(a):s==null?at(new oe.Type("Invalid argument to Table.get()")):this._trans("readonly",function(h){return u.core.get({trans:h,key:s}).then(function(f){return u.hook.reading.fire(f)})}).then(a)},Ye.prototype.where=function(s){if(typeof s=="string")return new this.db.WhereClause(this,s);if(c(s))return new this.db.WhereClause(this,"[".concat(s.join("+"),"]"));var a=l(s);if(a.length===1)return this.where(a[0]).equals(s[a[0]]);var u=this.schema.indexes.concat(this.schema.primKey).filter(function($){if($.compound&&a.every(function(A){return 0<=$.keyPath.indexOf(A)})){for(var _=0;_<a.length;++_)if(a.indexOf($.keyPath[_])===-1)return!1;return!0}return!1}).sort(function($,_){return $.keyPath.length-_.keyPath.length})[0];if(u&&this.db._maxKey!==Fn){var p=u.keyPath.slice(0,a.length);return this.where(p).equals(p.map(function(_){return s[_]}))}!u&&Fe&&console.warn("The query ".concat(JSON.stringify(s)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(a.join("+"),"]"));var h=this.schema.idxByName;function f($,_){return Ie($,_)===0}var w=a.reduce(function(k,_){var A=k[0],R=k[1],k=h[_],j=s[_];return[A||k,A||!k?Ln(R,k&&k.multi?function(T){return T=J(T,_),c(T)&&T.some(function(D){return f(j,D)})}:function(T){return f(j,J(T,_))}):R]},[null,null]),p=w[0],w=w[1];return p?this.where(p.name).equals(s[p.keyPath]).filter(w):u?this.filter(w):this.where(a).equals("")},Ye.prototype.filter=function(s){return this.toCollection().and(s)},Ye.prototype.count=function(s){return this.toCollection().count(s)},Ye.prototype.offset=function(s){return this.toCollection().offset(s)},Ye.prototype.limit=function(s){return this.toCollection().limit(s)},Ye.prototype.each=function(s){return this.toCollection().each(s)},Ye.prototype.toArray=function(s){return this.toCollection().toArray(s)},Ye.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Ye.prototype.orderBy=function(s){return new this.db.Collection(new this.db.WhereClause(this,c(s)?"[".concat(s.join("+"),"]"):s))},Ye.prototype.reverse=function(){return this.toCollection().reverse()},Ye.prototype.mapToClass=function(s){var a,u=this.db,h=this.name;function f(){return a!==null&&a.apply(this,arguments)||this}(this.schema.mappedClass=s).prototype instanceof po&&((function(_,A){if(typeof A!="function"&&A!==null)throw new TypeError("Class extends value "+String(A)+" is not a constructor or null");function R(){this.constructor=_}r(_,A),_.prototype=A===null?Object.create(A):(R.prototype=A.prototype,new R)})(f,a=s),Object.defineProperty(f.prototype,"db",{get:function(){return u},enumerable:!1,configurable:!0}),f.prototype.table=function(){return h},s=f);for(var p=new Set,w=s.prototype;w;w=g(w))Object.getOwnPropertyNames(w).forEach(function(_){return p.add(_)});function $(_){if(!_)return _;var A,R=Object.create(s.prototype);for(A in _)if(!p.has(A))try{R[A]=_[A]}catch{}return R}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=$,this.hook("reading",$),s},Ye.prototype.defineClass=function(){return this.mapToClass(function(s){d(this,s)})},Ye.prototype.add=function(s,a){var u=this,h=this.schema.primKey,f=h.auto,p=h.keyPath,w=s;return p&&f&&(w=Vr(p)(s)),this._trans("readwrite",function($){return u.core.mutate({trans:$,type:"add",keys:a!=null?[a]:null,values:[w]})}).then(function($){return $.numFailures?ne.reject($.failures[0]):$.lastResult}).then(function($){if(p)try{ue(s,p,$)}catch{}return $})},Ye.prototype.update=function(s,a){return typeof s!="object"||c(s)?this.where(":id").equals(s).modify(a):(s=J(s,this.schema.primKey.keyPath),s===void 0?at(new oe.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(s).modify(a))},Ye.prototype.put=function(s,a){var u=this,h=this.schema.primKey,f=h.auto,p=h.keyPath,w=s;return p&&f&&(w=Vr(p)(s)),this._trans("readwrite",function($){return u.core.mutate({trans:$,type:"put",values:[w],keys:a!=null?[a]:null})}).then(function($){return $.numFailures?ne.reject($.failures[0]):$.lastResult}).then(function($){if(p)try{ue(s,p,$)}catch{}return $})},Ye.prototype.delete=function(s){var a=this;return this._trans("readwrite",function(u){return a.core.mutate({trans:u,type:"delete",keys:[s]})}).then(function(u){return u.numFailures?ne.reject(u.failures[0]):void 0})},Ye.prototype.clear=function(){var s=this;return this._trans("readwrite",function(a){return s.core.mutate({trans:a,type:"deleteRange",range:fo})}).then(function(a){return a.numFailures?ne.reject(a.failures[0]):void 0})},Ye.prototype.bulkGet=function(s){var a=this;return this._trans("readonly",function(u){return a.core.getMany({keys:s,trans:u}).then(function(h){return h.map(function(f){return a.hook.reading.fire(f)})})})},Ye.prototype.bulkAdd=function(s,a,u){var h=this,f=Array.isArray(a)?a:void 0,p=(u=u||(f?void 0:a))?u.allKeys:void 0;return this._trans("readwrite",function(w){var A=h.schema.primKey,$=A.auto,A=A.keyPath;if(A&&f)throw new oe.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(f&&f.length!==s.length)throw new oe.InvalidArgument("Arguments objects and keys must have the same length");var _=s.length,A=A&&$?s.map(Vr(A)):s;return h.core.mutate({trans:w,type:"add",keys:f,values:A,wantResults:p}).then(function(D){var k=D.numFailures,j=D.results,T=D.lastResult,D=D.failures;if(k===0)return p?j:T;throw new Oe("".concat(h.name,".bulkAdd(): ").concat(k," of ").concat(_," operations failed"),D)})})},Ye.prototype.bulkPut=function(s,a,u){var h=this,f=Array.isArray(a)?a:void 0,p=(u=u||(f?void 0:a))?u.allKeys:void 0;return this._trans("readwrite",function(w){var A=h.schema.primKey,$=A.auto,A=A.keyPath;if(A&&f)throw new oe.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(f&&f.length!==s.length)throw new oe.InvalidArgument("Arguments objects and keys must have the same length");var _=s.length,A=A&&$?s.map(Vr(A)):s;return h.core.mutate({trans:w,type:"put",keys:f,values:A,wantResults:p}).then(function(D){var k=D.numFailures,j=D.results,T=D.lastResult,D=D.failures;if(k===0)return p?j:T;throw new Oe("".concat(h.name,".bulkPut(): ").concat(k," of ").concat(_," operations failed"),D)})})},Ye.prototype.bulkUpdate=function(s){var a=this,u=this.core,h=s.map(function(w){return w.key}),f=s.map(function(w){return w.changes}),p=[];return this._trans("readwrite",function(w){return u.getMany({trans:w,keys:h,cache:"clone"}).then(function($){var _=[],A=[];s.forEach(function(k,j){var T=k.key,D=k.changes,O=$[j];if(O){for(var P=0,L=Object.keys(D);P<L.length;P++){var M=L[P],B=D[M];if(M===a.schema.primKey.keyPath){if(Ie(B,T)!==0)throw new oe.Constraint("Cannot update primary key in bulkUpdate()")}else ue(O,M,B)}p.push(j),_.push(T),A.push(O)}});var R=_.length;return u.mutate({trans:w,type:"put",keys:_,values:A,updates:{keys:h,changeSpecs:f}}).then(function(k){var j=k.numFailures,T=k.failures;if(j===0)return R;for(var D=0,O=Object.keys(T);D<O.length;D++){var P,L=O[D],M=p[Number(L)];M!=null&&(P=T[L],delete T[L],T[M]=P)}throw new Oe("".concat(a.name,".bulkUpdate(): ").concat(j," of ").concat(R," operations failed"),T)})})})},Ye.prototype.bulkDelete=function(s){var a=this,u=s.length;return this._trans("readwrite",function(h){return a.core.mutate({trans:h,type:"delete",keys:s})}).then(function(w){var f=w.numFailures,p=w.lastResult,w=w.failures;if(f===0)return p;throw new Oe("".concat(a.name,".bulkDelete(): ").concat(f," of ").concat(u," operations failed"),w)})},Ye);function Ye(){}function pr(s){function a(w,$){if($){for(var _=arguments.length,A=new Array(_-1);--_;)A[_-1]=arguments[_];return u[w].subscribe.apply(null,A),s}if(typeof w=="string")return u[w]}var u={};a.addEventType=p;for(var h=1,f=arguments.length;h<f;++h)p(arguments[h]);return a;function p(w,$,_){if(typeof w!="object"){var A;$=$||nt;var R={subscribers:[],fire:_=_||me,subscribe:function(k){R.subscribers.indexOf(k)===-1&&(R.subscribers.push(k),R.fire=$(R.fire,k))},unsubscribe:function(k){R.subscribers=R.subscribers.filter(function(j){return j!==k}),R.fire=R.subscribers.reduce($,_)}};return u[w]=a[w]=R}l(A=w).forEach(function(k){var j=A[k];if(c(j))p(k,A[k][0],A[k][1]);else{if(j!=="asap")throw new oe.InvalidArgument("Invalid event config");var T=p(k,Ce,function(){for(var D=arguments.length,O=new Array(D);D--;)O[D]=arguments[D];T.subscribers.forEach(function(P){V(function(){P.apply(null,O)})})})}})}}function mr(s,a){return F(a).from({prototype:s}),a}function Qn(s,a){return!(s.filter||s.algorithm||s.or)&&(a?s.justLimit:!s.replayFilter)}function Hi(s,a){s.filter=Ln(s.filter,a)}function Wi(s,a,u){var h=s.replayFilter;s.replayFilter=h?function(){return Ln(h(),a())}:a,s.justLimit=u&&!h}function Gr(s,a){if(s.isPrimKey)return a.primaryKey;var u=a.getIndexByKeyPath(s.index);if(!u)throw new oe.Schema("KeyPath "+s.index+" on object store "+a.name+" is not indexed");return u}function yo(s,a,u){var h=Gr(s,a.schema);return a.openCursor({trans:u,values:!s.keysOnly,reverse:s.dir==="prev",unique:!!s.unique,query:{index:h,range:s.range}})}function Yr(s,a,u,h){var f=s.replayFilter?Ln(s.filter,s.replayFilter()):s.filter;if(s.or){var p={},w=function($,_,A){var R,k;f&&!f(_,A,function(j){return _.stop(j)},function(j){return _.fail(j)})||((k=""+(R=_.primaryKey))=="[object ArrayBuffer]"&&(k=""+new Uint8Array(R)),y(p,k)||(p[k]=!0,a($,_,A)))};return Promise.all([s.or._iterate(w,u),wo(yo(s,h,u),s.algorithm,w,!s.keysOnly&&s.valueMapper)])}return wo(yo(s,h,u),Ln(s.algorithm,f),a,!s.keysOnly&&s.valueMapper)}function wo(s,a,u,h){var f=qe(h?function(p,w,$){return u(h(p),w,$)}:u);return s.then(function(p){if(p)return p.start(function(){var w=function(){return p.continue()};a&&!a(p,function($){return w=$},function($){p.stop($),w=me},function($){p.fail($),w=me})||f(p.value,p,function($){return w=$}),w()})})}var pn=Symbol(),gr=(vo.prototype.execute=function(s){if(this.add!==void 0){var a=this.add;if(c(a))return n(n([],c(s)?s:[],!0),a).sort();if(typeof a=="number")return(Number(s)||0)+a;if(typeof a=="bigint")try{return BigInt(s)+a}catch{return BigInt(0)+a}throw new TypeError("Invalid term ".concat(a))}if(this.remove!==void 0){var u=this.remove;if(c(u))return c(s)?s.filter(function(h){return!u.includes(h)}).sort():[];if(typeof u=="number")return Number(s)-u;if(typeof u=="bigint")try{return BigInt(s)-u}catch{return BigInt(0)-u}throw new TypeError("Invalid subtrahend ".concat(u))}return a=(a=this.replacePrefix)===null||a===void 0?void 0:a[0],a&&typeof s=="string"&&s.startsWith(a)?this.replacePrefix[1]+s.substring(a.length):s},vo);function vo(s){Object.assign(this,s)}var oc=(ze.prototype._read=function(s,a){var u=this._ctx;return u.error?u.table._trans(null,at.bind(null,u.error)):u.table._trans("readonly",s).then(a)},ze.prototype._write=function(s){var a=this._ctx;return a.error?a.table._trans(null,at.bind(null,a.error)):a.table._trans("readwrite",s,"locked")},ze.prototype._addAlgorithm=function(s){var a=this._ctx;a.algorithm=Ln(a.algorithm,s)},ze.prototype._iterate=function(s,a){return Yr(this._ctx,s,a,this._ctx.table.core)},ze.prototype.clone=function(s){var a=Object.create(this.constructor.prototype),u=Object.create(this._ctx);return s&&d(u,s),a._ctx=u,a},ze.prototype.raw=function(){return this._ctx.valueMapper=null,this},ze.prototype.each=function(s){var a=this._ctx;return this._read(function(u){return Yr(a,s,u,a.table.core)})},ze.prototype.count=function(s){var a=this;return this._read(function(u){var h=a._ctx,f=h.table.core;if(Qn(h,!0))return f.count({trans:u,query:{index:Gr(h,f.schema),range:h.range}}).then(function(w){return Math.min(w,h.limit)});var p=0;return Yr(h,function(){return++p,!1},u,f).then(function(){return p})}).then(s)},ze.prototype.sortBy=function(s,a){var u=s.split(".").reverse(),h=u[0],f=u.length-1;function p(_,A){return A?p(_[u[A]],A-1):_[h]}var w=this._ctx.dir==="next"?1:-1;function $(_,A){return Ie(p(_,f),p(A,f))*w}return this.toArray(function(_){return _.sort($)}).then(a)},ze.prototype.toArray=function(s){var a=this;return this._read(function(u){var h=a._ctx;if(h.dir==="next"&&Qn(h,!0)&&0<h.limit){var f=h.valueMapper,p=Gr(h,h.table.core.schema);return h.table.core.query({trans:u,limit:h.limit,values:!0,query:{index:p,range:h.range}}).then(function($){return $=$.result,f?$.map(f):$})}var w=[];return Yr(h,function($){return w.push($)},u,h.table.core).then(function(){return w})},s)},ze.prototype.offset=function(s){var a=this._ctx;return s<=0||(a.offset+=s,Qn(a)?Wi(a,function(){var u=s;return function(h,f){return u===0||(u===1?--u:f(function(){h.advance(u),u=0}),!1)}}):Wi(a,function(){var u=s;return function(){return--u<0}})),this},ze.prototype.limit=function(s){return this._ctx.limit=Math.min(this._ctx.limit,s),Wi(this._ctx,function(){var a=s;return function(u,h,f){return--a<=0&&h(f),0<=a}},!0),this},ze.prototype.until=function(s,a){return Hi(this._ctx,function(u,h,f){return!s(u.value)||(h(f),a)}),this},ze.prototype.first=function(s){return this.limit(1).toArray(function(a){return a[0]}).then(s)},ze.prototype.last=function(s){return this.reverse().first(s)},ze.prototype.filter=function(s){var a;return Hi(this._ctx,function(u){return s(u.value)}),(a=this._ctx).isMatch=Ln(a.isMatch,s),this},ze.prototype.and=function(s){return this.filter(s)},ze.prototype.or=function(s){return new this.db.WhereClause(this._ctx.table,s,this)},ze.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},ze.prototype.desc=function(){return this.reverse()},ze.prototype.eachKey=function(s){var a=this._ctx;return a.keysOnly=!a.isMatch,this.each(function(u,h){s(h.key,h)})},ze.prototype.eachUniqueKey=function(s){return this._ctx.unique="unique",this.eachKey(s)},ze.prototype.eachPrimaryKey=function(s){var a=this._ctx;return a.keysOnly=!a.isMatch,this.each(function(u,h){s(h.primaryKey,h)})},ze.prototype.keys=function(s){var a=this._ctx;a.keysOnly=!a.isMatch;var u=[];return this.each(function(h,f){u.push(f.key)}).then(function(){return u}).then(s)},ze.prototype.primaryKeys=function(s){var a=this._ctx;if(a.dir==="next"&&Qn(a,!0)&&0<a.limit)return this._read(function(h){var f=Gr(a,a.table.core.schema);return a.table.core.query({trans:h,values:!1,limit:a.limit,query:{index:f,range:a.range}})}).then(function(h){return h.result}).then(s);a.keysOnly=!a.isMatch;var u=[];return this.each(function(h,f){u.push(f.primaryKey)}).then(function(){return u}).then(s)},ze.prototype.uniqueKeys=function(s){return this._ctx.unique="unique",this.keys(s)},ze.prototype.firstKey=function(s){return this.limit(1).keys(function(a){return a[0]}).then(s)},ze.prototype.lastKey=function(s){return this.reverse().firstKey(s)},ze.prototype.distinct=function(){var s=this._ctx,s=s.index&&s.table.schema.idxByName[s.index];if(!s||!s.multi)return this;var a={};return Hi(this._ctx,function(f){var h=f.primaryKey.toString(),f=y(a,h);return a[h]=!0,!f}),this},ze.prototype.modify=function(s){var a=this,u=this._ctx;return this._write(function(h){var f,p,w;w=typeof s=="function"?s:(f=l(s),p=f.length,function(P){for(var L=!1,M=0;M<p;++M){var B=f[M],H=s[B],Y=J(P,B);H instanceof gr?(ue(P,B,H.execute(Y)),L=!0):Y!==H&&(ue(P,B,H),L=!0)}return L});var $=u.table.core,k=$.schema.primaryKey,_=k.outbound,A=k.extractKey,R=200,k=a.db._options.modifyChunkSize;k&&(R=typeof k=="object"?k[$.name]||k["*"]||200:k);function j(P,B){var M=B.failures,B=B.numFailures;D+=P-B;for(var H=0,Y=l(M);H<Y.length;H++){var se=Y[H];T.push(M[se])}}var T=[],D=0,O=[];return a.clone().primaryKeys().then(function(P){function L(B){var H=Math.min(R,P.length-B);return $.getMany({trans:h,keys:P.slice(B,B+H),cache:"immutable"}).then(function(Y){for(var se=[],X=[],Z=_?[]:null,ae=[],re=0;re<H;++re){var ce=Y[re],ke={value:E(ce),primKey:P[B+re]};w.call(ke,ke.value,ke)!==!1&&(ke.value==null?ae.push(P[B+re]):_||Ie(A(ce),A(ke.value))===0?(X.push(ke.value),_&&Z.push(P[B+re])):(ae.push(P[B+re]),se.push(ke.value)))}return Promise.resolve(0<se.length&&$.mutate({trans:h,type:"add",values:se}).then(function(Ee){for(var Se in Ee.failures)ae.splice(parseInt(Se),1);j(se.length,Ee)})).then(function(){return(0<X.length||M&&typeof s=="object")&&$.mutate({trans:h,type:"put",keys:Z,values:X,criteria:M,changeSpec:typeof s!="function"&&s,isAdditionalChunk:0<B}).then(function(Ee){return j(X.length,Ee)})}).then(function(){return(0<ae.length||M&&s===Ki)&&$.mutate({trans:h,type:"delete",keys:ae,criteria:M,isAdditionalChunk:0<B}).then(function(Ee){return j(ae.length,Ee)})}).then(function(){return P.length>B+H&&L(B+R)})})}var M=Qn(u)&&u.limit===1/0&&(typeof s!="function"||s===Ki)&&{index:u.index,range:u.range};return L(0).then(function(){if(0<T.length)throw new _e("Error modifying one or more objects",T,D,O);return P.length})})})},ze.prototype.delete=function(){var s=this._ctx,a=s.range;return Qn(s)&&(s.isPrimKey||a.type===3)?this._write(function(u){var h=s.table.core.schema.primaryKey,f=a;return s.table.core.count({trans:u,query:{index:h,range:f}}).then(function(p){return s.table.core.mutate({trans:u,type:"deleteRange",range:f}).then(function(w){var $=w.failures;if(w.lastResult,w.results,w=w.numFailures,w)throw new _e("Could not delete some values",Object.keys($).map(function(_){return $[_]}),p-w);return p-w})})}):this.modify(Ki)},ze);function ze(){}var Ki=function(s,a){return a.value=null};function ac(s,a){return s<a?-1:s===a?0:1}function lc(s,a){return a<s?-1:s===a?0:1}function Rt(s,a,u){return s=s instanceof $o?new s.Collection(s):s,s._ctx.error=new(u||TypeError)(a),s}function Jn(s){return new s.Collection(s,function(){return xo("")}).limit(0)}function Xr(s,a,u,h){var f,p,w,$,_,A,R,k=u.length;if(!u.every(function(D){return typeof D=="string"}))return Rt(s,ho);function j(D){f=D==="next"?function(P){return P.toUpperCase()}:function(P){return P.toLowerCase()},p=D==="next"?function(P){return P.toLowerCase()}:function(P){return P.toUpperCase()},w=D==="next"?ac:lc;var O=u.map(function(P){return{lower:p(P),upper:f(P)}}).sort(function(P,L){return w(P.lower,L.lower)});$=O.map(function(P){return P.upper}),_=O.map(function(P){return P.lower}),R=(A=D)==="next"?"":h}j("next"),s=new s.Collection(s,function(){return Sn($[0],_[k-1]+h)}),s._ondirectionchange=function(D){j(D)};var T=0;return s._addAlgorithm(function(D,O,P){var L=D.key;if(typeof L!="string")return!1;var M=p(L);if(a(M,_,T))return!0;for(var B=null,H=T;H<k;++H){var Y=(function(se,X,Z,ae,re,ce){for(var ke=Math.min(se.length,ae.length),Ee=-1,Se=0;Se<ke;++Se){var Ot=X[Se];if(Ot!==ae[Se])return re(se[Se],Z[Se])<0?se.substr(0,Se)+Z[Se]+Z.substr(Se+1):re(se[Se],ae[Se])<0?se.substr(0,Se)+ae[Se]+Z.substr(Se+1):0<=Ee?se.substr(0,Ee)+X[Ee]+Z.substr(Ee+1):null;re(se[Se],Ot)<0&&(Ee=Se)}return ke<ae.length&&ce==="next"?se+Z.substr(se.length):ke<se.length&&ce==="prev"?se.substr(0,Z.length):Ee<0?null:se.substr(0,Ee)+ae[Ee]+Z.substr(Ee+1)})(L,M,$[H],_[H],w,A);Y===null&&B===null?T=H+1:(B===null||0<w(B,Y))&&(B=Y)}return O(B!==null?function(){D.continue(B+R)}:P),!1}),s}function Sn(s,a,u,h){return{type:2,lower:s,upper:a,lowerOpen:u,upperOpen:h}}function xo(s){return{type:1,lower:s,upper:s}}var $o=(Object.defineProperty(gt.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),gt.prototype.between=function(s,a,u,h){u=u!==!1,h=h===!0;try{return 0<this._cmp(s,a)||this._cmp(s,a)===0&&(u||h)&&(!u||!h)?Jn(this):new this.Collection(this,function(){return Sn(s,a,!u,!h)})}catch{return Rt(this,fn)}},gt.prototype.equals=function(s){return s==null?Rt(this,fn):new this.Collection(this,function(){return xo(s)})},gt.prototype.above=function(s){return s==null?Rt(this,fn):new this.Collection(this,function(){return Sn(s,void 0,!0)})},gt.prototype.aboveOrEqual=function(s){return s==null?Rt(this,fn):new this.Collection(this,function(){return Sn(s,void 0,!1)})},gt.prototype.below=function(s){return s==null?Rt(this,fn):new this.Collection(this,function(){return Sn(void 0,s,!1,!0)})},gt.prototype.belowOrEqual=function(s){return s==null?Rt(this,fn):new this.Collection(this,function(){return Sn(void 0,s)})},gt.prototype.startsWith=function(s){return typeof s!="string"?Rt(this,ho):this.between(s,s+Fn,!0,!0)},gt.prototype.startsWithIgnoreCase=function(s){return s===""?this.startsWith(s):Xr(this,function(a,u){return a.indexOf(u[0])===0},[s],Fn)},gt.prototype.equalsIgnoreCase=function(s){return Xr(this,function(a,u){return a===u[0]},[s],"")},gt.prototype.anyOfIgnoreCase=function(){var s=Xe.apply(Q,arguments);return s.length===0?Jn(this):Xr(this,function(a,u){return u.indexOf(a)!==-1},s,"")},gt.prototype.startsWithAnyOfIgnoreCase=function(){var s=Xe.apply(Q,arguments);return s.length===0?Jn(this):Xr(this,function(a,u){return u.some(function(h){return a.indexOf(h)===0})},s,Fn)},gt.prototype.anyOf=function(){var s=this,a=Xe.apply(Q,arguments),u=this._cmp;try{a.sort(u)}catch{return Rt(this,fn)}if(a.length===0)return Jn(this);var h=new this.Collection(this,function(){return Sn(a[0],a[a.length-1])});h._ondirectionchange=function(p){u=p==="next"?s._ascending:s._descending,a.sort(u)};var f=0;return h._addAlgorithm(function(p,w,$){for(var _=p.key;0<u(_,a[f]);)if(++f===a.length)return w($),!1;return u(_,a[f])===0||(w(function(){p.continue(a[f])}),!1)}),h},gt.prototype.notEqual=function(s){return this.inAnyRange([[-1/0,s],[s,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},gt.prototype.noneOf=function(){var s=Xe.apply(Q,arguments);if(s.length===0)return new this.Collection(this);try{s.sort(this._ascending)}catch{return Rt(this,fn)}var a=s.reduce(function(u,h){return u?u.concat([[u[u.length-1][1],h]]):[[-1/0,h]]},null);return a.push([s[s.length-1],this.db._maxKey]),this.inAnyRange(a,{includeLowers:!1,includeUppers:!1})},gt.prototype.inAnyRange=function(L,a){var u=this,h=this._cmp,f=this._ascending,p=this._descending,w=this._min,$=this._max;if(L.length===0)return Jn(this);if(!L.every(function(M){return M[0]!==void 0&&M[1]!==void 0&&f(M[0],M[1])<=0}))return Rt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",oe.InvalidArgument);var _=!a||a.includeLowers!==!1,A=a&&a.includeUppers===!0,R,k=f;function j(M,B){return k(M[0],B[0])}try{(R=L.reduce(function(M,B){for(var H=0,Y=M.length;H<Y;++H){var se=M[H];if(h(B[0],se[1])<0&&0<h(B[1],se[0])){se[0]=w(se[0],B[0]),se[1]=$(se[1],B[1]);break}}return H===Y&&M.push(B),M},[])).sort(j)}catch{return Rt(this,fn)}var T=0,D=A?function(M){return 0<f(M,R[T][1])}:function(M){return 0<=f(M,R[T][1])},O=_?function(M){return 0<p(M,R[T][0])}:function(M){return 0<=p(M,R[T][0])},P=D,L=new this.Collection(this,function(){return Sn(R[0][0],R[R.length-1][1],!_,!A)});return L._ondirectionchange=function(M){k=M==="next"?(P=D,f):(P=O,p),R.sort(j)},L._addAlgorithm(function(M,B,H){for(var Y,se=M.key;P(se);)if(++T===R.length)return B(H),!1;return!D(Y=se)&&!O(Y)||(u._cmp(se,R[T][1])===0||u._cmp(se,R[T][0])===0||B(function(){k===f?M.continue(R[T][0]):M.continue(R[T][1])}),!1)}),L},gt.prototype.startsWithAnyOf=function(){var s=Xe.apply(Q,arguments);return s.every(function(a){return typeof a=="string"})?s.length===0?Jn(this):this.inAnyRange(s.map(function(a){return[a,a+Fn]})):Rt(this,"startsWithAnyOf() only works with strings")},gt);function gt(){}function an(s){return qe(function(a){return br(a),s(a.target.error),!1})}function br(s){s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault()}var yr="storagemutated",Vi="x-storagemutated-1",_n=pr(null,yr),cc=(ln.prototype._lock=function(){return ie(!te.global),++this._reculock,this._reculock!==1||te.global||(te.lockOwnerFor=this),this},ln.prototype._unlock=function(){if(ie(!te.global),--this._reculock==0)for(te.global||(te.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var s=this._blockedFuncs.shift();try{zn(s[1],s[0])}catch{}}return this},ln.prototype._locked=function(){return this._reculock&&te.lockOwnerFor!==this},ln.prototype.create=function(s){var a=this;if(!this.mode)return this;var u=this.db.idbdb,h=this.db._state.dbOpenError;if(ie(!this.idbtrans),!s&&!u)switch(h&&h.name){case"DatabaseClosedError":throw new oe.DatabaseClosed(h);case"MissingAPIError":throw new oe.MissingAPI(h.message,h);default:throw new oe.OpenFailed(h)}if(!this.active)throw new oe.TransactionInactive;return ie(this._completion._state===null),(s=this.idbtrans=s||(this.db.core||u).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=qe(function(f){br(f),a._reject(s.error)}),s.onabort=qe(function(f){br(f),a.active&&a._reject(new oe.Abort(s.error)),a.active=!1,a.on("abort").fire(f)}),s.oncomplete=qe(function(){a.active=!1,a._resolve(),"mutatedParts"in s&&_n.storagemutated.fire(s.mutatedParts)}),this},ln.prototype._promise=function(s,a,u){var h=this;if(s==="readwrite"&&this.mode!=="readwrite")return at(new oe.ReadOnly("Transaction is readonly"));if(!this.active)return at(new oe.TransactionInactive);if(this._locked())return new ne(function(p,w){h._blockedFuncs.push([function(){h._promise(s,a,u).then(p,w)},te])});if(u)return kn(function(){var p=new ne(function(w,$){h._lock();var _=a(w,$,h);_&&_.then&&_.then(w,$)});return p.finally(function(){return h._unlock()}),p._lib=!0,p});var f=new ne(function(p,w){var $=a(p,w,h);$&&$.then&&$.then(p,w)});return f._lib=!0,f},ln.prototype._root=function(){return this.parent?this.parent._root():this},ln.prototype.waitFor=function(s){var a,u=this._root(),h=ne.resolve(s);u._waitingFor?u._waitingFor=u._waitingFor.then(function(){return h}):(u._waitingFor=h,u._waitingQueue=[],a=u.idbtrans.objectStore(u.storeNames[0]),(function p(){for(++u._spinCount;u._waitingQueue.length;)u._waitingQueue.shift()();u._waitingFor&&(a.get(-1/0).onsuccess=p)})());var f=u._waitingFor;return new ne(function(p,w){h.then(function($){return u._waitingQueue.push(qe(p.bind(null,$)))},function($){return u._waitingQueue.push(qe(w.bind(null,$)))}).finally(function(){u._waitingFor===f&&(u._waitingFor=null)})})},ln.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new oe.Abort))},ln.prototype.table=function(s){var a=this._memoizedTables||(this._memoizedTables={});if(y(a,s))return a[s];var u=this.schema[s];if(!u)throw new oe.NotFound("Table "+s+" not part of transaction");return u=new this.db.Table(s,u,this),u.core=this.db.core.table(s),a[s]=u},ln);function ln(){}function Gi(s,a,u,h,f,p,w){return{name:s,keyPath:a,unique:u,multi:h,auto:f,compound:p,src:(u&&!w?"&":"")+(h?"*":"")+(f?"++":"")+ko(a)}}function ko(s){return typeof s=="string"?s:s?"["+[].join.call(s,"+")+"]":""}function Yi(s,a,u){return{name:s,primKey:a,indexes:u,mappedClass:null,idxByName:(h=function(f){return[f.name,f]},u.reduce(function(f,p,w){return w=h(p,w),w&&(f[w[0]]=w[1]),f},{}))};var h}var wr=function(s){try{return s.only([[]]),wr=function(){return[[]]},[[]]}catch{return wr=function(){return Fn},Fn}};function Xi(s){return s==null?function(){}:typeof s=="string"?(a=s).split(".").length===1?function(u){return u[a]}:function(u){return J(u,a)}:function(u){return J(u,s)};var a}function Co(s){return[].slice.call(s)}var uc=0;function vr(s){return s==null?":id":typeof s=="string"?s:"[".concat(s.join("+"),"]")}function dc(s,a,_){function h(P){if(P.type===3)return null;if(P.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var T=P.lower,D=P.upper,O=P.lowerOpen,P=P.upperOpen;return T===void 0?D===void 0?null:a.upperBound(D,!!P):D===void 0?a.lowerBound(T,!!O):a.bound(T,D,!!O,!!P)}function f(j){var T,D=j.name;return{name:D,schema:j,mutate:function(O){var P=O.trans,L=O.type,M=O.keys,B=O.values,H=O.range;return new Promise(function(Y,se){Y=qe(Y);var X=P.objectStore(D),Z=X.keyPath==null,ae=L==="put"||L==="add";if(!ae&&L!=="delete"&&L!=="deleteRange")throw new Error("Invalid operation type: "+L);var re,ce=(M||B||{length:1}).length;if(M&&B&&M.length!==B.length)throw new Error("Given keys array must have same length as given values array.");if(ce===0)return Y({numFailures:0,failures:{},results:[],lastResult:void 0});function ke(Ct){++Ot,br(Ct)}var Ee=[],Se=[],Ot=0;if(L==="deleteRange"){if(H.type===4)return Y({numFailures:Ot,failures:Se,results:[],lastResult:void 0});H.type===3?Ee.push(re=X.clear()):Ee.push(re=X.delete(h(H)))}else{var Z=ae?Z?[B,M]:[B,null]:[M,null],xe=Z[0],vt=Z[1];if(ae)for(var xt=0;xt<ce;++xt)Ee.push(re=vt&&vt[xt]!==void 0?X[L](xe[xt],vt[xt]):X[L](xe[xt])),re.onerror=ke;else for(xt=0;xt<ce;++xt)Ee.push(re=X[L](xe[xt])),re.onerror=ke}function ci(Ct){Ct=Ct.target.result,Ee.forEach(function(Nn,ps){return Nn.error!=null&&(Se[ps]=Nn.error)}),Y({numFailures:Ot,failures:Se,results:L==="delete"?M:Ee.map(function(Nn){return Nn.result}),lastResult:Ct})}re.onerror=function(Ct){ke(Ct),ci(Ct)},re.onsuccess=ci})},getMany:function(O){var P=O.trans,L=O.keys;return new Promise(function(M,B){M=qe(M);for(var H,Y=P.objectStore(D),se=L.length,X=new Array(se),Z=0,ae=0,re=function(Ee){Ee=Ee.target,X[Ee._pos]=Ee.result,++ae===Z&&M(X)},ce=an(B),ke=0;ke<se;++ke)L[ke]!=null&&((H=Y.get(L[ke]))._pos=ke,H.onsuccess=re,H.onerror=ce,++Z);Z===0&&M(X)})},get:function(O){var P=O.trans,L=O.key;return new Promise(function(M,B){M=qe(M);var H=P.objectStore(D).get(L);H.onsuccess=function(Y){return M(Y.target.result)},H.onerror=an(B)})},query:(T=A,function(O){return new Promise(function(P,L){P=qe(P);var M,B,H,Z=O.trans,Y=O.values,se=O.limit,re=O.query,X=se===1/0?void 0:se,ae=re.index,re=re.range,Z=Z.objectStore(D),ae=ae.isPrimaryKey?Z:Z.index(ae.name),re=h(re);if(se===0)return P({result:[]});T?((X=Y?ae.getAll(re,X):ae.getAllKeys(re,X)).onsuccess=function(ce){return P({result:ce.target.result})},X.onerror=an(L)):(M=0,B=!Y&&"openKeyCursor"in ae?ae.openKeyCursor(re):ae.openCursor(re),H=[],B.onsuccess=function(ce){var ke=B.result;return ke?(H.push(Y?ke.value:ke.primaryKey),++M===se?P({result:H}):void ke.continue()):P({result:H})},B.onerror=an(L))})}),openCursor:function(O){var P=O.trans,L=O.values,M=O.query,B=O.reverse,H=O.unique;return new Promise(function(Y,se){Y=qe(Y);var ae=M.index,X=M.range,Z=P.objectStore(D),Z=ae.isPrimaryKey?Z:Z.index(ae.name),ae=B?H?"prevunique":"prev":H?"nextunique":"next",re=!L&&"openKeyCursor"in Z?Z.openKeyCursor(h(X),ae):Z.openCursor(h(X),ae);re.onerror=an(se),re.onsuccess=qe(function(ce){var ke,Ee,Se,Ot,xe=re.result;xe?(xe.___id=++uc,xe.done=!1,ke=xe.continue.bind(xe),Ee=(Ee=xe.continuePrimaryKey)&&Ee.bind(xe),Se=xe.advance.bind(xe),Ot=function(){throw new Error("Cursor not stopped")},xe.trans=P,xe.stop=xe.continue=xe.continuePrimaryKey=xe.advance=function(){throw new Error("Cursor not started")},xe.fail=qe(se),xe.next=function(){var vt=this,xt=1;return this.start(function(){return xt--?vt.continue():vt.stop()}).then(function(){return vt})},xe.start=function(vt){function xt(){if(re.result)try{vt()}catch(Ct){xe.fail(Ct)}else xe.done=!0,xe.start=function(){throw new Error("Cursor behind last entry")},xe.stop()}var ci=new Promise(function(Ct,Nn){Ct=qe(Ct),re.onerror=an(Nn),xe.fail=Nn,xe.stop=function(ps){xe.stop=xe.continue=xe.continuePrimaryKey=xe.advance=Ot,Ct(ps)}});return re.onsuccess=qe(function(Ct){re.onsuccess=xt,xt()}),xe.continue=ke,xe.continuePrimaryKey=Ee,xe.advance=Se,xt(),ci},Y(xe)):Y(null)},se)})},count:function(O){var P=O.query,L=O.trans,M=P.index,B=P.range;return new Promise(function(H,Y){var se=L.objectStore(D),X=M.isPrimaryKey?se:se.index(M.name),se=h(B),X=se?X.count(se):X.count();X.onsuccess=qe(function(Z){return H(Z.target.result)}),X.onerror=an(Y)})}}}var p,w,$,R=(w=_,$=Co((p=s).objectStoreNames),{schema:{name:p.name,tables:$.map(function(j){return w.objectStore(j)}).map(function(j){var T=j.keyPath,P=j.autoIncrement,D=c(T),O={},P={name:j.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:T==null,compound:D,keyPath:T,autoIncrement:P,unique:!0,extractKey:Xi(T)},indexes:Co(j.indexNames).map(function(L){return j.index(L)}).map(function(H){var M=H.name,B=H.unique,Y=H.multiEntry,H=H.keyPath,Y={name:M,compound:c(H),keyPath:H,unique:B,multiEntry:Y,extractKey:Xi(H)};return O[vr(H)]=Y}),getIndexByKeyPath:function(L){return O[vr(L)]}};return O[":id"]=P.primaryKey,T!=null&&(O[vr(T)]=P.primaryKey),P})},hasGetAll:0<$.length&&"getAll"in w.objectStore($[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),_=R.schema,A=R.hasGetAll,R=_.tables.map(f),k={};return R.forEach(function(j){return k[j.name]=j}),{stack:"dbcore",transaction:s.transaction.bind(s),table:function(j){if(!k[j])throw new Error("Table '".concat(j,"' not found"));return k[j]},MIN_KEY:-1/0,MAX_KEY:wr(a),schema:_}}function hc(s,a,u,h){var f=u.IDBKeyRange;return u.indexedDB,{dbcore:(h=dc(a,f,h),s.dbcore.reduce(function(p,w){return w=w.create,i(i({},p),w(p))},h))}}function Qr(s,h){var u=h.db,h=hc(s._middlewares,u,s._deps,h);s.core=h.dbcore,s.tables.forEach(function(f){var p=f.name;s.core.schema.tables.some(function(w){return w.name===p})&&(f.core=s.core.table(p),s[p]instanceof s.Table&&(s[p].core=f.core))})}function Jr(s,a,u,h){u.forEach(function(f){var p=h[f];a.forEach(function(w){var $=(function _(A,R){return q(A,R)||(A=g(A))&&_(A,R)})(w,f);(!$||"value"in $&&$.value===void 0)&&(w===s.Transaction.prototype||w instanceof s.Transaction?N(w,f,{get:function(){return this.table(f)},set:function(_){U(this,f,{value:_,writable:!0,configurable:!0,enumerable:!0})}}):w[f]=new s.Table(f,p))})})}function Qi(s,a){a.forEach(function(u){for(var h in u)u[h]instanceof s.Table&&delete u[h]})}function fc(s,a){return s._cfg.version-a._cfg.version}function pc(s,a,u,h){var f=s._dbSchema;u.objectStoreNames.contains("$meta")&&!f.$meta&&(f.$meta=Yi("$meta",So("")[0],[]),s._storeNames.push("$meta"));var p=s._createTransaction("readwrite",s._storeNames,f);p.create(u),p._completion.catch(h);var w=p._reject.bind(p),$=te.transless||te;kn(function(){return te.trans=p,te.transless=$,a!==0?(Qr(s,u),A=a,((_=p).storeNames.includes("$meta")?_.table("$meta").get("version").then(function(R){return R??A}):ne.resolve(A)).then(function(R){return j=R,T=p,D=u,O=[],R=(k=s)._versions,P=k._dbSchema=ei(0,k.idbdb,D),(R=R.filter(function(L){return L._cfg.version>=j})).length!==0?(R.forEach(function(L){O.push(function(){var M=P,B=L._cfg.dbschema;ti(k,M,D),ti(k,B,D),P=k._dbSchema=B;var H=Ji(M,B);H.add.forEach(function(ae){Zi(D,ae[0],ae[1].primKey,ae[1].indexes)}),H.change.forEach(function(ae){if(ae.recreate)throw new oe.Upgrade("Not yet support for changing primary key");var re=D.objectStore(ae.name);ae.add.forEach(function(ce){return Zr(re,ce)}),ae.change.forEach(function(ce){re.deleteIndex(ce.name),Zr(re,ce)}),ae.del.forEach(function(ce){return re.deleteIndex(ce)})});var Y=L._cfg.contentUpgrade;if(Y&&L._cfg.version>j){Qr(k,D),T._memoizedTables={};var se=we(B);H.del.forEach(function(ae){se[ae]=M[ae]}),Qi(k,[k.Transaction.prototype]),Jr(k,[k.Transaction.prototype],l(se),se),T.schema=se;var X,Z=ct(Y);return Z&&Yn(),H=ne.follow(function(){var ae;(X=Y(T))&&Z&&(ae=Cn.bind(null,null),X.then(ae,ae))}),X&&typeof X.then=="function"?ne.resolve(X):H.then(function(){return X})}}),O.push(function(M){var B,H,Y=L._cfg.dbschema;B=Y,H=M,[].slice.call(H.db.objectStoreNames).forEach(function(se){return B[se]==null&&H.db.deleteObjectStore(se)}),Qi(k,[k.Transaction.prototype]),Jr(k,[k.Transaction.prototype],k._storeNames,k._dbSchema),T.schema=k._dbSchema}),O.push(function(M){k.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(k.idbdb.version/10)===L._cfg.version?(k.idbdb.deleteObjectStore("$meta"),delete k._dbSchema.$meta,k._storeNames=k._storeNames.filter(function(B){return B!=="$meta"})):M.objectStore("$meta").put(L._cfg.version,"version"))})}),(function L(){return O.length?ne.resolve(O.shift()(T.idbtrans)).then(L):ne.resolve()})().then(function(){Eo(P,D)})):ne.resolve();var k,j,T,D,O,P}).catch(w)):(l(f).forEach(function(R){Zi(u,R,f[R].primKey,f[R].indexes)}),Qr(s,u),void ne.follow(function(){return s.on.populate.fire(p)}).catch(w));var _,A})}function mc(s,a){Eo(s._dbSchema,a),a.db.version%10!=0||a.objectStoreNames.contains("$meta")||a.db.createObjectStore("$meta").add(Math.ceil(a.db.version/10-1),"version");var u=ei(0,s.idbdb,a);ti(s,s._dbSchema,a);for(var h=0,f=Ji(u,s._dbSchema).change;h<f.length;h++){var p=(function(w){if(w.change.length||w.recreate)return console.warn("Unable to patch indexes of table ".concat(w.name," because it has changes on the type of index or primary key.")),{value:void 0};var $=a.objectStore(w.name);w.add.forEach(function(_){Fe&&console.debug("Dexie upgrade patch: Creating missing index ".concat(w.name,".").concat(_.src)),Zr($,_)})})(f[h]);if(typeof p=="object")return p.value}}function Ji(s,a){var u,h={del:[],add:[],change:[]};for(u in s)a[u]||h.del.push(u);for(u in a){var f=s[u],p=a[u];if(f){var w={name:u,def:p,recreate:!1,del:[],add:[],change:[]};if(""+(f.primKey.keyPath||"")!=""+(p.primKey.keyPath||"")||f.primKey.auto!==p.primKey.auto)w.recreate=!0,h.change.push(w);else{var $=f.idxByName,_=p.idxByName,A=void 0;for(A in $)_[A]||w.del.push(A);for(A in _){var R=$[A],k=_[A];R?R.src!==k.src&&w.change.push(k):w.add.push(k)}(0<w.del.length||0<w.add.length||0<w.change.length)&&h.change.push(w)}}else h.add.push([u,p])}return h}function Zi(s,a,u,h){var f=s.db.createObjectStore(a,u.keyPath?{keyPath:u.keyPath,autoIncrement:u.auto}:{autoIncrement:u.auto});return h.forEach(function(p){return Zr(f,p)}),f}function Eo(s,a){l(s).forEach(function(u){a.db.objectStoreNames.contains(u)||(Fe&&console.debug("Dexie: Creating missing table",u),Zi(a,u,s[u].primKey,s[u].indexes))})}function Zr(s,a){s.createIndex(a.name,a.keyPath,{unique:a.unique,multiEntry:a.multi})}function ei(s,a,u){var h={};return he(a.objectStoreNames,0).forEach(function(f){for(var p=u.objectStore(f),w=Gi(ko(A=p.keyPath),A||"",!0,!1,!!p.autoIncrement,A&&typeof A!="string",!0),$=[],_=0;_<p.indexNames.length;++_){var R=p.index(p.indexNames[_]),A=R.keyPath,R=Gi(R.name,A,!!R.unique,!!R.multiEntry,!1,A&&typeof A!="string",!1);$.push(R)}h[f]=Yi(f,w,$)}),h}function ti(s,a,u){for(var h=u.db.objectStoreNames,f=0;f<h.length;++f){var p=h[f],w=u.objectStore(p);s._hasGetAll="getAll"in w;for(var $=0;$<w.indexNames.length;++$){var _=w.indexNames[$],A=w.index(_).keyPath,R=typeof A=="string"?A:"["+he(A).join("+")+"]";!a[p]||(A=a[p].idxByName[R])&&(A.name=_,delete a[p].idxByName[R],a[p].idxByName[_]=A)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&o.WorkerGlobalScope&&o instanceof o.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(s._hasGetAll=!1)}function So(s){return s.split(",").map(function(a,u){var h=(a=a.trim()).replace(/([&*]|\+\+)/g,""),f=/^\[/.test(h)?h.match(/^\[(.*)\]$/)[1].split("+"):h;return Gi(h,f||null,/\&/.test(a),/\*/.test(a),/\+\+/.test(a),c(f),u===0)})}var gc=(ni.prototype._parseStoresSpec=function(s,a){l(s).forEach(function(u){if(s[u]!==null){var h=So(s[u]),f=h.shift();if(f.unique=!0,f.multi)throw new oe.Schema("Primary key cannot be multi-valued");h.forEach(function(p){if(p.auto)throw new oe.Schema("Only primary key can be marked as autoIncrement (++)");if(!p.keyPath)throw new oe.Schema("Index must have a name and cannot be an empty string")}),a[u]=Yi(u,f,h)}})},ni.prototype.stores=function(u){var a=this.db;this._cfg.storesSource=this._cfg.storesSource?d(this._cfg.storesSource,u):u;var u=a._versions,h={},f={};return u.forEach(function(p){d(h,p._cfg.storesSource),f=p._cfg.dbschema={},p._parseStoresSpec(h,f)}),a._dbSchema=f,Qi(a,[a._allTables,a,a.Transaction.prototype]),Jr(a,[a._allTables,a,a.Transaction.prototype,this._cfg.tables],l(f),f),a._storeNames=l(f),this},ni.prototype.upgrade=function(s){return this._cfg.contentUpgrade=It(this._cfg.contentUpgrade||me,s),this},ni);function ni(){}function es(s,a){var u=s._dbNamesDB;return u||(u=s._dbNamesDB=new mn(Kr,{addons:[],indexedDB:s,IDBKeyRange:a})).version(1).stores({dbnames:"name"}),u.table("dbnames")}function ts(s){return s&&typeof s.databases=="function"}function ns(s){return kn(function(){return te.letThrough=!0,s()})}function rs(s){return!("from"in s)}var wt=function(s,a){if(!this){var u=new wt;return s&&"d"in s&&d(u,s),u}d(this,arguments.length?{d:1,from:s,to:1<arguments.length?a:s}:{d:0})};function xr(s,a,u){var h=Ie(a,u);if(!isNaN(h)){if(0<h)throw RangeError();if(rs(s))return d(s,{from:a,to:u,d:1});var f=s.l,h=s.r;if(Ie(u,s.from)<0)return f?xr(f,a,u):s.l={from:a,to:u,d:1,l:null,r:null},To(s);if(0<Ie(a,s.to))return h?xr(h,a,u):s.r={from:a,to:u,d:1,l:null,r:null},To(s);Ie(a,s.from)<0&&(s.from=a,s.l=null,s.d=h?h.d+1:1),0<Ie(u,s.to)&&(s.to=u,s.r=null,s.d=s.l?s.l.d+1:1),u=!s.r,f&&!s.l&&$r(s,f),h&&u&&$r(s,h)}}function $r(s,a){rs(a)||(function u(h,_){var p=_.from,w=_.to,$=_.l,_=_.r;xr(h,p,w),$&&u(h,$),_&&u(h,_)})(s,a)}function _o(s,a){var u=ri(a),h=u.next();if(h.done)return!1;for(var f=h.value,p=ri(s),w=p.next(f.from),$=w.value;!h.done&&!w.done;){if(Ie($.from,f.to)<=0&&0<=Ie($.to,f.from))return!0;Ie(f.from,$.from)<0?f=(h=u.next($.from)).value:$=(w=p.next(f.from)).value}return!1}function ri(s){var a=rs(s)?null:{s:0,n:s};return{next:function(u){for(var h=0<arguments.length;a;)switch(a.s){case 0:if(a.s=1,h)for(;a.n.l&&Ie(u,a.n.from)<0;)a={up:a,n:a.n.l,s:1};else for(;a.n.l;)a={up:a,n:a.n.l,s:1};case 1:if(a.s=2,!h||Ie(u,a.n.to)<=0)return{value:a.n,done:!1};case 2:if(a.n.r){a.s=3,a={up:a,n:a.n.r,s:0};continue}case 3:a=a.up}return{done:!0}}}}function To(s){var a,u,h=(((a=s.r)===null||a===void 0?void 0:a.d)||0)-(((u=s.l)===null||u===void 0?void 0:u.d)||0),f=1<h?"r":h<-1?"l":"";f&&(a=f=="r"?"l":"r",u=i({},s),h=s[f],s.from=h.from,s.to=h.to,s[f]=h[f],u[f]=h[a],(s[a]=u).d=Ao(u)),s.d=Ao(s)}function Ao(u){var a=u.r,u=u.l;return(a?u?Math.max(a.d,u.d):a.d:u?u.d:0)+1}function ii(s,a){return l(a).forEach(function(u){s[u]?$r(s[u],a[u]):s[u]=(function h(f){var p,w,$={};for(p in f)y(f,p)&&(w=f[p],$[p]=!w||typeof w!="object"||m.has(w.constructor)?w:h(w));return $})(a[u])}),s}function is(s,a){return s.all||a.all||Object.keys(s).some(function(u){return a[u]&&_o(a[u],s[u])})}S(wt.prototype,((Nt={add:function(s){return $r(this,s),this},addKey:function(s){return xr(this,s,s),this},addKeys:function(s){var a=this;return s.forEach(function(u){return xr(a,u,u)}),this},hasKey:function(s){var a=ri(this).next(s).value;return a&&Ie(a.from,s)<=0&&0<=Ie(a.to,s)}})[de]=function(){return ri(this)},Nt));var Mn={},ss={},os=!1;function si(s){ii(ss,s),os||(os=!0,setTimeout(function(){os=!1,as(ss,!(ss={}))},0))}function as(s,a){a===void 0&&(a=!1);var u=new Set;if(s.all)for(var h=0,f=Object.values(Mn);h<f.length;h++)Po(w=f[h],s,u,a);else for(var p in s){var w,$=/^idb\:\/\/(.*)\/(.*)\//.exec(p);$&&(p=$[1],$=$[2],(w=Mn["idb://".concat(p,"/").concat($)])&&Po(w,s,u,a))}u.forEach(function(_){return _()})}function Po(s,a,u,h){for(var f=[],p=0,w=Object.entries(s.queries.query);p<w.length;p++){for(var $=w[p],_=$[0],A=[],R=0,k=$[1];R<k.length;R++){var j=k[R];is(a,j.obsSet)?j.subscribers.forEach(function(P){return u.add(P)}):h&&A.push(j)}h&&f.push([_,A])}if(h)for(var T=0,D=f;T<D.length;T++){var O=D[T],_=O[0],A=O[1];s.queries.query[_]=A}}function bc(s){var a=s._state,u=s._deps.indexedDB;if(a.isBeingOpened||s.idbdb)return a.dbReadyPromise.then(function(){return a.dbOpenError?at(a.dbOpenError):s});a.isBeingOpened=!0,a.dbOpenError=null,a.openComplete=!1;var h=a.openCanceller,f=Math.round(10*s.verno),p=!1;function w(){if(a.openCanceller!==h)throw new oe.DatabaseClosed("db.open() was cancelled")}function $(){return new ne(function(j,T){if(w(),!u)throw new oe.MissingAPI;var D=s.name,O=a.autoSchema||!f?u.open(D):u.open(D,f);if(!O)throw new oe.MissingAPI;O.onerror=an(T),O.onblocked=qe(s._fireOnBlocked),O.onupgradeneeded=qe(function(P){var L;R=O.transaction,a.autoSchema&&!s._options.allowEmptyDB?(O.onerror=br,R.abort(),O.result.close(),(L=u.deleteDatabase(D)).onsuccess=L.onerror=qe(function(){T(new oe.NoSuchDatabase("Database ".concat(D," doesnt exist")))})):(R.onerror=an(T),P=P.oldVersion>Math.pow(2,62)?0:P.oldVersion,k=P<1,s.idbdb=O.result,p&&mc(s,R),pc(s,P/10,R,T))},T),O.onsuccess=qe(function(){R=null;var P,L,M,B,H,Y=s.idbdb=O.result,se=he(Y.objectStoreNames);if(0<se.length)try{var X=Y.transaction((B=se).length===1?B[0]:B,"readonly");if(a.autoSchema)L=Y,M=X,(P=s).verno=L.version/10,M=P._dbSchema=ei(0,L,M),P._storeNames=he(L.objectStoreNames,0),Jr(P,[P._allTables],l(M),M);else if(ti(s,s._dbSchema,X),((H=Ji(ei(0,(H=s).idbdb,X),H._dbSchema)).add.length||H.change.some(function(Z){return Z.add.length||Z.change.length}))&&!p)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),Y.close(),f=Y.version+1,p=!0,j($());Qr(s,X)}catch{}Xn.push(s),Y.onversionchange=qe(function(Z){a.vcFired=!0,s.on("versionchange").fire(Z)}),Y.onclose=qe(function(Z){s.on("close").fire(Z)}),k&&(H=s._deps,X=D,Y=H.indexedDB,H=H.IDBKeyRange,ts(Y)||X===Kr||es(Y,H).put({name:X}).catch(me)),j()},T)}).catch(function(j){switch(j?.name){case"UnknownError":if(0<a.PR1398_maxLoop)return a.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),$();break;case"VersionError":if(0<f)return f=0,$()}return ne.reject(j)})}var _,A=a.dbReadyResolve,R=null,k=!1;return ne.race([h,(typeof navigator>"u"?ne.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(j){function T(){return indexedDB.databases().finally(j)}_=setInterval(T,100),T()}).finally(function(){return clearInterval(_)}):Promise.resolve()).then($)]).then(function(){return w(),a.onReadyBeingFired=[],ne.resolve(ns(function(){return s.on.ready.fire(s.vip)})).then(function j(){if(0<a.onReadyBeingFired.length){var T=a.onReadyBeingFired.reduce(It,me);return a.onReadyBeingFired=[],ne.resolve(ns(function(){return T(s.vip)})).then(j)}})}).finally(function(){a.openCanceller===h&&(a.onReadyBeingFired=null,a.isBeingOpened=!1)}).catch(function(j){a.dbOpenError=j;try{R&&R.abort()}catch{}return h===a.openCanceller&&s._close(),at(j)}).finally(function(){a.openComplete=!0,A()}).then(function(){var j;return k&&(j={},s.tables.forEach(function(T){T.schema.indexes.forEach(function(D){D.name&&(j["idb://".concat(s.name,"/").concat(T.name,"/").concat(D.name)]=new wt(-1/0,[[[]]]))}),j["idb://".concat(s.name,"/").concat(T.name,"/")]=j["idb://".concat(s.name,"/").concat(T.name,"/:dels")]=new wt(-1/0,[[[]]])}),_n(yr).fire(j),as(j,!0)),s})}function ls(s){function a(p){return s.next(p)}var u=f(a),h=f(function(p){return s.throw(p)});function f(p){return function(_){var $=p(_),_=$.value;return $.done?_:_&&typeof _.then=="function"?_.then(u,h):c(_)?Promise.all(_).then(u,h):u(_)}}return f(a)()}function oi(s,a,u){for(var h=c(s)?s.slice():[s],f=0;f<u;++f)h.push(a);return h}var yc={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(s){return i(i({},s),{table:function(a){var u=s.table(a),h=u.schema,f={},p=[];function w(k,j,T){var D=vr(k),O=f[D]=f[D]||[],P=k==null?0:typeof k=="string"?1:k.length,L=0<j,L=i(i({},T),{name:L?"".concat(D,"(virtual-from:").concat(T.name,")"):T.name,lowLevelIndex:T,isVirtual:L,keyTail:j,keyLength:P,extractKey:Xi(k),unique:!L&&T.unique});return O.push(L),L.isPrimaryKey||p.push(L),1<P&&w(P===2?k[0]:k.slice(0,P-1),j+1,T),O.sort(function(M,B){return M.keyTail-B.keyTail}),L}a=w(h.primaryKey.keyPath,0,h.primaryKey),f[":id"]=[a];for(var $=0,_=h.indexes;$<_.length;$++){var A=_[$];w(A.keyPath,0,A)}function R(k){var j,T=k.query.index;return T.isVirtual?i(i({},k),{query:{index:T.lowLevelIndex,range:(j=k.query.range,T=T.keyTail,{type:j.type===1?2:j.type,lower:oi(j.lower,j.lowerOpen?s.MAX_KEY:s.MIN_KEY,T),lowerOpen:!0,upper:oi(j.upper,j.upperOpen?s.MIN_KEY:s.MAX_KEY,T),upperOpen:!0})}}):k}return i(i({},u),{schema:i(i({},h),{primaryKey:a,indexes:p,getIndexByKeyPath:function(k){return(k=f[vr(k)])&&k[0]}}),count:function(k){return u.count(R(k))},query:function(k){return u.query(R(k))},openCursor:function(k){var j=k.query.index,T=j.keyTail,D=j.isVirtual,O=j.keyLength;return D?u.openCursor(R(k)).then(function(L){return L&&P(L)}):u.openCursor(k);function P(L){return Object.create(L,{continue:{value:function(M){M!=null?L.continue(oi(M,k.reverse?s.MAX_KEY:s.MIN_KEY,T)):k.unique?L.continue(L.key.slice(0,O).concat(k.reverse?s.MIN_KEY:s.MAX_KEY,T)):L.continue()}},continuePrimaryKey:{value:function(M,B){L.continuePrimaryKey(oi(M,s.MAX_KEY,T),B)}},primaryKey:{get:function(){return L.primaryKey}},key:{get:function(){var M=L.key;return O===1?M[0]:M.slice(0,O)}},value:{get:function(){return L.value}}})}}})}})}};function cs(s,a,u,h){return u=u||{},h=h||"",l(s).forEach(function(f){var p,w,$;y(a,f)?(p=s[f],w=a[f],typeof p=="object"&&typeof w=="object"&&p&&w?($=C(p))!==C(w)?u[h+f]=a[f]:$==="Object"?cs(p,w,u,h+f+"."):p!==w&&(u[h+f]=a[f]):p!==w&&(u[h+f]=a[f])):u[h+f]=void 0}),l(a).forEach(function(f){y(s,f)||(u[h+f]=a[f])}),u}function us(s,a){return a.type==="delete"?a.keys:a.keys||a.values.map(s.extractKey)}var wc={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(s){return i(i({},s),{table:function(a){var u=s.table(a),h=u.schema.primaryKey;return i(i({},u),{mutate:function(f){var p=te.trans,w=p.table(a).hook,$=w.deleting,_=w.creating,A=w.updating;switch(f.type){case"add":if(_.fire===me)break;return p._promise("readwrite",function(){return R(f)},!0);case"put":if(_.fire===me&&A.fire===me)break;return p._promise("readwrite",function(){return R(f)},!0);case"delete":if($.fire===me)break;return p._promise("readwrite",function(){return R(f)},!0);case"deleteRange":if($.fire===me)break;return p._promise("readwrite",function(){return(function k(j,T,D){return u.query({trans:j,values:!1,query:{index:h,range:T},limit:D}).then(function(O){var P=O.result;return R({type:"delete",keys:P,trans:j}).then(function(L){return 0<L.numFailures?Promise.reject(L.failures[0]):P.length<D?{failures:[],numFailures:0,lastResult:void 0}:k(j,i(i({},T),{lower:P[P.length-1],lowerOpen:!0}),D)})})})(f.trans,f.range,1e4)},!0)}return u.mutate(f);function R(k){var j,T,D,O=te.trans,P=k.keys||us(h,k);if(!P)throw new Error("Keys missing");return(k=k.type==="add"||k.type==="put"?i(i({},k),{keys:P}):i({},k)).type!=="delete"&&(k.values=n([],k.values)),k.keys&&(k.keys=n([],k.keys)),j=u,D=P,((T=k).type==="add"?Promise.resolve([]):j.getMany({trans:T.trans,keys:D,cache:"immutable"})).then(function(L){var M=P.map(function(B,H){var Y,se,X,Z=L[H],ae={onerror:null,onsuccess:null};return k.type==="delete"?$.fire.call(ae,B,Z,O):k.type==="add"||Z===void 0?(Y=_.fire.call(ae,B,k.values[H],O),B==null&&Y!=null&&(k.keys[H]=B=Y,h.outbound||ue(k.values[H],h.keyPath,B))):(Y=cs(Z,k.values[H]),(se=A.fire.call(ae,Y,B,Z,O))&&(X=k.values[H],Object.keys(se).forEach(function(re){y(X,re)?X[re]=se[re]:ue(X,re,se[re])}))),ae});return u.mutate(k).then(function(B){for(var H=B.failures,Y=B.results,se=B.numFailures,B=B.lastResult,X=0;X<P.length;++X){var Z=(Y||P)[X],ae=M[X];Z==null?ae.onerror&&ae.onerror(H[X]):ae.onsuccess&&ae.onsuccess(k.type==="put"&&L[X]?k.values[X]:Z)}return{failures:H,results:Y,numFailures:se,lastResult:B}}).catch(function(B){return M.forEach(function(H){return H.onerror&&H.onerror(B)}),Promise.reject(B)})})}}})}})}};function Io(s,a,u){try{if(!a||a.keys.length<s.length)return null;for(var h=[],f=0,p=0;f<a.keys.length&&p<s.length;++f)Ie(a.keys[f],s[p])===0&&(h.push(u?E(a.values[f]):a.values[f]),++p);return h.length===s.length?h:null}catch{return null}}var vc={stack:"dbcore",level:-1,create:function(s){return{table:function(a){var u=s.table(a);return i(i({},u),{getMany:function(h){if(!h.cache)return u.getMany(h);var f=Io(h.keys,h.trans._cache,h.cache==="clone");return f?ne.resolve(f):u.getMany(h).then(function(p){return h.trans._cache={keys:h.keys,values:h.cache==="clone"?E(p):p},p})},mutate:function(h){return h.type!=="add"&&(h.trans._cache=null),u.mutate(h)}})}}}};function Do(s,a){return s.trans.mode==="readonly"&&!!s.subscr&&!s.trans.explicit&&s.trans.db._options.cache!=="disabled"&&!a.schema.primaryKey.outbound}function Ro(s,a){switch(s){case"query":return a.values&&!a.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var xc={stack:"dbcore",level:0,name:"Observability",create:function(s){var a=s.schema.name,u=new wt(s.MIN_KEY,s.MAX_KEY);return i(i({},s),{transaction:function(h,f,p){if(te.subscr&&f!=="readonly")throw new oe.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(te.querier));return s.transaction(h,f,p)},table:function(h){var f=s.table(h),p=f.schema,w=p.primaryKey,k=p.indexes,$=w.extractKey,_=w.outbound,A=w.autoIncrement&&k.filter(function(T){return T.compound&&T.keyPath.includes(w.keyPath)}),R=i(i({},f),{mutate:function(T){function D(re){return re="idb://".concat(a,"/").concat(h,"/").concat(re),B[re]||(B[re]=new wt)}var O,P,L,M=T.trans,B=T.mutatedParts||(T.mutatedParts={}),H=D(""),Y=D(":dels"),se=T.type,ae=T.type==="deleteRange"?[T.range]:T.type==="delete"?[T.keys]:T.values.length<50?[us(w,T).filter(function(re){return re}),T.values]:[],X=ae[0],Z=ae[1],ae=T.trans._cache;return c(X)?(H.addKeys(X),(ae=se==="delete"||X.length===Z.length?Io(X,ae):null)||Y.addKeys(X),(ae||Z)&&(O=D,P=ae,L=Z,p.indexes.forEach(function(re){var ce=O(re.name||"");function ke(Se){return Se!=null?re.extractKey(Se):null}function Ee(Se){return re.multiEntry&&c(Se)?Se.forEach(function(Ot){return ce.addKey(Ot)}):ce.addKey(Se)}(P||L).forEach(function(Se,vt){var xe=P&&ke(P[vt]),vt=L&&ke(L[vt]);Ie(xe,vt)!==0&&(xe!=null&&Ee(xe),vt!=null&&Ee(vt))})}))):X?(Z={from:(Z=X.lower)!==null&&Z!==void 0?Z:s.MIN_KEY,to:(Z=X.upper)!==null&&Z!==void 0?Z:s.MAX_KEY},Y.add(Z),H.add(Z)):(H.add(u),Y.add(u),p.indexes.forEach(function(re){return D(re.name).add(u)})),f.mutate(T).then(function(re){return!X||T.type!=="add"&&T.type!=="put"||(H.addKeys(re.results),A&&A.forEach(function(ce){for(var ke=T.values.map(function(xe){return ce.extractKey(xe)}),Ee=ce.keyPath.findIndex(function(xe){return xe===w.keyPath}),Se=0,Ot=re.results.length;Se<Ot;++Se)ke[Se][Ee]=re.results[Se];D(ce.name).addKeys(ke)})),M.mutatedParts=ii(M.mutatedParts||{},B),re})}}),k=function(D){var O=D.query,D=O.index,O=O.range;return[D,new wt((D=O.lower)!==null&&D!==void 0?D:s.MIN_KEY,(O=O.upper)!==null&&O!==void 0?O:s.MAX_KEY)]},j={get:function(T){return[w,new wt(T.key)]},getMany:function(T){return[w,new wt().addKeys(T.keys)]},count:k,query:k,openCursor:k};return l(j).forEach(function(T){R[T]=function(D){var O=te.subscr,P=!!O,L=Do(te,f)&&Ro(T,D)?D.obsSet={}:O;if(P){var M=function(Z){return Z="idb://".concat(a,"/").concat(h,"/").concat(Z),L[Z]||(L[Z]=new wt)},B=M(""),H=M(":dels"),O=j[T](D),P=O[0],O=O[1];if((T==="query"&&P.isPrimaryKey&&!D.values?H:M(P.name||"")).add(O),!P.isPrimaryKey){if(T!=="count"){var Y=T==="query"&&_&&D.values&&f.query(i(i({},D),{values:!1}));return f[T].apply(this,arguments).then(function(Z){if(T==="query"){if(_&&D.values)return Y.then(function(ke){return ke=ke.result,B.addKeys(ke),Z});var ae=D.values?Z.result.map($):Z.result;(D.values?B:H).addKeys(ae)}else if(T==="openCursor"){var re=Z,ce=D.values;return re&&Object.create(re,{key:{get:function(){return H.addKey(re.primaryKey),re.key}},primaryKey:{get:function(){var ke=re.primaryKey;return H.addKey(ke),ke}},value:{get:function(){return ce&&B.addKey(re.primaryKey),re.value}}})}return Z})}H.add(u)}}return f[T].apply(this,arguments)}}),R}})}};function Oo(s,a,u){if(u.numFailures===0)return a;if(a.type==="deleteRange")return null;var h=a.keys?a.keys.length:"values"in a&&a.values?a.values.length:1;return u.numFailures===h?null:(a=i({},a),c(a.keys)&&(a.keys=a.keys.filter(function(f,p){return!(p in u.failures)})),"values"in a&&c(a.values)&&(a.values=a.values.filter(function(f,p){return!(p in u.failures)})),a)}function ds(s,a){return u=s,((h=a).lower===void 0||(h.lowerOpen?0<Ie(u,h.lower):0<=Ie(u,h.lower)))&&(s=s,(a=a).upper===void 0||(a.upperOpen?Ie(s,a.upper)<0:Ie(s,a.upper)<=0));var u,h}function jo(s,a,j,h,f,p){if(!j||j.length===0)return s;var w=a.query.index,$=w.multiEntry,_=a.query.range,A=h.schema.primaryKey.extractKey,R=w.extractKey,k=(w.lowLevelIndex||w).extractKey,j=j.reduce(function(T,D){var O=T,P=[];if(D.type==="add"||D.type==="put")for(var L=new wt,M=D.values.length-1;0<=M;--M){var B,H=D.values[M],Y=A(H);L.hasKey(Y)||(B=R(H),($&&c(B)?B.some(function(re){return ds(re,_)}):ds(B,_))&&(L.addKey(Y),P.push(H)))}switch(D.type){case"add":var se=new wt().addKeys(a.values?T.map(function(ce){return A(ce)}):T),O=T.concat(a.values?P.filter(function(ce){return ce=A(ce),!se.hasKey(ce)&&(se.addKey(ce),!0)}):P.map(function(ce){return A(ce)}).filter(function(ce){return!se.hasKey(ce)&&(se.addKey(ce),!0)}));break;case"put":var X=new wt().addKeys(D.values.map(function(ce){return A(ce)}));O=T.filter(function(ce){return!X.hasKey(a.values?A(ce):ce)}).concat(a.values?P:P.map(function(ce){return A(ce)}));break;case"delete":var Z=new wt().addKeys(D.keys);O=T.filter(function(ce){return!Z.hasKey(a.values?A(ce):ce)});break;case"deleteRange":var ae=D.range;O=T.filter(function(ce){return!ds(A(ce),ae)})}return O},s);return j===s?s:(j.sort(function(T,D){return Ie(k(T),k(D))||Ie(A(T),A(D))}),a.limit&&a.limit<1/0&&(j.length>a.limit?j.length=a.limit:s.length===a.limit&&j.length<a.limit&&(f.dirty=!0)),p?Object.freeze(j):j)}function zo(s,a){return Ie(s.lower,a.lower)===0&&Ie(s.upper,a.upper)===0&&!!s.lowerOpen==!!a.lowerOpen&&!!s.upperOpen==!!a.upperOpen}function $c(s,a){return(function(u,h,f,p){if(u===void 0)return h!==void 0?-1:0;if(h===void 0)return 1;if((h=Ie(u,h))===0){if(f&&p)return 0;if(f)return 1;if(p)return-1}return h})(s.lower,a.lower,s.lowerOpen,a.lowerOpen)<=0&&0<=(function(u,h,f,p){if(u===void 0)return h!==void 0?1:0;if(h===void 0)return-1;if((h=Ie(u,h))===0){if(f&&p)return 0;if(f)return-1;if(p)return 1}return h})(s.upper,a.upper,s.upperOpen,a.upperOpen)}function kc(s,a,u,h){s.subscribers.add(u),h.addEventListener("abort",function(){var f,p;s.subscribers.delete(u),s.subscribers.size===0&&(f=s,p=a,setTimeout(function(){f.subscribers.size===0&&K(p,f)},3e3))})}var Cc={stack:"dbcore",level:0,name:"Cache",create:function(s){var a=s.schema.name;return i(i({},s),{transaction:function(u,h,f){var p,w,$=s.transaction(u,h,f);return h==="readwrite"&&(w=(p=new AbortController).signal,f=function(_){return function(){if(p.abort(),h==="readwrite"){for(var A=new Set,R=0,k=u;R<k.length;R++){var j=k[R],T=Mn["idb://".concat(a,"/").concat(j)];if(T){var D=s.table(j),O=T.optimisticOps.filter(function(ce){return ce.trans===$});if($._explicit&&_&&$.mutatedParts)for(var P=0,L=Object.values(T.queries.query);P<L.length;P++)for(var M=0,B=(se=L[P]).slice();M<B.length;M++)is((X=B[M]).obsSet,$.mutatedParts)&&(K(se,X),X.subscribers.forEach(function(ce){return A.add(ce)}));else if(0<O.length){T.optimisticOps=T.optimisticOps.filter(function(ce){return ce.trans!==$});for(var H=0,Y=Object.values(T.queries.query);H<Y.length;H++)for(var se,X,Z,ae=0,re=(se=Y[H]).slice();ae<re.length;ae++)(X=re[ae]).res!=null&&$.mutatedParts&&(_&&!X.dirty?(Z=Object.isFrozen(X.res),Z=jo(X.res,X.req,O,D,X,Z),X.dirty?(K(se,X),X.subscribers.forEach(function(ce){return A.add(ce)})):Z!==X.res&&(X.res=Z,X.promise=ne.resolve({result:Z}))):(X.dirty&&K(se,X),X.subscribers.forEach(function(ce){return A.add(ce)})))}}}A.forEach(function(ce){return ce()})}}},$.addEventListener("abort",f(!1),{signal:w}),$.addEventListener("error",f(!1),{signal:w}),$.addEventListener("complete",f(!0),{signal:w})),$},table:function(u){var h=s.table(u),f=h.schema.primaryKey;return i(i({},h),{mutate:function(p){var w=te.trans;if(f.outbound||w.db._options.cache==="disabled"||w.explicit||w.idbtrans.mode!=="readwrite")return h.mutate(p);var $=Mn["idb://".concat(a,"/").concat(u)];return $?(w=h.mutate(p),p.type!=="add"&&p.type!=="put"||!(50<=p.values.length||us(f,p).some(function(_){return _==null}))?($.optimisticOps.push(p),p.mutatedParts&&si(p.mutatedParts),w.then(function(_){0<_.numFailures&&(K($.optimisticOps,p),(_=Oo(0,p,_))&&$.optimisticOps.push(_),p.mutatedParts&&si(p.mutatedParts))}),w.catch(function(){K($.optimisticOps,p),p.mutatedParts&&si(p.mutatedParts)})):w.then(function(_){var A=Oo(0,i(i({},p),{values:p.values.map(function(R,k){var j;return _.failures[k]?R:(R=(j=f.keyPath)!==null&&j!==void 0&&j.includes(".")?E(R):i({},R),ue(R,f.keyPath,_.results[k]),R)})}),_);$.optimisticOps.push(A),queueMicrotask(function(){return p.mutatedParts&&si(p.mutatedParts)})}),w):h.mutate(p)},query:function(p){if(!Do(te,h)||!Ro("query",p))return h.query(p);var w=((A=te.trans)===null||A===void 0?void 0:A.db._options.cache)==="immutable",k=te,$=k.requery,_=k.signal,A=(function(D,O,P,L){var M=Mn["idb://".concat(D,"/").concat(O)];if(!M)return[];if(!(O=M.queries[P]))return[null,!1,M,null];var B=O[(L.query?L.query.index.name:null)||""];if(!B)return[null,!1,M,null];switch(P){case"query":var H=B.find(function(Y){return Y.req.limit===L.limit&&Y.req.values===L.values&&zo(Y.req.query.range,L.query.range)});return H?[H,!0,M,B]:[B.find(function(Y){return("limit"in Y.req?Y.req.limit:1/0)>=L.limit&&(!L.values||Y.req.values)&&$c(Y.req.query.range,L.query.range)}),!1,M,B];case"count":return H=B.find(function(Y){return zo(Y.req.query.range,L.query.range)}),[H,!!H,M,B]}})(a,u,"query",p),R=A[0],k=A[1],j=A[2],T=A[3];return R&&k?R.obsSet=p.obsSet:(k=h.query(p).then(function(D){var O=D.result;if(R&&(R.res=O),w){for(var P=0,L=O.length;P<L;++P)Object.freeze(O[P]);Object.freeze(O)}else D.result=E(O);return D}).catch(function(D){return T&&R&&K(T,R),Promise.reject(D)}),R={obsSet:p.obsSet,promise:k,subscribers:new Set,type:"query",req:p,dirty:!1},T?T.push(R):(T=[R],(j=j||(Mn["idb://".concat(a,"/").concat(u)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[p.query.index.name||""]=T)),kc(R,T,$,_),R.promise.then(function(D){return{result:jo(D.result,p,j?.optimisticOps,h,R,w)}})}})}})}};function ai(s,a){return new Proxy(s,{get:function(u,h,f){return h==="db"?a:Reflect.get(u,h,f)}})}var mn=(lt.prototype.version=function(s){if(isNaN(s)||s<.1)throw new oe.Type("Given version is not a positive number");if(s=Math.round(10*s)/10,this.idbdb||this._state.isBeingOpened)throw new oe.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,s);var a=this._versions,u=a.filter(function(h){return h._cfg.version===s})[0];return u||(u=new this.Version(s),a.push(u),a.sort(fc),u.stores({}),this._state.autoSchema=!1,u)},lt.prototype._whenReady=function(s){var a=this;return this.idbdb&&(this._state.openComplete||te.letThrough||this._vip)?s():new ne(function(u,h){if(a._state.openComplete)return h(new oe.DatabaseClosed(a._state.dbOpenError));if(!a._state.isBeingOpened){if(!a._state.autoOpen)return void h(new oe.DatabaseClosed);a.open().catch(me)}a._state.dbReadyPromise.then(u,h)}).then(s)},lt.prototype.use=function(s){var a=s.stack,u=s.create,h=s.level,f=s.name;return f&&this.unuse({stack:a,name:f}),s=this._middlewares[a]||(this._middlewares[a]=[]),s.push({stack:a,create:u,level:h??10,name:f}),s.sort(function(p,w){return p.level-w.level}),this},lt.prototype.unuse=function(s){var a=s.stack,u=s.name,h=s.create;return a&&this._middlewares[a]&&(this._middlewares[a]=this._middlewares[a].filter(function(f){return h?f.create!==h:!!u&&f.name!==u})),this},lt.prototype.open=function(){var s=this;return zn(et,function(){return bc(s)})},lt.prototype._close=function(){var s=this._state,a=Xn.indexOf(this);if(0<=a&&Xn.splice(a,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}s.isBeingOpened||(s.dbReadyPromise=new ne(function(u){s.dbReadyResolve=u}),s.openCanceller=new ne(function(u,h){s.cancelOpen=h}))},lt.prototype.close=function(u){var a=(u===void 0?{disableAutoOpen:!0}:u).disableAutoOpen,u=this._state;a?(u.isBeingOpened&&u.cancelOpen(new oe.DatabaseClosed),this._close(),u.autoOpen=!1,u.dbOpenError=new oe.DatabaseClosed):(this._close(),u.autoOpen=this._options.autoOpen||u.isBeingOpened,u.openComplete=!1,u.dbOpenError=null)},lt.prototype.delete=function(s){var a=this;s===void 0&&(s={disableAutoOpen:!0});var u=0<arguments.length&&typeof arguments[0]!="object",h=this._state;return new ne(function(f,p){function w(){a.close(s);var $=a._deps.indexedDB.deleteDatabase(a.name);$.onsuccess=qe(function(){var _,A,R;_=a._deps,A=a.name,R=_.indexedDB,_=_.IDBKeyRange,ts(R)||A===Kr||es(R,_).delete(A).catch(me),f()}),$.onerror=an(p),$.onblocked=a._fireOnBlocked}if(u)throw new oe.InvalidArgument("Invalid closeOptions argument to db.delete()");h.isBeingOpened?h.dbReadyPromise.then(w):w()})},lt.prototype.backendDB=function(){return this.idbdb},lt.prototype.isOpen=function(){return this.idbdb!==null},lt.prototype.hasBeenClosed=function(){var s=this._state.dbOpenError;return s&&s.name==="DatabaseClosed"},lt.prototype.hasFailed=function(){return this._state.dbOpenError!==null},lt.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(lt.prototype,"tables",{get:function(){var s=this;return l(this._allTables).map(function(a){return s._allTables[a]})},enumerable:!1,configurable:!0}),lt.prototype.transaction=function(){var s=function(a,u,h){var f=arguments.length;if(f<2)throw new oe.InvalidArgument("Too few arguments");for(var p=new Array(f-1);--f;)p[f-1]=arguments[f];return h=p.pop(),[a,$e(p),h]}.apply(this,arguments);return this._transaction.apply(this,s)},lt.prototype._transaction=function(s,a,u){var h=this,f=te.trans;f&&f.db===this&&s.indexOf("!")===-1||(f=null);var p,w,$=s.indexOf("?")!==-1;s=s.replace("!","").replace("?","");try{if(w=a.map(function(A){if(A=A instanceof h.Table?A.name:A,typeof A!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return A}),s=="r"||s===Ui)p=Ui;else{if(s!="rw"&&s!=qi)throw new oe.InvalidArgument("Invalid transaction mode: "+s);p=qi}if(f){if(f.mode===Ui&&p===qi){if(!$)throw new oe.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");f=null}f&&w.forEach(function(A){if(f&&f.storeNames.indexOf(A)===-1){if(!$)throw new oe.SubTransaction("Table "+A+" not included in parent transaction.");f=null}}),$&&f&&!f.active&&(f=null)}}catch(A){return f?f._promise(null,function(R,k){k(A)}):at(A)}var _=function A(R,k,j,T,D){return ne.resolve().then(function(){var O=te.transless||te,P=R._createTransaction(k,j,R._dbSchema,T);if(P.explicit=!0,O={trans:P,transless:O},T)P.idbtrans=T.idbtrans;else try{P.create(),P.idbtrans._explicit=!0,R._state.PR1398_maxLoop=3}catch(B){return B.name===Qe.InvalidState&&R.isOpen()&&0<--R._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),R.close({disableAutoOpen:!1}),R.open().then(function(){return A(R,k,j,null,D)})):at(B)}var L,M=ct(D);return M&&Yn(),O=ne.follow(function(){var B;(L=D.call(P,P))&&(M?(B=Cn.bind(null,null),L.then(B,B)):typeof L.next=="function"&&typeof L.throw=="function"&&(L=ls(L)))},O),(L&&typeof L.then=="function"?ne.resolve(L).then(function(B){return P.active?B:at(new oe.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):O.then(function(){return L})).then(function(B){return T&&P._resolve(),P._completion.then(function(){return B})}).catch(function(B){return P._reject(B),at(B)})})}.bind(null,this,p,w,f,u);return f?f._promise(p,_,"lock"):te.trans?zn(te.transless,function(){return h._whenReady(_)}):this._whenReady(_)},lt.prototype.table=function(s){if(!y(this._allTables,s))throw new oe.InvalidTable("Table ".concat(s," does not exist"));return this._allTables[s]},lt);function lt(s,a){var u=this;this._middlewares={},this.verno=0;var h=lt.dependencies;this._options=a=i({addons:lt.addons,autoOpen:!0,indexedDB:h.indexedDB,IDBKeyRange:h.IDBKeyRange,cache:"cloned"},a),this._deps={indexedDB:a.indexedDB,IDBKeyRange:a.IDBKeyRange},h=a.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var f,p,w,$,_,A={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:me,dbReadyPromise:null,cancelOpen:me,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:a.autoOpen};A.dbReadyPromise=new ne(function(k){A.dbReadyResolve=k}),A.openCanceller=new ne(function(k,j){A.cancelOpen=j}),this._state=A,this.name=s,this.on=pr(this,"populate","blocked","versionchange","close",{ready:[It,me]}),this.on.ready.subscribe=ee(this.on.ready.subscribe,function(k){return function(j,T){lt.vip(function(){var D,O=u._state;O.openComplete?(O.dbOpenError||ne.resolve().then(j),T&&k(j)):O.onReadyBeingFired?(O.onReadyBeingFired.push(j),T&&k(j)):(k(j),D=u,T||k(function P(){D.on.ready.unsubscribe(j),D.on.ready.unsubscribe(P)}))})}}),this.Collection=(f=this,mr(oc.prototype,function(L,P){this.db=f;var T=fo,D=null;if(P)try{T=P()}catch(M){D=M}var O=L._ctx,P=O.table,L=P.hook.reading.fire;this._ctx={table:P,index:O.index,isPrimKey:!O.index||P.schema.primKey.keyPath&&O.index===P.schema.primKey.name,range:T,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:D,or:O.or,valueMapper:L!==Ce?L:null}})),this.Table=(p=this,mr(bo.prototype,function(k,j,T){this.db=p,this._tx=T,this.name=k,this.schema=j,this.hook=p._allTables[k]?p._allTables[k].hook:pr(null,{creating:[Ze,me],reading:[Pt,Ce],updating:[Jt,me],deleting:[xn,me]})})),this.Transaction=(w=this,mr(cc.prototype,function(k,j,T,D,O){var P=this;this.db=w,this.mode=k,this.storeNames=j,this.schema=T,this.chromeTransactionDurability=D,this.idbtrans=null,this.on=pr(this,"complete","error","abort"),this.parent=O||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new ne(function(L,M){P._resolve=L,P._reject=M}),this._completion.then(function(){P.active=!1,P.on.complete.fire()},function(L){var M=P.active;return P.active=!1,P.on.error.fire(L),P.parent?P.parent._reject(L):M&&P.idbtrans&&P.idbtrans.abort(),at(L)})})),this.Version=($=this,mr(gc.prototype,function(k){this.db=$,this._cfg={version:k,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(_=this,mr($o.prototype,function(k,j,T){if(this.db=_,this._ctx={table:k,index:j===":id"?null:j,or:T},this._cmp=this._ascending=Ie,this._descending=function(D,O){return Ie(O,D)},this._max=function(D,O){return 0<Ie(D,O)?D:O},this._min=function(D,O){return Ie(D,O)<0?D:O},this._IDBKeyRange=_._deps.IDBKeyRange,!this._IDBKeyRange)throw new oe.MissingAPI})),this.on("versionchange",function(k){0<k.newVersion?console.warn("Another connection wants to upgrade database '".concat(u.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(u.name,"'. Closing db now to resume the delete request.")),u.close({disableAutoOpen:!1})}),this.on("blocked",function(k){!k.newVersion||k.newVersion<k.oldVersion?console.warn("Dexie.delete('".concat(u.name,"') was blocked")):console.warn("Upgrade '".concat(u.name,"' blocked by other connection holding version ").concat(k.oldVersion/10))}),this._maxKey=wr(a.IDBKeyRange),this._createTransaction=function(k,j,T,D){return new u.Transaction(k,j,T,u._options.chromeTransactionDurability,D)},this._fireOnBlocked=function(k){u.on("blocked").fire(k),Xn.filter(function(j){return j.name===u.name&&j!==u&&!j._state.vcFired}).map(function(j){return j.on("versionchange").fire(k)})},this.use(vc),this.use(Cc),this.use(xc),this.use(yc),this.use(wc);var R=new Proxy(this,{get:function(k,j,T){if(j==="_vip")return!0;if(j==="table")return function(O){return ai(u.table(O),R)};var D=Reflect.get(k,j,T);return D instanceof bo?ai(D,R):j==="tables"?D.map(function(O){return ai(O,R)}):j==="_createTransaction"?function(){return ai(D.apply(this,arguments),R)}:D}});this.vip=R,h.forEach(function(k){return k(u)})}var li,Nt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Ec=(hs.prototype.subscribe=function(s,a,u){return this._subscribe(s&&typeof s!="function"?s:{next:s,error:a,complete:u})},hs.prototype[Nt]=function(){return this},hs);function hs(s){this._subscribe=s}try{li={indexedDB:o.indexedDB||o.mozIndexedDB||o.webkitIndexedDB||o.msIndexedDB,IDBKeyRange:o.IDBKeyRange||o.webkitIDBKeyRange}}catch{li={indexedDB:null,IDBKeyRange:null}}function Fo(s){var a,u=!1,h=new Ec(function(f){var p=ct(s),w,$=!1,_={},A={},R={get closed(){return $},unsubscribe:function(){$||($=!0,w&&w.abort(),k&&_n.storagemutated.unsubscribe(T))}};f.start&&f.start(R);var k=!1,j=function(){return Ni(D)},T=function(O){ii(_,O),is(A,_)&&j()},D=function(){var O,P,L;!$&&li.indexedDB&&(_={},O={},w&&w.abort(),w=new AbortController,L=(function(M){var B=Le();try{p&&Yn();var H=kn(s,M);return H=p?H.finally(Cn):H}finally{B&&Ge()}})(P={subscr:O,signal:w.signal,requery:j,querier:s,trans:null}),Promise.resolve(L).then(function(M){u=!0,a=M,$||P.signal.aborted||(_={},(function(B){for(var H in B)if(y(B,H))return;return 1})(A=O)||k||(_n(yr,T),k=!0),Ni(function(){return!$&&f.next&&f.next(M)}))},function(M){u=!1,["DatabaseClosedError","AbortError"].includes(M?.name)||$||Ni(function(){$||f.error&&f.error(M)})}))};return setTimeout(j,0),R});return h.hasValue=function(){return u},h.getValue=function(){return a},h}var Bn=mn;function fs(s){var a=Tn;try{Tn=!0,_n.storagemutated.fire(s),as(s,!0)}finally{Tn=a}}S(Bn,i(i({},Be),{delete:function(s){return new Bn(s,{addons:[]}).delete()},exists:function(s){return new Bn(s,{addons:[]}).open().then(function(a){return a.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(s){try{return a=Bn.dependencies,u=a.indexedDB,a=a.IDBKeyRange,(ts(u)?Promise.resolve(u.databases()).then(function(h){return h.map(function(f){return f.name}).filter(function(f){return f!==Kr})}):es(u,a).toCollection().primaryKeys()).then(s)}catch{return at(new oe.MissingAPI)}var a,u},defineClass:function(){return function(s){d(this,s)}},ignoreTransaction:function(s){return te.trans?zn(te.transless,s):s()},vip:ns,async:function(s){return function(){try{var a=ls(s.apply(this,arguments));return a&&typeof a.then=="function"?a:ne.resolve(a)}catch(u){return at(u)}}},spawn:function(s,a,u){try{var h=ls(s.apply(u,a||[]));return h&&typeof h.then=="function"?h:ne.resolve(h)}catch(f){return at(f)}},currentTransaction:{get:function(){return te.trans||null}},waitFor:function(s,a){return a=ne.resolve(typeof s=="function"?Bn.ignoreTransaction(s):s).timeout(a||6e4),te.trans?te.trans.waitFor(a):a},Promise:ne,debug:{get:function(){return Fe},set:function(s){Ke(s)}},derive:F,extend:d,props:S,override:ee,Events:pr,on:_n,liveQuery:Fo,extendObservabilitySet:ii,getByKeyPath:J,setByKeyPath:ue,delByKeyPath:function(s,a){typeof a=="string"?ue(s,a,void 0):"length"in a&&[].map.call(a,function(u){ue(s,u,void 0)})},shallowClone:we,deepClone:E,getObjectDiff:cs,cmp:Ie,asap:V,minKey:-1/0,addons:[],connections:Xn,errnames:Qe,dependencies:li,cache:Mn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(s){return parseInt(s)}).reduce(function(s,a,u){return s+a/Math.pow(10,2*u)})})),Bn.maxKey=wr(Bn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(_n(yr,function(s){Tn||(s=new CustomEvent(Vi,{detail:s}),Tn=!0,dispatchEvent(s),Tn=!1)}),addEventListener(Vi,function(s){s=s.detail,Tn||fs(s)}));var Zn,Tn=!1,Lo=function(){};return typeof BroadcastChannel<"u"&&((Lo=function(){(Zn=new BroadcastChannel(Vi)).onmessage=function(s){return s.data&&fs(s.data)}})(),typeof Zn.unref=="function"&&Zn.unref(),_n(yr,function(s){Tn||Zn.postMessage(s)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(s){if(!mn.disableBfCache&&s.persisted){Fe&&console.debug("Dexie: handling persisted pagehide"),Zn?.close();for(var a=0,u=Xn;a<u.length;a++)u[a].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(s){!mn.disableBfCache&&s.persisted&&(Fe&&console.debug("Dexie: handling persisted pageshow"),Lo(),fs({all:new wt(-1/0,[[]])}))})),ne.rejectionMapper=function(s,a){return!s||s instanceof We||s instanceof TypeError||s instanceof SyntaxError||!s.name||!Je[s.name]?s:(a=new Je[s.name](a||s.message,s),"stack"in s&&N(a,"stack",{get:function(){return this.inner.stack}}),a)},Ke(Fe),i(mn,Object.freeze({__proto__:null,Dexie:mn,liveQuery:Fo,Entity:po,cmp:Ie,PropModSymbol:pn,PropModification:gr,replacePrefix:function(s,a){return new gr({replacePrefix:[s,a]})},add:function(s){return new gr({add:s})},remove:function(s){return new gr({remove:s})},default:mn,RangeSet:wt,mergeRanges:$r,rangesOverlap:_o}),{default:mn}),mn})})(gi)),gi.exports}var su=iu();const Ss=nu(su),Jo=Symbol.for("Dexie"),vi=globalThis[Jo]||(globalThis[Jo]=Ss);if(Ss.semVer!==vi.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Ss.semVer} and ${vi.semVer}`);const{liveQuery:Ja,mergeRanges:ug,rangesOverlap:dg,RangeSet:hg,cmp:fg,Entity:pg,PropModSymbol:mg,PropModification:gg,replacePrefix:bg,add:yg,remove:wg}=vi,ou="easydb";let ui=null;function au(){if(ui)return ui;const e=new vi(ou);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>lu()),ui={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},ui}function lu(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function er(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const r=Object.entries(t);return e.filter(i=>Za(i,r)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,r){if(await e.update(t,r)===0)throw new Error(`patch: no doc with id=${t}`);const n=await e.get(t);if(!n)throw new Error(`patch: doc id=${t} vanished after update`);return n},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const i=Ja(()=>e.toArray()).subscribe({next:n=>t(n)});return()=>i.unsubscribe()}}}function cu(e,t){return{async find(r){const i=e.where("tableId").equals(t);if(!r||Object.keys(r).length===0)return i.toArray();const n=Object.entries(r);return i.filter(o=>Za(o,n)).toArray()},async findOne(r){const i=await e.get(r);return i&&i.tableId===t?i:null},async insert(r){const i={...r,tableId:t};return await e.add(i),i},async bulkInsert(r){if(r.length===0)return[];const i=r.map(n=>({...n,tableId:t}));return await e.bulkAdd(i),i},async upsert(r){const i={...r,tableId:t};return await e.put(i),i},async patch(r,i){if(await e.update(r,i)===0)throw new Error(`row patch: no row ${r}`);const o=await e.get(r);if(!o)throw new Error(`row patch: row ${r} vanished after update`);return o},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},subscribe(r){const n=Ja(()=>e.where("tableId").equals(t).toArray()).subscribe({next:o=>r(o)});return()=>n.unsubscribe()}}}function Za(e,t){for(const[r,i]of t)if(e[r]!==i)return!1;return!0}function uu(e){return{workspaces:er(e.workspaces),tables:er(e.tables),settings:er(e.settings),plugins:er(e.plugins),viewTemplates:er(e.viewTemplates),viewInstances:er(e.viewInstances),rows:t=>cu(e.rows,t)}}function du(e){const{base:t,providers:r,tableById:i,ctx:n}=e,o=new Map;return{...t,rows(l){const c=i(l),d=c?.source;if(d){const g=r.get(d.type);if(g){const x=JSON.stringify(d),y=o.get(l);if(y&&y.key===x)return y.coll;const S=g.create(c,n);return o.set(l,{key:x,coll:S}),S}}return o.delete(l),t.rows(l)}}}function hu(){const e=new Map;return{on(t,r){let i=e.get(t);return i||(i=new Set,e.set(t,i)),i.add(r),()=>{i.delete(r)}},emit(t,r){const i=e.get(t);if(i)for(const n of i)try{n(r)}catch(o){console.error(`[event:${String(t)}] listener threw`,o)}}}}const Kt=He`
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
`;function Vt(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const r=t.querySelector("form");r&&(e.preventDefault(),r.requestSubmit())}const Zo=new WeakSet;function Gt(e,t){if(Zo.has(t))return;Zo.add(t);let r=0,i=0,n=0,o=0,l=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",d=>{if(d.target.closest("button, input, textarea, select, a, label"))return;l=!0,r=d.clientX,i=d.clientY;const x=e.getBoundingClientRect();n=x.left,o=x.top,t.setPointerCapture(d.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",d=>{if(!l)return;const g=d.clientX-r,x=d.clientY-i,y=-e.offsetWidth+80,S=window.innerWidth-80,U=0,N=window.innerHeight-40,F=Math.max(y,Math.min(S,n+g)),q=Math.max(U,Math.min(N,o+x));e.style.position="fixed",e.style.left=`${F}px`,e.style.top=`${q}px`,e.style.margin="0"});const c=d=>{if(l){l=!1;try{t.releasePointerCapture(d.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c)}var fu=Object.defineProperty,pu=Object.getOwnPropertyDescriptor,el=(e,t,r,i)=>{for(var n=i>1?void 0:i?pu(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&fu(t,r,n),n};let Ut=class extends Ne{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),Ut.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ut.instance===this&&(Ut.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&Gt(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:t,message:e,resolve:r}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",r="Input"){return this.enqueue(i=>{this.current={kind:"prompt",title:r,message:e,value:t,resolve:i}})}choice(e,t,r="Choose"){return this.enqueue(i=>{this.current={kind:"choice",title:r,message:e,options:t,resolve:i}})}enqueue(e){return new Promise(t=>{const r=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const r=this.queue.shift();r&&r()}))}render(){const e=this.current;return I`
      <dialog @cancel=${this.onCancel} @keydown=${Vt}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):be}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return I`
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
        `;case"prompt":return I`
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
        `;case"choice":return I`
          <div class="dialog-header">
            <h2>${e.title}</h2>
            <div class="header-actions">
              <button class="ghost" @click=${()=>this.closeAndResolve(null)}>Cancel</button>
            </div>
          </div>
          <div class="dialog-body">
            ${e.message?I`<p class="message">${e.message}</p>`:be}
            <div class="choices">
              ${e.options.map(t=>I`<button class="choice" @click=${()=>this.closeAndResolve(t)}>
                    ${t}
                  </button>`)}
            </div>
          </div>
        `}}};Ut.instance=null;Ut.styles=[Kt,He`
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
    `];el([W()],Ut.prototype,"current",2);Ut=el([tt("host-dialogs")],Ut);const Yt=He`
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
`;var mu=Object.defineProperty,gu=Object.getOwnPropertyDescriptor,tl=(e,t,r,i)=>{for(var n=i>1?void 0:i?gu(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&mu(t,r,n),n};let bn=class extends Ne{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),bn.instance=this}disconnectedCallback(){super.disconnectedCallback(),bn.instance===this&&(bn.instance=null)}show(e,t){const r={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,r];const i=t?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),i)}dismiss(e){const t=this.toasts.find(r=>r.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(r=>r.id!==e)}render(){return I`
      ${this.toasts.map(e=>I`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${yu(e.kind)}</span>
            <span class="body">
              ${e.title?I`<strong>${e.title}</strong>`:""}${bu(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};bn.instance=null;bn.styles=[Yt,He`
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
    `];tl([W()],bn.prototype,"toasts",2);bn=tl([tt("toast-host")],bn);function bu(e){const t=/(https?:\/\/[^\s)]+)/g,r=[];let i=0,n;for(;(n=t.exec(e))!==null;)n.index>i&&r.push(e.slice(i,n.index)),r.push({url:n[0]}),i=n.index+n[0].length;return i<e.length&&r.push(e.slice(i)),r.length===0?e:r.map(o=>typeof o=="string"?o:I`<a href=${o.url} target="_blank" rel="noopener noreferrer">${o.url}</a>`)}function yu(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function wu(){return{headerButtons:[],footerButtons:[],tableButtons:[],importers:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map,settings:new Map,commands:[]}}function An(e,t){return e.push(t),()=>{const r=e.indexOf(t);r>=0&&e.splice(r,1)}}function gs(e,t,r){return e.set(t,r),()=>{e.get(t)===r&&e.delete(t)}}function vu(e){return{registerHeaderButton:t=>An(e.headerButtons,t),registerFooterButton:t=>An(e.footerButtons,t),registerTableButton:t=>An(e.tableButtons,t),registerImporter:t=>An(e.importers,t),registerExporter:t=>An(e.exporters,t),registerUrlSource:t=>An(e.urlSources,t),registerDropHandler:t=>An(e.dropHandlers,t),registerCellRenderer:(t,r)=>gs(e.cellRenderers,t,r),registerRowRenderer:(t,r)=>gs(e.rowRenderers,t,r),registerTableRenderer:(t,r)=>gs(e.tableRenderers,t,r),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},openSettings:()=>{document.dispatchEvent(new CustomEvent("easydb:open-settings"))},registerCommand:t=>An(e.commands,t),openCommandPalette:()=>{document.dispatchEvent(new CustomEvent("easydb:open-command-palette"))},registerSettings:(t,r,i)=>(e.settings.set(t,{name:r,fields:i}),()=>{e.settings.get(t)?.name===r&&e.settings.delete(t)}),dialogs:xu}}const xu={async alert(e,t){const r=Ut.instance;if(r)return r.alert(e,t);window.alert(e)},async confirm(e,t){const r=Ut.instance;return r?r.confirm(e,t):window.confirm(e)},async prompt(e,t,r){const i=Ut.instance;return i?i.prompt(e,t,r):window.prompt(e,t)??null},async choice(e,t,r){const i=Ut.instance;if(i)return i.choice(e,t,r);const n=window.prompt(`${e}

Options: ${t.join(", ")}`);return n&&t.includes(n)?n:null},toast(e,t){const r=bn.instance;r?r.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}},Ys="/easydbaccess/settings.json",nl="/easydbaccess/secrets.txt";function Rr(e){try{return globalThis.localStorage??null}catch{return null}}function Pi(e){const t=Rr();if(!t)return{};const r=t.getItem(Ys);if(!r)return{};try{const i=JSON.parse(r);return i&&typeof i=="object"?i:{}}catch{return{}}}function Xs(e,t){return Pi()[e]}function $u(e,t,r){const i=Rr();if(!i)return;const n=Pi();n[e]=t,i.setItem(Ys,JSON.stringify(n))}function ku(e,t){const r=Rr();if(!r)return;const i=Pi();e in i&&(delete i[e],r.setItem(Ys,JSON.stringify(i)))}function _s(e,t){return e in Pi()}function Ii(e){return Rr()?.getItem(nl)??""}function rl(e,t){Rr()?.setItem(nl,e)}function Di(e){const t={};for(const r of e.split(/\r?\n/)){const i=r.trim();if(!i||i.startsWith("#"))continue;const n=i.indexOf(":");if(n<0)continue;const o=i.slice(0,n).trim(),l=i.slice(n+1).trim();o&&(t[o]=l)}return t}function il(e,t){return e.replace(/\$\{secret:([^}]+)\}/g,(r,i)=>{const n=t[i.trim()];return n===void 0?r:n})}function Cu(e){const t=vu(e.registries),r=e.registries.rowSources,i=l=>(r.set(l.type,l),()=>{r.get(l.type)===l&&r.delete(l.type)}),n=Su(e.store,e.registries),o={open(l){return console.warn("[host] windows.open is stubbed until Phase 5",l.id),{id:l.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:o,registerRowSource:i,settings:n,backend:{fetch:async(l,c)=>{const d=await Eu(e.store),g=c?.body instanceof ArrayBuffer;if(!d||g)return globalThis.fetch(l,c);const x={url:l};return c?.method&&(x.method=c.method),c?.headers&&(x.headers=c.headers),typeof c?.body=="string"&&(x.body=c.body),globalThis.fetch(`${d}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)})},async saveFile(l,c,d){const g=typeof c=="string"?new Blob([c],{type:d??"application/octet-stream"}):c,x=URL.createObjectURL(g),y=document.createElement("a");y.href=x,y.download=l,y.rel="noopener",document.body.appendChild(y),y.click(),y.remove(),setTimeout(()=>URL.revokeObjectURL(x),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function Eu(e){const t="server-sync:url";let r=_s(t)?Xs(t):void 0;return r===void 0&&(r=(await e.settings.findOne(t))?.value),typeof r!="string"||r.length===0?null:il(r,Di(Ii())).replace(/\/+$/,"")}function Su(e,t){const r=(o,l)=>`${o}:${l}`,i=(o,l)=>t.settings.get(o)?.fields.find(c=>c.key===l),n=o=>typeof o=="string"?il(o,Di(Ii())):o;return{async get(o,l){const c=r(o,l);let d;if(_s(c))d=Xs(c);else{const g=await e.settings.findOne(c);d=g?g.value:i(o,l)?.default}return n(d)},async set(o,l,c,d){const g=r(o,l);(d??i(o,l)?.scope??"workspace")==="user"?($u(g,c),await e.settings.remove(g).catch(()=>{})):(await e.settings.upsert({key:g,value:c}),ku(g))},async placement(o,l){const c=r(o,l);return _s(c)?"user":await e.settings.findOne(c)?"workspace":null}}}const _u={id:"csv-import",name:"CSV Import",type:"importer",version:"0.1.0",description:"Drag-and-drop CSV files to create typed tables.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-import.ts"};function Tu(e){e.ui.registerImporter(Au),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const i=Nu(t).filter(Uu);if(i.length===0)return!1;t.preventDefault();for(const n of i)await Pu(e,n);return!0})}const Au={id:"csv",label:"CSV",accept:[".csv","text/csv"],async parse(e){const t=typeof e=="string"?e:await e.text();return Or(t)}};async function Pu(e,t){const r=t.name.replace(/\.csv$/i,"")||"imported";await xi(e,await t.text(),r)}async function xi(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("csv-import: no active workspace");const o=(r||"imported").replace(/\.csv$/i,"")||"imported",l=(await e.store.tables.find()).find(y=>y.workspaceId===n&&y.name===o);let c,d;if(l){const y=await e.ui.dialogs.choice(`A table named "${o}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!y)return;y==="Append rows"?(d="append",c=l.id):y==="Overwrite rows"?(d="overwrite",c=l.id):(d="new",c=di())}else d="new",c=di();e.events.emit("import:before",{source:"csv",tableId:c});let g;if(d==="new"){const y=Or(t,{maxRows:i.maxRows});let S=y.columns,U=y.rows;if(i.editColumns){const F=await i.editColumns(S);if(F===null)return;U=qu(U,S,F),S=F}i.maxRows!=null&&(U=U.slice(0,i.maxRows));const N=l?`${o} (${Date.now().toString(36)})`:o;await e.store.tables.insert({id:c,workspaceId:n,name:N,code:Ts(N),columns:S,view:"table",...i.origin?{origin:i.origin}:{},updatedAt:Date.now()}),g=U.map(F=>({id:di(),tableId:c,data:F,updatedAt:Date.now()}))}else{const y=l.columns,S=sl(t,{maxRows:i.maxRows});if(g=(i.maxRows!=null?S.rows.slice(0,i.maxRows):S.rows).map(N=>{const F={};for(let q=0;q<y.length;q++){const G=y[q];F[G.field]=ul(N[q]??"",G.type)}return{id:di(),tableId:c,data:F,updatedAt:Date.now()}}),d==="overwrite"){const N=e.store.rows(c),F=await N.find();await N.bulkRemove(F.map(q=>q.id))}}await e.store.rows(c).bulkInsert(g),e.events.emit("import:after",{source:"csv",tableId:c,rowCount:g.length})}function sl(e,t={}){const r=e.replace(/﻿/,""),i=ll(r),n=cl(r,i,ol(t.maxRows));if(n.length===0)return{header:[],rows:[]};const o=n[0],l=n.slice(1).filter(c=>!(c.length===1&&c[0]===""));return{header:o,rows:l}}function ol(e){return e!=null?e+1:void 0}async function al(e,t){const i=new TextDecoder,n=t+1;let o="",l=0,c=!1,d=0;for(;d<e.size;){const g=new Uint8Array(await e.slice(d,d+1048576).arrayBuffer());d+=1048576;const x=i.decode(g,{stream:!0});for(let y=0;y<x.length;y++){const S=x[y];if(S==='"')c=!c;else if(S===`
`&&!c&&(l+=1,l>=n))return o+x.slice(0,y+1)}o+=x}return o}function Or(e,t={}){const r=e.replace(/﻿/,""),i=ll(r),n=cl(r,i,ol(t.maxRows));if(n.length===0)return{columns:[],rows:[]};const o=n[0],l=n.slice(1).filter(U=>!(U.length===1&&U[0]==="")),c=o.map((U,N)=>Ru(U,N)),d=hl(c.map(U=>U.field)),g=l.map(U=>{const N={};for(let F=0;F<d.length;F++)N[d[F]]=U[F]??"";return N}),x=c.map((U,N)=>U.type?U.type:Ou(g.map(F=>F[d[N]]??"").filter(F=>F.length>0))),y=c.map((U,N)=>{const F=x[N]??"string",q={field:d[N],label:U.label,type:F},G=Du(F),he=U.renderer??G;return he&&(q.renderer=he),U.default!==void 0&&(q.default=U.default),U.max!=null&&(q.max=U.max),U.unique&&(q.unique=!0),U.notnull&&(q.notnull=!0),U.hidden&&(q.hidden=!0),q}),S=g.map(U=>{const N={};for(let F=0;F<d.length;F++){const q=d[F],G=x[F]??"string";N[q]=ul(U[q]??"",G)}return N});return{columns:y,rows:S}}const Iu=new Set(["string","number","boolean","date","datetime"]),ea={color:"color",image:"image"};function Du(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function Ru(e,t){const r=e.trim();if(!r.includes(":"))return{field:Ts(r||`col_${t+1}`),label:r||`Column ${t+1}`};const i=r.split(":"),n=Ts(i[0]||`col_${t+1}`),o=(i[1]??i[0]??"").trim()||n,l={field:n,label:o},c=(i[2]??"").trim();c&&(Iu.has(c)?l.type=c:ea[c]&&(l.type="string",l.renderer=ea[c]));const d=(i[3]??"").trim();d&&(l.default=d);const g=(i[4]??"").trim();if(g){const y=Number(g);Number.isFinite(y)&&y>0&&(l.max=y)}const x=(i[5]??"").toLowerCase();return x.includes("u")&&(l.unique=!0),x.includes("n")&&(l.notnull=!0),x.includes("h")&&(l.hidden=!0),l}function ll(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),r={",":0,";":0,"	":0};for(const o of t)o in r&&(r[o]+=1);let i=",",n=-1;for(const o of[",",";","	"])(r[o]??0)>n&&(i=o,n=r[o]??0);return i}function cl(e,t,r){const i=[];let n=[],o="",l=!1;for(let c=0;c<e.length;c++){const d=e[c];if(l)d==='"'?e[c+1]==='"'?(o+='"',c++):l=!1:o+=d;else if(d==='"')l=!0;else if(d===t)n.push(o),o="";else if(d===`
`||d==="\r"){if(d==="\r"&&e[c+1]===`
`&&c++,n.push(o),i.push(n),n=[],o="",r!=null&&i.length>=r)return i}else o+=d}return(o.length>0||n.length>0)&&(n.push(o),i.push(n)),i}function Ou(e){return e.length===0?"string":e.every(zu)?"boolean":e.every(Fu)?"number":e.every(Mu)?"datetime":e.every(Lu)?"date":"string"}const ju=/^(true|false|yes|no|0|1)$/i;function zu(e){return ju.test(e.trim())}function Fu(e){const t=e.trim();if(t==="")return!1;const r=Number(t);return Number.isFinite(r)}function Lu(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function Mu(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function ul(e,t){const r=e.trim();switch(t){case"number":{if(r==="")return null;const i=Number(r);return Number.isFinite(i)?i:r}case"boolean":return r===""?null:/^(true|yes|1)$/i.test(r);case"date":return dl(r);case"datetime":return Bu(r);default:return e}}function dl(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){let i=parseInt(t[1],10),n=parseInt(t[2],10);const o=t[3];let l=parseInt(o,10);o.length===2&&(l+=2e3);let c,d;return i>12?(c=i,d=n):n>12?(d=i,c=n):(c=i,d=n),`${l.toString().padStart(4,"0")}-${d.toString().padStart(2,"0")}-${c.toString().padStart(2,"0")}`}const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toISOString().slice(0,10)}function Bu(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),r=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(r)return`${r[1]}T${r[2].padStart(5,"0")}`;const i=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(i)return`${dl(`${i[1]}/${i[2]}/${i[3]}`)}T${i[4].padStart(5,"0")}`;const n=new Date(e);if(!Number.isNaN(n.getTime())){const o=n.toISOString();return`${o.slice(0,10)}T${o.slice(11,16)}`}return e}function Nu(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function Uu(e){return!!(/\.csv$/i.test(e.name)||e.type==="text/csv"||e.type==="application/csv")}function hl(e){const t=new Map,r=new Set,i=[];for(const n of e){let o=n,l=t.get(n)??0;for(;r.has(o);)l+=1,o=`${n}_${l+1}`;t.set(n,l),r.add(o),i.push(o)}return i}function qu(e,t,r){return e.map(i=>{const n={};for(let o=0;o<t.length;o++)n[r[o].field]=i[t[o].field];return n})}function Ts(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function di(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Hu=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:hl,importCsvText:xi,init:Tu,meta:_u,parseCsv:Or,parseCsvRaw:sl,readCsvHead:al},Symbol.toStringTag,{value:"Module"})),Wu={id:"csv-export",name:"CSV Export",type:"exporter",version:"0.1.0",description:"Export a single table as a .csv file via a per-table button.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-export.ts"},Ku={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return Qs(e,t)}};function Vu(e){e.ui.registerExporter(Ku),e.ui.registerTableButton({id:"csv-export:download",label:"CSV",icon:"file_download",tooltip:"Download this table as a .csv file",onClick:async(t,r)=>{const i=await t.store.tables.findOne(r.tableId);if(!i)return;const n=await t.store.rows(i.id).find(),o=Qs(i,n);await t.backend.saveFile(`${i.code||i.name||"table"}.csv`,o,"text/csv")}})}function Qs(e,t){const r=e.columns.map(o=>o.field),i=e.columns.map(o=>ta(o.label??o.field)),n=t.map(o=>r.map(l=>ta(Gu(o.data[l]))).join(","));return[i.join(","),...n].join(`\r
`)}function Gu(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function ta(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const Yu=Object.freeze(Object.defineProperty({__proto__:null,init:Vu,meta:Wu,serializeCsv:Qs},Symbol.toStringTag,{value:"Module"}));var Xu=Object.defineProperty,Qu=Object.getOwnPropertyDescriptor,lr=(e,t,r,i)=>{for(var n=i>1?void 0:i?Qu(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Xu(t,r,n),n};function As(e,t={}){return(jt.instance??Ju()).open(e,t)}function Ju(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function Zu(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let jt=class extends Ne{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((r,i)=>r?i:-1).filter(r=>r>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),jt.instance=this}disconnectedCallback(){super.disconnectedCallback(),jt.instance===this&&(jt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Gt(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(r=>!r.hidden),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(r=>{this.resolveFn=r,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return I`
      <dialog @cancel=${this.onCancel} @keydown=${Vt}>
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
            ${this.message?I`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            <ul class="tables">
              ${this.items.map((t,r)=>I`
                  <li>
                    <input
                      type="checkbox"
                      id=${`tsel-${r}`}
                      .checked=${this.selected[r]??!1}
                      @change=${()=>this.toggle(r)}
                    />
                    <label for=${`tsel-${r}`}>
                      <span class="name">${t.name}</span>
                      ${t.hidden?I`<span class="tag-hidden">hidden</span>`:""}
                      <span class="size">${Zu(t.size)}</span>
                      ${t.detail?I`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};jt.instance=null;jt.styles=[Kt,He`
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
    `];lr([W()],jt.prototype,"items",2);lr([W()],jt.prototype,"selected",2);lr([W()],jt.prototype,"heading",2);lr([W()],jt.prototype,"message",2);lr([W()],jt.prototype,"confirmLabel",2);jt=lr([tt("table-select-dialog")],jt);const ed={id:"json-import",name:"JSON Import",type:"importer",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"/><path d="M16 3a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/json-import.ts"};function td(e){e.ui.registerImporter(nd),e.ui.registerDropHandler(async t=>{const i=ud(t).filter(dd);if(i.length===0)return!1;t.preventDefault();for(const n of i)await rd(e,n);return!0})}const nd={id:"json",label:"JSON",accept:[".json",".db.json","application/json"],async parse(e){const t=typeof e=="string"?e:await e.text(),r=JSON.parse(t),n=jr(r,"imported")[0];return{columns:n?.columns??[],rows:n?.rows??[]}}};async function rd(e,t){await $i(e,await t.text(),t.name)}async function $i(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("json-import: no active workspace");let o;try{o=JSON.parse(t)}catch(q){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${r}: ${q.message}`)});return}const l=r.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",c=jr(o,l);if(c.length===0)return;let d=c;if(c.length>1){const q=await As(c.map(G=>({name:G.name,size:G.rows.length})),{title:"Import tables",message:`"${r}" contains ${c.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!q)return;d=q.map(G=>c[G])}const g=(await e.store.tables.find()).filter(q=>q.workspaceId===n),x=new Set(d.map(q=>q.name)),y=g.filter(q=>x.has(q.name));let S;if(y.length===0&&d.length===1)S="append-new";else{const q=y.length>0?[`Overwrite matching (${y.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],G=await e.ui.dialogs.choice(`Importing ${d.length} table${d.length===1?"":"s"} from "${r}".${y.length>0?`

${y.length} table${y.length===1?"":"s"} share a name with existing data.`:""}`,q,"JSON import");if(!G)return;G.startsWith("Overwrite matching")?S="overwrite-matching":G==="Replace entire workspace"?S="replace-workspace":S="append-new"}const U=2e3,N=d.reduce((q,G)=>q+(G.source?0:Math.min(G.rows.length,i.maxRows??1/0)),0);let F=null;if(N>=U){const{TopProgress:q}=await In(async()=>{const{TopProgress:G}=await Promise.resolve().then(()=>ql);return{TopProgress:G}},void 0);F=q.begin(`Importing ${r}…`)}try{if(S==="replace-workspace")for(const ee of g){const ie=e.store.rows(ee.id),V=await ie.find();await ie.bulkRemove(V.map(J=>J.id)),await e.store.tables.remove(ee.id)}const q=new Map(g.map(ee=>[ee.name,ee])),G=new Map;let he=0;for(const ee of d){const ie=ee.source,V=ee.origin??(!ie&&i.originUrl?{type:"json",url:i.originUrl}:void 0);let J;const ue=S==="overwrite-matching"?q.get(ee.name):void 0;if(ue){if(J=ue.id,!ue.source){const Ae=e.store.rows(J),$e=await Ae.find();await Ae.bulkRemove($e.map(m=>m.id))}await e.store.tables.patch(J,{columns:ee.columns,...ee.title?{title:ee.title}:{},...ee.windowGeometry?{windowGeometry:ee.windowGeometry}:{},...ee.sortColumn?{sortColumn:ee.sortColumn,sortAsc:ee.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},...ee.filters?{filters:ee.filters}:{},...ee.labelColumn?{labelColumn:ee.labelColumn}:{},...ee.info?{info:ee.info}:{},...ee.deletedColumns?{deletedColumns:ee.deletedColumns}:{},source:ie??void 0,origin:V??void 0,updatedAt:Date.now()})}else J=sa(),e.events.emit("import:before",{source:"json",tableId:J}),await e.store.tables.insert({id:J,workspaceId:n,name:ee.name,code:hd(ee.name),columns:ee.columns,view:"table",...ee.title?{title:ee.title}:{},...ee.windowGeometry?{windowGeometry:ee.windowGeometry}:{},...ee.sortColumn?{sortColumn:ee.sortColumn,sortAsc:ee.sortAsc??!0}:{},...ee.filters?{filters:ee.filters}:{},...ee.labelColumn?{labelColumn:ee.labelColumn}:{},...ee.info?{info:ee.info}:{},...ee.deletedColumns?{deletedColumns:ee.deletedColumns}:{},...ie?{source:ie}:{},...V?{origin:V}:{},updatedAt:Date.now()});G.set(ee.name,J);let we=0;if(!ie){const Ae=e.store.rows(J),m=(i.maxRows!=null?ee.rows.slice(0,i.maxRows):ee.rows).map(v=>({id:sa(),tableId:J,data:v,updatedAt:Date.now()}));await Ae.bulkInsert(m),we=m.length,he+=we,F?.fraction(N>0?he/N:1)}e.events.emit("import:after",{source:"json",tableId:J,rowCount:we})}await id(e,o,n,G,S==="replace-workspace")}finally{F?.done()}document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function id(e,t,r,i,n){if(!bt(t))return;const o=t,l=Array.isArray(o.viewTemplates)?o.viewTemplates:[],c=Array.isArray(o.viewInstances)?o.viewInstances:[];if(!(l.length===0&&c.length===0)){if(n){const d=(await e.store.viewInstances.find()).filter(g=>g.workspaceId===r);await e.store.viewInstances.bulkRemove(d.map(g=>g.id))}for(const d of l)!bt(d)||typeof d.id!="string"||await e.store.viewTemplates.upsert({...d,workspaceId:r});for(const d of c){if(!bt(d)||typeof d.id!="string")continue;const g=(d.tableName?i.get(d.tableName):void 0)??d.tableId;g&&await e.store.viewInstances.upsert({...d,workspaceId:r,tableId:g})}}}function jr(e,t){if(bt(e)&&na(e))return ra(e);if(bt(e)&&Array.isArray(e.tables)){const r=e,i=[];for(const n of r.tables){if(od(n)){const o=n,l=bt(o.windowGeometry)?o.windowGeometry:void 0,c=typeof o.sortColumn=="string"?o.sortColumn:void 0,d=typeof o.sortAsc=="boolean"?o.sortAsc:void 0,g=typeof o.title=="string"?o.title:void 0,x=bt(o.filters)?o.filters:void 0,y=typeof o.labelColumn=="string"?o.labelColumn:void 0,S=bt(o.info)?o.info:void 0,U=Array.isArray(o.deletedColumns)?o.deletedColumns.filter(q=>typeof q=="string"):void 0,N=bt(o.source)&&typeof o.source.type=="string"?o.source:void 0,F=bt(o.origin)&&typeof o.origin.type=="string"&&typeof o.origin.url=="string"?o.origin:void 0;i.push({name:String(n.name),columns:n.columns.map(ad),rows:Array.isArray(n.rows)?n.rows.filter(bt):[],...g?{title:g}:{},...l?{windowGeometry:l}:{},...c?{sortColumn:c,sortAsc:d??!0}:{},...x?{filters:x}:{},...y?{labelColumn:y}:{},...S?{info:S}:{},...U?{deletedColumns:U}:{},...N?{source:N}:{},...F?{origin:F}:{}});continue}bt(n)&&na(n)&&i.push(...ra(n))}return i}if(Array.isArray(e)){const r=e.filter(bt);return r.length===0?[]:[{name:t,...ia(r)}]}return bt(e)?[{name:t,...ia([e])}]:[]}function na(e){for(const[t,r]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!bt(r))continue;const i=r;if(Array.isArray(i.dataArray)&&Array.isArray(i.columns))return!0}return!1}function ra(e){const t=[];for(const[r,i]of Object.entries(e)){if(!/\.table\.json$/.test(r)||!bt(i))continue;const n=i;if(!Array.isArray(n.dataArray)||!Array.isArray(n.columns))continue;const o=r.replace(/\.table\.json$/,""),l=n.columns.map(x=>sd(x)),c=l.map(x=>x.field),d=n.dataArray.filter(x=>Array.isArray(x)).map(x=>{const y={};for(let S=0;S<c.length;S++)y[c[S]]=x[S];return y}),g={name:o,columns:l,rows:d};if(n.elementRect&&typeof n.elementRect.x=="number"&&typeof n.elementRect.y=="number"){const x=n.elementRect;g.windowGeometry={x:x.x,y:x.y,w:x.width??600,h:x.height??400,z:x.zIndex??100,minimized:!!x.minimized,maximized:!!x.maximized}}typeof n.sortColumn=="number"&&n.sortColumn>=0&&n.sortColumn<c.length&&(g.sortColumn=c[n.sortColumn],g.sortAsc=(n.sortDirection??"asc")!=="desc"),t.push(g)}return t}function sd(e){const t=String(e.field??"col"),r=String(e.name??t),i=typeof e.type=="string"?e.type:"string",n={field:t,label:r,type:i};return e.isUnique&&(n.unique=!0),e.isNotNull&&(n.notnull=!0),n}function od(e){return bt(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function ad(e){if(!bt(e))return{field:"col",label:"Col",type:"string"};const t=e,r=String(t.field??"col");let i=typeof t.type=="string"?t.type:"string",n=typeof t.renderer=="string"?t.renderer:void 0;(i==="color"||i==="image")&&(n=n??i,i="string");const o={field:r,label:String(t.label??r),type:i};return n&&(o.renderer=n),typeof t.script=="string"&&(o.script=t.script),o}function ia(e){const t=new Set;for(const n of e)for(const o of Object.keys(n))t.add(o);return{columns:Array.from(t).map(n=>({field:n,label:n,type:ld(e.map(o=>o[n]))})),rows:e}}function ld(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&cd(r))?"date":"string"}function cd(e){if(/^\d+$/.test(e))return!1;const t=new Date(e);return!Number.isNaN(t.getTime())}function bt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function ud(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function dd(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}function hd(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function sa(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const fd=Object.freeze(Object.defineProperty({__proto__:null,importJsonText:$i,init:td,meta:ed,parsedToTables:jr},Symbol.toStringTag,{value:"Module"}));var pd=Object.defineProperty,md=Object.getOwnPropertyDescriptor,zr=(e,t,r,i)=>{for(var n=i>1?void 0:i?md(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&pd(t,r,n),n};const gd="https://latest.datasette.io/ephemeral";let Ht=class extends Ne{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=async e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const r=this.token.trim();if(this.onConnect){this.status="Checking…",this.statusKind="busy";try{await this.onConnect(t,r)}catch(i){this.status=i?.message??String(i),this.statusKind="err";return}}this.finish({url:t,token:r})}}connectedCallback(){super.connectedCallback(),Ht.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ht.instance===this&&(Ht.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Gt(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,this.onConnect=e.onConnect,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return I`
      <dialog @cancel=${this.onCancel} @keydown=${Vt}>
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
                placeholder="e.g. ${gd}"
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
    `}};Ht.instance=null;Ht.styles=[Kt,He`
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
    `];zr([W()],Ht.prototype,"url",2);zr([W()],Ht.prototype,"token",2);zr([W()],Ht.prototype,"status",2);zr([W()],Ht.prototype,"statusKind",2);Ht=zr([tt("datasette-connect-dialog")],Ht);function fl(e,t,r=[]){const i=new Set(e.map(c=>c.field)),n=new Set(r),o=[...e],l=[];for(const c of t)i.has(c.field)||n.has(c.field)||(o.push(c),l.push(c.field),i.add(c.field));return{columns:o,newFields:l}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pl=Symbol.for(""),bd=e=>{if(e?.r===pl)return e?._$litStatic$},yd=e=>({_$litStatic$:e,r:pl}),oa=new Map,wd=e=>(t,...r)=>{const i=r.length;let n,o;const l=[],c=[];let d,g=0,x=!1;for(;g<i;){for(d=t[g];g<i&&(o=r[g],(n=bd(o))!==void 0);)d+=n+t[++g],x=!0;g!==i&&c.push(o),l.push(d),g++}if(g===i&&l.push(t[i]),x){const y=l.join("$$lit$$");(t=oa.get(y))===void 0&&(l.raw=l,oa.set(y,t=l)),r=c}return e(t,...r)},vd=wd(I);var xd=Object.defineProperty,$d=Object.getOwnPropertyDescriptor,cr=(e,t,r,i)=>{for(var n=i>1?void 0:i?$d(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&xd(t,r,n),n};let zt=class extends Ne{constructor(){super(...arguments),this.values=[],this.blanks=0,this.current="",this.search="",this.hide=!1,this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,r,i=0){this.values=t,this.blanks=i;let n=r??"",o=!1;return n.startsWith("!")&&(o=!0,n=n.slice(1).trim()),this.hide=o,this.current=n,this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(l=>{this.resolveFn=l,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}pick(e){this.close((this.hide?"!":"")+e)}close(e){document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),zt.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),zt.instance===this&&(zt.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(n=>n.value.toLowerCase().includes(e)),r=this.blanks>0&&"(blanks)".includes(e),i=this.current.toUpperCase()==="NULL";return I`
      <header>
        <span class="mi sm">search</span>
        <input
          type="text"
          autofocus
          placeholder="Filter values…"
          .value=${this.search}
          @input=${n=>this.search=n.target.value}
        />
        <button
          class="icon"
          title="Close"
          @click=${()=>this.close(null)}
        >
          <span class="mi sm">close</span>
        </button>
      </header>
      <label class="hide-row" title="Show rows that do NOT match the value you pick">
        <input
          type="checkbox"
          .checked=${this.hide}
          @change=${n=>this.hide=n.target.checked}
        />
        hide
      </label>
      ${t.length===0&&!r?I`<div class="empty">No matching values.</div>`:I`<ul>
            ${r?I`
                  <li
                    class=${`blanks${i?" selected":""}`}
                    @click=${()=>this.pick("NULL")}
                  >
                    <span class="label"><em>(Blanks)</em></span>
                    <span class="count">${this.blanks}</span>
                  </li>
                `:""}
            ${t.slice(0,500).map(n=>I`
                <li
                  class=${n.value===this.current?"selected":""}
                  @click=${()=>this.pick(n.value)}
                >
                  <span class="label">${n.value}</span>
                  <span class="count">${n.count}</span>
                </li>
              `)}
          </ul>`}
      ${this.values.length>500?I`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      <div class="actions">
        <button class="text" @click=${()=>this.close({clear:!0})}>Clear filter</button>
        <span style="color:#6b7280">${t.length} value${t.length===1?"":"s"}</span>
      </div>
    `}};zt.instance=null;zt.styles=[Yt,He`
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
      li.blanks .label {
        color: #6b7280;
      }
      .hide-row {
        display: flex;
        align-items: center;
        gap: 0.35rem;
        padding: 0.3rem 0.55rem;
        border-bottom: 1px solid #e5e7eb;
        color: #374151;
        cursor: pointer;
        user-select: none;
      }
      .hide-row input {
        margin: 0;
        cursor: pointer;
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
    `];cr([Mt({type:Array})],zt.prototype,"values",2);cr([Mt({type:Number})],zt.prototype,"blanks",2);cr([Mt({type:String})],zt.prototype,"current",2);cr([W()],zt.prototype,"search",2);cr([W()],zt.prototype,"hide",2);zt=cr([tt("filter-popover")],zt);var kd=Object.defineProperty,Cd=Object.getOwnPropertyDescriptor,nn=(e,t,r,i)=>{for(var n=i>1?void 0:i?Cd(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&kd(t,r,n),n};let Lt=class extends Ne{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const r=t[this.highlightIdx];r!==void 0?(e.preventDefault(),this.onPick(r)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const r=[];for(const i of this.options)if(i.toLowerCase().includes(t)&&(r.push(i),r.length>=500))break;return r}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return I`
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
        ${this.value?I`<button
              type="button"
              class="clear"
              title="Clear filter"
              tabindex="-1"
              @mousedown=${r=>r.preventDefault()}
              @click=${this.onClear}
            >
              ×
            </button>`:be}
      </div>
      ${this.open?I`<ul class="dropdown" style=${t}>
            ${e.length===0?I`<li class="empty">No matching values.</li>`:e.map((r,i)=>I`
                    <li
                      class=${i===this.highlightIdx?"highlighted":""}
                      @mousedown=${n=>n.preventDefault()}
                      @click=${()=>this.onPick(r)}
                    >
                      ${r}
                    </li>
                  `)}
          </ul>`:be}
    `}};Lt.styles=He`
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
  `;nn([Mt({type:String})],Lt.prototype,"value",2);nn([Mt({type:Array})],Lt.prototype,"options",2);nn([Mt({type:String})],Lt.prototype,"placeholder",2);nn([W()],Lt.prototype,"open",2);nn([W()],Lt.prototype,"highlightIdx",2);nn([W()],Lt.prototype,"dropTop",2);nn([W()],Lt.prototype,"dropLeft",2);nn([W()],Lt.prototype,"dropMinWidth",2);nn([W()],Lt.prototype,"editing",2);nn([dn("input")],Lt.prototype,"inputEl",2);Lt=nn([tt("filter-combobox")],Lt);function Ed(e){const t=e.trim(),r=t.split(/\s+/).filter(Boolean);if(!r.some(c=>c==="AND"||c==="OR"))return{kind:"plain",phrase:t.toLowerCase(),words:r.map(c=>c.toLowerCase())};const n=[];let o=[];for(const c of r)c==="OR"?(n.push(o),o=[]):c==="AND"||o.push(c.toLowerCase());n.push(o);const l=n.filter(c=>c.length>0);return l.length===0?{kind:"plain",phrase:t.toLowerCase(),words:[]}:{kind:"boolean",groups:l}}function ki(e,t,r){const i=Ed(t);if(i.kind==="boolean")return e.filter(d=>i.groups.some(g=>g.every(x=>r(d,x))));const{phrase:n,words:o}=i;if(o.length<=1)return n===""?e:e.filter(d=>r(d,n));const l=e.filter(d=>r(d,n));if(l.length>0)return l;const c=e.filter(d=>o.every(g=>r(d,g)));return c.length>0?c:e.filter(d=>o.some(g=>r(d,g)))}function Sd(e){return e==null||String(e).trim()===""}function Ps(e,t){const r=t.trim();if(r==="")return!0;let i=!1,n=r;if(n.startsWith("!")&&(i=!0,n=n.slice(1).trim()),n.toUpperCase()==="NULL"||n===""){const l=Sd(e);return i?!l:l}const o=String(e??"").toLowerCase().includes(n.toLowerCase());return i?!o:o}const Ci="easydb:visible-count";function ml(e,t,r){e&&document.dispatchEvent(new CustomEvent(Ci,{detail:{key:e,count:t,total:r}}))}function gl(e,t){return e<0||t<0?"":e===t?` (${t})`:` (${e}/${t})`}var _d=Object.defineProperty,Td=Object.getOwnPropertyDescriptor,ut=(e,t,r,i)=>{for(var n=i>1?void 0:i?Td(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&_d(t,r,n),n};function aa(e,t){return Object.values(e.data).some(r=>r!=null&&String(r).toLowerCase().includes(t))}const Ad=200;let rt=class extends Ne{constructor(){super(...arguments),this.tableId="",this.viewInstanceId="",this.columns=[],this.rows=[],this.sortColumn=null,this.sortDir=null,this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.viewInst=null,this.tableColumns=[],this.renderedCount=0,this.lastEmittedCount=-1,this.lastEmittedTotal=-1,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;(t.tableId===this.tableId||this.viewMode&&t.tableId===this.viewInstanceId)&&(this.localQuery=t.query??"")},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}get viewMode(){return!!this.viewInstanceId}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.()}async updated(e){(e.has("tableId")||e.has("viewInstanceId"))&&this.tableId&&(this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.markEmptyCells(),this.emitCount()}emitCount(){const e=this.viewMode?this.viewInstanceId:this.tableId;if(!e)return;const t=this.renderedCount,r=this.rows.length;t===this.lastEmittedCount&&r===this.lastEmittedTotal||(this.lastEmittedCount=t,this.lastEmittedTotal=r,ml(e,t,r))}markEmptyCells(){const e=this.shadowRoot?.querySelectorAll("tbody tr:not(.spacer) > td");if(e)for(const t of e)t.className.startsWith("t-")&&t.classList.toggle("is-null",Pd(t))}async bind(){if(!this.tableId)return;const e=await ge(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.viewMode?(this.tableColumns=t.columns,this.viewInst=await e.store.viewInstances.findOne(this.viewInstanceId)??null,this.applyView(),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const o=n.find(l=>l.id===this.tableId);o&&(this.tableColumns=o.columns,this.applyView())}),this.viewSubUnsub?.(),this.viewSubUnsub=e.store.viewInstances.subscribe(n=>{const o=n.find(l=>l.id===this.viewInstanceId);o&&(this.viewInst=o,this.applyView())})):(this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const o=n.find(l=>l.id===this.tableId);o&&this.applyTable(o)})),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const r=e.store.rows(this.tableId);this.unsubscribe=r.subscribe(n=>this.rows=n);const i=window.setTimeout(()=>this.loading=!0,Ad);try{this.rows=await r.find()}catch(n){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${n?.message??String(n)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(i),this.loading=!1}}applyTable(e){this.columns=e.columns,this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}applyView(){const e=this.viewInst;if(!e)return;const t=new Map(this.tableColumns.map(i=>[i.field,i])),r=e.columnWidths??{};this.columns=e.visibleColumns.map(i=>t.get(i)).filter(i=>!!i).map(i=>{const n=r[i.field];return typeof n=="number"?{...i,width:n}:i}),this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}async setCell(e,t,r){const i=await ge();await this.commitCell(i,e,t,r)}async commitCell(e,t,r,i){const n=this.columns.find(o=>o.field===r);if(n){const o=Id(n,i,this.rows,t.id);if(o){await e.api.ui.dialogs.alert(o,`Cannot save ${n.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[r]:i},updatedAt:Date.now()})}catch(o){await e.api.ui.dialogs.alert(o?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}cancelCellEdit(e,t){if(e.key!=="Escape")return;e.stopPropagation();const r=e.target;typeof t=="boolean"?r.checked=t:r.value=t,r.blur()}renderCell(e,t){const r=e.data[t.field],i=t.renderer,n=i?this.cellRenderers?.get(i):void 0;if(n){const o=yd(n);return vd`<${o}
        .value=${r??""}
        .column=${t}
        .row=${e.data}
        @change=${l=>this.setCell(e,t.field,l.detail.value)}
      ></${o}>`}switch(t.type){case"boolean":{const o=r===!0||r==="true"||r===1||r==="1";return I`<input
          type="checkbox"
          .checked=${o}
          @keydown=${l=>this.cancelCellEdit(l,o)}
          @change=${l=>this.setCell(e,t.field,l.target.checked)}
        />`}case"date":return I`<input
          type="date"
          .value=${la(r)}
          @keydown=${o=>this.cancelCellEdit(o,la(r))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"datetime":return I`<input
          type="datetime-local"
          .value=${ca(r)}
          @keydown=${o=>this.cancelCellEdit(o,ca(r))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"number":return I`<input
          type="number"
          .value=${r==null?"":String(r)}
          @keydown=${o=>this.cancelCellEdit(o,r==null?"":String(r))}
          @change=${o=>{const l=o.target.value;this.setCell(e,t.field,l===""?null:Number(l))}}
        />`;default:return I`<input
          type="text"
          .value=${String(r??"")}
          @keydown=${o=>this.cancelCellEdit(o,String(r??""))}
          @change=${o=>this.setCell(e,t.field,o.target.value)}
        />`}}async deleteRow(e){const t=await ge();try{await t.store.rows(this.tableId).remove(e)}catch(r){await t.api.ui.dialogs.alert(r?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e){let t;this.sortColumn!==e?t="asc":this.sortDir==="asc"?t="desc":this.sortDir==="desc"?t=null:t="asc",this.sortColumn=t?e:null,this.sortDir=t;const r=await ge(),i=t?{sortColumn:e,sortAsc:t==="asc",updatedAt:Date.now()}:{sortColumn:void 0,sortAsc:void 0,updatedAt:Date.now()};this.viewMode?await r.store.viewInstances.patch(this.viewInstanceId,i):await r.store.tables.patch(this.tableId,i)}filteredRows(){const e=Object.entries(this.filters).filter(([,n])=>n&&n.trim().length>0),t=this.globalQuery.trim(),r=this.localQuery.trim();if(e.length===0&&t.length===0&&r.length===0)return this.rows;let i=this.rows;return e.length>0&&(i=i.filter(n=>e.every(([o,l])=>Ps(n.data[o],l)))),r&&(i=ki(i,r,aa)),t&&(i=ki(i,t,aa)),i}sortedRows(){const e=this.filteredRows();if(!this.sortColumn||!this.sortDir)return e;const t=this.sortColumn,i=this.columns.find(l=>l.field===t)?.type??"string",n=this.sortDir==="asc"?1:-1,o=[...e];return o.sort((l,c)=>{const d=l.data[t],g=c.data[t],x=U=>U==null?0:U===""?1:2,y=x(d),S=x(g);return y!==2||S!==2?(y-S)*n:Dd(d,g,i)*n}),o}async openFilterPicker(e,t){e.stopPropagation();const r=e.currentTarget,i=zt.instance;if(!i)return;const n=new Map;let o=0;for(const d of this.rowsFacetedFor(t)){const g=d.data[t];if(g==null||String(g).trim()===""){o++;continue}const x=String(g);n.set(x,(n.get(x)??0)+1)}const l=[...n.entries()].map(([d,g])=>({value:d,count:g})).sort((d,g)=>g.count-d.count||d.value.localeCompare(g.value)),c=await i.open(r.getBoundingClientRect(),l,this.filters[t]??"",o);c!==null&&(typeof c=="object"&&"clear"in c?this.onFilterInput(t,""):typeof c=="string"&&this.onFilterInput(t,c))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>{this.filterSaveTimer=null,this.saveFilters()},250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=Object.entries(this.filters).filter(([r,i])=>i&&i.trim().length>0&&r!==e);return t.length===0?this.rows:this.rows.filter(r=>t.every(([i,n])=>Ps(r.data[i],n)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const r=50,i=500;for(const n of this.visibleColumns){let o=!0;for(const c of t){const d=c.data[n.field];if(d==null)continue;if((typeof d=="string"?d:String(d)).length>=r){o=!1;break}}if(!o)continue;const l=new Set;for(const c of this.rowsFacetedFor(n.field)){const d=c.data[n.field];if(d==null||d==="")continue;const g=typeof d=="string"?d:String(d);if(!(g.length>=r)&&(l.add(g),l.size>=i))break}e.set(n.field,[...l].sort())}return e}freezeColumnWidths(){const e=this.renderRoot.querySelector("thead tr");if(!e)return;const t=Array.from(e.querySelectorAll(":scope > th")),r=this.visibleColumns,i=new Map;r.forEach((n,o)=>{if(n.width!=null)return;const l=t[o];l&&i.set(n.field,Math.round(l.getBoundingClientRect().width))}),i.size!==0&&(this.columns=this.columns.map(n=>i.has(n.field)?{...n,width:i.get(n.field)}:n))}onResizeStart(e,t,r){e.preventDefault(),e.stopPropagation();const i=r.offsetWidth;this.freezeColumnWidths(),this.resizing={field:t,startX:e.clientX,startW:i};const n=l=>{if(!this.resizing)return;const c=l.clientX-this.resizing.startX,d=Math.max(40,this.resizing.startW+c);this.columns=this.columns.map(g=>g.field===this.resizing.field?{...g,width:d}:g)},o=async()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",o);const l=this.resizing?.field;if(this.resizing=null,!l)return;const c=await ge();if(this.viewMode){const d={...this.viewInst?.columnWidths??{}};for(const g of this.columns)typeof g.width=="number"&&(d[g.field]=g.width);await c.store.viewInstances.patch(this.viewInstanceId,{columnWidths:d,updatedAt:Date.now()})}else await c.store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",n),window.addEventListener("pointerup",o)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,r){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientX<i.left+i.width/2;this.dropTargetField=t,this.dropEdge=n?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const r=this.dragSourceField,i=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!r||r===t||!i)return;const n=[...this.columns],o=n.findIndex(g=>g.field===r);if(o<0)return;const[l]=n.splice(o,1);let c=n.findIndex(g=>g.field===t);if(c<0){n.splice(o,0,l);return}i==="after"&&(c+=1),n.splice(c,0,l);const d=await ge();this.viewMode?await d.store.viewInstances.patch(this.viewInstanceId,{visibleColumns:n.map(g=>g.field),updatedAt:Date.now()}):await d.store.tables.patch(this.tableId,{columns:n,updatedAt:Date.now()})}async saveFilters(){const e=await ge(),t={};for(const[i,n]of Object.entries(this.filters))n&&n.trim().length>0&&(t[i]=n);if(this.viewMode){await e.store.viewInstances.patch(this.viewInstanceId,{filters:t,updatedAt:Date.now()});return}const r=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:r,updatedAt:Date.now()})}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,r=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,i=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),n=Math.min(e.length,i+r);return{slice:e.slice(i,n),topPad:i*t,bottomPad:(e.length-n)*t}}render(){const e=this.sortedRows();this.renderedCount=e.length;const t=this.visibleColumns,{slice:r,topPad:i,bottomPad:n}=this.virtualSlice(e),o=this.computeFilterSuggestions(),l=this.externalLoading?this.externalProgress:null;return I`
      ${this.loading||this.externalLoading?I`<div
            class="load-bar"
            role="progressbar"
            aria-label="Loading rows"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow=${l!=null?Math.round(l*100):be}
          >
            <div
              class="load-bar-fill ${l!=null?"determinate":""}"
              style=${l!=null?`width:${Math.max(2,Math.round(l*100))}%`:be}
            ></div>
          </div>`:be}
      <table style=${t.some(c=>c.width!=null)?"table-layout: fixed":be}>
        <colgroup>
          ${t.map(c=>I`<col style=${c.width!=null?`width: ${c.width}px`:""} />`)}
          <col style="width:2rem" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(c=>{const d=c.sortable!==!1,g=this.sortColumn===c.field&&this.sortDir,x=d?g==="asc"?"▲":g==="desc"?"▼":"⇅":"",y=`t-${c.type}`,S=this.dragSourceField===c.field,U=this.dropTargetField===c.field,N=U&&this.dropEdge==="before"?" drop-before":U&&this.dropEdge==="after"?" drop-after":"",F=(c.description?`${c.description}
`:"")+(c.units?`Units: ${c.units}
`:"")+`${c.field} — ${d?"click to sort, ":"not sortable · "}drag to reorder`;return I`
                <th
                  class=${`${y}${g?" sorted":""}${S?" drag-source":""}${N}${d?"":" no-sort"}`}
                  title=${F}
                  @click=${()=>d&&this.toggleSort(c.field)}
                  @dragover=${q=>this.onColDragOver(q,c.field,q.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(c.field)}
                  @drop=${q=>this.onColDrop(q,c.field)}
                >
                  <div class="col-head">
                    <span
                      class="col-grip mi sm"
                      title="Drag to reorder column"
                      draggable="true"
                      @click=${q=>q.stopPropagation()}
                      @dragstart=${q=>this.onColDragStart(q,c.field)}
                      @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                      >drag_indicator</span
                    ><span class="col-label"
                      >${c.label}${c.units?I`<span class="col-units"> (${c.units})</span>`:""}</span
                    ><span class="sort-icon">${x}</span>
                    <button
                      class=${`funnel${this.filters[c.field]?" active":""}`}
                      title="Filter by value"
                      @click=${q=>this.openFilterPicker(q,c.field)}
                    >
                      <span class="mi sm">filter_list</span>
                    </button>
                  </div>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${q=>q.stopPropagation()}
                    @pointerdown=${q=>this.onResizeStart(q,c.field,q.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:2rem"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(c=>{const d=o.get(c.field)??[];return I`
                <th>
                  <filter-combobox
                    .value=${this.filters[c.field]??""}
                    .options=${d}
                    placeholder="filter…"
                    title="Filter: text = contains, !text = does not contain, NULL = empty, !NULL = has a value"
                    @filter-change=${g=>this.onFilterInput(c.field,g.detail.value)}
                  ></filter-combobox>
                </th>
              `})}
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${i>0?I`<tr class="spacer" style=${`height:${i}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${r.map(c=>I`
              <tr>
                ${t.map(d=>I`<td class=${`t-${d.type}${d.renderer?` r-${d.renderer}`:""}`}>
                      ${this.renderCell(c,d)}
                    </td>`)}
                <td>
                  <button class="danger" title="Delete row" @click=${()=>this.deleteRow(c.id)}>
                    <span class="mi sm">delete</span>
                  </button>
                </td>
              </tr>
            `)}
          ${n>0?I`<tr class="spacer" style=${`height:${n}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
        </tbody>
      </table>
    `}};rt.styles=[Yt,He`
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
    `];ut([Mt({type:String})],rt.prototype,"tableId",2);ut([Mt({type:String})],rt.prototype,"viewInstanceId",2);ut([W()],rt.prototype,"columns",2);ut([W()],rt.prototype,"rows",2);ut([W()],rt.prototype,"sortColumn",2);ut([W()],rt.prototype,"sortDir",2);ut([W()],rt.prototype,"filters",2);ut([W()],rt.prototype,"globalQuery",2);ut([W()],rt.prototype,"localQuery",2);ut([W()],rt.prototype,"dragSourceField",2);ut([W()],rt.prototype,"dropTargetField",2);ut([W()],rt.prototype,"dropEdge",2);ut([W()],rt.prototype,"resizing",2);ut([W()],rt.prototype,"cellRenderers",2);ut([W()],rt.prototype,"scrollY",2);ut([W()],rt.prototype,"viewportHeight",2);ut([W()],rt.prototype,"loading",2);ut([W()],rt.prototype,"externalLoading",2);ut([W()],rt.prototype,"externalProgress",2);rt=ut([tt("data-table")],rt);function Pd(e){if((e.textContent??"").trim()!==""||e.querySelector("img"))return!1;const t=e.querySelectorAll("input");for(const r of Array.from(t))if(r.type==="checkbox"||r.value!=="")return!1;return!0}function Id(e,t,r,i){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&r.find(o=>o.id!==i&&o.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function la(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function ca(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}function Dd(e,t,r){switch(r){case"number":{const i=Number(e),n=Number(t);return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}case"boolean":return(e?1:0)-(t?1:0);case"date":{const i=new Date(String(e)).getTime(),n=new Date(String(t)).getTime();return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function cn(e,t,r){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:r}}))}class Wt extends Error{constructor(t,r){const i=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(i),this.name="DatasetteError",this.status=r??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function wn(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const r=t.pathname.split("/").filter(Boolean),i={};for(const[c,d]of t.searchParams)i[c]=d;let n,o=null,l=null;if(r.length>=2){l=decodeURIComponent(r[r.length-1]),o=decodeURIComponent(r[r.length-2]);const c=r.slice(0,r.length-2).join("/");n=t.origin+(c?"/"+c:"")}else r.length===1&&(o=decodeURIComponent(r[0])),n=t.origin;return{base:n,db:o,table:l,query:i}}function sr(e,t={}){const r=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[i,n]of Object.entries({...e.query,...t}))n!=null&&r.searchParams.set(i,String(n));return r.toString()}function Rd(e){const t=e?.next_url??null,r=e?.next,i=r!=null&&r!==!1?String(r):null,n=Array.isArray(e?.rows)?e.rows:[],o=Array.isArray(e?.columns)?e.columns:null;return{rows:n.map(c=>Array.isArray(c)&&o?Object.fromEntries(o.map((d,g)=>[d,c[g]])):c),nextUrl:t,nextToken:i,hasMore:t!=null||i!=null,truncated:e?.truncated===!0}}function Od(e,t=""){const r=String(e||"").toUpperCase();return r.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":r.includes("REAL")||r.includes("FLOA")||r.includes("DOUB")||r.includes("NUM")||r.includes("DEC")?"number":r.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function ua(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],r=Array.isArray(e?.columns)?e.columns.slice():[],i={},n=e?.column_details;if(Array.isArray(n))for(const c of n)i[c.column??c.name]=c;else n&&typeof n=="object"&&Object.assign(i,n);for(const c of r)c in i||(i[c]={});const l=(r.length?r:Object.keys(i)).map(c=>{const d=i[c]||{},g=d.is_pk===!0||d.is_pk===1||t.includes(c),x={field:c,label:bl(c),type:Od(d.sqlite_type??d.type,c)};return(d.notnull===!0||d.notnull===1||g)&&(x.notnull=!0),g&&(x.unique=!0),(d.hidden===!0||d.hidden===1)&&(x.hidden=!0),d.default!=null&&d.default!==""&&(x.default=d.default),x});if(t.length===0){const c=l.filter(d=>d.unique).map(d=>d.field);c.length&&t.push(...c)}return{columns:l,pks:t}}function bl(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function Ri(e){const t=[],r=new Set;for(const i of e)for(const n of Object.keys(i))r.has(n)||(r.add(n),t.push(n));return t.map(i=>({field:i,label:bl(i),type:jd(e.map(n=>n[i]))}))}function jd(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&zd(r))?"datetime":"string"}function zd(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function Fd(e){const t=new TextEncoder().encode(String(e));let r="";for(const i of t){const n=String.fromCharCode(i);/[A-Za-z0-9_-]/.test(n)?r+=n:r+="~"+i.toString(16).toUpperCase().padStart(2,"0")}return r}function Ld(e,t){return!t||t.length===0?null:t.map(r=>Fd(e[r])).join(",")}function Md(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],r=[];for(const i of t){if(typeof i=="string"){r.push(i);continue}if(i&&typeof i=="object"&&typeof i.name=="string"){if(i.name==="_memory")continue;r.push(typeof i.route=="string"&&i.route?i.route:i.name)}}return r}function Bd(e,t){const r=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],i=[];for(const n of r){if(typeof n=="string"){i.push({db:t,table:n,count:null,hidden:!1,pks:[]});continue}n&&typeof n=="object"&&typeof n.name=="string"&&i.push({db:t,table:n.name,count:typeof n.count=="number"?n.count:null,hidden:n.hidden===!0,pks:Array.isArray(n.primary_keys)?n.primary_keys:[]})}return i}async function Dn(e,t){let r;try{r=await e(t)}catch(n){const o=n?.message||"network error";throw new Wt({error:`Couldn't reach ${t} (${o}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(r&&r.ok===!1){let n=null;try{n=await r.json()}catch{}throw new Wt(n&&typeof n=="object"?n:{error:`HTTP ${r.status} for ${t}`},r.status)}const i=await r.json();if(i&&i.ok===!1)throw new Wt(i,r.status);return i}async function yl(e,t){return Md(await Dn(e,`${t}/-/databases.json`))}async function da(e,t,r){return Bd(await Dn(e,`${t}/${encodeURIComponent(r)}.json`),r)}async function Oi(e,t){const r=sr(t,{_extra:"column_details"}),i=await Dn(e,r);let{columns:n,pks:o}=ua(i),l=!!i&&i.column_details!=null,c=i?.count??null,d=i;if(n.length===0){const g=sr(t,{_extra:"columns"}),x=await Dn(e,g);({columns:n,pks:o}=ua(x)),l=!!x&&x.column_details!=null,c=x?.count??c,d=x}return{columns:n,pks:o,count:c,typed:l,raw:d}}async function Is(e,t){if(!t.db||!t.table)throw new Error("probeSingleTable: URL must name a database and a table");const r=await Oi(e,t);return{db:t.db,table:t.table,count:r.count,hidden:!1,pks:r.pks}}function Nd(e,t,r){const i=e&&typeof e=="object"?e:{},n=t&&r&&i.databases?.[t]?.tables?.[r]||t&&r&&i.databases?.[t]?.tables?.[r.toLowerCase()]||{},o=t&&i.databases?.[t]||{},l=N=>n[N]??o[N]??i[N],c={columns:{},units:{}};typeof n.sort=="string"&&(c.sort=n.sort),typeof n.sort_desc=="string"&&(c.sortDesc=n.sort_desc),typeof n.size=="number"&&(c.size=n.size),Array.isArray(n.sortable_columns)&&(c.sortableColumns=n.sortable_columns.slice()),typeof n.label_column=="string"&&(c.labelColumn=n.label_column),n.hidden===!0&&(c.hidden=!0),typeof n.description=="string"&&(c.description=n.description),typeof n.description_html=="string"&&(c.descriptionHtml=n.description_html);const d=l("source"),g=l("source_url"),x=l("license"),y=l("license_url"),S=l("about"),U=l("about_url");if(typeof d=="string"&&(c.source=d),typeof g=="string"&&(c.sourceUrl=g),typeof x=="string"&&(c.license=x),typeof y=="string"&&(c.licenseUrl=y),typeof S=="string"&&(c.about=S),typeof U=="string"&&(c.aboutUrl=U),n.columns&&typeof n.columns=="object")for(const[N,F]of Object.entries(n.columns))typeof F=="string"&&(c.columns[N]=F);if(n.units&&typeof n.units=="object")for(const[N,F]of Object.entries(n.units))typeof F=="string"&&(c.units[N]=F);return c}const ha=new Map;async function Ud(e,t){let r=ha.get(t);return r||(r=Dn(e,`${t}/-/metadata.json`).catch(()=>({})),ha.set(t,r)),r}async function Js(e,t){const r=await Ud(e,t.base);return Nd(r,t.db,t.table)}function qd(e){const t={};return e.description!=null&&(t.description=e.description),e.descriptionHtml!=null&&(t.descriptionHtml=e.descriptionHtml),e.source!=null&&(t.source=e.source),e.sourceUrl!=null&&(t.sourceUrl=e.sourceUrl),e.license!=null&&(t.license=e.license),e.licenseUrl!=null&&(t.licenseUrl=e.licenseUrl),e.about!=null&&(t.about=e.about),e.aboutUrl!=null&&(t.aboutUrl=e.aboutUrl),Object.keys(t).length>0?t:void 0}function Zs(e,t){const r=e.sortableColumns!=null?new Set(e.sortableColumns):null,i=t.map(c=>{const d=e.columns[c.field],g=e.units[c.field],x=r?r.has(c.field):void 0;return d==null&&g==null&&x===void 0?c:{...c,...d!=null?{description:d}:{},...g!=null?{units:g}:{},...x!==void 0?{sortable:x}:{}}}),n=new Set(t.map(c=>c.field)),o={};e.sort&&n.has(e.sort)?(o.sortColumn=e.sort,o.sortAsc=!0):e.sortDesc&&n.has(e.sortDesc)&&(o.sortColumn=e.sortDesc,o.sortAsc=!1);const l=qd(e);return l&&(o.info=l),e.labelColumn&&n.has(e.labelColumn)&&(o.labelColumn=e.labelColumn),{columns:i,patch:o}}function eo(e,t){if(t.length===0)return e;const r=new Map(Ri(t).map(i=>[i.field,i.type]));return e.map(i=>{if(i.type!=="string")return i;const n=r.get(i.field);return n&&n!=="string"?{...i,type:n}:i})}async function Fr(e,t,r={}){const i=r.maxRows??1e4,o={_size:r.pageSize??1e3,...r.extraParams||{}};let l=r.startUrl??sr(t,o);const c=[];let d=!1,g=!1,x=0,y,S;for(;l;){let U;try{U=await Dn(e,l)}catch(q){if(c.length===0&&!r.startUrl)throw q;y=q instanceof Wt&&q.status?`stopped after ${c.length} rows: HTTP ${q.status}`:`stopped after ${c.length} rows: ${q?.message??String(q)}`,g=!0,S=l;break}const N=Rd(U);c.push(...N.rows),d=d||N.truncated,x+=1,r.onProgress?.(c.length);const F=N.nextUrl!=null?N.nextUrl:N.nextToken!=null?sr(t,{_next:N.nextToken}):null;F&&c.length<i&&N.rows.length>0?l=F:(g=F!=null&&N.rows.length>0,g&&(S=F??void 0),l=null)}return{rows:c,truncated:d,hasMore:g,pages:x,error:y,nextUrl:S}}function Hd(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function wl(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function vl(e,t,r){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${r}`}async function ji(e,t,r,i){let n;try{n=await e(t,{method:"POST",headers:Hd(i),body:JSON.stringify(r)})}catch(l){throw new Wt({error:`Couldn't reach ${t} (${l?.message||"network error"}).`},0)}if(n&&n.ok===!1){let l=null;try{l=await n.json()}catch{}throw new Wt(l&&typeof l=="object"?l:{error:`HTTP ${n.status} for ${t}`},n.status)}const o=await n.json();if(o&&o.ok===!1)throw new Wt(o,n.status);return o}async function fa(e,t,r,i={}){const n=await ji(e,wl(t,"insert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function Wd(e,t,r,i,n={}){const o=await ji(e,vl(t,r,"update"),{update:i,return:!0},n.token);return o&&typeof o.row=="object"&&o.row?o.row:Array.isArray(o?.rows)&&o.rows[0]?o.rows[0]:null}async function pa(e,t,r,i={}){await ji(e,vl(t,r,"delete"),{},i.token)}async function Kd(e,t,r,i={}){const n=await ji(e,wl(t,"upsert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function Vd(e,t){const r=sr(t,{_extra:"primary_keys"}),i=await Dn(e,r);return Array.isArray(i?.primary_keys)?i.primary_keys:[]}async function xl(e,t){try{const r=await Dn(e,sr(t,{_extra:"count"}));return typeof r?.count=="number"?r.count:null}catch{return null}}async function $l(e,t,r={}){const i=r.token?{headers:{Authorization:`Bearer ${r.token}`}}:void 0;try{const n=await e(`${t}/-/versions.json`,i);if(n&&n.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${n.status}`};const o=await n.json(),l=o?.datasette?.version??o?.version??null;let c=null;try{c=(await(await e(`${t}/-/actor.json`,i)).json())?.actor??null}catch{}return{reachable:!0,version:l,actor:c,writable:!!(r.token&&c)}}catch(n){return{reachable:!1,version:null,actor:null,writable:!1,error:n?.message||"unreachable"}}}function or(e,t){return t?(r,i)=>{const n=(i??{}).headers??{};return e(r,{...i??{},headers:{...n,Authorization:`Bearer ${t}`}})}:e}class Gd extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function kl(e){return`datasette:token:${e}`}function Yd(e,t){for(const[r,i]of Object.entries(t))if(r!=="data"&&e[r]!==i)return!1;return!0}function Xd(e,t){const r=e.source,i=r?.config??{},n={base:i.base,db:i.db,table:i.table,query:{}},o=Array.isArray(i.pks)&&i.pks.length>0?i.pks:["rowid"],l=r?.writable===!0,c=i.maxRows??1e4,d=i.pollIntervalMs??0,g=(ie,V)=>t.backend.fetch(ie,V);async function x(){const V=(await t.settings.findOne(kl(i.base)))?.value;return typeof V=="string"&&V.length>0?V:void 0}const y=async(ie,V)=>or(g,await x())(ie,V);function S(ie){return{id:Ld(ie,o)??Qd(),tableId:e.id,data:ie,updatedAt:Date.now()}}function U(ie){if(!l)throw new Gd(ie)}function N(ie){const V={};for(const[J,ue]of Object.entries(ie))o.includes(J)||(V[J]=ue);return V}const F=new Set;let q=[],G=!1,he=null;function ee(){return he||(he=(async()=>{try{const{rows:ie}=await Fr(y,n,{maxRows:c});q=ie.map(S),G=!0;for(const V of F)V(q);return q}finally{he=null}})(),he)}return{async find(ie){const V=G?q:await ee();return!ie||Object.keys(ie).length===0?V:V.filter(J=>Yd(J,ie))},async findOne(ie){return(G?q:await ee()).find(J=>J.id===ie)??null},async insert(ie){U("insert");const[V]=await fa(y,n,[ie.data]),J=S(V??ie.data);return t.events.emit("row:created",{tableId:e.id,row:J}),ee(),J},async bulkInsert(ie){if(ie.length===0)return[];U("insert");const V=await fa(y,n,ie.map(ue=>ue.data)),J=(V.length?V:ie.map(ue=>ue.data)).map(S);return ee(),J},async upsert(ie){U("upsert");const[V]=await Kd(y,n,[ie.data]),J=S(V??ie.data);return ee(),J},async patch(ie,V){U("update");const J=V.data,ue=N(J??{}),we=await Wd(y,n,ie,ue),Ae=S(we??{...J??{}});return t.events.emit("row:updated",{tableId:e.id,row:Ae,prev:Ae}),ee(),Ae},async remove(ie){U("delete"),await pa(y,n,ie),t.events.emit("row:deleted",{tableId:e.id,rowId:ie}),ee()},async bulkRemove(ie){if(ie.length!==0){U("delete");for(const V of ie)await pa(y,n,V);ee()}},subscribe(ie){F.add(ie),G?ie(q):ee();let V=null;return d>0&&(V=setInterval(()=>void ee(),d)),()=>{F.delete(ie),V&&clearInterval(V)}},async refresh(){await ee()}}}function Qd(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Ei=e=>e.replace(/^https?:\/\//,""),Jd=e=>new Promise(t=>setTimeout(t,e));function Zd(){const e=globalThis.__eda_resumeDelayMs;return typeof e=="number"&&e>=0?e:6e4}function eh(e,t,r){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(r)}`}function to(e,t,r,i){const n={...e.info??{}};return!n.source&&!n.sourceUrl&&(n.source=`${Ei(t)}/${r}/${i}`,n.sourceUrl=eh(t,r,i)),{...e,info:n}}function no(e,t,r,i){if(!(!e||!t))return{nextUrl:t,loadedRows:r,...i!=null?{totalCount:i}:{}}}async function Cl(e,t,r,i={}){if(t.db&&t.table)return[await Is(e,t)];let n=[];if(t.db){if(n.push(...await da(e,t.base,t.db)),i.skipPicker)return n.filter(c=>!c.hidden)}else{const c=await yl(e,t.base);if(c.length===0)return[];let d=c;if(c.length>1){const g=await As(c.map(x=>({name:x,size:null})),{title:`${r} from Datasette`,message:`Choose databases on ${Ei(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!g)return null;d=g.map(x=>c[x])}for(const g of d)try{n.push(...await da(e,t.base,g))}catch{}}if(n.length===0)return[];const o=new Set(n.map(c=>c.db)).size>1,l=await As(n.map(c=>({name:o?`${c.db}/${c.table}`:c.table,size:c.count,detail:o?void 0:c.db,hidden:c.hidden})),{title:`${r} from Datasette`,message:`Choose tables to ${r.toLowerCase()} from ${Ei(t.base)}.`,confirmLabel:r});return l?l.map(c=>n[c]):null}const th='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',nh={id:"datasette-source",name:"Datasette",type:"source",version:"0.2.0",description:"Import tables from any online Datasette instance, database, or single table by URL",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-source.ts"},qt={maxImportRows:1e4,pageSize:1e3},rh="https://latest.datasette.io/fixtures/facetable";function ih(e){e.ui.registerHeaderButton({id:"datasette:connect",label:"Connect",icon:th,tooltip:"Connect a live, editable Datasette table",onClick:()=>ch(e)}),e.ui.registerTableButton({id:"datasette:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from its Datasette backend",visible:t=>t.source?.type==="datasette"||t.origin?.type==="datasette",onClick:(t,{tableId:r})=>fh(t,r)}),e.ui.registerTableButton({id:"datasette:resume",label:"Resume import",icon:"sync_problem",tooltip:"Import was interrupted — click to resume from where it stopped",danger:!0,visible:t=>t.origin?.type==="datasette"&&t.importResume!=null,onClick:(t,{tableId:r})=>mh(t,r)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:Xd}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:r}){const i=r||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${rh}`,"","Import from Datasette");i&&await ma(t,i)}}),e.ui.registerDropHandler(async(t,r)=>{const i=t.dataTransfer?.getData("text/plain")||"";return sh(i)?(t.preventDefault(),await ma(r,i),!0):!1})}async function ma(e,t){try{await ro(e,t)}catch(r){let i;r instanceof Wt?i=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:i=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(i,"Datasette import failed")}}function sh(e){try{const t=wn(e);return!!(t.db&&t.table)}catch{return!1}}function El(e,t){if(!e.has(t))return t;for(let r=2;;r++){const i=`${t} (${r})`;if(!e.has(i))return i}}async function ro(e,t,r={}){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=wn(t),l=await Cl(N=>e.backend.fetch(N),n,"Import",{skipPicker:r.skipTablePicker});if(l===null)return;if(l.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const c=[];let d=0;for(const N of l){const F={base:n.base,db:N.db,table:N.table,query:{}},q=await oh(e,i,F);if(q.skipped){d+=1;continue}c.push({tableId:q.tableId,ref:F,overwrite:q.overwrite,knownCount:N.count})}let g=0,x=0;const y=[],S=[],U=[];for(const N of c)try{const F=await ah(e,N.tableId,N.ref,N.overwrite,N.knownCount);g+=1,x+=F.rowCount,F.error?S.push(`${N.ref.db}/${N.ref.table} (${F.error})`):(F.hasMore||F.truncated)&&y.push(`${N.ref.db}/${N.ref.table}`)}catch(F){U.push(`${N.ref.db}/${N.ref.table}: ${F?.message??String(F)}`)}lh(e,{imported:g,skipped:d,totalRows:x,capped:y,partial:S,failed:U,requested:l.length})}async function oh(e,t,r){const i=`${r.db}/${r.table}`,n={type:"datasette",url:`${r.base}/${encodeURIComponent(r.db)}/${encodeURIComponent(r.table)}`},o=(await e.store.tables.find()).filter(g=>g.workspaceId===t),l=o.find(g=>g.name.toLowerCase()===i.toLowerCase());let c=i;if(l){const g=await e.ui.dialogs.choice(`A table named "${i}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!g||g==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(g==="Overwrite")return await e.store.tables.patch(l.id,{origin:n,updatedAt:Date.now()}),{tableId:l.id,overwrite:!0};c=El(new Set(o.map(x=>x.name)),i)}const d=Lr();return await e.store.tables.insert({id:d,workspaceId:t,name:c,code:_l(`${r.db}-${r.table}`),columns:[],view:"table",origin:n,updatedAt:Date.now()}),{tableId:d,overwrite:!1}}async function ah(e,t,r,i,n=null){const o=`${r.db}/${r.table}`,l=c=>e.backend.fetch(c);cn(t,!0);try{let c=[],d=n,g=!1;try{const b=await Oi(l,r);c=b.columns,d=d??b.count,g=b.typed}catch{}d==null&&(d=await xl(l,r));const x=d&&d>0?Math.min(d,qt.maxImportRows):0,y=[];let S=!1,U=!1,N=0,F,q,G;for(;;){const b=await Fr(l,r,{maxRows:Math.max(0,qt.maxImportRows-y.length),pageSize:qt.pageSize,...G?{startUrl:G}:{},onProgress:de=>{x>0&&cn(t,!0,Math.min(1,(y.length+de)/x))}});if(y.push(...b.rows),S=S||b.truncated,N+=b.pages,U=b.hasMore,F=b.error,q=b.nextUrl,!b.error||!b.nextUrl||y.length>=qt.maxImportRows||await e.ui.dialogs.choice(`Import of "${o}" paused after ${y.length.toLocaleString()} rows (${b.error}). Datasette may be rate-limiting a large import. Wait 60 seconds and resume from where it stopped, or cancel and keep the rows imported so far (you can resume later from the table's footer)?`,["Resume in 60s","Cancel"],"Import paused — rate limited?")!=="Resume in 60s")break;cn(t,!0),e.ui.dialogs.toast(`Resuming "${o}" in 60s…`,{kind:"info",title:"Import paused"}),await Jd(Zd()),G=b.nextUrl,F=void 0,q=void 0}let ee=c.length===0?Ri(y):g?c:eo(c,y),ie={};try{const b=await Js(l,r),C=Zs(b,ee);ee=C.columns,ie=C.patch}catch{}ie=to(ie,r.base,r.db,r.table);const V=await e.store.tables.findOne(t),J=V?.columns??[],ue=J.length===0,{columns:we}=fl(J,ee,V?.deletedColumns),Ae=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t});const $e=no(F,q,y.length,d),m=ue?{columns:we,...ie,importResume:$e,updatedAt:Ae}:{columns:we,...ie.info?{info:ie.info}:{},importResume:$e,updatedAt:Ae};await e.store.tables.patch(t,m);const v=e.store.rows(t);if(i){const b=await v.find();await v.bulkRemove(b.map(C=>C.id))}const E=y.map(b=>({id:Lr(),tableId:t,data:b,updatedAt:Ae}));return await v.bulkInsert(E),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:y.length}),{name:o,rowCount:y.length,hasMore:U,truncated:S,pages:N,count:d,error:F}}finally{cn(t,!1)}}function lh(e,t){const r=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,i=`${t.imported} table${t.imported===1?"":"s"}`,n=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${i} (${r});${n} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.partial.length>0){e.ui.dialogs.toast(`Imported ${i} (${r}).${n} ${t.partial.length} loaded partially (stopped early — the server may have rate-limited us): ${t.partial.join(", ")}. Use Refresh to fetch the rest.`,{kind:"warning",title:"Datasette import"});return}if(t.capped.length>0){e.ui.dialogs.toast(`Imported ${i} (${r}).${n} ${t.capped.length} capped at ${qt.maxImportRows} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${i} (${r}) from Datasette.${n}`,{kind:"success",title:"Datasette import"})}async function ch(e){const t=Ht.instance??uh(),r=(n,o)=>e.backend.fetch(n,o),i=await t.open({initialUrl:"https://datasette.io",async onTest(n,o){const l=wn(n),c=await $l(r,l.base,{token:o||void 0});if(l.db&&l.table){await Is(or(r,o||void 0),l);const g=c.version?` (Datasette ${c.version})`:"";return c.writable?`Reachable${g} — table found, signed in, read-write.`:`Reachable${g} — table found, read-only (no token / not authenticated).`}if(!c.reachable)return`Unreachable: ${c.error??"no response"}`;const d=c.version?` (Datasette ${c.version})`:"";return c.writable?`Reachable${d} — signed in, read-write.`:`Reachable${d} — read-only (no token / not authenticated).`},async onConnect(n,o){const l=wn(n);l.db&&l.table&&await Is(or(r,o||void 0),l)}});if(i)try{await Sl(e,i.url,i.token)}catch(n){const o=n instanceof Wt?n.message:n?.message??String(n);await e.ui.dialogs.alert(o,"Connect Datasette failed")}}function uh(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function Sl(e,t,r){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=wn(t),o=(y,S)=>e.backend.fetch(y,S),l=or(o,r||void 0),c=await $l(o,n.base,{token:r||void 0});r&&await e.store.settings.upsert({key:kl(n.base),value:r});let d;try{d=await Cl(l,n,"Connect")}catch(y){const S=y instanceof Wt?y.message:y?.message??String(y);throw new Error(`Couldn't read tables from ${Ei(n.base)}: ${S}`)}if(d===null)return;if(d.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const g=[];for(const y of d){const S=await dh(e,i,n.base,y,c.writable,r);S!==null&&g.push({tableId:S,c:y})}if(g.length===0)return;const x=c.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${g.length} live table${g.length===1?"":"s"} from Datasette (${x}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:y,c:S}of g)hh(e,y,n.base,S,r)}async function dh(e,t,r,i,n,o){const l=(await e.store.tables.find()).filter(S=>S.workspaceId===t);let c=`${i.db}/${i.table}`,d=l.find(S=>{const U=S.source?.config;return S.source?.type==="datasette"&&U?.base===r&&U?.db===i.db&&U?.table===i.table});if(!d){const S=l.find(U=>U.name.toLowerCase()===c.toLowerCase());if(S){const U=await e.ui.dialogs.choice(`A table named "${c}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Connect — table already exists");if(!U||U==="Skip")return null;U==="Overwrite"?d=S:c=El(new Set(l.map(N=>N.name)),c)}}let g=i.pks??[];if(g.length===0){const S=or((U,N)=>e.backend.fetch(U,N),o||void 0);try{g=await Vd(S,{base:r,db:i.db,table:i.table,query:{}})}catch{g=[]}}const x=d?.id??Lr(),y={...d??{},id:x,workspaceId:t,name:c,code:_l(`${i.db}-${i.table}`),columns:d?.columns??[],view:d?.view??"table",source:{type:"datasette",writable:n,config:{base:r,db:i.db,table:i.table,pks:g}},updatedAt:Date.now()};return d?await e.store.tables.upsert(y):await e.store.tables.insert(y),x}async function hh(e,t,r,i,n){const o={base:r,db:i.db,table:i.table,query:{}},l=or((c,d)=>e.backend.fetch(c,d),n||void 0);try{let c=[],d=!1;try{const F=await Oi(l,o);c=F.columns,d=F.typed}catch{}const{rows:g}=await Fr(l,o,{maxRows:50,pageSize:50}),x=c.length===0?Ri(g):d?c:eo(c,g);if(x.length===0)return;const y=await e.store.tables.findOne(t);if(!y)return;const S=y.source?.config?.pks??[];let U=x.map(F=>S.includes(F.field)?{...F,unique:!0,notnull:!0}:F),N={};try{const F=await Js(l,o),q=Zs(F,U);U=q.columns,N=q.patch}catch{}N=to(N,o.base,i.db,i.table),await e.store.tables.patch(t,{columns:U,...N,updatedAt:Date.now()})}catch{}}async function fh(e,t){const r=await e.store.tables.findOne(t);if(r)try{if(r.source?.type==="datasette"){const i=e.store.rows(t);typeof i.refresh=="function"&&await i.refresh();const n=await i.find();e.ui.dialogs.toast(`Reloaded ${n.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}else r.origin?.type==="datasette"&&await ph(e,r)}catch(i){const n=i instanceof Wt?i.message:i?.message??String(i);e.ui.dialogs.toast(`Refresh failed: ${n}`,{kind:"error",title:"Refresh"})}}async function ph(e,t){const r=wn(t.origin.url),i=d=>e.backend.fetch(d);cn(t.id,!0);let n,o=[];try{let d=[],g=null,x=!1;try{const $e=await Oi(i,r);d=$e.columns,g=$e.count,x=$e.typed}catch{}g==null&&(g=await xl(i,r));const y=g&&g>0?Math.min(g,qt.maxImportRows):0,{rows:S,hasMore:U,truncated:N,error:F,nextUrl:q}=await Fr(i,r,{maxRows:qt.maxImportRows,pageSize:qt.pageSize,onProgress:$e=>{y>0&&cn(t.id,!0,Math.min(1,$e/y))}});let G=d.length===0?Ri(S):x?d:eo(d,S),he={};try{const $e=await Js(i,r),m=Zs($e,G);G=m.columns,he=m.patch}catch{}he=to(he,r.base,r.db,r.table);const ee=t.columns.length===0,ie=fl(t.columns,G,t.deletedColumns);o=ie.newFields;const V=Date.now(),J=no(F,q,S.length,g),ue=ee?{columns:ie.columns,...he,importResume:J,updatedAt:V}:{columns:ie.columns,...he.info?{info:he.info}:{},importResume:J,updatedAt:V};await e.store.tables.patch(t.id,ue);const we=e.store.rows(t.id),Ae=await we.find();await we.bulkRemove(Ae.map($e=>$e.id)),await we.bulkInsert(S.map($e=>({id:Lr(),tableId:t.id,data:$e,updatedAt:V}))),n={rowCount:S.length,hasMore:U,truncated:N,error:F}}finally{cn(t.id,!1)}const l=[];n.error?l.push(`partial (${n.error})`):(n.hasMore||n.truncated)&&l.push(`capped at ${qt.maxImportRows}`),o.length>0&&l.push(`${o.length} new column${o.length===1?"":"s"}`);const c=l.length?` — ${l.join(", ")}`:"";e.ui.dialogs.toast(`Refreshed ${n.rowCount} rows from ${r.db}/${r.table}${c}.`,{kind:n.error||n.hasMore||n.truncated||o.length>0?"warning":"success",title:"Refresh"}),o.length>0&&gh(t.id,r,o)}async function mh(e,t){const r=await e.store.tables.findOne(t),i=r?.importResume;if(!r||!r.origin?.url||!i)return;const n=wn(r.origin.url),o=S=>e.backend.fetch(S),l=i.loadedRows,c=i.totalCount??null,d=c&&c>0?Math.min(c,qt.maxImportRows):0;cn(t,!0,d>0?Math.min(1,l/d):void 0);let g=0,x;try{const S=await Fr(o,n,{startUrl:i.nextUrl,maxRows:Math.max(0,qt.maxImportRows-l),pageSize:qt.pageSize,onProgress:F=>{d>0&&cn(t,!0,Math.min(1,(l+F)/d))}});g=S.rows.length;const U=Date.now();await e.store.rows(t).bulkInsert(S.rows.map(F=>({id:Lr(),tableId:t,data:F,updatedAt:U}))),x={error:S.error,nextUrl:S.nextUrl};const N=no(S.error,S.nextUrl,l+g,c);await e.store.tables.patch(t,{importResume:N,updatedAt:U})}catch(S){const U=S instanceof Wt?S.message:S?.message??String(S);e.ui.dialogs.toast(`Couldn't resume ${n.db}/${n.table}: ${U}. Try again later.`,{kind:"error",title:"Resume import"});return}finally{cn(t,!1)}const y=l+g;x.error?e.ui.dialogs.toast(`Resumed ${n.db}/${n.table}: +${g} rows (${y} total) — interrupted again (${x.error}). Resume to continue.`,{kind:"warning",title:"Resume import"}):e.ui.dialogs.toast(`Finished ${n.db}/${n.table}: +${g} rows (${y} total).`,{kind:"success",title:"Resume import"})}function gh(e,t,r){const i=r.join(", "),n=r.length!==1,o=`Refreshing ${t.db}/${t.table} revealed ${r.length} new column${n?"s":""}: ${i}. Review, reorder or hide ${n?"them":"it"} here.`;document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:e,notice:o}}))}function _l(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Lr(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const bh=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:Sl,importDatasette:ro,init:ih,meta:nh},Symbol.toStringTag,{value:"Module"})),yh={id:"sql-export",name:"SQL Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-export.ts"};function wh(){}async function Tl(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),i=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const n of r){const o=await e.store.rows(n.id).find();i.push(vh(n,o),"")}return i.push("COMMIT;",""),i.join(`
`)}function vh(e,t){const r=Ds(e.code||e.name||`table_${e.id}`),i=['  "__id" TEXT PRIMARY KEY',...e.columns.map(o=>`  ${xh(o)}`)],n=[`DROP TABLE IF EXISTS "${r}";`,`CREATE TABLE "${r}" (`,i.join(`,
`),");"];if(t.length>0){const l=["__id",...e.columns.map(c=>c.field)].map(c=>`"${Ds(c)}"`).join(", ");for(const c of t){const d=[ga(c.id),...e.columns.map(g=>ga(c.data[g.field],g.type))];n.push(`INSERT INTO "${r}" (${l}) VALUES (${d.join(", ")});`)}}return n.join(`
`)}function xh(e){const t=[`"${Ds(e.field)}"`,$h(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function $h(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function ga(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const r=kh(e);return r===null?"NULL":hi(r)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?hi(e.toISOString()):hi(typeof e=="string"?e:JSON.stringify(e))}function kh(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?ba(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(r)return`${r[1]}${r[2]}${r[3]}`;const i=new Date(t);return Number.isFinite(i.getTime())?ba(i):null}return null}function ba(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),r=String(e.getUTCMonth()+1).padStart(2,"0"),i=String(e.getUTCDate()).padStart(2,"0");return`${t}${r}${i}`}function hi(e){return`'${e.replace(/'/g,"''")}'`}function Ds(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const Ch=Object.freeze(Object.defineProperty({__proto__:null,init:wh,meta:yh,serializeWorkspaceAsSql:Tl},Symbol.toStringTag,{value:"Module"})),Eh={id:"dump-export",name:"Dump Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/dump-export.ts"};function Sh(e){e.ui.registerFooterButton({id:"export:menu",label:"Export",icon:"download",tooltip:"Export the current workspace (JSON or SQL)",onClick:async(t,r)=>{const i=t.workspaceId();if(!i)return;const{AnchoredMenu:n}=await In(async()=>{const{AnchoredMenu:c}=await import("./anchored-menu-DL_Ouj5B.js");return{AnchoredMenu:c}},[]),o=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),l=await n.open(o,[{id:"json",label:"JSON dump (.db.json)",icon:"data_object"},{id:"sql",label:"SQL script (.sql)",icon:"storage"}]);if(l)try{if(l==="json"){const c=await zi(t);await t.backend.saveFile(`workspace-${i}.db.json`,c,"application/json")}else if(l==="sql"){const c=await Tl(t);await t.backend.saveFile(`workspace-${i}.sql`,c,"application/sql")}}catch(c){t.ui.dialogs.toast(`Export failed: ${c.message}`,{kind:"error",title:"Export"})}}})}async function zi(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const r=(await e.store.tables.find()).filter(l=>l.workspaceId===t),i=(await e.store.viewTemplates.find()).filter(l=>l.workspaceId===t),n=(await e.store.viewInstances.find()).filter(l=>l.workspaceId===t),o={workspaceId:t,exportedAt:Date.now(),tables:[],viewTemplates:i,viewInstances:n};for(const l of r){const c=await e.store.rows(l.id).find();o.tables.push({name:l.name,columns:l.columns,rows:c.map(d=>d.data),...l.title?{title:l.title}:{},...l.windowGeometry?{windowGeometry:l.windowGeometry}:{},...l.sortColumn?{sortColumn:l.sortColumn,sortAsc:l.sortAsc??!0}:{},...l.filters?{filters:l.filters}:{},...l.labelColumn?{labelColumn:l.labelColumn}:{},...l.info?{info:l.info}:{},...l.deletedColumns?{deletedColumns:l.deletedColumns}:{},...l.source?{source:l.source}:{},...l.origin?{origin:l.origin}:{}})}return JSON.stringify(o,null,2)}const _h=Object.freeze(Object.defineProperty({__proto__:null,init:Sh,meta:Eh,serializeWorkspace:zi},Symbol.toStringTag,{value:"Module"})),Th={id:"gist-sync",name:"Gist Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/gist-sync.ts"},Ah="gist:",ya='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>';function Ph(e){e.ui.registerSettings("gist-sync","Gist Sync",[{key:"user",label:"GitHub user",type:"string",scope:"workspace",description:"GitHub username that owns the gist."},{key:"gist_id",label:"Gist ID",type:"string",scope:"workspace",description:"Leave empty to create a new gist on the first Push."},{key:"gist_token",label:"GitHub token (PAT)",type:"secret",scope:"user",description:'Personal access token with the "gist" scope. Stored on this device only (not synced).'}]),e.ui.registerFooterButton({id:"gist-sync:menu",label:"Gist",icon:ya,tooltip:"Gist sync — push, pull, share…",onClick:async(t,r)=>{const{AnchoredMenu:i}=await In(async()=>{const{AnchoredMenu:l}=await import("./anchored-menu-DL_Ouj5B.js");return{AnchoredMenu:l}},[]),n=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await i.open(n,[{id:"push",label:"Push",icon:"cloud_upload"},{id:"pull",label:"Pull",icon:"cloud_download"},{id:"share",label:"Share",icon:"share"},{id:"view",label:"View gist",icon:"open_in_new"}]);if(o)try{if(o==="push"||o==="pull"){const l=await i.open(n,[{id:"all",label:"Everything",icon:"sync"},{id:"data",label:"Data only (tables + rows)",icon:"table_rows"},{id:"settings",label:"Settings only (views + settings)",icon:"tune"}]);if(!l)return;const c=l;o==="push"?await zh(t,c):await Pl(t,c)}else o==="share"?await Oh(t):o==="view"&&await jh(t)}catch(l){t.ui.dialogs.toast(`Gist ${o} failed: ${l.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerTableButton({id:"gist-sync:table",label:"Gist",icon:ya,tooltip:"Gist sync for this table — push, pull, view file",onClick:async(t,r)=>{const{AnchoredMenu:i}=await In(async()=>{const{AnchoredMenu:l}=await import("./anchored-menu-DL_Ouj5B.js");return{AnchoredMenu:l}},[]),n=r.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await i.open(n,[{id:"push",label:"Push this table",icon:"cloud_upload"},{id:"pull",label:"Pull this table",icon:"cloud_download"},{id:"view",label:"View gist file",icon:"open_in_new"}]);if(o)try{o==="push"?await Fh(t,r.tableId):o==="pull"?await Lh(t,r.tableId):o==="view"&&await Mh(t,r.tableId)}catch(l){t.ui.dialogs.toast(`Gist ${o} failed: ${l.message}`,{kind:"error",title:"Gist sync"})}}})}async function Ih(e){const t=new URLSearchParams(location.hash.replace(/^#/,"")).get("gist");if(!t)return;history.replaceState(null,"",location.pathname+location.search);let r;try{r=atob(t)}catch{return}const i=Dh(r);if(!i){await e.ui.dialogs.alert("The shared gist link is invalid.","Gist sync");return}await e.ui.dialogs.confirm(`Load shared workspace from gist ${i.gistId||"(new)"} (owner: ${i.user})?

This pulls its tables into the current workspace.`,"Gist sync")&&(await io(e,i),await Pl(e))}async function Al(e){const t=e.workspaceId();return`${Ah}${t??"default"}`}async function Mr(e){const[t,r,i]=await Promise.all([e.settings.get("gist-sync","user"),e.settings.get("gist-sync","gist_id"),e.settings.get("gist-sync","gist_token")]);if(t&&i)return{user:t,gistId:r??"",token:i};const o=(await e.store.settings.findOne(await Al(e)))?.value;if(o?.user&&o?.token){const l={user:o.user,gistId:o.gistId??"",token:o.token};return await io(e,l),l}return null}async function io(e,t){await e.settings.set("gist-sync","user",t.user),await e.settings.set("gist-sync","gist_id",t.gistId),await e.settings.set("gist-sync","gist_token",t.token),await e.store.settings.upsert({key:await Al(e),value:t})}function Dh(e){const t={};for(const r of e.split(";")){const i=r.indexOf("=");if(i<0)continue;const n=r.slice(0,i).trim(),o=r.slice(i+1).trim();n&&(t[n]=o)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function so(e){const t=await Mr(e);return t||(e.ui.dialogs.toast("Add your GitHub user and token in Settings → Gist Sync, then try again.",{kind:"warning",title:"Gist sync"}),e.ui.openSettings(),null)}function Rh(e){return`user=${e.user};gist_id=${e.gistId};gist_token=${e.token}`}async function Oh(e){const t=await Mr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("Configure a gist and Push first — there is nothing to share yet.","Gist sync");return}const i=`${location.origin+location.pathname}#gist=${encodeURIComponent(btoa(Rh(t)))}`,{GistShareDialog:n}=await In(async()=>{const{GistShareDialog:o}=await import("./gist-share-dialog-D10LpqCW.js");return{GistShareDialog:o}},[]);await n.open(i)}async function jh(e){const t=await Mr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist configured yet — Push first.","Gist sync");return}window.open(`https://gist.github.com/${t.user}/${t.gistId}`,"_blank","noopener")}async function zh(e,t="all"){const r=await so(e);if(!r)return;const i=e.workspaceId();if(!i)throw new Error("no active workspace");const n=t!=="settings",o=t!=="data",l=(await e.store.tables.find()).filter(F=>F.workspaceId===i);if(n&&l.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const c=1e8,d=1e7,g={},x=[],y=[];if(n)for(const F of l){const q=F.source!=null?[]:await e.store.rows(F.id).find(),G=JSON.stringify(Il(F,q),null,2),he=`${F.name} (${(G.length/1e6).toFixed(2)} MB)`;G.length>c?x.push(he):G.length>d&&y.push(he),g[`${Br(F.name)}.table.json`]={content:G}}if(x.length>0||y.length>0){const F=[];if(x.length>0&&F.push(`Over Gist's 100 MB per-file limit — GitHub will REJECT these:
${x.join(`
`)}`),y.length>0&&F.push(`Large (over 10 MB) — Gist sync will be slow and less reliable:
${y.join(`
`)}`),!await e.ui.dialogs.confirm(`${F.join(`

`)}

To reduce size: remove unnecessary columns, limit the number of rows, or mark the table no-persist/no-sync.

Push anyway?`,"Gist size warning"))return}if(o){const F=(await e.store.viewTemplates.find()).filter(he=>he.workspaceId===i),q=(await e.store.viewInstances.find()).filter(he=>he.workspaceId===i),G=await e.store.settings.find();g["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:i,exportedAt:Date.now(),kind:"easydb-workspace-v1",viewTemplates:F,viewInstances:q,settings:G},null,2)}}let S;if(r.gistId){const F=await fetch(`https://api.github.com/gists/${r.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:g,description:`easyDBAccess workspace: ${i}`})});if(!F.ok)throw new Error(await Pr(F));S=await F.json()}else{const F=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${i}`,files:g})});if(!F.ok)throw new Error(await Pr(F));S=await F.json(),r.gistId=S.id,await io(e,r)}const U=S.html_url??`https://gist.github.com/${r.user}/${S.id}`,N=t==="settings"?"settings":t==="data"?`${l.length} table${l.length===1?"":"s"} (data only)`:`${l.length} table${l.length===1?"":"s"}`;e.ui.dialogs.toast(`Pushed ${N}.  ${U}`,{kind:"success",title:"Gist sync"})}async function Pl(e,t="all"){const r=t!=="settings",i=t!=="data",n=await so(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const o=e.workspaceId();if(!o)throw new Error("no active workspace");const l=await fetch(`https://api.github.com/gists/${n.gistId}`,{headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json"}});if(!l.ok)throw new Error(await Pr(l));const c=await l.json(),d=Object.entries(c.files).filter(([G])=>G.endsWith(".table.json")&&!G.startsWith("_easydb"));if(r&&d.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const g=(await e.store.tables.find()).filter(G=>G.workspaceId===o),x=new Map(g.map(G=>[G.name.toLowerCase(),G]));let y=0;const S=[],U=new Map;if(r){const{TopProgress:G}=await In(async()=>{const{TopProgress:ee}=await Promise.resolve().then(()=>ql);return{TopProgress:ee}},void 0),he=G.begin("Pulling from gist…");try{for(const[ee,[ie,V]]of d.entries())try{const J=await Si(V),ue=JSON.parse(J);if(!ue.name||!Array.isArray(ue.columns))throw new Error("unexpected file shape (missing name/columns)");let we;const Ae=x.get(ue.name.toLowerCase());if(Ae){if(we=await e.store.tables.patch(Ae.id,{title:ue.title,columns:ue.columns,...Rs(ue),updatedAt:Date.now()}),we.source==null){const $e=e.store.rows(Ae.id),m=await $e.find();await $e.bulkRemove(m.map(v=>v.id))}}else we=await e.store.tables.insert({id:Os(),workspaceId:o,name:ue.name,title:ue.title,code:Br(ue.name),columns:ue.columns,view:ue.view??"table",...Rs(ue),updatedAt:Date.now()});if(we.source==null){const $e=(ue.rows??[]).map(m=>({id:Os(),tableId:we.id,data:m,updatedAt:Date.now()}));await e.store.rows(we.id).bulkInsert($e)}U.set(ue.name,we.id),y++}catch(J){S.push({file:ie,error:J.message})}finally{he.fraction((ee+1)/d.length)}}finally{he.done()}}let N=0,F="";const q=i?c.files["_easydb.workspace.json"]:void 0;if(q)try{const G=await Si(q),he=JSON.parse(G),ee=he.viewTemplates??[],ie=he.viewInstances??[],V=he.settings??[];for(const J of ee)await e.store.viewTemplates.upsert({...J,workspaceId:o});for(const J of ie){let ue;J.tableName&&(ue=U.get(J.tableName)??x.get(J.tableName)?.id),ue??=J.tableId,ue&&(await e.store.viewInstances.upsert({...J,workspaceId:o,tableId:ue}),N++)}for(const J of V)await e.store.settings.upsert(J)}catch(G){F=`Workspace metadata import failed: ${G.message}`}if(S.length>0){const G=S.map(he=>`• ${he.file}: ${he.error}`).join(`
`);e.ui.dialogs.toast(`Pulled ${y} of ${d.length} tables. ${S.length} failed:
${G}${F?`
${F}`:""}`,{kind:"warning",title:"Gist sync"})}else{const G=N>0?` (+${N} views)`:"",he=t==="settings"?`Pulled settings${G}.`:`Pulled ${y} table${y===1?"":"s"}.${G}`;e.ui.dialogs.toast(he,{kind:"success",title:"Gist sync"}),F&&e.ui.dialogs.toast(F,{kind:"warning",title:"Gist sync"})}document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function Fh(e,t){const r=await so(e);if(!r)return;if(!r.gistId){await e.ui.dialogs.alert("No gist yet — use the main Gist button to Push the whole workspace first.","Gist sync");return}const i=await e.store.tables.findOne(t);if(!i)return;const n=i.source!=null?[]:await e.store.rows(t).find(),o=JSON.stringify(Il(i,n),null,2),l={[`${Br(i.name)}.table.json`]:{content:o}},c=await fetch(`https://api.github.com/gists/${r.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:l})});if(!c.ok)throw new Error(await Pr(c));e.ui.dialogs.toast(`Pushed "${i.name}" to gist.`,{kind:"success",title:"Gist sync"})}async function Lh(e,t){const r=await Mr(e);if(!r||!r.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const i=await e.store.tables.findOne(t);if(!i)return;const n=`${Br(i.name)}.table.json`,o=await fetch(`https://api.github.com/gists/${r.gistId}`,{headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)throw new Error(await Pr(o));const c=(await o.json()).files[n];if(!c){await e.ui.dialogs.alert(`No file "${n}" in the gist for this table.`,"Gist sync");return}const d=await Si(c),g=JSON.parse(d);if(!g.name||!Array.isArray(g.columns))throw new Error("unexpected file shape (missing name/columns)");if((await e.store.tables.patch(t,{title:g.title,columns:g.columns,...Rs(g),updatedAt:Date.now()})).source==null){const y=e.store.rows(t),S=await y.find();await y.bulkRemove(S.map(N=>N.id));const U=(g.rows??[]).map(N=>({id:Os(),tableId:t,data:N,updatedAt:Date.now()}));await y.bulkInsert(U)}e.ui.dialogs.toast(`Pulled "${i.name}" from gist.`,{kind:"success",title:"Gist sync"})}async function Mh(e,t){const r=await Mr(e);if(!r||!r.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const i=await e.store.tables.findOne(t);if(!i)return;const n=`file-${Br(i.name)}-table-json`;window.open(`https://gist.github.com/${r.user}/${r.gistId}#${n}`,"_blank","noopener")}function Il(e,t){const r=e.columns.map(n=>n.field),i=e.source!=null;return{name:e.name,title:e.title,columns:e.columns,view:e.view,windowGeometry:e.windowGeometry,sortColumn:e.sortColumn,sortAsc:e.sortAsc,filters:e.filters,labelColumn:e.labelColumn,deletedColumns:e.deletedColumns,info:e.info,source:e.source,origin:e.origin,rows:i?[]:t.map(n=>{const o={};for(const l of r)o[l]=n.data[l];return o})}}function Rs(e){const t={};return e.view!==void 0&&(t.view=e.view),e.windowGeometry&&(t.windowGeometry=e.windowGeometry),e.sortColumn!==void 0&&(t.sortColumn=e.sortColumn),e.sortAsc!==void 0&&(t.sortAsc=e.sortAsc),e.filters!==void 0&&(t.filters=e.filters),e.labelColumn!==void 0&&(t.labelColumn=e.labelColumn),e.deletedColumns!==void 0&&(t.deletedColumns=e.deletedColumns),e.info!==void 0&&(t.info=e.info),e.source!==void 0&&(t.source=e.source),e.origin!==void 0&&(t.origin=e.origin),t}async function Si(e,t=r=>fetch(r)){if(!e.truncated)return e.content;if(!e.raw_url)throw new Error("GitHub truncated this file but returned no raw_url");const r=await t(e.raw_url);if(!r.ok)throw new Error(`raw fetch failed: ${r.status} ${r.statusText}`);return r.text()}async function Pr(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}function Br(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Os(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Bh=Object.freeze(Object.defineProperty({__proto__:null,fetchGistFileContent:Si,init:Ph,load:Ih,meta:Th},Symbol.toStringTag,{value:"Module"})),Dl="server-sync:url";function Rl(e){return`server-sync:etag:${e}`}async function Ol(e){const r=(await e.store.settings.findOne(Dl))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}async function Nh(e,t){await e.store.settings.upsert({key:Dl,value:t.replace(/\/+$/,"")})}async function jl(e,t){const i=(await e.store.settings.findOne(Rl(t)))?.value;return typeof i=="string"?i:null}async function Kn(e,t,r){await e.store.settings.upsert({key:Rl(t),value:r})}function Fi(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function wa(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function zl(e,t,r){const i=jr(r,t),n=(await e.store.tables.find()).filter(l=>l.workspaceId===t);for(const l of n){const c=e.store.rows(l.id),d=await c.find();await c.bulkRemove(d.map(g=>g.id)),await e.store.tables.remove(l.id)}let o=0;for(const l of i){const c=va(),d=await e.store.tables.insert({id:c,workspaceId:t,name:l.name,code:Uh(l.name),columns:l.columns,view:"table",...l.windowGeometry?{windowGeometry:l.windowGeometry}:{},...l.sortColumn?{sortColumn:l.sortColumn,sortAsc:l.sortAsc??!0}:{},updatedAt:Date.now()}),g=l.rows.map(x=>({id:va(),tableId:d.id,data:x,updatedAt:Date.now()}));await e.store.rows(d.id).bulkInsert(g),o++}return o}function Uh(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function va(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const qh={id:"server-sync",name:"Server Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/server-sync.ts"};function Hh(e){e.ui.registerSettings("server-sync","Server Sync",[{key:"url",label:"Server URL",type:"string",scope:"workspace",description:"Base URL of the sync server, e.g. http://localhost:3000"}]),e.ui.registerFooterButton({id:"server-sync:menu",label:"Sync",icon:"cloud_sync",tooltip:"Server sync — push or pull this workspace",onClick:async(t,r)=>{const{AnchoredMenu:i}=await In(async()=>{const{AnchoredMenu:l}=await import("./anchored-menu-DL_Ouj5B.js");return{AnchoredMenu:l}},[]),n=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await i.open(n,[{id:"push",label:"Push (↑)",icon:"cloud_upload"},{id:"pull",label:"Pull (↓)",icon:"cloud_download"}]);if(o)try{o==="push"?await Wh(t):o==="pull"&&await Kh(t)}catch(l){t.ui.dialogs.toast(`${o==="push"?"Push":"Pull"} failed: ${l.message}`,{kind:"error",title:"Server sync"})}}})}async function Wh(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await Fl(e);if(!r)return;const i=await zi(e),n=await jl(e,t),o={"Content-Type":"application/json"};n&&(o["If-Match"]=`"${n}"`);let l=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:o,body:i});if(l.status===412){const d=await l.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){d.currentEtag&&await Kn(e,t,d.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}l=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:i})}if(!l.ok)throw new Error(await Ll(l));const c=Fi(l.headers.get("ETag"));c&&await Kn(e,t,c),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${r}.`,{kind:"success",title:"Server sync"})}async function Kh(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await Fl(e);if(!r||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const n=await fetch(`${r}/sync/${encodeURIComponent(t)}`);if(n.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!n.ok)throw new Error(await Ll(n));const o=Fi(n.headers.get("ETag")),l=await n.json(),c=await zl(e,t,l);o&&await Kn(e,t,o),e.ui.dialogs.toast(`Pulled ${c} table${c===1?"":"s"} from ${r}.`,{kind:"success",title:"Server sync"})}async function Fl(e){const t=await Ol(e);if(t)return t;const r=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!r)return null;try{new URL(r)}catch{return await e.ui.dialogs.alert(`"${r}" is not a valid URL.`,"Server sync"),null}return await Nh(e,r),r.replace(/\/+$/,"")}async function Ll(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Vh=Object.freeze(Object.defineProperty({__proto__:null,init:Hh,meta:qh},Symbol.toStringTag,{value:"Module"})),Gh={id:"new-table",name:"New Table",type:"ui",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/new-table-button.ts"};function Yh(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const Xh=Object.freeze(Object.defineProperty({__proto__:null,init:Yh,meta:Gh},Symbol.toStringTag,{value:"Module"})),Qh={id:"core-renderers",name:"Core Renderers",type:"cell-renderer",version:"0.1.0",description:"Built-in cell renderers: date, datetime, boolean, script.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/core-renderers.ts",fixed:!0};function Jh(e){customElements.get("cell-date")||customElements.define("cell-date",Zh),customElements.get("cell-datetime")||customElements.define("cell-datetime",ef),customElements.get("cell-boolean")||customElements.define("cell-boolean",tf),customElements.get("cell-script")||customElements.define("cell-script",rf),e.ui.registerCellRenderer("date","cell-date"),e.ui.registerCellRenderer("datetime","cell-datetime"),e.ui.registerCellRenderer("boolean","cell-boolean"),e.ui.registerCellRenderer("script","cell-script")}class Zh extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="date",t.value=of(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class ef extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="datetime-local",t.value=af(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class tf extends HTMLElement{constructor(){super(...arguments),this._value=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="checkbox",t.checked=nf(this._value),t.style.cssText="transform:translateY(1px);cursor:pointer",t.addEventListener("change",()=>this.commit(t.checked)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function nf(e){return e===!0||e==="true"||e===1||e==="1"}class rf extends HTMLElement{constructor(){super(...arguments),this._column=null,this._row={}}set column(t){this._column=t,this.render()}get column(){return this._column}set row(t){this._row=t??{},this.render()}get row(){return this._row}set value(t){}get value(){}connectedCallback(){this.render()}render(){this.innerHTML="";const t=this._column?.script;if(!t||!t.trim()){const o=document.createElement("span");o.textContent="(no script)",o.style.cssText="color:#9ca3af;font-style:italic",this.append(o);return}let r;try{r=sf(t)}catch(o){this.append(bs("compile error",o));return}let i;try{i=r(this._row)}catch(o){this.append(bs("runtime error",o));return}if(typeof i!="string"){this.append(bs("render(row) did not return a string",null));return}const n=document.createElement("span");n.style.cssText="display:inline-block;width:100%",n.innerHTML=i,this.append(n)}}const xa=new Map;function sf(e){const t=xa.get(e);if(t)return t;const r=new Function("row",`${e}
return render(row);`);return xa.set(e,r),r}function bs(e,t){const r=document.createElement("span");if(r.textContent=`⚠ ${e}`,r.style.cssText="color:#b91c1c;font-size:0.8em;font-family:ui-monospace,SFMono-Regular,monospace",t){const i=t instanceof Error?t.message:String(t);r.title=i}return r}function of(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function af(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}const lf=Object.freeze(Object.defineProperty({__proto__:null,init:Jh,meta:Qh},Symbol.toStringTag,{value:"Module"})),cf={id:"cell-color",name:"Cell Color",type:"cell-renderer",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2h2.3c2 0 3.6-1.6 3.6-3.6C20.7 6 16.9 3 12 3z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="11" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-color.ts"};function uf(e){customElements.get("cell-color")||customElements.define("cell-color",df),e.ui.registerCellRenderer("color","cell-color")}class df extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,r,i){this.value=i}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const r=document.createElement("input");r.type="color",r.value=t,r.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",r.addEventListener("change",()=>this.commit(r.value)),this.append(r)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const hf=Object.freeze(Object.defineProperty({__proto__:null,init:uf,meta:cf},Symbol.toStringTag,{value:"Module"})),ff={id:"cell-image",name:"Cell Image",type:"cell-renderer",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-image.ts"};function pf(e){customElements.get("cell-image")||customElements.define("cell-image",mf),e.ui.registerCellRenderer("image","cell-image")}class mf extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("span");if(t.style.cssText="display:inline-flex;align-items:center;gap:0.4rem",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const i=document.createElement("img");i.src=this._value,i.alt="",i.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(i)}else{const i=document.createElement("span");i.style.color="#9ca3af",i.textContent="no image",t.append(i);const n=document.createElement("button");n.type="button",n.textContent="upload",n.style.cssText="padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",n.addEventListener("click",()=>this.pickFile()),t.append(n)}this.append(t)}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const r=t.files?.[0];if(!r)return;const i=new FileReader;i.onload=()=>this.commit(String(i.result)),i.readAsDataURL(r)}),t.click()}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const gf=Object.freeze(Object.defineProperty({__proto__:null,init:pf,meta:ff},Symbol.toStringTag,{value:"Module"}));/**
 * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu
 * @version v4.16.1
 * @homepage https://jspanel.de/
 * @license MIT
 * @author Stefan Sträßer - info@jspanel.de
 * @author of dialog extension: Michael Daumling - michael@terrapinlogo.com
 * @github https://github.com/Flyer53/jsPanel4.git
 */let z={version:"4.16.1",date:"2022-11-03 09:18",ajaxAlwaysCallbacks:[],autopositionSpacing:4,closeOnEscape:(()=>{document.addEventListener("keydown",e=>{(e.key==="Escape"||e.code==="Escape"||e.key==="Esc")&&z.getPanels(t=>t.classList.contains("jsPanel")).some(t=>t.options.closeOnEscape?typeof t.options.closeOnEscape=="function"?t.options.closeOnEscape.call(t,t):(t.close(null,!0),!0):!1)},!1)})(),defaults:{boxShadow:3,container:"window",contentSize:{width:"400px",height:"200px"},dragit:{cursor:"move",handles:".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",opacity:.8,disableOnMaximized:!0},header:!0,headerTitle:"jsPanel",headerControls:{size:"md"},iconfont:void 0,maximizedMargin:0,minimizeTo:"default",paneltype:"standard",position:{my:"center",at:"center"},resizeit:{handles:"n, e, s, w, ne, se, sw, nw",minWidth:128,minHeight:38},theme:"default"},defaultAutocloseConfig:{time:"8s",progressbar:!0},defaultSnapConfig:{sensitivity:70,trigger:"panel",active:"both"},extensions:{},globalCallbacks:!1,icons:{close:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>',maximize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>',normalize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>',minimize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>',smallify:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>'},idCounter:0,isIE:document.documentMode||!1,pointerdown:"onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],pointermove:"onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],pointerup:"onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"],polyfills:(()=>{Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e==null)throw new TypeError("Cannot convert first argument to object");let t=Object(e);for(let r=1;r<arguments.length;r++){let i=arguments[r];if(i==null)continue;i=Object(i);let n=Object.keys(Object(i));for(let o=0,l=n.length;o<l;o++){let c=n[o],d=Object.getOwnPropertyDescriptor(i,c);d!==void 0&&d.enumerable&&(t[c]=i[c])}}return t}}),Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),r=t.length,i=new Array(r);r--;)i[r]=[t[r],e[t[r]]];return i}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(let r=0;r<this.length;r++)e.call(t,this[r],r,this)}),(function(e){e.forEach(function(t){t.append=t.append||function(){let r=Array.prototype.slice.call(arguments),i=document.createDocumentFragment();r.forEach(function(n){let o=n instanceof Node;i.appendChild(o?n:document.createTextNode(String(n)))}),this.appendChild(i)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){let t=(this.document||this.ownerDocument).querySelectorAll(e),r,i=this;do for(r=t.length;--r>=0&&t.item(r)!==i;);while(r<0&&(i=i.parentElement));return i}),(function(){if(typeof window.CustomEvent=="function")return!1;function e(t,r){r=r||{bubbles:!1,cancelable:!1,detail:void 0};let i=document.createEvent("CustomEvent");return i.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),i}e.prototype=window.Event.prototype,window.CustomEvent=e})(),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(t===void 0||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var r=t>0?t|0:0;return this.substring(r,r+e.length)===e}}),String.prototype.includes||(String.prototype.includes=function(e,t){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return t===void 0&&(t=0),this.indexOf(e,t)!==-1}),String.prototype.repeat||(String.prototype.repeat=function(e){if(this==null)throw new TypeError("can't convert "+this+" to object");var t=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),t.length==0||e==0)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,r-t.length),t}),Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw new TypeError('"this" is null or not defined');let r=Object(this),i=r.length>>>0;if(i===0)return!1;let n=t|0,o=Math.max(n>=0?n:i-Math.abs(n),0);function l(c,d){return c===d||typeof c=="number"&&typeof d=="number"&&isNaN(c)&&isNaN(d)}for(;o<i;){if(l(r[o],e))return!0;o++}return!1}})})(),ziBase:100,colorFilledLight:.81,colorFilledDark:.08,colorFilled:0,colorBrightnessThreshold:.55,colorNames:{default:"b0bec5",secondary:"b0bec5",primary:"01579b",info:"039be5",success:"2e7d32",warning:"f57f17",danger:"dd2c00",light:"e0e0e0",dark:"263238",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",grey50:"fafafa",grey100:"f5f5f5",grey200:"eeeeee",grey300:"e0e0e0",grey400:"bdbdbd",grey500:"9e9e9e",grey600:"757575",grey700:"616161",grey800:"424242",grey900:"212121",gray50:"fafafa",gray100:"f5f5f5",gray200:"eeeeee",gray300:"e0e0e0",gray400:"bdbdbd",gray500:"9e9e9e",gray600:"757575",gray700:"616161",gray800:"424242",gray900:"212121",bluegrey50:"eceff1",bluegrey100:"CFD8DC",bluegrey200:"B0BEC5",bluegrey300:"90A4AE",bluegrey400:"78909C",bluegrey500:"607D8B",bluegrey600:"546E7A",bluegrey700:"455A64",bluegrey800:"37474F",bluegrey900:"263238",bluegray50:"eceff1",bluegray100:"CFD8DC",bluegray200:"B0BEC5",bluegray300:"90A4AE",bluegray400:"78909C",bluegray500:"607D8B",bluegray600:"546E7A",bluegray700:"455A64",bluegray800:"37474F",bluegray900:"263238",red50:"FFEBEE",red100:"FFCDD2",red200:"EF9A9A",red300:"E57373",red400:"EF5350",red500:"F44336",red600:"E53935",red700:"D32F2F",red800:"C62828",red900:"B71C1C",reda100:"FF8A80",reda200:"FF5252",reda400:"FF1744",reda700:"D50000",pink50:"FCE4EC",pink100:"F8BBD0",pink200:"F48FB1",pink300:"F06292",pink400:"EC407A",pink500:"E91E63",pink600:"D81B60",pink700:"C2185B",pink800:"AD1457",pink900:"880E4F",pinka100:"FF80AB",pinka200:"FF4081",pinka400:"F50057",pinka700:"C51162",purple50:"F3E5F5",purple100:"E1BEE7",purple200:"CE93D8",purple300:"BA68C8",purple400:"AB47BC",purple500:"9C27B0",purple600:"8E24AA",purple700:"7B1FA2",purple800:"6A1B9A",purple900:"4A148C",purplea100:"EA80FC",purplea200:"E040FB",purplea400:"D500F9",purplea700:"AA00FF",deeppurple50:"EDE7F6",deeppurple100:"D1C4E9",deeppurple200:"B39DDB",deeppurple300:"9575CD",deeppurple400:"7E57C2",deeppurple500:"673AB7",deeppurple600:"5E35B1",deeppurple700:"512DA8",deeppurple800:"4527A0",deeppurple900:"311B92",deeppurplea100:"B388FF",deeppurplea200:"7C4DFF",deeppurplea400:"651FFF",deeppurplea700:"6200EA",indigo50:"E8EAF6",indigo100:"C5CAE9",indigo200:"9FA8DA",indigo300:"7986CB",indigo400:"5C6BC0",indigo500:"3F51B5",indigo600:"3949AB",indigo700:"303F9F",indigo800:"283593",indigo900:"1A237E",indigoa100:"8C9EFF",indigoa200:"536DFE",indigoa400:"3D5AFE",indigoa700:"304FFE",blue50:"E3F2FD",blue100:"BBDEFB",blue200:"90CAF9",blue300:"64B5F6",blue400:"42A5F5",blue500:"2196F3",blue600:"1E88E5",blue700:"1976D2",blue800:"1565C0",blue900:"0D47A1",bluea100:"82B1FF",bluea200:"448AFF",bluea400:"2979FF",bluea700:"2962FF",lightblue50:"E1F5FE",lightblue100:"B3E5FC",lightblue200:"81D4FA",lightblue300:"4FC3F7",lightblue400:"29B6F6",lightblue500:"03A9F4",lightblue600:"039BE5",lightblue700:"0288D1",lightblue800:"0277BD",lightblue900:"01579B",lightbluea100:"80D8FF",lightbluea200:"40C4FF",lightbluea400:"00B0FF",lightbluea700:"0091EA",cyan50:"E0F7FA",cyan100:"B2EBF2",cyan200:"80DEEA",cyan300:"4DD0E1",cyan400:"26C6DA",cyan500:"00BCD4",cyan600:"00ACC1",cyan700:"0097A7",cyan800:"00838F",cyan900:"006064",cyana100:"84FFFF",cyana200:"18FFFF",cyana400:"00E5FF",cyana700:"00B8D4",teal50:"E0F2F1",teal100:"B2DFDB",teal200:"80CBC4",teal300:"4DB6AC",teal400:"26A69A",teal500:"009688",teal600:"00897B",teal700:"00796B",teal800:"00695C",teal900:"004D40",teala100:"A7FFEB",teala200:"64FFDA",teala400:"1DE9B6",teala700:"00BFA5",green50:"E8F5E9",green100:"C8E6C9",green200:"A5D6A7",green300:"81C784",green400:"66BB6A",green500:"4CAF50",green600:"43A047",green700:"388E3C",green800:"2E7D32",green900:"1B5E20",greena100:"B9F6CA",greena200:"69F0AE",greena400:"00E676",greena700:"00C853",lightgreen50:"F1F8E9",lightgreen100:"DCEDC8",lightgreen200:"C5E1A5",lightgreen300:"AED581",lightgreen400:"9CCC65",lightgreen500:"8BC34A",lightgreen600:"7CB342",lightgreen700:"689F38",lightgreen800:"558B2F",lightgreen900:"33691E",lightgreena100:"CCFF90",lightgreena200:"B2FF59",lightgreena400:"76FF03",lightgreena700:"64DD17",lime50:"F9FBE7",lime100:"F0F4C3",lime200:"E6EE9C",lime300:"DCE775",lime400:"D4E157",lime500:"CDDC39",lime600:"C0CA33",lime700:"AFB42B",lime800:"9E9D24",lime900:"827717",limea100:"F4FF81",limea200:"EEFF41",limea400:"C6FF00",limea700:"AEEA00",yellow50:"FFFDE7",yellow100:"FFF9C4",yellow200:"FFF59D",yellow300:"FFF176",yellow400:"FFEE58",yellow500:"FFEB3B",yellow600:"FDD835",yellow700:"FBC02D",yellow800:"F9A825",yellow900:"F57F17",yellowa100:"FFFF8D",yellowa200:"FFFF00",yellowa400:"FFEA00",yellowa700:"FFD600",amber50:"FFF8E1",amber100:"FFECB3",amber200:"FFE082",amber300:"FFD54F",amber400:"FFCA28",amber500:"FFC107",amber600:"FFB300",amber700:"FFA000",amber800:"FF8F00",amber900:"FF6F00",ambera100:"FFE57F",ambera200:"FFD740",ambera400:"FFC400",ambera700:"FFAB00",orange50:"FFF3E0",orange100:"FFE0B2",orange200:"FFCC80",orange300:"FFB74D",orange400:"FFA726",orange500:"FF9800",orange600:"FB8C00",orange700:"F57C00",orange800:"EF6C00",orange900:"E65100",orangea100:"FFD180",orangea200:"FFAB40",orangea400:"FF9100",orangea700:"FF6D00",deeporange50:"FBE9E7",deeporange100:"FFCCBC",deeporange200:"FFAB91",deeporange300:"FF8A65",deeporange400:"FF7043",deeporange500:"FF5722",deeporange600:"F4511E",deeporange700:"E64A19",deeporange800:"D84315",deeporange900:"BF360C",deeporangea100:"FF9E80",deeporangea200:"FF6E40",deeporangea400:"FF3D00",deeporangea700:"DD2C00",brown50:"EFEBE9",brown100:"D7CCC8",brown200:"BCAAA4",brown300:"A1887F",brown400:"8D6E63",brown500:"795548",brown600:"6D4C41",brown700:"5D4037",brown800:"4E342E",brown900:"3E2723","mdb-default":"2BBBAD","mdb-default-dark":"00695c","mdb-primary":"4285F4","mdb-primary-dark":"0d47a1","mdb-secondary":"aa66cc","mdb-secondary-dark":"9933CC","mdb-danger":"ff4444","mdb-danger-dark":"CC0000","mdb-warning":"ffbb33","mdb-warning-dark":"FF8800","mdb-success":"00C851","mdb-success-dark":"007E33","mdb-info":"33b5e5","mdb-info-dark":"0099CC","mdb-elegant":"2E2E2E","mdb-elegant-dark":"212121","mdb-stylish":"4B515D","mdb-stylish-dark":"3E4551","mdb-unique":"3F729B","mdb-unique-dark":"1C2331","mdb-special":"37474F","mdb-special-dark":"263238"},errorReporting:1,modifier:!1,helper:(()=>{document.addEventListener("keydown",e=>z.modifier=e),document.addEventListener("keyup",()=>z.modifier=!1)})(),usePointerEvents(e=!0){e?(this.pointerdown="onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"]):(this.pointerdown="ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="ontouchend"in window?["touchend","mouseup"]:["mouseup"])},pOcontainer(e){if(e==="window")return document.body;if(typeof e=="string"){let t=document.querySelectorAll(e);return t.length&&t.length>0?t:!1}else{if(e.nodeType===1)return e;if(e.length)return e[0]}return!1},pOcontainment(e){let t=e;if(typeof e=="function"&&(t=e()),typeof t=="number")return[t,t,t,t];if(Array.isArray(t)){if(t.length===1)return[t[0],t[0],t[0],t[0]];if(t.length===2)return t.concat(t);t.length===3&&(t[3]=t[1])}return t},pOsize(e,t){let r=t||this.defaults.contentSize;const i=e.parentElement;if(typeof r=="string"){const n=r.trim().split(" ");r={},r.width=n[0],n.length===2?r.height=n[1]:r.height=n[0]}else r.width&&!r.height?r.height=r.width:r.height&&!r.width&&(r.width=r.height);if(String(r.width).match(/^[\d.]+$/gi))r.width+="px";else if(typeof r.width=="string"&&r.width.endsWith("%"))if(i===document.body)r.width=window.innerWidth*(parseFloat(r.width)/100)+"px";else{const n=window.getComputedStyle(i),o=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth);r.width=(parseFloat(n.width)-o)*(parseFloat(r.width)/100)+"px"}else typeof r.width=="function"&&(r.width=r.width.call(e,e),(typeof r.width=="number"||typeof r.width=="string"&&r.width.match(/^[\d.]+$/gi))&&(r.width+="px"));if(String(r.height).match(/^[\d.]+$/gi))r.height+="px";else if(typeof r.height=="string"&&r.height.endsWith("%"))if(i===document.body)r.height=window.innerHeight*(parseFloat(r.height)/100)+"px";else{const n=window.getComputedStyle(i),o=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth);r.height=(parseFloat(n.height)-o)*(parseFloat(r.height)/100)+"px"}else typeof r.height=="function"&&(r.height=r.height.call(e,e),(typeof r.height=="number"||typeof r.height=="string"&&r.height.match(/^[\d.]+$/gi))&&(r.height+="px"));return r},pOborder(e){let t=[],r=e.trim().replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," ").split(" ");return r.forEach((i,n)=>{(i.startsWith("--")||i.startsWith("var"))&&(r[n]=z.getCssVariableValue(i))}),r.forEach(i=>{z.colorNames[i]?t[2]="#"+z.colorNames[i]:i.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/)?t[1]=i:i.match(/(thin|medium|thick)|(\d*\.?\d*(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vmax|vmin|vb|vi|px|cm|mm|Q|in|pc|pt))/)?t[0]=i:t[2]=i}),t[0]||(t[0]="medium"),t[1]||(t[1]="solid"),t[2]||(t[2]=""),t},pOheaderControls(e){if(typeof e=="string"){let t={},r=e.toLowerCase(),i=r.match(/xl|lg|md|sm|xs/),n=r.match(/closeonly|none/);return i&&(t.size=i[0]),n&&(t=Object.assign({},t,{maximize:"remove",normalize:"remove",minimize:"remove",smallify:"remove"}),n[0]==="none"&&(t.close="remove")),Object.assign({},this.defaults.headerControls,t)}else return Object.assign({},this.defaults.headerControls,e)},pOtheme(e){e=e.trim();let t,r="";if(e.match(/^(rgb|hsl|var)/)){let i=e.indexOf(")");t=e.slice(0,i+1).replace(/\s+/g,""),t.startsWith("var")&&(t=z.getCssVariableValue(t)),r=e.slice(i+1,e.length).trim()}else if(e.match(/^(#|\w|--)/)){let i=e.indexOf(" ");i>0?(t=e.slice(0,i+1).replace(/\s+/g,""),r=e.slice(i+1,e.length).trim()):t=e,t.startsWith("--")&&(t=z.getCssVariableValue(t))}if(t.match(/^([\da-f]{3}|[\da-f]{6})$/gi)&&(t="#"+t),r.startsWith("fillcolor")){let i=r.indexOf(" ");r=r.slice(i+1,r.length).trim().replace(/\s+/g,""),r.match(/^([\da-f]{3}|[\da-f]{6})$/gi)?r="#"+r:z.colorNames[r]?r="#"+z.colorNames[r]:r.match(/^(--|var)/)?r=z.getCssVariableValue(r):r="#fff"}return{color:t,colors:!1,filling:r}},color(e){let t=e.toLowerCase(),r,i,n,o,l,c,d,g,x,y={};const S=/^#?([\da-f]{3}|[\da-f]{6})$/gi,U=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,N=/^hsla?\((\d{1,3}),(\d{1,3}%),(\d{1,3}%),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,F=this.colorNames;return F[t]&&(t=F[t]),t.match(S)!==null?(t=t.replace("#",""),t.length%2===1?(r=t.slice(0,1).repeat(2),i=t.slice(1,2).repeat(2),n=t.slice(2,3).repeat(2),y.rgb={r:parseInt(r,16),g:parseInt(i,16),b:parseInt(n,16)},y.hex=`#${r}${i}${n}`):(y.rgb={r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)},y.hex=`#${t}`),x=this.rgbToHsl(y.rgb.r,y.rgb.g,y.rgb.b),y.hsl=x,y.rgb.css=`rgb(${y.rgb.r},${y.rgb.g},${y.rgb.b})`):t.match(U)?(d=U.exec(t),y.rgb={css:t,r:d[1],g:d[2],b:d[3]},y.hex=this.rgbToHex(d[1],d[2],d[3]),x=this.rgbToHsl(d[1],d[2],d[3]),y.hsl=x):t.match(N)?(d=N.exec(t),o=d[1]/360,l=d[2].slice(0,d[2].length-1)/100,c=d[3].slice(0,d[3].length-1)/100,g=this.hslToRgb(o,l,c),y.rgb={css:`rgb(${g[0]},${g[1]},${g[2]})`,r:g[0],g:g[1],b:g[2]},y.hex=this.rgbToHex(y.rgb.r,y.rgb.g,y.rgb.b),y.hsl={css:`hsl(${d[1]},${d[2]},${d[3]})`,h:d[1],s:d[2],l:d[3]}):(y.hex="#f5f5f5",y.rgb={css:"rgb(245,245,245)",r:245,g:245,b:245},y.hsl={css:"hsl(0,0%,96%)",h:0,s:"0%",l:"96%"}),y},calcColors(e){const t=this.colorBrightnessThreshold,r=this.color(e),i=this.lighten(e,this.colorFilledLight),n=this.darken(e,this.colorFilled),o=this.perceivedBrightness(e)<=t?"#ffffff":"#000000",l=this.perceivedBrightness(i)<=t?"#ffffff":"#000000",c=this.perceivedBrightness(n)<=t?"#ffffff":"#000000",d=this.lighten(e,this.colorFilledDark),g=this.perceivedBrightness(d)<=t?"#ffffff":"#000000";return[r.hsl.css,i,n,o,l,c,d,g]},darken(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i-i*t)+"%";return`hsl(${r.h},${r.s},${n})`},lighten(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i+(100-i)*t)+"%";return`hsl(${r.h},${r.s},${n})`},hslToRgb(e,t,r){let i,n,o;if(t===0)i=n=o=r;else{let l=(g,x,y)=>(y<0&&(y+=1),y>1&&(y-=1),y<.16666666666666666?g+(x-g)*6*y:y<.5?x:y<.6666666666666666?g+(x-g)*(.6666666666666666-y)*6:g),c=r<.5?r*(1+t):r+t-r*t,d=2*r-c;i=l(d,c,e+1/3),n=l(d,c,e),o=l(d,c,e-1/3)}return[Math.round(i*255),Math.round(n*255),Math.round(o*255)]},rgbToHsl(e,t,r){e/=255,t/=255,r/=255;let i=Math.max(e,t,r),n=Math.min(e,t,r),o,l,c=(i+n)/2;if(i===n)o=l=0;else{let d=i-n;switch(l=c>.5?d/(2-i-n):d/(i+n),i){case e:o=(t-r)/d+(t<r?6:0);break;case t:o=(r-e)/d+2;break;case r:o=(e-t)/d+4;break}o/=6}return o=Math.round(o*360),l=Math.round(l*100)+"%",c=Math.round(c*100)+"%",{css:"hsl("+o+","+l+","+c+")",h:o,s:l,l:c}},rgbToHex(e,t,r){let i=Number(e).toString(16),n=Number(t).toString(16),o=Number(r).toString(16);return i.length===1&&(i=`0${i}`),n.length===1&&(n=`0${n}`),o.length===1&&(o=`0${o}`),`#${i}${n}${o}`},perceivedBrightness(e){const t=this.color(e).rgb;return t.r/255*.2126+t.g/255*.7152+t.b/255*.0722},pOposition(e){let t={},r=e.trim().split(/\s+/),i=r.filter(l=>l.match(/^(down|right|up|left)$/i));i.length&&(t.autoposition=i[0],r.splice(r.indexOf(i[0]),1));let n=r.filter(l=>l.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i));n.length?(t.my=n[0],t.at=n[1]||n[0],r.splice(r.indexOf(n[0]),1),n[1]&&r.splice(r.indexOf(n[1]),1)):(t.my="center",t.at="center");let o=r.filter(l=>l.match(/^[+-]?\d*\.?\d+[a-z%]*$/i));return o.length&&(t.offsetX=o[0].match(/^[+-]?\d*\.?\d+$/i)?`${o[0]}px`:o[0],o[1]?t.offsetY=o[1].match(/^[+-]?\d*\.?\d+$/i)?`${o[1]}px`:o[1]:t.offsetY=t.offsetX,r.splice(r.indexOf(o[0]),1),o[1]&&r.splice(r.indexOf(o[1]),1)),r.length&&(t.of=r.join(" ")),t},position(e,t){if(!t)return e.style.opacity=1,e;typeof t=="string"?t=Object.assign({},this.defaults.position,this.pOposition(t)):t=Object.assign({},this.defaults.position,t),["my","at","of"].forEach(F=>{typeof t[F]=="function"&&(t[F]=t[F].call(e,e))}),e.options.container==="window"&&(e.style.position="fixed"),typeof e=="string"?e=document.querySelector(e):Object.getPrototypeOf(e).jquery&&(e=e[0]);const r=e.options.container==="window"?"window":e.parentElement,i=e.getBoundingClientRect(),n=e.parentElement.getBoundingClientRect(),o=r==="window"?{left:0,top:0,width:document.documentElement.clientWidth,height:window.innerHeight}:{width:n.width,height:n.height,left:n.left,top:n.top},l=r==="window"?{x:1,y:1}:{x:o.width/r.offsetWidth,y:o.height/r.offsetHeight},c=r==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:window.getComputedStyle(r);o.width-=(parseFloat(c.borderLeftWidth)+parseFloat(c.borderRightWidth))*l.x,o.height-=(parseFloat(c.borderTopWidth)+parseFloat(c.borderBottomWidth))*l.y;let d;t.of?typeof t.of=="string"?d=t.of==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:document.querySelector(t.of).getBoundingClientRect():Object.getPrototypeOf(t.of).jquery?d=t.of[0].getBoundingClientRect():d=t.of.getBoundingClientRect():d=o;let g=this.getScrollbarWidth(document.body),x=this.getScrollbarWidth(e.parentElement),y="0px";t.my.startsWith("left-")?t.at.startsWith("left-")?t.of?y=d.left-o.left-parseFloat(c.borderLeftWidth)+"px":y="0px":t.at.startsWith("center")?t.of?y=d.left-o.left-parseFloat(c.borderLeftWidth)+d.width/2+"px":y=o.width/2+"px":t.at.startsWith("right-")&&(t.of?y=d.left-o.left-parseFloat(c.borderLeftWidth)+d.width+"px":y=o.width+"px"):t.my.startsWith("center")?t.at.startsWith("left-")?t.of?y=d.left-o.left-parseFloat(c.borderLeftWidth)-i.width/2+"px":y=-i.width/2+"px":t.at.startsWith("center")?t.of?y=d.left-o.left-parseFloat(c.borderLeftWidth)-(i.width-d.width)/2+"px":y=o.width/2-i.width/2+"px":t.at.startsWith("right-")&&(t.of?y=d.left-o.left-parseFloat(c.borderLeftWidth)+(d.width-i.width/2)+"px":y=o.width-i.width/2+"px"):t.my.startsWith("right-")&&(t.at.startsWith("left-")?t.of?y=d.left-o.left-parseFloat(c.borderLeftWidth)-i.width+"px":y=-i.width+"px":t.at.startsWith("center")?t.of?y=d.left-o.left-parseFloat(c.borderLeftWidth)-i.width+d.width/2+"px":y=o.width/2-i.width+"px":t.at.startsWith("right-")&&(t.of?y=d.left-o.left-parseFloat(c.borderLeftWidth)+d.width-i.width+"px":y=o.width-i.width+"px",r!=="window"&&(y=parseFloat(y)-x.y+"px")));let S="0px";t.my.endsWith("-top")?t.at.endsWith("-top")?t.of?S=d.top-o.top-parseFloat(c.borderTopWidth)+"px":S="0px":t.at.endsWith("center")?t.of?S=d.top-o.top-parseFloat(c.borderTopWidth)+d.height/2+"px":S=o.height/2+"px":t.at.endsWith("-bottom")&&(t.of?S=d.top-o.top-parseFloat(c.borderTopWidth)+d.height+"px":S=o.height+"px"):t.my.endsWith("center")?t.at.endsWith("-top")?t.of?S=d.top-o.top-parseFloat(c.borderTopWidth)-i.height/2+"px":S=-i.height/2+"px":t.at.endsWith("center")?t.of?S=d.top-o.top-parseFloat(c.borderTopWidth)-i.height/2+d.height/2+"px":S=o.height/2-i.height/2+"px":t.at.endsWith("-bottom")&&(t.of?S=d.top-o.top-parseFloat(c.borderTopWidth)-i.height/2+d.height+"px":S=o.height-i.height/2+"px"):t.my.endsWith("-bottom")&&(t.at.endsWith("-top")?t.of?S=d.top-o.top-parseFloat(c.borderTopWidth)-i.height+"px":S=-i.height+"px":t.at.endsWith("center")?t.of?S=d.top-o.top-parseFloat(c.borderTopWidth)-i.height+d.height/2+"px":S=o.height/2-i.height+"px":t.at.endsWith("-bottom")&&(t.of?S=d.top-o.top-parseFloat(c.borderTopWidth)-i.height+d.height+"px":S=o.height-i.height+"px",r!=="window"?S=parseFloat(S)-x.x+"px":S=parseFloat(S)-g.x+"px")),e.style.left=l.x===1?y:parseFloat(y)/l.x+"px",e.style.top=l.y===1?S:parseFloat(S)/l.y+"px";let U=getComputedStyle(e),N={left:U.left,top:U.top};return t.autoposition&&t.my===t.at&&["left-top","center-top","right-top","left-bottom","center-bottom","right-bottom"].indexOf(t.my)>=0&&(N=this.applyPositionAutopos(e,N,t)),(t.offsetX||t.offsetY)&&(N=this.applyPositionOffset(e,N,t)),(t.minLeft||t.minTop||t.maxLeft||t.maxTop)&&(N=this.applyPositionMinMax(e,N,t)),t.modify&&(N=this.applyPositionModify(e,N,t)),typeof e.options.opacity=="number"?e.style.opacity=e.options.opacity:e.style.opacity=1,e},applyPositionAutopos(e,t,r){const i=`${r.my}-${r.autoposition.toLowerCase()}`;e.classList.add(i);const n=Array.prototype.slice.call(document.querySelectorAll(`.${i}`)),o=n.indexOf(e);if(n.length>1){switch(r.autoposition){case"down":n.forEach((l,c)=>{c>0&&c<=o&&(t.top=parseFloat(t.top)+n[--c].getBoundingClientRect().height+z.autopositionSpacing+"px")});break;case"up":n.forEach((l,c)=>{c>0&&c<=o&&(t.top=parseFloat(t.top)-n[--c].getBoundingClientRect().height-z.autopositionSpacing+"px")});break;case"right":n.forEach((l,c)=>{c>0&&c<=o&&(t.left=parseFloat(t.left)+n[--c].getBoundingClientRect().width+z.autopositionSpacing+"px")});break;case"left":n.forEach((l,c)=>{c>0&&c<=o&&(t.left=parseFloat(t.left)-n[--c].getBoundingClientRect().width-z.autopositionSpacing+"px")});break}e.style.left=t.left,e.style.top=t.top}return{left:t.left,top:t.top}},applyPositionOffset(e,t,r){["offsetX","offsetY"].forEach(n=>{r[n]?(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),isNaN(r[n])===!1&&(r[n]=`${r[n]}px`)):r[n]="0px"}),e.style.left=`calc(${e.style.left} + ${r.offsetX})`,e.style.top=`calc(${e.style.top} + ${r.offsetY})`;const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionMinMax(e,t,r){if(["minLeft","minTop","maxLeft","maxTop"].forEach(n=>{r[n]&&(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),(Number.isInteger(r[n])||r[n].match(/^\d+$/))&&(r[n]=`${r[n]}px`))}),r.minLeft){e.style.left=r.minLeft;let n=getComputedStyle(e).left;parseFloat(n)<parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.minTop){e.style.top=r.minTop;let n=getComputedStyle(e).top;parseFloat(n)<parseFloat(t.top)?e.style.top=t.top:t.top=n}if(r.maxLeft){e.style.left=r.maxLeft;let n=getComputedStyle(e).left;parseFloat(n)>parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.maxTop){e.style.top=r.maxTop;let n=getComputedStyle(e).top;parseFloat(n)>parseFloat(t.top)?e.style.top=t.top:t.top=n}const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionModify(e,t,r){if(r.modify&&typeof r.modify=="function"){const n=r.modify.call(t,t,r);e.style.left=Number.isInteger(n.left)||n.left.match(/^\d+$/)?`${n.left}px`:n.left,e.style.top=Number.isInteger(n.top)||n.top.match(/^\d+$/)?`${n.top}px`:n.top}const i=getComputedStyle(e);return{left:i.left,top:i.top}},autopositionRemaining(e){let t,r=e.options.container;["left-top-down","left-top-right","center-top-down","right-top-down","right-top-left","left-bottom-up","left-bottom-right","center-bottom-up","right-bottom-up","right-bottom-left"].forEach(i=>{e.classList.contains(i)&&(t=i)}),t&&(r==="window"?document.body:typeof r=="string"?document.querySelector(r):r).querySelectorAll(`.${t}`).forEach(n=>n.reposition())},getThemeDetails(e){const t=this.pOtheme(e);if(t.color.startsWith("bootstrap-")){let r=t.color.indexOf("-"),i=document.createElement("button");i.className="btn btn"+t.color.slice(r),document.body.appendChild(i),t.color=getComputedStyle(i).backgroundColor.replace(/\s+/gi,""),document.body.removeChild(i),i=void 0}return t.colors=this.calcColors(t.color),t},clearTheme(e,t){return e.content.classList.remove("jsPanel-content-filled","jsPanel-content-filledlight"),e.header.classList.remove("jsPanel-hdr-light"),e.header.classList.remove("jsPanel-hdr-dark"),e.style.backgroundColor="",this.setStyles(e.headertoolbar,{boxShadow:"",width:"",marginLeft:"",borderTopColor:"transparent"}),this.setStyles(e.content,{background:"",borderTopColor:"transparent"}),e.header.style.background="",Array.prototype.slice.call(e.controlbar.querySelectorAll(".jsPanel-icon")).concat([e.headerlogo,e.headertitle,e.headertoolbar,e.content]).forEach(r=>r.style.color=""),t&&t.call(e,e),e},applyColorTheme(e,t){if(e.style.backgroundColor=t.colors[0],e.header.style.backgroundColor=t.colors[0],e.header.style.color=t.colors[3],[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(r=>e.querySelector(r).style.color=t.colors[3]),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(r=>r.style.color=t.colors[3]),typeof e.options.theme=="string"&&t.filling==="filled"&&(e.content.style.borderTop=t.colors[3]==="#000000"?"1px solid rgba(0,0,0,0.15)":"1px solid rgba(255,255,255,0.15)"),t.colors[3]==="#000000"?e.header.classList.add("jsPanel-hdr-light"):e.header.classList.add("jsPanel-hdr-dark"),t.filling)switch(t.filling){case"filled":this.setStyles(e.content,{backgroundColor:t.colors[2],color:t.colors[3]});break;case"filledlight":e.content.style.backgroundColor=t.colors[1];break;case"filleddark":this.setStyles(e.content,{backgroundColor:t.colors[6],color:t.colors[7]});break;default:e.content.style.backgroundColor=t.filling,e.content.style.color=this.perceivedBrightness(t.filling)<=this.colorBrightnessThreshold?"#fff":"#000"}return e},applyCustomTheme(e,t){let r={bgPanel:"#ffffff",bgContent:"#ffffff",bgFooter:"#f5f5f5",colorHeader:"#000000",colorContent:"#000000",colorFooter:"#000000",border:void 0,borderRadius:void 0},i=typeof t=="object"?Object.assign(r,t):r,n=i.bgPanel,o=i.bgContent,l=i.colorHeader,c=i.colorContent,d=i.bgFooter,g=i.colorFooter;return this.colorNames[n]?e.style.background="#"+this.colorNames[n]:e.style.background=this.getCssVariableValue(n),this.colorNames[l]&&(l="#"+this.colorNames[l]),[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(S=>e.querySelector(S).style.color=this.getCssVariableValue(l)),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(S=>S.style.color=this.getCssVariableValue(l)),this.colorNames[o]?e.content.style.background="#"+this.colorNames[o]:e.content.style.background=this.getCssVariableValue(o),this.colorNames[c]?e.content.style.color="#"+this.colorNames[c]:e.content.style.color=this.getCssVariableValue(c),this.perceivedBrightness(l)>this.colorBrightnessThreshold?e.header.classList.add("jsPanel-hdr-dark"):e.header.classList.add("jsPanel-hdr-light"),this.perceivedBrightness(c)>this.colorBrightnessThreshold?e.content.style.borderTop="1px solid rgba(255,255,255,0.15)":e.content.style.borderTop="1px solid rgba(0,0,0,0.15)",this.colorNames[d]?e.footer.style.background="#"+this.colorNames[d]:e.footer.style.background=this.getCssVariableValue(d),this.colorNames[g]?e.footer.style.color="#"+this.colorNames[g]:e.footer.style.color=this.getCssVariableValue(g),i.border&&e.setBorder(i.border),i.borderRadius&&(e.options.borderRadius=void 0,e.setBorderRadius(i.borderRadius)),e},getCssVariableValue(e){if(e.startsWith("--"))return getComputedStyle(document.documentElement).getPropertyValue(e).replace(/\s+/g,"");if(e.startsWith("var")){let t=e.slice(e.indexOf("(")+1,e.indexOf(")"));return getComputedStyle(document.documentElement).getPropertyValue(t).replace(/\s+/g,"")}return e},getScrollbarWidth(e=document.body){if(e===document.body)return{y:window.innerWidth-document.documentElement.clientWidth,x:window.innerHeight-document.documentElement.clientHeight};{let t=getComputedStyle(e);return{y:e.offsetWidth-e.clientWidth-parseFloat(t.borderRightWidth)-parseFloat(t.borderLeftWidth),x:e.offsetHeight-e.clientHeight-parseFloat(t.borderBottomWidth)-parseFloat(t.borderTopWidth)}}},remClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.remove(r)),e},setClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.add(r)),e},setStyles(e,t){for(const[r,i]of Object.entries(t))e.style[r]=typeof i=="string"?z.getCssVariableValue(i):i;return e},setStyle(e,t){return this.setStyles.call(e,e,t)},strToHtml(e){return document.createRange().createContextualFragment(e)},toggleClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.contains(r)?e.classList.remove(r):e.classList.add(r)),e},emptyNode(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e},addScript(e,t="application/javascript",r){if(!document.querySelector(`script[src="${e}"]`)){const i=document.createElement("script");i.src=e,i.type=t,document.head.appendChild(i),r&&(i.onload=r)}},ajax(e,t){let r,i,n=new XMLHttpRequest;const o={method:"GET",async:!0,user:"",pwd:"",done:function(){if(t){let l=z.strToHtml(this.responseText);r.urlSelector&&(l=l.querySelector(r.urlSelector)),t.contentRemove(),t.content.append(l)}},autoresize:!0,autoreposition:!0};if(t&&typeof e=="string")r=Object.assign({},o,{url:e});else if(typeof e=="object"&&e.url)r=Object.assign({},o,e),r.url=e.url,r.async===!1&&(r.timeout=0,r.withCredentials&&(r.withCredentials=void 0),r.responseType&&(r.responseType=void 0));else{this.errorReporting&&z.errorpanel("XMLHttpRequest seems to miss the <mark>url</mark> parameter!");return}i=r.url.trim().split(/\s+/),r.url=encodeURI(i[0]),i.length>1&&(i.shift(),r.urlSelector=i.join(" ")),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?t?r.done.call(n,n,t):r.done.call(n,n):r.fail&&(t?r.fail.call(n,n,t):r.fail.call(n,n)),r.always&&(t?r.always.call(n,n,t):r.always.call(n,n)),t&&(r.autoresize||r.autoreposition)&&z.ajaxAutoresizeAutoreposition(t,r),z.ajaxAlwaysCallbacks.length&&z.ajaxAlwaysCallbacks.forEach(l=>{t?l.call(n,n,t):l.call(n,n)}))},n.open(r.method,r.url,r.async,r.user,r.pwd),n.timeout=r.timeout||0,r.withCredentials&&(n.withCredentials=r.withCredentials),r.responseType&&(n.responseType=r.responseType),r.beforeSend&&(t?r.beforeSend.call(n,n,t):r.beforeSend.call(n,n)),r.data?n.send(r.data):n.send(null)},fetch(e,t){let r;const i={bodyMethod:"text",autoresize:!0,autoreposition:!0,done:function(o,l){if(l){let c=z.strToHtml(o);l.contentRemove(),l.content.append(c)}}};if(t&&typeof e=="string")r=Object.assign({},i,{resource:encodeURI(e)});else if(typeof e=="object"&&e.resource)r=Object.assign({},i,e),r.resource=encodeURI(e.resource);else{this.errorReporting&&z.errorpanel("Fetch Request seems to miss the <mark>resource</mark> parameter!");return}const n=r.fetchInit||{};r.beforeSend&&(t?r.beforeSend.call(e,e,t):r.beforeSend.call(e,e)),fetch(r.resource,n).then(o=>{if(o.ok)return o[r.bodyMethod]()}).then(o=>{t?r.done.call(o,o,t):r.done.call(o,o),t&&(r.autoresize||r.autoreposition)&&z.ajaxAutoresizeAutoreposition(t,r)})},ajaxAutoresizeAutoreposition(e,t){const r=e.options.contentSize;if(typeof r=="string"&&r.match(/auto/i)){const i=r.split(" "),n=Object.assign({},{width:i[0],height:i[1]});t.autoresize&&e.resize(n),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}else if(typeof r=="object"&&(r.width==="auto"||r.height==="auto")){const i=Object.assign({},r);t.autoresize&&e.resize(i),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}},createPanelTemplate(e=!0){const t=document.createElement("div");return t.className="jsPanel",t.style.left="0",t.style.top="0",e&&["close","maximize","normalize","minimize","smallify"].forEach(r=>{t.setAttribute(`data-btn${r}`,"enabled")}),t.innerHTML=`<div class="jsPanel-hdr">
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
                            </div>`,e},createSnapArea(e,t,r){const i=document.createElement("div"),n=e.parentElement;i.className=`jsPanel-snap-area jsPanel-snap-area-${t}`,t==="lt"||t==="rt"||t==="rb"||t==="lb"?(i.style.width=r+"px",i.style.height=r+"px"):t==="ct"||t==="cb"?i.style.height=r+"px":(t==="lc"||t==="rc")&&(i.style.width=r+"px"),n!==document.body&&(i.style.position="absolute"),document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${t}`)||e.parentElement.appendChild(i)},removeSnapAreas(){document.querySelectorAll(".jsPanel-snap-area").forEach(e=>e.parentElement.removeChild(e))},extend(e){if(Object.prototype.toString.call(e)==="[object Object]")for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this.extensions[t]=e[t])},getPanels(e=function(){return this.classList.contains("jsPanel-standard")}){return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(t=>e.call(t,t)).sort((t,r)=>r.style.zIndex-t.style.zIndex)},processCallbacks(e,t,r="some",i,n){if(typeof t=="function"&&(t=[t]),r)return t[r](o=>o.call(e,e,i,n));t.forEach(o=>o.call(e,e,i,n))},resetZi(){this.zi=((e=z.ziBase)=>{let t=e;return{next:()=>t++}})(),Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((e,t)=>e.style.zIndex-t.style.zIndex).forEach(e=>e.style.zIndex=z.zi.next())},errorpanel(e){this.create({paneltype:"error",dragit:!1,resizeit:!1,theme:{bgPanel:"white",bgContent:"white",colorHeader:"rebeccapurple",colorContent:"#333333",border:"2px solid rebeccapurple"},borderRadius:".33rem",headerControls:"closeonly xs",headerTitle:"&#9888; jsPanel Error",contentSize:{width:"50%",height:"auto"},position:"center-top 0 5 down",animateIn:"jsPanelFadeIn",content:`<div class="jsPanel-error-content-separator"></div><p>${e}</p>`})},create(e={},t){z.zi||(z.zi=((m=z.ziBase)=>{let v=m;return{next:()=>v++}})()),e.config?(e=Object.assign({},this.defaults,e.config,e),delete e.config):e=Object.assign({},this.defaults,e),e.id?typeof e.id=="function"&&(e.id=e.id()):e.id=`jsPanel-${z.idCounter+=1}`;const r=document.getElementById(e.id);if(r!==null){if(r.classList.contains("jsPanel")&&r.front(),this.errorReporting){let m=`&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${e.id}</mark> already exists in the document.`;z.errorpanel(m)}return!1}let i=this.pOcontainer(e.container);if(typeof i=="object"&&i.length&&i.length>0&&(i=i[0]),!i)return this.errorReporting&&z.errorpanel("&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist"),!1;["onbeforeclose","onbeforemaximize","onbeforeminimize","onbeforenormalize","onbeforesmallify","onbeforeunsmallify","onclosed","onfronted","onmaximized","onminimized","onnormalized","onsmallified","onstatuschange","onunsmallified"].forEach(m=>{e[m]?typeof e[m]=="function"&&(e[m]=[e[m]]):e[m]=[]});const n=e.template||this.createPanelTemplate();n.options=e,n.closetimer=void 0,n.status="initialized",n.currentData={},n.header=n.querySelector(".jsPanel-hdr"),n.headerbar=n.header.querySelector(".jsPanel-headerbar"),n.titlebar=n.header.querySelector(".jsPanel-titlebar"),n.headerlogo=n.headerbar.querySelector(".jsPanel-headerlogo"),n.headertitle=n.headerbar.querySelector(".jsPanel-title"),n.controlbar=n.headerbar.querySelector(".jsPanel-controlbar"),n.headertoolbar=n.header.querySelector(".jsPanel-hdr-toolbar"),n.content=n.querySelector(".jsPanel-content"),n.footer=n.querySelector(".jsPanel-ftr"),n.snappableTo=!1,n.snapped=!1,n.droppableTo=!1,n.progressbar=n.autocloseProgressbar=n.querySelector(".jsPanel-progressbar");const o=new CustomEvent("jspanelloaded",{detail:e.id,cancelable:!0}),l=new CustomEvent("jspanelstatuschange",{detail:e.id,cancelable:!0}),c=new CustomEvent("jspanelbeforenormalize",{detail:e.id,cancelable:!0}),d=new CustomEvent("jspanelnormalized",{detail:e.id,cancelable:!0}),g=new CustomEvent("jspanelbeforemaximize",{detail:e.id,cancelable:!0}),x=new CustomEvent("jspanelmaximized",{detail:e.id,cancelable:!0}),y=new CustomEvent("jspanelbeforeminimize",{detail:e.id,cancelable:!0}),S=new CustomEvent("jspanelminimized",{detail:e.id,cancelable:!0}),U=new CustomEvent("jspanelbeforesmallify",{detail:e.id,cancelable:!0}),N=new CustomEvent("jspanelsmallified",{detail:e.id,cancelable:!0}),F=new CustomEvent("jspanelsmallifiedmax",{detail:e.id,cancelable:!0}),q=new CustomEvent("jspanelbeforeunsmallify",{detail:e.id,cancelable:!0}),G=new CustomEvent("jspanelfronted",{detail:e.id,cancelable:!0}),he=new CustomEvent("jspanelbeforeclose",{detail:e.id,cancelable:!0}),ee=new CustomEvent("jspanelclosed",{detail:e.id,cancelable:!0}),ie=new CustomEvent("jspanelcloseduser",{detail:e.id,cancelable:!0});[o,l,c,d,g,x,y,S,U,N,F,q,G,he].forEach(m=>m.panel=n);const V=n.querySelector(".jsPanel-btn-close"),J=n.querySelector(".jsPanel-btn-maximize"),ue=n.querySelector(".jsPanel-btn-normalize"),we=n.querySelector(".jsPanel-btn-smallify"),Ae=n.querySelector(".jsPanel-btn-minimize");V&&z.pointerup.forEach(m=>{V.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.close(null,!0)})}),J&&z.pointerup.forEach(m=>{J.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.maximize()})}),ue&&z.pointerup.forEach(m=>{ue.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.normalize()})}),we&&z.pointerup.forEach(m=>{we.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.status==="normalized"||n.status==="maximized"?n.smallify():(n.status==="smallified"||n.status==="smallifiedmax")&&n.unsmallify()})}),Ae&&z.pointerup.forEach(m=>{Ae.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.minimize()})});let $e=z.extensions;for(let m in $e)Object.prototype.hasOwnProperty.call($e,m)&&(n[m]=$e[m]);if(n.setBorder=m=>{let v=z.pOborder(m);return v[2].length||(v[2]=n.style.backgroundColor),v=v.join(" "),n.style.border=v,n.options.border=v,n},n.setBorderRadius=m=>{typeof m=="string"&&(m.startsWith("--")||m.startsWith("var"))&&(m=m.replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," "),m=z.getCssVariableValue(m)),typeof m=="number"&&(m+="px"),n.style.borderRadius=m;const v=getComputedStyle(n);return n.options.header?(n.header.style.borderTopLeftRadius=v.borderTopLeftRadius,n.header.style.borderTopRightRadius=v.borderTopRightRadius):(n.content.style.borderTopLeftRadius=v.borderTopLeftRadius,n.content.style.borderTopRightRadius=v.borderTopRightRadius),n.options.footerToolbar?(n.footer.style.borderBottomRightRadius=v.borderBottomRightRadius,n.footer.style.borderBottomLeftRadius=v.borderBottomLeftRadius):(n.content.style.borderBottomRightRadius=v.borderBottomRightRadius,n.content.style.borderBottomLeftRadius=v.borderBottomLeftRadius),n},n.setTheme=(m=e.theme,v)=>{let E;if(n.status==="minimized"&&(E=!0,n.normalize()),z.clearTheme(n),typeof m=="object")e.border=void 0,z.applyCustomTheme(n,m);else if(typeof m=="string"){m==="none"&&(m="white");let b=z.getThemeDetails(m);z.applyColorTheme(n,b)}return E&&n.minimize(),v&&v.call(n,n),n},n.remove=(m,v,E)=>{n.parentElement.removeChild(n),document.getElementById(m)?E&&E.call(n,m,n):(n.removeMinimizedReplacement(),n.status="closed",v&&document.dispatchEvent(ie),document.dispatchEvent(ee),n.options.onclosed&&z.processCallbacks(n,n.options.onclosed,"every",v),z.autopositionRemaining(n),E&&E.call(m,m)),window.removeEventListener("resize",n.windowResizeHandler),document.removeEventListener("jspanelresize",n.parentResizeHandler)},n.close=(m,v)=>{if(n.parentElement){if(n.closetimer&&window.clearInterval(n.closetimer),document.dispatchEvent(he),n.statusBefore=n.status,n.options.onbeforeclose&&n.options.onbeforeclose.length>0&&!z.processCallbacks(n,n.options.onbeforeclose,"some",n.status,v))return n;n.options.animateOut?(n.options.animateIn&&z.remClass(n,n.options.animateIn),z.setClass(n,n.options.animateOut),n.addEventListener("animationend",E=>{E.stopPropagation(),n.remove(n.id,v,m)})):n.remove(n.id,v,m)}},n.maximize=(m,v)=>{if(n.statusBefore=n.status,e.onbeforemaximize&&e.onbeforemaximize.length>0&&!z.processCallbacks(n,e.onbeforemaximize,"some",n.statusBefore))return n;document.dispatchEvent(g);const E=n.parentElement,b=z.pOcontainment(e.maximizedMargin);return E===document.body?(n.style.width=document.documentElement.clientWidth-b[1]-b[3]+"px",n.style.height=document.documentElement.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"):(n.style.width=E.clientWidth-b[1]-b[3]+"px",n.style.height=E.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"),we.style.transform="unset",n.removeMinimizedReplacement(),n.status="maximized",n.setControls([".jsPanel-btn-maximize"]),v||n.front(),document.dispatchEvent(x),document.dispatchEvent(l),e.onstatuschange&&z.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),m&&m.call(n,n,n.statusBefore),e.onmaximized&&z.processCallbacks(n,e.onmaximized,"every",n.statusBefore),n},n.minimize=m=>{if(n.status==="minimized"||(n.statusBefore=n.status,e.onbeforeminimize&&e.onbeforeminimize.length>0&&!z.processCallbacks(n,e.onbeforeminimize,"some",n.statusBefore)))return n;if(document.dispatchEvent(y),!document.getElementById("jsPanel-replacement-container")){const v=document.createElement("div");v.id="jsPanel-replacement-container",document.body.append(v)}if(n.style.left="-9999px",n.status="minimized",document.dispatchEvent(S),document.dispatchEvent(l),e.onstatuschange&&z.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),e.minimizeTo){let v=n.createMinimizedReplacement(),E,b,C;switch(e.minimizeTo){case"default":document.getElementById("jsPanel-replacement-container").append(v);break;case"parentpanel":b=n.closest(".jsPanel-content").parentElement,C=b.querySelectorAll(".jsPanel-minimized-box"),E=C[C.length-1],E.append(v);break;case"parent":b=n.parentElement,E=b.querySelector(".jsPanel-minimized-container"),E||(E=document.createElement("div"),E.className="jsPanel-minimized-container",b.append(E)),E.append(v);break;default:document.querySelector(e.minimizeTo).append(v)}}return m&&m.call(n,n,n.statusBefore),e.onminimized&&z.processCallbacks(n,e.onminimized,"every",n.statusBefore),n},n.normalize=m=>(n.status==="normalized"||(n.statusBefore=n.status,e.onbeforenormalize&&e.onbeforenormalize.length>0&&!z.processCallbacks(n,e.onbeforenormalize,"some",n.statusBefore))||(document.dispatchEvent(c),n.style.width=n.currentData.width,n.style.height=n.currentData.height,n.snapped?n.snap(n.snapped,!0):(n.style.left=n.currentData.left,n.style.top=n.currentData.top),we.style.transform="unset",n.removeMinimizedReplacement(),n.status="normalized",n.setControls([".jsPanel-btn-normalize"]),n.front(),document.dispatchEvent(d),document.dispatchEvent(l),e.onstatuschange&&z.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),m&&m.call(n,n,n.statusBefore),e.onnormalized&&z.processCallbacks(n,e.onnormalized,"every",n.statusBefore)),n),n.smallify=m=>{if(n.status==="smallified"||n.status==="smallifiedmax"||(n.statusBefore=n.status,e.onbeforesmallify&&e.onbeforesmallify.length>0&&!z.processCallbacks(n,e.onbeforesmallify,"some",n.statusBefore)))return n;document.dispatchEvent(U),n.style.overflow="hidden";const v=window.getComputedStyle(n),E=parseFloat(window.getComputedStyle(n.headerbar).height);n.style.height=parseFloat(v.borderTopWidth)+parseFloat(v.borderBottomWidth)+E+"px",we.style.transform="rotate(180deg)",n.status==="normalized"?(n.setControls([".jsPanel-btn-normalize"]),n.status="smallified",document.dispatchEvent(N),document.dispatchEvent(l),e.onstatuschange&&z.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="maximized"&&(n.setControls([".jsPanel-btn-maximize"]),n.status="smallifiedmax",document.dispatchEvent(F),document.dispatchEvent(l),e.onstatuschange&&z.processCallbacks(n,e.onstatuschange,"every",n.statusBefore));const b=n.querySelectorAll(".jsPanel-minimized-box");return b[b.length-1].style.display="none",m&&m.call(n,n,n.statusBefore),e.onsmallified&&z.processCallbacks(n,e.onsmallified,"every",n.statusBefore),n},n.unsmallify=m=>{if(n.statusBefore=n.status,n.status==="smallified"||n.status==="smallifiedmax"){if(e.onbeforeunsmallify&&e.onbeforeunsmallify.length>0&&!z.processCallbacks(n,e.onbeforeunsmallify,"some",n.statusBefore))return n;document.dispatchEvent(q),n.style.overflow="visible",n.front(),n.status==="smallified"?(n.style.height=n.currentData.height,n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(d),document.dispatchEvent(l),e.onstatuschange&&z.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="smallifiedmax"?n.maximize():n.status==="minimized"&&n.normalize(),we.style.transform="rotate(0deg)";const v=n.querySelectorAll(".jsPanel-minimized-box");v[v.length-1].style.display="flex",m&&m.call(n,n,n.statusBefore),e.onunsmallified&&z.processCallbacks(n,e.onunsmallified,"every",n.statusBefore)}return n},n.front=(m,v=!0)=>{if(n.status==="minimized")n.statusBefore==="maximized"?n.maximize():n.normalize();else{const E=Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(b=>b.style.zIndex);Math.max(...E)>n.style.zIndex&&(n.style.zIndex=z.zi.next()),z.resetZi()}return document.dispatchEvent(G),m&&m.call(n,n),e.onfronted&&v&&z.processCallbacks(n,e.onfronted,"every",n.status),n},n.snap=(m,v=!1)=>{if(v||(n.currentData.beforeSnap={width:n.currentData.width,height:n.currentData.height}),m&&typeof m=="function"&&!v)m.call(n,n,n.snappableTo);else if(m!==!1){let E=[0,0];if(n.options.dragit.snap.containment&&n.options.dragit.containment){const b=z.pOcontainment(n.options.dragit.containment),C=n.snappableTo;C.startsWith("left")?E[0]=b[3]:C.startsWith("right")&&(E[0]=-b[1]),C.endsWith("top")?E[1]=b[0]:C.endsWith("bottom")&&(E[1]=-b[2])}n.reposition(`${n.snappableTo} ${E[0]} ${E[1]}`)}v||(n.snapped=n.snappableTo)},n.move=(m,v)=>{let E=n.overlaps(m,"paddingbox"),b=n.parentElement;return m.appendChild(n),n.options.container=m,n.style.left=E.left+"px",n.style.top=E.top+"px",n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors(),v&&v.call(n,n,m,b),n},n.closeChildpanels=m=>(n.getChildpanels().forEach(v=>v.close()),m&&m.call(n,n),n),n.getChildpanels=m=>{const v=n.content.querySelectorAll(".jsPanel");return m&&v.forEach((E,b,C)=>{m.call(E,E,b,C)}),v},n.isChildpanel=m=>{const v=n.closest(".jsPanel-content"),E=v?v.parentElement:null;return m&&m.call(n,n,E),v?E:!1},n.contentRemove=m=>(z.emptyNode(n.content),m&&m.call(n,n),n),n.createMinimizedReplacement=()=>{const m=z.createMinimizedTemplate(),v=window.getComputedStyle(n.headertitle).color,E=window.getComputedStyle(n),b=e.iconfont,C=m.querySelector(".jsPanel-controlbar");return n.options.header!=="auto-show-hide"?z.setStyles(m,{backgroundColor:E.backgroundColor,backgroundPositionX:E.backgroundPositionX,backgroundPositionY:E.backgroundPositionY,backgroundRepeat:E.backgroundRepeat,backgroundAttachment:E.backgroundAttachment,backgroundImage:E.backgroundImage,backgroundSize:E.backgroundSize,backgroundOrigin:E.backgroundOrigin,backgroundClip:E.backgroundClip}):m.style.backgroundColor=window.getComputedStyle(n.header).backgroundColor,m.id=n.id+"-min",m.querySelector(".jsPanel-headerbar").replaceChild(n.headerlogo.cloneNode(!0),m.querySelector(".jsPanel-headerlogo")),m.querySelector(".jsPanel-titlebar").replaceChild(n.headertitle.cloneNode(!0),m.querySelector(".jsPanel-title")),m.querySelector(".jsPanel-titlebar").setAttribute("title",n.headertitle.textContent),m.querySelector(".jsPanel-title").style.color=v,C.style.color=v,C.querySelectorAll("button").forEach(de=>de.style.color=v),["jsPanel-hdr-dark","jsPanel-hdr-light"].forEach(de=>{n.header.classList.contains(de)&&m.querySelector(".jsPanel-hdr").classList.add(de)}),n.setIconfont(b,m),n.dataset.btnnormalize==="enabled"?z.pointerup.forEach(de=>{m.querySelector(".jsPanel-btn-normalize").addEventListener(de,ye=>{if(ye.preventDefault(),ye.button&&ye.button>0)return!1;n.normalize()})}):C.querySelector(".jsPanel-btn-normalize").style.display="none",n.dataset.btnmaximize==="enabled"?z.pointerup.forEach(de=>{m.querySelector(".jsPanel-btn-maximize").addEventListener(de,ye=>{if(ye.preventDefault(),ye.button&&ye.button>0)return!1;n.maximize()})}):C.querySelector(".jsPanel-btn-maximize").style.display="none",n.dataset.btnclose==="enabled"?z.pointerup.forEach(de=>{m.querySelector(".jsPanel-btn-close").addEventListener(de,ye=>{if(ye.preventDefault(),ye.button&&ye.button>0)return!1;n.close(null,!0)})}):C.querySelector(".jsPanel-btn-close").style.display="none",m},n.removeMinimizedReplacement=()=>{const m=document.getElementById(`${n.id}-min`);m&&m.parentElement.removeChild(m)},n.drag=(m={})=>{let v,E,b;const C=new CustomEvent("jspaneldragstart",{detail:n.id}),de=new CustomEvent("jspaneldrag",{detail:n.id}),ye=new CustomEvent("jspaneldragstop",{detail:n.id});[C,de,ye].forEach(We=>We.panel=n);const K=We=>{let Me=We.split("-");return Me.forEach((_e,Oe)=>{Me[Oe]=_e.charAt(0).toUpperCase()+_e.slice(1)}),"snap"+Me.join("")};function Q(We){We.relatedTarget===null&&z.pointermove.forEach(Me=>{document.removeEventListener(Me,E,!1),n.style.opacity=1})}let Xe=m.handles||z.defaults.dragit.handles,ct=m.cursor||z.defaults.dragit.cursor;function sn(We){if(z.pointermove.forEach(Me=>document.removeEventListener(Me,E)),z.removeSnapAreas(),v){if(n.style.opacity=1,v=void 0,b.snap){switch(n.snappableTo){case"left-top":n.snap(b.snap.snapLeftTop);break;case"center-top":n.snap(b.snap.snapCenterTop);break;case"right-top":n.snap(b.snap.snapRightTop);break;case"right-center":n.snap(b.snap.snapRightCenter);break;case"right-bottom":n.snap(b.snap.snapRightBottom);break;case"center-bottom":n.snap(b.snap.snapCenterBottom);break;case"left-bottom":n.snap(b.snap.snapLeftBottom);break;case"left-center":n.snap(b.snap.snapLeftCenter);break}b.snap.callback&&n.snappableTo&&typeof b.snap.callback=="function"&&(b.snap.callback.call(n,n),b.snap.repositionOnSnap&&b.snap[K(n.snappableTo)]!==!1&&n.repositionOnSnap(n.snappableTo)),n.snappableTo&&b.snap.repositionOnSnap&&b.snap[K(n.snappableTo)]&&n.repositionOnSnap(n.snappableTo)}if(n.droppableTo&&n.droppableTo){let Me=n.parentElement;n.move(n.droppableTo),b.drop.callback&&b.drop.callback.call(n,n,n.droppableTo,Me)}if(document.dispatchEvent(ye),b.stop.length){let Me=window.getComputedStyle(n),_e={left:parseFloat(Me.left),top:parseFloat(Me.top),width:parseFloat(Me.width),height:parseFloat(Me.height)};z.processCallbacks(n,b.stop,!1,_e,We)}n.saveCurrentPosition(),n.calcSizeFactors()}n.controlbar.style.pointerEvents="inherit",n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Me=>Me.style.pointerEvents="auto"),document.removeEventListener(We,sn)}return n.querySelectorAll(Xe).forEach(We=>{We.style.touchAction="none",We.style.cursor=ct,z.pointerdown.forEach(Me=>{We.addEventListener(Me,_e=>{if(_e.button&&_e.button>0||(b=Object.assign({},z.defaults.dragit,m),b.disableOnMaximized&&n.status==="maximized"))return!1;if((b.containment||b.containment===0)&&(b.containment=z.pOcontainment(b.containment)),b.grid&&Array.isArray(b.grid)&&b.grid.length===1&&(b.grid[1]=b.grid[0]),b.snap&&(typeof b.snap=="object"?b.snap=Object.assign({},z.defaultSnapConfig,b.snap):b.snap=z.defaultSnapConfig),_e.target.closest(".jsPanel-ftr-btn"))return;n.controlbar.style.pointerEvents="none",n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(nt=>nt.style.pointerEvents="none");let Oe=window.getComputedStyle(n),Qe=parseFloat(Oe.left),De=parseFloat(Oe.top),oe=parseFloat(Oe.width),Je=parseFloat(Oe.height),Be=_e.touches?_e.touches[0].clientX:_e.clientX,me=_e.touches?_e.touches[0].clientY:_e.clientY,Ce=n.parentElement,Pt=Ce.getBoundingClientRect(),fe=window.getComputedStyle(Ce),Ze=n.getScaleFactor(),xn=0,Jt=z.getScrollbarWidth(Ce);E=nt=>{if(nt.preventDefault(),!v){if(document.dispatchEvent(C),n.style.opacity=b.opacity,n.snapped&&b.snap.resizeToPreSnap&&n.currentData.beforeSnap){n.resize(n.currentData.beforeSnap.width+" "+n.currentData.beforeSnap.height),n.setControls([".jsPanel-btn-normalize"]);let le=n.getBoundingClientRect(),Re=Be-(le.left+le.width),ve=le.width/2;Re>-ve&&(xn=Re+ve)}if(n.front(),n.snapped=!1,n.status==="maximized"&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized"),b.drop&&b.drop.dropZones){let le=b.drop.dropZones.map(ve=>z.pOcontainer(ve)),Re=[];le.forEach(function(ve){ve.length?ve.forEach(function(Le){Re.push(Le)}):Re.push(ve)}),Re=Re.filter(function(ve,Le,Ge){return Ge.indexOf(ve)===Le}),b.drop.dropZones=Re}b.start.length&&z.processCallbacks(n,b.start,!1,{left:Qe,top:De,width:oe,height:Je},nt)}v=1;let It,Fe,Ke,kt,it,Pe,Te,Dt,Ve,yt,dt=nt.touches?nt.touches[0].clientX:nt.clientX,st=nt.touches?nt.touches[0].clientY:nt.clientY,Ue=window.getComputedStyle(n),pe;if(Ce===document.body){let le=n.getBoundingClientRect();Ve=window.innerWidth-parseInt(fe.borderLeftWidth,10)-parseInt(fe.borderRightWidth,10)-(le.left+le.width),yt=window.innerHeight-parseInt(fe.borderTopWidth,10)-parseInt(fe.borderBottomWidth,10)-(le.top+le.height)}else Ve=parseInt(fe.width,10)-parseInt(fe.borderLeftWidth,10)-parseInt(fe.borderRightWidth,10)-(parseInt(Ue.left,10)+parseInt(Ue.width,10)),yt=parseInt(fe.height,10)-parseInt(fe.borderTopWidth,10)-parseInt(fe.borderBottomWidth,10)-(parseInt(Ue.top,10)+parseInt(Ue.height,10));It=parseFloat(Ue.left),Ke=parseFloat(Ue.top),it=Ve,Te=yt,b.snap&&(b.snap.trigger==="panel"?(Fe=It**2,kt=Ke**2,Pe=it**2,Dt=Te**2):b.snap.trigger==="pointer"&&(n.options.container==="window"?(It=dt,Ke=st,it=window.innerWidth-dt,Te=window.innerHeight-st,Fe=dt**2,kt=Ke**2,Pe=it**2,Dt=Te**2):(pe=n.overlaps(Ce,"paddingbox",nt),It=pe.pointer.left,Ke=pe.pointer.top,it=pe.pointer.right,Te=pe.pointer.bottom,Fe=pe.pointer.left**2,kt=pe.pointer.top**2,Pe=pe.pointer.right**2,Dt=pe.pointer.bottom**2)));let et=Math.sqrt(Fe+kt),te=Math.sqrt(Fe+Dt),ot=Math.sqrt(Pe+kt),pt=Math.sqrt(Pe+Dt),St=Math.abs(It-it)/2,ne=Math.abs(Ke-Te)/2,on=Math.sqrt(Fe+ne**2),hn=Math.sqrt(kt+St**2),ht=Math.sqrt(Pe+ne**2),$n=Math.sqrt(Dt+St**2);if(window.getSelection().removeAllRanges(),document.dispatchEvent(de),(!b.axis||b.axis==="x")&&(n.style.left=Qe+(dt-Be)/Ze.x+xn+"px"),(!b.axis||b.axis==="y")&&(n.style.top=De+(st-me)/Ze.y+"px"),b.grid){let le=b.grid,Re=b.axis,ve=le[0]*Math.round((Qe+(dt-Be))/le[0]),Le=le[1]*Math.round((De+(st-me))/le[1]);(!Re||Re==="x")&&(n.style.left=`${ve}px`),(!Re||Re==="y")&&(n.style.top=`${Le}px`)}if(b.containment||b.containment===0){let le=b.containment,Re,ve;if(n.options.container==="window")Re=window.innerWidth-parseFloat(Ue.width)-le[1]-Jt.y,ve=window.innerHeight-parseFloat(Ue.height)-le[2]-Jt.x;else{let Le=parseFloat(fe.borderLeftWidth)+parseFloat(fe.borderRightWidth),Ge=parseFloat(fe.borderTopWidth)+parseFloat(fe.borderBottomWidth);Re=Pt.width/Ze.x-parseFloat(Ue.width)-le[1]-Le-Jt.y,ve=Pt.height/Ze.y-parseFloat(Ue.height)-le[2]-Ge-Jt.x}parseFloat(n.style.left)<=le[3]&&(n.style.left=le[3]+"px"),parseFloat(n.style.top)<=le[0]&&(n.style.top=le[0]+"px"),parseFloat(n.style.left)>=Re&&(n.style.left=Re+"px"),parseFloat(n.style.top)>=ve&&(n.style.top=ve+"px")}if(b.drag.length){let le={left:It,top:Ke,right:it,bottom:Te,width:parseFloat(Ue.width),height:parseFloat(Ue.height)};z.processCallbacks(n,b.drag,!1,le,nt)}if(b.snap){let le=b.snap.sensitivity,Re=Ce===document.body?window.innerWidth/8:Pt.width/8,ve=Ce===document.body?window.innerHeight/8:Pt.height/8;n.snappableTo=!1,z.removeSnapAreas(),et<le?b.snap.snapLeftTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-top",z.createSnapArea(n,"lt",le)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(pe.pointer.left>0&&pe.pointer.top>0?(n.snappableTo="left-top",z.createSnapArea(n,"lt",le)):(n.snappableTo=!1,z.removeSnapAreas()))):te<le?b.snap.snapLeftBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-bottom",z.createSnapArea(n,"lb",le)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(pe.pointer.left>0&&pe.pointer.bottom>0?(n.snappableTo="left-bottom",z.createSnapArea(n,"lb",le)):(n.snappableTo=!1,z.removeSnapAreas()))):ot<le?b.snap.snapRightTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-top",z.createSnapArea(n,"rt",le)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(pe.pointer.right>0&&pe.pointer.top>0?(n.snappableTo="right-top",z.createSnapArea(n,"rt",le)):(n.snappableTo=!1,z.removeSnapAreas()))):pt<le?b.snap.snapRightBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-bottom",z.createSnapArea(n,"rb",le)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(pe.pointer.right>0&&pe.pointer.bottom>0?(n.snappableTo="right-bottom",z.createSnapArea(n,"rb",le)):(n.snappableTo=!1,z.removeSnapAreas()))):Ke<le&&hn<Re?b.snap.snapCenterTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-top",z.createSnapArea(n,"ct",le)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(pe.pointer.top>0?(n.snappableTo="center-top",z.createSnapArea(n,"ct",le)):(n.snappableTo=!1,z.removeSnapAreas()))):It<le&&on<ve?b.snap.snapLeftCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-center",z.createSnapArea(n,"lc",le)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(pe.pointer.left>0?(n.snappableTo="left-center",z.createSnapArea(n,"lc",le)):(n.snappableTo=!1,z.removeSnapAreas()))):it<le&&ht<ve?b.snap.snapRightCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-center",z.createSnapArea(n,"rc",le)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(pe.pointer.right>0?(n.snappableTo="right-center",z.createSnapArea(n,"rc",le)):(n.snappableTo=!1,z.removeSnapAreas()))):Te<le&&$n<Re&&b.snap.snapCenterBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-bottom",z.createSnapArea(n,"cb",le)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(pe.pointer.bottom>0?(n.snappableTo="center-bottom",z.createSnapArea(n,"cb",le)):(n.snappableTo=!1,z.removeSnapAreas())))}if(b.drop&&b.drop.dropZones){let le=z.isIE?"msElementsFromPoint":"elementsFromPoint",Re=document[le](nt.clientX,nt.clientY);Array.isArray(Re)||(Re=Array.prototype.slice.call(Re)),b.drop.dropZones.forEach(ve=>{Re.includes(ve)&&(n.droppableTo=ve)}),Re.includes(n.droppableTo)||(n.droppableTo=!1)}},z.pointermove.forEach(nt=>document.addEventListener(nt,E)),window.addEventListener("mouseout",Q,!1)})}),z.pointerup.forEach(Me=>{document.addEventListener(Me,sn),window.removeEventListener("mouseout",Q)}),m.disable&&(We.style.pointerEvents="none")}),n},n.dragit=m=>{const v=Object.assign({},z.defaults.dragit,e.dragit),E=n.querySelectorAll(v.handles);return m==="disable"?E.forEach(b=>b.style.pointerEvents="none"):E.forEach(b=>b.style.pointerEvents="auto"),n},n.sizeit=(m={})=>{const v=new CustomEvent("jspanelresizestart",{detail:n.id}),E=new CustomEvent("jspanelresize",{detail:n.id}),b=new CustomEvent("jspanelresizestop",{detail:n.id});[v,E,b].forEach(_e=>_e.panel=n);let C={},de,ye,K,Q,Xe,ct;C.handles=m.handles||z.defaults.resizeit.handles,C.handles.split(",").forEach(_e=>{const Oe=document.createElement("DIV");Oe.className=`jsPanel-resizeit-handle jsPanel-resizeit-${_e.trim()}`,n.append(Oe)});let sn=m.aspectRatio?m.aspectRatio:!1;function We(_e){_e.relatedTarget===null&&z.pointermove.forEach(Oe=>document.removeEventListener(Oe,de,!1))}function Me(_e){if(z.pointermove.forEach(Oe=>document.removeEventListener(Oe,de,!1)),_e.target.classList&&_e.target.classList.contains("jsPanel-resizeit-handle")){let Oe,Qe,De=_e.target.className;if(De.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)&&(Oe=!0),De.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)&&(Qe=!0),C.grid&&Array.isArray(C.grid)){C.grid.length===1&&(C.grid[1]=C.grid[0]);const oe=parseFloat(n.style.width),Je=parseFloat(n.style.height),Be=oe%C.grid[0],me=Je%C.grid[1],Ce=parseFloat(n.style.left),Pt=parseFloat(n.style.top),fe=Ce%C.grid[0],Ze=Pt%C.grid[1];Be<C.grid[0]/2?n.style.width=oe-Be+"px":n.style.width=oe+(C.grid[0]-Be)+"px",me<C.grid[1]/2?n.style.height=Je-me+"px":n.style.height=Je+(C.grid[1]-me)+"px",Oe&&(fe<C.grid[0]/2?n.style.left=Ce-fe+"px":n.style.left=Ce+(C.grid[0]-fe)+"px"),Qe&&(Ze<C.grid[1]/2?n.style.top=Pt-Ze+"px":n.style.top=Pt+(C.grid[1]-Ze)+"px")}}if(ye){n.content.style.pointerEvents="inherit",ye=void 0,n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors();let Oe=n.controlbar.querySelector(".jsPanel-btn-smallify"),Qe=n.getBoundingClientRect();if(Oe&&Qe.height>ct+5&&(Oe.style.transform="rotate(0deg)"),document.dispatchEvent(b),C.stop.length){let De=window.getComputedStyle(n),oe={left:parseFloat(De.left),top:parseFloat(De.top),width:parseFloat(De.width),height:parseFloat(De.height)};z.processCallbacks(n,C.stop,!1,oe,_e)}}n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Oe=>Oe.style.pointerEvents="auto"),C.aspectRatio=sn,document.removeEventListener(_e,Me)}return n.querySelectorAll(".jsPanel-resizeit-handle").forEach(_e=>{_e.style.touchAction="none",z.pointerdown.forEach(Oe=>{_e.addEventListener(Oe,Qe=>{if(Qe.preventDefault(),Qe.stopPropagation(),Qe.button&&Qe.button>0)return!1;let De=1;if(C=Object.assign({},z.defaults.resizeit,m),(C.containment||C.containment===0)&&(C.containment=z.pOcontainment(C.containment)),C.aspectRatio&&C.aspectRatio===!0&&(C.aspectRatio="panel"),z.modifier){let ve=z.modifier;ve.altKey?C.aspectRatio="content":ve.ctrlKey?C.aspectRatio="panel":ve.shiftKey&&(C.aspectRatio=!1,De=2)}let oe=typeof C.maxWidth=="function"?C.maxWidth():C.maxWidth||1e4,Je=typeof C.maxHeight=="function"?C.maxHeight():C.maxHeight||1e4,Be=typeof C.minWidth=="function"?C.minWidth():C.minWidth,me=typeof C.minHeight=="function"?C.minHeight():C.minHeight;n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(ve=>ve.style.pointerEvents="none");const Ce=n.parentElement,Pt=Ce.tagName.toLowerCase(),fe=n.getBoundingClientRect(),Ze=Ce.getBoundingClientRect(),xn=window.getComputedStyle(Ce,null),Jt=parseInt(xn.borderLeftWidth,10),nt=parseInt(xn.borderTopWidth,10),It=xn.getPropertyValue("position"),Fe=Qe.clientX||Qe.clientX===0||Qe.touches[0].clientX,Ke=Qe.clientY||Qe.clientY===0||Qe.touches[0].clientY,kt=Fe/Ke,it=Qe.target.classList,Pe=n.getScaleFactor(),Te=fe.width/fe.height,Dt=n.content.getBoundingClientRect(),Ve=Dt.width/Dt.height,yt=n.header.getBoundingClientRect().height,dt=n.footer.getBoundingClientRect().height||0;let st=fe.left,Ue=fe.top,pe=1e4,et=1e4,te=1e4,ot=1e4;Xe=fe.width,ct=fe.height,Pt!=="body"&&(st=fe.left-Ze.left+Ce.scrollLeft,Ue=fe.top-Ze.top+Ce.scrollTop),Pt==="body"&&C.containment?(pe=document.documentElement.clientWidth-fe.left,te=document.documentElement.clientHeight-fe.top,et=fe.width+fe.left,ot=fe.height+fe.top):C.containment&&(It==="static"?(pe=Ze.width-fe.left+Jt,te=Ze.height+Ze.top-fe.top+nt,et=fe.width+(fe.left-Ze.left)-Jt,ot=fe.height+(fe.top-Ze.top)-nt):(pe=Ce.clientWidth-(fe.left-Ze.left)/Pe.x+Jt,te=Ce.clientHeight-(fe.top-Ze.top)/Pe.y+nt,et=(fe.width+fe.left-Ze.left)/Pe.x-Jt,ot=n.clientHeight+(fe.top-Ze.top)/Pe.y-nt)),C.containment&&(et-=C.containment[3],ot-=C.containment[0],pe-=C.containment[1],te-=C.containment[2]);const pt=window.getComputedStyle(n),St=parseFloat(pt.width)-fe.width,ne=parseFloat(pt.height)-fe.height;let on=parseFloat(pt.left)-fe.left,hn=parseFloat(pt.top)-fe.top;Ce!==document.body&&(on+=Ze.left,hn+=Ze.top);let ht=parseInt(pt.borderTopWidth,10),$n=parseInt(pt.borderRightWidth,10),le=parseInt(pt.borderBottomWidth,10),Re=parseInt(pt.borderLeftWidth,10);de=ve=>{ve.preventDefault(),ye||(document.dispatchEvent(v),C.start.length&&z.processCallbacks(n,C.start,!1,{width:Xe,height:ct,left:st,top:Ue},ve),n.front(),n.status==="maximized"&&(n.status="normalized",n.controlbar.querySelector(".jsPanel-btn-maximize")&&n.setControlStatus("maximize","show"),n.controlbar.querySelector(".jsPanel-btn-normalize")&&n.setControlStatus("normalize","hide")),fe.height>ct+5&&(n.status="normalized",n.setControls([".jsPanel-btn-normalize"]))),ye=1,document.dispatchEvent(E);let Le=ve.touches?ve.touches[0].clientX:ve.clientX,Ge=ve.touches?ve.touches[0].clientY:ve.clientY,je;it.contains("jsPanel-resizeit-e")?(K=Xe+(Le-Fe)*De/Pe.x+St,K>=pe&&(K=pe),K>=oe&&(K=oe),K<=Be&&(K=Be),n.style.width=K+"px",De===2&&(n.style.left=st-(Le-Fe)+"px"),C.aspectRatio==="content"?(n.style.height=(K-$n-Re)/Ve+yt+dt+ht+le+"px",C.containment&&(je=n.overlaps(Ce),je.bottom<=C.containment[2]&&(n.style.height=te+"px",n.style.width=te*Ve+"px"))):C.aspectRatio==="panel"&&(n.style.height=K/Te+"px",C.containment&&(je=n.overlaps(Ce),je.bottom<=C.containment[2]&&(n.style.height=te+"px",n.style.width=te*Te+"px")))):it.contains("jsPanel-resizeit-s")?(Q=ct+(Ge-Ke)*De/Pe.y+ne,Q>=te&&(Q=te),Q>=Je&&(Q=Je),Q<=me&&(Q=me),n.style.height=Q+"px",De===2&&(n.style.top=Ue-(Ge-Ke)+"px"),C.aspectRatio==="content"?(n.style.width=(Q-yt-dt-ht-le)*Ve+ht+le+"px",C.containment&&(je=n.overlaps(Ce),je.right<=C.containment[1]&&(n.style.width=pe+"px",n.style.height=pe/Ve+"px"))):C.aspectRatio==="panel"&&(n.style.width=Q*Te+"px",C.containment&&(je=n.overlaps(Ce),je.right<=C.containment[1]&&(n.style.width=pe+"px",n.style.height=pe/Te+"px")))):it.contains("jsPanel-resizeit-w")?(K=Xe+(Fe-Le)*De/Pe.x+St,K<=oe&&K>=Be&&K<=et&&(n.style.left=st+(Le-Fe)/Pe.x+on+"px"),K>=et&&(K=et),K>=oe&&(K=oe),K<=Be&&(K=Be),n.style.width=K+"px",C.aspectRatio==="content"?(n.style.height=(K-$n-Re)/Ve+yt+dt+ht+le+"px",C.containment&&(je=n.overlaps(Ce),je.bottom<=C.containment[2]&&(n.style.height=te+"px",n.style.width=te*Ve+"px"))):C.aspectRatio==="panel"&&(n.style.height=K/Te+"px",C.containment&&(je=n.overlaps(Ce),je.bottom<=C.containment[2]&&(n.style.height=te+"px",n.style.width=te*Te+"px")))):it.contains("jsPanel-resizeit-n")?(Q=ct+(Ke-Ge)*De/Pe.y+ne,Q<=Je&&Q>=me&&Q<=ot&&(n.style.top=Ue+(Ge-Ke)/Pe.y+hn+"px"),Q>=ot&&(Q=ot),Q>=Je&&(Q=Je),Q<=me&&(Q=me),n.style.height=Q+"px",C.aspectRatio==="content"?(n.style.width=(Q-yt-dt-ht-le)*Ve+ht+le+"px",C.containment&&(je=n.overlaps(Ce),je.right<=C.containment[1]&&(n.style.width=pe+"px",n.style.height=pe/Ve+"px"))):C.aspectRatio==="panel"&&(n.style.width=Q*Te+"px",C.containment&&(je=n.overlaps(Ce),je.right<=C.containment[1]&&(n.style.width=pe+"px",n.style.height=pe/Te+"px")))):it.contains("jsPanel-resizeit-se")?(K=Xe+(Le-Fe)*De/Pe.x+St,K>=pe&&(K=pe),K>=oe&&(K=oe),K<=Be&&(K=Be),n.style.width=K+"px",De===2&&(n.style.left=st-(Le-Fe)+"px"),C.aspectRatio&&(n.style.height=K/Te+"px"),Q=ct+(Ge-Ke)*De/Pe.y+ne,Q>=te&&(Q=te),Q>=Je&&(Q=Je),Q<=me&&(Q=me),n.style.height=Q+"px",De===2&&(n.style.top=Ue-(Ge-Ke)+"px"),C.aspectRatio==="content"?(n.style.width=(Q-yt-dt-ht-le)*Ve+ht+le+"px",C.containment&&(je=n.overlaps(Ce),je.right<=C.containment[1]&&(n.style.width=pe+"px",n.style.height=pe/Ve+"px"))):C.aspectRatio==="panel"&&(n.style.width=Q*Te+"px",C.containment&&(je=n.overlaps(Ce),je.right<=C.containment[1]&&(n.style.width=pe+"px",n.style.height=pe/Te+"px")))):it.contains("jsPanel-resizeit-sw")?(Q=ct+(Ge-Ke)*De/Pe.y+ne,Q>=te&&(Q=te),Q>=Je&&(Q=Je),Q<=me&&(Q=me),n.style.height=Q+"px",De===2&&(n.style.top=Ue-(Ge-Ke)+"px"),C.aspectRatio&&(n.style.width=Q*Te+"px"),K=Xe+(Fe-Le)*De/Pe.x+St,K<=oe&&K>=Be&&K<=et&&(n.style.left=st+(Le-Fe)/Pe.x+on+"px"),K>=et&&(K=et),K>=oe&&(K=oe),K<=Be&&(K=Be),n.style.width=K+"px",C.aspectRatio==="content"?(n.style.height=(K-$n-Re)/Ve+yt+dt+ht+le+"px",C.containment&&(je=n.overlaps(Ce),je.bottom<=C.containment[2]&&(n.style.height=te+"px",n.style.width=te*Ve+"px"))):C.aspectRatio==="panel"&&(n.style.height=K/Te+"px",C.containment&&(je=n.overlaps(Ce),je.bottom<=C.containment[2]&&(n.style.height=te+"px",n.style.width=te*Te+"px")))):it.contains("jsPanel-resizeit-ne")?(K=Xe+(Le-Fe)*De/Pe.x+St,K>=pe&&(K=pe),K>=oe&&(K=oe),K<=Be&&(K=Be),n.style.width=K+"px",De===2&&(n.style.left=st-(Le-Fe)+"px"),C.aspectRatio&&(n.style.height=K/Te+"px"),Q=ct+(Ke-Ge)*De/Pe.y+ne,Q<=Je&&Q>=me&&Q<=ot&&(n.style.top=Ue+(Ge-Ke)/Pe.y+hn+"px"),Q>=ot&&(Q=ot),Q>=Je&&(Q=Je),Q<=me&&(Q=me),n.style.height=Q+"px",C.aspectRatio==="content"?(n.style.width=(Q-yt-dt-ht-le)*Ve+ht+le+"px",C.containment&&(je=n.overlaps(Ce),je.right<=C.containment[1]&&(n.style.width=pe+"px",n.style.height=pe/Ve+"px"))):C.aspectRatio==="panel"&&(n.style.width=Q*Te+"px",C.containment&&(je=n.overlaps(Ce),je.right<=C.containment[1]&&(n.style.width=pe+"px",n.style.height=pe/Te+"px")))):it.contains("jsPanel-resizeit-nw")&&(C.aspectRatio&&it.contains("jsPanel-resizeit-nw")&&(Le=Ge*kt,Ge=Le/kt),K=Xe+(Fe-Le)*De/Pe.x+St,K<=oe&&K>=Be&&K<=et&&(n.style.left=st+(Le-Fe)/Pe.x+on+"px"),K>=et&&(K=et),K>=oe&&(K=oe),K<=Be&&(K=Be),n.style.width=K+"px",C.aspectRatio&&(n.style.height=K/Te+"px"),Q=ct+(Ke-Ge)*De/Pe.y+ne,Q<=Je&&Q>=me&&Q<=ot&&(n.style.top=Ue+(Ge-Ke)/Pe.y+hn+"px"),Q>=ot&&(Q=ot),Q>=Je&&(Q=Je),Q<=me&&(Q=me),n.style.height=Q+"px",C.aspectRatio==="content"?n.style.width=(Q-yt-dt-ht-le)*Ve+ht+le+"px":C.aspectRatio==="panel"&&(n.style.width=Q*Te+"px")),window.getSelection().removeAllRanges();const Zt=window.getComputedStyle(n),qe={left:parseFloat(Zt.left),top:parseFloat(Zt.top),right:parseFloat(Zt.right),bottom:parseFloat(Zt.bottom),width:parseFloat(Zt.width),height:parseFloat(Zt.height)};C.resize.length&&z.processCallbacks(n,C.resize,!1,qe,ve)},z.pointermove.forEach(ve=>document.addEventListener(ve,de,!1)),window.addEventListener("mouseout",We,!1)})}),z.pointerup.forEach(function(Oe){document.addEventListener(Oe,Me),window.removeEventListener("mouseout",We)}),m.disable&&(_e.style.pointerEvents="none")}),n},n.resizeit=m=>{const v=n.querySelectorAll(".jsPanel-resizeit-handle");return m==="disable"?v.forEach(E=>E.style.pointerEvents="none"):v.forEach(E=>E.style.pointerEvents="auto"),n},n.getScaleFactor=()=>{const m=n.getBoundingClientRect();return{x:m.width/n.offsetWidth,y:m.height/n.offsetHeight}},n.calcSizeFactors=()=>{const m=window.getComputedStyle(n);if(e.container==="window")n.hf=parseFloat(m.left)/(window.innerWidth-parseFloat(m.width)),n.vf=parseFloat(m.top)/(window.innerHeight-parseFloat(m.height));else if(n.parentElement){let v=n.parentElement.getBoundingClientRect();n.hf=parseFloat(m.left)/(v.width-parseFloat(m.width)),n.vf=parseFloat(m.top)/(v.height-parseFloat(m.height))}},n.saveCurrentDimensions=()=>{const m=window.getComputedStyle(n);n.currentData.width=m.width,n.currentData.height=m.height},n.saveCurrentPosition=()=>{const m=window.getComputedStyle(n);n.currentData.left=m.left,n.currentData.top=m.top},n.reposition=(...m)=>{let v=e.position,E=!0,b;return m.forEach(C=>{typeof C=="string"||typeof C=="object"?v=C:typeof C=="boolean"?E=C:typeof C=="function"&&(b=C)}),z.position(n,v),n.slaves&&n.slaves.size>0&&n.slaves.forEach(C=>C.reposition()),E&&n.saveCurrentPosition(),b&&b.call(n,n),n},n.repositionOnSnap=m=>{let v="0",E="0",b=z.pOcontainment(e.dragit.containment);if(e.dragit.snap.containment)switch(m){case"left-top":v=b[3],E=b[0];break;case"right-top":v=-b[1],E=b[0];break;case"right-bottom":v=-b[1],E=-b[2];break;case"left-bottom":v=b[3],E=-b[2];break;case"center-top":v=b[3]/2-b[1]/2,E=b[0];break;case"center-bottom":v=b[3]/2-b[1]/2,E=-b[2];break;case"left-center":v=b[3],E=b[0]/2-b[2]/2;break;case"right-center":v=-b[1],E=b[0]/2-b[2]/2;break}z.position(n,m),z.setStyles(n,{left:`calc(${n.style.left} + ${v}px)`,top:`calc(${n.style.top} + ${E}px)`})},n.overlaps=(m,v,E)=>{let b=n.getBoundingClientRect(),C=getComputedStyle(n.parentElement),de=n.getScaleFactor(),ye={top:0,right:0,bottom:0,left:0},K,Q=0,Xe=0,ct=0,sn=0;n.options.container!=="window"&&v==="paddingbox"&&(ye.top=parseInt(C.borderTopWidth,10)*de.y,ye.right=parseInt(C.borderRightWidth,10)*de.x,ye.bottom=parseInt(C.borderBottomWidth,10)*de.y,ye.left=parseInt(C.borderLeftWidth,10)*de.x),typeof m=="string"?m==="window"?K={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}:m==="parent"?K=n.parentElement.getBoundingClientRect():K=document.querySelector(m).getBoundingClientRect():K=m.getBoundingClientRect(),E&&(Q=E.touches?E.touches[0].clientX:E.clientX,Xe=E.touches?E.touches[0].clientY:E.clientY,ct=Q-K.left,sn=Xe-K.top);let We=b.left<K.right&&b.right>K.left,Me=b.top<K.bottom&&b.bottom>K.top;return{overlaps:We&&Me,top:b.top-K.top-ye.top,right:K.right-b.right-ye.right,bottom:K.bottom-b.bottom-ye.bottom,left:b.left-K.left-ye.left,parentBorderWidth:ye,panelRect:b,referenceRect:K,pointer:{clientX:Q,clientY:Xe,left:ct-ye.left,top:sn-ye.top,right:K.width-ct-ye.right,bottom:K.height-sn-ye.bottom}}},n.setSize=()=>{if(e.panelSize){const m=z.pOsize(n,e.panelSize);n.style.width=m.width,n.style.height=m.height}else if(e.contentSize){const m=z.pOsize(n,e.contentSize);n.content.style.width=m.width,n.content.style.height=m.height,n.style.width=m.width,n.content.style.width="100%"}return n},n.resize=(...m)=>{let v=window.getComputedStyle(n),E={width:v.width,height:v.height},b=!0,C;m.forEach(K=>{typeof K=="string"?E=K:typeof K=="object"?E=Object.assign(E,K):typeof K=="boolean"?b=K:typeof K=="function"&&(C=K)});let de=z.pOsize(n,E);n.style.width=de.width,n.style.height=de.height,n.slaves&&n.slaves.size>0&&n.slaves.forEach(K=>K.reposition()),b&&n.saveCurrentDimensions(),n.status="normalized";let ye=n.controlbar.querySelector(".jsPanel-btn-smallify");return ye&&(ye.style.transform="rotate(0deg)"),C&&C.call(n,n),n.calcSizeFactors(),n},n.windowResizeHandler=m=>{if(m.target===window){let v=n.status,E=e.onwindowresize,b,C;if(v==="maximized"&&E)n.maximize(!1,!0);else if(n.snapped&&v!=="minimized")n.snap(n.snapped,!0);else if(v==="normalized"||v==="smallified"||v==="maximized"){let de=typeof E;de==="boolean"?(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",C=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=C<=0?0:C+"px"):de==="function"?E.call(n,m,n):de==="object"&&(E.preset===!0&&(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",C=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=C<=0?0:C+"px"),E.callback.call(n,m,n))}else v==="smallifiedmax"&&E&&n.maximize(!1,!0).smallify();n.slaves&&n.slaves.size>0&&n.slaves.forEach(de=>de.reposition())}},n.setControls=(m,v)=>(n.header.querySelectorAll(".jsPanel-btn").forEach(E=>{const b=E.className.split("-"),C=b[b.length-1];n.getAttribute(`data-btn${C}`)!=="hidden"&&(E.style.display="block")}),m.forEach(E=>{const b=n.controlbar.querySelector(E);b&&(b.style.display="none")}),v&&v.call(n,n),n),n.setControlStatus=(m,v="enable",E)=>{const b=n.controlbar.querySelector(`.jsPanel-btn-${m}`);switch(v){case"disable":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"disabled"),b.style.pointerEvents="none",b.style.opacity=.4,b.style.cursor="default");break;case"hide":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"hidden"),b.style.display="none");break;case"show":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"enabled"),b.style.display="block",b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"enable":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.getAttribute(`data-btn${m}`)==="hidden"&&(b.style.display="block"),n.setAttribute(`data-btn${m}`,"enabled"),b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"remove":n.controlbar.removeChild(b),n.setAttribute(`data-btn${m}`,"removed");break}return E&&E.call(n,n),n},n.setControlSize=m=>{const v=m.toLowerCase();n.controlbar.querySelectorAll(".jsPanel-btn").forEach(b=>{["jsPanel-btn-xl","jsPanel-btn-lg","jsPanel-btn-md","jsPanel-btn-sm","jsPanel-btn-xs"].forEach(C=>b.classList.remove(C)),b.classList.add(`jsPanel-btn-${v}`)}),v==="xl"?n.titlebar.style.fontSize="1.5rem":v==="lg"?n.titlebar.style.fontSize="1.25rem":v==="md"?n.titlebar.style.fontSize="1.05rem":v==="sm"?n.titlebar.style.fontSize=".9rem":v==="xs"&&(n.titlebar.style.fontSize=".8rem")},n.setHeaderControls=m=>{if(n.options.headerControls.add){let C=n.options.headerControls.add;Array.isArray(C)||(C=[C]),C.forEach(de=>n.addControl(de))}let v=[];n.controlbar.querySelectorAll(".jsPanel-btn").forEach(C=>{let de=C.className.match(/jsPanel-btn-[a-z\d]{3,}/i),ye=de[0].substring(12);v.push(ye)});const b=z.pOheaderControls(e.headerControls);return e.headerControls=b,v.forEach(C=>{b[C]&&n.setControlStatus(C,b[C])}),n.setControlSize(b.size),m&&m.call(n,n),n},n.setHeaderLogo=(m,v)=>{let E=[n.headerlogo],b=document.querySelector("#"+n.id+"-min");return b&&E.push(b.querySelector(".jsPanel-headerlogo")),typeof m=="string"?m.startsWith("<")?E.forEach(C=>C.innerHTML=m):E.forEach(C=>{z.emptyNode(C);let de=document.createElement("img");de.src=m,C.append(de)}):E.forEach(C=>{z.emptyNode(C),C.append(m)}),n.headerlogo.childNodes.forEach(C=>{C.nodeName&&C.nodeName==="IMG"&&C.setAttribute("draggable","false")}),v&&v.call(n,n),n},n.setHeaderRemove=m=>(n.removeChild(n.header),n.content.classList.add("jsPanel-content-noheader"),["close","maximize","normalize","minimize","smallify"].forEach(v=>n.setAttribute(`data-btn${v}`,"removed")),m&&m.call(n,n),n),n.setHeaderTitle=(m,v)=>{let E=[n.headertitle],b=document.querySelector("#"+n.id+"-min");return b&&E.push(b.querySelector(".jsPanel-title")),typeof m=="string"?E.forEach(C=>C.innerHTML=m):typeof m=="function"?E.forEach(C=>{z.emptyNode(C),C.innerHTML=m()}):E.forEach(C=>{z.emptyNode(C),C.append(m)}),v&&v.call(n,n),n},n.setIconfont=(m,v=n,E)=>{if(m){let b,C;if(m==="fa"||m==="far"||m==="fal"||m==="fas"||m==="fad")b=[`${m} fa-window-close`,`${m} fa-window-maximize`,`${m} fa-window-restore`,`${m} fa-window-minimize`,`${m} fa-chevron-up`];else if(m==="material-icons")b=[m,m,m,m,m,m],C=["close","fullscreen","fullscreen_exit","call_received","expand_less"];else if(Array.isArray(m))b=[`custom-control-icon ${m[4]}`,`custom-control-icon ${m[3]}`,`custom-control-icon ${m[2]}`,`custom-control-icon ${m[1]}`,`custom-control-icon ${m[0]}`];else if(m==="bootstrap"||m==="glyphicon")b=["glyphicon glyphicon-remove","glyphicon glyphicon-fullscreen","glyphicon glyphicon-resize-full","glyphicon glyphicon-minus","glyphicon glyphicon-chevron-up"];else return v;v.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(de=>z.emptyNode(de).innerHTML="<span></span>"),Array.prototype.slice.call(v.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((de,ye)=>{de.className=b[ye],m==="material-icons"&&(de.textContent=C[ye])})}return E&&E.call(v,v),v},n.addToolbar=(m,v,E)=>{if(m==="header"?m=n.headertoolbar:m==="footer"&&(m=n.footer),typeof v=="string")m.innerHTML=v;else if(Array.isArray(v))v.forEach(b=>{typeof b=="string"?m.innerHTML+=b:m.append(b)});else if(typeof v=="function"){let b=v.call(n,n);typeof b=="string"?m.innerHTML=b:m.append(b)}else m.append(v);return m.classList.add("active"),E&&E.call(n,n),n},n.addCloseControl=()=>{let m=document.createElement("button"),v=n.content.style.color;return m.classList.add("jsPanel-addCloseCtrl"),m.innerHTML=z.icons.close,m.style.color=v,n.options.rtl&&m.classList.add("rtl"),n.appendChild(m),z.pointerup.forEach(E=>{m.addEventListener(E,b=>{if(b.preventDefault(),b.button&&b.button>0)return!1;n.close(null,!0)})}),z.pointerdown.forEach(E=>{m.addEventListener(E,b=>b.preventDefault())}),n},n.addControl=m=>{if(!m.html)return n;m.position||(m.position=1);const v=n.controlbar.querySelectorAll(".jsPanel-btn").length;let E=document.createElement("button");E.innerHTML=m.html,E.className=`jsPanel-btn jsPanel-btn-${m.name} jsPanel-btn-${e.headerControls.size}`,E.style.color=n.header.style.color,m.position>v?n.controlbar.append(E):n.controlbar.insertBefore(E,n.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${m.position})`));const b=m.ariaLabel||m.name;return b&&E.setAttribute("aria-label",b),z.pointerup.forEach(C=>{E.addEventListener(C,de=>{if(de.preventDefault(),de.button&&de.button>0)return!1;m.handler.call(n,n,E)})}),m.afterInsert&&m.afterInsert.call(E,E),n},n.setRtl=()=>{[n.header,n.content,n.footer].forEach(m=>{m.dir="rtl",e.rtl.lang&&(m.lang=e.rtl.lang)})},n.id=e.id,n.classList.add("jsPanel-"+e.paneltype),e.paneltype==="standard"&&(n.style.zIndex=this.zi.next()),i.append(n),n.front(!1,!1),n.setTheme(e.theme),e.boxShadow&&n.classList.add(`jsPanel-depth-${e.boxShadow}`),e.header){if(e.headerLogo&&n.setHeaderLogo(e.headerLogo),n.setIconfont(e.iconfont),n.setHeaderTitle(e.headerTitle),n.setHeaderControls(),z.isIE){let m=[n.headerbar,n.controlbar];switch(n.options.headerControls.size){case"md":m.forEach(v=>{v.style.height="34px"});break;case"xs":m.forEach(v=>{v.style.height="26px"});break;case"sm":m.forEach(v=>{v.style.height="30px"});break;case"lg":m.forEach(v=>{v.style.height="38px"});break;case"xl":m.forEach(v=>{v.style.height="42px"});break}}if(e.header==="auto-show-hide"){let m="jsPanel-depth-"+e.boxShadow;n.header.style.opacity=0,n.style.backgroundColor="transparent",this.remClass(n,m),this.setClass(n.content,m),n.header.addEventListener("mouseenter",()=>{n.header.style.opacity=1,z.setClass(n,m),z.remClass(n.content,m)}),n.header.addEventListener("mouseleave",()=>{n.header.style.opacity=0,z.remClass(n,m),z.setClass(n.content,m)})}}else n.setHeaderRemove(),e.addCloseControl&&n.addCloseControl();if(e.headerToolbar&&n.addToolbar(n.headertoolbar,e.headerToolbar),e.footerToolbar&&n.addToolbar(n.footer,e.footerToolbar),e.border&&n.setBorder(e.border),e.borderRadius&&n.setBorderRadius(e.borderRadius),e.css)for(const[m,v]of Object.entries(e.css))if(m==="panel")n.className+=` ${v}`;else{let E=n.querySelector(`.jsPanel-${m}`);E&&(E.className+=` ${v}`)}if(e.content&&(typeof e.content=="function"?e.content.call(n,n):typeof e.content=="string"?n.content.innerHTML=e.content:n.content.append(e.content)),e.contentAjax&&this.ajax(e.contentAjax,n),e.contentFetch&&this.fetch(e.contentFetch,n),e.contentOverflow){const m=e.contentOverflow.split(" ");m.length===1?n.content.style.overflow=m[0]:m.length===2&&(n.content.style.overflowX=m[0],n.content.style.overflowY=m[1])}if(e.autoclose){typeof e.autoclose=="number"?e.autoclose={time:e.autoclose+"ms"}:typeof e.autoclose=="string"&&(e.autoclose={time:e.autoclose});let m=Object.assign({},z.defaultAutocloseConfig,e.autoclose);m.time&&typeof m.time=="number"&&(m.time+="ms");let v=n.progressbar.querySelector("div");v.addEventListener("animationend",E=>{E.stopPropagation(),n.progressbar.classList.remove("active"),n.close()}),m.progressbar&&(n.progressbar.classList.add("active"),m.background?z.colorNames[m.background]?n.progressbar.style.background="#"+z.colorNames[m.background]:n.progressbar.style.background=m.background:n.progressbar.classList.add("success-bg")),v.style.animation=`${m.time} progressbar`}if(e.rtl&&n.setRtl(),n.setSize(),n.status="normalized",e.position?this.position(n,e.position):n.style.opacity=1,document.dispatchEvent(d),n.calcSizeFactors(),e.animateIn&&(n.addEventListener("animationend",()=>{this.remClass(n,e.animateIn)}),this.setClass(n,e.animateIn)),e.syncMargins){let m=this.pOcontainment(e.maximizedMargin);e.dragit&&(e.dragit.containment=m,e.dragit.snap===!0?(e.dragit.snap=z.defaultSnapConfig,e.dragit.snap.containment=!0):e.dragit.snap&&(e.dragit.snap.containment=!0)),e.resizeit&&(e.resizeit.containment=m)}if(e.dragit?(["start","drag","stop"].forEach(m=>{e.dragit[m]?typeof e.dragit[m]=="function"&&(e.dragit[m]=[e.dragit[m]]):e.dragit[m]=[]}),n.drag(e.dragit),n.addEventListener("jspaneldragstop",m=>{m.panel===n&&n.calcSizeFactors()},!1)):n.titlebar.style.cursor="default",e.resizeit){["start","resize","stop"].forEach(v=>{e.resizeit[v]?typeof e.resizeit[v]=="function"&&(e.resizeit[v]=[e.resizeit[v]]):e.resizeit[v]=[]}),n.sizeit(e.resizeit);let m;n.addEventListener("jspanelresizestart",v=>{v.panel===n&&(m=n.status)},!1),n.addEventListener("jspanelresizestop",v=>{v.panel===n&&(m==="smallified"||m==="smallifiedmax"||m==="maximized")&&parseFloat(n.style.height)>parseFloat(window.getComputedStyle(n.header).height)&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(d),document.dispatchEvent(l),e.onstatuschange&&z.processCallbacks(n,e.onstatuschange,"every"),n.calcSizeFactors())},!1)}if(n.saveCurrentDimensions(),n.saveCurrentPosition(),e.setStatus&&(e.setStatus==="smallifiedmax"?n.maximize().smallify():e.setStatus==="smallified"?n.smallify():n[e.setStatus.slice(0,-1)]()),this.pointerdown.forEach(m=>{n.addEventListener(m,v=>{!v.target.closest(".jsPanel-btn-close")&&!v.target.closest(".jsPanel-btn-minimize")&&e.paneltype==="standard"&&n.front()},!1)}),e.onwindowresize&&n.options.container==="window"&&window.addEventListener("resize",n.windowResizeHandler,!1),e.onparentresize){let m=e.onparentresize,v=typeof m,E=n.isChildpanel();if(E){const b=E.content;let C=[];n.parentResizeHandler=de=>{if(de.panel===E){C[0]=b.offsetWidth,C[1]=b.offsetHeight;let ye=n.status,K,Q;ye==="maximized"&&m?n.maximize():n.snapped&&ye!=="minimized"?n.snap(n.snapped,!0):ye==="normalized"||ye==="smallified"||ye==="maximized"?v==="function"?m.call(n,n,{width:C[0],height:C[1]}):v==="object"&&m.preset===!0?(K=(C[0]-n.offsetWidth)*n.hf,n.style.left=K<=0?0:K+"px",Q=(C[1]-n.offsetHeight)*n.vf,n.style.top=Q<=0?0:Q+"px",m.callback.call(n,n,{width:C[0],height:C[1]})):v==="boolean"&&(K=(C[0]-n.offsetWidth)*n.hf,n.style.left=K<=0?0:K+"px",Q=(C[1]-n.offsetHeight)*n.vf,n.style.top=Q<=0?0:Q+"px"):ye==="smallifiedmax"&&m&&n.maximize().smallify()}},document.addEventListener("jspanelresize",n.parentResizeHandler,!1)}}return this.globalCallbacks&&(Array.isArray(this.globalCallbacks)?this.globalCallbacks.forEach(m=>m.call(n,n)):this.globalCallbacks.call(n,n)),e.callback&&(Array.isArray(e.callback)?e.callback.forEach(m=>m.call(n,n)):e.callback.call(n,n)),t&&(Array.isArray(t)?t.forEach(m=>m.call(n,n)):t.call(n,n)),document.dispatchEvent(o),n}};const bf={id:"cell-html",name:"Cell HTML",type:"cell-renderer",version:"0.1.0",description:`Renders a cell's raw HTML value inline (unescaped); click the cell to pop the HTML open in its own window. Apply by setting a column's renderer to "html".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-html.ts"};function yf(e){customElements.get("cell-html")||customElements.define("cell-html",xf),e.ui.registerCellRenderer("html","cell-html")}function wf(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}let vf=0;class xf extends HTMLElement{constructor(){super(...arguments),this._value="",this._label="HTML"}set value(t){const r=t??"";this._value!==r&&(this._value=r,this.render())}get value(){return this._value}set column(t){this._label=t?.label??"HTML"}connectedCallback(){this.render()}render(){if(this.innerHTML="",!this._value){const r=document.createElement("span");r.style.color="#9ca3af",r.textContent="empty",this.append(r);return}const t=document.createElement("span");t.innerHTML=this._value,t.title="Click to open in a window",t.style.cssText="display:inline-block;max-width:40ch;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;vertical-align:middle;cursor:pointer",t.addEventListener("click",r=>{r.stopPropagation(),this.openWindow()}),this.append(t)}openWindow(){const t=document.createElement("div");t.style.cssText="padding:0.75rem;overflow:auto;height:100%;box-sizing:border-box",t.innerHTML=this._value,z.create({id:`easydb-html-popup-${++vf}`,container:wf(),headerTitle:this._label,theme:"#7c3aed",content:t,contentSize:"520 400",position:"center-top 0 60",minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1},resizeit:{containment:!1}})}}const $f=Object.freeze(Object.defineProperty({__proto__:null,init:yf,meta:bf},Symbol.toStringTag,{value:"Module"})),kf={id:"cell-link",name:"Cell Link",type:"cell-renderer",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-link.ts"};function Cf(e){customElements.get("cell-link")||customElements.define("cell-link",Ef),e.ui.registerCellRenderer("link","cell-link")}class Ef extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1}set value(t){const r=t==null?"":String(t);this._value!==r&&(this._value=r,this._editing=!1,this.render())}get value(){return this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="";const t=this._value,r=this._editing?null:Sf(t),i=!this._editing&&!r?_f(t):null,n=!this._editing&&!r&&!i?Tf(t):null;if(r||i||n){const o=document.createElement("span");o.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const l=document.createElement("a");l.href=r?t:i?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,r&&(l.target="_blank",l.rel="noopener noreferrer"),l.textContent=t,l.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",l.title=r?`Open ${t}`:i?`Email ${t}`:`Call ${t}`;const c=document.createElement("button");c.type="button",c.title="Edit",c.textContent="✎",c.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",c.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation(),this._editing=!0,this.render()}),o.append(l,c),this.append(o)}else{const o=document.createElement("input");o.type="text",o.value=t,o.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",o.addEventListener("change",()=>this.commit(o.value)),o.addEventListener("keydown",l=>{l.key==="Enter"?(l.preventDefault(),this.commit(o.value)):l.key==="Escape"&&(this._editing=!1,this.render())}),this.append(o),this._editing&&setTimeout(()=>{o.focus(),o.select()},0)}}commit(t){this._value=t,this._editing=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Sf(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function _f(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function Tf(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const r=t.replace(/\D/g,"");if(r.length<7||r.length>15)return null;const i=/[ ()\-.]/.test(t),n=t.startsWith("+");return!i&&!n&&r.length<10?null:t}const Af=Object.freeze(Object.defineProperty({__proto__:null,init:Cf,meta:kf},Symbol.toStringTag,{value:"Module"}));var Pf=Object.defineProperty,If=Object.getOwnPropertyDescriptor,Li=(e,t,r,i)=>{for(var n=i>1?void 0:i?If(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Pf(t,r,n),n};function Df(e,t,r){(tn.instance??Of()).show(e,t,r)}function Rf(e){if(!e)return null;if(e.source){const t=e.source.type,r=e.source.writable?"Edits you make are written back to the source.":"It is read-only — edits are not saved back to the source.";return{label:`Connected (live ${t})`,note:`This table is connected to a live ${t} backend: its rows are fetched from the source on demand and are not stored locally. ${r} Closing its window just disconnects the view — the source data is untouched.`}}return e.origin?{label:"Imported (snapshot)",note:"This table is a local snapshot imported once from its origin. The rows live in this browser, so edits stay local; use Refresh to re-fetch the latest data from the origin.",url:e.origin.url}:{label:"Local",note:"This table was created in the app and is stored locally in your browser."}}function Of(){const e=document.createElement("table-info-dialog");return document.body.appendChild(e),e}let tn=class extends Ne{constructor(){super(...arguments),this.name="",this.info=null,this.provenance=null,this.dialogEl=null,this.close=()=>this.dialogEl?.close(),this.onSubmit=e=>{e.preventDefault(),this.close()}}connectedCallback(){super.connectedCallback(),tn.instance=this}disconnectedCallback(){super.disconnectedCallback(),tn.instance===this&&(tn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Gt(this.dialogEl,e)}show(e,t,r){this.name=e,this.info=t,this.provenance=r??null,this.updateComplete.then(()=>this.dialogEl?.showModal())}row(e,t,r){if(!t&&!r)return be;const i=r?I`<a href=${r} target="_blank" rel="noopener noreferrer">${t||r}</a>`:I`${t}`;return I`<dt>${e}</dt>
      <dd>${i}</dd>`}render(){const e=this.info,t=!!(e?.source||e?.sourceUrl||e?.license||e?.licenseUrl||e?.about||e?.aboutUrl),r=Rf(this.provenance);return I`
      <dialog @cancel=${this.close} @keydown=${Vt}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>×</button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>${this.name}</h2>
            <div class="header-actions">
              <button type="submit" class="ghost">Close</button>
            </div>
          </div>
          <div class="dialog-body">
            ${r?I`<div class="kind">
                  <span class="kind-label">${r.label}</span>
                  <p class="kind-note">${r.note}</p>
                  ${r.url?I`<div class="kind-origin">
                        <a href=${r.url} target="_blank" rel="noopener noreferrer">${r.url}</a>
                      </div>`:be}
                </div>`:be}
            ${e?.descriptionHtml?I`<div class="desc">${rr(e.descriptionHtml)}</div>`:e?.description?I`<div class="desc">${e.description}</div>`:be}
            ${t?I`<dl>
                  ${this.row("Source",e?.source,e?.sourceUrl)}
                  ${this.row("License",e?.license,e?.licenseUrl)}
                  ${this.row("About",e?.about,e?.aboutUrl)}
                </dl>`:be}
            ${!e?.description&&!e?.descriptionHtml&&!t&&!r?I`<p class="empty">No additional information.</p>`:be}
          </div>
        </form>
      </dialog>
    `}};tn.instance=null;tn.styles=[Kt,He`
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
    `];Li([W()],tn.prototype,"name",2);Li([W()],tn.prototype,"info",2);Li([W()],tn.prototype,"provenance",2);tn=Li([tt("table-info-dialog")],tn);const jf=.25,zf=4;function Ff(e){return Math.min(zf,Math.max(jf,e))}function $a(e,t,r){return{x:e.x+t,y:e.y+r,scale:e.scale}}const Cr={x:0,y:0,scale:1};function ka(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function Lf(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function Mf(e,t){let r={...Cr};t.style.transformOrigin="0 0";const i=new Set,n=()=>{t.style.transform=`translate(${r.x}px, ${r.y}px) scale(${r.scale})`;for(const v of i)v({...r})};let o="none",l={...Cr},c=0,d=0,g=0,x=0,y=0,S=0;const U=(v,E)=>{const b=e.getBoundingClientRect();return{x:v-b.left,y:E-b.top}},N=v=>{if(v.touches.length===2){o="pinch",l={...r};const[E,b]=[v.touches[0],v.touches[1]];g=ka(E,b)||1;const C=U((E.clientX+b.clientX)/2,(E.clientY+b.clientY)/2);x=(C.x-r.x)/r.scale,y=(C.y-r.y)/r.scale,v.preventDefault();return}if(v.touches.length===1&&!Lf(v.target)){const E=v.timeStamp;if(E-S<300){r={...Cr},n(),S=0,o="none",v.preventDefault();return}S=E,o="pan",l={...r},c=v.touches[0].clientX,d=v.touches[0].clientY}else o="none"},F=v=>{if(o==="pan"&&v.touches.length===1){const E=v.touches[0];r=$a(l,E.clientX-c,E.clientY-d),n(),v.preventDefault()}else if(o==="pinch"&&v.touches.length>=2){const[E,b]=[v.touches[0],v.touches[1]],C=Ff(l.scale*(ka(E,b)/g)),de=U((E.clientX+b.clientX)/2,(E.clientY+b.clientY)/2);r={x:de.x-x*C,y:de.y-y*C,scale:C},n(),v.preventDefault()}},q=v=>{v.touches.length===0?o="none":v.touches.length===1&&o==="pinch"&&(o="pan",l={...r},c=v.touches[0].clientX,d=v.touches[0].clientY)};let G=!1,he={...Cr},ee=0,ie=0,V=!1;const J=(v,E)=>{const b=e.getBoundingClientRect();return v>=b.left&&v<=b.right&&E>=b.top&&E<=b.bottom},ue=v=>{if(!G)return;const E=v.clientX-ee,b=v.clientY-ie;!V&&Math.hypot(E,b)<4||(V=!0,document.body.style.cursor="grabbing",r=$a(he,E,b),n(),v.preventDefault())},we=()=>{G&&(G=!1,document.body.style.cursor="",window.removeEventListener("mousemove",ue,!0),window.removeEventListener("mouseup",Ae,!0))};function Ae(){we()}const $e=v=>{v.button===2&&J(v.clientX,v.clientY)&&(G=!0,V=!1,he={...r},ee=v.clientX,ie=v.clientY,window.addEventListener("mousemove",ue,!0),window.addEventListener("mouseup",Ae,!0))},m=v=>{V&&(v.preventDefault(),V=!1)};return e.addEventListener("touchstart",N,{passive:!1}),e.addEventListener("touchmove",F,{passive:!1}),e.addEventListener("touchend",q),e.addEventListener("touchcancel",q),window.addEventListener("mousedown",$e,!0),window.addEventListener("contextmenu",m,!0),{snapshot:()=>({...r}),reset:()=>{r={...Cr},n()},restore:v=>{r={...v},n()},subscribe:v=>(i.add(v),()=>i.delete(v)),dispose:()=>{e.removeEventListener("touchstart",N),e.removeEventListener("touchmove",F),e.removeEventListener("touchend",q),e.removeEventListener("touchcancel",q),window.removeEventListener("mousedown",$e,!0),window.removeEventListener("contextmenu",m,!0),we()}}}function Ml(e,t){let r=null;const i=n=>{const o=document.getElementById(e);o&&(o.style.transformOrigin="0 0",o.style.transform=`translate(${-n.x/n.scale}px, ${-n.y/n.scale}px) scale(${1/n.scale})`)};return{enter(){const n=t();r||!n||(i(n.snapshot()),r=n.subscribe(i))},exit(){r?.(),r=null;const n=document.getElementById(e);n&&(n.style.transform="",n.style.transformOrigin="")}}}const Bf=200,Nf=100;function Uf(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<Bf||e.h<Nf?null:{...e}}var qf=Object.defineProperty,Hf=Object.getOwnPropertyDescriptor,Nr=(e,t,r,i)=>{for(var n=i>1?void 0:i?Hf(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&qf(t,r,n),n};let Vn=class extends Ne{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return I`<button
        class="icon ${e?"active":""}"
        title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"}
        @click=${this.openSearch}
      >
        <span class="mi sm">search</span>
      </button>`}return I`<input
      type="search"
      placeholder="search…"
      .value=${this.query}
      @input=${this.onInput}
      @blur=${this.onBlur}
    />`}};Vn.styles=[Yt,He`
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
    `];Nr([Mt({type:String})],Vn.prototype,"tableId",2);Nr([W()],Vn.prototype,"query",2);Nr([W()],Vn.prototype,"open",2);Nr([dn("input")],Vn.prototype,"inputEl",2);Vn=Nr([tt("panel-search")],Vn);var Wf=Object.defineProperty,Kf=Object.getOwnPropertyDescriptor,ur=(e,t,r,i)=>{for(var n=i>1?void 0:i?Kf(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Wf(t,r,n),n};let Rn=class extends Ne{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.rowsActive=!1,this.runTableButton=async(e,t)=>{const r=t?.currentTarget??void 0,i=await ge();try{await Promise.resolve(e.onClick(i.api,{tableId:this.tableId,anchor:r}))}catch(n){console.error(`[table-button:${e.id}]`,n)}}}async connectedCallback(){super.connectedCallback();const e=await ge();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(r=>r.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await ge();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await ge(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const r={};for(const i of t.columns)r[i.field]=Vf(i);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:r,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}render(){return I`
      <button title="Add a blank row" aria-label="Add row" @click=${this.addRow}>
        <span class="mi sm">add</span>
      </button>
      <button title="Edit columns" aria-label="Columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span>
      </button>
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>I`<button
              class=${e.danger?"danger":""}
              title=${e.tooltip??e.label}
              aria-label=${e.label}
              @click=${t=>this.runTableButton(e,t)}
            >
              ${e.icon?e.icon.trimStart().startsWith("<svg")?I`<span class="icon-svg">${Gs(e.icon)}</span>`:I`<span class="mi sm">${e.icon}</span>`:I`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};Rn.styles=[Yt,He`
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
    `];ur([Mt({type:String})],Rn.prototype,"tableId",2);ur([Mt({type:Boolean})],Rn.prototype,"active",2);ur([W()],Rn.prototype,"rowCount",2);ur([W()],Rn.prototype,"tableButtons",2);ur([W()],Rn.prototype,"table",2);Rn=ur([tt("panel-footer")],Rn);function Vf(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function ys(e){return e.title?.trim()?e.title.trim():e.name}function Gf(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function Yf(e){const t=document.querySelector("app-shell")?.shadowRoot,r=t?.querySelector("header"),i=t?.querySelector("footer");r&&(e.style.top=`${r.offsetHeight}px`),i&&(e.style.bottom=`${i.offsetHeight}px`)}const gn=new Map,Bl=new Set;let Ca=!1,oo=null;function Nl(){return oo}function Xf(e){const t=gn.get(e);return t?(t.status==="minimized"&&t.normalize?.(),t.front?.(),!0):(Qf(e),!0)}async function Qf(e){const t=await ge(),r=await t.store.tables.findOne(e);r?.windowGeometry?.closed&&await t.store.tables.patch(e,{windowGeometry:{...r.windowGeometry,closed:!1},updatedAt:Date.now()})}async function Jf(e){const t=await ge();await op(e,t)}async function Zf(){if(Ca)return;Ca=!0;const e=await ge(),t=document.getElementById("easydb-panels"),r=document.getElementById("easydb-panels-viewport");if(t&&r){oo=Mf(t,r);const n=()=>Yf(t);n(),window.addEventListener("resize",n);const o=document.querySelector("app-shell")?.shadowRoot,l=o?.querySelector("header"),c=o?.querySelector("footer");if(typeof ResizeObserver<"u"&&(l||c)){const d=new ResizeObserver(n);l&&d.observe(l),c&&d.observe(c)}}const i=(await e.store.tables.find()).filter(n=>n.workspaceId===e.workspaceId);i.sort(ws);for(const n of i)n.windowGeometry?.closed||Ea(n,e);e.store.tables.subscribe(n=>{const o=n.filter(d=>d.workspaceId===e.workspaceId),l=new Map(o.map(d=>[d.id,d]));for(const[d,g]of gn){const x=l.get(d);if(!x||x.windowGeometry?.closed){gn.delete(d),Bl.add(d);try{g.status!=="closed"&&g.close()}catch{}}}const c=o.filter(d=>!gn.has(d.id)&&!d.windowGeometry?.closed).sort(ws);for(const d of c)Ea(d,e)}),document.addEventListener("easydb:restack-windows",()=>{let n=0;const o=async()=>{const l=(await e.store.tables.find()).filter(c=>c.workspaceId===e.workspaceId&&!c.windowGeometry?.minimized).sort(ws);if(n<12&&!l.every(c=>gn.has(c.id))){n++,setTimeout(()=>void o(),80);return}for(const c of l)try{gn.get(c.id)?.front?.()}catch{}};o()})}function ws(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const ep=720,tp=360;function Ea(e,t){const r=`panel-${Ul(e.id)}`,i=Gf(),n=Uf(e.windowGeometry),o=n?.minimized===!0,l=()=>{const E=document.createElement("data-table");return E.tableId=e.id,E.style.height="100%",E},c=o?document.createElement("div"):l();let d=o?null:c,g=ys(e),x=-1,y=-1;const S=()=>{typeof V.setHeaderTitle=="function"&&V.setHeaderTitle(g+gl(x,y))},U=E=>{const b=E.detail;b.key===e.id&&(x=b.count,y=b.total,S())};document.addEventListener(Ci,U);const N=()=>{G.active=!1,d?.remove(),d=null},F=()=>{if(d)return;const E=document.getElementById(r)?.querySelector(".jsPanel-content");if(!E)return;E.replaceChildren();const b=l();E.appendChild(b),d=b,G.active=!0},q=document.createElement("panel-search");q.tableId=e.id;const G=document.createElement("panel-footer");G.tableId=e.id,G.active=!o;const he=Ml(r,()=>oo),ee=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:rp(),ie=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:`${ep} ${tp}`},V=z.create({id:r,container:i,headerTitle:g,footerToolbar:G,theme:"primary",content:c,...ie,position:ee,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>vs(e.id,t)},resizeit:{containment:!1,stop:()=>vs(e.id,t)},onfronted:()=>sp(e.id,t),onclosed:async()=>{if(gn.delete(e.id),Bl.delete(e.id))return;const E=await t.store.tables.findOne(e.id);if(!E)return;const b=E.windowGeometry??{x:60,y:60,w:720,h:360,z:1,minimized:!1,maximized:!1};await t.store.tables.patch(e.id,{windowGeometry:{...b,closed:!0},updatedAt:Date.now()})},onstatuschange:E=>{E.status==="minimized"?N():(E.status==="normalized"||E.status==="maximized")&&F(),E.status==="maximized"?he.enter():he.exit(),vs(e.id,t)}});gn.set(e.id,V);const J=document.getElementById(r),ue=J?.querySelector(".jsPanel-controlbar");ue&&ue.prepend(q);const we=J?.querySelector(".jsPanel-titlebar");we&&(we.tabIndex=-1,we.style.outline="none",we.addEventListener("pointerdown",()=>we.focus()));let Ae=null;const $e=document.createElement("button");$e.type="button",$e.title="Table info",$e.setAttribute("aria-label","Table info"),$e.className="eda-info-btn",$e.textContent="ⓘ",$e.style.cssText="display:none;background:none;border:0;color:inherit;cursor:pointer;font-size:1rem;line-height:1;padding:0 0.3rem;",$e.addEventListener("click",E=>{E.stopPropagation(),Ae&&Df(g,Ae.info??{},{source:Ae.source,origin:Ae.origin})}),ue?.prepend($e);const m=E=>{Ae=E??null;const b=!!(E?.info||E?.source||E?.origin);$e.style.display=b?"inline-flex":"none"};m(e),n?.maximized&&typeof V.maximize=="function"?queueMicrotask(()=>V.maximize?.()):n?.minimized&&typeof V.minimize=="function"&&queueMicrotask(()=>V.minimize?.()),t.store.tables.subscribe(E=>{const b=E.find(C=>C.id===e.id);b&&(m(b),ys(b)!==g&&(g=ys(b),S()))});const v=V.close.bind(V);V.close=()=>(document.removeEventListener(Ci,U),v())}let np=0;function rp(){const e=np++;return{my:"left-top",at:"left-top",offsetX:40+e%8*30,offsetY:80+e%8*30}}async function vs(e,t){const r=document.getElementById(`panel-${Ul(e)}`);if(!r)return;const i=gn.get(e)?.status??"normalized";try{const o=(await t.store.tables.findOne(e))?.windowGeometry,l=i==="minimized",c=i==="maximized";let d=r.offsetLeft,g=r.offsetTop,x=r.offsetWidth,y=r.offsetHeight;(l||c)&&o&&(d=o.x,g=o.y,x=o.w,y=o.h),d<=-9e3&&(d=o?.x??40);const S={x:d,y:g,w:x,h:y,z:o?.z??0,minimized:l,maximized:c};await t.store.tables.patch(e,{windowGeometry:S,updatedAt:Date.now()})}catch{}}let xs=0;function ip(){return xs=Math.max(Date.now(),xs+1),xs}async function sp(e,t){try{const r=await t.store.tables.findOne(e);if(!r)return;const i=r.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...i,z:ip()},updatedAt:Date.now()})}catch{}}async function op(e,t){if(!(await t.store.tables.findOne(e))?.source){const i=t.store.rows(e),n=await i.find();await i.bulkRemove(n.map(o=>o.id))}await t.store.tables.remove(e)}function Ul(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}const ap={id:"delete-table",name:"Delete Table",type:"ui",version:"0.1.0",description:"Adds a trash button to each table window that permanently deletes the table and its rows (with confirmation).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/delete-table.ts"};function lp(e){e.ui.registerTableButton({id:"delete-table:delete",label:"Delete",icon:"delete",tooltip:"Delete this table permanently",onClick:async(t,r)=>{const i=await t.store.tables.findOne(r.tableId);!i||!await t.ui.dialogs.confirm(i.source?`Delete the live table "${i.name}"? Its data stays on the server — only the local connection is removed.`:`Permanently delete table "${i.name}" and all its rows? This can't be undone.`,"Delete table")||(await Jf(r.tableId),t.ui.dialogs.toast(`Deleted "${i.name}".`,{kind:"success",title:"Delete table"}))}})}const cp=Object.freeze(Object.defineProperty({__proto__:null,init:lp,meta:ap},Symbol.toStringTag,{value:"Module"}));var up=Object.defineProperty,dp=Object.getOwnPropertyDescriptor,Mi=(e,t,r,i)=>{for(var n=i>1?void 0:i?dp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&up(t,r,n),n};let fi=null;function hp(){return fi||(fi=document.createElement("top-progress"),document.body.appendChild(fi)),fi}let On=class extends Ne{constructor(){super(...arguments),this.visible=!1,this.frac=null,this.label="",this.active=new Set}static begin(e=""){return hp().begin(e)}begin(e){const t=Symbol("progress");return this.active.add(t),this.label=e,this.frac=null,this.visible=!0,{fraction:r=>{this.active.has(t)&&(this.frac=r)},done:()=>{this.active.delete(t),this.active.size===0&&(this.visible=!1,this.frac=null,this.label="")}}}render(){if(!this.visible)return I``;const e=this.frac!=null;return I`<div
      class="track"
      role="progressbar"
      aria-label=${this.label||"Loading"}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow=${e?Math.round(this.frac*100):""}
    >
      ${e?I`<div
            class="bar determinate"
            style="width:${Math.round(this.frac*100)}%"
          ></div>`:I`<div class="bar indet"></div>`}
    </div>`}};On.styles=He`
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
  `;Mi([W()],On.prototype,"visible",2);Mi([W()],On.prototype,"frac",2);Mi([W()],On.prototype,"label",2);On=Mi([tt("top-progress")],On);const ql=Object.freeze(Object.defineProperty({__proto__:null,get TopProgress(){return On}},Symbol.toStringTag,{value:"Module"}));var fp=Object.defineProperty,pp=Object.getOwnPropertyDescriptor,Hl=(e,t,r,i)=>{for(var n=i>1?void 0:i?pp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&fp(t,r,n),n};function Sa(e){return(yn.instance??mp()).open(e)}function mp(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let yn=class extends Ne{constructor(){super(...arguments),this.rows=[],this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((r,i)=>{const n=this.rows[i],o=n.field.trim(),l=n.label.trim()||o;return{...r,field:o,label:l,hidden:n.hidden}});this.finish(t)},this.toggleAllHidden=()=>{const e=this.rows.length>0&&this.rows.every(t=>t.hidden);this.rows=this.rows.map(t=>({...t,hidden:!e}))}}connectedCallback(){super.connectedCallback(),yn.instance=this}disconnectedCallback(){super.disconnectedCallback(),yn.instance===this&&(yn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Gt(this.dialogEl,e)}open(e){return this.source=e,this.rows=e.map(t=>({field:t.field,label:t.label,hidden:!!t.hidden})),new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((r,i)=>{const n=r.field.trim().toLowerCase();if(n===""){e.add(i);return}(t.get(n)??t.set(n,[]).get(n)).push(i)});for(const r of t.values())if(r.length>1)for(const i of r)e.add(i);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,r){this.rows=this.rows.map((i,n)=>n===e?{...i,[t]:r}:i)}setHidden(e,t){this.rows=this.rows.map((r,i)=>i===e?{...r,hidden:t}:r)}render(){const e=this.invalidIndices(),t=e.size;return I`
      <dialog @cancel=${this.onCancel} @keydown=${Vt}>
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
              ${this.rows.map((r,i)=>I`
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
              ${t>0?`Fix ${t} column name${t===1?"":"s"} — names must be unique and non-empty.`:be}
            </p>
          </div>
        </form>
      </dialog>
    `}};yn.instance=null;yn.styles=[Kt,He`
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
    `];Hl([W()],yn.prototype,"rows",2);yn=Hl([tt("column-names-dialog")],yn);function gp(e){let t;try{t=new URL(e)}catch{return e}const r=t.hostname.toLowerCase();if(r==="github.com"||r==="www.github.com"){const i=t.pathname.split("/").filter(Boolean);if(i.length>=5&&(i[2]==="blob"||i[2]==="raw")){const n=i[0],o=i[1];let l=i.slice(3);return l.length>=3&&l[0]==="refs"&&(l[1]==="heads"||l[1]==="tags")&&(l=l.slice(2)),`https://raw.githubusercontent.com/${[n,o,...l].join("/")}`}}return e}async function bp(e,t){const r=Number(e.headers?.get?.("content-length")),i=e.body?.getReader?.();if(i&&Number.isFinite(r)&&r>0){const n=[];let o=0;for(;;){const{done:d,value:g}=await i.read();if(d)break;g&&(n.push(g),o+=g.length,t?.(Math.min(1,o/r)))}const l=new Uint8Array(o);let c=0;for(const d of n)l.set(d,c),c+=d.length;return new TextDecoder().decode(l)}return await e.text()}var yp=Object.defineProperty,wp=Object.getOwnPropertyDescriptor,rn=(e,t,r,i)=>{for(var n=i>1?void 0:i?wp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&yp(t,r,n),n};const vp="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",xp="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",$p='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',_a=[{label:"Northwind — sample database (JSON dump)",url:vp,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:xp,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],kp={id:"import-data",name:"Import Data",type:"importer",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/import-data.ts"};function Cp(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:$p,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>Ap(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:r})=>_p(t,r)})}const Ta=50*1024*1024;function Aa(e){try{return new URL(e).host}catch{return e}}async function Ep(e){try{return(await e.text()).replace(/\s+/g," ").trim().slice(0,300)}catch{return""}}async function Sp(e,t,r={}){const i=gp(t),n=r.slowMs??2e3;let o=setTimeout(()=>{o=void 0,r.onSlow?.()},n);const l=()=>{o!==void 0&&(clearTimeout(o),o=void 0)};try{let c;try{c=await e.backend.fetch(i)}catch(g){throw new Error(`Could not reach ${Aa(i)} — no response. The server may be down, blocking cross-origin (CORS) requests, or the transfer may have failed (e.g. a very large file). [${g.message}]`)}if(!c.ok){const g=await Ep(c);throw new Error(`HTTP ${c.status} ${c.statusText||""}`.trim()+(g?` — ${g}`:""))}const d=Number(c.headers.get("content-length"));if(Number.isFinite(d)&&d>Ta)throw new Error(`Response is ${(d/(1024*1024)).toFixed(1)} MB, over the ${Ta/(1024*1024)} MB browser import limit. Import a smaller extract, or use a server/Datasette connection for large datasets.`);try{return await bp(c,r.onProgress)}catch(g){throw new Error(`Failed reading the response body from ${Aa(i)}: ${g.message}`)}}finally{l()}}async function js(e,t,r){const i={handle:null};try{return await Sp(e,t,{onSlow:()=>{i.handle=On.begin(r)},onProgress:n=>i.handle?.fraction(n)})}finally{i.handle?.done()}}async function _p(e,t){const r=await e.store.tables.findOne(t),i=r?.origin;if(i?.url)try{const n=await js(e,i.url,`Reading ${r?.name??"data"}…`);let o;if(i.type==="csv")o=Or(n).rows;else{const d=jr(JSON.parse(n),r.name),g=d.find(x=>x.name===r.name)??(d.length===1?d[0]:void 0);if(!g)throw new Error(`"${r.name}" is no longer in the dump at ${i.url}`);o=g.rows}const l=e.store.rows(t),c=await l.find();await l.bulkRemove(c.map(d=>d.id)),await l.bulkInsert(o.map(d=>({id:Tp(),tableId:t,data:d,updatedAt:Date.now()}))),e.ui.dialogs.toast(`Refreshed "${r.name}" (${o.length} rows).`,{kind:"success",title:"Refresh"})}catch(n){e.ui.dialogs.toast(`Couldn't refresh "${r?.name??t}": ${n.message}`,{kind:"error",title:"Refresh"})}}function Tp(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function Ap(e){const r=await(ft.instance??Pp()).open({async listDatabases(x){const y=wn(x);return yl(S=>e.backend.fetch(S),y.base)}});if(!r)return;const{url:i,file:n,kind:o,dbChosen:l,editColumns:c,maxRows:d}=r,g=n?.name??i;try{if(n){if(o==="csv"){const x=d!=null?await al(n,d):await n.text();await xi(e,x,n.name,{editColumns:c?Sa:void 0,maxRows:d})}else{const x=await n.text();await $i(e,x,n.name,{maxRows:d})}e.ui.dialogs.toast(`Imported ${n.name}.`,{kind:"success",title:"Import"});return}if(o==="datasette")await ro(e,i,{skipTablePicker:l});else if(o==="csv"){const x=await js(e,i,`Reading ${tr(i)}…`);await xi(e,x,tr(i),{editColumns:c?Sa:void 0,maxRows:d,origin:{type:"csv",url:i}}),e.ui.dialogs.toast(`Imported ${tr(i)}.`,{kind:"success",title:"Import"})}else{const x=await js(e,i,`Reading ${tr(i)}…`);await $i(e,x,tr(i),{originUrl:i,maxRows:d}),e.ui.dialogs.toast(`Imported ${tr(i)}.`,{kind:"success",title:"Import"})}}catch(x){e.ui.dialogs.toast(`Could not import ${g}: ${x.message}`,{kind:"error",title:"Import"})}}function Pp(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function Ip(e){try{const t=new URL(e),r=t.hostname.toLowerCase(),i=[...t.searchParams.keys()].some(o=>o.startsWith("_")),n=r.includes("datasette")||i;return!i&&/\.csv$/i.test(t.pathname)?"csv":!i&&/\.json$/i.test(t.pathname)?"json":n?"datasette":"json"}catch{return"json"}}function Pa(e,t){if(t!=="datasette"||!e)return!1;try{const r=wn(e);return!r.db&&!r.table}catch{return!1}}function tr(e){try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();return r&&r.length>0?r:"sample.db.json"}catch{return"sample.db.json"}}function Dp(e){return/\.csv$/i.test(e)?"csv":"json"}let ft=class extends Ne{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.file=null,this.maxRowsInput="",this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t&&!this.file)return;const r=this.resolvedKind,i=this.maxRows,n=r==="csv"&&this.editColumns;if(this.file){this.finish({url:"",file:this.file,kind:r,editColumns:n,maxRows:i});return}const o=r==="datasette"&&!!this.selectedDb&&Pa(t,r),l=o?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:l,kind:r,dbChosen:o,editColumns:n,maxRows:i})}}get resolvedKind(){return this.kind!=="auto"?this.kind:this.file?Dp(this.file.name):Ip(this.url.trim())}get maxRows(){const e=Math.floor(Number(this.maxRowsInput));return Number.isFinite(e)&&e>0?e:void 0}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),ft.instance=this}disconnectedCallback(){super.disconnectedCallback(),ft.instance===this&&(ft.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Gt(this.dialogEl,e)}open(e){return this.url="",this.kind="auto",this.presetIdx=-1,this.editColumns=!1,this.file=null,this.maxRowsInput="",this.resetDbList(),this.listDatabases=e?.listDatabases??null,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const r=_a[t];r&&(this.url=r.url,this.kind=r.kind)}onFileChange(e){const r=e.target.files?.[0]??null;this.file=r,r&&(this.url="",this.presetIdx=-1,this.resetDbList())}renderDbPicker(){return!this.listDatabases||!Pa(this.url.trim(),this.resolvedKind)?be:I`
      <label>
        Database
        <div class="row db-row">
          <select
            .value=${this.selectedDb}
            ?disabled=${!this.dbList||this.dbList.length===0}
            @change=${e=>{this.selectedDb=e.target.value}}
          >
            ${this.dbList?I`
                  <option value="" ?selected=${this.selectedDb===""}>
                    — all databases (choose tables next) —
                  </option>
                  ${this.dbList.map(e=>I`<option value=${e} ?selected=${e===this.selectedDb}>${e}</option>`)}
                `:I`<option value="">— not loaded —</option>`}
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
      ${this.dbError?I`<p class="hint error">${this.dbError}</p>`:be}
    `}render(){return I`
      <dialog @cancel=${this.onCancel} @keydown=${Vt}>
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
                ${_a.map((e,t)=>I`<option value=${String(t)} ?selected=${t===this.presetIdx}>
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
            ${this.file?I`<p class="hint">
                  Importing <strong>${this.file.name}</strong> as
                  ${this.resolvedKind.toUpperCase()}.
                </p>`:be}

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
            ${this.resolvedKind==="csv"?I`<label class="check">
                  <input
                    type="checkbox"
                    .checked=${this.editColumns}
                    @change=${e=>this.editColumns=e.target.checked}
                  />
                  Edit columns before import (rename / hide / fix duplicate names)
                </label>`:be}

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
            ${this.resolvedKind==="datasette"&&this.maxRows!=null?I`<p class="hint">
                  Row limit applies to CSV/JSON imports; Datasette snapshots use their own
                  10,000-row cap.
                </p>`:be}

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
      ${be}
    `}};ft.instance=null;ft.styles=[Kt,He`
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
    `];rn([W()],ft.prototype,"url",2);rn([W()],ft.prototype,"kind",2);rn([W()],ft.prototype,"presetIdx",2);rn([W()],ft.prototype,"dbList",2);rn([W()],ft.prototype,"dbLoading",2);rn([W()],ft.prototype,"dbError",2);rn([W()],ft.prototype,"selectedDb",2);rn([W()],ft.prototype,"editColumns",2);rn([W()],ft.prototype,"file",2);rn([W()],ft.prototype,"maxRowsInput",2);ft=rn([tt("import-dialog")],ft);const Rp=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return ft},init:Cp,meta:kp},Symbol.toStringTag,{value:"Module"})),Op={id:"auto-sync",name:"Auto Sync",type:"sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-sync.ts"},jp=6e4;let Ia=null,zs=!1;const $s=new Map;function zp(e){Ia===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(Ia=setInterval(()=>{Wl(e)},jp)))}async function Wl(e){if(zs)return;const t=e.workspaceId();if(!t)return;const r=await Ol(e);if(r)try{await Fp(e,r,t)}catch(i){console.warn("[auto-sync]",i)}}async function Fp(e,t,r){const i=await zi(e),n=await jl(e,r),o=await fetch(`${t}/sync/${encodeURIComponent(r)}`);if(o.status===404){await Da(e,t,r,i,null);return}if(!o.ok)return;const l=Fi(o.headers.get("ETag")),c=await o.text();if(wa(i)===wa(c)){l&&l!==n&&await Kn(e,r,l);return}if(l&&l===n){await Da(e,t,r,i,n);return}if(!(l&&$s.get(r)===l)){zs=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${r}". Pull and replace your local copy?`,"auto-sync")){const g=JSON.parse(c),x=await zl(e,r,g);l&&await Kn(e,r,l),$s.delete(r),e.ui.dialogs.toast(`Pulled ${x} table${x===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else l&&$s.set(r,l)}finally{zs=!1}}}async function Da(e,t,r,i,n){const o={"Content-Type":"application/json"};n&&(o["If-Match"]=`"${n}"`);const l=await fetch(`${t}/sync/${encodeURIComponent(r)}`,{method:"PUT",headers:o,body:i});if(l.ok){const c=Fi(l.headers.get("ETag"));c&&await Kn(e,r,c);return}if(l.status===412){const c=await l.json().catch(()=>({}));c.currentEtag&&await Kn(e,r,c.currentEtag)}}const Kl=Object.freeze(Object.defineProperty({__proto__:null,load:zp,meta:Op,tick:Wl},Symbol.toStringTag,{value:"Module"})),Vl=/\$([A-Za-z_][A-Za-z0-9_]*)/g;function Ra(...e){const t=new Set;for(const r of e)if(r)for(const i of r.matchAll(Vl))t.add(i[1]);return[...t]}function Lp(e,t,r){return e.replace(Vl,(i,n)=>{const o=r[n];if(!o)return"";const l=t.data[o];return l==null?"":String(l)})}function Oa(e){return e==null||e===""}function Mp(e,t){const r=Object.entries(t).filter(([,i])=>i!=null&&String(i).trim()!=="");return r.length===0?e:e.filter(i=>r.every(([n,o])=>Ps(i.data[n],o)))}function Bp(e,t,r=!0){if(!t)return e;const i=r?1:-1;return[...e].sort((n,o)=>{const l=n.data[t],c=o.data[t],d=Oa(l),g=Oa(c);if(d||g)return d===g?0:d?1:-1;const x=Number(l),y=Number(c);return!Number.isNaN(x)&&!Number.isNaN(y)?(x-y)*i:String(l).localeCompare(String(c),void 0,{numeric:!0,sensitivity:"base"})*i})}function Np(e,t){return Bp(Mp(e,t.filters??{}),t.sortColumn,t.sortAsc??!0)}function Up(e){return!!e&&e.trim().length>0}var qp=Object.defineProperty,Hp=Object.getOwnPropertyDescriptor,dr=(e,t,r,i)=>{for(var n=i>1?void 0:i?Hp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&qp(t,r,n),n};function Fs(e,t){(Ft.instance??Wp()).open(e,t)}function Wp(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function ja(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let Ft=class extends Ne{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.mode==="template"?this.saveTemplate():this.mode==="instance"?this.saveInstance():this.close()}}connectedCallback(){super.connectedCallback(),Ft.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ft.instance===this&&(Ft.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Gt(this.dialogEl,e)}async open(e,t){if(this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),t?.editTemplateId){const r=this.templates.find(i=>i.id===t.editTemplateId);r&&this.editTemplate(r)}else if(t?.editInstanceId){const r=this.instances.find(i=>i.id===t.editInstanceId);r&&await this.editInstance(r)}await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await ge(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(r=>r.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((r,i)=>r.name.localeCompare(i.name))}async openInstance(e){await(await ge()).store.viewInstances.patch(e,{open:!0,updatedAt:Date.now()}),this.close()}async editInstance(e){const r=await(await ge()).store.viewTemplates.findOne(e.templateId),i=r?Ra(r.headerHtml,r.rowHtml,r.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:r?.name??"template",name:e.name,tokens:i,mapping:{...e.mapping},limit:e.limit??0},this.mode="instance"}async deleteInstance(e){await(await ge()).store.viewInstances.remove(e),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await ge();e.id?await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()}):await t.store.viewTemplates.insert({id:ja(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh(),this.mode="list"}useTemplate(e){const t=Ra(e.headerHtml,e.rowHtml,e.footerHtml),r={};for(const i of t)r[i]=this.autoMap(i);this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:r,limit:0},this.mode="instance"}firstColumn(e){const t=this.columns.find(e);return t?t.field:""}autoMap(e){const t=e.toLowerCase(),r=this.columns.find(c=>c.field.toLowerCase()===t||(c.label??"").toLowerCase()===t);if(r)return r.field;const i=this.table?.labelColumn;if(i&&(t==="title"||t==="name"||t==="label"))return i;if(["date","datetime","time","created","updated","modified","timestamp","day","when"].includes(t))return this.firstColumn(c=>c.type==="date"||c.type==="datetime");const o=["url","link","href","website","homepage","uri","site","web"];if(o.includes(t)){const c=this.firstColumn(d=>d.renderer==="link");return c||this.firstColumn(d=>{const g=d.field.toLowerCase(),x=(d.label??"").toLowerCase();return o.some(y=>g.includes(y)||x.includes(y))})}const l=["description","desc","notes","note","body","text","summary","about","comment","comments","details","detail","remarks"];if(l.includes(t)){const c=this.firstColumn(y=>{if(y.type!=="string")return!1;const S=y.field.toLowerCase(),U=(y.label??"").toLowerCase();return l.some(N=>S.includes(N)||U.includes(N))});if(c)return c;const d=this.columns.filter(y=>y.type==="string"),g=d[0];if(!g)return"";let x=g;for(const y of d)(y.max??0)>(x.max??0)&&(x=y);return x.field}return""}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await ge();if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},limit:e.limit>0?e.limit:void 0,updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.mode="list";return}const r=this.columns.filter(n=>!n.hidden).map(n=>n.field),i={id:ja(),workspaceId:t.workspaceId,tableId:this.tableId,tableName:this.table.name,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:r,mapping:{...e.mapping},updatedAt:Date.now(),...e.limit>0?{limit:e.limit}:{}};await t.store.viewInstances.insert(i),await this.openInstance(i.id)}renderList(){return I`
      <div class="section">
        <h3>Views of “${this.table?.name??""}”</h3>
        <ul class="list">
          ${this.instances.map(e=>I`<li>
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
          ${this.templates.map(e=>I`<li>
                <span class="name">${e.name}</span>
                ${e.builtin?I`<span class="badge">built-in</span>`:be}
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
    `}renderTemplate(){const e=this.tDraft,t=r=>i=>{this.tDraft={...e,[r]:i.target.value}};return I`
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
    `}renderInstance(){const e=this.iDraft;return I`
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
        ${e.tokens.length===0?I`<p class="hint">
              This template has no <code>$TOKEN</code> placeholders — it will show the read-only
              table with your current sort, filter and visible columns.
            </p>`:e.tokens.map(t=>I`<div class="map-row">
                  <code>$${t}</code>
                  <select
                    @change=${r=>this.iDraft={...e,mapping:{...e.mapping,[t]:r.target.value}}}
                  >
                    <option value="" ?selected=${!e.mapping[t]}>— none —</option>
                    ${this.columns.map(r=>I`<option value=${r.field} ?selected=${e.mapping[t]===r.field}>
                          ${r.label||r.field}
                        </option>`)}
                  </select>
                </div>`)}
      </div>
      <p class="hint">
        ${e.id?I`Editing name and column mapping. The snapshotted sort, filters and visible columns
            are kept.`:I`The view snapshots this table's current sort, filters and visible columns.`}
      </p>
    `}render(){const e=this.mode==="template"?this.tDraft?.id?"Edit template":"New template":this.mode==="instance"?`${this.iDraft?.id?"Edit":"New"} view — ${this.iDraft?.templateName??""}`:"Views",t=this.mode==="template"?I`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
              Back
            </button>
            <button type="submit" class="primary">Save</button>`:this.mode==="instance"?I`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
                Back
              </button>
              <button type="submit" class="primary">
                ${this.iDraft?.id?"Save":"Create view"}
              </button>`:I`<button type="submit" class="ghost">Close</button>`;return I`
      <dialog @cancel=${this.close} @keydown=${Vt}>
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
    `}};Ft.instance=null;Ft.styles=[Kt,He`
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
    `];dr([W()],Ft.prototype,"mode",2);dr([W()],Ft.prototype,"instances",2);dr([W()],Ft.prototype,"templates",2);dr([W()],Ft.prototype,"tDraft",2);dr([W()],Ft.prototype,"iDraft",2);Ft=dr([tt("views-dialog")],Ft);const Kp={id:"views",name:"Views",type:"ui",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/views.ts"},Vp="grid_view",za="RSS Feed",Ls='<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',Ms=['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>',"</div>"].join(""),Bs="</div>";function Gp(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:Vp,tooltip:"Views — display this table through a template",onClick:(t,{tableId:r})=>Fs(r)})}async function Yp(e){await Qp(e)}function Xp(){let e=5381;const t=`${Ls}\0${Ms}\0${Bs}`;for(let r=0;r<t.length;r++)e=(e<<5)+e+t.charCodeAt(r)|0;return(e>>>0).toString(36)}async function Qp(e){const t=e.workspaceId();if(!t)return;const r=`views:seeded:rss:${t}`,i=`views:sig:rss:${t}`,n=Xp(),o=(await e.store.viewTemplates.find({workspaceId:t})).find(c=>c.builtin&&c.name===za);if(o){(await e.store.settings.findOne(i))?.value!==n&&(await e.store.viewTemplates.patch(o.id,{headerHtml:Ls,rowHtml:Ms,footerHtml:Bs,updatedAt:Date.now()}),await e.store.settings.upsert({key:i,value:n})),await e.store.settings.upsert({key:r,value:!0});return}(await e.store.settings.findOne(r))?.value||(await e.store.viewTemplates.insert({id:Jp(),workspaceId:t,name:za,headerHtml:Ls,rowHtml:Ms,footerHtml:Bs,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({key:r,value:!0}),await e.store.settings.upsert({key:i,value:n}))}function Jp(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Zp=Object.freeze(Object.defineProperty({__proto__:null,init:Gp,load:Yp,meta:Kp},Symbol.toStringTag,{value:"Module"})),em={id:"settings",name:"Settings",type:"ui",fixed:!0,version:"0.1.0",description:"Header gear button that opens the tabbed Settings dialog; imports dropped secrets.txt.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/settings.ts"};function tm(e){e.ui.registerHeaderButton({id:"settings:open",label:"Settings",icon:"settings",tooltip:"Workspace and plugin settings",variant:"secondary",onClick:()=>e.ui.openSettings()}),e.ui.registerDropHandler(async(t,r)=>{const n=Array.from(t.dataTransfer?.files??[]).find(c=>c.name.toLowerCase()==="secrets.txt");if(!n)return!1;const o=await n.text(),l=Object.keys(Di(o)).length;return Ii().trim().length>0&&!await r.ui.dialogs.confirm(`Replace your current secrets with ${l} secret${l===1?"":"s"} from "${n.name}"?`,"Import secrets")||(rl(o),r.ui.dialogs.toast(`Imported ${l} secret${l===1?"":"s"}.`,{kind:"success",title:"Secrets"})),!0})}const nm=Object.freeze(Object.defineProperty({__proto__:null,init:tm,meta:em},Symbol.toStringTag,{value:"Module"})),rm=[nm,Xh,Hu,fd,bh,Yu,_h,Ch,Bh,Vh,lf,hf,gf,$f,Af,cp,Rp,Kl,Zp];function im(e){if(!e.meta)throw new Error("Built-in plugin is missing meta");return e.meta}const Gl=rm.map(e=>{const t=im(e);return{id:t.id,meta:t,module:e}}),sm=Gl;function Ns(e){return`builtin:${e}`}async function om(e){const t=[];for(const r of Gl)if(!await am(e,r)){t.push(r);try{await r.module.init?.(e)}catch(i){e.events.emit("plugin:error",{url:r.id,phase:"init",error:i})}}return async()=>{for(const r of t)try{await r.module.load?.(e)}catch(i){e.events.emit("plugin:error",{url:r.id,phase:"load",error:i})}}}async function am(e,t){return t.meta.fixed?!1:(await e.store.plugins.findOne(Ns(t.id)))?.enabled===!1}function hr(){const e=z.getPanels;return typeof e!="function"?[]:Array.from(e.call(z)??[])}function lm(){for(const e of hr())e.close?.()}function cm(){for(const e of hr())e.minimize?.()}function um(){for(const e of hr())e.normalize?.()}function dm(){for(const e of hr())e.maximize?.()}function Yl(){const e=document.getElementById("easydb-panels"),t=e?.clientWidth??window.innerWidth,r=e?.clientHeight??window.innerHeight,i=Nl()?.snapshot(),n=i?.scale&&i.scale>0?i.scale:1,o=i?.x??0,l=i?.y??0;return{x:-o/n,y:-l/n,w:t/n,h:r/n}}function Xl(e,t,r,i,n){e.style.left=`${Math.round(t)}px`,e.style.top=`${Math.round(r)}px`,e.style.width=`${Math.round(i)}px`,e.style.height=`${Math.round(n)}px`}function hm(){const e=hr().reverse();if(e.length===0)return;const t=Yl(),r=32,i=Math.min(680,Math.max(320,t.w*.6)),n=Math.min(480,Math.max(240,t.h*.6));e.forEach((o,l)=>{o.normalize?.(),Xl(o,t.x+24+l*r,t.y+24+l*r,i,n)})}function fm(){const e=hr().reverse(),t=e.length;if(t===0)return;const r=Yl(),i=Math.ceil(Math.sqrt(t)),n=Math.ceil(t/i),o=8,l=(r.w-o*(i+1))/i,c=(r.h-o*(n+1))/n;e.forEach((d,g)=>{d.normalize?.();const x=g%i,y=Math.floor(g/i);Xl(d,r.x+o+x*(l+o),r.y+o+y*(c+o),l,c)})}function pm(e){const t=[{id:"windows:minimize-all",title:"Minimize all windows",icon:"remove",run:cm},{id:"windows:restore-all",title:"Restore all windows",icon:"crop_square",run:um},{id:"windows:maximize-all",title:"Maximize all windows",icon:"fullscreen",run:dm},{id:"windows:cascade",title:"Cascade windows",icon:"view_agenda",run:hm},{id:"windows:tile",title:"Tile windows",icon:"grid_view",run:fm},{id:"windows:close-all",title:"Close all windows",icon:"close",run:lm}];for(const n of t)e.ui.registerCommand({id:n.id,title:n.title,group:"Windows",icon:n.icon,run:n.run});const r="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md",i="https://github.com/cawoodm/easydbaccess/tree/main/docs";e.ui.registerCommand({id:"app:search",title:"Search all tables",group:"App",icon:"search",keywords:["find","global search","filter"],run:()=>{document.dispatchEvent(new CustomEvent("easydb:focus-search"))}}),e.ui.registerCommand({id:"app:plugins",title:"Plugins",group:"App",icon:"extension",keywords:["plugin manager","install","extensions"],run:n=>n.ui.openPluginManager()}),e.ui.registerCommand({id:"app:changelog",title:"Changelog",group:"App",icon:"history",keywords:["releases","version","whats new"],run:()=>{window.open(r,"_blank","noopener")}}),e.ui.registerCommand({id:"app:docs",title:"Documentation",group:"App",icon:"menu_book",keywords:["docs","help","guide","manual"],run:()=>{window.open(i,"_blank","noopener")}})}async function mm(e){const t=e.workspaceId();if(!t)return async()=>{};const i=(await e.store.workspaces.findOne(t))?.pluginUrls??[],n=[];for(const o of i)try{const l=await e.store.plugins.findOne(o);if(l&&l.enabled===!1)continue;let c=l?.cachedBody??"";if(c)gm(e,o,c);else{try{c=await Ql(o)}catch(x){await e.store.plugins.upsert({url:o,enabled:l?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${x.message}`}),e.events.emit("plugin:error",{url:o,phase:"fetch",error:x});continue}await e.store.plugins.upsert({url:o,enabled:!0,lastFetched:Date.now(),cachedBody:c})}const d=new Blob([c],{type:"text/javascript"}),g=URL.createObjectURL(d);try{const x=await import(g);await x.init?.(e),n.push({url:o,mod:x})}finally{setTimeout(()=>URL.revokeObjectURL(g),5e3)}}catch(l){await e.store.plugins.upsert({url:o,enabled:!0,lastFetched:Date.now(),lastError:`init: ${l.message}`}),e.events.emit("plugin:error",{url:o,phase:"init",error:l})}return async()=>{for(const{url:o,mod:l}of n)try{await l.load?.(e)}catch(c){await e.store.plugins.upsert({url:o,enabled:!0,lastFetched:Date.now(),lastError:`load: ${c.message}`}),e.events.emit("plugin:error",{url:o,phase:"load",error:c})}}}async function Ql(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const r=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(r))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return r}function gm(e,t,r){return(async()=>{try{const i=await Ql(t);if(i===r)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:i})}catch{}})()}let ks=null;function ge(){return ks||(ks=bm()),ks}async function bm(){const e=await au(),t=uu(e),r=hu(),i=wu(),n=new Map;t.tables.subscribe(F=>{n.clear();for(const q of F)n.set(q.id,q)});const o={...t.tables,insert:F=>(n.set(F.id,F),t.tables.insert(F)),upsert:F=>(n.set(F.id,F),t.tables.upsert(F))};let l=null;const c={get backend(){if(!l)throw new Error("[host] row-source ctx used before app init completed");return l.backend},events:r,settings:t.settings,workspaceId:()=>y},d=du({base:{...t,tables:o},providers:i.rowSources,tableById:F=>n.get(F),ctx:c}),g=ym(),x=await d.workspaces.find();let y;if(g){const F=xm(g),q=x.find(G=>G.id===F||G.name===g);q?y=q.id:y=(await d.workspaces.insert({id:F,name:g,createdAt:Date.now(),pluginUrls:[]})).id}else{const F=wm(),q=F?x.find(G=>G.id===F):void 0;q?y=q.id:x.length>0?y=x[0].id:y=(await d.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}vm(y);const S=Cu({store:d,events:r,registries:i,workspaceId:()=>y});l=S,pm(S),r.on("import:after",({source:F,tableId:q,rowCount:G})=>{F!=="datasette"&&S.store.tables.findOne(q).then(he=>{S.ui.dialogs.toast(`Imported ${G} row${G===1?"":"s"} into "${he?.name??q}".`,{kind:"success",title:F.toUpperCase()+" import"})})}),r.on("plugin:error",({url:F,phase:q,error:G})=>{S.ui.dialogs.toast(`[${q}] ${G?.message??String(G)}`,{kind:"error",title:`Plugin: ${F}`})});const U=await om(S),N=await mm(S);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:y}),await U(),await N()}),{store:d,events:r,workspaceId:y,registries:i,api:S}}function ym(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const Jl="eda:lastWorkspaceId";function wm(){try{return globalThis.localStorage?.getItem(Jl)??null}catch{return null}}function vm(e){try{globalThis.localStorage?.setItem(Jl,e)}catch{}}function xm(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var $m=Object.defineProperty,km=Object.getOwnPropertyDescriptor,Bi=(e,t,r,i)=>{for(var n=i>1?void 0:i?km(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&$m(t,r,n),n};let ar=class extends Ne{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Gt(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let r;try{r=Or(this.text)}catch(l){this.errorMsg=`Couldn't parse the CSV: ${l.message}`;return}if(r.columns.length===0||r.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const i=await ge(),n=crypto.randomUUID();await i.store.tables.insert({id:n,workspaceId:i.workspaceId,name:t,code:Cm(t),columns:r.columns,view:"table",updatedAt:Date.now()});const o=r.rows.map(l=>({id:crypto.randomUUID(),tableId:n,data:l,updatedAt:Date.now()}));await i.store.rows(n).bulkInsert(o),i.api.ui.dialogs.toast(`Imported ${r.rows.length} row${r.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return I`
      <dialog @cancel=${this.close} @keydown=${Vt}>
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
            ${this.errorMsg?I`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};ar.styles=[Kt,He`
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
    `];Bi([W()],ar.prototype,"name",2);Bi([W()],ar.prototype,"text",2);Bi([W()],ar.prototype,"errorMsg",2);ar=Bi([tt("csv-paste-dialog")],ar);function Cm(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}var Em=Object.defineProperty,Sm=Object.getOwnPropertyDescriptor,ao=(e,t,r,i)=>{for(var n=i>1?void 0:i?Sm(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Em(t,r,n),n};const _m=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return an HTML string; it is injected into the cell as raw HTML.
  return '<b>' + (row.name ?? '') + '</b>';
}
`;let un=class extends Ne{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),un.instance=this}disconnectedCallback(){super.disconnectedCallback(),un.instance===this&&(un.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Gt(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:_m,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(r=>{this.resolver=r})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return I`
      <dialog @cancel=${this.onCancel} @keydown=${Vt}>
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
    `}};un.instance=null;un.styles=[Kt,He`
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
    `];ao([W()],un.prototype,"text",2);ao([W()],un.prototype,"columnLabel",2);un=ao([tt("script-editor-dialog")],un);var Tm=Object.defineProperty,Am=Object.getOwnPropertyDescriptor,Bt=(e,t,r,i)=>{for(var n=i>1?void 0:i?Am(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Tm(t,r,n),n};const Pm=["string","number","boolean","date","datetime"];let Et=class extends Ne{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.columns=[],this.errorMsg="",this.noticeMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Gt(this.dialogEl,e)}async open(e,t){this.errorMsg="",this.noticeMsg=t?.notice??"";const r=await ge();if(this.rendererOptions=[...r.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.rendererSubUnsub=r.events.on("app:ready",()=>{this.rendererOptions=[...r.registries.cellRenderers.keys()].sort()}),e){const i=await ge(),n=await i.store.tables.findOne(e);if(!n)return;this.mode="edit",this.editTableId=e,this.name=n.name,this.tableTitle=n.title??"",this.columns=n.columns.map(l=>({field:l.field,label:l.label,type:l.type,renderer:l.renderer,script:l.script,max:l.max,unique:l.unique,notnull:l.notnull,hidden:l.hidden,origField:l.field}));const o=await i.store.rows(e).find();this.previewRows=o.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,r)=>r!==e)}moveColumn(e,t){const r=e+t;if(r<0||r>=this.columns.length)return;const i=[...this.columns],[n]=i.splice(e,1);i.splice(r,0,n),this.columns=i}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,r){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientY<i.top+i.height/2;this.dropTargetIdx=t,this.dropEdge=n?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const r=this.dragSrcIdx,i=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,r===null||r===t||!i)return;const n=[...this.columns],[o]=n.splice(r,1);let l=t+(r<t?-1:0);i==="after"&&(l+=1),n.splice(l,0,o),this.columns=n}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((r,i)=>i===e?{...r,...t}:r)}async editScript(e){const t=un.instance;if(!t)return;const r=this.columns[e];if(!r)return;const i=await t.open(r.script??"",r.label||r.field);i!==null&&this.patchColumn(e,{script:i.trim()?i:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}const r=await ge(),i=(await r.store.tables.find()).filter(g=>g.workspaceId===r.workspaceId),n=t.toLowerCase(),o=i.find(g=>g.name.toLowerCase()===n&&g.id!==this.editTableId);if(o){this.errorMsg=`A table named "${o.name}" already exists — names must be unique.`;return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const l=new Set;for(const g of this.columns){const x=g.field.trim();if(!x){this.errorMsg="Column field names cannot be empty.";return}if(l.has(x)){this.errorMsg=`Duplicate column field: ${x}`;return}l.add(x)}const c=this.tableTitle.trim(),d=this.columns.map(g=>{const x={field:g.field.trim(),label:g.label.trim()||g.field.trim(),type:g.type};return g.renderer&&(x.renderer=g.renderer),g.script&&(x.script=g.script),g.max!=null&&g.max>0&&(x.max=g.max),g.unique&&(x.unique=!0),g.notnull&&(x.notnull=!0),g.hidden&&(x.hidden=!0),x});if(this.mode==="edit"&&this.editTableId){const g=this.editTableId,x=await r.store.tables.findOne(g),y=new Map((x?.columns??[]).map(V=>[V.field,V])),S=d.filter(V=>{const J=y.get(V.field);return V.unique&&!J?.unique||V.notnull&&!J?.notnull||V.max&&V.max>0&&V.max!==J?.max});if(S.length>0){const V=await r.store.rows(g).find(),J=Rm(S,V);if(J.length>0){this.errorMsg=`Cannot save: ${J.length} existing ${J.length===1?"row violates":"rows violate"} the new constraints.
${J.slice(0,5).join(`
`)}${J.length>5?`
…and ${J.length-5} more.`:""}`;return}}const U=new Set(this.columns.map(V=>V.origField).filter(V=>!!V)),N=new Set(d.map(V=>V.field)),F=(x?.columns??[]).map(V=>V.field).filter(V=>!U.has(V)),q=x?.deletedColumns??[],G=[...new Set([...q,...F])].filter(V=>!N.has(V)),he={name:t,title:c,columns:d,updatedAt:Date.now()};(G.length>0||q.length>0)&&(he.deletedColumns=G);const ee=x?.name;await r.store.tables.patch(g,he);const ie=F.filter(V=>!N.has(V));if(ie.length>0){const V=await r.store.rows(g).find();for(const J of V){let ue=!1;const we={...J.data};for(const Ae of ie)Ae in we&&(delete we[Ae],ue=!0);ue&&await r.store.rows(g).patch(J.id,{data:we,updatedAt:Date.now()})}}if(ee!==void 0&&ee!==t){const V=(await r.store.viewInstances.find()).filter(J=>J.tableId===g);for(const J of V)J.tableName!==t&&await r.store.viewInstances.patch(J.id,{tableName:t,updatedAt:Date.now()})}}else await r.store.tables.insert({id:jm(),workspaceId:r.workspaceId,name:t,title:c,code:Om(t),columns:d,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return I`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=new Map;for(const t of this.columns){if(!t.unique)continue;const r=new Set,i=new Set;for(const n of this.previewRows){const o=n.data[t.field];o==null||o===""||(r.has(o)&&i.add(o),r.add(o))}e.set(t.field,i)}return I`
      <div class="preview">
        <h3>Live preview — first ${this.previewRows.length} row${this.previewRows.length===1?"":"s"}</h3>
        <table>
          <thead>
            <tr>
              ${this.columns.map(t=>I`<th title=${t.field}>${t.label||t.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.previewRows.map(t=>I`
                <tr>
                  ${this.columns.map(r=>{const i=t.data[r.field],n=Dm(r,i,e.get(r.field));return I`<td
                      class=${n?"violation":""}
                      title=${n??""}
                    >${Im(i)}</td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}renameDetected(){return this.mode==="edit"&&this.columns.some(e=>e.origField&&e.origField!==e.field.trim())}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return I`
      <dialog @cancel=${this.close} @keydown=${Vt}>
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
          ${this.noticeMsg?I`<div class="notice">${this.noticeMsg}</div>`:""}
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
            ${this.columns.map((r,i)=>{const n=this.dragSrcIdx===i,o=this.dropTargetIdx===i,l=o&&this.dropEdge==="before"?" drop-before":o&&this.dropEdge==="after"?" drop-after":"";return I`
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
                    ${Pm.map(c=>I`<option value=${c} ?selected=${c===r.type}>${c}</option>`)}
                  </select>
                  <select
                    title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                    .value=${r.renderer??""}
                    @change=${c=>{const d=c.target.value;this.patchColumn(i,{renderer:d||void 0})}}
                  >
                    <option value="" ?selected=${!r.renderer}>— none —</option>
                    ${this.rendererOptions.map(c=>I`<option value=${c} ?selected=${c===r.renderer}>${c}</option>`)}
                  </select>
                  ${r.renderer==="script"?I`<button
                        type="button"
                        class="icon-btn"
                        title="Edit JS render(row)"
                        @click=${()=>this.editScript(i)}
                      >
                        <span class="mi sm">edit</span>
                      </button>`:I`<span></span>`}
                  <input
                    type="number"
                    min="0"
                    placeholder="—"
                    title="Max length (strings) or max value (numbers)"
                    .value=${r.max==null?"":String(r.max)}
                    @input=${c=>{const d=c.target.value;this.patchColumn(i,{max:d===""?void 0:Number(d)})}}
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

          ${this.renameDetected()?I`<div class="hint">
                Renamed fields will appear empty for existing rows — the row data
                isn't migrated automatically.
              </div>`:""}
          ${this.errorMsg?I`<div class="error">${this.errorMsg}</div>`:""}
          ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};Et.styles=[Yt,Kt,He`
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
  `];Bt([W()],Et.prototype,"mode",2);Bt([W()],Et.prototype,"editTableId",2);Bt([W()],Et.prototype,"name",2);Bt([W()],Et.prototype,"tableTitle",2);Bt([W()],Et.prototype,"columns",2);Bt([W()],Et.prototype,"errorMsg",2);Bt([W()],Et.prototype,"noticeMsg",2);Bt([W()],Et.prototype,"dragSrcIdx",2);Bt([W()],Et.prototype,"dropTargetIdx",2);Bt([W()],Et.prototype,"dropEdge",2);Bt([W()],Et.prototype,"previewRows",2);Bt([W()],Et.prototype,"rendererOptions",2);Et=Bt([tt("new-table-dialog")],Et);function Im(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function Dm(e,t,r){const i=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&i)return`${e.label}: empty`;if(i)return null;if(e.type==="number"&&typeof t!="number"){const n=Number(t);if(!Number.isFinite(n))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!i){const n=new Date(String(t));if(Number.isNaN(n.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&r?.has(t)?`${e.label}: duplicate`:null}function Rm(e,t){const r=[];for(const i of e)if(i.notnull&&t.forEach((n,o)=>{const l=n.data[i.field];(l==null||typeof l=="string"&&l.trim()==="")&&r.push(`Row ${o+1}: ${i.label} is empty.`)}),i.max!=null&&i.max>0&&t.forEach((n,o)=>{const l=n.data[i.field];typeof l=="string"&&l.length>i.max?r.push(`Row ${o+1}: ${i.label} length ${l.length} > max ${i.max}.`):typeof l=="number"&&l>i.max&&r.push(`Row ${o+1}: ${i.label} value ${l} > max ${i.max}.`)}),i.unique){const n=new Map;t.forEach((o,l)=>{const c=o.data[i.field];c==null||c===""||(n.has(c)?r.push(`Row ${l+1}: ${i.label} duplicates row ${n.get(c)+1} ("${String(c)}").`):n.set(c,l))})}return r}function Om(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function jm(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var zm=Object.defineProperty,Fm=Object.getOwnPropertyDescriptor,At=(e,t,r,i)=>{for(var n=i>1?void 0:i?Fm(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&zm(t,r,n),n};const Lm='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',Mm=I`<span class="mi sm">extension</span>`,Fa="plugin:catalogUrls";function pi(){return new URL("/easydbaccess/plugins/catalog.json",location.origin).toString()}const Bm=[["installed","Installed"],["built-in","Built-in"],["available","Available"],["fixed","Fixed"]],Zl=[["importer","Importer"],["exporter","Exporter"],["cell-renderer","Cell renderer"],["sync","Sync"],["source","Source"],["ui","UI"]],Nm=new Map(Zl);let $t=class extends Ne{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.catalogUrls=[pi()],this.activeCatalogUrl=pi(),this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Gt(this.dialogEl,e)}async open(){const e=await ge(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const r=await e.store.plugins.find();this.records=new Map(r.map(o=>[o.url,o]));const i=await e.store.settings.findOne(Fa),n=Array.isArray(i?.value)?i.value.filter(o=>typeof o=="string"):[];this.catalogUrls=n.length>0?n:[pi()],this.activeCatalogUrl=this.catalogUrls[0]??pi(),this.addUrl="",this.search="",this.filterStates=new Map,this.typeFilters=new Map,await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(this.activeCatalogUrl),this.refreshServerRegistry()}async refreshCatalog(e){try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json(),i=Array.isArray(r.plugins)?r.plugins:[];this.catalog=i.map(n=>({...n,absUrl:new URL(n.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const r=(await(await ge()).store.settings.findOne("server-sync:url"))?.value;if(typeof r!="string"||r.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const n=`${r.replace(/\/+$/,"")}/plugins/registry`;try{const o=await fetch(n,{cache:"no-store"});if(!o.ok)throw new Error(`HTTP ${o.status}`);const l=await o.json(),c=Array.isArray(l.plugins)?l.plugins:[];this.serverCatalog=c.map(d=>({...d,absUrl:new URL(d.url,n).toString()})),this.serverCatalogError=null}catch(o){this.serverCatalog=[],this.serverCatalogError=o.message}}async reloadCatalogSource(){const e=this.activeCatalogUrl.trim();e&&(this.catalogUrls.includes(e)||(this.catalogUrls=[...this.catalogUrls,e],await(await ge()).store.settings.upsert({key:Fa,value:this.catalogUrls})),await this.refreshCatalog(e))}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await ge()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const r=await ge();await r.store.workspaces.patch(r.workspaceId,{pluginUrls:this.urls}),await r.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const r=await ge(),i=this.records.get(e);await r.store.plugins.upsert({...i??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...i,url:e,enabled:t,lastFetched:i?.lastFetched??0}))}async removePlugin(e){const t=await ge();this.urls=this.urls.filter(r=>r!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const r=await ge(),i=Ns(e),n=this.records.get(i);await r.store.plugins.upsert({...n??{url:i,lastFetched:0},url:i,enabled:t,lastFetched:n?.lastFetched??0}),this.records=new Map(this.records.set(i,{...n,url:i,enabled:t,lastFetched:n?.lastFetched??0}))}async onRowToggle(e,t){if(e.categories.has("built-in"))await this.toggleBuiltin(e.id,t);else if(e.url)await this.toggleEnabled(e.url,t);else return;(await ge()).api.ui.dialogs.toast("Reload to apply this change.",{kind:"info",title:"Plugin updated"})}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await ge();try{const r=await fetch(e.absUrl,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const i=await r.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:i});const n=new Blob([i],{type:"text/javascript"}),o=URL.createObjectURL(n);try{const c=await import(o);await c.init?.(t.api),await c.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(o),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const l=await t.store.plugins.find();this.records=new Map(l.map(c=>[c.url,c])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(r){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${r.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${r.message}`,{kind:"error",title:"Plugin error"})}finally{const r=new Set(this.installing);r.delete(e.absUrl),this.installing=r}}cycleState(e,t){const r=e.get(t),i=new Map(e);return r===void 0?i.set(t,"on"):r==="on"?i.set(t,"not"):i.delete(t),i}cycleFilter(e){this.filterStates=this.cycleState(this.filterStates,e)}cycleTypeFilter(e){this.typeFilters=this.cycleState(this.typeFilters,e)}buildRows(){const e=new Map,t=new Map;for(const{id:r,meta:i}of sm){const n=i.fixed?!0:this.records.get(Ns(r))?.enabled!==!1,o=i.fixed?["built-in","fixed","installed"]:["built-in","installed"];e.set(`builtin:${r}`,{id:r,name:i.name,...i.type?{type:i.type}:{},...i.description?{meta:i.description}:{meta:"Built-in plugin"},...i.author?{author:i.author}:{},...i.icon?{icon:i.icon}:{},...i.repo?{repo:i.repo}:{},categories:new Set(o),enabled:n,fixed:!!i.fixed})}for(const r of[...this.catalog,...this.serverCatalog]){const i=this.urls.includes(r.absUrl),n=this.records.get(r.absUrl),o=i?["available","installed"]:["available"],l=e.get(r.id);e.set(r.id,{id:r.id,name:r.name,url:r.absUrl,...r.type?{type:r.type}:{},...r.icon?{icon:r.icon}:{},...r.repo?{repo:r.repo}:{},...r.author?{author:r.author}:{},meta:r.description??r.absUrl,categories:l?new Set([...l.categories,...o]):new Set(o),enabled:n?.enabled!==!1,installing:this.installing.has(r.absUrl)}),t.set(r.absUrl,r.id)}for(const r of this.urls){const i=t.get(r);if(i){e.get(i).categories.add("installed");continue}const n=this.records.get(r),o=n?.lastFetched?new Date(n.lastFetched).toLocaleString():"never";e.set(`url:${r}`,{id:r,name:r,urlOnly:!0,url:r,meta:n?.lastError??`Last fetched: ${o}`,metaIsError:!!n?.lastError,categories:new Set(["installed"]),enabled:n?.enabled!==!1})}return[...e.values()]}get filteredRows(){const e=this.buildRows(),t=this.search.trim().toLowerCase(),r=[],i=[];for(const[c,d]of this.filterStates)(d==="on"?r:i).push(c);const n=[],o=[];for(const[c,d]of this.typeFilters)(d==="on"?n:o).push(c);const l=e.filter(c=>!(c.fixed&&this.filterStates.get("fixed")!=="on"||r.length&&!r.some(d=>c.categories.has(d))||i.some(d=>c.categories.has(d))||n.length&&!(c.type&&n.includes(c.type))||c.type&&o.includes(c.type)));return t?l.filter(c=>[c.id,c.name,c.type,c.meta,c.author].some(d=>d?.toLowerCase().includes(t))):l}renderRow(e){const t=e.categories.has("built-in")||e.categories.has("installed"),r=!!e.url&&e.categories.has("installed"),i=!!e.url&&!e.categories.has("installed");return I`
      <div class=${`row${e.categories.has("built-in")?" builtin":""}${e.metaIsError?" error":""}`}>
        <span class="row-icon">${e.icon?rr(e.icon):Mm}</span>
        <div class="row-main">
          <div class=${`row-title${e.urlOnly?" mono":""}`}>
            ${e.name}${e.id!==e.name?I`<span class="row-id">${e.id}</span>`:""}${e.type?I`<span class="row-type" title="Plugin type"
                  >${Nm.get(e.type)??e.type}</span
                >`:""}
          </div>
          ${e.meta?I`<div class=${`meta${e.metaIsError?" err":""}`}>${e.meta}</div>`:""}
        </div>
        <div class="row-author">${e.author??""}</div>
        ${e.repo?I`<a
              class="row-repo"
              href=${e.repo}
              target="_blank"
              rel="noopener noreferrer"
              title="View source on GitHub"
              >${rr(Lm)}</a
            >`:I`<span></span>`}
        ${e.fixed?I`<span class="mi sm lock-icon" title="Always on — cannot be disabled">lock</span>`:t?I`<label class="switch" title="Enable / disable">
                <input
                  type="checkbox"
                  .checked=${e.enabled}
                  @change=${n=>this.onRowToggle(e,n.target.checked)}
                />
                <span class="slider"></span>
              </label>`:I`<span></span>`}
        ${i?I`<button
              type="button"
              class="install"
              ?disabled=${e.installing}
              @click=${()=>this.installFromCatalog({absUrl:e.url,name:e.name})}
            >
              <span class="mi sm">${e.installing?"hourglass_empty":"download"}</span>
              ${e.installing?"Installing…":"Install"}
            </button>`:r?I`<button
                type="button"
                class="uninstall"
                @click=${()=>this.removePlugin(e.url)}
              >
                <span class="mi sm">delete</span> Uninstall
              </button>`:I`<span></span>`}
      </div>
    `}render(){const e=this.filteredRows;return I`
      <dialog @cancel=${this.close} @keydown=${Vt}>
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
              ${Bm.map(([t,r])=>{const i=this.filterStates.get(t),n=i==="on"?`Showing only ${r} plugins — click to exclude`:i==="not"?`Hiding ${r} plugins — click to clear`:`Filter by ${r} — click: show only → exclude → off`;return I`
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
              ${Zl.map(([t,r])=>{const i=this.typeFilters.get(t),n=i==="on"?`Showing only ${r} plugins — click to exclude`:i==="not"?`Hiding ${r} plugins — click to clear`:`Filter by ${r} — click: show only → exclude → off`;return I`
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
                ${this.catalogUrls.map(t=>I`<option value=${t}></option>`)}
              </datalist>
              <button type="button" class="ghost" @click=${this.reloadCatalogSource}>
                <span class="mi sm">refresh</span> Reload
              </button>
            </div>
            ${this.catalogError?I`<div class="meta err">Catalog unavailable: ${this.catalogError}</div>`:""}
            ${this.serverCatalogError?I`<div class="meta err">Server registry unavailable: ${this.serverCatalogError}</div>`:""}

            <div class="plugin-list">
              ${e.length===0?I`<p class="hint">No plugins match the current filters/search.</p>`:""}
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
    `}};$t.styles=[Yt,Kt,He`
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
    `];At([W()],$t.prototype,"urls",2);At([W()],$t.prototype,"records",2);At([W()],$t.prototype,"addUrl",2);At([W()],$t.prototype,"catalog",2);At([W()],$t.prototype,"catalogError",2);At([W()],$t.prototype,"serverCatalog",2);At([W()],$t.prototype,"serverCatalogError",2);At([W()],$t.prototype,"installing",2);At([W()],$t.prototype,"catalogUrls",2);At([W()],$t.prototype,"activeCatalogUrl",2);At([W()],$t.prototype,"search",2);At([W()],$t.prototype,"filterStates",2);At([W()],$t.prototype,"typeFilters",2);$t=At([tt("plugin-manager-dialog")],$t);var Um=Object.defineProperty,qm=Object.getOwnPropertyDescriptor,Gn=(e,t,r,i)=>{for(var n=i>1?void 0:i?qm(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Um(t,r,n),n};const Er="__general__";let vn=class extends Ne{constructor(){super(...arguments),this.tabs=[],this.active=Er,this.values={},this.placements={},this.secretsText="",this.workspaceTitle="",this.dialogEl=null,this.onSubmit=e=>{e.preventDefault(),this.close()}}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Gt(this.dialogEl,e)}async open(){const e=await ge(),t=[...e.registries.settings];this.tabs=t.map(([o,l])=>({id:o,name:l.name,fields:l.fields}));const r=await e.store.workspaces.findOne(e.workspaceId);this.workspaceTitle=r?.title??"";const i={},n={};for(const o of this.tabs)for(const l of o.fields){const c=`${o.id}:${l.key}`,d=await e.api.settings.placement(o.id,l.key);d==="user"?(i[c]=Xs(c),n[c]="user"):d==="workspace"?(i[c]=(await e.store.settings.findOne(c))?.value,n[c]="workspace"):(i[c]=l.default,n[c]=l.scope??"workspace")}this.values=i,this.placements=n,this.secretsText=Ii(),this.active=Er,await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async setValue(e,t,r){const i=`${e.id}:${t.key}`;this.values={...this.values,[i]:r},await(await ge()).api.settings.set(e.id,t.key,r,this.placements[i])}async toggleScope(e,t,r){const i=`${e.id}:${t.key}`,n=r?"user":"workspace";this.placements={...this.placements,[i]:n},await(await ge()).api.settings.set(e.id,t.key,this.values[i],n)}onSecretsInput(e){this.secretsText=e.target.value,rl(this.secretsText)}downloadSecrets(){const e=new Blob([this.secretsText],{type:"text/plain;charset=utf-8"}),t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download="secrets.txt",r.click(),URL.revokeObjectURL(t)}async setWorkspaceTitle(e){this.workspaceTitle=e;const t=await ge();await t.store.workspaces.patch(t.workspaceId,{title:e.trim()||void 0})}renderControl(e,t){const r=`${e.id}:${t.key}`,i=this.values[r];switch(t.type){case"text":return I`<textarea
          .value=${String(i??"")}
          @change=${n=>this.setValue(e,t,n.target.value)}
        ></textarea>`;case"number":return I`<input
          type="number"
          .value=${i==null?"":String(i)}
          @change=${n=>{const o=n.target.value;this.setValue(e,t,o===""?void 0:Number(o))}}
        />`;case"boolean":return I`<label class="scope"
          ><input
            type="checkbox"
            .checked=${!!i}
            @change=${n=>this.setValue(e,t,n.target.checked)}
          />
          enabled</label
        >`;case"date":return I`<input
          type="date"
          .value=${String(i??"")}
          @change=${n=>this.setValue(e,t,n.target.value)}
        />`;case"secret":return this.renderSecretControl(e,t,i);case"option":return I`<div class="radios">
          ${(t.options??[]).map(n=>I`<label
              ><input
                type="radio"
                name=${r}
                .checked=${i===n}
                @change=${()=>this.setValue(e,t,n)}
              />${n}</label
            >`)}
        </div>`;case"selection":{const n=Array.isArray(i)?i:[];return I`<div class="checks">
          ${(t.options??[]).map(o=>I`<label
              ><input
                type="checkbox"
                .checked=${n.includes(o)}
                @change=${l=>{const d=l.target.checked?[...n,o]:n.filter(g=>g!==o);this.setValue(e,t,d)}}
              />${o}</label
            >`)}
        </div>`}case"string":default:return I`<input
          type="text"
          .value=${String(i??"")}
          @change=${n=>this.setValue(e,t,n.target.value)}
        />`}}renderSecretControl(e,t,r){const i=Object.keys(Di(this.secretsText));return I`<div class="secret-row">
      <input
        type="text"
        placeholder="value or \${secret:name}"
        .value=${String(r??"")}
        @change=${n=>this.setValue(e,t,n.target.value)}
      />
      ${i.length>0?I`<select
            title="Insert a secret reference"
            @change=${n=>{const o=n.target.value;o&&this.setValue(e,t,`\${secret:${o}}`),n.target.value=""}}
          >
            <option value="">🔑 secret…</option>
            ${i.map(n=>I`<option value=${n}>${n}</option>`)}
          </select>`:be}
    </div>`}renderField(e,t){const r=`${e.id}:${t.key}`;return I`<div class="field">
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
      ${t.description?I`<p class="desc">${t.description}</p>`:be}
    </div>`}renderGeneral(){return I`
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
    `}renderPanel(){if(this.active===Er)return this.renderGeneral();const e=this.tabs.find(t=>t.id===this.active);return e?I`
      <h3>${e.name}</h3>
      ${e.fields.length===0?I`<p class="empty">This plugin registered no settings.</p>`:e.fields.map(t=>this.renderField(e,t))}
    `:be}render(){return I`
      <dialog @cancel=${this.close} @keydown=${Vt}>
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
                  class=${this.active===Er?"active":""}
                  @click=${()=>this.active=Er}
                >
                  General
                </button>
                ${this.tabs.map(e=>I`<button
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
    `}};vn.styles=[Yt,Kt,He`
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
    `];Gn([W()],vn.prototype,"tabs",2);Gn([W()],vn.prototype,"active",2);Gn([W()],vn.prototype,"values",2);Gn([W()],vn.prototype,"placements",2);Gn([W()],vn.prototype,"secretsText",2);Gn([W()],vn.prototype,"workspaceTitle",2);vn=Gn([tt("settings-dialog")],vn);var Hm=Object.defineProperty,Wm=Object.getOwnPropertyDescriptor,fr=(e,t,r,i)=>{for(var n=i>1?void 0:i?Wm(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Hm(t,r,n),n};const Km={Windows:0,Actions:1,App:2,Tables:3};function La(e){return Km[e]??3}function Vm(e){return e?e.trimStart().startsWith("<svg")?I`<span class="cmd-svg">${Gs(e)}</span>`:I`<span class="mi sm">${e}</span>`:I`<span class="mi sm">chevron_right</span>`}let jn=class extends Ne{constructor(){super(...arguments),this.search="",this.items=[],this.selected=0,this.api=null}async open(){const e=await ge();this.api=e.api,this.items=await this.buildItems(),this.search="",this.selected=0,await this.updateComplete,this.dialogEl&&!this.dialogEl.open&&this.dialogEl.showModal(),this.inputEl?.focus()}async buildItems(){const e=await ge(),t=e.api,r=[];for(const n of e.registries.commands)r.push({id:n.id,title:n.title,group:n.group??"Commands",...n.icon?{icon:n.icon}:{},haystack:[n.title,n.group,...n.keywords??[]].join(" ").toLowerCase(),run:()=>n.run(t)});for(const n of[...e.registries.headerButtons,...e.registries.footerButtons])r.push({id:`button:${n.id}`,title:n.label,group:"Actions",...n.icon?{icon:n.icon}:{},haystack:`${n.label} ${n.tooltip??""}`.toLowerCase(),run:()=>n.onClick(t)});const i=await t.store.tables.find({workspaceId:e.workspaceId});i.sort((n,o)=>n.name.localeCompare(o.name));for(const n of i)r.push({id:`goto:${n.id}`,title:`Go to: ${n.name}`,group:"Tables",icon:"table_chart",haystack:`${n.name} go to table`.toLowerCase(),run:()=>{Xf(n.id)}});return r.map((n,o)=>({it:n,i:o})).sort((n,o)=>La(n.it.group)-La(o.it.group)||n.i-o.i).map(({it:n})=>n)}get filtered(){const e=this.search.trim().toLowerCase();return e?this.items.filter(t=>t.haystack.includes(e)):this.items}close(){this.dialogEl?.close()}onInput(e){this.search=e.target.value,this.selected=0}onKeydown(e){const t=this.filtered;if(e.key==="ArrowDown")e.preventDefault(),this.selected=t.length?(this.selected+1)%t.length:0;else if(e.key==="ArrowUp")e.preventDefault(),this.selected=t.length?(this.selected-1+t.length)%t.length:0;else if(e.key==="Enter"){e.preventDefault();const r=t[this.selected];r&&this.execute(r)}}async execute(e){this.close();try{await e.run()}catch(t){console.error(`[command:${e.id}]`,t)}}render(){const e=this.filtered;let t="";return I`
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
          ${e.length===0?I`<div class="empty">No matching commands.</div>`:e.map((r,i)=>{const n=r.group!==t?(t=r.group,r.group):null;return I`
                  ${n?I`<div class="group-head">${n}</div>`:""}
                  <div
                    class=${`item${i===this.selected?" sel":""}`}
                    @mousemove=${()=>this.selected=i}
                    @click=${()=>this.execute(r)}
                  >
                    ${Vm(r.icon)}
                    <span class="title">${r.title}</span>
                  </div>
                `})}
        </div>
      </dialog>
    `}};jn.styles=[Yt,He`
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
    `];fr([W()],jn.prototype,"search",2);fr([W()],jn.prototype,"items",2);fr([W()],jn.prototype,"selected",2);fr([dn("dialog")],jn.prototype,"dialogEl",2);fr([dn("input")],jn.prototype,"inputEl",2);jn=fr([tt("command-palette-dialog")],jn);var Gm=Object.defineProperty,Ym=Object.getOwnPropertyDescriptor,Xt=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ym(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Gm(t,r,n),n};let _t=class extends Ne{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.tableColumns=[],this.rows=[],this.showColsMenu=!1,this.allRows=[],this.searchQuery="",this.globalQuery="",this.onSearch=e=>{const t=e.detail;t.tableId===this.viewInstanceId&&(this.searchQuery=t.query??"",this.recompute())},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??"",this.recompute()}}get templateOn(){return this.instance?.templateEnabled!==!1}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:table-search",this.onSearch),document.addEventListener("easydb:global-search",this.onGlobalSearch),await this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:table-search",this.onSearch),document.removeEventListener("easydb:global-search",this.onGlobalSearch),this.rowsUnsub?.(),this.instUnsub?.()}async updated(e){e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}async reload(){this.rowsUnsub?.(),this.loaded=!1,await this.load()}async load(){if(!this.viewInstanceId)return;this.rowsUnsub?.(),this.instUnsub?.();const e=await ge(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const r=await e.store.tables.findOne(t.tableId);this.tableColumns=r?.columns??[],r&&t.tableName!==r.name&&e.store.viewInstances.patch(t.id,{tableName:r.name});const i=new Map(this.tableColumns.map(o=>[o.field,o]));this.columns=t.visibleColumns.map(o=>i.get(o)??{field:o,label:o,type:"string"}),this.instUnsub=e.store.viewInstances.subscribe(o=>{const l=o.find(c=>c.id===this.viewInstanceId);if(l){if(l.tableId!==this.instance?.tableId){this.instance=l,this.reload();return}this.instance=l,this.recompute()}});const n=e.store.rows(t.tableId);this.rowsUnsub=n.subscribe(o=>{this.allRows=o,this.recompute()}),this.allRows=await n.find(),this.recompute(),this.loaded=!0}recompute(){if(!this.instance)return;let e=Np(this.allRows,this.instance);const t=(o,l)=>Object.values(o.data).some(c=>c!=null&&String(c).toLowerCase().includes(l)),r=this.searchQuery.trim(),i=this.globalQuery.trim();r&&(e=ki(e,r,t)),i&&(e=ki(e,i,t));const n=this.instance.limit??0;n>0&&e.length>n&&(e=e.slice(0,n)),this.rows=e,this.templateOn&&ml(this.viewInstanceId,e.length,this.allRows.length)}async toggleTemplate(){if(!this.instance)return;const e=!this.templateOn;await(await ge()).store.viewInstances.patch(this.instance.id,{templateEnabled:e,updatedAt:Date.now()}),this.instance={...this.instance,templateEnabled:e},this.showColsMenu=!1}editTemplate(){!this.instance||!this.template||Fs(this.instance.tableId,{editTemplateId:this.template.id})}editView(){this.instance&&Fs(this.instance.tableId,{editInstanceId:this.instance.id})}async toggleColumn(e){if(!this.instance)return;const t=this.instance.visibleColumns,i=t.includes(e)?t.filter(o=>o!==e):[...t,e];if(i.length===0)return;await(await ge()).store.viewInstances.patch(this.instance.id,{visibleColumns:i,updatedAt:Date.now()}),this.instance={...this.instance,visibleColumns:i}}renderTable(){return this.rows.length===0?I`<div class="vw-empty">No rows.</div>`:I`
      <table class="vw-table">
        <thead>
          <tr>
            ${this.columns.map(e=>I`<th>${e.label||e.field}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map(e=>I`<tr>
                ${this.columns.map(t=>{const r=e.data[t.field];return I`<td>${r==null?"":String(r)}</td>`})}
              </tr>`)}
        </tbody>
      </table>
    `}renderTemplated(){const e=this.template;if(!e)return I`<div class="vw-empty">This view's template is missing.</div>`;if(Up(e.rowHtml)){const t=this.instance?.mapping??{},r=this.rows.map(n=>Lp(e.rowHtml,n,t)).join(""),i=(e.headerHtml??"")+r+(e.footerHtml??"");return I`<div class="vw-root">${rr(i)}</div>`}return I`<div class="vw-root">
      ${e.headerHtml?.trim()?I`<div class="vw-html">${rr(e.headerHtml)}</div>`:be}
      ${this.renderTable()}
      ${e.footerHtml?.trim()?I`<div class="vw-html">${rr(e.footerHtml)}</div>`:be}
    </div>`}renderFooter(){if(!this.instance)return be;const e=this.templateOn,t=new Set(this.instance.visibleColumns);return I`<div class="vw-footer">
      ${!e&&this.showColsMenu?I`<div class="cols-menu">
            ${this.tableColumns.map(r=>I`<label
                  ><input
                    type="checkbox"
                    .checked=${t.has(r.field)}
                    @change=${()=>void this.toggleColumn(r.field)}
                  />${r.label||r.field}</label
                >`)}
          </div>`:be}
      ${e?be:I`<button
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
      ${this.template?I`<button
            class="edit-template"
            aria-label="Edit template"
            title=${`Edit the "${this.template.name}" template`}
            @click=${()=>this.editTemplate()}
          >
            <span class="mi">code</span>
          </button>`:be}
      <button
        class=${e?"":"active"}
        title=${e?"Show as a table (turn the template off)":"Show through the template"}
        aria-label="Toggle template"
        aria-pressed=${e?"false":"true"}
        @click=${()=>void this.toggleTemplate()}
      >
        <span class="mi">table_view</span>
      </button>
    </div>`}render(){if(!this.loaded)return I`<div class="vw-body scroll"><div class="vw-loading">Loading…</div></div>`;if(this.error)return I`<div class="vw-body scroll"><div class="vw-empty">${this.error}</div></div>`;const t=this.templateOn?I`<div class="vw-body scroll">${this.renderTemplated()}</div>`:I`<div class="vw-body grid">
          <data-table
            .tableId=${this.instance?.tableId??""}
            .viewInstanceId=${this.viewInstanceId}
          ></data-table>
        </div>`;return I`${t}${this.renderFooter()}`}};_t.styles=[Yt,He`
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
    `];Xt([Mt({type:String})],_t.prototype,"viewInstanceId",2);Xt([W()],_t.prototype,"loaded",2);Xt([W()],_t.prototype,"error",2);Xt([W()],_t.prototype,"instance",2);Xt([W()],_t.prototype,"template",2);Xt([W()],_t.prototype,"columns",2);Xt([W()],_t.prototype,"tableColumns",2);Xt([W()],_t.prototype,"rows",2);Xt([W()],_t.prototype,"showColsMenu",2);Xt([W()],_t.prototype,"searchQuery",2);Xt([W()],_t.prototype,"globalQuery",2);_t=Xt([tt("view-window")],_t);const en=new Map;let Ma=!1;function Ba(e){e.panel.setHeaderTitle?.(e.name+gl(e.count,e.total))}function Xm(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function Qm(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function ec(e){return`view-panel-${Qm(e)}`}async function Jm(){if(Ma)return;Ma=!0;const e=await ge(),t=r=>r.filter(i=>i.workspaceId===e.workspaceId&&i.open);for(const r of t(await e.store.viewInstances.find()))Na(r,e);e.store.viewInstances.subscribe(r=>{const i=new Map(t(r).map(n=>[n.id,n]));for(const n of[...en.keys()])i.has(n)||eg(n);for(const[n,o]of i)en.has(n)||Na(o,e)}),e.store.tables.subscribe(r=>void Zm(e,r)),document.addEventListener(Ci,r=>{const i=r.detail,n=en.get(i.key);n&&(n.count=i.count,n.total=i.total,Ba(n))}),document.addEventListener("easydb:reload-view",r=>{const i=r.detail?.instanceId;if(!i)return;const n=en.get(i);n&&(async()=>{const o=await e.store.viewInstances.findOne(i);o&&(n.name=o.name,Ba(n)),n.el.reload()})()}),document.addEventListener("easydb:reload-views",()=>{for(const{el:r}of en.values())r.reload()})}async function Zm(e,t){const r=t.filter(l=>l.workspaceId===e.workspaceId),i=new Set(r.map(l=>l.id)),n=new Map;for(const l of r)n.has(l.name)||n.set(l.name,l);const o=await e.store.viewInstances.find();for(const l of o){if(l.workspaceId!==e.workspaceId||i.has(l.tableId)||!l.tableName)continue;const c=n.get(l.tableName);c&&await e.store.viewInstances.patch(l.id,{tableId:c.id,updatedAt:Date.now()})}}function Na(e,t){if(en.has(e.id))return;const r=ec(e.id),i=document.createElement("view-window");i.viewInstanceId=e.id,i.style.height="100%";const n=e.windowGeometry,o=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:"480 520"},l=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:{my:"center-top",at:"center-top",offsetY:60},c=Ml(r,Nl),d=z.create({id:r,container:Xm(),headerTitle:e.name,theme:"#0891b2",content:i,...o,position:l,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>void Cs(e.id)},resizeit:{containment:!1,stop:()=>void Cs(e.id)},onstatuschange:S=>{S.status==="maximized"?c.enter():c.exit(),Cs(e.id)},onclosed:()=>{en.delete(e.id),c.exit(),t.store.viewInstances.patch(e.id,{open:!1,updatedAt:Date.now()}).catch(()=>{})}});en.set(e.id,{panel:d,el:i,name:e.name,count:-1,total:-1});const g=document.getElementById(r),x=document.createElement("panel-search");x.tableId=e.id,g?.querySelector(".jsPanel-controlbar")?.prepend(x);const y=g?.querySelector(".jsPanel-titlebar");y&&(y.tabIndex=-1,y.style.outline="none",y.addEventListener("pointerdown",()=>y.focus())),n?.maximized?queueMicrotask(()=>d.maximize?.()):n?.minimized&&queueMicrotask(()=>d.minimize?.())}function eg(e){const t=en.get(e);if(t){en.delete(e);try{t.panel.status!=="closed"&&t.panel.close()}catch{}}}async function Cs(e){const t=document.getElementById(ec(e)),r=en.get(e);if(!t||!r)return;const i=r.panel.status,n=i==="minimized",o=i==="maximized";try{const l=await ge(),c=(await l.store.viewInstances.findOne(e))?.windowGeometry;let d=t.offsetLeft,g=t.offsetTop,x=t.offsetWidth,y=t.offsetHeight;(n||o)&&c&&(d=c.x,g=c.y,x=c.w,y=c.h),d<=-9e3&&(d=c?.x??40);const S={x:d,y:g,w:x,h:y,z:0,minimized:n,maximized:o};await l.store.viewInstances.patch(e,{windowGeometry:S,updatedAt:Date.now()})}catch{}}var tg=Object.defineProperty,ng=Object.getOwnPropertyDescriptor,tc=(e,t,r,i)=>{for(var n=i>1?void 0:i?ng(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&tg(t,r,n),n};let _i=class extends Ne{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await ge();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(r=>this.tables=r.filter(i=>i.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(r=>r.workspaceId===this.workspaceId),await Zf(),await Jm()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?I``:I`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on the
      page, or click <strong>+ New Table</strong> above.
    </div>`}};_i.styles=He`
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
  `;tc([W()],_i.prototype,"tables",2);_i=tc([tt("table-list")],_i);var rg=Object.defineProperty,ig=Object.getOwnPropertyDescriptor,lo=(e,t,r,i)=>{for(var n=i>1?void 0:i?ig(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&rg(t,r,n),n};let Ir=class extends Ne{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await ge();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);if(!t)return;const r=new URLSearchParams(location.search);r.set("space",t.name);const i=`${location.pathname}?${r.toString()}${location.hash}`;location.assign(i)}async addWorkspace(){const t=await(await ge()).api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const r=new URLSearchParams(location.search);r.set("space",t.trim()),location.assign(`${location.pathname}?${r.toString()}${location.hash}`)}render(){return I`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>I`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};Ir.styles=[Yt,He`
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
  `];lo([W()],Ir.prototype,"workspaces",2);lo([W()],Ir.prototype,"current",2);Ir=lo([tt("workspace-selector")],Ir);var Ua=Object.freeze,nc=Object.defineProperty,sg=Object.getOwnPropertyDescriptor,Qt=(e,t,r,i)=>{for(var n=i>1?void 0:i?sg(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&nc(t,r,n),n},og=(e,t)=>Ua(nc(e,"raw",{value:Ua(e.slice())})),qa;function Ha(e){return e?e.trimStart().startsWith("<svg")?I`<span class="icon-svg">${Gs(e)}</span>`:I`<span class="mi sm">${e}</span>`:""}let Tt=class extends Ne{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.workspaceTitle="",this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId,{notice:t.detail.notice})},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onOpenSettings=()=>{this.settingsDialog?.open()},this.onOpenCommandPalette=()=>{this.commandPaletteDialog?.open()},this.onGlobalKeydown=e=>{(e.ctrlKey||e.metaKey)&&!e.altKey&&(e.key==="k"||e.key==="K")&&(e.preventDefault(),this.commandPaletteDialog?.open())},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{Wa(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!Wa(e))return;e.preventDefault();const t=await ge(),r=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:r,event:e});for(const i of[...t.registries.dropHandlers])try{if(await i(e,t.api))return}catch(n){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:n})}},this.runSlot=(e,t)=>{if(!this.api)return;const r=t?.currentTarget??void 0;Promise.resolve(e.onClick(this.api,{anchor:r})).catch(i=>{console.error(`[footer-button:${e.id}]`,i)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.addEventListener("easydb:open-settings",this.onOpenSettings),document.addEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.addEventListener("easydb:focus-search",this.openSearch),document.addEventListener("keydown",this.onGlobalKeydown),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.removeEventListener("easydb:open-settings",this.onOpenSettings),document.removeEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.removeEventListener("easydb:focus-search",this.openSearch),document.removeEventListener("keydown",this.onGlobalKeydown),this.workspaceUnsub?.()}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await ge();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e)),this.workspaceUnsub=e.store.workspaces.subscribe(t=>{const r=t.find(i=>i.id===e.workspaceId);this.workspaceTitle=r?.title?.trim()??""})}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){if(e.variant==="secondary")return I`
        <button class="icon-btn" title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
          ${Ha(e.icon)}
        </button>
      `;const r=t==="header"||e.variant==="primary"?"primary":"slot";return I`
      <button class=${r} title=${e.tooltip??e.label} @click=${i=>this.runSlot(e,i)}>
        ${Ha(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return I(qa||(qa=og([`
      <header>
        <strong
          >`,`
          <a
            class="version-link"
            href="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md"
            target="_blank"
            rel="noopener"
            title="View the changelog on GitHub"
            ><span class="version">v0.0.139</span></a
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
    `])),this.workspaceTitle||"easyDBAccess",this.headerButtons.filter(e=>e.variant!=="secondary").map(e=>this.renderSlotButton(e,"header")),this.searchOpen?I`<span class="search-wrap">
              <input
                class="search"
                type="search"
                placeholder="search all tables…"
                .value=${this.searchQuery}
                @input=${this.onSearchInput}
                @blur=${this.closeSearchOnBlur}
              />
              ${this.searchQuery.length>0?I`<button
                    class="search-clear"
                    title="Clear search"
                    aria-label="Clear search"
                    @mousedown=${this.clearSearch}
                  >
                    ×
                  </button>`:""}
            </span>`:I`<button
              class="icon-btn ${this.searchQuery.trim().length>0?"active":""}"
              title=${this.searchQuery.trim().length>0?`Filtering all tables: ${this.searchQuery}`:"Search across all tables in this workspace"}
              @click=${this.openSearch}
            >
              <span class="mi">search</span>
            </button>`,()=>this.api?.ui.openPluginManager(),this.headerButtons.filter(e=>e.variant==="secondary").map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};Tt.styles=[Yt,He`
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
    `];Qt([dn("new-table-dialog")],Tt.prototype,"dialog",2);Qt([dn("csv-paste-dialog")],Tt.prototype,"csvPasteDialog",2);Qt([dn("plugin-manager-dialog")],Tt.prototype,"pluginManagerDialog",2);Qt([dn("settings-dialog")],Tt.prototype,"settingsDialog",2);Qt([dn("command-palette-dialog")],Tt.prototype,"commandPaletteDialog",2);Qt([dn("input.search")],Tt.prototype,"searchInput",2);Qt([W()],Tt.prototype,"footerButtons",2);Qt([W()],Tt.prototype,"headerButtons",2);Qt([W()],Tt.prototype,"searchQuery",2);Qt([W()],Tt.prototype,"searchOpen",2);Qt([W()],Tt.prototype,"workspaceTitle",2);Tt=Qt([tt("app-shell")],Tt);function Wa(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([ge(),In(()=>Promise.resolve().then(()=>Kl),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});export{He as a,I as b,Vt as c,Kt as d,Yt as e,Ne as i,Gt as m,W as r,tt as t};
//# sourceMappingURL=index-eCw05aBQ.js.map
