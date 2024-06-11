window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
  
    if(scrollY > 5){
      document.querySelector("top-nav").classList.add("navbar-scrolled");
    }else{
      document.querySelector("top-nav").classList.remove("navbar-scrolled");
    }
})