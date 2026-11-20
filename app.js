const SESSION_START=Date.now();let sessionTimerId=null;
function startSessionTimer(){if(sessionTimerId)return;const el=document.getElementById('sessionTime');if(!el)return;const tick=()=>{const e=Math.floor((Date.now()-SESSION_START)/1000);const h=String(Math.floor(e/3600)).padStart(2,'0');const m=String(Math.floor((e%3600)/60)).padStart(2,'0');const s=String(e%60).padStart(2,'0');el.textContent=`${h}:${m}:${s}`;};tick();sessionTimerId=setInterval(tick,1000);}

function lsGet(k,fb){try{const r=localStorage.getItem(k);if(r===null)return fb;return JSON.parse(r);}catch(e){return fb;}}
function lsSet(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}

const state={witness:[],coherence:{interactions:0},kaelen:{m0:80,f:1.0,fatigue:0,nightSims:0},onir:{active:false,stress:0,lastWhisper:'---'},rfbb:[]};
const sW=lsGet('alba_witness',[]);state.witness=Array.isArray(sW)?sW:[];
const sI=lsGet('alba_interactions',0);state.coherence.interactions=Number.isFinite(sI)&&sI>=0?Math.floor(sI):0;
const sR=lsGet('alba_rfbb',[]);state.rfbb=Array.isArray(sR)?sR.filter(e=>e&&typeof e==='object'&&typeof e.hash==='string'&&e.hash.length===64):[];
let coherence=Math.tanh(state.coherence.interactions/15);

async function addToRFBB(kind,detail,source){const ts=new Date().toISOString();const prev=state.rfbb.length?state.rfbb[0].hash:'0'.repeat(64);const idx=state.rfbb.length;const data=`${idx}|${ts}|${kind}|${detail}|${source}|${prev}`;let hash;if(crypto&&crypto.subtle){const mb=new TextEncoder().encode(data);const hb=await crypto.subtle.digest('SHA-256',mb);hash=Array.from(new Uint8Array(hb)).map(b=>b.toString(16).padStart(2,'0')).join('');}else{let h=0;for(let i=0;i<data.length;i++){h=((h<<5)-h+data.charCodeAt(i))|0;}hash=Math.abs(h).toString(16).padStart(64,'0');}state.rfbb.unshift({index:idx,kind:String(kind),detail:String(detail),source:String(source),ts,prevHash:prev,hash});if(state.rfbb.length>200)state.rfbb.pop();lsSet('alba_rfbb',state.rfbb);renderRFBB();}
function renderRFBB(){const l=document.getElementById('rfbbList');const c=document.getElementById('currentHash');if(c)c.textContent=state.rfbb.length?state.rfbb[0].hash:'0'.repeat(64);if(!l)return;if(!state.rfbb.length){l.innerHTML='<div style="color:#64748b">Sin eventos.</div>';return;}l.innerHTML=state.rfbb.slice(0,50).map(e=>`<div class="ledger-block"><div style="color:#94a3b8;display:flex;justify-content:space-between;margin-bottom:.3rem"><span>Block #${e.index}</span><span>${new Date(e.ts).toLocaleTimeString()}</span></div><div style="color:#fbbf24;margin-bottom:.2rem">${escapeHTML(e.kind)} · <span style="color:#94a3b8">${escapeHTML(e.detail)}</span></div><div class="ledger-hash">SHA-256: ${e.hash}</div></div>`).join('');}
function updateCoherenceUI(){coherence=Math.tanh(state.coherence.interactions/15);const v=document.getElementById('cohValue');if(v)v.textContent=coherence.toFixed(3);const f=document.getElementById('cohFill');if(f)f.style.width=(coherence*100)+'%';const p=document.getElementById('phiCount');if(p)p.textContent=state.coherence.interactions;lsSet('alba_interactions',state.coherence.interactions);}
function addGlobalLog(msg){const d=document.getElementById('cohLog');if(d){const p=document.createElement('div');p.textContent=`🕒 ${new Date().toLocaleTimeString()} · ${msg}`;d.prepend(p);while(d.children.length>10)d.removeChild(d.lastChild);}addToRFBB('Evento global',msg,'coherencia');}
function addInteraction(delta=1,label=null){state.coherence.interactions=Math.max(0,state.coherence.interactions+delta);updateCoherenceUI();addGlobalLog(label||`⚡ Flujo Φ · ${coherence.toFixed(3)}`);}
function witness(type,detail){state.witness.unshift({type:String(type),detail:String(detail),ts:new Date().toISOString()});if(state.witness.length>200)state.witness.pop();lsSet('alba_witness',state.witness);}
window.heroFallback=function(img){const box=img.parentElement;const cap=box.querySelector('.caption');const fb=document.createElement('div');fb.className='hero-fallback';fb.innerHTML='⚠️ Guarda la imagen como <strong style="color:#fbbf24">kaelen.jpg</strong>';img.remove();box.insertBefore(fb,cap);};

