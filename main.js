//for making header backgrround white on scroll
window.addEventListener("scroll",()=>{
    const header=document.querySelector("header");
    
    header.classList.toggle("sticky",window.scrollY > 0);
    
});

//for clearing contact form on submit

const submitform =document.querySelector('input[type="submit"]');

submitform.addEventListener("click",()=>{
        document.querySelector("textarea").value=null;
});

//for making navlink active on click

const navlink_a = document.querySelectorAll(".navlinks li a");

function addclass(){
    navlink_a.forEach(n=>n.classList.remove("active"));
    this.classList.add("active");
    }
navlink_a.forEach(n=>n.addEventListener("click",addclass));


 // for menutoggle
const menutoggle= document.querySelector(".menu-toggle");

menutoggle.addEventListener("click",()=>{
   menutoggle.classList.toggle("active");

   document.querySelector(".navlinks").classList.toggle("show");
    
   
});

