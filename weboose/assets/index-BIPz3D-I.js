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
window.boot = async function(p = {}) {
  var _a, _b, _c;
  const RE_OS_NAME = /^[a-z0-9\.]{3,30}$/;
  const BOOTLOADER_VERSION = "0.0.1";
  const OS_FILENAME = "/os.name";
  const OS_URL = "/base.url";
  window.addEventListener("error", (e) => {
    console.error(e.message, e.error.stack);
  });
  const qs = Object.fromEntries(new URLSearchParams(location.search));
  Object.keys(qs).filter((q) => qs[q] === "").forEach((q) => qs[q] = true);
  if (qs.clear) localStorage.clear();
  if (!qs.debug) console.debug = () => void 0;
  console.debug(`BOOT: Bootloader (v${BOOTLOADER_VERSION}) starting...`);
  document.title = "WebOOSe";
  let osName = qs.os || read(OS_FILENAME) || p.os.name;
  if (!osName.match(RE_OS_NAME)) throw new Error(`INVALID_OS_NAME: '${osName}' is not a valid OS name!`);
  let baseUrl = qs.oUrl || qs.url || read(OS_URL) || ((_a = p == null ? void 0 : p.os) == null ? void 0 : _a.url) || p.base;
  if (!baseUrl.match(/^https?:\/\//)) throw new Error(`INVALID_OS_URL: '${baseUrl}' is not a valid URL!`);
  baseUrl = baseUrl.replace(/\/$/, "");
  if (!osName && !baseUrl && p.os.demo) {
    if (!confirm("No OS settings found. Would you like to load a demo?")) throw new Error("OS_SETTINGS_MISSING");
    osName = "weboose.latest";
    baseUrl = "https://cawoodm.github.io/weboose";
  }
  console.debug(`BOOT: Looking for local OS '${osName}'...`);
  let os = readObject("/os/" + osName);
  if (!os.code || qs.reload || qs.update) {
    console.debug("BOOT: No local OS found");
    let osUrl = baseUrl + "/os/" + osName + ".js";
    let res = {};
    console.debug(`BOOT: Installing OS from '${osUrl}'...`);
    try {
      res = await fetch(osUrl);
    } catch {
    }
    if (!res) try {
      let osUrl2 = baseUrl + osName + ".json";
      res = await fetch(osUrl2);
    } catch {
    }
    try {
      if (!res.ok) throw new Error(`OS_DOWNLOAD_ERROR: Unable to download OS from '${osUrl}' HTTP status: ${res.statusCode}`);
      if ((_b = res.headers.get("Content-Type")) == null ? void 0 : _b.match(/\/javascript/)) os.code = await res.text();
      else if ((_c = res.headers.get("Content-Type")) == null ? void 0 : _c.match(/application\/json/)) {
        try {
          console.debug(`BOOT: Loading OS '${osName}'...`);
          os = JSON.parse(await res.text());
        } catch (e) {
          console.error(e.stack);
          os.error = e;
        }
        if (os.error)
          throw new Error(`INVALID_OS_JSON '${osName}' ${os.error.message}`);
      } else throw new Error(`OS_FORMAT_UNKNOWN: ${osUrl} is not served as JS/JSON`);
      write(OS_URL, baseUrl);
    } catch (e) {
      if (qs.update) console.warn(`OS_DOWNLOAD_ERROR: Unable to download OS from '${osUrl}' HTTP status: ${res.statusCode}`);
      else throw e;
    }
  }
  if (!os.code)
    throw new Error(`OS_CODE_MISSING '${osName}' has no code to run!`);
  write(OS_FILENAME, osName);
  writeObject("/os/" + osName, os);
  console.debug(`BOOT: Executing OS '${osName}'...`);
  let osObject;
  wrapSync(() => {
    osObject = (1, eval)(os.code);
  }, "OS_FAILED");
  if (!osObject) throw new Error("OS_NOT_RETURNED: The os");
  if (!osObject.init) throw new Error("OS_INVALID: No init() function found!");
  if (!osObject.start) throw new Error("OS_INVALID: No start() function found!");
  console.debug(`BOOT: Initialising OS ${osObject.name} (v${osObject.version}) ...`);
  const FS = "/os/" + osName;
  await wrapAsync(async () => {
    await osObject.init({
      qs,
      base: p.base,
      os: p.os,
      platform: p.platform,
      kernel: {
        read(key, def) {
          return read(FS + key, def);
        },
        write(key, value) {
          return write(FS + key, value);
        },
        wrapSync,
        wrapAsync
      }
    });
    console.debug("BOOT: OS initialised.");
  }, "OS_INIT_FAILED");
  console.debug("BOOT: Starting OS...");
  await wrapAsync(async () => {
    await osObject.start();
  }, "OS_START_FAILED");
  console.debug("BOOT: Boot complete.");
  function wrapSync(fcn, errMsg) {
    if (qs.trace) return fcn();
    try {
      return fcn();
    } catch (e) {
      showErrorTip();
      console.error(errMsg, e.message);
      throw e;
    }
  }
  async function wrapAsync(fcn, errMsg) {
    if (qs.trace) return await fcn();
    try {
      return await fcn();
    } catch (e) {
      showErrorTip();
      console.error(errMsg, e.message);
      throw e;
    }
  }
  function showErrorTip() {
    let traceUrl = document.location.href;
    traceUrl = traceUrl.match(/\?/) ? traceUrl + "&trace" : traceUrl + "?trace";
    console.error("Tip: Launch with ?trace to see source of error:", traceUrl);
  }
  function readObject(item) {
    let json = read(item);
    if (!(json == null ? void 0 : json.match(/^\{/))) return {};
    return JSON.parse(json);
  }
  function read(item, defaultValue) {
    return localStorage.getItem(item) || defaultValue;
  }
  function writeObject(item, value) {
    return write(item, JSON.stringify(value));
  }
  function write(item, value) {
    return localStorage.setItem(item, value);
  }
};
