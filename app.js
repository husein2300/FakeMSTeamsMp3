'use strict';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------- Icons ---------- */
const ICONS = {
  chat: '<path d="M4 5h16v11H9l-5 4z"/>',
  people: '<circle cx="9" cy="8" r="3.2"/><path d="M3 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"/><circle cx="17" cy="9" r="2.5"/><path d="M16.5 13.6c2.6.2 4.5 2 4.5 4.9"/>',
  hand: '<path d="M8 12V6.3a1.3 1.3 0 0 1 2.6 0V11M10.6 11V4.5a1.3 1.3 0 0 1 2.6 0V11M13.2 11V5.5a1.3 1.3 0 0 1 2.6 0V12M15.8 12V8.3a1.3 1.3 0 0 1 2.6 0V14c0 3.9-2.6 7-6.2 7-2.5 0-4-1-5.4-3l-2.2-3.4a1.3 1.3 0 0 1 2-1.7L8 14.4"/>',
  react: '<circle cx="12" cy="12" r="8.5"/><path d="M8.5 14c.9 1.3 2.1 2 3.5 2s2.6-.7 3.5-2"/><circle cx="9.3" cy="10" r=".9" fill="currentColor"/><circle cx="14.7" cy="10" r=".9" fill="currentColor"/>',
  view: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
  speaker: '<rect x="3" y="4" width="18" height="11" rx="1.5"/><rect x="3" y="17" width="5" height="3" rx="1"/><rect x="9.5" y="17" width="5" height="3" rx="1"/><rect x="16" y="17" width="5" height="3" rx="1"/>',
  more: '<circle cx="6" cy="12" r="1.3" fill="currentColor"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/><circle cx="18" cy="12" r="1.3" fill="currentColor"/>',
  cam: '<rect x="3" y="7" width="12.5" height="10" rx="2"/><path d="M15.5 10.5 21 7.5v9l-5.5-3z"/>',
  camOff: '<rect x="3" y="7" width="12.5" height="10" rx="2"/><path d="M15.5 10.5 21 7.5v9l-5.5-3zM3 4l17 16"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/>',
  micOff: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M4 3l16 18"/>',
  share: '<rect x="3" y="5" width="18" height="13" rx="2"/><path d="M12 15V9m-3 3 3-3 3 3"/>',
  phone: '<path d="M3.2 14.2c4.9-4.4 12.7-4.4 17.6 0 .4.4.4 1 0 1.4l-1.6 1.6c-.3.3-.8.4-1.2.2l-2.6-1.2c-.4-.2-.6-.6-.6-1v-1.8a10 10 0 0 0-5.6 0v1.8c0 .4-.2.8-.6 1L6 17.4c-.4.2-.9.1-1.2-.2l-1.6-1.6c-.4-.4-.4-1 0-1.4z" fill="currentColor"/>',
  play: '<path d="M8 5.5v13l11-6.5z" fill="currentColor" stroke="none"/>',
  pause: '<rect x="6.5" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none"/><rect x="13.5" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none"/>',
  prev: '<path d="M6 5v14"/><path d="M19 5.5v13L9 12z" fill="currentColor"/>',
  next: '<path d="M18 5v14"/><path d="M5 5.5v13L15 12z" fill="currentColor"/>',
  shuffle: '<path d="M3 7h3.5c2 0 3.2 1 4.3 2.6l2.4 4.8c1.1 1.6 2.3 2.6 4.3 2.6H21M3 17h3.5c1.4 0 2.4-.5 3.2-1.3M14.3 8.3c.8-.8 1.8-1.3 3.2-1.3H21M18.5 4.5 21 7l-2.5 2.5M18.5 14.5 21 17l-2.5 2.5"/>',
  repeat: '<path d="M4 11V9a3 3 0 0 1 3-3h13m-3-3 3 3-3 3M20 13v2a3 3 0 0 1-3 3H4m3 3-3-3 3-3"/>',
  volume: '<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>',
  volumeOff: '<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="m16 9.5 5 5M21 9.5l-5 5"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>',
  trash: '<path d="M5 7h14M10 7V4.5h4V7M7 7l1 13h8l1-13"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  music: '<path d="M9 18V6l11-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>',
  wave: '<path d="M4 10v4M8 7v10M12 4v16M16 8v8M20 11v2"/>',
  yt: '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.5v5l4.5-2.5z" fill="currentColor"/>',
};
const icon = name =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`;
function setIcon(el, name) {
  el.querySelector(':scope > svg')?.remove();
  el.insertAdjacentHTML('afterbegin', icon(name));
}

/* ---------- Helpers ---------- */
const COLORS = ['#c4314b', '#8764b8', '#0f6cbd', '#038387', '#ca5010', '#498205', '#986f0b', '#c239b3', '#4f52b2', '#00828a'];
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
const decode = s => new DOMParser().parseFromString(s, 'text/html').documentElement.textContent;
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const initials = n => n.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase() || '?';
const fmt = s => {
  if (!isFinite(s)) s = 0;
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
};

const store = {
  get(k, d) {
    try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; }
  },
  set(k, v) {
    try { localStorage.setItem(k, JSON.stringify(v)); } catch { toast('Penyimpanan browser penuh — coba foto yang lebih kecil'); }
  },
};

let toastTimer;
function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (el.hidden = true), 2600);
}

function resizeImage(file, size = 256) {
  return new Promise((res, rej) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const c = document.createElement('canvas');
      c.width = c.height = size;
      const s = Math.min(img.width, img.height);
      c.getContext('2d').drawImage(img, (img.width - s) / 2, (img.height - s) / 2, s, s, 0, 0, size, size);
      URL.revokeObjectURL(url);
      res(c.toDataURL('image/jpeg', 0.85));
    };
    img.onerror = () => { URL.revokeObjectURL(url); rej(new Error('Gambar tidak valid')); };
    img.src = url;
  });
}

// Text "badge" profile picture: white disc, big bold line, small line, oval company tag.
function makeBadge({ big, small, tag, color }, size = 256) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  const r = size / 2;
  const font = '"Segoe UI", Arial, sans-serif';

  const bg = g.createRadialGradient(r * 0.8, r * 0.7, r * 0.1, r, r, r);
  bg.addColorStop(0, '#ffffff');
  bg.addColorStop(0.72, '#eef0f3');
  bg.addColorStop(1, '#c4c9d1');
  g.fillStyle = bg;
  g.fillRect(0, 0, size, size);
  g.beginPath();
  g.arc(r, r, r - 7, 0, Math.PI * 2);
  g.strokeStyle = 'rgba(255,255,255,.95)';
  g.lineWidth = 4;
  g.stroke();

  const fit = (text, weight, max, maxW) => {
    let s = max;
    g.font = `${weight} ${s}px ${font}`;
    while (s > 8 && g.measureText(text).width > maxW) g.font = `${weight} ${--s}px ${font}`;
    return s;
  };

  const items = [];
  if (big) items.push({ text: big, weight: 800, size: fit(big, 800, size * 0.24, size * 0.68), h: 0 });
  if (small) items.push({ text: small, weight: 400, size: fit(small, 400, size * 0.105, size * 0.66), h: 0 });
  if (tag) items.push({ text: tag, tag: true, h: size * 0.15 });
  items.forEach(it => { if (!it.tag) it.h = it.size; });
  const gap = size * 0.035;
  let y = r - (items.reduce((a, it) => a + it.h, 0) + gap * (items.length - 1)) / 2;

  g.textAlign = 'center';
  g.textBaseline = 'middle';
  items.forEach(it => {
    const cy = y + it.h / 2;
    if (it.tag) {
      const ts = fit(it.text, 800, it.h * 0.62, size * 0.4);
      const w = Math.max(it.h * 2.4, g.measureText(it.text).width + it.h * 1.1);
      g.beginPath();
      g.ellipse(r, cy, w / 2, it.h / 2, 0, 0, Math.PI * 2);
      g.fillStyle = color;
      g.fill();
      const shine = g.createLinearGradient(0, cy - it.h / 2, 0, cy + it.h / 2);
      shine.addColorStop(0, 'rgba(255,255,255,.45)');
      shine.addColorStop(0.5, 'rgba(255,255,255,0)');
      g.fillStyle = shine;
      g.fill();
      g.lineWidth = 2;
      g.strokeStyle = '#ffffff';
      g.stroke();
      g.fillStyle = '#ffffff';
      g.font = `800 ${ts}px ${font}`;
      g.fillText(it.text, r, cy + ts * 0.05);
    } else {
      g.fillStyle = color;
      g.font = `${it.weight} ${it.size}px ${font}`;
      g.fillText(it.text, r, cy + it.size * 0.05);
    }
    y += it.h + gap;
  });
  return c.toDataURL('image/png');
}

/* ---------- Song storage (IndexedDB, so MP3s survive a refresh) ---------- */
const DB = (() => {
  let dbp;
  const open = () => dbp || (dbp = new Promise((res, rej) => {
    const r = indexedDB.open('fakeTeams', 1);
    r.onupgradeneeded = () => r.result.createObjectStore('tracks', { keyPath: 'id' });
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  }));
  const tx = async (mode, fn) => {
    const db = await open();
    return new Promise((res, rej) => {
      const t = db.transaction('tracks', mode);
      const req = fn(t.objectStore('tracks'));
      t.oncomplete = () => res(req.result);
      t.onerror = () => rej(t.error);
    });
  };
  return {
    all: () => tx('readonly', s => s.getAll()),
    put: rec => tx('readwrite', s => s.put(rec)),
    del: id => tx('readwrite', s => s.delete(id)),
  };
})();

/* ---------- State ---------- */
function defaultParticipants() {
  return ['Andi Pratama', 'Siti Rahmawati', 'Budi Santoso', 'Dewi Lestari']
    .map((name, i) => ({ id: uid() + i, name, photo: DEFAULT_AVATAR, color: COLORS[i + 1], video: false }));
}

const DEFAULT_AVATAR = 'assets/default-avatar.jpg';
let participants = store.get('ft.participants', null) || defaultParticipants();
const settings = Object.assign(
  { title: 'Rapat Mingguan', myName: 'Saya', myPhoto: DEFAULT_AVATAR, myColor: '#5b5fc7', camOn: false, volume: 0.8, hand: false, ytKey: '', showVideo: false },
  store.get('ft.settings', {}),
);
// Profiles saved before the default avatar existed have no photo; give them the default once.
if (!settings.defaultAvatarApplied) {
  if (!settings.myPhoto) settings.myPhoto = DEFAULT_AVATAR;
  settings.defaultAvatarApplied = true;
  store.set('ft.settings', settings);
}
if (!settings.defaultAvatarAllApplied) {
  participants.forEach(p => { if (!p.photo) p.photo = DEFAULT_AVATAR; });
  settings.defaultAvatarAllApplied = true;
  store.set('ft.participants', participants);
  store.set('ft.settings', settings);
}
// MP3:     { id, name, blob, participantId, order, url }
// YouTube: { id, name, source: 'yt', videoId, channel, thumb, participantId, order }
let tracks = [];
let current = -1;
let shuffle = false;
let repeat = 'all'; // off | all | one
let view = 'gallery';
let panel = null;
let editing = null; // { mode: 'new'|'edit'|'me', id, draft }
let startTime = Date.now();

const saveParticipants = () => store.set('ft.participants', participants);
const saveSettings = () => store.set('ft.settings', settings);
const getP = id => participants.find(p => p.id === id);
const meP = () => ({ id: 'me', name: settings.myName, photo: settings.myPhoto, color: settings.myColor, video: settings.camOn });
const trackRecord = ({ url, ...rec }) => rec;
const NOBODY = { name: 'Tanpa penyanyi', color: '#616161', photo: null };

/* ---------- Audio ---------- */
const audio = new Audio();
audio.preload = 'auto';
let actx, analyser, buf;
let lvl = 0;
let volume = settings.volume;
let muted = false;

const yt = { player: null, ready: null, state: -1 };
const isYT = () => tracks[current]?.source === 'yt';
const showingVideo = () => isYT() && settings.showVideo;

// One facade over the two backends (HTML audio for MP3s, YouTube IFrame player for videos).
const P = {
  get paused() { return isYT() ? !(yt.state === 1 || yt.state === 3) : audio.paused; },
  get time() { return isYT() ? yt.player?.getCurrentTime?.() || 0 : audio.currentTime; },
  set time(s) { if (isYT()) yt.player?.seekTo?.(s, true); else audio.currentTime = s; },
  get duration() { return isYT() ? yt.player?.getDuration?.() || 0 : isFinite(audio.duration) ? audio.duration : 0; },
  play() {
    if (isYT()) { yt.player?.playVideo?.(); return; }
    ensureAudioGraph();
    audio.play().catch(() => {});
  },
  pause() { if (isYT()) yt.player?.pauseVideo?.(); else audio.pause(); },
};

function applyVolume() {
  audio.volume = volume;
  audio.muted = muted;
  if (yt.player?.setVolume) {
    yt.player.setVolume(Math.round(volume * 100));
    muted ? yt.player.mute() : yt.player.unMute();
  }
  renderVolume();
}

function ensureYT() {
  if (yt.ready) return yt.ready;
  yt.ready = new Promise((res, rej) => {
    window.onYouTubeIframeAPIReady = () => {
      yt.player = new YT.Player('ytFrame', {
        width: '100%',
        height: '100%',
        playerVars: {
          autoplay: 1, controls: 0, disablekb: 1, playsinline: 1, rel: 0, iv_load_policy: 3,
          ...(location.protocol.startsWith('http') ? { origin: location.origin } : {}),
        },
        events: {
          onReady: () => { applyVolume(); res(yt.player); },
          onStateChange: onYTState,
          onError: onYTError,
        },
      });
    };
    const s = document.createElement('script');
    s.src = 'https://www.youtube.com/iframe_api';
    s.onerror = () => { yt.ready = null; rej(new Error('Gagal memuat pemutar YouTube — cek koneksi internet')); };
    document.head.appendChild(s);
  });
  return yt.ready;
}

async function loadYT(videoId) {
  if (location.protocol === 'file:') toast('YouTube perlu dibuka lewat start.bat (http://localhost:8081)');
  try {
    const player = await ensureYT();
    if (tracks[current]?.videoId === videoId) player.loadVideoById(videoId);
  } catch (e) {
    toast(e.message);
  }
}

function onYTState(e) {
  yt.state = e.data;
  if (!isYT()) return;
  if (e.data === YT.PlayerState.ENDED) next(true);
  else renderAll();
}

function onYTError(e) {
  if (!isYT()) return;
  const embedBlocked = [101, 150, 153].includes(e.data);
  toast(embedBlocked ? 'Pemilik video ini tidak mengizinkan diputar di luar YouTube — lanjut ke lagu berikutnya' : `Video tidak bisa diputar (kode ${e.data})`);
  if (tracks.length > 1) setTimeout(() => isYT() && next(), 1500);
}

// The iframe lives outside #stage (which is re-rendered often) and is laid over the share slot.
function placeYT() {
  const host = $('#ytHost');
  const slot = $('#stage .share-slot');
  if (!slot || !isYT()) {
    host.removeAttribute('style');
    host.classList.add('parked');
    return;
  }
  const wrap = $('.stage-wrap').getBoundingClientRect();
  const r = slot.getBoundingClientRect();
  Object.assign(host.style, {
    left: `${r.left - wrap.left}px`,
    top: `${r.top - wrap.top}px`,
    width: `${r.width}px`,
    height: `${r.height}px`,
  });
  host.classList.remove('parked');
}

function ensureAudioGraph() {
  if (actx) { if (actx.state === 'suspended') actx.resume(); return; }
  try {
    actx = new (window.AudioContext || window.webkitAudioContext)();
    const src = actx.createMediaElementSource(audio);
    analyser = actx.createAnalyser();
    analyser.fftSize = 512;
    buf = new Uint8Array(analyser.fftSize);
    src.connect(analyser);
    analyser.connect(actx.destination);
  } catch (e) {
    console.warn('Visualizer tidak tersedia', e);
  }
}

function playIndex(i) {
  if (!tracks.length) return;
  current = (i + tracks.length) % tracks.length;
  const t = tracks[current];
  if (t.source === 'yt') {
    audio.pause();
    yt.state = -1;
    renderAll();
    loadYT(t.videoId);
  } else {
    yt.player?.stopVideo?.();
    audio.src = t.url;
    P.play();
    renderAll();
  }
  updateMediaSession();
}

function togglePlay() {
  if (!tracks.length) { pickSongs(); return; }
  if (current < 0) { playIndex(0); return; }
  P.paused ? P.play() : P.pause();
}

function next(auto = false) {
  if (!tracks.length) return;
  if (auto && repeat === 'one') { P.time = 0; P.play(); return; }
  if (shuffle && tracks.length > 1) {
    let n;
    do n = Math.floor(Math.random() * tracks.length); while (n === current);
    playIndex(n);
    return;
  }
  if (auto && repeat === 'off' && current === tracks.length - 1) {
    if (!isYT()) audio.currentTime = 0;
    renderAll();
    return;
  }
  playIndex(current + 1);
}

function prev() {
  if (P.time > 3) { P.time = 0; return; }
  playIndex(current - 1);
}

function stopPlayback() {
  audio.pause();
  audio.removeAttribute('src');
  audio.load();
  yt.player?.stopVideo?.();
  current = -1;
}

audio.addEventListener('ended', () => next(true));
audio.addEventListener('play', renderAll);
audio.addEventListener('pause', renderAll);
audio.addEventListener('timeupdate', updateTime);
audio.addEventListener('loadedmetadata', updateTime);

function levelLoop() {
  requestAnimationFrame(levelLoop);
  let target = 0;
  if (!P.paused) {
    if (isYT()) {
      // The YouTube iframe is cross-origin and can't be analysed, so fake a talking rhythm.
      const t = performance.now();
      target = 0.35 + 0.3 * Math.sin(t / 170) * Math.sin(t / 61) + 0.15 * Math.random();
    } else if (analyser) {
      analyser.getByteTimeDomainData(buf);
      let sum = 0;
      for (let i = 0; i < buf.length; i++) { const v = (buf[i] - 128) / 128; sum += v * v; }
      target = Math.min(1, Math.sqrt(sum / buf.length) * 3.2);
    }
  }
  if (target === 0 && lvl < 0.005) { if (lvl) { lvl = 0; applyLevel(); } return; }
  lvl += (target - lvl) * 0.35;
  applyLevel();
}
const applyLevel = () => $$('.tile.speaking').forEach(el => el.style.setProperty('--lvl', lvl.toFixed(3)));

function updateMediaSession() {
  if (!('mediaSession' in navigator) || current < 0) return;
  const t = tracks[current];
  const p = getP(t.participantId);
  navigator.mediaSession.metadata = new MediaMetadata({
    title: t.name,
    artist: p ? p.name : '',
    album: settings.title,
    artwork: p?.photo ? [{ src: p.photo, sizes: '256x256', type: 'image/jpeg' }] : [],
  });
}
if ('mediaSession' in navigator) {
  navigator.mediaSession.setActionHandler('play', togglePlay);
  navigator.mediaSession.setActionHandler('pause', togglePlay);
  navigator.mediaSession.setActionHandler('previoustrack', prev);
  navigator.mediaSession.setActionHandler('nexttrack', () => next());
}

/* ---------- Tracks ---------- */
async function loadTracks() {
  try {
    const recs = await DB.all();
    recs.sort((a, b) => a.order - b.order);
    const loaded = recs.map(r => ({ ...r, url: r.blob ? URL.createObjectURL(r.blob) : null }));
    // Keep anything added while the DB was still loading.
    const ids = new Set(loaded.map(t => t.id));
    const playing = tracks[current];
    tracks = [...loaded, ...tracks.filter(t => !ids.has(t.id))];
    if (playing) current = tracks.findIndex(t => t.id === playing.id);
  } catch (e) {
    console.warn(e);
  }
  renderAll();
}

async function addFiles(fileList) {
  const files = [...fileList].filter(f => f.type.startsWith('audio/') || /\.(mp3|m4a|wav|ogg|flac|aac)$/i.test(f.name));
  if (!files.length) { toast('Pilih file audio (MP3)'); return; }
  const firstNew = tracks.length;
  const base = Date.now();
  files.forEach((f, i) => {
    const t = {
      id: uid(),
      name: f.name.replace(/\.[^.]+$/, ''),
      blob: f,
      participantId: participants.length ? participants[tracks.length % participants.length].id : null,
      order: base + i,
    };
    tracks.push({ ...t, url: URL.createObjectURL(f) });
    DB.put(t).catch(() => toast('Lagu tidak bisa disimpan di browser (hilang setelah refresh)'));
  });
  toast(`${files.length} lagu dibagikan ke rapat`);
  openPanel('chat');
  if (current < 0) playIndex(firstNew);
  else renderAll();
}

function deleteTrack(i) {
  const t = tracks[i];
  if (i === current) stopPlayback();
  else if (i < current) current--;
  tracks.splice(i, 1);
  if (t.url) URL.revokeObjectURL(t.url);
  DB.del(t.id).catch(() => {});
  renderAll();
}

function assignTrack(i, pid) {
  tracks[i].participantId = pid || null;
  DB.put(trackRecord(tracks[i])).catch(() => {});
  if (i === current) updateMediaSession();
  renderAll();
}

const pickSongs = () => $('#fileSongs').click();

/* ---------- YouTube search ---------- */
let ytResults = [];

async function searchYT(q) {
  q = q.trim();
  if (!q) return;
  if (!settings.ytKey) { renderYTResults(); return; }
  renderYTResults('Mencari…');
  try {
    const params = new URLSearchParams({
      part: 'snippet', type: 'video', videoEmbeddable: 'true', maxResults: '15', q, key: settings.ytKey,
    });
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?${params}`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.error?.message || `HTTP ${res.status}`);
    ytResults = data.items.filter(it => it.id?.videoId).map(it => ({
      videoId: it.id.videoId,
      title: decode(it.snippet.title),
      channel: decode(it.snippet.channelTitle),
      thumb: it.snippet.thumbnails?.medium?.url || it.snippet.thumbnails?.default?.url || '',
    }));
    renderYTResults(ytResults.length ? '' : 'Tidak ada hasil.');
  } catch (e) {
    renderYTResults(`Pencarian gagal: ${decode(e.message)}`);
  }
}

