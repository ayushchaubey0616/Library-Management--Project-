function validateLogin() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "student@test.com" && password === "12345") {
    alert("Login Successful!");
    window.location.href = "booking.html";
    return false;
  } else {
    alert("Invalid email or password!");
    return false;
  }
}