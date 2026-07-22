(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(t){if(t.ep)return;t.ep=!0;const l=r(t);fetch(t.href,l)}})();const la="modulepreload",ca=function(e){return"/easydbaccess2/"+e},go={},ua=function(n,r,o){let t=Promise.resolve();if(r&&r.length>0){let c=function(T){return Promise.all(T.map(F=>Promise.resolve(F).then(R=>({status:"fulfilled",value:R}),R=>({status:"rejected",reason:R}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),g=f?.nonce||f?.getAttribute("nonce");t=c(r.map(T=>{if(T=ca(T),T in go)return;go[T]=!0;const F=T.endsWith(".css"),R=F?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${T}"]${R}`))return;const j=document.createElement("link");if(j.rel=F?"stylesheet":la,F||(j.as="script"),j.crossOrigin="",j.href=T,g&&j.setAttribute("nonce",g),document.head.appendChild(j),F)return new Promise((V,Z)=>{j.addEventListener("load",V),j.addEventListener("error",()=>Z(new Error(`Unable to preload CSS for ${T}`)))})}))}function l(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return t.then(c=>{for(const f of c||[])f.status==="rejected"&&l(f.reason);return n().catch(l)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cr=globalThis,Ai=Cr.ShadowRoot&&(Cr.ShadyCSS===void 0||Cr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ji=Symbol(),bo=new WeakMap;let es=class{constructor(n,r,o){if(this._$cssResult$=!0,o!==ji)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=n,this.t=r}get styleSheet(){let n=this.o;const r=this.t;if(Ai&&n===void 0){const o=r!==void 0&&r.length===1;o&&(n=bo.get(r)),n===void 0&&((this.o=n=new CSSStyleSheet).replaceSync(this.cssText),o&&bo.set(r,n))}return n}toString(){return this.cssText}};const da=e=>new es(typeof e=="string"?e:e+"",void 0,ji),ct=(e,...n)=>{const r=e.length===1?e[0]:n.reduce((o,t,l)=>o+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(t)+e[l+1],e[0]);return new es(r,e,ji)},fa=(e,n)=>{if(Ai)e.adoptedStyleSheets=n.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of n){const o=document.createElement("style"),t=Cr.litNonce;t!==void 0&&o.setAttribute("nonce",t),o.textContent=r.cssText,e.appendChild(o)}},yo=Ai?e=>e:e=>e instanceof CSSStyleSheet?(n=>{let r="";for(const o of n.cssRules)r+=o.cssText;return da(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ha,defineProperty:pa,getOwnPropertyDescriptor:ma,getOwnPropertyNames:ga,getOwnPropertySymbols:ba,getPrototypeOf:ya}=Object,Tr=globalThis,vo=Tr.trustedTypes,va=vo?vo.emptyScript:"",wa=Tr.reactiveElementPolyfillSupport,qn=(e,n)=>e,Sr={toAttribute(e,n){switch(n){case Boolean:e=e?va:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,n){let r=e;switch(n){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ti=(e,n)=>!ha(e,n),wo={attribute:!0,type:String,converter:Sr,reflect:!1,useDefault:!1,hasChanged:Ti};Symbol.metadata??=Symbol("metadata"),Tr.litPropertyMetadata??=new WeakMap;let Cn=class extends HTMLElement{static addInitializer(n){this._$Ei(),(this.l??=[]).push(n)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(n,r=wo){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(n)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(n,r),!r.noAccessor){const o=Symbol(),t=this.getPropertyDescriptor(n,o,r);t!==void 0&&pa(this.prototype,n,t)}}static getPropertyDescriptor(n,r,o){const{get:t,set:l}=ma(this.prototype,n)??{get(){return this[r]},set(c){this[r]=c}};return{get:t,set(c){const f=t?.call(this);l?.call(this,c),this.requestUpdate(n,f,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(n){return this.elementProperties.get(n)??wo}static _$Ei(){if(this.hasOwnProperty(qn("elementProperties")))return;const n=ya(this);n.finalize(),n.l!==void 0&&(this.l=[...n.l]),this.elementProperties=new Map(n.elementProperties)}static finalize(){if(this.hasOwnProperty(qn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(qn("properties"))){const r=this.properties,o=[...ga(r),...ba(r)];for(const t of o)this.createProperty(t,r[t])}const n=this[Symbol.metadata];if(n!==null){const r=litPropertyMetadata.get(n);if(r!==void 0)for(const[o,t]of r)this.elementProperties.set(o,t)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const t=this._$Eu(r,o);t!==void 0&&this._$Eh.set(t,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(n){const r=[];if(Array.isArray(n)){const o=new Set(n.flat(1/0).reverse());for(const t of o)r.unshift(yo(t))}else n!==void 0&&r.push(yo(n));return r}static _$Eu(n,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof n=="string"?n.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(n=>n(this))}addController(n){(this._$EO??=new Set).add(n),this.renderRoot!==void 0&&this.isConnected&&n.hostConnected?.()}removeController(n){this._$EO?.delete(n)}_$E_(){const n=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(n.set(o,this[o]),delete this[o]);n.size>0&&(this._$Ep=n)}createRenderRoot(){const n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fa(n,this.constructor.elementStyles),n}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(n=>n.hostConnected?.())}enableUpdating(n){}disconnectedCallback(){this._$EO?.forEach(n=>n.hostDisconnected?.())}attributeChangedCallback(n,r,o){this._$AK(n,o)}_$ET(n,r){const o=this.constructor.elementProperties.get(n),t=this.constructor._$Eu(n,o);if(t!==void 0&&o.reflect===!0){const l=(o.converter?.toAttribute!==void 0?o.converter:Sr).toAttribute(r,o.type);this._$Em=n,l==null?this.removeAttribute(t):this.setAttribute(t,l),this._$Em=null}}_$AK(n,r){const o=this.constructor,t=o._$Eh.get(n);if(t!==void 0&&this._$Em!==t){const l=o.getPropertyOptions(t),c=typeof l.converter=="function"?{fromAttribute:l.converter}:l.converter?.fromAttribute!==void 0?l.converter:Sr;this._$Em=t;const f=c.fromAttribute(r,l.type);this[t]=f??this._$Ej?.get(t)??f,this._$Em=null}}requestUpdate(n,r,o,t=!1,l){if(n!==void 0){const c=this.constructor;if(t===!1&&(l=this[n]),o??=c.getPropertyOptions(n),!((o.hasChanged??Ti)(l,r)||o.useDefault&&o.reflect&&l===this._$Ej?.get(n)&&!this.hasAttribute(c._$Eu(n,o))))return;this.C(n,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(n,r,{useDefault:o,reflect:t,wrapped:l},c){o&&!(this._$Ej??=new Map).has(n)&&(this._$Ej.set(n,c??r??this[n]),l!==!0||c!==void 0)||(this._$AL.has(n)||(this.hasUpdated||o||(r=void 0),this._$AL.set(n,r)),t===!0&&this._$Em!==n&&(this._$Eq??=new Set).add(n))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const n=this.scheduleUpdate();return n!=null&&await n,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,l]of this._$Ep)this[t]=l;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[t,l]of o){const{wrapped:c}=l,f=this[t];c!==!0||this._$AL.has(t)||f===void 0||this.C(t,void 0,l,f)}}let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$EM()}catch(o){throw n=!1,this._$EM(),o}n&&this._$AE(r)}willUpdate(n){}_$AE(n){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(n)),this.updated(n)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(n){return!0}update(n){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(n){}firstUpdated(n){}};Cn.elementStyles=[],Cn.shadowRootOptions={mode:"open"},Cn[qn("elementProperties")]=new Map,Cn[qn("finalized")]=new Map,wa?.({ReactiveElement:Cn}),(Tr.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fi=globalThis,xo=e=>e,Pr=Fi.trustedTypes,$o=Pr?Pr.createPolicy("lit-html",{createHTML:e=>e}):void 0,ts="$lit$",rn=`lit$${Math.random().toFixed(9).slice(2)}$`,ns="?"+rn,xa=`<${ns}>`,gn=document,Un=()=>gn.createComment(""),Wn=e=>e===null||typeof e!="object"&&typeof e!="function",Oi=Array.isArray,$a=e=>Oi(e)||typeof e?.[Symbol.iterator]=="function",gi=`[ 	
\f\r]`,Nn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Eo=/-->/g,Co=/>/g,hn=RegExp(`>|${gi}(?:([^\\s"'>=/]+)(${gi}*=${gi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ko=/'/g,_o=/"/g,rs=/^(?:script|style|textarea|title)$/i,Ea=e=>(n,...r)=>({_$litType$:e,strings:n,values:r}),J=Ea(1),_n=Symbol.for("lit-noChange"),Ue=Symbol.for("lit-nothing"),So=new WeakMap,mn=gn.createTreeWalker(gn,129);function is(e,n){if(!Oi(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return $o!==void 0?$o.createHTML(n):n}const Ca=(e,n)=>{const r=e.length-1,o=[];let t,l=n===2?"<svg>":n===3?"<math>":"",c=Nn;for(let f=0;f<r;f++){const g=e[f];let T,F,R=-1,j=0;for(;j<g.length&&(c.lastIndex=j,F=c.exec(g),F!==null);)j=c.lastIndex,c===Nn?F[1]==="!--"?c=Eo:F[1]!==void 0?c=Co:F[2]!==void 0?(rs.test(F[2])&&(t=RegExp("</"+F[2],"g")),c=hn):F[3]!==void 0&&(c=hn):c===hn?F[0]===">"?(c=t??Nn,R=-1):F[1]===void 0?R=-2:(R=c.lastIndex-F[2].length,T=F[1],c=F[3]===void 0?hn:F[3]==='"'?_o:ko):c===_o||c===ko?c=hn:c===Eo||c===Co?c=Nn:(c=hn,t=void 0);const V=c===hn&&e[f+1].startsWith("/>")?" ":"";l+=c===Nn?g+xa:R>=0?(o.push(T),g.slice(0,R)+ts+g.slice(R)+rn+V):g+rn+(R===-2?f:V)}return[is(e,l+(e[r]||"<?>")+(n===2?"</svg>":n===3?"</math>":"")),o]};class Hn{constructor({strings:n,_$litType$:r},o){let t;this.parts=[];let l=0,c=0;const f=n.length-1,g=this.parts,[T,F]=Ca(n,r);if(this.el=Hn.createElement(T,o),mn.currentNode=this.el.content,r===2||r===3){const R=this.el.content.firstChild;R.replaceWith(...R.childNodes)}for(;(t=mn.nextNode())!==null&&g.length<f;){if(t.nodeType===1){if(t.hasAttributes())for(const R of t.getAttributeNames())if(R.endsWith(ts)){const j=F[c++],V=t.getAttribute(R).split(rn),Z=/([.?@])?(.*)/.exec(j);g.push({type:1,index:l,name:Z[2],strings:V,ctor:Z[1]==="."?_a:Z[1]==="?"?Sa:Z[1]==="@"?Pa:Fr}),t.removeAttribute(R)}else R.startsWith(rn)&&(g.push({type:6,index:l}),t.removeAttribute(R));if(rs.test(t.tagName)){const R=t.textContent.split(rn),j=R.length-1;if(j>0){t.textContent=Pr?Pr.emptyScript:"";for(let V=0;V<j;V++)t.append(R[V],Un()),mn.nextNode(),g.push({type:2,index:++l});t.append(R[j],Un())}}}else if(t.nodeType===8)if(t.data===ns)g.push({type:2,index:l});else{let R=-1;for(;(R=t.data.indexOf(rn,R+1))!==-1;)g.push({type:7,index:l}),R+=rn.length-1}l++}}static createElement(n,r){const o=gn.createElement("template");return o.innerHTML=n,o}}function Sn(e,n,r=e,o){if(n===_n)return n;let t=o!==void 0?r._$Co?.[o]:r._$Cl;const l=Wn(n)?void 0:n._$litDirective$;return t?.constructor!==l&&(t?._$AO?.(!1),l===void 0?t=void 0:(t=new l(e),t._$AT(e,r,o)),o!==void 0?(r._$Co??=[])[o]=t:r._$Cl=t),t!==void 0&&(n=Sn(e,t._$AS(e,n.values),t,o)),n}class ka{constructor(n,r){this._$AV=[],this._$AN=void 0,this._$AD=n,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(n){const{el:{content:r},parts:o}=this._$AD,t=(n?.creationScope??gn).importNode(r,!0);mn.currentNode=t;let l=mn.nextNode(),c=0,f=0,g=o[0];for(;g!==void 0;){if(c===g.index){let T;g.type===2?T=new Vn(l,l.nextSibling,this,n):g.type===1?T=new g.ctor(l,g.name,g.strings,this,n):g.type===6&&(T=new Aa(l,this,n)),this._$AV.push(T),g=o[++f]}c!==g?.index&&(l=mn.nextNode(),c++)}return mn.currentNode=gn,t}p(n){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(n,o,r),r+=o.strings.length-2):o._$AI(n[r])),r++}}class Vn{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(n,r,o,t){this.type=2,this._$AH=Ue,this._$AN=void 0,this._$AA=n,this._$AB=r,this._$AM=o,this.options=t,this._$Cv=t?.isConnected??!0}get parentNode(){let n=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&n?.nodeType===11&&(n=r.parentNode),n}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(n,r=this){n=Sn(this,n,r),Wn(n)?n===Ue||n==null||n===""?(this._$AH!==Ue&&this._$AR(),this._$AH=Ue):n!==this._$AH&&n!==_n&&this._(n):n._$litType$!==void 0?this.$(n):n.nodeType!==void 0?this.T(n):$a(n)?this.k(n):this._(n)}O(n){return this._$AA.parentNode.insertBefore(n,this._$AB)}T(n){this._$AH!==n&&(this._$AR(),this._$AH=this.O(n))}_(n){this._$AH!==Ue&&Wn(this._$AH)?this._$AA.nextSibling.data=n:this.T(gn.createTextNode(n)),this._$AH=n}$(n){const{values:r,_$litType$:o}=n,t=typeof o=="number"?this._$AC(n):(o.el===void 0&&(o.el=Hn.createElement(is(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===t)this._$AH.p(r);else{const l=new ka(t,this),c=l.u(this.options);l.p(r),this.T(c),this._$AH=l}}_$AC(n){let r=So.get(n.strings);return r===void 0&&So.set(n.strings,r=new Hn(n)),r}k(n){Oi(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,t=0;for(const l of n)t===r.length?r.push(o=new Vn(this.O(Un()),this.O(Un()),this,this.options)):o=r[t],o._$AI(l),t++;t<r.length&&(this._$AR(o&&o._$AB.nextSibling,t),r.length=t)}_$AR(n=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);n!==this._$AB;){const o=xo(n).nextSibling;xo(n).remove(),n=o}}setConnected(n){this._$AM===void 0&&(this._$Cv=n,this._$AP?.(n))}}class Fr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(n,r,o,t,l){this.type=1,this._$AH=Ue,this._$AN=void 0,this.element=n,this.name=r,this._$AM=t,this.options=l,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Ue}_$AI(n,r=this,o,t){const l=this.strings;let c=!1;if(l===void 0)n=Sn(this,n,r,0),c=!Wn(n)||n!==this._$AH&&n!==_n,c&&(this._$AH=n);else{const f=n;let g,T;for(n=l[0],g=0;g<l.length-1;g++)T=Sn(this,f[o+g],r,g),T===_n&&(T=this._$AH[g]),c||=!Wn(T)||T!==this._$AH[g],T===Ue?n=Ue:n!==Ue&&(n+=(T??"")+l[g+1]),this._$AH[g]=T}c&&!t&&this.j(n)}j(n){n===Ue?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,n??"")}}class _a extends Fr{constructor(){super(...arguments),this.type=3}j(n){this.element[this.name]=n===Ue?void 0:n}}class Sa extends Fr{constructor(){super(...arguments),this.type=4}j(n){this.element.toggleAttribute(this.name,!!n&&n!==Ue)}}class Pa extends Fr{constructor(n,r,o,t,l){super(n,r,o,t,l),this.type=5}_$AI(n,r=this){if((n=Sn(this,n,r,0)??Ue)===_n)return;const o=this._$AH,t=n===Ue&&o!==Ue||n.capture!==o.capture||n.once!==o.once||n.passive!==o.passive,l=n!==Ue&&(o===Ue||t);t&&this.element.removeEventListener(this.name,this,o),l&&this.element.addEventListener(this.name,this,n),this._$AH=n}handleEvent(n){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,n):this._$AH.handleEvent(n)}}class Aa{constructor(n,r,o){this.element=n,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(n){Sn(this,n)}}const ja=Fi.litHtmlPolyfillSupport;ja?.(Hn,Vn),(Fi.litHtmlVersions??=[]).push("3.3.3");const Ta=(e,n,r)=>{const o=r?.renderBefore??n;let t=o._$litPart$;if(t===void 0){const l=r?.renderBefore??null;o._$litPart$=t=new Vn(n.insertBefore(Un(),l),l,void 0,r??{})}return t._$AI(e),t};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Di=globalThis;class nt extends Cn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const n=super.createRenderRoot();return this.renderOptions.renderBefore??=n.firstChild,n}update(n){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(n),this._$Do=Ta(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return _n}}nt._$litElement$=!0,nt.finalized=!0,Di.litElementHydrateSupport?.({LitElement:nt});const Fa=Di.litElementPolyfillSupport;Fa?.({LitElement:nt});(Di.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt=e=>(n,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,n)}):customElements.define(e,n)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oa={attribute:!0,type:String,converter:Sr,reflect:!1,hasChanged:Ti},Da=(e=Oa,n,r)=>{const{kind:o,metadata:t}=r;let l=globalThis.litPropertyMetadata.get(t);if(l===void 0&&globalThis.litPropertyMetadata.set(t,l=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),l.set(r.name,e),o==="accessor"){const{name:c}=r;return{set(f){const g=n.get.call(this);n.set.call(this,f),this.requestUpdate(c,g,e,!0,f)},init(f){return f!==void 0&&this.C(c,void 0,e,f),f}}}if(o==="setter"){const{name:c}=r;return function(f){const g=this[c];n.call(this,f),this.requestUpdate(c,g,e,!0,f)}}throw Error("Unsupported decorator location: "+o)};function Kt(e){return(n,r)=>typeof r=="object"?Da(e,n,r):((o,t,l)=>{const c=t.hasOwnProperty(l);return t.constructor.createProperty(l,o),c?Object.getOwnPropertyDescriptor(t,l):void 0})(e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ne(e){return Kt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ra=(e,n,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof n!="object"&&Object.defineProperty(e,n,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Or(e,n){return(r,o,t)=>{const l=c=>c.renderRoot?.querySelector(e)??null;return Ra(r,o,{get(){return l(this)}})}}var za=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ia(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kr={exports:{}},Ba=kr.exports,Po;function La(){return Po||(Po=1,(function(e,n){(function(r,o){e.exports=o()})(Ba,function(){var r=function(i,s){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,u){a.__proto__=u}||function(a,u){for(var d in u)Object.prototype.hasOwnProperty.call(u,d)&&(a[d]=u[d])})(i,s)},o=function(){return(o=Object.assign||function(i){for(var s,a=1,u=arguments.length;a<u;a++)for(var d in s=arguments[a])Object.prototype.hasOwnProperty.call(s,d)&&(i[d]=s[d]);return i}).apply(this,arguments)};function t(i,s,a){for(var u,d=0,h=s.length;d<h;d++)!u&&d in s||((u=u||Array.prototype.slice.call(s,0,d))[d]=s[d]);return i.concat(u||Array.prototype.slice.call(s))}var l=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:za,c=Object.keys,f=Array.isArray;function g(i,s){return typeof s!="object"||c(s).forEach(function(a){i[a]=s[a]}),i}typeof Promise>"u"||l.Promise||(l.Promise=Promise);var T=Object.getPrototypeOf,F={}.hasOwnProperty;function R(i,s){return F.call(i,s)}function j(i,s){typeof s=="function"&&(s=s(T(i))),(typeof Reflect>"u"?c:Reflect.ownKeys)(s).forEach(function(a){Z(i,a,s[a])})}var V=Object.defineProperty;function Z(i,s,a,u){V(i,s,g(a&&R(a,"get")&&typeof a.get=="function"?{get:a.get,set:a.set,configurable:!0}:{value:a,configurable:!0,writable:!0},u))}function le(i){return{from:function(s){return i.prototype=Object.create(s.prototype),Z(i.prototype,"constructor",i),{extend:j.bind(null,i.prototype)}}}}var Je=Object.getOwnPropertyDescriptor,Ne=[].slice;function gt(i,s,a){return Ne.call(i,s,a)}function Yt(i,s){return s(i)}function sn(i){if(!i)throw new Error("Assertion Failed")}function Tn(i){l.setImmediate?setImmediate(i):setTimeout(i,0)}function Ct(i,s){if(typeof s=="string"&&R(i,s))return i[s];if(!s)return i;if(typeof s!="string"){for(var a=[],u=0,d=s.length;u<d;++u){var h=Ct(i,s[u]);a.push(h)}return a}var m=s.indexOf(".");if(m!==-1){var y=i[s.substr(0,m)];return y==null?void 0:Ct(y,s.substr(m+1))}}function it(i,s,a){if(i&&s!==void 0&&!("isFrozen"in Object&&Object.isFrozen(i)))if(typeof s!="string"&&"length"in s){sn(typeof a!="string"&&"length"in a);for(var u=0,d=s.length;u<d;++u)it(i,s[u],a[u])}else{var h,m,y=s.indexOf(".");y!==-1?(h=s.substr(0,y),(m=s.substr(y+1))===""?a===void 0?f(i)&&!isNaN(parseInt(h))?i.splice(h,1):delete i[h]:i[h]=a:it(y=!(y=i[h])||!R(i,h)?i[h]={}:y,m,a)):a===void 0?f(i)&&!isNaN(parseInt(s))?i.splice(s,1):delete i[s]:i[s]=a}}function Mt(i){var s,a={};for(s in i)R(i,s)&&(a[s]=i[s]);return a}var Qn=[].concat;function yn(i){return Qn.apply([],i)}var Ut="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(yn([8,16,32,64].map(function(i){return["Int","Uint","Float"].map(function(s){return s+i+"Array"})}))).filter(function(i){return l[i]}),p=new Set(Ut.map(function(i){return l[i]})),w=null;function D(i){return w=new WeakMap,i=(function s(a){if(!a||typeof a!="object")return a;var u=w.get(a);if(u)return u;if(f(a)){u=[],w.set(a,u);for(var d=0,h=a.length;d<h;++d)u.push(s(a[d]))}else if(p.has(a.constructor))u=a;else{var m,y=T(a);for(m in u=y===Object.prototype?{}:Object.create(y),w.set(a,u),a)R(a,m)&&(u[m]=s(a[m]))}return u})(i),w=null,i}var b={}.toString;function x(i){return b.call(i).slice(8,-1)}var ie=typeof Symbol<"u"?Symbol.iterator:"@@iterator",ae=typeof ie=="symbol"?function(i){var s;return i!=null&&(s=i[ie])&&s.apply(i)}:function(){return null};function M(i,s){return s=i.indexOf(s),0<=s&&i.splice(s,1),0<=s}var U={};function ze(i){var s,a,u,d;if(arguments.length===1){if(f(i))return i.slice();if(this===U&&typeof i=="string")return[i];if(d=ae(i)){for(a=[];!(u=d.next()).done;)a.push(u.value);return a}if(i==null)return[i];if(typeof(s=i.length)!="number")return[i];for(a=new Array(s);s--;)a[s]=i[s];return a}for(s=arguments.length,a=new Array(s);s--;)a[s]=arguments[s];return a}var Xe=typeof Symbol<"u"?function(i){return i[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},be=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],kt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(be),Dt={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Te(i,s){this.name=i,this.message=s}function Se(i,s){return i+". Errors: "+Object.keys(s).map(function(a){return s[a].toString()}).filter(function(a,u,d){return d.indexOf(a)===u}).join(`
`)}function me(i,s,a,u){this.failures=s,this.failedKeys=u,this.successCount=a,this.message=Se(i,s)}function xe(i,s){this.name="BulkError",this.failures=Object.keys(s).map(function(a){return s[a]}),this.failuresByPos=s,this.message=Se(i,this.failures)}le(Te).from(Error).extend({toString:function(){return this.name+": "+this.message}}),le(me).from(Te),le(xe).from(Te);var Ie=kt.reduce(function(i,s){return i[s]=s+"Error",i},{}),ve=Te,G=kt.reduce(function(i,s){var a=s+"Error";function u(d,h){this.name=a,d?typeof d=="string"?(this.message="".concat(d).concat(h?`
 `+h:""),this.inner=h||null):typeof d=="object"&&(this.message="".concat(d.name," ").concat(d.message),this.inner=d):(this.message=Dt[s]||a,this.inner=null)}return le(u).from(ve),i[s]=u,i},{});G.Syntax=SyntaxError,G.Type=TypeError,G.Range=RangeError;var Be=be.reduce(function(i,s){return i[s+"Error"]=G[s],i},{}),Pe=kt.reduce(function(i,s){return["Syntax","Type","Range"].indexOf(s)===-1&&(i[s+"Error"]=G[s]),i},{});function se(){}function fe(i){return i}function bt(i,s){return i==null||i===fe?s:function(a){return s(i(a))}}function re(i,s){return function(){i.apply(this,arguments),s.apply(this,arguments)}}function Le(i,s){return i===se?s:function(){var a=i.apply(this,arguments);a!==void 0&&(arguments[0]=a);var u=this.onsuccess,d=this.onerror;this.onsuccess=null,this.onerror=null;var h=s.apply(this,arguments);return u&&(this.onsuccess=this.onsuccess?re(u,this.onsuccess):u),d&&(this.onerror=this.onerror?re(d,this.onerror):d),h!==void 0?h:a}}function Xt(i,s){return i===se?s:function(){i.apply(this,arguments);var a=this.onsuccess,u=this.onerror;this.onsuccess=this.onerror=null,s.apply(this,arguments),a&&(this.onsuccess=this.onsuccess?re(a,this.onsuccess):a),u&&(this.onerror=this.onerror?re(u,this.onerror):u)}}function Pt(i,s){return i===se?s:function(a){var u=i.apply(this,arguments);g(a,u);var d=this.onsuccess,h=this.onerror;return this.onsuccess=null,this.onerror=null,a=s.apply(this,arguments),d&&(this.onsuccess=this.onsuccess?re(d,this.onsuccess):d),h&&(this.onerror=this.onerror?re(h,this.onerror):h),u===void 0?a===void 0?void 0:a:g(u,a)}}function qe(i,s){return i===se?s:function(){return s.apply(this,arguments)!==!1&&i.apply(this,arguments)}}function yt(i,s){return i===se?s:function(){var a=i.apply(this,arguments);if(a&&typeof a.then=="function"){for(var u=this,d=arguments.length,h=new Array(d);d--;)h[d]=arguments[d];return a.then(function(){return s.apply(u,h)})}return s.apply(this,arguments)}}Pe.ModifyError=me,Pe.DexieError=Te,Pe.BulkError=xe;var Ce=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Fe(i){Ce=i}var dt={},We=100,Ut=typeof Promise>"u"?[]:(function(){var i=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[i,T(i),i];var s=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[s,T(s),i]})(),be=Ut[0],kt=Ut[1],Ut=Ut[2],kt=kt&&kt.then,ge=be&&be.constructor,vt=!!Ut,Oe=function(i,s){Ke.push([i,s]),Ge&&(queueMicrotask(ce),Ge=!1)},ot=!0,Ge=!0,He=[],Ae=[],oe=fe,Me={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:se,pgp:!1,env:{},finalize:se},H=Me,Ke=[],Ze=0,ht=[];function K(i){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var s=this._PSD=H;if(typeof i!="function"){if(i!==dt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&Qe(this,this._value))}this._state=null,this._value=null,++s.ref,(function a(u,d){try{d(function(h){if(u._state===null){if(h===u)throw new TypeError("A promise cannot be resolved with itself.");var m=u._lib&&ke();h&&typeof h.then=="function"?a(u,function(y,$){h instanceof K?h._then(y,$):h.then(y,$)}):(u._state=!0,u._value=h,Gt(u)),m&&De()}},Qe.bind(null,u))}catch(h){Qe(u,h)}})(this,i)}var Rt={get:function(){var i=H,s=er;function a(u,d){var h=this,m=!i.global&&(i!==H||s!==er),y=m&&!Jt(),$=new K(function(C,S){ee(h,new Nt(Ni(u,i,m,y),Ni(d,i,m,y),C,S,i))});return this._consoleTask&&($._consoleTask=this._consoleTask),$}return a.prototype=dt,a},set:function(i){Z(this,"then",i&&i.prototype===dt?Rt:{get:function(){return i},set:Rt.set})}};function Nt(i,s,a,u,d){this.onFulfilled=typeof i=="function"?i:null,this.onRejected=typeof s=="function"?s:null,this.resolve=a,this.reject=u,this.psd=d}function Qe(i,s){var a,u;Ae.push(s),i._state===null&&(a=i._lib&&ke(),s=oe(s),i._state=!1,i._value=s,u=i,He.some(function(d){return d._value===u._value})||He.push(u),Gt(i),a&&De())}function Gt(i){var s=i._listeners;i._listeners=[];for(var a=0,u=s.length;a<u;++a)ee(i,s[a]);var d=i._PSD;--d.ref||d.finalize(),Ze===0&&(++Ze,Oe(function(){--Ze==0&&$e()},[]))}function ee(i,s){if(i._state!==null){var a=i._state?s.onFulfilled:s.onRejected;if(a===null)return(i._state?s.resolve:s.reject)(i._value);++s.psd.ref,++Ze,Oe(we,[a,i,s])}else i._listeners.push(s)}function we(i,s,a){try{var u,d=s._value;!s._state&&Ae.length&&(Ae=[]),u=Ce&&s._consoleTask?s._consoleTask.run(function(){return i(d)}):i(d),s._state||Ae.indexOf(d)!==-1||(function(h){for(var m=He.length;m;)if(He[--m]._value===h._value)return He.splice(m,1)})(s),a.resolve(u)}catch(h){a.reject(h)}finally{--Ze==0&&$e(),--a.psd.ref||a.psd.finalize()}}function ce(){an(Me,function(){ke()&&De()})}function ke(){var i=ot;return Ge=ot=!1,i}function De(){var i,s,a;do for(;0<Ke.length;)for(i=Ke,Ke=[],a=i.length,s=0;s<a;++s){var u=i[s];u[0].apply(null,u[1])}while(0<Ke.length);Ge=ot=!0}function $e(){var i=He;He=[],i.forEach(function(u){u._PSD.onunhandled.call(null,u._value,u)});for(var s=ht.slice(0),a=s.length;a;)s[--a]()}function At(i){return new K(dt,!1,i)}function je(i,s){var a=H;return function(){var u=ke(),d=H;try{return Zt(a,!0),i.apply(this,arguments)}catch(h){s&&s(h)}finally{Zt(d,!1),u&&De()}}}j(K.prototype,{then:Rt,_then:function(i,s){ee(this,new Nt(null,null,i,s,H))},catch:function(i){if(arguments.length===1)return this.then(null,i);var s=i,a=arguments[1];return typeof s=="function"?this.then(null,function(u){return(u instanceof s?a:At)(u)}):this.then(null,function(u){return(u&&u.name===s?a:At)(u)})},finally:function(i){return this.then(function(s){return K.resolve(i()).then(function(){return s})},function(s){return K.resolve(i()).then(function(){return At(s)})})},timeout:function(i,s){var a=this;return i<1/0?new K(function(u,d){var h=setTimeout(function(){return d(new G.Timeout(s))},i);a.then(u,d).finally(clearTimeout.bind(null,h))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&Z(K.prototype,Symbol.toStringTag,"Dexie.Promise"),Me.env=Mi(),j(K,{all:function(){var i=ze.apply(null,arguments).map(tr);return new K(function(s,a){i.length===0&&s([]);var u=i.length;i.forEach(function(d,h){return K.resolve(d).then(function(m){i[h]=m,--u||s(i)},a)})})},resolve:function(i){return i instanceof K?i:i&&typeof i.then=="function"?new K(function(s,a){i.then(s,a)}):new K(dt,!0,i)},reject:At,race:function(){var i=ze.apply(null,arguments).map(tr);return new K(function(s,a){i.map(function(u){return K.resolve(u).then(s,a)})})},PSD:{get:function(){return H},set:function(i){return H=i}},totalEchoes:{get:function(){return er}},newPSD:Qt,usePSD:an,scheduler:{get:function(){return Oe},set:function(i){Oe=i}},rejectionMapper:{get:function(){return oe},set:function(i){oe=i}},follow:function(i,s){return new K(function(a,u){return Qt(function(d,h){var m=H;m.unhandleds=[],m.onunhandled=h,m.finalize=re(function(){var y,$=this;y=function(){$.unhandleds.length===0?d():h($.unhandleds[0])},ht.push(function C(){y(),ht.splice(ht.indexOf(C),1)}),++Ze,Oe(function(){--Ze==0&&$e()},[])},m.finalize),i()},s,a,u)})}}),ge&&(ge.allSettled&&Z(K,"allSettled",function(){var i=ze.apply(null,arguments).map(tr);return new K(function(s){i.length===0&&s([]);var a=i.length,u=new Array(a);i.forEach(function(d,h){return K.resolve(d).then(function(m){return u[h]={status:"fulfilled",value:m}},function(m){return u[h]={status:"rejected",reason:m}}).then(function(){return--a||s(u)})})})}),ge.any&&typeof AggregateError<"u"&&Z(K,"any",function(){var i=ze.apply(null,arguments).map(tr);return new K(function(s,a){i.length===0&&a(new AggregateError([]));var u=i.length,d=new Array(u);i.forEach(function(h,m){return K.resolve(h).then(function(y){return s(y)},function(y){d[m]=y,--u||a(new AggregateError(d))})})})}),ge.withResolvers&&(K.withResolvers=ge.withResolvers));var et={awaits:0,echoes:0,id:0},Ls=0,Jn=[],Zn=0,er=0,Ms=0;function Qt(i,s,a,u){var d=H,h=Object.create(d);return h.parent=d,h.ref=0,h.global=!1,h.id=++Ms,Me.env,h.env=vt?{Promise:K,PromiseProp:{value:K,configurable:!0,writable:!0},all:K.all,race:K.race,allSettled:K.allSettled,any:K.any,resolve:K.resolve,reject:K.reject}:{},s&&g(h,s),++d.ref,h.finalize=function(){--this.parent.ref||this.parent.finalize()},u=an(h,i,a,u),h.ref===0&&h.finalize(),u}function vn(){return et.id||(et.id=++Ls),++et.awaits,et.echoes+=We,et.id}function Jt(){return!!et.awaits&&(--et.awaits==0&&(et.id=0),et.echoes=et.awaits*We,!0)}function tr(i){return et.echoes&&i&&i.constructor===ge?(vn(),i.then(function(s){return Jt(),s},function(s){return Jt(),Ve(s)})):i}function Ns(){var i=Jn[Jn.length-1];Jn.pop(),Zt(i,!1)}function Zt(i,s){var a,u=H;(s?!et.echoes||Zn++&&i===H:!Zn||--Zn&&i===H)||queueMicrotask(s?function(d){++er,et.echoes&&--et.echoes!=0||(et.echoes=et.awaits=et.id=0),Jn.push(H),Zt(d,!0)}.bind(null,i):Ns),i!==H&&(H=i,u===Me&&(Me.env=Mi()),vt&&(a=Me.env.Promise,s=i.env,(u.global||i.global)&&(Object.defineProperty(l,"Promise",s.PromiseProp),a.all=s.all,a.race=s.race,a.resolve=s.resolve,a.reject=s.reject,s.allSettled&&(a.allSettled=s.allSettled),s.any&&(a.any=s.any))))}function Mi(){var i=l.Promise;return vt?{Promise:i,PromiseProp:Object.getOwnPropertyDescriptor(l,"Promise"),all:i.all,race:i.race,allSettled:i.allSettled,any:i.any,resolve:i.resolve,reject:i.reject}:{}}function an(i,s,a,u,d){var h=H;try{return Zt(i,!0),s(a,u,d)}finally{Zt(h,!1)}}function Ni(i,s,a,u){return typeof i!="function"?i:function(){var d=H;a&&vn(),Zt(s,!0);try{return i.apply(this,arguments)}finally{Zt(d,!1),u&&queueMicrotask(Jt)}}}function qr(i){Promise===ge&&et.echoes===0?Zn===0?i():enqueueNativeMicroTask(i):setTimeout(i,0)}(""+kt).indexOf("[native code]")===-1&&(vn=Jt=se);var Ve=K.reject,ln="￿",qt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",qi="String expected.",wn=[],nr="__dbnames",Ur="readonly",Wr="readwrite";function cn(i,s){return i?s?function(){return i.apply(this,arguments)&&s.apply(this,arguments)}:i:s}var Ui={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function rr(i){return typeof i!="string"||/\./.test(i)?function(s){return s}:function(s){return s[i]===void 0&&i in s&&delete(s=D(s))[i],s}}function Wi(){throw G.Type()}function ye(i,s){try{var a=Hi(i),u=Hi(s);if(a!==u)return a==="Array"?1:u==="Array"?-1:a==="binary"?1:u==="binary"?-1:a==="string"?1:u==="string"?-1:a==="Date"?1:u!=="Date"?NaN:-1;switch(a){case"number":case"Date":case"string":return s<i?1:i<s?-1:0;case"binary":return(function(d,h){for(var m=d.length,y=h.length,$=m<y?m:y,C=0;C<$;++C)if(d[C]!==h[C])return d[C]<h[C]?-1:1;return m===y?0:m<y?-1:1})(Ki(i),Ki(s));case"Array":return(function(d,h){for(var m=d.length,y=h.length,$=m<y?m:y,C=0;C<$;++C){var S=ye(d[C],h[C]);if(S!==0)return S}return m===y?0:m<y?-1:1})(i,s)}}catch{}return NaN}function Hi(i){var s=typeof i;return s!="object"?s:ArrayBuffer.isView(i)?"binary":(i=x(i),i==="ArrayBuffer"?"binary":i)}function Ki(i){return i instanceof Uint8Array?i:ArrayBuffer.isView(i)?new Uint8Array(i.buffer,i.byteOffset,i.byteLength):new Uint8Array(i)}var Vi=(Re.prototype._trans=function(i,s,a){var u=this._tx||H.trans,d=this.name,h=Ce&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(i==="readonly"?"read":"write"," ").concat(this.name));function m(C,S,v){if(!v.schema[d])throw new G.NotFound("Table "+d+" not part of transaction");return s(v.idbtrans,v)}var y=ke();try{var $=u&&u.db._novip===this.db._novip?u===H.trans?u._promise(i,m,a):Qt(function(){return u._promise(i,m,a)},{trans:u,transless:H.transless||H}):(function C(S,v,A,E){if(S.idbdb&&(S._state.openComplete||H.letThrough||S._vip)){var _=S._createTransaction(v,A,S._dbSchema);try{_.create(),S._state.PR1398_maxLoop=3}catch(P){return P.name===Ie.InvalidState&&S.isOpen()&&0<--S._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),S.close({disableAutoOpen:!1}),S.open().then(function(){return C(S,v,A,E)})):Ve(P)}return _._promise(v,function(P,k){return Qt(function(){return H.trans=_,E(P,k,_)})}).then(function(P){if(v==="readwrite")try{_.idbtrans.commit()}catch{}return v==="readonly"?P:_._completion.then(function(){return P})})}if(S._state.openComplete)return Ve(new G.DatabaseClosed(S._state.dbOpenError));if(!S._state.isBeingOpened){if(!S._state.autoOpen)return Ve(new G.DatabaseClosed);S.open().catch(se)}return S._state.dbReadyPromise.then(function(){return C(S,v,A,E)})})(this.db,i,[this.name],m);return h&&($._consoleTask=h,$=$.catch(function(C){return console.trace(C),Ve(C)})),$}finally{y&&De()}},Re.prototype.get=function(i,s){var a=this;return i&&i.constructor===Object?this.where(i).first(s):i==null?Ve(new G.Type("Invalid argument to Table.get()")):this._trans("readonly",function(u){return a.core.get({trans:u,key:i}).then(function(d){return a.hook.reading.fire(d)})}).then(s)},Re.prototype.where=function(i){if(typeof i=="string")return new this.db.WhereClause(this,i);if(f(i))return new this.db.WhereClause(this,"[".concat(i.join("+"),"]"));var s=c(i);if(s.length===1)return this.where(s[0]).equals(i[s[0]]);var a=this.schema.indexes.concat(this.schema.primKey).filter(function(y){if(y.compound&&s.every(function(C){return 0<=y.keyPath.indexOf(C)})){for(var $=0;$<s.length;++$)if(s.indexOf(y.keyPath[$])===-1)return!1;return!0}return!1}).sort(function(y,$){return y.keyPath.length-$.keyPath.length})[0];if(a&&this.db._maxKey!==ln){var h=a.keyPath.slice(0,s.length);return this.where(h).equals(h.map(function($){return i[$]}))}!a&&Ce&&console.warn("The query ".concat(JSON.stringify(i)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(s.join("+"),"]"));var u=this.schema.idxByName;function d(y,$){return ye(y,$)===0}var m=s.reduce(function(v,$){var C=v[0],S=v[1],v=u[$],A=i[$];return[C||v,C||!v?cn(S,v&&v.multi?function(E){return E=Ct(E,$),f(E)&&E.some(function(_){return d(A,_)})}:function(E){return d(A,Ct(E,$))}):S]},[null,null]),h=m[0],m=m[1];return h?this.where(h.name).equals(i[h.keyPath]).filter(m):a?this.filter(m):this.where(s).equals("")},Re.prototype.filter=function(i){return this.toCollection().and(i)},Re.prototype.count=function(i){return this.toCollection().count(i)},Re.prototype.offset=function(i){return this.toCollection().offset(i)},Re.prototype.limit=function(i){return this.toCollection().limit(i)},Re.prototype.each=function(i){return this.toCollection().each(i)},Re.prototype.toArray=function(i){return this.toCollection().toArray(i)},Re.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Re.prototype.orderBy=function(i){return new this.db.Collection(new this.db.WhereClause(this,f(i)?"[".concat(i.join("+"),"]"):i))},Re.prototype.reverse=function(){return this.toCollection().reverse()},Re.prototype.mapToClass=function(i){var s,a=this.db,u=this.name;function d(){return s!==null&&s.apply(this,arguments)||this}(this.schema.mappedClass=i).prototype instanceof Wi&&((function($,C){if(typeof C!="function"&&C!==null)throw new TypeError("Class extends value "+String(C)+" is not a constructor or null");function S(){this.constructor=$}r($,C),$.prototype=C===null?Object.create(C):(S.prototype=C.prototype,new S)})(d,s=i),Object.defineProperty(d.prototype,"db",{get:function(){return a},enumerable:!1,configurable:!0}),d.prototype.table=function(){return u},i=d);for(var h=new Set,m=i.prototype;m;m=T(m))Object.getOwnPropertyNames(m).forEach(function($){return h.add($)});function y($){if(!$)return $;var C,S=Object.create(i.prototype);for(C in $)if(!h.has(C))try{S[C]=$[C]}catch{}return S}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=y,this.hook("reading",y),i},Re.prototype.defineClass=function(){return this.mapToClass(function(i){g(this,i)})},Re.prototype.add=function(i,s){var a=this,u=this.schema.primKey,d=u.auto,h=u.keyPath,m=i;return h&&d&&(m=rr(h)(i)),this._trans("readwrite",function(y){return a.core.mutate({trans:y,type:"add",keys:s!=null?[s]:null,values:[m]})}).then(function(y){return y.numFailures?K.reject(y.failures[0]):y.lastResult}).then(function(y){if(h)try{it(i,h,y)}catch{}return y})},Re.prototype.update=function(i,s){return typeof i!="object"||f(i)?this.where(":id").equals(i).modify(s):(i=Ct(i,this.schema.primKey.keyPath),i===void 0?Ve(new G.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(i).modify(s))},Re.prototype.put=function(i,s){var a=this,u=this.schema.primKey,d=u.auto,h=u.keyPath,m=i;return h&&d&&(m=rr(h)(i)),this._trans("readwrite",function(y){return a.core.mutate({trans:y,type:"put",values:[m],keys:s!=null?[s]:null})}).then(function(y){return y.numFailures?K.reject(y.failures[0]):y.lastResult}).then(function(y){if(h)try{it(i,h,y)}catch{}return y})},Re.prototype.delete=function(i){var s=this;return this._trans("readwrite",function(a){return s.core.mutate({trans:a,type:"delete",keys:[i]})}).then(function(a){return a.numFailures?K.reject(a.failures[0]):void 0})},Re.prototype.clear=function(){var i=this;return this._trans("readwrite",function(s){return i.core.mutate({trans:s,type:"deleteRange",range:Ui})}).then(function(s){return s.numFailures?K.reject(s.failures[0]):void 0})},Re.prototype.bulkGet=function(i){var s=this;return this._trans("readonly",function(a){return s.core.getMany({keys:i,trans:a}).then(function(u){return u.map(function(d){return s.hook.reading.fire(d)})})})},Re.prototype.bulkAdd=function(i,s,a){var u=this,d=Array.isArray(s)?s:void 0,h=(a=a||(d?void 0:s))?a.allKeys:void 0;return this._trans("readwrite",function(m){var C=u.schema.primKey,y=C.auto,C=C.keyPath;if(C&&d)throw new G.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(d&&d.length!==i.length)throw new G.InvalidArgument("Arguments objects and keys must have the same length");var $=i.length,C=C&&y?i.map(rr(C)):i;return u.core.mutate({trans:m,type:"add",keys:d,values:C,wantResults:h}).then(function(_){var v=_.numFailures,A=_.results,E=_.lastResult,_=_.failures;if(v===0)return h?A:E;throw new xe("".concat(u.name,".bulkAdd(): ").concat(v," of ").concat($," operations failed"),_)})})},Re.prototype.bulkPut=function(i,s,a){var u=this,d=Array.isArray(s)?s:void 0,h=(a=a||(d?void 0:s))?a.allKeys:void 0;return this._trans("readwrite",function(m){var C=u.schema.primKey,y=C.auto,C=C.keyPath;if(C&&d)throw new G.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(d&&d.length!==i.length)throw new G.InvalidArgument("Arguments objects and keys must have the same length");var $=i.length,C=C&&y?i.map(rr(C)):i;return u.core.mutate({trans:m,type:"put",keys:d,values:C,wantResults:h}).then(function(_){var v=_.numFailures,A=_.results,E=_.lastResult,_=_.failures;if(v===0)return h?A:E;throw new xe("".concat(u.name,".bulkPut(): ").concat(v," of ").concat($," operations failed"),_)})})},Re.prototype.bulkUpdate=function(i){var s=this,a=this.core,u=i.map(function(m){return m.key}),d=i.map(function(m){return m.changes}),h=[];return this._trans("readwrite",function(m){return a.getMany({trans:m,keys:u,cache:"clone"}).then(function(y){var $=[],C=[];i.forEach(function(v,A){var E=v.key,_=v.changes,P=y[A];if(P){for(var k=0,z=Object.keys(_);k<z.length;k++){var I=z[k],B=_[I];if(I===s.schema.primKey.keyPath){if(ye(B,E)!==0)throw new G.Constraint("Cannot update primary key in bulkUpdate()")}else it(P,I,B)}h.push(A),$.push(E),C.push(P)}});var S=$.length;return a.mutate({trans:m,type:"put",keys:$,values:C,updates:{keys:u,changeSpecs:d}}).then(function(v){var A=v.numFailures,E=v.failures;if(A===0)return S;for(var _=0,P=Object.keys(E);_<P.length;_++){var k,z=P[_],I=h[Number(z)];I!=null&&(k=E[z],delete E[z],E[I]=k)}throw new xe("".concat(s.name,".bulkUpdate(): ").concat(A," of ").concat(S," operations failed"),E)})})})},Re.prototype.bulkDelete=function(i){var s=this,a=i.length;return this._trans("readwrite",function(u){return s.core.mutate({trans:u,type:"delete",keys:i})}).then(function(m){var d=m.numFailures,h=m.lastResult,m=m.failures;if(d===0)return h;throw new xe("".concat(s.name,".bulkDelete(): ").concat(d," of ").concat(a," operations failed"),m)})},Re);function Re(){}function Fn(i){function s(m,y){if(y){for(var $=arguments.length,C=new Array($-1);--$;)C[$-1]=arguments[$];return a[m].subscribe.apply(null,C),i}if(typeof m=="string")return a[m]}var a={};s.addEventType=h;for(var u=1,d=arguments.length;u<d;++u)h(arguments[u]);return s;function h(m,y,$){if(typeof m!="object"){var C;y=y||qe;var S={subscribers:[],fire:$=$||se,subscribe:function(v){S.subscribers.indexOf(v)===-1&&(S.subscribers.push(v),S.fire=y(S.fire,v))},unsubscribe:function(v){S.subscribers=S.subscribers.filter(function(A){return A!==v}),S.fire=S.subscribers.reduce(y,$)}};return a[m]=s[m]=S}c(C=m).forEach(function(v){var A=C[v];if(f(A))h(v,C[v][0],C[v][1]);else{if(A!=="asap")throw new G.InvalidArgument("Invalid event config");var E=h(v,fe,function(){for(var _=arguments.length,P=new Array(_);_--;)P[_]=arguments[_];E.subscribers.forEach(function(k){Tn(function(){k.apply(null,P)})})})}})}}function On(i,s){return le(s).from({prototype:i}),s}function xn(i,s){return!(i.filter||i.algorithm||i.or)&&(s?i.justLimit:!i.replayFilter)}function Hr(i,s){i.filter=cn(i.filter,s)}function Kr(i,s,a){var u=i.replayFilter;i.replayFilter=u?function(){return cn(u(),s())}:s,i.justLimit=a&&!u}function ir(i,s){if(i.isPrimKey)return s.primaryKey;var a=s.getIndexByKeyPath(i.index);if(!a)throw new G.Schema("KeyPath "+i.index+" on object store "+s.name+" is not indexed");return a}function Yi(i,s,a){var u=ir(i,s.schema);return s.openCursor({trans:a,values:!i.keysOnly,reverse:i.dir==="prev",unique:!!i.unique,query:{index:u,range:i.range}})}function or(i,s,a,u){var d=i.replayFilter?cn(i.filter,i.replayFilter()):i.filter;if(i.or){var h={},m=function(y,$,C){var S,v;d&&!d($,C,function(A){return $.stop(A)},function(A){return $.fail(A)})||((v=""+(S=$.primaryKey))=="[object ArrayBuffer]"&&(v=""+new Uint8Array(S)),R(h,v)||(h[v]=!0,s(y,$,C)))};return Promise.all([i.or._iterate(m,a),Xi(Yi(i,u,a),i.algorithm,m,!i.keysOnly&&i.valueMapper)])}return Xi(Yi(i,u,a),cn(i.algorithm,d),s,!i.keysOnly&&i.valueMapper)}function Xi(i,s,a,u){var d=je(u?function(h,m,y){return a(u(h),m,y)}:a);return i.then(function(h){if(h)return h.start(function(){var m=function(){return h.continue()};s&&!s(h,function(y){return m=y},function(y){h.stop(y),m=se},function(y){h.fail(y),m=se})||d(h.value,h,function(y){return m=y}),m()})})}var Ut=Symbol(),Dn=(Gi.prototype.execute=function(i){if(this.add!==void 0){var s=this.add;if(f(s))return t(t([],f(i)?i:[],!0),s).sort();if(typeof s=="number")return(Number(i)||0)+s;if(typeof s=="bigint")try{return BigInt(i)+s}catch{return BigInt(0)+s}throw new TypeError("Invalid term ".concat(s))}if(this.remove!==void 0){var a=this.remove;if(f(a))return f(i)?i.filter(function(u){return!a.includes(u)}).sort():[];if(typeof a=="number")return Number(i)-a;if(typeof a=="bigint")try{return BigInt(i)-a}catch{return BigInt(0)-a}throw new TypeError("Invalid subtrahend ".concat(a))}return s=(s=this.replacePrefix)===null||s===void 0?void 0:s[0],s&&typeof i=="string"&&i.startsWith(s)?this.replacePrefix[1]+i.substring(s.length):i},Gi);function Gi(i){Object.assign(this,i)}var qs=(Ee.prototype._read=function(i,s){var a=this._ctx;return a.error?a.table._trans(null,Ve.bind(null,a.error)):a.table._trans("readonly",i).then(s)},Ee.prototype._write=function(i){var s=this._ctx;return s.error?s.table._trans(null,Ve.bind(null,s.error)):s.table._trans("readwrite",i,"locked")},Ee.prototype._addAlgorithm=function(i){var s=this._ctx;s.algorithm=cn(s.algorithm,i)},Ee.prototype._iterate=function(i,s){return or(this._ctx,i,s,this._ctx.table.core)},Ee.prototype.clone=function(i){var s=Object.create(this.constructor.prototype),a=Object.create(this._ctx);return i&&g(a,i),s._ctx=a,s},Ee.prototype.raw=function(){return this._ctx.valueMapper=null,this},Ee.prototype.each=function(i){var s=this._ctx;return this._read(function(a){return or(s,i,a,s.table.core)})},Ee.prototype.count=function(i){var s=this;return this._read(function(a){var u=s._ctx,d=u.table.core;if(xn(u,!0))return d.count({trans:a,query:{index:ir(u,d.schema),range:u.range}}).then(function(m){return Math.min(m,u.limit)});var h=0;return or(u,function(){return++h,!1},a,d).then(function(){return h})}).then(i)},Ee.prototype.sortBy=function(i,s){var a=i.split(".").reverse(),u=a[0],d=a.length-1;function h($,C){return C?h($[a[C]],C-1):$[u]}var m=this._ctx.dir==="next"?1:-1;function y($,C){return ye(h($,d),h(C,d))*m}return this.toArray(function($){return $.sort(y)}).then(s)},Ee.prototype.toArray=function(i){var s=this;return this._read(function(a){var u=s._ctx;if(u.dir==="next"&&xn(u,!0)&&0<u.limit){var d=u.valueMapper,h=ir(u,u.table.core.schema);return u.table.core.query({trans:a,limit:u.limit,values:!0,query:{index:h,range:u.range}}).then(function(y){return y=y.result,d?y.map(d):y})}var m=[];return or(u,function(y){return m.push(y)},a,u.table.core).then(function(){return m})},i)},Ee.prototype.offset=function(i){var s=this._ctx;return i<=0||(s.offset+=i,xn(s)?Kr(s,function(){var a=i;return function(u,d){return a===0||(a===1?--a:d(function(){u.advance(a),a=0}),!1)}}):Kr(s,function(){var a=i;return function(){return--a<0}})),this},Ee.prototype.limit=function(i){return this._ctx.limit=Math.min(this._ctx.limit,i),Kr(this._ctx,function(){var s=i;return function(a,u,d){return--s<=0&&u(d),0<=s}},!0),this},Ee.prototype.until=function(i,s){return Hr(this._ctx,function(a,u,d){return!i(a.value)||(u(d),s)}),this},Ee.prototype.first=function(i){return this.limit(1).toArray(function(s){return s[0]}).then(i)},Ee.prototype.last=function(i){return this.reverse().first(i)},Ee.prototype.filter=function(i){var s;return Hr(this._ctx,function(a){return i(a.value)}),(s=this._ctx).isMatch=cn(s.isMatch,i),this},Ee.prototype.and=function(i){return this.filter(i)},Ee.prototype.or=function(i){return new this.db.WhereClause(this._ctx.table,i,this)},Ee.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Ee.prototype.desc=function(){return this.reverse()},Ee.prototype.eachKey=function(i){var s=this._ctx;return s.keysOnly=!s.isMatch,this.each(function(a,u){i(u.key,u)})},Ee.prototype.eachUniqueKey=function(i){return this._ctx.unique="unique",this.eachKey(i)},Ee.prototype.eachPrimaryKey=function(i){var s=this._ctx;return s.keysOnly=!s.isMatch,this.each(function(a,u){i(u.primaryKey,u)})},Ee.prototype.keys=function(i){var s=this._ctx;s.keysOnly=!s.isMatch;var a=[];return this.each(function(u,d){a.push(d.key)}).then(function(){return a}).then(i)},Ee.prototype.primaryKeys=function(i){var s=this._ctx;if(s.dir==="next"&&xn(s,!0)&&0<s.limit)return this._read(function(u){var d=ir(s,s.table.core.schema);return s.table.core.query({trans:u,values:!1,limit:s.limit,query:{index:d,range:s.range}})}).then(function(u){return u.result}).then(i);s.keysOnly=!s.isMatch;var a=[];return this.each(function(u,d){a.push(d.primaryKey)}).then(function(){return a}).then(i)},Ee.prototype.uniqueKeys=function(i){return this._ctx.unique="unique",this.keys(i)},Ee.prototype.firstKey=function(i){return this.limit(1).keys(function(s){return s[0]}).then(i)},Ee.prototype.lastKey=function(i){return this.reverse().firstKey(i)},Ee.prototype.distinct=function(){var i=this._ctx,i=i.index&&i.table.schema.idxByName[i.index];if(!i||!i.multi)return this;var s={};return Hr(this._ctx,function(d){var u=d.primaryKey.toString(),d=R(s,u);return s[u]=!0,!d}),this},Ee.prototype.modify=function(i){var s=this,a=this._ctx;return this._write(function(u){var d,h,m;m=typeof i=="function"?i:(d=c(i),h=d.length,function(k){for(var z=!1,I=0;I<h;++I){var B=d[I],L=i[B],N=Ct(k,B);L instanceof Dn?(it(k,B,L.execute(N)),z=!0):N!==L&&(it(k,B,L),z=!0)}return z});var y=a.table.core,v=y.schema.primaryKey,$=v.outbound,C=v.extractKey,S=200,v=s.db._options.modifyChunkSize;v&&(S=typeof v=="object"?v[y.name]||v["*"]||200:v);function A(k,B){var I=B.failures,B=B.numFailures;_+=k-B;for(var L=0,N=c(I);L<N.length;L++){var X=N[L];E.push(I[X])}}var E=[],_=0,P=[];return s.clone().primaryKeys().then(function(k){function z(B){var L=Math.min(S,k.length-B);return y.getMany({trans:u,keys:k.slice(B,B+L),cache:"immutable"}).then(function(N){for(var X=[],q=[],W=$?[]:null,Q=[],Y=0;Y<L;++Y){var te=N[Y],de={value:D(te),primKey:k[B+Y]};m.call(de,de.value,de)!==!1&&(de.value==null?Q.push(k[B+Y]):$||ye(C(te),C(de.value))===0?(q.push(de.value),$&&W.push(k[B+Y])):(Q.push(k[B+Y]),X.push(de.value)))}return Promise.resolve(0<X.length&&y.mutate({trans:u,type:"add",values:X}).then(function(he){for(var pe in he.failures)Q.splice(parseInt(pe),1);A(X.length,he)})).then(function(){return(0<q.length||I&&typeof i=="object")&&y.mutate({trans:u,type:"put",keys:W,values:q,criteria:I,changeSpec:typeof i!="function"&&i,isAdditionalChunk:0<B}).then(function(he){return A(q.length,he)})}).then(function(){return(0<Q.length||I&&i===Vr)&&y.mutate({trans:u,type:"delete",keys:Q,criteria:I,isAdditionalChunk:0<B}).then(function(he){return A(Q.length,he)})}).then(function(){return k.length>B+L&&z(B+S)})})}var I=xn(a)&&a.limit===1/0&&(typeof i!="function"||i===Vr)&&{index:a.index,range:a.range};return z(0).then(function(){if(0<E.length)throw new me("Error modifying one or more objects",E,_,P);return k.length})})})},Ee.prototype.delete=function(){var i=this._ctx,s=i.range;return xn(i)&&(i.isPrimKey||s.type===3)?this._write(function(a){var u=i.table.core.schema.primaryKey,d=s;return i.table.core.count({trans:a,query:{index:u,range:d}}).then(function(h){return i.table.core.mutate({trans:a,type:"deleteRange",range:d}).then(function(m){var y=m.failures;if(m.lastResult,m.results,m=m.numFailures,m)throw new me("Could not delete some values",Object.keys(y).map(function($){return y[$]}),h-m);return h-m})})}):this.modify(Vr)},Ee);function Ee(){}var Vr=function(i,s){return s.value=null};function Us(i,s){return i<s?-1:i===s?0:1}function Ws(i,s){return s<i?-1:i===s?0:1}function wt(i,s,a){return i=i instanceof Ji?new i.Collection(i):i,i._ctx.error=new(a||TypeError)(s),i}function $n(i){return new i.Collection(i,function(){return Qi("")}).limit(0)}function sr(i,s,a,u){var d,h,m,y,$,C,S,v=a.length;if(!a.every(function(_){return typeof _=="string"}))return wt(i,qi);function A(_){d=_==="next"?function(k){return k.toUpperCase()}:function(k){return k.toLowerCase()},h=_==="next"?function(k){return k.toLowerCase()}:function(k){return k.toUpperCase()},m=_==="next"?Us:Ws;var P=a.map(function(k){return{lower:h(k),upper:d(k)}}).sort(function(k,z){return m(k.lower,z.lower)});y=P.map(function(k){return k.upper}),$=P.map(function(k){return k.lower}),S=(C=_)==="next"?"":u}A("next"),i=new i.Collection(i,function(){return en(y[0],$[v-1]+u)}),i._ondirectionchange=function(_){A(_)};var E=0;return i._addAlgorithm(function(_,P,k){var z=_.key;if(typeof z!="string")return!1;var I=h(z);if(s(I,$,E))return!0;for(var B=null,L=E;L<v;++L){var N=(function(X,q,W,Q,Y,te){for(var de=Math.min(X.length,Q.length),he=-1,pe=0;pe<de;++pe){var xt=q[pe];if(xt!==Q[pe])return Y(X[pe],W[pe])<0?X.substr(0,pe)+W[pe]+W.substr(pe+1):Y(X[pe],Q[pe])<0?X.substr(0,pe)+Q[pe]+W.substr(pe+1):0<=he?X.substr(0,he)+q[he]+W.substr(he+1):null;Y(X[pe],xt)<0&&(he=pe)}return de<Q.length&&te==="next"?X+W.substr(X.length):de<X.length&&te==="prev"?X.substr(0,W.length):he<0?null:X.substr(0,he)+Q[he]+W.substr(he+1)})(z,I,y[L],$[L],m,C);N===null&&B===null?E=L+1:(B===null||0<m(B,N))&&(B=N)}return P(B!==null?function(){_.continue(B+S)}:k),!1}),i}function en(i,s,a,u){return{type:2,lower:i,upper:s,lowerOpen:a,upperOpen:u}}function Qi(i){return{type:1,lower:i,upper:i}}var Ji=(Object.defineProperty(tt.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),tt.prototype.between=function(i,s,a,u){a=a!==!1,u=u===!0;try{return 0<this._cmp(i,s)||this._cmp(i,s)===0&&(a||u)&&(!a||!u)?$n(this):new this.Collection(this,function(){return en(i,s,!a,!u)})}catch{return wt(this,qt)}},tt.prototype.equals=function(i){return i==null?wt(this,qt):new this.Collection(this,function(){return Qi(i)})},tt.prototype.above=function(i){return i==null?wt(this,qt):new this.Collection(this,function(){return en(i,void 0,!0)})},tt.prototype.aboveOrEqual=function(i){return i==null?wt(this,qt):new this.Collection(this,function(){return en(i,void 0,!1)})},tt.prototype.below=function(i){return i==null?wt(this,qt):new this.Collection(this,function(){return en(void 0,i,!1,!0)})},tt.prototype.belowOrEqual=function(i){return i==null?wt(this,qt):new this.Collection(this,function(){return en(void 0,i)})},tt.prototype.startsWith=function(i){return typeof i!="string"?wt(this,qi):this.between(i,i+ln,!0,!0)},tt.prototype.startsWithIgnoreCase=function(i){return i===""?this.startsWith(i):sr(this,function(s,a){return s.indexOf(a[0])===0},[i],ln)},tt.prototype.equalsIgnoreCase=function(i){return sr(this,function(s,a){return s===a[0]},[i],"")},tt.prototype.anyOfIgnoreCase=function(){var i=ze.apply(U,arguments);return i.length===0?$n(this):sr(this,function(s,a){return a.indexOf(s)!==-1},i,"")},tt.prototype.startsWithAnyOfIgnoreCase=function(){var i=ze.apply(U,arguments);return i.length===0?$n(this):sr(this,function(s,a){return a.some(function(u){return s.indexOf(u)===0})},i,ln)},tt.prototype.anyOf=function(){var i=this,s=ze.apply(U,arguments),a=this._cmp;try{s.sort(a)}catch{return wt(this,qt)}if(s.length===0)return $n(this);var u=new this.Collection(this,function(){return en(s[0],s[s.length-1])});u._ondirectionchange=function(h){a=h==="next"?i._ascending:i._descending,s.sort(a)};var d=0;return u._addAlgorithm(function(h,m,y){for(var $=h.key;0<a($,s[d]);)if(++d===s.length)return m(y),!1;return a($,s[d])===0||(m(function(){h.continue(s[d])}),!1)}),u},tt.prototype.notEqual=function(i){return this.inAnyRange([[-1/0,i],[i,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},tt.prototype.noneOf=function(){var i=ze.apply(U,arguments);if(i.length===0)return new this.Collection(this);try{i.sort(this._ascending)}catch{return wt(this,qt)}var s=i.reduce(function(a,u){return a?a.concat([[a[a.length-1][1],u]]):[[-1/0,u]]},null);return s.push([i[i.length-1],this.db._maxKey]),this.inAnyRange(s,{includeLowers:!1,includeUppers:!1})},tt.prototype.inAnyRange=function(z,s){var a=this,u=this._cmp,d=this._ascending,h=this._descending,m=this._min,y=this._max;if(z.length===0)return $n(this);if(!z.every(function(I){return I[0]!==void 0&&I[1]!==void 0&&d(I[0],I[1])<=0}))return wt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",G.InvalidArgument);var $=!s||s.includeLowers!==!1,C=s&&s.includeUppers===!0,S,v=d;function A(I,B){return v(I[0],B[0])}try{(S=z.reduce(function(I,B){for(var L=0,N=I.length;L<N;++L){var X=I[L];if(u(B[0],X[1])<0&&0<u(B[1],X[0])){X[0]=m(X[0],B[0]),X[1]=y(X[1],B[1]);break}}return L===N&&I.push(B),I},[])).sort(A)}catch{return wt(this,qt)}var E=0,_=C?function(I){return 0<d(I,S[E][1])}:function(I){return 0<=d(I,S[E][1])},P=$?function(I){return 0<h(I,S[E][0])}:function(I){return 0<=h(I,S[E][0])},k=_,z=new this.Collection(this,function(){return en(S[0][0],S[S.length-1][1],!$,!C)});return z._ondirectionchange=function(I){v=I==="next"?(k=_,d):(k=P,h),S.sort(A)},z._addAlgorithm(function(I,B,L){for(var N,X=I.key;k(X);)if(++E===S.length)return B(L),!1;return!_(N=X)&&!P(N)||(a._cmp(X,S[E][1])===0||a._cmp(X,S[E][0])===0||B(function(){v===d?I.continue(S[E][0]):I.continue(S[E][1])}),!1)}),z},tt.prototype.startsWithAnyOf=function(){var i=ze.apply(U,arguments);return i.every(function(s){return typeof s=="string"})?i.length===0?$n(this):this.inAnyRange(i.map(function(s){return[s,s+ln]})):wt(this,"startsWithAnyOf() only works with strings")},tt);function tt(){}function zt(i){return je(function(s){return Rn(s),i(s.target.error),!1})}function Rn(i){i.stopPropagation&&i.stopPropagation(),i.preventDefault&&i.preventDefault()}var zn="storagemutated",Yr="x-storagemutated-1",tn=Fn(null,zn),Hs=(It.prototype._lock=function(){return sn(!H.global),++this._reculock,this._reculock!==1||H.global||(H.lockOwnerFor=this),this},It.prototype._unlock=function(){if(sn(!H.global),--this._reculock==0)for(H.global||(H.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var i=this._blockedFuncs.shift();try{an(i[1],i[0])}catch{}}return this},It.prototype._locked=function(){return this._reculock&&H.lockOwnerFor!==this},It.prototype.create=function(i){var s=this;if(!this.mode)return this;var a=this.db.idbdb,u=this.db._state.dbOpenError;if(sn(!this.idbtrans),!i&&!a)switch(u&&u.name){case"DatabaseClosedError":throw new G.DatabaseClosed(u);case"MissingAPIError":throw new G.MissingAPI(u.message,u);default:throw new G.OpenFailed(u)}if(!this.active)throw new G.TransactionInactive;return sn(this._completion._state===null),(i=this.idbtrans=i||(this.db.core||a).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=je(function(d){Rn(d),s._reject(i.error)}),i.onabort=je(function(d){Rn(d),s.active&&s._reject(new G.Abort(i.error)),s.active=!1,s.on("abort").fire(d)}),i.oncomplete=je(function(){s.active=!1,s._resolve(),"mutatedParts"in i&&tn.storagemutated.fire(i.mutatedParts)}),this},It.prototype._promise=function(i,s,a){var u=this;if(i==="readwrite"&&this.mode!=="readwrite")return Ve(new G.ReadOnly("Transaction is readonly"));if(!this.active)return Ve(new G.TransactionInactive);if(this._locked())return new K(function(h,m){u._blockedFuncs.push([function(){u._promise(i,s,a).then(h,m)},H])});if(a)return Qt(function(){var h=new K(function(m,y){u._lock();var $=s(m,y,u);$&&$.then&&$.then(m,y)});return h.finally(function(){return u._unlock()}),h._lib=!0,h});var d=new K(function(h,m){var y=s(h,m,u);y&&y.then&&y.then(h,m)});return d._lib=!0,d},It.prototype._root=function(){return this.parent?this.parent._root():this},It.prototype.waitFor=function(i){var s,a=this._root(),u=K.resolve(i);a._waitingFor?a._waitingFor=a._waitingFor.then(function(){return u}):(a._waitingFor=u,a._waitingQueue=[],s=a.idbtrans.objectStore(a.storeNames[0]),(function h(){for(++a._spinCount;a._waitingQueue.length;)a._waitingQueue.shift()();a._waitingFor&&(s.get(-1/0).onsuccess=h)})());var d=a._waitingFor;return new K(function(h,m){u.then(function(y){return a._waitingQueue.push(je(h.bind(null,y)))},function(y){return a._waitingQueue.push(je(m.bind(null,y)))}).finally(function(){a._waitingFor===d&&(a._waitingFor=null)})})},It.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new G.Abort))},It.prototype.table=function(i){var s=this._memoizedTables||(this._memoizedTables={});if(R(s,i))return s[i];var a=this.schema[i];if(!a)throw new G.NotFound("Table "+i+" not part of transaction");return a=new this.db.Table(i,a,this),a.core=this.db.core.table(i),s[i]=a},It);function It(){}function Xr(i,s,a,u,d,h,m){return{name:i,keyPath:s,unique:a,multi:u,auto:d,compound:h,src:(a&&!m?"&":"")+(u?"*":"")+(d?"++":"")+Zi(s)}}function Zi(i){return typeof i=="string"?i:i?"["+[].join.call(i,"+")+"]":""}function Gr(i,s,a){return{name:i,primKey:s,indexes:a,mappedClass:null,idxByName:(u=function(d){return[d.name,d]},a.reduce(function(d,h,m){return m=u(h,m),m&&(d[m[0]]=m[1]),d},{}))};var u}var In=function(i){try{return i.only([[]]),In=function(){return[[]]},[[]]}catch{return In=function(){return ln},ln}};function Qr(i){return i==null?function(){}:typeof i=="string"?(s=i).split(".").length===1?function(a){return a[s]}:function(a){return Ct(a,s)}:function(a){return Ct(a,i)};var s}function eo(i){return[].slice.call(i)}var Ks=0;function Bn(i){return i==null?":id":typeof i=="string"?i:"[".concat(i.join("+"),"]")}function Vs(i,s,$){function u(k){if(k.type===3)return null;if(k.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var E=k.lower,_=k.upper,P=k.lowerOpen,k=k.upperOpen;return E===void 0?_===void 0?null:s.upperBound(_,!!k):_===void 0?s.lowerBound(E,!!P):s.bound(E,_,!!P,!!k)}function d(A){var E,_=A.name;return{name:_,schema:A,mutate:function(P){var k=P.trans,z=P.type,I=P.keys,B=P.values,L=P.range;return new Promise(function(N,X){N=je(N);var q=k.objectStore(_),W=q.keyPath==null,Q=z==="put"||z==="add";if(!Q&&z!=="delete"&&z!=="deleteRange")throw new Error("Invalid operation type: "+z);var Y,te=(I||B||{length:1}).length;if(I&&B&&I.length!==B.length)throw new Error("Given keys array must have same length as given values array.");if(te===0)return N({numFailures:0,failures:{},results:[],lastResult:void 0});function de(ft){++xt,Rn(ft)}var he=[],pe=[],xt=0;if(z==="deleteRange"){if(L.type===4)return N({numFailures:xt,failures:pe,results:[],lastResult:void 0});L.type===3?he.push(Y=q.clear()):he.push(Y=q.delete(u(L)))}else{var W=Q?W?[B,I]:[B,null]:[I,null],ue=W[0],at=W[1];if(Q)for(var lt=0;lt<te;++lt)he.push(Y=at&&at[lt]!==void 0?q[z](ue[lt],at[lt]):q[z](ue[lt])),Y.onerror=de;else for(lt=0;lt<te;++lt)he.push(Y=q[z](ue[lt])),Y.onerror=de}function vr(ft){ft=ft.target.result,he.forEach(function(fn,mi){return fn.error!=null&&(pe[mi]=fn.error)}),N({numFailures:xt,failures:pe,results:z==="delete"?I:he.map(function(fn){return fn.result}),lastResult:ft})}Y.onerror=function(ft){de(ft),vr(ft)},Y.onsuccess=vr})},getMany:function(P){var k=P.trans,z=P.keys;return new Promise(function(I,B){I=je(I);for(var L,N=k.objectStore(_),X=z.length,q=new Array(X),W=0,Q=0,Y=function(he){he=he.target,q[he._pos]=he.result,++Q===W&&I(q)},te=zt(B),de=0;de<X;++de)z[de]!=null&&((L=N.get(z[de]))._pos=de,L.onsuccess=Y,L.onerror=te,++W);W===0&&I(q)})},get:function(P){var k=P.trans,z=P.key;return new Promise(function(I,B){I=je(I);var L=k.objectStore(_).get(z);L.onsuccess=function(N){return I(N.target.result)},L.onerror=zt(B)})},query:(E=C,function(P){return new Promise(function(k,z){k=je(k);var I,B,L,W=P.trans,N=P.values,X=P.limit,Y=P.query,q=X===1/0?void 0:X,Q=Y.index,Y=Y.range,W=W.objectStore(_),Q=Q.isPrimaryKey?W:W.index(Q.name),Y=u(Y);if(X===0)return k({result:[]});E?((q=N?Q.getAll(Y,q):Q.getAllKeys(Y,q)).onsuccess=function(te){return k({result:te.target.result})},q.onerror=zt(z)):(I=0,B=!N&&"openKeyCursor"in Q?Q.openKeyCursor(Y):Q.openCursor(Y),L=[],B.onsuccess=function(te){var de=B.result;return de?(L.push(N?de.value:de.primaryKey),++I===X?k({result:L}):void de.continue()):k({result:L})},B.onerror=zt(z))})}),openCursor:function(P){var k=P.trans,z=P.values,I=P.query,B=P.reverse,L=P.unique;return new Promise(function(N,X){N=je(N);var Q=I.index,q=I.range,W=k.objectStore(_),W=Q.isPrimaryKey?W:W.index(Q.name),Q=B?L?"prevunique":"prev":L?"nextunique":"next",Y=!z&&"openKeyCursor"in W?W.openKeyCursor(u(q),Q):W.openCursor(u(q),Q);Y.onerror=zt(X),Y.onsuccess=je(function(te){var de,he,pe,xt,ue=Y.result;ue?(ue.___id=++Ks,ue.done=!1,de=ue.continue.bind(ue),he=(he=ue.continuePrimaryKey)&&he.bind(ue),pe=ue.advance.bind(ue),xt=function(){throw new Error("Cursor not stopped")},ue.trans=k,ue.stop=ue.continue=ue.continuePrimaryKey=ue.advance=function(){throw new Error("Cursor not started")},ue.fail=je(X),ue.next=function(){var at=this,lt=1;return this.start(function(){return lt--?at.continue():at.stop()}).then(function(){return at})},ue.start=function(at){function lt(){if(Y.result)try{at()}catch(ft){ue.fail(ft)}else ue.done=!0,ue.start=function(){throw new Error("Cursor behind last entry")},ue.stop()}var vr=new Promise(function(ft,fn){ft=je(ft),Y.onerror=zt(fn),ue.fail=fn,ue.stop=function(mi){ue.stop=ue.continue=ue.continuePrimaryKey=ue.advance=xt,ft(mi)}});return Y.onsuccess=je(function(ft){Y.onsuccess=lt,lt()}),ue.continue=de,ue.continuePrimaryKey=he,ue.advance=pe,lt(),vr},N(ue)):N(null)},X)})},count:function(P){var k=P.query,z=P.trans,I=k.index,B=k.range;return new Promise(function(L,N){var X=z.objectStore(_),q=I.isPrimaryKey?X:X.index(I.name),X=u(B),q=X?q.count(X):q.count();q.onsuccess=je(function(W){return L(W.target.result)}),q.onerror=zt(N)})}}}var h,m,y,S=(m=$,y=eo((h=i).objectStoreNames),{schema:{name:h.name,tables:y.map(function(A){return m.objectStore(A)}).map(function(A){var E=A.keyPath,k=A.autoIncrement,_=f(E),P={},k={name:A.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:E==null,compound:_,keyPath:E,autoIncrement:k,unique:!0,extractKey:Qr(E)},indexes:eo(A.indexNames).map(function(z){return A.index(z)}).map(function(L){var I=L.name,B=L.unique,N=L.multiEntry,L=L.keyPath,N={name:I,compound:f(L),keyPath:L,unique:B,multiEntry:N,extractKey:Qr(L)};return P[Bn(L)]=N}),getIndexByKeyPath:function(z){return P[Bn(z)]}};return P[":id"]=k.primaryKey,E!=null&&(P[Bn(E)]=k.primaryKey),k})},hasGetAll:0<y.length&&"getAll"in m.objectStore(y[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),$=S.schema,C=S.hasGetAll,S=$.tables.map(d),v={};return S.forEach(function(A){return v[A.name]=A}),{stack:"dbcore",transaction:i.transaction.bind(i),table:function(A){if(!v[A])throw new Error("Table '".concat(A,"' not found"));return v[A]},MIN_KEY:-1/0,MAX_KEY:In(s),schema:$}}function Ys(i,s,a,u){var d=a.IDBKeyRange;return a.indexedDB,{dbcore:(u=Vs(s,d,u),i.dbcore.reduce(function(h,m){return m=m.create,o(o({},h),m(h))},u))}}function ar(i,u){var a=u.db,u=Ys(i._middlewares,a,i._deps,u);i.core=u.dbcore,i.tables.forEach(function(d){var h=d.name;i.core.schema.tables.some(function(m){return m.name===h})&&(d.core=i.core.table(h),i[h]instanceof i.Table&&(i[h].core=d.core))})}function lr(i,s,a,u){a.forEach(function(d){var h=u[d];s.forEach(function(m){var y=(function $(C,S){return Je(C,S)||(C=T(C))&&$(C,S)})(m,d);(!y||"value"in y&&y.value===void 0)&&(m===i.Transaction.prototype||m instanceof i.Transaction?Z(m,d,{get:function(){return this.table(d)},set:function($){V(this,d,{value:$,writable:!0,configurable:!0,enumerable:!0})}}):m[d]=new i.Table(d,h))})})}function Jr(i,s){s.forEach(function(a){for(var u in a)a[u]instanceof i.Table&&delete a[u]})}function Xs(i,s){return i._cfg.version-s._cfg.version}function Gs(i,s,a,u){var d=i._dbSchema;a.objectStoreNames.contains("$meta")&&!d.$meta&&(d.$meta=Gr("$meta",no("")[0],[]),i._storeNames.push("$meta"));var h=i._createTransaction("readwrite",i._storeNames,d);h.create(a),h._completion.catch(u);var m=h._reject.bind(h),y=H.transless||H;Qt(function(){return H.trans=h,H.transless=y,s!==0?(ar(i,a),C=s,(($=h).storeNames.includes("$meta")?$.table("$meta").get("version").then(function(S){return S??C}):K.resolve(C)).then(function(S){return A=S,E=h,_=a,P=[],S=(v=i)._versions,k=v._dbSchema=ur(0,v.idbdb,_),(S=S.filter(function(z){return z._cfg.version>=A})).length!==0?(S.forEach(function(z){P.push(function(){var I=k,B=z._cfg.dbschema;dr(v,I,_),dr(v,B,_),k=v._dbSchema=B;var L=Zr(I,B);L.add.forEach(function(Q){ei(_,Q[0],Q[1].primKey,Q[1].indexes)}),L.change.forEach(function(Q){if(Q.recreate)throw new G.Upgrade("Not yet support for changing primary key");var Y=_.objectStore(Q.name);Q.add.forEach(function(te){return cr(Y,te)}),Q.change.forEach(function(te){Y.deleteIndex(te.name),cr(Y,te)}),Q.del.forEach(function(te){return Y.deleteIndex(te)})});var N=z._cfg.contentUpgrade;if(N&&z._cfg.version>A){ar(v,_),E._memoizedTables={};var X=Mt(B);L.del.forEach(function(Q){X[Q]=I[Q]}),Jr(v,[v.Transaction.prototype]),lr(v,[v.Transaction.prototype],c(X),X),E.schema=X;var q,W=Xe(N);return W&&vn(),L=K.follow(function(){var Q;(q=N(E))&&W&&(Q=Jt.bind(null,null),q.then(Q,Q))}),q&&typeof q.then=="function"?K.resolve(q):L.then(function(){return q})}}),P.push(function(I){var B,L,N=z._cfg.dbschema;B=N,L=I,[].slice.call(L.db.objectStoreNames).forEach(function(X){return B[X]==null&&L.db.deleteObjectStore(X)}),Jr(v,[v.Transaction.prototype]),lr(v,[v.Transaction.prototype],v._storeNames,v._dbSchema),E.schema=v._dbSchema}),P.push(function(I){v.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(v.idbdb.version/10)===z._cfg.version?(v.idbdb.deleteObjectStore("$meta"),delete v._dbSchema.$meta,v._storeNames=v._storeNames.filter(function(B){return B!=="$meta"})):I.objectStore("$meta").put(z._cfg.version,"version"))})}),(function z(){return P.length?K.resolve(P.shift()(E.idbtrans)).then(z):K.resolve()})().then(function(){to(k,_)})):K.resolve();var v,A,E,_,P,k}).catch(m)):(c(d).forEach(function(S){ei(a,S,d[S].primKey,d[S].indexes)}),ar(i,a),void K.follow(function(){return i.on.populate.fire(h)}).catch(m));var $,C})}function Qs(i,s){to(i._dbSchema,s),s.db.version%10!=0||s.objectStoreNames.contains("$meta")||s.db.createObjectStore("$meta").add(Math.ceil(s.db.version/10-1),"version");var a=ur(0,i.idbdb,s);dr(i,i._dbSchema,s);for(var u=0,d=Zr(a,i._dbSchema).change;u<d.length;u++){var h=(function(m){if(m.change.length||m.recreate)return console.warn("Unable to patch indexes of table ".concat(m.name," because it has changes on the type of index or primary key.")),{value:void 0};var y=s.objectStore(m.name);m.add.forEach(function($){Ce&&console.debug("Dexie upgrade patch: Creating missing index ".concat(m.name,".").concat($.src)),cr(y,$)})})(d[u]);if(typeof h=="object")return h.value}}function Zr(i,s){var a,u={del:[],add:[],change:[]};for(a in i)s[a]||u.del.push(a);for(a in s){var d=i[a],h=s[a];if(d){var m={name:a,def:h,recreate:!1,del:[],add:[],change:[]};if(""+(d.primKey.keyPath||"")!=""+(h.primKey.keyPath||"")||d.primKey.auto!==h.primKey.auto)m.recreate=!0,u.change.push(m);else{var y=d.idxByName,$=h.idxByName,C=void 0;for(C in y)$[C]||m.del.push(C);for(C in $){var S=y[C],v=$[C];S?S.src!==v.src&&m.change.push(v):m.add.push(v)}(0<m.del.length||0<m.add.length||0<m.change.length)&&u.change.push(m)}}else u.add.push([a,h])}return u}function ei(i,s,a,u){var d=i.db.createObjectStore(s,a.keyPath?{keyPath:a.keyPath,autoIncrement:a.auto}:{autoIncrement:a.auto});return u.forEach(function(h){return cr(d,h)}),d}function to(i,s){c(i).forEach(function(a){s.db.objectStoreNames.contains(a)||(Ce&&console.debug("Dexie: Creating missing table",a),ei(s,a,i[a].primKey,i[a].indexes))})}function cr(i,s){i.createIndex(s.name,s.keyPath,{unique:s.unique,multiEntry:s.multi})}function ur(i,s,a){var u={};return gt(s.objectStoreNames,0).forEach(function(d){for(var h=a.objectStore(d),m=Xr(Zi(C=h.keyPath),C||"",!0,!1,!!h.autoIncrement,C&&typeof C!="string",!0),y=[],$=0;$<h.indexNames.length;++$){var S=h.index(h.indexNames[$]),C=S.keyPath,S=Xr(S.name,C,!!S.unique,!!S.multiEntry,!1,C&&typeof C!="string",!1);y.push(S)}u[d]=Gr(d,m,y)}),u}function dr(i,s,a){for(var u=a.db.objectStoreNames,d=0;d<u.length;++d){var h=u[d],m=a.objectStore(h);i._hasGetAll="getAll"in m;for(var y=0;y<m.indexNames.length;++y){var $=m.indexNames[y],C=m.index($).keyPath,S=typeof C=="string"?C:"["+gt(C).join("+")+"]";!s[h]||(C=s[h].idxByName[S])&&(C.name=$,delete s[h].idxByName[S],s[h].idxByName[$]=C)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&l.WorkerGlobalScope&&l instanceof l.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(i._hasGetAll=!1)}function no(i){return i.split(",").map(function(s,a){var u=(s=s.trim()).replace(/([&*]|\+\+)/g,""),d=/^\[/.test(u)?u.match(/^\[(.*)\]$/)[1].split("+"):u;return Xr(u,d||null,/\&/.test(s),/\*/.test(s),/\+\+/.test(s),f(d),a===0)})}var Js=(fr.prototype._parseStoresSpec=function(i,s){c(i).forEach(function(a){if(i[a]!==null){var u=no(i[a]),d=u.shift();if(d.unique=!0,d.multi)throw new G.Schema("Primary key cannot be multi-valued");u.forEach(function(h){if(h.auto)throw new G.Schema("Only primary key can be marked as autoIncrement (++)");if(!h.keyPath)throw new G.Schema("Index must have a name and cannot be an empty string")}),s[a]=Gr(a,d,u)}})},fr.prototype.stores=function(a){var s=this.db;this._cfg.storesSource=this._cfg.storesSource?g(this._cfg.storesSource,a):a;var a=s._versions,u={},d={};return a.forEach(function(h){g(u,h._cfg.storesSource),d=h._cfg.dbschema={},h._parseStoresSpec(u,d)}),s._dbSchema=d,Jr(s,[s._allTables,s,s.Transaction.prototype]),lr(s,[s._allTables,s,s.Transaction.prototype,this._cfg.tables],c(d),d),s._storeNames=c(d),this},fr.prototype.upgrade=function(i){return this._cfg.contentUpgrade=yt(this._cfg.contentUpgrade||se,i),this},fr);function fr(){}function ti(i,s){var a=i._dbNamesDB;return a||(a=i._dbNamesDB=new Wt(nr,{addons:[],indexedDB:i,IDBKeyRange:s})).version(1).stores({dbnames:"name"}),a.table("dbnames")}function ni(i){return i&&typeof i.databases=="function"}function ri(i){return Qt(function(){return H.letThrough=!0,i()})}function ii(i){return!("from"in i)}var st=function(i,s){if(!this){var a=new st;return i&&"d"in i&&g(a,i),a}g(this,arguments.length?{d:1,from:i,to:1<arguments.length?s:i}:{d:0})};function Ln(i,s,a){var u=ye(s,a);if(!isNaN(u)){if(0<u)throw RangeError();if(ii(i))return g(i,{from:s,to:a,d:1});var d=i.l,u=i.r;if(ye(a,i.from)<0)return d?Ln(d,s,a):i.l={from:s,to:a,d:1,l:null,r:null},io(i);if(0<ye(s,i.to))return u?Ln(u,s,a):i.r={from:s,to:a,d:1,l:null,r:null},io(i);ye(s,i.from)<0&&(i.from=s,i.l=null,i.d=u?u.d+1:1),0<ye(a,i.to)&&(i.to=a,i.r=null,i.d=i.l?i.l.d+1:1),a=!i.r,d&&!i.l&&Mn(i,d),u&&a&&Mn(i,u)}}function Mn(i,s){ii(s)||(function a(u,$){var h=$.from,m=$.to,y=$.l,$=$.r;Ln(u,h,m),y&&a(u,y),$&&a(u,$)})(i,s)}function ro(i,s){var a=hr(s),u=a.next();if(u.done)return!1;for(var d=u.value,h=hr(i),m=h.next(d.from),y=m.value;!u.done&&!m.done;){if(ye(y.from,d.to)<=0&&0<=ye(y.to,d.from))return!0;ye(d.from,y.from)<0?d=(u=a.next(y.from)).value:y=(m=h.next(d.from)).value}return!1}function hr(i){var s=ii(i)?null:{s:0,n:i};return{next:function(a){for(var u=0<arguments.length;s;)switch(s.s){case 0:if(s.s=1,u)for(;s.n.l&&ye(a,s.n.from)<0;)s={up:s,n:s.n.l,s:1};else for(;s.n.l;)s={up:s,n:s.n.l,s:1};case 1:if(s.s=2,!u||ye(a,s.n.to)<=0)return{value:s.n,done:!1};case 2:if(s.n.r){s.s=3,s={up:s,n:s.n.r,s:0};continue}case 3:s=s.up}return{done:!0}}}}function io(i){var s,a,u=(((s=i.r)===null||s===void 0?void 0:s.d)||0)-(((a=i.l)===null||a===void 0?void 0:a.d)||0),d=1<u?"r":u<-1?"l":"";d&&(s=d=="r"?"l":"r",a=o({},i),u=i[d],i.from=u.from,i.to=u.to,i[d]=u[d],a[d]=u[s],(i[s]=a).d=oo(a)),i.d=oo(i)}function oo(a){var s=a.r,a=a.l;return(s?a?Math.max(s.d,a.d):s.d:a?a.d:0)+1}function pr(i,s){return c(s).forEach(function(a){i[a]?Mn(i[a],s[a]):i[a]=(function u(d){var h,m,y={};for(h in d)R(d,h)&&(m=d[h],y[h]=!m||typeof m!="object"||p.has(m.constructor)?m:u(m));return y})(s[a])}),i}function oi(i,s){return i.all||s.all||Object.keys(i).some(function(a){return s[a]&&ro(s[a],i[a])})}j(st.prototype,((kt={add:function(i){return Mn(this,i),this},addKey:function(i){return Ln(this,i,i),this},addKeys:function(i){var s=this;return i.forEach(function(a){return Ln(s,a,a)}),this},hasKey:function(i){var s=hr(this).next(i).value;return s&&ye(s.from,i)<=0&&0<=ye(s.to,i)}})[ie]=function(){return hr(this)},kt));var un={},si={},ai=!1;function mr(i){pr(si,i),ai||(ai=!0,setTimeout(function(){ai=!1,li(si,!(si={}))},0))}function li(i,s){s===void 0&&(s=!1);var a=new Set;if(i.all)for(var u=0,d=Object.values(un);u<d.length;u++)so(m=d[u],i,a,s);else for(var h in i){var m,y=/^idb\:\/\/(.*)\/(.*)\//.exec(h);y&&(h=y[1],y=y[2],(m=un["idb://".concat(h,"/").concat(y)])&&so(m,i,a,s))}a.forEach(function($){return $()})}function so(i,s,a,u){for(var d=[],h=0,m=Object.entries(i.queries.query);h<m.length;h++){for(var y=m[h],$=y[0],C=[],S=0,v=y[1];S<v.length;S++){var A=v[S];oi(s,A.obsSet)?A.subscribers.forEach(function(k){return a.add(k)}):u&&C.push(A)}u&&d.push([$,C])}if(u)for(var E=0,_=d;E<_.length;E++){var P=_[E],$=P[0],C=P[1];i.queries.query[$]=C}}function Zs(i){var s=i._state,a=i._deps.indexedDB;if(s.isBeingOpened||i.idbdb)return s.dbReadyPromise.then(function(){return s.dbOpenError?Ve(s.dbOpenError):i});s.isBeingOpened=!0,s.dbOpenError=null,s.openComplete=!1;var u=s.openCanceller,d=Math.round(10*i.verno),h=!1;function m(){if(s.openCanceller!==u)throw new G.DatabaseClosed("db.open() was cancelled")}function y(){return new K(function(A,E){if(m(),!a)throw new G.MissingAPI;var _=i.name,P=s.autoSchema||!d?a.open(_):a.open(_,d);if(!P)throw new G.MissingAPI;P.onerror=zt(E),P.onblocked=je(i._fireOnBlocked),P.onupgradeneeded=je(function(k){var z;S=P.transaction,s.autoSchema&&!i._options.allowEmptyDB?(P.onerror=Rn,S.abort(),P.result.close(),(z=a.deleteDatabase(_)).onsuccess=z.onerror=je(function(){E(new G.NoSuchDatabase("Database ".concat(_," doesnt exist")))})):(S.onerror=zt(E),k=k.oldVersion>Math.pow(2,62)?0:k.oldVersion,v=k<1,i.idbdb=P.result,h&&Qs(i,S),Gs(i,k/10,S,E))},E),P.onsuccess=je(function(){S=null;var k,z,I,B,L,N=i.idbdb=P.result,X=gt(N.objectStoreNames);if(0<X.length)try{var q=N.transaction((B=X).length===1?B[0]:B,"readonly");if(s.autoSchema)z=N,I=q,(k=i).verno=z.version/10,I=k._dbSchema=ur(0,z,I),k._storeNames=gt(z.objectStoreNames,0),lr(k,[k._allTables],c(I),I);else if(dr(i,i._dbSchema,q),((L=Zr(ur(0,(L=i).idbdb,q),L._dbSchema)).add.length||L.change.some(function(W){return W.add.length||W.change.length}))&&!h)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),N.close(),d=N.version+1,h=!0,A(y());ar(i,q)}catch{}wn.push(i),N.onversionchange=je(function(W){s.vcFired=!0,i.on("versionchange").fire(W)}),N.onclose=je(function(W){i.on("close").fire(W)}),v&&(L=i._deps,q=_,N=L.indexedDB,L=L.IDBKeyRange,ni(N)||q===nr||ti(N,L).put({name:q}).catch(se)),A()},E)}).catch(function(A){switch(A?.name){case"UnknownError":if(0<s.PR1398_maxLoop)return s.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),y();break;case"VersionError":if(0<d)return d=0,y()}return K.reject(A)})}var $,C=s.dbReadyResolve,S=null,v=!1;return K.race([u,(typeof navigator>"u"?K.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(A){function E(){return indexedDB.databases().finally(A)}$=setInterval(E,100),E()}).finally(function(){return clearInterval($)}):Promise.resolve()).then(y)]).then(function(){return m(),s.onReadyBeingFired=[],K.resolve(ri(function(){return i.on.ready.fire(i.vip)})).then(function A(){if(0<s.onReadyBeingFired.length){var E=s.onReadyBeingFired.reduce(yt,se);return s.onReadyBeingFired=[],K.resolve(ri(function(){return E(i.vip)})).then(A)}})}).finally(function(){s.openCanceller===u&&(s.onReadyBeingFired=null,s.isBeingOpened=!1)}).catch(function(A){s.dbOpenError=A;try{S&&S.abort()}catch{}return u===s.openCanceller&&i._close(),Ve(A)}).finally(function(){s.openComplete=!0,C()}).then(function(){var A;return v&&(A={},i.tables.forEach(function(E){E.schema.indexes.forEach(function(_){_.name&&(A["idb://".concat(i.name,"/").concat(E.name,"/").concat(_.name)]=new st(-1/0,[[[]]]))}),A["idb://".concat(i.name,"/").concat(E.name,"/")]=A["idb://".concat(i.name,"/").concat(E.name,"/:dels")]=new st(-1/0,[[[]]])}),tn(zn).fire(A),li(A,!0)),i})}function ci(i){function s(h){return i.next(h)}var a=d(s),u=d(function(h){return i.throw(h)});function d(h){return function($){var y=h($),$=y.value;return y.done?$:$&&typeof $.then=="function"?$.then(a,u):f($)?Promise.all($).then(a,u):a($)}}return d(s)()}function gr(i,s,a){for(var u=f(i)?i.slice():[i],d=0;d<a;++d)u.push(s);return u}var ea={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(i){return o(o({},i),{table:function(s){var a=i.table(s),u=a.schema,d={},h=[];function m(v,A,E){var _=Bn(v),P=d[_]=d[_]||[],k=v==null?0:typeof v=="string"?1:v.length,z=0<A,z=o(o({},E),{name:z?"".concat(_,"(virtual-from:").concat(E.name,")"):E.name,lowLevelIndex:E,isVirtual:z,keyTail:A,keyLength:k,extractKey:Qr(v),unique:!z&&E.unique});return P.push(z),z.isPrimaryKey||h.push(z),1<k&&m(k===2?v[0]:v.slice(0,k-1),A+1,E),P.sort(function(I,B){return I.keyTail-B.keyTail}),z}s=m(u.primaryKey.keyPath,0,u.primaryKey),d[":id"]=[s];for(var y=0,$=u.indexes;y<$.length;y++){var C=$[y];m(C.keyPath,0,C)}function S(v){var A,E=v.query.index;return E.isVirtual?o(o({},v),{query:{index:E.lowLevelIndex,range:(A=v.query.range,E=E.keyTail,{type:A.type===1?2:A.type,lower:gr(A.lower,A.lowerOpen?i.MAX_KEY:i.MIN_KEY,E),lowerOpen:!0,upper:gr(A.upper,A.upperOpen?i.MIN_KEY:i.MAX_KEY,E),upperOpen:!0})}}):v}return o(o({},a),{schema:o(o({},u),{primaryKey:s,indexes:h,getIndexByKeyPath:function(v){return(v=d[Bn(v)])&&v[0]}}),count:function(v){return a.count(S(v))},query:function(v){return a.query(S(v))},openCursor:function(v){var A=v.query.index,E=A.keyTail,_=A.isVirtual,P=A.keyLength;return _?a.openCursor(S(v)).then(function(z){return z&&k(z)}):a.openCursor(v);function k(z){return Object.create(z,{continue:{value:function(I){I!=null?z.continue(gr(I,v.reverse?i.MAX_KEY:i.MIN_KEY,E)):v.unique?z.continue(z.key.slice(0,P).concat(v.reverse?i.MIN_KEY:i.MAX_KEY,E)):z.continue()}},continuePrimaryKey:{value:function(I,B){z.continuePrimaryKey(gr(I,i.MAX_KEY,E),B)}},primaryKey:{get:function(){return z.primaryKey}},key:{get:function(){var I=z.key;return P===1?I[0]:I.slice(0,P)}},value:{get:function(){return z.value}}})}}})}})}};function ui(i,s,a,u){return a=a||{},u=u||"",c(i).forEach(function(d){var h,m,y;R(s,d)?(h=i[d],m=s[d],typeof h=="object"&&typeof m=="object"&&h&&m?(y=x(h))!==x(m)?a[u+d]=s[d]:y==="Object"?ui(h,m,a,u+d+"."):h!==m&&(a[u+d]=s[d]):h!==m&&(a[u+d]=s[d])):a[u+d]=void 0}),c(s).forEach(function(d){R(i,d)||(a[u+d]=s[d])}),a}function di(i,s){return s.type==="delete"?s.keys:s.keys||s.values.map(i.extractKey)}var ta={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(i){return o(o({},i),{table:function(s){var a=i.table(s),u=a.schema.primaryKey;return o(o({},a),{mutate:function(d){var h=H.trans,m=h.table(s).hook,y=m.deleting,$=m.creating,C=m.updating;switch(d.type){case"add":if($.fire===se)break;return h._promise("readwrite",function(){return S(d)},!0);case"put":if($.fire===se&&C.fire===se)break;return h._promise("readwrite",function(){return S(d)},!0);case"delete":if(y.fire===se)break;return h._promise("readwrite",function(){return S(d)},!0);case"deleteRange":if(y.fire===se)break;return h._promise("readwrite",function(){return(function v(A,E,_){return a.query({trans:A,values:!1,query:{index:u,range:E},limit:_}).then(function(P){var k=P.result;return S({type:"delete",keys:k,trans:A}).then(function(z){return 0<z.numFailures?Promise.reject(z.failures[0]):k.length<_?{failures:[],numFailures:0,lastResult:void 0}:v(A,o(o({},E),{lower:k[k.length-1],lowerOpen:!0}),_)})})})(d.trans,d.range,1e4)},!0)}return a.mutate(d);function S(v){var A,E,_,P=H.trans,k=v.keys||di(u,v);if(!k)throw new Error("Keys missing");return(v=v.type==="add"||v.type==="put"?o(o({},v),{keys:k}):o({},v)).type!=="delete"&&(v.values=t([],v.values)),v.keys&&(v.keys=t([],v.keys)),A=a,_=k,((E=v).type==="add"?Promise.resolve([]):A.getMany({trans:E.trans,keys:_,cache:"immutable"})).then(function(z){var I=k.map(function(B,L){var N,X,q,W=z[L],Q={onerror:null,onsuccess:null};return v.type==="delete"?y.fire.call(Q,B,W,P):v.type==="add"||W===void 0?(N=$.fire.call(Q,B,v.values[L],P),B==null&&N!=null&&(v.keys[L]=B=N,u.outbound||it(v.values[L],u.keyPath,B))):(N=ui(W,v.values[L]),(X=C.fire.call(Q,N,B,W,P))&&(q=v.values[L],Object.keys(X).forEach(function(Y){R(q,Y)?q[Y]=X[Y]:it(q,Y,X[Y])}))),Q});return a.mutate(v).then(function(B){for(var L=B.failures,N=B.results,X=B.numFailures,B=B.lastResult,q=0;q<k.length;++q){var W=(N||k)[q],Q=I[q];W==null?Q.onerror&&Q.onerror(L[q]):Q.onsuccess&&Q.onsuccess(v.type==="put"&&z[q]?v.values[q]:W)}return{failures:L,results:N,numFailures:X,lastResult:B}}).catch(function(B){return I.forEach(function(L){return L.onerror&&L.onerror(B)}),Promise.reject(B)})})}}})}})}};function ao(i,s,a){try{if(!s||s.keys.length<i.length)return null;for(var u=[],d=0,h=0;d<s.keys.length&&h<i.length;++d)ye(s.keys[d],i[h])===0&&(u.push(a?D(s.values[d]):s.values[d]),++h);return u.length===i.length?u:null}catch{return null}}var na={stack:"dbcore",level:-1,create:function(i){return{table:function(s){var a=i.table(s);return o(o({},a),{getMany:function(u){if(!u.cache)return a.getMany(u);var d=ao(u.keys,u.trans._cache,u.cache==="clone");return d?K.resolve(d):a.getMany(u).then(function(h){return u.trans._cache={keys:u.keys,values:u.cache==="clone"?D(h):h},h})},mutate:function(u){return u.type!=="add"&&(u.trans._cache=null),a.mutate(u)}})}}}};function lo(i,s){return i.trans.mode==="readonly"&&!!i.subscr&&!i.trans.explicit&&i.trans.db._options.cache!=="disabled"&&!s.schema.primaryKey.outbound}function co(i,s){switch(i){case"query":return s.values&&!s.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var ra={stack:"dbcore",level:0,name:"Observability",create:function(i){var s=i.schema.name,a=new st(i.MIN_KEY,i.MAX_KEY);return o(o({},i),{transaction:function(u,d,h){if(H.subscr&&d!=="readonly")throw new G.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(H.querier));return i.transaction(u,d,h)},table:function(u){var d=i.table(u),h=d.schema,m=h.primaryKey,v=h.indexes,y=m.extractKey,$=m.outbound,C=m.autoIncrement&&v.filter(function(E){return E.compound&&E.keyPath.includes(m.keyPath)}),S=o(o({},d),{mutate:function(E){function _(Y){return Y="idb://".concat(s,"/").concat(u,"/").concat(Y),B[Y]||(B[Y]=new st)}var P,k,z,I=E.trans,B=E.mutatedParts||(E.mutatedParts={}),L=_(""),N=_(":dels"),X=E.type,Q=E.type==="deleteRange"?[E.range]:E.type==="delete"?[E.keys]:E.values.length<50?[di(m,E).filter(function(Y){return Y}),E.values]:[],q=Q[0],W=Q[1],Q=E.trans._cache;return f(q)?(L.addKeys(q),(Q=X==="delete"||q.length===W.length?ao(q,Q):null)||N.addKeys(q),(Q||W)&&(P=_,k=Q,z=W,h.indexes.forEach(function(Y){var te=P(Y.name||"");function de(pe){return pe!=null?Y.extractKey(pe):null}function he(pe){return Y.multiEntry&&f(pe)?pe.forEach(function(xt){return te.addKey(xt)}):te.addKey(pe)}(k||z).forEach(function(pe,at){var ue=k&&de(k[at]),at=z&&de(z[at]);ye(ue,at)!==0&&(ue!=null&&he(ue),at!=null&&he(at))})}))):q?(W={from:(W=q.lower)!==null&&W!==void 0?W:i.MIN_KEY,to:(W=q.upper)!==null&&W!==void 0?W:i.MAX_KEY},N.add(W),L.add(W)):(L.add(a),N.add(a),h.indexes.forEach(function(Y){return _(Y.name).add(a)})),d.mutate(E).then(function(Y){return!q||E.type!=="add"&&E.type!=="put"||(L.addKeys(Y.results),C&&C.forEach(function(te){for(var de=E.values.map(function(ue){return te.extractKey(ue)}),he=te.keyPath.findIndex(function(ue){return ue===m.keyPath}),pe=0,xt=Y.results.length;pe<xt;++pe)de[pe][he]=Y.results[pe];_(te.name).addKeys(de)})),I.mutatedParts=pr(I.mutatedParts||{},B),Y})}}),v=function(_){var P=_.query,_=P.index,P=P.range;return[_,new st((_=P.lower)!==null&&_!==void 0?_:i.MIN_KEY,(P=P.upper)!==null&&P!==void 0?P:i.MAX_KEY)]},A={get:function(E){return[m,new st(E.key)]},getMany:function(E){return[m,new st().addKeys(E.keys)]},count:v,query:v,openCursor:v};return c(A).forEach(function(E){S[E]=function(_){var P=H.subscr,k=!!P,z=lo(H,d)&&co(E,_)?_.obsSet={}:P;if(k){var I=function(W){return W="idb://".concat(s,"/").concat(u,"/").concat(W),z[W]||(z[W]=new st)},B=I(""),L=I(":dels"),P=A[E](_),k=P[0],P=P[1];if((E==="query"&&k.isPrimaryKey&&!_.values?L:I(k.name||"")).add(P),!k.isPrimaryKey){if(E!=="count"){var N=E==="query"&&$&&_.values&&d.query(o(o({},_),{values:!1}));return d[E].apply(this,arguments).then(function(W){if(E==="query"){if($&&_.values)return N.then(function(de){return de=de.result,B.addKeys(de),W});var Q=_.values?W.result.map(y):W.result;(_.values?B:L).addKeys(Q)}else if(E==="openCursor"){var Y=W,te=_.values;return Y&&Object.create(Y,{key:{get:function(){return L.addKey(Y.primaryKey),Y.key}},primaryKey:{get:function(){var de=Y.primaryKey;return L.addKey(de),de}},value:{get:function(){return te&&B.addKey(Y.primaryKey),Y.value}}})}return W})}L.add(a)}}return d[E].apply(this,arguments)}}),S}})}};function uo(i,s,a){if(a.numFailures===0)return s;if(s.type==="deleteRange")return null;var u=s.keys?s.keys.length:"values"in s&&s.values?s.values.length:1;return a.numFailures===u?null:(s=o({},s),f(s.keys)&&(s.keys=s.keys.filter(function(d,h){return!(h in a.failures)})),"values"in s&&f(s.values)&&(s.values=s.values.filter(function(d,h){return!(h in a.failures)})),s)}function fi(i,s){return a=i,((u=s).lower===void 0||(u.lowerOpen?0<ye(a,u.lower):0<=ye(a,u.lower)))&&(i=i,(s=s).upper===void 0||(s.upperOpen?ye(i,s.upper)<0:ye(i,s.upper)<=0));var a,u}function fo(i,s,A,u,d,h){if(!A||A.length===0)return i;var m=s.query.index,y=m.multiEntry,$=s.query.range,C=u.schema.primaryKey.extractKey,S=m.extractKey,v=(m.lowLevelIndex||m).extractKey,A=A.reduce(function(E,_){var P=E,k=[];if(_.type==="add"||_.type==="put")for(var z=new st,I=_.values.length-1;0<=I;--I){var B,L=_.values[I],N=C(L);z.hasKey(N)||(B=S(L),(y&&f(B)?B.some(function(Y){return fi(Y,$)}):fi(B,$))&&(z.addKey(N),k.push(L)))}switch(_.type){case"add":var X=new st().addKeys(s.values?E.map(function(te){return C(te)}):E),P=E.concat(s.values?k.filter(function(te){return te=C(te),!X.hasKey(te)&&(X.addKey(te),!0)}):k.map(function(te){return C(te)}).filter(function(te){return!X.hasKey(te)&&(X.addKey(te),!0)}));break;case"put":var q=new st().addKeys(_.values.map(function(te){return C(te)}));P=E.filter(function(te){return!q.hasKey(s.values?C(te):te)}).concat(s.values?k:k.map(function(te){return C(te)}));break;case"delete":var W=new st().addKeys(_.keys);P=E.filter(function(te){return!W.hasKey(s.values?C(te):te)});break;case"deleteRange":var Q=_.range;P=E.filter(function(te){return!fi(C(te),Q)})}return P},i);return A===i?i:(A.sort(function(E,_){return ye(v(E),v(_))||ye(C(E),C(_))}),s.limit&&s.limit<1/0&&(A.length>s.limit?A.length=s.limit:i.length===s.limit&&A.length<s.limit&&(d.dirty=!0)),h?Object.freeze(A):A)}function ho(i,s){return ye(i.lower,s.lower)===0&&ye(i.upper,s.upper)===0&&!!i.lowerOpen==!!s.lowerOpen&&!!i.upperOpen==!!s.upperOpen}function ia(i,s){return(function(a,u,d,h){if(a===void 0)return u!==void 0?-1:0;if(u===void 0)return 1;if((u=ye(a,u))===0){if(d&&h)return 0;if(d)return 1;if(h)return-1}return u})(i.lower,s.lower,i.lowerOpen,s.lowerOpen)<=0&&0<=(function(a,u,d,h){if(a===void 0)return u!==void 0?1:0;if(u===void 0)return-1;if((u=ye(a,u))===0){if(d&&h)return 0;if(d)return-1;if(h)return 1}return u})(i.upper,s.upper,i.upperOpen,s.upperOpen)}function oa(i,s,a,u){i.subscribers.add(a),u.addEventListener("abort",function(){var d,h;i.subscribers.delete(a),i.subscribers.size===0&&(d=i,h=s,setTimeout(function(){d.subscribers.size===0&&M(h,d)},3e3))})}var sa={stack:"dbcore",level:0,name:"Cache",create:function(i){var s=i.schema.name;return o(o({},i),{transaction:function(a,u,d){var h,m,y=i.transaction(a,u,d);return u==="readwrite"&&(m=(h=new AbortController).signal,d=function($){return function(){if(h.abort(),u==="readwrite"){for(var C=new Set,S=0,v=a;S<v.length;S++){var A=v[S],E=un["idb://".concat(s,"/").concat(A)];if(E){var _=i.table(A),P=E.optimisticOps.filter(function(te){return te.trans===y});if(y._explicit&&$&&y.mutatedParts)for(var k=0,z=Object.values(E.queries.query);k<z.length;k++)for(var I=0,B=(X=z[k]).slice();I<B.length;I++)oi((q=B[I]).obsSet,y.mutatedParts)&&(M(X,q),q.subscribers.forEach(function(te){return C.add(te)}));else if(0<P.length){E.optimisticOps=E.optimisticOps.filter(function(te){return te.trans!==y});for(var L=0,N=Object.values(E.queries.query);L<N.length;L++)for(var X,q,W,Q=0,Y=(X=N[L]).slice();Q<Y.length;Q++)(q=Y[Q]).res!=null&&y.mutatedParts&&($&&!q.dirty?(W=Object.isFrozen(q.res),W=fo(q.res,q.req,P,_,q,W),q.dirty?(M(X,q),q.subscribers.forEach(function(te){return C.add(te)})):W!==q.res&&(q.res=W,q.promise=K.resolve({result:W}))):(q.dirty&&M(X,q),q.subscribers.forEach(function(te){return C.add(te)})))}}}C.forEach(function(te){return te()})}}},y.addEventListener("abort",d(!1),{signal:m}),y.addEventListener("error",d(!1),{signal:m}),y.addEventListener("complete",d(!0),{signal:m})),y},table:function(a){var u=i.table(a),d=u.schema.primaryKey;return o(o({},u),{mutate:function(h){var m=H.trans;if(d.outbound||m.db._options.cache==="disabled"||m.explicit||m.idbtrans.mode!=="readwrite")return u.mutate(h);var y=un["idb://".concat(s,"/").concat(a)];return y?(m=u.mutate(h),h.type!=="add"&&h.type!=="put"||!(50<=h.values.length||di(d,h).some(function($){return $==null}))?(y.optimisticOps.push(h),h.mutatedParts&&mr(h.mutatedParts),m.then(function($){0<$.numFailures&&(M(y.optimisticOps,h),($=uo(0,h,$))&&y.optimisticOps.push($),h.mutatedParts&&mr(h.mutatedParts))}),m.catch(function(){M(y.optimisticOps,h),h.mutatedParts&&mr(h.mutatedParts)})):m.then(function($){var C=uo(0,o(o({},h),{values:h.values.map(function(S,v){var A;return $.failures[v]?S:(S=(A=d.keyPath)!==null&&A!==void 0&&A.includes(".")?D(S):o({},S),it(S,d.keyPath,$.results[v]),S)})}),$);y.optimisticOps.push(C),queueMicrotask(function(){return h.mutatedParts&&mr(h.mutatedParts)})}),m):u.mutate(h)},query:function(h){if(!lo(H,u)||!co("query",h))return u.query(h);var m=((C=H.trans)===null||C===void 0?void 0:C.db._options.cache)==="immutable",v=H,y=v.requery,$=v.signal,C=(function(_,P,k,z){var I=un["idb://".concat(_,"/").concat(P)];if(!I)return[];if(!(P=I.queries[k]))return[null,!1,I,null];var B=P[(z.query?z.query.index.name:null)||""];if(!B)return[null,!1,I,null];switch(k){case"query":var L=B.find(function(N){return N.req.limit===z.limit&&N.req.values===z.values&&ho(N.req.query.range,z.query.range)});return L?[L,!0,I,B]:[B.find(function(N){return("limit"in N.req?N.req.limit:1/0)>=z.limit&&(!z.values||N.req.values)&&ia(N.req.query.range,z.query.range)}),!1,I,B];case"count":return L=B.find(function(N){return ho(N.req.query.range,z.query.range)}),[L,!!L,I,B]}})(s,a,"query",h),S=C[0],v=C[1],A=C[2],E=C[3];return S&&v?S.obsSet=h.obsSet:(v=u.query(h).then(function(_){var P=_.result;if(S&&(S.res=P),m){for(var k=0,z=P.length;k<z;++k)Object.freeze(P[k]);Object.freeze(P)}else _.result=D(P);return _}).catch(function(_){return E&&S&&M(E,S),Promise.reject(_)}),S={obsSet:h.obsSet,promise:v,subscribers:new Set,type:"query",req:h,dirty:!1},E?E.push(S):(E=[S],(A=A||(un["idb://".concat(s,"/").concat(a)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[h.query.index.name||""]=E)),oa(S,E,y,$),S.promise.then(function(_){return{result:fo(_.result,h,A?.optimisticOps,u,S,m)}})}})}})}};function br(i,s){return new Proxy(i,{get:function(a,u,d){return u==="db"?s:Reflect.get(a,u,d)}})}var Wt=(Ye.prototype.version=function(i){if(isNaN(i)||i<.1)throw new G.Type("Given version is not a positive number");if(i=Math.round(10*i)/10,this.idbdb||this._state.isBeingOpened)throw new G.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,i);var s=this._versions,a=s.filter(function(u){return u._cfg.version===i})[0];return a||(a=new this.Version(i),s.push(a),s.sort(Xs),a.stores({}),this._state.autoSchema=!1,a)},Ye.prototype._whenReady=function(i){var s=this;return this.idbdb&&(this._state.openComplete||H.letThrough||this._vip)?i():new K(function(a,u){if(s._state.openComplete)return u(new G.DatabaseClosed(s._state.dbOpenError));if(!s._state.isBeingOpened){if(!s._state.autoOpen)return void u(new G.DatabaseClosed);s.open().catch(se)}s._state.dbReadyPromise.then(a,u)}).then(i)},Ye.prototype.use=function(i){var s=i.stack,a=i.create,u=i.level,d=i.name;return d&&this.unuse({stack:s,name:d}),i=this._middlewares[s]||(this._middlewares[s]=[]),i.push({stack:s,create:a,level:u??10,name:d}),i.sort(function(h,m){return h.level-m.level}),this},Ye.prototype.unuse=function(i){var s=i.stack,a=i.name,u=i.create;return s&&this._middlewares[s]&&(this._middlewares[s]=this._middlewares[s].filter(function(d){return u?d.create!==u:!!a&&d.name!==a})),this},Ye.prototype.open=function(){var i=this;return an(Me,function(){return Zs(i)})},Ye.prototype._close=function(){var i=this._state,s=wn.indexOf(this);if(0<=s&&wn.splice(s,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}i.isBeingOpened||(i.dbReadyPromise=new K(function(a){i.dbReadyResolve=a}),i.openCanceller=new K(function(a,u){i.cancelOpen=u}))},Ye.prototype.close=function(a){var s=(a===void 0?{disableAutoOpen:!0}:a).disableAutoOpen,a=this._state;s?(a.isBeingOpened&&a.cancelOpen(new G.DatabaseClosed),this._close(),a.autoOpen=!1,a.dbOpenError=new G.DatabaseClosed):(this._close(),a.autoOpen=this._options.autoOpen||a.isBeingOpened,a.openComplete=!1,a.dbOpenError=null)},Ye.prototype.delete=function(i){var s=this;i===void 0&&(i={disableAutoOpen:!0});var a=0<arguments.length&&typeof arguments[0]!="object",u=this._state;return new K(function(d,h){function m(){s.close(i);var y=s._deps.indexedDB.deleteDatabase(s.name);y.onsuccess=je(function(){var $,C,S;$=s._deps,C=s.name,S=$.indexedDB,$=$.IDBKeyRange,ni(S)||C===nr||ti(S,$).delete(C).catch(se),d()}),y.onerror=zt(h),y.onblocked=s._fireOnBlocked}if(a)throw new G.InvalidArgument("Invalid closeOptions argument to db.delete()");u.isBeingOpened?u.dbReadyPromise.then(m):m()})},Ye.prototype.backendDB=function(){return this.idbdb},Ye.prototype.isOpen=function(){return this.idbdb!==null},Ye.prototype.hasBeenClosed=function(){var i=this._state.dbOpenError;return i&&i.name==="DatabaseClosed"},Ye.prototype.hasFailed=function(){return this._state.dbOpenError!==null},Ye.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(Ye.prototype,"tables",{get:function(){var i=this;return c(this._allTables).map(function(s){return i._allTables[s]})},enumerable:!1,configurable:!0}),Ye.prototype.transaction=function(){var i=function(s,a,u){var d=arguments.length;if(d<2)throw new G.InvalidArgument("Too few arguments");for(var h=new Array(d-1);--d;)h[d-1]=arguments[d];return u=h.pop(),[s,yn(h),u]}.apply(this,arguments);return this._transaction.apply(this,i)},Ye.prototype._transaction=function(i,s,a){var u=this,d=H.trans;d&&d.db===this&&i.indexOf("!")===-1||(d=null);var h,m,y=i.indexOf("?")!==-1;i=i.replace("!","").replace("?","");try{if(m=s.map(function(C){if(C=C instanceof u.Table?C.name:C,typeof C!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return C}),i=="r"||i===Ur)h=Ur;else{if(i!="rw"&&i!=Wr)throw new G.InvalidArgument("Invalid transaction mode: "+i);h=Wr}if(d){if(d.mode===Ur&&h===Wr){if(!y)throw new G.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");d=null}d&&m.forEach(function(C){if(d&&d.storeNames.indexOf(C)===-1){if(!y)throw new G.SubTransaction("Table "+C+" not included in parent transaction.");d=null}}),y&&d&&!d.active&&(d=null)}}catch(C){return d?d._promise(null,function(S,v){v(C)}):Ve(C)}var $=function C(S,v,A,E,_){return K.resolve().then(function(){var P=H.transless||H,k=S._createTransaction(v,A,S._dbSchema,E);if(k.explicit=!0,P={trans:k,transless:P},E)k.idbtrans=E.idbtrans;else try{k.create(),k.idbtrans._explicit=!0,S._state.PR1398_maxLoop=3}catch(B){return B.name===Ie.InvalidState&&S.isOpen()&&0<--S._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),S.close({disableAutoOpen:!1}),S.open().then(function(){return C(S,v,A,null,_)})):Ve(B)}var z,I=Xe(_);return I&&vn(),P=K.follow(function(){var B;(z=_.call(k,k))&&(I?(B=Jt.bind(null,null),z.then(B,B)):typeof z.next=="function"&&typeof z.throw=="function"&&(z=ci(z)))},P),(z&&typeof z.then=="function"?K.resolve(z).then(function(B){return k.active?B:Ve(new G.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):P.then(function(){return z})).then(function(B){return E&&k._resolve(),k._completion.then(function(){return B})}).catch(function(B){return k._reject(B),Ve(B)})})}.bind(null,this,h,m,d,a);return d?d._promise(h,$,"lock"):H.trans?an(H.transless,function(){return u._whenReady($)}):this._whenReady($)},Ye.prototype.table=function(i){if(!R(this._allTables,i))throw new G.InvalidTable("Table ".concat(i," does not exist"));return this._allTables[i]},Ye);function Ye(i,s){var a=this;this._middlewares={},this.verno=0;var u=Ye.dependencies;this._options=s=o({addons:Ye.addons,autoOpen:!0,indexedDB:u.indexedDB,IDBKeyRange:u.IDBKeyRange,cache:"cloned"},s),this._deps={indexedDB:s.indexedDB,IDBKeyRange:s.IDBKeyRange},u=s.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var d,h,m,y,$,C={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:se,dbReadyPromise:null,cancelOpen:se,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:s.autoOpen};C.dbReadyPromise=new K(function(v){C.dbReadyResolve=v}),C.openCanceller=new K(function(v,A){C.cancelOpen=A}),this._state=C,this.name=i,this.on=Fn(this,"populate","blocked","versionchange","close",{ready:[yt,se]}),this.on.ready.subscribe=Yt(this.on.ready.subscribe,function(v){return function(A,E){Ye.vip(function(){var _,P=a._state;P.openComplete?(P.dbOpenError||K.resolve().then(A),E&&v(A)):P.onReadyBeingFired?(P.onReadyBeingFired.push(A),E&&v(A)):(v(A),_=a,E||v(function k(){_.on.ready.unsubscribe(A),_.on.ready.unsubscribe(k)}))})}}),this.Collection=(d=this,On(qs.prototype,function(z,k){this.db=d;var E=Ui,_=null;if(k)try{E=k()}catch(I){_=I}var P=z._ctx,k=P.table,z=k.hook.reading.fire;this._ctx={table:k,index:P.index,isPrimKey:!P.index||k.schema.primKey.keyPath&&P.index===k.schema.primKey.name,range:E,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:_,or:P.or,valueMapper:z!==fe?z:null}})),this.Table=(h=this,On(Vi.prototype,function(v,A,E){this.db=h,this._tx=E,this.name=v,this.schema=A,this.hook=h._allTables[v]?h._allTables[v].hook:Fn(null,{creating:[Le,se],reading:[bt,fe],updating:[Pt,se],deleting:[Xt,se]})})),this.Transaction=(m=this,On(Hs.prototype,function(v,A,E,_,P){var k=this;this.db=m,this.mode=v,this.storeNames=A,this.schema=E,this.chromeTransactionDurability=_,this.idbtrans=null,this.on=Fn(this,"complete","error","abort"),this.parent=P||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new K(function(z,I){k._resolve=z,k._reject=I}),this._completion.then(function(){k.active=!1,k.on.complete.fire()},function(z){var I=k.active;return k.active=!1,k.on.error.fire(z),k.parent?k.parent._reject(z):I&&k.idbtrans&&k.idbtrans.abort(),Ve(z)})})),this.Version=(y=this,On(Js.prototype,function(v){this.db=y,this._cfg={version:v,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=($=this,On(Ji.prototype,function(v,A,E){if(this.db=$,this._ctx={table:v,index:A===":id"?null:A,or:E},this._cmp=this._ascending=ye,this._descending=function(_,P){return ye(P,_)},this._max=function(_,P){return 0<ye(_,P)?_:P},this._min=function(_,P){return ye(_,P)<0?_:P},this._IDBKeyRange=$._deps.IDBKeyRange,!this._IDBKeyRange)throw new G.MissingAPI})),this.on("versionchange",function(v){0<v.newVersion?console.warn("Another connection wants to upgrade database '".concat(a.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(a.name,"'. Closing db now to resume the delete request.")),a.close({disableAutoOpen:!1})}),this.on("blocked",function(v){!v.newVersion||v.newVersion<v.oldVersion?console.warn("Dexie.delete('".concat(a.name,"') was blocked")):console.warn("Upgrade '".concat(a.name,"' blocked by other connection holding version ").concat(v.oldVersion/10))}),this._maxKey=In(s.IDBKeyRange),this._createTransaction=function(v,A,E,_){return new a.Transaction(v,A,E,a._options.chromeTransactionDurability,_)},this._fireOnBlocked=function(v){a.on("blocked").fire(v),wn.filter(function(A){return A.name===a.name&&A!==a&&!A._state.vcFired}).map(function(A){return A.on("versionchange").fire(v)})},this.use(na),this.use(sa),this.use(ra),this.use(ea),this.use(ta);var S=new Proxy(this,{get:function(v,A,E){if(A==="_vip")return!0;if(A==="table")return function(P){return br(a.table(P),S)};var _=Reflect.get(v,A,E);return _ instanceof Vi?br(_,S):A==="tables"?_.map(function(P){return br(P,S)}):A==="_createTransaction"?function(){return br(_.apply(this,arguments),S)}:_}});this.vip=S,u.forEach(function(v){return v(a)})}var yr,kt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",aa=(hi.prototype.subscribe=function(i,s,a){return this._subscribe(i&&typeof i!="function"?i:{next:i,error:s,complete:a})},hi.prototype[kt]=function(){return this},hi);function hi(i){this._subscribe=i}try{yr={indexedDB:l.indexedDB||l.mozIndexedDB||l.webkitIndexedDB||l.msIndexedDB,IDBKeyRange:l.IDBKeyRange||l.webkitIDBKeyRange}}catch{yr={indexedDB:null,IDBKeyRange:null}}function po(i){var s,a=!1,u=new aa(function(d){var h=Xe(i),m,y=!1,$={},C={},S={get closed(){return y},unsubscribe:function(){y||(y=!0,m&&m.abort(),v&&tn.storagemutated.unsubscribe(E))}};d.start&&d.start(S);var v=!1,A=function(){return qr(_)},E=function(P){pr($,P),oi(C,$)&&A()},_=function(){var P,k,z;!y&&yr.indexedDB&&($={},P={},m&&m.abort(),m=new AbortController,z=(function(I){var B=ke();try{h&&vn();var L=Qt(i,I);return L=h?L.finally(Jt):L}finally{B&&De()}})(k={subscr:P,signal:m.signal,requery:A,querier:i,trans:null}),Promise.resolve(z).then(function(I){a=!0,s=I,y||k.signal.aborted||($={},(function(B){for(var L in B)if(R(B,L))return;return 1})(C=P)||v||(tn(zn,E),v=!0),qr(function(){return!y&&d.next&&d.next(I)}))},function(I){a=!1,["DatabaseClosedError","AbortError"].includes(I?.name)||y||qr(function(){y||d.error&&d.error(I)})}))};return setTimeout(A,0),S});return u.hasValue=function(){return a},u.getValue=function(){return s},u}var dn=Wt;function pi(i){var s=nn;try{nn=!0,tn.storagemutated.fire(i),li(i,!0)}finally{nn=s}}j(dn,o(o({},Pe),{delete:function(i){return new dn(i,{addons:[]}).delete()},exists:function(i){return new dn(i,{addons:[]}).open().then(function(s){return s.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(i){try{return s=dn.dependencies,a=s.indexedDB,s=s.IDBKeyRange,(ni(a)?Promise.resolve(a.databases()).then(function(u){return u.map(function(d){return d.name}).filter(function(d){return d!==nr})}):ti(a,s).toCollection().primaryKeys()).then(i)}catch{return Ve(new G.MissingAPI)}var s,a},defineClass:function(){return function(i){g(this,i)}},ignoreTransaction:function(i){return H.trans?an(H.transless,i):i()},vip:ri,async:function(i){return function(){try{var s=ci(i.apply(this,arguments));return s&&typeof s.then=="function"?s:K.resolve(s)}catch(a){return Ve(a)}}},spawn:function(i,s,a){try{var u=ci(i.apply(a,s||[]));return u&&typeof u.then=="function"?u:K.resolve(u)}catch(d){return Ve(d)}},currentTransaction:{get:function(){return H.trans||null}},waitFor:function(i,s){return s=K.resolve(typeof i=="function"?dn.ignoreTransaction(i):i).timeout(s||6e4),H.trans?H.trans.waitFor(s):s},Promise:K,debug:{get:function(){return Ce},set:function(i){Fe(i)}},derive:le,extend:g,props:j,override:Yt,Events:Fn,on:tn,liveQuery:po,extendObservabilitySet:pr,getByKeyPath:Ct,setByKeyPath:it,delByKeyPath:function(i,s){typeof s=="string"?it(i,s,void 0):"length"in s&&[].map.call(s,function(a){it(i,a,void 0)})},shallowClone:Mt,deepClone:D,getObjectDiff:ui,cmp:ye,asap:Tn,minKey:-1/0,addons:[],connections:wn,errnames:Ie,dependencies:yr,cache:un,semVer:"4.0.10",version:"4.0.10".split(".").map(function(i){return parseInt(i)}).reduce(function(i,s,a){return i+s/Math.pow(10,2*a)})})),dn.maxKey=In(dn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(tn(zn,function(i){nn||(i=new CustomEvent(Yr,{detail:i}),nn=!0,dispatchEvent(i),nn=!1)}),addEventListener(Yr,function(i){i=i.detail,nn||pi(i)}));var En,nn=!1,mo=function(){};return typeof BroadcastChannel<"u"&&((mo=function(){(En=new BroadcastChannel(Yr)).onmessage=function(i){return i.data&&pi(i.data)}})(),typeof En.unref=="function"&&En.unref(),tn(zn,function(i){nn||En.postMessage(i)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(i){if(!Wt.disableBfCache&&i.persisted){Ce&&console.debug("Dexie: handling persisted pagehide"),En?.close();for(var s=0,a=wn;s<a.length;s++)a[s].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(i){!Wt.disableBfCache&&i.persisted&&(Ce&&console.debug("Dexie: handling persisted pageshow"),mo(),pi({all:new st(-1/0,[[]])}))})),K.rejectionMapper=function(i,s){return!i||i instanceof Te||i instanceof TypeError||i instanceof SyntaxError||!i.name||!Be[i.name]?i:(s=new Be[i.name](s||i.message,i),"stack"in i&&Z(s,"stack",{get:function(){return this.inner.stack}}),s)},Fe(Ce),o(Wt,Object.freeze({__proto__:null,Dexie:Wt,liveQuery:po,Entity:Wi,cmp:ye,PropModSymbol:Ut,PropModification:Dn,replacePrefix:function(i,s){return new Dn({replacePrefix:[i,s]})},add:function(i){return new Dn({add:i})},remove:function(i){return new Dn({remove:i})},default:Wt,RangeSet:st,mergeRanges:Mn,rangesOverlap:ro}),{default:Wt}),Wt})})(kr)),kr.exports}var Ma=La();const Ei=Ia(Ma),Ao=Symbol.for("Dexie"),Ar=globalThis[Ao]||(globalThis[Ao]=Ei);if(Ei.semVer!==Ar.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Ei.semVer} and ${Ar.semVer}`);const{liveQuery:os,mergeRanges:wd,rangesOverlap:xd,RangeSet:$d,cmp:Ed,Entity:Cd,PropModSymbol:kd,PropModification:_d,replacePrefix:Sd,add:Pd,remove:Ad}=Ar,Na="easydb";let wr=null;function qa(){if(wr)return wr;const e=new Ar(Na);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),wr={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins")},wr}function xr(e){return{async find(n){if(!n||Object.keys(n).length===0)return e.toArray();const r=Object.entries(n);return e.filter(o=>ss(o,r)).toArray()},async findOne(n){return await e.get(n)??null},async insert(n){return await e.add(n),n},async bulkInsert(n){return n.length===0?[]:(await e.bulkAdd(n),n)},async upsert(n){return await e.put(n),n},async patch(n,r){if(await e.update(n,r)===0)throw new Error(`patch: no doc with id=${n}`);const t=await e.get(n);if(!t)throw new Error(`patch: doc id=${n} vanished after update`);return t},async remove(n){await e.delete(n)},async bulkRemove(n){n.length!==0&&await e.bulkDelete(n)},subscribe(n){const o=os(()=>e.toArray()).subscribe({next:t=>n(t)});return()=>o.unsubscribe()}}}function Ua(e,n){return{async find(r){const o=e.where("tableId").equals(n);if(!r||Object.keys(r).length===0)return o.toArray();const t=Object.entries(r);return o.filter(l=>ss(l,t)).toArray()},async findOne(r){const o=await e.get(r);return o&&o.tableId===n?o:null},async insert(r){const o={...r,tableId:n};return await e.add(o),o},async bulkInsert(r){if(r.length===0)return[];const o=r.map(t=>({...t,tableId:n}));return await e.bulkAdd(o),o},async upsert(r){const o={...r,tableId:n};return await e.put(o),o},async patch(r,o){if(await e.update(r,o)===0)throw new Error(`row patch: no row ${r}`);const l=await e.get(r);if(!l)throw new Error(`row patch: row ${r} vanished after update`);return l},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},subscribe(r){const t=os(()=>e.where("tableId").equals(n).toArray()).subscribe({next:l=>r(l)});return()=>t.unsubscribe()}}}function ss(e,n){for(const[r,o]of n)if(e[r]!==o)return!1;return!0}function Wa(e){return{workspaces:xr(e.workspaces),tables:xr(e.tables),settings:xr(e.settings),plugins:xr(e.plugins),rows:n=>Ua(e.rows,n)}}function Ha(){const e=new Map;return{on(n,r){let o=e.get(n);return o||(o=new Set,e.set(n,o)),o.add(r),()=>{o.delete(r)}},emit(n,r){const o=e.get(n);if(o)for(const t of o)try{t(r)}catch(l){console.error(`[event:${String(n)}] listener threw`,l)}}}}const Yn=ct`
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
`;function Xn(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const n=e.currentTarget;if(!(n instanceof HTMLElement))return;const r=n.querySelector("form");r&&(e.preventDefault(),r.requestSubmit())}const jo=new WeakSet;function Gn(e,n){if(jo.has(n))return;jo.add(n);let r=0,o=0,t=0,l=0,c=!1;n.style.cursor="grab",n.style.touchAction="none",n.style.userSelect="none",n.addEventListener("pointerdown",g=>{if(g.target.closest("button, input, textarea, select, a, label"))return;c=!0,r=g.clientX,o=g.clientY;const F=e.getBoundingClientRect();t=F.left,l=F.top,n.setPointerCapture(g.pointerId),n.style.cursor="grabbing"}),n.addEventListener("pointermove",g=>{if(!c)return;const T=g.clientX-r,F=g.clientY-o,R=-e.offsetWidth+80,j=window.innerWidth-80,V=0,Z=window.innerHeight-40,le=Math.max(R,Math.min(j,t+T)),Je=Math.max(V,Math.min(Z,l+F));e.style.position="fixed",e.style.left=`${le}px`,e.style.top=`${Je}px`,e.style.margin="0"});const f=g=>{if(c){c=!1;try{n.releasePointerCapture(g.pointerId)}catch{}n.style.cursor="grab"}};n.addEventListener("pointerup",f),n.addEventListener("pointercancel",f)}var Ka=Object.defineProperty,Va=Object.getOwnPropertyDescriptor,as=(e,n,r,o)=>{for(var t=o>1?void 0:o?Va(n,r):n,l=e.length-1,c;l>=0;l--)(c=e[l])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&Ka(n,r,t),t};let _t=class extends nt{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const n=this.current;n&&(n.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),_t.instance=this}disconnectedCallback(){super.disconnectedCallback(),_t.instance===this&&(_t.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&Gn(this.dialogEl,e)}alert(e,n="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:n,message:e,resolve:r}})}async confirm(e,n="Confirm"){return await this.choice(e,["Yes","No"],n)==="Yes"}prompt(e,n="",r="Input"){return this.enqueue(o=>{this.current={kind:"prompt",title:r,message:e,value:n,resolve:o}})}choice(e,n,r="Choose"){return this.enqueue(o=>{this.current={kind:"choice",title:r,message:e,options:n,resolve:o}})}enqueue(e){return new Promise(n=>{const r=()=>{e(n),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(e){const n=this.current;n&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{n.kind==="alert"?n.resolve():n.resolve(e);const r=this.queue.shift();r&&r()}))}render(){const e=this.current;return J`
      <dialog @cancel=${this.onCancel} @keydown=${Xn}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):Ue}
      </dialog>
    `}renderBody(e){switch(e.kind){case"alert":return J`
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
        `;case"prompt":return J`
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
        `;case"choice":return J`
          <div class="dialog-header">
            <h2>${e.title}</h2>
            <div class="header-actions">
              <button class="ghost" @click=${()=>this.closeAndResolve(null)}>Cancel</button>
            </div>
          </div>
          <div class="dialog-body">
            ${e.message?J`<p class="message">${e.message}</p>`:Ue}
            <div class="choices">
              ${e.options.map(n=>J`<button class="choice" @click=${()=>this.closeAndResolve(n)}>
                    ${n}
                  </button>`)}
            </div>
          </div>
        `}}};_t.instance=null;_t.styles=[Yn,ct`
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
    `];as([ne()],_t.prototype,"current",2);_t=as([mt("host-dialogs")],_t);const Vt=ct`
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
`;var Ya=Object.defineProperty,Xa=Object.getOwnPropertyDescriptor,ls=(e,n,r,o)=>{for(var t=o>1?void 0:o?Xa(n,r):n,l=e.length-1,c;l>=0;l--)(c=e[l])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&Ya(n,r,t),t};let Ht=class extends nt{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),Ht.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ht.instance===this&&(Ht.instance=null)}show(e,n){const r={id:this.nextId++,kind:n?.kind??"info",message:e,...n?.title?{title:n.title}:{}};this.toasts=[...this.toasts,r];const o=n?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),o)}dismiss(e){const n=this.toasts.find(r=>r.id===e);n?.timer!=null&&window.clearTimeout(n.timer),this.toasts=this.toasts.filter(r=>r.id!==e)}render(){return J`
      ${this.toasts.map(e=>J`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${Qa(e.kind)}</span>
            <span class="body">
              ${e.title?J`<strong>${e.title}</strong>`:""}${Ga(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};Ht.instance=null;Ht.styles=[Vt,ct`
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
    `];ls([ne()],Ht.prototype,"toasts",2);Ht=ls([mt("toast-host")],Ht);function Ga(e){const n=/(https?:\/\/[^\s)]+)/g,r=[];let o=0,t;for(;(t=n.exec(e))!==null;)t.index>o&&r.push(e.slice(o,t.index)),r.push({url:t[0]}),o=t.index+t[0].length;return o<e.length&&r.push(e.slice(o)),r.length===0?e:r.map(l=>typeof l=="string"?l:J`<a href=${l.url} target="_blank" rel="noopener noreferrer">${l.url}</a>`)}function Qa(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function Ja(){return{headerButtons:[],footerButtons:[],tableButtons:[],importers:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map}}function pn(e,n){return e.push(n),()=>{const r=e.indexOf(n);r>=0&&e.splice(r,1)}}function bi(e,n,r){return e.set(n,r),()=>{e.get(n)===r&&e.delete(n)}}function Za(e){return{registerHeaderButton:n=>pn(e.headerButtons,n),registerFooterButton:n=>pn(e.footerButtons,n),registerTableButton:n=>pn(e.tableButtons,n),registerImporter:n=>pn(e.importers,n),registerExporter:n=>pn(e.exporters,n),registerUrlSource:n=>pn(e.urlSources,n),registerDropHandler:n=>pn(e.dropHandlers,n),registerCellRenderer:(n,r)=>bi(e.cellRenderers,n,r),registerRowRenderer:(n,r)=>bi(e.rowRenderers,n,r),registerTableRenderer:(n,r)=>bi(e.tableRenderers,n,r),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},dialogs:el}}const el={async alert(e,n){const r=_t.instance;if(r)return r.alert(e,n);window.alert(e)},async confirm(e,n){const r=_t.instance;return r?r.confirm(e,n):window.confirm(e)},async prompt(e,n,r){const o=_t.instance;return o?o.prompt(e,n,r):window.prompt(e,n)??null},async choice(e,n,r){const o=_t.instance;if(o)return o.choice(e,n,r);const t=window.prompt(`${e}

Options: ${n.join(", ")}`);return t&&n.includes(t)?t:null},toast(e,n){const r=Ht.instance;r?r.show(e,n):console.log(`[toast:${n?.kind??"info"}]`,n?.title??"",e)}};function tl(e){const n=Za(e.registries),r={open(o){return console.warn("[host] windows.open is stubbed until Phase 5",o.id),{id:o.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:n,windows:r,backend:{fetch:async(o,t)=>{const l=await nl(e.store),c=t?.body instanceof ArrayBuffer;if(!l||c)return globalThis.fetch(o,t);const f={url:o};return t?.method&&(f.method=t.method),t?.headers&&(f.headers=t.headers),typeof t?.body=="string"&&(f.body=t.body),globalThis.fetch(`${l}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)})},async saveFile(o,t,l){const c=typeof t=="string"?new Blob([t],{type:l??"application/octet-stream"}):t,f=URL.createObjectURL(c),g=document.createElement("a");g.href=f,g.download=o,g.rel="noopener",document.body.appendChild(g),g.click(),g.remove(),setTimeout(()=>URL.revokeObjectURL(f),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function nl(e){const r=(await e.settings.findOne("server-sync:url"))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}const rl={name:"csv-import",version:"0.1.0",description:"Drag-and-drop CSV files to create typed tables.",author:"easyDBAccess built-ins"};function il(e){e.ui.registerImporter(ol),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async n=>{const o=bl(n).filter(yl);if(o.length===0)return!1;n.preventDefault();for(const t of o)await sl(e,t);return!0})}const ol={id:"csv",label:"CSV",accept:[".csv","text/csv"],async parse(e){const n=typeof e=="string"?e:await e.text();return Dr(n)}};async function sl(e,n){const r=e.workspaceId();if(!r)throw new Error("csv-import: no active workspace");const o=await n.text(),t=n.name.replace(/\.csv$/i,"")||"imported",l=(await e.store.tables.find()).find(F=>F.workspaceId===r&&F.name===t);let c,f;if(l){const F=await e.ui.dialogs.choice(`A table named "${t}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!F)return;F==="Append rows"?(f="append",c=l.id):F==="Overwrite rows"?(f="overwrite",c=l.id):(f="new",c=$r())}else f="new",c=$r();e.events.emit("import:before",{source:"csv",tableId:c});let g;if(f==="new"){const F=Dr(o),R=l?`${t} (${Date.now().toString(36)})`:t;await e.store.tables.insert({id:c,workspaceId:r,name:R,code:Ci(R),columns:F.columns,view:"table",updatedAt:Date.now()}),g=F.rows.map(j=>({id:$r(),tableId:c,data:j,updatedAt:Date.now()}))}else{const F=l.columns;if(g=cs(o).rows.map(j=>{const V={};for(let Z=0;Z<F.length;Z++){const le=F[Z];V[le.field]=fs(j[Z]??"",le.type)}return{id:$r(),tableId:c,data:V,updatedAt:Date.now()}}),f==="overwrite"){const j=e.store.rows(c),V=await j.find();await j.bulkRemove(V.map(Z=>Z.id))}}await e.store.rows(c).bulkInsert(g),e.events.emit("import:after",{source:"csv",tableId:c,rowCount:g.length})}function cs(e){const n=e.replace(/﻿/,""),r=us(n),o=ds(n,r);if(o.length===0)return{header:[],rows:[]};const t=o[0],l=o.slice(1).filter(c=>!(c.length===1&&c[0]===""));return{header:t,rows:l}}function Dr(e){const n=e.replace(/﻿/,""),r=us(n),o=ds(n,r);if(o.length===0)return{columns:[],rows:[]};const t=o[0],l=o.slice(1).filter(j=>!(j.length===1&&j[0]==="")),c=t.map((j,V)=>cl(j,V)),f=c.map(j=>j.field),g=l.map(j=>{const V={};for(let Z=0;Z<f.length;Z++)V[f[Z]]=j[Z]??"";return V}),T=c.map((j,V)=>j.type?j.type:ul(g.map(Z=>Z[f[V]]??"").filter(Z=>Z.length>0))),F=c.map((j,V)=>{const Z=T[V]??"string",le={field:j.field,label:j.label,type:Z},Je=ll(Z),Ne=j.renderer??Je;return Ne&&(le.renderer=Ne),j.default!==void 0&&(le.default=j.default),j.max!=null&&(le.max=j.max),j.unique&&(le.unique=!0),j.notnull&&(le.notnull=!0),j.hidden&&(le.hidden=!0),le}),R=g.map(j=>{const V={};for(let Z=0;Z<f.length;Z++){const le=f[Z],Je=T[Z]??"string";V[le]=fs(j[le]??"",Je)}return V});return{columns:F,rows:R}}const al=new Set(["string","number","boolean","date","datetime"]),To={color:"color",image:"image"};function ll(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function cl(e,n){const r=e.trim();if(!r.includes(":"))return{field:Ci(r||`col_${n+1}`),label:r||`Column ${n+1}`};const o=r.split(":"),t=Ci(o[0]||`col_${n+1}`),l=(o[1]??o[0]??"").trim()||t,c={field:t,label:l},f=(o[2]??"").trim();f&&(al.has(f)?c.type=f:To[f]&&(c.type="string",c.renderer=To[f]));const g=(o[3]??"").trim();g&&(c.default=g);const T=(o[4]??"").trim();if(T){const R=Number(T);Number.isFinite(R)&&R>0&&(c.max=R)}const F=(o[5]??"").toLowerCase();return F.includes("u")&&(c.unique=!0),F.includes("n")&&(c.notnull=!0),F.includes("h")&&(c.hidden=!0),c}function us(e){const n=e.split(/\r?\n/).slice(0,5).join(`
`),r={",":0,";":0,"	":0};for(const l of n)l in r&&(r[l]+=1);let o=",",t=-1;for(const l of[",",";","	"])(r[l]??0)>t&&(o=l,t=r[l]??0);return o}function ds(e,n){const r=[];let o=[],t="",l=!1;for(let c=0;c<e.length;c++){const f=e[c];l?f==='"'?e[c+1]==='"'?(t+='"',c++):l=!1:t+=f:f==='"'?l=!0:f===n?(o.push(t),t=""):f===`
`||f==="\r"?(f==="\r"&&e[c+1]===`
`&&c++,o.push(t),r.push(o),o=[],t=""):t+=f}return(t.length>0||o.length>0)&&(o.push(t),r.push(o)),r}function ul(e){return e.length===0?"string":e.every(fl)?"boolean":e.every(hl)?"number":e.every(ml)?"datetime":e.every(pl)?"date":"string"}const dl=/^(true|false|yes|no|0|1)$/i;function fl(e){return dl.test(e.trim())}function hl(e){const n=e.trim();if(n==="")return!1;const r=Number(n);return Number.isFinite(r)}function pl(e){const n=e.trim();return n===""||/^\d+$/.test(n)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(n)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(n))}function ml(e){const n=e.trim();return n===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(n)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(n))}function fs(e,n){const r=e.trim();switch(n){case"number":{if(r==="")return null;const o=Number(r);return Number.isFinite(o)?o:r}case"boolean":return r===""?null:/^(true|yes|1)$/i.test(r);case"date":return hs(r);case"datetime":return gl(r);default:return e}}function hs(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const n=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(n){let o=parseInt(n[1],10),t=parseInt(n[2],10);const l=n[3];let c=parseInt(l,10);l.length===2&&(c+=2e3);let f,g;return o>12?(f=o,g=t):t>12?(g=o,f=t):(f=o,g=t),`${c.toString().padStart(4,"0")}-${g.toString().padStart(2,"0")}-${f.toString().padStart(2,"0")}`}const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toISOString().slice(0,10)}function gl(e){if(e==="")return"";const n=e.replace(/\s+/,"T"),r=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(n);if(r)return`${r[1]}T${r[2].padStart(5,"0")}`;const o=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(o)return`${hs(`${o[1]}/${o[2]}/${o[3]}`)}T${o[4].padStart(5,"0")}`;const t=new Date(e);if(!Number.isNaN(t.getTime())){const l=t.toISOString();return`${l.slice(0,10)}T${l.slice(11,16)}`}return e}function bl(e){const n=e.dataTransfer;if(!n)return[];if(n.files&&n.files.length>0)return Array.from(n.files);if(n.items){const r=[];for(const o of Array.from(n.items))if(o.kind==="file"){const t=o.getAsFile();t&&r.push(t)}return r}return[]}function yl(e){return!!(/\.csv$/i.test(e.name)||e.type==="text/csv"||e.type==="application/csv")}function Ci(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function $r(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const vl=Object.freeze(Object.defineProperty({__proto__:null,init:il,meta:rl,parseCsv:Dr,parseCsvRaw:cs},Symbol.toStringTag,{value:"Module"})),wl={name:"csv-export",version:"0.1.0",description:"Export a single table as a .csv file via a per-table button.",author:"easyDBAccess built-ins"},xl={id:"csv",label:"CSV",extension:".csv",async serialize(e,n){return Ri(e,n)}};function $l(e){e.ui.registerExporter(xl),e.ui.registerTableButton({id:"csv-export:download",label:"CSV",icon:"file_download",tooltip:"Download this table as a .csv file",onClick:async(n,r)=>{const o=await n.store.tables.findOne(r.tableId);if(!o)return;const t=await n.store.rows(o.id).find(),l=Ri(o,t);await n.backend.saveFile(`${o.code||o.name||"table"}.csv`,l,"text/csv")}})}function Ri(e,n){const r=e.columns.map(l=>l.field),o=e.columns.map(l=>Fo(l.label??l.field)),t=n.map(l=>r.map(c=>Fo(El(l.data[c]))).join(","));return[o.join(","),...t].join(`\r
`)}function El(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function Fo(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const Cl=Object.freeze(Object.defineProperty({__proto__:null,init:$l,meta:wl,serializeCsv:Ri},Symbol.toStringTag,{value:"Module"})),kl={name:"json-import",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"easyDBAccess built-ins"};function _l(e){e.ui.registerImporter(Sl),e.ui.registerDropHandler(async n=>{const o=Dl(n).filter(Rl);if(o.length===0)return!1;n.preventDefault();for(const t of o)await Pl(e,t);return!0})}const Sl={id:"json",label:"JSON",accept:[".json",".db.json","application/json"],async parse(e){const n=typeof e=="string"?e:await e.text(),r=JSON.parse(n),t=Rr(r,"imported")[0];return{columns:t?.columns??[],rows:t?.rows??[]}}};async function Pl(e,n){await zi(e,await n.text(),n.name)}async function zi(e,n,r){const o=e.workspaceId();if(!o)throw new Error("json-import: no active workspace");let t;try{t=JSON.parse(n)}catch(j){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${r}: ${j.message}`)});return}const l=r.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",c=Rr(t,l);if(c.length===0)return;const f=(await e.store.tables.find()).filter(j=>j.workspaceId===o),g=new Set(c.map(j=>j.name)),T=f.filter(j=>g.has(j.name));let F;if(T.length===0&&c.length===1)F="append-new";else{const j=T.length>0?[`Overwrite matching (${T.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],V=await e.ui.dialogs.choice(`Importing ${c.length} table${c.length===1?"":"s"} from "${r}".${T.length>0?`

${T.length} table${T.length===1?"":"s"} share a name with existing data.`:""}`,j,"JSON import");if(!V)return;V.startsWith("Overwrite matching")?F="overwrite-matching":V==="Replace entire workspace"?F="replace-workspace":F="append-new"}if(F==="replace-workspace")for(const j of f){const V=e.store.rows(j.id),Z=await V.find();await V.bulkRemove(Z.map(le=>le.id)),await e.store.tables.remove(j.id)}const R=new Map(f.map(j=>[j.name,j]));for(const j of c){let V;const Z=F==="overwrite-matching"?R.get(j.name):void 0;if(Z){V=Z.id;const Ne=e.store.rows(V),gt=await Ne.find();await Ne.bulkRemove(gt.map(Yt=>Yt.id)),await e.store.tables.patch(V,{columns:j.columns,...j.windowGeometry?{windowGeometry:j.windowGeometry}:{},...j.sortColumn?{sortColumn:j.sortColumn,sortAsc:j.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},updatedAt:Date.now()})}else V=zo(),e.events.emit("import:before",{source:"json",tableId:V}),await e.store.tables.insert({id:V,workspaceId:o,name:j.name,code:zl(j.name),columns:j.columns,view:"table",...j.windowGeometry?{windowGeometry:j.windowGeometry}:{},...j.sortColumn?{sortColumn:j.sortColumn,sortAsc:j.sortAsc??!0}:{},updatedAt:Date.now()});const le=e.store.rows(V),Je=j.rows.map(Ne=>({id:zo(),tableId:V,data:Ne,updatedAt:Date.now()}));await le.bulkInsert(Je),e.events.emit("import:after",{source:"json",tableId:V,rowCount:j.rows.length})}}function Rr(e,n){if(jt(e)&&Oo(e))return Do(e);if(jt(e)&&Array.isArray(e.tables)){const r=e,o=[];for(const t of r.tables){if(jl(t)){const l=t,c=jt(l.windowGeometry)?l.windowGeometry:void 0,f=typeof l.sortColumn=="string"?l.sortColumn:void 0,g=typeof l.sortAsc=="boolean"?l.sortAsc:void 0;o.push({name:String(t.name),columns:t.columns.map(Tl),rows:Array.isArray(t.rows)?t.rows.filter(jt):[],...c?{windowGeometry:c}:{},...f?{sortColumn:f,sortAsc:g??!0}:{}});continue}jt(t)&&Oo(t)&&o.push(...Do(t))}return o}if(Array.isArray(e)){const r=e.filter(jt);return r.length===0?[]:[{name:n,...Ro(r)}]}return jt(e)?[{name:n,...Ro([e])}]:[]}function Oo(e){for(const[n,r]of Object.entries(e)){if(!/\.table\.json$/.test(n)||!jt(r))continue;const o=r;if(Array.isArray(o.dataArray)&&Array.isArray(o.columns))return!0}return!1}function Do(e){const n=[];for(const[r,o]of Object.entries(e)){if(!/\.table\.json$/.test(r)||!jt(o))continue;const t=o;if(!Array.isArray(t.dataArray)||!Array.isArray(t.columns))continue;const l=r.replace(/\.table\.json$/,""),c=t.columns.map(F=>Al(F)),f=c.map(F=>F.field),g=t.dataArray.filter(F=>Array.isArray(F)).map(F=>{const R={};for(let j=0;j<f.length;j++)R[f[j]]=F[j];return R}),T={name:l,columns:c,rows:g};if(t.elementRect&&typeof t.elementRect.x=="number"&&typeof t.elementRect.y=="number"){const F=t.elementRect;T.windowGeometry={x:F.x,y:F.y,w:F.width??600,h:F.height??400,z:F.zIndex??100,minimized:!!F.minimized,maximized:!!F.maximized}}typeof t.sortColumn=="number"&&t.sortColumn>=0&&t.sortColumn<f.length&&(T.sortColumn=f[t.sortColumn],T.sortAsc=(t.sortDirection??"asc")!=="desc"),n.push(T)}return n}function Al(e){const n=String(e.field??"col"),r=String(e.name??n),o=typeof e.type=="string"?e.type:"string",t={field:n,label:r,type:o};return e.isUnique&&(t.unique=!0),e.isNotNull&&(t.notnull=!0),t}function jl(e){return jt(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function Tl(e){if(!jt(e))return{field:"col",label:"Col",type:"string"};const n=e,r=String(n.field??"col");let o=typeof n.type=="string"?n.type:"string",t=typeof n.renderer=="string"?n.renderer:void 0;(o==="color"||o==="image")&&(t=t??o,o="string");const l={field:r,label:String(n.label??r),type:o};return t&&(l.renderer=t),typeof n.script=="string"&&(l.script=n.script),l}function Ro(e){const n=new Set;for(const t of e)for(const l of Object.keys(t))n.add(l);return{columns:Array.from(n).map(t=>({field:t,label:t,type:Fl(e.map(l=>l[t]))})),rows:e}}function Fl(e){const n=e.filter(r=>r!=null&&r!=="");return n.length===0?"string":n.every(r=>typeof r=="boolean")?"boolean":n.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":n.every(r=>typeof r=="string"&&Ol(r))?"date":"string"}function Ol(e){if(/^\d+$/.test(e))return!1;const n=new Date(e);return!Number.isNaN(n.getTime())}function jt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Dl(e){const n=e.dataTransfer;if(!n)return[];if(n.files&&n.files.length>0)return Array.from(n.files);if(n.items){const r=[];for(const o of Array.from(n.items))if(o.kind==="file"){const t=o.getAsFile();t&&r.push(t)}return r}return[]}function Rl(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}function zl(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function zo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Il=Object.freeze(Object.defineProperty({__proto__:null,importJsonText:zi,init:_l,meta:kl,parsedToTables:Rr},Symbol.toStringTag,{value:"Module"}));class Ii extends Error{constructor(n,r){const o=n?.error||n?.errors&&n.errors.join("; ")||"Datasette request failed";super(o),this.name="DatasetteError",this.status=r??n?.status,this.errors=n?.errors||(n?.error?[n.error]:[])}}function ps(e){const n=new URL(String(e).trim());n.pathname=n.pathname.replace(/\.(json|csv)$/i,"");const r=n.pathname.split("/").filter(Boolean),o={};for(const[f,g]of n.searchParams)o[f]=g;let t,l=null,c=null;if(r.length>=2){c=decodeURIComponent(r[r.length-1]),l=decodeURIComponent(r[r.length-2]);const f=r.slice(0,r.length-2).join("/");t=n.origin+(f?"/"+f:"")}else r.length===1&&(l=decodeURIComponent(r[0])),t=n.origin;return{base:t,db:l,table:c,query:o}}function ms(e,n={}){const r=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[o,t]of Object.entries({...e.query,...n}))t!=null&&r.searchParams.set(o,String(t));return r.toString()}function Bl(e,n){const r=new URL(e);for(const[o,t]of Object.entries(n))t!=null&&!r.searchParams.has(o)&&r.searchParams.set(o,String(t));return r.toString()}function Ll(e){return{rows:Array.isArray(e?.rows)?e.rows:[],nextUrl:e?.next_url??null,hasMore:e?.next_url!=null,truncated:e?.truncated===!0}}function Ml(e,n=""){const r=String(e||"").toUpperCase();return r.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(n)?"boolean":"number":r.includes("REAL")||r.includes("FLOA")||r.includes("DOUB")||r.includes("NUM")||r.includes("DEC")?"number":r.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(n)?"datetime":"string"}function Nl(e){const n=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],r=Array.isArray(e?.columns)?e.columns.slice():[],o={},t=e?.column_details;if(Array.isArray(t))for(const f of t)o[f.column??f.name]=f;else t&&typeof t=="object"&&Object.assign(o,t);for(const f of r)f in o||(o[f]={});return{columns:(r.length?r:Object.keys(o)).map(f=>{const g=o[f]||{},T=g.is_pk===!0||g.is_pk===1||n.includes(f),F={field:f,label:ql(f),type:Ml(g.sqlite_type??g.type,f)};return(g.notnull===!0||g.notnull===1||T)&&(F.notnull=!0),T&&(F.unique=!0),g.hidden===!0&&(F.hidden=!0),F}),pks:n}}function ql(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,n=>n.toUpperCase()).trim()}async function Ul(e,n){const r=ms(n,{_shape:"objects",_size:0,_extra:"columns,column_details,primary_keys,count"}),o=await e(r),t=await o.json();if(t&&t.ok===!1)throw new Ii(t,o.status);const{columns:l,pks:c}=Nl(t);return{columns:l,pks:c,count:t?.count??null,raw:t}}async function Wl(e,n,r={}){const o=r.maxRows??1e4,t=r.pageSize??"max";let l=ms(n,{_shape:"objects",_size:t,...r.extraParams||{}});const c=[];let f=!1,g=!1,T=0;for(;l;){const F=await e(l),R=await F.json();if(R&&R.ok===!1)throw new Ii(R,F.status);const j=Ll(R);c.push(...j.rows),f=f||j.truncated,T+=1,j.nextUrl&&c.length<o?l=Bl(j.nextUrl,{_shape:"objects"}):(g=j.nextUrl!=null,l=null)}return{rows:c,truncated:f,hasMore:g,pages:T}}const Hl={name:"datasette-source",version:"0.1.0",description:"Import a table from any online Datasette instance by URL",author:"easyDBAccess built-ins",optional:!0},yi={maxImportRows:1e4,pageSize:"max"},Kl="https://latest.datasette.io/fixtures/facetable";function Vl(e){e.ui.registerUrlSource({id:"datasette",label:"Datasette table…",async run(n,{url:r}){const o=r||await n.ui.dialogs.prompt(`Datasette table URL

e.g. ${Kl}`,"","Import from Datasette");o&&await Io(n,o)}}),e.ui.registerDropHandler(async(n,r)=>{const o=n.dataTransfer?.getData("text/plain")||"";return Yl(o)?(n.preventDefault(),await Io(r,o),!0):!1})}async function Io(e,n){try{await gs(e,n)}catch(r){const o=r instanceof Ii?`Datasette error (${r.status??"?"}): ${r.message}`:`Could not import: ${r?.message??r}`;await e.ui.dialogs.alert(o,"Datasette import failed")}}function Yl(e){try{const n=ps(e);return!!(n.db&&n.table)}catch{return!1}}async function gs(e,n){const r=e.workspaceId();if(!r)throw new Error("datasette-source: no active workspace");const o=ps(n);if(!o.db||!o.table)throw new Error("URL must point to a table, e.g. .../<database>/<table>");const t=(le,Je)=>e.backend.fetch(le,Je),{columns:l,count:c}=await Ul(t,o),{rows:f,truncated:g,hasMore:T,pages:F}=await Wl(t,o,{maxRows:yi.maxImportRows,pageSize:yi.pageSize}),R=Date.now(),j=Bo();e.events.emit("import:before",{source:"datasette",tableId:j}),await e.store.tables.insert({id:j,workspaceId:r,name:`${o.db}/${o.table}`,code:Xl(`${o.db}-${o.table}`),columns:l,view:"table",updatedAt:R});const V=f.map(le=>({id:Bo(),tableId:j,data:le,updatedAt:R}));await e.store.rows(j).bulkInsert(V),e.events.emit("import:after",{source:"datasette",tableId:j,rowCount:f.length});const Z=c!=null?` of ${c}`:"";return T||g?e.ui.dialogs.toast(`Imported first ${f.length}${Z} rows from ${o.table} — more available (capped at ${yi.maxImportRows}). Live paging arrives with the Phase-2 connector.`,{kind:"warning"}):e.ui.dialogs.toast(`Imported ${f.length} rows from ${o.table} (${F} page${F===1?"":"s"}).`,{kind:"success"}),j}function Xl(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Bo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Gl=Object.freeze(Object.defineProperty({__proto__:null,importDatasetteTable:gs,init:Vl,meta:Hl},Symbol.toStringTag,{value:"Module"})),Ql={name:"dump-export",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file.",author:"easyDBAccess built-ins"};function Jl(e){e.ui.registerFooterButton({id:"dump-export:dump",label:"Dump",icon:"archive",tooltip:"Export the current workspace as a JSON dump file",onClick:async()=>{const n=e.workspaceId();if(!n)return;const r=await zr(e);await e.backend.saveFile(`workspace-${n}.db.json`,r,"application/json")}})}async function zr(e){const n=e.workspaceId();if(!n)throw new Error("dump-export: no active workspace");const r=(await e.store.tables.find()).filter(t=>t.workspaceId===n),o={workspaceId:n,exportedAt:Date.now(),tables:[]};for(const t of r){const l=await e.store.rows(t.id).find();o.tables.push({name:t.name,columns:t.columns,rows:l.map(c=>c.data),...t.windowGeometry?{windowGeometry:t.windowGeometry}:{},...t.sortColumn?{sortColumn:t.sortColumn,sortAsc:t.sortAsc??!0}:{}})}return JSON.stringify(o,null,2)}const Zl=Object.freeze(Object.defineProperty({__proto__:null,init:Jl,meta:Ql,serializeWorkspace:zr},Symbol.toStringTag,{value:"Module"})),ec={name:"sql-export",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"easyDBAccess built-ins"};function tc(e){e.ui.registerFooterButton({id:"sql-export:dump",label:"SQL",icon:"storage",tooltip:"Export the current workspace as a .sql script",onClick:async()=>{const n=e.workspaceId();if(!n)return;const r=await bs(e);await e.backend.saveFile(`workspace-${n}.sql`,r,"application/sql")}})}async function bs(e){const n=e.workspaceId();if(!n)throw new Error("sql-export: no active workspace");const r=(await e.store.tables.find()).filter(t=>t.workspaceId===n),o=["-- easyDBAccess SQL dump",`-- workspace: ${n}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const t of r){const l=await e.store.rows(t.id).find();o.push(nc(t,l),"")}return o.push("COMMIT;",""),o.join(`
`)}function nc(e,n){const r=ki(e.code||e.name||`table_${e.id}`),o=['  "__id" TEXT PRIMARY KEY',...e.columns.map(l=>`  ${rc(l)}`)],t=[`DROP TABLE IF EXISTS "${r}";`,`CREATE TABLE "${r}" (`,o.join(`,
`),");"];if(n.length>0){const c=["__id",...e.columns.map(f=>f.field)].map(f=>`"${ki(f)}"`).join(", ");for(const f of n){const g=[Lo(f.id),...e.columns.map(T=>Lo(f.data[T.field],T.type))];t.push(`INSERT INTO "${r}" (${c}) VALUES (${g.join(", ")});`)}}return t.join(`
`)}function rc(e){const n=[`"${ki(e.field)}"`,ic(e.type)];return e.notnull&&n.push("NOT NULL"),e.unique&&n.push("UNIQUE"),n.join(" ")}function ic(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function Lo(e,n){if(e==null)return"NULL";if(n==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const r=oc(e);return r===null?"NULL":Er(r)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?Er(e.toISOString()):Er(typeof e=="string"?e:JSON.stringify(e))}function oc(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?Mo(e):null;if(typeof e=="string"){const n=e.trim();if(n.length===0)return null;const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(n);if(r)return`${r[1]}${r[2]}${r[3]}`;const o=new Date(n);return Number.isFinite(o.getTime())?Mo(o):null}return null}function Mo(e){const n=String(e.getUTCFullYear()).padStart(4,"0"),r=String(e.getUTCMonth()+1).padStart(2,"0"),o=String(e.getUTCDate()).padStart(2,"0");return`${n}${r}${o}`}function Er(e){return`'${e.replace(/'/g,"''")}'`}function ki(e){let n=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(n)&&(n=`_${n}`),n||"_"}const sc=Object.freeze(Object.defineProperty({__proto__:null,init:tc,meta:ec,serializeWorkspaceAsSql:bs},Symbol.toStringTag,{value:"Module"})),ac={name:"gist-sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"easyDBAccess built-ins"},lc="gist:";function cc(e){e.ui.registerFooterButton({id:"gist-sync:push",label:"Push",icon:"cloud_upload",tooltip:"Push the current workspace to a GitHub Gist",onClick:async()=>{try{await fc(e)}catch(n){e.ui.dialogs.toast(`Push failed: ${n.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerFooterButton({id:"gist-sync:pull",label:"Pull",icon:"cloud_download",tooltip:"Pull the latest tables from the configured Gist",onClick:async()=>{try{await hc(e)}catch(n){e.ui.dialogs.toast(`Pull failed: ${n.message}`,{kind:"error",title:"Gist sync"})}}})}async function ys(e){const n=e.workspaceId();return`${lc}${n??"default"}`}async function uc(e){const n=await ys(e),r=await e.store.settings.findOne(n);if(!r)return null;const o=r.value;return!o||!o.token||!o.user?null:{user:o.user,gistId:o.gistId??"",token:o.token}}async function vs(e,n){const r=await ys(e);await e.store.settings.upsert({key:r,value:n})}function dc(e){const n={};for(const r of e.split(";")){const o=r.indexOf("=");if(o<0)continue;const t=r.slice(0,o).trim(),l=r.slice(o+1).trim();t&&(n[t]=l)}return!n.user||!n.gist_token?null:{user:n.user,gistId:n.gist_id??"",token:n.gist_token}}async function ws(e){const n=await uc(e);if(n)return n;const r=await e.ui.dialogs.prompt(`Connection string format:
user=<github-user>;gist_id=<id>;gist_token=<pat>;

Leave gist_id empty to create a new gist on first Push.`,"","Gist credentials");if(!r)return null;const o=dc(r);return o?(await vs(e,o),o):(await e.ui.dialogs.alert("Could not parse connection string. Make sure it contains user=… and gist_token=….","Gist credentials"),null)}async function fc(e){const n=await ws(e);if(!n)return;const r=e.workspaceId();if(!r)throw new Error("no active workspace");const o=(await e.store.tables.find()).filter(g=>g.workspaceId===r);if(o.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const t={},l=[];for(const g of o){const T=await e.store.rows(g.id).find(),F=JSON.stringify(pc(g,T),null,2);F.length>1e8&&l.push(`${g.name} (${(F.length/1e6).toFixed(2)} MB)`),t[`${xs(g.name)}.table.json`]={content:F}}if(l.length>0&&!await e.ui.dialogs.confirm(`These tables exceed Gist's 100 MB-per-file limit and will be rejected:

${l.join(`
`)}

Push anyway?`,"Gist size warning"))return;t["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:r,exportedAt:Date.now(),kind:"easydb-workspace-v1"},null,2)};let c;if(n.gistId){const g=await fetch(`https://api.github.com/gists/${n.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:t,description:`easyDBAccess workspace: ${r}`})});if(!g.ok)throw new Error(await _i(g));c=await g.json()}else{const g=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${r}`,files:t})});if(!g.ok)throw new Error(await _i(g));c=await g.json(),n.gistId=c.id,await vs(e,n)}const f=c.html_url??`https://gist.github.com/${n.user}/${c.id}`;e.ui.dialogs.toast(`Pushed ${o.length} table${o.length===1?"":"s"}.  ${f}`,{kind:"success",title:"Gist sync"})}async function hc(e){const n=await ws(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const r=e.workspaceId();if(!r)throw new Error("no active workspace");const o=await fetch(`https://api.github.com/gists/${n.gistId}`,{headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)throw new Error(await _i(o));const t=await o.json(),l=Object.entries(t.files).filter(([T])=>T.endsWith(".table.json")&&!T.startsWith("_easydb"));if(l.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const c=(await e.store.tables.find()).filter(T=>T.workspaceId===r),f=new Map(c.map(T=>[T.name,T]));let g=0;for(const[,T]of l){const F=JSON.parse(T.content);if(!F.name||!Array.isArray(F.columns))continue;let R;const j=f.get(F.name);if(j){R=await e.store.tables.patch(j.id,{columns:F.columns,updatedAt:Date.now()});const Z=e.store.rows(j.id),le=await Z.find();await Z.bulkRemove(le.map(Je=>Je.id))}else R=await e.store.tables.insert({id:No(),workspaceId:r,name:F.name,code:xs(F.name),columns:F.columns,view:"table",updatedAt:Date.now()});const V=(F.rows??[]).map(Z=>({id:No(),tableId:R.id,data:Z,updatedAt:Date.now()}));await e.store.rows(R.id).bulkInsert(V),g++}e.ui.dialogs.toast(`Pulled ${g} table${g===1?"":"s"} from gist ${n.gistId}.`,{kind:"success",title:"Gist sync"})}function pc(e,n){return{name:e.name,columns:e.columns,rows:n.map(r=>r.data)}}async function _i(e){let n="";try{n=await e.text()}catch{}return`${e.status} ${e.statusText}${n?`: ${n.slice(0,200)}`:""}`}function xs(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function No(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const mc=Object.freeze(Object.defineProperty({__proto__:null,init:cc,meta:ac},Symbol.toStringTag,{value:"Module"})),$s="server-sync:url";function Es(e){return`server-sync:etag:${e}`}async function Cs(e){const r=(await e.store.settings.findOne($s))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}async function gc(e,n){await e.store.settings.upsert({key:$s,value:n.replace(/\/+$/,"")})}async function ks(e,n){const o=(await e.store.settings.findOne(Es(n)))?.value;return typeof o=="string"?o:null}async function bn(e,n,r){await e.store.settings.upsert({key:Es(n),value:r})}function Ir(e){if(!e)return null;const n=e.trim();return n.startsWith('"')&&n.endsWith('"')?n.slice(1,-1):n}function qo(e){try{const n=JSON.parse(e);return n&&typeof n=="object"&&!Array.isArray(n)&&delete n.exportedAt,JSON.stringify(n)}catch{return e}}async function _s(e,n,r){const o=Rr(r,n),t=(await e.store.tables.find()).filter(c=>c.workspaceId===n);for(const c of t){const f=e.store.rows(c.id),g=await f.find();await f.bulkRemove(g.map(T=>T.id)),await e.store.tables.remove(c.id)}let l=0;for(const c of o){const f=Uo(),g=await e.store.tables.insert({id:f,workspaceId:n,name:c.name,code:bc(c.name),columns:c.columns,view:"table",...c.windowGeometry?{windowGeometry:c.windowGeometry}:{},...c.sortColumn?{sortColumn:c.sortColumn,sortAsc:c.sortAsc??!0}:{},updatedAt:Date.now()}),T=c.rows.map(F=>({id:Uo(),tableId:g.id,data:F,updatedAt:Date.now()}));await e.store.rows(g.id).bulkInsert(T),l++}return l}function bc(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Uo(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const yc={name:"server-sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"easyDBAccess built-ins"};function vc(e){e.ui.registerFooterButton({id:"server-sync:push",label:"Sync ↑",icon:"cloud_upload",tooltip:"Push this workspace to the configured server",onClick:async()=>{try{await wc(e)}catch(n){e.ui.dialogs.toast(`Push failed: ${n.message}`,{kind:"error",title:"Server sync"})}}}),e.ui.registerFooterButton({id:"server-sync:pull",label:"Sync ↓",icon:"cloud_download",tooltip:"Pull this workspace from the configured server",onClick:async()=>{try{await xc(e)}catch(n){e.ui.dialogs.toast(`Pull failed: ${n.message}`,{kind:"error",title:"Server sync"})}}})}async function wc(e){const n=e.workspaceId();if(!n)throw new Error("no active workspace");const r=await Ss(e);if(!r)return;const o=await zr(e),t=await ks(e,n),l={"Content-Type":"application/json"};t&&(l["If-Match"]=`"${t}"`);let c=await fetch(`${r}/sync/${encodeURIComponent(n)}`,{method:"PUT",headers:l,body:o});if(c.status===412){const g=await c.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${n}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){g.currentEtag&&await bn(e,n,g.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}c=await fetch(`${r}/sync/${encodeURIComponent(n)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:o})}if(!c.ok)throw new Error(await Ps(c));const f=Ir(c.headers.get("ETag"));f&&await bn(e,n,f),e.ui.dialogs.toast(`Pushed workspace "${n}" to ${r}.`,{kind:"success",title:"Server sync"})}async function xc(e){const n=e.workspaceId();if(!n)throw new Error("no active workspace");const r=await Ss(e);if(!r||!await e.ui.dialogs.confirm(`Replace your local copy of "${n}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const t=await fetch(`${r}/sync/${encodeURIComponent(n)}`);if(t.status===404){e.ui.dialogs.toast(`Workspace "${n}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!t.ok)throw new Error(await Ps(t));const l=Ir(t.headers.get("ETag")),c=await t.json(),f=await _s(e,n,c);l&&await bn(e,n,l),e.ui.dialogs.toast(`Pulled ${f} table${f===1?"":"s"} from ${r}.`,{kind:"success",title:"Server sync"})}async function Ss(e){const n=await Cs(e);if(n)return n;const r=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!r)return null;try{new URL(r)}catch{return await e.ui.dialogs.alert(`"${r}" is not a valid URL.`,"Server sync"),null}return await gc(e,r),r.replace(/\/+$/,"")}async function Ps(e){let n="";try{n=await e.text()}catch{}return`${e.status} ${e.statusText}${n?`: ${n.slice(0,200)}`:""}`}const $c=Object.freeze(Object.defineProperty({__proto__:null,init:vc,meta:yc},Symbol.toStringTag,{value:"Module"})),Ec={name:"new-table",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"easyDBAccess built-ins"};function Cc(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const kc=Object.freeze(Object.defineProperty({__proto__:null,init:Cc,meta:Ec},Symbol.toStringTag,{value:"Module"})),_c={name:"plugin-manager-button",version:"0.1.0",description:"Registers a footer button that opens the Plugin Manager dialog.",author:"easyDBAccess built-ins"};function Sc(e){e.ui.registerFooterButton({id:"plugin-manager:open",label:"Plugins",icon:"extension",tooltip:"Add, disable, or remove plugins",onClick:()=>e.ui.openPluginManager()})}const Pc=Object.freeze(Object.defineProperty({__proto__:null,init:Sc,meta:_c},Symbol.toStringTag,{value:"Module"})),Ac={name:"core-renderers",version:"0.1.0",description:"Built-in cell renderers: date, datetime, boolean, script.",author:"easyDBAccess built-ins"};function jc(e){customElements.get("cell-date")||customElements.define("cell-date",Tc),customElements.get("cell-datetime")||customElements.define("cell-datetime",Fc),customElements.get("cell-boolean")||customElements.define("cell-boolean",Oc),customElements.get("cell-script")||customElements.define("cell-script",Rc),e.ui.registerCellRenderer("date","cell-date"),e.ui.registerCellRenderer("datetime","cell-datetime"),e.ui.registerCellRenderer("boolean","cell-boolean"),e.ui.registerCellRenderer("script","cell-script")}class Tc extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(n){this._value!==n&&(this._value=n,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const n=document.createElement("input");n.type="date",n.value=Ic(this._value),n.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",n.addEventListener("change",()=>this.commit(n.value||null)),this.append(n)}commit(n){this._value=n,this.dispatchEvent(new CustomEvent("change",{detail:{value:n},bubbles:!0,composed:!0}))}}class Fc extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(n){this._value!==n&&(this._value=n,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const n=document.createElement("input");n.type="datetime-local",n.value=Bc(this._value),n.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",n.addEventListener("change",()=>this.commit(n.value||null)),this.append(n)}commit(n){this._value=n,this.dispatchEvent(new CustomEvent("change",{detail:{value:n},bubbles:!0,composed:!0}))}}class Oc extends HTMLElement{constructor(){super(...arguments),this._value=!1}set value(n){this._value!==n&&(this._value=n,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const n=document.createElement("input");n.type="checkbox",n.checked=Dc(this._value),n.style.cssText="transform:translateY(1px);cursor:pointer",n.addEventListener("change",()=>this.commit(n.checked)),this.append(n)}commit(n){this._value=n,this.dispatchEvent(new CustomEvent("change",{detail:{value:n},bubbles:!0,composed:!0}))}}function Dc(e){return e===!0||e==="true"||e===1||e==="1"}class Rc extends HTMLElement{constructor(){super(...arguments),this._column=null,this._row={}}set column(n){this._column=n,this.render()}get column(){return this._column}set row(n){this._row=n??{},this.render()}get row(){return this._row}set value(n){}get value(){}connectedCallback(){this.render()}render(){this.innerHTML="";const n=this._column?.script;if(!n||!n.trim()){const l=document.createElement("span");l.textContent="(no script)",l.style.cssText="color:#9ca3af;font-style:italic",this.append(l);return}let r;try{r=zc(n)}catch(l){this.append(vi("compile error",l));return}let o;try{o=r(this._row)}catch(l){this.append(vi("runtime error",l));return}if(typeof o!="string"){this.append(vi("render(row) did not return a string",null));return}const t=document.createElement("span");t.style.cssText="display:inline-block;width:100%",t.innerHTML=o,this.append(t)}}const Wo=new Map;function zc(e){const n=Wo.get(e);if(n)return n;const r=new Function("row",`${e}
return render(row);`);return Wo.set(e,r),r}function vi(e,n){const r=document.createElement("span");if(r.textContent=`⚠ ${e}`,r.style.cssText="color:#b91c1c;font-size:0.8em;font-family:ui-monospace,SFMono-Regular,monospace",n){const o=n instanceof Error?n.message:String(n);r.title=o}return r}function Ic(e){if(typeof e!="string"&&typeof e!="number")return"";const n=String(e).trim();if(!n)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(n))return n;const r=new Date(n);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function Bc(e){if(typeof e!="string"&&typeof e!="number")return"";const n=String(e).trim();if(!n)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(n);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(n))return`${n}T00:00`;const o=new Date(n);if(Number.isNaN(o.getTime()))return"";const t=o.toISOString();return`${t.slice(0,10)}T${t.slice(11,16)}`}const Lc=Object.freeze(Object.defineProperty({__proto__:null,init:jc,meta:Ac},Symbol.toStringTag,{value:"Module"})),Mc={name:"cell-color",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"easyDBAccess built-ins"};function Nc(e){customElements.get("cell-color")||customElements.define("cell-color",qc),e.ui.registerCellRenderer("color","cell-color")}class qc extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(n){this._value!==n&&(this._value=n??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(n,r,o){this.value=o}render(){const n=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const r=document.createElement("input");r.type="color",r.value=n,r.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",r.addEventListener("change",()=>this.commit(r.value)),this.append(r)}commit(n){this._value=n,this.dispatchEvent(new CustomEvent("change",{detail:{value:n},bubbles:!0,composed:!0}))}}const Uc=Object.freeze(Object.defineProperty({__proto__:null,init:Nc,meta:Mc},Symbol.toStringTag,{value:"Module"})),Wc={name:"cell-image",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"easyDBAccess built-ins"};function Hc(e){customElements.get("cell-image")||customElements.define("cell-image",Kc),e.ui.registerCellRenderer("image","cell-image")}class Kc extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(n){this._value!==n&&(this._value=n??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const n=document.createElement("span");if(n.style.cssText="display:inline-flex;align-items:center;gap:0.4rem",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const o=document.createElement("img");o.src=this._value,o.alt="",o.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",n.append(o)}else{const o=document.createElement("span");o.style.color="#9ca3af",o.textContent="no image",n.append(o);const t=document.createElement("button");t.type="button",t.textContent="upload",t.style.cssText="padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",t.addEventListener("click",()=>this.pickFile()),n.append(t)}this.append(n)}pickFile(){const n=document.createElement("input");n.type="file",n.accept="image/*",n.addEventListener("change",()=>{const r=n.files?.[0];if(!r)return;const o=new FileReader;o.onload=()=>this.commit(String(o.result)),o.readAsDataURL(r)}),n.click()}commit(n){this._value=n,this.dispatchEvent(new CustomEvent("change",{detail:{value:n},bubbles:!0,composed:!0}))}}const Vc=Object.freeze(Object.defineProperty({__proto__:null,init:Hc,meta:Wc},Symbol.toStringTag,{value:"Module"})),Yc={name:"cell-link",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"easyDBAccess built-ins"};function Xc(e){customElements.get("cell-link")||customElements.define("cell-link",Gc),e.ui.registerCellRenderer("link","cell-link")}class Gc extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1}set value(n){const r=n==null?"":String(n);this._value!==r&&(this._value=r,this._editing=!1,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const n=this._value,r=this._editing?null:Qc(n),o=!this._editing&&!r?Jc(n):null,t=!this._editing&&!r&&!o?Zc(n):null;if(r||o||t){const l=document.createElement("span");l.style.cssText="display:inline-flex;align-items:center;gap:0.25rem;width:100%";const c=document.createElement("a");c.href=r?n:o?`mailto:${n.trim()}`:`tel:${n.replace(/[^\d+]/g,"")}`,r&&(c.target="_blank",c.rel="noopener noreferrer"),c.textContent=n,c.style.cssText="color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",c.title=r?`Open ${n}`:o?`Email ${n}`:`Call ${n}`;const f=document.createElement("button");f.type="button",f.title="Edit",f.textContent="✎",f.style.cssText="background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",f.addEventListener("click",g=>{g.preventDefault(),g.stopPropagation(),this._editing=!0,this.render()}),l.append(c,f),this.append(l)}else{const l=document.createElement("input");l.type="text",l.value=n,l.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",l.addEventListener("change",()=>this.commit(l.value)),l.addEventListener("keydown",c=>{c.key==="Enter"?(c.preventDefault(),this.commit(l.value)):c.key==="Escape"&&(this._editing=!1,this.render())}),this.append(l),this._editing&&setTimeout(()=>{l.focus(),l.select()},0)}}commit(n){this._value=n,this._editing=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:n},bubbles:!0,composed:!0}))}}function Qc(e){const n=e.trim();return/^https?:\/\/\S+$/i.test(n)?n:null}function Jc(e){const n=e.trim();return n&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(n)?n:null}function Zc(e){const n=e.trim();if(!n||!/^[+0-9 ()\-.]+$/.test(n)||/^\d{4}-\d{2}-\d{2}$/.test(n)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(n))return null;const r=n.replace(/\D/g,"");if(r.length<7||r.length>15)return null;const o=/[ ()\-.]/.test(n),t=n.startsWith("+");return!o&&!t&&r.length<10?null:n}const eu=Object.freeze(Object.defineProperty({__proto__:null,init:Xc,meta:Yc},Symbol.toStringTag,{value:"Module"})),tu="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",nu={name:"sample-data",version:"0.1.0",description:"Header button that loads a sample database from a URL (defaults to Northwind).",author:"easyDBAccess built-ins",optional:!0};function ru(e){e.ui.registerHeaderButton({id:"sample-data:load",label:"",icon:"database",tooltip:"Fetch a JSON dump from a URL and import it",onClick:()=>iu(e)})}async function iu(e){const n=await e.ui.dialogs.prompt("URL of a JSON dump to import. The default is the Northwind sample from this repo.",tu,"Load sample data");if(n)try{const r=await e.backend.fetch(n);if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const o=await r.text(),t=ou(n);await zi(e,o,t)}catch(r){e.ui.dialogs.toast(`Could not load ${n}: ${r.message}`,{kind:"error",title:"Sample data"})}}function ou(e){try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();return r&&r.length>0?r:"sample.db.json"}catch{return"sample.db.json"}}const su=Object.freeze(Object.defineProperty({__proto__:null,init:ru,meta:nu},Symbol.toStringTag,{value:"Module"})),au={name:"auto-sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"easyDBAccess built-ins",optional:!0},lu=6e4;let Ho=null,Si=!1;const wi=new Map;function cu(e){Ho===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(Ho=setInterval(()=>{As(e)},lu)))}async function As(e){if(Si)return;const n=e.workspaceId();if(!n)return;const r=await Cs(e);if(r)try{await uu(e,r,n)}catch(o){console.warn("[auto-sync]",o)}}async function uu(e,n,r){const o=await zr(e),t=await ks(e,r),l=await fetch(`${n}/sync/${encodeURIComponent(r)}`);if(l.status===404){await Ko(e,n,r,o,null);return}if(!l.ok)return;const c=Ir(l.headers.get("ETag")),f=await l.text();if(qo(o)===qo(f)){c&&c!==t&&await bn(e,r,c);return}if(c&&c===t){await Ko(e,n,r,o,t);return}if(!(c&&wi.get(r)===c)){Si=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${r}". Pull and replace your local copy?`,"auto-sync")){const T=JSON.parse(f),F=await _s(e,r,T);c&&await bn(e,r,c),wi.delete(r),e.ui.dialogs.toast(`Pulled ${F} table${F===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else c&&wi.set(r,c)}finally{Si=!1}}}async function Ko(e,n,r,o,t){const l={"Content-Type":"application/json"};t&&(l["If-Match"]=`"${t}"`);const c=await fetch(`${n}/sync/${encodeURIComponent(r)}`,{method:"PUT",headers:l,body:o});if(c.ok){const f=Ir(c.headers.get("ETag"));f&&await bn(e,r,f);return}if(c.status===412){const f=await c.json().catch(()=>({}));f.currentEtag&&await bn(e,r,f.currentEtag)}}const js=Object.freeze(Object.defineProperty({__proto__:null,load:cu,meta:au,tick:As},Symbol.toStringTag,{value:"Module"})),Ts=[kc,vl,Il,Gl,Cl,Zl,sc,mc,$c,Pc,Lc,Uc,Vc,eu,su,js],du=Ts;function Pi(e){return`builtin:${e}`}async function fu(e){const n=[];for(const r of Ts)if(!await hu(e,r)){n.push(r);try{await r.init?.(e)}catch(o){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"init",error:o})}}return async()=>{for(const r of n)try{await r.load?.(e)}catch(o){e.events.emit("plugin:error",{url:r.meta?.name??"(builtin)",phase:"load",error:o})}}}async function hu(e,n){if(!n.meta?.optional)return!1;const r=n.meta.name;return r?(await e.store.plugins.findOne(Pi(r)))?.enabled===!1:!1}async function pu(e){const n=e.workspaceId();if(!n)return async()=>{};const o=(await e.store.workspaces.findOne(n))?.pluginUrls??[],t=[];for(const l of o)try{const c=await e.store.plugins.findOne(l);if(c&&c.enabled===!1)continue;let f=c?.cachedBody??"";if(f)mu(e,l,f);else{try{f=await Fs(l)}catch(F){await e.store.plugins.upsert({url:l,enabled:c?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${F.message}`}),e.events.emit("plugin:error",{url:l,phase:"fetch",error:F});continue}await e.store.plugins.upsert({url:l,enabled:!0,lastFetched:Date.now(),cachedBody:f})}const g=new Blob([f],{type:"text/javascript"}),T=URL.createObjectURL(g);try{const F=await import(T);await F.init?.(e),t.push({url:l,mod:F})}finally{setTimeout(()=>URL.revokeObjectURL(T),5e3)}}catch(c){await e.store.plugins.upsert({url:l,enabled:!0,lastFetched:Date.now(),lastError:`init: ${c.message}`}),e.events.emit("plugin:error",{url:l,phase:"init",error:c})}return async()=>{for(const{url:l,mod:c}of t)try{await c.load?.(e)}catch(f){await e.store.plugins.upsert({url:l,enabled:!0,lastFetched:Date.now(),lastError:`load: ${f.message}`}),e.events.emit("plugin:error",{url:l,phase:"load",error:f})}}}async function Fs(e){const n=await fetch(e);if(!n.ok)throw new Error(`HTTP ${n.status} ${n.statusText}`);const r=await n.text();if((n.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(r))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return r}function mu(e,n,r){return(async()=>{try{const o=await Fs(n);if(o===r)return;await e.store.plugins.upsert({url:n,enabled:!0,lastFetched:Date.now(),cachedBody:o})}catch{}})()}let xi=null;function _e(){return xi||(xi=gu()),xi}async function gu(){const e=await qa(),n=Wa(e),r=Ha(),o=Ja(),t=bu(),l=await n.workspaces.find();let c;if(t){const F=yu(t),R=l.find(j=>j.id===F||j.name===t);R?c=R.id:c=(await n.workspaces.insert({id:F,name:t,createdAt:Date.now(),pluginUrls:[]})).id}else l.length===0?c=(await n.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id:c=l[0].id;const f=tl({store:n,events:r,registries:o,workspaceId:()=>c});r.on("import:after",({source:F,tableId:R,rowCount:j})=>{f.store.tables.findOne(R).then(V=>{f.ui.dialogs.toast(`Imported ${j} row${j===1?"":"s"} into "${V?.name??R}".`,{kind:"success",title:F.toUpperCase()+" import"})})}),r.on("plugin:error",({url:F,phase:R,error:j})=>{f.ui.dialogs.toast(`[${R}] ${j?.message??String(j)}`,{kind:"error",title:`Plugin: ${F}`})});const g=await fu(f),T=await pu(f);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:c}),await g(),await T()}),{store:n,events:r,workspaceId:c,registries:o,api:f}}function bu(){if(typeof location>"u")return null;const n=new URLSearchParams(location.search).get("space");return n&&n.trim().length>0?n.trim():null}function yu(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var vu=Object.defineProperty,wu=Object.getOwnPropertyDescriptor,Br=(e,n,r,o)=>{for(var t=o>1?void 0:o?wu(n,r):n,l=e.length-1,c;l>=0;l--)(c=e[l])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&vu(n,r,t),t};let Pn=class extends nt{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Gn(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const n=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let r;try{r=Dr(this.text)}catch(c){this.errorMsg=`Couldn't parse the CSV: ${c.message}`;return}if(r.columns.length===0||r.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const o=await _e(),t=crypto.randomUUID();await o.store.tables.insert({id:t,workspaceId:o.workspaceId,name:n,code:xu(n),columns:r.columns,view:"table",updatedAt:Date.now()});const l=r.rows.map(c=>({id:crypto.randomUUID(),tableId:t,data:c,updatedAt:Date.now()}));await o.store.rows(t).bulkInsert(l),o.api.ui.dialogs.toast(`Imported ${r.rows.length} row${r.rows.length===1?"":"s"} into "${n}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return J`
      <dialog @cancel=${this.close} @keydown=${Xn}>
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
            ${this.errorMsg?J`<div class="error">${this.errorMsg}</div>`:""}
          </div>
        </form>
      </dialog>
    `}};Pn.styles=[Yn,ct`
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
    `];Br([ne()],Pn.prototype,"name",2);Br([ne()],Pn.prototype,"text",2);Br([ne()],Pn.prototype,"errorMsg",2);Pn=Br([mt("csv-paste-dialog")],Pn);function xu(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}var $u=Object.defineProperty,Eu=Object.getOwnPropertyDescriptor,Bi=(e,n,r,o)=>{for(var t=o>1?void 0:o?Eu(n,r):n,l=e.length-1,c;l>=0;l--)(c=e[l])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&$u(n,r,t),t};const Cu=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return an HTML string; it is injected into the cell as raw HTML.
  return '<b>' + (row.name ?? '') + '</b>';
}
`;let Bt=class extends nt{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),Bt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Bt.instance===this&&(Bt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Gn(this.dialogEl,e)}async open(e,n){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:Cu,this.columnLabel=n??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(r=>{this.resolver=r})}resolve(e){const n=this.resolver;this.resolver=null,this.dialogEl?.close(),n&&n(e)}render(){return J`
      <dialog @cancel=${this.onCancel} @keydown=${Xn}>
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
    `}};Bt.instance=null;Bt.styles=[Yn,ct`
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
    `];Bi([ne()],Bt.prototype,"text",2);Bi([ne()],Bt.prototype,"columnLabel",2);Bt=Bi([mt("script-editor-dialog")],Bt);var ku=Object.defineProperty,_u=Object.getOwnPropertyDescriptor,Ft=(e,n,r,o)=>{for(var t=o>1?void 0:o?_u(n,r):n,l=e.length-1,c;l>=0;l--)(c=e[l])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&ku(n,r,t),t};const Su=["string","number","boolean","date","datetime"];let $t=class extends nt{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.columns=[],this.errorMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Gn(this.dialogEl,e)}async open(e){this.errorMsg="";const n=await _e();if(this.rendererOptions=[...n.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.rendererSubUnsub=n.events.on("app:ready",()=>{this.rendererOptions=[...n.registries.cellRenderers.keys()].sort()}),e){const r=await _e(),o=await r.store.tables.findOne(e);if(!o)return;this.mode="edit",this.editTableId=e,this.name=o.name,this.columns=o.columns.map(l=>({field:l.field,label:l.label,type:l.type,renderer:l.renderer,script:l.script,max:l.max,unique:l.unique,notnull:l.notnull,hidden:l.hidden,origField:l.field}));const t=await r.store.rows(e).find();this.previewRows=t.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((n,r)=>r!==e)}moveColumn(e,n){const r=e+n;if(r<0||r>=this.columns.length)return;const o=[...this.columns],[t]=o.splice(e,1);o.splice(r,0,t),this.columns=o}onRowDragStart(e,n){this.dragSrcIdx=n,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(n)))}onRowDragOver(e,n,r){if(this.dragSrcIdx===null||this.dragSrcIdx===n)return;e.preventDefault();const o=r.getBoundingClientRect(),t=e.clientY<o.top+o.height/2;this.dropTargetIdx=n,this.dropEdge=t?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,n){e.preventDefault();const r=this.dragSrcIdx,o=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,r===null||r===n||!o)return;const t=[...this.columns],[l]=t.splice(r,1);let c=n+(r<n?-1:0);o==="after"&&(c+=1),t.splice(c,0,l),this.columns=t}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,n){this.columns=this.columns.map((r,o)=>o===e?{...r,...n}:r)}async editScript(e){const n=Bt.instance;if(!n)return;const r=this.columns[e];if(!r)return;const o=await n.open(r.script??"",r.label||r.field);o!==null&&this.patchColumn(e,{script:o.trim()?o:void 0})}async submit(e){e.preventDefault();const n=this.name.trim();if(!n){this.errorMsg="Table name is required.";return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const r=new Set;for(const l of this.columns){const c=l.field.trim();if(!c){this.errorMsg="Column field names cannot be empty.";return}if(r.has(c)){this.errorMsg=`Duplicate column field: ${c}`;return}r.add(c)}const o=await _e(),t=this.columns.map(l=>{const c={field:l.field.trim(),label:l.label.trim()||l.field.trim(),type:l.type};return l.renderer&&(c.renderer=l.renderer),l.script&&(c.script=l.script),l.max!=null&&l.max>0&&(c.max=l.max),l.unique&&(c.unique=!0),l.notnull&&(c.notnull=!0),l.hidden&&(c.hidden=!0),c});if(this.mode==="edit"&&this.editTableId){const l=this.editTableId,c=await o.store.tables.findOne(l),f=new Map((c?.columns??[]).map(T=>[T.field,T])),g=t.filter(T=>{const F=f.get(T.field);return T.unique&&!F?.unique||T.notnull&&!F?.notnull||T.max&&T.max>0&&T.max!==F?.max});if(g.length>0){const T=await o.store.rows(l).find(),F=ju(g,T);if(F.length>0){this.errorMsg=`Cannot save: ${F.length} existing ${F.length===1?"row violates":"rows violate"} the new constraints.
${F.slice(0,5).join(`
`)}${F.length>5?`
…and ${F.length-5} more.`:""}`;return}}await o.store.tables.patch(l,{name:n,columns:t,updatedAt:Date.now()})}else await o.store.tables.insert({id:Fu(),workspaceId:o.workspaceId,name:n,code:Tu(n),columns:t,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return J`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=new Map;for(const n of this.columns){if(!n.unique)continue;const r=new Set,o=new Set;for(const t of this.previewRows){const l=t.data[n.field];l==null||l===""||(r.has(l)&&o.add(l),r.add(l))}e.set(n.field,o)}return J`
      <div class="preview">
        <h3>Live preview — first ${this.previewRows.length} row${this.previewRows.length===1?"":"s"}</h3>
        <table>
          <thead>
            <tr>
              ${this.columns.map(n=>J`<th title=${n.field}>${n.label||n.field}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.previewRows.map(n=>J`
                <tr>
                  ${this.columns.map(r=>{const o=n.data[r.field],t=Au(r,o,e.get(r.field));return J`<td
                      class=${t?"violation":""}
                      title=${t??""}
                    >${Pu(o)}</td>`})}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    `}renameDetected(){return this.mode==="edit"&&this.columns.some(e=>e.origField&&e.origField!==e.field.trim())}render(){const e=this.mode==="edit"?"Edit columns":"New table",n=this.mode==="edit"?"Save":"Create";return J`
      <dialog @cancel=${this.close} @keydown=${Xn}>
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
            ${this.columns.map((r,o)=>{const t=this.dragSrcIdx===o,l=this.dropTargetIdx===o,c=l&&this.dropEdge==="before"?" drop-before":l&&this.dropEdge==="after"?" drop-after":"";return J`
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
                    ${Su.map(f=>J`<option value=${f} ?selected=${f===r.type}>${f}</option>`)}
                  </select>
                  <select
                    title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                    .value=${r.renderer??""}
                    @change=${f=>{const g=f.target.value;this.patchColumn(o,{renderer:g||void 0})}}
                  >
                    <option value="" ?selected=${!r.renderer}>— none —</option>
                    ${this.rendererOptions.map(f=>J`<option value=${f} ?selected=${f===r.renderer}>${f}</option>`)}
                  </select>
                  ${r.renderer==="script"?J`<button
                        type="button"
                        class="icon-btn"
                        title="Edit JS render(row)"
                        @click=${()=>this.editScript(o)}
                      >
                        <span class="mi sm">edit</span>
                      </button>`:J`<span></span>`}
                  <input
                    type="number"
                    min="0"
                    placeholder="—"
                    title="Max length (strings) or max value (numbers)"
                    .value=${r.max==null?"":String(r.max)}
                    @input=${f=>{const g=f.target.value;this.patchColumn(o,{max:g===""?void 0:Number(g)})}}
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

          ${this.renameDetected()?J`<div class="hint">
                Renamed fields will appear empty for existing rows — the row data
                isn't migrated automatically.
              </div>`:""}
          ${this.errorMsg?J`<div class="error">${this.errorMsg}</div>`:""}
          ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};$t.styles=[Vt,Yn,ct`
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
  `];Ft([ne()],$t.prototype,"mode",2);Ft([ne()],$t.prototype,"editTableId",2);Ft([ne()],$t.prototype,"name",2);Ft([ne()],$t.prototype,"columns",2);Ft([ne()],$t.prototype,"errorMsg",2);Ft([ne()],$t.prototype,"dragSrcIdx",2);Ft([ne()],$t.prototype,"dropTargetIdx",2);Ft([ne()],$t.prototype,"dropEdge",2);Ft([ne()],$t.prototype,"previewRows",2);Ft([ne()],$t.prototype,"rendererOptions",2);$t=Ft([mt("new-table-dialog")],$t);function Pu(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function Au(e,n,r){const o=n==null||typeof n=="string"&&n.trim()==="";if(e.notnull&&o)return`${e.label}: empty`;if(o)return null;if(e.type==="number"&&typeof n!="number"){const t=Number(n);if(!Number.isFinite(t))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof n!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(n)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!o){const t=new Date(String(n));if(Number.isNaN(t.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof n=="string"&&n.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof n=="number"&&n>e.max)return`${e.label}: > ${e.max}`}return e.unique&&r?.has(n)?`${e.label}: duplicate`:null}function ju(e,n){const r=[];for(const o of e)if(o.notnull&&n.forEach((t,l)=>{const c=t.data[o.field];(c==null||typeof c=="string"&&c.trim()==="")&&r.push(`Row ${l+1}: ${o.label} is empty.`)}),o.max!=null&&o.max>0&&n.forEach((t,l)=>{const c=t.data[o.field];typeof c=="string"&&c.length>o.max?r.push(`Row ${l+1}: ${o.label} length ${c.length} > max ${o.max}.`):typeof c=="number"&&c>o.max&&r.push(`Row ${l+1}: ${o.label} value ${c} > max ${o.max}.`)}),o.unique){const t=new Map;n.forEach((l,c)=>{const f=l.data[o.field];f==null||f===""||(t.has(f)?r.push(`Row ${c+1}: ${o.label} duplicates row ${t.get(f)+1} ("${String(f)}").`):t.set(f,c))})}return r}function Tu(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Fu(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var Ou=Object.defineProperty,Du=Object.getOwnPropertyDescriptor,St=(e,n,r,o)=>{for(var t=o>1?void 0:o?Du(n,r):n,l=e.length-1,c;l>=0;l--)(c=e[l])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&Ou(n,r,t),t};let pt=class extends nt{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.builtinNames=[],this.optionalBuiltins=[],this.dirtyBuiltins=!1,this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Gn(this.dialogEl,e)}async open(){const e=await _e(),n=await e.store.workspaces.findOne(e.workspaceId);this.urls=n?.pluginUrls??[];const r=await e.store.plugins.find();this.records=new Map(r.map(l=>[l.url,l]));const o=[],t=[];for(const l of du){const c=l.meta?.name;if(c)if(l.meta?.optional){const f=this.records.get(Pi(c));t.push({name:c,...l.meta?.description?{description:l.meta.description}:{},...l.meta?.author?{author:l.meta.author}:{},enabled:f?.enabled!==!1})}else o.push(c)}this.builtinNames=o,this.optionalBuiltins=t,this.dirtyBuiltins=!1,this.addUrl="",await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(),this.refreshServerRegistry()}async refreshCatalog(){const e=new URL("/plugins/catalog.json",location.origin).toString();try{const n=await fetch(e,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status}`);const r=await n.json(),o=Array.isArray(r.plugins)?r.plugins:[];this.catalog=o.map(t=>({...t,absUrl:new URL(t.url,e).toString()})),this.catalogError=null}catch(n){this.catalog=[],this.catalogError=n.message}}async refreshServerRegistry(){const r=(await(await _e()).store.settings.findOne("server-sync:url"))?.value;if(typeof r!="string"||r.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const t=`${r.replace(/\/+$/,"")}/plugins/registry`;try{const l=await fetch(t,{cache:"no-store"});if(!l.ok)throw new Error(`HTTP ${l.status}`);const c=await l.json(),f=Array.isArray(c.plugins)?c.plugins:[];this.serverCatalog=f.map(g=>({...g,absUrl:new URL(g.url,t).toString()})),this.serverCatalogError=null}catch(l){this.serverCatalog=[],this.serverCatalogError=l.message}}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const n=this.addUrl.trim();if(!n)return;if(!/^https?:\/\//i.test(n)){await(await _e()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(n))return;this.urls=[...this.urls,n];const r=await _e();await r.store.workspaces.patch(r.workspaceId,{pluginUrls:this.urls}),await r.store.plugins.upsert({url:n,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,n){const r=await _e(),o=this.records.get(e);await r.store.plugins.upsert({...o??{url:e,lastFetched:0},enabled:n}),this.records=new Map(this.records.set(e,{...o,url:e,enabled:n,lastFetched:o?.lastFetched??0}))}async removePlugin(e){const n=await _e();this.urls=this.urls.filter(r=>r!==e),await n.store.workspaces.patch(n.workspaceId,{pluginUrls:this.urls}),await n.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,n){const r=await _e(),o=Pi(e),t=this.records.get(o);await r.store.plugins.upsert({...t??{url:o,lastFetched:0},url:o,enabled:n,lastFetched:t?.lastFetched??0}),this.optionalBuiltins=this.optionalBuiltins.map(l=>l.name===e?{...l,enabled:n}:l),this.dirtyBuiltins=!0}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const n=await _e();try{const r=await fetch(e.absUrl,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const o=await r.text();await n.store.workspaces.patch(n.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await n.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:o});const t=new Blob([o],{type:"text/javascript"}),l=URL.createObjectURL(t);try{const f=await import(l);await f.init?.(n.api),await f.load?.(n.api)}finally{setTimeout(()=>URL.revokeObjectURL(l),5e3)}n.events.emit("app:ready",{workspaceId:n.workspaceId}),this.urls=[...this.urls,e.absUrl];const c=await n.store.plugins.find();this.records=new Map(c.map(f=>[f.url,f])),n.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(r){await n.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${r.message}`}),n.api.ui.dialogs.toast(`Could not install ${e.name}: ${r.message}`,{kind:"error",title:"Plugin error"})}finally{const r=new Set(this.installing);r.delete(e.absUrl),this.installing=r}}render(){return J`
      <dialog @cancel=${this.close} @keydown=${Xn}>
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
            ${this.catalog.length>0?J`<div class="section-h">Available from this host</div>`:""}
            ${this.catalog.map(e=>{const n=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return J`
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
            ${this.catalogError?J`<div class="meta err">
                  Host catalog unavailable: ${this.catalogError}
                </div>`:""}

            ${this.serverCatalog.length>0||this.serverCatalogError?J`<div class="section-h">From server</div>`:""}
            ${this.serverCatalog.map(e=>{const n=this.urls.includes(e.absUrl),r=this.installing.has(e.absUrl);return J`
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
            ${this.serverCatalogError?J`<div class="meta err">
                  Server registry unavailable: ${this.serverCatalogError}
                </div>`:""}

            ${this.optionalBuiltins.length>0?J`<div class="section-h">Optional built-ins</div>`:""}
            ${this.optionalBuiltins.map(e=>J`
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
            ${this.builtinNames.map(e=>J`
                <div class="row builtin">
                  <span class="mi sm">extension</span>
                  <div>
                    <div>${e}</div>
                    <div class="meta">Built-in</div>
                  </div>
                  <span class="meta">always on</span>
                </div>
              `)}

            ${this.urls.length>0?J`<div class="section-h">Installed (by URL)</div>`:""}
            ${this.urls.map(e=>{const n=this.records.get(e),r=n?.lastError?" error":"",o=n?.lastFetched?new Date(n.lastFetched).toLocaleString():"never";return J`
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
    `}};pt.styles=[Vt,Yn,ct`
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
    `];St([ne()],pt.prototype,"urls",2);St([ne()],pt.prototype,"records",2);St([ne()],pt.prototype,"addUrl",2);St([ne()],pt.prototype,"builtinNames",2);St([ne()],pt.prototype,"optionalBuiltins",2);St([ne()],pt.prototype,"dirtyBuiltins",2);St([ne()],pt.prototype,"catalog",2);St([ne()],pt.prototype,"catalogError",2);St([ne()],pt.prototype,"serverCatalog",2);St([ne()],pt.prototype,"serverCatalogError",2);St([ne()],pt.prototype,"installing",2);pt=St([mt("plugin-manager-dialog")],pt);/**
 * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu
 * @version v4.16.1
 * @homepage https://jspanel.de/
 * @license MIT
 * @author Stefan Sträßer - info@jspanel.de
 * @author of dialog extension: Michael Daumling - michael@terrapinlogo.com
 * @github https://github.com/Flyer53/jsPanel4.git
 */let O={version:"4.16.1",date:"2022-11-03 09:18",ajaxAlwaysCallbacks:[],autopositionSpacing:4,closeOnEscape:(()=>{document.addEventListener("keydown",e=>{(e.key==="Escape"||e.code==="Escape"||e.key==="Esc")&&O.getPanels(n=>n.classList.contains("jsPanel")).some(n=>n.options.closeOnEscape?typeof n.options.closeOnEscape=="function"?n.options.closeOnEscape.call(n,n):(n.close(null,!0),!0):!1)},!1)})(),defaults:{boxShadow:3,container:"window",contentSize:{width:"400px",height:"200px"},dragit:{cursor:"move",handles:".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",opacity:.8,disableOnMaximized:!0},header:!0,headerTitle:"jsPanel",headerControls:{size:"md"},iconfont:void 0,maximizedMargin:0,minimizeTo:"default",paneltype:"standard",position:{my:"center",at:"center"},resizeit:{handles:"n, e, s, w, ne, se, sw, nw",minWidth:128,minHeight:38},theme:"default"},defaultAutocloseConfig:{time:"8s",progressbar:!0},defaultSnapConfig:{sensitivity:70,trigger:"panel",active:"both"},extensions:{},globalCallbacks:!1,icons:{close:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>',maximize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>',normalize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>',minimize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>',smallify:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>'},idCounter:0,isIE:document.documentMode||!1,pointerdown:"onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],pointermove:"onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],pointerup:"onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"],polyfills:(()=>{Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e==null)throw new TypeError("Cannot convert first argument to object");let n=Object(e);for(let r=1;r<arguments.length;r++){let o=arguments[r];if(o==null)continue;o=Object(o);let t=Object.keys(Object(o));for(let l=0,c=t.length;l<c;l++){let f=t[l],g=Object.getOwnPropertyDescriptor(o,f);g!==void 0&&g.enumerable&&(n[f]=o[f])}}return n}}),Object.entries||(Object.entries=function(e){for(var n=Object.keys(e),r=n.length,o=new Array(r);r--;)o[r]=[n[r],e[n[r]]];return o}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,n){n=n||window;for(let r=0;r<this.length;r++)e.call(n,this[r],r,this)}),(function(e){e.forEach(function(n){n.append=n.append||function(){let r=Array.prototype.slice.call(arguments),o=document.createDocumentFragment();r.forEach(function(t){let l=t instanceof Node;o.appendChild(l?t:document.createTextNode(String(t)))}),this.appendChild(o)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){let n=(this.document||this.ownerDocument).querySelectorAll(e),r,o=this;do for(r=n.length;--r>=0&&n.item(r)!==o;);while(r<0&&(o=o.parentElement));return o}),(function(){if(typeof window.CustomEvent=="function")return!1;function e(n,r){r=r||{bubbles:!1,cancelable:!1,detail:void 0};let o=document.createEvent("CustomEvent");return o.initCustomEvent(n,r.bubbles,r.cancelable,r.detail),o}e.prototype=window.Event.prototype,window.CustomEvent=e})(),String.prototype.endsWith||(String.prototype.endsWith=function(e,n){return(n===void 0||n>this.length)&&(n=this.length),this.substring(n-e.length,n)===e}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,n){var r=n>0?n|0:0;return this.substring(r,r+e.length)===e}}),String.prototype.includes||(String.prototype.includes=function(e,n){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return n===void 0&&(n=0),this.indexOf(e,n)!==-1}),String.prototype.repeat||(String.prototype.repeat=function(e){if(this==null)throw new TypeError("can't convert "+this+" to object");var n=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),n.length==0||e==0)return"";if(n.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=n.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)n+=n,e--;return n+=n.substring(0,r-n.length),n}),Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,n){if(this==null)throw new TypeError('"this" is null or not defined');let r=Object(this),o=r.length>>>0;if(o===0)return!1;let t=n|0,l=Math.max(t>=0?t:o-Math.abs(t),0);function c(f,g){return f===g||typeof f=="number"&&typeof g=="number"&&isNaN(f)&&isNaN(g)}for(;l<o;){if(c(r[l],e))return!0;l++}return!1}})})(),ziBase:100,colorFilledLight:.81,colorFilledDark:.08,colorFilled:0,colorBrightnessThreshold:.55,colorNames:{default:"b0bec5",secondary:"b0bec5",primary:"01579b",info:"039be5",success:"2e7d32",warning:"f57f17",danger:"dd2c00",light:"e0e0e0",dark:"263238",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",grey50:"fafafa",grey100:"f5f5f5",grey200:"eeeeee",grey300:"e0e0e0",grey400:"bdbdbd",grey500:"9e9e9e",grey600:"757575",grey700:"616161",grey800:"424242",grey900:"212121",gray50:"fafafa",gray100:"f5f5f5",gray200:"eeeeee",gray300:"e0e0e0",gray400:"bdbdbd",gray500:"9e9e9e",gray600:"757575",gray700:"616161",gray800:"424242",gray900:"212121",bluegrey50:"eceff1",bluegrey100:"CFD8DC",bluegrey200:"B0BEC5",bluegrey300:"90A4AE",bluegrey400:"78909C",bluegrey500:"607D8B",bluegrey600:"546E7A",bluegrey700:"455A64",bluegrey800:"37474F",bluegrey900:"263238",bluegray50:"eceff1",bluegray100:"CFD8DC",bluegray200:"B0BEC5",bluegray300:"90A4AE",bluegray400:"78909C",bluegray500:"607D8B",bluegray600:"546E7A",bluegray700:"455A64",bluegray800:"37474F",bluegray900:"263238",red50:"FFEBEE",red100:"FFCDD2",red200:"EF9A9A",red300:"E57373",red400:"EF5350",red500:"F44336",red600:"E53935",red700:"D32F2F",red800:"C62828",red900:"B71C1C",reda100:"FF8A80",reda200:"FF5252",reda400:"FF1744",reda700:"D50000",pink50:"FCE4EC",pink100:"F8BBD0",pink200:"F48FB1",pink300:"F06292",pink400:"EC407A",pink500:"E91E63",pink600:"D81B60",pink700:"C2185B",pink800:"AD1457",pink900:"880E4F",pinka100:"FF80AB",pinka200:"FF4081",pinka400:"F50057",pinka700:"C51162",purple50:"F3E5F5",purple100:"E1BEE7",purple200:"CE93D8",purple300:"BA68C8",purple400:"AB47BC",purple500:"9C27B0",purple600:"8E24AA",purple700:"7B1FA2",purple800:"6A1B9A",purple900:"4A148C",purplea100:"EA80FC",purplea200:"E040FB",purplea400:"D500F9",purplea700:"AA00FF",deeppurple50:"EDE7F6",deeppurple100:"D1C4E9",deeppurple200:"B39DDB",deeppurple300:"9575CD",deeppurple400:"7E57C2",deeppurple500:"673AB7",deeppurple600:"5E35B1",deeppurple700:"512DA8",deeppurple800:"4527A0",deeppurple900:"311B92",deeppurplea100:"B388FF",deeppurplea200:"7C4DFF",deeppurplea400:"651FFF",deeppurplea700:"6200EA",indigo50:"E8EAF6",indigo100:"C5CAE9",indigo200:"9FA8DA",indigo300:"7986CB",indigo400:"5C6BC0",indigo500:"3F51B5",indigo600:"3949AB",indigo700:"303F9F",indigo800:"283593",indigo900:"1A237E",indigoa100:"8C9EFF",indigoa200:"536DFE",indigoa400:"3D5AFE",indigoa700:"304FFE",blue50:"E3F2FD",blue100:"BBDEFB",blue200:"90CAF9",blue300:"64B5F6",blue400:"42A5F5",blue500:"2196F3",blue600:"1E88E5",blue700:"1976D2",blue800:"1565C0",blue900:"0D47A1",bluea100:"82B1FF",bluea200:"448AFF",bluea400:"2979FF",bluea700:"2962FF",lightblue50:"E1F5FE",lightblue100:"B3E5FC",lightblue200:"81D4FA",lightblue300:"4FC3F7",lightblue400:"29B6F6",lightblue500:"03A9F4",lightblue600:"039BE5",lightblue700:"0288D1",lightblue800:"0277BD",lightblue900:"01579B",lightbluea100:"80D8FF",lightbluea200:"40C4FF",lightbluea400:"00B0FF",lightbluea700:"0091EA",cyan50:"E0F7FA",cyan100:"B2EBF2",cyan200:"80DEEA",cyan300:"4DD0E1",cyan400:"26C6DA",cyan500:"00BCD4",cyan600:"00ACC1",cyan700:"0097A7",cyan800:"00838F",cyan900:"006064",cyana100:"84FFFF",cyana200:"18FFFF",cyana400:"00E5FF",cyana700:"00B8D4",teal50:"E0F2F1",teal100:"B2DFDB",teal200:"80CBC4",teal300:"4DB6AC",teal400:"26A69A",teal500:"009688",teal600:"00897B",teal700:"00796B",teal800:"00695C",teal900:"004D40",teala100:"A7FFEB",teala200:"64FFDA",teala400:"1DE9B6",teala700:"00BFA5",green50:"E8F5E9",green100:"C8E6C9",green200:"A5D6A7",green300:"81C784",green400:"66BB6A",green500:"4CAF50",green600:"43A047",green700:"388E3C",green800:"2E7D32",green900:"1B5E20",greena100:"B9F6CA",greena200:"69F0AE",greena400:"00E676",greena700:"00C853",lightgreen50:"F1F8E9",lightgreen100:"DCEDC8",lightgreen200:"C5E1A5",lightgreen300:"AED581",lightgreen400:"9CCC65",lightgreen500:"8BC34A",lightgreen600:"7CB342",lightgreen700:"689F38",lightgreen800:"558B2F",lightgreen900:"33691E",lightgreena100:"CCFF90",lightgreena200:"B2FF59",lightgreena400:"76FF03",lightgreena700:"64DD17",lime50:"F9FBE7",lime100:"F0F4C3",lime200:"E6EE9C",lime300:"DCE775",lime400:"D4E157",lime500:"CDDC39",lime600:"C0CA33",lime700:"AFB42B",lime800:"9E9D24",lime900:"827717",limea100:"F4FF81",limea200:"EEFF41",limea400:"C6FF00",limea700:"AEEA00",yellow50:"FFFDE7",yellow100:"FFF9C4",yellow200:"FFF59D",yellow300:"FFF176",yellow400:"FFEE58",yellow500:"FFEB3B",yellow600:"FDD835",yellow700:"FBC02D",yellow800:"F9A825",yellow900:"F57F17",yellowa100:"FFFF8D",yellowa200:"FFFF00",yellowa400:"FFEA00",yellowa700:"FFD600",amber50:"FFF8E1",amber100:"FFECB3",amber200:"FFE082",amber300:"FFD54F",amber400:"FFCA28",amber500:"FFC107",amber600:"FFB300",amber700:"FFA000",amber800:"FF8F00",amber900:"FF6F00",ambera100:"FFE57F",ambera200:"FFD740",ambera400:"FFC400",ambera700:"FFAB00",orange50:"FFF3E0",orange100:"FFE0B2",orange200:"FFCC80",orange300:"FFB74D",orange400:"FFA726",orange500:"FF9800",orange600:"FB8C00",orange700:"F57C00",orange800:"EF6C00",orange900:"E65100",orangea100:"FFD180",orangea200:"FFAB40",orangea400:"FF9100",orangea700:"FF6D00",deeporange50:"FBE9E7",deeporange100:"FFCCBC",deeporange200:"FFAB91",deeporange300:"FF8A65",deeporange400:"FF7043",deeporange500:"FF5722",deeporange600:"F4511E",deeporange700:"E64A19",deeporange800:"D84315",deeporange900:"BF360C",deeporangea100:"FF9E80",deeporangea200:"FF6E40",deeporangea400:"FF3D00",deeporangea700:"DD2C00",brown50:"EFEBE9",brown100:"D7CCC8",brown200:"BCAAA4",brown300:"A1887F",brown400:"8D6E63",brown500:"795548",brown600:"6D4C41",brown700:"5D4037",brown800:"4E342E",brown900:"3E2723","mdb-default":"2BBBAD","mdb-default-dark":"00695c","mdb-primary":"4285F4","mdb-primary-dark":"0d47a1","mdb-secondary":"aa66cc","mdb-secondary-dark":"9933CC","mdb-danger":"ff4444","mdb-danger-dark":"CC0000","mdb-warning":"ffbb33","mdb-warning-dark":"FF8800","mdb-success":"00C851","mdb-success-dark":"007E33","mdb-info":"33b5e5","mdb-info-dark":"0099CC","mdb-elegant":"2E2E2E","mdb-elegant-dark":"212121","mdb-stylish":"4B515D","mdb-stylish-dark":"3E4551","mdb-unique":"3F729B","mdb-unique-dark":"1C2331","mdb-special":"37474F","mdb-special-dark":"263238"},errorReporting:1,modifier:!1,helper:(()=>{document.addEventListener("keydown",e=>O.modifier=e),document.addEventListener("keyup",()=>O.modifier=!1)})(),usePointerEvents(e=!0){e?(this.pointerdown="onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"]):(this.pointerdown="ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="ontouchend"in window?["touchend","mouseup"]:["mouseup"])},pOcontainer(e){if(e==="window")return document.body;if(typeof e=="string"){let n=document.querySelectorAll(e);return n.length&&n.length>0?n:!1}else{if(e.nodeType===1)return e;if(e.length)return e[0]}return!1},pOcontainment(e){let n=e;if(typeof e=="function"&&(n=e()),typeof n=="number")return[n,n,n,n];if(Array.isArray(n)){if(n.length===1)return[n[0],n[0],n[0],n[0]];if(n.length===2)return n.concat(n);n.length===3&&(n[3]=n[1])}return n},pOsize(e,n){let r=n||this.defaults.contentSize;const o=e.parentElement;if(typeof r=="string"){const t=r.trim().split(" ");r={},r.width=t[0],t.length===2?r.height=t[1]:r.height=t[0]}else r.width&&!r.height?r.height=r.width:r.height&&!r.width&&(r.width=r.height);if(String(r.width).match(/^[\d.]+$/gi))r.width+="px";else if(typeof r.width=="string"&&r.width.endsWith("%"))if(o===document.body)r.width=window.innerWidth*(parseFloat(r.width)/100)+"px";else{const t=window.getComputedStyle(o),l=parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth);r.width=(parseFloat(t.width)-l)*(parseFloat(r.width)/100)+"px"}else typeof r.width=="function"&&(r.width=r.width.call(e,e),(typeof r.width=="number"||typeof r.width=="string"&&r.width.match(/^[\d.]+$/gi))&&(r.width+="px"));if(String(r.height).match(/^[\d.]+$/gi))r.height+="px";else if(typeof r.height=="string"&&r.height.endsWith("%"))if(o===document.body)r.height=window.innerHeight*(parseFloat(r.height)/100)+"px";else{const t=window.getComputedStyle(o),l=parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth);r.height=(parseFloat(t.height)-l)*(parseFloat(r.height)/100)+"px"}else typeof r.height=="function"&&(r.height=r.height.call(e,e),(typeof r.height=="number"||typeof r.height=="string"&&r.height.match(/^[\d.]+$/gi))&&(r.height+="px"));return r},pOborder(e){let n=[],r=e.trim().replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," ").split(" ");return r.forEach((o,t)=>{(o.startsWith("--")||o.startsWith("var"))&&(r[t]=O.getCssVariableValue(o))}),r.forEach(o=>{O.colorNames[o]?n[2]="#"+O.colorNames[o]:o.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/)?n[1]=o:o.match(/(thin|medium|thick)|(\d*\.?\d*(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vmax|vmin|vb|vi|px|cm|mm|Q|in|pc|pt))/)?n[0]=o:n[2]=o}),n[0]||(n[0]="medium"),n[1]||(n[1]="solid"),n[2]||(n[2]=""),n},pOheaderControls(e){if(typeof e=="string"){let n={},r=e.toLowerCase(),o=r.match(/xl|lg|md|sm|xs/),t=r.match(/closeonly|none/);return o&&(n.size=o[0]),t&&(n=Object.assign({},n,{maximize:"remove",normalize:"remove",minimize:"remove",smallify:"remove"}),t[0]==="none"&&(n.close="remove")),Object.assign({},this.defaults.headerControls,n)}else return Object.assign({},this.defaults.headerControls,e)},pOtheme(e){e=e.trim();let n,r="";if(e.match(/^(rgb|hsl|var)/)){let o=e.indexOf(")");n=e.slice(0,o+1).replace(/\s+/g,""),n.startsWith("var")&&(n=O.getCssVariableValue(n)),r=e.slice(o+1,e.length).trim()}else if(e.match(/^(#|\w|--)/)){let o=e.indexOf(" ");o>0?(n=e.slice(0,o+1).replace(/\s+/g,""),r=e.slice(o+1,e.length).trim()):n=e,n.startsWith("--")&&(n=O.getCssVariableValue(n))}if(n.match(/^([\da-f]{3}|[\da-f]{6})$/gi)&&(n="#"+n),r.startsWith("fillcolor")){let o=r.indexOf(" ");r=r.slice(o+1,r.length).trim().replace(/\s+/g,""),r.match(/^([\da-f]{3}|[\da-f]{6})$/gi)?r="#"+r:O.colorNames[r]?r="#"+O.colorNames[r]:r.match(/^(--|var)/)?r=O.getCssVariableValue(r):r="#fff"}return{color:n,colors:!1,filling:r}},color(e){let n=e.toLowerCase(),r,o,t,l,c,f,g,T,F,R={};const j=/^#?([\da-f]{3}|[\da-f]{6})$/gi,V=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,Z=/^hsla?\((\d{1,3}),(\d{1,3}%),(\d{1,3}%),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,le=this.colorNames;return le[n]&&(n=le[n]),n.match(j)!==null?(n=n.replace("#",""),n.length%2===1?(r=n.slice(0,1).repeat(2),o=n.slice(1,2).repeat(2),t=n.slice(2,3).repeat(2),R.rgb={r:parseInt(r,16),g:parseInt(o,16),b:parseInt(t,16)},R.hex=`#${r}${o}${t}`):(R.rgb={r:parseInt(n.slice(0,2),16),g:parseInt(n.slice(2,4),16),b:parseInt(n.slice(4,6),16)},R.hex=`#${n}`),F=this.rgbToHsl(R.rgb.r,R.rgb.g,R.rgb.b),R.hsl=F,R.rgb.css=`rgb(${R.rgb.r},${R.rgb.g},${R.rgb.b})`):n.match(V)?(g=V.exec(n),R.rgb={css:n,r:g[1],g:g[2],b:g[3]},R.hex=this.rgbToHex(g[1],g[2],g[3]),F=this.rgbToHsl(g[1],g[2],g[3]),R.hsl=F):n.match(Z)?(g=Z.exec(n),l=g[1]/360,c=g[2].slice(0,g[2].length-1)/100,f=g[3].slice(0,g[3].length-1)/100,T=this.hslToRgb(l,c,f),R.rgb={css:`rgb(${T[0]},${T[1]},${T[2]})`,r:T[0],g:T[1],b:T[2]},R.hex=this.rgbToHex(R.rgb.r,R.rgb.g,R.rgb.b),R.hsl={css:`hsl(${g[1]},${g[2]},${g[3]})`,h:g[1],s:g[2],l:g[3]}):(R.hex="#f5f5f5",R.rgb={css:"rgb(245,245,245)",r:245,g:245,b:245},R.hsl={css:"hsl(0,0%,96%)",h:0,s:"0%",l:"96%"}),R},calcColors(e){const n=this.colorBrightnessThreshold,r=this.color(e),o=this.lighten(e,this.colorFilledLight),t=this.darken(e,this.colorFilled),l=this.perceivedBrightness(e)<=n?"#ffffff":"#000000",c=this.perceivedBrightness(o)<=n?"#ffffff":"#000000",f=this.perceivedBrightness(t)<=n?"#ffffff":"#000000",g=this.lighten(e,this.colorFilledDark),T=this.perceivedBrightness(g)<=n?"#ffffff":"#000000";return[r.hsl.css,o,t,l,c,f,g,T]},darken(e,n){const r=this.color(e).hsl,o=parseFloat(r.l),t=Math.round(o-o*n)+"%";return`hsl(${r.h},${r.s},${t})`},lighten(e,n){const r=this.color(e).hsl,o=parseFloat(r.l),t=Math.round(o+(100-o)*n)+"%";return`hsl(${r.h},${r.s},${t})`},hslToRgb(e,n,r){let o,t,l;if(n===0)o=t=l=r;else{let c=(T,F,R)=>(R<0&&(R+=1),R>1&&(R-=1),R<.16666666666666666?T+(F-T)*6*R:R<.5?F:R<.6666666666666666?T+(F-T)*(.6666666666666666-R)*6:T),f=r<.5?r*(1+n):r+n-r*n,g=2*r-f;o=c(g,f,e+1/3),t=c(g,f,e),l=c(g,f,e-1/3)}return[Math.round(o*255),Math.round(t*255),Math.round(l*255)]},rgbToHsl(e,n,r){e/=255,n/=255,r/=255;let o=Math.max(e,n,r),t=Math.min(e,n,r),l,c,f=(o+t)/2;if(o===t)l=c=0;else{let g=o-t;switch(c=f>.5?g/(2-o-t):g/(o+t),o){case e:l=(n-r)/g+(n<r?6:0);break;case n:l=(r-e)/g+2;break;case r:l=(e-n)/g+4;break}l/=6}return l=Math.round(l*360),c=Math.round(c*100)+"%",f=Math.round(f*100)+"%",{css:"hsl("+l+","+c+","+f+")",h:l,s:c,l:f}},rgbToHex(e,n,r){let o=Number(e).toString(16),t=Number(n).toString(16),l=Number(r).toString(16);return o.length===1&&(o=`0${o}`),t.length===1&&(t=`0${t}`),l.length===1&&(l=`0${l}`),`#${o}${t}${l}`},perceivedBrightness(e){const n=this.color(e).rgb;return n.r/255*.2126+n.g/255*.7152+n.b/255*.0722},pOposition(e){let n={},r=e.trim().split(/\s+/),o=r.filter(c=>c.match(/^(down|right|up|left)$/i));o.length&&(n.autoposition=o[0],r.splice(r.indexOf(o[0]),1));let t=r.filter(c=>c.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i));t.length?(n.my=t[0],n.at=t[1]||t[0],r.splice(r.indexOf(t[0]),1),t[1]&&r.splice(r.indexOf(t[1]),1)):(n.my="center",n.at="center");let l=r.filter(c=>c.match(/^[+-]?\d*\.?\d+[a-z%]*$/i));return l.length&&(n.offsetX=l[0].match(/^[+-]?\d*\.?\d+$/i)?`${l[0]}px`:l[0],l[1]?n.offsetY=l[1].match(/^[+-]?\d*\.?\d+$/i)?`${l[1]}px`:l[1]:n.offsetY=n.offsetX,r.splice(r.indexOf(l[0]),1),l[1]&&r.splice(r.indexOf(l[1]),1)),r.length&&(n.of=r.join(" ")),n},position(e,n){if(!n)return e.style.opacity=1,e;typeof n=="string"?n=Object.assign({},this.defaults.position,this.pOposition(n)):n=Object.assign({},this.defaults.position,n),["my","at","of"].forEach(le=>{typeof n[le]=="function"&&(n[le]=n[le].call(e,e))}),e.options.container==="window"&&(e.style.position="fixed"),typeof e=="string"?e=document.querySelector(e):Object.getPrototypeOf(e).jquery&&(e=e[0]);const r=e.options.container==="window"?"window":e.parentElement,o=e.getBoundingClientRect(),t=e.parentElement.getBoundingClientRect(),l=r==="window"?{left:0,top:0,width:document.documentElement.clientWidth,height:window.innerHeight}:{width:t.width,height:t.height,left:t.left,top:t.top},c=r==="window"?{x:1,y:1}:{x:l.width/r.offsetWidth,y:l.height/r.offsetHeight},f=r==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:window.getComputedStyle(r);l.width-=(parseFloat(f.borderLeftWidth)+parseFloat(f.borderRightWidth))*c.x,l.height-=(parseFloat(f.borderTopWidth)+parseFloat(f.borderBottomWidth))*c.y;let g;n.of?typeof n.of=="string"?g=n.of==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:document.querySelector(n.of).getBoundingClientRect():Object.getPrototypeOf(n.of).jquery?g=n.of[0].getBoundingClientRect():g=n.of.getBoundingClientRect():g=l;let T=this.getScrollbarWidth(document.body),F=this.getScrollbarWidth(e.parentElement),R="0px";n.my.startsWith("left-")?n.at.startsWith("left-")?n.of?R=g.left-l.left-parseFloat(f.borderLeftWidth)+"px":R="0px":n.at.startsWith("center")?n.of?R=g.left-l.left-parseFloat(f.borderLeftWidth)+g.width/2+"px":R=l.width/2+"px":n.at.startsWith("right-")&&(n.of?R=g.left-l.left-parseFloat(f.borderLeftWidth)+g.width+"px":R=l.width+"px"):n.my.startsWith("center")?n.at.startsWith("left-")?n.of?R=g.left-l.left-parseFloat(f.borderLeftWidth)-o.width/2+"px":R=-o.width/2+"px":n.at.startsWith("center")?n.of?R=g.left-l.left-parseFloat(f.borderLeftWidth)-(o.width-g.width)/2+"px":R=l.width/2-o.width/2+"px":n.at.startsWith("right-")&&(n.of?R=g.left-l.left-parseFloat(f.borderLeftWidth)+(g.width-o.width/2)+"px":R=l.width-o.width/2+"px"):n.my.startsWith("right-")&&(n.at.startsWith("left-")?n.of?R=g.left-l.left-parseFloat(f.borderLeftWidth)-o.width+"px":R=-o.width+"px":n.at.startsWith("center")?n.of?R=g.left-l.left-parseFloat(f.borderLeftWidth)-o.width+g.width/2+"px":R=l.width/2-o.width+"px":n.at.startsWith("right-")&&(n.of?R=g.left-l.left-parseFloat(f.borderLeftWidth)+g.width-o.width+"px":R=l.width-o.width+"px",r!=="window"&&(R=parseFloat(R)-F.y+"px")));let j="0px";n.my.endsWith("-top")?n.at.endsWith("-top")?n.of?j=g.top-l.top-parseFloat(f.borderTopWidth)+"px":j="0px":n.at.endsWith("center")?n.of?j=g.top-l.top-parseFloat(f.borderTopWidth)+g.height/2+"px":j=l.height/2+"px":n.at.endsWith("-bottom")&&(n.of?j=g.top-l.top-parseFloat(f.borderTopWidth)+g.height+"px":j=l.height+"px"):n.my.endsWith("center")?n.at.endsWith("-top")?n.of?j=g.top-l.top-parseFloat(f.borderTopWidth)-o.height/2+"px":j=-o.height/2+"px":n.at.endsWith("center")?n.of?j=g.top-l.top-parseFloat(f.borderTopWidth)-o.height/2+g.height/2+"px":j=l.height/2-o.height/2+"px":n.at.endsWith("-bottom")&&(n.of?j=g.top-l.top-parseFloat(f.borderTopWidth)-o.height/2+g.height+"px":j=l.height-o.height/2+"px"):n.my.endsWith("-bottom")&&(n.at.endsWith("-top")?n.of?j=g.top-l.top-parseFloat(f.borderTopWidth)-o.height+"px":j=-o.height+"px":n.at.endsWith("center")?n.of?j=g.top-l.top-parseFloat(f.borderTopWidth)-o.height+g.height/2+"px":j=l.height/2-o.height+"px":n.at.endsWith("-bottom")&&(n.of?j=g.top-l.top-parseFloat(f.borderTopWidth)-o.height+g.height+"px":j=l.height-o.height+"px",r!=="window"?j=parseFloat(j)-F.x+"px":j=parseFloat(j)-T.x+"px")),e.style.left=c.x===1?R:parseFloat(R)/c.x+"px",e.style.top=c.y===1?j:parseFloat(j)/c.y+"px";let V=getComputedStyle(e),Z={left:V.left,top:V.top};return n.autoposition&&n.my===n.at&&["left-top","center-top","right-top","left-bottom","center-bottom","right-bottom"].indexOf(n.my)>=0&&(Z=this.applyPositionAutopos(e,Z,n)),(n.offsetX||n.offsetY)&&(Z=this.applyPositionOffset(e,Z,n)),(n.minLeft||n.minTop||n.maxLeft||n.maxTop)&&(Z=this.applyPositionMinMax(e,Z,n)),n.modify&&(Z=this.applyPositionModify(e,Z,n)),typeof e.options.opacity=="number"?e.style.opacity=e.options.opacity:e.style.opacity=1,e},applyPositionAutopos(e,n,r){const o=`${r.my}-${r.autoposition.toLowerCase()}`;e.classList.add(o);const t=Array.prototype.slice.call(document.querySelectorAll(`.${o}`)),l=t.indexOf(e);if(t.length>1){switch(r.autoposition){case"down":t.forEach((c,f)=>{f>0&&f<=l&&(n.top=parseFloat(n.top)+t[--f].getBoundingClientRect().height+O.autopositionSpacing+"px")});break;case"up":t.forEach((c,f)=>{f>0&&f<=l&&(n.top=parseFloat(n.top)-t[--f].getBoundingClientRect().height-O.autopositionSpacing+"px")});break;case"right":t.forEach((c,f)=>{f>0&&f<=l&&(n.left=parseFloat(n.left)+t[--f].getBoundingClientRect().width+O.autopositionSpacing+"px")});break;case"left":t.forEach((c,f)=>{f>0&&f<=l&&(n.left=parseFloat(n.left)-t[--f].getBoundingClientRect().width-O.autopositionSpacing+"px")});break}e.style.left=n.left,e.style.top=n.top}return{left:n.left,top:n.top}},applyPositionOffset(e,n,r){["offsetX","offsetY"].forEach(t=>{r[t]?(typeof r[t]=="function"&&(r[t]=r[t].call(n,n,r)),isNaN(r[t])===!1&&(r[t]=`${r[t]}px`)):r[t]="0px"}),e.style.left=`calc(${e.style.left} + ${r.offsetX})`,e.style.top=`calc(${e.style.top} + ${r.offsetY})`;const o=getComputedStyle(e);return{left:o.left,top:o.top}},applyPositionMinMax(e,n,r){if(["minLeft","minTop","maxLeft","maxTop"].forEach(t=>{r[t]&&(typeof r[t]=="function"&&(r[t]=r[t].call(n,n,r)),(Number.isInteger(r[t])||r[t].match(/^\d+$/))&&(r[t]=`${r[t]}px`))}),r.minLeft){e.style.left=r.minLeft;let t=getComputedStyle(e).left;parseFloat(t)<parseFloat(n.left)?e.style.left=n.left:n.left=t}if(r.minTop){e.style.top=r.minTop;let t=getComputedStyle(e).top;parseFloat(t)<parseFloat(n.top)?e.style.top=n.top:n.top=t}if(r.maxLeft){e.style.left=r.maxLeft;let t=getComputedStyle(e).left;parseFloat(t)>parseFloat(n.left)?e.style.left=n.left:n.left=t}if(r.maxTop){e.style.top=r.maxTop;let t=getComputedStyle(e).top;parseFloat(t)>parseFloat(n.top)?e.style.top=n.top:n.top=t}const o=getComputedStyle(e);return{left:o.left,top:o.top}},applyPositionModify(e,n,r){if(r.modify&&typeof r.modify=="function"){const t=r.modify.call(n,n,r);e.style.left=Number.isInteger(t.left)||t.left.match(/^\d+$/)?`${t.left}px`:t.left,e.style.top=Number.isInteger(t.top)||t.top.match(/^\d+$/)?`${t.top}px`:t.top}const o=getComputedStyle(e);return{left:o.left,top:o.top}},autopositionRemaining(e){let n,r=e.options.container;["left-top-down","left-top-right","center-top-down","right-top-down","right-top-left","left-bottom-up","left-bottom-right","center-bottom-up","right-bottom-up","right-bottom-left"].forEach(o=>{e.classList.contains(o)&&(n=o)}),n&&(r==="window"?document.body:typeof r=="string"?document.querySelector(r):r).querySelectorAll(`.${n}`).forEach(t=>t.reposition())},getThemeDetails(e){const n=this.pOtheme(e);if(n.color.startsWith("bootstrap-")){let r=n.color.indexOf("-"),o=document.createElement("button");o.className="btn btn"+n.color.slice(r),document.body.appendChild(o),n.color=getComputedStyle(o).backgroundColor.replace(/\s+/gi,""),document.body.removeChild(o),o=void 0}return n.colors=this.calcColors(n.color),n},clearTheme(e,n){return e.content.classList.remove("jsPanel-content-filled","jsPanel-content-filledlight"),e.header.classList.remove("jsPanel-hdr-light"),e.header.classList.remove("jsPanel-hdr-dark"),e.style.backgroundColor="",this.setStyles(e.headertoolbar,{boxShadow:"",width:"",marginLeft:"",borderTopColor:"transparent"}),this.setStyles(e.content,{background:"",borderTopColor:"transparent"}),e.header.style.background="",Array.prototype.slice.call(e.controlbar.querySelectorAll(".jsPanel-icon")).concat([e.headerlogo,e.headertitle,e.headertoolbar,e.content]).forEach(r=>r.style.color=""),n&&n.call(e,e),e},applyColorTheme(e,n){if(e.style.backgroundColor=n.colors[0],e.header.style.backgroundColor=n.colors[0],e.header.style.color=n.colors[3],[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(r=>e.querySelector(r).style.color=n.colors[3]),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(r=>r.style.color=n.colors[3]),typeof e.options.theme=="string"&&n.filling==="filled"&&(e.content.style.borderTop=n.colors[3]==="#000000"?"1px solid rgba(0,0,0,0.15)":"1px solid rgba(255,255,255,0.15)"),n.colors[3]==="#000000"?e.header.classList.add("jsPanel-hdr-light"):e.header.classList.add("jsPanel-hdr-dark"),n.filling)switch(n.filling){case"filled":this.setStyles(e.content,{backgroundColor:n.colors[2],color:n.colors[3]});break;case"filledlight":e.content.style.backgroundColor=n.colors[1];break;case"filleddark":this.setStyles(e.content,{backgroundColor:n.colors[6],color:n.colors[7]});break;default:e.content.style.backgroundColor=n.filling,e.content.style.color=this.perceivedBrightness(n.filling)<=this.colorBrightnessThreshold?"#fff":"#000"}return e},applyCustomTheme(e,n){let r={bgPanel:"#ffffff",bgContent:"#ffffff",bgFooter:"#f5f5f5",colorHeader:"#000000",colorContent:"#000000",colorFooter:"#000000",border:void 0,borderRadius:void 0},o=typeof n=="object"?Object.assign(r,n):r,t=o.bgPanel,l=o.bgContent,c=o.colorHeader,f=o.colorContent,g=o.bgFooter,T=o.colorFooter;return this.colorNames[t]?e.style.background="#"+this.colorNames[t]:e.style.background=this.getCssVariableValue(t),this.colorNames[c]&&(c="#"+this.colorNames[c]),[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(j=>e.querySelector(j).style.color=this.getCssVariableValue(c)),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(j=>j.style.color=this.getCssVariableValue(c)),this.colorNames[l]?e.content.style.background="#"+this.colorNames[l]:e.content.style.background=this.getCssVariableValue(l),this.colorNames[f]?e.content.style.color="#"+this.colorNames[f]:e.content.style.color=this.getCssVariableValue(f),this.perceivedBrightness(c)>this.colorBrightnessThreshold?e.header.classList.add("jsPanel-hdr-dark"):e.header.classList.add("jsPanel-hdr-light"),this.perceivedBrightness(f)>this.colorBrightnessThreshold?e.content.style.borderTop="1px solid rgba(255,255,255,0.15)":e.content.style.borderTop="1px solid rgba(0,0,0,0.15)",this.colorNames[g]?e.footer.style.background="#"+this.colorNames[g]:e.footer.style.background=this.getCssVariableValue(g),this.colorNames[T]?e.footer.style.color="#"+this.colorNames[T]:e.footer.style.color=this.getCssVariableValue(T),o.border&&e.setBorder(o.border),o.borderRadius&&(e.options.borderRadius=void 0,e.setBorderRadius(o.borderRadius)),e},getCssVariableValue(e){if(e.startsWith("--"))return getComputedStyle(document.documentElement).getPropertyValue(e).replace(/\s+/g,"");if(e.startsWith("var")){let n=e.slice(e.indexOf("(")+1,e.indexOf(")"));return getComputedStyle(document.documentElement).getPropertyValue(n).replace(/\s+/g,"")}return e},getScrollbarWidth(e=document.body){if(e===document.body)return{y:window.innerWidth-document.documentElement.clientWidth,x:window.innerHeight-document.documentElement.clientHeight};{let n=getComputedStyle(e);return{y:e.offsetWidth-e.clientWidth-parseFloat(n.borderRightWidth)-parseFloat(n.borderLeftWidth),x:e.offsetHeight-e.clientHeight-parseFloat(n.borderBottomWidth)-parseFloat(n.borderTopWidth)}}},remClass(e,n){return n.trim().split(/\s+/).forEach(r=>e.classList.remove(r)),e},setClass(e,n){return n.trim().split(/\s+/).forEach(r=>e.classList.add(r)),e},setStyles(e,n){for(const[r,o]of Object.entries(n))e.style[r]=typeof o=="string"?O.getCssVariableValue(o):o;return e},setStyle(e,n){return this.setStyles.call(e,e,n)},strToHtml(e){return document.createRange().createContextualFragment(e)},toggleClass(e,n){return n.trim().split(/\s+/).forEach(r=>e.classList.contains(r)?e.classList.remove(r):e.classList.add(r)),e},emptyNode(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e},addScript(e,n="application/javascript",r){if(!document.querySelector(`script[src="${e}"]`)){const o=document.createElement("script");o.src=e,o.type=n,document.head.appendChild(o),r&&(o.onload=r)}},ajax(e,n){let r,o,t=new XMLHttpRequest;const l={method:"GET",async:!0,user:"",pwd:"",done:function(){if(n){let c=O.strToHtml(this.responseText);r.urlSelector&&(c=c.querySelector(r.urlSelector)),n.contentRemove(),n.content.append(c)}},autoresize:!0,autoreposition:!0};if(n&&typeof e=="string")r=Object.assign({},l,{url:e});else if(typeof e=="object"&&e.url)r=Object.assign({},l,e),r.url=e.url,r.async===!1&&(r.timeout=0,r.withCredentials&&(r.withCredentials=void 0),r.responseType&&(r.responseType=void 0));else{this.errorReporting&&O.errorpanel("XMLHttpRequest seems to miss the <mark>url</mark> parameter!");return}o=r.url.trim().split(/\s+/),r.url=encodeURI(o[0]),o.length>1&&(o.shift(),r.urlSelector=o.join(" ")),t.onreadystatechange=()=>{t.readyState===4&&(t.status===200?n?r.done.call(t,t,n):r.done.call(t,t):r.fail&&(n?r.fail.call(t,t,n):r.fail.call(t,t)),r.always&&(n?r.always.call(t,t,n):r.always.call(t,t)),n&&(r.autoresize||r.autoreposition)&&O.ajaxAutoresizeAutoreposition(n,r),O.ajaxAlwaysCallbacks.length&&O.ajaxAlwaysCallbacks.forEach(c=>{n?c.call(t,t,n):c.call(t,t)}))},t.open(r.method,r.url,r.async,r.user,r.pwd),t.timeout=r.timeout||0,r.withCredentials&&(t.withCredentials=r.withCredentials),r.responseType&&(t.responseType=r.responseType),r.beforeSend&&(n?r.beforeSend.call(t,t,n):r.beforeSend.call(t,t)),r.data?t.send(r.data):t.send(null)},fetch(e,n){let r;const o={bodyMethod:"text",autoresize:!0,autoreposition:!0,done:function(l,c){if(c){let f=O.strToHtml(l);c.contentRemove(),c.content.append(f)}}};if(n&&typeof e=="string")r=Object.assign({},o,{resource:encodeURI(e)});else if(typeof e=="object"&&e.resource)r=Object.assign({},o,e),r.resource=encodeURI(e.resource);else{this.errorReporting&&O.errorpanel("Fetch Request seems to miss the <mark>resource</mark> parameter!");return}const t=r.fetchInit||{};r.beforeSend&&(n?r.beforeSend.call(e,e,n):r.beforeSend.call(e,e)),fetch(r.resource,t).then(l=>{if(l.ok)return l[r.bodyMethod]()}).then(l=>{n?r.done.call(l,l,n):r.done.call(l,l),n&&(r.autoresize||r.autoreposition)&&O.ajaxAutoresizeAutoreposition(n,r)})},ajaxAutoresizeAutoreposition(e,n){const r=e.options.contentSize;if(typeof r=="string"&&r.match(/auto/i)){const o=r.split(" "),t=Object.assign({},{width:o[0],height:o[1]});n.autoresize&&e.resize(t),e.classList.contains("jsPanel-contextmenu")||n.autoreposition&&e.reposition()}else if(typeof r=="object"&&(r.width==="auto"||r.height==="auto")){const o=Object.assign({},r);n.autoresize&&e.resize(o),e.classList.contains("jsPanel-contextmenu")||n.autoreposition&&e.reposition()}},createPanelTemplate(e=!0){const n=document.createElement("div");return n.className="jsPanel",n.style.left="0",n.style.top="0",e&&["close","maximize","normalize","minimize","smallify"].forEach(r=>{n.setAttribute(`data-btn${r}`,"enabled")}),n.innerHTML=`<div class="jsPanel-hdr">
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
                            </div>`,e},createSnapArea(e,n,r){const o=document.createElement("div"),t=e.parentElement;o.className=`jsPanel-snap-area jsPanel-snap-area-${n}`,n==="lt"||n==="rt"||n==="rb"||n==="lb"?(o.style.width=r+"px",o.style.height=r+"px"):n==="ct"||n==="cb"?o.style.height=r+"px":(n==="lc"||n==="rc")&&(o.style.width=r+"px"),t!==document.body&&(o.style.position="absolute"),document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${n}`)||e.parentElement.appendChild(o)},removeSnapAreas(){document.querySelectorAll(".jsPanel-snap-area").forEach(e=>e.parentElement.removeChild(e))},extend(e){if(Object.prototype.toString.call(e)==="[object Object]")for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&(this.extensions[n]=e[n])},getPanels(e=function(){return this.classList.contains("jsPanel-standard")}){return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(n=>e.call(n,n)).sort((n,r)=>r.style.zIndex-n.style.zIndex)},processCallbacks(e,n,r="some",o,t){if(typeof n=="function"&&(n=[n]),r)return n[r](l=>l.call(e,e,o,t));n.forEach(l=>l.call(e,e,o,t))},resetZi(){this.zi=((e=O.ziBase)=>{let n=e;return{next:()=>n++}})(),Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((e,n)=>e.style.zIndex-n.style.zIndex).forEach(e=>e.style.zIndex=O.zi.next())},errorpanel(e){this.create({paneltype:"error",dragit:!1,resizeit:!1,theme:{bgPanel:"white",bgContent:"white",colorHeader:"rebeccapurple",colorContent:"#333333",border:"2px solid rebeccapurple"},borderRadius:".33rem",headerControls:"closeonly xs",headerTitle:"&#9888; jsPanel Error",contentSize:{width:"50%",height:"auto"},position:"center-top 0 5 down",animateIn:"jsPanelFadeIn",content:`<div class="jsPanel-error-content-separator"></div><p>${e}</p>`})},create(e={},n){O.zi||(O.zi=((p=O.ziBase)=>{let w=p;return{next:()=>w++}})()),e.config?(e=Object.assign({},this.defaults,e.config,e),delete e.config):e=Object.assign({},this.defaults,e),e.id?typeof e.id=="function"&&(e.id=e.id()):e.id=`jsPanel-${O.idCounter+=1}`;const r=document.getElementById(e.id);if(r!==null){if(r.classList.contains("jsPanel")&&r.front(),this.errorReporting){let p=`&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${e.id}</mark> already exists in the document.`;O.errorpanel(p)}return!1}let o=this.pOcontainer(e.container);if(typeof o=="object"&&o.length&&o.length>0&&(o=o[0]),!o)return this.errorReporting&&O.errorpanel("&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist"),!1;["onbeforeclose","onbeforemaximize","onbeforeminimize","onbeforenormalize","onbeforesmallify","onbeforeunsmallify","onclosed","onfronted","onmaximized","onminimized","onnormalized","onsmallified","onstatuschange","onunsmallified"].forEach(p=>{e[p]?typeof e[p]=="function"&&(e[p]=[e[p]]):e[p]=[]});const t=e.template||this.createPanelTemplate();t.options=e,t.closetimer=void 0,t.status="initialized",t.currentData={},t.header=t.querySelector(".jsPanel-hdr"),t.headerbar=t.header.querySelector(".jsPanel-headerbar"),t.titlebar=t.header.querySelector(".jsPanel-titlebar"),t.headerlogo=t.headerbar.querySelector(".jsPanel-headerlogo"),t.headertitle=t.headerbar.querySelector(".jsPanel-title"),t.controlbar=t.headerbar.querySelector(".jsPanel-controlbar"),t.headertoolbar=t.header.querySelector(".jsPanel-hdr-toolbar"),t.content=t.querySelector(".jsPanel-content"),t.footer=t.querySelector(".jsPanel-ftr"),t.snappableTo=!1,t.snapped=!1,t.droppableTo=!1,t.progressbar=t.autocloseProgressbar=t.querySelector(".jsPanel-progressbar");const l=new CustomEvent("jspanelloaded",{detail:e.id,cancelable:!0}),c=new CustomEvent("jspanelstatuschange",{detail:e.id,cancelable:!0}),f=new CustomEvent("jspanelbeforenormalize",{detail:e.id,cancelable:!0}),g=new CustomEvent("jspanelnormalized",{detail:e.id,cancelable:!0}),T=new CustomEvent("jspanelbeforemaximize",{detail:e.id,cancelable:!0}),F=new CustomEvent("jspanelmaximized",{detail:e.id,cancelable:!0}),R=new CustomEvent("jspanelbeforeminimize",{detail:e.id,cancelable:!0}),j=new CustomEvent("jspanelminimized",{detail:e.id,cancelable:!0}),V=new CustomEvent("jspanelbeforesmallify",{detail:e.id,cancelable:!0}),Z=new CustomEvent("jspanelsmallified",{detail:e.id,cancelable:!0}),le=new CustomEvent("jspanelsmallifiedmax",{detail:e.id,cancelable:!0}),Je=new CustomEvent("jspanelbeforeunsmallify",{detail:e.id,cancelable:!0}),Ne=new CustomEvent("jspanelfronted",{detail:e.id,cancelable:!0}),gt=new CustomEvent("jspanelbeforeclose",{detail:e.id,cancelable:!0}),Yt=new CustomEvent("jspanelclosed",{detail:e.id,cancelable:!0}),sn=new CustomEvent("jspanelcloseduser",{detail:e.id,cancelable:!0});[l,c,f,g,T,F,R,j,V,Z,le,Je,Ne,gt].forEach(p=>p.panel=t);const Tn=t.querySelector(".jsPanel-btn-close"),Ct=t.querySelector(".jsPanel-btn-maximize"),it=t.querySelector(".jsPanel-btn-normalize"),Mt=t.querySelector(".jsPanel-btn-smallify"),Qn=t.querySelector(".jsPanel-btn-minimize");Tn&&O.pointerup.forEach(p=>{Tn.addEventListener(p,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;t.close(null,!0)})}),Ct&&O.pointerup.forEach(p=>{Ct.addEventListener(p,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;t.maximize()})}),it&&O.pointerup.forEach(p=>{it.addEventListener(p,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;t.normalize()})}),Mt&&O.pointerup.forEach(p=>{Mt.addEventListener(p,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;t.status==="normalized"||t.status==="maximized"?t.smallify():(t.status==="smallified"||t.status==="smallifiedmax")&&t.unsmallify()})}),Qn&&O.pointerup.forEach(p=>{Qn.addEventListener(p,w=>{if(w.preventDefault(),w.button&&w.button>0)return!1;t.minimize()})});let yn=O.extensions;for(let p in yn)Object.prototype.hasOwnProperty.call(yn,p)&&(t[p]=yn[p]);if(t.setBorder=p=>{let w=O.pOborder(p);return w[2].length||(w[2]=t.style.backgroundColor),w=w.join(" "),t.style.border=w,t.options.border=w,t},t.setBorderRadius=p=>{typeof p=="string"&&(p.startsWith("--")||p.startsWith("var"))&&(p=p.replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," "),p=O.getCssVariableValue(p)),typeof p=="number"&&(p+="px"),t.style.borderRadius=p;const w=getComputedStyle(t);return t.options.header?(t.header.style.borderTopLeftRadius=w.borderTopLeftRadius,t.header.style.borderTopRightRadius=w.borderTopRightRadius):(t.content.style.borderTopLeftRadius=w.borderTopLeftRadius,t.content.style.borderTopRightRadius=w.borderTopRightRadius),t.options.footerToolbar?(t.footer.style.borderBottomRightRadius=w.borderBottomRightRadius,t.footer.style.borderBottomLeftRadius=w.borderBottomLeftRadius):(t.content.style.borderBottomRightRadius=w.borderBottomRightRadius,t.content.style.borderBottomLeftRadius=w.borderBottomLeftRadius),t},t.setTheme=(p=e.theme,w)=>{let D;if(t.status==="minimized"&&(D=!0,t.normalize()),O.clearTheme(t),typeof p=="object")e.border=void 0,O.applyCustomTheme(t,p);else if(typeof p=="string"){p==="none"&&(p="white");let b=O.getThemeDetails(p);O.applyColorTheme(t,b)}return D&&t.minimize(),w&&w.call(t,t),t},t.remove=(p,w,D)=>{t.parentElement.removeChild(t),document.getElementById(p)?D&&D.call(t,p,t):(t.removeMinimizedReplacement(),t.status="closed",w&&document.dispatchEvent(sn),document.dispatchEvent(Yt),t.options.onclosed&&O.processCallbacks(t,t.options.onclosed,"every",w),O.autopositionRemaining(t),D&&D.call(p,p)),window.removeEventListener("resize",t.windowResizeHandler),document.removeEventListener("jspanelresize",t.parentResizeHandler)},t.close=(p,w)=>{if(t.parentElement){if(t.closetimer&&window.clearInterval(t.closetimer),document.dispatchEvent(gt),t.statusBefore=t.status,t.options.onbeforeclose&&t.options.onbeforeclose.length>0&&!O.processCallbacks(t,t.options.onbeforeclose,"some",t.status,w))return t;t.options.animateOut?(t.options.animateIn&&O.remClass(t,t.options.animateIn),O.setClass(t,t.options.animateOut),t.addEventListener("animationend",D=>{D.stopPropagation(),t.remove(t.id,w,p)})):t.remove(t.id,w,p)}},t.maximize=(p,w)=>{if(t.statusBefore=t.status,e.onbeforemaximize&&e.onbeforemaximize.length>0&&!O.processCallbacks(t,e.onbeforemaximize,"some",t.statusBefore))return t;document.dispatchEvent(T);const D=t.parentElement,b=O.pOcontainment(e.maximizedMargin);return D===document.body?(t.style.width=document.documentElement.clientWidth-b[1]-b[3]+"px",t.style.height=document.documentElement.clientHeight-b[0]-b[2]+"px",t.style.left=b[3]+"px",t.style.top=b[0]+"px"):(t.style.width=D.clientWidth-b[1]-b[3]+"px",t.style.height=D.clientHeight-b[0]-b[2]+"px",t.style.left=b[3]+"px",t.style.top=b[0]+"px"),Mt.style.transform="unset",t.removeMinimizedReplacement(),t.status="maximized",t.setControls([".jsPanel-btn-maximize"]),w||t.front(),document.dispatchEvent(F),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(t,e.onstatuschange,"every",t.statusBefore),p&&p.call(t,t,t.statusBefore),e.onmaximized&&O.processCallbacks(t,e.onmaximized,"every",t.statusBefore),t},t.minimize=p=>{if(t.status==="minimized"||(t.statusBefore=t.status,e.onbeforeminimize&&e.onbeforeminimize.length>0&&!O.processCallbacks(t,e.onbeforeminimize,"some",t.statusBefore)))return t;if(document.dispatchEvent(R),!document.getElementById("jsPanel-replacement-container")){const w=document.createElement("div");w.id="jsPanel-replacement-container",document.body.append(w)}if(t.style.left="-9999px",t.status="minimized",document.dispatchEvent(j),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(t,e.onstatuschange,"every",t.statusBefore),e.minimizeTo){let w=t.createMinimizedReplacement(),D,b,x;switch(e.minimizeTo){case"default":document.getElementById("jsPanel-replacement-container").append(w);break;case"parentpanel":b=t.closest(".jsPanel-content").parentElement,x=b.querySelectorAll(".jsPanel-minimized-box"),D=x[x.length-1],D.append(w);break;case"parent":b=t.parentElement,D=b.querySelector(".jsPanel-minimized-container"),D||(D=document.createElement("div"),D.className="jsPanel-minimized-container",b.append(D)),D.append(w);break;default:document.querySelector(e.minimizeTo).append(w)}}return p&&p.call(t,t,t.statusBefore),e.onminimized&&O.processCallbacks(t,e.onminimized,"every",t.statusBefore),t},t.normalize=p=>(t.status==="normalized"||(t.statusBefore=t.status,e.onbeforenormalize&&e.onbeforenormalize.length>0&&!O.processCallbacks(t,e.onbeforenormalize,"some",t.statusBefore))||(document.dispatchEvent(f),t.style.width=t.currentData.width,t.style.height=t.currentData.height,t.snapped?t.snap(t.snapped,!0):(t.style.left=t.currentData.left,t.style.top=t.currentData.top),Mt.style.transform="unset",t.removeMinimizedReplacement(),t.status="normalized",t.setControls([".jsPanel-btn-normalize"]),t.front(),document.dispatchEvent(g),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(t,e.onstatuschange,"every",t.statusBefore),p&&p.call(t,t,t.statusBefore),e.onnormalized&&O.processCallbacks(t,e.onnormalized,"every",t.statusBefore)),t),t.smallify=p=>{if(t.status==="smallified"||t.status==="smallifiedmax"||(t.statusBefore=t.status,e.onbeforesmallify&&e.onbeforesmallify.length>0&&!O.processCallbacks(t,e.onbeforesmallify,"some",t.statusBefore)))return t;document.dispatchEvent(V),t.style.overflow="hidden";const w=window.getComputedStyle(t),D=parseFloat(window.getComputedStyle(t.headerbar).height);t.style.height=parseFloat(w.borderTopWidth)+parseFloat(w.borderBottomWidth)+D+"px",Mt.style.transform="rotate(180deg)",t.status==="normalized"?(t.setControls([".jsPanel-btn-normalize"]),t.status="smallified",document.dispatchEvent(Z),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(t,e.onstatuschange,"every",t.statusBefore)):t.status==="maximized"&&(t.setControls([".jsPanel-btn-maximize"]),t.status="smallifiedmax",document.dispatchEvent(le),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(t,e.onstatuschange,"every",t.statusBefore));const b=t.querySelectorAll(".jsPanel-minimized-box");return b[b.length-1].style.display="none",p&&p.call(t,t,t.statusBefore),e.onsmallified&&O.processCallbacks(t,e.onsmallified,"every",t.statusBefore),t},t.unsmallify=p=>{if(t.statusBefore=t.status,t.status==="smallified"||t.status==="smallifiedmax"){if(e.onbeforeunsmallify&&e.onbeforeunsmallify.length>0&&!O.processCallbacks(t,e.onbeforeunsmallify,"some",t.statusBefore))return t;document.dispatchEvent(Je),t.style.overflow="visible",t.front(),t.status==="smallified"?(t.style.height=t.currentData.height,t.setControls([".jsPanel-btn-normalize"]),t.status="normalized",document.dispatchEvent(g),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(t,e.onstatuschange,"every",t.statusBefore)):t.status==="smallifiedmax"?t.maximize():t.status==="minimized"&&t.normalize(),Mt.style.transform="rotate(0deg)";const w=t.querySelectorAll(".jsPanel-minimized-box");w[w.length-1].style.display="flex",p&&p.call(t,t,t.statusBefore),e.onunsmallified&&O.processCallbacks(t,e.onunsmallified,"every",t.statusBefore)}return t},t.front=(p,w=!0)=>{if(t.status==="minimized")t.statusBefore==="maximized"?t.maximize():t.normalize();else{const D=Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(b=>b.style.zIndex);Math.max(...D)>t.style.zIndex&&(t.style.zIndex=O.zi.next()),O.resetZi()}return document.dispatchEvent(Ne),p&&p.call(t,t),e.onfronted&&w&&O.processCallbacks(t,e.onfronted,"every",t.status),t},t.snap=(p,w=!1)=>{if(w||(t.currentData.beforeSnap={width:t.currentData.width,height:t.currentData.height}),p&&typeof p=="function"&&!w)p.call(t,t,t.snappableTo);else if(p!==!1){let D=[0,0];if(t.options.dragit.snap.containment&&t.options.dragit.containment){const b=O.pOcontainment(t.options.dragit.containment),x=t.snappableTo;x.startsWith("left")?D[0]=b[3]:x.startsWith("right")&&(D[0]=-b[1]),x.endsWith("top")?D[1]=b[0]:x.endsWith("bottom")&&(D[1]=-b[2])}t.reposition(`${t.snappableTo} ${D[0]} ${D[1]}`)}w||(t.snapped=t.snappableTo)},t.move=(p,w)=>{let D=t.overlaps(p,"paddingbox"),b=t.parentElement;return p.appendChild(t),t.options.container=p,t.style.left=D.left+"px",t.style.top=D.top+"px",t.saveCurrentDimensions(),t.saveCurrentPosition(),t.calcSizeFactors(),w&&w.call(t,t,p,b),t},t.closeChildpanels=p=>(t.getChildpanels().forEach(w=>w.close()),p&&p.call(t,t),t),t.getChildpanels=p=>{const w=t.content.querySelectorAll(".jsPanel");return p&&w.forEach((D,b,x)=>{p.call(D,D,b,x)}),w},t.isChildpanel=p=>{const w=t.closest(".jsPanel-content"),D=w?w.parentElement:null;return p&&p.call(t,t,D),w?D:!1},t.contentRemove=p=>(O.emptyNode(t.content),p&&p.call(t,t),t),t.createMinimizedReplacement=()=>{const p=O.createMinimizedTemplate(),w=window.getComputedStyle(t.headertitle).color,D=window.getComputedStyle(t),b=e.iconfont,x=p.querySelector(".jsPanel-controlbar");return t.options.header!=="auto-show-hide"?O.setStyles(p,{backgroundColor:D.backgroundColor,backgroundPositionX:D.backgroundPositionX,backgroundPositionY:D.backgroundPositionY,backgroundRepeat:D.backgroundRepeat,backgroundAttachment:D.backgroundAttachment,backgroundImage:D.backgroundImage,backgroundSize:D.backgroundSize,backgroundOrigin:D.backgroundOrigin,backgroundClip:D.backgroundClip}):p.style.backgroundColor=window.getComputedStyle(t.header).backgroundColor,p.id=t.id+"-min",p.querySelector(".jsPanel-headerbar").replaceChild(t.headerlogo.cloneNode(!0),p.querySelector(".jsPanel-headerlogo")),p.querySelector(".jsPanel-titlebar").replaceChild(t.headertitle.cloneNode(!0),p.querySelector(".jsPanel-title")),p.querySelector(".jsPanel-titlebar").setAttribute("title",t.headertitle.textContent),p.querySelector(".jsPanel-title").style.color=w,x.style.color=w,x.querySelectorAll("button").forEach(ie=>ie.style.color=w),["jsPanel-hdr-dark","jsPanel-hdr-light"].forEach(ie=>{t.header.classList.contains(ie)&&p.querySelector(".jsPanel-hdr").classList.add(ie)}),t.setIconfont(b,p),t.dataset.btnnormalize==="enabled"?O.pointerup.forEach(ie=>{p.querySelector(".jsPanel-btn-normalize").addEventListener(ie,ae=>{if(ae.preventDefault(),ae.button&&ae.button>0)return!1;t.normalize()})}):x.querySelector(".jsPanel-btn-normalize").style.display="none",t.dataset.btnmaximize==="enabled"?O.pointerup.forEach(ie=>{p.querySelector(".jsPanel-btn-maximize").addEventListener(ie,ae=>{if(ae.preventDefault(),ae.button&&ae.button>0)return!1;t.maximize()})}):x.querySelector(".jsPanel-btn-maximize").style.display="none",t.dataset.btnclose==="enabled"?O.pointerup.forEach(ie=>{p.querySelector(".jsPanel-btn-close").addEventListener(ie,ae=>{if(ae.preventDefault(),ae.button&&ae.button>0)return!1;t.close(null,!0)})}):x.querySelector(".jsPanel-btn-close").style.display="none",p},t.removeMinimizedReplacement=()=>{const p=document.getElementById(`${t.id}-min`);p&&p.parentElement.removeChild(p)},t.drag=(p={})=>{let w,D,b;const x=new CustomEvent("jspaneldragstart",{detail:t.id}),ie=new CustomEvent("jspaneldrag",{detail:t.id}),ae=new CustomEvent("jspaneldragstop",{detail:t.id});[x,ie,ae].forEach(Te=>Te.panel=t);const M=Te=>{let Se=Te.split("-");return Se.forEach((me,xe)=>{Se[xe]=me.charAt(0).toUpperCase()+me.slice(1)}),"snap"+Se.join("")};function U(Te){Te.relatedTarget===null&&O.pointermove.forEach(Se=>{document.removeEventListener(Se,D,!1),t.style.opacity=1})}let ze=p.handles||O.defaults.dragit.handles,Xe=p.cursor||O.defaults.dragit.cursor;function Dt(Te){if(O.pointermove.forEach(Se=>document.removeEventListener(Se,D)),O.removeSnapAreas(),w){if(t.style.opacity=1,w=void 0,b.snap){switch(t.snappableTo){case"left-top":t.snap(b.snap.snapLeftTop);break;case"center-top":t.snap(b.snap.snapCenterTop);break;case"right-top":t.snap(b.snap.snapRightTop);break;case"right-center":t.snap(b.snap.snapRightCenter);break;case"right-bottom":t.snap(b.snap.snapRightBottom);break;case"center-bottom":t.snap(b.snap.snapCenterBottom);break;case"left-bottom":t.snap(b.snap.snapLeftBottom);break;case"left-center":t.snap(b.snap.snapLeftCenter);break}b.snap.callback&&t.snappableTo&&typeof b.snap.callback=="function"&&(b.snap.callback.call(t,t),b.snap.repositionOnSnap&&b.snap[M(t.snappableTo)]!==!1&&t.repositionOnSnap(t.snappableTo)),t.snappableTo&&b.snap.repositionOnSnap&&b.snap[M(t.snappableTo)]&&t.repositionOnSnap(t.snappableTo)}if(t.droppableTo&&t.droppableTo){let Se=t.parentElement;t.move(t.droppableTo),b.drop.callback&&b.drop.callback.call(t,t,t.droppableTo,Se)}if(document.dispatchEvent(ae),b.stop.length){let Se=window.getComputedStyle(t),me={left:parseFloat(Se.left),top:parseFloat(Se.top),width:parseFloat(Se.width),height:parseFloat(Se.height)};O.processCallbacks(t,b.stop,!1,me,Te)}t.saveCurrentPosition(),t.calcSizeFactors()}t.controlbar.style.pointerEvents="inherit",t.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Se=>Se.style.pointerEvents="auto"),document.removeEventListener(Te,Dt)}return t.querySelectorAll(ze).forEach(Te=>{Te.style.touchAction="none",Te.style.cursor=Xe,O.pointerdown.forEach(Se=>{Te.addEventListener(Se,me=>{if(me.button&&me.button>0||(b=Object.assign({},O.defaults.dragit,p),b.disableOnMaximized&&t.status==="maximized"))return!1;if((b.containment||b.containment===0)&&(b.containment=O.pOcontainment(b.containment)),b.grid&&Array.isArray(b.grid)&&b.grid.length===1&&(b.grid[1]=b.grid[0]),b.snap&&(typeof b.snap=="object"?b.snap=Object.assign({},O.defaultSnapConfig,b.snap):b.snap=O.defaultSnapConfig),me.target.closest(".jsPanel-ftr-btn"))return;t.controlbar.style.pointerEvents="none",t.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(qe=>qe.style.pointerEvents="none");let xe=window.getComputedStyle(t),Ie=parseFloat(xe.left),ve=parseFloat(xe.top),G=parseFloat(xe.width),Be=parseFloat(xe.height),Pe=me.touches?me.touches[0].clientX:me.clientX,se=me.touches?me.touches[0].clientY:me.clientY,fe=t.parentElement,bt=fe.getBoundingClientRect(),re=window.getComputedStyle(fe),Le=t.getScaleFactor(),Xt=0,Pt=O.getScrollbarWidth(fe);D=qe=>{if(qe.preventDefault(),!w){if(document.dispatchEvent(x),t.style.opacity=b.opacity,t.snapped&&b.snap.resizeToPreSnap&&t.currentData.beforeSnap){t.resize(t.currentData.beforeSnap.width+" "+t.currentData.beforeSnap.height),t.setControls([".jsPanel-btn-normalize"]);let ee=t.getBoundingClientRect(),we=Pe-(ee.left+ee.width),ce=ee.width/2;we>-ce&&(Xt=we+ce)}if(t.front(),t.snapped=!1,t.status==="maximized"&&(t.setControls([".jsPanel-btn-normalize"]),t.status="normalized"),b.drop&&b.drop.dropZones){let ee=b.drop.dropZones.map(ce=>O.pOcontainer(ce)),we=[];ee.forEach(function(ce){ce.length?ce.forEach(function(ke){we.push(ke)}):we.push(ce)}),we=we.filter(function(ce,ke,De){return De.indexOf(ce)===ke}),b.drop.dropZones=we}b.start.length&&O.processCallbacks(t,b.start,!1,{left:Ie,top:ve,width:G,height:Be},qe)}w=1;let yt,Ce,Fe,dt,We,be,ge,vt,Oe,ot,Ge=qe.touches?qe.touches[0].clientX:qe.clientX,He=qe.touches?qe.touches[0].clientY:qe.clientY,Ae=window.getComputedStyle(t),oe;if(fe===document.body){let ee=t.getBoundingClientRect();Oe=window.innerWidth-parseInt(re.borderLeftWidth,10)-parseInt(re.borderRightWidth,10)-(ee.left+ee.width),ot=window.innerHeight-parseInt(re.borderTopWidth,10)-parseInt(re.borderBottomWidth,10)-(ee.top+ee.height)}else Oe=parseInt(re.width,10)-parseInt(re.borderLeftWidth,10)-parseInt(re.borderRightWidth,10)-(parseInt(Ae.left,10)+parseInt(Ae.width,10)),ot=parseInt(re.height,10)-parseInt(re.borderTopWidth,10)-parseInt(re.borderBottomWidth,10)-(parseInt(Ae.top,10)+parseInt(Ae.height,10));yt=parseFloat(Ae.left),Fe=parseFloat(Ae.top),We=Oe,ge=ot,b.snap&&(b.snap.trigger==="panel"?(Ce=yt**2,dt=Fe**2,be=We**2,vt=ge**2):b.snap.trigger==="pointer"&&(t.options.container==="window"?(yt=Ge,Fe=He,We=window.innerWidth-Ge,ge=window.innerHeight-He,Ce=Ge**2,dt=Fe**2,be=We**2,vt=ge**2):(oe=t.overlaps(fe,"paddingbox",qe),yt=oe.pointer.left,Fe=oe.pointer.top,We=oe.pointer.right,ge=oe.pointer.bottom,Ce=oe.pointer.left**2,dt=oe.pointer.top**2,be=oe.pointer.right**2,vt=oe.pointer.bottom**2)));let Me=Math.sqrt(Ce+dt),H=Math.sqrt(Ce+vt),Ke=Math.sqrt(be+dt),Ze=Math.sqrt(be+vt),ht=Math.abs(yt-We)/2,K=Math.abs(Fe-ge)/2,Rt=Math.sqrt(Ce+K**2),Nt=Math.sqrt(dt+ht**2),Qe=Math.sqrt(be+K**2),Gt=Math.sqrt(vt+ht**2);if(window.getSelection().removeAllRanges(),document.dispatchEvent(ie),(!b.axis||b.axis==="x")&&(t.style.left=Ie+(Ge-Pe)/Le.x+Xt+"px"),(!b.axis||b.axis==="y")&&(t.style.top=ve+(He-se)/Le.y+"px"),b.grid){let ee=b.grid,we=b.axis,ce=ee[0]*Math.round((Ie+(Ge-Pe))/ee[0]),ke=ee[1]*Math.round((ve+(He-se))/ee[1]);(!we||we==="x")&&(t.style.left=`${ce}px`),(!we||we==="y")&&(t.style.top=`${ke}px`)}if(b.containment||b.containment===0){let ee=b.containment,we,ce;if(t.options.container==="window")we=window.innerWidth-parseFloat(Ae.width)-ee[1]-Pt.y,ce=window.innerHeight-parseFloat(Ae.height)-ee[2]-Pt.x;else{let ke=parseFloat(re.borderLeftWidth)+parseFloat(re.borderRightWidth),De=parseFloat(re.borderTopWidth)+parseFloat(re.borderBottomWidth);we=bt.width/Le.x-parseFloat(Ae.width)-ee[1]-ke-Pt.y,ce=bt.height/Le.y-parseFloat(Ae.height)-ee[2]-De-Pt.x}parseFloat(t.style.left)<=ee[3]&&(t.style.left=ee[3]+"px"),parseFloat(t.style.top)<=ee[0]&&(t.style.top=ee[0]+"px"),parseFloat(t.style.left)>=we&&(t.style.left=we+"px"),parseFloat(t.style.top)>=ce&&(t.style.top=ce+"px")}if(b.drag.length){let ee={left:yt,top:Fe,right:We,bottom:ge,width:parseFloat(Ae.width),height:parseFloat(Ae.height)};O.processCallbacks(t,b.drag,!1,ee,qe)}if(b.snap){let ee=b.snap.sensitivity,we=fe===document.body?window.innerWidth/8:bt.width/8,ce=fe===document.body?window.innerHeight/8:bt.height/8;t.snappableTo=!1,O.removeSnapAreas(),Me<ee?b.snap.snapLeftTop!==!1&&(!b.snap.active||b.snap.active==="both"?(t.snappableTo="left-top",O.createSnapArea(t,"lt",ee)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(oe.pointer.left>0&&oe.pointer.top>0?(t.snappableTo="left-top",O.createSnapArea(t,"lt",ee)):(t.snappableTo=!1,O.removeSnapAreas()))):H<ee?b.snap.snapLeftBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(t.snappableTo="left-bottom",O.createSnapArea(t,"lb",ee)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(oe.pointer.left>0&&oe.pointer.bottom>0?(t.snappableTo="left-bottom",O.createSnapArea(t,"lb",ee)):(t.snappableTo=!1,O.removeSnapAreas()))):Ke<ee?b.snap.snapRightTop!==!1&&(!b.snap.active||b.snap.active==="both"?(t.snappableTo="right-top",O.createSnapArea(t,"rt",ee)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(oe.pointer.right>0&&oe.pointer.top>0?(t.snappableTo="right-top",O.createSnapArea(t,"rt",ee)):(t.snappableTo=!1,O.removeSnapAreas()))):Ze<ee?b.snap.snapRightBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(t.snappableTo="right-bottom",O.createSnapArea(t,"rb",ee)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(oe.pointer.right>0&&oe.pointer.bottom>0?(t.snappableTo="right-bottom",O.createSnapArea(t,"rb",ee)):(t.snappableTo=!1,O.removeSnapAreas()))):Fe<ee&&Nt<we?b.snap.snapCenterTop!==!1&&(!b.snap.active||b.snap.active==="both"?(t.snappableTo="center-top",O.createSnapArea(t,"ct",ee)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(oe.pointer.top>0?(t.snappableTo="center-top",O.createSnapArea(t,"ct",ee)):(t.snappableTo=!1,O.removeSnapAreas()))):yt<ee&&Rt<ce?b.snap.snapLeftCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(t.snappableTo="left-center",O.createSnapArea(t,"lc",ee)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(oe.pointer.left>0?(t.snappableTo="left-center",O.createSnapArea(t,"lc",ee)):(t.snappableTo=!1,O.removeSnapAreas()))):We<ee&&Qe<ce?b.snap.snapRightCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(t.snappableTo="right-center",O.createSnapArea(t,"rc",ee)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(oe.pointer.right>0?(t.snappableTo="right-center",O.createSnapArea(t,"rc",ee)):(t.snappableTo=!1,O.removeSnapAreas()))):ge<ee&&Gt<we&&b.snap.snapCenterBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(t.snappableTo="center-bottom",O.createSnapArea(t,"cb",ee)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(oe.pointer.bottom>0?(t.snappableTo="center-bottom",O.createSnapArea(t,"cb",ee)):(t.snappableTo=!1,O.removeSnapAreas())))}if(b.drop&&b.drop.dropZones){let ee=O.isIE?"msElementsFromPoint":"elementsFromPoint",we=document[ee](qe.clientX,qe.clientY);Array.isArray(we)||(we=Array.prototype.slice.call(we)),b.drop.dropZones.forEach(ce=>{we.includes(ce)&&(t.droppableTo=ce)}),we.includes(t.droppableTo)||(t.droppableTo=!1)}},O.pointermove.forEach(qe=>document.addEventListener(qe,D)),window.addEventListener("mouseout",U,!1)})}),O.pointerup.forEach(Se=>{document.addEventListener(Se,Dt),window.removeEventListener("mouseout",U)}),p.disable&&(Te.style.pointerEvents="none")}),t},t.dragit=p=>{const w=Object.assign({},O.defaults.dragit,e.dragit),D=t.querySelectorAll(w.handles);return p==="disable"?D.forEach(b=>b.style.pointerEvents="none"):D.forEach(b=>b.style.pointerEvents="auto"),t},t.sizeit=(p={})=>{const w=new CustomEvent("jspanelresizestart",{detail:t.id}),D=new CustomEvent("jspanelresize",{detail:t.id}),b=new CustomEvent("jspanelresizestop",{detail:t.id});[w,D,b].forEach(me=>me.panel=t);let x={},ie,ae,M,U,ze,Xe;x.handles=p.handles||O.defaults.resizeit.handles,x.handles.split(",").forEach(me=>{const xe=document.createElement("DIV");xe.className=`jsPanel-resizeit-handle jsPanel-resizeit-${me.trim()}`,t.append(xe)});let Dt=p.aspectRatio?p.aspectRatio:!1;function Te(me){me.relatedTarget===null&&O.pointermove.forEach(xe=>document.removeEventListener(xe,ie,!1))}function Se(me){if(O.pointermove.forEach(xe=>document.removeEventListener(xe,ie,!1)),me.target.classList&&me.target.classList.contains("jsPanel-resizeit-handle")){let xe,Ie,ve=me.target.className;if(ve.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)&&(xe=!0),ve.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)&&(Ie=!0),x.grid&&Array.isArray(x.grid)){x.grid.length===1&&(x.grid[1]=x.grid[0]);const G=parseFloat(t.style.width),Be=parseFloat(t.style.height),Pe=G%x.grid[0],se=Be%x.grid[1],fe=parseFloat(t.style.left),bt=parseFloat(t.style.top),re=fe%x.grid[0],Le=bt%x.grid[1];Pe<x.grid[0]/2?t.style.width=G-Pe+"px":t.style.width=G+(x.grid[0]-Pe)+"px",se<x.grid[1]/2?t.style.height=Be-se+"px":t.style.height=Be+(x.grid[1]-se)+"px",xe&&(re<x.grid[0]/2?t.style.left=fe-re+"px":t.style.left=fe+(x.grid[0]-re)+"px"),Ie&&(Le<x.grid[1]/2?t.style.top=bt-Le+"px":t.style.top=bt+(x.grid[1]-Le)+"px")}}if(ae){t.content.style.pointerEvents="inherit",ae=void 0,t.saveCurrentDimensions(),t.saveCurrentPosition(),t.calcSizeFactors();let xe=t.controlbar.querySelector(".jsPanel-btn-smallify"),Ie=t.getBoundingClientRect();if(xe&&Ie.height>Xe+5&&(xe.style.transform="rotate(0deg)"),document.dispatchEvent(b),x.stop.length){let ve=window.getComputedStyle(t),G={left:parseFloat(ve.left),top:parseFloat(ve.top),width:parseFloat(ve.width),height:parseFloat(ve.height)};O.processCallbacks(t,x.stop,!1,G,me)}}t.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(xe=>xe.style.pointerEvents="auto"),x.aspectRatio=Dt,document.removeEventListener(me,Se)}return t.querySelectorAll(".jsPanel-resizeit-handle").forEach(me=>{me.style.touchAction="none",O.pointerdown.forEach(xe=>{me.addEventListener(xe,Ie=>{if(Ie.preventDefault(),Ie.stopPropagation(),Ie.button&&Ie.button>0)return!1;let ve=1;if(x=Object.assign({},O.defaults.resizeit,p),(x.containment||x.containment===0)&&(x.containment=O.pOcontainment(x.containment)),x.aspectRatio&&x.aspectRatio===!0&&(x.aspectRatio="panel"),O.modifier){let ce=O.modifier;ce.altKey?x.aspectRatio="content":ce.ctrlKey?x.aspectRatio="panel":ce.shiftKey&&(x.aspectRatio=!1,ve=2)}let G=typeof x.maxWidth=="function"?x.maxWidth():x.maxWidth||1e4,Be=typeof x.maxHeight=="function"?x.maxHeight():x.maxHeight||1e4,Pe=typeof x.minWidth=="function"?x.minWidth():x.minWidth,se=typeof x.minHeight=="function"?x.minHeight():x.minHeight;t.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(ce=>ce.style.pointerEvents="none");const fe=t.parentElement,bt=fe.tagName.toLowerCase(),re=t.getBoundingClientRect(),Le=fe.getBoundingClientRect(),Xt=window.getComputedStyle(fe,null),Pt=parseInt(Xt.borderLeftWidth,10),qe=parseInt(Xt.borderTopWidth,10),yt=Xt.getPropertyValue("position"),Ce=Ie.clientX||Ie.clientX===0||Ie.touches[0].clientX,Fe=Ie.clientY||Ie.clientY===0||Ie.touches[0].clientY,dt=Ce/Fe,We=Ie.target.classList,be=t.getScaleFactor(),ge=re.width/re.height,vt=t.content.getBoundingClientRect(),Oe=vt.width/vt.height,ot=t.header.getBoundingClientRect().height,Ge=t.footer.getBoundingClientRect().height||0;let He=re.left,Ae=re.top,oe=1e4,Me=1e4,H=1e4,Ke=1e4;ze=re.width,Xe=re.height,bt!=="body"&&(He=re.left-Le.left+fe.scrollLeft,Ae=re.top-Le.top+fe.scrollTop),bt==="body"&&x.containment?(oe=document.documentElement.clientWidth-re.left,H=document.documentElement.clientHeight-re.top,Me=re.width+re.left,Ke=re.height+re.top):x.containment&&(yt==="static"?(oe=Le.width-re.left+Pt,H=Le.height+Le.top-re.top+qe,Me=re.width+(re.left-Le.left)-Pt,Ke=re.height+(re.top-Le.top)-qe):(oe=fe.clientWidth-(re.left-Le.left)/be.x+Pt,H=fe.clientHeight-(re.top-Le.top)/be.y+qe,Me=(re.width+re.left-Le.left)/be.x-Pt,Ke=t.clientHeight+(re.top-Le.top)/be.y-qe)),x.containment&&(Me-=x.containment[3],Ke-=x.containment[0],oe-=x.containment[1],H-=x.containment[2]);const Ze=window.getComputedStyle(t),ht=parseFloat(Ze.width)-re.width,K=parseFloat(Ze.height)-re.height;let Rt=parseFloat(Ze.left)-re.left,Nt=parseFloat(Ze.top)-re.top;fe!==document.body&&(Rt+=Le.left,Nt+=Le.top);let Qe=parseInt(Ze.borderTopWidth,10),Gt=parseInt(Ze.borderRightWidth,10),ee=parseInt(Ze.borderBottomWidth,10),we=parseInt(Ze.borderLeftWidth,10);ie=ce=>{ce.preventDefault(),ae||(document.dispatchEvent(w),x.start.length&&O.processCallbacks(t,x.start,!1,{width:ze,height:Xe,left:He,top:Ae},ce),t.front(),t.status==="maximized"&&(t.status="normalized",t.controlbar.querySelector(".jsPanel-btn-maximize")&&t.setControlStatus("maximize","show"),t.controlbar.querySelector(".jsPanel-btn-normalize")&&t.setControlStatus("normalize","hide")),re.height>Xe+5&&(t.status="normalized",t.setControls([".jsPanel-btn-normalize"]))),ae=1,document.dispatchEvent(D);let ke=ce.touches?ce.touches[0].clientX:ce.clientX,De=ce.touches?ce.touches[0].clientY:ce.clientY,$e;We.contains("jsPanel-resizeit-e")?(M=ze+(ke-Ce)*ve/be.x+ht,M>=oe&&(M=oe),M>=G&&(M=G),M<=Pe&&(M=Pe),t.style.width=M+"px",ve===2&&(t.style.left=He-(ke-Ce)+"px"),x.aspectRatio==="content"?(t.style.height=(M-Gt-we)/Oe+ot+Ge+Qe+ee+"px",x.containment&&($e=t.overlaps(fe),$e.bottom<=x.containment[2]&&(t.style.height=H+"px",t.style.width=H*Oe+"px"))):x.aspectRatio==="panel"&&(t.style.height=M/ge+"px",x.containment&&($e=t.overlaps(fe),$e.bottom<=x.containment[2]&&(t.style.height=H+"px",t.style.width=H*ge+"px")))):We.contains("jsPanel-resizeit-s")?(U=Xe+(De-Fe)*ve/be.y+K,U>=H&&(U=H),U>=Be&&(U=Be),U<=se&&(U=se),t.style.height=U+"px",ve===2&&(t.style.top=Ae-(De-Fe)+"px"),x.aspectRatio==="content"?(t.style.width=(U-ot-Ge-Qe-ee)*Oe+Qe+ee+"px",x.containment&&($e=t.overlaps(fe),$e.right<=x.containment[1]&&(t.style.width=oe+"px",t.style.height=oe/Oe+"px"))):x.aspectRatio==="panel"&&(t.style.width=U*ge+"px",x.containment&&($e=t.overlaps(fe),$e.right<=x.containment[1]&&(t.style.width=oe+"px",t.style.height=oe/ge+"px")))):We.contains("jsPanel-resizeit-w")?(M=ze+(Ce-ke)*ve/be.x+ht,M<=G&&M>=Pe&&M<=Me&&(t.style.left=He+(ke-Ce)/be.x+Rt+"px"),M>=Me&&(M=Me),M>=G&&(M=G),M<=Pe&&(M=Pe),t.style.width=M+"px",x.aspectRatio==="content"?(t.style.height=(M-Gt-we)/Oe+ot+Ge+Qe+ee+"px",x.containment&&($e=t.overlaps(fe),$e.bottom<=x.containment[2]&&(t.style.height=H+"px",t.style.width=H*Oe+"px"))):x.aspectRatio==="panel"&&(t.style.height=M/ge+"px",x.containment&&($e=t.overlaps(fe),$e.bottom<=x.containment[2]&&(t.style.height=H+"px",t.style.width=H*ge+"px")))):We.contains("jsPanel-resizeit-n")?(U=Xe+(Fe-De)*ve/be.y+K,U<=Be&&U>=se&&U<=Ke&&(t.style.top=Ae+(De-Fe)/be.y+Nt+"px"),U>=Ke&&(U=Ke),U>=Be&&(U=Be),U<=se&&(U=se),t.style.height=U+"px",x.aspectRatio==="content"?(t.style.width=(U-ot-Ge-Qe-ee)*Oe+Qe+ee+"px",x.containment&&($e=t.overlaps(fe),$e.right<=x.containment[1]&&(t.style.width=oe+"px",t.style.height=oe/Oe+"px"))):x.aspectRatio==="panel"&&(t.style.width=U*ge+"px",x.containment&&($e=t.overlaps(fe),$e.right<=x.containment[1]&&(t.style.width=oe+"px",t.style.height=oe/ge+"px")))):We.contains("jsPanel-resizeit-se")?(M=ze+(ke-Ce)*ve/be.x+ht,M>=oe&&(M=oe),M>=G&&(M=G),M<=Pe&&(M=Pe),t.style.width=M+"px",ve===2&&(t.style.left=He-(ke-Ce)+"px"),x.aspectRatio&&(t.style.height=M/ge+"px"),U=Xe+(De-Fe)*ve/be.y+K,U>=H&&(U=H),U>=Be&&(U=Be),U<=se&&(U=se),t.style.height=U+"px",ve===2&&(t.style.top=Ae-(De-Fe)+"px"),x.aspectRatio==="content"?(t.style.width=(U-ot-Ge-Qe-ee)*Oe+Qe+ee+"px",x.containment&&($e=t.overlaps(fe),$e.right<=x.containment[1]&&(t.style.width=oe+"px",t.style.height=oe/Oe+"px"))):x.aspectRatio==="panel"&&(t.style.width=U*ge+"px",x.containment&&($e=t.overlaps(fe),$e.right<=x.containment[1]&&(t.style.width=oe+"px",t.style.height=oe/ge+"px")))):We.contains("jsPanel-resizeit-sw")?(U=Xe+(De-Fe)*ve/be.y+K,U>=H&&(U=H),U>=Be&&(U=Be),U<=se&&(U=se),t.style.height=U+"px",ve===2&&(t.style.top=Ae-(De-Fe)+"px"),x.aspectRatio&&(t.style.width=U*ge+"px"),M=ze+(Ce-ke)*ve/be.x+ht,M<=G&&M>=Pe&&M<=Me&&(t.style.left=He+(ke-Ce)/be.x+Rt+"px"),M>=Me&&(M=Me),M>=G&&(M=G),M<=Pe&&(M=Pe),t.style.width=M+"px",x.aspectRatio==="content"?(t.style.height=(M-Gt-we)/Oe+ot+Ge+Qe+ee+"px",x.containment&&($e=t.overlaps(fe),$e.bottom<=x.containment[2]&&(t.style.height=H+"px",t.style.width=H*Oe+"px"))):x.aspectRatio==="panel"&&(t.style.height=M/ge+"px",x.containment&&($e=t.overlaps(fe),$e.bottom<=x.containment[2]&&(t.style.height=H+"px",t.style.width=H*ge+"px")))):We.contains("jsPanel-resizeit-ne")?(M=ze+(ke-Ce)*ve/be.x+ht,M>=oe&&(M=oe),M>=G&&(M=G),M<=Pe&&(M=Pe),t.style.width=M+"px",ve===2&&(t.style.left=He-(ke-Ce)+"px"),x.aspectRatio&&(t.style.height=M/ge+"px"),U=Xe+(Fe-De)*ve/be.y+K,U<=Be&&U>=se&&U<=Ke&&(t.style.top=Ae+(De-Fe)/be.y+Nt+"px"),U>=Ke&&(U=Ke),U>=Be&&(U=Be),U<=se&&(U=se),t.style.height=U+"px",x.aspectRatio==="content"?(t.style.width=(U-ot-Ge-Qe-ee)*Oe+Qe+ee+"px",x.containment&&($e=t.overlaps(fe),$e.right<=x.containment[1]&&(t.style.width=oe+"px",t.style.height=oe/Oe+"px"))):x.aspectRatio==="panel"&&(t.style.width=U*ge+"px",x.containment&&($e=t.overlaps(fe),$e.right<=x.containment[1]&&(t.style.width=oe+"px",t.style.height=oe/ge+"px")))):We.contains("jsPanel-resizeit-nw")&&(x.aspectRatio&&We.contains("jsPanel-resizeit-nw")&&(ke=De*dt,De=ke/dt),M=ze+(Ce-ke)*ve/be.x+ht,M<=G&&M>=Pe&&M<=Me&&(t.style.left=He+(ke-Ce)/be.x+Rt+"px"),M>=Me&&(M=Me),M>=G&&(M=G),M<=Pe&&(M=Pe),t.style.width=M+"px",x.aspectRatio&&(t.style.height=M/ge+"px"),U=Xe+(Fe-De)*ve/be.y+K,U<=Be&&U>=se&&U<=Ke&&(t.style.top=Ae+(De-Fe)/be.y+Nt+"px"),U>=Ke&&(U=Ke),U>=Be&&(U=Be),U<=se&&(U=se),t.style.height=U+"px",x.aspectRatio==="content"?t.style.width=(U-ot-Ge-Qe-ee)*Oe+Qe+ee+"px":x.aspectRatio==="panel"&&(t.style.width=U*ge+"px")),window.getSelection().removeAllRanges();const At=window.getComputedStyle(t),je={left:parseFloat(At.left),top:parseFloat(At.top),right:parseFloat(At.right),bottom:parseFloat(At.bottom),width:parseFloat(At.width),height:parseFloat(At.height)};x.resize.length&&O.processCallbacks(t,x.resize,!1,je,ce)},O.pointermove.forEach(ce=>document.addEventListener(ce,ie,!1)),window.addEventListener("mouseout",Te,!1)})}),O.pointerup.forEach(function(xe){document.addEventListener(xe,Se),window.removeEventListener("mouseout",Te)}),p.disable&&(me.style.pointerEvents="none")}),t},t.resizeit=p=>{const w=t.querySelectorAll(".jsPanel-resizeit-handle");return p==="disable"?w.forEach(D=>D.style.pointerEvents="none"):w.forEach(D=>D.style.pointerEvents="auto"),t},t.getScaleFactor=()=>{const p=t.getBoundingClientRect();return{x:p.width/t.offsetWidth,y:p.height/t.offsetHeight}},t.calcSizeFactors=()=>{const p=window.getComputedStyle(t);if(e.container==="window")t.hf=parseFloat(p.left)/(window.innerWidth-parseFloat(p.width)),t.vf=parseFloat(p.top)/(window.innerHeight-parseFloat(p.height));else if(t.parentElement){let w=t.parentElement.getBoundingClientRect();t.hf=parseFloat(p.left)/(w.width-parseFloat(p.width)),t.vf=parseFloat(p.top)/(w.height-parseFloat(p.height))}},t.saveCurrentDimensions=()=>{const p=window.getComputedStyle(t);t.currentData.width=p.width,t.currentData.height=p.height},t.saveCurrentPosition=()=>{const p=window.getComputedStyle(t);t.currentData.left=p.left,t.currentData.top=p.top},t.reposition=(...p)=>{let w=e.position,D=!0,b;return p.forEach(x=>{typeof x=="string"||typeof x=="object"?w=x:typeof x=="boolean"?D=x:typeof x=="function"&&(b=x)}),O.position(t,w),t.slaves&&t.slaves.size>0&&t.slaves.forEach(x=>x.reposition()),D&&t.saveCurrentPosition(),b&&b.call(t,t),t},t.repositionOnSnap=p=>{let w="0",D="0",b=O.pOcontainment(e.dragit.containment);if(e.dragit.snap.containment)switch(p){case"left-top":w=b[3],D=b[0];break;case"right-top":w=-b[1],D=b[0];break;case"right-bottom":w=-b[1],D=-b[2];break;case"left-bottom":w=b[3],D=-b[2];break;case"center-top":w=b[3]/2-b[1]/2,D=b[0];break;case"center-bottom":w=b[3]/2-b[1]/2,D=-b[2];break;case"left-center":w=b[3],D=b[0]/2-b[2]/2;break;case"right-center":w=-b[1],D=b[0]/2-b[2]/2;break}O.position(t,p),O.setStyles(t,{left:`calc(${t.style.left} + ${w}px)`,top:`calc(${t.style.top} + ${D}px)`})},t.overlaps=(p,w,D)=>{let b=t.getBoundingClientRect(),x=getComputedStyle(t.parentElement),ie=t.getScaleFactor(),ae={top:0,right:0,bottom:0,left:0},M,U=0,ze=0,Xe=0,Dt=0;t.options.container!=="window"&&w==="paddingbox"&&(ae.top=parseInt(x.borderTopWidth,10)*ie.y,ae.right=parseInt(x.borderRightWidth,10)*ie.x,ae.bottom=parseInt(x.borderBottomWidth,10)*ie.y,ae.left=parseInt(x.borderLeftWidth,10)*ie.x),typeof p=="string"?p==="window"?M={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}:p==="parent"?M=t.parentElement.getBoundingClientRect():M=document.querySelector(p).getBoundingClientRect():M=p.getBoundingClientRect(),D&&(U=D.touches?D.touches[0].clientX:D.clientX,ze=D.touches?D.touches[0].clientY:D.clientY,Xe=U-M.left,Dt=ze-M.top);let Te=b.left<M.right&&b.right>M.left,Se=b.top<M.bottom&&b.bottom>M.top;return{overlaps:Te&&Se,top:b.top-M.top-ae.top,right:M.right-b.right-ae.right,bottom:M.bottom-b.bottom-ae.bottom,left:b.left-M.left-ae.left,parentBorderWidth:ae,panelRect:b,referenceRect:M,pointer:{clientX:U,clientY:ze,left:Xe-ae.left,top:Dt-ae.top,right:M.width-Xe-ae.right,bottom:M.height-Dt-ae.bottom}}},t.setSize=()=>{if(e.panelSize){const p=O.pOsize(t,e.panelSize);t.style.width=p.width,t.style.height=p.height}else if(e.contentSize){const p=O.pOsize(t,e.contentSize);t.content.style.width=p.width,t.content.style.height=p.height,t.style.width=p.width,t.content.style.width="100%"}return t},t.resize=(...p)=>{let w=window.getComputedStyle(t),D={width:w.width,height:w.height},b=!0,x;p.forEach(M=>{typeof M=="string"?D=M:typeof M=="object"?D=Object.assign(D,M):typeof M=="boolean"?b=M:typeof M=="function"&&(x=M)});let ie=O.pOsize(t,D);t.style.width=ie.width,t.style.height=ie.height,t.slaves&&t.slaves.size>0&&t.slaves.forEach(M=>M.reposition()),b&&t.saveCurrentDimensions(),t.status="normalized";let ae=t.controlbar.querySelector(".jsPanel-btn-smallify");return ae&&(ae.style.transform="rotate(0deg)"),x&&x.call(t,t),t.calcSizeFactors(),t},t.windowResizeHandler=p=>{if(p.target===window){let w=t.status,D=e.onwindowresize,b,x;if(w==="maximized"&&D)t.maximize(!1,!0);else if(t.snapped&&w!=="minimized")t.snap(t.snapped,!0);else if(w==="normalized"||w==="smallified"||w==="maximized"){let ie=typeof D;ie==="boolean"?(b=(window.innerWidth-t.offsetWidth)*t.hf,t.style.left=b<=0?0:b+"px",x=(window.innerHeight-t.offsetHeight)*t.vf,t.style.top=x<=0?0:x+"px"):ie==="function"?D.call(t,p,t):ie==="object"&&(D.preset===!0&&(b=(window.innerWidth-t.offsetWidth)*t.hf,t.style.left=b<=0?0:b+"px",x=(window.innerHeight-t.offsetHeight)*t.vf,t.style.top=x<=0?0:x+"px"),D.callback.call(t,p,t))}else w==="smallifiedmax"&&D&&t.maximize(!1,!0).smallify();t.slaves&&t.slaves.size>0&&t.slaves.forEach(ie=>ie.reposition())}},t.setControls=(p,w)=>(t.header.querySelectorAll(".jsPanel-btn").forEach(D=>{const b=D.className.split("-"),x=b[b.length-1];t.getAttribute(`data-btn${x}`)!=="hidden"&&(D.style.display="block")}),p.forEach(D=>{const b=t.controlbar.querySelector(D);b&&(b.style.display="none")}),w&&w.call(t,t),t),t.setControlStatus=(p,w="enable",D)=>{const b=t.controlbar.querySelector(`.jsPanel-btn-${p}`);switch(w){case"disable":t.getAttribute(`data-btn${p}`)!=="removed"&&(t.setAttribute(`data-btn${p}`,"disabled"),b.style.pointerEvents="none",b.style.opacity=.4,b.style.cursor="default");break;case"hide":t.getAttribute(`data-btn${p}`)!=="removed"&&(t.setAttribute(`data-btn${p}`,"hidden"),b.style.display="none");break;case"show":t.getAttribute(`data-btn${p}`)!=="removed"&&(t.setAttribute(`data-btn${p}`,"enabled"),b.style.display="block",b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"enable":t.getAttribute(`data-btn${p}`)!=="removed"&&(t.getAttribute(`data-btn${p}`)==="hidden"&&(b.style.display="block"),t.setAttribute(`data-btn${p}`,"enabled"),b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"remove":t.controlbar.removeChild(b),t.setAttribute(`data-btn${p}`,"removed");break}return D&&D.call(t,t),t},t.setControlSize=p=>{const w=p.toLowerCase();t.controlbar.querySelectorAll(".jsPanel-btn").forEach(b=>{["jsPanel-btn-xl","jsPanel-btn-lg","jsPanel-btn-md","jsPanel-btn-sm","jsPanel-btn-xs"].forEach(x=>b.classList.remove(x)),b.classList.add(`jsPanel-btn-${w}`)}),w==="xl"?t.titlebar.style.fontSize="1.5rem":w==="lg"?t.titlebar.style.fontSize="1.25rem":w==="md"?t.titlebar.style.fontSize="1.05rem":w==="sm"?t.titlebar.style.fontSize=".9rem":w==="xs"&&(t.titlebar.style.fontSize=".8rem")},t.setHeaderControls=p=>{if(t.options.headerControls.add){let x=t.options.headerControls.add;Array.isArray(x)||(x=[x]),x.forEach(ie=>t.addControl(ie))}let w=[];t.controlbar.querySelectorAll(".jsPanel-btn").forEach(x=>{let ie=x.className.match(/jsPanel-btn-[a-z\d]{3,}/i),ae=ie[0].substring(12);w.push(ae)});const b=O.pOheaderControls(e.headerControls);return e.headerControls=b,w.forEach(x=>{b[x]&&t.setControlStatus(x,b[x])}),t.setControlSize(b.size),p&&p.call(t,t),t},t.setHeaderLogo=(p,w)=>{let D=[t.headerlogo],b=document.querySelector("#"+t.id+"-min");return b&&D.push(b.querySelector(".jsPanel-headerlogo")),typeof p=="string"?p.startsWith("<")?D.forEach(x=>x.innerHTML=p):D.forEach(x=>{O.emptyNode(x);let ie=document.createElement("img");ie.src=p,x.append(ie)}):D.forEach(x=>{O.emptyNode(x),x.append(p)}),t.headerlogo.childNodes.forEach(x=>{x.nodeName&&x.nodeName==="IMG"&&x.setAttribute("draggable","false")}),w&&w.call(t,t),t},t.setHeaderRemove=p=>(t.removeChild(t.header),t.content.classList.add("jsPanel-content-noheader"),["close","maximize","normalize","minimize","smallify"].forEach(w=>t.setAttribute(`data-btn${w}`,"removed")),p&&p.call(t,t),t),t.setHeaderTitle=(p,w)=>{let D=[t.headertitle],b=document.querySelector("#"+t.id+"-min");return b&&D.push(b.querySelector(".jsPanel-title")),typeof p=="string"?D.forEach(x=>x.innerHTML=p):typeof p=="function"?D.forEach(x=>{O.emptyNode(x),x.innerHTML=p()}):D.forEach(x=>{O.emptyNode(x),x.append(p)}),w&&w.call(t,t),t},t.setIconfont=(p,w=t,D)=>{if(p){let b,x;if(p==="fa"||p==="far"||p==="fal"||p==="fas"||p==="fad")b=[`${p} fa-window-close`,`${p} fa-window-maximize`,`${p} fa-window-restore`,`${p} fa-window-minimize`,`${p} fa-chevron-up`];else if(p==="material-icons")b=[p,p,p,p,p,p],x=["close","fullscreen","fullscreen_exit","call_received","expand_less"];else if(Array.isArray(p))b=[`custom-control-icon ${p[4]}`,`custom-control-icon ${p[3]}`,`custom-control-icon ${p[2]}`,`custom-control-icon ${p[1]}`,`custom-control-icon ${p[0]}`];else if(p==="bootstrap"||p==="glyphicon")b=["glyphicon glyphicon-remove","glyphicon glyphicon-fullscreen","glyphicon glyphicon-resize-full","glyphicon glyphicon-minus","glyphicon glyphicon-chevron-up"];else return w;w.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(ie=>O.emptyNode(ie).innerHTML="<span></span>"),Array.prototype.slice.call(w.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((ie,ae)=>{ie.className=b[ae],p==="material-icons"&&(ie.textContent=x[ae])})}return D&&D.call(w,w),w},t.addToolbar=(p,w,D)=>{if(p==="header"?p=t.headertoolbar:p==="footer"&&(p=t.footer),typeof w=="string")p.innerHTML=w;else if(Array.isArray(w))w.forEach(b=>{typeof b=="string"?p.innerHTML+=b:p.append(b)});else if(typeof w=="function"){let b=w.call(t,t);typeof b=="string"?p.innerHTML=b:p.append(b)}else p.append(w);return p.classList.add("active"),D&&D.call(t,t),t},t.addCloseControl=()=>{let p=document.createElement("button"),w=t.content.style.color;return p.classList.add("jsPanel-addCloseCtrl"),p.innerHTML=O.icons.close,p.style.color=w,t.options.rtl&&p.classList.add("rtl"),t.appendChild(p),O.pointerup.forEach(D=>{p.addEventListener(D,b=>{if(b.preventDefault(),b.button&&b.button>0)return!1;t.close(null,!0)})}),O.pointerdown.forEach(D=>{p.addEventListener(D,b=>b.preventDefault())}),t},t.addControl=p=>{if(!p.html)return t;p.position||(p.position=1);const w=t.controlbar.querySelectorAll(".jsPanel-btn").length;let D=document.createElement("button");D.innerHTML=p.html,D.className=`jsPanel-btn jsPanel-btn-${p.name} jsPanel-btn-${e.headerControls.size}`,D.style.color=t.header.style.color,p.position>w?t.controlbar.append(D):t.controlbar.insertBefore(D,t.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${p.position})`));const b=p.ariaLabel||p.name;return b&&D.setAttribute("aria-label",b),O.pointerup.forEach(x=>{D.addEventListener(x,ie=>{if(ie.preventDefault(),ie.button&&ie.button>0)return!1;p.handler.call(t,t,D)})}),p.afterInsert&&p.afterInsert.call(D,D),t},t.setRtl=()=>{[t.header,t.content,t.footer].forEach(p=>{p.dir="rtl",e.rtl.lang&&(p.lang=e.rtl.lang)})},t.id=e.id,t.classList.add("jsPanel-"+e.paneltype),e.paneltype==="standard"&&(t.style.zIndex=this.zi.next()),o.append(t),t.front(!1,!1),t.setTheme(e.theme),e.boxShadow&&t.classList.add(`jsPanel-depth-${e.boxShadow}`),e.header){if(e.headerLogo&&t.setHeaderLogo(e.headerLogo),t.setIconfont(e.iconfont),t.setHeaderTitle(e.headerTitle),t.setHeaderControls(),O.isIE){let p=[t.headerbar,t.controlbar];switch(t.options.headerControls.size){case"md":p.forEach(w=>{w.style.height="34px"});break;case"xs":p.forEach(w=>{w.style.height="26px"});break;case"sm":p.forEach(w=>{w.style.height="30px"});break;case"lg":p.forEach(w=>{w.style.height="38px"});break;case"xl":p.forEach(w=>{w.style.height="42px"});break}}if(e.header==="auto-show-hide"){let p="jsPanel-depth-"+e.boxShadow;t.header.style.opacity=0,t.style.backgroundColor="transparent",this.remClass(t,p),this.setClass(t.content,p),t.header.addEventListener("mouseenter",()=>{t.header.style.opacity=1,O.setClass(t,p),O.remClass(t.content,p)}),t.header.addEventListener("mouseleave",()=>{t.header.style.opacity=0,O.remClass(t,p),O.setClass(t.content,p)})}}else t.setHeaderRemove(),e.addCloseControl&&t.addCloseControl();if(e.headerToolbar&&t.addToolbar(t.headertoolbar,e.headerToolbar),e.footerToolbar&&t.addToolbar(t.footer,e.footerToolbar),e.border&&t.setBorder(e.border),e.borderRadius&&t.setBorderRadius(e.borderRadius),e.css)for(const[p,w]of Object.entries(e.css))if(p==="panel")t.className+=` ${w}`;else{let D=t.querySelector(`.jsPanel-${p}`);D&&(D.className+=` ${w}`)}if(e.content&&(typeof e.content=="function"?e.content.call(t,t):typeof e.content=="string"?t.content.innerHTML=e.content:t.content.append(e.content)),e.contentAjax&&this.ajax(e.contentAjax,t),e.contentFetch&&this.fetch(e.contentFetch,t),e.contentOverflow){const p=e.contentOverflow.split(" ");p.length===1?t.content.style.overflow=p[0]:p.length===2&&(t.content.style.overflowX=p[0],t.content.style.overflowY=p[1])}if(e.autoclose){typeof e.autoclose=="number"?e.autoclose={time:e.autoclose+"ms"}:typeof e.autoclose=="string"&&(e.autoclose={time:e.autoclose});let p=Object.assign({},O.defaultAutocloseConfig,e.autoclose);p.time&&typeof p.time=="number"&&(p.time+="ms");let w=t.progressbar.querySelector("div");w.addEventListener("animationend",D=>{D.stopPropagation(),t.progressbar.classList.remove("active"),t.close()}),p.progressbar&&(t.progressbar.classList.add("active"),p.background?O.colorNames[p.background]?t.progressbar.style.background="#"+O.colorNames[p.background]:t.progressbar.style.background=p.background:t.progressbar.classList.add("success-bg")),w.style.animation=`${p.time} progressbar`}if(e.rtl&&t.setRtl(),t.setSize(),t.status="normalized",e.position?this.position(t,e.position):t.style.opacity=1,document.dispatchEvent(g),t.calcSizeFactors(),e.animateIn&&(t.addEventListener("animationend",()=>{this.remClass(t,e.animateIn)}),this.setClass(t,e.animateIn)),e.syncMargins){let p=this.pOcontainment(e.maximizedMargin);e.dragit&&(e.dragit.containment=p,e.dragit.snap===!0?(e.dragit.snap=O.defaultSnapConfig,e.dragit.snap.containment=!0):e.dragit.snap&&(e.dragit.snap.containment=!0)),e.resizeit&&(e.resizeit.containment=p)}if(e.dragit?(["start","drag","stop"].forEach(p=>{e.dragit[p]?typeof e.dragit[p]=="function"&&(e.dragit[p]=[e.dragit[p]]):e.dragit[p]=[]}),t.drag(e.dragit),t.addEventListener("jspaneldragstop",p=>{p.panel===t&&t.calcSizeFactors()},!1)):t.titlebar.style.cursor="default",e.resizeit){["start","resize","stop"].forEach(w=>{e.resizeit[w]?typeof e.resizeit[w]=="function"&&(e.resizeit[w]=[e.resizeit[w]]):e.resizeit[w]=[]}),t.sizeit(e.resizeit);let p;t.addEventListener("jspanelresizestart",w=>{w.panel===t&&(p=t.status)},!1),t.addEventListener("jspanelresizestop",w=>{w.panel===t&&(p==="smallified"||p==="smallifiedmax"||p==="maximized")&&parseFloat(t.style.height)>parseFloat(window.getComputedStyle(t.header).height)&&(t.setControls([".jsPanel-btn-normalize"]),t.status="normalized",document.dispatchEvent(g),document.dispatchEvent(c),e.onstatuschange&&O.processCallbacks(t,e.onstatuschange,"every"),t.calcSizeFactors())},!1)}if(t.saveCurrentDimensions(),t.saveCurrentPosition(),e.setStatus&&(e.setStatus==="smallifiedmax"?t.maximize().smallify():e.setStatus==="smallified"?t.smallify():t[e.setStatus.slice(0,-1)]()),this.pointerdown.forEach(p=>{t.addEventListener(p,w=>{!w.target.closest(".jsPanel-btn-close")&&!w.target.closest(".jsPanel-btn-minimize")&&e.paneltype==="standard"&&t.front()},!1)}),e.onwindowresize&&t.options.container==="window"&&window.addEventListener("resize",t.windowResizeHandler,!1),e.onparentresize){let p=e.onparentresize,w=typeof p,D=t.isChildpanel();if(D){const b=D.content;let x=[];t.parentResizeHandler=ie=>{if(ie.panel===D){x[0]=b.offsetWidth,x[1]=b.offsetHeight;let ae=t.status,M,U;ae==="maximized"&&p?t.maximize():t.snapped&&ae!=="minimized"?t.snap(t.snapped,!0):ae==="normalized"||ae==="smallified"||ae==="maximized"?w==="function"?p.call(t,t,{width:x[0],height:x[1]}):w==="object"&&p.preset===!0?(M=(x[0]-t.offsetWidth)*t.hf,t.style.left=M<=0?0:M+"px",U=(x[1]-t.offsetHeight)*t.vf,t.style.top=U<=0?0:U+"px",p.callback.call(t,t,{width:x[0],height:x[1]})):w==="boolean"&&(M=(x[0]-t.offsetWidth)*t.hf,t.style.left=M<=0?0:M+"px",U=(x[1]-t.offsetHeight)*t.vf,t.style.top=U<=0?0:U+"px"):ae==="smallifiedmax"&&p&&t.maximize().smallify()}},document.addEventListener("jspanelresize",t.parentResizeHandler,!1)}}return this.globalCallbacks&&(Array.isArray(this.globalCallbacks)?this.globalCallbacks.forEach(p=>p.call(t,t)):this.globalCallbacks.call(t,t)),e.callback&&(Array.isArray(e.callback)?e.callback.forEach(p=>p.call(t,t)):e.callback.call(t,t)),n&&(Array.isArray(n)?n.forEach(p=>p.call(t,t)):n.call(t,t)),document.dispatchEvent(l),t}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Os=Symbol.for(""),Ru=e=>{if(e?.r===Os)return e?._$litStatic$},zu=e=>({_$litStatic$:e,r:Os}),Vo=new Map,Iu=e=>(n,...r)=>{const o=r.length;let t,l;const c=[],f=[];let g,T=0,F=!1;for(;T<o;){for(g=n[T];T<o&&(l=r[T],(t=Ru(l))!==void 0);)g+=t+n[++T],F=!0;T!==o&&f.push(l),c.push(g),T++}if(T===o&&c.push(n[o]),F){const R=c.join("$$lit$$");(n=Vo.get(R))===void 0&&(c.raw=c,Vo.set(R,n=c)),r=f}return e(n,...r)},Bu=Iu(J);var Lu=Object.defineProperty,Mu=Object.getOwnPropertyDescriptor,Lr=(e,n,r,o)=>{for(var t=o>1?void 0:o?Mu(n,r):n,l=e.length-1,c;l>=0;l--)(c=e[l])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&Lu(n,r,t),t};let Tt=class extends nt{constructor(){super(...arguments),this.values=[],this.current="",this.search="",this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,n,r){return this.values=n,this.current=r,this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(o=>{this.resolveFn=o,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}close(e){document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const n=this.resolveFn;this.resolveFn=null,n?.(e)}connectedCallback(){super.connectedCallback(),Tt.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),Tt.instance===this&&(Tt.instance=null)}render(){const e=this.search.toLowerCase(),n=this.values.filter(r=>r.value.toLowerCase().includes(e));return J`
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
      ${n.length===0?J`<div class="empty">No matching values.</div>`:J`<ul>
            ${n.slice(0,500).map(r=>J`
                <li
                  class=${r.value===this.current?"selected":""}
                  @click=${()=>this.close(r.value)}
                >
                  <span class="label">${r.value||J`<em>(empty)</em>`}</span>
                  <span class="count">${r.count}</span>
                </li>
              `)}
          </ul>`}
      ${this.values.length>500?J`<div class="cap" style="padding:0 .55rem">Showing first 500 of ${this.values.length}.</div>`:""}
      <div class="actions">
        <button class="text" @click=${()=>this.close({clear:!0})}>Clear filter</button>
        <span style="color:#6b7280">${n.length} value${n.length===1?"":"s"}</span>
      </div>
    `}};Tt.instance=null;Tt.styles=[Vt,ct`
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
    `];Lr([Kt({type:Array})],Tt.prototype,"values",2);Lr([Kt({type:String})],Tt.prototype,"current",2);Lr([ne()],Tt.prototype,"search",2);Tt=Lr([mt("filter-popover")],Tt);var Nu=Object.defineProperty,qu=Object.getOwnPropertyDescriptor,Ot=(e,n,r,o)=>{for(var t=o>1?void 0:o?qu(n,r):n,l=e.length-1,c;l>=0;l--)(c=e[l])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&Nu(n,r,t),t};let Et=class extends nt{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const n=e.target.value;this.fire(n),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const n=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,n.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const r=n[this.highlightIdx];r!==void 0?(e.preventDefault(),this.onPick(r)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const n=(this.value??"").trim().toLowerCase();if(!n)return this.options.slice(0,500);const r=[];for(const o of this.options)if(o.toLowerCase().includes(n)&&(r.push(o),r.length>=500))break;return r}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],n=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return J`
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
        ${this.value?J`<button
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
      ${this.open?J`<ul class="dropdown" style=${n}>
            ${e.length===0?J`<li class="empty">No matching values.</li>`:e.map((r,o)=>J`
                    <li
                      class=${o===this.highlightIdx?"highlighted":""}
                      @mousedown=${t=>t.preventDefault()}
                      @click=${()=>this.onPick(r)}
                    >
                      ${r}
                    </li>
                  `)}
          </ul>`:Ue}
    `}};Et.styles=ct`
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
  `;Ot([Kt({type:String})],Et.prototype,"value",2);Ot([Kt({type:Array})],Et.prototype,"options",2);Ot([Kt({type:String})],Et.prototype,"placeholder",2);Ot([ne()],Et.prototype,"open",2);Ot([ne()],Et.prototype,"highlightIdx",2);Ot([ne()],Et.prototype,"dropTop",2);Ot([ne()],Et.prototype,"dropLeft",2);Ot([ne()],Et.prototype,"dropMinWidth",2);Ot([ne()],Et.prototype,"editing",2);Ot([Or("input")],Et.prototype,"inputEl",2);Et=Ot([mt("filter-combobox")],Et);var Uu=Object.defineProperty,Wu=Object.getOwnPropertyDescriptor,ut=(e,n,r,o)=>{for(var t=o>1?void 0:o?Wu(n,r):n,l=e.length-1,c;l>=0;l--)(c=e[l])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&Uu(n,r,t),t};let rt=class extends nt{constructor(){super(...arguments),this.tableId="",this.columns=[],this.rows=[],this.sortColumn=null,this.sortDir=null,this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const n=e.detail;n.tableId===this.tableId&&(this.localQuery=n.query??"")}}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.()}async updated(e){e.has("tableId")&&this.tableId&&(this.unsubscribe?.(),await this.bind());const n=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");n&&n.offsetHeight>0&&(this.rowHeight=n.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.markEmptyCells()}markEmptyCells(){const e=this.shadowRoot?.querySelectorAll("tbody tr:not(.spacer) > td");if(e)for(const n of e)n.className.startsWith("t-")&&n.classList.toggle("is-null",Hu(n))}async bind(){if(!this.tableId)return;const e=await _e(),n=await e.store.tables.findOne(this.tableId);if(!n)return;this.applyTable(n),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(o=>{const t=o.find(l=>l.id===this.tableId);t&&this.applyTable(t)}),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const r=e.store.rows(this.tableId);this.unsubscribe=r.subscribe(o=>this.rows=o),this.rows=await r.find()}applyTable(e){this.columns=e.columns,this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filters={...e.filters??{}}}async setCell(e,n,r){const o=await _e();await this.commitCell(o,e,n,r)}async commitCell(e,n,r,o){const t=this.columns.find(l=>l.field===r);if(t){const l=Ku(t,o,this.rows,n.id);if(l){await e.api.ui.dialogs.alert(l,`Cannot save ${t.label}`),this.requestUpdate();return}}await e.store.rows(this.tableId).patch(n.id,{data:{...n.data,[r]:o},updatedAt:Date.now()})}renderCell(e,n){const r=e.data[n.field],o=n.renderer,t=o?this.cellRenderers?.get(o):void 0;if(t){const l=zu(t);return Bu`<${l}
        .value=${r??""}
        .column=${n}
        .row=${e.data}
        @change=${c=>this.setCell(e,n.field,c.detail.value)}
      ></${l}>`}switch(n.type){case"boolean":return J`<input
          type="checkbox"
          .checked=${r===!0||r==="true"||r===1||r==="1"}
          @change=${c=>this.setCell(e,n.field,c.target.checked)}
        />`;case"date":return J`<input
          type="date"
          .value=${Vu(r)}
          @change=${l=>this.setCell(e,n.field,l.target.value||null)}
        />`;case"datetime":return J`<input
          type="datetime-local"
          .value=${Yu(r)}
          @change=${l=>this.setCell(e,n.field,l.target.value||null)}
        />`;case"number":return J`<input
          type="number"
          .value=${r==null?"":String(r)}
          @change=${l=>{const c=l.target.value;this.setCell(e,n.field,c===""?null:Number(c))}}
        />`;default:return J`<input
          type="text"
          .value=${String(r??"")}
          @change=${l=>this.setCell(e,n.field,l.target.value)}
        />`}}async deleteRow(e){await(await _e()).store.rows(this.tableId).remove(e)}async toggleSort(e){let n;this.sortColumn!==e?n="asc":this.sortDir==="asc"?n="desc":this.sortDir==="desc"?n=null:n="asc",this.sortColumn=n?e:null,this.sortDir=n;const r=await _e(),o=n?{sortColumn:e,sortAsc:n==="asc",updatedAt:Date.now()}:{sortColumn:void 0,sortAsc:void 0,updatedAt:Date.now()};await r.store.tables.patch(this.tableId,o)}filteredRows(){const e=Object.entries(this.filters).filter(([,o])=>o&&o.trim().length>0),n=this.globalQuery.trim().toLowerCase(),r=this.localQuery.trim().toLowerCase();return e.length===0&&n.length===0&&r.length===0?this.rows:this.rows.filter(o=>{const t=l=>Object.values(o.data).some(c=>c!=null&&String(c).toLowerCase().includes(l));return n.length>0&&!t(n)||r.length>0&&!t(r)?!1:e.every(([l,c])=>String(o.data[l]??"").toLowerCase().includes(c.toLowerCase()))})}sortedRows(){const e=this.filteredRows();if(!this.sortColumn||!this.sortDir)return e;const n=this.sortColumn,o=this.columns.find(c=>c.field===n)?.type??"string",t=this.sortDir==="asc"?1:-1,l=[...e];return l.sort((c,f)=>Xu(c.data[n],f.data[n],o)*t),l}async openFilterPicker(e,n){e.stopPropagation();const r=e.currentTarget,o=Tt.instance;if(!o)return;const t=new Map;for(const f of this.rowsFacetedFor(n)){const g=f.data[n];if(g==null)continue;const T=String(g);t.set(T,(t.get(T)??0)+1)}const l=[...t.entries()].map(([f,g])=>({value:f,count:g})).sort((f,g)=>g.count-f.count||f.value.localeCompare(g.value)),c=await o.open(r.getBoundingClientRect(),l,this.filters[n]??"");c!==null&&(typeof c=="object"&&"clear"in c?this.onFilterInput(n,""):typeof c=="string"&&this.onFilterInput(n,c))}onFilterInput(e,n){this.filters={...this.filters,[e]:n},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>this.saveFilters(),250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const n=Object.entries(this.filters).filter(([r,o])=>o&&o.trim().length>0&&r!==e).map(([r,o])=>[r,o.trim().toLowerCase()]);return n.length===0?this.rows:this.rows.filter(r=>n.every(([o,t])=>String(r.data[o]??"").toLowerCase().includes(t)))}computeFilterSuggestions(){const e=new Map,n=this.rows.slice(0,100);if(n.length===0)return e;const r=50,o=500;for(const t of this.visibleColumns){let l=!0;for(const f of n){const g=f.data[t.field];if(g==null)continue;if((typeof g=="string"?g:String(g)).length>=r){l=!1;break}}if(!l)continue;const c=new Set;for(const f of this.rowsFacetedFor(t.field)){const g=f.data[t.field];if(g==null||g==="")continue;const T=typeof g=="string"?g:String(g);if(!(T.length>=r)&&(c.add(T),c.size>=o))break}e.set(t.field,[...c].sort())}return e}onResizeStart(e,n,r){e.preventDefault(),e.stopPropagation();const o=r.offsetWidth;this.resizing={field:n,startX:e.clientX,startW:o};const t=c=>{if(!this.resizing)return;const f=c.clientX-this.resizing.startX,g=Math.max(40,this.resizing.startW+f);this.columns=this.columns.map(T=>T.field===this.resizing.field?{...T,width:g}:T)},l=async()=>{window.removeEventListener("pointermove",t),window.removeEventListener("pointerup",l);const c=this.resizing?.field;if(this.resizing=null,!c)return;await(await _e()).store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",t),window.addEventListener("pointerup",l)}onColDragStart(e,n){this.dragSourceField=n,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",n))}onColDragOver(e,n,r){if(!this.dragSourceField||this.dragSourceField===n)return;e.preventDefault();const o=r.getBoundingClientRect(),t=e.clientX<o.left+o.width/2;this.dropTargetField=n,this.dropEdge=t?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,n){e.preventDefault();const r=this.dragSourceField,o=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!r||r===n||!o)return;const t=[...this.columns],l=t.findIndex(T=>T.field===r);if(l<0)return;const[c]=t.splice(l,1);let f=t.findIndex(T=>T.field===n);if(f<0){t.splice(l,0,c);return}o==="after"&&(f+=1),t.splice(f,0,c),await(await _e()).store.tables.patch(this.tableId,{columns:t,updatedAt:Date.now()})}async saveFilters(){const e=await _e(),n={};for(const[o,t]of Object.entries(this.filters))t&&t.trim().length>0&&(n[o]=t);const r=Object.keys(n).length===0?void 0:n;await e.store.tables.patch(this.tableId,{filters:r,updatedAt:Date.now()})}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const n=this.rowHeight,r=Math.ceil(this.viewportHeight/n)+this.OVERSCAN*2,o=Math.max(0,Math.floor(this.scrollY/n)-this.OVERSCAN),t=Math.min(e.length,o+r);return{slice:e.slice(o,t),topPad:o*n,bottomPad:(e.length-t)*n}}render(){const e=this.sortedRows(),n=this.visibleColumns,{slice:r,topPad:o,bottomPad:t}=this.virtualSlice(e),l=this.computeFilterSuggestions();return J`
      <table>
        <colgroup>
          ${n.map(c=>J`<col style=${c.width!=null?`width: ${c.width}px`:""} />`)}
          <col style="width:2rem" />
        </colgroup>
        <thead>
          <tr>
            ${n.map(c=>{const f=this.sortColumn===c.field&&this.sortDir,g=f==="asc"?"▲":f==="desc"?"▼":"⇅",T=`t-${c.type}`,F=this.dragSourceField===c.field,R=this.dropTargetField===c.field,j=R&&this.dropEdge==="before"?" drop-before":R&&this.dropEdge==="after"?" drop-after":"";return J`
                <th
                  class=${`${T}${f?" sorted":""}${F?" drag-source":""}${j}`}
                  title=${`${c.field} — click to sort, drag to reorder`}
                  draggable="true"
                  @click=${()=>this.toggleSort(c.field)}
                  @dragstart=${V=>this.onColDragStart(V,c.field)}
                  @dragover=${V=>this.onColDragOver(V,c.field,V.currentTarget)}
                  @dragleave=${()=>this.onColDragLeave(c.field)}
                  @drop=${V=>this.onColDrop(V,c.field)}
                  @dragend=${()=>{this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null}}
                >
                  ${c.label}<span class="sort-icon">${g}</span>
                  <button
                    class=${`funnel${this.filters[c.field]?" active":""}`}
                    title="Filter by value"
                    @click=${V=>this.openFilterPicker(V,c.field)}
                  >
                    <span class="mi sm">filter_list</span>
                  </button>
                  <span
                    class="col-resize"
                    title="Drag to resize column"
                    @click=${V=>V.stopPropagation()}
                    @pointerdown=${V=>this.onResizeStart(V,c.field,V.currentTarget.parentElement)}
                  ></span>
                </th>
              `})}
            <th style="width:2rem"></th>
          </tr>
          <tr class="filter-row">
            ${n.map(c=>{const f=l.get(c.field)??[];return J`
                <th>
                  <filter-combobox
                    .value=${this.filters[c.field]??""}
                    .options=${f}
                    placeholder="filter…"
                    @filter-change=${g=>this.onFilterInput(c.field,g.detail.value)}
                  ></filter-combobox>
                </th>
              `})}
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${o>0?J`<tr class="spacer" style=${`height:${o}px`}><td colspan=${n.length+1}></td></tr>`:""}
          ${r.map(c=>J`
              <tr>
                ${n.map(f=>J`<td class=${`t-${f.type}`}>${this.renderCell(c,f)}</td>`)}
                <td>
                  <button class="danger" title="Delete row" @click=${()=>this.deleteRow(c.id)}>
                    <span class="mi sm">delete</span>
                  </button>
                </td>
              </tr>
            `)}
          ${t>0?J`<tr class="spacer" style=${`height:${t}px`}><td colspan=${n.length+1}></td></tr>`:""}
        </tbody>
      </table>
    `}};rt.styles=[Vt,ct`
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
  `];ut([Kt({type:String})],rt.prototype,"tableId",2);ut([ne()],rt.prototype,"columns",2);ut([ne()],rt.prototype,"rows",2);ut([ne()],rt.prototype,"sortColumn",2);ut([ne()],rt.prototype,"sortDir",2);ut([ne()],rt.prototype,"filters",2);ut([ne()],rt.prototype,"globalQuery",2);ut([ne()],rt.prototype,"localQuery",2);ut([ne()],rt.prototype,"dragSourceField",2);ut([ne()],rt.prototype,"dropTargetField",2);ut([ne()],rt.prototype,"dropEdge",2);ut([ne()],rt.prototype,"resizing",2);ut([ne()],rt.prototype,"cellRenderers",2);ut([ne()],rt.prototype,"scrollY",2);ut([ne()],rt.prototype,"viewportHeight",2);rt=ut([mt("data-table")],rt);function Hu(e){if((e.textContent??"").trim()!==""||e.querySelector("img"))return!1;const n=e.querySelectorAll("input");for(const r of Array.from(n))if(r.type==="checkbox"||r.value!=="")return!1;return!0}function Ku(e,n,r,o){if(e.notnull){if(n==null)return`${e.label} cannot be empty.`;if(typeof n=="string"&&n.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof n=="string"&&n.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${n.length}).`;if(typeof n=="number"&&n>e.max)return`${e.label} must be at most ${e.max} (got ${n}).`}return e.unique&&n!==null&&n!==void 0&&n!==""&&r.find(l=>l.id!==o&&l.data[e.field]===n)?`${e.label} must be unique. Another row already has "${String(n)}".`:null}function Vu(e){if(typeof e!="string"&&typeof e!="number")return"";const n=String(e).trim();if(!n)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(n))return n;const r=new Date(n);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function Yu(e){if(typeof e!="string"&&typeof e!="number")return"";const n=String(e).trim();if(!n)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(n);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(n))return`${n}T00:00`;const o=new Date(n);if(Number.isNaN(o.getTime()))return"";const t=o.toISOString();return`${t.slice(0,10)}T${t.slice(11,16)}`}function Xu(e,n,r){const o=e==null||e==="",t=n==null||n==="";if(o&&t)return 0;if(o)return 1;if(t)return-1;switch(r){case"number":{const l=Number(e),c=Number(n);return Number.isNaN(l)||Number.isNaN(c)?String(e).localeCompare(String(n)):l-c}case"boolean":return(e?1:0)-(n?1:0);case"date":{const l=new Date(String(e)).getTime(),c=new Date(String(n)).getTime();return Number.isNaN(l)||Number.isNaN(c)?String(e).localeCompare(String(n)):l-c}default:return String(e).localeCompare(String(n),void 0,{numeric:!0,sensitivity:"base"})}}var Gu=Object.defineProperty,Qu=Object.getOwnPropertyDescriptor,Mr=(e,n,r,o)=>{for(var t=o>1?void 0:o?Qu(n,r):n,l=e.length-1,c;l>=0;l--)(c=e[l])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&Gu(n,r,t),t};let An=class extends nt{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.onBlur=()=>{this.query.trim().length===0&&(this.open=!1)}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}render(){return!this.open&&this.query.length===0?J`<button
        class="icon"
        title="Search rows in this table"
        @click=${()=>this.open=!0}
      >
        <span class="mi sm">search</span>
      </button>`:J`<input
      type="search"
      placeholder="search…"
      autofocus
      .value=${this.query}
      @input=${this.onInput}
      @blur=${this.onBlur}
    />`}};An.styles=[Vt,ct`
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
  `];Mr([Kt({type:String})],An.prototype,"tableId",2);Mr([ne()],An.prototype,"query",2);Mr([ne()],An.prototype,"open",2);An=Mr([mt("panel-search")],An);var Ju=Object.defineProperty,Zu=Object.getOwnPropertyDescriptor,Nr=(e,n,r,o)=>{for(var t=o>1?void 0:o?Zu(n,r):n,l=e.length-1,c;l>=0;l--)(c=e[l])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&Ju(n,r,t),t};let jn=class extends nt{constructor(){super(...arguments),this.tableId="",this.rowCount=0,this.tableButtons=[]}async connectedCallback(){super.connectedCallback();const e=await _e();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]);const n=e.store.rows(this.tableId);this.unsubRows=n.subscribe(r=>this.rowCount=r.length),this.rowCount=(await n.find()).length}disconnectedCallback(){super.disconnectedCallback(),this.unsubRows?.()}async addRow(){const e=await _e(),n=await e.store.tables.findOne(this.tableId);if(!n)return;const r={};for(const o of n.columns)r[o.field]=ed(o);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:r,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}async runTableButton(e){const n=await _e();try{await Promise.resolve(e.onClick(n.api,{tableId:this.tableId}))}catch(r){console.error(`[table-button:${e.id}]`,r)}}render(){return J`
      <button title="Add a blank row" @click=${this.addRow}>
        <span class="mi sm">add</span><span>Add row</span>
      </button>
      <button title="Edit columns" @click=${this.editColumns}>
        <span class="mi sm">view_column</span><span>Columns</span>
      </button>
      ${this.tableButtons.map(e=>J`<button title=${e.tooltip??e.label} @click=${()=>this.runTableButton(e)}>
          ${e.icon?J`<span class="mi sm">${e.icon}</span>`:""}
          <span>${e.label}</span>
        </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};jn.styles=[Vt,ct`
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
  `];Nr([Kt({type:String})],jn.prototype,"tableId",2);Nr([ne()],jn.prototype,"rowCount",2);Nr([ne()],jn.prototype,"tableButtons",2);jn=Nr([mt("panel-footer")],jn);function ed(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}const kn=new Map,_r=new Set,Ds=new Set;let Yo=!1;async function td(){if(Yo)return;Yo=!0;const e=await _e(),n=(await e.store.tables.find()).filter(r=>r.workspaceId===e.workspaceId);n.sort(Xo);for(const r of n)Go(r,e);e.store.tables.subscribe(r=>{const o=r.filter(c=>c.workspaceId===e.workspaceId),t=new Set(o.map(c=>c.id));for(const[c,f]of kn)if(!t.has(c)){kn.delete(c),_r.add(c),Ds.add(c);try{f.status!=="closed"&&f.close()}catch{}}const l=o.filter(c=>!kn.has(c.id)).sort(Xo);for(const c of l)Go(c,e)})}function Xo(e,n){return(e.windowGeometry?.z??-1/0)-(n.windowGeometry?.z??-1/0)}const nd=200,rd=100,id=720,od=360,Rs=34;function sd(e,n){if(!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||e.w<nd||e.h<rd)return null;const r=n.getBoundingClientRect();if(e.w>r.width)return null;const o=Math.max(0,Math.min(e.x,r.width-e.w)),t=Math.max(0,Math.min(e.y,r.height-Rs));return{...e,x:o,y:t}}function ad(e,n){const r=n.clientWidth,o=n.clientHeight,t=e.offsetWidth,c=e.querySelector(".jsPanel-titlebar")?.offsetHeight||Rs,f=parseFloat(e.style.left)||e.offsetLeft||0,g=parseFloat(e.style.top)||e.offsetTop||0,T=Math.max(0,Math.min(f,r-t)),F=Math.max(0,Math.min(g,o-c));T!==f&&(e.style.left=`${T}px`),F!==g&&(e.style.top=`${F}px`)}function Go(e,n){const r=document.createElement("data-table");r.tableId=e.id,r.style.height="100%";const o=document.createElement("panel-search");o.tableId=e.id;const t=document.createElement("panel-footer");t.tableId=e.id;const l=document.getElementById("easydb-panels")??document.body,c=sd(e.windowGeometry,l),f=`panel-${zs(e.id)}`,g=c?{my:"left-top",at:"left-top",offsetX:c.x,offsetY:c.y}:cd(),T=c?{panelSize:`${c.w} ${c.h}`}:{contentSize:`${id} ${od}`},F=O.create({id:f,container:l,headerTitle:e.name,footerToolbar:t,theme:"primary",content:r,...T,position:g,minimizeTo:"parent",dragit:{containment:!1,drag:Ne=>ad(Ne,l),stop:()=>$i(e.id,n)},resizeit:{containment:!1,stop:()=>$i(e.id,n)},onfronted:()=>ud(e.id,n),onbeforeclose:()=>_r.has(e.id)?!0:((async()=>await n.api.ui.dialogs.confirm(`Delete table "${e.name}" and all its rows?`,"Confirm delete")&&(_r.add(e.id),kn.get(e.id)?.close()))(),!1),onclosed:async()=>{kn.delete(e.id),_r.delete(e.id),!Ds.delete(e.id)&&await dd(e.id,n)},onstatuschange:()=>$i(e.id,n)});kn.set(e.id,F);const j=document.getElementById(f)?.querySelector(".jsPanel-controlbar");j&&j.prepend(o),c?.maximized&&typeof F.maximize=="function"?queueMicrotask(()=>F.maximize?.()):c?.minimized&&typeof F.minimize=="function"&&queueMicrotask(()=>F.minimize?.());let V=e.name,Z=null;const le=Ne=>{typeof F.setHeaderTitle=="function"&&F.setHeaderTitle(`${V} (${Ne})`)};n.store.rows(e.id).find().then(Ne=>le(Ne.length)),Z=n.store.rows(e.id).subscribe(Ne=>le(Ne.length)),n.store.tables.subscribe(Ne=>{const gt=Ne.find(Yt=>Yt.id===e.id);gt&&gt.name!==V&&(V=gt.name)});const Je=F.close.bind(F);F.close=()=>(Z?.(),Je())}let ld=0;function cd(){const e=ld++;return{my:"left-top",at:"left-top",offsetX:40+e%8*30,offsetY:80+e%8*30}}async function $i(e,n){const r=document.getElementById(`panel-${zs(e)}`);if(!r)return;const o=r.dataset.status??"normalized";try{const l=(await n.store.tables.findOne(e))?.windowGeometry?.z??0,c={x:r.offsetLeft,y:r.offsetTop,w:r.offsetWidth,h:r.offsetHeight,z:l,minimized:o==="minimized",maximized:o==="maximized"};await n.store.tables.patch(e,{windowGeometry:c,updatedAt:Date.now()})}catch{}}async function ud(e,n){try{const r=await n.store.tables.findOne(e);if(!r)return;const o=r.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await n.store.tables.patch(e,{windowGeometry:{...o,z:Date.now()},updatedAt:Date.now()})}catch{}}async function dd(e,n){const r=n.store.rows(e),o=await r.find();await r.bulkRemove(o.map(t=>t.id)),await n.store.tables.remove(e)}function zs(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}var fd=Object.defineProperty,hd=Object.getOwnPropertyDescriptor,Is=(e,n,r,o)=>{for(var t=o>1?void 0:o?hd(n,r):n,l=e.length-1,c;l>=0;l--)(c=e[l])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&fd(n,r,t),t};let jr=class extends nt{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await _e();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(r=>this.tables=r.filter(o=>o.workspaceId===this.workspaceId));const n=await e.store.tables.find();this.tables=n.filter(r=>r.workspaceId===this.workspaceId),await td()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?J``:J`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on
      the page, or click <strong>+ New Table</strong> above.
    </div>`}};jr.styles=ct`
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
  `;Is([ne()],jr.prototype,"tables",2);jr=Is([mt("table-list")],jr);var pd=Object.defineProperty,md=Object.getOwnPropertyDescriptor,Li=(e,n,r,o)=>{for(var t=o>1?void 0:o?md(n,r):n,l=e.length-1,c;l>=0;l--)(c=e[l])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&pd(n,r,t),t};let Kn=class extends nt{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await _e();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(n=>this.workspaces=n),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const n=this.workspaces.find(t=>t.id===e);if(!n)return;const r=new URLSearchParams(location.search);r.set("space",n.name);const o=`${location.pathname}?${r.toString()}${location.hash}`;location.assign(o)}async addWorkspace(){const n=await(await _e()).api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!n||!n.trim())return;const r=new URLSearchParams(location.search);r.set("space",n.trim()),location.assign(`${location.pathname}?${r.toString()}${location.hash}`)}render(){return J`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>J`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};Kn.styles=[Vt,ct`
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
  `];Li([ne()],Kn.prototype,"workspaces",2);Li([ne()],Kn.prototype,"current",2);Kn=Li([mt("workspace-selector")],Kn);var Qo=Object.freeze,Bs=Object.defineProperty,gd=Object.getOwnPropertyDescriptor,on=(e,n,r,o)=>{for(var t=o>1?void 0:o?gd(n,r):n,l=e.length-1,c;l>=0;l--)(c=e[l])&&(t=(o?c(n,r,t):c(t))||t);return o&&t&&Bs(n,r,t),t},bd=(e,n)=>Qo(Bs(e,"raw",{value:Qo(e.slice())})),Jo;let Lt=class extends nt{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.api=null,this.searchTimer=null,this.onEditColumns=e=>{const n=e;this.dialog?.open(n.detail.tableId)},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>{document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:this.searchQuery}}))},200)},this.onDragOver=e=>{Zo(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!Zo(e))return;e.preventDefault();const n=await _e(),r=Array.from(e.dataTransfer?.files??[]);n.events.emit("drop:files",{files:r,event:e});for(const o of[...n.registries.dropHandlers])try{if(await o(e,n.api))return}catch(t){n.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:t})}},this.runSlot=e=>{this.api&&Promise.resolve(e.onClick(this.api)).catch(n=>{console.error(`[footer-button:${e.id}]`,n)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager)}async bindRegistries(){const e=await _e();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e))}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,n){const r=n==="header"||e.variant==="primary"?"primary":"slot";return J`
      <button class=${r} title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
        ${e.icon?J`<span class="mi sm">${e.icon}</span>`:""}
        <span>${e.label}</span>
      </button>
    `}render(){return J(Jo||(Jo=bd([`
      <header>
        <strong>easyDBAccess <span class="version">v0.0.3</span></strong>
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
    `])),this.searchOpen||this.searchQuery.length>0?J`<input
              class="search"
              type="search"
              placeholder="search all tables…"
              autofocus
              .value=${this.searchQuery}
              @input=${this.onSearchInput}
              @blur=${()=>{this.searchQuery.trim().length===0&&(this.searchOpen=!1)}}
            />`:J`<button
              class="icon-btn"
              title="Search across all tables in this workspace"
              @click=${()=>this.searchOpen=!0}
            >
              <span class="mi">search</span>
            </button>`,this.headerButtons.map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};Lt.styles=[Vt,ct`
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
    `];on([Or("new-table-dialog")],Lt.prototype,"dialog",2);on([Or("csv-paste-dialog")],Lt.prototype,"csvPasteDialog",2);on([Or("plugin-manager-dialog")],Lt.prototype,"pluginManagerDialog",2);on([ne()],Lt.prototype,"footerButtons",2);on([ne()],Lt.prototype,"headerButtons",2);on([ne()],Lt.prototype,"searchQuery",2);on([ne()],Lt.prototype,"searchOpen",2);Lt=on([mt("app-shell")],Lt);function Zo(e){const n=e.dataTransfer;return n?n.types&&Array.from(n.types).includes("Files")?!0:(n.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([_e(),ua(()=>Promise.resolve().then(()=>js),[])]).then(([e,n])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>n.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});
//# sourceMappingURL=index-CQn8ySBs.js.map
