var _a, _b, _c, _d, _e, _f, _g;
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
const DARK_MODE = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const CANVAS_WIDTH = Math.floor(window.innerWidth * 0.9);
const CANVAS_HEIGHT = Math.floor(150 * CANVAS_WIDTH / 320);
let MAX_SPEND = parseFloat(localStorage.getItem("max") || "3000");
let MONTHLY_BUDGET = parseFloat(localStorage.getItem("budget") || "2000");
let optGraphType = localStorage.getItem("graphtype") || "bar";
let payments = (
  /** @type {PaymentType[]} */
  []
);
const elCanvas = (
  /** @type {!HTMLCanvasElement} */
  document.getElementById("canvas")
);
elCanvas.width = CANVAS_WIDTH;
elCanvas.height = CANVAS_HEIGHT;
const ctx = (
  /** @type {!CanvasRenderingContext2D} */
  elCanvas.getContext("2d")
);
const elPeriodFilter = (
  /** @type {!HTMLIonSelectElement} */
  document.querySelector("#periodFilter")
);
const elPeriodFilter2 = (
  /** @type {!HTMLIonSelectElement} */
  document.querySelector("#periodFilter2")
);
const elCategories = (
  /** @type {!HTMLElement} */
  document.querySelector("#categories")
);
const elPayments = (
  /** @type {!HTMLElement} */
  document.querySelector("#payments")
);
const elTotal = (
  /** @type {!HTMLElement} */
  document.querySelector("#total")
);
const elPercentage = (
  /** @type {!HTMLElement} */
  document.querySelector("#percentage")
);
const frmImport = (
  /** @type {!HTMLFormElement} */
  document.getElementById("frmImport")
);
const elImportFile = (
  /** @type {!HTMLFormElement} */
  document.getElementById("importFile")
);
const frmExpenses = (
  /** @type {!HTMLFormElement} */
  document.getElementById("expenses")
);
const frmSettings = (
  /** @type {!HTMLFormElement} */
  document.getElementById("frmSettings")
);
const elSearch = (
  /** @type {!HTMLInputElement} */
  document.getElementById("search")
);
const elProgress = (
  /** @type {!HTMLIonProgressBarElement} */
  document.getElementById("progress")
);
const elToast = (
  /** @type {!HTMLIonToastElement} */
  document.querySelector("#toast")
);
(_a = document.getElementById("btnImport")) == null ? void 0 : _a.addEventListener("click", doImport);
elImportFile.addEventListener("change", doImportFile);
(_b = document.getElementById("btnExport")) == null ? void 0 : _b.addEventListener("click", doExport);
(_c = document.getElementById("btnExample")) == null ? void 0 : _c.addEventListener("click", doExample);
(_d = document.getElementById("btnClear")) == null ? void 0 : _d.addEventListener("click", doClear);
(_e = document.getElementById("btnAddExpense")) == null ? void 0 : _e.addEventListener("click", addExpense);
(_f = document.getElementById("btnSaveSettings")) == null ? void 0 : _f.addEventListener("click", saveSettings);
(_g = document.getElementById("search")) == null ? void 0 : _g.addEventListener("keyup", listPayments);
elPeriodFilter2.addEventListener("ionChange", listPayments);
elPeriodFilter.addEventListener("ionChange", listPayments);
document.addEventListener("ionViewDidEnter", initForm);
function initForm() {
  frmExpenses.elements["date"].value = formatDate(/* @__PURE__ */ new Date(), "y-M-d");
  if (payments.length == 0 && confirm("No payments found. Load example data?")) {
    loadExampleData();
    doImport();
  }
}
function init() {
  if (!localStorage.getItem("payments")) localStorage.setItem("payments", "[]");
  setTimeout(initForm, 1e3);
  payments = JSON.parse(localStorage.getItem("payments") || "[]");
  payments = payments.filter((p) => validPayment(p.name, p.date, p.category, p.amount));
  payments.forEach((payment) => {
    payment.date = new Date(payment.date).toISOString();
    payment.amount = parseFloat(payment.amount.toString());
    payment.period = formatDate(payment.date, "y-M");
    payment.day = formatDate(payment.date, "y-M-d");
  });
  let firstOfMonth = /* @__PURE__ */ new Date(formatDate(/* @__PURE__ */ new Date(), "y-M") + "-01");
  firstOfMonth.setTime(firstOfMonth.getTime() - 24 * 60 * 60 * 1e3);
  let lastPeriod = formatDate(firstOfMonth, "y-M");
  updateLists(formatDate(/* @__PURE__ */ new Date(), "y-M"), lastPeriod);
  listPayments();
  setValue("budget", MONTHLY_BUDGET);
  setValue("max", MAX_SPEND);
  setValue("graphType", optGraphType);
}
function addExpense() {
  const o = Object.assign(...Array.from(new FormData(frmExpenses).entries(), ([x, y]) => ({ [x]: y })));
  if (!savePayment(o)) return;
  showMessage(`Payment ${o.amount} ${o.name} (${o.category}) saved`);
  listPayments();
  updateCategories();
}
function showMessage(msg) {
  elToast.message = msg;
  elToast.present();
}
function savePayment({ name, date, category, amount }) {
  const now = /* @__PURE__ */ new Date();
  const dateOnly = date.length === 10;
  const parsedDate = new Date(date);
  if (dateOnly) parsedDate.setHours(now.getHours(), now.getMinutes(), now.getSeconds());
  try {
    validatePayment(name, parsedDate, category, amount);
    const id = randomId(length);
    const period = formatDate(parsedDate, "y-M");
    const day = formatDate(parsedDate, "y-M-d");
    amount = parseFloat(amount);
    if (payments.find((p) => p.day === day && p.category === category && p.amount === amount)) console.warn(`Possible duplicate payment: day: ${day}, category: ${category}, amount=${amount}`);
    payments.push({ id, name, category, amount, date: parsedDate.toISOString(), period, day });
    payments = payments.sort(descendingDay);
    save();
    return true;
  } catch (e) {
    showMessage(`ERROR: ${e.message} in record ${name}, ${date}, ${category}, ${amount}`);
    return false;
  }
}
function validPayment(name, date, category, amount) {
  try {
    validatePayment(name, date, category, amount);
    return true;
  } catch (e) {
    return false;
  }
}
function validatePayment(name, date, category, amount) {
  if (!date || !Date.parse(date)) throw new Error(`Date missing/invalid in record ${name}, ${date}, ${category}, ${amount}`);
  if (!name) throw new Error(`Text missing in record ${name}, ${date}, ${category}, ${amount}`);
  if (!category) throw new Error(`Category missing in record ${name}, ${date}, ${category}, ${amount}`);
  if (isNaN(parseFloat(amount))) throw new Error(`Amount must be a number in record ${name}, ${date}, ${category}, ${amount}`);
  return true;
}
function deletePayment(id) {
  if (!confirm("Definitely delete?")) return;
  payments = payments.filter((payment) => payment.id !== id);
  save();
  listPayments();
}
window.deletePayment = deletePayment;
function listPayments() {
  const search = elSearch.value || "";
  const filteredPeriod = elPeriodFilter.value;
  const filteredPeriod2 = elPeriodFilter2.value;
  const filteredPayments = payments.filter((payment) => !filteredPeriod || payment.period === filteredPeriod).filter(searchFilter(search));
  const sumOfPayments = filteredPayments.map((a) => a.amount).reduce((a, c) => a + c, 0);
  let percentage = sumOfPayments / MONTHLY_BUDGET;
  elProgress.value = percentage;
  if (percentage > 1) elProgress.color = "danger";
  else elProgress.color = "primary";
  elPercentage.innerHTML = Math.floor(percentage * 100) + "%";
  elTotal.innerHTML = "CHF " + sumOfPayments.toFixed(2);
  let html = '<ion-grid fixed="true">';
  let lastDay = "";
  filteredPayments.map((payment) => ({ ...payment, amountFormatted: payment.amount.toFixed(2) })).forEach((payment) => {
    if (lastDay !== payment.day) html += `<ion-row style="background-color: silver"><ion-col size="12"><b>${formatDayOnly(payment.date)}</b></ion-col></ion-row>`;
    lastDay = payment.day;
    html += `<ion-row><ion-col size="2" title="${payment.date}">${formatDateShort(payment.date)}</ion-col><ion-col size="6" class="ion-text-nowrap">${payment.name}</ion-col><ion-col size="3" class="ion-text-right">${payment.amountFormatted}</ion-col><ion-col size="1"><a href="javascript:deletePayment('${payment.id}')"><ion-icon name="trash-outline"></ion-icon></a></ion-row>`;
  });
  html += "</ion-grid>";
  elPayments.innerHTML = html;
  if (filteredPeriod || filteredPeriod2) resetChart();
  if (filteredPeriod2) chartPayments(filteredPeriod2, "red");
  if (filteredPeriod) chartPayments(filteredPeriod, "blue");
}
function searchFilter(searchTerm) {
  return (p) => {
    return !searchTerm || [p.name, p.category, p.amount, p.day].join(" ").toLowerCase().includes(searchTerm.toLowerCase());
  };
}
function updateLists(per1, per2) {
  updatePeriods(per1, per2);
  updateCategories();
}
function updatePeriods(per1, per2) {
  let periods = Array.from(new Set(payments.map((p) => p.period).sort(descending)));
  elPeriodFilter.innerHTML = periods.map((period) => `<ion-select-option ${period === per1 ? "selected" : ""} value="${period}">${period}</ion-select-option>`).join("\n");
  elPeriodFilter.value = per1;
  elPeriodFilter2.innerHTML = periods.map((period) => `<ion-select-option ${period === per2 ? "selected" : ""} value="${period}">${period}</ion-select-option>`).join("\n");
  elPeriodFilter2.value = per2;
}
function updateCategories(cat) {
  let categories = Array.from(new Set(payments.map((p) => p.category).sort(ascending)));
  elCategories.innerHTML = categories.map((category) => `<ion-chip onclick="setCategory(this, '${category}')">${category}</ion-chip>`).join("\n");
}
let lastCategoryChip = null;
function setCategory(el, category) {
  if (lastCategoryChip) lastCategoryChip.setAttribute("color", "");
  el.setAttribute("color", "primary");
  frmExpenses.category.value = category;
  lastCategoryChip = el;
}
window["setCategory"] = setCategory;
function chartPayments(filteredPeriod, col) {
  let periodPayments = payments.filter((payment) => payment.period === filteredPeriod);
  let sum = 0;
  const days = getDaysOfMonth(filteredPeriod);
  let colour = {
    red: "rgba(255, 0, 0, 0.5)",
    green: "rgba(0, 255, 0, 0.5)",
    blue: "rgba(0, 0, 255, 0.5)"
  }[col];
  const today = /* @__PURE__ */ new Date();
  days.forEach((day) => {
    const futurePayments = periodPayments.filter((payment) => payment.day > day);
    if (new Date(day) > today && futurePayments.length == 0) return;
    const dayPayments = periodPayments.filter((payment) => payment.day === day);
    const daySum = dayPayments.reduce((acc, payment) => acc + payment.amount, 0);
    sum += daySum;
    bar(days.indexOf(day), sum, colour);
  });
}
function saveSettings() {
  let frm = frmSettings;
  let budget = isNaN(parseFloat(frm.budget.value)) ? 0 : parseFloat(frm.budget.value);
  if (!budget) return showMessage("Invalid budget");
  let max = isNaN(parseFloat(frm.max.value)) ? 0 : parseFloat(frm.max.value);
  if (!max) return showMessage("Invalid max spend");
  optGraphType = frm.graphType.value;
  localStorage.setItem("budget", budget.toString());
  localStorage.setItem("max", max.toString());
  localStorage.setItem("graphtype", optGraphType);
  MONTHLY_BUDGET = budget;
  MAX_SPEND = max;
  resetChart();
  listPayments();
}
function doImportFile() {
  const reader = new FileReader();
  reader.onload = (e) => {
    var _a2;
    return frmImport.import.value = (_a2 = e.target) == null ? void 0 : _a2.result;
  };
  for (let file of elImportFile.files) reader.readAsText(file);
}
function doExport() {
  let csvData = "Date,Text,Amount,Category\n";
  csvData += payments.map((p) => `${formatDate(p.date, "y-M-d h:m:s")},"${p.name}",${p.amount},${p.category}`).join("\n");
  downloadFile("payments.csv", csvData);
  showMessage("Exported payments to payments.csv");
}
function doImport() {
  try {
    const importData = frmImport.import.value;
    if (!importData) throw new Error("No data to import");
    let lines = importData.split("\n");
    if (!lines.length) throw new Error("No data to import");
    let SEP = /(".*?"|[^",]+)(?=\s*,|\s*$)/g;
    let headers = lines[0].match(SEP);
    if (headers.length != 4) {
      SEP = /(".*?"|[^";]+)(?=\s*;|\s*$)/g;
      headers = lines[0].match(SEP);
    }
    if (headers.length != 4) {
      SEP = /(".*?"|[^"\t]+)(?=\s*\t|\s*$)/g;
      headers = lines[0].match(SEP);
    }
    if (headers.length != 4) throw new Error("Header mismatch: Should be 4 comma- (*.csv) or tab-separated (*.tsv) headers: Date, Text, Amount, Category");
    if (headers[0].trim() !== "Date" || headers[1].trim() !== "Text" || headers[2].trim() !== "Amount" || headers[3].trim() !== "Category")
      throw new Error("Headers mismatch: Should be: Date, Text, Amount, Category");
    lines = lines.slice(1).filter((l) => !!l.trim());
    let success = 0;
    const validPayments = lines.map((line, i) => {
      if (line.trim() === "") return null;
      const parts = line.match(SEP);
      if (parts.length < 4) throw new Error(`Data mismatch: Should be comma- (*.csv) or tab-separated (*.tsv): Date, Text, Amount, Category (Line ${i}): ${line}`);
      let [date, name, amount, category] = parts;
      date = date.trim();
      name = name.replace(/^"/g, "").replace(/"$/g, "").trim();
      amount = amount.trim();
      category = category.trim();
      if (!validatePayment(name, new Date(date), category, amount)) ;
      return { name, amount, category, date };
    }).filter((payment) => !!payment);
    if (validPayments.length < lines.length) return showMessage("Cancelling due to invalid payments found!");
    validPayments.forEach((payment) => {
      if (savePayment(payment)) success++;
    });
    listPayments();
    updateLists();
    showMessage(`Imported ${success}/${lines.length} payments successfully`);
  } catch (e) {
    console.error(e.message);
    console.error(e.stack);
    showMessage(`Validation Error: ${e.message}`);
    return;
  }
}
function loadExampleData() {
  let now = /* @__PURE__ */ new Date();
  let thisMonth = formatDate(now, "y-M");
  let lastMonth = formatDate(new Date(Date.now() - now.getDate() * 24 * 3600 * 1e3), "y-M");
  setValue(
    "import",
    [
      "Date,Text,Amount,Category",
      `${lastMonth}-01,"Food",180.25,Food`,
      `${lastMonth}-02,"Rent Costs",100,Flat`,
      `${lastMonth}-03,"Dog Food",100,Pets`,
      `${lastMonth}-04,"SwissLife",100,Pension`,
      `${lastMonth}-05,"Car Insurance",100,Insurance`,
      `${thisMonth}-01,"Food",100,Food`,
      `${thisMonth}-02,"Rent Costs",100,Flat`,
      `${thisMonth}-03,"Dog Food",80,Pets`,
      `${thisMonth}-04,"SwissLife",10,Pension`,
      `${thisMonth}-05,"Car Insurance",10,Insurance`
    ].join("\n")
  );
}
function setValue(id, value) {
  const el = (
    /** @type {!HTMLInputElement} */
    document.getElementById(id)
  );
  el.value = value;
}
function doExample() {
  loadExampleData();
  showMessage("Example data loaded. Click Import to add it");
}
function doClear() {
  if (!confirm("Definitely clear all payment data?")) return;
  payments = [];
  save();
  listPayments();
  showMessage("Payments cleared");
}
function resetChart() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.fillStyle = DARK_MODE ? "#333" : "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.font = "8pt sans-serif";
  ctx.strokeStyle = DARK_MODE ? "#ccc" : "gray";
  ctx.fillStyle = ctx.strokeStyle;
  ctx.lineWidth = 1;
  let LineGap = 500;
  const LINES = Math.ceil(MAX_SPEND / LineGap);
  for (let i = 0; i < LINES; i++) {
    const lineLabel = (LineGap * (LINES - i)).toString();
    ctx.fillText(lineLabel, 0, i * CANVAS_HEIGHT / LINES);
    ctx.beginPath();
    ctx.moveTo(0, i * CANVAS_HEIGHT / LINES);
    ctx.lineTo(CANVAS_WIDTH, i * CANVAS_HEIGHT / LINES);
    ctx.stroke();
  }
  elPeriodFilter.value;
  const days = getDaysOfMonth(formatDate(/* @__PURE__ */ new Date(), "y-") + "01");
  const dailyBudget = MONTHLY_BUDGET / days.length;
  days.forEach((day, i) => {
    bar(days.indexOf(day), (i + 1) * dailyBudget, "rgba(100, 100, 100, 0.5)");
  });
}
function bar(x, h, col) {
  ctx.fillStyle = col;
  const W = CANVAS_WIDTH / 32;
  const Y = h * CANVAS_HEIGHT / MAX_SPEND;
  if (optGraphType === "line") ctx.fillRect(x * W, CANVAS_HEIGHT - Y, W, 2);
  else ctx.fillRect(x * W, CANVAS_HEIGHT - Y, W, Y);
}
function getDaysOfMonth(period) {
  if (!period) return [];
  const year = parseInt(period.substring(0, 4), 10);
  const month = parseInt(period.substring(5, 7), 10);
  const dayCount = daysInMonth(year, month);
  return new Array(dayCount).fill(0).map((_, i) => formatDate(new Date(year, month - 1, i + 1), "y-M-d"));
}
function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
function downloadFile(filename, content) {
  var element = document.createElement("a");
  element.setAttribute("href", "data:text/csv;charset=utf-8," + encodeURIComponent(content));
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
function formatDate(dateString, format = "y-M-d") {
  const dt = new Date(dateString);
  const parts = {
    y: dt.getFullYear().toString(),
    M: ("0" + (dt.getMonth() + 1)).toString().slice(-2),
    d: ("0" + dt.getDate()).toString().slice(-2),
    h: ("0" + dt.getHours()).toString().slice(-2),
    m: ("0" + dt.getMinutes()).toString().slice(-2),
    s: ("0" + dt.getSeconds()).toString().slice(-2)
  };
  const modifiers = Object.keys(parts).join("");
  const reDate = new RegExp(`(?<!\\\\)[${modifiers}]`, "g");
  const reEscape = new RegExp(`\\\\([${modifiers}])`, "g");
  return format.replace(reDate, ($0) => parts[$0]).replace(reEscape, ($0, $1) => $1);
}
function randomId(length2) {
  return Math.random().toString(36).replace("0.", "");
}
function ascending(a, b) {
  return a > b ? 1 : -1;
}
function descending(a, b) {
  return a < b ? 1 : -1;
}
function descendingDay(a, b) {
  return a.day < b.day ? 1 : -1;
}
function formatDateShort(dateString) {
  const dt = new Date(dateString);
  return dt.toLocaleString("en-us", { month: "short", day: "numeric" });
}
function formatDayOnly(dateString) {
  const dt = new Date(dateString);
  return dt.toLocaleString("en-us", { weekday: "short", day: "numeric" });
}
function save() {
  const paymentsCompressed = (
    /** @type {PaymentEntry[]} */
    payments.map((p) => ({ id: p.id, name: p.name, date: formatDate(p.date, "y-M-d h:m:s"), category: p.category, amount: p.amount }))
  );
  localStorage.setItem("payments", JSON.stringify(paymentsCompressed));
}
function errorHandler(e) {
  showMessage(`ERROR: ${e.message}`);
}
window.addEventListener("load", init);
window.addEventListener("error", errorHandler);
