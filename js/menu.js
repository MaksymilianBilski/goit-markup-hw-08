const hamburger = document.querySelector(".menu-hamb");
const kurwamenu = document.querySelector(".kurwamenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  kurwamenu.classList.toggle("active");
})

document.querySelectorAll(".link-hamburger").forEach(n => n.
  addEventListener("click", () => {
    hamburger.classList.remove("active");
    hamburger.classList.remove("active");
  }))