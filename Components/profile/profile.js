import { API_ENDPOINTS } from "./config";

document.addEventListener("DOMContentLoaded", async () => {
  // Check if user is authenticated
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "../signin/signin.html";
    return;
  }

  // Add logout functionality
  const logoutBtn = document.createElement("button");
  logoutBtn.className = "logout-btn";
  logoutBtn.textContent = "Logout";
  document.querySelector("nav").appendChild(logoutBtn);

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    window.location.href = "../signin/signin.html";
  });

  // Profile form elements
  const profileForm = {
    firstName: document.getElementById("firstName"),
    lastName: document.getElementById("lastName"),
    phone: document.getElementById("phone"),
    email: document.getElementById("email"),
  };

  // Emergency contact form elements
  const emergencyForm = {
    firstName: document.getElementById("emergencyFirstName"),
    lastName: document.getElementById("emergencyLastName"),
    phone: document.getElementById("emergencyPhone"),
    email: document.getElementById("emergencyEmail"),
  };

  // Alert preferences
  const alertPreferences = {
    email: document.getElementById("emailAlert"),
    sms: document.getElementById("smsAlert"),
    app: document.getElementById("appAlert"),
  };

  // Button handlers
  document
    .querySelector(".update-btn")
    .addEventListener("click", handleProfileUpdate);
  document
    .querySelector(".view-data-btn")
    .addEventListener("click", handleViewData);
  document
    .querySelector(".backup-btn")
    .addEventListener("click", handleBackupData);
  document
    .querySelector(".add-contact-btn")
    .addEventListener("click", handleAddContact);
  document
    .querySelector(".save-preferences-btn")
    .addEventListener("click", handleSavePreferences);
  document
    .querySelector(".deactivate-btn")
    .addEventListener("click", handleDeactivateAccount);
  document
    .querySelector(".delete-btn")
    .addEventListener("click", handleDeleteAccount);
  document
    .querySelector(".emergency-btn")
    .addEventListener("click", handleEmergency);

  // Phone number formatting
  [profileForm.phone, emergencyForm.phone].forEach((phoneInput) => {
    phoneInput.addEventListener("input", formatPhoneNumber);
  });

  // Initial profile load
  try {
    const response = await fetch(API_ENDPOINTS.profile.get, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const userData = await response.json();
    populateUserData(userData);
  } catch (error) {
    console.error("Error loading profile:", error);
  }

  // Handle Emergency Contact
  async function handleAddContact() {
    if (!validateEmergencyContact()) return;

    try {
      const response = await fetch(API_ENDPOINTS.emergency.contacts, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          firstName: emergencyForm.firstName.value,
          lastName: emergencyForm.lastName.value,
          phone: emergencyForm.phone.value,
          email: emergencyForm.email.value,
        }),
      });

      if (response.ok) {
        alert("Emergency contact added successfully!");
        clearEmergencyForm();
      } else {
        const data = await response.json();
        alert(data.error);
      }
    } catch (error) {
      alert("Error adding emergency contact: " + error.message);
    }
  }

  // Handle Alert Preferences
  async function handleSavePreferences() {
    try {
      const response = await fetch(API_ENDPOINTS.profile.preferences, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          emailAlerts: alertPreferences.email.checked,
          smsAlerts: alertPreferences.sms.checked,
          appAlerts: alertPreferences.app.checked,
        }),
      });

      if (response.ok) {
        alert("Alert preferences updated successfully!");
      } else {
        const data = await response.json();
        alert(data.error);
      }
    } catch (error) {
      alert("Error updating preferences: " + error.message);
    }
  }

  // Handle Account Management
  async function handleDeactivateAccount() {
    if (
      confirm("Are you sure you want to temporarily deactivate your account?")
    ) {
      try {
        const response = await fetch(API_ENDPOINTS.profile.deactivate, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (response.ok) {
          localStorage.removeItem("token");
          window.location.href = "../signin/signin.html";
        } else {
          const data = await response.json();
          alert(data.error);
        }
      } catch (error) {
        alert("Error deactivating account: " + error.message);
      }
    }
  }

  async function handleDeleteAccount() {
    if (
      confirm(
        "WARNING: This action cannot be undone. Are you sure you want to permanently delete your account?"
      )
    ) {
      if (
        confirm(
          "Final warning: All your data will be permanently deleted. Continue?"
        )
      ) {
        try {
          const response = await fetch(API_ENDPOINTS.profile.delete, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });

          if (response.ok) {
            localStorage.removeItem("token");
            window.location.href = "../signin/signin.html";
          } else {
            const data = await response.json();
            alert(data.error);
          }
        } catch (error) {
          alert("Error deleting account: " + error.message);
        }
      }
    }
  }

  // Handle Emergency Button
  async function handleEmergency() {
    try {
      const response = await fetch(API_ENDPOINTS.emergency.initiate, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        alert("Emergency services and contacts have been notified!");
      } else {
        const data = await response.json();
        alert(data.error);
      }
    } catch (error) {
      alert("Error initiating emergency protocol: " + error.message);
    }
  }

  // Helper function to populate user data
  function populateUserData(userData) {
    profileForm.firstName.value = userData.firstName || "";
    profileForm.lastName.value = userData.lastName || "";
    profileForm.phone.value = userData.phone || "";
    profileForm.email.value = userData.email || "";

    alertPreferences.email.checked = userData.alertPreferences?.email ?? true;
    alertPreferences.sms.checked = userData.alertPreferences?.sms ?? false;
    alertPreferences.app.checked = userData.alertPreferences?.app ?? true;
  }

  // Utility functions
  function validateProfileData() {
    if (!profileForm.firstName.value || !profileForm.lastName.value) {
      alert("Please enter both first and last name");
      return false;
    }

    if (!validateEmail(profileForm.email.value)) {
      alert("Please enter a valid email address");
      return false;
    }

    if (!validatePhone(profileForm.phone.value)) {
      alert("Please enter a valid phone number");
      return false;
    }

    return true;
  }

  function validateEmergencyContact() {
    if (!emergencyForm.firstName.value || !emergencyForm.lastName.value) {
      alert("Please enter both first and last name for emergency contact");
      return false;
    }

    if (!validateEmail(emergencyForm.email.value)) {
      alert("Please enter a valid email address for emergency contact");
      return false;
    }

    if (!validatePhone(emergencyForm.phone.value)) {
      alert("Please enter a valid phone number for emergency contact");
      return false;
    }

    return true;
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    return /^\(\d{3}\) \d{3}-\d{4}$/.test(phone);
  }

  function formatPhoneNumber(e) {
    let input = e.target.value.replace(/\D/g, "");
    if (input.length > 10) input = input.substr(0, 10);

    if (input.length >= 6) {
      e.target.value = `(${input.substr(0, 3)}) ${input.substr(
        3,
        3
      )}-${input.substr(6)}`;
    } else if (input.length >= 3) {
      e.target.value = `(${input.substr(0, 3)}) ${input.substr(3)}`;
    } else if (input.length > 0) {
      e.target.value = `(${input}`;
    }
  }

  function clearEmergencyForm() {
    emergencyForm.firstName.value = "";
    emergencyForm.lastName.value = "";
    emergencyForm.phone.value = "";
    emergencyForm.email.value = "";
  }

  // Action handlers
  async function handleViewData() {
    try {
      const response = await fetch(API_ENDPOINTS.profile.get, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();

      // Create and download data file
      const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json",
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "mindguard-personal-data.json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert("Error viewing data: " + error.message);
    }
  }

  async function handleBackupData() {
    try {
      const response = await fetch(`${API_BASE_URL}/data/backup`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "mindguard-backup.json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert("Error creating backup: " + error.message);
    }
  }
});
