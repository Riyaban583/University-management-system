// Toggle Between Student & Faculty Login
document.getElementById("studentBtn").addEventListener("click", function () {
    this.classList.add("active");
    document.getElementById("facultyBtn").classList.remove("active");
});

document.getElementById("facultyBtn").addEventListener("click", function () {
    this.classList.add("active");
    document.getElementById("studentBtn").classList.remove("active");
});

// Show/Hide Password
document.getElementById("togglePassword").addEventListener("change", function () {
    const passwordField = document.getElementById("password");
    passwordField.type = this.checked ? "text" : "password";
});

// Handle Login Submission
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Login Successful! (Backend Integration Needed)");
});

// Google Login (Placeholder)
document.getElementById("googleLogin").addEventListener("click", function () {
    alert("Redirecting to Google Login...");
});
