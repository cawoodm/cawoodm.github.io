(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dr="149",Na=0,kr=1,Ua=2,ia=1,za=2,ti=3,qt=0,_t=1,Kt=2,Ht=0,Un=1,Vr=2,Wr=3,Hr=4,Oa=5,In=100,Ba=101,Ga=102,Xr=103,qr=104,ka=200,Va=201,Wa=202,Ha=203,ra=204,sa=205,Xa=206,qa=207,Ya=208,ja=209,Za=210,$a=0,Ka=1,Ja=2,Sr=3,Qa=4,eo=5,to=6,no=7,Pr=0,io=1,ro=2,Xt=0,so=1,ao=2,oo=3,lo=4,co=5,aa=300,Bn=301,Gn=302,br=303,wr=304,Fi=306,Tr=1e3,Lt=1001,Er=1002,ct=1003,Yr=1004,Vi=1005,bt=1006,uo=1007,ri=1008,pn=1009,ho=1010,fo=1011,oa=1012,po=1013,cn=1014,un=1015,si=1016,mo=1017,go=1018,zn=1020,_o=1021,Dt=1023,xo=1024,vo=1025,hn=1026,kn=1027,Mo=1028,yo=1029,So=1030,bo=1031,wo=1033,Wi=33776,Hi=33777,Xi=33778,qi=33779,jr=35840,Zr=35841,$r=35842,Kr=35843,To=36196,Jr=37492,Qr=37496,es=37808,ts=37809,ns=37810,is=37811,rs=37812,ss=37813,as=37814,os=37815,ls=37816,cs=37817,us=37818,hs=37819,ds=37820,fs=37821,Yi=36492,Eo=36283,ps=36284,ms=36285,gs=36286,mn=3e3,Oe=3001,Ao=3200,Co=3201,Rr=0,Lo=1,Pt="srgb",ai="srgb-linear",ji=7680,Do=519,_s=35044,xs="300 es",Ar=1035;class Wn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,l=i.length;s<l;s++)i[s].call(this,e);e.target=null}}}const nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zi=Math.PI/180,vs=180/Math.PI;function oi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nt[r&255]+nt[r>>8&255]+nt[r>>16&255]+nt[r>>24&255]+"-"+nt[e&255]+nt[e>>8&255]+"-"+nt[e>>16&15|64]+nt[e>>24&255]+"-"+nt[t&63|128]+nt[t>>8&255]+"-"+nt[t>>16&255]+nt[t>>24&255]+nt[n&255]+nt[n>>8&255]+nt[n>>16&255]+nt[n>>24&255]).toLowerCase()}function mt(r,e,t){return Math.max(e,Math.min(t,r))}function Po(r,e){return(r%e+e)%e}function $i(r,e,t){return(1-t)*r+t*e}function Ms(r){return(r&r-1)===0&&r!==0}function Cr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function di(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function dt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,l=this.y-e.y;return this.x=s*n-l*i+e.x,this.y=s*i+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,l,a,c,u){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=l,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,l=n[0],a=n[3],c=n[6],u=n[1],h=n[4],m=n[7],d=n[2],g=n[5],M=n[8],p=i[0],f=i[3],x=i[6],T=i[1],S=i[4],E=i[7],w=i[2],D=i[5],I=i[8];return s[0]=l*p+a*T+c*w,s[3]=l*f+a*S+c*D,s[6]=l*x+a*E+c*I,s[1]=u*p+h*T+m*w,s[4]=u*f+h*S+m*D,s[7]=u*x+h*E+m*I,s[2]=d*p+g*T+M*w,s[5]=d*f+g*S+M*D,s[8]=d*x+g*E+M*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],l=e[4],a=e[5],c=e[6],u=e[7],h=e[8];return t*l*h-t*a*u-n*s*h+n*a*c+i*s*u-i*l*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],l=e[4],a=e[5],c=e[6],u=e[7],h=e[8],m=h*l-a*u,d=a*c-h*s,g=u*s-l*c,M=t*m+n*d+i*g;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/M;return e[0]=m*p,e[1]=(i*u-h*n)*p,e[2]=(a*n-i*l)*p,e[3]=d*p,e[4]=(h*t-i*c)*p,e[5]=(i*s-a*t)*p,e[6]=g*p,e[7]=(n*c-u*t)*p,e[8]=(l*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,l,a){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*l+u*a)+l+e,-i*u,i*c,-i*(-u*l+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ki.makeScale(e,t)),this}rotate(e){return this.premultiply(Ki.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ki.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ki=new gt;function la(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ii(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function dn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Pi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Ji={[Pt]:{[ai]:dn},[ai]:{[Pt]:Pi}},at={legacyMode:!0,get workingColorSpace(){return ai},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Ji[e]&&Ji[e][t]!==void 0){const n=Ji[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},ca={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xe={r:0,g:0,b:0},Tt={h:0,s:0,l:0},fi={h:0,s:0,l:0};function Qi(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function pi(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=at.workingColorSpace){if(e=Po(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,l=2*n-s;this.r=Qi(l,s,e+1/3),this.g=Qi(l,s,e),this.b=Qi(l,s,e-1/3)}return at.toWorkingColorSpace(this,i),this}setStyle(e,t=Pt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const l=i[1],a=i[2];switch(l){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,at.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,at.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,u=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,u,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],l=s.length;if(l===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,at.toWorkingColorSpace(this,t),this;if(l===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,at.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Pt){const n=ca[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dn(e.r),this.g=dn(e.g),this.b=dn(e.b),this}copyLinearToSRGB(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return at.fromWorkingColorSpace(pi(this,Xe),e),mt(Xe.r*255,0,255)<<16^mt(Xe.g*255,0,255)<<8^mt(Xe.b*255,0,255)<<0}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(pi(this,Xe),t);const n=Xe.r,i=Xe.g,s=Xe.b,l=Math.max(n,i,s),a=Math.min(n,i,s);let c,u;const h=(a+l)/2;if(a===l)c=0,u=0;else{const m=l-a;switch(u=h<=.5?m/(l+a):m/(2-l-a),l){case n:c=(i-s)/m+(i<s?6:0);break;case i:c=(s-n)/m+2;break;case s:c=(n-i)/m+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(pi(this,Xe),t),e.r=Xe.r,e.g=Xe.g,e.b=Xe.b,e}getStyle(e=Pt){return at.fromWorkingColorSpace(pi(this,Xe),e),e!==Pt?`color(${e} ${Xe.r} ${Xe.g} ${Xe.b})`:`rgb(${Xe.r*255|0},${Xe.g*255|0},${Xe.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Tt),Tt.h+=e,Tt.s+=t,Tt.l+=n,this.setHSL(Tt.h,Tt.s,Tt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tt),e.getHSL(fi);const n=$i(Tt.h,fi.h,t),i=$i(Tt.s,fi.s,t),s=$i(Tt.l,fi.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ue.NAMES=ca;let vn;class ua{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vn===void 0&&(vn=Ii("canvas")),vn.width=e.width,vn.height=e.height;const n=vn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ii("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let l=0;l<s.length;l++)s[l]=dn(s[l]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(dn(t[n]/255)*255):t[n]=dn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ha{constructor(e=null){this.isSource=!0,this.uuid=oi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let l=0,a=i.length;l<a;l++)i[l].isDataTexture?s.push(er(i[l].image)):s.push(er(i[l]))}else s=er(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function er(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ua.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ro=0;class xt extends Wn{constructor(e=xt.DEFAULT_IMAGE,t=xt.DEFAULT_MAPPING,n=Lt,i=Lt,s=bt,l=ri,a=Dt,c=pn,u=xt.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ro++}),this.uuid=oi(),this.name="",this.source=new ha(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=l,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==aa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tr:e.x=e.x-Math.floor(e.x);break;case Lt:e.x=e.x<0?0:1;break;case Er:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tr:e.y=e.y-Math.floor(e.y);break;case Lt:e.y=e.y<0?0:1;break;case Er:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}xt.DEFAULT_IMAGE=null;xt.DEFAULT_MAPPING=aa;xt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,i=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*i+l[12]*s,this.y=l[1]*t+l[5]*n+l[9]*i+l[13]*s,this.z=l[2]*t+l[6]*n+l[10]*i+l[14]*s,this.w=l[3]*t+l[7]*n+l[11]*i+l[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,u=c[0],h=c[4],m=c[8],d=c[1],g=c[5],M=c[9],p=c[2],f=c[6],x=c[10];if(Math.abs(h-d)<.01&&Math.abs(m-p)<.01&&Math.abs(M-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(m+p)<.1&&Math.abs(M+f)<.1&&Math.abs(u+g+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(u+1)/2,E=(g+1)/2,w=(x+1)/2,D=(h+d)/4,I=(m+p)/4,v=(M+f)/4;return S>E&&S>w?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=D/n,s=I/n):E>w?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=D/i,s=v/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=I/s,i=v/s),this.set(n,i,s,t),this}let T=Math.sqrt((f-M)*(f-M)+(m-p)*(m-p)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(f-M)/T,this.y=(m-p)/T,this.z=(d-h)/T,this.w=Math.acos((u+g+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gn extends Wn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new xt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ha(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class da extends xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ct,this.minFilter=ct,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io extends xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ct,this.minFilter=ct,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class li{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,l,a){let c=n[i+0],u=n[i+1],h=n[i+2],m=n[i+3];const d=s[l+0],g=s[l+1],M=s[l+2],p=s[l+3];if(a===0){e[t+0]=c,e[t+1]=u,e[t+2]=h,e[t+3]=m;return}if(a===1){e[t+0]=d,e[t+1]=g,e[t+2]=M,e[t+3]=p;return}if(m!==p||c!==d||u!==g||h!==M){let f=1-a;const x=c*d+u*g+h*M+m*p,T=x>=0?1:-1,S=1-x*x;if(S>Number.EPSILON){const w=Math.sqrt(S),D=Math.atan2(w,x*T);f=Math.sin(f*D)/w,a=Math.sin(a*D)/w}const E=a*T;if(c=c*f+d*E,u=u*f+g*E,h=h*f+M*E,m=m*f+p*E,f===1-a){const w=1/Math.sqrt(c*c+u*u+h*h+m*m);c*=w,u*=w,h*=w,m*=w}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,i,s,l){const a=n[i],c=n[i+1],u=n[i+2],h=n[i+3],m=s[l],d=s[l+1],g=s[l+2],M=s[l+3];return e[t]=a*M+h*m+c*g-u*d,e[t+1]=c*M+h*d+u*m-a*g,e[t+2]=u*M+h*g+a*d-c*m,e[t+3]=h*M-a*m-c*d-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,l=e._order,a=Math.cos,c=Math.sin,u=a(n/2),h=a(i/2),m=a(s/2),d=c(n/2),g=c(i/2),M=c(s/2);switch(l){case"XYZ":this._x=d*h*m+u*g*M,this._y=u*g*m-d*h*M,this._z=u*h*M+d*g*m,this._w=u*h*m-d*g*M;break;case"YXZ":this._x=d*h*m+u*g*M,this._y=u*g*m-d*h*M,this._z=u*h*M-d*g*m,this._w=u*h*m+d*g*M;break;case"ZXY":this._x=d*h*m-u*g*M,this._y=u*g*m+d*h*M,this._z=u*h*M+d*g*m,this._w=u*h*m-d*g*M;break;case"ZYX":this._x=d*h*m-u*g*M,this._y=u*g*m+d*h*M,this._z=u*h*M-d*g*m,this._w=u*h*m+d*g*M;break;case"YZX":this._x=d*h*m+u*g*M,this._y=u*g*m+d*h*M,this._z=u*h*M-d*g*m,this._w=u*h*m-d*g*M;break;case"XZY":this._x=d*h*m-u*g*M,this._y=u*g*m-d*h*M,this._z=u*h*M+d*g*m,this._w=u*h*m+d*g*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],l=t[1],a=t[5],c=t[9],u=t[2],h=t[6],m=t[10],d=n+a+m;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(h-c)*g,this._y=(s-u)*g,this._z=(l-i)*g}else if(n>a&&n>m){const g=2*Math.sqrt(1+n-a-m);this._w=(h-c)/g,this._x=.25*g,this._y=(i+l)/g,this._z=(s+u)/g}else if(a>m){const g=2*Math.sqrt(1+a-n-m);this._w=(s-u)/g,this._x=(i+l)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+m-n-a);this._w=(l-i)/g,this._x=(s+u)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,l=e._w,a=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+l*a+i*u-s*c,this._y=i*h+l*c+s*a-n*u,this._z=s*h+l*u+n*c-i*a,this._w=l*h-n*a-i*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,l=this._w;let a=l*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=l,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const g=1-t;return this._w=g*l+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),h=Math.atan2(u,a),m=Math.sin((1-t)*h)/u,d=Math.sin(t*h)/u;return this._w=l*m+this._w*d,this._x=n*m+this._x*d,this._y=i*m+this._y*d,this._z=s*m+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ys.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ys.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,l=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*l,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*l,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,l=e.y,a=e.z,c=e.w,u=c*t+l*i-a*n,h=c*n+a*t-s*i,m=c*i+s*n-l*t,d=-s*t-l*n-a*i;return this.x=u*c+d*-s+h*-a-m*-l,this.y=h*c+d*-l+m*-s-u*-a,this.z=m*c+d*-a+u*-l-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,l=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*l-n*c,this.z=n*a-i*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tr.copy(this).projectOnVector(e),this.sub(tr)}reflect(e){return this.sub(tr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tr=new U,ys=new li;class ci{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,l=-1/0,a=-1/0;for(let c=0,u=e.length;c<u;c+=3){const h=e[c],m=e[c+1],d=e[c+2];h<t&&(t=h),m<n&&(n=m),d<i&&(i=d),h>s&&(s=h),m>l&&(l=m),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,l,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,l=-1/0,a=-1/0;for(let c=0,u=e.count;c<u;c++){const h=e.getX(c),m=e.getY(c),d=e.getZ(c);h<t&&(t=h),m<n&&(n=m),d<i&&(i=d),h>s&&(s=h),m>l&&(l=m),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,l,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let l=0,a=s.count;l<a;l++)nn.fromBufferAttribute(s,l).applyMatrix4(e.matrixWorld),this.expandByPoint(nn)}else n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox),nr.applyMatrix4(e.matrixWorld),this.union(nr);const i=e.children;for(let s=0,l=i.length;s<l;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yn),mi.subVectors(this.max,Yn),Mn.subVectors(e.a,Yn),yn.subVectors(e.b,Yn),Sn.subVectors(e.c,Yn),Yt.subVectors(yn,Mn),jt.subVectors(Sn,yn),rn.subVectors(Mn,Sn);let t=[0,-Yt.z,Yt.y,0,-jt.z,jt.y,0,-rn.z,rn.y,Yt.z,0,-Yt.x,jt.z,0,-jt.x,rn.z,0,-rn.x,-Yt.y,Yt.x,0,-jt.y,jt.x,0,-rn.y,rn.x,0];return!ir(t,Mn,yn,Sn,mi)||(t=[1,0,0,0,1,0,0,0,1],!ir(t,Mn,yn,Sn,mi))?!1:(gi.crossVectors(Yt,jt),t=[gi.x,gi.y,gi.z],ir(t,Mn,yn,Sn,mi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return nn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ot[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ot[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ot[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ot[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ot[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ot[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ot[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ot[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ot),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ot=[new U,new U,new U,new U,new U,new U,new U,new U],nn=new U,nr=new ci,Mn=new U,yn=new U,Sn=new U,Yt=new U,jt=new U,rn=new U,Yn=new U,mi=new U,gi=new U,sn=new U;function ir(r,e,t,n,i){for(let s=0,l=r.length-3;s<=l;s+=3){sn.fromArray(r,s);const a=i.x*Math.abs(sn.x)+i.y*Math.abs(sn.y)+i.z*Math.abs(sn.z),c=e.dot(sn),u=t.dot(sn),h=n.dot(sn);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>a)return!1}return!0}const Fo=new ci,jn=new U,rr=new U;class Ir{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Fo.setFromPoints(e).getCenter(n);let i=0;for(let s=0,l=e.length;s<l;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jn.subVectors(e,this.center);const t=jn.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(jn,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jn.copy(e.center).add(rr)),this.expandByPoint(jn.copy(e.center).sub(rr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bt=new U,sr=new U,_i=new U,Zt=new U,ar=new U,xi=new U,or=new U;class No{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bt.copy(this.direction).multiplyScalar(t).add(this.origin),Bt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){sr.copy(e).add(t).multiplyScalar(.5),_i.copy(t).sub(e).normalize(),Zt.copy(this.origin).sub(sr);const s=e.distanceTo(t)*.5,l=-this.direction.dot(_i),a=Zt.dot(this.direction),c=-Zt.dot(_i),u=Zt.lengthSq(),h=Math.abs(1-l*l);let m,d,g,M;if(h>0)if(m=l*c-a,d=l*a-c,M=s*h,m>=0)if(d>=-M)if(d<=M){const p=1/h;m*=p,d*=p,g=m*(m+l*d+2*a)+d*(l*m+d+2*c)+u}else d=s,m=Math.max(0,-(l*d+a)),g=-m*m+d*(d+2*c)+u;else d=-s,m=Math.max(0,-(l*d+a)),g=-m*m+d*(d+2*c)+u;else d<=-M?(m=Math.max(0,-(-l*s+a)),d=m>0?-s:Math.min(Math.max(-s,-c),s),g=-m*m+d*(d+2*c)+u):d<=M?(m=0,d=Math.min(Math.max(-s,-c),s),g=d*(d+2*c)+u):(m=Math.max(0,-(l*s+a)),d=m>0?s:Math.min(Math.max(-s,-c),s),g=-m*m+d*(d+2*c)+u);else d=l>0?-s:s,m=Math.max(0,-(l*d+a)),g=-m*m+d*(d+2*c)+u;return n&&n.copy(this.direction).multiplyScalar(m).add(this.origin),i&&i.copy(_i).multiplyScalar(d).add(sr),g}intersectSphere(e,t){Bt.subVectors(e.center,this.origin);const n=Bt.dot(this.direction),i=Bt.dot(Bt)-n*n,s=e.radius*e.radius;if(i>s)return null;const l=Math.sqrt(s-i),a=n-l,c=n+l;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,l,a,c;const u=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,i=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,i=(e.min.x-d.x)*u),h>=0?(s=(e.min.y-d.y)*h,l=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,l=(e.min.y-d.y)*h),n>l||s>i||((s>n||isNaN(n))&&(n=s),(l<i||isNaN(i))&&(i=l),m>=0?(a=(e.min.z-d.z)*m,c=(e.max.z-d.z)*m):(a=(e.max.z-d.z)*m,c=(e.min.z-d.z)*m),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Bt)!==null}intersectTriangle(e,t,n,i,s){ar.subVectors(t,e),xi.subVectors(n,e),or.crossVectors(ar,xi);let l=this.direction.dot(or),a;if(l>0){if(i)return null;a=1}else if(l<0)a=-1,l=-l;else return null;Zt.subVectors(this.origin,e);const c=a*this.direction.dot(xi.crossVectors(Zt,xi));if(c<0)return null;const u=a*this.direction.dot(ar.cross(Zt));if(u<0||c+u>l)return null;const h=-a*Zt.dot(or);return h<0?null:this.at(h/l,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,l,a,c,u,h,m,d,g,M,p,f){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=l,x[9]=a,x[13]=c,x[2]=u,x[6]=h,x[10]=m,x[14]=d,x[3]=g,x[7]=M,x[11]=p,x[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/bn.setFromMatrixColumn(e,0).length(),s=1/bn.setFromMatrixColumn(e,1).length(),l=1/bn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,l=Math.cos(n),a=Math.sin(n),c=Math.cos(i),u=Math.sin(i),h=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const d=l*h,g=l*m,M=a*h,p=a*m;t[0]=c*h,t[4]=-c*m,t[8]=u,t[1]=g+M*u,t[5]=d-p*u,t[9]=-a*c,t[2]=p-d*u,t[6]=M+g*u,t[10]=l*c}else if(e.order==="YXZ"){const d=c*h,g=c*m,M=u*h,p=u*m;t[0]=d+p*a,t[4]=M*a-g,t[8]=l*u,t[1]=l*m,t[5]=l*h,t[9]=-a,t[2]=g*a-M,t[6]=p+d*a,t[10]=l*c}else if(e.order==="ZXY"){const d=c*h,g=c*m,M=u*h,p=u*m;t[0]=d-p*a,t[4]=-l*m,t[8]=M+g*a,t[1]=g+M*a,t[5]=l*h,t[9]=p-d*a,t[2]=-l*u,t[6]=a,t[10]=l*c}else if(e.order==="ZYX"){const d=l*h,g=l*m,M=a*h,p=a*m;t[0]=c*h,t[4]=M*u-g,t[8]=d*u+p,t[1]=c*m,t[5]=p*u+d,t[9]=g*u-M,t[2]=-u,t[6]=a*c,t[10]=l*c}else if(e.order==="YZX"){const d=l*c,g=l*u,M=a*c,p=a*u;t[0]=c*h,t[4]=p-d*m,t[8]=M*m+g,t[1]=m,t[5]=l*h,t[9]=-a*h,t[2]=-u*h,t[6]=g*m+M,t[10]=d-p*m}else if(e.order==="XZY"){const d=l*c,g=l*u,M=a*c,p=a*u;t[0]=c*h,t[4]=-m,t[8]=u*h,t[1]=d*m+p,t[5]=l*h,t[9]=g*m-M,t[2]=M*m-g,t[6]=a*h,t[10]=p*m+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uo,e,zo)}lookAt(e,t,n){const i=this.elements;return ft.subVectors(e,t),ft.lengthSq()===0&&(ft.z=1),ft.normalize(),$t.crossVectors(n,ft),$t.lengthSq()===0&&(Math.abs(n.z)===1?ft.x+=1e-4:ft.z+=1e-4,ft.normalize(),$t.crossVectors(n,ft)),$t.normalize(),vi.crossVectors(ft,$t),i[0]=$t.x,i[4]=vi.x,i[8]=ft.x,i[1]=$t.y,i[5]=vi.y,i[9]=ft.y,i[2]=$t.z,i[6]=vi.z,i[10]=ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,l=n[0],a=n[4],c=n[8],u=n[12],h=n[1],m=n[5],d=n[9],g=n[13],M=n[2],p=n[6],f=n[10],x=n[14],T=n[3],S=n[7],E=n[11],w=n[15],D=i[0],I=i[4],v=i[8],A=i[12],L=i[1],V=i[5],j=i[9],R=i[13],F=i[2],q=i[6],$=i[10],K=i[14],X=i[3],ee=i[7],Q=i[11],ce=i[15];return s[0]=l*D+a*L+c*F+u*X,s[4]=l*I+a*V+c*q+u*ee,s[8]=l*v+a*j+c*$+u*Q,s[12]=l*A+a*R+c*K+u*ce,s[1]=h*D+m*L+d*F+g*X,s[5]=h*I+m*V+d*q+g*ee,s[9]=h*v+m*j+d*$+g*Q,s[13]=h*A+m*R+d*K+g*ce,s[2]=M*D+p*L+f*F+x*X,s[6]=M*I+p*V+f*q+x*ee,s[10]=M*v+p*j+f*$+x*Q,s[14]=M*A+p*R+f*K+x*ce,s[3]=T*D+S*L+E*F+w*X,s[7]=T*I+S*V+E*q+w*ee,s[11]=T*v+S*j+E*$+w*Q,s[15]=T*A+S*R+E*K+w*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],l=e[1],a=e[5],c=e[9],u=e[13],h=e[2],m=e[6],d=e[10],g=e[14],M=e[3],p=e[7],f=e[11],x=e[15];return M*(+s*c*m-i*u*m-s*a*d+n*u*d+i*a*g-n*c*g)+p*(+t*c*g-t*u*d+s*l*d-i*l*g+i*u*h-s*c*h)+f*(+t*u*m-t*a*g-s*l*m+n*l*g+s*a*h-n*u*h)+x*(-i*a*h-t*c*m+t*a*d+i*l*m-n*l*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],l=e[4],a=e[5],c=e[6],u=e[7],h=e[8],m=e[9],d=e[10],g=e[11],M=e[12],p=e[13],f=e[14],x=e[15],T=m*f*u-p*d*u+p*c*g-a*f*g-m*c*x+a*d*x,S=M*d*u-h*f*u-M*c*g+l*f*g+h*c*x-l*d*x,E=h*p*u-M*m*u+M*a*g-l*p*g-h*a*x+l*m*x,w=M*m*c-h*p*c-M*a*d+l*p*d+h*a*f-l*m*f,D=t*T+n*S+i*E+s*w;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/D;return e[0]=T*I,e[1]=(p*d*s-m*f*s-p*i*g+n*f*g+m*i*x-n*d*x)*I,e[2]=(a*f*s-p*c*s+p*i*u-n*f*u-a*i*x+n*c*x)*I,e[3]=(m*c*s-a*d*s-m*i*u+n*d*u+a*i*g-n*c*g)*I,e[4]=S*I,e[5]=(h*f*s-M*d*s+M*i*g-t*f*g-h*i*x+t*d*x)*I,e[6]=(M*c*s-l*f*s-M*i*u+t*f*u+l*i*x-t*c*x)*I,e[7]=(l*d*s-h*c*s+h*i*u-t*d*u-l*i*g+t*c*g)*I,e[8]=E*I,e[9]=(M*m*s-h*p*s-M*n*g+t*p*g+h*n*x-t*m*x)*I,e[10]=(l*p*s-M*a*s+M*n*u-t*p*u-l*n*x+t*a*x)*I,e[11]=(h*a*s-l*m*s-h*n*u+t*m*u+l*n*g-t*a*g)*I,e[12]=w*I,e[13]=(h*p*i-M*m*i+M*n*d-t*p*d-h*n*f+t*m*f)*I,e[14]=(M*a*i-l*p*i-M*n*c+t*p*c+l*n*f-t*a*f)*I,e[15]=(l*m*i-h*a*i+h*n*c-t*m*c-l*n*d+t*a*d)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,l=e.x,a=e.y,c=e.z,u=s*l,h=s*a;return this.set(u*l+n,u*a-i*c,u*c+i*a,0,u*a+i*c,h*a+n,h*c-i*l,0,u*c-i*a,h*c+i*l,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,l){return this.set(1,n,s,0,e,1,l,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,l=t._y,a=t._z,c=t._w,u=s+s,h=l+l,m=a+a,d=s*u,g=s*h,M=s*m,p=l*h,f=l*m,x=a*m,T=c*u,S=c*h,E=c*m,w=n.x,D=n.y,I=n.z;return i[0]=(1-(p+x))*w,i[1]=(g+E)*w,i[2]=(M-S)*w,i[3]=0,i[4]=(g-E)*D,i[5]=(1-(d+x))*D,i[6]=(f+T)*D,i[7]=0,i[8]=(M+S)*I,i[9]=(f-T)*I,i[10]=(1-(d+p))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=bn.set(i[0],i[1],i[2]).length();const l=bn.set(i[4],i[5],i[6]).length(),a=bn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Et.copy(this);const u=1/s,h=1/l,m=1/a;return Et.elements[0]*=u,Et.elements[1]*=u,Et.elements[2]*=u,Et.elements[4]*=h,Et.elements[5]*=h,Et.elements[6]*=h,Et.elements[8]*=m,Et.elements[9]*=m,Et.elements[10]*=m,t.setFromRotationMatrix(Et),n.x=s,n.y=l,n.z=a,this}makePerspective(e,t,n,i,s,l){const a=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),m=(n+i)/(n-i),d=-(l+s)/(l-s),g=-2*l*s/(l-s);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=u,a[9]=m,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,l){const a=this.elements,c=1/(t-e),u=1/(n-i),h=1/(l-s),m=(t+e)*c,d=(n+i)*u,g=(l+s)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-m,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const bn=new U,Et=new qe,Uo=new U(0,0,0),zo=new U(1,1,1),$t=new U,vi=new U,ft=new U,Ss=new qe,bs=new li;class Ni{constructor(e=0,t=0,n=0,i=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],l=i[4],a=i[8],c=i[1],u=i[5],h=i[9],m=i[2],d=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-l,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-l,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-l,u));break;case"YZX":this._z=Math.asin(mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ss.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ss,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bs.setFromEuler(this),this.setFromQuaternion(bs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class fa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Oo=0;const ws=new U,wn=new li,Gt=new qe,Mi=new U,Zn=new U,Bo=new U,Go=new li,Ts=new U(1,0,0),Es=new U(0,1,0),As=new U(0,0,1),ko={type:"added"},Cs={type:"removed"};class it extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oo++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=it.DEFAULT_UP.clone();const e=new U,t=new Ni,n=new li,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qe},normalMatrix:{value:new gt}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=it.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wn.setFromAxisAngle(e,t),this.quaternion.multiply(wn),this}rotateOnWorldAxis(e,t){return wn.setFromAxisAngle(e,t),this.quaternion.premultiply(wn),this}rotateX(e){return this.rotateOnAxis(Ts,e)}rotateY(e){return this.rotateOnAxis(Es,e)}rotateZ(e){return this.rotateOnAxis(As,e)}translateOnAxis(e,t){return ws.copy(e).applyQuaternion(this.quaternion),this.position.add(ws.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ts,e)}translateY(e){return this.translateOnAxis(Es,e)}translateZ(e){return this.translateOnAxis(As,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mi.copy(e):Mi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Zn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gt.lookAt(Zn,Mi,this.up):Gt.lookAt(Mi,Zn,this.up),this.quaternion.setFromRotationMatrix(Gt),i&&(Gt.extractRotation(i.matrixWorld),wn.setFromRotationMatrix(Gt),this.quaternion.premultiply(wn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ko)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cs)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Cs)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Gt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const l=this.children[i].getObjectsByProperty(e,t);l.length>0&&(n=n.concat(l))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zn,e,Bo),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zn,Go,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,l=i.length;s<l;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const m=c[u];s(e.shapes,m)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=l(e.geometries),c=l(e.materials),u=l(e.textures),h=l(e.images),m=l(e.shapes),d=l(e.skeletons),g=l(e.animations),M=l(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),M.length>0&&(n.nodes=M)}return n.object=i,n;function l(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}it.DEFAULT_UP=new U(0,1,0);it.DEFAULT_MATRIX_AUTO_UPDATE=!0;it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const At=new U,kt=new U,lr=new U,Vt=new U,Tn=new U,En=new U,Ls=new U,cr=new U,ur=new U,hr=new U;class Wt{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),At.subVectors(e,t),i.cross(At);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){At.subVectors(i,t),kt.subVectors(n,t),lr.subVectors(e,t);const l=At.dot(At),a=At.dot(kt),c=At.dot(lr),u=kt.dot(kt),h=kt.dot(lr),m=l*u-a*a;if(m===0)return s.set(-2,-1,-1);const d=1/m,g=(u*c-a*h)*d,M=(l*h-a*c)*d;return s.set(1-g-M,M,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Vt),Vt.x>=0&&Vt.y>=0&&Vt.x+Vt.y<=1}static getUV(e,t,n,i,s,l,a,c){return this.getBarycoord(e,t,n,i,Vt),c.set(0,0),c.addScaledVector(s,Vt.x),c.addScaledVector(l,Vt.y),c.addScaledVector(a,Vt.z),c}static isFrontFacing(e,t,n,i){return At.subVectors(n,t),kt.subVectors(e,t),At.cross(kt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return At.subVectors(this.c,this.b),kt.subVectors(this.a,this.b),At.cross(kt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Wt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let l,a;Tn.subVectors(i,n),En.subVectors(s,n),cr.subVectors(e,n);const c=Tn.dot(cr),u=En.dot(cr);if(c<=0&&u<=0)return t.copy(n);ur.subVectors(e,i);const h=Tn.dot(ur),m=En.dot(ur);if(h>=0&&m<=h)return t.copy(i);const d=c*m-h*u;if(d<=0&&c>=0&&h<=0)return l=c/(c-h),t.copy(n).addScaledVector(Tn,l);hr.subVectors(e,s);const g=Tn.dot(hr),M=En.dot(hr);if(M>=0&&g<=M)return t.copy(s);const p=g*u-c*M;if(p<=0&&u>=0&&M<=0)return a=u/(u-M),t.copy(n).addScaledVector(En,a);const f=h*M-g*m;if(f<=0&&m-h>=0&&g-M>=0)return Ls.subVectors(s,i),a=(m-h)/(m-h+(g-M)),t.copy(i).addScaledVector(Ls,a);const x=1/(f+p+d);return l=p*x,a=d*x,t.copy(n).addScaledVector(Tn,l).addScaledVector(En,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Vo=0;class Hn extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vo++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=Un,this.side=qt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ra,this.blendDst=sa,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Do,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Un&&(n.blending=this.blending),this.side!==qt&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const l=[];for(const a in s){const c=s[a];delete c.metadata,l.push(c)}return l}if(t){const s=i(e.textures),l=i(e.images);s.length>0&&(n.textures=s),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pa extends Hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Pr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const We=new U,yi=new Ie;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_s,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yi.fromBufferAttribute(this,t),yi.applyMatrix3(e),this.setXY(t,yi.x,yi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)We.fromBufferAttribute(this,t),We.applyMatrix3(e),this.setXYZ(t,We.x,We.y,We.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)We.fromBufferAttribute(this,t),We.applyMatrix4(e),this.setXYZ(t,We.x,We.y,We.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)We.fromBufferAttribute(this,t),We.applyNormalMatrix(e),this.setXYZ(t,We.x,We.y,We.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)We.fromBufferAttribute(this,t),We.transformDirection(e),this.setXYZ(t,We.x,We.y,We.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_s&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ma extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ga extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class fn extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Wo=0;const St=new qe,dr=new it,An=new U,pt=new ci,$n=new ci,Je=new U;class xn extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wo++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(la(e)?ga:ma)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new gt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return St.makeRotationFromQuaternion(e),this.applyMatrix4(St),this}rotateX(e){return St.makeRotationX(e),this.applyMatrix4(St),this}rotateY(e){return St.makeRotationY(e),this.applyMatrix4(St),this}rotateZ(e){return St.makeRotationZ(e),this.applyMatrix4(St),this}translate(e,t,n){return St.makeTranslation(e,t,n),this.applyMatrix4(St),this}scale(e,t,n){return St.makeScale(e,t,n),this.applyMatrix4(St),this}lookAt(e){return dr.lookAt(e),dr.updateMatrix(),this.applyMatrix4(dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(An).negate(),this.translate(An.x,An.y,An.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new fn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];pt.setFromBufferAttribute(s),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,pt.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,pt.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(pt.min),this.boundingBox.expandByPoint(pt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(pt.setFromBufferAttribute(e),t)for(let s=0,l=t.length;s<l;s++){const a=t[s];$n.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(pt.min,$n.min),pt.expandByPoint(Je),Je.addVectors(pt.max,$n.max),pt.expandByPoint(Je)):(pt.expandByPoint($n.min),pt.expandByPoint($n.max))}pt.getCenter(n);let i=0;for(let s=0,l=e.count;s<l;s++)Je.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Je));if(t)for(let s=0,l=t.length;s<l;s++){const a=t[s],c=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)Je.fromBufferAttribute(a,u),c&&(An.fromBufferAttribute(e,u),Je.add(An)),i=Math.max(i,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,l=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,u=[],h=[];for(let L=0;L<a;L++)u[L]=new U,h[L]=new U;const m=new U,d=new U,g=new U,M=new Ie,p=new Ie,f=new Ie,x=new U,T=new U;function S(L,V,j){m.fromArray(i,L*3),d.fromArray(i,V*3),g.fromArray(i,j*3),M.fromArray(l,L*2),p.fromArray(l,V*2),f.fromArray(l,j*2),d.sub(m),g.sub(m),p.sub(M),f.sub(M);const R=1/(p.x*f.y-f.x*p.y);isFinite(R)&&(x.copy(d).multiplyScalar(f.y).addScaledVector(g,-p.y).multiplyScalar(R),T.copy(g).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(R),u[L].add(x),u[V].add(x),u[j].add(x),h[L].add(T),h[V].add(T),h[j].add(T))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let L=0,V=E.length;L<V;++L){const j=E[L],R=j.start,F=j.count;for(let q=R,$=R+F;q<$;q+=3)S(n[q+0],n[q+1],n[q+2])}const w=new U,D=new U,I=new U,v=new U;function A(L){I.fromArray(s,L*3),v.copy(I);const V=u[L];w.copy(V),w.sub(I.multiplyScalar(I.dot(V))).normalize(),D.crossVectors(v,V);const R=D.dot(h[L])<0?-1:1;c[L*4]=w.x,c[L*4+1]=w.y,c[L*4+2]=w.z,c[L*4+3]=R}for(let L=0,V=E.length;L<V;++L){const j=E[L],R=j.start,F=j.count;for(let q=R,$=R+F;q<$;q+=3)A(n[q+0]),A(n[q+1]),A(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);const i=new U,s=new U,l=new U,a=new U,c=new U,u=new U,h=new U,m=new U;if(e)for(let d=0,g=e.count;d<g;d+=3){const M=e.getX(d+0),p=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,M),s.fromBufferAttribute(t,p),l.fromBufferAttribute(t,f),h.subVectors(l,s),m.subVectors(i,s),h.cross(m),a.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),u.fromBufferAttribute(n,f),a.add(h),c.add(h),u.add(h),n.setXYZ(M,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(f,u.x,u.y,u.z)}else for(let d=0,g=t.count;d<g;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),l.fromBufferAttribute(t,d+2),h.subVectors(l,s),m.subVectors(i,s),h.cross(m),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Je.fromBufferAttribute(e,t),Je.normalize(),e.setXYZ(t,Je.x,Je.y,Je.z)}toNonIndexed(){function e(a,c){const u=a.array,h=a.itemSize,m=a.normalized,d=new u.constructor(c.length*h);let g=0,M=0;for(let p=0,f=c.length;p<f;p++){a.isInterleavedBufferAttribute?g=c[p]*a.data.stride+a.offset:g=c[p]*h;for(let x=0;x<h;x++)d[M++]=u[g++]}return new Ft(d,h,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],u=e(c,n);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const c=[],u=s[a];for(let h=0,m=u.length;h<m;h++){const d=u[h],g=e(d,n);c.push(g)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let a=0,c=l.length;a<c;a++){const u=l[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let m=0,d=u.length;m<d;m++){const g=u[m];h.push(g.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const h=i[u];this.setAttribute(u,h.clone(t))}const s=e.morphAttributes;for(const u in s){const h=[],m=s[u];for(let d=0,g=m.length;d<g;d++)h.push(m[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let u=0,h=l.length;u<h;u++){const m=l[u];this.addGroup(m.start,m.count,m.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ds=new qe,Cn=new No,fr=new Ir,Kn=new U,Jn=new U,Qn=new U,pr=new U,Si=new U,bi=new Ie,wi=new Ie,Ti=new Ie,mr=new U,Ei=new U;class It extends it{constructor(e=new xn,t=new pa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=i.length;s<l;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Si.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=a[c],m=s[c];h!==0&&(pr.fromBufferAttribute(m,e),l?Si.addScaledVector(pr,h):Si.addScaledVector(pr.sub(t),h))}t.add(Si)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(s),e.ray.intersectsSphere(fr)===!1)||(Ds.copy(s).invert(),Cn.copy(e.ray).applyMatrix4(Ds),n.boundingBox!==null&&Cn.intersectsBox(n.boundingBox)===!1))return;let l;const a=n.index,c=n.attributes.position,u=n.attributes.uv,h=n.attributes.uv2,m=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(i))for(let g=0,M=m.length;g<M;g++){const p=m[g],f=i[p.materialIndex],x=Math.max(p.start,d.start),T=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let S=x,E=T;S<E;S+=3){const w=a.getX(S),D=a.getX(S+1),I=a.getX(S+2);l=Ai(this,f,e,Cn,u,h,w,D,I),l&&(l.faceIndex=Math.floor(S/3),l.face.materialIndex=p.materialIndex,t.push(l))}}else{const g=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let p=g,f=M;p<f;p+=3){const x=a.getX(p),T=a.getX(p+1),S=a.getX(p+2);l=Ai(this,i,e,Cn,u,h,x,T,S),l&&(l.faceIndex=Math.floor(p/3),t.push(l))}}else if(c!==void 0)if(Array.isArray(i))for(let g=0,M=m.length;g<M;g++){const p=m[g],f=i[p.materialIndex],x=Math.max(p.start,d.start),T=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let S=x,E=T;S<E;S+=3){const w=S,D=S+1,I=S+2;l=Ai(this,f,e,Cn,u,h,w,D,I),l&&(l.faceIndex=Math.floor(S/3),l.face.materialIndex=p.materialIndex,t.push(l))}}else{const g=Math.max(0,d.start),M=Math.min(c.count,d.start+d.count);for(let p=g,f=M;p<f;p+=3){const x=p,T=p+1,S=p+2;l=Ai(this,i,e,Cn,u,h,x,T,S),l&&(l.faceIndex=Math.floor(p/3),t.push(l))}}}}function Ho(r,e,t,n,i,s,l,a){let c;if(e.side===_t?c=n.intersectTriangle(l,s,i,!0,a):c=n.intersectTriangle(i,s,l,e.side===qt,a),c===null)return null;Ei.copy(a),Ei.applyMatrix4(r.matrixWorld);const u=t.ray.origin.distanceTo(Ei);return u<t.near||u>t.far?null:{distance:u,point:Ei.clone(),object:r}}function Ai(r,e,t,n,i,s,l,a,c){r.getVertexPosition(l,Kn),r.getVertexPosition(a,Jn),r.getVertexPosition(c,Qn);const u=Ho(r,e,t,n,Kn,Jn,Qn,mr);if(u){i&&(bi.fromBufferAttribute(i,l),wi.fromBufferAttribute(i,a),Ti.fromBufferAttribute(i,c),u.uv=Wt.getUV(mr,Kn,Jn,Qn,bi,wi,Ti,new Ie)),s&&(bi.fromBufferAttribute(s,l),wi.fromBufferAttribute(s,a),Ti.fromBufferAttribute(s,c),u.uv2=Wt.getUV(mr,Kn,Jn,Qn,bi,wi,Ti,new Ie));const h={a:l,b:a,c,normal:new U,materialIndex:0};Wt.getNormal(Kn,Jn,Qn,h.normal),u.face=h}return u}class ui extends xn{constructor(e=1,t=1,n=1,i=1,s=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:l};const a=this;i=Math.floor(i),s=Math.floor(s),l=Math.floor(l);const c=[],u=[],h=[],m=[];let d=0,g=0;M("z","y","x",-1,-1,n,t,e,l,s,0),M("z","y","x",1,-1,n,t,-e,l,s,1),M("x","z","y",1,1,e,n,t,i,l,2),M("x","z","y",1,-1,e,n,-t,i,l,3),M("x","y","z",1,-1,e,t,n,i,s,4),M("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new fn(u,3)),this.setAttribute("normal",new fn(h,3)),this.setAttribute("uv",new fn(m,2));function M(p,f,x,T,S,E,w,D,I,v,A){const L=E/I,V=w/v,j=E/2,R=w/2,F=D/2,q=I+1,$=v+1;let K=0,X=0;const ee=new U;for(let Q=0;Q<$;Q++){const ce=Q*V-R;for(let z=0;z<q;z++){const Y=z*L-j;ee[p]=Y*T,ee[f]=ce*S,ee[x]=F,u.push(ee.x,ee.y,ee.z),ee[p]=0,ee[f]=0,ee[x]=D>0?1:-1,h.push(ee.x,ee.y,ee.z),m.push(z/I),m.push(1-Q/v),K+=1}}for(let Q=0;Q<v;Q++)for(let ce=0;ce<I;ce++){const z=d+ce+q*Q,Y=d+ce+q*(Q+1),ie=d+(ce+1)+q*(Q+1),re=d+(ce+1)+q*Q;c.push(z,Y,re),c.push(Y,ie,re),X+=6}a.addGroup(g,X,A),g+=X,d+=K}}static fromJSON(e){return new ui(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vn(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function lt(r){const e={};for(let t=0;t<r.length;t++){const n=Vn(r[t]);for(const i in n)e[i]=n[i]}return e}function Xo(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function _a(r){return r.getRenderTarget()===null&&r.outputEncoding===Oe?Pt:ai}const qo={clone:Vn,merge:lt};var Yo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends Hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yo,this.fragmentShader=jo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vn(e.uniforms),this.uniformsGroups=Xo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const l=this.uniforms[i].value;l&&l.isTexture?t.uniforms[i]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[i]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[i]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[i]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[i]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[i]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[i]={type:"m4",value:l.toArray()}:t.uniforms[i]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let xa=class extends it{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class Ct extends xa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(Zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const l=this.view;if(this.view!==null&&this.view.enabled){const c=l.fullWidth,u=l.fullHeight;s+=l.offsetX*i/c,t-=l.offsetY*n/u,i*=l.width/c,n*=l.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ln=-90,Dn=1;class Zo extends it{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ct(Ln,Dn,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Ct(Ln,Dn,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const l=new Ct(Ln,Dn,e,t);l.layers=this.layers,l.up.set(0,0,-1),l.lookAt(0,1,0),this.add(l);const a=new Ct(Ln,Dn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new Ct(Ln,Dn,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const u=new Ct(Ln,Dn,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,l,a,c,u]=this.children,h=e.getRenderTarget(),m=e.toneMapping,d=e.xr.enabled;e.toneMapping=Xt,e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,l),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(h),e.toneMapping=m,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class va extends xt{constructor(e,t,n,i,s,l,a,c,u,h){e=e!==void 0?e:[],t=t!==void 0?t:Bn,super(e,t,n,i,s,l,a,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $o extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new va(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ui(5,5,5),s=new _n({name:"CubemapFromEquirect",uniforms:Vn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_t,blending:Ht});s.uniforms.tEquirect.value=t;const l=new It(i,s),a=t.minFilter;return t.minFilter===ri&&(t.minFilter=bt),new Zo(1,10,this).update(e,l),t.minFilter=a,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,i);e.setRenderTarget(s)}}const gr=new U,Ko=new U,Jo=new gt;class an{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=gr.subVectors(n,t).cross(Ko.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(gr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Jo.getNormalMatrix(e),i=this.coplanarPoint(gr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new Ir,Ci=new U;class Fr{constructor(e=new an,t=new an,n=new an,i=new an,s=new an,l=new an){this.planes=[e,t,n,i,s,l]}set(e,t,n,i,s,l){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],l=n[2],a=n[3],c=n[4],u=n[5],h=n[6],m=n[7],d=n[8],g=n[9],M=n[10],p=n[11],f=n[12],x=n[13],T=n[14],S=n[15];return t[0].setComponents(a-i,m-c,p-d,S-f).normalize(),t[1].setComponents(a+i,m+c,p+d,S+f).normalize(),t[2].setComponents(a+s,m+u,p+g,S+x).normalize(),t[3].setComponents(a-s,m-u,p-g,S-x).normalize(),t[4].setComponents(a-l,m-h,p-M,S-T).normalize(),t[5].setComponents(a+l,m+h,p+M,S+T).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Pn)}intersectsSprite(e){return Pn.center.set(0,0,0),Pn.radius=.7071067811865476,Pn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ci.x=i.normal.x>0?e.max.x:e.min.x,Ci.y=i.normal.y>0?e.max.y:e.min.y,Ci.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ci)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ma(){let r=null,e=!1,t=null,n=null;function i(s,l){t(s,l),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Qo(r,e){const t=e.isWebGL2,n=new WeakMap;function i(u,h){const m=u.array,d=u.usage,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,m,d),u.onUploadCallback();let M;if(m instanceof Float32Array)M=5126;else if(m instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)M=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=5123;else if(m instanceof Int16Array)M=5122;else if(m instanceof Uint32Array)M=5125;else if(m instanceof Int32Array)M=5124;else if(m instanceof Int8Array)M=5120;else if(m instanceof Uint8Array)M=5121;else if(m instanceof Uint8ClampedArray)M=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:u.version}}function s(u,h,m){const d=h.array,g=h.updateRange;r.bindBuffer(m,u),g.count===-1?r.bufferSubData(m,0,d):(t?r.bufferSubData(m,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):r.bufferSubData(m,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function l(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h&&(r.deleteBuffer(h.buffer),n.delete(u))}function c(u,h){if(u.isGLBufferAttribute){const d=n.get(u);(!d||d.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const m=n.get(u);m===void 0?n.set(u,i(u,h)):m.version<u.version&&(s(m.buffer,u,h),m.version=u.version)}return{get:l,remove:a,update:c}}class hi extends xn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,l=t/2,a=Math.floor(n),c=Math.floor(i),u=a+1,h=c+1,m=e/a,d=t/c,g=[],M=[],p=[],f=[];for(let x=0;x<h;x++){const T=x*d-l;for(let S=0;S<u;S++){const E=S*m-s;M.push(E,-T,0),p.push(0,0,1),f.push(S/a),f.push(1-x/c)}}for(let x=0;x<c;x++)for(let T=0;T<a;T++){const S=T+u*x,E=T+u*(x+1),w=T+1+u*(x+1),D=T+1+u*x;g.push(S,E,D),g.push(E,w,D)}this.setIndex(g),this.setAttribute("position",new fn(M,3)),this.setAttribute("normal",new fn(p,3)),this.setAttribute("uv",new fn(f,2))}static fromJSON(e){return new hi(e.width,e.height,e.widthSegments,e.heightSegments)}}var el=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,tl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,il=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,al="vec3 transformed = vec3( position );",ol=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ll=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,cl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ul=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,dl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ml=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_l=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vl=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Ml=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yl=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,wl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,El="gl_FragColor = linearToOutputTexel( gl_FragColor );",Al=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ll=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dl=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Il=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ul=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zl=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ol=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kl=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vl=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wl=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Hl=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xl=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ql=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yl=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jl=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Zl=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$l=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kl=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jl=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ql=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ec=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ic=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ac=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,hc=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,dc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,pc=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_c=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,vc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Mc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,yc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Sc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Tc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ec=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ac=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pc=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Rc=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ic=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fc=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,zc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Oc=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vc=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wc=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Hc=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Xc=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,qc=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Yc=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,jc=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Zc=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,$c=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Kc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qc=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,eu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ru=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,su=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,au=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ou=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,uu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,du=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_u=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Su=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Au=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cu=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Du=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,we={alphamap_fragment:el,alphamap_pars_fragment:tl,alphatest_fragment:nl,alphatest_pars_fragment:il,aomap_fragment:rl,aomap_pars_fragment:sl,begin_vertex:al,beginnormal_vertex:ol,bsdfs:ll,iridescence_fragment:cl,bumpmap_pars_fragment:ul,clipping_planes_fragment:hl,clipping_planes_pars_fragment:dl,clipping_planes_pars_vertex:fl,clipping_planes_vertex:pl,color_fragment:ml,color_pars_fragment:gl,color_pars_vertex:_l,color_vertex:xl,common:vl,cube_uv_reflection_fragment:Ml,defaultnormal_vertex:yl,displacementmap_pars_vertex:Sl,displacementmap_vertex:bl,emissivemap_fragment:wl,emissivemap_pars_fragment:Tl,encodings_fragment:El,encodings_pars_fragment:Al,envmap_fragment:Cl,envmap_common_pars_fragment:Ll,envmap_pars_fragment:Dl,envmap_pars_vertex:Pl,envmap_physical_pars_fragment:Wl,envmap_vertex:Rl,fog_vertex:Il,fog_pars_vertex:Fl,fog_fragment:Nl,fog_pars_fragment:Ul,gradientmap_pars_fragment:zl,lightmap_fragment:Ol,lightmap_pars_fragment:Bl,lights_lambert_fragment:Gl,lights_lambert_pars_fragment:kl,lights_pars_begin:Vl,lights_toon_fragment:Hl,lights_toon_pars_fragment:Xl,lights_phong_fragment:ql,lights_phong_pars_fragment:Yl,lights_physical_fragment:jl,lights_physical_pars_fragment:Zl,lights_fragment_begin:$l,lights_fragment_maps:Kl,lights_fragment_end:Jl,logdepthbuf_fragment:Ql,logdepthbuf_pars_fragment:ec,logdepthbuf_pars_vertex:tc,logdepthbuf_vertex:nc,map_fragment:ic,map_pars_fragment:rc,map_particle_fragment:sc,map_particle_pars_fragment:ac,metalnessmap_fragment:oc,metalnessmap_pars_fragment:lc,morphcolor_vertex:cc,morphnormal_vertex:uc,morphtarget_pars_vertex:hc,morphtarget_vertex:dc,normal_fragment_begin:fc,normal_fragment_maps:pc,normal_pars_fragment:mc,normal_pars_vertex:gc,normal_vertex:_c,normalmap_pars_fragment:xc,clearcoat_normal_fragment_begin:vc,clearcoat_normal_fragment_maps:Mc,clearcoat_pars_fragment:yc,iridescence_pars_fragment:Sc,output_fragment:bc,packing:wc,premultiplied_alpha_fragment:Tc,project_vertex:Ec,dithering_fragment:Ac,dithering_pars_fragment:Cc,roughnessmap_fragment:Lc,roughnessmap_pars_fragment:Dc,shadowmap_pars_fragment:Pc,shadowmap_pars_vertex:Rc,shadowmap_vertex:Ic,shadowmask_pars_fragment:Fc,skinbase_vertex:Nc,skinning_pars_vertex:Uc,skinning_vertex:zc,skinnormal_vertex:Oc,specularmap_fragment:Bc,specularmap_pars_fragment:Gc,tonemapping_fragment:kc,tonemapping_pars_fragment:Vc,transmission_fragment:Wc,transmission_pars_fragment:Hc,uv_pars_fragment:Xc,uv_pars_vertex:qc,uv_vertex:Yc,uv2_pars_fragment:jc,uv2_pars_vertex:Zc,uv2_vertex:$c,worldpos_vertex:Kc,background_vert:Jc,background_frag:Qc,backgroundCube_vert:eu,backgroundCube_frag:tu,cube_vert:nu,cube_frag:iu,depth_vert:ru,depth_frag:su,distanceRGBA_vert:au,distanceRGBA_frag:ou,equirect_vert:lu,equirect_frag:cu,linedashed_vert:uu,linedashed_frag:hu,meshbasic_vert:du,meshbasic_frag:fu,meshlambert_vert:pu,meshlambert_frag:mu,meshmatcap_vert:gu,meshmatcap_frag:_u,meshnormal_vert:xu,meshnormal_frag:vu,meshphong_vert:Mu,meshphong_frag:yu,meshphysical_vert:Su,meshphysical_frag:bu,meshtoon_vert:wu,meshtoon_frag:Tu,points_vert:Eu,points_frag:Au,shadow_vert:Cu,shadow_frag:Lu,sprite_vert:Du,sprite_frag:Pu},ne={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new gt},uv2Transform:{value:new gt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new gt}}},Rt={basic:{uniforms:lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ue(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:lt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:lt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Ue(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:lt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:lt([ne.points,ne.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:lt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:lt([ne.common,ne.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:lt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:lt([ne.sprite,ne.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:lt([ne.common,ne.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:lt([ne.lights,ne.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};Rt.physical={uniforms:lt([Rt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};const Li={r:0,b:0,g:0};function Ru(r,e,t,n,i,s,l){const a=new Ue(0);let c=s===!0?0:1,u,h,m=null,d=0,g=null;function M(f,x){let T=!1,S=x.isScene===!0?x.background:null;S&&S.isTexture&&(S=(x.backgroundBlurriness>0?t:e).get(S));const E=r.xr,w=E.getSession&&E.getSession();w&&w.environmentBlendMode==="additive"&&(S=null),S===null?p(a,c):S&&S.isColor&&(p(S,1),T=!0),(r.autoClear||T)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Fi)?(h===void 0&&(h=new It(new ui(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Vn(Rt.backgroundCube.uniforms),vertexShader:Rt.backgroundCube.vertexShader,fragmentShader:Rt.backgroundCube.fragmentShader,side:_t,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,I,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=S.encoding!==Oe,(m!==S||d!==S.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,m=S,d=S.version,g=r.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new It(new hi(2,2),new _n({name:"BackgroundMaterial",uniforms:Vn(Rt.background.uniforms),vertexShader:Rt.background.vertexShader,fragmentShader:Rt.background.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=S.encoding!==Oe,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(m!==S||d!==S.version||g!==r.toneMapping)&&(u.material.needsUpdate=!0,m=S,d=S.version,g=r.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null))}function p(f,x){f.getRGB(Li,_a(r)),n.buffers.color.setClear(Li.r,Li.g,Li.b,x,l)}return{getClearColor:function(){return a},setClearColor:function(f,x=1){a.set(f),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,p(a,c)},render:M}}function Iu(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),l=n.isWebGL2||s!==null,a={},c=f(null);let u=c,h=!1;function m(F,q,$,K,X){let ee=!1;if(l){const Q=p(K,$,q);u!==Q&&(u=Q,g(u.object)),ee=x(F,K,$,X),ee&&T(F,K,$,X)}else{const Q=q.wireframe===!0;(u.geometry!==K.id||u.program!==$.id||u.wireframe!==Q)&&(u.geometry=K.id,u.program=$.id,u.wireframe=Q,ee=!0)}X!==null&&t.update(X,34963),(ee||h)&&(h=!1,v(F,q,$,K),X!==null&&r.bindBuffer(34963,t.get(X).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function g(F){return n.isWebGL2?r.bindVertexArray(F):s.bindVertexArrayOES(F)}function M(F){return n.isWebGL2?r.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function p(F,q,$){const K=$.wireframe===!0;let X=a[F.id];X===void 0&&(X={},a[F.id]=X);let ee=X[q.id];ee===void 0&&(ee={},X[q.id]=ee);let Q=ee[K];return Q===void 0&&(Q=f(d()),ee[K]=Q),Q}function f(F){const q=[],$=[],K=[];for(let X=0;X<i;X++)q[X]=0,$[X]=0,K[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:$,attributeDivisors:K,object:F,attributes:{},index:null}}function x(F,q,$,K){const X=u.attributes,ee=q.attributes;let Q=0;const ce=$.getAttributes();for(const z in ce)if(ce[z].location>=0){const ie=X[z];let re=ee[z];if(re===void 0&&(z==="instanceMatrix"&&F.instanceMatrix&&(re=F.instanceMatrix),z==="instanceColor"&&F.instanceColor&&(re=F.instanceColor)),ie===void 0||ie.attribute!==re||re&&ie.data!==re.data)return!0;Q++}return u.attributesNum!==Q||u.index!==K}function T(F,q,$,K){const X={},ee=q.attributes;let Q=0;const ce=$.getAttributes();for(const z in ce)if(ce[z].location>=0){let ie=ee[z];ie===void 0&&(z==="instanceMatrix"&&F.instanceMatrix&&(ie=F.instanceMatrix),z==="instanceColor"&&F.instanceColor&&(ie=F.instanceColor));const re={};re.attribute=ie,ie&&ie.data&&(re.data=ie.data),X[z]=re,Q++}u.attributes=X,u.attributesNum=Q,u.index=K}function S(){const F=u.newAttributes;for(let q=0,$=F.length;q<$;q++)F[q]=0}function E(F){w(F,0)}function w(F,q){const $=u.newAttributes,K=u.enabledAttributes,X=u.attributeDivisors;$[F]=1,K[F]===0&&(r.enableVertexAttribArray(F),K[F]=1),X[F]!==q&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,q),X[F]=q)}function D(){const F=u.newAttributes,q=u.enabledAttributes;for(let $=0,K=q.length;$<K;$++)q[$]!==F[$]&&(r.disableVertexAttribArray($),q[$]=0)}function I(F,q,$,K,X,ee){n.isWebGL2===!0&&($===5124||$===5125)?r.vertexAttribIPointer(F,q,$,X,ee):r.vertexAttribPointer(F,q,$,K,X,ee)}function v(F,q,$,K){if(n.isWebGL2===!1&&(F.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const X=K.attributes,ee=$.getAttributes(),Q=q.defaultAttributeValues;for(const ce in ee){const z=ee[ce];if(z.location>=0){let Y=X[ce];if(Y===void 0&&(ce==="instanceMatrix"&&F.instanceMatrix&&(Y=F.instanceMatrix),ce==="instanceColor"&&F.instanceColor&&(Y=F.instanceColor)),Y!==void 0){const ie=Y.normalized,re=Y.itemSize,O=t.get(Y);if(O===void 0)continue;const Se=O.buffer,de=O.type,fe=O.bytesPerElement;if(Y.isInterleavedBufferAttribute){const le=Y.data,ze=le.stride,be=Y.offset;if(le.isInstancedInterleavedBuffer){for(let ve=0;ve<z.locationSize;ve++)w(z.location+ve,le.meshPerAttribute);F.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ve=0;ve<z.locationSize;ve++)E(z.location+ve);r.bindBuffer(34962,Se);for(let ve=0;ve<z.locationSize;ve++)I(z.location+ve,re/z.locationSize,de,ie,ze*fe,(be+re/z.locationSize*ve)*fe)}else{if(Y.isInstancedBufferAttribute){for(let le=0;le<z.locationSize;le++)w(z.location+le,Y.meshPerAttribute);F.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let le=0;le<z.locationSize;le++)E(z.location+le);r.bindBuffer(34962,Se);for(let le=0;le<z.locationSize;le++)I(z.location+le,re/z.locationSize,de,ie,re*fe,re/z.locationSize*le*fe)}}else if(Q!==void 0){const ie=Q[ce];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(z.location,ie);break;case 3:r.vertexAttrib3fv(z.location,ie);break;case 4:r.vertexAttrib4fv(z.location,ie);break;default:r.vertexAttrib1fv(z.location,ie)}}}}D()}function A(){j();for(const F in a){const q=a[F];for(const $ in q){const K=q[$];for(const X in K)M(K[X].object),delete K[X];delete q[$]}delete a[F]}}function L(F){if(a[F.id]===void 0)return;const q=a[F.id];for(const $ in q){const K=q[$];for(const X in K)M(K[X].object),delete K[X];delete q[$]}delete a[F.id]}function V(F){for(const q in a){const $=a[q];if($[F.id]===void 0)continue;const K=$[F.id];for(const X in K)M(K[X].object),delete K[X];delete $[F.id]}}function j(){R(),h=!0,u!==c&&(u=c,g(u.object))}function R(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:m,reset:j,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:L,releaseStatesOfProgram:V,initAttributes:S,enableAttribute:E,disableUnusedAttributes:D}}function Fu(r,e,t,n){const i=n.isWebGL2;let s;function l(u){s=u}function a(u,h){r.drawArrays(s,u,h),t.update(h,s,1)}function c(u,h,m){if(m===0)return;let d,g;if(i)d=r,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,u,h,m),t.update(h,s,m)}this.setMode=l,this.render=a,this.renderInstances=c}function Nu(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(I){if(I==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const u=l||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,m=r.getParameter(34930),d=r.getParameter(35660),g=r.getParameter(3379),M=r.getParameter(34076),p=r.getParameter(34921),f=r.getParameter(36347),x=r.getParameter(36348),T=r.getParameter(36349),S=d>0,E=l||e.has("OES_texture_float"),w=S&&E,D=l?r.getParameter(36183):0;return{isWebGL2:l,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:m,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:M,maxAttributes:p,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:T,vertexTextures:S,floatFragmentTextures:E,floatVertexTextures:w,maxSamples:D}}function Uu(r){const e=this;let t=null,n=0,i=!1,s=!1;const l=new an,a=new gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,d){const g=m.length!==0||d||n!==0||i;return i=d,n=m.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,d){t=h(m,d,0)},this.setState=function(m,d,g){const M=m.clippingPlanes,p=m.clipIntersection,f=m.clipShadows,x=r.get(m);if(!i||M===null||M.length===0||s&&!f)s?h(null):u();else{const T=s?0:n,S=T*4;let E=x.clippingState||null;c.value=E,E=h(M,d,S,g);for(let w=0;w!==S;++w)E[w]=t[w];x.clippingState=E,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=T}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(m,d,g,M){const p=m!==null?m.length:0;let f=null;if(p!==0){if(f=c.value,M!==!0||f===null){const x=g+p*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(f===null||f.length<x)&&(f=new Float32Array(x));for(let S=0,E=g;S!==p;++S,E+=4)l.copy(m[S]).applyMatrix4(T,a),l.normal.toArray(f,E),f[E+3]=l.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function zu(r){let e=new WeakMap;function t(l,a){return a===br?l.mapping=Bn:a===wr&&(l.mapping=Gn),l}function n(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const a=l.mapping;if(a===br||a===wr)if(e.has(l)){const c=e.get(l).texture;return t(c,l.mapping)}else{const c=l.image;if(c&&c.height>0){const u=new $o(c.height/2);return u.fromEquirectangularTexture(r,l),e.set(l,u),l.addEventListener("dispose",i),t(u.texture,l.mapping)}else return null}}return l}function i(l){const a=l.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Nr extends xa{constructor(e=-1,t=1,n=1,i=-1,s=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,l=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,l=s+u*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,l,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fn=4,Ps=[.125,.215,.35,.446,.526,.582],ln=20,_r=new Nr,Rs=new Ue;let xr=null;const on=(1+Math.sqrt(5))/2,Rn=1/on,Is=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,on,Rn),new U(0,on,-Rn),new U(Rn,0,on),new U(-Rn,0,on),new U(on,Rn,0),new U(-on,Rn,0)];class Fs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){xr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Us(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xr),e.scissorTest=!1,Di(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bn||e.mapping===Gn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:si,format:Dt,encoding:mn,depthBuffer:!1},i=Ns(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ns(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ou(s)),this._blurMaterial=Bu(s,e,t)}return i}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,_r)}_sceneToCubeUV(e,t,n,i){const a=new Ct(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,m=h.autoClear,d=h.toneMapping;h.getClearColor(Rs),h.toneMapping=Xt,h.autoClear=!1;const g=new pa({name:"PMREM.Background",side:_t,depthWrite:!1,depthTest:!1}),M=new It(new ui,g);let p=!1;const f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,p=!0):(g.color.copy(Rs),p=!0);for(let x=0;x<6;x++){const T=x%3;T===0?(a.up.set(0,c[x],0),a.lookAt(u[x],0,0)):T===1?(a.up.set(0,0,c[x]),a.lookAt(0,u[x],0)):(a.up.set(0,c[x],0),a.lookAt(0,0,u[x]));const S=this._cubeSize;Di(i,T*S,x>2?S:0,S,S),h.setRenderTarget(i),p&&h.render(M,a),h.render(e,a)}M.geometry.dispose(),M.material.dispose(),h.toneMapping=d,h.autoClear=m,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Bn||e.mapping===Gn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Us());const s=i?this._cubemapMaterial:this._equirectMaterial,l=new It(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Di(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(l,_r)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),l=Is[(i-1)%Is.length];this._blur(e,i-1,i,s,l)}t.autoClear=n}_blur(e,t,n,i,s){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,i,"latitudinal",s),this._halfBlur(l,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,l,a){const c=this._renderer,u=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,m=new It(this._lodPlanes[i],u),d=u.uniforms,g=this._sizeLods[n]-1,M=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*ln-1),p=s/M,f=isFinite(s)?1+Math.floor(h*p):ln;f>ln&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ln}`);const x=[];let T=0;for(let I=0;I<ln;++I){const v=I/p,A=Math.exp(-v*v/2);x.push(A),I===0?T+=A:I<f&&(T+=2*A)}for(let I=0;I<x.length;I++)x[I]=x[I]/T;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=x,d.latitudinal.value=l==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=M,d.mipInt.value=S-n;const E=this._sizeLods[i],w=3*E*(i>S-Fn?i-S+Fn:0),D=4*(this._cubeSize-E);Di(t,w,D,3*E,2*E),c.setRenderTarget(t),c.render(m,_r)}}function Ou(r){const e=[],t=[],n=[];let i=r;const s=r-Fn+1+Ps.length;for(let l=0;l<s;l++){const a=Math.pow(2,i);t.push(a);let c=1/a;l>r-Fn?c=Ps[l-r+Fn-1]:l===0&&(c=0),n.push(c);const u=1/(a-2),h=-u,m=1+u,d=[h,h,m,h,m,m,h,h,m,m,h,m],g=6,M=6,p=3,f=2,x=1,T=new Float32Array(p*M*g),S=new Float32Array(f*M*g),E=new Float32Array(x*M*g);for(let D=0;D<g;D++){const I=D%3*2/3-1,v=D>2?0:-1,A=[I,v,0,I+2/3,v,0,I+2/3,v+1,0,I,v,0,I+2/3,v+1,0,I,v+1,0];T.set(A,p*M*D),S.set(d,f*M*D);const L=[D,D,D,D,D,D];E.set(L,x*M*D)}const w=new xn;w.setAttribute("position",new Ft(T,p)),w.setAttribute("uv",new Ft(S,f)),w.setAttribute("faceIndex",new Ft(E,x)),e.push(w),i>Fn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ns(r,e,t){const n=new gn(r,e,t);return n.texture.mapping=Fi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Di(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Bu(r,e,t){const n=new Float32Array(ln),i=new U(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:ln,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ur(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ht,depthTest:!1,depthWrite:!1})}function Us(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ur(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ht,depthTest:!1,depthWrite:!1})}function zs(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ur(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ht,depthTest:!1,depthWrite:!1})}function Ur(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gu(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,u=c===br||c===wr,h=c===Bn||c===Gn;if(u||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let m=e.get(a);return t===null&&(t=new Fs(r)),m=u?t.fromEquirectangular(a,m):t.fromCubemap(a,m),e.set(a,m),m.texture}else{if(e.has(a))return e.get(a).texture;{const m=a.image;if(u&&m&&m.height>0||h&&m&&i(m)){t===null&&(t=new Fs(r));const d=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let c=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&c++;return c===u}function s(a){const c=a.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function ku(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vu(r,e,t,n){const i={},s=new WeakMap;function l(m){const d=m.target;d.index!==null&&e.remove(d.index);for(const M in d.attributes)e.remove(d.attributes[M]);d.removeEventListener("dispose",l),delete i[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(m,d){return i[d.id]===!0||(d.addEventListener("dispose",l),i[d.id]=!0,t.memory.geometries++),d}function c(m){const d=m.attributes;for(const M in d)e.update(d[M],34962);const g=m.morphAttributes;for(const M in g){const p=g[M];for(let f=0,x=p.length;f<x;f++)e.update(p[f],34962)}}function u(m){const d=[],g=m.index,M=m.attributes.position;let p=0;if(g!==null){const T=g.array;p=g.version;for(let S=0,E=T.length;S<E;S+=3){const w=T[S+0],D=T[S+1],I=T[S+2];d.push(w,D,D,I,I,w)}}else{const T=M.array;p=M.version;for(let S=0,E=T.length/3-1;S<E;S+=3){const w=S+0,D=S+1,I=S+2;d.push(w,D,D,I,I,w)}}const f=new(la(d)?ga:ma)(d,1);f.version=p;const x=s.get(m);x&&e.remove(x),s.set(m,f)}function h(m){const d=s.get(m);if(d){const g=m.index;g!==null&&d.version<g.version&&u(m)}else u(m);return s.get(m)}return{get:a,update:c,getWireframeAttribute:h}}function Wu(r,e,t,n){const i=n.isWebGL2;let s;function l(d){s=d}let a,c;function u(d){a=d.type,c=d.bytesPerElement}function h(d,g){r.drawElements(s,g,a,d*c),t.update(g,s,1)}function m(d,g,M){if(M===0)return;let p,f;if(i)p=r,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,g,a,d*c,M),t.update(g,s,M)}this.setMode=l,this.setIndex=u,this.render=h,this.renderInstances=m}function Hu(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,l,a){switch(t.calls++,l){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Xu(r,e){return r[0]-e[0]}function qu(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Yu(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,l=new Qe,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function c(u,h,m,d){const g=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=p!==void 0?p.length:0;let x=s.get(h);if(x===void 0||x.count!==f){let $=function(){F.dispose(),s.delete(h),h.removeEventListener("dispose",$)};var M=$;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,D=h.morphAttributes.color!==void 0,I=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let L=0;E===!0&&(L=1),w===!0&&(L=2),D===!0&&(L=3);let V=h.attributes.position.count*L,j=1;V>e.maxTextureSize&&(j=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const R=new Float32Array(V*j*4*f),F=new da(R,V,j,f);F.type=un,F.needsUpdate=!0;const q=L*4;for(let K=0;K<f;K++){const X=I[K],ee=v[K],Q=A[K],ce=V*j*4*K;for(let z=0;z<X.count;z++){const Y=z*q;E===!0&&(l.fromBufferAttribute(X,z),R[ce+Y+0]=l.x,R[ce+Y+1]=l.y,R[ce+Y+2]=l.z,R[ce+Y+3]=0),w===!0&&(l.fromBufferAttribute(ee,z),R[ce+Y+4]=l.x,R[ce+Y+5]=l.y,R[ce+Y+6]=l.z,R[ce+Y+7]=0),D===!0&&(l.fromBufferAttribute(Q,z),R[ce+Y+8]=l.x,R[ce+Y+9]=l.y,R[ce+Y+10]=l.z,R[ce+Y+11]=Q.itemSize===4?l.w:1)}}x={count:f,texture:F,size:new Ie(V,j)},s.set(h,x),h.addEventListener("dispose",$)}let T=0;for(let E=0;E<g.length;E++)T+=g[E];const S=h.morphTargetsRelative?1:1-T;d.getUniforms().setValue(r,"morphTargetBaseInfluence",S),d.getUniforms().setValue(r,"morphTargetInfluences",g),d.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{const p=g===void 0?0:g.length;let f=n[h.id];if(f===void 0||f.length!==p){f=[];for(let w=0;w<p;w++)f[w]=[w,0];n[h.id]=f}for(let w=0;w<p;w++){const D=f[w];D[0]=w,D[1]=g[w]}f.sort(qu);for(let w=0;w<8;w++)w<p&&f[w][1]?(a[w][0]=f[w][0],a[w][1]=f[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(Xu);const x=h.morphAttributes.position,T=h.morphAttributes.normal;let S=0;for(let w=0;w<8;w++){const D=a[w],I=D[0],v=D[1];I!==Number.MAX_SAFE_INTEGER&&v?(x&&h.getAttribute("morphTarget"+w)!==x[I]&&h.setAttribute("morphTarget"+w,x[I]),T&&h.getAttribute("morphNormal"+w)!==T[I]&&h.setAttribute("morphNormal"+w,T[I]),i[w]=v,S+=v):(x&&h.hasAttribute("morphTarget"+w)===!0&&h.deleteAttribute("morphTarget"+w),T&&h.hasAttribute("morphNormal"+w)===!0&&h.deleteAttribute("morphNormal"+w),i[w]=0)}const E=h.morphTargetsRelative?1:1-S;d.getUniforms().setValue(r,"morphTargetBaseInfluence",E),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function ju(r,e,t,n){let i=new WeakMap;function s(c){const u=n.render.frame,h=c.geometry,m=e.get(c,h);return i.get(m)!==u&&(e.update(m),i.set(m,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),m}function l(){i=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:l}}const ya=new xt,Sa=new da,ba=new Io,wa=new va,Os=[],Bs=[],Gs=new Float32Array(16),ks=new Float32Array(9),Vs=new Float32Array(4);function Xn(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Os[i];if(s===void 0&&(s=new Float32Array(i),Os[i]=s),e!==0){n.toArray(s,0);for(let l=1,a=0;l!==e;++l)a+=t,r[l].toArray(s,a)}return s}function Ye(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function je(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ui(r,e){let t=Bs[e];t===void 0&&(t=new Int32Array(e),Bs[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Zu(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function $u(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ye(t,e))return;r.uniform2fv(this.addr,e),je(t,e)}}function Ku(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ye(t,e))return;r.uniform3fv(this.addr,e),je(t,e)}}function Ju(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ye(t,e))return;r.uniform4fv(this.addr,e),je(t,e)}}function Qu(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ye(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),je(t,e)}else{if(Ye(t,n))return;Vs.set(n),r.uniformMatrix2fv(this.addr,!1,Vs),je(t,n)}}function eh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ye(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),je(t,e)}else{if(Ye(t,n))return;ks.set(n),r.uniformMatrix3fv(this.addr,!1,ks),je(t,n)}}function th(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ye(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),je(t,e)}else{if(Ye(t,n))return;Gs.set(n),r.uniformMatrix4fv(this.addr,!1,Gs),je(t,n)}}function nh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ih(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ye(t,e))return;r.uniform2iv(this.addr,e),je(t,e)}}function rh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ye(t,e))return;r.uniform3iv(this.addr,e),je(t,e)}}function sh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ye(t,e))return;r.uniform4iv(this.addr,e),je(t,e)}}function ah(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function oh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ye(t,e))return;r.uniform2uiv(this.addr,e),je(t,e)}}function lh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ye(t,e))return;r.uniform3uiv(this.addr,e),je(t,e)}}function ch(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ye(t,e))return;r.uniform4uiv(this.addr,e),je(t,e)}}function uh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||ya,i)}function hh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ba,i)}function dh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||wa,i)}function fh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Sa,i)}function ph(r){switch(r){case 5126:return Zu;case 35664:return $u;case 35665:return Ku;case 35666:return Ju;case 35674:return Qu;case 35675:return eh;case 35676:return th;case 5124:case 35670:return nh;case 35667:case 35671:return ih;case 35668:case 35672:return rh;case 35669:case 35673:return sh;case 5125:return ah;case 36294:return oh;case 36295:return lh;case 36296:return ch;case 35678:case 36198:case 36298:case 36306:case 35682:return uh;case 35679:case 36299:case 36307:return hh;case 35680:case 36300:case 36308:case 36293:return dh;case 36289:case 36303:case 36311:case 36292:return fh}}function mh(r,e){r.uniform1fv(this.addr,e)}function gh(r,e){const t=Xn(e,this.size,2);r.uniform2fv(this.addr,t)}function _h(r,e){const t=Xn(e,this.size,3);r.uniform3fv(this.addr,t)}function xh(r,e){const t=Xn(e,this.size,4);r.uniform4fv(this.addr,t)}function vh(r,e){const t=Xn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Mh(r,e){const t=Xn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function yh(r,e){const t=Xn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Sh(r,e){r.uniform1iv(this.addr,e)}function bh(r,e){r.uniform2iv(this.addr,e)}function wh(r,e){r.uniform3iv(this.addr,e)}function Th(r,e){r.uniform4iv(this.addr,e)}function Eh(r,e){r.uniform1uiv(this.addr,e)}function Ah(r,e){r.uniform2uiv(this.addr,e)}function Ch(r,e){r.uniform3uiv(this.addr,e)}function Lh(r,e){r.uniform4uiv(this.addr,e)}function Dh(r,e,t){const n=this.cache,i=e.length,s=Ui(t,i);Ye(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let l=0;l!==i;++l)t.setTexture2D(e[l]||ya,s[l])}function Ph(r,e,t){const n=this.cache,i=e.length,s=Ui(t,i);Ye(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let l=0;l!==i;++l)t.setTexture3D(e[l]||ba,s[l])}function Rh(r,e,t){const n=this.cache,i=e.length,s=Ui(t,i);Ye(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let l=0;l!==i;++l)t.setTextureCube(e[l]||wa,s[l])}function Ih(r,e,t){const n=this.cache,i=e.length,s=Ui(t,i);Ye(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let l=0;l!==i;++l)t.setTexture2DArray(e[l]||Sa,s[l])}function Fh(r){switch(r){case 5126:return mh;case 35664:return gh;case 35665:return _h;case 35666:return xh;case 35674:return vh;case 35675:return Mh;case 35676:return yh;case 5124:case 35670:return Sh;case 35667:case 35671:return bh;case 35668:case 35672:return wh;case 35669:case 35673:return Th;case 5125:return Eh;case 36294:return Ah;case 36295:return Ch;case 36296:return Lh;case 35678:case 36198:case 36298:case 36306:case 35682:return Dh;case 35679:case 36299:case 36307:return Ph;case 35680:case 36300:case 36308:case 36293:return Rh;case 36289:case 36303:case 36311:case 36292:return Ih}}class Nh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=ph(t.type)}}class Uh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Fh(t.type)}}class zh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,l=i.length;s!==l;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const vr=/(\w+)(\])?(\[|\.)?/g;function Ws(r,e){r.seq.push(e),r.map[e.id]=e}function Oh(r,e,t){const n=r.name,i=n.length;for(vr.lastIndex=0;;){const s=vr.exec(n),l=vr.lastIndex;let a=s[1];const c=s[2]==="]",u=s[3];if(c&&(a=a|0),u===void 0||u==="["&&l+2===i){Ws(t,u===void 0?new Nh(a,r,e):new Uh(a,r,e));break}else{let m=t.map[a];m===void 0&&(m=new zh(a),Ws(t,m)),t=m}}}class Ri{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),l=e.getUniformLocation(t,s.name);Oh(s,l,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,l=t.length;s!==l;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const l=e[i];l.id in t&&n.push(l)}return n}}function Hs(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Bh=0;function Gh(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let l=i;l<s;l++){const a=l+1;n.push(`${a===e?">":" "} ${a}: ${t[l]}`)}return n.join(`
`)}function kh(r){switch(r){case mn:return["Linear","( value )"];case Oe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Xs(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const l=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Gh(r.getShaderSource(e),l)}else return i}function Vh(r,e){const t=kh(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Wh(r,e){let t;switch(e){case so:t="Linear";break;case ao:t="Reinhard";break;case oo:t="OptimizedCineon";break;case lo:t="ACESFilmic";break;case co:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Hh(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ni).join(`
`)}function Xh(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qh(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),l=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[l]={type:s.type,location:r.getAttribLocation(e,l),locationSize:a}}return t}function ni(r){return r!==""}function qs(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ys(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yh=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lr(r){return r.replace(Yh,jh)}function jh(r,e){const t=we[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Lr(t)}const Zh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function js(r){return r.replace(Zh,$h)}function $h(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Zs(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Kh(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ia?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===za?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function Jh(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Bn:case Gn:e="ENVMAP_TYPE_CUBE";break;case Fi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qh(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Gn:e="ENVMAP_MODE_REFRACTION";break}return e}function ed(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Pr:e="ENVMAP_BLENDING_MULTIPLY";break;case io:e="ENVMAP_BLENDING_MIX";break;case ro:e="ENVMAP_BLENDING_ADD";break}return e}function td(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function nd(r,e,t,n){const i=r.getContext(),s=t.defines;let l=t.vertexShader,a=t.fragmentShader;const c=Kh(t),u=Jh(t),h=Qh(t),m=ed(t),d=td(t),g=t.isWebGL2?"":Hh(t),M=Xh(s),p=i.createProgram();let f,x,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[M].filter(ni).join(`
`),f.length>0&&(f+=`
`),x=[g,M].filter(ni).join(`
`),x.length>0&&(x+=`
`)):(f=[Zs(t),"#define SHADER_NAME "+t.shaderName,M,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ni).join(`
`),x=[g,Zs(t),"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xt?"#define TONE_MAPPING":"",t.toneMapping!==Xt?we.tonemapping_pars_fragment:"",t.toneMapping!==Xt?Wh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",we.encodings_pars_fragment,Vh("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ni).join(`
`)),l=Lr(l),l=qs(l,t),l=Ys(l,t),a=Lr(a),a=qs(a,t),a=Ys(a,t),l=js(l),a=js(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["#define varying in",t.glslVersion===xs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const S=T+f+l,E=T+x+a,w=Hs(i,35633,S),D=Hs(i,35632,E);if(i.attachShader(p,w),i.attachShader(p,D),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const A=i.getProgramInfoLog(p).trim(),L=i.getShaderInfoLog(w).trim(),V=i.getShaderInfoLog(D).trim();let j=!0,R=!0;if(i.getProgramParameter(p,35714)===!1){j=!1;const F=Xs(i,w,"vertex"),q=Xs(i,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+F+`
`+q)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(L===""||V==="")&&(R=!1);R&&(this.diagnostics={runnable:j,programLog:A,vertexShader:{log:L,prefix:f},fragmentShader:{log:V,prefix:x}})}i.deleteShader(w),i.deleteShader(D);let I;this.getUniforms=function(){return I===void 0&&(I=new Ri(i,p)),I};let v;return this.getAttributes=function(){return v===void 0&&(v=qh(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Bh++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=D,this}let id=0;class rd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sd(e),t.set(e,n)),n}}class sd{constructor(e){this.id=id++,this.code=e,this.usedTimes=0}}function ad(r,e,t,n,i,s,l){const a=new fa,c=new rd,u=[],h=i.isWebGL2,m=i.logarithmicDepthBuffer,d=i.vertexTextures;let g=i.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,A,L,V,j){const R=V.fog,F=j.geometry,q=v.isMeshStandardMaterial?V.environment:null,$=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),K=$&&$.mapping===Fi?$.image.height:null,X=M[v.type];v.precision!==null&&(g=i.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const ee=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Q=ee!==void 0?ee.length:0;let ce=0;F.morphAttributes.position!==void 0&&(ce=1),F.morphAttributes.normal!==void 0&&(ce=2),F.morphAttributes.color!==void 0&&(ce=3);let z,Y,ie,re;if(X){const ze=Rt[X];z=ze.vertexShader,Y=ze.fragmentShader}else z=v.vertexShader,Y=v.fragmentShader,c.update(v),ie=c.getVertexShaderID(v),re=c.getFragmentShaderID(v);const O=r.getRenderTarget(),Se=v.alphaTest>0,de=v.clearcoat>0,fe=v.iridescence>0;return{isWebGL2:h,shaderID:X,shaderName:v.type,vertexShader:z,fragmentShader:Y,defines:v.defines,customVertexShaderID:ie,customFragmentShaderID:re,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:d,outputEncoding:O===null?r.outputEncoding:O.isXRRenderTarget===!0?O.texture.encoding:mn,map:!!v.map,matcap:!!v.matcap,envMap:!!$,envMapMode:$&&$.mapping,envMapCubeUVHeight:K,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Lo,tangentSpaceNormalMap:v.normalMapType===Rr,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Oe,clearcoat:de,clearcoatMap:de&&!!v.clearcoatMap,clearcoatRoughnessMap:de&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:de&&!!v.clearcoatNormalMap,iridescence:fe,iridescenceMap:fe&&!!v.iridescenceMap,iridescenceThicknessMap:fe&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Un,alphaMap:!!v.alphaMap,alphaTest:Se,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!F.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!R,useFog:v.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:m,skinning:j.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ce,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:Xt,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Kt,flipSided:v.side===_t,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)A.push(L),A.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(x(A,v),T(A,v),A.push(r.outputEncoding)),A.push(v.customProgramCacheKey),A.join()}function x(v,A){v.push(A.precision),v.push(A.outputEncoding),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.combine),v.push(A.vertexUvs),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function T(v,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),v.push(a.mask)}function S(v){const A=M[v.type];let L;if(A){const V=Rt[A];L=qo.clone(V.uniforms)}else L=v.uniforms;return L}function E(v,A){let L;for(let V=0,j=u.length;V<j;V++){const R=u[V];if(R.cacheKey===A){L=R,++L.usedTimes;break}}return L===void 0&&(L=new nd(r,A,v,s),u.push(L)),L}function w(v){if(--v.usedTimes===0){const A=u.indexOf(v);u[A]=u[u.length-1],u.pop(),v.destroy()}}function D(v){c.remove(v)}function I(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:S,acquireProgram:E,releaseProgram:w,releaseShaderCache:D,programs:u,dispose:I}}function od(){let r=new WeakMap;function e(s){let l=r.get(s);return l===void 0&&(l={},r.set(s,l)),l}function t(s){r.delete(s)}function n(s,l,a){r.get(s)[l]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function ld(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function $s(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ks(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function l(m,d,g,M,p,f){let x=r[e];return x===void 0?(x={id:m.id,object:m,geometry:d,material:g,groupOrder:M,renderOrder:m.renderOrder,z:p,group:f},r[e]=x):(x.id=m.id,x.object=m,x.geometry=d,x.material=g,x.groupOrder=M,x.renderOrder=m.renderOrder,x.z=p,x.group=f),e++,x}function a(m,d,g,M,p,f){const x=l(m,d,g,M,p,f);g.transmission>0?n.push(x):g.transparent===!0?i.push(x):t.push(x)}function c(m,d,g,M,p,f){const x=l(m,d,g,M,p,f);g.transmission>0?n.unshift(x):g.transparent===!0?i.unshift(x):t.unshift(x)}function u(m,d){t.length>1&&t.sort(m||ld),n.length>1&&n.sort(d||$s),i.length>1&&i.sort(d||$s)}function h(){for(let m=e,d=r.length;m<d;m++){const g=r[m];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:u}}function cd(){let r=new WeakMap;function e(n,i){const s=r.get(n);let l;return s===void 0?(l=new Ks,r.set(n,[l])):i>=s.length?(l=new Ks,s.push(l)):l=s[i],l}function t(){r=new WeakMap}return{get:e,dispose:t}}function ud(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ue};break;case"SpotLight":t={position:new U,direction:new U,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function hd(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let dd=0;function fd(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function pd(r,e){const t=new ud,n=hd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new U);const s=new U,l=new qe,a=new qe;function c(h,m){let d=0,g=0,M=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let p=0,f=0,x=0,T=0,S=0,E=0,w=0,D=0,I=0,v=0;h.sort(fd);const A=m!==!0?Math.PI:1;for(let V=0,j=h.length;V<j;V++){const R=h[V],F=R.color,q=R.intensity,$=R.distance,K=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=F.r*q*A,g+=F.g*q*A,M+=F.b*q*A;else if(R.isLightProbe)for(let X=0;X<9;X++)i.probe[X].addScaledVector(R.sh.coefficients[X],q);else if(R.isDirectionalLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity*A),R.castShadow){const ee=R.shadow,Q=n.get(R);Q.shadowBias=ee.bias,Q.shadowNormalBias=ee.normalBias,Q.shadowRadius=ee.radius,Q.shadowMapSize=ee.mapSize,i.directionalShadow[p]=Q,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=R.shadow.matrix,E++}i.directional[p]=X,p++}else if(R.isSpotLight){const X=t.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(F).multiplyScalar(q*A),X.distance=$,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,i.spot[x]=X;const ee=R.shadow;if(R.map&&(i.spotLightMap[I]=R.map,I++,ee.updateMatrices(R),R.castShadow&&v++),i.spotLightMatrix[x]=ee.matrix,R.castShadow){const Q=n.get(R);Q.shadowBias=ee.bias,Q.shadowNormalBias=ee.normalBias,Q.shadowRadius=ee.radius,Q.shadowMapSize=ee.mapSize,i.spotShadow[x]=Q,i.spotShadowMap[x]=K,D++}x++}else if(R.isRectAreaLight){const X=t.get(R);X.color.copy(F).multiplyScalar(q),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),i.rectArea[T]=X,T++}else if(R.isPointLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity*A),X.distance=R.distance,X.decay=R.decay,R.castShadow){const ee=R.shadow,Q=n.get(R);Q.shadowBias=ee.bias,Q.shadowNormalBias=ee.normalBias,Q.shadowRadius=ee.radius,Q.shadowMapSize=ee.mapSize,Q.shadowCameraNear=ee.camera.near,Q.shadowCameraFar=ee.camera.far,i.pointShadow[f]=Q,i.pointShadowMap[f]=K,i.pointShadowMatrix[f]=R.shadow.matrix,w++}i.point[f]=X,f++}else if(R.isHemisphereLight){const X=t.get(R);X.skyColor.copy(R.color).multiplyScalar(q*A),X.groundColor.copy(R.groundColor).multiplyScalar(q*A),i.hemi[S]=X,S++}}T>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=g,i.ambient[2]=M;const L=i.hash;(L.directionalLength!==p||L.pointLength!==f||L.spotLength!==x||L.rectAreaLength!==T||L.hemiLength!==S||L.numDirectionalShadows!==E||L.numPointShadows!==w||L.numSpotShadows!==D||L.numSpotMaps!==I)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=T,i.point.length=f,i.hemi.length=S,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=D,i.spotShadowMap.length=D,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=D+I-v,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=v,L.directionalLength=p,L.pointLength=f,L.spotLength=x,L.rectAreaLength=T,L.hemiLength=S,L.numDirectionalShadows=E,L.numPointShadows=w,L.numSpotShadows=D,L.numSpotMaps=I,i.version=dd++)}function u(h,m){let d=0,g=0,M=0,p=0,f=0;const x=m.matrixWorldInverse;for(let T=0,S=h.length;T<S;T++){const E=h[T];if(E.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),d++}else if(E.isSpotLight){const w=i.spot[M];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),M++}else if(E.isRectAreaLight){const w=i.rectArea[p];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(x),a.identity(),l.copy(E.matrixWorld),l.premultiply(x),a.extractRotation(l),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(E.isPointLight){const w=i.point[g];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(x),g++}else if(E.isHemisphereLight){const w=i.hemi[f];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(x),f++}}}return{setup:c,setupView:u,state:i}}function Js(r,e){const t=new pd(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function l(m){n.push(m)}function a(m){i.push(m)}function c(m){t.setup(n,m)}function u(m){t.setupView(n,m)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:u,pushLight:l,pushShadow:a}}function md(r,e){let t=new WeakMap;function n(s,l=0){const a=t.get(s);let c;return a===void 0?(c=new Js(r,e),t.set(s,[c])):l>=a.length?(c=new Js(r,e),a.push(c)):c=a[l],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class gd extends Hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ao,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _d extends Hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Md(r,e,t){let n=new Fr;const i=new Ie,s=new Ie,l=new Qe,a=new gd({depthPacking:Co}),c=new _d,u={},h=t.maxTextureSize,m={[qt]:_t,[_t]:qt,[Kt]:Kt},d=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:xd,fragmentShader:vd}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const M=new xn;M.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new It(M,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ia,this.render=function(E,w,D){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;const I=r.getRenderTarget(),v=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),L=r.state;L.setBlending(Ht),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let V=0,j=E.length;V<j;V++){const R=E[V],F=R.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const q=F.getFrameExtents();if(i.multiply(q),s.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/q.x),i.x=s.x*q.x,F.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/q.y),i.y=s.y*q.y,F.mapSize.y=s.y)),F.map===null){const K=this.type!==ti?{minFilter:ct,magFilter:ct}:{};F.map=new gn(i.x,i.y,K),F.map.texture.name=R.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();const $=F.getViewportCount();for(let K=0;K<$;K++){const X=F.getViewport(K);l.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),L.viewport(l),F.updateMatrices(R,K),n=F.getFrustum(),S(w,D,F.camera,R,this.type)}F.isPointLightShadow!==!0&&this.type===ti&&x(F,D),F.needsUpdate=!1}f.needsUpdate=!1,r.setRenderTarget(I,v,A)};function x(E,w){const D=e.update(p);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,g.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new gn(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(w,null,D,d,p,null),g.uniforms.shadow_pass.value=E.mapPass.texture,g.uniforms.resolution.value=E.mapSize,g.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(w,null,D,g,p,null)}function T(E,w,D,I,v,A){let L=null;const V=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(V!==void 0)L=V;else if(L=D.isPointLight===!0?c:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const j=L.uuid,R=w.uuid;let F=u[j];F===void 0&&(F={},u[j]=F);let q=F[R];q===void 0&&(q=L.clone(),F[R]=q),L=q}return L.visible=w.visible,L.wireframe=w.wireframe,A===ti?L.side=w.shadowSide!==null?w.shadowSide:w.side:L.side=w.shadowSide!==null?w.shadowSide:m[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaTest,L.map=w.map,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,D.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(D.matrixWorld),L.nearDistance=I,L.farDistance=v),L}function S(E,w,D,I,v){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===ti)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);const V=e.update(E),j=E.material;if(Array.isArray(j)){const R=V.groups;for(let F=0,q=R.length;F<q;F++){const $=R[F],K=j[$.materialIndex];if(K&&K.visible){const X=T(E,K,I,D.near,D.far,v);r.renderBufferDirect(D,null,V,X,E,$)}}}else if(j.visible){const R=T(E,j,I,D.near,D.far,v);r.renderBufferDirect(D,null,V,R,E,null)}}const L=E.children;for(let V=0,j=L.length;V<j;V++)S(L[V],w,D,I,v)}}function yd(r,e,t){const n=t.isWebGL2;function i(){let C=!1;const B=new Qe;let Z=null;const oe=new Qe(0,0,0,0);return{setMask:function(he){Z!==he&&!C&&(r.colorMask(he,he,he,he),Z=he)},setLocked:function(he){C=he},setClear:function(he,Re,$e,tt,Jt){Jt===!0&&(he*=tt,Re*=tt,$e*=tt),B.set(he,Re,$e,tt),oe.equals(B)===!1&&(r.clearColor(he,Re,$e,tt),oe.copy(B))},reset:function(){C=!1,Z=null,oe.set(-1,0,0,0)}}}function s(){let C=!1,B=null,Z=null,oe=null;return{setTest:function(he){he?Se(2929):de(2929)},setMask:function(he){B!==he&&!C&&(r.depthMask(he),B=he)},setFunc:function(he){if(Z!==he){switch(he){case $a:r.depthFunc(512);break;case Ka:r.depthFunc(519);break;case Ja:r.depthFunc(513);break;case Sr:r.depthFunc(515);break;case Qa:r.depthFunc(514);break;case eo:r.depthFunc(518);break;case to:r.depthFunc(516);break;case no:r.depthFunc(517);break;default:r.depthFunc(515)}Z=he}},setLocked:function(he){C=he},setClear:function(he){oe!==he&&(r.clearDepth(he),oe=he)},reset:function(){C=!1,B=null,Z=null,oe=null}}}function l(){let C=!1,B=null,Z=null,oe=null,he=null,Re=null,$e=null,tt=null,Jt=null;return{setTest:function(Ge){C||(Ge?Se(2960):de(2960))},setMask:function(Ge){B!==Ge&&!C&&(r.stencilMask(Ge),B=Ge)},setFunc:function(Ge,Ut,yt){(Z!==Ge||oe!==Ut||he!==yt)&&(r.stencilFunc(Ge,Ut,yt),Z=Ge,oe=Ut,he=yt)},setOp:function(Ge,Ut,yt){(Re!==Ge||$e!==Ut||tt!==yt)&&(r.stencilOp(Ge,Ut,yt),Re=Ge,$e=Ut,tt=yt)},setLocked:function(Ge){C=Ge},setClear:function(Ge){Jt!==Ge&&(r.clearStencil(Ge),Jt=Ge)},reset:function(){C=!1,B=null,Z=null,oe=null,he=null,Re=null,$e=null,tt=null,Jt=null}}}const a=new i,c=new s,u=new l,h=new WeakMap,m=new WeakMap;let d={},g={},M=new WeakMap,p=[],f=null,x=!1,T=null,S=null,E=null,w=null,D=null,I=null,v=null,A=!1,L=null,V=null,j=null,R=null,F=null;const q=r.getParameter(35661);let $=!1,K=0;const X=r.getParameter(7938);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=K>=2);let ee=null,Q={};const ce=r.getParameter(3088),z=r.getParameter(2978),Y=new Qe().fromArray(ce),ie=new Qe().fromArray(z);function re(C,B,Z){const oe=new Uint8Array(4),he=r.createTexture();r.bindTexture(C,he),r.texParameteri(C,10241,9728),r.texParameteri(C,10240,9728);for(let Re=0;Re<Z;Re++)r.texImage2D(B+Re,0,6408,1,1,0,6408,5121,oe);return he}const O={};O[3553]=re(3553,3553,1),O[34067]=re(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Se(2929),c.setFunc(Sr),et(!1),Mt(kr),Se(2884),rt(Ht);function Se(C){d[C]!==!0&&(r.enable(C),d[C]=!0)}function de(C){d[C]!==!1&&(r.disable(C),d[C]=!1)}function fe(C,B){return g[C]!==B?(r.bindFramebuffer(C,B),g[C]=B,n&&(C===36009&&(g[36160]=B),C===36160&&(g[36009]=B)),!0):!1}function le(C,B){let Z=p,oe=!1;if(C)if(Z=M.get(B),Z===void 0&&(Z=[],M.set(B,Z)),C.isWebGLMultipleRenderTargets){const he=C.texture;if(Z.length!==he.length||Z[0]!==36064){for(let Re=0,$e=he.length;Re<$e;Re++)Z[Re]=36064+Re;Z.length=he.length,oe=!0}}else Z[0]!==36064&&(Z[0]=36064,oe=!0);else Z[0]!==1029&&(Z[0]=1029,oe=!0);oe&&(t.isWebGL2?r.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function ze(C){return f!==C?(r.useProgram(C),f=C,!0):!1}const be={[In]:32774,[Ba]:32778,[Ga]:32779};if(n)be[Xr]=32775,be[qr]=32776;else{const C=e.get("EXT_blend_minmax");C!==null&&(be[Xr]=C.MIN_EXT,be[qr]=C.MAX_EXT)}const ve={[ka]:0,[Va]:1,[Wa]:768,[ra]:770,[Za]:776,[Ya]:774,[Xa]:772,[Ha]:769,[sa]:771,[ja]:775,[qa]:773};function rt(C,B,Z,oe,he,Re,$e,tt){if(C===Ht){x===!0&&(de(3042),x=!1);return}if(x===!1&&(Se(3042),x=!0),C!==Oa){if(C!==T||tt!==A){if((S!==In||D!==In)&&(r.blendEquation(32774),S=In,D=In),tt)switch(C){case Un:r.blendFuncSeparate(1,771,1,771);break;case Vr:r.blendFunc(1,1);break;case Wr:r.blendFuncSeparate(0,769,0,1);break;case Hr:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Un:r.blendFuncSeparate(770,771,1,771);break;case Vr:r.blendFunc(770,1);break;case Wr:r.blendFuncSeparate(0,769,0,1);break;case Hr:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}E=null,w=null,I=null,v=null,T=C,A=tt}return}he=he||B,Re=Re||Z,$e=$e||oe,(B!==S||he!==D)&&(r.blendEquationSeparate(be[B],be[he]),S=B,D=he),(Z!==E||oe!==w||Re!==I||$e!==v)&&(r.blendFuncSeparate(ve[Z],ve[oe],ve[Re],ve[$e]),E=Z,w=oe,I=Re,v=$e),T=C,A=!1}function vt(C,B){C.side===Kt?de(2884):Se(2884);let Z=C.side===_t;B&&(Z=!Z),et(Z),C.blending===Un&&C.transparent===!1?rt(Ht):rt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);const oe=C.stencilWrite;u.setTest(oe),oe&&(u.setMask(C.stencilWriteMask),u.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),u.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Fe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Se(32926):de(32926)}function et(C){L!==C&&(C?r.frontFace(2304):r.frontFace(2305),L=C)}function Mt(C){C!==Na?(Se(2884),C!==V&&(C===kr?r.cullFace(1029):C===Ua?r.cullFace(1028):r.cullFace(1032))):de(2884),V=C}function He(C){C!==j&&($&&r.lineWidth(C),j=C)}function Fe(C,B,Z){C?(Se(32823),(R!==B||F!==Z)&&(r.polygonOffset(B,Z),R=B,F=Z)):de(32823)}function Nt(C){C?Se(3089):de(3089)}function wt(C){C===void 0&&(C=33984+q-1),ee!==C&&(r.activeTexture(C),ee=C)}function b(C,B,Z){Z===void 0&&(ee===null?Z=33984+q-1:Z=ee);let oe=Q[Z];oe===void 0&&(oe={type:void 0,texture:void 0},Q[Z]=oe),(oe.type!==C||oe.texture!==B)&&(ee!==Z&&(r.activeTexture(Z),ee=Z),r.bindTexture(C,B||O[C]),oe.type=C,oe.texture=B)}function _(){const C=Q[ee];C!==void 0&&C.type!==void 0&&(r.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function k(){try{r.compressedTexImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{r.texSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function se(){try{r.texSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Me(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ae(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function H(){try{r.texStorage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ge(){try{r.texStorage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xe(){try{r.texImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{r.texImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(C){Y.equals(C)===!1&&(r.scissor(C.x,C.y,C.z,C.w),Y.copy(C))}function pe(C){ie.equals(C)===!1&&(r.viewport(C.x,C.y,C.z,C.w),ie.copy(C))}function De(C,B){let Z=m.get(B);Z===void 0&&(Z=new WeakMap,m.set(B,Z));let oe=Z.get(C);oe===void 0&&(oe=r.getUniformBlockIndex(B,C.name),Z.set(C,oe))}function Be(C,B){const oe=m.get(B).get(C);h.get(B)!==oe&&(r.uniformBlockBinding(B,oe,C.__bindingPointIndex),h.set(B,oe))}function Ze(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},ee=null,Q={},g={},M=new WeakMap,p=[],f=null,x=!1,T=null,S=null,E=null,w=null,D=null,I=null,v=null,A=!1,L=null,V=null,j=null,R=null,F=null,Y.set(0,0,r.canvas.width,r.canvas.height),ie.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:Se,disable:de,bindFramebuffer:fe,drawBuffers:le,useProgram:ze,setBlending:rt,setMaterial:vt,setFlipSided:et,setCullFace:Mt,setLineWidth:He,setPolygonOffset:Fe,setScissorTest:Nt,activeTexture:wt,bindTexture:b,unbindTexture:_,compressedTexImage2D:k,compressedTexImage3D:J,texImage2D:xe,texImage3D:ue,updateUBOMapping:De,uniformBlockBinding:Be,texStorage2D:H,texStorage3D:ge,texSubImage2D:te,texSubImage3D:se,compressedTexSubImage2D:Me,compressedTexSubImage3D:ae,scissor:_e,viewport:pe,reset:Ze}}function Sd(r,e,t,n,i,s,l){const a=i.isWebGL2,c=i.maxTextures,u=i.maxCubemapSize,h=i.maxTextureSize,m=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),M=new WeakMap;let p;const f=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(b,_){return x?new OffscreenCanvas(b,_):Ii("canvas")}function S(b,_,k,J){let te=1;if((b.width>J||b.height>J)&&(te=J/Math.max(b.width,b.height)),te<1||_===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const se=_?Cr:Math.floor,Me=se(te*b.width),ae=se(te*b.height);p===void 0&&(p=T(Me,ae));const H=k?T(Me,ae):p;return H.width=Me,H.height=ae,H.getContext("2d").drawImage(b,0,0,Me,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Me+"x"+ae+")."),H}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function E(b){return Ms(b.width)&&Ms(b.height)}function w(b){return a?!1:b.wrapS!==Lt||b.wrapT!==Lt||b.minFilter!==ct&&b.minFilter!==bt}function D(b,_){return b.generateMipmaps&&_&&b.minFilter!==ct&&b.minFilter!==bt}function I(b){r.generateMipmap(b)}function v(b,_,k,J,te=!1){if(a===!1)return _;if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let se=_;return _===6403&&(k===5126&&(se=33326),k===5131&&(se=33325),k===5121&&(se=33321)),_===33319&&(k===5126&&(se=33328),k===5131&&(se=33327),k===5121&&(se=33323)),_===6408&&(k===5126&&(se=34836),k===5131&&(se=34842),k===5121&&(se=J===Oe&&te===!1?35907:32856),k===32819&&(se=32854),k===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function A(b,_,k){return D(b,k)===!0||b.isFramebufferTexture&&b.minFilter!==ct&&b.minFilter!==bt?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function L(b){return b===ct||b===Yr||b===Vi?9728:9729}function V(b){const _=b.target;_.removeEventListener("dispose",V),R(_),_.isVideoTexture&&M.delete(_)}function j(b){const _=b.target;_.removeEventListener("dispose",j),q(_)}function R(b){const _=n.get(b);if(_.__webglInit===void 0)return;const k=b.source,J=f.get(k);if(J){const te=J[_.__cacheKey];te.usedTimes--,te.usedTimes===0&&F(b),Object.keys(J).length===0&&f.delete(k)}n.remove(b)}function F(b){const _=n.get(b);r.deleteTexture(_.__webglTexture);const k=b.source,J=f.get(k);delete J[_.__cacheKey],l.memory.textures--}function q(b){const _=b.texture,k=n.get(b),J=n.get(_);if(J.__webglTexture!==void 0&&(r.deleteTexture(J.__webglTexture),l.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)r.deleteFramebuffer(k.__webglFramebuffer[te]),k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer[te]);else{if(r.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&r.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let te=0;te<k.__webglColorRenderbuffer.length;te++)k.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(k.__webglColorRenderbuffer[te]);k.__webglDepthRenderbuffer&&r.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let te=0,se=_.length;te<se;te++){const Me=n.get(_[te]);Me.__webglTexture&&(r.deleteTexture(Me.__webglTexture),l.memory.textures--),n.remove(_[te])}n.remove(_),n.remove(b)}let $=0;function K(){$=0}function X(){const b=$;return b>=c&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+c),$+=1,b}function ee(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.encoding),_.join()}function Q(b,_){const k=n.get(b);if(b.isVideoTexture&&Nt(b),b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){const J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(k,b,_);return}}t.bindTexture(3553,k.__webglTexture,33984+_)}function ce(b,_){const k=n.get(b);if(b.version>0&&k.__version!==b.version){de(k,b,_);return}t.bindTexture(35866,k.__webglTexture,33984+_)}function z(b,_){const k=n.get(b);if(b.version>0&&k.__version!==b.version){de(k,b,_);return}t.bindTexture(32879,k.__webglTexture,33984+_)}function Y(b,_){const k=n.get(b);if(b.version>0&&k.__version!==b.version){fe(k,b,_);return}t.bindTexture(34067,k.__webglTexture,33984+_)}const ie={[Tr]:10497,[Lt]:33071,[Er]:33648},re={[ct]:9728,[Yr]:9984,[Vi]:9986,[bt]:9729,[uo]:9985,[ri]:9987};function O(b,_,k){if(k?(r.texParameteri(b,10242,ie[_.wrapS]),r.texParameteri(b,10243,ie[_.wrapT]),(b===32879||b===35866)&&r.texParameteri(b,32882,ie[_.wrapR]),r.texParameteri(b,10240,re[_.magFilter]),r.texParameteri(b,10241,re[_.minFilter])):(r.texParameteri(b,10242,33071),r.texParameteri(b,10243,33071),(b===32879||b===35866)&&r.texParameteri(b,32882,33071),(_.wrapS!==Lt||_.wrapT!==Lt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(b,10240,L(_.magFilter)),r.texParameteri(b,10241,L(_.minFilter)),_.minFilter!==ct&&_.minFilter!==bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===ct||_.minFilter!==Vi&&_.minFilter!==ri||_.type===un&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===si&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(r.texParameterf(b,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function Se(b,_){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",V));const J=_.source;let te=f.get(J);te===void 0&&(te={},f.set(J,te));const se=ee(_);if(se!==b.__cacheKey){te[se]===void 0&&(te[se]={texture:r.createTexture(),usedTimes:0},l.memory.textures++,k=!0),te[se].usedTimes++;const Me=te[b.__cacheKey];Me!==void 0&&(te[b.__cacheKey].usedTimes--,Me.usedTimes===0&&F(_)),b.__cacheKey=se,b.__webglTexture=te[se].texture}return k}function de(b,_,k){let J=3553;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(J=35866),_.isData3DTexture&&(J=32879);const te=Se(b,_),se=_.source;t.bindTexture(J,b.__webglTexture,33984+k);const Me=n.get(se);if(se.version!==Me.__version||te===!0){t.activeTexture(33984+k),r.pixelStorei(37440,_.flipY),r.pixelStorei(37441,_.premultiplyAlpha),r.pixelStorei(3317,_.unpackAlignment),r.pixelStorei(37443,0);const ae=w(_)&&E(_.image)===!1;let H=S(_.image,ae,!1,h);H=wt(_,H);const ge=E(H)||a,xe=s.convert(_.format,_.encoding);let ue=s.convert(_.type),_e=v(_.internalFormat,xe,ue,_.encoding,_.isVideoTexture);O(J,_,ge);let pe;const De=_.mipmaps,Be=a&&_.isVideoTexture!==!0,Ze=Me.__version===void 0||te===!0,C=A(_,H,ge);if(_.isDepthTexture)_e=6402,a?_.type===un?_e=36012:_.type===cn?_e=33190:_.type===zn?_e=35056:_e=33189:_.type===un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===hn&&_e===6402&&_.type!==oa&&_.type!==cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=cn,ue=s.convert(_.type)),_.format===kn&&_e===6402&&(_e=34041,_.type!==zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=zn,ue=s.convert(_.type))),Ze&&(Be?t.texStorage2D(3553,1,_e,H.width,H.height):t.texImage2D(3553,0,_e,H.width,H.height,0,xe,ue,null));else if(_.isDataTexture)if(De.length>0&&ge){Be&&Ze&&t.texStorage2D(3553,C,_e,De[0].width,De[0].height);for(let B=0,Z=De.length;B<Z;B++)pe=De[B],Be?t.texSubImage2D(3553,B,0,0,pe.width,pe.height,xe,ue,pe.data):t.texImage2D(3553,B,_e,pe.width,pe.height,0,xe,ue,pe.data);_.generateMipmaps=!1}else Be?(Ze&&t.texStorage2D(3553,C,_e,H.width,H.height),t.texSubImage2D(3553,0,0,0,H.width,H.height,xe,ue,H.data)):t.texImage2D(3553,0,_e,H.width,H.height,0,xe,ue,H.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Be&&Ze&&t.texStorage3D(35866,C,_e,De[0].width,De[0].height,H.depth);for(let B=0,Z=De.length;B<Z;B++)pe=De[B],_.format!==Dt?xe!==null?Be?t.compressedTexSubImage3D(35866,B,0,0,0,pe.width,pe.height,H.depth,xe,pe.data,0,0):t.compressedTexImage3D(35866,B,_e,pe.width,pe.height,H.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage3D(35866,B,0,0,0,pe.width,pe.height,H.depth,xe,ue,pe.data):t.texImage3D(35866,B,_e,pe.width,pe.height,H.depth,0,xe,ue,pe.data)}else{Be&&Ze&&t.texStorage2D(3553,C,_e,De[0].width,De[0].height);for(let B=0,Z=De.length;B<Z;B++)pe=De[B],_.format!==Dt?xe!==null?Be?t.compressedTexSubImage2D(3553,B,0,0,pe.width,pe.height,xe,pe.data):t.compressedTexImage2D(3553,B,_e,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage2D(3553,B,0,0,pe.width,pe.height,xe,ue,pe.data):t.texImage2D(3553,B,_e,pe.width,pe.height,0,xe,ue,pe.data)}else if(_.isDataArrayTexture)Be?(Ze&&t.texStorage3D(35866,C,_e,H.width,H.height,H.depth),t.texSubImage3D(35866,0,0,0,0,H.width,H.height,H.depth,xe,ue,H.data)):t.texImage3D(35866,0,_e,H.width,H.height,H.depth,0,xe,ue,H.data);else if(_.isData3DTexture)Be?(Ze&&t.texStorage3D(32879,C,_e,H.width,H.height,H.depth),t.texSubImage3D(32879,0,0,0,0,H.width,H.height,H.depth,xe,ue,H.data)):t.texImage3D(32879,0,_e,H.width,H.height,H.depth,0,xe,ue,H.data);else if(_.isFramebufferTexture){if(Ze)if(Be)t.texStorage2D(3553,C,_e,H.width,H.height);else{let B=H.width,Z=H.height;for(let oe=0;oe<C;oe++)t.texImage2D(3553,oe,_e,B,Z,0,xe,ue,null),B>>=1,Z>>=1}}else if(De.length>0&&ge){Be&&Ze&&t.texStorage2D(3553,C,_e,De[0].width,De[0].height);for(let B=0,Z=De.length;B<Z;B++)pe=De[B],Be?t.texSubImage2D(3553,B,0,0,xe,ue,pe):t.texImage2D(3553,B,_e,xe,ue,pe);_.generateMipmaps=!1}else Be?(Ze&&t.texStorage2D(3553,C,_e,H.width,H.height),t.texSubImage2D(3553,0,0,0,xe,ue,H)):t.texImage2D(3553,0,_e,xe,ue,H);D(_,ge)&&I(J),Me.__version=se.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function fe(b,_,k){if(_.image.length!==6)return;const J=Se(b,_),te=_.source;t.bindTexture(34067,b.__webglTexture,33984+k);const se=n.get(te);if(te.version!==se.__version||J===!0){t.activeTexture(33984+k),r.pixelStorei(37440,_.flipY),r.pixelStorei(37441,_.premultiplyAlpha),r.pixelStorei(3317,_.unpackAlignment),r.pixelStorei(37443,0);const Me=_.isCompressedTexture||_.image[0].isCompressedTexture,ae=_.image[0]&&_.image[0].isDataTexture,H=[];for(let B=0;B<6;B++)!Me&&!ae?H[B]=S(_.image[B],!1,!0,u):H[B]=ae?_.image[B].image:_.image[B],H[B]=wt(_,H[B]);const ge=H[0],xe=E(ge)||a,ue=s.convert(_.format,_.encoding),_e=s.convert(_.type),pe=v(_.internalFormat,ue,_e,_.encoding),De=a&&_.isVideoTexture!==!0,Be=se.__version===void 0||J===!0;let Ze=A(_,ge,xe);O(34067,_,xe);let C;if(Me){De&&Be&&t.texStorage2D(34067,Ze,pe,ge.width,ge.height);for(let B=0;B<6;B++){C=H[B].mipmaps;for(let Z=0;Z<C.length;Z++){const oe=C[Z];_.format!==Dt?ue!==null?De?t.compressedTexSubImage2D(34069+B,Z,0,0,oe.width,oe.height,ue,oe.data):t.compressedTexImage2D(34069+B,Z,pe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+B,Z,0,0,oe.width,oe.height,ue,_e,oe.data):t.texImage2D(34069+B,Z,pe,oe.width,oe.height,0,ue,_e,oe.data)}}}else{C=_.mipmaps,De&&Be&&(C.length>0&&Ze++,t.texStorage2D(34067,Ze,pe,H[0].width,H[0].height));for(let B=0;B<6;B++)if(ae){De?t.texSubImage2D(34069+B,0,0,0,H[B].width,H[B].height,ue,_e,H[B].data):t.texImage2D(34069+B,0,pe,H[B].width,H[B].height,0,ue,_e,H[B].data);for(let Z=0;Z<C.length;Z++){const he=C[Z].image[B].image;De?t.texSubImage2D(34069+B,Z+1,0,0,he.width,he.height,ue,_e,he.data):t.texImage2D(34069+B,Z+1,pe,he.width,he.height,0,ue,_e,he.data)}}else{De?t.texSubImage2D(34069+B,0,0,0,ue,_e,H[B]):t.texImage2D(34069+B,0,pe,ue,_e,H[B]);for(let Z=0;Z<C.length;Z++){const oe=C[Z];De?t.texSubImage2D(34069+B,Z+1,0,0,ue,_e,oe.image[B]):t.texImage2D(34069+B,Z+1,pe,ue,_e,oe.image[B])}}}D(_,xe)&&I(34067),se.__version=te.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function le(b,_,k,J,te){const se=s.convert(k.format,k.encoding),Me=s.convert(k.type),ae=v(k.internalFormat,se,Me,k.encoding);n.get(_).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,ae,_.width,_.height,_.depth,0,se,Me,null):t.texImage2D(te,0,ae,_.width,_.height,0,se,Me,null)),t.bindFramebuffer(36160,b),Fe(_)?d.framebufferTexture2DMultisampleEXT(36160,J,te,n.get(k).__webglTexture,0,He(_)):(te===3553||te>=34069&&te<=34074)&&r.framebufferTexture2D(36160,J,te,n.get(k).__webglTexture,0),t.bindFramebuffer(36160,null)}function ze(b,_,k){if(r.bindRenderbuffer(36161,b),_.depthBuffer&&!_.stencilBuffer){let J=33189;if(k||Fe(_)){const te=_.depthTexture;te&&te.isDepthTexture&&(te.type===un?J=36012:te.type===cn&&(J=33190));const se=He(_);Fe(_)?d.renderbufferStorageMultisampleEXT(36161,se,J,_.width,_.height):r.renderbufferStorageMultisample(36161,se,J,_.width,_.height)}else r.renderbufferStorage(36161,J,_.width,_.height);r.framebufferRenderbuffer(36160,36096,36161,b)}else if(_.depthBuffer&&_.stencilBuffer){const J=He(_);k&&Fe(_)===!1?r.renderbufferStorageMultisample(36161,J,35056,_.width,_.height):Fe(_)?d.renderbufferStorageMultisampleEXT(36161,J,35056,_.width,_.height):r.renderbufferStorage(36161,34041,_.width,_.height),r.framebufferRenderbuffer(36160,33306,36161,b)}else{const J=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let te=0;te<J.length;te++){const se=J[te],Me=s.convert(se.format,se.encoding),ae=s.convert(se.type),H=v(se.internalFormat,Me,ae,se.encoding),ge=He(_);k&&Fe(_)===!1?r.renderbufferStorageMultisample(36161,ge,H,_.width,_.height):Fe(_)?d.renderbufferStorageMultisampleEXT(36161,ge,H,_.width,_.height):r.renderbufferStorage(36161,H,_.width,_.height)}}r.bindRenderbuffer(36161,null)}function be(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Q(_.depthTexture,0);const J=n.get(_.depthTexture).__webglTexture,te=He(_);if(_.depthTexture.format===hn)Fe(_)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,te):r.framebufferTexture2D(36160,36096,3553,J,0);else if(_.depthTexture.format===kn)Fe(_)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,te):r.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function ve(b){const _=n.get(b),k=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");be(_.__webglFramebuffer,b)}else if(k){_.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(36160,_.__webglFramebuffer[J]),_.__webglDepthbuffer[J]=r.createRenderbuffer(),ze(_.__webglDepthbuffer[J],b,!1)}else t.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=r.createRenderbuffer(),ze(_.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function rt(b,_,k){const J=n.get(b);_!==void 0&&le(J.__webglFramebuffer,b,b.texture,36064,3553),k!==void 0&&ve(b)}function vt(b){const _=b.texture,k=n.get(b),J=n.get(_);b.addEventListener("dispose",j),b.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=_.version,l.memory.textures++);const te=b.isWebGLCubeRenderTarget===!0,se=b.isWebGLMultipleRenderTargets===!0,Me=E(b)||a;if(te){k.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)k.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(k.__webglFramebuffer=r.createFramebuffer(),se)if(i.drawBuffers){const ae=b.texture;for(let H=0,ge=ae.length;H<ge;H++){const xe=n.get(ae[H]);xe.__webglTexture===void 0&&(xe.__webglTexture=r.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Fe(b)===!1){const ae=se?_:[_];k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);for(let H=0;H<ae.length;H++){const ge=ae[H];k.__webglColorRenderbuffer[H]=r.createRenderbuffer(),r.bindRenderbuffer(36161,k.__webglColorRenderbuffer[H]);const xe=s.convert(ge.format,ge.encoding),ue=s.convert(ge.type),_e=v(ge.internalFormat,xe,ue,ge.encoding,b.isXRRenderTarget===!0),pe=He(b);r.renderbufferStorageMultisample(36161,pe,_e,b.width,b.height),r.framebufferRenderbuffer(36160,36064+H,36161,k.__webglColorRenderbuffer[H])}r.bindRenderbuffer(36161,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),ze(k.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,J.__webglTexture),O(34067,_,Me);for(let ae=0;ae<6;ae++)le(k.__webglFramebuffer[ae],b,_,36064,34069+ae);D(_,Me)&&I(34067),t.unbindTexture()}else if(se){const ae=b.texture;for(let H=0,ge=ae.length;H<ge;H++){const xe=ae[H],ue=n.get(xe);t.bindTexture(3553,ue.__webglTexture),O(3553,xe,Me),le(k.__webglFramebuffer,b,xe,36064+H,3553),D(xe,Me)&&I(3553)}t.unbindTexture()}else{let ae=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?ae=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,J.__webglTexture),O(ae,_,Me),le(k.__webglFramebuffer,b,_,36064,ae),D(_,Me)&&I(ae),t.unbindTexture()}b.depthBuffer&&ve(b)}function et(b){const _=E(b)||a,k=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let J=0,te=k.length;J<te;J++){const se=k[J];if(D(se,_)){const Me=b.isWebGLCubeRenderTarget?34067:3553,ae=n.get(se).__webglTexture;t.bindTexture(Me,ae),I(Me),t.unbindTexture()}}}function Mt(b){if(a&&b.samples>0&&Fe(b)===!1){const _=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],k=b.width,J=b.height;let te=16384;const se=[],Me=b.stencilBuffer?33306:36096,ae=n.get(b),H=b.isWebGLMultipleRenderTargets===!0;if(H)for(let ge=0;ge<_.length;ge++)t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ge,36161,null),t.bindFramebuffer(36160,ae.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ge,3553,null,0);t.bindFramebuffer(36008,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ae.__webglFramebuffer);for(let ge=0;ge<_.length;ge++){se.push(36064+ge),b.depthBuffer&&se.push(Me);const xe=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(xe===!1&&(b.depthBuffer&&(te|=256),b.stencilBuffer&&(te|=1024)),H&&r.framebufferRenderbuffer(36008,36064,36161,ae.__webglColorRenderbuffer[ge]),xe===!0&&(r.invalidateFramebuffer(36008,[Me]),r.invalidateFramebuffer(36009,[Me])),H){const ue=n.get(_[ge]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ue,0)}r.blitFramebuffer(0,0,k,J,0,0,k,J,te,9728),g&&r.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),H)for(let ge=0;ge<_.length;ge++){t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ge,36161,ae.__webglColorRenderbuffer[ge]);const xe=n.get(_[ge]).__webglTexture;t.bindFramebuffer(36160,ae.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ge,3553,xe,0)}t.bindFramebuffer(36009,ae.__webglMultisampledFramebuffer)}}function He(b){return Math.min(m,b.samples)}function Fe(b){const _=n.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Nt(b){const _=l.render.frame;M.get(b)!==_&&(M.set(b,_),b.update())}function wt(b,_){const k=b.encoding,J=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Ar||k!==mn&&(k===Oe?a===!1?e.has("EXT_sRGB")===!0&&J===Dt?(b.format=Ar,b.minFilter=bt,b.generateMipmaps=!1):_=ua.sRGBToLinear(_):(J!==Dt||te!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",k)),_}this.allocateTextureUnit=X,this.resetTextureUnits=K,this.setTexture2D=Q,this.setTexture2DArray=ce,this.setTexture3D=z,this.setTextureCube=Y,this.rebindTextures=rt,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Fe}function bd(r,e,t){const n=t.isWebGL2;function i(s,l=null){let a;if(s===pn)return 5121;if(s===mo)return 32819;if(s===go)return 32820;if(s===ho)return 5120;if(s===fo)return 5122;if(s===oa)return 5123;if(s===po)return 5124;if(s===cn)return 5125;if(s===un)return 5126;if(s===si)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===_o)return 6406;if(s===Dt)return 6408;if(s===xo)return 6409;if(s===vo)return 6410;if(s===hn)return 6402;if(s===kn)return 34041;if(s===Ar)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Mo)return 6403;if(s===yo)return 36244;if(s===So)return 33319;if(s===bo)return 33320;if(s===wo)return 36249;if(s===Wi||s===Hi||s===Xi||s===qi)if(l===Oe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Wi)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Wi)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hi)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xi)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qi)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jr||s===Zr||s===$r||s===Kr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===jr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===$r)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===To)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Jr||s===Qr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Jr)return l===Oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Qr)return l===Oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===es||s===ts||s===ns||s===is||s===rs||s===ss||s===as||s===os||s===ls||s===cs||s===us||s===hs||s===ds||s===fs)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===es)return l===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ts)return l===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ns)return l===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===is)return l===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rs)return l===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ss)return l===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===as)return l===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===os)return l===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ls)return l===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cs)return l===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===us)return l===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===hs)return l===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ds)return l===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fs)return l===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Yi)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Yi)return l===Oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Eo||s===ps||s===ms||s===gs)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Yi)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ps)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ms)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===gs)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===zn?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class wd extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ii extends it{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Td={type:"move"};class Mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,l=null;const a=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){l=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,n),x=this._getHandJoint(u,p);f!==null&&(x.matrix.fromArray(f.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=f.radius),x.visible=f!==null}const h=u.joints["index-finger-tip"],m=u.joints["thumb-tip"],d=h.position.distanceTo(m.position),g=.02,M=.005;u.inputState.pinching&&d>g+M?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=g-M&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Td)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ii;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ed extends xt{constructor(e,t,n,i,s,l,a,c,u,h){if(h=h!==void 0?h:hn,h!==hn&&h!==kn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hn&&(n=cn),n===void 0&&h===kn&&(n=zn),super(null,i,s,l,a,c,h,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ct,this.minFilter=c!==void 0?c:ct,this.flipY=!1,this.generateMipmaps=!1}}class Ad extends Wn{constructor(e,t){super();const n=this;let i=null,s=1,l=null,a="local-floor",c=1,u=null,h=null,m=null,d=null,g=null,M=null;const p=t.getContextAttributes();let f=null,x=null;const T=[],S=[],E=new Set,w=new Map,D=new Ct;D.layers.enable(1),D.viewport=new Qe;const I=new Ct;I.layers.enable(2),I.viewport=new Qe;const v=[D,I],A=new wd;A.layers.enable(1),A.layers.enable(2);let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Y=T[z];return Y===void 0&&(Y=new Mr,T[z]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(z){let Y=T[z];return Y===void 0&&(Y=new Mr,T[z]=Y),Y.getGripSpace()},this.getHand=function(z){let Y=T[z];return Y===void 0&&(Y=new Mr,T[z]=Y),Y.getHandSpace()};function j(z){const Y=S.indexOf(z.inputSource);if(Y===-1)return;const ie=T[Y];ie!==void 0&&ie.dispatchEvent({type:z.type,data:z.inputSource})}function R(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",F);for(let z=0;z<T.length;z++){const Y=S[z];Y!==null&&(S[z]=null,T[z].disconnect(Y))}L=null,V=null,e.setRenderTarget(f),g=null,d=null,m=null,i=null,x=null,ce.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||l},this.setReferenceSpace=function(z){u=z},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return m},this.getFrame=function(){return M},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",R),i.addEventListener("inputsourceschange",F),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:g}),x=new gn(g.framebufferWidth,g.framebufferHeight,{format:Dt,type:pn,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let Y=null,ie=null,re=null;p.depth&&(re=p.stencil?35056:33190,Y=p.stencil?kn:hn,ie=p.stencil?zn:cn);const O={colorFormat:32856,depthFormat:re,scaleFactor:s};m=new XRWebGLBinding(i,t),d=m.createProjectionLayer(O),i.updateRenderState({layers:[d]}),x=new gn(d.textureWidth,d.textureHeight,{format:Dt,type:pn,depthTexture:new Ed(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const Se=e.properties.get(x);Se.__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(c),u=null,l=await i.requestReferenceSpace(a),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function F(z){for(let Y=0;Y<z.removed.length;Y++){const ie=z.removed[Y],re=S.indexOf(ie);re>=0&&(S[re]=null,T[re].disconnect(ie))}for(let Y=0;Y<z.added.length;Y++){const ie=z.added[Y];let re=S.indexOf(ie);if(re===-1){for(let Se=0;Se<T.length;Se++)if(Se>=S.length){S.push(ie),re=Se;break}else if(S[Se]===null){S[Se]=ie,re=Se;break}if(re===-1)break}const O=T[re];O&&O.connect(ie)}}const q=new U,$=new U;function K(z,Y,ie){q.setFromMatrixPosition(Y.matrixWorld),$.setFromMatrixPosition(ie.matrixWorld);const re=q.distanceTo($),O=Y.projectionMatrix.elements,Se=ie.projectionMatrix.elements,de=O[14]/(O[10]-1),fe=O[14]/(O[10]+1),le=(O[9]+1)/O[5],ze=(O[9]-1)/O[5],be=(O[8]-1)/O[0],ve=(Se[8]+1)/Se[0],rt=de*be,vt=de*ve,et=re/(-be+ve),Mt=et*-be;Y.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Mt),z.translateZ(et),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const He=de+et,Fe=fe+et,Nt=rt-Mt,wt=vt+(re-Mt),b=le*fe/Fe*He,_=ze*fe/Fe*He;z.projectionMatrix.makePerspective(Nt,wt,b,_,He,Fe)}function X(z,Y){Y===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Y.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;A.near=I.near=D.near=z.near,A.far=I.far=D.far=z.far,(L!==A.near||V!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),L=A.near,V=A.far);const Y=z.parent,ie=A.cameras;X(A,Y);for(let O=0;O<ie.length;O++)X(ie[O],Y);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),z.matrix.copy(A.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const re=z.children;for(let O=0,Se=re.length;O<Se;O++)re[O].updateMatrixWorld(!0);ie.length===2?K(A,D,I):A.projectionMatrix.copy(D.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&g===null))return c},this.setFoveation=function(z){c=z,d!==null&&(d.fixedFoveation=z),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=z)},this.getPlanes=function(){return E};let ee=null;function Q(z,Y){if(h=Y.getViewerPose(u||l),M=Y,h!==null){const ie=h.views;g!==null&&(e.setRenderTargetFramebuffer(x,g.framebuffer),e.setRenderTarget(x));let re=!1;ie.length!==A.cameras.length&&(A.cameras.length=0,re=!0);for(let O=0;O<ie.length;O++){const Se=ie[O];let de=null;if(g!==null)de=g.getViewport(Se);else{const le=m.getViewSubImage(d,Se);de=le.viewport,O===0&&(e.setRenderTargetTextures(x,le.colorTexture,d.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(x))}let fe=v[O];fe===void 0&&(fe=new Ct,fe.layers.enable(O),fe.viewport=new Qe,v[O]=fe),fe.matrix.fromArray(Se.transform.matrix),fe.projectionMatrix.fromArray(Se.projectionMatrix),fe.viewport.set(de.x,de.y,de.width,de.height),O===0&&A.matrix.copy(fe.matrix),re===!0&&A.cameras.push(fe)}}for(let ie=0;ie<T.length;ie++){const re=S[ie],O=T[ie];re!==null&&O!==void 0&&O.update(re,Y,u||l)}if(ee&&ee(z,Y),Y.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Y.detectedPlanes});let ie=null;for(const re of E)Y.detectedPlanes.has(re)||(ie===null&&(ie=[]),ie.push(re));if(ie!==null)for(const re of ie)E.delete(re),w.delete(re),n.dispatchEvent({type:"planeremoved",data:re});for(const re of Y.detectedPlanes)if(!E.has(re))E.add(re),w.set(re,Y.lastChangedTime),n.dispatchEvent({type:"planeadded",data:re});else{const O=w.get(re);re.lastChangedTime>O&&(w.set(re,re.lastChangedTime),n.dispatchEvent({type:"planechanged",data:re}))}}M=null}const ce=new Ma;ce.setAnimationLoop(Q),this.setAnimationLoop=function(z){ee=z},this.dispose=function(){}}}function Cd(r,e){function t(p,f){f.color.getRGB(p.fogColor.value,_a(r)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,x,T,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),h(p,f)):f.isMeshPhongMaterial?(i(p,f),u(p,f)):f.isMeshStandardMaterial?(i(p,f),m(p,f),f.isMeshPhysicalMaterial&&d(p,f,S)):f.isMeshMatcapMaterial?(i(p,f),g(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),M(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&l(p,f)):f.isPointsMaterial?a(p,f,x,T):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===_t&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===_t&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const E=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*E}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let T;f.map?T=f.map:f.specularMap?T=f.specularMap:f.displacementMap?T=f.displacementMap:f.normalMap?T=f.normalMap:f.bumpMap?T=f.bumpMap:f.roughnessMap?T=f.roughnessMap:f.metalnessMap?T=f.metalnessMap:f.alphaMap?T=f.alphaMap:f.emissiveMap?T=f.emissiveMap:f.clearcoatMap?T=f.clearcoatMap:f.clearcoatNormalMap?T=f.clearcoatNormalMap:f.clearcoatRoughnessMap?T=f.clearcoatRoughnessMap:f.iridescenceMap?T=f.iridescenceMap:f.iridescenceThicknessMap?T=f.iridescenceThicknessMap:f.specularIntensityMap?T=f.specularIntensityMap:f.specularColorMap?T=f.specularColorMap:f.transmissionMap?T=f.transmissionMap:f.thicknessMap?T=f.thicknessMap:f.sheenColorMap?T=f.sheenColorMap:f.sheenRoughnessMap&&(T=f.sheenRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uvTransform.value.copy(T.matrix));let S;f.aoMap?S=f.aoMap:f.lightMap&&(S=f.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uv2Transform.value.copy(S.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function l(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,x,T){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*x,p.scale.value=T*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let S;f.map?S=f.map:f.alphaMap&&(S=f.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix))}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let x;f.map?x=f.map:f.alphaMap&&(x=f.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function m(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,x){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===_t&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function M(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Ld(r,e,t,n){let i={},s={},l=[];const a=t.isWebGL2?r.getParameter(35375):0;function c(T,S){const E=S.program;n.uniformBlockBinding(T,E)}function u(T,S){let E=i[T.id];E===void 0&&(M(T),E=h(T),i[T.id]=E,T.addEventListener("dispose",f));const w=S.program;n.updateUBOMapping(T,w);const D=e.render.frame;s[T.id]!==D&&(d(T),s[T.id]=D)}function h(T){const S=m();T.__bindingPointIndex=S;const E=r.createBuffer(),w=T.__size,D=T.usage;return r.bindBuffer(35345,E),r.bufferData(35345,w,D),r.bindBuffer(35345,null),r.bindBufferBase(35345,S,E),E}function m(){for(let T=0;T<a;T++)if(l.indexOf(T)===-1)return l.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const S=i[T.id],E=T.uniforms,w=T.__cache;r.bindBuffer(35345,S);for(let D=0,I=E.length;D<I;D++){const v=E[D];if(g(v,D,w)===!0){const A=v.__offset,L=Array.isArray(v.value)?v.value:[v.value];let V=0;for(let j=0;j<L.length;j++){const R=L[j],F=p(R);typeof R=="number"?(v.__data[0]=R,r.bufferSubData(35345,A+V,v.__data)):R.isMatrix3?(v.__data[0]=R.elements[0],v.__data[1]=R.elements[1],v.__data[2]=R.elements[2],v.__data[3]=R.elements[0],v.__data[4]=R.elements[3],v.__data[5]=R.elements[4],v.__data[6]=R.elements[5],v.__data[7]=R.elements[0],v.__data[8]=R.elements[6],v.__data[9]=R.elements[7],v.__data[10]=R.elements[8],v.__data[11]=R.elements[0]):(R.toArray(v.__data,V),V+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,A,v.__data)}}r.bindBuffer(35345,null)}function g(T,S,E){const w=T.value;if(E[S]===void 0){if(typeof w=="number")E[S]=w;else{const D=Array.isArray(w)?w:[w],I=[];for(let v=0;v<D.length;v++)I.push(D[v].clone());E[S]=I}return!0}else if(typeof w=="number"){if(E[S]!==w)return E[S]=w,!0}else{const D=Array.isArray(E[S])?E[S]:[E[S]],I=Array.isArray(w)?w:[w];for(let v=0;v<D.length;v++){const A=D[v];if(A.equals(I[v])===!1)return A.copy(I[v]),!0}}return!1}function M(T){const S=T.uniforms;let E=0;const w=16;let D=0;for(let I=0,v=S.length;I<v;I++){const A=S[I],L={boundary:0,storage:0},V=Array.isArray(A.value)?A.value:[A.value];for(let j=0,R=V.length;j<R;j++){const F=V[j],q=p(F);L.boundary+=q.boundary,L.storage+=q.storage}if(A.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=E,I>0){D=E%w;const j=w-D;D!==0&&j-L.boundary<0&&(E+=w-D,A.__offset=E)}E+=L.storage}return D=E%w,D>0&&(E+=w-D),T.__size=E,T.__cache={},this}function p(T){const S={boundary:0,storage:0};return typeof T=="number"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function f(T){const S=T.target;S.removeEventListener("dispose",f);const E=l.indexOf(S.__bindingPointIndex);l.splice(E,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function x(){for(const T in i)r.deleteBuffer(i[T]);l=[],i={},s={}}return{bind:c,update:u,dispose:x}}function Dd(){const r=Ii("canvas");return r.style.display="block",r}function Ta(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:Dd(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,l=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",u=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let m=null,d=null;const g=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=mn,this.physicallyCorrectLights=!1,this.toneMapping=Xt,this.toneMappingExposure=1;const p=this;let f=!1,x=0,T=0,S=null,E=-1,w=null;const D=new Qe,I=new Qe;let v=null,A=e.width,L=e.height,V=1,j=null,R=null;const F=new Qe(0,0,A,L),q=new Qe(0,0,A,L);let $=!1;const K=new Fr;let X=!1,ee=!1,Q=null;const ce=new qe,z=new Ie,Y=new U,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return S===null?V:1}let O=t;function Se(y,N){for(let G=0;G<y.length;G++){const P=y[G],W=e.getContext(P,N);if(W!==null)return W}return null}try{const y={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Dr}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",De,!1),O===null){const N=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&N.shift(),O=Se(N,y),O===null)throw Se(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let de,fe,le,ze,be,ve,rt,vt,et,Mt,He,Fe,Nt,wt,b,_,k,J,te,se,Me,ae,H,ge;function xe(){de=new ku(O),fe=new Nu(O,de,r),de.init(fe),ae=new bd(O,de,fe),le=new yd(O,de,fe),ze=new Hu,be=new od,ve=new Sd(O,de,le,be,fe,ae,ze),rt=new zu(p),vt=new Gu(p),et=new Qo(O,fe),H=new Iu(O,de,et,fe),Mt=new Vu(O,et,ze,H),He=new ju(O,Mt,et,ze),te=new Yu(O,fe,ve),_=new Uu(be),Fe=new ad(p,rt,vt,de,fe,H,_),Nt=new Cd(p,be),wt=new cd,b=new md(de,fe),J=new Ru(p,rt,vt,le,He,h,l),k=new Md(p,He,fe),ge=new Ld(O,ze,fe,le),se=new Fu(O,de,ze,fe),Me=new Wu(O,de,ze,fe),ze.programs=Fe.programs,p.capabilities=fe,p.extensions=de,p.properties=be,p.renderLists=wt,p.shadowMap=k,p.state=le,p.info=ze}xe();const ue=new Ad(p,O);this.xr=ue,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const y=de.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=de.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(A,L,!1))},this.getSize=function(y){return y.set(A,L)},this.setSize=function(y,N,G){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=y,L=N,e.width=Math.floor(y*V),e.height=Math.floor(N*V),G!==!1&&(e.style.width=y+"px",e.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(A*V,L*V).floor()},this.setDrawingBufferSize=function(y,N,G){A=y,L=N,V=G,e.width=Math.floor(y*G),e.height=Math.floor(N*G),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(D)},this.getViewport=function(y){return y.copy(F)},this.setViewport=function(y,N,G,P){y.isVector4?F.set(y.x,y.y,y.z,y.w):F.set(y,N,G,P),le.viewport(D.copy(F).multiplyScalar(V).floor())},this.getScissor=function(y){return y.copy(q)},this.setScissor=function(y,N,G,P){y.isVector4?q.set(y.x,y.y,y.z,y.w):q.set(y,N,G,P),le.scissor(I.copy(q).multiplyScalar(V).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(y){le.setScissorTest($=y)},this.setOpaqueSort=function(y){j=y},this.setTransparentSort=function(y){R=y},this.getClearColor=function(y){return y.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(y=!0,N=!0,G=!0){let P=0;y&&(P|=16384),N&&(P|=256),G&&(P|=1024),O.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",De,!1),wt.dispose(),b.dispose(),be.dispose(),rt.dispose(),vt.dispose(),He.dispose(),H.dispose(),ge.dispose(),Fe.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",oe),ue.removeEventListener("sessionend",he),Q&&(Q.dispose(),Q=null),Re.stop()};function _e(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const y=ze.autoReset,N=k.enabled,G=k.autoUpdate,P=k.needsUpdate,W=k.type;xe(),ze.autoReset=y,k.enabled=N,k.autoUpdate=G,k.needsUpdate=P,k.type=W}function De(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Be(y){const N=y.target;N.removeEventListener("dispose",Be),Ze(N)}function Ze(y){C(y),be.remove(y)}function C(y){const N=be.get(y).programs;N!==void 0&&(N.forEach(function(G){Fe.releaseProgram(G)}),y.isShaderMaterial&&Fe.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,G,P,W,me){N===null&&(N=ie);const ye=W.isMesh&&W.matrixWorld.determinant()<0,Te=Pa(y,N,G,P,W);le.setMaterial(P,ye);let Ee=G.index,Pe=1;P.wireframe===!0&&(Ee=Mt.getWireframeAttribute(G),Pe=2);const Ae=G.drawRange,Ce=G.attributes.position;let ke=Ae.start*Pe,ut=(Ae.start+Ae.count)*Pe;me!==null&&(ke=Math.max(ke,me.start*Pe),ut=Math.min(ut,(me.start+me.count)*Pe)),Ee!==null?(ke=Math.max(ke,0),ut=Math.min(ut,Ee.count)):Ce!=null&&(ke=Math.max(ke,0),ut=Math.min(ut,Ce.count));const zt=ut-ke;if(zt<0||zt===1/0)return;H.setup(W,P,Te,G,Ee);let Qt,Ve=se;if(Ee!==null&&(Qt=et.get(Ee),Ve=Me,Ve.setIndex(Qt)),W.isMesh)P.wireframe===!0?(le.setLineWidth(P.wireframeLinewidth*re()),Ve.setMode(1)):Ve.setMode(4);else if(W.isLine){let Le=P.linewidth;Le===void 0&&(Le=1),le.setLineWidth(Le*re()),W.isLineSegments?Ve.setMode(1):W.isLineLoop?Ve.setMode(2):Ve.setMode(3)}else W.isPoints?Ve.setMode(0):W.isSprite&&Ve.setMode(4);if(W.isInstancedMesh)Ve.renderInstances(ke,zt,W.count);else if(G.isInstancedBufferGeometry){const Le=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Oi=Math.min(G.instanceCount,Le);Ve.renderInstances(ke,zt,Oi)}else Ve.render(ke,zt)},this.compile=function(y,N){function G(P,W,me){P.transparent===!0&&P.side===Kt&&P.forceSinglePass===!1?(P.side=_t,P.needsUpdate=!0,yt(P,W,me),P.side=qt,P.needsUpdate=!0,yt(P,W,me),P.side=Kt):yt(P,W,me)}d=b.get(y),d.init(),M.push(d),y.traverseVisible(function(P){P.isLight&&P.layers.test(N.layers)&&(d.pushLight(P),P.castShadow&&d.pushShadow(P))}),d.setupLights(p.physicallyCorrectLights),y.traverse(function(P){const W=P.material;if(W)if(Array.isArray(W))for(let me=0;me<W.length;me++){const ye=W[me];G(ye,y,P)}else G(W,y,P)}),M.pop(),d=null};let B=null;function Z(y){B&&B(y)}function oe(){Re.stop()}function he(){Re.start()}const Re=new Ma;Re.setAnimationLoop(Z),typeof self<"u"&&Re.setContext(self),this.setAnimationLoop=function(y){B=y,ue.setAnimationLoop(y),y===null?Re.stop():Re.start()},ue.addEventListener("sessionstart",oe),ue.addEventListener("sessionend",he),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(N),N=ue.getCamera()),y.isScene===!0&&y.onBeforeRender(p,y,N,S),d=b.get(y,M.length),d.init(),M.push(d),ce.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(ce),ee=this.localClippingEnabled,X=_.init(this.clippingPlanes,ee),m=wt.get(y,g.length),m.init(),g.push(m),$e(y,N,0,p.sortObjects),m.finish(),p.sortObjects===!0&&m.sort(j,R),X===!0&&_.beginShadows();const G=d.state.shadowsArray;if(k.render(G,y,N),X===!0&&_.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(m,y),d.setupLights(p.physicallyCorrectLights),N.isArrayCamera){const P=N.cameras;for(let W=0,me=P.length;W<me;W++){const ye=P[W];tt(m,y,ye,ye.viewport)}}else tt(m,y,N);S!==null&&(ve.updateMultisampleRenderTarget(S),ve.updateRenderTargetMipmap(S)),y.isScene===!0&&y.onAfterRender(p,y,N),H.resetDefaultState(),E=-1,w=null,M.pop(),M.length>0?d=M[M.length-1]:d=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function $e(y,N,G,P){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||K.intersectsSprite(y)){P&&Y.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ce);const ye=He.update(y),Te=y.material;Te.visible&&m.push(y,ye,Te,G,Y.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==ze.render.frame&&(y.skeleton.update(),y.skeleton.frame=ze.render.frame),!y.frustumCulled||K.intersectsObject(y))){P&&Y.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ce);const ye=He.update(y),Te=y.material;if(Array.isArray(Te)){const Ee=ye.groups;for(let Pe=0,Ae=Ee.length;Pe<Ae;Pe++){const Ce=Ee[Pe],ke=Te[Ce.materialIndex];ke&&ke.visible&&m.push(y,ye,ke,G,Y.z,Ce)}}else Te.visible&&m.push(y,ye,Te,G,Y.z,null)}}const me=y.children;for(let ye=0,Te=me.length;ye<Te;ye++)$e(me[ye],N,G,P)}function tt(y,N,G,P){const W=y.opaque,me=y.transmissive,ye=y.transparent;d.setupLightsView(G),X===!0&&_.setGlobalState(p.clippingPlanes,G),me.length>0&&Jt(W,N,G),P&&le.viewport(D.copy(P)),W.length>0&&Ge(W,N,G),me.length>0&&Ge(me,N,G),ye.length>0&&Ge(ye,N,G),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Jt(y,N,G){const P=fe.isWebGL2;Q===null&&(Q=new gn(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?si:pn,minFilter:ri,samples:P&&s===!0?4:0})),p.getDrawingBufferSize(z),P?Q.setSize(z.x,z.y):Q.setSize(Cr(z.x),Cr(z.y));const W=p.getRenderTarget();p.setRenderTarget(Q),p.clear();const me=p.toneMapping;p.toneMapping=Xt,Ge(y,N,G),p.toneMapping=me,ve.updateMultisampleRenderTarget(Q),ve.updateRenderTargetMipmap(Q),p.setRenderTarget(W)}function Ge(y,N,G){const P=N.isScene===!0?N.overrideMaterial:null;for(let W=0,me=y.length;W<me;W++){const ye=y[W],Te=ye.object,Ee=ye.geometry,Pe=P===null?ye.material:P,Ae=ye.group;Te.layers.test(G.layers)&&Ut(Te,N,G,Ee,Pe,Ae)}}function Ut(y,N,G,P,W,me){y.onBeforeRender(p,N,G,P,W,me),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),W.onBeforeRender(p,N,G,P,y,me),W.transparent===!0&&W.side===Kt&&W.forceSinglePass===!1?(W.side=_t,W.needsUpdate=!0,p.renderBufferDirect(G,N,P,W,y,me),W.side=qt,W.needsUpdate=!0,p.renderBufferDirect(G,N,P,W,y,me),W.side=Kt):p.renderBufferDirect(G,N,P,W,y,me),y.onAfterRender(p,N,G,P,W,me)}function yt(y,N,G){N.isScene!==!0&&(N=ie);const P=be.get(y),W=d.state.lights,me=d.state.shadowsArray,ye=W.state.version,Te=Fe.getParameters(y,W.state,me,N,G),Ee=Fe.getProgramCacheKey(Te);let Pe=P.programs;P.environment=y.isMeshStandardMaterial?N.environment:null,P.fog=N.fog,P.envMap=(y.isMeshStandardMaterial?vt:rt).get(y.envMap||P.environment),Pe===void 0&&(y.addEventListener("dispose",Be),Pe=new Map,P.programs=Pe);let Ae=Pe.get(Ee);if(Ae!==void 0){if(P.currentProgram===Ae&&P.lightsStateVersion===ye)return Or(y,Te),Ae}else Te.uniforms=Fe.getUniforms(y),y.onBuild(G,Te,p),y.onBeforeCompile(Te,p),Ae=Fe.acquireProgram(Te,Ee),Pe.set(Ee,Ae),P.uniforms=Te.uniforms;const Ce=P.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ce.clippingPlanes=_.uniform),Or(y,Te),P.needsLights=Ia(y),P.lightsStateVersion=ye,P.needsLights&&(Ce.ambientLightColor.value=W.state.ambient,Ce.lightProbe.value=W.state.probe,Ce.directionalLights.value=W.state.directional,Ce.directionalLightShadows.value=W.state.directionalShadow,Ce.spotLights.value=W.state.spot,Ce.spotLightShadows.value=W.state.spotShadow,Ce.rectAreaLights.value=W.state.rectArea,Ce.ltc_1.value=W.state.rectAreaLTC1,Ce.ltc_2.value=W.state.rectAreaLTC2,Ce.pointLights.value=W.state.point,Ce.pointLightShadows.value=W.state.pointShadow,Ce.hemisphereLights.value=W.state.hemi,Ce.directionalShadowMap.value=W.state.directionalShadowMap,Ce.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ce.spotShadowMap.value=W.state.spotShadowMap,Ce.spotLightMatrix.value=W.state.spotLightMatrix,Ce.spotLightMap.value=W.state.spotLightMap,Ce.pointShadowMap.value=W.state.pointShadowMap,Ce.pointShadowMatrix.value=W.state.pointShadowMatrix);const ke=Ae.getUniforms(),ut=Ri.seqWithValue(ke.seq,Ce);return P.currentProgram=Ae,P.uniformsList=ut,Ae}function Or(y,N){const G=be.get(y);G.outputEncoding=N.outputEncoding,G.instancing=N.instancing,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Pa(y,N,G,P,W){N.isScene!==!0&&(N=ie),ve.resetTextureUnits();const me=N.fog,ye=P.isMeshStandardMaterial?N.environment:null,Te=S===null?p.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:mn,Ee=(P.isMeshStandardMaterial?vt:rt).get(P.envMap||ye),Pe=P.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ae=!!P.normalMap&&!!G.attributes.tangent,Ce=!!G.morphAttributes.position,ke=!!G.morphAttributes.normal,ut=!!G.morphAttributes.color,zt=P.toneMapped?p.toneMapping:Xt,Qt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ve=Qt!==void 0?Qt.length:0,Le=be.get(P),Oi=d.state.lights;if(X===!0&&(ee===!0||y!==w)){const ht=y===w&&P.id===E;_.setState(P,y,ht)}let Ke=!1;P.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Oi.state.version||Le.outputEncoding!==Te||W.isInstancedMesh&&Le.instancing===!1||!W.isInstancedMesh&&Le.instancing===!0||W.isSkinnedMesh&&Le.skinning===!1||!W.isSkinnedMesh&&Le.skinning===!0||Le.envMap!==Ee||P.fog===!0&&Le.fog!==me||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==_.numPlanes||Le.numIntersection!==_.numIntersection)||Le.vertexAlphas!==Pe||Le.vertexTangents!==Ae||Le.morphTargets!==Ce||Le.morphNormals!==ke||Le.morphColors!==ut||Le.toneMapping!==zt||fe.isWebGL2===!0&&Le.morphTargetsCount!==Ve)&&(Ke=!0):(Ke=!0,Le.__version=P.version);let en=Le.currentProgram;Ke===!0&&(en=yt(P,N,W));let Br=!1,qn=!1,Bi=!1;const st=en.getUniforms(),tn=Le.uniforms;if(le.useProgram(en.program)&&(Br=!0,qn=!0,Bi=!0),P.id!==E&&(E=P.id,qn=!0),Br||w!==y){if(st.setValue(O,"projectionMatrix",y.projectionMatrix),fe.logarithmicDepthBuffer&&st.setValue(O,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),w!==y&&(w=y,qn=!0,Bi=!0),P.isShaderMaterial||P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshStandardMaterial||P.envMap){const ht=st.map.cameraPosition;ht!==void 0&&ht.setValue(O,Y.setFromMatrixPosition(y.matrixWorld))}(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&st.setValue(O,"isOrthographic",y.isOrthographicCamera===!0),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial||P.isShadowMaterial||W.isSkinnedMesh)&&st.setValue(O,"viewMatrix",y.matrixWorldInverse)}if(W.isSkinnedMesh){st.setOptional(O,W,"bindMatrix"),st.setOptional(O,W,"bindMatrixInverse");const ht=W.skeleton;ht&&(fe.floatVertexTextures?(ht.boneTexture===null&&ht.computeBoneTexture(),st.setValue(O,"boneTexture",ht.boneTexture,ve),st.setValue(O,"boneTextureSize",ht.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Gi=G.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0&&fe.isWebGL2===!0)&&te.update(W,G,P,en),(qn||Le.receiveShadow!==W.receiveShadow)&&(Le.receiveShadow=W.receiveShadow,st.setValue(O,"receiveShadow",W.receiveShadow)),P.isMeshGouraudMaterial&&P.envMap!==null&&(tn.envMap.value=Ee,tn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),qn&&(st.setValue(O,"toneMappingExposure",p.toneMappingExposure),Le.needsLights&&Ra(tn,Bi),me&&P.fog===!0&&Nt.refreshFogUniforms(tn,me),Nt.refreshMaterialUniforms(tn,P,V,L,Q),Ri.upload(O,Le.uniformsList,tn,ve)),P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(Ri.upload(O,Le.uniformsList,tn,ve),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&st.setValue(O,"center",W.center),st.setValue(O,"modelViewMatrix",W.modelViewMatrix),st.setValue(O,"normalMatrix",W.normalMatrix),st.setValue(O,"modelMatrix",W.matrixWorld),P.isShaderMaterial||P.isRawShaderMaterial){const ht=P.uniformsGroups;for(let ki=0,Fa=ht.length;ki<Fa;ki++)if(fe.isWebGL2){const Gr=ht[ki];ge.update(Gr,en),ge.bind(Gr,en)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return en}function Ra(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Ia(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(y,N,G){be.get(y.texture).__webglTexture=N,be.get(y.depthTexture).__webglTexture=G;const P=be.get(y);P.__hasExternalTextures=!0,P.__hasExternalTextures&&(P.__autoAllocateDepthBuffer=G===void 0,P.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),P.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,N){const G=be.get(y);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(y,N=0,G=0){S=y,x=N,T=G;let P=!0,W=null,me=!1,ye=!1;if(y){const Ee=be.get(y);Ee.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),P=!1):Ee.__webglFramebuffer===void 0?ve.setupRenderTarget(y):Ee.__hasExternalTextures&&ve.rebindTextures(y,be.get(y.texture).__webglTexture,be.get(y.depthTexture).__webglTexture);const Pe=y.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ye=!0);const Ae=be.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(W=Ae[N],me=!0):fe.isWebGL2&&y.samples>0&&ve.useMultisampledRTT(y)===!1?W=be.get(y).__webglMultisampledFramebuffer:W=Ae,D.copy(y.viewport),I.copy(y.scissor),v=y.scissorTest}else D.copy(F).multiplyScalar(V).floor(),I.copy(q).multiplyScalar(V).floor(),v=$;if(le.bindFramebuffer(36160,W)&&fe.drawBuffers&&P&&le.drawBuffers(y,W),le.viewport(D),le.scissor(I),le.setScissorTest(v),me){const Ee=be.get(y.texture);O.framebufferTexture2D(36160,36064,34069+N,Ee.__webglTexture,G)}else if(ye){const Ee=be.get(y.texture),Pe=N||0;O.framebufferTextureLayer(36160,36064,Ee.__webglTexture,G||0,Pe)}E=-1},this.readRenderTargetPixels=function(y,N,G,P,W,me,ye){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=be.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){le.bindFramebuffer(36160,Te);try{const Ee=y.texture,Pe=Ee.format,Ae=Ee.type;if(Pe!==Dt&&ae.convert(Pe)!==O.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=Ae===si&&(de.has("EXT_color_buffer_half_float")||fe.isWebGL2&&de.has("EXT_color_buffer_float"));if(Ae!==pn&&ae.convert(Ae)!==O.getParameter(35738)&&!(Ae===un&&(fe.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-P&&G>=0&&G<=y.height-W&&O.readPixels(N,G,P,W,ae.convert(Pe),ae.convert(Ae),me)}finally{const Ee=S!==null?be.get(S).__webglFramebuffer:null;le.bindFramebuffer(36160,Ee)}}},this.copyFramebufferToTexture=function(y,N,G=0){const P=Math.pow(2,-G),W=Math.floor(N.image.width*P),me=Math.floor(N.image.height*P);ve.setTexture2D(N,0),O.copyTexSubImage2D(3553,G,0,0,y.x,y.y,W,me),le.unbindTexture()},this.copyTextureToTexture=function(y,N,G,P=0){const W=N.image.width,me=N.image.height,ye=ae.convert(G.format),Te=ae.convert(G.type);ve.setTexture2D(G,0),O.pixelStorei(37440,G.flipY),O.pixelStorei(37441,G.premultiplyAlpha),O.pixelStorei(3317,G.unpackAlignment),N.isDataTexture?O.texSubImage2D(3553,P,y.x,y.y,W,me,ye,Te,N.image.data):N.isCompressedTexture?O.compressedTexSubImage2D(3553,P,y.x,y.y,N.mipmaps[0].width,N.mipmaps[0].height,ye,N.mipmaps[0].data):O.texSubImage2D(3553,P,y.x,y.y,ye,Te,N.image),P===0&&G.generateMipmaps&&O.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(y,N,G,P,W=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=y.max.x-y.min.x+1,ye=y.max.y-y.min.y+1,Te=y.max.z-y.min.z+1,Ee=ae.convert(P.format),Pe=ae.convert(P.type);let Ae;if(P.isData3DTexture)ve.setTexture3D(P,0),Ae=32879;else if(P.isDataArrayTexture)ve.setTexture2DArray(P,0),Ae=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(37440,P.flipY),O.pixelStorei(37441,P.premultiplyAlpha),O.pixelStorei(3317,P.unpackAlignment);const Ce=O.getParameter(3314),ke=O.getParameter(32878),ut=O.getParameter(3316),zt=O.getParameter(3315),Qt=O.getParameter(32877),Ve=G.isCompressedTexture?G.mipmaps[0]:G.image;O.pixelStorei(3314,Ve.width),O.pixelStorei(32878,Ve.height),O.pixelStorei(3316,y.min.x),O.pixelStorei(3315,y.min.y),O.pixelStorei(32877,y.min.z),G.isDataTexture||G.isData3DTexture?O.texSubImage3D(Ae,W,N.x,N.y,N.z,me,ye,Te,Ee,Pe,Ve.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Ae,W,N.x,N.y,N.z,me,ye,Te,Ee,Ve.data)):O.texSubImage3D(Ae,W,N.x,N.y,N.z,me,ye,Te,Ee,Pe,Ve),O.pixelStorei(3314,Ce),O.pixelStorei(32878,ke),O.pixelStorei(3316,ut),O.pixelStorei(3315,zt),O.pixelStorei(32877,Qt),W===0&&P.generateMipmaps&&O.generateMipmap(Ae),le.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?ve.setTextureCube(y,0):y.isData3DTexture?ve.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?ve.setTexture2DArray(y,0):ve.setTexture2D(y,0),le.unbindTexture()},this.resetState=function(){x=0,T=0,S=null,le.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Pd extends Ta{}Pd.prototype.isWebGL1Renderer=!0;class Rd extends it{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Nn extends Hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rr,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Id extends Hn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rr,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Pr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ea extends it{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const yr=new qe,Qs=new U,ea=new U;class Fd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fr,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Qs.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qs),ea.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ea),t.updateMatrixWorld(),yr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Nd extends Fd{constructor(){super(new Nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ud extends Ea{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.shadow=new Nd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zd extends Ea{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dr);let zr=[],Aa=new Ud(16777215,1);zr.push(Aa);Aa.position.set(0,200,100);zr.push(new zd(10066329));function Od(r){const e=new Ta({alpha:!0,antialias:!0});return e.setPixelRatio(window.devicePixelRatio),r.windowScale=Math.min(Math.floor(window.innerWidth/r.XW),Math.floor(window.innerHeight/r.YH)),e.setSize(r.windowSize.w,r.windowSize.h),document.body.appendChild(e.domElement),e}function Bd({scene:r,onAdd:e,onRemove:t}){const n=[],i={};return{e:n,add:l=>{var a;!Array.isArray(l.tags)&&l.tags&&(l.tags=[l.tags]),l.id||(l.id=((a=l.mesh)==null?void 0:a.uuid)||0),l.id&&(i[l.id]=l),n.push(l),l.mesh&&r.add(l.mesh),typeof e=="function"&&e(l)},removeById:l=>{let a=i[l];a&&s(a)},remove:s,getById:l=>i[l],getByTag:l=>n.filter(a=>{var c;return(c=a.tags)==null?void 0:c.includes(l)})};function s(l){delete i[l.id];const a=n.indexOf(l);if(a<0)throw new Error("Entities cannot remove unknown object",l);n.splice(a,1),typeof t=="function"&&t(l),l.mesh&&r.remove(l.mesh)}}function Gd(){return{enabled:!1,timestampStart:void 0,timestampEnd:void 0,startPoint:void 0,endPoint:void 0,update:function(e){if(this.enabled==!0){const t=Date.now();if(this.timestampEnd>t){let n=(Date.now()-this.timestampStart)/(this.timestampEnd-this.timestampStart);this.computePosition(e,n)}else e.position.copy(this.startPoint),this.enabled=!1}},shake:function(e,t,n){this.enabled=!0,this.timestampStart=Date.now(),this.timestampEnd=this.timestampStart+n,this.startPoint=new U().copy(e.position),this.endPoint=new U().addVectors(e.position,t)},computePosition:function(e,t){let n;t<.4?n=this.getQuadra(t/.4):t<.7?n=this.getQuadra((t-.4)/.3)*-.6:t<.9?n=this.getQuadra((t-.7)/.2)*.3:n=this.getQuadra((t-.9)/.1)*-.1,e.position.lerpVectors(this.startPoint,this.endPoint,n)},getQuadra:function(e){return 9436896e-22+4*e-4*(e*e)}}}function kd(r,e,t,n){let i=.75*r/2,s;s=new Nr(-i*n,i*n,i,-i,100,-100),s.position.set(r/2,e/2,100);let l=Gd();return{camera:s,id:"camera",update(){l.update(s)},shake(a,c){l.shake(s,a,c)}}}let Vd=new Id({color:2236979,opacity:1,blending:Ht,side:qt,transparent:!1,depthTest:!1,wireframe:!1});const zi=new It(new hi(320,240,10,10),Vd);zi.castShadow=!1;zi.receiveShadow=!0;zi.position.set(160,120,-1);function Ca({config:r}){let e=r.blockWidth,t=r.blockHeight;return{worldPos:i,boxel(s,l,a,c,u){let h=e*.8,m=t*.8;typeof c=="number"&&(c=new Nn({color:c}));const d=c&&new It(new hi(h,m),c);let g="boxel_"+d.id,[M,p]=n(s,l);return d&&d.position.set(M,p,0),{id:g,tags:a,mesh:d,collider:{grid:{id:g,tags:a,x:M,y:p,w:r.blockWidth,h:r.blockHeight}},update:u}}};function n(s,l){return[r.blockWidth/2+r.blockWidth*s,r.blockHeight/2+r.blockHeight*l]}function i(s,l){return[r.blockWidth*s,r.blockHeight*l]}}function Wd(r){let t=r(0,0,"bullet",13369344,function(n){this.mesh.position.y+=4*n/10});return t.id="bullet"+Date.now(),t.damage=0,t}function ot(r){r&&(r.setTargetAtTime||(r.setTargetAtTime=r.setTargetValueAtTime))}Object.prototype.hasOwnProperty.call(window,"webkitAudioContext")&&!Object.prototype.hasOwnProperty.call(window,"AudioContext")&&(window.AudioContext=window.AudioContext||window.webkitAudioContext,Object.prototype.hasOwnProperty.call(AudioContext,"createGain")||(AudioContext.prototype.createGain=AudioContext.prototype.createGainNode),Object.prototype.hasOwnProperty.call(AudioContext,"createDelay")||(AudioContext.prototype.createDelay=AudioContext.prototype.createDelayNode),Object.prototype.hasOwnProperty.call(AudioContext,"createScriptProcessor")||(AudioContext.prototype.createScriptProcessor=AudioContext.prototype.createJavaScriptNode),Object.prototype.hasOwnProperty.call(AudioContext,"createPeriodicWave")||(AudioContext.prototype.createPeriodicWave=AudioContext.prototype.createWaveTable),AudioContext.prototype.internal_createGain=AudioContext.prototype.createGain,AudioContext.prototype.createGain=function(){var r=this.internal_createGain();return ot(r.gain),r},AudioContext.prototype.internal_createDelay=AudioContext.prototype.createDelay,AudioContext.prototype.createDelay=function(r){var e=r?this.internal_createDelay(r):this.internal_createDelay();return ot(e.delayTime),e},AudioContext.prototype.internal_createBufferSource=AudioContext.prototype.createBufferSource,AudioContext.prototype.createBufferSource=function(){var r=this.internal_createBufferSource();return r.start?(r.internal_start=r.start,r.start=function(e,t,n){typeof n<"u"?r.internal_start(e||0,t,n):r.internal_start(e||0,t||0)}):r.start=function(e,t,n){t||n?this.noteGrainOn(e||0,t,n):this.noteOn(e||0)},r.stop?(r.internal_stop=r.stop,r.stop=function(e){r.internal_stop(e||0)}):r.stop=function(e){this.noteOff(e||0)},ot(r.playbackRate),r},AudioContext.prototype.internal_createDynamicsCompressor=AudioContext.prototype.createDynamicsCompressor,AudioContext.prototype.createDynamicsCompressor=function(){var r=this.internal_createDynamicsCompressor();return ot(r.threshold),ot(r.knee),ot(r.ratio),ot(r.reduction),ot(r.attack),ot(r.release),r},AudioContext.prototype.internal_createBiquadFilter=AudioContext.prototype.createBiquadFilter,AudioContext.prototype.createBiquadFilter=function(){var r=this.internal_createBiquadFilter();return ot(r.frequency),ot(r.detune),ot(r.Q),ot(r.gain),r},Object.prototype.hasOwnProperty.call(AudioContext,"createOscillator")&&(AudioContext.prototype.internal_createOscillator=AudioContext.prototype.createOscillator,AudioContext.prototype.createOscillator=function(){var r=this.internal_createOscillator();return r.start?(r.internal_start=r.start,r.start=function(e){r.internal_start(e||0)}):r.start=function(e){this.noteOn(e||0)},r.stop?(r.internal_stop=r.stop,r.stop=function(e){r.internal_stop(e||0)}):r.stop=function(e){this.noteOff(e||0)},r.setPeriodicWave||(r.setPeriodicWave=r.setWaveTable),ot(r.frequency),ot(r.detune),r}));var Ne=new AudioContext;function La({frequencyValue:r,attack:e,decay:t,type:n,volumeValue:i,panValue:s,wait:l,pitchBendAmount:a,reverse:c,randomValue:u,dissonance:h,echo:m,reverb:d,timeout:g}){r===void 0&&(r=200),e===void 0&&(e=0),t===void 0&&(t=1),n===void 0&&(n="sine"),i===void 0&&(i=1),s===void 0&&(s=0),l===void 0&&(l=0),a===void 0&&(a=0),c===void 0&&(c=!1),u===void 0&&(u=0),h===void 0&&(h=0),g===void 0&&(g=2);var M,p,f;M=Ne.createOscillator(),p=Ne.createGain(),Ne.createStereoPanner?f=Ne.createStereoPanner():f=Ne.createPanner(),M.connect(p),p.connect(f),f.connect(Ne.destination),p.gain.value=i,Ne.createStereoPanner?f.pan.value=s:f.setPosition(s,0,1-Math.abs(s)),M.type=n;var x,T=function(L,V){return Math.floor(Math.random()*(V-L+1))+L};u>0?x=T(r-u/2,r+u/2):x=r,M.frequency.value=x,e>0&&w(p),D(p),a>0&&I(M),m&&E(p),d&&S(p),h>0&&v(),A(M);function S(L){var V=Ne.createConvolver();V.buffer=Hd(d[0],d[1],d[2],Ne),L.connect(V),V.connect(f)}function E(L){var V=Ne.createGain(),j=Ne.createDelay(),R=Ne.createBiquadFilter();j.delayTime.value=m[0],V.gain.value=m[1],m[2]&&(R.frequency.value=m[2]),j.connect(V),m[2]?(V.connect(R),R.connect(j)):V.connect(j),L.connect(j),j.connect(f)}function w(L){L.gain.value=0,L.gain.linearRampToValueAtTime(0,Ne.currentTime+l),L.gain.linearRampToValueAtTime(i,Ne.currentTime+l+e)}function D(L){L.gain.linearRampToValueAtTime(i,Ne.currentTime+e+l),L.gain.linearRampToValueAtTime(0,Ne.currentTime+l+e+t)}function I(L){var V=L.frequency.value;c?(L.frequency.linearRampToValueAtTime(V,Ne.currentTime+l),L.frequency.linearRampToValueAtTime(V+a,Ne.currentTime+l+e+t)):(L.frequency.linearRampToValueAtTime(V,Ne.currentTime+l),L.frequency.linearRampToValueAtTime(V-a,Ne.currentTime+l+e+t))}function v(){var L=Ne.createOscillator(),V=Ne.createOscillator(),j=Ne.createGain(),R=Ne.createGain();j.gain.value=i,R.gain.value=i,L.connect(j),j.connect(Ne.destination),V.connect(R),R.connect(Ne.destination),L.type="sawtooth",V.type="sawtooth",L.frequency.value=x+h,V.frequency.value=x-h,e>0&&(w(j),w(R)),t>0&&(D(j),D(R)),a>0&&(I(L),I(V)),m&&(E(j),E(R)),d&&(S(j),S(R)),A(L),A(V)}function A(L){L.start(Ne.currentTime+l),L.stop(Ne.currentTime+l+g)}}function Hd(r,e,t,n){for(var i=n.sampleRate*r,s=n.createBuffer(2,i,n.sampleRate),l=s.getChannelData(0),a=s.getChannelData(1),c=0;c<i;c++){var u;t?u=i-c:u=c,l[c]=(Math.random()*2-1)*Math.pow(1-u/i,e),a[c]=(Math.random()*2-1)*Math.pow(1-u/i,e)}return s}function Xd(){La({frequencyValue:1046.5,attack:.01,decay:.2,waveform:"square",volumeValue:.2,pan:-.8,wait:0,pitchBendAmount:3200,reverse:!1,randomValue:0,dissonance:215,echo:null,reverb:void 0,timeout:.3})}function ta(r){La({frequencyValue:r,attack:.01,decay:5,waveform:"sine",volumeValue:.2,pan:-.8,wait:0,echo:null,reverb:void 0,timeout:5})}function qd(r,e,t,n){let i=r/n,s=i<.5?8*i*i*i*i:1-Math.pow(-2*i+2,4)/2;return Da(e,t,s)}function Yd(r,e,t,n){let i=r/n,s=i<.5?2*i:-2*i+2;return Da(e,t,s)}function Da(r,e,t){return(1-t)*r+t*e}function jd({config:r,entities:e}){let{boxel:t}=Ca({config:r});this.id="player",this.speed={x:0,y:0},this.mesh=new ii,this.boxels=[];let n=new Nn({color:16711935}),i=[[0,1,1,0],[0,1,1,0],[1,1,1,1],[1,1,1,1]];for(let s=0;s<4;s++)for(let l=0;l<4;l++){if(!i[3-l][s])continue;let a=t(s,l,"player",n);this.boxels.push(a),l>=2&&(a.mesh.name="barrel"),this.mesh.add(a.mesh)}return this.left=function(){this.direction!==-1&&(this.direction=-1,this.start=!0)},this.right=function(){this.direction!==1&&(this.direction=1,this.start=!0)},this.recoilers=Zd(this.mesh.children.filter(s=>s.name==="barrel")),this.shoot=function(){let s=Wd(t);this.recoilers.start(),Xd(),s.mesh.position.set(this.mesh.position.x+2*r.blockWidth,this.mesh.position.y+3*r.blockHeight,this.mesh.position.z),e.add(s)},this.update=function(s){if(this.recoilers.update(),this.start&&(this.timer=Date.now(),this.timerOffset=0,this.start=!1),this.direction){let a=Date.now()-this.timer,c=4,u=200;a>=u?(this.direction=0,this.speed.x=0):this.speed.x=this.direction*qd(a,0,c,u)}this.boxels.forEach(a=>{a.collider.grid.x=this.mesh.position.x+a.mesh.position.x,a.collider.grid.y=this.mesh.position.y+a.mesh.position.y});let l=this.mesh.position.x+this.speed.x*s/10;l<0||l>=r.XW-3*r.blockWidth?this.speed.x=0:this.mesh.position.x=l},this.speed={x:0,y:0},this.tags=["player"],this}function Zd(r){const e=r.map(t=>$d(t));return{running:!1,start(){this.running&&this.stop(),e.forEach(t=>t.start()),this.running=!0},update(){this.running&&e.forEach(t=>t.update())},stop(){e.forEach(t=>t.stop()),this.running=!1}}}function $d(r){const e=r;return{start(){this.timer=Date.now(),this.timerOffset=0,this.startPosition={y:e.position.y}},update(){let t=Date.now()-this.timer,n=4,i=120;if(t>=i)return this.stop(e);e.position.y=this.startPosition.y-Yd(t,0,n,i)},stop(){e.position.y=this.startPosition.y}}}function na(r){return r[Kd(0,r.length-1)]}function Kd(r,e){return Math.round(r+Math.random()*(e-r))}function Jd({config:r,scene:e,entities:t,player:n}){const i={floor:new Nn({color:3377203}),roof:new Nn({color:13421772}),crystal:new Nn({color:4487133}),collider:new Nn({color:8912896,transparent:!0,opacity:.5})},{boxel:s,worldPos:l}=Ca({config:r,scene:e,entities:t});let a=r.blockWidth,c=r.blockHeight,u=r.XW/a,h=r.YH/c;for(let x=0;x<u;x++)for(let T=0;T<=3;T++)T<=3&&f(x,T,["static","floor"],i.floor);let m=h-Math.random()*20;for(let x=0;x<u;x++){let T=(h-Math.random()*20+m)/2,S=i.roof,E=["static","roof"];Math.random()>.75&&(E.push("crystal"),S=i.crystal);for(let w=h;w>T;w--)f(x,w,E,S);m=T}let d=[82.41,87.31,98,110,123.47,130.81,146.83,164.81,174.61,196],g=[220,246.94,261.63,293.66,329.63,349.23,392,440];const M=()=>ta(na(d)),p=()=>ta(na(g));M(),window.setInterval(M,4e3),window.setInterval(p,2100),f(0,4,"boundsLeft",r.showColliders&&i.collider),n.mesh.position.set(...l(10,4),0);function f(x,T,S,E){t.add(s(x,T,S,E))}}function Qd(r){let e=r.blockWidth,t=r.blockHeight,n=r.XW/e,i=r.YH/t,s=1,l=1;this.grid=[];for(let c=0;c<i;c++)this.grid.push(Array.from({length:n},()=>[]));this.gridLoop=function(c){let u=this.grid;return h=>{let m=Math.floor(c.x/e),d=Math.ceil((s+c.x)/e),g=Math.floor(c.y/t),M=Math.ceil((l+c.y)/t);for(let p=g;p<=M&&p<u.length;p++)for(let f=m;f<=d&&f<u[0].length;f++)h(f,p,c)}},this.add=function(c){if(!c.id)throw new Error("CollisionGrid cannot index objects without an id",o);this.gridLoop(c)((u,h)=>{this.grid[h][u].indexOf(c)<0&&this.grid[h][u].push(c)})},this.collides=function(c){if(typeof c.x!="number"||typeof c.y!="number"||typeof c.w!="number"||typeof c.h!="number")throw new Error("Cannot check collision of object",c);let h=[];return this.gridLoop(c)((m,d)=>{this.grid[d][m].forEach(g=>{(a(c.x+1e-4,g.x,g.x+g.w)||a(c.x+c.w-1e-4,g.x,g.x+g.w))&&(a(c.y+1e-4,g.y,g.y+g.h)||a(c.y+c.h-1e-4,g.y,g.y+g.h))&&c!==g&&h.indexOf(g)<0&&h.push(g)})}),h};function a(c,u,h){return c>u&&c<h}return this.remove=function(c){this.gridLoop(c)((u,h)=>{ef(this.grid[h][u],c)})},this}function ef(r,e){if(!e.id)throw new Error("CollisionGrid cannot remove objects without an id",e);const t=r.findIndex(n=>n.id===e.id);if(t<0)throw new Error("CollisionGrid cannot remove unknown object",e);r.splice(t,1)}function tf(r){return{swipeStart(e){this.state.running&&e.touches&&(this.state.swipeX=e.touches[0].clientX)},swipeEnd(){this.state.swipeX!==null&&r.shoot()},swipeMove(e){if(!this.state.running||!e.touches||this.state.swipeX===null)return;let t=e.touches[0].clientX-this.state.swipeX;t>8?this.player.right():t<-8&&this.player.left(),this.state.swipeX=null},keypress(e){let t=null;if(!e.altKey&&!e.ctrlKey)if(["ArrowUp","KeyW"].includes(e.code))t=r.shoot();else if(["ArrowLeft","KeyA"].includes(e.code))t=this.player.left();else if(["ArrowRight","KeyD"].includes(e.code))t=this.player.right();else if(e.code==="KeyS")t=console.log(this.scene);else if(e.code==="KeyP")t=r.pause();else if(e.code==="KeyX")t=r.debug();else if(e.code==="KeyO")t=r.toggleStats();else return;else return;return t===null&&e.preventDefault(),t}}}const On={XW:256,YH:224,blockWidth:5,blockHeight:5,blockScale:.8,windowScale:1,windowSize:{w:window.innerWidth,h:window.innerHeight},showColliders:!0};On.windowAspect=On.windowSize.w/On.windowSize.h;function nf(){let r={config:On};r.systems={},r.scene=new Rd,r.entities=new Bd({onAdd:h,onRemove:m,scene:r.scene}),r.renderer=new Od(r.config),r.state={running:!1};const e=kd(r.config.XW,r.config.YH,r.config.windowScale,r.config.windowAspect);r.camera=e.camera,r.player=new jd(r),r.state={};let{systems:t,entities:n,scene:i,player:s}=r;t.gridCollider=new Qd(On),n.add(t.gridCollider),i.add(r.player.mesh),n.add(r.player),n.add(e),Jd({config:On,scene:i,entities:n,player:s}),i.add(zi),zr.forEach(d=>i.add(d));let{keypress:l,swipeStart:a,swipeEnd:c,swipeMove:u}=tf(this);return document.addEventListener("keydown",l.bind(this),!1),document.addEventListener("resize",rf.bind(this),!1),document.addEventListener("touchstart",a.bind(this),!1),document.addEventListener("touchend",c.bind(this),!1),document.addEventListener("touchmove",u.bind(this),!1),this.update=function(d){let g=r.state.timestamp?d-r.state.timestamp:0;this.entities.e.forEach(M=>{typeof M.update=="function"&&M.update(g)}),r.state.timestamp=d},this.run=function(){this.state.running=!0,window.requestAnimationFrame(this.loop.bind(this))},this.render=function(){this.renderer.render(i,this.camera)},this.loop=function(d){if(!this.state.running){this.state.timestamp=0;return}this.update(d),this.render(),window.requestAnimationFrame(this.loop.bind(this))},t.gridCollider.update=function(){n.getByTag("bullet").forEach(g=>{this.collides({x:g.mesh.position.x,y:g.mesh.position.y,w:g.collider.grid.w,h:g.collider.grid.h}).forEach(p=>{r.entities.removeById(p.id),++g.damage>2&&n.removeById(g.id)})})},this.shoot=()=>{this.player.shoot(),this.entities.getById("camera").shake(new U(1,-1,0),250)},this.pause=()=>{this.state.running=this.state.running!==!0,this.state.running&&this.run()},this.debug=()=>{this.state.debug=this.state.debug!==!0},this.toggleStats=()=>{this.stats.dom.style.display=this.stats.dom.style.display==="none"?"":"none"},Object.assign(this,r),this.run(),this;function h(d){var g,M;(g=d.collider)!=null&&g.grid&&d.tags.includes("static")&&t.gridCollider.add(d.collider.grid),(M=d.boxels)==null||M.forEach(p=>{t.gridCollider.add({...p.collider.grid,tags:d.tags})})}function m(d){var g;(g=d.collider)!=null&&g.grid&&d.tags.includes("static")&&t.gridCollider.remove(d.collider.grid)}}function rf(){}let ei=null;window.addEventListener("DOMContentLoaded",()=>{ei=new nf,ei.stats&&(document.body.appendChild(ei.stats.dom),requestAnimationFrame(function r(){ei.stats.update(),requestAnimationFrame(r)})),window._APP=ei});
