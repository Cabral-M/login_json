// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

let $user = window.document.querySelector('input#username');
let $pass = window.document.querySelector('input#password');
let $btn = window.document.querySelector('button#btn_login');

$btn.addEventListener('click', validation)

function validation() {
  fetch("data.json").then((response) => {
    response.json().then((data) => {
      data.users.map((user) => {
        if (($user.value === user.username) && ($pass.value === user.password)) {
          window.location.href = "dashboard.html";
        } else {
          alert('Usuário ou senha inválidos');
        }
      })
    })
  })
}