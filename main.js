document.getElementById('burger')?.addEventListener('click',()=>document.getElementById('nav').classList.toggle('open'));
document.querySelectorAll('.heart').forEach(b=>b.addEventListener('click',()=>b.classList.toggle('on')));
// filtros de habitaciones
const fb=document.getElementById('fbtn');
if(fb){fb.addEventListener('click',()=>{
 const d=document.getElementById('fd').value,[lo,hi]=document.getElementById('fp').value.split('-').map(Number);let n=0;
 document.querySelectorAll('#rooms .room').forEach(r=>{const p=+r.dataset.p,ok=(!d||r.dataset.d===d)&&p>=lo&&p<=hi;r.style.display=ok?'':'none';if(ok)n++});
 document.getElementById('empty').style.display=n?'none':'block';});}
// toggle de planes
document.querySelectorAll('#toggle button').forEach(b=>b.addEventListener('click',()=>{
 document.querySelectorAll('#toggle button').forEach(x=>x.classList.toggle('on',x===b));
 document.querySelectorAll('.plan .p').forEach(p=>p.textContent='S/ '+p.dataset[b.dataset.k]);}));
// formulario de contacto
const cf=document.getElementById('cf');
if(cf){cf.addEventListener('submit',e=>{e.preventDefault();
 const ok=['n','e','m'].every(id=>document.getElementById(id).value.trim())&&/\S+@\S+\.\S+/.test(document.getElementById('e').value);
 const o=document.getElementById('ok');o.style.display='block';o.textContent=ok?'¡Gracias! Recibimos tu mensaje y te responderemos pronto.':'Completa tu nombre, un correo válido y tu mensaje.';if(ok)cf.reset();});}
