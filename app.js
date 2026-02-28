// ════════════════════════════════════════════════════════
// NK Klassement 2026 — Clean Build
// ════════════════════════════════════════════════════════

"use strict";

// ── 1. MODULE CONFIG ────────────────────────────────────
const MODULE_CONFIG = {
  sprint: {
    label: "NK Sprint",
    genders: {
      v: {
        label: "Vrouwen",
        distances: [
          { key: "d1_500",  meters: 500,  label: "1e 500m",  divisor: 1 },
          { key: "d1_1000", meters: 1000, label: "1e 1000m", divisor: 2 },
          { key: "d2_500",  meters: 500,  label: "2e 500m",  divisor: 1 },
          { key: "d2_1000", meters: 1000, label: "2e 1000m", divisor: 2 },
        ],
      },
      m: {
        label: "Mannen",
        distances: [
          { key: "d1_500",  meters: 500,  label: "1e 500m",  divisor: 1 },
          { key: "d1_1000", meters: 1000, label: "1e 1000m", divisor: 2 },
          { key: "d2_500",  meters: 500,  label: "2e 500m",  divisor: 1 },
          { key: "d2_1000", meters: 1000, label: "2e 1000m", divisor: 2 },
        ],
      },
    },
  },
  allround: {
    label: "NK Allround",
    genders: {
      v: {
        label: "Vrouwen",
        distances: [
          { key: "d1_500",  meters: 500,  label: "500m",  divisor: 1  },
          { key: "d1_3000", meters: 3000, label: "3000m", divisor: 6  },
          { key: "d1_1500", meters: 1500, label: "1500m", divisor: 3  },
          { key: "d1_5000", meters: 5000, label: "5000m", divisor: 10 },
        ],
      },
      m: {
        label: "Mannen",
        distances: [
          { key: "d1_500",   meters: 500,   label: "500m",    divisor: 1  },
          { key: "d1_5000",  meters: 5000,  label: "5000m",   divisor: 10 },
          { key: "d1_1500",  meters: 1500,  label: "1500m",   divisor: 3  },
          { key: "d1_10000", meters: 10000, label: "10.000m", divisor: 20 },
        ],
      },
    },
  },
};

const QUAL_CONFIG = {
  allround: {
    v: { qualDist: "d1_3000", finalDist: "d1_5000", first3: ["d1_500","d1_3000","d1_1500"], first2: ["d1_500","d1_3000"] },
    m: { qualDist: "d1_5000", finalDist: "d1_10000", first3: ["d1_500","d1_5000","d1_1500"], first2: ["d1_500","d1_5000"] },
  },
};

// ── 2. API CONFIG ───────────────────────────────────────
const API_BASE = "https://live-api.schaatsen.nl";

const LIVE_URLS = {
  sprint: {
    eventId: "2026_NED_0003",
    v: { d1_500: 1, d1_1000: 3, d2_500: 5, d2_1000: 7 },
    m: { d1_500: 2, d1_1000: 4, d2_500: 6, d2_1000: 8 },
  },
  allround: {
    eventId: "2026_NED_0004",
    v: { d1_500: 1, d1_3000: 3, d1_1500: 5, d1_5000: 7 },
    m: { d1_500: 2, d1_5000: 4, d1_1500: 6, d1_10000: 8 },
  },
};

// ── 3. PARTICIPANTS ─────────────────────────────────────
const PARTICIPANTS = {
  sprint: {
    v: [
      { nr:1,  name:"Suzanne Schulting",    cat:"DSA", qual:"EK Sprint" },
      { nr:2,  name:"Chloé Hoogendoorn",    cat:"DN3", qual:"EK Sprint" },
      { nr:3,  name:"Anna Boersma",          cat:"DSA", qual:"OKT" },
      { nr:4,  name:"Isabel Grevelt",        cat:"DSA", qual:"OKT" },
      { nr:5,  name:"Naomi Verkerk",         cat:"DSA", qual:"OKT" },
      { nr:6,  name:"Angel Daleman",         cat:"DA2", qual:"OKT" },
      { nr:7,  name:"Marrit Fledderus",      cat:"DSA", qual:"WC 25/26" },
      { nr:8,  name:"Dione Voskamp",         cat:"DSA", qual:"WC 25/26" },
      { nr:9,  name:"Pien Smit",             cat:"DN3", qual:"UCB" },
      { nr:10, name:"Pien Hersman",          cat:"DN3", qual:"UCB" },
      { nr:11, name:"Michelle de Jong",       cat:"DSA", qual:"UCB" },
      { nr:12, name:"Sylke Kas",             cat:"DSA", qual:"UCB" },
      { nr:13, name:"Amber Duizendstraal",   cat:"DN4", qual:"UCB" },
      { nr:14, name:"Henny de Vries",        cat:"DSA", qual:"UCB" },
      { nr:15, name:"Myrthe de Boer",        cat:"DSA", qual:"UCB" },
      { nr:16, name:"Lotte Groenen",         cat:"DN2", qual:"UCB" },
      { nr:17, name:"Elanne de Vries",       cat:"DN1", qual:"UCB" },
      { nr:18, name:"Jildou Hoekstra",       cat:"DN3", qual:"UCB" },
      { nr:19, name:"Sofie Bouw",            cat:"DN2", qual:"UCB" },
      { nr:20, name:"Evy van Zoest",         cat:"DA2", qual:"UCB" },
    ],
    m: [
      { nr:1,  name:"Merijn Scheperkamp",   cat:"HSA", qual:"EK Sprint" },
      { nr:2,  name:"Tim Prins",             cat:"HN3", qual:"EK Sprint" },
      { nr:3,  name:"Jenning de Boo",        cat:"HSA", qual:"EK Sprint" },
      { nr:4,  name:"Stefan Westenbroek",    cat:"HSA", qual:"OKT" },
      { nr:5,  name:"Tijmen Snel",           cat:"HSA", qual:"OKT" },
      { nr:6,  name:"Kai Verbij",            cat:"HSA", qual:"OKT" },
      { nr:7,  name:"Wesly Dijs",            cat:"HSA", qual:"WC 25/26" },
      { nr:8,  name:"Arjen Boersma",         cat:"HN4", qual:"WC 25/26" },
      { nr:9,  name:"Mats Siemons",          cat:"HN3", qual:"UCB" },
      { nr:10, name:"Sebas Diniz",           cat:"HSA", qual:"UCB" },
      { nr:11, name:"Serge Yoro",            cat:"HN1", qual:"UCB" },
      { nr:12, name:"Janno Botman",          cat:"HSA", qual:"UCB" },
      { nr:13, name:"Niklas Reinders",       cat:"HN3", qual:"UCB" },
      { nr:14, name:"Ted Dalrymple",         cat:"HN4", qual:"UCB" },
      { nr:15, name:"Max Bergsma",           cat:"HA1", qual:"UCB" },
      { nr:16, name:"Pim Stuij",             cat:"HN2", qual:"UCB" },
      { nr:17, name:"Kayo Vos",              cat:"HN2", qual:"UCB" },
      { nr:18, name:"Sijmen Egberts",        cat:"HN1", qual:"UCB" },
      { nr:19, name:"Mats van den Bos",      cat:"HN1", qual:"UCB" },
      { nr:20, name:"Johan Talsma",          cat:"HN2", qual:"UCB" },
    ],
  },
  allround: {
    v: [
      { nr:1,  name:"Merel Conijn",           cat:"DSA", qual:"EK Allround" },
      { nr:2,  name:"Marijke Groenewoud",      cat:"DSA", qual:"EK Allround" },
      { nr:3,  name:"Jade Groenewoud",         cat:"DN3", qual:"Gruno Bokaal" },
      { nr:4,  name:"Maud Blokhorst",         cat:"DA1", qual:"Kraantje Lek" },
      { nr:5,  name:"Evelien Vijn",           cat:"DN4", qual:"Gruno Bokaal" },
      { nr:6,  name:"Naomi van der Werf",     cat:"DSA", qual:"Gruno Bokaal" },
      { nr:7,  name:"Nynke Tinga",            cat:"DN1", qual:"Gruno Bokaal" },
      { nr:8,  name:"Melissa Wijfje",         cat:"DSA", qual:"WC" },
      { nr:9,  name:"Sanne in 't Hof",        cat:"DSA", qual:"WC" },
      { nr:10, name:"Kim Talsma",             cat:"DSA", qual:"WC" },
      { nr:11, name:"Meike Veen",             cat:"DN2", qual:"WC" },
      { nr:12, name:"Gioya Lancee",           cat:"DSA", qual:"Kraantje Lek" },
      { nr:13, name:"Hilde Noppert",           cat:"DSA", qual:"Kraantje Lek" },
      { nr:14, name:"Sanne Westra",           cat:"DN4", qual:"Kraantje Lek" },
      { nr:15, name:"Rosalie van Vliet",      cat:"DN1", qual:"Kraantje Lek" },
      { nr:16, name:"Evi de Ruijter",         cat:"DA2", qual:"Kraantje Lek" },
      { nr:17, name:"Lieke Huizink",          cat:"DA2", qual:"Kraantje Lek" },
      { nr:18, name:"Tosca Mulder",           cat:"DN3", qual:"Kraantje Lek" },
      { nr:19, name:"Amy van der Meer",         cat:"DSA", qual:"Kraantje Lek" },
      { nr:20, name:"Britt Breider",          cat:"DA2", qual:"Kraantje Lek" },
    ],
    m: [
      { nr:1,  name:"Beau Snellink",          cat:"HSA", qual:"EK Allround" },
      { nr:2,  name:"Loek van Vilsteren",    cat:"HN3", qual:"Eindhoven Trofee" },
      { nr:3,  name:"Marcel Bosker",          cat:"HSA", qual:"EK Allround" },
      { nr:4,  name:"Jasper Krommenhoek",     cat:"HN3", qual:"EK Allround" },
      { nr:5,  name:"Jur Veenje",             cat:"HSA", qual:"Gruno Bokaal" },
      { nr:6,  name:"Chris Brommersma",       cat:"HN2", qual:"Gruno Bokaal" },
      { nr:7,  name:"Michiel de Groot",        cat:"HN2", qual:"Gruno Bokaal" },
      { nr:8,  name:"Louis Hollaar",          cat:"HSA", qual:"WC" },
      { nr:9,  name:"Jasper Tinga",           cat:"HN3", qual:"Eindhoven Trofee" },
      { nr:10, name:"Remco Stam",             cat:"HN3", qual:"Eindhoven Trofee" },
      { nr:11, name:"Remo Slotegraaf",        cat:"HSA", qual:"Eindhoven Trofee" },
      { nr:12, name:"Jelle Koeleman",         cat:"HN3", qual:"Eindhoven Trofee" },
      { nr:13, name:"Yves Vergeer",           cat:"HSA", qual:"Eindhoven Trofee" },
      { nr:14, name:"Niels van Reeuwijk",     cat:"HN2", qual:"Eindhoven Trofee" },
      { nr:15, name:"Ties van Seumeren",      cat:"HN2", qual:"Eindhoven Trofee" },
      { nr:16, name:"Jorrit Bergsma",         cat:"H40", qual:"Aanwijsplek" },
      { nr:17, name:"Edsger van Felius",      cat:"HA2", qual:"Eindhoven Trofee" },
      { nr:18, name:"Mathijs van Zwieten",    cat:"HSA", qual:"Eindhoven Trofee" },
      { nr:19, name:"Hidde Westra",           cat:"HN3", qual:"Eindhoven Trofee" },
      { nr:20, name:"Pelle Bolsius",          cat:"HA2", qual:"Eindhoven Trofee" },
    ],
  },
};

