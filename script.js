//make the save meal data button function
$(document).ready(function(){
  //code goes here 
  
  $("#saveMeal").on("click", function(){
    // call meal type?\
      let statusText = underConstruction("not ready");
    // update the status
      $("#saveMeal").text(statusText).prop("disabled", true);
  
     });
  
    // pass a status (ready or not ready) and get back a message for user
    // rn, not ready
    function underConstruction(status){
 
      return "not yet ready";
    };
  }
);

//make the information link button functioning
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function toggleLoginForm() {
  const form = document.getElementById("loginForm");
  form.style.display = (form.style.display === "block") ? "none" : "block";
}


//login stuff
function toggleLoginForm() {
  const form = document.getElementById("loginForm");
  form.style.display = (form.style.display === "block") ? "none" : "block";
}

function submitLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Perform login validation or submission here
  if (username && password) {
    // Hide login form and show user info
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("userInfo").style.display = "block";
    document.getElementById("userGreeting").textContent = `Welcome, ${username}`;

    // Change login link to logout
    const loginLink = document.getElementById("loginLink");
    loginLink.textContent = "Logout";
    loginLink.setAttribute("onclick", "logout()");
  } else {
    alert("Please enter both username and password.");
  }
}

function logout() {
  // Hide user info and show login form
  document.getElementById("userInfo").style.display = "none";
  document.getElementById("loginForm").style.display = "block";

  // Reset the login link text
  const loginLink = document.getElementById("loginLink");
  loginLink.textContent = "Login";
  loginLink.setAttribute("onclick", "toggleLoginForm()");
}
