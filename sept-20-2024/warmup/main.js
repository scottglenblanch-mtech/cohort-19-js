const button = document.querySelector('button')

button.addEventListener('click', function(event) {
    console.log('clicked!')
    event.preventDefault()
   
    const userInput = document.querySelector('input[name="user"]').value
    const passwordInput = document.querySelector('input[name="password"]').value
    
    if (isValidEmail(userInput) && isValidPassword(passwordInput)) {
        displayUserAndPassword(userInput, passwordInput)
    } else {
        let alertMessage = ''

        if (!isValidEmail(userInput)) {
            alertMessage += 'user email needs to be a valid email\n'
        }

        if (!isValidPassword(passwordInput)) {
            alertMessage += 'needs to be a valid password\n'
        }


        alert(alertMessage)
    }
})

function isValidPassword(password) {
    const minLength = 8;
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;
    const numberPattern = /[0-9]/;

    if (password.length < minLength) {
        return false;
    }
    if (!specialCharPattern.test(password)) {
        return false;
    }
    if (!uppercasePattern.test(password)) {
        return false;
    }
    if (!lowercasePattern.test(password)) {
        return false;
    }
    if (!numberPattern.test(password)) {
        return false;
    }
    return true;
}

function isValidEmail (email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function displayUserAndPassword(userInput, passwordInput) {
    const displayUserElement = document.querySelector('.display-user')
    const displayPasswordElement = document.querySelector('.display-password')

        // display the input from password as *

    displayUserElement.textContent = userInput
    displayPasswordElement.textContent = Array.from({ length: passwordInput.length }).fill('*').join('')
}