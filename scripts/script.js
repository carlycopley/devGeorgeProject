$(document).ready(function () {
  // Handle Save Meal button
  $("#saveMeal").on("click", function (e) {
    e.preventDefault();

    const date = $("#dateLog").val();
    const mealType = $("#mealType").val();
    const mealDetails = $("#mealDetails").val();

    if (!date || !mealType || !mealDetails) {
      alert("Please fill in all fields.");
      return;
    }

    // Create a new meal entry
    const mealEntry = `
      <strong>${date}</strong>
      <ul class="listItem">
        <li>${mealType}: ${mealDetails}</li>
      </ul>
    `;

    // Append it after the form
    $("#mealForm").after(mealEntry);

    // Reset the form fields
    $("#dateLog").val('');
    $("#mealType").val('');
    $("#mealDetails").val('');

    // Feedback message
    $(this).text("Saved!").prop("disabled", true);
    setTimeout(() => {
      $("#saveMeal").text("Save meal data").prop("disabled", false);
    }, 2000);
  });
});

// Collapsible section toggle
document.querySelectorAll(".collapsible").forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

// Toggle Login Form visibility
function toggleLoginForm() {
  const form = document.getElementById("loginForm");
  form.style.display = form.style.display === "block" ? "none" : "block";
}

// Submit Login function
function submitLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("userInfo").style.display = "block";
    document.getElementById("userGreeting").textContent = Welcome, ${username};
    userGreeting.style.backgroundColor = "#f8f9fa"; 
    
    const loginLink = document.getElementById("loginLink");
    loginLink.textContent = "Logout";
    loginLink.setAttribute("onclick", "logout()");
  } else {
    alert("Please enter both username and password.");
  }
}

// Logout logic
function logout() {
  document.getElementById("userInfo").style.display = "none";
  document.getElementById("loginForm").style.display = "block";

  const loginLink = document.getElementById("loginLink");
  loginLink.textContent = "Login";
  loginLink.setAttribute("onclick", "toggleLoginForm()");
}
