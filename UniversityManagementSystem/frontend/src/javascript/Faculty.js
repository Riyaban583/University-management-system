document.getElementById("searchFaculty").addEventListener("input", function () {
    let searchValue = this.value.toLowerCase();
    let facultyCards = document.querySelectorAll(".faculty-card");

    facultyCards.forEach(card => {
        let name = card.querySelector("h3").textContent.toLowerCase();
        let department = card.getAttribute("data-department").toLowerCase();
        
        if (name.includes(searchValue) || department.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