// ── 4. STARTLISTS (Saturday, from Sportity PDFs 27-02-2026) ─
const STARTLISTS = {
  allround_v_d1_500: [
    "Sanne in 't Hof","Lieke Huizink","Maud Blokhorst","Tosca Mulder",
    "Evelien Vijn","Naomi van der Werf","Britt Breider","Evi de Ruijter",
    "Kim Talsma","Sanne Westra","Hilde Noppert","Merel Conijn",
    "Rosalie van Vliet","Nynke Tinga","Jade Groenewoud","Amy van der Meer",
    "Melissa Wijfje","Gioya Lancee","Meike Veen","Marijke Groenewoud",
  ],
  allround_v_d1_3000: [
    "Britt Breider","Amy van der Meer","Tosca Mulder","Maud Blokhorst",
    "Nynke Tinga","Evi de Ruijter","Sanne Westra","Kim Talsma",
    "Hilde Noppert","Lieke Huizink","Evelien Vijn","Rosalie van Vliet",
    "Naomi van der Werf","Sanne in 't Hof","Gioya Lancee","Meike Veen",
    "Jade Groenewoud","Melissa Wijfje","Merel Conijn","Marijke Groenewoud",
  ],
  allround_m_d1_500: [
    "Edsger van Felius","Pelle Bolsius","Hidde Westra","Mathijs van Zwieten",
    "Jelle Koeleman","Niels van Reeuwijk","Remco Stam","Remo Slotegraaf",
    "Jasper Tinga","Yves Vergeer","Chris Brommersma","Loek van Vilsteren",
    "Ties van Seumeren","Michiel de Groot","Louis Hollaar","Jur Veenje",
    "Jasper Krommenhoek","Jorrit Bergsma","Marcel Bosker","Beau Snellink",
  ],
  allround_m_d1_5000: [
    "Pelle Bolsius","Edsger van Felius","Mathijs van Zwieten","Hidde Westra",
    "Niels van Reeuwijk","Jelle Koeleman","Remo Slotegraaf","Remco Stam",
    "Yves Vergeer","Jasper Tinga","Loek van Vilsteren","Chris Brommersma",
    "Michiel de Groot","Ties van Seumeren","Jur Veenje","Louis Hollaar",
    "Jorrit Bergsma","Jasper Krommenhoek","Beau Snellink","Marcel Bosker",
  ],
  sprint_v_d1_500: [
    "Elanne de Vries","Evy van Zoest","Sofie Bouw","Jildou Hoekstra",
    "Lotte Groenen","Amber Duizendstraal","Myrthe de Boer","Henny de Vries",
    "Pien Hersman","Sylke Kas","Michelle de Jong","Pien Smit",
    "Angel Daleman","Dione Voskamp","Naomi Verkerk","Marrit Fledderus",
    "Isabel Grevelt","Anna Boersma","Chloé Hoogendoorn","Suzanne Schulting",
  ],
  sprint_v_d1_1000: [
    "Evy van Zoest","Elanne de Vries","Jildou Hoekstra","Sofie Bouw",
    "Amber Duizendstraal","Lotte Groenen","Henny de Vries","Myrthe de Boer",
    "Sylke Kas","Pien Hersman","Pien Smit","Michelle de Jong",
    "Dione Voskamp","Angel Daleman","Marrit Fledderus","Naomi Verkerk",
    "Anna Boersma","Isabel Grevelt","Suzanne Schulting","Chloé Hoogendoorn",
  ],
  sprint_m_d1_500: [
    "Johan Talsma","Mats van den Bos","Sijmen Egberts","Kayo Vos",
    "Pim Stuij","Max Bergsma","Ted Dalrymple","Niklas Reinders",
    "Janno Botman","Serge Yoro","Sebas Diniz","Mats Siemons",
    "Arjen Boersma","Wesly Dijs","Kai Verbij","Tijmen Snel",
    "Stefan Westenbroek","Jenning de Boo","Tim Prins","Merijn Scheperkamp",
  ],
  sprint_m_d1_1000: [
    "Mats van den Bos","Johan Talsma","Kayo Vos","Sijmen Egberts",
    "Max Bergsma","Pim Stuij","Niklas Reinders","Ted Dalrymple",
    "Serge Yoro","Janno Botman","Mats Siemons","Sebas Diniz",
    "Wesly Dijs","Arjen Boersma","Tijmen Snel","Kai Verbij",
    "Jenning de Boo","Stefan Westenbroek","Merijn Scheperkamp","Tim Prins",
  ],
};

// ── 5. UTILITIES ────────────────────────────────────────

function normalizeName(n) {
  return String(n ?? "").trim().toLowerCase()
    .replace(/[\u2018\u2019\u201A\u201B\u0060\u00B4\u2032\u02BC\u02BB\u2060\u0027]/g, "'")
    .replace(/[\u2010-\u2015]/g, "-")
    .replace(/\s+/g, " ")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const d = Array.from({length: m + 1}, (_, i) => {
    const row = new Array(n + 1);
    row[0] = i;
    return row;
  });
  for (let j = 1; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      d[i][j] = Math.min(d[i-1][j]+1, d[i][j-1]+1, d[i-1][j-1] + (a[i-1] !== b[j-1] ? 1 : 0));
  return d[m][n];
}

function parseTime(str) {
  if (!str || typeof str !== "string") return null;
  const s = str.trim().replace(",", ".");
  // "m:ss.xx" or "mm:ss.xx"
  const mc = s.match(/^(\d{1,2}):(\d{2}(?:\.\d+)?)$/);
  if (mc) return parseFloat(mc[1]) * 60 + parseFloat(mc[2]);
  // plain seconds "ss.xx"
  const n = parseFloat(s);
  return Number.isFinite(n) && n > 0 ? n : null;
}

function fmtTime(sec) {
  if (!Number.isFinite(sec) || sec < 0) return "—";
  const mm = Math.floor(sec / 60);
  const ss = sec - mm * 60;
  const str = ss.toFixed(2).padStart(5, "0");
  return mm > 0 ? `${mm}:${str.replace(".", ",")}` : str;
}

function fmtTimeDelta(sec) {
  if (!Number.isFinite(sec)) return "—";
  const sign = sec < 0 ? "-" : "+";
  const abs = Math.abs(sec);
  const mm = Math.floor(abs / 60);
  const ss = abs - mm * 60;
  const str = ss.toFixed(2).padStart(5, "0");
  return mm > 0 ? `${sign}${mm}:${str.replace(".", ",")}` : `${sign}${str}`;
}

// Format raw API time string: preserves precision, uses comma for >1min
function fmtRawTime(t) {
  if (!t || t === "—") return "—";
  const sec = parseTime(t);
  if (!Number.isFinite(sec)) return t;
  const decs = t.includes(".") ? Math.min(t.split(".").pop().length, 3) : 2;
  const mm = Math.floor(sec / 60);
  const ss = sec - mm * 60;
  const str = ss.toFixed(Math.max(2, decs)).padStart(Math.max(2, decs) + 3, "0");
  return mm > 0 ? `${mm}:${str.replace(".", ",")}` : str;
}

function fmtPts(pts) {
  return Number.isFinite(pts) ? pts.toFixed(3) : "—";
}

function truncDec(n, d) {
  const f = Math.pow(10, d);
  return Math.floor(n * f) / f;
}

function esc(s) {
  return String(s ?? "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

function findParticipant(name) {
  const n = normalizeName(name);
  for (const [mod, gs] of Object.entries(PARTICIPANTS))
    for (const [gen, list] of Object.entries(gs)) {
      const p = list.find(x => normalizeName(x.name) === n);
      if (p) return { ...p, module: mod, gender: gen };
    }
  return null;
}

function getStartlist(mod, gen, distKey) {
  return STARTLISTS[`${mod}_${gen}_${distKey}`] ?? null;
}

function getPairNr(startlist, name) {
  if (!startlist) return null;
  const n = normalizeName(name);
  const idx = startlist.findIndex(s => normalizeName(s) === n);
  return idx >= 0 ? Math.floor(idx / 2) + 1 : null;
}

// ── 6. STATE ────────────────────────────────────────────

const state = {
  module: "allround",
  gender: "v",
  view: "klassement",
  distKey: null,
  nextDistKey: null,
  data: null,       // merged athlete data { athletes: [...] }
  standings: null,  // computed standings { all, full, partial }
  h2h: { riderA: null, riderB: null, focusDist: null, target: null },
  overzichtSources: { sprint_m: true, sprint_v: false, allround_m: false, allround_v: false },
};

let dataSource = "waiting"; // "waiting" | "live" | "manual"

// Hash persistence: #module-gender-view[-distKey]
function saveHash() {
  const parts = [state.module, state.gender, state.view];
  if (state.view === "distance" && state.distKey) parts.push(state.distKey);
  history.replaceState(null, "", `#${parts.join("-")}`);
}

function loadHash() {
  const h = location.hash.replace("#", "");
  if (!h) return;
  const p = h.split("-");
  if (p[0] && MODULE_CONFIG[p[0]]) state.module = p[0];
  if (p[1] === "v" || p[1] === "m") state.gender = p[1];
  const views = ["klassement","distance","headToHead","overzicht","kwalificatie"];
  if (p[2] && views.includes(p[2])) state.view = p[2];
  if (p[3] && state.view === "distance") state.distKey = p.slice(3).join("-");
}

function getCfg() {
  return MODULE_CONFIG[state.module].genders[state.gender];
}

// ── 7. DATA FETCHING ────────────────────────────────────

const CACHE = {};          // "eventId_compId" → { data, ts }
const CACHE_TTL = 45_000;  // 45 seconds
const POLL_MS = 45_000;    // poll every 45s
let pollTimer = null;
let lastFetchLog = [];

async function fetchComp(eventId, compId) {
  const key = `${eventId}_${compId}`;
  const c = CACHE[key];
  if (c && Date.now() - c.ts < CACHE_TTL) return c.data;

  const url = `${API_BASE}/events/${eventId}/competitions/${compId}/results/?inSeconds=1`;

  // Helper: fetch with timeout
  async function timedFetch(fetchUrl, ms = 8000) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), ms);
    try {
      const r = await fetch(fetchUrl, { signal: ctrl.signal, headers: { Accept: "application/json" } });
      clearTimeout(timer);
      return r;
    } catch (e) {
      clearTimeout(timer);
      throw e;
    }
  }

  // Try direct
  try {
    const r = await timedFetch(url, 5000);
    if (r.ok) { const d = await r.json(); CACHE[key] = { data: d, ts: Date.now() }; return d; }
  } catch (_) {}

  // CORS proxy fallback
  const proxies = [
    `https://corsproxy.io/?${encodeURIComponent(url)}`,
    `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
    `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
  ];
  for (const p of proxies) {
    try {
      const r = await timedFetch(p, 8000);
      if (!r.ok) continue;
      const txt = await r.text();
      if (!txt || txt.length < 10) continue;
      const d = JSON.parse(txt);
      CACHE[key] = { data: d, ts: Date.now() };
      return d;
    } catch (_) { continue; }
  }
  return null;
}

