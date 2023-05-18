const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username === 'usuario' && password === 'password') {
    alert('Nombre de usuario o contraseña CORRECTOS');
    window.location.href = 'login.html';
  } else {
    alert('Nombre de usuario o contraseña incorrectos');
  }
});