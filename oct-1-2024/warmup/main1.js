


const buttonElement = document.querySelector('button')

buttonElement.addEventListener('click', function() {
 

    const inputElement = document.querySelector('input')
    const messageElement = document.querySelector('.message')

    const value = inputElement.value;

    let characterPosition = 0
    let message = ''

    const intervalId = setInterval(() => {

        // if the characterPosition is greater 
        // than the completed message, stop

        if (characterPosition >= value.length){
            clearInterval(intervalId)
            console.log('we are done!')
        } else {
            message += value[characterPosition];
            messageElement.textContent = message;
    
            characterPosition += 1
        }


    }, 500)

   
    

})