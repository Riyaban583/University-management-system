document.getElementById("about-btn").addEventListener("focus", function() {
    document.getElementById("menu").style.display = "block";
});

document.addEventListener("click", function(event) {
    var menu = document.getElementById("menu");
    var button = document.getElementById("about-btn");
    
    if (event.target !== menu && event.target !== button) {
        menu.style.display = "none";
    }
});

document.getElementById("menu").addEventListener("focusout", function(event) {
    if (!this.contains(event.relatedTarget)) {
        this.style.display = "none";
    }
});
