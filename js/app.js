const header = document.querySelector("header");
const toggle_btn = document.querySelector(".toggle-btn");
const hamburger = document.querySelector(".hamburger");
const links = document.querySelectorAll(".links");

// -----------Sticky Navbar---------------
function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();
window.addEventListener("scroll", stickyNavbar);

// ------------------RevealAnimation----------------
let sr = ScrollReveal({
    duration: 2500,
    distance: "60px"
});

sr.reveal(".show-case-info", { delay: 500 });
sr.reveal(".show-case-img", { origin: "top", delay: 600 });

// ===============================Dark theme==================
let firstTheme = localStorage.getItem("dark");

if (firstTheme === null) {
    // Set default theme to dark if not set before
    document.body.classList.add("dark");
    toggle_btn.classList.replace("uil-moon", "uil-sun");
    localStorage.setItem("dark", 1);
} else if (firstTheme == 1) {
    document.body.classList.add("dark");
    toggle_btn.classList.replace("uil-moon", "uil-sun");
} else {
    document.body.classList.remove("dark");
    toggle_btn.classList.replace("uil-sun", "uil-moon");
}

function changeTheme() {
    if (!document.body.classList.contains("dark")) {
        document.body.classList.add("dark");
        toggle_btn.classList.replace("uil-moon", "uil-sun");
        localStorage.setItem("dark", 1);
    } else {
        document.body.classList.remove("dark");
        toggle_btn.classList.replace("uil-sun", "uil-moon");
        localStorage.setItem("dark", 0);
    }
}

toggle_btn.addEventListener("click", changeTheme);

// -----------------------------------Hamburger open and close----------------------------------
hamburger.addEventListener("click", () => {
    document.body.classList.toggle("open");
    document.body.classList.toggle("stopScrolling");
});

links.forEach((link) =>
    link.addEventListener("click", () => {
        document.body.classList.remove("open");
        document.body.classList.remove("stopScrolling");
    })
);
