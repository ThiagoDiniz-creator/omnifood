function updateYear(){
    const copyright = document.querySelector("p.copyright");
    if(copyright){
        const year = new Date().getFullYear();
        copyright.innerHTML = "Copyright © " + year + " by Omnifood Inc.";
    }
}

function handleMobileNavigation(){
    const btnNavEl = document.querySelector(".btn-mobile-nav");
    const headerEl = document.querySelector(".header");

    btnNavEl.addEventListener("click", function (){
       headerEl.classList.toggle("nav-open");
    });
}

function stickyNavbar(){
    const navbarEl = document.querySelector("#header");
    const heroSectionEl = document.querySelector("section.section-hero");
    const obs = new IntersectionObserver(function (entries){
        const ent = entries[0];
        if(!ent.isIntersecting){
            navbarEl.classList.add("sticky");
            heroSectionEl.classList.add("fix-height");
        }
        else{
            navbarEl.classList.remove("sticky");
            heroSectionEl.classList.remove("fix-height");
        }
    }, {
        // In the viewport
        root: null,
        // The event fires when 0% of the target enters the viewport
        threshold: 0,
        // Changing the root margin
        rootMargin: "-80px",
    });
    obs.observe(heroSectionEl);
}

function main(){
    updateYear();
    handleMobileNavigation();
    stickyNavbar();
}

main();
