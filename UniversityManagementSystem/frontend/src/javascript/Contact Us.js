document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const formResponse = document.getElementById("formResponse");
    formResponse.textContent = "Thank you! Your message has been sent.";
    formResponse.style.color = "green";
    formResponse.classList.remove("hidden");
    setTimeout(() => {
        formResponse.classList.add("hidden");
    }, 5000);
});
