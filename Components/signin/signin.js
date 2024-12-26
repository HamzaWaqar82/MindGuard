// Add event listeners for header buttons
document.querySelector(".emergency-btn").addEventListener("click", function () {
  alert("Emergency feature will redirect to emergency assistance services.");
});

document.querySelector(".sign-btn").addEventListener("click", function () {
  alert("Redirecting to sign-up or sign-in page.");
});

// Existing login form submission
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:5000/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", data.name);
        window.location.href = "../profile/profile.html";
      } else {
        alert(data.message);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred during login");
    });
});
