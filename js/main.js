function toggleDetails(event, id) {
  event.preventDefault();
  const details = document.getElementById(id);
  details.classList.toggle('hidden');
}

function validateForm() {
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const mensaje = document.getElementById('mensaje').value;
  const errorMessage = document.getElementById('error-message');
  const registeredEmails = ["test@example.com", "user@example.com"];
  
  if (registeredEmails.includes(email)) {
    errorMessage.textContent = "Este correo ya está registrado.";
    errorMessage.classList.remove('hidden');
    return false;
  }
  
  if (!nombre || !email || !telefono || !mensaje) {
    errorMessage.classList.remove('hidden');
    return false;
  }
  
  errorMessage.classList.add('hidden');
  return true;
}

document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');

  menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('active');
  });

  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navbar.classList.remove('active');
    });
  });
});
