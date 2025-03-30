document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let role = document.getElementById("role").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;

    // Simple validation
    if (name === "" || email === "" || phone === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Submit Data (For Backend)
    let formData = {
        role: role,
        name: name,
        email: email,
        phone: phone,
        password: password
    };

    console.log("User Registered:", formData);
    alert("Registration successful!");
});

// Show department field only for faculty
document.getElementById("role").addEventListener("change", function() {
    let departmentField = document.getElementById("departmentField");
    if (this.value === "faculty") {
        departmentField.style.display = "block";
    } else {
        departmentField.style.display = "none";
    }
});