function addYT(r, play) {
  let i = tracks.findIndex(t => t.videoId === r.videoId);
  if (i < 0) {
    const t = {
      id: uid(),
      source: 'yt',
      videoId: r.videoId,
      name: r.title,
      channel: r.channel,
      thumb: r.thumb,
      participantId: participants.length ? participants[tracks.length % participants.length].id : null,
      order: Date.now(),
    };
    tracks.push({ ...t, url: null });
    DB.put(t).catch(() => {});
    i = tracks.length - 1;
    if (!play) toast('Ditambahkan ke playlist');
  } else if (!play) {
    toast('Lagu ini sudah ada di playlist');
    return;
  }
  if (play) playIndex(i);
  else renderAll();
}

/* ---------- Rendering ---------- */
function avatarHTML(p, cls = '') {
  if (p.photo) return `<div class="avatar ${cls}" style="background-image:url('${p.photo}')"></div>`;
  return `<div class="avatar ${cls}" style="background:${p.color}">${esc(initials(p.name))}</div>`;
}

function tileHTML(p, speaking) {
  const video = p.video && p.photo;
  return `<div class="tile${speaking ? ' speaking' : ''}${video ? ' video' : ''}" data-id="${p.id}" data-act="tile" title="Klik untuk memutar lagu ${esc(p.name)}">
    ${video
      ? `<div class="video-bg" style="background-image:url('${p.photo}')"></div>`
      : `<div class="avatar-wrap"><div class="ring"></div>${avatarHTML(p)}</div>`}
    <div class="name-tag">${speaking ? '<span class="eq"><i></i><i></i><i></i></span>' : `<span class="muted">${icon('micOff')}</span>`}<span class="nm">${esc(p.name)}</span></div>
  </div>`;
}

