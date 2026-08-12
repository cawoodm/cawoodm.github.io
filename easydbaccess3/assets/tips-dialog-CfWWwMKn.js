import{i as c,m as g,c as u,b as p,d as b,f,r as h,t as v}from"./index-DW2usQQA.js";var m=Object.defineProperty,w=Object.getOwnPropertyDescriptor,r=(t,e,l,s)=>{for(var i=s>1?void 0:s?w(e,l):e,a=t.length-1,d;a>=0;a--)(d=t[a])&&(i=(s?d(e,l,i):d(i))||i);return s&&i&&m(e,l,i),i};const x=p`
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M9 18h6" />
    <path d="M10 21h4" />
    <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2V15h6v-.3c0-.8.4-1.5 1-2A7 7 0 0 0 12 2z" />
  </svg>
`;let n=null;function y(){return n||(n=document.createElement("tips-dialog"),document.body.appendChild(n)),n}let o=class extends c{constructor(){super(...arguments),this.tips=[],this.index=0,this.dontShowAgain=!1,this.viewed=new Set,this.dialogEl=null,this.resolveFn=null,this.onCancel=t=>{t.preventDefault(),this.finish()},this.onKeydown=t=>{if(t.key==="ArrowLeft")this.step(-1);else if(t.key==="ArrowRight")this.step(1);else return;t.preventDefault()}}static open(t){return y().openDialog(t)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const t=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&t&&g(this.dialogEl,t)}openDialog(t){return this.tips=t.tips,this.index=t.startIndex,this.dontShowAgain=!1,this.viewed=new Set,this.markViewed(),new Promise(e=>{this.resolveFn=e,this.updateComplete.then(()=>this.dialogEl?.showModal())})}markViewed(){const t=this.tips[this.index];t&&this.viewed.add(t.id)}step(t){const e=this.index+t;e<0||e>=this.tips.length||(this.index=e,this.markViewed())}finish(){this.dialogEl?.close();const t=this.resolveFn;this.resolveFn=null;const e={dontShowAgain:this.dontShowAgain,viewed:[...this.viewed]};queueMicrotask(()=>t?.(e))}render(){const t=this.tips[this.index];return p`
      <dialog
        @cancel=${this.onCancel}
        @keydown=${e=>{u(e),this.onKeydown(e)}}
      >
        <button type="button" class="close-x" title="Close" @click=${()=>this.finish()}>×</button>
        <form
          @submit=${e=>{e.preventDefault(),this.finish()}}
        >
          <div class="dialog-header">
            <h2>Tip</h2>
            <div class="header-actions">
              <button type="submit" class="primary" autofocus>OK</button>
            </div>
          </div>
          <div class="dialog-body">
            <div class="tip-card">
              <span class="tip-icon">${x}</span>
              <p class="tip">${t?.text??""}</p>
            </div>
            <div class="nav">
              <button type="button" class="nav-btn prev" title="Previous tip" aria-label="Previous tip" ?disabled=${this.index===0} @click=${()=>this.step(-1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 6 9 12 15 18" /></svg>
              </button>
              <p class="counter">Tip ${this.index+1} of ${this.tips.length}</p>
              <button type="button" class="nav-btn next" title="Next tip" aria-label="Next tip" ?disabled=${this.index>=this.tips.length-1} @click=${()=>this.step(1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
              </button>
            </div>
            <label class="dont-show">
              <input
                type="checkbox"
                .checked=${this.dontShowAgain}
                @change=${e=>{this.dontShowAgain=e.target.checked}}
              />
              Don't show again
            </label>
          </div>
        </form>
      </dialog>
    `}};o.styles=[b,f`
      dialog {
        min-width: 420px;
        max-width: 540px;
      }
      .dialog-body {
        gap: 1.15rem;
      }
      .tip-card {
        display: flex;
        gap: 0.9rem;
        align-items: flex-start;
        background: linear-gradient(180deg, #f8fafc, #f1f5f9);
        border: 1px solid #e2e8f0;
        border-radius: 0.5rem;
        padding: 1rem 1.1rem;
      }
      .tip-icon {
        flex: 0 0 auto;
        display: grid;
        place-items: center;
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 50%;
        background: #dbeafe;
        color: #1d4ed8;
      }
      .tip-icon svg {
        width: 1.35rem;
        height: 1.35rem;
      }
      p.tip {
        margin: 0;
        align-self: center;
        font-size: 1.02rem;
        line-height: 1.55;
        color: #0f172a;
      }
      .nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.9rem;
      }
      button.nav-btn {
        display: grid;
        place-items: center;
        width: 2rem;
        height: 2rem;
        padding: 0;
        border: 1px solid #d1d5db;
        border-radius: 50%;
        background: white;
        color: #334155;
        cursor: pointer;
      }
      button.nav-btn:hover:not(:disabled) {
        background: #f1f5f9;
        border-color: #94a3b8;
      }
      button.nav-btn:disabled {
        opacity: 0.35;
        cursor: default;
      }
      button.nav-btn svg {
        width: 1rem;
        height: 1rem;
      }
      p.counter {
        margin: 0;
        min-width: 6.5rem;
        text-align: center;
        font-size: 0.8rem;
        letter-spacing: 0.02em;
        color: #64748b;
      }
      label.dont-show {
        display: flex;
        align-items: center;
        gap: 0.45rem;
        font-size: 0.86rem;
        color: #475569;
        cursor: pointer;
        border-top: 1px solid #e2e8f0;
        padding-top: 0.9rem;
      }
    `];r([h()],o.prototype,"tips",2);r([h()],o.prototype,"index",2);r([h()],o.prototype,"dontShowAgain",2);o=r([v("tips-dialog")],o);export{o as TipsDialog};
//# sourceMappingURL=tips-dialog-CfWWwMKn.js.map
