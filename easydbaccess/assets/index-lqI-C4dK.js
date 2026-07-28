(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const Bc="modulepreload",Nc=function(e){return"/easydbaccess/"+e},Wo={},In=function(t,r,s){let n=Promise.resolve();if(r&&r.length>0){let l=function(m){return Promise.all(m.map($=>Promise.resolve($).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),u=c?.nonce||c?.getAttribute("nonce");n=l(r.map(m=>{if(m=Nc(m),m in Wo)return;Wo[m]=!0;const $=m.endsWith(".css"),b=$?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${b}`))return;const k=document.createElement("link");if(k.rel=$?"stylesheet":Bc,$||(k.as="script"),k.crossOrigin="",k.href=m,u&&k.setAttribute("nonce",u),document.head.appendChild(k),$)return new Promise((B,L)=>{k.addEventListener("load",B),k.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${m}`)))})}))}function o(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return n.then(l=>{for(const c of l||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gs=globalThis,Vi=gs.ShadowRoot&&(gs.ShadyCSS===void 0||gs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Gi=Symbol(),Ko=new WeakMap;let tl=class{constructor(t,r,s){if(this._$cssResult$=!0,s!==Gi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Vi&&t===void 0){const s=r!==void 0&&r.length===1;s&&(t=Ko.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Ko.set(r,t))}return t}toString(){return this.cssText}};const Uc=e=>new tl(typeof e=="string"?e:e+"",void 0,Gi),qe=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((s,n,o)=>s+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1],e[0]);return new tl(r,e,Gi)},Hc=(e,t)=>{if(Vi)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const s=document.createElement("style"),n=gs.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=r.cssText,e.appendChild(s)}},Vo=Vi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const s of t.cssRules)r+=s.cssText;return Uc(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:qc,defineProperty:Wc,getOwnPropertyDescriptor:Kc,getOwnPropertyNames:Vc,getOwnPropertySymbols:Gc,getPrototypeOf:Yc}=Object,Is=globalThis,Go=Is.trustedTypes,Xc=Go?Go.emptyScript:"",Qc=Is.reactiveElementPolyfillSupport,Tr=(e,t)=>e,ys={toAttribute(e,t){switch(t){case Boolean:e=e?Xc:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Yi=(e,t)=>!qc(e,t),Yo={attribute:!0,type:String,converter:ys,reflect:!1,useDefault:!1,hasChanged:Yi};Symbol.metadata??=Symbol("metadata"),Is.litPropertyMetadata??=new WeakMap;let sr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Yo){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const s=Symbol(),n=this.getPropertyDescriptor(t,s,r);n!==void 0&&Wc(this.prototype,t,n)}}static getPropertyDescriptor(t,r,s){const{get:n,set:o}=Kc(this.prototype,t)??{get(){return this[r]},set(l){this[r]=l}};return{get:n,set(l){const c=n?.call(this);o?.call(this,l),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Yo}static _$Ei(){if(this.hasOwnProperty(Tr("elementProperties")))return;const t=Yc(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Tr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Tr("properties"))){const r=this.properties,s=[...Vc(r),...Gc(r)];for(const n of s)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[s,n]of r)this.elementProperties.set(s,n)}this._$Eh=new Map;for(const[r,s]of this.elementProperties){const n=this._$Eu(r,s);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const n of s)r.unshift(Vo(n))}else t!==void 0&&r.push(Vo(t));return r}static _$Eu(t,r){const s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const s of r.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Hc(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,s){this._$AK(t,s)}_$ET(t,r){const s=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,s);if(n!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:ys).toAttribute(r,s.type);this._$Em=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,r){const s=this.constructor,n=s._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const o=s.getPropertyOptions(n),l=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:ys;this._$Em=n;const c=l.fromAttribute(r,o.type);this[n]=c??this._$Ej?.get(n)??c,this._$Em=null}}requestUpdate(t,r,s,n=!1,o){if(t!==void 0){const l=this.constructor;if(n===!1&&(o=this[t]),s??=l.getPropertyOptions(t),!((s.hasChanged??Yi)(o,r)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(l._$Eu(t,s))))return;this.C(t,r,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:s,reflect:n,wrapped:o},l){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,l??r??this[t]),o!==!0||l!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s){const{wrapped:l}=o,c=this[n];l!==!0||this._$AL.has(n)||c===void 0||this.C(n,void 0,o,c)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(r)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};sr.elementStyles=[],sr.shadowRootOptions={mode:"open"},sr[Tr("elementProperties")]=new Map,sr[Tr("finalized")]=new Map,Qc?.({ReactiveElement:sr}),(Is.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xi=globalThis,Xo=e=>e,ws=Xi.trustedTypes,Qo=ws?ws.createPolicy("lit-html",{createHTML:e=>e}):void 0,nl="$lit$",Pn=`lit$${Math.random().toFixed(9).slice(2)}$`,rl="?"+Pn,Jc=`<${rl}>`,Vn=document,Ar=()=>Vn.createComment(""),Pr=e=>e===null||typeof e!="object"&&typeof e!="function",Qi=Array.isArray,Zc=e=>Qi(e)||typeof e?.[Symbol.iterator]=="function",yi=`[ 	
\f\r]`,Er=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Jo=/-->/g,Zo=/>/g,Hn=RegExp(`>|${yi}(?:([^\\s"'>=/]+)(${yi}*=${yi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ea=/'/g,ta=/"/g,sl=/^(?:script|style|textarea|title)$/i,ed=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),A=ed(1),Gn=Symbol.for("lit-noChange"),me=Symbol.for("lit-nothing"),na=new WeakMap,Kn=Vn.createTreeWalker(Vn,129);function il(e,t){if(!Qi(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qo!==void 0?Qo.createHTML(t):t}const td=(e,t)=>{const r=e.length-1,s=[];let n,o=t===2?"<svg>":t===3?"<math>":"",l=Er;for(let c=0;c<r;c++){const u=e[c];let m,$,b=-1,k=0;for(;k<u.length&&(l.lastIndex=k,$=l.exec(u),$!==null);)k=l.lastIndex,l===Er?$[1]==="!--"?l=Jo:$[1]!==void 0?l=Zo:$[2]!==void 0?(sl.test($[2])&&(n=RegExp("</"+$[2],"g")),l=Hn):$[3]!==void 0&&(l=Hn):l===Hn?$[0]===">"?(l=n??Er,b=-1):$[1]===void 0?b=-2:(b=l.lastIndex-$[2].length,m=$[1],l=$[3]===void 0?Hn:$[3]==='"'?ta:ea):l===ta||l===ea?l=Hn:l===Jo||l===Zo?l=Er:(l=Hn,n=void 0);const B=l===Hn&&e[c+1].startsWith("/>")?" ":"";o+=l===Er?u+Jc:b>=0?(s.push(m),u.slice(0,b)+nl+u.slice(b)+Pn+B):u+Pn+(b===-2?c:B)}return[il(e,o+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class Ir{constructor({strings:t,_$litType$:r},s){let n;this.parts=[];let o=0,l=0;const c=t.length-1,u=this.parts,[m,$]=td(t,r);if(this.el=Ir.createElement(m,s),Kn.currentNode=this.el.content,r===2||r===3){const b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(n=Kn.nextNode())!==null&&u.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const b of n.getAttributeNames())if(b.endsWith(nl)){const k=$[l++],B=n.getAttribute(b).split(Pn),L=/([.?@])?(.*)/.exec(k);u.push({type:1,index:o,name:L[2],strings:B,ctor:L[1]==="."?rd:L[1]==="?"?sd:L[1]==="@"?id:Rs}),n.removeAttribute(b)}else b.startsWith(Pn)&&(u.push({type:6,index:o}),n.removeAttribute(b));if(sl.test(n.tagName)){const b=n.textContent.split(Pn),k=b.length-1;if(k>0){n.textContent=ws?ws.emptyScript:"";for(let B=0;B<k;B++)n.append(b[B],Ar()),Kn.nextNode(),u.push({type:2,index:++o});n.append(b[k],Ar())}}}else if(n.nodeType===8)if(n.data===rl)u.push({type:2,index:o});else{let b=-1;for(;(b=n.data.indexOf(Pn,b+1))!==-1;)u.push({type:7,index:o}),b+=Pn.length-1}o++}}static createElement(t,r){const s=Vn.createElement("template");return s.innerHTML=t,s}}function or(e,t,r=e,s){if(t===Gn)return t;let n=s!==void 0?r._$Co?.[s]:r._$Cl;const o=Pr(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),o===void 0?n=void 0:(n=new o(e),n._$AT(e,r,s)),s!==void 0?(r._$Co??=[])[s]=n:r._$Cl=n),n!==void 0&&(t=or(e,n._$AS(e,t.values),n,s)),t}class nd{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:s}=this._$AD,n=(t?.creationScope??Vn).importNode(r,!0);Kn.currentNode=n;let o=Kn.nextNode(),l=0,c=0,u=s[0];for(;u!==void 0;){if(l===u.index){let m;u.type===2?m=new Or(o,o.nextSibling,this,t):u.type===1?m=new u.ctor(o,u.name,u.strings,this,t):u.type===6&&(m=new od(o,this,t)),this._$AV.push(m),u=s[++c]}l!==u?.index&&(o=Kn.nextNode(),l++)}return Kn.currentNode=Vn,n}p(t){let r=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,r),r+=s.strings.length-2):s._$AI(t[r])),r++}}class Or{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,s,n){this.type=2,this._$AH=me,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=s,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=or(this,t,r),Pr(t)?t===me||t==null||t===""?(this._$AH!==me&&this._$AR(),this._$AH=me):t!==this._$AH&&t!==Gn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Zc(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==me&&Pr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Vn.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Ir.createElement(il(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===n)this._$AH.p(r);else{const o=new nd(n,this),l=o.u(this.options);o.p(r),this.T(l),this._$AH=o}}_$AC(t){let r=na.get(t.strings);return r===void 0&&na.set(t.strings,r=new Ir(t)),r}k(t){Qi(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let s,n=0;for(const o of t)n===r.length?r.push(s=new Or(this.O(Ar()),this.O(Ar()),this,this.options)):s=r[n],s._$AI(o),n++;n<r.length&&(this._$AR(s&&s._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const s=Xo(t).nextSibling;Xo(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Rs{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,s,n,o){this.type=1,this._$AH=me,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=me}_$AI(t,r=this,s,n){const o=this.strings;let l=!1;if(o===void 0)t=or(this,t,r,0),l=!Pr(t)||t!==this._$AH&&t!==Gn,l&&(this._$AH=t);else{const c=t;let u,m;for(t=o[0],u=0;u<o.length-1;u++)m=or(this,c[s+u],r,u),m===Gn&&(m=this._$AH[u]),l||=!Pr(m)||m!==this._$AH[u],m===me?t=me:t!==me&&(t+=(m??"")+o[u+1]),this._$AH[u]=m}l&&!n&&this.j(t)}j(t){t===me?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class rd extends Rs{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===me?void 0:t}}class sd extends Rs{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==me)}}class id extends Rs{constructor(t,r,s,n,o){super(t,r,s,n,o),this.type=5}_$AI(t,r=this){if((t=or(this,t,r,0)??me)===Gn)return;const s=this._$AH,n=t===me&&s!==me||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==me&&(s===me||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class od{constructor(t,r,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){or(this,t)}}const ad=Xi.litHtmlPolyfillSupport;ad?.(Ir,Or),(Xi.litHtmlVersions??=[]).push("3.3.3");const ld=(e,t,r)=>{const s=r?.renderBefore??t;let n=s._$litPart$;if(n===void 0){const o=r?.renderBefore??null;s._$litPart$=n=new Or(t.insertBefore(Ar(),o),o,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ji=globalThis;let Ne=class extends sr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ld(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Gn}};Ne._$litElement$=!0,Ne.finalized=!0,Ji.litElementHydrateSupport?.({LitElement:Ne});const cd=Ji.litElementPolyfillSupport;cd?.({LitElement:Ne});(Ji.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dd={attribute:!0,type:String,converter:ys,reflect:!1,hasChanged:Yi},ud=(e=dd,t,r)=>{const{kind:s,metadata:n}=r;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(r.name,e),s==="accessor"){const{name:l}=r;return{set(c){const u=t.get.call(this);t.set.call(this,c),this.requestUpdate(l,u,e,!0,c)},init(c){return c!==void 0&&this.C(l,void 0,e,c),c}}}if(s==="setter"){const{name:l}=r;return function(c){const u=this[l];t.call(this,c),this.requestUpdate(l,u,e,!0,c)}}throw Error("Unsupported decorator location: "+s)};function Mt(e){return(t,r)=>typeof r=="object"?ud(e,t,r):((s,n,o)=>{const l=n.hasOwnProperty(o);return n.constructor.createProperty(o,s),l?Object.getOwnPropertyDescriptor(n,o):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function q(e){return Mt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hd=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fn(e,t){return(r,s,n)=>{const o=l=>l.renderRoot?.querySelector(e)??null;return hd(r,s,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fd={CHILD:2},ol=e=>(...t)=>({_$litDirective$:e,values:t});class pd{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,s){this._$Ct=t,this._$AM=r,this._$Ci=s}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class vs extends pd{constructor(t){if(super(t),this.it=me,t.type!==fd.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===me||t==null)return this._t=void 0,this.it=t;if(t===Gn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}vs.directiveName="unsafeHTML",vs.resultType=1;const ir=ol(vs);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Pi extends vs{}Pi.directiveName="unsafeSVG",Pi.resultType=2;const Zi=ol(Pi);var md=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bs={exports:{}},bd=bs.exports,ra;function yd(){return ra||(ra=1,(function(e,t){(function(r,s){e.exports=s()})(bd,function(){var r=function(i,a){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,h){d.__proto__=h}||function(d,h){for(var f in h)Object.prototype.hasOwnProperty.call(h,f)&&(d[f]=h[f])})(i,a)},s=function(){return(s=Object.assign||function(i){for(var a,d=1,h=arguments.length;d<h;d++)for(var f in a=arguments[d])Object.prototype.hasOwnProperty.call(a,f)&&(i[f]=a[f]);return i}).apply(this,arguments)};function n(i,a,d){for(var h,f=0,p=a.length;f<p;f++)!h&&f in a||((h=h||Array.prototype.slice.call(a,0,f))[f]=a[f]);return i.concat(h||Array.prototype.slice.call(a))}var o=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:md,l=Object.keys,c=Array.isArray;function u(i,a){return typeof a!="object"||l(a).forEach(function(d){i[d]=a[d]}),i}typeof Promise>"u"||o.Promise||(o.Promise=Promise);var m=Object.getPrototypeOf,$={}.hasOwnProperty;function b(i,a){return $.call(i,a)}function k(i,a){typeof a=="function"&&(a=a(m(i))),(typeof Reflect>"u"?l:Reflect.ownKeys)(a).forEach(function(d){L(i,d,a[d])})}var B=Object.defineProperty;function L(i,a,d,h){B(i,a,u(d&&b(d,"get")&&typeof d.get=="function"?{get:d.get,set:d.set,configurable:!0}:{value:d,configurable:!0,writable:!0},h))}function F(i){return{from:function(a){return i.prototype=Object.create(a.prototype),L(i.prototype,"constructor",i),{extend:k.bind(null,i.prototype)}}}}var H=Object.getOwnPropertyDescriptor,G=[].slice;function he(i,a,d){return G.call(i,a,d)}function ie(i,a){return a(i)}function oe(i){if(!i)throw new Error("Assertion Failed")}function V(i){o.setImmediate?setImmediate(i):setTimeout(i,0)}function J(i,a){if(typeof a=="string"&&b(i,a))return i[a];if(!a)return i;if(typeof a!="string"){for(var d=[],h=0,f=a.length;h<f;++h){var p=J(i,a[h]);d.push(p)}return d}var w=a.indexOf(".");if(w!==-1){var C=i[a.substr(0,w)];return C==null?void 0:J(C,a.substr(w+1))}}function ue(i,a,d){if(i&&a!==void 0&&!("isFrozen"in Object&&Object.isFrozen(i)))if(typeof a!="string"&&"length"in a){oe(typeof d!="string"&&"length"in d);for(var h=0,f=a.length;h<f;++h)ue(i,a[h],d[h])}else{var p,w,C=a.indexOf(".");C!==-1?(p=a.substr(0,C),(w=a.substr(C+1))===""?d===void 0?c(i)&&!isNaN(parseInt(p))?i.splice(p,1):delete i[p]:i[p]=d:ue(C=!(C=i[p])||!b(i,p)?i[p]={}:C,w,d)):d===void 0?c(i)&&!isNaN(parseInt(a))?i.splice(a,1):delete i[a]:i[a]=d}}function $e(i){var a,d={};for(a in i)b(i,a)&&(d[a]=i[a]);return d}var Te=[].concat;function Ie(i){return Te.apply([],i)}var gn="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Ie([8,16,32,64].map(function(i){return["Int","Uint","Float"].map(function(a){return a+i+"Array"})}))).filter(function(i){return o[i]}),g=new Set(gn.map(function(i){return o[i]})),v=null;function S(i){return v=new WeakMap,i=(function a(d){if(!d||typeof d!="object")return d;var h=v.get(d);if(h)return h;if(c(d)){h=[],v.set(d,h);for(var f=0,p=d.length;f<p;++f)h.push(a(d[f]))}else if(g.has(d.constructor))h=d;else{var w,C=m(d);for(w in h=C===Object.prototype?{}:Object.create(C),v.set(d,h),d)b(d,w)&&(h[w]=a(d[w]))}return h})(i),v=null,i}var y={}.toString;function x(i){return y.call(i).slice(8,-1)}var ne=typeof Symbol<"u"?Symbol.iterator:"@@iterator",pe=typeof ne=="symbol"?function(i){var a;return i!=null&&(a=i[ne])&&a.apply(i)}:function(){return null};function K(i,a){return a=i.indexOf(a),0<=a&&i.splice(a,1),0<=a}var Q={};function Xe(i){var a,d,h,f;if(arguments.length===1){if(c(i))return i.slice();if(this===Q&&typeof i=="string")return[i];if(f=pe(i)){for(d=[];!(h=f.next()).done;)d.push(h.value);return d}if(i==null)return[i];if(typeof(a=i.length)!="number")return[i];for(d=new Array(a);a--;)d[a]=i[a];return d}for(a=arguments.length,d=new Array(a);a--;)d[a]=arguments[a];return d}var ct=typeof Symbol<"u"?function(i){return i[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Ae=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Nt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Ae),on={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function We(i,a){this.name=i,this.message=a}function Me(i,a){return i+". Errors: "+Object.keys(a).map(function(d){return a[d].toString()}).filter(function(d,h,f){return f.indexOf(d)===h}).join(`
`)}function Se(i,a,d,h){this.failures=a,this.failedKeys=h,this.successCount=d,this.message=Me(i,a)}function Oe(i,a){this.name="BulkError",this.failures=Object.keys(a).map(function(d){return a[d]}),this.failuresByPos=a,this.message=Me(i,this.failures)}F(We).from(Error).extend({toString:function(){return this.name+": "+this.message}}),F(Se).from(We),F(Oe).from(We);var Qe=Nt.reduce(function(i,a){return i[a]=a+"Error",i},{}),Re=We,ae=Nt.reduce(function(i,a){var d=a+"Error";function h(f,p){this.name=d,f?typeof f=="string"?(this.message="".concat(f).concat(p?`
 `+p:""),this.inner=p||null):typeof f=="object"&&(this.message="".concat(f.name," ").concat(f.message),this.inner=f):(this.message=on[a]||d,this.inner=null)}return F(h).from(Re),i[a]=h,i},{});ae.Syntax=SyntaxError,ae.Type=TypeError,ae.Range=RangeError;var Je=Ae.reduce(function(i,a){return i[a+"Error"]=ae[a],i},{}),Be=Nt.reduce(function(i,a){return["Syntax","Type","Range"].indexOf(a)===-1&&(i[a+"Error"]=ae[a]),i},{});function ye(){}function ke(i){return i}function Pt(i,a){return i==null||i===ke?a:function(d){return a(i(d))}}function fe(i,a){return function(){i.apply(this,arguments),a.apply(this,arguments)}}function Ze(i,a){return i===ye?a:function(){var d=i.apply(this,arguments);d!==void 0&&(arguments[0]=d);var h=this.onsuccess,f=this.onerror;this.onsuccess=null,this.onerror=null;var p=a.apply(this,arguments);return h&&(this.onsuccess=this.onsuccess?fe(h,this.onsuccess):h),f&&(this.onerror=this.onerror?fe(f,this.onerror):f),p!==void 0?p:d}}function xn(i,a){return i===ye?a:function(){i.apply(this,arguments);var d=this.onsuccess,h=this.onerror;this.onsuccess=this.onerror=null,a.apply(this,arguments),d&&(this.onsuccess=this.onsuccess?fe(d,this.onsuccess):d),h&&(this.onerror=this.onerror?fe(h,this.onerror):h)}}function tn(i,a){return i===ye?a:function(d){var h=i.apply(this,arguments);u(d,h);var f=this.onsuccess,p=this.onerror;return this.onsuccess=null,this.onerror=null,d=a.apply(this,arguments),f&&(this.onsuccess=this.onsuccess?fe(f,this.onsuccess):f),p&&(this.onerror=this.onerror?fe(p,this.onerror):p),h===void 0?d===void 0?void 0:d:u(h,d)}}function nt(i,a){return i===ye?a:function(){return a.apply(this,arguments)!==!1&&i.apply(this,arguments)}}function It(i,a){return i===ye?a:function(){var d=i.apply(this,arguments);if(d&&typeof d.then=="function"){for(var h=this,f=arguments.length,p=new Array(f);f--;)p[f]=arguments[f];return d.then(function(){return a.apply(h,p)})}return a.apply(this,arguments)}}Be.ModifyError=Se,Be.DexieError=We,Be.BulkError=Oe;var Fe=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Ke(i){Fe=i}var kt={},st=100,gn=typeof Promise>"u"?[]:(function(){var i=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[i,m(i),i];var a=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[a,m(a),i]})(),Ae=gn[0],Nt=gn[1],gn=gn[2],Nt=Nt&&Nt.then,_e=Ae&&Ae.constructor,Rt=!!gn,Ve=function(i,a){ot.push([i,a]),ht&&(queueMicrotask(we),ht=!1)},yt=!0,ht=!0,it=[],Ue=[],ge=ke,et={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:ye,pgp:!1,env:{},finalize:ye},ee=et,ot=[],pt=0,St=[];function te(i){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var a=this._PSD=ee;if(typeof i!="function"){if(i!==kt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&ft(this,this._value))}this._state=null,this._value=null,++a.ref,(function d(h,f){try{f(function(p){if(h._state===null){if(p===h)throw new TypeError("A promise cannot be resolved with itself.");var w=h._lib&&Le();p&&typeof p.then=="function"?d(h,function(C,_){p instanceof te?p._then(C,_):p.then(C,_)}):(h._state=!0,h._value=p,$n(h)),w&&Ge()}},ft.bind(null,h))}catch(p){ft(h,p)}})(this,i)}var an={get:function(){var i=ee,a=Wr;function d(h,f){var p=this,w=!i.global&&(i!==ee||a!==Wr),C=w&&!Cn(),_=new te(function(P,D){ce(p,new pn(bo(h,i,w,C),bo(f,i,w,C),P,D,i))});return this._consoleTask&&(_._consoleTask=this._consoleTask),_}return d.prototype=kt,d},set:function(i){L(this,"then",i&&i.prototype===kt?an:{get:function(){return i},set:an.set})}};function pn(i,a,d,h,f){this.onFulfilled=typeof i=="function"?i:null,this.onRejected=typeof a=="function"?a:null,this.resolve=d,this.reject=h,this.psd=f}function ft(i,a){var d,h;Ue.push(a),i._state===null&&(d=i._lib&&Le(),a=ge(a),i._state=!1,i._value=a,h=i,it.some(function(f){return f._value===h._value})||it.push(h),$n(i),d&&Ge())}function $n(i){var a=i._listeners;i._listeners=[];for(var d=0,h=a.length;d<h;++d)ce(i,a[d]);var f=i._PSD;--f.ref||f.finalize(),pt===0&&(++pt,Ve(function(){--pt==0&&je()},[]))}function ce(i,a){if(i._state!==null){var d=i._state?a.onFulfilled:a.onRejected;if(d===null)return(i._state?a.resolve:a.reject)(i._value);++a.psd.ref,++pt,Ve(De,[d,i,a])}else i._listeners.push(a)}function De(i,a,d){try{var h,f=a._value;!a._state&&Ue.length&&(Ue=[]),h=Fe&&a._consoleTask?a._consoleTask.run(function(){return i(f)}):i(f),a._state||Ue.indexOf(f)!==-1||(function(p){for(var w=it.length;w;)if(it[--w]._value===p._value)return it.splice(w,1)})(a),d.resolve(h)}catch(p){d.reject(p)}finally{--pt==0&&je(),--d.psd.ref||d.psd.finalize()}}function we(){Fn(et,function(){Le()&&Ge()})}function Le(){var i=yt;return ht=yt=!1,i}function Ge(){var i,a,d;do for(;0<ot.length;)for(i=ot,ot=[],d=i.length,a=0;a<d;++a){var h=i[a];h[0].apply(null,h[1])}while(0<ot.length);ht=yt=!0}function je(){var i=it;it=[],i.forEach(function(h){h._PSD.onunhandled.call(null,h._value,h)});for(var a=St.slice(0),d=a.length;d;)a[--d]()}function nn(i){return new te(kt,!1,i)}function He(i,a){var d=ee;return function(){var h=Le(),f=ee;try{return En(d,!0),i.apply(this,arguments)}catch(p){a&&a(p)}finally{En(f,!1),h&&Ge()}}}k(te.prototype,{then:an,_then:function(i,a){ce(this,new pn(null,null,i,a,ee))},catch:function(i){if(arguments.length===1)return this.then(null,i);var a=i,d=arguments[1];return typeof a=="function"?this.then(null,function(h){return(h instanceof a?d:nn)(h)}):this.then(null,function(h){return(h&&h.name===a?d:nn)(h)})},finally:function(i){return this.then(function(a){return te.resolve(i()).then(function(){return a})},function(a){return te.resolve(i()).then(function(){return nn(a)})})},timeout:function(i,a){var d=this;return i<1/0?new te(function(h,f){var p=setTimeout(function(){return f(new ae.Timeout(a))},i);d.then(h,f).finally(clearTimeout.bind(null,p))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&L(te.prototype,Symbol.toStringTag,"Dexie.Promise"),et.env=go(),k(te,{all:function(){var i=Xe.apply(null,arguments).map(Kr);return new te(function(a,d){i.length===0&&a([]);var h=i.length;i.forEach(function(f,p){return te.resolve(f).then(function(w){i[p]=w,--h||a(i)},d)})})},resolve:function(i){return i instanceof te?i:i&&typeof i.then=="function"?new te(function(a,d){i.then(a,d)}):new te(kt,!0,i)},reject:nn,race:function(){var i=Xe.apply(null,arguments).map(Kr);return new te(function(a,d){i.map(function(h){return te.resolve(h).then(a,d)})})},PSD:{get:function(){return ee},set:function(i){return ee=i}},totalEchoes:{get:function(){return Wr}},newPSD:kn,usePSD:Fn,scheduler:{get:function(){return Ve},set:function(i){Ve=i}},rejectionMapper:{get:function(){return ge},set:function(i){ge=i}},follow:function(i,a){return new te(function(d,h){return kn(function(f,p){var w=ee;w.unhandleds=[],w.onunhandled=p,w.finalize=fe(function(){var C,_=this;C=function(){_.unhandleds.length===0?f():p(_.unhandleds[0])},St.push(function P(){C(),St.splice(St.indexOf(P),1)}),++pt,Ve(function(){--pt==0&&je()},[])},w.finalize),i()},a,d,h)})}}),_e&&(_e.allSettled&&L(te,"allSettled",function(){var i=Xe.apply(null,arguments).map(Kr);return new te(function(a){i.length===0&&a([]);var d=i.length,h=new Array(d);i.forEach(function(f,p){return te.resolve(f).then(function(w){return h[p]={status:"fulfilled",value:w}},function(w){return h[p]={status:"rejected",reason:w}}).then(function(){return--d||a(h)})})})}),_e.any&&typeof AggregateError<"u"&&L(te,"any",function(){var i=Xe.apply(null,arguments).map(Kr);return new te(function(a,d){i.length===0&&d(new AggregateError([]));var h=i.length,f=new Array(h);i.forEach(function(p,w){return te.resolve(p).then(function(C){return a(C)},function(C){f[w]=C,--h||d(new AggregateError(f))})})})}),_e.withResolvers&&(te.withResolvers=_e.withResolvers));var mt={awaits:0,echoes:0,id:0},bc=0,Hr=[],qr=0,Wr=0,yc=0;function kn(i,a,d,h){var f=ee,p=Object.create(f);return p.parent=f,p.ref=0,p.global=!1,p.id=++yc,et.env,p.env=Rt?{Promise:te,PromiseProp:{value:te,configurable:!0,writable:!0},all:te.all,race:te.race,allSettled:te.allSettled,any:te.any,resolve:te.resolve,reject:te.reject}:{},a&&u(p,a),++f.ref,p.finalize=function(){--this.parent.ref||this.parent.finalize()},h=Fn(p,i,d,h),p.ref===0&&p.finalize(),h}function Jn(){return mt.id||(mt.id=++bc),++mt.awaits,mt.echoes+=st,mt.id}function Cn(){return!!mt.awaits&&(--mt.awaits==0&&(mt.id=0),mt.echoes=mt.awaits*st,!0)}function Kr(i){return mt.echoes&&i&&i.constructor===_e?(Jn(),i.then(function(a){return Cn(),a},function(a){return Cn(),at(a)})):i}function wc(){var i=Hr[Hr.length-1];Hr.pop(),En(i,!1)}function En(i,a){var d,h=ee;(a?!mt.echoes||qr++&&i===ee:!qr||--qr&&i===ee)||queueMicrotask(a?function(f){++Wr,mt.echoes&&--mt.echoes!=0||(mt.echoes=mt.awaits=mt.id=0),Hr.push(ee),En(f,!0)}.bind(null,i):wc),i!==ee&&(ee=i,h===et&&(et.env=go()),Rt&&(d=et.env.Promise,a=i.env,(h.global||i.global)&&(Object.defineProperty(o,"Promise",a.PromiseProp),d.all=a.all,d.race=a.race,d.resolve=a.resolve,d.reject=a.reject,a.allSettled&&(d.allSettled=a.allSettled),a.any&&(d.any=a.any))))}function go(){var i=o.Promise;return Rt?{Promise:i,PromiseProp:Object.getOwnPropertyDescriptor(o,"Promise"),all:i.all,race:i.race,allSettled:i.allSettled,any:i.any,resolve:i.resolve,reject:i.reject}:{}}function Fn(i,a,d,h,f){var p=ee;try{return En(i,!0),a(d,h,f)}finally{En(p,!1)}}function bo(i,a,d,h){return typeof i!="function"?i:function(){var f=ee;d&&Jn(),En(a,!0);try{return i.apply(this,arguments)}finally{En(f,!1),h&&queueMicrotask(Cn)}}}function qs(i){Promise===_e&&mt.echoes===0?qr===0?i():enqueueNativeMicroTask(i):setTimeout(i,0)}(""+Nt).indexOf("[native code]")===-1&&(Jn=Cn=ye);var at=te.reject,Ln="￿",mn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",yo="String expected.",Zn=[],Vr="__dbnames",Ws="readonly",Ks="readwrite";function Mn(i,a){return i?a?function(){return i.apply(this,arguments)&&a.apply(this,arguments)}:i:a}var wo={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Gr(i){return typeof i!="string"||/\./.test(i)?function(a){return a}:function(a){return a[i]===void 0&&i in a&&delete(a=S(a))[i],a}}function vo(){throw ae.Type()}function Pe(i,a){try{var d=xo(i),h=xo(a);if(d!==h)return d==="Array"?1:h==="Array"?-1:d==="binary"?1:h==="binary"?-1:d==="string"?1:h==="string"?-1:d==="Date"?1:h!=="Date"?NaN:-1;switch(d){case"number":case"Date":case"string":return a<i?1:i<a?-1:0;case"binary":return(function(f,p){for(var w=f.length,C=p.length,_=w<C?w:C,P=0;P<_;++P)if(f[P]!==p[P])return f[P]<p[P]?-1:1;return w===C?0:w<C?-1:1})($o(i),$o(a));case"Array":return(function(f,p){for(var w=f.length,C=p.length,_=w<C?w:C,P=0;P<_;++P){var D=Pe(f[P],p[P]);if(D!==0)return D}return w===C?0:w<C?-1:1})(i,a)}}catch{}return NaN}function xo(i){var a=typeof i;return a!="object"?a:ArrayBuffer.isView(i)?"binary":(i=x(i),i==="ArrayBuffer"?"binary":i)}function $o(i){return i instanceof Uint8Array?i:ArrayBuffer.isView(i)?new Uint8Array(i.buffer,i.byteOffset,i.byteLength):new Uint8Array(i)}var ko=(Ye.prototype._trans=function(i,a,d){var h=this._tx||ee.trans,f=this.name,p=Fe&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(i==="readonly"?"read":"write"," ").concat(this.name));function w(P,D,E){if(!E.schema[f])throw new ae.NotFound("Table "+f+" not part of transaction");return a(E.idbtrans,E)}var C=Le();try{var _=h&&h.db._novip===this.db._novip?h===ee.trans?h._promise(i,w,d):kn(function(){return h._promise(i,w,d)},{trans:h,transless:ee.transless||ee}):(function P(D,E,j,T){if(D.idbdb&&(D._state.openComplete||ee.letThrough||D._vip)){var R=D._createTransaction(E,j,D._dbSchema);try{R.create(),D._state.PR1398_maxLoop=3}catch(O){return O.name===Qe.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return P(D,E,j,T)})):at(O)}return R._promise(E,function(O,I){return kn(function(){return ee.trans=R,T(O,I,R)})}).then(function(O){if(E==="readwrite")try{R.idbtrans.commit()}catch{}return E==="readonly"?O:R._completion.then(function(){return O})})}if(D._state.openComplete)return at(new ae.DatabaseClosed(D._state.dbOpenError));if(!D._state.isBeingOpened){if(!D._state.autoOpen)return at(new ae.DatabaseClosed);D.open().catch(ye)}return D._state.dbReadyPromise.then(function(){return P(D,E,j,T)})})(this.db,i,[this.name],w);return p&&(_._consoleTask=p,_=_.catch(function(P){return console.trace(P),at(P)})),_}finally{C&&Ge()}},Ye.prototype.get=function(i,a){var d=this;return i&&i.constructor===Object?this.where(i).first(a):i==null?at(new ae.Type("Invalid argument to Table.get()")):this._trans("readonly",function(h){return d.core.get({trans:h,key:i}).then(function(f){return d.hook.reading.fire(f)})}).then(a)},Ye.prototype.where=function(i){if(typeof i=="string")return new this.db.WhereClause(this,i);if(c(i))return new this.db.WhereClause(this,"[".concat(i.join("+"),"]"));var a=l(i);if(a.length===1)return this.where(a[0]).equals(i[a[0]]);var d=this.schema.indexes.concat(this.schema.primKey).filter(function(C){if(C.compound&&a.every(function(P){return 0<=C.keyPath.indexOf(P)})){for(var _=0;_<a.length;++_)if(a.indexOf(C.keyPath[_])===-1)return!1;return!0}return!1}).sort(function(C,_){return C.keyPath.length-_.keyPath.length})[0];if(d&&this.db._maxKey!==Ln){var p=d.keyPath.slice(0,a.length);return this.where(p).equals(p.map(function(_){return i[_]}))}!d&&Fe&&console.warn("The query ".concat(JSON.stringify(i)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(a.join("+"),"]"));var h=this.schema.idxByName;function f(C,_){return Pe(C,_)===0}var w=a.reduce(function(E,_){var P=E[0],D=E[1],E=h[_],j=i[_];return[P||E,P||!E?Mn(D,E&&E.multi?function(T){return T=J(T,_),c(T)&&T.some(function(R){return f(j,R)})}:function(T){return f(j,J(T,_))}):D]},[null,null]),p=w[0],w=w[1];return p?this.where(p.name).equals(i[p.keyPath]).filter(w):d?this.filter(w):this.where(a).equals("")},Ye.prototype.filter=function(i){return this.toCollection().and(i)},Ye.prototype.count=function(i){return this.toCollection().count(i)},Ye.prototype.offset=function(i){return this.toCollection().offset(i)},Ye.prototype.limit=function(i){return this.toCollection().limit(i)},Ye.prototype.each=function(i){return this.toCollection().each(i)},Ye.prototype.toArray=function(i){return this.toCollection().toArray(i)},Ye.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Ye.prototype.orderBy=function(i){return new this.db.Collection(new this.db.WhereClause(this,c(i)?"[".concat(i.join("+"),"]"):i))},Ye.prototype.reverse=function(){return this.toCollection().reverse()},Ye.prototype.mapToClass=function(i){var a,d=this.db,h=this.name;function f(){return a!==null&&a.apply(this,arguments)||this}(this.schema.mappedClass=i).prototype instanceof vo&&((function(_,P){if(typeof P!="function"&&P!==null)throw new TypeError("Class extends value "+String(P)+" is not a constructor or null");function D(){this.constructor=_}r(_,P),_.prototype=P===null?Object.create(P):(D.prototype=P.prototype,new D)})(f,a=i),Object.defineProperty(f.prototype,"db",{get:function(){return d},enumerable:!1,configurable:!0}),f.prototype.table=function(){return h},i=f);for(var p=new Set,w=i.prototype;w;w=m(w))Object.getOwnPropertyNames(w).forEach(function(_){return p.add(_)});function C(_){if(!_)return _;var P,D=Object.create(i.prototype);for(P in _)if(!p.has(P))try{D[P]=_[P]}catch{}return D}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=C,this.hook("reading",C),i},Ye.prototype.defineClass=function(){return this.mapToClass(function(i){u(this,i)})},Ye.prototype.add=function(i,a){var d=this,h=this.schema.primKey,f=h.auto,p=h.keyPath,w=i;return p&&f&&(w=Gr(p)(i)),this._trans("readwrite",function(C){return d.core.mutate({trans:C,type:"add",keys:a!=null?[a]:null,values:[w]})}).then(function(C){return C.numFailures?te.reject(C.failures[0]):C.lastResult}).then(function(C){if(p)try{ue(i,p,C)}catch{}return C})},Ye.prototype.update=function(i,a){return typeof i!="object"||c(i)?this.where(":id").equals(i).modify(a):(i=J(i,this.schema.primKey.keyPath),i===void 0?at(new ae.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(i).modify(a))},Ye.prototype.put=function(i,a){var d=this,h=this.schema.primKey,f=h.auto,p=h.keyPath,w=i;return p&&f&&(w=Gr(p)(i)),this._trans("readwrite",function(C){return d.core.mutate({trans:C,type:"put",values:[w],keys:a!=null?[a]:null})}).then(function(C){return C.numFailures?te.reject(C.failures[0]):C.lastResult}).then(function(C){if(p)try{ue(i,p,C)}catch{}return C})},Ye.prototype.delete=function(i){var a=this;return this._trans("readwrite",function(d){return a.core.mutate({trans:d,type:"delete",keys:[i]})}).then(function(d){return d.numFailures?te.reject(d.failures[0]):void 0})},Ye.prototype.clear=function(){var i=this;return this._trans("readwrite",function(a){return i.core.mutate({trans:a,type:"deleteRange",range:wo})}).then(function(a){return a.numFailures?te.reject(a.failures[0]):void 0})},Ye.prototype.bulkGet=function(i){var a=this;return this._trans("readonly",function(d){return a.core.getMany({keys:i,trans:d}).then(function(h){return h.map(function(f){return a.hook.reading.fire(f)})})})},Ye.prototype.bulkAdd=function(i,a,d){var h=this,f=Array.isArray(a)?a:void 0,p=(d=d||(f?void 0:a))?d.allKeys:void 0;return this._trans("readwrite",function(w){var P=h.schema.primKey,C=P.auto,P=P.keyPath;if(P&&f)throw new ae.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(f&&f.length!==i.length)throw new ae.InvalidArgument("Arguments objects and keys must have the same length");var _=i.length,P=P&&C?i.map(Gr(P)):i;return h.core.mutate({trans:w,type:"add",keys:f,values:P,wantResults:p}).then(function(R){var E=R.numFailures,j=R.results,T=R.lastResult,R=R.failures;if(E===0)return p?j:T;throw new Oe("".concat(h.name,".bulkAdd(): ").concat(E," of ").concat(_," operations failed"),R)})})},Ye.prototype.bulkPut=function(i,a,d){var h=this,f=Array.isArray(a)?a:void 0,p=(d=d||(f?void 0:a))?d.allKeys:void 0;return this._trans("readwrite",function(w){var P=h.schema.primKey,C=P.auto,P=P.keyPath;if(P&&f)throw new ae.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(f&&f.length!==i.length)throw new ae.InvalidArgument("Arguments objects and keys must have the same length");var _=i.length,P=P&&C?i.map(Gr(P)):i;return h.core.mutate({trans:w,type:"put",keys:f,values:P,wantResults:p}).then(function(R){var E=R.numFailures,j=R.results,T=R.lastResult,R=R.failures;if(E===0)return p?j:T;throw new Oe("".concat(h.name,".bulkPut(): ").concat(E," of ").concat(_," operations failed"),R)})})},Ye.prototype.bulkUpdate=function(i){var a=this,d=this.core,h=i.map(function(w){return w.key}),f=i.map(function(w){return w.changes}),p=[];return this._trans("readwrite",function(w){return d.getMany({trans:w,keys:h,cache:"clone"}).then(function(C){var _=[],P=[];i.forEach(function(E,j){var T=E.key,R=E.changes,O=C[j];if(O){for(var I=0,M=Object.keys(R);I<M.length;I++){var N=M[I],U=R[N];if(N===a.schema.primKey.keyPath){if(Pe(U,T)!==0)throw new ae.Constraint("Cannot update primary key in bulkUpdate()")}else ue(O,N,U)}p.push(j),_.push(T),P.push(O)}});var D=_.length;return d.mutate({trans:w,type:"put",keys:_,values:P,updates:{keys:h,changeSpecs:f}}).then(function(E){var j=E.numFailures,T=E.failures;if(j===0)return D;for(var R=0,O=Object.keys(T);R<O.length;R++){var I,M=O[R],N=p[Number(M)];N!=null&&(I=T[M],delete T[M],T[N]=I)}throw new Oe("".concat(a.name,".bulkUpdate(): ").concat(j," of ").concat(D," operations failed"),T)})})})},Ye.prototype.bulkDelete=function(i){var a=this,d=i.length;return this._trans("readwrite",function(h){return a.core.mutate({trans:h,type:"delete",keys:i})}).then(function(w){var f=w.numFailures,p=w.lastResult,w=w.failures;if(f===0)return p;throw new Oe("".concat(a.name,".bulkDelete(): ").concat(f," of ").concat(d," operations failed"),w)})},Ye);function Ye(){}function gr(i){function a(w,C){if(C){for(var _=arguments.length,P=new Array(_-1);--_;)P[_-1]=arguments[_];return d[w].subscribe.apply(null,P),i}if(typeof w=="string")return d[w]}var d={};a.addEventType=p;for(var h=1,f=arguments.length;h<f;++h)p(arguments[h]);return a;function p(w,C,_){if(typeof w!="object"){var P;C=C||nt;var D={subscribers:[],fire:_=_||ye,subscribe:function(E){D.subscribers.indexOf(E)===-1&&(D.subscribers.push(E),D.fire=C(D.fire,E))},unsubscribe:function(E){D.subscribers=D.subscribers.filter(function(j){return j!==E}),D.fire=D.subscribers.reduce(C,_)}};return d[w]=a[w]=D}l(P=w).forEach(function(E){var j=P[E];if(c(j))p(E,P[E][0],P[E][1]);else{if(j!=="asap")throw new ae.InvalidArgument("Invalid event config");var T=p(E,ke,function(){for(var R=arguments.length,O=new Array(R);R--;)O[R]=arguments[R];T.subscribers.forEach(function(I){V(function(){I.apply(null,O)})})})}})}}function br(i,a){return F(a).from({prototype:i}),a}function er(i,a){return!(i.filter||i.algorithm||i.or)&&(a?i.justLimit:!i.replayFilter)}function Vs(i,a){i.filter=Mn(i.filter,a)}function Gs(i,a,d){var h=i.replayFilter;i.replayFilter=h?function(){return Mn(h(),a())}:a,i.justLimit=d&&!h}function Yr(i,a){if(i.isPrimKey)return a.primaryKey;var d=a.getIndexByKeyPath(i.index);if(!d)throw new ae.Schema("KeyPath "+i.index+" on object store "+a.name+" is not indexed");return d}function Co(i,a,d){var h=Yr(i,a.schema);return a.openCursor({trans:d,values:!i.keysOnly,reverse:i.dir==="prev",unique:!!i.unique,query:{index:h,range:i.range}})}function Xr(i,a,d,h){var f=i.replayFilter?Mn(i.filter,i.replayFilter()):i.filter;if(i.or){var p={},w=function(C,_,P){var D,E;f&&!f(_,P,function(j){return _.stop(j)},function(j){return _.fail(j)})||((E=""+(D=_.primaryKey))=="[object ArrayBuffer]"&&(E=""+new Uint8Array(D)),b(p,E)||(p[E]=!0,a(C,_,P)))};return Promise.all([i.or._iterate(w,d),Eo(Co(i,h,d),i.algorithm,w,!i.keysOnly&&i.valueMapper)])}return Eo(Co(i,h,d),Mn(i.algorithm,f),a,!i.keysOnly&&i.valueMapper)}function Eo(i,a,d,h){var f=He(h?function(p,w,C){return d(h(p),w,C)}:d);return i.then(function(p){if(p)return p.start(function(){var w=function(){return p.continue()};a&&!a(p,function(C){return w=C},function(C){p.stop(C),w=ye},function(C){p.fail(C),w=ye})||f(p.value,p,function(C){return w=C}),w()})})}var gn=Symbol(),yr=(So.prototype.execute=function(i){if(this.add!==void 0){var a=this.add;if(c(a))return n(n([],c(i)?i:[],!0),a).sort();if(typeof a=="number")return(Number(i)||0)+a;if(typeof a=="bigint")try{return BigInt(i)+a}catch{return BigInt(0)+a}throw new TypeError("Invalid term ".concat(a))}if(this.remove!==void 0){var d=this.remove;if(c(d))return c(i)?i.filter(function(h){return!d.includes(h)}).sort():[];if(typeof d=="number")return Number(i)-d;if(typeof d=="bigint")try{return BigInt(i)-d}catch{return BigInt(0)-d}throw new TypeError("Invalid subtrahend ".concat(d))}return a=(a=this.replacePrefix)===null||a===void 0?void 0:a[0],a&&typeof i=="string"&&i.startsWith(a)?this.replacePrefix[1]+i.substring(a.length):i},So);function So(i){Object.assign(this,i)}var vc=(ze.prototype._read=function(i,a){var d=this._ctx;return d.error?d.table._trans(null,at.bind(null,d.error)):d.table._trans("readonly",i).then(a)},ze.prototype._write=function(i){var a=this._ctx;return a.error?a.table._trans(null,at.bind(null,a.error)):a.table._trans("readwrite",i,"locked")},ze.prototype._addAlgorithm=function(i){var a=this._ctx;a.algorithm=Mn(a.algorithm,i)},ze.prototype._iterate=function(i,a){return Xr(this._ctx,i,a,this._ctx.table.core)},ze.prototype.clone=function(i){var a=Object.create(this.constructor.prototype),d=Object.create(this._ctx);return i&&u(d,i),a._ctx=d,a},ze.prototype.raw=function(){return this._ctx.valueMapper=null,this},ze.prototype.each=function(i){var a=this._ctx;return this._read(function(d){return Xr(a,i,d,a.table.core)})},ze.prototype.count=function(i){var a=this;return this._read(function(d){var h=a._ctx,f=h.table.core;if(er(h,!0))return f.count({trans:d,query:{index:Yr(h,f.schema),range:h.range}}).then(function(w){return Math.min(w,h.limit)});var p=0;return Xr(h,function(){return++p,!1},d,f).then(function(){return p})}).then(i)},ze.prototype.sortBy=function(i,a){var d=i.split(".").reverse(),h=d[0],f=d.length-1;function p(_,P){return P?p(_[d[P]],P-1):_[h]}var w=this._ctx.dir==="next"?1:-1;function C(_,P){return Pe(p(_,f),p(P,f))*w}return this.toArray(function(_){return _.sort(C)}).then(a)},ze.prototype.toArray=function(i){var a=this;return this._read(function(d){var h=a._ctx;if(h.dir==="next"&&er(h,!0)&&0<h.limit){var f=h.valueMapper,p=Yr(h,h.table.core.schema);return h.table.core.query({trans:d,limit:h.limit,values:!0,query:{index:p,range:h.range}}).then(function(C){return C=C.result,f?C.map(f):C})}var w=[];return Xr(h,function(C){return w.push(C)},d,h.table.core).then(function(){return w})},i)},ze.prototype.offset=function(i){var a=this._ctx;return i<=0||(a.offset+=i,er(a)?Gs(a,function(){var d=i;return function(h,f){return d===0||(d===1?--d:f(function(){h.advance(d),d=0}),!1)}}):Gs(a,function(){var d=i;return function(){return--d<0}})),this},ze.prototype.limit=function(i){return this._ctx.limit=Math.min(this._ctx.limit,i),Gs(this._ctx,function(){var a=i;return function(d,h,f){return--a<=0&&h(f),0<=a}},!0),this},ze.prototype.until=function(i,a){return Vs(this._ctx,function(d,h,f){return!i(d.value)||(h(f),a)}),this},ze.prototype.first=function(i){return this.limit(1).toArray(function(a){return a[0]}).then(i)},ze.prototype.last=function(i){return this.reverse().first(i)},ze.prototype.filter=function(i){var a;return Vs(this._ctx,function(d){return i(d.value)}),(a=this._ctx).isMatch=Mn(a.isMatch,i),this},ze.prototype.and=function(i){return this.filter(i)},ze.prototype.or=function(i){return new this.db.WhereClause(this._ctx.table,i,this)},ze.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},ze.prototype.desc=function(){return this.reverse()},ze.prototype.eachKey=function(i){var a=this._ctx;return a.keysOnly=!a.isMatch,this.each(function(d,h){i(h.key,h)})},ze.prototype.eachUniqueKey=function(i){return this._ctx.unique="unique",this.eachKey(i)},ze.prototype.eachPrimaryKey=function(i){var a=this._ctx;return a.keysOnly=!a.isMatch,this.each(function(d,h){i(h.primaryKey,h)})},ze.prototype.keys=function(i){var a=this._ctx;a.keysOnly=!a.isMatch;var d=[];return this.each(function(h,f){d.push(f.key)}).then(function(){return d}).then(i)},ze.prototype.primaryKeys=function(i){var a=this._ctx;if(a.dir==="next"&&er(a,!0)&&0<a.limit)return this._read(function(h){var f=Yr(a,a.table.core.schema);return a.table.core.query({trans:h,values:!1,limit:a.limit,query:{index:f,range:a.range}})}).then(function(h){return h.result}).then(i);a.keysOnly=!a.isMatch;var d=[];return this.each(function(h,f){d.push(f.primaryKey)}).then(function(){return d}).then(i)},ze.prototype.uniqueKeys=function(i){return this._ctx.unique="unique",this.keys(i)},ze.prototype.firstKey=function(i){return this.limit(1).keys(function(a){return a[0]}).then(i)},ze.prototype.lastKey=function(i){return this.reverse().firstKey(i)},ze.prototype.distinct=function(){var i=this._ctx,i=i.index&&i.table.schema.idxByName[i.index];if(!i||!i.multi)return this;var a={};return Vs(this._ctx,function(f){var h=f.primaryKey.toString(),f=b(a,h);return a[h]=!0,!f}),this},ze.prototype.modify=function(i){var a=this,d=this._ctx;return this._write(function(h){var f,p,w;w=typeof i=="function"?i:(f=l(i),p=f.length,function(I){for(var M=!1,N=0;N<p;++N){var U=f[N],W=i[U],Y=J(I,U);W instanceof yr?(ue(I,U,W.execute(Y)),M=!0):Y!==W&&(ue(I,U,W),M=!0)}return M});var C=d.table.core,E=C.schema.primaryKey,_=E.outbound,P=E.extractKey,D=200,E=a.db._options.modifyChunkSize;E&&(D=typeof E=="object"?E[C.name]||E["*"]||200:E);function j(I,U){var N=U.failures,U=U.numFailures;R+=I-U;for(var W=0,Y=l(N);W<Y.length;W++){var se=Y[W];T.push(N[se])}}var T=[],R=0,O=[];return a.clone().primaryKeys().then(function(I){function M(U){var W=Math.min(D,I.length-U);return C.getMany({trans:h,keys:I.slice(U,U+W),cache:"immutable"}).then(function(Y){for(var se=[],X=[],Z=_?[]:null,le=[],re=0;re<W;++re){var de=Y[re],xe={value:S(de),primKey:I[U+re]};w.call(xe,xe.value,xe)!==!1&&(xe.value==null?le.push(I[U+re]):_||Pe(P(de),P(xe.value))===0?(X.push(xe.value),_&&Z.push(I[U+re])):(le.push(I[U+re]),se.push(xe.value)))}return Promise.resolve(0<se.length&&C.mutate({trans:h,type:"add",values:se}).then(function(Ce){for(var Ee in Ce.failures)le.splice(parseInt(Ee),1);j(se.length,Ce)})).then(function(){return(0<X.length||N&&typeof i=="object")&&C.mutate({trans:h,type:"put",keys:Z,values:X,criteria:N,changeSpec:typeof i!="function"&&i,isAdditionalChunk:0<U}).then(function(Ce){return j(X.length,Ce)})}).then(function(){return(0<le.length||N&&i===Ys)&&C.mutate({trans:h,type:"delete",keys:le,criteria:N,isAdditionalChunk:0<U}).then(function(Ce){return j(le.length,Ce)})}).then(function(){return I.length>U+W&&M(U+D)})})}var N=er(d)&&d.limit===1/0&&(typeof i!="function"||i===Ys)&&{index:d.index,range:d.range};return M(0).then(function(){if(0<T.length)throw new Se("Error modifying one or more objects",T,R,O);return I.length})})})},ze.prototype.delete=function(){var i=this._ctx,a=i.range;return er(i)&&(i.isPrimKey||a.type===3)?this._write(function(d){var h=i.table.core.schema.primaryKey,f=a;return i.table.core.count({trans:d,query:{index:h,range:f}}).then(function(p){return i.table.core.mutate({trans:d,type:"deleteRange",range:f}).then(function(w){var C=w.failures;if(w.lastResult,w.results,w=w.numFailures,w)throw new Se("Could not delete some values",Object.keys(C).map(function(_){return C[_]}),p-w);return p-w})})}):this.modify(Ys)},ze);function ze(){}var Ys=function(i,a){return a.value=null};function xc(i,a){return i<a?-1:i===a?0:1}function $c(i,a){return a<i?-1:i===a?0:1}function Dt(i,a,d){return i=i instanceof To?new i.Collection(i):i,i._ctx.error=new(d||TypeError)(a),i}function tr(i){return new i.Collection(i,function(){return _o("")}).limit(0)}function Qr(i,a,d,h){var f,p,w,C,_,P,D,E=d.length;if(!d.every(function(R){return typeof R=="string"}))return Dt(i,yo);function j(R){f=R==="next"?function(I){return I.toUpperCase()}:function(I){return I.toLowerCase()},p=R==="next"?function(I){return I.toLowerCase()}:function(I){return I.toUpperCase()},w=R==="next"?xc:$c;var O=d.map(function(I){return{lower:p(I),upper:f(I)}}).sort(function(I,M){return w(I.lower,M.lower)});C=O.map(function(I){return I.upper}),_=O.map(function(I){return I.lower}),D=(P=R)==="next"?"":h}j("next"),i=new i.Collection(i,function(){return Sn(C[0],_[E-1]+h)}),i._ondirectionchange=function(R){j(R)};var T=0;return i._addAlgorithm(function(R,O,I){var M=R.key;if(typeof M!="string")return!1;var N=p(M);if(a(N,_,T))return!0;for(var U=null,W=T;W<E;++W){var Y=(function(se,X,Z,le,re,de){for(var xe=Math.min(se.length,le.length),Ce=-1,Ee=0;Ee<xe;++Ee){var Ot=X[Ee];if(Ot!==le[Ee])return re(se[Ee],Z[Ee])<0?se.substr(0,Ee)+Z[Ee]+Z.substr(Ee+1):re(se[Ee],le[Ee])<0?se.substr(0,Ee)+le[Ee]+Z.substr(Ee+1):0<=Ce?se.substr(0,Ce)+X[Ce]+Z.substr(Ce+1):null;re(se[Ee],Ot)<0&&(Ce=Ee)}return xe<le.length&&de==="next"?se+Z.substr(se.length):xe<se.length&&de==="prev"?se.substr(0,Z.length):Ce<0?null:se.substr(0,Ce)+le[Ce]+Z.substr(Ce+1)})(M,N,C[W],_[W],w,P);Y===null&&U===null?T=W+1:(U===null||0<w(U,Y))&&(U=Y)}return O(U!==null?function(){R.continue(U+D)}:I),!1}),i}function Sn(i,a,d,h){return{type:2,lower:i,upper:a,lowerOpen:d,upperOpen:h}}function _o(i){return{type:1,lower:i,upper:i}}var To=(Object.defineProperty(gt.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),gt.prototype.between=function(i,a,d,h){d=d!==!1,h=h===!0;try{return 0<this._cmp(i,a)||this._cmp(i,a)===0&&(d||h)&&(!d||!h)?tr(this):new this.Collection(this,function(){return Sn(i,a,!d,!h)})}catch{return Dt(this,mn)}},gt.prototype.equals=function(i){return i==null?Dt(this,mn):new this.Collection(this,function(){return _o(i)})},gt.prototype.above=function(i){return i==null?Dt(this,mn):new this.Collection(this,function(){return Sn(i,void 0,!0)})},gt.prototype.aboveOrEqual=function(i){return i==null?Dt(this,mn):new this.Collection(this,function(){return Sn(i,void 0,!1)})},gt.prototype.below=function(i){return i==null?Dt(this,mn):new this.Collection(this,function(){return Sn(void 0,i,!1,!0)})},gt.prototype.belowOrEqual=function(i){return i==null?Dt(this,mn):new this.Collection(this,function(){return Sn(void 0,i)})},gt.prototype.startsWith=function(i){return typeof i!="string"?Dt(this,yo):this.between(i,i+Ln,!0,!0)},gt.prototype.startsWithIgnoreCase=function(i){return i===""?this.startsWith(i):Qr(this,function(a,d){return a.indexOf(d[0])===0},[i],Ln)},gt.prototype.equalsIgnoreCase=function(i){return Qr(this,function(a,d){return a===d[0]},[i],"")},gt.prototype.anyOfIgnoreCase=function(){var i=Xe.apply(Q,arguments);return i.length===0?tr(this):Qr(this,function(a,d){return d.indexOf(a)!==-1},i,"")},gt.prototype.startsWithAnyOfIgnoreCase=function(){var i=Xe.apply(Q,arguments);return i.length===0?tr(this):Qr(this,function(a,d){return d.some(function(h){return a.indexOf(h)===0})},i,Ln)},gt.prototype.anyOf=function(){var i=this,a=Xe.apply(Q,arguments),d=this._cmp;try{a.sort(d)}catch{return Dt(this,mn)}if(a.length===0)return tr(this);var h=new this.Collection(this,function(){return Sn(a[0],a[a.length-1])});h._ondirectionchange=function(p){d=p==="next"?i._ascending:i._descending,a.sort(d)};var f=0;return h._addAlgorithm(function(p,w,C){for(var _=p.key;0<d(_,a[f]);)if(++f===a.length)return w(C),!1;return d(_,a[f])===0||(w(function(){p.continue(a[f])}),!1)}),h},gt.prototype.notEqual=function(i){return this.inAnyRange([[-1/0,i],[i,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},gt.prototype.noneOf=function(){var i=Xe.apply(Q,arguments);if(i.length===0)return new this.Collection(this);try{i.sort(this._ascending)}catch{return Dt(this,mn)}var a=i.reduce(function(d,h){return d?d.concat([[d[d.length-1][1],h]]):[[-1/0,h]]},null);return a.push([i[i.length-1],this.db._maxKey]),this.inAnyRange(a,{includeLowers:!1,includeUppers:!1})},gt.prototype.inAnyRange=function(M,a){var d=this,h=this._cmp,f=this._ascending,p=this._descending,w=this._min,C=this._max;if(M.length===0)return tr(this);if(!M.every(function(N){return N[0]!==void 0&&N[1]!==void 0&&f(N[0],N[1])<=0}))return Dt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",ae.InvalidArgument);var _=!a||a.includeLowers!==!1,P=a&&a.includeUppers===!0,D,E=f;function j(N,U){return E(N[0],U[0])}try{(D=M.reduce(function(N,U){for(var W=0,Y=N.length;W<Y;++W){var se=N[W];if(h(U[0],se[1])<0&&0<h(U[1],se[0])){se[0]=w(se[0],U[0]),se[1]=C(se[1],U[1]);break}}return W===Y&&N.push(U),N},[])).sort(j)}catch{return Dt(this,mn)}var T=0,R=P?function(N){return 0<f(N,D[T][1])}:function(N){return 0<=f(N,D[T][1])},O=_?function(N){return 0<p(N,D[T][0])}:function(N){return 0<=p(N,D[T][0])},I=R,M=new this.Collection(this,function(){return Sn(D[0][0],D[D.length-1][1],!_,!P)});return M._ondirectionchange=function(N){E=N==="next"?(I=R,f):(I=O,p),D.sort(j)},M._addAlgorithm(function(N,U,W){for(var Y,se=N.key;I(se);)if(++T===D.length)return U(W),!1;return!R(Y=se)&&!O(Y)||(d._cmp(se,D[T][1])===0||d._cmp(se,D[T][0])===0||U(function(){E===f?N.continue(D[T][0]):N.continue(D[T][1])}),!1)}),M},gt.prototype.startsWithAnyOf=function(){var i=Xe.apply(Q,arguments);return i.every(function(a){return typeof a=="string"})?i.length===0?tr(this):this.inAnyRange(i.map(function(a){return[a,a+Ln]})):Dt(this,"startsWithAnyOf() only works with strings")},gt);function gt(){}function ln(i){return He(function(a){return wr(a),i(a.target.error),!1})}function wr(i){i.stopPropagation&&i.stopPropagation(),i.preventDefault&&i.preventDefault()}var vr="storagemutated",Xs="x-storagemutated-1",_n=gr(null,vr),kc=(cn.prototype._lock=function(){return oe(!ee.global),++this._reculock,this._reculock!==1||ee.global||(ee.lockOwnerFor=this),this},cn.prototype._unlock=function(){if(oe(!ee.global),--this._reculock==0)for(ee.global||(ee.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var i=this._blockedFuncs.shift();try{Fn(i[1],i[0])}catch{}}return this},cn.prototype._locked=function(){return this._reculock&&ee.lockOwnerFor!==this},cn.prototype.create=function(i){var a=this;if(!this.mode)return this;var d=this.db.idbdb,h=this.db._state.dbOpenError;if(oe(!this.idbtrans),!i&&!d)switch(h&&h.name){case"DatabaseClosedError":throw new ae.DatabaseClosed(h);case"MissingAPIError":throw new ae.MissingAPI(h.message,h);default:throw new ae.OpenFailed(h)}if(!this.active)throw new ae.TransactionInactive;return oe(this._completion._state===null),(i=this.idbtrans=i||(this.db.core||d).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=He(function(f){wr(f),a._reject(i.error)}),i.onabort=He(function(f){wr(f),a.active&&a._reject(new ae.Abort(i.error)),a.active=!1,a.on("abort").fire(f)}),i.oncomplete=He(function(){a.active=!1,a._resolve(),"mutatedParts"in i&&_n.storagemutated.fire(i.mutatedParts)}),this},cn.prototype._promise=function(i,a,d){var h=this;if(i==="readwrite"&&this.mode!=="readwrite")return at(new ae.ReadOnly("Transaction is readonly"));if(!this.active)return at(new ae.TransactionInactive);if(this._locked())return new te(function(p,w){h._blockedFuncs.push([function(){h._promise(i,a,d).then(p,w)},ee])});if(d)return kn(function(){var p=new te(function(w,C){h._lock();var _=a(w,C,h);_&&_.then&&_.then(w,C)});return p.finally(function(){return h._unlock()}),p._lib=!0,p});var f=new te(function(p,w){var C=a(p,w,h);C&&C.then&&C.then(p,w)});return f._lib=!0,f},cn.prototype._root=function(){return this.parent?this.parent._root():this},cn.prototype.waitFor=function(i){var a,d=this._root(),h=te.resolve(i);d._waitingFor?d._waitingFor=d._waitingFor.then(function(){return h}):(d._waitingFor=h,d._waitingQueue=[],a=d.idbtrans.objectStore(d.storeNames[0]),(function p(){for(++d._spinCount;d._waitingQueue.length;)d._waitingQueue.shift()();d._waitingFor&&(a.get(-1/0).onsuccess=p)})());var f=d._waitingFor;return new te(function(p,w){h.then(function(C){return d._waitingQueue.push(He(p.bind(null,C)))},function(C){return d._waitingQueue.push(He(w.bind(null,C)))}).finally(function(){d._waitingFor===f&&(d._waitingFor=null)})})},cn.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new ae.Abort))},cn.prototype.table=function(i){var a=this._memoizedTables||(this._memoizedTables={});if(b(a,i))return a[i];var d=this.schema[i];if(!d)throw new ae.NotFound("Table "+i+" not part of transaction");return d=new this.db.Table(i,d,this),d.core=this.db.core.table(i),a[i]=d},cn);function cn(){}function Qs(i,a,d,h,f,p,w){return{name:i,keyPath:a,unique:d,multi:h,auto:f,compound:p,src:(d&&!w?"&":"")+(h?"*":"")+(f?"++":"")+Ao(a)}}function Ao(i){return typeof i=="string"?i:i?"["+[].join.call(i,"+")+"]":""}function Js(i,a,d){return{name:i,primKey:a,indexes:d,mappedClass:null,idxByName:(h=function(f){return[f.name,f]},d.reduce(function(f,p,w){return w=h(p,w),w&&(f[w[0]]=w[1]),f},{}))};var h}var xr=function(i){try{return i.only([[]]),xr=function(){return[[]]},[[]]}catch{return xr=function(){return Ln},Ln}};function Zs(i){return i==null?function(){}:typeof i=="string"?(a=i).split(".").length===1?function(d){return d[a]}:function(d){return J(d,a)}:function(d){return J(d,i)};var a}function Po(i){return[].slice.call(i)}var Cc=0;function $r(i){return i==null?":id":typeof i=="string"?i:"[".concat(i.join("+"),"]")}function Ec(i,a,_){function h(I){if(I.type===3)return null;if(I.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var T=I.lower,R=I.upper,O=I.lowerOpen,I=I.upperOpen;return T===void 0?R===void 0?null:a.upperBound(R,!!I):R===void 0?a.lowerBound(T,!!O):a.bound(T,R,!!O,!!I)}function f(j){var T,R=j.name;return{name:R,schema:j,mutate:function(O){var I=O.trans,M=O.type,N=O.keys,U=O.values,W=O.range;return new Promise(function(Y,se){Y=He(Y);var X=I.objectStore(R),Z=X.keyPath==null,le=M==="put"||M==="add";if(!le&&M!=="delete"&&M!=="deleteRange")throw new Error("Invalid operation type: "+M);var re,de=(N||U||{length:1}).length;if(N&&U&&N.length!==U.length)throw new Error("Given keys array must have same length as given values array.");if(de===0)return Y({numFailures:0,failures:{},results:[],lastResult:void 0});function xe(Ct){++Ot,wr(Ct)}var Ce=[],Ee=[],Ot=0;if(M==="deleteRange"){if(W.type===4)return Y({numFailures:Ot,failures:Ee,results:[],lastResult:void 0});W.type===3?Ce.push(re=X.clear()):Ce.push(re=X.delete(h(W)))}else{var Z=le?Z?[U,N]:[U,null]:[N,null],ve=Z[0],vt=Z[1];if(le)for(var xt=0;xt<de;++xt)Ce.push(re=vt&&vt[xt]!==void 0?X[M](ve[xt],vt[xt]):X[M](ve[xt])),re.onerror=xe;else for(xt=0;xt<de;++xt)Ce.push(re=X[M](ve[xt])),re.onerror=xe}function ds(Ct){Ct=Ct.target.result,Ce.forEach(function(Un,bi){return Un.error!=null&&(Ee[bi]=Un.error)}),Y({numFailures:Ot,failures:Ee,results:M==="delete"?N:Ce.map(function(Un){return Un.result}),lastResult:Ct})}re.onerror=function(Ct){xe(Ct),ds(Ct)},re.onsuccess=ds})},getMany:function(O){var I=O.trans,M=O.keys;return new Promise(function(N,U){N=He(N);for(var W,Y=I.objectStore(R),se=M.length,X=new Array(se),Z=0,le=0,re=function(Ce){Ce=Ce.target,X[Ce._pos]=Ce.result,++le===Z&&N(X)},de=ln(U),xe=0;xe<se;++xe)M[xe]!=null&&((W=Y.get(M[xe]))._pos=xe,W.onsuccess=re,W.onerror=de,++Z);Z===0&&N(X)})},get:function(O){var I=O.trans,M=O.key;return new Promise(function(N,U){N=He(N);var W=I.objectStore(R).get(M);W.onsuccess=function(Y){return N(Y.target.result)},W.onerror=ln(U)})},query:(T=P,function(O){return new Promise(function(I,M){I=He(I);var N,U,W,Z=O.trans,Y=O.values,se=O.limit,re=O.query,X=se===1/0?void 0:se,le=re.index,re=re.range,Z=Z.objectStore(R),le=le.isPrimaryKey?Z:Z.index(le.name),re=h(re);if(se===0)return I({result:[]});T?((X=Y?le.getAll(re,X):le.getAllKeys(re,X)).onsuccess=function(de){return I({result:de.target.result})},X.onerror=ln(M)):(N=0,U=!Y&&"openKeyCursor"in le?le.openKeyCursor(re):le.openCursor(re),W=[],U.onsuccess=function(de){var xe=U.result;return xe?(W.push(Y?xe.value:xe.primaryKey),++N===se?I({result:W}):void xe.continue()):I({result:W})},U.onerror=ln(M))})}),openCursor:function(O){var I=O.trans,M=O.values,N=O.query,U=O.reverse,W=O.unique;return new Promise(function(Y,se){Y=He(Y);var le=N.index,X=N.range,Z=I.objectStore(R),Z=le.isPrimaryKey?Z:Z.index(le.name),le=U?W?"prevunique":"prev":W?"nextunique":"next",re=!M&&"openKeyCursor"in Z?Z.openKeyCursor(h(X),le):Z.openCursor(h(X),le);re.onerror=ln(se),re.onsuccess=He(function(de){var xe,Ce,Ee,Ot,ve=re.result;ve?(ve.___id=++Cc,ve.done=!1,xe=ve.continue.bind(ve),Ce=(Ce=ve.continuePrimaryKey)&&Ce.bind(ve),Ee=ve.advance.bind(ve),Ot=function(){throw new Error("Cursor not stopped")},ve.trans=I,ve.stop=ve.continue=ve.continuePrimaryKey=ve.advance=function(){throw new Error("Cursor not started")},ve.fail=He(se),ve.next=function(){var vt=this,xt=1;return this.start(function(){return xt--?vt.continue():vt.stop()}).then(function(){return vt})},ve.start=function(vt){function xt(){if(re.result)try{vt()}catch(Ct){ve.fail(Ct)}else ve.done=!0,ve.start=function(){throw new Error("Cursor behind last entry")},ve.stop()}var ds=new Promise(function(Ct,Un){Ct=He(Ct),re.onerror=ln(Un),ve.fail=Un,ve.stop=function(bi){ve.stop=ve.continue=ve.continuePrimaryKey=ve.advance=Ot,Ct(bi)}});return re.onsuccess=He(function(Ct){re.onsuccess=xt,xt()}),ve.continue=xe,ve.continuePrimaryKey=Ce,ve.advance=Ee,xt(),ds},Y(ve)):Y(null)},se)})},count:function(O){var I=O.query,M=O.trans,N=I.index,U=I.range;return new Promise(function(W,Y){var se=M.objectStore(R),X=N.isPrimaryKey?se:se.index(N.name),se=h(U),X=se?X.count(se):X.count();X.onsuccess=He(function(Z){return W(Z.target.result)}),X.onerror=ln(Y)})}}}var p,w,C,D=(w=_,C=Po((p=i).objectStoreNames),{schema:{name:p.name,tables:C.map(function(j){return w.objectStore(j)}).map(function(j){var T=j.keyPath,I=j.autoIncrement,R=c(T),O={},I={name:j.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:T==null,compound:R,keyPath:T,autoIncrement:I,unique:!0,extractKey:Zs(T)},indexes:Po(j.indexNames).map(function(M){return j.index(M)}).map(function(W){var N=W.name,U=W.unique,Y=W.multiEntry,W=W.keyPath,Y={name:N,compound:c(W),keyPath:W,unique:U,multiEntry:Y,extractKey:Zs(W)};return O[$r(W)]=Y}),getIndexByKeyPath:function(M){return O[$r(M)]}};return O[":id"]=I.primaryKey,T!=null&&(O[$r(T)]=I.primaryKey),I})},hasGetAll:0<C.length&&"getAll"in w.objectStore(C[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),_=D.schema,P=D.hasGetAll,D=_.tables.map(f),E={};return D.forEach(function(j){return E[j.name]=j}),{stack:"dbcore",transaction:i.transaction.bind(i),table:function(j){if(!E[j])throw new Error("Table '".concat(j,"' not found"));return E[j]},MIN_KEY:-1/0,MAX_KEY:xr(a),schema:_}}function Sc(i,a,d,h){var f=d.IDBKeyRange;return d.indexedDB,{dbcore:(h=Ec(a,f,h),i.dbcore.reduce(function(p,w){return w=w.create,s(s({},p),w(p))},h))}}function Jr(i,h){var d=h.db,h=Sc(i._middlewares,d,i._deps,h);i.core=h.dbcore,i.tables.forEach(function(f){var p=f.name;i.core.schema.tables.some(function(w){return w.name===p})&&(f.core=i.core.table(p),i[p]instanceof i.Table&&(i[p].core=f.core))})}function Zr(i,a,d,h){d.forEach(function(f){var p=h[f];a.forEach(function(w){var C=(function _(P,D){return H(P,D)||(P=m(P))&&_(P,D)})(w,f);(!C||"value"in C&&C.value===void 0)&&(w===i.Transaction.prototype||w instanceof i.Transaction?L(w,f,{get:function(){return this.table(f)},set:function(_){B(this,f,{value:_,writable:!0,configurable:!0,enumerable:!0})}}):w[f]=new i.Table(f,p))})})}function ei(i,a){a.forEach(function(d){for(var h in d)d[h]instanceof i.Table&&delete d[h]})}function _c(i,a){return i._cfg.version-a._cfg.version}function Tc(i,a,d,h){var f=i._dbSchema;d.objectStoreNames.contains("$meta")&&!f.$meta&&(f.$meta=Js("$meta",Ro("")[0],[]),i._storeNames.push("$meta"));var p=i._createTransaction("readwrite",i._storeNames,f);p.create(d),p._completion.catch(h);var w=p._reject.bind(p),C=ee.transless||ee;kn(function(){return ee.trans=p,ee.transless=C,a!==0?(Jr(i,d),P=a,((_=p).storeNames.includes("$meta")?_.table("$meta").get("version").then(function(D){return D??P}):te.resolve(P)).then(function(D){return j=D,T=p,R=d,O=[],D=(E=i)._versions,I=E._dbSchema=ts(0,E.idbdb,R),(D=D.filter(function(M){return M._cfg.version>=j})).length!==0?(D.forEach(function(M){O.push(function(){var N=I,U=M._cfg.dbschema;ns(E,N,R),ns(E,U,R),I=E._dbSchema=U;var W=ti(N,U);W.add.forEach(function(le){ni(R,le[0],le[1].primKey,le[1].indexes)}),W.change.forEach(function(le){if(le.recreate)throw new ae.Upgrade("Not yet support for changing primary key");var re=R.objectStore(le.name);le.add.forEach(function(de){return es(re,de)}),le.change.forEach(function(de){re.deleteIndex(de.name),es(re,de)}),le.del.forEach(function(de){return re.deleteIndex(de)})});var Y=M._cfg.contentUpgrade;if(Y&&M._cfg.version>j){Jr(E,R),T._memoizedTables={};var se=$e(U);W.del.forEach(function(le){se[le]=N[le]}),ei(E,[E.Transaction.prototype]),Zr(E,[E.Transaction.prototype],l(se),se),T.schema=se;var X,Z=ct(Y);return Z&&Jn(),W=te.follow(function(){var le;(X=Y(T))&&Z&&(le=Cn.bind(null,null),X.then(le,le))}),X&&typeof X.then=="function"?te.resolve(X):W.then(function(){return X})}}),O.push(function(N){var U,W,Y=M._cfg.dbschema;U=Y,W=N,[].slice.call(W.db.objectStoreNames).forEach(function(se){return U[se]==null&&W.db.deleteObjectStore(se)}),ei(E,[E.Transaction.prototype]),Zr(E,[E.Transaction.prototype],E._storeNames,E._dbSchema),T.schema=E._dbSchema}),O.push(function(N){E.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(E.idbdb.version/10)===M._cfg.version?(E.idbdb.deleteObjectStore("$meta"),delete E._dbSchema.$meta,E._storeNames=E._storeNames.filter(function(U){return U!=="$meta"})):N.objectStore("$meta").put(M._cfg.version,"version"))})}),(function M(){return O.length?te.resolve(O.shift()(T.idbtrans)).then(M):te.resolve()})().then(function(){Io(I,R)})):te.resolve();var E,j,T,R,O,I}).catch(w)):(l(f).forEach(function(D){ni(d,D,f[D].primKey,f[D].indexes)}),Jr(i,d),void te.follow(function(){return i.on.populate.fire(p)}).catch(w));var _,P})}function Ac(i,a){Io(i._dbSchema,a),a.db.version%10!=0||a.objectStoreNames.contains("$meta")||a.db.createObjectStore("$meta").add(Math.ceil(a.db.version/10-1),"version");var d=ts(0,i.idbdb,a);ns(i,i._dbSchema,a);for(var h=0,f=ti(d,i._dbSchema).change;h<f.length;h++){var p=(function(w){if(w.change.length||w.recreate)return console.warn("Unable to patch indexes of table ".concat(w.name," because it has changes on the type of index or primary key.")),{value:void 0};var C=a.objectStore(w.name);w.add.forEach(function(_){Fe&&console.debug("Dexie upgrade patch: Creating missing index ".concat(w.name,".").concat(_.src)),es(C,_)})})(f[h]);if(typeof p=="object")return p.value}}function ti(i,a){var d,h={del:[],add:[],change:[]};for(d in i)a[d]||h.del.push(d);for(d in a){var f=i[d],p=a[d];if(f){var w={name:d,def:p,recreate:!1,del:[],add:[],change:[]};if(""+(f.primKey.keyPath||"")!=""+(p.primKey.keyPath||"")||f.primKey.auto!==p.primKey.auto)w.recreate=!0,h.change.push(w);else{var C=f.idxByName,_=p.idxByName,P=void 0;for(P in C)_[P]||w.del.push(P);for(P in _){var D=C[P],E=_[P];D?D.src!==E.src&&w.change.push(E):w.add.push(E)}(0<w.del.length||0<w.add.length||0<w.change.length)&&h.change.push(w)}}else h.add.push([d,p])}return h}function ni(i,a,d,h){var f=i.db.createObjectStore(a,d.keyPath?{keyPath:d.keyPath,autoIncrement:d.auto}:{autoIncrement:d.auto});return h.forEach(function(p){return es(f,p)}),f}function Io(i,a){l(i).forEach(function(d){a.db.objectStoreNames.contains(d)||(Fe&&console.debug("Dexie: Creating missing table",d),ni(a,d,i[d].primKey,i[d].indexes))})}function es(i,a){i.createIndex(a.name,a.keyPath,{unique:a.unique,multiEntry:a.multi})}function ts(i,a,d){var h={};return he(a.objectStoreNames,0).forEach(function(f){for(var p=d.objectStore(f),w=Qs(Ao(P=p.keyPath),P||"",!0,!1,!!p.autoIncrement,P&&typeof P!="string",!0),C=[],_=0;_<p.indexNames.length;++_){var D=p.index(p.indexNames[_]),P=D.keyPath,D=Qs(D.name,P,!!D.unique,!!D.multiEntry,!1,P&&typeof P!="string",!1);C.push(D)}h[f]=Js(f,w,C)}),h}function ns(i,a,d){for(var h=d.db.objectStoreNames,f=0;f<h.length;++f){var p=h[f],w=d.objectStore(p);i._hasGetAll="getAll"in w;for(var C=0;C<w.indexNames.length;++C){var _=w.indexNames[C],P=w.index(_).keyPath,D=typeof P=="string"?P:"["+he(P).join("+")+"]";!a[p]||(P=a[p].idxByName[D])&&(P.name=_,delete a[p].idxByName[D],a[p].idxByName[_]=P)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&o.WorkerGlobalScope&&o instanceof o.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(i._hasGetAll=!1)}function Ro(i){return i.split(",").map(function(a,d){var h=(a=a.trim()).replace(/([&*]|\+\+)/g,""),f=/^\[/.test(h)?h.match(/^\[(.*)\]$/)[1].split("+"):h;return Qs(h,f||null,/\&/.test(a),/\*/.test(a),/\+\+/.test(a),c(f),d===0)})}var Pc=(rs.prototype._parseStoresSpec=function(i,a){l(i).forEach(function(d){if(i[d]!==null){var h=Ro(i[d]),f=h.shift();if(f.unique=!0,f.multi)throw new ae.Schema("Primary key cannot be multi-valued");h.forEach(function(p){if(p.auto)throw new ae.Schema("Only primary key can be marked as autoIncrement (++)");if(!p.keyPath)throw new ae.Schema("Index must have a name and cannot be an empty string")}),a[d]=Js(d,f,h)}})},rs.prototype.stores=function(d){var a=this.db;this._cfg.storesSource=this._cfg.storesSource?u(this._cfg.storesSource,d):d;var d=a._versions,h={},f={};return d.forEach(function(p){u(h,p._cfg.storesSource),f=p._cfg.dbschema={},p._parseStoresSpec(h,f)}),a._dbSchema=f,ei(a,[a._allTables,a,a.Transaction.prototype]),Zr(a,[a._allTables,a,a.Transaction.prototype,this._cfg.tables],l(f),f),a._storeNames=l(f),this},rs.prototype.upgrade=function(i){return this._cfg.contentUpgrade=It(this._cfg.contentUpgrade||ye,i),this},rs);function rs(){}function ri(i,a){var d=i._dbNamesDB;return d||(d=i._dbNamesDB=new bn(Vr,{addons:[],indexedDB:i,IDBKeyRange:a})).version(1).stores({dbnames:"name"}),d.table("dbnames")}function si(i){return i&&typeof i.databases=="function"}function ii(i){return kn(function(){return ee.letThrough=!0,i()})}function oi(i){return!("from"in i)}var wt=function(i,a){if(!this){var d=new wt;return i&&"d"in i&&u(d,i),d}u(this,arguments.length?{d:1,from:i,to:1<arguments.length?a:i}:{d:0})};function kr(i,a,d){var h=Pe(a,d);if(!isNaN(h)){if(0<h)throw RangeError();if(oi(i))return u(i,{from:a,to:d,d:1});var f=i.l,h=i.r;if(Pe(d,i.from)<0)return f?kr(f,a,d):i.l={from:a,to:d,d:1,l:null,r:null},Oo(i);if(0<Pe(a,i.to))return h?kr(h,a,d):i.r={from:a,to:d,d:1,l:null,r:null},Oo(i);Pe(a,i.from)<0&&(i.from=a,i.l=null,i.d=h?h.d+1:1),0<Pe(d,i.to)&&(i.to=d,i.r=null,i.d=i.l?i.l.d+1:1),d=!i.r,f&&!i.l&&Cr(i,f),h&&d&&Cr(i,h)}}function Cr(i,a){oi(a)||(function d(h,_){var p=_.from,w=_.to,C=_.l,_=_.r;kr(h,p,w),C&&d(h,C),_&&d(h,_)})(i,a)}function Do(i,a){var d=ss(a),h=d.next();if(h.done)return!1;for(var f=h.value,p=ss(i),w=p.next(f.from),C=w.value;!h.done&&!w.done;){if(Pe(C.from,f.to)<=0&&0<=Pe(C.to,f.from))return!0;Pe(f.from,C.from)<0?f=(h=d.next(C.from)).value:C=(w=p.next(f.from)).value}return!1}function ss(i){var a=oi(i)?null:{s:0,n:i};return{next:function(d){for(var h=0<arguments.length;a;)switch(a.s){case 0:if(a.s=1,h)for(;a.n.l&&Pe(d,a.n.from)<0;)a={up:a,n:a.n.l,s:1};else for(;a.n.l;)a={up:a,n:a.n.l,s:1};case 1:if(a.s=2,!h||Pe(d,a.n.to)<=0)return{value:a.n,done:!1};case 2:if(a.n.r){a.s=3,a={up:a,n:a.n.r,s:0};continue}case 3:a=a.up}return{done:!0}}}}function Oo(i){var a,d,h=(((a=i.r)===null||a===void 0?void 0:a.d)||0)-(((d=i.l)===null||d===void 0?void 0:d.d)||0),f=1<h?"r":h<-1?"l":"";f&&(a=f=="r"?"l":"r",d=s({},i),h=i[f],i.from=h.from,i.to=h.to,i[f]=h[f],d[f]=h[a],(i[a]=d).d=jo(d)),i.d=jo(i)}function jo(d){var a=d.r,d=d.l;return(a?d?Math.max(a.d,d.d):a.d:d?d.d:0)+1}function is(i,a){return l(a).forEach(function(d){i[d]?Cr(i[d],a[d]):i[d]=(function h(f){var p,w,C={};for(p in f)b(f,p)&&(w=f[p],C[p]=!w||typeof w!="object"||g.has(w.constructor)?w:h(w));return C})(a[d])}),i}function ai(i,a){return i.all||a.all||Object.keys(i).some(function(d){return a[d]&&Do(a[d],i[d])})}k(wt.prototype,((Nt={add:function(i){return Cr(this,i),this},addKey:function(i){return kr(this,i,i),this},addKeys:function(i){var a=this;return i.forEach(function(d){return kr(a,d,d)}),this},hasKey:function(i){var a=ss(this).next(i).value;return a&&Pe(a.from,i)<=0&&0<=Pe(a.to,i)}})[ne]=function(){return ss(this)},Nt));var Bn={},li={},ci=!1;function os(i){is(li,i),ci||(ci=!0,setTimeout(function(){ci=!1,di(li,!(li={}))},0))}function di(i,a){a===void 0&&(a=!1);var d=new Set;if(i.all)for(var h=0,f=Object.values(Bn);h<f.length;h++)zo(w=f[h],i,d,a);else for(var p in i){var w,C=/^idb\:\/\/(.*)\/(.*)\//.exec(p);C&&(p=C[1],C=C[2],(w=Bn["idb://".concat(p,"/").concat(C)])&&zo(w,i,d,a))}d.forEach(function(_){return _()})}function zo(i,a,d,h){for(var f=[],p=0,w=Object.entries(i.queries.query);p<w.length;p++){for(var C=w[p],_=C[0],P=[],D=0,E=C[1];D<E.length;D++){var j=E[D];ai(a,j.obsSet)?j.subscribers.forEach(function(I){return d.add(I)}):h&&P.push(j)}h&&f.push([_,P])}if(h)for(var T=0,R=f;T<R.length;T++){var O=R[T],_=O[0],P=O[1];i.queries.query[_]=P}}function Ic(i){var a=i._state,d=i._deps.indexedDB;if(a.isBeingOpened||i.idbdb)return a.dbReadyPromise.then(function(){return a.dbOpenError?at(a.dbOpenError):i});a.isBeingOpened=!0,a.dbOpenError=null,a.openComplete=!1;var h=a.openCanceller,f=Math.round(10*i.verno),p=!1;function w(){if(a.openCanceller!==h)throw new ae.DatabaseClosed("db.open() was cancelled")}function C(){return new te(function(j,T){if(w(),!d)throw new ae.MissingAPI;var R=i.name,O=a.autoSchema||!f?d.open(R):d.open(R,f);if(!O)throw new ae.MissingAPI;O.onerror=ln(T),O.onblocked=He(i._fireOnBlocked),O.onupgradeneeded=He(function(I){var M;D=O.transaction,a.autoSchema&&!i._options.allowEmptyDB?(O.onerror=wr,D.abort(),O.result.close(),(M=d.deleteDatabase(R)).onsuccess=M.onerror=He(function(){T(new ae.NoSuchDatabase("Database ".concat(R," doesnt exist")))})):(D.onerror=ln(T),I=I.oldVersion>Math.pow(2,62)?0:I.oldVersion,E=I<1,i.idbdb=O.result,p&&Ac(i,D),Tc(i,I/10,D,T))},T),O.onsuccess=He(function(){D=null;var I,M,N,U,W,Y=i.idbdb=O.result,se=he(Y.objectStoreNames);if(0<se.length)try{var X=Y.transaction((U=se).length===1?U[0]:U,"readonly");if(a.autoSchema)M=Y,N=X,(I=i).verno=M.version/10,N=I._dbSchema=ts(0,M,N),I._storeNames=he(M.objectStoreNames,0),Zr(I,[I._allTables],l(N),N);else if(ns(i,i._dbSchema,X),((W=ti(ts(0,(W=i).idbdb,X),W._dbSchema)).add.length||W.change.some(function(Z){return Z.add.length||Z.change.length}))&&!p)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),Y.close(),f=Y.version+1,p=!0,j(C());Jr(i,X)}catch{}Zn.push(i),Y.onversionchange=He(function(Z){a.vcFired=!0,i.on("versionchange").fire(Z)}),Y.onclose=He(function(Z){i.on("close").fire(Z)}),E&&(W=i._deps,X=R,Y=W.indexedDB,W=W.IDBKeyRange,si(Y)||X===Vr||ri(Y,W).put({name:X}).catch(ye)),j()},T)}).catch(function(j){switch(j?.name){case"UnknownError":if(0<a.PR1398_maxLoop)return a.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),C();break;case"VersionError":if(0<f)return f=0,C()}return te.reject(j)})}var _,P=a.dbReadyResolve,D=null,E=!1;return te.race([h,(typeof navigator>"u"?te.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(j){function T(){return indexedDB.databases().finally(j)}_=setInterval(T,100),T()}).finally(function(){return clearInterval(_)}):Promise.resolve()).then(C)]).then(function(){return w(),a.onReadyBeingFired=[],te.resolve(ii(function(){return i.on.ready.fire(i.vip)})).then(function j(){if(0<a.onReadyBeingFired.length){var T=a.onReadyBeingFired.reduce(It,ye);return a.onReadyBeingFired=[],te.resolve(ii(function(){return T(i.vip)})).then(j)}})}).finally(function(){a.openCanceller===h&&(a.onReadyBeingFired=null,a.isBeingOpened=!1)}).catch(function(j){a.dbOpenError=j;try{D&&D.abort()}catch{}return h===a.openCanceller&&i._close(),at(j)}).finally(function(){a.openComplete=!0,P()}).then(function(){var j;return E&&(j={},i.tables.forEach(function(T){T.schema.indexes.forEach(function(R){R.name&&(j["idb://".concat(i.name,"/").concat(T.name,"/").concat(R.name)]=new wt(-1/0,[[[]]]))}),j["idb://".concat(i.name,"/").concat(T.name,"/")]=j["idb://".concat(i.name,"/").concat(T.name,"/:dels")]=new wt(-1/0,[[[]]])}),_n(vr).fire(j),di(j,!0)),i})}function ui(i){function a(p){return i.next(p)}var d=f(a),h=f(function(p){return i.throw(p)});function f(p){return function(_){var C=p(_),_=C.value;return C.done?_:_&&typeof _.then=="function"?_.then(d,h):c(_)?Promise.all(_).then(d,h):d(_)}}return f(a)()}function as(i,a,d){for(var h=c(i)?i.slice():[i],f=0;f<d;++f)h.push(a);return h}var Rc={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(i){return s(s({},i),{table:function(a){var d=i.table(a),h=d.schema,f={},p=[];function w(E,j,T){var R=$r(E),O=f[R]=f[R]||[],I=E==null?0:typeof E=="string"?1:E.length,M=0<j,M=s(s({},T),{name:M?"".concat(R,"(virtual-from:").concat(T.name,")"):T.name,lowLevelIndex:T,isVirtual:M,keyTail:j,keyLength:I,extractKey:Zs(E),unique:!M&&T.unique});return O.push(M),M.isPrimaryKey||p.push(M),1<I&&w(I===2?E[0]:E.slice(0,I-1),j+1,T),O.sort(function(N,U){return N.keyTail-U.keyTail}),M}a=w(h.primaryKey.keyPath,0,h.primaryKey),f[":id"]=[a];for(var C=0,_=h.indexes;C<_.length;C++){var P=_[C];w(P.keyPath,0,P)}function D(E){var j,T=E.query.index;return T.isVirtual?s(s({},E),{query:{index:T.lowLevelIndex,range:(j=E.query.range,T=T.keyTail,{type:j.type===1?2:j.type,lower:as(j.lower,j.lowerOpen?i.MAX_KEY:i.MIN_KEY,T),lowerOpen:!0,upper:as(j.upper,j.upperOpen?i.MIN_KEY:i.MAX_KEY,T),upperOpen:!0})}}):E}return s(s({},d),{schema:s(s({},h),{primaryKey:a,indexes:p,getIndexByKeyPath:function(E){return(E=f[$r(E)])&&E[0]}}),count:function(E){return d.count(D(E))},query:function(E){return d.query(D(E))},openCursor:function(E){var j=E.query.index,T=j.keyTail,R=j.isVirtual,O=j.keyLength;return R?d.openCursor(D(E)).then(function(M){return M&&I(M)}):d.openCursor(E);function I(M){return Object.create(M,{continue:{value:function(N){N!=null?M.continue(as(N,E.reverse?i.MAX_KEY:i.MIN_KEY,T)):E.unique?M.continue(M.key.slice(0,O).concat(E.reverse?i.MIN_KEY:i.MAX_KEY,T)):M.continue()}},continuePrimaryKey:{value:function(N,U){M.continuePrimaryKey(as(N,i.MAX_KEY,T),U)}},primaryKey:{get:function(){return M.primaryKey}},key:{get:function(){var N=M.key;return O===1?N[0]:N.slice(0,O)}},value:{get:function(){return M.value}}})}}})}})}};function hi(i,a,d,h){return d=d||{},h=h||"",l(i).forEach(function(f){var p,w,C;b(a,f)?(p=i[f],w=a[f],typeof p=="object"&&typeof w=="object"&&p&&w?(C=x(p))!==x(w)?d[h+f]=a[f]:C==="Object"?hi(p,w,d,h+f+"."):p!==w&&(d[h+f]=a[f]):p!==w&&(d[h+f]=a[f])):d[h+f]=void 0}),l(a).forEach(function(f){b(i,f)||(d[h+f]=a[f])}),d}function fi(i,a){return a.type==="delete"?a.keys:a.keys||a.values.map(i.extractKey)}var Dc={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(i){return s(s({},i),{table:function(a){var d=i.table(a),h=d.schema.primaryKey;return s(s({},d),{mutate:function(f){var p=ee.trans,w=p.table(a).hook,C=w.deleting,_=w.creating,P=w.updating;switch(f.type){case"add":if(_.fire===ye)break;return p._promise("readwrite",function(){return D(f)},!0);case"put":if(_.fire===ye&&P.fire===ye)break;return p._promise("readwrite",function(){return D(f)},!0);case"delete":if(C.fire===ye)break;return p._promise("readwrite",function(){return D(f)},!0);case"deleteRange":if(C.fire===ye)break;return p._promise("readwrite",function(){return(function E(j,T,R){return d.query({trans:j,values:!1,query:{index:h,range:T},limit:R}).then(function(O){var I=O.result;return D({type:"delete",keys:I,trans:j}).then(function(M){return 0<M.numFailures?Promise.reject(M.failures[0]):I.length<R?{failures:[],numFailures:0,lastResult:void 0}:E(j,s(s({},T),{lower:I[I.length-1],lowerOpen:!0}),R)})})})(f.trans,f.range,1e4)},!0)}return d.mutate(f);function D(E){var j,T,R,O=ee.trans,I=E.keys||fi(h,E);if(!I)throw new Error("Keys missing");return(E=E.type==="add"||E.type==="put"?s(s({},E),{keys:I}):s({},E)).type!=="delete"&&(E.values=n([],E.values)),E.keys&&(E.keys=n([],E.keys)),j=d,R=I,((T=E).type==="add"?Promise.resolve([]):j.getMany({trans:T.trans,keys:R,cache:"immutable"})).then(function(M){var N=I.map(function(U,W){var Y,se,X,Z=M[W],le={onerror:null,onsuccess:null};return E.type==="delete"?C.fire.call(le,U,Z,O):E.type==="add"||Z===void 0?(Y=_.fire.call(le,U,E.values[W],O),U==null&&Y!=null&&(E.keys[W]=U=Y,h.outbound||ue(E.values[W],h.keyPath,U))):(Y=hi(Z,E.values[W]),(se=P.fire.call(le,Y,U,Z,O))&&(X=E.values[W],Object.keys(se).forEach(function(re){b(X,re)?X[re]=se[re]:ue(X,re,se[re])}))),le});return d.mutate(E).then(function(U){for(var W=U.failures,Y=U.results,se=U.numFailures,U=U.lastResult,X=0;X<I.length;++X){var Z=(Y||I)[X],le=N[X];Z==null?le.onerror&&le.onerror(W[X]):le.onsuccess&&le.onsuccess(E.type==="put"&&M[X]?E.values[X]:Z)}return{failures:W,results:Y,numFailures:se,lastResult:U}}).catch(function(U){return N.forEach(function(W){return W.onerror&&W.onerror(U)}),Promise.reject(U)})})}}})}})}};function Fo(i,a,d){try{if(!a||a.keys.length<i.length)return null;for(var h=[],f=0,p=0;f<a.keys.length&&p<i.length;++f)Pe(a.keys[f],i[p])===0&&(h.push(d?S(a.values[f]):a.values[f]),++p);return h.length===i.length?h:null}catch{return null}}var Oc={stack:"dbcore",level:-1,create:function(i){return{table:function(a){var d=i.table(a);return s(s({},d),{getMany:function(h){if(!h.cache)return d.getMany(h);var f=Fo(h.keys,h.trans._cache,h.cache==="clone");return f?te.resolve(f):d.getMany(h).then(function(p){return h.trans._cache={keys:h.keys,values:h.cache==="clone"?S(p):p},p})},mutate:function(h){return h.type!=="add"&&(h.trans._cache=null),d.mutate(h)}})}}}};function Lo(i,a){return i.trans.mode==="readonly"&&!!i.subscr&&!i.trans.explicit&&i.trans.db._options.cache!=="disabled"&&!a.schema.primaryKey.outbound}function Mo(i,a){switch(i){case"query":return a.values&&!a.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var jc={stack:"dbcore",level:0,name:"Observability",create:function(i){var a=i.schema.name,d=new wt(i.MIN_KEY,i.MAX_KEY);return s(s({},i),{transaction:function(h,f,p){if(ee.subscr&&f!=="readonly")throw new ae.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ee.querier));return i.transaction(h,f,p)},table:function(h){var f=i.table(h),p=f.schema,w=p.primaryKey,E=p.indexes,C=w.extractKey,_=w.outbound,P=w.autoIncrement&&E.filter(function(T){return T.compound&&T.keyPath.includes(w.keyPath)}),D=s(s({},f),{mutate:function(T){function R(re){return re="idb://".concat(a,"/").concat(h,"/").concat(re),U[re]||(U[re]=new wt)}var O,I,M,N=T.trans,U=T.mutatedParts||(T.mutatedParts={}),W=R(""),Y=R(":dels"),se=T.type,le=T.type==="deleteRange"?[T.range]:T.type==="delete"?[T.keys]:T.values.length<50?[fi(w,T).filter(function(re){return re}),T.values]:[],X=le[0],Z=le[1],le=T.trans._cache;return c(X)?(W.addKeys(X),(le=se==="delete"||X.length===Z.length?Fo(X,le):null)||Y.addKeys(X),(le||Z)&&(O=R,I=le,M=Z,p.indexes.forEach(function(re){var de=O(re.name||"");function xe(Ee){return Ee!=null?re.extractKey(Ee):null}function Ce(Ee){return re.multiEntry&&c(Ee)?Ee.forEach(function(Ot){return de.addKey(Ot)}):de.addKey(Ee)}(I||M).forEach(function(Ee,vt){var ve=I&&xe(I[vt]),vt=M&&xe(M[vt]);Pe(ve,vt)!==0&&(ve!=null&&Ce(ve),vt!=null&&Ce(vt))})}))):X?(Z={from:(Z=X.lower)!==null&&Z!==void 0?Z:i.MIN_KEY,to:(Z=X.upper)!==null&&Z!==void 0?Z:i.MAX_KEY},Y.add(Z),W.add(Z)):(W.add(d),Y.add(d),p.indexes.forEach(function(re){return R(re.name).add(d)})),f.mutate(T).then(function(re){return!X||T.type!=="add"&&T.type!=="put"||(W.addKeys(re.results),P&&P.forEach(function(de){for(var xe=T.values.map(function(ve){return de.extractKey(ve)}),Ce=de.keyPath.findIndex(function(ve){return ve===w.keyPath}),Ee=0,Ot=re.results.length;Ee<Ot;++Ee)xe[Ee][Ce]=re.results[Ee];R(de.name).addKeys(xe)})),N.mutatedParts=is(N.mutatedParts||{},U),re})}}),E=function(R){var O=R.query,R=O.index,O=O.range;return[R,new wt((R=O.lower)!==null&&R!==void 0?R:i.MIN_KEY,(O=O.upper)!==null&&O!==void 0?O:i.MAX_KEY)]},j={get:function(T){return[w,new wt(T.key)]},getMany:function(T){return[w,new wt().addKeys(T.keys)]},count:E,query:E,openCursor:E};return l(j).forEach(function(T){D[T]=function(R){var O=ee.subscr,I=!!O,M=Lo(ee,f)&&Mo(T,R)?R.obsSet={}:O;if(I){var N=function(Z){return Z="idb://".concat(a,"/").concat(h,"/").concat(Z),M[Z]||(M[Z]=new wt)},U=N(""),W=N(":dels"),O=j[T](R),I=O[0],O=O[1];if((T==="query"&&I.isPrimaryKey&&!R.values?W:N(I.name||"")).add(O),!I.isPrimaryKey){if(T!=="count"){var Y=T==="query"&&_&&R.values&&f.query(s(s({},R),{values:!1}));return f[T].apply(this,arguments).then(function(Z){if(T==="query"){if(_&&R.values)return Y.then(function(xe){return xe=xe.result,U.addKeys(xe),Z});var le=R.values?Z.result.map(C):Z.result;(R.values?U:W).addKeys(le)}else if(T==="openCursor"){var re=Z,de=R.values;return re&&Object.create(re,{key:{get:function(){return W.addKey(re.primaryKey),re.key}},primaryKey:{get:function(){var xe=re.primaryKey;return W.addKey(xe),xe}},value:{get:function(){return de&&U.addKey(re.primaryKey),re.value}}})}return Z})}W.add(d)}}return f[T].apply(this,arguments)}}),D}})}};function Bo(i,a,d){if(d.numFailures===0)return a;if(a.type==="deleteRange")return null;var h=a.keys?a.keys.length:"values"in a&&a.values?a.values.length:1;return d.numFailures===h?null:(a=s({},a),c(a.keys)&&(a.keys=a.keys.filter(function(f,p){return!(p in d.failures)})),"values"in a&&c(a.values)&&(a.values=a.values.filter(function(f,p){return!(p in d.failures)})),a)}function pi(i,a){return d=i,((h=a).lower===void 0||(h.lowerOpen?0<Pe(d,h.lower):0<=Pe(d,h.lower)))&&(i=i,(a=a).upper===void 0||(a.upperOpen?Pe(i,a.upper)<0:Pe(i,a.upper)<=0));var d,h}function No(i,a,j,h,f,p){if(!j||j.length===0)return i;var w=a.query.index,C=w.multiEntry,_=a.query.range,P=h.schema.primaryKey.extractKey,D=w.extractKey,E=(w.lowLevelIndex||w).extractKey,j=j.reduce(function(T,R){var O=T,I=[];if(R.type==="add"||R.type==="put")for(var M=new wt,N=R.values.length-1;0<=N;--N){var U,W=R.values[N],Y=P(W);M.hasKey(Y)||(U=D(W),(C&&c(U)?U.some(function(re){return pi(re,_)}):pi(U,_))&&(M.addKey(Y),I.push(W)))}switch(R.type){case"add":var se=new wt().addKeys(a.values?T.map(function(de){return P(de)}):T),O=T.concat(a.values?I.filter(function(de){return de=P(de),!se.hasKey(de)&&(se.addKey(de),!0)}):I.map(function(de){return P(de)}).filter(function(de){return!se.hasKey(de)&&(se.addKey(de),!0)}));break;case"put":var X=new wt().addKeys(R.values.map(function(de){return P(de)}));O=T.filter(function(de){return!X.hasKey(a.values?P(de):de)}).concat(a.values?I:I.map(function(de){return P(de)}));break;case"delete":var Z=new wt().addKeys(R.keys);O=T.filter(function(de){return!Z.hasKey(a.values?P(de):de)});break;case"deleteRange":var le=R.range;O=T.filter(function(de){return!pi(P(de),le)})}return O},i);return j===i?i:(j.sort(function(T,R){return Pe(E(T),E(R))||Pe(P(T),P(R))}),a.limit&&a.limit<1/0&&(j.length>a.limit?j.length=a.limit:i.length===a.limit&&j.length<a.limit&&(f.dirty=!0)),p?Object.freeze(j):j)}function Uo(i,a){return Pe(i.lower,a.lower)===0&&Pe(i.upper,a.upper)===0&&!!i.lowerOpen==!!a.lowerOpen&&!!i.upperOpen==!!a.upperOpen}function zc(i,a){return(function(d,h,f,p){if(d===void 0)return h!==void 0?-1:0;if(h===void 0)return 1;if((h=Pe(d,h))===0){if(f&&p)return 0;if(f)return 1;if(p)return-1}return h})(i.lower,a.lower,i.lowerOpen,a.lowerOpen)<=0&&0<=(function(d,h,f,p){if(d===void 0)return h!==void 0?1:0;if(h===void 0)return-1;if((h=Pe(d,h))===0){if(f&&p)return 0;if(f)return-1;if(p)return 1}return h})(i.upper,a.upper,i.upperOpen,a.upperOpen)}function Fc(i,a,d,h){i.subscribers.add(d),h.addEventListener("abort",function(){var f,p;i.subscribers.delete(d),i.subscribers.size===0&&(f=i,p=a,setTimeout(function(){f.subscribers.size===0&&K(p,f)},3e3))})}var Lc={stack:"dbcore",level:0,name:"Cache",create:function(i){var a=i.schema.name;return s(s({},i),{transaction:function(d,h,f){var p,w,C=i.transaction(d,h,f);return h==="readwrite"&&(w=(p=new AbortController).signal,f=function(_){return function(){if(p.abort(),h==="readwrite"){for(var P=new Set,D=0,E=d;D<E.length;D++){var j=E[D],T=Bn["idb://".concat(a,"/").concat(j)];if(T){var R=i.table(j),O=T.optimisticOps.filter(function(de){return de.trans===C});if(C._explicit&&_&&C.mutatedParts)for(var I=0,M=Object.values(T.queries.query);I<M.length;I++)for(var N=0,U=(se=M[I]).slice();N<U.length;N++)ai((X=U[N]).obsSet,C.mutatedParts)&&(K(se,X),X.subscribers.forEach(function(de){return P.add(de)}));else if(0<O.length){T.optimisticOps=T.optimisticOps.filter(function(de){return de.trans!==C});for(var W=0,Y=Object.values(T.queries.query);W<Y.length;W++)for(var se,X,Z,le=0,re=(se=Y[W]).slice();le<re.length;le++)(X=re[le]).res!=null&&C.mutatedParts&&(_&&!X.dirty?(Z=Object.isFrozen(X.res),Z=No(X.res,X.req,O,R,X,Z),X.dirty?(K(se,X),X.subscribers.forEach(function(de){return P.add(de)})):Z!==X.res&&(X.res=Z,X.promise=te.resolve({result:Z}))):(X.dirty&&K(se,X),X.subscribers.forEach(function(de){return P.add(de)})))}}}P.forEach(function(de){return de()})}}},C.addEventListener("abort",f(!1),{signal:w}),C.addEventListener("error",f(!1),{signal:w}),C.addEventListener("complete",f(!0),{signal:w})),C},table:function(d){var h=i.table(d),f=h.schema.primaryKey;return s(s({},h),{mutate:function(p){var w=ee.trans;if(f.outbound||w.db._options.cache==="disabled"||w.explicit||w.idbtrans.mode!=="readwrite")return h.mutate(p);var C=Bn["idb://".concat(a,"/").concat(d)];return C?(w=h.mutate(p),p.type!=="add"&&p.type!=="put"||!(50<=p.values.length||fi(f,p).some(function(_){return _==null}))?(C.optimisticOps.push(p),p.mutatedParts&&os(p.mutatedParts),w.then(function(_){0<_.numFailures&&(K(C.optimisticOps,p),(_=Bo(0,p,_))&&C.optimisticOps.push(_),p.mutatedParts&&os(p.mutatedParts))}),w.catch(function(){K(C.optimisticOps,p),p.mutatedParts&&os(p.mutatedParts)})):w.then(function(_){var P=Bo(0,s(s({},p),{values:p.values.map(function(D,E){var j;return _.failures[E]?D:(D=(j=f.keyPath)!==null&&j!==void 0&&j.includes(".")?S(D):s({},D),ue(D,f.keyPath,_.results[E]),D)})}),_);C.optimisticOps.push(P),queueMicrotask(function(){return p.mutatedParts&&os(p.mutatedParts)})}),w):h.mutate(p)},query:function(p){if(!Lo(ee,h)||!Mo("query",p))return h.query(p);var w=((P=ee.trans)===null||P===void 0?void 0:P.db._options.cache)==="immutable",E=ee,C=E.requery,_=E.signal,P=(function(R,O,I,M){var N=Bn["idb://".concat(R,"/").concat(O)];if(!N)return[];if(!(O=N.queries[I]))return[null,!1,N,null];var U=O[(M.query?M.query.index.name:null)||""];if(!U)return[null,!1,N,null];switch(I){case"query":var W=U.find(function(Y){return Y.req.limit===M.limit&&Y.req.values===M.values&&Uo(Y.req.query.range,M.query.range)});return W?[W,!0,N,U]:[U.find(function(Y){return("limit"in Y.req?Y.req.limit:1/0)>=M.limit&&(!M.values||Y.req.values)&&zc(Y.req.query.range,M.query.range)}),!1,N,U];case"count":return W=U.find(function(Y){return Uo(Y.req.query.range,M.query.range)}),[W,!!W,N,U]}})(a,d,"query",p),D=P[0],E=P[1],j=P[2],T=P[3];return D&&E?D.obsSet=p.obsSet:(E=h.query(p).then(function(R){var O=R.result;if(D&&(D.res=O),w){for(var I=0,M=O.length;I<M;++I)Object.freeze(O[I]);Object.freeze(O)}else R.result=S(O);return R}).catch(function(R){return T&&D&&K(T,D),Promise.reject(R)}),D={obsSet:p.obsSet,promise:E,subscribers:new Set,type:"query",req:p,dirty:!1},T?T.push(D):(T=[D],(j=j||(Bn["idb://".concat(a,"/").concat(d)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[p.query.index.name||""]=T)),Fc(D,T,C,_),D.promise.then(function(R){return{result:No(R.result,p,j?.optimisticOps,h,D,w)}})}})}})}};function ls(i,a){return new Proxy(i,{get:function(d,h,f){return h==="db"?a:Reflect.get(d,h,f)}})}var bn=(lt.prototype.version=function(i){if(isNaN(i)||i<.1)throw new ae.Type("Given version is not a positive number");if(i=Math.round(10*i)/10,this.idbdb||this._state.isBeingOpened)throw new ae.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,i);var a=this._versions,d=a.filter(function(h){return h._cfg.version===i})[0];return d||(d=new this.Version(i),a.push(d),a.sort(_c),d.stores({}),this._state.autoSchema=!1,d)},lt.prototype._whenReady=function(i){var a=this;return this.idbdb&&(this._state.openComplete||ee.letThrough||this._vip)?i():new te(function(d,h){if(a._state.openComplete)return h(new ae.DatabaseClosed(a._state.dbOpenError));if(!a._state.isBeingOpened){if(!a._state.autoOpen)return void h(new ae.DatabaseClosed);a.open().catch(ye)}a._state.dbReadyPromise.then(d,h)}).then(i)},lt.prototype.use=function(i){var a=i.stack,d=i.create,h=i.level,f=i.name;return f&&this.unuse({stack:a,name:f}),i=this._middlewares[a]||(this._middlewares[a]=[]),i.push({stack:a,create:d,level:h??10,name:f}),i.sort(function(p,w){return p.level-w.level}),this},lt.prototype.unuse=function(i){var a=i.stack,d=i.name,h=i.create;return a&&this._middlewares[a]&&(this._middlewares[a]=this._middlewares[a].filter(function(f){return h?f.create!==h:!!d&&f.name!==d})),this},lt.prototype.open=function(){var i=this;return Fn(et,function(){return Ic(i)})},lt.prototype._close=function(){var i=this._state,a=Zn.indexOf(this);if(0<=a&&Zn.splice(a,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}i.isBeingOpened||(i.dbReadyPromise=new te(function(d){i.dbReadyResolve=d}),i.openCanceller=new te(function(d,h){i.cancelOpen=h}))},lt.prototype.close=function(d){var a=(d===void 0?{disableAutoOpen:!0}:d).disableAutoOpen,d=this._state;a?(d.isBeingOpened&&d.cancelOpen(new ae.DatabaseClosed),this._close(),d.autoOpen=!1,d.dbOpenError=new ae.DatabaseClosed):(this._close(),d.autoOpen=this._options.autoOpen||d.isBeingOpened,d.openComplete=!1,d.dbOpenError=null)},lt.prototype.delete=function(i){var a=this;i===void 0&&(i={disableAutoOpen:!0});var d=0<arguments.length&&typeof arguments[0]!="object",h=this._state;return new te(function(f,p){function w(){a.close(i);var C=a._deps.indexedDB.deleteDatabase(a.name);C.onsuccess=He(function(){var _,P,D;_=a._deps,P=a.name,D=_.indexedDB,_=_.IDBKeyRange,si(D)||P===Vr||ri(D,_).delete(P).catch(ye),f()}),C.onerror=ln(p),C.onblocked=a._fireOnBlocked}if(d)throw new ae.InvalidArgument("Invalid closeOptions argument to db.delete()");h.isBeingOpened?h.dbReadyPromise.then(w):w()})},lt.prototype.backendDB=function(){return this.idbdb},lt.prototype.isOpen=function(){return this.idbdb!==null},lt.prototype.hasBeenClosed=function(){var i=this._state.dbOpenError;return i&&i.name==="DatabaseClosed"},lt.prototype.hasFailed=function(){return this._state.dbOpenError!==null},lt.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(lt.prototype,"tables",{get:function(){var i=this;return l(this._allTables).map(function(a){return i._allTables[a]})},enumerable:!1,configurable:!0}),lt.prototype.transaction=function(){var i=function(a,d,h){var f=arguments.length;if(f<2)throw new ae.InvalidArgument("Too few arguments");for(var p=new Array(f-1);--f;)p[f-1]=arguments[f];return h=p.pop(),[a,Ie(p),h]}.apply(this,arguments);return this._transaction.apply(this,i)},lt.prototype._transaction=function(i,a,d){var h=this,f=ee.trans;f&&f.db===this&&i.indexOf("!")===-1||(f=null);var p,w,C=i.indexOf("?")!==-1;i=i.replace("!","").replace("?","");try{if(w=a.map(function(P){if(P=P instanceof h.Table?P.name:P,typeof P!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return P}),i=="r"||i===Ws)p=Ws;else{if(i!="rw"&&i!=Ks)throw new ae.InvalidArgument("Invalid transaction mode: "+i);p=Ks}if(f){if(f.mode===Ws&&p===Ks){if(!C)throw new ae.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");f=null}f&&w.forEach(function(P){if(f&&f.storeNames.indexOf(P)===-1){if(!C)throw new ae.SubTransaction("Table "+P+" not included in parent transaction.");f=null}}),C&&f&&!f.active&&(f=null)}}catch(P){return f?f._promise(null,function(D,E){E(P)}):at(P)}var _=function P(D,E,j,T,R){return te.resolve().then(function(){var O=ee.transless||ee,I=D._createTransaction(E,j,D._dbSchema,T);if(I.explicit=!0,O={trans:I,transless:O},T)I.idbtrans=T.idbtrans;else try{I.create(),I.idbtrans._explicit=!0,D._state.PR1398_maxLoop=3}catch(U){return U.name===Qe.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return P(D,E,j,null,R)})):at(U)}var M,N=ct(R);return N&&Jn(),O=te.follow(function(){var U;(M=R.call(I,I))&&(N?(U=Cn.bind(null,null),M.then(U,U)):typeof M.next=="function"&&typeof M.throw=="function"&&(M=ui(M)))},O),(M&&typeof M.then=="function"?te.resolve(M).then(function(U){return I.active?U:at(new ae.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):O.then(function(){return M})).then(function(U){return T&&I._resolve(),I._completion.then(function(){return U})}).catch(function(U){return I._reject(U),at(U)})})}.bind(null,this,p,w,f,d);return f?f._promise(p,_,"lock"):ee.trans?Fn(ee.transless,function(){return h._whenReady(_)}):this._whenReady(_)},lt.prototype.table=function(i){if(!b(this._allTables,i))throw new ae.InvalidTable("Table ".concat(i," does not exist"));return this._allTables[i]},lt);function lt(i,a){var d=this;this._middlewares={},this.verno=0;var h=lt.dependencies;this._options=a=s({addons:lt.addons,autoOpen:!0,indexedDB:h.indexedDB,IDBKeyRange:h.IDBKeyRange,cache:"cloned"},a),this._deps={indexedDB:a.indexedDB,IDBKeyRange:a.IDBKeyRange},h=a.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var f,p,w,C,_,P={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ye,dbReadyPromise:null,cancelOpen:ye,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:a.autoOpen};P.dbReadyPromise=new te(function(E){P.dbReadyResolve=E}),P.openCanceller=new te(function(E,j){P.cancelOpen=j}),this._state=P,this.name=i,this.on=gr(this,"populate","blocked","versionchange","close",{ready:[It,ye]}),this.on.ready.subscribe=ie(this.on.ready.subscribe,function(E){return function(j,T){lt.vip(function(){var R,O=d._state;O.openComplete?(O.dbOpenError||te.resolve().then(j),T&&E(j)):O.onReadyBeingFired?(O.onReadyBeingFired.push(j),T&&E(j)):(E(j),R=d,T||E(function I(){R.on.ready.unsubscribe(j),R.on.ready.unsubscribe(I)}))})}}),this.Collection=(f=this,br(vc.prototype,function(M,I){this.db=f;var T=wo,R=null;if(I)try{T=I()}catch(N){R=N}var O=M._ctx,I=O.table,M=I.hook.reading.fire;this._ctx={table:I,index:O.index,isPrimKey:!O.index||I.schema.primKey.keyPath&&O.index===I.schema.primKey.name,range:T,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:R,or:O.or,valueMapper:M!==ke?M:null}})),this.Table=(p=this,br(ko.prototype,function(E,j,T){this.db=p,this._tx=T,this.name=E,this.schema=j,this.hook=p._allTables[E]?p._allTables[E].hook:gr(null,{creating:[Ze,ye],reading:[Pt,ke],updating:[tn,ye],deleting:[xn,ye]})})),this.Transaction=(w=this,br(kc.prototype,function(E,j,T,R,O){var I=this;this.db=w,this.mode=E,this.storeNames=j,this.schema=T,this.chromeTransactionDurability=R,this.idbtrans=null,this.on=gr(this,"complete","error","abort"),this.parent=O||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new te(function(M,N){I._resolve=M,I._reject=N}),this._completion.then(function(){I.active=!1,I.on.complete.fire()},function(M){var N=I.active;return I.active=!1,I.on.error.fire(M),I.parent?I.parent._reject(M):N&&I.idbtrans&&I.idbtrans.abort(),at(M)})})),this.Version=(C=this,br(Pc.prototype,function(E){this.db=C,this._cfg={version:E,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(_=this,br(To.prototype,function(E,j,T){if(this.db=_,this._ctx={table:E,index:j===":id"?null:j,or:T},this._cmp=this._ascending=Pe,this._descending=function(R,O){return Pe(O,R)},this._max=function(R,O){return 0<Pe(R,O)?R:O},this._min=function(R,O){return Pe(R,O)<0?R:O},this._IDBKeyRange=_._deps.IDBKeyRange,!this._IDBKeyRange)throw new ae.MissingAPI})),this.on("versionchange",function(E){0<E.newVersion?console.warn("Another connection wants to upgrade database '".concat(d.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(d.name,"'. Closing db now to resume the delete request.")),d.close({disableAutoOpen:!1})}),this.on("blocked",function(E){!E.newVersion||E.newVersion<E.oldVersion?console.warn("Dexie.delete('".concat(d.name,"') was blocked")):console.warn("Upgrade '".concat(d.name,"' blocked by other connection holding version ").concat(E.oldVersion/10))}),this._maxKey=xr(a.IDBKeyRange),this._createTransaction=function(E,j,T,R){return new d.Transaction(E,j,T,d._options.chromeTransactionDurability,R)},this._fireOnBlocked=function(E){d.on("blocked").fire(E),Zn.filter(function(j){return j.name===d.name&&j!==d&&!j._state.vcFired}).map(function(j){return j.on("versionchange").fire(E)})},this.use(Oc),this.use(Lc),this.use(jc),this.use(Rc),this.use(Dc);var D=new Proxy(this,{get:function(E,j,T){if(j==="_vip")return!0;if(j==="table")return function(O){return ls(d.table(O),D)};var R=Reflect.get(E,j,T);return R instanceof ko?ls(R,D):j==="tables"?R.map(function(O){return ls(O,D)}):j==="_createTransaction"?function(){return ls(R.apply(this,arguments),D)}:R}});this.vip=D,h.forEach(function(E){return E(d)})}var cs,Nt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Mc=(mi.prototype.subscribe=function(i,a,d){return this._subscribe(i&&typeof i!="function"?i:{next:i,error:a,complete:d})},mi.prototype[Nt]=function(){return this},mi);function mi(i){this._subscribe=i}try{cs={indexedDB:o.indexedDB||o.mozIndexedDB||o.webkitIndexedDB||o.msIndexedDB,IDBKeyRange:o.IDBKeyRange||o.webkitIDBKeyRange}}catch{cs={indexedDB:null,IDBKeyRange:null}}function Ho(i){var a,d=!1,h=new Mc(function(f){var p=ct(i),w,C=!1,_={},P={},D={get closed(){return C},unsubscribe:function(){C||(C=!0,w&&w.abort(),E&&_n.storagemutated.unsubscribe(T))}};f.start&&f.start(D);var E=!1,j=function(){return qs(R)},T=function(O){is(_,O),ai(P,_)&&j()},R=function(){var O,I,M;!C&&cs.indexedDB&&(_={},O={},w&&w.abort(),w=new AbortController,M=(function(N){var U=Le();try{p&&Jn();var W=kn(i,N);return W=p?W.finally(Cn):W}finally{U&&Ge()}})(I={subscr:O,signal:w.signal,requery:j,querier:i,trans:null}),Promise.resolve(M).then(function(N){d=!0,a=N,C||I.signal.aborted||(_={},(function(U){for(var W in U)if(b(U,W))return;return 1})(P=O)||E||(_n(vr,T),E=!0),qs(function(){return!C&&f.next&&f.next(N)}))},function(N){d=!1,["DatabaseClosedError","AbortError"].includes(N?.name)||C||qs(function(){C||f.error&&f.error(N)})}))};return setTimeout(j,0),D});return h.hasValue=function(){return d},h.getValue=function(){return a},h}var Nn=bn;function gi(i){var a=Tn;try{Tn=!0,_n.storagemutated.fire(i),di(i,!0)}finally{Tn=a}}k(Nn,s(s({},Be),{delete:function(i){return new Nn(i,{addons:[]}).delete()},exists:function(i){return new Nn(i,{addons:[]}).open().then(function(a){return a.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(i){try{return a=Nn.dependencies,d=a.indexedDB,a=a.IDBKeyRange,(si(d)?Promise.resolve(d.databases()).then(function(h){return h.map(function(f){return f.name}).filter(function(f){return f!==Vr})}):ri(d,a).toCollection().primaryKeys()).then(i)}catch{return at(new ae.MissingAPI)}var a,d},defineClass:function(){return function(i){u(this,i)}},ignoreTransaction:function(i){return ee.trans?Fn(ee.transless,i):i()},vip:ii,async:function(i){return function(){try{var a=ui(i.apply(this,arguments));return a&&typeof a.then=="function"?a:te.resolve(a)}catch(d){return at(d)}}},spawn:function(i,a,d){try{var h=ui(i.apply(d,a||[]));return h&&typeof h.then=="function"?h:te.resolve(h)}catch(f){return at(f)}},currentTransaction:{get:function(){return ee.trans||null}},waitFor:function(i,a){return a=te.resolve(typeof i=="function"?Nn.ignoreTransaction(i):i).timeout(a||6e4),ee.trans?ee.trans.waitFor(a):a},Promise:te,debug:{get:function(){return Fe},set:function(i){Ke(i)}},derive:F,extend:u,props:k,override:ie,Events:gr,on:_n,liveQuery:Ho,extendObservabilitySet:is,getByKeyPath:J,setByKeyPath:ue,delByKeyPath:function(i,a){typeof a=="string"?ue(i,a,void 0):"length"in a&&[].map.call(a,function(d){ue(i,d,void 0)})},shallowClone:$e,deepClone:S,getObjectDiff:hi,cmp:Pe,asap:V,minKey:-1/0,addons:[],connections:Zn,errnames:Qe,dependencies:cs,cache:Bn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(i){return parseInt(i)}).reduce(function(i,a,d){return i+a/Math.pow(10,2*d)})})),Nn.maxKey=xr(Nn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(_n(vr,function(i){Tn||(i=new CustomEvent(Xs,{detail:i}),Tn=!0,dispatchEvent(i),Tn=!1)}),addEventListener(Xs,function(i){i=i.detail,Tn||gi(i)}));var nr,Tn=!1,qo=function(){};return typeof BroadcastChannel<"u"&&((qo=function(){(nr=new BroadcastChannel(Xs)).onmessage=function(i){return i.data&&gi(i.data)}})(),typeof nr.unref=="function"&&nr.unref(),_n(vr,function(i){Tn||nr.postMessage(i)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(i){if(!bn.disableBfCache&&i.persisted){Fe&&console.debug("Dexie: handling persisted pagehide"),nr?.close();for(var a=0,d=Zn;a<d.length;a++)d[a].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(i){!bn.disableBfCache&&i.persisted&&(Fe&&console.debug("Dexie: handling persisted pageshow"),qo(),gi({all:new wt(-1/0,[[]])}))})),te.rejectionMapper=function(i,a){return!i||i instanceof We||i instanceof TypeError||i instanceof SyntaxError||!i.name||!Je[i.name]?i:(a=new Je[i.name](a||i.message,i),"stack"in i&&L(a,"stack",{get:function(){return this.inner.stack}}),a)},Ke(Fe),s(bn,Object.freeze({__proto__:null,Dexie:bn,liveQuery:Ho,Entity:vo,cmp:Pe,PropModSymbol:gn,PropModification:yr,replacePrefix:function(i,a){return new yr({replacePrefix:[i,a]})},add:function(i){return new yr({add:i})},remove:function(i){return new yr({remove:i})},default:bn,RangeSet:wt,mergeRanges:Cr,rangesOverlap:Do}),{default:bn}),bn})})(bs)),bs.exports}var wd=yd();const Ii=gd(wd),sa=Symbol.for("Dexie"),xs=globalThis[sa]||(globalThis[sa]=Ii);if(Ii.semVer!==xs.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Ii.semVer} and ${xs.semVer}`);const{liveQuery:al,mergeRanges:Dg,rangesOverlap:Og,RangeSet:jg,cmp:zg,Entity:Fg,PropModSymbol:Lg,PropModification:Mg,replacePrefix:Bg,add:Ng,remove:Ug}=xs,vd="easydb";let us=null;function xd(){if(us)return us;const e=new xs(vd);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>$d()),us={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},us}function $d(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function rr(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const r=Object.entries(t);return e.filter(s=>ll(s,r)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,r){if(await e.update(t,r)===0)throw new Error(`patch: no doc with id=${t}`);const n=await e.get(t);if(!n)throw new Error(`patch: doc id=${t} vanished after update`);return n},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const s=al(()=>e.toArray()).subscribe({next:n=>t(n)});return()=>s.unsubscribe()}}}function kd(e,t){return{async find(r){const s=e.where("tableId").equals(t);if(!r||Object.keys(r).length===0)return s.toArray();const n=Object.entries(r);return s.filter(o=>ll(o,n)).toArray()},async findOne(r){const s=await e.get(r);return s&&s.tableId===t?s:null},async insert(r){const s={...r,tableId:t};return await e.add(s),s},async bulkInsert(r){if(r.length===0)return[];const s=r.map(n=>({...n,tableId:t}));return await e.bulkAdd(s),s},async upsert(r){const s={...r,tableId:t};return await e.put(s),s},async patch(r,s){if(await e.update(r,s)===0)throw new Error(`row patch: no row ${r}`);const o=await e.get(r);if(!o)throw new Error(`row patch: row ${r} vanished after update`);return o},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},subscribe(r){const n=al(()=>e.where("tableId").equals(t).toArray()).subscribe({next:o=>r(o)});return()=>n.unsubscribe()}}}function ll(e,t){for(const[r,s]of t)if(e[r]!==s)return!1;return!0}function Cd(e){return{workspaces:rr(e.workspaces),tables:rr(e.tables),settings:rr(e.settings),plugins:rr(e.plugins),viewTemplates:rr(e.viewTemplates),viewInstances:rr(e.viewInstances),rows:t=>kd(e.rows,t)}}function Ed(e){const{base:t,providers:r,tableById:s,ctx:n}=e,o=new Map;return{...t,rows(l){const c=s(l),u=c?.source;if(u){const m=r.get(u.type);if(m){const $=JSON.stringify(u),b=o.get(l);if(b&&b.key===$)return b.coll;const k=m.create(c,n);return o.set(l,{key:$,coll:k}),k}}return o.delete(l),t.rows(l)}}}function Sd(){const e=new Map;return{on(t,r){let s=e.get(t);return s||(s=new Set,e.set(t,s)),s.add(r),()=>{s.delete(r)}},emit(t,r){const s=e.get(t);if(s)for(const n of s)try{n(r)}catch(o){console.error(`[event:${String(t)}] listener threw`,o)}}}}const Gt=qe`
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
`;function Yt(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const r=t.querySelector("form");r&&(e.preventDefault(),r.requestSubmit())}const ia=new WeakSet;function Xt(e,t){if(ia.has(t))return;ia.add(t);let r=0,s=0,n=0,o=0,l=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",u=>{if(u.target.closest("button, input, textarea, select, a, label"))return;l=!0,r=u.clientX,s=u.clientY;const $=e.getBoundingClientRect();n=$.left,o=$.top,t.setPointerCapture(u.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",u=>{if(!l)return;const m=u.clientX-r,$=u.clientY-s,b=-e.offsetWidth+80,k=window.innerWidth-80,B=0,L=window.innerHeight-40,F=Math.max(b,Math.min(k,n+m)),H=Math.max(B,Math.min(L,o+$));e.style.position="fixed",e.style.left=`${F}px`,e.style.top=`${H}px`,e.style.margin="0"});const c=u=>{if(l){l=!1;try{t.releasePointerCapture(u.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c)}var _d=Object.defineProperty,Td=Object.getOwnPropertyDescriptor,cl=(e,t,r,s)=>{for(var n=s>1?void 0:s?Td(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&_d(t,r,n),n};let Ht=class extends Ne{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),Ht.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ht.instance===this&&(Ht.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&Xt(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:t,message:e,resolve:r}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",r="Input"){return this.enqueue(s=>{this.current={kind:"prompt",title:r,message:e,value:t,resolve:s}})}choice(e,t,r="Choose"){return this.enqueue(s=>{this.current={kind:"choice",title:r,message:e,options:t,resolve:s}})}enqueue(e){return new Promise(t=>{const r=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const r=this.queue.shift();r&&r()}))}render(){const e=this.current;return A`
      <dialog @cancel=${this.onCancel} @keydown=${Yt}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):me}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return A`
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
        `;case"prompt":return A`
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
        `;case"choice":return A`
          <div class="dialog-header">
            <h2>${e.title}</h2>
            <div class="header-actions">
              <button class="ghost" @click=${()=>this.closeAndResolve(null)}>Cancel</button>
            </div>
          </div>
          <div class="dialog-body">
            ${e.message?A`<p class="message">${e.message}</p>`:me}
            <div class="choices">
              ${e.options.map(t=>A`<button class="choice" @click=${()=>this.closeAndResolve(t)}>
                    ${t}
                  </button>`)}
            </div>
          </div>
        `}}};Ht.instance=null;Ht.styles=[Gt,qe`
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
    `];cl([q()],Ht.prototype,"current",2);Ht=cl([tt("host-dialogs")],Ht);const Qt=qe`
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
`;var Ad=Object.defineProperty,Pd=Object.getOwnPropertyDescriptor,dl=(e,t,r,s)=>{for(var n=s>1?void 0:s?Pd(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&Ad(t,r,n),n};let wn=class extends Ne{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),wn.instance=this}disconnectedCallback(){super.disconnectedCallback(),wn.instance===this&&(wn.instance=null)}show(e,t){const r={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,r];const s=t?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),s)}dismiss(e){const t=this.toasts.find(r=>r.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(r=>r.id!==e)}render(){return A`
      ${this.toasts.map(e=>A`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${Rd(e.kind)}</span>
            <span class="body">
              ${e.title?A`<strong>${e.title}</strong>`:""}${Id(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};wn.instance=null;wn.styles=[Qt,qe`
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
    `];dl([q()],wn.prototype,"toasts",2);wn=dl([tt("toast-host")],wn);function Id(e){const t=/(https?:\/\/[^\s)]+)/g,r=[];let s=0,n;for(;(n=t.exec(e))!==null;)n.index>s&&r.push(e.slice(s,n.index)),r.push({url:n[0]}),s=n.index+n[0].length;return s<e.length&&r.push(e.slice(s)),r.length===0?e:r.map(o=>typeof o=="string"?o:A`<a href=${o.url} target="_blank" rel="noopener noreferrer">${o.url}</a>`)}function Rd(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function Dd(){return{headerButtons:[],footerButtons:[],tableButtons:[],importers:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map,settings:new Map,commands:[]}}function An(e,t){return e.push(t),()=>{const r=e.indexOf(t);r>=0&&e.splice(r,1)}}function wi(e,t,r){return e.set(t,r),()=>{e.get(t)===r&&e.delete(t)}}function Od(e){return{registerHeaderButton:t=>An(e.headerButtons,t),registerFooterButton:t=>An(e.footerButtons,t),registerTableButton:t=>An(e.tableButtons,t),registerImporter:t=>An(e.importers,t),registerExporter:t=>An(e.exporters,t),registerUrlSource:t=>An(e.urlSources,t),registerDropHandler:t=>An(e.dropHandlers,t),registerCellRenderer:(t,r)=>wi(e.cellRenderers,t,r),registerRowRenderer:(t,r)=>wi(e.rowRenderers,t,r),registerTableRenderer:(t,r)=>wi(e.tableRenderers,t,r),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},openSettings:()=>{document.dispatchEvent(new CustomEvent("easydb:open-settings"))},registerCommand:t=>An(e.commands,t),openCommandPalette:()=>{document.dispatchEvent(new CustomEvent("easydb:open-command-palette"))},registerSettings:(t,r,s)=>(e.settings.set(t,{name:r,fields:s}),()=>{e.settings.get(t)?.name===r&&e.settings.delete(t)}),dialogs:jd}}const jd={async alert(e,t){const r=Ht.instance;if(r)return r.alert(e,t);window.alert(e)},async confirm(e,t){const r=Ht.instance;return r?r.confirm(e,t):window.confirm(e)},async prompt(e,t,r){const s=Ht.instance;return s?s.prompt(e,t,r):window.prompt(e,t)??null},async choice(e,t,r){const s=Ht.instance;if(s)return s.choice(e,t,r);const n=window.prompt(`${e}

Options: ${t.join(", ")}`);return n&&t.includes(n)?n:null},toast(e,t){const r=wn.instance;r?r.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}},eo="/easydbaccess/settings.json",ul="/easydbaccess/secrets.txt";function jr(e){try{return globalThis.localStorage??null}catch{return null}}function Ds(e){const t=jr();if(!t)return{};const r=t.getItem(eo);if(!r)return{};try{const s=JSON.parse(r);return s&&typeof s=="object"?s:{}}catch{return{}}}function to(e,t){return Ds()[e]}function zd(e,t,r){const s=jr();if(!s)return;const n=Ds();n[e]=t,s.setItem(eo,JSON.stringify(n))}function Fd(e,t){const r=jr();if(!r)return;const s=Ds();e in s&&(delete s[e],r.setItem(eo,JSON.stringify(s)))}function Ri(e,t){return e in Ds()}function Os(e){return jr()?.getItem(ul)??""}function hl(e,t){jr()?.setItem(ul,e)}function js(e){const t={};for(const r of e.split(/\r?\n/)){const s=r.trim();if(!s||s.startsWith("#"))continue;const n=s.indexOf(":");if(n<0)continue;const o=s.slice(0,n).trim(),l=s.slice(n+1).trim();o&&(t[o]=l)}return t}function fl(e,t){return e.replace(/\$\{secret:([^}]+)\}/g,(r,s)=>{const n=t[s.trim()];return n===void 0?r:n})}function Ld(e){const t=Od(e.registries),r=e.registries.rowSources,s=l=>(r.set(l.type,l),()=>{r.get(l.type)===l&&r.delete(l.type)}),n=Bd(e.store,e.registries),o={open(l){return console.warn("[host] windows.open is stubbed until Phase 5",l.id),{id:l.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:o,registerRowSource:s,settings:n,backend:{fetch:async(l,c)=>{const u=await Md(e.store),m=c?.body instanceof ArrayBuffer;if(!u||m)return globalThis.fetch(l,c);const $={url:l};return c?.method&&($.method=c.method),c?.headers&&($.headers=c.headers),typeof c?.body=="string"&&($.body=c.body),globalThis.fetch(`${u}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify($)})},async saveFile(l,c,u){const m=typeof c=="string"?new Blob([c],{type:u??"application/octet-stream"}):c,$=URL.createObjectURL(m),b=document.createElement("a");b.href=$,b.download=l,b.rel="noopener",document.body.appendChild(b),b.click(),b.remove(),setTimeout(()=>URL.revokeObjectURL($),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function Md(e){const t="server-sync:url";let r=Ri(t)?to(t):void 0;return r===void 0&&(r=(await e.settings.findOne(t))?.value),typeof r!="string"||r.length===0?null:fl(r,js(Os())).replace(/\/+$/,"")}function Bd(e,t){const r=(o,l)=>`${o}:${l}`,s=(o,l)=>t.settings.get(o)?.fields.find(c=>c.key===l),n=o=>typeof o=="string"?fl(o,js(Os())):o;return{async get(o,l){const c=r(o,l);let u;if(Ri(c))u=to(c);else{const m=await e.settings.findOne(c);u=m?m.value:s(o,l)?.default}return n(u)},async set(o,l,c,u){const m=r(o,l);(u??s(o,l)?.scope??"workspace")==="user"?(zd(m,c),await e.settings.remove(m).catch(()=>{})):(await e.settings.upsert({key:m,value:c}),Fd(m))},async placement(o,l){const c=r(o,l);return Ri(c)?"user":await e.settings.findOne(c)?"workspace":null}}}const Nd={id:"csv-import",name:"CSV Import",type:"importer",version:"0.1.0",description:"Drag-and-drop CSV files to create typed tables.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-import.ts"};function Ud(e){e.ui.registerImporter(Hd),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const s=tu(t).filter(nu);if(s.length===0)return!1;t.preventDefault();for(const n of s)await qd(e,n);return!0})}const Hd={id:"csv",label:"CSV",accept:[".csv","text/csv"],async parse(e){const t=typeof e=="string"?e:await e.text();return Qn(t)}};async function qd(e,t){const r=t.name.replace(/\.csv$/i,"")||"imported";await $s(e,await t.text(),r)}async function $s(e,t,r,s={}){const n=e.workspaceId();if(!n)throw new Error("csv-import: no active workspace");const o=(r||"imported").replace(/\.csv$/i,"")||"imported",l=(await e.store.tables.find()).find(b=>b.workspaceId===n&&b.name===o);let c,u;if(l){const b=await e.ui.dialogs.choice(`A table named "${o}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!b)return;b==="Append rows"?(u="append",c=l.id):b==="Overwrite rows"?(u="overwrite",c=l.id):(u="new",c=hs())}else u="new",c=hs();e.events.emit("import:before",{source:"csv",tableId:c});let m;if(u==="new"){const b=Qn(t,{maxRows:s.maxRows});let k=b.columns,B=b.rows;if(s.editColumns){const F=await s.editColumns(k);if(F===null)return;B=ru(B,k,F),k=F}s.maxRows!=null&&(B=B.slice(0,s.maxRows));const L=l?`${o} (${Date.now().toString(36)})`:o;await e.store.tables.insert({id:c,workspaceId:n,name:L,code:Di(L),columns:k,view:"table",...s.origin?{origin:s.origin}:{},updatedAt:Date.now()}),m=B.map(F=>({id:hs(),tableId:c,data:F,updatedAt:Date.now()}))}else{const b=l.columns,k=pl(t,{maxRows:s.maxRows});if(m=(s.maxRows!=null?k.rows.slice(0,s.maxRows):k.rows).map(L=>{const F={};for(let H=0;H<b.length;H++){const G=b[H];F[G.field]=wl(L[H]??"",G.type)}return{id:hs(),tableId:c,data:F,updatedAt:Date.now()}}),u==="overwrite"){const L=e.store.rows(c),F=await L.find();await L.bulkRemove(F.map(H=>H.id))}}await e.store.rows(c).bulkInsert(m),e.events.emit("import:after",{source:"csv",tableId:c,rowCount:m.length})}function pl(e,t={}){const r=e.replace(/﻿/,""),s=bl(r),n=yl(r,s,ml(t.maxRows));if(n.length===0)return{header:[],rows:[]};const o=n[0],l=n.slice(1).filter(c=>!(c.length===1&&c[0]===""));return{header:o,rows:l}}function ml(e){return e!=null?e+1:void 0}async function gl(e,t){const s=new TextDecoder,n=t+1;let o="",l=0,c=!1,u=0;for(;u<e.size;){const m=new Uint8Array(await e.slice(u,u+1048576).arrayBuffer());u+=1048576;const $=s.decode(m,{stream:!0});for(let b=0;b<$.length;b++){const k=$[b];if(k==='"')c=!c;else if(k===`
`&&!c&&(l+=1,l>=n))return o+$.slice(0,b+1)}o+=$}return o}function Qn(e,t={}){const r=e.replace(/﻿/,""),s=bl(r),n=yl(r,s,ml(t.maxRows));if(n.length===0)return{columns:[],rows:[]};const o=n[0],l=n.slice(1).filter(B=>!(B.length===1&&B[0]==="")),c=o.map((B,L)=>Vd(B,L)),u=xl(c.map(B=>B.field)),m=l.map(B=>{const L={};for(let F=0;F<u.length;F++)L[u[F]]=B[F]??"";return L}),$=c.map((B,L)=>B.type?B.type:Gd(m.map(F=>F[u[L]]??"").filter(F=>F.length>0))),b=c.map((B,L)=>{const F=$[L]??"string",H={field:u[L],label:B.label,type:F},G=Kd(F),he=B.renderer??G;return he&&(H.renderer=he),B.default!==void 0&&(H.default=B.default),B.max!=null&&(H.max=B.max),B.unique&&(H.unique=!0),B.notnull&&(H.notnull=!0),B.hidden&&(H.hidden=!0),H}),k=m.map(B=>{const L={};for(let F=0;F<u.length;F++){const H=u[F],G=$[F]??"string";L[H]=wl(B[H]??"",G)}return L});return{columns:b,rows:k}}const Wd=new Set(["string","number","boolean","date","datetime"]),oa={color:"color",image:"image"};function Kd(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function Vd(e,t){const r=e.trim();if(!r.includes(":"))return{field:Di(r||`col_${t+1}`),label:r||`Column ${t+1}`};const s=r.split(":"),n=Di(s[0]||`col_${t+1}`),o=(s[1]??s[0]??"").trim()||n,l={field:n,label:o},c=(s[2]??"").trim();c&&(Wd.has(c)?l.type=c:oa[c]&&(l.type="string",l.renderer=oa[c]));const u=(s[3]??"").trim();u&&(l.default=u);const m=(s[4]??"").trim();if(m){const b=Number(m);Number.isFinite(b)&&b>0&&(l.max=b)}const $=(s[5]??"").toLowerCase();return $.includes("u")&&(l.unique=!0),$.includes("n")&&(l.notnull=!0),$.includes("h")&&(l.hidden=!0),l}function bl(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),r={",":0,";":0,"	":0};for(const o of t)o in r&&(r[o]+=1);let s=",",n=-1;for(const o of[",",";","	"])(r[o]??0)>n&&(s=o,n=r[o]??0);return s}function yl(e,t,r){const s=[];let n=[],o="",l=!1;for(let c=0;c<e.length;c++){const u=e[c];if(l)u==='"'?e[c+1]==='"'?(o+='"',c++):l=!1:o+=u;else if(u==='"')l=!0;else if(u===t)n.push(o),o="";else if(u===`
`||u==="\r"){if(u==="\r"&&e[c+1]===`
`&&c++,n.push(o),s.push(n),n=[],o="",r!=null&&s.length>=r)return s}else o+=u}return(o.length>0||n.length>0)&&(n.push(o),s.push(n)),s}function Gd(e){return e.length===0?"string":e.every(Xd)?"boolean":e.every(Qd)?"number":e.every(Zd)?"datetime":e.every(Jd)?"date":"string"}const Yd=/^(true|false|yes|no|0|1)$/i;function Xd(e){return Yd.test(e.trim())}function Qd(e){const t=e.trim();if(t==="")return!1;const r=Number(t);return Number.isFinite(r)}function Jd(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function Zd(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function wl(e,t){const r=e.trim();switch(t){case"number":{if(r==="")return null;const s=Number(r);return Number.isFinite(s)?s:r}case"boolean":return r===""?null:/^(true|yes|1)$/i.test(r);case"date":return vl(r);case"datetime":return eu(r);default:return e}}function vl(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){let s=parseInt(t[1],10),n=parseInt(t[2],10);const o=t[3];let l=parseInt(o,10);o.length===2&&(l+=2e3);let c,u;return s>12?(c=s,u=n):n>12?(u=s,c=n):(c=s,u=n),`${l.toString().padStart(4,"0")}-${u.toString().padStart(2,"0")}-${c.toString().padStart(2,"0")}`}const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toISOString().slice(0,10)}function eu(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),r=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(r)return`${r[1]}T${r[2].padStart(5,"0")}`;const s=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(s)return`${vl(`${s[1]}/${s[2]}/${s[3]}`)}T${s[4].padStart(5,"0")}`;const n=new Date(e);if(!Number.isNaN(n.getTime())){const o=n.toISOString();return`${o.slice(0,10)}T${o.slice(11,16)}`}return e}function tu(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const s of Array.from(t.items))if(s.kind==="file"){const n=s.getAsFile();n&&r.push(n)}return r}return[]}function nu(e){return!!(/\.csv$/i.test(e.name)||e.type==="text/csv"||e.type==="application/csv")}function xl(e){const t=new Map,r=new Set,s=[];for(const n of e){let o=n,l=t.get(n)??0;for(;r.has(o);)l+=1,o=`${n}_${l+1}`;t.set(n,l),r.add(o),s.push(o)}return s}function ru(e,t,r){return e.map(s=>{const n={};for(let o=0;o<t.length;o++)n[r[o].field]=s[t[o].field];return n})}function Di(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function hs(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const su=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:xl,importCsvText:$s,init:Ud,meta:Nd,parseCsv:Qn,parseCsvRaw:pl,readCsvHead:gl},Symbol.toStringTag,{value:"Module"})),iu={id:"csv-export",name:"CSV Export",type:"exporter",version:"0.1.0",description:"Export a single table as a .csv file via a per-table button.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-export.ts"},ou={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return no(e,t)}};function au(e){e.ui.registerExporter(ou),e.ui.registerTableButton({id:"csv-export:download",label:"CSV",icon:"file_download",tooltip:"Download this table as a .csv file",onClick:async(t,r)=>{const s=await t.store.tables.findOne(r.tableId);if(!s)return;const n=await t.store.rows(s.id).find(),o=no(s,n);await t.backend.saveFile(`${s.code||s.name||"table"}.csv`,o,"text/csv")}})}function no(e,t){const r=e.columns.map(o=>o.field),s=e.columns.map(o=>aa(o.label??o.field)),n=t.map(o=>r.map(l=>aa(lu(o.data[l]))).join(","));return[s.join(","),...n].join(`\r
`)}function lu(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function aa(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const cu=Object.freeze(Object.defineProperty({__proto__:null,init:au,meta:iu,serializeCsv:no},Symbol.toStringTag,{value:"Module"}));var du=Object.defineProperty,uu=Object.getOwnPropertyDescriptor,dr=(e,t,r,s)=>{for(var n=s>1?void 0:s?uu(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&du(t,r,n),n};function Oi(e,t={}){return(jt.instance??hu()).open(e,t)}function hu(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function fu(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let jt=class extends Ne{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((r,s)=>r?s:-1).filter(r=>r>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),jt.instance=this}disconnectedCallback(){super.disconnectedCallback(),jt.instance===this&&(jt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Xt(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(r=>!r.hidden),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(r=>{this.resolveFn=r,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return A`
      <dialog @cancel=${this.onCancel} @keydown=${Yt}>
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
            ${this.message?A`<p class="message">${this.message}</p>`:""}
            <div class="toolbar">
              <span>${e} of ${this.items.length} selected</span>
              <span>
                <button type="button" @click=${()=>this.setAll(!0)}>Select all</button>
                &nbsp;·&nbsp;
                <button type="button" @click=${()=>this.setAll(!1)}>None</button>
              </span>
            </div>
            <ul class="tables">
              ${this.items.map((t,r)=>A`
                  <li>
                    <input
                      type="checkbox"
                      id=${`tsel-${r}`}
                      .checked=${this.selected[r]??!1}
                      @change=${()=>this.toggle(r)}
                    />
                    <label for=${`tsel-${r}`}>
                      <span class="name">${t.name}</span>
                      ${t.hidden?A`<span class="tag-hidden">hidden</span>`:""}
                      <span class="size">${fu(t.size)}</span>
                      ${t.detail?A`<span class="detail">${t.detail}</span>`:""}
                    </label>
                  </li>
                `)}
            </ul>
          </div>
        </form>
      </dialog>
    `}};jt.instance=null;jt.styles=[Gt,qe`
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
    `];dr([q()],jt.prototype,"items",2);dr([q()],jt.prototype,"selected",2);dr([q()],jt.prototype,"heading",2);dr([q()],jt.prototype,"message",2);dr([q()],jt.prototype,"confirmLabel",2);jt=dr([tt("table-select-dialog")],jt);const pu={id:"json-import",name:"JSON Import",type:"importer",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"/><path d="M16 3a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/json-import.ts"};function mu(e){e.ui.registerImporter(gu),e.ui.registerDropHandler(async t=>{const s=Cu(t).filter(Eu);if(s.length===0)return!1;t.preventDefault();for(const n of s)await bu(e,n);return!0})}const gu={id:"json",label:"JSON",accept:[".json",".db.json","application/json"],async parse(e){const t=typeof e=="string"?e:await e.text(),r=JSON.parse(t),n=zr(r,"imported")[0];return{columns:n?.columns??[],rows:n?.rows??[]}}};async function bu(e,t){await ks(e,await t.text(),t.name)}async function ks(e,t,r,s={}){const n=e.workspaceId();if(!n)throw new Error("json-import: no active workspace");let o;try{o=JSON.parse(t)}catch(H){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${r}: ${H.message}`)});return}const l=r.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",c=zr(o,l);if(c.length===0)return;let u=c;if(c.length>1){const H=await Oi(c.map(G=>({name:G.name,size:G.rows.length})),{title:"Import tables",message:`"${r}" contains ${c.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!H)return;u=H.map(G=>c[G])}const m=(await e.store.tables.find()).filter(H=>H.workspaceId===n),$=new Set(u.map(H=>H.name)),b=m.filter(H=>$.has(H.name));let k;if(b.length===0&&u.length===1)k="append-new";else{const H=b.length>0?[`Overwrite matching (${b.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],G=await e.ui.dialogs.choice(`Importing ${u.length} table${u.length===1?"":"s"} from "${r}".${b.length>0?`

${b.length} table${b.length===1?"":"s"} share a name with existing data.`:""}`,H,"JSON import");if(!G)return;G.startsWith("Overwrite matching")?k="overwrite-matching":G==="Replace entire workspace"?k="replace-workspace":k="append-new"}const B=2e3,L=u.reduce((H,G)=>H+(G.source?0:Math.min(G.rows.length,s.maxRows??1/0)),0);let F=null;if(L>=B){const{TopProgress:H}=await In(async()=>{const{TopProgress:G}=await Promise.resolve().then(()=>tc);return{TopProgress:G}},void 0);F=H.begin(`Importing ${r}…`)}try{if(k==="replace-workspace")for(const ie of m){const oe=e.store.rows(ie.id),V=await oe.find();await oe.bulkRemove(V.map(J=>J.id)),await e.store.tables.remove(ie.id)}const H=new Map(m.map(ie=>[ie.name,ie])),G=new Map;let he=0;for(const ie of u){const oe=ie.source,V=ie.origin??(!oe&&s.originUrl?{type:"json",url:s.originUrl}:void 0);let J;const ue=k==="overwrite-matching"?H.get(ie.name):void 0;if(ue){if(J=ue.id,!ue.source){const Te=e.store.rows(J),Ie=await Te.find();await Te.bulkRemove(Ie.map(g=>g.id))}await e.store.tables.patch(J,{columns:ie.columns,...ie.title?{title:ie.title}:{},...ie.windowGeometry?{windowGeometry:ie.windowGeometry}:{},...ie.sortColumn?{sortColumn:ie.sortColumn,sortAsc:ie.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},...ie.filters?{filters:ie.filters}:{},...ie.labelColumn?{labelColumn:ie.labelColumn}:{},...ie.info?{info:ie.info}:{},...ie.deletedColumns?{deletedColumns:ie.deletedColumns}:{},source:oe??void 0,origin:V??void 0,updatedAt:Date.now()})}else J=ua(),e.events.emit("import:before",{source:"json",tableId:J}),await e.store.tables.insert({id:J,workspaceId:n,name:ie.name,code:Su(ie.name),columns:ie.columns,view:"table",...ie.title?{title:ie.title}:{},...ie.windowGeometry?{windowGeometry:ie.windowGeometry}:{},...ie.sortColumn?{sortColumn:ie.sortColumn,sortAsc:ie.sortAsc??!0}:{},...ie.filters?{filters:ie.filters}:{},...ie.labelColumn?{labelColumn:ie.labelColumn}:{},...ie.info?{info:ie.info}:{},...ie.deletedColumns?{deletedColumns:ie.deletedColumns}:{},...oe?{source:oe}:{},...V?{origin:V}:{},updatedAt:Date.now()});G.set(ie.name,J);let $e=0;if(!oe){const Te=e.store.rows(J),g=(s.maxRows!=null?ie.rows.slice(0,s.maxRows):ie.rows).map(v=>({id:ua(),tableId:J,data:v,updatedAt:Date.now()}));await Te.bulkInsert(g),$e=g.length,he+=$e,F?.fraction(L>0?he/L:1)}e.events.emit("import:after",{source:"json",tableId:J,rowCount:$e})}await yu(e,o,n,G,k==="replace-workspace")}finally{F?.done()}document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function yu(e,t,r,s,n){if(!bt(t))return;const o=t,l=Array.isArray(o.viewTemplates)?o.viewTemplates:[],c=Array.isArray(o.viewInstances)?o.viewInstances:[];if(!(l.length===0&&c.length===0)){if(n){const u=(await e.store.viewInstances.find()).filter(m=>m.workspaceId===r);await e.store.viewInstances.bulkRemove(u.map(m=>m.id))}for(const u of l)!bt(u)||typeof u.id!="string"||await e.store.viewTemplates.upsert({...u,workspaceId:r});for(const u of c){if(!bt(u)||typeof u.id!="string")continue;const m=(u.tableName?s.get(u.tableName):void 0)??u.tableId;m&&await e.store.viewInstances.upsert({...u,workspaceId:r,tableId:m})}}}function zr(e,t){if(bt(e)&&la(e))return ca(e);if(bt(e)&&Array.isArray(e.tables)){const r=e,s=[];for(const n of r.tables){if(vu(n)){const o=n,l=bt(o.windowGeometry)?o.windowGeometry:void 0,c=typeof o.sortColumn=="string"?o.sortColumn:void 0,u=typeof o.sortAsc=="boolean"?o.sortAsc:void 0,m=typeof o.title=="string"?o.title:void 0,$=bt(o.filters)?o.filters:void 0,b=typeof o.labelColumn=="string"?o.labelColumn:void 0,k=bt(o.info)?o.info:void 0,B=Array.isArray(o.deletedColumns)?o.deletedColumns.filter(H=>typeof H=="string"):void 0,L=bt(o.source)&&typeof o.source.type=="string"?o.source:void 0,F=bt(o.origin)&&typeof o.origin.type=="string"&&typeof o.origin.url=="string"?o.origin:void 0;s.push({name:String(n.name),columns:n.columns.map(xu),rows:Array.isArray(n.rows)?n.rows.filter(bt):[],...m?{title:m}:{},...l?{windowGeometry:l}:{},...c?{sortColumn:c,sortAsc:u??!0}:{},...$?{filters:$}:{},...b?{labelColumn:b}:{},...k?{info:k}:{},...B?{deletedColumns:B}:{},...L?{source:L}:{},...F?{origin:F}:{}});continue}bt(n)&&la(n)&&s.push(...ca(n))}return s}if(Array.isArray(e)){const r=e.filter(bt);return r.length===0?[]:[{name:t,...da(r)}]}return bt(e)?[{name:t,...da([e])}]:[]}function la(e){for(const[t,r]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!bt(r))continue;const s=r;if(Array.isArray(s.dataArray)&&Array.isArray(s.columns))return!0}return!1}function ca(e){const t=[];for(const[r,s]of Object.entries(e)){if(!/\.table\.json$/.test(r)||!bt(s))continue;const n=s;if(!Array.isArray(n.dataArray)||!Array.isArray(n.columns))continue;const o=r.replace(/\.table\.json$/,""),l=n.columns.map($=>wu($)),c=l.map($=>$.field),u=n.dataArray.filter($=>Array.isArray($)).map($=>{const b={};for(let k=0;k<c.length;k++)b[c[k]]=$[k];return b}),m={name:o,columns:l,rows:u};if(n.elementRect&&typeof n.elementRect.x=="number"&&typeof n.elementRect.y=="number"){const $=n.elementRect;m.windowGeometry={x:$.x,y:$.y,w:$.width??600,h:$.height??400,z:$.zIndex??100,minimized:!!$.minimized,maximized:!!$.maximized}}typeof n.sortColumn=="number"&&n.sortColumn>=0&&n.sortColumn<c.length&&(m.sortColumn=c[n.sortColumn],m.sortAsc=(n.sortDirection??"asc")!=="desc"),t.push(m)}return t}function wu(e){const t=String(e.field??"col"),r=String(e.name??t),s=typeof e.type=="string"?e.type:"string",n={field:t,label:r,type:s};return e.isUnique&&(n.unique=!0),e.isNotNull&&(n.notnull=!0),n}function vu(e){return bt(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function xu(e){if(!bt(e))return{field:"col",label:"Col",type:"string"};const t=e,r=String(t.field??"col");let s=typeof t.type=="string"?t.type:"string",n=typeof t.renderer=="string"?t.renderer:void 0;(s==="color"||s==="image")&&(n=n??s,s="string");const o={field:r,label:String(t.label??r),type:s};return n&&(o.renderer=n),typeof t.script=="string"&&(o.script=t.script),o}function da(e){const t=new Set;for(const n of e)for(const o of Object.keys(n))t.add(o);return{columns:Array.from(t).map(n=>({field:n,label:n,type:$u(e.map(o=>o[n]))})),rows:e}}function $u(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&ku(r))?"date":"string"}function ku(e){if(/^\d+$/.test(e))return!1;const t=new Date(e);return!Number.isNaN(t.getTime())}function bt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Cu(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const s of Array.from(t.items))if(s.kind==="file"){const n=s.getAsFile();n&&r.push(n)}return r}return[]}function Eu(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}function Su(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function ua(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const _u=Object.freeze(Object.defineProperty({__proto__:null,importJsonText:ks,init:mu,meta:pu,parsedToTables:zr},Symbol.toStringTag,{value:"Module"}));var Tu=Object.defineProperty,Au=Object.getOwnPropertyDescriptor,Fr=(e,t,r,s)=>{for(var n=s>1?void 0:s?Au(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&Tu(t,r,n),n};const Pu="https://latest.datasette.io/ephemeral";let Wt=class extends Ne{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=async e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const r=this.token.trim();if(this.onConnect){this.status="Checking…",this.statusKind="busy";try{await this.onConnect(t,r)}catch(s){this.status=s?.message??String(s),this.statusKind="err";return}}this.finish({url:t,token:r})}}connectedCallback(){super.connectedCallback(),Wt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Wt.instance===this&&(Wt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Xt(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,this.onConnect=e.onConnect,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return A`
      <dialog @cancel=${this.onCancel} @keydown=${Yt}>
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
                placeholder="e.g. ${Pu}"
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
    `}};Wt.instance=null;Wt.styles=[Gt,qe`
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
    `];Fr([q()],Wt.prototype,"url",2);Fr([q()],Wt.prototype,"token",2);Fr([q()],Wt.prototype,"status",2);Fr([q()],Wt.prototype,"statusKind",2);Wt=Fr([tt("datasette-connect-dialog")],Wt);function $l(e,t,r=[]){const s=new Set(e.map(c=>c.field)),n=new Set(r),o=[...e],l=[];for(const c of t)s.has(c.field)||n.has(c.field)||(o.push(c),l.push(c.field),s.add(c.field));return{columns:o,newFields:l}}function ha(e,t){return JSON.stringify(t.map(r=>e[r]))}function Iu(e,t){return t.every(r=>e[r]!==null&&e[r]!==void 0)}function Ru(e){const{oldRows:t,freshRows:r,pks:s,userAddedFields:n,deletedRemoteFields:o=[]}=e,l=new Set(o),c=b=>{const k={...b};for(const B of l)delete k[B];return k};if(!(s.length>0&&r.every(b=>Iu(b,s))))return{data:r.map(c),merged:!1};const m=new Map;for(const b of t){const k=ha(b.data,s);m.has(k)||m.set(k,b)}return{data:r.map(b=>{const k=c(b),B=ha(b,s),L=m.get(B);if(L)for(const F of n)Object.prototype.hasOwnProperty.call(L.data,F)&&(k[F]=L.data[F]);return k}),merged:!0}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kl=Symbol.for(""),Du=e=>{if(e?.r===kl)return e?._$litStatic$},Ou=e=>({_$litStatic$:e,r:kl}),fa=new Map,ju=e=>(t,...r)=>{const s=r.length;let n,o;const l=[],c=[];let u,m=0,$=!1;for(;m<s;){for(u=t[m];m<s&&(o=r[m],(n=Du(o))!==void 0);)u+=n+t[++m],$=!0;m!==s&&c.push(o),l.push(u),m++}if(m===s&&l.push(t[s]),$){const b=l.join("$$lit$$");(t=fa.get(b))===void 0&&(l.raw=l,fa.set(b,t=l)),r=c}return e(t,...r)},zu=ju(A);var Fu=Object.defineProperty,Lu=Object.getOwnPropertyDescriptor,ur=(e,t,r,s)=>{for(var n=s>1?void 0:s?Lu(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&Fu(t,r,n),n};let zt=class extends Ne{constructor(){super(...arguments),this.values=[],this.blanks=0,this.current="",this.search="",this.hide=!1,this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,r,s=0){this.values=t,this.blanks=s;let n=r??"",o=!1;return n.startsWith("!")&&(o=!0,n=n.slice(1).trim()),this.hide=o,this.current=n,this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(l=>{this.resolveFn=l,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}pick(e){this.close((this.hide?"!":"")+e)}close(e){document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),zt.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),zt.instance===this&&(zt.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(n=>n.value.toLowerCase().includes(e)),r=this.blanks>0&&"(blanks)".includes(e),s=this.current.toUpperCase()==="NULL";return A`
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
      ${t.length===0&&!r?A`<div class="empty">No matching values.</div>`:A`<ul>
            ${r?A`
                  <li
                    class=${`blanks${s?" selected":""}`}
                    @click=${()=>this.pick("NULL")}
                  >
                    <span class="label"><em>(Blanks)</em></span>
                    <span class="count">${this.blanks}</span>
                  </li>
                `:""}
            ${t.slice(0,500).map(n=>A`
                <li
                  class=${n.value===this.current?"selected":""}
                  @click=${()=>this.pick(n.value)}
                >
                  <span class="label">${n.value}</span>
                  <span class="count">${n.count}</span>
                </li>
              `)}
          </ul>`}
      ${this.values.length>500?A`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      <div class="actions">
        <button class="text" @click=${()=>this.close({clear:!0})}>Clear filter</button>
        <span style="color:#6b7280">${t.length} value${t.length===1?"":"s"}</span>
      </div>
    `}};zt.instance=null;zt.styles=[Qt,qe`
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
    `];ur([Mt({type:Array})],zt.prototype,"values",2);ur([Mt({type:Number})],zt.prototype,"blanks",2);ur([Mt({type:String})],zt.prototype,"current",2);ur([q()],zt.prototype,"search",2);ur([q()],zt.prototype,"hide",2);zt=ur([tt("filter-popover")],zt);var Mu=Object.defineProperty,Bu=Object.getOwnPropertyDescriptor,sn=(e,t,r,s)=>{for(var n=s>1?void 0:s?Bu(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&Mu(t,r,n),n};let Lt=class extends Ne{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const r=t[this.highlightIdx];r!==void 0?(e.preventDefault(),this.onPick(r)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const r=[];for(const s of this.options)if(s.toLowerCase().includes(t)&&(r.push(s),r.length>=500))break;return r}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return A`
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
        ${this.value?A`<button
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
      ${this.open?A`<ul class="dropdown" style=${t}>
            ${e.length===0?A`<li class="empty">No matching values.</li>`:e.map((r,s)=>A`
                    <li
                      class=${s===this.highlightIdx?"highlighted":""}
                      @mousedown=${n=>n.preventDefault()}
                      @click=${()=>this.onPick(r)}
                    >
                      ${r}
                    </li>
                  `)}
          </ul>`:me}
    `}};Lt.styles=qe`
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
  `;sn([Mt({type:String})],Lt.prototype,"value",2);sn([Mt({type:Array})],Lt.prototype,"options",2);sn([Mt({type:String})],Lt.prototype,"placeholder",2);sn([q()],Lt.prototype,"open",2);sn([q()],Lt.prototype,"highlightIdx",2);sn([q()],Lt.prototype,"dropTop",2);sn([q()],Lt.prototype,"dropLeft",2);sn([q()],Lt.prototype,"dropMinWidth",2);sn([q()],Lt.prototype,"editing",2);sn([fn("input")],Lt.prototype,"inputEl",2);Lt=sn([tt("filter-combobox")],Lt);function Nu(e){const t=e.trim(),r=t.split(/\s+/).filter(Boolean);if(!r.some(c=>c==="AND"||c==="OR"))return{kind:"plain",phrase:t.toLowerCase(),words:r.map(c=>c.toLowerCase())};const n=[];let o=[];for(const c of r)c==="OR"?(n.push(o),o=[]):c==="AND"||o.push(c.toLowerCase());n.push(o);const l=n.filter(c=>c.length>0);return l.length===0?{kind:"plain",phrase:t.toLowerCase(),words:[]}:{kind:"boolean",groups:l}}function Cs(e,t,r){const s=Nu(t);if(s.kind==="boolean")return e.filter(u=>s.groups.some(m=>m.every($=>r(u,$))));const{phrase:n,words:o}=s;if(o.length<=1)return n===""?e:e.filter(u=>r(u,n));const l=e.filter(u=>r(u,n));if(l.length>0)return l;const c=e.filter(u=>o.every(m=>r(u,m)));return c.length>0?c:e.filter(u=>o.some(m=>r(u,m)))}function Uu(e){return e==null||String(e).trim()===""}function ji(e,t){const r=t.trim();if(r==="")return!0;let s=!1,n=r;if(n.startsWith("!")&&(s=!0,n=n.slice(1).trim()),n.toUpperCase()==="NULL"||n===""){const l=Uu(e);return s?!l:l}const o=String(e??"").toLowerCase().includes(n.toLowerCase());return s?!o:o}const Es="easydb:visible-count";function Cl(e,t,r){e&&document.dispatchEvent(new CustomEvent(Es,{detail:{key:e,count:t,total:r}}))}function El(e,t){return e<0||t<0?"":e===t?` (${t})`:` (${e}/${t})`}var Hu=Object.defineProperty,qu=Object.getOwnPropertyDescriptor,ut=(e,t,r,s)=>{for(var n=s>1?void 0:s?qu(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&Hu(t,r,n),n};function pa(e,t){return Object.values(e.data).some(r=>r!=null&&String(r).toLowerCase().includes(t))}const Wu=200;let rt=class extends Ne{constructor(){super(...arguments),this.tableId="",this.viewInstanceId="",this.columns=[],this.rows=[],this.sortColumn=null,this.sortDir=null,this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.viewInst=null,this.tableColumns=[],this.renderedCount=0,this.lastEmittedCount=-1,this.lastEmittedTotal=-1,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;(t.tableId===this.tableId||this.viewMode&&t.tableId===this.viewInstanceId)&&(this.localQuery=t.query??"")},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}get viewMode(){return!!this.viewInstanceId}get readOnlyView(){return this.viewMode&&!!this.viewInst?.readonly}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.()}async updated(e){(e.has("tableId")||e.has("viewInstanceId"))&&this.tableId&&(this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.markEmptyCells(),this.emitCount()}emitCount(){const e=this.viewMode?this.viewInstanceId:this.tableId;if(!e)return;const t=this.renderedCount,r=this.rows.length;t===this.lastEmittedCount&&r===this.lastEmittedTotal||(this.lastEmittedCount=t,this.lastEmittedTotal=r,Cl(e,t,r))}markEmptyCells(){const e=this.shadowRoot?.querySelectorAll("tbody tr:not(.spacer) > td");if(e)for(const t of e)t.className.startsWith("t-")&&t.classList.toggle("is-null",Ku(t))}async bind(){if(!this.tableId)return;const e=await be(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.viewMode?(this.tableColumns=t.columns,this.viewInst=await e.store.viewInstances.findOne(this.viewInstanceId)??null,this.applyView(),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const o=n.find(l=>l.id===this.tableId);o&&(this.tableColumns=o.columns,this.applyView())}),this.viewSubUnsub?.(),this.viewSubUnsub=e.store.viewInstances.subscribe(n=>{const o=n.find(l=>l.id===this.viewInstanceId);o&&(this.viewInst=o,this.applyView())})):(this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const o=n.find(l=>l.id===this.tableId);o&&this.applyTable(o)})),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const r=e.store.rows(this.tableId);this.unsubscribe=r.subscribe(n=>this.rows=n);const s=window.setTimeout(()=>this.loading=!0,Wu);try{this.rows=await r.find()}catch(n){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${n?.message??String(n)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(s),this.loading=!1}}applyTable(e){this.columns=e.columns,this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}applyView(){const e=this.viewInst;if(!e)return;const t=new Map(this.tableColumns.map(s=>[s.field,s])),r=e.columnWidths??{};this.columns=e.visibleColumns.map(s=>t.get(s)).filter(s=>!!s).map(s=>{const n=r[s.field];return typeof n=="number"?{...s,width:n}:s}),this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}async setCell(e,t,r){const s=await be();await this.commitCell(s,e,t,r)}async commitCell(e,t,r,s){const n=this.columns.find(o=>o.field===r);if(n){const o=Vu(n,s,this.rows,t.id);if(o){await e.api.ui.dialogs.alert(o,`Cannot save ${n.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[r]:s},updatedAt:Date.now()})}catch(o){await e.api.ui.dialogs.alert(o?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}cancelCellEdit(e,t){if(e.key!=="Escape")return;e.stopPropagation();const r=e.target;typeof t=="boolean"?r.checked=t:r.value=t,r.blur()}renderReadonlyCell(e,t){return e.type==="boolean"?A`<input type="checkbox" .checked=${t===!0||t==="true"||t===1||t==="1"} disabled />`:t==null||t===""?A``:e.type==="date"?A`${vi(t)}`:e.type==="datetime"?A`${xi(t).replace("T"," ")}`:A`${String(t)}`}renderCell(e,t){const r=e.data[t.field],s=t.renderer,n=s?this.cellRenderers?.get(s):void 0;if(n){const o=Ou(n);return zu`<${o}
        .value=${r??""}
        .column=${t}
        .row=${e.data}
        .readonly=${this.readOnlyView}
        @change=${l=>this.setCell(e,t.field,l.detail.value)}
      ></${o}>`}if(this.readOnlyView)return this.renderReadonlyCell(t,r);switch(t.type){case"boolean":{const o=r===!0||r==="true"||r===1||r==="1";return A`<input
          type="checkbox"
          .checked=${o}
          @keydown=${l=>this.cancelCellEdit(l,o)}
          @change=${l=>this.setCell(e,t.field,l.target.checked)}
        />`}case"date":return A`<input
          type="date"
          .value=${vi(r)}
          @keydown=${o=>this.cancelCellEdit(o,vi(r))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"datetime":return A`<input
          type="datetime-local"
          .value=${xi(r)}
          @keydown=${o=>this.cancelCellEdit(o,xi(r))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"number":return A`<input
          type="number"
          .value=${r==null?"":String(r)}
          @keydown=${o=>this.cancelCellEdit(o,r==null?"":String(r))}
          @change=${o=>{const l=o.target.value;this.setCell(e,t.field,l===""?null:Number(l))}}
        />`;default:return A`<input
          type="text"
          .value=${String(r??"")}
          @keydown=${o=>this.cancelCellEdit(o,String(r??""))}
          @change=${o=>this.setCell(e,t.field,o.target.value)}
        />`}}async deleteRow(e){const t=await be();try{await t.store.rows(this.tableId).remove(e)}catch(r){await t.api.ui.dialogs.alert(r?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e){let t;this.sortColumn!==e?t="asc":this.sortDir==="asc"?t="desc":this.sortDir==="desc"?t=null:t="asc",this.sortColumn=t?e:null,this.sortDir=t;const r=await be(),s=t?{sortColumn:e,sortAsc:t==="asc",updatedAt:Date.now()}:{sortColumn:void 0,sortAsc:void 0,updatedAt:Date.now()};this.viewMode?await r.store.viewInstances.patch(this.viewInstanceId,s):await r.store.tables.patch(this.tableId,s)}filteredRows(){const e=Object.entries(this.filters).filter(([,n])=>n&&n.trim().length>0),t=this.globalQuery.trim(),r=this.localQuery.trim();if(e.length===0&&t.length===0&&r.length===0)return this.rows;let s=this.rows;return e.length>0&&(s=s.filter(n=>e.every(([o,l])=>ji(n.data[o],l)))),r&&(s=Cs(s,r,pa)),t&&(s=Cs(s,t,pa)),s}sortedRows(){const e=this.filteredRows();if(!this.sortColumn||!this.sortDir)return e;const t=this.sortColumn,s=this.columns.find(l=>l.field===t)?.type??"string",n=this.sortDir==="asc"?1:-1,o=[...e];return o.sort((l,c)=>{const u=l.data[t],m=c.data[t],$=B=>B==null?0:B===""?1:2,b=$(u),k=$(m);return b!==2||k!==2?(b-k)*n:Gu(u,m,s)*n}),o}async openFilterPicker(e,t){e.stopPropagation();const r=e.currentTarget,s=zt.instance;if(!s)return;const n=new Map;let o=0;for(const u of this.rowsFacetedFor(t)){const m=u.data[t];if(m==null||String(m).trim()===""){o++;continue}const $=String(m);n.set($,(n.get($)??0)+1)}const l=[...n.entries()].map(([u,m])=>({value:u,count:m})).sort((u,m)=>m.count-u.count||u.value.localeCompare(m.value)),c=await s.open(r.getBoundingClientRect(),l,this.filters[t]??"",o);c!==null&&(typeof c=="object"&&"clear"in c?this.onFilterInput(t,""):typeof c=="string"&&this.onFilterInput(t,c))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>{this.filterSaveTimer=null,this.saveFilters()},250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=Object.entries(this.filters).filter(([r,s])=>s&&s.trim().length>0&&r!==e);return t.length===0?this.rows:this.rows.filter(r=>t.every(([s,n])=>ji(r.data[s],n)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const r=50,s=500;for(const n of this.visibleColumns){let o=!0;for(const c of t){const u=c.data[n.field];if(u==null)continue;if((typeof u=="string"?u:String(u)).length>=r){o=!1;break}}if(!o)continue;const l=new Set;for(const c of this.rowsFacetedFor(n.field)){const u=c.data[n.field];if(u==null||u==="")continue;const m=typeof u=="string"?u:String(u);if(!(m.length>=r)&&(l.add(m),l.size>=s))break}e.set(n.field,[...l].sort())}return e}freezeColumnWidths(){const e=this.renderRoot.querySelector("thead tr");if(!e)return;const t=Array.from(e.querySelectorAll(":scope > th")),r=this.visibleColumns,s=new Map;r.forEach((n,o)=>{if(n.width!=null)return;const l=t[o];l&&s.set(n.field,Math.round(l.getBoundingClientRect().width))}),s.size!==0&&(this.columns=this.columns.map(n=>s.has(n.field)?{...n,width:s.get(n.field)}:n))}onResizeStart(e,t,r){e.preventDefault(),e.stopPropagation();const s=r.offsetWidth;this.freezeColumnWidths(),this.resizing={field:t,startX:e.clientX,startW:s};const n=l=>{if(!this.resizing)return;const c=l.clientX-this.resizing.startX,u=Math.max(40,this.resizing.startW+c);this.columns=this.columns.map(m=>m.field===this.resizing.field?{...m,width:u}:m)},o=async()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",o);const l=this.resizing?.field;if(this.resizing=null,!l)return;const c=await be();if(this.viewMode){const u={...this.viewInst?.columnWidths??{}};for(const m of this.columns)typeof m.width=="number"&&(u[m.field]=m.width);await c.store.viewInstances.patch(this.viewInstanceId,{columnWidths:u,updatedAt:Date.now()})}else await c.store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",n),window.addEventListener("pointerup",o)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,r){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const s=r.getBoundingClientRect(),n=e.clientX<s.left+s.width/2;this.dropTargetField=t,this.dropEdge=n?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const r=this.dragSourceField,s=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!r||r===t||!s)return;const n=[...this.columns],o=n.findIndex(m=>m.field===r);if(o<0)return;const[l]=n.splice(o,1);let c=n.findIndex(m=>m.field===t);if(c<0){n.splice(o,0,l);return}s==="after"&&(c+=1),n.splice(c,0,l);const u=await be();this.viewMode?await u.store.viewInstances.patch(this.viewInstanceId,{visibleColumns:n.map(m=>m.field),updatedAt:Date.now()}):await u.store.tables.patch(this.tableId,{columns:n,updatedAt:Date.now()})}async saveFilters(){const e=await be(),t={};for(const[s,n]of Object.entries(this.filters))n&&n.trim().length>0&&(t[s]=n);if(this.viewMode){await e.store.viewInstances.patch(this.viewInstanceId,{filters:t,updatedAt:Date.now()});return}const r=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:r,updatedAt:Date.now()})}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,r=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,s=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),n=Math.min(e.length,s+r);return{slice:e.slice(s,n),topPad:s*t,bottomPad:(e.length-n)*t}}render(){const e=this.sortedRows();this.renderedCount=e.length;const t=this.visibleColumns,{slice:r,topPad:s,bottomPad:n}=this.virtualSlice(e),o=this.computeFilterSuggestions(),l=this.externalLoading?this.externalProgress:null;return A`
      ${this.loading||this.externalLoading?A`<div
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
          ${t.map(c=>A`<col style=${c.width!=null?`width: ${c.width}px`:""} />`)}
          <col style="width:2rem" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(c=>{const u=c.sortable!==!1,m=this.sortColumn===c.field&&this.sortDir,$=u?m==="asc"?"▲":m==="desc"?"▼":"⇅":"",b=`t-${c.type}`,k=this.dragSourceField===c.field,B=this.dropTargetField===c.field,L=B&&this.dropEdge==="before"?" drop-before":B&&this.dropEdge==="after"?" drop-after":"",F=(c.description?`${c.description}
`:"")+(c.units?`Units: ${c.units}
`:"")+`${c.field} — ${u?"click to sort, ":"not sortable · "}drag to reorder`;return A`
                <th
                  class=${`${b}${m?" sorted":""}${k?" drag-source":""}${L}${u?"":" no-sort"}`}
                  title=${F}
                  @click=${()=>u&&this.toggleSort(c.field)}
                  @dragover=${H=>this.onColDragOver(H,c.field,H.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(c.field)}
                  @drop=${H=>this.onColDrop(H,c.field)}
                >
                  <div class="col-head">
                    <span
                      class="col-grip mi sm"
                      title="Drag to reorder column"
                      draggable="true"
                      @click=${H=>H.stopPropagation()}
                      @dragstart=${H=>this.onColDragStart(H,c.field)}
                      @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                      >drag_indicator</span
                    ><span class="col-label"
                      >${c.label}${c.units?A`<span class="col-units"> (${c.units})</span>`:""}</span
                    ><span class="sort-icon">${$}</span>
                    <button
                      class=${`funnel${this.filters[c.field]?" active":""}`}
                      title="Filter by value"
                      @click=${H=>this.openFilterPicker(H,c.field)}
                    >
                      <span class="mi sm">filter_list</span>
                    </button>
                  </div>
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
            ${t.map(c=>{const u=o.get(c.field)??[];return A`
                <th>
                  <filter-combobox
                    .value=${this.filters[c.field]??""}
                    .options=${u}
                    placeholder="filter…"
                    title="Filter: text = contains, !text = does not contain, NULL = empty, !NULL = has a value"
                    @filter-change=${m=>this.onFilterInput(c.field,m.detail.value)}
                  ></filter-combobox>
                </th>
              `})}
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${s>0?A`<tr class="spacer" style=${`height:${s}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
          ${r.map(c=>A`
              <tr>
                ${t.map(u=>A`<td class=${`t-${u.type}${u.renderer?` r-${u.renderer}`:""}`}>
                      ${this.renderCell(c,u)}
                    </td>`)}
                <td>
                  <button class="danger" title="Delete row" @click=${()=>this.deleteRow(c.id)}>
                    <span class="mi sm">delete</span>
                  </button>
                </td>
              </tr>
            `)}
          ${n>0?A`<tr class="spacer" style=${`height:${n}px`}>
                <td colspan=${t.length+1}></td>
              </tr>`:""}
        </tbody>
      </table>
    `}};rt.styles=[Qt,qe`
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
    `];ut([Mt({type:String})],rt.prototype,"tableId",2);ut([Mt({type:String})],rt.prototype,"viewInstanceId",2);ut([q()],rt.prototype,"columns",2);ut([q()],rt.prototype,"rows",2);ut([q()],rt.prototype,"sortColumn",2);ut([q()],rt.prototype,"sortDir",2);ut([q()],rt.prototype,"filters",2);ut([q()],rt.prototype,"globalQuery",2);ut([q()],rt.prototype,"localQuery",2);ut([q()],rt.prototype,"dragSourceField",2);ut([q()],rt.prototype,"dropTargetField",2);ut([q()],rt.prototype,"dropEdge",2);ut([q()],rt.prototype,"resizing",2);ut([q()],rt.prototype,"cellRenderers",2);ut([q()],rt.prototype,"scrollY",2);ut([q()],rt.prototype,"viewportHeight",2);ut([q()],rt.prototype,"loading",2);ut([q()],rt.prototype,"externalLoading",2);ut([q()],rt.prototype,"externalProgress",2);rt=ut([tt("data-table")],rt);function Ku(e){if((e.textContent??"").trim()!==""||e.querySelector("img"))return!1;const t=e.querySelectorAll("input");for(const r of Array.from(t))if(r.type==="checkbox"||r.value!=="")return!1;return!0}function Vu(e,t,r,s){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&r.find(o=>o.id!==s&&o.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function vi(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function xi(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const s=new Date(t);if(Number.isNaN(s.getTime()))return"";const n=s.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}function Gu(e,t,r){switch(r){case"number":{const s=Number(e),n=Number(t);return Number.isNaN(s)||Number.isNaN(n)?String(e).localeCompare(String(t)):s-n}case"boolean":return(e?1:0)-(t?1:0);case"date":{const s=new Date(String(e)).getTime(),n=new Date(String(t)).getTime();return Number.isNaN(s)||Number.isNaN(n)?String(e).localeCompare(String(t)):s-n}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function dn(e,t,r){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:r}}))}class Kt extends Error{constructor(t,r){const s=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(s),this.name="DatasetteError",this.status=r??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function hn(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const r=t.pathname.split("/").filter(Boolean),s={};for(const[c,u]of t.searchParams)s[c]=u;let n,o=null,l=null;if(r.length>=2){l=decodeURIComponent(r[r.length-1]),o=decodeURIComponent(r[r.length-2]);const c=r.slice(0,r.length-2).join("/");n=t.origin+(c?"/"+c:"")}else r.length===1&&(o=decodeURIComponent(r[0])),n=t.origin;return{base:n,db:o,table:l,query:s}}function ar(e,t={}){const r=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[s,n]of Object.entries({...e.query,...t}))n!=null&&r.searchParams.set(s,String(n));return r.toString()}function Yu(e){const t=e?.next_url??null,r=e?.next,s=r!=null&&r!==!1?String(r):null,n=Array.isArray(e?.rows)?e.rows:[],o=Array.isArray(e?.columns)?e.columns:null;return{rows:n.map(c=>Array.isArray(c)&&o?Object.fromEntries(o.map((u,m)=>[u,c[m]])):c),nextUrl:t,nextToken:s,hasMore:t!=null||s!=null,truncated:e?.truncated===!0}}function Xu(e,t=""){const r=String(e||"").toUpperCase();return r.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":r.includes("REAL")||r.includes("FLOA")||r.includes("DOUB")||r.includes("NUM")||r.includes("DEC")?"number":r.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function ma(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],r=Array.isArray(e?.columns)?e.columns.slice():[],s={},n=e?.column_details;if(Array.isArray(n))for(const c of n)s[c.column??c.name]=c;else n&&typeof n=="object"&&Object.assign(s,n);for(const c of r)c in s||(s[c]={});const l=(r.length?r:Object.keys(s)).map(c=>{const u=s[c]||{},m=u.is_pk===!0||u.is_pk===1||t.includes(c),$={field:c,label:Sl(c),type:Xu(u.sqlite_type??u.type,c)};return(u.notnull===!0||u.notnull===1||m)&&($.notnull=!0),m&&($.unique=!0),(u.hidden===!0||u.hidden===1)&&($.hidden=!0),u.default!=null&&u.default!==""&&($.default=u.default),$});if(t.length===0){const c=l.filter(u=>u.unique).map(u=>u.field);c.length&&t.push(...c)}return{columns:l,pks:t}}function Sl(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function zs(e){const t=[],r=new Set;for(const s of e)for(const n of Object.keys(s))r.has(n)||(r.add(n),t.push(n));return t.map(s=>({field:s,label:Sl(s),type:Qu(e.map(n=>n[s]))}))}function Qu(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&Ju(r))?"datetime":"string"}function Ju(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function Zu(e){const t=new TextEncoder().encode(String(e));let r="";for(const s of t){const n=String.fromCharCode(s);/[A-Za-z0-9_-]/.test(n)?r+=n:r+="~"+s.toString(16).toUpperCase().padStart(2,"0")}return r}function eh(e,t){return!t||t.length===0?null:t.map(r=>Zu(e[r])).join(",")}function th(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],r=[];for(const s of t){if(typeof s=="string"){r.push(s);continue}if(s&&typeof s=="object"&&typeof s.name=="string"){if(s.name==="_memory")continue;r.push(typeof s.route=="string"&&s.route?s.route:s.name)}}return r}function nh(e,t){const r=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],s=[];for(const n of r){if(typeof n=="string"){s.push({db:t,table:n,count:null,hidden:!1,pks:[]});continue}n&&typeof n=="object"&&typeof n.name=="string"&&s.push({db:t,table:n.name,count:typeof n.count=="number"?n.count:null,hidden:n.hidden===!0,pks:Array.isArray(n.primary_keys)?n.primary_keys:[]})}return s}async function Rn(e,t){let r;try{r=await e(t)}catch(n){const o=n?.message||"network error";throw new Kt({error:`Couldn't reach ${t} (${o}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(r&&r.ok===!1){let n=null;try{n=await r.json()}catch{}throw new Kt(n&&typeof n=="object"?n:{error:`HTTP ${r.status} for ${t}`},r.status)}const s=await r.json();if(s&&s.ok===!1)throw new Kt(s,r.status);return s}async function ro(e,t){return th(await Rn(e,`${t}/-/databases.json`))}async function Ss(e,t,r){return nh(await Rn(e,`${t}/${encodeURIComponent(r)}.json`),r)}async function Fs(e,t){const r=ar(t,{_extra:"column_details"}),s=await Rn(e,r);let{columns:n,pks:o}=ma(s),l=!!s&&s.column_details!=null,c=s?.count??null,u=s;if(n.length===0){const m=ar(t,{_extra:"columns"}),$=await Rn(e,m);({columns:n,pks:o}=ma($)),l=!!$&&$.column_details!=null,c=$?.count??c,u=$}return{columns:n,pks:o,count:c,typed:l,raw:u}}async function zi(e,t){if(!t.db||!t.table)throw new Error("probeSingleTable: URL must name a database and a table");const r=await Fs(e,t);return{db:t.db,table:t.table,count:r.count,hidden:!1,pks:r.pks}}function rh(e,t,r){const s=e&&typeof e=="object"?e:{},n=t&&r&&s.databases?.[t]?.tables?.[r]||t&&r&&s.databases?.[t]?.tables?.[r.toLowerCase()]||{},o=t&&s.databases?.[t]||{},l=L=>n[L]??o[L]??s[L],c={columns:{},units:{}};typeof n.sort=="string"&&(c.sort=n.sort),typeof n.sort_desc=="string"&&(c.sortDesc=n.sort_desc),typeof n.size=="number"&&(c.size=n.size),Array.isArray(n.sortable_columns)&&(c.sortableColumns=n.sortable_columns.slice()),typeof n.label_column=="string"&&(c.labelColumn=n.label_column),n.hidden===!0&&(c.hidden=!0),typeof n.description=="string"&&(c.description=n.description),typeof n.description_html=="string"&&(c.descriptionHtml=n.description_html);const u=l("source"),m=l("source_url"),$=l("license"),b=l("license_url"),k=l("about"),B=l("about_url");if(typeof u=="string"&&(c.source=u),typeof m=="string"&&(c.sourceUrl=m),typeof $=="string"&&(c.license=$),typeof b=="string"&&(c.licenseUrl=b),typeof k=="string"&&(c.about=k),typeof B=="string"&&(c.aboutUrl=B),n.columns&&typeof n.columns=="object")for(const[L,F]of Object.entries(n.columns))typeof F=="string"&&(c.columns[L]=F);if(n.units&&typeof n.units=="object")for(const[L,F]of Object.entries(n.units))typeof F=="string"&&(c.units[L]=F);return c}const ga=new Map;async function sh(e,t){let r=ga.get(t);return r||(r=Rn(e,`${t}/-/metadata.json`).catch(()=>({})),ga.set(t,r)),r}async function so(e,t){const r=await sh(e,t.base);return rh(r,t.db,t.table)}function ih(e){const t={};return e.description!=null&&(t.description=e.description),e.descriptionHtml!=null&&(t.descriptionHtml=e.descriptionHtml),e.source!=null&&(t.source=e.source),e.sourceUrl!=null&&(t.sourceUrl=e.sourceUrl),e.license!=null&&(t.license=e.license),e.licenseUrl!=null&&(t.licenseUrl=e.licenseUrl),e.about!=null&&(t.about=e.about),e.aboutUrl!=null&&(t.aboutUrl=e.aboutUrl),Object.keys(t).length>0?t:void 0}function io(e,t){const r=e.sortableColumns!=null?new Set(e.sortableColumns):null,s=t.map(c=>{const u=e.columns[c.field],m=e.units[c.field],$=r?r.has(c.field):void 0;return u==null&&m==null&&$===void 0?c:{...c,...u!=null?{description:u}:{},...m!=null?{units:m}:{},...$!==void 0?{sortable:$}:{}}}),n=new Set(t.map(c=>c.field)),o={};e.sort&&n.has(e.sort)?(o.sortColumn=e.sort,o.sortAsc=!0):e.sortDesc&&n.has(e.sortDesc)&&(o.sortColumn=e.sortDesc,o.sortAsc=!1);const l=ih(e);return l&&(o.info=l),e.labelColumn&&n.has(e.labelColumn)&&(o.labelColumn=e.labelColumn),{columns:s,patch:o}}function oo(e,t){if(t.length===0)return e;const r=new Map(zs(t).map(s=>[s.field,s.type]));return e.map(s=>{if(s.type!=="string")return s;const n=r.get(s.field);return n&&n!=="string"?{...s,type:n}:s})}async function Lr(e,t,r={}){const s=r.maxRows??1e4,o={_size:r.pageSize??1e3,...r.extraParams||{}};let l=r.startUrl??ar(t,o);const c=[];let u=!1,m=!1,$=0,b,k;for(;l;){let B;try{B=await Rn(e,l)}catch(H){if(c.length===0&&!r.startUrl)throw H;b=H instanceof Kt&&H.status?`stopped after ${c.length} rows: HTTP ${H.status}`:`stopped after ${c.length} rows: ${H?.message??String(H)}`,m=!0,k=l;break}const L=Yu(B);c.push(...L.rows),u=u||L.truncated,$+=1,r.onProgress?.(c.length);const F=L.nextUrl!=null?L.nextUrl:L.nextToken!=null?ar(t,{_next:L.nextToken}):null;F&&c.length<s&&L.rows.length>0?l=F:(m=F!=null&&L.rows.length>0,m&&(k=F??void 0),l=null)}return{rows:c,truncated:u,hasMore:m,pages:$,error:b,nextUrl:k}}function oh(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function _l(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function Tl(e,t,r){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${r}`}async function Ls(e,t,r,s){let n;try{n=await e(t,{method:"POST",headers:oh(s),body:JSON.stringify(r)})}catch(l){throw new Kt({error:`Couldn't reach ${t} (${l?.message||"network error"}).`},0)}if(n&&n.ok===!1){let l=null;try{l=await n.json()}catch{}throw new Kt(l&&typeof l=="object"?l:{error:`HTTP ${n.status} for ${t}`},n.status)}const o=await n.json();if(o&&o.ok===!1)throw new Kt(o,n.status);return o}async function ba(e,t,r,s={}){const n=await Ls(e,_l(t,"insert"),{rows:r,return:!0},s.token);return Array.isArray(n?.rows)?n.rows:[]}async function ah(e,t,r,s,n={}){const o=await Ls(e,Tl(t,r,"update"),{update:s,return:!0},n.token);return o&&typeof o.row=="object"&&o.row?o.row:Array.isArray(o?.rows)&&o.rows[0]?o.rows[0]:null}async function ya(e,t,r,s={}){await Ls(e,Tl(t,r,"delete"),{},s.token)}async function lh(e,t,r,s={}){const n=await Ls(e,_l(t,"upsert"),{rows:r,return:!0},s.token);return Array.isArray(n?.rows)?n.rows:[]}async function ch(e,t){const r=ar(t,{_extra:"primary_keys"}),s=await Rn(e,r);return Array.isArray(s?.primary_keys)?s.primary_keys:[]}async function Al(e,t){try{const r=await Rn(e,ar(t,{_extra:"count"}));return typeof r?.count=="number"?r.count:null}catch{return null}}async function Pl(e,t,r={}){const s=r.token?{headers:{Authorization:`Bearer ${r.token}`}}:void 0;try{const n=await e(`${t}/-/versions.json`,s);if(n&&n.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${n.status}`};const o=await n.json(),l=o?.datasette?.version??o?.version??null;let c=null;try{c=(await(await e(`${t}/-/actor.json`,s)).json())?.actor??null}catch{}return{reachable:!0,version:l,actor:c,writable:!!(r.token&&c)}}catch(n){return{reachable:!1,version:null,actor:null,writable:!1,error:n?.message||"unreachable"}}}function lr(e,t){return t?(r,s)=>{const n=(s??{}).headers??{};return e(r,{...s??{},headers:{...n,Authorization:`Bearer ${t}`}})}:e}class dh extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function Il(e){return`datasette:token:${e}`}function uh(e,t){for(const[r,s]of Object.entries(t))if(r!=="data"&&e[r]!==s)return!1;return!0}function hh(e,t){const r=e.source,s=r?.config??{},n={base:s.base,db:s.db,table:s.table,query:{}},o=Array.isArray(s.pks)&&s.pks.length>0?s.pks:["rowid"],l=r?.writable===!0,c=s.maxRows??1e4,u=s.pollIntervalMs??0,m=(oe,V)=>t.backend.fetch(oe,V);async function $(){const V=(await t.settings.findOne(Il(s.base)))?.value;return typeof V=="string"&&V.length>0?V:void 0}const b=async(oe,V)=>lr(m,await $())(oe,V);function k(oe){return{id:eh(oe,o)??fh(),tableId:e.id,data:oe,updatedAt:Date.now()}}function B(oe){if(!l)throw new dh(oe)}function L(oe){const V={};for(const[J,ue]of Object.entries(oe))o.includes(J)||(V[J]=ue);return V}const F=new Set;let H=[],G=!1,he=null;function ie(){return he||(he=(async()=>{try{const{rows:oe}=await Lr(b,n,{maxRows:c});H=oe.map(k),G=!0;for(const V of F)V(H);return H}finally{he=null}})(),he)}return{async find(oe){const V=G?H:await ie();return!oe||Object.keys(oe).length===0?V:V.filter(J=>uh(J,oe))},async findOne(oe){return(G?H:await ie()).find(J=>J.id===oe)??null},async insert(oe){B("insert");const[V]=await ba(b,n,[oe.data]),J=k(V??oe.data);return t.events.emit("row:created",{tableId:e.id,row:J}),ie(),J},async bulkInsert(oe){if(oe.length===0)return[];B("insert");const V=await ba(b,n,oe.map(ue=>ue.data)),J=(V.length?V:oe.map(ue=>ue.data)).map(k);return ie(),J},async upsert(oe){B("upsert");const[V]=await lh(b,n,[oe.data]),J=k(V??oe.data);return ie(),J},async patch(oe,V){B("update");const J=V.data,ue=L(J??{}),$e=await ah(b,n,oe,ue),Te=k($e??{...J??{}});return t.events.emit("row:updated",{tableId:e.id,row:Te,prev:Te}),ie(),Te},async remove(oe){B("delete"),await ya(b,n,oe),t.events.emit("row:deleted",{tableId:e.id,rowId:oe}),ie()},async bulkRemove(oe){if(oe.length!==0){B("delete");for(const V of oe)await ya(b,n,V);ie()}},subscribe(oe){F.add(oe),G?oe(H):ie();let V=null;return u>0&&(V=setInterval(()=>void ie(),u)),()=>{F.delete(oe),V&&clearInterval(V)}},async refresh(){await ie()}}}function fh(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const _s=e=>e.replace(/^https?:\/\//,""),ph=e=>new Promise(t=>setTimeout(t,e));function mh(){const e=globalThis.__eda_resumeDelayMs;return typeof e=="number"&&e>=0?e:6e4}function gh(e,t,r){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(r)}`}function ao(e,t,r,s){const n={...e.info??{}};return!n.source&&!n.sourceUrl&&(n.source=`${_s(t)}/${r}/${s}`,n.sourceUrl=gh(t,r,s)),{...e,info:n}}function lo(e,t,r,s){if(!(!e||!t))return{nextUrl:t,loadedRows:r,...s!=null?{totalCount:s}:{}}}async function Rl(e,t,r,s={}){if(t.db&&t.table)return[await zi(e,t)];let n=[];if(t.db){if(n.push(...await Ss(e,t.base,t.db)),s.skipPicker)return n.filter(c=>!c.hidden)}else{const c=await ro(e,t.base);if(c.length===0)return[];let u=c;if(c.length>1){const m=await Oi(c.map($=>({name:$,size:null})),{title:`${r} from Datasette`,message:`Choose databases on ${_s(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!m)return null;u=m.map($=>c[$])}for(const m of u)try{n.push(...await Ss(e,t.base,m))}catch{}}if(n.length===0)return[];const o=new Set(n.map(c=>c.db)).size>1,l=await Oi(n.map(c=>({name:o?`${c.db}/${c.table}`:c.table,size:c.count,detail:o?void 0:c.db,hidden:c.hidden})),{title:`${r} from Datasette`,message:`Choose tables to ${r.toLowerCase()} from ${_s(t.base)}.`,confirmLabel:r});return l?l.map(c=>n[c]):null}const bh='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',yh={id:"datasette-source",name:"Datasette",type:"source",version:"0.2.0",description:"Import tables from any online Datasette instance, database, or single table by URL",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-source.ts"},qt={maxImportRows:1e4,pageSize:1e3},wh="https://latest.datasette.io/fixtures/facetable";function vh(e){e.ui.registerHeaderButton({id:"datasette:connect",label:"Connect",icon:bh,tooltip:"Connect a live, editable Datasette table",onClick:()=>Eh(e)}),e.ui.registerTableButton({id:"datasette:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from its Datasette backend",visible:t=>t.source?.type==="datasette"||t.origin?.type==="datasette",onClick:(t,{tableId:r})=>Ah(t,r)}),e.ui.registerTableButton({id:"datasette:resume",label:"Resume import",icon:"sync_problem",tooltip:"Import was interrupted — click to resume from where it stopped",danger:!0,visible:t=>t.origin?.type==="datasette"&&t.importResume!=null,onClick:(t,{tableId:r})=>Ih(t,r)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:hh}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:r}){const s=r||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${wh}`,"","Import from Datasette");s&&await wa(t,s)}}),e.ui.registerDropHandler(async(t,r)=>{const s=t.dataTransfer?.getData("text/plain")||"";return xh(s)?(t.preventDefault(),await wa(r,s),!0):!1})}async function wa(e,t){try{await co(e,t)}catch(r){let s;r instanceof Kt?s=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:s=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(s,"Datasette import failed")}}function xh(e){try{const t=hn(e);return!!(t.db&&t.table)}catch{return!1}}function Dl(e,t){if(!e.has(t))return t;for(let r=2;;r++){const s=`${t} (${r})`;if(!e.has(s))return s}}async function co(e,t,r={}){const s=e.workspaceId();if(!s)throw new Error("datasette-source: no active workspace");const n=hn(t),l=await Rl(L=>e.backend.fetch(L),n,"Import",{skipPicker:r.skipTablePicker});if(l===null)return;if(l.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const c=[];let u=0;for(const L of l){const F={base:n.base,db:L.db,table:L.table,query:{}},H=await $h(e,s,F);if(H.skipped){u+=1;continue}c.push({tableId:H.tableId,ref:F,overwrite:H.overwrite,knownCount:L.count})}let m=0,$=0;const b=[],k=[],B=[];for(const L of c)try{const F=await kh(e,L.tableId,L.ref,L.overwrite,L.knownCount);m+=1,$+=F.rowCount,F.error?k.push(`${L.ref.db}/${L.ref.table} (${F.error})`):(F.hasMore||F.truncated)&&b.push(`${L.ref.db}/${L.ref.table}`)}catch(F){B.push(`${L.ref.db}/${L.ref.table}: ${F?.message??String(F)}`)}Ch(e,{imported:m,skipped:u,totalRows:$,capped:b,partial:k,failed:B,requested:l.length})}async function $h(e,t,r){const s=`${r.db}/${r.table}`,n={type:"datasette",url:`${r.base}/${encodeURIComponent(r.db)}/${encodeURIComponent(r.table)}`},o=(await e.store.tables.find()).filter(m=>m.workspaceId===t),l=o.find(m=>m.name.toLowerCase()===s.toLowerCase());let c=s;if(l){const m=await e.ui.dialogs.choice(`A table named "${s}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!m||m==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(m==="Overwrite")return await e.store.tables.patch(l.id,{origin:n,updatedAt:Date.now()}),{tableId:l.id,overwrite:!0};c=Dl(new Set(o.map($=>$.name)),s)}const u=Mr();return await e.store.tables.insert({id:u,workspaceId:t,name:c,code:jl(`${r.db}-${r.table}`),columns:[],view:"table",origin:n,updatedAt:Date.now()}),{tableId:u,overwrite:!1}}async function kh(e,t,r,s,n=null){const o=`${r.db}/${r.table}`,l=c=>e.backend.fetch(c);dn(t,!0);try{let c=[],u=n,m=!1,$=[];try{const ne=await Fs(l,r);c=ne.columns,u=u??ne.count,m=ne.typed,$=ne.pks??[]}catch{}u==null&&(u=await Al(l,r));const b=u&&u>0?Math.min(u,qt.maxImportRows):0,k=[];let B=!1,L=!1,F=0,H,G,he;for(;;){const ne=await Lr(l,r,{maxRows:Math.max(0,qt.maxImportRows-k.length),pageSize:qt.pageSize,...he?{startUrl:he}:{},onProgress:K=>{b>0&&dn(t,!0,Math.min(1,(k.length+K)/b))}});if(k.push(...ne.rows),B=B||ne.truncated,F+=ne.pages,L=ne.hasMore,H=ne.error,G=ne.nextUrl,!ne.error||!ne.nextUrl||k.length>=qt.maxImportRows||await e.ui.dialogs.choice(`Import of "${o}" paused after ${k.length.toLocaleString()} rows (${ne.error}). Datasette may be rate-limiting a large import. Wait 60 seconds and resume from where it stopped, or cancel and keep the rows imported so far (you can resume later from the table's footer)?`,["Resume in 60s","Cancel"],"Import paused — rate limited?")!=="Resume in 60s")break;dn(t,!0),e.ui.dialogs.toast(`Resuming "${o}" in 60s…`,{kind:"info",title:"Import paused"}),await ph(mh()),he=ne.nextUrl,H=void 0,G=void 0}let oe=c.length===0?zs(k):m?c:oo(c,k),V={};try{const ne=await so(l,r),pe=io(ne,oe);oe=pe.columns,V=pe.patch}catch{}V=ao(V,r.base,r.db,r.table);const J=await e.store.tables.findOne(t),ue=J?.columns??[],$e=ue.length===0,{columns:Te}=$l(ue,oe,J?.deletedColumns),Ie=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t});const g=lo(H,G,k.length,u),v=$.length>0&&J?.origin?{origin:{...J.origin,pks:$}}:{},S=$e?{columns:Te,...V,...v,importResume:g,updatedAt:Ie}:{columns:Te,...V.info?{info:V.info}:{},...v,importResume:g,updatedAt:Ie};await e.store.tables.patch(t,S);const y=e.store.rows(t);if(s){const ne=await y.find();await y.bulkRemove(ne.map(pe=>pe.id))}const x=k.map(ne=>({id:Mr(),tableId:t,data:ne,updatedAt:Ie}));return await y.bulkInsert(x),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:k.length}),{name:o,rowCount:k.length,hasMore:L,truncated:B,pages:F,count:u,error:H}}finally{dn(t,!1)}}function Ch(e,t){const r=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,s=`${t.imported} table${t.imported===1?"":"s"}`,n=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${s} (${r});${n} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.partial.length>0){e.ui.dialogs.toast(`Imported ${s} (${r}).${n} ${t.partial.length} loaded partially (stopped early — the server may have rate-limited us): ${t.partial.join(", ")}. Use Refresh to fetch the rest.`,{kind:"warning",title:"Datasette import"});return}if(t.capped.length>0){e.ui.dialogs.toast(`Imported ${s} (${r}).${n} ${t.capped.length} capped at ${qt.maxImportRows} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${s} (${r}) from Datasette.${n}`,{kind:"success",title:"Datasette import"})}async function Eh(e){const t=Wt.instance??Sh(),r=(n,o)=>e.backend.fetch(n,o),s=await t.open({initialUrl:"https://datasette.io",async onTest(n,o){const l=hn(n),c=await Pl(r,l.base,{token:o||void 0});if(l.db&&l.table){await zi(lr(r,o||void 0),l);const m=c.version?` (Datasette ${c.version})`:"";return c.writable?`Reachable${m} — table found, signed in, read-write.`:`Reachable${m} — table found, read-only (no token / not authenticated).`}if(!c.reachable)return`Unreachable: ${c.error??"no response"}`;const u=c.version?` (Datasette ${c.version})`:"";return c.writable?`Reachable${u} — signed in, read-write.`:`Reachable${u} — read-only (no token / not authenticated).`},async onConnect(n,o){const l=hn(n);l.db&&l.table&&await zi(lr(r,o||void 0),l)}});if(s)try{await Ol(e,s.url,s.token)}catch(n){const o=n instanceof Kt?n.message:n?.message??String(n);await e.ui.dialogs.alert(o,"Connect Datasette failed")}}function Sh(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function Ol(e,t,r){const s=e.workspaceId();if(!s)throw new Error("datasette-source: no active workspace");const n=hn(t),o=(b,k)=>e.backend.fetch(b,k),l=lr(o,r||void 0),c=await Pl(o,n.base,{token:r||void 0});r&&await e.store.settings.upsert({key:Il(n.base),value:r});let u;try{u=await Rl(l,n,"Connect")}catch(b){const k=b instanceof Kt?b.message:b?.message??String(b);throw new Error(`Couldn't read tables from ${_s(n.base)}: ${k}`)}if(u===null)return;if(u.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const m=[];for(const b of u){const k=await _h(e,s,n.base,b,c.writable,r);k!==null&&m.push({tableId:k,c:b})}if(m.length===0)return;const $=c.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${m.length} live table${m.length===1?"":"s"} from Datasette (${$}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:b,c:k}of m)Th(e,b,n.base,k,r)}async function _h(e,t,r,s,n,o){const l=(await e.store.tables.find()).filter(k=>k.workspaceId===t);let c=`${s.db}/${s.table}`,u=l.find(k=>{const B=k.source?.config;return k.source?.type==="datasette"&&B?.base===r&&B?.db===s.db&&B?.table===s.table});if(!u){const k=l.find(B=>B.name.toLowerCase()===c.toLowerCase());if(k){const B=await e.ui.dialogs.choice(`A table named "${c}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Connect — table already exists");if(!B||B==="Skip")return null;B==="Overwrite"?u=k:c=Dl(new Set(l.map(L=>L.name)),c)}}let m=s.pks??[];if(m.length===0){const k=lr((B,L)=>e.backend.fetch(B,L),o||void 0);try{m=await ch(k,{base:r,db:s.db,table:s.table,query:{}})}catch{m=[]}}const $=u?.id??Mr(),b={...u??{},id:$,workspaceId:t,name:c,code:jl(`${s.db}-${s.table}`),columns:u?.columns??[],view:u?.view??"table",source:{type:"datasette",writable:n,config:{base:r,db:s.db,table:s.table,pks:m}},updatedAt:Date.now()};return u?await e.store.tables.upsert(b):await e.store.tables.insert(b),$}async function Th(e,t,r,s,n){const o={base:r,db:s.db,table:s.table,query:{}},l=lr((c,u)=>e.backend.fetch(c,u),n||void 0);try{let c=[],u=!1;try{const F=await Fs(l,o);c=F.columns,u=F.typed}catch{}const{rows:m}=await Lr(l,o,{maxRows:50,pageSize:50}),$=c.length===0?zs(m):u?c:oo(c,m);if($.length===0)return;const b=await e.store.tables.findOne(t);if(!b)return;const k=b.source?.config?.pks??[];let B=$.map(F=>k.includes(F.field)?{...F,unique:!0,notnull:!0}:F),L={};try{const F=await so(l,o),H=io(F,B);B=H.columns,L=H.patch}catch{}L=ao(L,o.base,s.db,s.table),await e.store.tables.patch(t,{columns:B,...L,updatedAt:Date.now()})}catch{}}async function Ah(e,t){const r=await e.store.tables.findOne(t);if(r)try{if(r.source?.type==="datasette"){const s=e.store.rows(t);typeof s.refresh=="function"&&await s.refresh();const n=await s.find();e.ui.dialogs.toast(`Reloaded ${n.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}else r.origin?.type==="datasette"&&await Ph(e,r)}catch(s){const n=s instanceof Kt?s.message:s?.message??String(s);e.ui.dialogs.toast(`Refresh failed: ${n}`,{kind:"error",title:"Refresh"})}}async function Ph(e,t){const r=hn(t.origin.url),s=u=>e.backend.fetch(u);dn(t.id,!0);let n,o=[];try{let u=[],m=null,$=!1;try{const x=await Fs(s,r);u=x.columns,m=x.count,$=x.typed}catch{}m==null&&(m=await Al(s,r));const b=m&&m>0?Math.min(m,qt.maxImportRows):0,{rows:k,hasMore:B,truncated:L,error:F,nextUrl:H}=await Lr(s,r,{maxRows:qt.maxImportRows,pageSize:qt.pageSize,onProgress:x=>{b>0&&dn(t.id,!0,Math.min(1,x/b))}});let G=u.length===0?zs(k):$?u:oo(u,k),he={};try{const x=await so(s,r),ne=io(x,G);G=ne.columns,he=ne.patch}catch{}he=ao(he,r.base,r.db,r.table);const ie=t.columns.length===0,oe=$l(t.columns,G,t.deletedColumns);o=oe.newFields;const V=Date.now(),J=lo(F,H,k.length,m),ue=ie?{columns:oe.columns,...he,importResume:J,updatedAt:V}:{columns:oe.columns,...he.info?{info:he.info}:{},importResume:J,updatedAt:V};await e.store.tables.patch(t.id,ue);const $e=t.origin?.pks??[],Te=new Set(G.map(x=>x.field)),Ie=t.columns.map(x=>x.field).filter(x=>!Te.has(x)&&!$e.includes(x)),g=(t.deletedColumns??[]).filter(x=>Te.has(x)),v=e.store.rows(t.id),S=await v.find(),{data:y}=Ru({oldRows:S.map(x=>({data:x.data})),freshRows:k,pks:$e,userAddedFields:Ie,deletedRemoteFields:g});await v.bulkRemove(S.map(x=>x.id)),await v.bulkInsert(y.map(x=>({id:Mr(),tableId:t.id,data:x,updatedAt:V}))),n={rowCount:y.length,hasMore:B,truncated:L,error:F}}finally{dn(t.id,!1)}const l=[];n.error?l.push(`partial (${n.error})`):(n.hasMore||n.truncated)&&l.push(`capped at ${qt.maxImportRows}`),o.length>0&&l.push(`${o.length} new column${o.length===1?"":"s"}`);const c=l.length?` — ${l.join(", ")}`:"";e.ui.dialogs.toast(`Refreshed ${n.rowCount} rows from ${r.db}/${r.table}${c}.`,{kind:n.error||n.hasMore||n.truncated||o.length>0?"warning":"success",title:"Refresh"}),o.length>0&&Rh(t.id,r,o)}async function Ih(e,t){const r=await e.store.tables.findOne(t),s=r?.importResume;if(!r||!r.origin?.url||!s)return;const n=hn(r.origin.url),o=k=>e.backend.fetch(k),l=s.loadedRows,c=s.totalCount??null,u=c&&c>0?Math.min(c,qt.maxImportRows):0;dn(t,!0,u>0?Math.min(1,l/u):void 0);let m=0,$;try{const k=await Lr(o,n,{startUrl:s.nextUrl,maxRows:Math.max(0,qt.maxImportRows-l),pageSize:qt.pageSize,onProgress:F=>{u>0&&dn(t,!0,Math.min(1,(l+F)/u))}});m=k.rows.length;const B=Date.now();await e.store.rows(t).bulkInsert(k.rows.map(F=>({id:Mr(),tableId:t,data:F,updatedAt:B}))),$={error:k.error,nextUrl:k.nextUrl};const L=lo(k.error,k.nextUrl,l+m,c);await e.store.tables.patch(t,{importResume:L,updatedAt:B})}catch(k){const B=k instanceof Kt?k.message:k?.message??String(k);e.ui.dialogs.toast(`Couldn't resume ${n.db}/${n.table}: ${B}. Try again later.`,{kind:"error",title:"Resume import"});return}finally{dn(t,!1)}const b=l+m;$.error?e.ui.dialogs.toast(`Resumed ${n.db}/${n.table}: +${m} rows (${b} total) — interrupted again (${$.error}). Resume to continue.`,{kind:"warning",title:"Resume import"}):e.ui.dialogs.toast(`Finished ${n.db}/${n.table}: +${m} rows (${b} total).`,{kind:"success",title:"Resume import"})}function Rh(e,t,r){const s=r.join(", "),n=r.length!==1,o=`Refreshing ${t.db}/${t.table} revealed ${r.length} new column${n?"s":""}: ${s}. Review, reorder or hide ${n?"them":"it"} here.`;document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:e,notice:o}}))}function jl(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Mr(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Dh=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:Ol,importDatasette:co,init:vh,meta:yh},Symbol.toStringTag,{value:"Module"}));function zl(e){let t;try{t=new URL(e)}catch{return e}const r=t.hostname.toLowerCase();if(r==="github.com"||r==="www.github.com"){const s=t.pathname.split("/").filter(Boolean);if(s.length>=5&&(s[2]==="blob"||s[2]==="raw")){const n=s[0],o=s[1];let l=s.slice(3);return l.length>=3&&l[0]==="refs"&&(l[1]==="heads"||l[1]==="tags")&&(l=l.slice(2)),`https://raw.githubusercontent.com/${[n,o,...l].join("/")}`}}return e}async function Fl(e,t){const r=Number(e.headers?.get?.("content-length")),s=e.body?.getReader?.();if(s&&Number.isFinite(r)&&r>0){const n=[];let o=0;for(;;){const{done:u,value:m}=await s.read();if(u)break;m&&(n.push(m),o+=m.length,t?.(Math.min(1,o/r)))}const l=new Uint8Array(o);let c=0;for(const u of n)l.set(u,c),c+=u.length;return new TextDecoder().decode(l)}return await e.text()}const Oh={id:"url-source",name:"URL Reference",type:"source",version:"0.1.0",description:'Backs a table with a live read-only fetch of a plain CSV or JSON URL — a "reference" table whose rows are never persisted locally.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/url-source.ts"};function jh(e){typeof e.registerRowSource=="function"&&e.registerRowSource({type:"url",create:Ll}),e.ui.registerTableButton({id:"url-source:refresh",label:"Refresh",icon:"refresh",tooltip:"Re-fetch this reference from its source URL",visible:t=>t.source?.type==="url",onClick:async(t,{tableId:r})=>{try{const s=t.store.rows(r);typeof s.refresh=="function"&&await s.refresh(),t.ui.dialogs.toast("Reference refreshed.",{kind:"success",title:"Refresh"})}catch(s){t.ui.dialogs.toast(`Refresh failed: ${s.message}`,{kind:"error",title:"Refresh"})}}})}class qn extends Error{constructor(t){super(`This is a reference (read-only) table — ${t} is not permitted. Import a copy to edit.`),this.name="ReadOnlyReferenceError"}}function zh(e,t){for(const[r,s]of Object.entries(t))if(r!=="data"&&e[r]!==s)return!1;return!0}function Fh(e){const t=r=>typeof r=="object"&&r!==null&&!Array.isArray(r);if(Array.isArray(e))return e.filter(t);if(t(e)){for(const r of["rows","records","data"]){const s=e[r];if(Array.isArray(s))return s.filter(t)}for(const r of Object.values(e))if(Array.isArray(r))return r.filter(t)}return[]}function Ll(e,t){const r=e.source?.config??{},s=typeof r.url=="string"?r.url:"",n=r.format==="json"?"json":"csv",o=new Set;let l=[],c=!1,u=null;function m(k){return k.map((B,L)=>({id:`url:${L}`,tableId:e.id,data:B,updatedAt:0}))}async function $(){if(!s)throw new Error("This reference table has no URL configured.");let k;try{k=await t.backend.fetch(zl(s))}catch(L){throw new Error(`Could not reach ${s}: ${L?.message??String(L)}`)}if(!k.ok)throw new Error(`Could not load ${s}: HTTP ${k.status} ${k.statusText}`);let B;try{B=await Fl(k)}catch(L){throw new Error(`Could not read response from ${s}: ${L?.message??String(L)}`)}try{return n==="json"?Fh(JSON.parse(B)):Qn(B).rows}catch(L){throw new Error(`Could not parse ${n.toUpperCase()} from ${s}: ${L?.message??String(L)}`)}}function b(){return u||(u=(async()=>{try{const k=await $();l=m(k),c=!0;for(const B of o)B(l);return l}finally{u=null}})(),u)}return{async find(k){const B=c?l:await b();return!k||Object.keys(k).length===0?B:B.filter(L=>zh(L,k))},async findOne(k){return(c?l:await b()).find(L=>L.id===k)??null},async insert(){throw new qn("insert")},async bulkInsert(){throw new qn("insert")},async upsert(){throw new qn("upsert")},async patch(){throw new qn("update")},async remove(){throw new qn("delete")},async bulkRemove(){throw new qn("delete")},subscribe(k){return o.add(k),c?k(l):b(),()=>{o.delete(k)}},async refresh(){c=!1,l=[],await b()}}}const Lh=Object.freeze(Object.defineProperty({__proto__:null,ReadOnlyReferenceError:qn,createUrlCollection:Ll,init:jh,meta:Oh},Symbol.toStringTag,{value:"Module"})),Mh={id:"sql-export",name:"SQL Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-export.ts"};function Bh(){}async function Ml(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),s=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const n of r){const o=await e.store.rows(n.id).find();s.push(Nh(n,o),"")}return s.push("COMMIT;",""),s.join(`
`)}function Nh(e,t){const r=Fi(e.code||e.name||`table_${e.id}`),s=['  "__id" TEXT PRIMARY KEY',...e.columns.map(o=>`  ${Uh(o)}`)],n=[`DROP TABLE IF EXISTS "${r}";`,`CREATE TABLE "${r}" (`,s.join(`,
`),");"];if(t.length>0){const l=["__id",...e.columns.map(c=>c.field)].map(c=>`"${Fi(c)}"`).join(", ");for(const c of t){const u=[va(c.id),...e.columns.map(m=>va(c.data[m.field],m.type))];n.push(`INSERT INTO "${r}" (${l}) VALUES (${u.join(", ")});`)}}return n.join(`
`)}function Uh(e){const t=[`"${Fi(e.field)}"`,Hh(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function Hh(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function va(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const r=qh(e);return r===null?"NULL":fs(r)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?fs(e.toISOString()):fs(typeof e=="string"?e:JSON.stringify(e))}function qh(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?xa(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(r)return`${r[1]}${r[2]}${r[3]}`;const s=new Date(t);return Number.isFinite(s.getTime())?xa(s):null}return null}function xa(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),r=String(e.getUTCMonth()+1).padStart(2,"0"),s=String(e.getUTCDate()).padStart(2,"0");return`${t}${r}${s}`}function fs(e){return`'${e.replace(/'/g,"''")}'`}function Fi(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const Wh=Object.freeze(Object.defineProperty({__proto__:null,init:Bh,meta:Mh,serializeWorkspaceAsSql:Ml},Symbol.toStringTag,{value:"Module"})),Kh={id:"dump-export",name:"Dump Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/dump-export.ts"};function Vh(e){e.ui.registerFooterButton({id:"export:menu",label:"Export",icon:"download",tooltip:"Export the current workspace (JSON or SQL)",onClick:async(t,r)=>{const s=t.workspaceId();if(!s)return;const{AnchoredMenu:n}=await In(async()=>{const{AnchoredMenu:c}=await import("./anchored-menu-BgWf55KM.js");return{AnchoredMenu:c}},[]),o=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),l=await n.open(o,[{id:"json",label:"JSON dump (.db.json)",icon:"data_object"},{id:"sql",label:"SQL script (.sql)",icon:"storage"}]);if(l)try{if(l==="json"){const c=await Ms(t);await t.backend.saveFile(`workspace-${s}.db.json`,c,"application/json")}else if(l==="sql"){const c=await Ml(t);await t.backend.saveFile(`workspace-${s}.sql`,c,"application/sql")}}catch(c){t.ui.dialogs.toast(`Export failed: ${c.message}`,{kind:"error",title:"Export"})}}})}async function Ms(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const r=(await e.store.tables.find()).filter(l=>l.workspaceId===t),s=(await e.store.viewTemplates.find()).filter(l=>l.workspaceId===t),n=(await e.store.viewInstances.find()).filter(l=>l.workspaceId===t),o={workspaceId:t,exportedAt:Date.now(),tables:[],viewTemplates:s,viewInstances:n};for(const l of r){const c=await e.store.rows(l.id).find();o.tables.push({name:l.name,columns:l.columns,rows:c.map(u=>u.data),...l.title?{title:l.title}:{},...l.windowGeometry?{windowGeometry:l.windowGeometry}:{},...l.sortColumn?{sortColumn:l.sortColumn,sortAsc:l.sortAsc??!0}:{},...l.filters?{filters:l.filters}:{},...l.labelColumn?{labelColumn:l.labelColumn}:{},...l.info?{info:l.info}:{},...l.deletedColumns?{deletedColumns:l.deletedColumns}:{},...l.source?{source:l.source}:{},...l.origin?{origin:l.origin}:{}})}return JSON.stringify(o,null,2)}const Gh=Object.freeze(Object.defineProperty({__proto__:null,init:Vh,meta:Kh,serializeWorkspace:Ms},Symbol.toStringTag,{value:"Module"})),Yh={id:"gist-sync",name:"Gist Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/gist-sync.ts"},Xh="gist:",$a='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>';function Qh(e){e.ui.registerSettings("gist-sync","Gist Sync",[{key:"user",label:"GitHub user",type:"string",scope:"workspace",description:"GitHub username that owns the gist."},{key:"gist_id",label:"Gist ID",type:"string",scope:"workspace",description:"Leave empty to create a new gist on the first Push."},{key:"gist_token",label:"GitHub token (PAT)",type:"secret",scope:"user",description:'Personal access token with the "gist" scope. Stored on this device only (not synced).'}]),e.ui.registerFooterButton({id:"gist-sync:menu",label:"Gist",icon:$a,tooltip:"Gist sync — push, pull, share…",onClick:async(t,r)=>{const{AnchoredMenu:s}=await In(async()=>{const{AnchoredMenu:l}=await import("./anchored-menu-BgWf55KM.js");return{AnchoredMenu:l}},[]),n=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await s.open(n,[{id:"push",label:"Push",icon:"cloud_upload"},{id:"pull",label:"Pull",icon:"cloud_download"},{id:"share",label:"Share",icon:"share"},{id:"view",label:"View gist",icon:"open_in_new"}]);if(o)try{if(o==="push"||o==="pull"){const l=await s.open(n,[{id:"all",label:"Everything",icon:"sync"},{id:"data",label:"Data only (tables + rows)",icon:"table_rows"},{id:"settings",label:"Settings only (views + settings)",icon:"tune"}]);if(!l)return;const c=l;o==="push"?await rf(t,c):await Nl(t,c)}else o==="share"?await tf(t):o==="view"&&await nf(t)}catch(l){t.ui.dialogs.toast(`Gist ${o} failed: ${l.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerTableButton({id:"gist-sync:table",label:"Gist",icon:$a,tooltip:"Gist sync for this table — push, pull, view file",onClick:async(t,r)=>{const{AnchoredMenu:s}=await In(async()=>{const{AnchoredMenu:l}=await import("./anchored-menu-BgWf55KM.js");return{AnchoredMenu:l}},[]),n=r.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await s.open(n,[{id:"push",label:"Push this table",icon:"cloud_upload"},{id:"pull",label:"Pull this table",icon:"cloud_download"},{id:"view",label:"View gist file",icon:"open_in_new"}]);if(o)try{o==="push"?await sf(t,r.tableId):o==="pull"?await of(t,r.tableId):o==="view"&&await af(t,r.tableId)}catch(l){t.ui.dialogs.toast(`Gist ${o} failed: ${l.message}`,{kind:"error",title:"Gist sync"})}}})}async function Jh(e){const t=new URLSearchParams(location.hash.replace(/^#/,"")).get("gist");if(!t)return;history.replaceState(null,"",location.pathname+location.search);let r;try{r=atob(t)}catch{return}const s=Zh(r);if(!s){await e.ui.dialogs.alert("The shared gist link is invalid.","Gist sync");return}await e.ui.dialogs.confirm(`Load shared workspace from gist ${s.gistId||"(new)"} (owner: ${s.user})?

This pulls its tables into the current workspace.`,"Gist sync")&&(await uo(e,s),await Nl(e))}async function Bl(e){const t=e.workspaceId();return`${Xh}${t??"default"}`}async function Br(e){const[t,r,s]=await Promise.all([e.settings.get("gist-sync","user"),e.settings.get("gist-sync","gist_id"),e.settings.get("gist-sync","gist_token")]);if(t&&s)return{user:t,gistId:r??"",token:s};const o=(await e.store.settings.findOne(await Bl(e)))?.value;if(o?.user&&o?.token){const l={user:o.user,gistId:o.gistId??"",token:o.token};return await uo(e,l),l}return null}async function uo(e,t){await e.settings.set("gist-sync","user",t.user),await e.settings.set("gist-sync","gist_id",t.gistId),await e.settings.set("gist-sync","gist_token",t.token),await e.store.settings.upsert({key:await Bl(e),value:t})}function Zh(e){const t={};for(const r of e.split(";")){const s=r.indexOf("=");if(s<0)continue;const n=r.slice(0,s).trim(),o=r.slice(s+1).trim();n&&(t[n]=o)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function ho(e){const t=await Br(e);return t||(e.ui.dialogs.toast("Add your GitHub user and token in Settings → Gist Sync, then try again.",{kind:"warning",title:"Gist sync"}),e.ui.openSettings(),null)}function ef(e){return`user=${e.user};gist_id=${e.gistId};gist_token=${e.token}`}async function tf(e){const t=await Br(e);if(!t||!t.gistId){await e.ui.dialogs.alert("Configure a gist and Push first — there is nothing to share yet.","Gist sync");return}const s=`${location.origin+location.pathname}#gist=${encodeURIComponent(btoa(ef(t)))}`,{GistShareDialog:n}=await In(async()=>{const{GistShareDialog:o}=await import("./gist-share-dialog-B5hUNB1C.js");return{GistShareDialog:o}},[]);await n.open(s)}async function nf(e){const t=await Br(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist configured yet — Push first.","Gist sync");return}window.open(`https://gist.github.com/${t.user}/${t.gistId}`,"_blank","noopener")}async function rf(e,t="all"){const r=await ho(e);if(!r)return;const s=e.workspaceId();if(!s)throw new Error("no active workspace");const n=t!=="settings",o=t!=="data",l=(await e.store.tables.find()).filter(F=>F.workspaceId===s);if(n&&l.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const c=1e8,u=1e7,m={},$=[],b=[];if(n)for(const F of l){const H=F.source!=null?[]:await e.store.rows(F.id).find(),G=JSON.stringify(Ul(F,H),null,2),he=`${F.name} (${(G.length/1e6).toFixed(2)} MB)`;G.length>c?$.push(he):G.length>u&&b.push(he),m[`${Nr(F.name)}.table.json`]={content:G}}if($.length>0||b.length>0){const F=[];if($.length>0&&F.push(`Over Gist's 100 MB per-file limit — GitHub will REJECT these:
${$.join(`
`)}`),b.length>0&&F.push(`Large (over 10 MB) — Gist sync will be slow and less reliable:
${b.join(`
`)}`),!await e.ui.dialogs.confirm(`${F.join(`

`)}

To reduce size: remove unnecessary columns, limit the number of rows, or mark the table no-persist/no-sync.

Push anyway?`,"Gist size warning"))return}if(o){const F=(await e.store.viewTemplates.find()).filter(he=>he.workspaceId===s),H=(await e.store.viewInstances.find()).filter(he=>he.workspaceId===s),G=await e.store.settings.find();m["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:s,exportedAt:Date.now(),kind:"easydb-workspace-v1",viewTemplates:F,viewInstances:H,settings:G},null,2)}}let k;if(r.gistId){const F=await fetch(`https://api.github.com/gists/${r.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:m,description:`easyDBAccess workspace: ${s}`})});if(!F.ok)throw new Error(await Rr(F));k=await F.json()}else{const F=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${s}`,files:m})});if(!F.ok)throw new Error(await Rr(F));k=await F.json(),r.gistId=k.id,await uo(e,r)}const B=k.html_url??`https://gist.github.com/${r.user}/${k.id}`,L=t==="settings"?"settings":t==="data"?`${l.length} table${l.length===1?"":"s"} (data only)`:`${l.length} table${l.length===1?"":"s"}`;e.ui.dialogs.toast(`Pushed ${L}.  ${B}`,{kind:"success",title:"Gist sync"})}async function Nl(e,t="all"){const r=t!=="settings",s=t!=="data",n=await ho(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const o=e.workspaceId();if(!o)throw new Error("no active workspace");const l=await fetch(`https://api.github.com/gists/${n.gistId}`,{headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json"}});if(!l.ok)throw new Error(await Rr(l));const c=await l.json(),u=Object.entries(c.files).filter(([G])=>G.endsWith(".table.json")&&!G.startsWith("_easydb"));if(r&&u.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const m=(await e.store.tables.find()).filter(G=>G.workspaceId===o),$=new Map(m.map(G=>[G.name.toLowerCase(),G]));let b=0;const k=[],B=new Map;if(r){const{TopProgress:G}=await In(async()=>{const{TopProgress:ie}=await Promise.resolve().then(()=>tc);return{TopProgress:ie}},void 0),he=G.begin("Pulling from gist…");try{for(const[ie,[oe,V]]of u.entries())try{const J=await Ts(V),ue=JSON.parse(J);if(!ue.name||!Array.isArray(ue.columns))throw new Error("unexpected file shape (missing name/columns)");let $e;const Te=$.get(ue.name.toLowerCase());if(Te){if($e=await e.store.tables.patch(Te.id,{title:ue.title,columns:ue.columns,...Li(ue),updatedAt:Date.now()}),$e.source==null){const Ie=e.store.rows(Te.id),g=await Ie.find();await Ie.bulkRemove(g.map(v=>v.id))}}else $e=await e.store.tables.insert({id:Mi(),workspaceId:o,name:ue.name,title:ue.title,code:Nr(ue.name),columns:ue.columns,view:ue.view??"table",...Li(ue),updatedAt:Date.now()});if($e.source==null){const Ie=(ue.rows??[]).map(g=>({id:Mi(),tableId:$e.id,data:g,updatedAt:Date.now()}));await e.store.rows($e.id).bulkInsert(Ie)}B.set(ue.name,$e.id),b++}catch(J){k.push({file:oe,error:J.message})}finally{he.fraction((ie+1)/u.length)}}finally{he.done()}}let L=0,F="";const H=s?c.files["_easydb.workspace.json"]:void 0;if(H)try{const G=await Ts(H),he=JSON.parse(G),ie=he.viewTemplates??[],oe=he.viewInstances??[],V=he.settings??[];for(const J of ie)await e.store.viewTemplates.upsert({...J,workspaceId:o});for(const J of oe){let ue;J.tableName&&(ue=B.get(J.tableName)??$.get(J.tableName)?.id),ue??=J.tableId,ue&&(await e.store.viewInstances.upsert({...J,workspaceId:o,tableId:ue}),L++)}for(const J of V)await e.store.settings.upsert(J)}catch(G){F=`Workspace metadata import failed: ${G.message}`}if(k.length>0){const G=k.map(he=>`• ${he.file}: ${he.error}`).join(`
`);e.ui.dialogs.toast(`Pulled ${b} of ${u.length} tables. ${k.length} failed:
${G}${F?`
${F}`:""}`,{kind:"warning",title:"Gist sync"})}else{const G=L>0?` (+${L} views)`:"",he=t==="settings"?`Pulled settings${G}.`:`Pulled ${b} table${b===1?"":"s"}.${G}`;e.ui.dialogs.toast(he,{kind:"success",title:"Gist sync"}),F&&e.ui.dialogs.toast(F,{kind:"warning",title:"Gist sync"})}document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function sf(e,t){const r=await ho(e);if(!r)return;if(!r.gistId){await e.ui.dialogs.alert("No gist yet — use the main Gist button to Push the whole workspace first.","Gist sync");return}const s=await e.store.tables.findOne(t);if(!s)return;const n=s.source!=null?[]:await e.store.rows(t).find(),o=JSON.stringify(Ul(s,n),null,2),l={[`${Nr(s.name)}.table.json`]:{content:o}},c=await fetch(`https://api.github.com/gists/${r.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:l})});if(!c.ok)throw new Error(await Rr(c));e.ui.dialogs.toast(`Pushed "${s.name}" to gist.`,{kind:"success",title:"Gist sync"})}async function of(e,t){const r=await Br(e);if(!r||!r.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const s=await e.store.tables.findOne(t);if(!s)return;const n=`${Nr(s.name)}.table.json`,o=await fetch(`https://api.github.com/gists/${r.gistId}`,{headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)throw new Error(await Rr(o));const c=(await o.json()).files[n];if(!c){await e.ui.dialogs.alert(`No file "${n}" in the gist for this table.`,"Gist sync");return}const u=await Ts(c),m=JSON.parse(u);if(!m.name||!Array.isArray(m.columns))throw new Error("unexpected file shape (missing name/columns)");if((await e.store.tables.patch(t,{title:m.title,columns:m.columns,...Li(m),updatedAt:Date.now()})).source==null){const b=e.store.rows(t),k=await b.find();await b.bulkRemove(k.map(L=>L.id));const B=(m.rows??[]).map(L=>({id:Mi(),tableId:t,data:L,updatedAt:Date.now()}));await b.bulkInsert(B)}e.ui.dialogs.toast(`Pulled "${s.name}" from gist.`,{kind:"success",title:"Gist sync"})}async function af(e,t){const r=await Br(e);if(!r||!r.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const s=await e.store.tables.findOne(t);if(!s)return;const n=`file-${Nr(s.name)}-table-json`;window.open(`https://gist.github.com/${r.user}/${r.gistId}#${n}`,"_blank","noopener")}function Ul(e,t){const r=e.columns.map(n=>n.field),s=e.source!=null;return{name:e.name,title:e.title,columns:e.columns,view:e.view,windowGeometry:e.windowGeometry,sortColumn:e.sortColumn,sortAsc:e.sortAsc,filters:e.filters,labelColumn:e.labelColumn,deletedColumns:e.deletedColumns,info:e.info,source:e.source,origin:e.origin,rows:s?[]:t.map(n=>{const o={};for(const l of r)o[l]=n.data[l];return o})}}function Li(e){const t={};return e.view!==void 0&&(t.view=e.view),e.windowGeometry&&(t.windowGeometry=e.windowGeometry),e.sortColumn!==void 0&&(t.sortColumn=e.sortColumn),e.sortAsc!==void 0&&(t.sortAsc=e.sortAsc),e.filters!==void 0&&(t.filters=e.filters),e.labelColumn!==void 0&&(t.labelColumn=e.labelColumn),e.deletedColumns!==void 0&&(t.deletedColumns=e.deletedColumns),e.info!==void 0&&(t.info=e.info),e.source!==void 0&&(t.source=e.source),e.origin!==void 0&&(t.origin=e.origin),t}async function Ts(e,t=r=>fetch(r)){if(!e.truncated)return e.content;if(!e.raw_url)throw new Error("GitHub truncated this file but returned no raw_url");const r=await t(e.raw_url);if(!r.ok)throw new Error(`raw fetch failed: ${r.status} ${r.statusText}`);return r.text()}async function Rr(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}function Nr(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Mi(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const lf=Object.freeze(Object.defineProperty({__proto__:null,fetchGistFileContent:Ts,init:Qh,load:Jh,meta:Yh},Symbol.toStringTag,{value:"Module"})),Hl="server-sync:url";function ql(e){return`server-sync:etag:${e}`}async function Wl(e){const r=(await e.store.settings.findOne(Hl))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}async function cf(e,t){await e.store.settings.upsert({key:Hl,value:t.replace(/\/+$/,"")})}async function Kl(e,t){const s=(await e.store.settings.findOne(ql(t)))?.value;return typeof s=="string"?s:null}async function Yn(e,t,r){await e.store.settings.upsert({key:ql(t),value:r})}function Bs(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function ka(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function Vl(e,t,r){const s=zr(r,t),n=(await e.store.tables.find()).filter(l=>l.workspaceId===t);for(const l of n){const c=e.store.rows(l.id),u=await c.find();await c.bulkRemove(u.map(m=>m.id)),await e.store.tables.remove(l.id)}let o=0;for(const l of s){const c=Ca(),u=await e.store.tables.insert({id:c,workspaceId:t,name:l.name,code:Gl(l.name),columns:l.columns,view:"table",...l.windowGeometry?{windowGeometry:l.windowGeometry}:{},...l.sortColumn?{sortColumn:l.sortColumn,sortAsc:l.sortAsc??!0}:{},updatedAt:Date.now()}),m=l.rows.map($=>({id:Ca(),tableId:u.id,data:$,updatedAt:Date.now()}));await e.store.rows(u.id).bulkInsert(m),o++}return o}function Gl(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Ca(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const df={id:"server-sync",name:"Server Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/server-sync.ts"};function uf(e){e.ui.registerSettings("server-sync","Server Sync",[{key:"url",label:"Server URL",type:"string",scope:"workspace",description:"Base URL of the sync server, e.g. http://localhost:3000"}]),e.ui.registerFooterButton({id:"server-sync:menu",label:"Sync",icon:"cloud_sync",tooltip:"Server sync — push or pull this workspace",onClick:async(t,r)=>{const{AnchoredMenu:s}=await In(async()=>{const{AnchoredMenu:l}=await import("./anchored-menu-BgWf55KM.js");return{AnchoredMenu:l}},[]),n=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await s.open(n,[{id:"push",label:"Push (↑)",icon:"cloud_upload"},{id:"pull",label:"Pull (↓)",icon:"cloud_download"}]);if(o)try{o==="push"?await hf(t):o==="pull"&&await ff(t)}catch(l){t.ui.dialogs.toast(`${o==="push"?"Push":"Pull"} failed: ${l.message}`,{kind:"error",title:"Server sync"})}}})}async function hf(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await Yl(e);if(!r)return;const s=await Ms(e),n=await Kl(e,t),o={"Content-Type":"application/json"};n&&(o["If-Match"]=`"${n}"`);let l=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:o,body:s});if(l.status===412){const u=await l.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){u.currentEtag&&await Yn(e,t,u.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}l=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:s})}if(!l.ok)throw new Error(await Xl(l));const c=Bs(l.headers.get("ETag"));c&&await Yn(e,t,c),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${r}.`,{kind:"success",title:"Server sync"})}async function ff(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await Yl(e);if(!r||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const n=await fetch(`${r}/sync/${encodeURIComponent(t)}`);if(n.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!n.ok)throw new Error(await Xl(n));const o=Bs(n.headers.get("ETag")),l=await n.json(),c=await Vl(e,t,l);o&&await Yn(e,t,o),e.ui.dialogs.toast(`Pulled ${c} table${c===1?"":"s"} from ${r}.`,{kind:"success",title:"Server sync"})}async function Yl(e){const t=await Wl(e);if(t)return t;const r=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!r)return null;try{new URL(r)}catch{return await e.ui.dialogs.alert(`"${r}" is not a valid URL.`,"Server sync"),null}return await cf(e,r),r.replace(/\/+$/,"")}async function Xl(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const pf=Object.freeze(Object.defineProperty({__proto__:null,init:uf,meta:df},Symbol.toStringTag,{value:"Module"})),mf={id:"new-table",name:"New Table",type:"ui",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/new-table-button.ts"};function gf(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const bf=Object.freeze(Object.defineProperty({__proto__:null,init:gf,meta:mf},Symbol.toStringTag,{value:"Module"})),yf={id:"core-renderers",name:"Core Renderers",type:"cell-renderer",version:"0.1.0",description:"Built-in cell renderers: date, datetime, boolean, script.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/core-renderers.ts",fixed:!0};function wf(e){customElements.get("cell-date")||customElements.define("cell-date",vf),customElements.get("cell-datetime")||customElements.define("cell-datetime",xf),customElements.get("cell-boolean")||customElements.define("cell-boolean",$f),customElements.get("cell-script")||customElements.define("cell-script",Cf),e.ui.registerCellRenderer("date","cell-date"),e.ui.registerCellRenderer("datetime","cell-datetime"),e.ui.registerCellRenderer("boolean","cell-boolean"),e.ui.registerCellRenderer("script","cell-script")}class vf extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}set readonly(t){const r=!!t;this._readonly!==r&&(this._readonly=r,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._readonly){this.textContent=Sa(this._value);return}const t=document.createElement("input");t.type="date",t.value=Sa(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class xf extends HTMLElement{constructor(){super(...arguments),this._value="",this._readonly=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}set readonly(t){const r=!!t;this._readonly!==r&&(this._readonly=r,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){if(this.innerHTML="",this._readonly){this.textContent=_a(this._value).replace("T"," ");return}const t=document.createElement("input");t.type="datetime-local",t.value=_a(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class $f extends HTMLElement{constructor(){super(...arguments),this._value=!1,this._readonly=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}set readonly(t){const r=!!t;this._readonly!==r&&(this._readonly=r,this.render())}get readonly(){return this._readonly}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");if(t.type="checkbox",t.checked=kf(this._value),this._readonly){t.disabled=!0,t.style.cssText="transform:translateY(1px)",this.append(t);return}t.style.cssText="transform:translateY(1px);cursor:pointer",t.addEventListener("change",()=>this.commit(t.checked)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function kf(e){return e===!0||e==="true"||e===1||e==="1"}class Cf extends HTMLElement{constructor(){super(...arguments),this._column=null,this._row={}}set column(t){this._column=t,this.render()}get column(){return this._column}set row(t){this._row=t??{},this.render()}get row(){return this._row}set value(t){}get value(){}connectedCallback(){this.render()}render(){this.innerHTML="";const t=this._column?.script;if(!t||!t.trim()){const o=document.createElement("span");o.textContent="(no script)",o.style.cssText="color:#9ca3af;font-style:italic",this.append(o);return}let r;try{r=Ef(t)}catch(o){this.append($i("compile error",o));return}let s;try{s=r(this._row)}catch(o){this.append($i("runtime error",o));return}if(typeof s!="string"){this.append($i("render(row) did not return a string",null));return}const n=document.createElement("span");n.style.cssText="display:inline-block;width:100%",n.innerHTML=s,this.append(n)}}const Ea=new Map;function Ef(e){const t=Ea.get(e);if(t)return t;const r=new Function("row",`${e}
return render(row);`);return Ea.set(e,r),r}function $i(e,t){const r=document.createElement("span");if(r.textContent=`⚠ ${e}`,r.style.cssText="color:#b91c1c;font-size:0.8em;font-family:ui-monospace,SFMono-Regular,monospace",t){const s=t instanceof Error?t.message:String(t);r.title=s}return r}function Sa(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function _a(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const s=new Date(t);if(Number.isNaN(s.getTime()))return"";const n=s.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}const Sf=Object.freeze(Object.defineProperty({__proto__:null,init:wf,meta:yf},Symbol.toStringTag,{value:"Module"})),_f={id:"cell-color",name:"Cell Color",type:"cell-renderer",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2h2.3c2 0 3.6-1.6 3.6-3.6C20.7 6 16.9 3 12 3z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="11" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-color.ts"};function Tf(e){customElements.get("cell-color")||customElements.define("cell-color",Af),e.ui.registerCellRenderer("color","cell-color")}class Af extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,r,s){this.value=s}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const r=document.createElement("input");r.type="color",r.value=t,r.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",r.addEventListener("change",()=>this.commit(r.value)),this.append(r)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Pf=Object.freeze(Object.defineProperty({__proto__:null,init:Tf,meta:_f},Symbol.toStringTag,{value:"Module"})),If={id:"cell-image",name:"Cell Image",type:"cell-renderer",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-image.ts"};function Rf(e){customElements.get("cell-image")||customElements.define("cell-image",Df),e.ui.registerCellRenderer("image","cell-image")}class Df extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("span");if(t.style.cssText="display:inline-flex;align-items:center;gap:0.4rem",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const s=document.createElement("img");s.src=this._value,s.alt="",s.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(s)}else{const s=document.createElement("span");s.style.color="#9ca3af",s.textContent="no image",t.append(s);const n=document.createElement("button");n.type="button",n.textContent="upload",n.style.cssText="padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",n.addEventListener("click",()=>this.pickFile()),t.append(n)}this.append(t)}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const r=t.files?.[0];if(!r)return;const s=new FileReader;s.onload=()=>this.commit(String(s.result)),s.readAsDataURL(r)}),t.click()}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const Of=Object.freeze(Object.defineProperty({__proto__:null,init:Rf,meta:If},Symbol.toStringTag,{value:"Module"}));/**
 * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu
 * @version v4.16.1
 * @homepage https://jspanel.de/
 * @license MIT
 * @author Stefan Sträßer - info@jspanel.de
 * @author of dialog extension: Michael Daumling - michael@terrapinlogo.com
 * @github https://github.com/Flyer53/jsPanel4.git
 */let z={version:"4.16.1",date:"2022-11-03 09:18",ajaxAlwaysCallbacks:[],autopositionSpacing:4,closeOnEscape:(()=>{document.addEventListener("keydown",e=>{(e.key==="Escape"||e.code==="Escape"||e.key==="Esc")&&z.getPanels(t=>t.classList.contains("jsPanel")).some(t=>t.options.closeOnEscape?typeof t.options.closeOnEscape=="function"?t.options.closeOnEscape.call(t,t):(t.close(null,!0),!0):!1)},!1)})(),defaults:{boxShadow:3,container:"window",contentSize:{width:"400px",height:"200px"},dragit:{cursor:"move",handles:".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",opacity:.8,disableOnMaximized:!0},header:!0,headerTitle:"jsPanel",headerControls:{size:"md"},iconfont:void 0,maximizedMargin:0,minimizeTo:"default",paneltype:"standard",position:{my:"center",at:"center"},resizeit:{handles:"n, e, s, w, ne, se, sw, nw",minWidth:128,minHeight:38},theme:"default"},defaultAutocloseConfig:{time:"8s",progressbar:!0},defaultSnapConfig:{sensitivity:70,trigger:"panel",active:"both"},extensions:{},globalCallbacks:!1,icons:{close:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>',maximize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>',normalize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>',minimize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>',smallify:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>'},idCounter:0,isIE:document.documentMode||!1,pointerdown:"onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],pointermove:"onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],pointerup:"onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"],polyfills:(()=>{Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e==null)throw new TypeError("Cannot convert first argument to object");let t=Object(e);for(let r=1;r<arguments.length;r++){let s=arguments[r];if(s==null)continue;s=Object(s);let n=Object.keys(Object(s));for(let o=0,l=n.length;o<l;o++){let c=n[o],u=Object.getOwnPropertyDescriptor(s,c);u!==void 0&&u.enumerable&&(t[c]=s[c])}}return t}}),Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),r=t.length,s=new Array(r);r--;)s[r]=[t[r],e[t[r]]];return s}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(let r=0;r<this.length;r++)e.call(t,this[r],r,this)}),(function(e){e.forEach(function(t){t.append=t.append||function(){let r=Array.prototype.slice.call(arguments),s=document.createDocumentFragment();r.forEach(function(n){let o=n instanceof Node;s.appendChild(o?n:document.createTextNode(String(n)))}),this.appendChild(s)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){let t=(this.document||this.ownerDocument).querySelectorAll(e),r,s=this;do for(r=t.length;--r>=0&&t.item(r)!==s;);while(r<0&&(s=s.parentElement));return s}),(function(){if(typeof window.CustomEvent=="function")return!1;function e(t,r){r=r||{bubbles:!1,cancelable:!1,detail:void 0};let s=document.createEvent("CustomEvent");return s.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),s}e.prototype=window.Event.prototype,window.CustomEvent=e})(),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(t===void 0||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var r=t>0?t|0:0;return this.substring(r,r+e.length)===e}}),String.prototype.includes||(String.prototype.includes=function(e,t){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return t===void 0&&(t=0),this.indexOf(e,t)!==-1}),String.prototype.repeat||(String.prototype.repeat=function(e){if(this==null)throw new TypeError("can't convert "+this+" to object");var t=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),t.length==0||e==0)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,r-t.length),t}),Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw new TypeError('"this" is null or not defined');let r=Object(this),s=r.length>>>0;if(s===0)return!1;let n=t|0,o=Math.max(n>=0?n:s-Math.abs(n),0);function l(c,u){return c===u||typeof c=="number"&&typeof u=="number"&&isNaN(c)&&isNaN(u)}for(;o<s;){if(l(r[o],e))return!0;o++}return!1}})})(),ziBase:100,colorFilledLight:.81,colorFilledDark:.08,colorFilled:0,colorBrightnessThreshold:.55,colorNames:{default:"b0bec5",secondary:"b0bec5",primary:"01579b",info:"039be5",success:"2e7d32",warning:"f57f17",danger:"dd2c00",light:"e0e0e0",dark:"263238",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",grey50:"fafafa",grey100:"f5f5f5",grey200:"eeeeee",grey300:"e0e0e0",grey400:"bdbdbd",grey500:"9e9e9e",grey600:"757575",grey700:"616161",grey800:"424242",grey900:"212121",gray50:"fafafa",gray100:"f5f5f5",gray200:"eeeeee",gray300:"e0e0e0",gray400:"bdbdbd",gray500:"9e9e9e",gray600:"757575",gray700:"616161",gray800:"424242",gray900:"212121",bluegrey50:"eceff1",bluegrey100:"CFD8DC",bluegrey200:"B0BEC5",bluegrey300:"90A4AE",bluegrey400:"78909C",bluegrey500:"607D8B",bluegrey600:"546E7A",bluegrey700:"455A64",bluegrey800:"37474F",bluegrey900:"263238",bluegray50:"eceff1",bluegray100:"CFD8DC",bluegray200:"B0BEC5",bluegray300:"90A4AE",bluegray400:"78909C",bluegray500:"607D8B",bluegray600:"546E7A",bluegray700:"455A64",bluegray800:"37474F",bluegray900:"263238",red50:"FFEBEE",red100:"FFCDD2",red200:"EF9A9A",red300:"E57373",red400:"EF5350",red500:"F44336",red600:"E53935",red700:"D32F2F",red800:"C62828",red900:"B71C1C",reda100:"FF8A80",reda200:"FF5252",reda400:"FF1744",reda700:"D50000",pink50:"FCE4EC",pink100:"F8BBD0",pink200:"F48FB1",pink300:"F06292",pink400:"EC407A",pink500:"E91E63",pink600:"D81B60",pink700:"C2185B",pink800:"AD1457",pink900:"880E4F",pinka100:"FF80AB",pinka200:"FF4081",pinka400:"F50057",pinka700:"C51162",purple50:"F3E5F5",purple100:"E1BEE7",purple200:"CE93D8",purple300:"BA68C8",purple400:"AB47BC",purple500:"9C27B0",purple600:"8E24AA",purple700:"7B1FA2",purple800:"6A1B9A",purple900:"4A148C",purplea100:"EA80FC",purplea200:"E040FB",purplea400:"D500F9",purplea700:"AA00FF",deeppurple50:"EDE7F6",deeppurple100:"D1C4E9",deeppurple200:"B39DDB",deeppurple300:"9575CD",deeppurple400:"7E57C2",deeppurple500:"673AB7",deeppurple600:"5E35B1",deeppurple700:"512DA8",deeppurple800:"4527A0",deeppurple900:"311B92",deeppurplea100:"B388FF",deeppurplea200:"7C4DFF",deeppurplea400:"651FFF",deeppurplea700:"6200EA",indigo50:"E8EAF6",indigo100:"C5CAE9",indigo200:"9FA8DA",indigo300:"7986CB",indigo400:"5C6BC0",indigo500:"3F51B5",indigo600:"3949AB",indigo700:"303F9F",indigo800:"283593",indigo900:"1A237E",indigoa100:"8C9EFF",indigoa200:"536DFE",indigoa400:"3D5AFE",indigoa700:"304FFE",blue50:"E3F2FD",blue100:"BBDEFB",blue200:"90CAF9",blue300:"64B5F6",blue400:"42A5F5",blue500:"2196F3",blue600:"1E88E5",blue700:"1976D2",blue800:"1565C0",blue900:"0D47A1",bluea100:"82B1FF",bluea200:"448AFF",bluea400:"2979FF",bluea700:"2962FF",lightblue50:"E1F5FE",lightblue100:"B3E5FC",lightblue200:"81D4FA",lightblue300:"4FC3F7",lightblue400:"29B6F6",lightblue500:"03A9F4",lightblue600:"039BE5",lightblue700:"0288D1",lightblue800:"0277BD",lightblue900:"01579B",lightbluea100:"80D8FF",lightbluea200:"40C4FF",lightbluea400:"00B0FF",lightbluea700:"0091EA",cyan50:"E0F7FA",cyan100:"B2EBF2",cyan200:"80DEEA",cyan300:"4DD0E1",cyan400:"26C6DA",cyan500:"00BCD4",cyan600:"00ACC1",cyan700:"0097A7",cyan800:"00838F",cyan900:"006064",cyana100:"84FFFF",cyana200:"18FFFF",cyana400:"00E5FF",cyana700:"00B8D4",teal50:"E0F2F1",teal100:"B2DFDB",teal200:"80CBC4",teal300:"4DB6AC",teal400:"26A69A",teal500:"009688",teal600:"00897B",teal700:"00796B",teal800:"00695C",teal900:"004D40",teala100:"A7FFEB",teala200:"64FFDA",teala400:"1DE9B6",teala700:"00BFA5",green50:"E8F5E9",green100:"C8E6C9",green200:"A5D6A7",green300:"81C784",green400:"66BB6A",green500:"4CAF50",green600:"43A047",green700:"388E3C",green800:"2E7D32",green900:"1B5E20",greena100:"B9F6CA",greena200:"69F0AE",greena400:"00E676",greena700:"00C853",lightgreen50:"F1F8E9",lightgreen100:"DCEDC8",lightgreen200:"C5E1A5",lightgreen300:"AED581",lightgreen400:"9CCC65",lightgreen500:"8BC34A",lightgreen600:"7CB342",lightgreen700:"689F38",lightgreen800:"558B2F",lightgreen900:"33691E",lightgreena100:"CCFF90",lightgreena200:"B2FF59",lightgreena400:"76FF03",lightgreena700:"64DD17",lime50:"F9FBE7",lime100:"F0F4C3",lime200:"E6EE9C",lime300:"DCE775",lime400:"D4E157",lime500:"CDDC39",lime600:"C0CA33",lime700:"AFB42B",lime800:"9E9D24",lime900:"827717",limea100:"F4FF81",limea200:"EEFF41",limea400:"C6FF00",limea700:"AEEA00",yellow50:"FFFDE7",yellow100:"FFF9C4",yellow200:"FFF59D",yellow300:"FFF176",yellow400:"FFEE58",yellow500:"FFEB3B",yellow600:"FDD835",yellow700:"FBC02D",yellow800:"F9A825",yellow900:"F57F17",yellowa100:"FFFF8D",yellowa200:"FFFF00",yellowa400:"FFEA00",yellowa700:"FFD600",amber50:"FFF8E1",amber100:"FFECB3",amber200:"FFE082",amber300:"FFD54F",amber400:"FFCA28",amber500:"FFC107",amber600:"FFB300",amber700:"FFA000",amber800:"FF8F00",amber900:"FF6F00",ambera100:"FFE57F",ambera200:"FFD740",ambera400:"FFC400",ambera700:"FFAB00",orange50:"FFF3E0",orange100:"FFE0B2",orange200:"FFCC80",orange300:"FFB74D",orange400:"FFA726",orange500:"FF9800",orange600:"FB8C00",orange700:"F57C00",orange800:"EF6C00",orange900:"E65100",orangea100:"FFD180",orangea200:"FFAB40",orangea400:"FF9100",orangea700:"FF6D00",deeporange50:"FBE9E7",deeporange100:"FFCCBC",deeporange200:"FFAB91",deeporange300:"FF8A65",deeporange400:"FF7043",deeporange500:"FF5722",deeporange600:"F4511E",deeporange700:"E64A19",deeporange800:"D84315",deeporange900:"BF360C",deeporangea100:"FF9E80",deeporangea200:"FF6E40",deeporangea400:"FF3D00",deeporangea700:"DD2C00",brown50:"EFEBE9",brown100:"D7CCC8",brown200:"BCAAA4",brown300:"A1887F",brown400:"8D6E63",brown500:"795548",brown600:"6D4C41",brown700:"5D4037",brown800:"4E342E",brown900:"3E2723","mdb-default":"2BBBAD","mdb-default-dark":"00695c","mdb-primary":"4285F4","mdb-primary-dark":"0d47a1","mdb-secondary":"aa66cc","mdb-secondary-dark":"9933CC","mdb-danger":"ff4444","mdb-danger-dark":"CC0000","mdb-warning":"ffbb33","mdb-warning-dark":"FF8800","mdb-success":"00C851","mdb-success-dark":"007E33","mdb-info":"33b5e5","mdb-info-dark":"0099CC","mdb-elegant":"2E2E2E","mdb-elegant-dark":"212121","mdb-stylish":"4B515D","mdb-stylish-dark":"3E4551","mdb-unique":"3F729B","mdb-unique-dark":"1C2331","mdb-special":"37474F","mdb-special-dark":"263238"},errorReporting:1,modifier:!1,helper:(()=>{document.addEventListener("keydown",e=>z.modifier=e),document.addEventListener("keyup",()=>z.modifier=!1)})(),usePointerEvents(e=!0){e?(this.pointerdown="onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"]):(this.pointerdown="ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="ontouchend"in window?["touchend","mouseup"]:["mouseup"])},pOcontainer(e){if(e==="window")return document.body;if(typeof e=="string"){let t=document.querySelectorAll(e);return t.length&&t.length>0?t:!1}else{if(e.nodeType===1)return e;if(e.length)return e[0]}return!1},pOcontainment(e){let t=e;if(typeof e=="function"&&(t=e()),typeof t=="number")return[t,t,t,t];if(Array.isArray(t)){if(t.length===1)return[t[0],t[0],t[0],t[0]];if(t.length===2)return t.concat(t);t.length===3&&(t[3]=t[1])}return t},pOsize(e,t){let r=t||this.defaults.contentSize;const s=e.parentElement;if(typeof r=="string"){const n=r.trim().split(" ");r={},r.width=n[0],n.length===2?r.height=n[1]:r.height=n[0]}else r.width&&!r.height?r.height=r.width:r.height&&!r.width&&(r.width=r.height);if(String(r.width).match(/^[\d.]+$/gi))r.width+="px";else if(typeof r.width=="string"&&r.width.endsWith("%"))if(s===document.body)r.width=window.innerWidth*(parseFloat(r.width)/100)+"px";else{const n=window.getComputedStyle(s),o=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth);r.width=(parseFloat(n.width)-o)*(parseFloat(r.width)/100)+"px"}else typeof r.width=="function"&&(r.width=r.width.call(e,e),(typeof r.width=="number"||typeof r.width=="string"&&r.width.match(/^[\d.]+$/gi))&&(r.width+="px"));if(String(r.height).match(/^[\d.]+$/gi))r.height+="px";else if(typeof r.height=="string"&&r.height.endsWith("%"))if(s===document.body)r.height=window.innerHeight*(parseFloat(r.height)/100)+"px";else{const n=window.getComputedStyle(s),o=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth);r.height=(parseFloat(n.height)-o)*(parseFloat(r.height)/100)+"px"}else typeof r.height=="function"&&(r.height=r.height.call(e,e),(typeof r.height=="number"||typeof r.height=="string"&&r.height.match(/^[\d.]+$/gi))&&(r.height+="px"));return r},pOborder(e){let t=[],r=e.trim().replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," ").split(" ");return r.forEach((s,n)=>{(s.startsWith("--")||s.startsWith("var"))&&(r[n]=z.getCssVariableValue(s))}),r.forEach(s=>{z.colorNames[s]?t[2]="#"+z.colorNames[s]:s.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/)?t[1]=s:s.match(/(thin|medium|thick)|(\d*\.?\d*(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vmax|vmin|vb|vi|px|cm|mm|Q|in|pc|pt))/)?t[0]=s:t[2]=s}),t[0]||(t[0]="medium"),t[1]||(t[1]="solid"),t[2]||(t[2]=""),t},pOheaderControls(e){if(typeof e=="string"){let t={},r=e.toLowerCase(),s=r.match(/xl|lg|md|sm|xs/),n=r.match(/closeonly|none/);return s&&(t.size=s[0]),n&&(t=Object.assign({},t,{maximize:"remove",normalize:"remove",minimize:"remove",smallify:"remove"}),n[0]==="none"&&(t.close="remove")),Object.assign({},this.defaults.headerControls,t)}else return Object.assign({},this.defaults.headerControls,e)},pOtheme(e){e=e.trim();let t,r="";if(e.match(/^(rgb|hsl|var)/)){let s=e.indexOf(")");t=e.slice(0,s+1).replace(/\s+/g,""),t.startsWith("var")&&(t=z.getCssVariableValue(t)),r=e.slice(s+1,e.length).trim()}else if(e.match(/^(#|\w|--)/)){let s=e.indexOf(" ");s>0?(t=e.slice(0,s+1).replace(/\s+/g,""),r=e.slice(s+1,e.length).trim()):t=e,t.startsWith("--")&&(t=z.getCssVariableValue(t))}if(t.match(/^([\da-f]{3}|[\da-f]{6})$/gi)&&(t="#"+t),r.startsWith("fillcolor")){let s=r.indexOf(" ");r=r.slice(s+1,r.length).trim().replace(/\s+/g,""),r.match(/^([\da-f]{3}|[\da-f]{6})$/gi)?r="#"+r:z.colorNames[r]?r="#"+z.colorNames[r]:r.match(/^(--|var)/)?r=z.getCssVariableValue(r):r="#fff"}return{color:t,colors:!1,filling:r}},color(e){let t=e.toLowerCase(),r,s,n,o,l,c,u,m,$,b={};const k=/^#?([\da-f]{3}|[\da-f]{6})$/gi,B=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,L=/^hsla?\((\d{1,3}),(\d{1,3}%),(\d{1,3}%),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,F=this.colorNames;return F[t]&&(t=F[t]),t.match(k)!==null?(t=t.replace("#",""),t.length%2===1?(r=t.slice(0,1).repeat(2),s=t.slice(1,2).repeat(2),n=t.slice(2,3).repeat(2),b.rgb={r:parseInt(r,16),g:parseInt(s,16),b:parseInt(n,16)},b.hex=`#${r}${s}${n}`):(b.rgb={r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)},b.hex=`#${t}`),$=this.rgbToHsl(b.rgb.r,b.rgb.g,b.rgb.b),b.hsl=$,b.rgb.css=`rgb(${b.rgb.r},${b.rgb.g},${b.rgb.b})`):t.match(B)?(u=B.exec(t),b.rgb={css:t,r:u[1],g:u[2],b:u[3]},b.hex=this.rgbToHex(u[1],u[2],u[3]),$=this.rgbToHsl(u[1],u[2],u[3]),b.hsl=$):t.match(L)?(u=L.exec(t),o=u[1]/360,l=u[2].slice(0,u[2].length-1)/100,c=u[3].slice(0,u[3].length-1)/100,m=this.hslToRgb(o,l,c),b.rgb={css:`rgb(${m[0]},${m[1]},${m[2]})`,r:m[0],g:m[1],b:m[2]},b.hex=this.rgbToHex(b.rgb.r,b.rgb.g,b.rgb.b),b.hsl={css:`hsl(${u[1]},${u[2]},${u[3]})`,h:u[1],s:u[2],l:u[3]}):(b.hex="#f5f5f5",b.rgb={css:"rgb(245,245,245)",r:245,g:245,b:245},b.hsl={css:"hsl(0,0%,96%)",h:0,s:"0%",l:"96%"}),b},calcColors(e){const t=this.colorBrightnessThreshold,r=this.color(e),s=this.lighten(e,this.colorFilledLight),n=this.darken(e,this.colorFilled),o=this.perceivedBrightness(e)<=t?"#ffffff":"#000000",l=this.perceivedBrightness(s)<=t?"#ffffff":"#000000",c=this.perceivedBrightness(n)<=t?"#ffffff":"#000000",u=this.lighten(e,this.colorFilledDark),m=this.perceivedBrightness(u)<=t?"#ffffff":"#000000";return[r.hsl.css,s,n,o,l,c,u,m]},darken(e,t){const r=this.color(e).hsl,s=parseFloat(r.l),n=Math.round(s-s*t)+"%";return`hsl(${r.h},${r.s},${n})`},lighten(e,t){const r=this.color(e).hsl,s=parseFloat(r.l),n=Math.round(s+(100-s)*t)+"%";return`hsl(${r.h},${r.s},${n})`},hslToRgb(e,t,r){let s,n,o;if(t===0)s=n=o=r;else{let l=(m,$,b)=>(b<0&&(b+=1),b>1&&(b-=1),b<.16666666666666666?m+($-m)*6*b:b<.5?$:b<.6666666666666666?m+($-m)*(.6666666666666666-b)*6:m),c=r<.5?r*(1+t):r+t-r*t,u=2*r-c;s=l(u,c,e+1/3),n=l(u,c,e),o=l(u,c,e-1/3)}return[Math.round(s*255),Math.round(n*255),Math.round(o*255)]},rgbToHsl(e,t,r){e/=255,t/=255,r/=255;let s=Math.max(e,t,r),n=Math.min(e,t,r),o,l,c=(s+n)/2;if(s===n)o=l=0;else{let u=s-n;switch(l=c>.5?u/(2-s-n):u/(s+n),s){case e:o=(t-r)/u+(t<r?6:0);break;case t:o=(r-e)/u+2;break;case r:o=(e-t)/u+4;break}o/=6}return o=Math.round(o*360),l=Math.round(l*100)+"%",c=Math.round(c*100)+"%",{css:"hsl("+o+","+l+","+c+")",h:o,s:l,l:c}},rgbToHex(e,t,r){let s=Number(e).toString(16),n=Number(t).toString(16),o=Number(r).toString(16);return s.length===1&&(s=`0${s}`),n.length===1&&(n=`0${n}`),o.length===1&&(o=`0${o}`),`#${s}${n}${o}`},perceivedBrightness(e){const t=this.color(e).rgb;return t.r/255*.2126+t.g/255*.7152+t.b/255*.0722},pOposition(e){let t={},r=e.trim().split(/\s+/),s=r.filter(l=>l.match(/^(down|right|up|left)$/i));s.length&&(t.autoposition=s[0],r.splice(r.indexOf(s[0]),1));let n=r.filter(l=>l.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i));n.length?(t.my=n[0],t.at=n[1]||n[0],r.splice(r.indexOf(n[0]),1),n[1]&&r.splice(r.indexOf(n[1]),1)):(t.my="center",t.at="center");let o=r.filter(l=>l.match(/^[+-]?\d*\.?\d+[a-z%]*$/i));return o.length&&(t.offsetX=o[0].match(/^[+-]?\d*\.?\d+$/i)?`${o[0]}px`:o[0],o[1]?t.offsetY=o[1].match(/^[+-]?\d*\.?\d+$/i)?`${o[1]}px`:o[1]:t.offsetY=t.offsetX,r.splice(r.indexOf(o[0]),1),o[1]&&r.splice(r.indexOf(o[1]),1)),r.length&&(t.of=r.join(" ")),t},position(e,t){if(!t)return e.style.opacity=1,e;typeof t=="string"?t=Object.assign({},this.defaults.position,this.pOposition(t)):t=Object.assign({},this.defaults.position,t),["my","at","of"].forEach(F=>{typeof t[F]=="function"&&(t[F]=t[F].call(e,e))}),e.options.container==="window"&&(e.style.position="fixed"),typeof e=="string"?e=document.querySelector(e):Object.getPrototypeOf(e).jquery&&(e=e[0]);const r=e.options.container==="window"?"window":e.parentElement,s=e.getBoundingClientRect(),n=e.parentElement.getBoundingClientRect(),o=r==="window"?{left:0,top:0,width:document.documentElement.clientWidth,height:window.innerHeight}:{width:n.width,height:n.height,left:n.left,top:n.top},l=r==="window"?{x:1,y:1}:{x:o.width/r.offsetWidth,y:o.height/r.offsetHeight},c=r==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:window.getComputedStyle(r);o.width-=(parseFloat(c.borderLeftWidth)+parseFloat(c.borderRightWidth))*l.x,o.height-=(parseFloat(c.borderTopWidth)+parseFloat(c.borderBottomWidth))*l.y;let u;t.of?typeof t.of=="string"?u=t.of==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:document.querySelector(t.of).getBoundingClientRect():Object.getPrototypeOf(t.of).jquery?u=t.of[0].getBoundingClientRect():u=t.of.getBoundingClientRect():u=o;let m=this.getScrollbarWidth(document.body),$=this.getScrollbarWidth(e.parentElement),b="0px";t.my.startsWith("left-")?t.at.startsWith("left-")?t.of?b=u.left-o.left-parseFloat(c.borderLeftWidth)+"px":b="0px":t.at.startsWith("center")?t.of?b=u.left-o.left-parseFloat(c.borderLeftWidth)+u.width/2+"px":b=o.width/2+"px":t.at.startsWith("right-")&&(t.of?b=u.left-o.left-parseFloat(c.borderLeftWidth)+u.width+"px":b=o.width+"px"):t.my.startsWith("center")?t.at.startsWith("left-")?t.of?b=u.left-o.left-parseFloat(c.borderLeftWidth)-s.width/2+"px":b=-s.width/2+"px":t.at.startsWith("center")?t.of?b=u.left-o.left-parseFloat(c.borderLeftWidth)-(s.width-u.width)/2+"px":b=o.width/2-s.width/2+"px":t.at.startsWith("right-")&&(t.of?b=u.left-o.left-parseFloat(c.borderLeftWidth)+(u.width-s.width/2)+"px":b=o.width-s.width/2+"px"):t.my.startsWith("right-")&&(t.at.startsWith("left-")?t.of?b=u.left-o.left-parseFloat(c.borderLeftWidth)-s.width+"px":b=-s.width+"px":t.at.startsWith("center")?t.of?b=u.left-o.left-parseFloat(c.borderLeftWidth)-s.width+u.width/2+"px":b=o.width/2-s.width+"px":t.at.startsWith("right-")&&(t.of?b=u.left-o.left-parseFloat(c.borderLeftWidth)+u.width-s.width+"px":b=o.width-s.width+"px",r!=="window"&&(b=parseFloat(b)-$.y+"px")));let k="0px";t.my.endsWith("-top")?t.at.endsWith("-top")?t.of?k=u.top-o.top-parseFloat(c.borderTopWidth)+"px":k="0px":t.at.endsWith("center")?t.of?k=u.top-o.top-parseFloat(c.borderTopWidth)+u.height/2+"px":k=o.height/2+"px":t.at.endsWith("-bottom")&&(t.of?k=u.top-o.top-parseFloat(c.borderTopWidth)+u.height+"px":k=o.height+"px"):t.my.endsWith("center")?t.at.endsWith("-top")?t.of?k=u.top-o.top-parseFloat(c.borderTopWidth)-s.height/2+"px":k=-s.height/2+"px":t.at.endsWith("center")?t.of?k=u.top-o.top-parseFloat(c.borderTopWidth)-s.height/2+u.height/2+"px":k=o.height/2-s.height/2+"px":t.at.endsWith("-bottom")&&(t.of?k=u.top-o.top-parseFloat(c.borderTopWidth)-s.height/2+u.height+"px":k=o.height-s.height/2+"px"):t.my.endsWith("-bottom")&&(t.at.endsWith("-top")?t.of?k=u.top-o.top-parseFloat(c.borderTopWidth)-s.height+"px":k=-s.height+"px":t.at.endsWith("center")?t.of?k=u.top-o.top-parseFloat(c.borderTopWidth)-s.height+u.height/2+"px":k=o.height/2-s.height+"px":t.at.endsWith("-bottom")&&(t.of?k=u.top-o.top-parseFloat(c.borderTopWidth)-s.height+u.height+"px":k=o.height-s.height+"px",r!=="window"?k=parseFloat(k)-$.x+"px":k=parseFloat(k)-m.x+"px")),e.style.left=l.x===1?b:parseFloat(b)/l.x+"px",e.style.top=l.y===1?k:parseFloat(k)/l.y+"px";let B=getComputedStyle(e),L={left:B.left,top:B.top};return t.autoposition&&t.my===t.at&&["left-top","center-top","right-top","left-bottom","center-bottom","right-bottom"].indexOf(t.my)>=0&&(L=this.applyPositionAutopos(e,L,t)),(t.offsetX||t.offsetY)&&(L=this.applyPositionOffset(e,L,t)),(t.minLeft||t.minTop||t.maxLeft||t.maxTop)&&(L=this.applyPositionMinMax(e,L,t)),t.modify&&(L=this.applyPositionModify(e,L,t)),typeof e.options.opacity=="number"?e.style.opacity=e.options.opacity:e.style.opacity=1,e},applyPositionAutopos(e,t,r){const s=`${r.my}-${r.autoposition.toLowerCase()}`;e.classList.add(s);const n=Array.prototype.slice.call(document.querySelectorAll(`.${s}`)),o=n.indexOf(e);if(n.length>1){switch(r.autoposition){case"down":n.forEach((l,c)=>{c>0&&c<=o&&(t.top=parseFloat(t.top)+n[--c].getBoundingClientRect().height+z.autopositionSpacing+"px")});break;case"up":n.forEach((l,c)=>{c>0&&c<=o&&(t.top=parseFloat(t.top)-n[--c].getBoundingClientRect().height-z.autopositionSpacing+"px")});break;case"right":n.forEach((l,c)=>{c>0&&c<=o&&(t.left=parseFloat(t.left)+n[--c].getBoundingClientRect().width+z.autopositionSpacing+"px")});break;case"left":n.forEach((l,c)=>{c>0&&c<=o&&(t.left=parseFloat(t.left)-n[--c].getBoundingClientRect().width-z.autopositionSpacing+"px")});break}e.style.left=t.left,e.style.top=t.top}return{left:t.left,top:t.top}},applyPositionOffset(e,t,r){["offsetX","offsetY"].forEach(n=>{r[n]?(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),isNaN(r[n])===!1&&(r[n]=`${r[n]}px`)):r[n]="0px"}),e.style.left=`calc(${e.style.left} + ${r.offsetX})`,e.style.top=`calc(${e.style.top} + ${r.offsetY})`;const s=getComputedStyle(e);return{left:s.left,top:s.top}},applyPositionMinMax(e,t,r){if(["minLeft","minTop","maxLeft","maxTop"].forEach(n=>{r[n]&&(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),(Number.isInteger(r[n])||r[n].match(/^\d+$/))&&(r[n]=`${r[n]}px`))}),r.minLeft){e.style.left=r.minLeft;let n=getComputedStyle(e).left;parseFloat(n)<parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.minTop){e.style.top=r.minTop;let n=getComputedStyle(e).top;parseFloat(n)<parseFloat(t.top)?e.style.top=t.top:t.top=n}if(r.maxLeft){e.style.left=r.maxLeft;let n=getComputedStyle(e).left;parseFloat(n)>parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.maxTop){e.style.top=r.maxTop;let n=getComputedStyle(e).top;parseFloat(n)>parseFloat(t.top)?e.style.top=t.top:t.top=n}const s=getComputedStyle(e);return{left:s.left,top:s.top}},applyPositionModify(e,t,r){if(r.modify&&typeof r.modify=="function"){const n=r.modify.call(t,t,r);e.style.left=Number.isInteger(n.left)||n.left.match(/^\d+$/)?`${n.left}px`:n.left,e.style.top=Number.isInteger(n.top)||n.top.match(/^\d+$/)?`${n.top}px`:n.top}const s=getComputedStyle(e);return{left:s.left,top:s.top}},autopositionRemaining(e){let t,r=e.options.container;["left-top-down","left-top-right","center-top-down","right-top-down","right-top-left","left-bottom-up","left-bottom-right","center-bottom-up","right-bottom-up","right-bottom-left"].forEach(s=>{e.classList.contains(s)&&(t=s)}),t&&(r==="window"?document.body:typeof r=="string"?document.querySelector(r):r).querySelectorAll(`.${t}`).forEach(n=>n.reposition())},getThemeDetails(e){const t=this.pOtheme(e);if(t.color.startsWith("bootstrap-")){let r=t.color.indexOf("-"),s=document.createElement("button");s.className="btn btn"+t.color.slice(r),document.body.appendChild(s),t.color=getComputedStyle(s).backgroundColor.replace(/\s+/gi,""),document.body.removeChild(s),s=void 0}return t.colors=this.calcColors(t.color),t},clearTheme(e,t){return e.content.classList.remove("jsPanel-content-filled","jsPanel-content-filledlight"),e.header.classList.remove("jsPanel-hdr-light"),e.header.classList.remove("jsPanel-hdr-dark"),e.style.backgroundColor="",this.setStyles(e.headertoolbar,{boxShadow:"",width:"",marginLeft:"",borderTopColor:"transparent"}),this.setStyles(e.content,{background:"",borderTopColor:"transparent"}),e.header.style.background="",Array.prototype.slice.call(e.controlbar.querySelectorAll(".jsPanel-icon")).concat([e.headerlogo,e.headertitle,e.headertoolbar,e.content]).forEach(r=>r.style.color=""),t&&t.call(e,e),e},applyColorTheme(e,t){if(e.style.backgroundColor=t.colors[0],e.header.style.backgroundColor=t.colors[0],e.header.style.color=t.colors[3],[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(r=>e.querySelector(r).style.color=t.colors[3]),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(r=>r.style.color=t.colors[3]),typeof e.options.theme=="string"&&t.filling==="filled"&&(e.content.style.borderTop=t.colors[3]==="#000000"?"1px solid rgba(0,0,0,0.15)":"1px solid rgba(255,255,255,0.15)"),t.colors[3]==="#000000"?e.header.classList.add("jsPanel-hdr-light"):e.header.classList.add("jsPanel-hdr-dark"),t.filling)switch(t.filling){case"filled":this.setStyles(e.content,{backgroundColor:t.colors[2],color:t.colors[3]});break;case"filledlight":e.content.style.backgroundColor=t.colors[1];break;case"filleddark":this.setStyles(e.content,{backgroundColor:t.colors[6],color:t.colors[7]});break;default:e.content.style.backgroundColor=t.filling,e.content.style.color=this.perceivedBrightness(t.filling)<=this.colorBrightnessThreshold?"#fff":"#000"}return e},applyCustomTheme(e,t){let r={bgPanel:"#ffffff",bgContent:"#ffffff",bgFooter:"#f5f5f5",colorHeader:"#000000",colorContent:"#000000",colorFooter:"#000000",border:void 0,borderRadius:void 0},s=typeof t=="object"?Object.assign(r,t):r,n=s.bgPanel,o=s.bgContent,l=s.colorHeader,c=s.colorContent,u=s.bgFooter,m=s.colorFooter;return this.colorNames[n]?e.style.background="#"+this.colorNames[n]:e.style.background=this.getCssVariableValue(n),this.colorNames[l]&&(l="#"+this.colorNames[l]),[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(k=>e.querySelector(k).style.color=this.getCssVariableValue(l)),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(k=>k.style.color=this.getCssVariableValue(l)),this.colorNames[o]?e.content.style.background="#"+this.colorNames[o]:e.content.style.background=this.getCssVariableValue(o),this.colorNames[c]?e.content.style.color="#"+this.colorNames[c]:e.content.style.color=this.getCssVariableValue(c),this.perceivedBrightness(l)>this.colorBrightnessThreshold?e.header.classList.add("jsPanel-hdr-dark"):e.header.classList.add("jsPanel-hdr-light"),this.perceivedBrightness(c)>this.colorBrightnessThreshold?e.content.style.borderTop="1px solid rgba(255,255,255,0.15)":e.content.style.borderTop="1px solid rgba(0,0,0,0.15)",this.colorNames[u]?e.footer.style.background="#"+this.colorNames[u]:e.footer.style.background=this.getCssVariableValue(u),this.colorNames[m]?e.footer.style.color="#"+this.colorNames[m]:e.footer.style.color=this.getCssVariableValue(m),s.border&&e.setBorder(s.border),s.borderRadius&&(e.options.borderRadius=void 0,e.setBorderRadius(s.borderRadius)),e},getCssVariableValue(e){if(e.startsWith("--"))return getComputedStyle(document.documentElement).getPropertyValue(e).replace(/\s+/g,"");if(e.startsWith("var")){let t=e.slice(e.indexOf("(")+1,e.indexOf(")"));return getComputedStyle(document.documentElement).getPropertyValue(t).replace(/\s+/g,"")}return e},getScrollbarWidth(e=document.body){if(e===document.body)return{y:window.innerWidth-document.documentElement.clientWidth,x:window.innerHeight-document.documentElement.clientHeight};{let t=getComputedStyle(e);return{y:e.offsetWidth-e.clientWidth-parseFloat(t.borderRightWidth)-parseFloat(t.borderLeftWidth),x:e.offsetHeight-e.clientHeight-parseFloat(t.borderBottomWidth)-parseFloat(t.borderTopWidth)}}},remClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.remove(r)),e},setClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.add(r)),e},setStyles(e,t){for(const[r,s]of Object.entries(t))e.style[r]=typeof s=="string"?z.getCssVariableValue(s):s;return e},setStyle(e,t){return this.setStyles.call(e,e,t)},strToHtml(e){return document.createRange().createContextualFragment(e)},toggleClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.contains(r)?e.classList.remove(r):e.classList.add(r)),e},emptyNode(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e},addScript(e,t="application/javascript",r){if(!document.querySelector(`script[src="${e}"]`)){const s=document.createElement("script");s.src=e,s.type=t,document.head.appendChild(s),r&&(s.onload=r)}},ajax(e,t){let r,s,n=new XMLHttpRequest;const o={method:"GET",async:!0,user:"",pwd:"",done:function(){if(t){let l=z.strToHtml(this.responseText);r.urlSelector&&(l=l.querySelector(r.urlSelector)),t.contentRemove(),t.content.append(l)}},autoresize:!0,autoreposition:!0};if(t&&typeof e=="string")r=Object.assign({},o,{url:e});else if(typeof e=="object"&&e.url)r=Object.assign({},o,e),r.url=e.url,r.async===!1&&(r.timeout=0,r.withCredentials&&(r.withCredentials=void 0),r.responseType&&(r.responseType=void 0));else{this.errorReporting&&z.errorpanel("XMLHttpRequest seems to miss the <mark>url</mark> parameter!");return}s=r.url.trim().split(/\s+/),r.url=encodeURI(s[0]),s.length>1&&(s.shift(),r.urlSelector=s.join(" ")),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?t?r.done.call(n,n,t):r.done.call(n,n):r.fail&&(t?r.fail.call(n,n,t):r.fail.call(n,n)),r.always&&(t?r.always.call(n,n,t):r.always.call(n,n)),t&&(r.autoresize||r.autoreposition)&&z.ajaxAutoresizeAutoreposition(t,r),z.ajaxAlwaysCallbacks.length&&z.ajaxAlwaysCallbacks.forEach(l=>{t?l.call(n,n,t):l.call(n,n)}))},n.open(r.method,r.url,r.async,r.user,r.pwd),n.timeout=r.timeout||0,r.withCredentials&&(n.withCredentials=r.withCredentials),r.responseType&&(n.responseType=r.responseType),r.beforeSend&&(t?r.beforeSend.call(n,n,t):r.beforeSend.call(n,n)),r.data?n.send(r.data):n.send(null)},fetch(e,t){let r;const s={bodyMethod:"text",autoresize:!0,autoreposition:!0,done:function(o,l){if(l){let c=z.strToHtml(o);l.contentRemove(),l.content.append(c)}}};if(t&&typeof e=="string")r=Object.assign({},s,{resource:encodeURI(e)});else if(typeof e=="object"&&e.resource)r=Object.assign({},s,e),r.resource=encodeURI(e.resource);else{this.errorReporting&&z.errorpanel("Fetch Request seems to miss the <mark>resource</mark> parameter!");return}const n=r.fetchInit||{};r.beforeSend&&(t?r.beforeSend.call(e,e,t):r.beforeSend.call(e,e)),fetch(r.resource,n).then(o=>{if(o.ok)return o[r.bodyMethod]()}).then(o=>{t?r.done.call(o,o,t):r.done.call(o,o),t&&(r.autoresize||r.autoreposition)&&z.ajaxAutoresizeAutoreposition(t,r)})},ajaxAutoresizeAutoreposition(e,t){const r=e.options.contentSize;if(typeof r=="string"&&r.match(/auto/i)){const s=r.split(" "),n=Object.assign({},{width:s[0],height:s[1]});t.autoresize&&e.resize(n),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}else if(typeof r=="object"&&(r.width==="auto"||r.height==="auto")){const s=Object.assign({},r);t.autoresize&&e.resize(s),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}},createPanelTemplate(e=!0){const t=document.createElement("div");return t.className="jsPanel",t.style.left="0",t.style.top="0",e&&["close","maximize","normalize","minimize","smallify"].forEach(r=>{t.setAttribute(`data-btn${r}`,"enabled")}),t.innerHTML=`<div class="jsPanel-hdr">
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
                            </div>`,e},createSnapArea(e,t,r){const s=document.createElement("div"),n=e.parentElement;s.className=`jsPanel-snap-area jsPanel-snap-area-${t}`,t==="lt"||t==="rt"||t==="rb"||t==="lb"?(s.style.width=r+"px",s.style.height=r+"px"):t==="ct"||t==="cb"?s.style.height=r+"px":(t==="lc"||t==="rc")&&(s.style.width=r+"px"),n!==document.body&&(s.style.position="absolute"),document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${t}`)||e.parentElement.appendChild(s)},removeSnapAreas(){document.querySelectorAll(".jsPanel-snap-area").forEach(e=>e.parentElement.removeChild(e))},extend(e){if(Object.prototype.toString.call(e)==="[object Object]")for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this.extensions[t]=e[t])},getPanels(e=function(){return this.classList.contains("jsPanel-standard")}){return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(t=>e.call(t,t)).sort((t,r)=>r.style.zIndex-t.style.zIndex)},processCallbacks(e,t,r="some",s,n){if(typeof t=="function"&&(t=[t]),r)return t[r](o=>o.call(e,e,s,n));t.forEach(o=>o.call(e,e,s,n))},resetZi(){this.zi=((e=z.ziBase)=>{let t=e;return{next:()=>t++}})(),Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((e,t)=>e.style.zIndex-t.style.zIndex).forEach(e=>e.style.zIndex=z.zi.next())},errorpanel(e){this.create({paneltype:"error",dragit:!1,resizeit:!1,theme:{bgPanel:"white",bgContent:"white",colorHeader:"rebeccapurple",colorContent:"#333333",border:"2px solid rebeccapurple"},borderRadius:".33rem",headerControls:"closeonly xs",headerTitle:"&#9888; jsPanel Error",contentSize:{width:"50%",height:"auto"},position:"center-top 0 5 down",animateIn:"jsPanelFadeIn",content:`<div class="jsPanel-error-content-separator"></div><p>${e}</p>`})},create(e={},t){z.zi||(z.zi=((g=z.ziBase)=>{let v=g;return{next:()=>v++}})()),e.config?(e=Object.assign({},this.defaults,e.config,e),delete e.config):e=Object.assign({},this.defaults,e),e.id?typeof e.id=="function"&&(e.id=e.id()):e.id=`jsPanel-${z.idCounter+=1}`;const r=document.getElementById(e.id);if(r!==null){if(r.classList.contains("jsPanel")&&r.front(),this.errorReporting){let g=`&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${e.id}</mark> already exists in the document.`;z.errorpanel(g)}return!1}let s=this.pOcontainer(e.container);if(typeof s=="object"&&s.length&&s.length>0&&(s=s[0]),!s)return this.errorReporting&&z.errorpanel("&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist"),!1;["onbeforeclose","onbeforemaximize","onbeforeminimize","onbeforenormalize","onbeforesmallify","onbeforeunsmallify","onclosed","onfronted","onmaximized","onminimized","onnormalized","onsmallified","onstatuschange","onunsmallified"].forEach(g=>{e[g]?typeof e[g]=="function"&&(e[g]=[e[g]]):e[g]=[]});const n=e.template||this.createPanelTemplate();n.options=e,n.closetimer=void 0,n.status="initialized",n.currentData={},n.header=n.querySelector(".jsPanel-hdr"),n.headerbar=n.header.querySelector(".jsPanel-headerbar"),n.titlebar=n.header.querySelector(".jsPanel-titlebar"),n.headerlogo=n.headerbar.querySelector(".jsPanel-headerlogo"),n.headertitle=n.headerbar.querySelector(".jsPanel-title"),n.controlbar=n.headerbar.querySelector(".jsPanel-controlbar"),n.headertoolbar=n.header.querySelector(".jsPanel-hdr-toolbar"),n.content=n.querySelector(".jsPanel-content"),n.footer=n.querySelector(".jsPanel-ftr"),n.snappableTo=!1,n.snapped=!1,n.droppableTo=!1,n.progressbar=n.autocloseProgressbar=n.querySelector(".jsPanel-progressbar");const o=new CustomEvent("jspanelloaded",{detail:e.id,cancelable:!0}),l=new CustomEvent("jspanelstatuschange",{detail:e.id,cancelable:!0}),c=new CustomEvent("jspanelbeforenormalize",{detail:e.id,cancelable:!0}),u=new CustomEvent("jspanelnormalized",{detail:e.id,cancelable:!0}),m=new CustomEvent("jspanelbeforemaximize",{detail:e.id,cancelable:!0}),$=new CustomEvent("jspanelmaximized",{detail:e.id,cancelable:!0}),b=new CustomEvent("jspanelbeforeminimize",{detail:e.id,cancelable:!0}),k=new CustomEvent("jspanelminimized",{detail:e.id,cancelable:!0}),B=new CustomEvent("jspanelbeforesmallify",{detail:e.id,cancelable:!0}),L=new CustomEvent("jspanelsmallified",{detail:e.id,cancelable:!0}),F=new CustomEvent("jspanelsmallifiedmax",{detail:e.id,cancelable:!0}),H=new CustomEvent("jspanelbeforeunsmallify",{detail:e.id,cancelable:!0}),G=new CustomEvent("jspanelfronted",{detail:e.id,cancelable:!0}),he=new CustomEvent("jspanelbeforeclose",{detail:e.id,cancelable:!0}),ie=new CustomEvent("jspanelclosed",{detail:e.id,cancelable:!0}),oe=new CustomEvent("jspanelcloseduser",{detail:e.id,cancelable:!0});[o,l,c,u,m,$,b,k,B,L,F,H,G,he].forEach(g=>g.panel=n);const V=n.querySelector(".jsPanel-btn-close"),J=n.querySelector(".jsPanel-btn-maximize"),ue=n.querySelector(".jsPanel-btn-normalize"),$e=n.querySelector(".jsPanel-btn-smallify"),Te=n.querySelector(".jsPanel-btn-minimize");V&&z.pointerup.forEach(g=>{V.addEventListener(g,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.close(null,!0)})}),J&&z.pointerup.forEach(g=>{J.addEventListener(g,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.maximize()})}),ue&&z.pointerup.forEach(g=>{ue.addEventListener(g,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.normalize()})}),$e&&z.pointerup.forEach(g=>{$e.addEventListener(g,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.status==="normalized"||n.status==="maximized"?n.smallify():(n.status==="smallified"||n.status==="smallifiedmax")&&n.unsmallify()})}),Te&&z.pointerup.forEach(g=>{Te.addEventListener(g,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.minimize()})});let Ie=z.extensions;for(let g in Ie)Object.prototype.hasOwnProperty.call(Ie,g)&&(n[g]=Ie[g]);if(n.setBorder=g=>{let v=z.pOborder(g);return v[2].length||(v[2]=n.style.backgroundColor),v=v.join(" "),n.style.border=v,n.options.border=v,n},n.setBorderRadius=g=>{typeof g=="string"&&(g.startsWith("--")||g.startsWith("var"))&&(g=g.replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," "),g=z.getCssVariableValue(g)),typeof g=="number"&&(g+="px"),n.style.borderRadius=g;const v=getComputedStyle(n);return n.options.header?(n.header.style.borderTopLeftRadius=v.borderTopLeftRadius,n.header.style.borderTopRightRadius=v.borderTopRightRadius):(n.content.style.borderTopLeftRadius=v.borderTopLeftRadius,n.content.style.borderTopRightRadius=v.borderTopRightRadius),n.options.footerToolbar?(n.footer.style.borderBottomRightRadius=v.borderBottomRightRadius,n.footer.style.borderBottomLeftRadius=v.borderBottomLeftRadius):(n.content.style.borderBottomRightRadius=v.borderBottomRightRadius,n.content.style.borderBottomLeftRadius=v.borderBottomLeftRadius),n},n.setTheme=(g=e.theme,v)=>{let S;if(n.status==="minimized"&&(S=!0,n.normalize()),z.clearTheme(n),typeof g=="object")e.border=void 0,z.applyCustomTheme(n,g);else if(typeof g=="string"){g==="none"&&(g="white");let y=z.getThemeDetails(g);z.applyColorTheme(n,y)}return S&&n.minimize(),v&&v.call(n,n),n},n.remove=(g,v,S)=>{n.parentElement.removeChild(n),document.getElementById(g)?S&&S.call(n,g,n):(n.removeMinimizedReplacement(),n.status="closed",v&&document.dispatchEvent(oe),document.dispatchEvent(ie),n.options.onclosed&&z.processCallbacks(n,n.options.onclosed,"every",v),z.autopositionRemaining(n),S&&S.call(g,g)),window.removeEventListener("resize",n.windowResizeHandler),document.removeEventListener("jspanelresize",n.parentResizeHandler)},n.close=(g,v)=>{if(n.parentElement){if(n.closetimer&&window.clearInterval(n.closetimer),document.dispatchEvent(he),n.statusBefore=n.status,n.options.onbeforeclose&&n.options.onbeforeclose.length>0&&!z.processCallbacks(n,n.options.onbeforeclose,"some",n.status,v))return n;n.options.animateOut?(n.options.animateIn&&z.remClass(n,n.options.animateIn),z.setClass(n,n.options.animateOut),n.addEventListener("animationend",S=>{S.stopPropagation(),n.remove(n.id,v,g)})):n.remove(n.id,v,g)}},n.maximize=(g,v)=>{if(n.statusBefore=n.status,e.onbeforemaximize&&e.onbeforemaximize.length>0&&!z.processCallbacks(n,e.onbeforemaximize,"some",n.statusBefore))return n;document.dispatchEvent(m);const S=n.parentElement,y=z.pOcontainment(e.maximizedMargin);return S===document.body?(n.style.width=document.documentElement.clientWidth-y[1]-y[3]+"px",n.style.height=document.documentElement.clientHeight-y[0]-y[2]+"px",n.style.left=y[3]+"px",n.style.top=y[0]+"px"):(n.style.width=S.clientWidth-y[1]-y[3]+"px",n.style.height=S.clientHeight-y[0]-y[2]+"px",n.style.left=y[3]+"px",n.style.top=y[0]+"px"),$e.style.transform="unset",n.removeMinimizedReplacement(),n.status="maximized",n.setControls([".jsPanel-btn-maximize"]),v||n.front(),document.dispatchEvent($),document.dispatchEvent(l),e.onstatuschange&&z.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),g&&g.call(n,n,n.statusBefore),e.onmaximized&&z.processCallbacks(n,e.onmaximized,"every",n.statusBefore),n},n.minimize=g=>{if(n.status==="minimized"||(n.statusBefore=n.status,e.onbeforeminimize&&e.onbeforeminimize.length>0&&!z.processCallbacks(n,e.onbeforeminimize,"some",n.statusBefore)))return n;if(document.dispatchEvent(b),!document.getElementById("jsPanel-replacement-container")){const v=document.createElement("div");v.id="jsPanel-replacement-container",document.body.append(v)}if(n.style.left="-9999px",n.status="minimized",document.dispatchEvent(k),document.dispatchEvent(l),e.onstatuschange&&z.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),e.minimizeTo){let v=n.createMinimizedReplacement(),S,y,x;switch(e.minimizeTo){case"default":document.getElementById("jsPanel-replacement-container").append(v);break;case"parentpanel":y=n.closest(".jsPanel-content").parentElement,x=y.querySelectorAll(".jsPanel-minimized-box"),S=x[x.length-1],S.append(v);break;case"parent":y=n.parentElement,S=y.querySelector(".jsPanel-minimized-container"),S||(S=document.createElement("div"),S.className="jsPanel-minimized-container",y.append(S)),S.append(v);break;default:document.querySelector(e.minimizeTo).append(v)}}return g&&g.call(n,n,n.statusBefore),e.onminimized&&z.processCallbacks(n,e.onminimized,"every",n.statusBefore),n},n.normalize=g=>(n.status==="normalized"||(n.statusBefore=n.status,e.onbeforenormalize&&e.onbeforenormalize.length>0&&!z.processCallbacks(n,e.onbeforenormalize,"some",n.statusBefore))||(document.dispatchEvent(c),n.style.width=n.currentData.width,n.style.height=n.currentData.height,n.snapped?n.snap(n.snapped,!0):(n.style.left=n.currentData.left,n.style.top=n.currentData.top),$e.style.transform="unset",n.removeMinimizedReplacement(),n.status="normalized",n.setControls([".jsPanel-btn-normalize"]),n.front(),document.dispatchEvent(u),document.dispatchEvent(l),e.onstatuschange&&z.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),g&&g.call(n,n,n.statusBefore),e.onnormalized&&z.processCallbacks(n,e.onnormalized,"every",n.statusBefore)),n),n.smallify=g=>{if(n.status==="smallified"||n.status==="smallifiedmax"||(n.statusBefore=n.status,e.onbeforesmallify&&e.onbeforesmallify.length>0&&!z.processCallbacks(n,e.onbeforesmallify,"some",n.statusBefore)))return n;document.dispatchEvent(B),n.style.overflow="hidden";const v=window.getComputedStyle(n),S=parseFloat(window.getComputedStyle(n.headerbar).height);n.style.height=parseFloat(v.borderTopWidth)+parseFloat(v.borderBottomWidth)+S+"px",$e.style.transform="rotate(180deg)",n.status==="normalized"?(n.setControls([".jsPanel-btn-normalize"]),n.status="smallified",document.dispatchEvent(L),document.dispatchEvent(l),e.onstatuschange&&z.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="maximized"&&(n.setControls([".jsPanel-btn-maximize"]),n.status="smallifiedmax",document.dispatchEvent(F),document.dispatchEvent(l),e.onstatuschange&&z.processCallbacks(n,e.onstatuschange,"every",n.statusBefore));const y=n.querySelectorAll(".jsPanel-minimized-box");return y[y.length-1].style.display="none",g&&g.call(n,n,n.statusBefore),e.onsmallified&&z.processCallbacks(n,e.onsmallified,"every",n.statusBefore),n},n.unsmallify=g=>{if(n.statusBefore=n.status,n.status==="smallified"||n.status==="smallifiedmax"){if(e.onbeforeunsmallify&&e.onbeforeunsmallify.length>0&&!z.processCallbacks(n,e.onbeforeunsmallify,"some",n.statusBefore))return n;document.dispatchEvent(H),n.style.overflow="visible",n.front(),n.status==="smallified"?(n.style.height=n.currentData.height,n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(u),document.dispatchEvent(l),e.onstatuschange&&z.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="smallifiedmax"?n.maximize():n.status==="minimized"&&n.normalize(),$e.style.transform="rotate(0deg)";const v=n.querySelectorAll(".jsPanel-minimized-box");v[v.length-1].style.display="flex",g&&g.call(n,n,n.statusBefore),e.onunsmallified&&z.processCallbacks(n,e.onunsmallified,"every",n.statusBefore)}return n},n.front=(g,v=!0)=>{if(n.status==="minimized")n.statusBefore==="maximized"?n.maximize():n.normalize();else{const S=Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(y=>y.style.zIndex);Math.max(...S)>n.style.zIndex&&(n.style.zIndex=z.zi.next()),z.resetZi()}return document.dispatchEvent(G),g&&g.call(n,n),e.onfronted&&v&&z.processCallbacks(n,e.onfronted,"every",n.status),n},n.snap=(g,v=!1)=>{if(v||(n.currentData.beforeSnap={width:n.currentData.width,height:n.currentData.height}),g&&typeof g=="function"&&!v)g.call(n,n,n.snappableTo);else if(g!==!1){let S=[0,0];if(n.options.dragit.snap.containment&&n.options.dragit.containment){const y=z.pOcontainment(n.options.dragit.containment),x=n.snappableTo;x.startsWith("left")?S[0]=y[3]:x.startsWith("right")&&(S[0]=-y[1]),x.endsWith("top")?S[1]=y[0]:x.endsWith("bottom")&&(S[1]=-y[2])}n.reposition(`${n.snappableTo} ${S[0]} ${S[1]}`)}v||(n.snapped=n.snappableTo)},n.move=(g,v)=>{let S=n.overlaps(g,"paddingbox"),y=n.parentElement;return g.appendChild(n),n.options.container=g,n.style.left=S.left+"px",n.style.top=S.top+"px",n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors(),v&&v.call(n,n,g,y),n},n.closeChildpanels=g=>(n.getChildpanels().forEach(v=>v.close()),g&&g.call(n,n),n),n.getChildpanels=g=>{const v=n.content.querySelectorAll(".jsPanel");return g&&v.forEach((S,y,x)=>{g.call(S,S,y,x)}),v},n.isChildpanel=g=>{const v=n.closest(".jsPanel-content"),S=v?v.parentElement:null;return g&&g.call(n,n,S),v?S:!1},n.contentRemove=g=>(z.emptyNode(n.content),g&&g.call(n,n),n),n.createMinimizedReplacement=()=>{const g=z.createMinimizedTemplate(),v=window.getComputedStyle(n.headertitle).color,S=window.getComputedStyle(n),y=e.iconfont,x=g.querySelector(".jsPanel-controlbar");return n.options.header!=="auto-show-hide"?z.setStyles(g,{backgroundColor:S.backgroundColor,backgroundPositionX:S.backgroundPositionX,backgroundPositionY:S.backgroundPositionY,backgroundRepeat:S.backgroundRepeat,backgroundAttachment:S.backgroundAttachment,backgroundImage:S.backgroundImage,backgroundSize:S.backgroundSize,backgroundOrigin:S.backgroundOrigin,backgroundClip:S.backgroundClip}):g.style.backgroundColor=window.getComputedStyle(n.header).backgroundColor,g.id=n.id+"-min",g.querySelector(".jsPanel-headerbar").replaceChild(n.headerlogo.cloneNode(!0),g.querySelector(".jsPanel-headerlogo")),g.querySelector(".jsPanel-titlebar").replaceChild(n.headertitle.cloneNode(!0),g.querySelector(".jsPanel-title")),g.querySelector(".jsPanel-titlebar").setAttribute("title",n.headertitle.textContent),g.querySelector(".jsPanel-title").style.color=v,x.style.color=v,x.querySelectorAll("button").forEach(ne=>ne.style.color=v),["jsPanel-hdr-dark","jsPanel-hdr-light"].forEach(ne=>{n.header.classList.contains(ne)&&g.querySelector(".jsPanel-hdr").classList.add(ne)}),n.setIconfont(y,g),n.dataset.btnnormalize==="enabled"?z.pointerup.forEach(ne=>{g.querySelector(".jsPanel-btn-normalize").addEventListener(ne,pe=>{if(pe.preventDefault(),pe.button&&pe.button>0)return!1;n.normalize()})}):x.querySelector(".jsPanel-btn-normalize").style.display="none",n.dataset.btnmaximize==="enabled"?z.pointerup.forEach(ne=>{g.querySelector(".jsPanel-btn-maximize").addEventListener(ne,pe=>{if(pe.preventDefault(),pe.button&&pe.button>0)return!1;n.maximize()})}):x.querySelector(".jsPanel-btn-maximize").style.display="none",n.dataset.btnclose==="enabled"?z.pointerup.forEach(ne=>{g.querySelector(".jsPanel-btn-close").addEventListener(ne,pe=>{if(pe.preventDefault(),pe.button&&pe.button>0)return!1;n.close(null,!0)})}):x.querySelector(".jsPanel-btn-close").style.display="none",g},n.removeMinimizedReplacement=()=>{const g=document.getElementById(`${n.id}-min`);g&&g.parentElement.removeChild(g)},n.drag=(g={})=>{let v,S,y;const x=new CustomEvent("jspaneldragstart",{detail:n.id}),ne=new CustomEvent("jspaneldrag",{detail:n.id}),pe=new CustomEvent("jspaneldragstop",{detail:n.id});[x,ne,pe].forEach(We=>We.panel=n);const K=We=>{let Me=We.split("-");return Me.forEach((Se,Oe)=>{Me[Oe]=Se.charAt(0).toUpperCase()+Se.slice(1)}),"snap"+Me.join("")};function Q(We){We.relatedTarget===null&&z.pointermove.forEach(Me=>{document.removeEventListener(Me,S,!1),n.style.opacity=1})}let Xe=g.handles||z.defaults.dragit.handles,ct=g.cursor||z.defaults.dragit.cursor;function on(We){if(z.pointermove.forEach(Me=>document.removeEventListener(Me,S)),z.removeSnapAreas(),v){if(n.style.opacity=1,v=void 0,y.snap){switch(n.snappableTo){case"left-top":n.snap(y.snap.snapLeftTop);break;case"center-top":n.snap(y.snap.snapCenterTop);break;case"right-top":n.snap(y.snap.snapRightTop);break;case"right-center":n.snap(y.snap.snapRightCenter);break;case"right-bottom":n.snap(y.snap.snapRightBottom);break;case"center-bottom":n.snap(y.snap.snapCenterBottom);break;case"left-bottom":n.snap(y.snap.snapLeftBottom);break;case"left-center":n.snap(y.snap.snapLeftCenter);break}y.snap.callback&&n.snappableTo&&typeof y.snap.callback=="function"&&(y.snap.callback.call(n,n),y.snap.repositionOnSnap&&y.snap[K(n.snappableTo)]!==!1&&n.repositionOnSnap(n.snappableTo)),n.snappableTo&&y.snap.repositionOnSnap&&y.snap[K(n.snappableTo)]&&n.repositionOnSnap(n.snappableTo)}if(n.droppableTo&&n.droppableTo){let Me=n.parentElement;n.move(n.droppableTo),y.drop.callback&&y.drop.callback.call(n,n,n.droppableTo,Me)}if(document.dispatchEvent(pe),y.stop.length){let Me=window.getComputedStyle(n),Se={left:parseFloat(Me.left),top:parseFloat(Me.top),width:parseFloat(Me.width),height:parseFloat(Me.height)};z.processCallbacks(n,y.stop,!1,Se,We)}n.saveCurrentPosition(),n.calcSizeFactors()}n.controlbar.style.pointerEvents="inherit",n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Me=>Me.style.pointerEvents="auto"),document.removeEventListener(We,on)}return n.querySelectorAll(Xe).forEach(We=>{We.style.touchAction="none",We.style.cursor=ct,z.pointerdown.forEach(Me=>{We.addEventListener(Me,Se=>{if(Se.button&&Se.button>0||(y=Object.assign({},z.defaults.dragit,g),y.disableOnMaximized&&n.status==="maximized"))return!1;if((y.containment||y.containment===0)&&(y.containment=z.pOcontainment(y.containment)),y.grid&&Array.isArray(y.grid)&&y.grid.length===1&&(y.grid[1]=y.grid[0]),y.snap&&(typeof y.snap=="object"?y.snap=Object.assign({},z.defaultSnapConfig,y.snap):y.snap=z.defaultSnapConfig),Se.target.closest(".jsPanel-ftr-btn"))return;n.controlbar.style.pointerEvents="none",n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(nt=>nt.style.pointerEvents="none");let Oe=window.getComputedStyle(n),Qe=parseFloat(Oe.left),Re=parseFloat(Oe.top),ae=parseFloat(Oe.width),Je=parseFloat(Oe.height),Be=Se.touches?Se.touches[0].clientX:Se.clientX,ye=Se.touches?Se.touches[0].clientY:Se.clientY,ke=n.parentElement,Pt=ke.getBoundingClientRect(),fe=window.getComputedStyle(ke),Ze=n.getScaleFactor(),xn=0,tn=z.getScrollbarWidth(ke);S=nt=>{if(nt.preventDefault(),!v){if(document.dispatchEvent(x),n.style.opacity=y.opacity,n.snapped&&y.snap.resizeToPreSnap&&n.currentData.beforeSnap){n.resize(n.currentData.beforeSnap.width+" "+n.currentData.beforeSnap.height),n.setControls([".jsPanel-btn-normalize"]);let ce=n.getBoundingClientRect(),De=Be-(ce.left+ce.width),we=ce.width/2;De>-we&&(xn=De+we)}if(n.front(),n.snapped=!1,n.status==="maximized"&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized"),y.drop&&y.drop.dropZones){let ce=y.drop.dropZones.map(we=>z.pOcontainer(we)),De=[];ce.forEach(function(we){we.length?we.forEach(function(Le){De.push(Le)}):De.push(we)}),De=De.filter(function(we,Le,Ge){return Ge.indexOf(we)===Le}),y.drop.dropZones=De}y.start.length&&z.processCallbacks(n,y.start,!1,{left:Qe,top:Re,width:ae,height:Je},nt)}v=1;let It,Fe,Ke,kt,st,Ae,_e,Rt,Ve,yt,ht=nt.touches?nt.touches[0].clientX:nt.clientX,it=nt.touches?nt.touches[0].clientY:nt.clientY,Ue=window.getComputedStyle(n),ge;if(ke===document.body){let ce=n.getBoundingClientRect();Ve=window.innerWidth-parseInt(fe.borderLeftWidth,10)-parseInt(fe.borderRightWidth,10)-(ce.left+ce.width),yt=window.innerHeight-parseInt(fe.borderTopWidth,10)-parseInt(fe.borderBottomWidth,10)-(ce.top+ce.height)}else Ve=parseInt(fe.width,10)-parseInt(fe.borderLeftWidth,10)-parseInt(fe.borderRightWidth,10)-(parseInt(Ue.left,10)+parseInt(Ue.width,10)),yt=parseInt(fe.height,10)-parseInt(fe.borderTopWidth,10)-parseInt(fe.borderBottomWidth,10)-(parseInt(Ue.top,10)+parseInt(Ue.height,10));It=parseFloat(Ue.left),Ke=parseFloat(Ue.top),st=Ve,_e=yt,y.snap&&(y.snap.trigger==="panel"?(Fe=It**2,kt=Ke**2,Ae=st**2,Rt=_e**2):y.snap.trigger==="pointer"&&(n.options.container==="window"?(It=ht,Ke=it,st=window.innerWidth-ht,_e=window.innerHeight-it,Fe=ht**2,kt=Ke**2,Ae=st**2,Rt=_e**2):(ge=n.overlaps(ke,"paddingbox",nt),It=ge.pointer.left,Ke=ge.pointer.top,st=ge.pointer.right,_e=ge.pointer.bottom,Fe=ge.pointer.left**2,kt=ge.pointer.top**2,Ae=ge.pointer.right**2,Rt=ge.pointer.bottom**2)));let et=Math.sqrt(Fe+kt),ee=Math.sqrt(Fe+Rt),ot=Math.sqrt(Ae+kt),pt=Math.sqrt(Ae+Rt),St=Math.abs(It-st)/2,te=Math.abs(Ke-_e)/2,an=Math.sqrt(Fe+te**2),pn=Math.sqrt(kt+St**2),ft=Math.sqrt(Ae+te**2),$n=Math.sqrt(Rt+St**2);if(window.getSelection().removeAllRanges(),document.dispatchEvent(ne),(!y.axis||y.axis==="x")&&(n.style.left=Qe+(ht-Be)/Ze.x+xn+"px"),(!y.axis||y.axis==="y")&&(n.style.top=Re+(it-ye)/Ze.y+"px"),y.grid){let ce=y.grid,De=y.axis,we=ce[0]*Math.round((Qe+(ht-Be))/ce[0]),Le=ce[1]*Math.round((Re+(it-ye))/ce[1]);(!De||De==="x")&&(n.style.left=`${we}px`),(!De||De==="y")&&(n.style.top=`${Le}px`)}if(y.containment||y.containment===0){let ce=y.containment,De,we;if(n.options.container==="window")De=window.innerWidth-parseFloat(Ue.width)-ce[1]-tn.y,we=window.innerHeight-parseFloat(Ue.height)-ce[2]-tn.x;else{let Le=parseFloat(fe.borderLeftWidth)+parseFloat(fe.borderRightWidth),Ge=parseFloat(fe.borderTopWidth)+parseFloat(fe.borderBottomWidth);De=Pt.width/Ze.x-parseFloat(Ue.width)-ce[1]-Le-tn.y,we=Pt.height/Ze.y-parseFloat(Ue.height)-ce[2]-Ge-tn.x}parseFloat(n.style.left)<=ce[3]&&(n.style.left=ce[3]+"px"),parseFloat(n.style.top)<=ce[0]&&(n.style.top=ce[0]+"px"),parseFloat(n.style.left)>=De&&(n.style.left=De+"px"),parseFloat(n.style.top)>=we&&(n.style.top=we+"px")}if(y.drag.length){let ce={left:It,top:Ke,right:st,bottom:_e,width:parseFloat(Ue.width),height:parseFloat(Ue.height)};z.processCallbacks(n,y.drag,!1,ce,nt)}if(y.snap){let ce=y.snap.sensitivity,De=ke===document.body?window.innerWidth/8:Pt.width/8,we=ke===document.body?window.innerHeight/8:Pt.height/8;n.snappableTo=!1,z.removeSnapAreas(),et<ce?y.snap.snapLeftTop!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="left-top",z.createSnapArea(n,"lt",ce)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(ge.pointer.left>0&&ge.pointer.top>0?(n.snappableTo="left-top",z.createSnapArea(n,"lt",ce)):(n.snappableTo=!1,z.removeSnapAreas()))):ee<ce?y.snap.snapLeftBottom!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="left-bottom",z.createSnapArea(n,"lb",ce)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(ge.pointer.left>0&&ge.pointer.bottom>0?(n.snappableTo="left-bottom",z.createSnapArea(n,"lb",ce)):(n.snappableTo=!1,z.removeSnapAreas()))):ot<ce?y.snap.snapRightTop!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="right-top",z.createSnapArea(n,"rt",ce)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(ge.pointer.right>0&&ge.pointer.top>0?(n.snappableTo="right-top",z.createSnapArea(n,"rt",ce)):(n.snappableTo=!1,z.removeSnapAreas()))):pt<ce?y.snap.snapRightBottom!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="right-bottom",z.createSnapArea(n,"rb",ce)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(ge.pointer.right>0&&ge.pointer.bottom>0?(n.snappableTo="right-bottom",z.createSnapArea(n,"rb",ce)):(n.snappableTo=!1,z.removeSnapAreas()))):Ke<ce&&pn<De?y.snap.snapCenterTop!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="center-top",z.createSnapArea(n,"ct",ce)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(ge.pointer.top>0?(n.snappableTo="center-top",z.createSnapArea(n,"ct",ce)):(n.snappableTo=!1,z.removeSnapAreas()))):It<ce&&an<we?y.snap.snapLeftCenter!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="left-center",z.createSnapArea(n,"lc",ce)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(ge.pointer.left>0?(n.snappableTo="left-center",z.createSnapArea(n,"lc",ce)):(n.snappableTo=!1,z.removeSnapAreas()))):st<ce&&ft<we?y.snap.snapRightCenter!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="right-center",z.createSnapArea(n,"rc",ce)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(ge.pointer.right>0?(n.snappableTo="right-center",z.createSnapArea(n,"rc",ce)):(n.snappableTo=!1,z.removeSnapAreas()))):_e<ce&&$n<De&&y.snap.snapCenterBottom!==!1&&(!y.snap.active||y.snap.active==="both"?(n.snappableTo="center-bottom",z.createSnapArea(n,"cb",ce)):y.snap.trigger==="pointer"&&y.snap.active&&y.snap.active==="inside"&&(ge.pointer.bottom>0?(n.snappableTo="center-bottom",z.createSnapArea(n,"cb",ce)):(n.snappableTo=!1,z.removeSnapAreas())))}if(y.drop&&y.drop.dropZones){let ce=z.isIE?"msElementsFromPoint":"elementsFromPoint",De=document[ce](nt.clientX,nt.clientY);Array.isArray(De)||(De=Array.prototype.slice.call(De)),y.drop.dropZones.forEach(we=>{De.includes(we)&&(n.droppableTo=we)}),De.includes(n.droppableTo)||(n.droppableTo=!1)}},z.pointermove.forEach(nt=>document.addEventListener(nt,S)),window.addEventListener("mouseout",Q,!1)})}),z.pointerup.forEach(Me=>{document.addEventListener(Me,on),window.removeEventListener("mouseout",Q)}),g.disable&&(We.style.pointerEvents="none")}),n},n.dragit=g=>{const v=Object.assign({},z.defaults.dragit,e.dragit),S=n.querySelectorAll(v.handles);return g==="disable"?S.forEach(y=>y.style.pointerEvents="none"):S.forEach(y=>y.style.pointerEvents="auto"),n},n.sizeit=(g={})=>{const v=new CustomEvent("jspanelresizestart",{detail:n.id}),S=new CustomEvent("jspanelresize",{detail:n.id}),y=new CustomEvent("jspanelresizestop",{detail:n.id});[v,S,y].forEach(Se=>Se.panel=n);let x={},ne,pe,K,Q,Xe,ct;x.handles=g.handles||z.defaults.resizeit.handles,x.handles.split(",").forEach(Se=>{const Oe=document.createElement("DIV");Oe.className=`jsPanel-resizeit-handle jsPanel-resizeit-${Se.trim()}`,n.append(Oe)});let on=g.aspectRatio?g.aspectRatio:!1;function We(Se){Se.relatedTarget===null&&z.pointermove.forEach(Oe=>document.removeEventListener(Oe,ne,!1))}function Me(Se){if(z.pointermove.forEach(Oe=>document.removeEventListener(Oe,ne,!1)),Se.target.classList&&Se.target.classList.contains("jsPanel-resizeit-handle")){let Oe,Qe,Re=Se.target.className;if(Re.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)&&(Oe=!0),Re.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)&&(Qe=!0),x.grid&&Array.isArray(x.grid)){x.grid.length===1&&(x.grid[1]=x.grid[0]);const ae=parseFloat(n.style.width),Je=parseFloat(n.style.height),Be=ae%x.grid[0],ye=Je%x.grid[1],ke=parseFloat(n.style.left),Pt=parseFloat(n.style.top),fe=ke%x.grid[0],Ze=Pt%x.grid[1];Be<x.grid[0]/2?n.style.width=ae-Be+"px":n.style.width=ae+(x.grid[0]-Be)+"px",ye<x.grid[1]/2?n.style.height=Je-ye+"px":n.style.height=Je+(x.grid[1]-ye)+"px",Oe&&(fe<x.grid[0]/2?n.style.left=ke-fe+"px":n.style.left=ke+(x.grid[0]-fe)+"px"),Qe&&(Ze<x.grid[1]/2?n.style.top=Pt-Ze+"px":n.style.top=Pt+(x.grid[1]-Ze)+"px")}}if(pe){n.content.style.pointerEvents="inherit",pe=void 0,n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors();let Oe=n.controlbar.querySelector(".jsPanel-btn-smallify"),Qe=n.getBoundingClientRect();if(Oe&&Qe.height>ct+5&&(Oe.style.transform="rotate(0deg)"),document.dispatchEvent(y),x.stop.length){let Re=window.getComputedStyle(n),ae={left:parseFloat(Re.left),top:parseFloat(Re.top),width:parseFloat(Re.width),height:parseFloat(Re.height)};z.processCallbacks(n,x.stop,!1,ae,Se)}}n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Oe=>Oe.style.pointerEvents="auto"),x.aspectRatio=on,document.removeEventListener(Se,Me)}return n.querySelectorAll(".jsPanel-resizeit-handle").forEach(Se=>{Se.style.touchAction="none",z.pointerdown.forEach(Oe=>{Se.addEventListener(Oe,Qe=>{if(Qe.preventDefault(),Qe.stopPropagation(),Qe.button&&Qe.button>0)return!1;let Re=1;if(x=Object.assign({},z.defaults.resizeit,g),(x.containment||x.containment===0)&&(x.containment=z.pOcontainment(x.containment)),x.aspectRatio&&x.aspectRatio===!0&&(x.aspectRatio="panel"),z.modifier){let we=z.modifier;we.altKey?x.aspectRatio="content":we.ctrlKey?x.aspectRatio="panel":we.shiftKey&&(x.aspectRatio=!1,Re=2)}let ae=typeof x.maxWidth=="function"?x.maxWidth():x.maxWidth||1e4,Je=typeof x.maxHeight=="function"?x.maxHeight():x.maxHeight||1e4,Be=typeof x.minWidth=="function"?x.minWidth():x.minWidth,ye=typeof x.minHeight=="function"?x.minHeight():x.minHeight;n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(we=>we.style.pointerEvents="none");const ke=n.parentElement,Pt=ke.tagName.toLowerCase(),fe=n.getBoundingClientRect(),Ze=ke.getBoundingClientRect(),xn=window.getComputedStyle(ke,null),tn=parseInt(xn.borderLeftWidth,10),nt=parseInt(xn.borderTopWidth,10),It=xn.getPropertyValue("position"),Fe=Qe.clientX||Qe.clientX===0||Qe.touches[0].clientX,Ke=Qe.clientY||Qe.clientY===0||Qe.touches[0].clientY,kt=Fe/Ke,st=Qe.target.classList,Ae=n.getScaleFactor(),_e=fe.width/fe.height,Rt=n.content.getBoundingClientRect(),Ve=Rt.width/Rt.height,yt=n.header.getBoundingClientRect().height,ht=n.footer.getBoundingClientRect().height||0;let it=fe.left,Ue=fe.top,ge=1e4,et=1e4,ee=1e4,ot=1e4;Xe=fe.width,ct=fe.height,Pt!=="body"&&(it=fe.left-Ze.left+ke.scrollLeft,Ue=fe.top-Ze.top+ke.scrollTop),Pt==="body"&&x.containment?(ge=document.documentElement.clientWidth-fe.left,ee=document.documentElement.clientHeight-fe.top,et=fe.width+fe.left,ot=fe.height+fe.top):x.containment&&(It==="static"?(ge=Ze.width-fe.left+tn,ee=Ze.height+Ze.top-fe.top+nt,et=fe.width+(fe.left-Ze.left)-tn,ot=fe.height+(fe.top-Ze.top)-nt):(ge=ke.clientWidth-(fe.left-Ze.left)/Ae.x+tn,ee=ke.clientHeight-(fe.top-Ze.top)/Ae.y+nt,et=(fe.width+fe.left-Ze.left)/Ae.x-tn,ot=n.clientHeight+(fe.top-Ze.top)/Ae.y-nt)),x.containment&&(et-=x.containment[3],ot-=x.containment[0],ge-=x.containment[1],ee-=x.containment[2]);const pt=window.getComputedStyle(n),St=parseFloat(pt.width)-fe.width,te=parseFloat(pt.height)-fe.height;let an=parseFloat(pt.left)-fe.left,pn=parseFloat(pt.top)-fe.top;ke!==document.body&&(an+=Ze.left,pn+=Ze.top);let ft=parseInt(pt.borderTopWidth,10),$n=parseInt(pt.borderRightWidth,10),ce=parseInt(pt.borderBottomWidth,10),De=parseInt(pt.borderLeftWidth,10);ne=we=>{we.preventDefault(),pe||(document.dispatchEvent(v),x.start.length&&z.processCallbacks(n,x.start,!1,{width:Xe,height:ct,left:it,top:Ue},we),n.front(),n.status==="maximized"&&(n.status="normalized",n.controlbar.querySelector(".jsPanel-btn-maximize")&&n.setControlStatus("maximize","show"),n.controlbar.querySelector(".jsPanel-btn-normalize")&&n.setControlStatus("normalize","hide")),fe.height>ct+5&&(n.status="normalized",n.setControls([".jsPanel-btn-normalize"]))),pe=1,document.dispatchEvent(S);let Le=we.touches?we.touches[0].clientX:we.clientX,Ge=we.touches?we.touches[0].clientY:we.clientY,je;st.contains("jsPanel-resizeit-e")?(K=Xe+(Le-Fe)*Re/Ae.x+St,K>=ge&&(K=ge),K>=ae&&(K=ae),K<=Be&&(K=Be),n.style.width=K+"px",Re===2&&(n.style.left=it-(Le-Fe)+"px"),x.aspectRatio==="content"?(n.style.height=(K-$n-De)/Ve+yt+ht+ft+ce+"px",x.containment&&(je=n.overlaps(ke),je.bottom<=x.containment[2]&&(n.style.height=ee+"px",n.style.width=ee*Ve+"px"))):x.aspectRatio==="panel"&&(n.style.height=K/_e+"px",x.containment&&(je=n.overlaps(ke),je.bottom<=x.containment[2]&&(n.style.height=ee+"px",n.style.width=ee*_e+"px")))):st.contains("jsPanel-resizeit-s")?(Q=ct+(Ge-Ke)*Re/Ae.y+te,Q>=ee&&(Q=ee),Q>=Je&&(Q=Je),Q<=ye&&(Q=ye),n.style.height=Q+"px",Re===2&&(n.style.top=Ue-(Ge-Ke)+"px"),x.aspectRatio==="content"?(n.style.width=(Q-yt-ht-ft-ce)*Ve+ft+ce+"px",x.containment&&(je=n.overlaps(ke),je.right<=x.containment[1]&&(n.style.width=ge+"px",n.style.height=ge/Ve+"px"))):x.aspectRatio==="panel"&&(n.style.width=Q*_e+"px",x.containment&&(je=n.overlaps(ke),je.right<=x.containment[1]&&(n.style.width=ge+"px",n.style.height=ge/_e+"px")))):st.contains("jsPanel-resizeit-w")?(K=Xe+(Fe-Le)*Re/Ae.x+St,K<=ae&&K>=Be&&K<=et&&(n.style.left=it+(Le-Fe)/Ae.x+an+"px"),K>=et&&(K=et),K>=ae&&(K=ae),K<=Be&&(K=Be),n.style.width=K+"px",x.aspectRatio==="content"?(n.style.height=(K-$n-De)/Ve+yt+ht+ft+ce+"px",x.containment&&(je=n.overlaps(ke),je.bottom<=x.containment[2]&&(n.style.height=ee+"px",n.style.width=ee*Ve+"px"))):x.aspectRatio==="panel"&&(n.style.height=K/_e+"px",x.containment&&(je=n.overlaps(ke),je.bottom<=x.containment[2]&&(n.style.height=ee+"px",n.style.width=ee*_e+"px")))):st.contains("jsPanel-resizeit-n")?(Q=ct+(Ke-Ge)*Re/Ae.y+te,Q<=Je&&Q>=ye&&Q<=ot&&(n.style.top=Ue+(Ge-Ke)/Ae.y+pn+"px"),Q>=ot&&(Q=ot),Q>=Je&&(Q=Je),Q<=ye&&(Q=ye),n.style.height=Q+"px",x.aspectRatio==="content"?(n.style.width=(Q-yt-ht-ft-ce)*Ve+ft+ce+"px",x.containment&&(je=n.overlaps(ke),je.right<=x.containment[1]&&(n.style.width=ge+"px",n.style.height=ge/Ve+"px"))):x.aspectRatio==="panel"&&(n.style.width=Q*_e+"px",x.containment&&(je=n.overlaps(ke),je.right<=x.containment[1]&&(n.style.width=ge+"px",n.style.height=ge/_e+"px")))):st.contains("jsPanel-resizeit-se")?(K=Xe+(Le-Fe)*Re/Ae.x+St,K>=ge&&(K=ge),K>=ae&&(K=ae),K<=Be&&(K=Be),n.style.width=K+"px",Re===2&&(n.style.left=it-(Le-Fe)+"px"),x.aspectRatio&&(n.style.height=K/_e+"px"),Q=ct+(Ge-Ke)*Re/Ae.y+te,Q>=ee&&(Q=ee),Q>=Je&&(Q=Je),Q<=ye&&(Q=ye),n.style.height=Q+"px",Re===2&&(n.style.top=Ue-(Ge-Ke)+"px"),x.aspectRatio==="content"?(n.style.width=(Q-yt-ht-ft-ce)*Ve+ft+ce+"px",x.containment&&(je=n.overlaps(ke),je.right<=x.containment[1]&&(n.style.width=ge+"px",n.style.height=ge/Ve+"px"))):x.aspectRatio==="panel"&&(n.style.width=Q*_e+"px",x.containment&&(je=n.overlaps(ke),je.right<=x.containment[1]&&(n.style.width=ge+"px",n.style.height=ge/_e+"px")))):st.contains("jsPanel-resizeit-sw")?(Q=ct+(Ge-Ke)*Re/Ae.y+te,Q>=ee&&(Q=ee),Q>=Je&&(Q=Je),Q<=ye&&(Q=ye),n.style.height=Q+"px",Re===2&&(n.style.top=Ue-(Ge-Ke)+"px"),x.aspectRatio&&(n.style.width=Q*_e+"px"),K=Xe+(Fe-Le)*Re/Ae.x+St,K<=ae&&K>=Be&&K<=et&&(n.style.left=it+(Le-Fe)/Ae.x+an+"px"),K>=et&&(K=et),K>=ae&&(K=ae),K<=Be&&(K=Be),n.style.width=K+"px",x.aspectRatio==="content"?(n.style.height=(K-$n-De)/Ve+yt+ht+ft+ce+"px",x.containment&&(je=n.overlaps(ke),je.bottom<=x.containment[2]&&(n.style.height=ee+"px",n.style.width=ee*Ve+"px"))):x.aspectRatio==="panel"&&(n.style.height=K/_e+"px",x.containment&&(je=n.overlaps(ke),je.bottom<=x.containment[2]&&(n.style.height=ee+"px",n.style.width=ee*_e+"px")))):st.contains("jsPanel-resizeit-ne")?(K=Xe+(Le-Fe)*Re/Ae.x+St,K>=ge&&(K=ge),K>=ae&&(K=ae),K<=Be&&(K=Be),n.style.width=K+"px",Re===2&&(n.style.left=it-(Le-Fe)+"px"),x.aspectRatio&&(n.style.height=K/_e+"px"),Q=ct+(Ke-Ge)*Re/Ae.y+te,Q<=Je&&Q>=ye&&Q<=ot&&(n.style.top=Ue+(Ge-Ke)/Ae.y+pn+"px"),Q>=ot&&(Q=ot),Q>=Je&&(Q=Je),Q<=ye&&(Q=ye),n.style.height=Q+"px",x.aspectRatio==="content"?(n.style.width=(Q-yt-ht-ft-ce)*Ve+ft+ce+"px",x.containment&&(je=n.overlaps(ke),je.right<=x.containment[1]&&(n.style.width=ge+"px",n.style.height=ge/Ve+"px"))):x.aspectRatio==="panel"&&(n.style.width=Q*_e+"px",x.containment&&(je=n.overlaps(ke),je.right<=x.containment[1]&&(n.style.width=ge+"px",n.style.height=ge/_e+"px")))):st.contains("jsPanel-resizeit-nw")&&(x.aspectRatio&&st.contains("jsPanel-resizeit-nw")&&(Le=Ge*kt,Ge=Le/kt),K=Xe+(Fe-Le)*Re/Ae.x+St,K<=ae&&K>=Be&&K<=et&&(n.style.left=it+(Le-Fe)/Ae.x+an+"px"),K>=et&&(K=et),K>=ae&&(K=ae),K<=Be&&(K=Be),n.style.width=K+"px",x.aspectRatio&&(n.style.height=K/_e+"px"),Q=ct+(Ke-Ge)*Re/Ae.y+te,Q<=Je&&Q>=ye&&Q<=ot&&(n.style.top=Ue+(Ge-Ke)/Ae.y+pn+"px"),Q>=ot&&(Q=ot),Q>=Je&&(Q=Je),Q<=ye&&(Q=ye),n.style.height=Q+"px",x.aspectRatio==="content"?n.style.width=(Q-yt-ht-ft-ce)*Ve+ft+ce+"px":x.aspectRatio==="panel"&&(n.style.width=Q*_e+"px")),window.getSelection().removeAllRanges();const nn=window.getComputedStyle(n),He={left:parseFloat(nn.left),top:parseFloat(nn.top),right:parseFloat(nn.right),bottom:parseFloat(nn.bottom),width:parseFloat(nn.width),height:parseFloat(nn.height)};x.resize.length&&z.processCallbacks(n,x.resize,!1,He,we)},z.pointermove.forEach(we=>document.addEventListener(we,ne,!1)),window.addEventListener("mouseout",We,!1)})}),z.pointerup.forEach(function(Oe){document.addEventListener(Oe,Me),window.removeEventListener("mouseout",We)}),g.disable&&(Se.style.pointerEvents="none")}),n},n.resizeit=g=>{const v=n.querySelectorAll(".jsPanel-resizeit-handle");return g==="disable"?v.forEach(S=>S.style.pointerEvents="none"):v.forEach(S=>S.style.pointerEvents="auto"),n},n.getScaleFactor=()=>{const g=n.getBoundingClientRect();return{x:g.width/n.offsetWidth,y:g.height/n.offsetHeight}},n.calcSizeFactors=()=>{const g=window.getComputedStyle(n);if(e.container==="window")n.hf=parseFloat(g.left)/(window.innerWidth-parseFloat(g.width)),n.vf=parseFloat(g.top)/(window.innerHeight-parseFloat(g.height));else if(n.parentElement){let v=n.parentElement.getBoundingClientRect();n.hf=parseFloat(g.left)/(v.width-parseFloat(g.width)),n.vf=parseFloat(g.top)/(v.height-parseFloat(g.height))}},n.saveCurrentDimensions=()=>{const g=window.getComputedStyle(n);n.currentData.width=g.width,n.currentData.height=g.height},n.saveCurrentPosition=()=>{const g=window.getComputedStyle(n);n.currentData.left=g.left,n.currentData.top=g.top},n.reposition=(...g)=>{let v=e.position,S=!0,y;return g.forEach(x=>{typeof x=="string"||typeof x=="object"?v=x:typeof x=="boolean"?S=x:typeof x=="function"&&(y=x)}),z.position(n,v),n.slaves&&n.slaves.size>0&&n.slaves.forEach(x=>x.reposition()),S&&n.saveCurrentPosition(),y&&y.call(n,n),n},n.repositionOnSnap=g=>{let v="0",S="0",y=z.pOcontainment(e.dragit.containment);if(e.dragit.snap.containment)switch(g){case"left-top":v=y[3],S=y[0];break;case"right-top":v=-y[1],S=y[0];break;case"right-bottom":v=-y[1],S=-y[2];break;case"left-bottom":v=y[3],S=-y[2];break;case"center-top":v=y[3]/2-y[1]/2,S=y[0];break;case"center-bottom":v=y[3]/2-y[1]/2,S=-y[2];break;case"left-center":v=y[3],S=y[0]/2-y[2]/2;break;case"right-center":v=-y[1],S=y[0]/2-y[2]/2;break}z.position(n,g),z.setStyles(n,{left:`calc(${n.style.left} + ${v}px)`,top:`calc(${n.style.top} + ${S}px)`})},n.overlaps=(g,v,S)=>{let y=n.getBoundingClientRect(),x=getComputedStyle(n.parentElement),ne=n.getScaleFactor(),pe={top:0,right:0,bottom:0,left:0},K,Q=0,Xe=0,ct=0,on=0;n.options.container!=="window"&&v==="paddingbox"&&(pe.top=parseInt(x.borderTopWidth,10)*ne.y,pe.right=parseInt(x.borderRightWidth,10)*ne.x,pe.bottom=parseInt(x.borderBottomWidth,10)*ne.y,pe.left=parseInt(x.borderLeftWidth,10)*ne.x),typeof g=="string"?g==="window"?K={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}:g==="parent"?K=n.parentElement.getBoundingClientRect():K=document.querySelector(g).getBoundingClientRect():K=g.getBoundingClientRect(),S&&(Q=S.touches?S.touches[0].clientX:S.clientX,Xe=S.touches?S.touches[0].clientY:S.clientY,ct=Q-K.left,on=Xe-K.top);let We=y.left<K.right&&y.right>K.left,Me=y.top<K.bottom&&y.bottom>K.top;return{overlaps:We&&Me,top:y.top-K.top-pe.top,right:K.right-y.right-pe.right,bottom:K.bottom-y.bottom-pe.bottom,left:y.left-K.left-pe.left,parentBorderWidth:pe,panelRect:y,referenceRect:K,pointer:{clientX:Q,clientY:Xe,left:ct-pe.left,top:on-pe.top,right:K.width-ct-pe.right,bottom:K.height-on-pe.bottom}}},n.setSize=()=>{if(e.panelSize){const g=z.pOsize(n,e.panelSize);n.style.width=g.width,n.style.height=g.height}else if(e.contentSize){const g=z.pOsize(n,e.contentSize);n.content.style.width=g.width,n.content.style.height=g.height,n.style.width=g.width,n.content.style.width="100%"}return n},n.resize=(...g)=>{let v=window.getComputedStyle(n),S={width:v.width,height:v.height},y=!0,x;g.forEach(K=>{typeof K=="string"?S=K:typeof K=="object"?S=Object.assign(S,K):typeof K=="boolean"?y=K:typeof K=="function"&&(x=K)});let ne=z.pOsize(n,S);n.style.width=ne.width,n.style.height=ne.height,n.slaves&&n.slaves.size>0&&n.slaves.forEach(K=>K.reposition()),y&&n.saveCurrentDimensions(),n.status="normalized";let pe=n.controlbar.querySelector(".jsPanel-btn-smallify");return pe&&(pe.style.transform="rotate(0deg)"),x&&x.call(n,n),n.calcSizeFactors(),n},n.windowResizeHandler=g=>{if(g.target===window){let v=n.status,S=e.onwindowresize,y,x;if(v==="maximized"&&S)n.maximize(!1,!0);else if(n.snapped&&v!=="minimized")n.snap(n.snapped,!0);else if(v==="normalized"||v==="smallified"||v==="maximized"){let ne=typeof S;ne==="boolean"?(y=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=y<=0?0:y+"px",x=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=x<=0?0:x+"px"):ne==="function"?S.call(n,g,n):ne==="object"&&(S.preset===!0&&(y=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=y<=0?0:y+"px",x=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=x<=0?0:x+"px"),S.callback.call(n,g,n))}else v==="smallifiedmax"&&S&&n.maximize(!1,!0).smallify();n.slaves&&n.slaves.size>0&&n.slaves.forEach(ne=>ne.reposition())}},n.setControls=(g,v)=>(n.header.querySelectorAll(".jsPanel-btn").forEach(S=>{const y=S.className.split("-"),x=y[y.length-1];n.getAttribute(`data-btn${x}`)!=="hidden"&&(S.style.display="block")}),g.forEach(S=>{const y=n.controlbar.querySelector(S);y&&(y.style.display="none")}),v&&v.call(n,n),n),n.setControlStatus=(g,v="enable",S)=>{const y=n.controlbar.querySelector(`.jsPanel-btn-${g}`);switch(v){case"disable":n.getAttribute(`data-btn${g}`)!=="removed"&&(n.setAttribute(`data-btn${g}`,"disabled"),y.style.pointerEvents="none",y.style.opacity=.4,y.style.cursor="default");break;case"hide":n.getAttribute(`data-btn${g}`)!=="removed"&&(n.setAttribute(`data-btn${g}`,"hidden"),y.style.display="none");break;case"show":n.getAttribute(`data-btn${g}`)!=="removed"&&(n.setAttribute(`data-btn${g}`,"enabled"),y.style.display="block",y.style.pointerEvents="auto",y.style.opacity=1,y.style.cursor="pointer");break;case"enable":n.getAttribute(`data-btn${g}`)!=="removed"&&(n.getAttribute(`data-btn${g}`)==="hidden"&&(y.style.display="block"),n.setAttribute(`data-btn${g}`,"enabled"),y.style.pointerEvents="auto",y.style.opacity=1,y.style.cursor="pointer");break;case"remove":n.controlbar.removeChild(y),n.setAttribute(`data-btn${g}`,"removed");break}return S&&S.call(n,n),n},n.setControlSize=g=>{const v=g.toLowerCase();n.controlbar.querySelectorAll(".jsPanel-btn").forEach(y=>{["jsPanel-btn-xl","jsPanel-btn-lg","jsPanel-btn-md","jsPanel-btn-sm","jsPanel-btn-xs"].forEach(x=>y.classList.remove(x)),y.classList.add(`jsPanel-btn-${v}`)}),v==="xl"?n.titlebar.style.fontSize="1.5rem":v==="lg"?n.titlebar.style.fontSize="1.25rem":v==="md"?n.titlebar.style.fontSize="1.05rem":v==="sm"?n.titlebar.style.fontSize=".9rem":v==="xs"&&(n.titlebar.style.fontSize=".8rem")},n.setHeaderControls=g=>{if(n.options.headerControls.add){let x=n.options.headerControls.add;Array.isArray(x)||(x=[x]),x.forEach(ne=>n.addControl(ne))}let v=[];n.controlbar.querySelectorAll(".jsPanel-btn").forEach(x=>{let ne=x.className.match(/jsPanel-btn-[a-z\d]{3,}/i),pe=ne[0].substring(12);v.push(pe)});const y=z.pOheaderControls(e.headerControls);return e.headerControls=y,v.forEach(x=>{y[x]&&n.setControlStatus(x,y[x])}),n.setControlSize(y.size),g&&g.call(n,n),n},n.setHeaderLogo=(g,v)=>{let S=[n.headerlogo],y=document.querySelector("#"+n.id+"-min");return y&&S.push(y.querySelector(".jsPanel-headerlogo")),typeof g=="string"?g.startsWith("<")?S.forEach(x=>x.innerHTML=g):S.forEach(x=>{z.emptyNode(x);let ne=document.createElement("img");ne.src=g,x.append(ne)}):S.forEach(x=>{z.emptyNode(x),x.append(g)}),n.headerlogo.childNodes.forEach(x=>{x.nodeName&&x.nodeName==="IMG"&&x.setAttribute("draggable","false")}),v&&v.call(n,n),n},n.setHeaderRemove=g=>(n.removeChild(n.header),n.content.classList.add("jsPanel-content-noheader"),["close","maximize","normalize","minimize","smallify"].forEach(v=>n.setAttribute(`data-btn${v}`,"removed")),g&&g.call(n,n),n),n.setHeaderTitle=(g,v)=>{let S=[n.headertitle],y=document.querySelector("#"+n.id+"-min");return y&&S.push(y.querySelector(".jsPanel-title")),typeof g=="string"?S.forEach(x=>x.innerHTML=g):typeof g=="function"?S.forEach(x=>{z.emptyNode(x),x.innerHTML=g()}):S.forEach(x=>{z.emptyNode(x),x.append(g)}),v&&v.call(n,n),n},n.setIconfont=(g,v=n,S)=>{if(g){let y,x;if(g==="fa"||g==="far"||g==="fal"||g==="fas"||g==="fad")y=[`${g} fa-window-close`,`${g} fa-window-maximize`,`${g} fa-window-restore`,`${g} fa-window-minimize`,`${g} fa-chevron-up`];else if(g==="material-icons")y=[g,g,g,g,g,g],x=["close","fullscreen","fullscreen_exit","call_received","expand_less"];else if(Array.isArray(g))y=[`custom-control-icon ${g[4]}`,`custom-control-icon ${g[3]}`,`custom-control-icon ${g[2]}`,`custom-control-icon ${g[1]}`,`custom-control-icon ${g[0]}`];else if(g==="bootstrap"||g==="glyphicon")y=["glyphicon glyphicon-remove","glyphicon glyphicon-fullscreen","glyphicon glyphicon-resize-full","glyphicon glyphicon-minus","glyphicon glyphicon-chevron-up"];else return v;v.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(ne=>z.emptyNode(ne).innerHTML="<span></span>"),Array.prototype.slice.call(v.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((ne,pe)=>{ne.className=y[pe],g==="material-icons"&&(ne.textContent=x[pe])})}return S&&S.call(v,v),v},n.addToolbar=(g,v,S)=>{if(g==="header"?g=n.headertoolbar:g==="footer"&&(g=n.footer),typeof v=="string")g.innerHTML=v;else if(Array.isArray(v))v.forEach(y=>{typeof y=="string"?g.innerHTML+=y:g.append(y)});else if(typeof v=="function"){let y=v.call(n,n);typeof y=="string"?g.innerHTML=y:g.append(y)}else g.append(v);return g.classList.add("active"),S&&S.call(n,n),n},n.addCloseControl=()=>{let g=document.createElement("button"),v=n.content.style.color;return g.classList.add("jsPanel-addCloseCtrl"),g.innerHTML=z.icons.close,g.style.color=v,n.options.rtl&&g.classList.add("rtl"),n.appendChild(g),z.pointerup.forEach(S=>{g.addEventListener(S,y=>{if(y.preventDefault(),y.button&&y.button>0)return!1;n.close(null,!0)})}),z.pointerdown.forEach(S=>{g.addEventListener(S,y=>y.preventDefault())}),n},n.addControl=g=>{if(!g.html)return n;g.position||(g.position=1);const v=n.controlbar.querySelectorAll(".jsPanel-btn").length;let S=document.createElement("button");S.innerHTML=g.html,S.className=`jsPanel-btn jsPanel-btn-${g.name} jsPanel-btn-${e.headerControls.size}`,S.style.color=n.header.style.color,g.position>v?n.controlbar.append(S):n.controlbar.insertBefore(S,n.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${g.position})`));const y=g.ariaLabel||g.name;return y&&S.setAttribute("aria-label",y),z.pointerup.forEach(x=>{S.addEventListener(x,ne=>{if(ne.preventDefault(),ne.button&&ne.button>0)return!1;g.handler.call(n,n,S)})}),g.afterInsert&&g.afterInsert.call(S,S),n},n.setRtl=()=>{[n.header,n.content,n.footer].forEach(g=>{g.dir="rtl",e.rtl.lang&&(g.lang=e.rtl.lang)})},n.id=e.id,n.classList.add("jsPanel-"+e.paneltype),e.paneltype==="standard"&&(n.style.zIndex=this.zi.next()),s.append(n),n.front(!1,!1),n.setTheme(e.theme),e.boxShadow&&n.classList.add(`jsPanel-depth-${e.boxShadow}`),e.header){if(e.headerLogo&&n.setHeaderLogo(e.headerLogo),n.setIconfont(e.iconfont),n.setHeaderTitle(e.headerTitle),n.setHeaderControls(),z.isIE){let g=[n.headerbar,n.controlbar];switch(n.options.headerControls.size){case"md":g.forEach(v=>{v.style.height="34px"});break;case"xs":g.forEach(v=>{v.style.height="26px"});break;case"sm":g.forEach(v=>{v.style.height="30px"});break;case"lg":g.forEach(v=>{v.style.height="38px"});break;case"xl":g.forEach(v=>{v.style.height="42px"});break}}if(e.header==="auto-show-hide"){let g="jsPanel-depth-"+e.boxShadow;n.header.style.opacity=0,n.style.backgroundColor="transparent",this.remClass(n,g),this.setClass(n.content,g),n.header.addEventListener("mouseenter",()=>{n.header.style.opacity=1,z.setClass(n,g),z.remClass(n.content,g)}),n.header.addEventListener("mouseleave",()=>{n.header.style.opacity=0,z.remClass(n,g),z.setClass(n.content,g)})}}else n.setHeaderRemove(),e.addCloseControl&&n.addCloseControl();if(e.headerToolbar&&n.addToolbar(n.headertoolbar,e.headerToolbar),e.footerToolbar&&n.addToolbar(n.footer,e.footerToolbar),e.border&&n.setBorder(e.border),e.borderRadius&&n.setBorderRadius(e.borderRadius),e.css)for(const[g,v]of Object.entries(e.css))if(g==="panel")n.className+=` ${v}`;else{let S=n.querySelector(`.jsPanel-${g}`);S&&(S.className+=` ${v}`)}if(e.content&&(typeof e.content=="function"?e.content.call(n,n):typeof e.content=="string"?n.content.innerHTML=e.content:n.content.append(e.content)),e.contentAjax&&this.ajax(e.contentAjax,n),e.contentFetch&&this.fetch(e.contentFetch,n),e.contentOverflow){const g=e.contentOverflow.split(" ");g.length===1?n.content.style.overflow=g[0]:g.length===2&&(n.content.style.overflowX=g[0],n.content.style.overflowY=g[1])}if(e.autoclose){typeof e.autoclose=="number"?e.autoclose={time:e.autoclose+"ms"}:typeof e.autoclose=="string"&&(e.autoclose={time:e.autoclose});let g=Object.assign({},z.defaultAutocloseConfig,e.autoclose);g.time&&typeof g.time=="number"&&(g.time+="ms");let v=n.progressbar.querySelector("div");v.addEventListener("animationend",S=>{S.stopPropagation(),n.progressbar.classList.remove("active"),n.close()}),g.progressbar&&(n.progressbar.classList.add("active"),g.background?z.colorNames[g.background]?n.progressbar.style.background="#"+z.colorNames[g.background]:n.progressbar.style.background=g.background:n.progressbar.classList.add("success-bg")),v.style.animation=`${g.time} progressbar`}if(e.rtl&&n.setRtl(),n.setSize(),n.status="normalized",e.position?this.position(n,e.position):n.style.opacity=1,document.dispatchEvent(u),n.calcSizeFactors(),e.animateIn&&(n.addEventListener("animationend",()=>{this.remClass(n,e.animateIn)}),this.setClass(n,e.animateIn)),e.syncMargins){let g=this.pOcontainment(e.maximizedMargin);e.dragit&&(e.dragit.containment=g,e.dragit.snap===!0?(e.dragit.snap=z.defaultSnapConfig,e.dragit.snap.containment=!0):e.dragit.snap&&(e.dragit.snap.containment=!0)),e.resizeit&&(e.resizeit.containment=g)}if(e.dragit?(["start","drag","stop"].forEach(g=>{e.dragit[g]?typeof e.dragit[g]=="function"&&(e.dragit[g]=[e.dragit[g]]):e.dragit[g]=[]}),n.drag(e.dragit),n.addEventListener("jspaneldragstop",g=>{g.panel===n&&n.calcSizeFactors()},!1)):n.titlebar.style.cursor="default",e.resizeit){["start","resize","stop"].forEach(v=>{e.resizeit[v]?typeof e.resizeit[v]=="function"&&(e.resizeit[v]=[e.resizeit[v]]):e.resizeit[v]=[]}),n.sizeit(e.resizeit);let g;n.addEventListener("jspanelresizestart",v=>{v.panel===n&&(g=n.status)},!1),n.addEventListener("jspanelresizestop",v=>{v.panel===n&&(g==="smallified"||g==="smallifiedmax"||g==="maximized")&&parseFloat(n.style.height)>parseFloat(window.getComputedStyle(n.header).height)&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(u),document.dispatchEvent(l),e.onstatuschange&&z.processCallbacks(n,e.onstatuschange,"every"),n.calcSizeFactors())},!1)}if(n.saveCurrentDimensions(),n.saveCurrentPosition(),e.setStatus&&(e.setStatus==="smallifiedmax"?n.maximize().smallify():e.setStatus==="smallified"?n.smallify():n[e.setStatus.slice(0,-1)]()),this.pointerdown.forEach(g=>{n.addEventListener(g,v=>{!v.target.closest(".jsPanel-btn-close")&&!v.target.closest(".jsPanel-btn-minimize")&&e.paneltype==="standard"&&n.front()},!1)}),e.onwindowresize&&n.options.container==="window"&&window.addEventListener("resize",n.windowResizeHandler,!1),e.onparentresize){let g=e.onparentresize,v=typeof g,S=n.isChildpanel();if(S){const y=S.content;let x=[];n.parentResizeHandler=ne=>{if(ne.panel===S){x[0]=y.offsetWidth,x[1]=y.offsetHeight;let pe=n.status,K,Q;pe==="maximized"&&g?n.maximize():n.snapped&&pe!=="minimized"?n.snap(n.snapped,!0):pe==="normalized"||pe==="smallified"||pe==="maximized"?v==="function"?g.call(n,n,{width:x[0],height:x[1]}):v==="object"&&g.preset===!0?(K=(x[0]-n.offsetWidth)*n.hf,n.style.left=K<=0?0:K+"px",Q=(x[1]-n.offsetHeight)*n.vf,n.style.top=Q<=0?0:Q+"px",g.callback.call(n,n,{width:x[0],height:x[1]})):v==="boolean"&&(K=(x[0]-n.offsetWidth)*n.hf,n.style.left=K<=0?0:K+"px",Q=(x[1]-n.offsetHeight)*n.vf,n.style.top=Q<=0?0:Q+"px"):pe==="smallifiedmax"&&g&&n.maximize().smallify()}},document.addEventListener("jspanelresize",n.parentResizeHandler,!1)}}return this.globalCallbacks&&(Array.isArray(this.globalCallbacks)?this.globalCallbacks.forEach(g=>g.call(n,n)):this.globalCallbacks.call(n,n)),e.callback&&(Array.isArray(e.callback)?e.callback.forEach(g=>g.call(n,n)):e.callback.call(n,n)),t&&(Array.isArray(t)?t.forEach(g=>g.call(n,n)):t.call(n,n)),document.dispatchEvent(o),n}};const jf={id:"html-preview",name:"HTML Preview",type:"cell-renderer",version:"0.3.0",description:`Shows a cell's HTML as a plain-text preview (first N characters); click to edit the raw HTML in a dialog, or use the popup icon to view the full rendered HTML in a window. Apply by setting a column's renderer to "html-preview". For direct in-cell rendering use the "html" renderer instead.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-preview.ts"};let Bi=30;async function Ta(e){const t=await e.settings.get("html-preview","maxChars");typeof t=="number"&&Number.isFinite(t)&&t>0&&(Bi=Math.floor(t))}function zf(e){customElements.get("html-preview-cell")||customElements.define("html-preview-cell",Lf),e.ui.registerCellRenderer("html-preview","html-preview-cell"),e.ui.registerSettings("html-preview","HTML Preview",[{key:"maxChars",label:"Max characters shown",type:"number",default:30,scope:"workspace",description:"HTML-preview cells show the first N characters of the text; use the popup icon on the right to open the full rendered HTML in a window. Applies to cells rendered after the change (reload to refresh all)."}]),Ta(e),e.events.on("app:ready",()=>void Ta(e))}function Aa(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}let Pa=0;function Ff(e){const t=document.createElement("div");return t.innerHTML=e,(t.textContent??"").replace(/\s+/g," ").trim()}class Lf extends HTMLElement{constructor(){super(...arguments),this._value="",this._label="HTML"}set value(t){const r=t??"";this._value!==r&&(this._value=r,this.render())}get value(){return this._value}set column(t){this._label=t?.label??"HTML"}connectedCallback(){this.render()}render(){if(this.innerHTML="",!this._value){const l=document.createElement("span");l.style.cssText="color:#9ca3af;cursor:text",l.textContent="empty",l.title="Click to edit the HTML",l.addEventListener("click",()=>this.openEditor()),this.append(l);return}const t=document.createElement("span");t.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%";const r=document.createElement("span"),s=Ff(this._value);r.textContent=s.length>Bi?s.slice(0,Bi)+"…":s,r.title="Click to edit the HTML",r.style.cssText="flex:0 1 auto;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:text",r.addEventListener("click",l=>{l.stopPropagation(),this.openEditor()});const n=document.createElement("span");n.style.cssText="flex:1 1 auto";const o=document.createElement("button");o.type="button",o.title="Open the HTML in a window",o.setAttribute("aria-label","Open the HTML in a window"),o.innerHTML='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3h7v7"/><path d="M21 3l-9 9"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/></svg>',o.style.cssText="flex:none;display:inline-flex;align-items:center;justify-content:center;padding:1px;background:none;border:0;color:#9ca3af;cursor:pointer;line-height:0",o.addEventListener("mouseenter",()=>o.style.color="#4b5563"),o.addEventListener("mouseleave",()=>o.style.color="#9ca3af"),o.addEventListener("click",l=>{l.stopPropagation(),this.openWindow()}),t.append(r,n,o),this.append(t)}openWindow(){const t=document.createElement("div");t.style.cssText="padding:0.75rem;overflow:auto;height:100%;box-sizing:border-box",t.innerHTML=this._value,z.create({id:`easydb-html-popup-${++Pa}`,container:Aa(),headerTitle:this._label,theme:"#7c3aed",content:t,contentSize:"520 400",position:"center-top 0 60",minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1},resizeit:{containment:!1}})}openEditor(){const t=document.createElement("div");t.style.cssText="display:flex;flex-direction:column;gap:0.5rem;height:100%;box-sizing:border-box;padding:0.5rem";const r=document.createElement("textarea");r.value=this._value,r.style.cssText="flex:1 1 auto;width:100%;box-sizing:border-box;resize:none;font-family:monospace;font-size:0.85rem";const s=document.createElement("div");s.style.cssText="display:flex;justify-content:flex-end;gap:0.5rem;flex:none";const n=document.createElement("button");n.type="button",n.textContent="Cancel",n.style.cssText="padding:0.3rem 0.8rem;cursor:pointer";const o=document.createElement("button");o.type="button",o.textContent="Save",o.style.cssText="padding:0.3rem 0.8rem;cursor:pointer;background:#7c3aed;color:#fff;border:0;border-radius:0.25rem",s.append(n,o),t.append(r,s);const l=z.create({id:`easydb-html-edit-${++Pa}`,container:Aa(),headerTitle:`Edit ${this._label}`,theme:"#7c3aed",content:t,contentSize:"520 400",position:"center",minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1},resizeit:{containment:!1}});n.addEventListener("click",()=>l.close()),o.addEventListener("click",()=>{this._value=r.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:r.value},bubbles:!0,composed:!0})),l.close(),this.render()}),r.addEventListener("keydown",c=>{c.key==="Enter"&&(c.ctrlKey||c.metaKey)?(c.preventDefault(),o.click()):c.key==="Escape"&&(c.preventDefault(),l.close())}),setTimeout(()=>r.focus(),0)}}const Mf=Object.freeze(Object.defineProperty({__proto__:null,init:zf,meta:jf},Symbol.toStringTag,{value:"Module"})),Bf={id:"html-render",name:"HTML",type:"cell-renderer",version:"0.1.0",description:`Renders a cell's value directly as HTML (unescaped, in full, no popup). Apply by setting a column's renderer to "html". For a truncated preview use "html-preview".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/html-render.ts"};function Nf(e){customElements.get("html-render-cell")||customElements.define("html-render-cell",Uf),e.ui.registerCellRenderer("html","html-render-cell")}class Uf extends HTMLElement{constructor(){super(...arguments),this._value="",this.editing=!1}set value(t){const r=t??"";this._value!==r&&(this._value=r,this.editing||this.render())}get value(){return this._value}connectedCallback(){this.editing||this.render()}render(){this.innerHTML="";const t=document.createElement("span");t.style.cssText="display:inline-block;min-width:1ch;cursor:text",t.title="Click to edit",this._value?t.innerHTML=this._value:(t.style.color="#9ca3af",t.textContent="empty"),t.addEventListener("click",()=>this.beginEdit()),this.append(t)}beginEdit(){this.editing=!0,this.innerHTML="";const t=document.createElement("input");t.type="text",t.value=this._value,t.style.cssText="width:100%;box-sizing:border-box";let r=!1;const s=()=>{r||(r=!0,this.editing=!1,this._value=t.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:t.value},bubbles:!0,composed:!0})),this.render())};t.addEventListener("blur",s),t.addEventListener("keydown",n=>{n.key==="Enter"?(n.preventDefault(),t.blur()):n.key==="Escape"&&(n.preventDefault(),r=!0,this.editing=!1,this.render())}),this.append(t),t.focus(),t.select()}}const Hf=Object.freeze(Object.defineProperty({__proto__:null,init:Nf,meta:Bf},Symbol.toStringTag,{value:"Module"})),qf={id:"cell-link",name:"Cell Link",type:"cell-renderer",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-link.ts"};function Wf(e){customElements.get("cell-link")||customElements.define("cell-link",Kf),e.ui.registerCellRenderer("link","cell-link")}class Kf extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1}set value(t){const r=t==null?"":String(t);this._value!==r&&(this._value=r,this._editing=!1,this.render())}get value(){return this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="";const t=this._value,r=this._editing?null:Vf(t),s=!this._editing&&!r?Gf(t):null,n=!this._editing&&!r&&!s?Yf(t):null;if(r||s||n){const o=document.createElement("span");o.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const l=document.createElement("a");l.href=r?t:s?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,r&&(l.target="_blank",l.rel="noopener noreferrer"),l.textContent=t,l.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",l.title=r?`Open ${t}`:s?`Email ${t}`:`Call ${t}`;const c=document.createElement("button");c.type="button",c.title="Edit",c.textContent="✎",c.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",c.addEventListener("click",u=>{u.preventDefault(),u.stopPropagation(),this._editing=!0,this.render()}),o.append(l,c),this.append(o)}else{const o=document.createElement("input");o.type="text",o.value=t,o.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",o.addEventListener("change",()=>this.commit(o.value)),o.addEventListener("keydown",l=>{l.key==="Enter"?(l.preventDefault(),this.commit(o.value)):l.key==="Escape"&&(this._editing=!1,this.render())}),this.append(o),this._editing&&setTimeout(()=>{o.focus(),o.select()},0)}}commit(t){this._value=t,this._editing=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Vf(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function Gf(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function Yf(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const r=t.replace(/\D/g,"");if(r.length<7||r.length>15)return null;const s=/[ ()\-.]/.test(t),n=t.startsWith("+");return!s&&!n&&r.length<10?null:t}const Xf=Object.freeze(Object.defineProperty({__proto__:null,init:Wf,meta:qf},Symbol.toStringTag,{value:"Module"}));var Qf=Object.defineProperty,Jf=Object.getOwnPropertyDescriptor,Ns=(e,t,r,s)=>{for(var n=s>1?void 0:s?Jf(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&Qf(t,r,n),n};function Zf(e,t,r){(rn.instance??tp()).show(e,t,r)}function ep(e){if(!e)return null;if(e.source){const t=e.source.type,r=e.source.writable?"Edits you make are written back to the source.":"It is read-only — edits are not saved back to the source.";return{label:`Connected (live ${t})`,note:`This table is connected to a live ${t} backend: its rows are fetched from the source on demand and are not stored locally. ${r} Closing its window just disconnects the view — the source data is untouched.`}}return e.origin?{label:"Imported (snapshot)",note:"This table is a local snapshot imported once from its origin. The rows live in this browser, so edits stay local; use Refresh to re-fetch the latest data from the origin.",url:e.origin.url}:{label:"Local",note:"This table was created in the app and is stored locally in your browser."}}function tp(){const e=document.createElement("table-info-dialog");return document.body.appendChild(e),e}let rn=class extends Ne{constructor(){super(...arguments),this.name="",this.info=null,this.provenance=null,this.dialogEl=null,this.close=()=>this.dialogEl?.close(),this.onSubmit=e=>{e.preventDefault(),this.close()}}connectedCallback(){super.connectedCallback(),rn.instance=this}disconnectedCallback(){super.disconnectedCallback(),rn.instance===this&&(rn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Xt(this.dialogEl,e)}show(e,t,r){this.name=e,this.info=t,this.provenance=r??null,this.updateComplete.then(()=>this.dialogEl?.showModal())}row(e,t,r){if(!t&&!r)return me;const s=r?A`<a href=${r} target="_blank" rel="noopener noreferrer">${t||r}</a>`:A`${t}`;return A`<dt>${e}</dt>
      <dd>${s}</dd>`}render(){const e=this.info,t=!!(e?.source||e?.sourceUrl||e?.license||e?.licenseUrl||e?.about||e?.aboutUrl),r=ep(this.provenance);return A`
      <dialog @cancel=${this.close} @keydown=${Yt}>
        <button type="button" class="close-x" title="Close" @click=${this.close}>×</button>
        <form @submit=${this.onSubmit}>
          <div class="dialog-header">
            <h2>${this.name}</h2>
            <div class="header-actions">
              <button type="submit" class="ghost">Close</button>
            </div>
          </div>
          <div class="dialog-body">
            ${r?A`<div class="kind">
                  <span class="kind-label">${r.label}</span>
                  <p class="kind-note">${r.note}</p>
                  ${r.url?A`<div class="kind-origin">
                        <a href=${r.url} target="_blank" rel="noopener noreferrer">${r.url}</a>
                      </div>`:me}
                </div>`:me}
            ${e?.descriptionHtml?A`<div class="desc">${ir(e.descriptionHtml)}</div>`:e?.description?A`<div class="desc">${e.description}</div>`:me}
            ${t?A`<dl>
                  ${this.row("Source",e?.source,e?.sourceUrl)}
                  ${this.row("License",e?.license,e?.licenseUrl)}
                  ${this.row("About",e?.about,e?.aboutUrl)}
                </dl>`:me}
            ${!e?.description&&!e?.descriptionHtml&&!t&&!r?A`<p class="empty">No additional information.</p>`:me}
          </div>
        </form>
      </dialog>
    `}};rn.instance=null;rn.styles=[Gt,qe`
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
    `];Ns([q()],rn.prototype,"name",2);Ns([q()],rn.prototype,"info",2);Ns([q()],rn.prototype,"provenance",2);rn=Ns([tt("table-info-dialog")],rn);const np=.25,rp=4;function sp(e){return Math.min(rp,Math.max(np,e))}function Ia(e,t,r){return{x:e.x+t,y:e.y+r,scale:e.scale}}const Sr={x:0,y:0,scale:1};function Ra(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function ip(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function op(e,t){let r={...Sr};t.style.transformOrigin="0 0";const s=new Set,n=()=>{t.style.transform=`translate(${r.x}px, ${r.y}px) scale(${r.scale})`;for(const v of s)v({...r})};let o="none",l={...Sr},c=0,u=0,m=0,$=0,b=0,k=0;const B=(v,S)=>{const y=e.getBoundingClientRect();return{x:v-y.left,y:S-y.top}},L=v=>{if(v.touches.length===2){o="pinch",l={...r};const[S,y]=[v.touches[0],v.touches[1]];m=Ra(S,y)||1;const x=B((S.clientX+y.clientX)/2,(S.clientY+y.clientY)/2);$=(x.x-r.x)/r.scale,b=(x.y-r.y)/r.scale,v.preventDefault();return}if(v.touches.length===1&&!ip(v.target)){const S=v.timeStamp;if(S-k<300){r={...Sr},n(),k=0,o="none",v.preventDefault();return}k=S,o="pan",l={...r},c=v.touches[0].clientX,u=v.touches[0].clientY}else o="none"},F=v=>{if(o==="pan"&&v.touches.length===1){const S=v.touches[0];r=Ia(l,S.clientX-c,S.clientY-u),n(),v.preventDefault()}else if(o==="pinch"&&v.touches.length>=2){const[S,y]=[v.touches[0],v.touches[1]],x=sp(l.scale*(Ra(S,y)/m)),ne=B((S.clientX+y.clientX)/2,(S.clientY+y.clientY)/2);r={x:ne.x-$*x,y:ne.y-b*x,scale:x},n(),v.preventDefault()}},H=v=>{v.touches.length===0?o="none":v.touches.length===1&&o==="pinch"&&(o="pan",l={...r},c=v.touches[0].clientX,u=v.touches[0].clientY)};let G=!1,he={...Sr},ie=0,oe=0,V=!1;const J=(v,S)=>{const y=e.getBoundingClientRect();return v>=y.left&&v<=y.right&&S>=y.top&&S<=y.bottom},ue=v=>{if(!G)return;const S=v.clientX-ie,y=v.clientY-oe;!V&&Math.hypot(S,y)<4||(V=!0,document.body.style.cursor="grabbing",r=Ia(he,S,y),n(),v.preventDefault())},$e=()=>{G&&(G=!1,document.body.style.cursor="",window.removeEventListener("mousemove",ue,!0),window.removeEventListener("mouseup",Te,!0))};function Te(){$e()}const Ie=v=>{v.button===2&&J(v.clientX,v.clientY)&&(G=!0,V=!1,he={...r},ie=v.clientX,oe=v.clientY,window.addEventListener("mousemove",ue,!0),window.addEventListener("mouseup",Te,!0))},g=v=>{V&&(v.preventDefault(),V=!1)};return e.addEventListener("touchstart",L,{passive:!1}),e.addEventListener("touchmove",F,{passive:!1}),e.addEventListener("touchend",H),e.addEventListener("touchcancel",H),window.addEventListener("mousedown",Ie,!0),window.addEventListener("contextmenu",g,!0),{snapshot:()=>({...r}),reset:()=>{r={...Sr},n()},restore:v=>{r={...v},n()},subscribe:v=>(s.add(v),()=>s.delete(v)),dispose:()=>{e.removeEventListener("touchstart",L),e.removeEventListener("touchmove",F),e.removeEventListener("touchend",H),e.removeEventListener("touchcancel",H),window.removeEventListener("mousedown",Ie,!0),window.removeEventListener("contextmenu",g,!0),$e()}}}function Ql(e,t){let r=null;const s=n=>{const o=document.getElementById(e);o&&(o.style.transformOrigin="0 0",o.style.transform=`translate(${-n.x/n.scale}px, ${-n.y/n.scale}px) scale(${1/n.scale})`)};return{enter(){const n=t();r||!n||(s(n.snapshot()),r=n.subscribe(s))},exit(){r?.(),r=null;const n=document.getElementById(e);n&&(n.style.transform="",n.style.transformOrigin="")}}}const ap=200,lp=100;function cp(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<ap||e.h<lp?null:{...e}}var dp=Object.defineProperty,up=Object.getOwnPropertyDescriptor,Ur=(e,t,r,s)=>{for(var n=s>1?void 0:s?up(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&dp(t,r,n),n};let Xn=class extends Ne{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return A`<button
        class="icon ${e?"active":""}"
        title=${e?`Filtering rows: ${this.query}`:"Search rows in this table"}
        @click=${this.openSearch}
      >
        <span class="mi sm">search</span>
      </button>`}return A`<input
      type="search"
      placeholder="search…"
      .value=${this.query}
      @input=${this.onInput}
      @blur=${this.onBlur}
    />`}};Xn.styles=[Qt,qe`
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
    `];Ur([Mt({type:String})],Xn.prototype,"tableId",2);Ur([q()],Xn.prototype,"query",2);Ur([q()],Xn.prototype,"open",2);Ur([fn("input")],Xn.prototype,"inputEl",2);Xn=Ur([tt("panel-search")],Xn);var hp=Object.defineProperty,fp=Object.getOwnPropertyDescriptor,hr=(e,t,r,s)=>{for(var n=s>1?void 0:s?fp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&hp(t,r,n),n};let Dn=class extends Ne{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.rowsActive=!1,this.runTableButton=async(e,t)=>{const r=t?.currentTarget??void 0,s=await be();try{await Promise.resolve(e.onClick(s.api,{tableId:this.tableId,anchor:r}))}catch(n){console.error(`[table-button:${e.id}]`,n)}}}async connectedCallback(){super.connectedCallback();const e=await be();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(r=>r.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await be();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await be(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const r={};for(const s of t.columns)r[s.field]=pp(s);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:r,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}render(){return A`
      <button title="Add a blank row" aria-label="Add row" @click=${this.addRow}>
        <span class="mi sm">add</span>
      </button>
      <button title="Edit columns" aria-label="Columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span>
      </button>
      ${this.tableButtons.filter(e=>!e.visible||this.table!=null&&e.visible(this.table)).map(e=>A`<button
              class=${e.danger?"danger":""}
              title=${e.tooltip??e.label}
              aria-label=${e.label}
              @click=${t=>this.runTableButton(e,t)}
            >
              ${e.icon?e.icon.trimStart().startsWith("<svg")?A`<span class="icon-svg">${Zi(e.icon)}</span>`:A`<span class="mi sm">${e.icon}</span>`:A`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};Dn.styles=[Qt,qe`
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
    `];hr([Mt({type:String})],Dn.prototype,"tableId",2);hr([Mt({type:Boolean})],Dn.prototype,"active",2);hr([q()],Dn.prototype,"rowCount",2);hr([q()],Dn.prototype,"tableButtons",2);hr([q()],Dn.prototype,"table",2);Dn=hr([tt("panel-footer")],Dn);function pp(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function ki(e){return e.title?.trim()?e.title.trim():e.name}function mp(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function gp(e){const t=document.querySelector("app-shell")?.shadowRoot,r=t?.querySelector("header"),s=t?.querySelector("footer");r&&(e.style.top=`${r.offsetHeight}px`),s&&(e.style.bottom=`${s.offsetHeight}px`)}const yn=new Map,Jl=new Set;let Da=!1,fo=null;function Zl(){return fo}function bp(e){const t=yn.get(e);return t?(t.status==="minimized"&&t.normalize?.(),t.front?.(),!0):(yp(e),!0)}async function yp(e){const t=await be(),r=await t.store.tables.findOne(e);r?.windowGeometry?.closed&&await t.store.tables.patch(e,{windowGeometry:{...r.windowGeometry,closed:!1},updatedAt:Date.now()})}async function wp(e){const t=await be();await _p(e,t)}async function vp(){if(Da)return;Da=!0;const e=await be(),t=document.getElementById("easydb-panels"),r=document.getElementById("easydb-panels-viewport");if(t&&r){fo=op(t,r);const n=()=>gp(t);n(),window.addEventListener("resize",n);const o=document.querySelector("app-shell")?.shadowRoot,l=o?.querySelector("header"),c=o?.querySelector("footer");if(typeof ResizeObserver<"u"&&(l||c)){const u=new ResizeObserver(n);l&&u.observe(l),c&&u.observe(c)}}const s=(await e.store.tables.find()).filter(n=>n.workspaceId===e.workspaceId);s.sort(Ci);for(const n of s)n.windowGeometry?.closed||Oa(n,e);e.store.tables.subscribe(n=>{const o=n.filter(u=>u.workspaceId===e.workspaceId),l=new Map(o.map(u=>[u.id,u]));for(const[u,m]of yn){const $=l.get(u);if(!$||$.windowGeometry?.closed){yn.delete(u),Jl.add(u);try{m.status!=="closed"&&m.close()}catch{}}}const c=o.filter(u=>!yn.has(u.id)&&!u.windowGeometry?.closed).sort(Ci);for(const u of c)Oa(u,e)}),document.addEventListener("easydb:restack-windows",()=>{let n=0;const o=async()=>{const l=(await e.store.tables.find()).filter(c=>c.workspaceId===e.workspaceId&&!c.windowGeometry?.minimized).sort(Ci);if(n<12&&!l.every(c=>yn.has(c.id))){n++,setTimeout(()=>void o(),80);return}for(const c of l)try{yn.get(c.id)?.front?.()}catch{}};o()})}function Ci(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const xp=720,$p=360;function Oa(e,t){const r=`panel-${ec(e.id)}`,s=mp(),n=cp(e.windowGeometry),o=n?.minimized===!0,l=()=>{const S=document.createElement("data-table");return S.tableId=e.id,S.style.height="100%",S},c=o?document.createElement("div"):l();let u=o?null:c,m=ki(e),$=-1,b=-1;const k=()=>{typeof V.setHeaderTitle=="function"&&V.setHeaderTitle(m+El($,b))},B=S=>{const y=S.detail;y.key===e.id&&($=y.count,b=y.total,k())};document.addEventListener(Es,B);const L=()=>{G.active=!1,u?.remove(),u=null},F=()=>{if(u)return;const S=document.getElementById(r)?.querySelector(".jsPanel-content");if(!S)return;S.replaceChildren();const y=l();S.appendChild(y),u=y,G.active=!0},H=document.createElement("panel-search");H.tableId=e.id;const G=document.createElement("panel-footer");G.tableId=e.id,G.active=!o;const he=Ql(r,()=>fo),ie=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:Cp(),oe=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:`${xp} ${$p}`},V=z.create({id:r,container:s,headerTitle:m,footerToolbar:G,theme:"primary",content:c,...oe,position:ie,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>Ei(e.id,t)},resizeit:{containment:!1,stop:()=>Ei(e.id,t)},onfronted:()=>Sp(e.id,t),onclosed:async()=>{if(yn.delete(e.id),Jl.delete(e.id))return;const S=await t.store.tables.findOne(e.id);if(!S)return;const y=S.windowGeometry??{x:60,y:60,w:720,h:360,z:1,minimized:!1,maximized:!1};await t.store.tables.patch(e.id,{windowGeometry:{...y,closed:!0},updatedAt:Date.now()})},onstatuschange:S=>{S.status==="minimized"?L():(S.status==="normalized"||S.status==="maximized")&&F(),S.status==="maximized"?he.enter():he.exit(),Ei(e.id,t)}});yn.set(e.id,V);const J=document.getElementById(r),ue=J?.querySelector(".jsPanel-controlbar");ue&&ue.prepend(H);const $e=J?.querySelector(".jsPanel-titlebar");$e&&($e.tabIndex=-1,$e.style.outline="none",$e.addEventListener("pointerdown",()=>$e.focus()));let Te=null;const Ie=document.createElement("button");Ie.type="button",Ie.title="Table info",Ie.setAttribute("aria-label","Table info"),Ie.className="eda-info-btn",Ie.textContent="ⓘ",Ie.style.cssText="display:none;background:none;border:0;color:inherit;cursor:pointer;font-size:1rem;line-height:1;padding:0 0.3rem;",Ie.addEventListener("click",S=>{S.stopPropagation(),Te&&Zf(m,Te.info??{},{source:Te.source,origin:Te.origin})}),ue?.prepend(Ie);const g=S=>{Te=S??null;const y=!!(S?.info||S?.source||S?.origin);Ie.style.display=y?"inline-flex":"none"};g(e),n?.maximized&&typeof V.maximize=="function"?queueMicrotask(()=>V.maximize?.()):n?.minimized&&typeof V.minimize=="function"&&queueMicrotask(()=>V.minimize?.()),t.store.tables.subscribe(S=>{const y=S.find(x=>x.id===e.id);y&&(g(y),ki(y)!==m&&(m=ki(y),k()))});const v=V.close.bind(V);V.close=()=>(document.removeEventListener(Es,B),v())}let kp=0;function Cp(){const e=kp++;return{my:"left-top",at:"left-top",offsetX:40+e%8*30,offsetY:80+e%8*30}}async function Ei(e,t){const r=document.getElementById(`panel-${ec(e)}`);if(!r)return;const s=yn.get(e)?.status??"normalized";try{const o=(await t.store.tables.findOne(e))?.windowGeometry,l=s==="minimized",c=s==="maximized";let u=r.offsetLeft,m=r.offsetTop,$=r.offsetWidth,b=r.offsetHeight;(l||c)&&o&&(u=o.x,m=o.y,$=o.w,b=o.h),u<=-9e3&&(u=o?.x??40);const k={x:u,y:m,w:$,h:b,z:o?.z??0,minimized:l,maximized:c};await t.store.tables.patch(e,{windowGeometry:k,updatedAt:Date.now()})}catch{}}let Si=0;function Ep(){return Si=Math.max(Date.now(),Si+1),Si}async function Sp(e,t){try{const r=await t.store.tables.findOne(e);if(!r)return;const s=r.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...s,z:Ep()},updatedAt:Date.now()})}catch{}}async function _p(e,t){if(!(await t.store.tables.findOne(e))?.source){const s=t.store.rows(e),n=await s.find();await s.bulkRemove(n.map(o=>o.id))}await t.store.tables.remove(e)}function ec(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}const Tp={id:"delete-table",name:"Delete Table",type:"ui",version:"0.1.0",description:"Adds a trash button to each table window that permanently deletes the table and its rows (with confirmation).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/delete-table.ts"};function Ap(e){e.ui.registerTableButton({id:"delete-table:delete",label:"Delete",icon:"delete",tooltip:"Delete this table permanently",onClick:async(t,r)=>{const s=await t.store.tables.findOne(r.tableId);!s||!await t.ui.dialogs.confirm(s.source?`Delete the live table "${s.name}"? Its data stays on the server — only the local connection is removed.`:`Permanently delete table "${s.name}" and all its rows? This can't be undone.`,"Delete table")||(await wp(r.tableId),t.ui.dialogs.toast(`Deleted "${s.name}".`,{kind:"success",title:"Delete table"}))}})}const Pp=Object.freeze(Object.defineProperty({__proto__:null,init:Ap,meta:Tp},Symbol.toStringTag,{value:"Module"}));var Ip=Object.defineProperty,Rp=Object.getOwnPropertyDescriptor,Us=(e,t,r,s)=>{for(var n=s>1?void 0:s?Rp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&Ip(t,r,n),n};let ps=null;function Dp(){return ps||(ps=document.createElement("top-progress"),document.body.appendChild(ps)),ps}let On=class extends Ne{constructor(){super(...arguments),this.visible=!1,this.frac=null,this.label="",this.active=new Set}static begin(e=""){return Dp().begin(e)}begin(e){const t=Symbol("progress");return this.active.add(t),this.label=e,this.frac=null,this.visible=!0,{fraction:r=>{this.active.has(t)&&(this.frac=r)},done:()=>{this.active.delete(t),this.active.size===0&&(this.visible=!1,this.frac=null,this.label="")}}}render(){if(!this.visible)return A``;const e=this.frac!=null;return A`<div
      class="track"
      role="progressbar"
      aria-label=${this.label||"Loading"}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow=${e?Math.round(this.frac*100):""}
    >
      ${e?A`<div
            class="bar determinate"
            style="width:${Math.round(this.frac*100)}%"
          ></div>`:A`<div class="bar indet"></div>`}
    </div>`}};On.styles=qe`
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
  `;Us([q()],On.prototype,"visible",2);Us([q()],On.prototype,"frac",2);Us([q()],On.prototype,"label",2);On=Us([tt("top-progress")],On);const tc=Object.freeze(Object.defineProperty({__proto__:null,get TopProgress(){return On}},Symbol.toStringTag,{value:"Module"}));var Op=Object.defineProperty,jp=Object.getOwnPropertyDescriptor,nc=(e,t,r,s)=>{for(var n=s>1?void 0:s?jp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&Op(t,r,n),n};function ja(e){return(vn.instance??zp()).open(e)}function zp(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let vn=class extends Ne{constructor(){super(...arguments),this.rows=[],this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((r,s)=>{const n=this.rows[s],o=n.field.trim(),l=n.label.trim()||o;return{...r,field:o,label:l,hidden:n.hidden}});this.finish(t)},this.toggleAllHidden=()=>{const e=this.rows.length>0&&this.rows.every(t=>t.hidden);this.rows=this.rows.map(t=>({...t,hidden:!e}))}}connectedCallback(){super.connectedCallback(),vn.instance=this}disconnectedCallback(){super.disconnectedCallback(),vn.instance===this&&(vn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Xt(this.dialogEl,e)}open(e){return this.source=e,this.rows=e.map(t=>({field:t.field,label:t.label,hidden:!!t.hidden})),new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((r,s)=>{const n=r.field.trim().toLowerCase();if(n===""){e.add(s);return}(t.get(n)??t.set(n,[]).get(n)).push(s)});for(const r of t.values())if(r.length>1)for(const s of r)e.add(s);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,r){this.rows=this.rows.map((s,n)=>n===e?{...s,[t]:r}:s)}setHidden(e,t){this.rows=this.rows.map((r,s)=>s===e?{...r,hidden:t}:r)}render(){const e=this.invalidIndices(),t=e.size;return A`
      <dialog @cancel=${this.onCancel} @keydown=${Yt}>
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
              ${this.rows.map((r,s)=>A`
                  <input
                    class=${e.has(s)?"invalid":""}
                    .value=${r.field}
                    aria-label=${`Column ${s+1} name`}
                    @input=${n=>this.updateRow(s,"field",n.target.value)}
                  />
                  <input
                    .value=${r.label}
                    aria-label=${`Column ${s+1} label`}
                    @input=${n=>this.updateRow(s,"label",n.target.value)}
                  />
                  <div class="hidecell">
                    <input
                      type="checkbox"
                      .checked=${r.hidden}
                      aria-label=${`Hide column ${s+1}`}
                      @change=${n=>this.setHidden(s,n.target.checked)}
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
    `}};vn.instance=null;vn.styles=[Gt,qe`
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
    `];nc([q()],vn.prototype,"rows",2);vn=nc([tt("column-names-dialog")],vn);var Fp=Object.defineProperty,Lp=Object.getOwnPropertyDescriptor,Jt=(e,t,r,s)=>{for(var n=s>1?void 0:s?Lp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&Fp(t,r,n),n};const Mp="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",Bp="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",Np='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',za=[{label:"Northwind — sample database (JSON dump)",url:Mp,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:Bp,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],Up={id:"import-data",name:"Import Data",type:"importer",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/import-data.ts"};function Hp(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:Np,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>Vp(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:r})=>Kp(t,r)})}const Fa=50*1024*1024;function La(e){try{return new URL(e).host}catch{return e}}async function qp(e){try{return(await e.text()).replace(/\s+/g," ").trim().slice(0,300)}catch{return""}}async function Wp(e,t,r={}){const s=zl(t),n=r.slowMs??2e3;let o=setTimeout(()=>{o=void 0,r.onSlow?.()},n);const l=()=>{o!==void 0&&(clearTimeout(o),o=void 0)};try{let c;try{c=await e.backend.fetch(s)}catch(m){throw new Error(`Could not reach ${La(s)} — no response. The server may be down, blocking cross-origin (CORS) requests, or the transfer may have failed (e.g. a very large file). [${m.message}]`)}if(!c.ok){const m=await qp(c);throw new Error(`HTTP ${c.status} ${c.statusText||""}`.trim()+(m?` — ${m}`:""))}const u=Number(c.headers.get("content-length"));if(Number.isFinite(u)&&u>Fa)throw new Error(`Response is ${(u/(1024*1024)).toFixed(1)} MB, over the ${Fa/(1024*1024)} MB browser import limit. Import a smaller extract, or use a server/Datasette connection for large datasets.`);try{return await Fl(c,r.onProgress)}catch(m){throw new Error(`Failed reading the response body from ${La(s)}: ${m.message}`)}}finally{l()}}async function As(e,t,r){const s={handle:null};try{return await Wp(e,t,{onSlow:()=>{s.handle=On.begin(r)},onProgress:n=>s.handle?.fraction(n)})}finally{s.handle?.done()}}async function Kp(e,t){const r=await e.store.tables.findOne(t),s=r?.origin;if(s?.url)try{const n=await As(e,s.url,`Reading ${r?.name??"data"}…`);let o;if(s.type==="csv")o=Qn(n).rows;else{const u=zr(JSON.parse(n),r.name),m=u.find($=>$.name===r.name)??(u.length===1?u[0]:void 0);if(!m)throw new Error(`"${r.name}" is no longer in the dump at ${s.url}`);o=m.rows}const l=e.store.rows(t),c=await l.find();await l.bulkRemove(c.map(u=>u.id)),await l.bulkInsert(o.map(u=>({id:rc(),tableId:t,data:u,updatedAt:Date.now()}))),e.ui.dialogs.toast(`Refreshed "${r.name}" (${o.length} rows).`,{kind:"success",title:"Refresh"})}catch(n){e.ui.dialogs.toast(`Couldn't refresh "${r?.name??t}": ${n.message}`,{kind:"error",title:"Refresh"})}}function rc(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function Vp(e){const r=await(dt.instance??Jp()).open({async listDatabases(b){const k=hn(b);return ro(B=>e.backend.fetch(B),k.base)}});if(!r)return;const{url:s,file:n,kind:o,dbChosen:l,editColumns:c,maxRows:u,mode:m}=r,$=n?.name??s;try{if(m==="reference"&&!n){o==="datasette"?await Qp(e,s):await sc(e,s,o);return}if(n){if(o==="csv"){const b=u!=null?await gl(n,u):await n.text();await $s(e,b,n.name,{editColumns:c?ja:void 0,maxRows:u})}else{const b=await n.text();await ks(e,b,n.name,{maxRows:u})}e.ui.dialogs.toast(`Imported ${n.name}.`,{kind:"success",title:"Import"});return}if(o==="datasette")await co(e,s,{skipTablePicker:l});else if(o==="csv"){const b=await As(e,s,`Reading ${Wn(s)}…`);await $s(e,b,Wn(s),{editColumns:c?ja:void 0,maxRows:u,origin:{type:"csv",url:s}}),e.ui.dialogs.toast(`Imported ${Wn(s)}.`,{kind:"success",title:"Import"})}else{const b=await As(e,s,`Reading ${Wn(s)}…`);await ks(e,b,Wn(s),{originUrl:s,maxRows:u}),e.ui.dialogs.toast(`Imported ${Wn(s)}.`,{kind:"success",title:"Import"})}}catch(b){e.ui.dialogs.toast(`Could not import ${$}: ${b.message}`,{kind:"error",title:"Import"})}}function Gp(e){const t=JSON.parse(e),r=s=>Array.isArray(s)&&s.every(n=>n!=null&&typeof n=="object"&&!Array.isArray(n));if(r(t))return t;if(t&&typeof t=="object"){const s=t;for(const n of["rows","records","data"])if(r(s[n]))return s[n];for(const n of Object.values(s))if(r(n))return n}return[]}function Yp(e){const t=Gp(e).slice(0,50),r=n=>typeof n=="number"?"number":typeof n=="boolean"?"boolean":"string",s=new Map;for(const n of t)for(const[o,l]of Object.entries(n))!s.has(o)&&l!=null?s.set(o,r(l)):s.has(o)||s.set(o,"string");return[...s.entries()].map(([n,o])=>({field:n,label:n,type:o}))}function Xp(e,t,r){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(r)}.json?_size=max`}async function Qp(e,t){const r=hn(t),s=c=>e.backend.fetch(c),n=[];if(r.db&&r.table)n.push({db:r.db,table:r.table});else if(r.db)for(const c of await Ss(s,r.base,r.db))c.hidden||n.push({db:c.db,table:c.table});else for(const c of await ro(s,r.base))for(const u of await Ss(s,r.base,c))u.hidden||n.push({db:u.db,table:u.table});if(n.length===0)throw new Error("No tables found to reference at that URL.");let o=0;const l=[];for(const c of n)try{await sc(e,Xp(r.base,c.db,c.table),"json",{nameHint:`${c.db}/${c.table}`,silent:!0}),o++}catch(u){l.push(`${c.table}: ${u.message}`)}e.ui.dialogs.toast(`Referenced ${o} table${o===1?"":"s"}${l.length?` — ${l.length} failed`:""}.`,{kind:l.length?"warning":"success",title:"Reference"})}async function sc(e,t,r,s={}){const n=e.workspaceId();if(!n)throw new Error("No active workspace.");const o=s.nameHint??Wn(t),l=await As(e,t,`Reading ${o}…`),c=r==="csv"?Qn(l).columns:Yp(l);if(c.length===0)throw new Error("No columns found in the referenced data.");const u=new Set((await e.store.tables.find()).filter(b=>b.workspaceId===n).map(b=>b.name.toLowerCase()));let m=o;for(let b=2;u.has(m.toLowerCase());b++)m=`${o}-${b}`;const $={id:rc(),workspaceId:n,name:m,code:Gl(m),columns:c,view:"table",source:{type:"url",config:{url:t,format:r}},updatedAt:Date.now()};await e.store.tables.insert($),s.silent||e.ui.dialogs.toast(`Referenced ${m} — live, read-only.`,{kind:"success",title:"Reference"})}function Jp(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function Zp(e){try{const t=new URL(e),r=t.hostname.toLowerCase(),s=[...t.searchParams.keys()].some(o=>o.startsWith("_")),n=r.includes("datasette")||s;return!s&&/\.csv$/i.test(t.pathname)?"csv":!s&&/\.json$/i.test(t.pathname)?"json":n?"datasette":"json"}catch{return"json"}}function Ma(e,t){if(t!=="datasette"||!e)return!1;try{const r=hn(e);return!r.db&&!r.table}catch{return!1}}function Wn(e){try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();return r&&r.length>0?r:"sample.db.json"}catch{return"sample.db.json"}}function em(e){return/\.csv$/i.test(e)?"csv":"json"}let dt=class extends Ne{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t&&!this.file)return;const r=this.resolvedKind,s=this.maxRows,n=r==="csv"&&this.editColumns,o=this.file?"copy":this.mode;if(this.file){this.finish({url:"",file:this.file,kind:r,editColumns:n,maxRows:s,mode:o});return}const l=r==="datasette"&&!!this.selectedDb&&Ma(t,r),c=l?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:c,kind:r,dbChosen:l,editColumns:n,maxRows:s,mode:o})}}get resolvedKind(){return this.kind!=="auto"?this.kind:this.file?em(this.file.name):Zp(this.url.trim())}get maxRows(){const e=Math.floor(Number(this.maxRowsInput));return Number.isFinite(e)&&e>0?e:void 0}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),dt.instance=this}disconnectedCallback(){super.disconnectedCallback(),dt.instance===this&&(dt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Xt(this.dialogEl,e)}open(e){return this.url="",this.kind="auto",this.presetIdx=-1,this.editColumns=!1,this.file=null,this.maxRowsInput="",this.mode="copy",this.resetDbList(),this.listDatabases=e?.listDatabases??null,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const r=za[t];r&&(this.url=r.url,this.kind=r.kind)}onFileChange(e){const r=e.target.files?.[0]??null;this.file=r,r&&(this.url="",this.presetIdx=-1,this.resetDbList())}renderDbPicker(){return!this.listDatabases||!Ma(this.url.trim(),this.resolvedKind)?me:A`
      <label>
        Database
        <div class="row db-row">
          <select
            .value=${this.selectedDb}
            ?disabled=${!this.dbList||this.dbList.length===0}
            @change=${e=>{this.selectedDb=e.target.value}}
          >
            ${this.dbList?A`
                  <option value="" ?selected=${this.selectedDb===""}>
                    — all databases (choose tables next) —
                  </option>
                  ${this.dbList.map(e=>A`<option value=${e} ?selected=${e===this.selectedDb}>${e}</option>`)}
                `:A`<option value="">— not loaded —</option>`}
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
      ${this.dbError?A`<p class="hint error">${this.dbError}</p>`:me}
    `}render(){return A`
      <dialog @cancel=${this.onCancel} @keydown=${Yt}>
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
                ${za.map((e,t)=>A`<option value=${String(t)} ?selected=${t===this.presetIdx}>
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
            ${this.file?A`<p class="hint">
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
            ${this.file?A`<p class="hint">Uploaded files can only be imported as a Copy.</p>`:me}
            ${this.renderDbPicker()}
            ${this.resolvedKind==="csv"?A`<label class="check">
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
            ${this.resolvedKind==="datasette"&&this.maxRows!=null?A`<p class="hint">
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
    `}};dt.instance=null;dt.styles=[Gt,qe`
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
    `];Jt([q()],dt.prototype,"url",2);Jt([q()],dt.prototype,"kind",2);Jt([q()],dt.prototype,"presetIdx",2);Jt([q()],dt.prototype,"dbList",2);Jt([q()],dt.prototype,"dbLoading",2);Jt([q()],dt.prototype,"dbError",2);Jt([q()],dt.prototype,"selectedDb",2);Jt([q()],dt.prototype,"editColumns",2);Jt([q()],dt.prototype,"file",2);Jt([q()],dt.prototype,"maxRowsInput",2);Jt([q()],dt.prototype,"mode",2);dt=Jt([tt("import-dialog")],dt);const tm=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return dt},init:Hp,meta:Up},Symbol.toStringTag,{value:"Module"})),nm={id:"auto-sync",name:"Auto Sync",type:"sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-sync.ts"},rm=6e4;let Ba=null,Ni=!1;const _i=new Map;function sm(e){Ba===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(Ba=setInterval(()=>{ic(e)},rm)))}async function ic(e){if(Ni)return;const t=e.workspaceId();if(!t)return;const r=await Wl(e);if(r)try{await im(e,r,t)}catch(s){console.warn("[auto-sync]",s)}}async function im(e,t,r){const s=await Ms(e),n=await Kl(e,r),o=await fetch(`${t}/sync/${encodeURIComponent(r)}`);if(o.status===404){await Na(e,t,r,s,null);return}if(!o.ok)return;const l=Bs(o.headers.get("ETag")),c=await o.text();if(ka(s)===ka(c)){l&&l!==n&&await Yn(e,r,l);return}if(l&&l===n){await Na(e,t,r,s,n);return}if(!(l&&_i.get(r)===l)){Ni=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${r}". Pull and replace your local copy?`,"auto-sync")){const m=JSON.parse(c),$=await Vl(e,r,m);l&&await Yn(e,r,l),_i.delete(r),e.ui.dialogs.toast(`Pulled ${$} table${$===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else l&&_i.set(r,l)}finally{Ni=!1}}}async function Na(e,t,r,s,n){const o={"Content-Type":"application/json"};n&&(o["If-Match"]=`"${n}"`);const l=await fetch(`${t}/sync/${encodeURIComponent(r)}`,{method:"PUT",headers:o,body:s});if(l.ok){const c=Bs(l.headers.get("ETag"));c&&await Yn(e,r,c);return}if(l.status===412){const c=await l.json().catch(()=>({}));c.currentEtag&&await Yn(e,r,c.currentEtag)}}const oc=Object.freeze(Object.defineProperty({__proto__:null,load:sm,meta:nm,tick:ic},Symbol.toStringTag,{value:"Module"})),ac=/\$([A-Za-z_][A-Za-z0-9_]*)/g;function Ua(...e){const t=new Set;for(const r of e)if(r)for(const s of r.matchAll(ac))t.add(s[1]);return[...t]}function om(e,t,r){return e.replace(ac,(s,n)=>{const o=r[n];if(!o)return"";const l=t.data[o];return l==null?"":String(l)})}function Ha(e){return e==null||e===""}function am(e,t){const r=Object.entries(t).filter(([,s])=>s!=null&&String(s).trim()!=="");return r.length===0?e:e.filter(s=>r.every(([n,o])=>ji(s.data[n],o)))}function lm(e,t,r=!0){if(!t)return e;const s=r?1:-1;return[...e].sort((n,o)=>{const l=n.data[t],c=o.data[t],u=Ha(l),m=Ha(c);if(u||m)return u===m?0:u?1:-1;const $=Number(l),b=Number(c);return!Number.isNaN($)&&!Number.isNaN(b)?($-b)*s:String(l).localeCompare(String(c),void 0,{numeric:!0,sensitivity:"base"})*s})}function cm(e,t){return lm(am(e,t.filters??{}),t.sortColumn,t.sortAsc??!0)}function dm(e){return!!e&&e.trim().length>0}var um=Object.defineProperty,hm=Object.getOwnPropertyDescriptor,fr=(e,t,r,s)=>{for(var n=s>1?void 0:s?hm(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&um(t,r,n),n};function Ui(e,t){(Ft.instance??fm()).open(e,t)}function fm(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function qa(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let Ft=class extends Ne{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.mode==="template"?this.saveTemplate():this.mode==="instance"?this.saveInstance():this.close()}}connectedCallback(){super.connectedCallback(),Ft.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ft.instance===this&&(Ft.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Xt(this.dialogEl,e)}async open(e,t){if(this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),t?.editTemplateId){const r=this.templates.find(s=>s.id===t.editTemplateId);r&&this.editTemplate(r)}else if(t?.editInstanceId){const r=this.instances.find(s=>s.id===t.editInstanceId);r&&await this.editInstance(r)}await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await be(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(r=>r.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((r,s)=>r.name.localeCompare(s.name))}async openInstance(e){await(await be()).store.viewInstances.patch(e,{open:!0,updatedAt:Date.now()}),this.close()}async editInstance(e){const r=await(await be()).store.viewTemplates.findOne(e.templateId),s=r?Ua(r.headerHtml,r.rowHtml,r.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:r?.name??"template",name:e.name,tokens:s,mapping:{...e.mapping},limit:e.limit??0,readonly:e.readonly??!1},this.mode="instance"}async deleteInstance(e){await(await be()).store.viewInstances.remove(e),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async deleteTemplate(e){const t=await be();await t.api.ui.dialogs.confirm(`Delete the template "${e.name}"? Views already created from it keep working.`,"Delete template")&&(await t.store.viewTemplates.remove(e.id),document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh())}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await be();if(e.id){const r=this.templates.find(s=>s.id===e.id)?.builtin;await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,...r?{builtin:!1}:{},updatedAt:Date.now()})}else await t.store.viewTemplates.insert({id:qa(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()});document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh(),this.mode="list"}useTemplate(e){const t=Ua(e.headerHtml,e.rowHtml,e.footerHtml),r={};for(const s of t)r[s]=this.autoMap(s);this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:r,limit:0,readonly:!1},this.mode="instance"}firstColumn(e){const t=this.columns.find(e);return t?t.field:""}autoMap(e){const t=e.toLowerCase(),r=this.columns.find(c=>c.field.toLowerCase()===t||(c.label??"").toLowerCase()===t);if(r)return r.field;const s=this.table?.labelColumn;if(s&&(t==="title"||t==="name"||t==="label"))return s;if(["date","datetime","time","created","updated","modified","timestamp","day","when"].includes(t))return this.firstColumn(c=>c.type==="date"||c.type==="datetime");const o=["url","link","href","website","homepage","uri","site","web"];if(o.includes(t)){const c=this.firstColumn(u=>u.renderer==="link");return c||this.firstColumn(u=>{const m=u.field.toLowerCase(),$=(u.label??"").toLowerCase();return o.some(b=>m.includes(b)||$.includes(b))})}const l=["description","desc","notes","note","body","text","summary","about","comment","comments","details","detail","remarks"];if(l.includes(t)){const c=this.firstColumn(b=>{if(b.type!=="string")return!1;const k=b.field.toLowerCase(),B=(b.label??"").toLowerCase();return l.some(L=>k.includes(L)||B.includes(L))});if(c)return c;const u=this.columns.filter(b=>b.type==="string"),m=u[0];if(!m)return"";let $=m;for(const b of u)(b.max??0)>($.max??0)&&($=b);return $.field}return""}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await be();if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},limit:e.limit>0?e.limit:void 0,readonly:e.readonly,updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.mode="list";return}const r=this.columns.filter(n=>!n.hidden).map(n=>n.field),s={id:qa(),workspaceId:t.workspaceId,tableId:this.tableId,tableName:this.table.name,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:r,mapping:{...e.mapping},updatedAt:Date.now(),...e.limit>0?{limit:e.limit}:{},...e.readonly?{readonly:!0}:{}};await t.store.viewInstances.insert(s),await this.openInstance(s.id)}renderList(){return A`
      <div class="section">
        <h3>Views of “${this.table?.name??""}”</h3>
        <ul class="list">
          ${this.instances.map(e=>A`<li>
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
          ${this.templates.map(e=>A`<li>
                <span class="name">${e.name}</span>
                ${e.builtin?A`<span class="badge">built-in</span>`:me}
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
    `}renderTemplate(){const e=this.tDraft,t=r=>s=>{this.tDraft={...e,[r]:s.target.value}};return A`
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
    `}renderInstance(){const e=this.iDraft;return A`
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
        ${e.tokens.length===0?A`<p class="hint">
              This template has no <code>$TOKEN</code> placeholders — it will show the read-only
              table with your current sort, filter and visible columns.
            </p>`:e.tokens.map(t=>A`<div class="map-row">
                  <code>$${t}</code>
                  <select
                    @change=${r=>this.iDraft={...e,mapping:{...e.mapping,[t]:r.target.value}}}
                  >
                    <option value="" ?selected=${!e.mapping[t]}>— none —</option>
                    ${this.columns.map(r=>A`<option value=${r.field} ?selected=${e.mapping[t]===r.field}>
                          ${r.label||r.field}
                        </option>`)}
                  </select>
                </div>`)}
      </div>
      <p class="hint">
        ${e.id?A`Editing name and column mapping. The snapshotted sort, filters and visible columns
            are kept.`:A`The view snapshots this table's current sort, filters and visible columns.`}
      </p>
    `}render(){const e=this.mode==="template"?this.tDraft?.id?"Edit template":"New template":this.mode==="instance"?`${this.iDraft?.id?"Edit":"New"} view — ${this.iDraft?.templateName??""}`:"Views",t=this.mode==="template"?A`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
              Back
            </button>
            <button type="submit" class="primary">Save</button>`:this.mode==="instance"?A`<button type="button" class="ghost" @click=${()=>this.mode="list"}>
                Back
              </button>
              <button type="submit" class="primary">
                ${this.iDraft?.id?"Save":"Create view"}
              </button>`:A`<button type="submit" class="ghost">Close</button>`;return A`
      <dialog @cancel=${this.close} @keydown=${Yt}>
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
    `}};Ft.instance=null;Ft.styles=[Gt,qe`
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
    `];fr([q()],Ft.prototype,"mode",2);fr([q()],Ft.prototype,"instances",2);fr([q()],Ft.prototype,"templates",2);fr([q()],Ft.prototype,"tDraft",2);fr([q()],Ft.prototype,"iDraft",2);Ft=fr([tt("views-dialog")],Ft);const pm={id:"views",name:"Views",type:"ui",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/views.ts"},mm="grid_view",Wa="RSS Feed",Hi='<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',qi=['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>',"</div>"].join(""),Wi="</div>";function gm(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:mm,tooltip:"Views — display this table through a template",onClick:(t,{tableId:r})=>Ui(r)})}async function bm(e){await wm(e)}function ym(){let e=5381;const t=`${Hi}\0${qi}\0${Wi}`;for(let r=0;r<t.length;r++)e=(e<<5)+e+t.charCodeAt(r)|0;return(e>>>0).toString(36)}async function wm(e){const t=e.workspaceId();if(!t)return;const r=`views:seeded:rss:${t}`,s=`views:sig:rss:${t}`,n=ym(),o=(await e.store.viewTemplates.find({workspaceId:t})).find(c=>c.builtin&&c.name===Wa);if(o){(await e.store.settings.findOne(s))?.value!==n&&(await e.store.viewTemplates.patch(o.id,{headerHtml:Hi,rowHtml:qi,footerHtml:Wi,updatedAt:Date.now()}),await e.store.settings.upsert({key:s,value:n})),await e.store.settings.upsert({key:r,value:!0});return}(await e.store.settings.findOne(r))?.value||(await e.store.viewTemplates.insert({id:vm(),workspaceId:t,name:Wa,headerHtml:Hi,rowHtml:qi,footerHtml:Wi,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({key:r,value:!0}),await e.store.settings.upsert({key:s,value:n}))}function vm(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const xm=Object.freeze(Object.defineProperty({__proto__:null,init:gm,load:bm,meta:pm},Symbol.toStringTag,{value:"Module"})),$m={id:"settings",name:"Settings",type:"ui",fixed:!0,version:"0.1.0",description:"Header gear button that opens the tabbed Settings dialog; imports dropped secrets.txt.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/settings.ts"};function km(e){e.ui.registerHeaderButton({id:"settings:open",label:"Settings",icon:"settings",tooltip:"Workspace and plugin settings",variant:"secondary",onClick:()=>e.ui.openSettings()}),e.ui.registerDropHandler(async(t,r)=>{const n=Array.from(t.dataTransfer?.files??[]).find(c=>c.name.toLowerCase()==="secrets.txt");if(!n)return!1;const o=await n.text(),l=Object.keys(js(o)).length;return Os().trim().length>0&&!await r.ui.dialogs.confirm(`Replace your current secrets with ${l} secret${l===1?"":"s"} from "${n.name}"?`,"Import secrets")||(hl(o),r.ui.dialogs.toast(`Imported ${l} secret${l===1?"":"s"}.`,{kind:"success",title:"Secrets"})),!0})}const Cm=Object.freeze(Object.defineProperty({__proto__:null,init:km,meta:$m},Symbol.toStringTag,{value:"Module"})),Em=[Cm,bf,su,_u,Dh,Lh,cu,Gh,Wh,lf,pf,Sf,Pf,Of,Mf,Hf,Xf,Pp,tm,oc,xm];function Sm(e){if(!e.meta)throw new Error("Built-in plugin is missing meta");return e.meta}const lc=Em.map(e=>{const t=Sm(e);return{id:t.id,meta:t,module:e}}),_m=lc;function Ki(e){return`builtin:${e}`}async function Tm(e){const t=[];for(const r of lc)if(!await Am(e,r)){t.push(r);try{await r.module.init?.(e)}catch(s){e.events.emit("plugin:error",{url:r.id,phase:"init",error:s})}}return async()=>{for(const r of t)try{await r.module.load?.(e)}catch(s){e.events.emit("plugin:error",{url:r.id,phase:"load",error:s})}}}async function Am(e,t){return t.meta.fixed?!1:(await e.store.plugins.findOne(Ki(t.id)))?.enabled===!1}function pr(){const e=z.getPanels;return typeof e!="function"?[]:Array.from(e.call(z)??[])}function Pm(){for(const e of pr())e.close?.()}function Im(){for(const e of pr())e.minimize?.()}function Rm(){for(const e of pr())e.normalize?.()}function Dm(){for(const e of pr())e.maximize?.()}function cc(){const e=document.getElementById("easydb-panels"),t=e?.clientWidth??window.innerWidth,r=e?.clientHeight??window.innerHeight,s=Zl()?.snapshot(),n=s?.scale&&s.scale>0?s.scale:1,o=s?.x??0,l=s?.y??0;return{x:-o/n,y:-l/n,w:t/n,h:r/n}}function dc(e,t,r,s,n){e.style.left=`${Math.round(t)}px`,e.style.top=`${Math.round(r)}px`,e.style.width=`${Math.round(s)}px`,e.style.height=`${Math.round(n)}px`}function Om(){const e=pr().reverse();if(e.length===0)return;const t=cc(),r=32,s=Math.min(680,Math.max(320,t.w*.6)),n=Math.min(480,Math.max(240,t.h*.6));e.forEach((o,l)=>{o.normalize?.(),dc(o,t.x+24+l*r,t.y+24+l*r,s,n)})}function jm(){const e=pr().reverse(),t=e.length;if(t===0)return;const r=cc(),s=Math.ceil(Math.sqrt(t)),n=Math.ceil(t/s),o=8,l=(r.w-o*(s+1))/s,c=(r.h-o*(n+1))/n;e.forEach((u,m)=>{u.normalize?.();const $=m%s,b=Math.floor(m/s);dc(u,r.x+o+$*(l+o),r.y+o+b*(c+o),l,c)})}function zm(e){const t=[{id:"windows:minimize-all",title:"Minimize all windows",icon:"remove",run:Im},{id:"windows:restore-all",title:"Restore all windows",icon:"crop_square",run:Rm},{id:"windows:maximize-all",title:"Maximize all windows",icon:"fullscreen",run:Dm},{id:"windows:cascade",title:"Cascade windows",icon:"view_agenda",run:Om},{id:"windows:tile",title:"Tile windows",icon:"grid_view",run:jm},{id:"windows:close-all",title:"Close all windows",icon:"close",run:Pm}];for(const n of t)e.ui.registerCommand({id:n.id,title:n.title,group:"Windows",icon:n.icon,run:n.run});const r="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md",s="https://github.com/cawoodm/easydbaccess/tree/main/docs";e.ui.registerCommand({id:"app:search",title:"Search all tables",group:"App",icon:"search",keywords:["find","global search","filter"],run:()=>{document.dispatchEvent(new CustomEvent("easydb:focus-search"))}}),e.ui.registerCommand({id:"app:plugins",title:"Plugins",group:"App",icon:"extension",keywords:["plugin manager","install","extensions"],run:n=>n.ui.openPluginManager()}),e.ui.registerCommand({id:"app:changelog",title:"Changelog",group:"App",icon:"history",keywords:["releases","version","whats new"],run:()=>{window.open(r,"_blank","noopener")}}),e.ui.registerCommand({id:"app:docs",title:"Documentation",group:"App",icon:"menu_book",keywords:["docs","help","guide","manual"],run:()=>{window.open(s,"_blank","noopener")}})}async function Fm(e){const t=e.workspaceId();if(!t)return async()=>{};const s=(await e.store.workspaces.findOne(t))?.pluginUrls??[],n=[];for(const o of s)try{const l=await e.store.plugins.findOne(o);if(l&&l.enabled===!1)continue;let c=l?.cachedBody??"";if(c)Lm(e,o,c);else{try{c=await uc(o)}catch($){await e.store.plugins.upsert({url:o,enabled:l?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${$.message}`}),e.events.emit("plugin:error",{url:o,phase:"fetch",error:$});continue}await e.store.plugins.upsert({url:o,enabled:!0,lastFetched:Date.now(),cachedBody:c})}const u=new Blob([c],{type:"text/javascript"}),m=URL.createObjectURL(u);try{const $=await import(m);await $.init?.(e),n.push({url:o,mod:$})}finally{setTimeout(()=>URL.revokeObjectURL(m),5e3)}}catch(l){await e.store.plugins.upsert({url:o,enabled:!0,lastFetched:Date.now(),lastError:`init: ${l.message}`}),e.events.emit("plugin:error",{url:o,phase:"init",error:l})}return async()=>{for(const{url:o,mod:l}of n)try{await l.load?.(e)}catch(c){await e.store.plugins.upsert({url:o,enabled:!0,lastFetched:Date.now(),lastError:`load: ${c.message}`}),e.events.emit("plugin:error",{url:o,phase:"load",error:c})}}}async function uc(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const r=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(r))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return r}function Lm(e,t,r){return(async()=>{try{const s=await uc(t);if(s===r)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:s})}catch{}})()}let Ti=null;function be(){return Ti||(Ti=Mm()),Ti}async function Mm(){const e=await xd(),t=Cd(e),r=Sd(),s=Dd(),n=new Map;t.tables.subscribe(F=>{n.clear();for(const H of F)n.set(H.id,H)});const o={...t.tables,insert:F=>(n.set(F.id,F),t.tables.insert(F)),upsert:F=>(n.set(F.id,F),t.tables.upsert(F))};let l=null;const c={get backend(){if(!l)throw new Error("[host] row-source ctx used before app init completed");return l.backend},events:r,settings:t.settings,workspaceId:()=>b},u=Ed({base:{...t,tables:o},providers:s.rowSources,tableById:F=>n.get(F),ctx:c}),m=Bm(),$=await u.workspaces.find();let b;if(m){const F=Hm(m),H=$.find(G=>G.id===F||G.name===m);H?b=H.id:b=(await u.workspaces.insert({id:F,name:m,createdAt:Date.now(),pluginUrls:[]})).id}else{const F=Nm(),H=F?$.find(G=>G.id===F):void 0;H?b=H.id:$.length>0?b=$[0].id:b=(await u.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}Um(b);const k=Ld({store:u,events:r,registries:s,workspaceId:()=>b});l=k,zm(k),r.on("import:after",({source:F,tableId:H,rowCount:G})=>{F!=="datasette"&&k.store.tables.findOne(H).then(he=>{k.ui.dialogs.toast(`Imported ${G} row${G===1?"":"s"} into "${he?.name??H}".`,{kind:"success",title:F.toUpperCase()+" import"})})}),r.on("plugin:error",({url:F,phase:H,error:G})=>{k.ui.dialogs.toast(`[${H}] ${G?.message??String(G)}`,{kind:"error",title:`Plugin: ${F}`})});const B=await Tm(k),L=await Fm(k);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:b}),await B(),await L()}),{store:u,events:r,workspaceId:b,registries:s,api:k}}function Bm(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const hc="eda:lastWorkspaceId";function Nm(){try{return globalThis.localStorage?.getItem(hc)??null}catch{return null}}function Um(e){try{globalThis.localStorage?.setItem(hc,e)}catch{}}function Hm(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var qm=Object.defineProperty,Wm=Object.getOwnPropertyDescriptor,Hs=(e,t,r,s)=>{for(var n=s>1?void 0:s?Wm(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&qm(t,r,n),n};let cr=class extends Ne{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Xt(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let r;try{r=Qn(this.text)}catch(l){this.errorMsg=`Couldn't parse the CSV: ${l.message}`;return}if(r.columns.length===0||r.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const s=await be(),n=crypto.randomUUID();await s.store.tables.insert({id:n,workspaceId:s.workspaceId,name:t,code:Km(t),columns:r.columns,view:"table",updatedAt:Date.now()});const o=r.rows.map(l=>({id:crypto.randomUUID(),tableId:n,data:l,updatedAt:Date.now()}));await s.store.rows(n).bulkInsert(o),s.api.ui.dialogs.toast(`Imported ${r.rows.length} row${r.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return A`
      <dialog @cancel=${this.close} @keydown=${Yt}>
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
            ${this.errorMsg?A`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};cr.styles=[Gt,qe`
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
    `];Hs([q()],cr.prototype,"name",2);Hs([q()],cr.prototype,"text",2);Hs([q()],cr.prototype,"errorMsg",2);cr=Hs([tt("csv-paste-dialog")],cr);function Km(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}var Vm=Object.defineProperty,Gm=Object.getOwnPropertyDescriptor,po=(e,t,r,s)=>{for(var n=s>1?void 0:s?Gm(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&Vm(t,r,n),n};const Ym=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return an HTML string; it is injected into the cell as raw HTML.
  return '<b>' + (row.name ?? '') + '</b>';
}
`;let un=class extends Ne{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),un.instance=this}disconnectedCallback(){super.disconnectedCallback(),un.instance===this&&(un.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Xt(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:Ym,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(r=>{this.resolver=r})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return A`
      <dialog @cancel=${this.onCancel} @keydown=${Yt}>
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
    `}};un.instance=null;un.styles=[Gt,qe`
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
    `];po([q()],un.prototype,"text",2);po([q()],un.prototype,"columnLabel",2);un=po([tt("script-editor-dialog")],un);var Xm=Object.defineProperty,Qm=Object.getOwnPropertyDescriptor,Bt=(e,t,r,s)=>{for(var n=s>1?void 0:s?Qm(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&Xm(t,r,n),n};const Jm=["string","number","boolean","date","datetime"];let Et=class extends Ne{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.columns=[],this.errorMsg="",this.noticeMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Xt(this.dialogEl,e)}async open(e,t){this.errorMsg="",this.noticeMsg=t?.notice??"";const r=await be();if(this.rendererOptions=[...r.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.rendererSubUnsub=r.events.on("app:ready",()=>{this.rendererOptions=[...r.registries.cellRenderers.keys()].sort()}),e){const s=await be(),n=await s.store.tables.findOne(e);if(!n)return;this.mode="edit",this.editTableId=e,this.name=n.name,this.tableTitle=n.title??"",this.columns=n.columns.map(l=>({field:l.field,label:l.label,type:l.type,renderer:l.renderer,script:l.script,max:l.max,unique:l.unique,notnull:l.notnull,hidden:l.hidden,origField:l.field}));const o=await s.store.rows(e).find();this.previewRows=o.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,r)=>r!==e)}moveColumn(e,t){const r=e+t;if(r<0||r>=this.columns.length)return;const s=[...this.columns],[n]=s.splice(e,1);s.splice(r,0,n),this.columns=s}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,r){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const s=r.getBoundingClientRect(),n=e.clientY<s.top+s.height/2;this.dropTargetIdx=t,this.dropEdge=n?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const r=this.dragSrcIdx,s=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,r===null||r===t||!s)return;const n=[...this.columns],[o]=n.splice(r,1);let l=t+(r<t?-1:0);s==="after"&&(l+=1),n.splice(l,0,o),this.columns=n}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((r,s)=>s===e?{...r,...t}:r)}async editScript(e){const t=un.instance;if(!t)return;const r=this.columns[e];if(!r)return;const s=await t.open(r.script??"",r.label||r.field);s!==null&&this.patchColumn(e,{script:s.trim()?s:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}const r=await be(),s=(await r.store.tables.find()).filter(m=>m.workspaceId===r.workspaceId),n=t.toLowerCase(),o=s.find(m=>m.name.toLowerCase()===n&&m.id!==this.editTableId);if(o){this.errorMsg=`A table named "${o.name}" already exists — names must be unique.`;return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const l=new Set;for(const m of this.columns){const $=m.field.trim();if(!$){this.errorMsg="Column field names cannot be empty.";return}if(l.has($)){this.errorMsg=`Duplicate column field: ${$}`;return}l.add($)}const c=this.tableTitle.trim(),u=this.columns.map(m=>{const $={field:m.field.trim(),label:m.label.trim()||m.field.trim(),type:m.type};return m.renderer&&($.renderer=m.renderer),m.script&&($.script=m.script),m.max!=null&&m.max>0&&($.max=m.max),m.unique&&($.unique=!0),m.notnull&&($.notnull=!0),m.hidden&&($.hidden=!0),$});if(this.mode==="edit"&&this.editTableId){const m=this.editTableId,$=await r.store.tables.findOne(m),b=new Map(($?.columns??[]).map(V=>[V.field,V])),k=u.filter(V=>{const J=b.get(V.field);return V.unique&&!J?.unique||V.notnull&&!J?.notnull||V.max&&V.max>0&&V.max!==J?.max});if(k.length>0){const V=await r.store.rows(m).find(),J=tg(k,V);if(J.length>0){this.errorMsg=`Cannot save: ${J.length} existing ${J.length===1?"row violates":"rows violate"} the new constraints.
${J.slice(0,5).join(`
`)}${J.length>5?`
…and ${J.length-5} more.`:""}`;return}}const B=new Set(this.columns.map(V=>V.origField).filter(V=>!!V)),L=new Set(u.map(V=>V.field)),F=($?.columns??[]).map(V=>V.field).filter(V=>!B.has(V)),H=$?.deletedColumns??[],G=[...new Set([...H,...F])].filter(V=>!L.has(V)),he={name:t,title:c,columns:u,updatedAt:Date.now()};(G.length>0||H.length>0)&&(he.deletedColumns=G);const ie=$?.name;await r.store.tables.patch(m,he);const oe=F.filter(V=>!L.has(V));if(oe.length>0){const V=await r.store.rows(m).find();for(const J of V){let ue=!1;const $e={...J.data};for(const Te of oe)Te in $e&&(delete $e[Te],ue=!0);ue&&await r.store.rows(m).patch(J.id,{data:$e,updatedAt:Date.now()})}}if(ie!==void 0&&ie!==t){const V=(await r.store.viewInstances.find()).filter(J=>J.tableId===m);for(const J of V)J.tableName!==t&&await r.store.viewInstances.patch(J.id,{tableName:t,updatedAt:Date.now()})}}else await r.store.tables.insert({id:rg(),workspaceId:r.workspaceId,name:t,title:c,code:ng(t),columns:u,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return A`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=new Map;for(const r of this.columns){if(!r.unique)continue;const s=new Set,n=new Set;for(const o of this.previewRows){const l=o.data[r.field];l==null||l===""||(s.has(l)&&n.add(l),s.add(l))}e.set(r.field,n)}const t=this.columns.filter(r=>!r.hidden);return A`
      <div class="preview">
        <h3>Live preview — first ${this.previewRows.length} row${this.previewRows.length===1?"":"s"}</h3>
        <table>
          <thead>
            <tr>
              ${t.map(r=>A`<th title=${r.field}>${r.label||r.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.previewRows.map(r=>A`
                <tr>
                  ${t.map(s=>{const n=r.data[s.field],o=eg(s,n,e.get(s.field));return A`<td
                      class=${o?"violation":""}
                      title=${o??""}
                    >${Zm(n)}</td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}renameDetected(){return this.mode==="edit"&&this.columns.some(e=>e.origField&&e.origField!==e.field.trim())}render(){const e=this.mode==="edit"?"Edit columns":"New table",t=this.mode==="edit"?"Save":"Create";return A`
      <dialog @cancel=${this.close} @keydown=${Yt}>
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
          ${this.noticeMsg?A`<div class="notice">${this.noticeMsg}</div>`:""}
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
            ${this.columns.map((r,s)=>{const n=this.dragSrcIdx===s,o=this.dropTargetIdx===s,l=o&&this.dropEdge==="before"?" drop-before":o&&this.dropEdge==="after"?" drop-after":"";return A`
                <div
                  class=${`col-row${n?" drag-source":""}${l}`}
                  @dragover=${c=>this.onRowDragOver(c,s,c.currentTarget)}
                  @dragleave=${()=>this.onRowDragLeave(s)}
                  @drop=${c=>this.onRowDrop(c,s)}
                >
                  <span
                    class="drag-handle"
                    title="Drag to reorder"
                    draggable="true"
                    @dragstart=${c=>this.onRowDragStart(c,s)}
                    @dragend=${()=>this.onRowDragEnd()}
                  >
                    <span class="mi sm">drag_indicator</span>
                  </span>
                  <input
                    type="text"
                    .value=${r.field}
                    @input=${c=>this.patchColumn(s,{field:c.target.value})}
                  />
                  <input
                    type="text"
                    .value=${r.label}
                    @input=${c=>this.patchColumn(s,{label:c.target.value})}
                  />
                  <select
                    .value=${r.type}
                    @change=${c=>this.patchColumn(s,{type:c.target.value})}
                  >
                    ${Jm.map(c=>A`<option value=${c} ?selected=${c===r.type}>${c}</option>`)}
                  </select>
                  <select
                    title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                    .value=${r.renderer??""}
                    @change=${c=>{const u=c.target.value;this.patchColumn(s,{renderer:u||void 0})}}
                  >
                    <option value="" ?selected=${!r.renderer}>— none —</option>
                    ${this.rendererOptions.map(c=>A`<option value=${c} ?selected=${c===r.renderer}>${c}</option>`)}
                  </select>
                  ${r.renderer==="script"?A`<button
                        type="button"
                        class="icon-btn"
                        title="Edit JS render(row)"
                        @click=${()=>this.editScript(s)}
                      >
                        <span class="mi sm">edit</span>
                      </button>`:A`<span></span>`}
                  <input
                    type="number"
                    min="0"
                    placeholder="—"
                    title="Max length (strings) or max value (numbers)"
                    .value=${r.max==null?"":String(r.max)}
                    @input=${c=>{const u=c.target.value;this.patchColumn(s,{max:u===""?void 0:Number(u)})}}
                  />
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Unique"
                      .checked=${!!r.unique}
                      @change=${c=>this.patchColumn(s,{unique:c.target.checked})}
                    />
                  </span>
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Not null"
                      .checked=${!!r.notnull}
                      @change=${c=>this.patchColumn(s,{notnull:c.target.checked})}
                    />
                  </span>
                  <span class="flag">
                    <input
                      type="checkbox"
                      title="Visible — uncheck to hide the column without losing its data"
                      .checked=${!r.hidden}
                      @change=${c=>this.patchColumn(s,{hidden:!c.target.checked})}
                    />
                  </span>
                  <button
                    type="button"
                    class="icon-btn"
                    title="Move up"
                    ?disabled=${s===0}
                    @click=${()=>this.moveColumn(s,-1)}
                  >
                    <span class="mi sm">arrow_upward</span>
                  </button>
                  <button
                    type="button"
                    class="icon-btn"
                    title="Move down"
                    ?disabled=${s===this.columns.length-1}
                    @click=${()=>this.moveColumn(s,1)}
                  >
                    <span class="mi sm">arrow_downward</span>
                  </button>
                  <button
                    type="button"
                    class="icon-btn row-del"
                    title="Remove column"
                    @click=${()=>this.removeColumn(s)}
                  >
                    <span class="mi sm">delete</span>
                  </button>
                </div>
              `})}
          </div>

          <button type="button" class="add" @click=${this.addColumn}>+ Add column</button>

          ${this.renameDetected()?A`<div class="hint">
                Renamed fields will appear empty for existing rows — the row data
                isn't migrated automatically.
              </div>`:""}
          ${this.errorMsg?A`<div class="error">${this.errorMsg}</div>`:""}
          ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};Et.styles=[Qt,Gt,qe`
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
  `];Bt([q()],Et.prototype,"mode",2);Bt([q()],Et.prototype,"editTableId",2);Bt([q()],Et.prototype,"name",2);Bt([q()],Et.prototype,"tableTitle",2);Bt([q()],Et.prototype,"columns",2);Bt([q()],Et.prototype,"errorMsg",2);Bt([q()],Et.prototype,"noticeMsg",2);Bt([q()],Et.prototype,"dragSrcIdx",2);Bt([q()],Et.prototype,"dropTargetIdx",2);Bt([q()],Et.prototype,"dropEdge",2);Bt([q()],Et.prototype,"previewRows",2);Bt([q()],Et.prototype,"rendererOptions",2);Et=Bt([tt("new-table-dialog")],Et);function Zm(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function eg(e,t,r){const s=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&s)return`${e.label}: empty`;if(s)return null;if(e.type==="number"&&typeof t!="number"){const n=Number(t);if(!Number.isFinite(n))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!s){const n=new Date(String(t));if(Number.isNaN(n.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&r?.has(t)?`${e.label}: duplicate`:null}function tg(e,t){const r=[];for(const s of e)if(s.notnull&&t.forEach((n,o)=>{const l=n.data[s.field];(l==null||typeof l=="string"&&l.trim()==="")&&r.push(`Row ${o+1}: ${s.label} is empty.`)}),s.max!=null&&s.max>0&&t.forEach((n,o)=>{const l=n.data[s.field];typeof l=="string"&&l.length>s.max?r.push(`Row ${o+1}: ${s.label} length ${l.length} > max ${s.max}.`):typeof l=="number"&&l>s.max&&r.push(`Row ${o+1}: ${s.label} value ${l} > max ${s.max}.`)}),s.unique){const n=new Map;t.forEach((o,l)=>{const c=o.data[s.field];c==null||c===""||(n.has(c)?r.push(`Row ${l+1}: ${s.label} duplicates row ${n.get(c)+1} ("${String(c)}").`):n.set(c,l))})}return r}function ng(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function rg(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var sg=Object.defineProperty,ig=Object.getOwnPropertyDescriptor,At=(e,t,r,s)=>{for(var n=s>1?void 0:s?ig(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&sg(t,r,n),n};const og='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',ag=A`<span class="mi sm">extension</span>`,Ka="plugin:catalogUrls";function ms(){return new URL("/easydbaccess/plugins/catalog.json",location.origin).toString()}const lg=[["installed","Installed"],["built-in","Built-in"],["available","Available"],["fixed","Fixed"]],fc=[["importer","Importer"],["exporter","Exporter"],["cell-renderer","Cell renderer"],["sync","Sync"],["source","Source"],["ui","UI"]],cg=new Map(fc);let $t=class extends Ne{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.catalogUrls=[ms()],this.activeCatalogUrl=ms(),this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Xt(this.dialogEl,e)}async open(){const e=await be(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const r=await e.store.plugins.find();this.records=new Map(r.map(o=>[o.url,o]));const s=await e.store.settings.findOne(Ka),n=Array.isArray(s?.value)?s.value.filter(o=>typeof o=="string"):[];this.catalogUrls=n.length>0?n:[ms()],this.activeCatalogUrl=this.catalogUrls[0]??ms(),this.addUrl="",this.search="",this.filterStates=new Map,this.typeFilters=new Map,await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(this.activeCatalogUrl),this.refreshServerRegistry()}async refreshCatalog(e){try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json(),s=Array.isArray(r.plugins)?r.plugins:[];this.catalog=s.map(n=>({...n,absUrl:new URL(n.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const r=(await(await be()).store.settings.findOne("server-sync:url"))?.value;if(typeof r!="string"||r.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const n=`${r.replace(/\/+$/,"")}/plugins/registry`;try{const o=await fetch(n,{cache:"no-store"});if(!o.ok)throw new Error(`HTTP ${o.status}`);const l=await o.json(),c=Array.isArray(l.plugins)?l.plugins:[];this.serverCatalog=c.map(u=>({...u,absUrl:new URL(u.url,n).toString()})),this.serverCatalogError=null}catch(o){this.serverCatalog=[],this.serverCatalogError=o.message}}async reloadCatalogSource(){const e=this.activeCatalogUrl.trim();e&&(this.catalogUrls.includes(e)||(this.catalogUrls=[...this.catalogUrls,e],await(await be()).store.settings.upsert({key:Ka,value:this.catalogUrls})),await this.refreshCatalog(e))}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await be()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const r=await be();await r.store.workspaces.patch(r.workspaceId,{pluginUrls:this.urls}),await r.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const r=await be(),s=this.records.get(e);await r.store.plugins.upsert({...s??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...s,url:e,enabled:t,lastFetched:s?.lastFetched??0}))}async removePlugin(e){const t=await be();this.urls=this.urls.filter(r=>r!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const r=await be(),s=Ki(e),n=this.records.get(s);await r.store.plugins.upsert({...n??{url:s,lastFetched:0},url:s,enabled:t,lastFetched:n?.lastFetched??0}),this.records=new Map(this.records.set(s,{...n,url:s,enabled:t,lastFetched:n?.lastFetched??0}))}async onRowToggle(e,t){if(e.categories.has("built-in"))await this.toggleBuiltin(e.id,t);else if(e.url)await this.toggleEnabled(e.url,t);else return;(await be()).api.ui.dialogs.toast("Reload to apply this change.",{kind:"info",title:"Plugin updated"})}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await be();try{const r=await fetch(e.absUrl,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const s=await r.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:s});const n=new Blob([s],{type:"text/javascript"}),o=URL.createObjectURL(n);try{const c=await import(o);await c.init?.(t.api),await c.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(o),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const l=await t.store.plugins.find();this.records=new Map(l.map(c=>[c.url,c])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(r){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${r.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${r.message}`,{kind:"error",title:"Plugin error"})}finally{const r=new Set(this.installing);r.delete(e.absUrl),this.installing=r}}cycleState(e,t){const r=e.get(t),s=new Map(e);return r===void 0?s.set(t,"on"):r==="on"?s.set(t,"not"):s.delete(t),s}cycleFilter(e){this.filterStates=this.cycleState(this.filterStates,e)}cycleTypeFilter(e){this.typeFilters=this.cycleState(this.typeFilters,e)}buildRows(){const e=new Map,t=new Map;for(const{id:r,meta:s}of _m){const n=s.fixed?!0:this.records.get(Ki(r))?.enabled!==!1,o=s.fixed?["built-in","fixed","installed"]:["built-in","installed"];e.set(`builtin:${r}`,{id:r,name:s.name,...s.type?{type:s.type}:{},...s.description?{meta:s.description}:{meta:"Built-in plugin"},...s.author?{author:s.author}:{},...s.icon?{icon:s.icon}:{},...s.repo?{repo:s.repo}:{},categories:new Set(o),enabled:n,fixed:!!s.fixed})}for(const r of[...this.catalog,...this.serverCatalog]){const s=this.urls.includes(r.absUrl),n=this.records.get(r.absUrl),o=s?["available","installed"]:["available"],l=e.get(r.id);e.set(r.id,{id:r.id,name:r.name,url:r.absUrl,...r.type?{type:r.type}:{},...r.icon?{icon:r.icon}:{},...r.repo?{repo:r.repo}:{},...r.author?{author:r.author}:{},meta:r.description??r.absUrl,categories:l?new Set([...l.categories,...o]):new Set(o),enabled:n?.enabled!==!1,installing:this.installing.has(r.absUrl)}),t.set(r.absUrl,r.id)}for(const r of this.urls){const s=t.get(r);if(s){e.get(s).categories.add("installed");continue}const n=this.records.get(r),o=n?.lastFetched?new Date(n.lastFetched).toLocaleString():"never";e.set(`url:${r}`,{id:r,name:r,urlOnly:!0,url:r,meta:n?.lastError??`Last fetched: ${o}`,metaIsError:!!n?.lastError,categories:new Set(["installed"]),enabled:n?.enabled!==!1})}return[...e.values()]}get filteredRows(){const e=this.buildRows(),t=this.search.trim().toLowerCase(),r=[],s=[];for(const[c,u]of this.filterStates)(u==="on"?r:s).push(c);const n=[],o=[];for(const[c,u]of this.typeFilters)(u==="on"?n:o).push(c);const l=e.filter(c=>!(c.fixed&&this.filterStates.get("fixed")!=="on"||r.length&&!r.some(u=>c.categories.has(u))||s.some(u=>c.categories.has(u))||n.length&&!(c.type&&n.includes(c.type))||c.type&&o.includes(c.type)));return t?l.filter(c=>[c.id,c.name,c.type,c.meta,c.author].some(u=>u?.toLowerCase().includes(t))):l}renderRow(e){const t=e.categories.has("built-in")||e.categories.has("installed"),r=!!e.url&&e.categories.has("installed"),s=!!e.url&&!e.categories.has("installed");return A`
      <div class=${`row${e.categories.has("built-in")?" builtin":""}${e.metaIsError?" error":""}`}>
        <span class="row-icon">${e.icon?ir(e.icon):ag}</span>
        <div class="row-main">
          <div class=${`row-title${e.urlOnly?" mono":""}`}>
            ${e.name}${e.id!==e.name?A`<span class="row-id">${e.id}</span>`:""}${e.type?A`<span class="row-type" title="Plugin type"
                  >${cg.get(e.type)??e.type}</span
                >`:""}
          </div>
          ${e.meta?A`<div class=${`meta${e.metaIsError?" err":""}`}>${e.meta}</div>`:""}
        </div>
        <div class="row-author">${e.author??""}</div>
        ${e.repo?A`<a
              class="row-repo"
              href=${e.repo}
              target="_blank"
              rel="noopener noreferrer"
              title="View source on GitHub"
              >${ir(og)}</a
            >`:A`<span></span>`}
        ${e.fixed?A`<span class="mi sm lock-icon" title="Always on — cannot be disabled">lock</span>`:t?A`<label class="switch" title="Enable / disable">
                <input
                  type="checkbox"
                  .checked=${e.enabled}
                  @change=${n=>this.onRowToggle(e,n.target.checked)}
                />
                <span class="slider"></span>
              </label>`:A`<span></span>`}
        ${s?A`<button
              type="button"
              class="install"
              ?disabled=${e.installing}
              @click=${()=>this.installFromCatalog({absUrl:e.url,name:e.name})}
            >
              <span class="mi sm">${e.installing?"hourglass_empty":"download"}</span>
              ${e.installing?"Installing…":"Install"}
            </button>`:r?A`<button
                type="button"
                class="uninstall"
                @click=${()=>this.removePlugin(e.url)}
              >
                <span class="mi sm">delete</span> Uninstall
              </button>`:A`<span></span>`}
      </div>
    `}render(){const e=this.filteredRows;return A`
      <dialog @cancel=${this.close} @keydown=${Yt}>
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
              ${lg.map(([t,r])=>{const s=this.filterStates.get(t),n=s==="on"?`Showing only ${r} plugins — click to exclude`:s==="not"?`Hiding ${r} plugins — click to clear`:`Filter by ${r} — click: show only → exclude → off`;return A`
                  <button
                    type="button"
                    class=${`tri${s?` ${s}`:""}`}
                    title=${n}
                    aria-pressed=${s!==void 0}
                    @click=${()=>this.cycleFilter(t)}
                  >
                    <span class="tri-mark"
                      >${s==="on"?"✓":s==="not"?"≠":""}</span
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
              ${fc.map(([t,r])=>{const s=this.typeFilters.get(t),n=s==="on"?`Showing only ${r} plugins — click to exclude`:s==="not"?`Hiding ${r} plugins — click to clear`:`Filter by ${r} — click: show only → exclude → off`;return A`
                  <button
                    type="button"
                    class=${`tri${s?` ${s}`:""}`}
                    title=${n}
                    aria-pressed=${s!==void 0}
                    @click=${()=>this.cycleTypeFilter(t)}
                  >
                    <span class="tri-mark"
                      >${s==="on"?"✓":s==="not"?"≠":""}</span
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
                ${this.catalogUrls.map(t=>A`<option value=${t}></option>`)}
              </datalist>
              <button type="button" class="ghost" @click=${this.reloadCatalogSource}>
                <span class="mi sm">refresh</span> Reload
              </button>
            </div>
            ${this.catalogError?A`<div class="meta err">Catalog unavailable: ${this.catalogError}</div>`:""}
            ${this.serverCatalogError?A`<div class="meta err">Server registry unavailable: ${this.serverCatalogError}</div>`:""}

            <div class="plugin-list">
              ${e.length===0?A`<p class="hint">No plugins match the current filters/search.</p>`:""}
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
    `}};$t.styles=[Qt,Gt,qe`
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
    `];At([q()],$t.prototype,"urls",2);At([q()],$t.prototype,"records",2);At([q()],$t.prototype,"addUrl",2);At([q()],$t.prototype,"catalog",2);At([q()],$t.prototype,"catalogError",2);At([q()],$t.prototype,"serverCatalog",2);At([q()],$t.prototype,"serverCatalogError",2);At([q()],$t.prototype,"installing",2);At([q()],$t.prototype,"catalogUrls",2);At([q()],$t.prototype,"activeCatalogUrl",2);At([q()],$t.prototype,"search",2);At([q()],$t.prototype,"filterStates",2);At([q()],$t.prototype,"typeFilters",2);$t=At([tt("plugin-manager-dialog")],$t);var dg=Object.defineProperty,ug=Object.getOwnPropertyDescriptor,zn=(e,t,r,s)=>{for(var n=s>1?void 0:s?ug(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&dg(t,r,n),n};const _r="__general__";let Vt=class extends Ne{constructor(){super(...arguments),this.tabs=[],this.active=_r,this.values={},this.placements={},this.secretsText="",this.workspaceTitle="",this.secretError="",this.dialogEl=null,this.attemptClose=e=>{const t=this.invalidSecrets();if(t.length>0){e?.preventDefault();const r=t[0];this.active=r.tab.id,this.secretError=`“${r.field.label}” must be empty or a \${secret:name} reference. Move the value into the secrets store (General tab) and reference it, so the raw secret is never saved or synced.`;return}this.secretError="",this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.attemptClose()}}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Xt(this.dialogEl,e)}async open(){const e=await be(),t=[...e.registries.settings];this.tabs=t.map(([o,l])=>({id:o,name:l.name,fields:l.fields}));const r=await e.store.workspaces.findOne(e.workspaceId);this.workspaceTitle=r?.title??"";const s={},n={};for(const o of this.tabs)for(const l of o.fields){const c=`${o.id}:${l.key}`,u=await e.api.settings.placement(o.id,l.key);u==="user"?(s[c]=to(c),n[c]="user"):u==="workspace"?(s[c]=(await e.store.settings.findOne(c))?.value,n[c]="workspace"):(s[c]=l.default,n[c]=l.scope??"workspace")}this.values=s,this.placements=n,this.secretsText=Os(),this.active=_r,await this.updateComplete,this.dialogEl?.showModal()}static rawSecret(e){return typeof e=="string"&&e!==""&&!e.includes("${secret:")}invalidSecrets(){const e=[];for(const t of this.tabs)for(const r of t.fields)r.type==="secret"&&Vt.rawSecret(this.values[`${t.id}:${r.key}`])&&e.push({tab:t,field:r});return e}async setValue(e,t,r){const s=`${e.id}:${t.key}`;this.values={...this.values,[s]:r},this.secretError&&this.invalidSecrets().length===0&&(this.secretError=""),await(await be()).api.settings.set(e.id,t.key,r,this.placements[s])}async toggleScope(e,t,r){const s=`${e.id}:${t.key}`,n=r?"user":"workspace";this.placements={...this.placements,[s]:n},await(await be()).api.settings.set(e.id,t.key,this.values[s],n)}onSecretsInput(e){this.secretsText=e.target.value,hl(this.secretsText)}downloadSecrets(){const e=new Blob([this.secretsText],{type:"text/plain;charset=utf-8"}),t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download="secrets.txt",r.click(),URL.revokeObjectURL(t)}async setWorkspaceTitle(e){this.workspaceTitle=e;const t=await be();await t.store.workspaces.patch(t.workspaceId,{title:e.trim()||void 0})}renderControl(e,t){const r=`${e.id}:${t.key}`,s=this.values[r];switch(t.type){case"text":return A`<textarea
          .value=${String(s??"")}
          @change=${n=>this.setValue(e,t,n.target.value)}
        ></textarea>`;case"number":return A`<input
          type="number"
          .value=${s==null?"":String(s)}
          @change=${n=>{const o=n.target.value;this.setValue(e,t,o===""?void 0:Number(o))}}
        />`;case"boolean":return A`<label class="scope"
          ><input
            type="checkbox"
            .checked=${!!s}
            @change=${n=>this.setValue(e,t,n.target.checked)}
          />
          enabled</label
        >`;case"date":return A`<input
          type="date"
          .value=${String(s??"")}
          @change=${n=>this.setValue(e,t,n.target.value)}
        />`;case"secret":return this.renderSecretControl(e,t,s);case"option":return A`<div class="radios">
          ${(t.options??[]).map(n=>A`<label
              ><input
                type="radio"
                name=${r}
                .checked=${s===n}
                @change=${()=>this.setValue(e,t,n)}
              />${n}</label
            >`)}
        </div>`;case"selection":{const n=Array.isArray(s)?s:[];return A`<div class="checks">
          ${(t.options??[]).map(o=>A`<label
              ><input
                type="checkbox"
                .checked=${n.includes(o)}
                @change=${l=>{const u=l.target.checked?[...n,o]:n.filter(m=>m!==o);this.setValue(e,t,u)}}
              />${o}</label
            >`)}
        </div>`}case"string":default:return A`<input
          type="text"
          .value=${String(s??"")}
          @change=${n=>this.setValue(e,t,n.target.value)}
        />`}}renderSecretControl(e,t,r){const s=Object.keys(js(this.secretsText)),n=Vt.rawSecret(r);return A`<div class="secret-row">
      <input
        type="text"
        class=${n?"invalid":""}
        placeholder="value or \${secret:name}"
        .value=${String(r??"")}
        @change=${o=>this.setValue(e,t,o.target.value)}
      />
      ${s.length>0?A`<select
            title="Insert a secret reference"
            @change=${o=>{const l=o.target.value;l&&this.setValue(e,t,`\${secret:${l}}`),o.target.value=""}}
          >
            <option value="">🔑 secret…</option>
            ${s.map(o=>A`<option value=${o}>${o}</option>`)}
          </select>`:me}
    </div>`}renderField(e,t){const r=`${e.id}:${t.key}`;return A`<div class="field">
      <div class="field-head">
        <label>${t.label}</label>
        <label class="scope" title="Store on this device only (not synced)">
          <input
            type="checkbox"
            .checked=${this.placements[r]==="user"}
            @change=${s=>this.toggleScope(e,t,s.target.checked)}
          />
          user
        </label>
      </div>
      ${this.renderControl(e,t)}
      ${t.description?A`<p class="desc">${t.description}</p>`:me}
    </div>`}renderGeneral(){return A`
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
    `}renderPanel(){if(this.active===_r)return this.renderGeneral();const e=this.tabs.find(t=>t.id===this.active);return e?A`
      <h3>${e.name}</h3>
      ${e.fields.length===0?A`<p class="empty">This plugin registered no settings.</p>`:e.fields.map(t=>this.renderField(e,t))}
    `:me}render(){return A`
      <dialog @cancel=${this.attemptClose} @keydown=${Yt}>
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
          ${this.secretError?A`<div class="secret-error" role="alert">${this.secretError}</div>`:me}
          <div class="dialog-body">
            <div class="layout">
              <nav class="tabs">
                <button
                  type="button"
                  class=${this.active===_r?"active":""}
                  @click=${()=>this.active=_r}
                >
                  General
                </button>
                ${this.tabs.map(e=>A`<button
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
    `}};Vt.styles=[Qt,Gt,qe`
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
    `];zn([q()],Vt.prototype,"tabs",2);zn([q()],Vt.prototype,"active",2);zn([q()],Vt.prototype,"values",2);zn([q()],Vt.prototype,"placements",2);zn([q()],Vt.prototype,"secretsText",2);zn([q()],Vt.prototype,"workspaceTitle",2);zn([q()],Vt.prototype,"secretError",2);Vt=zn([tt("settings-dialog")],Vt);var hg=Object.defineProperty,fg=Object.getOwnPropertyDescriptor,Zt=(e,t,r,s)=>{for(var n=s>1?void 0:s?fg(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&hg(t,r,n),n};let _t=class extends Ne{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.tableColumns=[],this.rows=[],this.showColsMenu=!1,this.allRows=[],this.searchQuery="",this.globalQuery="",this.onSearch=e=>{const t=e.detail;t.tableId===this.viewInstanceId&&(this.searchQuery=t.query??"",this.recompute())},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??"",this.recompute()}}get templateOn(){return this.instance?.templateEnabled!==!1}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:table-search",this.onSearch),document.addEventListener("easydb:global-search",this.onGlobalSearch),await this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:table-search",this.onSearch),document.removeEventListener("easydb:global-search",this.onGlobalSearch),this.rowsUnsub?.(),this.instUnsub?.()}async updated(e){e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}async reload(){this.rowsUnsub?.(),this.loaded=!1,await this.load()}async load(){if(!this.viewInstanceId)return;this.rowsUnsub?.(),this.instUnsub?.();const e=await be(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const r=await e.store.tables.findOne(t.tableId);this.tableColumns=r?.columns??[],r&&t.tableName!==r.name&&e.store.viewInstances.patch(t.id,{tableName:r.name});const s=new Map(this.tableColumns.map(o=>[o.field,o]));this.columns=t.visibleColumns.map(o=>s.get(o)??{field:o,label:o,type:"string"}),this.instUnsub=e.store.viewInstances.subscribe(o=>{const l=o.find(c=>c.id===this.viewInstanceId);if(l){if(l.tableId!==this.instance?.tableId){this.instance=l,this.reload();return}this.instance=l,this.recompute()}});const n=e.store.rows(t.tableId);this.rowsUnsub=n.subscribe(o=>{this.allRows=o,this.recompute()}),this.allRows=await n.find(),this.recompute(),this.loaded=!0}recompute(){if(!this.instance)return;let e=cm(this.allRows,this.instance);const t=(o,l)=>Object.values(o.data).some(c=>c!=null&&String(c).toLowerCase().includes(l)),r=this.searchQuery.trim(),s=this.globalQuery.trim();r&&(e=Cs(e,r,t)),s&&(e=Cs(e,s,t));const n=this.instance.limit??0;n>0&&e.length>n&&(e=e.slice(0,n)),this.rows=e,this.templateOn&&Cl(this.viewInstanceId,e.length,this.allRows.length)}async toggleTemplate(){if(!this.instance)return;const e=!this.templateOn;await(await be()).store.viewInstances.patch(this.instance.id,{templateEnabled:e,updatedAt:Date.now()}),this.instance={...this.instance,templateEnabled:e},this.showColsMenu=!1}editTemplate(){!this.instance||!this.template||Ui(this.instance.tableId,{editTemplateId:this.template.id})}editView(){this.instance&&Ui(this.instance.tableId,{editInstanceId:this.instance.id})}async toggleColumn(e){if(!this.instance)return;const t=this.instance.visibleColumns,s=t.includes(e)?t.filter(o=>o!==e):[...t,e];if(s.length===0)return;await(await be()).store.viewInstances.patch(this.instance.id,{visibleColumns:s,updatedAt:Date.now()}),this.instance={...this.instance,visibleColumns:s}}renderTable(){return this.rows.length===0?A`<div class="vw-empty">No rows.</div>`:A`
      <table class="vw-table">
        <thead>
          <tr>
            ${this.columns.map(e=>A`<th>${e.label||e.field}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.rows.map(e=>A`<tr>
                ${this.columns.map(t=>{const r=e.data[t.field];return A`<td>${r==null?"":String(r)}</td>`})}
              </tr>`)}
        </tbody>
      </table>
    `}renderTemplated(){const e=this.template;if(!e)return A`<div class="vw-empty">This view's template is missing.</div>`;if(dm(e.rowHtml)){const t=this.instance?.mapping??{},r=this.rows.map(n=>om(e.rowHtml,n,t)).join(""),s=(e.headerHtml??"")+r+(e.footerHtml??"");return A`<div class="vw-root">${ir(s)}</div>`}return A`<div class="vw-root">
      ${e.headerHtml?.trim()?A`<div class="vw-html">${ir(e.headerHtml)}</div>`:me}
      ${this.renderTable()}
      ${e.footerHtml?.trim()?A`<div class="vw-html">${ir(e.footerHtml)}</div>`:me}
    </div>`}renderFooter(){if(!this.instance)return me;const e=this.templateOn,t=new Set(this.instance.visibleColumns);return A`<div class="vw-footer">
      ${!e&&this.showColsMenu?A`<div class="cols-menu">
            ${this.tableColumns.map(r=>A`<label
                  ><input
                    type="checkbox"
                    .checked=${t.has(r.field)}
                    @change=${()=>void this.toggleColumn(r.field)}
                  />${r.label||r.field}</label
                >`)}
          </div>`:me}
      ${e?me:A`<button
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
      ${this.template?A`<button
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
    </div>`}render(){if(!this.loaded)return A`<div class="vw-body scroll"><div class="vw-loading">Loading…</div></div>`;if(this.error)return A`<div class="vw-body scroll"><div class="vw-empty">${this.error}</div></div>`;const t=this.templateOn?A`<div class="vw-body scroll">${this.renderTemplated()}</div>`:A`<div class="vw-body grid">
          <data-table
            .tableId=${this.instance?.tableId??""}
            .viewInstanceId=${this.viewInstanceId}
          ></data-table>
        </div>`;return A`${t}${this.renderFooter()}`}};_t.styles=[Qt,qe`
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
    `];Zt([Mt({type:String})],_t.prototype,"viewInstanceId",2);Zt([q()],_t.prototype,"loaded",2);Zt([q()],_t.prototype,"error",2);Zt([q()],_t.prototype,"instance",2);Zt([q()],_t.prototype,"template",2);Zt([q()],_t.prototype,"columns",2);Zt([q()],_t.prototype,"tableColumns",2);Zt([q()],_t.prototype,"rows",2);Zt([q()],_t.prototype,"showColsMenu",2);Zt([q()],_t.prototype,"searchQuery",2);Zt([q()],_t.prototype,"globalQuery",2);_t=Zt([tt("view-window")],_t);const Ut=new Map;function pg(e){const t=Ut.get(e);if(!t)return!1;const r=t.panel;return r.status==="minimized"&&r.normalize?.(),r.front?.(),!0}let Va=!1;function Ga(e){e.panel.setHeaderTitle?.(e.name+El(e.count,e.total))}function mg(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function gg(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function pc(e){return`view-panel-${gg(e)}`}async function bg(){if(Va)return;Va=!0;const e=await be(),t=r=>r.filter(s=>s.workspaceId===e.workspaceId&&s.open);for(const r of t(await e.store.viewInstances.find()))Ya(r,e);e.store.viewInstances.subscribe(r=>{const s=new Map(t(r).map(n=>[n.id,n]));for(const n of[...Ut.keys()])s.has(n)||wg(n);for(const[n,o]of s)Ut.has(n)||Ya(o,e)}),e.store.tables.subscribe(r=>void yg(e,r)),document.addEventListener(Es,r=>{const s=r.detail,n=Ut.get(s.key);n&&(n.count=s.count,n.total=s.total,Ga(n))}),document.addEventListener("easydb:reload-view",r=>{const s=r.detail?.instanceId;if(!s)return;const n=Ut.get(s);n&&(async()=>{const o=await e.store.viewInstances.findOne(s);o&&(n.name=o.name,Ga(n)),n.el.reload()})()}),document.addEventListener("easydb:reload-views",()=>{for(const{el:r}of Ut.values())r.reload()})}async function yg(e,t){const r=t.filter(l=>l.workspaceId===e.workspaceId),s=new Set(r.map(l=>l.id)),n=new Map;for(const l of r)n.has(l.name)||n.set(l.name,l);const o=await e.store.viewInstances.find();for(const l of o){if(l.workspaceId!==e.workspaceId||s.has(l.tableId)||!l.tableName)continue;const c=n.get(l.tableName);c&&await e.store.viewInstances.patch(l.id,{tableId:c.id,updatedAt:Date.now()})}}function Ya(e,t){if(Ut.has(e.id))return;const r=pc(e.id),s=document.createElement("view-window");s.viewInstanceId=e.id,s.style.height="100%";const n=e.windowGeometry,o=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:"480 520"},l=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:{my:"center-top",at:"center-top",offsetY:60},c=Ql(r,Zl),u=z.create({id:r,container:mg(),headerTitle:e.name,theme:"#0891b2",content:s,...o,position:l,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>void Ai(e.id)},resizeit:{containment:!1,stop:()=>void Ai(e.id)},onstatuschange:k=>{k.status==="maximized"?c.enter():c.exit(),Ai(e.id)},onclosed:()=>{Ut.delete(e.id),c.exit(),t.store.viewInstances.patch(e.id,{open:!1,updatedAt:Date.now()}).catch(()=>{})}});Ut.set(e.id,{panel:u,el:s,name:e.name,count:-1,total:-1});const m=document.getElementById(r),$=document.createElement("panel-search");$.tableId=e.id,m?.querySelector(".jsPanel-controlbar")?.prepend($);const b=m?.querySelector(".jsPanel-titlebar");b&&(b.tabIndex=-1,b.style.outline="none",b.addEventListener("pointerdown",()=>b.focus())),n?.maximized?queueMicrotask(()=>u.maximize?.()):n?.minimized&&queueMicrotask(()=>u.minimize?.())}function wg(e){const t=Ut.get(e);if(t){Ut.delete(e);try{t.panel.status!=="closed"&&t.panel.close()}catch{}}}async function Ai(e){const t=document.getElementById(pc(e)),r=Ut.get(e);if(!t||!r)return;const s=r.panel.status,n=s==="minimized",o=s==="maximized";try{const l=await be(),c=(await l.store.viewInstances.findOne(e))?.windowGeometry;let u=t.offsetLeft,m=t.offsetTop,$=t.offsetWidth,b=t.offsetHeight;(n||o)&&c&&(u=c.x,m=c.y,$=c.w,b=c.h),u<=-9e3&&(u=c?.x??40);const k={x:u,y:m,w:$,h:b,z:0,minimized:n,maximized:o};await l.store.viewInstances.patch(e,{windowGeometry:k,updatedAt:Date.now()})}catch{}}var vg=Object.defineProperty,xg=Object.getOwnPropertyDescriptor,mr=(e,t,r,s)=>{for(var n=s>1?void 0:s?xg(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&vg(t,r,n),n};const $g={Windows:0,Actions:1,App:2,Tables:3,Views:4};function Xa(e){return $g[e]??3}function kg(e){return e?e.trimStart().startsWith("<svg")?A`<span class="cmd-svg">${Zi(e)}</span>`:A`<span class="mi sm">${e}</span>`:A`<span class="mi sm">chevron_right</span>`}let jn=class extends Ne{constructor(){super(...arguments),this.search="",this.items=[],this.selected=0,this.api=null}async open(){const e=await be();this.api=e.api,this.items=await this.buildItems(),this.search="",this.selected=0,await this.updateComplete,this.dialogEl&&!this.dialogEl.open&&this.dialogEl.showModal(),this.inputEl?.focus()}async buildItems(){const e=await be(),t=e.api,r=[];for(const o of e.registries.commands)r.push({id:o.id,title:o.title,group:o.group??"Commands",...o.icon?{icon:o.icon}:{},haystack:[o.title,o.group,...o.keywords??[]].join(" ").toLowerCase(),run:()=>o.run(t)});for(const o of[...e.registries.headerButtons,...e.registries.footerButtons])r.push({id:`button:${o.id}`,title:o.label,group:"Actions",...o.icon?{icon:o.icon}:{},haystack:`${o.label} ${o.tooltip??""}`.toLowerCase(),run:()=>o.onClick(t)});const s=await t.store.tables.find({workspaceId:e.workspaceId});s.sort((o,l)=>o.name.localeCompare(l.name));for(const o of s)r.push({id:`goto:${o.id}`,title:`Go to: ${o.name}`,group:"Tables",icon:"table_chart",haystack:`${o.name} go to table`.toLowerCase(),run:()=>{bp(o.id)}});const n=await t.store.viewInstances.find({workspaceId:e.workspaceId});n.sort((o,l)=>o.name.localeCompare(l.name));for(const o of n)r.push({id:`goto-view:${o.id}`,title:`Go to view: ${o.name}`,group:"Views",icon:"view_quilt",haystack:`${o.name} go to view`.toLowerCase(),run:async()=>{await t.store.viewInstances.patch(o.id,{open:!0,updatedAt:Date.now()}),pg(o.id)}});return r.map((o,l)=>({it:o,i:l})).sort((o,l)=>Xa(o.it.group)-Xa(l.it.group)||o.i-l.i).map(({it:o})=>o)}get filtered(){const e=this.search.trim().toLowerCase();return e?this.items.filter(t=>t.haystack.includes(e)):this.items}close(){this.dialogEl?.close()}onInput(e){this.search=e.target.value,this.selected=0}onKeydown(e){const t=this.filtered;if(e.key==="ArrowDown")e.preventDefault(),this.selected=t.length?(this.selected+1)%t.length:0;else if(e.key==="ArrowUp")e.preventDefault(),this.selected=t.length?(this.selected-1+t.length)%t.length:0;else if(e.key==="Enter"){e.preventDefault();const r=t[this.selected];r&&this.execute(r)}}async execute(e){this.close();try{await e.run()}catch(t){console.error(`[command:${e.id}]`,t)}}render(){const e=this.filtered;let t="";return A`
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
          ${e.length===0?A`<div class="empty">No matching commands.</div>`:e.map((r,s)=>{const n=r.group!==t?(t=r.group,r.group):null;return A`
                  ${n?A`<div class="group-head">${n}</div>`:""}
                  <div
                    class=${`item${s===this.selected?" sel":""}`}
                    @mousemove=${()=>this.selected=s}
                    @click=${()=>this.execute(r)}
                  >
                    ${kg(r.icon)}
                    <span class="title">${r.title}</span>
                  </div>
                `})}
        </div>
      </dialog>
    `}};jn.styles=[Qt,qe`
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
    `];mr([q()],jn.prototype,"search",2);mr([q()],jn.prototype,"items",2);mr([q()],jn.prototype,"selected",2);mr([fn("dialog")],jn.prototype,"dialogEl",2);mr([fn("input")],jn.prototype,"inputEl",2);jn=mr([tt("command-palette-dialog")],jn);var Cg=Object.defineProperty,Eg=Object.getOwnPropertyDescriptor,mc=(e,t,r,s)=>{for(var n=s>1?void 0:s?Eg(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&Cg(t,r,n),n};let Ps=class extends Ne{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await be();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(r=>this.tables=r.filter(s=>s.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(r=>r.workspaceId===this.workspaceId),await vp(),await bg()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?A``:A`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on the
      page, or click <strong>+ New Table</strong> above.
    </div>`}};Ps.styles=qe`
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
  `;mc([q()],Ps.prototype,"tables",2);Ps=mc([tt("table-list")],Ps);var Sg=Object.defineProperty,_g=Object.getOwnPropertyDescriptor,mo=(e,t,r,s)=>{for(var n=s>1?void 0:s?_g(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&Sg(t,r,n),n};let Dr=class extends Ne{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await be();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);if(!t)return;const r=new URLSearchParams(location.search);r.set("space",t.name);const s=`${location.pathname}?${r.toString()}${location.hash}`;location.assign(s)}async addWorkspace(){const t=await(await be()).api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const r=new URLSearchParams(location.search);r.set("space",t.trim()),location.assign(`${location.pathname}?${r.toString()}${location.hash}`)}render(){return A`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>A`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};Dr.styles=[Qt,qe`
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
  `];mo([q()],Dr.prototype,"workspaces",2);mo([q()],Dr.prototype,"current",2);Dr=mo([tt("workspace-selector")],Dr);var Qa=Object.freeze,gc=Object.defineProperty,Tg=Object.getOwnPropertyDescriptor,en=(e,t,r,s)=>{for(var n=s>1?void 0:s?Tg(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(s?l(t,r,n):l(n))||n);return s&&n&&gc(t,r,n),n},Ag=(e,t)=>Qa(gc(e,"raw",{value:Qa(e.slice())})),Ja;function Za(e){return e?e.trimStart().startsWith("<svg")?A`<span class="icon-svg">${Zi(e)}</span>`:A`<span class="mi sm">${e}</span>`:""}let Tt=class extends Ne{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.workspaceTitle="",this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId,{notice:t.detail.notice})},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onOpenSettings=()=>{this.settingsDialog?.open()},this.onOpenCommandPalette=()=>{this.commandPaletteDialog?.open()},this.onGlobalKeydown=e=>{(e.ctrlKey||e.metaKey)&&!e.altKey&&(e.key==="k"||e.key==="K")&&(e.preventDefault(),this.commandPaletteDialog?.open())},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{el(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!el(e))return;e.preventDefault();const t=await be(),r=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:r,event:e});for(const s of[...t.registries.dropHandlers])try{if(await s(e,t.api))return}catch(n){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:n})}},this.runSlot=(e,t)=>{if(!this.api)return;const r=t?.currentTarget??void 0;Promise.resolve(e.onClick(this.api,{anchor:r})).catch(s=>{console.error(`[footer-button:${e.id}]`,s)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.addEventListener("easydb:open-settings",this.onOpenSettings),document.addEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.addEventListener("easydb:focus-search",this.openSearch),document.addEventListener("keydown",this.onGlobalKeydown),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.removeEventListener("easydb:open-settings",this.onOpenSettings),document.removeEventListener("easydb:open-command-palette",this.onOpenCommandPalette),document.removeEventListener("easydb:focus-search",this.openSearch),document.removeEventListener("keydown",this.onGlobalKeydown),this.workspaceUnsub?.()}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await be();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e)),this.workspaceUnsub=e.store.workspaces.subscribe(t=>{const r=t.find(s=>s.id===e.workspaceId);this.workspaceTitle=r?.title?.trim()??""})}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){if(e.variant==="secondary")return A`
        <button class="icon-btn" title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
          ${Za(e.icon)}
        </button>
      `;const r=t==="header"||e.variant==="primary"?"primary":"slot";return A`
      <button class=${r} title=${e.tooltip??e.label} @click=${s=>this.runSlot(e,s)}>
        ${Za(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return A(Ja||(Ja=Ag([`
      <header>
        <strong
          >`,`
          <a
            class="version-link"
            href="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md"
            target="_blank"
            rel="noopener"
            title="View the changelog on GitHub"
            ><span class="version">v0.0.149</span></a
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
    `])),this.workspaceTitle||"easyDBAccess",this.headerButtons.filter(e=>e.variant!=="secondary").map(e=>this.renderSlotButton(e,"header")),this.searchOpen?A`<span class="search-wrap">
              <input
                class="search"
                type="search"
                placeholder="search all tables…"
                .value=${this.searchQuery}
                @input=${this.onSearchInput}
                @blur=${this.closeSearchOnBlur}
              />
              ${this.searchQuery.length>0?A`<button
                    class="search-clear"
                    title="Clear search"
                    aria-label="Clear search"
                    @mousedown=${this.clearSearch}
                  >
                    ×
                  </button>`:""}
            </span>`:A`<button
              class="icon-btn ${this.searchQuery.trim().length>0?"active":""}"
              title=${this.searchQuery.trim().length>0?`Filtering all tables: ${this.searchQuery}`:"Search across all tables in this workspace"}
              @click=${this.openSearch}
            >
              <span class="mi">search</span>
            </button>`,()=>this.api?.ui.openPluginManager(),this.headerButtons.filter(e=>e.variant==="secondary").map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};Tt.styles=[Qt,qe`
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
    `];en([fn("new-table-dialog")],Tt.prototype,"dialog",2);en([fn("csv-paste-dialog")],Tt.prototype,"csvPasteDialog",2);en([fn("plugin-manager-dialog")],Tt.prototype,"pluginManagerDialog",2);en([fn("settings-dialog")],Tt.prototype,"settingsDialog",2);en([fn("command-palette-dialog")],Tt.prototype,"commandPaletteDialog",2);en([fn("input.search")],Tt.prototype,"searchInput",2);en([q()],Tt.prototype,"footerButtons",2);en([q()],Tt.prototype,"headerButtons",2);en([q()],Tt.prototype,"searchQuery",2);en([q()],Tt.prototype,"searchOpen",2);en([q()],Tt.prototype,"workspaceTitle",2);Tt=en([tt("app-shell")],Tt);function el(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([be(),In(()=>Promise.resolve().then(()=>oc),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});export{qe as a,A as b,Yt as c,Gt as d,Qt as e,Ne as i,Xt as m,q as r,tt as t};
//# sourceMappingURL=index-lqI-C4dK.js.map
