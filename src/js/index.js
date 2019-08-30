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

});

loginBtn.addEventListener('click', () => {

});
