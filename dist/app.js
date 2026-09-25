const products = [
  {id: 'legging', name: 'NICA Legging 01', color: 'Chocolate', price: 349, x: 36, y: 814, w: 225, h: 170, swatch: '#3e2c23'},
  {id: 'top', name: 'NICA Top 01', color: 'Cream', price: 249, x: 279, y: 814, w: 225, h: 170, swatch: '#e7ddd0'},
  {id: 'short', name: 'NICA Short 01', color: 'Chocolate', price: 269, x: 522, y: 814, w: 225, h: 170, swatch: '#3e2c23'},
  {id: 'jacket', name: 'NICA Jacket 01', color: 'Black', price: 389, x: 764, y: 814, w: 225, h: 170, swatch: '#111111'}
];
const money = value => new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(value);
const favorites = new Set();
const bag = [];
const crop = (p, loading='lazy') => `<div class="crop" style="--x:${p.x};--y:${p.y};--w:${p.w};--h:${p.h}"><img src="assets/nica-reference.png" alt="${p.name} — ${p.color}" width="1024" height="1536" loading="${loading}"></div>`;
window.nicaProducts = products;
let lastTrigger;
function openDialog(id, trigger) {
  document.querySelectorAll('dialog[open]').forEach(d => d.close());
  lastTrigger = trigger || document.activeElement;
  if (id === 'bag-dialog') renderBag();
  if (id === 'search-dialog') {document.querySelector('#search-input').value = ''; renderSearch('');}
  document.getElementById(id).showModal();
}
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {if(event.target === dialog){const r = dialog.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();}});
  dialog.addEventListener('close', () => {if(lastTrigger?.isConnected) lastTrigger.focus({preventScroll:true});});
});
let toastTimer;
function toast(message) {const el=document.querySelector('.toast'); el.textContent=message; el.classList.add('visible'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>el.classList.remove('visible'),3200);}
document.addEventListener('click', event => {
  const open = event.target.closest('[data-open]'); if(open) openDialog(open.dataset.open, open);
  const close = event.target.closest('[data-close]'); if(close) close.closest('dialog').close();
  const product = event.target.closest('[data-product]'); if(product) showProduct(product.dataset.product, product);
  const fav = event.target.closest('[data-favorite]');
  if(fav) {const id=fav.dataset.favorite; favorites.has(id)?favorites.delete(id):favorites.add(id); fav.setAttribute('aria-pressed',favorites.has(id)); fav.setAttribute('aria-label',`${favorites.has(id)?'Remover dos favoritos':'Favoritar'} ${products.find(p=>p.id===id).name}`); document.dispatchEvent(new CustomEvent('nica:favorite',{detail:[...favorites]})); toast(favorites.has(id)?'Adicionado aos favoritos desta prévia.':'Removido dos favoritos.');}
  const mobileLink=event.target.closest('.mobile-nav a'); if(mobileLink) document.querySelector('#menu-dialog').close();
});
function showProduct(id, trigger) {
  const p=products.find(p=>p.id===id); let size='';
  document.querySelector('#product-detail').innerHTML=`<div class="product-detail-grid">${crop(p,'eager')}<div><p class="eyebrow">NICA / SKIN 01</p><h2 id="product-title">${p.name}</h2><p>${p.color} · ${money(p.price)}</p><p>Essenciais para acompanhar você, dentro e fora do treino.</p><fieldset style="border:0;padding:0;margin:0"><legend>Escolha seu tamanho</legend><div class="sizes">${['PP','P','M','G','GG'].map(s=>`<button type="button" data-size="${s}" aria-pressed="false">${s}</button>`).join('')}</div></fieldset><button id="add-to-bag" class="button dark" disabled>Escolha um tamanho</button><p class="muted" style="margin-top:16px">Produto e preço ilustrativos. A seleção de tamanho e a sacola são uma demonstração local.</p></div></div>`;
  openDialog('product-dialog', trigger);
  document.querySelectorAll('[data-size]').forEach(button=>button.addEventListener('click',()=>{size=button.dataset.size; document.querySelectorAll('[data-size]').forEach(b=>b.setAttribute('aria-pressed',b===button)); const add=document.querySelector('#add-to-bag');add.disabled=false;add.textContent='Adicionar à sacola';}));
  document.querySelector('#add-to-bag').addEventListener('click',()=>{if(!size)return; const existing=bag.find(item=>item.id===id&&item.size===size); if(existing) existing.quantity++; else bag.push({id,size,quantity:1}); updateBagCount();document.querySelector('#product-dialog').close();toast(`${p.name} adicionado à sacola.`);});
}
function updateBagCount(){document.querySelector('.bag-count').textContent=`(${bag.reduce((n,item)=>n+item.quantity,0)})`;}
function renderBag(){const content=document.querySelector('#bag-content'); if(!bag.length){content.innerHTML='<p>Sua sacola está esperando seus novos essenciais.</p><button class="button dark" id="explore-products">Explorar a coleção ↗</button>';document.querySelector('#explore-products').onclick=()=>{document.querySelector('#bag-dialog').close();document.querySelector('#novidades').scrollIntoView({behavior:'smooth'});};return;}
  content.innerHTML=bag.map((item,index)=>{const p=products.find(p=>p.id===item.id);return `<div class="bag-item"><div><p>${p.name}</p><p class="muted">${p.color} · ${item.size} · Quantidade: ${item.quantity}</p><button class="remove-item" data-remove="${index}" aria-label="Remover ${p.name} tamanho ${item.size}">Remover</button></div><span>${money(p.price*item.quantity)}</span></div>`;}).join('')+`<div class="bag-total"><span>Subtotal</span><strong>${money(bag.reduce((sum,item)=>sum+products.find(p=>p.id===item.id).price*item.quantity,0))}</strong></div><p class="muted">Esta é uma sacola de demonstração. Pedidos e pagamentos estarão disponíveis na loja integrada à Nuvemshop.</p><button class="button dark" data-close>Continuar explorando</button>`;
  content.querySelectorAll('[data-remove]').forEach(button=>button.onclick=()=>{bag.splice(Number(button.dataset.remove),1);updateBagCount();renderBag();});
}
const normalize=text=>text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function renderSearch(query){const matches=products.filter(p=>normalize(`${p.name} ${p.color} Skin 01`).includes(normalize(query.trim())));document.querySelector('#search-results').innerHTML=matches.length?`<p class="muted">${matches.length} produtos</p>`+matches.map(p=>`<button class="search-result" data-product="${p.id}"><span>${p.name}<br><small>${p.color}</small></span><span>${money(p.price)}</span></button>`).join(''):'<p>Nenhum produto encontrado. Tente “top” ou “legging”.</p>';}
document.querySelector('#search-input').addEventListener('input',event=>renderSearch(event.target.value));
document.querySelector('#club-form').addEventListener('submit',event=>{event.preventDefault();document.querySelector('#club-feedback').textContent='Prévia: e-mail validado. Nenhum cadastro foi enviado; o NICA Club será conectado à loja.';});


