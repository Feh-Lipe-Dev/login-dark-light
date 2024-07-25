const mode = document.getElementById('mode_icon');
const form = document.getElementById('login_form');
const container = document.getElementById('container');
const button = document.getElementById('login_button');

mode.addEventListener('click', () => {
  if(mode.classList.contains('fa-moon')) {
    mode.classList.remove('fa-moon')
    mode.classList.add('fa-sun')

    form.classList.add('dark')
    container.classList.add('container-dark')
    button.classList.add('dark-button')

    return;
  }
    mode.classList.remove('fa-sun')
    mode.classList.add('fa-moon')
    
    form.classList.remove('dark')
    container.classList.remove('container-dark')
    button.classList.remove('dark-button')
});