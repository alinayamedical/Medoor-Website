
(function(){
 const city=document.getElementById('service-city');
 const update=()=>{
   const ar=document.documentElement.lang==='ar';
   for(const opt of city.options) opt.textContent=ar?opt.dataset.ar:opt.dataset.en;
   const name=city.value?(ar?city.selectedOptions[0].dataset.ar:city.value):'';
   document.querySelectorAll('.service-request').forEach(a=>{
     const card=a.closest('.service-card');
     const service=ar?card.dataset.serviceAr:card.dataset.serviceEn;
     const msg=ar?'السلام عليكم، أرغب بالاستفسار عن خدمة '+service+(name?' في '+name:'')+' وتنسيق موعد الزيارة.':'Hello, I would like to enquire about '+service+(name?' in '+name:'')+' and arrange a visit.';
     a.href='https://wa.me/966551210035?text='+encodeURIComponent(msg);
   });
 };
 city.addEventListener('change',update);
 new MutationObserver(update).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 update();
})();
