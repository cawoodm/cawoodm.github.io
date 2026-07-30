import{i as c,b as o,a as b,r as d,t as f}from"./index-DdnVB6Na.js";var u=Object.defineProperty,v=Object.getOwnPropertyDescriptor,l=(e,t,r,a)=>{for(var i=a>1?void 0:a?v(t,r):t,h=e.length-1,p;h>=0;h--)(p=e[h])&&(i=(a?p(t,r,i):p(i))||i);return a&&i&&u(t,r,i),i};let n=null;function g(){return n||(n=document.createElement("top-progress"),document.body.appendChild(n)),n}let s=class extends c{constructor(){super(...arguments),this.visible=!1,this.frac=null,this.label="",this.active=new Set}static begin(e=""){return g().begin(e)}begin(e){const t=Symbol("progress");return this.active.add(t),this.label=e,this.frac=null,this.visible=!0,{fraction:r=>{this.active.has(t)&&(this.frac=r)},done:()=>{this.active.delete(t),this.active.size===0&&(this.visible=!1,this.frac=null,this.label="")}}}render(){if(!this.visible)return o``;const e=this.frac!=null;return o`<div
      class="track"
      role="progressbar"
      aria-label=${this.label||"Loading"}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow=${e?Math.round(this.frac*100):""}
    >
      ${e?o`<div
            class="bar determinate"
            style="width:${Math.round(this.frac*100)}%"
          ></div>`:o`<div class="bar indet"></div>`}
    </div>`}};s.styles=b`
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
  `;l([d()],s.prototype,"visible",2);l([d()],s.prototype,"frac",2);l([d()],s.prototype,"label",2);s=l([f("top-progress")],s);export{s as TopProgress};
//# sourceMappingURL=top-progress-BQSzppNw.js.map
