let input = document.querySelector('#senha');
let eye = document.querySelector('.eye');

eye.addEventListener('click', function() {
    input.type = input.type == 'text' ? 'password' : 'text';

    if(input.type == 'password') {
        eye.setAttribute('src', './assets/images/eye.svg');
    } else {
        eye.setAttribute('src', './assets/images/eye-focus.svg');
    }
})
