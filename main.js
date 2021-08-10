//for making header backgrround white on scroll
window.addEventListener("scroll",()=>{
    const header=document.querySelector("header");
    
    header.classList.toggle("sticky",window.scrollY > 0);
    
});