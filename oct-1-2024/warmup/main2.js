const buttonElement = document.querySelector('button')

buttonElement.addEventListener('click', async function() {
    const inputElement = document.querySelector('input')
    const value = inputElement.value;

    for(let i = 0, message =''; i < value.length; i++) {
        const randomTime = Math.random() * 1000
        message += value[i]
        displayMessage(message);
        await wait(randomTime)
    }
})

function displayMessage(message) {
    const messageElement = document.querySelector('.message')

    messageElement.textContent = message;
}

async function wait(timeInMilliseconds) {
    await new Promise(res => {
        setTimeout(() => {
            res()
        }, timeInMilliseconds)
    })
}