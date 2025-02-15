// your code goes here
// script.js

// Attivazione dello Scroll Spy per evidenziare il link corrente nella navbar
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");
  
    function activateNavLink() {
      let index = sections.length;
  
      while (--index && window.scrollY + 90 < sections[index].offsetTop) {}
  
      navLinks.forEach((link) => link.classList.remove("active"));
      if (navLinks[index]) {
        navLinks[index].classList.add("active");
      }
    }
  
    activateNavLink();
    window.addEventListener("scroll", activateNavLink);
  });
  