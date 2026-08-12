import{i as m,m as u,w as f,e as g,c as b,A as h,b as c,d as v,f as w,r as p,t as $}from"./index-Dwdkph9w.js";var y=Object.defineProperty,C=Object.getOwnPropertyDescriptor,d=(e,i,t,s)=>{for(var o=s>1?void 0:s?C(i,t):i,r=e.length-1,l;r>=0;r--)(l=e[r])&&(o=(s?l(i,t,o):l(o))||o);return s&&o&&y(i,t,o),o};const n="";function E(e,i,t,s){return(a.instance??k()).open(e,i,t,s)}function k(){const e=document.createElement("column-map-dialog");return document.body.appendChild(e),e}let a=class extends m{constructor(){super(...arguments),this.mapping=[],this.header=[],this.sample=[],this.tableName="",this.targetCols=[],this.dialogEl=null,this.resolveFn=null,this.onCancel=e=>{e.preventDefault(),this.finish(null)},this.submit=e=>{e.preventDefault(),!(this.duplicates().size>0)&&this.finish([...this.mapping])}}connectedCallback(){super.connectedCallback(),a.instance=this}disconnectedCallback(){super.disconnectedCallback(),a.instance===this&&(a.instance=null)}firstUpdated(){this.dialogEl=this.shadowRoot?.querySelector("dialog")??null;const e=this.shadowRoot?.querySelector(".dialog-header");this.dialogEl&&e&&u(this.dialogEl,e),this.dialogEl&&f("column-map",this.dialogEl)}open(e,i,t,s){return this.header=e,this.targetCols=i,this.tableName=t,this.sample=s??[],this.mapping=g(e,i),new Promise(o=>{this.resolveFn=o,this.updateComplete.then(()=>this.dialogEl?.showModal())})}duplicates(){const e=new Set,i=new Set;for(const t of this.mapping)t!==n&&(e.has(t)&&i.add(t),e.add(t));return i}finish(e){this.dialogEl?.close();const i=this.resolveFn;this.resolveFn=null,queueMicrotask(()=>i?.(e))}setTarget(e,i){this.mapping=this.mapping.map((t,s)=>s===e?i:t)}render(){const e=this.duplicates(),i=this.mapping.filter(t=>t!==n).length;return c`
      <dialog @cancel=${this.onCancel} @keydown=${b}>
        <button type="button" class="close-x" title="Close" @click=${()=>this.finish(null)}>×</button>
        <form @submit=${this.submit}>
          <div class="dialog-header">
            <h2>Map columns — ${this.tableName}</h2>
            <div class="header-actions">
              <button type="button" class="ghost" @click=${()=>this.finish(null)}>Cancel</button>
              <button type="submit" class="primary" ?disabled=${e.size>0}>Append</button>
            </div>
          </div>
          <div class="dialog-body">
            <p class="intro">
              Choose which column of <strong>${this.tableName}</strong> each column of the file feeds. Columns are matched by name where possible, else by position. Pick <strong>— skip —</strong> to
              leave a column out.
            </p>
            <div class="grid">
              <div class="head">From the file</div>
              <div class="head"></div>
              <div class="head">Into ${this.tableName}</div>
              ${this.header.map((t,s)=>{const o=this.mapping[s]??n,r=o!==n&&e.has(o);return c`
                  <div class="from">
                    <div class="name" title=${t}>${t||`Column ${s+1}`}</div>
                    ${this.sample[s]?c`<div class="sample" title=${this.sample[s]}>${this.sample[s]}</div>`:h}
                  </div>
                  <div class="arrow">→</div>
                  <select
                    class=${o===n?"skipped":r?"invalid":""}
                    aria-label=${`Target column for ${t||`column ${s+1}`}`}
                    .value=${o}
                    @change=${l=>this.setTarget(s,l.target.value)}
                  >
                    <option value=${n} ?selected=${o===n}>— skip —</option>
                    ${this.targetCols.map(l=>c` <option value=${l.field} ?selected=${l.field===o}>${l.label||l.field}</option> `)}
                  </select>
                `})}
            </div>
            <p class="err">${e.size>0?`Two columns point at the same target: ${[...e].join(", ")}.`:i===0?"Every column is skipped — the append would add empty rows.":h}</p>
          </div>
        </form>
      </dialog>
    `}};a.instance=null;a.styles=[v,w`
      dialog {
        min-width: 520px;
        max-width: 720px;
      }
      p.intro {
        margin: 0;
        font-size: 0.85rem;
        color: #6b7280;
      }
      .grid {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
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
      .from {
        min-width: 0;
      }
      .from .name {
        font-weight: 600;
        font-size: 0.9rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      /* First data row of the file, so the user can tell two same-ish headers
         apart by what is actually in them. */
      .from .sample {
        color: #9ca3af;
        font-size: 0.78rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .arrow {
        color: #9ca3af;
      }
      select {
        font: inherit;
        padding: 0.35rem 0.45rem;
        border: 1px solid #d1d5db;
        border-radius: 0.25rem;
        width: 100%;
        box-sizing: border-box;
        background: white;
      }
      /* A dropped column is not an error, but it should look different from one
         that lands somewhere. */
      select.skipped {
        color: #9ca3af;
        font-style: italic;
      }
      /* Two columns pointing at one target — blocks Append until fixed. */
      select.invalid {
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
    `];d([p()],a.prototype,"mapping",2);d([p()],a.prototype,"header",2);d([p()],a.prototype,"sample",2);d([p()],a.prototype,"tableName",2);a=d([$("column-map-dialog")],a);export{a as ColumnMapDialog,E as mapColumnsToTable};
//# sourceMappingURL=column-map-dialog-l_S4RQ8W.js.map
