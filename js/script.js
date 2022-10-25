function updateYear() {
  const copyright = document.querySelector("p.copyright");
  if (copyright) {
    const year = new Date().getFullYear();
    copyright.innerHTML = "Copyright © " + year + " by Omnifood Inc.";
  }
}

function handleMobileNavigation() {
  const btnNavEl = document.querySelector(".btn-mobile-nav");
  const headerEl = document.querySelector(".header");
  const mainNavButtonsEl = document.querySelectorAll("a.main-nav-link");

  // Adding the listener to the click event on the mobileNav button.
    btnNavEl.addEventListener("click", function () {
      headerEl.classList.toggle("nav-open");
  });

  // Adding listeners to the buttons on the mobile nav.
  mainNavButtonsEl.forEach((el) => {
     el.addEventListener('click', function (){
         if(headerEl.classList.contains("nav-open"))
             headerEl.classList.toggle("nav-open");
     });
  });
}

function stickyNavbar() {
  const body = document.querySelector("body");
  const navbarEl = document.querySelector(".main-nav");
  const heroSectionEl = document.querySelector("section.section-hero");
  const headerEl = document.querySelector("#header");

  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];

      if (headerEl.classList.contains("nav-open")) return;

      if (!ent.isIntersecting) body.classList.add("sticky");
      else body.classList.remove("sticky");
    },
    {
      // In the viewport
      root: null,
      // The event fires when 0% of the target enters the viewport
      threshold: 0,
      // Changing the root margin
      rootMargin: "-80px",
    }
  );
  obs.observe(heroSectionEl);
}

function main() {
  updateYear();
  handleMobileNavigation();
  stickyNavbar();
}

main();
