import{i as u,A as h,b as c,a as m,r as p,t as b}from"./index-KUsedxV1.js";var d=Object.defineProperty,v=Object.getOwnPropertyDescriptor,n=(e,s,r,l)=>{for(var t=l>1?void 0:l?v(s,r):s,a=e.length-1,i;a>=0;a--)(i=e[a])&&(t=(l?i(s,r,t):i(t))||t);return l&&t&&d(s,r,t),t};const f=[{value:"",label:"Auto-detect"},{value:",",label:"Comma  ,"},{value:";",label:"Semicolon  ;"},{value:"	",label:"Tab"},{value:"|",label:"Pipe  |"},{value:"custom",label:"Other…"}];let o=class extends u{constructor(){super(...arguments),this.choice="",this.custom=""}get value(){const e=this.choice==="custom"?this.custom:this.choice;return e?{separator:e}:{}}emit(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}render(){return c`
      <div class="row">
        <label>
          Separator
          <select
            .value=${this.choice}
            @change=${e=>{this.choice=e.target.value,this.emit()}}
          >
            ${f.map(e=>c`<option value=${e.value} ?selected=${e.value===this.choice}>
                  ${e.label}
                </option>`)}
          </select>
        </label>
        ${this.choice==="custom"?c`<label>
              Character
              <input
                type="text"
                maxlength="1"
                placeholder="e.g. ^"
                .value=${this.custom}
                @input=${e=>{this.custom=e.target.value,this.emit()}}
              />
            </label>`:h}
      </div>
      <p class="hint">
        Auto-detect counts commas, semicolons and tabs in the first lines. A
        <code>.tsv</code> or <code>.tab</code> name always means TAB. Choose a separator here to
        override both.
      </p>
    `}};o.styles=m`
    :host {
      display: block;
    }
    label {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      font-size: 0.85rem;
      color: #374151;
    }
    .row {
      display: flex;
      gap: 0.75rem;
    }
    .row > * {
      flex: 1;
    }
    select,
    input[type='text'] {
      font: inherit;
      padding: 0.45rem 0.55rem;
      border: 1px solid #d1d5db;
      border-radius: 0.25rem;
      width: 100%;
      box-sizing: border-box;
      background: white;
    }
    p.hint {
      color: #6b7280;
      font-size: 0.78rem;
      margin: 0.4rem 0 0;
    }
  `;n([p()],o.prototype,"choice",2);n([p()],o.prototype,"custom",2);o=n([b("csv-import-options")],o);export{o as CsvImportOptions};
//# sourceMappingURL=csv-import-options-CIyZoWvl.js.map