const presenterId = () => (current >= 0 ? tracks[current]?.participantId : null);
const speakingId = () => (P.paused ? null : presenterId());

function renderStage() {
  const stage = $('#stage');
  const sp = speakingId();
  stage.removeAttribute('style');
  if (showingVideo()) {
    const presenter = getP(presenterId());
    stage.className = 'stage sharing';
    stage.innerHTML = `<div class="share-tile"><div class="share-label">${icon('share')}<span>${presenter ? `${esc(presenter.name)} sedang berbagi` : 'Berbagi konten'}</span></div><div class="share-slot"></div></div>` +
      (participants.length ? `<div class="strip">${participants.map(p => tileHTML(p, sp === p.id)).join('')}</div>` : '');
  } else if (!participants.length) {
    stage.className = 'stage empty';
    stage.innerHTML = '<div>Hanya Anda di rapat ini. <button class="secondary-btn" data-act="add-person">Undang peserta</button></div>';
  } else if (view === 'speaker' && getP(presenterId())) {
    const main = getP(presenterId());
    const others = participants.filter(p => p !== main);
    stage.className = 'stage speaker';
    stage.innerHTML = `<div class="spot">${tileHTML(main, sp === main.id)}</div>` +
      (others.length ? `<div class="strip">${others.map(p => tileHTML(p, sp === p.id)).join('')}</div>` : '');
  } else {
    const n = participants.length;
    const cols = n <= 1 ? 1 : n <= 4 ? 2 : n <= 9 ? 3 : 4;
    stage.className = 'stage gallery';
    stage.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    stage.style.gridTemplateRows = `repeat(${Math.ceil(n / cols)}, 1fr)`;
    stage.innerHTML = participants.map(p => tileHTML(p, sp === p.id)).join('');
  }
  renderSelf();
  applyLevel();
  placeYT();
}

