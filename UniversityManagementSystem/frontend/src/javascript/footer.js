// Auto-update Year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth Scroll to Top
document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
