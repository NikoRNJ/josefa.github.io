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
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in-view")}})},{threshold:.15});
document.querySelectorAll(".section, .card, .split, .slide").forEach(el=>{el.classList.add("reveal");io.observe(el)});
const faqItems=document.querySelectorAll(".faq-item");
faqItems.forEach(d=>{d.addEventListener("toggle",()=>{if(d.open){faqItems.forEach(o=>{if(o!==d)o.open=false})}})});
const nform=document.getElementById("newsletter-form");
if(nform){nform.addEventListener("submit",e=>{e.preventDefault();const email=new FormData(nform).get("newsletter_email");localStorage.setItem("newsletter-josefa",JSON.stringify({email,ts:Date.now()}));nform.reset();alert("¡Gracias por unirte!")})}