// Fetch all 8 comps for an event, sequentially with delays
async function fetchAllComps(eventId) {
  const missing = [];
  const now = Date.now();
  for (let c = 1; c <= 8; c++) {
    const k = `${eventId}_${c}`;
    if (!CACHE[k] || now - CACHE[k].ts >= CACHE_TTL) missing.push(c);
  }
  if (missing.length === 0) return;

  console.log(`[NK] Fetching comps [${missing.join(",")}] for ${eventId}`);
  const failed = [];
  for (const c of missing) {
    const result = await fetchComp(eventId, c);
    if (!result) failed.push(c);
    await sleep(600); // 600ms between requests
  }

  // Retry failures once
  if (failed.length > 0) {
    console.log(`[NK] Retrying failed comps [${failed.join(",")}]`);
    await sleep(1500);
    for (const c of failed) {
      await fetchComp(eventId, c);
      await sleep(800);
    }
  }

  const ok = [1,2,3,4,5,6,7,8].filter(c => CACHE[`${eventId}_${c}`]?.data).length;
  console.log(`[NK] Cache: ${ok}/8 comps loaded`);
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// Parse KNSB API response into our format
function parseApiResponse(data) {
  if (!data) return [];
  let results = data.results ?? data.Results ?? data.competitors ?? data.Competitors
    ?? data.data?.results ?? data.data?.competitors ?? null;
  if (!Array.isArray(results)) {
    if (Array.isArray(data)) results = data;
    else return [];
  }

  return results.map((r, i) => {
    const sk = r.competitor?.skater ?? r.skater ?? null;
    let name = sk?.firstName && sk?.lastName
      ? `${sk.firstName} ${sk.lastName}`
      : (sk?.name ?? r.name ?? r.Name ?? `Skater ${i+1}`);

    const time = r.time ?? r.Time ?? r.result ?? r.Result ?? r.finishTime ?? null;

    let status = "OK";
    const st = r.status ?? r.Status ?? 0;
    if (typeof st === "number") {
      if (st === 1) status = "DNS";
      else if (st === 2) status = "DNF";
      else if (st === 3) status = "DQ";
      else if (st !== 0 && !time) status = "DNS";
    }
    if (!time && status === "OK") status = "DNS";

    let pb = false;
    const pbf = r.pb ?? r.PB ?? r.personalBest ?? r.isPB ?? null;
    if (pbf === true || pbf === 1 || (typeof pbf === "string" && pbf.length)) pb = true;
    if (!pb && r.medal && /PB|PR/i.test(String(r.medal))) pb = true;

    return { name: String(name), time: time ? String(time) : null, status, pb };
  });
}

// ── 8. MANUAL TIMES ─────────────────────────────────────

let MANUAL = {};
function loadManual() {
  try { const r = localStorage.getItem("nk_manual"); if (r) MANUAL = JSON.parse(r); } catch(_) {}
}
function saveManual() {
  try { localStorage.setItem("nk_manual", JSON.stringify(MANUAL)); } catch(_) {}
}
function setManual(mod, gen, dk, name, time) {
  const k = `${mod}_${gen}_${dk}`;
  if (!MANUAL[k]) MANUAL[k] = {};
  if (time && time.trim() && time.trim() !== "—") MANUAL[k][normalizeName(name)] = time.trim();
  else delete MANUAL[k][normalizeName(name)];
  saveManual();
}
function getManual(mod, gen, dk, name) {
  return MANUAL[`${mod}_${gen}_${dk}`]?.[normalizeName(name)] ?? null;
}

// ── 9. DATA PROCESSING ─────────────────────────────────

function loadData() {
  const cfg = getCfg();
  const participants = PARTICIPANTS[state.module]?.[state.gender] ?? [];
  const eventId = LIVE_URLS[state.module]?.eventId;
  const compMap = LIVE_URLS[state.module]?.[state.gender] ?? {};

  // Build athlete list from participants
  const athletes = participants.map(p => ({
    name: p.name, nr: p.nr,
    times: {}, seconds: {}, points: {}, status: {}, pb: {},
  }));

  let liveCount = 0;
  let manualCount = 0;

  // Merge live data from cache
  for (const d of cfg.distances) {
    const compId = compMap[d.key];
    if (!compId || !eventId) continue;

    const cached = CACHE[`${eventId}_${compId}`];
    const parsed = cached?.data ? parseApiResponse(cached.data) : [];

    // Build lookup by normalized name
    const apiMap = new Map();
    for (const r of parsed) apiMap.set(normalizeName(r.name), r);

    // Also capture startlist order
    if (parsed.length > 0) {
      const slKey = `${state.module}_${state.gender}_${d.key}`;
      if (!STARTLISTS[slKey]) {
        STARTLISTS[slKey] = parsed.map(r => r.name);
      }
    }

    // Match against athletes
    for (const a of athletes) {
      const norm = normalizeName(a.name);

      // Exact match
      let match = apiMap.get(norm);

      // Fuzzy match if no exact
      if (!match) {
        let bestKey = null, bestDist = 999;
        for (const [k, v] of apiMap) {
          const d2 = levenshtein(norm, k);
          if (d2 < bestDist && d2 <= 2) { bestDist = d2; bestKey = k; }
        }
        // Also try last-name match
        if (!bestKey) {
          const lastName = norm.split(" ").pop();
          if (lastName.length >= 3) {
            for (const [k, v] of apiMap) {
              if (k.split(" ").pop() === lastName) { bestKey = k; break; }
            }
          }
        }
        if (bestKey) {
          match = apiMap.get(bestKey);
          console.log(`[NK] Fuzzy: "${a.name}" ↔ "${match.name}" (${bestKey})`);
        }
      }

      if (match && match.time && match.status === "OK") {
        a.times[d.key] = match.time;
        a.seconds[d.key] = parseTime(match.time);
        a.status[d.key] = "OK";
        a.pb[d.key] = match.pb;
        liveCount++;
        apiMap.delete(normalizeName(match.name)); // remove to avoid double-matching
      }
    }

    if (parsed.length > 0) {
      console.log(`[NK] Comp ${compId} → ${d.key}: ${parsed.length} results, ${athletes.filter(a => a.times[d.key]).length} matched`);
    }
  }

  // Overlay manual times
  for (const d of cfg.distances) {
    for (const a of athletes) {
      const mt = getManual(state.module, state.gender, d.key, a.name);
      if (mt) {
        a.times[d.key] = mt;
        a.seconds[d.key] = parseTime(mt);
        a.status[d.key] = "OK";
        manualCount++;
      }
    }
  }

  // Set data source
  if (manualCount > 0) dataSource = "manual";
  else if (liveCount > 0) dataSource = "live";
  else dataSource = "waiting";

  state.data = { athletes };
  state.standings = computeStandings(athletes, cfg.distances);

  console.log(`[NK] ${state.module}/${state.gender}: ${liveCount} live, ${manualCount} manual, ${athletes.length} athletes`);
}

function computeAthletePoints(a, distances) {
  let totalPoints = 0;
  let completed = 0;
  const pts = {};

  for (const d of distances) {
    const sec = a.seconds[d.key];
    if (Number.isFinite(sec)) {
      const p = truncDec(sec / d.divisor, 3);
      pts[d.key] = p;
      totalPoints += p;
      completed++;
    }
  }

  totalPoints = completed === distances.length ? truncDec(totalPoints, 3) : null;
  return { points: pts, totalPoints, completedCount: completed };
}

function sumPartial(a, distances) {
  let s = 0, c = 0;
  for (const d of distances) {
    const p = a.points?.[d.key];
    if (Number.isFinite(p)) { s += p; c++; }
  }
  return c > 0 ? truncDec(s, 3) : null;
}

function computeStandings(athletes, distances) {
  const computed = athletes.map(a => ({ ...a, ...computeAthletePoints(a, distances) }));

  // Sort: most distances first, then lowest points
  computed.sort((a, b) => {
    if (a.completedCount !== b.completedCount) return b.completedCount - a.completedCount;
    const ap = a.totalPoints ?? sumPartial(a, distances);
    const bp = b.totalPoints ?? sumPartial(b, distances);
    if (ap === null && bp === null) return 0;
    if (ap === null) return 1;
    if (bp === null) return -1;
    return ap - bp;
  });

  // Assign ranks (only for athletes with ≥1 distance)
  let rank = 1;
  for (const a of computed) {
    a.rank = a.completedCount > 0 ? rank++ : null;
  }

  // Deltas
  const leader = computed[0]?.totalPoints ?? sumPartial(computed[0], distances);
  for (const a of computed) {
    const pts = a.totalPoints ?? sumPartial(a, distances);
    a.pointsDelta = (Number.isFinite(leader) && Number.isFinite(pts) && a.completedCount > 0)
      ? truncDec(pts - leader, 3) : null;
  }

  // Per-distance rankings
  for (const d of distances) {
    const sorted = computed.filter(a => Number.isFinite(a.seconds?.[d.key]))
      .sort((a, b) => a.seconds[d.key] - b.seconds[d.key]);
    sorted.forEach((a, i) => {
      if (!a.distRanks) a.distRanks = {};
      a.distRanks[d.key] = i + 1;
    });
  }
  for (const a of computed) if (!a.distRanks) a.distRanks = {};

  const full = computed.filter(x => x.totalPoints !== null);
  const partial = computed.filter(x => x.totalPoints === null);
  return { all: computed, full, partial };
}

// ── 10. DOM CACHE ───────────────────────────────────────

const el = {};
function cacheEls() {
  for (const id of [
    "moduleTabs","genderTabs","viewButtons","viewTitle","viewMeta","contentArea",
    "h2hForm","h2hRiderA","h2hRiderB","h2hFocusDistance","h2hTargetRider",
    "exportBtn","entryBtn","entryModal","entryModalContent",
    "athletePopup","popupContent","debugPanel","debugContent","debugBtn",
    "statusBadge","toast",
  ]) {
    el[id] = document.getElementById(id);
  }
}

// ── 11. RENDERING HELPERS ───────────────────────────────

function rankHtml(r) {
  if (!r) return '<span class="rank">—</span>';
  const medals = { 1: "🥇", 2: "🥈", 3: "🥉" };
  if (medals[r]) return `<span class="rank rank--${r}">${medals[r]}</span>`;
  return `<span class="rank">${r}</span>`;
}

function distRankHtml(pos) {
  if (!pos) return "";
  const medals = { 1: "🥇", 2: "🥈", 3: "🥉" };
  if (medals[pos]) return `<span class="dist-rank dist-rank--${pos}">${medals[pos]}</span>`;
  return `<span class="dist-rank">#${pos}</span>`;
}

function podCls(rank) {
  if (rank === 1) return "row--gold";
  if (rank === 2) return "row--silver";
  if (rank === 3) return "row--bronze";
  return "";
}

function pbBadge(isPb) {
  return isPb ? '<span class="pb-badge">PB</span>' : "";
}

function showToast(msg, ms = 2500) {
  el.toast.textContent = msg;
  el.toast.hidden = false;
  setTimeout(() => el.toast.hidden = true, ms);
}

function updateStatus() {
  const badge = el.statusBadge;
  const txt = badge.querySelector(".status-badge__text");
  badge.className = `status-badge status-badge--${dataSource}`;
  txt.textContent = dataSource === "live" ? "Live" : dataSource === "manual" ? "Handmatig" : "Wachten";
}

function setActive(container, attr, val) {
  if (!container) return;
  for (const btn of container.querySelectorAll(".tab"))
    btn.classList.toggle("active", btn.dataset[attr] === val);
}

// ── 12. VIEW: KLASSEMENT ────────────────────────────────

function renderKlassement() {
  const cfg = getCfg();
  const distances = cfg.distances;
  const standings = state.standings;
  if (!standings) return;

  el.viewTitle.textContent = "Klassement";

  if (!state.nextDistKey || !distances.find(d => d.key === state.nextDistKey))
    state.nextDistKey = distances[distances.length - 1]?.key ?? null;
  const nextDist = distances.find(d => d.key === state.nextDistKey);

  const opts = distances.map(d =>
    `<option value="${d.key}" ${d.key === state.nextDistKey ? "selected" : ""}>${esc(d.label)}</option>`
  ).join("");

  const hdr = distances.map(d => `<th>${esc(d.label)}</th>`).join("");

  const rows = standings.all.map(a => {
    const cells = distances.map(d => {
      const t = a.times?.[d.key];
      const pos = a.distRanks?.[d.key];
      return t ? `<td class="mono">${fmtRawTime(t)}${distRankHtml(pos)}</td>` : `<td class="mono">—</td>`;
    }).join("");

    let deltaHtml = "";
    if (a.pointsDelta === 0) deltaHtml = '<span class="delta delta--leader">Leader</span>';
    else if (Number.isFinite(a.pointsDelta) && nextDist) {
      deltaHtml = `<span class="delta">${fmtTimeDelta(a.pointsDelta * nextDist.divisor)}</span>`;
    }

    const pts = a.totalPoints ?? sumPartial(a, distances);
    const ptsStr = Number.isFinite(pts) ? pts.toFixed(3) : "—";
    const dim = a.totalPoints === null && a.completedCount > 0 ? ' style="opacity:.5"' : "";

    return `<tr class="${podCls(a.rank)}">
      <td>${rankHtml(a.rank)}</td>
      <td><span class="athlete-name" data-name="${esc(a.name)}">${esc(a.name)}</span></td>
      ${cells}
      <td class="mono mono--bold"${dim}>${ptsStr}</td>
      <td>${deltaHtml}</td>
    </tr>`;
  }).join("");

  el.contentArea.innerHTML = `
    <div class="inline-controls">
      <span class="inline-controls__label">Achterstand berekend op:</span>
      <div class="select-wrap"><select id="nextDistSel">${opts}</select></div>
    </div>
    <div class="table-wrap"><table class="table">
      <thead><tr><th>#</th><th>Naam</th>${hdr}<th>Punten</th><th>Δ</th></tr></thead>
      <tbody>${rows}</tbody>
    </table></div>
    <div class="info-box">
      <strong>Leeswijzer:</strong> Klassement gerangschikt op meest gereden afstanden, dan laagste punten. Punten = tijd ÷ (meters ÷ 500), afgekapt op 3 decimalen.
      ${dataSource === "live" ? "<br>📡 Live data van live-api.schaatsen.nl — elke 45s bijgewerkt." : ""}
    </div>`;

  document.getElementById("nextDistSel")?.addEventListener("change", e => {
    state.nextDistKey = e.target.value;
    render();
  });
}

// ── 13. VIEW: DISTANCE ──────────────────────────────────

function renderDistance() {
  const cfg = getCfg();
  const dist = cfg.distances.find(d => d.key === state.distKey) ?? cfg.distances[0];
  if (!dist) return;
  state.distKey = dist.key;

  el.viewTitle.textContent = dist.label;
  const standings = state.standings;
  if (!standings) return;

  const startlist = getStartlist(state.module, state.gender, dist.key);

  const withTime = [], withoutTime = [];
  for (const a of standings.all) {
    const t = a.times?.[dist.key];
    const sec = a.seconds?.[dist.key];
    if (t && a.status?.[dist.key] === "OK" && Number.isFinite(sec))
      withTime.push({ name: a.name, time: t, sec, pb: a.pb?.[dist.key] });
    else
      withoutTime.push({ name: a.name });
  }

  withTime.sort((a, b) => a.sec - b.sec);
  const fastest = withTime[0]?.sec ?? null;
  withTime.forEach((r, i) => { r.rank = i + 1; r.delta = Number.isFinite(fastest) ? r.sec - fastest : null; });

  if (startlist) {
    const order = new Map();
    startlist.forEach((n, i) => order.set(normalizeName(n), i));
    withoutTime.sort((a, b) => (order.get(normalizeName(a.name)) ?? 999) - (order.get(normalizeName(b.name)) ?? 999));
  }

  let rowsHtml = "";
  for (const r of withTime) {
    const dStr = r.delta === 0 ? '<span class="delta delta--leader">Snelst</span>'
      : Number.isFinite(r.delta) ? `<span class="delta">${fmtTimeDelta(r.delta)}</span>` : "";
    rowsHtml += `<tr class="${podCls(r.rank)}">
      <td>${rankHtml(r.rank)}</td>
      <td><span class="athlete-name" data-name="${esc(r.name)}">${esc(r.name)}</span></td>
      <td class="mono">${fmtRawTime(r.time)}${pbBadge(r.pb)}</td>
      <td>${dStr}</td>
    </tr>`;
  }

  if (withTime.length > 0 && withoutTime.length > 0) {
    rowsHtml += `<tr class="table-sep"><td colspan="4"><span class="table-sep__label">Nog te rijden</span></td></tr>`;
  }

  for (const r of withoutTime) {
    const pairNr = getPairNr(startlist, r.name);
    const pairHtml = pairNr ? `<span class="pair-nr">Rit ${pairNr}</span>` : `<span class="pair-nr" style="opacity:.3">—</span>`;
    rowsHtml += `<tr class="row--pending">
      <td>${pairHtml}</td>
      <td><span class="athlete-name" data-name="${esc(r.name)}">${esc(r.name)}</span></td>
      <td class="mono">—</td><td></td>
    </tr>`;
  }

  const headerLabel = withTime.length > 0 ? "#" : "Rit";

  // Sidebar: compact klassement
  const sidebarHtml = buildSidebar(cfg.distances, standings);

  el.contentArea.innerHTML = `<div class="dist-split">
    <div class="dist-split__main">
      <div class="table-wrap"><table class="table">
        <thead><tr><th>${headerLabel}</th><th>Naam</th><th>Tijd</th><th>Verschil</th></tr></thead>
        <tbody>${rowsHtml}</tbody>
      </table></div>
    </div>
    <div class="dist-split__sidebar">${sidebarHtml}</div>
  </div>`;
}

function buildSidebar(distances, standings) {
  let nextDist = null;
  for (const d of distances) {
    if (!standings.all.some(a => a.times?.[d.key] && a.status?.[d.key] === "OK")) { nextDist = d; break; }
  }
  if (!nextDist) nextDist = distances[distances.length - 1];

  const ranked = standings.all.filter(a => a.completedCount > 0)
    .sort((a, b) => {
      if (a.totalPoints !== null && b.totalPoints !== null) return a.totalPoints - b.totalPoints;
      if (a.totalPoints !== null) return -1;
      if (b.totalPoints !== null) return 1;
      return (sumPartial(a, distances) ?? 999) - (sumPartial(b, distances) ?? 999);
    });

  if (ranked.length === 0) {
    return `<div class="klass-sidebar"><div class="klass-sidebar__header"><span class="klass-sidebar__title">Live Klassement</span></div><div style="padding:12px;color:var(--text-dim);font-size:12px">Nog geen resultaten</div></div>`;
  }

  const leaderPts = sumPartial(ranked[0], distances);
  const completedCount = distances.filter(d => standings.all.some(a => a.times?.[d.key])).length;
  const statusLabel = completedCount === distances.length ? "Definitief" : `Na ${completedCount}/${distances.length}`;

  const rows = ranked.map((a, i) => {
    const rk = i + 1;
    const pts = sumPartial(a, distances);
    let deltaStr = "";
    if (rk === 1) deltaStr = '<span class="delta delta--leader">Leader</span>';
    else if (Number.isFinite(pts) && Number.isFinite(leaderPts) && nextDist) {
      deltaStr = `<span class="delta">${fmtTimeDelta((pts - leaderPts) * nextDist.divisor)}</span>`;
    }
    return `<tr>
      <td style="width:28px;font-weight:700;color:var(--text-dim)">${rk}</td>
      <td><span class="athlete-name" data-name="${esc(a.name)}" style="font-size:12px">${esc(a.name)}</span></td>
      <td class="mono" style="font-size:11px">${Number.isFinite(pts) ? pts.toFixed(3) : "—"}</td>
      <td style="font-size:11px">${deltaStr}</td>
    </tr>`;
  }).join("");

  return `<div class="klass-sidebar">
    <div class="klass-sidebar__header">
      <span class="klass-sidebar__title">Live Klassement</span>
      <span class="klass-sidebar__status">${esc(statusLabel)}</span>
    </div>
    <div class="klass-sidebar__sub">Δ op ${esc(nextDist.label)}</div>
    <div class="table-wrap" style="border:none"><table class="table table--compact">
      <thead><tr><th>#</th><th>Naam</th><th>Pnt</th><th>Δ</th></tr></thead>
      <tbody>${rows}</tbody>
    </table></div>
  </div>`;
}

// ── 14. VIEW: HEAD-TO-HEAD ──────────────────────────────

function renderH2H() {
  el.viewTitle.textContent = "Head to Head";
  const cfg = getCfg();
  const standings = state.standings;
  if (!standings) return;

  // Populate selects
  const options = standings.all.map(a =>
    `<option value="${esc(a.name)}">${esc(a.name)} ${a.rank ? `(#${a.rank})` : ""}</option>`
  ).join("");
  el.h2hRiderA.innerHTML = options;
  el.h2hRiderB.innerHTML = options;
  el.h2hFocusDistance.innerHTML = cfg.distances.map(d =>
    `<option value="${d.key}">${esc(d.label)}</option>`
  ).join("");
  el.h2hTargetRider.innerHTML = `<option value="">Leider</option>` + options;

  // Set defaults
  if (!state.h2h.riderA && standings.all.length >= 2) {
    state.h2h.riderA = standings.all[0]?.name;
    state.h2h.riderB = standings.all[1]?.name;
  }
  if (state.h2h.riderA) el.h2hRiderA.value = state.h2h.riderA;
  if (state.h2h.riderB) el.h2hRiderB.value = state.h2h.riderB;
  if (state.h2h.focusDist) el.h2hFocusDistance.value = state.h2h.focusDist;
  el.h2hForm.hidden = false;

  const rA = standings.all.find(x => x.name === (state.h2h.riderA ?? el.h2hRiderA.value));
  const rB = standings.all.find(x => x.name === (state.h2h.riderB ?? el.h2hRiderB.value));

  if (!rA || !rB) { el.contentArea.innerHTML = '<div class="info-box">Selecteer twee rijders.</div>'; return; }

  // Mirror table
  const mirrorRows = cfg.distances.map(d => {
    const secA = rA.seconds?.[d.key], secB = rB.seconds?.[d.key];
    const tA = rA.times?.[d.key] ?? "—", tB = rB.times?.[d.key] ?? "—";
    let clsA = "", clsB = "";
    if (Number.isFinite(secA) && Number.isFinite(secB)) {
      if (secA < secB) { clsA = "mirror-cell--win"; clsB = "mirror-cell--lose"; }
      else if (secB < secA) { clsB = "mirror-cell--win"; clsA = "mirror-cell--lose"; }
    }
    let diffHtml = "";
    if (Number.isFinite(secA) && Number.isFinite(secB)) {
      const diff = secA - secB;
      if (diff < 0) diffHtml = `<span class="mirror-center__diff mirror-center__diff--neg">◀ ${Math.abs(diff).toFixed(2)}s</span>`;
      else if (diff > 0) diffHtml = `<span class="mirror-center__diff mirror-center__diff--pos">${diff.toFixed(2)}s ▶</span>`;
      else diffHtml = `<span class="mirror-center__diff">gelijk</span>`;
    }
    return `<div class="mirror-row">
      <div class="mirror-cell ${clsA}">${fmtRawTime(tA)}</div>
      <div class="mirror-center"><span class="mirror-center__dist">${esc(d.label)}</span>${diffHtml}</div>
      <div class="mirror-cell mirror-cell--right ${clsB}">${fmtRawTime(tB)}</div>
    </div>`;
  }).join("");

  const totA = sumPartial(rA, cfg.distances), totB = sumPartial(rB, cfg.distances);
  let totClsA = "", totClsB = "";
  if (Number.isFinite(totA) && Number.isFinite(totB)) {
    if (totA < totB) { totClsA = "mirror-cell--win"; totClsB = "mirror-cell--lose"; }
    else if (totB < totA) { totClsB = "mirror-cell--win"; totClsA = "mirror-cell--lose"; }
  }
  let totDiff = "";
  if (Number.isFinite(totA) && Number.isFinite(totB)) {
    const d = totA - totB;
    totDiff = d === 0 ? "" : `<span class="mirror-center__diff" style="font-size:11px">${d > 0 ? "+" : ""}${d.toFixed(3)} pnt</span>`;
  }

  el.contentArea.innerHTML = `
    <div class="mirror">
      <div class="mirror-header">
        <div class="mirror-header__rider">${esc(rA.name)}<div class="mirror-header__rank">#${rA.rank ?? "—"} · ${fmtPts(rA.totalPoints)} pnt</div></div>
        <div class="mirror-header__vs">VS</div>
        <div class="mirror-header__rider mirror-header__rider--right">${esc(rB.name)}<div class="mirror-header__rank">#${rB.rank ?? "—"} · ${fmtPts(rB.totalPoints)} pnt</div></div>
      </div>
      ${mirrorRows}
      <div class="mirror-row mirror-row--total">
        <div class="mirror-cell mirror-cell--total ${totClsA}">${fmtPts(totA)} pnt</div>
        <div class="mirror-center"><span class="mirror-center__dist">Totaal</span>${totDiff}</div>
        <div class="mirror-cell mirror-cell--right mirror-cell--total ${totClsB}">${fmtPts(totB)} pnt</div>
      </div>
    </div>`;
}

// ── 15. VIEW: OVERZICHT ─────────────────────────────────

function renderOverzicht() {
  el.viewTitle.textContent = "Overzicht";

  // Collect data from all active sources
  const sources = state.overzichtSources;
  // Toggle current source on
  sources[`${state.module}_${state.gender}`] = true;

  // Source toggle chips
  const chipHtml = Object.entries(sources).map(([key, active]) => {
    const [mod, gen] = key.split("_");
    const label = `${MODULE_CONFIG[mod].label} ${gen === "v" ? "♀" : "♂"}`;
    return `<button class="chip ${active ? "active" : ""}" data-source="${key}">${esc(label)}</button>`;
  }).join("");

  // Gather all standings
  const allAthletes = [];
  const showSource = Object.values(sources).filter(Boolean).length > 1;

  for (const [key, active] of Object.entries(sources)) {
    if (!active) continue;
    const [mod, gen] = key.split("_");
    const cfg2 = MODULE_CONFIG[mod].genders[gen];
    const parts = PARTICIPANTS[mod]?.[gen] ?? [];
    const eventId = LIVE_URLS[mod]?.eventId;
    const compMap = LIVE_URLS[mod]?.[gen] ?? {};

    // Build athletes for this source
    const athletes = parts.map(p => ({
      name: p.name, source: `${MODULE_CONFIG[mod].label} ${gen === "v" ? "♀" : "♂"}`,
      times: {}, seconds: {}, points: {}, status: {}, pb: {},
    }));

    for (const d of cfg2.distances) {
      const compId = compMap[d.key];
      if (!compId || !eventId) continue;
      const cached = CACHE[`${eventId}_${compId}`];
      const parsed = cached?.data ? parseApiResponse(cached.data) : [];
      const apiMap = new Map();
      for (const r of parsed) apiMap.set(normalizeName(r.name), r);
      for (const a of athletes) {
        const match = apiMap.get(normalizeName(a.name));
        if (match?.time && match.status === "OK") {
          a.times[d.key] = match.time;
          a.seconds[d.key] = parseTime(match.time);
          a.status[d.key] = "OK";
          a.pb[d.key] = match.pb;
        }
        const mt = getManual(mod, gen, d.key, a.name);
        if (mt) { a.times[d.key] = mt; a.seconds[d.key] = parseTime(mt); a.status[d.key] = "OK"; }
      }
    }

    for (const a of athletes) {
      Object.assign(a, computeAthletePoints(a, cfg2.distances));
      a.distances = cfg2.distances;
    }
    allAthletes.push(...athletes);
  }

  // Top 3 per distance
  let top3Html = "";
  for (const [key, active] of Object.entries(sources)) {
    if (!active) continue;
    const [mod, gen] = key.split("_");
    const cfg2 = MODULE_CONFIG[mod].genders[gen];
    const sourceAthletes = allAthletes.filter(a => a.source.includes(MODULE_CONFIG[mod].label) && a.source.includes(gen === "v" ? "♀" : "♂"));

    for (const d of cfg2.distances) {
      const sorted = sourceAthletes.filter(a => Number.isFinite(a.seconds?.[d.key]))
        .sort((a, b) => a.seconds[d.key] - b.seconds[d.key])
        .slice(0, 3);
      if (sorted.length === 0) continue;
      const fastest = sorted[0].seconds[d.key];
      const medals = ["🥇","🥈","🥉"];
      for (let i = 0; i < sorted.length; i++) {
        const a = sorted[i];
        const delta = a.seconds[d.key] - fastest;
        top3Html += `<tr>
          <td>${i === 0 ? esc(d.label) : ""}</td>
          ${showSource ? `<td>${i === 0 ? `<span class="source-tag">${esc(a.source)}</span>` : ""}</td>` : ""}
          <td>${medals[i] ?? ""}</td>
          <td><span class="athlete-name" data-name="${esc(a.name)}">${esc(a.name)}</span></td>
          <td class="mono">${fmtRawTime(a.times?.[d.key])}${pbBadge(a.pb?.[d.key])}</td>
          <td>${delta === 0 ? "" : `<span class="delta">+${fmtTimeDelta(delta).slice(1)}</span>`}</td>
        </tr>`;
      }
    }
  }

  // PB list
  const pbs = allAthletes.flatMap(a =>
    (a.distances ?? []).filter(d => a.pb?.[d.key]).map(d => ({
      name: a.name, source: a.source, distLabel: d.label, time: a.times[d.key],
    }))
  );

  let pbHtml = "";
  if (pbs.length > 0) {
    pbHtml = `<div class="section-label">Persoonlijke records</div>
      <div class="table-wrap"><table class="table">
        <thead><tr><th>Naam</th>${showSource ? "<th>Bron</th>" : ""}<th>Afstand</th><th>Tijd</th><th></th></tr></thead>
        <tbody>${pbs.map(p => `<tr>
          <td><span class="athlete-name" data-name="${esc(p.name)}">${esc(p.name)}</span></td>
          ${showSource ? `<td><span class="source-tag">${esc(p.source)}</span></td>` : ""}
          <td>${esc(p.distLabel)}</td>
          <td class="mono">${fmtRawTime(p.time)}</td>
          <td><span class="pb-badge">PB</span></td>
        </tr>`).join("")}</tbody>
      </table></div>`;
  }

  const srcCol = showSource ? "<th>Bron</th>" : "";
  el.contentArea.innerHTML = `
    <div class="chip-group" id="overzichtChips">${chipHtml}</div>
    <div class="section-label">Top 3 per afstand</div>
    <div class="table-wrap"><table class="table table--grouped">
      <thead><tr><th>Afstand</th>${srcCol}<th></th><th>Naam</th><th>Tijd</th><th>Verschil</th></tr></thead>
      <tbody>${top3Html || '<tr><td colspan="6" style="color:var(--text-dim)">Nog geen resultaten</td></tr>'}</tbody>
    </table></div>
    ${pbHtml}`;

  // Chip handlers
  document.getElementById("overzichtChips")?.addEventListener("click", e => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    const key = chip.dataset.source;
    sources[key] = !sources[key];
    // Ensure at least current is active
    if (!Object.values(sources).some(Boolean)) sources[`${state.module}_${state.gender}`] = true;
    render();
  });
}

// ── 16. VIEW: KWALIFICATIE ──────────────────────────────

function renderKwalificatie() {
  el.viewTitle.textContent = "Kwalificatie Slotafstand";
  const qCfg = QUAL_CONFIG[state.module];
  if (!qCfg) { el.contentArea.innerHTML = '<div class="info-box">Kwalificatie geldt alleen voor NK Allround.</div>'; return; }

  let html = "";
  for (const gen of ["v", "m"]) {
    const q = qCfg[gen];
    const cfg2 = MODULE_CONFIG[state.module].genders[gen];
    const participants = PARTICIPANTS[state.module]?.[gen] ?? [];
    const eventId = LIVE_URLS[state.module]?.eventId;
    const compMap = LIVE_URLS[state.module]?.[gen] ?? {};

    // Build athletes
    const athletes = participants.map(p => ({
      name: p.name, times: {}, seconds: {}, points: {}, status: {}, pb: {},
    }));
    for (const d of cfg2.distances) {
      const compId = compMap[d.key];
      if (!compId || !eventId) continue;
      const cached = CACHE[`${eventId}_${compId}`];
      const parsed = cached?.data ? parseApiResponse(cached.data) : [];
      const apiMap = new Map();
      for (const r of parsed) apiMap.set(normalizeName(r.name), r);
      for (const a of athletes) {
        const match = apiMap.get(normalizeName(a.name));
        if (match?.time && match.status === "OK") {
          a.times[d.key] = match.time;
          a.seconds[d.key] = parseTime(match.time);
          a.status[d.key] = "OK";
        }
        const mt = getManual(state.module, gen, d.key, a.name);
        if (mt) { a.times[d.key] = mt; a.seconds[d.key] = parseTime(mt); a.status[d.key] = "OK"; }
      }
    }
    for (const a of athletes) Object.assign(a, computeAthletePoints(a, cfg2.distances));

    // Determine if 3 distances completed for definitive
    const completedDists = q.first3.filter(dk => athletes.some(a => Number.isFinite(a.seconds?.[dk])));
    const useFirst3 = completedDists.length >= 3;
    const klassDists = useFirst3 ? q.first3 : q.first2;
    const modeLabel = useFirst3 ? "Definitief (na 3 afstanden)" : "Voorlopig (schaduwklassement)";

    // Partial klassement
    const withKlass = athletes.map(a => {
      let sum = 0, count = 0;
      for (const dk of klassDists) {
        const p = a.points?.[dk];
        if (Number.isFinite(p)) { sum += p; count++; }
      }
      return { ...a, klassSum: count === klassDists.length ? truncDec(sum, 3) : null };
    }).filter(a => a.klassSum !== null).sort((a, b) => a.klassSum - b.klassSum);

    // Distance ranking on qualDist
    const withDist = athletes.filter(a => Number.isFinite(a.seconds?.[q.qualDist]))
      .sort((a, b) => a.seconds[q.qualDist] - b.seconds[q.qualDist]);

    const klassTop8 = new Set(withKlass.slice(0, 8).map(a => a.name));
    const distTop8 = new Set(withDist.slice(0, 8).map(a => a.name));

    // Qualification logic
    const qualified = [], notQualified = [];
    const both = [...klassTop8].filter(n => distTop8.has(n));
    const klassOnly = [...klassTop8].filter(n => !distTop8.has(n));
    const distOnly = [...distTop8].filter(n => !klassTop8.has(n));

    for (const n of both) qualified.push({ name: n, status: "both" });
    // Klass-only lose spots, dist-only fill them
    const openSpots = klassOnly.length;
    for (const n of distOnly.slice(0, openSpots)) qualified.push({ name: n, status: "dist_swap" });
    for (const n of distOnly.slice(openSpots)) notQualified.push({ name: n, status: "out" });
    for (const n of klassOnly) notQualified.push({ name: n, status: "klass_only" });
    // Everyone else
    for (const a of athletes) {
      if (!qualified.find(q => q.name === a.name) && !notQualified.find(q => q.name === a.name))
        notQualified.push({ name: a.name, status: "out" });
    }

    const statusBadge = (s) => {
      const map = {
        both: ["Klass + Afstand", "qual-badge--both"],
        dist_swap: ["Via afstand", "qual-badge--dist"],
        klass_only: ["Alleen klassement", "qual-badge--klass"],
        out: ["Niet gekwalificeerd", "qual-badge--out"],
      };
      const [label, cls] = map[s] ?? ["", ""];
      return `<span class="qual-badge ${cls}">${label}</span>`;
    };

    const gLabel = gen === "v" ? "♀ Vrouwen" : "♂ Mannen";
    const finalDist = cfg2.distances.find(d => d.key === q.finalDist);

    html += `<div class="qual-section">
      <div class="section-label">${gLabel} — ${finalDist?.label ?? ""} ${statusBadge(modeLabel)}</div>
      <div style="font-size:11px;color:var(--text-dim);margin-bottom:8px">${modeLabel}</div>
      <div class="table-wrap"><table class="table">
        <thead><tr><th>#</th><th>Naam</th><th>Punten</th><th>Status</th></tr></thead>
        <tbody>${qualified.map((q2, i) => {
          const a = withKlass.find(x => x.name === q2.name) ?? athletes.find(x => x.name === q2.name);
          return `<tr><td>${i+1}</td><td><span class="athlete-name" data-name="${esc(q2.name)}">${esc(q2.name)}</span></td>
            <td class="mono">${a?.klassSum != null ? a.klassSum.toFixed(3) : "—"}</td>
            <td>${statusBadge(q2.status)}</td></tr>`;
        }).join("")}</tbody>
      </table></div>
      ${notQualified.length > 0 ? `<div style="margin-top:8px;font-size:11px;font-weight:700;color:var(--text-muted)">Niet gekwalificeerd</div>
      <div class="table-wrap"><table class="table">
        <tbody>${notQualified.slice(0, 12).map(q2 => {
          const a = athletes.find(x => x.name === q2.name);
          return `<tr style="opacity:.5"><td>—</td><td>${esc(q2.name)}</td>
            <td class="mono">${fmtPts(a?.klassSum)}</td><td>${statusBadge(q2.status)}</td></tr>`;
        }).join("")}</tbody>
      </table></div>` : ""}
    </div>`;
  }

  el.contentArea.innerHTML = html;
}

// ── 17. ATHLETE POPUP ───────────────────────────────────

function openAthletePopup(name) {
  const cfg = getCfg();
  const a = state.standings?.all?.find(x => x.name === name);
  if (!a) return;

  const p = findParticipant(name);
  const distances = cfg.distances;
  const skated = distances.filter(d => a.times?.[d.key]);
  const notSkated = distances.filter(d => !a.times?.[d.key]);

  // Header
  let html = `<div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:14px">
    <div>
      <div style="font-size:18px;font-weight:800">${esc(name)}</div>
      <div style="font-size:12px;color:var(--text-dim);margin-top:2px">
        ${p ? `<span class="source-tag" style="margin-right:4px">${esc(p.cat)}</span>
        <span style="color:var(--text-muted)">${esc(p.qual)}</span>` : ""}
      </div>
    </div>
    <button onclick="el.athletePopup.hidden=true" style="background:none;border:none;color:var(--text-dim);font-size:20px;cursor:pointer">✕</button>
  </div>`;

  // KPI cards
  const pbCount = distances.filter(d => a.pb?.[d.key]).length;
  const ptsDisplay = a.totalPoints ?? sumPartial(a, distances);
  html += `<div class="kpi-row">
    <div class="kpi-card"><div class="kpi-card__label">Klassement</div><div class="kpi-card__value">#${a.rank ?? "—"}</div></div>
    <div class="kpi-card"><div class="kpi-card__label">Punten</div><div class="kpi-card__value">${Number.isFinite(ptsDisplay) ? ptsDisplay.toFixed(3) : "—"}</div></div>
    <div class="kpi-card"><div class="kpi-card__label">PB's</div><div class="kpi-card__value">${pbCount} <span style="font-size:12px;color:var(--text-dim)">${skated.length > 0 ? Math.round(pbCount / skated.length * 100) + "%" : ""}</span></div>
      <div class="kpi-card__sub">${pbCount} van ${skated.length} ritten</div></div>
    <div class="kpi-card"><div class="kpi-card__label">Afstanden</div><div class="kpi-card__value">${skated.length}/${distances.length}</div></div>
  </div>`;

  // Results table
  if (skated.length > 0) {
    const leaderTimes = {};
    for (const d of distances) {
      const best = state.standings.all.filter(x => Number.isFinite(x.seconds?.[d.key]))
        .sort((x, y) => x.seconds[d.key] - y.seconds[d.key])[0];
      leaderTimes[d.key] = best?.seconds?.[d.key] ?? null;
    }
    html += `<div class="popup-section-label">Resultaten</div>
      <div class="table-wrap"><table class="table">
        <thead><tr><th>Afstand</th><th>Tijd</th><th>Positie</th><th>Verschil</th></tr></thead>
        <tbody>${skated.map(d => {
          const pos = a.distRanks?.[d.key];
          const leader = leaderTimes[d.key];
          const delta = Number.isFinite(a.seconds[d.key]) && Number.isFinite(leader) ? a.seconds[d.key] - leader : null;
          return `<tr class="${podCls(pos)}">
            <td>${esc(d.label)}</td>
            <td class="mono">${fmtRawTime(a.times[d.key])}${pbBadge(a.pb?.[d.key])}</td>
            <td>${pos ? rankHtml(pos) : "—"}</td>
            <td>${delta === 0 ? '<span class="delta delta--leader">Snelst</span>' : Number.isFinite(delta) ? `<span class="delta">+${fmtTimeDelta(delta).slice(1)}</span>` : ""}</td>
          </tr>`;
        }).join("")}</tbody>
      </table></div>`;
  }

  if (notSkated.length > 0) {
    html += `<div class="popup-section-label" style="margin-top:12px">Nog te rijden</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">${notSkated.map(d =>
        `<span style="padding:4px 10px;border:1px dashed var(--border);border-radius:var(--radius-sm);font-size:12px;color:var(--text-dim)">${esc(d.label)}</span>`
      ).join("")}</div>`;
  }

  el.popupContent.innerHTML = html;
  el.athletePopup.hidden = false;
}

// ── 18. ENTRY MODAL ─────────────────────────────────────

let entryDistKey = null;
let entryMode = "fields"; // "fields" | "paste"

function openEntryModal(distKey) {
  const cfg = getCfg();
  entryDistKey = distKey ?? cfg.distances[0]?.key;
  renderEntryModal();
  el.entryModal.hidden = false;
}

function renderEntryModal() {
  const cfg = getCfg();
  const dist = cfg.distances.find(d => d.key === entryDistKey) ?? cfg.distances[0];
  if (!dist) return;

  const participants = PARTICIPANTS[state.module]?.[state.gender] ?? [];
  const startlist = getStartlist(state.module, state.gender, dist.key);

  // Count entered per distance
  const counts = {};
  for (const d of cfg.distances) {
    counts[d.key] = participants.filter(p => getManual(state.module, state.gender, d.key, p.name)).length;
  }

  // Distance tabs
  const tabs = cfg.distances.map(d => {
    const hasData = counts[d.key] > 0 || state.standings?.all?.some(a => a.times?.[d.key]);
    return `<button class="entry-tab ${d.key === entryDistKey ? "active" : ""} ${hasData ? "has-data" : ""}" data-dk="${d.key}">
      ${esc(d.label)}<span class="entry-tab__dot"></span>
    </button>`;
  }).join("");

  // Sort athletes by startlist order
  let ordered = [...participants];
  if (startlist) {
    const orderMap = new Map();
    startlist.forEach((n, i) => orderMap.set(normalizeName(n), i));
    ordered.sort((a, b) => (orderMap.get(normalizeName(a.name)) ?? 999) - (orderMap.get(normalizeName(b.name)) ?? 999));
  }

  let bodyHtml = "";
  if (entryMode === "fields") {
    bodyHtml = `<div class="entry-fields">${ordered.map(p => {
      const pairNr = getPairNr(startlist, p.name);
      const existing = getManual(state.module, state.gender, dist.key, p.name) ?? "";
      return `<div class="entry-row">
        <div class="entry-row__pair">${pairNr ? `Rit ${pairNr}` : ""}</div>
        <div>${esc(p.name)}</div>
        <input class="entry-row__input" data-name="${esc(p.name)}" value="${esc(existing)}" placeholder="mm:ss.xx">
      </div>`;
    }).join("")}</div>`;
  } else {
    bodyHtml = `<div>
      <div style="font-size:11px;color:var(--text-dim);margin-bottom:6px">Plak resultaten (Naam + Tijd per regel):</div>
      <textarea id="entryPasteArea" class="entry-paste__area" rows="12" placeholder="1 Suzanne Schulting 37.45\n2 Marijke Groenewoud 38.12"></textarea>
      <button id="entryPasteBtn" class="cta cta--primary" style="margin-top:8px;width:100%">Verwerk & sla op</button>
    </div>`;
  }

  const total = participants.length;
  const entered = counts[dist.key] ?? 0;

  el.entryModalContent.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
      <div>
        <div style="font-size:15px;font-weight:800">⚡ Tijd invoeren</div>
        <div style="font-size:11px;color:var(--text-dim)">${MODULE_CONFIG[state.module].label} · ${getCfg().label} · ${esc(dist.label)}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span class="mono" style="font-size:12px;color:var(--accent)">${entered}/${total}</span>
        <button onclick="el.entryModal.hidden=true" style="background:none;border:none;color:var(--text-dim);font-size:18px;cursor:pointer">✕</button>
      </div>
    </div>
    <div class="entry-tabs" id="entryTabs">${tabs}</div>
    <div class="entry-modes">
      <button class="entry-mode ${entryMode === "fields" ? "active" : ""}" data-mode="fields">Per rijder</button>
      <button class="entry-mode ${entryMode === "paste" ? "active" : ""}" data-mode="paste">Plak resultaten</button>
    </div>
    ${bodyHtml}
    <div class="entry-footer">
      <button class="btn btn--danger" id="entryClear">Wis deze afstand</button>
      <button class="cta cta--entry" onclick="el.entryModal.hidden=true">Sluiten</button>
    </div>`;

  // Bind events
  document.getElementById("entryTabs")?.addEventListener("click", e => {
    const btn = e.target.closest(".entry-tab");
    if (btn?.dataset.dk) { entryDistKey = btn.dataset.dk; renderEntryModal(); }
  });

  el.entryModalContent.querySelector(".entry-modes")?.addEventListener("click", e => {
    const btn = e.target.closest(".entry-mode");
    if (btn?.dataset.mode) { entryMode = btn.dataset.mode; renderEntryModal(); }
  });

  // Field input handlers
  for (const input of el.entryModalContent.querySelectorAll(".entry-row__input")) {
    input.addEventListener("blur", () => {
      setManual(state.module, state.gender, entryDistKey, input.dataset.name, input.value);
      loadData();
      render();
    });
    input.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        e.preventDefault();
        input.blur();
        const next = input.closest(".entry-row")?.nextElementSibling?.querySelector(".entry-row__input");
        if (next) next.focus();
      }
    });
  }

  // Paste handler
  document.getElementById("entryPasteBtn")?.addEventListener("click", () => {
    const text = document.getElementById("entryPasteArea")?.value ?? "";
    const results = parsePaste(text);
    let matched = 0;
    for (const { name, time } of results) {
      // Find closest participant
      const norm = normalizeName(name);
      const p = (PARTICIPANTS[state.module]?.[state.gender] ?? []).find(x => {
        const pn = normalizeName(x.name);
        return pn === norm || pn.split(" ").pop() === norm.split(" ").pop();
      });
      if (p) { setManual(state.module, state.gender, entryDistKey, p.name, time); matched++; }
    }
    showToast(`${matched} van ${results.length} tijden verwerkt`);
    loadData(); render(); renderEntryModal();
  });

  // Clear handler
  document.getElementById("entryClear")?.addEventListener("click", () => {
    const k = `${state.module}_${state.gender}_${entryDistKey}`;
    delete MANUAL[k];
    saveManual();
    loadData(); render(); renderEntryModal();
    showToast("Tijden gewist");
  });

  // Auto-focus first empty input
  setTimeout(() => {
    const first = el.entryModalContent.querySelector('.entry-row__input[value=""]');
    if (first) first.focus();
  }, 50);
}

function parsePaste(text) {
  const results = [];
  for (const line of text.split("\n").map(l => l.trim()).filter(Boolean)) {
    const m = line.match(/(\d{1,2}[:.]\d{2}[:.]\d{2}|\d{1,2}[:.]\d{2,3}|\d{2}[,.]\d{2,3})$/);
    if (!m) continue;
    const time = m[1].replace(",", ".");
    let name = line.slice(0, m.index).trim().replace(/^\d+[\s.)\-]+/, "").replace(/\s*[\(\[][^)\]]*[\)\]]\s*/g, " ").trim();
    if (name.length > 2) results.push({ name, time });
  }
  return results;
}

// ── 19. DEBUG PANEL ─────────────────────────────────────

async function openDebugPanel() {
  el.debugPanel.hidden = false;
  el.debugContent.innerHTML = '<div style="color:var(--orange)">⏳ Loading...</div>';

  const eventId = LIVE_URLS.allround?.eventId ?? LIVE_URLS.sprint?.eventId;
  await fetchAllComps(eventId);

  const vNames = new Set(PARTICIPANTS.allround.v.map(p => normalizeName(p.name)));
  const mNames = new Set(PARTICIPANTS.allround.m.map(p => normalizeName(p.name)));

  let html = `<div style="font-size:14px;font-weight:700;margin-bottom:8px">🔍 Debug Panel</div>`;
  html += `<div style="font-size:12px;color:var(--text-dim);margin-bottom:10px">DataSource: <b style="color:var(--text)">${dataSource}</b> | ${state.module} ${state.gender} | ${state.standings?.all?.length ?? 0} athletes, ${state.standings?.all?.filter(a => a.completedCount > 0).length ?? 0} met tijden</div>`;

  // Cache status
  const now = Date.now();
  html += `<div style="font-size:10px;font-family:var(--font-mono);margin-bottom:10px">`;
  for (let c = 1; c <= 8; c++) {
    const cached = CACHE[`${eventId}_${c}`];
    const parsed = cached?.data ? parseApiResponse(cached.data) : [];
    const age = cached ? Math.round((now - cached.ts) / 1000) : -1;
    const color = parsed.length > 0 ? "var(--green)" : (cached ? "var(--orange)" : "var(--red)");
    html += `<span style="color:${color}">C${c}:${parsed.length}(${age}s) </span>`;
  }
  html += `</div>`;

  // Per-comp details
  html += `<div style="border-top:1px solid var(--border);padding-top:8px;margin-top:4px"><div style="font-weight:700;color:var(--accent);margin-bottom:6px">Comp Mapping</div>`;
  for (let c = 1; c <= 8; c++) {
    const cached = CACHE[`${eventId}_${c}`];
    const parsed = cached?.data ? parseApiResponse(cached.data) : [];
    const names = parsed.map(r => normalizeName(r.name));
    const vm = names.filter(n => vNames.has(n)).length;
    const mm = names.filter(n => mNames.has(n)).length;
    const detect = vm > mm ? "♀" : mm > vm ? "♂" : "?";
    const sample = parsed.slice(0, 3).map(r => r.name).join(", ");

    // Find mapping
    let mappedTo = "—";
    for (const gen of ["v","m"]) {
      for (const [dk, compId] of Object.entries(LIVE_URLS.allround?.[gen] ?? {})) {
        if (compId === c) mappedTo = `${gen === "v" ? "♀" : "♂"} ${MODULE_CONFIG.allround.genders[gen].distances.find(d => d.key === dk)?.label ?? dk}`;
      }
    }

    const ok = (detect === "♀" && mappedTo.startsWith("♀")) || (detect === "♂" && mappedTo.startsWith("♂")) || parsed.length === 0;
    html += `<div style="margin-bottom:4px;font-size:11px">
      <b style="color:var(--accent)">C${c}</b> → ${mappedTo} | Detect: ${detect} (♀${vm} ♂${mm}) ${ok ? "✅" : "❌"}
      <span style="color:var(--text-muted);font-size:10px">${parsed.length} results: ${sample}</span>
    </div>`;
  }
  html += `</div>`;

  // Name match for current module/gender
  const curParts = PARTICIPANTS[state.module]?.[state.gender] ?? [];
  const curCompMap = LIVE_URLS[state.module]?.[state.gender] ?? {};
  const apiNamesAll = new Set();
  for (const [dk, compId] of Object.entries(curCompMap)) {
    const cached = CACHE[`${eventId}_${compId}`];
    const parsed = cached?.data ? parseApiResponse(cached.data) : [];
    for (const r of parsed) apiNamesAll.add(normalizeName(r.name));
  }
  const matched = curParts.filter(p => apiNamesAll.has(normalizeName(p.name)));
  const unmatched = curParts.filter(p => !apiNamesAll.has(normalizeName(p.name)));
  html += `<div style="border-top:1px solid var(--border);padding-top:8px;margin-top:8px">
    <div style="font-weight:700;color:var(--accent);margin-bottom:4px">Name Match: ${state.module} ${state.gender} (${curParts.length})</div>
    <div style="font-size:12px;color:var(--green);margin-bottom:4px">Match: ${matched.length}/${curParts.length}</div>
    ${unmatched.length > 0 ? `<div style="font-size:11px;color:var(--red)">Unmatched: ${unmatched.map(p => esc(p.name)).join(", ")}</div>` : ""}
  </div>`;

  // Force refresh button
  html += `<div style="margin-top:12px;border-top:1px solid var(--border);padding-top:8px">
    <button id="debugRefresh" style="padding:6px 14px;background:var(--orange);color:#000;border:none;border-radius:6px;font-weight:700;font-size:12px;cursor:pointer">🔄 Force Refresh</button>
    <button onclick="document.getElementById('debugPanel').hidden=true" style="padding:6px 14px;background:var(--surface-2);color:var(--text-dim);border:1px solid var(--border);border-radius:6px;font-size:12px;cursor:pointer;margin-left:6px">Sluiten</button>
  </div>`;

  el.debugContent.innerHTML = html;

  document.getElementById("debugRefresh")?.addEventListener("click", async () => {
    for (const k of Object.keys(CACHE)) delete CACHE[k];
    el.debugContent.innerHTML = '<div style="color:var(--orange)">🔄 Refreshing...</div>';
    await fetchAllComps(eventId);
    loadData();
    render();
    openDebugPanel();
  });
}

// ── 20. CSV EXPORT ──────────────────────────────────────

function exportCSV() {
  const cfg = getCfg();
  if (!state.standings) return;

  const rows = [["#", "Naam", ...cfg.distances.map(d => d.label), "Punten"].join(";")];
  for (const a of state.standings.all) {
    const times = cfg.distances.map(d => a.times?.[d.key] ?? "");
    const pts = a.totalPoints ?? sumPartial(a, cfg.distances) ?? "";
    rows.push([a.rank ?? "", a.name, ...times, pts].join(";"));
  }

  const blob = new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `NK_${state.module}_${state.gender}_klassement.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("CSV geëxporteerd");
}

// ── 21. RENDER & VIEW NAVIGATION ────────────────────────

function renderViewButtons() {
  const cfg = getCfg();
  const views = [
    { key: "klassement", icon: "📊", label: "Klassement" },
    ...cfg.distances.map(d => ({ key: "distance", distKey: d.key, icon: "⏱", label: d.label })),
    { key: "headToHead", icon: "⚔️", label: "Head to Head" },
    { key: "overzicht", icon: "📋", label: "Overzicht" },
    { key: "kwalificatie", icon: "⭐", label: "Kwalificatie" },
  ];

  el.viewButtons.innerHTML = views.map(v => {
    const isActive = v.key === state.view && (!v.distKey || v.distKey === state.distKey);
    return `<button class="tab ${isActive ? "active" : ""}" data-view="${v.key}" ${v.distKey ? `data-dk="${v.distKey}"` : ""}>
      ${v.icon} ${esc(v.label)}
    </button>`;
  }).join("");
}

function render() {
  const cfg = getCfg();
  setActive(el.moduleTabs, "module", state.module);
  setActive(el.genderTabs, "gender", state.gender);
  saveHash();
  updateStatus();
  renderViewButtons();

  el.h2hForm.hidden = state.view !== "headToHead";
  el.viewMeta.textContent = `${MODULE_CONFIG[state.module].label} · ${cfg.label}`;

  if (state.view === "distance") {
    if (!state.distKey) state.distKey = cfg.distances[0]?.key;
    return renderDistance();
  }
  if (state.view === "headToHead") return renderH2H();
  if (state.view === "overzicht") return renderOverzicht();
  if (state.view === "kwalificatie") return renderKwalificatie();
  return renderKlassement();
}

// ── 22. EVENT BINDING ───────────────────────────────────

function bindEvents() {
  // Module tabs
  el.moduleTabs.addEventListener("click", e => {
    const btn = e.target.closest(".tab");
    if (btn?.dataset.module) { state.module = btn.dataset.module; switchModule(); }
  });

  // Gender tabs
  el.genderTabs.addEventListener("click", e => {
    const btn = e.target.closest(".tab");
    if (btn?.dataset.gender) { state.gender = btn.dataset.gender; loadData(); render(); }
  });

  // View buttons
  el.viewButtons.addEventListener("click", e => {
    const btn = e.target.closest(".tab");
    if (!btn) return;
    state.view = btn.dataset.view;
    if (btn.dataset.dk) state.distKey = btn.dataset.dk;
    render();
  });

  // H2H selects
  for (const id of ["h2hRiderA","h2hRiderB","h2hFocusDistance","h2hTargetRider"]) {
    el[id]?.addEventListener("change", () => {
      state.h2h.riderA = el.h2hRiderA.value;
      state.h2h.riderB = el.h2hRiderB.value;
      state.h2h.focusDist = el.h2hFocusDistance.value;
      state.h2h.target = el.h2hTargetRider.value;
      render();
    });
  }

  // Export
  el.exportBtn?.addEventListener("click", exportCSV);

  // Entry button
  el.entryBtn?.addEventListener("click", () => openEntryModal());

  // Debug button
  el.debugBtn?.addEventListener("click", openDebugPanel);

  // Click-anywhere delegation for athlete names
  document.addEventListener("click", e => {
    const nameEl = e.target.closest(".athlete-name");
    if (nameEl?.dataset.name) openAthletePopup(nameEl.dataset.name);
  });

  // Close popups on overlay click or Escape
  for (const overlay of [el.athletePopup, el.entryModal, el.debugPanel]) {
    overlay?.addEventListener("click", e => { if (e.target === overlay) overlay.hidden = true; });
  }
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      el.athletePopup.hidden = true;
      el.entryModal.hidden = true;
      el.debugPanel.hidden = true;
    }
  });
}