function renderSelf() {
  const me = meP();
  const el = $('#selfTile');
  const video = me.video && me.photo;
  el.className = `tile self-tile${video ? ' video' : ''}${settings.hand ? ' raised' : ''}`;
  el.innerHTML = (video
    ? `<div class="video-bg" style="background-image:url('${me.photo}')"></div>`
    : `<div class="avatar-wrap">${avatarHTML(me)}</div>`) +
    `<div class="name-tag"><span class="muted">${icon('micOff')}</span><span class="nm">Anda</span></div>` +
    (settings.hand ? '<div class="hand">✋</div>' : '');
}

function personRow(p, isMe) {
  const songs = tracks.filter(t => t.participantId === p.id).length;
  const sub = isMe ? 'Penyelenggara' : songs ? `${songs} lagu` : 'Peserta';
  return `<div class="person" data-id="${p.id}">
    ${avatarHTML(p, 'sm')}
    <div class="person-info"><div class="person-name">${esc(p.name)}${isMe ? ' (Anda)' : ''}</div><div class="person-sub">${sub}</div></div>
    <button class="icon-btn" data-act="${isMe ? 'edit-me' : 'edit-person'}" title="Edit">${icon('edit')}</button>
    ${isMe ? '' : `<button class="icon-btn" data-act="del-person" title="Keluarkan">${icon('trash')}</button>`}
  </div>`;
}

