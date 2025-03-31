// muestra contraseña
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    
    // toggle the eye icon
    this.classList.toggle('fa-eye-slash');
});

// formulario
// const form = document.getElementById('registerForm');
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const formData = new FormData(form);          console.log(form, formData, event)
//   fetch('guardar_datos.php', {
//     method: 'POST',
//     body: formData
//   })
//   .then(response => response.text())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));
// });