// ── 23. POLLING ─────────────────────────────────────────

function startPolling() {
  stopPolling();
  async function tick() {
    try {
      const eventId = LIVE_URLS[state.module]?.eventId;
      if (eventId) {
        for (let c = 1; c <= 8; c++) delete CACHE[`${eventId}_${c}`];
        await fetchAllComps(eventId);
      }
      loadData();
      render();
    } catch (e) {
      console.warn("[NK] Poll error:", e);
    }
    pollTimer = setTimeout(tick, POLL_MS);
  }
  pollTimer = setTimeout(tick, POLL_MS);
}

function stopPolling() {
  if (pollTimer) { clearTimeout(pollTimer); pollTimer = null; }
}

async function switchModule() {
  stopPolling();
  // Render immediately with whatever we have
  loadData();
  render();
  // Then fetch new data
  try {
    const eventId = LIVE_URLS[state.module]?.eventId;
    if (eventId) await fetchAllComps(eventId);
    loadData();
    render();
  } catch (e) {
    console.warn("[NK] Switch error:", e);
  }
  startPolling();
}

// ── 24. BOOT ────────────────────────────────────────────

async function boot() {
  cacheEls();
  loadHash();
  loadManual();
  bindEvents();

  // Render immediately with participant baseline (no live data yet)
  loadData();
  render();
  console.log("[NK] Initial render done (no live data yet)");

  // Then fetch live data in background
  try {
    const eventId = LIVE_URLS[state.module]?.eventId;
    if (eventId) {
      await fetchAllComps(eventId);
      loadData();
      render();
      console.log("[NK] Live data loaded ✅");
    }
  } catch (e) {
    console.warn("[NK] Fetch error:", e);
  }

  startPolling();
  console.log("[NK] Boot complete ✅");
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
