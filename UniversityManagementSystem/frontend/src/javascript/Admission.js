// FAQ Toggle
const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        const plusIcon = button.querySelector("span");

        if (answer.style.display === "block") {
            answer.style.display = "none";
            plusIcon.textContent = "+";
        } else {
            answer.style.display = "block";
            plusIcon.textContent = "-";
        }
    });
});

// Course Search
document.getElementById("searchBtn").addEventListener("click", function () {
    let searchValue = document.getElementById("searchCourses").value.toLowerCase();
    
    alert("Searching for: " + searchValue);
});
