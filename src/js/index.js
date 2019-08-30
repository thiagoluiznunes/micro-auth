import axios from 'axios';
import toastr from 'toastr';
import '../css/style.css';

const AUTH_URL = 'https://ci-auth-service.herokuapp.com/api/v1/auth';

const createAccount = document.getElementById('createAccount');
const loginAccount = document.getElementById('loginAccount');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');

loginAccount.addEventListener('click', () => {
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
});

createAccount.addEventListener('click', () => {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signupForm').style.display = 'block';
});

loginBtn.addEventListener('click', () => {
  const form = document.getElementById('loginForm');

  axios.post(`${AUTH_URL}/login`, {
    email: form[0].value,
    password: form[1].value
  })
    .then((res) => {
      toastr.success('Login realizado!');
    })
    .catch((error) => {
      if (error.response) {
        toastr.error(error.response.data.errors);
      }
    });
});

signupBtn.addEventListener('click', () => {
  const form = document.getElementById('signupForm');
  axios.post(`${AUTH_URL}/signup`, {
    name: form[0].value,
    email: form[1].value,
    password: form[2].value,
    confirm_password: form[3].value
  })
    .then((res) => {
      toastr.success('Usuário cadastrado com sucesso!');
    })
    .catch((error) => {
      if (error.response) {
        toastr.error(error.response.data.errors);
      }
    });
});