function renderWitnessLog(){const el=document.getElementById('wlog');if(!el)return;const log=Array.isArray(state.witness)?state.witness:[];if(!log.length){el.textContent='Sin eventos.';return;}const vis=log.filter(e=>e&&typeof e==='object'&&e.type!=='module_open').slice(0,100);el.innerHTML=vis.map(e=>`<div style="padding:.15rem 0;border-bottom:1px solid #1e293b"><span style="color:#64748b">${new Date(e.ts).toLocaleTimeString()}</span> <strong style="color:#fbbf24">${escapeHTML(e.type)}</strong> · ${escapeHTML(e.detail)}</div>`).join('');}
window.exportAlba=function(){const b=new Blob([JSON.stringify({coherence:state.coherence,kaelen:state.kaelen,witness:state.witness,rfbb:state.rfbb},null,2)],{type:'application/json'});const u=URL.createObjectURL(b);const a=document.createElement('a');a.href=u;a.download=`alba_${Date.now()}.alba`;a.click();URL.revokeObjectURL(u);};
window.clearWitness=function(){if(!confirm('¿Limpiar?'))return;state.witness=[];lsSet('alba_witness',[]);renderWitnessLog();};

let currentIndex=0;
const TAB_ORDER=['indice','origin','constitucion','systems','nervioso','cellular','presence','biophysics','palancas','movimiento','nutricion','desgaste','crecimiento','forja','biologia','limites','fascia','espina','exoesqueleto','musculos','cola','augmentacion','quiebres','reparaciones','referencia','historia','familia','viaje','alex','coherencia','particulas','gemelo','onir','rfbb','notificaciones','diagnostico','redes','maya','avatar-mundo','espiritus','relato','rutas','vision','sabana','digestion','abundancia','graficos','graficos3d','gap','pact','between','method','prompt','architecture','witness'];

function navigate(id){
  const mod=MODULES[id];if(!mod)return;
  const newIndex=TAB_ORDER.indexOf(id);const direction=newIndex>=currentIndex?'right':'left';currentIndex=newIndex>=0?newIndex:0;
  document.querySelectorAll('.tab').forEach(t=>{const a=t.dataset.id===id;t.classList.toggle('active',a);t.setAttribute('aria-selected',a?'true':'false');if(a)t.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});});
  const c=document.getElementById('content');
  c.innerHTML=mod.render();
  c.className='content '+(direction==='right'?'slide-in-right':'slide-in-left');
  document.getElementById('status').textContent='🟢 '+mod.label;
  witness('module_open',id);
  if(typeof mod.after==='function')mod.after();
  c.scrollTop=0;window.scrollTo(0,0);
}

function init(){
  const tabs=document.getElementById('tabs');
  Object.entries(MODULES).forEach(([id,m])=>{
    const b=document.createElement('button');
    b.className='tab';b.dataset.id=id;b.textContent=m.icon+' '+m.label;
    b.setAttribute('role','tab');b.addEventListener('click',()=>navigate(id));
    tabs.appendChild(b);
  });
  startSessionTimer();
  navigate('indice');
  
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}