document.addEventListener("DOMContentLoaded", () => {
  // Get form elements
  const signupForm = document.getElementById("signup-form");
  const fullnameInput = document.getElementById("fullname");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const googleBtn = document.getElementById("google-btn");
  const facebookBtn = document.getElementById("facebook-btn");

  // Social media signup handlers
  googleBtn.addEventListener("click", () => {
    // For now, just redirect to Google sign-in
    window.location.href = "https://accounts.google.com/signin";
  });

  facebookBtn.addEventListener("click", () => {
    // For now, just redirect to Facebook login
    window.location.href = "https://www.facebook.com/login";
  });

  // Form validation and submission
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Basic validation
    if (!validateFullname(fullnameInput.value)) {
      alert("Please enter a valid full name (minimum 2 words)");
      return;
    }

    if (!validateEmail(emailInput.value)) {
      alert("Please enter a valid email address");
      return;
    }

    if (!validatePassword(passwordInput.value)) {
      alert(
        "Password must be at least 8 characters long and contain at least one number and one letter"
      );
      return;
    }

    // If validation passes, proceed with signup
    handleSignup({
      fullname: fullnameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    });
  });

  // Header button handlers (reusing from signin page)
  document
    .querySelector(".emergency-btn")
    .addEventListener("click", function () {
      alert(
        "Emergency feature will redirect to emergency assistance services."
      );
    });

  document.querySelector(".sign-btn").addEventListener("click", function () {
    alert("Redirecting to sign-up or sign-in page.");
  });
});

// Validation functions
function validateFullname(fullname) {
  const words = fullname.trim().split(/\s+/);
  return words.length >= 2 && words.every((word) => word.length >= 2);
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  // At least 8 characters, 1 letter, and 1 number
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordRegex.test(password);
}

// Signup handler function
function handleSignup(userData) {
  fetch("http://localhost:5000/api/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", data.name);
        window.location.href = "../profile/profile.html"; // Redirect to profile page
      } else {
        alert(data.message);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred during signup");
    });
}
