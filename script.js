// Keeps the footer year current
var y=document.getElementById("year");
if(y){y.textContent=new Date().getFullYear();}

// Highlights the nav link of the section you are viewing
var links=document.querySelectorAll("nav div a");
var io=new IntersectionObserver(function(entries){
  entries.forEach(function(e){
    if(e.isIntersecting){
      links.forEach(function(a){
        a.style.color=a.getAttribute("href")==="#"+e.target.id?"var(--ink)":"";
      });
    }
  });
},{rootMargin:"-40% 0px -55% 0px"});
document.querySelectorAll("section[id]").forEach(function(s){io.observe(s);});
