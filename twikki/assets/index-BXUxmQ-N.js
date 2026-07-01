(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function coreCommon(tw2) {
  const name2 = "core.common";
  const version2 = "0.26.0";
  const platform2 = "0.28.0";
  const exports$12 = {
    hash,
    simpleSort,
    escapeHtml,
    encoder,
    decoder,
    notEmpty,
    getSetting
  };
  const run2 = () => {
  };
  return { name: name2, version: version2, platform: platform2, exports: exports$12, run: run2 };
  function getSetting(path, def) {
    try {
      return tw2.core.settings.get(path, def);
    } catch {
      return def;
    }
  }
  function simpleSort(a, b) {
    let A = a.title.toLowerCase();
    let B = b.title.toLowerCase();
    if (A < B) return -1;
    else return 1;
  }
  function escapeHtml(unsafe) {
    return unsafe.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  }
  function MD5(d) {
    var r = M(V(Y(X(d), 8 * d.length)));
    return r.toLowerCase();
  }
  function M(d) {
    for (var _, m2 = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++) _ = d.charCodeAt(r), f += m2.charAt(_ >>> 4 & 15) + m2.charAt(15 & _);
    return f;
  }
  function X(d) {
    for (var _ = Array(d.length >> 2), m2 = 0; m2 < _.length; m2++) _[m2] = 0;
    for (m2 = 0; m2 < 8 * d.length; m2 += 8) _[m2 >> 5] |= (255 & d.charCodeAt(m2 / 8)) << m2 % 32;
    return _;
  }
  function V(d) {
    for (var _ = "", m2 = 0; m2 < 32 * d.length; m2 += 8) _ += String.fromCharCode(d[m2 >> 5] >>> m2 % 32 & 255);
    return _;
  }
  function Y(d, _) {
    d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _;
    for (var m2 = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) {
      var h = m2;
      var t = f;
      var g = r;
      var e = i;
      f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m2 = md5_ff(m2, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m2, f, d[n + 2], 17, 606105819), i, m2, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m2 = md5_ff(m2, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m2, f, d[n + 6], 17, -1473231341), i, m2, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m2 = md5_ff(m2, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m2, f, d[n + 10], 17, -42063), i, m2, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m2 = md5_ff(m2, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m2, f, d[n + 14], 17, -1502002290), i, m2, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m2 = md5_gg(m2, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m2, f, d[n + 11], 14, 643717713), i, m2, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m2 = md5_gg(m2, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m2, f, d[n + 15], 14, -660478335), i, m2, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m2 = md5_gg(m2, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m2, f, d[n + 3], 14, -187363961), i, m2, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m2 = md5_gg(m2, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m2, f, d[n + 7], 14, 1735328473), i, m2, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m2 = md5_hh(m2, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m2, f, d[n + 11], 16, 1839030562), i, m2, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m2 = md5_hh(m2, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m2, f, d[n + 7], 16, -155497632), i, m2, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m2 = md5_hh(m2, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m2, f, d[n + 3], 16, -722521979), i, m2, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m2 = md5_hh(m2, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m2, f, d[n + 15], 16, 530742520), i, m2, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m2 = md5_ii(m2, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m2, f, d[n + 14], 15, -1416354905), i, m2, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m2 = md5_ii(m2, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m2, f, d[n + 10], 15, -1051523), i, m2, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m2 = md5_ii(m2, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m2, f, d[n + 6], 15, -1560198380), i, m2, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m2 = md5_ii(m2, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m2, f, d[n + 2], 15, 718787259), i, m2, d[n + 9], 21, -343485551), m2 = safe_add(m2, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e);
    }
    return Array(m2, f, r, i);
  }
  function md5_cmn(d, _, m2, f, r, i) {
    return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m2);
  }
  function md5_ff(d, _, m2, f, r, i, n) {
    return md5_cmn(_ & m2 | ~_ & f, d, _, r, i, n);
  }
  function md5_gg(d, _, m2, f, r, i, n) {
    return md5_cmn(_ & f | m2 & ~f, d, _, r, i, n);
  }
  function md5_hh(d, _, m2, f, r, i, n) {
    return md5_cmn(_ ^ m2 ^ f, d, _, r, i, n);
  }
  function md5_ii(d, _, m2, f, r, i, n) {
    return md5_cmn(m2 ^ (_ | ~f), d, _, r, i, n);
  }
  function safe_add(d, _) {
    var m2 = (65535 & d) + (65535 & _);
    return (d >> 16) + (_ >> 16) + (m2 >> 16) << 16 | 65535 & m2;
  }
  function bit_rol(d, _) {
    return d << _ | d >>> 32 - _;
  }
  function hash(val = "") {
    return MD5(val);
  }
  function encoder(string) {
    const codeUnits = new Uint16Array(string.length);
    for (let i = 0; i < codeUnits.length; i++) {
      codeUnits[i] = string.charCodeAt(i);
    }
    return btoa(String.fromCharCode(...new Uint8Array(codeUnits.buffer)));
  }
  function decoder(encoded) {
    const binary = atob(encoded);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < bytes.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return String.fromCharCode(...new Uint16Array(bytes.buffer));
  }
  function notEmpty(v) {
    return !!v;
  }
}
function coreDom(tw2) {
  const name2 = "core.dom";
  const version2 = "0.28.0";
  const platform2 = "0.28.0";
  const exports$12 = {};
  exports$12.addStyleSheet = addStyleSheet;
  exports$12.addScript = addScript;
  exports$12.loadScript = loadScript;
  exports$12.disableStyleSheet = disableStyleSheet;
  exports$12.enableStyleSheet = enableStyleSheet;
  exports$12.$ = $;
  exports$12.$$ = $$;
  exports$12.htmlToNode = htmlToNode;
  exports$12.nearestAttribute = nearestAttribute;
  exports$12.nearestElementWithAttribute = nearestElementWithAttribute;
  exports$12.nearestElement = nearestElement;
  exports$12.on = on;
  exports$12.offOwner = offOwner;
  const tracked = [];
  const _libs = /* @__PURE__ */ new Map();
  tw2.lib = tw2.lib || {};
  tw2.lib.require = (name3, loader) => {
    if (!_libs.has(name3)) _libs.set(name3, Promise.resolve().then(loader));
    return _libs.get(name3);
  };
  return { name: name2, version: version2, platform: platform2, exports: exports$12 };
  function on(target, event2, handler2, owner2, options) {
    target.addEventListener(event2, handler2, options);
    tracked.push({ target, event: event2, handler: handler2, owner: owner2, options });
  }
  function offOwner(owner2) {
    if (!owner2) return 0;
    let removed = 0;
    for (let i = tracked.length - 1; i >= 0; i--) {
      const l = tracked[i];
      if (l.owner !== owner2) continue;
      l.target.removeEventListener(l.event, l.handler, l.options);
      tracked.splice(i, 1);
      removed++;
    }
    return removed;
  }
  function addStyleSheet(title2, url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.setAttribute("data-stylesheet", title2);
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
  }
  function addScript(title2, url) {
    var script = document.createElement("script");
    script.setAttribute("title", title2);
    script.onload = () => tw2.events.send("script.loaded", title2);
    script.src = url;
    document.head.appendChild(script);
  }
  function loadScript(title2, url, { integrity, global } = {}) {
    let el2 = document.querySelector(`script[data-lib="${title2}"]`);
    if (el2 == null ? void 0 : el2._p) return el2._p;
    el2 = document.createElement("script");
    el2.dataset.lib = title2;
    el2.src = url;
    if (integrity) {
      el2.integrity = integrity;
      el2.crossOrigin = "anonymous";
    }
    el2._p = new Promise((resolve, reject) => {
      el2.onload = () => {
        tw2.events.send("script.loaded", title2);
        resolve(global ? window[global] : void 0);
      };
      el2.onerror = () => reject(new Error(`Failed to load '${title2}' from ${url}`));
    });
    document.head.appendChild(el2);
    return el2._p;
  }
  function disableStyleSheet(title2) {
    let el2 = document.querySelector(`link[data-stylesheet="${title2}"]`);
    if (!el2) throw new Error(`Stylesheet with title '${title2}' not found!`);
    el2.media = "not all";
    el2.disabled = true;
  }
  function enableStyleSheet(title2) {
    let el2 = document.querySelector(`link[data-stylesheet="${title2}"]`);
    if (!el2) throw new Error(`Stylesheet with title '${title2}' not found!`);
    el2.media = "all";
    el2.disabled = false;
  }
  function $() {
    return document.getElementById(...arguments);
  }
  function $$() {
    return document.querySelectorAll(...arguments);
  }
  function htmlToNode(html) {
    const template = document.createElement("template");
    template.innerHTML = String(html).trim();
    const n = template.content.childNodes.length;
    if (n !== 1) throw new Error(`htmlToNode: expected exactly one root node, got ${n}`);
    const el2 = template.content.firstElementChild;
    if (!el2) throw new Error("htmlToNode: root node is not an element");
    return el2;
  }
  function nearestAttribute(el2, attribute, selector) {
    var _a, _b;
    return el2.getAttribute(attribute) || ((_b = (_a = el2.parentElement) == null ? void 0 : _a.closest(selector)) == null ? void 0 : _b.getAttribute(attribute));
  }
  function nearestElementWithAttribute(el2, attribute) {
    var _a;
    let selector = `[${attribute}]`;
    return el2.getAttribute(attribute) ? el2 : (_a = el2.parentElement) == null ? void 0 : _a.closest(selector);
  }
  function nearestElement(el2, selector) {
    var _a;
    return (_a = el2.parentElement) == null ? void 0 : _a.closest(selector);
  }
}
function coreEvents(tw) {
  const name = "twikki.core";
  const version = "0.28.0";
  const platform = "0.28.0";
  dp("TWikki Core started");
  tw.events = /* @__PURE__ */ function() {
    const handlers = [];
    let initialized = false;
    return {
      init() {
        initialized = true;
      },
      send(event2, params2) {
        dp("events.send", event2);
        tw.logging.break(event2);
        let result2 = [];
        handlers.filter((h) => h.event === event2).forEach((h) => {
          if (Array.isArray(params2)) result2.push(h.handler(...params2));
          else result2.push(h.handler(params2));
        });
        return result2;
      },
      // First non-null/undefined result wins; later subscribers don't run. The
      // single-handler convention behind today's 'markdown.render' generalised
      // for renderer.override etc. Subscribers that throw are caught and
      // skipped, matching the soft stance of the rest of the bus.
      request(event2, params2) {
        dp("events.request", event2);
        const matching = handlers.filter((h) => h.event === event2);
        for (const h of matching) {
          let r;
          try {
            r = Array.isArray(params2) ? h.handler(...params2) : h.handler(params2);
          } catch (e) {
            console.warn(`events.request '${event2}' handler threw: ${e.message}`, e.stack);
            continue;
          }
          if (r != null) return r;
        }
        return void 0;
      },
      // Chain `value` through subscribers; each returns the next value. A
      // subscriber that returns `undefined` is treated as a no-op (value
      // passes through unchanged) — symmetric with `request()` and prevents
      // a forgotten `return` from silently poisoning the chain. To explicitly
      // set the value to empty, return `''`. Throws are caught — the failing
      // handler is skipped and the previous value is passed on. Empty
      // subscriber list returns the original value unchanged.
      filter(event2, value, ctx) {
        dp("events.filter", event2);
        let current = value;
        handlers.filter((h) => h.event === event2).forEach((h) => {
          try {
            const next = h.handler(current, ctx);
            if (next !== void 0) current = next;
          } catch (e) {
            console.warn(`events.filter '${event2}' handler threw: ${e.message}`, e.stack);
          }
        });
        return current;
      },
      decode(params2) {
        if (typeof params2 === "string" && params2.match(/^---enc:/)) return tw.core.common.decoder(params2.substring(7));
        return params2;
      },
      // owner is used to ensure we don't call the same function twice for the same event
      subscribe(event, handler, owner) {
        if (!initialized) throw new Error("Events not yet initialized!");
        if (!owner && typeof handler === "string") {
          owner = handler;
          handler = eval(owner);
        }
        if (!owner) owner = handler.name;
        if (!owner) {
          console.warn(`No owner provided in events.subscribe(${event})!`);
          if (window.devMode) throw new Error(`No owner provided in events.subscribe(${event})!`);
        }
        if (handlers.find((h) => h.event === event && h.owner === owner && h.handler === handler)) return dp("Ignoring duplicate event handler", event, owner);
        dp("subscribe", event, owner);
        handlers.push({ event, handler, owner });
      },
      override(event, handler, owner) {
        if (typeof handler === "string") handler = eval(handler);
        for (let i = handlers.length - 1; i >= 0; i--) {
          if (handlers[i].event === event) handlers.splice(i, 1);
        }
        this.subscribe(event, handler, owner);
      },
      // Remove every handler whose owner matches — used by the platform's
      // unloadPlugins() step to tear down a plugin's subscriptions in one
      // call. Owners are typically the plugin's meta.name (the convention
      // every base plugin already follows via subscribe(..., 'PluginName')).
      unsubscribeByOwner(owner2) {
        if (!owner2) return 0;
        let removed = 0;
        for (let i = handlers.length - 1; i >= 0; i--) {
          if (handlers[i].owner === owner2) {
            handlers.splice(i, 1);
            removed++;
          }
        }
        if (removed) dp("unsubscribeByOwner", owner2, removed);
        return removed;
      },
      handlers() {
        return [...handlers];
      },
      clear() {
        dp("clear");
        handlers.length = 0;
      }
    };
  }();
  return { name, version, platform };
}
function coreNotifications(tw2) {
  const name2 = "core.notifications";
  const version2 = "0.25.0";
  const platform2 = "0.27.0";
  const exports$12 = { notify, notifyProgress };
  const run2 = () => {
    tw2.events.subscribe("ui.loading", wireNotifyDiv, "core.notifications");
  };
  function wireNotifyDiv() {
    notifyDiv = tw2.core.dom.$("notify");
    if (!notifyDiv) return;
    notifyDiv.addEventListener("mouseover", notifyMouseOver);
    notifyDiv.addEventListener("mouseout", notifyMouseOut);
    notifyDiv.addEventListener("click", notifyClick);
  }
  let notifyDiv;
  return { name: name2, version: version2, platform: platform2, exports: exports$12, run: run2 };
  function notify(msg, type = "I", stack) {
    if (type === "D" && !tw2.logging.debugMode) return;
    if (type === "D" && !tw2.logging.logFilter.test(msg)) return;
    if (!tw2.core.dom.$("notify")) return silentNotify(msg, type, stack);
    if (window.getComputedStyle(tw2.core.dom.$("new-dialog"), null).getPropertyValue("display") === "block") {
      delete tw2.tmp.notifyId;
      return alert(msg.replaceAll("<br>", "\n"));
    }
    let preserveMsg = "";
    if (tw2.tmp.notifyId) {
      clearTimeout(tw2.tmp.notifyId);
      preserveMsg = notifyDiv.innerHTML ? notifyDiv.innerHTML + "\n" : "";
    }
    const types = {
      S: "📗 Success",
      E: '<b title="Error">📕</b>',
      W: '<b title="Warning">📙</b>',
      D: '<b title="Debug">📓</b>',
      I: '<b title="Info">📘</b>'
    };
    if (type === "E") console.error(preserveMsg + types[type] + ": " + msg, stack || "");
    notifyDiv.innerHTML = (preserveMsg + types[type] + " " + escapeHtml(msg)).replace(/\n/g, "<br>");
    notifyShow();
  }
  function notifyProgress(label = "") {
    const div = tw2.core.dom.$("notify");
    if (!div) return { update() {
    }, done: (msg, type) => silentNotify(msg || label, type || "I") };
    if (tw2.tmp.notifyId) {
      clearTimeout(tw2.tmp.notifyId);
      delete tw2.tmp.notifyId;
    }
    div.innerHTML = '<span class="notify-progress-label"></span> <progress class="notify-progress" max="100" value="0" style="vertical-align:middle;width:8rem"></progress> <span class="notify-progress-pct">0%</span>';
    notifyDiv = div;
    div.querySelector(".notify-progress-label").textContent = label;
    div.className = div.className.replace("notifyHidden", "notifyShow");
    const bar = div.querySelector(".notify-progress");
    const pct = div.querySelector(".notify-progress-pct");
    const lbl = div.querySelector(".notify-progress-label");
    return {
      update(fraction, text2) {
        const v = Math.max(0, Math.min(100, Math.round((Number(fraction) || 0) * 100)));
        bar.value = v;
        pct.textContent = v + "%";
        if (text2 != null) lbl.textContent = text2;
        if (tw2.tmp.notifyId) {
          clearTimeout(tw2.tmp.notifyId);
          delete tw2.tmp.notifyId;
        }
        div.className = div.className.replace("notifyHidden", "notifyShow");
      },
      done(msg, type = "S") {
        notify(msg || label + " complete", type);
      }
    };
  }
  function notifyShow() {
    notifyDiv.className = notifyDiv.className.replace("notifyHidden", "notifyShow");
    tw2.tmp.notifyId = setTimeout(notifyHide, 4e3);
  }
  function notifyHide() {
    notifyDiv.className = notifyDiv.className.replace("notifyShow", "notifyHidden");
    delete tw2.tmp.notifyId;
  }
  function notifyMouseOver() {
    if (tw2.tmp.notifyMouseOverPause) return;
    clearTimeout(tw2.tmp.notifyId);
  }
  function notifyMouseOut() {
    if (tw2.tmp.notifyMouseOverPause) return;
    notifyShow();
  }
  function notifyClick() {
    notifyHide();
    tw2.tmp.notifyMouseOverPause = true;
    window.setTimeout(() => delete tw2.tmp.notifyMouseOverPause, 500);
  }
  function silentNotify(msg, type, stack) {
    if (type === "E") console.error(msg);
    else if (type === "W") console.warn(msg);
    else if (type === "D") console.debug(msg);
    else console.log(msg);
    if (stack) console.error(stack);
  }
  function escapeHtml(unsafe) {
    return unsafe.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  }
}
function corePackaging(tw2) {
  const name2 = "core.packaging";
  const version2 = "0.28.0";
  const platform2 = "0.28.0";
  const PRESERVED_TAGS = ["$CodeDisabled"];
  const exports$12 = {
    fetchPackage,
    loadPackageFromURL,
    reloadPackageFromUrl,
    loadList
  };
  function offlineFallback({ online, hadCachedCopy }) {
    if (!online && hadCachedCopy) return "use-cache";
    return "fail";
  }
  tw2.extensions.registerMacro(
    "packages",
    "import",
    ({ name: name3, url, filter, overWrite, doNotSave }) => {
      if (!name3) throw new Error("ERROR: No name supplied to packages.import macro!");
      if (!url) throw new Error("ERROR: No url supplied to packages.import macro!");
      return tw2.ui.button(`Import: ${name3} ${filter ? " (" + filter + ")" : ""}`, "package.reload.url", { url, name: name3, filter, overWrite, doNotSave });
    },
    {
      description: "Button importing a package from a URL (opens the import dialog).",
      example: "<<packages.import name:website url:packages/website.json>>"
    }
  );
  tw2.extensions.registerCommand({
    label: "Import package from URL…",
    run: () => {
      const url = prompt("Package URL to import:");
      if (!url) return;
      const name3 = (url.split("/").pop() || "").replace(/\.json$/i, "");
      tw2.events.send("package.reload.url", { url, name: name3 });
    }
  });
  return { name: name2, version: version2, platform: platform2, exports: exports$12 };
  async function fetchPackage({ url, name: name3 = "" }) {
    var _a, _b;
    url = tw2.core.buildUrl(url);
    dp("Fetching tiddler package", name3, url);
    try {
      let obj = await httpGetJSON(url, name3, {});
      return { name: name3, url, tiddlers: Array.isArray(obj.tiddlers) ? obj.tiddlers : [] };
    } catch (e) {
      const online = typeof navigator === "undefined" || navigator.onLine !== false;
      const hadCachedCopy = !!(name3 && ((_b = (_a = tw2.tiddlers) == null ? void 0 : _a.all) == null ? void 0 : _b.some((t) => t.package === name3)));
      if (offlineFallback({ online, hadCachedCopy }) === "use-cache") {
        tw2.ui.notify(`Offline: using cached copy of package '${name3}'`, "I");
        return { name: name3, url, cached: true, tiddlers: null };
      }
      tw2.ui.notify(`Failed to load tiddler package '${name3}' from ${url} (see console log)`, "E", e.stack);
      return null;
    }
  }
  async function loadPackageFromURL({ url, name: name3 = "", filter = "", overWrite = false, doNotSave = false, noOverWrite = false }) {
    let pck = await fetchPackage({ url, name: name3 });
    if (!pck) return 0;
    if (pck.cached) return 0;
    return loadList(pck.tiddlers, { name: name3, overWrite, filter, doNotSave, noOverWrite });
  }
  async function reloadPackageFromUrl(pck) {
    let count = await loadPackageFromURL(pck);
    tw2.events.send("ui.reload");
    tw2.events.send("save");
    tw2.ui.notify(`${count} tiddlers imported from package ${pck.name || pck.url}`, "S");
  }
  function loadList(list, { name: name3, filter, overWrite = false, doNotSave = false, noOverWrite = false, selectedTitles = null } = {}) {
    let count = 0;
    if (!Array.isArray(list)) return tw2.ui.notify(`packages.loadList(${name3}): No tiddlers array returned!`, "E");
    filter = filter && filter !== "*" ? new RegExp(filter, "i") : null;
    tw2.tiddlers.all.filter((t) => t.package === name3).map((t) => t.title).filter((title2) => !list.find((t) => t.title === title2)).forEach((title2) => tw2.run.deleteTiddler(title2, true));
    list.forEach((t) => {
      if (selectedTitles && !selectedTitles.has(t.title)) return;
      t.created = new Date(t.created || t.updated || /* @__PURE__ */ new Date());
      t.updated = new Date(t.updated || /* @__PURE__ */ new Date());
      let issues = tw2.util.tiddlerValidation(t);
      if (issues.length) return tw2.ui.notify(`Tiddler '${t.title}' is invalid: ` + issues.join("<br>"));
      if (filter && !filter.test(t.title)) return dp("Skipping import of tiddler", t.title);
      const existingTiddler = tw2.run.getTiddler(t.title, false);
      if (noOverWrite && existingTiddler) return;
      if (overWrite !== true && existingTiddler) {
        if (!existingTiddler.isRawShadow && tiddlerDiff(existingTiddler, t)) {
          if (existingTiddler.tags.includes("$NoImport")) return;
          if (!confirm(`Package '${name3}' will overwrite tiddler '${t.title}'! OK to proceed?`)) return;
        }
      }
      if (doNotSave) t.doNotSave = true;
      if (existingTiddler == null ? void 0 : existingTiddler.tags.includes("$NoImport")) return tw2.ui.notify(`Not importing $NoImport tiddler '${t.title}'!`, "E");
      t.package = name3;
      if (existingTiddler) {
        PRESERVED_TAGS.forEach((tag) => {
          var _a;
          if (((_a = existingTiddler.tags) == null ? void 0 : _a.includes(tag)) && !t.tags.includes(tag)) t.tags.push(tag);
        });
        tw2.run.updateTiddlerHard(t.title, t);
      } else tw2.run.addTiddlerHard(t);
      count++;
    });
    return count;
  }
  function tiddlerDiff(t1, t2) {
    if (t1.title !== t2.title) return "title";
    if (t1.text !== t2.text) return "text";
    if (t1.tags.join(" ") !== t2.tags.join(" ")) return "tags";
    return false;
  }
  async function httpGetJSON(url, name3, headers = {}) {
    let res;
    try {
      res = await fetch(url, { headers });
    } catch (e) {
      throw new Error(`Failed to load package '${name3}' with network error from ${url}: ${e.message}`);
    }
    if (!res.ok) throw new Error(`Failed to load package '${name3}' with HTTP Status '${res.status}' from ${url}`);
    let obj;
    try {
      obj = await res.json();
      return obj;
    } catch (e) {
      throw new Error(`Failed to load package '${name3}' with invalid JSON (see console log) from ${url}: ${e.message}`);
    }
  }
}
function coreParams() {
  const name = "core.params";
  const version = "0.25.0";
  const platform = "0.28.0";
  const reDoubleQuoted = /^["](.+)["]$/g;
  const reSingleQuoted = /^['](.+)[']$/g;
  const reEvalExpression = /^\$\{([^}]+)\}$/g;
  const exports$1 = { parseParams, evalParam, enc };
  const run = () => {
  };
  return { name, version, platform, exports: exports$1, run };
  function parseParams(params2) {
    if (params2 == null ? void 0 : params2.match(/^[\[\{]/)) return JSON.parse(params2);
    if (params2 == null ? void 0 : params2.match(/^[a-z0-9_]+:/i)) return strToObject(params2);
    if (reEvalExpression.test(params2)) {
      let res = evalParam(params2);
      if (typeof res === "object") return res;
      else return [res];
    }
    return paramsToArray(params2);
  }
  function strToObject(str) {
    let obj = {};
    paramsToArray(str).map((k) => k.trim()).forEach((k) => {
      let val = getKeyVal(k, ":");
      let prop = Object.keys(val)[0];
      val[prop] = getTypedParam(val[prop]);
      Object.assign(obj, val);
    });
    return obj;
  }
  function paramsToArray(str) {
    if (typeof str === "undefined" || str === "") return [];
    let res = str.match(/\\?.|^$/g).reduce(
      (p, c) => {
        if (c === '"') {
          p.quote ^= 1;
        } else if (!p.quote && c === " ") {
          p.a.push("");
        } else {
          p.a[p.a.length - 1] += c.replace(/\\(.)/, "$1");
        }
        return p;
      },
      { a: [""] }
    ).a;
    return getTypedParams(res);
  }
  function getKeyVal(x, delim) {
    const i = x.indexOf(delim);
    if (i < 0) return { [x.trim()]: "" };
    return { [x.slice(0, i).trim()]: x.slice(i + 1).trim() };
  }
  function getTypedParams(arr) {
    return arr.map(getTypedParam) || [];
  }
  function getTypedParam(val) {
    if (val === "null") return null;
    if (strIsBoolean(val)) return val === "true";
    if (strIsNumber(val)) return parseFloat(val);
    if (reDoubleQuoted.test(val)) return val.replace(reDoubleQuoted, "$1");
    if (reSingleQuoted.test(val)) return val.replace(reSingleQuoted, "$1");
    if (reEvalExpression.test(val)) return evalParam(val);
    return val;
  }
  function evalParam(param) {
    return eval(param.replace(reEvalExpression, "$1"));
  }
  function strIsBoolean(str) {
    return ["true", "false"].includes(str);
  }
  function strIsNumber(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
  }
  function enc(param2) {
    return `---enc:${tw.core.common.encoder(JSON.stringify(param2))}`;
  }
}
function coreRender(tw) {
  const name = "core.render";
  const version = "0.1.1";
  const platform = "0.28.0";
  const reTiddlerTitle = /[a-z0-9_\-\.\(\)\s\$\ud83c\ud000-\udfff\ud83d\ud000-\udfff\ud83e\ud000-\udfff]+/gi;
  const reTiddlerRef = new RegExp(`${reTiddlerTitle.source}(?:::${reTiddlerTitle.source})?`, "gi");
  const reMacros = new RegExp("(?<!`)<<([a-z_][a-z_0-9\\.]+)\\s?([^>]+)?>>", "gi");
  const reInclusion = RegExp.compose(new RegExp("(?<!`)\\{\\{(reTiddlerRef)\\|?([^\\}]+)?}}", "gi"), { reTiddlerRef });
  const reLinks = RegExp.compose(/\[\[(reTiddlerRef)]]/gi, { reTiddlerRef });
  const exports$1 = {
    renderTWikki,
    renderTiddler,
    renderAllTiddlers,
    rerenderTiddler,
    createTiddlerElement,
    tiddlerDetails,
    loadTemplates,
    maskCodeRegions,
    replaceFrom,
    getMacros,
    getTiddlerLinks,
    getInclusions,
    makeTiddlerText,
    makeTiddlerTagLinks,
    tagPickerHtml,
    tiddlerSpanInclude,
    macroInclude,
    renderMarkdown,
    renderPlainText
  };
  Object.assign(tw.run, {
    renderAllTiddlers,
    rerenderTiddler
  });
  tw.extend = tw.extend || { tiddlerDetails: {} };
  tw.lib = tw.lib || {};
  tw.lib.markdown = renderMarkdown;
  window.markdown = renderMarkdown;
  return { name, version, platform, exports: exports$1 };
  function renderTiddler(title2) {
    return renderTWikki({ text: tw.core.tiddlers.getTiddlerTextRaw(title2), title: title2 });
  }
  function renderTWikki({ text, title, validation }) {
    const { masked, restore } = maskCodeRegions(text);
    let result = masked;
    try {
      function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      getMacros(result).forEach((m) => {
        var _a;
        let macroNameOrig = m[1];
        let macroName = macroNameOrig;
        const macroCommand = new RegExp(`(?<!\`)<<${macroNameOrig}`);
        const indexOfMacro = result.search(macroCommand);
        let dbg = 0;
        if (dbg) ;
        let err;
        let macroFunction;
        try {
          macroFunction = eval(`tw.macros.${macroName}`);
        } catch (e) {
          err = e;
        }
        if (!macroFunction)
          try {
            macroName = `core.${macroName}`;
            macroFunction = eval(`tw.macros.${macroName}`);
          } catch (e) {
            err = e;
          }
        if (!macroFunction) {
          let errmsg = `Unknown macro <<${m[1]}>> in tiddler '${title}'!`;
          console.warn(errmsg, (err == null ? void 0 : err.message) || "", err == null ? void 0 : err.stack);
          result = replaceFrom(result, indexOfMacro, m[0], `<span class="error">ERROR: Unknown macro &lt;&lt;${m[1]}>></span>`);
          if (validation) throw new Error(errmsg);
          return;
        }
        if ((_a = m[2]) == null ? void 0 : _a.match(/;/)) console.warn('Deprecated ";" in macroParams', macroName, title);
        let macroParams = m[2] || "";
        try {
          macroParams = tw.core.params.parseParams(macroParams);
        } catch (e) {
          let errmsg = `Macro '${macroName}' has invalid parameters '${m[2]}' in tiddler '${title}': ${e.message}`;
          console.warn(errmsg, e.stack);
          result = replaceFrom(result, indexOfMacro, m[0], `<span class="error">${errmsg}</span>`);
          if (validation) throw e;
          return;
        }
        if (dbg) ;
        if (tw.logging.trace) {
          let newText = Array.isArray(macroParams) ? macroFunction(...macroParams) : macroFunction(macroParams);
          result = replaceFrom(result, indexOfMacro, m[0], newText);
          return;
        }
        try {
          let newText = Array.isArray(macroParams) ? macroFunction(...macroParams) : macroFunction(macroParams);
          if (typeof newText === "undefined") console.warn("Macro returned undefined!", macroName, "in", title);
          result = replaceFrom(result, indexOfMacro, m[0], newText);
        } catch (e) {
          let errmsg = `Macro '${macroName}' failed in tiddler '${title}'!`;
          if (e.message === "macroFunction is not a function") errmsg += " The macro is unknown or not registered!";
          else errmsg += e.message;
          console.warn(errmsg, e.stack);
          result = result.replace(macroCommand, `<span class="error">${errmsg} (see console log)</span>`);
          if (validation) throw e;
          return;
        }
      });
      getInclusions(result).forEach((m2) => {
        let includedTitle = m2[1];
        try {
          const inclusionSearch = new RegExp(`(?<!\`)${escapeRegExp("{{" + includedTitle)}`);
          const indexOfInclusion = result.search(inclusionSearch);
          if (indexOfInclusion < 0) throw new Error(`Unable to locate inclusion of '${includedTitle}'!`);
          let params2 = m2[2];
          params2 = tw.core.params.parseParams(params2);
          let text2 = tw.core.tiddlers.getTiddlerTextReplaced(includedTitle, params2);
          if (!text2) text2 = `No tiddler '${includedTitle}' found - let's [create it](#${includedTitle})!`;
          result = replaceFrom(result, indexOfInclusion, m2[0], text2);
        } catch (e) {
          result = `<span class="error">ERROR: Inclusion of "${includedTitle}" Failed: ${e.message}</span>`;
          console.error(`getInclusions "${includedTitle}" inside "${title}" Failed: ${e.message}`, e.stack);
        }
      });
      getTiddlerLinks(result).forEach((m2) => {
        let linkName = m2[1];
        let linkURL = m2[1];
        let wikiLink = `[${linkName}](#${linkURL.replace(/ /g, "%20")})`;
        result = result.replace(m2[0], wikiLink);
      });
    } catch (e) {
      console.warn(`renderTWikki "${title}" Failed: ${e.message}`, e.stack);
      if (validation) throw e;
      return `<span class="error">ERROR: renderTWikki '${title}' Failed: ${e.message}</span>`;
    }
    return restore(result);
  }
  function renderAllTiddlers() {
    tw.core.dom.divVisibleTiddlers.innerHTML = "";
    tw.tiddlers.visible.forEach((t) => tw.run.showTiddler(t));
    tw.events.send("ui.ready", tw.tiddlers.visible);
  }
  function rerenderTiddler(title2) {
    let el2 = tw.core.tiddlers.getTiddlerElement(title2);
    if (!el2) return;
    let tiddler = tw.core.tiddlers.getTiddler(title2);
    if (!tiddler) throw new Error(`rerenderTiddler '${title2}' failed!`, "E");
    let newElement = createTiddlerElement(tiddler);
    el2.replaceWith(newElement);
    tw.events.send("tiddler.rendered", { tiddler, newElement });
  }
  function createTiddlerElement(t, template) {
    template = template || tw.templates.TiddlerDisplay;
    let modified = t.updated ? new Date(t.updated).toDateString() + " " + new Date(t.updated).toLocaleTimeString() : "";
    let id = tw.core.common.hash(t.title);
    let html = new tw.core.templater.Templater(template).render({
      id,
      fullText: makeTiddlerText(t),
      editDisabled: t.tags.includes("$NoEdit") ? "disabled" : "",
      notSection: !t.isSection,
      // template uses {{!isSection}} / {{!notSection}} (negation blocks only)
      tagLinks: makeTiddlerTagLinks(t.tags),
      modified,
      ...tiddlerDetails(t),
      ...t
    });
    let newElement;
    try {
      newElement = tw.core.dom.htmlToNode(html);
    } catch (e) {
      console.error(`createTiddlerElement '${t.title}':`, e.message);
      newElement = tw.core.dom.htmlToNode(
        `<div class="tiddler error"><div class="title">${tw.core.common.escapeHtml(t.title)}</div><div class="text">Template error: ${tw.core.common.escapeHtml(e.message)}</div></div>`
      );
    }
    newElement.setAttribute("data-tiddler-id", id);
    newElement.setAttribute("data-tiddler-title", t.title);
    tw.events.send("tiddler.element.created", { title: t.title, newElement });
    return newElement;
  }
  function tiddlerDetails(t) {
    let res = {};
    Object.keys(tw.extend.tiddlerDetails).forEach((k) => {
      res[k] = tw.extend.tiddlerDetails[k](t);
    });
    return res;
  }
  function loadTemplates() {
    tw.templates.MainLayout = renderTiddler("$MainLayout");
    tw.templates.TiddlerDisplay = renderTiddler("$TiddlerDisplay");
    tw.templates.TiddlerPreview = renderTiddler("$TiddlerPreview");
    tw.templates.TiddlerTrashed = renderTiddler("$TiddlerTrashed");
    tw.templates.TiddlerSearchResult = renderTiddler("$TiddlerSearchResult");
  }
  function replaceFrom(text2, index, search, replace) {
    return text2.substring(0, index) + text2.substring(index).replace(search, replace);
  }
  function maskCodeRegions(text2) {
    const store = [];
    const stash = (m2) => {
      const token = `${store.length}`;
      store.push(m2);
      return token;
    };
    let masked2 = text2.replace(/(^|\n)( {0,3}```[^\n]*\n[\s\S]*?\n {0,3}```)(?=\n|$)/g, (_, pre, fence) => pre + stash(fence));
    masked2 = masked2.replace(/`[^`\n]*`/g, stash);
    const restore2 = (s) => s.replace(/(\d+)/g, (_, i) => store[Number(i)]);
    return { masked: masked2, restore: restore2 };
  }
  function getMacros(text2) {
    return Array.from(text2.matchAll(reMacros));
  }
  function getTiddlerLinks(text2) {
    return Array.from(text2.matchAll(reLinks));
  }
  function getInclusions(text2) {
    return Array.from(text2.matchAll(reInclusion));
  }
  function makeTiddlerText(tiddler) {
    const { title: title2, text: text2, type } = tiddler;
    const input = tw.events.filter("renderer.pre", text2, { tiddler });
    let output = tw.events.request("renderer.override", { tiddler, text: input });
    if (output == null) {
      const markdownTypes = ["markdown", "keyval", "list", "table"];
      const codeTypes = ["macro", "script/js", "css", "json", "html/template"];
      if (type === "x-twikki") {
        output = renderMarkdown(renderTWikki({ text: input, title: title2 }));
      } else if (markdownTypes.includes(type)) {
        output = renderMarkdown(input);
      } else if (codeTypes.includes(type)) {
        output = `<pre><code>${tw.core.common.escapeHtml(input)}</code></pre>`;
      } else if (type === "html") {
        output = input;
      } else {
        output = `<pre>${tw.core.common.escapeHtml(input)}</pre>`;
      }
    }
    return tw.events.filter("renderer.post", output, { tiddler });
  }
  function makeTiddlerTagLinks(tags) {
    return tags.map(tagPickerHtml).join("");
  }
  function tagPickerHtml(tag) {
    if (!tag) return "";
    let label = tw.core.common.escapeHtml(tag);
    let arg = label.replace(/"/g, "&quot;");
    return `<span class="picker tag-picker" data-event="tiddler.show" data-source="tag" data-source-arg="${arg}">  <button class="picker-trigger pck-pill">${label}</button>  <span class="picker-menu" hidden></span></span>`;
  }
  function tiddlerSpanInclude(el2) {
    let title2 = el2.getAttribute("tiddler-include");
    try {
      let tiddler = tw.core.tiddlers.getTiddler(title2);
      if (!tiddler) throw new Error(`Unknown tiddler '${title2}' to include!`);
      el2.innerHTML = makeTiddlerText(tiddler).replace(/<(\/)?p>/g, "<$1div>");
      if (el2.firstElementChild.tagName === "P") el2.innerHTML = el2.firstElementChild.innerHTML;
    } catch (e) {
      el2.innerHTML = `<span class="error">ERROR: Include "${title2}" Failed: ${e.message}</span>`;
      console.error(`tiddlerSpanInclude "${title2}" Failed: ${e.message}`, e.stack);
    }
    tw.events.subscribe(
      "tiddler.refresh",
      (t) => {
        if (t === title2) {
          tiddlerSpanInclude(el2);
        }
      },
      "handle.tiddler.refresh." + title2
    );
  }
  function macroInclude(el) {
    let macroName = el.getAttribute("macro");
    let macroParams = el.getAttribute("params");
    try {
      let params = tw.core.params.parseParams(macroParams);
      let macroFunction;
      let err;
      try {
        macroFunction = eval(`tw.macros.${macroName}`);
      } catch (e) {
        err = e;
      }
      if (!macroFunction)
        try {
          macroName = `core.${macroName}`;
          macroFunction = eval(`tw.macros.${macroName}`);
        } catch (e) {
          err = e;
        }
      if (!macroFunction) throw new Error(err);
      let result = Array.isArray(macroParams) ? macroFunction(...params) : macroFunction(params);
      el.innerHTML = result;
    } catch (e) {
      el.innerHTML = `<span class="error">ERROR: Include "${macroName}" Failed: ${e.message}</span>`;
      console.error(`tiddlerSpanInclude "${macroName}" Failed: ${e.message}`, e.stack);
    }
  }
  function renderMarkdown(text2) {
    const results = tw.events.send("markdown.render", text2);
    if ((results == null ? void 0 : results.length) > 1 && !renderMarkdown.warned) {
      console.warn(`${results.length} 'markdown.render' handlers subscribed (first one wins) — replacements should use tw.events.override()!`);
      renderMarkdown.warned = true;
    }
    return (results == null ? void 0 : results[0]) ?? renderPlainText(text2);
  }
  function renderPlainText(text2) {
    return String(text2 ?? "").split(/\n{2,}/).map((p) => `<p>${tw.core.common.escapeHtml(p).replace(/\n/g, "<br>")}</p>`).join("");
  }
}
function coreSearch(tw2) {
  const name2 = "core.search";
  const version2 = "0.26.0";
  const platform2 = "0.28.0";
  const exports$12 = {
    search,
    tagFilter
  };
  const EXACT_TITLE_MATCH = 4;
  const TITLE_MATCH = 3;
  const TEXT_MATCH = 1;
  const reTag = /tag:\s*(\S+)\s?/;
  const rePck = /pck:\s*(\S+)\s?/;
  const reType = /type:\s*(\S+)\s?/;
  const run2 = () => {
    tw2.events.subscribe("ui.loading", wireUIEvents, name2);
    tw2.events.subscribe("search", searchQuery, name2);
    tw2.events.subscribe("search.advanced", searchQueryAdvanced, name2);
  };
  const settings = {
    "search.includeTags": { default: "", type: "text", description: "Only show tiddlers with these tags in search (comma-separated; empty = all)" },
    "search.excludeTags": { default: "$NoSearch, $Theme, $StyleSheet, $Template", type: "text", description: "Hide tiddlers with these tags from search; applied after the include list (comma-separated)" }
  };
  return { name: name2, version: version2, platform: platform2, exports: exports$12, run: run2, settings };
  function searchQueryAdvanced({ all = false, title: title2, tag, pck, type, id }) {
    let q = "";
    if (title2) q += " " + title2;
    if (tag) q += " tag:" + tag;
    if (pck) q += " pck:" + pck;
    if (type) q += " type:" + type;
    let results = search(q, tw2.tiddlers.all, { all });
    if (id) searchShowResults(results, id);
    return results;
  }
  function searchQuery(q) {
    tw2.core.dom.$("search").value = q.trim();
    searchNow();
  }
  function searchNow() {
    searchShowResults(search(tw2.core.dom.$("search").value, tw2.tiddlers.all));
  }
  function searchFocus() {
    searchShowResults();
    tw2.core.dom.$("search-results").style.display = "";
  }
  function searchLoseFocus() {
    window.setTimeout(() => {
      tw2.core.dom.$("search-results").style.display = "none";
    }, 150);
  }
  function searchShowResults(list, targetId = "search-results") {
    let target = tw2.core.dom.$(targetId);
    target.style.display = "";
    if (!list) return searchNow();
    target.innerHTML = "";
    list.forEach((t) => {
      displayTiddlerLink(t, target);
    });
    if (targetId === "search-results") positionDrawerResults();
  }
  function positionDrawerResults() {
    const results = tw2.core.dom.$("search-results");
    const input = tw2.core.dom.$("search");
    if (!results || !input) return;
    if (window.matchMedia("(max-width: 600px)").matches) {
      results.style.top = Math.round(input.getBoundingClientRect().bottom) + "px";
    } else if (results.style.top) {
      results.style.top = "";
    }
  }
  function displayTiddlerLink({ title: title2, type }, target) {
    let newElement = document.createElement("div");
    newElement.className = "tiddler-list";
    if (type) {
      newElement.setAttribute("data-msg", "tiddler.show");
      newElement.setAttribute("data-params", JSON.stringify(title2));
      newElement.appendChild(newTiddlerLink({ title: title2 }));
    } else {
      newElement.innerHTML = title2;
    }
    target = target || tw2.core.dom.divSearchResults;
    target.insertAdjacentElement("beforeend", newElement);
  }
  function newTiddlerLink({ title: title2 }) {
    let newElement = document.createElement("a");
    newElement.setAttribute("data-msg", "tiddler.show");
    newElement.setAttribute("data-params", JSON.stringify(title2));
    newElement.setAttribute("data-tiddler-backref", tw2.core.common.hash(title2));
    newElement.setAttribute("href", "javascript:false;");
    newElement.innerText = title2;
    return newElement;
  }
  function search(q, list, options = {}) {
    tw2.logging.break("search");
    let results = list.sort(alphabetically).map(simpleSearch(q, options)).filter(notEmpty).sort(ranking);
    let title2 = "No results!";
    if (!q.match(/^\$/) && !options.all) title2 += ` Type '$${q}' to search hidden tiddlers!`;
    return results.length ? results.map((t) => t.tiddler) : [{ title: title2 }];
  }
  function simpleSearch(q, options = {}) {
    var _a, _b, _c;
    q = q.trim().toLowerCase();
    const Q = q;
    let searchAll = q[0] === "$";
    if (searchAll) q = q.substring(1);
    searchAll = searchAll || options.all;
    let searchTag = (_a = q.match(reTag)) == null ? void 0 : _a[1];
    if (searchTag) q = q.replace(reTag, "");
    let searchPackage = (_b = q.match(rePck)) == null ? void 0 : _b[1];
    if (searchPackage) q = q.replace(rePck, "");
    let searchType = (_c = q.match(reType)) == null ? void 0 : _c[1];
    if (searchType) q = q.replace(reType, "");
    q = q.trim();
    const tagVisible = tagFilter();
    const applyTagFilter = !searchAll && !searchTag;
    return (t) => {
      if (!searchAll && t.title[0] === "$") return;
      if (applyTagFilter && !tagVisible(t)) return;
      let titleText = t.title.toLowerCase();
      let fullText = titleText + t.text.toLowerCase();
      if (searchAll) fullText += t.type;
      let rank = 1;
      if (searchTag && !t.tags.find((t2) => t2.toLowerCase() === searchTag)) rank = 0;
      if (searchPackage && searchPackage !== t.package) rank = 0;
      if (searchType && searchType !== t.type) rank = 0;
      if (rank === 0) return;
      if (q) {
        rank = titleText.indexOf(q) >= 0 ? rank + TITLE_MATCH : fullText.indexOf(q) >= 0 ? rank + TEXT_MATCH : 0;
        if (titleText === q || titleText === Q) rank += EXACT_TITLE_MATCH;
      } else if (Q === "") {
        rank = 1;
      }
      if (rank === 0) return;
      return {
        rank,
        tiddler: t
      };
    };
  }
  function alphabetically(a, b) {
    let A = a.title.toLowerCase();
    let B = b.title.toLowerCase();
    if (A < B) return -1;
    else return 1;
  }
  function ranking(a, b) {
    return a.rank > b.rank ? -1 : 1;
  }
  function notEmpty(v) {
    return !!v;
  }
  function parseTagList(v) {
    return String(v || "").split(",").map((t) => t.trim().toLowerCase()).filter(Boolean);
  }
  function tagFilter() {
    const includeTags = parseTagList(tw2.core.common.getSetting("search.includeTags"));
    const excludeTags = parseTagList(tw2.core.common.getSetting("search.excludeTags"));
    if (!includeTags.length && !excludeTags.length) return () => true;
    return (t) => {
      const tags = (t.tags || []).map((x) => x.toLowerCase());
      if (includeTags.length && !includeTags.some((tag) => tags.includes(tag))) return false;
      if (excludeTags.some((tag) => tags.includes(tag))) return false;
      return true;
    };
  }
  function wireUIEvents() {
    var _a, _b, _c;
    (_a = tw2.core.dom.$("search")) == null ? void 0 : _a.addEventListener("keyup", searchNow);
    (_b = tw2.core.dom.$("search")) == null ? void 0 : _b.addEventListener("focus", searchFocus);
    (_c = tw2.core.dom.$("search")) == null ? void 0 : _c.addEventListener("blur", searchLoseFocus);
    tw2.core.dom.$("search-results").style.display = "none";
    tw2.core.dom.$("search-results").addEventListener("click", publishSearchClick);
    document.addEventListener("click", onDocumentClick);
    wireTopbarSearch();
    relocateSearch();
  }
  function wireTopbarSearch() {
    var _a;
    const toggle = tw2.core.dom.$("topbar-search-toggle");
    const close = tw2.core.dom.$("topbar-search-close");
    if (!toggle) return;
    toggle.addEventListener("click", () => {
      var _a2, _b;
      (_a2 = document.getElementById("main-topbar")) == null ? void 0 : _a2.classList.add("searching");
      (_b = tw2.core.dom.$("search")) == null ? void 0 : _b.focus();
      searchFocus();
    });
    close == null ? void 0 : close.addEventListener("click", closeTopbarSearch);
    (_a = tw2.core.dom.$("search-results")) == null ? void 0 : _a.addEventListener("click", (e) => {
      if (e.target.closest('[data-msg="tiddler.show"]')) closeTopbarSearch();
    });
  }
  function closeTopbarSearch() {
    var _a;
    (_a = document.getElementById("main-topbar")) == null ? void 0 : _a.classList.remove("searching");
    const input = tw2.core.dom.$("search");
    if (input) input.value = "";
    const results = tw2.core.dom.$("search-results");
    if (results) {
      results.innerHTML = "";
      results.style.display = "none";
    }
  }
  function relocateSearch() {
    const box = tw2.core.dom.$("explorer-search");
    const sidebar = tw2.core.dom.$("sidebar");
    const explorerNav = tw2.core.dom.$("explorer");
    const topbar = tw2.core.dom.$("main-topbar");
    const close = tw2.core.dom.$("topbar-search-close");
    if (!box || !sidebar || !topbar) return;
    const mq = window.matchMedia("(max-width: 600px)");
    const place = () => {
      if (mq.matches) {
        topbar.insertBefore(box, close || null);
      } else {
        closeTopbarSearch();
        sidebar.insertBefore(box, explorerNav || null);
      }
    };
    place();
    mq.addEventListener("change", place);
  }
  function onDocumentClick(event2) {
    let results = tw2.core.dom.$("search-results");
    if (!results || results.style.display === "none") return;
    if (event2.target.closest("#search-results")) return;
    if (event2.target.closest("#search")) return;
    if (event2.target.closest("#topbar-search-toggle")) return;
    results.style.display = "none";
  }
  function publishSearchClick(e) {
    const row = e.target.closest('[data-msg="tiddler.show"][data-params]');
    if (!row) return;
    let title2;
    try {
      title2 = JSON.parse(row.getAttribute("data-params"));
    } catch {
      return;
    }
    const term = tw2.core.dom.$("search").value || "";
    tw2.events.send("search.result.clicked", { title: title2, term });
  }
}
function coreSections() {
  const name2 = "core.sections";
  const version2 = "0.24.0";
  const platform2 = "0.27.0";
  const FENCE_TYPES = {
    js: "script/js",
    javascript: "script/js",
    css: "css",
    json: "json",
    html: "html/template",
    md: "markdown",
    markdown: "markdown",
    "x-twikki": "x-twikki",
    keyval: "keyval",
    list: "list",
    table: "table"
  };
  const exports$12 = { parseSections, getSection, fenceToType };
  const run2 = () => {
  };
  return { name: name2, version: version2, platform: platform2, exports: exports$12, run: run2 };
  function fenceToType(info) {
    let key = String(info || "").trim().toLowerCase();
    if (!key) return null;
    return FENCE_TYPES[key] || key;
  }
  function parseSections(text2) {
    const lines = String(text2 || "").split("\n");
    const preamble = [];
    const order = [];
    const sections = {};
    let current = null;
    let inFence = false;
    for (const line of lines) {
      const isFence = /^```/.test(line);
      if (!inFence && !isFence) {
        const m2 = /^# (.+)$/.exec(line);
        if (m2) {
          if (current) commit(current);
          current = { name: m2[1].trim(), lines: [] };
          continue;
        }
      }
      if (isFence) inFence = !inFence;
      (current ? current.lines : preamble).push(line);
    }
    if (current) commit(current);
    return { preamble: trimBlank(preamble).join("\n"), order, sections };
    function commit(sec) {
      const key = sec.name.toLowerCase();
      if (sections[key]) console.warn(`core.sections: duplicate section '${sec.name}' (last wins)`);
      else order.push(sec.name);
      sections[key] = parseSection(sec.name, sec.lines);
    }
  }
  function getSection(text2, sectionName) {
    if (!sectionName) return null;
    const parsed = parseSections(text2);
    return parsed.sections[String(sectionName).toLowerCase()] || null;
  }
  function parseSection(name3, lines) {
    let tags = [];
    const meta = {};
    let i = 0;
    while (i < lines.length && lines[i].trim() === "") i++;
    while (i < lines.length && /^([\-\*] )?[a-z]+: /.test(lines[i])) {
      const line = lines[i].replace(/^[\-\*] /, "");
      const colon = line.indexOf(":");
      const field = line.slice(0, colon).trim();
      let value = line.slice(colon + 1).trim();
      if (value === "true") value = true;
      else if (value === "false") value = false;
      if (field === "tags")
        tags = String(value).split(",").map((v) => v.trim()).filter(Boolean);
      else meta[field] = value;
      i++;
    }
    const body = trimBlank(lines.slice(i));
    let type = null;
    let text2 = body.join("\n");
    if (body.length >= 2) {
      const open = /^```(.*)$/.exec(body[0]);
      const closes = body[body.length - 1].trim() === "```";
      if (open && closes) {
        const inner = body.slice(1, -1);
        if (!inner.some((l) => /^```/.test(l))) {
          type = fenceToType(open[1]);
          text2 = inner.join("\n");
        }
      }
    }
    if (!type && meta.type) type = meta.type;
    delete meta.type;
    return { name: name3, tags, ...meta, type, text: text2 };
  }
  function trimBlank(lines) {
    let start = 0;
    let end = lines.length;
    while (start < end && lines[start].trim() === "") start++;
    while (end > start && lines[end - 1].trim() === "") end--;
    return lines.slice(start, end);
  }
}
function coreSettings(tw2) {
  const name2 = "core.settings";
  const version2 = "0.1.0";
  const platform2 = "0.28.0";
  const WS_TIDDLER = "$Settings";
  const USER_KEY = "/settings.json";
  const SECRETS_KEY = "secrets";
  const registry = {};
  const exports$12 = { register, get, getRaw, set, materialize, registry, expandSecrets, readSecrets, writeSecret, placement, SECRETS_KEY };
  const run2 = () => {
  };
  return { name: name2, version: version2, platform: platform2, exports: exports$12, run: run2 };
  function register(owner2, schema) {
    if (!schema) return;
    for (const [path, spec] of Object.entries(schema)) {
      if (registry[path] && registry[path].owner !== owner2) {
        console.warn(`core.settings: '${path}' already registered by '${registry[path].owner}'; ignoring '${owner2}'`);
        continue;
      }
      registry[path] = { ...spec, owner: owner2 };
    }
  }
  function get(path, def) {
    let val = byPath(readUser(), path);
    if (val === void 0) val = byPath(readWorkspace(), path);
    if (val === void 0 && path in registry) val = registry[path].default;
    if (val === void 0) val = def;
    return expandSecrets(val);
  }
  function getRaw(path) {
    let val = byPath(readUser(), path);
    if (val === void 0) val = byPath(readWorkspace(), path);
    if (val === void 0 && path in registry) val = registry[path].default;
    return val;
  }
  function placement(path) {
    if (byPath(readUser(), path) !== void 0) return "user";
    if (byPath(readWorkspace(), path) !== void 0) return "workspace";
    return null;
  }
  function set(path, value, level = "workspace") {
    if (level === "user") {
      const user = readUser();
      setByPath(user, path, value);
      tw2.store.global.set(USER_KEY, user);
      deleteFromWorkspace(path);
    } else {
      const ws = readWorkspace();
      setByPath(ws, path, value);
      writeWorkspace(ws);
      const user = readUser();
      if (deleteByPath(user, path)) tw2.store.global.set(USER_KEY, user);
    }
    tw2.events.send("save.auto");
  }
  function materialize() {
    const ws = readWorkspace();
    let changed = false;
    for (const [path, spec] of Object.entries(registry)) {
      if (byPath(ws, path) === void 0) {
        setByPath(ws, path, spec.default);
        changed = true;
      }
    }
    if (changed) writeWorkspace(ws);
  }
  function expandSecrets(val) {
    let secrets;
    const lookup = () => secrets || (secrets = readSecrets());
    const walk = (v) => {
      if (typeof v === "string") {
        if (!v.includes("${secret:")) return v;
        const s = lookup();
        return v.replace(/\$\{secret:([^}]+)\}/g, (_, key) => {
          const k = key.trim();
          if (k in s) return s[k];
          console.warn(`core.settings: secret '${k}' not found in ${SECRETS_KEY}`);
          return "";
        });
      }
      if (Array.isArray(v)) return v.map(walk);
      if (v !== null && typeof v === "object") {
        const out = {};
        for (const k of Object.keys(v)) out[k] = walk(v[k]);
        return out;
      }
      return v;
    };
    return walk(val);
  }
  function readSecrets() {
    const raw = tw2.store.global.get(SECRETS_KEY);
    const out = {};
    if (typeof raw !== "string") return out;
    for (const line of raw.split("\n")) {
      const s = line.trim();
      if (!s || s.startsWith("#")) continue;
      const i = s.indexOf(":");
      if (i < 0) continue;
      out[s.slice(0, i).trim()] = s.slice(i + 1).trim();
    }
    return out;
  }
  function writeSecret(key, value) {
    const secrets = readSecrets();
    secrets[String(key).replace(/[\r\n]+/g, "")] = String(value).replace(/[\r\n]+/g, " ");
    const text2 = Object.entries(secrets).map(([k, v]) => `${k}: ${v}`).join("\n");
    tw2.store.global.set(SECRETS_KEY, text2);
  }
  function readUser() {
    const u = tw2.store.global.get(USER_KEY);
    return u && typeof u === "object" ? u : {};
  }
  function readWorkspace() {
    try {
      return tw2.run.getJSONObject(WS_TIDDLER) || {};
    } catch {
      return {};
    }
  }
  function writeWorkspace(obj) {
    let t = tw2.run.getTiddler(WS_TIDDLER);
    if (!t) t = { title: WS_TIDDLER, type: "json", tags: ["$Shadow", "$NoSynch", "$NoBackup"] };
    else t = { ...t };
    t.text = JSON.stringify(obj, null, 2);
    delete t.doNotSave;
    t.updated = /* @__PURE__ */ new Date();
    tw2.run.updateTiddlerHard(WS_TIDDLER, t);
  }
  function deleteFromWorkspace(path) {
    const ws = readWorkspace();
    if (deleteByPath(ws, path)) writeWorkspace(ws);
  }
  function byPath(obj, path) {
    return String(path).split(".").reduce((o, k) => o == null ? void 0 : o[k], obj);
  }
  function setByPath(obj, path, value) {
    const parts = String(path).split(".");
    let cur = obj;
    for (let i = 0; i < parts.length - 1; i++) {
      if (cur[parts[i]] == null || typeof cur[parts[i]] !== "object") cur[parts[i]] = {};
      cur = cur[parts[i]];
    }
    cur[parts[parts.length - 1]] = value;
  }
  function deleteByPath(obj, path) {
    const parts = String(path).split(".");
    const chain = [obj];
    let cur = obj;
    for (let i = 0; i < parts.length - 1; i++) {
      if (cur[parts[i]] == null || typeof cur[parts[i]] !== "object") return false;
      cur = cur[parts[i]];
      chain.push(cur);
    }
    const leaf = parts[parts.length - 1];
    if (!(leaf in cur)) return false;
    delete cur[leaf];
    for (let i = chain.length - 1; i >= 1; i--) {
      if (Object.keys(chain[i]).length === 0) delete chain[i - 1][parts[i - 1]];
      else break;
    }
    return true;
  }
}
function coreStore(tw2) {
  const name2 = "core.store";
  const version2 = "0.2.0";
  const platform2 = "0.28.0";
  tw2.store = {
    get(key) {
      return tw2.storage.get(fullKey(key));
    },
    set(key, value) {
      return tw2.storage.set(fullKey(key), value);
    },
    delete(key) {
      return tw2.storage.remove(fullKey(key));
    },
    // All keys of the current workspace, prefix-stripped (=> portable).
    keys() {
      const p = prefix();
      return tw2.storage.keys(p).map((k) => k.slice(p.length));
    },
    // Raw string in/out (no JSON coercion) — for portable dump/restore.
    exportRaw(key) {
      return tw2.storage.getRaw(fullKey(key));
    },
    importRaw(key, raw) {
      return tw2.storage.setRaw(fullKey(key), raw);
    },
    // Wipe a whole workspace's keys (delegated to the backend, which may drop a
    // whole object store / folder rather than iterate). Stays inside `/ws/`.
    clearWorkspace(workspace) {
      return tw2.storage.clearWorkspace(workspace);
    },
    // Cross-workspace ("global") keys — the workspace list, current workspace,
    // user settings, secrets, baseUrl. They live under the `/ws/` ROOT (a single
    // segment, e.g. `/ws/settings.json`) so EVERY persisted key is `/ws/`-prefixed
    // and a backend that migrates `/ws/*` (FileSystemStoragePlugin) carries them
    // too. `/ws/<name>/<key>` (two+ segments) is workspace-scoped data.
    global: {
      get(key) {
        return tw2.storage.get(globalKey(key));
      },
      set(key, value) {
        return tw2.storage.set(globalKey(key), value);
      }
    }
  };
  const exports$12 = {
    save,
    autoSave,
    saveAll,
    saveVisible,
    loadStore,
    tiddlersToSave
  };
  Object.assign(tw2.run, {
    save,
    autoSave,
    saveAll,
    saveVisible
  });
  const settings = {
    "data.autoSave": {
      default: true,
      type: "boolean",
      description: "Automatically save changes to local storage"
    }
  };
  return { name: name2, version: version2, platform: platform2, exports: exports$12, settings };
  function prefix() {
    return "/ws/" + (tw2.workspace || "default") + "/";
  }
  function fullKey(key) {
    if (key[0] !== "/") key = "/" + key;
    return "/ws/" + (tw2.workspace || "default") + key;
  }
  function globalKey(key) {
    return "/ws/" + String(key).replace(/^\//, "");
  }
  function isAutoSave() {
    return tw2.core.common.getSetting("data.autoSave", true) !== false;
  }
  function autoSave() {
    if (!isAutoSave()) return;
    saveAll();
  }
  function save() {
    saveAll();
  }
  function saveAll() {
    tw2.store.set("tiddlers", tw2.tiddlers.all.filter(tiddlersToSave));
    tw2.store.set("tiddlers-trashed", tw2.tiddlers.trashed);
    saveVisible();
    tw2.run.setDirty(false);
  }
  function saveVisible() {
    tw2.store.set("tiddlers-visible", tw2.tiddlers.visible);
  }
  function tiddlersToSave(t) {
    return t.doNotSave !== true;
  }
  function loadStore(store) {
    var _a, _b;
    if (!store) store = tw2.store;
    if (store.get("tiddlers-backup1") != null) (_a = store.delete) == null ? void 0 : _a.call(store, "tiddlers-backup1");
    tw2.tiddlers.all = storeLoadTiddlers("tiddlers");
    tw2.shadowTiddlers.filter((t) => !tw2.util.tiddlerExists(t.title)).forEach((t) => tw2.run.addTiddlerHard(t));
    if (!tw2.tiddlers.all.length) {
      tw2.tiddlers.all = [];
      store.set("tiddlers", []);
    }
    tw2.tiddlers.visible = ((_b = store.get("tiddlers-visible")) == null ? void 0 : _b.length) ? store.get("tiddlers-visible") : [];
    tw2.tiddlers.trashed = storeLoadTiddlers("tiddlers-trashed", false);
    function storeLoadTiddlers(key, validate = true) {
      let result2 = store.get(key) || [];
      result2.forEach((t) => {
        if (validate && !tiddlerIsValid(t)) return;
        t.created = new Date(t.created || t.updated || /* @__PURE__ */ new Date());
        t.updated = new Date(t.updated || /* @__PURE__ */ new Date());
      });
      return result2.filter((t) => !!t.title);
    }
  }
  function tiddlerIsValid(t) {
    let msg = tw2.util.tiddlerValidation(t);
    if (msg.length) console.warn("tiddlerValidation", t.title, msg.join("; "));
    return msg.length === 0;
  }
}
function coreTemplater(tw2) {
  const name2 = "core.templater";
  const version2 = "0.24.0";
  const platform2 = "0.27.0";
  let blockregex = /\{\{(([@!]?)(.+?))\}\}(([\s\S]+?)(\{\{:\1\}\}([\s\S]+?))?)\{\{\/\1\}\}/g;
  let valregex = /\{\{([=%])(.+?)\}\}/g;
  const exports$12 = {
    Templater
  };
  Templater.prototype.render = function(vars) {
    return render(this.t, vars);
  };
  const run2 = () => {
  };
  return { name: name2, version: version2, platform: platform2, exports: exports$12, run: run2 };
  function Templater(template) {
    this.t = template;
  }
  function scrub(val) {
    return new Option(val).innerHTML.replace(/"/g, "&quot;");
  }
  function get_value(vars, key) {
    let parts = key.split(".");
    while (parts.length) {
      if (!(parts[0] in vars)) return false;
      vars = vars[parts.shift()];
    }
    return vars;
  }
  function render(fragment, vars) {
    return fragment.replace(blockregex, function(_, __, meta, key, inner, if_true, has_else, if_false) {
      let val = get_value(vars, key);
      let temp = "";
      if (!val) {
        if (meta === "!") return render(inner, vars);
        if (has_else) return render(if_false, vars);
        return "";
      }
      if (!meta) return render(if_true, vars);
      if (meta === "@") {
        _ = vars._key;
        __ = vars._val;
        for (let i in val) {
          if (val.hasOwnProperty(i)) {
            vars._key = i;
            vars._val = val[i];
            temp += render(inner, vars);
          }
        }
        vars._key = _;
        vars._val = __;
        return temp;
      }
      return "";
    }).replace(valregex, function(_, meta, key) {
      let val = get_value(vars, key);
      if (val || val === 0) return meta === "%" ? scrub(val) : val;
      return "";
    });
  }
}
function coreTiddlers(tw2) {
  const name2 = "core.tiddlers";
  const version2 = "0.1.0";
  const platform2 = "0.27.0";
  const SECTION_DELIM = "::";
  const reTiddlerTitle2 = /[a-z0-9_\-\.\(\)\s\$\ud83c\ud000-\udfff\ud83d\ud000-\udfff\ud83e\ud000-\udfff]+/gi;
  const reTiddlerTitleComplete = RegExp.compose(/^reTiddlerTitle$/gi, { reTiddlerTitle: reTiddlerTitle2 });
  const reInclusionParams = /\##([\$0-9a-z]+)\#([^\#]+)?#/gi;
  const exports$12 = {
    SECTION_DELIM,
    addTiddler,
    addTiddlerHard,
    updateTiddler,
    updateTiddlerHard,
    updateTiddlerSilent,
    updateTiddlerText,
    deleteTiddler,
    getTiddler,
    tiddlerExists,
    getTiddlerElement,
    tiddlerList,
    getTiddlersByPackage,
    getTiddlersByTag,
    showTiddler,
    scrollToTiddler,
    hideTiddler,
    closeTiddler,
    showAllTiddlers,
    closeAllTiddlers,
    showTiddlerList,
    replaceInArray,
    upsertInArray,
    removeFromArray,
    resolveRef,
    getSection,
    sectionTiddler,
    splitSectionRef,
    getTiddlerTextRaw,
    getTiddlerTextReplaced,
    getTiddlerTextLines,
    getTiddlerList,
    getTiddlerTextList,
    getKeyValuesArray,
    getKeyValuesObject,
    getJSONObject,
    titleIs,
    titleMatch,
    tagMatch,
    isPackageList,
    isCoreTiddler,
    tiddlerIsATemplate,
    tiddlerIsValid,
    tiddlerValidation,
    validateTiddlerText,
    registerValidator,
    emptyTiddler,
    nonExistentTiddler,
    tiddlerCodeBlocks,
    isActiveCodeTiddler,
    isRunnableTiddler,
    runTiddlerCode,
    runCoreTiddlers,
    tiddlerToggleTag
  };
  Object.assign(tw2.run, {
    updateTiddler,
    updateTiddlerHard,
    updateTiddlerSilent,
    addTiddler,
    addTiddlerHard,
    deleteTiddler,
    getTiddler,
    getSection,
    getTiddlerList,
    getTiddlersByTag,
    getTiddlersByPackage,
    getTiddlerTextList,
    getTiddlerTextRaw,
    getJSONObject,
    getKeyValuesArray,
    getKeyValuesObject,
    getTiddlerElement,
    tiddlerToggleTag,
    showTiddlerList,
    showTiddler,
    showAllTiddlers,
    closeAllTiddlers,
    closeTiddler,
    hideTiddler,
    tiddler: {
      getJSONObject,
      updateText: updateTiddlerText
    }
  });
  tw2.util = { tagMatch, titleMatch, titleIs, tiddlerValidation, tiddlerExists };
  const validators = [];
  Object.assign(tw2.extensions, { registerValidator });
  return { name: name2, version: version2, platform: platform2, exports: exports$12 };
  function addTiddler(newTiddler, userEdit, forceSave) {
    if (userEdit) {
      const existingTiddler = getTiddler(newTiddler.title, false);
      if (existingTiddler) throw new Error(`Unable to add (overwrite) existent tiddler '${newTiddler.title}'!`);
      if (!newTiddler.created) newTiddler.created = newTiddler.updated || /* @__PURE__ */ new Date();
      delete newTiddler.doesNotExist;
      delete newTiddler.isRawShadow;
      if (!forceSave) validateTiddlerText(newTiddler);
    }
    addTiddlerHard(newTiddler);
  }
  function addTiddlerHard(newTiddler) {
    upsertInArray(tw2.tiddlers.all, titleIs(newTiddler.title), newTiddler);
  }
  function updateTiddler(currentTitle, newTiddler, userEdit, forceSave) {
    const existingTiddler = getTiddler(currentTitle, true);
    if (!existingTiddler) throw new Error(`Unable to update non-existent tiddler '${currentTitle}'!`);
    if (newTiddler.title !== currentTitle && getTiddler(newTiddler.title)) throw new Error(`Cannot overwrite existing tiddler '${newTiddler.title}!`);
    if (!forceSave && userEdit && existingTiddler.tags.includes("$NoEdit")) throw new Error(`Readonly tiddler '${currentTitle}' cannot be updated!`);
    if (userEdit) delete existingTiddler.doNotSave;
    if (!forceSave && userEdit) validateTiddlerText(newTiddler);
    delete newTiddler.isRawShadow;
    newTiddler.updated = /* @__PURE__ */ new Date();
    updateTiddlerHard(currentTitle, newTiddler);
    if (userEdit) replaceInArray(tw2.tiddlers.visible, (title2) => title2 === currentTitle, newTiddler.title);
    tw2.events.send("tiddler.modified", newTiddler.title);
  }
  function updateTiddlerHard(currentTitle, newTiddler) {
    upsertInArray(tw2.tiddlers.all, titleIs(currentTitle), newTiddler);
  }
  function updateTiddlerSilent(currentTitle, newTiddler) {
    var _a, _b;
    newTiddler.updated = /* @__PURE__ */ new Date();
    updateTiddlerHard(currentTitle, newTiddler);
    (_b = (_a = tw2.run).setDirty) == null ? void 0 : _b.call(_a, true);
  }
  function updateTiddlerText(title2, text2) {
    let t = getTiddler(title2);
    updateTiddler(title2, { ...t, text: text2 });
  }
  function deleteTiddler(title2, automation) {
    var _a;
    let t = getTiddler(title2);
    if (!automation && !confirm("Sure you want to delete me?")) return;
    const shadowTiddler = tw2.shadowTiddlers.find(titleIs(title2));
    if (shadowTiddler && !automation && !confirm("Deleting a shadow tiddler will simply restore the default content OK?")) return;
    if (!t) return hideTiddler(title2);
    if (t.tags.includes("$NoEdit") && !automation && !confirm("This tiddler is marked as read-only. Deleting it may cause issues. Really delete?")) return;
    let tiddler = (_a = removeFromArray(tw2.tiddlers.all, titleIs(title2))) == null ? void 0 : _a[0];
    if (shadowTiddler) addTiddler({ ...shadowTiddler });
    if (shadowTiddler && !automation) tw2.core.render.rerenderTiddler(title2);
    else hideTiddler(title2);
    tiddler.updated = /* @__PURE__ */ new Date();
    tw2.tiddlers.trashed.push(tiddler);
    if (automation) {
      tw2.events.send("tiddler.removed", title2);
      return;
    } else tw2.events.send("tiddler.deleted", title2);
    tw2.core.store.autoSave();
  }
  function tiddlerToggleTag(title2, tag) {
    let t = getTiddler(title2);
    if (!t.tags.includes(tag)) upsertInArray(t.tags, (tg) => tg === tag, tag);
    else removeFromArray(t.tags, (tg) => tg === tag);
    updateTiddler(title2, t, true);
    tw2.events.send("tiddler.refresh", t.title);
  }
  function getTiddler(title2, includeRawShadow = true) {
    let result2 = tw2.tiddlers.all.find(titleIs(title2));
    if (includeRawShadow === false && (result2 == null ? void 0 : result2.isRawShadow) === true) return void 0;
    return result2;
  }
  function tiddlerExists(title2, includeRawShadow) {
    return !!getTiddler(title2, includeRawShadow);
  }
  function getTiddlerElement(title2) {
    let id = tw2.core.common.hash(title2);
    return tw2.core.dom.divVisibleTiddlers.querySelector(`*[data-tiddler-id="${id}"]`);
  }
  function tiddlerList({ title: title2, tag, pck } = {}) {
    return tw2.tiddlers.all.filter(titleMatch(title2)).filter(tagMatch(tag)).filter((t) => !pck || t.package === pck);
  }
  function getTiddlersByPackage(pck) {
    return tw2.tiddlers.all.filter((t) => t.package === pck);
  }
  function getTiddlersByTag(tag) {
    return tw2.tiddlers.all.filter((t) => t.tags.includes(tag));
  }
  function showTiddler(title2) {
    if (getTiddlerElement(title2)) {
      tw2.events.send("tiddler.refocus", title2);
      return scrollToTiddler(title2);
    }
    let tiddler = getTiddler(title2) || sectionTiddler(title2);
    if (!tiddler) tiddler = nonExistentTiddler(title2);
    let newElement = tw2.core.render.createTiddlerElement(tiddler);
    tw2.core.dom.divVisibleTiddlers.insertAdjacentElement("afterbegin", newElement);
    if (tw2.tiddlers.visible.indexOf(tiddler.title) === -1) tw2.tiddlers.visible.push(tiddler.title);
    tw2.events.send("tiddler.rendered", { tiddler, newElement });
    tw2.core.store.saveVisible();
  }
  function scrollToTiddler(title2) {
    var _a;
    (_a = getTiddlerElement(title2)) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function hideTiddler(title2) {
    let visibleTiddlerElement = getTiddlerElement(title2);
    if (visibleTiddlerElement) visibleTiddlerElement.outerHTML = "";
    tw2.tiddlers.visible = tw2.tiddlers.visible.filter((t) => t !== title2);
    tw2.core.store.saveVisible();
    tw2.events.send("story.changed", title2);
  }
  function closeTiddler(title2) {
    hideTiddler(title2);
    tw2.core.render.renderAllTiddlers();
  }
  function showAllTiddlers({ tag, title: title2, pck } = {}) {
    if (!title2) title2 = "!^\\$";
    tiddlerList({ title: title2, tag, pck }).map((t) => t.title).forEach(showTiddler);
    tw2.core.render.renderAllTiddlers();
  }
  function closeAllTiddlers({ tag = "", title: title2 = "", pck } = {}) {
    if (!title2) title2 = "!^\\$";
    tiddlerList({ title: title2, tag, pck }).map((t) => t.title).forEach(hideTiddler);
  }
  function showTiddlerList(list, title2 = "unknown") {
    return tw2.lib.markdown(tw2.core.render.renderTWikki({ text: list.map((t) => `* [[${t.title}]]`).join("\n"), title: title2 }));
  }
  function replaceInArray(array, test, newItem) {
    let index = array.findIndex(test);
    if (index >= 0) array[index] = newItem;
  }
  function upsertInArray(array, test, newItem) {
    let index = array.findIndex(test);
    if (index >= 0) array[index] = newItem;
    else array.push(newItem);
  }
  function removeFromArray(array, test) {
    let index = array.findIndex(test);
    if (index >= 0) return array.splice(index, 1);
  }
  function splitSectionRef(ref) {
    if (typeof ref !== "string") return null;
    let i = ref.indexOf(SECTION_DELIM);
    if (i < 0) return null;
    return { base: ref.slice(0, i), section: ref.slice(i + SECTION_DELIM.length) };
  }
  function sectionTiddler(title2) {
    let ref = splitSectionRef(title2);
    if (!ref) return null;
    let base = getTiddler(ref.base);
    if (!base) return null;
    let sec = tw2.core.sections.getSection(base.text, ref.section);
    if (!sec) return null;
    return {
      title: title2,
      text: sec.text,
      type: sec.type || base.type,
      tags: [],
      doNotSave: true,
      isSection: true
    };
  }
  function resolveRef(ref) {
    let parts = splitSectionRef(ref);
    if (parts) {
      let base = getTiddler(parts.base);
      if (base) {
        let sec = tw2.core.sections.getSection(base.text, parts.section);
        if (sec) return { text: sec.text, type: sec.type || base.type };
      }
    }
    let t = getTiddler(ref);
    return { text: (t == null ? void 0 : t.text) || "", type: t == null ? void 0 : t.type };
  }
  function getSection(title2, sectionName) {
    let base = getTiddler(title2);
    if (!base) return null;
    let sec = tw2.core.sections.getSection(base.text, sectionName);
    return sec ? { ...sec, type: sec.type || base.type } : null;
  }
  function getTiddlerTextRaw(title2) {
    return resolveRef(title2).text;
  }
  function getTiddlerTextReplaced(title2, params2) {
    let res = resolveRef(title2).text;
    Array.from(res.matchAll(reInclusionParams) || []).forEach((m2) => {
      let all = m2[0];
      let key = m2[1];
      let def = m2[2] || "";
      res = res.replace(all, params2[key] || def);
    });
    return res;
  }
  function getTiddlerTextLines(title2) {
    return getTiddlerTextRaw(title2).split("\n");
  }
  function getTiddlerList(title2) {
    let inFence = false;
    return getTiddlerTextLines(title2).filter((l) => {
      if (/^```/.test(l)) {
        inFence = !inFence;
        return false;
      }
      return !inFence;
    }).filter((l) => l.match(/^[-*] /)).map((l) => l.replace(/^[-*] /, "")).map((l) => l.replace(/[\[\]]/g, "")).filter(tw2.core.common.notEmpty);
  }
  function getTiddlerTextList(title2) {
    return getTiddlerTextLines(title2).map((l) => l.replace(/^[-*] /, "")).filter(tw2.core.common.notEmpty);
  }
  function getKeyValuesArray(title2) {
    return getTiddlerTextList(title2).map((t) => {
      let s = t.indexOf(":");
      if (s < 0) return;
      let key = t.substring(0, s).trim();
      let value = t.substring(s + 1).trim();
      return { key, value };
    }).filter(tw2.core.common.notEmpty);
  }
  function getKeyValuesObject(title2) {
    let result2 = {};
    getKeyValuesArray(title2).forEach((i) => {
      result2[i.key] = i.value;
    });
    return result2;
  }
  function getJSONObject(title2) {
    return JSON.parse(getTiddlerTextRaw(title2));
  }
  function titleIs(title2) {
    return (t) => t.title === title2;
  }
  function titleMatch(title2) {
    if (!title2 || title2 === "*") return () => true;
    const negate = title2.match(/^!/);
    let re = new RegExp(negate ? title2.substr(1) : title2);
    return (t) => negate ? !t.title.match(re) : t.title.match(re);
  }
  function tagMatch(tag) {
    if (!tag || tag === "*") return () => true;
    let re = new RegExp(tag.match(/^!/) ? tag.substr(1) : tag);
    return (t) => tag.match(/^!/) ? !t.tags.find((tag2) => tag2.match(re)) : t.tags.find((tag2) => tag2.match(re));
  }
  function isPackageList(t) {
    return ["$CorePackages", "$ExtensionPackages"].includes(t.title);
  }
  function isCoreTiddler(t) {
    return t.package === "core";
  }
  function tiddlerIsATemplate(t) {
    return t.tags.includes("$Template");
  }
  function tiddlerIsValid(t) {
    let msg = tiddlerValidation(t);
    if (msg.length) console.warn("tiddlerValidation", t.title, msg.join("; "));
    return msg.length === 0;
  }
  function tiddlerValidation(t) {
    const msg = [];
    if (!t.title) msg.push("No title!");
    if (!t.title.match(reTiddlerTitleComplete)) msg.push("Invalid title!");
    if (!t.type) msg.push("No type!");
    if (!Array.isArray(t.tags)) msg.push("Invalid tags!");
    t.tags = typeof t.tags === "string" ? t.tags.length ? t.tags.split(" ") : [] : t.tags;
    if (!Array.isArray(t.tags)) msg.push("No tags array!");
    if (!t.created) msg.push("No created date!");
    if (!t.updated) msg.push("No updated date!");
    return msg;
  }
  function validateTiddlerText(t) {
    if (t.type === "json") jsonValidator(t.text);
    tiddlerCodeBlocks(t).forEach((b) => tw2.run.executeText(b.text, b.title));
    for (const v of validators) {
      if (!v.match(t)) continue;
      try {
        v.validate(t);
      } catch (e) {
        throw new Error(`${v.name}: ${e.message}`);
      }
    }
  }
  function registerValidator({ name: name3, match, validate }) {
    if (!name3 || typeof match !== "function" || typeof validate !== "function") throw new Error("registerValidator: {name, match, validate} required");
    const i = validators.findIndex((v) => v.name === name3);
    if (i >= 0)
      validators[i] = { name: name3, match, validate };
    else validators.push({ name: name3, match, validate });
  }
  function jsonValidator(text2) {
    JSON.parse(text2);
    return true;
  }
  function emptyTiddler() {
    return { title: "", text: "", type: "x-twikki", tags: [] };
  }
  function nonExistentTiddler(title2) {
    let t = emptyTiddler();
    Object.assign(t, { title: title2, text: `The tiddler '${title2}' does not exist`, doesNotExist: true });
    return t;
  }
  function isActiveCodeTiddler(t) {
    return ["script/js"].includes(t.type) && !t.tags.includes("$CodeDisabled");
  }
  function tiddlerCodeBlocks(t) {
    var _a, _b, _c;
    if (!t || ((_a = t.tags) == null ? void 0 : _a.includes("$CodeDisabled"))) return [];
    if (t.type === "script/js") return [{ text: t.text || "", title: t.title }];
    if (!((_b = t.tags) == null ? void 0 : _b.includes("$Plugin")) && !((_c = t.tags) == null ? void 0 : _c.includes("$Script"))) return [];
    if (!t.text || !t.text.includes("# ")) return [];
    const parsed = tw2.core.sections.parseSections(t.text);
    return parsed.order.map((n) => parsed.sections[n.toLowerCase()]).filter((s) => s && isActiveCodeTiddler(s)).map((s) => ({ text: s.text, title: `${t.title}${SECTION_DELIM}${s.name}` }));
  }
  function runTiddlerCode(t) {
    tiddlerCodeBlocks(t).forEach((b) => tw2.run.executeCodeTiddler(b.text, b.title));
  }
  function isRunnableTiddler(t) {
    return tiddlerCodeBlocks(t).length > 0;
  }
  function runCoreTiddlers() {
    tw2.tiddlers.all.filter(isCoreTiddler).forEach(runTiddlerCode);
  }
}
function coreUi(tw2) {
  const name2 = "core.ui";
  const version2 = "0.25.0";
  const platform2 = "0.27.0";
  const reEventName = /[a-z0-9\.]+/g;
  const reCommand = RegExp.compose(/(reEventName):?(.+)?/, { reEventName });
  const exports$12 = {
    button,
    dialog,
    section,
    expand,
    expose,
    renderLayout,
    layoutTitleForTheme,
    wireUpEvents,
    wireEvents,
    navigateTo,
    handleHashLink,
    sendCommand,
    isCommand,
    isLocalLink,
    setDirty,
    formEditTiddler,
    formNewTiddler
  };
  Object.assign(tw2.run, {
    sendCommand,
    setDirty
  });
  tw2.commands = tw2.commands || {
    byLabel: {},
    // static commands, keyed by label (last-wins)
    providers: [],
    // {key, fn} — fn() returns commands, evaluated at palette render
    all() {
      const dynamic = this.providers.flatMap((p) => {
        try {
          return p.fn() || [];
        } catch (e) {
          console.warn("Command provider failed:", p.key, e);
          return [];
        }
      });
      return [...Object.values(this.byLabel), ...dynamic];
    }
  };
  Object.assign(tw2.extensions, {
    // Register a macro callable from tiddler text as <<ns.name args>>. `meta`
    // attaches docs that <<macros>> reads to build its reference table:
    //   {description, example?, version?}
    registerMacro(namespace, name3, fcn, meta) {
      if (!tw2.macros[namespace]) tw2.macros[namespace] = {};
      tw2.macros[namespace][name3] = fcn;
      if (meta) Object.assign(tw2.macros[namespace][name3], meta);
    },
    // Register a command (or array of commands) for the command palette.
    // Shape: {label, event?, payload?, run?}. Deduped by label (last-wins) so
    // soft reloads don't duplicate and plugins can override a built-in.
    registerCommand(command) {
      if (Array.isArray(command)) return command.forEach((c) => this.registerCommand(c));
      if (!(command == null ? void 0 : command.label)) return console.warn("registerCommand: command needs a label", command);
      tw2.commands.byLabel[command.label] = command;
    },
    // Register a keyed function producing commands, evaluated each time the
    // palette renders — for runtime-varying lists (themes, workspaces).
    // Re-registration replaces by key.
    registerCommandProvider(key, fn) {
      const i = tw2.commands.providers.findIndex((p) => p.key === key);
      const entry = { key, fn };
      if (i >= 0) tw2.commands.providers[i] = entry;
      else tw2.commands.providers.push(entry);
    },
    // Register a tiddler type so the new/edit dialog's type picker offers it.
    // `key` is the type string stored on tiddlers (e.g. 'csv'); `label` is the
    // human-readable name shown in the picker. Last-write-wins on duplicate
    // keys. In-memory only — the type vanishes if the registering plugin is
    // uninstalled/disabled, and it does not persist to localStorage (unlike
    // an edit to the $TiddlerTypes shadow tiddler).
    registerType(key, label) {
      if (!key) return console.warn("registerType: key required");
      tw2.types[key] = label || key;
    }
  });
  tw2.types = tw2.types || {};
  tw2.macros = tw2.macros || {};
  tw2.extensions.registerMacro("core", "Tag", (tag) => tw2.core.render.tagPickerHtml(String(tag ?? "")), {
    description: "Render a tag as a picker listing every tiddler with that tag.",
    example: "<<Tag $Plugin>>"
  });
  tw2.extensions.registerMacro("core", "TagInput", ({ id }) => `<input id="${id}" placeholder="Tags"/>`, {
    description: "Tags input for the edit form (no-plugin fallback; overridden with autocomplete by the base package).",
    example: "<<TagInput id:my-tags>>"
  });
  const run2 = () => {
    renderLayout();
  };
  return { name: name2, version: version2, platform: platform2, exports: exports$12, run: run2 };
  function wireUpEvents() {
    wireUp("ui.open.all", tw2.core.tiddlers.showAllTiddlers);
    wireUp("ui.close.all", tw2.core.tiddlers.closeAllTiddlers);
    wireUp("save", tw2.core.store.save);
    wireUp("save.auto", tw2.core.store.autoSave);
    wireUp("tiddler.new", formNewTiddler);
    wireUp("tiddler.edit", formEditTiddler);
    wireUp("tiddler.show", (title2) => {
      tw2.core.tiddlers.showTiddler(title2);
      tw2.core.tiddlers.scrollToTiddler(title2);
    });
    wireUp("section.edit", editTiddlerSection);
    wireUp("tiddler.close", tw2.core.tiddlers.closeTiddler);
    wireUp("tiddler.delete", tw2.core.tiddlers.deleteTiddler);
    wireUp("tiddler.deleted", tiddlerDeleted);
    wireUp("tiddler.refresh", tw2.core.render.rerenderTiddler);
    wireUp("tiddler.text", tw2.core.tiddlers.getTiddlerTextRaw);
    wireUp("tiddler.content", tw2.core.render.renderTiddler);
    wireUp("tiddler.edited", tw2.core.render.rerenderTiddler);
    wireUp("tiddler.created", renderNewTiddler);
    wireUp("tiddler.updated", tiddlerUpdated);
    wireUp("store.load", tw2.core.store.loadStore);
    wireUp("form.done", formDone);
    wireUp("form.cancel", formCancel);
    wireUp("package.load.url", tw2.core.packaging.loadPackageFromURL);
    wireUp("package.reload.url", tw2.core.packaging.reloadPackageFromUrl);
  }
  function wireUp(event2, handler2) {
    tw2.events.subscribe(event2, handler2, "core");
  }
  function wireEvents() {
    var _a, _b;
    tw2.core.dom.frm = tw2.core.dom.$("new-form");
    tw2.core.dom.frm.addEventListener("submit", (evt) => evt.preventDefault());
    (_a = tw2.core.dom.$("new-save")) == null ? void 0 : _a.addEventListener("click", formDone);
    (_b = tw2.core.dom.$("new-cancel")) == null ? void 0 : _b.addEventListener("click", formCancel);
    tw2.core.dom.$("new-dialog").addEventListener("cancel", formCancel);
    document.addEventListener("click", (event2) => {
      let el2 = event2.target;
      let href = tw2.core.dom.nearestAttribute(el2, "href", "a[href]");
      let link = decodeURI(href == null ? void 0 : href.replace(/^#/, ""));
      if (isLocalLink(href)) {
        event2.preventDefault();
        return navigateTo(link);
      }
      let src = tw2.core.dom.nearestElementWithAttribute(el2, "data-msg");
      if (!src) return;
      let msg = src.getAttribute("data-msg");
      let params2 = src.getAttribute("data-params");
      if (!msg && isCommand(link)) msg = isCommand(link);
      if (!msg) return;
      if (src.getAttribute("data-default") !== "true") event2.preventDefault();
      let currentTiddlerTitle = tw2.core.dom.nearestAttribute(el2, "data-tiddler-title", ".tiddler");
      if (msg) {
        let result2 = sendCommand(msg, params2, currentTiddlerTitle);
        let targetId = src.getAttribute("data-target");
        if (!targetId) return result2;
        let target = tw2.core.dom.$(targetId);
        if (!target) {
          console.warn(`No target '${targetId}' found`);
          tw2.events.send("tiddler.preview", {
            title: "Results",
            text: result2[0],
            type: "x-twikki",
            tags: []
          });
          return result2;
        }
        target.innerHTML = result2[0];
      }
    });
    document.addEventListener("dblclick", (event2) => {
      let el2 = event2.target;
      let t = tw2.core.dom.nearestAttribute(el2, "data-tiddler-title", ".tiddler") || tw2.core.dom.nearestAttribute(el2, "tiddler-include", "[tiddler-include]");
      if (!t) return;
      formEditTiddler(t);
    });
    window.addEventListener("hashchange", function() {
      return handleHashLink(document.location.hash);
    });
    window.addEventListener("error", (event2) => {
      tw2.ui.notify("Unhandled: " + event2.message, "E", event2.error.stack);
      console.error("Unhandled:", event2.message, event2);
    });
  }
  function navigateTo(link) {
    if (!link) return;
    tw2.events.send("tiddler.show", link);
    location.hash = "";
  }
  function sendCommand(cmd, params2, currentTiddlerTitle) {
    let cmds = cmd.match(reCommand);
    if (!cmds) throw new Error(`Invalid command '${cmd}' does not match ${reCommand}/!`);
    let msg = cmds[1];
    if (!params2) params2 = cmds.length > 2 ? cmds[2] : null;
    tw2.logging.break("command");
    if (typeof params2 === "string") {
      params2 = tw2.events.decode(params2);
      if (params2 === "$currentTiddler") params2 = `"${currentTiddlerTitle}"`;
      params2 = tw2.core.params.parseParams(params2);
    }
    dp("sendCommand", msg, "params=", params2);
    let result2 = tw2.events.send(msg, params2);
    location.hash = "";
    return result2;
  }
  function handleHashLink(hash) {
    if (!hash) return;
    let link = decodeURI(hash == null ? void 0 : hash.replace(/^#/, ""));
    let msg = isCommand(link);
    if (msg) {
      sendCommand(msg);
      return msg;
    } else {
      navigateTo(link);
      return link;
    }
  }
  function isCommand(str) {
    var _a;
    return (_a = str == null ? void 0 : str.match(/^#?msg:(.+)/)) == null ? void 0 : _a[1];
  }
  function isLocalLink(str) {
    if (!str) return false;
    if (!str.match(/^#/)) return false;
    if (isCommand(str)) return false;
    return true;
  }
  function formEditTiddler(title2) {
    let tiddler = tw2.core.tiddlers.getTiddler(title2);
    if (!tiddler) {
      tiddler = tw2.core.tiddlers.nonExistentTiddler(title2);
      tiddler.text = "";
    }
    formEditShow(tiddler);
  }
  function formEditShow(tiddler = {}, saveButton = true) {
    tw2.core.dom.frm.elements["old-title"].value = tiddler.title || "";
    tw2.core.dom.frm.elements["new-title"].value = tiddler.title || "";
    tw2.core.dom.frm.elements["new-body"].value = tiddler.text || "";
    tw2.core.dom.frm.elements["new-tags"].value = tiddler.tags || "";
    tw2.core.dom.frm.elements["new-type"].value = tiddler.type || "x-twikki";
    if (!saveButton) tw2.core.dom.$("new-save").disabled = true;
    tw2.core.dom.$("new-dialog").showModal();
    let focusElement = tw2.core.dom.frm.elements[tiddler.title ? "new-body" : "new-title"];
    focusElement.focus();
    focusElement.setSelectionRange(0, 0);
    focusElement.scrollTop = 0;
    setDirty(true);
    const shadow = tw2.core.tiddlers.getKeyValuesArray("$TiddlerTypes").reduce((acc, t) => {
      acc[t.key] = t.value;
      return acc;
    }, {});
    const merged = { ...shadow, ...tw2.types };
    tw2.core.dom.$("new-types").innerHTML = Object.entries(merged).map(([key, label]) => `<option value="${key}">${label}</option>`).join("\n");
  }
  function formNewTiddler() {
    formEditShow(tw2.core.tiddlers.emptyTiddler());
  }
  function formCancel() {
    let title2 = tw2.core.dom.frm.elements["old-title"].value;
    if (!tw2.core.tiddlers.getTiddler(title2)) tw2.core.tiddlers.hideTiddler(title2);
    tw2.core.dom.$("new-dialog").close();
    setDirty(false);
  }
  function formDone() {
    const t = {
      title: tw2.core.dom.frm.elements["new-title"].value.trim(),
      text: tw2.core.dom.frm.elements["new-body"].value,
      type: tw2.core.dom.frm.elements["new-type"].value,
      tags: tw2.core.dom.frm.elements["new-tags"].value.split(/[,\s]/).map((tg) => tg.trim(tg)),
      updated: /* @__PURE__ */ new Date()
    };
    let oldTitle = tw2.core.dom.frm.elements["old-title"].value;
    if (!t.created) t.created = t.updated;
    let issues = tw2.util.tiddlerValidation(t);
    if (issues.length) return tw2.ui.notify("Tiddler is invalid: " + issues.join("<br>"), "W");
    if (!t.title) {
      tw2.ui.notify("Empty tiddler not saved!", "W");
      return tw2.core.dom.$("new-dialog").close();
    }
    let existingTiddler = tw2.core.tiddlers.getTiddler(oldTitle, true);
    let forceSave = false;
    try {
      tw2.core.render.renderTWikki({ text: t.text, title: t.title, validation: true });
    } catch (e) {
      if (e.message.match(/existent/)) return tw2.ui.notify(e.message, "W");
      if (confirm(e.message + "\nDo you want to force save?")) {
        forceSave = true;
      } else {
        return;
      }
    }
    try {
      if (oldTitle && existingTiddler) {
        tw2.core.tiddlers.updateTiddler(oldTitle, t, true, forceSave);
        tw2.events.send("tiddler.edited", t.title);
      } else {
        tw2.core.tiddlers.addTiddler(t, true);
        tw2.events.send("tiddler.created", t.title);
      }
    } catch (e) {
      if (/existent|existing/.test(e.message)) return tw2.ui.notify(e.message, "W");
      if (confirm(e.message + "\nDo you want to force save?")) {
        if (oldTitle && existingTiddler) {
          tw2.core.tiddlers.updateTiddler(oldTitle, t, true, true);
          tw2.events.send("tiddler.edited", t.title);
        } else {
          tw2.core.tiddlers.addTiddler(t, true, true);
          tw2.events.send("tiddler.created", t.title);
        }
      } else {
        return tw2.ui.notify(e.message, "W");
      }
    }
    tw2.core.dom.$("new-dialog").close();
    tw2.events.send("tiddler.updated", t.title);
    tw2.core.render.renderAllTiddlers();
    setDirty(true);
    tw2.core.store.autoSave();
  }
  function editTiddlerSection(sectionTitle) {
    let ref = tw2.core.tiddlers.splitSectionRef(sectionTitle);
    if (!ref) return;
    tw2.core.tiddlers.closeTiddler(sectionTitle);
    formEditTiddler(ref.base);
  }
  function setDirty(dirty) {
    if (dirty) {
      tw2.ui.isDirty = true;
      window.addEventListener("beforeunload", preventBrowserClose);
    } else {
      tw2.ui.isDirty = false;
      window.removeEventListener("beforeunload", preventBrowserClose);
    }
    tw2.events.send("dirty.changed", dirty);
  }
  function preventBrowserClose(event2) {
    event2.preventDefault();
    event2.returnValue = "Tiddlers were not yet saved!";
  }
  function renderNewTiddler(title2) {
    tw2.core.tiddlers.showTiddler(title2);
    if (tw2.tabs) tw2.tabs.activate(title2);
  }
  function tiddlerDeleted(t) {
    if (tw2.core.tiddlers.isRunnableTiddler(t)) {
      if (confirm("Code tiddler deleted - would you like to reload?")) tw2.events.send("reboot.hard");
    }
  }
  function tiddlerUpdated(title2) {
    var _a;
    let t = tw2.core.tiddlers.getTiddler(title2);
    if (["$SiteTitle", "$SiteSubTitle", "$TitleBar"].includes(title2)) (_a = tw2.core.dom.$$("*[tiddler-include]")) == null ? void 0 : _a.forEach(tw2.core.render.tiddlerSpanInclude);
    else if (tw2.core.tiddlers.isPackageList(t)) {
      if (confirm("Would you like to reload?")) {
        tw2.core.store.save();
        tw2.events.send("reboot.hard");
      }
    } else if (tw2.core.tiddlers.isRunnableTiddler(t)) {
      if (confirm(`Code '${t.title}' was edited. Reload now to apply changes?`)) {
        tw2.core.store.save();
        tw2.events.send("reboot.hard");
      }
    } else if (tw2.core.tiddlers.tiddlerIsATemplate(t)) {
      if (confirm(`Template '${t.title}' was edited. Reload now to apply changes?`)) {
        tw2.core.store.save();
        tw2.events.send("reboot.hard");
      }
    }
  }
  function renderLayout() {
    document.body.innerHTML = activeLayoutText();
    tw2.core.dom.divVisibleTiddlers = tw2.core.dom.$("visible-tiddlers");
    tw2.core.dom.preview = tw2.core.dom.$("preview-dialog");
  }
  function activeLayoutText() {
    let title2 = currentLayoutTitle();
    let t = title2 !== "$MainLayout" && tw2.run.getTiddler(title2);
    if (t && t.text) return t.text;
    return tw2.run.getTiddler("$MainLayout").text;
  }
  function currentLayoutTitle() {
    var _a;
    return (((_a = tw2.run.getTiddler("$Layout")) == null ? void 0 : _a.text) || "").replace(/[\[\]]/g, "").trim() || "$MainLayout";
  }
  function layoutTitleForTheme(theme) {
    let sec = theme && tw2.run.getSection(theme, "MainLayout");
    let m2 = sec && sec.text && sec.text.trim().match(/^\[\[(.+)\]\]$/);
    return m2 ? m2[1] : "$MainLayout";
  }
  function button(text2, message, payload, id = "", attr = "", className = "") {
    if (text2.match(/[<\{]/))
      text2 = tw2.core.render.renderTWikki({ text: text2 });
    else text2 = tw2.core.common.escapeHtml(text2);
    if (text2.match(/<svg/)) className += " icon";
    let paramAttribute = "";
    if (payload) {
      if (typeof payload === "object") payload = JSON.stringify(payload);
      else if (typeof payload !== "string") payload = String(payload);
      paramAttribute = ` data-params="---enc:${tw2.core.common.encoder(payload)}"`;
    }
    return `<button${id ? ' id="' + id + '"' : ""} class="${className}" data-msg="${message}" ${paramAttribute} ${attr}>${text2}</button>`;
  }
  function dialog(opts = {}) {
    var _a;
    let { id, title: title2 = "", html = "", className = "", buttons = [], onClose, modal = true } = opts;
    if (id) (_a = document.getElementById(id)) == null ? void 0 : _a.remove();
    let el2 = document.createElement("dialog");
    if (id) el2.id = id;
    el2.className = ("tw-dialog " + className).trim();
    let head = title2 ? `<h3 class="tw-dialog-title">${tw2.core.common.escapeHtml(title2)}</h3>` : "";
    el2.innerHTML = `${head}<div class="tw-dialog-content">${html}</div><div class="tw-dialog-toolbar toolbar"></div>`;
    let content = el2.querySelector(".tw-dialog-content");
    let toolbar = el2.querySelector(".tw-dialog-toolbar");
    let close = () => el2.close();
    el2.addEventListener("close", () => {
      el2.remove();
      if (onClose) onClose();
    });
    let api = { el: el2, content, toolbar, close, setContent: (h) => content.innerHTML = h };
    buttons.forEach((b) => {
      toolbar.insertAdjacentHTML("beforeend", button(b.text, b.msg || "", b.payload, b.id || "", b.attr || "", b.className || ""));
      let btnEl = toolbar.lastElementChild;
      btnEl.addEventListener("click", (ev) => {
        if (b.onClick) {
          ev.preventDefault();
          b.onClick(ev, api);
        }
        if (b.close) close();
      });
    });
    document.body.appendChild(el2);
    if (modal) el2.showModal();
    else el2.show();
    return api;
  }
  function section({ name: name3, content, id, attr = "" }) {
    if (!id) id = randstr();
    return `<details ${attr}><summary>${name3}</summary><div id="${id}">${content}</div></details>`;
  }
  function expand({ name: name3, content, id, attr = "" }) {
    if (!id) id = randstr();
    return `<details ${attr}><summary style="display:inline">${name3}</summary><div id="${id}">${content}</div></details>`;
  }
  function expose({ name: name3, content, message, payload, id, attr = "" }) {
    if (!id) id = randstr();
    return `<details ${attr}><summary data-msg="${message}" data-params="${payload}" data-target="${id}" data-default="true">${name3}</summary><div id="${id}">${content}</div></details>`;
  }
  function randstr() {
    return Math.random().toString(36).replace("0.", "");
  }
}
function coreWorkspaces(tw2) {
  const name2 = "core.workspaces";
  const version2 = "0.25.0";
  const platform2 = "0.27.0";
  if (!tw2.store.global.get("workspaces")) tw2.store.global.set("workspaces", ["default"]);
  if (!tw2.store.global.get("workspace")) tw2.store.global.set("workspace", "default");
  bootstrapFromQuery();
  tw2.workspace = sessionStorage.getItem("workspace") || tw2.store.global.get("workspace") || "default";
  try {
    workspaceSwitch(tw2.workspace);
  } catch {
    console.warn(`Unknown 'workspace ${tw2.workspace}', switching to default`);
    sessionStorage.removeItem("workspace");
    workspaceSwitch();
  }
  const run2 = () => {
    tw2.events.subscribe("workspace.switch", workspaceSwitch, name2);
    tw2.events.subscribe("workspace.load", workspaceLoad, name2);
    tw2.events.subscribe("workspace.create", workspaceCreate, name2);
    tw2.events.subscribe("workspace.delete", workspaceDelete, name2);
    tw2.events.subscribe("workspace.delete.ui", workspaceDeleteUI, name2);
    tw2.events.subscribe("workspace.clone", workspaceCloneUI, name2);
  };
  const exports$12 = {
    workspaceCreate,
    workspaceDelete,
    workspaceSwitch,
    workspaceLoad
  };
  return { name: name2, version: version2, platform: platform2, exports: exports$12, run: run2 };
  function workspaceDeleteUI(workspace) {
    if (!confirm(`Sure you want to delete the workspace '${workspace}'? This is irrevocable unless you have backups!`)) return;
    workspaceDelete(workspace);
    tw2.ui.notify(`Workspace '${workspace} was deleted`, "S");
  }
  function workspaceCloneUI(workspace) {
    workspaceCreate(workspace, true);
    tw2.ui.notify(`Workspace '${workspace} was cloned`, "S");
  }
  function workspaceCreate(name3, clone) {
    let currentWorkspace = tw2.store.global.get("workspace");
    let workspaces = tw2.store.global.get("workspaces");
    let index = workspaces.indexOf(name3);
    if (index >= 0) throw new Error(`workspaceCreate Failed: Workspace '${name3}' already exists!`);
    workspaces.push(name3);
    tw2.store.global.set("workspaces", workspaces);
    if (clone) {
      workspaceMigrate(currentWorkspace, name3, {
        tiddlers: tw2.store.get("tiddlers"),
        "tiddlers-visible": tw2.store.get("tiddlers-visible"),
        "tiddlers-trashed": tw2.store.get("tiddlers-trashed")
      });
    }
  }
  function workspaceSwitch(name3) {
    let workspaces = tw2.store.global.get("workspaces");
    let index = name3 ? workspaces.indexOf(name3) : 0;
    if (index < 0) throw new Error(`workspaceSwitch Failed: Workspace '${name3}' not found!`);
    name3 = workspaces[index];
    tw2.store.global.set("workspace", name3);
    sessionStorage.setItem("workspace", name3);
    tw2.workspace = name3;
  }
  function workspaceLoad(name3) {
    workspaceSwitch(name3);
    tw2.events.send("reboot.hard");
  }
  function workspaceDelete(name3) {
    let workspaces = tw2.store.global.get("workspaces");
    let currentWorkspace = tw2.store.global.get("workspace");
    let index = workspaces.indexOf(name3);
    if (index < 0) throw new Error(`workspaceDelete Failed: Workspace '${name3}' not found!`);
    if (name3 === currentWorkspace) throw new Error(`workspaceDelete Failed: Cannot delete current workspace '${name3}'! Please switch first.`);
    tw2.store.clearWorkspace(name3);
    workspaces.splice(index, 1);
    tw2.store.global.set("workspaces", workspaces);
  }
  function workspaceMigrate(current, name3, source) {
    workspaceSwitch(name3);
    Object.keys(source).forEach((k) => {
      tw2.store.set(k, source[k]);
    });
    if (current) workspaceSwitch(current);
  }
  function bootstrapFromQuery() {
    const params2 = new URLSearchParams(location.search);
    const wsFromQuery = params2.get("ws");
    if (!wsFromQuery) return;
    const known = (tw2.store.global.get("workspaces") || []).indexOf(wsFromQuery) >= 0;
    if (!known) {
      console.warn(`Unknown 'workspace ${wsFromQuery}' from ?ws=, ignoring`);
      return;
    }
    sessionStorage.setItem("workspace", wsFromQuery);
    params2.delete("ws");
    const cleanSearch = params2.toString();
    const cleanUrl = location.pathname + (cleanSearch ? "?" + cleanSearch : "") + location.hash;
    try {
      location.replace(cleanUrl);
    } catch {
    }
  }
}
const tiddlers = [
  {
    title: "$BasePackage",
    text: "* code: base\n* namespace: base\n* version: 0.0.1\n* url: https://cawoodm.github.io/twikki/packages/base.json\n* overwrite: yes\n* save: no",
    tags: [
      "$Shadow",
      "$Package"
    ],
    type: "list",
    created: "2024-11-11T11:53:50.065Z",
    updated: "2024-11-11T12:14:05.512Z"
  },
  {
    title: "$BaseReset",
    text: "/* ============================================================\n   CSS Reset — browser normalization only.\n   Loaded into the `base` cascade layer by $CoreThemeManager.\n   ============================================================ */\nhtml {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n}\n\nbody,\np,\nol,\nul {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\na {\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\na[data-msg]:hover {\n  cursor: pointer;\n}",
    tags: [
      "$Shadow",
      "$StyleSheet"
    ],
    type: "css",
    created: "2026-06-09T08:41:45.802Z",
    updated: "2026-06-09T08:41:45.802Z"
  },
  {
    title: "$BaseVariables",
    text: "/* ============================================================\n   Design tokens — the single source of truth for every CSS\n   variable used anywhere in core or themes, with light defaults.\n   Loaded into the `base` cascade layer by $CoreThemeManager.\n   Themes override individual tokens from the `theme` layer.\n   ============================================================ */\n:root {\n  /* ---- Backgrounds ---- */\n  --colbg1: #fdeeee; /* main pane behind notes */\n  --colbg2: #efefef; /* note cards, dialogs, popovers */\n  --colbg3: #dfdfdf; /* sidebar, tab strip, raised chrome */\n  --colbgi: #efefef; /* form inputs */\n\n  /* ---- Foreground ---- */\n  --colfg:  #323232; /* body text */\n  --colfgi: #373737; /* input text */\n\n  /* ---- Neutrals & accents ---- */\n  --col0: #323232;   /* shadows */\n  --col1: #6e6e6e;   /* muted text, icons */\n  --col3: #8fbfdf;   /* filled controls (buttons, th) */\n  --col4: #8d8d8d;   /* hairline borders */\n  --col6: #6db193;   /* links, hover accent */\n\n  /* ---- Foreground over accent/error/notify backgrounds ---- */\n  --col-on-accent: #fff;\n\n  /* ---- Error / critical / warning ---- */\n  --col-error: #c0392b;\n  --col-warning: #e0a000;\n\n  /* ---- Notification background (rgba components) ---- */\n  --notify-rgba: 210, 180, 90;\n\n  /* ---- Radii ---- */\n  --rad1: 0.3rem;\n  --rad2: 0.3rem;\n  --rad3: 0.3rem;\n  --rad4: 0.3rem;\n\n  /* ---- Layout tokens ---- */\n  --sidebar-w: clamp(220px, 24vw, 300px);\n  --accent: #6db193;\n  --accent-2: #8fbfdf;\n\n  /* ---- Search ---- */\n  --search-hit-bg: #fff59d; /* highlighted search hit (SearchHighlightPlugin) */\n\n  /* Derive tab colours from the palette so every theme gets sensible\n     tabs without redefining them: inactive matches the top-bar/chrome\n     (--colbg3); active matches the note pane (--colbg2). A theme can\n     still override these explicitly. */\n  --tab-bg: var(--colbg3);\n  --tab-active-bg: var(--colbg2);\n}",
    tags: [
      "$Shadow",
      "$StyleSheet"
    ],
    type: "css",
    created: "2026-06-22T13:04:55.188Z",
    updated: "2026-06-23T19:56:30.686Z"
  },
  {
    title: "$CorePackages",
    text: "- packages/base.json force",
    tags: [
      "$Shadow"
    ],
    type: "list",
    created: "2024-11-03T20:36:53.291Z",
    updated: "2026-06-16T06:23:24.608Z"
  },
  {
    title: "$CoreThemeAppearance",
    text: `/* ============================================================
   Universal component appearance for the 3-pane UI.
   Token-driven: themes recolour everything by overriding the
   CSS variables (defaults live in $BaseVariables).
   Structure/layout lives in $CoreThemeLayout; this file is looks.
   Part of the active theme's bullet list (loaded into \`theme\` layer).
   ============================================================ */

* {
  font-family:
    -apple-system,
    system-ui,
    'Segoe UI',
    Inter,
    Roboto,
    Helvetica,
    Arial,
    sans-serif;
}

body {
  background-color: var(--colbg1);
  color: var(--colfg);
  font-size: 0.95rem;
  line-height: 1.5;
}

a:not([class]) {
  color: var(--col6);
  font-weight: 600;
  text-decoration-skip-ink: auto;
}

/* Thin, unobtrusive scrollbars everywhere */
* {
  scrollbar-width: thin;
  scrollbar-color: var(--col4) transparent;
}

/* ============================================================
   Sidebar + explorer
   ============================================================ */
#sidebar {
  border-right: 1px solid var(--col4);
}

#sidebar > #header {
  padding: calc(12px + env(safe-area-inset-top, 0)) 14px 6px;
}

#site-title h1 {
  font-size: 1.15rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
  letter-spacing: -0.01em;
}

#site-subtitle {
  font-size: 0.75rem;
  color: var(--col1);
}

#explorer-search {
  padding: 6px 12px 10px;
}

#explorer {
  padding: 4px 8px 12px;
}

/* Sidebar footer: existing toolbar + selectors */
#sidebar-footer {
  border-top: 1px solid var(--col4);
  padding: 8px 12px;
}

#header-tools {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
}

.sidebar-selectors {
  display: flex;
  gap: 6px;
  margin-top: 8px;
}

/* ============================================================
   Main pane — top bar, tabs
   ============================================================ */
#main-topbar {
  background-color: var(--colbg3);
  border-bottom: 1px solid var(--col4);
  min-height: 38px;
  padding-top: env(safe-area-inset-top, 0);
  padding-right: env(safe-area-inset-right, 0);
}

#menu-toggle {
  padding: 0 12px;
  font-size: 1.1rem;
  color: var(--col1);
  background: transparent;
  border: none;
}

/* ============================================================
   Notes (cards / active pane)
   ============================================================ */
#visible-tiddlers {
  padding: 0;
}

div.tiddler {
  max-width: 860px;
  margin: 24px auto;
  padding: 24px 32px;
  background-color: var(--colbg2);
  border: 1px solid var(--col4);
  border-radius: var(--rad1) var(--rad2) var(--rad3) var(--rad4);
}

div.tiddler-nosave {
  border-color: var(--col6);
}

div.tiddler-readonly {
  border-left: 3px solid var(--col1);
}

div.shadowtrue {
  border-left: 3px solid var(--col4);
}

div.shadowtrue div.title {
  font-style: italic;
}

div.tiddler div.title {
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.01em;
  padding-bottom: 10px;
  margin-bottom: 14px;
  border-bottom: 1px solid var(--col4);
}

div.tiddler div.title button {
  border: none;
  background: transparent;
  float: right;
}

div.tiddler div.modified {
  text-align: right;
  font-style: italic;
  font-size: 0.78rem;
  color: var(--col1);
}

div.tiddler div.text {
  scrollbar-color: var(--col4) transparent;
  scrollbar-width: thin;
  overflow-wrap: anywhere;
}

div.tiddler div.text p {
  margin: 14px 0;
}

div.tiddler div.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
  font-size: 0.78rem;
  color: var(--col1);
  margin-top: 16px;
}

/* Tag pills are picker triggers (see PickerPlugin); style them like the
   explorer's tag pills rather than the generic icon trigger. */
.picker-trigger.tag-pill {
  padding: 2px 10px;
  border-radius: 999px;
  background-color: var(--colbg2);
  border: 1px solid var(--col4);
  color: var(--col1);
  font-size: 0.78rem;
  line-height: 1.4;
  cursor: pointer;
}

.picker-trigger.tag-pill:hover {
  color: var(--col6);
  border-color: var(--col6);
  background-color: var(--colbg2);
}

/* The package pill (footer .meta) is a picker trigger too — a quieter pill that
   fits the small meta line; clicking it lists the package's tiddlers. */
.picker-trigger.pck-pill {
  padding: 1px 8px;
  border-radius: 999px;
  background-color: var(--colbg2);
  border: 1px solid var(--col4);
  color: var(--col1);
  font-size: 0.72rem;
  line-height: 1.4;
  cursor: pointer;
}

.picker-trigger.pck-pill:hover {
  color: var(--col6);
  border-color: var(--col6);
}

div.tiddler div.meta {
  text-align: right;
  font-size: 0.72rem;
  color: var(--col1);
}

/* ============================================================
   Buttons
   ============================================================ */
button {
  fill: var(--col1);
  color: var(--colfg);
  border: 1px solid var(--col4);
  background-color: var(--col3);
  border-radius: var(--rad1);
  padding: 4px 10px;
  cursor: pointer;
}

button:hover {
  filter: brightness(1.1);
}

button.icon {
  fill: var(--col1);
  background-color: transparent;
  border: none;
  padding: 4px;
  cursor: pointer;
}

button.icon:hover svg,
button:hover svg {
  fill: var(--col6);
}

/* ============================================================
   Forms & inputs
   ============================================================ */
input,
textarea,
select {
  background-color: var(--colbgi);
  color: var(--colfgi);
  border: 1px solid var(--col4);
  border-radius: var(--rad1);
  padding: 6px 8px;
  font-size: 0.9rem;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: var(--col6);
}

#search {
  padding: 8px 10px;
}

#search-results {
  padding: 8px;
  background: var(--colbg2);
  border: 1px solid var(--col4);
  border-radius: var(--rad1);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.4);
}

#search-results .tiddler-list {
  padding: 4px 8px;
  border-radius: var(--rad1);
}

#search-results .tiddler-list:hover {
  background-color: var(--colbg3);
}

#search-results .tiddler-list[data-msg] {
  cursor: pointer;
}

#search-results a {
  color: var(--colfg);
}

/* ============================================================
   Dialogs (edit / preview)
   ============================================================ */
dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
}

/* Core dialog (tw.ui.dialog) — shared chrome for all plugin dialogs */
dialog.tw-dialog {
  background-color: var(--colbg2);
  color: var(--colfg);
  border: 1px solid var(--col4);
  border-radius: var(--rad1);
  padding: 1rem;
  min-width: min(420px, 92vw);
  max-width: min(720px, 92vw);
  max-height: 80vh;
  overflow: auto;
}

dialog.tw-dialog .tw-dialog-title {
  margin: 0 0 0.6rem;
}

dialog.tw-dialog .tw-dialog-toolbar {
  text-align: right;
  margin-top: 0.75rem;
}

dialog.tw-dialog .tw-dialog-toolbar button {
  margin-left: 0.4rem;
}

dialog#new-dialog {
  width: 70%;
  height: 75%;
  background-color: var(--colbg2);
  color: var(--colfg);
  border: 1px solid var(--col4);
  border-radius: var(--rad1);
}

dialog#new-dialog form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

dialog#new-dialog form div.text {
  flex-grow: 1;
  min-height: 240px;
}

dialog#new-dialog form input,
dialog#new-dialog form textarea {
  width: 100%;
  height: 100%;
}

/* Tiddler-body editor: monospace for legible code/markup editing across all themes.
   \`ui-monospace\` picks the OS default (SF Mono on macOS, Cascadia Mono on Win11). */
dialog#new-dialog form textarea {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  tab-size: 2;
}

dialog#new-dialog div.title input {
  font-size: 1.2rem;
  font-weight: 700;
}

dialog#new-dialog div.toolbar {
  text-align: right;
}

dialog#preview-dialog {
  width: 90%;
  height: 90%;
  min-height: 500px;
  border: 0;
  background-color: transparent;
  overflow-y: hidden;
}

dialog#preview-dialog div.tiddler {
  height: 100%;
  max-width: none;
  margin: 0;
}

dialog#preview-dialog div.text {
  height: 100%;
  max-height: 1000px;
}

/* ============================================================
   Notifications
   ============================================================ */
#notify {
  position: fixed;
  z-index: 30;
  left: 50%;
  transform: translate(-50%);
  bottom: 16px;
  min-width: 250px;
  max-width: 80vw;
  background-color: rgba(var(--notify-rgba), 0.96);
  color: var(--col-on-accent);
  text-align: left;
  border-radius: var(--rad1);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.5);
  padding: 14px 18px;
  line-height: 1.35;
}

div.notifyHidden {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.3s linear, opacity 0.3s linear;
}

div.notifyShow {
  visibility: visible;
  opacity: 1;
  transition: visibility 0.3s linear, opacity 0.3s linear;
}

/* ============================================================
   Typography & content
   ============================================================ */
h1 { font-size: 1.8rem; padding: 4px 0; }
h2 { font-size: 1.45rem; padding: 4px 0; }
h3 { font-size: 1.2rem; padding: 3px 0; }
h4 { font-size: 1.05rem; padding: 2px 0; }

div.tiddler ul,
div.tiddler ol {
  margin-left: 1.4em;
  margin-bottom: 0.6em;
}

div.tiddler ul { list-style: disc; }
div.tiddler ol { list-style: decimal; }

li li {
  margin-left: 16px;
}

blockquote {
  background-color: var(--colbg3);
  border-left: 4px solid var(--col6);
  margin: 1.2em 0;
  padding: 0.6em 1em;
  border-radius: 0 var(--rad1) var(--rad1) 0;
  quotes: "\\201C" "\\201D" "\\2018" "\\2019";
}

code {
  background-color: var(--colbg3);
  font-family: 'Cascadia Code', Consolas, 'Courier New', monospace;
  padding: 0.15rem 0.4rem;
  margin: 0 0.15rem;
  font-size: 88%;
  border: 1px solid var(--col4);
  border-radius: 4px;
}

pre {
  white-space: pre-wrap;
}

pre > code {
  display: block;
  padding: 1rem 1.25rem;
  white-space: pre;
  overflow-x: auto;
}

table {
  border-collapse: collapse;
  max-width: 100%;
}

@media (max-width: 600px) {
  table {
    display: block;
    overflow-x: auto;
  }
}

th,
td {
  padding: 6px 10px;
  border: 1px solid var(--col4);
}

th {
  font-weight: 700;
  background-color: var(--col3);
  color: var(--col-on-accent);
}

span.error {
  color: var(--col-on-accent);
  background-color: var(--col-error);
  padding: 0 4px;
  border-radius: 3px;
}

/* ============================================================
   Touch ergonomics — coarse pointers get larger hit targets and
   16px inputs (smaller would trigger iOS focus-zoom).
   ============================================================ */
@media (pointer: coarse) {
  input,
  textarea,
  select {
    font-size: 16px;
  }

  button,
  button.icon,
  #menu-toggle,
  .picker-trigger {
    min-height: 44px;
    min-width: 44px;
  }
}`,
    tags: [
      "$Shadow",
      "$StyleSheet"
    ],
    type: "css",
    created: "2026-06-24T11:08:54.634Z",
    updated: "2026-06-24T11:08:54.654Z"
  },
  {
    title: "$CoreThemeDark",
    text: "* [[$CoreThemeLayout]]\n* [[$CoreThemeAppearance]]\n* [[$CoreThemeDarkPalette]]",
    tags: [
      "$Shadow",
      "$Theme",
      "$ThemeDark"
    ],
    type: "x-twikki",
    created: "2024-11-03T20:36:53.294Z",
    updated: "2026-06-09T08:41:45.804Z"
  },
  {
    title: "$CoreThemeDarkPalette",
    text: "/* ============================================================\n   Dark palette — token overrides for $CoreThemeDark.\n   Pure :root overrides; structure and component appearance are\n   inherited from $CoreThemeLayout / $CoreThemeAppearance.\n   Part of the active theme's bullet list (loaded into `theme` layer).\n   ============================================================ */\n:root {\n  --colbg1: #101f1f;\n  --colbg2: #101f1f;\n  --colbg3: #2a2a2a;\n  --colbgi: #3f3f3f;\n  --colfgi: #d7d7d7;\n  --colfg: rgb(205, 205, 205);\n  --col0: #cdcdcd;\n  --col1: #6e6e6e;\n  --col3: #8fbfdf;\n  --col4: #8d8d8d;\n  --col6: #6db193;\n}",
    tags: [
      "$Shadow",
      "$StyleSheet"
    ],
    type: "css",
    created: "2026-06-09T08:41:45.804Z",
    updated: "2026-06-09T08:41:45.804Z"
  },
  {
    title: "$CoreThemeLayout",
    text: "/* ============================================================\n   App shell — 3-pane grid (sidebar | main)\n   Structural only; colours/typography come from $CoreThemeAppearance.\n   Part of the active theme's bullet list (loaded into `theme` layer).\n   ============================================================ */\n#app {\n  display: grid;\n  grid-template-columns: var(--sidebar-w, 280px) 1fr;\n  width: 100%;\n  height: 100vh; /* fallback for browsers without dvh */\n  height: 100dvh;\n  overflow: hidden;\n}\n\n/* ---- Left sidebar ---- */\n#sidebar {\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  overflow: hidden;\n  background-color: var(--colbg3);\n  padding-left: env(safe-area-inset-left, 0);\n  padding-bottom: env(safe-area-inset-bottom, 0);\n}\n\n#sidebar > #header {\n  flex: 0 0 auto;\n}\n\n#explorer-search {\n  flex: 0 0 auto;\n  position: relative;\n}\n\n#explorer-search #search {\n  width: 100%;\n}\n\n#search-results {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 100%;\n  z-index: 5;\n  max-height: 60vh;\n  overflow-y: auto;\n  background: var(--colbg2);\n}\n\n#explorer {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n}\n\n#sidebar-footer {\n  flex: 0 0 auto;\n}\n\n/* ---- Main pane ---- */\n#main {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  min-height: 0;\n  overflow: hidden;\n}\n\n#main-topbar {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: stretch;\n  position: relative; /* positioning context for the relocated mobile search */\n}\n\n/* Top-bar search toggle/close are mobile-only chrome — hidden on desktop, where\n   the single #explorer-search box lives in the sidebar. */\n#topbar-search-toggle,\n#topbar-search-close {\n  display: none;\n}\n\n#tab-strip {\n  flex: 1 1 auto;\n  display: flex;\n  align-items: stretch;\n  overflow-x: auto;\n  overflow-y: hidden;\n  -webkit-overflow-scrolling: touch;\n}\n\n#visible-tiddlers {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n}\n\n#menu-toggle {\n  display: none;\n  flex: 0 0 auto;\n}\n\n#sidebar-scrim {\n  display: none;\n}\n\n/* Tabbed story: show only the active note. Gated behind `.tabbed`\n   (added by the tabs plugin) so this is a no-op when the plugin is\n   absent — notes then simply stack as before. */\n#visible-tiddlers.tabbed > .tiddler {\n  display: none;\n}\n\n#visible-tiddlers.tabbed > .tiddler.tab-active {\n  display: block;\n}\n\n/* River mode: no tabs — every open note stacks (the .tabbed rule above is off).\n   Hide the strip and collapse the now-empty top bar (the mobile menu-toggle\n   still keeps it visible on small screens). */\n.mode-river #tab-strip {\n  display: none;\n}\n\n.mode-river #main-topbar {\n  min-height: 0;\n  border-bottom: none;\n}\n\n/* ============================================================\n   Header-bar layout ($MainLayoutHeader) — structural only.\n   A top header bar over the main content (no left explorer pane;\n   navigation is via search + tabs). Scoped to #app.layout-header\n   so the default sidebar grid is untouched; visuals come from the theme.\n   ============================================================ */\n#app.layout-header {\n  display: flex;\n  flex-direction: column;\n}\n\n#app.layout-header > #header {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  /* The search box lives here; its #search-results dropdown is absolutely\n     positioned and overhangs #main below. #main follows the header in the DOM,\n     so without an explicit stacking context its #tab-strip would paint over the\n     dropdown. Elevate the whole header above #main so the results stay on top. */\n  position: relative;\n  z-index: 10;\n}\n\n#app.layout-header #header-col1 {\n  flex: 0 0 auto;\n}\n\n#app.layout-header #header-col2 {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n\n#app.layout-header #header-col3 {\n  flex: 1 1 auto;\n  position: relative;\n}\n\n#app.layout-header #header-col3 #search {\n  width: 100%;\n}\n\n#app.layout-header > #main {\n  flex: 1 1 auto;\n  min-height: 0;\n}\n\n/* ============================================================\n   Tablet — keep the two-pane grid but let the sidebar breathe.\n   Below the 600px phone tier the sidebar becomes a drawer (next block).\n   ============================================================ */\n@media (min-width: 601px) and (max-width: 1024px) {\n  #app {\n    grid-template-columns: clamp(220px, 24vw, 280px) 1fr;\n  }\n}\n\n/* ============================================================\n   Responsive — sidebar collapses to a slide-in drawer\n   ============================================================ */\n@media (max-width: 600px) {\n  html {\n    font-size: 14px;\n  }\n\n  #app {\n    grid-template-columns: 1fr;\n  }\n\n  #sidebar {\n    position: fixed;\n    z-index: 20;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: min(85vw, var(--sidebar-w, 280px));\n    transform: translateX(-100%);\n    transition: transform 0.2s ease;\n    box-shadow: 2px 0 12px var(--col0);\n  }\n\n  #sidebar.open {\n    transform: translateX(0);\n  }\n\n  /* Dimming backdrop behind the open drawer; tap to close (inline onclick).\n     The global rule (below) keeps it hidden; only the open drawer reveals it,\n     and only on phones (this rule lives inside the ≤600px block). */\n  #sidebar.open ~ #sidebar-scrim {\n    display: block;\n    position: fixed;\n    inset: 0;\n    z-index: 15; /* above content, below the drawer (#sidebar is z-index:20) */\n    background: rgba(0, 0, 0, 0.4);\n  }\n\n  #menu-toggle {\n    display: inline-flex;\n    align-items: center;\n  }\n\n  /* Top-bar search: the 🔍 icon shows; tapping it morphs the bar into a search\n     field (#main-topbar gets `.searching`), hiding the tabs + icon. The single\n     #explorer-search box is relocated into #main-topbar here (core.search.js)\n     and shown only while `.searching`. */\n  #topbar-search-toggle {\n    display: inline-flex;\n    align-items: center;\n  }\n\n  #main-topbar > #explorer-search {\n    display: none;\n  }\n\n  #main-topbar.searching #tab-strip,\n  #main-topbar.searching #topbar-search-toggle {\n    display: none;\n  }\n\n  #main-topbar.searching > #explorer-search {\n    display: flex;\n    flex: 1 1 auto;\n    align-items: center;\n    gap: 4px;\n    padding: 0 6px;\n  }\n\n  #main-topbar.searching > #topbar-search-close {\n    display: inline-flex;\n    align-items: center;\n  }\n\n  #main-topbar.searching #search {\n    flex: 1 1 auto;\n    min-width: 0;\n  }\n\n  /* The in-drawer dropdown would be capped at the ~220px drawer width and\n     unreadable, so on phones the drawer search results overlay full-width\n     (100vw) just below the input. `top` is set in JS (core.search.js) to the\n     input's position, since the drawer header height varies. */\n  #search-results {\n    position: fixed;\n    left: 0;\n    right: auto;\n    width: 100vw;\n    max-height: 70dvh;\n    z-index: 25; /* above the drawer (20) and its scrim (15) */\n  }\n}",
    tags: [
      "$Shadow",
      "$StyleSheet"
    ],
    type: "css",
    created: "2026-06-29T19:34:03.550Z",
    updated: "2026-06-29T19:40:20.198Z"
  },
  {
    title: "$CoreThemeLight",
    text: "* [[$CoreThemeLayout]]\n* [[$CoreThemeAppearance]]\n* [[$CoreThemePalette]]",
    tags: [
      "$Shadow",
      "$Theme"
    ],
    type: "x-twikki",
    created: "2024-11-03T20:36:53.300Z",
    updated: "2026-06-09T08:41:45.806Z"
  },
  {
    title: "$CoreThemePalette",
    text: "/* ============================================================\n   Light palette — token overrides for the default $CoreThemeLight.\n   The base light defaults already live in $BaseVariables, so this\n   file is intentionally empty. Themes that want a custom light\n   look can ship their own *Palette in place of this one.\n   Part of the active theme's bullet list (loaded into `theme` layer).\n   ============================================================ */",
    tags: [
      "$Shadow",
      "$StyleSheet"
    ],
    type: "css",
    created: "2026-06-09T08:41:45.806Z",
    updated: "2026-06-09T08:41:45.806Z"
  },
  {
    title: "$ExtensionPackages",
    text: "- packages/icons.json force\n- packages/demo.json force\n- packages/website.json force\n- packages/themes.json force",
    tags: [
      "$Shadow"
    ],
    type: "list",
    created: "2026-05-30T05:48:40.869Z",
    updated: "2026-06-16T06:26:01.127Z"
  },
  {
    title: "$IconBackup",
    text: "Backup",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2024-11-03T20:36:53.302Z",
    updated: "2024-10-04T20:30:49.491Z"
  },
  {
    title: "$IconCancel",
    text: "ⓧ",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2024-11-03T20:36:53.307Z",
    updated: "2024-10-04T19:45:16.210Z"
  },
  {
    title: "$IconCloseAll",
    text: "Close All",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2024-11-03T20:36:53.307Z",
    updated: "2024-10-04T20:27:08.037Z"
  },
  {
    title: "$IconDelete",
    text: "🗑",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2024-11-03T20:36:53.307Z",
    updated: "2024-10-04T19:45:16.210Z"
  },
  {
    title: "$IconDone",
    text: "✓",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2024-11-03T20:36:53.307Z",
    updated: "2024-10-04T19:45:16.210Z"
  },
  {
    title: "$IconEdit",
    text: "✎",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2024-11-03T20:36:53.315Z",
    updated: "2024-10-04T19:45:16.211Z"
  },
  {
    title: "$IconFavorite",
    text: "⭐",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2024-11-03T20:36:53.317Z",
    updated: "2024-10-04T19:45:16.211Z"
  },
  {
    title: "$IconHelp",
    text: "?",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2024-11-03T20:36:53.317Z",
    updated: "2024-10-04T19:45:16.212Z"
  },
  {
    title: "$IconNew",
    text: "New",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2024-11-03T20:36:53.321Z",
    updated: "2024-10-04T19:45:16.212Z"
  },
  {
    title: "$IconOpenAll",
    text: "Open All",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2024-11-03T20:36:53.321Z",
    updated: "2024-10-04T20:28:35.355Z"
  },
  {
    title: "$IconPull",
    text: "Pull",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2024-11-03T20:36:53.323Z",
    updated: "2024-10-24T10:52:02.247Z"
  },
  {
    title: "$IconPush",
    text: "Push",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2024-11-03T20:36:53.323Z",
    updated: "2024-10-24T10:51:54.461Z"
  },
  {
    title: "$IconRefresh",
    text: "🔃",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2024-11-03T20:36:53.323Z",
    updated: "2024-10-04T20:21:19.367Z"
  },
  {
    title: "$IconRestore",
    text: "Restore",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2024-11-03T20:36:53.323Z",
    updated: "2024-10-04T20:35:27.614Z"
  },
  {
    title: "$IconSave",
    text: "🖫",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2024-11-03T20:36:53.331Z",
    updated: "2024-10-04T19:45:16.213Z"
  },
  {
    title: "$IconSettings",
    text: "⚙️",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2024-11-03T20:36:53.333Z",
    updated: "2024-10-04T19:45:16.213Z"
  },
  {
    title: "$IconSynch",
    text: "Synch",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2024-11-03T20:36:53.333Z",
    updated: "2024-10-04T20:37:06.010Z"
  },
  {
    title: "$IconTag",
    text: "Tags",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2024-11-03T20:36:53.338Z",
    updated: "2024-10-04T19:45:16.214Z"
  },
  {
    title: "$IconTheme",
    text: "Theme",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2026-06-16T19:42:03.430Z",
    updated: "2026-06-16T19:42:03.715Z"
  },
  {
    title: "$IconWorkspace",
    text: "Workspace",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2026-06-16T19:41:33.139Z",
    updated: "2026-06-16T19:41:54.043Z"
  },
  {
    title: "$Layout",
    text: "[[$MainLayout]]",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2026-06-02T14:41:55.290Z",
    updated: "2026-06-02T14:41:55.295Z"
  },
  {
    title: "$MainLayout",
    text: `<div id="app">
  <aside id="sidebar">
    <div id="header">
      <div id="site-title" tiddler-include="$SiteTitle"><h1>TWikki</h1></div>
      <div id="site-subtitle" tiddler-include="$SiteSubTitle">...</div>
    </div>
    <div id="explorer-search">
      <input
        id="search"
        type="search"
        placeholder="Search notes…"
        autocomplete="off"
      />
      <div id="search-results"></div>
    </div>
    <nav id="explorer">
      <div id="explorer-notes"></div>
      <div id="explorer-tags"></div>
    </nav>
    <div id="sidebar-footer">
      <div id="header-tools">
        <span tiddler-include="$TitleBar"></span>
        <button id="dirty-indicator" class="icon" data-msg="unsaved.show" title="Unsaved changes — click to review" hidden>●</button>
        <span tiddler-include="$Workspaces"></span>
        <span tiddler-include="$Themes"></span>
      </div>
      <div class="sidebar-selectors"></div>
    </div>
  </aside>
  <div
    id="sidebar-scrim"
    onclick="document.getElementById('sidebar').classList.remove('open')"
  ></div>
  <main id="main">
    <div id="main-topbar">
      <button
        id="menu-toggle"
        class="icon"
        title="Toggle sidebar"
        onclick="document.getElementById('sidebar').classList.toggle('open')"
      >
        ☰
      </button>
      <div id="tab-strip"></div>
      <!-- Mobile only: 🔍 morphs the bar into a search field. The single
           #explorer-search box is relocated here from the sidebar on phones
           (see relocateSearch in core.search.js); ✕ collapses it. -->
      <button id="topbar-search-toggle" class="icon" title="Search" aria-label="Search">
        <svg width="22px" height="22px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
      </button>
      <button id="topbar-search-close" class="icon" title="Close search" hidden>✕</button>
    </div>
    <div id="visible-tiddlers"></div>
  </main>
</div>
<dialog id="preview-dialog"></dialog>
<dialog id="new-dialog">
  <form id="new-form">
    <div class="toolbar">
      <button
        class="icon"
        data-msg="form.done"
        tiddler-include="$IconDone"
        title="Done"
      ></button>
      <button
        class="icon"
        data-msg="form.cancel"
        tiddler-include="$IconCancel"
        title="Cancel"
      ></button>
    </div>
    <input id="old-title" type="hidden" />
    <div class="title"><input id="new-title" placeholder="Title" size /></div>
    <div class="text">
      <textarea row="10" id="new-body" placeholder="Text"></textarea>
    </div>
    <div>
      <input
        id="new-type"
        list="new-types"
        onfocus="this.value = null"
        onchange="this.blur()"
      />
      <datalist id="new-types"> </datalist>
    </div>
    <div><span macro="TagInput" params="id:new-tags"></span></div>
  </form>
</dialog>
<div id="notify" class="notifyHidden"></div>`,
    tags: [
      "$Shadow",
      "$Template"
    ],
    type: "html/template",
    created: "2026-06-24T11:15:38.976Z",
    updated: "2026-06-24T11:15:39.002Z"
  },
  {
    title: "$MainLayoutHeader",
    text: '<div id="app" class="layout-header">\n  <div id="header" class="flex">\n    <div id="header-col1" class="flex col1">\n      <div id="site-title" tiddler-include="$SiteTitle"><h1>TWikki</h1></div>\n      <div id="site-subtitle" tiddler-include="$SiteSubTitle">...</div>\n    </div>\n    <div id="header-col2" class="flex col2">\n      <span tiddler-include="$TitleBar"></span>\n      <button id="dirty-indicator" class="icon" data-msg="unsaved.show" title="Unsaved changes — click to review" hidden>●</button>\n      <span tiddler-include="$Workspaces"></span>\n      <span tiddler-include="$Themes"></span>\n    </div>\n    <div id="header-col3" class="flex col3">\n      <input id="search" type="search" placeholder="Search notes…" autocomplete="off"/>\n      <div id="search-results"></div>\n    </div>\n  </div>\n  <main id="main">\n    <div id="main-topbar">\n      <div id="tab-strip"></div>\n    </div>\n    <div id="visible-tiddlers">\n    </div>\n  </main>\n</div>\n<dialog id="preview-dialog">\n</dialog>\n<dialog id="new-dialog">\n  <form id="new-form">\n    <div class="toolbar">\n      <button class="icon" data-msg="form.done" tiddler-include="$IconDone" title="Done"></button>\n      <button class="icon" data-msg="form.cancel" tiddler-include="$IconCancel" title="Cancel"></button>\n    </div>\n    <input id="old-title" type="hidden" />\n    <div class="title"><input id="new-title" placeholder="Title" size /></div>\n    <div class="text"><textarea row="10" id="new-body" placeholder="Text"></textarea></div>\n    <div><input id="new-type" list="new-types" onfocus="this.value=null;" onchange="this.blur();" />\n      <datalist id="new-types">\n      </datalist>\n    </div>\n    <div><span macro="TagInput" params="id:new-tags"></span></div>\n  </form>\n</dialog>\n<div id="notify" class="notifyHidden"></div>',
    tags: [
      "$Shadow",
      "$Template"
    ],
    type: "html/template",
    created: "2026-06-05T09:33:41.008Z",
    updated: "2026-06-05T09:33:41.010Z"
  },
  {
    title: "$Settings",
    text: "{}",
    tags: [
      "$Shadow"
    ],
    type: "json",
    created: "2026-06-27T09:56:47.241Z",
    updated: "2026-07-01T07:33:55.446Z"
  },
  {
    title: "$SettingsLinks",
    text: "* [[$Settings]]\n* [[$TitleBar]]\n  * [[$SiteTitle]]\n  * [[$SiteSubTitle]]\n* [[$Theme]]\n  * [[$Layout]]\n  * [[$MainLayout]]\n  * [[$MainLayoutHeader]]\n  * [[$TiddlerDisplay]]\n* [[$Packages]]\n  * [[$CorePackages]]\n  * [[$ExtensionPackages]]",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2026-06-27T09:56:47.243Z",
    updated: "2026-06-29T19:40:20.203Z"
  },
  {
    title: "$SiteSubTitle",
    text: "Inspired by [TiddlyWiki](https://tiddlywiki.com) ✨",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2024-11-03T20:36:53.343Z",
    updated: "2024-11-09T19:46:00.094Z"
  },
  {
    title: "$SiteTitle",
    text: "# TWikki v{{$TWikkiVersion}}",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2024-11-03T20:36:53.345Z",
    updated: "2024-11-08T11:51:50.970Z"
  },
  {
    title: "$StyleSheetUser",
    text: "/* ============================================================\n   $StyleSheetUser — your custom CSS goes here.\n\n   The active theme's stylesheet is composed as three cascade\n   layers: base → theme → user. Anything you put in this file\n   lives in the `user` layer and overrides any theme rule,\n   regardless of selector specificity. Use it for personal tweaks\n   without forking a theme.\n\n   Example:\n     :root {\n       --col6: hotpink;   // recolour every link\n     }\n     div.tiddler { max-width: 1100px; }\n   ============================================================ */",
    tags: [
      "$Shadow",
      "$StyleSheet"
    ],
    type: "css",
    created: "2026-06-09T08:41:45.807Z",
    updated: "2026-06-09T08:41:45.807Z"
  },
  {
    title: "$Theme",
    text: "[[$CoreThemeLight]]",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2026-05-31T16:47:17.902Z",
    updated: "2026-06-09T08:41:45.808Z"
  },
  {
    title: "$Themes",
    text: "<<ThemeSelector>>",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2026-05-30T18:59:15.410Z",
    updated: "2026-06-04T10:04:49.360Z"
  },
  {
    title: "$TiddlerDisplay",
    text: '<div class="tiddler shadow{{=isRawShadow}}" data-tiddler-id="{{=id}}" data-tiddler-title="$currentTiddler" tabindex="0">\n  <div class="title" title="{{=type}}">\n    {{=title}}\n    <button class="icon" title="close" data-msg="tiddler.close" data-params="$currentTiddler">{{$IconCancel}}</button>\n    {{!editDisabled}}\n    {{!isSection}}\n    <button class="icon" title="edit" {{=editDisabled}} data-msg="tiddler.edit" data-params="$currentTiddler">{{$IconEdit}}</button>\n    <button class="icon" title="delete"{{=editDisabled}} data-msg="tiddler.delete" data-params="$currentTiddler">{{$IconDelete}}</button>\n    {{/!isSection}}\n    {{!notSection}}\n    <button class="icon" title="Edit parent note" data-msg="section.edit" data-params="$currentTiddler">{{$IconEdit}}</button>\n    {{/!notSection}}\n    {{/!editDisabled}}\n  </div>\n  <div class="modified">{{=modified}}</div>\n  <div class="text">{{=fullText}}</div>\n  <div class="tags">{{=tagLinks}}</div>\n  <div class="meta">{{=metaInfo}}</div>\n</div>',
    tags: [
      "$Shadow",
      "$Template"
    ],
    type: "html/template",
    created: "2026-06-02T15:59:38.176Z",
    updated: "2026-06-06T12:52:54.821Z"
  },
  {
    title: "$TiddlerPreview",
    text: '<div class="tiddler" data-tiddler-id="{{=id}}" data-tiddler-title="{{=title}}" tabindex="0">\n  <div class="title" title="{{=type}}">\n    {{=title}}\n    <button class="icon" title="close" data-msg="tiddler.preview.close" data-params="$currentTiddler">{{$IconCancel}}</button>\n    <!-- TODO: Save Button -->\n  </div>\n  <div class="modified">{{=modified}}</div>\n  <div class="text">{{=fullText}}</div>\n  <div class="tags">{{=tagLinks}}</div>\n</div>',
    tags: [
      "$Shadow",
      "$Template"
    ],
    type: "html/template",
    created: "2026-06-02T15:59:39.564Z",
    updated: "2026-06-06T12:10:08.247Z"
  },
  {
    title: "$TiddlerSearchResult",
    text: "tbd<!-- Rendering Search Results -->",
    tags: [
      "$Shadow",
      "$Template"
    ],
    type: "html/template",
    created: "2026-06-02T15:59:41.951Z",
    updated: "2026-06-02T15:59:41.962Z"
  },
  {
    title: "$TiddlerTrashed",
    text: '<div class="tiddler" data-tiddler-id="{{=id}}" data-tiddler-title="{{=title}}" tabindex="0">\n  <div class="title" title="{{=type}}">\n    {{=title}}\n    <button class="icon" title="close" data-msg="tiddler.preview.close" data-params="$currentTiddler">{{$IconCancel}}</button>\n    <button class="icon" title="delete" data-msg="tiddler.trashed.destroy" data-params="$currentTiddler">{{$IconDelete}}</button>\n    <button class="icon" title="restore" data-msg="tiddler.trashed.restore" data-params="$currentTiddler">{{$IconRefresh}}</button>\n  </div>\n  <div class="modified">{{=modified}}</div>\n  <div class="text">{{=fullText}}</div>\n  <div class="tags">{{=tagLinks}}</div>\n</div>',
    tags: [
      "$Shadow",
      "$Template"
    ],
    type: "html/template",
    created: "2026-06-02T15:59:40.598Z",
    updated: "2026-06-06T12:10:08.245Z"
  },
  {
    title: "$TiddlerTypes",
    text: "* x-twikki: TWikki Data\n* plain: Plain Text\n* html: HTML\n* html/template: HTML Template\n* css: StyleSheet\n* script/js: JavaScript\n* markdown: Markdown\n* macro: Macro\n* list: List\n* keyval: Key Values\n* table: Tabular Data\n* json: JSON Data",
    tags: [
      "$Shadow"
    ],
    type: "keyval",
    created: "2024-11-03T20:36:53.368Z",
    updated: "2024-11-08T11:51:29.432Z"
  },
  {
    title: "$TitleBar",
    text: "<<synch.pull>> <<synch.push>> <<synch.full>> <<New>> <<Settings>> ",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2026-05-31T16:02:19.981Z",
    updated: "2026-06-02T13:49:19.931Z"
  },
  {
    title: "$TWikkiVersion",
    text: "0.29.0",
    tags: [
      "$Shadow",
      "$NoEdit"
    ],
    type: "plain",
    created: "2026-07-01T08:31:25.271Z",
    updated: "2026-07-01T08:31:25.545Z"
  },
  {
    title: "$Workspaces",
    text: "<<WorkspaceSelect>>",
    tags: [
      "$Shadow"
    ],
    type: "x-twikki",
    created: "2024-11-03T20:36:53.339Z",
    updated: "2024-11-07T15:13:14.857Z"
  }
];
const coreDefaults = {
  tiddlers
};
(function() {
  const NAME = "twikki";
  const VERSION = "0.29.0";
  const CORE_MODULES = [
    { name: "/core.common.js", factory: coreCommon },
    { name: "/core.js", factory: coreEvents },
    { name: "/core.sections.js", factory: coreSections },
    { name: "/core.params.js", factory: coreParams },
    { name: "/core.templater.js", factory: coreTemplater },
    { name: "/core.dom.js", factory: coreDom },
    { name: "/core.store.js", factory: coreStore },
    { name: "/core.tiddlers.js", factory: coreTiddlers },
    { name: "/core.settings.js", factory: coreSettings },
    { name: "/core.render.js", factory: coreRender },
    { name: "/core.defaults.json", tiddlers: coreDefaults.tiddlers },
    { name: "/core.notifications.js", factory: coreNotifications },
    { name: "/core.ui.js", factory: coreUi },
    { name: "/core.workspaces.js", factory: coreWorkspaces },
    { name: "/core.packaging.js", factory: corePackaging },
    { name: "/core.search.js", factory: coreSearch }
  ];
  overrides();
  let qs;
  let baseUrl;
  let tw2 = {};
  window.tw = tw2;
  function read(key, def) {
    if (key[0] !== "/") key = "/" + key;
    let res = localStorage.getItem(key);
    return res === null ? def : res;
  }
  function write(key, value) {
    if (key[0] !== "/") key = "/" + key;
    return localStorage.setItem(key, value);
  }
  function buildUrl(path, base) {
    if (/^https?:\/\//.test(path)) return path;
    if (!base) {
      base = tw2.storage.get("/ws/baseUrl") || tw2.storage.get("/baseUrl") || window.BASE_URL;
      if (!base) {
        let href = window.location.href.split(/[?#]/)[0];
        const lastSeg = href.substring(href.lastIndexOf("/") + 1);
        if (lastSeg && !lastSeg.includes(".")) href += "/";
        base = new URL("./", href).toString();
      }
    }
    if (!base.endsWith("/")) base += "/";
    return new URL(path, base).toString();
  }
  window.twikki = {
    name: NAME,
    version: VERSION,
    async init() {
      var _a;
      qs = Object.fromEntries(new URLSearchParams(location.search));
      Object.keys(qs).filter((q) => qs[q] === "").forEach((q) => qs[q] = true);
      tw2.core = {};
      tw2.core.buildUrl = buildUrl;
      tw2.extensions = {};
      tw2.modules = [];
      tw2.tmp = {};
      tw2.templates = {};
      tw2.tiddlers = { all: [], visible: [], trashed: [] };
      tw2.logging = initLogging(qs);
      await runBootScript(tw2);
      if ((_a = tw2.tmp) == null ? void 0 : _a.bootAborted) return;
      if (!tw2.storage) tw2.storage = initLocalStorage();
      tw2.run = {
        reload,
        executeText,
        executeCodeTiddler
      };
      dp(`TWikki (v${VERSION}) starting...`);
      document.title = `TWikki v${VERSION}`;
      collectModules();
      dp(`*** TWikki v${VERSION} platform intialized`);
    },
    async start() {
      var _a;
      if ((_a = tw2.tmp) == null ? void 0 : _a.bootAborted) return;
      if (!loadModules()) ;
      tw2.modules.forEach((m2) => {
        var _a2;
        return ((_a2 = m2.meta) == null ? void 0 : _a2.settings) && tw2.core.settings.register(m2.meta.name, m2.meta.settings);
      });
      tw2.core.settings.register("platform", {
        "urls.baseUrl": { default: "https://cawoodm.github.io/twikki", type: "string", description: "Base URL the platform loads its packages from" }
      });
      legacyAliases();
      tw2.core.store.loadStore();
      tw2.events.init();
      tw2.core.ui.wireUpEvents();
      tw2.events.subscribe("reboot.hard", rebootHard, "core");
      tw2.events.subscribe("ui.reload", reload, "core");
      if (!runModules()) ;
      document.title = tw2.core.render.renderTiddler("$SiteTitle");
      tw2.events.send("ui.loading");
      tw2.core.ui.wireEvents();
      await loadCorePackages();
      if (!qs.safemode) await loadExtensionPackages();
      reload();
      if (location.hash) tw2.core.ui.handleHashLink(location.hash);
      dp(`*** TWikki v${VERSION} ui ready`);
    }
  };
  function legacyAliases() {
    tw2.ui = { notify: tw2.core.notifications.notify, notifyProgress: tw2.core.notifications.notifyProgress };
    Object.assign(tw2.ui, tw2.core.ui);
    tw2.plugins = [];
    tw2.plugin = (name2) => tw2.plugins.find((p) => {
      var _a;
      return ((_a = p.meta) == null ? void 0 : _a.name) === name2;
    });
  }
  function collectModules() {
    baseUrl = tw2.core.buildUrl("./");
    tw2.modules = CORE_MODULES.map((m2) => m2.factory ? { name: m2.name, factory: m2.factory } : { name: m2.name, tiddlers: m2.tiddlers });
  }
  function runModules() {
    dp(`${tw2.modules.length} modules loaded. Running modules...`);
    tw2.modules.filter((pck) => {
      var _a;
      return (_a = pck.meta) == null ? void 0 : _a.run;
    }).forEach((pck) => {
      dp(`Running module '${pck.name}'...`);
      pck.meta.run();
    });
    dp("Modules run");
    return true;
  }
  function loadModules() {
    tw2.modules.forEach((pck) => {
      if (pck.factory) {
        dp("Loading code module", pck.name);
        pck.meta = pck.factory(tw2);
        if (pck.meta.exports) {
          const sub = pck.meta.name.split(".")[1];
          tw2.core[sub] = {};
          Object.assign(tw2.core[sub], pck.meta.exports);
        }
        dp(`Loaded ${pck.meta.name} (v${pck.meta.version})`);
      } else if (pck.tiddlers) {
        dp("Loading shadow tiddlers", pck.name);
        pck.tiddlers.forEach((t) => {
          t.doNotSave = true;
          t.isRawShadow = true;
        });
        tw2.tiddlers.all = tw2.tiddlers.all.concat(pck.tiddlers);
        dp(`Loaded ${pck.tiddlers.length} core/shadow tiddlers from ${pck.name})`);
      } else {
        console.warn(`Skipping unknown module '${pck.name}'!`);
      }
    });
    tw2.shadowTiddlers = Array.from(tw2.tiddlers.all);
    Object.freeze(tw2.shadowTiddlers);
    return true;
  }
  function initLogging(qs2) {
    window.dp = () => {
    };
    if (qs2.logfilter)
      window.dp = function() {
        if (!tw2.logging.logFilter.test(JSON.stringify(Array.from(arguments)))) return;
        console.log.apply(console, arguments);
      };
    return {
      logFilter: new RegExp(qs2.logfilter || ".", "i"),
      debugMode: qs2.debug,
      breakPoint: qs2.breakpoint,
      break(name2) {
        if (tw2.logging.breakPoint && name2.match(new RegExp(tw2.logging.breakPoint))) debugger;
      }
    };
  }
  function initLocalStorage() {
    return {
      get(key) {
        let res = read(key);
        if (res == null ? void 0 : res.match(/^[\[\{]/)) return JSON.parse(res);
        return res;
      },
      set(key, value) {
        if (typeof value === "object") return write(key, JSON.stringify(value));
        return write(key, value);
      },
      // localStorage writes are durable synchronously, so a flush is a no-op.
      // The IndexedDBStoragePlugin overrides tw.storage with an async-backed
      // flush() that awaits in-flight writes (see rebootHard()).
      flush() {
        return Promise.resolve();
      },
      remove(key) {
        if (key[0] !== "/") key = "/" + key;
        return localStorage.removeItem(key);
      },
      keys(prefix) {
        return Object.keys(localStorage).filter((k) => k.startsWith(prefix));
      },
      getRaw(key) {
        if (key[0] !== "/") key = "/" + key;
        return localStorage.getItem(key);
      },
      setRaw(key, raw) {
        if (key[0] !== "/") key = "/" + key;
        return localStorage.setItem(key, raw);
      },
      // Drop every key under `/ws/<name>/`. Used by core.workspaces.workspaceDelete
      // to wipe a workspace's data; the IndexedDBStoragePlugin overrides this on
      // its own `tw.storage` to also drop the per-workspace object store.
      clearWorkspace(name2) {
        const prefix = `/ws/${name2}/`;
        Object.keys(localStorage).filter((k) => k.startsWith(prefix)).forEach((k) => localStorage.removeItem(k));
      }
    };
  }
  async function runBootScript(tw3) {
    const src = window.localStorage.getItem("/twikki.boot.js");
    if (!src) return;
    try {
      const fn = (1, eval)(src);
      if (typeof fn !== "function") return;
      const result2 = fn(tw3);
      if (result2 && typeof result2.then === "function") await result2;
    } catch (e) {
      console.error("twikki.boot.js failed:", e);
      alert(`Pre-boot script failed:

${e.message}

Proceeding without it.`);
    }
  }
  async function rebootHard() {
    var _a, _b;
    location.hash = "";
    try {
      await ((_b = (_a = tw2.storage).flush) == null ? void 0 : _b.call(_a));
    } catch (e) {
      console.warn("flush before reboot failed", e);
    }
    window.location.reload();
  }
  function reload() {
    var _a, _b;
    tw2.tiddlers.visible = tw2.tiddlers.visible.filter((title2) => tw2.util.tiddlerExists(title2));
    tw2.core.tiddlers.runCoreTiddlers();
    unloadPlugins();
    loadPlugins();
    checkPluginDependencies();
    sortPluginsByDependencies();
    initPlugins();
    startPlugins();
    tw2.plugins.forEach((p) => {
      var _a2;
      return p.settings && tw2.core.settings.register(((_a2 = p.meta) == null ? void 0 : _a2.name) || p.source, p.settings);
    });
    tw2.core.settings.materialize();
    runScripts();
    tw2.core.render.loadTemplates();
    (_a = tw2.core.dom.$$("*[tiddler-include]")) == null ? void 0 : _a.forEach(tw2.core.render.tiddlerSpanInclude);
    (_b = tw2.core.dom.$$("*[macro]")) == null ? void 0 : _b.forEach(tw2.core.render.macroInclude);
    if (!tw2.tmp.rebootCount) tw2.tmp.rebootCount = 0;
    tw2.tmp.rebootCount++;
    if (tw2.tmp.rebootCount === 1) tw2.events.send("ui.loaded");
    else tw2.events.send("ui.reloaded", tw2.tmp.rebootCount);
    tw2.core.render.renderAllTiddlers();
  }
  async function loadCorePackages() {
    let packages = tw2.run.getTiddlerList("$CorePackages");
    await loadPackages(packages);
  }
  async function loadExtensionPackages() {
    let packages = tw2.run.getTiddlerList("$ExtensionPackages");
    await loadPackages(packages);
  }
  async function loadPackages(packages) {
    var _a;
    for (let p of packages) {
      let params2 = p.split(" ");
      let url = tw2.core.buildUrl(params2[0], baseUrl);
      let name2 = (_a = url.match(/([^.\/]+)\.json$/)) == null ? void 0 : _a[1];
      let overWrite = false;
      let noOverWrite = false;
      let doNotSave = false;
      if (p.length > 1) {
        params2.splice(0, 1);
        let opt = params2.join("");
        let options = opt.split(",").map((o) => o.trim().toLowerCase());
        overWrite = options.includes("force");
        noOverWrite = options.includes("nooverwrite");
        doNotSave = options.includes("nosave");
      }
      let count = await tw2.core.packaging.loadPackageFromURL({
        url,
        name: name2,
        overWrite,
        noOverWrite,
        doNotSave
      });
      tw2.ui.notify(`${count} tiddlers imported from package ${name2}`, "D");
    }
    tw2.core.store.autoSave();
  }
  function loadPlugins() {
    const seenNames = /* @__PURE__ */ new Set();
    tw2.plugins = tw2.tiddlers.all.filter((t) => {
      var _a, _b;
      return ((_a = t.tags) == null ? void 0 : _a.includes("$Plugin")) && !((_b = t.tags) == null ? void 0 : _b.includes("$CodeDisabled"));
    }).map((t) => loadOnePlugin(t, seenNames));
  }
  function unloadPlugins() {
    var _a;
    if (!((_a = tw2.plugins) == null ? void 0 : _a.length)) return;
    tw2.plugins.forEach((p) => {
      var _a2, _b, _c, _d, _e;
      const owner2 = (_a2 = p.meta) == null ? void 0 : _a2.name;
      if (!owner2) return;
      if (typeof p.unload === "function") {
        try {
          p.unload();
        } catch (e) {
          console.warn(`Plugin '${owner2}' unload() threw: ${e.message}`, e.stack);
        }
      }
      (_c = (_b = tw2.events).unsubscribeByOwner) == null ? void 0 : _c.call(_b, owner2);
      (_e = (_d = tw2.core.dom).offOwner) == null ? void 0 : _e.call(_d, owner2);
    });
  }
  function loadOnePlugin(t, seenNames) {
    const entry = {
      meta: {},
      init: void 0,
      start: void 0,
      unload: void 0,
      source: t.title,
      package: t.package || null,
      compat: { compatible: true, severity: "exempt", reason: "no platform field" },
      error: null
    };
    const blocks = tw2.core.tiddlers.tiddlerCodeBlocks(t);
    if (!blocks.length) {
      entry.error = { phase: "load", message: "plugin tiddler has no code block" };
      return entry;
    }
    let returned;
    try {
      if (qs.trace) blocks.forEach((b) => returned = executeText(b.text, b.title));
      else
        try {
          blocks.forEach((b) => returned = executeText(b.text, b.title));
        } catch (e) {
          entry.error = { phase: "load", message: e.message };
          tw2.ui.notify(`Plugin '${t.title}' failed to load (see console log)`, "E", e.stack);
          console.error(`Plugin '${t.title}' failed to load: ${e.message}`, e.stack);
          if (confirm(`Plugin '${t.title}' failed to load. Would you like to disable it?`)) t.tags.push("$CodeDisabled");
          return entry;
        }
    } catch (e) {
      entry.error = { phase: "load", message: e.message };
      return entry;
    }
    if (!returned || typeof returned !== "object") {
      entry.error = {
        phase: "load",
        message: "plugin must return { meta: { name, version }, init?, start? }"
      };
      return entry;
    }
    entry.meta = returned.meta || {};
    entry.init = typeof returned.init === "function" ? returned.init : void 0;
    entry.start = typeof returned.start === "function" ? returned.start : void 0;
    entry.unload = typeof returned.unload === "function" ? returned.unload : void 0;
    entry.settings = returned.settings && typeof returned.settings === "object" ? returned.settings : void 0;
    if (!entry.meta.name) {
      entry.error = { phase: "load", message: "plugin meta.name is required" };
      return entry;
    }
    if (!entry.meta.version) {
      entry.error = { phase: "load", message: "plugin meta.version is required" };
      return entry;
    }
    if (seenNames.has(entry.meta.name)) {
      entry.error = {
        phase: "load",
        message: `duplicate plugin name '${entry.meta.name}' (first one wins)`
      };
      return entry;
    }
    seenNames.add(entry.meta.name);
    entry.compat = checkPluginCompat(entry.meta);
    dp("Loaded plugin", entry.meta.name, entry.meta.version);
    return entry;
  }
  function checkPluginDependencies() {
    tw2.plugins.forEach((p) => {
      var _a;
      const deps = (_a = p.meta) == null ? void 0 : _a.dependencies;
      if (!Array.isArray(deps) || !deps.length) return;
      const missing = deps.filter((d) => !tw2.plugin(d));
      if (missing.length) {
        p.missingDependencies = missing;
        console.warn(`Plugin '${p.meta.name}' declares missing dependencies: ${missing.join(", ")}`);
      }
    });
  }
  function sortPluginsByDependencies() {
    const plugins = tw2.plugins;
    const byName = /* @__PURE__ */ new Map();
    plugins.forEach((p, i) => {
      var _a;
      if ((_a = p.meta) == null ? void 0 : _a.name) byName.set(p.meta.name, i);
    });
    const isBase = (i) => plugins[i].package === "base";
    const indegree = plugins.map(() => 0);
    const edges = plugins.map(() => []);
    plugins.forEach((p, i) => {
      var _a;
      const deps = Array.isArray((_a = p.meta) == null ? void 0 : _a.dependencies) ? p.meta.dependencies : [];
      deps.forEach((name2) => {
        const j = byName.get(name2);
        if (j === void 0) return;
        edges[j].push(i);
        indegree[i]++;
      });
    });
    plugins.forEach((_, i) => {
      if (!isBase(i)) return;
      plugins.forEach((_2, j) => {
        if (isBase(j)) return;
        edges[i].push(j);
        indegree[j]++;
      });
    });
    const ready = [];
    indegree.forEach((d, i) => {
      if (d === 0) ready.push(i);
    });
    ready.sort((a, b) => a - b);
    const sorted = [];
    while (ready.length) {
      const i = ready.shift();
      sorted.push(plugins[i]);
      edges[i].forEach((j) => {
        indegree[j]--;
        if (indegree[j] === 0) {
          const k = ready.findIndex((x) => x > j);
          if (k === -1) ready.push(j);
          else ready.splice(k, 0, j);
        }
      });
    }
    if (sorted.length < plugins.length) {
      const stuck = plugins.map((p, i) => ({ p, i })).filter(({ i }) => indegree[i] > 0).sort((a, b) => a.i - b.i);
      console.warn(`Plugin dependency cycle detected; emitting in original order: ${stuck.map(({ p }) => {
        var _a;
        return ((_a = p.meta) == null ? void 0 : _a.name) || p.source;
      }).join(", ")}`);
      stuck.forEach(({ p }) => sorted.push(p));
    }
    tw2.plugins = sorted;
  }
  function initPlugins() {
    tw2.plugins.forEach((plugin) => {
      if (plugin.error || typeof plugin.init !== "function") return;
      dp("Initializing plugin", plugin.meta.name, plugin.meta.version);
      try {
        plugin.init();
      } catch (e) {
        plugin.error = { phase: "init", message: e.message };
        tw2.ui.notify(`Plugin '${plugin.meta.name}' failed to initialize: ${e.message}`, "E", e.stack);
        console.error(`Plugin '${plugin.meta.name}' init failed: ${e.message}`, e.stack);
      }
    });
  }
  function startPlugins() {
    tw2.plugins.forEach((plugin) => {
      if (plugin.error || typeof plugin.start !== "function") return;
      dp("Starting plugin", plugin.meta.name, plugin.meta.version);
      try {
        plugin.start();
      } catch (e) {
        plugin.error = { phase: "start", message: e.message };
        tw2.ui.notify(`Plugin '${plugin.meta.name}' failed to start: ${e.message}`, "E", e.stack);
        console.error(`Plugin '${plugin.meta.name}' start failed: ${e.message}`, e.stack);
      }
    });
  }
  function runScripts() {
    tw2.tiddlers.all.filter((t) => {
      var _a, _b;
      return ((_a = t.tags) == null ? void 0 : _a.includes("$Script")) && !((_b = t.tags) == null ? void 0 : _b.includes("$CodeDisabled"));
    }).forEach((t) => {
      const blocks = tw2.core.tiddlers.tiddlerCodeBlocks(t);
      if (!blocks.length) return;
      if (qs.trace) return blocks.forEach((b) => executeCodeTiddler(b.text, b.title));
      try {
        blocks.forEach((b) => executeCodeTiddler(b.text, b.title));
      } catch (e) {
        tw2.ui.notify(`Script '${t.title}' failed (see console log)`, "E", e.stack);
        console.error(`Script '${t.title}' failed: ${e.message}`, e.stack);
        if (confirm(`Script '${t.title}' failed. Would you like to disable it?`)) t.tags.push("$CodeDisabled");
      }
    });
  }
  function executeCodeTiddler(text2, title2) {
    if (qs.trace) return executeText(text2, title2);
    try {
      return executeText(text2, title2);
    } catch (e) {
      tw2.ui.notify(e.message, "E", e.stack);
      throw e;
    }
  }
  function executeText(text2, title2, context) {
    if (qs.trace) return (0, eval)(text2);
    try {
      return (1, eval)(text2);
    } catch (e) {
      let msg = `executeText "${title2}" ${context ? ` in tiddler '${context}'` : ""}`;
      console.error(`${msg}: ${e.message}`, e.stack);
      throw e;
    }
  }
  function semver(v) {
    const m2 = String(v).trim().match(/^(\d+)\.(\d+)\.(\d+)$/);
    return m2 ? { major: +m2[1], minor: +m2[2], patch: +m2[3] } : null;
  }
  function semverCompare(a, b) {
    const x = semver(a);
    const y = semver(b);
    if (!x || !y) return NaN;
    if (x.major !== y.major) return x.major - y.major;
    if (x.minor !== y.minor) return x.minor - y.minor;
    return x.patch - y.patch;
  }
  function caretSatisfies(required, running) {
    const r = semver(required);
    const p = semver(running);
    if (!r || !p) return false;
    if (r.major !== p.major) return false;
    return semverCompare(running, required) >= 0;
  }
  function checkPluginCompat(meta) {
    const required = meta == null ? void 0 : meta.platform;
    if (!required) return { compatible: true, severity: "exempt", reason: "no platform field" };
    if (caretSatisfies(required, VERSION)) return { compatible: true, severity: "ok", required };
    const r = semver(required);
    const p = semver(VERSION);
    if (r && p && r.major !== p.major) {
      return {
        compatible: false,
        severity: "block",
        reason: `needs platform ${r.major}.x, running ${VERSION}`,
        required
      };
    }
    return {
      compatible: false,
      severity: "warn",
      reason: `built for ${required}, running ${VERSION}`,
      required
    };
  }
  function overrides() {
    RegExp.any = function() {
      var components = [];
      var arg;
      for (var i = 0; i < arguments.length; i++) {
        arg = arguments[i];
        if (arg instanceof RegExp) {
          components = components.concat(arg._components || arg.source);
        }
      }
      var combined = new RegExp("(?:" + components.join(")|(?:") + ")");
      combined._components = components;
      return combined;
    };
    RegExp.compose = function(re, params2) {
      let str = re.source;
      Object.keys(params2).forEach((k) => str = str.replace(k, params2[k].source));
      return new RegExp(str, re.flags);
    };
    RegExp.prototype.or = function() {
      var args = Array.prototype.slice.call(arguments);
      return RegExp.any.apply(null, [this].concat(args));
    };
  }
})();
window.addEventListener("load", async () => {
  await window.twikki.init();
  await window.twikki.start();
  if ("serviceWorker" in navigator) {
    try {
      const res = await fetch("./sw.js", { cache: "no-store" });
      if (res.ok && /javascript/i.test(res.headers.get("content-type") || "")) {
        await navigator.serviceWorker.register("./sw.js");
      }
    } catch {
    }
  }
});