function renderPeople() {
  $('#peopleCount').textContent = participants.length + 1;
  $('#peopleBadge').textContent = participants.length + 1;
  $('#peopleList').innerHTML = [personRow(meP(), true), ...participants.map(p => personRow(p, false))].join('');
}

function renderPlaylist() {
  const el = $('#playlist');
  if (!tracks.length) {
    el.innerHTML = `<div class="empty-chat">${icon('music')}<p>Belum ada lagu yang dibagikan.</p><p class="hint">Klik <b>Bagikan MP3</b> atau seret file MP3 ke jendela ini.</p></div>`;
    return;
  }
  const options = sel => participants.map(p => `<option value="${p.id}"${p.id === sel ? ' selected' : ''}>${esc(p.name)}</option>`).join('') +
    `<option value=""${getP(sel) ? '' : ' selected'}>— Tidak ada —</option>`;
  el.innerHTML = tracks.map((t, i) => {
    const p = getP(t.participantId) || NOBODY;
    const active = i === current;
    return `<div class="msg${active ? ' active' : ''}" data-i="${i}">
      ${avatarHTML(p, 'sm')}
      <div class="msg-body">
        <div class="msg-head"><span class="msg-name">${esc(p.name)}</span><span>#${i + 1}</span></div>
        <div class="bubble" data-act="play-track" title="Putar">${t.source === 'yt' ? `<img class="thumb" src="${esc(t.thumb)}" alt="">` : ''}${icon(active && !P.paused ? 'wave' : t.source === 'yt' ? 'yt' : 'music')}<span class="t-name">${esc(t.name)}</span></div>
        <div class="msg-actions">
          <label>Oleh <select data-act="assign">${options(t.participantId)}</select></label>
          <button class="icon-btn" data-act="del-track" title="Hapus lagu">${icon('trash')}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function renderPlayer() {
  const t = tracks[current];
  const p = t && (getP(t.participantId) || NOBODY);
  $('#npAvatar').innerHTML = t ? avatarHTML(p, 'sm') : `<div class="avatar sm" style="background:#3d3d3d">${icon('music')}</div>`;
  $('#npTitle').textContent = t ? t.name : 'Belum ada lagu';
  $('#npSub').textContent = t
    ? (p === NOBODY ? (isYT() ? 'YouTube' : 'Musik') : `${p.name} ${P.paused ? '· dijeda' : showingVideo() ? 'sedang berbagi layar' : 'sedang berbicara'}`)
    : 'Bagikan MP3 atau cari lagu di YouTube';
  setIcon($('#btnPlay'), P.paused ? 'play' : 'pause');
  $('#btnShuffle').classList.toggle('on', shuffle);
  const rep = $('#btnRepeat');
  rep.classList.toggle('on', repeat !== 'off');
  rep.dataset.mode = repeat;
  rep.title = { off: 'Ulangi: mati', all: 'Ulangi: semua', one: 'Ulangi: satu lagu' }[repeat];

  const cap = $('#captions');
  cap.hidden = !t || P.paused || showingVideo();
  const vid = $('#btnVideo');
  vid.hidden = !isYT();
  vid.classList.toggle('on', settings.showVideo);
  vid.title = settings.showVideo ? 'Sembunyikan video YouTube' : 'Tampilkan video YouTube';
  if (t) cap.innerHTML = `<b>${esc(p.name)}</b>♪ ${esc(t.name)} ♪`;
  updateTime();
}

let seeking = false;
function updateTime() {
  const seek = $('#seek');
  const dur = P.duration;
  seek.max = dur;
  if (!seeking) seek.value = P.time;
  seek.style.setProperty('--p', dur ? `${(seek.value / dur) * 100}%` : '0%');
  $('#tCur').textContent = fmt(+seek.value);
  $('#tDur').textContent = fmt(dur);
}

function renderVolume() {
  const vol = $('#vol');
  vol.value = volume;
  vol.style.setProperty('--p', `${volume * 100}%`);
  setIcon($('#btnVol'), muted || volume === 0 ? 'volumeOff' : 'volume');
  const mic = $('#btnMic');
  setIcon(mic, muted ? 'micOff' : 'mic');
  mic.classList.toggle('active', !muted);
}

function renderYTResults(msg) {
  const el = $('#ytResults');
  if (!settings.ytKey) {
    el.innerHTML = `<div class="empty-chat">${icon('yt')}<p>Masukkan YouTube API key dulu untuk mencari lagu.</p><button class="secondary-btn" data-act="open-settings">Buka pengaturan</button></div>`;
    return;
  }
  if (msg || !ytResults.length) {
    el.innerHTML = `<div class="empty-chat">${msg ? '' : icon('yt')}<p>${esc(msg || 'Cari lagu, lalu putar atau tambahkan ke playlist.')}</p></div>`;
    return;
  }
  el.innerHTML = ytResults.map((r, i) => `<div class="yt-item" data-r="${i}">
    <img src="${esc(r.thumb)}" alt="" loading="lazy">
    <div class="yt-info"><div class="yt-title" title="${esc(r.title)}">${esc(r.title)}</div><div class="yt-ch">${esc(r.channel)}</div></div>
    <div class="yt-btns">
      <button class="icon-btn" data-act="yt-play" title="Putar sekarang">${icon('play')}</button>
      <button class="icon-btn" data-act="yt-add" title="Tambah ke playlist">${icon('plus')}</button>
    </div>
  </div>`).join('');
}

function renderToolbar() {
  $('#meetingTitle').textContent = settings.title;
  document.title = `${settings.title} | Rapat`;
  $('#btnHand').classList.toggle('active', settings.hand);
  const cam = $('#btnCam');
  setIcon(cam, settings.camOn ? 'cam' : 'camOff');
  cam.classList.toggle('active', settings.camOn);
  const v = $('#btnView');
  setIcon(v, view === 'speaker' ? 'speaker' : 'view');
}

function renderAll() {
  renderStage();
  renderPeople();
  renderPlaylist();
  renderPlayer();
  renderToolbar();
}

/* ---------- Panels ---------- */
let chatTab = 'list';
function openPanel(name) { panel = name; applyPanel(); }
function togglePanel(name) { panel = panel === name ? null : name; applyPanel(); }
function applyPanel() {
  $('#side').hidden = !panel;
  $$('.side-view').forEach(v => (v.hidden = v.dataset.view !== panel));
  $$('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === chatTab));
  $$('.tab-body').forEach(b => (b.hidden = b.dataset.tab !== chatTab));
  $('#btnChat').classList.toggle('active', panel === 'chat');
  $('#btnPeople').classList.toggle('active', panel === 'people');
}

/* ---------- Person modal ---------- */
function openPersonModal(mode, id) {
  let draft;
  if (mode === 'me') draft = { name: settings.myName, photo: settings.myPhoto, color: settings.myColor, video: settings.camOn, badge: settings.myBadge };
  else if (mode === 'edit') draft = { ...getP(id) };
  else draft = { name: '', photo: DEFAULT_AVATAR, color: COLORS[participants.length % COLORS.length], video: false, badge: null };
  editing = { mode, id, draft };
  $('#pmTitle').textContent = mode === 'new' ? 'Tambah peserta' : mode === 'me' ? 'Profil Anda' : 'Edit peserta';
  $('#pmName').value = draft.name;
  fillBadgeForm(draft.badge);
  $('#pmBadge').open = !!draft.badge;
  $('#personModal').hidden = false;
  renderPersonModal();
  $('#pmName').focus();
}

function renderPersonModal() {
  const d = editing.draft;
  d.name = $('#pmName').value;
  $('#pmAvatar').innerHTML = avatarHTML({ ...d, name: d.name || '?' });
  $('#pmColors').innerHTML = COLORS.map(c =>
    `<button style="background:${c}" class="${c === d.color ? 'sel' : ''}" data-act="pick-color" data-color="${c}" title="${c}"></button>`).join('');
  const vid = $('#pmVideo');
  vid.disabled = !d.photo;
  vid.checked = !!(d.photo && d.video);
}

function fillBadgeForm(b) {
  $('#bmBig').value = b?.big || '';
  $('#bmSmall').value = b?.small || '';
  $('#bmTag').value = b?.tag || '';
  $('#bmColor').value = b?.color || '#1565c0';
}

// Suggest badge text from the name: last word big, the rest small (e.g. "Evelyn Sun" -> SUN / EVELYN).
function suggestBadge() {
  const words = $('#pmName').value.trim().toUpperCase().split(/\s+/).filter(Boolean);
  fillBadgeForm({
    big: words.length > 1 ? words[words.length - 1] : words[0] || '',
    small: words.slice(0, -1).join(' '),
    tag: settings.badgeTag || '',
    color: settings.badgeColor,
  });
}

function applyBadge() {
  if (!editing) return;
  const b = {
    big: $('#bmBig').value.trim(),
    small: $('#bmSmall').value.trim(),
    tag: $('#bmTag').value.trim(),
    color: $('#bmColor').value,
  };
  editing.draft.badge = b;
  editing.draft.photo = makeBadge(b);
  editing.draft.video = false;
  renderPersonModal();
}

function savePerson() {
  const d = editing.draft;
  d.name = $('#pmName').value.trim();
  d.video = $('#pmVideo').checked;
  if (!d.name) { toast('Nama tidak boleh kosong'); $('#pmName').focus(); return; }
  if (d.badge) {
    settings.badgeTag = d.badge.tag;
    settings.badgeColor = d.badge.color;
    saveSettings();
  }
  if (editing.mode === 'me') {
    Object.assign(settings, { myName: d.name, myPhoto: d.photo, myColor: d.color, camOn: d.video, myBadge: d.badge });
    saveSettings();
  } else {
    if (editing.mode === 'new') participants.push({ id: uid(), ...d });
    else Object.assign(getP(editing.id), d);
    saveParticipants();
    if (editing.mode === 'new') toast(`${d.name} bergabung ke rapat`);
  }
  closeModals();
  updateMediaSession();
  renderAll();
}

function deletePerson(id) {
  const p = getP(id);
  if (!confirm(`Keluarkan ${p.name} dari rapat?`)) return;
  participants = participants.filter(x => x.id !== id);
  tracks.forEach(t => {
    if (t.participantId === id) { t.participantId = null; DB.put(trackRecord(t)).catch(() => {}); }
  });
  saveParticipants();
  renderAll();
}

function closeModals() {
  $$('.modal').forEach(m => (m.hidden = true));
  editing = null;
}

/* ---------- Toolbar actions ---------- */
function spawnEmoji(e) {
  const el = document.createElement('div');
  el.className = 'float-emoji';
  el.textContent = e;
  el.style.left = `${15 + Math.random() * 70}%`;
  $('#emojiLayer').appendChild(el);
  el.addEventListener('animationend', () => el.remove());
}

function toggleMute() {
  muted = !muted;
  applyVolume();
  toast(muted ? 'Suara rapat dibisukan' : 'Suara rapat aktif');
}

function leaveMeeting() {
  P.pause();
  const mins = Math.max(1, Math.round((Date.now() - startTime) / 60000));
  $('#leftInfo').textContent = `${settings.title} · ${mins} menit`;
  $('#leftScreen').hidden = false;
}

function tick() {
  const s = Math.floor((Date.now() - startTime) / 1000);
  const h = Math.floor(s / 3600);
  const mm = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
  const ss = String(s % 60).padStart(2, '0');
  $('#timer').textContent = h ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}

/* ---------- Events ---------- */
$('#btnChat').onclick = () => togglePanel('chat');
$('#btnPeople').onclick = () => togglePanel('people');
$('#btnHand').onclick = () => {
  settings.hand = !settings.hand;
  saveSettings();
  renderToolbar();
  renderSelf();
};
$('#btnReact').onclick = e => { e.stopPropagation(); $('#reactMenu').hidden = !$('#reactMenu').hidden; };
$('#reactMenu').onclick = e => {
  const b = e.target.closest('[data-emoji]');
  if (b) { spawnEmoji(b.dataset.emoji); $('#reactMenu').hidden = true; }
};
$('#btnView').onclick = () => {
  view = view === 'gallery' ? 'speaker' : 'gallery';
  toast(view === 'speaker' ? 'Tampilan: Pembicara' : 'Tampilan: Galeri');
  renderStage();
  renderToolbar();
};
$('#btnMore').onclick = () => {
  $('#smTitle').value = settings.title;
  $('#smKey').value = settings.ytKey;
  $('#settingsModal').hidden = false;
  $('#smTitle').focus();
};
$('#btnCam').onclick = () => {
  if (!settings.myPhoto && !settings.camOn) { toast('Unggah foto profil dulu agar kamera tampil'); openPersonModal('me'); return; }
  settings.camOn = !settings.camOn;
  saveSettings();
  renderToolbar();
  renderSelf();
};
$('#btnMic').onclick = toggleMute;
$('#btnShare').onclick = pickSongs;
$('#btnLeave').onclick = leaveMeeting;

$('#btnPlay').onclick = togglePlay;
$('#btnPrev').onclick = prev;
$('#btnNext').onclick = () => next();
$('#btnShuffle').onclick = () => { shuffle = !shuffle; renderPlayer(); };
$('#btnRepeat').onclick = () => {
  repeat = { off: 'all', all: 'one', one: 'off' }[repeat];
  renderPlayer();
};
$('#btnVol').onclick = toggleMute;
$('#btnVideo').onclick = () => {
  settings.showVideo = !settings.showVideo;
  saveSettings();
  toast(settings.showVideo ? 'Video YouTube ditampilkan' : 'Video disembunyikan — hanya peserta rapat');
  renderAll();
};
$('#vol').oninput = e => {
  volume = +e.target.value;
  muted = false;
  settings.volume = volume;
  saveSettings();
  applyVolume();
};
$('#seek').addEventListener('input', () => { seeking = true; updateTime(); });
$('#seek').addEventListener('change', e => { P.time = +e.target.value; seeking = false; });
$('#ytForm').onsubmit = e => { e.preventDefault(); searchYT($('#ytQuery').value); };

$('#fileSongs').onchange = e => { addFiles(e.target.files); e.target.value = ''; };
$('#filePhoto').onchange = async e => {
  const f = e.target.files[0];
  e.target.value = '';
  if (!f || !editing) return;
  try {
    editing.draft.photo = await resizeImage(f);
    editing.draft.badge = null;
    $('#pmBadge').open = false;
    editing.draft.video = true;
    renderPersonModal();
    $('#pmVideo').checked = true;
  } catch (err) {
    toast(err.message);
  }
};
$('#pmName').oninput = renderPersonModal;
$('#pmVideo').onchange = e => { if (editing) editing.draft.video = e.target.checked; };
$('#pmBadge').addEventListener('toggle', () => {
  if (!$('#pmBadge').open || !editing || editing.draft.badge) return;
  suggestBadge();
  applyBadge();
});
$$('#pmBadge input').forEach(el => el.addEventListener('input', applyBadge));

document.addEventListener('change', e => {
  if (e.target.matches('select[data-act="assign"]')) assignTrack(+e.target.closest('[data-i]').dataset.i, e.target.value);
});

document.addEventListener('click', e => {
  if (!e.target.closest('.react-wrap')) $('#reactMenu').hidden = true;
  const a = e.target.closest('[data-act]');
  if (!a) return;
  const pid = a.closest('[data-id]')?.dataset.id;
  const ti = +a.closest('[data-i]')?.dataset.i;
  switch (a.dataset.act) {
    case 'close-panel': panel = null; applyPanel(); break;
    case 'tab':
      chatTab = a.dataset.tab;
      applyPanel();
      if (chatTab === 'yt') $('#ytQuery').focus();
      break;
    case 'open-settings': $('#btnMore').click(); break;
    case 'yt-play':
    case 'yt-add':
      addYT(ytResults[+a.closest('[data-r]').dataset.r], a.dataset.act === 'yt-play');
      break;
    case 'add-songs': pickSongs(); break;
    case 'add-person': openPersonModal('new'); break;
    case 'edit-person': openPersonModal('edit', pid); break;
    case 'edit-me': openPersonModal('me'); break;
    case 'del-person': deletePerson(pid); break;
    case 'play-track': ti === current ? togglePlay() : playIndex(ti); break;
    case 'del-track': deleteTrack(ti); break;
    case 'pick-photo': $('#filePhoto').click(); break;
    case 'clear-photo':
      Object.assign(editing.draft, { photo: null, video: false, badge: null });
      fillBadgeForm(null);
      $('#pmBadge').open = false;
      renderPersonModal();
      break;
    case 'pick-color': editing.draft.color = a.dataset.color; renderPersonModal(); break;
    case 'save-person': savePerson(); break;
    case 'close-modal': closeModals(); break;
    case 'save-settings':
      settings.title = $('#smTitle').value.trim() || 'Rapat';
      settings.ytKey = $('#smKey').value.trim();
      saveSettings();
      closeModals();
      updateMediaSession();
      renderToolbar();
      renderYTResults();
      break;
    case 'clear-songs':
      if (!tracks.length || !confirm('Hapus semua lagu dari rapat?')) break;
      stopPlayback();
      tracks.forEach(t => { if (t.url) URL.revokeObjectURL(t.url); DB.del(t.id).catch(() => {}); });
      tracks = [];
      closeModals();
      renderAll();
      break;
    case 'reset-people':
      if (!confirm('Kembalikan daftar peserta ke awal? Foto & nama peserta yang Anda buat akan hilang.')) break;
      participants = defaultParticipants();
      tracks.forEach((t, i) => { t.participantId = participants[i % participants.length].id; DB.put(trackRecord(t)).catch(() => {}); });
      saveParticipants();
      closeModals();
      renderAll();
      break;
    case 'rejoin':
      $('#leftScreen').hidden = true;
      startTime = Date.now();
      tick();
      break;
    case 'tile': {
      const idx = current >= 0 && tracks[current].participantId === pid
        ? current
        : tracks.findIndex(t => t.participantId === pid);
      if (idx < 0) { toast(`${getP(pid).name} belum punya lagu — atur di panel Obrolan`); break; }
      idx === current ? togglePlay() : playIndex(idx);
      break;
    }
  }
});

$$('.modal').forEach(m => m.addEventListener('mousedown', e => { if (e.target === m) closeModals(); }));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModals(); $('#reactMenu').hidden = true; return; }
  if (e.key === 'Enter' && editing) { savePerson(); return; }
  if (e.key === 'Enter' && !$('#settingsModal').hidden) { $('[data-act="save-settings"]').click(); return; }
  if (e.target.matches('input, select, textarea') || !$('#leftScreen').hidden) return;
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'm') { e.preventDefault(); toggleMute(); }
  else if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
  else if (e.key === 'ArrowRight' && e.altKey) next();
  else if (e.key === 'ArrowLeft' && e.altKey) prev();
});

let dragDepth = 0;
window.addEventListener('dragenter', e => {
  if (![...e.dataTransfer.types].includes('Files')) return;
  dragDepth++;
  $('#dropOverlay').hidden = false;
});
window.addEventListener('dragleave', () => { if (--dragDepth <= 0) { dragDepth = 0; $('#dropOverlay').hidden = true; } });
window.addEventListener('dragover', e => e.preventDefault());
window.addEventListener('drop', e => {
  e.preventDefault();
  dragDepth = 0;
  $('#dropOverlay').hidden = true;
  if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files);
});

/* ---------- Init ---------- */
$$('[data-icon]').forEach(el => setIcon(el, el.dataset.icon));
applyPanel();
applyVolume();
renderAll();
renderYTResults();
loadTracks();
tick();
setInterval(tick, 1000);
setInterval(() => isYT() && updateTime(), 250);
new ResizeObserver(placeYT).observe($('#stage'));
requestAnimationFrame(levelLoop);
