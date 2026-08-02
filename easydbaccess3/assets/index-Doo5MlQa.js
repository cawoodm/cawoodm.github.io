(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const mh="modulepreload",gh=function(e){return"/easydbaccess3/"+e},Xa={},ct=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){let o=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=l?.nonce||l?.getAttribute("nonce");i=o(n.map(h=>{if(h=gh(h),h in Xa)return;Xa[h]=!0;const m=h.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${g}`))return;const w=document.createElement("link");if(w.rel=m?"stylesheet":mh,m||(w.as="script"),w.crossOrigin="",w.href=h,u&&w.setAttribute("nonce",u),document.head.appendChild(w),m)return new Promise((y,x)=>{w.addEventListener("load",y),w.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yi=globalThis,vo=yi.ShadowRoot&&(yi.ShadyCSS===void 0||yi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$o=Symbol(),Ja=new WeakMap;let Mc=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==$o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(vo&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Ja.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Ja.set(n,t))}return t}toString(){return this.cssText}};const bh=e=>new Mc(typeof e=="string"?e:e+"",void 0,$o),xe=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new Mc(n,e,$o)},wh=(e,t)=>{if(vo)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=yi.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},Za=vo?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return bh(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:yh,defineProperty:vh,getOwnPropertyDescriptor:$h,getOwnPropertyNames:xh,getOwnPropertySymbols:kh,getPrototypeOf:Ch}=Object,Ni=globalThis,el=Ni.trustedTypes,_h=el?el.emptyScript:"",Sh=Ni.reactiveElementPolyfillSupport,gr=(e,t)=>e,Ci={toAttribute(e,t){switch(t){case Boolean:e=e?_h:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},xo=(e,t)=>!yh(e,t),tl={attribute:!0,type:String,converter:Ci,reflect:!1,useDefault:!1,hasChanged:xo};Symbol.metadata??=Symbol("metadata"),Ni.litPropertyMetadata??=new WeakMap;let An=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=tl){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&vh(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:s}=$h(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get:i,set(o){const l=i?.call(this);s?.call(this,o),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??tl}static _$Ei(){if(this.hasOwnProperty(gr("elementProperties")))return;const t=Ch(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(gr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(gr("properties"))){const n=this.properties,r=[...xh(n),...kh(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(Za(i))}else t!==void 0&&n.push(Za(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wh(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:Ci).toAttribute(n,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,n){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Ci;this._$Em=i;const l=o.fromAttribute(n,s.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,n,r,i=!1,s){if(t!==void 0){const o=this.constructor;if(i===!1&&(s=this[t]),r??=o.getPropertyOptions(t),!((r.hasChanged??xo)(s,n)||r.useDefault&&r.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:i,wrapped:s},o){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??n??this[t]),s!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,s]of r){const{wrapped:o}=s,l=this[i];o!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,s,l)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};An.elementStyles=[],An.shadowRootOptions={mode:"open"},An[gr("elementProperties")]=new Map,An[gr("finalized")]=new Map,Sh?.({ReactiveElement:An}),(Ni.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ko=globalThis,nl=e=>e,_i=ko.trustedTypes,rl=_i?_i.createPolicy("lit-html",{createHTML:e=>e}):void 0,jc="$lit$",Yt=`lit$${Math.random().toFixed(9).slice(2)}$`,Nc="?"+Yt,Eh=`<${Nc}>`,gn=document,wr=()=>gn.createComment(""),yr=e=>e===null||typeof e!="object"&&typeof e!="function",Co=Array.isArray,Th=e=>Co(e)||typeof e?.[Symbol.iterator]=="function",Hs=`[ 	
\f\r]`,lr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,il=/-->/g,sl=/>/g,dn=RegExp(`>|${Hs}(?:([^\\s"'>=/]+)(${Hs}*=${Hs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ol=/'/g,al=/"/g,zc=/^(?:script|style|textarea|title)$/i,Ih=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),k=Ih(1),bn=Symbol.for("lit-noChange"),re=Symbol.for("lit-nothing"),ll=new WeakMap,mn=gn.createTreeWalker(gn,129);function Uc(e,t){if(!Co(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return rl!==void 0?rl.createHTML(t):t}const Ah=(e,t)=>{const n=e.length-1,r=[];let i,s=t===2?"<svg>":t===3?"<math>":"",o=lr;for(let l=0;l<n;l++){const u=e[l];let h,m,g=-1,w=0;for(;w<u.length&&(o.lastIndex=w,m=o.exec(u),m!==null);)w=o.lastIndex,o===lr?m[1]==="!--"?o=il:m[1]!==void 0?o=sl:m[2]!==void 0?(zc.test(m[2])&&(i=RegExp("</"+m[2],"g")),o=dn):m[3]!==void 0&&(o=dn):o===dn?m[0]===">"?(o=i??lr,g=-1):m[1]===void 0?g=-2:(g=o.lastIndex-m[2].length,h=m[1],o=m[3]===void 0?dn:m[3]==='"'?al:ol):o===al||o===ol?o=dn:o===il||o===sl?o=lr:(o=dn,i=void 0);const y=o===dn&&e[l+1].startsWith("/>")?" ":"";s+=o===lr?u+Eh:g>=0?(r.push(h),u.slice(0,g)+jc+u.slice(g)+Yt+y):u+Yt+(g===-2?l:y)}return[Uc(e,s+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class vr{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const l=t.length-1,u=this.parts,[h,m]=Ah(t,n);if(this.el=vr.createElement(h,r),mn.currentNode=this.el.content,n===2||n===3){const g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(i=mn.nextNode())!==null&&u.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const g of i.getAttributeNames())if(g.endsWith(jc)){const w=m[o++],y=i.getAttribute(g).split(Yt),x=/([.?@])?(.*)/.exec(w);u.push({type:1,index:s,name:x[2],strings:y,ctor:x[1]==="."?Oh:x[1]==="?"?Dh:x[1]==="@"?Ph:zi}),i.removeAttribute(g)}else g.startsWith(Yt)&&(u.push({type:6,index:s}),i.removeAttribute(g));if(zc.test(i.tagName)){const g=i.textContent.split(Yt),w=g.length-1;if(w>0){i.textContent=_i?_i.emptyScript:"";for(let y=0;y<w;y++)i.append(g[y],wr()),mn.nextNode(),u.push({type:2,index:++s});i.append(g[w],wr())}}}else if(i.nodeType===8)if(i.data===Nc)u.push({type:2,index:s});else{let g=-1;for(;(g=i.data.indexOf(Yt,g+1))!==-1;)u.push({type:7,index:s}),g+=Yt.length-1}s++}}static createElement(t,n){const r=gn.createElement("template");return r.innerHTML=t,r}}function Dn(e,t,n=e,r){if(t===bn)return t;let i=r!==void 0?n._$Co?.[r]:n._$Cl;const s=yr(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=i:n._$Cl=i),i!==void 0&&(t=Dn(e,i._$AS(e,t.values),i,r)),t}class Rh{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=(t?.creationScope??gn).importNode(n,!0);mn.currentNode=i;let s=mn.nextNode(),o=0,l=0,u=r[0];for(;u!==void 0;){if(o===u.index){let h;u.type===2?h=new Tr(s,s.nextSibling,this,t):u.type===1?h=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(h=new Lh(s,this,t)),this._$AV.push(h),u=r[++l]}o!==u?.index&&(s=mn.nextNode(),o++)}return mn.currentNode=gn,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class Tr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=re,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Dn(this,t,n),yr(t)?t===re||t==null||t===""?(this._$AH!==re&&this._$AR(),this._$AH=re):t!==this._$AH&&t!==bn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Th(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==re&&yr(this._$AH)?this._$AA.nextSibling.data=t:this.T(gn.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=vr.createElement(Uc(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(n);else{const s=new Rh(i,this),o=s.u(this.options);s.p(n),this.T(o),this._$AH=s}}_$AC(t){let n=ll.get(t.strings);return n===void 0&&ll.set(t.strings,n=new vr(t)),n}k(t){Co(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of t)i===n.length?n.push(r=new Tr(this.O(wr()),this.O(wr()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const r=nl(t).nextSibling;nl(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class zi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,s){this.type=1,this._$AH=re,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=re}_$AI(t,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)t=Dn(this,t,n,0),o=!yr(t)||t!==this._$AH&&t!==bn,o&&(this._$AH=t);else{const l=t;let u,h;for(t=s[0],u=0;u<s.length-1;u++)h=Dn(this,l[r+u],n,u),h===bn&&(h=this._$AH[u]),o||=!yr(h)||h!==this._$AH[u],h===re?t=re:t!==re&&(t+=(h??"")+s[u+1]),this._$AH[u]=h}o&&!i&&this.j(t)}j(t){t===re?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Oh extends zi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===re?void 0:t}}class Dh extends zi{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==re)}}class Ph extends zi{constructor(t,n,r,i,s){super(t,n,r,i,s),this.type=5}_$AI(t,n=this){if((t=Dn(this,t,n,0)??re)===bn)return;const r=this._$AH,i=t===re&&r!==re||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==re&&(r===re||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Lh{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Dn(this,t)}}const Mh=ko.litHtmlPolyfillSupport;Mh?.(vr,Tr),(ko.litHtmlVersions??=[]).push("3.3.3");const jh=(e,t,n)=>{const r=n?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const s=n?.renderBefore??null;r._$litPart$=i=new Tr(t.insertBefore(wr(),s),s,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _o=globalThis;let ve=class extends An{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=jh(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return bn}};ve._$litElement$=!0,ve.finalized=!0,_o.litElementHydrateSupport?.({LitElement:ve});const Nh=_o.litElementPolyfillSupport;Nh?.({LitElement:ve});(_o.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zh={attribute:!0,type:String,converter:Ci,reflect:!1,hasChanged:xo},Uh=(e=zh,t,n)=>{const{kind:r,metadata:i}=n;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(n.name,e),r==="accessor"){const{name:o}=n;return{set(l){const u=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,u,e,!0,l)},init(l){return l!==void 0&&this.C(o,void 0,e,l),l}}}if(r==="setter"){const{name:o}=n;return function(l){const u=this[o];t.call(this,l),this.requestUpdate(o,u,e,!0,l)}}throw Error("Unsupported decorator location: "+r)};function dt(e){return(t,n)=>typeof n=="object"?Uh(e,t,n):((r,i,s)=>{const o=i.hasOwnProperty(s);return i.constructor.createProperty(s,r),o?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(e){return dt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fh=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Dt(e,t){return(n,r,i)=>{const s=o=>o.renderRoot?.querySelector(e)??null;return Fh(n,r,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bh={CHILD:2},Fc=e=>(...t)=>({_$litDirective$:e,values:t});class qh{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Si extends qh{constructor(t){if(super(t),this.it=re,t.type!==Bh.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===re||t==null)return this._t=void 0,this.it=t;if(t===bn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Si.directiveName="unsafeHTML",Si.resultType=1;const On=Fc(Si);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class no extends Si{}no.directiveName="unsafeSVG",no.resultType=2;const So=Fc(no);var Hh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Kh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vi={exports:{}},Vh=vi.exports,cl;function Gh(){return cl||(cl=1,(function(e,t){(function(n,r){e.exports=r()})(Vh,function(){var n=function(a,c){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,f){d.__proto__=f}||function(d,f){for(var p in f)Object.prototype.hasOwnProperty.call(f,p)&&(d[p]=f[p])})(a,c)},r=function(){return(r=Object.assign||function(a){for(var c,d=1,f=arguments.length;d<f;d++)for(var p in c=arguments[d])Object.prototype.hasOwnProperty.call(c,p)&&(a[p]=c[p]);return a}).apply(this,arguments)};function i(a,c,d){for(var f,p=0,b=c.length;p<b;p++)!f&&p in c||((f=f||Array.prototype.slice.call(c,0,p))[p]=c[p]);return a.concat(f||Array.prototype.slice.call(c))}var s=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Hh,o=Object.keys,l=Array.isArray;function u(a,c){return typeof c!="object"||o(c).forEach(function(d){a[d]=c[d]}),a}typeof Promise>"u"||s.Promise||(s.Promise=Promise);var h=Object.getPrototypeOf,m={}.hasOwnProperty;function g(a,c){return m.call(a,c)}function w(a,c){typeof c=="function"&&(c=c(h(a))),(typeof Reflect>"u"?o:Reflect.ownKeys)(c).forEach(function(d){x(a,d,c[d])})}var y=Object.defineProperty;function x(a,c,d,f){y(a,c,u(d&&g(d,"get")&&typeof d.get=="function"?{get:d.get,set:d.set,configurable:!0}:{value:d,configurable:!0,writable:!0},f))}function C(a){return{from:function(c){return a.prototype=Object.create(c.prototype),x(a.prototype,"constructor",a),{extend:w.bind(null,a.prototype)}}}}var O=Object.getOwnPropertyDescriptor,M=[].slice;function L(a,c,d){return M.call(a,c,d)}function F(a,c){return c(a)}function V(a){if(!a)throw new Error("Assertion Failed")}function W(a){s.setImmediate?setImmediate(a):setTimeout(a,0)}function G(a,c){if(typeof c=="string"&&g(a,c))return a[c];if(!c)return a;if(typeof c!="string"){for(var d=[],f=0,p=c.length;f<p;++f){var b=G(a,c[f]);d.push(b)}return d}var v=c.indexOf(".");if(v!==-1){var $=a[c.substr(0,v)];return $==null?void 0:G($,c.substr(v+1))}}function q(a,c,d){if(a&&c!==void 0&&!("isFrozen"in Object&&Object.isFrozen(a)))if(typeof c!="string"&&"length"in c){V(typeof d!="string"&&"length"in d);for(var f=0,p=c.length;f<p;++f)q(a,c[f],d[f])}else{var b,v,$=c.indexOf(".");$!==-1?(b=c.substr(0,$),(v=c.substr($+1))===""?d===void 0?l(a)&&!isNaN(parseInt(b))?a.splice(b,1):delete a[b]:a[b]=d:q($=!($=a[b])||!g(a,b)?a[b]={}:$,v,d)):d===void 0?l(a)&&!isNaN(parseInt(c))?a.splice(c,1):delete a[c]:a[c]=d}}function Y(a){var c,d={};for(c in a)g(a,c)&&(d[c]=a[c]);return d}var ie=[].concat;function se(a){return ie.apply([],a)}var Lt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(se([8,16,32,64].map(function(a){return["Int","Uint","Float"].map(function(c){return c+a+"Array"})}))).filter(function(a){return s[a]}),H=new Set(Lt.map(function(a){return s[a]})),K=null;function ce(a){return K=new WeakMap,a=(function c(d){if(!d||typeof d!="object")return d;var f=K.get(d);if(f)return f;if(l(d)){f=[],K.set(d,f);for(var p=0,b=d.length;p<b;++p)f.push(c(d[p]))}else if(H.has(d.constructor))f=d;else{var v,$=h(d);for(v in f=$===Object.prototype?{}:Object.create($),K.set(d,f),d)g(d,v)&&(f[v]=c(d[v]))}return f})(a),K=null,a}var pe={}.toString;function Te(a){return pe.call(a).slice(8,-1)}var ze=typeof Symbol<"u"?Symbol.iterator:"@@iterator",gt=typeof ze=="symbol"?function(a){var c;return a!=null&&(c=a[ze])&&c.apply(a)}:function(){return null};function de(a,c){return c=a.indexOf(c),0<=c&&a.splice(c,1),0<=c}var Pe={};function Ae(a){var c,d,f,p;if(arguments.length===1){if(l(a))return a.slice();if(this===Pe&&typeof a=="string")return[a];if(p=gt(a)){for(d=[];!(f=p.next()).done;)d.push(f.value);return d}if(a==null)return[a];if(typeof(c=a.length)!="number")return[a];for(d=new Array(c);c--;)d[c]=a[c];return d}for(c=arguments.length,d=new Array(c);c--;)d[c]=arguments[c];return d}var et=typeof Symbol<"u"?function(a){return a[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Qn=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],bt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Qn),ye={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function He(a,c){this.name=a,this.message=c}function os(a,c){return a+". Errors: "+Object.keys(c).map(function(d){return c[d].toString()}).filter(function(d,f,p){return p.indexOf(d)===f}).join(`
`)}function $n(a,c,d,f){this.failures=c,this.failedKeys=f,this.successCount=d,this.message=os(a,c)}function xn(a,c){this.name="BulkError",this.failures=Object.keys(c).map(function(d){return c[d]}),this.failuresByPos=c,this.message=os(a,this.failures)}C(He).from(Error).extend({toString:function(){return this.name+": "+this.message}}),C($n).from(He),C(xn).from(He);var as=bt.reduce(function(a,c){return a[c]=c+"Error",a},{}),Nd=He,ue=bt.reduce(function(a,c){var d=c+"Error";function f(p,b){this.name=d,p?typeof p=="string"?(this.message="".concat(p).concat(b?`
 `+b:""),this.inner=b||null):typeof p=="object"&&(this.message="".concat(p.name," ").concat(p.message),this.inner=p):(this.message=ye[c]||d,this.inner=null)}return C(f).from(Nd),a[c]=f,a},{});ue.Syntax=SyntaxError,ue.Type=TypeError,ue.Range=RangeError;var ba=Qn.reduce(function(a,c){return a[c+"Error"]=ue[c],a},{}),jr=bt.reduce(function(a,c){return["Syntax","Type","Range"].indexOf(c)===-1&&(a[c+"Error"]=ue[c]),a},{});function $e(){}function Wn(a){return a}function zd(a,c){return a==null||a===Wn?c:function(d){return c(a(d))}}function en(a,c){return function(){a.apply(this,arguments),c.apply(this,arguments)}}function Ud(a,c){return a===$e?c:function(){var d=a.apply(this,arguments);d!==void 0&&(arguments[0]=d);var f=this.onsuccess,p=this.onerror;this.onsuccess=null,this.onerror=null;var b=c.apply(this,arguments);return f&&(this.onsuccess=this.onsuccess?en(f,this.onsuccess):f),p&&(this.onerror=this.onerror?en(p,this.onerror):p),b!==void 0?b:d}}function Fd(a,c){return a===$e?c:function(){a.apply(this,arguments);var d=this.onsuccess,f=this.onerror;this.onsuccess=this.onerror=null,c.apply(this,arguments),d&&(this.onsuccess=this.onsuccess?en(d,this.onsuccess):d),f&&(this.onerror=this.onerror?en(f,this.onerror):f)}}function Bd(a,c){return a===$e?c:function(d){var f=a.apply(this,arguments);u(d,f);var p=this.onsuccess,b=this.onerror;return this.onsuccess=null,this.onerror=null,d=c.apply(this,arguments),p&&(this.onsuccess=this.onsuccess?en(p,this.onsuccess):p),b&&(this.onerror=this.onerror?en(b,this.onerror):b),f===void 0?d===void 0?void 0:d:u(f,d)}}function qd(a,c){return a===$e?c:function(){return c.apply(this,arguments)!==!1&&a.apply(this,arguments)}}function ls(a,c){return a===$e?c:function(){var d=a.apply(this,arguments);if(d&&typeof d.then=="function"){for(var f=this,p=arguments.length,b=new Array(p);p--;)b[p]=arguments[p];return d.then(function(){return c.apply(f,b)})}return c.apply(this,arguments)}}jr.ModifyError=$n,jr.DexieError=He,jr.BulkError=xn;var St=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function wa(a){St=a}var Yn={},ya=100,Lt=typeof Promise>"u"?[]:(function(){var a=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[a,h(a),a];var c=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[c,h(c),a]})(),Qn=Lt[0],bt=Lt[1],Lt=Lt[2],bt=bt&&bt.then,tn=Qn&&Qn.constructor,cs=!!Lt,Xn=function(a,c){Jn.push([a,c]),Nr&&(queueMicrotask(Kd),Nr=!1)},us=!0,Nr=!0,nn=[],zr=[],ds=Wn,Ft={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:$e,pgp:!1,env:{},finalize:$e},le=Ft,Jn=[],rn=0,Ur=[];function ne(a){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var c=this._PSD=le;if(typeof a!="function"){if(a!==Yn)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&fs(this,this._value))}this._state=null,this._value=null,++c.ref,(function d(f,p){try{p(function(b){if(f._state===null){if(b===f)throw new TypeError("A promise cannot be resolved with itself.");var v=f._lib&&kn();b&&typeof b.then=="function"?d(f,function($,S){b instanceof ne?b._then($,S):b.then($,S)}):(f._state=!0,f._value=b,$a(f)),v&&Cn()}},fs.bind(null,f))}catch(b){fs(f,b)}})(this,a)}var hs={get:function(){var a=le,c=Hr;function d(f,p){var b=this,v=!a.global&&(a!==le||c!==Hr),$=v&&!qt(),S=new ne(function(T,R){ps(b,new va(ka(f,a,v,$),ka(p,a,v,$),T,R,a))});return this._consoleTask&&(S._consoleTask=this._consoleTask),S}return d.prototype=Yn,d},set:function(a){x(this,"then",a&&a.prototype===Yn?hs:{get:function(){return a},set:hs.set})}};function va(a,c,d,f,p){this.onFulfilled=typeof a=="function"?a:null,this.onRejected=typeof c=="function"?c:null,this.resolve=d,this.reject=f,this.psd=p}function fs(a,c){var d,f;zr.push(c),a._state===null&&(d=a._lib&&kn(),c=ds(c),a._state=!1,a._value=c,f=a,nn.some(function(p){return p._value===f._value})||nn.push(f),$a(a),d&&Cn())}function $a(a){var c=a._listeners;a._listeners=[];for(var d=0,f=c.length;d<f;++d)ps(a,c[d]);var p=a._PSD;--p.ref||p.finalize(),rn===0&&(++rn,Xn(function(){--rn==0&&ms()},[]))}function ps(a,c){if(a._state!==null){var d=a._state?c.onFulfilled:c.onRejected;if(d===null)return(a._state?c.resolve:c.reject)(a._value);++c.psd.ref,++rn,Xn(Hd,[d,a,c])}else a._listeners.push(c)}function Hd(a,c,d){try{var f,p=c._value;!c._state&&zr.length&&(zr=[]),f=St&&c._consoleTask?c._consoleTask.run(function(){return a(p)}):a(p),c._state||zr.indexOf(p)!==-1||(function(b){for(var v=nn.length;v;)if(nn[--v]._value===b._value)return nn.splice(v,1)})(c),d.resolve(f)}catch(b){d.reject(b)}finally{--rn==0&&ms(),--d.psd.ref||d.psd.finalize()}}function Kd(){sn(Ft,function(){kn()&&Cn()})}function kn(){var a=us;return Nr=us=!1,a}function Cn(){var a,c,d;do for(;0<Jn.length;)for(a=Jn,Jn=[],d=a.length,c=0;c<d;++c){var f=a[c];f[0].apply(null,f[1])}while(0<Jn.length);Nr=us=!0}function ms(){var a=nn;nn=[],a.forEach(function(f){f._PSD.onunhandled.call(null,f._value,f)});for(var c=Ur.slice(0),d=c.length;d;)c[--d]()}function Fr(a){return new ne(Yn,!1,a)}function Ee(a,c){var d=le;return function(){var f=kn(),p=le;try{return Ht(d,!0),a.apply(this,arguments)}catch(b){c&&c(b)}finally{Ht(p,!1),f&&Cn()}}}w(ne.prototype,{then:hs,_then:function(a,c){ps(this,new va(null,null,a,c,le))},catch:function(a){if(arguments.length===1)return this.then(null,a);var c=a,d=arguments[1];return typeof c=="function"?this.then(null,function(f){return(f instanceof c?d:Fr)(f)}):this.then(null,function(f){return(f&&f.name===c?d:Fr)(f)})},finally:function(a){return this.then(function(c){return ne.resolve(a()).then(function(){return c})},function(c){return ne.resolve(a()).then(function(){return Fr(c)})})},timeout:function(a,c){var d=this;return a<1/0?new ne(function(f,p){var b=setTimeout(function(){return p(new ue.Timeout(c))},a);d.then(f,p).finally(clearTimeout.bind(null,b))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&x(ne.prototype,Symbol.toStringTag,"Dexie.Promise"),Ft.env=xa(),w(ne,{all:function(){var a=Ae.apply(null,arguments).map(Kr);return new ne(function(c,d){a.length===0&&c([]);var f=a.length;a.forEach(function(p,b){return ne.resolve(p).then(function(v){a[b]=v,--f||c(a)},d)})})},resolve:function(a){return a instanceof ne?a:a&&typeof a.then=="function"?new ne(function(c,d){a.then(c,d)}):new ne(Yn,!0,a)},reject:Fr,race:function(){var a=Ae.apply(null,arguments).map(Kr);return new ne(function(c,d){a.map(function(f){return ne.resolve(f).then(c,d)})})},PSD:{get:function(){return le},set:function(a){return le=a}},totalEchoes:{get:function(){return Hr}},newPSD:Bt,usePSD:sn,scheduler:{get:function(){return Xn},set:function(a){Xn=a}},rejectionMapper:{get:function(){return ds},set:function(a){ds=a}},follow:function(a,c){return new ne(function(d,f){return Bt(function(p,b){var v=le;v.unhandleds=[],v.onunhandled=b,v.finalize=en(function(){var $,S=this;$=function(){S.unhandleds.length===0?p():b(S.unhandleds[0])},Ur.push(function T(){$(),Ur.splice(Ur.indexOf(T),1)}),++rn,Xn(function(){--rn==0&&ms()},[])},v.finalize),a()},c,d,f)})}}),tn&&(tn.allSettled&&x(ne,"allSettled",function(){var a=Ae.apply(null,arguments).map(Kr);return new ne(function(c){a.length===0&&c([]);var d=a.length,f=new Array(d);a.forEach(function(p,b){return ne.resolve(p).then(function(v){return f[b]={status:"fulfilled",value:v}},function(v){return f[b]={status:"rejected",reason:v}}).then(function(){return--d||c(f)})})})}),tn.any&&typeof AggregateError<"u"&&x(ne,"any",function(){var a=Ae.apply(null,arguments).map(Kr);return new ne(function(c,d){a.length===0&&d(new AggregateError([]));var f=a.length,p=new Array(f);a.forEach(function(b,v){return ne.resolve(b).then(function($){return c($)},function($){p[v]=$,--f||d(new AggregateError(p))})})})}),tn.withResolvers&&(ne.withResolvers=tn.withResolvers));var Me={awaits:0,echoes:0,id:0},Vd=0,Br=[],qr=0,Hr=0,Gd=0;function Bt(a,c,d,f){var p=le,b=Object.create(p);return b.parent=p,b.ref=0,b.global=!1,b.id=++Gd,Ft.env,b.env=cs?{Promise:ne,PromiseProp:{value:ne,configurable:!0,writable:!0},all:ne.all,race:ne.race,allSettled:ne.allSettled,any:ne.any,resolve:ne.resolve,reject:ne.reject}:{},c&&u(b,c),++p.ref,b.finalize=function(){--this.parent.ref||this.parent.finalize()},f=sn(b,a,d,f),b.ref===0&&b.finalize(),f}function _n(){return Me.id||(Me.id=++Vd),++Me.awaits,Me.echoes+=ya,Me.id}function qt(){return!!Me.awaits&&(--Me.awaits==0&&(Me.id=0),Me.echoes=Me.awaits*ya,!0)}function Kr(a){return Me.echoes&&a&&a.constructor===tn?(_n(),a.then(function(c){return qt(),c},function(c){return qt(),Re(c)})):a}function Wd(){var a=Br[Br.length-1];Br.pop(),Ht(a,!1)}function Ht(a,c){var d,f=le;(c?!Me.echoes||qr++&&a===le:!qr||--qr&&a===le)||queueMicrotask(c?function(p){++Hr,Me.echoes&&--Me.echoes!=0||(Me.echoes=Me.awaits=Me.id=0),Br.push(le),Ht(p,!0)}.bind(null,a):Wd),a!==le&&(le=a,f===Ft&&(Ft.env=xa()),cs&&(d=Ft.env.Promise,c=a.env,(f.global||a.global)&&(Object.defineProperty(s,"Promise",c.PromiseProp),d.all=c.all,d.race=c.race,d.resolve=c.resolve,d.reject=c.reject,c.allSettled&&(d.allSettled=c.allSettled),c.any&&(d.any=c.any))))}function xa(){var a=s.Promise;return cs?{Promise:a,PromiseProp:Object.getOwnPropertyDescriptor(s,"Promise"),all:a.all,race:a.race,allSettled:a.allSettled,any:a.any,resolve:a.resolve,reject:a.reject}:{}}function sn(a,c,d,f,p){var b=le;try{return Ht(a,!0),c(d,f,p)}finally{Ht(b,!1)}}function ka(a,c,d,f){return typeof a!="function"?a:function(){var p=le;d&&_n(),Ht(c,!0);try{return a.apply(this,arguments)}finally{Ht(p,!1),f&&queueMicrotask(qt)}}}function gs(a){Promise===tn&&Me.echoes===0?qr===0?a():enqueueNativeMicroTask(a):setTimeout(a,0)}(""+bt).indexOf("[native code]")===-1&&(_n=qt=$e);var Re=ne.reject,on="￿",Pt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Ca="String expected.",Sn=[],Vr="__dbnames",bs="readonly",ws="readwrite";function an(a,c){return a?c?function(){return a.apply(this,arguments)&&c.apply(this,arguments)}:a:c}var _a={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Gr(a){return typeof a!="string"||/\./.test(a)?function(c){return c}:function(c){return c[a]===void 0&&a in c&&delete(c=ce(c))[a],c}}function Sa(){throw ue.Type()}function be(a,c){try{var d=Ea(a),f=Ea(c);if(d!==f)return d==="Array"?1:f==="Array"?-1:d==="binary"?1:f==="binary"?-1:d==="string"?1:f==="string"?-1:d==="Date"?1:f!=="Date"?NaN:-1;switch(d){case"number":case"Date":case"string":return c<a?1:a<c?-1:0;case"binary":return(function(p,b){for(var v=p.length,$=b.length,S=v<$?v:$,T=0;T<S;++T)if(p[T]!==b[T])return p[T]<b[T]?-1:1;return v===$?0:v<$?-1:1})(Ta(a),Ta(c));case"Array":return(function(p,b){for(var v=p.length,$=b.length,S=v<$?v:$,T=0;T<S;++T){var R=be(p[T],b[T]);if(R!==0)return R}return v===$?0:v<$?-1:1})(a,c)}}catch{}return NaN}function Ea(a){var c=typeof a;return c!="object"?c:ArrayBuffer.isView(a)?"binary":(a=Te(a),a==="ArrayBuffer"?"binary":a)}function Ta(a){return a instanceof Uint8Array?a:ArrayBuffer.isView(a)?new Uint8Array(a.buffer,a.byteOffset,a.byteLength):new Uint8Array(a)}var Ia=(ke.prototype._trans=function(a,c,d){var f=this._tx||le.trans,p=this.name,b=St&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(a==="readonly"?"read":"write"," ").concat(this.name));function v(T,R,_){if(!_.schema[p])throw new ue.NotFound("Table "+p+" not part of transaction");return c(_.idbtrans,_)}var $=kn();try{var S=f&&f.db._novip===this.db._novip?f===le.trans?f._promise(a,v,d):Bt(function(){return f._promise(a,v,d)},{trans:f,transless:le.transless||le}):(function T(R,_,P,E){if(R.idbdb&&(R._state.openComplete||le.letThrough||R._vip)){var A=R._createTransaction(_,P,R._dbSchema);try{A.create(),R._state.PR1398_maxLoop=3}catch(D){return D.name===as.InvalidState&&R.isOpen()&&0<--R._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),R.close({disableAutoOpen:!1}),R.open().then(function(){return T(R,_,P,E)})):Re(D)}return A._promise(_,function(D,I){return Bt(function(){return le.trans=A,E(D,I,A)})}).then(function(D){if(_==="readwrite")try{A.idbtrans.commit()}catch{}return _==="readonly"?D:A._completion.then(function(){return D})})}if(R._state.openComplete)return Re(new ue.DatabaseClosed(R._state.dbOpenError));if(!R._state.isBeingOpened){if(!R._state.autoOpen)return Re(new ue.DatabaseClosed);R.open().catch($e)}return R._state.dbReadyPromise.then(function(){return T(R,_,P,E)})})(this.db,a,[this.name],v);return b&&(S._consoleTask=b,S=S.catch(function(T){return console.trace(T),Re(T)})),S}finally{$&&Cn()}},ke.prototype.get=function(a,c){var d=this;return a&&a.constructor===Object?this.where(a).first(c):a==null?Re(new ue.Type("Invalid argument to Table.get()")):this._trans("readonly",function(f){return d.core.get({trans:f,key:a}).then(function(p){return d.hook.reading.fire(p)})}).then(c)},ke.prototype.where=function(a){if(typeof a=="string")return new this.db.WhereClause(this,a);if(l(a))return new this.db.WhereClause(this,"[".concat(a.join("+"),"]"));var c=o(a);if(c.length===1)return this.where(c[0]).equals(a[c[0]]);var d=this.schema.indexes.concat(this.schema.primKey).filter(function($){if($.compound&&c.every(function(T){return 0<=$.keyPath.indexOf(T)})){for(var S=0;S<c.length;++S)if(c.indexOf($.keyPath[S])===-1)return!1;return!0}return!1}).sort(function($,S){return $.keyPath.length-S.keyPath.length})[0];if(d&&this.db._maxKey!==on){var b=d.keyPath.slice(0,c.length);return this.where(b).equals(b.map(function(S){return a[S]}))}!d&&St&&console.warn("The query ".concat(JSON.stringify(a)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(c.join("+"),"]"));var f=this.schema.idxByName;function p($,S){return be($,S)===0}var v=c.reduce(function(_,S){var T=_[0],R=_[1],_=f[S],P=a[S];return[T||_,T||!_?an(R,_&&_.multi?function(E){return E=G(E,S),l(E)&&E.some(function(A){return p(P,A)})}:function(E){return p(P,G(E,S))}):R]},[null,null]),b=v[0],v=v[1];return b?this.where(b.name).equals(a[b.keyPath]).filter(v):d?this.filter(v):this.where(c).equals("")},ke.prototype.filter=function(a){return this.toCollection().and(a)},ke.prototype.count=function(a){return this.toCollection().count(a)},ke.prototype.offset=function(a){return this.toCollection().offset(a)},ke.prototype.limit=function(a){return this.toCollection().limit(a)},ke.prototype.each=function(a){return this.toCollection().each(a)},ke.prototype.toArray=function(a){return this.toCollection().toArray(a)},ke.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},ke.prototype.orderBy=function(a){return new this.db.Collection(new this.db.WhereClause(this,l(a)?"[".concat(a.join("+"),"]"):a))},ke.prototype.reverse=function(){return this.toCollection().reverse()},ke.prototype.mapToClass=function(a){var c,d=this.db,f=this.name;function p(){return c!==null&&c.apply(this,arguments)||this}(this.schema.mappedClass=a).prototype instanceof Sa&&((function(S,T){if(typeof T!="function"&&T!==null)throw new TypeError("Class extends value "+String(T)+" is not a constructor or null");function R(){this.constructor=S}n(S,T),S.prototype=T===null?Object.create(T):(R.prototype=T.prototype,new R)})(p,c=a),Object.defineProperty(p.prototype,"db",{get:function(){return d},enumerable:!1,configurable:!0}),p.prototype.table=function(){return f},a=p);for(var b=new Set,v=a.prototype;v;v=h(v))Object.getOwnPropertyNames(v).forEach(function(S){return b.add(S)});function $(S){if(!S)return S;var T,R=Object.create(a.prototype);for(T in S)if(!b.has(T))try{R[T]=S[T]}catch{}return R}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=$,this.hook("reading",$),a},ke.prototype.defineClass=function(){return this.mapToClass(function(a){u(this,a)})},ke.prototype.add=function(a,c){var d=this,f=this.schema.primKey,p=f.auto,b=f.keyPath,v=a;return b&&p&&(v=Gr(b)(a)),this._trans("readwrite",function($){return d.core.mutate({trans:$,type:"add",keys:c!=null?[c]:null,values:[v]})}).then(function($){return $.numFailures?ne.reject($.failures[0]):$.lastResult}).then(function($){if(b)try{q(a,b,$)}catch{}return $})},ke.prototype.update=function(a,c){return typeof a!="object"||l(a)?this.where(":id").equals(a).modify(c):(a=G(a,this.schema.primKey.keyPath),a===void 0?Re(new ue.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(a).modify(c))},ke.prototype.put=function(a,c){var d=this,f=this.schema.primKey,p=f.auto,b=f.keyPath,v=a;return b&&p&&(v=Gr(b)(a)),this._trans("readwrite",function($){return d.core.mutate({trans:$,type:"put",values:[v],keys:c!=null?[c]:null})}).then(function($){return $.numFailures?ne.reject($.failures[0]):$.lastResult}).then(function($){if(b)try{q(a,b,$)}catch{}return $})},ke.prototype.delete=function(a){var c=this;return this._trans("readwrite",function(d){return c.core.mutate({trans:d,type:"delete",keys:[a]})}).then(function(d){return d.numFailures?ne.reject(d.failures[0]):void 0})},ke.prototype.clear=function(){var a=this;return this._trans("readwrite",function(c){return a.core.mutate({trans:c,type:"deleteRange",range:_a})}).then(function(c){return c.numFailures?ne.reject(c.failures[0]):void 0})},ke.prototype.bulkGet=function(a){var c=this;return this._trans("readonly",function(d){return c.core.getMany({keys:a,trans:d}).then(function(f){return f.map(function(p){return c.hook.reading.fire(p)})})})},ke.prototype.bulkAdd=function(a,c,d){var f=this,p=Array.isArray(c)?c:void 0,b=(d=d||(p?void 0:c))?d.allKeys:void 0;return this._trans("readwrite",function(v){var T=f.schema.primKey,$=T.auto,T=T.keyPath;if(T&&p)throw new ue.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(p&&p.length!==a.length)throw new ue.InvalidArgument("Arguments objects and keys must have the same length");var S=a.length,T=T&&$?a.map(Gr(T)):a;return f.core.mutate({trans:v,type:"add",keys:p,values:T,wantResults:b}).then(function(A){var _=A.numFailures,P=A.results,E=A.lastResult,A=A.failures;if(_===0)return b?P:E;throw new xn("".concat(f.name,".bulkAdd(): ").concat(_," of ").concat(S," operations failed"),A)})})},ke.prototype.bulkPut=function(a,c,d){var f=this,p=Array.isArray(c)?c:void 0,b=(d=d||(p?void 0:c))?d.allKeys:void 0;return this._trans("readwrite",function(v){var T=f.schema.primKey,$=T.auto,T=T.keyPath;if(T&&p)throw new ue.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(p&&p.length!==a.length)throw new ue.InvalidArgument("Arguments objects and keys must have the same length");var S=a.length,T=T&&$?a.map(Gr(T)):a;return f.core.mutate({trans:v,type:"put",keys:p,values:T,wantResults:b}).then(function(A){var _=A.numFailures,P=A.results,E=A.lastResult,A=A.failures;if(_===0)return b?P:E;throw new xn("".concat(f.name,".bulkPut(): ").concat(_," of ").concat(S," operations failed"),A)})})},ke.prototype.bulkUpdate=function(a){var c=this,d=this.core,f=a.map(function(v){return v.key}),p=a.map(function(v){return v.changes}),b=[];return this._trans("readwrite",function(v){return d.getMany({trans:v,keys:f,cache:"clone"}).then(function($){var S=[],T=[];a.forEach(function(_,P){var E=_.key,A=_.changes,D=$[P];if(D){for(var I=0,j=Object.keys(A);I<j.length;I++){var N=j[I],z=A[N];if(N===c.schema.primKey.keyPath){if(be(z,E)!==0)throw new ue.Constraint("Cannot update primary key in bulkUpdate()")}else q(D,N,z)}b.push(P),S.push(E),T.push(D)}});var R=S.length;return d.mutate({trans:v,type:"put",keys:S,values:T,updates:{keys:f,changeSpecs:p}}).then(function(_){var P=_.numFailures,E=_.failures;if(P===0)return R;for(var A=0,D=Object.keys(E);A<D.length;A++){var I,j=D[A],N=b[Number(j)];N!=null&&(I=E[j],delete E[j],E[N]=I)}throw new xn("".concat(c.name,".bulkUpdate(): ").concat(P," of ").concat(R," operations failed"),E)})})})},ke.prototype.bulkDelete=function(a){var c=this,d=a.length;return this._trans("readwrite",function(f){return c.core.mutate({trans:f,type:"delete",keys:a})}).then(function(v){var p=v.numFailures,b=v.lastResult,v=v.failures;if(p===0)return b;throw new xn("".concat(c.name,".bulkDelete(): ").concat(p," of ").concat(d," operations failed"),v)})},ke);function ke(){}function Zn(a){function c(v,$){if($){for(var S=arguments.length,T=new Array(S-1);--S;)T[S-1]=arguments[S];return d[v].subscribe.apply(null,T),a}if(typeof v=="string")return d[v]}var d={};c.addEventType=b;for(var f=1,p=arguments.length;f<p;++f)b(arguments[f]);return c;function b(v,$,S){if(typeof v!="object"){var T;$=$||qd;var R={subscribers:[],fire:S=S||$e,subscribe:function(_){R.subscribers.indexOf(_)===-1&&(R.subscribers.push(_),R.fire=$(R.fire,_))},unsubscribe:function(_){R.subscribers=R.subscribers.filter(function(P){return P!==_}),R.fire=R.subscribers.reduce($,S)}};return d[v]=c[v]=R}o(T=v).forEach(function(_){var P=T[_];if(l(P))b(_,T[_][0],T[_][1]);else{if(P!=="asap")throw new ue.InvalidArgument("Invalid event config");var E=b(_,Wn,function(){for(var A=arguments.length,D=new Array(A);A--;)D[A]=arguments[A];E.subscribers.forEach(function(I){W(function(){I.apply(null,D)})})})}})}}function er(a,c){return C(c).from({prototype:a}),c}function En(a,c){return!(a.filter||a.algorithm||a.or)&&(c?a.justLimit:!a.replayFilter)}function ys(a,c){a.filter=an(a.filter,c)}function vs(a,c,d){var f=a.replayFilter;a.replayFilter=f?function(){return an(f(),c())}:c,a.justLimit=d&&!f}function Wr(a,c){if(a.isPrimKey)return c.primaryKey;var d=c.getIndexByKeyPath(a.index);if(!d)throw new ue.Schema("KeyPath "+a.index+" on object store "+c.name+" is not indexed");return d}function Aa(a,c,d){var f=Wr(a,c.schema);return c.openCursor({trans:d,values:!a.keysOnly,reverse:a.dir==="prev",unique:!!a.unique,query:{index:f,range:a.range}})}function Yr(a,c,d,f){var p=a.replayFilter?an(a.filter,a.replayFilter()):a.filter;if(a.or){var b={},v=function($,S,T){var R,_;p&&!p(S,T,function(P){return S.stop(P)},function(P){return S.fail(P)})||((_=""+(R=S.primaryKey))=="[object ArrayBuffer]"&&(_=""+new Uint8Array(R)),g(b,_)||(b[_]=!0,c($,S,T)))};return Promise.all([a.or._iterate(v,d),Ra(Aa(a,f,d),a.algorithm,v,!a.keysOnly&&a.valueMapper)])}return Ra(Aa(a,f,d),an(a.algorithm,p),c,!a.keysOnly&&a.valueMapper)}function Ra(a,c,d,f){var p=Ee(f?function(b,v,$){return d(f(b),v,$)}:d);return a.then(function(b){if(b)return b.start(function(){var v=function(){return b.continue()};c&&!c(b,function($){return v=$},function($){b.stop($),v=$e},function($){b.fail($),v=$e})||p(b.value,b,function($){return v=$}),v()})})}var Lt=Symbol(),tr=(Oa.prototype.execute=function(a){if(this.add!==void 0){var c=this.add;if(l(c))return i(i([],l(a)?a:[],!0),c).sort();if(typeof c=="number")return(Number(a)||0)+c;if(typeof c=="bigint")try{return BigInt(a)+c}catch{return BigInt(0)+c}throw new TypeError("Invalid term ".concat(c))}if(this.remove!==void 0){var d=this.remove;if(l(d))return l(a)?a.filter(function(f){return!d.includes(f)}).sort():[];if(typeof d=="number")return Number(a)-d;if(typeof d=="bigint")try{return BigInt(a)-d}catch{return BigInt(0)-d}throw new TypeError("Invalid subtrahend ".concat(d))}return c=(c=this.replacePrefix)===null||c===void 0?void 0:c[0],c&&typeof a=="string"&&a.startsWith(c)?this.replacePrefix[1]+a.substring(c.length):a},Oa);function Oa(a){Object.assign(this,a)}var Yd=(we.prototype._read=function(a,c){var d=this._ctx;return d.error?d.table._trans(null,Re.bind(null,d.error)):d.table._trans("readonly",a).then(c)},we.prototype._write=function(a){var c=this._ctx;return c.error?c.table._trans(null,Re.bind(null,c.error)):c.table._trans("readwrite",a,"locked")},we.prototype._addAlgorithm=function(a){var c=this._ctx;c.algorithm=an(c.algorithm,a)},we.prototype._iterate=function(a,c){return Yr(this._ctx,a,c,this._ctx.table.core)},we.prototype.clone=function(a){var c=Object.create(this.constructor.prototype),d=Object.create(this._ctx);return a&&u(d,a),c._ctx=d,c},we.prototype.raw=function(){return this._ctx.valueMapper=null,this},we.prototype.each=function(a){var c=this._ctx;return this._read(function(d){return Yr(c,a,d,c.table.core)})},we.prototype.count=function(a){var c=this;return this._read(function(d){var f=c._ctx,p=f.table.core;if(En(f,!0))return p.count({trans:d,query:{index:Wr(f,p.schema),range:f.range}}).then(function(v){return Math.min(v,f.limit)});var b=0;return Yr(f,function(){return++b,!1},d,p).then(function(){return b})}).then(a)},we.prototype.sortBy=function(a,c){var d=a.split(".").reverse(),f=d[0],p=d.length-1;function b(S,T){return T?b(S[d[T]],T-1):S[f]}var v=this._ctx.dir==="next"?1:-1;function $(S,T){return be(b(S,p),b(T,p))*v}return this.toArray(function(S){return S.sort($)}).then(c)},we.prototype.toArray=function(a){var c=this;return this._read(function(d){var f=c._ctx;if(f.dir==="next"&&En(f,!0)&&0<f.limit){var p=f.valueMapper,b=Wr(f,f.table.core.schema);return f.table.core.query({trans:d,limit:f.limit,values:!0,query:{index:b,range:f.range}}).then(function($){return $=$.result,p?$.map(p):$})}var v=[];return Yr(f,function($){return v.push($)},d,f.table.core).then(function(){return v})},a)},we.prototype.offset=function(a){var c=this._ctx;return a<=0||(c.offset+=a,En(c)?vs(c,function(){var d=a;return function(f,p){return d===0||(d===1?--d:p(function(){f.advance(d),d=0}),!1)}}):vs(c,function(){var d=a;return function(){return--d<0}})),this},we.prototype.limit=function(a){return this._ctx.limit=Math.min(this._ctx.limit,a),vs(this._ctx,function(){var c=a;return function(d,f,p){return--c<=0&&f(p),0<=c}},!0),this},we.prototype.until=function(a,c){return ys(this._ctx,function(d,f,p){return!a(d.value)||(f(p),c)}),this},we.prototype.first=function(a){return this.limit(1).toArray(function(c){return c[0]}).then(a)},we.prototype.last=function(a){return this.reverse().first(a)},we.prototype.filter=function(a){var c;return ys(this._ctx,function(d){return a(d.value)}),(c=this._ctx).isMatch=an(c.isMatch,a),this},we.prototype.and=function(a){return this.filter(a)},we.prototype.or=function(a){return new this.db.WhereClause(this._ctx.table,a,this)},we.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},we.prototype.desc=function(){return this.reverse()},we.prototype.eachKey=function(a){var c=this._ctx;return c.keysOnly=!c.isMatch,this.each(function(d,f){a(f.key,f)})},we.prototype.eachUniqueKey=function(a){return this._ctx.unique="unique",this.eachKey(a)},we.prototype.eachPrimaryKey=function(a){var c=this._ctx;return c.keysOnly=!c.isMatch,this.each(function(d,f){a(f.primaryKey,f)})},we.prototype.keys=function(a){var c=this._ctx;c.keysOnly=!c.isMatch;var d=[];return this.each(function(f,p){d.push(p.key)}).then(function(){return d}).then(a)},we.prototype.primaryKeys=function(a){var c=this._ctx;if(c.dir==="next"&&En(c,!0)&&0<c.limit)return this._read(function(f){var p=Wr(c,c.table.core.schema);return c.table.core.query({trans:f,values:!1,limit:c.limit,query:{index:p,range:c.range}})}).then(function(f){return f.result}).then(a);c.keysOnly=!c.isMatch;var d=[];return this.each(function(f,p){d.push(p.primaryKey)}).then(function(){return d}).then(a)},we.prototype.uniqueKeys=function(a){return this._ctx.unique="unique",this.keys(a)},we.prototype.firstKey=function(a){return this.limit(1).keys(function(c){return c[0]}).then(a)},we.prototype.lastKey=function(a){return this.reverse().firstKey(a)},we.prototype.distinct=function(){var a=this._ctx,a=a.index&&a.table.schema.idxByName[a.index];if(!a||!a.multi)return this;var c={};return ys(this._ctx,function(p){var f=p.primaryKey.toString(),p=g(c,f);return c[f]=!0,!p}),this},we.prototype.modify=function(a){var c=this,d=this._ctx;return this._write(function(f){var p,b,v;v=typeof a=="function"?a:(p=o(a),b=p.length,function(I){for(var j=!1,N=0;N<b;++N){var z=p[N],B=a[z],Q=G(I,z);B instanceof tr?(q(I,z,B.execute(Q)),j=!0):Q!==B&&(q(I,z,B),j=!0)}return j});var $=d.table.core,_=$.schema.primaryKey,S=_.outbound,T=_.extractKey,R=200,_=c.db._options.modifyChunkSize;_&&(R=typeof _=="object"?_[$.name]||_["*"]||200:_);function P(I,z){var N=z.failures,z=z.numFailures;A+=I-z;for(var B=0,Q=o(N);B<Q.length;B++){var ee=Q[B];E.push(N[ee])}}var E=[],A=0,D=[];return c.clone().primaryKeys().then(function(I){function j(z){var B=Math.min(R,I.length-z);return $.getMany({trans:f,keys:I.slice(z,z+B),cache:"immutable"}).then(function(Q){for(var ee=[],X=[],J=S?[]:null,te=[],Z=0;Z<B;++Z){var oe=Q[Z],fe={value:ce(oe),primKey:I[z+Z]};v.call(fe,fe.value,fe)!==!1&&(fe.value==null?te.push(I[z+Z]):S||be(T(oe),T(fe.value))===0?(X.push(fe.value),S&&J.push(I[z+Z])):(te.push(I[z+Z]),ee.push(fe.value)))}return Promise.resolve(0<ee.length&&$.mutate({trans:f,type:"add",values:ee}).then(function(me){for(var ge in me.failures)te.splice(parseInt(ge),1);P(ee.length,me)})).then(function(){return(0<X.length||N&&typeof a=="object")&&$.mutate({trans:f,type:"put",keys:J,values:X,criteria:N,changeSpec:typeof a!="function"&&a,isAdditionalChunk:0<z}).then(function(me){return P(X.length,me)})}).then(function(){return(0<te.length||N&&a===$s)&&$.mutate({trans:f,type:"delete",keys:te,criteria:N,isAdditionalChunk:0<z}).then(function(me){return P(te.length,me)})}).then(function(){return I.length>z+B&&j(z+R)})})}var N=En(d)&&d.limit===1/0&&(typeof a!="function"||a===$s)&&{index:d.index,range:d.range};return j(0).then(function(){if(0<E.length)throw new $n("Error modifying one or more objects",E,A,D);return I.length})})})},we.prototype.delete=function(){var a=this._ctx,c=a.range;return En(a)&&(a.isPrimKey||c.type===3)?this._write(function(d){var f=a.table.core.schema.primaryKey,p=c;return a.table.core.count({trans:d,query:{index:f,range:p}}).then(function(b){return a.table.core.mutate({trans:d,type:"deleteRange",range:p}).then(function(v){var $=v.failures;if(v.lastResult,v.results,v=v.numFailures,v)throw new $n("Could not delete some values",Object.keys($).map(function(S){return $[S]}),b-v);return b-v})})}):this.modify($s)},we);function we(){}var $s=function(a,c){return c.value=null};function Qd(a,c){return a<c?-1:a===c?0:1}function Xd(a,c){return c<a?-1:a===c?0:1}function tt(a,c,d){return a=a instanceof Pa?new a.Collection(a):a,a._ctx.error=new(d||TypeError)(c),a}function Tn(a){return new a.Collection(a,function(){return Da("")}).limit(0)}function Qr(a,c,d,f){var p,b,v,$,S,T,R,_=d.length;if(!d.every(function(A){return typeof A=="string"}))return tt(a,Ca);function P(A){p=A==="next"?function(I){return I.toUpperCase()}:function(I){return I.toLowerCase()},b=A==="next"?function(I){return I.toLowerCase()}:function(I){return I.toUpperCase()},v=A==="next"?Qd:Xd;var D=d.map(function(I){return{lower:b(I),upper:p(I)}}).sort(function(I,j){return v(I.lower,j.lower)});$=D.map(function(I){return I.upper}),S=D.map(function(I){return I.lower}),R=(T=A)==="next"?"":f}P("next"),a=new a.Collection(a,function(){return Kt($[0],S[_-1]+f)}),a._ondirectionchange=function(A){P(A)};var E=0;return a._addAlgorithm(function(A,D,I){var j=A.key;if(typeof j!="string")return!1;var N=b(j);if(c(N,S,E))return!0;for(var z=null,B=E;B<_;++B){var Q=(function(ee,X,J,te,Z,oe){for(var fe=Math.min(ee.length,te.length),me=-1,ge=0;ge<fe;++ge){var nt=X[ge];if(nt!==te[ge])return Z(ee[ge],J[ge])<0?ee.substr(0,ge)+J[ge]+J.substr(ge+1):Z(ee[ge],te[ge])<0?ee.substr(0,ge)+te[ge]+J.substr(ge+1):0<=me?ee.substr(0,me)+X[me]+J.substr(me+1):null;Z(ee[ge],nt)<0&&(me=ge)}return fe<te.length&&oe==="next"?ee+J.substr(ee.length):fe<ee.length&&oe==="prev"?ee.substr(0,J.length):me<0?null:ee.substr(0,me)+te[me]+J.substr(me+1)})(j,N,$[B],S[B],v,T);Q===null&&z===null?E=B+1:(z===null||0<v(z,Q))&&(z=Q)}return D(z!==null?function(){A.continue(z+R)}:I),!1}),a}function Kt(a,c,d,f){return{type:2,lower:a,upper:c,lowerOpen:d,upperOpen:f}}function Da(a){return{type:1,lower:a,upper:a}}var Pa=(Object.defineProperty(je.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),je.prototype.between=function(a,c,d,f){d=d!==!1,f=f===!0;try{return 0<this._cmp(a,c)||this._cmp(a,c)===0&&(d||f)&&(!d||!f)?Tn(this):new this.Collection(this,function(){return Kt(a,c,!d,!f)})}catch{return tt(this,Pt)}},je.prototype.equals=function(a){return a==null?tt(this,Pt):new this.Collection(this,function(){return Da(a)})},je.prototype.above=function(a){return a==null?tt(this,Pt):new this.Collection(this,function(){return Kt(a,void 0,!0)})},je.prototype.aboveOrEqual=function(a){return a==null?tt(this,Pt):new this.Collection(this,function(){return Kt(a,void 0,!1)})},je.prototype.below=function(a){return a==null?tt(this,Pt):new this.Collection(this,function(){return Kt(void 0,a,!1,!0)})},je.prototype.belowOrEqual=function(a){return a==null?tt(this,Pt):new this.Collection(this,function(){return Kt(void 0,a)})},je.prototype.startsWith=function(a){return typeof a!="string"?tt(this,Ca):this.between(a,a+on,!0,!0)},je.prototype.startsWithIgnoreCase=function(a){return a===""?this.startsWith(a):Qr(this,function(c,d){return c.indexOf(d[0])===0},[a],on)},je.prototype.equalsIgnoreCase=function(a){return Qr(this,function(c,d){return c===d[0]},[a],"")},je.prototype.anyOfIgnoreCase=function(){var a=Ae.apply(Pe,arguments);return a.length===0?Tn(this):Qr(this,function(c,d){return d.indexOf(c)!==-1},a,"")},je.prototype.startsWithAnyOfIgnoreCase=function(){var a=Ae.apply(Pe,arguments);return a.length===0?Tn(this):Qr(this,function(c,d){return d.some(function(f){return c.indexOf(f)===0})},a,on)},je.prototype.anyOf=function(){var a=this,c=Ae.apply(Pe,arguments),d=this._cmp;try{c.sort(d)}catch{return tt(this,Pt)}if(c.length===0)return Tn(this);var f=new this.Collection(this,function(){return Kt(c[0],c[c.length-1])});f._ondirectionchange=function(b){d=b==="next"?a._ascending:a._descending,c.sort(d)};var p=0;return f._addAlgorithm(function(b,v,$){for(var S=b.key;0<d(S,c[p]);)if(++p===c.length)return v($),!1;return d(S,c[p])===0||(v(function(){b.continue(c[p])}),!1)}),f},je.prototype.notEqual=function(a){return this.inAnyRange([[-1/0,a],[a,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},je.prototype.noneOf=function(){var a=Ae.apply(Pe,arguments);if(a.length===0)return new this.Collection(this);try{a.sort(this._ascending)}catch{return tt(this,Pt)}var c=a.reduce(function(d,f){return d?d.concat([[d[d.length-1][1],f]]):[[-1/0,f]]},null);return c.push([a[a.length-1],this.db._maxKey]),this.inAnyRange(c,{includeLowers:!1,includeUppers:!1})},je.prototype.inAnyRange=function(j,c){var d=this,f=this._cmp,p=this._ascending,b=this._descending,v=this._min,$=this._max;if(j.length===0)return Tn(this);if(!j.every(function(N){return N[0]!==void 0&&N[1]!==void 0&&p(N[0],N[1])<=0}))return tt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ue.InvalidArgument);var S=!c||c.includeLowers!==!1,T=c&&c.includeUppers===!0,R,_=p;function P(N,z){return _(N[0],z[0])}try{(R=j.reduce(function(N,z){for(var B=0,Q=N.length;B<Q;++B){var ee=N[B];if(f(z[0],ee[1])<0&&0<f(z[1],ee[0])){ee[0]=v(ee[0],z[0]),ee[1]=$(ee[1],z[1]);break}}return B===Q&&N.push(z),N},[])).sort(P)}catch{return tt(this,Pt)}var E=0,A=T?function(N){return 0<p(N,R[E][1])}:function(N){return 0<=p(N,R[E][1])},D=S?function(N){return 0<b(N,R[E][0])}:function(N){return 0<=b(N,R[E][0])},I=A,j=new this.Collection(this,function(){return Kt(R[0][0],R[R.length-1][1],!S,!T)});return j._ondirectionchange=function(N){_=N==="next"?(I=A,p):(I=D,b),R.sort(P)},j._addAlgorithm(function(N,z,B){for(var Q,ee=N.key;I(ee);)if(++E===R.length)return z(B),!1;return!A(Q=ee)&&!D(Q)||(d._cmp(ee,R[E][1])===0||d._cmp(ee,R[E][0])===0||z(function(){_===p?N.continue(R[E][0]):N.continue(R[E][1])}),!1)}),j},je.prototype.startsWithAnyOf=function(){var a=Ae.apply(Pe,arguments);return a.every(function(c){return typeof c=="string"})?a.length===0?Tn(this):this.inAnyRange(a.map(function(c){return[c,c+on]})):tt(this,"startsWithAnyOf() only works with strings")},je);function je(){}function Et(a){return Ee(function(c){return nr(c),a(c.target.error),!1})}function nr(a){a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault()}var rr="storagemutated",xs="x-storagemutated-1",Vt=Zn(null,rr),Jd=(Tt.prototype._lock=function(){return V(!le.global),++this._reculock,this._reculock!==1||le.global||(le.lockOwnerFor=this),this},Tt.prototype._unlock=function(){if(V(!le.global),--this._reculock==0)for(le.global||(le.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var a=this._blockedFuncs.shift();try{sn(a[1],a[0])}catch{}}return this},Tt.prototype._locked=function(){return this._reculock&&le.lockOwnerFor!==this},Tt.prototype.create=function(a){var c=this;if(!this.mode)return this;var d=this.db.idbdb,f=this.db._state.dbOpenError;if(V(!this.idbtrans),!a&&!d)switch(f&&f.name){case"DatabaseClosedError":throw new ue.DatabaseClosed(f);case"MissingAPIError":throw new ue.MissingAPI(f.message,f);default:throw new ue.OpenFailed(f)}if(!this.active)throw new ue.TransactionInactive;return V(this._completion._state===null),(a=this.idbtrans=a||(this.db.core||d).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Ee(function(p){nr(p),c._reject(a.error)}),a.onabort=Ee(function(p){nr(p),c.active&&c._reject(new ue.Abort(a.error)),c.active=!1,c.on("abort").fire(p)}),a.oncomplete=Ee(function(){c.active=!1,c._resolve(),"mutatedParts"in a&&Vt.storagemutated.fire(a.mutatedParts)}),this},Tt.prototype._promise=function(a,c,d){var f=this;if(a==="readwrite"&&this.mode!=="readwrite")return Re(new ue.ReadOnly("Transaction is readonly"));if(!this.active)return Re(new ue.TransactionInactive);if(this._locked())return new ne(function(b,v){f._blockedFuncs.push([function(){f._promise(a,c,d).then(b,v)},le])});if(d)return Bt(function(){var b=new ne(function(v,$){f._lock();var S=c(v,$,f);S&&S.then&&S.then(v,$)});return b.finally(function(){return f._unlock()}),b._lib=!0,b});var p=new ne(function(b,v){var $=c(b,v,f);$&&$.then&&$.then(b,v)});return p._lib=!0,p},Tt.prototype._root=function(){return this.parent?this.parent._root():this},Tt.prototype.waitFor=function(a){var c,d=this._root(),f=ne.resolve(a);d._waitingFor?d._waitingFor=d._waitingFor.then(function(){return f}):(d._waitingFor=f,d._waitingQueue=[],c=d.idbtrans.objectStore(d.storeNames[0]),(function b(){for(++d._spinCount;d._waitingQueue.length;)d._waitingQueue.shift()();d._waitingFor&&(c.get(-1/0).onsuccess=b)})());var p=d._waitingFor;return new ne(function(b,v){f.then(function($){return d._waitingQueue.push(Ee(b.bind(null,$)))},function($){return d._waitingQueue.push(Ee(v.bind(null,$)))}).finally(function(){d._waitingFor===p&&(d._waitingFor=null)})})},Tt.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ue.Abort))},Tt.prototype.table=function(a){var c=this._memoizedTables||(this._memoizedTables={});if(g(c,a))return c[a];var d=this.schema[a];if(!d)throw new ue.NotFound("Table "+a+" not part of transaction");return d=new this.db.Table(a,d,this),d.core=this.db.core.table(a),c[a]=d},Tt);function Tt(){}function ks(a,c,d,f,p,b,v){return{name:a,keyPath:c,unique:d,multi:f,auto:p,compound:b,src:(d&&!v?"&":"")+(f?"*":"")+(p?"++":"")+La(c)}}function La(a){return typeof a=="string"?a:a?"["+[].join.call(a,"+")+"]":""}function Cs(a,c,d){return{name:a,primKey:c,indexes:d,mappedClass:null,idxByName:(f=function(p){return[p.name,p]},d.reduce(function(p,b,v){return v=f(b,v),v&&(p[v[0]]=v[1]),p},{}))};var f}var ir=function(a){try{return a.only([[]]),ir=function(){return[[]]},[[]]}catch{return ir=function(){return on},on}};function _s(a){return a==null?function(){}:typeof a=="string"?(c=a).split(".").length===1?function(d){return d[c]}:function(d){return G(d,c)}:function(d){return G(d,a)};var c}function Ma(a){return[].slice.call(a)}var Zd=0;function sr(a){return a==null?":id":typeof a=="string"?a:"[".concat(a.join("+"),"]")}function eh(a,c,S){function f(I){if(I.type===3)return null;if(I.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var E=I.lower,A=I.upper,D=I.lowerOpen,I=I.upperOpen;return E===void 0?A===void 0?null:c.upperBound(A,!!I):A===void 0?c.lowerBound(E,!!D):c.bound(E,A,!!D,!!I)}function p(P){var E,A=P.name;return{name:A,schema:P,mutate:function(D){var I=D.trans,j=D.type,N=D.keys,z=D.values,B=D.range;return new Promise(function(Q,ee){Q=Ee(Q);var X=I.objectStore(A),J=X.keyPath==null,te=j==="put"||j==="add";if(!te&&j!=="delete"&&j!=="deleteRange")throw new Error("Invalid operation type: "+j);var Z,oe=(N||z||{length:1}).length;if(N&&z&&N.length!==z.length)throw new Error("Given keys array must have same length as given values array.");if(oe===0)return Q({numFailures:0,failures:{},results:[],lastResult:void 0});function fe(We){++nt,nr(We)}var me=[],ge=[],nt=0;if(j==="deleteRange"){if(B.type===4)return Q({numFailures:nt,failures:ge,results:[],lastResult:void 0});B.type===3?me.push(Z=X.clear()):me.push(Z=X.delete(f(B)))}else{var J=te?J?[z,N]:[z,null]:[N,null],he=J[0],Ve=J[1];if(te)for(var Ge=0;Ge<oe;++Ge)me.push(Z=Ve&&Ve[Ge]!==void 0?X[j](he[Ge],Ve[Ge]):X[j](he[Ge])),Z.onerror=fe;else for(Ge=0;Ge<oe;++Ge)me.push(Z=X[j](he[Ge])),Z.onerror=fe}function ci(We){We=We.target.result,me.forEach(function(un,qs){return un.error!=null&&(ge[qs]=un.error)}),Q({numFailures:nt,failures:ge,results:j==="delete"?N:me.map(function(un){return un.result}),lastResult:We})}Z.onerror=function(We){fe(We),ci(We)},Z.onsuccess=ci})},getMany:function(D){var I=D.trans,j=D.keys;return new Promise(function(N,z){N=Ee(N);for(var B,Q=I.objectStore(A),ee=j.length,X=new Array(ee),J=0,te=0,Z=function(me){me=me.target,X[me._pos]=me.result,++te===J&&N(X)},oe=Et(z),fe=0;fe<ee;++fe)j[fe]!=null&&((B=Q.get(j[fe]))._pos=fe,B.onsuccess=Z,B.onerror=oe,++J);J===0&&N(X)})},get:function(D){var I=D.trans,j=D.key;return new Promise(function(N,z){N=Ee(N);var B=I.objectStore(A).get(j);B.onsuccess=function(Q){return N(Q.target.result)},B.onerror=Et(z)})},query:(E=T,function(D){return new Promise(function(I,j){I=Ee(I);var N,z,B,J=D.trans,Q=D.values,ee=D.limit,Z=D.query,X=ee===1/0?void 0:ee,te=Z.index,Z=Z.range,J=J.objectStore(A),te=te.isPrimaryKey?J:J.index(te.name),Z=f(Z);if(ee===0)return I({result:[]});E?((X=Q?te.getAll(Z,X):te.getAllKeys(Z,X)).onsuccess=function(oe){return I({result:oe.target.result})},X.onerror=Et(j)):(N=0,z=!Q&&"openKeyCursor"in te?te.openKeyCursor(Z):te.openCursor(Z),B=[],z.onsuccess=function(oe){var fe=z.result;return fe?(B.push(Q?fe.value:fe.primaryKey),++N===ee?I({result:B}):void fe.continue()):I({result:B})},z.onerror=Et(j))})}),openCursor:function(D){var I=D.trans,j=D.values,N=D.query,z=D.reverse,B=D.unique;return new Promise(function(Q,ee){Q=Ee(Q);var te=N.index,X=N.range,J=I.objectStore(A),J=te.isPrimaryKey?J:J.index(te.name),te=z?B?"prevunique":"prev":B?"nextunique":"next",Z=!j&&"openKeyCursor"in J?J.openKeyCursor(f(X),te):J.openCursor(f(X),te);Z.onerror=Et(ee),Z.onsuccess=Ee(function(oe){var fe,me,ge,nt,he=Z.result;he?(he.___id=++Zd,he.done=!1,fe=he.continue.bind(he),me=(me=he.continuePrimaryKey)&&me.bind(he),ge=he.advance.bind(he),nt=function(){throw new Error("Cursor not stopped")},he.trans=I,he.stop=he.continue=he.continuePrimaryKey=he.advance=function(){throw new Error("Cursor not started")},he.fail=Ee(ee),he.next=function(){var Ve=this,Ge=1;return this.start(function(){return Ge--?Ve.continue():Ve.stop()}).then(function(){return Ve})},he.start=function(Ve){function Ge(){if(Z.result)try{Ve()}catch(We){he.fail(We)}else he.done=!0,he.start=function(){throw new Error("Cursor behind last entry")},he.stop()}var ci=new Promise(function(We,un){We=Ee(We),Z.onerror=Et(un),he.fail=un,he.stop=function(qs){he.stop=he.continue=he.continuePrimaryKey=he.advance=nt,We(qs)}});return Z.onsuccess=Ee(function(We){Z.onsuccess=Ge,Ge()}),he.continue=fe,he.continuePrimaryKey=me,he.advance=ge,Ge(),ci},Q(he)):Q(null)},ee)})},count:function(D){var I=D.query,j=D.trans,N=I.index,z=I.range;return new Promise(function(B,Q){var ee=j.objectStore(A),X=N.isPrimaryKey?ee:ee.index(N.name),ee=f(z),X=ee?X.count(ee):X.count();X.onsuccess=Ee(function(J){return B(J.target.result)}),X.onerror=Et(Q)})}}}var b,v,$,R=(v=S,$=Ma((b=a).objectStoreNames),{schema:{name:b.name,tables:$.map(function(P){return v.objectStore(P)}).map(function(P){var E=P.keyPath,I=P.autoIncrement,A=l(E),D={},I={name:P.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:E==null,compound:A,keyPath:E,autoIncrement:I,unique:!0,extractKey:_s(E)},indexes:Ma(P.indexNames).map(function(j){return P.index(j)}).map(function(B){var N=B.name,z=B.unique,Q=B.multiEntry,B=B.keyPath,Q={name:N,compound:l(B),keyPath:B,unique:z,multiEntry:Q,extractKey:_s(B)};return D[sr(B)]=Q}),getIndexByKeyPath:function(j){return D[sr(j)]}};return D[":id"]=I.primaryKey,E!=null&&(D[sr(E)]=I.primaryKey),I})},hasGetAll:0<$.length&&"getAll"in v.objectStore($[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),S=R.schema,T=R.hasGetAll,R=S.tables.map(p),_={};return R.forEach(function(P){return _[P.name]=P}),{stack:"dbcore",transaction:a.transaction.bind(a),table:function(P){if(!_[P])throw new Error("Table '".concat(P,"' not found"));return _[P]},MIN_KEY:-1/0,MAX_KEY:ir(c),schema:S}}function th(a,c,d,f){var p=d.IDBKeyRange;return d.indexedDB,{dbcore:(f=eh(c,p,f),a.dbcore.reduce(function(b,v){return v=v.create,r(r({},b),v(b))},f))}}function Xr(a,f){var d=f.db,f=th(a._middlewares,d,a._deps,f);a.core=f.dbcore,a.tables.forEach(function(p){var b=p.name;a.core.schema.tables.some(function(v){return v.name===b})&&(p.core=a.core.table(b),a[b]instanceof a.Table&&(a[b].core=p.core))})}function Jr(a,c,d,f){d.forEach(function(p){var b=f[p];c.forEach(function(v){var $=(function S(T,R){return O(T,R)||(T=h(T))&&S(T,R)})(v,p);(!$||"value"in $&&$.value===void 0)&&(v===a.Transaction.prototype||v instanceof a.Transaction?x(v,p,{get:function(){return this.table(p)},set:function(S){y(this,p,{value:S,writable:!0,configurable:!0,enumerable:!0})}}):v[p]=new a.Table(p,b))})})}function Ss(a,c){c.forEach(function(d){for(var f in d)d[f]instanceof a.Table&&delete d[f]})}function nh(a,c){return a._cfg.version-c._cfg.version}function rh(a,c,d,f){var p=a._dbSchema;d.objectStoreNames.contains("$meta")&&!p.$meta&&(p.$meta=Cs("$meta",Na("")[0],[]),a._storeNames.push("$meta"));var b=a._createTransaction("readwrite",a._storeNames,p);b.create(d),b._completion.catch(f);var v=b._reject.bind(b),$=le.transless||le;Bt(function(){return le.trans=b,le.transless=$,c!==0?(Xr(a,d),T=c,((S=b).storeNames.includes("$meta")?S.table("$meta").get("version").then(function(R){return R??T}):ne.resolve(T)).then(function(R){return P=R,E=b,A=d,D=[],R=(_=a)._versions,I=_._dbSchema=ei(0,_.idbdb,A),(R=R.filter(function(j){return j._cfg.version>=P})).length!==0?(R.forEach(function(j){D.push(function(){var N=I,z=j._cfg.dbschema;ti(_,N,A),ti(_,z,A),I=_._dbSchema=z;var B=Es(N,z);B.add.forEach(function(te){Ts(A,te[0],te[1].primKey,te[1].indexes)}),B.change.forEach(function(te){if(te.recreate)throw new ue.Upgrade("Not yet support for changing primary key");var Z=A.objectStore(te.name);te.add.forEach(function(oe){return Zr(Z,oe)}),te.change.forEach(function(oe){Z.deleteIndex(oe.name),Zr(Z,oe)}),te.del.forEach(function(oe){return Z.deleteIndex(oe)})});var Q=j._cfg.contentUpgrade;if(Q&&j._cfg.version>P){Xr(_,A),E._memoizedTables={};var ee=Y(z);B.del.forEach(function(te){ee[te]=N[te]}),Ss(_,[_.Transaction.prototype]),Jr(_,[_.Transaction.prototype],o(ee),ee),E.schema=ee;var X,J=et(Q);return J&&_n(),B=ne.follow(function(){var te;(X=Q(E))&&J&&(te=qt.bind(null,null),X.then(te,te))}),X&&typeof X.then=="function"?ne.resolve(X):B.then(function(){return X})}}),D.push(function(N){var z,B,Q=j._cfg.dbschema;z=Q,B=N,[].slice.call(B.db.objectStoreNames).forEach(function(ee){return z[ee]==null&&B.db.deleteObjectStore(ee)}),Ss(_,[_.Transaction.prototype]),Jr(_,[_.Transaction.prototype],_._storeNames,_._dbSchema),E.schema=_._dbSchema}),D.push(function(N){_.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(_.idbdb.version/10)===j._cfg.version?(_.idbdb.deleteObjectStore("$meta"),delete _._dbSchema.$meta,_._storeNames=_._storeNames.filter(function(z){return z!=="$meta"})):N.objectStore("$meta").put(j._cfg.version,"version"))})}),(function j(){return D.length?ne.resolve(D.shift()(E.idbtrans)).then(j):ne.resolve()})().then(function(){ja(I,A)})):ne.resolve();var _,P,E,A,D,I}).catch(v)):(o(p).forEach(function(R){Ts(d,R,p[R].primKey,p[R].indexes)}),Xr(a,d),void ne.follow(function(){return a.on.populate.fire(b)}).catch(v));var S,T})}function ih(a,c){ja(a._dbSchema,c),c.db.version%10!=0||c.objectStoreNames.contains("$meta")||c.db.createObjectStore("$meta").add(Math.ceil(c.db.version/10-1),"version");var d=ei(0,a.idbdb,c);ti(a,a._dbSchema,c);for(var f=0,p=Es(d,a._dbSchema).change;f<p.length;f++){var b=(function(v){if(v.change.length||v.recreate)return console.warn("Unable to patch indexes of table ".concat(v.name," because it has changes on the type of index or primary key.")),{value:void 0};var $=c.objectStore(v.name);v.add.forEach(function(S){St&&console.debug("Dexie upgrade patch: Creating missing index ".concat(v.name,".").concat(S.src)),Zr($,S)})})(p[f]);if(typeof b=="object")return b.value}}function Es(a,c){var d,f={del:[],add:[],change:[]};for(d in a)c[d]||f.del.push(d);for(d in c){var p=a[d],b=c[d];if(p){var v={name:d,def:b,recreate:!1,del:[],add:[],change:[]};if(""+(p.primKey.keyPath||"")!=""+(b.primKey.keyPath||"")||p.primKey.auto!==b.primKey.auto)v.recreate=!0,f.change.push(v);else{var $=p.idxByName,S=b.idxByName,T=void 0;for(T in $)S[T]||v.del.push(T);for(T in S){var R=$[T],_=S[T];R?R.src!==_.src&&v.change.push(_):v.add.push(_)}(0<v.del.length||0<v.add.length||0<v.change.length)&&f.change.push(v)}}else f.add.push([d,b])}return f}function Ts(a,c,d,f){var p=a.db.createObjectStore(c,d.keyPath?{keyPath:d.keyPath,autoIncrement:d.auto}:{autoIncrement:d.auto});return f.forEach(function(b){return Zr(p,b)}),p}function ja(a,c){o(a).forEach(function(d){c.db.objectStoreNames.contains(d)||(St&&console.debug("Dexie: Creating missing table",d),Ts(c,d,a[d].primKey,a[d].indexes))})}function Zr(a,c){a.createIndex(c.name,c.keyPath,{unique:c.unique,multiEntry:c.multi})}function ei(a,c,d){var f={};return L(c.objectStoreNames,0).forEach(function(p){for(var b=d.objectStore(p),v=ks(La(T=b.keyPath),T||"",!0,!1,!!b.autoIncrement,T&&typeof T!="string",!0),$=[],S=0;S<b.indexNames.length;++S){var R=b.index(b.indexNames[S]),T=R.keyPath,R=ks(R.name,T,!!R.unique,!!R.multiEntry,!1,T&&typeof T!="string",!1);$.push(R)}f[p]=Cs(p,v,$)}),f}function ti(a,c,d){for(var f=d.db.objectStoreNames,p=0;p<f.length;++p){var b=f[p],v=d.objectStore(b);a._hasGetAll="getAll"in v;for(var $=0;$<v.indexNames.length;++$){var S=v.indexNames[$],T=v.index(S).keyPath,R=typeof T=="string"?T:"["+L(T).join("+")+"]";!c[b]||(T=c[b].idxByName[R])&&(T.name=S,delete c[b].idxByName[R],c[b].idxByName[S]=T)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&s.WorkerGlobalScope&&s instanceof s.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(a._hasGetAll=!1)}function Na(a){return a.split(",").map(function(c,d){var f=(c=c.trim()).replace(/([&*]|\+\+)/g,""),p=/^\[/.test(f)?f.match(/^\[(.*)\]$/)[1].split("+"):f;return ks(f,p||null,/\&/.test(c),/\*/.test(c),/\+\+/.test(c),l(p),d===0)})}var sh=(ni.prototype._parseStoresSpec=function(a,c){o(a).forEach(function(d){if(a[d]!==null){var f=Na(a[d]),p=f.shift();if(p.unique=!0,p.multi)throw new ue.Schema("Primary key cannot be multi-valued");f.forEach(function(b){if(b.auto)throw new ue.Schema("Only primary key can be marked as autoIncrement (++)");if(!b.keyPath)throw new ue.Schema("Index must have a name and cannot be an empty string")}),c[d]=Cs(d,p,f)}})},ni.prototype.stores=function(d){var c=this.db;this._cfg.storesSource=this._cfg.storesSource?u(this._cfg.storesSource,d):d;var d=c._versions,f={},p={};return d.forEach(function(b){u(f,b._cfg.storesSource),p=b._cfg.dbschema={},b._parseStoresSpec(f,p)}),c._dbSchema=p,Ss(c,[c._allTables,c,c.Transaction.prototype]),Jr(c,[c._allTables,c,c.Transaction.prototype,this._cfg.tables],o(p),p),c._storeNames=o(p),this},ni.prototype.upgrade=function(a){return this._cfg.contentUpgrade=ls(this._cfg.contentUpgrade||$e,a),this},ni);function ni(){}function Is(a,c){var d=a._dbNamesDB;return d||(d=a._dbNamesDB=new Mt(Vr,{addons:[],indexedDB:a,IDBKeyRange:c})).version(1).stores({dbnames:"name"}),d.table("dbnames")}function As(a){return a&&typeof a.databases=="function"}function Rs(a){return Bt(function(){return le.letThrough=!0,a()})}function Os(a){return!("from"in a)}var Ke=function(a,c){if(!this){var d=new Ke;return a&&"d"in a&&u(d,a),d}u(this,arguments.length?{d:1,from:a,to:1<arguments.length?c:a}:{d:0})};function or(a,c,d){var f=be(c,d);if(!isNaN(f)){if(0<f)throw RangeError();if(Os(a))return u(a,{from:c,to:d,d:1});var p=a.l,f=a.r;if(be(d,a.from)<0)return p?or(p,c,d):a.l={from:c,to:d,d:1,l:null,r:null},Ua(a);if(0<be(c,a.to))return f?or(f,c,d):a.r={from:c,to:d,d:1,l:null,r:null},Ua(a);be(c,a.from)<0&&(a.from=c,a.l=null,a.d=f?f.d+1:1),0<be(d,a.to)&&(a.to=d,a.r=null,a.d=a.l?a.l.d+1:1),d=!a.r,p&&!a.l&&ar(a,p),f&&d&&ar(a,f)}}function ar(a,c){Os(c)||(function d(f,S){var b=S.from,v=S.to,$=S.l,S=S.r;or(f,b,v),$&&d(f,$),S&&d(f,S)})(a,c)}function za(a,c){var d=ri(c),f=d.next();if(f.done)return!1;for(var p=f.value,b=ri(a),v=b.next(p.from),$=v.value;!f.done&&!v.done;){if(be($.from,p.to)<=0&&0<=be($.to,p.from))return!0;be(p.from,$.from)<0?p=(f=d.next($.from)).value:$=(v=b.next(p.from)).value}return!1}function ri(a){var c=Os(a)?null:{s:0,n:a};return{next:function(d){for(var f=0<arguments.length;c;)switch(c.s){case 0:if(c.s=1,f)for(;c.n.l&&be(d,c.n.from)<0;)c={up:c,n:c.n.l,s:1};else for(;c.n.l;)c={up:c,n:c.n.l,s:1};case 1:if(c.s=2,!f||be(d,c.n.to)<=0)return{value:c.n,done:!1};case 2:if(c.n.r){c.s=3,c={up:c,n:c.n.r,s:0};continue}case 3:c=c.up}return{done:!0}}}}function Ua(a){var c,d,f=(((c=a.r)===null||c===void 0?void 0:c.d)||0)-(((d=a.l)===null||d===void 0?void 0:d.d)||0),p=1<f?"r":f<-1?"l":"";p&&(c=p=="r"?"l":"r",d=r({},a),f=a[p],a.from=f.from,a.to=f.to,a[p]=f[p],d[p]=f[c],(a[c]=d).d=Fa(d)),a.d=Fa(a)}function Fa(d){var c=d.r,d=d.l;return(c?d?Math.max(c.d,d.d):c.d:d?d.d:0)+1}function ii(a,c){return o(c).forEach(function(d){a[d]?ar(a[d],c[d]):a[d]=(function f(p){var b,v,$={};for(b in p)g(p,b)&&(v=p[b],$[b]=!v||typeof v!="object"||H.has(v.constructor)?v:f(v));return $})(c[d])}),a}function Ds(a,c){return a.all||c.all||Object.keys(a).some(function(d){return c[d]&&za(c[d],a[d])})}w(Ke.prototype,((bt={add:function(a){return ar(this,a),this},addKey:function(a){return or(this,a,a),this},addKeys:function(a){var c=this;return a.forEach(function(d){return or(c,d,d)}),this},hasKey:function(a){var c=ri(this).next(a).value;return c&&be(c.from,a)<=0&&0<=be(c.to,a)}})[ze]=function(){return ri(this)},bt));var ln={},Ps={},Ls=!1;function si(a){ii(Ps,a),Ls||(Ls=!0,setTimeout(function(){Ls=!1,Ms(Ps,!(Ps={}))},0))}function Ms(a,c){c===void 0&&(c=!1);var d=new Set;if(a.all)for(var f=0,p=Object.values(ln);f<p.length;f++)Ba(v=p[f],a,d,c);else for(var b in a){var v,$=/^idb\:\/\/(.*)\/(.*)\//.exec(b);$&&(b=$[1],$=$[2],(v=ln["idb://".concat(b,"/").concat($)])&&Ba(v,a,d,c))}d.forEach(function(S){return S()})}function Ba(a,c,d,f){for(var p=[],b=0,v=Object.entries(a.queries.query);b<v.length;b++){for(var $=v[b],S=$[0],T=[],R=0,_=$[1];R<_.length;R++){var P=_[R];Ds(c,P.obsSet)?P.subscribers.forEach(function(I){return d.add(I)}):f&&T.push(P)}f&&p.push([S,T])}if(f)for(var E=0,A=p;E<A.length;E++){var D=A[E],S=D[0],T=D[1];a.queries.query[S]=T}}function oh(a){var c=a._state,d=a._deps.indexedDB;if(c.isBeingOpened||a.idbdb)return c.dbReadyPromise.then(function(){return c.dbOpenError?Re(c.dbOpenError):a});c.isBeingOpened=!0,c.dbOpenError=null,c.openComplete=!1;var f=c.openCanceller,p=Math.round(10*a.verno),b=!1;function v(){if(c.openCanceller!==f)throw new ue.DatabaseClosed("db.open() was cancelled")}function $(){return new ne(function(P,E){if(v(),!d)throw new ue.MissingAPI;var A=a.name,D=c.autoSchema||!p?d.open(A):d.open(A,p);if(!D)throw new ue.MissingAPI;D.onerror=Et(E),D.onblocked=Ee(a._fireOnBlocked),D.onupgradeneeded=Ee(function(I){var j;R=D.transaction,c.autoSchema&&!a._options.allowEmptyDB?(D.onerror=nr,R.abort(),D.result.close(),(j=d.deleteDatabase(A)).onsuccess=j.onerror=Ee(function(){E(new ue.NoSuchDatabase("Database ".concat(A," doesnt exist")))})):(R.onerror=Et(E),I=I.oldVersion>Math.pow(2,62)?0:I.oldVersion,_=I<1,a.idbdb=D.result,b&&ih(a,R),rh(a,I/10,R,E))},E),D.onsuccess=Ee(function(){R=null;var I,j,N,z,B,Q=a.idbdb=D.result,ee=L(Q.objectStoreNames);if(0<ee.length)try{var X=Q.transaction((z=ee).length===1?z[0]:z,"readonly");if(c.autoSchema)j=Q,N=X,(I=a).verno=j.version/10,N=I._dbSchema=ei(0,j,N),I._storeNames=L(j.objectStoreNames,0),Jr(I,[I._allTables],o(N),N);else if(ti(a,a._dbSchema,X),((B=Es(ei(0,(B=a).idbdb,X),B._dbSchema)).add.length||B.change.some(function(J){return J.add.length||J.change.length}))&&!b)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),Q.close(),p=Q.version+1,b=!0,P($());Xr(a,X)}catch{}Sn.push(a),Q.onversionchange=Ee(function(J){c.vcFired=!0,a.on("versionchange").fire(J)}),Q.onclose=Ee(function(J){a.on("close").fire(J)}),_&&(B=a._deps,X=A,Q=B.indexedDB,B=B.IDBKeyRange,As(Q)||X===Vr||Is(Q,B).put({name:X}).catch($e)),P()},E)}).catch(function(P){switch(P?.name){case"UnknownError":if(0<c.PR1398_maxLoop)return c.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),$();break;case"VersionError":if(0<p)return p=0,$()}return ne.reject(P)})}var S,T=c.dbReadyResolve,R=null,_=!1;return ne.race([f,(typeof navigator>"u"?ne.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(P){function E(){return indexedDB.databases().finally(P)}S=setInterval(E,100),E()}).finally(function(){return clearInterval(S)}):Promise.resolve()).then($)]).then(function(){return v(),c.onReadyBeingFired=[],ne.resolve(Rs(function(){return a.on.ready.fire(a.vip)})).then(function P(){if(0<c.onReadyBeingFired.length){var E=c.onReadyBeingFired.reduce(ls,$e);return c.onReadyBeingFired=[],ne.resolve(Rs(function(){return E(a.vip)})).then(P)}})}).finally(function(){c.openCanceller===f&&(c.onReadyBeingFired=null,c.isBeingOpened=!1)}).catch(function(P){c.dbOpenError=P;try{R&&R.abort()}catch{}return f===c.openCanceller&&a._close(),Re(P)}).finally(function(){c.openComplete=!0,T()}).then(function(){var P;return _&&(P={},a.tables.forEach(function(E){E.schema.indexes.forEach(function(A){A.name&&(P["idb://".concat(a.name,"/").concat(E.name,"/").concat(A.name)]=new Ke(-1/0,[[[]]]))}),P["idb://".concat(a.name,"/").concat(E.name,"/")]=P["idb://".concat(a.name,"/").concat(E.name,"/:dels")]=new Ke(-1/0,[[[]]])}),Vt(rr).fire(P),Ms(P,!0)),a})}function js(a){function c(b){return a.next(b)}var d=p(c),f=p(function(b){return a.throw(b)});function p(b){return function(S){var $=b(S),S=$.value;return $.done?S:S&&typeof S.then=="function"?S.then(d,f):l(S)?Promise.all(S).then(d,f):d(S)}}return p(c)()}function oi(a,c,d){for(var f=l(a)?a.slice():[a],p=0;p<d;++p)f.push(c);return f}var ah={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(a){return r(r({},a),{table:function(c){var d=a.table(c),f=d.schema,p={},b=[];function v(_,P,E){var A=sr(_),D=p[A]=p[A]||[],I=_==null?0:typeof _=="string"?1:_.length,j=0<P,j=r(r({},E),{name:j?"".concat(A,"(virtual-from:").concat(E.name,")"):E.name,lowLevelIndex:E,isVirtual:j,keyTail:P,keyLength:I,extractKey:_s(_),unique:!j&&E.unique});return D.push(j),j.isPrimaryKey||b.push(j),1<I&&v(I===2?_[0]:_.slice(0,I-1),P+1,E),D.sort(function(N,z){return N.keyTail-z.keyTail}),j}c=v(f.primaryKey.keyPath,0,f.primaryKey),p[":id"]=[c];for(var $=0,S=f.indexes;$<S.length;$++){var T=S[$];v(T.keyPath,0,T)}function R(_){var P,E=_.query.index;return E.isVirtual?r(r({},_),{query:{index:E.lowLevelIndex,range:(P=_.query.range,E=E.keyTail,{type:P.type===1?2:P.type,lower:oi(P.lower,P.lowerOpen?a.MAX_KEY:a.MIN_KEY,E),lowerOpen:!0,upper:oi(P.upper,P.upperOpen?a.MIN_KEY:a.MAX_KEY,E),upperOpen:!0})}}):_}return r(r({},d),{schema:r(r({},f),{primaryKey:c,indexes:b,getIndexByKeyPath:function(_){return(_=p[sr(_)])&&_[0]}}),count:function(_){return d.count(R(_))},query:function(_){return d.query(R(_))},openCursor:function(_){var P=_.query.index,E=P.keyTail,A=P.isVirtual,D=P.keyLength;return A?d.openCursor(R(_)).then(function(j){return j&&I(j)}):d.openCursor(_);function I(j){return Object.create(j,{continue:{value:function(N){N!=null?j.continue(oi(N,_.reverse?a.MAX_KEY:a.MIN_KEY,E)):_.unique?j.continue(j.key.slice(0,D).concat(_.reverse?a.MIN_KEY:a.MAX_KEY,E)):j.continue()}},continuePrimaryKey:{value:function(N,z){j.continuePrimaryKey(oi(N,a.MAX_KEY,E),z)}},primaryKey:{get:function(){return j.primaryKey}},key:{get:function(){var N=j.key;return D===1?N[0]:N.slice(0,D)}},value:{get:function(){return j.value}}})}}})}})}};function Ns(a,c,d,f){return d=d||{},f=f||"",o(a).forEach(function(p){var b,v,$;g(c,p)?(b=a[p],v=c[p],typeof b=="object"&&typeof v=="object"&&b&&v?($=Te(b))!==Te(v)?d[f+p]=c[p]:$==="Object"?Ns(b,v,d,f+p+"."):b!==v&&(d[f+p]=c[p]):b!==v&&(d[f+p]=c[p])):d[f+p]=void 0}),o(c).forEach(function(p){g(a,p)||(d[f+p]=c[p])}),d}function zs(a,c){return c.type==="delete"?c.keys:c.keys||c.values.map(a.extractKey)}var lh={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(a){return r(r({},a),{table:function(c){var d=a.table(c),f=d.schema.primaryKey;return r(r({},d),{mutate:function(p){var b=le.trans,v=b.table(c).hook,$=v.deleting,S=v.creating,T=v.updating;switch(p.type){case"add":if(S.fire===$e)break;return b._promise("readwrite",function(){return R(p)},!0);case"put":if(S.fire===$e&&T.fire===$e)break;return b._promise("readwrite",function(){return R(p)},!0);case"delete":if($.fire===$e)break;return b._promise("readwrite",function(){return R(p)},!0);case"deleteRange":if($.fire===$e)break;return b._promise("readwrite",function(){return(function _(P,E,A){return d.query({trans:P,values:!1,query:{index:f,range:E},limit:A}).then(function(D){var I=D.result;return R({type:"delete",keys:I,trans:P}).then(function(j){return 0<j.numFailures?Promise.reject(j.failures[0]):I.length<A?{failures:[],numFailures:0,lastResult:void 0}:_(P,r(r({},E),{lower:I[I.length-1],lowerOpen:!0}),A)})})})(p.trans,p.range,1e4)},!0)}return d.mutate(p);function R(_){var P,E,A,D=le.trans,I=_.keys||zs(f,_);if(!I)throw new Error("Keys missing");return(_=_.type==="add"||_.type==="put"?r(r({},_),{keys:I}):r({},_)).type!=="delete"&&(_.values=i([],_.values)),_.keys&&(_.keys=i([],_.keys)),P=d,A=I,((E=_).type==="add"?Promise.resolve([]):P.getMany({trans:E.trans,keys:A,cache:"immutable"})).then(function(j){var N=I.map(function(z,B){var Q,ee,X,J=j[B],te={onerror:null,onsuccess:null};return _.type==="delete"?$.fire.call(te,z,J,D):_.type==="add"||J===void 0?(Q=S.fire.call(te,z,_.values[B],D),z==null&&Q!=null&&(_.keys[B]=z=Q,f.outbound||q(_.values[B],f.keyPath,z))):(Q=Ns(J,_.values[B]),(ee=T.fire.call(te,Q,z,J,D))&&(X=_.values[B],Object.keys(ee).forEach(function(Z){g(X,Z)?X[Z]=ee[Z]:q(X,Z,ee[Z])}))),te});return d.mutate(_).then(function(z){for(var B=z.failures,Q=z.results,ee=z.numFailures,z=z.lastResult,X=0;X<I.length;++X){var J=(Q||I)[X],te=N[X];J==null?te.onerror&&te.onerror(B[X]):te.onsuccess&&te.onsuccess(_.type==="put"&&j[X]?_.values[X]:J)}return{failures:B,results:Q,numFailures:ee,lastResult:z}}).catch(function(z){return N.forEach(function(B){return B.onerror&&B.onerror(z)}),Promise.reject(z)})})}}})}})}};function qa(a,c,d){try{if(!c||c.keys.length<a.length)return null;for(var f=[],p=0,b=0;p<c.keys.length&&b<a.length;++p)be(c.keys[p],a[b])===0&&(f.push(d?ce(c.values[p]):c.values[p]),++b);return f.length===a.length?f:null}catch{return null}}var ch={stack:"dbcore",level:-1,create:function(a){return{table:function(c){var d=a.table(c);return r(r({},d),{getMany:function(f){if(!f.cache)return d.getMany(f);var p=qa(f.keys,f.trans._cache,f.cache==="clone");return p?ne.resolve(p):d.getMany(f).then(function(b){return f.trans._cache={keys:f.keys,values:f.cache==="clone"?ce(b):b},b})},mutate:function(f){return f.type!=="add"&&(f.trans._cache=null),d.mutate(f)}})}}}};function Ha(a,c){return a.trans.mode==="readonly"&&!!a.subscr&&!a.trans.explicit&&a.trans.db._options.cache!=="disabled"&&!c.schema.primaryKey.outbound}function Ka(a,c){switch(a){case"query":return c.values&&!c.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var uh={stack:"dbcore",level:0,name:"Observability",create:function(a){var c=a.schema.name,d=new Ke(a.MIN_KEY,a.MAX_KEY);return r(r({},a),{transaction:function(f,p,b){if(le.subscr&&p!=="readonly")throw new ue.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(le.querier));return a.transaction(f,p,b)},table:function(f){var p=a.table(f),b=p.schema,v=b.primaryKey,_=b.indexes,$=v.extractKey,S=v.outbound,T=v.autoIncrement&&_.filter(function(E){return E.compound&&E.keyPath.includes(v.keyPath)}),R=r(r({},p),{mutate:function(E){function A(Z){return Z="idb://".concat(c,"/").concat(f,"/").concat(Z),z[Z]||(z[Z]=new Ke)}var D,I,j,N=E.trans,z=E.mutatedParts||(E.mutatedParts={}),B=A(""),Q=A(":dels"),ee=E.type,te=E.type==="deleteRange"?[E.range]:E.type==="delete"?[E.keys]:E.values.length<50?[zs(v,E).filter(function(Z){return Z}),E.values]:[],X=te[0],J=te[1],te=E.trans._cache;return l(X)?(B.addKeys(X),(te=ee==="delete"||X.length===J.length?qa(X,te):null)||Q.addKeys(X),(te||J)&&(D=A,I=te,j=J,b.indexes.forEach(function(Z){var oe=D(Z.name||"");function fe(ge){return ge!=null?Z.extractKey(ge):null}function me(ge){return Z.multiEntry&&l(ge)?ge.forEach(function(nt){return oe.addKey(nt)}):oe.addKey(ge)}(I||j).forEach(function(ge,Ve){var he=I&&fe(I[Ve]),Ve=j&&fe(j[Ve]);be(he,Ve)!==0&&(he!=null&&me(he),Ve!=null&&me(Ve))})}))):X?(J={from:(J=X.lower)!==null&&J!==void 0?J:a.MIN_KEY,to:(J=X.upper)!==null&&J!==void 0?J:a.MAX_KEY},Q.add(J),B.add(J)):(B.add(d),Q.add(d),b.indexes.forEach(function(Z){return A(Z.name).add(d)})),p.mutate(E).then(function(Z){return!X||E.type!=="add"&&E.type!=="put"||(B.addKeys(Z.results),T&&T.forEach(function(oe){for(var fe=E.values.map(function(he){return oe.extractKey(he)}),me=oe.keyPath.findIndex(function(he){return he===v.keyPath}),ge=0,nt=Z.results.length;ge<nt;++ge)fe[ge][me]=Z.results[ge];A(oe.name).addKeys(fe)})),N.mutatedParts=ii(N.mutatedParts||{},z),Z})}}),_=function(A){var D=A.query,A=D.index,D=D.range;return[A,new Ke((A=D.lower)!==null&&A!==void 0?A:a.MIN_KEY,(D=D.upper)!==null&&D!==void 0?D:a.MAX_KEY)]},P={get:function(E){return[v,new Ke(E.key)]},getMany:function(E){return[v,new Ke().addKeys(E.keys)]},count:_,query:_,openCursor:_};return o(P).forEach(function(E){R[E]=function(A){var D=le.subscr,I=!!D,j=Ha(le,p)&&Ka(E,A)?A.obsSet={}:D;if(I){var N=function(J){return J="idb://".concat(c,"/").concat(f,"/").concat(J),j[J]||(j[J]=new Ke)},z=N(""),B=N(":dels"),D=P[E](A),I=D[0],D=D[1];if((E==="query"&&I.isPrimaryKey&&!A.values?B:N(I.name||"")).add(D),!I.isPrimaryKey){if(E!=="count"){var Q=E==="query"&&S&&A.values&&p.query(r(r({},A),{values:!1}));return p[E].apply(this,arguments).then(function(J){if(E==="query"){if(S&&A.values)return Q.then(function(fe){return fe=fe.result,z.addKeys(fe),J});var te=A.values?J.result.map($):J.result;(A.values?z:B).addKeys(te)}else if(E==="openCursor"){var Z=J,oe=A.values;return Z&&Object.create(Z,{key:{get:function(){return B.addKey(Z.primaryKey),Z.key}},primaryKey:{get:function(){var fe=Z.primaryKey;return B.addKey(fe),fe}},value:{get:function(){return oe&&z.addKey(Z.primaryKey),Z.value}}})}return J})}B.add(d)}}return p[E].apply(this,arguments)}}),R}})}};function Va(a,c,d){if(d.numFailures===0)return c;if(c.type==="deleteRange")return null;var f=c.keys?c.keys.length:"values"in c&&c.values?c.values.length:1;return d.numFailures===f?null:(c=r({},c),l(c.keys)&&(c.keys=c.keys.filter(function(p,b){return!(b in d.failures)})),"values"in c&&l(c.values)&&(c.values=c.values.filter(function(p,b){return!(b in d.failures)})),c)}function Us(a,c){return d=a,((f=c).lower===void 0||(f.lowerOpen?0<be(d,f.lower):0<=be(d,f.lower)))&&(a=a,(c=c).upper===void 0||(c.upperOpen?be(a,c.upper)<0:be(a,c.upper)<=0));var d,f}function Ga(a,c,P,f,p,b){if(!P||P.length===0)return a;var v=c.query.index,$=v.multiEntry,S=c.query.range,T=f.schema.primaryKey.extractKey,R=v.extractKey,_=(v.lowLevelIndex||v).extractKey,P=P.reduce(function(E,A){var D=E,I=[];if(A.type==="add"||A.type==="put")for(var j=new Ke,N=A.values.length-1;0<=N;--N){var z,B=A.values[N],Q=T(B);j.hasKey(Q)||(z=R(B),($&&l(z)?z.some(function(Z){return Us(Z,S)}):Us(z,S))&&(j.addKey(Q),I.push(B)))}switch(A.type){case"add":var ee=new Ke().addKeys(c.values?E.map(function(oe){return T(oe)}):E),D=E.concat(c.values?I.filter(function(oe){return oe=T(oe),!ee.hasKey(oe)&&(ee.addKey(oe),!0)}):I.map(function(oe){return T(oe)}).filter(function(oe){return!ee.hasKey(oe)&&(ee.addKey(oe),!0)}));break;case"put":var X=new Ke().addKeys(A.values.map(function(oe){return T(oe)}));D=E.filter(function(oe){return!X.hasKey(c.values?T(oe):oe)}).concat(c.values?I:I.map(function(oe){return T(oe)}));break;case"delete":var J=new Ke().addKeys(A.keys);D=E.filter(function(oe){return!J.hasKey(c.values?T(oe):oe)});break;case"deleteRange":var te=A.range;D=E.filter(function(oe){return!Us(T(oe),te)})}return D},a);return P===a?a:(P.sort(function(E,A){return be(_(E),_(A))||be(T(E),T(A))}),c.limit&&c.limit<1/0&&(P.length>c.limit?P.length=c.limit:a.length===c.limit&&P.length<c.limit&&(p.dirty=!0)),b?Object.freeze(P):P)}function Wa(a,c){return be(a.lower,c.lower)===0&&be(a.upper,c.upper)===0&&!!a.lowerOpen==!!c.lowerOpen&&!!a.upperOpen==!!c.upperOpen}function dh(a,c){return(function(d,f,p,b){if(d===void 0)return f!==void 0?-1:0;if(f===void 0)return 1;if((f=be(d,f))===0){if(p&&b)return 0;if(p)return 1;if(b)return-1}return f})(a.lower,c.lower,a.lowerOpen,c.lowerOpen)<=0&&0<=(function(d,f,p,b){if(d===void 0)return f!==void 0?1:0;if(f===void 0)return-1;if((f=be(d,f))===0){if(p&&b)return 0;if(p)return-1;if(b)return 1}return f})(a.upper,c.upper,a.upperOpen,c.upperOpen)}function hh(a,c,d,f){a.subscribers.add(d),f.addEventListener("abort",function(){var p,b;a.subscribers.delete(d),a.subscribers.size===0&&(p=a,b=c,setTimeout(function(){p.subscribers.size===0&&de(b,p)},3e3))})}var fh={stack:"dbcore",level:0,name:"Cache",create:function(a){var c=a.schema.name;return r(r({},a),{transaction:function(d,f,p){var b,v,$=a.transaction(d,f,p);return f==="readwrite"&&(v=(b=new AbortController).signal,p=function(S){return function(){if(b.abort(),f==="readwrite"){for(var T=new Set,R=0,_=d;R<_.length;R++){var P=_[R],E=ln["idb://".concat(c,"/").concat(P)];if(E){var A=a.table(P),D=E.optimisticOps.filter(function(oe){return oe.trans===$});if($._explicit&&S&&$.mutatedParts)for(var I=0,j=Object.values(E.queries.query);I<j.length;I++)for(var N=0,z=(ee=j[I]).slice();N<z.length;N++)Ds((X=z[N]).obsSet,$.mutatedParts)&&(de(ee,X),X.subscribers.forEach(function(oe){return T.add(oe)}));else if(0<D.length){E.optimisticOps=E.optimisticOps.filter(function(oe){return oe.trans!==$});for(var B=0,Q=Object.values(E.queries.query);B<Q.length;B++)for(var ee,X,J,te=0,Z=(ee=Q[B]).slice();te<Z.length;te++)(X=Z[te]).res!=null&&$.mutatedParts&&(S&&!X.dirty?(J=Object.isFrozen(X.res),J=Ga(X.res,X.req,D,A,X,J),X.dirty?(de(ee,X),X.subscribers.forEach(function(oe){return T.add(oe)})):J!==X.res&&(X.res=J,X.promise=ne.resolve({result:J}))):(X.dirty&&de(ee,X),X.subscribers.forEach(function(oe){return T.add(oe)})))}}}T.forEach(function(oe){return oe()})}}},$.addEventListener("abort",p(!1),{signal:v}),$.addEventListener("error",p(!1),{signal:v}),$.addEventListener("complete",p(!0),{signal:v})),$},table:function(d){var f=a.table(d),p=f.schema.primaryKey;return r(r({},f),{mutate:function(b){var v=le.trans;if(p.outbound||v.db._options.cache==="disabled"||v.explicit||v.idbtrans.mode!=="readwrite")return f.mutate(b);var $=ln["idb://".concat(c,"/").concat(d)];return $?(v=f.mutate(b),b.type!=="add"&&b.type!=="put"||!(50<=b.values.length||zs(p,b).some(function(S){return S==null}))?($.optimisticOps.push(b),b.mutatedParts&&si(b.mutatedParts),v.then(function(S){0<S.numFailures&&(de($.optimisticOps,b),(S=Va(0,b,S))&&$.optimisticOps.push(S),b.mutatedParts&&si(b.mutatedParts))}),v.catch(function(){de($.optimisticOps,b),b.mutatedParts&&si(b.mutatedParts)})):v.then(function(S){var T=Va(0,r(r({},b),{values:b.values.map(function(R,_){var P;return S.failures[_]?R:(R=(P=p.keyPath)!==null&&P!==void 0&&P.includes(".")?ce(R):r({},R),q(R,p.keyPath,S.results[_]),R)})}),S);$.optimisticOps.push(T),queueMicrotask(function(){return b.mutatedParts&&si(b.mutatedParts)})}),v):f.mutate(b)},query:function(b){if(!Ha(le,f)||!Ka("query",b))return f.query(b);var v=((T=le.trans)===null||T===void 0?void 0:T.db._options.cache)==="immutable",_=le,$=_.requery,S=_.signal,T=(function(A,D,I,j){var N=ln["idb://".concat(A,"/").concat(D)];if(!N)return[];if(!(D=N.queries[I]))return[null,!1,N,null];var z=D[(j.query?j.query.index.name:null)||""];if(!z)return[null,!1,N,null];switch(I){case"query":var B=z.find(function(Q){return Q.req.limit===j.limit&&Q.req.values===j.values&&Wa(Q.req.query.range,j.query.range)});return B?[B,!0,N,z]:[z.find(function(Q){return("limit"in Q.req?Q.req.limit:1/0)>=j.limit&&(!j.values||Q.req.values)&&dh(Q.req.query.range,j.query.range)}),!1,N,z];case"count":return B=z.find(function(Q){return Wa(Q.req.query.range,j.query.range)}),[B,!!B,N,z]}})(c,d,"query",b),R=T[0],_=T[1],P=T[2],E=T[3];return R&&_?R.obsSet=b.obsSet:(_=f.query(b).then(function(A){var D=A.result;if(R&&(R.res=D),v){for(var I=0,j=D.length;I<j;++I)Object.freeze(D[I]);Object.freeze(D)}else A.result=ce(D);return A}).catch(function(A){return E&&R&&de(E,R),Promise.reject(A)}),R={obsSet:b.obsSet,promise:_,subscribers:new Set,type:"query",req:b,dirty:!1},E?E.push(R):(E=[R],(P=P||(ln["idb://".concat(c,"/").concat(d)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[b.query.index.name||""]=E)),hh(R,E,$,S),R.promise.then(function(A){return{result:Ga(A.result,b,P?.optimisticOps,f,R,v)}})}})}})}};function ai(a,c){return new Proxy(a,{get:function(d,f,p){return f==="db"?c:Reflect.get(d,f,p)}})}var Mt=(Oe.prototype.version=function(a){if(isNaN(a)||a<.1)throw new ue.Type("Given version is not a positive number");if(a=Math.round(10*a)/10,this.idbdb||this._state.isBeingOpened)throw new ue.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,a);var c=this._versions,d=c.filter(function(f){return f._cfg.version===a})[0];return d||(d=new this.Version(a),c.push(d),c.sort(nh),d.stores({}),this._state.autoSchema=!1,d)},Oe.prototype._whenReady=function(a){var c=this;return this.idbdb&&(this._state.openComplete||le.letThrough||this._vip)?a():new ne(function(d,f){if(c._state.openComplete)return f(new ue.DatabaseClosed(c._state.dbOpenError));if(!c._state.isBeingOpened){if(!c._state.autoOpen)return void f(new ue.DatabaseClosed);c.open().catch($e)}c._state.dbReadyPromise.then(d,f)}).then(a)},Oe.prototype.use=function(a){var c=a.stack,d=a.create,f=a.level,p=a.name;return p&&this.unuse({stack:c,name:p}),a=this._middlewares[c]||(this._middlewares[c]=[]),a.push({stack:c,create:d,level:f??10,name:p}),a.sort(function(b,v){return b.level-v.level}),this},Oe.prototype.unuse=function(a){var c=a.stack,d=a.name,f=a.create;return c&&this._middlewares[c]&&(this._middlewares[c]=this._middlewares[c].filter(function(p){return f?p.create!==f:!!d&&p.name!==d})),this},Oe.prototype.open=function(){var a=this;return sn(Ft,function(){return oh(a)})},Oe.prototype._close=function(){var a=this._state,c=Sn.indexOf(this);if(0<=c&&Sn.splice(c,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}a.isBeingOpened||(a.dbReadyPromise=new ne(function(d){a.dbReadyResolve=d}),a.openCanceller=new ne(function(d,f){a.cancelOpen=f}))},Oe.prototype.close=function(d){var c=(d===void 0?{disableAutoOpen:!0}:d).disableAutoOpen,d=this._state;c?(d.isBeingOpened&&d.cancelOpen(new ue.DatabaseClosed),this._close(),d.autoOpen=!1,d.dbOpenError=new ue.DatabaseClosed):(this._close(),d.autoOpen=this._options.autoOpen||d.isBeingOpened,d.openComplete=!1,d.dbOpenError=null)},Oe.prototype.delete=function(a){var c=this;a===void 0&&(a={disableAutoOpen:!0});var d=0<arguments.length&&typeof arguments[0]!="object",f=this._state;return new ne(function(p,b){function v(){c.close(a);var $=c._deps.indexedDB.deleteDatabase(c.name);$.onsuccess=Ee(function(){var S,T,R;S=c._deps,T=c.name,R=S.indexedDB,S=S.IDBKeyRange,As(R)||T===Vr||Is(R,S).delete(T).catch($e),p()}),$.onerror=Et(b),$.onblocked=c._fireOnBlocked}if(d)throw new ue.InvalidArgument("Invalid closeOptions argument to db.delete()");f.isBeingOpened?f.dbReadyPromise.then(v):v()})},Oe.prototype.backendDB=function(){return this.idbdb},Oe.prototype.isOpen=function(){return this.idbdb!==null},Oe.prototype.hasBeenClosed=function(){var a=this._state.dbOpenError;return a&&a.name==="DatabaseClosed"},Oe.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Oe.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Oe.prototype,"tables",{get:function(){var a=this;return o(this._allTables).map(function(c){return a._allTables[c]})},enumerable:!1,configurable:!0}),Oe.prototype.transaction=function(){var a=function(c,d,f){var p=arguments.length;if(p<2)throw new ue.InvalidArgument("Too few arguments");for(var b=new Array(p-1);--p;)b[p-1]=arguments[p];return f=b.pop(),[c,se(b),f]}.apply(this,arguments);return this._transaction.apply(this,a)},Oe.prototype._transaction=function(a,c,d){var f=this,p=le.trans;p&&p.db===this&&a.indexOf("!")===-1||(p=null);var b,v,$=a.indexOf("?")!==-1;a=a.replace("!","").replace("?","");try{if(v=c.map(function(T){if(T=T instanceof f.Table?T.name:T,typeof T!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return T}),a=="r"||a===bs)b=bs;else{if(a!="rw"&&a!=ws)throw new ue.InvalidArgument("Invalid transaction mode: "+a);b=ws}if(p){if(p.mode===bs&&b===ws){if(!$)throw new ue.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");p=null}p&&v.forEach(function(T){if(p&&p.storeNames.indexOf(T)===-1){if(!$)throw new ue.SubTransaction("Table "+T+" not included in parent transaction.");p=null}}),$&&p&&!p.active&&(p=null)}}catch(T){return p?p._promise(null,function(R,_){_(T)}):Re(T)}var S=function T(R,_,P,E,A){return ne.resolve().then(function(){var D=le.transless||le,I=R._createTransaction(_,P,R._dbSchema,E);if(I.explicit=!0,D={trans:I,transless:D},E)I.idbtrans=E.idbtrans;else try{I.create(),I.idbtrans._explicit=!0,R._state.PR1398_maxLoop=3}catch(z){return z.name===as.InvalidState&&R.isOpen()&&0<--R._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),R.close({disableAutoOpen:!1}),R.open().then(function(){return T(R,_,P,null,A)})):Re(z)}var j,N=et(A);return N&&_n(),D=ne.follow(function(){var z;(j=A.call(I,I))&&(N?(z=qt.bind(null,null),j.then(z,z)):typeof j.next=="function"&&typeof j.throw=="function"&&(j=js(j)))},D),(j&&typeof j.then=="function"?ne.resolve(j).then(function(z){return I.active?z:Re(new ue.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):D.then(function(){return j})).then(function(z){return E&&I._resolve(),I._completion.then(function(){return z})}).catch(function(z){return I._reject(z),Re(z)})})}.bind(null,this,b,v,p,d);return p?p._promise(b,S,"lock"):le.trans?sn(le.transless,function(){return f._whenReady(S)}):this._whenReady(S)},Oe.prototype.table=function(a){if(!g(this._allTables,a))throw new ue.InvalidTable("Table ".concat(a," does not exist"));return this._allTables[a]},Oe);function Oe(a,c){var d=this;this._middlewares={},this.verno=0;var f=Oe.dependencies;this._options=c=r({addons:Oe.addons,autoOpen:!0,indexedDB:f.indexedDB,IDBKeyRange:f.IDBKeyRange,cache:"cloned"},c),this._deps={indexedDB:c.indexedDB,IDBKeyRange:c.IDBKeyRange},f=c.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var p,b,v,$,S,T={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:$e,dbReadyPromise:null,cancelOpen:$e,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:c.autoOpen};T.dbReadyPromise=new ne(function(_){T.dbReadyResolve=_}),T.openCanceller=new ne(function(_,P){T.cancelOpen=P}),this._state=T,this.name=a,this.on=Zn(this,"populate","blocked","versionchange","close",{ready:[ls,$e]}),this.on.ready.subscribe=F(this.on.ready.subscribe,function(_){return function(P,E){Oe.vip(function(){var A,D=d._state;D.openComplete?(D.dbOpenError||ne.resolve().then(P),E&&_(P)):D.onReadyBeingFired?(D.onReadyBeingFired.push(P),E&&_(P)):(_(P),A=d,E||_(function I(){A.on.ready.unsubscribe(P),A.on.ready.unsubscribe(I)}))})}}),this.Collection=(p=this,er(Yd.prototype,function(j,I){this.db=p;var E=_a,A=null;if(I)try{E=I()}catch(N){A=N}var D=j._ctx,I=D.table,j=I.hook.reading.fire;this._ctx={table:I,index:D.index,isPrimKey:!D.index||I.schema.primKey.keyPath&&D.index===I.schema.primKey.name,range:E,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:A,or:D.or,valueMapper:j!==Wn?j:null}})),this.Table=(b=this,er(Ia.prototype,function(_,P,E){this.db=b,this._tx=E,this.name=_,this.schema=P,this.hook=b._allTables[_]?b._allTables[_].hook:Zn(null,{creating:[Ud,$e],reading:[zd,Wn],updating:[Bd,$e],deleting:[Fd,$e]})})),this.Transaction=(v=this,er(Jd.prototype,function(_,P,E,A,D){var I=this;this.db=v,this.mode=_,this.storeNames=P,this.schema=E,this.chromeTransactionDurability=A,this.idbtrans=null,this.on=Zn(this,"complete","error","abort"),this.parent=D||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new ne(function(j,N){I._resolve=j,I._reject=N}),this._completion.then(function(){I.active=!1,I.on.complete.fire()},function(j){var N=I.active;return I.active=!1,I.on.error.fire(j),I.parent?I.parent._reject(j):N&&I.idbtrans&&I.idbtrans.abort(),Re(j)})})),this.Version=($=this,er(sh.prototype,function(_){this.db=$,this._cfg={version:_,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(S=this,er(Pa.prototype,function(_,P,E){if(this.db=S,this._ctx={table:_,index:P===":id"?null:P,or:E},this._cmp=this._ascending=be,this._descending=function(A,D){return be(D,A)},this._max=function(A,D){return 0<be(A,D)?A:D},this._min=function(A,D){return be(A,D)<0?A:D},this._IDBKeyRange=S._deps.IDBKeyRange,!this._IDBKeyRange)throw new ue.MissingAPI})),this.on("versionchange",function(_){0<_.newVersion?console.warn("Another connection wants to upgrade database '".concat(d.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(d.name,"'. Closing db now to resume the delete request.")),d.close({disableAutoOpen:!1})}),this.on("blocked",function(_){!_.newVersion||_.newVersion<_.oldVersion?console.warn("Dexie.delete('".concat(d.name,"') was blocked")):console.warn("Upgrade '".concat(d.name,"' blocked by other connection holding version ").concat(_.oldVersion/10))}),this._maxKey=ir(c.IDBKeyRange),this._createTransaction=function(_,P,E,A){return new d.Transaction(_,P,E,d._options.chromeTransactionDurability,A)},this._fireOnBlocked=function(_){d.on("blocked").fire(_),Sn.filter(function(P){return P.name===d.name&&P!==d&&!P._state.vcFired}).map(function(P){return P.on("versionchange").fire(_)})},this.use(ch),this.use(fh),this.use(uh),this.use(ah),this.use(lh);var R=new Proxy(this,{get:function(_,P,E){if(P==="_vip")return!0;if(P==="table")return function(D){return ai(d.table(D),R)};var A=Reflect.get(_,P,E);return A instanceof Ia?ai(A,R):P==="tables"?A.map(function(D){return ai(D,R)}):P==="_createTransaction"?function(){return ai(A.apply(this,arguments),R)}:A}});this.vip=R,f.forEach(function(_){return _(d)})}var li,bt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",ph=(Fs.prototype.subscribe=function(a,c,d){return this._subscribe(a&&typeof a!="function"?a:{next:a,error:c,complete:d})},Fs.prototype[bt]=function(){return this},Fs);function Fs(a){this._subscribe=a}try{li={indexedDB:s.indexedDB||s.mozIndexedDB||s.webkitIndexedDB||s.msIndexedDB,IDBKeyRange:s.IDBKeyRange||s.webkitIDBKeyRange}}catch{li={indexedDB:null,IDBKeyRange:null}}function Ya(a){var c,d=!1,f=new ph(function(p){var b=et(a),v,$=!1,S={},T={},R={get closed(){return $},unsubscribe:function(){$||($=!0,v&&v.abort(),_&&Vt.storagemutated.unsubscribe(E))}};p.start&&p.start(R);var _=!1,P=function(){return gs(A)},E=function(D){ii(S,D),Ds(T,S)&&P()},A=function(){var D,I,j;!$&&li.indexedDB&&(S={},D={},v&&v.abort(),v=new AbortController,j=(function(N){var z=kn();try{b&&_n();var B=Bt(a,N);return B=b?B.finally(qt):B}finally{z&&Cn()}})(I={subscr:D,signal:v.signal,requery:P,querier:a,trans:null}),Promise.resolve(j).then(function(N){d=!0,c=N,$||I.signal.aborted||(S={},(function(z){for(var B in z)if(g(z,B))return;return 1})(T=D)||_||(Vt(rr,E),_=!0),gs(function(){return!$&&p.next&&p.next(N)}))},function(N){d=!1,["DatabaseClosedError","AbortError"].includes(N?.name)||$||gs(function(){$||p.error&&p.error(N)})}))};return setTimeout(P,0),R});return f.hasValue=function(){return d},f.getValue=function(){return c},f}var cn=Mt;function Bs(a){var c=Gt;try{Gt=!0,Vt.storagemutated.fire(a),Ms(a,!0)}finally{Gt=c}}w(cn,r(r({},jr),{delete:function(a){return new cn(a,{addons:[]}).delete()},exists:function(a){return new cn(a,{addons:[]}).open().then(function(c){return c.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(a){try{return c=cn.dependencies,d=c.indexedDB,c=c.IDBKeyRange,(As(d)?Promise.resolve(d.databases()).then(function(f){return f.map(function(p){return p.name}).filter(function(p){return p!==Vr})}):Is(d,c).toCollection().primaryKeys()).then(a)}catch{return Re(new ue.MissingAPI)}var c,d},defineClass:function(){return function(a){u(this,a)}},ignoreTransaction:function(a){return le.trans?sn(le.transless,a):a()},vip:Rs,async:function(a){return function(){try{var c=js(a.apply(this,arguments));return c&&typeof c.then=="function"?c:ne.resolve(c)}catch(d){return Re(d)}}},spawn:function(a,c,d){try{var f=js(a.apply(d,c||[]));return f&&typeof f.then=="function"?f:ne.resolve(f)}catch(p){return Re(p)}},currentTransaction:{get:function(){return le.trans||null}},waitFor:function(a,c){return c=ne.resolve(typeof a=="function"?cn.ignoreTransaction(a):a).timeout(c||6e4),le.trans?le.trans.waitFor(c):c},Promise:ne,debug:{get:function(){return St},set:function(a){wa(a)}},derive:C,extend:u,props:w,override:F,Events:Zn,on:Vt,liveQuery:Ya,extendObservabilitySet:ii,getByKeyPath:G,setByKeyPath:q,delByKeyPath:function(a,c){typeof c=="string"?q(a,c,void 0):"length"in c&&[].map.call(c,function(d){q(a,d,void 0)})},shallowClone:Y,deepClone:ce,getObjectDiff:Ns,cmp:be,asap:W,minKey:-1/0,addons:[],connections:Sn,errnames:as,dependencies:li,cache:ln,semVer:"4.0.10",version:"4.0.10".split(".").map(function(a){return parseInt(a)}).reduce(function(a,c,d){return a+c/Math.pow(10,2*d)})})),cn.maxKey=ir(cn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Vt(rr,function(a){Gt||(a=new CustomEvent(xs,{detail:a}),Gt=!0,dispatchEvent(a),Gt=!1)}),addEventListener(xs,function(a){a=a.detail,Gt||Bs(a)}));var In,Gt=!1,Qa=function(){};return typeof BroadcastChannel<"u"&&((Qa=function(){(In=new BroadcastChannel(xs)).onmessage=function(a){return a.data&&Bs(a.data)}})(),typeof In.unref=="function"&&In.unref(),Vt(rr,function(a){Gt||In.postMessage(a)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(a){if(!Mt.disableBfCache&&a.persisted){St&&console.debug("Dexie: handling persisted pagehide"),In?.close();for(var c=0,d=Sn;c<d.length;c++)d[c].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(a){!Mt.disableBfCache&&a.persisted&&(St&&console.debug("Dexie: handling persisted pageshow"),Qa(),Bs({all:new Ke(-1/0,[[]])}))})),ne.rejectionMapper=function(a,c){return!a||a instanceof He||a instanceof TypeError||a instanceof SyntaxError||!a.name||!ba[a.name]?a:(c=new ba[a.name](c||a.message,a),"stack"in a&&x(c,"stack",{get:function(){return this.inner.stack}}),c)},wa(St),r(Mt,Object.freeze({__proto__:null,Dexie:Mt,liveQuery:Ya,Entity:Sa,cmp:be,PropModSymbol:Lt,PropModification:tr,replacePrefix:function(a,c){return new tr({replacePrefix:[a,c]})},add:function(a){return new tr({add:a})},remove:function(a){return new tr({remove:a})},default:Mt,RangeSet:Ke,mergeRanges:ar,rangesOverlap:za}),{default:Mt}),Mt})})(vi)),vi.exports}var Wh=Gh();const ro=Kh(Wh),ul=Symbol.for("Dexie"),Ei=globalThis[ul]||(globalThis[ul]=ro);if(ro.semVer!==Ei.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${ro.semVer} and ${Ei.semVer}`);const{liveQuery:Eo,mergeRanges:D0,rangesOverlap:P0,RangeSet:L0,cmp:M0,Entity:j0,PropModSymbol:N0,PropModification:z0,replacePrefix:U0,add:F0,remove:B0}=Ei,Yh="easydb";function pn(e,t){return`${e}::${t}`}let ui=null;function Bc(){if(ui)return ui;const e=new Ei(Yh);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.version(3).stores({settings:"key, workspaceId, name"}).upgrade(async t=>{const n=t.table("settings"),i=(await n.toArray()).filter(l=>l.workspaceId==null);if(i.length===0)return;const s=(await t.table("workspaces").toArray()).map(l=>l.id),o=s.length>0?s:["default"];for(const l of i){for(const u of o)await n.put({key:pn(u,l.key),workspaceId:u,name:l.key,value:l.value});await n.delete(l.key)}}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>Qh()),ui={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},ui}function Qh(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function cr(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const n=Object.entries(t);return e.filter(r=>To(r,n)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,n){if(await e.update(t,n)===0)throw new Error(`patch: no doc with id=${t}`);const i=await e.get(t);if(!i)throw new Error(`patch: doc id=${t} vanished after update`);return i},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const r=Eo(()=>e.toArray()).subscribe({next:i=>t(i)});return()=>r.unsubscribe()}}}function Xh(e,t){return{async find(n){const r=e.where("tableId").equals(t);if(!n||Object.keys(n).length===0)return r.toArray();const i=Object.entries(n);return r.filter(s=>To(s,i)).toArray()},async findOne(n){const r=await e.get(n);return r&&r.tableId===t?r:null},async insert(n){const r={...n,tableId:t};return await e.add(r),r},async bulkInsert(n){if(n.length===0)return[];const r=n.map(i=>({...i,tableId:t}));return await e.bulkAdd(r),r},async upsert(n){const r={...n,tableId:t};return await e.put(r),r},async patch(n,r){if(await e.update(n,r)===0)throw new Error(`row patch: no row ${n}`);const s=await e.get(n);if(!s)throw new Error(`row patch: row ${n} vanished after update`);return s},async remove(n){await e.delete(n)},async bulkRemove(n){n.length!==0&&await e.bulkDelete(n)},subscribe(n){const i=Eo(()=>e.where("tableId").equals(t).toArray()).subscribe({next:s=>n(s)});return()=>i.unsubscribe()}}}function Jh(e,t){const n=i=>({...i,workspaceId:t(),key:pn(t(),i.name),name:i.name,value:i.value}),r=()=>e.where("workspaceId").equals(t());return{async find(i){const s=await r().toArray();if(!i||Object.keys(i).length===0)return s;const o=Object.entries(i);return s.filter(l=>To(l,o))},async findOne(i){return await e.get(pn(t(),i))??null},async insert(i){const s=n(i);return await e.add(s),s},async bulkInsert(i){if(i.length===0)return[];const s=i.map(o=>n(o));return await e.bulkAdd(s),s},async upsert(i){const s=n(i);return await e.put(s),s},async patch(i,s){const o=pn(t(),i);if(await e.update(o,s)===0)throw new Error(`setting patch: no setting ${i}`);const u=await e.get(o);if(!u)throw new Error(`setting patch: ${i} vanished after update`);return u},async remove(i){await e.delete(pn(t(),i))},async bulkRemove(i){i.length!==0&&await e.bulkDelete(i.map(s=>pn(t(),s)))},subscribe(i){const o=Eo(()=>r().toArray()).subscribe({next:l=>i(l)});return()=>o.unsubscribe()}}}function To(e,t){for(const[n,r]of t)if(e[n]!==r)return!1;return!0}function Zh(e,t){return{workspaces:cr(e.workspaces),tables:cr(e.tables),settings:Jh(e.settings,t),plugins:cr(e.plugins),viewTemplates:cr(e.viewTemplates),viewInstances:cr(e.viewInstances),rows:n=>Xh(e.rows,n)}}function ef(e){const{base:t,providers:n,tableById:r,ctx:i}=e,s=new Map;return{...t,rows(o){const l=r(o),u=l?.source;if(u){const h=n.get(u.type);if(h){const m=JSON.stringify(u),g=s.get(o);if(g&&g.key===m)return g.coll;const w=h.create(l,i);return s.set(o,{key:m,coll:w}),w}}return s.delete(o),t.rows(o)}}}function tf(){const e=new Map;return{on(t,n){let r=e.get(t);return r||(r=new Set,e.set(t,r)),r.add(n),()=>{r.delete(n)}},emit(t,n){const r=e.get(t);if(r)for(const i of r)try{i(n)}catch(s){console.error(`[event:${String(t)}] listener threw`,s)}}}}const ht=xe`
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
`;function ft(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const n=t.querySelector("form");n&&(e.preventDefault(),n.requestSubmit())}const dl=new WeakSet;function pt(e,t){if(dl.has(t))return;dl.add(t);let n=0,r=0,i=0,s=0,o=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",u=>{if(u.target.closest("button, input, textarea, select, a, label"))return;o=!0,n=u.clientX,r=u.clientY;const m=e.getBoundingClientRect();i=m.left,s=m.top,t.setPointerCapture(u.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",u=>{if(!o)return;const h=u.clientX-n,m=u.clientY-r,g=-e.offsetWidth+80,w=window.innerWidth-80,y=0,x=window.innerHeight-40,C=Math.max(g,Math.min(w,i+h)),O=Math.max(y,Math.min(x,s+m));e.style.position="fixed",e.style.left=`${C}px`,e.style.top=`${O}px`,e.style.margin="0"});const l=u=>{if(o){o=!1;try{t.releasePointerCapture(u.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",l),t.addEventListener("pointercancel",l)}var nf=Object.defineProperty,rf=Object.getOwnPropertyDescriptor,qc=(e,t,n,r)=>{for(var i=r>1?void 0:r?rf(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&nf(t,n,i),i};let yt=class extends ve{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitChoice=e=>{if(e.preventDefault(),this.current?.kind!=="choice")return;const t=this.current.options[0];t!==void 0&&this.closeAndResolve(t)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),yt.instance=this}disconnectedCallback(){super.disconnectedCallback(),yt.instance===this&&(yt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&pt(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(n=>{this.current={kind:"alert",title:t,message:e,resolve:n}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",n="Input"){return this.enqueue(r=>{this.current={kind:"prompt",title:n,message:e,value:t,resolve:r}})}choice(e,t,n="Choose"){return this.enqueue(r=>{this.current={kind:"choice",title:n,message:e,options:t,resolve:r}})}enqueue(e){return new Promise(t=>{const n=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(n):n()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const n=this.queue.shift();n&&n()}))}render(){const e=this.current;return k`
      <dialog @cancel=${this.onCancel} @keydown=${ft}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):re}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return k`
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
        `;case"prompt":return k`
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
        `;case"choice":return k`
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
              ${e.message?k`<p class="message">${e.message}</p>`:re}
              <div class="choices">
                ${e.options.map((t,n)=>n===0?k`<button type="submit" class="choice primary" autofocus>${t}</button>`:k`<button
                        type="button"
                        class="choice"
                        @click=${()=>this.closeAndResolve(t)}
                      >
                        ${t}
                      </button>`)}
              </div>
            </div>
          </form>
        `}}};yt.instance=null;yt.styles=[ht,xe`
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
    `];qc([U()],yt.prototype,"current",2);yt=qc([Se("host-dialogs")],yt);const mt=xe`
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
`;var sf=Object.defineProperty,of=Object.getOwnPropertyDescriptor,Hc=(e,t,n,r)=>{for(var i=r>1?void 0:r?of(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&sf(t,n,i),i};let jt=class extends ve{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),jt.instance=this}disconnectedCallback(){super.disconnectedCallback(),jt.instance===this&&(jt.instance=null)}show(e,t){const n={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,n];const r=t?.durationMs??(n.kind==="error"||n.kind==="warning"?7e3:4e3);n.timer=window.setTimeout(()=>this.dismiss(n.id),r)}dismiss(e){const t=this.toasts.find(n=>n.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(n=>n.id!==e)}render(){return k`
      ${this.toasts.map(e=>k`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${lf(e.kind)}</span>
            <span class="body">
              ${e.title?k`<strong>${e.title}</strong>`:""}${af(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};jt.instance=null;jt.styles=[mt,xe`
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
    `];Hc([U()],jt.prototype,"toasts",2);jt=Hc([Se("toast-host")],jt);function af(e){const t=/(https?:\/\/[^\s)]+)/g,n=[];let r=0,i;for(;(i=t.exec(e))!==null;)i.index>r&&n.push(e.slice(r,i.index)),n.push({url:i[0]}),r=i.index+i[0].length;return r<e.length&&n.push(e.slice(r)),n.length===0?e:n.map(s=>typeof s=="string"?s:k`<a href=${s.url} target="_blank" rel="noopener noreferrer">${s.url}</a>`)}function lf(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function cf(){return{headerButtons:[],footerButtons:[],tableButtons:[],columnEditorActions:[],importers:[],connectors:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map,settings:new Map,commands:[]}}function It(e,t){return e.push(t),()=>{const n=e.indexOf(t);n>=0&&e.splice(n,1)}}function Ks(e,t,n){return e.set(t,n),()=>{e.get(t)===n&&e.delete(t)}}function uf(e){return{registerHeaderButton:t=>It(e.headerButtons,t),registerFooterButton:t=>It(e.footerButtons,t),registerTableButton:t=>It(e.tableButtons,t),registerColumnEditorAction:t=>It(e.columnEditorActions,t),registerImporter:t=>It(e.importers,t),registerConnector:t=>It(e.connectors,t),registerExporter:t=>It(e.exporters,t),registerUrlSource:t=>It(e.urlSources,t),registerDropHandler:t=>It(e.dropHandlers,t),registerCellRenderer:(t,n)=>Ks(e.cellRenderers,t,n),registerRowRenderer:(t,n)=>Ks(e.rowRenderers,t,n),registerTableRenderer:(t,n)=>Ks(e.tableRenderers,t,n),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},openSettings:()=>{document.dispatchEvent(new CustomEvent("easydb:open-settings"))},registerCommand:t=>It(e.commands,t),openCommandPalette:()=>{document.dispatchEvent(new CustomEvent("easydb:open-command-palette"))},registerSettings:(t,n,r)=>(e.settings.set(t,{name:n,fields:r}),()=>{e.settings.get(t)?.name===n&&e.settings.delete(t)}),dialogs:df}}const df={async alert(e,t){const n=yt.instance;if(n)return n.alert(e,t);window.alert(e)},async confirm(e,t){const n=yt.instance;return n?n.confirm(e,t):window.confirm(e)},async prompt(e,t,n){const r=yt.instance;return r?r.prompt(e,t,n):window.prompt(e,t)??null},async choice(e,t,n){const r=yt.instance;if(r)return r.choice(e,t,n);const i=window.prompt(`${e}

Options: ${t.join(", ")}`);return i&&t.includes(i)?i:null},toast(e,t){const n=jt.instance;n?n.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}},Io="/easydbaccess/settings.json",Kc="/easydbaccess/secrets.txt";function Ir(e){try{return globalThis.localStorage??null}catch{return null}}function Ui(e){const t=Ir();if(!t)return{};const n=t.getItem(Io);if(!n)return{};try{const r=JSON.parse(n);return r&&typeof r=="object"?r:{}}catch{return{}}}function Ao(e,t){return Ui()[e]}function hf(e,t,n){const r=Ir();if(!r)return;const i=Ui();i[e]=t,r.setItem(Io,JSON.stringify(i))}function ff(e,t){const n=Ir();if(!n)return;const r=Ui();e in r&&(delete r[e],n.setItem(Io,JSON.stringify(r)))}function io(e,t){return e in Ui()}function Fi(e){return Ir()?.getItem(Kc)??""}function Vc(e,t){Ir()?.setItem(Kc,e)}function $r(e){const t={};for(const n of e.split(/\r?\n/)){const r=n.trim();if(!r||r.startsWith("#"))continue;const i=r.indexOf(":");if(i<0)continue;const s=r.slice(0,i).trim(),o=r.slice(i+1).trim();s&&(t[s]=o)}return t}function Gc(e,t){return e.replace(/\$\{secret:([^}]+)\}/g,(n,r)=>{const i=t[r.trim()];return i===void 0?n:i})}function pf(e){const t=uf(e.registries),n=e.registries.rowSources,r=o=>(n.set(o.type,o),()=>{n.get(o.type)===o&&n.delete(o.type)}),i=gf(e.store,e.registries),s={open(o){return console.warn("[host] windows.open is stubbed until Phase 5",o.id),{id:o.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:s,registerRowSource:r,settings:i,backend:{fetch:async(o,l)=>{const u=await mf(e.store),h=l?.body instanceof ArrayBuffer;if(!u||h)return globalThis.fetch(o,l);const m={url:o};return l?.method&&(m.method=l.method),l?.headers&&(m.headers=l.headers),typeof l?.body=="string"&&(m.body=l.body),globalThis.fetch(`${u}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)})},async saveFile(o,l,u){const h=typeof l=="string"?new Blob([l],{type:u??"application/octet-stream"}):l,m=URL.createObjectURL(h),g=document.createElement("a");g.href=m,g.download=o,g.rel="noopener",document.body.appendChild(g),g.click(),g.remove(),setTimeout(()=>URL.revokeObjectURL(m),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function mf(e){const t="server-sync:url";let n=io(t)?Ao(t):void 0;return n===void 0&&(n=(await e.settings.findOne(t))?.value),typeof n!="string"||n.length===0?null:Gc(n,$r(Fi())).replace(/\/+$/,"")}function gf(e,t){const n=(s,o)=>`${s}:${o}`,r=(s,o)=>t.settings.get(s)?.fields.find(l=>l.key===o),i=s=>typeof s=="string"?Gc(s,$r(Fi())):s;return{async get(s,o){const l=n(s,o);let u;if(io(l))u=Ao(l);else{const h=await e.settings.findOne(l);u=h?h.value:r(s,o)?.default}return i(u)},async set(s,o,l,u){const h=n(s,o);(u??r(s,o)?.scope??"workspace")==="user"?(hf(h,l),await e.settings.remove(h).catch(()=>{})):(await e.settings.upsert({name:h,value:l}),ff(h))},async placement(s,o){const l=n(s,o);return io(l)?"user":await e.settings.findOne(l)?"workspace":null}}}function hl(e,t){return e.has(t)?e.get(t)!=="0":!1}function bf(){if(typeof location>"u")return"off";const e=new URLSearchParams(location.search);return hl(e,"safemode")?"all-optional":hl(e,"safemode1")?"url-plugins":"off"}const wt=bf();function Ro(e){let t;try{t=new URL(e)}catch{return e}const n=t.hostname.toLowerCase();if(n==="github.com"||n==="www.github.com"){const r=t.pathname.split("/").filter(Boolean);if(r.length>=5&&(r[2]==="blob"||r[2]==="raw")){const i=r[0],s=r[1];let o=r.slice(3);return o.length>=3&&o[0]==="refs"&&(o[1]==="heads"||o[1]==="tags")&&(o=o.slice(2)),`https://raw.githubusercontent.com/${[i,s,...o].join("/")}`}}return e}function Wc(e){if(e.length>1024)return!1;const t=e.split(`
`);return t[0]?.startsWith("version https://git-lfs.github.com/spec/v1")===!0&&t.some(n=>n.startsWith("oid "))&&t.some(n=>n.startsWith("size "))}function Yc(e){const t=Ro(e);let n;try{n=new URL(t)}catch{return null}if(n.hostname.toLowerCase()!=="raw.githubusercontent.com")return null;const r=n.pathname.replace(/^\/+/,"");return r.split("/").filter(Boolean).length<4?null:`https://media.githubusercontent.com/media/${r}`}async function Qc(e,t){const n=Number(e.headers?.get?.("content-length")),r=e.body?.getReader?.();if(r&&Number.isFinite(n)&&n>0){const i=[];let s=0;for(;;){const{done:u,value:h}=await r.read();if(u)break;h&&(i.push(h),s+=h.length,t?.(Math.min(1,s/n)))}const o=new Uint8Array(s);let l=0;for(const u of i)o.set(u,l),l+=u.length;return new TextDecoder().decode(o)}return await e.text()}const wf=50*1024*1024;function fl(e){try{return new URL(e).host}catch{return e}}function Nt(e){try{const n=new URL(e).pathname.split("/").filter(Boolean).pop();return n&&n.length>0?n:"sample.db.json"}catch{return"sample.db.json"}}async function yf(e){try{return(await e.text()).replace(/\s+/g," ").trim().slice(0,300)}catch{return""}}function pl(e){const t=e/1048576;return`${Number.isInteger(t)?t:t.toFixed(1)} MB`}async function vf(e,t,n={}){const r=Ro(t),i=n.slowMs??2e3;let s=setTimeout(()=>{s=void 0,n.onSlow?.()},i);const o=()=>{s!==void 0&&(clearTimeout(s),s=void 0)},l=n.maxBytes===null?null:n.maxBytes??wf,u=async h=>{let m;try{m=await e.backend.fetch(h)}catch(w){throw new Error(`Could not reach ${fl(h)} — no response. The server may be down, blocking cross-origin (CORS) requests, or the transfer may have failed (e.g. a very large file). [${w.message}]`)}if(!m.ok){const w=await yf(m);throw new Error(`HTTP ${m.status} ${m.statusText||""}`.trim()+(w?` — ${w}`:""))}const g=Number(m.headers.get("content-length"));if(l!==null&&Number.isFinite(g)&&g>l)throw m.body?.cancel().catch(()=>{}),new Error(`Response is ${pl(g)}, over the ${pl(l)} browser import limit. Set a row limit, import it as a Reference instead of a Copy, take a smaller extract, or connect to a server/Datasette for large datasets.`);try{return await Qc(m,n.onProgress)}catch(w){throw new Error(`Failed reading the response body from ${fl(h)}: ${w.message}`)}};try{const h=await u(r);if(Wc(h)){const m=Yc(r);if(m)return await u(m)}return h}finally{o()}}async function Ar(e,t,n,r={}){const{TopProgress:i}=await ct(async()=>{const{TopProgress:o}=await import("./top-progress-R8G7Ru-A.js");return{TopProgress:o}},[]),s={handle:null};try{return await vf(e,t,{onSlow:()=>{s.handle=i.begin(n)},onProgress:o=>s.handle?.fraction(o),...r.maxBytes!==void 0?{maxBytes:r.maxBytes}:{}})}finally{s.handle?.done()}}function Ce(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function Le(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function so(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}const $f={id:"csv-import",name:"CSV Import",type:"importer",version:"0.1.0",description:"Drag-and-drop CSV or TSV files to create typed tables.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-import.ts"};function xf(e){e.ui.registerImporter(_f),ct(()=>import("./csv-import-options-0UoQzm8t.js"),[]),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const r=jf(t).filter(Nf);if(r.length===0)return!1;t.preventDefault();const i=r.length===1?`"${r[0].name}"`:`${r.length} files`,s=await e.ui.dialogs.choice(`Import ${i} straight away, or review the columns first (rename, hide, fix duplicate names)?`,[Cf,ml],"Import CSV");if(!s)return!0;const o=s===ml?async l=>{const{editColumnNames:u}=await ct(async()=>{const{editColumnNames:h}=await Promise.resolve().then(()=>ty);return{editColumnNames:h}},void 0);return u(l)}:void 0;for(const l of r)await Sf(e,l,o);return!0})}function oo(e){return e.kind==="file"&&e.file?e.file.name:e.kind==="url"&&e.url?Nt(e.url):"pasted"}function kf(e){return Po(oo(e))||"imported"}const Cf="Import directly",ml="Edit columns first",_f={id:"csv",label:"CSV / TSV",icon:"table_view",order:10,accept:[".csv",".tsv",".tab","text/csv","text/tab-separated-values"],panel:"csv-import-options",samples:[{label:"Air quality — 2016 readings (CSV)",url:"https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv"}],supports:{url:!0,file:!0,text:!0,reference:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??e.text??"";return/\.(csv|tsv|tab)$/i.test(t)?.95:e.file?.type==="text/csv"?.9:e.kind==="text"?.2:0},async list(e,t){return[{name:kf(t),rowCount:null,handle:t}]},async*read(e,t){const n=t.handle;let r;n.kind==="file"&&n.file?r=e.maxRows!=null?await Zc(n.file,e.maxRows):await n.file.text():n.kind==="url"&&n.url?r=await e.fetchText(n.url,`Reading ${oo(n)}…`):r=n.text??"";const s=(typeof e.panel.separator=="string"?e.panel.separator:void 0)??Lo(oo(n)),o={...e.maxRows!=null?{maxRows:e.maxRows}:{},...s?{separator:s}:{}},l=e.targetColumns;if(l&&l.length>0){yield{rows:Oo(r,o).rows.map(g=>{const w={};for(let y=0;y<l.length;y++){const x=l[y];w[x.field]=Do(g[y]??"",x.type)}return w})};return}const u=Un(r,o);yield{columns:u.columns,rows:u.rows}},reference(e,t){const n=t.handle;if(n.kind!=="url"||!n.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");return{type:"url",config:{url:n.url,format:"csv"}}}};async function Sf(e,t,n){await Xc(e,await t.text(),t.name,n?{editColumns:n}:void 0)}async function Xc(e,t,n,r={}){const i=e.workspaceId();if(!i)throw new Error("csv-import: no active workspace");const s=Po(n||"imported")||"imported",o=r.separator??Lo(n),l=(await e.store.tables.find()).find(w=>w.workspaceId===i&&w.name===s);let u,h;if(l){const w=await e.ui.dialogs.choice(`A table named "${s}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!w)return;w==="Append rows"?(h="append",u=l.id):w==="Overwrite rows"?(h="overwrite",u=l.id):(h="new",u=Ce())}else h="new",u=Ce();e.events.emit("import:before",{source:"csv",tableId:u});let m;if(h==="new"){const w=Un(t,{maxRows:r.maxRows,separator:o});let y=w.columns,x=w.rows;if(r.editColumns){const O=await r.editColumns(y);if(O===null)return;x=zf(x,y,O),y=O}r.maxRows!=null&&(x=x.slice(0,r.maxRows));const C=l?`${s} (${Date.now().toString(36)})`:s;await e.store.tables.insert({id:u,workspaceId:i,name:C,code:so(C),columns:y,view:"table",...r.origin?{origin:r.origin}:{},updatedAt:Date.now()}),m=x.map(O=>({id:Ce(),tableId:u,data:O,updatedAt:Date.now()}))}else{const w=l.columns,y=Oo(t,{maxRows:r.maxRows,separator:o});if(m=(r.maxRows!=null?y.rows.slice(0,r.maxRows):y.rows).map(C=>{const O={};for(let M=0;M<w.length;M++){const L=w[M];O[L.field]=Do(C[M]??"",L.type)}return{id:Ce(),tableId:u,data:O,updatedAt:Date.now()}}),h==="overwrite"){const C=e.store.rows(u),O=await C.find();await C.bulkRemove(O.map(M=>M.id))}}await e.store.rows(u).bulkInsert(m),e.events.emit("import:after",{source:"csv",tableId:u,rowCount:m.length})}function Oo(e,t={}){const n=e.replace(/﻿/,""),r=t.separator??eu(n),i=tu(n,r,Jc(t.maxRows));if(i.length===0)return{header:[],rows:[]};const s=i[0],o=i.slice(1).filter(l=>!(l.length===1&&l[0]===""));return{header:s,rows:o}}function Jc(e){return e!=null?e+1:void 0}async function Zc(e,t){const r=new TextDecoder,i=t+1;let s="",o=0,l=!1,u=0;for(;u<e.size;){const h=new Uint8Array(await e.slice(u,u+1048576).arrayBuffer());u+=1048576;const m=r.decode(h,{stream:!0});for(let g=0;g<m.length;g++){const w=m[g];if(w==='"')l=!l;else if(w===`
`&&!l&&(o+=1,o>=i))return s+m.slice(0,g+1)}s+=m}return s}function Un(e,t={}){const n=e.replace(/﻿/,""),r=t.separator??eu(n),i=tu(n,r,Jc(t.maxRows));if(i.length===0)return{columns:[],rows:[]};const s=i[0],o=i.slice(1).filter(y=>!(y.length===1&&y[0]==="")),l=s.map((y,x)=>If(y,x)),u=iu(l.map(y=>y.field)),h=o.map(y=>{const x={};for(let C=0;C<u.length;C++)x[u[C]]=y[C]??"";return x}),m=l.map((y,x)=>y.type?y.type:Af(h.map(C=>C[u[x]]??"").filter(C=>C.length>0))),g=l.map((y,x)=>{const C=m[x]??"string",O={field:u[x],label:y.label,type:C},M=Tf(C),L=y.renderer??M;return L&&(O.renderer=L),y.default!==void 0&&(O.default=y.default),y.max!=null&&(O.max=y.max),y.unique&&(O.unique=!0),y.notnull&&(O.notnull=!0),y.hidden&&(O.hidden=!0),O}),w=h.map(y=>{const x={};for(let C=0;C<u.length;C++){const O=u[C],M=m[C]??"string";x[O]=Do(y[O]??"",M)}return x});return{columns:g,rows:w}}const Ef=new Set(["string","number","boolean","date","datetime"]),gl={color:"color",image:"image"};function Tf(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function If(e,t){const n=e.trim();if(!n.includes(":"))return{field:so(n||`col_${t+1}`),label:n||`Column ${t+1}`};const r=n.split(":"),i=so(r[0]||`col_${t+1}`),s=(r[1]??r[0]??"").trim()||i,o={field:i,label:s},l=(r[2]??"").trim();l&&(Ef.has(l)?o.type=l:gl[l]&&(o.type="string",o.renderer=gl[l]));const u=(r[3]??"").trim();u&&(o.default=u);const h=(r[4]??"").trim();if(h){const g=Number(h);Number.isFinite(g)&&g>0&&(o.max=g)}const m=(r[5]??"").toLowerCase();return m.includes("u")&&(o.unique=!0),m.includes("n")&&(o.notnull=!0),m.includes("h")&&(o.hidden=!0),o}function eu(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),n={",":0,";":0,"	":0};for(const s of t)s in n&&(n[s]+=1);let r=",",i=-1;for(const s of[",",";","	"])(n[s]??0)>i&&(r=s,i=n[s]??0);return r}function tu(e,t,n){const r=[];let i=[],s="",o=!1;for(let l=0;l<e.length;l++){const u=e[l];if(o)u==='"'?e[l+1]==='"'?(s+='"',l++):o=!1:s+=u;else if(u==='"')o=!0;else if(u===t)i.push(s),s="";else if(u===`
`||u==="\r"){if(u==="\r"&&e[l+1]===`
`&&l++,i.push(s),r.push(i),i=[],s="",n!=null&&r.length>=n)return r}else s+=u}return(s.length>0||i.length>0)&&(i.push(s),r.push(i)),r}function Af(e){return e.length===0?"string":e.every(Of)?"boolean":e.every(Df)?"number":e.every(Lf)?"datetime":e.every(Pf)?"date":"string"}const Rf=/^(true|false|yes|no|0|1)$/i;function Of(e){return Rf.test(e.trim())}function Df(e){const t=e.trim();if(t==="")return!1;const n=Number(t);return Number.isFinite(n)}function Pf(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function Lf(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function Do(e,t){const n=e.trim();switch(t){case"number":{if(n==="")return null;const r=Number(n);return Number.isFinite(r)?r:n}case"boolean":return n===""?null:/^(true|yes|1)$/i.test(n);case"date":return nu(n);case"datetime":return Mf(n);default:return e}}function nu(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){const r=parseInt(t[1],10),i=parseInt(t[2],10),s=t[3];let o=parseInt(s,10);s.length===2&&(o+=2e3);let l,u;return r>12?(l=r,u=i):i>12?(u=r,l=i):(l=r,u=i),`${o.toString().padStart(4,"0")}-${u.toString().padStart(2,"0")}-${l.toString().padStart(2,"0")}`}const n=new Date(e);return Number.isNaN(n.getTime())?e:n.toISOString().slice(0,10)}function Mf(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),n=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(n)return`${n[1]}T${n[2].padStart(5,"0")}`;const r=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(r)return`${nu(`${r[1]}/${r[2]}/${r[3]}`)}T${r[4].padStart(5,"0")}`;const i=new Date(e);if(!Number.isNaN(i.getTime())){const s=i.toISOString();return`${s.slice(0,10)}T${s.slice(11,16)}`}return e}function jf(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const n=[];for(const r of Array.from(t.items))if(r.kind==="file"){const i=r.getAsFile();i&&n.push(i)}return n}return[]}const ru=/\.(csv|tsv|tab)$/i;function Po(e){return e.replace(ru,"")}function Lo(e){return/\.(tsv|tab)$/i.test(e)?"	":void 0}function Nf(e){return!!(ru.test(e.name)||e.type==="text/csv"||e.type==="application/csv"||e.type==="text/tab-separated-values")}function iu(e){const t=new Map,n=new Set,r=[];for(const i of e){let s=i,o=t.get(i)??0;for(;n.has(s);)o+=1,s=`${i}_${o+1}`;t.set(i,o),n.add(s),r.push(s)}return r}function zf(e,t,n){return e.map(r=>{const i={};for(let s=0;s<t.length;s++)i[n[s].field]=r[t[s].field];return i})}const Uf=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:iu,importCsvText:Xc,init:xf,meta:$f,parseCsv:Un,parseCsvRaw:Oo,readCsvHead:Zc,separatorForName:Lo,stripDelimitedExt:Po},Symbol.toStringTag,{value:"Module"})),Ff={id:"csv-export",name:"CSV Export",type:"exporter",version:"0.1.0",description:"CSV serializer for the per-table export menu (see dump-export.ts) and the importer/exporter registry.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-export.ts"},Bf={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return Mo(e,t)}};function qf(e){e.ui.registerExporter(Bf)}function Mo(e,t){const n=e.columns.map(s=>s.field),r=e.columns.map(s=>bl(s.label??s.field)),i=t.map(s=>n.map(o=>bl(Hf(s.data[o]))).join(","));return[r.join(","),...i].join(`\r
`)}function Hf(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function bl(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const Kf=Object.freeze(Object.defineProperty({__proto__:null,init:qf,meta:Ff,serializeCsv:Mo},Symbol.toStringTag,{value:"Module"}));var Vf=Object.defineProperty,Gf=Object.getOwnPropertyDescriptor,Fn=(e,t,n,r)=>{for(var i=r>1?void 0:r?Gf(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Vf(t,n,i),i};function Ti(e,t={}){return(it.instance??Wf()).open(e,t)}function Wf(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function Yf(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let it=class extends ve{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((n,r)=>n?r:-1).filter(n=>n>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),it.instance=this}disconnectedCallback(){super.disconnectedCallback(),it.instance===this&&(it.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pt(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(n=>!n.hidden),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return k`
      <dialog @cancel=${this.onCancel} @keydown=${ft}>
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
            ${this.message?k`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            <ul class="tables">
              ${this.items.map((t,n)=>k`
                  <li>
                    <input
                      type="checkbox"
                      id=${`tsel-${n}`}
                      .checked=${this.selected[n]??!1}
                      @change=${()=>this.toggle(n)}
                    />
                    <label for=${`tsel-${n}`}>
                      <span class="name">${t.name}</span>
                      ${t.hidden?k`<span class="tag-hidden">hidden</span>`:""}
                      <span class="size">${Yf(t.size)}</span>
                      ${t.detail?k`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};it.instance=null;it.styles=[ht,xe`
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
    `];Fn([U()],it.prototype,"items",2);Fn([U()],it.prototype,"selected",2);Fn([U()],it.prototype,"heading",2);Fn([U()],it.prototype,"message",2);Fn([U()],it.prototype,"confirmLabel",2);it=Fn([Se("table-select-dialog")],it);function jo(e,t){return e.every((n,r)=>n.field===t[r]?.field)?null:n=>{const r={};for(let i=0;i<e.length;i++)r[t[i].field]=n[e[i].field];return r}}function wl(e,t){if(t.length===0)return null;const n=new Set(t.map(i=>i.from)),r={};for(const i of Object.keys(e))n.has(i)||(r[i]=e[i]);for(const{from:i,to:s}of t)Object.prototype.hasOwnProperty.call(e,i)&&(r[s]=e[i]);return r}function Bi(e,t,n=[]){const r=new Set(e.map(l=>l.field)),i=new Set(n),s=[...e],o=[];for(const l of t)r.has(l.field)||i.has(l.field)||(s.push(l),o.push(l.field),r.add(l.field));return{columns:s,newFields:o}}function No(e,t){const n=new Set([...e].map(i=>i.toLowerCase())),r=t.trim()||"imported";if(!n.has(r.toLowerCase()))return r;for(let i=2;;i++){const s=`${r}-${i}`;if(!n.has(s.toLowerCase()))return s}}async function su(e,t){return(await e.store.tables.find()).filter(n=>n.workspaceId===t).map(n=>n.name)}async function ou(e,t,n,r){const{workspaceId:i,importerId:s,target:o,maxRows:l}=r;let u,h,m,g=!1,w=0,y,x=null;const C=M=>e.store.rows(M),O=async M=>{if(g)return!0;if(o.kind==="new"){let L=M.columns??[];if(r.editColumns){const V=await r.editColumns(L);if(V===null)return!1;x=jo(L,V),L=V}u=Ce(),h=No(await su(e,i),t);const F={id:u,workspaceId:i,name:h,code:Le(h),columns:L,view:"table",...r.origin?{origin:r.origin}:{},updatedAt:Date.now()};await e.store.tables.insert(F),m=!0}else{const L=await e.store.tables.findOne(o.tableId);if(!L)throw new Error("The table to import into no longer exists.");if(u=L.id,h=L.name,m=!1,o.kind==="overwrite"){const F=await C(u).find();await C(u).bulkRemove(F.map(V=>V.id))}if(M.columns?.length){const F=Bi(L.columns,M.columns,L.deletedColumns??[]);F.newFields.length>0&&await e.store.tables.patch(u,{columns:F.columns,updatedAt:Date.now()})}}return e.events.emit("import:before",{source:s,tableId:u}),g=!0,!0};for await(const M of n){if(l!=null&&w>=l)break;if(!await O(M))return null;M.totalCount!=null&&(y=M.totalCount);let L=M.rows;if(l!=null&&w+L.length>l&&(L=L.slice(0,l-w)),L.length===0)continue;x&&(L=L.map(x));const F=Date.now(),V=L.map(W=>({id:Ce(),tableId:u,data:W,updatedAt:F}));await C(u).bulkInsert(V),w+=V.length,r.onProgress?.(w,y)}return!g&&!await O({})?null:(e.events.emit("import:after",{source:s,tableId:u,rowCount:w}),{tableId:u,tableName:h,rowCount:w,created:m})}function yl(e,t,n={}){const r=t.mode==="reference"||t.maxRows!=null;return{api:e,fetchText:(i,s)=>Ar(e,i,s??"Reading…",r?{maxBytes:null}:{}),panel:t.panel??{},...t.cursor!==void 0?{cursor:t.cursor}:{},...t.maxRows!==void 0?{maxRows:t.maxRows}:{},...n}}async function Qf(e,t){if(t.length<=1)return t;const n=await Ti(t.map(r=>({name:r.name,size:r.rowCount,...r.detail!==void 0?{detail:r.detail}:{},...r.hidden!==void 0?{hidden:r.hidden}:{}})),{title:`Import from ${e.label}`,message:`This source offers ${t.length} tables. Choose which to import.`,confirmLabel:"Import"});return n?n.map(r=>t[r]):null}async function Xf(e,t,n,r,i){if(!t.reference)throw new Error(`${t.label} cannot be referenced — import a copy instead.`);const s=t.reference(n,r);let o=[];for await(const h of t.read(n,r)){o=h.columns??[];break}if(o.length===0)throw new Error("No columns found in the referenced data.");const l=No(await su(e,i),r.name),u=Ce();return await e.store.tables.insert({id:u,workspaceId:i,name:l,code:Le(l),columns:o,view:"table",source:s,readonly:!0,updatedAt:Date.now()}),{tableId:u,tableName:l,rowCount:0,created:!0}}async function qi(e,t,n,r){const i=e.workspaceId();if(!i)throw new Error("No active workspace.");const s=yl(e,r),o=await t.list(s,n);if(o.length===0)throw new Error("No tables found at that source.");const l=await Qf(t,o);if(l===null)return{landed:[],failed:[],cancelled:!0};const u=[],h=[];for(const m of l)try{if(r.mode==="reference"){u.push(await Xf(e,t,s,m,i));continue}const g=r.target;let w;g.kind!=="new"&&(w=(await e.store.tables.findOne(g.tableId))?.columns);const y=yl(e,r,{...w?{targetColumns:w}:{}}),x=t.read(y,m),C=r.origin??(n.kind==="url"&&n.url?{type:t.id,url:n.url}:void 0),O=await ou(e,m.name,x,{workspaceId:i,importerId:t.id,target:g,...C?{origin:C}:{},...r.editColumns?{editColumns:r.editColumns}:{},...r.maxRows!==void 0?{maxRows:r.maxRows}:{}});if(O===null)return{landed:u,failed:h,cancelled:!0};u.push(O)}catch(g){h.push({name:m.name,error:g?.message??String(g)})}return{landed:u,failed:h,cancelled:!1}}async function au(e,t,n){const r=new Map;if(n.length===0)return r;const i=(await e.find()).filter(l=>l.workspaceId===t),s=new Map(i.map(l=>[l.name,l])),o=new Map(i.map(l=>[l.id,l]));for(const l of n){if(!Jf(l))continue;const u=s.get(l.name)??o.get(l.id),h=u?.id??l.id;u&&r.set(l.id,u.id);const m=u?u.builtin:l.builtin,g={...l,id:h,workspaceId:t};m===void 0?delete g.builtin:g.builtin=m,await e.upsert(g),s.set(g.name,g),o.set(g.id,g)}return r}function Jf(e){if(typeof e!="object"||e===null)return!1;const t=e;return typeof t.id=="string"&&typeof t.name=="string"}const Zf={id:"json-import",name:"JSON Import",type:"importer",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"/><path d="M16 3a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/json-import.ts"};function ep(e){e.ui.registerImporter(lu),e.ui.registerDropHandler(async t=>{const r=cp(t).filter(up);if(r.length===0)return!1;t.preventDefault();for(const i of r)await np(e,i);return!0})}function zo(e){return Ne(e)?ao(e)||Array.isArray(e.tables)?!0:uu(e):!1}function tp(e){return e.kind==="file"&&e.file?Vs(e.file.name):e.kind==="url"&&e.url?Vs(Nt(e.url)):Vs(e.name??"imported")}const lu={id:"json",label:"JSON (array of objects or a dump)",icon:"data_object",order:20,accept:[".json",".db.json","application/json"],samples:[{label:"Northwind — sample database (JSON dump)",url:"https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json"}],supports:{url:!0,file:!0,text:!0,reference:!0,multiTable:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??"";if(/\.db\.json$/i.test(t))return 1;if(/\.json$/i.test(t))return .95;if(e.file?.type==="application/json")return .9;const n=(e.text??"").trimStart();return n.startsWith("{")||n.startsWith("[")?.3:0},async list(e,t){let n;t.kind==="file"&&t.file?n=await t.file.text():t.kind==="url"&&t.url?n=await e.fetchText(t.url,`Reading ${Nt(t.url)}…`):n=t.text??"";const r=tp(t);let i;try{i=JSON.parse(n)}catch(o){throw new Error(`Invalid JSON in ${r}: ${o.message}`)}const s=Hi(i,r);return s.map(o=>({name:o.name,rowCount:o.rows.length,handle:{table:o,input:t,single:s.length===1}}))},async*read(e,t){const{table:n}=t.handle;yield{columns:n.columns,rows:n.rows}},reference(e,t){const{input:n,single:r}=t.handle;if(n.kind!=="url"||!n.url)throw new Error("A reference needs a re-fetchable URL — an upload cannot be referenced.");if(!r)throw new Error("That URL holds several tables, so a reference would be ambiguous. Import a copy instead.");return{type:"url",config:{url:n.url,format:"json"}}}};function Vs(e){return e.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported"}async function np(e,t){const n=await t.text();let r;try{r=JSON.parse(n)}catch(o){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${t.name}: ${o.message}`)});return}if(zo(r)){await Uo(e,n,t.name);return}const i=await qi(e,lu,{kind:"text",text:n,name:t.name},{mode:"copy",target:{kind:"new"}}),s=i.landed.reduce((o,l)=>o+l.rowCount,0);i.landed.length>0&&e.ui.dialogs.toast(`Imported ${t.name} (${s.toLocaleString()} rows).`,{kind:"success",title:"Import"})}async function Uo(e,t,n,r={}){const i=e.workspaceId();if(!i)throw new Error("json-import: no active workspace");let s;try{s=JSON.parse(t)}catch(O){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${n}: ${O.message}`)});return}const o=n.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",l=Hi(s,o);if(l.length===0)return;let u=l;if(l.length>1){const O=await Ti(l.map(M=>({name:M.name,size:M.rows.length})),{title:"Import tables",message:`"${n}" contains ${l.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!O)return;u=O.map(M=>l[M])}const h=(await e.store.tables.find()).filter(O=>O.workspaceId===i),m=new Set(u.map(O=>O.name)),g=h.filter(O=>m.has(O.name));let w;if(g.length===0&&u.length===1)w="append-new";else{const O=g.length>0?[`Overwrite matching (${g.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],M=await e.ui.dialogs.choice(`Importing ${u.length} table${u.length===1?"":"s"} from "${n}".${g.length>0?`

${g.length} table${g.length===1?"":"s"} share a name with existing data.`:""}`,O,"JSON import");if(!M)return;M.startsWith("Overwrite matching")?w="overwrite-matching":M==="Replace entire workspace"?w="replace-workspace":w="append-new"}const y=2e3,x=u.reduce((O,M)=>O+(M.source?0:Math.min(M.rows.length,r.maxRows??1/0)),0);let C=null;if(x>=y){const{TopProgress:O}=await ct(async()=>{const{TopProgress:M}=await import("./top-progress-R8G7Ru-A.js");return{TopProgress:M}},[]);C=O.begin(`Importing ${n}…`)}try{if(w==="replace-workspace")for(const F of h){const V=e.store.rows(F.id),W=await V.find();await V.bulkRemove(W.map(G=>G.id)),await e.store.tables.remove(F.id)}const O=new Map(h.map(F=>[F.name,F])),M=new Map;let L=0;for(const F of u){const V=F.source,W=F.origin??(!V&&r.originUrl?{type:"json",url:r.originUrl}:void 0);let G;const q=w==="overwrite-matching"?O.get(F.name):void 0;let Y=F.columns,ie=F.rows;if(r.editColumns&&!q&&!V){const H=await r.editColumns(Y,F.name);if(H===null)continue;ie=lp(ie,Y,H),Y=H}if(q){if(G=q.id,!q.source){const H=e.store.rows(G),K=await H.find();await H.bulkRemove(K.map(ce=>ce.id))}await e.store.tables.patch(G,{columns:Y,...F.title?{title:F.title}:{},...F.windowGeometry?{windowGeometry:F.windowGeometry}:{},...F.sortColumn?{sortColumn:F.sortColumn,sortAsc:F.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},...F.filters?{filters:F.filters}:{},...F.labelColumn?{labelColumn:F.labelColumn}:{},...F.info?{info:F.info}:{},...F.deletedColumns?{deletedColumns:F.deletedColumns}:{},...F.readonly?{readonly:!0}:{},source:V??void 0,origin:W??void 0,updatedAt:Date.now()})}else G=Ce(),e.events.emit("import:before",{source:"json",tableId:G}),await e.store.tables.insert({id:G,workspaceId:i,name:F.name,code:Le(F.name),columns:Y,view:"table",...F.title?{title:F.title}:{},...F.windowGeometry?{windowGeometry:F.windowGeometry}:{},...F.sortColumn?{sortColumn:F.sortColumn,sortAsc:F.sortAsc??!0}:{},...F.filters?{filters:F.filters}:{},...F.labelColumn?{labelColumn:F.labelColumn}:{},...F.info?{info:F.info}:{},...F.deletedColumns?{deletedColumns:F.deletedColumns}:{},...F.readonly?{readonly:!0}:{},...V?{source:V}:{},...W?{origin:W}:{},updatedAt:Date.now()});M.set(F.name,G);let se=0;if(!V){const H=e.store.rows(G),ce=(r.maxRows!=null?ie.slice(0,r.maxRows):ie).map(pe=>({id:Ce(),tableId:G,data:pe,updatedAt:Date.now()}));await H.bulkInsert(ce),se=ce.length,L+=se,C?.fraction(x>0?L/x:1)}e.events.emit("import:after",{source:"json",tableId:G,rowCount:se})}await rp(e,s,i,M,w==="replace-workspace")}finally{C?.done()}document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function rp(e,t,n,r,i){if(!Ne(t))return;const s=t,o=Array.isArray(s.viewTemplates)?s.viewTemplates:[],l=Array.isArray(s.viewInstances)?s.viewInstances:[];if(o.length===0&&l.length===0)return;if(i){const h=(await e.store.viewInstances.find()).filter(m=>m.workspaceId===n);await e.store.viewInstances.bulkRemove(h.map(m=>m.id))}const u=await au(e.store.viewTemplates,n,o);for(const h of l){if(!Ne(h)||typeof h.id!="string")continue;const m=(h.tableName?r.get(h.tableName):void 0)??h.tableId;if(!m)continue;const g=u.get(h.templateId)??h.templateId;await e.store.viewInstances.upsert({...h,workspaceId:n,tableId:m,templateId:g})}}function Hi(e,t){if(Ne(e)&&ao(e))return vl(e);if(Ne(e)&&Array.isArray(e.tables)){const n=e,r=[];for(const i of n.tables){if(cu(i)){r.push($l(i));continue}Ne(i)&&ao(i)&&r.push(...vl(i))}return r}if(uu(e))return[$l(e)];if(Array.isArray(e)){const n=e.filter(Ne);return n.length===0?[]:[{name:t,...xl(n)}]}return Ne(e)?[{name:t,...xl([e])}]:[]}function ao(e){for(const[t,n]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!Ne(n))continue;const r=n;if(Array.isArray(r.dataArray)&&Array.isArray(r.columns))return!0}return!1}function vl(e){const t=[];for(const[n,r]of Object.entries(e)){if(!/\.table\.json$/.test(n)||!Ne(r))continue;const i=r;if(!Array.isArray(i.dataArray)||!Array.isArray(i.columns))continue;const s=n.replace(/\.table\.json$/,""),o=i.columns.map(m=>ip(m)),l=o.map(m=>m.field),u=i.dataArray.filter(m=>Array.isArray(m)).map(m=>{const g={};for(let w=0;w<l.length;w++)g[l[w]]=m[w];return g}),h={name:s,columns:o,rows:u};if(i.elementRect&&typeof i.elementRect.x=="number"&&typeof i.elementRect.y=="number"){const m=i.elementRect;h.windowGeometry={x:m.x,y:m.y,w:m.width??600,h:m.height??400,z:m.zIndex??100,minimized:!!m.minimized,maximized:!!m.maximized}}typeof i.sortColumn=="number"&&i.sortColumn>=0&&i.sortColumn<l.length&&(h.sortColumn=l[i.sortColumn],h.sortAsc=(i.sortDirection??"asc")!=="desc"),t.push(h)}return t}function ip(e){const t=String(e.field??"col"),n=String(e.name??t),r=typeof e.type=="string"?e.type:"string",i={field:t,label:n,type:r};return e.isUnique&&(i.unique=!0),e.isNotNull&&(i.notnull=!0),i}function cu(e){return Ne(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function uu(e){return cu(e)&&Array.isArray(e.rows)}function $l(e){const t=e,n=Ne(t.windowGeometry)?t.windowGeometry:void 0,r=typeof t.sortColumn=="string"?t.sortColumn:void 0,i=typeof t.sortAsc=="boolean"?t.sortAsc:void 0,s=typeof t.title=="string"?t.title:void 0,o=Ne(t.filters)?t.filters:void 0,l=typeof t.labelColumn=="string"?t.labelColumn:void 0,u=Ne(t.info)?t.info:void 0,h=Array.isArray(t.deletedColumns)?t.deletedColumns.filter(y=>typeof y=="string"):void 0,m=t.readonly===!0?!0:void 0,g=Ne(t.source)&&typeof t.source.type=="string"?t.source:void 0,w=Ne(t.origin)&&typeof t.origin.type=="string"&&typeof t.origin.url=="string"?t.origin:void 0;return{name:String(e.name),columns:e.columns.map(sp),rows:Array.isArray(e.rows)?e.rows.filter(Ne):[],...s?{title:s}:{},...n?{windowGeometry:n}:{},...r?{sortColumn:r,sortAsc:i??!0}:{},...o?{filters:o}:{},...l?{labelColumn:l}:{},...u?{info:u}:{},...h?{deletedColumns:h}:{},...m?{readonly:m}:{},...g?{source:g}:{},...w?{origin:w}:{}}}function sp(e){if(!Ne(e))return{field:"col",label:"Col",type:"string"};const t=e,n=String(t.field??"col");let r=typeof t.type=="string"?t.type:"string",i=typeof t.renderer=="string"?t.renderer:void 0;(r==="color"||r==="image")&&(i=i??r,r="string");const s={field:n,label:String(t.label??n),type:r};return i&&(s.renderer=i),typeof t.script=="string"&&(s.script=t.script),t.readonly===!0&&(s.readonly=!0),s}function xl(e){const t=new Set;for(const i of e)for(const s of Object.keys(i))t.add(s);return{columns:Array.from(t).map(i=>({field:i,label:i,type:op(e.map(s=>s[i]))})),rows:e}}function op(e){const t=e.filter(n=>n!=null&&n!=="");return t.length===0?"string":t.every(n=>typeof n=="boolean")?"boolean":t.every(n=>typeof n=="number"&&Number.isFinite(n))?"number":t.every(n=>typeof n=="string"&&ap(n))?"date":"string"}function ap(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}([T ]\d{1,2}:\d{2}(:\d{2})?)?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}([T ]\d{1,2}:\d{2})?$/.test(t))}function lp(e,t,n){const r=jo(t,n);return r?e.map(r):e}function Ne(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function cp(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const n=[];for(const r of Array.from(t.items))if(r.kind==="file"){const i=r.getAsFile();i&&n.push(i)}return n}return[]}function up(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}const dp=Object.freeze(Object.defineProperty({__proto__:null,init:ep,isWorkspaceDump:zo,meta:Zf,parsedToTables:Hi,restoreWorkspaceDump:Uo},Symbol.toStringTag,{value:"Module"})),kl=new Map;function hp(e){const t=kl.get(e);if(t)return t;const n=new Function("row",`${e}
return render(row);`);return kl.set(e,n),n}function Fo(e,t){if(!e||!e.trim())return{ok:!1,label:"no script",message:""};let n;try{n=hp(e)}catch(r){return{ok:!1,label:"compile error",message:Cl(r)}}try{return{ok:!0,value:n(t)}}catch(r){return{ok:!1,label:"runtime error",message:Cl(r)}}}function Cl(e){return e instanceof Error?e.message:String(e)}const fp=new Set(["rowid"]);function Bo(e){return fp.has(e.trim().toLowerCase())}function pp(e,t){const n=e.sources[0];if(!n)return[];let i=(t[n.alias]??[]).map(u=>({[n.alias]:u}));for(let u=1;u<e.sources.length;u++){const h=e.sources[u];if(!h)continue;const m=t[h.alias]??[],g=h.join,w=[];for(const y of i){const x=g?m.filter(C=>g.on.every(O=>gp(C.data[O.field],y[O.eqAlias]?.data[O.eqField]))):[];if(x.length>0)for(const C of x)w.push({...y,[h.alias]:C});else g?.type==="left"&&w.push({...y,[h.alias]:void 0})}i=w}const s=[],o=new Map,l=e.limit!=null&&e.limit>0?e.limit:1/0;for(const u of i){if(s.length>=l)break;const h=u[n.alias];if(!h)continue;const m=mp(e.columns,u);if(!bp(m,e.filters))continue;const g=o.get(h.id)??0;o.set(h.id,g+1),s.push({id:`${h.id}#${g}`,tableId:"",data:m,updatedAt:wp(u)})}return s}function mp(e,t){const n={};for(const r of e){if(r.from.kind!=="source")continue;const i=t[r.from.alias]?.data[r.from.field];n[r.field]=i===void 0?null:i}for(const r of e)if(r.from.kind==="script"){const i=Fo(r.from.script,n);n[r.field]=i.ok?i.value:void 0}return n}function gp(e,t){return e==null||t==null?!1:e===t?!0:typeof e!="object"&&typeof t!="object"?String(e)===String(t):!1}function bp(e,t){if(!t)return!0;for(const[n,r]of Object.entries(t)){if(!r)continue;const i=e[n];if(!(i==null?"":String(i)).toLowerCase().includes(r.toLowerCase()))return!1}return!0}function wp(e){let t=0;for(const n of Object.values(e))n&&n.updatedAt>t&&(t=n.updatedAt);return t}function Rr(e){const t=e.sources[0]?.alias,n=new Set;if(!t)return n;for(const r of e.columns)r.from.kind==="source"&&r.from.alias===t&&n.add(r.field);return n}function du(e,t,n=[],r=[]){const i=Rr(e),s=new Map(n.map(m=>[m.field,m])),o=new Set(r),l=new Map;for(const m of e.columns)!o.has(m.field)&&!l.has(m.field)&&l.set(m.field,m);const u=[];for(const m of n)l.has(m.field)&&!u.includes(m.field)&&u.push(m.field);for(const m of l.keys())u.includes(m)||u.push(m);const h=[];for(const m of u){const g=l.get(m);if(!g)continue;const w=s.get(g.field);let y;if(w)y={...w};else if(g.from.kind==="source"){const x=g.from,C=(t[x.alias]??[]).find(O=>O.field===x.field);y=C?{...C,field:g.field}:{field:g.field,label:g.label??g.field,type:g.type??"string"},Bo(x.field)&&(y.hidden=!0)}else y={field:g.field,label:g.label??g.field,type:g.type??"string"},y.script=g.from.script;i.has(g.field)?delete y.readonly:y.readonly=!0,h.push(y)}return h}function yp(e){const t=e.sources[0]?.alias,n=new Map;if(!t)return n;for(const r of e.columns)r.from.kind==="source"&&r.from.alias===t&&!n.has(r.from.field)&&n.set(r.from.field,r.field);return n}function vp(e,t){const n=yp(e),r={},i=t.sortBy&&t.sortBy.length>0?t.sortBy:t.sortColumn?[{field:t.sortColumn,asc:t.sortAsc??!0}]:[],s=[];for(const o of i){const l=n.get(o.field);l&&s.push({field:l,asc:o.asc})}if(s.length>0){r.sortBy=s;const o=s[0];o&&(r.sortColumn=o.field,r.sortAsc=o.asc)}if(t.filters){const o={};for(const[l,u]of Object.entries(t.filters)){const h=n.get(l);h&&u&&(o[h]=u)}Object.keys(o).length>0&&(r.filters=o)}return r}function $p(e,t,n){if(e.tableId){const r=t.get(e.tableId);if(r&&r.name===e.tableName)return r}return n.get(e.tableName)}function xp(e,t){const n=new Map(t.map(s=>[s.id,s])),r=new Map;for(const s of t)r.has(s.name)||r.set(s.name,s);const i=(s,o)=>{if(o.has(s))return!0;const l=n.get(s);if(l?.source?.type!=="projection")return!1;const u=l.source.config;if(!u||!Array.isArray(u.sources))return!1;const h=new Set(o).add(s);for(const m of u.sources){const g=$p(m,n,r);if(g&&i(g.id,h))return!0}return!1};return i(e,new Set)}const ur=e=>e.toLowerCase().replace(/[^a-z0-9]/g,""),Gs=e=>e.endsWith("s")&&e.length>1?e.slice(0,-1):e,_l=e=>e==="id"||e.endsWith("id");function kp(e,t){const n=ur(e.field),r=ur(t.field);if(!n||!r)return 0;const i=ur(e.table)===ur(t.table);if(n===r)return i||n==="id"?0:n.endsWith("id")?9:7;const s=(l,u,h)=>{if(l!=="id"||!h.endsWith("id")||h.length<=2)return 0;const m=h.slice(0,-2),g=ur(u);return m===g||m===Gs(g)||Gs(m)===Gs(g)?9:5},o=Math.max(s(n,e.table,r),s(r,t.table,n));return o>0?o:e.isPk&&_l(r)||t.isPk&&_l(n)?6:0}function Cp(e,t,n=[]){const r=new Set(n.map(o=>`${o.alias}\0${o.field}`)),i=new Set(e.pks??[]),s=o=>{let l=null,u=0;for(const h of t){const m=new Set(h.pks??[]);for(const g of e.fields)for(const w of h.fields){if(o&&r.has(`${h.alias}\0${w}`))continue;const y=kp({table:e.tableName,field:g,isPk:i.has(g)},{table:h.tableName,field:w,isPk:m.has(w)});y>u&&(u=y,l={thisField:g,otherAlias:h.alias,otherField:w})}}return l};return s(!0)??s(!1)}function _p(e,t,n){if(!Rr(e).has(n))return null;const r=e.columns.find(o=>o.field===n);if(!r||r.from.kind!=="source")return null;const i=t.lastIndexOf("#");return{baseRowId:i>=0?t.slice(0,i):t,field:r.from.field}}const hu="__id";function Sp(e){const t=[];let n="",r,i=0;for(;i<e.length;){const s=e[i],o=e[i+1];if(s==="'"||s==='"'){const l=qo(e,i,s);n+=e.slice(i,l),i=l;continue}if(s==="-"&&o==="-"){let l="";for(i+=2;i<e.length&&e[i]!==`
`;)l+=e[i++];const u=/^\s*projection:\s*(.+?)\s*$/i.exec(l);u?.[1]&&n.trim()===""&&(r=u[1]);continue}if(s==="/"&&o==="*"){for(i+=2;i<e.length&&!(e[i]==="*"&&e[i+1]==="/");)i++;i+=2;continue}if(s===";"){n.trim()&&t.push({sql:n.trim(),...r?{name:r}:{}}),n="",r=void 0,i++;continue}n+=s,i++}return n.trim()&&t.push({sql:n.trim(),...r?{name:r}:{}}),t}function qo(e,t,n){let r=t+1;for(;r<e.length;){if(e[r]===n){if(e[r+1]===n){r+=2;continue}return r+1}r++}return e.length}function zt(e){const t=e.trim();return/^".*"$/s.test(t)?t.slice(1,-1).replace(/""/g,'"'):/^\[.*\]$/s.test(t)||/^`.*`$/s.test(t)?t.slice(1,-1):t}function fu(e,t){const n=[];let r=0,i="",s=0;for(;s<e.length;){const o=e[s];if(o==="'"||o==='"'){const l=qo(e,s,o);i+=e.slice(s,l),s=l;continue}if(o==="("?r++:o===")"&&r--,r===0){const l=t(e,s);if(l>0){n.push(i),i="",s+=l;continue}}i+=o,s++}return n.push(i),n}function Pn(e,t){return fu(e,(n,r)=>n.startsWith(t,r)?t.length:0)}function pu(e,t){const n=new RegExp(`^\\s+${t}\\s+`,"i");return fu(e,(r,i)=>/\s/.test(r[i]??"")?n.exec(r.slice(i,i+t.length+32))?.[0].length??0:0)}function mu(e){const t=e.indexOf("(");if(t<0)return null;let n=0;for(let r=t;r<e.length;r++){const i=e[r];if(i==="'"||i==='"'){r=qo(e,r,i)-1;continue}if(i==="(")n++;else if(i===")"&&(n--,n===0))return e.slice(t+1,r)}return null}function Ep(e){const t=e.trim();return/^null$/i.test(t)?null:/^true$/i.test(t)?!0:/^false$/i.test(t)?!1:/^'[\s\S]*'$/.test(t)?t.slice(1,-1).replace(/''/g,"'"):/^-?\d+(\.\d+)?([eE][+-]?\d+)?$/.test(t)?Number(t):t}function Tp(e){const t=e.toUpperCase();return/BOOL/.test(t)?"boolean":/TIMESTAMP|DATETIME/.test(t)?"datetime":/^DATE\b/.test(t)?"date":/INT|NUMERIC|DECIMAL|REAL|DOUBLE|FLOAT|MONEY/.test(t)?"number":"string"}function Ip(e){const t=/^CREATE\s+(?:TEMP(?:ORARY)?\s+)?TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)/i.exec(e);if(!t?.[1])return null;const n=mu(e);if(n==null)return null;const r=[];for(const i of Pn(n,",")){const s=i.trim();if(!s||/^(PRIMARY|FOREIGN|UNIQUE|CHECK|CONSTRAINT)\b/i.test(s))continue;const o=/^("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[A-Za-z_][\w$]*)\s*([\s\S]*)$/.exec(s);if(!o?.[1])continue;const l=zt(o[1]);if(l===hu)continue;const u=o[2]??"",h=/^([A-Za-z]+(?:\s*\([^)]*\))?)/.exec(u.trim())?.[1]??"TEXT",m={field:l,label:l,type:Tp(h)};/\bNOT\s+NULL\b/i.test(u)&&(m.notnull=!0),(/\bUNIQUE\b/i.test(u)||/\bPRIMARY\s+KEY\b/i.test(u))&&(m.unique=!0),r.push(m)}return{name:zt(t[1]),columns:r,rows:[]}}function Ap(e){const t=/^INSERT\s+(?:OR\s+\w+\s+)?INTO\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)\s*(\([\s\S]*?\))?\s*VALUES\s*([\s\S]+)$/i.exec(e);if(!t?.[1])return null;const n=zt(t[1]),r=t[2]?Pn(t[2].slice(1,-1),",").map(o=>zt(o)):[],i=[];let s=(t[3]??"").trim();for(;s.startsWith("(");){const o=mu(s);if(o==null)break;const l=Pn(o,",").map(h=>Ep(h)),u={};l.forEach((h,m)=>{const g=r[m]??`col${m+1}`;g!==hu&&(u[g]=h)}),i.push(u),s=s.slice(o.length+2).trim(),s.startsWith(",")&&(s=s.slice(1).trim())}return{table:n,rows:i}}function Sl(e){const t=/^\s*("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s]+)(?:\s+(?:AS\s+)?("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s]+))?\s*$/i.exec(e);if(!t?.[1])return{table:"",alias:""};const n=zt(t[1]);return{table:n,alias:t[2]?zt(t[2]):n}}function xr(e){return Pn(e,".").map(zt)}function Ho(e,t,n){const r=t.filter(i=>(n.get(i.tableName.toLowerCase())??[]).includes(e));return r.some(i=>i.alias===t[0]?.alias)?t[0].alias:(r.length===1?r[0]?.alias:void 0)??t[0]?.alias??""}function Rp(e){let t=e,n;const r=/\s+FETCH\s+FIRST\s+(\d+)\s+ROWS?\s+ONLY\s*$/i.exec(t);r&&(n=Number(r[1]),t=t.slice(0,r.index));const i=/\s+LIMIT\s+(\d+)\s*$/i.exec(t);i&&(n=Number(i[1]),t=t.slice(0,i.index));let s;const o=/\s+ORDER\s+BY\s+([\s\S]+)$/i.exec(t);o?.[1]&&(s=o[1],t=t.slice(0,o.index));let l;const u=/\s+WHERE\s+([\s\S]+)$/i.exec(t);return u?.[1]&&(l=u[1],t=t.slice(0,u.index)),{from:t,limit:n,orderBy:s,where:l}}function Op(e,t,n,r,i){const s=[],o=l=>l.length===2?l[0]??"":Ho(l[0]??"",n,r);for(const l of pu(e,"AND")){const u=/^\s*([\w".$[\]`]+)\s*=\s*([\w".$[\]`]+)\s*$/.exec(l);if(!u?.[1]||!u[2]){i.push(`ON ${l.trim()}`);continue}const h=xr(u[1]),m=xr(u[2]),g=o(h)===t.alias,w=g?h:m,y=g?m:h;if(o(w)!==t.alias){i.push(`ON ${l.trim()} — neither side names ${t.alias}`);continue}s.push({field:w.length===2?w[1]??"":w[0]??"",eqAlias:y.length===2?y[0]??"":o(y),eqField:y.length===2?y[1]??"":y[0]??""})}return s}function Dp(e,t,n){const r=/\s+(LEFT|RIGHT|FULL|INNER|CROSS)(?:\s+OUTER)?\s+JOIN\s+|\s+JOIN\s+/gi,i=[],s=[];let o=0;for(let h=r.exec(e);h;h=r.exec(e))i.push(e.slice(o,h.index)),s.push((h[1]??"INNER").toUpperCase()),o=h.index+h[0].length;i.push(e.slice(o));const l=Sl(i[0]??"");if(!l.table)return null;const u=[{alias:l.alias,tableName:l.table}];for(let h=1;h<i.length;h++){const m=i[h]??"",g=/\s+ON\s+([\s\S]+)$/i.exec(m),w=Sl(g?m.slice(0,g.index):m);if(!w.table)continue;const y=s[h-1]??"INNER";if(y==="CROSS"||!g?.[1]){n.push(`${y} JOIN ${w.table} — no ON predicate to model`),u.push({alias:w.alias,tableName:w.table});continue}(y==="RIGHT"||y==="FULL")&&n.push(`${y} JOIN ${w.table} — imported as LEFT JOIN (the closest a projection can express)`);const x=[...u,{alias:w.alias,tableName:w.table}];u.push({alias:w.alias,tableName:w.table,join:{type:y==="INNER"?"inner":"left",on:Op(g[1],w,x,t,n)}})}return u}function Pp(e,t,n,r){const i=[];for(const s of Pn(e,",")){const o=s.trim();if(!o)continue;if(o==="*"){r.push("SELECT * — a projection needs its columns listed");continue}const l=/^([\s\S]*?)\s+AS\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[\w$]+)$/i.exec(o),u=(l?.[1]??o).trim(),h=xr(u),m=zt(l?.[2]??h[h.length-1]??u);if(/^NULL$/i.test(u)){i.push({field:m,from:{kind:"script",script:jp}});continue}h.length===2&&h[0]&&h[1]?i.push({field:m,from:{kind:"source",alias:h[0],field:h[1]}}):h.length===1&&h[0]&&/^[\w$]+$/.test(h[0])?i.push({field:m,from:{kind:"source",alias:Ho(h[0],t,n),field:h[0]}}):r.push(`SELECT ${o} — expression not modelled`)}return i}function Lp(e,t){const n={};if(!e)return n;for(const r of pu(e,"AND")){const i=/^\s*LOWER\(\s*([\w".$[\]`]+)\s*\)\s+LIKE\s+'%([\s\S]*)%'\s*$/i.exec(r.trim()),s=i?.[1]?gu(t.columns,xr(i[1]),t.sources,t.schema):void 0;if(!i||!s){t.unsupported.push(`WHERE ${r.trim()}`);continue}n[s.field]=(i[2]??"").replace(/''/g,"'")}return n}function Mp(e,t){const n=[];for(const r of Pn(e??"",",")){const i=r.trim();if(!i)continue;const[s,o]=i.split(/\s+/),l=gu(t.columns,xr(s??""),t.sources,t.schema);if(!l){t.unsupported.push(`ORDER BY ${i}`);continue}n.push({field:l.field,asc:!/^DESC$/i.test(o??"")})}return n}function El(e,t,n,r){const i=[],s=e.replace(/\s+/g," ").trim(),o=/^SELECT\s+(?:TOP\s+(\d+)\s+)?([\s\S]+?)\s+FROM\s+([\s\S]+)$/i.exec(s);if(!o)return null;const{from:l,limit:u,orderBy:h,where:m}=Rp(o[3]??""),g=u??(o[1]?Number(o[1]):void 0),w=Dp(l,n,i);if(!w)return null;const y=Pp(o[2]??"",w,n,i),x={columns:y,sources:w,schema:n,unsupported:i},C=Lp(m,x),O=Mp(h,x),M={version:1,sources:w,columns:y};return Object.keys(C).length>0&&(M.filters=C),g!=null&&g>0&&(M.limit=g),{projection:{name:r||t,spec:M,...O.length>0?{sortBy:O}:{}},unsupported:i}}const jp=["// This column was computed in-app; SQL carried only its NAME,","// not its script. Re-enter the expression here.","function render(row) {","  return null;","}"].join(`
`);function gu(e,t,n,r){const i=t.length===2?t[0]:Ho(t[0]??"",n,r),s=t.length===2?t[1]:t[0];return e.find(o=>o.from.kind==="source"&&o.from.alias===i&&o.from.field===s)??e.find(o=>o.field===s)}function Ko(e){const t=new Map,n=[],r=[],i=new Map,s=o=>{i.set(o.name.toLowerCase(),o.columns.map(l=>l.field))};for(const o of Sp(e)){const l=o.sql;if(/^CREATE\s+(?:TEMP(?:ORARY)?\s+)?TABLE\b/i.test(l)){const u=Ip(l);if(!u){r.push(dr(l));continue}const h=t.get(u.name);t.set(u.name,{...u,rows:h?.rows??[]}),s(u);continue}if(/^INSERT\s+/i.test(l)){const u=Ap(l);if(!u){r.push(dr(l));continue}const h=t.get(u.table);if(h)h.rows.push(...u.rows);else{const m={name:u.table,columns:Np(u.rows),rows:u.rows};t.set(u.table,m),s(m)}continue}if(/^CREATE\s+(?:OR\s+REPLACE\s+)?VIEW\b/i.test(l)){const u=/^CREATE\s+(?:OR\s+REPLACE\s+)?VIEW\s+("(?:[^"]|"")*"|\[[^\]]*\]|`[^`]*`|[^\s(]+)\s+AS\s+(SELECT[\s\S]+)$/i.exec(l),h=u?.[1]?zt(u[1]):"",m=u?.[2]?El(u[2],h||"view",i,h):null;m?(n.push(m.projection),r.push(...m.unsupported)):r.push(dr(l));continue}if(/^SELECT\b/i.test(l)){const u=El(l,"",i,o.name);u?(n.push(u.projection),r.push(...u.unsupported)):r.push(dr(l));continue}/^(BEGIN|START\s+TRANSACTION|COMMIT|END|DROP|PRAGMA|SET|USE|ANALYZE|VACUUM)\b/i.test(l)||r.push(dr(l))}for(const o of n)o.name||(o.name=`${o.spec.sources[0]?.tableName??"query"} view`);return{tables:[...t.values()],projections:n,unsupported:r}}function dr(e){const t=e.split(`
`)[0]?.trim()??e;return t.length>120?`${t.slice(0,117)}…`:t}function Np(e){const t=[];for(const n of e)for(const r of Object.keys(n))t.includes(r)||t.push(r);return t.map(n=>{const r=e.map(s=>s[n]).filter(s=>s!=null),i=r.length===0?"string":r.every(s=>typeof s=="number")?"number":r.every(s=>typeof s=="boolean")?"boolean":"string";return{field:n,label:n,type:i}})}const zp={id:"sql-import",name:"SQL Import",type:"importer",version:"0.1.0",description:"Import a .sql script: CREATE TABLE + INSERT become tables, and each SELECT (or CREATE VIEW) becomes a projection.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-import.ts"};function Up(e){e.ui.registerImporter(Vo),e.ui.registerDropHandler(async t=>{const n=Hp(t).filter(Kp);if(n.length===0)return!1;t.preventDefault();for(const r of n)await qp(e,r);return!0})}const Vo={id:"sql",label:"SQL script (CREATE TABLE / INSERT / SELECT)",icon:"database",order:30,accept:[".sql","application/sql","text/sql","application/x-sql"],supports:{url:!0,file:!0,text:!0,multiTable:!0,kernel:!0},detect(e){const t=e.kind==="file"?e.file?.name??"":e.url??"";return/\.sql$/i.test(t)?1:(e.file?.type??"").includes("sql")?.9:/^\s*(--|\/\*|BEGIN\b|CREATE\s+TABLE\b|INSERT\s+INTO\b|DROP\s+TABLE\b)/i.test(e.text??"")?.6:0},async list(e,t){return Ko(await Fp(e,t)).tables.map(r=>({name:r.name,rowCount:r.rows.length,handle:{columns:r.columns,rows:r.rows}}))},async*read(e,t){const{columns:n,rows:r}=t.handle;yield{columns:n,rows:r}}};function Fp(e,t){return t.kind==="file"&&t.file?t.file.text():t.kind==="url"&&t.url?e.fetchText(t.url,`Reading ${Nt(t.url)}…`):Promise.resolve(t.text??"")}function Go(e){return Ko(e).projections.length>0}async function Wo(e,t,n={}){const r=e.workspaceId();if(!r)throw new Error("sql-import: no active workspace");const i=Ko(t),s={tables:[],projections:[],rowCount:0,unsupported:i.unsupported},o=n.target??{kind:"new"},l=o.kind==="new"||i.tables.length===1;l||s.unsupported.push(`"Import into" was not applied — this script defines ${i.tables.length} tables, and an append/replace names only one destination`);const u=new Map;for(const y of i.tables){const x=await ou(e,y.name,(async function*(){yield{columns:y.columns,rows:y.rows}})(),{workspaceId:r,importerId:"sql",target:l?o:{kind:"new"},...n.maxRows!==void 0?{maxRows:n.maxRows}:{},...n.editColumns?{editColumns:C=>n.editColumns(C,y.name)}:{}});x&&(u.set(y.name,x.tableName),s.tables.push(x.tableName),s.rowCount+=x.rowCount)}const h=await e.store.tables.find({workspaceId:r}),m=new Map;for(const y of h)m.has(y.name)||m.set(y.name,y);const g=new Map;for(const y of h)g.has(y.name.toLowerCase())||g.set(y.name.toLowerCase(),y);const w=new Set([...h.map(y=>y.name),...s.tables]);for(const y of i.projections){const x=await Bp(e,r,y,{landedAs:u,byName:m,byLowerName:g,taken:w});if(!x){s.unsupported.push(`projection "${y.name}" — its source tables are not in this workspace`);continue}m.set(x.name,x),g.set(x.name.toLowerCase(),x),w.add(x.name),s.projections.push(x.name)}return s}async function Bp(e,t,n,r){const i=n.spec.sources.map(m=>{const g=r.landedAs.get(m.tableName),w=(g?r.byName.get(g):void 0)??r.byName.get(m.tableName)??r.byLowerName.get(m.tableName.toLowerCase());return{source:m,table:w,resolvedName:w?.name??g??m.tableName}});if(i.some(m=>!m.table))return null;const s={...n.spec,sources:i.map(({source:m,table:g,resolvedName:w})=>({...m,tableName:w,...g?{tableId:g.id}:{}}))},o={};for(const{source:m,table:g}of i)o[m.alias]=g?.columns??[];const l=du(s,o,[],[]),u=No(r.taken,n.name),h={id:Ce(),workspaceId:t,name:u,code:Le(u),columns:l,view:"table",source:{type:"projection",config:s},readonly:Rr(s).size===0,...n.sortBy&&n.sortBy.length>0?{sortBy:n.sortBy}:{},...s.filters?{filters:s.filters}:{},updatedAt:Date.now()};return await e.store.tables.insert(h),h}function Yo(e,t,n){const r=[];if(t.tables.length>0&&r.push(`${t.tables.length} table${t.tables.length===1?"":"s"} (${t.rowCount.toLocaleString()} rows)`),t.projections.length>0&&r.push(`${t.projections.length} projection${t.projections.length===1?"":"s"}`),r.length===0){e.ui.dialogs.toast(`Nothing importable found in ${n}.`,{kind:"warning",title:"SQL import"});return}const i=t.unsupported.length>0?` — ${t.unsupported.length} statement${t.unsupported.length===1?"":"s"} could not be imported: ${t.unsupported.slice(0,3).join("; ")}${t.unsupported.length>3?"…":""}`:"";e.ui.dialogs.toast(`Imported ${r.join(" and ")} from ${n}${i}.`,{kind:t.unsupported.length>0?"warning":"success",title:"SQL import"})}async function qp(e,t){const n=await t.text();try{if(Go(n)){Yo(e,await Wo(e,n),t.name);return}const r=await qi(e,Vo,{kind:"text",text:n,name:t.name},{mode:"copy",target:{kind:"new"}}),i=r.landed.reduce((s,o)=>s+o.rowCount,0);r.landed.length>0?e.ui.dialogs.toast(`Imported ${r.landed.length} table${r.landed.length===1?"":"s"} (${i.toLocaleString()} rows) from ${t.name}.`,{kind:"success",title:"SQL import"}):e.ui.dialogs.toast(`Nothing importable found in ${t.name}.`,{kind:"warning",title:"SQL import"})}catch(r){e.ui.dialogs.toast(`Could not import ${t.name}: ${r.message}`,{kind:"error",title:"SQL import"})}}function Hp(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);const n=[];for(const r of Array.from(t.items??[]))if(r.kind==="file"){const i=r.getAsFile();i&&n.push(i)}return n}function Kp(e){return/\.sql$/i.test(e.name)||(e.type??"").includes("sql")}const Vp=Object.freeze(Object.defineProperty({__proto__:null,hasSqlProjections:Go,init:Up,meta:zp,reportSqlRestore:Yo,restoreSqlScript:Wo,sqlImporterSpec:Vo},Symbol.toStringTag,{value:"Module"}));var Gp=Object.defineProperty,Wp=Object.getOwnPropertyDescriptor,Qo=(e,t,n,r)=>{for(var i=r>1?void 0:r?Wp(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Gp(t,n,i),i};let di=null;function Yp(){return di||(di=document.createElement("anchored-menu"),document.body.appendChild(di)),di}let wn=class extends ve{constructor(){super(...arguments),this.items=[],this.shown=!1,this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.finish(null)},this.onKey=e=>{e.key==="Escape"&&(e.preventDefault(),this.finish(null))}}static open(e,t){return Yp().openMenu(e,t)}connectedCallback(){super.connectedCallback(),this.setAttribute("hidden","")}openMenu(e,t){return this.items=t,this.style.left=`${Math.round(e.left)}px`,this.style.top=`${Math.round(e.bottom+4)}px`,this.removeAttribute("hidden"),this.shown=!0,this.updateComplete.then(()=>{const n=this.shadowRoot?.querySelector(".menu");if(!n)return;const r=n.getBoundingClientRect();r.bottom>window.innerHeight&&(this.style.top=`${Math.round(e.top-r.height-4)}px`)}),new Promise(n=>{this.resolveFn=n,setTimeout(()=>{document.addEventListener("mousedown",this.onOutside,!0),document.addEventListener("keydown",this.onKey,!0)},0)})}finish(e){this.setAttribute("hidden",""),this.shown=!1,document.removeEventListener("mousedown",this.onOutside,!0),document.removeEventListener("keydown",this.onKey,!0);const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}render(){return this.shown?k`
      <div class="menu" role="menu">
        ${this.items.map(e=>k`
            <button
              role="menuitem"
              class=${e.danger?"danger":""}
              @click=${()=>this.finish(e.id)}
            >
              ${e.icon?k`<span class="mi">${e.icon}</span>`:""}
              <span>${e.label}</span>
            </button>
          `)}
      </div>
    `:k``}};wn.styles=[mt,xe`
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
    `];Qo([U()],wn.prototype,"items",2);Qo([U()],wn.prototype,"shown",2);wn=Qo([Se("anchored-menu")],wn);const kr=Object.freeze(Object.defineProperty({__proto__:null,get AnchoredMenu(){return wn}},Symbol.toStringTag,{value:"Module"})),lo='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Qp={id:"connect-menu",name:"Connect",type:"ui",version:"0.1.0",description:"Header Connect button listing every registered live-backend connector. Chrome only — it knows no backend.",author:"Marc Cawood",icon:lo,repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/connect-menu.ts"};function Xp(e){e.ui.registerHeaderButton({id:"connect-menu:open",label:"Connect",icon:lo,tooltip:"Connect a live table on a remote backend (rows are never stored locally)",onClick:(t,n)=>Tl(t,n?.anchor)}),e.ui.registerCommand({id:"connect-menu:open",title:"Connect a live table…",group:"Data",icon:lo,keywords:["datasette","live","remote","backend"],run:t=>Tl(t)})}async function Jp(){const{registries:e}=await ae();return[...e.connectors].sort((t,n)=>(t.order??Number.MAX_SAFE_INTEGER)-(n.order??Number.MAX_SAFE_INTEGER))}async function Tl(e,t){const n=await Jp();if(n.length===0){await e.ui.dialogs.alert("No backends are installed to connect to. Install a connector plugin from the Plugin Manager first.","Connect");return}let r=n[0];if(n.length>1){const i=t?.getBoundingClientRect(),s=i?await wn.open(i,n.map(o=>({id:o.id,label:o.label,icon:o.icon}))):await e.ui.dialogs.choice("Which backend do you want to connect to?",n.map(o=>o.label),"Connect");if(!s)return;r=i?n.find(o=>o.id===s):n.find(o=>o.label===s)}if(r)try{await r.connect(e)}catch(i){await e.ui.dialogs.alert(i?.message??String(i),`Connect ${r.label} failed`)}}const Zp=Object.freeze(Object.defineProperty({__proto__:null,init:Xp,meta:Qp},Symbol.toStringTag,{value:"Module"}));function Il(e,t){return JSON.stringify(t.map(n=>e[n]))}function em(e,t){return t.every(n=>e[n]!==null&&e[n]!==void 0)}function bu(e){const{oldRows:t,freshRows:n,pks:r,userAddedFields:i,deletedRemoteFields:s=[]}=e,o=new Set(s),l=g=>{const w={...g};for(const y of o)delete w[y];return w};if(!(r.length>0&&n.every(g=>em(g,r))))return{data:n.map(l),merged:!1};const h=new Map;for(const g of t){const w=Il(g.data,r);h.has(w)||h.set(w,g)}return{data:n.map(g=>{const w=l(g),y=Il(g,r),x=h.get(y);if(x)for(const C of i)Object.prototype.hasOwnProperty.call(x.data,C)&&(w[C]=x.data[C]);return w}),merged:!0}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wu=Symbol.for(""),tm=e=>{if(e?.r===wu)return e?._$litStatic$},Al=e=>({_$litStatic$:e,r:wu}),Rl=new Map,nm=e=>(t,...n)=>{const r=n.length;let i,s;const o=[],l=[];let u,h=0,m=!1;for(;h<r;){for(u=t[h];h<r&&(s=n[h],(i=tm(s))!==void 0);)u+=i+t[++h],m=!0;h!==r&&l.push(s),o.push(u),h++}if(h===r&&o.push(t[r]),m){const g=o.join("$$lit$$");(t=Rl.get(g))===void 0&&(o.raw=o,Rl.set(g,t=o)),n=l}return e(t,...n)},Ol=nm(k);function Dl(e){return e==null||String(e).trim()===""}function Or(e){const t=[];let n="",r=!1,i=!1,s=!1,o=!1,l=!1,u=!1,h=!0;const m=()=>{const g=s?n:n.trim();if(r||o){const w={term:g,negate:o};l&&(w.prefix=!0),u&&(w.exact=!0),t.push(w)}n="",r=!1,i=!1,s=!1,o=!1,l=!1,u=!1,h=!0};for(let g=0;g<e.length;g++){const w=e[g];if(w==='"'){if(i&&e[g+1]==='"'){n+='"',r=!0,g++;continue}i=!i,s=!0,r=!0,h=!1;continue}if(w===","&&!i){m();continue}if(w==="!"&&!i&&h&&!o&&!l&&!u){o=!0;continue}if(w==="="&&!i&&h&&!l&&!u){u=!0;continue}if(w==="^"&&!i&&h&&!l&&!u){l=!0;continue}h&&!i&&/\s/.test(w)||(h=!1),n+=w,/\s/.test(w)||(r=!0)}return m(),t}function rm(e){return e.includes(",")||e.includes('"')||e!==e.trim()||e===""||e.startsWith("!")||e.startsWith("^")||e.startsWith("=")}function Cr(e){return e.map(t=>{const n=t.term===""&&t.negate?"":rm(t.term)?`"${t.term.replace(/"/g,'""')}"`:t.term,r=t.exact?"=":t.prefix?"^":"";return(t.negate?"!":"")+r+n}).join(",")}function Pl(e,t){const n=t.term;if(n.trim()===""||!t.prefix&&!t.exact&&n.toUpperCase()==="NULL")return Dl(e);const r=String(e??"").toLowerCase(),i=n.toLowerCase();return t.exact?r===i:t.prefix?r.startsWith(i):r.includes(i)}function Ii(e,t){const n=Or(t);if(n.length===0)return!0;for(const i of n)if(i.negate&&Pl(e,i))return!1;const r=n.filter(i=>!i.negate);return r.length===0?!0:r.some(i=>Pl(e,i))}var im=Object.defineProperty,sm=Object.getOwnPropertyDescriptor,Bn=(e,t,n,r)=>{for(var i=r>1?void 0:r?sm(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&im(t,n,i),i};function Ws(e){return Cr([{...e,negate:!1}])}let st=class extends ve{constructor(){super(...arguments),this.values=[],this.blanks=0,this.current="",this.search="",this.states=new Map,this.resolveFn=null,this.onChange=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,n,r=0,i){return this.values=t,this.blanks=r,this.onChange=i??null,this.states=new Map(Or(n??"").map(s=>[Ws(s),{state:s.negate?"not":"on",token:s}])),this.current=n??"",this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(s=>{this.resolveFn=s,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}cycle(e){const t={term:e,negate:!1},n=Ws(t),r=new Map(this.states),i=r.get(n);i===void 0?r.set(n,{state:"on",token:t}):i.state==="on"?r.set(n,{state:"not",token:i.token}):r.delete(n),this.states=r;const s=[...r.values()].map(o=>({...o.token,negate:o.state==="not"}));this.current=Cr(s),this.onChange?.(this.current)}close(e){this.onChange=null,document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),st.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),st.instance===this&&(st.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(o=>o.value.toLowerCase().includes(e)),n=this.blanks>0&&"(blanks)".includes(e),r=o=>this.states.get(Ws({term:o,negate:!1}))?.state,i=o=>k`
      <span class=${`cb${o?` ${o}`:""}`}
        >${o==="on"?"✓":o==="not"?"✕":""}</span
      >
    `,s=o=>o==="on"?"Included — click to exclude":o==="not"?"Excluded — click to clear":"Click to include → exclude → off";return k`
      <header>
        <span class="mi sm">search</span>
        <input
          type="text"
          autofocus
          placeholder="Filter values…"
          .value=${this.search}
          @input=${o=>this.search=o.target.value}
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
      ${t.length===0&&!n?k`<div class="empty">No matching values.</div>`:k`<ul>
            ${n?k`
                  <li
                    class="blanks"
                    title=${s(r("NULL"))}
                    @click=${()=>this.cycle("NULL")}
                  >
                    <span class="left">
                      ${i(r("NULL"))}
                      <span class="label"><em>(Blanks)</em></span>
                    </span>
                    <span class="count">${this.blanks}</span>
                  </li>
                `:""}
            ${t.slice(0,500).map(o=>{const l=r(o.value);return k`
                <li title=${s(l)} @click=${()=>this.cycle(o.value)}>
                  <span class="left">
                    ${i(l)}
                    <span class="label">${o.value}</span>
                  </span>
                  <span class="count">${o.count}</span>
                </li>
              `})}
          </ul>`}
      ${this.values.length>500?k`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      <div class="actions">
        <button
          class="text"
          @click=${()=>{this.states=new Map,this.close({clear:!0})}}
        >
          Clear filter
        </button>
        <span style="color:#6b7280">${t.length} value${t.length===1?"":"s"}</span>
      </div>
    `}};st.instance=null;st.styles=[mt,xe`
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
    `];Bn([dt({type:Array})],st.prototype,"values",2);Bn([dt({type:Number})],st.prototype,"blanks",2);Bn([dt({type:String})],st.prototype,"current",2);Bn([U()],st.prototype,"search",2);Bn([U()],st.prototype,"states",2);st=Bn([Se("filter-popover")],st);var om=Object.defineProperty,am=Object.getOwnPropertyDescriptor,_t=(e,t,n,r)=>{for(var i=r>1?void 0:r?am(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&om(t,n,i),i};let ut=class extends ve{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const n=t[this.highlightIdx];n!==void 0?(e.preventDefault(),this.onPick(n)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const n=[];for(const r of this.options)if(r.toLowerCase().includes(t)&&(n.push(r),n.length>=500))break;return n}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=this.open&&e.length>0,n=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return k`
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
        ${this.value?k`<button
              type="button"
              class="clear"
              title="Clear filter"
              tabindex="-1"
              @mousedown=${r=>r.preventDefault()}
              @click=${this.onClear}
            >
              ×
            </button>`:re}
      </div>
      ${t?k`<ul
            class="dropdown"
            style=${n}
            @mousedown=${r=>r.preventDefault()}
          >
            ${e.map((r,i)=>k`
                <li
                  class=${i===this.highlightIdx?"highlighted":""}
                  @mousedown=${s=>s.preventDefault()}
                  @click=${()=>this.onPick(r)}
                >
                  ${r}
                </li>
              `)}
          </ul>`:re}
    `}};ut.styles=xe`
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
  `;_t([dt({type:String})],ut.prototype,"value",2);_t([dt({type:Array})],ut.prototype,"options",2);_t([dt({type:String})],ut.prototype,"placeholder",2);_t([U()],ut.prototype,"open",2);_t([U()],ut.prototype,"highlightIdx",2);_t([U()],ut.prototype,"dropTop",2);_t([U()],ut.prototype,"dropLeft",2);_t([U()],ut.prototype,"dropMinWidth",2);_t([U()],ut.prototype,"editing",2);_t([Dt("input")],ut.prototype,"inputEl",2);ut=_t([Se("filter-combobox")],ut);function lm(e){const t=e.trim(),n=t.split(/\s+/).filter(Boolean);if(!n.some(l=>l==="AND"||l==="OR"))return{kind:"plain",phrase:t.toLowerCase(),words:n.map(l=>l.toLowerCase())};const i=[];let s=[];for(const l of n)l==="OR"?(i.push(s),s=[]):l==="AND"||s.push(l.toLowerCase());i.push(s);const o=i.filter(l=>l.length>0);return o.length===0?{kind:"plain",phrase:t.toLowerCase(),words:[]}:{kind:"boolean",groups:o}}function cm(e,t,n){const r=lm(t);if(r.kind==="boolean")return e.filter(u=>r.groups.some(h=>h.every(m=>n(u,m))));const{phrase:i,words:s}=r;if(s.length<=1)return i===""?e:e.filter(u=>n(u,i));const o=e.filter(u=>n(u,i));if(o.length>0)return o;const l=e.filter(u=>s.every(h=>n(u,h)));return l.length>0?l:e.filter(u=>s.some(h=>n(u,h)))}const um=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function Ai(e,t,n){const r=new Map;for(const l of n)r.set(l.field.toLowerCase(),l.field),l.label&&r.set(l.label.toLowerCase(),l.field);const i=[...r.keys()].filter(Boolean).sort((l,u)=>u.length-l.length);let s=t;return i.length>0&&(s=s.replace(new RegExp(`(^|\\s)(${i.map(um).join("|")}):\\s+`,"gi"),"$1$2:")),cm(e,s,(l,u)=>{const h=u.indexOf(":");if(h>0){const m=r.get(u.slice(0,h));if(m)return Ii(l.data[m],u.slice(h+1))}return Object.values(l.data).some(m=>m!=null&&String(m).toLowerCase().includes(u))})}const Ri="easydb:visible-count";function yu(e,t,n){e&&document.dispatchEvent(new CustomEvent(Ri,{detail:{key:e,count:t,total:n}}))}function vu(e,t){return e<0||t<0?"":e===t?` (${t})`:` (${e}/${t})`}const $u="#dc2626",xu="cell-invalid",dm=`border-color:${$u};background:#fef2f2`;function Xo(e,t){e.classList.add(xu),e.style.border=`1px solid ${$u}`,e.style.background="#fef2f2",t&&(e.title=t)}function hm(e,t){if(e==null||typeof e=="string"&&e.trim()==="")return"empty";switch(t){case"boolean":return ku(e)==="invalid"?"invalid":"ok";case"number":return Number.isFinite(typeof e=="number"?e:Number(e))?"ok":"invalid";case"date":case"datetime":return Number.isNaN(Date.parse(String(e)))?"invalid":"ok";default:return"ok"}}const fm=/^\s*(true|1)\s*$/i,pm=/^\s*(false|0)\s*$/i;function ku(e){return e===!0||e===1?"true":e===!1||e===0?"false":e==null?"empty":typeof e=="string"?e.trim()===""?"empty":fm.test(e)?"true":pm.test(e)?"false":"invalid":"invalid"}var mm=Object.defineProperty,gm=Object.getOwnPropertyDescriptor,De=(e,t,n,r)=>{for(var i=r>1?void 0:r?gm(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&mm(t,n,i),i};const bm=200,wm=10,Ys=32;let Ie=class extends ve{constructor(){super(...arguments),this.tableId="",this.viewInstanceId="",this.columns=[],this.rows=[],this.sortSpecs=[],this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.viewInst=null,this.tableColumns=[],this.tableReadonly=!1,this.renderedCount=0,this.lastEmittedCount=-1,this.lastEmittedTotal=-1,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;(t.tableId===this.tableId||this.viewMode&&t.tableId===this.viewInstanceId)&&(this.localQuery=t.query??"")},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}get viewMode(){return!!this.viewInstanceId}get readOnlyView(){return this.viewMode&&!!this.viewInst?.readonly}get readOnly(){return this.readOnlyView||this.tableReadonly}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),this.resizing=null}async updated(e){(e.has("tableId")||e.has("viewInstanceId"))&&this.tableId&&(this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.emitCount()}emitCount(){const e=this.viewMode?this.viewInstanceId:this.tableId;if(!e)return;const t=this.renderedCount,n=this.rows.length;t===this.lastEmittedCount&&n===this.lastEmittedTotal||(this.lastEmittedCount=t,this.lastEmittedTotal=n,yu(e,t,n))}async bind(){if(!this.tableId)return;const e=await ae(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.viewMode?(this.tableColumns=t.columns,this.viewInst=await e.store.viewInstances.findOne(this.viewInstanceId)??null,this.applyView(),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(i=>{const s=i.find(o=>o.id===this.tableId);s&&(this.tableColumns=s.columns,this.applyView())}),this.viewSubUnsub?.(),this.viewSubUnsub=e.store.viewInstances.subscribe(i=>{const s=i.find(o=>o.id===this.viewInstanceId);s&&(this.viewInst=s,this.applyView())})):(this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(i=>{const s=i.find(o=>o.id===this.tableId);s&&this.applyTable(s)})),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const n=e.store.rows(this.tableId);this.unsubscribe=n.subscribe(i=>this.rows=i);const r=window.setTimeout(()=>this.loading=!0,bm);try{this.rows=await n.find()}catch(i){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${i?.message??String(i)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(r),this.loading=!1}}applyTable(e){this.resizing==null&&(this.columns=e.columns),this.tableReadonly=!!e.readonly,this.sortSpecs=jl(e),this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}applyView(){const e=this.viewInst;if(!e)return;const t=new Map(this.tableColumns.map(r=>[r.field,r])),n=e.columnWidths??{};this.columns=e.visibleColumns.map(r=>t.get(r)).filter(r=>!!r).map(r=>{const i=n[r.field];return typeof i=="number"?{...r,width:i}:r}),this.sortSpecs=jl(e),this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}async setCell(e,t,n){const r=await ae();await this.commitCell(r,e,t,n)}async commitCell(e,t,n,r){const i=this.columns.find(s=>s.field===n);if(i){const s=$m(i,r,this.rows,t.id);if(s){await e.api.ui.dialogs.alert(s,`Cannot save ${i.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[n]:r},updatedAt:Date.now()})}catch(s){await e.api.ui.dialogs.alert(s?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}cancelCellEdit(e,t){if(e.key!=="Escape")return;e.stopPropagation();const n=e.target;typeof t=="boolean"?n.checked=t:n.value=t,n.blur()}renderInvalidCell(e,t,n,r){const i=String(n);return k`<input
      type="text"
      class=${xu}
      style=${dm}
      title=${r}
      .value=${i}
      @keydown=${s=>this.cancelCellEdit(s,i)}
      @change=${s=>this.setCell(e,t.field,s.target.value)}
    />`}renderReadonlyCell(e,t){return e.type==="boolean"?k`<input type="checkbox" .checked=${t===!0||t==="true"||t===1||t==="1"} disabled />`:t==null||t===""?k``:e.type==="date"?k`${hi(t)}`:e.type==="datetime"?k`${fi(t).replace("T"," ")}`:k`${String(t)}`}renderScriptedCell(e,t){const n=Fo(t.script,e.data);if(!n.ok)return k`<span class="script-err" title=${n.message}>⚠ ${n.label}</span>`;const r=t.renderer?this.cellRenderers?.get(t.renderer):void 0;if(!r)return k`${n.value==null?"":String(n.value)}`;const i=Al(r);return Ol`<${i}
      .value=${n.value??""}
      .rawValue=${e.data[t.field]??""}
      .column=${t}
      .row=${e.data}
      .readonly=${!0}
      @change=${this.readOnly?void 0:s=>this.setCell(e,t.field,s.detail.value)}
    ></${i}>`}renderCell(e,t){const n=e.data[t.field];if(t.script?.trim())return this.renderScriptedCell(e,t);const r=this.readOnly||t.readonly===!0,i=t.renderer,s=i?this.cellRenderers?.get(i):void 0;if(s){const o=Al(s);return Ol`<${o}
        .value=${n??""}
        .column=${t}
        .row=${e.data}
        .readonly=${r}
        @change=${r?void 0:l=>this.setCell(e,t.field,l.detail.value)}
      ></${o}>`}if(r)return this.renderReadonlyCell(t,n);switch(t.type){case"date":return Ml(n,hi(n))?this.renderInvalidCell(e,t,n,`Not a valid date: "${String(n)}"`):k`<input
          type="date"
          .value=${hi(n)}
          @keydown=${o=>this.cancelCellEdit(o,hi(n))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"datetime":return Ml(n,fi(n))?this.renderInvalidCell(e,t,n,`Not a valid datetime: "${String(n)}"`):k`<input
          type="datetime-local"
          .value=${fi(n)}
          @keydown=${o=>this.cancelCellEdit(o,fi(n))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"number":{const o=n==null||n==="";return!o&&Number.isNaN(Number(n))?this.renderInvalidCell(e,t,n,`Not a valid number: "${String(n)}"`):k`<input
          type="number"
          .value=${o?"":String(n)}
          @keydown=${l=>this.cancelCellEdit(l,o?"":String(n))}
          @change=${l=>{const u=l.target.value;this.setCell(e,t.field,u===""?null:Number(u))}}
        />`}default:return k`<input
          type="text"
          .value=${String(n??"")}
          @keydown=${o=>this.cancelCellEdit(o,String(n??""))}
          @change=${o=>this.setCell(e,t.field,o.target.value)}
        />`}}async deleteRow(e){const t=await ae();try{await t.store.rows(this.tableId).remove(e)}catch(n){await t.api.ui.dialogs.alert(n?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e,t=!1){const n=this.sortSpecs.find(s=>s.field===e),r=this.sortSpecs.length===1&&this.sortSpecs[0]?.field===e;if(!t&&!r){this.sortSpecs=[{field:e,asc:!0}],await this.persistSort(this.sortSpecs);return}const i=t?this.sortSpecs.filter(s=>s.field!==e):[];n?n.asc&&i.push({field:e,asc:!1}):i.push({field:e,asc:!0}),this.sortSpecs=i,await this.persistSort(i)}async persistSort(e){const t=e[0],n={sortBy:e.length>0?e:void 0,sortColumn:t?.field,sortAsc:t?t.asc:void 0,updatedAt:Date.now()},r=await ae();this.viewMode?await r.store.viewInstances.patch(this.viewInstanceId,n):await r.store.tables.patch(this.tableId,n)}filteredRows(){const e=new Set(this.columns.filter(o=>o.filterable===!1).map(o=>o.field)),t=Object.entries(this.filters).filter(([o,l])=>l&&l.trim().length>0&&!e.has(o)),n=this.globalQuery.trim(),r=this.localQuery.trim();if(t.length===0&&n.length===0&&r.length===0)return this.rows;let i=this.rows;t.length>0&&(i=i.filter(o=>t.every(([l,u])=>Ii(o.data[l],u))));const s=this.columns.filter(o=>o.filterable!==!1);return r&&(i=Ai(i,r,s)),n&&(i=Ai(i,n,s)),i}sortedRows(){const e=this.filteredRows();if(this.sortSpecs.length===0)return e;const t=this.sortSpecs.map(r=>({field:r.field,factor:r.asc?1:-1,type:this.columns.find(i=>i.field===r.field)?.type??"string"})),n=[...e];return n.sort((r,i)=>{for(const s of t){const o=xm(r.data[s.field],i.data[s.field],s.type,s.factor);if(o!==0)return o}return 0}),n}async openFilterPicker(e,t){e.stopPropagation();const n=e.currentTarget,r=st.instance;if(!r)return;const i=new Map;let s=0;for(const u of this.rowsFacetedFor(t)){const h=u.data[t];if(h==null||String(h).trim()===""){s++;continue}const m=String(h);i.set(m,(i.get(m)??0)+1)}let o=[...i.entries()].map(([u,h])=>({value:u,count:h})).sort((u,h)=>h.count-u.count||u.value.localeCompare(h.value));this.columns.find(u=>u.field===t)?.type==="boolean"&&(o=[...["true","false"].map(h=>({value:h,count:i.get(h)??0})),...o.filter(h=>h.value!=="true"&&h.value!=="false")]);const l=await r.open(n.getBoundingClientRect(),o,this.filters[t]??"",s,u=>this.onFilterInput(t,u));l!==null&&(typeof l=="object"&&"clear"in l?this.onFilterInput(t,""):typeof l=="string"&&this.onFilterInput(t,l))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>{this.filterSaveTimer=null,this.saveFilters()},250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=new Set(this.columns.filter(r=>r.filterable===!1).map(r=>r.field)),n=Object.entries(this.filters).filter(([r,i])=>i&&i.trim().length>0&&r!==e&&!t.has(r));return n.length===0?this.rows:this.rows.filter(r=>n.every(([i,s])=>Ii(r.data[i],s)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const n=50,r=500;for(const i of this.visibleColumns){let s=!0;for(const l of t){const u=l.data[i.field];if(u==null)continue;if((typeof u=="string"?u:String(u)).length>=n){s=!1;break}}if(!s)continue;const o=new Set;for(const l of this.rowsFacetedFor(i.field)){const u=l.data[i.field];if(u==null||u==="")continue;const h=typeof u=="string"?u:String(u);if(!(h.length>=n)&&(o.add(h),o.size>=r))break}e.set(i.field,[...o].sort())}return e}freezeColumnWidths(){const e=this.renderRoot.querySelector("thead tr");if(!e)return;const t=Array.from(e.querySelectorAll(":scope > th")),n=this.visibleColumns,r=new Map;n.forEach((i,s)=>{if(i.width!=null)return;const o=t[s];o&&r.set(i.field,Math.round(o.getBoundingClientRect().width))}),r.size!==0&&(this.columns=this.columns.map(i=>r.has(i.field)?{...i,width:r.get(i.field)}:i))}onResizeStart(e,t,n){e.preventDefault(),e.stopPropagation();const r=n.offsetWidth;this.freezeColumnWidths(),this.resizing={field:t,startX:e.clientX,startW:r};const i=o=>{if(!this.resizing)return;const l=o.clientX-this.resizing.startX,u=Math.max(wm,this.resizing.startW+l);this.columns=this.columns.map(h=>h.field===this.resizing.field?{...h,width:u}:h)},s=async()=>{window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",s);const o=this.resizing?.field;if(this.resizing=null,!o)return;const l=await ae();if(this.viewMode){const u={...this.viewInst?.columnWidths??{}};for(const h of this.columns)typeof h.width=="number"&&(u[h.field]=h.width);await l.store.viewInstances.patch(this.viewInstanceId,{columnWidths:u,updatedAt:Date.now()})}else await l.store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",i),window.addEventListener("pointerup",s),window.addEventListener("pointercancel",s)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,n){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const r=n.getBoundingClientRect(),i=e.clientX<r.left+r.width/2;this.dropTargetField=t,this.dropEdge=i?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const n=this.dragSourceField,r=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!n||n===t||!r)return;const i=[...this.columns],s=i.findIndex(h=>h.field===n);if(s<0)return;const[o]=i.splice(s,1);let l=i.findIndex(h=>h.field===t);if(l<0){i.splice(s,0,o);return}r==="after"&&(l+=1),i.splice(l,0,o);const u=await ae();this.viewMode?await u.store.viewInstances.patch(this.viewInstanceId,{visibleColumns:i.map(h=>h.field),updatedAt:Date.now()}):await u.store.tables.patch(this.tableId,{columns:i,updatedAt:Date.now()})}async saveFilters(){const e=await ae(),t={};for(const[r,i]of Object.entries(this.filters))i&&i.trim().length>0&&(t[r]=i);if(this.viewMode){await e.store.viewInstances.patch(this.viewInstanceId,{filters:t,updatedAt:Date.now()});return}const n=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:n,updatedAt:Date.now()})}tableSizingStyle(e){return e.length===0||!e.every(n=>typeof n.width=="number")?null:`table-layout: fixed; width: ${e.reduce((n,r)=>n+(r.width??0),0)+Ys}px; min-width: 0`}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,n=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,r=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),i=Math.min(e.length,r+n);return{slice:e.slice(r,i),topPad:r*t,bottomPad:(e.length-i)*t}}render(){const e=this.sortedRows();this.renderedCount=e.length;const t=this.visibleColumns,{slice:n,topPad:r,bottomPad:i}=this.virtualSlice(e),s=this.computeFilterSuggestions(),o=this.externalLoading?this.externalProgress:null;return k`
      ${this.loading||this.externalLoading?k`<div
            class="load-bar"
            role="progressbar"
            aria-label="Loading rows"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow=${o!=null?Math.round(o*100):re}
          >
            <div
              class="load-bar-fill ${o!=null?"determinate":""}"
              style=${o!=null?`width:${Math.max(2,Math.round(o*100))}%`:re}
            ></div>
          </div>`:re}
      <table style=${this.tableSizingStyle(t)??re}>
        <colgroup>
          ${t.map(l=>k`<col style=${l.width!=null?`width: ${l.width}px`:""} />`)}
          <col style="width:${Ys}px" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(l=>{const u=l.sortable!==!1,h=l.filterable!==!1,m=this.sortSpecs.findIndex(V=>V.field===l.field),g=m>=0?this.sortSpecs[m]:void 0,w=g?g.asc?"asc":"desc":null,y=u?w==="asc"?"▲":w==="desc"?"▼":"⇅":"",x=this.sortSpecs.length>1&&m>=0?String(m+1):"",C=`t-${l.type}`,O=this.dragSourceField===l.field,M=this.dropTargetField===l.field,L=M&&this.dropEdge==="before"?" drop-before":M&&this.dropEdge==="after"?" drop-after":"",F=(l.description?`${l.description}
`:"")+(l.units?`Units: ${l.units}
`:"")+`${l.field} — ${u?"click to sort, shift-click to add a sort level, ":"not sortable · "}drag to reorder`+(h?"":" · not filterable");return k`
                <th
                  class=${`${C}${w?" sorted":""}${O?" drag-source":""}${L}${u?"":" no-sort"}`}
                  title=${F}
                  @click=${V=>u&&this.toggleSort(l.field,V.shiftKey)}
                  @dragover=${V=>this.onColDragOver(V,l.field,V.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(l.field)}
                  @drop=${V=>this.onColDrop(V,l.field)}
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
                      @click=${V=>V.stopPropagation()}
                      @dragstart=${V=>this.onColDragStart(V,l.field)}
                      @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                      >drag_indicator</span
                    ><span class="col-label"
                      >${l.label}${l.units?k`<span class="col-units"> (${l.units})</span>`:""}</span
                    ><span class="sort-icon" aria-hidden="true"
                      >${y}${x?k`<span class="sort-rank">${x}</span>`:re}</span
                    >
                    ${h?k`<button
                          class=${`funnel${this.filters[l.field]?" active":""}`}
                          title="Filter by value"
                          aria-label=${`Filter ${l.label||l.field}`}
                          @click=${V=>this.openFilterPicker(V,l.field)}
                        >
                          <span class="mi sm" aria-hidden="true">filter_list</span>
                        </button>`:""}
                  </div>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${V=>V.stopPropagation()}
                    @pointerdown=${V=>this.onResizeStart(V,l.field,V.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:${Ys}px"></th>
          </tr>
          <tr class="filter-row">
            ${t.map(l=>{if(l.filterable===!1)return k`<th></th>`;const u=s.get(l.field)??[];return k`
                <th>
                  <filter-combobox
                    .value=${this.filters[l.field]??""}
                    .options=${u}
                    placeholder="filter…"
                    title="Filter: text = contains, ^text = starts with, !text = does not contain, NULL = empty, !NULL = has a value. Comma-separate for several values (a,b = a OR b; !a,!b excludes both); quote a value containing a comma."
                    @filter-change=${h=>this.onFilterInput(l.field,h.detail.value)}
                  ></filter-combobox>
                </th>
              `})}
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${r>0?k`<tr class="spacer" style=${`height:${r}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${n.map(l=>k`
              <tr>
                ${t.map(u=>k`<td
                      class=${`t-${u.type}${u.renderer?` r-${u.renderer}`:""}${vm(l,u)}`}
                      title=${ym(l,u)}
                    >
                      ${this.renderCell(l,u)}
                    </td>`)}
                <td>
                  ${this.readOnly?re:k`<button
                        class="danger"
                        title="Delete row"
                        @click=${()=>this.deleteRow(l.id)}
                      >
                        <span class="mi sm">delete</span>
                      </button>`}
                </td>
              </tr>
            `)}
          ${i>0?k`<tr class="spacer" style=${`height:${i}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
        </tbody>
      </table>
    `}};Ie.styles=[mt,xe`
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
    `];De([dt({type:String})],Ie.prototype,"tableId",2);De([dt({type:String})],Ie.prototype,"viewInstanceId",2);De([U()],Ie.prototype,"columns",2);De([U()],Ie.prototype,"rows",2);De([U()],Ie.prototype,"sortSpecs",2);De([U()],Ie.prototype,"filters",2);De([U()],Ie.prototype,"globalQuery",2);De([U()],Ie.prototype,"localQuery",2);De([U()],Ie.prototype,"dragSourceField",2);De([U()],Ie.prototype,"dropTargetField",2);De([U()],Ie.prototype,"dropEdge",2);De([U()],Ie.prototype,"resizing",2);De([U()],Ie.prototype,"cellRenderers",2);De([U()],Ie.prototype,"scrollY",2);De([U()],Ie.prototype,"viewportHeight",2);De([U()],Ie.prototype,"loading",2);De([U()],Ie.prototype,"externalLoading",2);De([U()],Ie.prototype,"externalProgress",2);De([U()],Ie.prototype,"tableReadonly",2);Ie=De([Se("data-table")],Ie);const Ll=500;function ym(e,t){if(t.script)return"";const n=e.data[t.field];if(n==null)return"";const r=typeof n=="string"?n:String(n);return r.trim()===""?"":r.length>Ll?`${r.slice(0,Ll)}…`:r}function vm(e,t){if(t.script)return"";const n=hm(e.data[t.field],t.type);return n==="empty"?" is-null":n==="invalid"?" is-invalid":""}function $m(e,t,n,r){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&n.find(s=>s.id!==r&&s.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function hi(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const n=new Date(t);return Number.isNaN(n.getTime())?"":n.toISOString().slice(0,10)}function fi(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const n=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(n)return`${n[1]}T${n[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const r=new Date(t);if(Number.isNaN(r.getTime()))return"";const i=r.toISOString();return`${i.slice(0,10)}T${i.slice(11,16)}`}function Ml(e,t){return e==null||typeof e=="string"&&e.trim()===""?!1:t===""}function xm(e,t,n,r){const i=l=>l==null?0:l===""?1:2,s=i(e),o=i(t);return s!==2||o!==2?(s-o)*r:km(e,t,n)*r}function jl(e){return e.sortBy?.length?e.sortBy.map(t=>({field:t.field,asc:t.asc!==!1})):e.sortColumn?[{field:e.sortColumn,asc:e.sortAsc!==!1}]:[]}function km(e,t,n){switch(n){case"number":{const r=Number(e),i=Number(t);return Number.isNaN(r)||Number.isNaN(i)?String(e).localeCompare(String(t)):r-i}case"boolean":return(e?1:0)-(t?1:0);case"date":{const r=new Date(String(e)).getTime(),i=new Date(String(t)).getTime();return Number.isNaN(r)||Number.isNaN(i)?String(e).localeCompare(String(t)):r-i}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function At(e,t,n){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:n}}))}class ot extends Error{constructor(t,n){const r=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(r),this.name="DatasetteError",this.status=n??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function Ot(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const n=t.pathname.split("/").filter(Boolean),r={};for(const[l,u]of t.searchParams)r[l]=u;let i,s=null,o=null;if(n.length>=2){o=decodeURIComponent(n[n.length-1]),s=decodeURIComponent(n[n.length-2]);const l=n.slice(0,n.length-2).join("/");i=t.origin+(l?"/"+l:"")}else n.length===1&&(s=decodeURIComponent(n[0])),i=t.origin;return{base:i,db:s,table:o,query:r}}function Ln(e,t={}){const n=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[r,i]of Object.entries({...e.query,...t}))i!=null&&n.searchParams.set(r,String(i));return n.toString()}function Cm(e,t){const n={};for(const[r,i]of Object.entries(e.query))r.startsWith("_")||(n[r]=i);return Ln({...e,query:n},{_next:t})}function Nl(e,t){try{const n=new URL(t),r=new URL(e,n);return r.hostname.toLowerCase()!==n.hostname.toLowerCase()?null:(r.protocol=n.protocol,r.port=n.port,r.toString())}catch{return null}}function _m(e){const t=e?.next_url??null,n=e?.next,r=n!=null&&n!==!1?String(n):null,i=Array.isArray(e?.rows)?e.rows:[],s=Array.isArray(e?.columns)?e.columns:null;return{rows:i.map(l=>Array.isArray(l)&&s?Object.fromEntries(s.map((u,h)=>[u,l[h]])):l),nextUrl:t,nextToken:r,hasMore:t!=null||r!=null,truncated:e?.truncated===!0}}function Sm(e,t=""){const n=String(e||"").toUpperCase();return n.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":n.includes("REAL")||n.includes("FLOA")||n.includes("DOUB")||n.includes("NUM")||n.includes("DEC")?"number":n.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function zl(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],n=Array.isArray(e?.columns)?e.columns.slice():[],r={},i=e?.column_details;if(Array.isArray(i))for(const l of i)r[l.column??l.name]=l;else i&&typeof i=="object"&&Object.assign(r,i);for(const l of n)l in r||(r[l]={});const o=(n.length?n:Object.keys(r)).map(l=>{const u=r[l]||{},h=u.is_pk===!0||u.is_pk===1||t.includes(l),m={field:l,label:Cu(l),type:Sm(u.sqlite_type??u.type,l)};return(u.notnull===!0||u.notnull===1||h)&&(m.notnull=!0),h&&(m.unique=!0),(u.hidden===!0||u.hidden===1||Bo(l))&&(m.hidden=!0),u.default!=null&&u.default!==""&&(m.default=u.default),m});if(t.length===0){const l=o.filter(u=>u.unique).map(u=>u.field);l.length&&t.push(...l)}return{columns:o,pks:t}}function Cu(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function Ki(e){const t=[],n=new Set;for(const r of e)for(const i of Object.keys(r))n.has(i)||(n.add(i),t.push(i));return t.map(r=>{const i={field:r,label:Cu(r),type:Em(e.map(s=>s[r]))};return Bo(r)&&(i.hidden=!0),i})}function Em(e){const t=e.filter(n=>n!=null&&n!=="");return t.length===0?"string":t.every(n=>typeof n=="boolean")?"boolean":t.every(n=>typeof n=="number"&&Number.isFinite(n))?"number":t.every(n=>typeof n=="string"&&Tm(n))?"datetime":"string"}function Tm(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function Im(e){const t=new TextEncoder().encode(String(e));let n="";for(const r of t){const i=String.fromCharCode(r);/[A-Za-z0-9_-]/.test(i)?n+=i:n+="~"+r.toString(16).toUpperCase().padStart(2,"0")}return n}function Am(e,t){return!t||t.length===0?null:t.map(n=>Im(e[n])).join(",")}function Rm(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],n=[];for(const r of t){if(typeof r=="string"){n.push(r);continue}if(r&&typeof r=="object"&&typeof r.name=="string"){if(r.name==="_memory")continue;n.push(typeof r.route=="string"&&r.route?r.route:r.name)}}return n}function Om(e,t){const n=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],r=[];for(const i of n){if(typeof i=="string"){r.push({db:t,table:i,count:null,hidden:!1,pks:[]});continue}i&&typeof i=="object"&&typeof i.name=="string"&&r.push({db:t,table:i.name,count:typeof i.count=="number"?i.count:null,hidden:i.hidden===!0,pks:Array.isArray(i.primary_keys)?i.primary_keys:[]})}return r}async function Xt(e,t){let n;try{n=await e(t)}catch(i){const s=i?.message||"network error";throw new ot({error:`Couldn't reach ${t} (${s}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(n&&n.ok===!1){let i=null;try{i=await n.json()}catch{}throw new ot(i&&typeof i=="object"?i:{error:`HTTP ${n.status} for ${t}`},n.status)}const r=await n.json();if(r&&r.ok===!1)throw new ot(r,n.status);return r}async function _u(e,t){return Rm(await Xt(e,`${t}/-/databases.json`))}async function Ul(e,t,n){return Om(await Xt(e,`${t}/${encodeURIComponent(n)}.json`),n)}async function Vi(e,t){const n=Ln(t,{_extra:"column_details"}),r=await Xt(e,n);let{columns:i,pks:s}=zl(r),o=!!r&&r.column_details!=null,l=r?.count??null,u=r?.count_truncated===!0,h=r;if(i.length===0){const m=Ln(t,{_extra:"columns"}),g=await Xt(e,m);({columns:i,pks:s}=zl(g)),o=!!g&&g.column_details!=null,l=g?.count??l,u=g?.count_truncated===!0||u,h=g}return{columns:i,pks:s,count:l,countTruncated:u,typed:o,raw:h}}async function co(e,t){if(!t.db||!t.table)throw new Error("probeSingleTable: URL must name a database and a table");const n=await Vi(e,t);return{db:t.db,table:t.table,count:n.count,hidden:!1,pks:n.pks}}function Dm(e,t,n){const r=e&&typeof e=="object"?e:{},i=t&&n&&r.databases?.[t]?.tables?.[n]||t&&n&&r.databases?.[t]?.tables?.[n.toLowerCase()]||{},s=t&&r.databases?.[t]||{},o=x=>i[x]??s[x]??r[x],l={columns:{},units:{}};typeof i.sort=="string"&&(l.sort=i.sort),typeof i.sort_desc=="string"&&(l.sortDesc=i.sort_desc),typeof i.size=="number"&&(l.size=i.size),Array.isArray(i.sortable_columns)&&(l.sortableColumns=i.sortable_columns.slice()),typeof i.label_column=="string"&&(l.labelColumn=i.label_column),i.hidden===!0&&(l.hidden=!0),typeof i.description=="string"&&(l.description=i.description),typeof i.description_html=="string"&&(l.descriptionHtml=i.description_html);const u=o("source"),h=o("source_url"),m=o("license"),g=o("license_url"),w=o("about"),y=o("about_url");if(typeof u=="string"&&(l.source=u),typeof h=="string"&&(l.sourceUrl=h),typeof m=="string"&&(l.license=m),typeof g=="string"&&(l.licenseUrl=g),typeof w=="string"&&(l.about=w),typeof y=="string"&&(l.aboutUrl=y),i.columns&&typeof i.columns=="object")for(const[x,C]of Object.entries(i.columns))typeof C=="string"&&(l.columns[x]=C);if(i.units&&typeof i.units=="object")for(const[x,C]of Object.entries(i.units))typeof C=="string"&&(l.units[x]=C);return l}const Fl=new Map;async function Pm(e,t){let n=Fl.get(t);return n||(n=Xt(e,`${t}/-/metadata.json`).catch(()=>({})),Fl.set(t,n)),n}async function Jo(e,t){const n=await Pm(e,t.base);return Dm(n,t.db,t.table)}function Lm(e){const t={};return e.description!=null&&(t.description=e.description),e.descriptionHtml!=null&&(t.descriptionHtml=e.descriptionHtml),e.source!=null&&(t.source=e.source),e.sourceUrl!=null&&(t.sourceUrl=e.sourceUrl),e.license!=null&&(t.license=e.license),e.licenseUrl!=null&&(t.licenseUrl=e.licenseUrl),e.about!=null&&(t.about=e.about),e.aboutUrl!=null&&(t.aboutUrl=e.aboutUrl),Object.keys(t).length>0?t:void 0}function Zo(e,t){const n=e.sortableColumns!=null?new Set(e.sortableColumns):null,r=t.map(l=>{const u=e.columns[l.field],h=e.units[l.field],m=n?n.has(l.field):void 0;return u==null&&h==null&&m===void 0?l:{...l,...u!=null?{description:u}:{},...h!=null?{units:h}:{},...m!==void 0?{sortable:m}:{}}}),i=new Set(t.map(l=>l.field)),s={};e.sort&&i.has(e.sort)?(s.sortColumn=e.sort,s.sortAsc=!0):e.sortDesc&&i.has(e.sortDesc)&&(s.sortColumn=e.sortDesc,s.sortAsc=!1);const o=Lm(e);return o&&(s.info=o),e.labelColumn&&i.has(e.labelColumn)&&(s.labelColumn=e.labelColumn),{columns:r,patch:s}}function ea(e,t){if(t.length===0)return e;const n=new Map(Ki(t).map(r=>[r.field,r.type]));return e.map(r=>{if(r.type!=="string")return r;const i=n.get(r.field);return i&&i!=="string"?{...r,type:i}:r})}async function Dr(e,t,n={}){const r=n.maxRows??1e4,s={_size:n.pageSize??1e3,...n.extraParams||{}},o=Ln(t,s);let l=n.startUrl?Nl(n.startUrl,o)??n.startUrl:o;const u=[];let h=!1,m=!1,g=0,w,y;for(;l;){let x;try{x=await Xt(e,l)}catch(L){if(u.length===0&&!n.startUrl)throw L;w=L instanceof ot&&L.status?`stopped after ${u.length} rows: HTTP ${L.status}`:`stopped after ${u.length} rows: ${L?.message??String(L)}`,m=!0,y=l;break}const C=_m(x);u.push(...C.rows),h=h||C.truncated,g+=1,n.onProgress?.(u.length);const M=(C.nextUrl!=null?Nl(C.nextUrl,l):null)??(C.nextToken!=null?Cm(t,C.nextToken):null);M&&u.length<r&&C.rows.length>0?l=M:(m=M!=null&&C.rows.length>0,m&&(y=M??void 0),l=null)}return{rows:u,truncated:h,hasMore:m,pages:g,error:w,nextUrl:y}}function Mm(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function Su(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function Eu(e,t,n){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${n}`}async function Gi(e,t,n,r){let i;try{i=await e(t,{method:"POST",headers:Mm(r),body:JSON.stringify(n)})}catch(o){throw new ot({error:`Couldn't reach ${t} (${o?.message||"network error"}).`},0)}if(i&&i.ok===!1){let o=null;try{o=await i.json()}catch{}throw new ot(o&&typeof o=="object"?o:{error:`HTTP ${i.status} for ${t}`},i.status)}const s=await i.json();if(s&&s.ok===!1)throw new ot(s,i.status);return s}async function Bl(e,t,n,r={}){const i=await Gi(e,Su(t,"insert"),{rows:n,return:!0},r.token);return Array.isArray(i?.rows)?i.rows:[]}async function jm(e,t,n,r,i={}){const s=await Gi(e,Eu(t,n,"update"),{update:r,return:!0},i.token);return s&&typeof s.row=="object"&&s.row?s.row:Array.isArray(s?.rows)&&s.rows[0]?s.rows[0]:null}async function ql(e,t,n,r={}){await Gi(e,Eu(t,n,"delete"),{},r.token)}async function Nm(e,t,n,r={}){const i=await Gi(e,Su(t,"upsert"),{rows:n,return:!0},r.token);return Array.isArray(i?.rows)?i.rows:[]}async function zm(e,t){const n=Ln(t,{_extra:"primary_keys"}),r=await Xt(e,n);return Array.isArray(r?.primary_keys)?r.primary_keys:[]}async function Tu(e,t){try{const n=await Xt(e,Ln(t,{_extra:"count"}));return{count:typeof n?.count=="number"?n.count:null,truncated:n?.count_truncated===!0}}catch{return{count:null,truncated:!1}}}async function Iu(e,t,n={}){const r=n.token?{headers:{Authorization:`Bearer ${n.token}`}}:void 0;try{const i=await e(`${t}/-/versions.json`,r);if(i&&i.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${i.status}`};const s=await i.json(),o=s?.datasette?.version??s?.version??null;let l=null;try{l=(await(await e(`${t}/-/actor.json`,r)).json())?.actor??null}catch{}return{reachable:!0,version:o,actor:l,writable:!!(n.token&&l)}}catch(i){return{reachable:!1,version:null,actor:null,writable:!1,error:i?.message||"unreachable"}}}function Mn(e,t){return t?(n,r)=>{const i=(r??{}).headers??{};return e(n,{...r??{},headers:{...i,Authorization:`Bearer ${t}`}})}:e}const Oi=e=>e.replace(/^https?:\/\//,""),pr="datasette",Au=1e4,Ru=1e3,ta=1e4,Ou=60;function Du(e){e.ui.registerSettings(pr,"Datasette",[{key:"maxImportRows",label:"Max import rows per table",type:"number",default:Au,scope:"workspace",description:"Max rows imported per table. 0 = unlimited."},{key:"pageSize",label:"Page size",type:"number",default:Ru,scope:"workspace",description:"Rows requested per page hop while paging a table (the instance clamps this to its own max_returned_rows)."},{key:"connectMaxRows",label:"Connected table row cap",type:"number",default:ta,scope:"workspace",description:"Row cap for a single live connected table."},{key:"retryWaitSeconds",label:"Rate-limit retry wait (seconds)",type:"number",default:Ou,scope:"workspace",description:"Wait before resuming an import paused by the instance's rate limiting."}])}function pi(e,t,n){const r=typeof e=="number"?e:Number(e);return Number.isFinite(r)&&r>=n?Math.floor(r):t}async function Wi(e){const[t,n,r,i]=await Promise.all([e.settings.get(pr,"maxImportRows"),e.settings.get(pr,"pageSize"),e.settings.get(pr,"connectMaxRows"),e.settings.get(pr,"retryWaitSeconds")]);return{maxImportRows:pi(t,Au,0),pageSize:pi(n,Ru,1),connectMaxRows:pi(r,ta,1),retryWaitSeconds:pi(i,Ou,1)}}function Yi(e){return e===0?Number.MAX_SAFE_INTEGER:e}function Um(e,t,n){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(n)}`}function na(e,t,n,r){const i={...e.info??{}};return!i.source&&!i.sourceUrl&&(i.source=`${Oi(t)}/${n}/${r}`,i.sourceUrl=Um(t,n,r)),{...e,info:i}}function Pu(e,t){if(!e.has(t))return t;for(let n=2;;n++){const r=`${t} (${n})`;if(!e.has(r))return r}}async function ra(e,t,n,r={}){if(t.db&&t.table)return[await co(e,t)];const i=[];if(t.db){if(i.push(...await Ul(e,t.base,t.db)),r.skipPicker)return i.filter(l=>!l.hidden)}else{const l=await _u(e,t.base);if(l.length===0)return[];let u=l;if(l.length>1){const h=await Ti(l.map(m=>({name:m,size:null})),{title:`${n} from Datasette`,message:`Choose databases on ${Oi(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!h)return null;u=h.map(m=>l[m])}for(const h of u)try{i.push(...await Ul(e,t.base,h))}catch{}}if(i.length===0)return[];const s=new Set(i.map(l=>l.db)).size>1,o=await Ti(i.map(l=>({name:s?`${l.db}/${l.table}`:l.table,size:l.count,detail:s?void 0:l.db,hidden:l.hidden})),{title:`${n} from Datasette`,message:`Choose tables to ${n.toLowerCase()} from ${Oi(t.base)}.`,confirmLabel:n});return o?o.map(l=>i[l]):null}const Fm=e=>new Promise(t=>setTimeout(t,e));function Bm(e){const t=globalThis.__eda_resumeDelayMs;return typeof t=="number"&&t>=0?t:e*1e3}function ia(e,t,n,r){if(!(!e||!t))return{nextUrl:t,loadedRows:n,...r!=null?{totalCount:r}:{}}}const qm={id:"datasette-import",name:"Datasette Import",type:"importer",version:"0.3.0",description:"Import snapshot tables from any online Datasette instance, database, or single table by URL",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-import.ts"},Hm="https://latest.datasette.io/fixtures/facetable";function Km(e){Du(e),e.ui.registerTableButton({id:"datasette:refresh-snapshot",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this snapshot from the Datasette table it came from",visible:t=>t.origin?.type==="datasette"&&t.source?.type!=="datasette",onClick:(t,{tableId:n})=>Xm(t,n)}),e.ui.registerTableButton({id:"datasette:resume",label:"Resume import",icon:"sync_problem",tooltip:"Import was interrupted — click to resume from where it stopped",danger:!0,visible:t=>t.origin?.type==="datasette"&&t.importResume!=null,onClick:(t,{tableId:n})=>Zm(t,n)}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:n}){const r=n||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${Hm}`,"","Import from Datasette");r&&await Hl(t,r)}}),e.ui.registerDropHandler(async(t,n)=>{const r=t.dataTransfer?.getData("text/plain")||"";return Vm(r)?(t.preventDefault(),await Hl(n,r),!0):!1})}async function Hl(e,t){try{await sa(e,t)}catch(n){let r;n instanceof ot?r=n.status?`Datasette error (${n.status}): ${n.message}`:n.message:r=`Could not import: ${n?.message??n}`,await e.ui.dialogs.alert(r,"Datasette import failed")}}function Vm(e){try{const t=Ot(e);return!!(t.db&&t.table)}catch{return!1}}async function sa(e,t,n={}){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const i=await Wi(e),s=Ot(t),l=await ra(M=>e.backend.fetch(M),s,"Import",{skipPicker:n.skipTablePicker});if(l===null)return;if(l.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const u=[];let h=0;for(const M of l){const L={base:s.base,db:M.db,table:M.table,query:{}},F=await Gm(e,r,L);if(F.skipped){h+=1;continue}u.push({tableId:F.tableId,ref:L,overwrite:F.overwrite,knownCount:M.count})}let m=0,g=0;const w=[],y=[],x=[];for(const M of u)try{const L=await Wm(e,M.tableId,M.ref,M.overwrite,M.knownCount,n,i);m+=1,g+=L.rowCount,L.error?y.push(`${M.ref.db}/${M.ref.table} (${L.error})`):(L.hasMore||L.truncated)&&w.push(`${M.ref.db}/${M.ref.table}`)}catch(L){x.push(`${M.ref.db}/${M.ref.table}: ${L?.message??String(L)}`)}const C=Yi(i.maxImportRows),O=n.maxRows!=null?Math.min(n.maxRows,C):C;Qm(e,{imported:m,skipped:h,totalRows:g,capped:w,cap:O,partial:y,failed:x,requested:l.length})}async function Gm(e,t,n){const r=`${n.db}/${n.table}`,i={type:"datasette",url:`${n.base}/${encodeURIComponent(n.db)}/${encodeURIComponent(n.table)}`},s=(await e.store.tables.find()).filter(h=>h.workspaceId===t),o=s.find(h=>h.name.toLowerCase()===r.toLowerCase());let l=r;if(o){const h=await e.ui.dialogs.choice(`A table named "${r}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!h||h==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(h==="Overwrite")return await e.store.tables.patch(o.id,{origin:i,updatedAt:Date.now()}),{tableId:o.id,overwrite:!0};l=Pu(new Set(s.map(m=>m.name)),r)}const u=Ce();return await e.store.tables.insert({id:u,workspaceId:t,name:l,code:Le(`${n.db}-${n.table}`),columns:[],view:"table",origin:i,updatedAt:Date.now()}),{tableId:u,overwrite:!1}}async function Wm(e,t,n,r,i,s,o){const l=`${n.db}/${n.table}`,u=g=>e.backend.fetch(g),h=Yi(o.maxImportRows),m=s.maxRows!=null?Math.min(s.maxRows,h):h;At(t,!0);try{let g=[],w=i,y=!1,x=!1,C=[];try{const ye=await Vi(u,n);g=ye.columns,w==null&&(w=ye.count,y=ye.countTruncated),x=ye.typed,C=ye.pks??[]}catch{}if(w==null){const ye=await Tu(u,n);w=ye.count,y=ye.truncated}const O=w&&w>0&&(!y||m<=w)?Math.min(w,m):0,M=[];let L=!1,F=!1,V=0,W,G,q;for(;;){const ye=await Dr(u,n,{maxRows:Math.max(0,m-M.length),pageSize:o.pageSize,...q?{startUrl:q}:{},onProgress:$n=>{O>0&&At(t,!0,Math.min(1,(M.length+$n)/O))}});if(M.push(...ye.rows),L=L||ye.truncated,V+=ye.pages,F=ye.hasMore,W=ye.error,G=ye.nextUrl,!ye.error||!ye.nextUrl||M.length>=m)break;const He=`${o.retryWaitSeconds}s`;if(await e.ui.dialogs.choice(`Import of "${l}" paused after ${M.length.toLocaleString()} rows (${ye.error}). Datasette may be rate-limiting a large import. Wait ${He} and resume from where it stopped, or cancel and keep the rows imported so far (you can resume later from the table's footer)?`,[`Resume in ${He}`,"Cancel"],"Import paused — rate limited?")!==`Resume in ${He}`)break;At(t,!0),e.ui.dialogs.toast(`Resuming "${l}" in ${He}…`,{kind:"info",title:"Import paused"}),await Fm(Bm(o.retryWaitSeconds)),q=ye.nextUrl,W=void 0,G=void 0}let ie=g.length===0?Ki(M):x?g:ea(g,M),se={};try{const ye=await Jo(u,n),He=Zo(ye,ie);ie=He.columns,se=He.patch}catch{}se=na(se,n.base,n.db,n.table);const H=await e.store.tables.findOne(t),K=H?.columns??[],ce=K.length===0;let{columns:pe}=Bi(K,ie,H?.deletedColumns),Te=M;if(s.editColumns&&ce){const ye=await s.editColumns(pe,l);if(ye===null)return{name:l,rowCount:0,hasMore:!1,truncated:!1,pages:V,count:w,error:W};Te=Ym(Te,pe,ye),pe=ye}const ze=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t});const gt=ia(W,G,M.length,w),de=C.length>0&&H?.origin?{origin:{...H.origin,pks:C}}:{},Pe=ce?{columns:pe,...se,...de,importResume:gt,updatedAt:ze}:{columns:pe,...se.info?{info:se.info}:{},...de,importResume:gt,updatedAt:ze};await e.store.tables.patch(t,Pe);const Ae=e.store.rows(t);if(r){const ye=await Ae.find();await Ae.bulkRemove(ye.map(He=>He.id))}const et=Te.map(ye=>({id:Ce(),tableId:t,data:ye,updatedAt:ze}));return await Ae.bulkInsert(et),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:et.length}),{name:l,rowCount:et.length,hasMore:F,truncated:L,pages:V,count:w,error:W}}finally{At(t,!1)}}function Ym(e,t,n){const r=jo(t,n);return r?e.map(r):e}function Qm(e,t){const n=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,r=`${t.imported} table${t.imported===1?"":"s"}`,i=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${r} (${n});${i} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.partial.length>0){e.ui.dialogs.toast(`Imported ${r} (${n}).${i} ${t.partial.length} loaded partially (stopped early — the server may have rate-limited us): ${t.partial.join(", ")}. Use Refresh to fetch the rest.`,{kind:"warning",title:"Datasette import"});return}if(t.capped.length>0){const s=t.cap<Number.MAX_SAFE_INTEGER?` at ${t.cap.toLocaleString()}`:"";e.ui.dialogs.toast(`Imported ${r} (${n}).${i} ${t.capped.length} capped${s} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${r} (${n}) from Datasette.${i}`,{kind:"success",title:"Datasette import"})}async function Xm(e,t){const n=await e.store.tables.findOne(t);if(!(!n?.origin?.url||n.origin.type!=="datasette"))try{const r=await Wi(e);await Jm(e,n,r)}catch(r){const i=r instanceof ot?r.message:r?.message??String(r);e.ui.dialogs.toast(`Refresh failed: ${i}`,{kind:"error",title:"Refresh"})}}async function Jm(e,t,n){const r=Ot(t.origin.url),i=m=>e.backend.fetch(m),s=Yi(n.maxImportRows);At(t.id,!0);let o,l=[];try{let m=[],g=null,w=!1,y=!1;try{const de=await Vi(i,r);m=de.columns,g=de.count,w=de.countTruncated,y=de.typed}catch{}if(g==null){const de=await Tu(i,r);g=de.count,w=de.truncated}const x=g&&g>0&&(!w||s<=g)?Math.min(g,s):0,{rows:C,hasMore:O,truncated:M,error:L,nextUrl:F}=await Dr(i,r,{maxRows:s,pageSize:n.pageSize,onProgress:de=>{x>0&&At(t.id,!0,Math.min(1,de/x))}});let V=m.length===0?Ki(C):y?m:ea(m,C),W={};try{const de=await Jo(i,r),Pe=Zo(de,V);V=Pe.columns,W=Pe.patch}catch{}W=na(W,r.base,r.db,r.table);const G=t.columns.length===0,q=Bi(t.columns,V,t.deletedColumns);l=q.newFields;const Y=Date.now(),ie=ia(L,F,C.length,g),se=G?{columns:q.columns,...W,importResume:ie,updatedAt:Y}:{columns:q.columns,...W.info?{info:W.info}:{},importResume:ie,updatedAt:Y};await e.store.tables.patch(t.id,se);const H=t.origin?.pks??[],K=new Set(V.map(de=>de.field)),ce=t.columns.map(de=>de.field).filter(de=>!K.has(de)&&!H.includes(de)),pe=(t.deletedColumns??[]).filter(de=>K.has(de)),Te=e.store.rows(t.id),ze=await Te.find(),{data:gt}=bu({oldRows:ze.map(de=>({data:de.data})),freshRows:C,pks:H,userAddedFields:ce,deletedRemoteFields:pe});await Te.bulkRemove(ze.map(de=>de.id)),await Te.bulkInsert(gt.map(de=>({id:Ce(),tableId:t.id,data:de,updatedAt:Y}))),o={rowCount:gt.length,hasMore:O,truncated:M,error:L}}finally{At(t.id,!1)}const u=[];if(o.error)u.push(`partial (${o.error})`);else if(o.hasMore||o.truncated){const m=s<Number.MAX_SAFE_INTEGER?` at ${s.toLocaleString()}`:"";u.push(`capped${m}`)}l.length>0&&u.push(`${l.length} new column${l.length===1?"":"s"}`);const h=u.length?` — ${u.join(", ")}`:"";e.ui.dialogs.toast(`Refreshed ${o.rowCount} rows from ${r.db}/${r.table}${h}.`,{kind:o.error||o.hasMore||o.truncated||l.length>0?"warning":"success",title:"Refresh"}),l.length>0&&eg(t.id,r,l)}async function Zm(e,t){const n=await e.store.tables.findOne(t),r=n?.importResume;if(!n||!n.origin?.url||!r)return;const i=await Wi(e),s=Yi(i.maxImportRows),o=Ot(n.origin.url),l=x=>e.backend.fetch(x),u=r.loadedRows,h=r.totalCount??null,m=h&&h>0?Math.min(h,s):0;At(t,!0,m>0?Math.min(1,u/m):void 0);let g=0,w;try{const x=await Dr(l,o,{startUrl:r.nextUrl,maxRows:Math.max(0,s-u),pageSize:i.pageSize,onProgress:M=>{m>0&&At(t,!0,Math.min(1,(u+M)/m))}});g=x.rows.length;const C=Date.now();await e.store.rows(t).bulkInsert(x.rows.map(M=>({id:Ce(),tableId:t,data:M,updatedAt:C}))),w={error:x.error,nextUrl:x.nextUrl};const O=ia(x.error,x.nextUrl,u+g,h);await e.store.tables.patch(t,{importResume:O,updatedAt:C})}catch(x){const C=x instanceof ot?x.message:x?.message??String(x);e.ui.dialogs.toast(`Couldn't resume ${o.db}/${o.table}: ${C}. Try again later.`,{kind:"error",title:"Resume import"});return}finally{At(t,!1)}const y=u+g;w.error?e.ui.dialogs.toast(`Resumed ${o.db}/${o.table}: +${g} rows (${y} total) — interrupted again (${w.error}). Resume to continue.`,{kind:"warning",title:"Resume import"}):e.ui.dialogs.toast(`Finished ${o.db}/${o.table}: +${g} rows (${y} total).`,{kind:"success",title:"Resume import"})}function eg(e,t,n){const r=n.join(", "),i=n.length!==1,s=`Refreshing ${t.db}/${t.table} revealed ${n.length} new column${i?"s":""}: ${r}. Review, reorder or hide ${i?"them":"it"} here.`;document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:e,notice:s}}))}const tg=Object.freeze(Object.defineProperty({__proto__:null,importDatasette:sa,init:Km,meta:qm},Symbol.toStringTag,{value:"Module"}));var ng=Object.defineProperty,rg=Object.getOwnPropertyDescriptor,Pr=(e,t,n,r)=>{for(var i=r>1?void 0:r?rg(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&ng(t,n,i),i};const ig="https://latest.datasette.io/ephemeral";let vt=class extends ve{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=async e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const n=this.token.trim();if(this.onConnect){this.status="Checking…",this.statusKind="busy";try{await this.onConnect(t,n)}catch(r){this.status=r?.message??String(r),this.statusKind="err";return}}this.finish({url:t,token:n})}}connectedCallback(){super.connectedCallback(),vt.instance=this}disconnectedCallback(){super.disconnectedCallback(),vt.instance===this&&(vt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pt(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,this.onConnect=e.onConnect,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return k`
      <dialog @cancel=${this.onCancel} @keydown=${ft}>
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
                placeholder="e.g. ${ig}"
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
    `}};vt.instance=null;vt.styles=[ht,xe`
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
    `];Pr([U()],vt.prototype,"url",2);Pr([U()],vt.prototype,"token",2);Pr([U()],vt.prototype,"status",2);Pr([U()],vt.prototype,"statusKind",2);vt=Pr([Se("datasette-connect-dialog")],vt);class sg extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function Lu(e){return`datasette:token:${e}`}function og(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}function ag(e,t,n){const r=e.source,i=r?.config??{},s={base:i.base,db:i.db,table:i.table,query:{}},o=Array.isArray(i.pks)&&i.pks.length>0?i.pks:["rowid"],l=r?.writable===!0,u=i.maxRows;let h=null;function m(){return u!=null?Promise.resolve(u):(h||(h=n?Wi(n).then(q=>q.connectMaxRows):Promise.resolve(ta)),h)}const g=i.pollIntervalMs??0,w=(q,Y)=>t.backend.fetch(q,Y);async function y(){const Y=(await t.settings.findOne(Lu(i.base)))?.value;return typeof Y=="string"&&Y.length>0?Y:void 0}const x=async(q,Y)=>Mn(w,await y())(q,Y);function C(q){return{id:Am(q,o)??Ce(),tableId:e.id,data:q,updatedAt:Date.now()}}function O(q){if(!l)throw new sg(q)}function M(q){const Y={};for(const[ie,se]of Object.entries(q))o.includes(ie)||(Y[ie]=se);return Y}const L=new Set;let F=[],V=!1,W=null;function G(){return W||(W=(async()=>{try{const{rows:q}=await Dr(x,s,{maxRows:await m()});F=q.map(C),V=!0;for(const Y of L)Y(F);return F}finally{W=null}})(),W)}return{async find(q){const Y=V?F:await G();return!q||Object.keys(q).length===0?Y:Y.filter(ie=>og(ie,q))},async findOne(q){return(V?F:await G()).find(ie=>ie.id===q)??null},async insert(q){O("insert");const[Y]=await Bl(x,s,[q.data]),ie=C(Y??q.data);return t.events.emit("row:created",{tableId:e.id,row:ie}),G(),ie},async bulkInsert(q){if(q.length===0)return[];O("insert");const Y=await Bl(x,s,q.map(se=>se.data)),ie=(Y.length?Y:q.map(se=>se.data)).map(C);return G(),ie},async upsert(q){O("upsert");const[Y]=await Nm(x,s,[q.data]),ie=C(Y??q.data);return G(),ie},async patch(q,Y){O("update");const ie=Y.data,se=M(ie??{}),H=await jm(x,s,q,se),K=C(H??{...ie??{}});return t.events.emit("row:updated",{tableId:e.id,row:K,prev:K}),G(),K},async remove(q){O("delete"),await ql(x,s,q),t.events.emit("row:deleted",{tableId:e.id,rowId:q}),G()},async bulkRemove(q){if(q.length!==0){O("delete");for(const Y of q)await ql(x,s,Y);G()}},subscribe(q){L.add(q),V?q(F):G();let Y=null;return g>0&&(Y=setInterval(()=>void G(),g)),()=>{L.delete(q),Y&&clearInterval(Y)}},async refresh(){await G()}}}const lg='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',cg={id:"datasette-connect",name:"Datasette Connect",type:"source",version:"0.3.0",description:"Connect a live, editable table on any Datasette instance — rows are never stored locally",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-connect.ts"};function ug(e){Du(e),e.ui.registerConnector({id:"datasette",label:"Datasette",icon:lg,order:10,description:"A live, editable table on any Datasette instance",connect:t=>hg(t)}),e.ui.registerTableButton({id:"datasette:refresh-live",label:"Refresh",icon:"refresh",tooltip:"Re-read this live table from its Datasette instance",visible:t=>t.source?.type==="datasette",onClick:(t,{tableId:n})=>dg(t,n)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:(t,n)=>ag(t,n,e)})}async function dg(e,t){if((await e.store.tables.findOne(t))?.source?.type==="datasette")try{const r=e.store.rows(t);typeof r.refresh=="function"&&await r.refresh();const i=await r.find();e.ui.dialogs.toast(`Reloaded ${i.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}catch(r){const i=r instanceof ot?r.message:r?.message??String(r);e.ui.dialogs.toast(`Refresh failed: ${i}`,{kind:"error",title:"Refresh"})}}async function hg(e){const t=vt.instance??fg(),n=(i,s)=>e.backend.fetch(i,s),r=await t.open({initialUrl:"https://datasette.io",async onTest(i,s){const o=Ot(i),l=await Iu(n,o.base,{token:s||void 0});if(o.db&&o.table){await co(Mn(n,s||void 0),o);const h=l.version?` (Datasette ${l.version})`:"";return l.writable?`Reachable${h} — table found, signed in, read-write.`:`Reachable${h} — table found, read-only (no token / not authenticated).`}if(!l.reachable)return`Unreachable: ${l.error??"no response"}`;const u=l.version?` (Datasette ${l.version})`:"";return l.writable?`Reachable${u} — signed in, read-write.`:`Reachable${u} — read-only (no token / not authenticated).`},async onConnect(i,s){const o=Ot(i);o.db&&o.table&&await co(Mn(n,s||void 0),o)}});if(r)try{await Mu(e,r.url,r.token)}catch(i){const s=i instanceof ot?i.message:i?.message??String(i);await e.ui.dialogs.alert(s,"Connect Datasette failed")}}function fg(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function Mu(e,t,n){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const i=Ot(t),s=(g,w)=>e.backend.fetch(g,w),o=Mn(s,n||void 0),l=await Iu(s,i.base,{token:n||void 0});n&&await e.store.settings.upsert({name:Lu(i.base),value:n});let u;try{u=await ra(o,i,"Connect")}catch(g){const w=g instanceof ot?g.message:g?.message??String(g);throw new Error(`Couldn't read tables from ${Oi(i.base)}: ${w}`)}if(u===null)return;if(u.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const h=[];for(const g of u){const w=await pg(e,r,i.base,g,l.writable,n);w!==null&&h.push({tableId:w,c:g})}if(h.length===0)return;const m=l.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${h.length} live table${h.length===1?"":"s"} from Datasette (${m}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:g,c:w}of h)mg(e,g,i.base,w,n)}async function pg(e,t,n,r,i,s){const o=(await e.store.tables.find()).filter(w=>w.workspaceId===t);let l=`${r.db}/${r.table}`,u=o.find(w=>{const y=w.source?.config;return w.source?.type==="datasette"&&y?.base===n&&y?.db===r.db&&y?.table===r.table});if(!u){const w=o.find(y=>y.name.toLowerCase()===l.toLowerCase());if(w){const y=await e.ui.dialogs.choice(`A table named "${l}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Connect — table already exists");if(!y||y==="Skip")return null;y==="Overwrite"?u=w:l=Pu(new Set(o.map(x=>x.name)),l)}}let h=r.pks??[];if(h.length===0){const w=Mn((y,x)=>e.backend.fetch(y,x),s||void 0);try{h=await zm(w,{base:n,db:r.db,table:r.table,query:{}})}catch{h=[]}}const m=u?.id??Ce(),g={...u??{},id:m,workspaceId:t,name:l,code:Le(`${r.db}-${r.table}`),columns:u?.columns??[],view:u?.view??"table",source:{type:"datasette",writable:i,config:{base:n,db:r.db,table:r.table,pks:h}},updatedAt:Date.now()};return u?await e.store.tables.upsert(g):await e.store.tables.insert(g),m}async function mg(e,t,n,r,i){const s={base:n,db:r.db,table:r.table,query:{}},o=Mn((l,u)=>e.backend.fetch(l,u),i||void 0);try{let l=[],u=!1;try{const C=await Vi(o,s);l=C.columns,u=C.typed}catch{}const{rows:h}=await Dr(o,s,{maxRows:50,pageSize:50}),m=l.length===0?Ki(h):u?l:ea(l,h);if(m.length===0)return;const g=await e.store.tables.findOne(t);if(!g)return;const w=g.source?.config?.pks??[];let y=m.map(C=>w.includes(C.field)?{...C,unique:!0,notnull:!0}:C),x={};try{const C=await Jo(o,s),O=Zo(C,y);y=O.columns,x=O.patch}catch{}x=na(x,s.base,r.db,r.table),await e.store.tables.patch(t,{columns:y,...x,updatedAt:Date.now()})}catch{}}const gg=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:Mu,init:ug,meta:cg},Symbol.toStringTag,{value:"Module"})),bg={id:"url-source",name:"URL Reference",type:"source",version:"0.1.0",description:'Backs a table with a live read-only fetch of a plain CSV or JSON URL — a "reference" table whose rows are never persisted locally.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/url-source.ts"};function wg(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"url",create:ju}),e.ui.registerTableButton({id:"url-source:refresh",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this reference from its source URL",visible:t=>t.source?.type==="url",onClick:async(t,{tableId:n})=>{try{const r=t.store.rows(n);typeof r.refresh=="function"&&await r.refresh(),t.ui.dialogs.toast("Reference refreshed.",{kind:"success",title:"Refresh"})}catch(r){t.ui.dialogs.toast(`Refresh failed: ${r.message}`,{kind:"error",title:"Refresh"})}}})}class fn extends Error{constructor(t){super(`This is a reference (read-only) table — ${t} is not permitted. Import a copy to edit.`),this.name="ReadOnlyReferenceError"}}function yg(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}const Kl=5e4;function vg(e){return e.ok===!0&&Array.isArray(e.rows)}function $g(e,t){if(typeof e!="object"||e===null||Array.isArray(e))return null;const n=e;let r;try{r=new URL(t)}catch{return null}for(const i of["next_url","nextUrl","next"]){const s=n[i];if(typeof s!="string")continue;const o=s.trim();if(o!==""){if(/^(https?:\/\/|[/?])/i.test(o))try{const l=new URL(o,t);if(l.origin!==r.origin)continue;return l.toString()}catch{continue}if(i==="next"&&vg(n))return`${r.origin}${r.pathname}?_next=${encodeURIComponent(o)}`}}return null}function xg(e){const t=n=>typeof n=="object"&&n!==null&&!Array.isArray(n);if(Array.isArray(e))return e.filter(t);if(t(e)){for(const n of["rows","records","data"]){const r=e[n];if(Array.isArray(r))return r.filter(t)}for(const n of Object.values(e))if(Array.isArray(n))return n.filter(t)}return[]}function ju(e,t){const n=e.source?.config??{},r=typeof n.url=="string"?n.url:"",i=n.format==="json"?"json":"csv",s=new Set;let o=[],l=!1,u=null;function h(x){return x.map((C,O)=>({id:`url:${O}`,tableId:e.id,data:C,updatedAt:0}))}async function m(x){let C;try{C=await t.backend.fetch(x)}catch(O){throw new Error(`Could not reach ${r}: ${O?.message??String(O)}`)}if(!C.ok)throw new Error(`Could not load ${r}: HTTP ${C.status} ${C.statusText}`);try{return await Qc(C)}catch(O){throw new Error(`Could not read response from ${r}: ${O?.message??String(O)}`)}}async function g(x){const C=Ro(x);let O=await m(C);if(Wc(O)){const M=Yc(C);M&&(O=await m(M))}try{if(i==="json"){const M=JSON.parse(O);return{records:xg(M),nextUrl:$g(M,C)}}return{records:Un(O).rows,nextUrl:null}}catch(M){throw new Error(`Could not parse ${i.toUpperCase()} from ${r}: ${M?.message??String(M)}`)}}async function w(){if(!r)throw new Error("This reference table has no URL configured.");const x=[];let C=r;const O=new Set;for(;C&&x.length<Kl&&!O.has(C);){O.add(C);const M=await g(C);x.push(...M.records),C=M.records.length>0?M.nextUrl:null}return x.slice(0,Kl)}function y(){return u||(u=(async()=>{try{const x=await w();o=h(x),l=!0;for(const C of s)C(o);return o}finally{u=null}})(),u)}return{async find(x){const C=l?o:await y();return!x||Object.keys(x).length===0?C:C.filter(O=>yg(O,x))},async findOne(x){return(l?o:await y()).find(O=>O.id===x)??null},async insert(){throw new fn("insert")},async bulkInsert(){throw new fn("insert")},async upsert(){throw new fn("upsert")},async patch(){throw new fn("update")},async remove(){throw new fn("delete")},async bulkRemove(){throw new fn("delete")},subscribe(x){return s.add(x),l?x(o):y(),()=>{s.delete(x)}},async refresh(){l=!1,o=[],await y()}}}const kg=Object.freeze(Object.defineProperty({__proto__:null,ReadOnlyReferenceError:fn,createUrlCollection:ju,init:wg,meta:bg},Symbol.toStringTag,{value:"Module"}));function Ue(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),`"${t||"_"}"`}function Vl(e){return`'${e.replace(/'/g,"''")}'`}function Gl(e,t){const n=e.columns.find(r=>r.field===t);return n?n.from.kind==="script"?{expr:null,computed:!0}:{expr:`${Ue(n.from.alias)}.${Ue(n.from.field)}`,computed:!1}:null}function Cg(e,t){const n=e.sources[0];if(!n)return`-- projection has no source table; nothing to select.
`;const r=t.limitStyle??"limit",i=e.limit!=null&&e.limit>0?Math.floor(e.limit):null,s=[];for(const y of e.columns)y.from.kind==="source"?s.push(`  ${Ue(y.from.alias)}.${Ue(y.from.field)} AS ${Ue(y.field)}`):s.push(`  NULL AS ${Ue(y.field)} -- computed in-app by a script; no SQL equivalent`);s.length===0&&s.push("  *");const l=[`SELECT${i!=null&&r==="top"?` TOP ${i}`:""}`,s.join(`,
`)],u=t.tableNames[n.alias]??n.tableName;l.push(`FROM ${Ue(u)} AS ${Ue(n.alias)}`);for(const y of e.sources.slice(1)){const x=t.tableNames[y.alias]??y.tableName;if(!y.join){l.push(`CROSS JOIN ${Ue(x)} AS ${Ue(y.alias)}`);continue}const C=y.join.type==="inner"?"INNER JOIN":"LEFT JOIN",O=y.join.on.map(M=>`${Ue(y.alias)}.${Ue(M.field)} = ${Ue(M.eqAlias)}.${Ue(M.eqField)}`).join(" AND ");l.push(`${C} ${Ue(x)} AS ${Ue(y.alias)} ON ${O||"1 = 1"}`)}const h=[],m=[];for(const[y,x]of Object.entries(e.filters??{})){if(!x)continue;const C=Gl(e,y);if(C){if(C.computed){m.push(`-- filter on ${Ue(y)} (${Vl(x)}) applies to a computed column; enforced in-app only`);continue}h.push(`LOWER(${C.expr}) LIKE ${Vl(`%${x.toLowerCase()}%`)}`)}}h.length>0&&l.push(`WHERE ${h.join(`
  AND `)}`);const g=(t.orderBy??[]).map(y=>{const x=Gl(e,y.field);return!x||x.computed?null:`${x.expr} ${y.asc?"ASC":"DESC"}`}).filter(y=>y!==null);g.length>0&&l.push(`ORDER BY ${g.join(", ")}`);const w=i==null?"":r==="limit"?`
LIMIT ${i}`:r==="fetch"?`
FETCH FIRST ${i} ROWS ONLY`:"";return`${l.join(`
`)}${w};
${m.length>0?`${m.join(`
`)}
`:""}`}const _g={id:"sql-export",name:"SQL Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-export.ts"};function Sg(){}async function Nu(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const n=(await e.store.tables.find()).filter(l=>l.workspaceId===t),r=n.filter(l=>l.source?.type!=="projection"),i=n.filter(l=>l.source?.type==="projection"),s=Eg(n),o=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}${i.length>0?` (+ ${i.length} projection${i.length===1?"":"s"})`:""}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const l of r){const u=await e.store.rows(l.id).find();o.push(Fu(l,u),"")}if(o.push("COMMIT;",""),i.length>0){o.push("","-- Projections (virtual tables). Each is the query behind one, reading the","-- tables above. Run them as-is, or wrap one in CREATE VIEW to keep it.","");for(const l of i)o.push(`-- projection: ${l.name}`,oa(l,s)??"","")}return o.join(`
`)}function Eg(e){const t=new Map;for(const n of e)t.has(n.name)||t.set(n.name,jn(n.code||n.name));return n=>t.get(n)??jn(Le(n))}function zu(e,t){const n=Uu(e);return n||["-- easyDBAccess table export",`-- table:    ${e.name}`,`-- exported: ${new Date().toISOString()}`,"","BEGIN;","",Fu(e,t),"","COMMIT;",""].join(`
`)}function Uu(e,t){const n=oa(e,t);return n===null?null:["-- easyDBAccess projection export",`-- projection: ${e.name}`,`-- exported:   ${new Date().toISOString()}`,"--","-- A projection is a derived (virtual) table: this is the query behind it,","-- reading the source tables by name.","-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';","-- before executing. For SQL Server / HANA, replace the trailing LIMIT n","-- with SELECT TOP n.","",n].join(`
`)}function oa(e,t){if(e.source?.type!=="projection")return null;const n=e.source.config;if(!n||!Array.isArray(n.sources))return null;const r=t??(o=>jn(Le(o))),i={};for(const o of n.sources)i[o.alias]=r(o.tableName);const s=n.sources.length>0&&e.sortBy&&e.sortBy.length>0?e.sortBy:e.sortColumn?[{field:e.sortColumn,asc:e.sortAsc??!0}]:void 0;return Cg(n,{tableNames:i,limitStyle:"limit",...s?{orderBy:s}:{}})}function Fu(e,t){const n=jn(e.code||e.name||`table_${e.id}`),r=['  "__id" TEXT PRIMARY KEY',...e.columns.map(s=>`  ${Tg(s)}`)],i=[`DROP TABLE IF EXISTS "${n}";`,`CREATE TABLE "${n}" (`,r.join(`,
`),");"];if(t.length>0){const o=["__id",...e.columns.map(l=>l.field)].map(l=>`"${jn(l)}"`).join(", ");for(const l of t){const u=[Wl(l.id),...e.columns.map(h=>Wl(l.data[h.field],h.type))];i.push(`INSERT INTO "${n}" (${o}) VALUES (${u.join(", ")});`)}}return i.join(`
`)}function Tg(e){const t=[`"${jn(e.field)}"`,Ig(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function Ig(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function Wl(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const n=Ag(e);return n===null?"NULL":mi(n)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?mi(e.toISOString()):mi(typeof e=="string"?e:JSON.stringify(e))}function Ag(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?Yl(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const n=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(n)return`${n[1]}${n[2]}${n[3]}`;const r=new Date(t);return Number.isFinite(r.getTime())?Yl(r):null}return null}function Yl(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),n=String(e.getUTCMonth()+1).padStart(2,"0"),r=String(e.getUTCDate()).padStart(2,"0");return`${t}${n}${r}`}function mi(e){return`'${e.replace(/'/g,"''")}'`}function jn(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const Rg=Object.freeze(Object.defineProperty({__proto__:null,init:Sg,meta:_g,projectionSelectBody:oa,projectionSelectFor:Uu,serializeTableAsSql:zu,serializeWorkspaceAsSql:Nu},Symbol.toStringTag,{value:"Module"})),Bu=/\$((?:input|filter)[.:])?([A-Za-z_][A-Za-z0-9_]*)/g;function Ql(...e){const t=new Set;for(const n of e)if(n)for(const r of n.matchAll(Bu))t.add(r[2]);return[...t]}const aa=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Rn=e=>aa(e).replace(/"/g,"&quot;").replace(/'/g,"&#39;");function Og(e){return typeof e=="boolean"?e:typeof e=="number"?e!==0:typeof e=="string"?["true","1","yes","y","t","on"].includes(e.trim().toLowerCase()):!1}function Dg(e,t,n,r,i){const s=r?.type??"string",o=aa(r?.label||e),l=`class="eda-input" data-eda-row="${Rn(n)}" data-eda-field="${Rn(e)}" data-eda-type="${Rn(s)}"`,u=i?" disabled":"";let h;if(s==="boolean")h=`<input type="checkbox" ${l}${Og(t)?" checked":""}${u} />`;else{const m=s==="number"?"number":"text",g=t==null?"":Rn(String(t));h=`<input type="${m}" ${l} value="${g}"${u} />`}return`<label class="eda-input-field" title="${o}">${h}<span class="eda-input-label">${o}</span></label>`}function Pg(e,t){if(t==null||t==="")return"";const n=String(t),r=Rn(e),i=Rn(n);return`<button type="button" class="eda-filter-pill" data-eda-filter-field="${r}" data-eda-filter-value="${i}" title="Filter by ${r}: ${i}">${aa(n)}</button>`}function Lg(e,t,n,r={}){return e.replace(Bu,(i,s,o)=>{const l=n[o];if(!l)return"";const u=t.data[l];if(!s)return u==null?"":String(u);if(s.startsWith("filter"))return Pg(l,u);const h=r.columns?.get(l),m=r.readonly===!0||!!h?.script?.trim();return Dg(l,u,t.id,h,m)})}function Xl(e){return e==null||e===""}function Mg(e,t){let n=null;for(const r of t){if(!r.script?.trim())continue;const i=Fo(r.script,e.data);n??={...e.data},n[r.field]=i.ok?i.value:`⚠ ${i.label}`}return n?{...e,data:n}:e}function jg(e,t){return t.some(n=>n.script?.trim())?e.map(n=>Mg(n,t)):e}function Jl(e,t){const n=Object.entries(t).filter(([,r])=>r!=null&&String(r).trim()!=="");return n.length===0?e:e.filter(r=>n.every(([i,s])=>Ii(r.data[i],s)))}function qu(e,t){return e.exact===!0&&!e.negate&&e.term.toLowerCase()===t.toLowerCase()}function Ng(e,t){const n=Or(e??"");return n.some(r=>qu(r,t))||n.push({term:t,negate:!1,exact:!0}),Cr(n)}function zg(e,t){const n=Or(e??"").filter(r=>!qu(r,t));return Cr(n)}function Ug(e,t,n=!0){if(!t)return e;const r=n?1:-1;return[...e].sort((i,s)=>{const o=i.data[t],l=s.data[t],u=Xl(o),h=Xl(l);if(u||h)return u===h?0:u?1:-1;const m=Number(o),g=Number(l);return!Number.isNaN(m)&&!Number.isNaN(g)?(m-g)*r:String(o).localeCompare(String(l),void 0,{numeric:!0,sensitivity:"base"})*r})}function Hu(e,t){const n=Jl(e,t.filters??{}),r=Jl(n,t.pillFilters??{});return Ug(r,t.sortColumn,t.sortAsc??!0)}function Fg(e){return!!e&&e.trim().length>0}function Bg(e,t){return t==="raw"||t==="structure"?e.columns:e.columns.filter(n=>n.hidden!==!0)}function qg(e,t){return t==="raw"||t==="structure"?e:{...e,columns:Bg(e,t)}}function Hg(e,t,n){return n==="structure"?[]:n==="raw"?t:Hu(t,{filters:e.filters??{},sortColumn:e.sortColumn,sortAsc:e.sortAsc})}function la(e,t){const n=e.columns.map(i=>i.field),r=e.source!=null;return{name:e.name,title:e.title,columns:e.columns,view:e.view,windowGeometry:e.windowGeometry,sortColumn:e.sortColumn,sortAsc:e.sortAsc,filters:e.filters,labelColumn:e.labelColumn,deletedColumns:e.deletedColumns,info:e.info,source:e.source,origin:e.origin,rows:r?[]:t.map(i=>{const s={};for(const o of n)s[o]=i.data[o];return s})}}const Kg={id:"dump-export",name:"Dump Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file, and — per table — CSV/JSON/SQL with a Raw vs. Visible vs. Structure Only choice.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/dump-export.ts"};function Vg(e){e.ui.registerFooterButton({id:"export:menu",label:"Export",icon:"download",tooltip:"Export the current workspace (JSON or SQL)",onClick:async(t,n)=>{const r=t.workspaceId();if(!r)return;const{AnchoredMenu:i}=await ct(async()=>{const{AnchoredMenu:l}=await Promise.resolve().then(()=>kr);return{AnchoredMenu:l}},void 0),s=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await i.open(s,[{id:"json",label:"JSON dump (.db.json)",icon:"data_object"},{id:"sql",label:"SQL script (.sql)",icon:"storage"}]);if(o)try{if(o==="json"){const l=await Qi(t);await t.backend.saveFile(`workspace-${r}.db.json`,l,"application/json")}else if(o==="sql"){const l=await Nu(t);await t.backend.saveFile(`workspace-${r}.sql`,l,"application/sql")}}catch(l){t.ui.dialogs.toast(`Export failed: ${l.message}`,{kind:"error",title:"Export"})}}}),e.ui.registerTableButton({id:"table-export:menu",label:"Export",icon:"file_download",tooltip:"Export this table as CSV, JSON, or SQL",onClick:async(t,n)=>{const{AnchoredMenu:r}=await ct(async()=>{const{AnchoredMenu:h}=await Promise.resolve().then(()=>kr);return{AnchoredMenu:h}},void 0),i=n.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"csv",label:"CSV (.csv)",icon:"table_chart"},{id:"json",label:"JSON (.table.json)",icon:"data_object"},{id:"sql",label:"SQL (.sql)",icon:"storage"}]);if(!s)return;const o=await t.store.tables.findOne(n.tableId);if(!o)return;const l=await t.ui.dialogs.choice(`Export "${o.name}" as ${s.toUpperCase()} — which rows/columns?`,["Visible Data","Raw Data","Structure Only"],"Export table");if(!l)return;const u=l==="Visible Data"?"visible":l==="Raw Data"?"raw":"structure";try{const h=await t.store.rows(o.id).find(),m=qg(o,u),g=Hg(o,h,u),w=Le(o.code||o.name||"table"),y=u!=="structure"&&o.source!=null&&h.length===0;if(s==="csv")y&&t.ui.dialogs.toast(`"${o.name}" is a live table with no local rows — exporting column definitions only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${w}.csv`,Mo(m,g),"text/csv");else if(s==="json"){const x=JSON.stringify(la(m,g),null,2);await t.backend.saveFile(`${w}.table.json`,x,"application/json")}else s==="sql"&&(y&&t.ui.dialogs.toast(`"${o.name}" is a live table with no local rows — exporting the CREATE TABLE only.`,{kind:"warning",title:"Export"}),await t.backend.saveFile(`${w}.sql`,zu(m,g),"application/sql"))}catch(h){t.ui.dialogs.toast(`Export failed: ${h.message}`,{kind:"error",title:"Export"})}}})}async function Qi(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const n=(await e.store.tables.find()).filter(o=>o.workspaceId===t),r=(await e.store.viewTemplates.find()).filter(o=>o.workspaceId===t),i=(await e.store.viewInstances.find()).filter(o=>o.workspaceId===t),s={workspaceId:t,exportedAt:Date.now(),tables:[],viewTemplates:r,viewInstances:i};for(const o of n){const l=await e.store.rows(o.id).find();s.tables.push({name:o.name,columns:o.columns,rows:l.map(u=>u.data),...o.title?{title:o.title}:{},...o.windowGeometry?{windowGeometry:o.windowGeometry}:{},...o.sortColumn?{sortColumn:o.sortColumn,sortAsc:o.sortAsc??!0}:{},...o.filters?{filters:o.filters}:{},...o.labelColumn?{labelColumn:o.labelColumn}:{},...o.info?{info:o.info}:{},...o.deletedColumns?{deletedColumns:o.deletedColumns}:{},...o.readonly?{readonly:!0}:{},...o.source?{source:o.source}:{},...o.origin?{origin:o.origin}:{}})}return JSON.stringify(s,null,2)}const Gg=Object.freeze(Object.defineProperty({__proto__:null,init:Vg,meta:Kg,serializeWorkspace:Qi},Symbol.toStringTag,{value:"Module"})),Wg={id:"gist-sync",name:"Gist Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/gist-sync.ts"},Yg="gist:",Zl='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>';function Qg(e){e.ui.registerSettings("gist-sync","Gist Sync",[{key:"user",label:"GitHub user",type:"string",scope:"workspace",description:"GitHub username that owns the gist."},{key:"gist_id",label:"Gist ID",type:"string",scope:"workspace",description:"Leave empty to create a new gist on the first Push."},{key:"gist_token",label:"GitHub token (PAT)",type:"secret",scope:"user",description:'Personal access token with the "gist" scope. Stored on this device only (not synced).',help:'A classic token with the single "gist" scope is enough — nothing else is needed and nothing else should be granted. Give it an expiry you are happy with; the sync stops working when it lapses and you paste a new one here. Keep the value in the secrets store (General tab) and reference it, so it is never written into a synced setting.',helpUrl:"https://github.com/settings/tokens/new?scopes=gist&description=easyDBAccess",helpLinkLabel:"Create a token on GitHub"}]),e.ui.registerFooterButton({id:"gist-sync:menu",label:"Gist",icon:Zl,tooltip:"Gist sync — push, pull, share…",onClick:async(t,n)=>{const{AnchoredMenu:r}=await ct(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>kr);return{AnchoredMenu:o}},void 0),i=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"push",label:"Push",icon:"cloud_upload"},{id:"pull",label:"Pull",icon:"cloud_download"},{id:"share",label:"Share",icon:"share"},{id:"view",label:"View gist",icon:"open_in_new"}]);if(s)try{if(s==="push"||s==="pull"){const o=await r.open(i,[{id:"all",label:"Everything",icon:"sync"},{id:"data",label:"Data only (tables + rows)",icon:"table_rows"},{id:"settings",label:"Settings only (views + settings)",icon:"tune"}]);if(!o)return;const l=o;s==="push"?await nb(t,l):await Vu(t,l)}else s==="share"?await eb(t):s==="view"&&await tb(t)}catch(o){t.ui.dialogs.toast(`Gist ${s} failed: ${o.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerTableButton({id:"gist-sync:table",label:"Gist",icon:Zl,tooltip:"Gist sync for this table — push, pull, view file",onClick:async(t,n)=>{const{AnchoredMenu:r}=await ct(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>kr);return{AnchoredMenu:o}},void 0),i=n.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"push",label:"Push this table",icon:"cloud_upload"},{id:"pull",label:"Pull this table",icon:"cloud_download"},{id:"view",label:"View gist file",icon:"open_in_new"}]);if(s)try{s==="push"?await rb(t,n.tableId):s==="pull"?await ib(t,n.tableId):s==="view"&&await sb(t,n.tableId)}catch(o){t.ui.dialogs.toast(`Gist ${s} failed: ${o.message}`,{kind:"error",title:"Gist sync"})}}})}async function Xg(e){const t=new URLSearchParams(location.hash.replace(/^#/,"")).get("gist");if(!t)return;history.replaceState(null,"",location.pathname+location.search);let n;try{n=atob(t)}catch{return}const r=Jg(n);if(!r){await e.ui.dialogs.alert("The shared gist link is invalid.","Gist sync");return}await e.ui.dialogs.confirm(`Load shared workspace from gist ${r.gistId||"(new)"} (owner: ${r.user})?

This pulls its tables into the current workspace.`,"Gist sync")&&(await ca(e,r),await Vu(e))}async function Ku(e){const t=e.workspaceId();return`${Yg}${t??"default"}`}async function Lr(e){const[t,n,r]=await Promise.all([e.settings.get("gist-sync","user"),e.settings.get("gist-sync","gist_id"),e.settings.get("gist-sync","gist_token")]);if(t&&r)return{user:t,gistId:n??"",token:r};const s=(await e.store.settings.findOne(await Ku(e)))?.value;if(s?.user&&s?.token){const o={user:s.user,gistId:s.gistId??"",token:s.token};return await ca(e,o),o}return null}async function ca(e,t){await e.settings.set("gist-sync","user",t.user),await e.settings.set("gist-sync","gist_id",t.gistId),await e.settings.set("gist-sync","gist_token",t.token),await e.store.settings.upsert({name:await Ku(e),value:t})}function Jg(e){const t={};for(const n of e.split(";")){const r=n.indexOf("=");if(r<0)continue;const i=n.slice(0,r).trim(),s=n.slice(r+1).trim();i&&(t[i]=s)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function ua(e){const t=await Lr(e);return t||(e.ui.dialogs.toast("Add your GitHub user and token in Settings → Gist Sync, then try again.",{kind:"warning",title:"Gist sync"}),e.ui.openSettings(),null)}function Zg(e){return`user=${e.user};gist_id=${e.gistId};gist_token=${e.token}`}async function eb(e){const t=await Lr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("Configure a gist and Push first — there is nothing to share yet.","Gist sync");return}const r=`${location.origin+location.pathname}#gist=${encodeURIComponent(btoa(Zg(t)))}`,{GistShareDialog:i}=await ct(async()=>{const{GistShareDialog:s}=await import("./gist-share-dialog-Bu5ckDaP.js");return{GistShareDialog:s}},[]);await i.open(r)}async function tb(e){const t=await Lr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist configured yet — Push first.","Gist sync");return}window.open(`https://gist.github.com/${t.user}/${t.gistId}`,"_blank","noopener")}async function nb(e,t="all"){const n=await ua(e);if(!n)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const i=t!=="settings",s=t!=="data",o=(await e.store.tables.find()).filter(C=>C.workspaceId===r);if(i&&o.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const l=1e8,u=1e7,h={},m=[],g=[];if(i)for(const C of o){const O=C.source!=null?[]:await e.store.rows(C.id).find(),M=JSON.stringify(la(C,O),null,2),L=`${C.name} (${(M.length/1e6).toFixed(2)} MB)`;M.length>l?m.push(L):M.length>u&&g.push(L),h[`${Le(C.name)}.table.json`]={content:M}}if(m.length>0||g.length>0){const C=[];if(m.length>0&&C.push(`Over Gist's 100 MB per-file limit — GitHub will REJECT these:
${m.join(`
`)}`),g.length>0&&C.push(`Large (over 10 MB) — Gist sync will be slow and less reliable:
${g.join(`
`)}`),!await e.ui.dialogs.confirm(`${C.join(`

`)}

To reduce size: remove unnecessary columns, limit the number of rows, or mark the table no-persist/no-sync.

Push anyway?`,"Gist size warning"))return}if(s){const C=(await e.store.viewTemplates.find()).filter(L=>L.workspaceId===r),O=(await e.store.viewInstances.find()).filter(L=>L.workspaceId===r),M=(await e.store.settings.find()).map(L=>({name:L.name,value:L.value}));h["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1",viewTemplates:C,viewInstances:O,settings:M},null,2)}}let w;if(n.gistId){const C=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:h,description:`easyDBAccess workspace: ${r}`})});if(!C.ok)throw new Error(await _r(C));w=await C.json()}else{const C=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:h})});if(!C.ok)throw new Error(await _r(C));w=await C.json(),n.gistId=w.id,await ca(e,n)}const y=w.html_url??`https://gist.github.com/${n.user}/${w.id}`,x=t==="settings"?"settings":t==="data"?`${o.length} table${o.length===1?"":"s"} (data only)`:`${o.length} table${o.length===1?"":"s"}`;e.ui.dialogs.toast(`Pushed ${x}.  ${y}`,{kind:"success",title:"Gist sync"})}async function Vu(e,t="all"){const n=t!=="settings",r=t!=="data",i=await ua(e);if(!i||!i.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const s=e.workspaceId();if(!s)throw new Error("no active workspace");const o=await fetch(`https://api.github.com/gists/${i.gistId}`,{headers:{Authorization:`Bearer ${i.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)throw new Error(await _r(o));const l=await o.json(),u=Object.entries(l.files).filter(([L])=>L.endsWith(".table.json")&&!L.startsWith("_easydb"));if(n&&u.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const h=(await e.store.tables.find()).filter(L=>L.workspaceId===s),m=new Map(h.map(L=>[L.name.toLowerCase(),L]));let g=0;const w=[],y=new Map;if(n){const{TopProgress:L}=await ct(async()=>{const{TopProgress:V}=await import("./top-progress-R8G7Ru-A.js");return{TopProgress:V}},[]),F=L.begin("Pulling from gist…");try{for(const[V,[W,G]]of u.entries())try{const q=await Di(G),Y=JSON.parse(q);if(!Y.name||!Array.isArray(Y.columns))throw new Error("unexpected file shape (missing name/columns)");let ie;const se=m.get(Y.name.toLowerCase());if(se){if(ie=await e.store.tables.patch(se.id,{title:Y.title,columns:Y.columns,...uo(Y),updatedAt:Date.now()}),ie.source==null){const H=e.store.rows(se.id),K=await H.find();await H.bulkRemove(K.map(ce=>ce.id))}}else ie=await e.store.tables.insert({id:Ce(),workspaceId:s,name:Y.name,title:Y.title,code:Le(Y.name),columns:Y.columns,view:Y.view??"table",...uo(Y),updatedAt:Date.now()});if(ie.source==null){const H=(Y.rows??[]).map(K=>({id:Ce(),tableId:ie.id,data:K,updatedAt:Date.now()}));await e.store.rows(ie.id).bulkInsert(H)}y.set(Y.name,ie.id),g++}catch(q){w.push({file:W,error:q.message})}finally{F.fraction((V+1)/u.length)}}finally{F.done()}}let x=0,C="",O=null;const M=r?l.files["_easydb.workspace.json"]:void 0;if(M)try{const L=await Di(M),F=JSON.parse(L),V=F.viewTemplates??[],W=F.viewInstances??[],G=F.settings??[];O=new Set(W.map(Y=>Y.id));const q=await au(e.store.viewTemplates,s,V);for(const Y of W){let ie;if(Y.tableName&&(ie=y.get(Y.tableName)??m.get(Y.tableName)?.id),ie??=Y.tableId,!ie)continue;const se=q.get(Y.templateId)??Y.templateId;await e.store.viewInstances.upsert({...Y,workspaceId:s,tableId:ie,templateId:se}),x++}for(const Y of G)await e.store.settings.upsert(Y)}catch(L){C=`Workspace metadata import failed: ${L.message}`}if(w.length>0){const L=w.map(F=>`• ${F.file}: ${F.error}`).join(`
`);e.ui.dialogs.toast(`Pulled ${g} of ${u.length} tables. ${w.length} failed:
${L}${C?`
${C}`:""}`,{kind:"warning",title:"Gist sync"})}else{const L=x>0?` (+${x} views)`:"",F=t==="settings"?`Pulled settings${L}.`:`Pulled ${g} table${g===1?"":"s"}.${L}`;e.ui.dialogs.toast(F,{kind:"success",title:"Gist sync"}),C&&e.ui.dialogs.toast(C,{kind:"warning",title:"Gist sync"})}w.length===0&&await Gu(e,s,{tableNames:n?new Set([...y.keys()].map(L=>L.toLowerCase())):null,viewInstanceIds:O}),document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}function ec(e,t=8){const n=e.slice(0,t).map(i=>`• ${i}`),r=e.length-n.length;return[...n,...r>0?[`• …and ${r} more`]:[]].join(`
`)}async function Gu(e,t,n){const r=n.tableNames?(await e.store.tables.find()).filter(u=>u.workspaceId===t&&!n.tableNames.has(u.name.toLowerCase())):[],i=n.viewInstanceIds?(await e.store.viewInstances.find()).filter(u=>u.workspaceId===t&&!n.viewInstanceIds.has(u.id)):[];if(r.length===0&&i.length===0)return;const s=[];if(r.length>0&&s.push(`${r.length} table${r.length===1?"":"s"}:
`+ec(r.map(u=>u.name))),i.length>0&&s.push(`${i.length} view${i.length===1?"":"s"}:
`+ec(i.map(u=>u.name))),!await e.ui.dialogs.confirm(`The gist does not have these local objects:

${s.join(`

`)}

Delete them, so this workspace matches the gist? A table goes with its rows. Keep them if this is local work you have not pushed yet.`,"Delete objects missing from the pull?"))return;for(const u of i)await e.store.viewInstances.remove(u.id);const{deleteTable:l}=await ct(async()=>{const{deleteTable:u}=await Promise.resolve().then(()=>xw);return{deleteTable:u}},void 0);for(const u of r)await l(u.id);e.ui.dialogs.toast(`Deleted ${r.length} table${r.length===1?"":"s"} and ${i.length} view${i.length===1?"":"s"}.`,{kind:"success",title:"Gist sync"})}async function rb(e,t){const n=await ua(e);if(!n)return;if(!n.gistId){await e.ui.dialogs.alert("No gist yet — use the main Gist button to Push the whole workspace first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const i=r.source!=null?[]:await e.store.rows(t).find(),s=JSON.stringify(la(r,i),null,2),o={[`${Le(r.name)}.table.json`]:{content:s}},l=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:o})});if(!l.ok)throw new Error(await _r(l));e.ui.dialogs.toast(`Pushed "${r.name}" to gist.`,{kind:"success",title:"Gist sync"})}async function ib(e,t){const n=await Lr(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const i=`${Le(r.name)}.table.json`,s=await fetch(`https://api.github.com/gists/${n.gistId}`,{headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json"}});if(!s.ok)throw new Error(await _r(s));const l=(await s.json()).files[i];if(!l){await e.ui.dialogs.alert(`No file "${i}" in the gist for this table.`,"Gist sync");return}const u=await Di(l),h=JSON.parse(u);if(!h.name||!Array.isArray(h.columns))throw new Error("unexpected file shape (missing name/columns)");if((await e.store.tables.patch(t,{title:h.title,columns:h.columns,...uo(h),updatedAt:Date.now()})).source==null){const g=e.store.rows(t),w=await g.find();await g.bulkRemove(w.map(x=>x.id));const y=(h.rows??[]).map(x=>({id:Ce(),tableId:t,data:x,updatedAt:Date.now()}));await g.bulkInsert(y)}e.ui.dialogs.toast(`Pulled "${r.name}" from gist.`,{kind:"success",title:"Gist sync"})}async function sb(e,t){const n=await Lr(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const r=await e.store.tables.findOne(t);if(!r)return;const i=`file-${Le(r.name)}-table-json`;window.open(`https://gist.github.com/${n.user}/${n.gistId}#${i}`,"_blank","noopener")}function uo(e){const t={};return e.view!==void 0&&(t.view=e.view),e.windowGeometry&&(t.windowGeometry=e.windowGeometry),e.sortColumn!==void 0&&(t.sortColumn=e.sortColumn),e.sortAsc!==void 0&&(t.sortAsc=e.sortAsc),e.filters!==void 0&&(t.filters=e.filters),e.labelColumn!==void 0&&(t.labelColumn=e.labelColumn),e.deletedColumns!==void 0&&(t.deletedColumns=e.deletedColumns),e.info!==void 0&&(t.info=e.info),e.source!==void 0&&(t.source=e.source),e.origin!==void 0&&(t.origin=e.origin),t}async function Di(e,t=n=>fetch(n)){if(!e.truncated)return e.content;if(!e.raw_url)throw new Error("GitHub truncated this file but returned no raw_url");const n=await t(e.raw_url);if(!n.ok)throw new Error(`raw fetch failed: ${n.status} ${n.statusText}`);return n.text()}async function _r(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const ob=Object.freeze(Object.defineProperty({__proto__:null,fetchGistFileContent:Di,init:Qg,load:Xg,meta:Wg,offerPrune:Gu},Symbol.toStringTag,{value:"Module"})),Wu="server-sync:url";function Yu(e){return`server-sync:etag:${e}`}async function Qu(e){const n=(await e.store.settings.findOne(Wu))?.value;return typeof n!="string"||n.length===0?null:n.replace(/\/+$/,"")}async function ab(e,t){await e.store.settings.upsert({name:Wu,value:t.replace(/\/+$/,"")})}async function Xu(e,t){const r=(await e.store.settings.findOne(Yu(t)))?.value;return typeof r=="string"?r:null}async function yn(e,t,n){await e.store.settings.upsert({name:Yu(t),value:n})}function Xi(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function tc(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function Ju(e,t,n){const r=Hi(n,t),i=(await e.store.tables.find()).filter(o=>o.workspaceId===t);for(const o of i){const l=e.store.rows(o.id),u=await l.find();await l.bulkRemove(u.map(h=>h.id)),await e.store.tables.remove(o.id)}let s=0;for(const o of r){const l=Ce(),u=await e.store.tables.insert({id:l,workspaceId:t,name:o.name,code:Le(o.name),columns:o.columns,view:"table",...o.windowGeometry?{windowGeometry:o.windowGeometry}:{},...o.sortColumn?{sortColumn:o.sortColumn,sortAsc:o.sortAsc??!0}:{},updatedAt:Date.now()}),h=o.rows.map(m=>({id:Ce(),tableId:u.id,data:m,updatedAt:Date.now()}));await e.store.rows(u.id).bulkInsert(h),s++}return s}const lb={id:"server-sync",name:"Server Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/server-sync.ts"};function cb(e){e.ui.registerSettings("server-sync","Server Sync",[{key:"url",label:"Server URL",type:"string",scope:"workspace",description:"Base URL of the sync server, e.g. http://localhost:3000"}]),e.ui.registerFooterButton({id:"server-sync:menu",label:"Sync",icon:"cloud_sync",tooltip:"Server sync — push or pull this workspace",onClick:async(t,n)=>{const{AnchoredMenu:r}=await ct(async()=>{const{AnchoredMenu:o}=await Promise.resolve().then(()=>kr);return{AnchoredMenu:o}},void 0),i=n?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),s=await r.open(i,[{id:"push",label:"Push (↑)",icon:"cloud_upload"},{id:"pull",label:"Pull (↓)",icon:"cloud_download"}]);if(s)try{s==="push"?await ub(t):s==="pull"&&await db(t)}catch(o){t.ui.dialogs.toast(`${s==="push"?"Push":"Pull"} failed: ${o.message}`,{kind:"error",title:"Server sync"})}}})}async function ub(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const n=await Zu(e);if(!n)return;const r=await Qi(e),i=await Xu(e,t),s={"Content-Type":"application/json"};i&&(s["If-Match"]=`"${i}"`);let o=await fetch(`${n}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:s,body:r});if(o.status===412){const u=await o.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){u.currentEtag&&await yn(e,t,u.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}o=await fetch(`${n}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:r})}if(!o.ok)throw new Error(await ed(o));const l=Xi(o.headers.get("ETag"));l&&await yn(e,t,l),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${n}.`,{kind:"success",title:"Server sync"})}async function db(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const n=await Zu(e);if(!n||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const i=await fetch(`${n}/sync/${encodeURIComponent(t)}`);if(i.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!i.ok)throw new Error(await ed(i));const s=Xi(i.headers.get("ETag")),o=await i.json(),l=await Ju(e,t,o);s&&await yn(e,t,s),e.ui.dialogs.toast(`Pulled ${l} table${l===1?"":"s"} from ${n}.`,{kind:"success",title:"Server sync"})}async function Zu(e){const t=await Qu(e);if(t)return t;const n=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!n)return null;try{new URL(n)}catch{return await e.ui.dialogs.alert(`"${n}" is not a valid URL.`,"Server sync"),null}return await ab(e,n),n.replace(/\/+$/,"")}async function ed(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const hb=Object.freeze(Object.defineProperty({__proto__:null,init:cb,meta:lb},Symbol.toStringTag,{value:"Module"})),fb={id:"new-table",name:"New Table",type:"ui",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/new-table-button.ts"};function pb(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const mb=Object.freeze(Object.defineProperty({__proto__:null,init:pb,meta:fb},Symbol.toStringTag,{value:"Module"}));function Ji(e,t="Edit"){const n=document.createElement("button");return n.type="button",n.title=t,n.textContent="✎",n.className="cell-pencil",n.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",n.addEventListener("mouseenter",()=>n.style.color="#374151"),n.addEventListener("mouseleave",()=>n.style.color="#9ca3af"),n.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),e()}),n}function Zi(e,t){const n=document.createElement("span");return n.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%",e.style.flex="1 1 auto",e.style.minWidth="0",e.style.overflow="hidden",n.append(e,t),n}function es(e){const t=document.createElement("input");t.type="text",t.value=e.value,t.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0;text-overflow:ellipsis";const n=()=>{e.isLive(t)&&e.onCommit(t.value)};return t.addEventListener("keydown",r=>{r.key==="Enter"?(r.preventDefault(),n()):r.key==="Escape"&&(r.preventDefault(),e.onCancel())}),t.addEventListener("blur",n),setTimeout(()=>{t.focus(),t.select()},0),t}const gb={id:"cell-date",name:"Cell Date",type:"cell-renderer",version:"0.1.0",description:"Renderer for date columns: a native `<input type=date>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"date\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-date.ts"};function bb(e){customElements.get("cell-date")||customElements.define("cell-date",wb),e.ui.registerCellRenderer("date","cell-date")}class wb extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=es({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(n),this._editor=n;return}if(yb(this._value)){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",Xo(n,`Not a valid date: "${String(this._value)}"`),this.append(this._readonly?n:Zi(n,this.pencil()));return}if(this._readonly){this.textContent=ho(this._value);return}const t=document.createElement("input");t.type="date",t.value=ho(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return Ji(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function ho(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const n=new Date(t);return Number.isNaN(n.getTime())?"":n.toISOString().slice(0,10)}function yb(e){return e==null||typeof e=="string"&&e.trim()===""?!1:ho(e)===""}const vb=Object.freeze(Object.defineProperty({__proto__:null,init:bb,meta:gb},Symbol.toStringTag,{value:"Module"})),$b={id:"cell-datetime",name:"Cell Datetime",type:"cell-renderer",version:"0.1.0",description:"Renderer for datetime columns: a native `<input type=datetime-local>` picker. A non-empty value the picker can't parse shows as red-bordered raw text with a pencil instead of a misleadingly blank box. Apply by setting a column's renderer to \"datetime\".",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-datetime.ts"};function xb(e){customElements.get("cell-datetime")||customElements.define("cell-datetime",kb),e.ui.registerCellRenderer("datetime","cell-datetime")}class kb extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const n=es({value:this._value==null?"":String(this._value),onCommit:r=>this.commit(r||null),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:r=>this._editor===r});this.append(n),this._editor=n;return}if(Cb(this._value)){const n=document.createElement("span");n.textContent=String(this._value),n.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",Xo(n,`Not a valid datetime: "${String(this._value)}"`),this.append(this._readonly?n:Zi(n,this.pencil()));return}if(this._readonly){this.textContent=fo(this._value).replace("T"," ");return}const t=document.createElement("input");t.type="datetime-local",t.value=fo(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}pencil(){return Ji(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function fo(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const n=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(n)return`${n[1]}T${n[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const r=new Date(t);if(Number.isNaN(r.getTime()))return"";const i=r.toISOString();return`${i.slice(0,10)}T${i.slice(11,16)}`}function Cb(e){return e==null||typeof e=="string"&&e.trim()===""?!1:fo(e)===""}const _b=Object.freeze(Object.defineProperty({__proto__:null,init:xb,meta:$b},Symbol.toStringTag,{value:"Module"})),Sb={id:"cell-boolean",name:"Cell Boolean",type:"cell-renderer",version:"0.1.0",description:`Renderer for boolean columns: a checkbox for true/false, a grayed-out unchecked box for an empty cell (clickable to set true), and red-bordered raw text with a pencil for a stored value that is none of those. Apply by setting a column's renderer to "boolean".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="8 12 11 15 16 9"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-boolean.ts"};function Eb(e){customElements.get("cell-boolean")||customElements.define("cell-boolean",Tb),e.ui.registerCellRenderer("boolean","cell-boolean")}class Tb extends HTMLElement{constructor(){super(...arguments),this._value=!1,this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t,this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this._editing){const i=es({value:this._value==null?"":String(this._value),onCommit:s=>this.commit(s),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:s=>this._editor===s});this.append(i),this._editor=i;return}const t=ku(this._value);if(t==="invalid"){const i=document.createElement("span");i.textContent=String(this._value),i.style.cssText="display:inline-block;width:100%;overflow:hidden;text-overflow:ellipsis",Xo(i,`Not a valid boolean: "${String(this._value)}"`),this.append(this._readonly?i:Zi(i,this.pencil()));return}const n=document.createElement("input");n.type="checkbox",n.checked=t==="true";let r="transform:translateY(1px)";t==="empty"&&(r+=";opacity:0.45",n.title="Empty — no value stored. Click to set true."),this._readonly?n.disabled=!0:(r+=";cursor:pointer",n.addEventListener("change",()=>this.commit(n.checked))),n.style.cssText=r,this.append(n)}pencil(){return Ji(()=>{this._editing=!0,this.render()},"Edit the stored value")}commit(t){this._value=t,this._editing=!1,this.render(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Ib=Object.freeze(Object.defineProperty({__proto__:null,init:Eb,meta:Sb},Symbol.toStringTag,{value:"Module"})),Ab={id:"cell-color",name:"Cell Color",type:"cell-renderer",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2h2.3c2 0 3.6-1.6 3.6-3.6C20.7 6 16.9 3 12 3z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="11" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-color.ts"};function Rb(e){customElements.get("cell-color")||customElements.define("cell-color",Ob),e.ui.registerCellRenderer("color","cell-color")}class Ob extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,n,r){this.value=r}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const n=document.createElement("input");n.type="color",n.value=t,n.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",n.addEventListener("change",()=>this.commit(n.value)),this.append(n)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Db=Object.freeze(Object.defineProperty({__proto__:null,init:Rb,meta:Ab},Symbol.toStringTag,{value:"Module"})),Pb={id:"cell-image",name:"Cell Image",type:"cell-renderer",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-image.ts"};function Lb(e){customElements.get("cell-image")||customElements.define("cell-image",Mb),e.ui.registerCellRenderer("image","cell-image")}class Mb extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1,this._editing=!1,this._editor=null}set value(t){this._value!==t&&(this._value=t??"",this._editing=!1,this.render())}get value(){return this._value}set readonly(t){const n=!!t;this._readonly!==n&&(this._readonly=n,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._editor=null,this.style.display="block",this.style.minWidth="0",this.style.overflow="hidden",this._editing){const r=document.createElement("span");r.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const i=es({value:this._value,onCommit:o=>this.commit(o),onCancel:()=>{this._editor=null,this._editing=!1,this.render()},isLive:o=>this._editor===o}),s=document.createElement("button");s.type="button",s.textContent="upload",s.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",s.addEventListener("mousedown",o=>o.preventDefault()),s.addEventListener("click",()=>this.pickFile()),r.append(i,s),this.append(r),this._editor=i;return}const t=document.createElement("span");if(t.style.cssText="display:flex;align-items:center;gap:0.4rem;min-width:0",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const r=document.createElement("img");r.src=this._value,r.alt="",r.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(r)}else{const r=document.createElement("span");if(r.style.color="#9ca3af",r.textContent="no image",t.append(r),!this._readonly){const i=document.createElement("button");i.type="button",i.textContent="upload",i.style.cssText="flex:none;padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",i.addEventListener("click",()=>this.pickFile()),t.append(i)}}this.append(this._readonly?t:Zi(t,this.pencil()))}pencil(){return Ji(()=>{this._editing=!0,this.render()},"Edit the image URL")}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const n=t.files?.[0];if(!n)return;const r=new FileReader;r.onload=()=>this.commit(String(r.result)),r.readAsDataURL(n)}),t.click()}commit(t){const n=t!==this._value;this._value=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const jb=Object.freeze(Object.defineProperty({__proto__:null,init:Lb,meta:Pb},Symbol.toStringTag,{value:"Module"})),td=200,nd=100;function Nb(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<td||e.h<nd?null:{...e}}function Pi(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}function zb(e,t,n,r){const i=r>0?r:1;return{...e,x:e.x+t/i,y:e.y+n/i}}function Ub(e,t,n,r,i,s,o){const l=i>0?i:1,u=n/l,h=r/l;let{x:m,y:g,w,h:y}=e;return t.includes("e")&&(w=Math.max(s,e.w+u)),t.includes("s")&&(y=Math.max(o,e.h+h)),t.includes("w")&&(w=Math.max(s,e.w-u),m=e.x+(e.w-w)),t.includes("n")&&(y=Math.max(o,e.h-h),g=e.y+(e.h-y)),{x:m,y:g,w,h:y}}function Fb(e){return e?.minimized?{status:"minimized",restoreStatus:e.maximized?"maximized":"normalized"}:e?.maximized?{status:"maximized",restoreStatus:"normalized"}:{status:"normalized",restoreStatus:"normalized"}}function nc(e,t){if(e.status==="closed")return e;switch(t){case"close":return{...e,status:"closed"};case"minimize":return e.status==="minimized"?e:{status:"minimized",restoreStatus:e.status==="maximized"?"maximized":"normalized"};case"maximize":return{status:"maximized",restoreStatus:"normalized"};case"smallify":return e.status!=="normalized"?e:{...e,status:"smallified"};case"normalize":return e.status==="minimized"?{status:e.restoreStatus,restoreStatus:"normalized"}:{status:"normalized",restoreStatus:"normalized"}}}function Bb(e){return{minimized:e.status==="minimized",maximized:e.status==="maximized"||e.status==="minimized"&&e.restoreStatus==="maximized"}}const qb="input, textarea, select, button, a, .jsPanel-controlbar";function rc(e){for(const t of e.composedPath())if(t instanceof HTMLElement&&t.matches(qb))return!0;return!1}const Hb={smallify:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 15 12 9 18 15"/></svg>',minimize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="19" x2="19" y2="19"/></svg>',maximize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="5" width="14" height="14" rx="1"/></svg>',normalize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="4" width="12" height="12" rx="1"/><rect x="4" y="8" width="12" height="12" rx="1"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>'};let Qs=100;function ic(){let e=Qs;for(const t of document.querySelectorAll(".jsPanel")){const n=Number(t.style.zIndex);Number.isFinite(n)&&n>e&&(e=n)}return Qs=e+1,Qs}function Kb(e){const t=Number(e.style.zIndex);for(const n of document.querySelectorAll(".jsPanel"))if(n!==e&&Number(n.style.zIndex)>t)return!1;return!0}const po=new Set;function Vb(){return[...po].sort((e,t)=>Number(t.style.zIndex)-Number(e.style.zIndex))}function hn(e,t,n){const r=document.createElement("button");return r.type="button",r.className=`jsPanel-btn jsPanel-btn-${e}`,r.title=t,r.setAttribute("aria-label",t),r.innerHTML=Hb[e]??"",r.addEventListener("click",i=>{i.stopPropagation(),n()}),r}function Li(e){const t=document.createElement("div");t.className="jsPanel",t.id=e.id,t.style.setProperty("--eda-panel-color",e.color??"#01579b");const n=document.createElement("div");n.className="jsPanel-hdr";const r=document.createElement("div");r.className="jsPanel-headerbar";const i=document.createElement("div");i.className="jsPanel-headerlogo",i.innerHTML=e.logo??"";const s=document.createElement("div");s.className="jsPanel-titlebar",s.tabIndex=-1,s.style.outline="none",s.addEventListener("pointerdown",()=>s.focus());const o=document.createElement("span");o.className="jsPanel-title",o.textContent=e.title,s.append(o);const l=document.createElement("div");l.className="jsPanel-controlbar",l.append(hn("smallify","Collapse",()=>ie("smallify")),hn("minimize","Minimize",()=>ie("minimize")),hn("maximize","Maximize",()=>t.maximize()),hn("normalize","Restore",()=>ie("normalize")),hn("close","Close",()=>t.close())),r.append(i,s,l),n.append(r);const u=document.createElement("div");u.className="jsPanel-content",u.append(e.content);const h=document.createElement("div");h.className="jsPanel-ftr",e.footerToolbar&&(h.classList.add("active"),h.append(e.footerToolbar)),t.append(n,u,h);for(const H of["n","s","e","w","ne","nw","se","sw"]){const K=document.createElement("div");K.className="eda-resize",K.dataset.edge=H,t.append(K)}if(t.style.zIndex=String(ic()),e.container.append(t),e.panelSize)t.style.width=`${e.panelSize.w}px`,t.style.height=`${e.panelSize.h}px`;else{const H=e.contentSize??{w:720,h:360};t.style.width=`${H.w}px`,t.style.height=`${H.h+n.offsetHeight+h.offsetHeight}px`}const m=e.position??"center",g=t.offsetWidth,w=e.container.clientWidth;m==="center"?(t.style.left=`${Math.max(0,(w-g)/2)}px`,t.style.top=`${Math.max(0,(e.container.clientHeight-t.offsetHeight)/2)}px`):"centerTopOffset"in m?(t.style.left=`${Math.max(0,(w-g)/2)}px`,t.style.top=`${m.centerTopOffset}px`):(t.style.left=`${m.x}px`,t.style.top=`${m.y}px`);let y=Fb(e.boot),x=L(),C=null,O=null,M=null;function L(){return{x:t.offsetLeft,y:t.offsetTop,w:t.offsetWidth,h:t.offsetHeight}}function F(H){t.style.left=`${H.x}px`,t.style.top=`${H.y}px`,t.style.width=`${H.w}px`,t.style.height=`${H.h}px`}function V(){const H=e.viewport?.getState()??{x:0,y:0,scale:1};t.style.left="0px",t.style.top="0px",t.style.width=`${e.container.clientWidth}px`,t.style.height=`${e.container.clientHeight}px`,t.style.transformOrigin="0 0",t.style.transform=`translate(${-H.x/H.scale}px, ${-H.y/H.scale}px) scale(${1/H.scale})`}function W(){V(),O??=e.viewport?.subscribe(V)??null,!M&&typeof ResizeObserver<"u"&&(M=new ResizeObserver(V),M.observe(e.container))}function G(){O?.(),O=null,M?.disconnect(),M=null,t.style.transform="",t.style.transformOrigin=""}function q(){const H=document.createElement("div");H.className="jsPanel-replacement",H.id=`${e.id}-min`,H.style.setProperty("--eda-panel-color",e.color??"#01579b");const K=document.createElement("div");K.className="jsPanel-headerlogo",K.innerHTML=i.innerHTML;const ce=document.createElement("span");return ce.className="jsPanel-title",ce.textContent=o.textContent,H.append(K,ce,hn("normalize","Restore",()=>{ie("normalize"),t.front()}),hn("close","Close",()=>t.close())),H.addEventListener("click",pe=>{pe.target.closest("button")||(ie("normalize"),t.front())}),H}function Y(H){switch(H==="maximized"&&y.status!=="maximized"&&G(),H==="minimized"&&y.status!=="minimized"&&(C?.remove(),C=null,t.style.display=""),y.status){case"minimized":{H==="normalized"?x=L():H==="smallified"&&(x={...x,x:t.offsetLeft,y:t.offsetTop}),t.style.display="none";const K=e.minimizeTo?document.querySelector(e.minimizeTo):null;C=q(),(K??e.container).append(C);break}case"maximized":H==="normalized"?x=L():H==="smallified"&&(x={...x,x:t.offsetLeft,y:t.offsetTop}),W();break;case"smallified":x=L(),t.style.height=`${n.offsetHeight}px`;break;case"normalized":H==="smallified"&&(x={...x,x:t.offsetLeft,y:t.offsetTop}),F(x);break}t.dataset.status=y.status}function ie(H){const K=y;y=nc(y,H),y.status!==K.status&&(Y(K.status),e.onstatuschange?.(t))}Object.defineProperty(t,"status",{get:()=>y.status}),t.minimize=()=>ie("minimize"),t.maximize=(H,K)=>{ie("maximize"),K!==!0&&t.front()},t.normalize=()=>ie("normalize"),t.smallify=()=>ie("smallify"),t.front=(H,K)=>{t.style.zIndex=String(ic()),K!==!1&&e.onfronted?.()},t.close=()=>{y.status!=="closed"&&(y=nc(y,"close"),C?.remove(),G(),po.delete(t),t.remove(),e.onclosed?.())},t.setHeaderTitle=H=>{o.textContent=H;const K=C?.querySelector(".jsPanel-title");K&&(K.textContent=H)},t.setHeaderLogo=H=>{i.innerHTML=H;const K=C?.querySelector(".jsPanel-headerlogo");K&&(K.innerHTML=H)},t.persistFlags=()=>Bb(y),po.add(t),t.addEventListener("pointerdown",()=>{Kb(t)||t.front()},!0);const se=H=>{H.addEventListener("pointerdown",K=>{if(K.button!==0||rc(K)||y.status==="maximized"||y.status==="minimized")return;const ce=L(),pe=e.viewport?.getState().scale??1,Te=K.clientX,ze=K.clientY;let gt=!1;const de=Ae=>{gt=!0;const et=zb(ce,Ae.clientX-Te,Ae.clientY-ze,pe);t.style.left=`${et.x}px`,t.style.top=`${et.y}px`},Pe=()=>{H.removeEventListener("pointermove",de),H.removeEventListener("pointerup",Pe),H.removeEventListener("pointercancel",Pe),gt&&e.onmoved?.()};H.setPointerCapture(K.pointerId),H.addEventListener("pointermove",de),H.addEventListener("pointerup",Pe),H.addEventListener("pointercancel",Pe)})};se(s),se(i),se(h);for(const H of t.querySelectorAll(".eda-resize"))H.addEventListener("pointerdown",K=>{if(K.button!==0||y.status!=="normalized")return;const ce=H.dataset.edge,pe=L(),Te=e.viewport?.getState().scale??1,ze=K.clientX,gt=K.clientY;let de=!1;const Pe=et=>{de=!0,F(Ub(pe,ce,et.clientX-ze,et.clientY-gt,Te,td,nd))},Ae=()=>{H.removeEventListener("pointermove",Pe),H.removeEventListener("pointerup",Ae),H.removeEventListener("pointercancel",Ae),de&&e.onresized?.()};H.setPointerCapture(K.pointerId),H.addEventListener("pointermove",Pe),H.addEventListener("pointerup",Ae),H.addEventListener("pointercancel",Ae)});return n.addEventListener("dblclick",H=>{rc(H)||(y.status==="maximized"?ie("normalize"):t.maximize())}),y.status!=="normalized"?Y("normalized"):t.dataset.status="normalized",t}function $i(e){return e.source?e.source.type==="url"?"referenced":"connected":e.origin?"imported":"normal"}function sc(e){return!!(e.source||e.origin)}const mr='viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15" role="img"',oc={normal:`<svg ${mr} aria-label="Local table"><title>Local table</title><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,imported:`<svg ${mr} aria-label="Imported table (snapshot)"><title>Imported table (snapshot)</title><rect x="3" y="11" width="18" height="10" rx="1"/><line x1="7" y1="15" x2="7" y2="17"/><line x1="12" y1="15" x2="12" y2="17"/><line x1="17" y1="15" x2="17" y2="17"/><path d="M12 2v7"/><polyline points="8 6 12 9 16 6"/></svg>`,referenced:`<svg ${mr} aria-label="Referenced table (read-only)"><title>Referenced table (read-only)</title><path d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1"/><path d="M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1"/></svg>`,connected:`<svg ${mr} aria-label="Connected table (live)"><title>Connected table (live)</title><line x1="9" y1="2" x2="9" y2="7"/><line x1="15" y1="2" x2="15" y2="7"/><rect x="6" y="7" width="12" height="7" rx="2"/><path d="M9 14v3a3 3 0 0 0 6 0v-3"/></svg>`},Gb=`<svg ${mr} aria-label="View"><title>View</title><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;var Wb=Object.defineProperty,Yb=Object.getOwnPropertyDescriptor,ts=(e,t,n,r)=>{for(var i=r>1?void 0:r?Yb(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Wb(t,n,i),i};function Qb(e,t,n){(kt.instance??Jb()).show(e,t,n)}function Xb(e){if(!e)return null;const t=$i(e);if(t==="connected"||t==="referenced"){const n=e.source?.type??"remote",r=e.source?.writable?"Edits you make are written back to the source.":"It is read-only — edits are not saved back to the source.";return{label:`Connected (live ${n})`,note:`This table is connected to a live ${n} backend: its rows are fetched from the source on demand and are not stored locally. ${r} Closing its window just disconnects the view — the source data is untouched.`}}return t==="imported"?{label:"Imported (snapshot)",note:"This table is a local snapshot imported once from its origin. The rows live in this browser, so edits stay local; use Refresh to re-fetch the latest data from the origin.",...e.origin?{url:e.origin.url}:{}}:{label:"Local",note:"This table was created in the app and is stored locally in your browser."}}function Jb(){const e=document.createElement("table-info-dialog");return document.body.appendChild(e),e}let kt=class extends ve{constructor(){super(...arguments),this.name="",this.info=null,this.provenance=null,this.dialogEl=null,this.close=()=>this.dialogEl?.close(),this.onSubmit=e=>{e.preventDefault(),this.close()}}connectedCallback(){super.connectedCallback(),kt.instance=this}disconnectedCallback(){super.disconnectedCallback(),kt.instance===this&&(kt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pt(this.dialogEl,e)}show(e,t,n){this.name=e,this.info=t,this.provenance=n??null,this.updateComplete.then(()=>this.dialogEl?.showModal())}row(e,t,n){if(!t&&!n)return re;const r=n?k`<a href=${n} target="_blank" rel="noopener noreferrer">${t||n}</a>`:k`${t}`;return k`<dt>${e}</dt>
      <dd>${r}</dd>`}render(){const e=this.info,t=!!(e?.source||e?.sourceUrl||e?.license||e?.licenseUrl||e?.about||e?.aboutUrl),n=Xb(this.provenance);return k`
      <dialog @cancel=${this.close} @keydown=${ft}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>×</button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>${this.name}</h2>
            <div class="header-actions">
              <button type="submit" class="ghost">Close</button>
            </div>
          </div>
          <div class="dialog-body">
            ${n?k`<div class="kind">
                  <span class="kind-label">${n.label}</span>
                  <p class="kind-note">${n.note}</p>
                  ${n.url?k`<div class="kind-origin">
                        <a href=${n.url} target="_blank" rel="noopener noreferrer"
                          >${n.url}</a
                        >
                      </div>`:re}
                </div>`:re}
            ${e?.descriptionHtml?k`<div class="desc">${On(e.descriptionHtml)}</div>`:e?.description?k`<div class="desc">${e.description}</div>`:re}
            ${t?k`<dl>
                  ${this.row("Source",e?.source,e?.sourceUrl)}
                  ${this.row("License",e?.license,e?.licenseUrl)}
                  ${this.row("About",e?.about,e?.aboutUrl)}
                </dl>`:re}
            ${!e?.description&&!e?.descriptionHtml&&!t&&!n?k`<p class="empty">No additional information.</p>`:re}
          </div>
        </form>
      </dialog>
    `}};kt.instance=null;kt.styles=[ht,xe`
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
    `];ts([U()],kt.prototype,"name",2);ts([U()],kt.prototype,"info",2);ts([U()],kt.prototype,"provenance",2);kt=ts([Se("table-info-dialog")],kt);const Zb=.25,ew=4;function tw(e){return Math.min(ew,Math.max(Zb,e))}function ac(e,t,n){return{x:e.x+t,y:e.y+n,scale:e.scale}}const hr={x:0,y:0,scale:1};function lc(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function nw(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function rw(e,t){let n={...hr};t.style.transformOrigin="0 0";const r=new Set,i=()=>{t.style.transform=`translate(${n.x}px, ${n.y}px) scale(${n.scale})`;for(const K of r)K({...n})};let s="none",o={...hr},l=0,u=0,h=0,m=0,g=0,w=0;const y=(K,ce)=>{const pe=e.getBoundingClientRect();return{x:K-pe.left,y:ce-pe.top}},x=K=>{if(K.touches.length===2){s="pinch",o={...n};const[ce,pe]=[K.touches[0],K.touches[1]];h=lc(ce,pe)||1;const Te=y((ce.clientX+pe.clientX)/2,(ce.clientY+pe.clientY)/2);m=(Te.x-n.x)/n.scale,g=(Te.y-n.y)/n.scale,K.preventDefault();return}if(K.touches.length===1&&!nw(K.target)){const ce=K.timeStamp;if(ce-w<300){n={...hr},i(),w=0,s="none",K.preventDefault();return}w=ce,s="pan",o={...n},l=K.touches[0].clientX,u=K.touches[0].clientY}else s="none"},C=K=>{if(s==="pan"&&K.touches.length===1){const ce=K.touches[0];n=ac(o,ce.clientX-l,ce.clientY-u),i(),K.preventDefault()}else if(s==="pinch"&&K.touches.length>=2){const[ce,pe]=[K.touches[0],K.touches[1]],Te=tw(o.scale*(lc(ce,pe)/h)),ze=y((ce.clientX+pe.clientX)/2,(ce.clientY+pe.clientY)/2);n={x:ze.x-m*Te,y:ze.y-g*Te,scale:Te},i(),K.preventDefault()}},O=K=>{K.touches.length===0?s="none":K.touches.length===1&&s==="pinch"&&(s="pan",o={...n},l=K.touches[0].clientX,u=K.touches[0].clientY)};let M=!1,L={...hr},F=0,V=0,W=!1;const G=(K,ce)=>{const pe=e.getBoundingClientRect();return K>=pe.left&&K<=pe.right&&ce>=pe.top&&ce<=pe.bottom},q=K=>{if(!M)return;const ce=K.clientX-F,pe=K.clientY-V;!W&&Math.hypot(ce,pe)<4||(W=!0,document.body.style.cursor="grabbing",n=ac(L,ce,pe),i(),K.preventDefault())},Y=()=>{M&&(M=!1,document.body.style.cursor="",window.removeEventListener("mousemove",q,!0),window.removeEventListener("mouseup",ie,!0))};function ie(){Y()}const se=K=>{K.button===2&&G(K.clientX,K.clientY)&&(M=!0,W=!1,L={...n},F=K.clientX,V=K.clientY,window.addEventListener("mousemove",q,!0),window.addEventListener("mouseup",ie,!0))},H=K=>{W&&(K.preventDefault(),W=!1)};return e.addEventListener("touchstart",x,{passive:!1}),e.addEventListener("touchmove",C,{passive:!1}),e.addEventListener("touchend",O),e.addEventListener("touchcancel",O),window.addEventListener("mousedown",se,!0),window.addEventListener("contextmenu",H,!0),{snapshot:()=>({...n}),reset:()=>{n={...hr},i()},restore:K=>{n={...K},i()},subscribe:K=>(r.add(K),()=>r.delete(K)),dispose:()=>{e.removeEventListener("touchstart",x),e.removeEventListener("touchmove",C),e.removeEventListener("touchend",O),e.removeEventListener("touchcancel",O),window.removeEventListener("mousedown",se,!0),window.removeEventListener("contextmenu",H,!0),Y()}}}const gi=new Map;function ns(e,t){const r=(gi.get(e)??Promise.resolve()).then(t,t);return gi.set(e,r),r.finally(()=>{gi.get(e)===r&&gi.delete(e)}),r}let Xs=0;function rd(){return Xs=Math.max(Date.now(),Xs+1),Xs}const rs=new Map;function id(e,t){rs.set(e,t)}function is(e){rs.delete(e)}function iw(e){return rs.has(e)}function sw(e){try{rs.get(e)?.()}catch{}}const Nn=(()=>{const e=new URLSearchParams(location.search).get("minimize");return e===null?!1:!/^(0|false|no)$/i.test(e)})();function ow(e){return e.filter(t=>!t.minimized).slice().sort((t,n)=>(t.z??-1/0)-(n.z??-1/0)).map(t=>t.id)}let cc=!1;async function aw(){cc||(cc=!0,document.addEventListener("easydb:restack-windows",()=>void uc())),await uc()}async function uc(){if(Nn)return;const e=await ae();for(let t=0;t<=12;t++){const[n,r]=await Promise.all([e.store.tables.find(),e.store.viewInstances.find()]),i=[...n.filter(o=>o.workspaceId===e.workspaceId&&!o.windowGeometry?.closed).map(o=>({id:o.id,z:o.windowGeometry?.z,minimized:o.windowGeometry?.minimized===!0})),...r.filter(o=>o.workspaceId===e.workspaceId&&o.open).map(o=>({id:o.id,z:o.windowGeometry?.z,minimized:o.windowGeometry?.minimized===!0}))],s=ow(i);if(t<12&&!s.every(o=>iw(o))){await new Promise(o=>setTimeout(o,80));continue}for(const o of s)sw(o);return}}var lw=Object.defineProperty,cw=Object.getOwnPropertyDescriptor,Mr=(e,t,n,r)=>{for(var i=r>1?void 0:r?cw(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&lw(t,n,i),i};let vn=class extends ve{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return k`<button
        class="icon ${e?"active":""}"
        title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"}
        @click=${this.openSearch}
      >
        <span class="mi sm">search</span>
      </button>`}return k`<input
      type="search"
      placeholder="search…"
      .value=${this.query}
      @input=${this.onInput}
      @blur=${this.onBlur}
    />`}};vn.styles=[mt,xe`
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
    `];Mr([dt({type:String})],vn.prototype,"tableId",2);Mr([U()],vn.prototype,"query",2);Mr([U()],vn.prototype,"open",2);Mr([Dt("input")],vn.prototype,"inputEl",2);vn=Mr([Se("panel-search")],vn);var uw=Object.defineProperty,dw=Object.getOwnPropertyDescriptor,qn=(e,t,n,r)=>{for(var i=r>1?void 0:r?dw(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&uw(t,n,i),i};let Jt=class extends ve{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.rowsActive=!1,this.runTableButton=async(e,t)=>{const n=t?.currentTarget??void 0,r=await ae();try{await Promise.resolve(e.onClick(r.api,{tableId:this.tableId,anchor:n}))}catch(i){console.error(`[table-button:${e.id}]`,i)}}}async connectedCallback(){super.connectedCallback();const e=await ae();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(n=>n.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await ae();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await ae(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const n={};for(const r of t.columns)n[r.field]=hw(r);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:n,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}render(){return k`
      ${this.table?.readonly?re:k`<button title="Add a blank row" aria-label="Add row" @click=${this.addRow}>
            <span class="mi sm">add</span>
          </button>`}
      <button title="Edit columns" aria-label="Columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span>
      </button>
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>k`<button
              class=${e.danger?"danger":""}
              title=${e.tooltip??e.label}
              aria-label=${e.label}
              @click=${t=>this.runTableButton(e,t)}
            >
              ${e.icon?e.icon.trimStart().startsWith("<svg")?k`<span class="icon-svg">${So(e.icon)}</span>`:k`<span class="mi sm">${e.icon}</span>`:k`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};Jt.styles=[mt,xe`
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
    `];qn([dt({type:String})],Jt.prototype,"tableId",2);qn([dt({type:Boolean})],Jt.prototype,"active",2);qn([U()],Jt.prototype,"rowCount",2);qn([U()],Jt.prototype,"tableButtons",2);qn([U()],Jt.prototype,"table",2);Jt=qn([Se("panel-footer")],Jt);function hw(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function Js(e){return e.title?.trim()?e.title.trim():e.name}function fw(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function pw(e){const t=document.querySelector("app-shell")?.shadowRoot,n=t?.querySelector("header"),r=t?.querySelector("footer");n&&(e.style.top=`${n.offsetHeight}px`),r&&(e.style.bottom=`${r.offsetHeight}px`)}const Qt=new Map,sd=new Set;let dc=!1,od=null;function Mi(){return od}function Sr(){return{getState:()=>Mi()?.snapshot()??{x:0,y:0,scale:1},subscribe:e=>Mi()?.subscribe(e)??(()=>{})}}async function ad(){const e=await ae();await Promise.all([...Qt.keys()].map(t=>xi(t,e)))}function ld(e){const t=Qt.get(e);return t?(t.status==="minimized"&&t.normalize(),t.front(),!0):(mw(e),!0)}async function mw(e){const t=await ae(),n=await t.store.tables.findOne(e);n?.windowGeometry?.closed&&await t.store.tables.patch(e,{windowGeometry:{...n.windowGeometry,closed:!1},updatedAt:Date.now()})}async function cd(e){const t=await ae();await $w(e,t)}async function ud(){if(dc)return;dc=!0;const e=await ae(),t=document.getElementById("easydb-panels"),n=document.getElementById("easydb-panels-viewport");if(t&&n){od=rw(t,n);const i=()=>pw(t);i(),window.addEventListener("resize",i);const s=document.querySelector("app-shell")?.shadowRoot,o=s?.querySelector("header"),l=s?.querySelector("footer");if(typeof ResizeObserver<"u"&&(o||l)){const u=new ResizeObserver(i);o&&u.observe(o),l&&u.observe(l)}}const r=(await e.store.tables.find()).filter(i=>i.workspaceId===e.workspaceId);r.sort(Pi);for(const i of r)i.windowGeometry?.closed||hc(i,e);e.store.tables.subscribe(i=>{const s=i.filter(u=>u.workspaceId===e.workspaceId),o=new Map(s.map(u=>[u.id,u]));for(const[u,h]of Qt){const m=o.get(u);if(!m||m.windowGeometry?.closed){Qt.delete(u),is(u),sd.add(u);try{h.status!=="closed"&&h.close()}catch{}}}const l=s.filter(u=>!Qt.has(u.id)&&!u.windowGeometry?.closed).sort(Pi);for(const u of l)hc(u,e)}),aw()}const dd=720,hd=360;function hc(e,t){const n=`panel-${fd(e.id)}`,r=fw(),i=Nb(e.windowGeometry),s=Nn||i?.minimized===!0,o=()=>{const se=document.createElement("data-table");return se.tableId=e.id,se.style.height="100%",se},l=s?document.createElement("div"):o();let u=s?null:l,h=Js(e),m=-1,g=-1;const w=()=>{F.setHeaderTitle(h+vu(m,g))},y=se=>{const H=se.detail;H.key===e.id&&(m=H.count,g=H.total,w())};document.addEventListener(Ri,y);const x=()=>{M.active=!1,u?.remove(),u=null},C=()=>{if(u)return;const se=document.getElementById(n)?.querySelector(".jsPanel-content");if(!se)return;se.replaceChildren();const H=o();se.appendChild(H),u=H,M.active=!0},O=document.createElement("panel-search");O.tableId=e.id;const M=document.createElement("panel-footer");M.tableId=e.id,M.active=!s;const L=async()=>{if(document.removeEventListener(Ri,y),Qt.delete(e.id),is(e.id),sd.delete(e.id))return;const se=await t.store.tables.findOne(e.id);if(!se)return;const H=se.windowGeometry??{x:60,y:60,w:720,h:360,z:1,minimized:!1,maximized:!1};await t.store.tables.patch(e.id,{windowGeometry:{...H,closed:!0},updatedAt:Date.now()})},F=Li({id:n,container:r,title:h,logo:oc[$i(e)],color:"#01579b",content:l,footerToolbar:M,...i?{panelSize:{w:i.w,h:i.h},position:{x:i.x,y:i.y}}:{contentSize:{w:dd,h:hd},position:bw()},minimizeTo:"#easydb-minimized-dock",viewport:Sr(),boot:{minimized:s,maximized:!Nn&&i?.maximized===!0},onmoved:()=>void xi(e.id,t),onresized:()=>void xi(e.id,t),onfronted:()=>void yw(e.id,t),onstatuschange:se=>{se.status==="minimized"?x():(se.status==="normalized"||se.status==="maximized")&&C(),xi(e.id,t)},onclosed:()=>void L()});Qt.set(e.id,F),id(e.id,()=>F.front(void 0,!1));const V=document.getElementById(n),W=V?.querySelector(".jsPanel-controlbar");W&&W.prepend(O),sc(e)&&V?.classList.add("eda-refreshable");let G=null;const q=document.createElement("button");q.type="button",q.title="Table info",q.setAttribute("aria-label","Table info"),q.className="eda-info-btn",q.textContent="ⓘ",q.style.cssText="display:none;background:none;border:0;color:inherit;cursor:pointer;font-size:1rem;line-height:1;padding:0 0.3rem;",q.addEventListener("click",se=>{se.stopPropagation(),G&&Qb(h,G.info??{},{source:G.source,origin:G.origin})}),W?.prepend(q);const Y=se=>{G=se??null;const H=!!(se?.info||se?.source||se?.origin);q.style.display=H?"inline-flex":"none"};Y(e);let ie=$i(e);t.store.tables.subscribe(se=>{const H=se.find(ce=>ce.id===e.id);if(!H)return;Y(H),Js(H)!==h&&(h=Js(H),w());const K=$i(H);K!==ie&&(ie=K,F.setHeaderLogo(oc[K]),V?.classList.toggle("eda-refreshable",sc(H)))})}let gw=0;function bw(){const e=gw++;return{x:40+e%8*30,y:80+e%8*30}}function xi(e,t){return ns(`table:${e}`,()=>ww(e,t))}async function ww(e,t){const n=document.getElementById(`panel-${fd(e)}`);if(!n)return;const r=Qt.get(e),i=r?.status??"normalized",s=r?.persistFlags()??{minimized:!1,maximized:!1};try{const l=(await t.store.tables.findOne(e))?.windowGeometry,u=Nn?l?.minimized??!1:s.minimized,h=Nn?l?.maximized??!1:s.maximized;let m=n.offsetLeft,g=n.offsetTop,w=n.offsetWidth,y=n.offsetHeight;(i==="minimized"||i==="maximized")&&(l?(m=l.x,g=l.y,w=l.w,y=l.h):(m=0,g=0,w=dd,y=hd)),m<=-9e3&&(m=l?.x??40);const C={x:m,y:g,w,h:y,z:l?.z??0,minimized:u,maximized:h};await t.store.tables.patch(e,{windowGeometry:C,updatedAt:Date.now()})}catch{}}function yw(e,t){return ns(`table:${e}`,()=>vw(e,t))}async function vw(e,t){try{const n=await t.store.tables.findOne(e);if(!n)return;const r=n.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...r,z:rd()},updatedAt:Date.now()})}catch{}}async function $w(e,t){if(!(await t.store.tables.findOne(e))?.source){const r=t.store.rows(e),i=await r.find();await r.bulkRemove(i.map(s=>s.id))}await t.store.tables.remove(e)}function fd(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}const xw=Object.freeze(Object.defineProperty({__proto__:null,FORCE_MINIMIZED:Nn,currentPanZoom:Mi,deleteTable:cd,focusTableWindow:ld,initWindowManager:ud,persistTablePanelGeometry:ad,shellViewport:Sr},Symbol.toStringTag,{value:"Module"})),kw=/<\/?[a-z][a-z0-9]*(\s[^<>]*)?\/?>|&[a-z][a-z0-9]*;|&#\d+;|&#x[0-9a-f]+;/i;function pd(e){return kw.test(e)}function Cw(e){return e.replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&quot;/gi,'"').replace(/&apos;|&#39;/gi,"'").replace(/&nbsp;/gi," ").replace(/&#x([0-9a-f]+);/gi,(t,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&#(\d+);/g,(t,n)=>String.fromCodePoint(Number(n))).replace(/&amp;/gi,"&")}function _w(e){if(typeof document<"u"){const t=document.createElement("div");return t.innerHTML=e,t.textContent??""}return Cw(e.replace(/<[^>]*>/g,""))}function Sw(e){return(pd(e)?_w(e):e).replace(/\s+/g," ").trim()}const Ew={id:"html-preview",name:"HTML Preview",type:"cell-renderer",version:"0.3.0",description:`Shows a cell's HTML as a plain-text preview (first N characters); click to edit the raw HTML in a dialog, or use the popup icon to view the full rendered HTML in a window. Apply by setting a column's renderer to "html-preview". For direct in-cell rendering use the "html" renderer instead.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-preview.ts"};let mo=30;async function fc(e){const t=await e.settings.get("html-preview","maxChars");typeof t=="number"&&Number.isFinite(t)&&t>0&&(mo=Math.floor(t))}function Tw(e){customElements.get("html-preview-cell")||customElements.define("html-preview-cell",Iw),e.ui.registerCellRenderer("html-preview","html-preview-cell"),e.ui.registerSettings("html-preview","HTML Preview",[{key:"maxChars",label:"Max characters shown",type:"number",default:30,scope:"workspace",description:"HTML-preview cells show the first N characters of the text; use the popup icon on the right to open the full rendered HTML in a window. Applies to cells rendered after the change (reload to refresh all)."}]),fc(e),e.events.on("app:ready",()=>void fc(e))}function pc(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}let mc=0;class Iw extends HTMLElement{constructor(){super(...arguments),this._value="",this._label="HTML"}set value(t){const n=t??"";this._value!==n&&(this._value=n,this.render())}get value(){return this._value}set column(t){this._label=t?.label??"HTML"}connectedCallback(){this.render()}render(){if(this.innerHTML="",!this._value){const o=document.createElement("span");o.style.cssText="color:#9ca3af;cursor:text",o.textContent="empty",o.title="Click to edit the HTML",o.addEventListener("click",()=>this.openEditor()),this.append(o);return}const t=document.createElement("span");t.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%";const n=document.createElement("span"),r=Sw(this._value);n.textContent=r.length>mo?r.slice(0,mo)+"…":r,n.title="Click to edit the HTML",n.style.cssText="flex:0 1 auto;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:text",n.addEventListener("click",o=>{o.stopPropagation(),this.openEditor()});const i=document.createElement("span");i.style.cssText="flex:1 1 auto";const s=document.createElement("button");s.type="button",s.title="Open the HTML in a window",s.setAttribute("aria-label","Open the HTML in a window"),s.innerHTML='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3h7v7"/><path d="M21 3l-9 9"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/></svg>',s.style.cssText="flex:none;display:inline-flex;align-items:center;justify-content:center;padding:1px;background:none;border:0;color:#9ca3af;cursor:pointer;line-height:0",s.addEventListener("mouseenter",()=>s.style.color="#4b5563"),s.addEventListener("mouseleave",()=>s.style.color="#9ca3af"),s.addEventListener("click",o=>{o.stopPropagation(),this.openWindow()}),t.append(n,i,s),this.append(t)}openWindow(){const t=document.createElement("div");if(t.style.cssText="padding:0.75rem;overflow:auto;height:100%;box-sizing:border-box",pd(this._value))t.innerHTML=this._value;else{const n=document.createElement("pre");n.style.cssText="white-space:pre-wrap;word-break:break-word;margin:0;font-family:ui-monospace, monospace;",n.textContent=this._value,t.append(n)}Li({id:`easydb-html-popup-${++mc}`,container:pc(),title:this._label,color:"#7c3aed",content:t,contentSize:{w:520,h:400},position:{centerTopOffset:60},minimizeTo:"#easydb-minimized-dock",viewport:Sr()})}openEditor(){const t=document.createElement("div");t.style.cssText="display:flex;flex-direction:column;gap:0.5rem;height:100%;box-sizing:border-box;padding:0.5rem";const n=document.createElement("textarea");n.value=this._value,n.style.cssText="flex:1 1 auto;width:100%;box-sizing:border-box;resize:none;font-family:monospace;font-size:0.85rem";const r=document.createElement("div");r.style.cssText="display:flex;justify-content:flex-end;gap:0.5rem;flex:none";const i=document.createElement("button");i.type="button",i.textContent="Cancel",i.style.cssText="padding:0.3rem 0.8rem;cursor:pointer";const s=document.createElement("button");s.type="button",s.textContent="Save",s.style.cssText="padding:0.3rem 0.8rem;cursor:pointer;background:#7c3aed;color:#fff;border:0;border-radius:0.25rem",r.append(i,s),t.append(n,r);const o=Li({id:`easydb-html-edit-${++mc}`,container:pc(),title:`Edit ${this._label}`,color:"#7c3aed",content:t,contentSize:{w:520,h:400},position:"center",minimizeTo:"#easydb-minimized-dock",viewport:Sr()});i.addEventListener("click",()=>o.close()),s.addEventListener("click",()=>{this._value=n.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:n.value},bubbles:!0,composed:!0})),o.close(),this.render()}),n.addEventListener("keydown",l=>{l.key==="Enter"&&(l.ctrlKey||l.metaKey)?(l.preventDefault(),s.click()):l.key==="Escape"&&(l.preventDefault(),o.close())}),setTimeout(()=>n.focus(),0)}}const Aw=Object.freeze(Object.defineProperty({__proto__:null,init:Tw,meta:Ew},Symbol.toStringTag,{value:"Module"})),Rw={id:"html-render",name:"HTML",type:"cell-renderer",version:"0.1.0",description:`Renders a cell's value directly as HTML (unescaped, in full, no popup). Apply by setting a column's renderer to "html". For a truncated preview use "html-preview".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-render.ts"};function Ow(e){customElements.get("html-render-cell")||customElements.define("html-render-cell",Dw),e.ui.registerCellRenderer("html","html-render-cell")}class Dw extends HTMLElement{constructor(){super(...arguments),this._value="",this.editing=!1}set value(t){const n=t??"";this._value!==n&&(this._value=n,this.editing||this.render())}get value(){return this._value}connectedCallback(){this.editing||this.render()}render(){this.innerHTML="";const t=document.createElement("span");t.style.cssText="display:inline-block;min-width:1ch;cursor:text",t.title="Click to edit",this._value?t.innerHTML=this._value:(t.style.color="#9ca3af",t.textContent="empty"),t.addEventListener("click",()=>this.beginEdit()),this.append(t)}beginEdit(){this.editing=!0,this.innerHTML="";const t=document.createElement("input");t.type="text",t.value=this._value,t.style.cssText="width:100%;box-sizing:border-box";let n=!1;const r=()=>{n||(n=!0,this.editing=!1,this._value=t.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:t.value},bubbles:!0,composed:!0})),this.render())};t.addEventListener("blur",r),t.addEventListener("keydown",i=>{i.key==="Enter"?(i.preventDefault(),t.blur()):i.key==="Escape"&&(i.preventDefault(),n=!0,this.editing=!1,this.render())}),this.append(t),t.focus(),t.select()}}const Pw=Object.freeze(Object.defineProperty({__proto__:null,init:Ow,meta:Rw},Symbol.toStringTag,{value:"Module"})),Lw={id:"cell-link",name:"Cell Link",type:"cell-renderer",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-link.ts"};function Mw(e){customElements.get("cell-link")||customElements.define("cell-link",jw),e.ui.registerCellRenderer("link","cell-link")}class jw extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1,this._editor=null,this._raw=null}set value(t){const n=t==null?"":String(t);this._value!==n&&(this._value=n,this._editing=!1,this.render())}get value(){return this._value}set rawValue(t){const n=t==null?"":String(t);this._raw!==n&&(this._raw=n,this._editing&&this.render())}get rawValue(){return this._raw??this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="",this._editor=null;const t=this._value,n=this._editing?null:Nw(t),r=!this._editing&&!n?zw(t):null,i=!this._editing&&!n&&!r?Uw(t):null;if(n||r||i){const s=document.createElement("span");s.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const o=document.createElement("a");o.href=n?t:r?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,n&&(o.target="_blank",o.rel="noopener noreferrer"),o.textContent=t,o.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",o.title=n?`Open ${t}`:r?`Email ${t}`:`Call ${t}`;const l=document.createElement("button");l.type="button",l.title="Edit",l.textContent="✎",l.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",l.addEventListener("click",u=>{u.preventDefault(),u.stopPropagation(),this._editing=!0,this.render()}),s.append(o,l),this.append(s)}else{const s=document.createElement("input");s.type="text",s.value=this.rawValue,s.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",s.addEventListener("change",()=>{this._editor===s&&this.commit(s.value)}),s.addEventListener("keydown",o=>{o.key==="Enter"?(o.preventDefault(),this.commit(s.value)):o.key==="Escape"&&(this._editor=null,this._editing=!1,this.render())}),s.addEventListener("blur",()=>{this._editor===s&&this.commit(s.value)}),this.append(s),this._editor=s,this._editing&&setTimeout(()=>{s.focus(),s.select()},0)}}commit(t){const n=t!==this.rawValue;this._raw===null?this._value=t:this._raw=t,this._editing=!1,this.render(),n&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Nw(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function zw(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function Uw(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const n=t.replace(/\D/g,"");if(n.length<7||n.length>15)return null;const r=/[ ()\-.]/.test(t),i=t.startsWith("+");return!r&&!i&&n.length<10?null:t}const Fw=Object.freeze(Object.defineProperty({__proto__:null,init:Mw,meta:Lw},Symbol.toStringTag,{value:"Module"})),br={id:"auto-renderer",name:"Auto Renderer",type:"cell-renderer",version:"0.1.0",description:"After any import, gives columns a renderer based on their values: link for URLs, image for image URLs, html-preview for markup or long text.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 3 8 6.5 4.5 8 8 9.5 9.5 13 11 9.5 14.5 8 11 6.5 9.5 3z"/><path d="M17.5 12 16.75 14 15 14.75 16.75 15.5 17.5 17.5 18.25 15.5 20 14.75 18.25 14 17.5 12z"/><path d="M4 17h9"/><path d="M4 21h6"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-renderer.ts"},Bw=120,md=50,qw=/\.(png|jpe?g|gif|webp|svg|avif|bmp|ico)(\?|#|$)/i,Hw=/<[a-z][a-z0-9-]*(\s[^<>]*)?\/?>/i;function gd(e){return/^https?:\/\/\S+$/i.test(e)}function Kw(e){return/^data:image\//i.test(e)?!0:gd(e)&&qw.test(e)}function bd(e,t){if(e!=="string")return;const n=[];for(const i of t){if(i==null)continue;const s=typeof i=="string"?i.trim():String(i).trim();s&&n.push(s)}if(n.length===0)return;if(n.every(Kw))return"image";if(n.every(gd))return"link";if(n.some(i=>Hw.test(i))||n.reduce((i,s)=>i+s.length,0)/n.length>Bw)return"html-preview"}function da(e,t){return t.length===0?[...e]:e.map(n=>{if(n.renderer)return n;const r=bd(n.type,t.map(i=>i[n.field]));return r?{...n,renderer:r}:n})}function Vw(e){e.events.on("import:after",({tableId:t})=>{Gw(e,t)}),e.ui.registerColumnEditorAction({id:"auto-renderer:guess",label:"Guess renderers",icon:"auto_fix_high",tooltip:"Pick a renderer for each column from what its values look like",async run(t,{columns:n,tableId:r}){if(!r)return t.ui.dialogs.toast("Guessing needs rows to look at — import or add data first.",{kind:"info",title:br.name}),null;const i=(await t.store.rows(r).find()).slice(0,md);if(i.length===0)return t.ui.dialogs.toast("This table has no rows to learn from yet.",{kind:"info",title:br.name}),null;const s=n.map(({renderer:u,...h})=>h),o=da(s,i.map(u=>u.data)),l=o.filter((u,h)=>u.renderer!==n[h]?.renderer).length;return t.ui.dialogs.toast(l===0?"No renderer fits these values — columns left as they are.":`Set ${l} renderer${l===1?"":"s"}. Press Save to keep them.`,{kind:l===0?"info":"success",title:br.name}),o}})}async function Gw(e,t){try{const n=await e.store.tables.findOne(t);if(!n||n.columns.length===0||n.columns.every(s=>s.renderer))return;const r=(await e.store.rows(t).find()).slice(0,md);if(r.length===0)return;const i=da(n.columns,r.map(s=>s.data));if(i.every((s,o)=>s.renderer===n.columns[o]?.renderer))return;await e.store.tables.upsert({...n,columns:i,updatedAt:Date.now()})}catch(n){e.events.emit("plugin:error",{url:br.id,phase:"runtime",error:n})}}const Ww=Object.freeze(Object.defineProperty({__proto__:null,inferRenderer:bd,init:Vw,meta:br,withInferredRenderers:da},Symbol.toStringTag,{value:"Module"})),Yw={id:"delete-table",name:"Delete Table",type:"ui",version:"0.1.0",description:"Adds a trash button to each table window that permanently deletes the table and its rows (with confirmation).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/delete-table.ts"};function Qw(e){e.ui.registerTableButton({id:"delete-table:delete",label:"Delete",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="#7f1d1d" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',tooltip:"Delete this table permanently",onClick:async(t,n)=>{const r=await t.store.tables.findOne(n.tableId);!r||!await t.ui.dialogs.confirm(r.source?`Delete the live table "${r.name}"? Its data stays on the server — only the local connection is removed.`:`Permanently delete table "${r.name}" and all its rows? This can't be undone.`,"Delete table")||(await cd(n.tableId),t.ui.dialogs.toast(`Deleted "${r.name}".`,{kind:"success",title:"Delete table"}))}})}const Xw=Object.freeze(Object.defineProperty({__proto__:null,init:Qw,meta:Yw},Symbol.toStringTag,{value:"Module"}));var Jw=Object.defineProperty,Zw=Object.getOwnPropertyDescriptor,ha=(e,t,n,r)=>{for(var i=r>1?void 0:r?Zw(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Jw(t,n,i),i};function wd(e,t){return(Ct.instance??ey()).open(e,t)}function ey(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let Ct=class extends ve{constructor(){super(...arguments),this.rows=[],this.subject="",this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((n,r)=>{const i=this.rows[r],s=i.field.trim(),o=i.label.trim()||s;return{...n,field:s,label:o,hidden:i.hidden}});this.finish(t)},this.toggleAllHidden=()=>{const e=this.rows.length>0&&this.rows.every(t=>t.hidden);this.rows=this.rows.map(t=>({...t,hidden:!e}))}}connectedCallback(){super.connectedCallback(),Ct.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ct.instance===this&&(Ct.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pt(this.dialogEl,e)}open(e,t){return this.source=e,this.subject=t??"",this.rows=e.map(n=>({field:n.field,label:n.label,hidden:!!n.hidden})),new Promise(n=>{this.resolveFn=n,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((n,r)=>{const i=n.field.trim().toLowerCase();if(i===""){e.add(r);return}(t.get(i)??t.set(i,[]).get(i)).push(r)});for(const n of t.values())if(n.length>1)for(const r of n)e.add(r);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,n){this.rows=this.rows.map((r,i)=>i===e?{...r,[t]:n}:r)}setHidden(e,t){this.rows=this.rows.map((n,r)=>r===e?{...n,hidden:t}:n)}render(){const e=this.invalidIndices(),t=e.size;return k`
      <dialog @cancel=${this.onCancel} @keydown=${ft}>
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
                @keydown=${n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),this.toggleAllHidden())}}
              >
                Hide
              </div>
              ${this.rows.map((n,r)=>k`
                  <input
                    class=${e.has(r)?"invalid":""}
                    .value=${n.field}
                    aria-label=${`Column ${r+1} name`}
                    @input=${i=>this.updateRow(r,"field",i.target.value)}
                  />
                  <input
                    .value=${n.label}
                    aria-label=${`Column ${r+1} label`}
                    @input=${i=>this.updateRow(r,"label",i.target.value)}
                  />
                  <div class="hidecell">
                    <input
                      type="checkbox"
                      .checked=${n.hidden}
                      aria-label=${`Hide column ${r+1}`}
                      @change=${i=>this.setHidden(r,i.target.checked)}
                    />
                  </div>
                `)}
            </div>
            <p class="err">
              ${t>0?`Fix ${t} column name${t===1?"":"s"} — names must be unique and non-empty.`:re}
            </p>
          </div>
        </form>
      </dialog>
    `}};Ct.instance=null;Ct.styles=[ht,xe`
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
    `];ha([U()],Ct.prototype,"rows",2);ha([U()],Ct.prototype,"subject",2);Ct=ha([Se("column-names-dialog")],Ct);const ty=Object.freeze(Object.defineProperty({__proto__:null,get ColumnNamesDialog(){return Ct},editColumnNames:wd},Symbol.toStringTag,{value:"Module"}));async function ny(e,t,n){const r=t.origin?.url;if(!r)throw new Error(`"${t.name}" has no source URL to reload from.`);const i={api:e,fetchText:(W,G)=>Ar(e,W,G??`Reading ${t.name}…`,{maxBytes:null}),panel:{}},s=await n.list(i,{kind:"url",url:r});if(s.length===0)throw new Error(`Nothing to read at ${r} any more.`);const o=s.find(W=>W.name===t.name)??(s.length===1?s[0]:void 0);if(!o)throw new Error(`"${t.name}" is no longer one of the tables at ${r}.`);let l=[];const u=[];for await(const W of n.read(i,o))W.columns?.length&&(l=W.columns),u.push(...W.rows);const{columns:h,newFields:m}=Bi(t.columns,l,t.deletedColumns??[]),g=t.origin?.pks??[],w=new Set(l.map(W=>W.field)),y=t.columns.map(W=>W.field).filter(W=>!w.has(W)&&!g.includes(W)),x=(t.deletedColumns??[]).filter(W=>w.has(W)),C=e.store.rows(t.id),O=await C.find(),{data:M,merged:L}=bu({oldRows:O.map(W=>({data:W.data})),freshRows:u,pks:g,userAddedFields:y,deletedRemoteFields:x}),F=Date.now();h.length>0&&await e.store.tables.patch(t.id,{columns:h,updatedAt:F}),await C.bulkRemove(O.map(W=>W.id));const V=M.map(W=>({id:Ce(),tableId:t.id,data:W,updatedAt:F}));return await C.bulkInsert(V),{rowCount:V.length,newFields:m,merged:L}}var ry=Object.defineProperty,iy=Object.getOwnPropertyDescriptor,qe=(e,t,n,r)=>{for(var i=r>1?void 0:r?iy(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&ry(t,n,i),i};const sy="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",oy="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",ay='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',gc=[{label:"Northwind — sample database (JSON dump)",url:sy,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:oy,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],ly={id:"import-data",name:"Import Data",type:"importer",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/import-data.ts"};function cy(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:ay,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>dy(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:n})=>uy(t,n)})}async function uy(e,t){const n=await e.store.tables.findOne(t);if(n?.origin?.url)try{const r=await fa(n.origin.type);if(!r)throw new Error(`No importer is installed that can read a "${n.origin.type}" source.`);const i=await ny(e,n,r),s=[];i.newFields.length>0&&s.push(`${i.newFields.length} new column${i.newFields.length===1?"":"s"}`),!i.merged&&i.rowCount>0&&s.push("rows replaced (no primary key to match on)"),e.ui.dialogs.toast(`Refreshed "${n.name}" (${i.rowCount.toLocaleString()} rows)${s.length?` — ${s.join(", ")}`:""}.`,{kind:i.newFields.length>0?"warning":"success",title:"Refresh"})}catch(r){e.ui.dialogs.toast(`Couldn't refresh "${n.name}": ${r.message}`,{kind:"error",title:"Refresh"})}}async function dy(e,t="auto"){const r=await(_e.instance??wy()).open({presetKind:t,async listDatabases(C){const O=Ot(C);return _u(M=>e.backend.fetch(M),O.base)},async listTables(){const C=e.workspaceId();return(await e.store.tables.find()).filter(O=>O.workspaceId===C&&!O.source).map(O=>({id:O.id,name:O.name})).sort((O,M)=>O.name.localeCompare(M.name))}});if(!r)return;const{url:i,file:s,kind:o,dbChosen:l,editColumns:u,maxRows:h,mode:m,panel:g,target:w}=r,y=s?.name??i,x=u?(C,O)=>wd(C,O):void 0;typeof g.separator=="string"&&g.separator;try{if(o==="sql"){await hy(e,{url:i,file:s,label:y,maxRows:h,mode:m,target:w,panel:g,editHook:x});return}const C=await fa(o);if(C){const O=o==="json"?await fy(e,i,s,h,m):null;if(O?.isDump&&await e.ui.dialogs.confirm(`"${y}" is a workspace dump, not a plain table. Restore it — tables, window layout, views and filters? Choose Cancel to import only its tables as data.`,"Restore workspace")){await Uo(e,O.text,y,{maxRows:h,editColumns:x,...s?{}:{originUrl:i}});return}const M=s?s.name:Nt(i),L=O?{kind:"text",text:O.text,name:M}:s?{kind:"file",file:s}:{kind:"url",url:i},F=await qi(e,C,L,{mode:m,target:w,maxRows:h,panel:g,...O&&!s?{origin:{type:C.id,url:i}}:{},...x?{editColumns:V=>x(V)}:{}});C.ownToasts||yd(e,F,y);return}if(m==="reference"&&!s){o==="datasette"?await by(e,i):await vd(e,i,o);return}await sa(e,i,{skipTablePicker:l,maxRows:h,editColumns:x})}catch(C){e.ui.dialogs.toast(`Could not import ${y}: ${C.message}`,{kind:"error",title:"Import"})}}async function hy(e,t){const{url:n,file:r,label:i,maxRows:s,mode:o,target:l,panel:u,editHook:h}=t;if(o==="reference")throw new Error("A .sql script cannot be referenced live — it is a script to run, not a rows endpoint. Import it as a Copy instead.");const m=r?await r.text():await Ar(e,n,`Reading ${Nt(n)}…`,s!=null?{maxBytes:null}:{});if(Go(m)){const y=await Wo(e,m,{maxRows:s,target:l,...h?{editColumns:h}:{}});Yo(e,y,i);return}const g=await fa("sql");if(!g)throw new Error("The SQL importer is not installed.");const w=await qi(e,g,{kind:"text",text:m,name:r?r.name:Nt(n)},{mode:o,target:l,maxRows:s,panel:u,...r?{}:{origin:{type:g.id,url:n}},...h?{editColumns:y=>h(y)}:{}});yd(e,w,i)}async function fy(e,t,n,r,i){if(i==="reference")return null;const s=n?await n.text():await Ar(e,t,`Reading ${Nt(t)}…`,r!=null?{maxBytes:null}:{});try{return{text:s,isDump:zo(JSON.parse(s))}}catch{return{text:s,isDump:!1}}}async function fa(e){const{registries:t}=await ae();return t.importers.find(n=>n.id===e&&n.supports?.kernel===!0)}function yd(e,t,n){if(t.cancelled&&t.landed.length===0)return;const r=t.landed.reduce((o,l)=>o+l.rowCount,0),i=t.landed.length===1?`"${t.landed[0].tableName}"`:`${t.landed.length} tables from ${n}`;if(t.landed.length>0){const o=t.failed.length>0?` — ${t.failed.length} failed`:"";e.ui.dialogs.toast(`Imported ${i} (${r.toLocaleString()} rows)${o}.`,{kind:t.failed.length>0?"warning":"success",title:"Import"});return}const s=t.failed.map(o=>`${o.name}: ${o.error}`).join("; ");e.ui.dialogs.toast(`Could not import ${n}${s?` — ${s}`:""}.`,{kind:"error",title:"Import"})}function py(e){const t=JSON.parse(e),n=r=>Array.isArray(r)&&r.every(i=>i!=null&&typeof i=="object"&&!Array.isArray(i));if(n(t))return t;if(t&&typeof t=="object"){const r=t;for(const i of["rows","records","data"])if(n(r[i]))return r[i];for(const i of Object.values(r))if(n(i))return i}return[]}function my(e){const t=py(e).slice(0,50),n=i=>typeof i=="number"?"number":typeof i=="boolean"?"boolean":"string",r=new Map;for(const i of t)for(const[s,o]of Object.entries(i))!r.has(s)&&o!=null?r.set(s,n(o)):r.has(s)||r.set(s,"string");return[...r.entries()].map(([i,s])=>({field:i,label:i,type:s}))}function gy(e,t,n){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(n)}.json?_size=max`}async function by(e,t){const n=Ot(t),i=await ra(l=>e.backend.fetch(l),n,"Reference");if(i===null)return;if(i.length===0)throw new Error("No tables found to reference at that URL.");let s=0;const o=[];for(const l of i)try{await vd(e,gy(n.base,l.db,l.table),"json",{nameHint:`${l.db}/${l.table}`,silent:!0}),s++}catch(u){o.push(`${l.table}: ${u.message}`)}e.ui.dialogs.toast(`Referenced ${s} table${s===1?"":"s"}${o.length?` — ${o.length} failed`:""}.`,{kind:o.length?"warning":"success",title:"Reference"})}async function vd(e,t,n,r={}){const i=e.workspaceId();if(!i)throw new Error("No active workspace.");const s=r.nameHint??Nt(t),o=await Ar(e,t,`Reading ${s}…`,{maxBytes:null}),l=n==="csv"?Un(o).columns:my(o);if(l.length===0)throw new Error("No columns found in the referenced data.");const u=new Set((await e.store.tables.find()).filter(g=>g.workspaceId===i).map(g=>g.name.toLowerCase()));let h=s;for(let g=2;u.has(h.toLowerCase());g++)h=`${s}-${g}`;const m={id:Ce(),workspaceId:i,name:h,code:Le(h),columns:l,view:"table",source:{type:"url",config:{url:t,format:n}},readonly:!0,updatedAt:Date.now()};await e.store.tables.insert(m),r.silent||e.ui.dialogs.toast(`Referenced ${h} — live, read-only.`,{kind:"success",title:"Reference"})}function wy(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function yy(e){try{const t=new URL(e),n=t.hostname.toLowerCase(),r=[...t.searchParams.keys()].some(s=>s.startsWith("_")),i=n.includes("datasette")||r;return!r&&/\.(csv|tsv|tab)$/i.test(t.pathname)?"csv":!r&&/\.sql$/i.test(t.pathname)?"sql":!r&&/\.json$/i.test(t.pathname)?"json":i?"datasette":"json"}catch{return"json"}}function bc(e,t){if(t!=="datasette"||!e)return!1;try{const n=Ot(e);return!n.db&&!n.table}catch{return!1}}function vy(e){return/\.(csv|tsv|tab)$/i.test(e)?"csv":/\.sql$/i.test(e)?"sql":"json"}let _e=class extends ve{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.targetKind="new",this.targetTableId="",this.tables=[],this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.panelEl=null,this.mountedPanel="",this.panelGeneration=0,this.formats=[],this.acceptAttr=".txt",this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t&&!this.file)return;const n=this.resolvedKind,r=this.maxRows,i=this.editColumns&&this.mode==="copy",s=this.panelValue(),o=this.supportsTarget?this.target:{kind:"new"},l=this.file?"copy":this.mode;if(this.file){this.finish({url:"",file:this.file,kind:n,editColumns:i,maxRows:r,mode:l,panel:s,target:o});return}const u=n==="datasette"&&!!this.selectedDb&&bc(t,n),h=u?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:h,kind:n,dbChosen:u,editColumns:i,maxRows:r,mode:l,panel:s,target:o})}}get supportsTarget(){return this.formats.find(e=>e.id===this.resolvedKind)?.kernel===!0}get target(){return this.mode==="reference"||this.targetKind==="new"||!this.targetTableId?{kind:"new"}:{kind:this.targetKind,tableId:this.targetTableId}}get resolvedKind(){return this.kind!=="auto"?this.kind:this.file?vy(this.file.name):yy(this.url.trim())}get maxRows(){const e=Math.floor(Number(this.maxRowsInput));return Number.isFinite(e)&&e>0?e:void 0}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),_e.instance=this}disconnectedCallback(){super.disconnectedCallback(),_e.instance===this&&(_e.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pt(this.dialogEl,e)}updated(){const e=this.shadowRoot?.querySelector(".panel-slot");if(!e){this.panelEl=null,this.mountedPanel="";return}const t=this.activePanelTag,n=t?`${t}#${this.panelGeneration}`:"";if(n===this.mountedPanel||(e.replaceChildren(),this.panelEl=null,this.mountedPanel=n,!t))return;const r=document.createElement(t);r.addEventListener("change",()=>this.requestUpdate()),e.appendChild(r),this.panelEl=r}get activePanelTag(){return this.formats.find(e=>e.id===this.resolvedKind)?.panel}get activeLabel(){return this.formats.find(e=>e.id===this.resolvedKind)?.label??this.resolvedKind}panelValue(){const e=this.panelEl?.value;return e&&typeof e=="object"?e:{}}async loadFormats(){const{registries:e}=await ae(),t=[...e.importers].sort((i,s)=>(i.order??Number.MAX_SAFE_INTEGER)-(s.order??Number.MAX_SAFE_INTEGER)).map(i=>({id:i.id,label:i.label,panel:i.panel,kernel:i.supports?.kernel})),n=t.some(i=>i.id==="datasette")?t:[...t,{id:"datasette",label:"Datasette (table or instance)"}];this.formats=n;const r=new Set([".txt"]);for(const i of e.importers)for(const s of i.accept??[])r.add(s);this.acceptAttr=[...r].join(",")}open(e){this.targetKind="new",this.targetTableId="",this.tables=[],e?.listTables?.().then(n=>{this.tables=n}),this.url="",this.kind=e?.presetKind??"auto",this.presetIdx=-1,this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.panelGeneration+=1,this.resetDbList(),this.listDatabases=e?.listDatabases??null;const t=this.loadFormats();return new Promise(n=>{this.resolveFn=n,t.then(()=>this.updateComplete).then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const n=gc[t];n&&(this.url=n.url,this.kind=n.kind)}onFileChange(e){const n=e.target.files?.[0]??null;this.file=n,n&&(this.url="",this.presetIdx=-1,this.resetDbList())}renderDbPicker(){return!this.listDatabases||!bc(this.url.trim(),this.resolvedKind)?re:k`
      <label>
        Database
        <div class="row db-row">
          <select
            .value=${this.selectedDb}
            ?disabled=${!this.dbList||this.dbList.length===0}
            @change=${e=>{this.selectedDb=e.target.value}}
          >
            ${this.dbList?k`
                  <option value="" ?selected=${this.selectedDb===""}>
                    — all databases (choose tables next) —
                  </option>
                  ${this.dbList.map(e=>k`<option value=${e} ?selected=${e===this.selectedDb}>${e}</option>`)}
                `:k`<option value="">— not loaded —</option>`}
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
      ${this.dbError?k`<p class="hint error">${this.dbError}</p>`:re}
    `}renderTarget(){if(!this.supportsTarget||this.mode==="reference")return re;const e=this.targetKind!=="new";return k`
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
          ${e?k`<select
                data-testid="import-target-table"
                .value=${this.targetTableId}
                @change=${t=>{this.targetTableId=t.target.value}}
              >
                ${this.tables.length===0?k`<option value="">— no tables yet —</option>`:this.tables.map(t=>k`<option value=${t.id} ?selected=${t.id===this.targetTableId}>
                          ${t.name}
                        </option>`)}
              </select>`:re}
        </div>
      </label>
      ${e?k`<p class="hint">
            The table keeps its own columns. Values map onto them the way the format requires — a
            CSV by column position, so its header names need not match.
          </p>`:re}
    `}renderPluginBlock(){const e=this.renderDbPicker();return!!!this.activePanelTag&&e===re?re:k`
      <fieldset class="block">
        <legend>${this.activeLabel} options</legend>
        <div class="panel-slot"></div>
        ${e}
      </fieldset>
    `}render(){return k`
      <dialog @cancel=${this.onCancel} @keydown=${ft}>
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
                ${this.formats.map(e=>k`<option value=${e.id} ?selected=${this.kind===e.id}>${e.label}</option>`)}
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
                  ${gc.map((e,t)=>k`<option value=${String(t)} ?selected=${t===this.presetIdx}>
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
              ${this.file?k`<p class="hint">
                    Importing <strong>${this.file.name}</strong> as
                    ${this.resolvedKind.toUpperCase()}.
                  </p>`:re}

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
              ${this.file?k`<p class="hint">Uploaded files can only be imported as a Copy.</p>`:re}
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
              ${this.mode==="reference"?k`<p class="hint">
                    A Reference keeps the source's own schema, so there is nothing to edit.
                  </p>`:re}

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
      ${re}
    `}};_e.instance=null;_e.styles=[ht,xe`
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
    `];qe([U()],_e.prototype,"url",2);qe([U()],_e.prototype,"kind",2);qe([U()],_e.prototype,"presetIdx",2);qe([U()],_e.prototype,"dbList",2);qe([U()],_e.prototype,"dbLoading",2);qe([U()],_e.prototype,"dbError",2);qe([U()],_e.prototype,"selectedDb",2);qe([U()],_e.prototype,"editColumns",2);qe([U()],_e.prototype,"file",2);qe([U()],_e.prototype,"maxRowsInput",2);qe([U()],_e.prototype,"mode",2);qe([U()],_e.prototype,"targetKind",2);qe([U()],_e.prototype,"targetTableId",2);qe([U()],_e.prototype,"tables",2);qe([U()],_e.prototype,"formats",2);qe([U()],_e.prototype,"acceptAttr",2);_e=qe([Se("import-dialog")],_e);const $y=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return _e},init:cy,meta:ly},Symbol.toStringTag,{value:"Module"})),xy={id:"auto-sync",name:"Auto Sync",type:"sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-sync.ts"},ky=6e4;let wc=null,go=!1;const Zs=new Map;function Cy(e){wc===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(wc=setInterval(()=>{$d(e)},ky)))}async function $d(e){if(go)return;const t=e.workspaceId();if(!t)return;const n=await Qu(e);if(n)try{await _y(e,n,t)}catch(r){console.warn("[auto-sync]",r)}}async function _y(e,t,n){const r=await Qi(e),i=await Xu(e,n),s=await fetch(`${t}/sync/${encodeURIComponent(n)}`);if(s.status===404){await yc(e,t,n,r,null);return}if(!s.ok)return;const o=Xi(s.headers.get("ETag")),l=await s.text();if(tc(r)===tc(l)){o&&o!==i&&await yn(e,n,o);return}if(o&&o===i){await yc(e,t,n,r,i);return}if(!(o&&Zs.get(n)===o)){go=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${n}". Pull and replace your local copy?`,"auto-sync")){const h=JSON.parse(l),m=await Ju(e,n,h);o&&await yn(e,n,o),Zs.delete(n),e.ui.dialogs.toast(`Pulled ${m} table${m===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else o&&Zs.set(n,o)}finally{go=!1}}}async function yc(e,t,n,r,i){const s={"Content-Type":"application/json"};i&&(s["If-Match"]=`"${i}"`);const o=await fetch(`${t}/sync/${encodeURIComponent(n)}`,{method:"PUT",headers:s,body:r});if(o.ok){const l=Xi(o.headers.get("ETag"));l&&await yn(e,n,l);return}if(o.status===412){const l=await o.json().catch(()=>({}));l.currentEtag&&await yn(e,n,l.currentEtag)}}const xd=Object.freeze(Object.defineProperty({__proto__:null,load:Cy,meta:xy,tick:$d},Symbol.toStringTag,{value:"Module"}));var Sy=Object.defineProperty,Ey=Object.getOwnPropertyDescriptor,Hn=(e,t,n,r)=>{for(var i=r>1?void 0:r?Ey(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Sy(t,n,i),i};function bo(e,t){(at.instance??Ty()).open(e,t)}function Ty(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function eo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let at=class extends ve{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.mode==="template"?this.saveTemplate():this.mode==="instance"?this.saveInstance():this.close()}}connectedCallback(){super.connectedCallback(),at.instance=this}disconnectedCallback(){super.disconnectedCallback(),at.instance===this&&(at.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pt(this.dialogEl,e)}async open(e,t){if(this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),t?.editTemplateId){const n=this.templates.find(r=>r.id===t.editTemplateId);n&&this.editTemplate(n)}else if(t?.editInstanceId){const n=this.instances.find(r=>r.id===t.editInstanceId);n&&await this.editInstance(n)}await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await ae(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(n=>n.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((n,r)=>n.name.localeCompare(r.name))}async openInstance(e){await(await ae()).store.viewInstances.patch(e,{open:!0,updatedAt:Date.now()}),this.close()}async editInstance(e){const n=await(await ae()).store.viewTemplates.findOne(e.templateId),r=n?Ql(n.headerHtml,n.rowHtml,n.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:n?.name??"template",name:e.name,tokens:r,mapping:{...e.mapping},limit:e.limit??0,readonly:e.readonly??!1},this.mode="instance"}async deleteInstance(e){await(await ae()).store.viewInstances.remove(e),await this.refresh()}async copyInstance(e){const t=await ae(),n=this.columns.filter(i=>!i.hidden).map(i=>i.field),r={...e,id:eo(),name:`${e.name} copy`,visibleColumns:n,open:!1,windowGeometry:void 0,updatedAt:Date.now()};await t.store.viewInstances.insert(r),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async deleteTemplate(e){const t=await ae();await t.api.ui.dialogs.confirm(e.builtin?`Delete the built-in template "${e.name}"? It will not be seeded again in this workspace. Views already created from it keep working.`:`Delete the template "${e.name}"? Views already created from it keep working.`,e.builtin?"Delete built-in template":"Delete template")&&(await t.store.viewTemplates.remove(e.id),document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh())}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await ae(),n=this.templates.find(r=>r.id!==e.id&&r.name.trim().toLowerCase()===e.name.trim().toLowerCase());if(n){await t.api.ui.dialogs.alert(`A template called “${n.name}” already exists. Pick another name.`,"Duplicate template name");return}if(e.id){const r=this.templates.find(i=>i.id===e.id)?.builtin;await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,...r?{builtin:!1}:{},updatedAt:Date.now()})}else await t.store.viewTemplates.insert({id:eo(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()});document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh(),this.mode="list"}useTemplate(e){const t=Ql(e.headerHtml,e.rowHtml,e.footerHtml),n={};for(const r of t)n[r]=this.autoMap(r);this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:n,limit:0,readonly:!1},this.mode="instance"}firstColumn(e){const t=this.columns.find(e);return t?t.field:""}autoMap(e){const t=e.toLowerCase(),n=this.columns.find(g=>g.field.toLowerCase()===t||(g.label??"").toLowerCase()===t);if(n)return n.field;const r=/^check(\d+)$/i.exec(e);if(r){const g=Number(r[1])-1;return this.columns.filter(y=>y.type==="boolean")[g]?.field??""}if(["done","complete","completed","checked","check","read","active","enabled","starred","flag","ok"].includes(t))return this.firstColumn(g=>g.type==="boolean");const s=this.table?.labelColumn;if(s&&(t==="title"||t==="name"||t==="label"))return s;if(["date","datetime","time","created","updated","modified","timestamp","day","when"].includes(t))return this.firstColumn(g=>g.type==="date"||g.type==="datetime");const l=["url","link","href","website","homepage","uri","site","web"];if(l.includes(t)){const g=this.firstColumn(w=>w.renderer==="link");return g||this.firstColumn(w=>{const y=w.field.toLowerCase(),x=(w.label??"").toLowerCase();return l.some(C=>y.includes(C)||x.includes(C))})}const u=g=>w=>{const y=w.field.toLowerCase(),x=(w.label??"").toLowerCase();return g.some(C=>y.includes(C)||x.includes(C))},h=["image","img","photo","picture","pic","thumbnail","thumb","avatar","cover","poster","logo","icon"];if(h.includes(t)){const g=this.firstColumn(y=>y.renderer==="image");if(g)return g;const w=this.firstColumn(u(h));return w||this.firstColumn(u(["url","src","href","link"]))}if(["email","mail","e-mail"].includes(t))return this.firstColumn(u(["mail"]));if(["phone","tel","telephone","mobile","cell","cellphone"].includes(t))return this.firstColumn(u(["phone","tel","mobile","cell"]));const m=["description","desc","notes","note","body","text","summary","about","comment","comments","details","detail","remarks"];if(m.includes(t)){const g=this.firstColumn(C=>{if(C.type!=="string")return!1;const O=C.field.toLowerCase(),M=(C.label??"").toLowerCase();return m.some(L=>O.includes(L)||M.includes(L))});if(g)return g;const w=this.columns.filter(C=>C.type==="string"),y=w[0];if(!y)return"";let x=y;for(const C of w)(C.max??0)>(x.max??0)&&(x=C);return x.field}return""}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await ae();if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},limit:e.limit>0?e.limit:void 0,readonly:e.readonly,updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.mode="list";return}const n=this.columns.filter(i=>!i.hidden).map(i=>i.field),r={id:eo(),workspaceId:t.workspaceId,tableId:this.tableId,tableName:this.table.name,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:n,mapping:{...e.mapping},updatedAt:Date.now(),...e.limit>0?{limit:e.limit}:{},...e.readonly?{readonly:!0}:{}};await t.store.viewInstances.insert(r),await this.openInstance(r.id)}renderList(){return k`
      <div class="section">
        <h3>Views of “${this.table?.name??""}”</h3>
        <ul class="list">
          ${this.instances.map(e=>k`<li>
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
          ${this.templates.map(e=>k`<li>
                <span class="name">${e.name}</span>
                ${e.builtin?k`<span class="badge">built-in</span>`:re}
                <button type="button" class="mini" @click=${()=>this.useTemplate(e)}>Use</button>
                <button type="button" class="mini" @click=${()=>this.editTemplate(e)}>
                  Edit
                </button>
                <button type="button" class="mini" @click=${()=>this.copyTemplate(e)}>
                  Copy
                </button>
                <button
                  type="button"
                  class="mini danger"
                  title=${e.builtin?"Delete this built-in template (it will not be seeded again)":"Delete this template"}
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
    `}renderTemplate(){const e=this.tDraft,t=n=>r=>{this.tDraft={...e,[n]:r.target.value}};return k`
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
    `}renderInstance(){const e=this.iDraft;return k`
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
        ${e.tokens.length===0?k`<p class="hint">
              This template has no <code>$TOKEN</code> placeholders — it will show the read-only
              table with your current sort, filter and visible columns.
            </p>`:e.tokens.map(t=>k`<div class="map-row">
                  <code>$${t}</code>
                  <select
                    @change=${n=>this.iDraft={...e,mapping:{...e.mapping,[t]:n.target.value}}}
                  >
                    <option value="" ?selected=${!e.mapping[t]}>— none —</option>
                    ${this.columns.map(n=>k`<option value=${n.field} ?selected=${e.mapping[t]===n.field}>
                          ${n.label||n.field}
                        </option>`)}
                  </select>
                </div>`)}
      </div>
      <p class="hint">
        ${e.id?k`Editing name and column mapping. The snapshotted sort, filters and visible columns
            are kept.`:k`The view snapshots this table's current sort, filters and visible columns.`}
      </p>
    `}render(){const e=this.mode==="template"?this.tDraft?.id?"Edit template":"New template":this.mode==="instance"?`${this.iDraft?.id?"Edit":"New"} view — ${this.iDraft?.templateName??""}`:"Views",t=this.mode==="template"?k`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
              Back
            </button>
            <button type="submit" class="primary">Save</button>`:this.mode==="instance"?k`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
                Back
              </button>
              <button type="submit" class="primary">
                ${this.iDraft?.id?"Save":"Create view"}
              </button>`:k`<button type="submit" class="ghost">Close</button>`;return k`
      <dialog @cancel=${this.close} @keydown=${ft}>
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
    `}};at.instance=null;at.styles=[ht,xe`
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
    `];Hn([U()],at.prototype,"mode",2);Hn([U()],at.prototype,"instances",2);Hn([U()],at.prototype,"templates",2);Hn([U()],at.prototype,"tDraft",2);Hn([U()],at.prototype,"iDraft",2);at=Hn([Se("views-dialog")],at);const Iy={id:"views",name:"Views",type:"ui",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/views.ts"},Ay="grid_view",Ry={slug:"rss",name:"RSS Feed",header:'<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>','<div style="display:flex;gap:16px;margin-top:8px;">$input.CHECK1$input.CHECK2</div>',"</div>"].join(""),footer:"</div>"},Oy={slug:"todo-list",name:"Todo List",header:'<div style="display:flex;flex-direction:column;gap:6px;padding:12px;max-width:720px;margin:0 auto;">',row:['<div style="display:flex;align-items:center;gap:10px;border:1px solid #e5e7eb;border-radius:8px;padding:8px 12px;background:#ffffff;">',"$input.DONE",'<span style="flex:1;font-weight:500;color:#111827;">$TITLE</span>','<span style="color:#6b7280;font-size:0.8rem;white-space:nowrap;">$DUE</span>',"</div>"].join(""),footer:"</div>"},Dy={slug:"gallery",name:"Gallery",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;padding:12px;">',row:['<figure style="margin:0;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$LINK" target="_blank" rel="noopener noreferrer" style="display:block;text-decoration:none;color:inherit;">','<img src="$IMAGE" alt="$TITLE" loading="lazy" style="width:100%;height:150px;object-fit:cover;display:block;background:#f3f4f6;" />','<figcaption style="padding:6px 8px;font-size:0.85rem;color:#374151;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">$TITLE</figcaption>',"</a>","</figure>"].join(""),footer:"</div>"},Py={slug:"contact-cards",name:"Contact Cards",header:'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;padding:12px;">',row:['<div style="border:1px solid #e5e7eb;border-radius:10px;padding:12px 14px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<div style="font-weight:600;color:#111827;font-size:0.95rem;">$NAME</div>','<a href="mailto:$EMAIL" style="color:#2563eb;text-decoration:none;font-size:0.85rem;word-break:break-all;">$EMAIL</a>','<div style="color:#6b7280;font-size:0.85rem;margin-top:2px;">$PHONE</div>',"</div>"].join(""),footer:"</div>"},Ly=[Ry,Oy,Dy,Py];function My(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:Ay,tooltip:"Views -- display this table through a template",onClick:(t,{tableId:n})=>bo(n)})}async function jy(e){await zy(e)}function Ny(e){let t=5381;const n=`${e.header} ${e.row} ${e.footer}`;for(let r=0;r<n.length;r++)t=(t<<5)+t+n.charCodeAt(r)|0;return(t>>>0).toString(36)}async function zy(e){const t=e.workspaceId();if(!t)return;const n=await e.store.viewTemplates.find({workspaceId:t});for(const r of Ly)await Uy(e,t,r,n)}async function Uy(e,t,n,r){const i=`views:seeded:${n.slug}:${t}`,s=`views:sig:${n.slug}:${t}`,o=Ny(n),l=r.find(h=>h.builtin&&h.name===n.name);if(l){(await e.store.settings.findOne(s))?.value!==o&&(await e.store.viewTemplates.patch(l.id,{headerHtml:n.header,rowHtml:n.row,footerHtml:n.footer,updatedAt:Date.now()}),await e.store.settings.upsert({name:s,value:o})),await e.store.settings.upsert({name:i,value:!0});return}(await e.store.settings.findOne(i))?.value||(await e.store.viewTemplates.insert({id:Fy(),workspaceId:t,name:n.name,headerHtml:n.header,rowHtml:n.row,footerHtml:n.footer,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({name:i,value:!0}),await e.store.settings.upsert({name:s,value:o}))}function Fy(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const By=Object.freeze(Object.defineProperty({__proto__:null,init:My,load:jy,meta:Iy},Symbol.toStringTag,{value:"Module"})),qy={id:"settings",name:"Settings",type:"ui",fixed:!0,version:"0.1.0",description:"Header gear button that opens the tabbed Settings dialog; imports dropped secrets.txt.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/settings.ts"};function Hy(e){e.ui.registerHeaderButton({id:"settings:open",label:"Settings",icon:"settings",tooltip:"Workspace and plugin settings",variant:"secondary",onClick:()=>e.ui.openSettings()}),e.ui.registerDropHandler(async(t,n)=>{const i=Array.from(t.dataTransfer?.files??[]).find(l=>l.name.toLowerCase()==="secrets.txt");if(!i)return!1;const s=await i.text(),o=Object.keys($r(s)).length;return Fi().trim().length>0&&!await n.ui.dialogs.confirm(`Replace your current secrets with ${o} secret${o===1?"":"s"} from "${i.name}"?`,"Import secrets")||(Vc(s),n.ui.dialogs.toast(`Imported ${o} secret${o===1?"":"s"}.`,{kind:"success",title:"Secrets"})),!0})}const Ky=Object.freeze(Object.defineProperty({__proto__:null,init:Hy,meta:qy},Symbol.toStringTag,{value:"Module"}));class Wt extends Error{constructor(t="this cell is derived"){super(`Projection is read-only — ${t}. Edit a base-table column, or import a copy.`),this.name="ProjectionReadOnlyError"}}function Vy(e){const t=e;return!t||!Array.isArray(t.sources)||!Array.isArray(t.columns)?{version:1,sources:[],columns:[]}:t}function Gy(e,t){for(const[n,r]of Object.entries(t))if(n!=="data"&&e[n]!==r)return!1;return!0}function Wy(e,t){const n=Vy(t.source?.config),r=new Set;let i=[],s=!1,o=null;const l=new Map;let u=null,h=!1;function m(L){const F=new Map;for(const W of L)F.has(W.name)||F.set(W.name,W);const V=new Map;for(const W of n.sources){let G;if(W.tableId){const q=L.find(Y=>Y.id===W.tableId);q&&q.name===W.tableName&&(G=q)}G??=F.get(W.tableName),G&&V.set(W.alias,G.id)}return V}async function g(){return m(await e.tables.find({workspaceId:t.workspaceId}))}async function w(){const L=await e.tables.find({workspaceId:t.workspaceId});if(xp(t.id,L))return[];const F=m(L),V={};for(const W of n.sources){const G=F.get(W.alias);if(!G)return[];V[W.alias]=await e.rows(G).find()}return pp(n,V).map(W=>({...W,tableId:t.id}))}async function y(){const L=await w();return i=L,s=!0,L}function x(){return o||(o=(async()=>{try{return await y()}finally{o=null}})(),o)}async function C(){const L=await g(),F=new Set(L.values());for(const[V,W]of l)F.has(V)||(W(),l.delete(V));for(const V of F)l.has(V)||l.set(V,e.rows(V).subscribe(O))}function O(){h||(h=!0,queueMicrotask(async()=>{h=!1,await C();const L=s?await y():await x();for(const F of r)F(L)}))}async function M(L,F){const V=Rr(n),W={};let G=null;for(const[K,ce]of Object.entries(F)){if(!V.has(K))continue;const pe=_p(n,L,K);pe&&(G=pe.baseRowId,W[pe.field]=ce)}if(!G||Object.keys(W).length===0)throw new Wt;const q=await g(),Y=n.sources[0]?.alias,ie=Y?q.get(Y):void 0;if(!ie)throw new Wt("the base table is not available");const se=e.rows(ie),H=await se.findOne(G);if(!H)throw new Wt("the underlying row no longer exists");return await se.patch(G,{data:{...H.data,...W},updatedAt:Date.now()}),{id:L,tableId:t.id,data:F,updatedAt:Date.now()}}return{async find(L){const F=s?i:await x();return!L||Object.keys(L).length===0?F:F.filter(V=>Gy(V,L))},async findOne(L){return(s?i:await x()).find(V=>V.id===L)??null},async insert(){throw new Wt("rows are derived from other tables")},async bulkInsert(){throw new Wt("rows are derived from other tables")},async upsert(L){return M(L.id,L.data)},async patch(L,F){if(!F.data)throw new Wt("a cell edit must carry row data");return M(L,F.data)},async remove(){throw new Wt("rows are derived from other tables")},async bulkRemove(){throw new Wt("rows are derived from other tables")},subscribe(L){return r.add(L),u||(u=e.tables.subscribe(O)),s?L(i):O(),()=>{if(r.delete(L),r.size===0){u?.(),u=null;for(const F of l.values())F();l.clear(),s=!1}}},async refresh(){await C();const L=await y();for(const F of r)F(L)}}}function Yy(e,t){const n=e.trim().toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"")||"col";let r=n,i=2;for(;t.has(r);)r=`${n}_${i++}`;return t.add(r),r}function Qy(e){for(let t=0;;t++){const n=String.fromCharCode(97+t%26)+(t>=26?String(Math.floor(t/26)):"");if(!e.some(r=>r.alias===n))return n}}function Xy(e,t,n){const r=t.sources.map(l=>{const u=n.find(w=>w.name===l.tableName)??n.find(w=>w.id===l.tableId),h={alias:l.alias,tableId:u?.id??l.tableId??"",tableName:l.tableName,columns:u?.columns??[]},m=l.join?.on??[],g=m[0];return l.join&&g&&(h.join={type:l.join.type,thisField:g.field,otherAlias:g.eqAlias,otherField:g.eqField},m.length>1&&(h.extraOn=m.slice(1))),h}),i=t.columns.map(l=>{const u={include:!0,outField:l.field,label:l.label??l.field};return l.from.kind==="source"?{...u,alias:l.from.alias,field:l.from.field,computed:!1}:{...u,script:l.from.script,computed:!0}}),s=[],o=new Set;r.forEach((l,u)=>{const h=r.slice(0,u).filter(m=>m.tableName===l.tableName).length;for(const m of l.columns){const g=i.filter(w=>!w.computed&&w.alias===l.alias&&w.field===m.field&&!o.has(w));if(g.length>0)for(const w of g)o.add(w),s.push(w);else s.push({include:!1,alias:l.alias,field:m.field,computed:!1,label:h>0?`${m.label} (${l.alias})`:m.label})}});for(const l of i)!l.computed&&!o.has(l)&&s.push(l);for(const l of i)l.computed&&s.push(l);return{name:e,sources:r,columns:s,...t.limit?{limit:t.limit}:{},original:t}}function Jy(e,t){const n=Qy(e.sources),r=e.sources.length===0,i=e.sources.filter(l=>l.tableName===t.name).length;let s;if(!r){const l=e.sources.flatMap(h=>h.join?[{alias:h.join.otherAlias,field:h.join.otherField},...(h.extraOn??[]).map(m=>({alias:m.eqAlias,field:m.eqField}))]:[]),u=Cp({tableName:t.name,fields:t.columns.map(h=>h.field),pks:t.columns.filter(h=>h.unique).map(h=>h.field)},e.sources.map(h=>({alias:h.alias,tableName:h.tableName,fields:h.columns.map(m=>m.field),pks:h.columns.filter(m=>m.unique).map(m=>m.field)})),l);s={type:"left",thisField:u?.thisField??t.columns[0]?.field??"",otherAlias:u?.otherAlias??e.sources[0]?.alias??"",otherField:u?.otherField??""}}const o={alias:n,tableId:t.id,tableName:t.name,columns:t.columns,...s?{join:s}:{}};return{...e,sources:[...e.sources,o],columns:[...e.columns,...t.columns.map(l=>({include:!0,alias:n,field:l.field,computed:!1,label:i>0?`${l.label} (${n})`:l.label}))]}}function Zy(e,t){const n=new Set([t]);for(let r=!0;r;){r=!1;for(const i of e.sources){if(n.has(i.alias)||!i.join)continue;[i.join.otherAlias,...(i.extraOn??[]).map(o=>o.eqAlias)].some(o=>n.has(o))&&(n.add(i.alias),r=!0)}}return{...e,sources:e.sources.filter(r=>!n.has(r.alias)),columns:e.columns.filter(r=>r.computed||!r.alias||!n.has(r.alias))}}function ev(e){return{...e,columns:[...e.columns,{include:!0,computed:!0,label:"computed",script:`function render(row) {
  return "";
}`}]}}function tv(e){const t=e.name.trim();if(!t)return{ok:!1,error:"Give the projection a name."};if(e.sources.length===0)return{ok:!1,error:"Add at least one source table."};const n=e.columns.filter(u=>u.include);if(n.length===0)return{ok:!1,error:"Select at least one column."};for(let u=0;u<e.sources.length;u++){const h=e.sources[u];if(!h?.join)continue;if(!h.join.thisField||!h.join.otherField)return{ok:!1,error:`Set both join keys for "${h.tableName}".`};const m=new Set(e.sources.slice(0,u).map(w=>w.alias));if([h.join.otherAlias,...(h.extraOn??[]).map(w=>w.eqAlias)].some(w=>!m.has(w)))return{ok:!1,error:`The join for "${h.tableName}" refers to a table that is no longer part of this projection.`}}const r=new Set(e.sources.map(u=>u.alias)),i=new Set,s=[];for(const u of n){let h;if(u.outField&&!i.has(u.outField)?(h=u.outField,i.add(h)):h=Yy(u.computed?"computed":u.field??"col",i),u.computed){s.push({field:h,from:{kind:"script",script:u.script??""}});continue}const m=u.alias,g=u.field;if(!m||!g||!r.has(m))return{ok:!1,error:`Column "${u.label??u.field}" belongs to a table that is no longer part of this projection.`};s.push({field:h,from:{kind:"source",alias:m,field:g}})}const o=e.sources.map(u=>{const h={alias:u.alias,tableName:u.tableName};return u.tableId&&(h.tableId=u.tableId),u.join&&(h.join={type:u.join.type,on:[{field:u.join.thisField,eqAlias:u.join.otherAlias,eqField:u.join.otherField},...u.extraOn??[]]}),h}),l={...e.original??{},version:1,sources:o,columns:s};return e.limit!=null&&e.limit>0?l.limit=Math.floor(e.limit):delete l.limit,{ok:!0,name:t,spec:l}}var nv=Object.defineProperty,rv=Object.getOwnPropertyDescriptor,Kn=(e,t,n,r)=>{for(var i=r>1?void 0:r?rv(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&nv(t,n,i),i};let lt=class extends ve{constructor(){super(...arguments),this.name="",this.limit="",this.sources=[],this.columns=[],this.error="",this.candidates=[],this.editing=!1,this.originalSpec=null,this.dialogEl=null,this.submit=async e=>{e.preventDefault(),this.error="";const t=this.buildSpec();if(!(!t||!this.onSave)){try{await this.onSave(t.name,t.spec)}catch(n){this.error=n?.message??String(n);return}this.dialogEl?.close()}}}connectedCallback(){super.connectedCallback(),lt.instance=this}disconnectedCallback(){super.disconnectedCallback(),lt.instance===this&&(lt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pt(this.dialogEl,e)}open(e){this.candidates=e.candidates,this.onSave=e.onSave,this.error="",this.editing=!!e.initial,this.originalSpec=null,this.name="",this.limit="",this.sources=[],this.columns=[],e.initial?this.loadFrom(e.initial.name,e.initial.spec):e.base&&(this.name=`${e.base.name} view`,this.addCandidateAsSource(e.base)),this.updateComplete.then(()=>this.dialogEl?.showModal())}modelOf(){const e=Number(this.limit);return{name:this.name,sources:this.sources,columns:this.columns,...this.limit.trim()!==""&&Number.isFinite(e)&&e>0?{limit:Math.floor(e)}:{},...this.originalSpec?{original:this.originalSpec}:{}}}applyModel(e){this.name=e.name,this.sources=e.sources,this.columns=e.columns,this.limit=e.limit!=null&&e.limit>0?String(e.limit):""}loadFrom(e,t){this.originalSpec=t,this.applyModel(Xy(e,t,this.candidates))}addSource(e){const t=this.candidates.find(n=>n.id===e);t&&this.addCandidateAsSource(t)}addCandidateAsSource(e){this.applyModel(Jy(this.modelOf(),e))}removeSource(e){this.applyModel(Zy(this.modelOf(),e))}addComputed(){this.applyModel(ev(this.modelOf()))}patchSource(e,t){this.sources=this.sources.map(n=>n.alias===e&&n.join?{...n,join:{...n.join,...t}}:n)}buildSpec(){const e=tv(this.modelOf());return e.ok?{name:e.name,spec:e.spec}:(this.error=e.error,null)}aliasesBefore(e){const t=this.sources.findIndex(n=>n.alias===e);return this.sources.slice(0,t)}render(){const e=this.sources[0];return k`
      <dialog @cancel=${()=>this.dialogEl?.close()} @keydown=${ft}>
        <button type="button" class="close-x" title="Close" @click=${()=>this.dialogEl?.close()}>×</button>
        <form @submit=${this.submit}>
          <div class="dialog-header">
            <h2>${this.editing?"Edit Projection":"New Projection"}</h2>
            <div class="header-actions">
              <button type="button" class="ghost" @click=${()=>this.dialogEl?.close()}>Cancel</button>
              <button type="submit" class="primary">Save</button>
            </div>
          </div>
          <div class="dialog-body">
            <div class="head-row">
              <label>
                Name
                <input id="proj-name" .value=${this.name} @input=${t=>this.name=t.target.value} />
              </label>
              <label>
                Row limit
                <input
                  id="proj-limit"
                  type="number"
                  min="0"
                  placeholder="all"
                  .value=${this.limit}
                  title="Cap the number of rows (TOP N). Blank or 0 shows every row."
                  @input=${t=>this.limit=t.target.value}
                />
              </label>
            </div>

            <section>
              <div class="section-head">
                <h3>Sources</h3>
                <span class="hint">The base table, plus a join for each table hung off it.</span>
              </div>
              <div class="sources">${this.sources.map((t,n)=>this.renderSource(t,n===0))}</div>
              <div class="add-row">
                <select id="add-src" ?disabled=${this.candidates.length===0}>
                  ${this.candidates.map(t=>k`<option value=${t.id}>${t.name}</option>`)}
                </select>
                <button
                  type="button"
                  class="ghost sm"
                  @click=${()=>{const t=this.shadowRoot?.getElementById("add-src");t?.value&&this.addSource(t.value)}}
                >
                  ${e?"+ Join table":"+ Base table"}
                </button>
                ${e?k`<span class="hint">A table may be joined more than once.</span>`:re}
              </div>
            </section>

            <section>
              <div class="section-head">
                <h3>Columns</h3>
                <span class="hint"> Tick what the projection includes. Labels, types and formatting are inherited from the source and edited with “Edit columns”. </span>
              </div>
              ${this.sources.map(t=>this.renderSourceColumns(t))} ${this.renderComputedColumns()}
            </section>

            <div class="err">${this.error}</div>
          </div>
        </form>
      </dialog>
    `}renderSource(e,t){return k`
      <div class="src">
        <div class="src-head">
          <span class="badge ${t?"base":""}">${t?"Base":"Join"}</span>
          <span class="name">${e.tableName}</span>
          <code class="alias" title="Alias used by the join keys below">${e.alias}</code>
          <span class="spacer"></span>
          ${t?re:k`<button type="button" class="icon-btn" title="Remove this join" aria-label="Remove ${e.tableName}" @click=${()=>this.removeSource(e.alias)}>×</button>`}
        </div>
        ${e.join?k`<div class="join-grid">
              <select .value=${e.join.type} @change=${n=>this.patchSource(e.alias,{type:n.target.value})}>
                <option value="left">LEFT JOIN</option>
                <option value="inner">INNER JOIN</option>
              </select>
              <span class="kw">ON</span>
              <select .value=${e.join.thisField} @change=${n=>this.patchSource(e.alias,{thisField:n.target.value})}>
                ${e.columns.map(n=>k`<option value=${n.field} ?selected=${n.field===e.join?.thisField}>${e.alias}.${n.field}</option>`)}
              </select>
              <span class="kw">=</span>
              <select
                .value=${`${e.join.otherAlias}.${e.join.otherField}`}
                @change=${n=>{const[r,i]=n.target.value.split(".");this.patchSource(e.alias,{otherAlias:r??"",otherField:i??""})}}
              >
                ${this.aliasesBefore(e.alias).flatMap(n=>n.columns.map(r=>k`<option value=${`${n.alias}.${r.field}`} ?selected=${n.alias===e.join?.otherAlias&&r.field===e.join?.otherField}>${n.alias}.${r.field}</option>`))}
              </select>
            </div>`:""}
      </div>
    `}renderSourceColumns(e){const t=this.columns.map((r,i)=>({c:r,i})).filter(({c:r})=>!r.computed&&r.alias===e.alias);if(t.length===0)return re;const n=t.every(({c:r})=>r.include);return k`
      <div class="col-group">
        <div class="group-head">
          <code class="alias">${e.alias}</code>
          <span class="group-name">${e.tableName}</span>
          <button
            type="button"
            class="link-btn"
            @click=${()=>{const r=!n,i=new Set(t.map(({i:s})=>s));this.columns=this.columns.map((s,o)=>i.has(o)?{...s,include:r}:s)}}
          >
            ${n?"none":"all"}
          </button>
        </div>
        <div class="ticks">
          ${t.map(({c:r,i})=>k`
              <label class="tick ${r.include?"":"off"}" title=${`${r.alias}.${r.field}`}>
                <input type="checkbox" .checked=${r.include} @change=${s=>this.setColumn(i,{include:s.target.checked})} />
                <span class="tick-name">${r.field}</span>
              </label>
            `)}
        </div>
      </div>
    `}renderComputedColumns(){const e=this.columns.map((t,n)=>({c:t,i:n})).filter(({c:t})=>t.computed);return k`
      <div class="col-group">
        <div class="group-head">
          <span class="chip">computed</span>
          <button type="button" class="link-btn" @click=${()=>this.addComputed()}>+ add</button>
        </div>
        ${e.length===0?k`<span class="hint">None. A computed column derives its value from the row.</span>`:e.map(({c:t,i:n})=>k`
                <div class="computed-row ${t.include?"":"off"}">
                  <input type="checkbox" .checked=${t.include} aria-label="Include computed column" @change=${r=>this.setColumn(n,{include:r.target.checked})} />
                  <textarea
                    class="script"
                    aria-label="Computed column script"
                    spellcheck="false"
                    .value=${t.script??""}
                    @input=${r=>this.setColumn(n,{script:r.target.value})}
                  ></textarea>
                  <button
                    type="button"
                    class="icon-btn"
                    title="Remove this computed column"
                    aria-label="Remove computed column"
                    @click=${()=>{this.columns=this.columns.filter((r,i)=>i!==n)}}
                  >
                    ×
                  </button>
                </div>
              `)}
      </div>
    `}setColumn(e,t){this.columns=this.columns.map((n,r)=>r===e?{...n,...t}:n)}};lt.instance=null;lt.styles=[ht,xe`
      dialog {
        width: 760px;
        max-width: 96vw;
      }
      /* -- shared controls (mirrors the column editor's look) -------------- */
      input,
      select,
      textarea {
        font: inherit;
        padding: 0.4rem 0.5rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        background: white;
        color: #111827;
        min-width: 0; /* let a grid cell shrink instead of overflowing */
      }
      input:focus-visible,
      select:focus-visible,
      textarea:focus-visible {
        outline: none;
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.18);
      }
      label {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        font-size: 0.85rem;
        color: #374151;
      }
      button.ghost.sm {
        padding: 0.3rem 0.6rem;
        font-size: 0.82rem;
      }
      button.icon-btn {
        background: transparent;
        border: 0;
        color: #9ca3af;
        cursor: pointer;
        padding: 0;
        font-size: 1.05rem;
        line-height: 1;
      }
      button.icon-btn:hover {
        color: #ef4444;
      }

      /* -- sections -------------------------------------------------------- */
      section {
        display: flex;
        flex-direction: column;
        gap: 0.55rem;
        border-top: 1px solid #e5e7eb;
        padding-top: 0.9rem;
      }
      .section-head {
        display: flex;
        align-items: baseline;
        gap: 0.5rem;
        flex-wrap: wrap;
      }
      h3 {
        margin: 0;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #6b7280;
      }
      .hint {
        color: #9ca3af;
        font-size: 0.78rem;
      }
      .add-row {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex-wrap: wrap;
      }
      .add-row select {
        max-width: 14rem;
      }
      /* Name takes the space; the row cap is a narrow field beside it. */
      .head-row {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 7rem;
        gap: 0.6rem;
        align-items: end;
      }
      @media (max-width: 640px) {
        .head-row {
          grid-template-columns: 1fr;
        }
      }

      /* -- sources --------------------------------------------------------- */
      .sources {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      .src {
        border: 1px solid #e5e7eb;
        border-radius: 0.4rem;
        background: #f9fafb;
        padding: 0.6rem 0.7rem;
        display: flex;
        flex-direction: column;
        gap: 0.55rem;
      }
      .src-head {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .src-head .name {
        font-weight: 600;
        color: #111827;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .src-head .spacer {
        flex: 1;
      }
      .badge {
        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        padding: 0.15rem 0.4rem;
        border-radius: 0.2rem;
        background: #e5e7eb;
        color: #4b5563;
      }
      .badge.base {
        background: #dbeafe;
        color: #1d4ed8;
      }
      code.alias {
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 0.72rem;
        background: #eef2f7;
        color: #4b5563;
        border: 1px solid #e5e7eb;
        border-radius: 0.2rem;
        padding: 0.05rem 0.3rem;
      }
      /* One grid for every join row, so the two field pickers line up down the
         list however long the table names are. */
      .join-grid {
        display: grid;
        grid-template-columns: 8rem auto minmax(0, 1fr) auto minmax(0, 1fr);
        align-items: center;
        gap: 0.4rem;
      }
      .kw {
        font-size: 0.72rem;
        font-weight: 700;
        color: #9ca3af;
        letter-spacing: 0.04em;
      }

      /* -- columns: a dense tick list per source --------------------------- */
      .col-group {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
      }
      .group-head {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.78rem;
        color: #6b7280;
      }
      .group-name {
        font-weight: 600;
        color: #374151;
      }
      button.link-btn {
        background: none;
        border: 0;
        padding: 0;
        font: inherit;
        font-size: 0.75rem;
        color: #2563eb;
        cursor: pointer;
        text-decoration: underline;
      }
      .ticks {
        display: flex;
        flex-wrap: wrap;
        gap: 0.25rem 0.4rem;
      }
      /* Each column is a compact pill, so a wide table costs a couple of rows
         instead of one row per column. */
      label.tick {
        flex-direction: row;
        align-items: center;
        gap: 0.3rem;
        font-size: 0.8rem;
        color: #111827;
        border: 1px solid #e5e7eb;
        border-radius: 1rem;
        padding: 0.1rem 0.5rem 0.1rem 0.35rem;
        background: #f9fafb;
        cursor: pointer;
        max-width: 14rem;
      }
      label.tick:hover {
        border-color: #cbd5e1;
      }
      label.tick input {
        margin: 0;
      }
      label.tick .tick-name {
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 0.74rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      label.tick.off {
        opacity: 0.55;
        background: transparent;
      }
      .chip {
        font-size: 0.68rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: #1d4ed8;
        background: #dbeafe;
        border-radius: 0.2rem;
        padding: 0.1rem 0.35rem;
      }
      .computed-row {
        display: grid;
        grid-template-columns: 1.1rem minmax(0, 1fr) 1.3rem;
        gap: 0.4rem;
        align-items: start;
      }
      .computed-row.off {
        opacity: 0.55;
      }
      .computed-row input[type='checkbox'] {
        margin: 0.4rem 0 0;
      }
      textarea.script {
        width: 100%;
        box-sizing: border-box;
        min-height: 2.9rem;
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 0.75rem;
      }

      .err {
        color: #b91c1c;
        font-size: 0.82rem;
        min-height: 1.1em;
      }
      .err:not(:empty) {
        background: #fef2f2;
        border: 1px solid #fecaca;
        border-radius: 0.25rem;
        padding: 0.4rem 0.55rem;
      }

      /* Phones: the dialog is full-screen (see dialog-chrome), so let the
         multi-column grids stack rather than squeeze. */
      @media (max-width: 640px) {
        .join-grid,
        .col-header,
        .col-row {
          grid-template-columns: 1fr;
        }
        .col-header {
          display: none;
        }
        .col-row {
          border: 1px solid #f3f4f6;
          border-radius: 0.3rem;
          padding: 0.45rem;
        }
        /* Stacked, the centred checkbox floats mid-row — align it with the rest. */
        .col-row input[type='checkbox'] {
          justify-self: start;
        }
        textarea.script {
          grid-column: 1;
        }
      }
    `];Kn([U()],lt.prototype,"name",2);Kn([U()],lt.prototype,"limit",2);Kn([U()],lt.prototype,"sources",2);Kn([U()],lt.prototype,"columns",2);Kn([U()],lt.prototype,"error",2);lt=Kn([Se("projection-dialog")],lt);const iv={id:"projection",name:"Projection (virtual tables)",type:"source",version:"0.1.0",description:'Virtual tables ("Projections") whose rows are derived live from other tables — database views and JOINs that look and act like tables.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h7v10H4z"/><path d="M13 7h7v10h-7z"/><path d="M11 12h2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/projection.ts"};function sv(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"projection",create:t=>Wy(e.store,t)}),e.ui.registerTableButton({id:"projection:new",label:"New Projection",icon:"add_box",tooltip:"Create a virtual table using THIS table as the base (view / JOIN)",onClick:(t,{tableId:n})=>void vc(t,{baseTableId:n})}),e.ui.registerTableButton({id:"projection:edit",label:"Edit Join",icon:"call_merge",tooltip:"Edit this projection’s sources, joins and which columns it includes",visible:t=>t.source?.type==="projection",onClick:(t,{tableId:n})=>void vc(t,{editTableId:n})})}async function ov(e,t,n,r,i){const s=await e.store.tables.find({workspaceId:t}),o=new Map;for(const u of s)o.has(u.name)||o.set(u.name,u);const l={};for(const u of n.sources){const h=u.tableId?s.find(m=>m.id===u.tableId&&m.name===u.tableName):void 0;l[u.alias]=(h??o.get(u.tableName))?.columns??[]}return du(n,l,r,i)}async function vc(e,t){const n=e.workspaceId();if(!n)return;const r=await e.store.tables.find({workspaceId:n}),i=l=>({id:l.id,name:l.name,columns:l.columns}),s=lt.instance??av();if(t.editTableId){const l=r.find(u=>u.id===t.editTableId)??null;if(!l||l.source?.type!=="projection")return;s.open({candidates:r.filter(u=>u.id!==l.id).map(i),initial:{name:l.name,spec:l.source.config},onSave:$c(e,n,l)});return}const o=r.find(l=>l.id===t.baseTableId);o&&s.open({base:i(o),candidates:r.map(i),onSave:$c(e,n,null,o)})}function $c(e,t,n,r){return async(i,s)=>{const o=await ov(e,t,s,n?.columns??[],n?.deletedColumns??[]),l=Rr(s).size===0,u={type:"projection",config:s};n?await e.store.tables.patch(n.id,{name:i,columns:o,source:u,readonly:l,updatedAt:Date.now()}):await e.store.tables.insert({id:Ce(),workspaceId:t,name:i,code:Le(i),columns:o,view:"table",source:u,readonly:l,...r?vp(s,r):{},updatedAt:Date.now()})}}function av(){const e=document.createElement("projection-dialog");return document.body.appendChild(e),e}const lv=Object.freeze(Object.defineProperty({__proto__:null,init:sv,meta:iv},Symbol.toStringTag,{value:"Module"})),cv={id:"command-palette-button",name:"Command Palette Button",type:"ui",version:"0.1.0",description:"Header “>” button that opens the command palette (also Ctrl/⌘K).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 6 15 12 9 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/command-palette-button.ts"};function uv(e){e.ui.registerHeaderButton({id:"command-palette:open",label:"Commands",icon:"chevron_right",tooltip:"Open the command palette (Ctrl/⌘K)",onClick:()=>e.ui.openCommandPalette()})}const dv=Object.freeze(Object.defineProperty({__proto__:null,init:uv,meta:cv},Symbol.toStringTag,{value:"Module"})),hv=[Ky,mb,Uf,dp,Vp,Zp,tg,gg,kg,Kf,Gg,Rg,ob,hb,vb,_b,Ib,Db,jb,Aw,Pw,Fw,Ww,Xw,$y,xd,By,lv,dv];function fv(e){if(!e.meta)throw new Error("Built-in plugin is missing meta");return e.meta}const kd=hv.map(e=>{const t=fv(e);return{id:t.id,meta:t,module:e}}),pv=kd;function wo(e){return`builtin:${e}`}async function mv(e){const t=[];for(const n of kd)if(!await gv(e,n)){t.push(n);try{await n.module.init?.(e)}catch(r){e.events.emit("plugin:error",{url:n.id,phase:"init",error:r})}}return async()=>{for(const n of t)try{await n.module.load?.(e)}catch(r){e.events.emit("plugin:error",{url:n.id,phase:"load",error:r})}}}async function gv(e,t){return t.meta.fixed?!1:wt==="all-optional"?!0:(await e.store.plugins.findOne(wo(t.id)))?.enabled===!1}var bv=Object.defineProperty,wv=Object.getOwnPropertyDescriptor,$t=(e,t,n,r)=>{for(var i=r>1?void 0:r?wv(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&bv(t,n,i),i};let Je=class extends ve{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.tableColumns=[],this.rows=[],this.showColsMenu=!1,this.allRows=[],this.searchQuery="",this.globalQuery="",this.onSearch=e=>{const t=e.detail;t.tableId===this.viewInstanceId&&(this.searchQuery=t.query??"",this.recompute())},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??"",this.recompute()},this.onInputChange=async e=>{const t=e.target;if(!(t instanceof HTMLInputElement)||!t.classList.contains("eda-input")||!this.instance||this.instance.readonly===!0)return;const n=t.getAttribute("data-eda-row"),r=t.getAttribute("data-eda-field"),i=t.getAttribute("data-eda-type")??"string";if(!n||!r)return;const s=this.allRows.find(u=>u.id===n);if(!s)return;let o;if(i==="boolean")o=t.checked;else if(i==="number"){const u=Number(t.value);o=t.value.trim()===""?null:Number.isNaN(u)?t.value:u}else o=t.value;await(await ae()).store.rows(this.instance.tableId).patch(n,{data:{...s.data,[r]:o},updatedAt:Date.now()})},this.onPillClick=async e=>{const t=e.target;if(!(t instanceof HTMLElement)||!t.classList.contains("eda-filter-pill")||!this.instance)return;const n=t.getAttribute("data-eda-filter-field"),r=t.getAttribute("data-eda-filter-value");if(!n||r==null)return;const i=Ng(this.instance.pillFilters?.[n],r),s={...this.instance.pillFilters??{},[n]:i};await(await ae()).store.viewInstances.patch(this.instance.id,{pillFilters:s,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:s},this.recompute()}}get templateOn(){return this.instance?.templateEnabled!==!1}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:table-search",this.onSearch),document.addEventListener("easydb:global-search",this.onGlobalSearch),await this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:table-search",this.onSearch),document.removeEventListener("easydb:global-search",this.onGlobalSearch),this.rowsUnsub?.(),this.instUnsub?.()}async updated(e){e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}async reload(){this.rowsUnsub?.(),this.loaded=!1,await this.load()}async load(){if(!this.viewInstanceId)return;this.rowsUnsub?.(),this.instUnsub?.();const e=await ae(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const n=await e.store.tables.findOne(t.tableId);this.tableColumns=n?.columns??[],n&&t.tableName!==n.name&&e.store.viewInstances.patch(t.id,{tableName:n.name});const r=new Map(this.tableColumns.map(s=>[s.field,s]));this.columns=t.visibleColumns.map(s=>r.get(s)??{field:s,label:s,type:"string"}),this.instUnsub=e.store.viewInstances.subscribe(s=>{const o=s.find(l=>l.id===this.viewInstanceId);if(o){if(o.tableId!==this.instance?.tableId){this.instance=o,this.reload();return}this.instance=o,this.recompute()}});const i=e.store.rows(t.tableId);this.rowsUnsub=i.subscribe(s=>{this.allRows=s,this.recompute()}),this.allRows=await i.find(),this.recompute(),this.loaded=!0}recompute(){if(!this.instance)return;const e=jg(this.allRows,this.tableColumns),t=Hu(e,this.instance);let n=t;const r=this.searchQuery.trim(),i=this.globalQuery.trim();r&&(n=Ai(n,r,this.tableColumns)),i&&(n=Ai(n,i,this.tableColumns));const s=this.instance.limit??0;s>0&&n.length>s&&(n=n.slice(0,s)),this.rows=n,this.templateOn&&yu(this.viewInstanceId,n.length,t.length)}async removePill(e,t){if(!this.instance)return;const n=zg(this.instance.pillFilters?.[e],t),r={...this.instance.pillFilters??{}};n===""?delete r[e]:r[e]=n,await(await ae()).store.viewInstances.patch(this.instance.id,{pillFilters:r,updatedAt:Date.now()}),this.instance={...this.instance,pillFilters:r},this.recompute()}async setSortColumn(e){if(!this.instance)return;await(await ae()).store.viewInstances.patch(this.instance.id,{sortColumn:e||void 0,updatedAt:Date.now()}),this.instance={...this.instance,sortColumn:e||void 0},this.recompute()}async toggleSortDir(){if(!this.instance?.sortColumn)return;const e=!(this.instance.sortAsc??!0);await(await ae()).store.viewInstances.patch(this.instance.id,{sortAsc:e,updatedAt:Date.now()}),this.instance={...this.instance,sortAsc:e},this.recompute()}async toggleTemplate(){if(!this.instance)return;const e=!this.templateOn;await(await ae()).store.viewInstances.patch(this.instance.id,{templateEnabled:e,updatedAt:Date.now()}),this.instance={...this.instance,templateEnabled:e},this.showColsMenu=!1}editTemplate(){!this.instance||!this.template||bo(this.instance.tableId,{editTemplateId:this.template.id})}editView(){this.instance&&bo(this.instance.tableId,{editInstanceId:this.instance.id})}async deleteView(){if(!this.instance)return;const e=await ae();await e.api.ui.dialogs.confirm(`Delete the view "${this.instance.name}"? The table and its rows stay.`,"Delete view")&&await e.store.viewInstances.remove(this.instance.id)}async toggleColumn(e){if(!this.instance)return;const t=this.instance.visibleColumns,r=t.includes(e)?t.filter(s=>s!==e):[...t,e];if(r.length===0)return;await(await ae()).store.viewInstances.patch(this.instance.id,{visibleColumns:r,updatedAt:Date.now()}),this.instance={...this.instance,visibleColumns:r}}renderTable(){return this.rows.length===0?k`<div class="vw-empty">No rows.</div>`:k`
      <table class="vw-table">
        <thead>
          <tr>
            ${this.columns.map(e=>k`<th>${e.label||e.field}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map(e=>k`<tr>
                ${this.columns.map(t=>{const n=e.data[t.field],r=n==null?"":String(n);return k`<td title=${r}>${r}</td>`})}
              </tr>`)}
        </tbody>
      </table>
    `}renderTemplated(){const e=this.template;if(!e)return k`<div class="vw-empty">This view's template is missing.</div>`;if(Fg(e.rowHtml)){const t=this.instance?.mapping??{},n=new Map(this.tableColumns.map(o=>[o.field,o])),r=this.instance?.readonly===!0,i=this.rows.map(o=>Lg(e.rowHtml,o,t,{columns:n,readonly:r})).join(""),s=(e.headerHtml??"")+i+(e.footerHtml??"");return k`<div class="vw-root">${On(s)}</div>`}return k`<div class="vw-root">
      ${e.headerHtml?.trim()?k`<div class="vw-html">${On(e.headerHtml)}</div>`:re}
      ${this.renderTable()}
      ${e.footerHtml?.trim()?k`<div class="vw-html">${On(e.footerHtml)}</div>`:re}
    </div>`}renderSortBar(){if(!this.instance)return re;const e=this.tableColumns.filter(r=>r.sortable!==!1),t=this.instance.sortColumn??"",n=this.instance.sortAsc??!0;return k`<div class="vw-sortbar">
      <span class="mi" title="Sort">sort</span>
      <select
        aria-label="Sort by"
        @change=${r=>void this.setSortColumn(r.target.value)}
      >
        <option value="" ?selected=${!t}>— unsorted —</option>
        ${e.map(r=>k`<option value=${r.field} ?selected=${t===r.field}>${r.label||r.field}</option>`)}
      </select>
      <button
        aria-label="Toggle sort direction"
        title=${n?"Ascending (click for descending)":"Descending (click for ascending)"}
        ?disabled=${!t}
        @click=${()=>void this.toggleSortDir()}
      >
        <span class="mi">${n?"arrow_upward":"arrow_downward"}</span>
      </button>
    </div>`}renderPillBar(){const e=this.instance?.pillFilters;if(!e)return re;const t=[];for(const[n,r]of Object.entries(e))if(r)for(const i of Or(r))i.term&&t.push({field:n,value:i.term});return t.length===0?re:k`<div class="vw-pillbar">
      ${t.map(n=>k`<span class="eda-pill-chip">
          <span class="eda-pill-chip-label">${n.field}: ${n.value}</span>
          <button
            type="button"
            class="eda-pill-chip-remove"
            aria-label=${`Remove filter ${n.field}: ${n.value}`}
            title="Remove this filter"
            @click=${()=>void this.removePill(n.field,n.value)}
          >
            ×
          </button>
        </span>`)}
    </div>`}renderFooter(){if(!this.instance)return re;const e=this.templateOn,t=new Set(this.instance.visibleColumns);return k`<div class="vw-footer">
      ${!e&&this.showColsMenu?k`<div class="cols-menu">
            ${this.tableColumns.map(n=>k`<label
                  ><input
                    type="checkbox"
                    .checked=${t.has(n.field)}
                    @change=${()=>void this.toggleColumn(n.field)}
                  />${n.label||n.field}</label
                >`)}
          </div>`:re}
      ${e?re:k`<button
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
      ${this.template?k`<button
            class="edit-template"
            aria-label="Edit template"
            title=${`Edit the "${this.template.name}" template`}
            @click=${()=>this.editTemplate()}
          >
            <span class="mi">code</span>
          </button>`:re}
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
    </div>`}render(){if(!this.loaded)return k`<div class="vw-body scroll"><div class="vw-loading">Loading…</div></div>`;if(this.error)return k`<div class="vw-body scroll"><div class="vw-empty">${this.error}</div></div>`;const e=this.templateOn,t=e?k`<div class="vw-body scroll" @change=${this.onInputChange} @click=${this.onPillClick}>
          ${this.renderTemplated()}
        </div>`:k`<div class="vw-body grid">
          <data-table
            .tableId=${this.instance?.tableId??""}
            .viewInstanceId=${this.viewInstanceId}
          ></data-table>
        </div>`;return k`${e?this.renderSortBar():re}${this.renderPillBar()}${t}${this.renderFooter()}`}};Je.styles=[mt,xe`
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
      /* $filter.TOKEN pill rendered inline in a template's row HTML — looks
         clickable, sits in the flow of the text around it. */
      .eda-filter-pill {
        font: inherit;
        display: inline;
        padding: 0.05rem 0.5rem;
        margin: 0 0.1rem;
        border: none;
        border-radius: 1rem;
        background: #e0f2fe;
        color: #0369a1;
        cursor: pointer;
      }
      .eda-filter-pill:hover {
        background: #bae6fd;
      }
      /* Active pill-filter bar, pinned to the top of the view. */
      .vw-pillbar {
        flex: 0 0 auto;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.35rem;
        padding: 0.3rem 0.5rem;
        border-bottom: 1px solid #e5e7eb;
        background: #f0f9ff;
      }
      .eda-pill-chip {
        display: inline-flex;
        align-items: center;
        gap: 0.3rem;
        padding: 0.1rem 0.3rem 0.1rem 0.55rem;
        border-radius: 1rem;
        background: #e0f2fe;
        color: #0369a1;
        font-size: 0.8rem;
      }
      .eda-pill-chip-remove {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1.1rem;
        height: 1.1rem;
        padding: 0;
        border: none;
        border-radius: 50%;
        background: transparent;
        color: inherit;
        cursor: pointer;
        line-height: 1;
      }
      .eda-pill-chip-remove:hover {
        background: rgba(3, 105, 161, 0.15);
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
    `];$t([dt({type:String})],Je.prototype,"viewInstanceId",2);$t([U()],Je.prototype,"loaded",2);$t([U()],Je.prototype,"error",2);$t([U()],Je.prototype,"instance",2);$t([U()],Je.prototype,"template",2);$t([U()],Je.prototype,"columns",2);$t([U()],Je.prototype,"tableColumns",2);$t([U()],Je.prototype,"rows",2);$t([U()],Je.prototype,"showColsMenu",2);$t([U()],Je.prototype,"searchQuery",2);$t([U()],Je.prototype,"globalQuery",2);Je=$t([Se("view-window")],Je);const rt=new Map;async function yv(){await Promise.all([...rt.keys()].map(e=>ki(e)))}function vv(e){const t=rt.get(e);if(!t)return!1;const n=t.panel;return n.status==="minimized"&&n.normalize(),n.front(),!0}let xc=!1;function yo(e){e.panel.setHeaderTitle(e.name+vu(e.count,e.total))}function $v(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function xv(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function Cd(e){return`view-panel-${xv(e)}`}async function kv(){if(xc)return;xc=!0;const e=await ae(),t=r=>r.filter(i=>i.workspaceId===e.workspaceId&&i.open),n=t(await e.store.viewInstances.find()).sort(Pi);for(const r of n)kc(r,e);e.store.viewInstances.subscribe(r=>{const i=new Map(t(r).map(o=>[o.id,o]));for(const o of[...rt.keys()])i.has(o)||_v(o);const s=[...i.values()].filter(o=>!rt.has(o.id)).sort(Pi);for(const o of s)kc(o,e)}),e.store.tables.subscribe(r=>void Cv(e,r)),document.addEventListener(Ri,r=>{const i=r.detail,s=rt.get(i.key);s&&s.el&&(s.count=i.count,s.total=i.total,yo(s))}),document.addEventListener("easydb:reload-view",r=>{const i=r.detail?.instanceId;if(!i)return;const s=rt.get(i);s&&(async()=>{const o=await e.store.viewInstances.findOne(i);o&&(s.name=o.name,yo(s)),s.el?.reload()})()}),document.addEventListener("easydb:reload-views",()=>{for(const{el:r}of rt.values())r?.reload()})}async function Cv(e,t){const n=t.filter(o=>o.workspaceId===e.workspaceId),r=new Set(n.map(o=>o.id)),i=new Map;for(const o of n)i.has(o.name)||i.set(o.name,o);const s=await e.store.viewInstances.find();for(const o of s){if(o.workspaceId!==e.workspaceId||r.has(o.tableId)||!o.tableName)continue;const l=i.get(o.tableName);l&&await e.store.viewInstances.patch(o.id,{tableId:l.id,updatedAt:Date.now()})}}function kc(e,t){if(rt.has(e.id))return;const n=Cd(e.id),r=e.windowGeometry,i=r?.minimized===!0,s=()=>{const y=document.createElement("view-window");return y.viewInstanceId=e.id,y.style.height="100%",y},o=i?document.createElement("div"):s();let l;const u=()=>{l&&(l.el?.remove(),l.el=null,l.count=-1,l.total=-1,yo(l))},h=()=>{if(!l||l.el)return;const y=document.getElementById(n)?.querySelector(".jsPanel-content");if(!y)return;y.replaceChildren();const x=s();y.appendChild(x),l.el=x},m=Li({id:n,container:$v(),title:e.name,logo:Gb,color:"#0891b2",content:o,...r?{panelSize:{w:r.w,h:r.h},position:{x:r.x,y:r.y}}:{contentSize:{w:480,h:520},position:{centerTopOffset:60}},minimizeTo:"#easydb-minimized-dock",viewport:Sr(),boot:{minimized:r?.minimized===!0,maximized:r?.maximized===!0},onmoved:()=>void ki(e.id),onresized:()=>void ki(e.id),onfronted:()=>void Sv(e.id,t),onstatuschange:y=>{y.status==="minimized"?u():(y.status==="normalized"||y.status==="maximized")&&h(),ki(e.id)},onclosed:()=>{rt.delete(e.id),is(e.id),t.store.viewInstances.patch(e.id,{open:!1,updatedAt:Date.now()}).catch(()=>{})}});l={panel:m,el:i?null:o,name:e.name,count:-1,total:-1},rt.set(e.id,l),id(e.id,()=>m.front(void 0,!1));const g=document.getElementById(n),w=document.createElement("panel-search");w.tableId=e.id,g?.querySelector(".jsPanel-controlbar")?.prepend(w)}function _v(e){const t=rt.get(e);if(t){rt.delete(e),is(e);try{t.panel.status!=="closed"&&t.panel.close()}catch{}}}function Sv(e,t){return ns(`view:${e}`,()=>Ev(e,t))}async function Ev(e,t){try{const n=await t.store.viewInstances.findOne(e);if(!n)return;const r=n.windowGeometry??{x:0,y:0,w:480,h:520,z:0,minimized:!1,maximized:!1};await t.store.viewInstances.patch(e,{windowGeometry:{...r,z:rd()},updatedAt:Date.now()})}catch{}}function ki(e){return ns(`view:${e}`,()=>Tv(e))}async function Tv(e){const t=document.getElementById(Cd(e)),n=rt.get(e);if(!t||!n)return;const{minimized:r,maximized:i}=n.panel.persistFlags();try{const s=await ae(),o=(await s.store.viewInstances.findOne(e))?.windowGeometry;let l=t.offsetLeft,u=t.offsetTop,h=t.offsetWidth,m=t.offsetHeight;(r||i)&&o&&(l=o.x,u=o.y,h=o.w,m=o.h),l<=-9e3&&(l=o?.x??40);const g={x:l,y:u,w:h,h:m,z:o?.z??0,minimized:r,maximized:i};await s.store.viewInstances.patch(e,{windowGeometry:g,updatedAt:Date.now()})}catch{}}function _d(e){return e.filter(t=>t.status!=="minimized")}function Iv(e,t,n){if(e<=0)return[];const r=Math.ceil(Math.sqrt(e)),i=Math.ceil(e/r),s=(t.w-n*(r+1))/r,o=(t.h-n*(i+1))/i;return Array.from({length:e},(l,u)=>{const h=u%r,m=Math.floor(u/r);return{x:t.x+n+h*(s+n),y:t.y+n+m*(o+n),w:s,h:o}})}function Vn(){return Vb()}function Av(){for(const e of Vn())e.close?.()}function Rv(){for(const e of Vn())e.minimize?.()}function Ov(){for(const e of Vn())e.normalize?.()}function Dv(){for(const e of Vn())e.maximize?.()}function Sd(){const e=document.getElementById("easydb-panels"),t=e?.clientWidth??window.innerWidth,n=e?.clientHeight??window.innerHeight,r=Mi()?.snapshot(),i=r?.scale&&r.scale>0?r.scale:1,s=r?.x??0,o=r?.y??0;return{x:-s/i,y:-o/i,w:t/i,h:n/i}}function Ed(e,t,n,r,i){e.style.left=`${Math.round(t)}px`,e.style.top=`${Math.round(n)}px`,e.style.width=`${Math.round(r)}px`,e.style.height=`${Math.round(i)}px`}function Pv(){const e=_d(Vn()).reverse();if(e.length===0)return;const t=Sd(),n=32,r=Math.min(680,Math.max(320,t.w*.6)),i=Math.min(480,Math.max(240,t.h*.6));e.forEach((s,o)=>{s.normalize?.(),Ed(s,t.x+24+o*n,t.y+24+o*n,r,i)}),Td()}function Td(){ad(),yv()}function Lv(){const e=_d(Vn()).reverse();if(e.length===0)return;const n=Iv(e.length,Sd(),8);e.forEach((r,i)=>{r.normalize?.();const s=n[i];s&&Ed(r,s.x,s.y,s.w,s.h)}),Td()}function Mv(e){const t=[{id:"windows:minimize-all",title:"Minimize all windows",icon:"remove",run:Rv},{id:"windows:restore-all",title:"Restore all windows",icon:"crop_square",run:Ov},{id:"windows:maximize-all",title:"Maximize all windows",icon:"fullscreen",run:Dv},{id:"windows:cascade",title:"Cascade windows",icon:"view_agenda",run:Pv},{id:"windows:tile",title:"Tile windows",icon:"grid_view",run:Lv},{id:"windows:close-all",title:"Close all windows",icon:"close",run:Av}];for(const i of t)e.ui.registerCommand({id:i.id,title:i.title,group:"Windows",icon:i.icon,run:i.run});const n="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md",r="https://github.com/cawoodm/easydbaccess/tree/main/docs";e.ui.registerCommand({id:"app:search",title:"Search all tables",group:"App",icon:"search",keywords:["find","global search","filter"],run:()=>{document.dispatchEvent(new CustomEvent("easydb:focus-search"))}}),e.ui.registerCommand({id:"app:plugins",title:"Plugins",group:"App",icon:"extension",keywords:["plugin manager","install","extensions"],run:i=>i.ui.openPluginManager()}),e.ui.registerCommand({id:"app:changelog",title:"Changelog",group:"App",icon:"history",keywords:["releases","version","whats new"],run:()=>{window.open(n,"_blank","noopener")}}),e.ui.registerCommand({id:"app:docs",title:"Documentation",group:"App",icon:"menu_book",keywords:["docs","help","guide","manual"],run:()=>{window.open(r,"_blank","noopener")}})}async function jv(e){if(wt==="url-plugins"||wt==="all-optional")return async()=>{};const t=e.workspaceId();if(!t)return async()=>{};const r=(await e.store.workspaces.findOne(t))?.pluginUrls??[],i=[];for(const s of r)try{const o=await e.store.plugins.findOne(s);if(o&&o.enabled===!1)continue;let l=o?.cachedBody??"";if(l)Nv(e,s,l);else{try{l=await Id(s)}catch(m){await e.store.plugins.upsert({url:s,enabled:o?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${m.message}`}),e.events.emit("plugin:error",{url:s,phase:"fetch",error:m});continue}await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),cachedBody:l})}const u=new Blob([l],{type:"text/javascript"}),h=URL.createObjectURL(u);try{const m=await import(h);await m.init?.(e),i.push({url:s,mod:m})}finally{setTimeout(()=>URL.revokeObjectURL(h),5e3)}}catch(o){await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),lastError:`init: ${o.message}`}),e.events.emit("plugin:error",{url:s,phase:"init",error:o})}return async()=>{for(const{url:s,mod:o}of i)try{await o.load?.(e)}catch(l){await e.store.plugins.upsert({url:s,enabled:!0,lastFetched:Date.now(),lastError:`load: ${l.message}`}),e.events.emit("plugin:error",{url:s,phase:"load",error:l})}}}async function Id(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const n=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(n))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return n}function Nv(e,t,n){return(async()=>{try{const r=await Id(t);if(r===n)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:r})}catch{}})()}let to=null;function ae(){return to||(to=zv()),to}async function zv(){const e=await Bc();let t="";const n=Zh(e,()=>t),r=tf(),i=cf(),s=new Map;n.tables.subscribe(O=>{s.clear();for(const M of O)s.set(M.id,M)});const o={...n.tables,insert:O=>(s.set(O.id,O),n.tables.insert(O)),upsert:O=>(s.set(O.id,O),n.tables.upsert(O))};let l=null;const u={get backend(){if(!l)throw new Error("[host] row-source ctx used before app init completed");return l.backend},events:r,settings:n.settings,workspaceId:()=>w},h=ef({base:{...n,tables:o},providers:i.rowSources,tableById:O=>s.get(O),ctx:u}),m=Uv(),g=await h.workspaces.find();let w;if(m){const O=Rd(m),M=g.find(L=>L.id===O||L.name===m);M?w=M.id:w=(await h.workspaces.insert({id:O,name:m,createdAt:Date.now(),pluginUrls:[]})).id}else{const O=Fv(),M=O?g.find(L=>L.id===O):void 0;M?w=M.id:g.length>0?w=g[0].id:w=(await h.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}t=w,Bv(w);const y=pf({store:h,events:r,registries:i,workspaceId:()=>w});l=y,Mv(y),r.on("import:after",({source:O,tableId:M,rowCount:L})=>{O!=="datasette"&&y.store.tables.findOne(M).then(F=>{y.ui.dialogs.toast(`Imported ${L} row${L===1?"":"s"} into "${F?.name??M}".`,{kind:"success",title:O.toUpperCase()+" import"})})}),r.on("plugin:error",({url:O,phase:M,error:L})=>{y.ui.dialogs.toast(`[${M}] ${L?.message??String(L)}`,{kind:"error",title:`Plugin: ${O}`})});const x=await mv(y),C=await jv(y);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:w}),await x(),await C(),wt==="all-optional"?y.ui.dialogs.toast("Safe mode is ON: only fixed built-ins (Settings, core rendering) loaded. All other built-in plugins and URL-installed plugins are disabled for this session only — nothing was changed. Disable the culprit below, then reload without ?safemode.",{kind:"warning",title:"Safe mode"}):wt==="url-plugins"&&y.ui.dialogs.toast("Safe mode (URL plugins) is ON: URL-installed plugins were not loaded this session. Built-in plugins are unaffected. Reload without ?safemode1 to restore them.",{kind:"warning",title:"Safe mode"}),wt!=="off"&&y.ui.openPluginManager()}),globalThis.api=y,{store:h,events:r,workspaceId:w,registries:i,api:y}}function Uv(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const Ad="eda:lastWorkspaceId";function Fv(){try{return globalThis.localStorage?.getItem(Ad)??null}catch{return null}}function Bv(e){try{globalThis.localStorage?.setItem(Ad,e)}catch{}}function Rd(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var qv=Object.defineProperty,Hv=Object.getOwnPropertyDescriptor,ss=(e,t,n,r)=>{for(var i=r>1?void 0:r?Hv(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&qv(t,n,i),i};let zn=class extends ve{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pt(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let n;try{n=Un(this.text)}catch(o){this.errorMsg=`Couldn't parse the CSV: ${o.message}`;return}if(n.columns.length===0||n.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const r=await ae(),i=crypto.randomUUID();await r.store.tables.insert({id:i,workspaceId:r.workspaceId,name:t,code:Le(t),columns:n.columns,view:"table",updatedAt:Date.now()});const s=n.rows.map(o=>({id:crypto.randomUUID(),tableId:i,data:o,updatedAt:Date.now()}));await r.store.rows(i).bulkInsert(s),r.api.ui.dialogs.toast(`Imported ${n.rows.length} row${n.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return k`
      <dialog @cancel=${this.close} @keydown=${ft}>
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
            ${this.errorMsg?k`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};zn.styles=[ht,xe`
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
    `];ss([U()],zn.prototype,"name",2);ss([U()],zn.prototype,"text",2);ss([U()],zn.prototype,"errorMsg",2);zn=ss([Se("csv-paste-dialog")],zn);const pa=new Set;let Cc=!1;function Kv(){return pa.size>0}function Vv(e){pa.add(e),Wv()}function Gv(e){pa.delete(e)}function Od(e,t){const n=()=>{t.open&&Vv(e)};t.addEventListener("input",n),t.addEventListener("change",n),t.addEventListener("close",()=>Gv(e))}function Wv(){Cc||(Cc=!0,window.addEventListener("beforeunload",e=>{Kv()&&(e.preventDefault(),e.returnValue="")}))}var Yv=Object.defineProperty,Qv=Object.getOwnPropertyDescriptor,ma=(e,t,n,r)=>{for(var i=r>1?void 0:r?Qv(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Yv(t,n,i),i};const Xv=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return the value this column should display.
  return row.name ?? '';
}
`;let Rt=class extends ve{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),Rt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Rt.instance===this&&(Rt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pt(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:Xv,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(n=>{this.resolver=n})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return k`
      <dialog @cancel=${this.onCancel} @keydown=${ft}>
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
    `}};Rt.instance=null;Rt.styles=[ht,xe`
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
    `];ma([U()],Rt.prototype,"text",2);ma([U()],Rt.prototype,"columnLabel",2);Rt=ma([Se("script-editor-dialog")],Rt);function _c(e){const t={...e.orig??{},field:e.field.trim(),label:e.label.trim()||e.field.trim(),type:e.type};return e.renderer?t.renderer=e.renderer:delete t.renderer,e.script?t.script=e.script:delete t.script,e.max!=null&&e.max>0?t.max=e.max:delete t.max,e.unique?t.unique=!0:delete t.unique,e.notnull?t.notnull=!0:delete t.notnull,e.hidden?t.hidden=!0:delete t.hidden,e.sortable===!1?t.sortable=!1:delete t.sortable,e.filterable===!1?t.filterable=!1:delete t.filterable,t}var Jv=Object.defineProperty,Zv=Object.getOwnPropertyDescriptor,Ye=(e,t,n,r)=>{for(var i=r>1?void 0:r?Zv(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Jv(t,n,i),i};const e0=["string","number","boolean","date","datetime"];let Fe=class extends ve{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.tableReadonly=!1,this.columns=[],this.errorMsg="",this.noticeMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.columnActions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pt(this.dialogEl,e),this.dialogEl&&Od("columns-editor",this.dialogEl)}async open(e,t){this.errorMsg="",this.noticeMsg=t?.notice??"";const n=await ae();if(this.rendererOptions=[...n.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.columnActions=[...n.registries.columnEditorActions],this.rendererSubUnsub=n.events.on("app:ready",()=>{this.rendererOptions=[...n.registries.cellRenderers.keys()].sort(),this.columnActions=[...n.registries.columnEditorActions]}),e){const r=await ae(),i=await r.store.tables.findOne(e);if(!i)return;this.mode="edit",this.editTableId=e,this.name=i.name,this.tableTitle=i.title??"",this.tableReadonly=!!i.readonly,this.columns=i.columns.map(o=>({field:o.field,label:o.label,type:o.type,renderer:o.renderer,script:o.script,max:o.max,unique:o.unique,notnull:o.notnull,hidden:o.hidden,sortable:o.sortable,filterable:o.filterable,origField:o.field,orig:o}));const s=await r.store.rows(e).find();this.previewRows=s.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.tableReadonly=!1,this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,n)=>n!==e)}moveColumn(e,t){const n=e+t;if(n<0||n>=this.columns.length)return;const r=[...this.columns],[i]=r.splice(e,1);r.splice(n,0,i),this.columns=r}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,n){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const r=n.getBoundingClientRect(),i=e.clientY<r.top+r.height/2;this.dropTargetIdx=t,this.dropEdge=i?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const n=this.dragSrcIdx,r=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,n===null||n===t||!r)return;const i=[...this.columns],[s]=i.splice(n,1);let o=t+(n<t?-1:0);r==="after"&&(o+=1),i.splice(o,0,s),this.columns=i}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((n,r)=>r===e?{...n,...t}:n)}async runColumnAction(e){this.errorMsg="";const t=await ae();try{const n=await e.run(t.api,{columns:this.columns.map(i=>_c(i)),...this.editTableId?{tableId:this.editTableId}:{}});if(!n)return;const r=new Map(n.map(i=>[i.field,i]));this.columns=this.columns.map(i=>{const s=r.get(i.field);return s?{...i,label:s.label??i.label,type:s.type??i.type,renderer:s.renderer,script:s.script}:i})}catch(n){this.errorMsg=`${e.label} failed: ${n.message}`}}async editScript(e){const t=Rt.instance;if(!t)return;const n=this.columns[e];if(!n)return;const r=await t.open(n.script??"",n.label||n.field);r!==null&&this.patchColumn(e,{script:r.trim()?r:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}const n=await ae(),r=(await n.store.tables.find()).filter(h=>h.workspaceId===n.workspaceId),i=t.toLowerCase(),s=r.find(h=>h.name.toLowerCase()===i&&h.id!==this.editTableId);if(s){this.errorMsg=`A table named "${s.name}" already exists — names must be unique.`;return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const o=new Set;for(const h of this.columns){const m=h.field.trim();if(!m){this.errorMsg="Column field names cannot be empty.";return}if(o.has(m)){this.errorMsg=`Duplicate column field: ${m}`;return}o.add(m)}const l=this.tableTitle.trim(),u=this.columns.map(_c);if(this.mode==="edit"&&this.editTableId){const h=this.editTableId,m=await n.store.tables.findOne(h),g=new Map((m?.columns??[]).map(G=>[G.field,G])),w=u.filter(G=>{const q=g.get(G.field);return G.unique&&!q?.unique||G.notnull&&!q?.notnull||G.max&&G.max>0&&G.max!==q?.max});if(w.length>0){const G=await n.store.rows(h).find(),q=r0(w,G);if(q.length>0){this.errorMsg=`Cannot save: ${q.length} existing ${q.length===1?"row violates":"rows violate"} the new constraints.
${q.slice(0,5).join(`
`)}${q.length>5?`
…and ${q.length-5} more.`:""}`;return}}const y=new Set(this.columns.map(G=>G.origField).filter(G=>!!G)),x=new Set(u.map(G=>G.field)),C=(m?.columns??[]).map(G=>G.field).filter(G=>!y.has(G)),O=m?.deletedColumns??[],M=[...new Set([...O,...C])].filter(G=>!x.has(G)),L={name:t,title:l,columns:u,readonly:this.tableReadonly,updatedAt:Date.now()};(M.length>0||O.length>0)&&(L.deletedColumns=M);const F=m?.name;await n.store.tables.patch(h,L);const V=C.filter(G=>!x.has(G)),W=this.fieldRenames();if(!m?.source&&(V.length>0||W.length>0)){const G=await n.store.rows(h).find();for(const q of G){let Y=!1,ie={...q.data};const se=wl(ie,W);se&&(ie=se,Y=!0);for(const H of V)H in ie&&(delete ie[H],Y=!0);Y&&await n.store.rows(h).patch(q.id,{data:ie,updatedAt:Date.now()})}}if(F!==void 0&&F!==t){const G=(await n.store.viewInstances.find()).filter(q=>q.tableId===h);for(const q of G)q.tableName!==t&&await n.store.viewInstances.patch(q.id,{tableName:t,updatedAt:Date.now()})}}else await n.store.tables.insert({id:Ce(),workspaceId:n.workspaceId,name:t,title:l,code:Le(t),columns:u,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return k`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=this.fieldRenames(),t=e.length>0?this.previewRows.map(i=>({...i,data:wl(i.data,e)??i.data})):this.previewRows,n=new Map;for(const i of this.columns){if(!i.unique)continue;const s=new Set,o=new Set;for(const l of t){const u=l.data[i.field];u==null||u===""||(s.has(u)&&o.add(u),s.add(u))}n.set(i.field,o)}const r=this.columns.filter(i=>!i.hidden);return k`
      <div class="preview">
        <h3>
          Live preview — first ${this.previewRows.length}
          row${this.previewRows.length===1?"":"s"}
        </h3>
        <table>
          <thead>
            <tr>
              ${r.map(i=>k`<th title=${i.field}>${i.label||i.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${t.map(i=>k`
                <tr>
                  ${r.map(s=>{const o=i.data[s.field],l=n0(s,o,n.get(s.field));return k`<td class=${l?"violation":""} title=${l??""}>
                      ${t0(o)}
                    </td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}fieldRenames(){return this.mode!=="edit"?[]:this.columns.filter(e=>e.origField&&e.origField!==e.field.trim()).map(e=>({from:e.origField,to:e.field.trim()}))}renameDetected(){return this.fieldRenames().length>0}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return k`
      <dialog @cancel=${this.close} @keydown=${ft}>
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
            ${this.noticeMsg?k`<div class="notice">${this.noticeMsg}</div>`:""}
            <label>
              Name
              <input
                type="text"
                autofocus
                .value=${this.name}
                @input=${n=>this.name=n.target.value}
              />
            </label>
            <label>
              Title <span style="color:#9ca3af">(optional — shown in the window title)</span>
              <input
                type="text"
                .value=${this.tableTitle}
                @input=${n=>this.tableTitle=n.target.value}
              />
            </label>
            <label class="inline">
              <input
                type="checkbox"
                data-testid="table-readonly"
                .checked=${this.tableReadonly}
                @change=${n=>this.tableReadonly=n.target.checked}
              />
              Read-only
              <span style="color:#9ca3af">(show values, no editing or add/delete row)</span>
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
              ${this.columns.map((n,r)=>{const i=this.dragSrcIdx===r,s=this.dropTargetIdx===r,o=s&&this.dropEdge==="before"?" drop-before":s&&this.dropEdge==="after"?" drop-after":"";return k`
                  <div
                    class=${`col-row${i?" drag-source":""}${o}`}
                    @dragover=${l=>this.onRowDragOver(l,r,l.currentTarget)}
                    @dragleave=${()=>this.onRowDragLeave(r)}
                    @drop=${l=>this.onRowDrop(l,r)}
                  >
                    <span
                      class="drag-handle"
                      title="Drag to reorder"
                      draggable="true"
                      @dragstart=${l=>this.onRowDragStart(l,r)}
                      @dragend=${()=>this.onRowDragEnd()}
                    >
                      <span class="mi sm">drag_indicator</span>
                    </span>
                    <input
                      type="text"
                      .value=${n.field}
                      @input=${l=>this.patchColumn(r,{field:l.target.value})}
                    />
                    <input
                      type="text"
                      .value=${n.label}
                      @input=${l=>this.patchColumn(r,{label:l.target.value})}
                    />
                    <select
                      .value=${n.type}
                      @change=${l=>this.patchColumn(r,{type:l.target.value})}
                    >
                      ${e0.map(l=>k`<option value=${l} ?selected=${l===n.type}>${l}</option>`)}
                    </select>
                    <select
                      title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                      .value=${n.renderer??""}
                      @change=${l=>{const u=l.target.value;this.patchColumn(r,{renderer:u||void 0})}}
                    >
                      <option value="" ?selected=${!n.renderer}>— none —</option>
                      ${this.rendererOptions.map(l=>k`<option value=${l} ?selected=${l===n.renderer}>${l}</option>`)}
                    </select>
                    <button
                      type="button"
                      class=${`icon-btn${n.script?.trim()?" has-script":""}`}
                      title=${n.script?.trim()?"Edit the script — its render(row) output is what this column displays":"Add a script: render(row) computes what this column displays"}
                      @click=${()=>this.editScript(r)}
                    >
                      <span class="mi sm">edit</span>
                    </button>
                    <input
                      type="number"
                      min="0"
                      placeholder="—"
                      title="Max length (strings) or max value (numbers)"
                      .value=${n.max==null?"":String(n.max)}
                      @input=${l=>{const u=l.target.value;this.patchColumn(r,{max:u===""?void 0:Number(u)})}}
                    />
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Unique"
                        .checked=${!!n.unique}
                        @change=${l=>this.patchColumn(r,{unique:l.target.checked})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Not null"
                        .checked=${!!n.notnull}
                        @change=${l=>this.patchColumn(r,{notnull:l.target.checked})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Visible — uncheck to hide the column without losing its data"
                        .checked=${!n.hidden}
                        @change=${l=>this.patchColumn(r,{hidden:!l.target.checked})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Sortable — uncheck to disable sorting on this column"
                        .checked=${n.sortable!==!1}
                        @change=${l=>this.patchColumn(r,{sortable:l.target.checked?void 0:!1})}
                      />
                    </span>
                    <span class="flag">
                      <input
                        type="checkbox"
                        title="Filterable — uncheck to disable filtering and search on this column"
                        .checked=${n.filterable!==!1}
                        @change=${l=>this.patchColumn(r,{filterable:l.target.checked?void 0:!1})}
                      />
                    </span>
                    <button
                      type="button"
                      class="icon-btn"
                      title="Move up"
                      ?disabled=${r===0}
                      @click=${()=>this.moveColumn(r,-1)}
                    >
                      <span class="mi sm">arrow_upward</span>
                    </button>
                    <button
                      type="button"
                      class="icon-btn"
                      title="Move down"
                      ?disabled=${r===this.columns.length-1}
                      @click=${()=>this.moveColumn(r,1)}
                    >
                      <span class="mi sm">arrow_downward</span>
                    </button>
                    <button
                      type="button"
                      class="icon-btn row-del"
                      title="Remove column"
                      @click=${()=>this.removeColumn(r)}
                    >
                      <span class="mi sm">delete</span>
                    </button>
                  </div>
                `})}
            </div>

            <button type="button" class="add" @click=${this.addColumn}>+ Add column</button>
            ${this.columnActions.map(n=>k`<button
                type="button"
                class="add"
                title=${n.tooltip??n.label}
                @click=${()=>void this.runColumnAction(n)}
              >
                ${n.label}
              </button>`)}

            ${this.renameDetected()?k`<div class="hint">
                  Existing rows are re-keyed on save, so renamed fields keep their data.
                </div>`:""}
            ${this.errorMsg?k`<div class="error">${this.errorMsg}</div>`:""}
            ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};Fe.styles=[mt,ht,xe`
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
      /* A checkbox reads as one line with its text, not stacked above it. */
      label.inline {
        flex-direction: row;
        align-items: center;
        gap: 0.4rem;
      }
      label.inline input[type='checkbox'] {
        width: auto;
        margin: 0;
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
    `];Ye([U()],Fe.prototype,"mode",2);Ye([U()],Fe.prototype,"editTableId",2);Ye([U()],Fe.prototype,"name",2);Ye([U()],Fe.prototype,"tableTitle",2);Ye([U()],Fe.prototype,"tableReadonly",2);Ye([U()],Fe.prototype,"columns",2);Ye([U()],Fe.prototype,"errorMsg",2);Ye([U()],Fe.prototype,"noticeMsg",2);Ye([U()],Fe.prototype,"dragSrcIdx",2);Ye([U()],Fe.prototype,"dropTargetIdx",2);Ye([U()],Fe.prototype,"dropEdge",2);Ye([U()],Fe.prototype,"previewRows",2);Ye([U()],Fe.prototype,"rendererOptions",2);Ye([U()],Fe.prototype,"columnActions",2);Fe=Ye([Se("new-table-dialog")],Fe);function t0(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function n0(e,t,n){const r=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&r)return`${e.label}: empty`;if(r)return null;if(e.type==="number"&&typeof t!="number"){const i=Number(t);if(!Number.isFinite(i))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!r){const i=new Date(String(t));if(Number.isNaN(i.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&n?.has(t)?`${e.label}: duplicate`:null}function r0(e,t){const n=[];for(const r of e)if(r.notnull&&t.forEach((i,s)=>{const o=i.data[r.field];(o==null||typeof o=="string"&&o.trim()==="")&&n.push(`Row ${s+1}: ${r.label} is empty.`)}),r.max!=null&&r.max>0&&t.forEach((i,s)=>{const o=i.data[r.field];typeof o=="string"&&o.length>r.max?n.push(`Row ${s+1}: ${r.label} length ${o.length} > max ${r.max}.`):typeof o=="number"&&o>r.max&&n.push(`Row ${s+1}: ${r.label} value ${o} > max ${r.max}.`)}),r.unique){const i=new Map;t.forEach((s,o)=>{const l=s.data[r.field];l==null||l===""||(i.has(l)?n.push(`Row ${o+1}: ${r.label} duplicates row ${i.get(l)+1} ("${String(l)}").`):i.set(l,o))})}return n}var i0=Object.defineProperty,s0=Object.getOwnPropertyDescriptor,Qe=(e,t,n,r)=>{for(var i=r>1?void 0:r?s0(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&i0(t,n,i),i};const o0='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',a0=k`<span class="mi sm">extension</span>`,Sc="plugin:catalogUrls";function bi(){return new URL("/easydbaccess3/plugins/catalog.json",location.origin).toString()}const l0=[["installed","Installed"],["built-in","Built-in"],["fixed","Fixed"]],Dd=[["importer","Importer"],["exporter","Exporter"],["cell-renderer","Cell renderer"],["sync","Sync"],["source","Source"],["ui","UI"]],c0=new Map(Dd),u0={off:"Filter by status — click: only enabled → only disabled → off",on:"Showing only enabled plugins — click to show only disabled",not:"Showing only disabled plugins — click to clear"};let Be=class extends ve{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.catalogUrls=[bi()],this.activeCatalogUrl=bi(),this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pt(this.dialogEl,e)}async open(){const e=await ae(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const n=await e.store.plugins.find();this.records=new Map(n.map(s=>[s.url,s]));const r=await e.store.settings.findOne(Sc),i=Array.isArray(r?.value)?r.value.filter(s=>typeof s=="string"):[];this.catalogUrls=i.length>0?i:[bi()],this.activeCatalogUrl=this.catalogUrls[0]??bi(),this.addUrl="",this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.statusFilter=void 0,await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(this.activeCatalogUrl),this.refreshServerRegistry()}async refreshCatalog(e){try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json(),r=Array.isArray(n.plugins)?n.plugins:[];this.catalog=r.map(i=>({...i,absUrl:new URL(i.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const n=(await(await ae()).store.settings.findOne("server-sync:url"))?.value;if(typeof n!="string"||n.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const i=`${n.replace(/\/+$/,"")}/plugins/registry`;try{const s=await fetch(i,{cache:"no-store"});if(!s.ok)throw new Error(`HTTP ${s.status}`);const o=await s.json(),l=Array.isArray(o.plugins)?o.plugins:[];this.serverCatalog=l.map(u=>({...u,absUrl:new URL(u.url,i).toString()})),this.serverCatalogError=null}catch(s){this.serverCatalog=[],this.serverCatalogError=s.message}}async reloadCatalogSource(){const e=this.activeCatalogUrl.trim();e&&(this.catalogUrls.includes(e)||(this.catalogUrls=[...this.catalogUrls,e],await(await ae()).store.settings.upsert({name:Sc,value:this.catalogUrls})),await this.refreshCatalog(e))}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await ae()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const n=await ae();await n.store.workspaces.patch(n.workspaceId,{pluginUrls:this.urls}),await n.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const n=await ae(),r=this.records.get(e);await n.store.plugins.upsert({...r??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...r,url:e,enabled:t,lastFetched:r?.lastFetched??0}))}async removePlugin(e){const t=await ae();this.urls=this.urls.filter(n=>n!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const n=await ae(),r=wo(e),i=this.records.get(r);await n.store.plugins.upsert({...i??{url:r,lastFetched:0},url:r,enabled:t,lastFetched:i?.lastFetched??0}),this.records=new Map(this.records.set(r,{...i,url:r,enabled:t,lastFetched:i?.lastFetched??0}))}async onRowToggle(e,t){if(e.categories.has("built-in"))await this.toggleBuiltin(e.id,t);else if(e.url)await this.toggleEnabled(e.url,t);else return;(await ae()).api.ui.dialogs.toast("Reload to apply this change.",{kind:"info",title:"Plugin updated"})}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await ae();try{const n=await fetch(e.absUrl,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status} ${n.statusText}`);const r=await n.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:r});const i=new Blob([r],{type:"text/javascript"}),s=URL.createObjectURL(i);try{const l=await import(s);await l.init?.(t.api),await l.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(s),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const o=await t.store.plugins.find();this.records=new Map(o.map(l=>[l.url,l])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(n){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${n.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${n.message}`,{kind:"error",title:"Plugin error"})}finally{const n=new Set(this.installing);n.delete(e.absUrl),this.installing=n}}renderTri(e,t,n,r="",i){const s=i?i[t??"off"]:t==="on"?`Showing only ${e} plugins — click to exclude`:t==="not"?`Hiding ${e} plugins — click to clear`:`Filter by ${e} — click: show only → exclude → off`;return k`
      <button
        type="button"
        class=${`tri${r?` ${r}`:""}${t?` ${t}`:""}`}
        title=${s}
        aria-pressed=${t!==void 0}
        @click=${n}
      >
        <span class="tri-mark">${t==="on"?"✓":t==="not"?"≠":""}</span>${e}
      </button>
    `}cycleState(e,t){const n=e.get(t),r=new Map(e);return n===void 0?r.set(t,"on"):n==="on"?r.set(t,"not"):r.delete(t),r}cycleFilter(e){this.filterStates=this.cycleState(this.filterStates,e)}cycleTypeFilter(e){this.typeFilters=this.cycleState(this.typeFilters,e)}cycleStatusFilter(){this.statusFilter=this.statusFilter===void 0?"on":this.statusFilter==="on"?"not":void 0}buildRows(){const e=new Map,t=new Map;for(const{id:n,meta:r}of pv){const i=r.fixed?!0:this.records.get(wo(n))?.enabled!==!1,s=!r.fixed&&wt==="all-optional",o=r.fixed?["built-in","fixed","installed"]:["built-in","installed"];e.set(`builtin:${n}`,{id:n,name:r.name,...r.type?{type:r.type}:{},...r.description?{meta:r.description}:{meta:"Built-in plugin"},...r.author?{author:r.author}:{},...r.icon?{icon:r.icon}:{},...r.repo?{repo:r.repo}:{},categories:new Set(o),enabled:i,status:i&&!s?"enabled":"disabled",fixed:!!r.fixed,...s?{skipped:!0}:{}})}for(const n of[...this.catalog,...this.serverCatalog]){const r=this.urls.includes(n.absUrl),i=this.records.get(n.absUrl),s=r?["available","installed"]:["available"],o=e.get(n.id),l=i?.enabled!==!1,u=r&&wt!=="off";e.set(n.id,{id:n.id,name:n.name,url:n.absUrl,...n.type?{type:n.type}:{},...n.icon?{icon:n.icon}:{},...n.repo?{repo:n.repo}:{},...n.author?{author:n.author}:{},meta:n.description??n.absUrl,categories:o?new Set([...o.categories,...s]):new Set(s),enabled:l,...r?{status:l&&!u?"enabled":"disabled"}:{},...u?{skipped:!0}:{},installing:this.installing.has(n.absUrl)}),t.set(n.absUrl,n.id)}for(const n of this.urls){const r=t.get(n);if(r){e.get(r).categories.add("installed");continue}const i=this.records.get(n),s=i?.lastFetched?new Date(i.lastFetched).toLocaleString():"never",o=i?.enabled!==!1;e.set(`url:${n}`,{id:n,name:n,urlOnly:!0,url:n,meta:i?.lastError??`Last fetched: ${s}`,metaIsError:!!i?.lastError,categories:new Set(["installed"]),enabled:o,status:o&&wt==="off"?"enabled":"disabled",...wt!=="off"?{skipped:!0}:{}})}return[...e.values()]}get filteredRows(){const e=this.buildRows(),t=this.search.trim().toLowerCase(),n=[],r=[];for(const[u,h]of this.filterStates)(h==="on"?n:r).push(u);const i=[],s=[];for(const[u,h]of this.typeFilters)(h==="on"?i:s).push(u);const o=this.statusFilter==="on"?"enabled":this.statusFilter==="not"?"disabled":void 0,l=e.filter(u=>!(n.length&&!n.some(h=>u.categories.has(h))||r.some(h=>u.categories.has(h))||i.length&&!(u.type&&i.includes(u.type))||u.type&&s.includes(u.type)||o&&u.status!==o));return t?l.filter(u=>[u.id,u.name,u.type,u.meta,u.author].some(h=>h?.toLowerCase().includes(t))):l}renderRow(e){const t=e.categories.has("built-in")||e.categories.has("installed"),n=!!e.url&&e.categories.has("installed"),r=!!e.url&&!e.categories.has("installed");return k`
      <div
        class=${`row${e.categories.has("built-in")?" builtin":""}${e.metaIsError?" error":""}${e.skipped?" skipped":""}`}
      >
        <span class="row-icon">${e.icon?On(e.icon):a0}</span>
        <div class="row-main">
          <div class=${`row-title${e.urlOnly?" mono":""}`}>
            ${e.name}${e.id!==e.name?k`<span class="row-id">${e.id}</span>`:""}${e.type?k`<span class="row-type" title="Plugin type"
                  >${c0.get(e.type)??e.type}</span
                >`:""}${e.skipped?k`<span
                  class="row-skipped"
                  title="Safe mode kept this plugin from loading this session — your saved setting is unchanged"
                  >skipped</span
                >`:""}
          </div>
          ${e.meta?k`<div class=${`meta${e.metaIsError?" err":""}`}>${e.meta}</div>`:""}
        </div>
        <div class="row-author">${e.author??""}</div>
        ${e.repo?k`<a
              class="row-repo"
              href=${e.repo}
              target="_blank"
              rel="noopener noreferrer"
              title="View source on GitHub"
              >${On(o0)}</a
            >`:k`<span></span>`}
        ${e.fixed?k`<span class="mi sm lock-icon" title="Always on — cannot be disabled">lock</span>`:t?k`<label
                class="switch"
                title=${e.skipped?"Your saved setting — safe mode is what stopped this plugin loading now":"Enable / disable"}
              >
                <input
                  type="checkbox"
                  .checked=${e.enabled}
                  @change=${i=>this.onRowToggle(e,i.target.checked)}
                />
                <span class="slider"></span>
              </label>`:k`<span></span>`}
        ${r?k`<button
              type="button"
              class="install"
              ?disabled=${e.installing}
              @click=${()=>this.installFromCatalog({absUrl:e.url,name:e.name})}
            >
              <span class="mi sm">${e.installing?"hourglass_empty":"download"}</span>
              ${e.installing?"Installing…":"Install"}
            </button>`:n?k`<button
                type="button"
                class="uninstall"
                @click=${()=>this.removePlugin(e.url)}
              >
                <span class="mi sm">delete</span> Uninstall
              </button>`:k`<span></span>`}
      </div>
    `}render(){const e=this.filteredRows;return k`
      <dialog @cancel=${this.close} @keydown=${ft}>
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
            ${wt!=="off"?k`<p class="safemode">
                  <strong>Safe mode is on.</strong>
                  ${wt==="all-optional"?k`<code>?safemode</code> skipped every URL plugin and every optional
                        built-in for this session.`:k`<code>?safemode1</code> skipped every URL plugin for this session.`}
                  Plugins marked <span class="row-skipped">skipped</span> are not running. The
                  toggles below still show — and change — your saved settings, which safe mode never
                  touches. Reload without the flag to run them again.
                </p>`:""}

            <div class="filters">
              <div class="chips">
                ${l0.map(([t,n])=>this.renderTri(n,this.filterStates.get(t),()=>this.cycleFilter(t)))}
                ${this.renderTri("Enabled",this.statusFilter,()=>this.cycleStatusFilter(),"status",u0)}
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
              ${Dd.map(([t,n])=>this.renderTri(n,this.typeFilters.get(t),()=>this.cycleTypeFilter(t)))}
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
                ${this.catalogUrls.map(t=>k`<option value=${t}></option>`)}
              </datalist>
              <button type="button" class="ghost" @click=${this.reloadCatalogSource}>
                <span class="mi sm">refresh</span> Reload
              </button>
            </div>
            ${this.catalogError?k`<div class="meta err">Catalog unavailable: ${this.catalogError}</div>`:""}
            ${this.serverCatalogError?k`<div class="meta err">
                  Server registry unavailable: ${this.serverCatalogError}
                </div>`:""}

            <div class="plugin-list">
              ${e.length===0?k`<p class="hint">No plugins match the current filters/search.</p>`:""}
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
    `}};Be.styles=[mt,ht,xe`
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
    `];Qe([U()],Be.prototype,"urls",2);Qe([U()],Be.prototype,"records",2);Qe([U()],Be.prototype,"addUrl",2);Qe([U()],Be.prototype,"catalog",2);Qe([U()],Be.prototype,"catalogError",2);Qe([U()],Be.prototype,"serverCatalog",2);Qe([U()],Be.prototype,"serverCatalogError",2);Qe([U()],Be.prototype,"installing",2);Qe([U()],Be.prototype,"catalogUrls",2);Qe([U()],Be.prototype,"activeCatalogUrl",2);Qe([U()],Be.prototype,"search",2);Qe([U()],Be.prototype,"filterStates",2);Qe([U()],Be.prototype,"typeFilters",2);Qe([U()],Be.prototype,"statusFilter",2);Be=Qe([Se("plugin-manager-dialog")],Be);var d0=Object.defineProperty,h0=Object.getOwnPropertyDescriptor,Ut=(e,t,n,r)=>{for(var i=r>1?void 0:r?h0(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&d0(t,n,i),i};const fr="__general__";let Xe=class extends ve{constructor(){super(...arguments),this.tabs=[],this.active=fr,this.values={},this.placements={},this.secretsText="",this.workspaceTitle="",this.secretError="",this.openHelp="",this.dialogEl=null,this.attemptClose=e=>{const t=this.invalidSecrets();if(t.length>0){e?.preventDefault();const r=t[0];this.active=r.tab.id,this.secretError=`“${r.field.label}” must be empty or a \${secret:name} reference. Move the value into the secrets store (General tab) and reference it, so the raw secret is never saved or synced.`;return}const n=this.danglingSecrets();if(n.length>0){e?.preventDefault();const r=n[0];this.active=r.tab.id;const i=r.names.map(s=>`“${s}”`).join(", ");this.secretError=`“${r.field.label}” references ${i}, which the secrets store does not have. Add it in the General tab or correct the name — an unknown reference is passed on as the literal \${secret:name} text.`;return}this.secretError="",this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.attemptClose()}}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&pt(this.dialogEl,e),this.dialogEl&&Od("settings",this.dialogEl)}async open(){const e=await ae(),t=[...e.registries.settings];this.tabs=t.map(([s,o])=>({id:s,name:o.name,fields:o.fields}));const n=await e.store.workspaces.findOne(e.workspaceId);this.workspaceTitle=n?.title??"";const r={},i={};for(const s of this.tabs)for(const o of s.fields){const l=`${s.id}:${o.key}`,u=await e.api.settings.placement(s.id,o.key);u==="user"?(r[l]=Ao(l),i[l]="user"):u==="workspace"?(r[l]=(await e.store.settings.findOne(l))?.value,i[l]="workspace"):(r[l]=o.default,i[l]=o.scope??"workspace")}this.values=r,this.placements=i,this.secretsText=Fi(),this.active=fr,await this.updateComplete,this.dialogEl?.showModal()}static rawSecret(e){return typeof e=="string"&&e!==""&&!e.includes("${secret:")}invalidSecrets(){const e=[];for(const t of this.tabs)for(const n of t.fields)n.type==="secret"&&Xe.rawSecret(this.values[`${t.id}:${n.key}`])&&e.push({tab:t,field:n});return e}static secretRefs(e){return typeof e!="string"?[]:[...e.matchAll(/\$\{secret:([^}]*)\}/g)].map(t=>(t[1]??"").trim())}missingRefs(e){const t=new Set(Object.keys($r(this.secretsText)));return Xe.secretRefs(e).filter(n=>!t.has(n))}danglingSecrets(){const e=[];for(const t of this.tabs)for(const n of t.fields){const r=this.missingRefs(this.values[`${t.id}:${n.key}`]);r.length>0&&e.push({tab:t,field:n,names:r})}return e}async setValue(e,t,n){const r=`${e.id}:${t.key}`;this.values={...this.values,[r]:n},this.clearSecretErrorIfFixed(),await(await ae()).api.settings.set(e.id,t.key,n,this.placements[r])}async toggleScope(e,t,n){const r=`${e.id}:${t.key}`,i=n?"user":"workspace";this.placements={...this.placements,[r]:i},await(await ae()).api.settings.set(e.id,t.key,this.values[r],i)}clearSecretErrorIfFixed(){this.secretError&&this.invalidSecrets().length===0&&this.danglingSecrets().length===0&&(this.secretError="")}onSecretsInput(e){this.secretsText=e.target.value,Vc(this.secretsText),this.clearSecretErrorIfFixed()}downloadSecrets(){const e=new Blob([this.secretsText],{type:"text/plain;charset=utf-8"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download="secrets.txt",n.click(),URL.revokeObjectURL(t)}async setWorkspaceTitle(e){this.workspaceTitle=e;const t=await ae();await t.store.workspaces.patch(t.workspaceId,{title:e.trim()||void 0})}renderControl(e,t){const n=`${e.id}:${t.key}`,r=this.values[n];switch(t.type){case"text":return k`<textarea
          .value=${String(r??"")}
          @change=${i=>this.setValue(e,t,i.target.value)}
        ></textarea>`;case"number":return k`<input
          type="number"
          .value=${r==null?"":String(r)}
          @change=${i=>{const s=i.target.value;this.setValue(e,t,s===""?void 0:Number(s))}}
        />`;case"boolean":return k`<label class="scope"
          ><input
            type="checkbox"
            .checked=${!!r}
            @change=${i=>this.setValue(e,t,i.target.checked)}
          />
          enabled</label
        >`;case"date":return k`<input
          type="date"
          .value=${String(r??"")}
          @change=${i=>this.setValue(e,t,i.target.value)}
        />`;case"secret":return this.renderSecretControl(e,t,r);case"option":return k`<div class="radios">
          ${(t.options??[]).map(i=>k`<label
              ><input
                type="radio"
                name=${n}
                .checked=${r===i}
                @change=${()=>this.setValue(e,t,i)}
              />${i}</label
            >`)}
        </div>`;case"selection":{const i=Array.isArray(r)?r:[];return k`<div class="checks">
          ${(t.options??[]).map(s=>k`<label
              ><input
                type="checkbox"
                .checked=${i.includes(s)}
                @change=${o=>{const u=o.target.checked?[...i,s]:i.filter(h=>h!==s);this.setValue(e,t,u)}}
              />${s}</label
            >`)}
        </div>`}case"string":default:return k`<input
          type="text"
          .value=${String(r??"")}
          @change=${i=>this.setValue(e,t,i.target.value)}
        />`}}renderSecretControl(e,t,n){const r=Object.keys($r(this.secretsText)),i=Xe.rawSecret(n)||this.missingRefs(n).length>0;return k`<div class="secret-row">
      <input
        type="text"
        class=${i?"invalid":""}
        placeholder="value or \${secret:name}"
        .value=${String(n??"")}
        @change=${s=>this.setValue(e,t,s.target.value)}
      />
      ${r.length>0?k`<select
            title="Insert a secret reference"
            @change=${s=>{const o=s.target.value;o&&this.setValue(e,t,`\${secret:${o}}`),s.target.value=""}}
          >
            <option value="">🔑 secret…</option>
            ${r.map(s=>k`<option value=${s}>${s}</option>`)}
          </select>`:re}
    </div>`}renderField(e,t){const n=`${e.id}:${t.key}`,r=!!(t.help||t.helpUrl),i=this.openHelp===n;return k`<div class="field">
      <div class="field-head">
        <label>${t.label}</label>
        ${r?k`<button
              type="button"
              class="help-btn"
              aria-label=${`Help for ${t.label}`}
              aria-expanded=${i?"true":"false"}
              title=${t.help??"More about this setting"}
              @click=${()=>this.openHelp=i?"":n}
            >
              <span class="mi sm" aria-hidden="true">info</span>
            </button>`:re}
        <label class="scope" title="Store on this device only (not synced)">
          <input
            type="checkbox"
            .checked=${this.placements[n]==="user"}
            @change=${s=>this.toggleScope(e,t,s.target.checked)}
          />
          user
        </label>
      </div>
      ${r&&i?k`<div class="help-panel">
            ${t.help?k`<p>${t.help}</p>`:re}
            ${t.helpUrl?k`<a href=${t.helpUrl} target="_blank" rel="noopener noreferrer"
                  >${t.helpLinkLabel||f0(t.helpUrl)}</a
                >`:re}
          </div>`:re}
      ${this.renderControl(e,t)}
      ${t.description?k`<p class="desc">${t.description}</p>`:re}
    </div>`}renderGeneral(){return k`
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
    `}renderPanel(){if(this.active===fr)return this.renderGeneral();const e=this.tabs.find(t=>t.id===this.active);return e?k`
      <h3>${e.name}</h3>
      ${e.fields.length===0?k`<p class="empty">This plugin registered no settings.</p>`:e.fields.map(t=>this.renderField(e,t))}
    `:re}render(){return k`
      <dialog @cancel=${this.attemptClose} @keydown=${ft}>
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
          ${this.secretError?k`<div class="secret-error" role="alert">${this.secretError}</div>`:re}
          <div class="dialog-body">
            <div class="layout">
              <nav class="tabs">
                <button
                  type="button"
                  class=${this.active===fr?"active":""}
                  @click=${()=>this.active=fr}
                >
                  General
                </button>
                ${this.tabs.map(e=>k`<button
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
    `}};Xe.styles=[mt,ht,xe`
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
      /* (i) next to the label — opens the field's help panel. */
      .help-btn {
        background: transparent;
        border: 0;
        padding: 0;
        margin-right: auto;
        color: #6b7280;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        line-height: 1;
      }
      .help-btn:hover,
      .help-btn[aria-expanded='true'] {
        color: #1d4ed8;
      }
      .help-panel {
        font-size: 0.8rem;
        color: #374151;
        background: #eff6ff;
        border: 1px solid #bfdbfe;
        border-radius: 0.3rem;
        padding: 0.45rem 0.6rem;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
      }
      .help-panel p {
        margin: 0;
      }
      .help-panel a {
        color: #1d4ed8;
        align-self: flex-start;
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
    `];Ut([U()],Xe.prototype,"tabs",2);Ut([U()],Xe.prototype,"active",2);Ut([U()],Xe.prototype,"values",2);Ut([U()],Xe.prototype,"placements",2);Ut([U()],Xe.prototype,"secretsText",2);Ut([U()],Xe.prototype,"workspaceTitle",2);Ut([U()],Xe.prototype,"secretError",2);Ut([U()],Xe.prototype,"openHelp",2);Xe=Ut([Se("settings-dialog")],Xe);function f0(e){try{return new URL(e).host}catch{return e}}const Pd=5,Ec="palette:recent",Ld="Recent";function p0(e,t,n=Pd){return[t,...e.filter(r=>r!==t)].slice(0,n)}function m0(e){return Array.isArray(e)?e.filter(t=>typeof t=="string").slice(0,Pd):[]}function g0(e,t){if(t.length===0)return e;const n=new Map(e.map(s=>[s.id,s])),r=[];for(const s of t){const o=n.get(s);o&&r.push({...o,group:Ld})}if(r.length===0)return e;const i=new Set(r.map(s=>s.id));return[...r,...e.filter(s=>!i.has(s.id))]}var b0=Object.defineProperty,w0=Object.getOwnPropertyDescriptor,Gn=(e,t,n,r)=>{for(var i=r>1?void 0:r?w0(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&b0(t,n,i),i};const y0={[Ld]:-1,Windows:0,Actions:1,App:2,Tables:3,Views:4};function Tc(e){return y0[e]??3}function v0(e){return e?e.trimStart().startsWith("<svg")?k`<span class="cmd-svg">${So(e)}</span>`:k`<span class="mi sm">${e}</span>`:k`<span class="mi sm">chevron_right</span>`}let Zt=class extends ve{constructor(){super(...arguments),this.search="",this.items=[],this.selected=0,this.api=null,this.recentIds=[],this.onDialogClick=e=>{if(e.detail===0||!this.dialogEl)return;const t=this.dialogEl.getBoundingClientRect();e.clientX>=t.left&&e.clientX<=t.right&&e.clientY>=t.top&&e.clientY<=t.bottom||this.close()}}async open(){const e=await ae();this.api=e.api,this.recentIds=m0((await e.api.store.settings.findOne(Ec))?.value),this.items=await this.buildItems(),this.search="",this.selected=0,await this.updateComplete,this.dialogEl&&!this.dialogEl.open&&this.dialogEl.showModal(),this.inputEl?.focus()}async buildItems(){const e=await ae(),t=e.api,n=[];for(const s of e.registries.commands)n.push({id:s.id,title:s.title,group:s.group??"Commands",...s.icon?{icon:s.icon}:{},haystack:[s.title,s.group,...s.keywords??[]].join(" ").toLowerCase(),run:()=>s.run(t)});for(const s of[...e.registries.headerButtons,...e.registries.footerButtons])n.push({id:`button:${s.id}`,title:s.label,group:"Actions",...s.icon?{icon:s.icon}:{},haystack:`${s.label} ${s.tooltip??""}`.toLowerCase(),run:()=>s.onClick(t)});const r=await t.store.tables.find({workspaceId:e.workspaceId});r.sort((s,o)=>s.name.localeCompare(o.name));for(const s of r)n.push({id:`goto:${s.id}`,title:`Go to: ${s.name}`,group:"Tables",icon:"table_chart",haystack:`${s.name} go to table`.toLowerCase(),run:()=>{ld(s.id)}});const i=await t.store.viewInstances.find({workspaceId:e.workspaceId});i.sort((s,o)=>s.name.localeCompare(o.name));for(const s of i)n.push({id:`goto-view:${s.id}`,title:`Go to view: ${s.name}`,group:"Views",icon:"view_quilt",haystack:`${s.name} go to view`.toLowerCase(),run:async()=>{await t.store.viewInstances.patch(s.id,{open:!0,updatedAt:Date.now()}),vv(s.id)}});return g0(n,this.recentIds).map((s,o)=>({it:s,i:o})).sort((s,o)=>Tc(s.it.group)-Tc(o.it.group)||s.i-o.i).map(({it:s})=>s)}get filtered(){const e=this.search.trim().toLowerCase();return e?this.items.filter(t=>t.haystack.includes(e)):this.items}close(){this.dialogEl?.close()}onInput(e){this.search=e.target.value,this.selected=0}onKeydown(e){const t=this.filtered;if(e.key==="ArrowDown")e.preventDefault(),this.selected=t.length?(this.selected+1)%t.length:0;else if(e.key==="ArrowUp")e.preventDefault(),this.selected=t.length?(this.selected-1+t.length)%t.length:0;else if(e.key==="Enter"){e.preventDefault();const n=t[this.selected];n&&this.execute(n)}}async execute(e){this.close(),this.remember(e.id);try{await e.run()}catch(t){console.error(`[command:${e.id}]`,t)}}async remember(e){this.recentIds=p0(this.recentIds,e);try{await this.api?.store.settings.upsert({name:Ec,value:this.recentIds})}catch(t){console.warn("[command-palette] could not save recent commands",t)}}render(){const e=this.filtered;let t="";return k`
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
          ${e.length===0?k`<div class="empty">No matching commands.</div>`:e.map((n,r)=>{const i=n.group!==t?(t=n.group,n.group):null;return k`
                  ${i?k`<div class="group-head">${i}</div>`:""}
                  <div
                    class=${`item${r===this.selected?" sel":""}`}
                    @mousemove=${()=>this.selected=r}
                    @click=${()=>this.execute(n)}
                  >
                    ${v0(n.icon)}
                    <span class="title">${n.title}</span>
                  </div>
                `})}
        </div>
      </dialog>
    `}};Zt.styles=[mt,xe`
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
    `];Gn([U()],Zt.prototype,"search",2);Gn([U()],Zt.prototype,"items",2);Gn([U()],Zt.prototype,"selected",2);Gn([Dt("dialog")],Zt.prototype,"dialogEl",2);Gn([Dt("input")],Zt.prototype,"inputEl",2);Zt=Gn([Se("command-palette-dialog")],Zt);var $0=Object.defineProperty,x0=Object.getOwnPropertyDescriptor,Md=(e,t,n,r)=>{for(var i=r>1?void 0:r?x0(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&$0(t,n,i),i};let ji=class extends ve{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await ae();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(n=>this.tables=n.filter(r=>r.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(n=>n.workspaceId===this.workspaceId),await ud(),await kv()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?k``:k`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on the
      page, or click <strong>+ New Table</strong> above.
    </div>`}};ji.styles=xe`
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
  `;Md([U()],ji.prototype,"tables",2);ji=Md([Se("table-list")],ji);function wi(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function k0(e,t){const{from:n,to:r,name:i,mode:s}=t,o=await e.workspaces.get(n);if(await e.workspaces.put({id:r,name:i,createdAt:Date.now(),pluginUrls:s==="empty"?[]:[...o?.pluginUrls??[]]}),s==="empty")return r;if(s==="all"){const u=await e.tables.where("workspaceId").equals(n).toArray(),h=new Map;for(const y of u){const x=wi();h.set(y.id,x),await e.tables.put({...y,id:x,workspaceId:r,updatedAt:Date.now()})}for(const[y,x]of h){const C=await e.rows.where("tableId").equals(y).toArray();C.length>0&&await e.rows.bulkPut(C.map(O=>({...O,id:wi(),tableId:x})))}const m=await e.viewTemplates.where("workspaceId").equals(n).toArray(),g=new Map;for(const y of m){const x=wi();g.set(y.id,x),await e.viewTemplates.put({...y,id:x,workspaceId:r})}const w=await e.viewInstances.where("workspaceId").equals(n).toArray();for(const y of w){const x=h.get(y.tableId);x&&await e.viewInstances.put({...y,id:wi(),workspaceId:r,tableId:x,templateId:g.get(y.templateId)??y.templateId})}}const l=await e.settings.where("workspaceId").equals(n).toArray();for(const u of l)await e.settings.put({...u,key:pn(r,u.name),workspaceId:r,name:u.name});return r}var C0=Object.defineProperty,_0=Object.getOwnPropertyDescriptor,ga=(e,t,n,r)=>{for(var i=r>1?void 0:r?_0(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&C0(t,n,i),i};const Ic="Clone everything (tables, views, settings)",Ac="Clone settings only (no data)",S0="Empty workspace";let Er=class extends ve{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await ae();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(i=>i.id===e);if(!t)return;const n=new URLSearchParams(location.search);n.set("space",t.name);const r=`${location.pathname}?${n.toString()}${location.hash}`;location.assign(r)}async addWorkspace(){const e=await ae(),t=await e.api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const n=await e.api.ui.dialogs.choice(`What should "${t.trim()}" start with?`,[Ic,Ac,S0],"New workspace");if(!n)return;const r=n===Ic?"all":n===Ac?"settings":"empty",i=Rd(t.trim());await k0(Bc(),{from:e.workspaceId,to:i,name:t.trim(),mode:r});const s=new URLSearchParams(location.search);s.set("space",t.trim()),location.assign(`${location.pathname}?${s.toString()}${location.hash}`)}render(){return k`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>k`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};Er.styles=[mt,xe`
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
    `];ga([U()],Er.prototype,"workspaces",2);ga([U()],Er.prototype,"current",2);Er=ga([Se("workspace-selector")],Er);var Rc=Object.freeze,jd=Object.defineProperty,E0=Object.getOwnPropertyDescriptor,xt=(e,t,n,r)=>{for(var i=r>1?void 0:r?E0(t,n):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&jd(t,n,i),i},T0=(e,t)=>Rc(jd(e,"raw",{value:Rc(e.slice())})),Oc;function Dc(e){return e?e.trimStart().startsWith("<svg")?k`<span class="icon-svg" aria-hidden="true">${So(e)}</span>`:k`<span class="mi sm" aria-hidden="true">${e}</span>`:""}let Ze=class extends ve{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.workspaceTitle="",this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId,{notice:t.detail.notice})},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onOpenSettings=()=>{this.settingsDialog?.open()},this.onOpenCommandPalette=()=>{this.commandPaletteDialog?.open()},this.onGlobalKeydown=e=>{(e.ctrlKey||e.metaKey)&&!e.altKey&&(e.key==="k"||e.key==="K")&&(e.preventDefault(),this.commandPaletteDialog?.open())},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{Lc(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!Lc(e))return;e.preventDefault();const t=await ae(),n=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:n,event:e});for(const r of[...t.registries.dropHandlers])try{if(await r(e,t.api))return}catch(i){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:i})}},this.runSlot=(e,t)=>{if(!this.api)return;const n=t?.currentTarget??void 0;Promise.resolve(e.onClick(this.api,{anchor:n})).catch(r=>{console.error(`[footer-button:${e.id}]`,r)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.addEventListener("easydb:open-settings",this.onOpenSettings),document.addEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.addEventListener("easydb:focus-search",this.openSearch),document.addEventListener("keydown",this.onGlobalKeydown),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.removeEventListener("easydb:open-settings",this.onOpenSettings),document.removeEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.removeEventListener("easydb:focus-search",this.openSearch),document.removeEventListener("keydown",this.onGlobalKeydown),this.workspaceUnsub?.()}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await ae();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e)),this.workspaceUnsub=e.store.workspaces.subscribe(t=>{const n=t.find(r=>r.id===e.workspaceId);this.workspaceTitle=n?.title?.trim()??"",I0(this.workspaceTitle)})}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){if(e.variant==="secondary")return k`
        <button class="icon-btn" title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
          ${Dc(e.icon)}
        </button>
      `;const n=t==="header"||e.variant==="primary"?"primary":"slot";return k`
      <button class=${n} title=${e.tooltip??e.label} @click=${r=>this.runSlot(e,r)}>
        ${Dc(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return k(Oc||(Oc=T0([`
      <header>
        <strong
          >`,`
          <a
            class="version-link"
            href="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md"
            target="_blank"
            rel="noopener"
            title="View the changelog on GitHub"
            ><span class="version">v0.0.258</span></a
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
    `])),this.workspaceTitle||"easyDBAccess",this.headerButtons.filter(e=>e.variant!=="secondary").map(e=>this.renderSlotButton(e,"header")),this.searchOpen?k`<span class="search-wrap">
              <input
                class="search"
                type="search"
                placeholder="search all tables…"
                .value=${this.searchQuery}
                @input=${this.onSearchInput}
                @blur=${this.closeSearchOnBlur}
              />
              ${this.searchQuery.length>0?k`<button
                    class="search-clear"
                    title="Clear search"
                    aria-label="Clear search"
                    @mousedown=${this.clearSearch}
                  >
                    ×
                  </button>`:""}
            </span>`:k`<button
              class="icon-btn ${this.searchQuery.trim().length>0?"active":""}"
              title=${this.searchQuery.trim().length>0?`Filtering all tables: ${this.searchQuery}`:"Search across all tables in this workspace"}
              aria-label="Search"
              @click=${this.openSearch}
            >
              <span class="mi" aria-hidden="true">search</span>
            </button>`,()=>this.api?.ui.openPluginManager(),this.headerButtons.filter(e=>e.variant==="secondary").map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};Ze.styles=[mt,xe`
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
    `];xt([Dt("new-table-dialog")],Ze.prototype,"dialog",2);xt([Dt("csv-paste-dialog")],Ze.prototype,"csvPasteDialog",2);xt([Dt("plugin-manager-dialog")],Ze.prototype,"pluginManagerDialog",2);xt([Dt("settings-dialog")],Ze.prototype,"settingsDialog",2);xt([Dt("command-palette-dialog")],Ze.prototype,"commandPaletteDialog",2);xt([Dt("input.search")],Ze.prototype,"searchInput",2);xt([U()],Ze.prototype,"footerButtons",2);xt([U()],Ze.prototype,"headerButtons",2);xt([U()],Ze.prototype,"searchQuery",2);xt([U()],Ze.prototype,"searchOpen",2);xt([U()],Ze.prototype,"workspaceTitle",2);Ze=xt([Se("app-shell")],Ze);const Pc=document.title;function I0(e){const t=e.trim();document.title=t?`${t} — ${Pc}`:Pc}function Lc(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([ae(),ct(()=>Promise.resolve().then(()=>xd),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});export{re as A,xe as a,k as b,ft as c,ht as d,ve as i,pt as m,U as r,Se as t};
//# sourceMappingURL=index-Doo5MlQa.js.map
