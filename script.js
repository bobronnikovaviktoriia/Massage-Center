const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const appointmentForm = document.getElementById("appointmentForm");
const formMessage = document.getElementById("formMessage");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

appointmentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;

  if (name === "" || email === "" || phone === "" || service === "" || date === "") {
    formMessage.textContent = "Please fill out all fields.";
    formMessage.style.color = "#d90429";
    return;
  }

  formMessage.textContent = "Thank you! Your appointment request has been received.";
  formMessage.style.color = "#2d6a4f";

  appointmentForm.reset();
});
