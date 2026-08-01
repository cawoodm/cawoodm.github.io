import{i as p,m as h,c as u,b,d as y,a as g,r as d,t as m}from"./index-L6mKRAcc.js";var f=Object.defineProperty,v=Object.getOwnPropertyDescriptor,c=(e,t,i,l)=>{for(var o=l>1?void 0:l?v(t,i):t,a=e.length-1,r;a>=0;a--)(r=e[a])&&(o=(l?r(t,i,o):r(o))||o);return l&&o&&f(t,i,o),o};let n=null;function w(){return n||(n=document.createElement("gist-share-dialog"),document.body.appendChild(n)),n}let s=class extends p{constructor(){super(...arguments),this.link="",this.copyLabel="Copy",this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish()},this.onFocusInput=e=>{e.target.select()},this.copy=async()=>{try{await navigator.clipboard.writeText(this.link),this.copyLabel="Copied!"}catch{this.copyLabel="Copy failed"}setTimeout(()=>{this.copyLabel="Copy"},1500)}}static open(e){return w().openDialog(e)}connectedCallback(){super.connectedCallback()}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&h(this.dialogEl,e)}openDialog(e){return this.link=e,this.copyLabel="Copy",new Promise(t=>{this.resolveFn=t,this.updateComplete.then(()=>{this.dialogEl?.showModal();const i=this.shadowRoot?.querySelector("input.link");i?.focus(),i?.select()})})}finish(){this.dialogEl?.close();const e=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>e?.())}render(){return b`
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
            <a
              class="link-preview"
              href=${this.link}
              target="_blank"
              rel="noopener noreferrer"
              title=${this.link}
              >${this.link}</a
            >
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
      a.link-preview {
        display: block;
        max-width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 0.8rem;
        color: #2563eb;
        text-decoration: underline;
        margin-bottom: 0.4rem;
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
    `];c([d()],s.prototype,"link",2);c([d()],s.prototype,"copyLabel",2);s=c([m("gist-share-dialog")],s);export{s as GistShareDialog};
//# sourceMappingURL=gist-share-dialog-CPUTHNVI.js.map
