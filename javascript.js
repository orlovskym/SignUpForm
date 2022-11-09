const first_name = document.getElementById('first_name')
const last_name = document.getElementById('last_name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const button = document.getElementById('button')
const errorElement = document.getElementById('error')

button.addEventListener('click', () => {
    if (first_name.value === '' || first_name == null) {
        errorElement.innerText='First name is required.'
        first_name.className = " invalidElement"
    } else if (last_name.value === '' || last_name == null) {
        errorElement.innerText='Last name is required.'
        last_name.className = " invalidElement"
    } else if (email.value === '' || email == null) {
        errorElement.innerText='Email is required.'
        email.className = " invalidElement"
    } else if (phone.value === '' || phone == null) {
        errorElement.innerText='Phone number is required.'
        phone.className = " invalidElement"
    } else if (password.value === '' || password == null) {
        errorElement.innerText='Password is required.'
        password.className = " invalidElement"
    } else if (password.value !== password2.value) {
        errorElement.innerText='Passwords do not match.'
        password.className = " invalidElement"
        password2.className = " invalidElement"
    } else {
        errorElement.innerText=''
        first_name.classList.remove("invalidElement")
        last_name.classList.remove("invalidElement")
        email.classList.remove("invalidElement")
        phone.classList.remove("invalidElement")
        password.classList.remove("invalidElement")
        password2.classList.remove("invalidElement")
    }
    })