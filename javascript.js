const first_name = document.getElementById('first_name')
const last_name = document.getElementById('last_name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const button = document.getElementById('button')
const errorElement = document.getElementById('error')

button.addEventListener('click', (e) => {
    if (first_name.value === '' || first_name == null) {
        messages.push('First name is required.')
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ')
    }

})