// display a message

let message;
let date = new Date()
// 0 to 23 as the hours
let hours =  date.getHours();

if (hours < 12) {
    message = 'Good Morning'
} else if (hours < 18) {
    message = 'Good Afternoon'
} else if (hours < 22) {
    message = 'Good Evening'
} else {
    message = 'Good Night'
}


const messageElement = document.querySelector('h1')

messageElement.textContent = message;

