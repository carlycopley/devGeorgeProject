$(document).ready(function () {

  // Save Meal Button Handler
  $("#saveMeal").on("click", function (e) {
    e.preventDefault();

    const date = $("#dateLog").val();
    const mealType = $("#mealType").val();
    const mealDetails = $("#mealDetails").val();

    if (!date || !mealType || !mealDetails) {
      alert("Please fill in all fields.");
      return;
    }

    // Create new meal log element
    const mealEntry = `
      <strong>${date}</strong>
      <ul class="listItem">
        <li>${mealType}: ${mealDetails}</li>
      </ul>
    `;

    // Append to the body (you can create a specific section for new logs)
    $("form").after(mealEntry);

    // Reset form
    $("#dateLog").val('');
    $("#mealType").val('');
    $("#mealDetails").val('');

    // Optional status message
    $(this).text("Saved!").prop("disabled", true);
    setTimeout(() => {
      $("#saveMeal").text("Save meal data").prop("disabled", false);
    }, 2000);
  });

});

// Collapsible Section
document.querySelectorAll(".collapsible").forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

// Toggle Login Form
function toggleLoginForm() {
  const form = document.getElementById("loginForm");
  form.style.display = (form.style.display === "block") ? "none" : "block";
}

// Submit Login
function submitLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("userInfo").style.display = "block";
    document.getElementById("userGreeting").textContent = `Welcome, ${username}`;

    const loginLink = document.getElementById("loginLink");
    loginLink.textContent = "Logout";
    loginLink.setAttribute("onclick", "logout()");
  } else {
    alert("Please enter both username and password.");
  }
}

// Logout Function
function logout() {
  document.getElementById("userInfo").style.display = "none";
  document.getElementById("loginForm").style.display = "block";

  const loginLink = document.getElementById("loginLink");
  loginLink.textContent = "Login";
  loginLink.setAttribute("onclick", "toggleLoginForm()");
}
