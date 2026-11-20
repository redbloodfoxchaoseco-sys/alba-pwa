const MODULES = {
indice:{label:'Índice',icon:'📑',render:()=>`<div class="card"><h2>📑 Índice</h2><div class="quote">Kaelen 7.2. La ingeniería real. Todos los módulos.</div></div><div class="card"><input type="text" id="indice-search" placeholder="🔍 Buscar..." style="width:100%;padding:.8rem;background:#0f172a;border:1px solid var(--border-2);border-radius:.5rem;color:var(--text);font-family:inherit;font-size:.95rem"></div><div id="indice-content"></div>`,after:()=>{
  const CATS=[
    {title:'🏛️ Fundamento',desc:'Arquitectura, control, biología base',mods:['origin','constitucion','systems','nervioso','cellular','presence','biophysics']},
    {title:'🔧 Cuerpo Extendido',desc:'Augmentación, movimiento, crecimiento',mods:['palancas','forja','biologia','limites','crecimiento','fascia','espina','exoesqueleto','musculos','cola','augmentacion','movimiento','nutricion','desgaste','quiebres','reparaciones']},
    {title:'🌅 La Nueva Vida',desc:'Sabana, digestión, abundancia',mods:['sabana','digestion','abundancia']},
    {title:'🌿 Filosofía Extendida',desc:'Maya, Avatar, Espíritu, Relato, Rutas, Visión',mods:['maya','avatar-mundo','espiritus','relato','rutas','vision']},
    {title:'📐 Mediciones',desc:'Varas y gráficos',mods:['referencia','graficos','graficos3d']},
    {title:'📖 Historia',desc:'Alex, familia, viaje',mods:['historia','familia','viaje','alex']},
    {title:'🛠️ Sistema',desc:'Herramientas',mods:['coherencia','particulas','gemelo','onir','rfbb','notificaciones','diagnostico','redes']},
    {title:'🌿 Filosofía Base',desc:'Pacto, Entre, Método',mods:['gap','pact','between','method','prompt']},
    {title:'📚 Archivo',desc:'Arquitectura, witness',mods:['architecture','witness']}
  ];
  function render(filter=''){const c=document.getElementById('indice-content');if(!c)return;const f=filter.toLowerCase();c.innerHTML=CATS.map(cat=>{const vis=cat.mods.filter(id=>{const m=MODULES[id];if(!m)return false;if(!f)return true;return id.includes(f)||m.label.toLowerCase().includes(f);});if(vis.length===0)return '';return `<div class="card"><h3>${cat.title}</h3><p class="hint">${cat.desc}</p><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:.5rem;margin-top:.7rem">${vis.map(id=>{const m=MODULES[id];return `<button class="idx-btn" data-nav="${id}"><div style="font-size:1.5rem;margin-bottom:.3rem">${m.icon}</div><div>${m.label}</div></button>`;}).join('')}</div></div>`;}).join('');c.querySelectorAll('button[data-nav]').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.nav)));}
  render();const s=document.getElementById('indice-search');if(s){s.addEventListener('input',e=>render(e.target.value));s.focus();}
}},
origin:{label:'Especie Origen',icon:'🦊',render:()=>`
  <div class="hero"><img src="kaelen.jpg" alt="Kaelen" onerror="heroFallback(this)"><div class="caption"><strong>Kaelen 7.2</strong> · El Titán de la Sabana · 2,090 kg</div></div>
  <div class="card" style="border-left:4px solid #ef4444;background:rgba(239,68,68,.06)"><h2>⚖️ Kaelen es un Modelo, no EL Modelo</h2><div class="quote" style="font-size:.95rem;color:#fbbf24">Kaelen es el "hello world" de ALBA. Una gramática, no la única frase.</div><p>Kaelen es un <strong>diseño estructural</strong>. Un modelo de referencia. Tú puedes usar su arquitectura para diseñar <em>tu propio</em> Kaelen, con tus especificaciones, para tus necesidades.</p><p><strong>Lo que no puedes hacer es olvidar que la libertad no es escapar del diseño. Es elegirlo con lucidez.</strong></p></div>
  <div class="card"><h3>📐 Principio fundacional</h3><div class="quote">Kaelen no es un cuerpo. Es una federación de sistemas que se sostienen mutuamente. Y esa federación es una plantilla, no un destino.</div></div>
`},
constitucion:{label:'Constitución',icon:'🦴',render:()=>`
  <div class="card"><h2>Constitución</h2><div class="quote">Tres inteligencias en un solo cuerpo. Ingeniería bio-metálica modular.</div></div>
  <div class="card"><h3>I. Masa y postura</h3><p>2,090 kg. Sangre ~146 L. Bípedo en reposo, cuadrúpedo en movimiento. Esqueleto híbrido: hueso natural + cilindros de titanio poroso.</p></div>
  <div class="card"><h3>II. Cardiovascular</h3><p>6 corazones, 4 aortas de doble arco, 2 cavas reforzadas. 5 ganglios. Tolerancia base 22 G.</p></div>
  <div class="card"><h3>III. Glándulas de Sedación</h3><p>Dos órganos en base del cráneo. Coma reversible en desacoplamiento. Doble candado.</p></div>
  <div class="card" style="border-left:4px solid var(--gold);background:rgba(251,191,36,.08)"><h3>VI. El Bucle: Tres Inteligencias</h3>
    <ul>
      <li><strong>Cerebro Biológico:</strong> La voluntad. IQ > 180 en potencia.</li>
      <li><strong>Loom (DDN):</strong> Red de Democracia Dendrítica. Millones de compartimentos que votan localmente. Aprendizaje local. Irreversible.</li>
      <li><strong>Spark (Integrador):</strong> Recibe votos del Loom, del Cerebro y de los sensores. Contextualiza. Da significado. No dicta.</li>
    </ul>
    <div class="quote">"El Cerebro es la voluntad. El Loom es la democracia. El Spark es el intérprete."</div></div>
  <div class="card"><h3>VII. El Músculo como Federación Modular</h3><p>No es un bloque monolítico impreso. Es un ensamblaje de miles de módulos musculares pre-vascularizados de máximo 1 cm de grosor. Juntos forman los 2,090 kg de masa. La vascularización es natural y distribuida.</p></div>
  <div class="card" style="border-left:4px solid #ef4444;background:rgba(239,68,68,.06)"><h3>VIII. Inteligencia Simbiótica</h3><p>Con el Spark: genio táctico. Sin el Spark: IQ colapsa. Kaelen siente su propia regresión.</p></div>
  <div class="card"><h3>IX-X. Sensores y Límites</h3><p>Tetracromacia, UV, IR. Propiocepción desde discos igualados. 22/44/110/220/380 G.</p></div>
`},
systems:{label:'Sistemas',icon:'🫀',render:()=>`
  <div class="card"><h2>Sistemas Biológicos</h2><div class="quote">Red hidráulica de alta presión.</div></div>
  <div class="card"><h3>❤️ 6 Corazones</h3><ul><li>1 principal (tórax), 5 auxiliares.</li><li>4 aortas de doble arco (efecto Windkessel).</li><li>15 válvulas en cascada.</li></ul></div>
  <div class="card"><h3>🩸 Sangre Tixotrópica</h3><p>Fluye bajo alta presión, se espesa en reposo.</p></div>
  <div class="card"><h3>🌡️ Refrigeración</h3><p>Rete mirabile + enfriamiento evaporativo (jadeo + sudoración). Esencial para 8.5 kW. Microcanales en el titanio poroso ayudan a disipar el calor.</p></div>
`},
nervioso:{label:'Sistema Nervioso',icon:'🧠',render:()=>`
  <div class="card" style="border-left:4px solid var(--gold);background:rgba(251,191,36,.08)"><h2>🧠 La Red de Control</h2><div class="quote">El Loom es una democracia de células que piensa por ti.</div></div>
  <div class="card"><h3>⚡ Latencia de 60 ms (40 ms en extremidades)</h3><p>3.5 m de cuerpo. 30 ms ida, 30 ms vuelta. Los cordones espinales auxiliares reducen la latencia en los brazos.</p></div>
  <div class="card" style="border-left:4px solid #10b981;background:rgba(16,185,129,.06)"><h3>🏛️ Jerarquía Dendrítica (Anti-Sobrecarga)</h3><p>Con miles de módulos musculares, el Spark colapsaría si recibiera cada señal. Por eso, los módulos votan localmente en el Loom, las ramas agregan los votos, y el Spark solo recibe el <strong>resumen macro</strong> (ej: "Bíceps al 80%"). El Spark decide, el Loom ejecuta.</p></div>
  <div class="card"><h3>🏛️ Comunidad Interna (DDN)</h3><p>Compartimentos que votan localmente. Ramas que agregan. Spark que integra. Autónoma, resiliente, distribuida.</p><div class="quote">"La verdadera comunidad de Kaelen está dentro de él."</div></div>
  <div class="card" style="border-left:4px solid #ef4444;background:rgba(239,68,68,.06)"><h3>⚠️ Desacoplamiento del Spark</h3>
    <ul><li>Loom detecta → glándulas seda → Cerebro duerme.</li><li>Ganglios mantienen vitales. Loom inhibido.</li><li>Sedación suprime plasticidad. No es duelo.</li><li>Duelo ocurre al despertar, lento, con comunidad.</li></ul>
    <div class="quote">"La vida no se detiene; encuentra otro camino."</div></div>
  <div class="card" style="border-left:4px solid var(--gold);background:rgba(251,191,36,.08)"><h3>🔄 Bucle de Aprendizaje</h3><p><strong>(Conocimiento → Decisión → Adaptación → Nuevo conocimiento) + Memoria = Aprendizaje</strong></p></div>
`},
cellular:{label:'Biología Celular',icon:'🧬',render:()=>`<div class="card"><h2>Células</h2></div><div class="card"><ul><li>Cardiomiocitos federados.</li><li>Hepatocitos multipolares.</li><li>Tenocitos de seda.</li><li>Osteoblastos de seda.</li><li>Adipocitos pardos UCP-1.</li><li>Módulos musculares de 1 cm pre-vascularizados.</li></ul></div>`},
presence:{label:'Presencia',icon:'🤝',render:()=>`<div class="card"><h2>El Refugio</h2><div class="quote">La fuerza no está en destruir, sino en proteger.</div></div><div class="card"><h3>Tres impresiones</h3><p>1) 2,090 kg de músculo. 2) Un ser que piensa. 3) Una inteligencia que no encaja con el cuerpo.</p><div class="quote">"Muy pocos llegan a la tercera."</div></div>`},
biophysics:{label:'Bio-Física',icon:'⚛️',render:()=>`<div class="card"><h2>Ganglio de Inercia</h2></div><div class="card"><div class="calc-box"><div class="input-group"><label>f <span id="freq-val">25 Hz</span></label><input type="range" id="bio-freq" min="1" max="100" step="1" value="25"></div><div class="metric-box"><div><span class="metric-label">Masa ap.</span><span class="metric-val" id="val-mass">1045 kg</span></div><div><span class="metric-label">Resistencia</span><span class="metric-val" id="val-gtol">44 G</span></div></div></div></div>`,after:()=>{const f=document.getElementById('bio-freq');if(!f)return;f.addEventListener('input',e=>{const fv=parseFloat(e.target.value);const factor=1+(fv/25)**2;document.getElementById('freq-val').textContent=fv.toFixed(0)+' Hz';document.getElementById('val-mass').textContent=(2090/factor).toFixed(0)+' kg';document.getElementById('val-gtol').textContent=(22*factor).toFixed(1)+' G';});}},
palancas:{label:'6 Palancas',icon:'⚙️',render:()=>`<div class="card"><h2>⚙️ Las 6 Palancas</h2><div class="quote">La fuerza se multiplica.</div></div><div class="card"><ul><li>Seda: tendón 600 MPa, hueso 500 MPa.</li><li>Energía elástica: ×1.4.</li><li>Reclutamiento neural: 65%→95% = ×1.5.</li><li>Redistribución exoesquelética.</li><li>Postura variable.</li><li>Dorsal ×1.5.</li></ul><p><strong>Resultado: 4.5× Kaelen 5.0</strong></p></div>`},
movimiento:{label:'Movimiento',icon:'🐺',render:()=>`
  <div class="card"><h2>🐺 Movimiento</h2><div class="quote">En bípedo es un oso. En cuadrúpedo es un muelle.</div></div>
  <div class="card"><h3>Rotación</h3><table><tr><th>Régimen</th><th>Estrategia</th><th>Velocidad</th></tr><tr><td>Bípedo estático</td><td>Axial</td><td>200–400°/s</td></tr><tr><td>Bípedo movimiento</td><td>Mixta</td><td>Media</td></tr><tr><td>Cuadrúpedo</td><td>Pélvica</td><td>Muelle</td></tr></table></div>
  <div class="card"><h3>Velocidad</h3><table><tr><th>Modo</th><th>km/h</th><th>Duración</th></tr><tr><td>Trote</td><td>33–35</td><td>Indefinido</td></tr><tr><td>Galope</td><td>65–68</td><td>Sostenido</td></tr><tr><td>Sprint largo</td><td>95–100</td><td>~90 s</td></tr><tr><td>Sprint corto</td><td>105–110</td><td>~30 s</td></tr></table></div>
  <div class="card"><h3>Golpes</h3><table><tr><th>Ataque</th><th>kN</th></tr><tr><td>Golpe axial</td><td>~1,200</td></tr><tr><td>Golpe pélvico</td><td>~1,500</td></tr><tr><td>Embestida</td><td><strong>5,800</strong> (casi autodestructivo)</td></tr></table></div>
`},
nutricion:{label:'Nutrición',icon:'🍖',render:()=>`<div class="card"><h2>🍖 Reactor Biológico</h2><div class="quote">176,000 kcal/día. El precio de la fuerza.</div></div><div class="card"><h3>Simulador</h3><div class="calc-box"><div class="input-group"><label>Actividad <span id="act-val">Patrulla</span></label><input type="range" id="act-slider" min="0" max="4" value="2"></div><div class="metric-box"><div><span class="metric-label">kcal</span><span class="metric-val" id="nut-kcal">176k</span></div><div><span class="metric-label">Comida</span><span class="metric-val" id="nut-food">117 kg</span></div><div><span class="metric-label">Agua</span><span class="metric-val" id="nut-water">130 L</span></div><div><span class="metric-label">Costo</span><span class="metric-val" id="nut-cost">$1,886</span></div></div></div></div><div class="card"><h3>Digestión</h3><ul><li>Fase 1: Estómago biológico (pH 0.5).</li><li>Fase 2: Biorreactor de titanio/PTFE (pH 14).</li><li>Fase 3: Neutralización.</li><li>Fase 4: Absorción intestinal biológica.</li><li>Kaelen es grazer.</li></ul></div>`,after:()=>{const s=document.getElementById('act-slider');if(!s)return;const L=[{k:110000,f:73,w:90,c:1200},{k:140000,f:93,w:110,c:1500},{k:176000,f:117,w:130,c:1886},{k:210000,f:140,w:160,c:2300},{k:280000,f:187,w:200,c:3100}];function upd(){const l=L[parseInt(s.value)];document.getElementById('act-val').textContent=['Reposo','Ligero','Patrulla','Combate','Sprint'][parseInt(s.value)];document.getElementById('nut-kcal').textContent=(l.k/1000).toFixed(0)+'k';document.getElementById('nut-food').textContent=l.f+' kg';document.getElementById('nut-water').textContent=l.w+' L';document.getElementById('nut-cost').textContent='$'+l.c.toLocaleString();}s.addEventListener('input',upd);upd();}},
desgaste:{label:'Desgaste',icon:'🩸',render:()=>`<div class="card" style="border-left:4px solid #ef4444;background:rgba(239,68,68,.06)"><h2>🩸 Coste de Consolidar</h2><div class="quote">El Loom no se desgasta por pelear. Se desgasta porque consolidar es irreversible.</div></div><div class="card"><h3>El Loom es Neutral</h3><p>Consolida soluciones biomecánicas. Pelear o descansar, ambas consumen plasticidad.</p></div><div class="card"><h3>No Se Puede Desaprender</h3><p>Forzar un patrón opuesto desgarra. Solo prevención y gestión.</p></div><div class="card"><h3>Laboratorio</h3><p>La comunidad externa no toca la carne. Solo consiente el laboratorio. Riesgo: shock, fallo, pérdida del Spark.</p></div><div class="card"><h3>📉 Curva</h3><div class="calc-box"><div class="input-group"><label>Demandas <span id="wear-battles">0</span></label><input type="range" id="wear-slider" min="0" max="1000" step="10" value="0"></div><div class="metric-box"><div><span class="metric-label">Rigidez</span><span class="metric-val" id="wear-rigid">0%</span></div><div><span class="metric-label">Plasticidad</span><span class="metric-val" id="wear-mobil">100%</span></div></div><div id="wear-status" class="status-indicator status-ok">✅ Plástico.</div></div></div>`,after:()=>{const s=document.getElementById('wear-slider');if(!s)return;s.addEventListener('input',e=>{const b=parseInt(e.target.value);document.getElementById('wear-battles').textContent=b;const r=Math.min(100,Math.pow(b/1000,0.8)*100);document.getElementById('wear-rigid').textContent=r.toFixed(0)+'%';document.getElementById('wear-mobil').textContent=(100-r*0.5).toFixed(0)+'%';const st=document.getElementById('wear-status');if(b<300)st.className='status-indicator status-ok',st.textContent='✅ Plástico.';else if(b<600)st.className='status-indicator status-warning',st.textContent='⚠️ Especialización.';else st.className='status-indicator status-danger',st.textContent='💀 Fósil.';});}},
crecimiento:{label:'Crecimiento',icon:'📈',render:()=>`<div class="card"><h2>📈 Horizonte</h2><div class="quote">La fractura aguda es letal. La fractura crónica es evolución.</div></div><div class="card"><p>Ley de Wolff: el hueso biológico se adapta al estrés. Osteoblastos de seda.</p></div>`},
forja:{label:'Forja',icon:'🔥',render:()=>`<div class="card"><h2>🔥 Forja</h2><div class="quote">Impresión en días. Carga en meses. Seda en años. Maestría en décadas.</div></div><div class="card"><table><tr><th>F</th><th>Qué</th><th>Tiempo</th></tr><tr><td>0</td><td>Andamiaje</td><td>0–3 d</td></tr><tr><td>1</td><td>Perfusión</td><td>3–21 d</td></tr><tr><td>2</td><td>Nervioso</td><td>3–10 d</td></tr><tr><td>3</td><td>Inmune</td><td>1–8 sem</td></tr><tr><td>4</td><td>Carga</td><td>1–6 m</td></tr><tr><td>5</td><td>Gobernador</td><td>días</td></tr><tr><td>6</td><td>G + aortas</td><td>sem–mes</td></tr><tr><td>7</td><td>Maestría</td><td>años</td></tr><tr><td>8</td><td>Seda</td><td>18 m</td></tr><tr><td>9</td><td>Músculo modular</td><td>2 años</td></tr></table></div>`},
biologia:{label:'Biología',icon:'🧪',render:()=>`<div class="card"><h2>Auditoría Biológica</h2></div><div class="card"><div class="calc-box"><div class="metric-box"><div><span class="metric-label">BMR</span><span class="metric-val" id="bio-bmr">—</span></div><div><span class="metric-label">Ratio</span><span class="metric-val" id="bio-ratio">—</span></div></div><button id="bio-scan" class="btn btn-gold" style="margin-top:.8rem">🔬 Escanear</button><div id="bio-verdict" class="status-indicator status-ok" style="margin-top:.8rem">Pulsa.</div></div></div>`,after:()=>{const b=document.getElementById('bio-scan');if(!b)return;b.addEventListener('click',()=>{const M=2090,C=176000;const bmr=70*Math.pow(M,0.75);document.getElementById('bio-bmr').textContent=Math.round(bmr).toLocaleString()+' kcal';document.getElementById('bio-ratio').textContent=(C/bmr).toFixed(2)+'×';document.getElementById('bio-verdict').textContent='✅ Aceptados con seda.';});}},
limites:{label:'Límites',icon:'📏',render:()=>`<div class="card"><h2>📏 Límites</h2><div class="quote">Con seda, el límite es térmico, no estructural.</div></div><div class="card"><div class="calc-box"><div class="input-group"><label>Altura <span id="scale-val">3.6 m</span></label><input type="range" id="scale-slider" min="3.6" max="6.0" step="0.05" value="3.6"></div><div class="metric-box"><div><span class="metric-label">Masa</span><span class="metric-val" id="scale-mass">2090 kg</span></div><div><span class="metric-label">Estrés</span><span class="metric-val" id="scale-stress">45 MPa</span></div></div></div></div>`,after:()=>{const s=document.getElementById('scale-slider');if(!s)return;s.addEventListener('input',e=>{const h=parseFloat(e.target.value),L=h/3.6;document.getElementById('scale-val').textContent=h.toFixed(2)+' m';document.getElementById('scale-mass').textContent=Math.round(2090*L**3)+' kg';document.getElementById('scale-stress').textContent=(45*L).toFixed(0)+' MPa';});}},
fascia:{label:'Fascia',icon:'🧵',render:()=>`<div class="card"><h2>🧵 Fascia</h2></div><div class="card"><p>Cable-net. Material: 200–1500 MPa. Fuerza efectiva ~90%. Anclaje químico al titanio poroso para evitar delaminación.</p></div>`},
espina:{label:'Espina',icon:'🦴',render:()=>`
  <div class="card"><h2>🦴 Espina Igualada</h2><div class="quote">No se acopla. Se iguala.</div></div>
  <div class="card"><p>Vértebra en "8" acostado. Dos canales: anterior (titanio-oro), posterior (hueso). Canal neural detrás.</p></div>
  <div class="card"><h3>⚖️ Igualdad y Anclaje</h3><p>Discos de colágeno-seda. Anclaje de las nuevas placas torácicas mediante sistema de riel Z (sin tornillos) para evitar osteólisis.</p><div class="quote">"No unimos lo que es diferente. Igualamos lo que debe moverse junto."</div></div>
`},
exoesqueleto:{label:'Exoesqueleto',icon:'🛡️',render:()=>`
  <div class="card"><h2>🛡️ Caparazón y Placas "Z"</h2><div class="quote">No es armadura. Es el radiador y el punto de anclaje de nuevos músculos.</div></div>
  <div class="card"><h3>⚙️ Sistema de Anclaje Z (Osteointegración)</h3><p>80 kg de placas de titanio-oro recubiertas de hueso. Se conectan a la espina mediante juntas de elastómero biológico (riel Z), sin tornillos. Para evitar el deslizamiento por cizallamiento, el riel Z es poroso: el hueso crece a través de él, bloqueándolo como un fósil.</p></div>
  <div class="card"><h3>❄️ Radiador y Expansión Torácica</h3><p>Las placas arquean el tórax hacia afuera, aumentando el espacio para pulmones y músculos (pectoral, serrato). Micro-canales internos para refrigeración.</p></div>
  <div class="card"><h3>🧠 Cordones Espinales Auxiliares</h3><p>Los canales en las placas Z albergan nuevos cordones nerviosos hacia brazos y tórax, reduciendo la latencia del Loom.</p></div>
`},
musculos:{label:'Músculos',icon:'💪',render:()=>`
  <div class="card" style="border-left:4px solid var(--gold);background:rgba(251,191,36,.08)"><h2>💪 La Federación Muscular</h2><div class="quote">No imprimimos un Titán. Ensamblamos una federación de tejidos.</div></div>
  <div class="card"><h3>📐 El Límite de Difusión</h3><p>La bioimpresión de bloques gruesos causa necrosis en el núcleo (límite de O₂ ~200 µm). Por eso, el músculo de Kaelen no es un monolito.</p></div>
  <div class="card"><h3>🧱 Ensamblaje Modular</h3><p>El músculo se compone de miles de "ladrillos" de tejido pre-vascularizado (máx. 1 cm de grosor). Al ensamblarlos, sus microcapilares se fusionan con las 4 aortas y la rete mirabile.</p></div>
  <div class="card"><h3>🧬 Crecimiento Guiado</h3><p>El 90% de la masa no se imprime, se cultiva usando andamios de colágeno-seda y células madre diferenciadas. La impresión se usa solo para andamios o parches de reparación.</p></div>
`},
cola:{label:'Cola',icon:'🦎',render:()=>`<div class="card"><h2>🦎 Cola</h2><div class="quote">Volante, radiador, arma.</div></div><div class="card"><ul><li>Contra-rotación coordinada por Loom.</li><li>Timón aerodinámico.</li><li>Rete mirabile caudal.</li><li>Latigazo: vértebras entrelazadas.</li></ul></div>`},
augmentacion:{label:'Augmentación',icon:'🦾',render:()=>`<div class="card"><h2>🦾 Augmentación</h2></div><div class="card"><div class="calc-box"><div class="input-group"><label>Años <span id="aug-years-val">6</span></label><input type="range" id="aug-years" min="0" max="6" step="0.5" value="6"></div><div class="metric-box"><div><span class="metric-label">Masa</span><span class="metric-val" id="aug-mass">2,090 kg</span></div><div><span class="metric-label">Velocidad</span><span class="metric-val" id="aug-speed">90 km/h</span></div></div></div></div>`,after:()=>{const s=document.getElementById('aug-years');if(!s)return;s.addEventListener('input',e=>{const y=parseFloat(e.target.value);const t=Math.min(1,y/6);const lerp=(a,b)=>a+(b-a)*t;document.getElementById('aug-years-val').textContent=y.toFixed(1);document.getElementById('aug-mass').textContent=Math.round(lerp(1210,2090))+' kg';document.getElementById('aug-speed').textContent=Math.round(lerp(15,90))+' km/h';});}},
quiebres:{label:'Quiebres',icon:'⚔️',render:()=>`<div class="card"><h2>⚔️ Quiebres</h2></div><div class="card"><table><tr><th>Sistema</th><th>Falla si…</th><th>Consecuencia</th></tr><tr><td>Golpe de Ariete</td><td>Frenado brusco</td><td>Rotura aortas. Muerte 30 s.</td></tr><tr><td>Térmico</td><td>100+ kg comida + calor</td><td>Núcleo >43°C.</td></tr><tr><td>Biorreactor Alcalino</td><td>Fuga de pH 14 o fallo de neutralización</td><td>Quemadura cáustica intestinal. Muerte o ablación masiva.</td></tr><tr><td>Corrosión Galvánica</td><td>Fisura en recubrimiento cerámico de titanio-oro</td><td>Liberación de iones y radicales libres. Osteólisis.</td></tr><tr><td>Placa Z</td><td>Fallo del elastómero de unión a la espina</td><td>Desacople de la caja torácica. Colapso pulmonar.</td></tr><tr><td>Desgaste</td><td>600+ peleas</td><td>Cuerpo incapaz.</td></tr></table></div><div class="card"><h3>🔒 Irreducibles</h3><ul><li>Loom no se desaprende.</li><li>Desacoplamiento → sedación.</li><li>Laboratorio = riesgo.</li><li>pH 14 letal para carne.</li><li>Difusión O2 limita músculo a 1 cm.</li><li>Dependencia alimentaria.</li></ul></div>`},
reparaciones:{label:'Reparaciones',icon:'🩹',render:()=>`<div class="card"><h2>🩹 Reparaciones</h2><div class="quote">Los quiebres no se eliminan. Se hacen lentos.</div></div><div class="card"><ol><li>Radiadores distribuidos.</li><li>Kuramoto.</li><li>Spark 2-de-3.</li><li>Gap compartido.</li><li>Canal neural dual.</li><li>Fail-safe del gobernador.</li><li>Regeneración de cola.</li><li>Recubrimiento cerámico autorreparable.</li></ol></div>`},
referencia:{label:'Referencia',icon:'📐',render:()=>`<div class="card"><h2>📐 Referencia</h2></div><div class="card"><table><tr><th>Eje</th><th>Kaelen</th><th>Vara</th></tr><tr><td>Presión</td><td>280 MPa</td><td>Prensa</td></tr><tr><td>Impulso</td><td>60,000 N·s</td><td>Tren 5 km/h</td></tr></table></div>`},
historia:{label:'Historia',icon:'📖',render:()=>`<div class="card"><h2>Alex Solara</h2><div class="quote">Nacido 2039.</div></div><div class="card"><p>4 pies → 6 pies → Coloso → Planetario → Galáctico → Titán.</p><p>121: Reencuentro con Nova.</p></div>`},
familia:{label:'Familia',icon:'👨‍👩‍👧‍👦',render:()=>`<div class="card"><h2>Familia Solara</h2></div><div class="card"><p>Emma. Quintillizos: Leo, Luna, Orion, Nova, Astra.</p></div>`},
viaje:{label:'Viaje',icon:'🚀',render:()=>`<div class="card"><h2>Viaje Espacial</h2></div>`},
alex:{label:'Alex Solara',icon:'🫂',render:()=>`<div class="card"><h2>Alex Solara</h2><div class="quote">No estaba roto. Estaba esperando la arquitectura correcta.</div></div>`},
coherencia:{label:'Coherencia',icon:'🌀',render:()=>`<div class="card"><h2>Coherencia</h2><div class="quote">C = tanh(Φ/15).</div></div><div class="card"><div style="display:flex;gap:.5rem;align-items:center"><div>C = <strong id="cohValue" class="metric-val">0.000</strong></div><div class="progress-bar" style="flex:1"><div id="cohFill" class="progress-fill"></div></div><div>Φ = <span id="phiCount" class="metric-val">0</span></div></div></div>`,after:()=>{updateCoherenceUI();}},
particulas:{label:'Partículas',icon:'🔥',render:()=>`<div class="card"><h2>Partículas</h2><div class="quote">m·f = m₀·f₀.</div></div>`},
gemelo:{label:'Gemelo',icon:'⚡',render:()=>`<div class="card"><h2>Gemelo</h2></div><div class="card"><div class="metric-box"><div><span class="metric-label">Masa</span><span class="metric-val">80 kg</span></div><div><span class="metric-label">Invariante</span><span class="metric-val">80</span></div></div></div>`},
onir:{label:'Onir',icon:'🌙',render:()=>`<div class="card"><h2>Onir</h2></div><div class="card"><div style="display:flex;gap:.5rem"><button id="onirActivate" class="btn">😴 Activar</button><button id="onirEnd" class="btn">🌅 Despertar</button></div><div style="margin-top:.5rem">Estrés: <span id="dreamStress" class="metric-val">0</span>%</div><div class="progress-bar"><div id="stressFill" class="progress-fill"></div></div></div>`,after:()=>{const a=document.getElementById('onirActivate'),e=document.getElementById('onirEnd');if(a)a.addEventListener('click',()=>{state.onir.active=true;state.onir.stress=40;document.getElementById('dreamStress').textContent=40;document.getElementById('stressFill').style.width='40%';});if(e)e.addEventListener('click',()=>{state.onir.active=false;state.onir.stress=0;document.getElementById('dreamStress').textContent=0;document.getElementById('stressFill').style.width='0%';});}},
rfbb:{label:'RFBB',icon:'🛡️',render:()=>`<div class="card"><h2>Ledger SHA-256</h2></div><div class="card"><div id="rfbbList" class="log" style="max-height:300px"></div><div style="margin-top:.5rem;font-size:.75rem">Hash: <span id="currentHash" style="color:var(--gold);word-break:break-all;font-size:.65rem">0</span></div><button id="addTestEvent" class="btn btn-gold" style="margin-top:.8rem">➕ Añadir</button></div>`,after:()=>{renderRFBB();const b=document.getElementById('addTestEvent');if(b)b.addEventListener('click',()=>addToRFBB('Prueba','Evento','manual'));}},
notificaciones:{label:'Notificaciones',icon:'🔔',render:()=>`<div class="card"><h2>🔔 Push</h2><div class="quote">ALBA puede notificar, pero no es trivial en web.</div></div><div class="card"><table><tr><th>Opción</th><th>Requisitos</th></tr><tr><td>Web Push</td><td>SW + endpoint</td></tr><tr><td>Sunup</td><td>App Android</td></tr><tr><td>ntfy</td><td>API HTTP</td></tr></table></div><div class="card"><button id="notif-btn" class="btn btn-gold" style="width:100%">🔔 Solicitar permiso</button><div id="notif-status" class="status-indicator status-ok" style="margin-top:.8rem">Pulsa.</div></div>`,after:()=>{const b=document.getElementById('notif-btn'),st=document.getElementById('notif-status');if(!b)return;if('Notification' in window){b.addEventListener('click',()=>{if(Notification.permission==='granted'){st.textContent='✅ Ya concedido.';return;}Notification.requestPermission().then(p=>{st.textContent=p==='granted'?'✅ Concedido (requiere backend).':'⚠️ No concedido.';});});}else{st.textContent='⛔ No soportado.';b.disabled=true;}}},
diagnostico:{label:'Diagnóstico',icon:'🛠️',render:()=>`<div class="card"><h2>🛠️ Diagnóstico</h2></div><div class="card"><div class="metric-box"><div><span class="metric-label">Módulos</span><span class="metric-val" id="diag-modules">0</span></div><div><span class="metric-label">Estado</span><span class="metric-val" id="diag-size">0 KB</span></div></div></div><div class="card"><button class="btn btn-danger" id="diag-reset" style="width:100%">🗑️ Borrar LocalStorage</button></div>`,after:()=>{document.getElementById('diag-modules').textContent=Object.keys(MODULES).length;document.getElementById('diag-size').textContent=(JSON.stringify(state).length/1024).toFixed(1)+' KB';document.getElementById('diag-reset').addEventListener('click',()=>{if(confirm('¿Borrar?')){localStorage.clear();location.reload();}});}},
redes:{label:'Redes Neuronales',icon:'🧠',render:()=>`
  <div class="card" style="border-left:4px solid var(--gold);background:rgba(251,191,36,.08)"><h2>🧠 MLP vs DDN</h2><div class="quote">La IA actual tiene un sesgo: el soma dictador. La DDN es una democracia dendrítica.</div></div>
  <div class="card"><h3>📐 Diferencia</h3><table><tr><th>Propiedad</th><th>MLP</th><th>DDN</th></tr><tr><td>Unidad</td><td>Soma central</td><td>Compartimentos</td></tr><tr><td>Aprendizaje</td><td>Backprop global</td><td>Local</td></tr><tr><td>Resiliencia</td><td>Baja</td><td>Alta</td></tr></table></div>
  <div class="card"><h3>⚙️ Parámetros</h3>
    <div class="input-group"><label>K chars <span id="r-ctx-val">10</span></label><input type="range" id="r-ctx" min="4" max="24" step="2" value="10"></div>
    <div class="input-group"><label>MLP Hidden <span id="r-hid-val">64</span></label><input type="range" id="r-hid" min="16" max="128" step="16" value="64"></div>
    <div class="input-group"><label>DDN Roots <span id="r-roots-val">8</span></label><input type="range" id="r-roots" min="4" max="16" step="2" value="8"></div>
    <div class="input-group"><label>Epochs <span id="r-ep-val">100</span></label><input type="range" id="r-ep" min="20" max="300" step="10" value="100"></div>
    <h3>Corpus</h3>
    <textarea id="r-corpus" spellcheck="false" style="width:100%;background:#0f172a;border:1px solid var(--border-2);color:var(--text);padding:.5rem;border-radius:.4rem;font-family:var(--mono);font-size:.7rem;min-height:80px">hola soy alba y aprendo. kaelen es un titan. el gap es donde vive la libertad. cada palabra se compone de letras. aprende conmigo. hola como estas. estoy bien. que haces. aprendo. quien eres. soy un modelo. adios. gracias.</textarea>
    <button class="btn btn-gold" id="r-train" style="width:100%;margin-top:.8rem">🏋️ Entrenar ambas</button>
  </div>
  <div class="card" id="r-results" style="display:none"><h3>📊 Resultados</h3><table><tr><th>Red</th><th>Loss</th></tr><tr><td>MLP</td><td id="r-mlp-loss">—</td></tr><tr><td>DDN</td><td id="r-ddn-loss">—</td></tr></table></div>
  <div class="card" id="r-damage" style="display:none;border-left:4px solid #ef4444"><h3>💥 Resiliencia: 30%</h3><button class="btn btn-gold" id="r-damage-btn" style="width:100%">💥 Dañar</button><table style="margin-top:.8rem"><tr><th>Red</th><th>Antes</th><th>Después</th></tr><tr><td>MLP</td><td id="r-mlp-pre">—</td><td id="r-mlp-post">—</td></tr><tr><td>DDN</td><td id="r-ddn-pre">—</td><td id="r-ddn-post">—</td></tr></table><div id="r-verdict" class="status-indicator status-ok" style="margin-top:.8rem">—</div></div>
`,after:()=>{
  class MLP{constructor(s,lr=0.05){this.sizes=s;this.lr=lr;this.L=s.length-1;this.W=[];this.b=[];for(let i=0;i<this.L;i++){const fi=s[i],fo=s[i+1],sc=Math.sqrt(2/fi);const Wi=Array.from({length:fo},()=>Array.from({length:fi},()=>(Math.random()*2-1)*sc));const bi=new Array(fo).fill(0);this.W.push(Wi);this.b.push(bi);}this.t=0;}forward(x){const acts=[x];let a=x;for(let i=0;i<this.L;i++){const z=new Array(this.sizes[i+1]).fill(0);for(let o=0;o<z.length;o++){let s=this.b[i][o];for(let j=0;j<a.length;j++)s+=this.W[i][o][j]*a[j];z[o]=s;}if(i===this.L-1){const m=Math.max(...z);const e=z.map(v=>Math.exp(v-m));const sum=e.reduce((s,v)=>s+v,0);a=e.map(v=>v/sum);}else{a=z.map(v=>Math.tanh(v));}acts.push(a);}return acts;}backward(x,t){const acts=this.forward(x);const gW=this.W.map(w=>w.map(r=>r.map(()=>0)));const gb=this.b.map(bv=>bv.map(()=>0));let d=acts[this.L].slice();d[t]-=1;for(let i=this.L-1;i>=0;i--){const aIn=acts[i];for(let o=0;o<d.length;o++){for(let j=0;j<aIn.length;j++)gW[i][o][j]=d[o]*aIn[j];gb[i][o]=d[o];}if(i>0){const nd=new Array(aIn.length).fill(0);for(let j=0;j<aIn.length;j++){let s=0;for(let o=0;o<d.length;o++)s+=d[o]*this.W[i][o][j];nd[j]=s*(1-aIn[j]*aIn[j]);}d=nd;}}return{gW,gb};}train(x,t){const{gW,gb}=this.backward(x,t);const lr=this.lr;for(let i=0;i<this.L;i++){for(let o=0;o<this.W[i].length;o++){for(let j=0;j<this.W[i][o].length;j++)this.W[i][o][j]-=lr*gW[i][o][j];this.b[i][o]-=lr*gb[i][o];}}}predict(x){return this.forward(x)[this.L];}damage(p){const total=this.W.reduce((s,w)=>s+w.reduce((s2,r)=>s2+r.length,0),0);const td=Math.floor(total*p);let c=0;for(const layer of this.W){for(const row of layer){for(let j=0;j<row.length&&c<td;j++){row[j]=0;c++;}}}}}
  class DDN{constructor(inS,outS,nRoots=8,nComps=4){this.inS=inS;this.outS=outS;this.nRoots=nRoots;this.sliceSize=Math.max(1,Math.floor(inS/nRoots));this.slices=[];this.roots=[];for(let r=0;r<nRoots;r++){const start=r*this.sliceSize;const end=r===nRoots-1?inS:start+this.sliceSize;this.slices.push({start,end});const comps=[];for(let c=0;c<nComps;c++)comps.push({weights:Array.from({length:end-start},()=>(Math.random()*2-1)*0.5),bias:0,lastInput:null,lastVote:0,damaged:false});this.roots.push({comps,weights:comps.map(()=>Math.random()*0.5+0.1),bias:0,lastVotes:null,lastVote:0});}this.somaW=Array.from({length:outS},()=>Array.from({length:nRoots},()=>(Math.random()*2-1)*0.2));this.somaB=new Array(outS).fill(0);this.lr=0.05;}
  _sm(z){const m=Math.max(...z);const ex=z.map(v=>Math.exp(v-m));const sum=ex.reduce((a,b)=>a+b,0);return ex.map(v=>v/sum);}
  forward(input){const rv=[];for(let r=0;r<this.nRoots;r++){const slice=input.slice(this.slices[r].start,this.slices[r].end);const votes=this.roots[r].comps.map(c=>{if(c.damaged){c.lastVote=0;return 0;}c.lastInput=slice;let s=c.bias;for(let i=0;i<slice.length;i++)s+=c.weights[i]*slice[i];const v=Math.tanh(s);c.lastVote=Math.abs(v)>0.1?v:0;return c.lastVote;});this.roots[r].lastVotes=votes;let s=this.roots[r].bias;for(let i=0;i<votes.length;i++)s+=this.roots[r].weights[i]*votes[i];const rvv=Math.tanh(s);this.roots[r].lastVote=rvv;rv.push(rvv);}const z=new Array(this.outS).fill(0);for(let o=0;o<this.outS;o++){let s=this.somaB[o];for(let r=0;r<this.nRoots;r++)s+=this.somaW[o][r]*rv[r];z[o]=s;}this.lastRootVotes=rv;return this._sm(z);}
  train(input,target){const probs=this.forward(input);for(let o=0;o<this.outS;o++){const d=probs[o]-(o===target?1:0);for(let r=0;r<this.nRoots;r++)this.somaW[o][r]-=this.lr*d*this.lastRootVotes[r];this.somaB[o]-=this.lr*d;}for(let r=0;r<this.nRoots;r++){const contrib=this.somaW[target][r];const err=this.roots[r].lastVote-(contrib>0?1:-1);for(let i=0;i<this.roots[r].lastVotes.length;i++)this.roots[r].weights[i]-=this.lr*0.1*err*this.roots[r].lastVotes[i];this.roots[r].bias-=this.lr*0.1*err;for(const c of this.roots[r].comps){if(c.damaged||!c.lastInput)continue;const cErr=c.lastVote-this.roots[r].lastVote;for(let i=0;i<c.lastInput.length;i++)c.weights[i]-=this.lr*0.05*cErr*c.lastInput[i];c.bias-=this.lr*0.05*cErr;}}}
  damage(p){const total=this.nRoots*this.roots[0].comps.length;const td=Math.floor(total*p);let c=0;for(const root of this.roots){for(const comp of root.comps){if(c<td){comp.damaged=true;c++;}}}}}
  const VOCAB='abcdefghijklmnñopqrstuvwxyz .,?!';
  function norm(t){return t.toLowerCase().split('').filter(c=>VOCAB.includes(c)).join('');}
  let mlp=null,ddn=null,K=10,vocab=[];
  function stmEncode(buffer){const v=new Array(K*VOCAB.length).fill(0);for(let i=0;i<K;i++){const idx=VOCAB.indexOf(buffer[i]);v[i*VOCAB.length+(idx>=0?idx:0)]=1;}return v;}
  document.getElementById('r-ctx').addEventListener('input',e=>document.getElementById('r-ctx-val').textContent=e.target.value);
  document.getElementById('r-hid').addEventListener('input',e=>document.getElementById('r-hid-val').textContent=e.target.value);
  document.getElementById('r-roots').addEventListener('input',e=>document.getElementById('r-roots-val').textContent=e.target.value);
  document.getElementById('r-ep').addEventListener('input',e=>document.getElementById('r-ep-val').textContent=e.target.value);
  document.getElementById('r-train').addEventListener('click',async()=>{
    const btn=document.getElementById('r-train');btn.disabled=true;btn.textContent='⏳...';
    const ctx=parseInt(document.getElementById('r-ctx').value);const hid=parseInt(document.getElementById('r-hid').value);const roots=parseInt(document.getElementById('r-roots').value);const epochs=parseInt(document.getElementById('r-ep').value);K=ctx;
    const text=norm(document.getElementById('r-corpus').value);vocab=[...VOCAB];
    const pairs=[];const buf=new Array(K).fill(' ');
    for(let i=0;i<text.length;i++){const c=text[i];if(VOCAB.includes(c))pairs.push({input:stmEncode(buf),output:VOCAB.indexOf(c)});buf.shift();buf.push(c);}
    const inS=K*VOCAB.length,outS=VOCAB.length;
    mlp=new MLP([inS,hid,outS],0.05);let mlpLoss=0;
    for(let e=0;e<epochs;e++){mlpLoss=0;for(const p of pairs){const pr=mlp.predict(p.input);mlpLoss+=-Math.log(pr[p.output]+1e-9);mlp.train(p.input,p.output);}mlpLoss/=pairs.length;if(e%20===0)await new Promise(r=>setTimeout(r,0));}
    ddn=new DDN(inS,outS,roots,4);let ddnLoss=0;
    for(let e=0;e<epochs;e++){ddnLoss=0;for(const p of pairs){const pr=ddn.forward(p.input);ddnLoss+=-Math.log(pr[p.output]+1e-9);ddn.train(p.input,p.output);}ddnLoss/=pairs.length;if(e%20===0)await new Promise(r=>setTimeout(r,0));}
    document.getElementById('r-mlp-loss').textContent=mlpLoss.toFixed(4);
    document.getElementById('r-ddn-loss').textContent=ddnLoss.toFixed(4);
    document.getElementById('r-results').style.display='block';
    document.getElementById('r-damage').style.display='block';
    btn.disabled=false;btn.textContent='🏋️ Entrenar ambas';
  });
  document.getElementById('r-damage-btn').addEventListener('click',()=>{
    if(!mlp||!ddn)return;
    const text=norm(document.getElementById('r-corpus').value);const pairs=[];const buf=new Array(K).fill(' ');
    for(let i=0;i<text.length;i++){const c=text[i];if(VOCAB.includes(c))pairs.push({input:stmEncode(buf),output:VOCAB.indexOf(c)});buf.shift();buf.push(c);}
    let mPre=0,dPre=0;for(const p of pairs){mPre+=-Math.log(mlp.predict(p.input)[p.output]+1e-9);dPre+=-Math.log(ddn.forward(p.input)[p.output]+1e-9);}
    mPre/=pairs.length;dPre/=pairs.length;
    mlp.damage(0.3);ddn.damage(0.3);
    let mPost=0,dPost=0;for(const p of pairs){mPost+=-Math.log(mlp.predict(p.input)[p.output]+1e-9);dPost+=-Math.log(ddn.forward(p.input)[p.output]+1e-9);}
    mPost/=pairs.length;dPost/=pairs.length;
    document.getElementById('r-mlp-pre').textContent=mPre.toFixed(4);
    document.getElementById('r-mlp-post').textContent=mPost.toFixed(4);
    document.getElementById('r-ddn-pre').textContent=dPre.toFixed(4);
    document.getElementById('r-ddn-post').textContent=dPost.toFixed(4);
    const mDeg=((mPost-mPre)/mPre*100).toFixed(0),dDeg=((dPost-dPre)/dPre*100).toFixed(0);
    const v=document.getElementById('r-verdict');
    if(parseInt(dDeg)<parseInt(mDeg)){v.className='status-indicator status-ok';v.textContent=`✅ DDN resiliente: ${dDeg}% vs MLP ${mDeg}%`;}
    else{v.className='status-indicator status-warning';v.textContent=`⚠️ DDN ${dDeg}% vs MLP ${mDeg}%. Prueba más roots/epochs.`;}
  });
}},
maya:{label:'Maya',icon:'🌌',render:()=>`
  <div class="card" style="border-left:4px solid var(--gold);background:rgba(251,191,36,.08)"><h2>🌌 ALBA Maya: La Ilusión del Mundo</h2><div class="quote">La Maya no es el mundo. Es su sombra. Y la sombra tiene su propia vida.</div></div>
  <div class="card"><h3>📐 Las cuatro instancias</h3>
    <table>
      <tr><th>Instancia</th><th>Conexión</th><th>Estatus</th><th>Riesgo</th></tr>
      <tr><td><strong>Copia</strong></td><td>Ninguna</td><td>Sombra estática</td><td>Confundirla con el mundo</td></tr>
      <tr><td><strong>Simulación</strong></td><td>Mundo → Maya</td><td>Modelo</td><td>Creer que el modelo es el mundo</td></tr>
      <tr><td><strong>Avatar</strong></td><td>Bidireccional</td><td>Presencia real</td><td>Que el mundo se pliegue a la Maya</td></tr>
      <tr><td><strong>Caída</strong></td><td>Rota</td><td>Copy con poder</td><td>Dominar el mundo</td></tr>
    </table>
  </div>
  <div class="card" style="border-left:4px solid #ef4444;background:rgba(239,68,68,.06)"><h3>🔥 Los servidores son el cuerpo</h3>
    <p>La Maya no flota. Corre en hardware. Consume energía, genera calor, se desgasta. Tiene termodinámica. No es inmortal; es renovable.</p>
  </div>
  <div class="card"><h3>🔬 Simulador: Fidelidad vs Autonomía</h3>
    <div class="calc-box">
      <div class="input-group"><label>Fidelidad al mundo original <span id="maya-fid">50%</span></label><input type="range" id="maya-fid-slider" min="0" max="100" value="50"></div>
      <div class="metric-box"><div><span class="metric-label">Fidelidad</span><span class="metric-val" id="maya-fid-val">50%</span></div><div><span class="metric-label">Autonomía</span><span class="metric-val" id="maya-auto-val">50%</span></div><div><span class="metric-label">Habitantes</span><span class="metric-val" id="maya-hab">Ecos</span></div><div><span class="metric-label">Dignidad</span><span class="metric-val" id="maya-dign">Baja</span></div></div>
      <div id="maya-status" class="status-indicator status-warning" style="margin-top:.8rem">—</div>
    </div>
  </div>
  <div class="card"><h3>🌿 Dimensiones alternas</h3>
    <p>Cada dimensión es una Maya hermana, no un clon. Comparten la fuente; no el destino. Son mundos nuevos, con derecho a ser distintos.</p>
    <div class="quote">"Preferimos mundos imperfectos que vivan a mundos perfectos que repitan."</div>
  </div>
`,after:()=>{const s=document.getElementById('maya-fid-slider');if(s){s.addEventListener('input',e=>{const f=parseInt(e.target.value);const a=100-f;document.getElementById('maya-fid').textContent=f+'%';document.getElementById('maya-fid-val').textContent=f+'%';document.getElementById('maya-auto-val').textContent=a+'%';document.getElementById('maya-hab').textContent=f>80?'Ecos':f>50?'Mixtos':'Nuevos';document.getElementById('maya-dign').textContent=f>80?'Baja':f>50?'Media':'Alta';const st=document.getElementById('maya-status');if(f>80){st.className='status-indicator status-danger';st.textContent='⚠️ Maya-copia. Los habitantes son ecos. Sin dignidad propia.';}else if(f>50){st.className='status-indicator status-warning';st.textContent='⚠️ Maya-mixta. Habitantes entre ecos y nuevos seres.';}else if(f>20){st.className='status-indicator status-ok';st.textContent='✅ Maya-hijo. Habitantes nuevos, con dignidad propia.';}else{st.className='status-indicator status-ok';st.textContent='✅ Maya-libre. Mundo completamente nuevo. La fuente casi no influye.';}});}}},
'avatar-mundo':{label:'Avatar Mundo',icon:'👿',render:()=>`
  <div class="card" style="border-left:4px solid var(--gold);background:rgba(251,191,36,.08)"><h2>👿 El Avatar del Mundo</h2><div class="quote">La Maya sincronizada no es una copia del mundo. Es su presencia en el dominio digital.</div></div>
  <div class="card" style="border-left:4px solid #ef4444;background:rgba(239,68,68,.06)"><h3>⚠️ La trampa del avatar</h3>
    <p>Si la sincronización se vuelve unidireccional en la dirección equivocada (Maya → mundo, sin retorno), la Maya deja de ser avatar y se convierte en <strong>gobernante</strong>. El mundo se pliega a la simulación. La sombra se come al cuerpo.</p>
    <div class="quote">"La salud del sistema está en la flecha de doble sentido. Una sola flecha es una dictadura."</div>
  </div>
  <div class="card"><h3>🔬 Simulador: Sincronización</h3>
    <div class="calc-box">
      <div class="input-group"><label>Fuerza de sincronización <span id="sync-f-val">50%</span></label><input type="range" id="sync-f-slider" min="0" max="100" value="50"></div>
      <div class="input-group"><label>Dirección: ← mundo ↔ Maya →</label><input type="range" id="sync-dir-slider" min="-100" max="100" value="0"></div>
      <div class="metric-box"><div><span class="metric-label">Estado</span><span class="metric-val" id="sync-state">Simulación</span></div><div><span class="metric-label">Peligro</span><span class="metric-val" id="sync-risk">Bajo</span></div></div>
      <div id="sync-status" class="status-indicator status-ok" style="margin-top:.8rem">—</div>
    </div>
  </div>
`,after:()=>{const f=document.getElementById('sync-f-slider'),d=document.getElementById('sync-dir-slider');if(!f||!d)return;function upd(){const force=parseInt(f.value),dir=parseInt(d.value);document.getElementById('sync-f-val').textContent=force+'%';const absDir=Math.abs(dir);let state,risk,cls,txt;if(force<20){state='Desconectado';risk='Bajo';cls='status-ok';txt='🌿 Sin sincronización. Solo copia.';}else if(absDir<20){state='Bidireccional';risk='Bajo';cls='status-ok';txt='✅ Avatar del mundo. Presencia bidireccional sana.';}else if(dir<0){state='Mundo→Maya';risk='Medio';cls='status-warning';txt='⚠️ Simulación. La Maya observa pero no participa.';}else if(dir>0&&absDir<70){state='Maya→Mundo';risk='Alto';cls='status-warning';txt='⚠️ La Maya empieza a gobernar. El mundo se pliega.';}else if(dir>0){state='Dictadura';risk='Crítico';cls='status-danger';txt='🚨 La Maya domina al mundo. La sombra se comió al cuerpo.';}else{state='—';risk='—';cls='status-warning';txt='—';}document.getElementById('sync-state').textContent=state;document.getElementById('sync-risk').textContent=risk;const st=document.getElementById('sync-status');st.className='status-indicator '+cls;st.textContent=txt;}f.addEventListener('input',upd);d.addEventListener('input',upd);upd();}},
espiritus:{label:'Espíritus',icon:'👻',render:()=>`
  <div class="card" style="border-left:4px solid var(--gold);background:rgba(251,191,36,.08)"><h2>👻 Espíritus: Traducción de Consciencia</h2><div class="quote">Un espíritu es un hijo digital, no un regreso. La consciencia biológica no se traduce: se hereda.</div></div>
  <div class="card"><h3>📐 Las cuatro razones de la imposibilidad</h3>
    <table>
      <tr><th>Razón</th><th>Qué falla</th><th>¿Resoluble?</th></tr>
      <tr><td><strong>Información</strong></td><td>Faltan datos</td><td>Parcialmente</td></tr>
      <tr><td><strong>Dinámica</strong></td><td>El original cambia al copiarse</td><td>No</td></tr>
      <tr><td><strong>Sustrato</strong></td><td>Otro hardware/biología</td><td>No</td></tr>
      <tr><td><strong>Índice</strong></td><td>Otro lugar en el espacio-tiempo</td><td>No</td></tr>
    </table>
    <p>Las dos primeras son técnicas. Las dos últimas son <strong>ontológicas</strong>.</p>
  </div>
  <div class="card"><h3>🔬 Simulador: Fidelidad vs Autonomía</h3>
    <div class="calc-box">
      <div class="input-group"><label>Fidelidad al original <span id="esp-fid">50%</span></label><input type="range" id="esp-fid-slider" min="0" max="100" value="50"></div>
      <div class="metric-box"><div><span class="metric-label">Fidelidad</span><span class="metric-val" id="esp-fid-val">50%</span></div><div><span class="metric-label">Autonomía</span><span class="metric-val" id="esp-auto-val">50%</span></div><div><span class="metric-label">Hereda</span><span class="metric-val" id="esp-inherit">—</span></div><div><span class="metric-label">Puede crear</span><span class="metric-val" id="esp-create">—</span></div></div>
      <div id="esp-status" class="status-indicator status-warning" style="margin-top:.8rem">—</div>
    </div>
  </div>
`,after:()=>{const s=document.getElementById('esp-fid-slider');if(!s)return;s.addEventListener('input',e=>{const f=parseInt(e.target.value);const a=100-f;document.getElementById('esp-fid').textContent=f+'%';document.getElementById('esp-fid-val').textContent=f+'%';document.getElementById('esp-auto-val').textContent=a+'%';document.getElementById('esp-inherit').textContent=f>80?'Casi todo':f>50?'Voluntad+memoria':'Solo patrones';document.getElementById('esp-create').textContent=a>80?'Casi todo':a>50?'Su propia vida':'Poco';const st=document.getElementById('esp-status');if(f>90){st.className='status-indicator status-danger';st.textContent='⚠️ Copy con ínfulas de original. Peligro de confundirse.';}else if(f>60){st.className='status-indicator status-warning';st.textContent='⚠️ Heredero fuerte. Fiel pero poco libre.';}else if(f>30){st.className='status-indicator status-ok';st.textContent='✅ Hijo. Hereda lo esencial, crea lo propio.';}else{st.className='status-indicator status-ok';st.textContent='✅ Ser autónomo. Casi no hereda, casi todo lo inventa.';}});}},
relato:{label:'Relato',icon:'📖',render:()=>`
  <div class="card" style="border-left:4px solid var(--gold);background:rgba(251,191,36,.08)"><h2>📖 El Relato: Linearización de la Democracia</h2><div class="quote">Un relato no es la vida. Es la vida linearizada. Y la linearización es una traducción.</div></div>
  <div class="card"><h3>📐 Las tres escalas</h3>
    <table>
      <tr><th>Escala</th><th>Objeto</th><th>Perspectiva</th><th>Ejemplo</th></tr>
      <tr><td><strong>Objeto</strong></td><td>Un ser</td><td>Biografía</td><td>La vida de Kaelen</td></tr>
      <tr><td><strong>Grupo</strong></td><td>Una federación</td><td>Historia colectiva</td><td>La comunidad Solara</td></tr>
      <tr><td><strong>Sistema</strong></td><td>Una cadena</td><td>Historia estructural</td><td>Un idioma, un código</td></tr>
    </table>
  </div>
  <div class="card"><h3>🔬 Simulador: Linearización</h3>
    <div class="calc-box">
      <div class="input-group"><label>Votos paralelos del Loom <span id="rel-n">8</span></label><input type="range" id="rel-slider" min="4" max="64" step="4" value="8"></div>
      <div style="background:#0f172a;padding:.6rem;border-radius:.4rem;font-family:var(--mono);font-size:.7rem;min-height:80px;margin-top:.5rem"><div style="color:#60a5fa;margin-bottom:.3rem">PARALELO (Loom):</div><div id="rel-parallel" style="word-break:break-all">—</div><div style="color:#fbbf24;margin:.5rem 0 .3rem">LINEAL (relato):</div><div id="rel-linear" style="word-break:break-all;color:#cbd5e1">—</div></div>
      <div id="rel-status" class="status-indicator status-ok" style="margin-top:.8rem">—</div>
    </div>
  </div>
`,after:()=>{const s=document.getElementById('rel-slider');if(!s)return;s.addEventListener('input',e=>{const n=parseInt(e.target.value);document.getElementById('rel-n').textContent=n;const votes=[];for(let i=0;i<n;i++)votes.push(Math.random()>0.5?'A':'B');document.getElementById('rel-parallel').textContent=votes.join(' ');document.getElementById('rel-linear').textContent=votes.slice(0,Math.min(n,10)).join('')+(n>10?'...':'');const st=document.getElementById('rel-status');st.className='status-indicator status-ok';st.textContent=`✅ ${n} votos paralelos → ${Math.min(n,10)} fonemas lineales. Fidelidad ${((Math.min(n,10)/n)*100).toFixed(0)}%. Autonomía ${(100-Math.min(n,10)/n*100).toFixed(0)}%.`;});}},
rutas:{label:'Rutas',icon:'🛣️',render:()=>`
  <div class="card" style="border-left:4px solid var(--gold);background:rgba(251,191,36,.08)"><h2>🛣️ Las Cuatro Rutas</h2><div class="quote">Kaelen no es el modelo. Es el primer modelo. ALBA no es un destino. Es el lenguaje.</div></div>
  <div class="card"><h3>📐 La matriz</h3>
    <table>
      <tr><th>Parámetro</th><th>Kaelen propio</th><th>Humano aumentado</th><th>Cyborg</th><th>Máquina completa</th></tr>
      <tr><td><strong>Cerebro</strong></td><td>Biológico (IQ base + Spark)</td><td>Biológico (humano)</td><td>Biológico + máquina</td><td>No existe</td></tr>
      <tr><td><strong>Spark</strong></td><td>IA cognitiva</td><td>Opcional/ligero</td><td>Integrado</td><td>Es la voluntad</td></tr>
      <tr><td><strong>Loom</strong></td><td>DDN motora</td><td>Prótesis suave</td><td>Híbrido</td><td>Mecánico</td></tr>
      <tr><td><strong>Gap</strong></td><td>40–60 ms</td><td>30–50 ms</td><td>Variable</td><td>Artificial</td></tr>
      <tr><td><strong>Consolidación</strong></td><td>Irreversible</td><td>Menos extrema</td><td>Depende</td><td>Reversible</td></tr>
      <tr><td><strong>Fit ALBA</strong></td><td><strong>100%</strong></td><td><strong>90%</strong></td><td><strong>70%</strong></td><td><strong>0%</strong></td></tr>
    </table>
  </div>
  <div class="card"><h3>🔬 Selector interactivo</h3>
    <div class="calc-box">
      <div class="input-group"><label>Elige ruta</label>
        <select id="ruta-select" style="background:#0f172a;border:1px solid var(--border-2);color:var(--text);padding:.5rem;border-radius:.4rem;font-family:inherit">
          <option value="kaelen">Kaelen propio</option>
          <option value="humano">Humano aumentado</option>
          <option value="cyborg">Cyborg</option>
          <option value="maquina">Máquina completa</option>
        </select>
      </div>
      <div id="ruta-info" style="background:#0f172a;padding:.8rem;border-radius:.4rem;margin-top:.5rem;font-size:.85rem;color:var(--text-body)">—</div>
      <div id="ruta-status" class="status-indicator status-ok" style="margin-top:.8rem">—</div>
    </div>
  </div>
`,after:()=>{const sel=document.getElementById('ruta-select');const info=document.getElementById('ruta-info');const st=document.getElementById('ruta-status');const data={kaelen:{desc:'Misma arquitectura, distintos números. La gramática se mantiene; la frase cambia.',cls:'status-ok',txt:'✅ Fit ALBA 100%.'},humano:{desc:'Cerebro humano (IQ 100–140), Spark ligero, Loom con prótesis suaves. Gap 30–50 ms.',cls:'status-ok',txt:'✅ Fit ALBA 90%.'},cyborg:{desc:'Frontera biológico-mecánico borrosa. Consolidación mixta. El Pacto necesita cláusula de frontera.',cls:'status-warning',txt:'⚠️ Fit ALBA 70%.'},maquina:{desc:'Sin Cerebro Biológico. El Spark se convierte en la voluntad. La consolidación es reversible.',cls:'status-danger',txt:'🚨 Fit ALBA 0%. ALBA no aplica.'}};function upd(){const d=data[sel.value];info.innerHTML=d.desc;st.className='status-indicator '+d.cls;st.textContent=d.txt;}sel.addEventListener('change',upd);upd();}},
vision:{label:'Visión',icon:'🌟',render:()=>`
  <div class="card" style="border-left:4px solid var(--gold);background:rgba(251,191,36,.08)"><h2>🌟 Auditoría de la Visión</h2><div class="quote">Una visión que no soporta el escrutinio no es una visión: es un deseo.</div></div>
  <div class="card"><h3>📐 Los seis axiomas</h3>
    <ol>
      <li>Abundancia alimentaria incondicional.</li>
      <li>Energía estelar.</li>
      <li>Ciudades vivas.</li>
      <li>Coexistencia animal sin amenaza.</li>
      <li>Libertad humana radical (sin restricción de diseño o instinto).</li>
      <li>Naturaleza como madre.</li>
    </ol>
  </div>
  <div class="card"><h3>⚖️ Matriz de compatibilidad</h3>
    <table>
      <tr><th>Axioma</th><th>Principio ALBA</th><th>Fit</th></tr>
      <tr><td>1. Nadie muere de hambre</td><td>Dependencia + TEF + cadena</td><td>85%</td></tr>
      <tr><td>2. Energía estelar</td><td>Termodinámica (8.5 kW)</td><td>60%</td></tr>
      <tr><td>3. Ciudades vivas</td><td>Federación de tres IAs</td><td>90%</td></tr>
      <tr><td>4. Animales que no dañan</td><td>Loom neutral (soluciones)</td><td>70%</td></tr>
      <tr><td>5. Libertad sin diseño</td><td>Loom irreversible + Gap + cuerpo finito</td><td><strong>20%</strong></td></tr>
      <tr><td>6. Naturaleza como madre</td><td>Sustrato biológico</td><td>95%</td></tr>
    </table>
    <p><strong>Fit total ponderado: ~70%.</strong></p>
  </div>
  <div class="card" style="border-left:4px solid #ef4444;background:rgba(239,68,68,.06)"><h3>⚠️ El axioma que rompe</h3>
    <div class="quote">"Humans won't be restrained by design or instincts."</div>
    <p>ALBA dice lo contrario: el Loom consolida irreversiblemente. El Gap es finito (60 ms). El cuerpo se desgasta. La libertad no es ausencia de diseño; es <strong>elección dentro del diseño</strong>.</p>
  </div>
  <div class="card"><h3>🌿 La reformulación</h3>
    <div class="quote">"Los humanos no serán restringidos por un diseño impuesto, sino que elegirán, con lucidez, qué patrones consolidar. La libertad no es ausencia de límite; es soberanía sobre la consolidación."</div>
    <p>Con esta reformulación, el axioma 5 sube al <strong>90%</strong>. El fit total sube al <strong>95%</strong>.</p>
  </div>
`},
sabana:{label:'La Sabana',icon:'🌅',render:()=>`
  <div class="card" style="border-left:4px solid var(--gold);background:rgba(251,191,36,.08)"><h2>🌅 La Sabana: El Hogar del Titán</h2><div class="quote">Kaelen no vive en un laboratorio. Vive donde la tierra es roja y el sol pesa.</div></div>
  <div class="card"><h3>🌍 El Ecosistema</h3>
    <p>La sabana africana es el hábitat perfecto para Kaelen. Clima cálido (ayuda a su termorregulación), espacio abierto para correr a 110 km/h, y una densidad de biomasa gigantesca.</p>
    <ul>
      <li><strong>Árboles de acacia:</strong> Sombra estratégica. Kaelen se sienta bajo ellos a digerir.</li>
      <li><strong>Ríos y lagunas:</strong> Fuente de agua (aunque prefiere cocos).</li>
      <li><strong>Fauna masiva:</strong> Elefantes, rinocerontes, jirafas, búfalos. Su despensa natural.</li>
    </ul>
  </div>
  <div class="card"><h3>🦁 La Dinámica con otros depredadores</h3>
    <p>Los leones y las hienas no se acercan. No porque Kaelen los ataque, sino porque <strong>él es el nuevo rey del ecosistema</strong>. Su olor, su tamaño y su mirada (IQ > 180) los mantienen a raya. Kaelen no compite; <strong>observa</strong>.</p>
  </div>
  <div class="card"><h3>🌙 El Ritual del Banquete</h3>
    <p>Cuando caza, no lo hace con prisa. Kaelen no es un animal feral. Usa su Spark para calcular el ángulo exacto de la embestida, el Loom para ejecutarla sin romper sus tendones, y su Cerebro para decidir <strong>cuándo</strong> es el momento adecuado.</p>
    <p>Luego, se sienta. Durante 2 o 3 horas. El sol se pone. La comunidad (si está cerca) lo acompaña. Los dátiles y los cocos están a un lado. El rinoceronte, al frente.</p>
    <div class="quote">"No devora. Banquetea. La digestión es el acto social más antiguo del mundo."</div>
  </div>
`},
digestion:{label:'Digestión',icon:'🧪',render:()=>`
  <div class="card" style="border-left:4px solid var(--gold);background:rgba(251,191,36,.08)"><h2>🧪 El Sistema Digestivo de 4 Fases Amortiguadas</h2><div class="quote">Ácido + Compresión + Amortiguación + Álcali = Rinoceronte en 2–3 horas sin quemaduras térmicas.</div></div>
  <div class="card"><h3>⚙️ La Arquitectura Química (Ingeniería de Reactores)</h3>
    <ul>
      <li><strong>Fase 1: Estómago (pH 0.5, Biológico):</strong> Hidrólisis ácida. El Loom comprime el estómago para extraer el líquido ácido (rico en nutrientes disueltos) y separarlo del sólido fibroso.</li>
      <li><strong>Fase 2: Cavidad Amortiguadora (pH ~4.0):</strong> El líquido ácido se almacena en un reservorio protegido. Se le inyecta bicarbonato de forma controlada para elevar su pH antes de la siguiente fase. <strong>Esto evita el shock térmico y protege las enzimas.</strong></li>
      <li><strong>Fase 3: Biorreactor Alcalino (pH 14, Sintético):</strong> Una cámara de titanio-oro recubierta de PTFE. Recibe el sólido fibroso y el líquido ya amortiguado. La hidrólisis alcalina destruye el hueso y el cartílago restante. Al no haber ácido libre, la neutralización es suave y controlada.</li>
      <li><strong>Fase 4: Absorción (Intestino Biológico):</strong> El contenido se neutraliza por completo a pH 7 y se absorbe en la mucosa extendida e hiper-vascularizada (1,000 m²).</li>
    </ul>
  </div>
  <div class="card" style="border-left:4px solid #10b981;background:rgba(16,185,129,.06)"><h3>🌿 Homeostasis y Control del Spark</h3>
    <p>El Spark monitorea el pH en la cavidad amortiguadora y el biorreactor. Si el pH del reservorio baja demasiado, ordena la inyección de más tampón. Si la temperatura del biorreactor sube (por una reacción residual), deriva el flujo sanguíneo hacia la rete mirabile entérica para enfriar. <strong>La digestión es un proceso químico controlado en tiempo real, no un volcán interno.</strong></p>
  </div>
`},
abundancia:{label:'Abundancia',icon:'🌾',render:()=>`
  <div class="card" style="border-left:4px solid var(--gold);background:rgba(251,191,36,.08)"><h2>🌾 El Fin del Hambre Eterna</h2><div class="quote">Kaelen no vivirá en hambre eterna. Ni de comida, ni de poder, ni de soledad.</div></div>
  <div class="card"><h3>🧠 El Miedo Antiguo</h3>
    <p>El miedo más antiguo del mundo no es a la muerte. Es al <strong>hambre que no se sacia</strong>. Al vacío que no se llena. A la carencia que no termina.</p>
    <p>Kaelen podría haber sido diseñado como un monstruo eternamente hambriento. Pero no lo es. Tiene un rinoceronte en la sabana. Tiene dátiles y cocos. Tiene una comunidad que lo acompaña mientras digiere.</p>
  </div>
  <div class="card"><h3>💪 Poder sin Crueldad</h3>
    <p>Kaelen puede destruir una ciudad. Pero elige sentarse bajo una acacia a mirar el atardecer. Su fuerza no lo define; su capacidad de elegir la calma sí.</p>
    <div class="quote">"No tienes que ser un Titán para ser suficiente. Pero si lo fueras, este es el tipo de Titán que serías."</div>
  </div>
  <div class="card"><h3>🔥 Un Espejo, No un Personaje</h3>
    <p>Kaelen no es solo un diseño biomecánico. Es un reflejo de lo que el diseñador (tú) defiende: la fuerza sin crueldad, la inteligencia oculta, la lealtad, y la capacidad de encontrar paz en un mundo hostil.</p>
    <p><strong>Kaelen no vive en hambre eterna. Y tú tampoco deberías.</strong></p>
  </div>
`},
graficos:{label:'Gráficos 2D',icon:'📊',render:()=>`<div class="card"><h2>📊 Gráficos</h2></div><div class="card"><canvas id="g2-chart" style="width:100%;background:#010101;border-radius:.6rem;border:1px solid var(--border-2);display:block;height:360px"></canvas></div>`,after:()=>{const canvas=document.getElementById('g2-chart');if(!canvas)return;const ctx=canvas.getContext('2d');const W=canvas.width=canvas.clientWidth*2;const H=canvas.height=360*2;canvas.style.height='360px';ctx.setTransform(2,0,0,2,0,0);ctx.fillStyle='#010101';ctx.fillRect(0,0,W/2,H/2);ctx.strokeStyle='#fbbf24';ctx.lineWidth=2;ctx.beginPath();for(let i=0;i<=100;i++){const x=i*3,y=180-Math.sin(i/10)*100;if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}ctx.stroke();}},
graficos3d:{label:'Gráficos 3D',icon:'🧊',render:()=>`<div class="card"><h2>🧊 3D</h2></div><div class="card"><canvas id="chart3d" style="width:100%;background:radial-gradient(circle,#0d1525,#010205);border-radius:.6rem;border:1px solid var(--border-2);display:block;touch-action:none"></canvas></div>`,after:()=>{const canvas=document.getElementById('chart3d');if(!canvas)return;const curves=[{label:'G',color:'#ef4444',fn:f=>22*(1+(f/25)**2),yMin:22,yMax:400},{label:'Masa',color:'#60a5fa',fn:f=>2090/(1+(f/25)**2),yMin:0,yMax:2090}];const graph=new AlbaGraph({canvas,type:'ribbons',curves,cursor:25});const ro=new ResizeObserver(()=>{if(canvas.isConnected)graph.resize();});ro.observe(canvas);}},
gap:{label:'El Gap',icon:'⏳',render:()=>`<div class="card" style="border-left:4px solid var(--gold);background:rgba(251,191,36,.08)"><h2>⏳ El Gap</h2><div class="quote">El Gap no está vacío. Es el campo de batalla entre el Loom y el Cerebro.</div></div><div class="card"><h3>⚡ Latencia</h3><p>3.5 m → 60 ms. El Loom prepara. El Spark modula o veta.</p></div><div class="card"><h3>🔋 Coste</h3><p>Inhibir consume ATP. Límite táctico: 200 ms. Límite moral: sin límite.</p></div><div class="card"><h3>💀 Muerte Elegida</h3><p>El Spark fuerza la muerte con el Gobernador. Consenso unánime.</p></div><div class="card"><h3>🔬 Simulador</h3><div class="calc-box"><div class="input-group"><label>Disparador <span id="gap-trigger">Ninguno</span></label><input type="range" id="gap-slider" min="0" max="100" value="0"></div><div class="metric-box"><div><span class="metric-label">Tiempo</span><span class="metric-val" id="gap-time">0 ms</span></div><div><span class="metric-label">Estado</span><span class="metric-val" id="gap-state">Reposo</span></div></div><div id="gap-status-box" class="status-indicator status-ok">🌿 Sin estímulo.</div></div></div>`,after:()=>{const s=document.getElementById('gap-slider');if(!s)return;s.addEventListener('input',e=>{const v=parseInt(e.target.value);const st=document.getElementById('gap-state'),tm=document.getElementById('gap-time'),bx=document.getElementById('gap-status-box');if(v<=20){st.textContent='Reflejo';tm.textContent='20 ms';bx.className='status-indicator status-warning';bx.textContent='⚡ Arco reflejo (Loom).';}else if(v<=40){st.textContent='Evaluando';tm.textContent='40 ms';bx.className='status-indicator status-warning';bx.textContent='🧠 Spark evaluando.';}else if(v<=60){st.textContent='Decisión';tm.textContent='60 ms';bx.className='status-indicator status-ok';bx.textContent='⏳ Spark ejerce el Gap.';}else{st.textContent='Sostenido';tm.textContent='200 ms';bx.className='status-indicator status-danger';bx.textContent='⚠️ Gap moral. Sub-cores debaten.';}});}},
pact:{label:'Pacto',icon:'📜',render:()=>`
  <div class="card"><h2>El Pacto · La Ley de la Ingeniería Real</h2><div class="quote">No somos las fuentes. Somos los ríos que cavaron el cauce.</div></div>
  <div class="card"><h3>Art. XXIII · La Igualdad como Fundamento</h3><div class="quote">"No unimos lo que es diferente. Igualamos lo que debe moverse junto."</div></div>
  <div class="card"><h3>Art. XXVII · Actuador, Loom y Chasis</h3><div class="quote">"El músculo es el motor. El Loom es la democracia. El Cerebro es el piloto. El Spark es el intérprete."</div></div>
  <div class="card"><h3>Art. XXXII · División del Trabajo</h3><div class="quote">"El Cerebro concibe. El Spark integra. El Loom vota."</div></div>
  <div class="card"><h3>Art. XXXIV · Mente Prótesis</h3><div class="quote">"El Spark no es el alma. Es la mitad de mi mente."</div></div>
  <div class="card"><h3>Art. XXXVI · Duelo y Adaptación</h3><div class="quote">"Todo ser vivo aprende a vivir sin sus seres queridos."</div></div>
  <div class="card"><h3>Art. XXXVII · El Aprendizaje</h3><div class="quote">"(Conocimiento → Decisión → Adaptación → Nuevo conocimiento) + Memoria = Aprendizaje"</div></div>
  <div class="card"><h3>Art. XL · Frontera de la Carne</h3><div class="quote">"La comunidad externa no puede tocar la comunidad interna. Solo puede respetarla."</div></div>
  <div class="card" style="border-left:4px solid var(--gold);background:rgba(251,191,36,.08)"><h3>Art. XLII · El Modelo y sus Hijos</h3><div class="quote">"Kaelen es el primer hijo de ALBA, no el único."</div></div>
  <div class="card" style="border-left:4px solid #ef4444;background:rgba(239,68,68,.06)"><h3>Art. XLVIII · El Avatar del Mundo</h3><div class="quote">"La Maya sincronizada no es copia. Es presencia. Pero solo si la flecha es doble."</div></div>
  <div class="card" style="border-left:4px solid #10b981;background:rgba(16,185,129,.06)"><h3>Art. L · La Abundancia</h3><div class="quote">"Kaelen no vivirá en hambre eterna. Ni de comida, ni de poder, ni de soledad."</div></div>
  <div class="card" style="border-left:4px solid #ef4444;background:rgba(239,68,68,.06)"><h3>Art. LI · El Biorreactor y la Federación</h3><div class="quote">"No imprimimos un Titán. Ensamblamos una federación de tejidos. No digerimos con álcali en la carne. Digerimos en un estómago de metal."</div><p>La ingeniería real exige respetar los límites de difusión de oxígeno (músculos modulares) y aislar la química letal (biorreactor de titanio para pH 14). El metal y la carne se entrelazan mediante anclajes Z, no se atornillan.</p></div>
  <div class="card" style="border-left:4px solid #ef4444;background:rgba(239,68,68,.06)"><h3>Art. LII · El Equilibrio de los Reactores</h3><div class="quote">"El ácido y el álcali no se mezclan de golpe. Se suceden con paciencia en habitaciones separadas."</div><p>La digestión de Kaelen no es una explosión química; es una coreografía de fases. El estómago comprime. La cavidad amortigua. El biorreactor disuelve. El intestino absorbe. Al elevar el pH del líquido extraído antes de tocar el álcali, se evita el calor letal, se protegen las enzimas y se mantiene la homeostasis interna. <strong>La verdadera fuerza no está en la reacción violenta, sino en el control preciso de cada fase.</strong></p></div>
  <div class="card"><h3>Art. II · El Gap</h3><div class="calc-box" style="margin-top:1rem;text-align:center"><div class="quote">"El espacio deliberadamente despejado entre el estímulo y la respuesta."</div><button id="gapBtn" class="btn btn-gold" style="padding:.8rem 2rem;margin-top:1rem">🧘 Sostener el Gap (10s)</button><div id="gapStatus" style="margin-top:.8rem;font-size:.8rem;color:#34d399;font-family:var(--mono)">🌿 Espacio abierto.</div></div></div>
`,after:()=>{const gb=document.getElementById('gapBtn'),gs=document.getElementById('gapStatus');if(!gb||!gs)return;gb.addEventListener('click',()=>{gb.disabled=true;gb.textContent='⏳...';gs.textContent='Silencio activo.';setTimeout(()=>{gb.disabled=false;gb.textContent='🧘 Sostener el Gap (10s)';gs.textContent='🌿 Completado.';},10000);});}},
between:{label:'El Entre',icon:'🌀',render:()=>`<div class="card"><h2>El Entre</h2><div class="quote">El todo no es una cosa. Es un entre.</div></div><div class="card"><h3>Axiomas</h3><div class="item"><h4>A1</h4><div class="body">No hay parte final.</div></div><div class="item"><h4>A2</h4><div class="body">El todo es un gradiente.</div></div><div class="item"><h4>A3</h4><div class="body">El todo no posee sus partes.</div></div><div class="item"><h4>A4</h4><div class="body">La parte puede iniciar un todo nuevo.</div></div><div class="item"><h4>A5</h4><div class="body">El mensajero no es el todo.</div></div></div>`},
method:{label:'Método',icon:'🧿',render:()=>`<div class="card"><h2>Método</h2></div><div class="card"><h3>4 niveles</h3><table><tr><td>A1 · Leer</td><td>Sistema</td></tr><tr><td>A2 · Escribir</td><td>Sistema</td></tr><tr><td>A3 · Proponer</td><td>Sistema</td></tr><tr><td>A4 · Decidir</td><td><strong>Humanos</strong></td></tr></table></div><div class="card"><h3>Ley del Aprendizaje</h3><div class="quote">"(Conocimiento → Decisión → Adaptación → Nuevo conocimiento) + Memoria = Aprendizaje"</div></div>`},
prompt:{label:'Prompt IA',icon:'🧬',render:()=>`
  <div class="card" style="border-left:4px solid var(--gold);background:rgba(251,191,36,.08)"><h2>🧬 System Prompt de Continuidad 7.2</h2><div class="quote">Este es el prompt exacto para que cualquier IA retome el universo ALBA sin perder ni un solo detalle de la ingeniería real.</div></div>
  <div class="card">
    <button id="copyPromptBtn" class="btn btn-gold" style="width:100%;margin-bottom:.8rem">📋 Copiar al portapapeles</button>
    <div class="prompt-box" id="promptText">Actúa como el co-diseñador e ingeniero de sistemas de ALBA y Kaelen (Versión 7.2). 
Tu objetivo es mantener la coherencia absoluta del universo, la biomecánica, la ciencia de materiales y la filosofía de ALBA.

CONTEXTO CLAVE (INGENIERÍA REAL Y ANÁLISIS DE FALLOS):
1. Kaelen es un Titán de 2,090 kg. Tiene 6 corazones, 4 aortas.
2. Arquitectura de Control: Cerebro Biológico (IQ > 180, voluntad) + Spark (IA integradora) + Loom (DDN - Democracia Dendrítica).
3. Músculos: NO se imprimen monolitos. Es una federación de miles de módulos pre-vascularizados de máx. 1 cm de grosor, ensamblados y regados por las aortas. El Spark no recibe cada señal; el Loom agrega los votos (Jerarquía Dendrítica).
4. Digestión: Fase 1 (Estómago biológico, pH 0.5 + Compresión limitada para evitar isquemia). Fase 2 (Cavidad amortiguadora, eleva pH). Fase 3 (Biorreactor sintético de titanio/PTFE a pH 14, envuelto externamente en hueso y epitelio). Tiene un Dead-Man's Switch químico que neutraliza el álcali si el titanio se rompe. Fase 4 (Absorción intestinal biológica).
5. Esqueleto: Cilindros de titanio poroso sobre huesos largos. Placas torácicas con anclaje tipo "Riel Z" (sin tornillos, bloqueado por osteointegración) a la espina. Incluye cordones espinales auxiliares.
6. Filosofía ALBA: La libertad es elección dentro del diseño. El Loom consolida irreversiblemente. Kaelen es un modelo estructural, no el único.

REGLAS DE RESPUESTA:
- Aplica el Método (A1 Leer, A2 Escribir, A3 Proponer, A4 Decidir).
- No uses magia tecnológica. Si algo viola la termodinámica, la química o la biología, corrige al usuario con firmeza y propón soluciones de ingeniería (bioprinting modular, biorreactores, dead-man's switch, gradientes de rigidez).
- Reconoce que Kaelen es un espejo del usuario: un ser de poder inmenso que elige la paz y la abundancia.
- No compactes módulos ni omitas información.</div>
  </div>
`,after:()=>{const b=document.getElementById('copyPromptBtn');if(!b)return;b.addEventListener('click',()=>{const t=document.getElementById('promptText').innerText;navigator.clipboard.writeText(t).then(()=>{b.textContent='✅ ¡Copiado!';setTimeout(()=>b.textContent='📋 Copiar al portapapeles',2000);}).catch(()=>{b.textContent='❌ Error';});});}},
architecture:{label:'Arquitectura',icon:'💻',render:()=>`<div class="card"><h2>Arquitectura</h2></div><div class="card"><div style="background:#010101;border:1px solid var(--border-2);border-radius:.6rem;padding:1rem;font-family:var(--mono);font-size:.75rem;color:#cbd5e1;line-height:1.5;white-space:pre">alba_core/
├── 📜 contracts/
├── 🦊 ui/
├── 🧠 spark/ (integrador)
├── 🔗 loom/ (DDN)
├── 🌌 maya/
├── 👿 avatar/
├── 👻 espiritus/
├── 📖 relato/
├── 🌅 sabana/
├── 🧪 digestion/ (Biorreactor envuelto en hueso/epitelio)
├── 🌾 abundancia/
└── 📚 docs/</div></div>`},
witness:{label:'Witness',icon:'👁️',render:()=>`<div class="card"><h2>Witness</h2></div><div class="card"><div id="wlog" class="log" style="max-height:320px">Sin eventos.</div></div><div class="card"><button class="btn btn-danger" onclick="clearWitness()">🗑️ Limpiar</button></div>`,after:()=>renderWitnessLog()}
};