const bars = document.querySelector(".bar"),
      close = document.querySelector(".close"),
      menu = document.querySelector(".menu");

bars.addEventListener("click", () => {
    menu.classList.add("active");
    gsap.from(menu, {
        opacity: 0,
        duration: 0.3
    });
    gsap.from(".menu ul", {
        opacity: 0,
        x: -300,
        duration: 0.3
    });
});

close.addEventListener("click", () => {
    menu.classList.remove("active");
});

function animateContent(selectors) {
    selectors.forEach(selector => {
        gsap.to(selector, {
            y: 30,
            duration: 0.1,
            opacity: 1,
            delay: 0.2,
            stagger: 0.2,
            ease: "power2.out",
        });
    });
}

function scrollTriggerAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 80%",
            scrub: 1,
        },
    });

    boxSelectors.forEach(boxSelector => {
        timeline.to(boxSelector, {
            y: 0,
            duration: 1,
            opacity: 1,
        });
    });
}

function swipeAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 100%",
            scrub: 3,
        },
    });

    boxSelectors.forEach(boxSelector => {
        timeline.to(boxSelector, {
            x: 0,
            duration: 1,
            opacity: 1,
        });
    });
}

function searchCountry() {
    const searchQuery = document.getElementById('searchInput').value.trim();
    if (searchQuery) {
        window.location.href = `exploremore/index.html?country=${encodeURIComponent(searchQuery)}`;
    }
}

function galleryAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 100%",
            end: "bottom 100%",
            scrub: 1,
        },
    });

    boxSelectors.forEach(boxSelector => {
        timeline.to(boxSelector, {
            y: 0,
            opacity: 1,
            duration: 1,
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
    });

    const filterButtons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".card");

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");
            cards.forEach(card => {
                card.style.display = (filterValue === "all" || card.getAttribute("data-category") === filterValue) ? "block" : "none";
            });
        });
    });
});

// Initial animations
animateContent([".home .content h5", ".home .content h1", ".home .content p", ".home .content .search"]);
swipeAnimation(".destinations", [".destinations .heading", ".destinations .content"]);
galleryAnimation(".destinations .gallery", [".destinations .gallery .box1", ".destinations .gallery .box2", ".destinations .gallery .box3", ".destinations .gallery .box4", ".destinations .gallery .box5"]);
