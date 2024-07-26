const mode = document.getElementById('mode_icon');
const form = document.getElementById('login_form');
const container = document.getElementById('container');
const button = document.getElementById('login_button');
const forgot = document.getElementById('forgot_password');
const loginUnderline = document.getElementById('form_header')

mode.addEventListener('click', () => {
  if(mode.classList.contains('fa-moon')) {
    mode.classList.remove('fa-moon')
    mode.classList.add('fa-sun')
    loginUnderline.classList.add('dark')

    form.classList.add('dark')
    container.classList.add('container-dark')

    forgot.classList.add('dark')
    button.classList.add('dark-button')

    return;
  }
    mode.classList.remove('fa-sun')
    mode.classList.add('fa-moon')
    loginUnderline.classList.remove('dark')
    
    form.classList.remove('dark')
    container.classList.remove('container-dark')

    forgot.classList.remove('dark')
    button.classList.remove('dark-button')
});