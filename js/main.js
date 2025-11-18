const toggle=document.getElementById("nav-toggle");
const links=document.getElementById("nav-links");
toggle.addEventListener("click",()=>{const open=links.style.display==="flex";links.style.display=open?"none":"flex"});
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener("click",e=>{const id=a.getAttribute("href");const el=document.querySelector(id);if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth",block:"start"});links.style.display="none"}})});
const header=document.querySelector(".site-header");
const onScroll=()=>{if(window.scrollY>10){header.style.background="rgba(255,255,255,.85)"}else{header.style.background="rgba(255,255,255,.6)"}};
window.addEventListener("scroll",onScroll);
const slider=document.getElementById("slider");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
const scrollBy=()=>slider.scrollBy({left:slider.clientWidth*0.8,behavior:"smooth"});
prev.addEventListener("click",()=>{slider.scrollBy({left:-slider.clientWidth*0.8,behavior:"smooth"})});
next.addEventListener("click",scrollBy);
const sDots=document.getElementById('s-dots');
if(sDots){
  const slides=Array.from(slider.querySelectorAll('.slide'));
  sDots.innerHTML=slides.map(()=>'<span class="s-dot"></span>').join('');
  const dots=Array.from(sDots.querySelectorAll('.s-dot'));
  const setDots=(idx)=>{
    dots.forEach((d,i)=>{
      d.className='s-dot small';
      if(i===idx){d.className='s-dot large'}
      else if(i===idx-1||i===idx+1){d.className='s-dot medium'}
      if(i===0||i===dots.length-1){d.className='s-dot small'}
    });
  };
  const currentIndex=()=>Math.round(slider.scrollLeft/(slider.clientWidth*0.8));
  const update=()=>setDots(Math.max(0,Math.min(dots.length-1,currentIndex())));
  slider.addEventListener('scroll',()=>{clearTimeout(slider._t);slider._t=setTimeout(update,50)});
  sDots.addEventListener('click',e=>{const i=dots.indexOf(e.target);if(i>=0){slider.scrollTo({left:i*slider.clientWidth*0.8,behavior:'smooth'})}});
  update();
}
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in-view")}})},{threshold:.1});
document.querySelectorAll(".card, .split, .slide, .service-card, .testimonial, .gallery-item, .cv-chip").forEach(el=>{el.classList.add("reveal");io.observe(el)});
document.querySelectorAll('.reveal').forEach(el=>{const r=el.getBoundingClientRect();if(r.top<window.innerHeight&&r.bottom>0){el.classList.add('in-view')}});
const faqItems=document.querySelectorAll(".faq-item");
faqItems.forEach(d=>{d.addEventListener("toggle",()=>{if(d.open){faqItems.forEach(o=>{if(o!==d)o.open=false})}})});
const nform=document.getElementById("newsletter-form");
// newsletter eliminado

// Fallback de imágenes y diagnóstico
const placeholder = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">`+
  `<defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#ffd6c2"/><stop offset="1" stop-color="#d9d4f0"/></linearGradient></defs>`+
  `<rect width="100%" height="100%" fill="url(#g)"/>`+
  `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Montserrat" font-size="24" fill="#333">Imagen no disponible</text>`+
  `</svg>`);

Array.from(document.images).forEach(img=>{
  img.addEventListener('error',()=>{
    const original = img.currentSrc || img.src;
    console.warn('Error cargando imagen:', original);
    img.setAttribute('data-img-error','true');
    img.src = placeholder;
  }, { once: true });
});

// Galería con carrusel 5s, controles y lightbox
// Lightbox
let lb=document.querySelector('.lightbox');
if(!lb){lb=document.createElement('div');lb.className='lightbox';lb.innerHTML='<img alt="">';document.body.appendChild(lb)}
const lbImg=lb.querySelector('img');
document.querySelectorAll('.gallery-item img, .slide img').forEach(img=>{
  img.style.cursor='zoom-in';
  img.addEventListener('click',()=>{lbImg.src=img.currentSrc||img.src;lb.classList.add('open')})
});
lb.addEventListener('click',()=>lb.classList.remove('open'))

fetch('data/portfolio.json').then(r=>r.json()).then(data=>{
  const ap=document.getElementById('about-text-p');
  if(ap) ap.textContent=data.bio?.descripcion||ap.textContent;
  const vt=document.getElementById('valores-text');
  if(vt) vt.textContent=data.valores||vt.textContent;
  const ce=document.getElementById('contact-email');
  const ci=document.getElementById('contact-instagram');
  const cp=document.getElementById('contact-phone');
  if(ce) ce.textContent=data.contacto?.email, ce.href='mailto:'+data.contacto?.email;
  if(ci) ci.textContent=data.contacto?.instagram;
  if(cp) cp.textContent=data.contacto?.telefono;
  const pSlider=document.getElementById('proj-slider');
  const pPrev=document.getElementById('p-prev');
  const pNext=document.getElementById('p-next');
  const pDots=document.getElementById('proj-dots');
  if(pSlider && Array.isArray(data.proyectos)){
    const slidesHtml=data.proyectos.map(p=>{
      const a=p.imagenes||[];
      const main=a[0]||'';
      const s1=a[1]||main;
      const s2=a[2]||s1;
      const w=a[3]||s2;
      const mainBlock = p.video ? `<video src="${p.video}" controls preload="metadata" poster="${main}"></video>` : `<img src="${main}" alt="${p.titulo}">`;
      return `<div class="proj-slide"><div class="proj-layout"><div class="proj-main">${mainBlock}</div><div class="proj-side"><div class="small"><img src="${s1}" alt="${p.titulo}"></div><div class="small"><img src="${s2}" alt="${p.titulo}"></div><div class="wide"><img src="${w}" alt="${p.titulo}"></div></div></div><div class="proj-meta"><h3>${p.titulo}</h3><p>${p.descripcion}</p></div></div>`
    }).join('');
    pSlider.innerHTML=slidesHtml;
    const slides=Array.from(pSlider.querySelectorAll('.proj-slide'));
    const projectVideos=slides.map(slide=>slide.querySelector('video')).filter(Boolean);
    pDots.innerHTML=slides.map(()=>'<span class="s-dot"></span>').join('');
    const dots=Array.from(pDots.querySelectorAll('.s-dot'));
    const setDots=(idx)=>{dots.forEach((d,i)=>{d.className='s-dot small';if(i===idx){d.className='s-dot large'}else if(i===idx-1||i===idx+1){d.className='s-dot medium'}if(i===0||i===dots.length-1){d.className='s-dot small'}})};
    const idx=()=>Math.round(pSlider.scrollLeft/(pSlider.clientWidth*0.88));
    const upd=()=>setDots(Math.max(0,Math.min(dots.length-1,idx())));
    pSlider.addEventListener('scroll',()=>{clearTimeout(pSlider._t);pSlider._t=setTimeout(upd,50)});
    pPrev?.addEventListener('click',()=>{pSlider.scrollBy({left:-pSlider.clientWidth*0.88,behavior:'smooth'})});
    pNext?.addEventListener('click',()=>{pSlider.scrollBy({left:pSlider.clientWidth*0.88,behavior:'smooth'})});
    pDots.addEventListener('click',e=>{const i=dots.indexOf(e.target);if(i>=0){pSlider.scrollTo({left:i*pSlider.clientWidth*0.88,behavior:'smooth'})}});
    if(projectVideos.length){
      if('IntersectionObserver' in window){
        const videoObserver=new IntersectionObserver(entries=>{
          entries.forEach(entry=>{if(!entry.isIntersecting){entry.target.pause();}});
        },{root:pSlider,threshold:.6});
        projectVideos.forEach(video=>videoObserver.observe(video));
      }else{
        const pauseHidden=()=>{const left=pSlider.scrollLeft;const right=left+pSlider.clientWidth;projectVideos.forEach(video=>{const slide=video.closest('.proj-slide');if(!slide)return;const sLeft=slide.offsetLeft;const sRight=sLeft+slide.offsetWidth;if(sRight<left||sLeft>right){video.pause();}})};
        pSlider.addEventListener('scroll',()=>{clearTimeout(pSlider._vh);pSlider._vh=setTimeout(pauseHidden,60)});
      }
    }
    upd();
  }
  const rg=document.getElementById('recon-grid');
  if(rg && Array.isArray(data.proyectos)){
    const recs=data.proyectos.filter(x=>['Reconocimiento','Pasarela','Colaboración'].includes(x.categoria));
    rg.innerHTML=recs.map(p=>`<article class="card"><img src="${(p.imagenes&&p.imagenes[0])||''}" alt="${p.titulo}" loading="lazy" decoding="async"><div class="card-body"><h3>${p.titulo}</h3><p>${p.descripcion}</p></div></article>`).join('');
  }
  const insta=document.querySelector('.instagram .insta-row');
  if(insta && Array.isArray(data.proyectos)){
    const pool=[]; data.proyectos.forEach(p=>{(p.imagenes||[]).forEach(src=>pool.push({src,alt:p.titulo}))});
    const pick=[]; const used=new Set();
    while(pick.length<5 && pool.length){
      const i=Math.floor(Math.random()*pool.length);
      const item=pool[i]; if(!used.has(item.src)){used.add(item.src); pick.push(item)}
    }
    insta.innerHTML=pick.map(i=>`<img src="${i.src}" alt="${i.alt}" loading="lazy" decoding="async">`).join('');
  }
  const gallery=document.querySelector('#gallery .gallery-track');
  const dots=document.getElementById('g-dots');
  const tabs=Array.from(document.querySelectorAll('.tab[data-cat]'));
  const renderCat=cat=>{
    const arr=data.procesos?.[cat]||[];
    gallery.innerHTML=arr.map(i=>`<div class="gallery-item"><img src="${i.img}" alt="${i.titulo}" loading="lazy" decoding="async"></div>`).join('');
    const ds=arr.map((_,i)=>`<button data-i="${i}"></button>`).join('');
    dots.innerHTML=ds;
    const dsEls=Array.from(dots.querySelectorAll('button'));
    let idx=0, timer;
    const set=ii=>{idx=ii;dsEls.forEach((d,i)=>d.classList.toggle('active',i===idx));gallery.style.transform=`translateX(-${idx*100}%)`;gallery.style.transition='transform .4s ease'};
    const nextF=()=>set((idx+1)%arr.length);
    const prevF=()=>set((idx-1+arr.length)%arr.length);
    document.getElementById('g-next').onclick=nextF;
    document.getElementById('g-prev').onclick=prevF;
    dsEls.forEach((d,i)=>d.onclick=()=>set(i));
    const start=()=>{clearInterval(timer);if(arr.length)timer=setInterval(nextF,5000)};
    const stop=()=>clearInterval(timer);
    document.getElementById('gallery').onmouseenter=stop;
    document.getElementById('gallery').onmouseleave=start;
    set(0);start();
    document.querySelectorAll('.gallery-item img').forEach(img=>{img.style.cursor='zoom-in';img.onclick=()=>{lbImg.src=img.currentSrc||img.src;lb.classList.add('open')}});
  };
  tabs.forEach(t=>t.onclick=()=>{tabs.forEach(x=>x.classList.toggle('active',x===t));renderCat(t.dataset.cat)});
  renderCat('editorial');
}).catch(()=>{});
