//toggle class aktif
const navbarNav = document.querySelector(".navbar-nav");
const humberger = document.querySelector("#humberger-menu");

humberger.onclick = () => {
  navbarNav.classList.toggle("active");
};

document.addEventListener("click", (e) => {
  if (!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
