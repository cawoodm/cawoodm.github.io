(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const vc="modulepreload",xc=function(e){return"/easydbaccess/"+e},jo={},An=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){let l=function(g){return Promise.all(g.map($=>Promise.resolve($).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),d=c?.nonce||c?.getAttribute("nonce");n=l(r.map(g=>{if(g=xc(g),g in jo)return;jo[g]=!0;const $=g.endsWith(".css"),w=$?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${w}`))return;const S=document.createElement("link");if(S.rel=$?"stylesheet":vc,$||(S.as="script"),S.crossOrigin="",S.href=g,d&&S.setAttribute("nonce",d),document.head.appendChild(S),$)return new Promise((U,N)=>{S.addEventListener("load",U),S.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${g}`)))})}))}function o(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return n.then(l=>{for(const c of l||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const di=globalThis,Ls=di.ShadowRoot&&(di.ShadyCSS===void 0||di.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ms=Symbol(),Fo=new WeakMap;let Na=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==Ms)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Ls&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=Fo.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Fo.set(r,t))}return t}toString(){return this.cssText}};const $c=e=>new Na(typeof e=="string"?e:e+"",void 0,Ms),Ye=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,o)=>i+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1],e[0]);return new Na(r,e,Ms)},kc=(e,t)=>{if(Ls)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),n=di.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)}},zo=Ls?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return $c(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Cc,defineProperty:Ec,getOwnPropertyDescriptor:Sc,getOwnPropertyNames:_c,getOwnPropertySymbols:Tc,getPrototypeOf:Ac}=Object,Ei=globalThis,Lo=Ei.trustedTypes,Pc=Lo?Lo.emptyScript:"",Ic=Ei.reactiveElementPolyfillSupport,$r=(e,t)=>e,pi={toAttribute(e,t){switch(t){case Boolean:e=e?Pc:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Bs=(e,t)=>!Cc(e,t),Mo={attribute:!0,type:String,converter:pi,reflect:!1,useDefault:!1,hasChanged:Bs};Symbol.metadata??=Symbol("metadata"),Ei.litPropertyMetadata??=new WeakMap;let tr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Mo){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,r);n!==void 0&&Ec(this.prototype,t,n)}}static getPropertyDescriptor(t,r,i){const{get:n,set:o}=Sc(this.prototype,t)??{get(){return this[r]},set(l){this[r]=l}};return{get:n,set(l){const c=n?.call(this);o?.call(this,l),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Mo}static _$Ei(){if(this.hasOwnProperty($r("elementProperties")))return;const t=Ac(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($r("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($r("properties"))){const r=this.properties,i=[..._c(r),...Tc(r)];for(const n of i)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)r.unshift(zo(n))}else t!==void 0&&r.push(zo(t));return r}static _$Eu(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return kc(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$ET(t,r){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:pi).toAttribute(r,i.type);this._$Em=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,r){const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const o=i.getPropertyOptions(n),l=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:pi;this._$Em=n;const c=l.fromAttribute(r,o.type);this[n]=c??this._$Ej?.get(n)??c,this._$Em=null}}requestUpdate(t,r,i,n=!1,o){if(t!==void 0){const l=this.constructor;if(n===!1&&(o=this[t]),i??=l.getPropertyOptions(t),!((i.hasChanged??Bs)(o,r)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(l._$Eu(t,i))))return;this.C(t,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:i,reflect:n,wrapped:o},l){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,l??r??this[t]),o!==!0||l!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i){const{wrapped:l}=o,c=this[n];l!==!0||this._$AL.has(n)||c===void 0||this.C(n,void 0,o,c)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(r)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};tr.elementStyles=[],tr.shadowRootOptions={mode:"open"},tr[$r("elementProperties")]=new Map,tr[$r("finalized")]=new Map,Ic?.({ReactiveElement:tr}),(Ei.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ns=globalThis,Bo=e=>e,mi=Ns.trustedTypes,No=mi?mi.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ua="$lit$",Tn=`lit$${Math.random().toFixed(9).slice(2)}$`,qa="?"+Tn,Dc=`<${qa}>`,Un=document,kr=()=>Un.createComment(""),Cr=e=>e===null||typeof e!="object"&&typeof e!="function",Us=Array.isArray,Rc=e=>Us(e)||typeof e?.[Symbol.iterator]=="function",hs=`[ 	
\f\r]`,wr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Uo=/-->/g,qo=/>/g,Mn=RegExp(`>|${hs}(?:([^\\s"'>=/]+)(${hs}*=${hs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ho=/'/g,Wo=/"/g,Ha=/^(?:script|style|textarea|title)$/i,Oc=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),R=Oc(1),qn=Symbol.for("lit-noChange"),be=Symbol.for("lit-nothing"),Ko=new WeakMap,Nn=Un.createTreeWalker(Un,129);function Wa(e,t){if(!Us(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return No!==void 0?No.createHTML(t):t}const jc=(e,t)=>{const r=e.length-1,i=[];let n,o=t===2?"<svg>":t===3?"<math>":"",l=wr;for(let c=0;c<r;c++){const d=e[c];let g,$,w=-1,S=0;for(;S<d.length&&(l.lastIndex=S,$=l.exec(d),$!==null);)S=l.lastIndex,l===wr?$[1]==="!--"?l=Uo:$[1]!==void 0?l=qo:$[2]!==void 0?(Ha.test($[2])&&(n=RegExp("</"+$[2],"g")),l=Mn):$[3]!==void 0&&(l=Mn):l===Mn?$[0]===">"?(l=n??wr,w=-1):$[1]===void 0?w=-2:(w=l.lastIndex-$[2].length,g=$[1],l=$[3]===void 0?Mn:$[3]==='"'?Wo:Ho):l===Wo||l===Ho?l=Mn:l===Uo||l===qo?l=wr:(l=Mn,n=void 0);const U=l===Mn&&e[c+1].startsWith("/>")?" ":"";o+=l===wr?d+Dc:w>=0?(i.push(g),d.slice(0,w)+Ua+d.slice(w)+Tn+U):d+Tn+(w===-2?c:U)}return[Wa(e,o+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class Er{constructor({strings:t,_$litType$:r},i){let n;this.parts=[];let o=0,l=0;const c=t.length-1,d=this.parts,[g,$]=jc(t,r);if(this.el=Er.createElement(g,i),Nn.currentNode=this.el.content,r===2||r===3){const w=this.el.content.firstChild;w.replaceWith(...w.childNodes)}for(;(n=Nn.nextNode())!==null&&d.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const w of n.getAttributeNames())if(w.endsWith(Ua)){const S=$[l++],U=n.getAttribute(w).split(Tn),N=/([.?@])?(.*)/.exec(S);d.push({type:1,index:o,name:N[2],strings:U,ctor:N[1]==="."?zc:N[1]==="?"?Lc:N[1]==="@"?Mc:Si}),n.removeAttribute(w)}else w.startsWith(Tn)&&(d.push({type:6,index:o}),n.removeAttribute(w));if(Ha.test(n.tagName)){const w=n.textContent.split(Tn),S=w.length-1;if(S>0){n.textContent=mi?mi.emptyScript:"";for(let U=0;U<S;U++)n.append(w[U],kr()),Nn.nextNode(),d.push({type:2,index:++o});n.append(w[S],kr())}}}else if(n.nodeType===8)if(n.data===qa)d.push({type:2,index:o});else{let w=-1;for(;(w=n.data.indexOf(Tn,w+1))!==-1;)d.push({type:7,index:o}),w+=Tn.length-1}o++}}static createElement(t,r){const i=Un.createElement("template");return i.innerHTML=t,i}}function rr(e,t,r=e,i){if(t===qn)return t;let n=i!==void 0?r._$Co?.[i]:r._$Cl;const o=Cr(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),o===void 0?n=void 0:(n=new o(e),n._$AT(e,r,i)),i!==void 0?(r._$Co??=[])[i]=n:r._$Cl=n),n!==void 0&&(t=rr(e,n._$AS(e,t.values),n,i)),t}class Fc{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:i}=this._$AD,n=(t?.creationScope??Un).importNode(r,!0);Nn.currentNode=n;let o=Nn.nextNode(),l=0,c=0,d=i[0];for(;d!==void 0;){if(l===d.index){let g;d.type===2?g=new Tr(o,o.nextSibling,this,t):d.type===1?g=new d.ctor(o,d.name,d.strings,this,t):d.type===6&&(g=new Bc(o,this,t)),this._$AV.push(g),d=i[++c]}l!==d?.index&&(o=Nn.nextNode(),l++)}return Nn.currentNode=Un,n}p(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class Tr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,n){this.type=2,this._$AH=be,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=rr(this,t,r),Cr(t)?t===be||t==null||t===""?(this._$AH!==be&&this._$AR(),this._$AH=be):t!==this._$AH&&t!==qn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Rc(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==be&&Cr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Un.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Er.createElement(Wa(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(r);else{const o=new Fc(n,this),l=o.u(this.options);o.p(r),this.T(l),this._$AH=o}}_$AC(t){let r=Ko.get(t.strings);return r===void 0&&Ko.set(t.strings,r=new Er(t)),r}k(t){Us(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const o of t)n===r.length?r.push(i=new Tr(this.O(kr()),this.O(kr()),this,this.options)):i=r[n],i._$AI(o),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const i=Bo(t).nextSibling;Bo(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Si{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,n,o){this.type=1,this._$AH=be,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=be}_$AI(t,r=this,i,n){const o=this.strings;let l=!1;if(o===void 0)t=rr(this,t,r,0),l=!Cr(t)||t!==this._$AH&&t!==qn,l&&(this._$AH=t);else{const c=t;let d,g;for(t=o[0],d=0;d<o.length-1;d++)g=rr(this,c[i+d],r,d),g===qn&&(g=this._$AH[d]),l||=!Cr(g)||g!==this._$AH[d],g===be?t=be:t!==be&&(t+=(g??"")+o[d+1]),this._$AH[d]=g}l&&!n&&this.j(t)}j(t){t===be?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class zc extends Si{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===be?void 0:t}}class Lc extends Si{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==be)}}class Mc extends Si{constructor(t,r,i,n,o){super(t,r,i,n,o),this.type=5}_$AI(t,r=this){if((t=rr(this,t,r,0)??be)===qn)return;const i=this._$AH,n=t===be&&i!==be||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==be&&(i===be||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Bc{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){rr(this,t)}}const Nc=Ns.litHtmlPolyfillSupport;Nc?.(Er,Tr),(Ns.litHtmlVersions??=[]).push("3.3.3");const Uc=(e,t,r)=>{const i=r?.renderBefore??t;let n=i._$litPart$;if(n===void 0){const o=r?.renderBefore??null;i._$litPart$=n=new Tr(t.insertBefore(kr(),o),o,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qs=globalThis;let Ne=class extends tr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Uc(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return qn}};Ne._$litElement$=!0,Ne.finalized=!0,qs.litElementHydrateSupport?.({LitElement:Ne});const qc=qs.litElementPolyfillSupport;qc?.({LitElement:Ne});(qs.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hc={attribute:!0,type:String,converter:pi,reflect:!1,hasChanged:Bs},Wc=(e=Hc,t,r)=>{const{kind:i,metadata:n}=r;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(r.name,e),i==="accessor"){const{name:l}=r;return{set(c){const d=t.get.call(this);t.set.call(this,c),this.requestUpdate(l,d,e,!0,c)},init(c){return c!==void 0&&this.C(l,void 0,e,c),c}}}if(i==="setter"){const{name:l}=r;return function(c){const d=this[l];t.call(this,c),this.requestUpdate(l,d,e,!0,c)}}throw Error("Unsupported decorator location: "+i)};function Ht(e){return(t,r)=>typeof r=="object"?Wc(e,t,r):((i,n,o)=>{const l=n.hasOwnProperty(o);return n.constructor.createProperty(o,i),l?Object.getOwnPropertyDescriptor(n,o):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function W(e){return Ht({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kc=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Kn(e,t){return(r,i,n)=>{const o=l=>l.renderRoot?.querySelector(e)??null;return Kc(r,i,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vc={CHILD:2},Ka=e=>(...t)=>({_$litDirective$:e,values:t});class Gc{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class gi extends Gc{constructor(t){if(super(t),this.it=be,t.type!==Vc.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===be||t==null)return this._t=void 0,this.it=t;if(t===qn)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}gi.directiveName="unsafeHTML",gi.resultType=1;const nr=Ka(gi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $s extends gi{}$s.directiveName="unsafeSVG",$s.resultType=2;const Va=Ka($s);var Yc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hi={exports:{}},Qc=hi.exports,Vo;function Jc(){return Vo||(Vo=1,(function(e,t){(function(r,i){e.exports=i()})(Qc,function(){var r=function(s,a){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,h){u.__proto__=h}||function(u,h){for(var f in h)Object.prototype.hasOwnProperty.call(h,f)&&(u[f]=h[f])})(s,a)},i=function(){return(i=Object.assign||function(s){for(var a,u=1,h=arguments.length;u<h;u++)for(var f in a=arguments[u])Object.prototype.hasOwnProperty.call(a,f)&&(s[f]=a[f]);return s}).apply(this,arguments)};function n(s,a,u){for(var h,f=0,p=a.length;f<p;f++)!h&&f in a||((h=h||Array.prototype.slice.call(a,0,f))[f]=a[f]);return s.concat(h||Array.prototype.slice.call(a))}var o=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Yc,l=Object.keys,c=Array.isArray;function d(s,a){return typeof a!="object"||l(a).forEach(function(u){s[u]=a[u]}),s}typeof Promise>"u"||o.Promise||(o.Promise=Promise);var g=Object.getPrototypeOf,$={}.hasOwnProperty;function w(s,a){return $.call(s,a)}function S(s,a){typeof a=="function"&&(a=a(g(s))),(typeof Reflect>"u"?l:Reflect.ownKeys)(a).forEach(function(u){N(s,u,a[u])})}var U=Object.defineProperty;function N(s,a,u,h){U(s,a,d(u&&w(u,"get")&&typeof u.get=="function"?{get:u.get,set:u.set,configurable:!0}:{value:u,configurable:!0,writable:!0},h))}function z(s){return{from:function(a){return s.prototype=Object.create(a.prototype),N(s.prototype,"constructor",s),{extend:S.bind(null,s.prototype)}}}}var q=Object.getOwnPropertyDescriptor,G=[].slice;function de(s,a,u){return G.call(s,a,u)}function ee(s,a){return a(s)}function ie(s){if(!s)throw new Error("Assertion Failed")}function V(s){o.setImmediate?setImmediate(s):setTimeout(s,0)}function J(s,a){if(typeof a=="string"&&w(s,a))return s[a];if(!a)return s;if(typeof a!="string"){for(var u=[],h=0,f=a.length;h<f;++h){var p=J(s,a[h]);u.push(p)}return u}var y=a.indexOf(".");if(y!==-1){var x=s[a.substr(0,y)];return x==null?void 0:J(x,a.substr(y+1))}}function ue(s,a,u){if(s&&a!==void 0&&!("isFrozen"in Object&&Object.isFrozen(s)))if(typeof a!="string"&&"length"in a){ie(typeof u!="string"&&"length"in u);for(var h=0,f=a.length;h<f;++h)ue(s,a[h],u[h])}else{var p,y,x=a.indexOf(".");x!==-1?(p=a.substr(0,x),(y=a.substr(x+1))===""?u===void 0?c(s)&&!isNaN(parseInt(p))?s.splice(p,1):delete s[p]:s[p]=u:ue(x=!(x=s[p])||!w(s,p)?s[p]={}:x,y,u)):u===void 0?c(s)&&!isNaN(parseInt(a))?s.splice(a,1):delete s[a]:s[a]=u}}function we(s){var a,u={};for(a in s)w(s,a)&&(u[a]=s[a]);return u}var Ie=[].concat;function $e(s){return Ie.apply([],s)}var fn="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat($e([8,16,32,64].map(function(s){return["Int","Uint","Float"].map(function(a){return a+s+"Array"})}))).filter(function(s){return o[s]}),m=new Set(fn.map(function(s){return o[s]})),v=null;function E(s){return v=new WeakMap,s=(function a(u){if(!u||typeof u!="object")return u;var h=v.get(u);if(h)return h;if(c(u)){h=[],v.set(u,h);for(var f=0,p=u.length;f<p;++f)h.push(a(u[f]))}else if(m.has(u.constructor))h=u;else{var y,x=g(u);for(y in h=x===Object.prototype?{}:Object.create(x),v.set(u,h),u)w(u,y)&&(h[y]=a(u[y]))}return h})(s),v=null,s}var b={}.toString;function C(s){return b.call(s).slice(8,-1)}var he=typeof Symbol<"u"?Symbol.iterator:"@@iterator",ge=typeof he=="symbol"?function(s){var a;return s!=null&&(a=s[he])&&a.apply(s)}:function(){return null};function K(s,a){return a=s.indexOf(a),0<=a&&s.splice(a,1),0<=a}var Q={};function Xe(s){var a,u,h,f;if(arguments.length===1){if(c(s))return s.slice();if(this===Q&&typeof s=="string")return[s];if(f=ge(s)){for(u=[];!(h=f.next()).done;)u.push(h.value);return u}if(s==null)return[s];if(typeof(a=s.length)!="number")return[s];for(u=new Array(a);a--;)u[a]=s[a];return u}for(a=arguments.length,u=new Array(a);a--;)u[a]=arguments[a];return u}var ct=typeof Symbol<"u"?function(s){return s[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Ae=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Mt=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Ae),rn={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function He(s,a){this.name=s,this.message=a}function Me(s,a){return s+". Errors: "+Object.keys(a).map(function(u){return a[u].toString()}).filter(function(u,h,f){return f.indexOf(u)===h}).join(`
`)}function _e(s,a,u,h){this.failures=a,this.failedKeys=h,this.successCount=u,this.message=Me(s,a)}function Oe(s,a){this.name="BulkError",this.failures=Object.keys(a).map(function(u){return a[u]}),this.failuresByPos=a,this.message=Me(s,this.failures)}z(He).from(Error).extend({toString:function(){return this.name+": "+this.message}}),z(_e).from(He),z(Oe).from(He);var Qe=Mt.reduce(function(s,a){return s[a]=a+"Error",s},{}),De=He,oe=Mt.reduce(function(s,a){var u=a+"Error";function h(f,p){this.name=u,f?typeof f=="string"?(this.message="".concat(f).concat(p?`
 `+p:""),this.inner=p||null):typeof f=="object"&&(this.message="".concat(f.name," ").concat(f.message),this.inner=f):(this.message=rn[a]||u,this.inner=null)}return z(h).from(De),s[a]=h,s},{});oe.Syntax=SyntaxError,oe.Type=TypeError,oe.Range=RangeError;var Je=Ae.reduce(function(s,a){return s[a+"Error"]=oe[a],s},{}),Be=Mt.reduce(function(s,a){return["Syntax","Type","Range"].indexOf(a)===-1&&(s[a+"Error"]=oe[a]),s},{});function me(){}function Ce(s){return s}function At(s,a){return s==null||s===Ce?a:function(u){return a(s(u))}}function fe(s,a){return function(){s.apply(this,arguments),a.apply(this,arguments)}}function Ze(s,a){return s===me?a:function(){var u=s.apply(this,arguments);u!==void 0&&(arguments[0]=u);var h=this.onsuccess,f=this.onerror;this.onsuccess=null,this.onerror=null;var p=a.apply(this,arguments);return h&&(this.onsuccess=this.onsuccess?fe(h,this.onsuccess):h),f&&(this.onerror=this.onerror?fe(f,this.onerror):f),p!==void 0?p:u}}function vn(s,a){return s===me?a:function(){s.apply(this,arguments);var u=this.onsuccess,h=this.onerror;this.onsuccess=this.onerror=null,a.apply(this,arguments),u&&(this.onsuccess=this.onsuccess?fe(u,this.onsuccess):u),h&&(this.onerror=this.onerror?fe(h,this.onerror):h)}}function Yt(s,a){return s===me?a:function(u){var h=s.apply(this,arguments);d(u,h);var f=this.onsuccess,p=this.onerror;return this.onsuccess=null,this.onerror=null,u=a.apply(this,arguments),f&&(this.onsuccess=this.onsuccess?fe(f,this.onsuccess):f),p&&(this.onerror=this.onerror?fe(p,this.onerror):p),h===void 0?u===void 0?void 0:u:d(h,u)}}function tt(s,a){return s===me?a:function(){return a.apply(this,arguments)!==!1&&s.apply(this,arguments)}}function Pt(s,a){return s===me?a:function(){var u=s.apply(this,arguments);if(u&&typeof u.then=="function"){for(var h=this,f=arguments.length,p=new Array(f);f--;)p[f]=arguments[f];return u.then(function(){return a.apply(h,p)})}return a.apply(this,arguments)}}Be.ModifyError=_e,Be.DexieError=He,Be.BulkError=Oe;var ze=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function We(s){ze=s}var kt={},it=100,fn=typeof Promise>"u"?[]:(function(){var s=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[s,g(s),s];var a=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[a,g(a),s]})(),Ae=fn[0],Mt=fn[1],fn=fn[2],Mt=Mt&&Mt.then,Te=Ae&&Ae.constructor,It=!!fn,Ke=function(s,a){ot.push([s,a]),dt&&(queueMicrotask(ve),dt=!1)},yt=!0,dt=!0,st=[],Ue=[],pe=Ce,et={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:me,pgp:!1,env:{},finalize:me},te=et,ot=[],pt=0,St=[];function ne(s){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var a=this._PSD=te;if(typeof s!="function"){if(s!==kt)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&ht(this,this._value))}this._state=null,this._value=null,++a.ref,(function u(h,f){try{f(function(p){if(h._state===null){if(p===h)throw new TypeError("A promise cannot be resolved with itself.");var y=h._lib&&Le();p&&typeof p.then=="function"?u(h,function(x,_){p instanceof ne?p._then(x,_):p.then(x,_)}):(h._state=!0,h._value=p,xn(h)),y&&Ve()}},ht.bind(null,h))}catch(p){ht(h,p)}})(this,s)}var sn={get:function(){var s=te,a=Br;function u(h,f){var p=this,y=!s.global&&(s!==te||a!==Br),x=y&&!kn(),_=new ne(function(A,D){le(p,new dn(oo(h,s,y,x),oo(f,s,y,x),A,D,s))});return this._consoleTask&&(_._consoleTask=this._consoleTask),_}return u.prototype=kt,u},set:function(s){N(this,"then",s&&s.prototype===kt?sn:{get:function(){return s},set:sn.set})}};function dn(s,a,u,h,f){this.onFulfilled=typeof s=="function"?s:null,this.onRejected=typeof a=="function"?a:null,this.resolve=u,this.reject=h,this.psd=f}function ht(s,a){var u,h;Ue.push(a),s._state===null&&(u=s._lib&&Le(),a=pe(a),s._state=!1,s._value=a,h=s,st.some(function(f){return f._value===h._value})||st.push(h),xn(s),u&&Ve())}function xn(s){var a=s._listeners;s._listeners=[];for(var u=0,h=a.length;u<h;++u)le(s,a[u]);var f=s._PSD;--f.ref||f.finalize(),pt===0&&(++pt,Ke(function(){--pt==0&&je()},[]))}function le(s,a){if(s._state!==null){var u=s._state?a.onFulfilled:a.onRejected;if(u===null)return(s._state?a.resolve:a.reject)(s._value);++a.psd.ref,++pt,Ke(Re,[u,s,a])}else s._listeners.push(a)}function Re(s,a,u){try{var h,f=a._value;!a._state&&Ue.length&&(Ue=[]),h=ze&&a._consoleTask?a._consoleTask.run(function(){return s(f)}):s(f),a._state||Ue.indexOf(f)!==-1||(function(p){for(var y=st.length;y;)if(st[--y]._value===p._value)return st.splice(y,1)})(a),u.resolve(h)}catch(p){u.reject(p)}finally{--pt==0&&je(),--u.psd.ref||u.psd.finalize()}}function ve(){Rn(et,function(){Le()&&Ve()})}function Le(){var s=yt;return dt=yt=!1,s}function Ve(){var s,a,u;do for(;0<ot.length;)for(s=ot,ot=[],u=s.length,a=0;a<u;++a){var h=s[a];h[0].apply(null,h[1])}while(0<ot.length);dt=yt=!0}function je(){var s=st;st=[],s.forEach(function(h){h._PSD.onunhandled.call(null,h._value,h)});for(var a=St.slice(0),u=a.length;u;)a[--u]()}function Xt(s){return new ne(kt,!1,s)}function qe(s,a){var u=te;return function(){var h=Le(),f=te;try{return Cn(u,!0),s.apply(this,arguments)}catch(p){a&&a(p)}finally{Cn(f,!1),h&&Ve()}}}S(ne.prototype,{then:sn,_then:function(s,a){le(this,new dn(null,null,s,a,te))},catch:function(s){if(arguments.length===1)return this.then(null,s);var a=s,u=arguments[1];return typeof a=="function"?this.then(null,function(h){return(h instanceof a?u:Xt)(h)}):this.then(null,function(h){return(h&&h.name===a?u:Xt)(h)})},finally:function(s){return this.then(function(a){return ne.resolve(s()).then(function(){return a})},function(a){return ne.resolve(s()).then(function(){return Xt(a)})})},timeout:function(s,a){var u=this;return s<1/0?new ne(function(h,f){var p=setTimeout(function(){return f(new oe.Timeout(a))},s);u.then(h,f).finally(clearTimeout.bind(null,p))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&N(ne.prototype,Symbol.toStringTag,"Dexie.Promise"),et.env=so(),S(ne,{all:function(){var s=Xe.apply(null,arguments).map(Nr);return new ne(function(a,u){s.length===0&&a([]);var h=s.length;s.forEach(function(f,p){return ne.resolve(f).then(function(y){s[p]=y,--h||a(s)},u)})})},resolve:function(s){return s instanceof ne?s:s&&typeof s.then=="function"?new ne(function(a,u){s.then(a,u)}):new ne(kt,!0,s)},reject:Xt,race:function(){var s=Xe.apply(null,arguments).map(Nr);return new ne(function(a,u){s.map(function(h){return ne.resolve(h).then(a,u)})})},PSD:{get:function(){return te},set:function(s){return te=s}},totalEchoes:{get:function(){return Br}},newPSD:$n,usePSD:Rn,scheduler:{get:function(){return Ke},set:function(s){Ke=s}},rejectionMapper:{get:function(){return pe},set:function(s){pe=s}},follow:function(s,a){return new ne(function(u,h){return $n(function(f,p){var y=te;y.unhandleds=[],y.onunhandled=p,y.finalize=fe(function(){var x,_=this;x=function(){_.unhandleds.length===0?f():p(_.unhandleds[0])},St.push(function A(){x(),St.splice(St.indexOf(A),1)}),++pt,Ke(function(){--pt==0&&je()},[])},y.finalize),s()},a,u,h)})}}),Te&&(Te.allSettled&&N(ne,"allSettled",function(){var s=Xe.apply(null,arguments).map(Nr);return new ne(function(a){s.length===0&&a([]);var u=s.length,h=new Array(u);s.forEach(function(f,p){return ne.resolve(f).then(function(y){return h[p]={status:"fulfilled",value:y}},function(y){return h[p]={status:"rejected",reason:y}}).then(function(){return--u||a(h)})})})}),Te.any&&typeof AggregateError<"u"&&N(ne,"any",function(){var s=Xe.apply(null,arguments).map(Nr);return new ne(function(a,u){s.length===0&&u(new AggregateError([]));var h=s.length,f=new Array(h);s.forEach(function(p,y){return ne.resolve(p).then(function(x){return a(x)},function(x){f[y]=x,--h||u(new AggregateError(f))})})})}),Te.withResolvers&&(ne.withResolvers=Te.withResolvers));var mt={awaits:0,echoes:0,id:0},Ql=0,Lr=[],Mr=0,Br=0,Jl=0;function $n(s,a,u,h){var f=te,p=Object.create(f);return p.parent=f,p.ref=0,p.global=!1,p.id=++Jl,et.env,p.env=It?{Promise:ne,PromiseProp:{value:ne,configurable:!0,writable:!0},all:ne.all,race:ne.race,allSettled:ne.allSettled,any:ne.any,resolve:ne.resolve,reject:ne.reject}:{},a&&d(p,a),++f.ref,p.finalize=function(){--this.parent.ref||this.parent.finalize()},h=Rn(p,s,u,h),p.ref===0&&p.finalize(),h}function Gn(){return mt.id||(mt.id=++Ql),++mt.awaits,mt.echoes+=it,mt.id}function kn(){return!!mt.awaits&&(--mt.awaits==0&&(mt.id=0),mt.echoes=mt.awaits*it,!0)}function Nr(s){return mt.echoes&&s&&s.constructor===Te?(Gn(),s.then(function(a){return kn(),a},function(a){return kn(),at(a)})):s}function Zl(){var s=Lr[Lr.length-1];Lr.pop(),Cn(s,!1)}function Cn(s,a){var u,h=te;(a?!mt.echoes||Mr++&&s===te:!Mr||--Mr&&s===te)||queueMicrotask(a?function(f){++Br,mt.echoes&&--mt.echoes!=0||(mt.echoes=mt.awaits=mt.id=0),Lr.push(te),Cn(f,!0)}.bind(null,s):Zl),s!==te&&(te=s,h===et&&(et.env=so()),It&&(u=et.env.Promise,a=s.env,(h.global||s.global)&&(Object.defineProperty(o,"Promise",a.PromiseProp),u.all=a.all,u.race=a.race,u.resolve=a.resolve,u.reject=a.reject,a.allSettled&&(u.allSettled=a.allSettled),a.any&&(u.any=a.any))))}function so(){var s=o.Promise;return It?{Promise:s,PromiseProp:Object.getOwnPropertyDescriptor(o,"Promise"),all:s.all,race:s.race,allSettled:s.allSettled,any:s.any,resolve:s.resolve,reject:s.reject}:{}}function Rn(s,a,u,h,f){var p=te;try{return Cn(s,!0),a(u,h,f)}finally{Cn(p,!1)}}function oo(s,a,u,h){return typeof s!="function"?s:function(){var f=te;u&&Gn(),Cn(a,!0);try{return s.apply(this,arguments)}finally{Cn(f,!1),h&&queueMicrotask(kn)}}}function Li(s){Promise===Te&&mt.echoes===0?Mr===0?s():enqueueNativeMicroTask(s):setTimeout(s,0)}(""+Mt).indexOf("[native code]")===-1&&(Gn=kn=me);var at=ne.reject,On="￿",hn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ao="String expected.",Yn=[],Ur="__dbnames",Mi="readonly",Bi="readwrite";function jn(s,a){return s?a?function(){return s.apply(this,arguments)&&a.apply(this,arguments)}:s:a}var lo={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function qr(s){return typeof s!="string"||/\./.test(s)?function(a){return a}:function(a){return a[s]===void 0&&s in a&&delete(a=E(a))[s],a}}function co(){throw oe.Type()}function Pe(s,a){try{var u=uo(s),h=uo(a);if(u!==h)return u==="Array"?1:h==="Array"?-1:u==="binary"?1:h==="binary"?-1:u==="string"?1:h==="string"?-1:u==="Date"?1:h!=="Date"?NaN:-1;switch(u){case"number":case"Date":case"string":return a<s?1:s<a?-1:0;case"binary":return(function(f,p){for(var y=f.length,x=p.length,_=y<x?y:x,A=0;A<_;++A)if(f[A]!==p[A])return f[A]<p[A]?-1:1;return y===x?0:y<x?-1:1})(ho(s),ho(a));case"Array":return(function(f,p){for(var y=f.length,x=p.length,_=y<x?y:x,A=0;A<_;++A){var D=Pe(f[A],p[A]);if(D!==0)return D}return y===x?0:y<x?-1:1})(s,a)}}catch{}return NaN}function uo(s){var a=typeof s;return a!="object"?a:ArrayBuffer.isView(s)?"binary":(s=C(s),s==="ArrayBuffer"?"binary":s)}function ho(s){return s instanceof Uint8Array?s:ArrayBuffer.isView(s)?new Uint8Array(s.buffer,s.byteOffset,s.byteLength):new Uint8Array(s)}var fo=(Ge.prototype._trans=function(s,a,u){var h=this._tx||te.trans,f=this.name,p=ze&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(s==="readonly"?"read":"write"," ").concat(this.name));function y(A,D,k){if(!k.schema[f])throw new oe.NotFound("Table "+f+" not part of transaction");return a(k.idbtrans,k)}var x=Le();try{var _=h&&h.db._novip===this.db._novip?h===te.trans?h._promise(s,y,u):$n(function(){return h._promise(s,y,u)},{trans:h,transless:te.transless||te}):(function A(D,k,j,T){if(D.idbdb&&(D._state.openComplete||te.letThrough||D._vip)){var I=D._createTransaction(k,j,D._dbSchema);try{I.create(),D._state.PR1398_maxLoop=3}catch(O){return O.name===Qe.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return A(D,k,j,T)})):at(O)}return I._promise(k,function(O,P){return $n(function(){return te.trans=I,T(O,P,I)})}).then(function(O){if(k==="readwrite")try{I.idbtrans.commit()}catch{}return k==="readonly"?O:I._completion.then(function(){return O})})}if(D._state.openComplete)return at(new oe.DatabaseClosed(D._state.dbOpenError));if(!D._state.isBeingOpened){if(!D._state.autoOpen)return at(new oe.DatabaseClosed);D.open().catch(me)}return D._state.dbReadyPromise.then(function(){return A(D,k,j,T)})})(this.db,s,[this.name],y);return p&&(_._consoleTask=p,_=_.catch(function(A){return console.trace(A),at(A)})),_}finally{x&&Ve()}},Ge.prototype.get=function(s,a){var u=this;return s&&s.constructor===Object?this.where(s).first(a):s==null?at(new oe.Type("Invalid argument to Table.get()")):this._trans("readonly",function(h){return u.core.get({trans:h,key:s}).then(function(f){return u.hook.reading.fire(f)})}).then(a)},Ge.prototype.where=function(s){if(typeof s=="string")return new this.db.WhereClause(this,s);if(c(s))return new this.db.WhereClause(this,"[".concat(s.join("+"),"]"));var a=l(s);if(a.length===1)return this.where(a[0]).equals(s[a[0]]);var u=this.schema.indexes.concat(this.schema.primKey).filter(function(x){if(x.compound&&a.every(function(A){return 0<=x.keyPath.indexOf(A)})){for(var _=0;_<a.length;++_)if(a.indexOf(x.keyPath[_])===-1)return!1;return!0}return!1}).sort(function(x,_){return x.keyPath.length-_.keyPath.length})[0];if(u&&this.db._maxKey!==On){var p=u.keyPath.slice(0,a.length);return this.where(p).equals(p.map(function(_){return s[_]}))}!u&&ze&&console.warn("The query ".concat(JSON.stringify(s)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(a.join("+"),"]"));var h=this.schema.idxByName;function f(x,_){return Pe(x,_)===0}var y=a.reduce(function(k,_){var A=k[0],D=k[1],k=h[_],j=s[_];return[A||k,A||!k?jn(D,k&&k.multi?function(T){return T=J(T,_),c(T)&&T.some(function(I){return f(j,I)})}:function(T){return f(j,J(T,_))}):D]},[null,null]),p=y[0],y=y[1];return p?this.where(p.name).equals(s[p.keyPath]).filter(y):u?this.filter(y):this.where(a).equals("")},Ge.prototype.filter=function(s){return this.toCollection().and(s)},Ge.prototype.count=function(s){return this.toCollection().count(s)},Ge.prototype.offset=function(s){return this.toCollection().offset(s)},Ge.prototype.limit=function(s){return this.toCollection().limit(s)},Ge.prototype.each=function(s){return this.toCollection().each(s)},Ge.prototype.toArray=function(s){return this.toCollection().toArray(s)},Ge.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Ge.prototype.orderBy=function(s){return new this.db.Collection(new this.db.WhereClause(this,c(s)?"[".concat(s.join("+"),"]"):s))},Ge.prototype.reverse=function(){return this.toCollection().reverse()},Ge.prototype.mapToClass=function(s){var a,u=this.db,h=this.name;function f(){return a!==null&&a.apply(this,arguments)||this}(this.schema.mappedClass=s).prototype instanceof co&&((function(_,A){if(typeof A!="function"&&A!==null)throw new TypeError("Class extends value "+String(A)+" is not a constructor or null");function D(){this.constructor=_}r(_,A),_.prototype=A===null?Object.create(A):(D.prototype=A.prototype,new D)})(f,a=s),Object.defineProperty(f.prototype,"db",{get:function(){return u},enumerable:!1,configurable:!0}),f.prototype.table=function(){return h},s=f);for(var p=new Set,y=s.prototype;y;y=g(y))Object.getOwnPropertyNames(y).forEach(function(_){return p.add(_)});function x(_){if(!_)return _;var A,D=Object.create(s.prototype);for(A in _)if(!p.has(A))try{D[A]=_[A]}catch{}return D}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=x,this.hook("reading",x),s},Ge.prototype.defineClass=function(){return this.mapToClass(function(s){d(this,s)})},Ge.prototype.add=function(s,a){var u=this,h=this.schema.primKey,f=h.auto,p=h.keyPath,y=s;return p&&f&&(y=qr(p)(s)),this._trans("readwrite",function(x){return u.core.mutate({trans:x,type:"add",keys:a!=null?[a]:null,values:[y]})}).then(function(x){return x.numFailures?ne.reject(x.failures[0]):x.lastResult}).then(function(x){if(p)try{ue(s,p,x)}catch{}return x})},Ge.prototype.update=function(s,a){return typeof s!="object"||c(s)?this.where(":id").equals(s).modify(a):(s=J(s,this.schema.primKey.keyPath),s===void 0?at(new oe.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(s).modify(a))},Ge.prototype.put=function(s,a){var u=this,h=this.schema.primKey,f=h.auto,p=h.keyPath,y=s;return p&&f&&(y=qr(p)(s)),this._trans("readwrite",function(x){return u.core.mutate({trans:x,type:"put",values:[y],keys:a!=null?[a]:null})}).then(function(x){return x.numFailures?ne.reject(x.failures[0]):x.lastResult}).then(function(x){if(p)try{ue(s,p,x)}catch{}return x})},Ge.prototype.delete=function(s){var a=this;return this._trans("readwrite",function(u){return a.core.mutate({trans:u,type:"delete",keys:[s]})}).then(function(u){return u.numFailures?ne.reject(u.failures[0]):void 0})},Ge.prototype.clear=function(){var s=this;return this._trans("readwrite",function(a){return s.core.mutate({trans:a,type:"deleteRange",range:lo})}).then(function(a){return a.numFailures?ne.reject(a.failures[0]):void 0})},Ge.prototype.bulkGet=function(s){var a=this;return this._trans("readonly",function(u){return a.core.getMany({keys:s,trans:u}).then(function(h){return h.map(function(f){return a.hook.reading.fire(f)})})})},Ge.prototype.bulkAdd=function(s,a,u){var h=this,f=Array.isArray(a)?a:void 0,p=(u=u||(f?void 0:a))?u.allKeys:void 0;return this._trans("readwrite",function(y){var A=h.schema.primKey,x=A.auto,A=A.keyPath;if(A&&f)throw new oe.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(f&&f.length!==s.length)throw new oe.InvalidArgument("Arguments objects and keys must have the same length");var _=s.length,A=A&&x?s.map(qr(A)):s;return h.core.mutate({trans:y,type:"add",keys:f,values:A,wantResults:p}).then(function(I){var k=I.numFailures,j=I.results,T=I.lastResult,I=I.failures;if(k===0)return p?j:T;throw new Oe("".concat(h.name,".bulkAdd(): ").concat(k," of ").concat(_," operations failed"),I)})})},Ge.prototype.bulkPut=function(s,a,u){var h=this,f=Array.isArray(a)?a:void 0,p=(u=u||(f?void 0:a))?u.allKeys:void 0;return this._trans("readwrite",function(y){var A=h.schema.primKey,x=A.auto,A=A.keyPath;if(A&&f)throw new oe.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(f&&f.length!==s.length)throw new oe.InvalidArgument("Arguments objects and keys must have the same length");var _=s.length,A=A&&x?s.map(qr(A)):s;return h.core.mutate({trans:y,type:"put",keys:f,values:A,wantResults:p}).then(function(I){var k=I.numFailures,j=I.results,T=I.lastResult,I=I.failures;if(k===0)return p?j:T;throw new Oe("".concat(h.name,".bulkPut(): ").concat(k," of ").concat(_," operations failed"),I)})})},Ge.prototype.bulkUpdate=function(s){var a=this,u=this.core,h=s.map(function(y){return y.key}),f=s.map(function(y){return y.changes}),p=[];return this._trans("readwrite",function(y){return u.getMany({trans:y,keys:h,cache:"clone"}).then(function(x){var _=[],A=[];s.forEach(function(k,j){var T=k.key,I=k.changes,O=x[j];if(O){for(var P=0,L=Object.keys(I);P<L.length;P++){var M=L[P],B=I[M];if(M===a.schema.primKey.keyPath){if(Pe(B,T)!==0)throw new oe.Constraint("Cannot update primary key in bulkUpdate()")}else ue(O,M,B)}p.push(j),_.push(T),A.push(O)}});var D=_.length;return u.mutate({trans:y,type:"put",keys:_,values:A,updates:{keys:h,changeSpecs:f}}).then(function(k){var j=k.numFailures,T=k.failures;if(j===0)return D;for(var I=0,O=Object.keys(T);I<O.length;I++){var P,L=O[I],M=p[Number(L)];M!=null&&(P=T[L],delete T[L],T[M]=P)}throw new Oe("".concat(a.name,".bulkUpdate(): ").concat(j," of ").concat(D," operations failed"),T)})})})},Ge.prototype.bulkDelete=function(s){var a=this,u=s.length;return this._trans("readwrite",function(h){return a.core.mutate({trans:h,type:"delete",keys:s})}).then(function(y){var f=y.numFailures,p=y.lastResult,y=y.failures;if(f===0)return p;throw new Oe("".concat(a.name,".bulkDelete(): ").concat(f," of ").concat(u," operations failed"),y)})},Ge);function Ge(){}function ur(s){function a(y,x){if(x){for(var _=arguments.length,A=new Array(_-1);--_;)A[_-1]=arguments[_];return u[y].subscribe.apply(null,A),s}if(typeof y=="string")return u[y]}var u={};a.addEventType=p;for(var h=1,f=arguments.length;h<f;++h)p(arguments[h]);return a;function p(y,x,_){if(typeof y!="object"){var A;x=x||tt;var D={subscribers:[],fire:_=_||me,subscribe:function(k){D.subscribers.indexOf(k)===-1&&(D.subscribers.push(k),D.fire=x(D.fire,k))},unsubscribe:function(k){D.subscribers=D.subscribers.filter(function(j){return j!==k}),D.fire=D.subscribers.reduce(x,_)}};return u[y]=a[y]=D}l(A=y).forEach(function(k){var j=A[k];if(c(j))p(k,A[k][0],A[k][1]);else{if(j!=="asap")throw new oe.InvalidArgument("Invalid event config");var T=p(k,Ce,function(){for(var I=arguments.length,O=new Array(I);I--;)O[I]=arguments[I];T.subscribers.forEach(function(P){V(function(){P.apply(null,O)})})})}})}}function dr(s,a){return z(a).from({prototype:s}),a}function Xn(s,a){return!(s.filter||s.algorithm||s.or)&&(a?s.justLimit:!s.replayFilter)}function Ni(s,a){s.filter=jn(s.filter,a)}function Ui(s,a,u){var h=s.replayFilter;s.replayFilter=h?function(){return jn(h(),a())}:a,s.justLimit=u&&!h}function Hr(s,a){if(s.isPrimKey)return a.primaryKey;var u=a.getIndexByKeyPath(s.index);if(!u)throw new oe.Schema("KeyPath "+s.index+" on object store "+a.name+" is not indexed");return u}function po(s,a,u){var h=Hr(s,a.schema);return a.openCursor({trans:u,values:!s.keysOnly,reverse:s.dir==="prev",unique:!!s.unique,query:{index:h,range:s.range}})}function Wr(s,a,u,h){var f=s.replayFilter?jn(s.filter,s.replayFilter()):s.filter;if(s.or){var p={},y=function(x,_,A){var D,k;f&&!f(_,A,function(j){return _.stop(j)},function(j){return _.fail(j)})||((k=""+(D=_.primaryKey))=="[object ArrayBuffer]"&&(k=""+new Uint8Array(D)),w(p,k)||(p[k]=!0,a(x,_,A)))};return Promise.all([s.or._iterate(y,u),mo(po(s,h,u),s.algorithm,y,!s.keysOnly&&s.valueMapper)])}return mo(po(s,h,u),jn(s.algorithm,f),a,!s.keysOnly&&s.valueMapper)}function mo(s,a,u,h){var f=qe(h?function(p,y,x){return u(h(p),y,x)}:u);return s.then(function(p){if(p)return p.start(function(){var y=function(){return p.continue()};a&&!a(p,function(x){return y=x},function(x){p.stop(x),y=me},function(x){p.fail(x),y=me})||f(p.value,p,function(x){return y=x}),y()})})}var fn=Symbol(),hr=(go.prototype.execute=function(s){if(this.add!==void 0){var a=this.add;if(c(a))return n(n([],c(s)?s:[],!0),a).sort();if(typeof a=="number")return(Number(s)||0)+a;if(typeof a=="bigint")try{return BigInt(s)+a}catch{return BigInt(0)+a}throw new TypeError("Invalid term ".concat(a))}if(this.remove!==void 0){var u=this.remove;if(c(u))return c(s)?s.filter(function(h){return!u.includes(h)}).sort():[];if(typeof u=="number")return Number(s)-u;if(typeof u=="bigint")try{return BigInt(s)-u}catch{return BigInt(0)-u}throw new TypeError("Invalid subtrahend ".concat(u))}return a=(a=this.replacePrefix)===null||a===void 0?void 0:a[0],a&&typeof s=="string"&&s.startsWith(a)?this.replacePrefix[1]+s.substring(a.length):s},go);function go(s){Object.assign(this,s)}var ec=(Fe.prototype._read=function(s,a){var u=this._ctx;return u.error?u.table._trans(null,at.bind(null,u.error)):u.table._trans("readonly",s).then(a)},Fe.prototype._write=function(s){var a=this._ctx;return a.error?a.table._trans(null,at.bind(null,a.error)):a.table._trans("readwrite",s,"locked")},Fe.prototype._addAlgorithm=function(s){var a=this._ctx;a.algorithm=jn(a.algorithm,s)},Fe.prototype._iterate=function(s,a){return Wr(this._ctx,s,a,this._ctx.table.core)},Fe.prototype.clone=function(s){var a=Object.create(this.constructor.prototype),u=Object.create(this._ctx);return s&&d(u,s),a._ctx=u,a},Fe.prototype.raw=function(){return this._ctx.valueMapper=null,this},Fe.prototype.each=function(s){var a=this._ctx;return this._read(function(u){return Wr(a,s,u,a.table.core)})},Fe.prototype.count=function(s){var a=this;return this._read(function(u){var h=a._ctx,f=h.table.core;if(Xn(h,!0))return f.count({trans:u,query:{index:Hr(h,f.schema),range:h.range}}).then(function(y){return Math.min(y,h.limit)});var p=0;return Wr(h,function(){return++p,!1},u,f).then(function(){return p})}).then(s)},Fe.prototype.sortBy=function(s,a){var u=s.split(".").reverse(),h=u[0],f=u.length-1;function p(_,A){return A?p(_[u[A]],A-1):_[h]}var y=this._ctx.dir==="next"?1:-1;function x(_,A){return Pe(p(_,f),p(A,f))*y}return this.toArray(function(_){return _.sort(x)}).then(a)},Fe.prototype.toArray=function(s){var a=this;return this._read(function(u){var h=a._ctx;if(h.dir==="next"&&Xn(h,!0)&&0<h.limit){var f=h.valueMapper,p=Hr(h,h.table.core.schema);return h.table.core.query({trans:u,limit:h.limit,values:!0,query:{index:p,range:h.range}}).then(function(x){return x=x.result,f?x.map(f):x})}var y=[];return Wr(h,function(x){return y.push(x)},u,h.table.core).then(function(){return y})},s)},Fe.prototype.offset=function(s){var a=this._ctx;return s<=0||(a.offset+=s,Xn(a)?Ui(a,function(){var u=s;return function(h,f){return u===0||(u===1?--u:f(function(){h.advance(u),u=0}),!1)}}):Ui(a,function(){var u=s;return function(){return--u<0}})),this},Fe.prototype.limit=function(s){return this._ctx.limit=Math.min(this._ctx.limit,s),Ui(this._ctx,function(){var a=s;return function(u,h,f){return--a<=0&&h(f),0<=a}},!0),this},Fe.prototype.until=function(s,a){return Ni(this._ctx,function(u,h,f){return!s(u.value)||(h(f),a)}),this},Fe.prototype.first=function(s){return this.limit(1).toArray(function(a){return a[0]}).then(s)},Fe.prototype.last=function(s){return this.reverse().first(s)},Fe.prototype.filter=function(s){var a;return Ni(this._ctx,function(u){return s(u.value)}),(a=this._ctx).isMatch=jn(a.isMatch,s),this},Fe.prototype.and=function(s){return this.filter(s)},Fe.prototype.or=function(s){return new this.db.WhereClause(this._ctx.table,s,this)},Fe.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Fe.prototype.desc=function(){return this.reverse()},Fe.prototype.eachKey=function(s){var a=this._ctx;return a.keysOnly=!a.isMatch,this.each(function(u,h){s(h.key,h)})},Fe.prototype.eachUniqueKey=function(s){return this._ctx.unique="unique",this.eachKey(s)},Fe.prototype.eachPrimaryKey=function(s){var a=this._ctx;return a.keysOnly=!a.isMatch,this.each(function(u,h){s(h.primaryKey,h)})},Fe.prototype.keys=function(s){var a=this._ctx;a.keysOnly=!a.isMatch;var u=[];return this.each(function(h,f){u.push(f.key)}).then(function(){return u}).then(s)},Fe.prototype.primaryKeys=function(s){var a=this._ctx;if(a.dir==="next"&&Xn(a,!0)&&0<a.limit)return this._read(function(h){var f=Hr(a,a.table.core.schema);return a.table.core.query({trans:h,values:!1,limit:a.limit,query:{index:f,range:a.range}})}).then(function(h){return h.result}).then(s);a.keysOnly=!a.isMatch;var u=[];return this.each(function(h,f){u.push(f.primaryKey)}).then(function(){return u}).then(s)},Fe.prototype.uniqueKeys=function(s){return this._ctx.unique="unique",this.keys(s)},Fe.prototype.firstKey=function(s){return this.limit(1).keys(function(a){return a[0]}).then(s)},Fe.prototype.lastKey=function(s){return this.reverse().firstKey(s)},Fe.prototype.distinct=function(){var s=this._ctx,s=s.index&&s.table.schema.idxByName[s.index];if(!s||!s.multi)return this;var a={};return Ni(this._ctx,function(f){var h=f.primaryKey.toString(),f=w(a,h);return a[h]=!0,!f}),this},Fe.prototype.modify=function(s){var a=this,u=this._ctx;return this._write(function(h){var f,p,y;y=typeof s=="function"?s:(f=l(s),p=f.length,function(P){for(var L=!1,M=0;M<p;++M){var B=f[M],H=s[B],Y=J(P,B);H instanceof hr?(ue(P,B,H.execute(Y)),L=!0):Y!==H&&(ue(P,B,H),L=!0)}return L});var x=u.table.core,k=x.schema.primaryKey,_=k.outbound,A=k.extractKey,D=200,k=a.db._options.modifyChunkSize;k&&(D=typeof k=="object"?k[x.name]||k["*"]||200:k);function j(P,B){var M=B.failures,B=B.numFailures;I+=P-B;for(var H=0,Y=l(M);H<Y.length;H++){var se=Y[H];T.push(M[se])}}var T=[],I=0,O=[];return a.clone().primaryKeys().then(function(P){function L(B){var H=Math.min(D,P.length-B);return x.getMany({trans:h,keys:P.slice(B,B+H),cache:"immutable"}).then(function(Y){for(var se=[],X=[],Z=_?[]:null,ae=[],re=0;re<H;++re){var ce=Y[re],ke={value:E(ce),primKey:P[B+re]};y.call(ke,ke.value,ke)!==!1&&(ke.value==null?ae.push(P[B+re]):_||Pe(A(ce),A(ke.value))===0?(X.push(ke.value),_&&Z.push(P[B+re])):(ae.push(P[B+re]),se.push(ke.value)))}return Promise.resolve(0<se.length&&x.mutate({trans:h,type:"add",values:se}).then(function(Ee){for(var Se in Ee.failures)ae.splice(parseInt(Se),1);j(se.length,Ee)})).then(function(){return(0<X.length||M&&typeof s=="object")&&x.mutate({trans:h,type:"put",keys:Z,values:X,criteria:M,changeSpec:typeof s!="function"&&s,isAdditionalChunk:0<B}).then(function(Ee){return j(X.length,Ee)})}).then(function(){return(0<ae.length||M&&s===qi)&&x.mutate({trans:h,type:"delete",keys:ae,criteria:M,isAdditionalChunk:0<B}).then(function(Ee){return j(ae.length,Ee)})}).then(function(){return P.length>B+H&&L(B+D)})})}var M=Xn(u)&&u.limit===1/0&&(typeof s!="function"||s===qi)&&{index:u.index,range:u.range};return L(0).then(function(){if(0<T.length)throw new _e("Error modifying one or more objects",T,I,O);return P.length})})})},Fe.prototype.delete=function(){var s=this._ctx,a=s.range;return Xn(s)&&(s.isPrimKey||a.type===3)?this._write(function(u){var h=s.table.core.schema.primaryKey,f=a;return s.table.core.count({trans:u,query:{index:h,range:f}}).then(function(p){return s.table.core.mutate({trans:u,type:"deleteRange",range:f}).then(function(y){var x=y.failures;if(y.lastResult,y.results,y=y.numFailures,y)throw new _e("Could not delete some values",Object.keys(x).map(function(_){return x[_]}),p-y);return p-y})})}):this.modify(qi)},Fe);function Fe(){}var qi=function(s,a){return a.value=null};function tc(s,a){return s<a?-1:s===a?0:1}function nc(s,a){return a<s?-1:s===a?0:1}function Dt(s,a,u){return s=s instanceof yo?new s.Collection(s):s,s._ctx.error=new(u||TypeError)(a),s}function Qn(s){return new s.Collection(s,function(){return bo("")}).limit(0)}function Kr(s,a,u,h){var f,p,y,x,_,A,D,k=u.length;if(!u.every(function(I){return typeof I=="string"}))return Dt(s,ao);function j(I){f=I==="next"?function(P){return P.toUpperCase()}:function(P){return P.toLowerCase()},p=I==="next"?function(P){return P.toLowerCase()}:function(P){return P.toUpperCase()},y=I==="next"?tc:nc;var O=u.map(function(P){return{lower:p(P),upper:f(P)}}).sort(function(P,L){return y(P.lower,L.lower)});x=O.map(function(P){return P.upper}),_=O.map(function(P){return P.lower}),D=(A=I)==="next"?"":h}j("next"),s=new s.Collection(s,function(){return En(x[0],_[k-1]+h)}),s._ondirectionchange=function(I){j(I)};var T=0;return s._addAlgorithm(function(I,O,P){var L=I.key;if(typeof L!="string")return!1;var M=p(L);if(a(M,_,T))return!0;for(var B=null,H=T;H<k;++H){var Y=(function(se,X,Z,ae,re,ce){for(var ke=Math.min(se.length,ae.length),Ee=-1,Se=0;Se<ke;++Se){var Rt=X[Se];if(Rt!==ae[Se])return re(se[Se],Z[Se])<0?se.substr(0,Se)+Z[Se]+Z.substr(Se+1):re(se[Se],ae[Se])<0?se.substr(0,Se)+ae[Se]+Z.substr(Se+1):0<=Ee?se.substr(0,Ee)+X[Ee]+Z.substr(Ee+1):null;re(se[Se],Rt)<0&&(Ee=Se)}return ke<ae.length&&ce==="next"?se+Z.substr(se.length):ke<se.length&&ce==="prev"?se.substr(0,Z.length):Ee<0?null:se.substr(0,Ee)+ae[Ee]+Z.substr(Ee+1)})(L,M,x[H],_[H],y,A);Y===null&&B===null?T=H+1:(B===null||0<y(B,Y))&&(B=Y)}return O(B!==null?function(){I.continue(B+D)}:P),!1}),s}function En(s,a,u,h){return{type:2,lower:s,upper:a,lowerOpen:u,upperOpen:h}}function bo(s){return{type:1,lower:s,upper:s}}var yo=(Object.defineProperty(gt.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),gt.prototype.between=function(s,a,u,h){u=u!==!1,h=h===!0;try{return 0<this._cmp(s,a)||this._cmp(s,a)===0&&(u||h)&&(!u||!h)?Qn(this):new this.Collection(this,function(){return En(s,a,!u,!h)})}catch{return Dt(this,hn)}},gt.prototype.equals=function(s){return s==null?Dt(this,hn):new this.Collection(this,function(){return bo(s)})},gt.prototype.above=function(s){return s==null?Dt(this,hn):new this.Collection(this,function(){return En(s,void 0,!0)})},gt.prototype.aboveOrEqual=function(s){return s==null?Dt(this,hn):new this.Collection(this,function(){return En(s,void 0,!1)})},gt.prototype.below=function(s){return s==null?Dt(this,hn):new this.Collection(this,function(){return En(void 0,s,!1,!0)})},gt.prototype.belowOrEqual=function(s){return s==null?Dt(this,hn):new this.Collection(this,function(){return En(void 0,s)})},gt.prototype.startsWith=function(s){return typeof s!="string"?Dt(this,ao):this.between(s,s+On,!0,!0)},gt.prototype.startsWithIgnoreCase=function(s){return s===""?this.startsWith(s):Kr(this,function(a,u){return a.indexOf(u[0])===0},[s],On)},gt.prototype.equalsIgnoreCase=function(s){return Kr(this,function(a,u){return a===u[0]},[s],"")},gt.prototype.anyOfIgnoreCase=function(){var s=Xe.apply(Q,arguments);return s.length===0?Qn(this):Kr(this,function(a,u){return u.indexOf(a)!==-1},s,"")},gt.prototype.startsWithAnyOfIgnoreCase=function(){var s=Xe.apply(Q,arguments);return s.length===0?Qn(this):Kr(this,function(a,u){return u.some(function(h){return a.indexOf(h)===0})},s,On)},gt.prototype.anyOf=function(){var s=this,a=Xe.apply(Q,arguments),u=this._cmp;try{a.sort(u)}catch{return Dt(this,hn)}if(a.length===0)return Qn(this);var h=new this.Collection(this,function(){return En(a[0],a[a.length-1])});h._ondirectionchange=function(p){u=p==="next"?s._ascending:s._descending,a.sort(u)};var f=0;return h._addAlgorithm(function(p,y,x){for(var _=p.key;0<u(_,a[f]);)if(++f===a.length)return y(x),!1;return u(_,a[f])===0||(y(function(){p.continue(a[f])}),!1)}),h},gt.prototype.notEqual=function(s){return this.inAnyRange([[-1/0,s],[s,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},gt.prototype.noneOf=function(){var s=Xe.apply(Q,arguments);if(s.length===0)return new this.Collection(this);try{s.sort(this._ascending)}catch{return Dt(this,hn)}var a=s.reduce(function(u,h){return u?u.concat([[u[u.length-1][1],h]]):[[-1/0,h]]},null);return a.push([s[s.length-1],this.db._maxKey]),this.inAnyRange(a,{includeLowers:!1,includeUppers:!1})},gt.prototype.inAnyRange=function(L,a){var u=this,h=this._cmp,f=this._ascending,p=this._descending,y=this._min,x=this._max;if(L.length===0)return Qn(this);if(!L.every(function(M){return M[0]!==void 0&&M[1]!==void 0&&f(M[0],M[1])<=0}))return Dt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",oe.InvalidArgument);var _=!a||a.includeLowers!==!1,A=a&&a.includeUppers===!0,D,k=f;function j(M,B){return k(M[0],B[0])}try{(D=L.reduce(function(M,B){for(var H=0,Y=M.length;H<Y;++H){var se=M[H];if(h(B[0],se[1])<0&&0<h(B[1],se[0])){se[0]=y(se[0],B[0]),se[1]=x(se[1],B[1]);break}}return H===Y&&M.push(B),M},[])).sort(j)}catch{return Dt(this,hn)}var T=0,I=A?function(M){return 0<f(M,D[T][1])}:function(M){return 0<=f(M,D[T][1])},O=_?function(M){return 0<p(M,D[T][0])}:function(M){return 0<=p(M,D[T][0])},P=I,L=new this.Collection(this,function(){return En(D[0][0],D[D.length-1][1],!_,!A)});return L._ondirectionchange=function(M){k=M==="next"?(P=I,f):(P=O,p),D.sort(j)},L._addAlgorithm(function(M,B,H){for(var Y,se=M.key;P(se);)if(++T===D.length)return B(H),!1;return!I(Y=se)&&!O(Y)||(u._cmp(se,D[T][1])===0||u._cmp(se,D[T][0])===0||B(function(){k===f?M.continue(D[T][0]):M.continue(D[T][1])}),!1)}),L},gt.prototype.startsWithAnyOf=function(){var s=Xe.apply(Q,arguments);return s.every(function(a){return typeof a=="string"})?s.length===0?Qn(this):this.inAnyRange(s.map(function(a){return[a,a+On]})):Dt(this,"startsWithAnyOf() only works with strings")},gt);function gt(){}function on(s){return qe(function(a){return fr(a),s(a.target.error),!1})}function fr(s){s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault()}var pr="storagemutated",Hi="x-storagemutated-1",Sn=ur(null,pr),rc=(an.prototype._lock=function(){return ie(!te.global),++this._reculock,this._reculock!==1||te.global||(te.lockOwnerFor=this),this},an.prototype._unlock=function(){if(ie(!te.global),--this._reculock==0)for(te.global||(te.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var s=this._blockedFuncs.shift();try{Rn(s[1],s[0])}catch{}}return this},an.prototype._locked=function(){return this._reculock&&te.lockOwnerFor!==this},an.prototype.create=function(s){var a=this;if(!this.mode)return this;var u=this.db.idbdb,h=this.db._state.dbOpenError;if(ie(!this.idbtrans),!s&&!u)switch(h&&h.name){case"DatabaseClosedError":throw new oe.DatabaseClosed(h);case"MissingAPIError":throw new oe.MissingAPI(h.message,h);default:throw new oe.OpenFailed(h)}if(!this.active)throw new oe.TransactionInactive;return ie(this._completion._state===null),(s=this.idbtrans=s||(this.db.core||u).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=qe(function(f){fr(f),a._reject(s.error)}),s.onabort=qe(function(f){fr(f),a.active&&a._reject(new oe.Abort(s.error)),a.active=!1,a.on("abort").fire(f)}),s.oncomplete=qe(function(){a.active=!1,a._resolve(),"mutatedParts"in s&&Sn.storagemutated.fire(s.mutatedParts)}),this},an.prototype._promise=function(s,a,u){var h=this;if(s==="readwrite"&&this.mode!=="readwrite")return at(new oe.ReadOnly("Transaction is readonly"));if(!this.active)return at(new oe.TransactionInactive);if(this._locked())return new ne(function(p,y){h._blockedFuncs.push([function(){h._promise(s,a,u).then(p,y)},te])});if(u)return $n(function(){var p=new ne(function(y,x){h._lock();var _=a(y,x,h);_&&_.then&&_.then(y,x)});return p.finally(function(){return h._unlock()}),p._lib=!0,p});var f=new ne(function(p,y){var x=a(p,y,h);x&&x.then&&x.then(p,y)});return f._lib=!0,f},an.prototype._root=function(){return this.parent?this.parent._root():this},an.prototype.waitFor=function(s){var a,u=this._root(),h=ne.resolve(s);u._waitingFor?u._waitingFor=u._waitingFor.then(function(){return h}):(u._waitingFor=h,u._waitingQueue=[],a=u.idbtrans.objectStore(u.storeNames[0]),(function p(){for(++u._spinCount;u._waitingQueue.length;)u._waitingQueue.shift()();u._waitingFor&&(a.get(-1/0).onsuccess=p)})());var f=u._waitingFor;return new ne(function(p,y){h.then(function(x){return u._waitingQueue.push(qe(p.bind(null,x)))},function(x){return u._waitingQueue.push(qe(y.bind(null,x)))}).finally(function(){u._waitingFor===f&&(u._waitingFor=null)})})},an.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new oe.Abort))},an.prototype.table=function(s){var a=this._memoizedTables||(this._memoizedTables={});if(w(a,s))return a[s];var u=this.schema[s];if(!u)throw new oe.NotFound("Table "+s+" not part of transaction");return u=new this.db.Table(s,u,this),u.core=this.db.core.table(s),a[s]=u},an);function an(){}function Wi(s,a,u,h,f,p,y){return{name:s,keyPath:a,unique:u,multi:h,auto:f,compound:p,src:(u&&!y?"&":"")+(h?"*":"")+(f?"++":"")+wo(a)}}function wo(s){return typeof s=="string"?s:s?"["+[].join.call(s,"+")+"]":""}function Ki(s,a,u){return{name:s,primKey:a,indexes:u,mappedClass:null,idxByName:(h=function(f){return[f.name,f]},u.reduce(function(f,p,y){return y=h(p,y),y&&(f[y[0]]=y[1]),f},{}))};var h}var mr=function(s){try{return s.only([[]]),mr=function(){return[[]]},[[]]}catch{return mr=function(){return On},On}};function Vi(s){return s==null?function(){}:typeof s=="string"?(a=s).split(".").length===1?function(u){return u[a]}:function(u){return J(u,a)}:function(u){return J(u,s)};var a}function vo(s){return[].slice.call(s)}var ic=0;function gr(s){return s==null?":id":typeof s=="string"?s:"[".concat(s.join("+"),"]")}function sc(s,a,_){function h(P){if(P.type===3)return null;if(P.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var T=P.lower,I=P.upper,O=P.lowerOpen,P=P.upperOpen;return T===void 0?I===void 0?null:a.upperBound(I,!!P):I===void 0?a.lowerBound(T,!!O):a.bound(T,I,!!O,!!P)}function f(j){var T,I=j.name;return{name:I,schema:j,mutate:function(O){var P=O.trans,L=O.type,M=O.keys,B=O.values,H=O.range;return new Promise(function(Y,se){Y=qe(Y);var X=P.objectStore(I),Z=X.keyPath==null,ae=L==="put"||L==="add";if(!ae&&L!=="delete"&&L!=="deleteRange")throw new Error("Invalid operation type: "+L);var re,ce=(M||B||{length:1}).length;if(M&&B&&M.length!==B.length)throw new Error("Given keys array must have same length as given values array.");if(ce===0)return Y({numFailures:0,failures:{},results:[],lastResult:void 0});function ke(Ct){++Rt,fr(Ct)}var Ee=[],Se=[],Rt=0;if(L==="deleteRange"){if(H.type===4)return Y({numFailures:Rt,failures:Se,results:[],lastResult:void 0});H.type===3?Ee.push(re=X.clear()):Ee.push(re=X.delete(h(H)))}else{var Z=ae?Z?[B,M]:[B,null]:[M,null],xe=Z[0],vt=Z[1];if(ae)for(var xt=0;xt<ce;++xt)Ee.push(re=vt&&vt[xt]!==void 0?X[L](xe[xt],vt[xt]):X[L](xe[xt])),re.onerror=ke;else for(xt=0;xt<ce;++xt)Ee.push(re=X[L](xe[xt])),re.onerror=ke}function si(Ct){Ct=Ct.target.result,Ee.forEach(function(Ln,ds){return Ln.error!=null&&(Se[ds]=Ln.error)}),Y({numFailures:Rt,failures:Se,results:L==="delete"?M:Ee.map(function(Ln){return Ln.result}),lastResult:Ct})}re.onerror=function(Ct){ke(Ct),si(Ct)},re.onsuccess=si})},getMany:function(O){var P=O.trans,L=O.keys;return new Promise(function(M,B){M=qe(M);for(var H,Y=P.objectStore(I),se=L.length,X=new Array(se),Z=0,ae=0,re=function(Ee){Ee=Ee.target,X[Ee._pos]=Ee.result,++ae===Z&&M(X)},ce=on(B),ke=0;ke<se;++ke)L[ke]!=null&&((H=Y.get(L[ke]))._pos=ke,H.onsuccess=re,H.onerror=ce,++Z);Z===0&&M(X)})},get:function(O){var P=O.trans,L=O.key;return new Promise(function(M,B){M=qe(M);var H=P.objectStore(I).get(L);H.onsuccess=function(Y){return M(Y.target.result)},H.onerror=on(B)})},query:(T=A,function(O){return new Promise(function(P,L){P=qe(P);var M,B,H,Z=O.trans,Y=O.values,se=O.limit,re=O.query,X=se===1/0?void 0:se,ae=re.index,re=re.range,Z=Z.objectStore(I),ae=ae.isPrimaryKey?Z:Z.index(ae.name),re=h(re);if(se===0)return P({result:[]});T?((X=Y?ae.getAll(re,X):ae.getAllKeys(re,X)).onsuccess=function(ce){return P({result:ce.target.result})},X.onerror=on(L)):(M=0,B=!Y&&"openKeyCursor"in ae?ae.openKeyCursor(re):ae.openCursor(re),H=[],B.onsuccess=function(ce){var ke=B.result;return ke?(H.push(Y?ke.value:ke.primaryKey),++M===se?P({result:H}):void ke.continue()):P({result:H})},B.onerror=on(L))})}),openCursor:function(O){var P=O.trans,L=O.values,M=O.query,B=O.reverse,H=O.unique;return new Promise(function(Y,se){Y=qe(Y);var ae=M.index,X=M.range,Z=P.objectStore(I),Z=ae.isPrimaryKey?Z:Z.index(ae.name),ae=B?H?"prevunique":"prev":H?"nextunique":"next",re=!L&&"openKeyCursor"in Z?Z.openKeyCursor(h(X),ae):Z.openCursor(h(X),ae);re.onerror=on(se),re.onsuccess=qe(function(ce){var ke,Ee,Se,Rt,xe=re.result;xe?(xe.___id=++ic,xe.done=!1,ke=xe.continue.bind(xe),Ee=(Ee=xe.continuePrimaryKey)&&Ee.bind(xe),Se=xe.advance.bind(xe),Rt=function(){throw new Error("Cursor not stopped")},xe.trans=P,xe.stop=xe.continue=xe.continuePrimaryKey=xe.advance=function(){throw new Error("Cursor not started")},xe.fail=qe(se),xe.next=function(){var vt=this,xt=1;return this.start(function(){return xt--?vt.continue():vt.stop()}).then(function(){return vt})},xe.start=function(vt){function xt(){if(re.result)try{vt()}catch(Ct){xe.fail(Ct)}else xe.done=!0,xe.start=function(){throw new Error("Cursor behind last entry")},xe.stop()}var si=new Promise(function(Ct,Ln){Ct=qe(Ct),re.onerror=on(Ln),xe.fail=Ln,xe.stop=function(ds){xe.stop=xe.continue=xe.continuePrimaryKey=xe.advance=Rt,Ct(ds)}});return re.onsuccess=qe(function(Ct){re.onsuccess=xt,xt()}),xe.continue=ke,xe.continuePrimaryKey=Ee,xe.advance=Se,xt(),si},Y(xe)):Y(null)},se)})},count:function(O){var P=O.query,L=O.trans,M=P.index,B=P.range;return new Promise(function(H,Y){var se=L.objectStore(I),X=M.isPrimaryKey?se:se.index(M.name),se=h(B),X=se?X.count(se):X.count();X.onsuccess=qe(function(Z){return H(Z.target.result)}),X.onerror=on(Y)})}}}var p,y,x,D=(y=_,x=vo((p=s).objectStoreNames),{schema:{name:p.name,tables:x.map(function(j){return y.objectStore(j)}).map(function(j){var T=j.keyPath,P=j.autoIncrement,I=c(T),O={},P={name:j.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:T==null,compound:I,keyPath:T,autoIncrement:P,unique:!0,extractKey:Vi(T)},indexes:vo(j.indexNames).map(function(L){return j.index(L)}).map(function(H){var M=H.name,B=H.unique,Y=H.multiEntry,H=H.keyPath,Y={name:M,compound:c(H),keyPath:H,unique:B,multiEntry:Y,extractKey:Vi(H)};return O[gr(H)]=Y}),getIndexByKeyPath:function(L){return O[gr(L)]}};return O[":id"]=P.primaryKey,T!=null&&(O[gr(T)]=P.primaryKey),P})},hasGetAll:0<x.length&&"getAll"in y.objectStore(x[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),_=D.schema,A=D.hasGetAll,D=_.tables.map(f),k={};return D.forEach(function(j){return k[j.name]=j}),{stack:"dbcore",transaction:s.transaction.bind(s),table:function(j){if(!k[j])throw new Error("Table '".concat(j,"' not found"));return k[j]},MIN_KEY:-1/0,MAX_KEY:mr(a),schema:_}}function oc(s,a,u,h){var f=u.IDBKeyRange;return u.indexedDB,{dbcore:(h=sc(a,f,h),s.dbcore.reduce(function(p,y){return y=y.create,i(i({},p),y(p))},h))}}function Vr(s,h){var u=h.db,h=oc(s._middlewares,u,s._deps,h);s.core=h.dbcore,s.tables.forEach(function(f){var p=f.name;s.core.schema.tables.some(function(y){return y.name===p})&&(f.core=s.core.table(p),s[p]instanceof s.Table&&(s[p].core=f.core))})}function Gr(s,a,u,h){u.forEach(function(f){var p=h[f];a.forEach(function(y){var x=(function _(A,D){return q(A,D)||(A=g(A))&&_(A,D)})(y,f);(!x||"value"in x&&x.value===void 0)&&(y===s.Transaction.prototype||y instanceof s.Transaction?N(y,f,{get:function(){return this.table(f)},set:function(_){U(this,f,{value:_,writable:!0,configurable:!0,enumerable:!0})}}):y[f]=new s.Table(f,p))})})}function Gi(s,a){a.forEach(function(u){for(var h in u)u[h]instanceof s.Table&&delete u[h]})}function ac(s,a){return s._cfg.version-a._cfg.version}function lc(s,a,u,h){var f=s._dbSchema;u.objectStoreNames.contains("$meta")&&!f.$meta&&(f.$meta=Ki("$meta",$o("")[0],[]),s._storeNames.push("$meta"));var p=s._createTransaction("readwrite",s._storeNames,f);p.create(u),p._completion.catch(h);var y=p._reject.bind(p),x=te.transless||te;$n(function(){return te.trans=p,te.transless=x,a!==0?(Vr(s,u),A=a,((_=p).storeNames.includes("$meta")?_.table("$meta").get("version").then(function(D){return D??A}):ne.resolve(A)).then(function(D){return j=D,T=p,I=u,O=[],D=(k=s)._versions,P=k._dbSchema=Xr(0,k.idbdb,I),(D=D.filter(function(L){return L._cfg.version>=j})).length!==0?(D.forEach(function(L){O.push(function(){var M=P,B=L._cfg.dbschema;Qr(k,M,I),Qr(k,B,I),P=k._dbSchema=B;var H=Yi(M,B);H.add.forEach(function(ae){Xi(I,ae[0],ae[1].primKey,ae[1].indexes)}),H.change.forEach(function(ae){if(ae.recreate)throw new oe.Upgrade("Not yet support for changing primary key");var re=I.objectStore(ae.name);ae.add.forEach(function(ce){return Yr(re,ce)}),ae.change.forEach(function(ce){re.deleteIndex(ce.name),Yr(re,ce)}),ae.del.forEach(function(ce){return re.deleteIndex(ce)})});var Y=L._cfg.contentUpgrade;if(Y&&L._cfg.version>j){Vr(k,I),T._memoizedTables={};var se=we(B);H.del.forEach(function(ae){se[ae]=M[ae]}),Gi(k,[k.Transaction.prototype]),Gr(k,[k.Transaction.prototype],l(se),se),T.schema=se;var X,Z=ct(Y);return Z&&Gn(),H=ne.follow(function(){var ae;(X=Y(T))&&Z&&(ae=kn.bind(null,null),X.then(ae,ae))}),X&&typeof X.then=="function"?ne.resolve(X):H.then(function(){return X})}}),O.push(function(M){var B,H,Y=L._cfg.dbschema;B=Y,H=M,[].slice.call(H.db.objectStoreNames).forEach(function(se){return B[se]==null&&H.db.deleteObjectStore(se)}),Gi(k,[k.Transaction.prototype]),Gr(k,[k.Transaction.prototype],k._storeNames,k._dbSchema),T.schema=k._dbSchema}),O.push(function(M){k.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(k.idbdb.version/10)===L._cfg.version?(k.idbdb.deleteObjectStore("$meta"),delete k._dbSchema.$meta,k._storeNames=k._storeNames.filter(function(B){return B!=="$meta"})):M.objectStore("$meta").put(L._cfg.version,"version"))})}),(function L(){return O.length?ne.resolve(O.shift()(T.idbtrans)).then(L):ne.resolve()})().then(function(){xo(P,I)})):ne.resolve();var k,j,T,I,O,P}).catch(y)):(l(f).forEach(function(D){Xi(u,D,f[D].primKey,f[D].indexes)}),Vr(s,u),void ne.follow(function(){return s.on.populate.fire(p)}).catch(y));var _,A})}function cc(s,a){xo(s._dbSchema,a),a.db.version%10!=0||a.objectStoreNames.contains("$meta")||a.db.createObjectStore("$meta").add(Math.ceil(a.db.version/10-1),"version");var u=Xr(0,s.idbdb,a);Qr(s,s._dbSchema,a);for(var h=0,f=Yi(u,s._dbSchema).change;h<f.length;h++){var p=(function(y){if(y.change.length||y.recreate)return console.warn("Unable to patch indexes of table ".concat(y.name," because it has changes on the type of index or primary key.")),{value:void 0};var x=a.objectStore(y.name);y.add.forEach(function(_){ze&&console.debug("Dexie upgrade patch: Creating missing index ".concat(y.name,".").concat(_.src)),Yr(x,_)})})(f[h]);if(typeof p=="object")return p.value}}function Yi(s,a){var u,h={del:[],add:[],change:[]};for(u in s)a[u]||h.del.push(u);for(u in a){var f=s[u],p=a[u];if(f){var y={name:u,def:p,recreate:!1,del:[],add:[],change:[]};if(""+(f.primKey.keyPath||"")!=""+(p.primKey.keyPath||"")||f.primKey.auto!==p.primKey.auto)y.recreate=!0,h.change.push(y);else{var x=f.idxByName,_=p.idxByName,A=void 0;for(A in x)_[A]||y.del.push(A);for(A in _){var D=x[A],k=_[A];D?D.src!==k.src&&y.change.push(k):y.add.push(k)}(0<y.del.length||0<y.add.length||0<y.change.length)&&h.change.push(y)}}else h.add.push([u,p])}return h}function Xi(s,a,u,h){var f=s.db.createObjectStore(a,u.keyPath?{keyPath:u.keyPath,autoIncrement:u.auto}:{autoIncrement:u.auto});return h.forEach(function(p){return Yr(f,p)}),f}function xo(s,a){l(s).forEach(function(u){a.db.objectStoreNames.contains(u)||(ze&&console.debug("Dexie: Creating missing table",u),Xi(a,u,s[u].primKey,s[u].indexes))})}function Yr(s,a){s.createIndex(a.name,a.keyPath,{unique:a.unique,multiEntry:a.multi})}function Xr(s,a,u){var h={};return de(a.objectStoreNames,0).forEach(function(f){for(var p=u.objectStore(f),y=Wi(wo(A=p.keyPath),A||"",!0,!1,!!p.autoIncrement,A&&typeof A!="string",!0),x=[],_=0;_<p.indexNames.length;++_){var D=p.index(p.indexNames[_]),A=D.keyPath,D=Wi(D.name,A,!!D.unique,!!D.multiEntry,!1,A&&typeof A!="string",!1);x.push(D)}h[f]=Ki(f,y,x)}),h}function Qr(s,a,u){for(var h=u.db.objectStoreNames,f=0;f<h.length;++f){var p=h[f],y=u.objectStore(p);s._hasGetAll="getAll"in y;for(var x=0;x<y.indexNames.length;++x){var _=y.indexNames[x],A=y.index(_).keyPath,D=typeof A=="string"?A:"["+de(A).join("+")+"]";!a[p]||(A=a[p].idxByName[D])&&(A.name=_,delete a[p].idxByName[D],a[p].idxByName[_]=A)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&o.WorkerGlobalScope&&o instanceof o.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(s._hasGetAll=!1)}function $o(s){return s.split(",").map(function(a,u){var h=(a=a.trim()).replace(/([&*]|\+\+)/g,""),f=/^\[/.test(h)?h.match(/^\[(.*)\]$/)[1].split("+"):h;return Wi(h,f||null,/\&/.test(a),/\*/.test(a),/\+\+/.test(a),c(f),u===0)})}var uc=(Jr.prototype._parseStoresSpec=function(s,a){l(s).forEach(function(u){if(s[u]!==null){var h=$o(s[u]),f=h.shift();if(f.unique=!0,f.multi)throw new oe.Schema("Primary key cannot be multi-valued");h.forEach(function(p){if(p.auto)throw new oe.Schema("Only primary key can be marked as autoIncrement (++)");if(!p.keyPath)throw new oe.Schema("Index must have a name and cannot be an empty string")}),a[u]=Ki(u,f,h)}})},Jr.prototype.stores=function(u){var a=this.db;this._cfg.storesSource=this._cfg.storesSource?d(this._cfg.storesSource,u):u;var u=a._versions,h={},f={};return u.forEach(function(p){d(h,p._cfg.storesSource),f=p._cfg.dbschema={},p._parseStoresSpec(h,f)}),a._dbSchema=f,Gi(a,[a._allTables,a,a.Transaction.prototype]),Gr(a,[a._allTables,a,a.Transaction.prototype,this._cfg.tables],l(f),f),a._storeNames=l(f),this},Jr.prototype.upgrade=function(s){return this._cfg.contentUpgrade=Pt(this._cfg.contentUpgrade||me,s),this},Jr);function Jr(){}function Qi(s,a){var u=s._dbNamesDB;return u||(u=s._dbNamesDB=new pn(Ur,{addons:[],indexedDB:s,IDBKeyRange:a})).version(1).stores({dbnames:"name"}),u.table("dbnames")}function Ji(s){return s&&typeof s.databases=="function"}function Zi(s){return $n(function(){return te.letThrough=!0,s()})}function es(s){return!("from"in s)}var wt=function(s,a){if(!this){var u=new wt;return s&&"d"in s&&d(u,s),u}d(this,arguments.length?{d:1,from:s,to:1<arguments.length?a:s}:{d:0})};function br(s,a,u){var h=Pe(a,u);if(!isNaN(h)){if(0<h)throw RangeError();if(es(s))return d(s,{from:a,to:u,d:1});var f=s.l,h=s.r;if(Pe(u,s.from)<0)return f?br(f,a,u):s.l={from:a,to:u,d:1,l:null,r:null},Co(s);if(0<Pe(a,s.to))return h?br(h,a,u):s.r={from:a,to:u,d:1,l:null,r:null},Co(s);Pe(a,s.from)<0&&(s.from=a,s.l=null,s.d=h?h.d+1:1),0<Pe(u,s.to)&&(s.to=u,s.r=null,s.d=s.l?s.l.d+1:1),u=!s.r,f&&!s.l&&yr(s,f),h&&u&&yr(s,h)}}function yr(s,a){es(a)||(function u(h,_){var p=_.from,y=_.to,x=_.l,_=_.r;br(h,p,y),x&&u(h,x),_&&u(h,_)})(s,a)}function ko(s,a){var u=Zr(a),h=u.next();if(h.done)return!1;for(var f=h.value,p=Zr(s),y=p.next(f.from),x=y.value;!h.done&&!y.done;){if(Pe(x.from,f.to)<=0&&0<=Pe(x.to,f.from))return!0;Pe(f.from,x.from)<0?f=(h=u.next(x.from)).value:x=(y=p.next(f.from)).value}return!1}function Zr(s){var a=es(s)?null:{s:0,n:s};return{next:function(u){for(var h=0<arguments.length;a;)switch(a.s){case 0:if(a.s=1,h)for(;a.n.l&&Pe(u,a.n.from)<0;)a={up:a,n:a.n.l,s:1};else for(;a.n.l;)a={up:a,n:a.n.l,s:1};case 1:if(a.s=2,!h||Pe(u,a.n.to)<=0)return{value:a.n,done:!1};case 2:if(a.n.r){a.s=3,a={up:a,n:a.n.r,s:0};continue}case 3:a=a.up}return{done:!0}}}}function Co(s){var a,u,h=(((a=s.r)===null||a===void 0?void 0:a.d)||0)-(((u=s.l)===null||u===void 0?void 0:u.d)||0),f=1<h?"r":h<-1?"l":"";f&&(a=f=="r"?"l":"r",u=i({},s),h=s[f],s.from=h.from,s.to=h.to,s[f]=h[f],u[f]=h[a],(s[a]=u).d=Eo(u)),s.d=Eo(s)}function Eo(u){var a=u.r,u=u.l;return(a?u?Math.max(a.d,u.d):a.d:u?u.d:0)+1}function ei(s,a){return l(a).forEach(function(u){s[u]?yr(s[u],a[u]):s[u]=(function h(f){var p,y,x={};for(p in f)w(f,p)&&(y=f[p],x[p]=!y||typeof y!="object"||m.has(y.constructor)?y:h(y));return x})(a[u])}),s}function ts(s,a){return s.all||a.all||Object.keys(s).some(function(u){return a[u]&&ko(a[u],s[u])})}S(wt.prototype,((Mt={add:function(s){return yr(this,s),this},addKey:function(s){return br(this,s,s),this},addKeys:function(s){var a=this;return s.forEach(function(u){return br(a,u,u)}),this},hasKey:function(s){var a=Zr(this).next(s).value;return a&&Pe(a.from,s)<=0&&0<=Pe(a.to,s)}})[he]=function(){return Zr(this)},Mt));var Fn={},ns={},rs=!1;function ti(s){ei(ns,s),rs||(rs=!0,setTimeout(function(){rs=!1,is(ns,!(ns={}))},0))}function is(s,a){a===void 0&&(a=!1);var u=new Set;if(s.all)for(var h=0,f=Object.values(Fn);h<f.length;h++)So(y=f[h],s,u,a);else for(var p in s){var y,x=/^idb\:\/\/(.*)\/(.*)\//.exec(p);x&&(p=x[1],x=x[2],(y=Fn["idb://".concat(p,"/").concat(x)])&&So(y,s,u,a))}u.forEach(function(_){return _()})}function So(s,a,u,h){for(var f=[],p=0,y=Object.entries(s.queries.query);p<y.length;p++){for(var x=y[p],_=x[0],A=[],D=0,k=x[1];D<k.length;D++){var j=k[D];ts(a,j.obsSet)?j.subscribers.forEach(function(P){return u.add(P)}):h&&A.push(j)}h&&f.push([_,A])}if(h)for(var T=0,I=f;T<I.length;T++){var O=I[T],_=O[0],A=O[1];s.queries.query[_]=A}}function dc(s){var a=s._state,u=s._deps.indexedDB;if(a.isBeingOpened||s.idbdb)return a.dbReadyPromise.then(function(){return a.dbOpenError?at(a.dbOpenError):s});a.isBeingOpened=!0,a.dbOpenError=null,a.openComplete=!1;var h=a.openCanceller,f=Math.round(10*s.verno),p=!1;function y(){if(a.openCanceller!==h)throw new oe.DatabaseClosed("db.open() was cancelled")}function x(){return new ne(function(j,T){if(y(),!u)throw new oe.MissingAPI;var I=s.name,O=a.autoSchema||!f?u.open(I):u.open(I,f);if(!O)throw new oe.MissingAPI;O.onerror=on(T),O.onblocked=qe(s._fireOnBlocked),O.onupgradeneeded=qe(function(P){var L;D=O.transaction,a.autoSchema&&!s._options.allowEmptyDB?(O.onerror=fr,D.abort(),O.result.close(),(L=u.deleteDatabase(I)).onsuccess=L.onerror=qe(function(){T(new oe.NoSuchDatabase("Database ".concat(I," doesnt exist")))})):(D.onerror=on(T),P=P.oldVersion>Math.pow(2,62)?0:P.oldVersion,k=P<1,s.idbdb=O.result,p&&cc(s,D),lc(s,P/10,D,T))},T),O.onsuccess=qe(function(){D=null;var P,L,M,B,H,Y=s.idbdb=O.result,se=de(Y.objectStoreNames);if(0<se.length)try{var X=Y.transaction((B=se).length===1?B[0]:B,"readonly");if(a.autoSchema)L=Y,M=X,(P=s).verno=L.version/10,M=P._dbSchema=Xr(0,L,M),P._storeNames=de(L.objectStoreNames,0),Gr(P,[P._allTables],l(M),M);else if(Qr(s,s._dbSchema,X),((H=Yi(Xr(0,(H=s).idbdb,X),H._dbSchema)).add.length||H.change.some(function(Z){return Z.add.length||Z.change.length}))&&!p)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),Y.close(),f=Y.version+1,p=!0,j(x());Vr(s,X)}catch{}Yn.push(s),Y.onversionchange=qe(function(Z){a.vcFired=!0,s.on("versionchange").fire(Z)}),Y.onclose=qe(function(Z){s.on("close").fire(Z)}),k&&(H=s._deps,X=I,Y=H.indexedDB,H=H.IDBKeyRange,Ji(Y)||X===Ur||Qi(Y,H).put({name:X}).catch(me)),j()},T)}).catch(function(j){switch(j?.name){case"UnknownError":if(0<a.PR1398_maxLoop)return a.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),x();break;case"VersionError":if(0<f)return f=0,x()}return ne.reject(j)})}var _,A=a.dbReadyResolve,D=null,k=!1;return ne.race([h,(typeof navigator>"u"?ne.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(j){function T(){return indexedDB.databases().finally(j)}_=setInterval(T,100),T()}).finally(function(){return clearInterval(_)}):Promise.resolve()).then(x)]).then(function(){return y(),a.onReadyBeingFired=[],ne.resolve(Zi(function(){return s.on.ready.fire(s.vip)})).then(function j(){if(0<a.onReadyBeingFired.length){var T=a.onReadyBeingFired.reduce(Pt,me);return a.onReadyBeingFired=[],ne.resolve(Zi(function(){return T(s.vip)})).then(j)}})}).finally(function(){a.openCanceller===h&&(a.onReadyBeingFired=null,a.isBeingOpened=!1)}).catch(function(j){a.dbOpenError=j;try{D&&D.abort()}catch{}return h===a.openCanceller&&s._close(),at(j)}).finally(function(){a.openComplete=!0,A()}).then(function(){var j;return k&&(j={},s.tables.forEach(function(T){T.schema.indexes.forEach(function(I){I.name&&(j["idb://".concat(s.name,"/").concat(T.name,"/").concat(I.name)]=new wt(-1/0,[[[]]]))}),j["idb://".concat(s.name,"/").concat(T.name,"/")]=j["idb://".concat(s.name,"/").concat(T.name,"/:dels")]=new wt(-1/0,[[[]]])}),Sn(pr).fire(j),is(j,!0)),s})}function ss(s){function a(p){return s.next(p)}var u=f(a),h=f(function(p){return s.throw(p)});function f(p){return function(_){var x=p(_),_=x.value;return x.done?_:_&&typeof _.then=="function"?_.then(u,h):c(_)?Promise.all(_).then(u,h):u(_)}}return f(a)()}function ni(s,a,u){for(var h=c(s)?s.slice():[s],f=0;f<u;++f)h.push(a);return h}var hc={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(s){return i(i({},s),{table:function(a){var u=s.table(a),h=u.schema,f={},p=[];function y(k,j,T){var I=gr(k),O=f[I]=f[I]||[],P=k==null?0:typeof k=="string"?1:k.length,L=0<j,L=i(i({},T),{name:L?"".concat(I,"(virtual-from:").concat(T.name,")"):T.name,lowLevelIndex:T,isVirtual:L,keyTail:j,keyLength:P,extractKey:Vi(k),unique:!L&&T.unique});return O.push(L),L.isPrimaryKey||p.push(L),1<P&&y(P===2?k[0]:k.slice(0,P-1),j+1,T),O.sort(function(M,B){return M.keyTail-B.keyTail}),L}a=y(h.primaryKey.keyPath,0,h.primaryKey),f[":id"]=[a];for(var x=0,_=h.indexes;x<_.length;x++){var A=_[x];y(A.keyPath,0,A)}function D(k){var j,T=k.query.index;return T.isVirtual?i(i({},k),{query:{index:T.lowLevelIndex,range:(j=k.query.range,T=T.keyTail,{type:j.type===1?2:j.type,lower:ni(j.lower,j.lowerOpen?s.MAX_KEY:s.MIN_KEY,T),lowerOpen:!0,upper:ni(j.upper,j.upperOpen?s.MIN_KEY:s.MAX_KEY,T),upperOpen:!0})}}):k}return i(i({},u),{schema:i(i({},h),{primaryKey:a,indexes:p,getIndexByKeyPath:function(k){return(k=f[gr(k)])&&k[0]}}),count:function(k){return u.count(D(k))},query:function(k){return u.query(D(k))},openCursor:function(k){var j=k.query.index,T=j.keyTail,I=j.isVirtual,O=j.keyLength;return I?u.openCursor(D(k)).then(function(L){return L&&P(L)}):u.openCursor(k);function P(L){return Object.create(L,{continue:{value:function(M){M!=null?L.continue(ni(M,k.reverse?s.MAX_KEY:s.MIN_KEY,T)):k.unique?L.continue(L.key.slice(0,O).concat(k.reverse?s.MIN_KEY:s.MAX_KEY,T)):L.continue()}},continuePrimaryKey:{value:function(M,B){L.continuePrimaryKey(ni(M,s.MAX_KEY,T),B)}},primaryKey:{get:function(){return L.primaryKey}},key:{get:function(){var M=L.key;return O===1?M[0]:M.slice(0,O)}},value:{get:function(){return L.value}}})}}})}})}};function os(s,a,u,h){return u=u||{},h=h||"",l(s).forEach(function(f){var p,y,x;w(a,f)?(p=s[f],y=a[f],typeof p=="object"&&typeof y=="object"&&p&&y?(x=C(p))!==C(y)?u[h+f]=a[f]:x==="Object"?os(p,y,u,h+f+"."):p!==y&&(u[h+f]=a[f]):p!==y&&(u[h+f]=a[f])):u[h+f]=void 0}),l(a).forEach(function(f){w(s,f)||(u[h+f]=a[f])}),u}function as(s,a){return a.type==="delete"?a.keys:a.keys||a.values.map(s.extractKey)}var fc={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(s){return i(i({},s),{table:function(a){var u=s.table(a),h=u.schema.primaryKey;return i(i({},u),{mutate:function(f){var p=te.trans,y=p.table(a).hook,x=y.deleting,_=y.creating,A=y.updating;switch(f.type){case"add":if(_.fire===me)break;return p._promise("readwrite",function(){return D(f)},!0);case"put":if(_.fire===me&&A.fire===me)break;return p._promise("readwrite",function(){return D(f)},!0);case"delete":if(x.fire===me)break;return p._promise("readwrite",function(){return D(f)},!0);case"deleteRange":if(x.fire===me)break;return p._promise("readwrite",function(){return(function k(j,T,I){return u.query({trans:j,values:!1,query:{index:h,range:T},limit:I}).then(function(O){var P=O.result;return D({type:"delete",keys:P,trans:j}).then(function(L){return 0<L.numFailures?Promise.reject(L.failures[0]):P.length<I?{failures:[],numFailures:0,lastResult:void 0}:k(j,i(i({},T),{lower:P[P.length-1],lowerOpen:!0}),I)})})})(f.trans,f.range,1e4)},!0)}return u.mutate(f);function D(k){var j,T,I,O=te.trans,P=k.keys||as(h,k);if(!P)throw new Error("Keys missing");return(k=k.type==="add"||k.type==="put"?i(i({},k),{keys:P}):i({},k)).type!=="delete"&&(k.values=n([],k.values)),k.keys&&(k.keys=n([],k.keys)),j=u,I=P,((T=k).type==="add"?Promise.resolve([]):j.getMany({trans:T.trans,keys:I,cache:"immutable"})).then(function(L){var M=P.map(function(B,H){var Y,se,X,Z=L[H],ae={onerror:null,onsuccess:null};return k.type==="delete"?x.fire.call(ae,B,Z,O):k.type==="add"||Z===void 0?(Y=_.fire.call(ae,B,k.values[H],O),B==null&&Y!=null&&(k.keys[H]=B=Y,h.outbound||ue(k.values[H],h.keyPath,B))):(Y=os(Z,k.values[H]),(se=A.fire.call(ae,Y,B,Z,O))&&(X=k.values[H],Object.keys(se).forEach(function(re){w(X,re)?X[re]=se[re]:ue(X,re,se[re])}))),ae});return u.mutate(k).then(function(B){for(var H=B.failures,Y=B.results,se=B.numFailures,B=B.lastResult,X=0;X<P.length;++X){var Z=(Y||P)[X],ae=M[X];Z==null?ae.onerror&&ae.onerror(H[X]):ae.onsuccess&&ae.onsuccess(k.type==="put"&&L[X]?k.values[X]:Z)}return{failures:H,results:Y,numFailures:se,lastResult:B}}).catch(function(B){return M.forEach(function(H){return H.onerror&&H.onerror(B)}),Promise.reject(B)})})}}})}})}};function _o(s,a,u){try{if(!a||a.keys.length<s.length)return null;for(var h=[],f=0,p=0;f<a.keys.length&&p<s.length;++f)Pe(a.keys[f],s[p])===0&&(h.push(u?E(a.values[f]):a.values[f]),++p);return h.length===s.length?h:null}catch{return null}}var pc={stack:"dbcore",level:-1,create:function(s){return{table:function(a){var u=s.table(a);return i(i({},u),{getMany:function(h){if(!h.cache)return u.getMany(h);var f=_o(h.keys,h.trans._cache,h.cache==="clone");return f?ne.resolve(f):u.getMany(h).then(function(p){return h.trans._cache={keys:h.keys,values:h.cache==="clone"?E(p):p},p})},mutate:function(h){return h.type!=="add"&&(h.trans._cache=null),u.mutate(h)}})}}}};function To(s,a){return s.trans.mode==="readonly"&&!!s.subscr&&!s.trans.explicit&&s.trans.db._options.cache!=="disabled"&&!a.schema.primaryKey.outbound}function Ao(s,a){switch(s){case"query":return a.values&&!a.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var mc={stack:"dbcore",level:0,name:"Observability",create:function(s){var a=s.schema.name,u=new wt(s.MIN_KEY,s.MAX_KEY);return i(i({},s),{transaction:function(h,f,p){if(te.subscr&&f!=="readonly")throw new oe.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(te.querier));return s.transaction(h,f,p)},table:function(h){var f=s.table(h),p=f.schema,y=p.primaryKey,k=p.indexes,x=y.extractKey,_=y.outbound,A=y.autoIncrement&&k.filter(function(T){return T.compound&&T.keyPath.includes(y.keyPath)}),D=i(i({},f),{mutate:function(T){function I(re){return re="idb://".concat(a,"/").concat(h,"/").concat(re),B[re]||(B[re]=new wt)}var O,P,L,M=T.trans,B=T.mutatedParts||(T.mutatedParts={}),H=I(""),Y=I(":dels"),se=T.type,ae=T.type==="deleteRange"?[T.range]:T.type==="delete"?[T.keys]:T.values.length<50?[as(y,T).filter(function(re){return re}),T.values]:[],X=ae[0],Z=ae[1],ae=T.trans._cache;return c(X)?(H.addKeys(X),(ae=se==="delete"||X.length===Z.length?_o(X,ae):null)||Y.addKeys(X),(ae||Z)&&(O=I,P=ae,L=Z,p.indexes.forEach(function(re){var ce=O(re.name||"");function ke(Se){return Se!=null?re.extractKey(Se):null}function Ee(Se){return re.multiEntry&&c(Se)?Se.forEach(function(Rt){return ce.addKey(Rt)}):ce.addKey(Se)}(P||L).forEach(function(Se,vt){var xe=P&&ke(P[vt]),vt=L&&ke(L[vt]);Pe(xe,vt)!==0&&(xe!=null&&Ee(xe),vt!=null&&Ee(vt))})}))):X?(Z={from:(Z=X.lower)!==null&&Z!==void 0?Z:s.MIN_KEY,to:(Z=X.upper)!==null&&Z!==void 0?Z:s.MAX_KEY},Y.add(Z),H.add(Z)):(H.add(u),Y.add(u),p.indexes.forEach(function(re){return I(re.name).add(u)})),f.mutate(T).then(function(re){return!X||T.type!=="add"&&T.type!=="put"||(H.addKeys(re.results),A&&A.forEach(function(ce){for(var ke=T.values.map(function(xe){return ce.extractKey(xe)}),Ee=ce.keyPath.findIndex(function(xe){return xe===y.keyPath}),Se=0,Rt=re.results.length;Se<Rt;++Se)ke[Se][Ee]=re.results[Se];I(ce.name).addKeys(ke)})),M.mutatedParts=ei(M.mutatedParts||{},B),re})}}),k=function(I){var O=I.query,I=O.index,O=O.range;return[I,new wt((I=O.lower)!==null&&I!==void 0?I:s.MIN_KEY,(O=O.upper)!==null&&O!==void 0?O:s.MAX_KEY)]},j={get:function(T){return[y,new wt(T.key)]},getMany:function(T){return[y,new wt().addKeys(T.keys)]},count:k,query:k,openCursor:k};return l(j).forEach(function(T){D[T]=function(I){var O=te.subscr,P=!!O,L=To(te,f)&&Ao(T,I)?I.obsSet={}:O;if(P){var M=function(Z){return Z="idb://".concat(a,"/").concat(h,"/").concat(Z),L[Z]||(L[Z]=new wt)},B=M(""),H=M(":dels"),O=j[T](I),P=O[0],O=O[1];if((T==="query"&&P.isPrimaryKey&&!I.values?H:M(P.name||"")).add(O),!P.isPrimaryKey){if(T!=="count"){var Y=T==="query"&&_&&I.values&&f.query(i(i({},I),{values:!1}));return f[T].apply(this,arguments).then(function(Z){if(T==="query"){if(_&&I.values)return Y.then(function(ke){return ke=ke.result,B.addKeys(ke),Z});var ae=I.values?Z.result.map(x):Z.result;(I.values?B:H).addKeys(ae)}else if(T==="openCursor"){var re=Z,ce=I.values;return re&&Object.create(re,{key:{get:function(){return H.addKey(re.primaryKey),re.key}},primaryKey:{get:function(){var ke=re.primaryKey;return H.addKey(ke),ke}},value:{get:function(){return ce&&B.addKey(re.primaryKey),re.value}}})}return Z})}H.add(u)}}return f[T].apply(this,arguments)}}),D}})}};function Po(s,a,u){if(u.numFailures===0)return a;if(a.type==="deleteRange")return null;var h=a.keys?a.keys.length:"values"in a&&a.values?a.values.length:1;return u.numFailures===h?null:(a=i({},a),c(a.keys)&&(a.keys=a.keys.filter(function(f,p){return!(p in u.failures)})),"values"in a&&c(a.values)&&(a.values=a.values.filter(function(f,p){return!(p in u.failures)})),a)}function ls(s,a){return u=s,((h=a).lower===void 0||(h.lowerOpen?0<Pe(u,h.lower):0<=Pe(u,h.lower)))&&(s=s,(a=a).upper===void 0||(a.upperOpen?Pe(s,a.upper)<0:Pe(s,a.upper)<=0));var u,h}function Io(s,a,j,h,f,p){if(!j||j.length===0)return s;var y=a.query.index,x=y.multiEntry,_=a.query.range,A=h.schema.primaryKey.extractKey,D=y.extractKey,k=(y.lowLevelIndex||y).extractKey,j=j.reduce(function(T,I){var O=T,P=[];if(I.type==="add"||I.type==="put")for(var L=new wt,M=I.values.length-1;0<=M;--M){var B,H=I.values[M],Y=A(H);L.hasKey(Y)||(B=D(H),(x&&c(B)?B.some(function(re){return ls(re,_)}):ls(B,_))&&(L.addKey(Y),P.push(H)))}switch(I.type){case"add":var se=new wt().addKeys(a.values?T.map(function(ce){return A(ce)}):T),O=T.concat(a.values?P.filter(function(ce){return ce=A(ce),!se.hasKey(ce)&&(se.addKey(ce),!0)}):P.map(function(ce){return A(ce)}).filter(function(ce){return!se.hasKey(ce)&&(se.addKey(ce),!0)}));break;case"put":var X=new wt().addKeys(I.values.map(function(ce){return A(ce)}));O=T.filter(function(ce){return!X.hasKey(a.values?A(ce):ce)}).concat(a.values?P:P.map(function(ce){return A(ce)}));break;case"delete":var Z=new wt().addKeys(I.keys);O=T.filter(function(ce){return!Z.hasKey(a.values?A(ce):ce)});break;case"deleteRange":var ae=I.range;O=T.filter(function(ce){return!ls(A(ce),ae)})}return O},s);return j===s?s:(j.sort(function(T,I){return Pe(k(T),k(I))||Pe(A(T),A(I))}),a.limit&&a.limit<1/0&&(j.length>a.limit?j.length=a.limit:s.length===a.limit&&j.length<a.limit&&(f.dirty=!0)),p?Object.freeze(j):j)}function Do(s,a){return Pe(s.lower,a.lower)===0&&Pe(s.upper,a.upper)===0&&!!s.lowerOpen==!!a.lowerOpen&&!!s.upperOpen==!!a.upperOpen}function gc(s,a){return(function(u,h,f,p){if(u===void 0)return h!==void 0?-1:0;if(h===void 0)return 1;if((h=Pe(u,h))===0){if(f&&p)return 0;if(f)return 1;if(p)return-1}return h})(s.lower,a.lower,s.lowerOpen,a.lowerOpen)<=0&&0<=(function(u,h,f,p){if(u===void 0)return h!==void 0?1:0;if(h===void 0)return-1;if((h=Pe(u,h))===0){if(f&&p)return 0;if(f)return-1;if(p)return 1}return h})(s.upper,a.upper,s.upperOpen,a.upperOpen)}function bc(s,a,u,h){s.subscribers.add(u),h.addEventListener("abort",function(){var f,p;s.subscribers.delete(u),s.subscribers.size===0&&(f=s,p=a,setTimeout(function(){f.subscribers.size===0&&K(p,f)},3e3))})}var yc={stack:"dbcore",level:0,name:"Cache",create:function(s){var a=s.schema.name;return i(i({},s),{transaction:function(u,h,f){var p,y,x=s.transaction(u,h,f);return h==="readwrite"&&(y=(p=new AbortController).signal,f=function(_){return function(){if(p.abort(),h==="readwrite"){for(var A=new Set,D=0,k=u;D<k.length;D++){var j=k[D],T=Fn["idb://".concat(a,"/").concat(j)];if(T){var I=s.table(j),O=T.optimisticOps.filter(function(ce){return ce.trans===x});if(x._explicit&&_&&x.mutatedParts)for(var P=0,L=Object.values(T.queries.query);P<L.length;P++)for(var M=0,B=(se=L[P]).slice();M<B.length;M++)ts((X=B[M]).obsSet,x.mutatedParts)&&(K(se,X),X.subscribers.forEach(function(ce){return A.add(ce)}));else if(0<O.length){T.optimisticOps=T.optimisticOps.filter(function(ce){return ce.trans!==x});for(var H=0,Y=Object.values(T.queries.query);H<Y.length;H++)for(var se,X,Z,ae=0,re=(se=Y[H]).slice();ae<re.length;ae++)(X=re[ae]).res!=null&&x.mutatedParts&&(_&&!X.dirty?(Z=Object.isFrozen(X.res),Z=Io(X.res,X.req,O,I,X,Z),X.dirty?(K(se,X),X.subscribers.forEach(function(ce){return A.add(ce)})):Z!==X.res&&(X.res=Z,X.promise=ne.resolve({result:Z}))):(X.dirty&&K(se,X),X.subscribers.forEach(function(ce){return A.add(ce)})))}}}A.forEach(function(ce){return ce()})}}},x.addEventListener("abort",f(!1),{signal:y}),x.addEventListener("error",f(!1),{signal:y}),x.addEventListener("complete",f(!0),{signal:y})),x},table:function(u){var h=s.table(u),f=h.schema.primaryKey;return i(i({},h),{mutate:function(p){var y=te.trans;if(f.outbound||y.db._options.cache==="disabled"||y.explicit||y.idbtrans.mode!=="readwrite")return h.mutate(p);var x=Fn["idb://".concat(a,"/").concat(u)];return x?(y=h.mutate(p),p.type!=="add"&&p.type!=="put"||!(50<=p.values.length||as(f,p).some(function(_){return _==null}))?(x.optimisticOps.push(p),p.mutatedParts&&ti(p.mutatedParts),y.then(function(_){0<_.numFailures&&(K(x.optimisticOps,p),(_=Po(0,p,_))&&x.optimisticOps.push(_),p.mutatedParts&&ti(p.mutatedParts))}),y.catch(function(){K(x.optimisticOps,p),p.mutatedParts&&ti(p.mutatedParts)})):y.then(function(_){var A=Po(0,i(i({},p),{values:p.values.map(function(D,k){var j;return _.failures[k]?D:(D=(j=f.keyPath)!==null&&j!==void 0&&j.includes(".")?E(D):i({},D),ue(D,f.keyPath,_.results[k]),D)})}),_);x.optimisticOps.push(A),queueMicrotask(function(){return p.mutatedParts&&ti(p.mutatedParts)})}),y):h.mutate(p)},query:function(p){if(!To(te,h)||!Ao("query",p))return h.query(p);var y=((A=te.trans)===null||A===void 0?void 0:A.db._options.cache)==="immutable",k=te,x=k.requery,_=k.signal,A=(function(I,O,P,L){var M=Fn["idb://".concat(I,"/").concat(O)];if(!M)return[];if(!(O=M.queries[P]))return[null,!1,M,null];var B=O[(L.query?L.query.index.name:null)||""];if(!B)return[null,!1,M,null];switch(P){case"query":var H=B.find(function(Y){return Y.req.limit===L.limit&&Y.req.values===L.values&&Do(Y.req.query.range,L.query.range)});return H?[H,!0,M,B]:[B.find(function(Y){return("limit"in Y.req?Y.req.limit:1/0)>=L.limit&&(!L.values||Y.req.values)&&gc(Y.req.query.range,L.query.range)}),!1,M,B];case"count":return H=B.find(function(Y){return Do(Y.req.query.range,L.query.range)}),[H,!!H,M,B]}})(a,u,"query",p),D=A[0],k=A[1],j=A[2],T=A[3];return D&&k?D.obsSet=p.obsSet:(k=h.query(p).then(function(I){var O=I.result;if(D&&(D.res=O),y){for(var P=0,L=O.length;P<L;++P)Object.freeze(O[P]);Object.freeze(O)}else I.result=E(O);return I}).catch(function(I){return T&&D&&K(T,D),Promise.reject(I)}),D={obsSet:p.obsSet,promise:k,subscribers:new Set,type:"query",req:p,dirty:!1},T?T.push(D):(T=[D],(j=j||(Fn["idb://".concat(a,"/").concat(u)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[p.query.index.name||""]=T)),bc(D,T,x,_),D.promise.then(function(I){return{result:Io(I.result,p,j?.optimisticOps,h,D,y)}})}})}})}};function ri(s,a){return new Proxy(s,{get:function(u,h,f){return h==="db"?a:Reflect.get(u,h,f)}})}var pn=(lt.prototype.version=function(s){if(isNaN(s)||s<.1)throw new oe.Type("Given version is not a positive number");if(s=Math.round(10*s)/10,this.idbdb||this._state.isBeingOpened)throw new oe.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,s);var a=this._versions,u=a.filter(function(h){return h._cfg.version===s})[0];return u||(u=new this.Version(s),a.push(u),a.sort(ac),u.stores({}),this._state.autoSchema=!1,u)},lt.prototype._whenReady=function(s){var a=this;return this.idbdb&&(this._state.openComplete||te.letThrough||this._vip)?s():new ne(function(u,h){if(a._state.openComplete)return h(new oe.DatabaseClosed(a._state.dbOpenError));if(!a._state.isBeingOpened){if(!a._state.autoOpen)return void h(new oe.DatabaseClosed);a.open().catch(me)}a._state.dbReadyPromise.then(u,h)}).then(s)},lt.prototype.use=function(s){var a=s.stack,u=s.create,h=s.level,f=s.name;return f&&this.unuse({stack:a,name:f}),s=this._middlewares[a]||(this._middlewares[a]=[]),s.push({stack:a,create:u,level:h??10,name:f}),s.sort(function(p,y){return p.level-y.level}),this},lt.prototype.unuse=function(s){var a=s.stack,u=s.name,h=s.create;return a&&this._middlewares[a]&&(this._middlewares[a]=this._middlewares[a].filter(function(f){return h?f.create!==h:!!u&&f.name!==u})),this},lt.prototype.open=function(){var s=this;return Rn(et,function(){return dc(s)})},lt.prototype._close=function(){var s=this._state,a=Yn.indexOf(this);if(0<=a&&Yn.splice(a,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}s.isBeingOpened||(s.dbReadyPromise=new ne(function(u){s.dbReadyResolve=u}),s.openCanceller=new ne(function(u,h){s.cancelOpen=h}))},lt.prototype.close=function(u){var a=(u===void 0?{disableAutoOpen:!0}:u).disableAutoOpen,u=this._state;a?(u.isBeingOpened&&u.cancelOpen(new oe.DatabaseClosed),this._close(),u.autoOpen=!1,u.dbOpenError=new oe.DatabaseClosed):(this._close(),u.autoOpen=this._options.autoOpen||u.isBeingOpened,u.openComplete=!1,u.dbOpenError=null)},lt.prototype.delete=function(s){var a=this;s===void 0&&(s={disableAutoOpen:!0});var u=0<arguments.length&&typeof arguments[0]!="object",h=this._state;return new ne(function(f,p){function y(){a.close(s);var x=a._deps.indexedDB.deleteDatabase(a.name);x.onsuccess=qe(function(){var _,A,D;_=a._deps,A=a.name,D=_.indexedDB,_=_.IDBKeyRange,Ji(D)||A===Ur||Qi(D,_).delete(A).catch(me),f()}),x.onerror=on(p),x.onblocked=a._fireOnBlocked}if(u)throw new oe.InvalidArgument("Invalid closeOptions argument to db.delete()");h.isBeingOpened?h.dbReadyPromise.then(y):y()})},lt.prototype.backendDB=function(){return this.idbdb},lt.prototype.isOpen=function(){return this.idbdb!==null},lt.prototype.hasBeenClosed=function(){var s=this._state.dbOpenError;return s&&s.name==="DatabaseClosed"},lt.prototype.hasFailed=function(){return this._state.dbOpenError!==null},lt.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(lt.prototype,"tables",{get:function(){var s=this;return l(this._allTables).map(function(a){return s._allTables[a]})},enumerable:!1,configurable:!0}),lt.prototype.transaction=function(){var s=function(a,u,h){var f=arguments.length;if(f<2)throw new oe.InvalidArgument("Too few arguments");for(var p=new Array(f-1);--f;)p[f-1]=arguments[f];return h=p.pop(),[a,$e(p),h]}.apply(this,arguments);return this._transaction.apply(this,s)},lt.prototype._transaction=function(s,a,u){var h=this,f=te.trans;f&&f.db===this&&s.indexOf("!")===-1||(f=null);var p,y,x=s.indexOf("?")!==-1;s=s.replace("!","").replace("?","");try{if(y=a.map(function(A){if(A=A instanceof h.Table?A.name:A,typeof A!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return A}),s=="r"||s===Mi)p=Mi;else{if(s!="rw"&&s!=Bi)throw new oe.InvalidArgument("Invalid transaction mode: "+s);p=Bi}if(f){if(f.mode===Mi&&p===Bi){if(!x)throw new oe.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");f=null}f&&y.forEach(function(A){if(f&&f.storeNames.indexOf(A)===-1){if(!x)throw new oe.SubTransaction("Table "+A+" not included in parent transaction.");f=null}}),x&&f&&!f.active&&(f=null)}}catch(A){return f?f._promise(null,function(D,k){k(A)}):at(A)}var _=function A(D,k,j,T,I){return ne.resolve().then(function(){var O=te.transless||te,P=D._createTransaction(k,j,D._dbSchema,T);if(P.explicit=!0,O={trans:P,transless:O},T)P.idbtrans=T.idbtrans;else try{P.create(),P.idbtrans._explicit=!0,D._state.PR1398_maxLoop=3}catch(B){return B.name===Qe.InvalidState&&D.isOpen()&&0<--D._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),D.close({disableAutoOpen:!1}),D.open().then(function(){return A(D,k,j,null,I)})):at(B)}var L,M=ct(I);return M&&Gn(),O=ne.follow(function(){var B;(L=I.call(P,P))&&(M?(B=kn.bind(null,null),L.then(B,B)):typeof L.next=="function"&&typeof L.throw=="function"&&(L=ss(L)))},O),(L&&typeof L.then=="function"?ne.resolve(L).then(function(B){return P.active?B:at(new oe.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):O.then(function(){return L})).then(function(B){return T&&P._resolve(),P._completion.then(function(){return B})}).catch(function(B){return P._reject(B),at(B)})})}.bind(null,this,p,y,f,u);return f?f._promise(p,_,"lock"):te.trans?Rn(te.transless,function(){return h._whenReady(_)}):this._whenReady(_)},lt.prototype.table=function(s){if(!w(this._allTables,s))throw new oe.InvalidTable("Table ".concat(s," does not exist"));return this._allTables[s]},lt);function lt(s,a){var u=this;this._middlewares={},this.verno=0;var h=lt.dependencies;this._options=a=i({addons:lt.addons,autoOpen:!0,indexedDB:h.indexedDB,IDBKeyRange:h.IDBKeyRange,cache:"cloned"},a),this._deps={indexedDB:a.indexedDB,IDBKeyRange:a.IDBKeyRange},h=a.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var f,p,y,x,_,A={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:me,dbReadyPromise:null,cancelOpen:me,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:a.autoOpen};A.dbReadyPromise=new ne(function(k){A.dbReadyResolve=k}),A.openCanceller=new ne(function(k,j){A.cancelOpen=j}),this._state=A,this.name=s,this.on=ur(this,"populate","blocked","versionchange","close",{ready:[Pt,me]}),this.on.ready.subscribe=ee(this.on.ready.subscribe,function(k){return function(j,T){lt.vip(function(){var I,O=u._state;O.openComplete?(O.dbOpenError||ne.resolve().then(j),T&&k(j)):O.onReadyBeingFired?(O.onReadyBeingFired.push(j),T&&k(j)):(k(j),I=u,T||k(function P(){I.on.ready.unsubscribe(j),I.on.ready.unsubscribe(P)}))})}}),this.Collection=(f=this,dr(ec.prototype,function(L,P){this.db=f;var T=lo,I=null;if(P)try{T=P()}catch(M){I=M}var O=L._ctx,P=O.table,L=P.hook.reading.fire;this._ctx={table:P,index:O.index,isPrimKey:!O.index||P.schema.primKey.keyPath&&O.index===P.schema.primKey.name,range:T,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:I,or:O.or,valueMapper:L!==Ce?L:null}})),this.Table=(p=this,dr(fo.prototype,function(k,j,T){this.db=p,this._tx=T,this.name=k,this.schema=j,this.hook=p._allTables[k]?p._allTables[k].hook:ur(null,{creating:[Ze,me],reading:[At,Ce],updating:[Yt,me],deleting:[vn,me]})})),this.Transaction=(y=this,dr(rc.prototype,function(k,j,T,I,O){var P=this;this.db=y,this.mode=k,this.storeNames=j,this.schema=T,this.chromeTransactionDurability=I,this.idbtrans=null,this.on=ur(this,"complete","error","abort"),this.parent=O||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new ne(function(L,M){P._resolve=L,P._reject=M}),this._completion.then(function(){P.active=!1,P.on.complete.fire()},function(L){var M=P.active;return P.active=!1,P.on.error.fire(L),P.parent?P.parent._reject(L):M&&P.idbtrans&&P.idbtrans.abort(),at(L)})})),this.Version=(x=this,dr(uc.prototype,function(k){this.db=x,this._cfg={version:k,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(_=this,dr(yo.prototype,function(k,j,T){if(this.db=_,this._ctx={table:k,index:j===":id"?null:j,or:T},this._cmp=this._ascending=Pe,this._descending=function(I,O){return Pe(O,I)},this._max=function(I,O){return 0<Pe(I,O)?I:O},this._min=function(I,O){return Pe(I,O)<0?I:O},this._IDBKeyRange=_._deps.IDBKeyRange,!this._IDBKeyRange)throw new oe.MissingAPI})),this.on("versionchange",function(k){0<k.newVersion?console.warn("Another connection wants to upgrade database '".concat(u.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(u.name,"'. Closing db now to resume the delete request.")),u.close({disableAutoOpen:!1})}),this.on("blocked",function(k){!k.newVersion||k.newVersion<k.oldVersion?console.warn("Dexie.delete('".concat(u.name,"') was blocked")):console.warn("Upgrade '".concat(u.name,"' blocked by other connection holding version ").concat(k.oldVersion/10))}),this._maxKey=mr(a.IDBKeyRange),this._createTransaction=function(k,j,T,I){return new u.Transaction(k,j,T,u._options.chromeTransactionDurability,I)},this._fireOnBlocked=function(k){u.on("blocked").fire(k),Yn.filter(function(j){return j.name===u.name&&j!==u&&!j._state.vcFired}).map(function(j){return j.on("versionchange").fire(k)})},this.use(pc),this.use(yc),this.use(mc),this.use(hc),this.use(fc);var D=new Proxy(this,{get:function(k,j,T){if(j==="_vip")return!0;if(j==="table")return function(O){return ri(u.table(O),D)};var I=Reflect.get(k,j,T);return I instanceof fo?ri(I,D):j==="tables"?I.map(function(O){return ri(O,D)}):j==="_createTransaction"?function(){return ri(I.apply(this,arguments),D)}:I}});this.vip=D,h.forEach(function(k){return k(u)})}var ii,Mt=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",wc=(cs.prototype.subscribe=function(s,a,u){return this._subscribe(s&&typeof s!="function"?s:{next:s,error:a,complete:u})},cs.prototype[Mt]=function(){return this},cs);function cs(s){this._subscribe=s}try{ii={indexedDB:o.indexedDB||o.mozIndexedDB||o.webkitIndexedDB||o.msIndexedDB,IDBKeyRange:o.IDBKeyRange||o.webkitIDBKeyRange}}catch{ii={indexedDB:null,IDBKeyRange:null}}function Ro(s){var a,u=!1,h=new wc(function(f){var p=ct(s),y,x=!1,_={},A={},D={get closed(){return x},unsubscribe:function(){x||(x=!0,y&&y.abort(),k&&Sn.storagemutated.unsubscribe(T))}};f.start&&f.start(D);var k=!1,j=function(){return Li(I)},T=function(O){ei(_,O),ts(A,_)&&j()},I=function(){var O,P,L;!x&&ii.indexedDB&&(_={},O={},y&&y.abort(),y=new AbortController,L=(function(M){var B=Le();try{p&&Gn();var H=$n(s,M);return H=p?H.finally(kn):H}finally{B&&Ve()}})(P={subscr:O,signal:y.signal,requery:j,querier:s,trans:null}),Promise.resolve(L).then(function(M){u=!0,a=M,x||P.signal.aborted||(_={},(function(B){for(var H in B)if(w(B,H))return;return 1})(A=O)||k||(Sn(pr,T),k=!0),Li(function(){return!x&&f.next&&f.next(M)}))},function(M){u=!1,["DatabaseClosedError","AbortError"].includes(M?.name)||x||Li(function(){x||f.error&&f.error(M)})}))};return setTimeout(j,0),D});return h.hasValue=function(){return u},h.getValue=function(){return a},h}var zn=pn;function us(s){var a=_n;try{_n=!0,Sn.storagemutated.fire(s),is(s,!0)}finally{_n=a}}S(zn,i(i({},Be),{delete:function(s){return new zn(s,{addons:[]}).delete()},exists:function(s){return new zn(s,{addons:[]}).open().then(function(a){return a.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(s){try{return a=zn.dependencies,u=a.indexedDB,a=a.IDBKeyRange,(Ji(u)?Promise.resolve(u.databases()).then(function(h){return h.map(function(f){return f.name}).filter(function(f){return f!==Ur})}):Qi(u,a).toCollection().primaryKeys()).then(s)}catch{return at(new oe.MissingAPI)}var a,u},defineClass:function(){return function(s){d(this,s)}},ignoreTransaction:function(s){return te.trans?Rn(te.transless,s):s()},vip:Zi,async:function(s){return function(){try{var a=ss(s.apply(this,arguments));return a&&typeof a.then=="function"?a:ne.resolve(a)}catch(u){return at(u)}}},spawn:function(s,a,u){try{var h=ss(s.apply(u,a||[]));return h&&typeof h.then=="function"?h:ne.resolve(h)}catch(f){return at(f)}},currentTransaction:{get:function(){return te.trans||null}},waitFor:function(s,a){return a=ne.resolve(typeof s=="function"?zn.ignoreTransaction(s):s).timeout(a||6e4),te.trans?te.trans.waitFor(a):a},Promise:ne,debug:{get:function(){return ze},set:function(s){We(s)}},derive:z,extend:d,props:S,override:ee,Events:ur,on:Sn,liveQuery:Ro,extendObservabilitySet:ei,getByKeyPath:J,setByKeyPath:ue,delByKeyPath:function(s,a){typeof a=="string"?ue(s,a,void 0):"length"in a&&[].map.call(a,function(u){ue(s,u,void 0)})},shallowClone:we,deepClone:E,getObjectDiff:os,cmp:Pe,asap:V,minKey:-1/0,addons:[],connections:Yn,errnames:Qe,dependencies:ii,cache:Fn,semVer:"4.0.10",version:"4.0.10".split(".").map(function(s){return parseInt(s)}).reduce(function(s,a,u){return s+a/Math.pow(10,2*u)})})),zn.maxKey=mr(zn.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Sn(pr,function(s){_n||(s=new CustomEvent(Hi,{detail:s}),_n=!0,dispatchEvent(s),_n=!1)}),addEventListener(Hi,function(s){s=s.detail,_n||us(s)}));var Jn,_n=!1,Oo=function(){};return typeof BroadcastChannel<"u"&&((Oo=function(){(Jn=new BroadcastChannel(Hi)).onmessage=function(s){return s.data&&us(s.data)}})(),typeof Jn.unref=="function"&&Jn.unref(),Sn(pr,function(s){_n||Jn.postMessage(s)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(s){if(!pn.disableBfCache&&s.persisted){ze&&console.debug("Dexie: handling persisted pagehide"),Jn?.close();for(var a=0,u=Yn;a<u.length;a++)u[a].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(s){!pn.disableBfCache&&s.persisted&&(ze&&console.debug("Dexie: handling persisted pageshow"),Oo(),us({all:new wt(-1/0,[[]])}))})),ne.rejectionMapper=function(s,a){return!s||s instanceof He||s instanceof TypeError||s instanceof SyntaxError||!s.name||!Je[s.name]?s:(a=new Je[s.name](a||s.message,s),"stack"in s&&N(a,"stack",{get:function(){return this.inner.stack}}),a)},We(ze),i(pn,Object.freeze({__proto__:null,Dexie:pn,liveQuery:Ro,Entity:co,cmp:Pe,PropModSymbol:fn,PropModification:hr,replacePrefix:function(s,a){return new hr({replacePrefix:[s,a]})},add:function(s){return new hr({add:s})},remove:function(s){return new hr({remove:s})},default:pn,RangeSet:wt,mergeRanges:yr,rangesOverlap:ko}),{default:pn}),pn})})(hi)),hi.exports}var Zc=Jc();const ks=Xc(Zc),Go=Symbol.for("Dexie"),bi=globalThis[Go]||(globalThis[Go]=ks);if(ks.semVer!==bi.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${ks.semVer} and ${bi.semVer}`);const{liveQuery:Ga,mergeRanges:Nm,rangesOverlap:Um,RangeSet:qm,cmp:Hm,Entity:Wm,PropModSymbol:Km,PropModification:Vm,replacePrefix:Gm,add:Ym,remove:Xm}=bi,eu="easydb";let oi=null;function tu(){if(oi)return oi;const e=new bi(eu);return e.version(1).stores({workspaces:"id",tables:"id, workspaceId, updatedAt",rows:"id, tableId, updatedAt",settings:"key",plugins:"url"}),e.version(2).stores({viewTemplates:"id, workspaceId",viewInstances:"id, workspaceId, tableId"}),e.on("versionchange",t=>{try{e.close()}catch{}t?.newVersion!=null&&typeof location<"u"&&location.reload()}),e.on("blocked",()=>nu()),oi={raw:e,workspaces:e.table("workspaces"),tables:e.table("tables"),rows:e.table("rows"),settings:e.table("settings"),plugins:e.table("plugins"),viewTemplates:e.table("viewTemplates"),viewInstances:e.table("viewInstances")},oi}function nu(){if(typeof document>"u"||document.getElementById("easydb-upgrade-blocked"))return;const e=document.createElement("div");e.id="easydb-upgrade-blocked",e.setAttribute("role","alertdialog"),e.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,0.55);font-family:system-ui,sans-serif;padding:1rem;",e.innerHTML='<div style="max-width:26rem;background:#fff;border-radius:0.6rem;padding:1.5rem 1.75rem;box-shadow:0 20px 50px rgba(0,0,0,0.3);text-align:center;"><h2 style="margin:0 0 0.5rem;font-size:1.1rem;color:#111827;">Update in progress</h2><p style="margin:0 0 1rem;color:#374151;font-size:0.9rem;line-height:1.5;">easyDBAccess needs to upgrade its local database, but an <strong>older version is still open in another tab or window</strong>. Close the other easyDBAccess tabs, then reload.</p><button id="easydb-upgrade-reload" style="font:inherit;background:#3b82f6;color:#fff;border:0;padding:0.5rem 1rem;border-radius:0.3rem;cursor:pointer;">Reload</button></div>',document.body.appendChild(e),e.querySelector("#easydb-upgrade-reload")?.addEventListener("click",()=>location.reload())}function Zn(e){return{async find(t){if(!t||Object.keys(t).length===0)return e.toArray();const r=Object.entries(t);return e.filter(i=>Ya(i,r)).toArray()},async findOne(t){return await e.get(t)??null},async insert(t){return await e.add(t),t},async bulkInsert(t){return t.length===0?[]:(await e.bulkAdd(t),t)},async upsert(t){return await e.put(t),t},async patch(t,r){if(await e.update(t,r)===0)throw new Error(`patch: no doc with id=${t}`);const n=await e.get(t);if(!n)throw new Error(`patch: doc id=${t} vanished after update`);return n},async remove(t){await e.delete(t)},async bulkRemove(t){t.length!==0&&await e.bulkDelete(t)},subscribe(t){const i=Ga(()=>e.toArray()).subscribe({next:n=>t(n)});return()=>i.unsubscribe()}}}function ru(e,t){return{async find(r){const i=e.where("tableId").equals(t);if(!r||Object.keys(r).length===0)return i.toArray();const n=Object.entries(r);return i.filter(o=>Ya(o,n)).toArray()},async findOne(r){const i=await e.get(r);return i&&i.tableId===t?i:null},async insert(r){const i={...r,tableId:t};return await e.add(i),i},async bulkInsert(r){if(r.length===0)return[];const i=r.map(n=>({...n,tableId:t}));return await e.bulkAdd(i),i},async upsert(r){const i={...r,tableId:t};return await e.put(i),i},async patch(r,i){if(await e.update(r,i)===0)throw new Error(`row patch: no row ${r}`);const o=await e.get(r);if(!o)throw new Error(`row patch: row ${r} vanished after update`);return o},async remove(r){await e.delete(r)},async bulkRemove(r){r.length!==0&&await e.bulkDelete(r)},subscribe(r){const n=Ga(()=>e.where("tableId").equals(t).toArray()).subscribe({next:o=>r(o)});return()=>n.unsubscribe()}}}function Ya(e,t){for(const[r,i]of t)if(e[r]!==i)return!1;return!0}function iu(e){return{workspaces:Zn(e.workspaces),tables:Zn(e.tables),settings:Zn(e.settings),plugins:Zn(e.plugins),viewTemplates:Zn(e.viewTemplates),viewInstances:Zn(e.viewInstances),rows:t=>ru(e.rows,t)}}function su(e){const{base:t,providers:r,tableById:i,ctx:n}=e,o=new Map;return{...t,rows(l){const c=i(l),d=c?.source;if(d){const g=r.get(d.type);if(g){const $=JSON.stringify(d),w=o.get(l);if(w&&w.key===$)return w.coll;const S=g.create(c,n);return o.set(l,{key:$,coll:S}),S}}return o.delete(l),t.rows(l)}}}function ou(){const e=new Map;return{on(t,r){let i=e.get(t);return i||(i=new Set,e.set(t,i)),i.add(r),()=>{i.delete(r)}},emit(t,r){const i=e.get(t);if(i)for(const n of i)try{n(r)}catch(o){console.error(`[event:${String(t)}] listener threw`,o)}}}}const Wt=Ye`
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
`;function Kt(e){if(e.key!=="Enter"||!e.ctrlKey&&!e.metaKey)return;const t=e.currentTarget;if(!(t instanceof HTMLElement))return;const r=t.querySelector("form");r&&(e.preventDefault(),r.requestSubmit())}const Yo=new WeakSet;function Vt(e,t){if(Yo.has(t))return;Yo.add(t);let r=0,i=0,n=0,o=0,l=!1;t.style.cursor="grab",t.style.touchAction="none",t.style.userSelect="none",t.addEventListener("pointerdown",d=>{if(d.target.closest("button, input, textarea, select, a, label"))return;l=!0,r=d.clientX,i=d.clientY;const $=e.getBoundingClientRect();n=$.left,o=$.top,t.setPointerCapture(d.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",d=>{if(!l)return;const g=d.clientX-r,$=d.clientY-i,w=-e.offsetWidth+80,S=window.innerWidth-80,U=0,N=window.innerHeight-40,z=Math.max(w,Math.min(S,n+g)),q=Math.max(U,Math.min(N,o+$));e.style.position="fixed",e.style.left=`${z}px`,e.style.top=`${q}px`,e.style.margin="0"});const c=d=>{if(l){l=!1;try{t.releasePointerCapture(d.pointerId)}catch{}t.style.cursor="grab"}};t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c)}var au=Object.defineProperty,lu=Object.getOwnPropertyDescriptor,Xa=(e,t,r,i)=>{for(var n=i>1?void 0:i?lu(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&au(t,r,n),n};let Bt=class extends Ne{constructor(){super(...arguments),this.current=null,this.queue=[],this.dialogEl=null,this.onCancel=e=>{e.preventDefault();const t=this.current;t&&(t.kind==="alert"?this.closeAndResolve(void 0):this.closeAndResolve(null))},this.submitPrompt=e=>{e.preventDefault(),this.current?.kind==="prompt"&&this.closeAndResolve(this.current.value)},this.submitAlert=e=>{e.preventDefault(),this.closeAndResolve(void 0)},this.cancelPrompt=()=>this.closeAndResolve(null),this.onCloseX=()=>{this.dialogEl&&!this.dialogEl.dispatchEvent(new Event("cancel",{cancelable:!0}))||this.onCancel(new Event("cancel",{cancelable:!0}))}}connectedCallback(){super.connectedCallback(),Bt.instance=this}disconnectedCallback(){super.disconnectedCallback(),Bt.instance===this&&(Bt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null}updated(){if(!this.dialogEl)return;const e=this.shadowRoot?.querySelector(".dialog-header");e&&Vt(this.dialogEl,e)}alert(e,t="Notice"){return this.enqueue(r=>{this.current={kind:"alert",title:t,message:e,resolve:r}})}async confirm(e,t="Confirm"){return await this.choice(e,["Yes","No"],t)==="Yes"}prompt(e,t="",r="Input"){return this.enqueue(i=>{this.current={kind:"prompt",title:r,message:e,value:t,resolve:i}})}choice(e,t,r="Choose"){return this.enqueue(i=>{this.current={kind:"choice",title:r,message:e,options:t,resolve:i}})}enqueue(e){return new Promise(t=>{const r=()=>{e(t),this.updateComplete.then(()=>this.dialogEl?.showModal())};this.current?this.queue.push(r):r()})}closeAndResolve(e){const t=this.current;t&&(this.dialogEl?.close(),this.current=null,queueMicrotask(()=>{t.kind==="alert"?t.resolve():t.resolve(e);const r=this.queue.shift();r&&r()}))}render(){const e=this.current;return R`
      <dialog @cancel=${this.onCancel} @keydown=${Kt}>
        <button type="button" class="close-x" title="Close" @click=${this.onCloseX}>×</button>
        ${e?this.renderBody(e):be}
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
            ${e.message?R`<p class="message">${e.message}</p>`:be}
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
    `];Xa([W()],Bt.prototype,"current",2);Bt=Xa([nt("host-dialogs")],Bt);const Zt=Ye`
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
`;var cu=Object.defineProperty,uu=Object.getOwnPropertyDescriptor,Qa=(e,t,r,i)=>{for(var n=i>1?void 0:i?uu(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&cu(t,r,n),n};let gn=class extends Ne{constructor(){super(...arguments),this.toasts=[],this.nextId=1}connectedCallback(){super.connectedCallback(),gn.instance=this}disconnectedCallback(){super.disconnectedCallback(),gn.instance===this&&(gn.instance=null)}show(e,t){const r={id:this.nextId++,kind:t?.kind??"info",message:e,...t?.title?{title:t.title}:{}};this.toasts=[...this.toasts,r];const i=t?.durationMs??(r.kind==="error"||r.kind==="warning"?7e3:4e3);r.timer=window.setTimeout(()=>this.dismiss(r.id),i)}dismiss(e){const t=this.toasts.find(r=>r.id===e);t?.timer!=null&&window.clearTimeout(t.timer),this.toasts=this.toasts.filter(r=>r.id!==e)}render(){return R`
      ${this.toasts.map(e=>R`
          <div class="toast ${e.kind}" role="status">
            <span class="mi lg">${hu(e.kind)}</span>
            <span class="body">
              ${e.title?R`<strong>${e.title}</strong>`:""}${du(e.message)}
            </span>
            <button class="close" title="Dismiss" @click=${()=>this.dismiss(e.id)}>
              <span class="mi">close</span>
            </button>
          </div>
        `)}
    `}};gn.instance=null;gn.styles=[Zt,Ye`
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
    `];Qa([W()],gn.prototype,"toasts",2);gn=Qa([nt("toast-host")],gn);function du(e){const t=/(https?:\/\/[^\s)]+)/g,r=[];let i=0,n;for(;(n=t.exec(e))!==null;)n.index>i&&r.push(e.slice(i,n.index)),r.push({url:n[0]}),i=n.index+n[0].length;return i<e.length&&r.push(e.slice(i)),r.length===0?e:r.map(o=>typeof o=="string"?o:R`<a href=${o.url} target="_blank" rel="noopener noreferrer">${o.url}</a>`)}function hu(e){switch(e){case"success":return"check_circle";case"error":return"error";case"warning":return"warning";default:return"info"}}function fu(){return{headerButtons:[],footerButtons:[],tableButtons:[],importers:[],exporters:[],urlSources:[],dropHandlers:[],cellRenderers:new Map,rowRenderers:new Map,tableRenderers:new Map,rowSources:new Map,settings:new Map}}function Bn(e,t){return e.push(t),()=>{const r=e.indexOf(t);r>=0&&e.splice(r,1)}}function fs(e,t,r){return e.set(t,r),()=>{e.get(t)===r&&e.delete(t)}}function pu(e){return{registerHeaderButton:t=>Bn(e.headerButtons,t),registerFooterButton:t=>Bn(e.footerButtons,t),registerTableButton:t=>Bn(e.tableButtons,t),registerImporter:t=>Bn(e.importers,t),registerExporter:t=>Bn(e.exporters,t),registerUrlSource:t=>Bn(e.urlSources,t),registerDropHandler:t=>Bn(e.dropHandlers,t),registerCellRenderer:(t,r)=>fs(e.cellRenderers,t,r),registerRowRenderer:(t,r)=>fs(e.rowRenderers,t,r),registerTableRenderer:(t,r)=>fs(e.tableRenderers,t,r),openNewTableDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-new-table"))},openCsvPasteDialog:()=>{document.dispatchEvent(new CustomEvent("easydb:open-csv-paste"))},openPluginManager:()=>{document.dispatchEvent(new CustomEvent("easydb:open-plugin-manager"))},openSettings:()=>{document.dispatchEvent(new CustomEvent("easydb:open-settings"))},registerSettings:(t,r,i)=>(e.settings.set(t,{name:r,fields:i}),()=>{e.settings.get(t)?.name===r&&e.settings.delete(t)}),dialogs:mu}}const mu={async alert(e,t){const r=Bt.instance;if(r)return r.alert(e,t);window.alert(e)},async confirm(e,t){const r=Bt.instance;return r?r.confirm(e,t):window.confirm(e)},async prompt(e,t,r){const i=Bt.instance;return i?i.prompt(e,t,r):window.prompt(e,t)??null},async choice(e,t,r){const i=Bt.instance;if(i)return i.choice(e,t,r);const n=window.prompt(`${e}

Options: ${t.join(", ")}`);return n&&t.includes(n)?n:null},toast(e,t){const r=gn.instance;r?r.show(e,t):console.log(`[toast:${t?.kind??"info"}]`,t?.title??"",e)}},Hs="/easydbaccess/settings.json",Ja="/easydbaccess/secrets.txt";function Ar(e){try{return globalThis.localStorage??null}catch{return null}}function _i(e){const t=Ar();if(!t)return{};const r=t.getItem(Hs);if(!r)return{};try{const i=JSON.parse(r);return i&&typeof i=="object"?i:{}}catch{return{}}}function Ws(e,t){return _i()[e]}function gu(e,t,r){const i=Ar();if(!i)return;const n=_i();n[e]=t,i.setItem(Hs,JSON.stringify(n))}function bu(e,t){const r=Ar();if(!r)return;const i=_i();e in i&&(delete i[e],r.setItem(Hs,JSON.stringify(i)))}function Cs(e,t){return e in _i()}function Ti(e){return Ar()?.getItem(Ja)??""}function Za(e,t){Ar()?.setItem(Ja,e)}function Ai(e){const t={};for(const r of e.split(/\r?\n/)){const i=r.trim();if(!i||i.startsWith("#"))continue;const n=i.indexOf(":");if(n<0)continue;const o=i.slice(0,n).trim(),l=i.slice(n+1).trim();o&&(t[o]=l)}return t}function el(e,t){return e.replace(/\$\{secret:([^}]+)\}/g,(r,i)=>{const n=t[i.trim()];return n===void 0?r:n})}function yu(e){const t=pu(e.registries),r=e.registries.rowSources,i=l=>(r.set(l.type,l),()=>{r.get(l.type)===l&&r.delete(l.type)}),n=vu(e.store,e.registries),o={open(l){return console.warn("[host] windows.open is stubbed until Phase 5",l.id),{id:l.id,close:()=>{},focus:()=>{},setTitle:()=>{},setGeometry:()=>{}}},list:()=>[],find:()=>null};return{store:e.store,events:e.events,ui:t,windows:o,registerRowSource:i,settings:n,backend:{fetch:async(l,c)=>{const d=await wu(e.store),g=c?.body instanceof ArrayBuffer;if(!d||g)return globalThis.fetch(l,c);const $={url:l};return c?.method&&($.method=c.method),c?.headers&&($.headers=c.headers),typeof c?.body=="string"&&($.body=c.body),globalThis.fetch(`${d}/fetch`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify($)})},async saveFile(l,c,d){const g=typeof c=="string"?new Blob([c],{type:d??"application/octet-stream"}):c,$=URL.createObjectURL(g),w=document.createElement("a");w.href=$,w.download=l,w.rel="noopener",document.body.appendChild(w),w.click(),w.remove(),setTimeout(()=>URL.revokeObjectURL($),1e3)}},workspaceId:()=>e.workspaceId(),selfUrl:()=>e.selfUrl??"(builtin)"}}async function wu(e){const t="server-sync:url";let r=Cs(t)?Ws(t):void 0;return r===void 0&&(r=(await e.settings.findOne(t))?.value),typeof r!="string"||r.length===0?null:el(r,Ai(Ti())).replace(/\/+$/,"")}function vu(e,t){const r=(o,l)=>`${o}:${l}`,i=(o,l)=>t.settings.get(o)?.fields.find(c=>c.key===l),n=o=>typeof o=="string"?el(o,Ai(Ti())):o;return{async get(o,l){const c=r(o,l);let d;if(Cs(c))d=Ws(c);else{const g=await e.settings.findOne(c);d=g?g.value:i(o,l)?.default}return n(d)},async set(o,l,c,d){const g=r(o,l);(d??i(o,l)?.scope??"workspace")==="user"?(gu(g,c),await e.settings.remove(g).catch(()=>{})):(await e.settings.upsert({key:g,value:c}),bu(g))},async placement(o,l){const c=r(o,l);return Cs(c)?"user":await e.settings.findOne(c)?"workspace":null}}}const xu={id:"csv-import",name:"CSV Import",type:"importer",version:"0.1.0",description:"Drag-and-drop CSV files to create typed tables.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-import.ts"};function $u(e){e.ui.registerImporter(ku),e.ui.registerHeaderButton({id:"csv-import:paste",label:"Paste CSV",icon:"content_paste",tooltip:"Paste CSV text to create a new table",onClick:()=>e.ui.openCsvPasteDialog()}),e.ui.registerDropHandler(async t=>{const i=ju(t).filter(Fu);if(i.length===0)return!1;t.preventDefault();for(const n of i)await Cu(e,n);return!0})}const ku={id:"csv",label:"CSV",accept:[".csv","text/csv"],async parse(e){const t=typeof e=="string"?e:await e.text();return Pr(t)}};async function Cu(e,t){const r=t.name.replace(/\.csv$/i,"")||"imported";await yi(e,await t.text(),r)}async function yi(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("csv-import: no active workspace");const o=(r||"imported").replace(/\.csv$/i,"")||"imported",l=(await e.store.tables.find()).find(w=>w.workspaceId===n&&w.name===o);let c,d;if(l){const w=await e.ui.dialogs.choice(`A table named "${o}" already exists in this workspace.`,["Append rows","Overwrite rows","Create as new table"],"CSV import");if(!w)return;w==="Append rows"?(d="append",c=l.id):w==="Overwrite rows"?(d="overwrite",c=l.id):(d="new",c=ai())}else d="new",c=ai();e.events.emit("import:before",{source:"csv",tableId:c});let g;if(d==="new"){const w=Pr(t,{maxRows:i.maxRows});let S=w.columns,U=w.rows;if(i.editColumns){const z=await i.editColumns(S);if(z===null)return;U=zu(U,S,z),S=z}i.maxRows!=null&&(U=U.slice(0,i.maxRows));const N=l?`${o} (${Date.now().toString(36)})`:o;await e.store.tables.insert({id:c,workspaceId:n,name:N,code:Es(N),columns:S,view:"table",...i.origin?{origin:i.origin}:{},updatedAt:Date.now()}),g=U.map(z=>({id:ai(),tableId:c,data:z,updatedAt:Date.now()}))}else{const w=l.columns,S=tl(t,{maxRows:i.maxRows});if(g=(i.maxRows!=null?S.rows.slice(0,i.maxRows):S.rows).map(N=>{const z={};for(let q=0;q<w.length;q++){const G=w[q];z[G.field]=ol(N[q]??"",G.type)}return{id:ai(),tableId:c,data:z,updatedAt:Date.now()}}),d==="overwrite"){const N=e.store.rows(c),z=await N.find();await N.bulkRemove(z.map(q=>q.id))}}await e.store.rows(c).bulkInsert(g),e.events.emit("import:after",{source:"csv",tableId:c,rowCount:g.length})}function tl(e,t={}){const r=e.replace(/﻿/,""),i=il(r),n=sl(r,i,nl(t.maxRows));if(n.length===0)return{header:[],rows:[]};const o=n[0],l=n.slice(1).filter(c=>!(c.length===1&&c[0]===""));return{header:o,rows:l}}function nl(e){return e!=null?e+1:void 0}async function rl(e,t){const i=new TextDecoder,n=t+1;let o="",l=0,c=!1,d=0;for(;d<e.size;){const g=new Uint8Array(await e.slice(d,d+1048576).arrayBuffer());d+=1048576;const $=i.decode(g,{stream:!0});for(let w=0;w<$.length;w++){const S=$[w];if(S==='"')c=!c;else if(S===`
`&&!c&&(l+=1,l>=n))return o+$.slice(0,w+1)}o+=$}return o}function Pr(e,t={}){const r=e.replace(/﻿/,""),i=il(r),n=sl(r,i,nl(t.maxRows));if(n.length===0)return{columns:[],rows:[]};const o=n[0],l=n.slice(1).filter(U=>!(U.length===1&&U[0]==="")),c=o.map((U,N)=>_u(U,N)),d=ll(c.map(U=>U.field)),g=l.map(U=>{const N={};for(let z=0;z<d.length;z++)N[d[z]]=U[z]??"";return N}),$=c.map((U,N)=>U.type?U.type:Tu(g.map(z=>z[d[N]]??"").filter(z=>z.length>0))),w=c.map((U,N)=>{const z=$[N]??"string",q={field:d[N],label:U.label,type:z},G=Su(z),de=U.renderer??G;return de&&(q.renderer=de),U.default!==void 0&&(q.default=U.default),U.max!=null&&(q.max=U.max),U.unique&&(q.unique=!0),U.notnull&&(q.notnull=!0),U.hidden&&(q.hidden=!0),q}),S=g.map(U=>{const N={};for(let z=0;z<d.length;z++){const q=d[z],G=$[z]??"string";N[q]=ol(U[q]??"",G)}return N});return{columns:w,rows:S}}const Eu=new Set(["string","number","boolean","date","datetime"]),Xo={color:"color",image:"image"};function Su(e){if(e==="date"||e==="datetime"||e==="boolean")return e}function _u(e,t){const r=e.trim();if(!r.includes(":"))return{field:Es(r||`col_${t+1}`),label:r||`Column ${t+1}`};const i=r.split(":"),n=Es(i[0]||`col_${t+1}`),o=(i[1]??i[0]??"").trim()||n,l={field:n,label:o},c=(i[2]??"").trim();c&&(Eu.has(c)?l.type=c:Xo[c]&&(l.type="string",l.renderer=Xo[c]));const d=(i[3]??"").trim();d&&(l.default=d);const g=(i[4]??"").trim();if(g){const w=Number(g);Number.isFinite(w)&&w>0&&(l.max=w)}const $=(i[5]??"").toLowerCase();return $.includes("u")&&(l.unique=!0),$.includes("n")&&(l.notnull=!0),$.includes("h")&&(l.hidden=!0),l}function il(e){const t=e.split(/\r?\n/).slice(0,5).join(`
`),r={",":0,";":0,"	":0};for(const o of t)o in r&&(r[o]+=1);let i=",",n=-1;for(const o of[",",";","	"])(r[o]??0)>n&&(i=o,n=r[o]??0);return i}function sl(e,t,r){const i=[];let n=[],o="",l=!1;for(let c=0;c<e.length;c++){const d=e[c];if(l)d==='"'?e[c+1]==='"'?(o+='"',c++):l=!1:o+=d;else if(d==='"')l=!0;else if(d===t)n.push(o),o="";else if(d===`
`||d==="\r"){if(d==="\r"&&e[c+1]===`
`&&c++,n.push(o),i.push(n),n=[],o="",r!=null&&i.length>=r)return i}else o+=d}return(o.length>0||n.length>0)&&(n.push(o),i.push(n)),i}function Tu(e){return e.length===0?"string":e.every(Pu)?"boolean":e.every(Iu)?"number":e.every(Ru)?"datetime":e.every(Du)?"date":"string"}const Au=/^(true|false|yes|no|0|1)$/i;function Pu(e){return Au.test(e.trim())}function Iu(e){const t=e.trim();if(t==="")return!1;const r=Number(t);return Number.isFinite(r)}function Du(e){const t=e.trim();return t===""||/^\d+$/.test(t)?!1:!!(/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))}function Ru(e){const t=e.trim();return t===""?!1:!!(/^\d{4}-\d{2}-\d{2}[T ]\d{1,2}:\d{2}(:\d{2})?/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}[T ]\d{1,2}:\d{2}/.test(t))}function ol(e,t){const r=e.trim();switch(t){case"number":{if(r==="")return null;const i=Number(r);return Number.isFinite(i)?i:r}case"boolean":return r===""?null:/^(true|yes|1)$/i.test(r);case"date":return al(r);case"datetime":return Ou(r);default:return e}}function al(e){if(e==="")return"";if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;const t=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/.exec(e);if(t){let i=parseInt(t[1],10),n=parseInt(t[2],10);const o=t[3];let l=parseInt(o,10);o.length===2&&(l+=2e3);let c,d;return i>12?(c=i,d=n):n>12?(d=i,c=n):(c=i,d=n),`${l.toString().padStart(4,"0")}-${d.toString().padStart(2,"0")}-${c.toString().padStart(2,"0")}`}const r=new Date(e);return Number.isNaN(r.getTime())?e:r.toISOString().slice(0,10)}function Ou(e){if(e==="")return"";const t=e.replace(/\s+/,"T"),r=/^(\d{4}-\d{2}-\d{2})T(\d{1,2}:\d{2})(?::\d{2})?/.exec(t);if(r)return`${r[1]}T${r[2].padStart(5,"0")}`;const i=/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})[T ](\d{1,2}:\d{2})/.exec(e);if(i)return`${al(`${i[1]}/${i[2]}/${i[3]}`)}T${i[4].padStart(5,"0")}`;const n=new Date(e);if(!Number.isNaN(n.getTime())){const o=n.toISOString();return`${o.slice(0,10)}T${o.slice(11,16)}`}return e}function ju(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function Fu(e){return!!(/\.csv$/i.test(e.name)||e.type==="text/csv"||e.type==="application/csv")}function ll(e){const t=new Map,r=new Set,i=[];for(const n of e){let o=n,l=t.get(n)??0;for(;r.has(o);)l+=1,o=`${n}_${l+1}`;t.set(n,l),r.add(o),i.push(o)}return i}function zu(e,t,r){return e.map(i=>{const n={};for(let o=0;o<t.length;o++)n[r[o].field]=i[t[o].field];return n})}function Es(e){return e.toLowerCase().trim().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")||"col"}function ai(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Lu=Object.freeze(Object.defineProperty({__proto__:null,dedupeFields:ll,importCsvText:yi,init:$u,meta:xu,parseCsv:Pr,parseCsvRaw:tl,readCsvHead:rl},Symbol.toStringTag,{value:"Module"})),Mu={id:"csv-export",name:"CSV Export",type:"exporter",version:"0.1.0",description:"Export a single table as a .csv file via a per-table button.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/csv-export.ts"},Bu={id:"csv",label:"CSV",extension:".csv",async serialize(e,t){return Ks(e,t)}};function Nu(e){e.ui.registerExporter(Bu),e.ui.registerTableButton({id:"csv-export:download",label:"CSV",icon:"file_download",tooltip:"Download this table as a .csv file",onClick:async(t,r)=>{const i=await t.store.tables.findOne(r.tableId);if(!i)return;const n=await t.store.rows(i.id).find(),o=Ks(i,n);await t.backend.saveFile(`${i.code||i.name||"table"}.csv`,o,"text/csv")}})}function Ks(e,t){const r=e.columns.map(o=>o.field),i=e.columns.map(o=>Qo(o.label??o.field)),n=t.map(o=>r.map(l=>Qo(Uu(o.data[l]))).join(","));return[i.join(","),...n].join(`\r
`)}function Uu(e){return e==null?"":typeof e=="boolean"?e?"true":"false":typeof e=="number"||typeof e=="string"?String(e):JSON.stringify(e)}function Qo(e){return e===""?"":/[",\r\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}const qu=Object.freeze(Object.defineProperty({__proto__:null,init:Nu,meta:Mu,serializeCsv:Ks},Symbol.toStringTag,{value:"Module"}));var Hu=Object.defineProperty,Wu=Object.getOwnPropertyDescriptor,ar=(e,t,r,i)=>{for(var n=i>1?void 0:i?Wu(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Hu(t,r,n),n};function Ss(e,t={}){return(Ot.instance??Ku()).open(e,t)}function Ku(){const e=document.createElement("table-select-dialog");return document.body.appendChild(e),e}function Vu(e){return e==null?"":`${e.toLocaleString()} row${e===1?"":"s"}`}let Ot=class extends Ne{constructor(){super(...arguments),this.items=[],this.selected=[],this.heading="Select tables",this.message="",this.confirmLabel="Import",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.selected.map((r,i)=>r?i:-1).filter(r=>r>=0);t.length!==0&&this.finish(t)}}connectedCallback(){super.connectedCallback(),Ot.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ot.instance===this&&(Ot.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Vt(this.dialogEl,e)}open(e,t){return this.items=e,this.selected=e.map(r=>!r.hidden),this.heading=t.title??"Select tables",this.message=t.message??"",this.confirmLabel=t.confirmLabel??"Import",new Promise(r=>{this.resolveFn=r,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}toggle(e){const t=this.selected.slice();t[e]=!t[e],this.selected=t}setAll(e){this.selected=this.items.map(()=>e)}get selectedCount(){return this.selected.filter(Boolean).length}render(){const e=this.selectedCount;return R`
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
                      <span class="size">${Vu(t.size)}</span>
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
    `];ar([W()],Ot.prototype,"items",2);ar([W()],Ot.prototype,"selected",2);ar([W()],Ot.prototype,"heading",2);ar([W()],Ot.prototype,"message",2);ar([W()],Ot.prototype,"confirmLabel",2);Ot=ar([nt("table-select-dialog")],Ot);const Gu={id:"json-import",name:"JSON Import",type:"importer",version:"0.1.0",description:"Drag-and-drop JSON to create tables. Supports native dumps and arrays of objects.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"/><path d="M16 3a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/json-import.ts"};function Yu(e){e.ui.registerImporter(Xu),e.ui.registerDropHandler(async t=>{const i=id(t).filter(sd);if(i.length===0)return!1;t.preventDefault();for(const n of i)await Qu(e,n);return!0})}const Xu={id:"json",label:"JSON",accept:[".json",".db.json","application/json"],async parse(e){const t=typeof e=="string"?e:await e.text(),r=JSON.parse(t),n=Ir(r,"imported")[0];return{columns:n?.columns??[],rows:n?.rows??[]}}};async function Qu(e,t){await wi(e,await t.text(),t.name)}async function wi(e,t,r,i={}){const n=e.workspaceId();if(!n)throw new Error("json-import: no active workspace");let o;try{o=JSON.parse(t)}catch(q){e.events.emit("plugin:error",{url:"json-import",phase:"runtime",error:new Error(`Invalid JSON in ${r}: ${q.message}`)});return}const l=r.replace(/\.db\.json$/i,"").replace(/\.json$/i,"")||"imported",c=Ir(o,l);if(c.length===0)return;let d=c;if(c.length>1){const q=await Ss(c.map(G=>({name:G.name,size:G.rows.length})),{title:"Import tables",message:`"${r}" contains ${c.length} tables. Choose which to import.`,confirmLabel:"Import"});if(!q)return;d=q.map(G=>c[G])}const g=(await e.store.tables.find()).filter(q=>q.workspaceId===n),$=new Set(d.map(q=>q.name)),w=g.filter(q=>$.has(q.name));let S;if(w.length===0&&d.length===1)S="append-new";else{const q=w.length>0?[`Overwrite matching (${w.length})`,"Replace entire workspace","Add as new tables"]:["Add to current workspace","Replace entire workspace"],G=await e.ui.dialogs.choice(`Importing ${d.length} table${d.length===1?"":"s"} from "${r}".${w.length>0?`

${w.length} table${w.length===1?"":"s"} share a name with existing data.`:""}`,q,"JSON import");if(!G)return;G.startsWith("Overwrite matching")?S="overwrite-matching":G==="Replace entire workspace"?S="replace-workspace":S="append-new"}const U=2e3,N=d.reduce((q,G)=>q+(G.source?0:Math.min(G.rows.length,i.maxRows??1/0)),0);let z=null;if(N>=U){const{TopProgress:q}=await An(async()=>{const{TopProgress:G}=await Promise.resolve().then(()=>Fl);return{TopProgress:G}},void 0);z=q.begin(`Importing ${r}…`)}try{if(S==="replace-workspace")for(const ee of g){const ie=e.store.rows(ee.id),V=await ie.find();await ie.bulkRemove(V.map(J=>J.id)),await e.store.tables.remove(ee.id)}const q=new Map(g.map(ee=>[ee.name,ee])),G=new Map;let de=0;for(const ee of d){const ie=ee.source,V=ee.origin??(!ie&&i.originUrl?{type:"json",url:i.originUrl}:void 0);let J;const ue=S==="overwrite-matching"?q.get(ee.name):void 0;if(ue){if(J=ue.id,!ue.source){const Ie=e.store.rows(J),$e=await Ie.find();await Ie.bulkRemove($e.map(m=>m.id))}await e.store.tables.patch(J,{columns:ee.columns,...ee.title?{title:ee.title}:{},...ee.windowGeometry?{windowGeometry:ee.windowGeometry}:{},...ee.sortColumn?{sortColumn:ee.sortColumn,sortAsc:ee.sortAsc??!0}:{sortColumn:void 0,sortAsc:void 0},...ee.filters?{filters:ee.filters}:{},...ee.labelColumn?{labelColumn:ee.labelColumn}:{},...ee.info?{info:ee.info}:{},...ee.deletedColumns?{deletedColumns:ee.deletedColumns}:{},source:ie??void 0,origin:V??void 0,updatedAt:Date.now()})}else J=ta(),e.events.emit("import:before",{source:"json",tableId:J}),await e.store.tables.insert({id:J,workspaceId:n,name:ee.name,code:od(ee.name),columns:ee.columns,view:"table",...ee.title?{title:ee.title}:{},...ee.windowGeometry?{windowGeometry:ee.windowGeometry}:{},...ee.sortColumn?{sortColumn:ee.sortColumn,sortAsc:ee.sortAsc??!0}:{},...ee.filters?{filters:ee.filters}:{},...ee.labelColumn?{labelColumn:ee.labelColumn}:{},...ee.info?{info:ee.info}:{},...ee.deletedColumns?{deletedColumns:ee.deletedColumns}:{},...ie?{source:ie}:{},...V?{origin:V}:{},updatedAt:Date.now()});G.set(ee.name,J);let we=0;if(!ie){const Ie=e.store.rows(J),m=(i.maxRows!=null?ee.rows.slice(0,i.maxRows):ee.rows).map(v=>({id:ta(),tableId:J,data:v,updatedAt:Date.now()}));await Ie.bulkInsert(m),we=m.length,de+=we,z?.fraction(N>0?de/N:1)}e.events.emit("import:after",{source:"json",tableId:J,rowCount:we})}await Ju(e,o,n,G,S==="replace-workspace")}finally{z?.done()}document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function Ju(e,t,r,i,n){if(!bt(t))return;const o=t,l=Array.isArray(o.viewTemplates)?o.viewTemplates:[],c=Array.isArray(o.viewInstances)?o.viewInstances:[];if(!(l.length===0&&c.length===0)){if(n){const d=(await e.store.viewInstances.find()).filter(g=>g.workspaceId===r);await e.store.viewInstances.bulkRemove(d.map(g=>g.id))}for(const d of l)!bt(d)||typeof d.id!="string"||await e.store.viewTemplates.upsert({...d,workspaceId:r});for(const d of c){if(!bt(d)||typeof d.id!="string")continue;const g=(d.tableName?i.get(d.tableName):void 0)??d.tableId;g&&await e.store.viewInstances.upsert({...d,workspaceId:r,tableId:g})}}}function Ir(e,t){if(bt(e)&&Jo(e))return Zo(e);if(bt(e)&&Array.isArray(e.tables)){const r=e,i=[];for(const n of r.tables){if(ed(n)){const o=n,l=bt(o.windowGeometry)?o.windowGeometry:void 0,c=typeof o.sortColumn=="string"?o.sortColumn:void 0,d=typeof o.sortAsc=="boolean"?o.sortAsc:void 0,g=typeof o.title=="string"?o.title:void 0,$=bt(o.filters)?o.filters:void 0,w=typeof o.labelColumn=="string"?o.labelColumn:void 0,S=bt(o.info)?o.info:void 0,U=Array.isArray(o.deletedColumns)?o.deletedColumns.filter(q=>typeof q=="string"):void 0,N=bt(o.source)&&typeof o.source.type=="string"?o.source:void 0,z=bt(o.origin)&&typeof o.origin.type=="string"&&typeof o.origin.url=="string"?o.origin:void 0;i.push({name:String(n.name),columns:n.columns.map(td),rows:Array.isArray(n.rows)?n.rows.filter(bt):[],...g?{title:g}:{},...l?{windowGeometry:l}:{},...c?{sortColumn:c,sortAsc:d??!0}:{},...$?{filters:$}:{},...w?{labelColumn:w}:{},...S?{info:S}:{},...U?{deletedColumns:U}:{},...N?{source:N}:{},...z?{origin:z}:{}});continue}bt(n)&&Jo(n)&&i.push(...Zo(n))}return i}if(Array.isArray(e)){const r=e.filter(bt);return r.length===0?[]:[{name:t,...ea(r)}]}return bt(e)?[{name:t,...ea([e])}]:[]}function Jo(e){for(const[t,r]of Object.entries(e)){if(!/\.table\.json$/.test(t)||!bt(r))continue;const i=r;if(Array.isArray(i.dataArray)&&Array.isArray(i.columns))return!0}return!1}function Zo(e){const t=[];for(const[r,i]of Object.entries(e)){if(!/\.table\.json$/.test(r)||!bt(i))continue;const n=i;if(!Array.isArray(n.dataArray)||!Array.isArray(n.columns))continue;const o=r.replace(/\.table\.json$/,""),l=n.columns.map($=>Zu($)),c=l.map($=>$.field),d=n.dataArray.filter($=>Array.isArray($)).map($=>{const w={};for(let S=0;S<c.length;S++)w[c[S]]=$[S];return w}),g={name:o,columns:l,rows:d};if(n.elementRect&&typeof n.elementRect.x=="number"&&typeof n.elementRect.y=="number"){const $=n.elementRect;g.windowGeometry={x:$.x,y:$.y,w:$.width??600,h:$.height??400,z:$.zIndex??100,minimized:!!$.minimized,maximized:!!$.maximized}}typeof n.sortColumn=="number"&&n.sortColumn>=0&&n.sortColumn<c.length&&(g.sortColumn=c[n.sortColumn],g.sortAsc=(n.sortDirection??"asc")!=="desc"),t.push(g)}return t}function Zu(e){const t=String(e.field??"col"),r=String(e.name??t),i=typeof e.type=="string"?e.type:"string",n={field:t,label:r,type:i};return e.isUnique&&(n.unique=!0),e.isNotNull&&(n.notnull=!0),n}function ed(e){return bt(e)&&"name"in e&&"columns"in e&&Array.isArray(e.columns)}function td(e){if(!bt(e))return{field:"col",label:"Col",type:"string"};const t=e,r=String(t.field??"col");let i=typeof t.type=="string"?t.type:"string",n=typeof t.renderer=="string"?t.renderer:void 0;(i==="color"||i==="image")&&(n=n??i,i="string");const o={field:r,label:String(t.label??r),type:i};return n&&(o.renderer=n),typeof t.script=="string"&&(o.script=t.script),o}function ea(e){const t=new Set;for(const n of e)for(const o of Object.keys(n))t.add(o);return{columns:Array.from(t).map(n=>({field:n,label:n,type:nd(e.map(o=>o[n]))})),rows:e}}function nd(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&rd(r))?"date":"string"}function rd(e){if(/^\d+$/.test(e))return!1;const t=new Date(e);return!Number.isNaN(t.getTime())}function bt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function id(e){const t=e.dataTransfer;if(!t)return[];if(t.files&&t.files.length>0)return Array.from(t.files);if(t.items){const r=[];for(const i of Array.from(t.items))if(i.kind==="file"){const n=i.getAsFile();n&&r.push(n)}return r}return[]}function sd(e){return!!(/\.json$/i.test(e.name)||e.type==="application/json")}function od(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function ta(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const ad=Object.freeze(Object.defineProperty({__proto__:null,importJsonText:wi,init:Yu,meta:Gu,parsedToTables:Ir},Symbol.toStringTag,{value:"Module"}));var ld=Object.defineProperty,cd=Object.getOwnPropertyDescriptor,Dr=(e,t,r,i)=>{for(var n=i>1?void 0:i?cd(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&ld(t,r,n),n};const ud="https://latest.datasette.io/ephemeral";let Ut=class extends Ne{constructor(){super(...arguments),this.url="",this.token="",this.status="",this.statusKind="",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=async e=>{e.preventDefault();const t=this.url.trim();if(!t)return;const r=this.token.trim();if(this.onConnect){this.status="Checking…",this.statusKind="busy";try{await this.onConnect(t,r)}catch(i){this.status=i?.message??String(i),this.statusKind="err";return}}this.finish({url:t,token:r})}}connectedCallback(){super.connectedCallback(),Ut.instance=this}disconnectedCallback(){super.disconnectedCallback(),Ut.instance===this&&(Ut.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Vt(this.dialogEl,e)}open(e={}){return this.url=e.initialUrl??"",this.token=e.initialToken??"",this.status="",this.statusKind="",this.onTest=e.onTest,this.onConnect=e.onConnect,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}async runTest(){const e=this.url.trim();if(!(!e||!this.onTest)){this.status="Testing…",this.statusKind="busy";try{this.status=await this.onTest(e,this.token.trim()),this.statusKind=/read-write|reachable|ok\b/i.test(this.status)?"ok":"err"}catch(t){this.status=t?.message??String(t),this.statusKind="err"}}}render(){return R`
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
                placeholder="e.g. ${ud}"
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
    `];Dr([W()],Ut.prototype,"url",2);Dr([W()],Ut.prototype,"token",2);Dr([W()],Ut.prototype,"status",2);Dr([W()],Ut.prototype,"statusKind",2);Ut=Dr([nt("datasette-connect-dialog")],Ut);function cl(e,t,r=[]){const i=new Set(e.map(c=>c.field)),n=new Set(r),o=[...e],l=[];for(const c of t)i.has(c.field)||n.has(c.field)||(o.push(c),l.push(c.field),i.add(c.field));return{columns:o,newFields:l}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ul=Symbol.for(""),dd=e=>{if(e?.r===ul)return e?._$litStatic$},hd=e=>({_$litStatic$:e,r:ul}),na=new Map,fd=e=>(t,...r)=>{const i=r.length;let n,o;const l=[],c=[];let d,g=0,$=!1;for(;g<i;){for(d=t[g];g<i&&(o=r[g],(n=dd(o))!==void 0);)d+=n+t[++g],$=!0;g!==i&&c.push(o),l.push(d),g++}if(g===i&&l.push(t[i]),$){const w=l.join("$$lit$$");(t=na.get(w))===void 0&&(l.raw=l,na.set(w,t=l)),r=c}return e(t,...r)},pd=fd(R);var md=Object.defineProperty,gd=Object.getOwnPropertyDescriptor,Pi=(e,t,r,i)=>{for(var n=i>1?void 0:i?gd(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&md(t,r,n),n};let Jt=class extends Ne{constructor(){super(...arguments),this.values=[],this.current="",this.search="",this.resolveFn=null,this.onOutside=e=>{e.composedPath().includes(this)||this.close(null)}}open(e,t,r){return this.values=t,this.current=r,this.search="",this.style.top=`${Math.round(e.bottom+4)}px`,this.style.left=`${Math.round(e.left)}px`,this.removeAttribute("hidden"),new Promise(i=>{this.resolveFn=i,setTimeout(()=>document.addEventListener("mousedown",this.onOutside,!0),0)})}close(e){document.removeEventListener("mousedown",this.onOutside,!0),this.setAttribute("hidden","");const t=this.resolveFn;this.resolveFn=null,t?.(e)}connectedCallback(){super.connectedCallback(),Jt.instance=this,this.setAttribute("hidden","")}disconnectedCallback(){super.disconnectedCallback(),Jt.instance===this&&(Jt.instance=null)}render(){const e=this.search.toLowerCase(),t=this.values.filter(r=>r.value.toLowerCase().includes(e));return R`
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
    `];Pi([Ht({type:Array})],Jt.prototype,"values",2);Pi([Ht({type:String})],Jt.prototype,"current",2);Pi([W()],Jt.prototype,"search",2);Jt=Pi([nt("filter-popover")],Jt);var bd=Object.defineProperty,yd=Object.getOwnPropertyDescriptor,en=(e,t,r,i)=>{for(var n=i>1?void 0:i?yd(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&bd(t,r,n),n};let Ft=class extends Ne{constructor(){super(...arguments),this.value="",this.options=[],this.placeholder="filter…",this.open=!1,this.highlightIdx=-1,this.dropTop=0,this.dropLeft=0,this.dropMinWidth=160,this.editing=!1,this.onOutside=e=>{e.composedPath().includes(this)||this.closeDropdown()},this.onWindowChange=()=>{this.open&&this.positionDropdown()},this.onInput=e=>{const t=e.target.value;this.fire(t),this.open||this.openDropdown(),this.editing=!0,this.highlightIdx=-1},this.onClear=e=>{e.preventDefault(),e.stopPropagation(),this.fire(""),this.editing=!1,this.highlightIdx=-1,this.inputEl?.focus()},this.onKeyDown=e=>{const t=this.filtered();if(e.key==="ArrowDown"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.min(this.highlightIdx+1,t.length-1),this.scrollHighlightIntoView()}else if(e.key==="ArrowUp"){if(e.preventDefault(),!this.open){this.openDropdown();return}this.highlightIdx=Math.max(this.highlightIdx-1,0),this.scrollHighlightIntoView()}else if(e.key==="Enter"){const r=t[this.highlightIdx];r!==void 0?(e.preventDefault(),this.onPick(r)):this.open&&this.closeDropdown()}else e.key==="Escape"&&this.open&&(e.preventDefault(),this.closeDropdown())}}filtered(){if(!this.editing)return this.options.slice(0,500);const t=(this.value??"").trim().toLowerCase();if(!t)return this.options.slice(0,500);const r=[];for(const i of this.options)if(i.toLowerCase().includes(t)&&(r.push(i),r.length>=500))break;return r}positionDropdown(){if(!this.inputEl)return;const e=this.inputEl.getBoundingClientRect();this.dropTop=Math.round(e.bottom+2),this.dropLeft=Math.round(e.left),this.dropMinWidth=Math.max(160,Math.round(e.width))}openDropdown(){this.open||(this.positionDropdown(),this.open=!0,this.editing=!1,this.highlightIdx=-1,document.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("scroll",this.onWindowChange,!0),window.addEventListener("resize",this.onWindowChange))}closeDropdown(){this.open&&(this.open=!1,document.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("scroll",this.onWindowChange,!0),window.removeEventListener("resize",this.onWindowChange))}disconnectedCallback(){super.disconnectedCallback(),this.closeDropdown()}fire(e){this.value=e,this.dispatchEvent(new CustomEvent("filter-change",{detail:{value:e},bubbles:!0,composed:!0}))}onPick(e){this.fire(e),this.closeDropdown(),this.editing=!1,this.inputEl?.focus()}scrollHighlightIntoView(){queueMicrotask(()=>{this.renderRoot.querySelector("ul.dropdown")?.children[this.highlightIdx]?.scrollIntoView({block:"nearest"})})}render(){const e=this.open?this.filtered():[],t=`top:${this.dropTop}px;left:${this.dropLeft}px;min-width:${this.dropMinWidth}px;`;return R`
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
            </button>`:be}
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
          </ul>`:be}
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
  `;en([Ht({type:String})],Ft.prototype,"value",2);en([Ht({type:Array})],Ft.prototype,"options",2);en([Ht({type:String})],Ft.prototype,"placeholder",2);en([W()],Ft.prototype,"open",2);en([W()],Ft.prototype,"highlightIdx",2);en([W()],Ft.prototype,"dropTop",2);en([W()],Ft.prototype,"dropLeft",2);en([W()],Ft.prototype,"dropMinWidth",2);en([W()],Ft.prototype,"editing",2);en([Kn("input")],Ft.prototype,"inputEl",2);Ft=en([nt("filter-combobox")],Ft);function wd(e){const t=e.trim(),r=t.split(/\s+/).filter(Boolean);if(!r.some(c=>c==="AND"||c==="OR"))return{kind:"plain",phrase:t.toLowerCase(),words:r.map(c=>c.toLowerCase())};const n=[];let o=[];for(const c of r)c==="OR"?(n.push(o),o=[]):c==="AND"||o.push(c.toLowerCase());n.push(o);const l=n.filter(c=>c.length>0);return l.length===0?{kind:"plain",phrase:t.toLowerCase(),words:[]}:{kind:"boolean",groups:l}}function vi(e,t,r){const i=wd(t);if(i.kind==="boolean")return e.filter(d=>i.groups.some(g=>g.every($=>r(d,$))));const{phrase:n,words:o}=i;if(o.length<=1)return n===""?e:e.filter(d=>r(d,n));const l=e.filter(d=>r(d,n));if(l.length>0)return l;const c=e.filter(d=>o.every(g=>r(d,g)));return c.length>0?c:e.filter(d=>o.some(g=>r(d,g)))}const xi="easydb:visible-count";function dl(e,t,r){e&&document.dispatchEvent(new CustomEvent(xi,{detail:{key:e,count:t,total:r}}))}function hl(e,t){return e<0||t<0?"":e===t?` (${t})`:` (${e}/${t})`}var vd=Object.defineProperty,xd=Object.getOwnPropertyDescriptor,ut=(e,t,r,i)=>{for(var n=i>1?void 0:i?xd(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&vd(t,r,n),n};function ra(e,t){return Object.values(e.data).some(r=>r!=null&&String(r).toLowerCase().includes(t))}const $d=200;let rt=class extends Ne{constructor(){super(...arguments),this.tableId="",this.viewInstanceId="",this.columns=[],this.rows=[],this.sortColumn=null,this.sortDir=null,this.filters={},this.globalQuery="",this.localQuery="",this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,this.resizing=null,this.cellRenderers=new Map,this.scrollY=0,this.viewportHeight=0,this.loading=!1,this.externalLoading=!1,this.externalProgress=null,this.rowHeight=28,this.resizeObs=null,this.filterSaveTimer=null,this.viewInst=null,this.tableColumns=[],this.renderedCount=0,this.lastEmittedCount=-1,this.lastEmittedTotal=-1,this.VIRT_THRESHOLD=200,this.OVERSCAN=8,this.onScroll=()=>{this.scrollY=this.scrollTop},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??""},this.onTableSearch=e=>{const t=e.detail;(t.tableId===this.tableId||this.viewMode&&t.tableId===this.viewInstanceId)&&(this.localQuery=t.query??"")},this.onTableLoading=e=>{const t=e.detail;t.tableId===this.tableId&&(this.externalLoading=t.loading,this.externalProgress=t.loading&&typeof t.progress=="number"?t.progress:null)}}get viewMode(){return!!this.viewInstanceId}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:global-search",this.onGlobalSearch),document.addEventListener("easydb:table-search",this.onTableSearch),document.addEventListener("easydb:table-loading",this.onTableLoading),this.addEventListener("scroll",this.onScroll,{passive:!0}),this.resizeObs=new ResizeObserver(()=>{this.viewportHeight=this.clientHeight}),this.resizeObs.observe(this),await this.bind()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:global-search",this.onGlobalSearch),document.removeEventListener("easydb:table-search",this.onTableSearch),document.removeEventListener("easydb:table-loading",this.onTableLoading),this.removeEventListener("scroll",this.onScroll),this.resizeObs?.disconnect(),this.resizeObs=null,this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.()}async updated(e){(e.has("tableId")||e.has("viewInstanceId"))&&this.tableId&&(this.unsubscribe?.(),this.tableSubUnsub?.(),this.viewSubUnsub?.(),await this.bind());const t=this.shadowRoot?.querySelector("tbody tr:not(.spacer)");t&&t.offsetHeight>0&&(this.rowHeight=t.offsetHeight),this.viewportHeight||(this.viewportHeight=this.clientHeight),this.markEmptyCells(),this.emitCount()}emitCount(){const e=this.viewMode?this.viewInstanceId:this.tableId;if(!e)return;const t=this.renderedCount,r=this.rows.length;t===this.lastEmittedCount&&r===this.lastEmittedTotal||(this.lastEmittedCount=t,this.lastEmittedTotal=r,dl(e,t,r))}markEmptyCells(){const e=this.shadowRoot?.querySelectorAll("tbody tr:not(.spacer) > td");if(e)for(const t of e)t.className.startsWith("t-")&&t.classList.toggle("is-null",kd(t))}async bind(){if(!this.tableId)return;const e=await ye(),t=await e.store.tables.findOne(this.tableId);if(!t)return;this.viewMode?(this.tableColumns=t.columns,this.viewInst=await e.store.viewInstances.findOne(this.viewInstanceId)??null,this.applyView(),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const o=n.find(l=>l.id===this.tableId);o&&(this.tableColumns=o.columns,this.applyView())}),this.viewSubUnsub?.(),this.viewSubUnsub=e.store.viewInstances.subscribe(n=>{const o=n.find(l=>l.id===this.viewInstanceId);o&&(this.viewInst=o,this.applyView())})):(this.applyTable(t),this.tableSubUnsub?.(),this.tableSubUnsub=e.store.tables.subscribe(n=>{const o=n.find(l=>l.id===this.tableId);o&&this.applyTable(o)})),this.cellRenderers=new Map(e.registries.cellRenderers),e.events.on("app:ready",()=>this.cellRenderers=new Map(e.registries.cellRenderers));const r=e.store.rows(this.tableId);this.unsubscribe=r.subscribe(n=>this.rows=n);const i=window.setTimeout(()=>this.loading=!0,$d);try{this.rows=await r.find()}catch(n){this.rows=[],e.api.ui.dialogs.toast(`Couldn't load rows: ${n?.message??String(n)}`,{kind:"error",title:"Load failed"})}finally{window.clearTimeout(i),this.loading=!1}}applyTable(e){this.columns=e.columns,this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}applyView(){const e=this.viewInst;if(!e)return;const t=new Map(this.tableColumns.map(i=>[i.field,i])),r=e.columnWidths??{};this.columns=e.visibleColumns.map(i=>t.get(i)).filter(i=>!!i).map(i=>{const n=r[i.field];return typeof n=="number"?{...i,width:n}:i}),this.sortColumn=e.sortColumn??null,this.sortDir=e.sortColumn?e.sortAsc===!1?"desc":"asc":null,this.filterSaveTimer==null&&(this.filters={...e.filters??{}})}async setCell(e,t,r){const i=await ye();await this.commitCell(i,e,t,r)}async commitCell(e,t,r,i){const n=this.columns.find(o=>o.field===r);if(n){const o=Cd(n,i,this.rows,t.id);if(o){await e.api.ui.dialogs.alert(o,`Cannot save ${n.label}`),this.requestUpdate();return}}try{await e.store.rows(this.tableId).patch(t.id,{data:{...t.data,[r]:i},updatedAt:Date.now()})}catch(o){await e.api.ui.dialogs.alert(o?.message??"Could not save the change.","Save failed"),this.requestUpdate()}}cancelCellEdit(e,t){if(e.key!=="Escape")return;e.stopPropagation();const r=e.target;typeof t=="boolean"?r.checked=t:r.value=t,r.blur()}renderCell(e,t){const r=e.data[t.field],i=t.renderer,n=i?this.cellRenderers?.get(i):void 0;if(n){const o=hd(n);return pd`<${o}
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
          .value=${ia(r)}
          @keydown=${o=>this.cancelCellEdit(o,ia(r))}
          @change=${o=>this.setCell(e,t.field,o.target.value||null)}
        />`;case"datetime":return R`<input
          type="datetime-local"
          .value=${sa(r)}
          @keydown=${o=>this.cancelCellEdit(o,sa(r))}
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
        />`}}async deleteRow(e){const t=await ye();try{await t.store.rows(this.tableId).remove(e)}catch(r){await t.api.ui.dialogs.alert(r?.message??"Could not delete the row.","Delete failed")}}async toggleSort(e){let t;this.sortColumn!==e?t="asc":this.sortDir==="asc"?t="desc":this.sortDir==="desc"?t=null:t="asc",this.sortColumn=t?e:null,this.sortDir=t;const r=await ye(),i=t?{sortColumn:e,sortAsc:t==="asc",updatedAt:Date.now()}:{sortColumn:void 0,sortAsc:void 0,updatedAt:Date.now()};this.viewMode?await r.store.viewInstances.patch(this.viewInstanceId,i):await r.store.tables.patch(this.tableId,i)}filteredRows(){const e=Object.entries(this.filters).filter(([,n])=>n&&n.trim().length>0),t=this.globalQuery.trim(),r=this.localQuery.trim();if(e.length===0&&t.length===0&&r.length===0)return this.rows;let i=this.rows;return e.length>0&&(i=i.filter(n=>e.every(([o,l])=>String(n.data[o]??"").toLowerCase().includes(l.toLowerCase())))),r&&(i=vi(i,r,ra)),t&&(i=vi(i,t,ra)),i}sortedRows(){const e=this.filteredRows();if(!this.sortColumn||!this.sortDir)return e;const t=this.sortColumn,i=this.columns.find(l=>l.field===t)?.type??"string",n=this.sortDir==="asc"?1:-1,o=[...e];return o.sort((l,c)=>{const d=l.data[t],g=c.data[t],$=U=>U==null?0:U===""?1:2,w=$(d),S=$(g);return w!==2||S!==2?(w-S)*n:Ed(d,g,i)*n}),o}async openFilterPicker(e,t){e.stopPropagation();const r=e.currentTarget,i=Jt.instance;if(!i)return;const n=new Map;for(const c of this.rowsFacetedFor(t)){const d=c.data[t];if(d==null)continue;const g=String(d);n.set(g,(n.get(g)??0)+1)}const o=[...n.entries()].map(([c,d])=>({value:c,count:d})).sort((c,d)=>d.count-c.count||c.value.localeCompare(d.value)),l=await i.open(r.getBoundingClientRect(),o,this.filters[t]??"");l!==null&&(typeof l=="object"&&"clear"in l?this.onFilterInput(t,""):typeof l=="string"&&this.onFilterInput(t,l))}onFilterInput(e,t){this.filters={...this.filters,[e]:t},this.filterSaveTimer!=null&&window.clearTimeout(this.filterSaveTimer),this.filterSaveTimer=window.setTimeout(()=>{this.filterSaveTimer=null,this.saveFilters()},250)}get visibleColumns(){return this.columns.filter(e=>!e.hidden)}rowsFacetedFor(e){const t=Object.entries(this.filters).filter(([r,i])=>i&&i.trim().length>0&&r!==e).map(([r,i])=>[r,i.trim().toLowerCase()]);return t.length===0?this.rows:this.rows.filter(r=>t.every(([i,n])=>String(r.data[i]??"").toLowerCase().includes(n)))}computeFilterSuggestions(){const e=new Map,t=this.rows.slice(0,100);if(t.length===0)return e;const r=50,i=500;for(const n of this.visibleColumns){let o=!0;for(const c of t){const d=c.data[n.field];if(d==null)continue;if((typeof d=="string"?d:String(d)).length>=r){o=!1;break}}if(!o)continue;const l=new Set;for(const c of this.rowsFacetedFor(n.field)){const d=c.data[n.field];if(d==null||d==="")continue;const g=typeof d=="string"?d:String(d);if(!(g.length>=r)&&(l.add(g),l.size>=i))break}e.set(n.field,[...l].sort())}return e}freezeColumnWidths(){const e=this.renderRoot.querySelector("thead tr");if(!e)return;const t=Array.from(e.querySelectorAll(":scope > th")),r=this.visibleColumns,i=new Map;r.forEach((n,o)=>{if(n.width!=null)return;const l=t[o];l&&i.set(n.field,Math.round(l.getBoundingClientRect().width))}),i.size!==0&&(this.columns=this.columns.map(n=>i.has(n.field)?{...n,width:i.get(n.field)}:n))}onResizeStart(e,t,r){e.preventDefault(),e.stopPropagation();const i=r.offsetWidth;this.freezeColumnWidths(),this.resizing={field:t,startX:e.clientX,startW:i};const n=l=>{if(!this.resizing)return;const c=l.clientX-this.resizing.startX,d=Math.max(40,this.resizing.startW+c);this.columns=this.columns.map(g=>g.field===this.resizing.field?{...g,width:d}:g)},o=async()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",o);const l=this.resizing?.field;if(this.resizing=null,!l)return;const c=await ye();if(this.viewMode){const d={...this.viewInst?.columnWidths??{}};for(const g of this.columns)typeof g.width=="number"&&(d[g.field]=g.width);await c.store.viewInstances.patch(this.viewInstanceId,{columnWidths:d,updatedAt:Date.now()})}else await c.store.tables.patch(this.tableId,{columns:this.columns,updatedAt:Date.now()})};window.addEventListener("pointermove",n),window.addEventListener("pointerup",o)}onColDragStart(e,t){this.dragSourceField=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-col",t))}onColDragOver(e,t,r){if(!this.dragSourceField||this.dragSourceField===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientX<i.left+i.width/2;this.dropTargetField=t,this.dropEdge=n?"before":"after"}onColDragLeave(e){this.dropTargetField===e&&(this.dropTargetField=null,this.dropEdge=null)}async onColDrop(e,t){e.preventDefault();const r=this.dragSourceField,i=this.dropEdge;if(this.dragSourceField=null,this.dropTargetField=null,this.dropEdge=null,!r||r===t||!i)return;const n=[...this.columns],o=n.findIndex(g=>g.field===r);if(o<0)return;const[l]=n.splice(o,1);let c=n.findIndex(g=>g.field===t);if(c<0){n.splice(o,0,l);return}i==="after"&&(c+=1),n.splice(c,0,l);const d=await ye();this.viewMode?await d.store.viewInstances.patch(this.viewInstanceId,{visibleColumns:n.map(g=>g.field),updatedAt:Date.now()}):await d.store.tables.patch(this.tableId,{columns:n,updatedAt:Date.now()})}async saveFilters(){const e=await ye(),t={};for(const[i,n]of Object.entries(this.filters))n&&n.trim().length>0&&(t[i]=n);if(this.viewMode){await e.store.viewInstances.patch(this.viewInstanceId,{filters:t,updatedAt:Date.now()});return}const r=Object.keys(t).length===0?void 0:t;await e.store.tables.patch(this.tableId,{filters:r,updatedAt:Date.now()})}virtualSlice(e){if(e.length<=this.VIRT_THRESHOLD||this.viewportHeight===0)return{slice:e,topPad:0,bottomPad:0};const t=this.rowHeight,r=Math.ceil(this.viewportHeight/t)+this.OVERSCAN*2,i=Math.max(0,Math.floor(this.scrollY/t)-this.OVERSCAN),n=Math.min(e.length,i+r);return{slice:e.slice(i,n),topPad:i*t,bottomPad:(e.length-n)*t}}render(){const e=this.sortedRows();this.renderedCount=e.length;const t=this.visibleColumns,{slice:r,topPad:i,bottomPad:n}=this.virtualSlice(e),o=this.computeFilterSuggestions(),l=this.externalLoading?this.externalProgress:null;return R`
      ${this.loading||this.externalLoading?R`<div
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
          ${t.map(c=>R`<col style=${c.width!=null?`width: ${c.width}px`:""} />`)}
          <col style="width:2rem" />
        </colgroup>
        <thead>
          <tr>
            ${t.map(c=>{const d=c.sortable!==!1,g=this.sortColumn===c.field&&this.sortDir,$=d?g==="asc"?"▲":g==="desc"?"▼":"⇅":"",w=`t-${c.type}`,S=this.dragSourceField===c.field,U=this.dropTargetField===c.field,N=U&&this.dropEdge==="before"?" drop-before":U&&this.dropEdge==="after"?" drop-after":"",z=(c.description?`${c.description}
`:"")+(c.units?`Units: ${c.units}
`:"")+`${c.field} — ${d?"click to sort, ":"not sortable · "}drag to reorder`;return R`
                <th
                  class=${`${w}${g?" sorted":""}${S?" drag-source":""}${N}${d?"":" no-sort"}`}
                  title=${z}
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
                      >${c.label}${c.units?R`<span class="col-units"> (${c.units})</span>`:""}</span
                    ><span class="sort-icon">${$}</span>
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
            ${t.map(c=>{const d=o.get(c.field)??[];return R`
                <th>
                  <filter-combobox
                    .value=${this.filters[c.field]??""}
                    .options=${d}
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
                ${t.map(d=>R`<td class=${`t-${d.type}${d.renderer?` r-${d.renderer}`:""}`}>
                      ${this.renderCell(c,d)}
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
    `];ut([Ht({type:String})],rt.prototype,"tableId",2);ut([Ht({type:String})],rt.prototype,"viewInstanceId",2);ut([W()],rt.prototype,"columns",2);ut([W()],rt.prototype,"rows",2);ut([W()],rt.prototype,"sortColumn",2);ut([W()],rt.prototype,"sortDir",2);ut([W()],rt.prototype,"filters",2);ut([W()],rt.prototype,"globalQuery",2);ut([W()],rt.prototype,"localQuery",2);ut([W()],rt.prototype,"dragSourceField",2);ut([W()],rt.prototype,"dropTargetField",2);ut([W()],rt.prototype,"dropEdge",2);ut([W()],rt.prototype,"resizing",2);ut([W()],rt.prototype,"cellRenderers",2);ut([W()],rt.prototype,"scrollY",2);ut([W()],rt.prototype,"viewportHeight",2);ut([W()],rt.prototype,"loading",2);ut([W()],rt.prototype,"externalLoading",2);ut([W()],rt.prototype,"externalProgress",2);rt=ut([nt("data-table")],rt);function kd(e){if((e.textContent??"").trim()!==""||e.querySelector("img"))return!1;const t=e.querySelectorAll("input");for(const r of Array.from(t))if(r.type==="checkbox"||r.value!=="")return!1;return!0}function Cd(e,t,r,i){if(e.notnull){if(t==null)return`${e.label} cannot be empty.`;if(typeof t=="string"&&t.trim().length===0)return`${e.label} cannot be empty.`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label} must be at most ${e.max} characters (got ${t.length}).`;if(typeof t=="number"&&t>e.max)return`${e.label} must be at most ${e.max} (got ${t}).`}return e.unique&&t!==null&&t!==void 0&&t!==""&&r.find(o=>o.id!==i&&o.data[e.field]===t)?`${e.label} must be unique. Another row already has "${String(t)}".`:null}function ia(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function sa(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}function Ed(e,t,r){switch(r){case"number":{const i=Number(e),n=Number(t);return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}case"boolean":return(e?1:0)-(t?1:0);case"date":{const i=new Date(String(e)).getTime(),n=new Date(String(t)).getTime();return Number.isNaN(i)||Number.isNaN(n)?String(e).localeCompare(String(t)):i-n}default:return String(e).localeCompare(String(t),void 0,{numeric:!0,sensitivity:"base"})}}function ln(e,t,r){document.dispatchEvent(new CustomEvent("easydb:table-loading",{detail:{tableId:e,loading:t,progress:r}}))}class qt extends Error{constructor(t,r){const i=t?.error||t?.errors&&t.errors.join("; ")||"Datasette request failed";super(i),this.name="DatasetteError",this.status=r??t?.status,this.errors=t?.errors||(t?.error?[t.error]:[])}}function yn(e){const t=new URL(String(e).trim());t.pathname=t.pathname.replace(/\.(json|csv)$/i,"");const r=t.pathname.split("/").filter(Boolean),i={};for(const[c,d]of t.searchParams)i[c]=d;let n,o=null,l=null;if(r.length>=2){l=decodeURIComponent(r[r.length-1]),o=decodeURIComponent(r[r.length-2]);const c=r.slice(0,r.length-2).join("/");n=t.origin+(c?"/"+c:"")}else r.length===1&&(o=decodeURIComponent(r[0])),n=t.origin;return{base:n,db:o,table:l,query:i}}function ir(e,t={}){const r=new URL(`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}.json`);for(const[i,n]of Object.entries({...e.query,...t}))n!=null&&r.searchParams.set(i,String(n));return r.toString()}function Sd(e){const t=e?.next_url??null,r=e?.next,i=r!=null&&r!==!1?String(r):null,n=Array.isArray(e?.rows)?e.rows:[],o=Array.isArray(e?.columns)?e.columns:null;return{rows:n.map(c=>Array.isArray(c)&&o?Object.fromEntries(o.map((d,g)=>[d,c[g]])):c),nextUrl:t,nextToken:i,hasMore:t!=null||i!=null,truncated:e?.truncated===!0}}function _d(e,t=""){const r=String(e||"").toUpperCase();return r.includes("INT")?/^(is|has|can)_|_flag$|^enabled$|^active$/i.test(t)?"boolean":"number":r.includes("REAL")||r.includes("FLOA")||r.includes("DOUB")||r.includes("NUM")||r.includes("DEC")?"number":r.includes("BLOB")?"string":/(_at|_date|^date$|^created$|^updated$|^modified$)$/i.test(t)?"datetime":"string"}function oa(e){const t=Array.isArray(e?.primary_keys)?e.primary_keys.slice():[],r=Array.isArray(e?.columns)?e.columns.slice():[],i={},n=e?.column_details;if(Array.isArray(n))for(const c of n)i[c.column??c.name]=c;else n&&typeof n=="object"&&Object.assign(i,n);for(const c of r)c in i||(i[c]={});const l=(r.length?r:Object.keys(i)).map(c=>{const d=i[c]||{},g=d.is_pk===!0||d.is_pk===1||t.includes(c),$={field:c,label:fl(c),type:_d(d.sqlite_type??d.type,c)};return(d.notnull===!0||d.notnull===1||g)&&($.notnull=!0),g&&($.unique=!0),(d.hidden===!0||d.hidden===1)&&($.hidden=!0),d.default!=null&&d.default!==""&&($.default=d.default),$});if(t.length===0){const c=l.filter(d=>d.unique).map(d=>d.field);c.length&&t.push(...c)}return{columns:l,pks:t}}function fl(e){return String(e).replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()).trim()}function Ii(e){const t=[],r=new Set;for(const i of e)for(const n of Object.keys(i))r.has(n)||(r.add(n),t.push(n));return t.map(i=>({field:i,label:fl(i),type:Td(e.map(n=>n[i]))}))}function Td(e){const t=e.filter(r=>r!=null&&r!=="");return t.length===0?"string":t.every(r=>typeof r=="boolean")?"boolean":t.every(r=>typeof r=="number"&&Number.isFinite(r))?"number":t.every(r=>typeof r=="string"&&Ad(r))?"datetime":"string"}function Ad(e){return/^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2})?/.test(e)}function Pd(e){const t=new TextEncoder().encode(String(e));let r="";for(const i of t){const n=String.fromCharCode(i);/[A-Za-z0-9_-]/.test(n)?r+=n:r+="~"+i.toString(16).toUpperCase().padStart(2,"0")}return r}function Id(e,t){return!t||t.length===0?null:t.map(r=>Pd(e[r])).join(",")}function Dd(e){const t=Array.isArray(e)?e:Array.isArray(e?.databases)?e.databases:[],r=[];for(const i of t){if(typeof i=="string"){r.push(i);continue}if(i&&typeof i=="object"&&typeof i.name=="string"){if(i.name==="_memory")continue;r.push(typeof i.route=="string"&&i.route?i.route:i.name)}}return r}function Rd(e,t){const r=Array.isArray(e)?e:Array.isArray(e?.tables)?e.tables:[],i=[];for(const n of r){if(typeof n=="string"){i.push({db:t,table:n,count:null,hidden:!1,pks:[]});continue}n&&typeof n=="object"&&typeof n.name=="string"&&i.push({db:t,table:n.name,count:typeof n.count=="number"?n.count:null,hidden:n.hidden===!0,pks:Array.isArray(n.primary_keys)?n.primary_keys:[]})}return i}async function Pn(e,t){let r;try{r=await e(t)}catch(n){const o=n?.message||"network error";throw new qt({error:`Couldn't reach ${t} (${o}). If this is a Datasette instance, it must be served with --cors for direct browser access — otherwise configure an eda sync server to proxy the request.`},0)}if(r&&r.ok===!1){let n=null;try{n=await r.json()}catch{}throw new qt(n&&typeof n=="object"?n:{error:`HTTP ${r.status} for ${t}`},r.status)}const i=await r.json();if(i&&i.ok===!1)throw new qt(i,r.status);return i}async function pl(e,t){return Dd(await Pn(e,`${t}/-/databases.json`))}async function aa(e,t,r){return Rd(await Pn(e,`${t}/${encodeURIComponent(r)}.json`),r)}async function Di(e,t){const r=ir(t,{_extra:"column_details"}),i=await Pn(e,r);let{columns:n,pks:o}=oa(i),l=!!i&&i.column_details!=null,c=i?.count??null,d=i;if(n.length===0){const g=ir(t,{_extra:"columns"}),$=await Pn(e,g);({columns:n,pks:o}=oa($)),l=!!$&&$.column_details!=null,c=$?.count??c,d=$}return{columns:n,pks:o,count:c,typed:l,raw:d}}async function _s(e,t){if(!t.db||!t.table)throw new Error("probeSingleTable: URL must name a database and a table");const r=await Di(e,t);return{db:t.db,table:t.table,count:r.count,hidden:!1,pks:r.pks}}function Od(e,t,r){const i=e&&typeof e=="object"?e:{},n=t&&r&&i.databases?.[t]?.tables?.[r]||t&&r&&i.databases?.[t]?.tables?.[r.toLowerCase()]||{},o=t&&i.databases?.[t]||{},l=N=>n[N]??o[N]??i[N],c={columns:{},units:{}};typeof n.sort=="string"&&(c.sort=n.sort),typeof n.sort_desc=="string"&&(c.sortDesc=n.sort_desc),typeof n.size=="number"&&(c.size=n.size),Array.isArray(n.sortable_columns)&&(c.sortableColumns=n.sortable_columns.slice()),typeof n.label_column=="string"&&(c.labelColumn=n.label_column),n.hidden===!0&&(c.hidden=!0),typeof n.description=="string"&&(c.description=n.description),typeof n.description_html=="string"&&(c.descriptionHtml=n.description_html);const d=l("source"),g=l("source_url"),$=l("license"),w=l("license_url"),S=l("about"),U=l("about_url");if(typeof d=="string"&&(c.source=d),typeof g=="string"&&(c.sourceUrl=g),typeof $=="string"&&(c.license=$),typeof w=="string"&&(c.licenseUrl=w),typeof S=="string"&&(c.about=S),typeof U=="string"&&(c.aboutUrl=U),n.columns&&typeof n.columns=="object")for(const[N,z]of Object.entries(n.columns))typeof z=="string"&&(c.columns[N]=z);if(n.units&&typeof n.units=="object")for(const[N,z]of Object.entries(n.units))typeof z=="string"&&(c.units[N]=z);return c}const la=new Map;async function jd(e,t){let r=la.get(t);return r||(r=Pn(e,`${t}/-/metadata.json`).catch(()=>({})),la.set(t,r)),r}async function Vs(e,t){const r=await jd(e,t.base);return Od(r,t.db,t.table)}function Fd(e){const t={};return e.description!=null&&(t.description=e.description),e.descriptionHtml!=null&&(t.descriptionHtml=e.descriptionHtml),e.source!=null&&(t.source=e.source),e.sourceUrl!=null&&(t.sourceUrl=e.sourceUrl),e.license!=null&&(t.license=e.license),e.licenseUrl!=null&&(t.licenseUrl=e.licenseUrl),e.about!=null&&(t.about=e.about),e.aboutUrl!=null&&(t.aboutUrl=e.aboutUrl),Object.keys(t).length>0?t:void 0}function Gs(e,t){const r=e.sortableColumns!=null?new Set(e.sortableColumns):null,i=t.map(c=>{const d=e.columns[c.field],g=e.units[c.field],$=r?r.has(c.field):void 0;return d==null&&g==null&&$===void 0?c:{...c,...d!=null?{description:d}:{},...g!=null?{units:g}:{},...$!==void 0?{sortable:$}:{}}}),n=new Set(t.map(c=>c.field)),o={};e.sort&&n.has(e.sort)?(o.sortColumn=e.sort,o.sortAsc=!0):e.sortDesc&&n.has(e.sortDesc)&&(o.sortColumn=e.sortDesc,o.sortAsc=!1);const l=Fd(e);return l&&(o.info=l),e.labelColumn&&n.has(e.labelColumn)&&(o.labelColumn=e.labelColumn),{columns:i,patch:o}}function Ys(e,t){if(t.length===0)return e;const r=new Map(Ii(t).map(i=>[i.field,i.type]));return e.map(i=>{if(i.type!=="string")return i;const n=r.get(i.field);return n&&n!=="string"?{...i,type:n}:i})}async function Rr(e,t,r={}){const i=r.maxRows??1e4,o={_size:r.pageSize??1e3,...r.extraParams||{}};let l=r.startUrl??ir(t,o);const c=[];let d=!1,g=!1,$=0,w,S;for(;l;){let U;try{U=await Pn(e,l)}catch(q){if(c.length===0&&!r.startUrl)throw q;w=q instanceof qt&&q.status?`stopped after ${c.length} rows: HTTP ${q.status}`:`stopped after ${c.length} rows: ${q?.message??String(q)}`,g=!0,S=l;break}const N=Sd(U);c.push(...N.rows),d=d||N.truncated,$+=1,r.onProgress?.(c.length);const z=N.nextUrl!=null?N.nextUrl:N.nextToken!=null?ir(t,{_next:N.nextToken}):null;z&&c.length<i&&N.rows.length>0?l=z:(g=z!=null&&N.rows.length>0,g&&(S=z??void 0),l=null)}return{rows:c,truncated:d,hasMore:g,pages:$,error:w,nextUrl:S}}function zd(e){const t={"Content-Type":"application/json"};return e&&(t.Authorization=`Bearer ${e}`),t}function ml(e,t){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/-/${t}`}function gl(e,t,r){return`${e.base}/${encodeURIComponent(e.db)}/${encodeURIComponent(e.table)}/${t}/-/${r}`}async function Ri(e,t,r,i){let n;try{n=await e(t,{method:"POST",headers:zd(i),body:JSON.stringify(r)})}catch(l){throw new qt({error:`Couldn't reach ${t} (${l?.message||"network error"}).`},0)}if(n&&n.ok===!1){let l=null;try{l=await n.json()}catch{}throw new qt(l&&typeof l=="object"?l:{error:`HTTP ${n.status} for ${t}`},n.status)}const o=await n.json();if(o&&o.ok===!1)throw new qt(o,n.status);return o}async function ca(e,t,r,i={}){const n=await Ri(e,ml(t,"insert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function Ld(e,t,r,i,n={}){const o=await Ri(e,gl(t,r,"update"),{update:i,return:!0},n.token);return o&&typeof o.row=="object"&&o.row?o.row:Array.isArray(o?.rows)&&o.rows[0]?o.rows[0]:null}async function ua(e,t,r,i={}){await Ri(e,gl(t,r,"delete"),{},i.token)}async function Md(e,t,r,i={}){const n=await Ri(e,ml(t,"upsert"),{rows:r,return:!0},i.token);return Array.isArray(n?.rows)?n.rows:[]}async function Bd(e,t){const r=ir(t,{_extra:"primary_keys"}),i=await Pn(e,r);return Array.isArray(i?.primary_keys)?i.primary_keys:[]}async function bl(e,t){try{const r=await Pn(e,ir(t,{_extra:"count"}));return typeof r?.count=="number"?r.count:null}catch{return null}}async function yl(e,t,r={}){const i=r.token?{headers:{Authorization:`Bearer ${r.token}`}}:void 0;try{const n=await e(`${t}/-/versions.json`,i);if(n&&n.ok===!1)return{reachable:!1,version:null,actor:null,writable:!1,error:`HTTP ${n.status}`};const o=await n.json(),l=o?.datasette?.version??o?.version??null;let c=null;try{c=(await(await e(`${t}/-/actor.json`,i)).json())?.actor??null}catch{}return{reachable:!0,version:l,actor:c,writable:!!(r.token&&c)}}catch(n){return{reachable:!1,version:null,actor:null,writable:!1,error:n?.message||"unreachable"}}}function sr(e,t){return t?(r,i)=>{const n=(i??{}).headers??{};return e(r,{...i??{},headers:{...n,Authorization:`Bearer ${t}`}})}:e}class Nd extends Error{constructor(t){super(`This Datasette table is read-only — ${t} is not permitted.`),this.name="SourceReadOnlyError"}}function wl(e){return`datasette:token:${e}`}function Ud(e,t){for(const[r,i]of Object.entries(t))if(r!=="data"&&e[r]!==i)return!1;return!0}function qd(e,t){const r=e.source,i=r?.config??{},n={base:i.base,db:i.db,table:i.table,query:{}},o=Array.isArray(i.pks)&&i.pks.length>0?i.pks:["rowid"],l=r?.writable===!0,c=i.maxRows??1e4,d=i.pollIntervalMs??0,g=(ie,V)=>t.backend.fetch(ie,V);async function $(){const V=(await t.settings.findOne(wl(i.base)))?.value;return typeof V=="string"&&V.length>0?V:void 0}const w=async(ie,V)=>sr(g,await $())(ie,V);function S(ie){return{id:Id(ie,o)??Hd(),tableId:e.id,data:ie,updatedAt:Date.now()}}function U(ie){if(!l)throw new Nd(ie)}function N(ie){const V={};for(const[J,ue]of Object.entries(ie))o.includes(J)||(V[J]=ue);return V}const z=new Set;let q=[],G=!1,de=null;function ee(){return de||(de=(async()=>{try{const{rows:ie}=await Rr(w,n,{maxRows:c});q=ie.map(S),G=!0;for(const V of z)V(q);return q}finally{de=null}})(),de)}return{async find(ie){const V=G?q:await ee();return!ie||Object.keys(ie).length===0?V:V.filter(J=>Ud(J,ie))},async findOne(ie){return(G?q:await ee()).find(J=>J.id===ie)??null},async insert(ie){U("insert");const[V]=await ca(w,n,[ie.data]),J=S(V??ie.data);return t.events.emit("row:created",{tableId:e.id,row:J}),ee(),J},async bulkInsert(ie){if(ie.length===0)return[];U("insert");const V=await ca(w,n,ie.map(ue=>ue.data)),J=(V.length?V:ie.map(ue=>ue.data)).map(S);return ee(),J},async upsert(ie){U("upsert");const[V]=await Md(w,n,[ie.data]),J=S(V??ie.data);return ee(),J},async patch(ie,V){U("update");const J=V.data,ue=N(J??{}),we=await Ld(w,n,ie,ue),Ie=S(we??{...J??{}});return t.events.emit("row:updated",{tableId:e.id,row:Ie,prev:Ie}),ee(),Ie},async remove(ie){U("delete"),await ua(w,n,ie),t.events.emit("row:deleted",{tableId:e.id,rowId:ie}),ee()},async bulkRemove(ie){if(ie.length!==0){U("delete");for(const V of ie)await ua(w,n,V);ee()}},subscribe(ie){z.add(ie),G?ie(q):ee();let V=null;return d>0&&(V=setInterval(()=>void ee(),d)),()=>{z.delete(ie),V&&clearInterval(V)}},async refresh(){await ee()}}}function Hd(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const $i=e=>e.replace(/^https?:\/\//,""),Wd=e=>new Promise(t=>setTimeout(t,e));function Kd(){const e=globalThis.__eda_resumeDelayMs;return typeof e=="number"&&e>=0?e:6e4}function Vd(e,t,r){return`${e}/${encodeURIComponent(t)}/${encodeURIComponent(r)}`}function Xs(e,t,r,i){const n={...e.info??{}};return!n.source&&!n.sourceUrl&&(n.source=`${$i(t)}/${r}/${i}`,n.sourceUrl=Vd(t,r,i)),{...e,info:n}}function Qs(e,t,r,i){if(!(!e||!t))return{nextUrl:t,loadedRows:r,...i!=null?{totalCount:i}:{}}}async function vl(e,t,r,i={}){if(t.db&&t.table)return[await _s(e,t)];let n=[];if(t.db){if(n.push(...await aa(e,t.base,t.db)),i.skipPicker)return n.filter(c=>!c.hidden)}else{const c=await pl(e,t.base);if(c.length===0)return[];let d=c;if(c.length>1){const g=await Ss(c.map($=>({name:$,size:null})),{title:`${r} from Datasette`,message:`Choose databases on ${$i(t.base)}, then their tables.`,confirmLabel:"Next: choose tables"});if(!g)return null;d=g.map($=>c[$])}for(const g of d)try{n.push(...await aa(e,t.base,g))}catch{}}if(n.length===0)return[];const o=new Set(n.map(c=>c.db)).size>1,l=await Ss(n.map(c=>({name:o?`${c.db}/${c.table}`:c.table,size:c.count,detail:o?void 0:c.db,hidden:c.hidden})),{title:`${r} from Datasette`,message:`Choose tables to ${r.toLowerCase()} from ${$i(t.base)}.`,confirmLabel:r});return l?l.map(c=>n[c]):null}const Gd='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4A3.1 3.1 0 0 1 17 15h-4v1.9h4a5 5 0 0 0 0-10z"/></svg>',Yd={id:"datasette-source",name:"Datasette",type:"source",version:"0.2.0",description:"Import tables from any online Datasette instance, database, or single table by URL",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/datasette-source.ts"},Nt={maxImportRows:1e4,pageSize:1e3},Xd="https://latest.datasette.io/fixtures/facetable";function Qd(e){e.ui.registerHeaderButton({id:"datasette:connect",label:"Connect",icon:Gd,tooltip:"Connect a live, editable Datasette table",onClick:()=>nh(e)}),e.ui.registerTableButton({id:"datasette:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from its Datasette backend",visible:t=>t.source?.type==="datasette"||t.origin?.type==="datasette",onClick:(t,{tableId:r})=>oh(t,r)}),e.ui.registerTableButton({id:"datasette:resume",label:"Resume import",icon:"sync_problem",tooltip:"Import was interrupted — click to resume from where it stopped",danger:!0,visible:t=>t.origin?.type==="datasette"&&t.importResume!=null,onClick:(t,{tableId:r})=>lh(t,r)}),typeof e.registerRowSource=="function"&&e.registerRowSource({type:"datasette",create:qd}),e.ui.registerUrlSource({id:"datasette",label:"Datasette (table or instance)…",async run(t,{url:r}){const i=r||await t.ui.dialogs.prompt(`Datasette URL — a single table, a database, or an instance root.

e.g. ${Xd}`,"","Import from Datasette");i&&await da(t,i)}}),e.ui.registerDropHandler(async(t,r)=>{const i=t.dataTransfer?.getData("text/plain")||"";return Jd(i)?(t.preventDefault(),await da(r,i),!0):!1})}async function da(e,t){try{await Js(e,t)}catch(r){let i;r instanceof qt?i=r.status?`Datasette error (${r.status}): ${r.message}`:r.message:i=`Could not import: ${r?.message??r}`,await e.ui.dialogs.alert(i,"Datasette import failed")}}function Jd(e){try{const t=yn(e);return!!(t.db&&t.table)}catch{return!1}}function xl(e,t){if(!e.has(t))return t;for(let r=2;;r++){const i=`${t} (${r})`;if(!e.has(i))return i}}async function Js(e,t,r={}){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=yn(t),l=await vl(N=>e.backend.fetch(N),n,"Import",{skipPicker:r.skipTablePicker});if(l===null)return;if(l.length===0){await e.ui.dialogs.alert("No tables found at that Datasette URL.","Datasette import");return}const c=[];let d=0;for(const N of l){const z={base:n.base,db:N.db,table:N.table,query:{}},q=await Zd(e,i,z);if(q.skipped){d+=1;continue}c.push({tableId:q.tableId,ref:z,overwrite:q.overwrite,knownCount:N.count})}let g=0,$=0;const w=[],S=[],U=[];for(const N of c)try{const z=await eh(e,N.tableId,N.ref,N.overwrite,N.knownCount);g+=1,$+=z.rowCount,z.error?S.push(`${N.ref.db}/${N.ref.table} (${z.error})`):(z.hasMore||z.truncated)&&w.push(`${N.ref.db}/${N.ref.table}`)}catch(z){U.push(`${N.ref.db}/${N.ref.table}: ${z?.message??String(z)}`)}th(e,{imported:g,skipped:d,totalRows:$,capped:w,partial:S,failed:U,requested:l.length})}async function Zd(e,t,r){const i=`${r.db}/${r.table}`,n={type:"datasette",url:`${r.base}/${encodeURIComponent(r.db)}/${encodeURIComponent(r.table)}`},o=(await e.store.tables.find()).filter(g=>g.workspaceId===t),l=o.find(g=>g.name.toLowerCase()===i.toLowerCase());let c=i;if(l){const g=await e.ui.dialogs.choice(`A table named "${i}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Import — table already exists");if(!g||g==="Skip")return{tableId:"",overwrite:!1,skipped:!0};if(g==="Overwrite")return await e.store.tables.patch(l.id,{origin:n,updatedAt:Date.now()}),{tableId:l.id,overwrite:!0};c=xl(new Set(o.map($=>$.name)),i)}const d=Or();return await e.store.tables.insert({id:d,workspaceId:t,name:c,code:kl(`${r.db}-${r.table}`),columns:[],view:"table",origin:n,updatedAt:Date.now()}),{tableId:d,overwrite:!1}}async function eh(e,t,r,i,n=null){const o=`${r.db}/${r.table}`,l=c=>e.backend.fetch(c);ln(t,!0);try{let c=[],d=n,g=!1;try{const b=await Di(l,r);c=b.columns,d=d??b.count,g=b.typed}catch{}d==null&&(d=await bl(l,r));const $=d&&d>0?Math.min(d,Nt.maxImportRows):0,w=[];let S=!1,U=!1,N=0,z,q,G;for(;;){const b=await Rr(l,r,{maxRows:Math.max(0,Nt.maxImportRows-w.length),pageSize:Nt.pageSize,...G?{startUrl:G}:{},onProgress:he=>{$>0&&ln(t,!0,Math.min(1,(w.length+he)/$))}});if(w.push(...b.rows),S=S||b.truncated,N+=b.pages,U=b.hasMore,z=b.error,q=b.nextUrl,!b.error||!b.nextUrl||w.length>=Nt.maxImportRows||await e.ui.dialogs.choice(`Import of "${o}" paused after ${w.length.toLocaleString()} rows (${b.error}). Datasette may be rate-limiting a large import. Wait 60 seconds and resume from where it stopped, or cancel and keep the rows imported so far (you can resume later from the table's footer)?`,["Resume in 60s","Cancel"],"Import paused — rate limited?")!=="Resume in 60s")break;ln(t,!0),e.ui.dialogs.toast(`Resuming "${o}" in 60s…`,{kind:"info",title:"Import paused"}),await Wd(Kd()),G=b.nextUrl,z=void 0,q=void 0}let ee=c.length===0?Ii(w):g?c:Ys(c,w),ie={};try{const b=await Vs(l,r),C=Gs(b,ee);ee=C.columns,ie=C.patch}catch{}ie=Xs(ie,r.base,r.db,r.table);const V=await e.store.tables.findOne(t),J=V?.columns??[],ue=J.length===0,{columns:we}=cl(J,ee,V?.deletedColumns),Ie=Date.now();e.events.emit("import:before",{source:"datasette",tableId:t});const $e=Qs(z,q,w.length,d),m=ue?{columns:we,...ie,importResume:$e,updatedAt:Ie}:{columns:we,...ie.info?{info:ie.info}:{},importResume:$e,updatedAt:Ie};await e.store.tables.patch(t,m);const v=e.store.rows(t);if(i){const b=await v.find();await v.bulkRemove(b.map(C=>C.id))}const E=w.map(b=>({id:Or(),tableId:t,data:b,updatedAt:Ie}));return await v.bulkInsert(E),e.events.emit("import:after",{source:"datasette",tableId:t,rowCount:w.length}),{name:o,rowCount:w.length,hasMore:U,truncated:S,pages:N,count:d,error:z}}finally{ln(t,!1)}}function th(e,t){const r=`${t.totalRows.toLocaleString()} row${t.totalRows===1?"":"s"}`,i=`${t.imported} table${t.imported===1?"":"s"}`,n=t.skipped>0?` ${t.skipped} skipped (already existed).`:"";if(t.imported===0&&t.failed.length===0&&t.skipped>0){e.ui.dialogs.toast(`Nothing imported — ${t.skipped} table(s) skipped (already existed).`,{kind:"info",title:"Datasette import"});return}if(t.failed.length>0){e.ui.dialogs.toast(`Imported ${i} (${r});${n} ${t.failed.length} failed:
${t.failed.join(`
`)}`,{kind:"error",title:"Datasette import"});return}if(t.partial.length>0){e.ui.dialogs.toast(`Imported ${i} (${r}).${n} ${t.partial.length} loaded partially (stopped early — the server may have rate-limited us): ${t.partial.join(", ")}. Use Refresh to fetch the rest.`,{kind:"warning",title:"Datasette import"});return}if(t.capped.length>0){e.ui.dialogs.toast(`Imported ${i} (${r}).${n} ${t.capped.length} capped at ${Nt.maxImportRows} — more available: ${t.capped.join(", ")}.`,{kind:"warning",title:"Datasette import"});return}e.ui.dialogs.toast(`Imported ${i} (${r}) from Datasette.${n}`,{kind:"success",title:"Datasette import"})}async function nh(e){const t=Ut.instance??rh(),r=(n,o)=>e.backend.fetch(n,o),i=await t.open({initialUrl:"https://datasette.io",async onTest(n,o){const l=yn(n),c=await yl(r,l.base,{token:o||void 0});if(l.db&&l.table){await _s(sr(r,o||void 0),l);const g=c.version?` (Datasette ${c.version})`:"";return c.writable?`Reachable${g} — table found, signed in, read-write.`:`Reachable${g} — table found, read-only (no token / not authenticated).`}if(!c.reachable)return`Unreachable: ${c.error??"no response"}`;const d=c.version?` (Datasette ${c.version})`:"";return c.writable?`Reachable${d} — signed in, read-write.`:`Reachable${d} — read-only (no token / not authenticated).`},async onConnect(n,o){const l=yn(n);l.db&&l.table&&await _s(sr(r,o||void 0),l)}});if(i)try{await $l(e,i.url,i.token)}catch(n){const o=n instanceof qt?n.message:n?.message??String(n);await e.ui.dialogs.alert(o,"Connect Datasette failed")}}function rh(){const e=document.createElement("datasette-connect-dialog");return document.body.appendChild(e),e}async function $l(e,t,r){const i=e.workspaceId();if(!i)throw new Error("datasette-source: no active workspace");const n=yn(t),o=(w,S)=>e.backend.fetch(w,S),l=sr(o,r||void 0),c=await yl(o,n.base,{token:r||void 0});r&&await e.store.settings.upsert({key:wl(n.base),value:r});let d;try{d=await vl(l,n,"Connect")}catch(w){const S=w instanceof qt?w.message:w?.message??String(w);throw new Error(`Couldn't read tables from ${$i(n.base)}: ${S}`)}if(d===null)return;if(d.length===0){await e.ui.dialogs.alert("No tables found at that URL.","Connect Datasette");return}const g=[];for(const w of d){const S=await ih(e,i,n.base,w,c.writable,r);S!==null&&g.push({tableId:S,c:w})}if(g.length===0)return;const $=c.writable?"read-write":"read-only";e.ui.dialogs.toast(`Connected ${g.length} live table${g.length===1?"":"s"} from Datasette (${$}).`,{kind:"success",title:"Connect Datasette"});for(const{tableId:w,c:S}of g)sh(e,w,n.base,S,r)}async function ih(e,t,r,i,n,o){const l=(await e.store.tables.find()).filter(S=>S.workspaceId===t);let c=`${i.db}/${i.table}`,d=l.find(S=>{const U=S.source?.config;return S.source?.type==="datasette"&&U?.base===r&&U?.db===i.db&&U?.table===i.table});if(!d){const S=l.find(U=>U.name.toLowerCase()===c.toLowerCase());if(S){const U=await e.ui.dialogs.choice(`A table named "${c}" already exists in this workspace.`,["Overwrite","Rename","Skip"],"Connect — table already exists");if(!U||U==="Skip")return null;U==="Overwrite"?d=S:c=xl(new Set(l.map(N=>N.name)),c)}}let g=i.pks??[];if(g.length===0){const S=sr((U,N)=>e.backend.fetch(U,N),o||void 0);try{g=await Bd(S,{base:r,db:i.db,table:i.table,query:{}})}catch{g=[]}}const $=d?.id??Or(),w={...d??{},id:$,workspaceId:t,name:c,code:kl(`${i.db}-${i.table}`),columns:d?.columns??[],view:d?.view??"table",source:{type:"datasette",writable:n,config:{base:r,db:i.db,table:i.table,pks:g}},updatedAt:Date.now()};return d?await e.store.tables.upsert(w):await e.store.tables.insert(w),$}async function sh(e,t,r,i,n){const o={base:r,db:i.db,table:i.table,query:{}},l=sr((c,d)=>e.backend.fetch(c,d),n||void 0);try{let c=[],d=!1;try{const z=await Di(l,o);c=z.columns,d=z.typed}catch{}const{rows:g}=await Rr(l,o,{maxRows:50,pageSize:50}),$=c.length===0?Ii(g):d?c:Ys(c,g);if($.length===0)return;const w=await e.store.tables.findOne(t);if(!w)return;const S=w.source?.config?.pks??[];let U=$.map(z=>S.includes(z.field)?{...z,unique:!0,notnull:!0}:z),N={};try{const z=await Vs(l,o),q=Gs(z,U);U=q.columns,N=q.patch}catch{}N=Xs(N,o.base,i.db,i.table),await e.store.tables.patch(t,{columns:U,...N,updatedAt:Date.now()})}catch{}}async function oh(e,t){const r=await e.store.tables.findOne(t);if(r)try{if(r.source?.type==="datasette"){const i=e.store.rows(t);typeof i.refresh=="function"&&await i.refresh();const n=await i.find();e.ui.dialogs.toast(`Reloaded ${n.length} rows from Datasette.`,{kind:"success",title:"Refresh"})}else r.origin?.type==="datasette"&&await ah(e,r)}catch(i){const n=i instanceof qt?i.message:i?.message??String(i);e.ui.dialogs.toast(`Refresh failed: ${n}`,{kind:"error",title:"Refresh"})}}async function ah(e,t){const r=yn(t.origin.url),i=d=>e.backend.fetch(d);ln(t.id,!0);let n,o=[];try{let d=[],g=null,$=!1;try{const $e=await Di(i,r);d=$e.columns,g=$e.count,$=$e.typed}catch{}g==null&&(g=await bl(i,r));const w=g&&g>0?Math.min(g,Nt.maxImportRows):0,{rows:S,hasMore:U,truncated:N,error:z,nextUrl:q}=await Rr(i,r,{maxRows:Nt.maxImportRows,pageSize:Nt.pageSize,onProgress:$e=>{w>0&&ln(t.id,!0,Math.min(1,$e/w))}});let G=d.length===0?Ii(S):$?d:Ys(d,S),de={};try{const $e=await Vs(i,r),m=Gs($e,G);G=m.columns,de=m.patch}catch{}de=Xs(de,r.base,r.db,r.table);const ee=t.columns.length===0,ie=cl(t.columns,G,t.deletedColumns);o=ie.newFields;const V=Date.now(),J=Qs(z,q,S.length,g),ue=ee?{columns:ie.columns,...de,importResume:J,updatedAt:V}:{columns:ie.columns,...de.info?{info:de.info}:{},importResume:J,updatedAt:V};await e.store.tables.patch(t.id,ue);const we=e.store.rows(t.id),Ie=await we.find();await we.bulkRemove(Ie.map($e=>$e.id)),await we.bulkInsert(S.map($e=>({id:Or(),tableId:t.id,data:$e,updatedAt:V}))),n={rowCount:S.length,hasMore:U,truncated:N,error:z}}finally{ln(t.id,!1)}const l=[];n.error?l.push(`partial (${n.error})`):(n.hasMore||n.truncated)&&l.push(`capped at ${Nt.maxImportRows}`),o.length>0&&l.push(`${o.length} new column${o.length===1?"":"s"}`);const c=l.length?` — ${l.join(", ")}`:"";e.ui.dialogs.toast(`Refreshed ${n.rowCount} rows from ${r.db}/${r.table}${c}.`,{kind:n.error||n.hasMore||n.truncated||o.length>0?"warning":"success",title:"Refresh"}),o.length>0&&ch(t.id,r,o)}async function lh(e,t){const r=await e.store.tables.findOne(t),i=r?.importResume;if(!r||!r.origin?.url||!i)return;const n=yn(r.origin.url),o=S=>e.backend.fetch(S),l=i.loadedRows,c=i.totalCount??null,d=c&&c>0?Math.min(c,Nt.maxImportRows):0;ln(t,!0,d>0?Math.min(1,l/d):void 0);let g=0,$;try{const S=await Rr(o,n,{startUrl:i.nextUrl,maxRows:Math.max(0,Nt.maxImportRows-l),pageSize:Nt.pageSize,onProgress:z=>{d>0&&ln(t,!0,Math.min(1,(l+z)/d))}});g=S.rows.length;const U=Date.now();await e.store.rows(t).bulkInsert(S.rows.map(z=>({id:Or(),tableId:t,data:z,updatedAt:U}))),$={error:S.error,nextUrl:S.nextUrl};const N=Qs(S.error,S.nextUrl,l+g,c);await e.store.tables.patch(t,{importResume:N,updatedAt:U})}catch(S){const U=S instanceof qt?S.message:S?.message??String(S);e.ui.dialogs.toast(`Couldn't resume ${n.db}/${n.table}: ${U}. Try again later.`,{kind:"error",title:"Resume import"});return}finally{ln(t,!1)}const w=l+g;$.error?e.ui.dialogs.toast(`Resumed ${n.db}/${n.table}: +${g} rows (${w} total) — interrupted again (${$.error}). Resume to continue.`,{kind:"warning",title:"Resume import"}):e.ui.dialogs.toast(`Finished ${n.db}/${n.table}: +${g} rows (${w} total).`,{kind:"success",title:"Resume import"})}function ch(e,t,r){const i=r.join(", "),n=r.length!==1,o=`Refreshing ${t.db}/${t.table} revealed ${r.length} new column${n?"s":""}: ${i}. Review, reorder or hide ${n?"them":"it"} here.`;document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:e,notice:o}}))}function kl(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Or(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const uh=Object.freeze(Object.defineProperty({__proto__:null,connectDatasette:$l,importDatasette:Js,init:Qd,meta:Yd},Symbol.toStringTag,{value:"Module"})),dh={id:"sql-export",name:"SQL Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a portable .sql script (CREATE TABLE + INSERT).",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/sql-export.ts"};function hh(){}async function Cl(e){const t=e.workspaceId();if(!t)throw new Error("sql-export: no active workspace");const r=(await e.store.tables.find()).filter(n=>n.workspaceId===t),i=["-- easyDBAccess SQL dump",`-- workspace: ${t}`,`-- exported:  ${new Date().toISOString()}`,`-- tables:    ${r.length}`,"-- Compatible with PostgreSQL and SQLite. For MySQL run","--   SET sql_mode='ANSI_QUOTES';",'-- before executing, or rewrite "ident" to `ident`.',"","BEGIN;",""];for(const n of r){const o=await e.store.rows(n.id).find();i.push(fh(n,o),"")}return i.push("COMMIT;",""),i.join(`
`)}function fh(e,t){const r=Ts(e.code||e.name||`table_${e.id}`),i=['  "__id" TEXT PRIMARY KEY',...e.columns.map(o=>`  ${ph(o)}`)],n=[`DROP TABLE IF EXISTS "${r}";`,`CREATE TABLE "${r}" (`,i.join(`,
`),");"];if(t.length>0){const l=["__id",...e.columns.map(c=>c.field)].map(c=>`"${Ts(c)}"`).join(", ");for(const c of t){const d=[ha(c.id),...e.columns.map(g=>ha(c.data[g.field],g.type))];n.push(`INSERT INTO "${r}" (${l}) VALUES (${d.join(", ")});`)}}return n.join(`
`)}function ph(e){const t=[`"${Ts(e.field)}"`,mh(e.type)];return e.notnull&&t.push("NOT NULL"),e.unique&&t.push("UNIQUE"),t.join(" ")}function mh(e){switch(e){case"number":return"NUMERIC";case"boolean":return"BOOLEAN";case"date":return"CHAR(8)";case"datetime":return"TIMESTAMP";case"string":default:return"TEXT"}}function ha(e,t){if(e==null)return"NULL";if(t==="date"){if(typeof e=="string"&&e.trim()==="")return"NULL";const r=gh(e);return r===null?"NULL":li(r)}return typeof e=="number"?Number.isFinite(e)?String(e):"NULL":typeof e=="boolean"?e?"TRUE":"FALSE":e instanceof Date?li(e.toISOString()):li(typeof e=="string"?e:JSON.stringify(e))}function gh(e){if(e==null)return null;if(e instanceof Date)return Number.isFinite(e.getTime())?fa(e):null;if(typeof e=="string"){const t=e.trim();if(t.length===0)return null;const r=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(r)return`${r[1]}${r[2]}${r[3]}`;const i=new Date(t);return Number.isFinite(i.getTime())?fa(i):null}return null}function fa(e){const t=String(e.getUTCFullYear()).padStart(4,"0"),r=String(e.getUTCMonth()+1).padStart(2,"0"),i=String(e.getUTCDate()).padStart(2,"0");return`${t}${r}${i}`}function li(e){return`'${e.replace(/'/g,"''")}'`}function Ts(e){let t=e.replace(/[^a-zA-Z0-9_]/g,"_");return/^[0-9]/.test(t)&&(t=`_${t}`),t||"_"}const bh=Object.freeze(Object.defineProperty({__proto__:null,init:hh,meta:dh,serializeWorkspaceAsSql:Cl},Symbol.toStringTag,{value:"Module"})),yh={id:"dump-export",name:"Dump Export",type:"exporter",version:"0.1.0",description:"Export the current workspace as a single .db.json dump file.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/dump-export.ts"};function wh(e){e.ui.registerFooterButton({id:"export:menu",label:"Export",icon:"download",tooltip:"Export the current workspace (JSON or SQL)",onClick:async(t,r)=>{const i=t.workspaceId();if(!i)return;const{AnchoredMenu:n}=await An(async()=>{const{AnchoredMenu:c}=await import("./anchored-menu-_aXiXR0U.js");return{AnchoredMenu:c}},[]),o=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),l=await n.open(o,[{id:"json",label:"JSON dump (.db.json)",icon:"data_object"},{id:"sql",label:"SQL script (.sql)",icon:"storage"}]);if(l)try{if(l==="json"){const c=await Oi(t);await t.backend.saveFile(`workspace-${i}.db.json`,c,"application/json")}else if(l==="sql"){const c=await Cl(t);await t.backend.saveFile(`workspace-${i}.sql`,c,"application/sql")}}catch(c){t.ui.dialogs.toast(`Export failed: ${c.message}`,{kind:"error",title:"Export"})}}})}async function Oi(e){const t=e.workspaceId();if(!t)throw new Error("dump-export: no active workspace");const r=(await e.store.tables.find()).filter(l=>l.workspaceId===t),i=(await e.store.viewTemplates.find()).filter(l=>l.workspaceId===t),n=(await e.store.viewInstances.find()).filter(l=>l.workspaceId===t),o={workspaceId:t,exportedAt:Date.now(),tables:[],viewTemplates:i,viewInstances:n};for(const l of r){const c=await e.store.rows(l.id).find();o.tables.push({name:l.name,columns:l.columns,rows:c.map(d=>d.data),...l.title?{title:l.title}:{},...l.windowGeometry?{windowGeometry:l.windowGeometry}:{},...l.sortColumn?{sortColumn:l.sortColumn,sortAsc:l.sortAsc??!0}:{},...l.filters?{filters:l.filters}:{},...l.labelColumn?{labelColumn:l.labelColumn}:{},...l.info?{info:l.info}:{},...l.deletedColumns?{deletedColumns:l.deletedColumns}:{},...l.source?{source:l.source}:{},...l.origin?{origin:l.origin}:{}})}return JSON.stringify(o,null,2)}const vh=Object.freeze(Object.defineProperty({__proto__:null,init:wh,meta:yh,serializeWorkspace:Oi},Symbol.toStringTag,{value:"Module"})),xh={id:"gist-sync",name:"Gist Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to a private GitHub Gist.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/gist-sync.ts"},$h="gist:",kh=["gist:","datasette:token:","server-sync:"];function El(e){return!kh.some(t=>e.startsWith(t))}const pa='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>';function Ch(e){e.ui.registerSettings("gist-sync","Gist Sync",[{key:"user",label:"GitHub user",type:"string",scope:"workspace",description:"GitHub username that owns the gist."},{key:"gist_id",label:"Gist ID",type:"string",scope:"workspace",description:"Leave empty to create a new gist on the first Push."},{key:"gist_token",label:"GitHub token (PAT)",type:"secret",scope:"user",description:'Personal access token with the "gist" scope. Stored on this device only (not synced).'}]),e.ui.registerFooterButton({id:"gist-sync:menu",label:"Gist",icon:pa,tooltip:"Gist sync — push, pull, share…",onClick:async(t,r)=>{const{AnchoredMenu:i}=await An(async()=>{const{AnchoredMenu:l}=await import("./anchored-menu-_aXiXR0U.js");return{AnchoredMenu:l}},[]),n=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await i.open(n,[{id:"push",label:"Push",icon:"cloud_upload"},{id:"pull",label:"Pull",icon:"cloud_download"},{id:"share",label:"Share",icon:"share"},{id:"view",label:"View gist",icon:"open_in_new"}]);if(o)try{if(o==="push"||o==="pull"){const l=await i.open(n,[{id:"all",label:"Everything",icon:"sync"},{id:"data",label:"Data only (tables + rows)",icon:"table_rows"},{id:"settings",label:"Settings only (views + settings)",icon:"tune"}]);if(!l)return;const c=l;o==="push"?await Ph(t,c):await _l(t,c)}else o==="share"?await Th(t):o==="view"&&await Ah(t)}catch(l){t.ui.dialogs.toast(`Gist ${o} failed: ${l.message}`,{kind:"error",title:"Gist sync"})}}}),e.ui.registerTableButton({id:"gist-sync:table",label:"Gist",icon:pa,tooltip:"Gist sync for this table — push, pull, view file",onClick:async(t,r)=>{const{AnchoredMenu:i}=await An(async()=>{const{AnchoredMenu:l}=await import("./anchored-menu-_aXiXR0U.js");return{AnchoredMenu:l}},[]),n=r.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await i.open(n,[{id:"push",label:"Push this table",icon:"cloud_upload"},{id:"pull",label:"Pull this table",icon:"cloud_download"},{id:"view",label:"View gist file",icon:"open_in_new"}]);if(o)try{o==="push"?await Ih(t,r.tableId):o==="pull"?await Dh(t,r.tableId):o==="view"&&await Rh(t,r.tableId)}catch(l){t.ui.dialogs.toast(`Gist ${o} failed: ${l.message}`,{kind:"error",title:"Gist sync"})}}})}async function Eh(e){const t=new URLSearchParams(location.hash.replace(/^#/,"")).get("gist");if(!t)return;history.replaceState(null,"",location.pathname+location.search);let r;try{r=atob(t)}catch{return}const i=Sh(r);if(!i){await e.ui.dialogs.alert("The shared gist link is invalid.","Gist sync");return}await e.ui.dialogs.confirm(`Load shared workspace from gist ${i.gistId||"(new)"} (owner: ${i.user})?

This pulls its tables into the current workspace.`,"Gist sync")&&(await Zs(e,i),await _l(e))}async function Sl(e){const t=e.workspaceId();return`${$h}${t??"default"}`}async function jr(e){const[t,r,i]=await Promise.all([e.settings.get("gist-sync","user"),e.settings.get("gist-sync","gist_id"),e.settings.get("gist-sync","gist_token")]);if(t&&i)return{user:t,gistId:r??"",token:i};const o=(await e.store.settings.findOne(await Sl(e)))?.value;if(o?.user&&o?.token){const l={user:o.user,gistId:o.gistId??"",token:o.token};return await Zs(e,l),l}return null}async function Zs(e,t){await e.settings.set("gist-sync","user",t.user),await e.settings.set("gist-sync","gist_id",t.gistId),await e.settings.set("gist-sync","gist_token",t.token),await e.store.settings.upsert({key:await Sl(e),value:t})}function Sh(e){const t={};for(const r of e.split(";")){const i=r.indexOf("=");if(i<0)continue;const n=r.slice(0,i).trim(),o=r.slice(i+1).trim();n&&(t[n]=o)}return!t.user||!t.gist_token?null:{user:t.user,gistId:t.gist_id??"",token:t.gist_token}}async function eo(e){const t=await jr(e);return t||(e.ui.dialogs.toast("Add your GitHub user and token in Settings → Gist Sync, then try again.",{kind:"warning",title:"Gist sync"}),e.ui.openSettings(),null)}function _h(e){return`user=${e.user};gist_id=${e.gistId};gist_token=${e.token}`}async function Th(e){const t=await jr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("Configure a gist and Push first — there is nothing to share yet.","Gist sync");return}const i=`${location.origin+location.pathname}#gist=${encodeURIComponent(btoa(_h(t)))}`,{GistShareDialog:n}=await An(async()=>{const{GistShareDialog:o}=await import("./gist-share-dialog-ogLk6oUW.js");return{GistShareDialog:o}},[]);await n.open(i)}async function Ah(e){const t=await jr(e);if(!t||!t.gistId){await e.ui.dialogs.alert("No gist configured yet — Push first.","Gist sync");return}window.open(`https://gist.github.com/${t.user}/${t.gistId}`,"_blank","noopener")}async function Ph(e,t="all"){const r=await eo(e);if(!r)return;const i=e.workspaceId();if(!i)throw new Error("no active workspace");const n=t!=="settings",o=t!=="data",l=(await e.store.tables.find()).filter(z=>z.workspaceId===i);if(n&&l.length===0){await e.ui.dialogs.alert("Nothing to push: the current workspace has no tables.","Gist sync");return}const c=1e8,d=1e7,g={},$=[],w=[];if(n)for(const z of l){const q=z.source!=null?[]:await e.store.rows(z.id).find(),G=JSON.stringify(Tl(z,q),null,2),de=`${z.name} (${(G.length/1e6).toFixed(2)} MB)`;G.length>c?$.push(de):G.length>d&&w.push(de),g[`${Fr(z.name)}.table.json`]={content:G}}if($.length>0||w.length>0){const z=[];if($.length>0&&z.push(`Over Gist's 100 MB per-file limit — GitHub will REJECT these:
${$.join(`
`)}`),w.length>0&&z.push(`Large (over 10 MB) — Gist sync will be slow and less reliable:
${w.join(`
`)}`),!await e.ui.dialogs.confirm(`${z.join(`

`)}

To reduce size: remove unnecessary columns, limit the number of rows, or mark the table no-persist/no-sync.

Push anyway?`,"Gist size warning"))return}if(o){const z=(await e.store.viewTemplates.find()).filter(de=>de.workspaceId===i),q=(await e.store.viewInstances.find()).filter(de=>de.workspaceId===i),G=(await e.store.settings.find()).filter(de=>El(de.key));g["_easydb.workspace.json"]={content:JSON.stringify({workspaceId:i,exportedAt:Date.now(),kind:"easydb-workspace-v1",viewTemplates:z,viewInstances:q,settings:G},null,2)}}let S;if(r.gistId){const z=await fetch(`https://api.github.com/gists/${r.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:g,description:`easyDBAccess workspace: ${i}`})});if(!z.ok)throw new Error(await Sr(z));S=await z.json()}else{const z=await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({public:!1,description:`easyDBAccess workspace: ${i}`,files:g})});if(!z.ok)throw new Error(await Sr(z));S=await z.json(),r.gistId=S.id,await Zs(e,r)}const U=S.html_url??`https://gist.github.com/${r.user}/${S.id}`,N=t==="settings"?"settings":t==="data"?`${l.length} table${l.length===1?"":"s"} (data only)`:`${l.length} table${l.length===1?"":"s"}`;e.ui.dialogs.toast(`Pushed ${N}.  ${U}`,{kind:"success",title:"Gist sync"})}async function _l(e,t="all"){const r=t!=="settings",i=t!=="data",n=await eo(e);if(!n||!n.gistId){await e.ui.dialogs.alert("No gist id configured for this workspace. Push first or set it via the connection string.","Gist sync");return}const o=e.workspaceId();if(!o)throw new Error("no active workspace");const l=await fetch(`https://api.github.com/gists/${n.gistId}`,{headers:{Authorization:`Bearer ${n.token}`,Accept:"application/vnd.github+json"}});if(!l.ok)throw new Error(await Sr(l));const c=await l.json(),d=Object.entries(c.files).filter(([G])=>G.endsWith(".table.json")&&!G.startsWith("_easydb"));if(r&&d.length===0){await e.ui.dialogs.alert("Gist contains no .table.json files.","Gist sync");return}const g=(await e.store.tables.find()).filter(G=>G.workspaceId===o),$=new Map(g.map(G=>[G.name.toLowerCase(),G]));let w=0;const S=[],U=new Map;if(r){const{TopProgress:G}=await An(async()=>{const{TopProgress:ee}=await Promise.resolve().then(()=>Fl);return{TopProgress:ee}},void 0),de=G.begin("Pulling from gist…");try{for(const[ee,[ie,V]]of d.entries())try{const J=await ki(V),ue=JSON.parse(J);if(!ue.name||!Array.isArray(ue.columns))throw new Error("unexpected file shape (missing name/columns)");let we;const Ie=$.get(ue.name.toLowerCase());if(Ie){if(we=await e.store.tables.patch(Ie.id,{title:ue.title,columns:ue.columns,...As(ue),updatedAt:Date.now()}),we.source==null){const $e=e.store.rows(Ie.id),m=await $e.find();await $e.bulkRemove(m.map(v=>v.id))}}else we=await e.store.tables.insert({id:Ps(),workspaceId:o,name:ue.name,title:ue.title,code:Fr(ue.name),columns:ue.columns,view:ue.view??"table",...As(ue),updatedAt:Date.now()});if(we.source==null){const $e=(ue.rows??[]).map(m=>({id:Ps(),tableId:we.id,data:m,updatedAt:Date.now()}));await e.store.rows(we.id).bulkInsert($e)}U.set(ue.name,we.id),w++}catch(J){S.push({file:ie,error:J.message})}finally{de.fraction((ee+1)/d.length)}}finally{de.done()}}let N=0,z="";const q=i?c.files["_easydb.workspace.json"]:void 0;if(q)try{const G=await ki(q),de=JSON.parse(G),ee=de.viewTemplates??[],ie=de.viewInstances??[],V=de.settings??[];for(const J of ee)await e.store.viewTemplates.upsert({...J,workspaceId:o});for(const J of ie){let ue;J.tableName&&(ue=U.get(J.tableName)??$.get(J.tableName)?.id),ue??=J.tableId,ue&&(await e.store.viewInstances.upsert({...J,workspaceId:o,tableId:ue}),N++)}for(const J of V)El(J.key)&&await e.store.settings.upsert(J)}catch(G){z=`Workspace metadata import failed: ${G.message}`}if(S.length>0){const G=S.map(de=>`• ${de.file}: ${de.error}`).join(`
`);e.ui.dialogs.toast(`Pulled ${w} of ${d.length} tables. ${S.length} failed:
${G}${z?`
${z}`:""}`,{kind:"warning",title:"Gist sync"})}else{const G=N>0?` (+${N} views)`:"",de=t==="settings"?`Pulled settings${G}.`:`Pulled ${w} table${w===1?"":"s"}.${G}`;e.ui.dialogs.toast(de,{kind:"success",title:"Gist sync"}),z&&e.ui.dialogs.toast(z,{kind:"warning",title:"Gist sync"})}document.dispatchEvent(new CustomEvent("easydb:restack-windows"))}async function Ih(e,t){const r=await eo(e);if(!r)return;if(!r.gistId){await e.ui.dialogs.alert("No gist yet — use the main Gist button to Push the whole workspace first.","Gist sync");return}const i=await e.store.tables.findOne(t);if(!i)return;const n=i.source!=null?[]:await e.store.rows(t).find(),o=JSON.stringify(Tl(i,n),null,2),l={[`${Fr(i.name)}.table.json`]:{content:o}},c=await fetch(`https://api.github.com/gists/${r.gistId}`,{method:"PATCH",headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({files:l})});if(!c.ok)throw new Error(await Sr(c));e.ui.dialogs.toast(`Pushed "${i.name}" to gist.`,{kind:"success",title:"Gist sync"})}async function Dh(e,t){const r=await jr(e);if(!r||!r.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const i=await e.store.tables.findOne(t);if(!i)return;const n=`${Fr(i.name)}.table.json`,o=await fetch(`https://api.github.com/gists/${r.gistId}`,{headers:{Authorization:`Bearer ${r.token}`,Accept:"application/vnd.github+json"}});if(!o.ok)throw new Error(await Sr(o));const c=(await o.json()).files[n];if(!c){await e.ui.dialogs.alert(`No file "${n}" in the gist for this table.`,"Gist sync");return}const d=await ki(c),g=JSON.parse(d);if(!g.name||!Array.isArray(g.columns))throw new Error("unexpected file shape (missing name/columns)");if((await e.store.tables.patch(t,{title:g.title,columns:g.columns,...As(g),updatedAt:Date.now()})).source==null){const w=e.store.rows(t),S=await w.find();await w.bulkRemove(S.map(N=>N.id));const U=(g.rows??[]).map(N=>({id:Ps(),tableId:t,data:N,updatedAt:Date.now()}));await w.bulkInsert(U)}e.ui.dialogs.toast(`Pulled "${i.name}" from gist.`,{kind:"success",title:"Gist sync"})}async function Rh(e,t){const r=await jr(e);if(!r||!r.gistId){await e.ui.dialogs.alert("No gist configured — Push first.","Gist sync");return}const i=await e.store.tables.findOne(t);if(!i)return;const n=`file-${Fr(i.name)}-table-json`;window.open(`https://gist.github.com/${r.user}/${r.gistId}#${n}`,"_blank","noopener")}function Tl(e,t){const r=e.columns.map(n=>n.field),i=e.source!=null;return{name:e.name,title:e.title,columns:e.columns,view:e.view,windowGeometry:e.windowGeometry,sortColumn:e.sortColumn,sortAsc:e.sortAsc,filters:e.filters,labelColumn:e.labelColumn,deletedColumns:e.deletedColumns,info:e.info,source:e.source,origin:e.origin,rows:i?[]:t.map(n=>{const o={};for(const l of r)o[l]=n.data[l];return o})}}function As(e){const t={};return e.view!==void 0&&(t.view=e.view),e.windowGeometry&&(t.windowGeometry=e.windowGeometry),e.sortColumn!==void 0&&(t.sortColumn=e.sortColumn),e.sortAsc!==void 0&&(t.sortAsc=e.sortAsc),e.filters!==void 0&&(t.filters=e.filters),e.labelColumn!==void 0&&(t.labelColumn=e.labelColumn),e.deletedColumns!==void 0&&(t.deletedColumns=e.deletedColumns),e.info!==void 0&&(t.info=e.info),e.source!==void 0&&(t.source=e.source),e.origin!==void 0&&(t.origin=e.origin),t}async function ki(e,t=r=>fetch(r)){if(!e.truncated)return e.content;if(!e.raw_url)throw new Error("GitHub truncated this file but returned no raw_url");const r=await t(e.raw_url);if(!r.ok)throw new Error(`raw fetch failed: ${r.status} ${r.statusText}`);return r.text()}async function Sr(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}function Fr(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Ps(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const Oh=Object.freeze(Object.defineProperty({__proto__:null,fetchGistFileContent:ki,init:Ch,load:Eh,meta:xh},Symbol.toStringTag,{value:"Module"})),Al="server-sync:url";function Pl(e){return`server-sync:etag:${e}`}async function Il(e){const r=(await e.store.settings.findOne(Al))?.value;return typeof r!="string"||r.length===0?null:r.replace(/\/+$/,"")}async function jh(e,t){await e.store.settings.upsert({key:Al,value:t.replace(/\/+$/,"")})}async function Dl(e,t){const i=(await e.store.settings.findOne(Pl(t)))?.value;return typeof i=="string"?i:null}async function Hn(e,t,r){await e.store.settings.upsert({key:Pl(t),value:r})}function ji(e){if(!e)return null;const t=e.trim();return t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1):t}function ma(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)&&delete t.exportedAt,JSON.stringify(t)}catch{return e}}async function Rl(e,t,r){const i=Ir(r,t),n=(await e.store.tables.find()).filter(l=>l.workspaceId===t);for(const l of n){const c=e.store.rows(l.id),d=await c.find();await c.bulkRemove(d.map(g=>g.id)),await e.store.tables.remove(l.id)}let o=0;for(const l of i){const c=ga(),d=await e.store.tables.insert({id:c,workspaceId:t,name:l.name,code:Fh(l.name),columns:l.columns,view:"table",...l.windowGeometry?{windowGeometry:l.windowGeometry}:{},...l.sortColumn?{sortColumn:l.sortColumn,sortAsc:l.sortAsc??!0}:{},updatedAt:Date.now()}),g=l.rows.map($=>({id:ga(),tableId:d.id,data:$,updatedAt:Date.now()}));await e.store.rows(d.id).bulkInsert(g),o++}return o}function Fh(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function ga(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const zh={id:"server-sync",name:"Server Sync",type:"sync",version:"0.1.0",description:"Push and pull the current workspace to an easyDBAccess Hono backend.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/server-sync.ts"};function Lh(e){e.ui.registerSettings("server-sync","Server Sync",[{key:"url",label:"Server URL",type:"string",scope:"workspace",description:"Base URL of the sync server, e.g. http://localhost:3000"}]),e.ui.registerFooterButton({id:"server-sync:menu",label:"Sync",icon:"cloud_sync",tooltip:"Server sync — push or pull this workspace",onClick:async(t,r)=>{const{AnchoredMenu:i}=await An(async()=>{const{AnchoredMenu:l}=await import("./anchored-menu-_aXiXR0U.js");return{AnchoredMenu:l}},[]),n=r?.anchor?.getBoundingClientRect()??new DOMRect(16,window.innerHeight-48,0,0),o=await i.open(n,[{id:"push",label:"Push (↑)",icon:"cloud_upload"},{id:"pull",label:"Pull (↓)",icon:"cloud_download"}]);if(o)try{o==="push"?await Mh(t):o==="pull"&&await Bh(t)}catch(l){t.ui.dialogs.toast(`${o==="push"?"Push":"Pull"} failed: ${l.message}`,{kind:"error",title:"Server sync"})}}})}async function Mh(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await Ol(e);if(!r)return;const i=await Oi(e),n=await Dl(e,t),o={"Content-Type":"application/json"};n&&(o["If-Match"]=`"${n}"`);let l=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:o,body:i});if(l.status===412){const d=await l.json().catch(()=>({}));if(!await e.ui.dialogs.confirm(`The server's copy of "${t}" has changed since you last pulled.

Push anyway and overwrite it? (Cancel to pull the server version first.)`,"Server sync — conflict")){d.currentEtag&&await Hn(e,t,d.currentEtag),e.ui.dialogs.toast("Push cancelled. Pull, merge locally, then push again.",{kind:"warning",title:"Server sync"});return}l=await fetch(`${r}/sync/${encodeURIComponent(t)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:i})}if(!l.ok)throw new Error(await jl(l));const c=ji(l.headers.get("ETag"));c&&await Hn(e,t,c),e.ui.dialogs.toast(`Pushed workspace "${t}" to ${r}.`,{kind:"success",title:"Server sync"})}async function Bh(e){const t=e.workspaceId();if(!t)throw new Error("no active workspace");const r=await Ol(e);if(!r||!await e.ui.dialogs.confirm(`Replace your local copy of "${t}" with the server's version?

Local tables that aren't on the server will be removed.`,"Server sync — pull"))return;const n=await fetch(`${r}/sync/${encodeURIComponent(t)}`);if(n.status===404){e.ui.dialogs.toast(`Workspace "${t}" doesn't exist on the server yet. Push first.`,{kind:"warning",title:"Server sync"});return}if(!n.ok)throw new Error(await jl(n));const o=ji(n.headers.get("ETag")),l=await n.json(),c=await Rl(e,t,l);o&&await Hn(e,t,o),e.ui.dialogs.toast(`Pulled ${c} table${c===1?"":"s"} from ${r}.`,{kind:"success",title:"Server sync"})}async function Ol(e){const t=await Il(e);if(t)return t;const r=await e.ui.dialogs.prompt("Server URL (e.g. http://localhost:3000):","http://localhost:3000","Server sync");if(!r)return null;try{new URL(r)}catch{return await e.ui.dialogs.alert(`"${r}" is not a valid URL.`,"Server sync"),null}return await jh(e,r),r.replace(/\/+$/,"")}async function jl(e){let t="";try{t=await e.text()}catch{}return`${e.status} ${e.statusText}${t?`: ${t.slice(0,200)}`:""}`}const Nh=Object.freeze(Object.defineProperty({__proto__:null,init:Lh,meta:zh},Symbol.toStringTag,{value:"Module"})),Uh={id:"new-table",name:"New Table",type:"ui",version:"0.1.0",description:'Registers the "+ New Table" header button.',author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/new-table-button.ts"};function qh(e){e.ui.registerHeaderButton({id:"new-table:open",label:"New Table",icon:"add",variant:"primary",tooltip:"Create a new table",onClick:()=>e.ui.openNewTableDialog()})}const Hh=Object.freeze(Object.defineProperty({__proto__:null,init:qh,meta:Uh},Symbol.toStringTag,{value:"Module"})),Wh={id:"core-renderers",name:"Core Renderers",type:"cell-renderer",version:"0.1.0",description:"Built-in cell renderers: date, datetime, boolean, script.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/core-renderers.ts",fixed:!0};function Kh(e){customElements.get("cell-date")||customElements.define("cell-date",Vh),customElements.get("cell-datetime")||customElements.define("cell-datetime",Gh),customElements.get("cell-boolean")||customElements.define("cell-boolean",Yh),customElements.get("cell-script")||customElements.define("cell-script",Qh),e.ui.registerCellRenderer("date","cell-date"),e.ui.registerCellRenderer("datetime","cell-datetime"),e.ui.registerCellRenderer("boolean","cell-boolean"),e.ui.registerCellRenderer("script","cell-script")}class Vh extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="date",t.value=Zh(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class Gh extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="datetime-local",t.value=ef(this._value),t.style.cssText="font:inherit;border:0;background:transparent;padding:0;width:100%;box-sizing:border-box",t.addEventListener("change",()=>this.commit(t.value||null)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}class Yh extends HTMLElement{constructor(){super(...arguments),this._value=!1}set value(t){this._value!==t&&(this._value=t,this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("input");t.type="checkbox",t.checked=Xh(this._value),t.style.cssText="transform:translateY(1px);cursor:pointer",t.addEventListener("change",()=>this.commit(t.checked)),this.append(t)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function Xh(e){return e===!0||e==="true"||e===1||e==="1"}class Qh extends HTMLElement{constructor(){super(...arguments),this._column=null,this._row={}}set column(t){this._column=t,this.render()}get column(){return this._column}set row(t){this._row=t??{},this.render()}get row(){return this._row}set value(t){}get value(){}connectedCallback(){this.render()}render(){this.innerHTML="";const t=this._column?.script;if(!t||!t.trim()){const o=document.createElement("span");o.textContent="(no script)",o.style.cssText="color:#9ca3af;font-style:italic",this.append(o);return}let r;try{r=Jh(t)}catch(o){this.append(ps("compile error",o));return}let i;try{i=r(this._row)}catch(o){this.append(ps("runtime error",o));return}if(typeof i!="string"){this.append(ps("render(row) did not return a string",null));return}const n=document.createElement("span");n.style.cssText="display:inline-block;width:100%",n.innerHTML=i,this.append(n)}}const ba=new Map;function Jh(e){const t=ba.get(e);if(t)return t;const r=new Function("row",`${e}
return render(row);`);return ba.set(e,r),r}function ps(e,t){const r=document.createElement("span");if(r.textContent=`⚠ ${e}`,r.style.cssText="color:#b91c1c;font-size:0.8em;font-family:ui-monospace,SFMono-Regular,monospace",t){const i=t instanceof Error?t.message:String(t);r.title=i}return r}function Zh(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const r=new Date(t);return Number.isNaN(r.getTime())?"":r.toISOString().slice(0,10)}function ef(e){if(typeof e!="string"&&typeof e!="number")return"";const t=String(e).trim();if(!t)return"";const r=/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/.exec(t);if(r)return`${r[1]}T${r[2]}`;if(/^\d{4}-\d{2}-\d{2}$/.test(t))return`${t}T00:00`;const i=new Date(t);if(Number.isNaN(i.getTime()))return"";const n=i.toISOString();return`${n.slice(0,10)}T${n.slice(11,16)}`}const tf=Object.freeze(Object.defineProperty({__proto__:null,init:Kh,meta:Wh},Symbol.toStringTag,{value:"Module"})),nf={id:"cell-color",name:"Cell Color",type:"cell-renderer",version:"0.1.0",description:`Renderer for hex colour values: a native swatch picker. Apply by setting a column's renderer to "color".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2h2.3c2 0 3.6-1.6 3.6-3.6C20.7 6 16.9 3 12 3z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="11" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-color.ts"};function rf(e){customElements.get("cell-color")||customElements.define("cell-color",sf),e.ui.registerCellRenderer("color","cell-color")}class sf extends HTMLElement{constructor(){super(...arguments),this._value=""}static get observedAttributes(){return["value"]}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}attributeChangedCallback(t,r,i){this.value=i}render(){const t=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(this._value)?this._value:"#000000";this.innerHTML="";const r=document.createElement("input");r.type="color",r.value=t,r.style.cssText="width:1.5rem;height:1.25rem;padding:0;border:1px solid #d1d5db;background:transparent;vertical-align:middle;cursor:pointer",r.addEventListener("change",()=>this.commit(r.value)),this.append(r)}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const of=Object.freeze(Object.defineProperty({__proto__:null,init:rf,meta:nf},Symbol.toStringTag,{value:"Module"})),af={id:"cell-image",name:"Cell Image",type:"cell-renderer",version:"0.1.0",description:`Renderer for image cells: thumbnail with upload/clear. Apply by setting a column's renderer to "image". Values are kept as data: URIs.`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-image.ts"};function lf(e){customElements.get("cell-image")||customElements.define("cell-image",cf),e.ui.registerCellRenderer("image","cell-image")}class cf extends HTMLElement{constructor(){super(...arguments),this._value=""}set value(t){this._value!==t&&(this._value=t??"",this.render())}get value(){return this._value}connectedCallback(){this.render()}render(){this.innerHTML="";const t=document.createElement("span");if(t.style.cssText="display:inline-flex;align-items:center;gap:0.4rem",typeof this._value=="string"&&(this._value.startsWith("data:image")||this._value.startsWith("http"))){const i=document.createElement("img");i.src=this._value,i.alt="",i.style.cssText="max-height:32px;max-width:64px;border-radius:.15rem;border:1px solid #e5e7eb",t.append(i)}else{const i=document.createElement("span");i.style.color="#9ca3af",i.textContent="no image",t.append(i);const n=document.createElement("button");n.type="button",n.textContent="upload",n.style.cssText="padding:0.1rem 0.4rem;font-size:0.75rem;cursor:pointer",n.addEventListener("click",()=>this.pickFile()),t.append(n)}this.append(t)}pickFile(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.addEventListener("change",()=>{const r=t.files?.[0];if(!r)return;const i=new FileReader;i.onload=()=>this.commit(String(i.result)),i.readAsDataURL(r)}),t.click()}commit(t){this._value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}const uf=Object.freeze(Object.defineProperty({__proto__:null,init:lf,meta:af},Symbol.toStringTag,{value:"Module"}));/**
 * jsPanel - A JavaScript library to create highly configurable multifunctional floating panels that can also be used as modal, tooltip, hint or contextmenu
 * @version v4.16.1
 * @homepage https://jspanel.de/
 * @license MIT
 * @author Stefan Sträßer - info@jspanel.de
 * @author of dialog extension: Michael Daumling - michael@terrapinlogo.com
 * @github https://github.com/Flyer53/jsPanel4.git
 */let F={version:"4.16.1",date:"2022-11-03 09:18",ajaxAlwaysCallbacks:[],autopositionSpacing:4,closeOnEscape:(()=>{document.addEventListener("keydown",e=>{(e.key==="Escape"||e.code==="Escape"||e.key==="Esc")&&F.getPanels(t=>t.classList.contains("jsPanel")).some(t=>t.options.closeOnEscape?typeof t.options.closeOnEscape=="function"?t.options.closeOnEscape.call(t,t):(t.close(null,!0),!0):!1)},!1)})(),defaults:{boxShadow:3,container:"window",contentSize:{width:"400px",height:"200px"},dragit:{cursor:"move",handles:".jsPanel-headerlogo, .jsPanel-titlebar, .jsPanel-ftr",opacity:.8,disableOnMaximized:!0},header:!0,headerTitle:"jsPanel",headerControls:{size:"md"},iconfont:void 0,maximizedMargin:0,minimizeTo:"default",paneltype:"standard",position:{my:"center",at:"center"},resizeit:{handles:"n, e, s, w, ne, se, sw, nw",minWidth:128,minHeight:38},theme:"default"},defaultAutocloseConfig:{time:"8s",progressbar:!0},defaultSnapConfig:{sensitivity:70,trigger:"panel",active:"both"},extensions:{},globalCallbacks:!1,icons:{close:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M13.7,11l6.1-6.1c0.4-0.4,0.4-0.9,0-1.3l-1.4-1.4c-0.4-0.4-0.9-0.4-1.3,0L11,8.3L4.9,2.3C4.6,1.9,4,1.9,3.7,2.3L2.3,3.7 C1.9,4,1.9,4.6,2.3,4.9L8.3,11l-6.1,6.1c-0.4,0.4-0.4,0.9,0,1.3l1.4,1.4c0.4,0.4,0.9,0.4,1.3,0l6.1-6.1l6.1,6.1 c0.4,0.4,0.9,0.4,1.3,0l1.4-1.4c0.4-0.4,0.4-0.9,0-1.3L13.7,11z"/></svg>',maximize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H3.7C2.8,2,2,2.9,2,3.9v14.1C2,19.1,2.8,20,3.7,20h14.6c0.9,0,1.7-0.9,1.7-1.9V3.9C20,2.9,19.2,2,18.3,2z M18.3,17.8 c0,0.1-0.1,0.2-0.2,0.2H3.9c-0.1,0-0.2-0.1-0.2-0.2V8.4h14.6V17.8z"/></svg>',normalize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.3,2H7.1C6.1,2,5.4,2.8,5.4,3.7v1.7H3.7C2.8,5.4,2,6.1,2,7.1v11.3C2,19.2,2.8,20,3.7,20h11.3c0.9,0,1.7-0.8,1.7-1.7v-1.7 h1.7c0.9,0,1.7-0.8,1.7-1.7V3.7C20,2.8,19.2,2,18.3,2z M14.9,18.3H3.7V11h11.3V18.3z M18.3,14.9h-1.7V7.1c0-0.9-0.8-1.7-1.7-1.7H7.1 V3.7h11.3V14.9z"/></svg>',minimize:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M18.9,19.8H3.1c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15.8c0.6,0,1.1,0.5,1.1,1.1S19.5,19.8,18.9,19.8z"/></svg>',smallify:'<svg focusable="false" class="jsPanel-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="currentColor" d="M2.1,15.2L2.9,16c0.2,0.2,0.5,0.2,0.7,0L11,8.7l7.4,7.3c0.2,0.2,0.5,0.2,0.7,0l0.8-0.8c0.2-0.2,0.2-0.5,0-0.7L11.3,6 c-0.2-0.2-0.5-0.2-0.7,0l-8.5,8.5C2,14.7,2,15,2.1,15.2z"/></svg>'},idCounter:0,isIE:document.documentMode||!1,pointerdown:"onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],pointermove:"onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],pointerup:"onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"],polyfills:(()=>{Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e==null)throw new TypeError("Cannot convert first argument to object");let t=Object(e);for(let r=1;r<arguments.length;r++){let i=arguments[r];if(i==null)continue;i=Object(i);let n=Object.keys(Object(i));for(let o=0,l=n.length;o<l;o++){let c=n[o],d=Object.getOwnPropertyDescriptor(i,c);d!==void 0&&d.enumerable&&(t[c]=i[c])}}return t}}),Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),r=t.length,i=new Array(r);r--;)i[r]=[t[r],e[t[r]]];return i}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(let r=0;r<this.length;r++)e.call(t,this[r],r,this)}),(function(e){e.forEach(function(t){t.append=t.append||function(){let r=Array.prototype.slice.call(arguments),i=document.createDocumentFragment();r.forEach(function(n){let o=n instanceof Node;i.appendChild(o?n:document.createTextNode(String(n)))}),this.appendChild(i)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){let t=(this.document||this.ownerDocument).querySelectorAll(e),r,i=this;do for(r=t.length;--r>=0&&t.item(r)!==i;);while(r<0&&(i=i.parentElement));return i}),(function(){if(typeof window.CustomEvent=="function")return!1;function e(t,r){r=r||{bubbles:!1,cancelable:!1,detail:void 0};let i=document.createEvent("CustomEvent");return i.initCustomEvent(t,r.bubbles,r.cancelable,r.detail),i}e.prototype=window.Event.prototype,window.CustomEvent=e})(),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(t===void 0||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var r=t>0?t|0:0;return this.substring(r,r+e.length)===e}}),String.prototype.includes||(String.prototype.includes=function(e,t){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return t===void 0&&(t=0),this.indexOf(e,t)!==-1}),String.prototype.repeat||(String.prototype.repeat=function(e){if(this==null)throw new TypeError("can't convert "+this+" to object");var t=""+this;if(e=+e,e!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),t.length==0||e==0)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,r-t.length),t}),Number.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e},Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw new TypeError('"this" is null or not defined');let r=Object(this),i=r.length>>>0;if(i===0)return!1;let n=t|0,o=Math.max(n>=0?n:i-Math.abs(n),0);function l(c,d){return c===d||typeof c=="number"&&typeof d=="number"&&isNaN(c)&&isNaN(d)}for(;o<i;){if(l(r[o],e))return!0;o++}return!1}})})(),ziBase:100,colorFilledLight:.81,colorFilledDark:.08,colorFilled:0,colorBrightnessThreshold:.55,colorNames:{default:"b0bec5",secondary:"b0bec5",primary:"01579b",info:"039be5",success:"2e7d32",warning:"f57f17",danger:"dd2c00",light:"e0e0e0",dark:"263238",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32",grey50:"fafafa",grey100:"f5f5f5",grey200:"eeeeee",grey300:"e0e0e0",grey400:"bdbdbd",grey500:"9e9e9e",grey600:"757575",grey700:"616161",grey800:"424242",grey900:"212121",gray50:"fafafa",gray100:"f5f5f5",gray200:"eeeeee",gray300:"e0e0e0",gray400:"bdbdbd",gray500:"9e9e9e",gray600:"757575",gray700:"616161",gray800:"424242",gray900:"212121",bluegrey50:"eceff1",bluegrey100:"CFD8DC",bluegrey200:"B0BEC5",bluegrey300:"90A4AE",bluegrey400:"78909C",bluegrey500:"607D8B",bluegrey600:"546E7A",bluegrey700:"455A64",bluegrey800:"37474F",bluegrey900:"263238",bluegray50:"eceff1",bluegray100:"CFD8DC",bluegray200:"B0BEC5",bluegray300:"90A4AE",bluegray400:"78909C",bluegray500:"607D8B",bluegray600:"546E7A",bluegray700:"455A64",bluegray800:"37474F",bluegray900:"263238",red50:"FFEBEE",red100:"FFCDD2",red200:"EF9A9A",red300:"E57373",red400:"EF5350",red500:"F44336",red600:"E53935",red700:"D32F2F",red800:"C62828",red900:"B71C1C",reda100:"FF8A80",reda200:"FF5252",reda400:"FF1744",reda700:"D50000",pink50:"FCE4EC",pink100:"F8BBD0",pink200:"F48FB1",pink300:"F06292",pink400:"EC407A",pink500:"E91E63",pink600:"D81B60",pink700:"C2185B",pink800:"AD1457",pink900:"880E4F",pinka100:"FF80AB",pinka200:"FF4081",pinka400:"F50057",pinka700:"C51162",purple50:"F3E5F5",purple100:"E1BEE7",purple200:"CE93D8",purple300:"BA68C8",purple400:"AB47BC",purple500:"9C27B0",purple600:"8E24AA",purple700:"7B1FA2",purple800:"6A1B9A",purple900:"4A148C",purplea100:"EA80FC",purplea200:"E040FB",purplea400:"D500F9",purplea700:"AA00FF",deeppurple50:"EDE7F6",deeppurple100:"D1C4E9",deeppurple200:"B39DDB",deeppurple300:"9575CD",deeppurple400:"7E57C2",deeppurple500:"673AB7",deeppurple600:"5E35B1",deeppurple700:"512DA8",deeppurple800:"4527A0",deeppurple900:"311B92",deeppurplea100:"B388FF",deeppurplea200:"7C4DFF",deeppurplea400:"651FFF",deeppurplea700:"6200EA",indigo50:"E8EAF6",indigo100:"C5CAE9",indigo200:"9FA8DA",indigo300:"7986CB",indigo400:"5C6BC0",indigo500:"3F51B5",indigo600:"3949AB",indigo700:"303F9F",indigo800:"283593",indigo900:"1A237E",indigoa100:"8C9EFF",indigoa200:"536DFE",indigoa400:"3D5AFE",indigoa700:"304FFE",blue50:"E3F2FD",blue100:"BBDEFB",blue200:"90CAF9",blue300:"64B5F6",blue400:"42A5F5",blue500:"2196F3",blue600:"1E88E5",blue700:"1976D2",blue800:"1565C0",blue900:"0D47A1",bluea100:"82B1FF",bluea200:"448AFF",bluea400:"2979FF",bluea700:"2962FF",lightblue50:"E1F5FE",lightblue100:"B3E5FC",lightblue200:"81D4FA",lightblue300:"4FC3F7",lightblue400:"29B6F6",lightblue500:"03A9F4",lightblue600:"039BE5",lightblue700:"0288D1",lightblue800:"0277BD",lightblue900:"01579B",lightbluea100:"80D8FF",lightbluea200:"40C4FF",lightbluea400:"00B0FF",lightbluea700:"0091EA",cyan50:"E0F7FA",cyan100:"B2EBF2",cyan200:"80DEEA",cyan300:"4DD0E1",cyan400:"26C6DA",cyan500:"00BCD4",cyan600:"00ACC1",cyan700:"0097A7",cyan800:"00838F",cyan900:"006064",cyana100:"84FFFF",cyana200:"18FFFF",cyana400:"00E5FF",cyana700:"00B8D4",teal50:"E0F2F1",teal100:"B2DFDB",teal200:"80CBC4",teal300:"4DB6AC",teal400:"26A69A",teal500:"009688",teal600:"00897B",teal700:"00796B",teal800:"00695C",teal900:"004D40",teala100:"A7FFEB",teala200:"64FFDA",teala400:"1DE9B6",teala700:"00BFA5",green50:"E8F5E9",green100:"C8E6C9",green200:"A5D6A7",green300:"81C784",green400:"66BB6A",green500:"4CAF50",green600:"43A047",green700:"388E3C",green800:"2E7D32",green900:"1B5E20",greena100:"B9F6CA",greena200:"69F0AE",greena400:"00E676",greena700:"00C853",lightgreen50:"F1F8E9",lightgreen100:"DCEDC8",lightgreen200:"C5E1A5",lightgreen300:"AED581",lightgreen400:"9CCC65",lightgreen500:"8BC34A",lightgreen600:"7CB342",lightgreen700:"689F38",lightgreen800:"558B2F",lightgreen900:"33691E",lightgreena100:"CCFF90",lightgreena200:"B2FF59",lightgreena400:"76FF03",lightgreena700:"64DD17",lime50:"F9FBE7",lime100:"F0F4C3",lime200:"E6EE9C",lime300:"DCE775",lime400:"D4E157",lime500:"CDDC39",lime600:"C0CA33",lime700:"AFB42B",lime800:"9E9D24",lime900:"827717",limea100:"F4FF81",limea200:"EEFF41",limea400:"C6FF00",limea700:"AEEA00",yellow50:"FFFDE7",yellow100:"FFF9C4",yellow200:"FFF59D",yellow300:"FFF176",yellow400:"FFEE58",yellow500:"FFEB3B",yellow600:"FDD835",yellow700:"FBC02D",yellow800:"F9A825",yellow900:"F57F17",yellowa100:"FFFF8D",yellowa200:"FFFF00",yellowa400:"FFEA00",yellowa700:"FFD600",amber50:"FFF8E1",amber100:"FFECB3",amber200:"FFE082",amber300:"FFD54F",amber400:"FFCA28",amber500:"FFC107",amber600:"FFB300",amber700:"FFA000",amber800:"FF8F00",amber900:"FF6F00",ambera100:"FFE57F",ambera200:"FFD740",ambera400:"FFC400",ambera700:"FFAB00",orange50:"FFF3E0",orange100:"FFE0B2",orange200:"FFCC80",orange300:"FFB74D",orange400:"FFA726",orange500:"FF9800",orange600:"FB8C00",orange700:"F57C00",orange800:"EF6C00",orange900:"E65100",orangea100:"FFD180",orangea200:"FFAB40",orangea400:"FF9100",orangea700:"FF6D00",deeporange50:"FBE9E7",deeporange100:"FFCCBC",deeporange200:"FFAB91",deeporange300:"FF8A65",deeporange400:"FF7043",deeporange500:"FF5722",deeporange600:"F4511E",deeporange700:"E64A19",deeporange800:"D84315",deeporange900:"BF360C",deeporangea100:"FF9E80",deeporangea200:"FF6E40",deeporangea400:"FF3D00",deeporangea700:"DD2C00",brown50:"EFEBE9",brown100:"D7CCC8",brown200:"BCAAA4",brown300:"A1887F",brown400:"8D6E63",brown500:"795548",brown600:"6D4C41",brown700:"5D4037",brown800:"4E342E",brown900:"3E2723","mdb-default":"2BBBAD","mdb-default-dark":"00695c","mdb-primary":"4285F4","mdb-primary-dark":"0d47a1","mdb-secondary":"aa66cc","mdb-secondary-dark":"9933CC","mdb-danger":"ff4444","mdb-danger-dark":"CC0000","mdb-warning":"ffbb33","mdb-warning-dark":"FF8800","mdb-success":"00C851","mdb-success-dark":"007E33","mdb-info":"33b5e5","mdb-info-dark":"0099CC","mdb-elegant":"2E2E2E","mdb-elegant-dark":"212121","mdb-stylish":"4B515D","mdb-stylish-dark":"3E4551","mdb-unique":"3F729B","mdb-unique-dark":"1C2331","mdb-special":"37474F","mdb-special-dark":"263238"},errorReporting:1,modifier:!1,helper:(()=>{document.addEventListener("keydown",e=>F.modifier=e),document.addEventListener("keyup",()=>F.modifier=!1)})(),usePointerEvents(e=!0){e?(this.pointerdown="onpointerdown"in window?["pointerdown"]:"ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="onpointermove"in window?["pointermove"]:"ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="onpointerup"in window?["pointerup"]:"ontouchend"in window?["touchend","mouseup"]:["mouseup"]):(this.pointerdown="ontouchend"in window?["touchstart","mousedown"]:["mousedown"],this.pointermove="ontouchend"in window?["touchmove","mousemove"]:["mousemove"],this.pointerup="ontouchend"in window?["touchend","mouseup"]:["mouseup"])},pOcontainer(e){if(e==="window")return document.body;if(typeof e=="string"){let t=document.querySelectorAll(e);return t.length&&t.length>0?t:!1}else{if(e.nodeType===1)return e;if(e.length)return e[0]}return!1},pOcontainment(e){let t=e;if(typeof e=="function"&&(t=e()),typeof t=="number")return[t,t,t,t];if(Array.isArray(t)){if(t.length===1)return[t[0],t[0],t[0],t[0]];if(t.length===2)return t.concat(t);t.length===3&&(t[3]=t[1])}return t},pOsize(e,t){let r=t||this.defaults.contentSize;const i=e.parentElement;if(typeof r=="string"){const n=r.trim().split(" ");r={},r.width=n[0],n.length===2?r.height=n[1]:r.height=n[0]}else r.width&&!r.height?r.height=r.width:r.height&&!r.width&&(r.width=r.height);if(String(r.width).match(/^[\d.]+$/gi))r.width+="px";else if(typeof r.width=="string"&&r.width.endsWith("%"))if(i===document.body)r.width=window.innerWidth*(parseFloat(r.width)/100)+"px";else{const n=window.getComputedStyle(i),o=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth);r.width=(parseFloat(n.width)-o)*(parseFloat(r.width)/100)+"px"}else typeof r.width=="function"&&(r.width=r.width.call(e,e),(typeof r.width=="number"||typeof r.width=="string"&&r.width.match(/^[\d.]+$/gi))&&(r.width+="px"));if(String(r.height).match(/^[\d.]+$/gi))r.height+="px";else if(typeof r.height=="string"&&r.height.endsWith("%"))if(i===document.body)r.height=window.innerHeight*(parseFloat(r.height)/100)+"px";else{const n=window.getComputedStyle(i),o=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth);r.height=(parseFloat(n.height)-o)*(parseFloat(r.height)/100)+"px"}else typeof r.height=="function"&&(r.height=r.height.call(e,e),(typeof r.height=="number"||typeof r.height=="string"&&r.height.match(/^[\d.]+$/gi))&&(r.height+="px"));return r},pOborder(e){let t=[],r=e.trim().replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," ").split(" ");return r.forEach((i,n)=>{(i.startsWith("--")||i.startsWith("var"))&&(r[n]=F.getCssVariableValue(i))}),r.forEach(i=>{F.colorNames[i]?t[2]="#"+F.colorNames[i]:i.match(/(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/)?t[1]=i:i.match(/(thin|medium|thick)|(\d*\.?\d*(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vmax|vmin|vb|vi|px|cm|mm|Q|in|pc|pt))/)?t[0]=i:t[2]=i}),t[0]||(t[0]="medium"),t[1]||(t[1]="solid"),t[2]||(t[2]=""),t},pOheaderControls(e){if(typeof e=="string"){let t={},r=e.toLowerCase(),i=r.match(/xl|lg|md|sm|xs/),n=r.match(/closeonly|none/);return i&&(t.size=i[0]),n&&(t=Object.assign({},t,{maximize:"remove",normalize:"remove",minimize:"remove",smallify:"remove"}),n[0]==="none"&&(t.close="remove")),Object.assign({},this.defaults.headerControls,t)}else return Object.assign({},this.defaults.headerControls,e)},pOtheme(e){e=e.trim();let t,r="";if(e.match(/^(rgb|hsl|var)/)){let i=e.indexOf(")");t=e.slice(0,i+1).replace(/\s+/g,""),t.startsWith("var")&&(t=F.getCssVariableValue(t)),r=e.slice(i+1,e.length).trim()}else if(e.match(/^(#|\w|--)/)){let i=e.indexOf(" ");i>0?(t=e.slice(0,i+1).replace(/\s+/g,""),r=e.slice(i+1,e.length).trim()):t=e,t.startsWith("--")&&(t=F.getCssVariableValue(t))}if(t.match(/^([\da-f]{3}|[\da-f]{6})$/gi)&&(t="#"+t),r.startsWith("fillcolor")){let i=r.indexOf(" ");r=r.slice(i+1,r.length).trim().replace(/\s+/g,""),r.match(/^([\da-f]{3}|[\da-f]{6})$/gi)?r="#"+r:F.colorNames[r]?r="#"+F.colorNames[r]:r.match(/^(--|var)/)?r=F.getCssVariableValue(r):r="#fff"}return{color:t,colors:!1,filling:r}},color(e){let t=e.toLowerCase(),r,i,n,o,l,c,d,g,$,w={};const S=/^#?([\da-f]{3}|[\da-f]{6})$/gi,U=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,N=/^hsla?\((\d{1,3}),(\d{1,3}%),(\d{1,3}%),?(0|1|0\.\d{1,2}|\.\d{1,2})?\)$/gi,z=this.colorNames;return z[t]&&(t=z[t]),t.match(S)!==null?(t=t.replace("#",""),t.length%2===1?(r=t.slice(0,1).repeat(2),i=t.slice(1,2).repeat(2),n=t.slice(2,3).repeat(2),w.rgb={r:parseInt(r,16),g:parseInt(i,16),b:parseInt(n,16)},w.hex=`#${r}${i}${n}`):(w.rgb={r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)},w.hex=`#${t}`),$=this.rgbToHsl(w.rgb.r,w.rgb.g,w.rgb.b),w.hsl=$,w.rgb.css=`rgb(${w.rgb.r},${w.rgb.g},${w.rgb.b})`):t.match(U)?(d=U.exec(t),w.rgb={css:t,r:d[1],g:d[2],b:d[3]},w.hex=this.rgbToHex(d[1],d[2],d[3]),$=this.rgbToHsl(d[1],d[2],d[3]),w.hsl=$):t.match(N)?(d=N.exec(t),o=d[1]/360,l=d[2].slice(0,d[2].length-1)/100,c=d[3].slice(0,d[3].length-1)/100,g=this.hslToRgb(o,l,c),w.rgb={css:`rgb(${g[0]},${g[1]},${g[2]})`,r:g[0],g:g[1],b:g[2]},w.hex=this.rgbToHex(w.rgb.r,w.rgb.g,w.rgb.b),w.hsl={css:`hsl(${d[1]},${d[2]},${d[3]})`,h:d[1],s:d[2],l:d[3]}):(w.hex="#f5f5f5",w.rgb={css:"rgb(245,245,245)",r:245,g:245,b:245},w.hsl={css:"hsl(0,0%,96%)",h:0,s:"0%",l:"96%"}),w},calcColors(e){const t=this.colorBrightnessThreshold,r=this.color(e),i=this.lighten(e,this.colorFilledLight),n=this.darken(e,this.colorFilled),o=this.perceivedBrightness(e)<=t?"#ffffff":"#000000",l=this.perceivedBrightness(i)<=t?"#ffffff":"#000000",c=this.perceivedBrightness(n)<=t?"#ffffff":"#000000",d=this.lighten(e,this.colorFilledDark),g=this.perceivedBrightness(d)<=t?"#ffffff":"#000000";return[r.hsl.css,i,n,o,l,c,d,g]},darken(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i-i*t)+"%";return`hsl(${r.h},${r.s},${n})`},lighten(e,t){const r=this.color(e).hsl,i=parseFloat(r.l),n=Math.round(i+(100-i)*t)+"%";return`hsl(${r.h},${r.s},${n})`},hslToRgb(e,t,r){let i,n,o;if(t===0)i=n=o=r;else{let l=(g,$,w)=>(w<0&&(w+=1),w>1&&(w-=1),w<.16666666666666666?g+($-g)*6*w:w<.5?$:w<.6666666666666666?g+($-g)*(.6666666666666666-w)*6:g),c=r<.5?r*(1+t):r+t-r*t,d=2*r-c;i=l(d,c,e+1/3),n=l(d,c,e),o=l(d,c,e-1/3)}return[Math.round(i*255),Math.round(n*255),Math.round(o*255)]},rgbToHsl(e,t,r){e/=255,t/=255,r/=255;let i=Math.max(e,t,r),n=Math.min(e,t,r),o,l,c=(i+n)/2;if(i===n)o=l=0;else{let d=i-n;switch(l=c>.5?d/(2-i-n):d/(i+n),i){case e:o=(t-r)/d+(t<r?6:0);break;case t:o=(r-e)/d+2;break;case r:o=(e-t)/d+4;break}o/=6}return o=Math.round(o*360),l=Math.round(l*100)+"%",c=Math.round(c*100)+"%",{css:"hsl("+o+","+l+","+c+")",h:o,s:l,l:c}},rgbToHex(e,t,r){let i=Number(e).toString(16),n=Number(t).toString(16),o=Number(r).toString(16);return i.length===1&&(i=`0${i}`),n.length===1&&(n=`0${n}`),o.length===1&&(o=`0${o}`),`#${i}${n}${o}`},perceivedBrightness(e){const t=this.color(e).rgb;return t.r/255*.2126+t.g/255*.7152+t.b/255*.0722},pOposition(e){let t={},r=e.trim().split(/\s+/),i=r.filter(l=>l.match(/^(down|right|up|left)$/i));i.length&&(t.autoposition=i[0],r.splice(r.indexOf(i[0]),1));let n=r.filter(l=>l.match(/^(left-|right-)(top|center|bottom)$|(^center-)(top|bottom)$|(^center$)/i));n.length?(t.my=n[0],t.at=n[1]||n[0],r.splice(r.indexOf(n[0]),1),n[1]&&r.splice(r.indexOf(n[1]),1)):(t.my="center",t.at="center");let o=r.filter(l=>l.match(/^[+-]?\d*\.?\d+[a-z%]*$/i));return o.length&&(t.offsetX=o[0].match(/^[+-]?\d*\.?\d+$/i)?`${o[0]}px`:o[0],o[1]?t.offsetY=o[1].match(/^[+-]?\d*\.?\d+$/i)?`${o[1]}px`:o[1]:t.offsetY=t.offsetX,r.splice(r.indexOf(o[0]),1),o[1]&&r.splice(r.indexOf(o[1]),1)),r.length&&(t.of=r.join(" ")),t},position(e,t){if(!t)return e.style.opacity=1,e;typeof t=="string"?t=Object.assign({},this.defaults.position,this.pOposition(t)):t=Object.assign({},this.defaults.position,t),["my","at","of"].forEach(z=>{typeof t[z]=="function"&&(t[z]=t[z].call(e,e))}),e.options.container==="window"&&(e.style.position="fixed"),typeof e=="string"?e=document.querySelector(e):Object.getPrototypeOf(e).jquery&&(e=e[0]);const r=e.options.container==="window"?"window":e.parentElement,i=e.getBoundingClientRect(),n=e.parentElement.getBoundingClientRect(),o=r==="window"?{left:0,top:0,width:document.documentElement.clientWidth,height:window.innerHeight}:{width:n.width,height:n.height,left:n.left,top:n.top},l=r==="window"?{x:1,y:1}:{x:o.width/r.offsetWidth,y:o.height/r.offsetHeight},c=r==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:window.getComputedStyle(r);o.width-=(parseFloat(c.borderLeftWidth)+parseFloat(c.borderRightWidth))*l.x,o.height-=(parseFloat(c.borderTopWidth)+parseFloat(c.borderBottomWidth))*l.y;let d;t.of?typeof t.of=="string"?d=t.of==="window"?{borderTopWidth:"0px",borderRightWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px"}:document.querySelector(t.of).getBoundingClientRect():Object.getPrototypeOf(t.of).jquery?d=t.of[0].getBoundingClientRect():d=t.of.getBoundingClientRect():d=o;let g=this.getScrollbarWidth(document.body),$=this.getScrollbarWidth(e.parentElement),w="0px";t.my.startsWith("left-")?t.at.startsWith("left-")?t.of?w=d.left-o.left-parseFloat(c.borderLeftWidth)+"px":w="0px":t.at.startsWith("center")?t.of?w=d.left-o.left-parseFloat(c.borderLeftWidth)+d.width/2+"px":w=o.width/2+"px":t.at.startsWith("right-")&&(t.of?w=d.left-o.left-parseFloat(c.borderLeftWidth)+d.width+"px":w=o.width+"px"):t.my.startsWith("center")?t.at.startsWith("left-")?t.of?w=d.left-o.left-parseFloat(c.borderLeftWidth)-i.width/2+"px":w=-i.width/2+"px":t.at.startsWith("center")?t.of?w=d.left-o.left-parseFloat(c.borderLeftWidth)-(i.width-d.width)/2+"px":w=o.width/2-i.width/2+"px":t.at.startsWith("right-")&&(t.of?w=d.left-o.left-parseFloat(c.borderLeftWidth)+(d.width-i.width/2)+"px":w=o.width-i.width/2+"px"):t.my.startsWith("right-")&&(t.at.startsWith("left-")?t.of?w=d.left-o.left-parseFloat(c.borderLeftWidth)-i.width+"px":w=-i.width+"px":t.at.startsWith("center")?t.of?w=d.left-o.left-parseFloat(c.borderLeftWidth)-i.width+d.width/2+"px":w=o.width/2-i.width+"px":t.at.startsWith("right-")&&(t.of?w=d.left-o.left-parseFloat(c.borderLeftWidth)+d.width-i.width+"px":w=o.width-i.width+"px",r!=="window"&&(w=parseFloat(w)-$.y+"px")));let S="0px";t.my.endsWith("-top")?t.at.endsWith("-top")?t.of?S=d.top-o.top-parseFloat(c.borderTopWidth)+"px":S="0px":t.at.endsWith("center")?t.of?S=d.top-o.top-parseFloat(c.borderTopWidth)+d.height/2+"px":S=o.height/2+"px":t.at.endsWith("-bottom")&&(t.of?S=d.top-o.top-parseFloat(c.borderTopWidth)+d.height+"px":S=o.height+"px"):t.my.endsWith("center")?t.at.endsWith("-top")?t.of?S=d.top-o.top-parseFloat(c.borderTopWidth)-i.height/2+"px":S=-i.height/2+"px":t.at.endsWith("center")?t.of?S=d.top-o.top-parseFloat(c.borderTopWidth)-i.height/2+d.height/2+"px":S=o.height/2-i.height/2+"px":t.at.endsWith("-bottom")&&(t.of?S=d.top-o.top-parseFloat(c.borderTopWidth)-i.height/2+d.height+"px":S=o.height-i.height/2+"px"):t.my.endsWith("-bottom")&&(t.at.endsWith("-top")?t.of?S=d.top-o.top-parseFloat(c.borderTopWidth)-i.height+"px":S=-i.height+"px":t.at.endsWith("center")?t.of?S=d.top-o.top-parseFloat(c.borderTopWidth)-i.height+d.height/2+"px":S=o.height/2-i.height+"px":t.at.endsWith("-bottom")&&(t.of?S=d.top-o.top-parseFloat(c.borderTopWidth)-i.height+d.height+"px":S=o.height-i.height+"px",r!=="window"?S=parseFloat(S)-$.x+"px":S=parseFloat(S)-g.x+"px")),e.style.left=l.x===1?w:parseFloat(w)/l.x+"px",e.style.top=l.y===1?S:parseFloat(S)/l.y+"px";let U=getComputedStyle(e),N={left:U.left,top:U.top};return t.autoposition&&t.my===t.at&&["left-top","center-top","right-top","left-bottom","center-bottom","right-bottom"].indexOf(t.my)>=0&&(N=this.applyPositionAutopos(e,N,t)),(t.offsetX||t.offsetY)&&(N=this.applyPositionOffset(e,N,t)),(t.minLeft||t.minTop||t.maxLeft||t.maxTop)&&(N=this.applyPositionMinMax(e,N,t)),t.modify&&(N=this.applyPositionModify(e,N,t)),typeof e.options.opacity=="number"?e.style.opacity=e.options.opacity:e.style.opacity=1,e},applyPositionAutopos(e,t,r){const i=`${r.my}-${r.autoposition.toLowerCase()}`;e.classList.add(i);const n=Array.prototype.slice.call(document.querySelectorAll(`.${i}`)),o=n.indexOf(e);if(n.length>1){switch(r.autoposition){case"down":n.forEach((l,c)=>{c>0&&c<=o&&(t.top=parseFloat(t.top)+n[--c].getBoundingClientRect().height+F.autopositionSpacing+"px")});break;case"up":n.forEach((l,c)=>{c>0&&c<=o&&(t.top=parseFloat(t.top)-n[--c].getBoundingClientRect().height-F.autopositionSpacing+"px")});break;case"right":n.forEach((l,c)=>{c>0&&c<=o&&(t.left=parseFloat(t.left)+n[--c].getBoundingClientRect().width+F.autopositionSpacing+"px")});break;case"left":n.forEach((l,c)=>{c>0&&c<=o&&(t.left=parseFloat(t.left)-n[--c].getBoundingClientRect().width-F.autopositionSpacing+"px")});break}e.style.left=t.left,e.style.top=t.top}return{left:t.left,top:t.top}},applyPositionOffset(e,t,r){["offsetX","offsetY"].forEach(n=>{r[n]?(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),isNaN(r[n])===!1&&(r[n]=`${r[n]}px`)):r[n]="0px"}),e.style.left=`calc(${e.style.left} + ${r.offsetX})`,e.style.top=`calc(${e.style.top} + ${r.offsetY})`;const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionMinMax(e,t,r){if(["minLeft","minTop","maxLeft","maxTop"].forEach(n=>{r[n]&&(typeof r[n]=="function"&&(r[n]=r[n].call(t,t,r)),(Number.isInteger(r[n])||r[n].match(/^\d+$/))&&(r[n]=`${r[n]}px`))}),r.minLeft){e.style.left=r.minLeft;let n=getComputedStyle(e).left;parseFloat(n)<parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.minTop){e.style.top=r.minTop;let n=getComputedStyle(e).top;parseFloat(n)<parseFloat(t.top)?e.style.top=t.top:t.top=n}if(r.maxLeft){e.style.left=r.maxLeft;let n=getComputedStyle(e).left;parseFloat(n)>parseFloat(t.left)?e.style.left=t.left:t.left=n}if(r.maxTop){e.style.top=r.maxTop;let n=getComputedStyle(e).top;parseFloat(n)>parseFloat(t.top)?e.style.top=t.top:t.top=n}const i=getComputedStyle(e);return{left:i.left,top:i.top}},applyPositionModify(e,t,r){if(r.modify&&typeof r.modify=="function"){const n=r.modify.call(t,t,r);e.style.left=Number.isInteger(n.left)||n.left.match(/^\d+$/)?`${n.left}px`:n.left,e.style.top=Number.isInteger(n.top)||n.top.match(/^\d+$/)?`${n.top}px`:n.top}const i=getComputedStyle(e);return{left:i.left,top:i.top}},autopositionRemaining(e){let t,r=e.options.container;["left-top-down","left-top-right","center-top-down","right-top-down","right-top-left","left-bottom-up","left-bottom-right","center-bottom-up","right-bottom-up","right-bottom-left"].forEach(i=>{e.classList.contains(i)&&(t=i)}),t&&(r==="window"?document.body:typeof r=="string"?document.querySelector(r):r).querySelectorAll(`.${t}`).forEach(n=>n.reposition())},getThemeDetails(e){const t=this.pOtheme(e);if(t.color.startsWith("bootstrap-")){let r=t.color.indexOf("-"),i=document.createElement("button");i.className="btn btn"+t.color.slice(r),document.body.appendChild(i),t.color=getComputedStyle(i).backgroundColor.replace(/\s+/gi,""),document.body.removeChild(i),i=void 0}return t.colors=this.calcColors(t.color),t},clearTheme(e,t){return e.content.classList.remove("jsPanel-content-filled","jsPanel-content-filledlight"),e.header.classList.remove("jsPanel-hdr-light"),e.header.classList.remove("jsPanel-hdr-dark"),e.style.backgroundColor="",this.setStyles(e.headertoolbar,{boxShadow:"",width:"",marginLeft:"",borderTopColor:"transparent"}),this.setStyles(e.content,{background:"",borderTopColor:"transparent"}),e.header.style.background="",Array.prototype.slice.call(e.controlbar.querySelectorAll(".jsPanel-icon")).concat([e.headerlogo,e.headertitle,e.headertoolbar,e.content]).forEach(r=>r.style.color=""),t&&t.call(e,e),e},applyColorTheme(e,t){if(e.style.backgroundColor=t.colors[0],e.header.style.backgroundColor=t.colors[0],e.header.style.color=t.colors[3],[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(r=>e.querySelector(r).style.color=t.colors[3]),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(r=>r.style.color=t.colors[3]),typeof e.options.theme=="string"&&t.filling==="filled"&&(e.content.style.borderTop=t.colors[3]==="#000000"?"1px solid rgba(0,0,0,0.15)":"1px solid rgba(255,255,255,0.15)"),t.colors[3]==="#000000"?e.header.classList.add("jsPanel-hdr-light"):e.header.classList.add("jsPanel-hdr-dark"),t.filling)switch(t.filling){case"filled":this.setStyles(e.content,{backgroundColor:t.colors[2],color:t.colors[3]});break;case"filledlight":e.content.style.backgroundColor=t.colors[1];break;case"filleddark":this.setStyles(e.content,{backgroundColor:t.colors[6],color:t.colors[7]});break;default:e.content.style.backgroundColor=t.filling,e.content.style.color=this.perceivedBrightness(t.filling)<=this.colorBrightnessThreshold?"#fff":"#000"}return e},applyCustomTheme(e,t){let r={bgPanel:"#ffffff",bgContent:"#ffffff",bgFooter:"#f5f5f5",colorHeader:"#000000",colorContent:"#000000",colorFooter:"#000000",border:void 0,borderRadius:void 0},i=typeof t=="object"?Object.assign(r,t):r,n=i.bgPanel,o=i.bgContent,l=i.colorHeader,c=i.colorContent,d=i.bgFooter,g=i.colorFooter;return this.colorNames[n]?e.style.background="#"+this.colorNames[n]:e.style.background=this.getCssVariableValue(n),this.colorNames[l]&&(l="#"+this.colorNames[l]),[".jsPanel-headerlogo",".jsPanel-title",".jsPanel-hdr-toolbar"].forEach(S=>e.querySelector(S).style.color=this.getCssVariableValue(l)),e.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(S=>S.style.color=this.getCssVariableValue(l)),this.colorNames[o]?e.content.style.background="#"+this.colorNames[o]:e.content.style.background=this.getCssVariableValue(o),this.colorNames[c]?e.content.style.color="#"+this.colorNames[c]:e.content.style.color=this.getCssVariableValue(c),this.perceivedBrightness(l)>this.colorBrightnessThreshold?e.header.classList.add("jsPanel-hdr-dark"):e.header.classList.add("jsPanel-hdr-light"),this.perceivedBrightness(c)>this.colorBrightnessThreshold?e.content.style.borderTop="1px solid rgba(255,255,255,0.15)":e.content.style.borderTop="1px solid rgba(0,0,0,0.15)",this.colorNames[d]?e.footer.style.background="#"+this.colorNames[d]:e.footer.style.background=this.getCssVariableValue(d),this.colorNames[g]?e.footer.style.color="#"+this.colorNames[g]:e.footer.style.color=this.getCssVariableValue(g),i.border&&e.setBorder(i.border),i.borderRadius&&(e.options.borderRadius=void 0,e.setBorderRadius(i.borderRadius)),e},getCssVariableValue(e){if(e.startsWith("--"))return getComputedStyle(document.documentElement).getPropertyValue(e).replace(/\s+/g,"");if(e.startsWith("var")){let t=e.slice(e.indexOf("(")+1,e.indexOf(")"));return getComputedStyle(document.documentElement).getPropertyValue(t).replace(/\s+/g,"")}return e},getScrollbarWidth(e=document.body){if(e===document.body)return{y:window.innerWidth-document.documentElement.clientWidth,x:window.innerHeight-document.documentElement.clientHeight};{let t=getComputedStyle(e);return{y:e.offsetWidth-e.clientWidth-parseFloat(t.borderRightWidth)-parseFloat(t.borderLeftWidth),x:e.offsetHeight-e.clientHeight-parseFloat(t.borderBottomWidth)-parseFloat(t.borderTopWidth)}}},remClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.remove(r)),e},setClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.add(r)),e},setStyles(e,t){for(const[r,i]of Object.entries(t))e.style[r]=typeof i=="string"?F.getCssVariableValue(i):i;return e},setStyle(e,t){return this.setStyles.call(e,e,t)},strToHtml(e){return document.createRange().createContextualFragment(e)},toggleClass(e,t){return t.trim().split(/\s+/).forEach(r=>e.classList.contains(r)?e.classList.remove(r):e.classList.add(r)),e},emptyNode(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e},addScript(e,t="application/javascript",r){if(!document.querySelector(`script[src="${e}"]`)){const i=document.createElement("script");i.src=e,i.type=t,document.head.appendChild(i),r&&(i.onload=r)}},ajax(e,t){let r,i,n=new XMLHttpRequest;const o={method:"GET",async:!0,user:"",pwd:"",done:function(){if(t){let l=F.strToHtml(this.responseText);r.urlSelector&&(l=l.querySelector(r.urlSelector)),t.contentRemove(),t.content.append(l)}},autoresize:!0,autoreposition:!0};if(t&&typeof e=="string")r=Object.assign({},o,{url:e});else if(typeof e=="object"&&e.url)r=Object.assign({},o,e),r.url=e.url,r.async===!1&&(r.timeout=0,r.withCredentials&&(r.withCredentials=void 0),r.responseType&&(r.responseType=void 0));else{this.errorReporting&&F.errorpanel("XMLHttpRequest seems to miss the <mark>url</mark> parameter!");return}i=r.url.trim().split(/\s+/),r.url=encodeURI(i[0]),i.length>1&&(i.shift(),r.urlSelector=i.join(" ")),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?t?r.done.call(n,n,t):r.done.call(n,n):r.fail&&(t?r.fail.call(n,n,t):r.fail.call(n,n)),r.always&&(t?r.always.call(n,n,t):r.always.call(n,n)),t&&(r.autoresize||r.autoreposition)&&F.ajaxAutoresizeAutoreposition(t,r),F.ajaxAlwaysCallbacks.length&&F.ajaxAlwaysCallbacks.forEach(l=>{t?l.call(n,n,t):l.call(n,n)}))},n.open(r.method,r.url,r.async,r.user,r.pwd),n.timeout=r.timeout||0,r.withCredentials&&(n.withCredentials=r.withCredentials),r.responseType&&(n.responseType=r.responseType),r.beforeSend&&(t?r.beforeSend.call(n,n,t):r.beforeSend.call(n,n)),r.data?n.send(r.data):n.send(null)},fetch(e,t){let r;const i={bodyMethod:"text",autoresize:!0,autoreposition:!0,done:function(o,l){if(l){let c=F.strToHtml(o);l.contentRemove(),l.content.append(c)}}};if(t&&typeof e=="string")r=Object.assign({},i,{resource:encodeURI(e)});else if(typeof e=="object"&&e.resource)r=Object.assign({},i,e),r.resource=encodeURI(e.resource);else{this.errorReporting&&F.errorpanel("Fetch Request seems to miss the <mark>resource</mark> parameter!");return}const n=r.fetchInit||{};r.beforeSend&&(t?r.beforeSend.call(e,e,t):r.beforeSend.call(e,e)),fetch(r.resource,n).then(o=>{if(o.ok)return o[r.bodyMethod]()}).then(o=>{t?r.done.call(o,o,t):r.done.call(o,o),t&&(r.autoresize||r.autoreposition)&&F.ajaxAutoresizeAutoreposition(t,r)})},ajaxAutoresizeAutoreposition(e,t){const r=e.options.contentSize;if(typeof r=="string"&&r.match(/auto/i)){const i=r.split(" "),n=Object.assign({},{width:i[0],height:i[1]});t.autoresize&&e.resize(n),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}else if(typeof r=="object"&&(r.width==="auto"||r.height==="auto")){const i=Object.assign({},r);t.autoresize&&e.resize(i),e.classList.contains("jsPanel-contextmenu")||t.autoreposition&&e.reposition()}},createPanelTemplate(e=!0){const t=document.createElement("div");return t.className="jsPanel",t.style.left="0",t.style.top="0",e&&["close","maximize","normalize","minimize","smallify"].forEach(r=>{t.setAttribute(`data-btn${r}`,"enabled")}),t.innerHTML=`<div class="jsPanel-hdr">
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
                            </div>`,e},createSnapArea(e,t,r){const i=document.createElement("div"),n=e.parentElement;i.className=`jsPanel-snap-area jsPanel-snap-area-${t}`,t==="lt"||t==="rt"||t==="rb"||t==="lb"?(i.style.width=r+"px",i.style.height=r+"px"):t==="ct"||t==="cb"?i.style.height=r+"px":(t==="lc"||t==="rc")&&(i.style.width=r+"px"),n!==document.body&&(i.style.position="absolute"),document.querySelector(`.jsPanel-snap-area.jsPanel-snap-area-${t}`)||e.parentElement.appendChild(i)},removeSnapAreas(){document.querySelectorAll(".jsPanel-snap-area").forEach(e=>e.parentElement.removeChild(e))},extend(e){if(Object.prototype.toString.call(e)==="[object Object]")for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(this.extensions[t]=e[t])},getPanels(e=function(){return this.classList.contains("jsPanel-standard")}){return Array.prototype.slice.call(document.querySelectorAll(".jsPanel")).filter(t=>e.call(t,t)).sort((t,r)=>r.style.zIndex-t.style.zIndex)},processCallbacks(e,t,r="some",i,n){if(typeof t=="function"&&(t=[t]),r)return t[r](o=>o.call(e,e,i,n));t.forEach(o=>o.call(e,e,i,n))},resetZi(){this.zi=((e=F.ziBase)=>{let t=e;return{next:()=>t++}})(),Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).sort((e,t)=>e.style.zIndex-t.style.zIndex).forEach(e=>e.style.zIndex=F.zi.next())},errorpanel(e){this.create({paneltype:"error",dragit:!1,resizeit:!1,theme:{bgPanel:"white",bgContent:"white",colorHeader:"rebeccapurple",colorContent:"#333333",border:"2px solid rebeccapurple"},borderRadius:".33rem",headerControls:"closeonly xs",headerTitle:"&#9888; jsPanel Error",contentSize:{width:"50%",height:"auto"},position:"center-top 0 5 down",animateIn:"jsPanelFadeIn",content:`<div class="jsPanel-error-content-separator"></div><p>${e}</p>`})},create(e={},t){F.zi||(F.zi=((m=F.ziBase)=>{let v=m;return{next:()=>v++}})()),e.config?(e=Object.assign({},this.defaults,e.config,e),delete e.config):e=Object.assign({},this.defaults,e),e.id?typeof e.id=="function"&&(e.id=e.id()):e.id=`jsPanel-${F.idCounter+=1}`;const r=document.getElementById(e.id);if(r!==null){if(r.classList.contains("jsPanel")&&r.front(),this.errorReporting){let m=`&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>An element with the ID <mark>${e.id}</mark> already exists in the document.`;F.errorpanel(m)}return!1}let i=this.pOcontainer(e.container);if(typeof i=="object"&&i.length&&i.length>0&&(i=i[0]),!i)return this.errorReporting&&F.errorpanel("&#9664; COULD NOT CREATE NEW JSPANEL &#9658;<br>The container to append the panel to does not exist"),!1;["onbeforeclose","onbeforemaximize","onbeforeminimize","onbeforenormalize","onbeforesmallify","onbeforeunsmallify","onclosed","onfronted","onmaximized","onminimized","onnormalized","onsmallified","onstatuschange","onunsmallified"].forEach(m=>{e[m]?typeof e[m]=="function"&&(e[m]=[e[m]]):e[m]=[]});const n=e.template||this.createPanelTemplate();n.options=e,n.closetimer=void 0,n.status="initialized",n.currentData={},n.header=n.querySelector(".jsPanel-hdr"),n.headerbar=n.header.querySelector(".jsPanel-headerbar"),n.titlebar=n.header.querySelector(".jsPanel-titlebar"),n.headerlogo=n.headerbar.querySelector(".jsPanel-headerlogo"),n.headertitle=n.headerbar.querySelector(".jsPanel-title"),n.controlbar=n.headerbar.querySelector(".jsPanel-controlbar"),n.headertoolbar=n.header.querySelector(".jsPanel-hdr-toolbar"),n.content=n.querySelector(".jsPanel-content"),n.footer=n.querySelector(".jsPanel-ftr"),n.snappableTo=!1,n.snapped=!1,n.droppableTo=!1,n.progressbar=n.autocloseProgressbar=n.querySelector(".jsPanel-progressbar");const o=new CustomEvent("jspanelloaded",{detail:e.id,cancelable:!0}),l=new CustomEvent("jspanelstatuschange",{detail:e.id,cancelable:!0}),c=new CustomEvent("jspanelbeforenormalize",{detail:e.id,cancelable:!0}),d=new CustomEvent("jspanelnormalized",{detail:e.id,cancelable:!0}),g=new CustomEvent("jspanelbeforemaximize",{detail:e.id,cancelable:!0}),$=new CustomEvent("jspanelmaximized",{detail:e.id,cancelable:!0}),w=new CustomEvent("jspanelbeforeminimize",{detail:e.id,cancelable:!0}),S=new CustomEvent("jspanelminimized",{detail:e.id,cancelable:!0}),U=new CustomEvent("jspanelbeforesmallify",{detail:e.id,cancelable:!0}),N=new CustomEvent("jspanelsmallified",{detail:e.id,cancelable:!0}),z=new CustomEvent("jspanelsmallifiedmax",{detail:e.id,cancelable:!0}),q=new CustomEvent("jspanelbeforeunsmallify",{detail:e.id,cancelable:!0}),G=new CustomEvent("jspanelfronted",{detail:e.id,cancelable:!0}),de=new CustomEvent("jspanelbeforeclose",{detail:e.id,cancelable:!0}),ee=new CustomEvent("jspanelclosed",{detail:e.id,cancelable:!0}),ie=new CustomEvent("jspanelcloseduser",{detail:e.id,cancelable:!0});[o,l,c,d,g,$,w,S,U,N,z,q,G,de].forEach(m=>m.panel=n);const V=n.querySelector(".jsPanel-btn-close"),J=n.querySelector(".jsPanel-btn-maximize"),ue=n.querySelector(".jsPanel-btn-normalize"),we=n.querySelector(".jsPanel-btn-smallify"),Ie=n.querySelector(".jsPanel-btn-minimize");V&&F.pointerup.forEach(m=>{V.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.close(null,!0)})}),J&&F.pointerup.forEach(m=>{J.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.maximize()})}),ue&&F.pointerup.forEach(m=>{ue.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.normalize()})}),we&&F.pointerup.forEach(m=>{we.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.status==="normalized"||n.status==="maximized"?n.smallify():(n.status==="smallified"||n.status==="smallifiedmax")&&n.unsmallify()})}),Ie&&F.pointerup.forEach(m=>{Ie.addEventListener(m,v=>{if(v.preventDefault(),v.button&&v.button>0)return!1;n.minimize()})});let $e=F.extensions;for(let m in $e)Object.prototype.hasOwnProperty.call($e,m)&&(n[m]=$e[m]);if(n.setBorder=m=>{let v=F.pOborder(m);return v[2].length||(v[2]=n.style.backgroundColor),v=v.join(" "),n.style.border=v,n.options.border=v,n},n.setBorderRadius=m=>{typeof m=="string"&&(m.startsWith("--")||m.startsWith("var"))&&(m=m.replace(/\s*\(\s*/g,"(").replace(/\s*\)/g,")").replace(/\s+/g," "),m=F.getCssVariableValue(m)),typeof m=="number"&&(m+="px"),n.style.borderRadius=m;const v=getComputedStyle(n);return n.options.header?(n.header.style.borderTopLeftRadius=v.borderTopLeftRadius,n.header.style.borderTopRightRadius=v.borderTopRightRadius):(n.content.style.borderTopLeftRadius=v.borderTopLeftRadius,n.content.style.borderTopRightRadius=v.borderTopRightRadius),n.options.footerToolbar?(n.footer.style.borderBottomRightRadius=v.borderBottomRightRadius,n.footer.style.borderBottomLeftRadius=v.borderBottomLeftRadius):(n.content.style.borderBottomRightRadius=v.borderBottomRightRadius,n.content.style.borderBottomLeftRadius=v.borderBottomLeftRadius),n},n.setTheme=(m=e.theme,v)=>{let E;if(n.status==="minimized"&&(E=!0,n.normalize()),F.clearTheme(n),typeof m=="object")e.border=void 0,F.applyCustomTheme(n,m);else if(typeof m=="string"){m==="none"&&(m="white");let b=F.getThemeDetails(m);F.applyColorTheme(n,b)}return E&&n.minimize(),v&&v.call(n,n),n},n.remove=(m,v,E)=>{n.parentElement.removeChild(n),document.getElementById(m)?E&&E.call(n,m,n):(n.removeMinimizedReplacement(),n.status="closed",v&&document.dispatchEvent(ie),document.dispatchEvent(ee),n.options.onclosed&&F.processCallbacks(n,n.options.onclosed,"every",v),F.autopositionRemaining(n),E&&E.call(m,m)),window.removeEventListener("resize",n.windowResizeHandler),document.removeEventListener("jspanelresize",n.parentResizeHandler)},n.close=(m,v)=>{if(n.parentElement){if(n.closetimer&&window.clearInterval(n.closetimer),document.dispatchEvent(de),n.statusBefore=n.status,n.options.onbeforeclose&&n.options.onbeforeclose.length>0&&!F.processCallbacks(n,n.options.onbeforeclose,"some",n.status,v))return n;n.options.animateOut?(n.options.animateIn&&F.remClass(n,n.options.animateIn),F.setClass(n,n.options.animateOut),n.addEventListener("animationend",E=>{E.stopPropagation(),n.remove(n.id,v,m)})):n.remove(n.id,v,m)}},n.maximize=(m,v)=>{if(n.statusBefore=n.status,e.onbeforemaximize&&e.onbeforemaximize.length>0&&!F.processCallbacks(n,e.onbeforemaximize,"some",n.statusBefore))return n;document.dispatchEvent(g);const E=n.parentElement,b=F.pOcontainment(e.maximizedMargin);return E===document.body?(n.style.width=document.documentElement.clientWidth-b[1]-b[3]+"px",n.style.height=document.documentElement.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"):(n.style.width=E.clientWidth-b[1]-b[3]+"px",n.style.height=E.clientHeight-b[0]-b[2]+"px",n.style.left=b[3]+"px",n.style.top=b[0]+"px"),we.style.transform="unset",n.removeMinimizedReplacement(),n.status="maximized",n.setControls([".jsPanel-btn-maximize"]),v||n.front(),document.dispatchEvent($),document.dispatchEvent(l),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),m&&m.call(n,n,n.statusBefore),e.onmaximized&&F.processCallbacks(n,e.onmaximized,"every",n.statusBefore),n},n.minimize=m=>{if(n.status==="minimized"||(n.statusBefore=n.status,e.onbeforeminimize&&e.onbeforeminimize.length>0&&!F.processCallbacks(n,e.onbeforeminimize,"some",n.statusBefore)))return n;if(document.dispatchEvent(w),!document.getElementById("jsPanel-replacement-container")){const v=document.createElement("div");v.id="jsPanel-replacement-container",document.body.append(v)}if(n.style.left="-9999px",n.status="minimized",document.dispatchEvent(S),document.dispatchEvent(l),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),e.minimizeTo){let v=n.createMinimizedReplacement(),E,b,C;switch(e.minimizeTo){case"default":document.getElementById("jsPanel-replacement-container").append(v);break;case"parentpanel":b=n.closest(".jsPanel-content").parentElement,C=b.querySelectorAll(".jsPanel-minimized-box"),E=C[C.length-1],E.append(v);break;case"parent":b=n.parentElement,E=b.querySelector(".jsPanel-minimized-container"),E||(E=document.createElement("div"),E.className="jsPanel-minimized-container",b.append(E)),E.append(v);break;default:document.querySelector(e.minimizeTo).append(v)}}return m&&m.call(n,n,n.statusBefore),e.onminimized&&F.processCallbacks(n,e.onminimized,"every",n.statusBefore),n},n.normalize=m=>(n.status==="normalized"||(n.statusBefore=n.status,e.onbeforenormalize&&e.onbeforenormalize.length>0&&!F.processCallbacks(n,e.onbeforenormalize,"some",n.statusBefore))||(document.dispatchEvent(c),n.style.width=n.currentData.width,n.style.height=n.currentData.height,n.snapped?n.snap(n.snapped,!0):(n.style.left=n.currentData.left,n.style.top=n.currentData.top),we.style.transform="unset",n.removeMinimizedReplacement(),n.status="normalized",n.setControls([".jsPanel-btn-normalize"]),n.front(),document.dispatchEvent(d),document.dispatchEvent(l),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore),m&&m.call(n,n,n.statusBefore),e.onnormalized&&F.processCallbacks(n,e.onnormalized,"every",n.statusBefore)),n),n.smallify=m=>{if(n.status==="smallified"||n.status==="smallifiedmax"||(n.statusBefore=n.status,e.onbeforesmallify&&e.onbeforesmallify.length>0&&!F.processCallbacks(n,e.onbeforesmallify,"some",n.statusBefore)))return n;document.dispatchEvent(U),n.style.overflow="hidden";const v=window.getComputedStyle(n),E=parseFloat(window.getComputedStyle(n.headerbar).height);n.style.height=parseFloat(v.borderTopWidth)+parseFloat(v.borderBottomWidth)+E+"px",we.style.transform="rotate(180deg)",n.status==="normalized"?(n.setControls([".jsPanel-btn-normalize"]),n.status="smallified",document.dispatchEvent(N),document.dispatchEvent(l),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="maximized"&&(n.setControls([".jsPanel-btn-maximize"]),n.status="smallifiedmax",document.dispatchEvent(z),document.dispatchEvent(l),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore));const b=n.querySelectorAll(".jsPanel-minimized-box");return b[b.length-1].style.display="none",m&&m.call(n,n,n.statusBefore),e.onsmallified&&F.processCallbacks(n,e.onsmallified,"every",n.statusBefore),n},n.unsmallify=m=>{if(n.statusBefore=n.status,n.status==="smallified"||n.status==="smallifiedmax"){if(e.onbeforeunsmallify&&e.onbeforeunsmallify.length>0&&!F.processCallbacks(n,e.onbeforeunsmallify,"some",n.statusBefore))return n;document.dispatchEvent(q),n.style.overflow="visible",n.front(),n.status==="smallified"?(n.style.height=n.currentData.height,n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(d),document.dispatchEvent(l),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every",n.statusBefore)):n.status==="smallifiedmax"?n.maximize():n.status==="minimized"&&n.normalize(),we.style.transform="rotate(0deg)";const v=n.querySelectorAll(".jsPanel-minimized-box");v[v.length-1].style.display="flex",m&&m.call(n,n,n.statusBefore),e.onunsmallified&&F.processCallbacks(n,e.onunsmallified,"every",n.statusBefore)}return n},n.front=(m,v=!0)=>{if(n.status==="minimized")n.statusBefore==="maximized"?n.maximize():n.normalize();else{const E=Array.prototype.slice.call(document.querySelectorAll(".jsPanel-standard")).map(b=>b.style.zIndex);Math.max(...E)>n.style.zIndex&&(n.style.zIndex=F.zi.next()),F.resetZi()}return document.dispatchEvent(G),m&&m.call(n,n),e.onfronted&&v&&F.processCallbacks(n,e.onfronted,"every",n.status),n},n.snap=(m,v=!1)=>{if(v||(n.currentData.beforeSnap={width:n.currentData.width,height:n.currentData.height}),m&&typeof m=="function"&&!v)m.call(n,n,n.snappableTo);else if(m!==!1){let E=[0,0];if(n.options.dragit.snap.containment&&n.options.dragit.containment){const b=F.pOcontainment(n.options.dragit.containment),C=n.snappableTo;C.startsWith("left")?E[0]=b[3]:C.startsWith("right")&&(E[0]=-b[1]),C.endsWith("top")?E[1]=b[0]:C.endsWith("bottom")&&(E[1]=-b[2])}n.reposition(`${n.snappableTo} ${E[0]} ${E[1]}`)}v||(n.snapped=n.snappableTo)},n.move=(m,v)=>{let E=n.overlaps(m,"paddingbox"),b=n.parentElement;return m.appendChild(n),n.options.container=m,n.style.left=E.left+"px",n.style.top=E.top+"px",n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors(),v&&v.call(n,n,m,b),n},n.closeChildpanels=m=>(n.getChildpanels().forEach(v=>v.close()),m&&m.call(n,n),n),n.getChildpanels=m=>{const v=n.content.querySelectorAll(".jsPanel");return m&&v.forEach((E,b,C)=>{m.call(E,E,b,C)}),v},n.isChildpanel=m=>{const v=n.closest(".jsPanel-content"),E=v?v.parentElement:null;return m&&m.call(n,n,E),v?E:!1},n.contentRemove=m=>(F.emptyNode(n.content),m&&m.call(n,n),n),n.createMinimizedReplacement=()=>{const m=F.createMinimizedTemplate(),v=window.getComputedStyle(n.headertitle).color,E=window.getComputedStyle(n),b=e.iconfont,C=m.querySelector(".jsPanel-controlbar");return n.options.header!=="auto-show-hide"?F.setStyles(m,{backgroundColor:E.backgroundColor,backgroundPositionX:E.backgroundPositionX,backgroundPositionY:E.backgroundPositionY,backgroundRepeat:E.backgroundRepeat,backgroundAttachment:E.backgroundAttachment,backgroundImage:E.backgroundImage,backgroundSize:E.backgroundSize,backgroundOrigin:E.backgroundOrigin,backgroundClip:E.backgroundClip}):m.style.backgroundColor=window.getComputedStyle(n.header).backgroundColor,m.id=n.id+"-min",m.querySelector(".jsPanel-headerbar").replaceChild(n.headerlogo.cloneNode(!0),m.querySelector(".jsPanel-headerlogo")),m.querySelector(".jsPanel-titlebar").replaceChild(n.headertitle.cloneNode(!0),m.querySelector(".jsPanel-title")),m.querySelector(".jsPanel-titlebar").setAttribute("title",n.headertitle.textContent),m.querySelector(".jsPanel-title").style.color=v,C.style.color=v,C.querySelectorAll("button").forEach(he=>he.style.color=v),["jsPanel-hdr-dark","jsPanel-hdr-light"].forEach(he=>{n.header.classList.contains(he)&&m.querySelector(".jsPanel-hdr").classList.add(he)}),n.setIconfont(b,m),n.dataset.btnnormalize==="enabled"?F.pointerup.forEach(he=>{m.querySelector(".jsPanel-btn-normalize").addEventListener(he,ge=>{if(ge.preventDefault(),ge.button&&ge.button>0)return!1;n.normalize()})}):C.querySelector(".jsPanel-btn-normalize").style.display="none",n.dataset.btnmaximize==="enabled"?F.pointerup.forEach(he=>{m.querySelector(".jsPanel-btn-maximize").addEventListener(he,ge=>{if(ge.preventDefault(),ge.button&&ge.button>0)return!1;n.maximize()})}):C.querySelector(".jsPanel-btn-maximize").style.display="none",n.dataset.btnclose==="enabled"?F.pointerup.forEach(he=>{m.querySelector(".jsPanel-btn-close").addEventListener(he,ge=>{if(ge.preventDefault(),ge.button&&ge.button>0)return!1;n.close(null,!0)})}):C.querySelector(".jsPanel-btn-close").style.display="none",m},n.removeMinimizedReplacement=()=>{const m=document.getElementById(`${n.id}-min`);m&&m.parentElement.removeChild(m)},n.drag=(m={})=>{let v,E,b;const C=new CustomEvent("jspaneldragstart",{detail:n.id}),he=new CustomEvent("jspaneldrag",{detail:n.id}),ge=new CustomEvent("jspaneldragstop",{detail:n.id});[C,he,ge].forEach(He=>He.panel=n);const K=He=>{let Me=He.split("-");return Me.forEach((_e,Oe)=>{Me[Oe]=_e.charAt(0).toUpperCase()+_e.slice(1)}),"snap"+Me.join("")};function Q(He){He.relatedTarget===null&&F.pointermove.forEach(Me=>{document.removeEventListener(Me,E,!1),n.style.opacity=1})}let Xe=m.handles||F.defaults.dragit.handles,ct=m.cursor||F.defaults.dragit.cursor;function rn(He){if(F.pointermove.forEach(Me=>document.removeEventListener(Me,E)),F.removeSnapAreas(),v){if(n.style.opacity=1,v=void 0,b.snap){switch(n.snappableTo){case"left-top":n.snap(b.snap.snapLeftTop);break;case"center-top":n.snap(b.snap.snapCenterTop);break;case"right-top":n.snap(b.snap.snapRightTop);break;case"right-center":n.snap(b.snap.snapRightCenter);break;case"right-bottom":n.snap(b.snap.snapRightBottom);break;case"center-bottom":n.snap(b.snap.snapCenterBottom);break;case"left-bottom":n.snap(b.snap.snapLeftBottom);break;case"left-center":n.snap(b.snap.snapLeftCenter);break}b.snap.callback&&n.snappableTo&&typeof b.snap.callback=="function"&&(b.snap.callback.call(n,n),b.snap.repositionOnSnap&&b.snap[K(n.snappableTo)]!==!1&&n.repositionOnSnap(n.snappableTo)),n.snappableTo&&b.snap.repositionOnSnap&&b.snap[K(n.snappableTo)]&&n.repositionOnSnap(n.snappableTo)}if(n.droppableTo&&n.droppableTo){let Me=n.parentElement;n.move(n.droppableTo),b.drop.callback&&b.drop.callback.call(n,n,n.droppableTo,Me)}if(document.dispatchEvent(ge),b.stop.length){let Me=window.getComputedStyle(n),_e={left:parseFloat(Me.left),top:parseFloat(Me.top),width:parseFloat(Me.width),height:parseFloat(Me.height)};F.processCallbacks(n,b.stop,!1,_e,He)}n.saveCurrentPosition(),n.calcSizeFactors()}n.controlbar.style.pointerEvents="inherit",n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Me=>Me.style.pointerEvents="auto"),document.removeEventListener(He,rn)}return n.querySelectorAll(Xe).forEach(He=>{He.style.touchAction="none",He.style.cursor=ct,F.pointerdown.forEach(Me=>{He.addEventListener(Me,_e=>{if(_e.button&&_e.button>0||(b=Object.assign({},F.defaults.dragit,m),b.disableOnMaximized&&n.status==="maximized"))return!1;if((b.containment||b.containment===0)&&(b.containment=F.pOcontainment(b.containment)),b.grid&&Array.isArray(b.grid)&&b.grid.length===1&&(b.grid[1]=b.grid[0]),b.snap&&(typeof b.snap=="object"?b.snap=Object.assign({},F.defaultSnapConfig,b.snap):b.snap=F.defaultSnapConfig),_e.target.closest(".jsPanel-ftr-btn"))return;n.controlbar.style.pointerEvents="none",n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(tt=>tt.style.pointerEvents="none");let Oe=window.getComputedStyle(n),Qe=parseFloat(Oe.left),De=parseFloat(Oe.top),oe=parseFloat(Oe.width),Je=parseFloat(Oe.height),Be=_e.touches?_e.touches[0].clientX:_e.clientX,me=_e.touches?_e.touches[0].clientY:_e.clientY,Ce=n.parentElement,At=Ce.getBoundingClientRect(),fe=window.getComputedStyle(Ce),Ze=n.getScaleFactor(),vn=0,Yt=F.getScrollbarWidth(Ce);E=tt=>{if(tt.preventDefault(),!v){if(document.dispatchEvent(C),n.style.opacity=b.opacity,n.snapped&&b.snap.resizeToPreSnap&&n.currentData.beforeSnap){n.resize(n.currentData.beforeSnap.width+" "+n.currentData.beforeSnap.height),n.setControls([".jsPanel-btn-normalize"]);let le=n.getBoundingClientRect(),Re=Be-(le.left+le.width),ve=le.width/2;Re>-ve&&(vn=Re+ve)}if(n.front(),n.snapped=!1,n.status==="maximized"&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized"),b.drop&&b.drop.dropZones){let le=b.drop.dropZones.map(ve=>F.pOcontainer(ve)),Re=[];le.forEach(function(ve){ve.length?ve.forEach(function(Le){Re.push(Le)}):Re.push(ve)}),Re=Re.filter(function(ve,Le,Ve){return Ve.indexOf(ve)===Le}),b.drop.dropZones=Re}b.start.length&&F.processCallbacks(n,b.start,!1,{left:Qe,top:De,width:oe,height:Je},tt)}v=1;let Pt,ze,We,kt,it,Ae,Te,It,Ke,yt,dt=tt.touches?tt.touches[0].clientX:tt.clientX,st=tt.touches?tt.touches[0].clientY:tt.clientY,Ue=window.getComputedStyle(n),pe;if(Ce===document.body){let le=n.getBoundingClientRect();Ke=window.innerWidth-parseInt(fe.borderLeftWidth,10)-parseInt(fe.borderRightWidth,10)-(le.left+le.width),yt=window.innerHeight-parseInt(fe.borderTopWidth,10)-parseInt(fe.borderBottomWidth,10)-(le.top+le.height)}else Ke=parseInt(fe.width,10)-parseInt(fe.borderLeftWidth,10)-parseInt(fe.borderRightWidth,10)-(parseInt(Ue.left,10)+parseInt(Ue.width,10)),yt=parseInt(fe.height,10)-parseInt(fe.borderTopWidth,10)-parseInt(fe.borderBottomWidth,10)-(parseInt(Ue.top,10)+parseInt(Ue.height,10));Pt=parseFloat(Ue.left),We=parseFloat(Ue.top),it=Ke,Te=yt,b.snap&&(b.snap.trigger==="panel"?(ze=Pt**2,kt=We**2,Ae=it**2,It=Te**2):b.snap.trigger==="pointer"&&(n.options.container==="window"?(Pt=dt,We=st,it=window.innerWidth-dt,Te=window.innerHeight-st,ze=dt**2,kt=We**2,Ae=it**2,It=Te**2):(pe=n.overlaps(Ce,"paddingbox",tt),Pt=pe.pointer.left,We=pe.pointer.top,it=pe.pointer.right,Te=pe.pointer.bottom,ze=pe.pointer.left**2,kt=pe.pointer.top**2,Ae=pe.pointer.right**2,It=pe.pointer.bottom**2)));let et=Math.sqrt(ze+kt),te=Math.sqrt(ze+It),ot=Math.sqrt(Ae+kt),pt=Math.sqrt(Ae+It),St=Math.abs(Pt-it)/2,ne=Math.abs(We-Te)/2,sn=Math.sqrt(ze+ne**2),dn=Math.sqrt(kt+St**2),ht=Math.sqrt(Ae+ne**2),xn=Math.sqrt(It+St**2);if(window.getSelection().removeAllRanges(),document.dispatchEvent(he),(!b.axis||b.axis==="x")&&(n.style.left=Qe+(dt-Be)/Ze.x+vn+"px"),(!b.axis||b.axis==="y")&&(n.style.top=De+(st-me)/Ze.y+"px"),b.grid){let le=b.grid,Re=b.axis,ve=le[0]*Math.round((Qe+(dt-Be))/le[0]),Le=le[1]*Math.round((De+(st-me))/le[1]);(!Re||Re==="x")&&(n.style.left=`${ve}px`),(!Re||Re==="y")&&(n.style.top=`${Le}px`)}if(b.containment||b.containment===0){let le=b.containment,Re,ve;if(n.options.container==="window")Re=window.innerWidth-parseFloat(Ue.width)-le[1]-Yt.y,ve=window.innerHeight-parseFloat(Ue.height)-le[2]-Yt.x;else{let Le=parseFloat(fe.borderLeftWidth)+parseFloat(fe.borderRightWidth),Ve=parseFloat(fe.borderTopWidth)+parseFloat(fe.borderBottomWidth);Re=At.width/Ze.x-parseFloat(Ue.width)-le[1]-Le-Yt.y,ve=At.height/Ze.y-parseFloat(Ue.height)-le[2]-Ve-Yt.x}parseFloat(n.style.left)<=le[3]&&(n.style.left=le[3]+"px"),parseFloat(n.style.top)<=le[0]&&(n.style.top=le[0]+"px"),parseFloat(n.style.left)>=Re&&(n.style.left=Re+"px"),parseFloat(n.style.top)>=ve&&(n.style.top=ve+"px")}if(b.drag.length){let le={left:Pt,top:We,right:it,bottom:Te,width:parseFloat(Ue.width),height:parseFloat(Ue.height)};F.processCallbacks(n,b.drag,!1,le,tt)}if(b.snap){let le=b.snap.sensitivity,Re=Ce===document.body?window.innerWidth/8:At.width/8,ve=Ce===document.body?window.innerHeight/8:At.height/8;n.snappableTo=!1,F.removeSnapAreas(),et<le?b.snap.snapLeftTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-top",F.createSnapArea(n,"lt",le)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(pe.pointer.left>0&&pe.pointer.top>0?(n.snappableTo="left-top",F.createSnapArea(n,"lt",le)):(n.snappableTo=!1,F.removeSnapAreas()))):te<le?b.snap.snapLeftBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-bottom",F.createSnapArea(n,"lb",le)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(pe.pointer.left>0&&pe.pointer.bottom>0?(n.snappableTo="left-bottom",F.createSnapArea(n,"lb",le)):(n.snappableTo=!1,F.removeSnapAreas()))):ot<le?b.snap.snapRightTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-top",F.createSnapArea(n,"rt",le)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(pe.pointer.right>0&&pe.pointer.top>0?(n.snappableTo="right-top",F.createSnapArea(n,"rt",le)):(n.snappableTo=!1,F.removeSnapAreas()))):pt<le?b.snap.snapRightBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-bottom",F.createSnapArea(n,"rb",le)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(pe.pointer.right>0&&pe.pointer.bottom>0?(n.snappableTo="right-bottom",F.createSnapArea(n,"rb",le)):(n.snappableTo=!1,F.removeSnapAreas()))):We<le&&dn<Re?b.snap.snapCenterTop!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-top",F.createSnapArea(n,"ct",le)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(pe.pointer.top>0?(n.snappableTo="center-top",F.createSnapArea(n,"ct",le)):(n.snappableTo=!1,F.removeSnapAreas()))):Pt<le&&sn<ve?b.snap.snapLeftCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="left-center",F.createSnapArea(n,"lc",le)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(pe.pointer.left>0?(n.snappableTo="left-center",F.createSnapArea(n,"lc",le)):(n.snappableTo=!1,F.removeSnapAreas()))):it<le&&ht<ve?b.snap.snapRightCenter!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="right-center",F.createSnapArea(n,"rc",le)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(pe.pointer.right>0?(n.snappableTo="right-center",F.createSnapArea(n,"rc",le)):(n.snappableTo=!1,F.removeSnapAreas()))):Te<le&&xn<Re&&b.snap.snapCenterBottom!==!1&&(!b.snap.active||b.snap.active==="both"?(n.snappableTo="center-bottom",F.createSnapArea(n,"cb",le)):b.snap.trigger==="pointer"&&b.snap.active&&b.snap.active==="inside"&&(pe.pointer.bottom>0?(n.snappableTo="center-bottom",F.createSnapArea(n,"cb",le)):(n.snappableTo=!1,F.removeSnapAreas())))}if(b.drop&&b.drop.dropZones){let le=F.isIE?"msElementsFromPoint":"elementsFromPoint",Re=document[le](tt.clientX,tt.clientY);Array.isArray(Re)||(Re=Array.prototype.slice.call(Re)),b.drop.dropZones.forEach(ve=>{Re.includes(ve)&&(n.droppableTo=ve)}),Re.includes(n.droppableTo)||(n.droppableTo=!1)}},F.pointermove.forEach(tt=>document.addEventListener(tt,E)),window.addEventListener("mouseout",Q,!1)})}),F.pointerup.forEach(Me=>{document.addEventListener(Me,rn),window.removeEventListener("mouseout",Q)}),m.disable&&(He.style.pointerEvents="none")}),n},n.dragit=m=>{const v=Object.assign({},F.defaults.dragit,e.dragit),E=n.querySelectorAll(v.handles);return m==="disable"?E.forEach(b=>b.style.pointerEvents="none"):E.forEach(b=>b.style.pointerEvents="auto"),n},n.sizeit=(m={})=>{const v=new CustomEvent("jspanelresizestart",{detail:n.id}),E=new CustomEvent("jspanelresize",{detail:n.id}),b=new CustomEvent("jspanelresizestop",{detail:n.id});[v,E,b].forEach(_e=>_e.panel=n);let C={},he,ge,K,Q,Xe,ct;C.handles=m.handles||F.defaults.resizeit.handles,C.handles.split(",").forEach(_e=>{const Oe=document.createElement("DIV");Oe.className=`jsPanel-resizeit-handle jsPanel-resizeit-${_e.trim()}`,n.append(Oe)});let rn=m.aspectRatio?m.aspectRatio:!1;function He(_e){_e.relatedTarget===null&&F.pointermove.forEach(Oe=>document.removeEventListener(Oe,he,!1))}function Me(_e){if(F.pointermove.forEach(Oe=>document.removeEventListener(Oe,he,!1)),_e.target.classList&&_e.target.classList.contains("jsPanel-resizeit-handle")){let Oe,Qe,De=_e.target.className;if(De.match(/jsPanel-resizeit-nw|jsPanel-resizeit-w|jsPanel-resizeit-sw/i)&&(Oe=!0),De.match(/jsPanel-resizeit-nw|jsPanel-resizeit-n|jsPanel-resizeit-ne/i)&&(Qe=!0),C.grid&&Array.isArray(C.grid)){C.grid.length===1&&(C.grid[1]=C.grid[0]);const oe=parseFloat(n.style.width),Je=parseFloat(n.style.height),Be=oe%C.grid[0],me=Je%C.grid[1],Ce=parseFloat(n.style.left),At=parseFloat(n.style.top),fe=Ce%C.grid[0],Ze=At%C.grid[1];Be<C.grid[0]/2?n.style.width=oe-Be+"px":n.style.width=oe+(C.grid[0]-Be)+"px",me<C.grid[1]/2?n.style.height=Je-me+"px":n.style.height=Je+(C.grid[1]-me)+"px",Oe&&(fe<C.grid[0]/2?n.style.left=Ce-fe+"px":n.style.left=Ce+(C.grid[0]-fe)+"px"),Qe&&(Ze<C.grid[1]/2?n.style.top=At-Ze+"px":n.style.top=At+(C.grid[1]-Ze)+"px")}}if(ge){n.content.style.pointerEvents="inherit",ge=void 0,n.saveCurrentDimensions(),n.saveCurrentPosition(),n.calcSizeFactors();let Oe=n.controlbar.querySelector(".jsPanel-btn-smallify"),Qe=n.getBoundingClientRect();if(Oe&&Qe.height>ct+5&&(Oe.style.transform="rotate(0deg)"),document.dispatchEvent(b),C.stop.length){let De=window.getComputedStyle(n),oe={left:parseFloat(De.left),top:parseFloat(De.top),width:parseFloat(De.width),height:parseFloat(De.height)};F.processCallbacks(n,C.stop,!1,oe,_e)}}n.content.style.pointerEvents="inherit",document.querySelectorAll("iframe").forEach(Oe=>Oe.style.pointerEvents="auto"),C.aspectRatio=rn,document.removeEventListener(_e,Me)}return n.querySelectorAll(".jsPanel-resizeit-handle").forEach(_e=>{_e.style.touchAction="none",F.pointerdown.forEach(Oe=>{_e.addEventListener(Oe,Qe=>{if(Qe.preventDefault(),Qe.stopPropagation(),Qe.button&&Qe.button>0)return!1;let De=1;if(C=Object.assign({},F.defaults.resizeit,m),(C.containment||C.containment===0)&&(C.containment=F.pOcontainment(C.containment)),C.aspectRatio&&C.aspectRatio===!0&&(C.aspectRatio="panel"),F.modifier){let ve=F.modifier;ve.altKey?C.aspectRatio="content":ve.ctrlKey?C.aspectRatio="panel":ve.shiftKey&&(C.aspectRatio=!1,De=2)}let oe=typeof C.maxWidth=="function"?C.maxWidth():C.maxWidth||1e4,Je=typeof C.maxHeight=="function"?C.maxHeight():C.maxHeight||1e4,Be=typeof C.minWidth=="function"?C.minWidth():C.minWidth,me=typeof C.minHeight=="function"?C.minHeight():C.minHeight;n.content.style.pointerEvents="none",document.querySelectorAll("iframe").forEach(ve=>ve.style.pointerEvents="none");const Ce=n.parentElement,At=Ce.tagName.toLowerCase(),fe=n.getBoundingClientRect(),Ze=Ce.getBoundingClientRect(),vn=window.getComputedStyle(Ce,null),Yt=parseInt(vn.borderLeftWidth,10),tt=parseInt(vn.borderTopWidth,10),Pt=vn.getPropertyValue("position"),ze=Qe.clientX||Qe.clientX===0||Qe.touches[0].clientX,We=Qe.clientY||Qe.clientY===0||Qe.touches[0].clientY,kt=ze/We,it=Qe.target.classList,Ae=n.getScaleFactor(),Te=fe.width/fe.height,It=n.content.getBoundingClientRect(),Ke=It.width/It.height,yt=n.header.getBoundingClientRect().height,dt=n.footer.getBoundingClientRect().height||0;let st=fe.left,Ue=fe.top,pe=1e4,et=1e4,te=1e4,ot=1e4;Xe=fe.width,ct=fe.height,At!=="body"&&(st=fe.left-Ze.left+Ce.scrollLeft,Ue=fe.top-Ze.top+Ce.scrollTop),At==="body"&&C.containment?(pe=document.documentElement.clientWidth-fe.left,te=document.documentElement.clientHeight-fe.top,et=fe.width+fe.left,ot=fe.height+fe.top):C.containment&&(Pt==="static"?(pe=Ze.width-fe.left+Yt,te=Ze.height+Ze.top-fe.top+tt,et=fe.width+(fe.left-Ze.left)-Yt,ot=fe.height+(fe.top-Ze.top)-tt):(pe=Ce.clientWidth-(fe.left-Ze.left)/Ae.x+Yt,te=Ce.clientHeight-(fe.top-Ze.top)/Ae.y+tt,et=(fe.width+fe.left-Ze.left)/Ae.x-Yt,ot=n.clientHeight+(fe.top-Ze.top)/Ae.y-tt)),C.containment&&(et-=C.containment[3],ot-=C.containment[0],pe-=C.containment[1],te-=C.containment[2]);const pt=window.getComputedStyle(n),St=parseFloat(pt.width)-fe.width,ne=parseFloat(pt.height)-fe.height;let sn=parseFloat(pt.left)-fe.left,dn=parseFloat(pt.top)-fe.top;Ce!==document.body&&(sn+=Ze.left,dn+=Ze.top);let ht=parseInt(pt.borderTopWidth,10),xn=parseInt(pt.borderRightWidth,10),le=parseInt(pt.borderBottomWidth,10),Re=parseInt(pt.borderLeftWidth,10);he=ve=>{ve.preventDefault(),ge||(document.dispatchEvent(v),C.start.length&&F.processCallbacks(n,C.start,!1,{width:Xe,height:ct,left:st,top:Ue},ve),n.front(),n.status==="maximized"&&(n.status="normalized",n.controlbar.querySelector(".jsPanel-btn-maximize")&&n.setControlStatus("maximize","show"),n.controlbar.querySelector(".jsPanel-btn-normalize")&&n.setControlStatus("normalize","hide")),fe.height>ct+5&&(n.status="normalized",n.setControls([".jsPanel-btn-normalize"]))),ge=1,document.dispatchEvent(E);let Le=ve.touches?ve.touches[0].clientX:ve.clientX,Ve=ve.touches?ve.touches[0].clientY:ve.clientY,je;it.contains("jsPanel-resizeit-e")?(K=Xe+(Le-ze)*De/Ae.x+St,K>=pe&&(K=pe),K>=oe&&(K=oe),K<=Be&&(K=Be),n.style.width=K+"px",De===2&&(n.style.left=st-(Le-ze)+"px"),C.aspectRatio==="content"?(n.style.height=(K-xn-Re)/Ke+yt+dt+ht+le+"px",C.containment&&(je=n.overlaps(Ce),je.bottom<=C.containment[2]&&(n.style.height=te+"px",n.style.width=te*Ke+"px"))):C.aspectRatio==="panel"&&(n.style.height=K/Te+"px",C.containment&&(je=n.overlaps(Ce),je.bottom<=C.containment[2]&&(n.style.height=te+"px",n.style.width=te*Te+"px")))):it.contains("jsPanel-resizeit-s")?(Q=ct+(Ve-We)*De/Ae.y+ne,Q>=te&&(Q=te),Q>=Je&&(Q=Je),Q<=me&&(Q=me),n.style.height=Q+"px",De===2&&(n.style.top=Ue-(Ve-We)+"px"),C.aspectRatio==="content"?(n.style.width=(Q-yt-dt-ht-le)*Ke+ht+le+"px",C.containment&&(je=n.overlaps(Ce),je.right<=C.containment[1]&&(n.style.width=pe+"px",n.style.height=pe/Ke+"px"))):C.aspectRatio==="panel"&&(n.style.width=Q*Te+"px",C.containment&&(je=n.overlaps(Ce),je.right<=C.containment[1]&&(n.style.width=pe+"px",n.style.height=pe/Te+"px")))):it.contains("jsPanel-resizeit-w")?(K=Xe+(ze-Le)*De/Ae.x+St,K<=oe&&K>=Be&&K<=et&&(n.style.left=st+(Le-ze)/Ae.x+sn+"px"),K>=et&&(K=et),K>=oe&&(K=oe),K<=Be&&(K=Be),n.style.width=K+"px",C.aspectRatio==="content"?(n.style.height=(K-xn-Re)/Ke+yt+dt+ht+le+"px",C.containment&&(je=n.overlaps(Ce),je.bottom<=C.containment[2]&&(n.style.height=te+"px",n.style.width=te*Ke+"px"))):C.aspectRatio==="panel"&&(n.style.height=K/Te+"px",C.containment&&(je=n.overlaps(Ce),je.bottom<=C.containment[2]&&(n.style.height=te+"px",n.style.width=te*Te+"px")))):it.contains("jsPanel-resizeit-n")?(Q=ct+(We-Ve)*De/Ae.y+ne,Q<=Je&&Q>=me&&Q<=ot&&(n.style.top=Ue+(Ve-We)/Ae.y+dn+"px"),Q>=ot&&(Q=ot),Q>=Je&&(Q=Je),Q<=me&&(Q=me),n.style.height=Q+"px",C.aspectRatio==="content"?(n.style.width=(Q-yt-dt-ht-le)*Ke+ht+le+"px",C.containment&&(je=n.overlaps(Ce),je.right<=C.containment[1]&&(n.style.width=pe+"px",n.style.height=pe/Ke+"px"))):C.aspectRatio==="panel"&&(n.style.width=Q*Te+"px",C.containment&&(je=n.overlaps(Ce),je.right<=C.containment[1]&&(n.style.width=pe+"px",n.style.height=pe/Te+"px")))):it.contains("jsPanel-resizeit-se")?(K=Xe+(Le-ze)*De/Ae.x+St,K>=pe&&(K=pe),K>=oe&&(K=oe),K<=Be&&(K=Be),n.style.width=K+"px",De===2&&(n.style.left=st-(Le-ze)+"px"),C.aspectRatio&&(n.style.height=K/Te+"px"),Q=ct+(Ve-We)*De/Ae.y+ne,Q>=te&&(Q=te),Q>=Je&&(Q=Je),Q<=me&&(Q=me),n.style.height=Q+"px",De===2&&(n.style.top=Ue-(Ve-We)+"px"),C.aspectRatio==="content"?(n.style.width=(Q-yt-dt-ht-le)*Ke+ht+le+"px",C.containment&&(je=n.overlaps(Ce),je.right<=C.containment[1]&&(n.style.width=pe+"px",n.style.height=pe/Ke+"px"))):C.aspectRatio==="panel"&&(n.style.width=Q*Te+"px",C.containment&&(je=n.overlaps(Ce),je.right<=C.containment[1]&&(n.style.width=pe+"px",n.style.height=pe/Te+"px")))):it.contains("jsPanel-resizeit-sw")?(Q=ct+(Ve-We)*De/Ae.y+ne,Q>=te&&(Q=te),Q>=Je&&(Q=Je),Q<=me&&(Q=me),n.style.height=Q+"px",De===2&&(n.style.top=Ue-(Ve-We)+"px"),C.aspectRatio&&(n.style.width=Q*Te+"px"),K=Xe+(ze-Le)*De/Ae.x+St,K<=oe&&K>=Be&&K<=et&&(n.style.left=st+(Le-ze)/Ae.x+sn+"px"),K>=et&&(K=et),K>=oe&&(K=oe),K<=Be&&(K=Be),n.style.width=K+"px",C.aspectRatio==="content"?(n.style.height=(K-xn-Re)/Ke+yt+dt+ht+le+"px",C.containment&&(je=n.overlaps(Ce),je.bottom<=C.containment[2]&&(n.style.height=te+"px",n.style.width=te*Ke+"px"))):C.aspectRatio==="panel"&&(n.style.height=K/Te+"px",C.containment&&(je=n.overlaps(Ce),je.bottom<=C.containment[2]&&(n.style.height=te+"px",n.style.width=te*Te+"px")))):it.contains("jsPanel-resizeit-ne")?(K=Xe+(Le-ze)*De/Ae.x+St,K>=pe&&(K=pe),K>=oe&&(K=oe),K<=Be&&(K=Be),n.style.width=K+"px",De===2&&(n.style.left=st-(Le-ze)+"px"),C.aspectRatio&&(n.style.height=K/Te+"px"),Q=ct+(We-Ve)*De/Ae.y+ne,Q<=Je&&Q>=me&&Q<=ot&&(n.style.top=Ue+(Ve-We)/Ae.y+dn+"px"),Q>=ot&&(Q=ot),Q>=Je&&(Q=Je),Q<=me&&(Q=me),n.style.height=Q+"px",C.aspectRatio==="content"?(n.style.width=(Q-yt-dt-ht-le)*Ke+ht+le+"px",C.containment&&(je=n.overlaps(Ce),je.right<=C.containment[1]&&(n.style.width=pe+"px",n.style.height=pe/Ke+"px"))):C.aspectRatio==="panel"&&(n.style.width=Q*Te+"px",C.containment&&(je=n.overlaps(Ce),je.right<=C.containment[1]&&(n.style.width=pe+"px",n.style.height=pe/Te+"px")))):it.contains("jsPanel-resizeit-nw")&&(C.aspectRatio&&it.contains("jsPanel-resizeit-nw")&&(Le=Ve*kt,Ve=Le/kt),K=Xe+(ze-Le)*De/Ae.x+St,K<=oe&&K>=Be&&K<=et&&(n.style.left=st+(Le-ze)/Ae.x+sn+"px"),K>=et&&(K=et),K>=oe&&(K=oe),K<=Be&&(K=Be),n.style.width=K+"px",C.aspectRatio&&(n.style.height=K/Te+"px"),Q=ct+(We-Ve)*De/Ae.y+ne,Q<=Je&&Q>=me&&Q<=ot&&(n.style.top=Ue+(Ve-We)/Ae.y+dn+"px"),Q>=ot&&(Q=ot),Q>=Je&&(Q=Je),Q<=me&&(Q=me),n.style.height=Q+"px",C.aspectRatio==="content"?n.style.width=(Q-yt-dt-ht-le)*Ke+ht+le+"px":C.aspectRatio==="panel"&&(n.style.width=Q*Te+"px")),window.getSelection().removeAllRanges();const Xt=window.getComputedStyle(n),qe={left:parseFloat(Xt.left),top:parseFloat(Xt.top),right:parseFloat(Xt.right),bottom:parseFloat(Xt.bottom),width:parseFloat(Xt.width),height:parseFloat(Xt.height)};C.resize.length&&F.processCallbacks(n,C.resize,!1,qe,ve)},F.pointermove.forEach(ve=>document.addEventListener(ve,he,!1)),window.addEventListener("mouseout",He,!1)})}),F.pointerup.forEach(function(Oe){document.addEventListener(Oe,Me),window.removeEventListener("mouseout",He)}),m.disable&&(_e.style.pointerEvents="none")}),n},n.resizeit=m=>{const v=n.querySelectorAll(".jsPanel-resizeit-handle");return m==="disable"?v.forEach(E=>E.style.pointerEvents="none"):v.forEach(E=>E.style.pointerEvents="auto"),n},n.getScaleFactor=()=>{const m=n.getBoundingClientRect();return{x:m.width/n.offsetWidth,y:m.height/n.offsetHeight}},n.calcSizeFactors=()=>{const m=window.getComputedStyle(n);if(e.container==="window")n.hf=parseFloat(m.left)/(window.innerWidth-parseFloat(m.width)),n.vf=parseFloat(m.top)/(window.innerHeight-parseFloat(m.height));else if(n.parentElement){let v=n.parentElement.getBoundingClientRect();n.hf=parseFloat(m.left)/(v.width-parseFloat(m.width)),n.vf=parseFloat(m.top)/(v.height-parseFloat(m.height))}},n.saveCurrentDimensions=()=>{const m=window.getComputedStyle(n);n.currentData.width=m.width,n.currentData.height=m.height},n.saveCurrentPosition=()=>{const m=window.getComputedStyle(n);n.currentData.left=m.left,n.currentData.top=m.top},n.reposition=(...m)=>{let v=e.position,E=!0,b;return m.forEach(C=>{typeof C=="string"||typeof C=="object"?v=C:typeof C=="boolean"?E=C:typeof C=="function"&&(b=C)}),F.position(n,v),n.slaves&&n.slaves.size>0&&n.slaves.forEach(C=>C.reposition()),E&&n.saveCurrentPosition(),b&&b.call(n,n),n},n.repositionOnSnap=m=>{let v="0",E="0",b=F.pOcontainment(e.dragit.containment);if(e.dragit.snap.containment)switch(m){case"left-top":v=b[3],E=b[0];break;case"right-top":v=-b[1],E=b[0];break;case"right-bottom":v=-b[1],E=-b[2];break;case"left-bottom":v=b[3],E=-b[2];break;case"center-top":v=b[3]/2-b[1]/2,E=b[0];break;case"center-bottom":v=b[3]/2-b[1]/2,E=-b[2];break;case"left-center":v=b[3],E=b[0]/2-b[2]/2;break;case"right-center":v=-b[1],E=b[0]/2-b[2]/2;break}F.position(n,m),F.setStyles(n,{left:`calc(${n.style.left} + ${v}px)`,top:`calc(${n.style.top} + ${E}px)`})},n.overlaps=(m,v,E)=>{let b=n.getBoundingClientRect(),C=getComputedStyle(n.parentElement),he=n.getScaleFactor(),ge={top:0,right:0,bottom:0,left:0},K,Q=0,Xe=0,ct=0,rn=0;n.options.container!=="window"&&v==="paddingbox"&&(ge.top=parseInt(C.borderTopWidth,10)*he.y,ge.right=parseInt(C.borderRightWidth,10)*he.x,ge.bottom=parseInt(C.borderBottomWidth,10)*he.y,ge.left=parseInt(C.borderLeftWidth,10)*he.x),typeof m=="string"?m==="window"?K={left:0,top:0,right:window.innerWidth,bottom:window.innerHeight}:m==="parent"?K=n.parentElement.getBoundingClientRect():K=document.querySelector(m).getBoundingClientRect():K=m.getBoundingClientRect(),E&&(Q=E.touches?E.touches[0].clientX:E.clientX,Xe=E.touches?E.touches[0].clientY:E.clientY,ct=Q-K.left,rn=Xe-K.top);let He=b.left<K.right&&b.right>K.left,Me=b.top<K.bottom&&b.bottom>K.top;return{overlaps:He&&Me,top:b.top-K.top-ge.top,right:K.right-b.right-ge.right,bottom:K.bottom-b.bottom-ge.bottom,left:b.left-K.left-ge.left,parentBorderWidth:ge,panelRect:b,referenceRect:K,pointer:{clientX:Q,clientY:Xe,left:ct-ge.left,top:rn-ge.top,right:K.width-ct-ge.right,bottom:K.height-rn-ge.bottom}}},n.setSize=()=>{if(e.panelSize){const m=F.pOsize(n,e.panelSize);n.style.width=m.width,n.style.height=m.height}else if(e.contentSize){const m=F.pOsize(n,e.contentSize);n.content.style.width=m.width,n.content.style.height=m.height,n.style.width=m.width,n.content.style.width="100%"}return n},n.resize=(...m)=>{let v=window.getComputedStyle(n),E={width:v.width,height:v.height},b=!0,C;m.forEach(K=>{typeof K=="string"?E=K:typeof K=="object"?E=Object.assign(E,K):typeof K=="boolean"?b=K:typeof K=="function"&&(C=K)});let he=F.pOsize(n,E);n.style.width=he.width,n.style.height=he.height,n.slaves&&n.slaves.size>0&&n.slaves.forEach(K=>K.reposition()),b&&n.saveCurrentDimensions(),n.status="normalized";let ge=n.controlbar.querySelector(".jsPanel-btn-smallify");return ge&&(ge.style.transform="rotate(0deg)"),C&&C.call(n,n),n.calcSizeFactors(),n},n.windowResizeHandler=m=>{if(m.target===window){let v=n.status,E=e.onwindowresize,b,C;if(v==="maximized"&&E)n.maximize(!1,!0);else if(n.snapped&&v!=="minimized")n.snap(n.snapped,!0);else if(v==="normalized"||v==="smallified"||v==="maximized"){let he=typeof E;he==="boolean"?(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",C=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=C<=0?0:C+"px"):he==="function"?E.call(n,m,n):he==="object"&&(E.preset===!0&&(b=(window.innerWidth-n.offsetWidth)*n.hf,n.style.left=b<=0?0:b+"px",C=(window.innerHeight-n.offsetHeight)*n.vf,n.style.top=C<=0?0:C+"px"),E.callback.call(n,m,n))}else v==="smallifiedmax"&&E&&n.maximize(!1,!0).smallify();n.slaves&&n.slaves.size>0&&n.slaves.forEach(he=>he.reposition())}},n.setControls=(m,v)=>(n.header.querySelectorAll(".jsPanel-btn").forEach(E=>{const b=E.className.split("-"),C=b[b.length-1];n.getAttribute(`data-btn${C}`)!=="hidden"&&(E.style.display="block")}),m.forEach(E=>{const b=n.controlbar.querySelector(E);b&&(b.style.display="none")}),v&&v.call(n,n),n),n.setControlStatus=(m,v="enable",E)=>{const b=n.controlbar.querySelector(`.jsPanel-btn-${m}`);switch(v){case"disable":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"disabled"),b.style.pointerEvents="none",b.style.opacity=.4,b.style.cursor="default");break;case"hide":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"hidden"),b.style.display="none");break;case"show":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.setAttribute(`data-btn${m}`,"enabled"),b.style.display="block",b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"enable":n.getAttribute(`data-btn${m}`)!=="removed"&&(n.getAttribute(`data-btn${m}`)==="hidden"&&(b.style.display="block"),n.setAttribute(`data-btn${m}`,"enabled"),b.style.pointerEvents="auto",b.style.opacity=1,b.style.cursor="pointer");break;case"remove":n.controlbar.removeChild(b),n.setAttribute(`data-btn${m}`,"removed");break}return E&&E.call(n,n),n},n.setControlSize=m=>{const v=m.toLowerCase();n.controlbar.querySelectorAll(".jsPanel-btn").forEach(b=>{["jsPanel-btn-xl","jsPanel-btn-lg","jsPanel-btn-md","jsPanel-btn-sm","jsPanel-btn-xs"].forEach(C=>b.classList.remove(C)),b.classList.add(`jsPanel-btn-${v}`)}),v==="xl"?n.titlebar.style.fontSize="1.5rem":v==="lg"?n.titlebar.style.fontSize="1.25rem":v==="md"?n.titlebar.style.fontSize="1.05rem":v==="sm"?n.titlebar.style.fontSize=".9rem":v==="xs"&&(n.titlebar.style.fontSize=".8rem")},n.setHeaderControls=m=>{if(n.options.headerControls.add){let C=n.options.headerControls.add;Array.isArray(C)||(C=[C]),C.forEach(he=>n.addControl(he))}let v=[];n.controlbar.querySelectorAll(".jsPanel-btn").forEach(C=>{let he=C.className.match(/jsPanel-btn-[a-z\d]{3,}/i),ge=he[0].substring(12);v.push(ge)});const b=F.pOheaderControls(e.headerControls);return e.headerControls=b,v.forEach(C=>{b[C]&&n.setControlStatus(C,b[C])}),n.setControlSize(b.size),m&&m.call(n,n),n},n.setHeaderLogo=(m,v)=>{let E=[n.headerlogo],b=document.querySelector("#"+n.id+"-min");return b&&E.push(b.querySelector(".jsPanel-headerlogo")),typeof m=="string"?m.startsWith("<")?E.forEach(C=>C.innerHTML=m):E.forEach(C=>{F.emptyNode(C);let he=document.createElement("img");he.src=m,C.append(he)}):E.forEach(C=>{F.emptyNode(C),C.append(m)}),n.headerlogo.childNodes.forEach(C=>{C.nodeName&&C.nodeName==="IMG"&&C.setAttribute("draggable","false")}),v&&v.call(n,n),n},n.setHeaderRemove=m=>(n.removeChild(n.header),n.content.classList.add("jsPanel-content-noheader"),["close","maximize","normalize","minimize","smallify"].forEach(v=>n.setAttribute(`data-btn${v}`,"removed")),m&&m.call(n,n),n),n.setHeaderTitle=(m,v)=>{let E=[n.headertitle],b=document.querySelector("#"+n.id+"-min");return b&&E.push(b.querySelector(".jsPanel-title")),typeof m=="string"?E.forEach(C=>C.innerHTML=m):typeof m=="function"?E.forEach(C=>{F.emptyNode(C),C.innerHTML=m()}):E.forEach(C=>{F.emptyNode(C),C.append(m)}),v&&v.call(n,n),n},n.setIconfont=(m,v=n,E)=>{if(m){let b,C;if(m==="fa"||m==="far"||m==="fal"||m==="fas"||m==="fad")b=[`${m} fa-window-close`,`${m} fa-window-maximize`,`${m} fa-window-restore`,`${m} fa-window-minimize`,`${m} fa-chevron-up`];else if(m==="material-icons")b=[m,m,m,m,m,m],C=["close","fullscreen","fullscreen_exit","call_received","expand_less"];else if(Array.isArray(m))b=[`custom-control-icon ${m[4]}`,`custom-control-icon ${m[3]}`,`custom-control-icon ${m[2]}`,`custom-control-icon ${m[1]}`,`custom-control-icon ${m[0]}`];else if(m==="bootstrap"||m==="glyphicon")b=["glyphicon glyphicon-remove","glyphicon glyphicon-fullscreen","glyphicon glyphicon-resize-full","glyphicon glyphicon-minus","glyphicon glyphicon-chevron-up"];else return v;v.querySelectorAll(".jsPanel-controlbar .jsPanel-btn").forEach(he=>F.emptyNode(he).innerHTML="<span></span>"),Array.prototype.slice.call(v.querySelectorAll(".jsPanel-controlbar .jsPanel-btn > span")).reverse().forEach((he,ge)=>{he.className=b[ge],m==="material-icons"&&(he.textContent=C[ge])})}return E&&E.call(v,v),v},n.addToolbar=(m,v,E)=>{if(m==="header"?m=n.headertoolbar:m==="footer"&&(m=n.footer),typeof v=="string")m.innerHTML=v;else if(Array.isArray(v))v.forEach(b=>{typeof b=="string"?m.innerHTML+=b:m.append(b)});else if(typeof v=="function"){let b=v.call(n,n);typeof b=="string"?m.innerHTML=b:m.append(b)}else m.append(v);return m.classList.add("active"),E&&E.call(n,n),n},n.addCloseControl=()=>{let m=document.createElement("button"),v=n.content.style.color;return m.classList.add("jsPanel-addCloseCtrl"),m.innerHTML=F.icons.close,m.style.color=v,n.options.rtl&&m.classList.add("rtl"),n.appendChild(m),F.pointerup.forEach(E=>{m.addEventListener(E,b=>{if(b.preventDefault(),b.button&&b.button>0)return!1;n.close(null,!0)})}),F.pointerdown.forEach(E=>{m.addEventListener(E,b=>b.preventDefault())}),n},n.addControl=m=>{if(!m.html)return n;m.position||(m.position=1);const v=n.controlbar.querySelectorAll(".jsPanel-btn").length;let E=document.createElement("button");E.innerHTML=m.html,E.className=`jsPanel-btn jsPanel-btn-${m.name} jsPanel-btn-${e.headerControls.size}`,E.style.color=n.header.style.color,m.position>v?n.controlbar.append(E):n.controlbar.insertBefore(E,n.querySelector(`.jsPanel-controlbar .jsPanel-btn:nth-child(${m.position})`));const b=m.ariaLabel||m.name;return b&&E.setAttribute("aria-label",b),F.pointerup.forEach(C=>{E.addEventListener(C,he=>{if(he.preventDefault(),he.button&&he.button>0)return!1;m.handler.call(n,n,E)})}),m.afterInsert&&m.afterInsert.call(E,E),n},n.setRtl=()=>{[n.header,n.content,n.footer].forEach(m=>{m.dir="rtl",e.rtl.lang&&(m.lang=e.rtl.lang)})},n.id=e.id,n.classList.add("jsPanel-"+e.paneltype),e.paneltype==="standard"&&(n.style.zIndex=this.zi.next()),i.append(n),n.front(!1,!1),n.setTheme(e.theme),e.boxShadow&&n.classList.add(`jsPanel-depth-${e.boxShadow}`),e.header){if(e.headerLogo&&n.setHeaderLogo(e.headerLogo),n.setIconfont(e.iconfont),n.setHeaderTitle(e.headerTitle),n.setHeaderControls(),F.isIE){let m=[n.headerbar,n.controlbar];switch(n.options.headerControls.size){case"md":m.forEach(v=>{v.style.height="34px"});break;case"xs":m.forEach(v=>{v.style.height="26px"});break;case"sm":m.forEach(v=>{v.style.height="30px"});break;case"lg":m.forEach(v=>{v.style.height="38px"});break;case"xl":m.forEach(v=>{v.style.height="42px"});break}}if(e.header==="auto-show-hide"){let m="jsPanel-depth-"+e.boxShadow;n.header.style.opacity=0,n.style.backgroundColor="transparent",this.remClass(n,m),this.setClass(n.content,m),n.header.addEventListener("mouseenter",()=>{n.header.style.opacity=1,F.setClass(n,m),F.remClass(n.content,m)}),n.header.addEventListener("mouseleave",()=>{n.header.style.opacity=0,F.remClass(n,m),F.setClass(n.content,m)})}}else n.setHeaderRemove(),e.addCloseControl&&n.addCloseControl();if(e.headerToolbar&&n.addToolbar(n.headertoolbar,e.headerToolbar),e.footerToolbar&&n.addToolbar(n.footer,e.footerToolbar),e.border&&n.setBorder(e.border),e.borderRadius&&n.setBorderRadius(e.borderRadius),e.css)for(const[m,v]of Object.entries(e.css))if(m==="panel")n.className+=` ${v}`;else{let E=n.querySelector(`.jsPanel-${m}`);E&&(E.className+=` ${v}`)}if(e.content&&(typeof e.content=="function"?e.content.call(n,n):typeof e.content=="string"?n.content.innerHTML=e.content:n.content.append(e.content)),e.contentAjax&&this.ajax(e.contentAjax,n),e.contentFetch&&this.fetch(e.contentFetch,n),e.contentOverflow){const m=e.contentOverflow.split(" ");m.length===1?n.content.style.overflow=m[0]:m.length===2&&(n.content.style.overflowX=m[0],n.content.style.overflowY=m[1])}if(e.autoclose){typeof e.autoclose=="number"?e.autoclose={time:e.autoclose+"ms"}:typeof e.autoclose=="string"&&(e.autoclose={time:e.autoclose});let m=Object.assign({},F.defaultAutocloseConfig,e.autoclose);m.time&&typeof m.time=="number"&&(m.time+="ms");let v=n.progressbar.querySelector("div");v.addEventListener("animationend",E=>{E.stopPropagation(),n.progressbar.classList.remove("active"),n.close()}),m.progressbar&&(n.progressbar.classList.add("active"),m.background?F.colorNames[m.background]?n.progressbar.style.background="#"+F.colorNames[m.background]:n.progressbar.style.background=m.background:n.progressbar.classList.add("success-bg")),v.style.animation=`${m.time} progressbar`}if(e.rtl&&n.setRtl(),n.setSize(),n.status="normalized",e.position?this.position(n,e.position):n.style.opacity=1,document.dispatchEvent(d),n.calcSizeFactors(),e.animateIn&&(n.addEventListener("animationend",()=>{this.remClass(n,e.animateIn)}),this.setClass(n,e.animateIn)),e.syncMargins){let m=this.pOcontainment(e.maximizedMargin);e.dragit&&(e.dragit.containment=m,e.dragit.snap===!0?(e.dragit.snap=F.defaultSnapConfig,e.dragit.snap.containment=!0):e.dragit.snap&&(e.dragit.snap.containment=!0)),e.resizeit&&(e.resizeit.containment=m)}if(e.dragit?(["start","drag","stop"].forEach(m=>{e.dragit[m]?typeof e.dragit[m]=="function"&&(e.dragit[m]=[e.dragit[m]]):e.dragit[m]=[]}),n.drag(e.dragit),n.addEventListener("jspaneldragstop",m=>{m.panel===n&&n.calcSizeFactors()},!1)):n.titlebar.style.cursor="default",e.resizeit){["start","resize","stop"].forEach(v=>{e.resizeit[v]?typeof e.resizeit[v]=="function"&&(e.resizeit[v]=[e.resizeit[v]]):e.resizeit[v]=[]}),n.sizeit(e.resizeit);let m;n.addEventListener("jspanelresizestart",v=>{v.panel===n&&(m=n.status)},!1),n.addEventListener("jspanelresizestop",v=>{v.panel===n&&(m==="smallified"||m==="smallifiedmax"||m==="maximized")&&parseFloat(n.style.height)>parseFloat(window.getComputedStyle(n.header).height)&&(n.setControls([".jsPanel-btn-normalize"]),n.status="normalized",document.dispatchEvent(d),document.dispatchEvent(l),e.onstatuschange&&F.processCallbacks(n,e.onstatuschange,"every"),n.calcSizeFactors())},!1)}if(n.saveCurrentDimensions(),n.saveCurrentPosition(),e.setStatus&&(e.setStatus==="smallifiedmax"?n.maximize().smallify():e.setStatus==="smallified"?n.smallify():n[e.setStatus.slice(0,-1)]()),this.pointerdown.forEach(m=>{n.addEventListener(m,v=>{!v.target.closest(".jsPanel-btn-close")&&!v.target.closest(".jsPanel-btn-minimize")&&e.paneltype==="standard"&&n.front()},!1)}),e.onwindowresize&&n.options.container==="window"&&window.addEventListener("resize",n.windowResizeHandler,!1),e.onparentresize){let m=e.onparentresize,v=typeof m,E=n.isChildpanel();if(E){const b=E.content;let C=[];n.parentResizeHandler=he=>{if(he.panel===E){C[0]=b.offsetWidth,C[1]=b.offsetHeight;let ge=n.status,K,Q;ge==="maximized"&&m?n.maximize():n.snapped&&ge!=="minimized"?n.snap(n.snapped,!0):ge==="normalized"||ge==="smallified"||ge==="maximized"?v==="function"?m.call(n,n,{width:C[0],height:C[1]}):v==="object"&&m.preset===!0?(K=(C[0]-n.offsetWidth)*n.hf,n.style.left=K<=0?0:K+"px",Q=(C[1]-n.offsetHeight)*n.vf,n.style.top=Q<=0?0:Q+"px",m.callback.call(n,n,{width:C[0],height:C[1]})):v==="boolean"&&(K=(C[0]-n.offsetWidth)*n.hf,n.style.left=K<=0?0:K+"px",Q=(C[1]-n.offsetHeight)*n.vf,n.style.top=Q<=0?0:Q+"px"):ge==="smallifiedmax"&&m&&n.maximize().smallify()}},document.addEventListener("jspanelresize",n.parentResizeHandler,!1)}}return this.globalCallbacks&&(Array.isArray(this.globalCallbacks)?this.globalCallbacks.forEach(m=>m.call(n,n)):this.globalCallbacks.call(n,n)),e.callback&&(Array.isArray(e.callback)?e.callback.forEach(m=>m.call(n,n)):e.callback.call(n,n)),t&&(Array.isArray(t)?t.forEach(m=>m.call(n,n)):t.call(n,n)),document.dispatchEvent(o),n}};const df={id:"cell-html",name:"Cell HTML",type:"cell-renderer",version:"0.1.0",description:`Renders a cell's raw HTML value inline (unescaped); click the cell to pop the HTML open in its own window. Apply by setting a column's renderer to "html".`,author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-html.ts"};function hf(e){customElements.get("cell-html")||customElements.define("cell-html",mf),e.ui.registerCellRenderer("html","cell-html")}function ff(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}let pf=0;class mf extends HTMLElement{constructor(){super(...arguments),this._value="",this._label="HTML"}set value(t){const r=t??"";this._value!==r&&(this._value=r,this.render())}get value(){return this._value}set column(t){this._label=t?.label??"HTML"}connectedCallback(){this.render()}render(){if(this.innerHTML="",!this._value){const r=document.createElement("span");r.style.color="#9ca3af",r.textContent="empty",this.append(r);return}const t=document.createElement("span");t.innerHTML=this._value,t.title="Click to open in a window",t.style.cssText="display:inline-block;max-width:40ch;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;vertical-align:middle;cursor:pointer",t.addEventListener("click",r=>{r.stopPropagation(),this.openWindow()}),this.append(t)}openWindow(){const t=document.createElement("div");t.style.cssText="padding:0.75rem;overflow:auto;height:100%;box-sizing:border-box",t.innerHTML=this._value,F.create({id:`easydb-html-popup-${++pf}`,container:ff(),headerTitle:this._label,theme:"#7c3aed",content:t,contentSize:"520 400",position:"center-top 0 60",minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1},resizeit:{containment:!1}})}}const gf=Object.freeze(Object.defineProperty({__proto__:null,init:hf,meta:df},Symbol.toStringTag,{value:"Module"})),bf={id:"cell-link",name:"Cell Link",type:"cell-renderer",version:"0.2.0",description:"Renderer for URL/email/phone cells. Inside a single cell, http(s) URLs render as <a target=_blank>, email addresses as <a href=mailto:>, phone-like values as <a href=tel:>, anything else falls back to a text input. A pencil toggles to edit mode.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/cell-link.ts"};function yf(e){customElements.get("cell-link")||customElements.define("cell-link",wf),e.ui.registerCellRenderer("link","cell-link")}class wf extends HTMLElement{constructor(){super(...arguments),this._value="",this._editing=!1}set value(t){const r=t==null?"":String(t);this._value!==r&&(this._value=r,this._editing=!1,this.render())}get value(){return this._value}connectedCallback(){this.style.display="block",this.style.minWidth="0",this.style.maxWidth="100%",this.style.overflow="hidden",this.render()}render(){this.innerHTML="";const t=this._value,r=this._editing?null:vf(t),i=!this._editing&&!r?xf(t):null,n=!this._editing&&!r&&!i?$f(t):null;if(r||i||n){const o=document.createElement("span");o.style.cssText="display:flex;align-items:center;gap:0.25rem;width:100%;min-width:0;max-width:100%";const l=document.createElement("a");l.href=r?t:i?`mailto:${t.trim()}`:`tel:${t.replace(/[^\d+]/g,"")}`,r&&(l.target="_blank",l.rel="noopener noreferrer"),l.textContent=t,l.style.cssText="flex:1 1 auto;min-width:0;display:block;color:#2563eb;text-decoration:underline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis",l.title=r?`Open ${t}`:i?`Email ${t}`:`Call ${t}`;const c=document.createElement("button");c.type="button",c.title="Edit",c.textContent="✎",c.style.cssText="flex:none;background:transparent;border:0;cursor:pointer;color:#9ca3af;font-size:0.85em;padding:0 0.15rem;line-height:1",c.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation(),this._editing=!0,this.render()}),o.append(l,c),this.append(o)}else{const o=document.createElement("input");o.type="text",o.value=t,o.style.cssText="width:100%;box-sizing:border-box;border:0;background:transparent;font:inherit;padding:0",o.addEventListener("change",()=>this.commit(o.value)),o.addEventListener("keydown",l=>{l.key==="Enter"?(l.preventDefault(),this.commit(o.value)):l.key==="Escape"&&(this._editing=!1,this.render())}),this.append(o),this._editing&&setTimeout(()=>{o.focus(),o.select()},0)}}commit(t){this._value=t,this._editing=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}}function vf(e){const t=e.trim();return/^https?:\/\/\S+$/i.test(t)?t:null}function xf(e){const t=e.trim();return t&&/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(t)?t:null}function $f(e){const t=e.trim();if(!t||!/^[+0-9 ()\-.]+$/.test(t)||/^\d{4}-\d{2}-\d{2}$/.test(t)||/^\d{1,2}[/\-.]\d{1,2}[/\-.]\d{2,4}$/.test(t))return null;const r=t.replace(/\D/g,"");if(r.length<7||r.length>15)return null;const i=/[ ()\-.]/.test(t),n=t.startsWith("+");return!i&&!n&&r.length<10?null:t}const kf=Object.freeze(Object.defineProperty({__proto__:null,init:yf,meta:bf},Symbol.toStringTag,{value:"Module"}));var Cf=Object.defineProperty,Ef=Object.getOwnPropertyDescriptor,Fi=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ef(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Cf(t,r,n),n};let ci=null;function Sf(){return ci||(ci=document.createElement("top-progress"),document.body.appendChild(ci)),ci}let In=class extends Ne{constructor(){super(...arguments),this.visible=!1,this.frac=null,this.label="",this.active=new Set}static begin(e=""){return Sf().begin(e)}begin(e){const t=Symbol("progress");return this.active.add(t),this.label=e,this.frac=null,this.visible=!0,{fraction:r=>{this.active.has(t)&&(this.frac=r)},done:()=>{this.active.delete(t),this.active.size===0&&(this.visible=!1,this.frac=null,this.label="")}}}render(){if(!this.visible)return R``;const e=this.frac!=null;return R`<div
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
    </div>`}};In.styles=Ye`
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
  `;Fi([W()],In.prototype,"visible",2);Fi([W()],In.prototype,"frac",2);Fi([W()],In.prototype,"label",2);In=Fi([nt("top-progress")],In);const Fl=Object.freeze(Object.defineProperty({__proto__:null,get TopProgress(){return In}},Symbol.toStringTag,{value:"Module"}));var _f=Object.defineProperty,Tf=Object.getOwnPropertyDescriptor,zl=(e,t,r,i)=>{for(var n=i>1?void 0:i?Tf(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&_f(t,r,n),n};function ya(e){return(bn.instance??Af()).open(e)}function Af(){const e=document.createElement("column-names-dialog");return document.body.appendChild(e),e}let bn=class extends Ne{constructor(){super(...arguments),this.rows=[],this.source=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{if(e.preventDefault(),this.invalidIndices().size>0)return;const t=this.source.map((r,i)=>{const n=this.rows[i],o=n.field.trim(),l=n.label.trim()||o;return{...r,field:o,label:l,hidden:n.hidden}});this.finish(t)},this.toggleAllHidden=()=>{const e=this.rows.length>0&&this.rows.every(t=>t.hidden);this.rows=this.rows.map(t=>({...t,hidden:!e}))}}connectedCallback(){super.connectedCallback(),bn.instance=this}disconnectedCallback(){super.disconnectedCallback(),bn.instance===this&&(bn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Vt(this.dialogEl,e)}open(e){return this.source=e,this.rows=e.map(t=>({field:t.field,label:t.label,hidden:!!t.hidden})),new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}invalidIndices(){const e=new Set,t=new Map;this.rows.forEach((r,i)=>{const n=r.field.trim().toLowerCase();if(n===""){e.add(i);return}(t.get(n)??t.set(n,[]).get(n)).push(i)});for(const r of t.values())if(r.length>1)for(const i of r)e.add(i);return e}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}updateRow(e,t,r){this.rows=this.rows.map((i,n)=>n===e?{...i,[t]:r}:i)}setHidden(e,t){this.rows=this.rows.map((r,i)=>i===e?{...r,hidden:t}:r)}render(){const e=this.invalidIndices(),t=e.size;return R`
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
              ${t>0?`Fix ${t} column name${t===1?"":"s"} — names must be unique and non-empty.`:be}
            </p>
          </div>
        </form>
      </dialog>
    `}};bn.instance=null;bn.styles=[Wt,Ye`
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
    `];zl([W()],bn.prototype,"rows",2);bn=zl([nt("column-names-dialog")],bn);function Pf(e){let t;try{t=new URL(e)}catch{return e}const r=t.hostname.toLowerCase();if(r==="github.com"||r==="www.github.com"){const i=t.pathname.split("/").filter(Boolean);if(i.length>=5&&(i[2]==="blob"||i[2]==="raw")){const n=i[0],o=i[1];let l=i.slice(3);return l.length>=3&&l[0]==="refs"&&(l[1]==="heads"||l[1]==="tags")&&(l=l.slice(2)),`https://raw.githubusercontent.com/${[n,o,...l].join("/")}`}}return e}async function If(e,t){const r=Number(e.headers?.get?.("content-length")),i=e.body?.getReader?.();if(i&&Number.isFinite(r)&&r>0){const n=[];let o=0;for(;;){const{done:d,value:g}=await i.read();if(d)break;g&&(n.push(g),o+=g.length,t?.(Math.min(1,o/r)))}const l=new Uint8Array(o);let c=0;for(const d of n)l.set(d,c),c+=d.length;return new TextDecoder().decode(l)}return await e.text()}var Df=Object.defineProperty,Rf=Object.getOwnPropertyDescriptor,tn=(e,t,r,i)=>{for(var n=i>1?void 0:i?Rf(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Df(t,r,n),n};const Of="https://raw.githubusercontent.com/cawoodm/easydbaccess/main/data/northwind.db.json",jf="https://raw.githubusercontent.com/MainakRepositor/Datasets/master/Air%20Quality/real_2016_air.csv",Ff='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>',wa=[{label:"Northwind — sample database (JSON dump)",url:Of,kind:"json"},{label:"Air quality — 2016 readings (CSV)",url:jf,kind:"csv"},{label:"Datasette — US legislators (whole database, pick tables)",url:"https://datasette.io/legislators",kind:"datasette"},{label:"Datasette — datasette.io (whole instance, pick database & tables)",url:"https://datasette.io",kind:"datasette"}],zf={id:"import-data",name:"Import Data",type:"importer",version:"0.2.0",description:"Header button that imports data from a URL — a JSON dump (e.g. Northwind) or a Datasette table, database, or whole instance — with a picker of sample sources.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/import-data.ts"};function Lf(e){e.ui.registerHeaderButton({id:"import-data:open",label:"Import",icon:Ff,tooltip:"Import data from a URL (snapshot into a local table)",onClick:()=>qf(e)}),e.ui.registerTableButton({id:"import-data:refresh",label:"Refresh",icon:"refresh",tooltip:"Reload this table from the URL it was imported from",visible:t=>t.origin?.type==="csv"||t.origin?.type==="json",onClick:(t,{tableId:r})=>Nf(t,r)})}const va=50*1024*1024;function xa(e){try{return new URL(e).host}catch{return e}}async function Mf(e){try{return(await e.text()).replace(/\s+/g," ").trim().slice(0,300)}catch{return""}}async function Bf(e,t,r={}){const i=Pf(t),n=r.slowMs??2e3;let o=setTimeout(()=>{o=void 0,r.onSlow?.()},n);const l=()=>{o!==void 0&&(clearTimeout(o),o=void 0)};try{let c;try{c=await e.backend.fetch(i)}catch(g){throw new Error(`Could not reach ${xa(i)} — no response. The server may be down, blocking cross-origin (CORS) requests, or the transfer may have failed (e.g. a very large file). [${g.message}]`)}if(!c.ok){const g=await Mf(c);throw new Error(`HTTP ${c.status} ${c.statusText||""}`.trim()+(g?` — ${g}`:""))}const d=Number(c.headers.get("content-length"));if(Number.isFinite(d)&&d>va)throw new Error(`Response is ${(d/(1024*1024)).toFixed(1)} MB, over the ${va/(1024*1024)} MB browser import limit. Import a smaller extract, or use a server/Datasette connection for large datasets.`);try{return await If(c,r.onProgress)}catch(g){throw new Error(`Failed reading the response body from ${xa(i)}: ${g.message}`)}}finally{l()}}async function Is(e,t,r){const i={handle:null};try{return await Bf(e,t,{onSlow:()=>{i.handle=In.begin(r)},onProgress:n=>i.handle?.fraction(n)})}finally{i.handle?.done()}}async function Nf(e,t){const r=await e.store.tables.findOne(t),i=r?.origin;if(i?.url)try{const n=await Is(e,i.url,`Reading ${r?.name??"data"}…`);let o;if(i.type==="csv")o=Pr(n).rows;else{const d=Ir(JSON.parse(n),r.name),g=d.find($=>$.name===r.name)??(d.length===1?d[0]:void 0);if(!g)throw new Error(`"${r.name}" is no longer in the dump at ${i.url}`);o=g.rows}const l=e.store.rows(t),c=await l.find();await l.bulkRemove(c.map(d=>d.id)),await l.bulkInsert(o.map(d=>({id:Uf(),tableId:t,data:d,updatedAt:Date.now()}))),e.ui.dialogs.toast(`Refreshed "${r.name}" (${o.length} rows).`,{kind:"success",title:"Refresh"})}catch(n){e.ui.dialogs.toast(`Couldn't refresh "${r?.name??t}": ${n.message}`,{kind:"error",title:"Refresh"})}}function Uf(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}async function qf(e){const r=await(ft.instance??Hf()).open({async listDatabases($){const w=yn($);return pl(S=>e.backend.fetch(S),w.base)}});if(!r)return;const{url:i,file:n,kind:o,dbChosen:l,editColumns:c,maxRows:d}=r,g=n?.name??i;try{if(n){if(o==="csv"){const $=d!=null?await rl(n,d):await n.text();await yi(e,$,n.name,{editColumns:c?ya:void 0,maxRows:d})}else{const $=await n.text();await wi(e,$,n.name,{maxRows:d})}e.ui.dialogs.toast(`Imported ${n.name}.`,{kind:"success",title:"Import"});return}if(o==="datasette")await Js(e,i,{skipTablePicker:l});else if(o==="csv"){const $=await Is(e,i,`Reading ${er(i)}…`);await yi(e,$,er(i),{editColumns:c?ya:void 0,maxRows:d,origin:{type:"csv",url:i}}),e.ui.dialogs.toast(`Imported ${er(i)}.`,{kind:"success",title:"Import"})}else{const $=await Is(e,i,`Reading ${er(i)}…`);await wi(e,$,er(i),{originUrl:i,maxRows:d}),e.ui.dialogs.toast(`Imported ${er(i)}.`,{kind:"success",title:"Import"})}}catch($){e.ui.dialogs.toast(`Could not import ${g}: ${$.message}`,{kind:"error",title:"Import"})}}function Hf(){const e=document.createElement("import-dialog");return document.body.appendChild(e),e}function Wf(e){try{const t=new URL(e),r=t.hostname.toLowerCase(),i=[...t.searchParams.keys()].some(o=>o.startsWith("_")),n=r.includes("datasette")||i;return!i&&/\.csv$/i.test(t.pathname)?"csv":!i&&/\.json$/i.test(t.pathname)?"json":n?"datasette":"json"}catch{return"json"}}function $a(e,t){if(t!=="datasette"||!e)return!1;try{const r=yn(e);return!r.db&&!r.table}catch{return!1}}function er(e){try{const r=new URL(e).pathname.split("/").filter(Boolean).pop();return r&&r.length>0?r:"sample.db.json"}catch{return"sample.db.json"}}function Kf(e){return/\.csv$/i.test(e)?"csv":"json"}let ft=class extends Ne{constructor(){super(...arguments),this.url="",this.kind="auto",this.presetIdx=-1,this.dbList=null,this.dbLoading=!1,this.dbError="",this.selectedDb="",this.editColumns=!1,this.file=null,this.maxRowsInput="",this.dialogEl=null,this.resolveFn=null,this.listDatabases=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault();const t=this.url.trim();if(!t&&!this.file)return;const r=this.resolvedKind,i=this.maxRows,n=r==="csv"&&this.editColumns;if(this.file){this.finish({url:"",file:this.file,kind:r,editColumns:n,maxRows:i});return}const o=r==="datasette"&&!!this.selectedDb&&$a(t,r),l=o?`${t.replace(/\/+$/,"")}/${encodeURIComponent(this.selectedDb)}`:t;this.finish({url:l,kind:r,dbChosen:o,editColumns:n,maxRows:i})}}get resolvedKind(){return this.kind!=="auto"?this.kind:this.file?Kf(this.file.name):Wf(this.url.trim())}get maxRows(){const e=Math.floor(Number(this.maxRowsInput));return Number.isFinite(e)&&e>0?e:void 0}resetDbList(){this.dbList=null,this.selectedDb="",this.dbError="",this.dbLoading=!1}async loadDatabases(){const e=this.url.trim();if(!(!e||!this.listDatabases)){this.dbLoading=!0,this.dbError="",this.dbList=null,this.selectedDb="";try{const t=await this.listDatabases(e);this.dbList=t,t.length===0?this.dbError="No databases found at that instance.":t.length===1&&(this.selectedDb=t[0])}catch(t){this.dbError=t?.message??"Could not list databases."}finally{this.dbLoading=!1}}}connectedCallback(){super.connectedCallback(),ft.instance=this}disconnectedCallback(){super.disconnectedCallback(),ft.instance===this&&(ft.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Vt(this.dialogEl,e)}open(e){return this.url="",this.kind="auto",this.presetIdx=-1,this.editColumns=!1,this.file=null,this.maxRowsInput="",this.resetDbList(),this.listDatabases=e?.listDatabases??null,new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>this.dialogEl?.showModal())})}finish(e){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>t?.(e))}onPresetChange(e){const t=Number(e.target.value);this.presetIdx=t,this.resetDbList();const r=wa[t];r&&(this.url=r.url,this.kind=r.kind)}onFileChange(e){const r=e.target.files?.[0]??null;this.file=r,r&&(this.url="",this.presetIdx=-1,this.resetDbList())}renderDbPicker(){return!this.listDatabases||!$a(this.url.trim(),this.resolvedKind)?be:R`
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
      ${this.dbError?R`<p class="hint error">${this.dbError}</p>`:be}
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
                ${wa.map((e,t)=>R`<option value=${String(t)} ?selected=${t===this.presetIdx}>
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
            ${this.resolvedKind==="csv"?R`<label class="check">
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
            ${this.resolvedKind==="datasette"&&this.maxRows!=null?R`<p class="hint">
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
    `];tn([W()],ft.prototype,"url",2);tn([W()],ft.prototype,"kind",2);tn([W()],ft.prototype,"presetIdx",2);tn([W()],ft.prototype,"dbList",2);tn([W()],ft.prototype,"dbLoading",2);tn([W()],ft.prototype,"dbError",2);tn([W()],ft.prototype,"selectedDb",2);tn([W()],ft.prototype,"editColumns",2);tn([W()],ft.prototype,"file",2);tn([W()],ft.prototype,"maxRowsInput",2);ft=tn([nt("import-dialog")],ft);const Vf=Object.freeze(Object.defineProperty({__proto__:null,get ImportDialog(){return ft},init:Lf,meta:zf},Symbol.toStringTag,{value:"Module"})),Gf={id:"auto-sync",name:"Auto Sync",type:"sync",version:"0.1.0",description:"Pushes the workspace to the server every minute; prompts to pull when the server changes.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/auto-sync.ts"},Yf=6e4;let ka=null,Ds=!1;const ms=new Map;function Xf(e){ka===null&&(typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"||(ka=setInterval(()=>{Ll(e)},Yf)))}async function Ll(e){if(Ds)return;const t=e.workspaceId();if(!t)return;const r=await Il(e);if(r)try{await Qf(e,r,t)}catch(i){console.warn("[auto-sync]",i)}}async function Qf(e,t,r){const i=await Oi(e),n=await Dl(e,r),o=await fetch(`${t}/sync/${encodeURIComponent(r)}`);if(o.status===404){await Ca(e,t,r,i,null);return}if(!o.ok)return;const l=ji(o.headers.get("ETag")),c=await o.text();if(ma(i)===ma(c)){l&&l!==n&&await Hn(e,r,l);return}if(l&&l===n){await Ca(e,t,r,i,n);return}if(!(l&&ms.get(r)===l)){Ds=!0;try{if(await e.ui.dialogs.confirm(`The server has new data for "${r}". Pull and replace your local copy?`,"auto-sync")){const g=JSON.parse(c),$=await Rl(e,r,g);l&&await Hn(e,r,l),ms.delete(r),e.ui.dialogs.toast(`Pulled ${$} table${$===1?"":"s"} from the server.`,{kind:"success",title:"auto-sync"})}else l&&ms.set(r,l)}finally{Ds=!1}}}async function Ca(e,t,r,i,n){const o={"Content-Type":"application/json"};n&&(o["If-Match"]=`"${n}"`);const l=await fetch(`${t}/sync/${encodeURIComponent(r)}`,{method:"PUT",headers:o,body:i});if(l.ok){const c=ji(l.headers.get("ETag"));c&&await Hn(e,r,c);return}if(l.status===412){const c=await l.json().catch(()=>({}));c.currentEtag&&await Hn(e,r,c.currentEtag)}}const Ml=Object.freeze(Object.defineProperty({__proto__:null,load:Xf,meta:Gf,tick:Ll},Symbol.toStringTag,{value:"Module"})),Bl=/\$([A-Za-z_][A-Za-z0-9_]*)/g;function Ea(...e){const t=new Set;for(const r of e)if(r)for(const i of r.matchAll(Bl))t.add(i[1]);return[...t]}function Jf(e,t,r){return e.replace(Bl,(i,n)=>{const o=r[n];if(!o)return"";const l=t.data[o];return l==null?"":String(l)})}function Sa(e){return e==null||e===""}function Zf(e,t){const r=Object.entries(t).filter(([,i])=>i!=null&&String(i).trim()!=="");return r.length===0?e:e.filter(i=>r.every(([n,o])=>String(i.data[n]??"").toLowerCase().includes(String(o).toLowerCase())))}function ep(e,t,r=!0){if(!t)return e;const i=r?1:-1;return[...e].sort((n,o)=>{const l=n.data[t],c=o.data[t],d=Sa(l),g=Sa(c);if(d||g)return d===g?0:d?1:-1;const $=Number(l),w=Number(c);return!Number.isNaN($)&&!Number.isNaN(w)?($-w)*i:String(l).localeCompare(String(c),void 0,{numeric:!0,sensitivity:"base"})*i})}function tp(e,t){return ep(Zf(e,t.filters??{}),t.sortColumn,t.sortAsc??!0)}function np(e){return!!e&&e.trim().length>0}var rp=Object.defineProperty,ip=Object.getOwnPropertyDescriptor,lr=(e,t,r,i)=>{for(var n=i>1?void 0:i?ip(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&rp(t,r,n),n};function Rs(e,t){(jt.instance??sp()).open(e,t)}function sp(){const e=document.createElement("views-dialog");return document.body.appendChild(e),e}function _a(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}let jt=class extends Ne{constructor(){super(...arguments),this.mode="list",this.instances=[],this.templates=[],this.tDraft=null,this.iDraft=null,this.tableId="",this.table=null,this.columns=[],this.dialogEl=null,this.close=()=>{this.dialogEl?.close()},this.onSubmit=e=>{e.preventDefault(),this.mode==="template"?this.saveTemplate():this.mode==="instance"?this.saveInstance():this.close()}}connectedCallback(){super.connectedCallback(),jt.instance=this}disconnectedCallback(){super.disconnectedCallback(),jt.instance===this&&(jt.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Vt(this.dialogEl,e)}async open(e,t){if(this.tableId=e,this.mode="list",this.tDraft=null,this.iDraft=null,await this.refresh(),t?.editTemplateId){const r=this.templates.find(i=>i.id===t.editTemplateId);r&&this.editTemplate(r)}else if(t?.editInstanceId){const r=this.instances.find(i=>i.id===t.editInstanceId);r&&await this.editInstance(r)}await this.updateComplete,this.dialogEl?.showModal()}async refresh(){const e=await ye(),t=e.workspaceId;this.table=await e.store.tables.findOne(this.tableId),this.columns=this.table?.columns??[],this.instances=(await e.store.viewInstances.find({workspaceId:t})).filter(r=>r.tableId===this.tableId),this.templates=(await e.store.viewTemplates.find({workspaceId:t})).sort((r,i)=>r.name.localeCompare(i.name))}async openInstance(e){await(await ye()).store.viewInstances.patch(e,{open:!0,updatedAt:Date.now()}),this.close()}async editInstance(e){const r=await(await ye()).store.viewTemplates.findOne(e.templateId),i=r?Ea(r.headerHtml,r.rowHtml,r.footerHtml):Object.keys(e.mapping);this.iDraft={id:e.id,templateId:e.templateId,templateName:r?.name??"template",name:e.name,tokens:i,mapping:{...e.mapping},limit:e.limit??0},this.mode="instance"}async deleteInstance(e){await(await ye()).store.viewInstances.remove(e),await this.refresh()}newTemplate(){this.tDraft={id:null,name:"",headerHtml:"",rowHtml:"",footerHtml:""},this.mode="template"}editTemplate(e){this.tDraft={id:e.id,name:e.name,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}copyTemplate(e){this.tDraft={id:null,name:`${e.name} copy`,headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml},this.mode="template"}async saveTemplate(){if(!this.tDraft)return;const e=this.tDraft;if(!e.name.trim())return;const t=await ye();e.id?await t.store.viewTemplates.patch(e.id,{name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()}):await t.store.viewTemplates.insert({id:_a(),workspaceId:t.workspaceId,name:e.name.trim(),headerHtml:e.headerHtml,rowHtml:e.rowHtml,footerHtml:e.footerHtml,updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-views")),await this.refresh(),this.mode="list"}useTemplate(e){const t=Ea(e.headerHtml,e.rowHtml,e.footerHtml),r={};for(const i of t)r[i]=this.autoMap(i);this.iDraft={id:null,templateId:e.id,templateName:e.name,name:`${e.name} — ${this.table?.name??"table"}`,tokens:t,mapping:r,limit:0},this.mode="instance"}firstColumn(e){const t=this.columns.find(e);return t?t.field:""}autoMap(e){const t=e.toLowerCase(),r=this.columns.find(c=>c.field.toLowerCase()===t||(c.label??"").toLowerCase()===t);if(r)return r.field;const i=this.table?.labelColumn;if(i&&(t==="title"||t==="name"||t==="label"))return i;if(["date","datetime","time","created","updated","modified","timestamp","day","when"].includes(t))return this.firstColumn(c=>c.type==="date"||c.type==="datetime");const o=["url","link","href","website","homepage","uri","site","web"];if(o.includes(t)){const c=this.firstColumn(d=>d.renderer==="link");return c||this.firstColumn(d=>{const g=d.field.toLowerCase(),$=(d.label??"").toLowerCase();return o.some(w=>g.includes(w)||$.includes(w))})}const l=["description","desc","notes","note","body","text","summary","about","comment","comments","details","detail","remarks"];if(l.includes(t)){const c=this.firstColumn(w=>{if(w.type!=="string")return!1;const S=w.field.toLowerCase(),U=(w.label??"").toLowerCase();return l.some(N=>S.includes(N)||U.includes(N))});if(c)return c;const d=this.columns.filter(w=>w.type==="string"),g=d[0];if(!g)return"";let $=g;for(const w of d)(w.max??0)>($.max??0)&&($=w);return $.field}return""}async saveInstance(){if(!this.iDraft||!this.table)return;const e=this.iDraft;if(!e.name.trim())return;const t=await ye();if(e.id){await t.store.viewInstances.patch(e.id,{name:e.name.trim(),mapping:{...e.mapping},limit:e.limit>0?e.limit:void 0,updatedAt:Date.now()}),document.dispatchEvent(new CustomEvent("easydb:reload-view",{detail:{instanceId:e.id}})),await this.refresh(),this.mode="list";return}const r=this.columns.filter(n=>!n.hidden).map(n=>n.field),i={id:_a(),workspaceId:t.workspaceId,tableId:this.tableId,tableName:this.table.name,templateId:e.templateId,name:e.name.trim(),sortColumn:this.table.sortColumn,sortAsc:this.table.sortAsc,filters:{...this.table.filters??{}},visibleColumns:r,mapping:{...e.mapping},updatedAt:Date.now(),...e.limit>0?{limit:e.limit}:{}};await t.store.viewInstances.insert(i),await this.openInstance(i.id)}renderList(){return R`
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
                ${e.builtin?R`<span class="badge">built-in</span>`:be}
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
    `];lr([W()],jt.prototype,"mode",2);lr([W()],jt.prototype,"instances",2);lr([W()],jt.prototype,"templates",2);lr([W()],jt.prototype,"tDraft",2);lr([W()],jt.prototype,"iDraft",2);jt=lr([nt("views-dialog")],jt);const op={id:"views",name:"Views",type:"ui",version:"0.1.0",description:"Display tables through HTML view templates in read-only windows.",author:"easyDBAccess built-ins",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/views.ts"},ap="grid_view",Ta="RSS Feed",Os='<div style="display:flex;flex-direction:column;gap:12px;padding:12px;">',js=['<div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px 16px;background:#ffffff;box-shadow:0 1px 2px rgba(0,0,0,0.06);">','<a href="$URL" target="_blank" rel="noopener noreferrer" style="font-size:1.05rem;font-weight:600;color:#2563eb;text-decoration:none;">$TITLE</a>','<div style="color:#6b7280;font-size:0.78rem;margin:4px 0;">$DATE</div>','<div style="color:#374151;font-size:0.9rem;line-height:1.45;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:20;line-clamp:20;overflow:hidden;">$DESCRIPTION</div>',"</div>"].join(""),Fs="</div>";function lp(e){e.ui.registerTableButton({id:"views:open",label:"Views",icon:ap,tooltip:"Views — display this table through a template",onClick:(t,{tableId:r})=>Rs(r)})}async function cp(e){await dp(e)}function up(){let e=5381;const t=`${Os}\0${js}\0${Fs}`;for(let r=0;r<t.length;r++)e=(e<<5)+e+t.charCodeAt(r)|0;return(e>>>0).toString(36)}async function dp(e){const t=e.workspaceId();if(!t)return;const r=`views:seeded:rss:${t}`,i=`views:sig:rss:${t}`,n=up(),o=(await e.store.viewTemplates.find({workspaceId:t})).find(c=>c.builtin&&c.name===Ta);if(o){(await e.store.settings.findOne(i))?.value!==n&&(await e.store.viewTemplates.patch(o.id,{headerHtml:Os,rowHtml:js,footerHtml:Fs,updatedAt:Date.now()}),await e.store.settings.upsert({key:i,value:n})),await e.store.settings.upsert({key:r,value:!0});return}(await e.store.settings.findOne(r))?.value||(await e.store.viewTemplates.insert({id:hp(),workspaceId:t,name:Ta,headerHtml:Os,rowHtml:js,footerHtml:Fs,builtin:!0,updatedAt:Date.now()}),await e.store.settings.upsert({key:r,value:!0}),await e.store.settings.upsert({key:i,value:n}))}function hp(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}const fp=Object.freeze(Object.defineProperty({__proto__:null,init:lp,load:cp,meta:op},Symbol.toStringTag,{value:"Module"})),pp={id:"settings",name:"Settings",type:"ui",fixed:!0,version:"0.1.0",description:"Header gear button that opens the tabbed Settings dialog; imports dropped secrets.txt.",author:"Marc Cawood",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',repo:"https://github.com/cawoodm/easydbaccess/blob/main/packages/renderer/src/plugins/settings.ts"};function mp(e){e.ui.registerHeaderButton({id:"settings:open",label:"Settings",icon:"settings",tooltip:"Workspace and plugin settings",variant:"secondary",onClick:()=>e.ui.openSettings()}),e.ui.registerDropHandler(async(t,r)=>{const n=Array.from(t.dataTransfer?.files??[]).find(c=>c.name.toLowerCase()==="secrets.txt");if(!n)return!1;const o=await n.text(),l=Object.keys(Ai(o)).length;return Ti().trim().length>0&&!await r.ui.dialogs.confirm(`Replace your current secrets with ${l} secret${l===1?"":"s"} from "${n.name}"?`,"Import secrets")||(Za(o),r.ui.dialogs.toast(`Imported ${l} secret${l===1?"":"s"}.`,{kind:"success",title:"Secrets"})),!0})}const gp=Object.freeze(Object.defineProperty({__proto__:null,init:mp,meta:pp},Symbol.toStringTag,{value:"Module"})),bp=[gp,Hh,Lu,ad,uh,qu,vh,bh,Oh,Nh,tf,of,uf,gf,kf,Vf,Ml,fp];function yp(e){if(!e.meta)throw new Error("Built-in plugin is missing meta");return e.meta}const Nl=bp.map(e=>{const t=yp(e);return{id:t.id,meta:t,module:e}}),wp=Nl;function zs(e){return`builtin:${e}`}async function vp(e){const t=[];for(const r of Nl)if(!await xp(e,r)){t.push(r);try{await r.module.init?.(e)}catch(i){e.events.emit("plugin:error",{url:r.id,phase:"init",error:i})}}return async()=>{for(const r of t)try{await r.module.load?.(e)}catch(i){e.events.emit("plugin:error",{url:r.id,phase:"load",error:i})}}}async function xp(e,t){return t.meta.fixed?!1:(await e.store.plugins.findOne(zs(t.id)))?.enabled===!1}async function $p(e){const t=e.workspaceId();if(!t)return async()=>{};const i=(await e.store.workspaces.findOne(t))?.pluginUrls??[],n=[];for(const o of i)try{const l=await e.store.plugins.findOne(o);if(l&&l.enabled===!1)continue;let c=l?.cachedBody??"";if(c)kp(e,o,c);else{try{c=await Ul(o)}catch($){await e.store.plugins.upsert({url:o,enabled:l?.enabled??!0,lastFetched:Date.now(),lastError:`fetch: ${$.message}`}),e.events.emit("plugin:error",{url:o,phase:"fetch",error:$});continue}await e.store.plugins.upsert({url:o,enabled:!0,lastFetched:Date.now(),cachedBody:c})}const d=new Blob([c],{type:"text/javascript"}),g=URL.createObjectURL(d);try{const $=await import(g);await $.init?.(e),n.push({url:o,mod:$})}finally{setTimeout(()=>URL.revokeObjectURL(g),5e3)}}catch(l){await e.store.plugins.upsert({url:o,enabled:!0,lastFetched:Date.now(),lastError:`init: ${l.message}`}),e.events.emit("plugin:error",{url:o,phase:"init",error:l})}return async()=>{for(const{url:o,mod:l}of n)try{await l.load?.(e)}catch(c){await e.store.plugins.upsert({url:o,enabled:!0,lastFetched:Date.now(),lastError:`load: ${c.message}`}),e.events.emit("plugin:error",{url:o,phase:"load",error:c})}}}async function Ul(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status} ${t.statusText}`);const r=await t.text();if((t.headers.get("content-type")??"").toLowerCase().includes("text/html")||/^\s*<(!doctype|html|head|body)/i.test(r))throw new Error("response is HTML, not a JS module (URL likely 404 → SPA fallback)");return r}function kp(e,t,r){return(async()=>{try{const i=await Ul(t);if(i===r)return;await e.store.plugins.upsert({url:t,enabled:!0,lastFetched:Date.now(),cachedBody:i})}catch{}})()}let gs=null;function ye(){return gs||(gs=Cp()),gs}async function Cp(){const e=await tu(),t=iu(e),r=ou(),i=fu(),n=new Map;t.tables.subscribe(z=>{n.clear();for(const q of z)n.set(q.id,q)});const o={...t.tables,insert:z=>(n.set(z.id,z),t.tables.insert(z)),upsert:z=>(n.set(z.id,z),t.tables.upsert(z))};let l=null;const c={get backend(){if(!l)throw new Error("[host] row-source ctx used before app init completed");return l.backend},events:r,settings:t.settings,workspaceId:()=>w},d=su({base:{...t,tables:o},providers:i.rowSources,tableById:z=>n.get(z),ctx:c}),g=Ep(),$=await d.workspaces.find();let w;if(g){const z=Tp(g),q=$.find(G=>G.id===z||G.name===g);q?w=q.id:w=(await d.workspaces.insert({id:z,name:g,createdAt:Date.now(),pluginUrls:[]})).id}else{const z=Sp(),q=z?$.find(G=>G.id===z):void 0;q?w=q.id:$.length>0?w=$[0].id:w=(await d.workspaces.insert({id:"default",name:"default",createdAt:Date.now(),pluginUrls:[]})).id}_p(w);const S=yu({store:d,events:r,registries:i,workspaceId:()=>w});l=S,r.on("import:after",({source:z,tableId:q,rowCount:G})=>{z!=="datasette"&&S.store.tables.findOne(q).then(de=>{S.ui.dialogs.toast(`Imported ${G} row${G===1?"":"s"} into "${de?.name??q}".`,{kind:"success",title:z.toUpperCase()+" import"})})}),r.on("plugin:error",({url:z,phase:q,error:G})=>{S.ui.dialogs.toast(`[${q}] ${G?.message??String(G)}`,{kind:"error",title:`Plugin: ${z}`})});const U=await vp(S),N=await $p(S);return queueMicrotask(async()=>{r.emit("app:ready",{workspaceId:w}),await U(),await N()}),{store:d,events:r,workspaceId:w,registries:i,api:S}}function Ep(){if(typeof location>"u")return null;const t=new URLSearchParams(location.search).get("space");return t&&t.trim().length>0?t.trim():null}const ql="eda:lastWorkspaceId";function Sp(){try{return globalThis.localStorage?.getItem(ql)??null}catch{return null}}function _p(e){try{globalThis.localStorage?.setItem(ql,e)}catch{}}function Tp(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"default"}var Ap=Object.defineProperty,Pp=Object.getOwnPropertyDescriptor,zi=(e,t,r,i)=>{for(var n=i>1?void 0:i?Pp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Ap(t,r,n),n};let or=class extends Ne{constructor(){super(...arguments),this.name="",this.text="",this.errorMsg="",this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Vt(this.dialogEl,e)}async open(){this.name="",this.text="",this.errorMsg="",await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async submit(e){e.preventDefault();const t=this.name.trim()||"pasted";if(this.text.trim().length===0){this.errorMsg="Paste some CSV first.";return}let r;try{r=Pr(this.text)}catch(l){this.errorMsg=`Couldn't parse the CSV: ${l.message}`;return}if(r.columns.length===0||r.rows.length===0){this.errorMsg="No data found in the pasted text.";return}const i=await ye(),n=crypto.randomUUID();await i.store.tables.insert({id:n,workspaceId:i.workspaceId,name:t,code:Ip(t),columns:r.columns,view:"table",updatedAt:Date.now()});const o=r.rows.map(l=>({id:crypto.randomUUID(),tableId:n,data:l,updatedAt:Date.now()}));await i.store.rows(n).bulkInsert(o),i.api.ui.dialogs.toast(`Imported ${r.rows.length} row${r.rows.length===1?"":"s"} into "${t}".`,{kind:"success",title:"CSV paste"}),this.close()}render(){return R`
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
    `];zi([W()],or.prototype,"name",2);zi([W()],or.prototype,"text",2);zi([W()],or.prototype,"errorMsg",2);or=zi([nt("csv-paste-dialog")],or);function Ip(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}var Dp=Object.defineProperty,Rp=Object.getOwnPropertyDescriptor,to=(e,t,r,i)=>{for(var n=i>1?void 0:i?Rp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Dp(t,r,n),n};const Op=`function render(row) {
  // \`row\` is the full row object — access any field by name (row.field).
  // Return an HTML string; it is injected into the cell as raw HTML.
  return '<b>' + (row.name ?? '') + '</b>';
}
`;let cn=class extends Ne{constructor(){super(...arguments),this.text="",this.columnLabel="",this.dialogEl=null,this.resolver=null,this.onCancel=()=>this.resolve(null),this.onSubmit=e=>{e.preventDefault(),this.resolve(this.text)}}connectedCallback(){super.connectedCallback(),cn.instance=this}disconnectedCallback(){super.disconnectedCallback(),cn.instance===this&&(cn.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Vt(this.dialogEl,e)}async open(e,t){return this.resolver&&(this.resolver(null),this.resolver=null),this.text=e&&e.trim()?e:Op,this.columnLabel=t??"",await this.updateComplete,this.dialogEl?.showModal(),new Promise(r=>{this.resolver=r})}resolve(e){const t=this.resolver;this.resolver=null,this.dialogEl?.close(),t&&t(e)}render(){return R`
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
    `];to([W()],cn.prototype,"text",2);to([W()],cn.prototype,"columnLabel",2);cn=to([nt("script-editor-dialog")],cn);var jp=Object.defineProperty,Fp=Object.getOwnPropertyDescriptor,Lt=(e,t,r,i)=>{for(var n=i>1?void 0:i?Fp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&jp(t,r,n),n};const zp=["string","number","boolean","date","datetime"];let Et=class extends Ne{constructor(){super(...arguments),this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.columns=[],this.errorMsg="",this.noticeMsg="",this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,this.previewRows=[],this.rendererOptions=[],this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Vt(this.dialogEl,e)}async open(e,t){this.errorMsg="",this.noticeMsg=t?.notice??"";const r=await ye();if(this.rendererOptions=[...r.registries.cellRenderers.keys()].sort(),this.rendererSubUnsub?.(),this.rendererSubUnsub=r.events.on("app:ready",()=>{this.rendererOptions=[...r.registries.cellRenderers.keys()].sort()}),e){const i=await ye(),n=await i.store.tables.findOne(e);if(!n)return;this.mode="edit",this.editTableId=e,this.name=n.name,this.tableTitle=n.title??"",this.columns=n.columns.map(l=>({field:l.field,label:l.label,type:l.type,renderer:l.renderer,script:l.script,max:l.max,unique:l.unique,notnull:l.notnull,hidden:l.hidden,origField:l.field}));const o=await i.store.rows(e).find();this.previewRows=o.slice(0,100)}else this.mode="new",this.editTableId=null,this.name="",this.tableTitle="",this.columns=[{field:"name",label:"Name",type:"string"},{field:"note",label:"Note",type:"string"}],this.previewRows=[];await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close(),this.rendererSubUnsub?.(),this.rendererSubUnsub=void 0}addColumn(){const e=this.columns.length+1;this.columns=[...this.columns,{field:`field_${e}`,label:`Field ${e}`,type:"string"}]}removeColumn(e){this.columns=this.columns.filter((t,r)=>r!==e)}moveColumn(e,t){const r=e+t;if(r<0||r>=this.columns.length)return;const i=[...this.columns],[n]=i.splice(e,1);i.splice(r,0,n),this.columns=i}onRowDragStart(e,t){this.dragSrcIdx=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/x-easydb-coleditor-row",String(t)))}onRowDragOver(e,t,r){if(this.dragSrcIdx===null||this.dragSrcIdx===t)return;e.preventDefault();const i=r.getBoundingClientRect(),n=e.clientY<i.top+i.height/2;this.dropTargetIdx=t,this.dropEdge=n?"before":"after"}onRowDragLeave(e){this.dropTargetIdx===e&&(this.dropTargetIdx=null,this.dropEdge=null)}onRowDrop(e,t){e.preventDefault();const r=this.dragSrcIdx,i=this.dropEdge;if(this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null,r===null||r===t||!i)return;const n=[...this.columns],[o]=n.splice(r,1);let l=t+(r<t?-1:0);i==="after"&&(l+=1),n.splice(l,0,o),this.columns=n}onRowDragEnd(){this.dragSrcIdx=null,this.dropTargetIdx=null,this.dropEdge=null}patchColumn(e,t){this.columns=this.columns.map((r,i)=>i===e?{...r,...t}:r)}async editScript(e){const t=cn.instance;if(!t)return;const r=this.columns[e];if(!r)return;const i=await t.open(r.script??"",r.label||r.field);i!==null&&this.patchColumn(e,{script:i.trim()?i:void 0})}async submit(e){e.preventDefault();const t=this.name.trim();if(!t){this.errorMsg="Table name is required.";return}const r=await ye(),i=(await r.store.tables.find()).filter(g=>g.workspaceId===r.workspaceId),n=t.toLowerCase(),o=i.find(g=>g.name.toLowerCase()===n&&g.id!==this.editTableId);if(o){this.errorMsg=`A table named "${o.name}" already exists — names must be unique.`;return}if(this.columns.length===0){this.errorMsg="At least one column is required.";return}const l=new Set;for(const g of this.columns){const $=g.field.trim();if(!$){this.errorMsg="Column field names cannot be empty.";return}if(l.has($)){this.errorMsg=`Duplicate column field: ${$}`;return}l.add($)}const c=this.tableTitle.trim(),d=this.columns.map(g=>{const $={field:g.field.trim(),label:g.label.trim()||g.field.trim(),type:g.type};return g.renderer&&($.renderer=g.renderer),g.script&&($.script=g.script),g.max!=null&&g.max>0&&($.max=g.max),g.unique&&($.unique=!0),g.notnull&&($.notnull=!0),g.hidden&&($.hidden=!0),$});if(this.mode==="edit"&&this.editTableId){const g=this.editTableId,$=await r.store.tables.findOne(g),w=new Map(($?.columns??[]).map(V=>[V.field,V])),S=d.filter(V=>{const J=w.get(V.field);return V.unique&&!J?.unique||V.notnull&&!J?.notnull||V.max&&V.max>0&&V.max!==J?.max});if(S.length>0){const V=await r.store.rows(g).find(),J=Bp(S,V);if(J.length>0){this.errorMsg=`Cannot save: ${J.length} existing ${J.length===1?"row violates":"rows violate"} the new constraints.
${J.slice(0,5).join(`
`)}${J.length>5?`
…and ${J.length-5} more.`:""}`;return}}const U=new Set(this.columns.map(V=>V.origField).filter(V=>!!V)),N=new Set(d.map(V=>V.field)),z=($?.columns??[]).map(V=>V.field).filter(V=>!U.has(V)),q=$?.deletedColumns??[],G=[...new Set([...q,...z])].filter(V=>!N.has(V)),de={name:t,title:c,columns:d,updatedAt:Date.now()};(G.length>0||q.length>0)&&(de.deletedColumns=G);const ee=$?.name;await r.store.tables.patch(g,de);const ie=z.filter(V=>!N.has(V));if(ie.length>0){const V=await r.store.rows(g).find();for(const J of V){let ue=!1;const we={...J.data};for(const Ie of ie)Ie in we&&(delete we[Ie],ue=!0);ue&&await r.store.rows(g).patch(J.id,{data:we,updatedAt:Date.now()})}}if(ee!==void 0&&ee!==t){const V=(await r.store.viewInstances.find()).filter(J=>J.tableId===g);for(const J of V)J.tableName!==t&&await r.store.viewInstances.patch(J.id,{tableName:t,updatedAt:Date.now()})}}else await r.store.tables.insert({id:Up(),workspaceId:r.workspaceId,name:t,title:c,code:Np(t),columns:d,view:"table",updatedAt:Date.now()});this.close()}renderPreview(){if(this.previewRows.length===0)return R`<div class="preview"><div class="empty">No rows to preview.</div></div>`;const e=new Map;for(const t of this.columns){if(!t.unique)continue;const r=new Set,i=new Set;for(const n of this.previewRows){const o=n.data[t.field];o==null||o===""||(r.has(o)&&i.add(o),r.add(o))}e.set(t.field,i)}return R`
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
                  ${this.columns.map(r=>{const i=t.data[r.field],n=Mp(r,i,e.get(r.field));return R`<td
                      class=${n?"violation":""}
                      title=${n??""}
                    >${Lp(i)}</td>`})}
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
                    ${zp.map(c=>R`<option value=${c} ?selected=${c===r.type}>${c}</option>`)}
                  </select>
                  <select
                    title="Renderer — how cells in this column display. Read-only HTML-encoded text when blank."
                    .value=${r.renderer??""}
                    @change=${c=>{const d=c.target.value;this.patchColumn(i,{renderer:d||void 0})}}
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

          ${this.renameDetected()?R`<div class="hint">
                Renamed fields will appear empty for existing rows — the row data
                isn't migrated automatically.
              </div>`:""}
          ${this.errorMsg?R`<div class="error">${this.errorMsg}</div>`:""}
          ${this.mode==="edit"?this.renderPreview():""}
          </div>
        </form>
      </dialog>
    `}};Et.styles=[Zt,Wt,Ye`
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
  `];Lt([W()],Et.prototype,"mode",2);Lt([W()],Et.prototype,"editTableId",2);Lt([W()],Et.prototype,"name",2);Lt([W()],Et.prototype,"tableTitle",2);Lt([W()],Et.prototype,"columns",2);Lt([W()],Et.prototype,"errorMsg",2);Lt([W()],Et.prototype,"noticeMsg",2);Lt([W()],Et.prototype,"dragSrcIdx",2);Lt([W()],Et.prototype,"dropTargetIdx",2);Lt([W()],Et.prototype,"dropEdge",2);Lt([W()],Et.prototype,"previewRows",2);Lt([W()],Et.prototype,"rendererOptions",2);Et=Lt([nt("new-table-dialog")],Et);function Lp(e){return e==null?"":typeof e=="string"?e:typeof e=="boolean"?e?"true":"false":String(e)}function Mp(e,t,r){const i=t==null||typeof t=="string"&&t.trim()==="";if(e.notnull&&i)return`${e.label}: empty`;if(i)return null;if(e.type==="number"&&typeof t!="number"){const n=Number(t);if(!Number.isFinite(n))return`${e.label}: not a number`}if(e.type==="boolean"&&typeof t!="boolean"&&!/^(true|false|yes|no|0|1)$/i.test(String(t)))return`${e.label}: not boolean`;if((e.type==="date"||e.type==="datetime")&&!i){const n=new Date(String(t));if(Number.isNaN(n.getTime()))return`${e.label}: not a date`}if(e.max!=null&&e.max>0){if(typeof t=="string"&&t.length>e.max)return`${e.label}: length > ${e.max}`;if(typeof t=="number"&&t>e.max)return`${e.label}: > ${e.max}`}return e.unique&&r?.has(t)?`${e.label}: duplicate`:null}function Bp(e,t){const r=[];for(const i of e)if(i.notnull&&t.forEach((n,o)=>{const l=n.data[i.field];(l==null||typeof l=="string"&&l.trim()==="")&&r.push(`Row ${o+1}: ${i.label} is empty.`)}),i.max!=null&&i.max>0&&t.forEach((n,o)=>{const l=n.data[i.field];typeof l=="string"&&l.length>i.max?r.push(`Row ${o+1}: ${i.label} length ${l.length} > max ${i.max}.`):typeof l=="number"&&l>i.max&&r.push(`Row ${o+1}: ${i.label} value ${l} > max ${i.max}.`)}),i.unique){const n=new Map;t.forEach((o,l)=>{const c=o.data[i.field];c==null||c===""||(n.has(c)?r.push(`Row ${l+1}: ${i.label} duplicates row ${n.get(c)+1} ("${String(c)}").`):n.set(c,l))})}return r}function Np(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"table"}function Up(){return globalThis.crypto?.randomUUID?.()??`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}var qp=Object.defineProperty,Hp=Object.getOwnPropertyDescriptor,Tt=(e,t,r,i)=>{for(var n=i>1?void 0:i?Hp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&qp(t,r,n),n};const Wp='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"/></svg>',Kp=R`<span class="mi sm">extension</span>`,Aa="plugin:catalogUrls";function ui(){return new URL("/easydbaccess/plugins/catalog.json",location.origin).toString()}const Vp=[["installed","Installed"],["built-in","Built-in"],["available","Available"],["fixed","Fixed"]],Hl=[["importer","Importer"],["exporter","Exporter"],["cell-renderer","Cell renderer"],["sync","Sync"],["source","Source"],["ui","UI"]],Gp=new Map(Hl);let $t=class extends Ne{constructor(){super(...arguments),this.urls=[],this.records=new Map,this.addUrl="",this.catalog=[],this.catalogError=null,this.serverCatalog=[],this.serverCatalogError=null,this.installing=new Set,this.catalogUrls=[ui()],this.activeCatalogUrl=ui(),this.search="",this.filterStates=new Map,this.typeFilters=new Map,this.dialogEl=null}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Vt(this.dialogEl,e)}async open(){const e=await ye(),t=await e.store.workspaces.findOne(e.workspaceId);this.urls=t?.pluginUrls??[];const r=await e.store.plugins.find();this.records=new Map(r.map(o=>[o.url,o]));const i=await e.store.settings.findOne(Aa),n=Array.isArray(i?.value)?i.value.filter(o=>typeof o=="string"):[];this.catalogUrls=n.length>0?n:[ui()],this.activeCatalogUrl=this.catalogUrls[0]??ui(),this.addUrl="",this.search="",this.filterStates=new Map,this.typeFilters=new Map,await this.updateComplete,this.dialogEl?.showModal(),this.refreshCatalog(this.activeCatalogUrl),this.refreshServerRegistry()}async refreshCatalog(e){try{const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`HTTP ${t.status}`);const r=await t.json(),i=Array.isArray(r.plugins)?r.plugins:[];this.catalog=i.map(n=>({...n,absUrl:new URL(n.url,e).toString()})),this.catalogError=null}catch(t){this.catalog=[],this.catalogError=t.message}}async refreshServerRegistry(){const r=(await(await ye()).store.settings.findOne("server-sync:url"))?.value;if(typeof r!="string"||r.length===0){this.serverCatalog=[],this.serverCatalogError=null;return}const n=`${r.replace(/\/+$/,"")}/plugins/registry`;try{const o=await fetch(n,{cache:"no-store"});if(!o.ok)throw new Error(`HTTP ${o.status}`);const l=await o.json(),c=Array.isArray(l.plugins)?l.plugins:[];this.serverCatalog=c.map(d=>({...d,absUrl:new URL(d.url,n).toString()})),this.serverCatalogError=null}catch(o){this.serverCatalog=[],this.serverCatalogError=o.message}}async reloadCatalogSource(){const e=this.activeCatalogUrl.trim();e&&(this.catalogUrls.includes(e)||(this.catalogUrls=[...this.catalogUrls,e],await(await ye()).store.settings.upsert({key:Aa,value:this.catalogUrls})),await this.refreshCatalog(e))}close(){this.dialogEl?.close()}async addPlugin(e){e.preventDefault();const t=this.addUrl.trim();if(!t)return;if(!/^https?:\/\//i.test(t)){await(await ye()).api.ui.dialogs.alert("Plugin URL must be an absolute http(s) URL.","Invalid URL");return}if(this.urls.includes(t))return;this.urls=[...this.urls,t];const r=await ye();await r.store.workspaces.patch(r.workspaceId,{pluginUrls:this.urls}),await r.store.plugins.upsert({url:t,enabled:!0,lastFetched:0}),this.records=new Map(this.records),this.addUrl=""}async toggleEnabled(e,t){const r=await ye(),i=this.records.get(e);await r.store.plugins.upsert({...i??{url:e,lastFetched:0},enabled:t}),this.records=new Map(this.records.set(e,{...i,url:e,enabled:t,lastFetched:i?.lastFetched??0}))}async removePlugin(e){const t=await ye();this.urls=this.urls.filter(r=>r!==e),await t.store.workspaces.patch(t.workspaceId,{pluginUrls:this.urls}),await t.store.plugins.remove(e),this.records.delete(e),this.records=new Map(this.records)}reload(){location.reload()}async toggleBuiltin(e,t){const r=await ye(),i=zs(e),n=this.records.get(i);await r.store.plugins.upsert({...n??{url:i,lastFetched:0},url:i,enabled:t,lastFetched:n?.lastFetched??0}),this.records=new Map(this.records.set(i,{...n,url:i,enabled:t,lastFetched:n?.lastFetched??0}))}async onRowToggle(e,t){if(e.categories.has("built-in"))await this.toggleBuiltin(e.id,t);else if(e.url)await this.toggleEnabled(e.url,t);else return;(await ye()).api.ui.dialogs.toast("Reload to apply this change.",{kind:"info",title:"Plugin updated"})}async installFromCatalog(e){if(this.urls.includes(e.absUrl)||this.installing.has(e.absUrl))return;this.installing=new Set(this.installing).add(e.absUrl);const t=await ye();try{const r=await fetch(e.absUrl,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status} ${r.statusText}`);const i=await r.text();await t.store.workspaces.patch(t.workspaceId,{pluginUrls:[...this.urls,e.absUrl]}),await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),cachedBody:i});const n=new Blob([i],{type:"text/javascript"}),o=URL.createObjectURL(n);try{const c=await import(o);await c.init?.(t.api),await c.load?.(t.api)}finally{setTimeout(()=>URL.revokeObjectURL(o),5e3)}t.events.emit("app:ready",{workspaceId:t.workspaceId}),this.urls=[...this.urls,e.absUrl];const l=await t.store.plugins.find();this.records=new Map(l.map(c=>[c.url,c])),t.api.ui.dialogs.toast(`Activated "${e.name}".`,{kind:"success",title:"Plugin installed"})}catch(r){await t.store.plugins.upsert({url:e.absUrl,enabled:!0,lastFetched:Date.now(),lastError:`install: ${r.message}`}),t.api.ui.dialogs.toast(`Could not install ${e.name}: ${r.message}`,{kind:"error",title:"Plugin error"})}finally{const r=new Set(this.installing);r.delete(e.absUrl),this.installing=r}}cycleState(e,t){const r=e.get(t),i=new Map(e);return r===void 0?i.set(t,"on"):r==="on"?i.set(t,"not"):i.delete(t),i}cycleFilter(e){this.filterStates=this.cycleState(this.filterStates,e)}cycleTypeFilter(e){this.typeFilters=this.cycleState(this.typeFilters,e)}buildRows(){const e=new Map,t=new Map;for(const{id:r,meta:i}of wp){const n=i.fixed?!0:this.records.get(zs(r))?.enabled!==!1,o=i.fixed?["built-in","fixed","installed"]:["built-in","installed"];e.set(`builtin:${r}`,{id:r,name:i.name,...i.type?{type:i.type}:{},...i.description?{meta:i.description}:{meta:"Built-in plugin"},...i.author?{author:i.author}:{},...i.icon?{icon:i.icon}:{},...i.repo?{repo:i.repo}:{},categories:new Set(o),enabled:n,fixed:!!i.fixed})}for(const r of[...this.catalog,...this.serverCatalog]){const i=this.urls.includes(r.absUrl),n=this.records.get(r.absUrl),o=i?["available","installed"]:["available"],l=e.get(r.id);e.set(r.id,{id:r.id,name:r.name,url:r.absUrl,...r.type?{type:r.type}:{},...r.icon?{icon:r.icon}:{},...r.repo?{repo:r.repo}:{},...r.author?{author:r.author}:{},meta:r.description??r.absUrl,categories:l?new Set([...l.categories,...o]):new Set(o),enabled:n?.enabled!==!1,installing:this.installing.has(r.absUrl)}),t.set(r.absUrl,r.id)}for(const r of this.urls){const i=t.get(r);if(i){e.get(i).categories.add("installed");continue}const n=this.records.get(r),o=n?.lastFetched?new Date(n.lastFetched).toLocaleString():"never";e.set(`url:${r}`,{id:r,name:r,urlOnly:!0,url:r,meta:n?.lastError??`Last fetched: ${o}`,metaIsError:!!n?.lastError,categories:new Set(["installed"]),enabled:n?.enabled!==!1})}return[...e.values()]}get filteredRows(){const e=this.buildRows(),t=this.search.trim().toLowerCase(),r=[],i=[];for(const[c,d]of this.filterStates)(d==="on"?r:i).push(c);const n=[],o=[];for(const[c,d]of this.typeFilters)(d==="on"?n:o).push(c);const l=e.filter(c=>!(c.fixed&&this.filterStates.get("fixed")!=="on"||r.length&&!r.some(d=>c.categories.has(d))||i.some(d=>c.categories.has(d))||n.length&&!(c.type&&n.includes(c.type))||c.type&&o.includes(c.type)));return t?l.filter(c=>[c.id,c.name,c.type,c.meta,c.author].some(d=>d?.toLowerCase().includes(t))):l}renderRow(e){const t=e.categories.has("built-in")||e.categories.has("installed"),r=!!e.url&&e.categories.has("installed"),i=!!e.url&&!e.categories.has("installed");return R`
      <div class=${`row${e.categories.has("built-in")?" builtin":""}${e.metaIsError?" error":""}`}>
        <span class="row-icon">${e.icon?nr(e.icon):Kp}</span>
        <div class="row-main">
          <div class=${`row-title${e.urlOnly?" mono":""}`}>
            ${e.name}${e.id!==e.name?R`<span class="row-id">${e.id}</span>`:""}${e.type?R`<span class="row-type" title="Plugin type"
                  >${Gp.get(e.type)??e.type}</span
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
              >${nr(Wp)}</a
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
              ${Vp.map(([t,r])=>{const i=this.filterStates.get(t),n=i==="on"?`Showing only ${r} plugins — click to exclude`:i==="not"?`Hiding ${r} plugins — click to clear`:`Filter by ${r} — click: show only → exclude → off`;return R`
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
              ${Hl.map(([t,r])=>{const i=this.typeFilters.get(t),n=i==="on"?`Showing only ${r} plugins — click to exclude`:i==="not"?`Hiding ${r} plugins — click to clear`:`Filter by ${r} — click: show only → exclude → off`;return R`
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
    `}};$t.styles=[Zt,Wt,Ye`
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
    `];Tt([W()],$t.prototype,"urls",2);Tt([W()],$t.prototype,"records",2);Tt([W()],$t.prototype,"addUrl",2);Tt([W()],$t.prototype,"catalog",2);Tt([W()],$t.prototype,"catalogError",2);Tt([W()],$t.prototype,"serverCatalog",2);Tt([W()],$t.prototype,"serverCatalogError",2);Tt([W()],$t.prototype,"installing",2);Tt([W()],$t.prototype,"catalogUrls",2);Tt([W()],$t.prototype,"activeCatalogUrl",2);Tt([W()],$t.prototype,"search",2);Tt([W()],$t.prototype,"filterStates",2);Tt([W()],$t.prototype,"typeFilters",2);$t=Tt([nt("plugin-manager-dialog")],$t);var Yp=Object.defineProperty,Xp=Object.getOwnPropertyDescriptor,Vn=(e,t,r,i)=>{for(var n=i>1?void 0:i?Xp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Yp(t,r,n),n};const vr="__general__";let wn=class extends Ne{constructor(){super(...arguments),this.tabs=[],this.active=vr,this.values={},this.placements={},this.secretsText="",this.workspaceTitle="",this.dialogEl=null,this.onSubmit=e=>{e.preventDefault(),this.close()}}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Vt(this.dialogEl,e)}async open(){const e=await ye(),t=[...e.registries.settings];this.tabs=t.map(([o,l])=>({id:o,name:l.name,fields:l.fields}));const r=await e.store.workspaces.findOne(e.workspaceId);this.workspaceTitle=r?.title??"";const i={},n={};for(const o of this.tabs)for(const l of o.fields){const c=`${o.id}:${l.key}`,d=await e.api.settings.placement(o.id,l.key);d==="user"?(i[c]=Ws(c),n[c]="user"):d==="workspace"?(i[c]=(await e.store.settings.findOne(c))?.value,n[c]="workspace"):(i[c]=l.default,n[c]=l.scope??"workspace")}this.values=i,this.placements=n,this.secretsText=Ti(),this.active=vr,await this.updateComplete,this.dialogEl?.showModal()}close(){this.dialogEl?.close()}async setValue(e,t,r){const i=`${e.id}:${t.key}`;this.values={...this.values,[i]:r},await(await ye()).api.settings.set(e.id,t.key,r,this.placements[i])}async toggleScope(e,t,r){const i=`${e.id}:${t.key}`,n=r?"user":"workspace";this.placements={...this.placements,[i]:n},await(await ye()).api.settings.set(e.id,t.key,this.values[i],n)}onSecretsInput(e){this.secretsText=e.target.value,Za(this.secretsText)}async setWorkspaceTitle(e){this.workspaceTitle=e;const t=await ye();await t.store.workspaces.patch(t.workspaceId,{title:e.trim()||void 0})}renderControl(e,t){const r=`${e.id}:${t.key}`,i=this.values[r];switch(t.type){case"text":return R`<textarea
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
                @change=${l=>{const d=l.target.checked?[...n,o]:n.filter(g=>g!==o);this.setValue(e,t,d)}}
              />${o}</label
            >`)}
        </div>`}case"string":default:return R`<input
          type="text"
          .value=${String(i??"")}
          @change=${n=>this.setValue(e,t,n.target.value)}
        />`}}renderSecretControl(e,t,r){const i=Object.keys(Ai(this.secretsText));return R`<div class="secret-row">
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
          </select>`:be}
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
      ${t.description?R`<p class="desc">${t.description}</p>`:be}
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
    `}renderPanel(){if(this.active===vr)return this.renderGeneral();const e=this.tabs.find(t=>t.id===this.active);return e?R`
      <h3>${e.name}</h3>
      ${e.fields.length===0?R`<p class="empty">This plugin registered no settings.</p>`:e.fields.map(t=>this.renderField(e,t))}
    `:be}render(){return R`
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
                  class=${this.active===vr?"active":""}
                  @click=${()=>this.active=vr}
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
    `}};wn.styles=[Zt,Wt,Ye`
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
    `];Vn([W()],wn.prototype,"tabs",2);Vn([W()],wn.prototype,"active",2);Vn([W()],wn.prototype,"values",2);Vn([W()],wn.prototype,"placements",2);Vn([W()],wn.prototype,"secretsText",2);Vn([W()],wn.prototype,"workspaceTitle",2);wn=Vn([nt("settings-dialog")],wn);var Qp=Object.defineProperty,Jp=Object.getOwnPropertyDescriptor,no=(e,t,r,i)=>{for(var n=i>1?void 0:i?Jp(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Qp(t,r,n),n};function Zp(e,t){(un.instance??em()).show(e,t)}function em(){const e=document.createElement("table-info-dialog");return document.body.appendChild(e),e}let un=class extends Ne{constructor(){super(...arguments),this.name="",this.info=null,this.dialogEl=null,this.close=()=>this.dialogEl?.close(),this.onSubmit=e=>{e.preventDefault(),this.close()}}connectedCallback(){super.connectedCallback(),un.instance=this}disconnectedCallback(){super.disconnectedCallback(),un.instance===this&&(un.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&Vt(this.dialogEl,e)}show(e,t){this.name=e,this.info=t,this.updateComplete.then(()=>this.dialogEl?.showModal())}row(e,t,r){if(!t&&!r)return be;const i=r?R`<a href=${r} target="_blank" rel="noopener noreferrer">${t||r}</a>`:R`${t}`;return R`<dt>${e}</dt>
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
            ${e?.descriptionHtml?R`<div class="desc">${nr(e.descriptionHtml)}</div>`:e?.description?R`<div class="desc">${e.description}</div>`:be}
            ${t?R`<dl>
                  ${this.row("Source",e?.source,e?.sourceUrl)}
                  ${this.row("License",e?.license,e?.licenseUrl)}
                  ${this.row("About",e?.about,e?.aboutUrl)}
                </dl>`:be}
            ${!e?.description&&!e?.descriptionHtml&&!t?R`<p class="empty">No additional information.</p>`:be}
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
    `];no([W()],un.prototype,"name",2);no([W()],un.prototype,"info",2);un=no([nt("table-info-dialog")],un);const tm=.25,nm=4;function rm(e){return Math.min(nm,Math.max(tm,e))}function Pa(e,t,r){return{x:e.x+t,y:e.y+r,scale:e.scale}}const xr={x:0,y:0,scale:1};function Ia(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function im(e){return e instanceof Element&&e.closest(".jsPanel")!=null}function sm(e,t){let r={...xr};t.style.transformOrigin="0 0";const i=new Set,n=()=>{t.style.transform=`translate(${r.x}px, ${r.y}px) scale(${r.scale})`;for(const v of i)v({...r})};let o="none",l={...xr},c=0,d=0,g=0,$=0,w=0,S=0;const U=(v,E)=>{const b=e.getBoundingClientRect();return{x:v-b.left,y:E-b.top}},N=v=>{if(v.touches.length===2){o="pinch",l={...r};const[E,b]=[v.touches[0],v.touches[1]];g=Ia(E,b)||1;const C=U((E.clientX+b.clientX)/2,(E.clientY+b.clientY)/2);$=(C.x-r.x)/r.scale,w=(C.y-r.y)/r.scale,v.preventDefault();return}if(v.touches.length===1&&!im(v.target)){const E=v.timeStamp;if(E-S<300){r={...xr},n(),S=0,o="none",v.preventDefault();return}S=E,o="pan",l={...r},c=v.touches[0].clientX,d=v.touches[0].clientY}else o="none"},z=v=>{if(o==="pan"&&v.touches.length===1){const E=v.touches[0];r=Pa(l,E.clientX-c,E.clientY-d),n(),v.preventDefault()}else if(o==="pinch"&&v.touches.length>=2){const[E,b]=[v.touches[0],v.touches[1]],C=rm(l.scale*(Ia(E,b)/g)),he=U((E.clientX+b.clientX)/2,(E.clientY+b.clientY)/2);r={x:he.x-$*C,y:he.y-w*C,scale:C},n(),v.preventDefault()}},q=v=>{v.touches.length===0?o="none":v.touches.length===1&&o==="pinch"&&(o="pan",l={...r},c=v.touches[0].clientX,d=v.touches[0].clientY)};let G=!1,de={...xr},ee=0,ie=0,V=!1;const J=(v,E)=>{const b=e.getBoundingClientRect();return v>=b.left&&v<=b.right&&E>=b.top&&E<=b.bottom},ue=v=>{if(!G)return;const E=v.clientX-ee,b=v.clientY-ie;!V&&Math.hypot(E,b)<4||(V=!0,document.body.style.cursor="grabbing",r=Pa(de,E,b),n(),v.preventDefault())},we=()=>{G&&(G=!1,document.body.style.cursor="",window.removeEventListener("mousemove",ue,!0),window.removeEventListener("mouseup",Ie,!0))};function Ie(){we()}const $e=v=>{v.button===2&&J(v.clientX,v.clientY)&&(G=!0,V=!1,de={...r},ee=v.clientX,ie=v.clientY,window.addEventListener("mousemove",ue,!0),window.addEventListener("mouseup",Ie,!0))},m=v=>{V&&(v.preventDefault(),V=!1)};return e.addEventListener("touchstart",N,{passive:!1}),e.addEventListener("touchmove",z,{passive:!1}),e.addEventListener("touchend",q),e.addEventListener("touchcancel",q),window.addEventListener("mousedown",$e,!0),window.addEventListener("contextmenu",m,!0),{snapshot:()=>({...r}),reset:()=>{r={...xr},n()},restore:v=>{r={...v},n()},subscribe:v=>(i.add(v),()=>i.delete(v)),dispose:()=>{e.removeEventListener("touchstart",N),e.removeEventListener("touchmove",z),e.removeEventListener("touchend",q),e.removeEventListener("touchcancel",q),window.removeEventListener("mousedown",$e,!0),window.removeEventListener("contextmenu",m,!0),we()}}}function Wl(e,t){let r=null;const i=n=>{const o=document.getElementById(e);o&&(o.style.transformOrigin="0 0",o.style.transform=`translate(${-n.x/n.scale}px, ${-n.y/n.scale}px) scale(${1/n.scale})`)};return{enter(){const n=t();r||!n||(i(n.snapshot()),r=n.subscribe(i))},exit(){r?.(),r=null;const n=document.getElementById(e);n&&(n.style.transform="",n.style.transformOrigin="")}}}const om=200,am=100;function lm(e){return!e||!Number.isFinite(e.w)||!Number.isFinite(e.h)||!Number.isFinite(e.x)||!Number.isFinite(e.y)||e.w<om||e.h<am?null:{...e}}var cm=Object.defineProperty,um=Object.getOwnPropertyDescriptor,zr=(e,t,r,i)=>{for(var n=i>1?void 0:i?um(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&cm(t,r,n),n};let Wn=class extends Ne{constructor(){super(...arguments),this.tableId="",this.query="",this.open=!1,this.focusPending=!1,this.onInput=e=>{this.query=e.target.value,this.dispatchQuery()},this.openSearch=()=>{this.open=!0,this.focusPending=!0},this.onBlur=()=>{this.open=!1}}dispatchQuery(){document.dispatchEvent(new CustomEvent("easydb:table-search",{detail:{tableId:this.tableId,query:this.query}}))}updated(){this.focusPending&&this.inputEl&&(this.inputEl.focus(),this.focusPending=!1)}render(){if(!this.open){const e=this.query.trim().length>0;return R`<button
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
    `];zr([Ht({type:String})],Wn.prototype,"tableId",2);zr([W()],Wn.prototype,"query",2);zr([W()],Wn.prototype,"open",2);zr([Kn("input")],Wn.prototype,"inputEl",2);Wn=zr([nt("panel-search")],Wn);var dm=Object.defineProperty,hm=Object.getOwnPropertyDescriptor,cr=(e,t,r,i)=>{for(var n=i>1?void 0:i?hm(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&dm(t,r,n),n};let Dn=class extends Ne{constructor(){super(...arguments),this.tableId="",this.active=!0,this.rowCount=0,this.tableButtons=[],this.table=null,this.rowsActive=!1,this.runTableButton=async(e,t)=>{const r=t?.currentTarget??void 0,i=await ye();try{await Promise.resolve(e.onClick(i.api,{tableId:this.tableId,anchor:r}))}catch(n){console.error(`[table-button:${e.id}]`,n)}}}async connectedCallback(){super.connectedCallback();const e=await ye();this.tableButtons=[...e.registries.tableButtons],e.events.on("app:ready",()=>this.tableButtons=[...e.registries.tableButtons]),this.table=await e.store.tables.findOne(this.tableId)??null,this.unsubTables=e.store.tables.subscribe(t=>{this.table=t.find(r=>r.id===this.tableId)??null}),this.active&&this.startRows()}disconnectedCallback(){super.disconnectedCallback(),this.stopRows(),this.unsubTables?.()}updated(e){e.has("active")&&(this.active?this.startRows():this.stopRows())}async startRows(){if(this.rowsActive)return;this.rowsActive=!0;const e=await ye();this.rowsActive&&(this.unsubRows=e.store.rows(this.tableId).subscribe(t=>this.rowCount=t.length))}stopRows(){this.rowsActive=!1,this.unsubRows?.(),this.unsubRows=void 0}async addRow(){const e=await ye(),t=await e.store.tables.findOne(this.tableId);if(!t)return;const r={};for(const i of t.columns)r[i.field]=fm(i);await e.store.rows(this.tableId).insert({id:crypto.randomUUID(),tableId:this.tableId,data:r,updatedAt:Date.now()})}editColumns(){document.dispatchEvent(new CustomEvent("easydb:edit-columns",{detail:{tableId:this.tableId}}))}render(){return R`
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
              ${e.icon?e.icon.trimStart().startsWith("<svg")?R`<span class="icon-svg">${Va(e.icon)}</span>`:R`<span class="mi sm">${e.icon}</span>`:R`<span>${e.label}</span>`}
            </button>`)}
      <span class="spacer"></span>
      <span class="count">${this.rowCount} row${this.rowCount===1?"":"s"}</span>
    `}};Dn.styles=[Zt,Ye`
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
    `];cr([Ht({type:String})],Dn.prototype,"tableId",2);cr([Ht({type:Boolean})],Dn.prototype,"active",2);cr([W()],Dn.prototype,"rowCount",2);cr([W()],Dn.prototype,"tableButtons",2);cr([W()],Dn.prototype,"table",2);Dn=cr([nt("panel-footer")],Dn);function fm(e){if(e.default!==void 0)return e.default;switch(e.type){case"boolean":return!1;case"number":return null;default:return""}}function bs(e){return e.title?.trim()?e.title.trim():e.name}function pm(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function mm(e){const t=document.querySelector("app-shell")?.shadowRoot,r=t?.querySelector("header"),i=t?.querySelector("footer");r&&(e.style.top=`${r.offsetHeight}px`),i&&(e.style.bottom=`${i.offsetHeight}px`)}const mn=new Map,fi=new Set,Kl=new Set;let Da=!1,ro=null;function gm(){return ro}async function bm(){if(Da)return;Da=!0;const e=await ye(),t=document.getElementById("easydb-panels"),r=document.getElementById("easydb-panels-viewport");if(t&&r){ro=sm(t,r);const n=()=>mm(t);n(),window.addEventListener("resize",n);const o=document.querySelector("app-shell")?.shadowRoot,l=o?.querySelector("header"),c=o?.querySelector("footer");if(typeof ResizeObserver<"u"&&(l||c)){const d=new ResizeObserver(n);l&&d.observe(l),c&&d.observe(c)}}const i=(await e.store.tables.find()).filter(n=>n.workspaceId===e.workspaceId);i.sort(ys);for(const n of i)Ra(n,e);e.store.tables.subscribe(n=>{const o=n.filter(d=>d.workspaceId===e.workspaceId),l=new Set(o.map(d=>d.id));for(const[d,g]of mn)if(!l.has(d)){mn.delete(d),fi.add(d),Kl.add(d);try{g.status!=="closed"&&g.close()}catch{}}const c=o.filter(d=>!mn.has(d.id)).sort(ys);for(const d of c)Ra(d,e)}),document.addEventListener("easydb:restack-windows",()=>{let n=0;const o=async()=>{const l=(await e.store.tables.find()).filter(c=>c.workspaceId===e.workspaceId&&!c.windowGeometry?.minimized).sort(ys);if(n<12&&!l.every(c=>mn.has(c.id))){n++,setTimeout(()=>void o(),80);return}for(const c of l)try{mn.get(c.id)?.front?.()}catch{}};o()})}function ys(e,t){return(e.windowGeometry?.z??-1/0)-(t.windowGeometry?.z??-1/0)}const ym=720,wm=360;function Ra(e,t){const r=`panel-${Vl(e.id)}`,i=pm(),n=lm(e.windowGeometry),o=n?.minimized===!0,l=()=>{const E=document.createElement("data-table");return E.tableId=e.id,E.style.height="100%",E},c=o?document.createElement("div"):l();let d=o?null:c,g=bs(e),$=-1,w=-1;const S=()=>{typeof V.setHeaderTitle=="function"&&V.setHeaderTitle(g+hl($,w))},U=E=>{const b=E.detail;b.key===e.id&&($=b.count,w=b.total,S())};document.addEventListener(xi,U);const N=()=>{G.active=!1,d?.remove(),d=null},z=()=>{if(d)return;const E=document.getElementById(r)?.querySelector(".jsPanel-content");if(!E)return;E.replaceChildren();const b=l();E.appendChild(b),d=b,G.active=!0},q=document.createElement("panel-search");q.tableId=e.id;const G=document.createElement("panel-footer");G.tableId=e.id,G.active=!o;const de=Wl(r,()=>ro),ee=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:xm(),ie=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:`${ym} ${wm}`},V=F.create({id:r,container:i,headerTitle:g,footerToolbar:G,theme:"primary",content:c,...ie,position:ee,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>ws(e.id,t)},resizeit:{containment:!1,stop:()=>ws(e.id,t)},onfronted:()=>km(e.id,t),onbeforeclose:()=>fi.has(e.id)?!0:((async()=>await t.api.ui.dialogs.confirm(e.source?`Remove the live table "${e.name}"? Its data stays on the Datasette server.`:`Delete table "${e.name}" and all its rows?`,"Confirm")&&(fi.add(e.id),mn.get(e.id)?.close()))(),!1),onclosed:async()=>{mn.delete(e.id),fi.delete(e.id),!Kl.delete(e.id)&&await Cm(e.id,t)},onstatuschange:E=>{E.status==="minimized"?N():(E.status==="normalized"||E.status==="maximized")&&z(),E.status==="maximized"?de.enter():de.exit(),ws(e.id,t)}});mn.set(e.id,V);const J=document.getElementById(r),ue=J?.querySelector(".jsPanel-controlbar");ue&&ue.prepend(q);const we=J?.querySelector(".jsPanel-titlebar");we&&(we.tabIndex=-1,we.style.outline="none",we.addEventListener("pointerdown",()=>we.focus()));let Ie=null;const $e=document.createElement("button");$e.type="button",$e.title="Table info",$e.setAttribute("aria-label","Table info"),$e.className="eda-info-btn",$e.textContent="ⓘ",$e.style.cssText="display:none;background:none;border:0;color:inherit;cursor:pointer;font-size:1rem;line-height:1;padding:0 0.3rem;",$e.addEventListener("click",E=>{E.stopPropagation(),Ie&&Zp(g,Ie)}),ue?.prepend($e);const m=E=>{Ie=E?.info??null,$e.style.display=Ie?"inline-flex":"none"};m(e),n?.maximized&&typeof V.maximize=="function"?queueMicrotask(()=>V.maximize?.()):n?.minimized&&typeof V.minimize=="function"&&queueMicrotask(()=>V.minimize?.()),t.store.tables.subscribe(E=>{const b=E.find(C=>C.id===e.id);b&&(m(b),bs(b)!==g&&(g=bs(b),S()))});const v=V.close.bind(V);V.close=()=>(document.removeEventListener(xi,U),v())}let vm=0;function xm(){const e=vm++;return{my:"left-top",at:"left-top",offsetX:40+e%8*30,offsetY:80+e%8*30}}async function ws(e,t){const r=document.getElementById(`panel-${Vl(e)}`);if(!r)return;const i=mn.get(e)?.status??"normalized";try{const o=(await t.store.tables.findOne(e))?.windowGeometry,l=i==="minimized",c=i==="maximized";let d=r.offsetLeft,g=r.offsetTop,$=r.offsetWidth,w=r.offsetHeight;(l||c)&&o&&(d=o.x,g=o.y,$=o.w,w=o.h),d<=-9e3&&(d=o?.x??40);const S={x:d,y:g,w:$,h:w,z:o?.z??0,minimized:l,maximized:c};await t.store.tables.patch(e,{windowGeometry:S,updatedAt:Date.now()})}catch{}}let vs=0;function $m(){return vs=Math.max(Date.now(),vs+1),vs}async function km(e,t){try{const r=await t.store.tables.findOne(e);if(!r)return;const i=r.windowGeometry??{x:0,y:0,w:720,h:360,z:0,minimized:!1,maximized:!1};await t.store.tables.patch(e,{windowGeometry:{...i,z:$m()},updatedAt:Date.now()})}catch{}}async function Cm(e,t){if(!(await t.store.tables.findOne(e))?.source){const i=t.store.rows(e),n=await i.find();await i.bulkRemove(n.map(o=>o.id))}await t.store.tables.remove(e)}function Vl(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}var Em=Object.defineProperty,Sm=Object.getOwnPropertyDescriptor,Gt=(e,t,r,i)=>{for(var n=i>1?void 0:i?Sm(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Em(t,r,n),n};let _t=class extends Ne{constructor(){super(...arguments),this.viewInstanceId="",this.loaded=!1,this.error="",this.instance=null,this.template=null,this.columns=[],this.tableColumns=[],this.rows=[],this.showColsMenu=!1,this.allRows=[],this.searchQuery="",this.globalQuery="",this.onSearch=e=>{const t=e.detail;t.tableId===this.viewInstanceId&&(this.searchQuery=t.query??"",this.recompute())},this.onGlobalSearch=e=>{this.globalQuery=e.detail.query??"",this.recompute()}}get templateOn(){return this.instance?.templateEnabled!==!1}async connectedCallback(){super.connectedCallback(),document.addEventListener("easydb:table-search",this.onSearch),document.addEventListener("easydb:global-search",this.onGlobalSearch),await this.load()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("easydb:table-search",this.onSearch),document.removeEventListener("easydb:global-search",this.onGlobalSearch),this.rowsUnsub?.(),this.instUnsub?.()}async updated(e){e.has("viewInstanceId")&&(this.rowsUnsub?.(),this.loaded=!1,await this.load())}async reload(){this.rowsUnsub?.(),this.loaded=!1,await this.load()}async load(){if(!this.viewInstanceId)return;this.rowsUnsub?.(),this.instUnsub?.();const e=await ye(),t=await e.store.viewInstances.findOne(this.viewInstanceId);if(!t){this.error="This view no longer exists.",this.loaded=!0;return}this.instance=t,this.template=await e.store.viewTemplates.findOne(t.templateId)??null;const r=await e.store.tables.findOne(t.tableId);this.tableColumns=r?.columns??[],r&&t.tableName!==r.name&&e.store.viewInstances.patch(t.id,{tableName:r.name});const i=new Map(this.tableColumns.map(o=>[o.field,o]));this.columns=t.visibleColumns.map(o=>i.get(o)??{field:o,label:o,type:"string"}),this.instUnsub=e.store.viewInstances.subscribe(o=>{const l=o.find(c=>c.id===this.viewInstanceId);if(l){if(l.tableId!==this.instance?.tableId){this.instance=l,this.reload();return}this.instance=l,this.recompute()}});const n=e.store.rows(t.tableId);this.rowsUnsub=n.subscribe(o=>{this.allRows=o,this.recompute()}),this.allRows=await n.find(),this.recompute(),this.loaded=!0}recompute(){if(!this.instance)return;let e=tp(this.allRows,this.instance);const t=(o,l)=>Object.values(o.data).some(c=>c!=null&&String(c).toLowerCase().includes(l)),r=this.searchQuery.trim(),i=this.globalQuery.trim();r&&(e=vi(e,r,t)),i&&(e=vi(e,i,t));const n=this.instance.limit??0;n>0&&e.length>n&&(e=e.slice(0,n)),this.rows=e,this.templateOn&&dl(this.viewInstanceId,e.length,this.allRows.length)}async toggleTemplate(){if(!this.instance)return;const e=!this.templateOn;await(await ye()).store.viewInstances.patch(this.instance.id,{templateEnabled:e,updatedAt:Date.now()}),this.instance={...this.instance,templateEnabled:e},this.showColsMenu=!1}editTemplate(){!this.instance||!this.template||Rs(this.instance.tableId,{editTemplateId:this.template.id})}editView(){this.instance&&Rs(this.instance.tableId,{editInstanceId:this.instance.id})}async toggleColumn(e){if(!this.instance)return;const t=this.instance.visibleColumns,i=t.includes(e)?t.filter(o=>o!==e):[...t,e];if(i.length===0)return;await(await ye()).store.viewInstances.patch(this.instance.id,{visibleColumns:i,updatedAt:Date.now()}),this.instance={...this.instance,visibleColumns:i}}renderTable(){return this.rows.length===0?R`<div class="vw-empty">No rows.</div>`:R`
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
    `}renderTemplated(){const e=this.template;if(!e)return R`<div class="vw-empty">This view's template is missing.</div>`;if(np(e.rowHtml)){const t=this.instance?.mapping??{},r=this.rows.map(n=>Jf(e.rowHtml,n,t)).join(""),i=(e.headerHtml??"")+r+(e.footerHtml??"");return R`<div class="vw-root">${nr(i)}</div>`}return R`<div class="vw-root">
      ${e.headerHtml?.trim()?R`<div class="vw-html">${nr(e.headerHtml)}</div>`:be}
      ${this.renderTable()}
      ${e.footerHtml?.trim()?R`<div class="vw-html">${nr(e.footerHtml)}</div>`:be}
    </div>`}renderFooter(){if(!this.instance)return be;const e=this.templateOn,t=new Set(this.instance.visibleColumns);return R`<div class="vw-footer">
      ${!e&&this.showColsMenu?R`<div class="cols-menu">
            ${this.tableColumns.map(r=>R`<label
                  ><input
                    type="checkbox"
                    .checked=${t.has(r.field)}
                    @change=${()=>void this.toggleColumn(r.field)}
                  />${r.label||r.field}</label
                >`)}
          </div>`:be}
      ${e?be:R`<button
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
    </div>`}render(){if(!this.loaded)return R`<div class="vw-body scroll"><div class="vw-loading">Loading…</div></div>`;if(this.error)return R`<div class="vw-body scroll"><div class="vw-empty">${this.error}</div></div>`;const t=this.templateOn?R`<div class="vw-body scroll">${this.renderTemplated()}</div>`:R`<div class="vw-body grid">
          <data-table
            .tableId=${this.instance?.tableId??""}
            .viewInstanceId=${this.viewInstanceId}
          ></data-table>
        </div>`;return R`${t}${this.renderFooter()}`}};_t.styles=[Zt,Ye`
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
    `];Gt([Ht({type:String})],_t.prototype,"viewInstanceId",2);Gt([W()],_t.prototype,"loaded",2);Gt([W()],_t.prototype,"error",2);Gt([W()],_t.prototype,"instance",2);Gt([W()],_t.prototype,"template",2);Gt([W()],_t.prototype,"columns",2);Gt([W()],_t.prototype,"tableColumns",2);Gt([W()],_t.prototype,"rows",2);Gt([W()],_t.prototype,"showColsMenu",2);Gt([W()],_t.prototype,"searchQuery",2);Gt([W()],_t.prototype,"globalQuery",2);_t=Gt([nt("view-window")],_t);const Qt=new Map;let Oa=!1;function ja(e){e.panel.setHeaderTitle?.(e.name+hl(e.count,e.total))}function _m(){return document.getElementById("easydb-panels-viewport")??document.getElementById("easydb-panels")??document.body}function Tm(e){return e.replace(/[^a-zA-Z0-9_-]/g,"_")}function Gl(e){return`view-panel-${Tm(e)}`}async function Am(){if(Oa)return;Oa=!0;const e=await ye(),t=r=>r.filter(i=>i.workspaceId===e.workspaceId&&i.open);for(const r of t(await e.store.viewInstances.find()))Fa(r,e);e.store.viewInstances.subscribe(r=>{const i=new Map(t(r).map(n=>[n.id,n]));for(const n of[...Qt.keys()])i.has(n)||Im(n);for(const[n,o]of i)Qt.has(n)||Fa(o,e)}),e.store.tables.subscribe(r=>void Pm(e,r)),document.addEventListener(xi,r=>{const i=r.detail,n=Qt.get(i.key);n&&(n.count=i.count,n.total=i.total,ja(n))}),document.addEventListener("easydb:reload-view",r=>{const i=r.detail?.instanceId;if(!i)return;const n=Qt.get(i);n&&(async()=>{const o=await e.store.viewInstances.findOne(i);o&&(n.name=o.name,ja(n)),n.el.reload()})()}),document.addEventListener("easydb:reload-views",()=>{for(const{el:r}of Qt.values())r.reload()})}async function Pm(e,t){const r=t.filter(l=>l.workspaceId===e.workspaceId),i=new Set(r.map(l=>l.id)),n=new Map;for(const l of r)n.has(l.name)||n.set(l.name,l);const o=await e.store.viewInstances.find();for(const l of o){if(l.workspaceId!==e.workspaceId||i.has(l.tableId)||!l.tableName)continue;const c=n.get(l.tableName);c&&await e.store.viewInstances.patch(l.id,{tableId:c.id,updatedAt:Date.now()})}}function Fa(e,t){if(Qt.has(e.id))return;const r=Gl(e.id),i=document.createElement("view-window");i.viewInstanceId=e.id,i.style.height="100%";const n=e.windowGeometry,o=n?{panelSize:`${n.w} ${n.h}`}:{contentSize:"480 520"},l=n?{my:"left-top",at:"left-top",offsetX:n.x,offsetY:n.y}:{my:"center-top",at:"center-top",offsetY:60},c=Wl(r,gm),d=F.create({id:r,container:_m(),headerTitle:e.name,theme:"#0891b2",content:i,...o,position:l,minimizeTo:"#easydb-minimized-dock",dragit:{containment:!1,stop:()=>void xs(e.id)},resizeit:{containment:!1,stop:()=>void xs(e.id)},onstatuschange:S=>{S.status==="maximized"?c.enter():c.exit(),xs(e.id)},onclosed:()=>{Qt.delete(e.id),c.exit(),t.store.viewInstances.patch(e.id,{open:!1,updatedAt:Date.now()}).catch(()=>{})}});Qt.set(e.id,{panel:d,el:i,name:e.name,count:-1,total:-1});const g=document.getElementById(r),$=document.createElement("panel-search");$.tableId=e.id,g?.querySelector(".jsPanel-controlbar")?.prepend($);const w=g?.querySelector(".jsPanel-titlebar");w&&(w.tabIndex=-1,w.style.outline="none",w.addEventListener("pointerdown",()=>w.focus())),n?.maximized?queueMicrotask(()=>d.maximize?.()):n?.minimized&&queueMicrotask(()=>d.minimize?.())}function Im(e){const t=Qt.get(e);if(t){Qt.delete(e);try{t.panel.status!=="closed"&&t.panel.close()}catch{}}}async function xs(e){const t=document.getElementById(Gl(e)),r=Qt.get(e);if(!t||!r)return;const i=r.panel.status,n=i==="minimized",o=i==="maximized";try{const l=await ye(),c=(await l.store.viewInstances.findOne(e))?.windowGeometry;let d=t.offsetLeft,g=t.offsetTop,$=t.offsetWidth,w=t.offsetHeight;(n||o)&&c&&(d=c.x,g=c.y,$=c.w,w=c.h),d<=-9e3&&(d=c?.x??40);const S={x:d,y:g,w:$,h:w,z:0,minimized:n,maximized:o};await l.store.viewInstances.patch(e,{windowGeometry:S,updatedAt:Date.now()})}catch{}}var Dm=Object.defineProperty,Rm=Object.getOwnPropertyDescriptor,Yl=(e,t,r,i)=>{for(var n=i>1?void 0:i?Rm(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Dm(t,r,n),n};let Ci=class extends Ne{constructor(){super(...arguments),this.tables=[],this.workspaceId=""}async connectedCallback(){super.connectedCallback();const e=await ye();this.workspaceId=e.workspaceId,this.unsubscribe=e.store.tables.subscribe(r=>this.tables=r.filter(i=>i.workspaceId===this.workspaceId));const t=await e.store.tables.find();this.tables=t.filter(r=>r.workspaceId===this.workspaceId),await bm(),await Am()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){return this.tables.length>0?R``:R`<div class="empty">
      No tables yet. Drop a <strong>.csv</strong> or <strong>.json</strong> file anywhere on the
      page, or click <strong>+ New Table</strong> above.
    </div>`}};Ci.styles=Ye`
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
  `;Yl([W()],Ci.prototype,"tables",2);Ci=Yl([nt("table-list")],Ci);var Om=Object.defineProperty,jm=Object.getOwnPropertyDescriptor,io=(e,t,r,i)=>{for(var n=i>1?void 0:i?jm(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Om(t,r,n),n};let _r=class extends Ne{constructor(){super(...arguments),this.workspaces=[],this.current=""}async connectedCallback(){super.connectedCallback();const e=await ye();this.current=e.workspaceId,this.unsubscribe=e.store.workspaces.subscribe(t=>this.workspaces=t),this.workspaces=await e.store.workspaces.find()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}switchWorkspace(e){const t=this.workspaces.find(n=>n.id===e);if(!t)return;const r=new URLSearchParams(location.search);r.set("space",t.name);const i=`${location.pathname}?${r.toString()}${location.hash}`;location.assign(i)}async addWorkspace(){const t=await(await ye()).api.ui.dialogs.prompt("Name the new workspace. It will become active after creation.","","New workspace");if(!t||!t.trim())return;const r=new URLSearchParams(location.search);r.set("space",t.trim()),location.assign(`${location.pathname}?${r.toString()}${location.hash}`)}render(){return R`
      <select
        .value=${this.current}
        @change=${e=>this.switchWorkspace(e.target.value)}
      >
        ${this.workspaces.map(e=>R`<option value=${e.id} ?selected=${e.id===this.current}>${e.name}</option>`)}
      </select>
      <button @click=${this.addWorkspace} title="New workspace">
        <span class="mi sm">add</span>
      </button>
    `}};_r.styles=[Zt,Ye`
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
  `];io([W()],_r.prototype,"workspaces",2);io([W()],_r.prototype,"current",2);_r=io([nt("workspace-selector")],_r);var za=Object.freeze,Xl=Object.defineProperty,Fm=Object.getOwnPropertyDescriptor,nn=(e,t,r,i)=>{for(var n=i>1?void 0:i?Fm(t,r):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(n=(i?l(t,r,n):l(n))||n);return i&&n&&Xl(t,r,n),n},zm=(e,t)=>za(Xl(e,"raw",{value:za(e.slice())})),La;function Ma(e){return e?e.trimStart().startsWith("<svg")?R`<span class="icon-svg">${Va(e)}</span>`:R`<span class="mi sm">${e}</span>`:""}let zt=class extends Ne{constructor(){super(...arguments),this.footerButtons=[],this.headerButtons=[],this.searchQuery="",this.searchOpen=!1,this.workspaceTitle="",this.api=null,this.searchTimer=null,this.searchFocusPending=!1,this.onEditColumns=e=>{const t=e;this.dialog?.open(t.detail.tableId,{notice:t.detail.notice})},this.onOpenNewTable=()=>{this.dialog?.open()},this.onOpenCsvPaste=()=>{this.csvPasteDialog?.open()},this.onOpenPluginManager=()=>{this.pluginManagerDialog?.open()},this.onOpenSettings=()=>{this.settingsDialog?.open()},this.openSearch=()=>{this.searchOpen=!0,this.searchFocusPending=!0},this.closeSearchOnBlur=()=>{this.searchOpen=!1},this.onSearchInput=e=>{this.searchQuery=e.target.value,this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchTimer=window.setTimeout(()=>this.broadcastSearch(this.searchQuery),200)},this.clearSearch=e=>{e.preventDefault(),this.searchTimer!=null&&window.clearTimeout(this.searchTimer),this.searchQuery="",this.broadcastSearch(""),this.searchFocusPending=!0},this.onDragOver=e=>{Ba(e)&&(e.preventDefault(),this.classList.add("drag-over"))},this.onDragLeave=e=>{e.relatedTarget&&this.contains(e.relatedTarget)||this.classList.remove("drag-over")},this.onDrop=async e=>{if(this.classList.remove("drag-over"),!Ba(e))return;e.preventDefault();const t=await ye(),r=Array.from(e.dataTransfer?.files??[]);t.events.emit("drop:files",{files:r,event:e});for(const i of[...t.registries.dropHandlers])try{if(await i(e,t.api))return}catch(n){t.events.emit("plugin:error",{url:"(drop-handler)",phase:"runtime",error:n})}},this.runSlot=(e,t)=>{if(!this.api)return;const r=t?.currentTarget??void 0;Promise.resolve(e.onClick(this.api,{anchor:r})).catch(i=>{console.error(`[footer-button:${e.id}]`,i)})}}connectedCallback(){super.connectedCallback(),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave),this.addEventListener("drop",this.onDrop),document.addEventListener("easydb:edit-columns",this.onEditColumns),document.addEventListener("easydb:open-new-table",this.onOpenNewTable),document.addEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.addEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.addEventListener("easydb:open-settings",this.onOpenSettings),this.bindRegistries()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave),this.removeEventListener("drop",this.onDrop),document.removeEventListener("easydb:edit-columns",this.onEditColumns),document.removeEventListener("easydb:open-new-table",this.onOpenNewTable),document.removeEventListener("easydb:open-csv-paste",this.onOpenCsvPaste),document.removeEventListener("easydb:open-plugin-manager",this.onOpenPluginManager),document.removeEventListener("easydb:open-settings",this.onOpenSettings),this.workspaceUnsub?.()}updated(){this.searchFocusPending&&this.searchInput&&(this.searchInput.focus(),this.searchFocusPending=!1)}broadcastSearch(e){document.dispatchEvent(new CustomEvent("easydb:global-search",{detail:{query:e}}))}async bindRegistries(){const e=await ye();this.api=e.api,this.snapshotRegistries(e),e.events.on("app:ready",()=>this.snapshotRegistries(e)),this.workspaceUnsub=e.store.workspaces.subscribe(t=>{const r=t.find(i=>i.id===e.workspaceId);this.workspaceTitle=r?.title?.trim()??""})}snapshotRegistries(e){this.footerButtons=[...e.registries.footerButtons],this.headerButtons=[...e.registries.headerButtons]}renderSlotButton(e,t){if(e.variant==="secondary")return R`
        <button class="icon-btn" title=${e.tooltip??e.label} @click=${()=>this.runSlot(e)}>
          ${Ma(e.icon)}
        </button>
      `;const r=t==="header"||e.variant==="primary"?"primary":"slot";return R`
      <button class=${r} title=${e.tooltip??e.label} @click=${i=>this.runSlot(e,i)}>
        ${Ma(e.icon)}
        <span class="btn-label">${e.label}</span>
      </button>
    `}render(){return R(La||(La=zm([`
      <header>
        <strong
          >`,`
          <a
            class="version-link"
            href="https://github.com/cawoodm/easydbaccess/blob/main/CHANGELOG.md"
            target="_blank"
            rel="noopener"
            title="View the changelog on GitHub"
            ><span class="version">v0.0.133</span></a
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
            </button>`,()=>this.api?.ui.openPluginManager(),this.headerButtons.filter(e=>e.variant==="secondary").map(e=>this.renderSlotButton(e,"header")),this.footerButtons.map(e=>this.renderSlotButton(e,"footer")))}};zt.styles=[Zt,Ye`
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
    `];nn([Kn("new-table-dialog")],zt.prototype,"dialog",2);nn([Kn("csv-paste-dialog")],zt.prototype,"csvPasteDialog",2);nn([Kn("plugin-manager-dialog")],zt.prototype,"pluginManagerDialog",2);nn([Kn("settings-dialog")],zt.prototype,"settingsDialog",2);nn([Kn("input.search")],zt.prototype,"searchInput",2);nn([W()],zt.prototype,"footerButtons",2);nn([W()],zt.prototype,"headerButtons",2);nn([W()],zt.prototype,"searchQuery",2);nn([W()],zt.prototype,"searchOpen",2);nn([W()],zt.prototype,"workspaceTitle",2);zt=nn([nt("app-shell")],zt);function Ba(e){const t=e.dataTransfer;return t?t.types&&Array.from(t.types).includes("Files")?!0:(t.files?.length??0)>0:!1}typeof location<"u"&&new URLSearchParams(location.search).get("test")==="1"&&Promise.all([ye(),An(()=>Promise.resolve().then(()=>Ml),[])]).then(([e,t])=>{Object.assign(window,{__easydb:e,__autoSyncTick:()=>t.tick(e.api)}),document.dispatchEvent(new CustomEvent("easydb:test-ready"))});export{Ye as a,R as b,Kt as c,Wt as d,Zt as e,Ne as i,Vt as m,W as r,nt as t};
//# sourceMappingURL=index-GCL3XnVw.js.map
