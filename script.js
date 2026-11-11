// Front-end demonstration: validates required fields and displays a success message.
document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();
  if (!this.checkValidity()) { this.reportValidity(); return; }
  const name = document.getElementById("fullName").value.trim();
  document.getElementById("formMessage").textContent =
    `Thank you, ${name}! Your demo registration has been received.`;
  this.reset();
});
