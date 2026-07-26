import{i as h,m as p,c as u,b,d as y,a as g,r as c,t as m}from"./index-C_HbiFPT.js";var f=Object.defineProperty,v=Object.getOwnPropertyDescriptor,d=(e,o,i,l)=>{for(var t=l>1?void 0:l?v(o,i):o,n=e.length-1,r;n>=0;n--)(r=e[n])&&(t=(l?r(o,i,t):r(t))||t);return l&&t&&f(o,i,t),t};let a=null;function w(){return a||(a=document.createElement("gist-share-dialog"),document.body.appendChild(a)),a}let s=class extends h{constructor(){super(...arguments),this.link="",this.copyLabel="Copy",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish()},this.onFocusInput=e=>{e.target.select()},this.copy=async()=>{try{await navigator.clipboard.writeText(this.link),this.copyLabel="Copied!"}catch{this.copyLabel="Copy failed"}setTimeout(()=>{this.copyLabel="Copy"},1500)}}static open(e){return w().openDialog(e)}connectedCallback(){super.connectedCallback()}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&p(this.dialogEl,e)}openDialog(e){return this.link=e,this.copyLabel="Copy",new Promise(o=>{this.resolveFn=o,this.updateComplete.then(()=>{this.dialogEl?.showModal();const i=this.shadowRoot?.querySelector("input.link");i?.focus(),i?.select()})})}finish(){this.dialogEl?.close();const e=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>e?.())}render(){return b`
      <dialog @cancel=${this.onCancel} @keydown=${u}>
        <button type="button" class="close-x" title="Close" @click=${()=>this.finish()}>×</button>
        <form
          @submit=${e=>{e.preventDefault(),this.finish()}}
        >
          <div class="dialog-header">
            <h2>Share workspace</h2>
            <div class="header-actions">
              <button type="submit" class="primary">Close</button>
            </div>
          </div>
          <div class="dialog-body">
            <div class="link-row">
              <input
                class="link"
                type="text"
                readonly
                .value=${this.link}
                @focus=${this.onFocusInput}
              />
              <button type="button" class="ghost copy" @click=${()=>void this.copy()}>
                ${this.copyLabel}
              </button>
            </div>
            <p class="caution">
              ⚠ This link contains your GitHub token — anyone you send it to can read and modify
              your gists. Only share it with people you trust.
            </p>
          </div>
        </form>
      </dialog>
    `}};s.styles=[y,g`
      dialog {
        min-width: 420px;
        max-width: 560px;
      }
      .link-row {
        display: flex;
        gap: 0.5rem;
      }
      input.link {
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 0.8rem;
        padding: 0.45rem 0.55rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        width: 100%;
        box-sizing: border-box;
        background: white;
      }
      button.ghost.copy {
        white-space: nowrap;
      }
      .caution {
        color: #b45309;
        font-size: 0.82rem;
        line-height: 1.5;
        margin: 0;
        background: #fffbeb;
        border: 1px solid #fde68a;
        border-radius: 0.3rem;
        padding: 0.55rem 0.7rem;
      }
    `];d([c()],s.prototype,"link",2);d([c()],s.prototype,"copyLabel",2);s=d([m("gist-share-dialog")],s);export{s as GistShareDialog};
//# sourceMappingURL=gist-share-dialog-QUD-gae7.js.map
