// =============================================
//   NUSANTARA ARTISAN — script.js
// =============================================

// ── Navbar scroll effect ──
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  nav.style.boxShadow =
    window.scrollY > 50 ? "0 2px 30px rgba(28,20,16,0.1)" : "none";
});

// ── Wishlist toggle ──
document.querySelectorAll(".product-wishlist").forEach((btn) => {
  btn.addEventListener("click", function () {
    this.textContent = this.textContent === "♡" ? "♥" : "♡";
    this.style.color = this.textContent === "♥" ? "#C9A84C" : "";
  });
});

// ── Add to cart feedback ──
document.querySelectorAll(".btn-add").forEach((btn) => {
  btn.addEventListener("click", function () {
    const original = this.textContent;
    this.textContent = "✓ Ditambahkan";
    this.style.background = "var(--espresso)";
    this.style.color = "var(--cream)";
    setTimeout(() => {
      this.textContent = original;
      this.style.background = "";
      this.style.color = "";
    }, 1800);
  });
});

// ── Intersection Observer for scroll animations ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".product-card, .testi-card, .cat-card")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
